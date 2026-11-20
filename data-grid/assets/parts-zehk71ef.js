const r=`import '@universal-material/data-grid';\r
\r
import { checkbox, controls, createGrid, el } from '../shared/controls.js';\r
import { makeOrders } from '../shared/data.js';\r
\r
export const meta = {\r
  title: 'Styling ::part',\r
  description: 'The grid renders in a shadow root, so page CSS reaches its insides through \`::part()\`: \`header-cell\`, \`group-row\`, \`group-chip\`, \`even\`/\`odd\`, \`row selected\`, \`total-row\`, \`pager-button\`… (full list in the README). Each checkbox turns on one rule, scoped by a class on the grid; the active CSS is shown below.',\r
};\r
\r
const RULES = {\r
  'Header cells': \`::part(header-cell) {\r
  text-transform: uppercase;\r
  letter-spacing: 0.06em;\r
  font-size: 0.75rem;\r
}\`,\r
  'Group rows': \`::part(group-row) {\r
  background: light-dark(#eaddff, #4f378b);\r
  font-weight: 600;\r
}\`,\r
  'Group chips': \`::part(group-chip) {\r
  border-radius: 16px;\r
  background: light-dark(#e8def8, #4a4458);\r
}\`,\r
  'Even rows': \`::part(even) {\r
  background: light-dark(#f7f2fa, #25232a);\r
}\`,\r
  'Selected rows': \`::part(row selected) {\r
  background: light-dark(#ffd8e4, #633b48);\r
}\`,\r
  'Totals footer': \`::part(total-row) {\r
  font-weight: 700;\r
  color: light-dark(#6750a4, #d0bcff);\r
}\`,\r
  'Pager buttons': \`::part(pager-button) {\r
  border-radius: 50%;\r
}\`,\r
};\r
\r
type RuleName = keyof typeof RULES;\r
\r
export default (host: HTMLElement) => {\r
  const grid = createGrid(host, 440);\r
  const style = el('style'); // page CSS for this grid only: every rule starts with #parts-demo\r
  const code = el('pre', { className: 'demo-log', ariaLabel: 'Active CSS', tabIndex: 0 });\r
  const active = new Set<RuleName>(['Header cells', 'Group rows', 'Selected rows']);\r
\r
  grid.id = 'parts-demo';\r
  grid.keyExpr = 'id';\r
  grid.selectionMode = 'multiple';\r
  grid.paging = true;\r
  grid.pageSize = 10;\r
  grid.columns = [\r
    { path: 'country', label: 'Country', width: 160, groupIndex: 0 },\r
    { path: 'customer', label: 'Customer', width: 200 },\r
    { path: 'status', label: 'Status', width: 130 },\r
    { path: 'total', label: 'Total', width: 150, dataType: 'number', format: { style: 'currency', currency: 'USD' } },\r
  ];\r
  grid.summary = { total: [{ column: 'total', type: 'sum' }] };\r
  grid.autoExpandGroups = true;\r
  grid.items = makeOrders(120);\r
  grid.selectedKeys = [1, 2, 3, 4, 5, 6];\r
\r
  const update = () => {\r
    const css = [...active].map(name => \`#parts-demo\${RULES[name]}\`).join('\\n\\n');\r
    style.textContent = css;\r
    code.textContent = css || '/* No rule active. */';\r
  };\r
\r
  controls(host, ...(Object.keys(RULES) as RuleName[]).map(name => checkbox(name, active.has(name), on => {\r
    if (on) {\r
      active.add(name);\r
    } else {\r
      active.delete(name);\r
    }\r
\r
    update();\r
  })));\r
\r
  host.append(style, code);\r
  update();\r
};\r
`;export{r as default};
