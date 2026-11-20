const e=`import '@universal-material/data-grid';
import type { GridEditMode } from '@universal-material/data-grid';

import { checkbox, controls, createGrid, el, select } from '../shared/controls.js';
import { makeOrders } from '../shared/data.js';

export const meta = {
  title: 'Edit modes and built-in editors',
  description: '\`cell\` mode (default) saves each cell on \`Enter\`, \`Tab\` or a click elsewhere; \`row\` mode opens the whole row with **Save** / **Cancel**; \`batch\` mode keeps every change pending — marked in the grid — until **Save changes** or **Discard changes** in the toolbar. Each data type has its editor: text, a decimal input for numbers, a date picker and a checkbox. \`allow-adding\` shows **Add row** and \`allow-removing\` a Delete button per row. The panel below lists \`getChanges()\`.',
};

export default (host: HTMLElement) => {
  const grid = createGrid(host, 380);

  grid.keyExpr = 'id';
  grid.allowEditing = true;
  grid.allowAdding = true;
  grid.allowRemoving = true;
  grid.editMode = 'batch';
  grid.columns = [
    { path: 'id', label: 'Order', width: 90, dataType: 'number', editable: false },
    { path: 'customer', label: 'Customer', width: 190 },
    { path: 'quantity', label: 'Qty', width: 100, dataType: 'number' },
    { path: 'unitPrice', label: 'Unit price', width: 130, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
    { path: 'orderDate', label: 'Date', width: 150, dataType: 'date' },
    { path: 'priority', label: 'Priority', width: 110, dataType: 'boolean' },
  ];
  grid.items = makeOrders(200);

  // The pending changes, read from the grid after each interaction.
  const pending = el('pre', { className: 'demo-log', ariaLabel: 'Pending changes', tabIndex: 0 });
  host.append(pending);

  const showChanges = () => queueMicrotask(() => {
    const changes = grid.getChanges().map(({ type, rowKey, data }) => ({ type, rowKey: typeof rowKey === 'number' ? rowKey : '(new)', data }));
    pending.textContent = changes.length ? \`getChanges():\\n\${JSON.stringify(changes, null, 2)}\` : 'No pending changes.';
  });

  for (const type of ['keyup', 'click', 'focusout', 'u-grid-save', 'u-grid-edit-cancel'] as const) {
    grid.addEventListener(type, showChanges);
  }

  showChanges();

  controls(host,
    select<GridEditMode>('Edit mode', ['cell', 'row', 'batch'], 'batch', value => {
      grid.discardChanges();
      grid.editMode = value;
    }),
    checkbox('Allow adding', true, value => (grid.allowAdding = value)),
    checkbox('Allow removing', true, value => (grid.allowRemoving = value)),
    checkbox('Open on double-click', false, value => (grid.editTrigger = value ? 'dblclick' : 'click')));
};
`;export{e as default};
