const e=`import '@universal-material/data-grid';
import type { GridExportData } from '@universal-material/data-grid';

import { button, checkbox, controls, createGrid, el } from '../shared/controls.js';
import { makeOrders } from '../shared/data.js';

export const meta = {
  title: 'Export data for any format',
  description: '\`getExportData(options)\` resolves to the columns and rows the user sees — data rows with \`values\` and formatted \`texts\`, group rows with their label, group footers and totals with their summaries — ready for a PDF library, a report or your own file format. Sort, filter (filter row) or regroup and the preview below — a plain table, or the JSON, built from that data — follows.',
};

const MAX_ROWS = 40;

// Builds a preview table with text nodes only (never innerHTML with data).
const renderTable = ({ columns, rows }: GridExportData) => {
  const table = el('table');
  table.style.cssText = 'border-spacing: 12px 2px; white-space: pre; text-align: start';
  table.append(el('thead', {}, el('tr', {}, el('th', {}, 'rowType'), ...columns.map(column => el('th', {}, column.label)))));

  const body = el('tbody');

  for (const row of rows.slice(0, MAX_ROWS)) {
    const indent = '  '.repeat(row.level);
    const cells = row.rowType === 'group'
      ? [\`\${indent}\${row.label}\`, ...row.texts.slice(1)]
      : row.texts.map((text, i) => (i === 0 ? \`\${indent}\${text}\` : text));

    body.append(el('tr', {}, el('td', {}, row.rowType), ...cells.map(text => el('td', {}, text))));
  }

  table.append(body);
  return table;
};

export default (host: HTMLElement) => {
  const grid = createGrid(host, 340);

  grid.keyExpr = 'id';
  grid.showFilterRow = true;
  grid.columns = [
    { path: 'country', label: 'Country', width: 160, groupIndex: 0 },
    { path: 'customer', label: 'Customer', width: 190 },
    { path: 'product', label: 'Product', width: 150 },
    { path: 'quantity', label: 'Qty', width: 100, dataType: 'number' },
    { path: 'total', label: 'Total', width: 140, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
  ];
  grid.summary = { group: [{ column: 'total', type: 'sum', display: 'footer' }], total: [{ column: 'total', type: 'sum' }] };
  grid.items = makeOrders(60);

  const preview = el('div', { className: 'demo-log', ariaLabel: 'Export preview', role: 'region', tabIndex: 0 });
  preview.style.height = '260px';
  host.append(preview);

  let asJson = false;

  const build = async () => {
    await grid.updateComplete;
    const data = await grid.getExportData();

    if (asJson) {
      // \`item\` and \`column\` are your own objects; keep only what a file needs
      const json = data.rows.slice(0, MAX_ROWS).map(row => row.rowType === 'data'
        ? { rowType: row.rowType, level: row.level, values: row.values }
        : { rowType: row.rowType, level: row.level, texts: row.texts });
      preview.replaceChildren(el('div', {}, JSON.stringify({ columns: data.columns.map(column => column.label), rows: json }, null, 2)));
    } else {
      preview.replaceChildren(renderTable(data));
    }

    preview.append(el('p', {}, \`\${data.rows.length} rows\${data.rows.length > MAX_ROWS ? \` (first \${MAX_ROWS} shown)\` : ''}.\`));
  };

  controls(host,
    checkbox('As JSON', false, value => {
      asJson = value;
      void build();
    }),
    button('Build preview', () => void build()));

  // Rebuild when the view changes.
  for (const type of ['u-grid-sort-change', 'u-grid-filter-change', 'u-grid-group-change'] as const) {
    grid.addEventListener(type, () => void build());
  }

  void build();
};
`;export{e as default};
