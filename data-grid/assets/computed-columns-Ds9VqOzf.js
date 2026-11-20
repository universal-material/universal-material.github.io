const e=`import '@universal-material/data-grid';
import type { GridColumnDef } from '@universal-material/data-grid';

import { button, controls, createGrid, el } from '../shared/controls.js';
import { makeOrders, type Order } from '../shared/data.js';

export const meta = {
  title: 'Computed columns',
  description: 'A column with a \`valueGetter\` and a \`name\` but no \`path\` is filterable too: the filter row, the header filter (its values come from the getter) and the search all use the computed value, and conditions refer to the column by its \`name\` (\`[\\'size\\', \\'anyof\\', [\\'Large\\']]\`). With a remote \`dataSource\`, set \`filterable: true\` and translate the \`name\` in \`load()\`.',
};

const sizeOf = (order: Order) => order.total >= 5000 ? 'Large' : order.total >= 1000 ? 'Medium' : 'Small';

export default (host: HTMLElement) => {
  const grid = createGrid(host, 420);

  grid.keyExpr = 'id';
  grid.showFilterRow = true;
  grid.headerFilter = true;
  grid.showSearchPanel = true;
  grid.columns = [
    { path: 'customer', label: 'Customer', width: 180 },
    { path: 'status', label: 'Status', width: 130 },
    // Computed: no \`path\`, addressed by \`name\` in filterValue and in the saved state.
    { name: 'size', label: 'Size', width: 120, valueGetter: sizeOf },
    { name: 'situation', label: 'Situation', width: 190, valueGetter: (order: Order) => \`\${order.status}\${order.priority ? ' (priority)' : ''}\` },
    { name: 'unitsPerDollar', label: 'Qty per $1k', width: 140, dataType: 'number', format: { maximumFractionDigits: 2 }, valueGetter: (order: Order) => order.quantity / order.total * 1000 },
    { path: 'total', label: 'Total', width: 130, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
  ] satisfies GridColumnDef<Order>[];
  grid.items = makeOrders(1_000);

  const current = el('code');
  const show = () => (current.textContent = \`filterValue = \${JSON.stringify(grid.filterValue)}\`);
  show();
  grid.addEventListener('u-grid-filter-change', show);

  controls(host,
    button('Large orders', () => {
      grid.filterValue = ['size', 'anyof', ['Large']];
      show();
    }),
    button('Priority situations', () => {
      grid.filterValue = ['situation', 'contains', 'priority'];
      show();
    }),
    button('clearFilter()', () => {
      grid.clearFilter();
      show();
    }));

  host.append(el('p', {}, current));
};
`;export{e as default};
