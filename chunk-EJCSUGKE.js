import{a as d}from"./chunk-ZQF2KFMQ.js";import{a as p}from"./chunk-VLPIBHPO.js";import{c}from"./chunk-JUHLOZQQ.js";import"./chunk-GRAK4QNI.js";import"./chunk-GFTA4PL4.js";import"./chunk-CSQ3XL6T.js";import"./chunk-A2AONSIM.js";import"./chunk-7ANKUTMV.js";import{Lb as u,Na as t,bb as n,qb as i,rb as a,sb as m,tb as r}from"./chunk-QUVZ4KUC.js";import"./chunk-IPU5OYZE.js";var h=`<u-card variant="outlined">
  <u-list slot="before-content">
    <u-list-item>Inbox</u-list-item>
    <u-list-item>Starred</u-list-item>
    <u-list-item>Drafts</u-list-item>
    <u-list-item>Sent</u-list-item>
  </u-list>
</u-card>
`;var b=`<u-card variant="outlined">
  <u-list slot="before-content">
    <u-list-item>
      <span
        class="material-symbols-outlined"
        slot="leading-icon"
        >inbox
      </span>
      Inbox
    </u-list-item>
    <u-list-item>
      <span
        class="material-symbols-outlined"
        slot="leading-icon"
        >star
      </span>
      Starred
    </u-list-item>
    <u-list-item>
      <span
        class="material-symbols-outlined"
        slot="leading-icon"
        >drafts
      </span>
      Drafts
    </u-list-item>
  </u-list>
</u-card>
`;var f=`<u-card variant="outlined">
  <u-list slot="before-content">
    <u-list-item>
      Alice
      <span slot="supporting-text">Last seen 2 hours ago</span>
    </u-list-item>
    <u-list-item>
      Bob
      <span slot="supporting-text">Online</span>
    </u-list-item>
    <u-list-item>
      Carol
      <span slot="supporting-text">Last seen yesterday</span>
    </u-list-item>
  </u-list>
</u-card>
`;var v=`<u-card variant="outlined">
  <u-list slot="before-content">
    <u-list-item selectable>
      Notifications
      <u-icon-button slot="trailing-icon">
        <span class="material-symbols-outlined">more_vert</span>
      </u-icon-button>
    </u-list-item>
    <u-list-item selectable>
      Display
      <u-icon-button slot="trailing-icon">
        <span class="material-symbols-outlined">more_vert</span>
      </u-icon-button>
    </u-list-item>
    <u-list-item selectable>
      Storage
      <u-icon-button slot="trailing-icon">
        <span class="material-symbols-outlined">more_vert</span>
      </u-icon-button>
    </u-list-item>
  </u-list>
</u-card>
`;var g=`<div
  class="u-title-s"
  style="margin-bottom: 4px"
>
  Notifications
</div>
<u-list>
  <u-list-item no-inset>
    Email
    <span slot="supporting-text">Summaries and alerts</span>
  </u-list-item>
  <u-list-item no-inset>
    Push
    <span slot="supporting-text">Browser notifications</span>
  </u-list-item>
</u-list>
`;var y=`<!--
  The \`compact\` attribute shrinks the row height (56px \u2192 40px). It is also
  inherited from an app-wide \`provideCompact(document.body)\`.
-->
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start">
  <div>
    <h6 class="u-title-s">Default</h6>
    <u-list>
      <u-list-item selectable>Inbox</u-list-item>
      <u-list-item selectable>Starred</u-list-item>
      <u-list-item selectable>Sent</u-list-item>
    </u-list>
  </div>

  <div>
    <h6 class="u-title-s">Compact</h6>
    <u-list>
      <u-list-item
        compact
        selectable
        >Inbox</u-list-item
      >
      <u-list-item
        compact
        selectable
        >Starred</u-list-item
      >
      <u-list-item
        compact
        selectable
        >Sent</u-list-item
      >
    </u-list>
  </div>
</div>
`;var G=(()=>{let e=class e{constructor(){this.simpleListHtml=h,this.listIconsHtml=b,this.listTwoLinesHtml=f,this.listWithActionHtml=v,this.listNoInsetHtml=g,this.compactHtml=y}};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=n({type:e,selectors:[["docs-lists"]],decls:9,vars:6,consts:[["title","Lists","tag","u-list, u-list-item"],["sectionTitle","Simple list",3,"html"],["sectionTitle","With leading icons",3,"html"],["sectionTitle","With supporting text",3,"html"],["sectionTitle","With trailing action",3,"html"],["sectionTitle","Flush rows (no-inset)",3,"html"],["sectionTitle","Compact density (desktop)",3,"html"],["key","listItem"]],template:function(l,s){l&1&&(a(0,"docs-title",0),u(1,"Continuous, vertical indexes of related items. Wrap them in a `u-card` for a Material-styled surface."),m(),r(2,"docs-example",1)(3,"docs-example",2)(4,"docs-example",3)(5,"docs-example",4)(6,"docs-example",5)(7,"docs-example",6)(8,"docs-apis-table",7)),l&2&&(t(2),i("html",s.simpleListHtml),t(),i("html",s.listIconsHtml),t(),i("html",s.listTwoLinesHtml),t(),i("html",s.listWithActionHtml),t(),i("html",s.listNoInsetHtml),t(),i("html",s.compactHtml))},dependencies:[d,p,c],encapsulation:2});let o=e;return o})();export{G as ListsComponent};
