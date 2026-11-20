import{a as f}from"./chunk-ZQF2KFMQ.js";import{a as d}from"./chunk-VLPIBHPO.js";import{c as p}from"./chunk-JUHLOZQQ.js";import"./chunk-GRAK4QNI.js";import"./chunk-GFTA4PL4.js";import"./chunk-CSQ3XL6T.js";import"./chunk-A2AONSIM.js";import"./chunk-7ANKUTMV.js";import{Lb as u,Na as t,bb as n,qb as a,rb as s,sb as m,tb as r}from"./chunk-QUVZ4KUC.js";import"./chunk-IPU5OYZE.js";var c=`<!-- Drag the bottom-right corner of the dashed box to resize and watch items
     collapse into the menu. \`menuPositioning="fixed"\` lets the popover
     escape the wrapper's clipped overflow. -->
<div
  style="
    resize: horizontal;
    overflow: hidden;
    max-width: 100%;
    min-width: 56px;
    width: 320px;
    padding: 8px;
    border: 1px dashed var(--u-color-outline-variant, rgba(0, 0, 0, 0.12));
    border-radius: 8px;
  "
>
  <u-overflow-menu menuPositioning="fixed">
    <u-overflow-menu-item label="Bold">
      <span class="material-symbols-outlined">format_bold</span>
    </u-overflow-menu-item>
    <u-overflow-menu-item label="Italic">
      <span class="material-symbols-outlined">format_italic</span>
    </u-overflow-menu-item>
    <u-overflow-menu-item label="Underline">
      <span class="material-symbols-outlined">format_underlined</span>
    </u-overflow-menu-item>
    <u-overflow-menu-item label="Strikethrough">
      <span class="material-symbols-outlined">format_strikethrough</span>
    </u-overflow-menu-item>
    <u-overflow-menu-item label="Align left">
      <span class="material-symbols-outlined">format_align_left</span>
    </u-overflow-menu-item>
    <u-overflow-menu-item label="Align center">
      <span class="material-symbols-outlined">format_align_center</span>
    </u-overflow-menu-item>
    <u-overflow-menu-item label="Align right">
      <span class="material-symbols-outlined">format_align_right</span>
    </u-overflow-menu-item>
  </u-overflow-menu>
</div>
`;var v=`<!-- Drag the bottom-right corner of the dashed box to resize. Items marked
     \`collapse="always"\` (Delete, Settings) are never shown inline.
     \`menuPositioning="fixed"\` lets the popover escape the wrapper's
     clipped overflow. -->
<div
  style="
    resize: horizontal;
    overflow: hidden;
    max-width: 100%;
    min-width: 56px;
    width: 320px;
    padding: 8px;
    border: 1px dashed var(--u-color-outline-variant, rgba(0, 0, 0, 0.12));
    border-radius: 8px;
  "
>
  <u-overflow-menu menuPositioning="fixed">
    <u-overflow-menu-item label="Save">
      <span class="material-symbols-outlined">save</span>
    </u-overflow-menu-item>
    <u-overflow-menu-item label="Share">
      <span class="material-symbols-outlined">share</span>
    </u-overflow-menu-item>
    <u-overflow-menu-item label="Print">
      <span class="material-symbols-outlined">print</span>
    </u-overflow-menu-item>
    <u-overflow-menu-item
      label="Delete"
      collapse="always"
    >
      <span class="material-symbols-outlined">delete</span>
    </u-overflow-menu-item>
    <u-overflow-menu-item
      label="Settings"
      collapse="always"
    >
      <span class="material-symbols-outlined">settings</span>
    </u-overflow-menu-item>
  </u-overflow-menu>
</div>
`;var H=(()=>{let e=class e{constructor(){this.simpleToolbarHtml=c,this.collapseAlwaysHtml=v}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n({type:e,selectors:[["docs-toolbars"]],decls:6,vars:2,consts:[["title","Overflow menu","tag","u-overflow-menu, u-overflow-menu-item"],["sectionTitle","Auto-collapse",3,"html"],["sectionTitle","Always-collapsed items",3,"html"],["key","overflowMenu"],["key","overflowMenuItem"]],template:function(o,i){o&1&&(s(0,"docs-title",0),u(1,`An action bar that automatically collapses items into a "more" menu when there's not enough horizontal space.`),m(),r(2,"docs-example",1)(3,"docs-example",2)(4,"docs-apis-table",3)(5,"docs-apis-table",4)),o&2&&(t(2),a("html",i.simpleToolbarHtml),t(),a("html",i.collapseAlwaysHtml))},dependencies:[f,d,p],encapsulation:2});let l=e;return l})();export{H as ToolbarsComponent};
