const r=`import '@universal-material/data-grid';
import type { GridGroupSummaryItem } from '@universal-material/data-grid';

import { controls, createGrid, select } from '../shared/controls.js';
import { makeOrders, type Order } from '../shared/data.js';

export const meta = {
  title: 'Group summaries',
  description: '\`summary.group\` items are computed for every group. \`display\` places them: \`inline\` in the group row text, \`column\` in the group row under their column, or \`footer\` in a row after the group\\'s items. Regroup by dragging headers; the summaries follow.',
};

type Display = NonNullable<GridGroupSummaryItem['display']>;

export default (host: HTMLElement) => {
  const grid = createGrid(host, 460);

  grid.keyExpr = 'id';
  grid.autoExpandGroups = true;
  grid.columns = [
    { path: 'country', label: 'Country', width: 160, groupIndex: 0 },
    { path: 'customer', label: 'Customer', width: 200 },
    { path: 'product', label: 'Product', width: 150 },
    { path: 'quantity', label: 'Qty', width: 140, dataType: 'number' },
    { path: 'total', label: 'Total', width: 200, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
  ];
  grid.items = makeOrders(400);

  const show = (display: Display) => {
    const group: GridGroupSummaryItem<Order>[] = [
      { column: 'quantity', type: 'sum', display },
      { column: 'total', type: 'sum', display },
    ];

    grid.summary = { group, total: [{ column: 'total', type: 'sum' }] };
  };

  show('column');

  controls(host,
    select<Display>('Display', ['inline', 'column', 'footer'], 'column', show));
};
`;export{r as default};
