const e=`import '@universal-material/data-grid';
import type { GridColumnDef } from '@universal-material/data-grid';

import { controls, createGrid, select } from '../shared/controls.js';
import { makeOrders, type Order } from '../shared/data.js';

export const meta = {
  title: 'Types and Intl formats',
  description: 'Numbers align at the end, booleans in the center. \`format\` takes \`Intl.NumberFormat\` / \`Intl.DateTimeFormat\` options (currency, percent, long dates). Formatting follows the grid \`language\`: switch it and every cell is reformatted.',
};

export default (host: HTMLElement) => {
  const grid = createGrid(host, 420);

  const columns: GridColumnDef<Order>[] = [
    { path: 'id', label: 'Order', width: 90 }, // inferred: number
    { path: 'customer', label: 'Customer', width: 170 }, // inferred: string
    { path: 'quantity', label: 'Qty', width: 80, dataType: 'number' },
    { path: 'unitPrice', label: 'Unit price', width: 130, format: { style: 'currency', currency: 'EUR' } },
    { path: 'total', label: 'Total', width: 150, format: { style: 'currency', currency: 'USD', currencyDisplay: 'code' } },
    // A 0..1 ratio shown as a percentage.
    { label: 'Share', width: 100, valueGetter: order => order.quantity / 20, dataType: 'number', format: { style: 'percent' } },
    { path: 'orderDate', label: 'Date', width: 130, dataType: 'date' },
    { path: 'orderDate', name: 'orderDateLong', label: 'Long date', width: 200, dataType: 'date', format: { dateStyle: 'full' } },
    { path: 'orderDate', name: 'orderTime', label: 'Date and time', width: 180, dataType: 'datetime' },
    { path: 'priority', label: 'Priority', width: 100 }, // inferred: boolean, translated "True"/"False"
  ];

  grid.keyExpr = 'id';
  grid.language = 'en';
  grid.columns = columns;
  grid.items = makeOrders(300);

  controls(host,
    select('Language', [['en', 'English'], ['de', 'Deutsch'], ['pt', 'Português'], ['ja', '日本語'], ['ar', 'العربية']], 'en', value => (grid.language = value)));
};
`;export{e as default};
