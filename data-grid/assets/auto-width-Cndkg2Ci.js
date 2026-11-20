const e=`import '@universal-material/data-grid';
import type { GridColumnDef } from '@universal-material/data-grid';

import { button, checkbox, controls, createGrid } from '../shared/controls.js';
import { makeOrders, type Order } from '../shared/data.js';

export const meta = {
  title: 'Auto width',
  description: 'Columns without \`width\` share the free space. With \`column-auto-width\` they are sized to their content (header + rendered rows) instead, measured again when \`items\` change; spare space is still distributed. Load longer names to see it re-measure.',
};

export default (host: HTMLElement) => {
  const grid = createGrid(host, 360);

  // No widths: the grid decides.
  const columns: GridColumnDef<Order>[] = [
    { path: 'id', label: 'Order' },
    { path: 'customer', label: 'Customer' },
    { path: 'country', label: 'Country' },
    { path: 'product', label: 'Product' },
    { path: 'status', label: 'Status' },
    { path: 'total', label: 'Total', format: { style: 'currency', currency: 'USD' } },
  ];

  const orders = makeOrders(100);
  grid.keyExpr = 'id';
  grid.columnAutoWidth = true;
  grid.columnResizing = true;
  grid.columns = columns;
  grid.items = orders;

  let long = false;

  controls(host,
    checkbox('column-auto-width', true, value => (grid.columnAutoWidth = value)),
    button('Toggle long names', () => {
      long = !long;
      // New objects: the grid never mutates your items.
      grid.items = long ? orders.map(order => ({ ...order, customer: \`\${order.customer} de Oliveira Castro\` })) : orders;
    }));
};
`;export{e as default};
