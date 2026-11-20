const e=`import '@universal-material/data-grid';

import { controls, createGrid, select } from '../shared/controls.js';
import { makeOrders } from '../shared/data.js';

export const meta = {
  title: 'Built-in languages and RTL',
  description: 'Switch \`language\` to translate the group panel hint, the search box, the filter row, the pager, the summaries, the menus (right-click a header) and every screen reader announcement — and to format the dates and currency. Arabic also sets \`dir="rtl"\` on the grid: the columns, the keyboard arrows and the drag-and-drop are mirrored.',
};

const LANGUAGES = [
  ['en', 'English'], ['es', 'Español'], ['pt', 'Português'], ['fr', 'Français'], ['de', 'Deutsch'],
  ['it', 'Italiano'], ['nl', 'Nederlands'], ['ru', 'Русский'], ['pl', 'Polski'], ['tr', 'Türkçe'],
  ['ja', '日本語'], ['ko', '한국어'], ['zh', '中文'], ['ar', 'العربية'],
] as const;

export default (host: HTMLElement) => {
  const grid = createGrid(host, 480);

  grid.language = 'en';
  grid.keyExpr = 'id';
  grid.showSearchPanel = true;
  grid.showFilterRow = true;
  grid.headerFilter = true;
  grid.columnChooser = true;
  grid.paging = true;
  grid.columns = [
    { path: 'customer', label: 'Customer', width: 200 },
    { path: 'country', label: 'Country', width: 160 },
    { path: 'orderDate', label: 'Date', width: 150, dataType: 'date' },
    { path: 'priority', label: 'Priority', width: 120, dataType: 'boolean' },
    { path: 'total', label: 'Total', width: 160, dataType: 'number', format: { style: 'currency', currency: 'EUR' } },
  ];
  grid.summary = { total: [{ column: 'customer', type: 'count' }, { column: 'total', type: 'sum' }] };
  grid.items = makeOrders(500);

  controls(host,
    select('Language', LANGUAGES, 'en', language => {
      grid.language = language;
      grid.dir = language === 'ar' ? 'rtl' : 'ltr'; // the direction comes from CSS \`direction\`, not from the language
    }));
};
`;export{e as default};
