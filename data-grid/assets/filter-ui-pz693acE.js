const e=`import '@universal-material/data-grid';

import { checkbox, controls, createGrid } from '../shared/controls.js';
import { makeOrders } from '../shared/data.js';

export const meta = {
  title: 'Filter row, search panel and header filter',
  description: 'Turn each UI on with \`showFilterRow\`, \`showSearchPanel\` and \`headerFilter\`. The search ignores case and accents — type \`joao\` to find "João" — and highlights the matches. The funnel in a header lists the distinct values with counts; dates are grouped by year and month.',
};

export default (host: HTMLElement) => {
  const grid = createGrid(host, 460);

  grid.keyExpr = 'id';
  grid.showFilterRow = true;
  grid.showSearchPanel = true;
  grid.headerFilter = true;
  grid.columns = [
    { path: 'customer', label: 'Customer', width: 190 },
    { path: 'country', label: 'Country', width: 160 },
    { path: 'category', label: 'Category', width: 140 },
    { path: 'orderDate', label: 'Date', width: 150, dataType: 'date' },
    { path: 'total', label: 'Total', width: 140, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
    { path: 'priority', label: 'Priority', width: 120, dataType: 'boolean' },
  ];
  grid.items = makeOrders(1_000);

  controls(host,
    checkbox('Filter row', true, value => (grid.showFilterRow = value)),
    checkbox('Search panel', true, value => (grid.showSearchPanel = value)),
    checkbox('Header filter', true, value => (grid.headerFilter = value)));
};
`;export{e as default};
