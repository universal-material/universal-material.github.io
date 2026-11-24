import"./grid-BvNhi2du.js";import{c as p,f as c,a as i,g as u}from"./controls-DiMfpvOP.js";import{m as g}from"./data-Cst3zD4w.js";const f={title:"Styling ::part",description:"The grid renders in a shadow root, so page CSS reaches its insides through `::part()`: `header-cell`, `group-row`, `group-chip`, `even`/`odd`, `row selected`, `total-row`, `pager-button`… (full list in the README). Each checkbox turns on one rule, scoped by a class on the grid; the active CSS is shown below."},n={"Header cells":`::part(header-cell) {
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 0.75rem;
}`,"Group rows":`::part(group-row) {
  background: light-dark(#eaddff, #4f378b);
  font-weight: 600;
}`,"Group chips":`::part(group-chip) {
  border-radius: 16px;
  background: light-dark(#e8def8, #4a4458);
}`,"Even rows":`::part(even) {
  background: light-dark(#f7f2fa, #25232a);
}`,"Selected rows":`::part(row selected) {
  background: light-dark(#ffd8e4, #633b48);
}`,"Totals footer":`::part(total-row) {
  font-weight: 700;
  color: light-dark(#6750a4, #d0bcff);
}`,"Pager buttons":`::part(pager-button) {
  border-radius: 50%;
}`},w=a=>{const e=p(a,440),s=c("style"),d=c("pre",{className:"demo-log",ariaLabel:"Active CSS",tabIndex:0}),r=new Set(["Header cells","Group rows","Selected rows"]);e.id="parts-demo",e.keyExpr="id",e.selectionMode="multiple",e.paging=!0,e.pageSize=10,e.columns=[{path:"country",label:"Country",width:160,groupIndex:0},{path:"customer",label:"Customer",width:200},{path:"status",label:"Status",width:130},{path:"total",label:"Total",width:150,dataType:"number",format:{style:"currency",currency:"USD"}}],e.summary={total:[{column:"total",type:"sum"}]},e.autoExpandGroups=!0,e.items=g(120),e.selectedKeys=[1,2,3,4,5,6];const l=()=>{const t=[...r].map(o=>`#parts-demo${n[o]}`).join(`

`);s.textContent=t,d.textContent=t||"/* No rule active. */"};i(a,...Object.keys(n).map(t=>u(t,r.has(t),o=>{o?r.add(t):r.delete(t),l()}))),a.append(s,d),l()};export{w as default,f as meta};
