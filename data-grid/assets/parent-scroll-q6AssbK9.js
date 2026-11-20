const e=`import '@universal-material/data-grid';
import type { GridColumnDef } from '@universal-material/data-grid';

import { button, checkbox, controls, el } from '../shared/controls.js';
import { leanRow, type LeanRow } from '../shared/data.js';

export const meta = {
  title: 'Scrolling with the page or a panel',
  description: 'With \`scroll-container\`, the grid has no scrollbar of its own: an ancestor (here, the panel) scrolls, with content above and below the grid, and the million rows and 40 columns are still virtualized by what is visible in the panel. The toolbar, headers, totals and the fixed column stick to the panel; the panel\\'s \`scroll-padding-top\` keeps them below its app bar, and keyboard focus never stops under it. \`scroll-container="window"\` does the same with the page.',
};

const columns: GridColumnDef<LeanRow>[] = [
  { path: 'id', label: 'ID', width: 120, dataType: 'number', fixed: 'start' },
  { path: 'name', label: 'Name', width: 180 },
  { path: 'country', label: 'Country', width: 180 },
  { path: 'quantity', label: 'Quantity', width: 140, dataType: 'number' },
  { path: 'price', label: 'Price', width: 140, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
  // Wide enough to scroll sideways: the panel scrolls in both directions.
  ...Array.from({ length: 35 }, (_, n): GridColumnDef<LeanRow> => ({ path: 'quantity', label: \`Extra \${n + 1}\`, width: 120, dataType: 'number' })),
];

export default (host: HTMLElement) => {
  // The panel is yours: it scrolls, so it is focusable and named (WCAG 2.1.1).
  const panel = el('div', { id: 'report-panel', tabIndex: 0, ariaLabel: 'Sales report' });
  panel.setAttribute('role', 'region');
  panel.style.cssText = 'height: 480px; overflow: auto; scroll-padding-top: 48px; border: 1px solid color-mix(in srgb, currentColor 20%, transparent); border-radius: 12px';

  const appBar = el('div', {}, 'Sales report — app bar stuck to the panel');
  appBar.style.cssText = 'position: sticky; top: 0; left: 0; z-index: 5; height: 48px; display: flex; align-items: center; padding: 0 16px; background: var(--u-color-primary-container, #eaddff)';

  const intro = el('p', {}, 'Content above the grid. Scroll the panel: the grid scrolls with it.');
  intro.style.cssText = 'padding: 0 16px; height: 120px; margin: 0';

  const grid = document.createElement('u-grid');
  grid.setAttribute('scroll-container', 'report-panel');
  grid.keyExpr = 'id';
  grid.columns = columns;
  grid.summary = { total: [{ column: 'id', type: 'count' }, { column: 'price', type: 'avg' }] };
  grid.items = Array.from({ length: 1_000_000 }, (_, i) => leanRow(i));

  const outro = el('p', {}, 'Content after the grid: the panel keeps scrolling past the last row.');
  outro.style.cssText = 'padding: 16px; height: 240px; margin: 0';

  panel.append(appBar, intro, grid, outro);
  host.append(panel);

  controls(host,
    button('Focus row 500,000 (API)', () => grid.focusCell(500_000)),
    checkbox('Smooth API scrolling (scroll-behavior)', false, checked => {
      panel.style.scrollBehavior = checked ? 'smooth' : '';
    }),
    button('Use the grid\\'s own scrollbar', () => {
      grid.removeAttribute('scroll-container');
      grid.style.height = '360px';
    }),
    button('Scroll with the panel again', () => {
      grid.style.height = '';
      grid.setAttribute('scroll-container', 'report-panel');
    }));
};
`;export{e as default};
