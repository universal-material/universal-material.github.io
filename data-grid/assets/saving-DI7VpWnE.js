const e=`import '@universal-material/data-grid';\r
import type { GridDataChanges, GridEditChange } from '@universal-material/data-grid';\r
\r
import { button, controls, createGrid, eventLog, stat } from '../shared/controls.js';\r
import { makeOrders, type Order } from '../shared/data.js';\r
\r
export const meta = {\r
  title: 'Saving to a server',\r
  description: 'In \`u-grid-saving\`, send \`detail.changes\` to your server and pass the promise to \`detail.waitUntil()\`: the grid waits, and keeps the changes pending if it rejects (\`u-grid-save-error\`, with the message in the toolbar). Resolving with \`{ add, update, remove }\` lets the server have the last word — here it assigns the ids of new rows. \`u-grid-row-adding\` fills the defaults of a new row, and \`u-grid-save\` hands you the new array (your \`items\` are never mutated).',\r
};\r
\r
// A pretend API: waits, then answers with the saved rows (new rows get their id here).\r
const createServer = (firstId: number) => {\r
  let nextId = firstId;\r
  let failNext = false;\r
  const timers = new Set<ReturnType<typeof setTimeout>>();\r
\r
  return {\r
    dispose() {\r
      timers.forEach(clearTimeout);\r
    },\r
    failNextSave() {\r
      failNext = true;\r
    },\r
    save(changes: readonly GridEditChange<Order>[]) {\r
      return new Promise<GridDataChanges<Order>>((resolve, reject) => timers.add(setTimeout(() => {\r
        timers.clear();\r
\r
        if (failNext) {\r
          failNext = false;\r
          reject(new Error('The server is unavailable (simulated).'));\r
          return;\r
        }\r
\r
        resolve({\r
          add: changes.filter(c => c.type === 'add').map(c => ({ ...c.data, id: nextId++ }) as Order),\r
          update: changes.filter(c => c.type === 'update').map(c => ({ ...c.item, ...c.data }) as Order),\r
          remove: changes.filter(c => c.type === 'remove').map(c => c.rowKey),\r
        });\r
      }, 1_200)));\r
    },\r
  };\r
};\r
\r
export default (host: HTMLElement) => {\r
  const grid = createGrid(host, 380);\r
  const orders = makeOrders(100);\r
  const server = createServer(orders.length + 1);\r
\r
  grid.keyExpr = 'id';\r
  grid.editMode = 'batch';\r
  grid.allowEditing = true;\r
  grid.allowAdding = true;\r
  grid.allowRemoving = true;\r
  grid.columns = [\r
    { path: 'id', label: 'Order', width: 90, dataType: 'number', editable: false },\r
    { path: 'customer', label: 'Customer', width: 190, validationRules: [{ type: 'required' }] },\r
    { path: 'status', label: 'Status', width: 130 },\r
    { path: 'quantity', label: 'Qty', width: 100, dataType: 'number', validationRules: [{ type: 'range', min: 1 }] },\r
    { path: 'orderDate', label: 'Date', width: 150, dataType: 'date' },\r
  ];\r
  grid.items = orders;\r
\r
  const count = stat(\`\${orders.length} rows saved\`);\r
  const log = eventLog(host);\r
\r
  grid.addEventListener('u-grid-row-adding', event => {\r
    Object.assign(event.detail.data, { status: 'Pending', quantity: 1, orderDate: new Date() });\r
  });\r
\r
  grid.addEventListener('u-grid-saving', event => {\r
    const summary = event.detail.changes.map(change => \`\${change.type} \${typeof change.rowKey === 'number' ? \`#\${change.rowKey}\` : '(new)'}\`);\r
    log.write(\`u-grid-saving  \${summary.join(', ')}  — waiting for the server…\`);\r
    event.detail.waitUntil(server.save(event.detail.changes));\r
  });\r
\r
  grid.addEventListener('u-grid-save', event => {\r
    // Keep the new array in your state: it is what the grid shows now.\r
    const items = event.detail.items as Order[];\r
    count.textContent = \`\${items.length} rows saved\`;\r
    log.write(\`u-grid-save  \${event.detail.changes.length} change(s) applied\`);\r
  });\r
\r
  grid.addEventListener('u-grid-save-error', event => {\r
    log.write(\`u-grid-save-error  \${String((event.detail.error as Error).message)}  (changes are still pending)\`);\r
  });\r
\r
  controls(host,\r
    button('Add row', () => grid.addRow()),\r
    button('Save changes', () => grid.saveChanges()),\r
    button('Discard changes', () => grid.discardChanges()),\r
    button('Make the next save fail', () => {\r
      server.failNextSave();\r
      log.write('The next save will fail.');\r
    }),\r
    count);\r
\r
  return () => server.dispose();\r
};\r
`;export{e as default};
