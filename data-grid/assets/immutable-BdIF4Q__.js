const e=`import '@universal-material/data-grid';
import type { GridColumnDef } from '@universal-material/data-grid';

import { button, checkbox, controls, createGrid, stat } from '../shared/controls.js';
import { random } from '../shared/data.js';

export const meta = {
  title: 'Immutable items (state-store style)',
  description: 'If your app keeps data in a store (Redux, signals, NgRx…), just assign the new array: with \`keyExpr\`, \`items = next\` keeps the selection, the focused cell and the group expansion, and — unlike \`applyChanges\` — re-sorts and re-filters. Sort by **Load** and watch the servers reorder every second.',
};

interface Server {
  id: string;
  region: string;
  load: number;
  memory: number;
  requests: number;
  healthy: boolean;
}

const REGIONS = ['us-east', 'us-west', 'eu-central', 'sa-east', 'ap-south'];

export default (host: HTMLElement) => {
  const grid = createGrid(host, 420);
  const next = random(8);

  let servers: readonly Server[] = Array.from({ length: 1_000 }, (_, i) => ({
    id: \`srv-\${String(i + 1).padStart(4, '0')}\`,
    region: REGIONS[i % REGIONS.length]!,
    load: next(),
    memory: next(),
    requests: Math.floor(next() * 10_000),
    healthy: true,
  }));

  const columns: GridColumnDef<Server>[] = [
    { path: 'id', label: 'Server', width: 130 },
    { path: 'region', label: 'Region', width: 140 },
    { path: 'load', label: 'Load', width: 120, dataType: 'number', format: { style: 'percent' }, sortOrder: 'desc' },
    { path: 'memory', label: 'Memory', width: 120, dataType: 'number', format: { style: 'percent' } },
    { path: 'requests', label: 'Requests/min', width: 150, dataType: 'number' },
    { path: 'healthy', label: 'Healthy', width: 110, dataType: 'boolean', booleanDisplay: 'icon' },
  ];

  grid.keyExpr = 'id';
  grid.selectionMode = 'multiple';
  grid.showCheckboxes = true;
  grid.showFilterRow = true;
  grid.columns = columns;
  grid.items = servers;

  const info = stat();

  // A reducer: returns a new array with new objects for the rows that changed.
  const reduce = (state: readonly Server[]) => state.map(server => (next() < 0.3
    ? {
      ...server,
      load: Math.min(1, Math.max(0, server.load + (next() - 0.5) * 0.2)),
      memory: Math.min(1, Math.max(0, server.memory + (next() - 0.5) * 0.05)),
      requests: Math.max(0, server.requests + Math.round((next() - 0.5) * 800)),
      healthy: next() > 0.02,
    }
    : server));

  const tick = () => {
    const start = performance.now();
    servers = reduce(servers);
    grid.items = servers;
    void grid.updateComplete.then(() => {
      info.textContent = \`\${servers.length.toLocaleString()} rows replaced · \${grid.selectedKeys.length} selected · \${Math.round(performance.now() - start)} ms\`;
    });
  };

  let timer: ReturnType<typeof setInterval> | undefined = setInterval(tick, 1_000);

  controls(host,
    checkbox('Live', true, live => {
      clearInterval(timer);
      timer = live ? setInterval(tick, 1_000) : undefined;
    }),
    button('Select the 5 busiest', () => {
      const busiest = [...servers].sort((a, b) => b.load - a.load).slice(0, 5);
      grid.selectRows(busiest.map(server => server.id));
    }),
    info);

  return () => clearInterval(timer);
};
`;export{e as default};
