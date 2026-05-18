import{a as x}from"./chunk-5ARTQ4CJ.js";import{a as D,b as E}from"./chunk-TUYN5NLF.js";import{b as T,c as _,f as A,m as B}from"./chunk-4ZAOTIWU.js";import{a as O}from"./chunk-INOGOXWS.js";import"./chunk-AEZMOOXS.js";import{a as H}from"./chunk-VUSKBRM3.js";import{a as M}from"./chunk-NK2JTL7K.js";import"./chunk-IRARDQTH.js";import"./chunk-FL6TOC2A.js";import"./chunk-G4Y2CES6.js";import{Fb as r,Gb as h,Hb as b,Jb as g,Kb as C,Lb as y,Ma as t,Xa as c,gc as S,kb as d,lb as f,mb as v,nb as l,ob as n,pb as a,qb as m}from"./chunk-GNK3CTVM.js";import"./chunk-76XQYYO4.js";var w=`<u-select label="Color">
  <u-option value="red">Red</u-option>
  <u-option value="green">Green</u-option>
  <u-option value="blue">Blue</u-option>
</u-select>
`;var k=`<u-select
  label="Filled (default)"
  variant="filled"
>
  <u-option value="a">Option A</u-option>
  <u-option value="b">Option B</u-option>
  <u-option value="c">Option C</u-option>
</u-select>

<u-select
  label="Outlined"
  variant="outlined"
>
  <u-option value="a">Option A</u-option>
  <u-option value="b">Option B</u-option>
  <u-option value="c">Option C</u-option>
</u-select>
`;var F=`<u-select
  label="State"
  [(ngModel)]="state"
  ngDefaultControl
>
  @for (s of states; track s) {
    <u-option [value]="s">{{ s }}</u-option>
  }
</u-select>
`;var U=`<u-select
  label="Disabled"
  disabled
>
  <u-option value="a">Option A</u-option>
  <u-option value="b">Option B</u-option>
</u-select>
`;function R(i,o){if(i&1&&(n(0,"u-option",6),r(1),a()),i&2){let u=o.$implicit;l("value",u),t(),h(u)}}var ae=(()=>{let o=class o{constructor(){this.basicHtml=w,this.variantsHtml=k,this.statesHtml=F,this.disabledHtml=U,this.state="California",this.states=x}};o.\u0275fac=function(s){return new(s||o)},o.\u0275cmp=c({type:o,selectors:[["docs-select"]],decls:14,vars:7,consts:[["title","Select","tag","u-select, u-option"],["sectionTitle","Usage",3,"html"],["sectionTitle","Variants",3,"html"],["sectionTitle","Bound to ngModel",3,"html","renderExample"],["example","",1,"u-column"],["label","State","ngDefaultControl","",3,"ngModelChange","ngModel"],[3,"value"],["sectionTitle","Disabled",3,"html"],["key","select"],["key","option"]],template:function(s,e){s&1&&(n(0,"docs-title",0),r(1,"Represents a control that provides a menu of options. Mirrors the behavior of the native `<select>` and integrates with Angular forms via the `UmSelectControlValueAccessor` directive."),a(),m(2,"docs-example",1)(3,"docs-example",2),n(4,"docs-example",3)(5,"div",4)(6,"u-select",5),y("ngModelChange",function(p){return C(e.state,p)||(e.state=p),p}),f(7,R,2,2,"u-option",6,d),a(),n(9,"p"),r(10),a()()(),m(11,"docs-example",7)(12,"docs-apis-table",8)(13,"docs-apis-table",9)),s&2&&(t(2),l("html",e.basicHtml),t(),l("html",e.variantsHtml),t(),l("html",e.statesHtml)("renderExample",!1),t(2),g("ngModel",e.state),t(),v(e.states),t(3),b("Selected: ",e.state),t(),l("html",e.disabledHtml))},dependencies:[S,B,T,_,A,D,E,O,H,M],styles:["u-select[_ngcontent-%COMP%]::part(Select){color:red}"]});let i=o;return i})();export{ae as SelectComponent};
