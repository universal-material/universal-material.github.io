const e=`import { html } from 'lit';
import { keyed } from 'lit/directives/keyed.js';

import '@universal-material/data-grid';
import type { GridColumnDef } from '@universal-material/data-grid';

import { button, checkbox, controls, createGrid, el, select, stat } from '../shared/controls.js';
import { makeStocks, random, type Stock } from '../shared/data.js';

export const meta = {
  title: 'Stock ticker with applyChanges',
  description: 'A \`dataSource\` serves the rows once; a timer (1 tick/s by default, adjustable) then pushes price changes with \`applyChanges({ update })\`. With \`reshapeOnChanges\` the rows re-sort as prices move (sorted by Change % here — click another header to re-sort by it); turn it off and updates stay in place. While a cell has keyboard focus or an editor is open, rows hold still and move once focus leaves the grid. Changed cells flash through a renderer plus \`::part\`; selection survives every tick.',
};

interface Tick extends Stock {
  direction: 'up' | 'down';
  /** Bumped on every update; also the key that restarts the flash. */
  version: number;
  changedAt: number;
}

// Styles reach the cell content through ::part (the renderer adds the parts).
const STYLE = \`
  .ticker::part(tick) { font-variant-numeric: tabular-nums; padding: 2px 6px; border-radius: 6px; }
  .ticker::part(up) { color: light-dark(#0a7a3d, #6fdc9a); }
  .ticker::part(down) { color: light-dark(#b3261e, #ffb4ab); }
  .ticker::part(flash-up) { animation: ticker-up 0.9s ease-out; }
  .ticker::part(flash-down) { animation: ticker-down 0.9s ease-out; }
  @keyframes ticker-up { from { background: rgb(46 160 67 / 0.35); } to { background: transparent; } }
  @keyframes ticker-down { from { background: rgb(218 54 51 / 0.35); } to { background: transparent; } }
  @media (prefers-reduced-motion: reduce) { .ticker::part(flash-up), .ticker::part(flash-down) { animation: none; } }
\`;

const FLASH_MS = 900;

/** Price-like cell: colored by direction; recently changed cells get a new element (\`keyed\`) so the flash restarts. */
const tickRenderer = (item: Tick, { text }: { text: string }) => {
  const recent = Date.now() - item.changedAt < FLASH_MS;
  const parts = \`tick \${item.direction}\${recent ? \` flash-\${item.direction}\` : ''}\`;
  return html\`\${keyed(item.version, html\`<span part=\${parts}>\${text}</span>\`)}\`;
};

/** Price cell: the direction is also in the text (▲/▼), not only in the color. */
const priceRenderer = (item: Tick, context: { text: string }) =>
  tickRenderer(item, { text: \`\${item.version ? (item.direction === 'up' ? '▲ ' : '▼ ') : ''}\${context.text}\` });

export default (host: HTMLElement) => {
  host.append(el('style', {}, STYLE));

  const grid = createGrid(host, 460);
  grid.classList.add('ticker');

  const columns: GridColumnDef<Tick>[] = [
    { path: 'symbol', label: 'Symbol', width: 110, fixed: 'start' },
    { path: 'company', label: 'Company', width: 220 },
    { path: 'sector', label: 'Sector', width: 140 },
    { path: 'price', label: 'Price', width: 130, dataType: 'number', format: { style: 'currency', currency: 'USD' }, renderer: priceRenderer },
    { path: 'change', label: 'Change', width: 120, dataType: 'number', format: { signDisplay: 'exceptZero', minimumFractionDigits: 2, maximumFractionDigits: 2 }, renderer: tickRenderer },
    { path: 'changePercent', label: 'Change %', width: 120, dataType: 'number', sortOrder: 'desc', format: { style: 'percent', signDisplay: 'exceptZero', minimumFractionDigits: 2 }, renderer: tickRenderer },
    { path: 'volume', label: 'Volume', width: 140, dataType: 'number' },
    { path: 'updatedAt', label: 'Updated', width: 130, dataType: 'datetime', format: { timeStyle: 'medium' } },
  ];

  // Current state, by key. The grid never mutates it: each update is a new object.
  const rows = new Map<string, Tick>(makeStocks(200).map(stock => [stock.symbol, { ...stock, direction: 'up', version: 0, changedAt: 0 }]));
  const keys = [...rows.keys()];
  const next = random(42);

  grid.keyExpr = 'symbol';
  grid.reshapeOnChanges = true; // updates re-sort (and re-filter) the rows
  grid.selectionMode = 'multiple';
  grid.showCheckboxes = true;
  grid.columns = columns;
  grid.summary = { total: [{ column: 'volume', type: 'sum' }, { column: 'changePercent', type: 'avg' }] };
  grid.dataSource = { load: async () => ({ data: [...rows.values()] }) };

  let perTick = 20;
  let ticksPerSecond = 1;
  let timer: ReturnType<typeof setInterval> | undefined;
  let sent = 0;
  let since = performance.now();
  const rate = stat();
  rate.removeAttribute('role'); // no live region: a rate read out every second is noise

  const tick = () => {
    const update: Tick[] = [];

    for (let n = 0; n < perTick; n++) {
      const old = rows.get(keys[Math.floor(next() * keys.length)]!)!;
      const price = Math.max(1, Math.round(old.price * (1 + (next() - 0.5) * 0.02) * 100) / 100);
      const row: Tick = {
        ...old,
        price,
        change: Math.round((price - old.open) * 100) / 100,
        changePercent: (price - old.open) / old.open,
        volume: old.volume + Math.floor(next() * 5_000),
        direction: price >= old.price ? 'up' : 'down',
        version: old.version + 1,
        changedAt: Date.now(),
        updatedAt: new Date(),
      };

      rows.set(row.symbol, row);
      update.push(row);
    }

    grid.applyChanges({ update });
    sent += update.length;

    const elapsed = performance.now() - since;

    // About once a second (a little slack: at 1 tick/s the interval jitters around 1000 ms).
    if (elapsed >= 950) {
      rate.textContent = \`\${Math.round(sent * 1000 / elapsed).toLocaleString()} updates/s\`;
      sent = 0;
      since = performance.now();
    }
  };

  const start = () => {
    clearInterval(timer);
    sent = 0;
    since = performance.now();
    timer = setInterval(tick, 1000 / ticksPerSecond);
    toggle.textContent = 'Pause updates';
  };

  const stop = () => {
    clearInterval(timer);
    timer = undefined;
    toggle.textContent = 'Resume updates';
    rate.textContent = 'Paused';
  };

  // First in the tab order, before the grid (WCAG 2.2.2: moving content can be paused).
  const toggle = button('Pause updates', () => (timer ? stop() : start()), { className: 'primary' });

  controls(host,
    toggle,
    select('Ticks per second', ['0.5', '1', '2', '5', '10'], '1', value => {
      ticksPerSecond = Number(value);

      if (timer) {
        start(); // restarts the interval at the new rate
      }
    }),
    select('Updates per tick', ['1', '5', '20', '50', '100'], '20', value => (perTick = Number(value))),
    checkbox('Re-sort on updates', true, checked => (grid.reshapeOnChanges = checked)),
    rate);

  start();

  return () => clearInterval(timer);
};
`;export{e as default};
