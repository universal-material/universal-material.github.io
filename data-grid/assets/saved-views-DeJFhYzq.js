const t=`import '@universal-material/data-grid';
import type { GridState } from '@universal-material/data-grid';

import { button, controls, createGrid, el, stat } from '../shared/controls.js';
import { makeOrders } from '../shared/data.js';

export const meta = {
  title: 'Saved views',
  description: '\`getState()\` returns the current layout as a plain, JSON-serializable object; \`setState(state)\` restores one — the way to build "saved views". With \`{ partial: true }\` only the keys present change: the preset buttons below set just the grouping or just the search. Columns are matched by \`name\`, or by \`path\`. \`setState\` announces nothing to screen readers, so the demo reports the result in its own status text.',
};

export default (host: HTMLElement) => {
  const grid = createGrid(host, 380);

  grid.keyExpr = 'id';
  grid.columnResizing = true;
  grid.showSearchPanel = true;
  grid.columns = [
    { path: 'id', label: 'Order', width: 90, dataType: 'number' },
    { path: 'customer', label: 'Customer', width: 190 },
    { path: 'country', label: 'Country', width: 150 },
    { path: 'category', label: 'Category', width: 140 },
    { path: 'orderDate', label: 'Date', width: 140, dataType: 'date' },
    { path: 'total', label: 'Total', width: 140, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
  ];
  grid.items = makeOrders(500);

  // In your app, keep the views on the server or in localStorage (they are plain JSON).
  const views = new Map<string, GridState>();
  const status = stat('Arrange the grid, then save it in a slot.');

  const slot = (name: string) => {
    const restore = button(\`Restore \${name}\`, () => {
      grid.setState(views.get(name)!);
      status.textContent = \`\${name} restored.\`;
    }, { disabled: true });

    const save = button(\`Save \${name}\`, () => {
      views.set(name, grid.getState());
      restore.disabled = false;
      status.textContent = \`\${name} saved (\${JSON.stringify(views.get(name)).length} characters of JSON).\`;
    });

    return el('span', {}, save, ' ', restore);
  };

  controls(host,
    slot('view A'),
    slot('view B'),
    button('Preset: group by country', () => {
      grid.setState({ version: 1, columns: [{ name: 'country', groupIndex: 0 }, { name: 'total', sortOrder: 'desc', sortIndex: 0 }] }, { partial: true });
      status.textContent = 'Grouped by country, sorted by total.';
    }),
    button('Preset: search "brazil"', () => {
      grid.setState({ version: 1, searchText: 'brazil' }, { partial: true });
      status.textContent = 'Searching for "brazil".';
    }),
    button('Reset', () => {
      grid.resetState();
      status.textContent = 'Back to the initial layout.';
    }),
    status);
};
`;export{t as default};
