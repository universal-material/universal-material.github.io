const e=`import '@universal-material/data-grid';
import type { GridCellSelectionMode } from '@universal-material/data-grid';

import { button, checkbox, controls, createGrid, eventLog, select } from '../shared/controls.js';
import { makeOrders } from '../shared/data.js';

export const meta = {
  title: 'Cell ranges',
  description: 'Drag over cells to select a rectangle, \`Shift\`+click or \`Shift\`+arrows to extend it, \`Ctrl\`+click or \`Ctrl\`+drag to add another range (\`multiple\`), \`Ctrl\`+\`A\` for every cell. \`show-cell-range-summary\` shows the count, sum and average below the grid. \`selectCellRange\` selects by row index and column path, and \`getCellRangeSummary\` computes the same summary from code.',
};

export default (host: HTMLElement) => {
  const grid = createGrid(host, 380);

  grid.keyExpr = 'id';
  grid.cellSelectionMode = 'multiple';
  grid.showCellRangeSummary = true;
  grid.columns = [
    { path: 'id', label: 'Order', width: 90, dataType: 'number' },
    { path: 'customer', label: 'Customer', width: 190 },
    { path: 'product', label: 'Product', width: 150 },
    { path: 'quantity', label: 'Qty', width: 100, dataType: 'number' },
    { path: 'unitPrice', label: 'Unit price', width: 130, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
    { path: 'total', label: 'Total', width: 140, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
  ];
  grid.items = makeOrders(1_000);

  const log = eventLog(host);
  const columnName = (column: unknown) => (typeof column === 'string' ? column : (column as { path?: string }).path);

  grid.addEventListener('u-grid-cell-range-change', event => {
    const ranges = event.detail.ranges.map(range =>
      \`rows \${range.startRowIndex}–\${range.endRowIndex} × \${columnName(range.startColumn)}…\${columnName(range.endColumn)}\`);
    log.write(\`u-grid-cell-range-change  source=\${event.detail.source}  \${ranges.join(' | ') || '(cleared)'}\`);
  });

  controls(host,
    select<GridCellSelectionMode>('Cell selection', ['none', 'single', 'multiple'], 'multiple', value => (grid.cellSelectionMode = value)),
    checkbox('Summary bar', true, value => (grid.showCellRangeSummary = value)),
    button('Select rows 0–9 × Qty…Total', () => {
      grid.selectCellRange({ startRowIndex: 0, endRowIndex: 9, startColumn: 'quantity', endColumn: 'total' });
    }),
    button('Add row 20 × Total', () => {
      grid.selectCellRange({ startRowIndex: 20, endRowIndex: 20, startColumn: 'total', endColumn: 'total' }, { append: true });
    }),
    button('Compute summary', async () => {
      const { count, numericCount, sum, avg } = await grid.getCellRangeSummary();
      log.write(\`getCellRangeSummary(): count=\${count}  numbers=\${numericCount}  sum=\${sum?.toFixed(2) ?? '–'}  avg=\${avg?.toFixed(2) ?? '–'}\`);
    }),
    button('Clear ranges', () => grid.clearCellRanges()));
};
`;export{e as default};
