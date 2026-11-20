const e=`import '@universal-material/data-grid';
import type { GridColumnDef } from '@universal-material/data-grid';

import { checkbox, controls, createGrid, eventLog } from '../shared/controls.js';
import { makeOrders, type Order } from '../shared/data.js';

export const meta = {
  title: 'Drag to group',
  description: 'The grid starts grouped by Country, then Category (\`groupIndex\` 0 and 1). Drag more headers to the group panel, drag chips to reorder levels, click a chip to reverse its order, right-click it for the menu. \`autoExpandGroups\` opens the groups; \`showGroupCount\` shows the row count. \`groupable: false\` keeps Customer out of the panel.',
};

export default (host: HTMLElement) => {
  const grid = createGrid(host, 440);

  const columns: GridColumnDef<Order>[] = [
    { path: 'country', label: 'Country', width: 160, groupIndex: 0 },
    { path: 'category', label: 'Category', width: 140, groupIndex: 1 },
    { path: 'status', label: 'Status', width: 130 },
    { path: 'customer', label: 'Customer', width: 190, groupable: false },
    { path: 'product', label: 'Product', width: 150 },
    { path: 'total', label: 'Total', width: 140, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
  ];

  grid.keyExpr = 'id';
  grid.autoExpandGroups = true;
  grid.columns = columns;
  grid.items = makeOrders(600);

  controls(host,
    checkbox('Auto-expand groups', true, value => (grid.autoExpandGroups = value)),
    checkbox('Show group count', true, value => (grid.showGroupCount = value)));

  const log = eventLog(host);

  grid.addEventListener('u-grid-group-change', event => {
    const { grouping, source } = event.detail;
    log.write(\`u-grid-group-change [\${source}]  \${grouping.map(column => column.label).join(' › ') || 'not grouped'}\`);
  });
};
`;export{e as default};
