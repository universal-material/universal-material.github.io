import{b as C,c as _,f as w,m as y}from"./chunk-4ZAOTIWU.js";import{b as M,c as v}from"./chunk-ZK3E2K3C.js";import"./chunk-HDWFW7SF.js";import{a as S}from"./chunk-INOGOXWS.js";import"./chunk-AEZMOOXS.js";import{a as k}from"./chunk-VUSKBRM3.js";import{a as b}from"./chunk-NK2JTL7K.js";import"./chunk-IRARDQTH.js";import"./chunk-FL6TOC2A.js";import"./chunk-G4Y2CES6.js";import{Fb as l,Jb as m,Kb as c,Lb as d,Ma as r,Xa as u,nb as g,ob as a,pb as o,qb as f,ub as h}from"./chunk-GNK3CTVM.js";import"./chunk-76XQYYO4.js";var x=`<script type="module">
  import { UmSnackbar, SnackbarDuration } from '@universal-material/web';

  UmSnackbar.show({
    message: 'File saved',
    action: 'Undo',
    duration: SnackbarDuration.long,
    showClose: true,
  });
<\/script>
`;var P=(()=>{let n=class n{constructor(){this.exampleHtml=x,this.message="File saved",this.action="Undo"}showSnackbar(){v.show({message:this.message,action:this.action,duration:M.long,showClose:!0})}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=u({type:n,selectors:[["docs-snackbars"]],decls:9,vars:4,consts:[["title","Snackbars","tag","u-snackbar"],["sectionTitle","Usage",3,"renderExample","html"],["example","",1,"u-column"],["label","Message","ngDefaultControl","",3,"ngModelChange","ngModel"],["label","Action","ngDefaultControl","",3,"ngModelChange","ngModel"],[3,"click"],["key","snackbar"]],template:function(i,e){i&1&&(a(0,"docs-title",0),l(1,"Brief, transient messages shown at the bottom of the screen. Created imperatively via `UmSnackbar.show()`."),o(),a(2,"docs-example",1)(3,"div",2)(4,"u-text-field",3),d("ngModelChange",function(t){return c(e.message,t)||(e.message=t),t}),o(),a(5,"u-text-field",4),d("ngModelChange",function(t){return c(e.action,t)||(e.action=t),t}),o(),a(6,"u-button",5),h("click",function(){return e.showSnackbar()}),l(7,"Show snackbar"),o()()(),f(8,"docs-apis-table",6)),i&2&&(r(2),g("renderExample",!1)("html",e.exampleHtml),r(2),m("ngModel",e.message),r(),m("ngModel",e.action))},dependencies:[S,k,b,y,C,_,w],encapsulation:2});let s=n;return s})();export{P as SnackbarsComponent};
