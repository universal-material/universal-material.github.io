const e=`import '@universal-material/data-grid';
import type { GridDataSource } from '@universal-material/data-grid';

import { button, checkbox, controls, createGrid, eventLog } from '../shared/controls.js';
import { makeOrders, type Order } from '../shared/data.js';
import { fakeServer } from '../shared/fake-server.js';

export const meta = {
  title: 'Errors, Retry and refresh()',
  description: 'When \`load\` rejects, the grid shows an error bar with a **Retry** button (\`::part(error-row)\`, \`role="alert"\`) and fires \`u-grid-load-error\`. Turn the server off, then sort or press **Refresh** to see it; turn it back on and press **Retry**. \`refresh()\` reloads and keeps the current rows on screen until the answer arrives.',
};

export default (host: HTMLElement) => {
  const server = fakeServer(makeOrders(2_000), { latency: 500 });
  let online = true;

  // Your own data source: any object with load(options, signal) returning a promise.
  const dataSource: GridDataSource<Order> = {
    load: (options, signal) => online
      ? server.load(options, signal)
      : Promise.reject(new Error('503 Service Unavailable')),
  };

  const grid = createGrid(host, 380);

  grid.keyExpr = 'id';
  grid.remoteOperations = true;
  grid.dataSource = dataSource;
  grid.columns = [
    { path: 'id', label: 'Order', width: 100, dataType: 'number' },
    { path: 'customer', label: 'Customer', width: 200 },
    { path: 'status', label: 'Status', width: 130 },
    { path: 'orderDate', label: 'Date', width: 140, dataType: 'date' },
    { path: 'total', label: 'Total', width: 150, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
  ];

  const log = eventLog(host);

  grid.addEventListener('u-grid-load', ({ detail }) => log.write(\`u-grid-load \${detail.result.data.length} rows\`));
  grid.addEventListener('u-grid-load-error', ({ detail }) => log.write(\`u-grid-load-error \${String(detail.error)}\`));

  controls(host,
    checkbox('Server online', true, value => (online = value)),
    button('Refresh', async () => {
      await grid.refresh(); // resolves when the load settles (also on error)
      log.write('refresh() settled');
    }));
};
`;export{e as default};
