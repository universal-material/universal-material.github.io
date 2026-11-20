const t=`import '@universal-material/data-grid';
import type { GridColumnDef } from '@universal-material/data-grid';

import { makeOrders, type Order } from '../shared/data.js';

export const meta = {
  title: 'Quick start',
  description: 'Import the package once (it registers \`<u-grid>\`), give the grid a height, then set \`columns\` and \`items\` as properties. Click a header to sort, drag a header to the bar above to group.',
};

export default (host: HTMLElement) => {
  const grid = document.createElement('u-grid');
  grid.style.height = '420px'; // the grid fills its container: give it (or its parent) a height

  const columns: GridColumnDef<Order>[] = [
    { path: 'id', label: 'Order', width: 90, dataType: 'number' },
    { path: 'customer', label: 'Customer', width: 200 },
    { path: 'country', label: 'Country', width: 160 },
    { path: 'product', label: 'Product', width: 160 },
    { path: 'orderDate', label: 'Date', width: 140, dataType: 'date' },
    { path: 'total', label: 'Total', width: 140, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
  ];

  grid.keyExpr = 'id';
  grid.columns = columns;
  grid.items = makeOrders(1_000);

  host.append(grid);
};
`;export{t as default};
