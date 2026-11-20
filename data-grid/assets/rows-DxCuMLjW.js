const e=`import '@universal-material/data-grid';
import type { GridSelectionMode } from '@universal-material/data-grid';

import { button, checkbox, controls, createGrid, eventLog, select, stat } from '../shared/controls.js';
import { makeOrders, type Order } from '../shared/data.js';

export const meta = {
  title: 'Row selection',
  description: 'With \`selection-mode="multiple"\` a click selects a row, \`Ctrl\`+click toggles it and \`Shift\`+click selects a range; \`show-checkboxes\` adds a checkbox column with "select all" in its header. The selection is a set of keys (\`keyExpr\`): \`selectRows\`, \`getSelectedItems\` and \`clearSelection\` drive it from code, and \`u-grid-selection-change\` reports every change.',
};

export default (host: HTMLElement) => {
  const grid = createGrid(host, 380);
  const orders = makeOrders(500);

  grid.keyExpr = 'id';
  grid.selectionMode = 'multiple';
  grid.showCheckboxes = true;
  grid.columns = [
    { path: 'id', label: 'Order', width: 90, dataType: 'number' },
    { path: 'customer', label: 'Customer', width: 200 },
    { path: 'country', label: 'Country', width: 160 },
    { path: 'status', label: 'Status', width: 130 },
    { path: 'total', label: 'Total', width: 140, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
  ];
  grid.items = orders;

  const selected = stat('0 selected');
  const log = eventLog(host);

  grid.addEventListener('u-grid-selection-change', event => {
    const { selectedKeys, added, removed, source } = event.detail;
    selected.textContent = \`\${selectedKeys.length} selected\`;
    log.write(\`u-grid-selection-change  source=\${source}  added=[\${added.join(', ')}]  removed=[\${removed.join(', ')}]\`);
  });

  controls(host,
    select<GridSelectionMode>('Mode', ['none', 'single', 'multiple'], 'multiple', value => (grid.selectionMode = value)),
    checkbox('Checkboxes', true, value => (grid.showCheckboxes = value)),
    button('Select orders 1–5', () => grid.selectRows([1, 2, 3, 4, 5])),
    button('Add paid orders', () => {
      // \`append\` adds to the selection instead of replacing it
      grid.selectRows(orders.filter(order => order.status === 'Paid').map(order => order.id), { append: true });
    }),
    button('Log selected items', () => {
      const items: Order[] = grid.getSelectedItems();
      const first = items.slice(0, 5).map(order => \`#\${order.id} \${order.customer}\`).join('; ');
      log.write(\`getSelectedItems(): \${items.length} item(s)  \${first}\${items.length > 5 ? '; …' : ''}\`);
    }),
    button('Clear selection', () => grid.clearSelection()),
    selected);
};
`;export{e as default};
