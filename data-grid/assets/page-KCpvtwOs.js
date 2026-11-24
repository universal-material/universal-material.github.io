const t=`import '@universal-material/data-grid';
import type { GridColumnDef, GridScrollContainerAxis } from '@universal-material/data-grid';

import { button, controls, select } from '../shared/controls.js';
import { leanRow, type LeanRow } from '../shared/data.js';

export const meta = {
  title: 'A long list in the page',
  description: '100,000 rows and 30 columns in the page flow: scroll the page down, and the grid sideways — it keeps the width of the page, with its own horizontal scrollbar stuck to the bottom of the window (Shift+wheel over the headers works too). The toolbar and headers stick under the site bar, the pinned **Target** row sticks below them, the totals, the **Budget** row and the scrollbar stick to the bottom of the window while the grid is in view, and the **ID** column stays at the start. Keyboard focus never stops under the stuck parts. Switch the axis to **both** for the 0.4.x behavior: the page itself scrolls sideways.',
};

const columns: GridColumnDef<LeanRow>[] = [
  { path: 'id', label: 'ID', width: 110, dataType: 'number', fixed: 'start' },
  { path: 'name', label: 'Name', width: 180 },
  { path: 'country', label: 'Country', width: 160 },
  { path: 'quantity', label: 'Quantity', width: 130, dataType: 'number' },
  { path: 'price', label: 'Price', width: 130, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
  // Wider than the page: the grid scrolls sideways inside itself. No width: 150px.
  ...Array.from({ length: 25 }, (_, n): GridColumnDef<LeanRow> => ({ path: 'quantity', label: \`Extra \${n + 1}\`, dataType: 'number' })),
];

export default (host: HTMLElement) => {
  const grid = document.createElement('u-grid');
  grid.setAttribute('scroll-container', 'window');
  grid.keyExpr = 'id';
  grid.columns = columns;
  grid.summary = { total: [{ column: 'id', type: 'count' }, { column: 'price', type: 'avg' }] };
  grid.items = Array.from({ length: 100_000 }, (_, i) => leanRow(i));
  // Rows of your own data stuck above and below the body.
  grid.fixedTopItems = [{ ...leanRow(0), id: -1, name: 'Target' }];
  grid.fixedBottomItems = [{ ...leanRow(1), id: -2, name: 'Budget' }];

  controls(host,
    select<GridScrollContainerAxis>('Sideways', [['block', 'block: the grid scrolls'], ['both', 'both: the page scrolls']], 'block', axis => {
      grid.scrollContainerAxis = axis;
    }),
    button('Focus row 50,000', () => grid.focusCell(50_000)),
    button('Back to the top', () => window.scrollTo({ top: 0 })));

  host.append(grid);

  // The site bar sticks to the page: the grid sticks right below it (the page's scroll-padding-top).
  const page = document.documentElement.style;
  const previous = page.scrollPaddingTop;
  page.scrollPaddingTop = 'var(--site-topbar-height)';

  return () => {
    page.scrollPaddingTop = previous;
  };
};
`;export{t as default};
