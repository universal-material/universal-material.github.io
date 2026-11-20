const t=`import '@universal-material/data-grid';\r
import type { GridColumnDef, GridResizeMode } from '@universal-material/data-grid';\r
\r
import { button, controls, createGrid, eventLog, select } from '../shared/controls.js';\r
import { makeOrders, type Order } from '../shared/data.js';\r
\r
export const meta = {\r
  title: 'Resizing',\r
  description: 'With \`column-resizing\` each header gets a handle: drag it, **double-click** it to fit the content, or press \`Alt+←/→\` on a header. \`minWidth\`/\`maxWidth\` are respected (Customer: 120–320 px) and \`resizable: false\` opts a column out (Order). \`resize-mode="next-column"\` keeps the total width.',\r
};\r
\r
export default (host: HTMLElement) => {\r
  const grid = createGrid(host, 360);\r
\r
  const customer: GridColumnDef<Order> = { path: 'customer', label: 'Customer', width: 180, minWidth: 120, maxWidth: 320 };\r
  const product: GridColumnDef<Order> = { path: 'product', label: 'Product', width: 140 };\r
  const columns: GridColumnDef<Order>[] = [\r
    { path: 'id', label: 'Order', width: 90, resizable: false },\r
    customer,\r
    { path: 'country', label: 'Country', width: 150 },\r
    product,\r
    { path: 'quantity', label: 'Qty', width: 90 },\r
    { path: 'total', label: 'Total', width: 130, format: { style: 'currency', currency: 'USD' } },\r
  ];\r
\r
  grid.keyExpr = 'id';\r
  grid.columnResizing = true;\r
  grid.columns = columns;\r
  grid.items = makeOrders(200);\r
\r
  const log = eventLog(host);\r
\r
  grid.addEventListener('u-grid-column-resize', event => {\r
    const { column, width: newWidth, previousWidth, nextColumn, nextColumnWidth } = event.detail;\r
    const next = nextColumn ? \` · \${nextColumn.label} → \${nextColumnWidth}px\` : '';\r
    log.write(\`u-grid-column-resize  \${column.label}: \${previousWidth}px → \${newWidth}px\${next}\`);\r
  });\r
\r
  controls(host,\r
    select<GridResizeMode>('Mode', ['widget', 'next-column'], 'widget', value => (grid.resizeMode = value)),\r
    // API calls change the width without firing the event (it is only for user gestures).\r
    button('Product to 260px', () => grid.setColumnWidth(product, 260)),\r
    button('Auto-size Customer', () => grid.autoSizeColumn(customer)),\r
    // Back to the widths in the column definitions (and the initial sort, order…).\r
    button('Reset', () => grid.resetState()));\r
};\r
`;export{t as default};
