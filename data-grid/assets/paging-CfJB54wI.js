const e=`import '@universal-material/data-grid';\r
\r
import { button, checkbox, controls, createGrid, eventLog, stat } from '../shared/controls.js';\r
import { makeOrders } from '../shared/data.js';\r
import { fakeServer } from '../shared/fake-server.js';\r
\r
export const meta = {\r
  title: 'Paging',\r
  description: '\`paging\` shows a pager below the rows; \`pageSize\` and \`pageSizeOptions\` set the page sizes, and \`PageUp\`/\`PageDown\` change the page from the keyboard. \`u-grid-page-change\` fires for the pager, the keyboard and automatic corrections (a new filter goes back to page 1) — not for the \`pageIndex\` setter. With a remote source, each page is one request of \`pageSize\` rows.',\r
};\r
\r
export default (host: HTMLElement) => {\r
  const rows = makeOrders(1_000);\r
  const page = stat();\r
  const grid = createGrid(host, 440);\r
\r
  grid.keyExpr = 'id';\r
  grid.paging = true;\r
  grid.pageSize = 10;\r
  grid.pageSizeOptions = [10, 25, 50];\r
  grid.showSearchPanel = true;\r
  grid.columns = [\r
    { path: 'id', label: 'Order', width: 100, dataType: 'number' },\r
    { path: 'customer', label: 'Customer', width: 200 },\r
    { path: 'country', label: 'Country', width: 160 },\r
    { path: 'product', label: 'Product', width: 160 },\r
    { path: 'total', label: 'Total', width: 150, dataType: 'number', format: { style: 'currency', currency: 'USD' } },\r
  ];\r
  grid.items = rows;\r
\r
  const log = eventLog(host);\r
  const showPage = () => (page.textContent = \`pageIndex \${grid.pageIndex}, pageSize \${grid.pageSize}\`);\r
\r
  grid.addEventListener('u-grid-page-change', ({ detail }) => {\r
    log.write(\`u-grid-page-change page \${detail.previousPageIndex} → \${detail.pageIndex}, size \${detail.previousPageSize} → \${detail.pageSize} (\${detail.source})\`);\r
    showPage();\r
  });\r
\r
  controls(host,\r
    button('First page', () => { grid.pageIndex = 0; showPage(); }),\r
    button('Page 5', () => { grid.pageIndex = 4; showPage(); }),\r
    button('Last page', () => { grid.pageIndex = Math.ceil(grid.getTotalCount() / grid.pageSize) - 1; showPage(); }),\r
    checkbox('Remote (server pages)', false, remote => {\r
      if (remote) {\r
        grid.items = []; // use one or the other: items or dataSource\r
        grid.remoteOperations = true;\r
        grid.dataSource = fakeServer(rows, { latency: 400 });\r
      } else {\r
        grid.dataSource = null;\r
        grid.remoteOperations = false;\r
        grid.items = rows;\r
      }\r
    }),\r
    page);\r
\r
  showPage();\r
};\r
`;export{e as default};
