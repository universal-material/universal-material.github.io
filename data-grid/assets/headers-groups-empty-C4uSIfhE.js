const e=`import { html } from 'lit';

import '@universal-material/data-grid';
import type { GridColumnDef } from '@universal-material/data-grid';

import { button, controls, createGrid } from '../shared/controls.js';
import { makeOrders, type Order } from '../shared/data.js';

export const meta = {
  title: 'Headers, group rows and the empty state',
  description: '\`headerRenderer(ctx)\` replaces a header label (the sort arrow and the resize handle stay; \`label\` is still used by the chooser, chips and announcements). \`groupRenderer(ctx)\` replaces the label of that column\\'s group rows — here with the inline summaries in \`ctx.summaries\`. The grid-level \`noDataRenderer(ctx)\` builds the empty state; \`ctx.filtered\` tells "no rows at all" from "the filter hides them".',
};

export default (host: HTMLElement) => {
  const orders = makeOrders(300);
  const grid = createGrid(host, 420);

  const columns: GridColumnDef<Order>[] = [
    {
      path: 'country',
      label: 'Country',
      width: 180,
      groupIndex: 0,
      groupRenderer: ({ text, itemCount, summaries }) => html\`
        <strong>\${text}</strong> · \${itemCount} orders
        \${summaries.map(summary => html\` · <span part="app-group-total">\${summary.text}</span>\`)}\`,
    },
    { path: 'customer', label: 'Customer', width: 200 },
    { path: 'product', label: 'Product', width: 160 },
    {
      path: 'total',
      label: 'Total',
      width: 160,
      dataType: 'number',
      format: { style: 'currency', currency: 'USD' },
      headerRenderer: () => html\`Total <small part="app-unit">(USD, tax incl.)</small>\`,
    },
  ];

  grid.keyExpr = 'id';
  grid.showSearchPanel = true;
  grid.columns = columns;
  grid.summary = { group: [{ column: 'total', type: 'sum', label: 'Revenue' }] };
  grid.items = orders;

  grid.noDataRenderer = ({ filtered }) => filtered
    ? html\`No orders match the search. <button @click=\${() => grid.clearFilter()}>Clear search</button>\`
    : html\`No orders yet. <button @click=\${() => (grid.items = orders)}>Load sample orders</button>\`;

  controls(host,
    button('Empty data', () => (grid.items = [])),
    button('Search for "zzz"', () => (grid.searchText = 'zzz')),
    button('Restore', () => {
      grid.items = orders;
      grid.clearFilter();
    }));
};
`;export{e as default};
