const t=`import '@universal-material/data-grid';
import type { GridColumnDef } from '@universal-material/data-grid';

import { button, controls, createGrid } from '../shared/controls.js';
import { makeOrders, type Order } from '../shared/data.js';

export const meta = {
  title: 'Group by ranges',
  description: '\`groupValueGetter(item)\` returns the value to group by instead of the cell value: here the year of the order date, a range of totals and the initial letter of the customer. Groups are identified, sorted and labeled by that value; the cells still show the full value.',
};

// Prefixed so the ranges sort in order.
const range = (total: number) =>
  total < 500 ? '1. Under $500' : total < 2_000 ? '2. $500 to $2,000' : total < 5_000 ? '3. $2,000 to $5,000' : '4. $5,000 and more';

export default (host: HTMLElement) => {
  const grid = createGrid(host, 420);

  const [date, total, customer]: GridColumnDef<Order>[] = [
    { path: 'orderDate', label: 'Date', width: 150, dataType: 'date', groupIndex: 0, groupValueGetter: order => order.orderDate.getUTCFullYear() },
    { path: 'total', label: 'Total', width: 150, dataType: 'number', format: { style: 'currency', currency: 'USD' }, groupValueGetter: order => range(order.total) },
    { path: 'customer', label: 'Customer', width: 200, groupValueGetter: order => order.customer[0]!.toUpperCase() },
  ];

  grid.keyExpr = 'id';
  grid.columns = [date!, total!, customer!, { path: 'product', label: 'Product', width: 150 }, { path: 'country', label: 'Country', width: 150 }];
  grid.items = makeOrders(800);

  const groupOnly = (...columns: GridColumnDef<Order>[]) => {
    grid.getGrouping().forEach(grouped => grid.ungroupColumn(grouped));
    columns.forEach(column => grid.groupColumn(column));
  };

  controls(host,
    button('By year', () => groupOnly(date!)),
    button('By total range', () => groupOnly(total!)),
    button('By initial letter', () => groupOnly(customer!)),
    button('Year, then total range', () => groupOnly(date!, total!)));
};
`;export{t as default};
