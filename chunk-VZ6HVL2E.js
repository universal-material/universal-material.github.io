import{a as v}from"./chunk-VLPIBHPO.js";import{c as b}from"./chunk-JUHLOZQQ.js";import"./chunk-GRAK4QNI.js";import"./chunk-CSQ3XL6T.js";import"./chunk-A2AONSIM.js";import"./chunk-7ANKUTMV.js";import{La as s,Lb as e,Na as n,Nb as f,bb as g,lb as h,mb as x,na as p,qb as o,rb as a,sb as t,tb as u,zb as y}from"./chunk-QUVZ4KUC.js";import"./chunk-IPU5OYZE.js";var E=[{code:"BR",country:"Brazil",continent:"South America",capital:"Bras\xEDlia",population:216422446,area:8515767},{code:"AR",country:"Argentina",continent:"South America",capital:"Buenos Aires",population:45773884,area:2780400},{code:"CO",country:"Colombia",continent:"South America",capital:"Bogot\xE1",population:52085168,area:1141748},{code:"CL",country:"Chile",continent:"South America",capital:"Santiago",population:19629590,area:756102},{code:"US",country:"United States",continent:"North America",capital:"Washington, D.C.",population:339996563,area:9833520},{code:"MX",country:"Mexico",continent:"North America",capital:"Mexico City",population:128455567,area:1964375},{code:"CA",country:"Canada",continent:"North America",capital:"Ottawa",population:38781291,area:9984670},{code:"DE",country:"Germany",continent:"Europe",capital:"Berlin",population:83294633,area:357592},{code:"FR",country:"France",continent:"Europe",capital:"Paris",population:64756584,area:643801},{code:"IT",country:"Italy",continent:"Europe",capital:"Rome",population:58870762,area:301340},{code:"PT",country:"Portugal",continent:"Europe",capital:"Lisbon",population:10247605,area:92212},{code:"JP",country:"Japan",continent:"Asia",capital:"Tokyo",population:123294513,area:377975},{code:"IN",country:"India",continent:"Asia",capital:"New Delhi",population:1428627663,area:3287263},{code:"KR",country:"South Korea",continent:"Asia",capital:"Seoul",population:51784059,area:100210},{code:"NG",country:"Nigeria",continent:"Africa",capital:"Abuja",population:223804632,area:923768},{code:"EG",country:"Egypt",continent:"Africa",capital:"Cairo",population:112716598,area:1002450},{code:"KE",country:"Kenya",continent:"Africa",capital:"Nairobi",population:55100586,area:580367},{code:"AU",country:"Australia",continent:"Oceania",capital:"Canberra",population:26439111,area:7692024}];var C=`<u-grid
  style="height: 400px"
  key-expr="code"
  selection-mode="multiple"
  show-checkboxes
  show-filter-row
  show-search-panel
></u-grid>

<script type="module">
  const grid = document.querySelector('u-grid');

  grid.columns = [
    { path: 'country', label: 'Country' },
    { path: 'continent', label: 'Continent' },
    { path: 'population', label: 'Population', dataType: 'number', format: { useGrouping: true } },
  ];
  grid.items = countries;

  grid.addEventListener('u-grid-selection-change', () => {
    console.log(grid.selectedKeys); // ['BR', 'JP', ...]
  });
<\/script>
`;var S=`<u-grid
  style="height: 400px"
  auto-expand-groups
></u-grid>

<script type="module">
  const grid = document.querySelector('u-grid');

  grid.columns = [
    { path: 'continent', label: 'Continent', groupIndex: 0 },
    { path: 'country', label: 'Country' },
    { path: 'population', label: 'Population', dataType: 'number', format: { useGrouping: true } },
  ];
  grid.summary = {
    group: [{ column: 'population', type: 'sum', display: 'column' }],
    total: [
      { column: 'country', type: 'count' },
      { column: 'population', type: 'sum' },
    ],
  };
  grid.items = countries;
<\/script>
`;var w=`npm install @universal-material/data-grid
`;var _=`<u-grid style="height: 360px"></u-grid>

<script type="module">
  // Registers <u-grid> once for the whole app.
  import '@universal-material/data-grid';

  const grid = document.querySelector('u-grid');

  // Columns and rows are properties (arrays), not attributes.
  grid.columns = [
    { path: 'country', label: 'Country' },
    { path: 'capital', label: 'Capital' },
    { path: 'population', label: 'Population', dataType: 'number', format: { useGrouping: true } },
    { path: 'area', label: 'Area (km\xB2)', dataType: 'number', format: { useGrouping: true } },
  ];
  grid.items = [
    { country: 'Brazil', capital: 'Bras\xEDlia', population: 216422446, area: 8515767 },
    { country: 'Japan', capital: 'Tokyo', population: 123294513, area: 377975 },
    // ...
  ];
<\/script>
`;function T(r,l){r&1&&(a(0,"p",10),e(1," The live examples could not load the grid from jsDelivr. The code below still shows how to use it. "),t())}var I="https://cdn.jsdelivr.net/npm/@universal-material/data-grid@0.1/dist/grid.min.js",m=null,G=()=>customElements.get("u-grid")?Promise.resolve():(m??=import(I).catch(r=>{throw m=null,r}),m),V=(()=>{let l=class l{constructor(){this.docsUrl="https://universal-material.github.io/data-grid/",this.repoUrl="https://github.com/erichideyuki/universal-data-grid",this.status=p("loading"),this.selectedKeys=p([]),this.installHtml=w,this.usageHtml=_,this.groupingHtml=S,this.filteringHtml=C,this.countries=E,this.usageColumns=[{path:"country",label:"Country"},{path:"capital",label:"Capital"},{path:"population",label:"Population",dataType:"number",format:{useGrouping:!0}},{path:"area",label:"Area (km\xB2)",dataType:"number",format:{useGrouping:!0}}],this.groupingColumns=[{path:"continent",label:"Continent",groupIndex:0},{path:"country",label:"Country"},{path:"population",label:"Population",dataType:"number",format:{useGrouping:!0}}],this.groupingSummary={group:[{column:"population",type:"sum",display:"column"}],total:[{column:"country",type:"count"},{column:"population",type:"sum"}]},this.filteringColumns=[{path:"country",label:"Country"},{path:"continent",label:"Continent"},{path:"population",label:"Population",dataType:"number",format:{useGrouping:!0}}]}ngOnInit(){G().then(()=>this.status.set("ready"),()=>this.status.set("error"))}onSelectionChange(c){this.selectedKeys.set(c.target.selectedKeys)}};l.\u0275fac=function(d){return new(d||l)},l.\u0275cmp=g({type:l,selectors:[["docs-data-grid"]],decls:110,vars:21,consts:[["title","Data grid","tag","u-grid"],["target","_blank","rel","noopener",1,"data-grid-docs-cta",3,"href"],[1,"data-grid-docs-cta-icon","material-symbols-outlined"],[1,"data-grid-docs-cta-text"],[1,"data-grid-docs-cta-title"],[1,"data-grid-docs-cta-sub"],[1,"data-grid-docs-cta-arrow","material-symbols-outlined"],[1,"u-headline-m","data-grid-heading"],[1,"data-grid-highlights"],["sectionTitle","Install",3,"renderExample","html","language"],[1,"data-grid-load-error"],["sectionTitle","Usage","fluid","",3,"renderExample","html"],["example","",1,"data-grid-demo"],[2,"height","360px",3,"columns","items"],["sectionTitle","Grouping and summaries","fluid","",3,"renderExample","html"],["auto-expand-groups","",2,"height","400px",3,"columns","summary","items"],["sectionTitle","Filtering and selection","fluid","",3,"renderExample","html"],["key-expr","code","selection-mode","multiple","show-checkboxes","","show-filter-row","","show-search-panel","",2,"height","400px",3,"u-grid-selection-change","columns","items"],[1,"data-grid-demo-status"],[1,"data-grid-more"],["target","_blank","rel","noopener",3,"href"]],template:function(d,i){d&1&&(a(0,"docs-title",0),e(1," A fast, accessible data grid for large data sets, published as its own package, "),a(2,"code"),e(3,"@universal-material/data-grid"),t(),e(4,`. It is a standard custom element built with Lit, so it works in plain HTML and in any framework.
`),t(),a(5,"a",1)(6,"span",2),e(7,"table_view"),t(),a(8,"span",3)(9,"span",4),e(10,"Data grid documentation"),t(),a(11,"span",5),e(12,"Live examples of every feature, with their source code and the full API"),t()(),a(13,"span",6),e(14,"arrow_outward"),t()(),a(15,"h5",7),e(16,"Highlights"),t(),a(17,"ul",8)(18,"li")(19,"strong"),e(20,"Millions of rows"),t(),e(21," with row and column virtualization."),t(),a(22,"li")(23,"strong"),e(24,"Remote data"),t(),e(25,": the server filters, sorts, groups, summarizes and pages; only visible blocks load."),t(),a(26,"li")(27,"strong"),e(28,"Data shaping"),t(),e(29,": multi-column sorting, filter row, search panel, header filters, grouping by drag and drop, summaries, tree data and master-detail. "),t(),a(30,"li")(31,"strong"),e(32,"Editing"),t(),e(33," in cell, row and batch modes, with validation. Your items are never mutated."),t(),a(34,"li")(35,"strong"),e(36,"Real-time updates"),t(),e(37," with "),a(38,"code"),e(39,"applyChanges()"),t(),e(40," and "),a(41,"code"),e(42,"reshapeOnChanges"),t(),e(43,"."),t(),a(44,"li")(45,"strong"),e(46,"14 languages"),t(),e(47," built in, plus right-to-left layout."),t(),a(48,"li")(49,"strong"),e(50,"Accessible"),t(),e(51,": WAI-ARIA grid pattern, full keyboard support, WCAG 2.2 AA."),t(),a(52,"li")(53,"strong"),e(54,"SSR and theming"),t(),e(55,": renders with "),a(56,"code"),e(57,"@lit-labs/ssr"),t(),e(58," and reads the same "),a(59,"code"),e(60,"--u-color-*"),t(),e(61," tokens as the rest of Universal Material. "),t()(),a(62,"docs-example",9),e(63," The grid is not part of "),a(64,"code"),e(65,"@universal-material/web"),t(),e(66,`: install its own package. Lit is a regular dependency, shared with the rest of your app.
`),t(),h(67,T,2,0,"p",10),a(68,"docs-example",11),e(69," Import the package once, give the grid a height (it fills its container), then set "),a(70,"code"),e(71,"columns"),t(),e(72," and "),a(73,"code"),e(74,"items"),t(),e(75," as properties. Click a header to sort; "),a(76,"kbd"),e(77,"Shift"),t(),e(78,"+click sorts by several columns. "),a(79,"div",12),u(80,"u-grid",13),t()(),a(81,"docs-example",14)(82,"code"),e(83,"groupIndex"),t(),e(84," groups by a column; drag another header to the bar above to add a level, or a chip back to ungroup. "),a(85,"code"),e(86,"summary"),t(),e(87," adds totals at the bottom and per group. "),a(88,"div",12),u(89,"u-grid",15),t()(),a(90,"docs-example",16),e(91," Attributes turn on the filter row, the search panel and row selection with checkboxes. "),a(92,"code"),e(93,"selectedKeys"),t(),e(94," holds the "),a(95,"code"),e(96,"key-expr"),t(),e(97," values of the selected rows. "),a(98,"div",12)(99,"u-grid",17),y("u-grid-selection-change",function(P){return i.onSelectionChange(P)}),t(),a(100,"p",18),e(101),t()()(),a(102,"p",19),e(103," Editing, remote data, tree data, export and more are in the "),a(104,"a",20),e(105,"data grid documentation"),t(),e(106,"; the full API reference is on "),a(107,"a",20),e(108,"GitHub"),t(),e(109,`.
`),t()),d&2&&(n(5),o("href",i.docsUrl,s),n(57),o("renderExample",!1)("html",i.installHtml)("language","shell"),n(5),x(i.status()==="error"?67:-1),n(),o("renderExample",!1)("html",i.usageHtml),n(12),o("columns",i.usageColumns)("items",i.countries),n(),o("renderExample",!1)("html",i.groupingHtml),n(8),o("columns",i.groupingColumns)("summary",i.groupingSummary)("items",i.countries),n(),o("renderExample",!1)("html",i.filteringHtml),n(9),o("columns",i.filteringColumns)("items",i.countries),n(2),f("Selected: ",i.selectedKeys().join(", ")||"none"),n(3),o("href",i.docsUrl,s),n(3),o("href",i.repoUrl,s))},dependencies:[v,b],styles:["[_nghost-%COMP%]{display:block}.data-grid-docs-cta[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;max-width:720px;margin-bottom:48px;padding:20px 24px;border:1px solid var(--u-color-outline-variant);border-radius:14px;background:color-mix(in srgb,var(--u-color-primary) 8%,var(--u-color-surface-container-lowest));color:var(--u-color-on-surface);text-decoration:none;transition:background .18s,border-color .18s}.data-grid-docs-cta[_ngcontent-%COMP%]:hover{border-color:var(--u-color-primary);background:color-mix(in srgb,var(--u-color-primary) 14%,var(--u-color-surface-container-lowest))}.data-grid-docs-cta[_ngcontent-%COMP%]:hover   .data-grid-docs-cta-arrow[_ngcontent-%COMP%]{transform:translate(2px,-2px);color:var(--u-color-primary)}.data-grid-docs-cta-icon[_ngcontent-%COMP%]{font-size:32px;color:var(--u-color-primary);flex-shrink:0}.data-grid-docs-cta-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:0;line-height:1.3}.data-grid-docs-cta-title[_ngcontent-%COMP%]{font-size:18px;font-weight:600}.data-grid-docs-cta-sub[_ngcontent-%COMP%]{margin-top:4px;font-size:14px;color:var(--u-color-on-surface-variant)}.data-grid-docs-cta-arrow[_ngcontent-%COMP%]{font-size:24px;color:var(--u-color-on-surface-variant);flex-shrink:0;transition:transform .18s,color .18s}.data-grid-heading[_ngcontent-%COMP%]{margin:0 0 16px;font-weight:600}.data-grid-highlights[_ngcontent-%COMP%]{max-width:720px;margin:0 0 3rem;padding-inline-start:20px;line-height:1.6;color:var(--u-color-on-surface-variant)}.data-grid-highlights[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]{margin-top:6px}.data-grid-highlights[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--u-color-on-surface)}.data-grid-demo[_ngcontent-%COMP%]{padding-inline:24px}.data-grid-demo-status[_ngcontent-%COMP%]{margin:12px 0 0;font-size:14px;color:var(--u-color-on-surface-variant)}.data-grid-load-error[_ngcontent-%COMP%]{max-width:720px;padding:12px 16px;border-radius:12px;background:var(--u-color-error-container);color:var(--u-color-on-error-container)}.data-grid-more[_ngcontent-%COMP%]{margin-block:3rem 0;color:var(--u-color-on-surface-variant)}"]});let r=l;return r})();export{V as DataGridComponent};
