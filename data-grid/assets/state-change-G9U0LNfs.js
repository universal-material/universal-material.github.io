const e=`import '@universal-material/data-grid';

import { controls, createGrid, el, select } from '../shared/controls.js';
import { makeOrders } from '../shared/data.js';

export const meta = {
  title: 'The u-grid-state-change event',
  description: '\`u-grid-state-change\` fires \`state-change-delay\` ms (default 500) after the last change of any part of the state — a gesture, a method or a property — once per burst, and only if the state really changed. \`detail.state\` has the shape of \`getState()\` and \`detail.sources\` says where the changes came from. Sort, group, resize or filter and watch the JSON below; use it to save the state wherever you like.',
};

export default (host: HTMLElement) => {
  const grid = createGrid(host, 360);

  grid.keyExpr = 'id';
  grid.selectionMode = 'multiple';
  grid.columnResizing = true;
  grid.headerFilter = true;
  grid.columns = [
    { path: 'id', label: 'Order', width: 90, dataType: 'number' },
    { path: 'customer', label: 'Customer', width: 190 },
    { path: 'country', label: 'Country', width: 150 },
    { path: 'status', label: 'Status', width: 130 },
    { path: 'total', label: 'Total', width: 140, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
  ];
  grid.items = makeOrders(300);

  const output = el('pre', { className: 'demo-log', ariaLabel: 'Last state', tabIndex: 0 }, 'Change something in the grid…');
  output.style.height = '240px';
  host.append(output);

  grid.addEventListener('u-grid-state-change', event => {
    const { state, sources } = event.detail;
    output.textContent = \`\${new Date().toLocaleTimeString()}  sources: \${sources.join(', ')}\\n\${JSON.stringify(state, null, 2)}\`;
  });

  controls(host,
    select('state-change-delay', ['0', '500', '2000'], '500', value => (grid.stateChangeDelay = Number(value))));
};
`;export{e as default};
