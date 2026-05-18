import{b as f,c as y,f as M,h as V,k as C,l as w,m as b}from"./chunk-4ZAOTIWU.js";import{a as h}from"./chunk-VUSKBRM3.js";import{a as v}from"./chunk-NK2JTL7K.js";import"./chunk-IRARDQTH.js";import"./chunk-FL6TOC2A.js";import"./chunk-G4Y2CES6.js";import{Fb as g,Jb as m,Kb as d,Lb as p,Ma as i,Xa as u,nb as a,ob as r,pb as n,qb as s}from"./chunk-GNK3CTVM.js";import"./chunk-76XQYYO4.js";var H=`<div class="u-progress show">
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
`;var J=(()=>{let l=class l{constructor(){this.determinateHtml=H,this.indeterminateHtml=S,this.circularProgressHtml=P,this.circularValue=.5,this.barValue=.5}};l.\u0275fac=function(o){return new(o||l)},l.\u0275cmp=u({type:l,selectors:[["docs-progress"]],decls:14,vars:8,consts:[["title","Progress","tag","u-progress-bar, u-circular-progress"],["sectionTitle","Indeterminate",3,"html"],["sectionTitle","Determinate",3,"html"],[3,"value"],["type","number","min","0","max","1","step","0.01",3,"ngModelChange","ngModel"],["sectionTitle","Indeterminate circular progress",3,"html"],["sectionTitle","Determinate circular progress",3,"html"]],template:function(o,e){o&1&&(r(0,"docs-title",0),g(1,"Linear and circular indicators that communicate the status of a process."),n(),r(2,"docs-example",1),s(3,"u-progress-bar"),n(),r(4,"docs-example",2),s(5,"u-progress-bar",3),r(6,"div")(7,"input",4),p("ngModelChange",function(t){return d(e.barValue,t)||(e.barValue=t),t}),n()()(),r(8,"docs-example",5),s(9,"u-circular-progress"),n(),r(10,"docs-example",6),s(11,"u-circular-progress",3),r(12,"div")(13,"input",4),p("ngModelChange",function(t){return d(e.circularValue,t)||(e.circularValue=t),t}),n()()()),o&2&&(i(2),a("html",e.indeterminateHtml),i(2),a("html",e.determinateHtml),i(),a("value",e.barValue),i(2),m("ngModel",e.barValue),i(),a("html",e.circularProgressHtml),i(2),a("html",e.circularProgressHtml),i(),a("value",e.circularValue),i(2),m("ngModel",e.circularValue))},dependencies:[b,f,V,y,w,C,M,h,v],encapsulation:2});let c=l;return c})();export{J as ProgressComponent};
