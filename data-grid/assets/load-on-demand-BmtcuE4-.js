const e=`import '@universal-material/data-grid';
import type { GridDataSource } from '@universal-material/data-grid';

import { button, controls, createGrid, eventLog } from '../shared/controls.js';
import { makeEmployees, type Employee } from '../shared/data.js';

export const meta = {
  title: 'Load children on demand',
  description: 'With a \`dataSource\` and \`treeMode = \\'flat\\'\`, the grid first asks the roots (\`options.tree.parentKeys\` is \`[null]\`, the \`rootParentKey\`) and asks a node\\'s children when it is expanded and \`hasChildrenExpr\` says it has some. The node shows a spinner while they load (simulated 800 ms latency); expansions in the same tick share one request.',
};

// On the server: each employee with a flag telling whether they have reports.
const employees = makeEmployees();
const rows = employees.map(employee => ({ ...employee, hasReports: employees.some(other => other.parentId === employee.id) }));

export default (host: HTMLElement) => {
  const grid = createGrid(host, 420);
  const log = eventLog(host);

  const dataSource: GridDataSource<Employee> = {
    load: (options, signal) => new Promise((resolve, reject) => {
      const parentKeys = options.tree?.parentKeys ?? [null];
      log.write(\`load  parentKeys: \${JSON.stringify(parentKeys)}\`);

      // In your app: fetch(\`/api/employees?parent=\${…}\`, { signal })
      const timer = setTimeout(() => resolve({ data: rows.filter(row => parentKeys.includes(row.parentId)) }), 800);

      signal.addEventListener('abort', () => {
        clearTimeout(timer);
        reject(signal.reason);
      }, { once: true });
    }),
  };

  grid.treeMode = 'flat';
  grid.keyExpr = 'id';
  grid.parentKeyExpr = 'parentId';
  grid.hasChildrenExpr = 'hasReports';
  grid.columns = [
    { path: 'name', label: 'Name', width: 280 },
    { path: 'title', label: 'Title', width: 260 },
    { path: 'department', label: 'Department', width: 140 },
    { path: 'email', label: 'Email', width: 260 },
  ];
  grid.dataSource = dataSource;

  grid.addEventListener('u-grid-node-expansion-change', event => {
    const { rowKey, expanded, source } = event.detail;
    log.write(\`u-grid-node-expansion-change [\${source}]  \${rowKey ?? 'all'}: \${expanded ? 'expanded' : 'collapsed'}\`);
  });

  controls(host,
    button('Expand the CEO', async () => {
      const shown = await grid.expandNode(1); // resolves once the children are loaded
      log.write(\`expandNode(1) → \${shown}\`);
    }),
    button('Expand loaded nodes', () => grid.expandAllNodes()),
    button('Collapse all', () => grid.collapseAllNodes()));
};
`;export{e as default};
