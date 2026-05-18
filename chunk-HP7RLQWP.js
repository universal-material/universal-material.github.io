import{a as T}from"./chunk-INOGOXWS.js";import"./chunk-AEZMOOXS.js";import{a as w}from"./chunk-VUSKBRM3.js";import{a as S}from"./chunk-NK2JTL7K.js";import"./chunk-IRARDQTH.js";import"./chunk-FL6TOC2A.js";import"./chunk-G4Y2CES6.js";import{Cb as v,Fb as t,Hb as C,Ma as a,Xa as b,ca as p,da as d,kb as _,lb as f,mb as y,nb as c,ob as n,pb as e,qb as E,tb as g,ub as h,vb as u}from"./chunk-GNK3CTVM.js";import"./chunk-76XQYYO4.js";var k=`<div style="position: relative">
  <u-button onclick="this.nextElementSibling.toggle()">Open menu</u-button>
  <u-menu>
    <u-menu-item>New file</u-menu-item>
    <u-menu-item>Open\u2026</u-menu-item>
    <u-menu-item>Save</u-menu-item>
    <u-menu-item>Save as\u2026</u-menu-item>
  </u-menu>
</div>
`;var M=`<div style="position: relative">
  <u-button variant="outlined" onclick="this.nextElementSibling.toggle()">
    <span class="material-symbols-outlined" slot="leading-icon">share</span>
    Share
  </u-button>
  <u-menu positioning="fixed">
    <u-menu-item>
      <span class="material-symbols-outlined" slot="leading-icon">link</span>
      Copy link
    </u-menu-item>
    <u-menu-item>
      <span class="material-symbols-outlined" slot="leading-icon">mail</span>
      Send by email
    </u-menu-item>
    <u-menu-item>
      <span class="material-symbols-outlined" slot="leading-icon">qr_code_2</span>
      QR code
    </u-menu-item>
    <u-menu-item>
      <span class="material-symbols-outlined" slot="leading-icon">print</span>
      Print
    </u-menu-item>
  </u-menu>
</div>
`;var O=`<u-button id="positioning-trigger" variant="filled">Toggle menu</u-button>
<u-menu anchor-element="positioning-trigger" anchor-corner="end-start" direction="down-start">
  <u-menu-item>
    <span class="material-symbols-outlined" slot="leading-icon">edit</span>
    Edit
  </u-menu-item>
  <u-menu-item>
    <span class="material-symbols-outlined" slot="leading-icon">content_copy</span>
    Duplicate
  </u-menu-item>
  <u-menu-item>
    <span class="material-symbols-outlined" slot="leading-icon">archive</span>
    Archive
  </u-menu-item>
  <u-menu-item>
    <span class="material-symbols-outlined" slot="leading-icon">delete</span>
    Delete
  </u-menu-item>
</u-menu>
`;function P(r,o){if(r&1){let l=g();n(0,"u-chip",15),h("click",function(){let s=p(l).$implicit,i=u();return d(i.anchorCorner=s)}),t(1),e()}if(r&2){let l=o.$implicit,m=u();c("selected",m.anchorCorner===l),a(),C("",l," ")}}function F(r,o){if(r&1){let l=g();n(0,"u-chip",15),h("click",function(){let s=p(l).$implicit,i=u();return d(i.direction=s)}),t(1),e()}if(r&2){let l=o.$implicit,m=u();c("selected",m.direction===l),a(),C("",l," ")}}var I=["start-start","start-end","end-start","end-end","auto-start","auto-end"],R=["down-start","down-end","up-start","up-end"],K=(()=>{let o=class o{constructor(){this.basicHtml=k,this.iconsHtml=M,this.positioningHtml=O,this.anchorCorners=I,this.directions=R,this.anchorCorner="end-start",this.direction="down-start"}};o.\u0275fac=function(s){return new(s||o)},o.\u0275cmp=b({type:o,selectors:[["docs-menus"]],decls:43,vars:7,consts:[["anchorTrigger",""],["positioningMenu",""],["title","Menus","tag","u-menu, u-menu-item"],["sectionTitle","Usage",3,"html"],["sectionTitle","With icons",3,"html"],["sectionTitle","Anchor & direction","alignment","center",3,"html","renderExample"],[1,"positioning-controls"],[1,"positioning-control"],[1,"positioning-label"],["toggle","",3,"selected"],["example","",1,"positioning-stage"],["variant","filled",3,"click"],[3,"anchorElement","anchorCorner","direction"],["slot","leading-icon",1,"material-symbols-outlined"],["key","menu"],["toggle","",3,"click","selected"]],template:function(s,i){if(s&1){let x=g();n(0,"docs-title",2),t(1,"Floating surfaces that present a list of choices anchored to a trigger."),e(),n(2,"docs-example",3),t(3,"A `u-menu` opens above any element you call `.toggle()`/`.show()` on. By default it anchors to its parent, so a button next to the menu just works."),e(),n(4,"docs-example",4),t(5,'Use the `leading-icon` slot on `u-menu-item` to add a glyph. The classic "share" pattern below.'),e(),n(6,"docs-example",5)(7,"div",6)(8,"div",7)(9,"span",8),t(10,"Anchor corner"),e(),n(11,"u-chip-set"),f(12,P,2,2,"u-chip",9,_),e()(),n(14,"div",7)(15,"span",8),t(16,"Direction"),e(),n(17,"u-chip-set"),f(18,F,2,2,"u-chip",9,_),e()()(),n(20,"div",10)(21,"u-button",11,0),h("click",function(){p(x);let H=v(25);return d(H.toggle())}),t(23,"Toggle menu "),e(),n(24,"u-menu",12,1)(26,"u-menu-item")(27,"span",13),t(28,"edit"),e(),t(29," Edit "),e(),n(30,"u-menu-item")(31,"span",13),t(32,"content_copy"),e(),t(33," Duplicate "),e(),n(34,"u-menu-item")(35,"span",13),t(36,"archive"),e(),t(37," Archive "),e(),n(38,"u-menu-item")(39,"span",13),t(40,"delete"),e(),t(41," Delete "),e()()()(),E(42,"docs-apis-table",14)}if(s&2){let x=v(22);a(2),c("html",i.basicHtml),a(2),c("html",i.iconsHtml),a(2),c("html",i.positioningHtml)("renderExample",!1),a(6),y(i.anchorCorners),a(6),y(i.directions),a(6),c("anchorElement",x)("anchorCorner",i.anchorCorner)("direction",i.direction)}},dependencies:[T,w,S],styles:[".positioning-controls[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;margin-block:16px 24px;padding:16px 20px;border-radius:12px;background:var(--u-color-surface-container-low);border:1px solid var(--u-color-outline-variant)}.positioning-control[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.positioning-control[_ngcontent-%COMP%]   u-chip[_ngcontent-%COMP%]{font-family:var(--u-font-monospace);font-size:12px}.positioning-label[_ngcontent-%COMP%]{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--u-color-on-surface-variant)}.positioning-stage[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;min-height:320px;padding:40px}"]});let r=o;return r})();export{K as MenusComponent};
