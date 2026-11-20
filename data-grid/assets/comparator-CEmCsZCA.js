const t=`import '@universal-material/data-grid';
import type { GridColumnDef } from '@universal-material/data-grid';

import { createGrid } from '../shared/controls.js';
import { makeOrders, type Order } from '../shared/data.js';

export const meta = {
  title: 'Custom comparator',
  description: 'Status sorts in workflow order (Pending → Paid → Shipped → Delivered → Cancelled) instead of alphabetically, and Product sorts by its length. A \`comparator(a, b, itemA, itemB)\` returns the **ascending** order; the grid reverses it for descending. A column with only a \`comparator\` (no \`path\`) can sort too.',
};

const workflow = ['Pending', 'Paid', 'Shipped', 'Delivered', 'Cancelled'];

export default (host: HTMLElement) => {
  const grid = createGrid(host, 380);

  const columns: GridColumnDef<Order>[] = [
    { path: 'id', label: 'Order', width: 90, dataType: 'number' },
    { path: 'customer', label: 'Customer', width: 190 },
    {
      path: 'status',
      label: 'Status',
      width: 140,
      sortOrder: 'asc',
      comparator: (a: string, b: string) => workflow.indexOf(a) - workflow.indexOf(b),
    },
    {
      path: 'product',
      label: 'Product (by length)',
      width: 190,
      comparator: (a: string, b: string) => a.length - b.length,
    },
    {
      label: 'Revenue per unit',
      width: 170,
      alignment: 'end',
      displayValue: (_value, item) => (item.total / item.quantity).toFixed(2),
      // No \`path\`: the comparator reads the items.
      comparator: (_a, _b, itemA, itemB) => itemA.total / itemA.quantity - itemB.total / itemB.quantity,
    },
  ];

  grid.keyExpr = 'id';
  grid.columns = columns;
  grid.items = makeOrders(200);
};
`;export{t as default};
