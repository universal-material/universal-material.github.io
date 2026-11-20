const e=`import '@universal-material/data-grid';
import type { GridColumnDef, GridDataSource } from '@universal-material/data-grid';

import { button, controls, createGrid, select, stat } from '../shared/controls.js';
import { leanRow, type LeanRow } from '../shared/data.js';

export const meta = {
  title: 'A billion rows from a server',
  description: 'With \`remoteOperations\` for paging and sorting, the grid asks the server only for the blocks in view (\`skip\`/\`take\`, \`pageSize\` rows each), shows skeleton rows while they load and caches the last 200 blocks. Drag the scrollbar anywhere — the pretend server computes any block of the table from its index. Requests that are no longer needed are aborted.',
};

export default (host: HTMLElement) => {
  const grid = createGrid(host, 480);
  const requests = stat();
  let total = 1_000_000_000;
  let calls = 0;
  let aborted = 0;

  const columns: GridColumnDef<LeanRow>[] = [
    { path: 'id', label: 'ID', width: 160, dataType: 'number', sortOrder: 'asc' },
    // This server only sorts by id: the other columns opt out of sorting, filtering and grouping.
    { path: 'name', label: 'Name', width: 180, sortable: false, filterable: false, groupable: false },
    { path: 'country', label: 'Country', width: 180, sortable: false, filterable: false, groupable: false },
    { path: 'quantity', label: 'Quantity', width: 140, dataType: 'number', sortable: false, filterable: false, groupable: false },
    { path: 'price', label: 'Price', width: 140, dataType: 'number', format: { style: 'currency', currency: 'USD' }, sortable: false, filterable: false, groupable: false },
  ];

  // The "server": answers any block from the row index, 150 ms later.
  const dataSource: GridDataSource<LeanRow> = {
    load: (options, signal) => new Promise((resolve, reject) => {
      calls++;
      requests.textContent = \`\${calls} requests · \${aborted} aborted\`;

      const timer = setTimeout(() => {
        const skip = options.skip ?? 0;
        const take = Math.max(0, Math.min(options.take ?? 100, total - skip));
        const descending = options.sort[0]?.order === 'desc';
        const data = Array.from({ length: take }, (_, n) => leanRow(descending ? total - 1 - (skip + n) : skip + n));

        resolve({ data, totalCount: options.requireTotalCount ? total : undefined });
      }, 150);

      signal.addEventListener('abort', () => {
        clearTimeout(timer);
        aborted++;
        requests.textContent = \`\${calls} requests · \${aborted} aborted\`;
        reject(signal.reason);
      }, { once: true });
    }),
  };

  grid.keyExpr = 'id';
  grid.showGroupPanel = false;
  grid.pageSize = 100;
  grid.remoteOperations = { paging: true, sorting: true, filtering: true, grouping: true, summary: true };
  grid.columns = columns;
  grid.dataSource = dataSource;

  controls(host,
    select('Rows', [['10000000', '10 million'], ['100000000', '100 million'], ['1000000000', '1 billion']], String(total), value => {
      total = Number(value);
      void grid.refresh();
    }),
    button('Sort by ID descending', () => grid.sortColumn(columns[0]!, 'desc')),
    button('Ascending', () => grid.sortColumn(columns[0]!, 'asc')),
    requests);
};
`;export{e as default};
