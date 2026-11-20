const t=`import '@universal-material/data-grid';
import type { GridSummaryValue } from '@universal-material/data-grid';

import { button, controls, createGrid, eventLog } from '../shared/controls.js';
import { makeOrders, type Order } from '../shared/data.js';

export const meta = {
  title: 'Custom aggregates, formats and values',
  description: '\`type\` can be a function \`(values, items) => value\`: here the number of distinct customers and the average price weighted by quantity. \`format\` takes \`Intl\` options or a function. \`getSummaryValues()\` returns the totals and \`getSummaryValues(groupPath)\` the summaries of one group, as \`{ item, value, text }\`; \`name\` identifies an item.',
};

export default (host: HTMLElement) => {
  const grid = createGrid(host, 420);

  grid.keyExpr = 'id';
  grid.columns = [
    { path: 'country', label: 'Country', width: 160, groupIndex: 0 },
    { path: 'customer', label: 'Customer', width: 200 },
    { path: 'quantity', label: 'Qty', width: 130, dataType: 'number' },
    { path: 'unitPrice', label: 'Unit price', width: 200, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
    { path: 'total', label: 'Total', width: 180, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
  ];

  const distinctCustomers = (values: readonly unknown[]) => new Set(values).size;
  const weightedPrice = (_values: readonly unknown[], items: readonly Order[]) => {
    const quantity = items.reduce((sum, order) => sum + order.quantity, 0);
    return quantity ? items.reduce((sum, order) => sum + order.total, 0) / quantity : null;
  };

  grid.summary = {
    total: [
      { name: 'customers', column: 'customer', type: distinctCustomers, label: 'Customers' },
      { name: 'units', column: 'quantity', type: 'sum', format: value => \`\${Number(value).toLocaleString('en-US')} units\` },
      { name: 'price', column: 'unitPrice', type: weightedPrice, label: 'Weighted avg.', format: { style: 'currency', currency: 'USD' } },
      { name: 'revenue', column: 'total', type: 'sum', format: { style: 'currency', currency: 'USD', notation: 'compact' } },
    ],
    group: [
      { column: 'customer', type: distinctCustomers, label: 'Customers' },
      { column: 'total', type: 'sum', display: 'column', format: { style: 'currency', currency: 'USD', notation: 'compact' } },
    ],
  };
  grid.items = makeOrders(600);

  const log = eventLog(host);
  const print = (title: string, values: GridSummaryValue[]) =>
    log.write(\`\${title}: \${values.map(({ item, value, text }) => \`\${item.name ?? item.column}=\${JSON.stringify(value)} ("\${text}")\`).join(', ') || 'no such group'}\`);

  controls(host,
    button('getSummaryValues()', () => print('Totals', grid.getSummaryValues())),
    button('getSummaryValues([\\'Brazil\\'])', () => print('Brazil', grid.getSummaryValues(['Brazil']))));
};
`;export{t as default};
