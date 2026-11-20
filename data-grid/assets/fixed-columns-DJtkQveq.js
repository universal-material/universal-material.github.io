const t=`import '@universal-material/data-grid';
import type { GridColumnDef } from '@universal-material/data-grid';

import { controls, createGrid, select } from '../shared/controls.js';
import { makeOrders, type Order } from '../shared/data.js';

export const meta = {
  title: 'Fixed columns',
  description: '\`fixed: \\'start\\'\` and \`fixed: \\'end\\'\` keep columns in view while you scroll sideways; a shadow shows content passing under them. Fixed columns sit at their edge whatever their position in \`columns\`, and dragging a header reorders only inside its block. Fixing follows the direction: try **RTL**.',
};

export default (host: HTMLElement) => {
  const grid = createGrid(host, 380);

  const columns: GridColumnDef<Order>[] = [
    { path: 'id', label: 'Order', width: 90, fixed: 'start' },
    { path: 'customer', label: 'Customer', width: 180, fixed: 'start' },
    { path: 'country', label: 'Country', width: 160 },
    { path: 'category', label: 'Category', width: 150 },
    { path: 'product', label: 'Product', width: 160 },
    { path: 'status', label: 'Status', width: 140 },
    { path: 'quantity', label: 'Qty', width: 100 },
    { path: 'unitPrice', label: 'Unit price', width: 140, format: { style: 'currency', currency: 'USD' } },
    { path: 'orderDate', label: 'Date', width: 140, dataType: 'date' },
    { path: 'priority', label: 'Priority', width: 110, booleanDisplay: 'icon' },
    // Declared last, but any position works: it is drawn at the end.
    { path: 'total', label: 'Total', width: 140, fixed: 'end', format: { style: 'currency', currency: 'USD' } },
  ];

  grid.keyExpr = 'id';
  grid.columnResizing = true;
  grid.columns = columns;
  grid.items = makeOrders(300);

  controls(host,
    select('Direction', [['ltr', 'LTR'], ['rtl', 'RTL']], 'ltr', value => (grid.dir = value)));
};
`;export{t as default};
