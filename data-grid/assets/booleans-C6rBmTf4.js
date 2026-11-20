const e=`import '@universal-material/data-grid';
import type { GridColumnBooleanDisplay, GridColumnDef } from '@universal-material/data-grid';

import { controls, createGrid, select } from '../shared/controls.js';
import { makeOrders, type Order } from '../shared/data.js';

export const meta = {
  title: 'Boolean columns',
  description: 'A boolean column shows the language\\'s \`trueText\`/\`falseText\`, a check/cross icon (\`booleanDisplay: \\'icon\\'\`) or only a check for \`true\` (\`\\'check\\'\`: \`false\` shows nothing, its text stays for screen readers). Each column can have its own words with \`trueText\`/\`falseText\` — used in the cell, the icon name, group rows, filters and exports. Group by **Priority** to see them in the group rows.',
};

export default (host: HTMLElement) => {
  const grid = createGrid(host, 420);

  const priority = (display: GridColumnBooleanDisplay): GridColumnDef<Order> => ({
    path: 'priority',
    label: 'Priority',
    width: 120,
    dataType: 'boolean',
    booleanDisplay: display,
    trueText: 'Urgent',
    falseText: 'Normal',
  });

  const columns = (display: GridColumnBooleanDisplay): GridColumnDef<Order>[] => [
    { path: 'id', label: 'Order', width: 100 },
    { path: 'customer', label: 'Customer', width: 180 },
    priority(display),
    { path: 'status', label: 'Status', width: 130 },
    { path: 'total', label: 'Total', width: 120, format: { style: 'currency', currency: 'USD' } },
  ];

  grid.keyExpr = 'id';
  grid.headerFilter = true;
  grid.columns = columns('check');
  grid.items = makeOrders(60);

  controls(host,
    select('Priority display', ['check', 'icon', 'text'] as const, 'check', display => {
      grid.columns = columns(display);
    }));
};
`;export{e as default};
