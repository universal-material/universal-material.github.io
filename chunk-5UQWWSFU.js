import{a as u}from"./chunk-ZQF2KFMQ.js";import{a as b}from"./chunk-VLPIBHPO.js";import{c as d}from"./chunk-JUHLOZQQ.js";import"./chunk-GRAK4QNI.js";import"./chunk-GFTA4PL4.js";import"./chunk-CSQ3XL6T.js";import"./chunk-A2AONSIM.js";import"./chunk-7ANKUTMV.js";import{Lb as i,Na as o,bb as p,qb as n,rb as e,sb as s,tb as m}from"./chunk-QUVZ4KUC.js";import"./chunk-IPU5OYZE.js";var c=`<u-scaffold
  style="height: 360px; border: 1px solid var(--u-color-outline-variant, rgba(0, 0, 0, 0.12)); border-radius: 12px"
>
  <u-top-app-bar
    slot="top-bar"
    headline="Mail"
  >
    <u-icon-button slot="leading-icon">
      <span class="material-symbols-outlined">menu</span>
    </u-icon-button>
  </u-top-app-bar>

  <div style="padding: 16px 24px">
    <p>
      Destinations follow the Material 3 navigation bar spec: 64\xD732dp active indicator pill, 24dp icon, label-medium
      typography, and on-surface / on-secondary-container colors.
    </p>
    <p>Use <code>u-navigation-bar-item</code> for each destination \u2014 the active one gets the indicator pill.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>

  <u-navigation-bar slot="bottom-bar">
    <u-navigation-bar-item active>
      <span
        class="material-symbols-outlined"
        slot="icon"
        >home</span
      >
      Home
    </u-navigation-bar-item>
    <u-navigation-bar-item>
      <span
        class="material-symbols-outlined"
        slot="icon"
        >explore</span
      >
      Browse
    </u-navigation-bar-item>
    <u-navigation-bar-item>
      <span
        class="material-symbols-outlined"
        slot="icon"
        >radio</span
      >
      Radio
    </u-navigation-bar-item>
    <u-navigation-bar-item>
      <span
        class="material-symbols-outlined"
        slot="icon"
        >library_music</span
      >
      Library
    </u-navigation-bar-item>
  </u-navigation-bar>
</u-scaffold>
`;var v=`<u-scaffold
  style="height: 320px; border: 1px solid var(--u-color-outline-variant, rgba(0, 0, 0, 0.12)); border-radius: 12px"
>
  <u-top-app-bar
    slot="top-bar"
    headline="Music"
  >
    <u-icon-button slot="leading-icon">
      <span class="material-symbols-outlined">menu</span>
    </u-icon-button>
  </u-top-app-bar>

  <div style="padding: 16px 24px">
    <p>
      Horizontal variant \u2014 the active indicator pill (40dp tall) wraps both the icon and the label, with 16dp inline
      padding and 4dp icon-label gap.
    </p>
  </div>

  <u-navigation-bar slot="bottom-bar">
    <u-navigation-bar-item
      variant="horizontal"
      active
    >
      <span
        class="material-symbols-outlined"
        slot="icon"
        >home</span
      >
      Home
    </u-navigation-bar-item>
    <u-navigation-bar-item variant="horizontal">
      <span
        class="material-symbols-outlined"
        slot="icon"
        >explore</span
      >
      Browse
    </u-navigation-bar-item>
    <u-navigation-bar-item variant="horizontal">
      <span
        class="material-symbols-outlined"
        slot="icon"
        >radio</span
      >
      Radio
    </u-navigation-bar-item>
    <u-navigation-bar-item variant="horizontal">
      <span
        class="material-symbols-outlined"
        slot="icon"
        >library_music</span
      >
      Library
    </u-navigation-bar-item>
  </u-navigation-bar>
</u-scaffold>
`;var g=`<u-scaffold
  style="height: 360px; border: 1px solid var(--u-color-outline-variant, rgba(0, 0, 0, 0.12)); border-radius: 12px"
>
  <u-top-app-bar
    slot="top-bar"
    headline="Inbox"
  >
    <u-icon-button slot="leading-icon">
      <span class="material-symbols-outlined">menu</span>
    </u-icon-button>
  </u-top-app-bar>

  <div style="padding: 16px 24px">
    <p>
      The FAB lives in the scaffold's <code>fab</code> slot and is anchored above the navigation bar with a 16dp gap.
    </p>
    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
  </div>

  <u-navigation-bar slot="bottom-bar">
    <u-navigation-bar-item active>
      <span
        class="material-symbols-outlined"
        slot="icon"
        >inbox</span
      >
      Inbox
    </u-navigation-bar-item>
    <u-navigation-bar-item>
      <span
        class="material-symbols-outlined"
        slot="icon"
        >send</span
      >
      <u-badge slot="badge">3</u-badge>
      Sent
    </u-navigation-bar-item>
    <u-navigation-bar-item>
      <span
        class="material-symbols-outlined"
        slot="icon"
        >drafts</span
      >
      Drafts
    </u-navigation-bar-item>
    <u-navigation-bar-item>
      <span
        class="material-symbols-outlined"
        slot="icon"
        >delete</span
      >
      Trash
    </u-navigation-bar-item>
  </u-navigation-bar>

  <u-fab
    slot="fab"
    color="primary"
  >
    <span class="material-symbols-outlined">edit</span>
  </u-fab>
</u-scaffold>
`;var D=(()=>{let a=class a{constructor(){this.basicHtml=c,this.horizontalHtml=v,this.withFabHtml=g}};a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=p({type:a,selectors:[["docs-navigation-bar"]],decls:12,vars:3,consts:[["title","Navigation bar","tag","u-navigation-bar"],["sectionTitle","Vertical (default)","fluid","",3,"html"],["sectionTitle","Horizontal","fluid","",3,"html"],["sectionTitle","With FAB above the bar","fluid","",3,"html"],["key","navigationBar"]],template:function(t,r){t&1&&(e(0,"docs-title",0),i(1,"A persistent bar pinned to the bottom of the application that hosts top-level destinations (3\u20135 icon-only items). Mirrors "),e(2,"code"),i(3,"u-top-app-bar"),s(),i(4,"'s positioning model \u2014 its internal "),e(5,"code"),i(6,".spacing"),s(),i(7," filler reserves the bar's height inside the surrounding flow."),s(),m(8,"docs-example",1)(9,"docs-example",2)(10,"docs-example",3)(11,"docs-apis-table",4)),t&2&&(o(8),n("html",r.basicHtml),o(),n("html",r.horizontalHtml),o(),n("html",r.withFabHtml))},dependencies:[u,b,d],styles:["[_nghost-%COMP%]{display:block}"]});let l=a;return l})();export{D as NavigationBarComponent};
