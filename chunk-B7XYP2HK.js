import{b,c as k,f as S,m as C}from"./chunk-WSYNMTQE.js";import{a as v}from"./chunk-ZQF2KFMQ.js";import{a as M}from"./chunk-VLPIBHPO.js";import{c as y}from"./chunk-JUHLOZQQ.js";import"./chunk-GRAK4QNI.js";import{b as _,c as w}from"./chunk-UJRNOXMF.js";import"./chunk-CEMGHJ4D.js";import"./chunk-GFTA4PL4.js";import"./chunk-CSQ3XL6T.js";import"./chunk-A2AONSIM.js";import"./chunk-7ANKUTMV.js";import{Lb as l,Na as r,Pb as m,Qb as c,Rb as d,bb as u,qb as g,rb as a,sb as o,tb as f,zb as h}from"./chunk-QUVZ4KUC.js";import"./chunk-IPU5OYZE.js";var x=`<script type="module">
  import { Snackbar, SnackbarDuration } from "@universal-material/web";

  Snackbar.show({
    message: "File saved",
    action: "Undo",
    duration: SnackbarDuration.long,
    showClose: true,
  });
<\/script>
`;var P=(()=>{let n=class n{constructor(){this.exampleHtml=x,this.message="File saved",this.action="Undo"}showSnackbar(){w.show({message:this.message,action:this.action,duration:_.long,showClose:!0})}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=u({type:n,selectors:[["docs-snackbars"]],decls:9,vars:4,consts:[["title","Snackbars","tag","u-snackbar"],["sectionTitle","Usage",3,"renderExample","html"],["example","",1,"u-column"],["label","Message","ngDefaultControl","",3,"ngModelChange","ngModel"],["label","Action","ngDefaultControl","",3,"ngModelChange","ngModel"],[3,"click"],["key","snackbar"]],template:function(i,e){i&1&&(a(0,"docs-title",0),l(1,"Brief, transient messages shown at the bottom of the screen. Created imperatively via `Snackbar.show()`."),o(),a(2,"docs-example",1)(3,"div",2)(4,"u-text-field",3),d("ngModelChange",function(t){return c(e.message,t)||(e.message=t),t}),o(),a(5,"u-text-field",4),d("ngModelChange",function(t){return c(e.action,t)||(e.action=t),t}),o(),a(6,"u-button",5),h("click",function(){return e.showSnackbar()}),l(7,"Show snackbar"),o()()(),f(8,"docs-apis-table",6)),i&2&&(r(2),g("renderExample",!1)("html",e.exampleHtml),r(2),m("ngModel",e.message),r(),m("ngModel",e.action))},dependencies:[v,M,y,C,b,k,S],encapsulation:2});let s=n;return s})();export{P as SnackbarsComponent};
