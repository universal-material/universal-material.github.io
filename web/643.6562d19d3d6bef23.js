"use strict";(self.webpackChunkuniversal_material_web_docs=self.webpackChunkuniversal_material_web_docs||[]).push([[643],{2643:(p,l,e)=>{e.r(l),e.d(l,{ToolbarsComponent:()=>c});var i=e(484),n=e(1060),t=e(4292);let c=(()=>{class d{constructor(){this.simpleToolbarHtml='<div class="u-toolbar">\n  <div class="u-toolbar-row">\n    <div class="u-toolbar-start">\n      <div class="u-toolbar-actions">\n        <button class="u-icon-btn u-btn-default" type="button">\n          <i class="u-btn-icon mdi mdi-menu"></i>\n        </button>\n      </div>\n    </div>\n    <div class="u-toolbar-center">\n      <div class="u-toolbar-title">Title here</div>\n    </div>\n    <div class="u-toolbar-end">\n      <div class="u-toolbar-actions">\n        <button class="u-toolbar-action u-icon-btn u-btn-default" type="button">\n          <i class="u-btn-icon mdi mdi-phone"></i>\n        </button>\n        <div class="u-toolbar-action u-dropdown">\n          <button class="u-icon-btn u-btn-default u-dropdown-toggle" type="button">\n            <i class="u-btn-icon mdi mdi-dots-vertical"></i>\n          </button>\n          <div class="u-dropdown-menu down-left">\n            <div class="u-dropdown-content">\n              <a class="u-dropdown-item text-nowrap" href="#">Item A</a>\n              <a class="u-dropdown-item text-nowrap" href="#">Item B</a>\n              <a class="u-dropdown-item text-nowrap" href="#">Item C</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'}static#t=this.\u0275fac=function(a){return new(a||d)};static#n=this.\u0275cmp=t.VBU({type:d,selectors:[["docs-toolbars"]],standalone:!0,features:[t.aNF],decls:2,vars:1,consts:[["title","Toolbars"],["sectionTitle","Simple toolbar",3,"html"]],template:function(a,_){1&a&&t.nrm(0,"docs-title",0)(1,"docs-example",1),2&a&&(t.R7$(),t.Y8G("html",_.simpleToolbarHtml))},dependencies:[i.y,n.W]})}return d})()},484:(p,l,e)=>{e.d(l,{y:()=>_});var i=e(9351),n=e(5835),u=e(2525),t=e(4292),c=e(5671);const d=["*",[["","example",""]]],m=["*","[example]"];function r(s,f){if(1&s&&t.nrm(0,"div",10,0),2&s){const o=t.XpG(2);t.Y8G("innerHTML",o.htmlSafe,t.npT)}}function a(s,f){if(1&s&&(t.j41(0,"div",5),t.DNE(1,r,2,1,"div",6),t.SdG(2,1),t.j41(3,"u-card",7)(4,"pre",8),t.nrm(5,"code",9),t.k0s()()()),2&s){const o=t.XpG();t.R7$(),t.Y8G("ngIf",o.renderExample),t.R7$(4),t.Y8G("highlight",o._html)}}let _=(()=>{class s{set html(o){this.htmlSafe=this.sanitizer.bypassSecurityTrustHtml(o),this._html=o}constructor(o){this.sanitizer=o,this.htmlSafe=null,this.renderExample=!0,this.anchorHash=null}ngOnChanges(o){this.anchorHash=(0,u.Y)(this.sectionTitle)}static#t=this.\u0275fac=function(h){return new(h||s)(t.rXU(c.up))};static#n=this.\u0275cmp=t.VBU({type:s,selectors:[["docs-example"]],inputs:{renderExample:"renderExample",sectionTitle:"sectionTitle",html:"html"},standalone:!0,features:[t.OA$,t.aNF],ngContentSelectors:m,decls:6,vars:3,consts:[["example",""],[1,"u-headline-m","article-title"],[3,"href"],[1,"description"],["class","u-column",4,"ngIf"],[1,"u-column"],["class","example","slot","before-content",3,"innerHTML",4,"ngIf"],["variant","outlined"],["slot","after-content"],["language","html",3,"highlight"],["slot","before-content",1,"example",3,"innerHTML"]],template:function(h,v){1&h&&(t.NAR(d),t.j41(0,"h5",1)(1,"a",2),t.EFF(2),t.k0s()(),t.j41(3,"div",3),t.SdG(4),t.k0s(),t.DNE(5,a,6,2,"div",4)),2&h&&(t.R7$(),t.Y8G("href",v.anchorHash,t.B4B),t.R7$(),t.JRh(v.sectionTitle),t.R7$(3),t.Y8G("ngIf",v._html))},dependencies:[i.MD,i.bT,n.f4],styles:["pre[_ngcontent-%COMP%]{margin:0}pre[slot=after-content][_ngcontent-%COMP%]{border-radius:inherit;overflow:hidden}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background-color:var(--u-color-surface-container);padding:32px}.description[_ngcontent-%COMP%]{font-size:1.125rem}.description[_ngcontent-%COMP%]:not(:empty){margin-bottom:var(--u-spacing-medium)}"]})}return s})()},2525:(p,l,e)=>{e.d(l,{Y:()=>i});const i=n=>n?`#${n.split(" ").join("-").toLowerCase()}`:null},1060:(p,l,e)=>{e.d(l,{W:()=>t});var i=e(2525),n=e(4292);const u=["*"];let t=(()=>{class c{constructor(){this.anchorHash=null}ngOnChanges(m){this.anchorHash=(0,i.Y)(this.title)}static#t=this.\u0275fac=function(r){return new(r||c)};static#n=this.\u0275cmp=n.VBU({type:c,selectors:[["docs-title"]],inputs:{title:"title"},standalone:!0,features:[n.OA$,n.aNF],ngContentSelectors:u,decls:5,vars:2,consts:[[1,"u-display-m","article-title"],[3,"href"],[1,"u-headline-m","u-font-weight-thin"]],template:function(r,a){1&r&&(n.NAR(),n.j41(0,"h4",0)(1,"a",1),n.EFF(2),n.k0s()(),n.j41(3,"div",2),n.SdG(4),n.k0s()),2&r&&(n.R7$(),n.Y8G("href",a.anchorHash,n.B4B),n.R7$(),n.JRh(a.title))},styles:[".article-title[_ngcontent-%COMP%]{margin-top:8px}"]})}return c})()}}]);