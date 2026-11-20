import{a as f}from"./chunk-5ARTQ4CJ.js";import{a as H}from"./chunk-ZQF2KFMQ.js";import{a as j}from"./chunk-VLPIBHPO.js";import{c as F}from"./chunk-JUHLOZQQ.js";import"./chunk-GRAK4QNI.js";import{d as E}from"./chunk-CEMGHJ4D.js";import"./chunk-GFTA4PL4.js";import"./chunk-CSQ3XL6T.js";import"./chunk-A2AONSIM.js";import"./chunk-7ANKUTMV.js";import{Fb as S,Gb as C,Hb as b,Lb as w,Na as n,_ as l,_a as g,bb as x,jb as v,nc as T,qb as m,rb as c,sb as h,tb as u}from"./chunk-QUVZ4KUC.js";import{f as d,g as p}from"./chunk-IPU5OYZE.js";var R=`<u-text-field
  id="text-field"
  label="States"
  supporting-text="Select a state"
></u-text-field>
<u-typeahead target-id="text-field"></u-typeahead>

<script>
  const typeahead = document.querySelector("u-typeahead");

  typeahead.source = [];
<\/script>
`;var q=`<u-text-field
  id="text-field"
  label="States"
  supporting-text="Select a state"
></u-text-field>
<u-typeahead target-id="text-field"></u-typeahead>

<script>
  const typeahead = document.querySelector("u-typeahead");

  typeahead.source = [];
  typeahead.formatter = (state) => state.name;
<\/script>
`;var D=`<u-chip-field
  id="chip-field"
  label="States"
  supporting-text="Type to add a state"
  manual
>
</u-chip-field>
<u-typeahead target-id="chip-field"></u-typeahead>

<script>
  const states = [
    { id: "ca", name: "California" },
    { id: "tx", name: "Texas" },
    { id: "ny", name: "New York" },
    { id: "fl", name: "Florida" },
    { id: "wa", name: "Washington" },
  ];
  const formatter = (state) => state.name;

  const chipField = document.querySelector("u-chip-field");
  chipField.formatter = formatter;

  const typeahead = document.querySelector("u-typeahead");
  typeahead.source = (term) => states.filter((s) => s.name.toLowerCase().includes(term.toLowerCase()));
  typeahead.formatter = formatter;

  // The typeahead dispatches a \`selected\` event \u2014 listen for it (do NOT assign a
  // \`.selected\` property). preventDefault keeps the chosen value out of the input;
  // we add it to the chip-field instead.
  typeahead.addEventListener("selected", (e) => {
    e.preventDefault();
    typeahead.clear();
    chipField.add(e.detail, true);
    typeahead.focus();
  });
<\/script>
`;var L=["chipField"],Z=(()=>{var o,s;let i=class i{constructor(){d(this,o);d(this,s);p(this,o,l(v)),p(this,s,l(g)),this.simpleHtml=R,this.objectResultsHtml=q,this.handlingSelectionHtml=D,this.states=f,this.stateObjects=f.map(t=>({name:t})),this.formatter=t=>t.name,this.resultTemplate=(t,e)=>E`<typeahead-template .state=${e}></typeahead-template>`}selected(t){t.preventDefault();let e=t,a=e.target;a.clear(),this.chipField.nativeElement.add(e.detail),a.focus()}};o=new WeakMap,s=new WeakMap,i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=x({type:i,selectors:[["docs-typeahead"]],viewQuery:function(e,a){if(e&1&&S(L,5),e&2){let y;C(y=b())&&(a.chipField=y.first)}},decls:7,vars:4,consts:[["title","Typeahead","tag","u-typeahead"],["sectionTitle","Items template",3,"renderExample","html"],["example",""],["id","object-field","label","States","supporting-text","Select a state"],["target-id","object-field",3,"source","formatter"],["key","typeahead"]],template:function(e,a){e&1&&(c(0,"docs-title",0),w(1,"Auto-complete input that suggests matching options as the user types."),h(),c(2,"docs-example",1)(3,"div",2),u(4,"u-text-field",3)(5,"u-typeahead",4),h()(),u(6,"docs-apis-table",5)),e&2&&(n(2),m("renderExample",!1)("html",a.handlingSelectionHtml),n(3),m("source",a.stateObjects)("formatter",a.formatter))},dependencies:[T,H,j,F],encapsulation:2});let r=i;return r})();export{Z as TypeaheadComponent};
