const e=`import '@universal-material/data-grid';
import type { GridTreeFilterMode } from '@universal-material/data-grid';

import { button, checkbox, controls, createGrid, select, stat } from '../shared/controls.js';
import { makeEmployees } from '../shared/data.js';

export const meta = {
  title: 'Flat list, filter modes and recursive selection',
  description: 'An org chart as flat rows: \`treeMode = \\'flat\\'\` builds the tree from \`keyExpr\` and \`parentKeyExpr\`. Search for \`support\` and switch \`treeFilterMode\`: matches with their ancestors, the whole branch below them, or only the matches. With \`recursiveSelection\`, checking a manager checks the whole team and a partly checked parent shows as mixed.',
};

export default (host: HTMLElement) => {
  const grid = createGrid(host, 460);

  grid.treeMode = 'flat';
  grid.keyExpr = 'id';
  grid.parentKeyExpr = 'parentId';
  grid.autoExpandNodes = true;
  grid.showSearchPanel = true;
  grid.searchText = 'support';
  grid.selectionMode = 'multiple';
  grid.showCheckboxes = true;
  grid.recursiveSelection = true;
  grid.columns = [
    { path: 'name', label: 'Name', width: 280 },
    { path: 'title', label: 'Title', width: 260 },
    { path: 'department', label: 'Department', width: 140 },
    { path: 'salary', label: 'Salary', width: 150, dataType: 'number', format: { style: 'currency', currency: 'USD', maximumFractionDigits: 0 } },
    { path: 'hireDate', label: 'Hired', width: 130, dataType: 'date' },
  ];
  grid.summary = {
    // Team size after each manager's name.
    node: [{ column: 'name', type: 'count', label: 'Team' }],
  };
  grid.items = makeEmployees();

  const selected = stat('Selected: 0');

  grid.addEventListener('u-grid-selection-change', event => {
    selected.textContent = \`Selected: \${event.detail.selectedKeys.length}\`;
  });

  controls(host,
    select<GridTreeFilterMode>('Filter mode', ['with-ancestors', 'full-branch', 'match-only'], 'with-ancestors', value => (grid.treeFilterMode = value)),
    checkbox('Recursive selection', true, value => (grid.recursiveSelection = value)),
    button('Expand all', () => grid.expandAllNodes()),
    button('Collapse all', () => grid.collapseAllNodes()),
    button('Clear search', () => (grid.searchText = '')),
    selected);
};
`;export{e as default};
