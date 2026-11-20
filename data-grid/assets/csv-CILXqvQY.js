const r=`import '@universal-material/data-grid';\r
import type { GridCsvOptions } from '@universal-material/data-grid';\r
\r
import { button, checkbox, controls, createGrid, select } from '../shared/controls.js';\r
import { makeOrders } from '../shared/data.js';\r
\r
export const meta = {\r
  title: 'CSV',\r
  description: '\`downloadCsv(options)\` builds the file from the current view and downloads it (\`exportCsv\` returns the \`Blob\` instead). Group the grid, filter it or select rows, then download: \`selectedOnly\`, \`includeGroups\`, \`includeSummaries\`, \`rawValues\` and \`separator\` (\`auto\` uses \`;\` for languages with a decimal comma, as Excel expects) are some of the options. Text starting with \`=\`, \`+\`, \`-\` or \`@\` is escaped against CSV injection.',\r
};\r
\r
export default (host: HTMLElement) => {\r
  const grid = createGrid(host, 380);\r
\r
  grid.keyExpr = 'id';\r
  grid.selectionMode = 'multiple';\r
  grid.showCheckboxes = true;\r
  grid.showSearchPanel = true;\r
  grid.columns = [\r
    { path: 'country', label: 'Country', width: 160, groupIndex: 0 },\r
    { path: 'id', label: 'Order', width: 90, dataType: 'number' },\r
    { path: 'customer', label: 'Customer', width: 190 },\r
    { path: 'orderDate', label: 'Date', width: 140, dataType: 'date' },\r
    { path: 'quantity', label: 'Qty', width: 100, dataType: 'number' },\r
    { path: 'total', label: 'Total', width: 140, dataType: 'number', format: { style: 'currency', currency: 'USD' } },\r
  ];\r
  grid.summary = {\r
    group: [{ column: 'total', type: 'sum', display: 'footer' }],\r
    total: [{ column: 'id', type: 'count' }, { column: 'total', type: 'sum' }],\r
  };\r
  grid.items = makeOrders(300);\r
\r
  const options: GridCsvOptions = { separator: 'auto', includeGroups: true, includeSummaries: true, rawValues: false };\r
\r
  controls(host,\r
    select<string>('Separator', [['auto', 'auto'], [',', 'comma'], [';', 'semicolon'], ['\\t', 'tab']], 'auto', value => (options.separator = value)),\r
    checkbox('Groups', true, value => (options.includeGroups = value)),\r
    checkbox('Summaries', true, value => (options.includeSummaries = value)),\r
    checkbox('Raw values', false, value => (options.rawValues = value)),\r
    button('Download CSV', () => grid.downloadCsv({ ...options, fileName: 'orders.csv' })),\r
    button('Download selected rows', () => grid.downloadCsv({ ...options, selectedOnly: true, fileName: 'selected-orders.csv' })));\r
};\r
`;export{r as default};
