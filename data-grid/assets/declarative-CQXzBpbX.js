import{B as r,x as e}from"./grid-CXMMhqeK.js";import{m as i}from"./data-Cst3zD4w.js";const a={title:"Declarative columns",description:"Columns can also be `<u-grid-column>` children: the label is the text content and the options are attributes (`path`, `width`, `type`, `group-index`, `alignment`…). `items` is always a property. Here the grid starts grouped by country with `auto-expand-groups`."},n=t=>(r(e`
    <u-grid style="height: 420px" auto-expand-groups key-expr="id" .items=${i(300)}>
      <u-grid-column path="country" group-index="0" width="180">Country</u-grid-column>
      <u-grid-column path="customer" width="200">Customer</u-grid-column>
      <u-grid-column path="category" width="140">Category</u-grid-column>
      <u-grid-column path="quantity" type="number" width="120">Qty</u-grid-column>
      <u-grid-column path="orderDate" type="date" width="140">Date</u-grid-column>
      <u-grid-column path="priority" type="boolean" boolean-display="icon" width="110">Priority</u-grid-column>
    </u-grid>
  `,t),()=>r(null,t));export{n as default,a as meta};
