import{a as v}from"./chunk-ZQF2KFMQ.js";import{a as f}from"./chunk-VLPIBHPO.js";import{c as h}from"./chunk-JUHLOZQQ.js";import"./chunk-GRAK4QNI.js";import"./chunk-GFTA4PL4.js";import"./chunk-CSQ3XL6T.js";import"./chunk-A2AONSIM.js";import"./chunk-7ANKUTMV.js";import{Lb as d,Na as l,bb as s,nc as u,qb as r,rb as n,sb as m,tb as o,zb as c}from"./chunk-QUVZ4KUC.js";import"./chunk-IPU5OYZE.js";var y=`<u-chip-field label="Tags"></u-chip-field>
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
`;var F=`<u-chip-field
  label="Recipients"
  manual
></u-chip-field>

<script>
  const chipField = document.querySelector("u-chip-field");

  // The returned string is rendered as HTML (sanitized with DOMPurify).
  // Display only: the value stays the objects below.
  chipField.formatter = (person) =>
    \`<strong>\${person.name}</strong> <span style="color: var(--u-color-on-surface-variant)">\${person.email}</span>\`;

  chipField.value = [
    { name: "Ana", email: "ana@example.com" },
    { name: "Bruno", email: "bruno@example.com" },
  ];
<\/script>
`;var $=(()=>{let a=class a{constructor(){this.simpleHtml=y,this.objectValuesHtml=g,this.htmlFormatterHtml=F,this.formatter=e=>e.name,this.recipients=[{name:"Ana",email:"ana@example.com"},{name:"Bruno",email:"bruno@example.com"}],this.htmlFormatter=e=>`<strong>${e.name}</strong> <span style="color: var(--u-color-on-surface-variant)">${e.email}</span>`}keyDown(e){if(e.key!=="Enter")return;let t=e.target;t.add({name:t.input.value},!0),t.input.value=""}};a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=s({type:a,selectors:[["docs-chip-field"]],decls:10,vars:8,consts:[["title","Chip field","tag","u-chip-field"],["sectionTitle","Simple","alignment","stretch",3,"html"],["sectionTitle","Object value","alignment","stretch",3,"renderExample","html"],["example",""],["label","States","manual","",3,"keydown","formatter"],["sectionTitle","HTML formatter","alignment","stretch",3,"renderExample","html"],["label","Recipients","manual","",3,"formatter","value"],["key","chipField"]],template:function(t,i){t&1&&(n(0,"docs-title",0),d(1,"A field that renders a chip for each item inside its value."),m(),o(2,"docs-example",1),n(3,"docs-example",2)(4,"div",3)(5,"u-chip-field",4),c("keydown",function(b){return i.keyDown(b)}),m()()(),n(6,"docs-example",5)(7,"div",3),o(8,"u-chip-field",6),m()(),o(9,"docs-apis-table",7)),t&2&&(l(2),r("html",i.simpleHtml),l(),r("renderExample",!1)("html",i.objectValuesHtml),l(2),r("formatter",i.formatter),l(),r("renderExample",!1)("html",i.htmlFormatterHtml),l(2),r("formatter",i.htmlFormatter)("value",i.recipients))},dependencies:[u,v,f,h],encapsulation:2});let p=a;return p})();export{$ as ChipFieldComponent};
