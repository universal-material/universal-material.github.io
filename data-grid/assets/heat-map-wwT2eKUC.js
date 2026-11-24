const e=`import '@universal-material/data-grid';
import type { GridColumnDef } from '@universal-material/data-grid';
import { downloadXlsx, type GridXlsxCell } from '@universal-material/data-grid/export-xlsx';

import { button, controls, createGrid, el } from '../shared/controls.js';
import { random } from '../shared/data.js';

export const meta = {
  title: 'Excel heat map (styled per cell)',
  description: '\`customizeCell\` styles each cell of the sheet: here a compliance heat map — people × documents, the percentage read — with a background per range. **Color only reinforces the text**: every cell says its state ("45% overdue"), so the sheet reads the same without color, in high contrast and on a screen reader. Text colors are checked against the background (below 4.5:1 they are dropped, with a warning). Thousands of rows × dozens of columns are written in a Web Worker; the styles are stored once, however many cells share them.',
};

const DOCUMENTS = ['Code of conduct', 'Privacy', 'Security', 'Anti-bribery', 'Travel', 'Expenses', 'Remote work', 'Data retention'];

/** Range → state text and background (the state is always written; the color only reinforces it). */
const rangeOf = (pct: number) => pct < 50
  ? { state: 'overdue', background: '#f8696b' }
  : pct < 80
    ? { state: 'in progress', background: '#ffeb84' }
    : { state: 'done', background: '#63be7b' };

export default (host: HTMLElement) => {
  const grid = createGrid(host, 380);
  const next = random(29);

  grid.setAttribute('aria-label', 'Compliance');
  grid.columns = [
    { path: 'person', label: 'Person', width: 180, fixed: 'start' },
    { path: 'team', label: 'Team', width: 120 },
    {
      label: 'Documents read (%)',
      columns: DOCUMENTS.map((doc, d): GridColumnDef => ({
        name: \`doc\${d}\`,
        label: doc,
        width: 120,
        dataType: 'number',
        valueGetter: (item: { read: number[] }) => item.read[d],
        format: { maximumFractionDigits: 0 },
      })),
    },
  ];
  grid.items = Array.from({ length: 2000 }, (_, n) => ({
    person: \`Person \${n + 1}\`,
    team: ['Sales', 'Legal', 'Finance', 'IT'][n % 4],
    read: DOCUMENTS.map(() => Math.round(next() * 100)),
  }));

  const timing = el('span', { className: 'demo-stat' });

  const heat = (cell: GridXlsxCell) => {
    if (cell.rowType === 'data' && typeof cell.value === 'number') {
      const { state, background } = rangeOf(cell.value);
      cell.text = \`\${cell.value}% \${state}\`;
      cell.style = { ...cell.style, backgroundColor: background, alignment: 'center' };
    }
  };

  controls(host,
    button('Download heat map .xlsx', async () => {
      const start = performance.now();
      await downloadXlsx(grid, { fileName: 'compliance.xlsx', customizeCell: heat });
      timing.textContent = \`Written in \${Math.round(performance.now() - start)} ms\`;
    }),
    timing);
};
`;export{e as default};
