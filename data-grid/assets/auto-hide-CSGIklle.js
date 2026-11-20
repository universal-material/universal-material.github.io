const t=`import '@universal-material/data-grid';\r
import type { GridColumnDef } from '@universal-material/data-grid';\r
\r
import { controls, el, eventLog, stat } from '../shared/controls.js';\r
import { makeOrders, type Order } from '../shared/data.js';\r
\r
export const meta = {\r
  title: 'Auto-hide by priority',\r
  description: 'Drag the slider to narrow the grid\\'s container. Columns with the lowest \`hidingPriority\` leave first (Date, then Category, Country…); Customer has none, so it never hides, and neither does the fixed Order column. Expand a row (or press \`Enter\` on its toggle cell) to read the hidden values.',\r
};\r
\r
export default (host: HTMLElement) => {\r
  // The grid reacts to its own width, not the window's: a narrow container is enough.\r
  const container = el('div');\r
  container.style.cssText = 'width: 1100px; max-width: 100%; box-sizing: border-box; padding: 4px; border: 1px dashed; border-radius: 8px';\r
  const grid = document.createElement('u-grid');\r
  grid.style.height = '400px';\r
  container.append(grid);\r
  host.append(container);\r
\r
  const columns: GridColumnDef<Order>[] = [\r
    { path: 'id', label: 'Order', width: 90, fixed: 'start' },\r
    { path: 'customer', label: 'Customer', width: 180 },\r
    { path: 'country', label: 'Country', width: 150, hidingPriority: 2 },\r
    { path: 'category', label: 'Category', width: 130, hidingPriority: 1 },\r
    { path: 'product', label: 'Product', width: 140, hidingPriority: 3 },\r
    { path: 'orderDate', label: 'Date', width: 120, dataType: 'date', hidingPriority: 0 },\r
    { path: 'status', label: 'Status', width: 120, hidingPriority: 4 },\r
    { path: 'total', label: 'Total', width: 130, format: { style: 'currency', currency: 'USD' }, hidingPriority: 5 },\r
  ];\r
\r
  grid.keyExpr = 'id';\r
  grid.autoHideColumns = true;\r
  grid.columnChooser = true;\r
  grid.columns = columns;\r
  grid.items = makeOrders(200);\r
\r
  const hidden = stat('Hidden: none');\r
  const log = eventLog(host);\r
\r
  grid.addEventListener('u-grid-adaptive-columns-change', ({ detail }) => {\r
    const labels = detail.columns.map(column => column.label).join(', ') || 'none';\r
    hidden.textContent = \`Hidden: \${labels}\`;\r
    log.write(\`u-grid-adaptive-columns-change  \${detail.previous.length} → \${detail.columns.length} hidden (\${labels})\`);\r
  });\r
\r
  const width = el('input', { type: 'range', min: '280', max: '1100', step: '10', value: '1100' });\r
  const widthText = stat('1100px');\r
  width.addEventListener('input', () => {\r
    container.style.width = \`\${width.value}px\`;\r
    widthText.textContent = \`\${width.value}px\`;\r
  });\r
\r
  controls(host, el('label', {}, 'Container width', width), widthText, hidden);\r
};\r
`;export{t as default};
