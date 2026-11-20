const e=`import '@universal-material/data-grid';\r
import { createXlsxExporter, downloadXlsx, type ExcelJSRow, type ExcelJSWorkbook, type ExcelJSWorksheet } from '@universal-material/data-grid/export-xlsx';\r
\r
import { button, controls, createGrid, eventLog } from '../shared/controls.js';\r
import { makeOrders } from '../shared/data.js';\r
\r
export const meta = {\r
  title: 'Excel and the Export button',\r
  description: '\`export-formats="csv xlsx"\` adds an **Export** button to the toolbar (with "Export selected rows" entries when rows can be selected). Excel goes through the optional \`export-xlsx\` entry point, which takes the ExcelJS module you pass it: the grid does not depend on ExcelJS. This demo loads it **lazily from a CDN** (\`exceljs@4.4.0\` on jsDelivr) the first time you export to Excel; in your app, \`import ExcelJS from \\'exceljs\\'\`. \`customize\` styles the sheet, and \`u-grid-exporting\` / \`u-grid-export\` / \`u-grid-export-error\` report the toolbar exports.',\r
};\r
\r
// With \`import ExcelJS from 'exceljs'\` you get ExcelJS's own types; for the CDN bundle we\r
// describe the part we use.\r
type Worksheet = ExcelJSWorksheet & { getRow(index: number): ExcelJSRow };\r
type ExcelJSModule = { Workbook: new () => ExcelJSWorkbook & { addWorksheet(name?: string): Worksheet } };\r
\r
const EXCELJS_URL = 'https://cdn.jsdelivr.net/npm/exceljs@4.4.0/dist/exceljs.min.js';\r
let excelJS: Promise<ExcelJSModule> | undefined;\r
\r
// Loads the ExcelJS browser bundle once (it sets \`window.ExcelJS\`).\r
const loadExcelJS = () => (excelJS ??= new Promise<ExcelJSModule>((resolve, reject) => {\r
  const script = document.createElement('script');\r
  script.src = EXCELJS_URL;\r
  script.crossOrigin = 'anonymous';\r
  script.onload = () => resolve((window as unknown as { ExcelJS: ExcelJSModule }).ExcelJS);\r
  script.onerror = () => {\r
    excelJS = undefined;\r
    script.remove();\r
    reject(new Error('Could not load ExcelJS.'));\r
  };\r
  document.head.append(script);\r
}));\r
\r
export default (host: HTMLElement) => {\r
  const grid = createGrid(host, 380);\r
\r
  grid.keyExpr = 'id';\r
  grid.selectionMode = 'multiple';\r
  grid.showCheckboxes = true;\r
  grid.exportFormats = ['csv', 'xlsx'];\r
  grid.csvExportOptions = { fileName: 'orders.csv' };\r
  grid.columns = [\r
    { path: 'category', label: 'Category', width: 150, groupIndex: 0 },\r
    { path: 'id', label: 'Order', width: 90, dataType: 'number' },\r
    { path: 'customer', label: 'Customer', width: 190 },\r
    { path: 'orderDate', label: 'Date', width: 140, dataType: 'date' },\r
    { path: 'priority', label: 'Priority', width: 110, dataType: 'boolean' },\r
    { path: 'total', label: 'Total', width: 140, dataType: 'number', format: { style: 'currency', currency: 'USD' } },\r
  ];\r
  grid.summary = { group: [{ column: 'total', type: 'sum' }], total: [{ column: 'total', type: 'sum' }] };\r
  grid.items = makeOrders(300);\r
\r
  // The toolbar's Excel entry: an exporter that loads ExcelJS on first use.\r
  grid.xlsxExporter = async (target, options) => {\r
    const exporter = createXlsxExporter(await loadExcelJS(), { fileName: 'orders.xlsx', sheetName: 'Orders' });\r
    await exporter(target, options);\r
  };\r
\r
  const log = eventLog(host);\r
\r
  grid.addEventListener('u-grid-exporting', event => log.write(\`u-grid-exporting  \${event.detail.format}\${event.detail.selectedOnly ? ' (selected rows)' : ''}\`));\r
  grid.addEventListener('u-grid-export', event => log.write(\`u-grid-export  \${event.detail.format} done\`));\r
  grid.addEventListener('u-grid-export-error', event => log.write(\`u-grid-export-error  \${String(event.detail.error)}\`));\r
\r
  controls(host,\r
    button('Download styled .xlsx', async () => {\r
      await downloadXlsx(grid, await loadExcelJS(), {\r
        fileName: 'orders-styled.xlsx',\r
        sheetName: 'Orders',\r
        customize: worksheet => {\r
          // \`worksheet\` is ExcelJS's own Worksheet: style the header row\r
          worksheet.getRow(1).font = { bold: true, color: { argb: 'FF1565C0' } };\r
        },\r
      });\r
      log.write('downloadXlsx() done');\r
    }));\r
};\r
`;export{e as default};
