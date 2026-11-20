const e=`import '@universal-material/data-grid';
import type { GridLoadOptions } from '@universal-material/data-grid';

import { button, controls, createGrid, eventLog, select, stat } from '../shared/controls.js';
import { makeOrders } from '../shared/data.js';
import { fakeServer } from '../shared/fake-server.js';

export const meta = {
  title: 'Remote operations',
  description: 'With \`remoteOperations: true\` the server does the work: the grid sends \`skip\`/\`take\` for the rows in view (skeleton rows until they arrive), plus \`sort\`, \`filter\`, \`group\` and the summaries. Sort, filter, search or group and watch the requests in the log; the **load panel** covers the rows while a query runs.',
};

// Only the non-empty parts of the request, for a readable log line.
const describe = (options: GridLoadOptions) => JSON.stringify(Object.fromEntries(
  Object.entries(options).filter(([, value]) => value !== null && value !== '' && value !== false && !(Array.isArray(value) && !value.length))));

export default (host: HTMLElement) => {
  const rows = makeOrders(5_000);
  const count = stat();
  const grid = createGrid(host, 420);

  grid.keyExpr = 'id';
  grid.remoteOperations = true;
  grid.dataSource = fakeServer(rows, { latency: 600 });
  grid.showSearchPanel = true;
  grid.showFilterRow = true;
  grid.columns = [
    { path: 'id', label: 'Order', width: 100, dataType: 'number' },
    { path: 'customer', label: 'Customer', width: 200 },
    { path: 'country', label: 'Country', width: 160 },
    { path: 'status', label: 'Status', width: 130 },
    { path: 'orderDate', label: 'Date', width: 140, dataType: 'date' },
    { path: 'total', label: 'Total', width: 150, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
  ];
  grid.summary = { total: [{ column: 'total', type: 'sum' }] };

  const log = eventLog(host);

  grid.addEventListener('u-grid-loading', ({ detail }) => log.write(\`u-grid-loading \${describe(detail.options)}\`));
  grid.addEventListener('u-grid-load', ({ detail }) => {
    log.write(\`u-grid-load \${detail.result.data.length} rows (totalCount: \${detail.result.totalCount ?? '—'})\`);
    count.textContent = \`\${grid.getTotalCount().toLocaleString()} matching rows\`;
  });

  controls(host,
    select('Latency', [['150', '150 ms'], ['600', '600 ms'], ['1500', '1.5 s']], '600',
      value => (grid.dataSource = fakeServer(rows, { latency: Number(value) }))),
    button('Refresh', () => void grid.refresh()),
    count);
};
`;export{e as default};
