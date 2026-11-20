const e=`import '@universal-material/data-grid';

import { controls, createGrid, el, select } from '../shared/controls.js';
import { makeOrders } from '../shared/data.js';

export const meta = {
  title: 'Preset themes',
  description: 'A theme is a handful of custom properties plus a few appearance properties (\`rowHeight\`, \`striped\`, \`showColumnLines\`). **Material** is the default; **Material dark** keeps a dark grid on any page; **Bootstrap-like**, **Fluent-like** and **Classic** evoke familiar looks; **Compact** is for dense screens and **High contrast** maximizes legibility. Every theme uses only the grid\\'s own \`--u-grid-*\` properties (and the \`--u-color-*\` tokens it falls back to), and \`light-dark()\` keeps the light ones readable on a dark page. The code below each choice is all it takes.',
};

interface Theme {
  css: Record<string, string>;
  rowHeight: number;
  striped: boolean;
  showColumnLines: boolean;
}

const THEMES: Record<string, Theme> = {
  Material: { css: {}, rowHeight: 48, striped: false, showColumnLines: false },
  'Material dark': {
    rowHeight: 48,
    striped: false,
    showColumnLines: false,
    css: {
      'color-scheme': 'dark', // native controls and light-dark() inside the grid go dark too
      '--u-grid-background-color': '#1c1b22',
      '--u-grid-color': '#e7e1ec', // always together with the background
      '--u-grid-header-background-color': '#24232b',
      '--u-grid-summary-background-color': '#24232b',
      '--u-grid-selected-row-background-color': 'rgb(196 182 255 / 0.16)',
      '--u-color-primary': '#c4b6ff',
      '--u-color-on-primary': '#2f1f6b',
      '--u-color-on-surface': '#e7e1ec',
      '--u-color-on-surface-variant': '#cbc4d2',
      '--u-color-outline': '#958f9c',
      '--u-color-surface-container': '#2a2931',
      '--u-color-surface-container-high': '#33323a',
    },
  },
  'Bootstrap-like': {
    // Bootstrap's "bordered striped table": row AND column dividers, neutral grays in dark mode.
    rowHeight: 40,
    striped: true,
    showColumnLines: true,
    css: {
      '--u-grid-background-color': 'light-dark(#ffffff, #212529)',
      '--u-grid-color': 'light-dark(#212529, #dee2e6)',
      '--u-grid-header-background-color': 'light-dark(#f8f9fa, #2b3035)',
      '--u-grid-summary-background-color': 'light-dark(#f8f9fa, #2b3035)',
      '--u-grid-header-cell-font-weight': '700',
      '--u-grid-cell-padding': '8px 12px',
      '--u-grid-header-cell-padding': '8px 12px',
      '--u-grid-header-cell-height': '42px',
      '--u-grid-filter-row-height': '40px',
      '--u-grid-cell-font-size': '0.9375rem',
      '--u-grid-line-opacity': '18%', // ≈ #dee2e6 on white, #495057 on #212529
      '--u-grid-striped-background-color': 'light-dark(rgb(0 0 0 / 0.05), rgb(255 255 255 / 0.05))',
      '--u-grid-row-hover-opacity': '7.5%',
      '--u-grid-selected-row-background-color': 'light-dark(#cfe2ff, #0b2c5a)',
      '--u-grid-selected-row-indicator-width': '0', // the checkbox column shows the selection
      '--u-grid-group-chip-shape': '6px',
      '--u-grid-group-toggle-shape': '6px',
      '--u-grid-menu-shape': '6px',
      '--u-grid-header-filter-shape': '6px',
      '--u-grid-column-chooser-shape': '6px',
      '--u-color-primary': 'light-dark(#0d6efd, #6ea8fe)',
      '--u-color-on-primary': 'light-dark(#ffffff, #031633)',
      '--u-color-outline': 'light-dark(#6c757d, #8f979f)',
      '--u-color-on-surface': 'light-dark(#212529, #dee2e6)',
      '--u-color-on-surface-variant': 'light-dark(#495057, #adb5bd)',
      '--u-color-surface-container': 'light-dark(#ffffff, #2b3035)',
      '--u-color-surface-container-high': 'light-dark(#f8f9fa, #343a40)',
    },
  },
  'Fluent-like': {
    rowHeight: 40,
    striped: false,
    showColumnLines: false,
    css: {
      'font-family': '"Segoe UI Variable Text", "Segoe UI", system-ui, -apple-system, sans-serif',
      '--u-grid-background-color': 'light-dark(#ffffff, #262626)',
      '--u-grid-color': 'light-dark(#1e1e1e, #f3f3f3)',
      '--u-grid-header-cell-font-weight': '600',
      '--u-grid-cell-inline-padding': '12px',
      '--u-grid-line-opacity': '12%',
      '--u-grid-row-hover-opacity': '5%',
      '--u-grid-selected-row-background-color': 'light-dark(#ececec, #3a3a3a)',
      '--u-grid-selected-row-indicator-width': '2px',
      '--u-grid-selected-row-indicator-color': 'light-dark(#1764c0, #5ea6f2)',
      '--u-grid-focus-ring-color': 'light-dark(#1e1e1e, #ffffff)',
      '--u-grid-sorted-header-color': 'light-dark(#1764c0, #5ea6f2)',
      '--u-grid-group-chip-shape': '4px',
      '--u-grid-group-toggle-shape': '4px',
      '--u-grid-menu-shape': '8px',
      '--u-grid-header-filter-shape': '8px',
      '--u-grid-column-chooser-shape': '8px',
      '--u-color-primary': 'light-dark(#1764c0, #5ea6f2)',
      '--u-color-on-primary': 'light-dark(#ffffff, #0a2240)',
      '--u-color-on-surface': 'light-dark(#1e1e1e, #f3f3f3)',
      '--u-color-surface-container': 'light-dark(#ffffff, #2e2e2e)',
    },
  },
  Classic: {
    rowHeight: 36,
    striped: false,
    showColumnLines: true,
    css: {
      '--u-grid-background-color': 'light-dark(#ffffff, #2a2a2a)',
      '--u-grid-color': 'light-dark(#333333, #e6e6e6)',
      '--u-grid-header-background-color': 'light-dark(#f4f4f4, #353535)',
      '--u-grid-summary-background-color': 'light-dark(#f4f4f4, #353535)',
      '--u-grid-cell-padding': '7px 10px',
      '--u-grid-header-cell-padding': '7px 10px',
      '--u-grid-header-cell-height': '36px',
      '--u-grid-cell-font-size': '0.8125rem',
      '--u-grid-line-opacity': '22%',
      '--u-grid-toolbar-height': '48px',
      '--u-grid-selected-row-background-color': 'light-dark(#e2edf9, #2d4058)',
      '--u-grid-selected-row-indicator-width': '0', // the checkbox column shows the selection
      '--u-grid-group-chip-shape': '2px',
      '--u-grid-group-chip-height': '28px',
      '--u-grid-group-toggle-shape': '2px',
      '--u-grid-menu-shape': '2px',
      '--u-grid-header-filter-shape': '2px',
      '--u-grid-column-chooser-shape': '2px',
      '--u-color-primary': 'light-dark(#2f74b5, #6aa8e0)',
      '--u-color-on-primary': 'light-dark(#ffffff, #0c2238)',
      '--u-color-on-surface': 'light-dark(#333333, #e6e6e6)',
      '--u-color-surface-container': 'light-dark(#ffffff, #353535)',
    },
  },
  Compact: {
    rowHeight: 30,
    striped: true,
    showColumnLines: false,
    css: {
      '--u-grid-cell-block-padding': '4px',
      '--u-grid-cell-inline-padding': '10px',
      '--u-grid-cell-font-size': '0.8125rem',
      '--u-grid-header-cell-height': '34px',
      '--u-grid-filter-row-height': '36px',
      '--u-grid-toolbar-height': '44px',
      '--u-grid-group-chip-height': '26px',
      '--u-grid-group-chip-padding': '10px',
    },
  },
  'High contrast': {
    rowHeight: 44,
    striped: false,
    showColumnLines: true,
    css: {
      '--u-grid-background-color': 'light-dark(#ffffff, #000000)',
      '--u-grid-color': 'light-dark(#000000, #ffffff)',
      '--u-grid-header-cell-font-weight': '700',
      '--u-grid-cell-font-weight': '500',
      '--u-grid-line-opacity': '100%',
      '--u-grid-row-hover-opacity': '14%',
      '--u-grid-selected-row-background-color': 'light-dark(#d7e3ff, #002a5c)',
      '--u-grid-selected-row-indicator-width': '6px',
      '--u-grid-selected-row-indicator-color': 'light-dark(#0030b8, #ffd60a)',
      '--u-grid-focus-ring-color': 'light-dark(#0030b8, #ffd60a)',
      '--u-grid-focus-ring-width': '3px',
      '--u-grid-sorted-header-color': 'light-dark(#0030b8, #ffd60a)',
      '--u-grid-search-highlight-background-color': '#ffe14d',
      '--u-grid-search-highlight-color': '#000000',
      '--u-grid-group-chip-outline-width': '2px',
      '--u-color-primary': 'light-dark(#0030b8, #ffd60a)',
      '--u-color-on-primary': 'light-dark(#ffffff, #000000)',
      '--u-color-on-surface': 'light-dark(#000000, #ffffff)',
      '--u-color-on-surface-variant': 'light-dark(#000000, #ffffff)',
      '--u-color-outline': 'light-dark(#000000, #ffffff)',
      '--u-color-surface-container': 'light-dark(#ffffff, #000000)',
      '--u-color-surface-container-high': 'light-dark(#ffffff, #000000)',
    },
  },
};

export default (host: HTMLElement) => {
  const grid = createGrid(host, 460);

  grid.keyExpr = 'id';
  grid.selectionMode = 'multiple';
  grid.showCheckboxes = true;
  grid.showFilterRow = true;
  grid.columns = [
    { path: 'country', label: 'Country', width: 160, groupIndex: 0 },
    { path: 'customer', label: 'Customer', width: 200 },
    { path: 'product', label: 'Product', width: 150 },
    { path: 'quantity', label: 'Qty', width: 90, dataType: 'number' },
    { path: 'total', label: 'Total', width: 150, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
  ];
  grid.summary = { total: [{ column: 'total', type: 'sum' }] };
  grid.autoExpandGroups = true;
  grid.items = makeOrders(200);

  const code = el('pre', { className: 'demo-log', ariaLabel: 'Theme code', tabIndex: 0 });

  const apply = (name: string) => {
    const theme = THEMES[name]!;

    grid.removeAttribute('style'); // drop the previous theme…
    grid.style.height = '460px'; // …but keep the height

    for (const [property, value] of Object.entries(theme.css)) {
      grid.style.setProperty(property, value);
    }

    grid.rowHeight = theme.rowHeight;
    grid.striped = theme.striped;
    grid.showColumnLines = theme.showColumnLines;

    const declarations = Object.entries(theme.css).map(([property, value]) => \`  \${property}: \${value};\`);
    const attributes = [\`row-height="\${theme.rowHeight}"\`, theme.striped && 'striped', theme.showColumnLines && 'show-column-lines'].filter(Boolean);

    code.textContent = \`u-grid {\\n\${declarations.join('\\n') || '  /* the defaults */'}\\n}\\n\\n<u-grid \${attributes.join(' ')}></u-grid>\`;
  };

  controls(host, select('Theme', Object.keys(THEMES), 'Material', apply));
  host.append(code);
  apply('Material');
};
`;export{e as default};
