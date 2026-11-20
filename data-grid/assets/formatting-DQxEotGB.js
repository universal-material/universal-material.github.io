const e=`import '@universal-material/data-grid';\r
import type { GridColumnDef } from '@universal-material/data-grid';\r
\r
import { el, select } from '../shared/controls.js';\r
import { makeStocks, type Stock } from '../shared/data.js';\r
\r
export const meta = {\r
  title: 'Formatting follows the language',\r
  description: 'Each grid has its own \`language\`, and region codes work: \`en-IN\` groups digits in lakhs, \`de-CH\` uses apostrophes, \`ar-EG\` uses Arabic-Indic digits. The texts fall back to the base language (\`de-CH\` → \`de\`); a language without a built-in translation (\`hi-IN\`) shows English texts with Hindi formatting. Dates, numbers, \`Intl\` \`format\` options and summaries all use it.',\r
};\r
\r
const LOCALES = ['en-US', 'en-GB', 'en-IN', 'de-DE', 'de-CH', 'fr-FR', 'pt-BR', 'ja-JP', 'zh-CN', 'hi-IN', 'ar-EG'] as const;\r
\r
const columns: GridColumnDef<Stock>[] = [\r
  { path: 'symbol', label: 'Symbol', width: 110 },\r
  { path: 'price', label: 'Price', width: 140, dataType: 'number', format: { style: 'currency', currency: 'USD' } },\r
  { path: 'changePercent', label: 'Change', width: 120, dataType: 'number', format: { style: 'percent', minimumFractionDigits: 2 } },\r
  { path: 'volume', label: 'Volume', width: 150, dataType: 'number' },\r
  { path: 'updatedAt', label: 'Updated', width: 220, dataType: 'date', format: { dateStyle: 'medium', timeStyle: 'short' } },\r
];\r
\r
export default (host: HTMLElement) => {\r
  const stocks = makeStocks(8).map((stock, i) => ({\r
    ...stock,\r
    changePercent: (i % 2 ? -1 : 1) * (i + 1) * 0.0123,\r
    volume: stock.volume * 37,\r
    updatedAt: new Date(Date.UTC(2025, 11, 31, 14, 30)),\r
  }));\r
\r
  for (const locale of ['en-US', 'de-CH', 'en-IN'] as const) {\r
    const grid = document.createElement('u-grid');\r
\r
    grid.style.height = '230px';\r
    grid.style.marginBottom = '16px';\r
    grid.language = locale; // per grid: two grids on the same page can differ\r
    grid.keyExpr = 'symbol';\r
    grid.showGroupPanel = false;\r
    grid.columns = columns;\r
    grid.summary = { total: [{ column: 'volume', type: 'sum' }] };\r
    grid.items = stocks;\r
\r
    host.append(\r
      el('div', { className: 'demo-controls' }, select('Language', LOCALES, locale, value => {\r
        grid.language = value;\r
        grid.dir = value.startsWith('ar') ? 'rtl' : 'ltr';\r
      })),\r
      grid);\r
  }\r
};\r
`;export{e as default};
