const t=`import '@universal-material/data-grid';
import type { GridColumnDef, GridSort } from '@universal-material/data-grid';

import { button, checkbox, controls, createGrid, eventLog, stat } from '../shared/controls.js';
import { makeOrders, type Order } from '../shared/data.js';

export const meta = {
  title: 'Sorting API and events',
  description: '\`sortColumn(column, order, { append })\` sorts from code and \`getSorting()\` reads the current sort. \`u-grid-sorting\` fires **before** a change and is cancelable — tick the box to allow at most two sorted columns — and \`u-grid-sort-change\` fires after it, for clicks and API calls alike.',
};

const describe = (sorting: readonly GridSort[]) =>
  sorting.map(({ column, order }) => \`\${column.label} \${order}\`).join(', ') || 'none';

export default (host: HTMLElement) => {
  const grid = createGrid(host, 360);

  const [customer, country, product, quantity, total]: GridColumnDef<Order>[] = [
    { path: 'customer', label: 'Customer', width: 190 },
    { path: 'country', label: 'Country', width: 160 },
    { path: 'product', label: 'Product', width: 150 },
    { path: 'quantity', label: 'Qty', width: 100, dataType: 'number' },
    { path: 'total', label: 'Total', width: 140, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
  ];

  grid.keyExpr = 'id';
  grid.sortMode = 'multiple';
  grid.columns = [customer!, country!, product!, quantity!, total!];
  grid.items = makeOrders(300);

  const current = stat('Sorted by: none');
  const log = eventLog(host);
  let limitToTwo = false;

  grid.addEventListener('u-grid-sorting', event => {
    if (limitToTwo && event.detail.sorting.length > 2) {
      event.preventDefault(); // keep the current sort
      log.write(\`u-grid-sorting canceled (\${event.detail.sorting.length} columns)\`);
    }
  });

  grid.addEventListener('u-grid-sort-change', event => {
    const { sorting, previous, source } = event.detail;
    log.write(\`u-grid-sort-change [\${source}]  \${describe(previous)}  →  \${describe(sorting)}\`);
    current.textContent = \`Sorted by: \${describe(grid.getSorting())}\`;
  });

  controls(host,
    button('Total, highest first', () => grid.sortColumn(total!, 'desc')),
    button('Then by customer', () => grid.sortColumn(customer!, 'asc', { append: true })),
    button('Then by quantity', () => grid.sortColumn(quantity!, 'desc', { append: true })),
    button('Remove country', () => grid.sortColumn(country!, null)),
    button('Clear sorting', () => grid.clearSorting()),
    checkbox('At most two columns', false, value => (limitToTwo = value)),
    current);
};
`;export{t as default};
