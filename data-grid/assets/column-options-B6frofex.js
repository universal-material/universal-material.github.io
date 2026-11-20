const t=`import '@universal-material/data-grid';

import { createGrid } from '../shared/controls.js';
import { makeOrders } from '../shared/data.js';

export const meta = {
  title: 'Per-column filter options',
  description: '\`filterOperations\` restricts the operation menu of the filter row (the button before each editor), \`defaultFilterOperation\` picks the editor\\'s operation, and \`filterable: false\` leaves a column out of the filter row, the header filter and the search.',
};

export default (host: HTMLElement) => {
  const grid = createGrid(host, 420);

  grid.keyExpr = 'id';
  grid.showFilterRow = true;
  grid.showSearchPanel = true;
  grid.columns = [
    // Starts with by default; only three operations in the menu.
    { path: 'customer', label: 'Customer', width: 200, defaultFilterOperation: 'startswith', filterOperations: ['startswith', 'contains', '='] },
    { path: 'country', label: 'Country', width: 160, defaultFilterOperation: '=' },
    // "At least" by default.
    { path: 'quantity', label: 'Qty', width: 120, dataType: 'number', defaultFilterOperation: '>=' },
    { path: 'total', label: 'Total', width: 150, dataType: 'number', format: { style: 'currency', currency: 'USD' }, filterOperations: ['between', '>=', '<='] },
    // Not filterable and not searched.
    { path: 'product', label: 'Product (not filterable)', width: 210, filterable: false },
  ];
  grid.items = makeOrders(800);
};
`;export{t as default};
