const e=`import { html } from 'lit';

import '@universal-material/data-grid';
import type { GridColumnDef } from '@universal-material/data-grid';

import { button, controls, el, eventLog, select } from '../shared/controls.js';
import { makeOrders, type Order } from '../shared/data.js';

export const meta = {
  title: 'Adaptive row with master-detail',
  description: 'The adaptive row is the master-detail row: hidden values come first, then the \`detailRenderer\` content. A cell \`renderer\` knows where it is drawn through \`ctx.adaptive\`. \`expandRow\`/\`collapseRow\` work with \`autoHideColumns\` even without a \`detailRenderer\`. Without \`hidingPriority\`, columns hide from the last one.',
};

export default (host: HTMLElement) => {
  const container = el('div');
  container.style.cssText = 'width: 480px; max-width: 100%';
  const grid = document.createElement('u-grid');
  grid.style.height = '420px';
  container.append(grid);
  host.append(container);

  const columns: GridColumnDef<Order>[] = [
    { path: 'id', label: 'Order', width: 90 },
    { path: 'customer', label: 'Customer', width: 170 },
    {
      path: 'status',
      label: 'Status',
      width: 120,
      // In the table a compact badge; in the adaptive row, a sentence.
      renderer: (order, ctx) => (ctx.adaptive ? \`\${ctx.text} since \${order.orderDate.toLocaleDateString('en')}\` : html\`<strong>\${ctx.text}</strong>\`),
    },
    { path: 'product', label: 'Product', width: 140 },
    { path: 'quantity', label: 'Qty', width: 80 },
    { path: 'total', label: 'Total', width: 130, format: { style: 'currency', currency: 'USD' } },
  ];

  grid.keyExpr = 'id';
  grid.autoHideColumns = true;
  grid.columns = columns;
  grid.items = makeOrders(100);
  // Shown after the hidden values.
  grid.detailRenderer = (order: Order) => html\`
    <p style="margin: 8px 0">\${order.customer} ordered \${order.quantity} × \${order.product} (\${order.category}) from \${order.country}.</p>\`;

  const log = eventLog(host);

  grid.addEventListener('u-grid-row-expansion-change', ({ detail }) =>
    log.write(\`u-grid-row-expansion-change  row \${detail.rowKey}: \${detail.expanded ? 'expanded' : 'collapsed'} (\${detail.source})\`));
  grid.addEventListener('u-grid-adaptive-columns-change', ({ detail }) =>
    log.write(\`u-grid-adaptive-columns-change  \${detail.columns.map(column => column.label).join(', ') || 'none'}\`));

  controls(host,
    select('Width', [['360px', 'Phone (360px)'], ['480px', 'Card (480px)'], ['720px', 'Tablet (720px)'], ['100%', 'Full']], '480px',
      value => (container.style.width = value)),
    button('Expand order 1', () => grid.expandRow(1)),
    button('Collapse order 1', () => grid.collapseRow(1)),
    button('Hidden columns', () => {
      const hidden = grid.getAdaptiveColumns();
      log.write(\`getAdaptiveColumns()  \${hidden.map(column => column.label).join(', ') || 'none'}\`);
    }));
};
`;export{e as default};
