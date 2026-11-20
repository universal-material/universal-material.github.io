const e=`import { html, nothing } from 'lit';

import '@universal-material/data-grid';
import type { GridColumnDef } from '@universal-material/data-grid';

import { createGrid, eventLog } from '../shared/controls.js';
import { makeOrders, STATUSES, type Order } from '../shared/data.js';

export const meta = {
  title: 'Custom editors',
  description: '\`editorRenderer(item, ctx)\` returns your own editor: here a \`<select>\` for **Status** and a range slider for **Qty**. Report the value with \`ctx.setValue()\`; the grid still handles \`Enter\`, \`Tab\` and \`Esc\`. Use \`ctx.label\` as the accessible name and \`ctx.describedBy\` to link the error text. \`u-grid-edit-starting\` is cancelable: cancelled orders cannot be edited.',
};

export default (host: HTMLElement) => {
  const grid = createGrid(host, 380);

  const status: GridColumnDef<Order> = {
    path: 'status',
    label: 'Status',
    width: 160,
    editorRenderer: (_item, ctx) => html\`
      <select aria-label=\${ctx.label} aria-describedby=\${ctx.describedBy || nothing}
        @change=\${(event: Event) => ctx.setValue((event.target as HTMLSelectElement).value)}>
        \${STATUSES.map(option => html\`<option ?selected=\${option === ctx.value}>\${option}</option>\`)}
      </select>\`,
  };

  const quantity: GridColumnDef<Order> = {
    path: 'quantity',
    label: 'Qty',
    width: 200,
    dataType: 'number',
    editorRenderer: (_item, ctx) => html\`
      <input type="range" min="1" max="50" .value=\${String(ctx.value ?? 1)} aria-label=\${ctx.label}
        @input=\${(event: Event) => ctx.setValue(Number((event.target as HTMLInputElement).value))}>\`,
  };

  grid.keyExpr = 'id';
  grid.allowEditing = true;
  grid.columns = [
    { path: 'id', label: 'Order', width: 90, dataType: 'number', editable: false },
    { path: 'customer', label: 'Customer', width: 190 },
    status,
    quantity,
    { path: 'unitPrice', label: 'Unit price', width: 130, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
  ];
  grid.items = makeOrders(200);

  const log = eventLog(host);

  grid.addEventListener('u-grid-edit-starting', event => {
    const order = event.detail.item as Order;

    if (order.status === 'Cancelled') {
      event.preventDefault();
      log.write(\`u-grid-edit-starting  order #\${order.id} is cancelled: editing blocked\`);
    }
  });

  grid.addEventListener('u-grid-save', event => {
    for (const change of event.detail.changes) {
      log.write(\`u-grid-save  order #\${String(change.rowKey)}  \${JSON.stringify(change.data)}\`);
    }
  });
};
`;export{e as default};
