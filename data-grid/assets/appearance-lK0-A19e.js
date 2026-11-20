const e=`import '@universal-material/data-grid';

import { checkbox, controls, createGrid, select } from '../shared/controls.js';
import { makeOrders } from '../shared/data.js';

export const meta = {
  title: 'Appearance options',
  description: 'Row height, zebra striping, row and column lines, the column headers and the group panel are plain properties (or attributes such as \`striped\`, \`show-column-lines\`, \`row-height="40"\`, \`show-group-panel="false"\`).',
};

export default (host: HTMLElement) => {
  const grid = createGrid(host, 380);

  grid.keyExpr = 'id';
  grid.columns = [
    { path: 'customer', label: 'Customer', width: 200 },
    { path: 'country', label: 'Country', width: 160 },
    { path: 'status', label: 'Status', width: 130 },
    { path: 'quantity', label: 'Qty', width: 100, dataType: 'number' },
    { path: 'total', label: 'Total', width: 140, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
  ];
  grid.items = makeOrders(200);

  controls(host,
    select('Row height', ['32', '40', '48', '56'], '48', value => (grid.rowHeight = Number(value))),
    checkbox('Striped', false, value => (grid.striped = value)),
    checkbox('Row lines', true, value => (grid.showRowLines = value)),
    checkbox('Column lines', false, value => (grid.showColumnLines = value)),
    checkbox('Column headers', true, value => (grid.showColumnHeaders = value)),
    checkbox('Group panel', true, value => (grid.showGroupPanel = value)));
};
`;export{e as default};
