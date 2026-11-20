const e=`import '@universal-material/data-grid';

import { button, controls, createGrid, el } from '../shared/controls.js';
import { makeOrders } from '../shared/data.js';

export const meta = {
  title: 'Custom properties, live',
  description: 'Each control sets one \`--u-grid-*\` custom property on this grid with \`grid.style.setProperty()\`; the CSS you would write is shown below. Set \`--u-grid-background-color\` and \`--u-grid-color\` together: grid lines and the hover tint derive from the text color. Select a few rows (click, \`Shift\`+click) and tab into the grid to see the selection and focus colors.',
};

interface Control {
  property: string;
  type: 'color' | 'range';
  label: string;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  value: string;
}

const CONTROLS: Control[] = [
  { property: '--u-grid-background-color', type: 'color', label: 'Background', value: '#fffbfe' },
  { property: '--u-grid-color', type: 'color', label: 'Text', value: '#1c1b1f' },
  { property: '--u-grid-header-background-color', type: 'color', label: 'Header', value: '#f3edf7' },
  { property: '--u-grid-striped-background-color', type: 'color', label: 'Stripes', value: '#f7f2fa' },
  { property: '--u-grid-selected-row-background-color', type: 'color', label: 'Selected row', value: '#e8def8' },
  { property: '--u-grid-focus-ring-color', type: 'color', label: 'Focus ring', value: '#6750a4' },
  { property: '--u-grid-cell-font-size', type: 'range', label: 'Font size', min: 0.75, max: 1, step: 0.0625, unit: 'rem', value: '0.875' },
  { property: '--u-grid-cell-inline-padding', type: 'range', label: 'Cell padding', min: 4, max: 32, step: 2, unit: 'px', value: '16' },
  { property: '--u-grid-header-cell-height', type: 'range', label: 'Header height', min: 32, max: 64, step: 2, unit: 'px', value: '46' },
  { property: '--u-grid-line-opacity', type: 'range', label: 'Divider opacity', min: 0, max: 60, step: 5, unit: '%', value: '20' },
  { property: '--u-grid-selected-row-indicator-width', type: 'range', label: 'Selection bar', min: 0, max: 8, step: 1, unit: 'px', value: '3' },
];

export default (host: HTMLElement) => {
  const grid = createGrid(host, 380);

  grid.keyExpr = 'id';
  grid.striped = true;
  grid.showColumnLines = true;
  grid.selectionMode = 'multiple';
  grid.columns = [
    { path: 'customer', label: 'Customer', width: 200 },
    { path: 'country', label: 'Country', width: 160 },
    { path: 'status', label: 'Status', width: 130 },
    { path: 'total', label: 'Total', width: 150, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
  ];
  grid.items = makeOrders(300);
  grid.selectedKeys = [2, 3];

  const css = el('pre', { className: 'demo-log', ariaLabel: 'Generated CSS', tabIndex: 0 });
  const changed = new Map<string, string>();
  const showCss = () => {
    css.textContent = changed.size
      ? \`u-grid {\\n\${[...changed].map(([property, value]) => \`  \${property}: \${value};\`).join('\\n')}\\n}\`
      : '/* Change a control above to override the defaults. */';
  };

  const inputs = CONTROLS.map(control => {
    const input = el('input', { type: control.type, value: control.value });

    if (control.type === 'range') {
      Object.assign(input, { min: String(control.min), max: String(control.max), step: String(control.step) });
    }

    input.addEventListener('input', () => {
      const value = \`\${input.value}\${control.unit ?? ''}\`;
      grid.style.setProperty(control.property, value);
      changed.set(control.property, value);
      showCss();
    });

    return { control, input };
  });

  controls(host,
    ...inputs.map(({ control, input }) => el('label', {}, control.label, input)),
    button('Reset', () => {
      for (const { control, input } of inputs) {
        grid.style.removeProperty(control.property);
        input.value = control.value;
      }

      changed.clear();
      showCss();
    }));

  host.append(css);
  showCss();
};
`;export{e as default};
