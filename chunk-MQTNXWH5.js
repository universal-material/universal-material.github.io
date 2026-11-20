import{a as b}from"./chunk-ZQF2KFMQ.js";import{a as g}from"./chunk-VLPIBHPO.js";import{c as u}from"./chunk-JUHLOZQQ.js";import"./chunk-GRAK4QNI.js";import"./chunk-GFTA4PL4.js";import"./chunk-CSQ3XL6T.js";import"./chunk-A2AONSIM.js";import"./chunk-7ANKUTMV.js";import{Lb as e,Mb as c,Na as o,bb as p,qb as l,rb as t,sb as n,tb as m,zb as d}from"./chunk-QUVZ4KUC.js";import"./chunk-IPU5OYZE.js";var h=`<u-button
  id="toggle"
  variant="filled"
  >Expand</u-button
>
<u-collapse id="demo">
  <p>Mauris sit amet ligula sit amet erat porttitor finibus. Suspendisse rutrum massa eget magna porta lobortis.</p>
</u-collapse>

<script type="module">
  const btn = document.getElementById("toggle");
  const collapse = document.getElementById("demo");
  btn.addEventListener("click", () => {
    collapse.open = !collapse.open;
    btn.textContent = collapse.open ? "Collapse" : "Expand";
  });
<\/script>
`;var v=`<u-card
  variant="outlined"
  style="padding: 1rem; max-width: 24rem"
>
  <u-button
    id="details-toggle"
    variant="text"
    >Show details</u-button
  >
  <u-collapse id="details">
    <div style="padding-top: 0.5rem">
      Use <code>u-collapse</code> as a building block whenever you need a reveal-on-demand animation.
    </div>
  </u-collapse>
</u-card>

<script type="module">
  const btn = document.getElementById("details-toggle");
  const collapse = document.getElementById("details");
  btn.addEventListener("click", () => {
    collapse.open = !collapse.open;
  });
<\/script>
`;var O=(()=>{let a=class a{constructor(){this.usageHtml=h,this.insideCardHtml=v,this.open=!1,this.cardOpen=!1}};a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=p({type:a,selectors:[["docs-collapse"]],decls:35,vars:7,consts:[["title","Collapse"],["sectionTitle","Usage",3,"renderExample","html"],["example",""],["variant","filled",3,"click"],[3,"open"],["sectionTitle","Inside a card",3,"renderExample","html"],["variant","outlined",2,"padding","1rem","max-width","24rem"],["variant","text",3,"click"],[2,"padding-top","0.5rem"],["key","collapse"]],template:function(s,i){s&1&&(t(0,"docs-title",0),e(1,"Animates an element's height between its natural content size and zero. Toggle the "),t(2,"code"),e(3,"open"),n(),e(4," attribute to play the animation."),n(),t(5,"docs-example",1),e(6,"Set "),t(7,"code"),e(8,"open"),n(),e(9," on the host to expand, remove it to collapse. The component measures its slotted content with a "),t(10,"code"),e(11,"ResizeObserver"),n(),e(12,", so dynamic content stays in sync. "),t(13,"div",2)(14,"u-button",3),d("click",function(){return i.open=!i.open}),e(15),n(),t(16,"u-collapse",4)(17,"p"),e(18," Mauris sit amet ligula sit amet erat porttitor finibus. Suspendisse rutrum massa eget magna porta lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. "),n()()()(),t(19,"docs-example",5),e(20,"Compose "),t(21,"code"),e(22,"u-collapse"),n(),e(23," with other surfaces to build reveal-on-demand patterns. "),t(24,"div",2)(25,"u-card",6)(26,"u-button",7),d("click",function(){return i.cardOpen=!i.cardOpen}),e(27,"Show details"),n(),t(28,"u-collapse",4)(29,"div",8),e(30," Use "),t(31,"code"),e(32,"u-collapse"),n(),e(33," as a building block whenever you need a reveal-on-demand animation that respects the slotted content's natural height. "),n()()()()(),m(34,"docs-apis-table",9)),s&2&&(o(5),l("renderExample",!1)("html",i.usageHtml),o(10),c(i.open?"Collapse":"Expand"),o(),l("open",i.open),o(3),l("renderExample",!1)("html",i.insideCardHtml),o(9),l("open",i.cardOpen))},dependencies:[b,g,u],styles:["[_nghost-%COMP%]{display:block}"]});let r=a;return r})();export{O as CollapseComponent};
