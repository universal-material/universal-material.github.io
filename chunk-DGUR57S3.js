import{a as c}from"./chunk-ZQF2KFMQ.js";import{a as u}from"./chunk-VLPIBHPO.js";import{c as m}from"./chunk-JUHLOZQQ.js";import"./chunk-GRAK4QNI.js";import"./chunk-GFTA4PL4.js";import"./chunk-CSQ3XL6T.js";import"./chunk-A2AONSIM.js";import"./chunk-7ANKUTMV.js";import{Lb as a,Na as o,bb as d,qb as l,rb as t,sb as e,tb as p}from"./chunk-QUVZ4KUC.js";import"./chunk-IPU5OYZE.js";var g=`<u-navigation-rail
  id="rail-basic"
  style="
    height: 480px;
    border: 1px solid var(--u-color-outline-variant, rgba(0, 0, 0, 0.12));
    border-radius: 12px;
    overflow: hidden;
  "
>
  <!-- Collapsed mode: a short list of primary destinations -->
  <u-navigation-rail-item
    slot="rail"
    active
  >
    <span
      class="material-symbols-outlined"
      slot="icon"
      >inbox</span
    >
    Inbox
  </u-navigation-rail-item>
  <u-navigation-rail-item slot="rail">
    <span
      class="material-symbols-outlined"
      slot="icon"
      >outbox</span
    >
    Outbox
    <u-badge slot="badge">3</u-badge>
  </u-navigation-rail-item>
  <u-navigation-rail-item slot="rail">
    <span
      class="material-symbols-outlined"
      slot="icon"
      >favorite</span
    >
    Favorites
  </u-navigation-rail-item>
  <u-navigation-rail-item slot="rail">
    <span
      class="material-symbols-outlined"
      slot="icon"
      >delete</span
    >
    Trash
  </u-navigation-rail-item>

  <!-- Expanded mode: the full menu, grouped with headlines -->
  <u-navigation-rail-item
    slot="expanded"
    active
  >
    <span
      class="material-symbols-outlined"
      slot="icon"
      >inbox</span
    >
    Inbox
  </u-navigation-rail-item>
  <u-navigation-rail-item slot="expanded">
    <span
      class="material-symbols-outlined"
      slot="icon"
      >outbox</span
    >
    Outbox
    <u-badge slot="badge">3</u-badge>
  </u-navigation-rail-item>
  <u-navigation-rail-item slot="expanded">
    <span
      class="material-symbols-outlined"
      slot="icon"
      >favorite</span
    >
    Favorites
  </u-navigation-rail-item>
  <u-navigation-rail-item slot="expanded">
    <span
      class="material-symbols-outlined"
      slot="icon"
      >delete</span
    >
    Trash
  </u-navigation-rail-item>

  <u-scaffold>
    <u-top-app-bar
      slot="top-bar"
      headline="Mail"
    >
      <u-icon-button
        slot="leading-icon"
        onclick="const r = this.closest('u-navigation-rail'); r.toggleDrawer = !r.toggleDrawer;"
      >
        <span class="material-symbols-outlined">menu</span>
      </u-icon-button>
    </u-top-app-bar>

    <div style="padding: 16px 24px">
      <p>Resize the window to see how the rail adapts:</p>
      <ul>
        <li><strong>&lt; 840px:</strong> rail is hidden.</li>
        <li>
          <strong>840&ndash;1199px:</strong> the rail is pinned to the left in its collapsed 96dp form, showing the
          short <code>slot="rail"</code> list.
        </li>
        <li>
          <strong>&ge; 1200px:</strong> the rail is permanently expanded (360dp), showing the longer
          <code>slot="expanded"</code> menu. Tap the menu to collapse it.
        </li>
      </ul>
    </div>
  </u-scaffold>
</u-navigation-rail>
`;var b=`<u-navigation-rail
  id="rail-expanded-only"
  style="
    height: 480px;
    border: 1px solid var(--u-color-outline-variant, rgba(0, 0, 0, 0.12));
    border-radius: 12px;
    overflow: hidden;
  "
>
  <!-- No slot="rail" \u2014 at medium the rail won't have a permanent collapsed
       bar; only the expanded modal opens via the menu button. -->

  <u-navigation-rail-headline slot="expanded">Mail</u-navigation-rail-headline>
  <u-navigation-rail-item
    slot="expanded"
    active
  >
    <span
      class="material-symbols-outlined"
      slot="icon"
      >inbox</span
    >
    Inbox
  </u-navigation-rail-item>
  <u-navigation-rail-item slot="expanded">
    <span
      class="material-symbols-outlined"
      slot="icon"
      >send</span
    >
    Outbox
  </u-navigation-rail-item>
  <u-navigation-rail-item slot="expanded">
    <span
      class="material-symbols-outlined"
      slot="icon"
      >star</span
    >
    Starred
  </u-navigation-rail-item>
  <u-navigation-rail-item slot="expanded">
    <span
      class="material-symbols-outlined"
      slot="icon"
      >delete</span
    >
    Trash
  </u-navigation-rail-item>

  <u-navigation-rail-headline slot="expanded">Labels</u-navigation-rail-headline>
  <u-navigation-rail-item slot="expanded">
    <span
      class="material-symbols-outlined"
      slot="icon"
      >label</span
    >
    Personal
  </u-navigation-rail-item>
  <u-navigation-rail-item slot="expanded">
    <span
      class="material-symbols-outlined"
      slot="icon"
      >label</span
    >
    Work
  </u-navigation-rail-item>

  <u-scaffold>
    <u-top-app-bar
      slot="top-bar"
      headline="Mail"
    >
      <u-icon-button
        slot="leading-icon"
        onclick="const r = this.closest('u-navigation-rail'); r.toggleDrawer = !r.toggleDrawer;"
      >
        <span class="material-symbols-outlined">menu</span>
      </u-icon-button>
    </u-top-app-bar>

    <div style="padding: 16px 24px">
      <p>
        Omit <code>slot="rail"</code> and only fill <code>slot="expanded"</code> when you don't want a permanent
        collapsed bar at medium widths. Behaviour:
      </p>
      <ul>
        <li>
          <strong>&lt; 840px</strong> and <strong>840\u20131199px</strong>: nothing is visible until the user opens the menu
          \u2014 the expanded panel then slides in modally with a scrim.
        </li>
        <li>
          <strong>\u2265 1200px</strong>: the expanded panel is the permanent sidebar. The menu button slides it off, leaving
          the page content full-width.
        </li>
      </ul>
    </div>
  </u-scaffold>
</u-navigation-rail>
`;var v=`<u-navigation-rail
  id="rail-with-edges"
  style="
    height: 480px;
    border: 1px solid var(--u-color-outline-variant, rgba(0, 0, 0, 0.12));
    border-radius: 12px;
    overflow: hidden;
  "
>
  <u-icon-button
    slot="top"
    onclick="const r = this.closest('u-navigation-rail'); r.toggleDrawer = !r.toggleDrawer;"
  >
    <span class="material-symbols-outlined">menu</span>
  </u-icon-button>

  <u-navigation-rail-item
    slot="rail"
    active
  >
    <span
      class="material-symbols-outlined"
      slot="icon"
      >inbox</span
    >
    Inbox
  </u-navigation-rail-item>
  <u-navigation-rail-item slot="rail">
    <span
      class="material-symbols-outlined"
      slot="icon"
      >star</span
    >
    Starred
  </u-navigation-rail-item>
  <u-navigation-rail-item slot="rail">
    <span
      class="material-symbols-outlined"
      slot="icon"
      >send</span
    >
    Sent
  </u-navigation-rail-item>

  <u-fab
    slot="bottom"
    variant="primary"
    size="small"
  >
    <span
      class="material-symbols-outlined"
      slot="icon"
      >edit</span
    >
  </u-fab>

  <u-scaffold>
    <u-top-app-bar
      slot="top-bar"
      headline="Mail"
    ></u-top-app-bar>
    <div style="padding: 16px 24px">
      <p>
        Use <code>slot="top"</code> for a menu button or brand mark; <code>slot="bottom"</code> for a FAB or secondary
        action. Both edges stay pinned while the items between scroll if needed.
      </p>
    </div>
  </u-scaffold>
</u-navigation-rail>
`;var I=(()=>{let i=class i{constructor(){this.basicHtml=g,this.expandedOnlyHtml=b,this.withEdgesHtml=v}};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=d({type:i,selectors:[["docs-navigation-rail"]],decls:16,vars:3,consts:[["title","Navigation rail","tag","u-navigation-rail"],["sectionTitle","Responsive rail (collapsed + expanded)","fluid","",3,"html"],["sectionTitle","Expanded only (no permanent collapsed bar)","fluid","",3,"html"],["sectionTitle","With top and bottom slots","fluid","",3,"html"],["key","navigationRail"],["key","navigationRailItem"]],template:function(n,r){n&1&&(t(0,"docs-title",0),a(1,"A responsive primary navigation surface with two independently configurable destination sets ("),t(2,"code"),a(3,'slot="rail"'),e(),a(4," for the collapsed bar, "),t(5,"code"),a(6,'slot="expanded"'),e(),a(7," for the full menu with optional "),t(8,"code"),a(9,"u-navigation-rail-headline"),e(),a(10," sections). Mobile and medium open the expanded panel as a modal sliding in from the left with a scrim; large keeps it permanent and slides it off on toggle."),e(),p(11,"docs-example",1)(12,"docs-example",2)(13,"docs-example",3)(14,"docs-apis-table",4)(15,"docs-apis-table",5)),n&2&&(o(11),l("html",r.basicHtml),o(),l("html",r.expandedOnlyHtml),o(),l("html",r.withEdgesHtml))},dependencies:[c,u,m],styles:["[_nghost-%COMP%]{display:block}"]});let s=i;return s})();export{I as NavigationRailComponent};
