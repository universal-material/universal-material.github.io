import{a as S}from"./chunk-ZQF2KFMQ.js";import{a as k}from"./chunk-VLPIBHPO.js";import{c as w}from"./chunk-JUHLOZQQ.js";import"./chunk-GRAK4QNI.js";import"./chunk-GFTA4PL4.js";import"./chunk-CSQ3XL6T.js";import"./chunk-A2AONSIM.js";import"./chunk-7ANKUTMV.js";import{Bb as u,Ib as y,Lb as t,Na as r,Nb as b,bb as C,ea as p,fa as d,nb as f,ob as v,pb as _,qb as m,rb as n,sb as e,tb as E,yb as g,zb as h}from"./chunk-QUVZ4KUC.js";import"./chunk-IPU5OYZE.js";var T=`<div style="position: relative">
  <u-button onclick="this.nextElementSibling.toggle()">Open menu</u-button>
  <u-menu>
    <u-menu-item>New file</u-menu-item>
    <u-menu-item>Open\u2026</u-menu-item>
    <u-menu-item>Save</u-menu-item>
    <u-menu-item>Save as\u2026</u-menu-item>
  </u-menu>
</div>
`;var M=`<div style="position: relative">
  <u-button
    variant="outlined"
    onclick="this.nextElementSibling.toggle()"
  >
    <span
      class="material-symbols-outlined"
      slot="leading-icon"
      >share</span
    >
    Share
  </u-button>
  <u-menu positioning="fixed">
    <u-menu-item>
      <span
        class="material-symbols-outlined"
        slot="leading-icon"
        >link</span
      >
      Copy link
    </u-menu-item>
    <u-menu-item>
      <span
        class="material-symbols-outlined"
        slot="leading-icon"
        >mail</span
      >
      Send by email
    </u-menu-item>
    <u-menu-item>
      <span
        class="material-symbols-outlined"
        slot="leading-icon"
        >qr_code_2</span
      >
      QR code
    </u-menu-item>
    <u-menu-item>
      <span
        class="material-symbols-outlined"
        slot="leading-icon"
        >print</span
      >
      Print
    </u-menu-item>
  </u-menu>
</div>
`;var H=`<u-button
  id="positioning-trigger"
  variant="filled"
  >Toggle menu</u-button
>
<u-menu
  anchor-element="positioning-trigger"
  anchor-corner="end-start"
  direction="down-start"
>
  <u-menu-item>
    <span
      class="material-symbols-outlined"
      slot="leading-icon"
      >edit</span
    >
    Edit
  </u-menu-item>
  <u-menu-item>
    <span
      class="material-symbols-outlined"
      slot="leading-icon"
      >content_copy</span
    >
    Duplicate
  </u-menu-item>
  <u-menu-item>
    <span
      class="material-symbols-outlined"
      slot="leading-icon"
      >archive</span
    >
    Archive
  </u-menu-item>
  <u-menu-item>
    <span
      class="material-symbols-outlined"
      slot="leading-icon"
      >delete</span
    >
    Delete
  </u-menu-item>
</u-menu>
`;var O=`<!--
  The \`compact\` attribute shrinks the menu-item row (56px \u2192 40px). It is also
  inherited from an app-wide \`provideCompact(document.body)\`, so items inside a
  compact app's \`<u-menu>\` become dense automatically. The items below are shown
  on a plain surface (instead of a popup) so the height difference is visible.
-->
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start">
  <div>
    <h6 class="u-title-s">Default</h6>
    <div style="width: 220px; padding: 8px 0; border-radius: 12px; background: var(--u-color-surface-container)">
      <u-menu-item>New file</u-menu-item>
      <u-menu-item>Open\u2026</u-menu-item>
      <u-menu-item>Save</u-menu-item>
    </div>
  </div>

  <div>
    <h6 class="u-title-s">Compact</h6>
    <div style="width: 220px; padding: 8px 0; border-radius: 12px; background: var(--u-color-surface-container)">
      <u-menu-item compact>New file</u-menu-item>
      <u-menu-item compact>Open\u2026</u-menu-item>
      <u-menu-item compact>Save</u-menu-item>
    </div>
  </div>
</div>
`;function F(a,o){if(a&1){let s=g();n(0,"u-chip",16),h("click",function(){let l=p(s).$implicit,i=u();return d(i.anchorCorner=l)}),t(1),e()}if(a&2){let s=o.$implicit,c=u();m("selected",c.anchorCorner===s),r(),b("",s," ")}}function N(a,o){if(a&1){let s=g();n(0,"u-chip",16),h("click",function(){let l=p(s).$implicit,i=u();return d(i.direction=l)}),t(1),e()}if(a&2){let s=o.$implicit,c=u();m("selected",c.direction===s),r(),b("",s," ")}}var R=["start-start","start-end","end-start","end-end","auto-start","auto-end"],$=["down-start","down-end","up-start","up-end"],Z=(()=>{let o=class o{constructor(){this.basicHtml=T,this.iconsHtml=M,this.positioningHtml=H,this.compactHtml=O,this.anchorCorners=R,this.directions=$,this.anchorCorner="end-start",this.direction="down-start"}};o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=C({type:o,selectors:[["docs-menus"]],decls:44,vars:8,consts:[["anchorTrigger",""],["positioningMenu",""],["title","Menus","tag","u-menu, u-menu-item"],["sectionTitle","Usage",3,"html"],["sectionTitle","With icons",3,"html"],["sectionTitle","Anchor & direction","alignment","center",3,"html","renderExample"],[1,"positioning-controls"],[1,"positioning-control"],[1,"positioning-label"],["clickable","",3,"selected"],["example","",1,"positioning-stage"],["variant","filled",3,"click"],[3,"anchorElement","anchorCorner","direction"],["slot","leading-icon",1,"material-symbols-outlined"],["sectionTitle","Compact density (desktop)",3,"html"],["key","menu"],["clickable","",3,"click","selected"]],template:function(l,i){if(l&1){let x=g();n(0,"docs-title",2),t(1,"Floating surfaces that present a list of choices anchored to a trigger."),e(),n(2,"docs-example",3),t(3,"A `u-menu` opens above any element you call `.toggle()`/`.show()` on. By default it anchors to its parent, so a button next to the menu just works."),e(),n(4,"docs-example",4),t(5,'Use the `leading-icon` slot on `u-menu-item` to add a glyph. The classic "share" pattern below.'),e(),n(6,"docs-example",5)(7,"div",6)(8,"div",7)(9,"span",8),t(10,"Anchor corner"),e(),n(11,"u-chip-set"),v(12,F,2,2,"u-chip",9,f),e()(),n(14,"div",7)(15,"span",8),t(16,"Direction"),e(),n(17,"u-chip-set"),v(18,N,2,2,"u-chip",9,f),e()()(),n(20,"div",10)(21,"u-button",11,0),h("click",function(){p(x);let D=y(25);return d(D.toggle())}),t(23,"Toggle menu "),e(),n(24,"u-menu",12,1)(26,"u-menu-item")(27,"span",13),t(28,"edit"),e(),t(29," Edit "),e(),n(30,"u-menu-item")(31,"span",13),t(32,"content_copy"),e(),t(33," Duplicate "),e(),n(34,"u-menu-item")(35,"span",13),t(36,"archive"),e(),t(37," Archive "),e(),n(38,"u-menu-item")(39,"span",13),t(40,"delete"),e(),t(41," Delete "),e()()()(),E(42,"docs-example",14)(43,"docs-apis-table",15)}if(l&2){let x=y(22);r(2),m("html",i.basicHtml),r(2),m("html",i.iconsHtml),r(2),m("html",i.positioningHtml)("renderExample",!1),r(6),_(i.anchorCorners),r(6),_(i.directions),r(6),m("anchorElement",x)("anchorCorner",i.anchorCorner)("direction",i.direction),r(18),m("html",i.compactHtml)}},dependencies:[S,k,w],styles:[".positioning-controls[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;margin-block:16px 24px;padding:16px 20px;border-radius:12px;background:var(--u-color-surface-container-low);border:1px solid var(--u-color-outline-variant)}.positioning-control[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.positioning-control[_ngcontent-%COMP%]   u-chip[_ngcontent-%COMP%]{font-family:var(--u-font-monospace);font-size:12px}.positioning-label[_ngcontent-%COMP%]{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--u-color-on-surface-variant)}.positioning-stage[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;min-height:320px;padding:40px}"]});let a=o;return a})();export{Z as MenusComponent};
