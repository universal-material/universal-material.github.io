const e=`import '@universal-material/data-grid';\r
import type { GridColumnDef, GridColumnFixed } from '@universal-material/data-grid';\r
\r
import { controls, createGrid, eventLog, select } from '../shared/controls.js';\r
import { makeOrders, type Order } from '../shared/data.js';\r
\r
export const meta = {\r
  title: 'Multi-level headers',\r
  description: 'Bands nest to any depth and only take \`label\`, \`alignment\`, \`fixed\`, \`visible\` and \`showInChooser\`. A column moves only inside its band; dragging a band moves the whole block. Fixing a band fixes its columns. In the column chooser a band is a checkbox over its columns. On the keyboard, \`↑\`/\`↓\` move between header levels.',\r
};\r
\r
export default (host: HTMLElement) => {\r
  const grid = createGrid(host, 400);\r
\r
  const columns = (orderFixed: GridColumnFixed): GridColumnDef<Order>[] => [\r
    { label: 'Order', fixed: orderFixed, columns: [\r
      { path: 'id', label: 'Number', width: 100 },\r
      { path: 'orderDate', label: 'Date', width: 120, dataType: 'date' },\r
    ] },\r
    { label: 'Customer', columns: [\r
      { path: 'customer', label: 'Name', width: 180 },\r
      { path: 'country', label: 'Country', width: 150 },\r
    ] },\r
    { label: 'Item', columns: [\r
      { path: 'category', label: 'Category', width: 130 },\r
      { path: 'product', label: 'Product', width: 140 },\r
      // A band inside a band: three header rows.\r
      { label: 'Pricing', columns: [\r
        { path: 'quantity', label: 'Qty', width: 80 },\r
        { path: 'unitPrice', label: 'Unit price', width: 120, format: { style: 'currency', currency: 'USD' } },\r
        { path: 'total', label: 'Total', width: 130, format: { style: 'currency', currency: 'USD' } },\r
      ] },\r
    ] },\r
    // No band above: spans every header row.\r
    { path: 'status', label: 'Status', width: 130 },\r
  ];\r
\r
  grid.keyExpr = 'id';\r
  grid.columnChooser = true;\r
  grid.columnResizing = true;\r
  grid.showColumnLines = true;\r
  grid.columns = columns('start');\r
  grid.items = makeOrders(300);\r
\r
  const log = eventLog(host);\r
\r
  grid.addEventListener('u-grid-column-reorder', ({ detail }) =>\r
    log.write(\`u-grid-column-reorder  \${detail.column.label} in \${detail.band?.label ?? 'top level'}: \${detail.previousIndex} → \${detail.index}\`));\r
  grid.addEventListener('u-grid-column-visibility-change', ({ detail }) =>\r
    log.write(\`u-grid-column-visibility-change  \${detail.column.label}: \${detail.visible ? 'shown' : 'hidden'}\`));\r
\r
  controls(host,\r
    // A new \`fixed\` on the definition wins over what the user picked in the chooser.\r
    select('Fix the Order band', [['start', 'Start'], ['none', 'Not fixed'], ['end', 'End']], 'start',\r
      value => (grid.columns = columns(value === 'none' ? null : value))));\r
};\r
`;export{e as default};
