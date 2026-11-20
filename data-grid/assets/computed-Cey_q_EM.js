const r=`import '@universal-material/data-grid';\r
import type { GridColumnDef } from '@universal-material/data-grid';\r
\r
import { checkbox, controls, createGrid } from '../shared/controls.js';\r
import { makeOrders, type Order } from '../shared/data.js';\r
\r
export const meta = {\r
  title: 'Computed columns and custom text',\r
  description: '\`valueGetter\` computes the cell value from the row: it is also what the grid sorts, groups and exports. A \`format\` function or \`displayValue\` turns the value into text — \`displayValue\` also labels the group rows. Group by **Size** to see a computed column used as a group key.',\r
};\r
\r
const SIZES = ['Small', 'Medium', 'Large'] as const;\r
\r
export default (host: HTMLElement) => {\r
  const grid = createGrid(host, 420);\r
  const usd = new Intl.NumberFormat('en', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });\r
\r
  // Computed bucket: 0, 1 or 2, so it sorts in size order; displayValue gives the text.\r
  const sizeColumn: GridColumnDef<Order> = {\r
    label: 'Size',\r
    width: 110,\r
    valueGetter: order => (order.total < 1_000 ? 0 : order.total < 4_000 ? 1 : 2),\r
    displayValue: value => SIZES[value as number]!,\r
    alignment: 'start',\r
  };\r
\r
  const columns: GridColumnDef<Order>[] = [\r
    { path: 'customer', label: 'Customer', width: 170 },\r
    { path: 'product', label: 'Product', width: 140 },\r
    { path: 'quantity', label: 'Qty', width: 80 },\r
    { path: 'total', label: 'Total', width: 120, format: { style: 'currency', currency: 'USD' } },\r
    // Computed number: sorts numerically, formatted with Intl options.\r
    { label: 'Tax (8%)', width: 110, valueGetter: order => order.total * 0.08, dataType: 'number', format: { style: 'currency', currency: 'USD' } },\r
    sizeColumn,\r
    // A format function receives the value and the row.\r
    { path: 'unitPrice', label: 'Price × qty', width: 170, format: (value, order) => \`\${order.quantity} × \${usd.format(value as number)}\` },\r
    { path: 'orderDate', label: 'Quarter', width: 110, dataType: 'date', format: value => {\r
      const date = value as Date;\r
      return \`Q\${Math.floor(date.getMonth() / 3) + 1} \${date.getFullYear()}\`;\r
    } },\r
  ];\r
\r
  grid.keyExpr = 'id';\r
  grid.autoExpandGroups = true;\r
  grid.columns = columns;\r
  grid.items = makeOrders(400);\r
\r
  controls(host,\r
    checkbox('Group by size', false, grouped => (grouped ? grid.groupColumn(sizeColumn) : grid.ungroupColumn(sizeColumn))));\r
};\r
`;export{r as default};
