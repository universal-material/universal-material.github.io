const t=`import '@universal-material/data-grid';

import { createGrid } from '../shared/controls.js';
import { makeOrders } from '../shared/data.js';

export const meta = {
  title: 'Totals footer',
  description: '\`summary.total\` puts a footer under the columns. \`column\` is the column \`path\` (or the column object); \`label\` replaces the aggregate name. Totals use the column format and are recomputed over the rows shown: filter with the filter row and watch them change.',
};

export default (host: HTMLElement) => {
  const grid = createGrid(host, 440);

  grid.keyExpr = 'id';
  grid.showFilterRow = true;
  grid.columns = [
    { path: 'customer', label: 'Customer', width: 200 },
    { path: 'country', label: 'Country', width: 150 },
    { path: 'orderDate', label: 'Date', width: 160, dataType: 'date' },
    { path: 'quantity', label: 'Qty', width: 140, dataType: 'number' },
    { path: 'unitPrice', label: 'Unit price', width: 160, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
    { path: 'total', label: 'Total', width: 190, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
  ];
  grid.summary = {
    total: [
      { column: 'customer', type: 'count', label: 'Orders' },
      { column: 'orderDate', type: 'max', label: 'Last order' },
      { column: 'quantity', type: 'sum' },
      { column: 'unitPrice', type: 'avg' },
      { column: 'total', type: 'sum' },
    ],
  };
  grid.items = makeOrders(1_000);
};
`;export{t as default};
