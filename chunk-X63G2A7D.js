import{a as d}from"./chunk-ZQF2KFMQ.js";import{a as r}from"./chunk-VLPIBHPO.js";import{c}from"./chunk-JUHLOZQQ.js";import"./chunk-GRAK4QNI.js";import"./chunk-GFTA4PL4.js";import"./chunk-CSQ3XL6T.js";import"./chunk-A2AONSIM.js";import"./chunk-7ANKUTMV.js";import{Lb as i,Na as t,bb as m,qb as o,rb as a,sb as p,tb as u}from"./chunk-QUVZ4KUC.js";import"./chunk-IPU5OYZE.js";var v=`<u-select label="Color">
  <u-option value="red">Red</u-option>
  <u-option value="green">Green</u-option>
  <u-option value="blue">Blue</u-option>
</u-select>
`;var b=`<u-select
  variant="filled"
  label="Filled (default)"
>
  <u-option value="a">Option A</u-option>
  <u-option value="b">Option B</u-option>
  <u-option value="c">Option C</u-option>
</u-select>

<u-select
  variant="outlined"
  label="Outlined"
>
  <u-option value="a">Option A</u-option>
  <u-option value="b">Option B</u-option>
  <u-option value="c">Option C</u-option>
</u-select>
`;var h=`<u-select label="Color">
  <u-option value="red">Red</u-option>
  <u-option
    value="green"
    selected
    >Green</u-option
  >
  <u-option value="blue">Blue</u-option>
</u-select>
`;var f=`<u-select
  label="Disabled"
  disabled
>
  <u-option value="a">Option A</u-option>
  <u-option value="b">Option B</u-option>
</u-select>
`;var G=(()=>{let e=class e{constructor(){this.basicHtml=v,this.variantsHtml=b,this.selectedHtml=h,this.disabledHtml=f}};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=m({type:e,selectors:[["docs-select"]],decls:12,vars:4,consts:[["title","Select","tag","u-select, u-option"],["sectionTitle","Usage",3,"html"],["sectionTitle","Variants",3,"html"],["sectionTitle","Initial selection",3,"html"],["sectionTitle","Disabled",3,"html"],["key","select"],["key","option"]],template:function(l,n){l&1&&(a(0,"docs-title",0),i(1,"Represents a control that provides a menu of options."),p(),u(2,"docs-example",1)(3,"docs-example",2),a(4,"docs-example",3),i(5," Set the initial selection with "),a(6,"code"),i(7,"selected"),p(),i(8,` on the option. With none, nothing is selected and the field starts empty.
`),p(),u(9,"docs-example",4)(10,"docs-apis-table",5)(11,"docs-apis-table",6)),l&2&&(t(2),o("html",n.basicHtml),t(),o("html",n.variantsHtml),t(),o("html",n.selectedHtml),t(5),o("html",n.disabledHtml))},dependencies:[d,r,c],styles:["u-select[_ngcontent-%COMP%]::part(Select){color:red}"]});let s=e;return s})();export{G as SelectComponent};
