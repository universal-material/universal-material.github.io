const e=`import '@universal-material/data-grid';

import { button, checkbox, controls, createGrid, el, eventLog } from '../shared/controls.js';
import { makeOrders } from '../shared/data.js';

export const meta = {
  title: 'Clipboard: copy and paste',
  description: 'Select cells (drag, or \`Shift\`+arrows) and press \`Ctrl\`+\`C\`: the range is copied as tab-separated text and an HTML table, ready for a spreadsheet. With \`clipboard-mode="copy-paste"\` and editing on, \`Ctrl\`+\`V\` pastes a block from a spreadsheet (or from the text box below) into the editable cells — validated and, in \`batch\` mode, kept pending until saved. \`copySelection()\` copies from a button; \`u-grid-copying\` and \`u-grid-pasting\` let you inspect or change what goes through.',
};

export default (host: HTMLElement) => {
  const grid = createGrid(host, 360);

  grid.keyExpr = 'id';
  grid.cellSelectionMode = 'multiple';
  grid.clipboardMode = 'copy-paste';
  grid.allowEditing = true;
  grid.editMode = 'batch';
  grid.columns = [
    { path: 'id', label: 'Order', width: 90, dataType: 'number', editable: false },
    { path: 'customer', label: 'Customer', width: 190 },
    { path: 'status', label: 'Status', width: 130 },
    { path: 'quantity', label: 'Qty', width: 100, dataType: 'number', validationRules: [{ type: 'range', min: 1, max: 100 }] },
    { path: 'unitPrice', label: 'Unit price', width: 130, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
    { path: 'orderDate', label: 'Date', width: 140, dataType: 'date' },
  ];
  grid.items = makeOrders(200);

  let upperCase = false;
  const log = eventLog(host);

  grid.addEventListener('u-grid-copying', event => {
    const { ranges, items, columns, source } = event.detail;
    log.write(\`u-grid-copying  source=\${source}  \${ranges.length} range(s), \${items.length} row(s) × \${columns.length} column(s)\`);
  });

  grid.addEventListener('u-grid-pasting', event => {
    const { values } = event.detail;

    // \`values\` belongs to the grid: change the strings to transform what is pasted.
    if (upperCase) {
      for (const row of values) {
        row.forEach((text, i) => (row[i] = text.toUpperCase()));
      }
    }

    log.write(\`u-grid-pasting  \${values.length} row(s) × \${values[0]?.length ?? 0} column(s)\`);
  });

  // A scratch area to copy into and paste from (two columns: Customer, Status).
  const scratch = el('textarea', {
    rows: 3,
    ariaLabel: 'Scratch area',
    value: 'Ana Silva\\tPaid\\nJoão Costa\\tShipped',
  });
  scratch.style.cssText = 'width: 100%; margin-top: 12px; font-family: ui-monospace, monospace;';
  host.append(scratch);

  controls(host,
    button('Copy selection', async () => {
      // Call it inside the click: browsers only allow clipboard writes during a user gesture.
      const copied = await grid.copySelection();
      log.write(\`copySelection() → \${copied}\`);
    }),
    button('Select Customer…Status, rows 0–1', () => {
      grid.selectCellRange({ startRowIndex: 0, endRowIndex: 1, startColumn: 'customer', endColumn: 'status' });
      grid.focus();
    }),
    checkbox('Upper-case pasted text', false, value => (upperCase = value)),
    button('Save changes', () => grid.saveChanges()),
    button('Discard changes', () => grid.discardChanges()));
};
`;export{e as default};
