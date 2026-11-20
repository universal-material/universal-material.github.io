const e=`import '@universal-material/data-grid';

import { button, controls, createGrid } from '../shared/controls.js';

export const meta = {
  title: 'Nested children',
  description: 'With \`treeMode = \\'nested\\'\`, \`items\` are the roots and each item lists its children in \`children\` (or the path / function in \`childrenExpr\`). \`summary.node\` summarizes the descendants of every folder: the size in the Size column (\`display: \\'column\\'\`) and the file count after the name (\`inline\`). Use the buttons, the expand button, or \`→\` / \`←\` on the Name cell.',
};

interface FileNode {
  id: string;
  name: string;
  type: 'Folder' | 'Image' | 'Document' | 'Spreadsheet' | 'Video';
  size?: number; // bytes; folders get the sum of their files
  modified: Date;
  children?: FileNode[];
}

const file = (id: string, name: string, type: FileNode['type'], size: number, day: number): FileNode =>
  ({ id, name, type, size, modified: new Date(Date.UTC(2025, 0, day)) });

const folder = (id: string, name: string, day: number, children: FileNode[]): FileNode =>
  ({ id, name, type: 'Folder', modified: new Date(Date.UTC(2025, 0, day)), children });

const files: FileNode[] = [
  folder('docs', 'Documents', 20, [
    folder('docs/contracts', 'Contracts', 18, [
      file('docs/contracts/acme', 'Acme renewal.pdf', 'Document', 482_000, 12),
      file('docs/contracts/globex', 'Globex NDA.pdf', 'Document', 128_500, 15),
    ]),
    folder('docs/finance', 'Finance', 20, [
      file('docs/finance/budget', 'Budget 2025.xlsx', 'Spreadsheet', 96_300, 3),
      file('docs/finance/q4', 'Q4 report.xlsx', 'Spreadsheet', 210_700, 20),
      folder('docs/finance/receipts', 'Receipts', 9, [
        file('docs/finance/receipts/jan', 'January.pdf', 'Document', 1_204_000, 9),
        file('docs/finance/receipts/feb', 'February.pdf', 'Document', 998_000, 9),
      ]),
    ]),
    file('docs/notes', 'Meeting notes.docx', 'Document', 33_200, 19),
  ]),
  folder('media', 'Media', 25, [
    folder('media/photos', 'Photos', 25, [
      file('media/photos/beach', 'Beach.jpg', 'Image', 3_480_000, 21),
      file('media/photos/team', 'Team.jpg', 'Image', 2_910_000, 25),
      file('media/photos/office', 'Office.png', 'Image', 5_020_000, 22),
    ]),
    file('media/launch', 'Launch video.mp4', 'Video', 184_300_000, 24),
  ]),
  file('todo', 'To do.txt', 'Document', 1_200, 26),
];

const bytes = (value: unknown) => {
  const size = Number(value);
  const [amount, unit] = size >= 1e6 ? [size / 1e6, 'MB'] : size >= 1e3 ? [size / 1e3, 'KB'] : [size, 'B'];
  return \`\${amount.toLocaleString('en-US', { maximumFractionDigits: 1 })} \${unit}\`;
};

export default (host: HTMLElement) => {
  const grid = createGrid(host, 440);

  grid.treeMode = 'nested';
  grid.keyExpr = 'id';
  grid.autoExpandNodes = true;
  grid.columns = [
    { path: 'name', label: 'Name', width: 320 },
    { path: 'type', label: 'Type', width: 140 },
    { path: 'size', label: 'Size', width: 130, dataType: 'number', format: bytes },
    { path: 'modified', label: 'Modified', width: 150, dataType: 'date' },
  ];
  grid.summary = {
    node: [
      { column: 'size', type: 'sum', display: 'column', format: bytes },
      // Count the files only: folders have no size.
      { column: 'name', type: (_values, items: readonly FileNode[]) => items.filter(item => item.type !== 'Folder').length, label: 'Files' },
    ],
    total: [{ column: 'size', type: 'sum', format: bytes }],
  };
  grid.items = files;

  controls(host,
    button('Expand all', () => grid.expandAllNodes()),
    button('Collapse all', () => grid.collapseAllNodes()),
    button('Open Receipts', async () => {
      // expandNode resolves when the children are shown; it does not open the parents.
      await grid.expandNode('docs');
      await grid.expandNode('docs/finance');
      await grid.expandNode('docs/finance/receipts');
    }));
};
`;export{e as default};
