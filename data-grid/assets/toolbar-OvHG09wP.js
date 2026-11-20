const r=`import { html } from 'lit';\r
\r
import { GRID_DEFAULT_TOOLBAR_ITEMS } from '@universal-material/data-grid';\r
import type { GridToolbarItem, GridToolbarItemName } from '@universal-material/data-grid';\r
\r
import { controls, createGrid, eventLog, select } from '../shared/controls.js';\r
import { makeOrders, STATUSES } from '../shared/data.js';\r
\r
export const meta = {\r
  title: 'Toolbar items',\r
  description: '\`toolbarItems\` picks the items, their order and side (\`location\`). Built-ins are names (or objects to configure them); your buttons have \`text\`, an optional decorative \`icon\` and an \`action\`; \`renderer\` items put your own content in the bar (the status filter here). \`locateInMenu: \\'always\\'\` sends an item to the **More actions** menu, and \`auto\` items move there when the bar is too narrow — make the window narrower to see it. The bar is one \`Tab\` stop: \`←\`/\`→\` move between its buttons.',\r
};\r
\r
const refreshIcon = html\`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.65 6.35A7.96 7.96 0 0 0 12 4a8 8 0 1 0 7.73 10h-2.08A6 6 0 1 1 12 6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"/></svg>\`;\r
\r
export default (host: HTMLElement) => {\r
  const grid = createGrid(host, 400);\r
  let seed = 7;\r
\r
  grid.keyExpr = 'id';\r
  grid.selectionMode = 'multiple';\r
  grid.allowEditing = true;\r
  grid.allowAdding = true;\r
  grid.columnChooser = true;\r
  grid.showSearchPanel = true;\r
  grid.exportFormats = ['csv'];\r
  grid.columns = [\r
    { path: 'id', label: 'Order', width: 90, dataType: 'number', editable: false },\r
    { path: 'customer', label: 'Customer', width: 200 },\r
    { path: 'country', label: 'Country', width: 160 },\r
    { path: 'status', label: 'Status', width: 130 },\r
    { path: 'total', label: 'Total', width: 140, dataType: 'number', format: { style: 'currency', currency: 'USD' } },\r
  ];\r
  grid.items = makeOrders(300, seed);\r
\r
  const log = eventLog(host);\r
\r
  const statusFilter: GridToolbarItem = {\r
    location: 'start',\r
    renderer: () => html\`\r
      <label>Status\r
        <select @change=\${(event: Event) => {\r
          const value = (event.target as HTMLSelectElement).value;\r
          grid.filterValue = value ? ['status', '=', value] : null;\r
        }}>\r
          <option value="">All</option>\r
          \${STATUSES.map(status => html\`<option>\${status}</option>\`)}\r
        </select>\r
      </label>\`,\r
  };\r
\r
  const custom: GridToolbarItem[] = [\r
    statusFilter,\r
    {\r
      text: 'Reload',\r
      icon: refreshIcon,\r
      showText: 'in-menu',\r
      action: () => {\r
        grid.items = makeOrders(300, ++seed);\r
        log.write('Reload: new rows loaded');\r
      },\r
    },\r
    {\r
      text: 'Select first 10',\r
      locateInMenu: 'auto', // host buttons default to 'never'\r
      action: ({ grid }) => grid.selectRows(Array.from({ length: 10 }, (_, i) => grid.getRowKey(i)).filter(key => key !== undefined)),\r
    },\r
    { text: 'Print', action: () => print(), locateInMenu: 'always' },\r
    { text: 'About this view', action: () => log.write('About this view (from the More actions menu)'), locateInMenu: 'always' },\r
  ];\r
\r
  const layouts: Record<string, readonly (GridToolbarItemName | GridToolbarItem)[] | null> = {\r
    'Default (null)': null,\r
    'Built-ins + custom': [...GRID_DEFAULT_TOOLBAR_ITEMS, ...custom],\r
    'Search at the start': [\r
      { name: 'searchPanel', location: 'start' },\r
      ...GRID_DEFAULT_TOOLBAR_ITEMS.filter(name => name !== 'searchPanel'),\r
      ...custom,\r
    ],\r
    'Custom only': custom,\r
    'Hidden ([])': [],\r
  };\r
\r
  grid.toolbarItems = layouts['Built-ins + custom']!;\r
\r
  controls(host,\r
    select('Toolbar', Object.keys(layouts), 'Built-ins + custom', value => {\r
      // Replace the array instead of mutating it.\r
      grid.toolbarItems = layouts[value] ?? null;\r
    }));\r
};\r
`;export{r as default};
