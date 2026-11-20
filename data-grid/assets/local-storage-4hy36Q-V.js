const e=`import '@universal-material/data-grid';

import { button, controls, createGrid, stat } from '../shared/controls.js';
import { makeOrders } from '../shared/data.js';

export const meta = {
  title: 'Saved in localStorage',
  description: 'With \`state-storage="local"\` and a \`state-storage-key\`, the layout is written to \`localStorage\` half a second after each change and read back **before the first render** — no flash of the default layout. Sort, group, resize, move or hide columns, filter, select rows… then reload the page: everything comes back. \`resetState()\` returns to the column definitions and initial properties.',
};

const STORAGE_KEY = 'u-grid-docs-orders';

export default (host: HTMLElement) => {
  const grid = createGrid(host, 400);

  grid.keyExpr = 'id';
  grid.stateStorage = 'local';
  grid.stateStorageKey = STORAGE_KEY;
  grid.selectionMode = 'multiple';
  grid.showCheckboxes = true;
  grid.columnResizing = true;
  grid.columnChooser = true;
  grid.showFilterRow = true;
  grid.showSearchPanel = true;
  grid.columns = [
    { path: 'id', label: 'Order', width: 90, dataType: 'number' },
    { path: 'customer', label: 'Customer', width: 190 },
    { path: 'country', label: 'Country', width: 150 },
    { path: 'category', label: 'Category', width: 140 },
    { path: 'status', label: 'Status', width: 120 },
    { path: 'total', label: 'Total', width: 140, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
  ];
  grid.items = makeOrders(500);

  const saved = stat();
  const showSaved = () => {
    saved.textContent = localStorage.getItem(STORAGE_KEY) ? \`Saved under "\${STORAGE_KEY}"\` : 'Nothing saved yet';
  };

  // The grid writes the storage right after the event.
  grid.addEventListener('u-grid-state-change', () => queueMicrotask(showSaved));
  showSaved();

  controls(host,
    button('Reload the page', () => location.reload()),
    button('Reset state', () => grid.resetState()),
    saved);
};
`;export{e as default};
