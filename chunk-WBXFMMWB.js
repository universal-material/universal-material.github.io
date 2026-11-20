import{a as I}from"./chunk-ZQF2KFMQ.js";import{a as C}from"./chunk-VLPIBHPO.js";import{c as y}from"./chunk-JUHLOZQQ.js";import"./chunk-GRAK4QNI.js";import"./chunk-GFTA4PL4.js";import"./chunk-CSQ3XL6T.js";import"./chunk-A2AONSIM.js";import"./chunk-7ANKUTMV.js";import{C as g,Lb as l,Na as o,bb as _,f as h,fb as u,mc as v,nc as b,qb as s,rb as i,sb as n,tb as f,zb as p}from"./chunk-QUVZ4KUC.js";import"./chunk-IPU5OYZE.js";var T=`<!--
  The \`compact\` attribute shrinks the chip height (32px \u2192 28px). It is also
  inherited from an app-wide \`provideCompact(document.body)\`.
-->
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start">
  <div style="display: flex; flex-direction: column; gap: 1rem">
    <h6 class="u-title-s">Default</h6>
    <u-chip-set>
      <u-chip>Nearby</u-chip>
      <u-chip>Open now</u-chip>
      <u-chip>Top rated</u-chip>
    </u-chip-set>
  </div>

  <div style="display: flex; flex-direction: column; gap: 1rem">
    <h6 class="u-title-s">Compact</h6>
    <u-chip-set>
      <u-chip compact>Nearby</u-chip>
      <u-chip compact>Open now</u-chip>
      <u-chip compact>Top rated</u-chip>
    </u-chip-set>
  </div>
</div>
`;function E(c,m){c&1&&(i(0,"span",13),l(1,"star "),n())}function $(c,m){c&1&&(i(0,"span",14),l(1,"star "),n())}function k(c,m){c&1&&(i(0,"span",15),l(1,"arrow_drop_down "),n())}function w(c,m){c&1&&(i(0,"span",16),l(1,"cancel "),n())}var j=(()=>{let m=class m{constructor(){this.removable=!0,this.clickable=!0,this.elevated=!1,this.toggle=!0,this.hideSelectedIcon=!1,this.customRemove=!0,this.selectedIcon=!0,this.leadingIcon=!0,this.trailingIcon=!0,this.updated$=new h,this.template="",this.compactHtml=T,this.updated$.pipe(g(50)).subscribe(()=>this.updateTemplate()),this.updateTemplate()}updateTemplate(){this.template=`
<u-chip${this.getProperties()}>${this.getLeadingIcons()}
  Label${this.getTrailingIcons()}
</u-chip>`.trimStart()}getProperties(){let a={};this.removable&&(a.removable=!0),this.hideSelectedIcon&&(a["hide-selected-icon"]=!0),this.elevated&&(a.elevated=!0),this.clickable&&(a.clickable=!0),this.toggle&&(a.toggle=!0);let d="";for(let e in a){let r=a[e];d+=r===!0?` ${e}`:` ${e}="${r}"`}return d}getLeadingIcons(){if(!this.selectedIcon&&!this.leadingIcon)return"";let a="";return this.selectedIcon&&(a+=`
  <span class="material-symbols-outlined material-symbols-fill u-text-warning" slot="icon-selected">star</span>`),this.leadingIcon&&(a+=`
  <span class="material-symbols-outlined" slot="leading-icon">event</span>`),a}getTrailingIcons(){if(!this.trailingIcon&&!this.customRemove)return"";let a="";return this.trailingIcon&&(a+=`
  <span class="material-symbols-outlined" slot="trailing-icon"arrow_drop_down</span>`),this.customRemove&&(a+=`
  <span class="material-symbols-outlined" slot="remove-icon"cancel</span>`),a}};m.\u0275fac=function(d){return new(d||m)},m.\u0275cmp=_({type:m,selectors:[["docs-chips"]],decls:35,vars:21,consts:[["title","Chips","tag","u-chip, u-chip-set"],["sectionTitle","Live",3,"renderExample","html"],[1,"u-title-m"],["toggle","",3,"change","selected"],[1,"u-title-m","u-mt-large"],["example",""],[3,"remove","elevated","removable","clickable","toggle","hideSelectedIcon"],["class","material-symbols-outlined material-symbols-fill u-text-warning","slot","icon-selected",4,"ngIf"],["class","material-symbols-outlined","slot","leading-icon",4,"ngIf"],["class","material-symbols-outlined","slot","trailing-icon",4,"ngIf"],["class","material-symbols-outlined","slot","remove-icon",4,"ngIf"],["sectionTitle","Compact density (desktop)",3,"html"],["key","chip"],["slot","icon-selected",1,"material-symbols-outlined","material-symbols-fill","u-text-warning"],["slot","leading-icon",1,"material-symbols-outlined"],["slot","trailing-icon",1,"material-symbols-outlined"],["slot","remove-icon",1,"material-symbols-outlined"]],template:function(d,e){d&1&&(i(0,"docs-title",0),l(1,"Compact elements that represent an input, attribute, or action."),n(),i(2,"docs-example",1)(3,"h5",2),l(4,"Settings"),n(),i(5,"u-chip-set")(6,"u-chip",3),p("change",function(t){return e.elevated=t.target.selected,e.updated$.next()}),l(7,"Elevated "),n(),i(8,"u-chip",3),p("change",function(t){return e.leadingIcon=t.target.selected,e.updated$.next()}),l(9,"Leading icon "),n(),i(10,"u-chip",3),p("change",function(t){return e.trailingIcon=t.target.selected,e.updated$.next()}),l(11,"Trailing icon "),n(),i(12,"u-chip",3),p("change",function(t){return e.selectedIcon=t.target.selected,e.updated$.next()}),l(13,"Custom selected icon "),n(),i(14,"u-chip",3),p("change",function(t){return e.customRemove=t.target.selected,e.updated$.next()}),l(15,"Custom remove icon "),n(),i(16,"u-chip",3),p("change",function(t){return e.removable=t.target.selected,e.updated$.next()}),l(17,"Removable "),n(),i(18,"u-chip",3),p("change",function(t){return e.clickable=t.target.selected,e.updated$.next()}),l(19,"Clickable "),n(),i(20,"u-chip",3),p("change",function(t){return e.toggle=t.target.selected,e.updated$.next()}),l(21,"Toggle "),n(),i(22,"u-chip",3),p("change",function(t){return e.hideSelectedIcon=t.target.selected,e.updated$.next()}),l(23,"Hide selected icon "),n()(),i(24,"h5",4),l(25,"Component"),n(),i(26,"div",5)(27,"u-chip",6),p("remove",function(t){return t.preventDefault()}),u(28,E,2,0,"span",7)(29,$,2,0,"span",8),l(30,"Label"),u(31,k,2,0,"span",9)(32,w,2,0,"span",10),n()()(),f(33,"docs-example",11)(34,"docs-apis-table",12)),d&2&&(o(2),s("renderExample",!1)("html",e.template),o(4),s("selected",e.elevated),o(2),s("selected",e.leadingIcon),o(2),s("selected",e.trailingIcon),o(2),s("selected",e.selectedIcon),o(2),s("selected",e.customRemove),o(2),s("selected",e.removable),o(2),s("selected",e.clickable),o(2),s("selected",e.toggle),o(2),s("selected",e.hideSelectedIcon),o(5),s("elevated",e.elevated)("removable",e.removable)("clickable",e.clickable)("toggle",e.toggle)("hideSelectedIcon",e.hideSelectedIcon),o(),s("ngIf",e.selectedIcon),o(),s("ngIf",e.leadingIcon),o(2),s("ngIf",e.trailingIcon),o(),s("ngIf",e.customRemove),o(),s("html",e.compactHtml))},dependencies:[b,v,I,C,y],encapsulation:2});let c=m;return c})();export{j as ChipsComponent};
