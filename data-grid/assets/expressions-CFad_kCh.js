const t=`import '@universal-material/data-grid';
import type { GridFilterExpression } from '@universal-material/data-grid';

import { button, controls, createGrid, el, eventLog } from '../shared/controls.js';
import { makeOrders } from '../shared/data.js';

export const meta = {
  title: 'Filter expressions',
  description: 'A condition is \`[path, operation, value]\`; join conditions with \`\\'and\\'\` / \`\\'or\\'\`, negate with \`[\\'!\\', expression]\`. The filter row and header filter show what code sets, and the user\\'s changes come back in \`filterValue\`. \`u-grid-filter-change\` fires for user filters and \`clearFilter()\` — not for assignments, so two-way bindings don\\'t loop.',
};

const presets: [string, GridFilterExpression][] = [
  ['Total ≥ 5,000', ['total', '>=', 5000]],
  ['Brazil or Japan', ['country', 'anyof', ['Brazil', 'Japan']]],
  ['Customer starts with "ma"', ['customer', 'startswith', 'ma']],
  ['2024, not cancelled', [['orderDate', 'between', ['2024-01-01', '2024-12-31']], 'and', ['!', ['status', '=', 'Cancelled']]]],
  ['Priority Toys or Outdoor', [['priority', '=', true], 'and', [['category', '=', 'Toys'], 'or', ['category', '=', 'Outdoor']]]],
];

export default (host: HTMLElement) => {
  const grid = createGrid(host, 380);

  grid.keyExpr = 'id';
  grid.showFilterRow = true;
  grid.headerFilter = true;
  grid.showSearchPanel = true;
  grid.columns = [
    { path: 'customer', label: 'Customer', width: 180 },
    { path: 'country', label: 'Country', width: 150 },
    { path: 'category', label: 'Category', width: 130 },
    { path: 'status', label: 'Status', width: 130 },
    { path: 'orderDate', label: 'Date', width: 140, dataType: 'date' },
    { path: 'priority', label: 'Priority', width: 110, dataType: 'boolean' },
    { path: 'total', label: 'Total', width: 130, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
  ];
  grid.items = makeOrders(1_000);

  const current = el('code');
  const show = () => (current.textContent = \`filterValue = \${JSON.stringify(grid.filterValue)}\`);
  show();

  controls(host,
    ...presets.map(([text, expression]) => button(text, () => {
      grid.filterValue = expression;
      show();
    })),
    button('clearFilter()', () => {
      grid.clearFilter(); // also clears the search text
      show();
    }));

  host.append(el('p', {}, current));
  const log = eventLog(host);

  grid.addEventListener('u-grid-filter-change', event => {
    const { filterValue, searchText, source } = event.detail;
    log.write(\`u-grid-filter-change [\${source}]  \${JSON.stringify(filterValue)}  search: "\${searchText}"\`);
    show();
  });
};
`;export{t as default};
