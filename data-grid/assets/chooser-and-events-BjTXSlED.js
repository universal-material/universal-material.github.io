const e=`import '@universal-material/data-grid';
import type { GridColumnDef } from '@universal-material/data-grid';

import { button, checkbox, controls, createGrid, eventLog } from '../shared/controls.js';
import { makeOrders, type Order } from '../shared/data.js';

export const meta = {
  title: 'Header menu, column chooser, reordering and events',
  description: 'Every header has a **⋮** button (or right-click it, or press \`Shift\`+\`F10\`): sort, **Pin column ▸** (start, end or unpinned), auto-size this or all columns, move it, group by it, **Choose columns** and **Reset columns**. \`column-chooser\` adds the chooser: search, **Show all columns**, show or hide each column, and reorder by the drag handle or \`Alt+Shift+↑/↓\` on a checkbox (\`showInChooser: false\` leaves Order out; Status starts with \`visible: false\`). The grid is wider than the box, so pinning keeps a column in view while you scroll sideways. Column events fire **only for user gestures** — the API buttons change the grid silently.',
};

export default (host: HTMLElement) => {
  const grid = createGrid(host, 380);

  const total: GridColumnDef<Order> = { path: 'total', label: 'Total', width: 130, format: { style: 'currency', currency: 'USD' } };
  const columns: GridColumnDef<Order>[] = [
    { path: 'id', label: 'Order', width: 100, showInChooser: false },
    { path: 'customer', label: 'Customer', width: 200 },
    { path: 'country', label: 'Country', width: 160 },
    { path: 'category', label: 'Category', width: 160 },
    { path: 'product', label: 'Product', width: 180 },
    { path: 'status', label: 'Status', width: 140, visible: false },
    { path: 'orderDate', label: 'Order date', width: 150, format: { dateStyle: 'medium' } },
    { path: 'priority', label: 'Priority', width: 120, dataType: 'boolean' },
    { path: 'quantity', label: 'Qty', width: 100 },
    { path: 'unitPrice', label: 'Unit price', width: 140, format: { style: 'currency', currency: 'USD' } },
    total,
  ];

  grid.keyExpr = 'id';
  grid.columnChooser = true;
  grid.columnResizing = true;
  grid.columns = columns;
  grid.items = makeOrders(200);

  const log = eventLog(host);

  grid.addEventListener('u-grid-column-visibility-change', ({ detail }) =>
    log.write(\`u-grid-column-visibility-change  \${detail.column.label}: \${detail.visible ? 'shown' : 'hidden'}\`));
  grid.addEventListener('u-grid-column-fixed-change', ({ detail }) =>
    log.write(\`u-grid-column-fixed-change  \${detail.column.label}: \${detail.previousFixed ?? 'none'} → \${detail.fixed ?? 'none'}\`));
  grid.addEventListener('u-grid-column-reorder', ({ detail }) =>
    log.write(\`u-grid-column-reorder  \${detail.column.label}: \${detail.previousIndex} → \${detail.index}\`));
  grid.addEventListener('u-grid-column-resize', ({ detail }) =>
    log.write(\`u-grid-column-resize  \${detail.column.label}: \${detail.width}px\`));
  grid.addEventListener('u-grid-state-change', ({ detail }) =>
    log.write(\`u-grid-state-change  sources: \${detail.sources.join(', ')}\`));

  controls(host,
    button('Open chooser', () => grid.openColumnChooser()),
    button('Move Total first', () => grid.moveColumn(total, 0)),
    button('Auto-size all', () => grid.autoSizeAllColumns()),
    button('Reset columns', () => grid.resetColumns()),
    checkbox('⋮ button (show-column-header-menu-button)', true, value => (grid.showColumnHeaderMenuButton = value)),
    checkbox('Pinning (column-fixing)', true, value => (grid.columnFixing = value)));
};
`;export{e as default};
