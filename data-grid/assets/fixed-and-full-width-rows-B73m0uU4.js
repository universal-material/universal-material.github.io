const r=`import { html } from 'lit';\r
\r
import '@universal-material/data-grid';\r
import type { GridRowRenderer } from '@universal-material/data-grid';\r
\r
import { checkbox, controls, createGrid, select } from '../shared/controls.js';\r
import { makeOrders, type Order } from '../shared/data.js';\r
\r
export const meta = {\r
  title: 'Fixed rows and full-width rows',\r
  description: '\`fixedTopItems\` and \`fixedBottomItems\` are rows of your own data pinned under the headers and above the bottom edge — a target, an average — outside sorting, filtering and paging. \`rowRenderer(item, ctx)\` replaces a row\\'s cells with one cell spanning the grid; return \`false\` to keep the columns. Decide \`false\` first and cheaply: it runs for every rendered row.',\r
};\r
\r
type Row = Order & { notice?: string };\r
\r
const notice = (id: number, text: string) => ({ id, notice: text }) as Row;\r
\r
const noticeTemplate = (row: Row) => html\`<div style="padding: 12px 0; font-weight: 500">\${row.notice}</div>\`;\r
\r
// Full-width notice rows mixed with the data; every other row keeps its columns.\r
const noticeRows: GridRowRenderer<Row> = row => row.notice !== undefined && noticeTemplate(row);\r
\r
// Every body row as a card (fixed rows keep their columns).\r
const cardRows: GridRowRenderer<Row> = (row, { fixed }) => {\r
  if (fixed) {\r
    return false;\r
  }\r
\r
  return row.notice !== undefined ? noticeTemplate(row) : html\`\r
    <div style="display: flex; gap: 24px; align-items: baseline; padding: 12px 0">\r
      <strong style="min-width: 160px">\${row.customer}</strong>\r
      <span>\${row.quantity} × \${row.product}</span>\r
      <span>\${row.country}</span>\r
      <span style="margin-inline-start: auto">\${row.status}</span>\r
    </div>\`;\r
};\r
\r
export default (host: HTMLElement) => {\r
  const orders: Row[] = makeOrders(300);\r
  const target = { id: 'target', customer: 'Target per order', total: 2_500 };\r
  const average = { id: 'average', customer: 'Average', total: orders.reduce((sum, order) => sum + order.total, 0) / orders.length };\r
  const grid = createGrid(host, 460);\r
\r
  grid.keyExpr = 'id';\r
  grid.columns = [\r
    { path: 'customer', label: 'Customer', width: 200 },\r
    { path: 'product', label: 'Product', width: 160 },\r
    { path: 'quantity', label: 'Qty', width: 90, dataType: 'number' },\r
    { path: 'total', label: 'Total', width: 150, dataType: 'number', format: { style: 'currency', currency: 'USD' } },\r
  ];\r
  grid.items = [\r
    notice(-1, 'Orders from the new web shop start here.'),\r
    ...orders.slice(0, 40),\r
    notice(-2, 'Orders below were imported from the legacy system.'),\r
    ...orders.slice(40),\r
  ];\r
  grid.fixedTopItems = [target];\r
  grid.fixedBottomItems = [average];\r
  grid.rowRenderer = noticeRows;\r
\r
  controls(host,\r
    select('Full-width rows', [['notices', 'Notices only'], ['cards', 'Cards for every row'], ['off', 'Off']], 'notices',\r
      value => (grid.rowRenderer = value === 'notices' ? noticeRows : value === 'cards' ? cardRows : null)),\r
    checkbox('Fixed top row', true, value => (grid.fixedTopItems = value ? [target] : [])),\r
    checkbox('Fixed bottom row', true, value => (grid.fixedBottomItems = value ? [average] : [])));\r
};\r
`;export{r as default};
