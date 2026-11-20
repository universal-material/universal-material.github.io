const e=`import '@universal-material/data-grid';
import { setGridTranslation, type GridI18n } from '@universal-material/data-grid';

import { checkbox, controls, createGrid, el } from '../shared/controls.js';
import { makeOrders } from '../shared/data.js';

export const meta = {
  title: 'Custom translations',
  description: '\`setGridTranslation(language, strings)\` overrides any subset of the strings of a language — or registers a new one, starting from its base language. Here a private language tag, \`en-x-acme\`, gives one grid a brand voice without touching the other grids on the page. Edit the texts: already rendered grids pick them up on their next render. Every key is listed in the \`GridI18n\` type.',
};

// A private-use tag: only grids with language="en-x-acme" use these strings.
const LANGUAGE = 'en-x-acme';

const initial: Partial<GridI18n> = {
  dragToGroup: 'Drop a column here to slice the orders by it',
  searchPlaceholder: 'Find an order…',
  noData: 'Nothing here yet — your orders will show up soon.',
};

export default (host: HTMLElement) => {
  setGridTranslation(LANGUAGE, initial); // usually once, at startup

  const orders = makeOrders(200);
  const grid = createGrid(host, 380);

  grid.language = LANGUAGE;
  grid.keyExpr = 'id';
  grid.showSearchPanel = true;
  grid.columns = [
    { path: 'customer', label: 'Customer', width: 200 },
    { path: 'country', label: 'Country', width: 160 },
    { path: 'status', label: 'Status', width: 130 },
    { path: 'total', label: 'Total', width: 150, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
  ];
  grid.items = orders;

  const textField = (key: 'dragToGroup' | 'searchPlaceholder' | 'noData') => {
    const input = el('input', { value: initial[key]!, size: 36 });

    input.addEventListener('input', () => {
      setGridTranslation(LANGUAGE, { [key]: input.value });
      grid.requestUpdate(); // re-render now with the new strings
    });

    return el('label', {}, \`\${key} \`, input);
  };

  controls(host,
    textField('dragToGroup'),
    textField('searchPlaceholder'),
    textField('noData'),
    checkbox('No rows', false, empty => (grid.items = empty ? [] : orders)));
};
`;export{e as default};
