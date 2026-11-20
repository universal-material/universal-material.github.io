const e=`import '@universal-material/data-grid';
import type { GridColumnDef } from '@universal-material/data-grid';

import { button, controls, createGrid } from '../shared/controls.js';
import { makeOrders, type Order } from '../shared/data.js';

export const meta = {
  title: 'Loading local items',
  description: 'No \`dataSource\`, just an array you fetch yourself: set \`loading\` while the request runs. With no rows yet, a "Loading…" row and placeholder rows take the place of the empty state; on a reload the load panel covers the current rows, which stay readable. "Loading…" is announced after 300 ms and, at the end, the number of rows.',
};

const columns: GridColumnDef<Order>[] = [
  { path: 'id', label: 'Order', width: 100 },
  { path: 'customer', label: 'Customer', width: 180 },
  { path: 'product', label: 'Product', width: 160 },
  { path: 'total', label: 'Total', width: 120, format: { style: 'currency', currency: 'USD' } },
];

// Your own request (here, a fake one with a delay).
const fetchOrders = (count: number) => new Promise<Order[]>(resolve => setTimeout(() => resolve(makeOrders(count)), 1500));

export default (host: HTMLElement) => {
  const grid = createGrid(host, 360);
  grid.keyExpr = 'id';
  grid.columns = columns;

  const load = async (clear: boolean) => {
    if (clear) {
      grid.items = [];
    }

    grid.loading = true;
    grid.items = await fetchOrders(80);
    grid.loading = false;
  };

  void load(true);

  controls(host,
    button('Load from scratch', () => void load(true)),
    button('Reload (keep rows)', () => void load(false)));
};
`;export{e as default};
