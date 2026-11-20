import{a as d}from"./chunk-ZQF2KFMQ.js";import{a as u}from"./chunk-VLPIBHPO.js";import{c as b}from"./chunk-JUHLOZQQ.js";import"./chunk-GRAK4QNI.js";import"./chunk-GFTA4PL4.js";import"./chunk-CSQ3XL6T.js";import"./chunk-A2AONSIM.js";import"./chunk-7ANKUTMV.js";import{Lb as t,Na as i,bb as m,qb as o,rb as s,sb as e,tb as c}from"./chunk-QUVZ4KUC.js";import"./chunk-IPU5OYZE.js";var p=`<u-tab-bar>
  <u-tab>Overview</u-tab>
  <u-tab>Activity</u-tab>
  <u-tab>Files</u-tab>
  <u-tab>Members</u-tab>
</u-tab-bar>
`;var h=`<u-tab-bar>
  <u-tab>
    <span
      class="material-symbols-outlined"
      slot="icon"
      >home</span
    >
    Home
  </u-tab>
  <u-tab>
    <span
      class="material-symbols-outlined"
      slot="icon"
      >search</span
    >
    Search
  </u-tab>
  <u-tab>
    <span
      class="material-symbols-outlined"
      slot="icon"
      >settings</span
    >
    Settings
  </u-tab>
</u-tab-bar>
`;var v=`<u-tab-bar>
  <u-tab>Overview</u-tab>
  <u-tab active>Activity</u-tab>
  <u-tab>Files</u-tab>
</u-tab-bar>
`;var y=`<u-tab-bar variant="secondary">
  <u-tab>Overview</u-tab>
  <u-tab>Activity</u-tab>
  <u-tab>Files</u-tab>
</u-tab-bar>
`;var f=`<!--
  The \`compact\` attribute shrinks the tab height (48px \u2192 40px, or 64px \u2192 48px
  with an icon). It is also inherited from an app-wide \`provideCompact(document.body)\`.
-->
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start">
  <div>
    <h6 class="u-title-s">Default</h6>
    <u-tab-bar>
      <u-tab active>Overview</u-tab>
      <u-tab>Activity</u-tab>
      <u-tab>Settings</u-tab>
    </u-tab-bar>
  </div>

  <div>
    <h6 class="u-title-s">Compact</h6>
    <u-tab-bar>
      <u-tab
        compact
        active
        >Overview</u-tab
      >
      <u-tab compact>Activity</u-tab>
      <u-tab compact>Settings</u-tab>
    </u-tab-bar>
  </div>
</div>
`;var q=(()=>{let a=class a{constructor(){this.basicHtml=p,this.iconsHtml=h,this.initialSelectionHtml=v,this.secondaryHtml=y,this.compactHtml=f}};a.\u0275fac=function(l){return new(l||a)},a.\u0275cmp=m({type:a,selectors:[["docs-tabs"]],decls:19,vars:5,consts:[["title","Tabs","tag","u-tab-bar, u-tab"],["sectionTitle","Basic","fluid","",3,"html"],["sectionTitle","With icons","fluid","",3,"html"],["sectionTitle","Initial selection","fluid","",3,"html"],["sectionTitle","Secondary variant","fluid","",3,"html"],["sectionTitle","Compact density (desktop)",3,"html"],["key","tabBar"],["key","tab"]],template:function(l,n){l&1&&(s(0,"docs-title",0),t(1,"Horizontal switchers that organize content across different views, with an animated underline indicator under the active tab."),e(),c(2,"docs-example",1)(3,"docs-example",2),s(4,"docs-example",3),t(5," Add "),s(6,"code"),t(7,"active"),e(),t(8," to any "),s(9,"code"),t(10,"<u-tab>"),e(),t(11,` to choose which tab starts selected. Without it, the first tab is selected.
`),e(),s(12,"docs-example",4)(13,"code"),t(14,'variant="secondary"'),e(),t(15,` renders the full-width indicator style.
`),e(),c(16,"docs-example",5)(17,"docs-apis-table",6)(18,"docs-apis-table",7)),l&2&&(i(2),o("html",n.basicHtml),i(),o("html",n.iconsHtml),i(),o("html",n.initialSelectionHtml),i(8),o("html",n.secondaryHtml),i(4),o("html",n.compactHtml))},dependencies:[d,u,b],styles:["[_nghost-%COMP%]{display:block}"]});let r=a;return r})();export{q as TabsComponent};
