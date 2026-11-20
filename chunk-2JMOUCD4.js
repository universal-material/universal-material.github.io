import{b as v,c as h,f,h as y,k as M,l as V,m as C}from"./chunk-WSYNMTQE.js";import{a as b}from"./chunk-VLPIBHPO.js";import{c as w}from"./chunk-JUHLOZQQ.js";import"./chunk-GRAK4QNI.js";import"./chunk-CSQ3XL6T.js";import"./chunk-A2AONSIM.js";import"./chunk-7ANKUTMV.js";import{Lb as g,Na as i,Pb as m,Qb as d,Rb as p,bb as u,qb as a,rb as r,sb as n,tb as s}from"./chunk-QUVZ4KUC.js";import"./chunk-IPU5OYZE.js";var H=`<div class="u-progress show">
  <div
    class="u-progress-indicator"
    style="width: 30%"
  ></div>
</div>
`;var S=`<div class="u-progress indeterminate show">
  <div class="u-progress-indicator"></div>
</div>
`;var P=`<div class="preloader-wrapper">
  <div class="spinner-layer">
    <div class="circle-clipper left">
      <div class="circle"></div>
    </div>
    <div class="gap-patch">
      <div class="circle"></div>
    </div>
    <div class="circle-clipper right">
      <div class="circle"></div>
    </div>
  </div>
</div>
`;var J=(()=>{let l=class l{constructor(){this.determinateHtml=H,this.indeterminateHtml=S,this.circularProgressHtml=P,this.circularValue=.5,this.barValue=.5}};l.\u0275fac=function(o){return new(o||l)},l.\u0275cmp=u({type:l,selectors:[["docs-progress"]],decls:14,vars:8,consts:[["title","Progress","tag","u-progress-bar, u-circular-progress"],["sectionTitle","Indeterminate",3,"html"],["sectionTitle","Determinate",3,"html"],[3,"value"],["type","number","min","0","max","1","step","0.01",3,"ngModelChange","ngModel"],["sectionTitle","Indeterminate circular progress",3,"html"],["sectionTitle","Determinate circular progress",3,"html"]],template:function(o,e){o&1&&(r(0,"docs-title",0),g(1,"Linear and circular indicators that communicate the status of a process."),n(),r(2,"docs-example",1),s(3,"u-progress-bar"),n(),r(4,"docs-example",2),s(5,"u-progress-bar",3),r(6,"div")(7,"input",4),p("ngModelChange",function(t){return d(e.barValue,t)||(e.barValue=t),t}),n()()(),r(8,"docs-example",5),s(9,"u-circular-progress"),n(),r(10,"docs-example",6),s(11,"u-circular-progress",3),r(12,"div")(13,"input",4),p("ngModelChange",function(t){return d(e.circularValue,t)||(e.circularValue=t),t}),n()()()),o&2&&(i(2),a("html",e.indeterminateHtml),i(2),a("html",e.determinateHtml),i(),a("value",e.barValue),i(2),m("ngModel",e.barValue),i(),a("html",e.circularProgressHtml),i(2),a("html",e.circularProgressHtml),i(),a("value",e.circularValue),i(2),m("ngModel",e.circularValue))},dependencies:[C,v,y,h,V,M,f,b,w],encapsulation:2});let c=l;return c})();export{J as ProgressComponent};
