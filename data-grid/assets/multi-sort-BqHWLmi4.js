const t=`import '@universal-material/data-grid';
import type { GridColumnDef, GridSortMode } from '@universal-material/data-grid';

import { controls, createGrid, select } from '../shared/controls.js';
import { makeOrders, type Order } from '../shared/data.js';

export const meta = {
  title: 'Single and multiple sort',
  description: 'The grid starts sorted by Country (ascending) and then Total (descending), from \`sortOrder\` and \`sortIndex\`. In \`multiple\` mode, **Shift+click** adds a column (the header shows its priority) and **Ctrl+click** removes one. \`none\` turns header sorting off; \`sortable: false\` does it for one column.',
};

export default (host: HTMLElement) => {
  const grid = createGrid(host);

  const columns: GridColumnDef<Order>[] = [
    { path: 'country', label: 'Country', width: 170, sortOrder: 'asc', sortIndex: 0 },
    { path: 'customer', label: 'Customer', width: 190 },
    { path: 'category', label: 'Category', width: 140 },
    { path: 'orderDate', label: 'Date', width: 130, dataType: 'date' },
    { path: 'total', label: 'Total', width: 140, dataType: 'number', format: { style: 'currency', currency: 'USD' }, sortOrder: 'desc', sortIndex: 1 },
    { path: 'status', label: 'Status (not sortable)', width: 190, sortable: false },
  ];

  grid.keyExpr = 'id';
  grid.sortMode = 'multiple';
  grid.columns = columns;
  grid.items = makeOrders(500);

  controls(host,
    select<GridSortMode>('Sort mode', ['single', 'multiple', 'none'], 'multiple', value => (grid.sortMode = value)));
};
`;export{t as default};
