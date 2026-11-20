const e=`import '@universal-material/data-grid';
import type { GridColumnDef } from '@universal-material/data-grid';

import { checkbox, controls, createGrid } from '../shared/controls.js';

export const meta = {
  title: 'Long header labels',
  description: 'With \`header-wrap\`, long labels break over several lines instead of an ellipsis and the header row grows (\`--u-grid-header-cell-height\` becomes its minimum); a column\\'s \`headerWrap: false\` keeps one line. Auto-size still fits the label in one line. If the bar and the headers took more than half of the visible height, the headers would stop sticking.',
};

interface Training {
  user: string;
  [document: string]: string;
}

const DOCUMENTS = [
  'Code of conduct and ethics',
  'Information security policy',
  'Anti-corruption training',
  'Data protection (LGPD) basics',
  'Workplace safety induction',
  'Quality management system',
];

export default (host: HTMLElement) => {
  const grid = createGrid(host, 360);
  const columns: GridColumnDef<Training>[] = [
    { path: 'user', label: 'User', width: 160, fixed: 'start', headerWrap: false },
    ...DOCUMENTS.map((label, index): GridColumnDef<Training> => ({ path: \`d\${index}\`, label, width: 170 })),
  ];

  grid.headerWrap = true;
  grid.headerFilter = true;
  grid.columns = columns;
  grid.items = Array.from({ length: 40 }, (_, row) => ({
    user: \`User \${row + 1}\`,
    ...Object.fromEntries(DOCUMENTS.map((_, index) => [\`d\${index}\`, (row + index) % 3 ? 'Done' : 'Pending'])),
  }));

  controls(host, checkbox('header-wrap', true, checked => {
    grid.headerWrap = checked;
  }));
};
`;export{e as default};
