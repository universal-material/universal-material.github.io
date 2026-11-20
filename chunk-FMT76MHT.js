import{a as b}from"./chunk-ZQF2KFMQ.js";import{a as h}from"./chunk-VLPIBHPO.js";import{c as n}from"./chunk-JUHLOZQQ.js";import"./chunk-GRAK4QNI.js";import"./chunk-GFTA4PL4.js";import"./chunk-CSQ3XL6T.js";import"./chunk-A2AONSIM.js";import"./chunk-7ANKUTMV.js";import{Lb as d,Na as t,bb as c,qb as i,rb as m,sb as s,tb as r}from"./chunk-QUVZ4KUC.js";import"./chunk-IPU5OYZE.js";var u=`<label> <u-checkbox></u-checkbox>Default </label>
<label> <u-checkbox checked></u-checkbox>Checked </label>
<label> <u-checkbox indeterminate></u-checkbox>Indeterminate </label>
<label> <u-checkbox disabled></u-checkbox>Disabled </label>
`;var p=`<label> <u-radio name="radio"></u-radio>Radio A </label>
<label> <u-radio name="radio"></u-radio>Radio B </label>
<label> <u-radio name="radio"></u-radio>Radio C </label>
<label>
  <u-radio
    name="radio"
    disabled
  >
  </u-radio
  >Radio C
</label>
`;var k=`<label> <u-switch></u-switch>Switch </label>
<label> <u-switch disabled></u-switch>Switch </label>
`;var x=`<u-checkbox-list-item>Notifications</u-checkbox-list-item>
<u-radio-list-item name="theme">Light</u-radio-list-item>
<u-radio-list-item
  name="theme"
  checked
  >Dark</u-radio-list-item
>
<u-switch-list-item>Use system theme</u-switch-list-item>
`;var B=(()=>{let e=class e{constructor(){this.checkboxHtml=u,this.radioHtml=p,this.switchHtml=k,this.listItemsHtml=x}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["docs-selection-controls"]],decls:9,vars:4,consts:[["title","Selection controls","tag","u-checkbox, u-radio, u-switch"],["sectionTitle","Checkbox",3,"html"],["sectionTitle","Radio",3,"html"],["sectionTitle","Switch",3,"html"],["sectionTitle","List items",3,"html"],["key","checkbox"],["key","radio"],["key","switch"]],template:function(o,l){o&1&&(m(0,"docs-title",0),d(1,"Form controls for boolean and mutually-exclusive choices: checkbox, radio button and switch."),s(),r(2,"docs-example",1)(3,"docs-example",2)(4,"docs-example",3)(5,"docs-example",4)(6,"docs-apis-table",5)(7,"docs-apis-table",6)(8,"docs-apis-table",7)),o&2&&(t(2),i("html",l.checkboxHtml),t(),i("html",l.radioHtml),t(),i("html",l.switchHtml),t(),i("html",l.listItemsHtml))},dependencies:[b,h,n],encapsulation:2});let a=e;return a})();export{B as SelectionControlsComponent};
