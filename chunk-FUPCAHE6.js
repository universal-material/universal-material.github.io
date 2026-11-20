import{a as h}from"./chunk-ZQF2KFMQ.js";import{a as c}from"./chunk-VLPIBHPO.js";import{c as m}from"./chunk-JUHLOZQQ.js";import"./chunk-GRAK4QNI.js";import"./chunk-GFTA4PL4.js";import"./chunk-CSQ3XL6T.js";import"./chunk-A2AONSIM.js";import"./chunk-7ANKUTMV.js";import{Lb as e,Na as a,bb as r,qb as o,rb as n,sb as t,tb as d}from"./chunk-QUVZ4KUC.js";import"./chunk-IPU5OYZE.js";var u=`<u-expansion-panel style="width: 100%; max-width: 32rem">
  <span slot="header">What is Material 3 Expressive?</span>
  <div style="padding: 0 1rem 1rem">
    Material 3 Expressive is the latest iteration of Material Design, with a refreshed visual language emphasizing
    motion, shape, and color.
  </div>
</u-expansion-panel>
`;var x=`<u-expansion-panel-container style="width: 100%; max-width: 32rem">
  <u-expansion-panel>
    <span slot="header">Account</span>
    <div style="padding: 0 1rem 1rem">Manage email, password, and connected services.</div>
  </u-expansion-panel>
  <u-expansion-panel>
    <span slot="header">Notifications</span>
    <div style="padding: 0 1rem 1rem">Choose how and when you want to be notified.</div>
  </u-expansion-panel>
  <u-expansion-panel>
    <span slot="header">Privacy</span>
    <div style="padding: 0 1rem 1rem">Control what you share and who can see it.</div>
  </u-expansion-panel>
</u-expansion-panel-container>
`;var v=`<u-expansion-panel-container
  multi
  style="width: 100%; max-width: 32rem"
>
  <u-expansion-panel expanded>
    <span slot="header">Open by default</span>
    <div style="padding: 0 1rem 1rem">Set <code>expanded</code> to control the initial state.</div>
  </u-expansion-panel>
  <u-expansion-panel>
    <span slot="header">Independent panel</span>
    <div style="padding: 0 1rem 1rem">With <code>multi</code>, opening this one keeps the others open.</div>
  </u-expansion-panel>
  <u-expansion-panel>
    <span slot="header">Another panel</span>
    <div style="padding: 0 1rem 1rem">All panels operate independently.</div>
  </u-expansion-panel>
</u-expansion-panel-container>
`;var y=`<u-expansion-panel
  disabled
  style="width: 100%; max-width: 32rem"
>
  <span slot="header">Disabled panel</span>
  <div style="padding: 0 1rem 1rem">Cannot be toggled.</div>
</u-expansion-panel>
`;var g=`<!--
  The \`compact\` attribute shrinks the header row (48px \u2192 40px) and tightens its
  padding. It is also inherited from an app-wide \`provideCompact(document.body)\`.
-->
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start">
  <div style="display: flex; flex-direction: column; gap: 1rem">
    <h6 class="u-title-s">Default</h6>
    <u-expansion-panel>
      <span slot="header">Shipping address</span>
      <div style="padding: 0 1rem 1rem">Body content.</div>
    </u-expansion-panel>
  </div>

  <div style="display: flex; flex-direction: column; gap: 1rem">
    <h6 class="u-title-s">Compact</h6>
    <u-expansion-panel compact>
      <span slot="header">Shipping address</span>
      <div style="padding: 0 1rem 1rem">Body content.</div>
    </u-expansion-panel>
  </div>
</div>
`;var U=(()=>{let i=class i{constructor(){this.singleHtml=u,this.accordionHtml=x,this.multiHtml=v,this.disabledHtml=y,this.compactHtml=g}};i.\u0275fac=function(s){return new(s||i)},i.\u0275cmp=r({type:i,selectors:[["docs-expansion-panel"]],decls:20,vars:5,consts:[["title","Expansion panel"],["sectionTitle","Single panel",3,"html"],["sectionTitle","Accordion (exclusive)",3,"html"],["sectionTitle","Multi",3,"html"],["sectionTitle","Disabled",3,"html"],["sectionTitle","Compact density (desktop)",3,"html"],["key","expansionPanel"],["key","expansionPanelContainer"]],template:function(s,l){s&1&&(n(0,"docs-title",0),e(1,"Collapsible surface with a clickable header. Use "),n(2,"code"),e(3,"u-expansion-panel-container"),t(),e(4," to coordinate a group of panels \u2014 by default, opening one closes the others."),t(),d(5,"docs-example",1),n(6,"docs-example",2),e(7,"Wrap multiple panels in "),n(8,"code"),e(9,"u-expansion-panel-container"),t(),e(10,` for exclusive accordion behavior.
`),t(),n(11,"docs-example",3),e(12,"Add "),n(13,"code"),e(14,"multi"),t(),e(15,` on the container to allow multiple panels to stay open simultaneously.
`),t(),d(16,"docs-example",4)(17,"docs-example",5)(18,"docs-apis-table",6)(19,"docs-apis-table",7)),s&2&&(a(5),o("html",l.singleHtml),a(),o("html",l.accordionHtml),a(5),o("html",l.multiHtml),a(5),o("html",l.disabledHtml),a(),o("html",l.compactHtml))},dependencies:[h,c,m],styles:["[_nghost-%COMP%]{display:block}"]});let p=i;return p})();export{U as ExpansionPanelComponent};
