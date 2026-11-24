const e=`import '@universal-material/data-grid';
import { createXlsxExporter, downloadXlsx } from '@universal-material/data-grid/export-xlsx';

import { button, controls, createGrid, el, eventLog } from '../shared/controls.js';
import { makeOrders } from '../shared/data.js';

export const meta = {
  title: 'Excel and the Export button',
  description: '\`export-formats="csv xlsx"\` adds an **Export** button to the toolbar (with "Export selected rows" entries when rows can be selected). Excel goes through the optional \`export-xlsx\` entry point: a WebAssembly engine writes the file in a Web Worker, with no dependency of yours. Bands become header rows above the column labels (each label merged across its columns), the header is frozen and repeats on printed pages, groups become the row outline of Excel, and numbers and dates are typed cells. \`createXlsxExporter\` gives the toolbar its **Export to Excel** entry (it becomes **Cancel export** while running); \`downloadXlsx\` takes the sheet name, \`dateFormat\`, \`customizeCell\` and \`onProgress\`; \`dateFormat: "reader"\` writes dates with the Excel built-in formats, shown in the regional settings of whoever opens the file.',
};

export default (host: HTMLElement) => {
  const grid = createGrid(host, 380);

  grid.keyExpr = 'id';
  grid.selectionMode = 'multiple';
  grid.showCheckboxes = true;
  grid.exportFormats = ['csv', 'xlsx'];
  grid.setAttribute('aria-label', 'Orders');
  grid.csvExportOptions = { fileName: 'orders.csv' };
  grid.columns = [
    { path: 'category', label: 'Category', width: 150, groupIndex: 0 },
    { path: 'id', label: 'Order', width: 90, dataType: 'number' },
    {
      label: 'Customer',
      alignment: 'center',
      columns: [
        { path: 'customer', label: 'Name', width: 190 },
        { path: 'country', label: 'Country', width: 150 },
      ],
    },
    { path: 'orderDate', label: 'Date', width: 140, dataType: 'date' },
    { path: 'priority', label: 'Priority', width: 110, dataType: 'boolean' },
    { path: 'total', label: 'Total', width: 140, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
  ];
  grid.summary = { group: [{ column: 'total', type: 'sum' }], total: [{ column: 'total', type: 'sum' }] };
  grid.items = makeOrders(300);

  // The toolbar's Excel entry (the grid passes selectedOnly, the cancel signal and onProgress).
  grid.xlsxExporter = createXlsxExporter({ fileName: 'orders.xlsx' });

  const log = eventLog(host);
  // progress text, read when the user looks for it (not a live region: it changes every 250 ms)
  const progress = el('span', { className: 'demo-stat' });
  const controller = new AbortController();

  grid.addEventListener('u-grid-exporting', event => log.write(\`u-grid-exporting  \${event.detail.format}\${event.detail.selectedOnly ? ' (selected rows)' : ''}\`));
  grid.addEventListener('u-grid-export', event => log.write(\`u-grid-export  \${event.detail.format} done\`));
  grid.addEventListener('u-grid-export-error', event => log.write(\`u-grid-export-error  \${String(event.detail.error)}\`));

  const download = button('Download styled .xlsx', async () => {
    download.disabled = true;

    try {
      await downloadXlsx(grid, {
        fileName: 'orders-styled.xlsx',
        sheetName: 'Orders by category',
        // built-in date format 14: Excel shows the dates in the reader's regional settings
        dateFormat: 'reader',
        signal: controller.signal,
        onProgress: ({ rowCount, totalCount }) => progress.textContent = \`Excel export: \${rowCount} of \${totalCount} rows\`,
        customizeCell: cell => {
          // a priority order: bold and a tinted background, with the state already in the text ("Yes")
          if (cell.rowType === 'data' && cell.column?.column.path === 'priority' && cell.value === true) {
            cell.text = 'Yes (priority)';
            cell.style = { ...cell.style, bold: true, backgroundColor: '#fff3cd' };
          }

          if (cell.rowType === 'header' && cell.headerRow === 0) {
            cell.style = { ...cell.style, color: '#0d47a1' };   // contrast checked against the background
          }
        },
      });
      log.write('downloadXlsx() done');
    } catch (error) {
      log.write(\`downloadXlsx() failed: \${String(error)}\`);
    } finally {
      download.disabled = false;
    }
  });

  controls(host, download, progress);

  // leaving the page cancels a running export
  return () => controller.abort();
};
`;export{e as default};
