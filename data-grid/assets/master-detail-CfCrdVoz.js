const e=`import { html } from 'lit';

import '@universal-material/data-grid';
import type { GridColumnDef, GridDetailRenderer } from '@universal-material/data-grid';

import { button, controls, createGrid, eventLog, select } from '../shared/controls.js';
import { CATEGORIES, makeOrders, random, type Order } from '../shared/data.js';

export const meta = {
  title: 'Master-detail',
  description: '\`detailRenderer(item, ctx)\` adds a toggle column; an expanded row is followed by a full-width detail row of any height. The detail can be a simple template or another \`<u-grid>\` (give it an \`aria-label\`). \`expandRow\`/\`collapseRow\` work by row key, and \`u-grid-row-expansion-change\` reports every change. Keyboard: \`Enter\` on the toggle, \`↓\` into the detail, \`Enter\`/\`F2\` into its content, \`Esc\` back.',
};

interface OrderLine {
  sku: string;
  category: string;
  quantity: number;
  price: number;
}

// Pretend line items of an order, derived from its id (in your app, from your API).
const linesOf = (order: Order): OrderLine[] => {
  const next = random(order.id);
  return Array.from({ length: 2 + Math.floor(next() * 5) }, (_, i) => ({
    sku: \`\${order.id}-\${i + 1}\`,
    category: CATEGORIES[Math.floor(next() * CATEGORIES.length)]!,
    quantity: 1 + Math.floor(next() * 9),
    price: Math.round(next() * 20_000) / 100,
  }));
};

const lineColumns: GridColumnDef<OrderLine>[] = [
  { path: 'sku', label: 'SKU', width: 120 },
  { path: 'category', label: 'Category', width: 150 },
  { path: 'quantity', label: 'Qty', width: 90, dataType: 'number' },
  { path: 'price', label: 'Price', width: 120, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
];

const summaryDetail: GridDetailRenderer<Order> = order => html\`
  <div style="display: grid; grid-template-columns: max-content 1fr; gap: 4px 16px; padding: 8px 0">
    <span>Product</span><strong>\${order.product} (\${order.category})</strong>
    <span>Ordered</span><span>\${order.orderDate.toDateString()}</span>
    <span>Quantity</span><span>\${order.quantity} × \${order.unitPrice.toFixed(2)} USD</span>
  </div>\`;

const nestedGridDetail: GridDetailRenderer<Order> = order => html\`
  <u-grid style="height: 220px; margin: 8px 0" aria-label="Lines of order \${order.id}" key-expr="sku"
    .columns=\${lineColumns} .items=\${linesOf(order)}></u-grid>\`;

export default (host: HTMLElement) => {
  const orders = makeOrders(200);
  const grid = createGrid(host, 460);

  grid.keyExpr = 'id';
  grid.columns = [
    { path: 'id', label: 'Order', width: 100, dataType: 'number' },
    { path: 'customer', label: 'Customer', width: 200 },
    { path: 'country', label: 'Country', width: 160 },
    { path: 'status', label: 'Status', width: 130 },
    { path: 'total', label: 'Total', width: 140, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
  ];
  grid.items = orders;
  grid.detailRenderer = summaryDetail;
  grid.expandRow(1);

  const log = eventLog(host);

  grid.addEventListener('u-grid-row-expansion-change', event => {
    if (event.composedPath()[0] === grid) { // events of a nested grid bubble through this one
      log.write(\`u-grid-row-expansion-change order \${String(event.detail.rowKey)} \${event.detail.expanded ? 'expanded' : 'collapsed'} (\${event.detail.source})\`);
    }
  });

  controls(host,
    select('Detail', [['summary', 'Simple template'], ['grid', 'Nested grid']], 'summary',
      value => (grid.detailRenderer = value === 'grid' ? nestedGridDetail : summaryDetail)),
    button('Expand order 3', () => grid.expandRow(3)),
    button('Collapse order 3', () => grid.collapseRow(3)),
    button('Is order 1 expanded?', () => log.write(\`isRowExpanded(1): \${grid.isRowExpanded(1)}\`)));
};
`;export{e as default};
