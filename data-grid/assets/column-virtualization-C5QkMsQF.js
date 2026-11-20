const n=`import '@universal-material/data-grid';
import type { GridColumnDef, GridColumnRenderingMode } from '@universal-material/data-grid';

import { button, controls, createGrid, select, stat } from '../shared/controls.js';

export const meta = {
  title: '300 columns × 100,000 rows',
  description: 'Rows and columns are both virtualized: only the cells in view (plus some overscan), the fixed columns and the focused cell are in the DOM. Keyboard navigation still reaches every column, and \`aria-colcount\` counts them all. The values are computed by \`valueGetter\` from the row number, so the items are tiny.',
};

const COLUMN_COUNT = 300;
const ROW_COUNT = 100_000;
const WEEK = 10; // columns per band

interface Row {
  id: number;
}

// Cheap deterministic value for (row, column).
const value = (row: Row, column: number) => ((row.id * 7_919 + column * 104_729) % 100_000) / 100;

export default (host: HTMLElement) => {
  const grid = createGrid(host, 440);

  const bands: GridColumnDef<Row>[] = Array.from({ length: COLUMN_COUNT / WEEK }, (_, band) => ({
    label: \`Week \${band + 1}\`,
    columns: Array.from({ length: WEEK }, (_, i) => {
      const column = band * WEEK + i;
      return {
        name: \`c\${column}\`,
        label: \`Day \${column + 1}\`,
        width: 100,
        dataType: 'number',
        format: { minimumFractionDigits: 2 },
        valueGetter: (row: Row) => value(row, column),
      } satisfies GridColumnDef<Row>;
    }),
  }));

  const columns: GridColumnDef<Row>[] = [{ path: 'id', label: 'Row', width: 100, fixed: 'start' }, ...bands];
  const lastColumn = bands.at(-1)!.columns!.at(-1)!;

  const started = performance.now();
  grid.keyExpr = 'id';
  grid.showColumnLines = true;
  grid.columns = columns;
  grid.items = Array.from({ length: ROW_COUNT }, (_, i) => ({ id: i + 1 }));

  const info = stat(\`\${COLUMN_COUNT} columns × \${ROW_COUNT.toLocaleString('en')} rows = \${(COLUMN_COUNT * ROW_COUNT).toLocaleString('en')} cells\`);
  const time = stat();
  grid.updateComplete.then(() => (time.textContent = \`first render in \${Math.round(performance.now() - started)} ms\`));

  controls(host,
    select<GridColumnRenderingMode>('Column rendering', ['auto', 'virtual', 'standard'], 'auto', mode => (grid.columnRenderingMode = mode)),
    // Focusing a cell outside the DOM brings its column in and scrolls to it.
    button('Focus the last cell', () => grid.focusCell(ROW_COUNT, lastColumn)),
    info,
    time);
};
`;export{n as default};
