const e=`import '@universal-material/data-grid';\r
import type { GridColumnDef } from '@universal-material/data-grid';\r
\r
import { controls, createGrid, eventLog } from '../shared/controls.js';\r
import { makeEmployees, type Employee } from '../shared/data.js';\r
\r
export const meta = {\r
  title: 'Validation rules',\r
  description: 'Each column takes \`validationRules\`: \`required\`, \`stringLength\`, \`range\` (numbers or dates), \`pattern\`, \`email\` and \`custom\` — which may return a promise, like the server check on **Department** here ("Validating…" shows while it runs). Before saving, \`u-grid-row-validating\` runs per row for cross-field checks: \`setError(message, column)\` blocks the save. Try clearing a name, typing a bad e-mail, or giving a Director a salary under 150,000, then **Save changes**.',\r
};\r
\r
const DEPARTMENTS = ['Management', 'Engineering', 'Sales', 'Marketing', 'Finance', 'Support'];\r
\r
// Pretend server check: resolves \`true\` or an error text after a short delay.\r
const checkDepartment = (value: unknown, signal: AbortSignal) => new Promise<true | string>((resolve, reject) => {\r
  const timer = setTimeout(() => resolve(DEPARTMENTS.includes(String(value)) || \`Unknown department. Use one of: \${DEPARTMENTS.join(', ')}.\`), 600);\r
  signal.addEventListener('abort', () => {\r
    clearTimeout(timer);\r
    reject(signal.reason);\r
  }, { once: true });\r
});\r
\r
export default (host: HTMLElement) => {\r
  const grid = createGrid(host, 400);\r
\r
  const salary: GridColumnDef<Employee> = {\r
    path: 'salary', label: 'Salary', width: 130, dataType: 'number', format: { style: 'currency', currency: 'USD', maximumFractionDigits: 0 },\r
    validationRules: [{ type: 'range', min: 30_000, max: 500_000 }],\r
  };\r
\r
  const columns: GridColumnDef<Employee>[] = [\r
    { path: 'name', label: 'Name', width: 180, validationRules: [{ type: 'required' }, { type: 'stringLength', max: 40 }] },\r
    { path: 'title', label: 'Title', width: 230, validationRules: [{ type: 'pattern', pattern: '[A-Z].*', message: 'Start with a capital letter.' }] },\r
    { path: 'department', label: 'Department', width: 150, validationRules: [{ type: 'custom', validate: ({ value }, signal) => checkDepartment(value, signal) }] },\r
    { path: 'email', label: 'E-mail', width: 240, validationRules: [{ type: 'required' }, { type: 'email' }] },\r
    salary,\r
    {\r
      path: 'hireDate', label: 'Hired', width: 150, dataType: 'date',\r
      validationRules: [{ type: 'range', min: new Date(2000, 0, 1), max: new Date(), message: 'Between 2000 and today.' }],\r
    },\r
  ];\r
\r
  grid.keyExpr = 'id';\r
  grid.editMode = 'batch';\r
  grid.allowEditing = true;\r
  grid.allowAdding = true;\r
  grid.columns = columns;\r
  grid.items = makeEmployees();\r
\r
  const log = eventLog(host);\r
\r
  // Cross-field rule, checked for each added or edited row before saving.\r
  grid.addEventListener('u-grid-row-validating', event => {\r
    const { item, change, errors, setError } = event.detail;\r
    const row = { ...item, ...change.data } as Employee;\r
\r
    if (row.title?.includes('Director') && row.salary < 150_000) {\r
      setError('Directors earn at least 150,000.', salary);\r
    }\r
\r
    log.write(\`u-grid-row-validating  \${row.name || '(new row)'}  rule errors: \${errors.length}\`);\r
  });\r
\r
  grid.addEventListener('u-grid-save', event => log.write(\`u-grid-save  \${event.detail.changes.length} change(s) saved\`));\r
\r
  controls(host, 'Edit cells, then use Save changes in the toolbar.');\r
};\r
`;export{e as default};
