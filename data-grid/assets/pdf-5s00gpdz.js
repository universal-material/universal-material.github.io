const e=`import '@universal-material/data-grid';
import { createPdfExporter, downloadPdf, type GridPdfFont, type GridPdfLayout, type GridPdfPaperSize } from '@universal-material/data-grid/export-pdf';

import { button, controls, createGrid, el, eventLog, select } from '../shared/controls.js';
import { makeOrders } from '../shared/data.js';

import notoSans from '../shared/fonts/NotoSans-Regular.subset.ttf?url';
import notoSansBold from '../shared/fonts/NotoSans-Bold.subset.ttf?url';
import notoSansArabic from '../shared/fonts/NotoSansArabic-Regular.subset.ttf?url';

export const meta = {
  title: 'PDF',
  description: 'The optional \`export-pdf\` entry point writes an **accessible, tagged PDF** (table structure with header cells, reading order, language, title, embedded fonts) of what the user sees, in a WebAssembly engine running in Web Workers: the page stays responsive even with a million rows. **Fonts are yours** — browsers do not expose installed font files, and an accessible PDF embeds its fonts — so pass TrueType/OpenType files in fallback order (this demo uses Noto subsets, Latin and Arabic). \`createPdfExporter\` gives the toolbar its **Export to PDF** entry (it becomes **Cancel export** while running); \`downloadPdf\` takes the layout (\`table\`, \`sections\` with bookmarks per group, \`list\`), the paper, \`customizeCell\` and \`onProgress\`.',
};

// URLs (or ArrayBuffers) of your font files; the first font that has a character draws it.
const fonts: GridPdfFont[] = [
  { source: notoSans },
  { source: notoSansBold, weight: 'bold' },
  { source: notoSansArabic },
];

export default (host: HTMLElement) => {
  const grid = createGrid(host, 380);

  grid.keyExpr = 'id';
  grid.selectionMode = 'multiple';
  grid.showCheckboxes = true;
  grid.exportFormats = ['csv', 'pdf'];
  grid.setAttribute('aria-label', 'Orders');
  grid.columns = [
    { path: 'category', label: 'Category', width: 150, groupIndex: 0 },
    { path: 'id', label: 'Order', width: 90, dataType: 'number' },
    { path: 'customer', label: 'Customer', width: 190 },
    { path: 'country', label: 'Country', width: 150, hidingPriority: 1 },
    { path: 'orderDate', label: 'Date', width: 140, dataType: 'date' },
    { path: 'status', label: 'Status', width: 120 },
    { path: 'total', label: 'Total', width: 140, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
  ];
  grid.summary = { group: [{ column: 'total', type: 'sum' }], total: [{ column: 'total', type: 'sum' }] };
  grid.items = makeOrders(2000).map((order, i) => i % 9 === 0 ? { ...order, customer: \`\${order.customer} (عميل)\` } : order);

  // The toolbar's PDF entry (the grid passes selectedOnly, the cancel signal and onProgress).
  grid.pdfExporter = createPdfExporter({ fonts, fileName: 'orders.pdf', title: 'Orders' });

  const log = eventLog(host);
  // progress text, read when the user looks for it (not a live region: it changes every 250 ms)
  const progress = el('span', { className: 'demo-stat' });
  const controller = new AbortController();
  let layout: GridPdfLayout = 'table';
  let paperSize: GridPdfPaperSize = 'auto';

  grid.addEventListener('u-grid-export', event => log.write(\`u-grid-export  \${event.detail.format} done\`));
  grid.addEventListener('u-grid-export-error', event => log.write(\`u-grid-export-error  \${String(event.detail.error)}\`));

  const download = button('Download styled PDF', async () => {
    const start = performance.now();
    download.disabled = true;

    try {
      await downloadPdf(grid, {
        fonts,
        layout,
        paperSize,
        fileName: 'orders-styled.pdf',
        title: 'Orders by category',
        signal: controller.signal,
        onProgress: ({ rowCount, totalCount, pageCount }) => progress.textContent = \`PDF export: \${rowCount} of \${totalCount} rows, \${pageCount} pages\`,
        customizeCell: cell => {
          // contrast is checked: a color below 4.5:1 with the background falls back to the default
          if (cell.rowType === 'data' && cell.column?.column.path === 'status' && cell.value === 'Cancelled') {
            cell.style = { ...cell.style, bold: true, color: '#b00020' };
          }
        },
      });
      log.write(\`downloadPdf() done in \${Math.round(performance.now() - start)} ms\`);
    } catch (error) {
      // GridPdfMissingGlyphError (no font for a character), AbortError when leaving the page…
      log.write(\`downloadPdf() failed: \${String(error)}\`);
    } finally {
      download.disabled = false;
    }
  });

  controls(host,
    select('Layout', ['table', 'sections', 'list'], layout, value => layout = value),
    select('Paper', ['auto', 'a4', 'letter', 'legal', 'a3'], paperSize, value => paperSize = value),
    download,
    progress);

  // leaving the page cancels a running export
  return () => controller.abort();
};
`;export{e as default};
