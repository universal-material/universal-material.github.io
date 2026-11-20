const n=`import '@universal-material/data-grid';
import type { DataGrid, GridColumnDef } from '@universal-material/data-grid';

import { button, controls, createGrid, select, stat } from '../shared/controls.js';
import { leanRow, type LeanRow } from '../shared/data.js';

export const meta = {
  title: 'A million rows in the browser',
  description: 'Every row lives in memory (\`items\`). Pick a size, then sort, filter (filter row or search), group by dragging a header or with the buttons — the timings below are measured on your machine. Totals in the footer are recomputed on every change. 5 million rows need about 1 GB of memory.',
};

// Keep the definitions: the API takes the same column objects (\`sortColumn(columns.price, …)\`).
const columns = {
  id: { path: 'id', label: 'ID', width: 120, dataType: 'number' },
  name: { path: 'name', label: 'Name', width: 180 },
  country: { path: 'country', label: 'Country', width: 180 },
  quantity: { path: 'quantity', label: 'Quantity', width: 140, dataType: 'number' },
  price: { path: 'price', label: 'Price', width: 140, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
} satisfies Record<string, GridColumnDef<LeanRow>>;

/** Time from a change until the grid has rendered it (next frames). */
const measure = async (grid: DataGrid, change: () => void) => {
  const start = performance.now();
  change();
  await grid.updateComplete;
  await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  return Math.round(performance.now() - start);
};

export default (host: HTMLElement) => {
  const grid = createGrid(host, 480);
  const timing = stat();
  let size = 1_000_000;

  grid.keyExpr = 'id';
  grid.columns = Object.values(columns);
  grid.showFilterRow = true;
  grid.showSearchPanel = true;
  grid.summary = {
    total: [
      { column: 'id', type: 'count' },
      { column: 'quantity', type: 'sum' },
      { column: 'price', type: 'avg' },
    ],
    group: [{ column: 'quantity', type: 'sum', display: 'column' }],
  };

  const report = (text: string) => (timing.textContent = text);

  const load = async () => {
    report(\`Generating \${size.toLocaleString()} rows…\`);
    await new Promise(resolve => setTimeout(resolve, 30)); // let the message paint

    const start = performance.now();
    const items = Array.from({ length: size }, (_, i) => leanRow(i));
    const generated = Math.round(performance.now() - start);

    const rendered = await measure(grid, () => (grid.items = items));
    report(\`\${size.toLocaleString()} rows · generated in \${generated} ms · rendered in \${rendered} ms\`);
  };

  const run = (label: string, change: () => void) => async () => {
    report(\`\${label}…\`);
    report(\`\${label}: \${await measure(grid, change)} ms\`);
  };

  controls(host,
    select('Rows', [['100000', '100,000'], ['1000000', '1,000,000'], ['2000000', '2,000,000'], ['5000000', '5,000,000']], String(size), value => {
      size = Number(value);
      void load();
    }),
    button('Sort by price', run('Sort by price', () => grid.sortColumn(columns.price, 'desc'))),
    button('Group by country', run('Group by country', () => grid.groupColumn(columns.country))),
    button('Expand all', run('Expand all groups', () => grid.expandAllGroups())),
    button('Filter quantity > 9,000', run('Filter', () => (grid.filterValue = ['quantity', '>', 9_000]))),
    button('Reset', run('Reset', () => {
      grid.clearFilter();
      grid.clearSorting();
      grid.getGrouping().forEach(column => grid.ungroupColumn(column));
    })),
    timing);

  void load();

  return () => {
    // Drop the reference to the big array right away (the site also removes the grid).
    grid.items = [];
  };
};
`;export{n as default};
