import{a as y}from"./chunk-INOGOXWS.js";import"./chunk-AEZMOOXS.js";import{a as h}from"./chunk-VUSKBRM3.js";import{a as f}from"./chunk-NK2JTL7K.js";import"./chunk-IRARDQTH.js";import"./chunk-FL6TOC2A.js";import"./chunk-G4Y2CES6.js";import{Fb as s,Ma as n,Xa as d,gc as u,nb as o,ob as r,pb as m,qb as p,ub as c}from"./chunk-GNK3CTVM.js";import"./chunk-76XQYYO4.js";var v=`<u-chip-field label="Tags"></u-chip-field>
`;var g=`<u-chip-field
  label="Tags"
  manual
></u-chip-field>

<script>
  const chipField = document.querySelector("u-chip-field");

  chipField.formatter = (state) => state.name;
  chipField.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") {
      return;
    }

    e.target.add({ name: chipField.input.value }, true);
    e.target.input.value = "";
  });
<\/script>
`;var M=(()=>{let t=class t{constructor(){this.simpleHtml=v,this.objectValuesHtml=g,this.formatter=i=>i.name}keyDown(i){if(i.key!=="Enter")return;let e=i.target;e.add({name:e.input.value},!0),e.input.value=""}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d({type:t,selectors:[["docs-chip-field"]],decls:7,vars:4,consts:[["title","Chip field","tag","u-chip-field"],["sectionTitle","Simple","alignment","stretch",3,"html"],["sectionTitle","Object value","alignment","stretch",3,"renderExample","html"],["example",""],["label","States","manual","",3,"keydown","formatter"],["key","chipField"]],template:function(e,l){e&1&&(r(0,"docs-title",0),s(1,"A field that renders a chip for each item inside its value."),m(),p(2,"docs-example",1),r(3,"docs-example",2)(4,"div",3)(5,"u-chip-field",4),c("keydown",function(b){return l.keyDown(b)}),m()()(),p(6,"docs-apis-table",5)),e&2&&(n(2),o("html",l.simpleHtml),n(),o("renderExample",!1)("html",l.objectValuesHtml),n(2),o("formatter",l.formatter))},dependencies:[u,y,h,f],encapsulation:2});let a=t;return a})();export{M as ChipFieldComponent};
