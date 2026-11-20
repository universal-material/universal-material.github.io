const t=`import { html, render } from 'lit';

import '@universal-material/data-grid';

import { makeOrders } from '../shared/data.js';

export const meta = {
  title: 'Declarative columns',
  description: 'Columns can also be \`<u-grid-column>\` children: the label is the text content and the options are attributes (\`path\`, \`width\`, \`type\`, \`group-index\`, \`alignment\`…). \`items\` is always a property. Here the grid starts grouped by country with \`auto-expand-groups\`.',
};

export default (host: HTMLElement) => {
  // Any templating works — plain HTML, Lit, React, Vue, Angular… Lit is used here.
  render(html\`
    <u-grid style="height: 420px" auto-expand-groups key-expr="id" .items=\${makeOrders(300)}>
      <u-grid-column path="country" group-index="0" width="180">Country</u-grid-column>
      <u-grid-column path="customer" width="200">Customer</u-grid-column>
      <u-grid-column path="category" width="140">Category</u-grid-column>
      <u-grid-column path="quantity" type="number" width="120">Qty</u-grid-column>
      <u-grid-column path="orderDate" type="date" width="140">Date</u-grid-column>
      <u-grid-column path="priority" type="boolean" boolean-display="icon" width="110">Priority</u-grid-column>
    </u-grid>
  \`, host);

  return () => render(null, host);
};
`;export{t as default};
