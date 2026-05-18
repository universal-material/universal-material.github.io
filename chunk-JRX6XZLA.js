import{a as f}from"./chunk-5ARTQ4CJ.js";import{d as T}from"./chunk-HDWFW7SF.js";import{a as R}from"./chunk-INOGOXWS.js";import"./chunk-AEZMOOXS.js";import{a as H}from"./chunk-VUSKBRM3.js";import{a as F}from"./chunk-NK2JTL7K.js";import"./chunk-IRARDQTH.js";import"./chunk-FL6TOC2A.js";import"./chunk-G4Y2CES6.js";import{Ab as b,Bb as C,Fb as j,Ma as n,Ua as g,Xa as x,Z as d,gb as S,gc as E,nb as m,ob as c,pb as u,qb as h,zb as v}from"./chunk-GNK3CTVM.js";import{f as l,g as s}from"./chunk-76XQYYO4.js";var w=`<u-text-field
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
  supporting-text="Select a state"
  manual
>
</u-chip-field>
<u-typeahead target-id="text-field"></u-typeahead>

<script>
  const formatter = (state) => state.name;

  const chipField = document.querySelector("u-chip-field");
  chipField.formatter = formatter;

  const typeahead = document.querySelector("u-typeahead");

  typeahead.source = [];
  typeahead.formatter = formatter;
  typeahead.selected = (e) => {
    e.preventDefault();

    const typeahead = e.target;
    typeahead.clear();
    this.chipField.add(e.detail, true);
    typeahead.focus();
  };
<\/script>
`;var O=["chipField"],Z=(()=>{var o,r;let i=class i{constructor(){l(this,o);l(this,r);s(this,o,d(S)),s(this,r,d(g)),this.simpleHtml=w,this.objectResultsHtml=q,this.handlingSelectionHtml=D,this.states=f,this.stateObjects=f.map(t=>({name:t})),this.formatter=t=>t.name,this.resultTemplate=(t,e)=>T`<typeahead-template .state=${e}></typeahead-template>`}selected(t){t.preventDefault();let e=t,a=e.target;a.clear(),this.chipField.nativeElement.add(e.detail),a.focus()}};o=new WeakMap,r=new WeakMap,i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=x({type:i,selectors:[["docs-typeahead"]],viewQuery:function(e,a){if(e&1&&v(O,5),e&2){let y;b(y=C())&&(a.chipField=y.first)}},decls:7,vars:4,consts:[["title","Typeahead","tag","u-typeahead"],["sectionTitle","Items template",3,"renderExample","html"],["example",""],["id","object-field","label","States","supporting-text","Select a state"],["target-id","object-field",3,"source","formatter"],["key","typeahead"]],template:function(e,a){e&1&&(c(0,"docs-title",0),j(1,"Auto-complete input that suggests matching options as the user types."),u(),c(2,"docs-example",1)(3,"div",2),h(4,"u-text-field",3)(5,"u-typeahead",4),u()(),h(6,"docs-apis-table",5)),e&2&&(n(2),m("renderExample",!1)("html",a.handlingSelectionHtml),n(3),m("source",a.stateObjects)("formatter",a.formatter))},dependencies:[E,R,H,F],encapsulation:2});let p=i;return p})();export{Z as TypeaheadComponent};
