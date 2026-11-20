const e=`import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

import '@universal-material/data-grid';
import type { GridColumnDef } from '@universal-material/data-grid';

import { makeOrders, type Order } from '../shared/data.js';

export const meta = {
  title: 'Cell renderers',
  description: 'A column \`renderer(item, ctx)\` returns the cell content: avatars with initials, status badges, a progress bar and a link are Lit templates styled through their \`part\` names; the **Priority** cell returns an \`HTMLElement\`, which lives in the light DOM, so a plain page class styles it. \`ctx.text\` is what the cell would show without the renderer.',
};

const initials = (name: string) => name.split(' ').map(word => word[0]).join('').slice(0, 2);

const columns: GridColumnDef<Order>[] = [
  {
    path: 'customer',
    label: 'Customer',
    width: 220,
    renderer: order => html\`
      <span part="app-person">
        <span part="app-avatar app-avatar-\${order.id % 4}" aria-hidden="true">\${initials(order.customer)}</span>
        \${order.customer}
      </span>\`,
  },
  {
    path: 'status',
    label: 'Status',
    width: 140,
    renderer: order => html\`<span part="app-badge app-badge-\${order.status.toLowerCase()}">\${order.status}</span>\`,
  },
  {
    path: 'quantity',
    label: 'Fulfilled',
    width: 160,
    dataType: 'number',
    renderer: (order, { text }) => html\`
      <span part="app-progress" title="\${text} of 20 units">
        <span part="app-progress-bar" style=\${styleMap({ width: \`\${(order.quantity / 20) * 100}%\` })}></span>
      </span>\`,
  },
  {
    path: 'product',
    label: 'Product',
    width: 160,
    renderer: order => html\`
      <a href="https://en.wikipedia.org/wiki/Special:Search?search=\${encodeURIComponent(order.product)}" target="_blank" rel="noopener">\${order.product}</a>\`,
  },
  {
    path: 'priority',
    label: 'Priority',
    width: 120,
    dataType: 'boolean',
    // An HTMLElement result: rendered in the light DOM, so page CSS (.priority-flag) applies.
    renderer: order => {
      if (!order.priority) {
        return null;
      }

      const flag = document.createElement('span');
      flag.className = 'priority-flag';
      flag.textContent = 'Urgent';
      return flag;
    },
  },
  { path: 'total', label: 'Total', width: 140, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
];

// The parts above are styled from outside the grid; a <style> scoped to this grid's class.
const css = \`
  .renderers-demo::part(app-person) { display: inline-flex; align-items: center; gap: 10px; }
  .renderers-demo::part(app-avatar) {
    display: inline-grid; place-items: center; inline-size: 28px; block-size: 28px; border-radius: 50%;
    font-size: 0.75rem; font-weight: 600; color: #fff;
  }
  .renderers-demo::part(app-avatar-0) { background: #6750a4; }
  .renderers-demo::part(app-avatar-1) { background: #00696d; }
  .renderers-demo::part(app-avatar-2) { background: #9a4521; }
  .renderers-demo::part(app-avatar-3) { background: #39608f; }
  .renderers-demo::part(app-badge) {
    padding: 2px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: 600;
    background: light-dark(#e7e0ec, #49454f);
  }
  .renderers-demo::part(app-badge-paid),
  .renderers-demo::part(app-badge-delivered) { background: light-dark(#c4eed0, #0f5223); color: light-dark(#0f5223, #c4eed0); }
  .renderers-demo::part(app-badge-shipped) { background: light-dark(#d3e3fd, #0b3a7a); color: light-dark(#0b3a7a, #d3e3fd); }
  .renderers-demo::part(app-badge-cancelled) { background: light-dark(#ffdad6, #8c1d18); color: light-dark(#8c1d18, #ffdad6); }
  .renderers-demo::part(app-progress) {
    display: block; block-size: 6px; border-radius: 3px; overflow: hidden; background: light-dark(#e7e0ec, #49454f);
  }
  .renderers-demo::part(app-progress-bar) { display: block; block-size: 100%; background: #6750a4; }
  .priority-flag { color: light-dark(#b3261e, #f2b8b5); font-weight: 600; }
\`;

export default (host: HTMLElement) => {
  const grid = document.createElement('u-grid');

  grid.className = 'renderers-demo';
  grid.style.height = '420px';
  grid.keyExpr = 'id';
  grid.columns = columns;
  grid.items = makeOrders(500);

  const style = document.createElement('style');
  style.textContent = css;

  host.append(style, grid);
};
`;export{e as default};
