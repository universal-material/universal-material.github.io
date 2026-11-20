const t=`import '@universal-material/data-grid';

import { controls, createGrid, eventLog, stat } from '../shared/controls.js';
import { makeOrders } from '../shared/data.js';
import { fakeServer } from '../shared/fake-server.js';

export const meta = {
  title: 'Infinite scrolling',
  description: '\`scrollMode: \\'infinite\\'\` (remote paging only) loads the next block of \`pageSize\` rows when you reach the end, without asking the server for \`totalCount\` — the scrollbar grows as you go, like a feed. Sorting or filtering starts again from the first block.',
};

export default (host: HTMLElement) => {
  const loaded = stat('0 rows loaded');
  const grid = createGrid(host, 400);
  let rowCount = 0;

  grid.keyExpr = 'id';
  grid.remoteOperations = true;
  grid.scrollMode = 'infinite';
  grid.pageSize = 30; // the block size of each request
  grid.dataSource = fakeServer(makeOrders(600), { latency: 500 });
  grid.columns = [
    { path: 'id', label: 'Order', width: 100, dataType: 'number' },
    { path: 'customer', label: 'Customer', width: 200 },
    { path: 'country', label: 'Country', width: 160 },
    { path: 'category', label: 'Category', width: 140 },
    { path: 'total', label: 'Total', width: 150, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
  ];

  const log = eventLog(host);

  grid.addEventListener('u-grid-loading', ({ detail: { options } }) => {
    if (!options.skip) {
      rowCount = 0; // a new query starts from the first block
    }

    log.write(\`u-grid-loading skip: \${options.skip ?? 0}, take: \${options.take}, requireTotalCount: \${options.requireTotalCount}\`);
  });
  grid.addEventListener('u-grid-load', ({ detail }) => {
    rowCount += detail.result.data.length;
    loaded.textContent = \`\${rowCount} rows loaded\${detail.result.data.length < grid.pageSize ? ' — that is all of them' : ''}\`;
  });

  controls(host,
    loaded);
};
`;export{t as default};
