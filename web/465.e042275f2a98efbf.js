"use strict";(self.webpackChunkuniversal_material_web_docs=self.webpackChunkuniversal_material_web_docs||[]).push([[465],{7465:(h,r,n)=>{n.r(r),n.d(r,{DataTablesComponent:()=>u});var d=n(484),e=n(1060),s=n(4292);let u=(()=>{class a{constructor(){this.simpleTablesHtml='<u-card variant="outlined">\n  <table class="u-data-table" slot="before-content">\n    <tbody>\n      <tr>\n        <th>Nome</th>\n        <td>John Doe</td>\n      </tr>\n      <tr>\n        <th>Email</th>\n        <td>john.doe@example.com</td>\n      </tr>\n    </tbody>\n  </table>\n</u-card>\n\n<u-card variant="outlined">\n  <table class="u-data-table" slot="before-content">\n    <thead>\n      <tr>\n        <th>Dessert (100g serving)&#x200E;</th>\n        <th class="u-text-end">Calories</th>\n        <th class="u-text-end">Fat (g)&#x200E;</th>\n        <th class="u-text-end">Carbs(g)&#x200E;</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Frozen yogurt</td>\n        <td class="u-text-end">159</td>\n        <td class="u-text-end">6.0</td>\n        <td class="u-text-end">24</td>\n      </tr>\n      <tr>\n        <td>Ice cream sandwich</td>\n        <td class="u-text-end">237</td>\n        <td class="u-text-end">9.0</td>\n        <td class="u-text-end">37</td>\n      </tr>\n      <tr>\n        <td>Eclair</td>\n        <td class="u-text-end">262</td>\n        <td class="u-text-end">16.0</td>\n        <td class="u-text-end">24</td>\n      </tr>\n    </tbody>\n  </table>\n</u-card>\n'}static#t=this.\u0275fac=function(o){return new(o||a)};static#e=this.\u0275cmp=s.VBU({type:a,selectors:[["docs-data-tables"]],standalone:!0,features:[s.aNF],decls:2,vars:1,consts:[["title","Data tables"],["sectionTitle","Simple tables",3,"html"]],template:function(o,c){1&o&&s.nrm(0,"docs-title",0)(1,"docs-example",1),2&o&&(s.R7$(),s.Y8G("html",c.simpleTablesHtml))},dependencies:[d.y,e.W]})}return a})()},484:(h,r,n)=>{n.d(r,{y:()=>u});var d=n(5835),e=n(2525),t=n(4292),s=n(5671);let u=(()=>{class a{set html(l){this._htmlSafe=this.sanitizer.bypassSecurityTrustHtml(l),this._html=l}constructor(l){this.sanitizer=l,this.anchorHash=null}ngOnChanges(l){this.anchorHash=(0,e.Y)(this.sectionTitle)}static#t=this.\u0275fac=function(o){return new(o||a)(t.rXU(s.up))};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["docs-example"]],inputs:{sectionTitle:"sectionTitle",html:"html"},standalone:!0,features:[t.OA$,t.aNF],decls:8,vars:4,consts:[["example",""],[1,"u-headline-m","article-title"],[3,"href"],["slot","before-content",1,"example",3,"innerHTML"],["variant","outlined"],["slot","after-content"],["language","html",3,"highlight"]],template:function(o,c){1&o&&(t.j41(0,"h5",1)(1,"a",2),t.EFF(2),t.k0s()(),t.nrm(3,"div",3,0),t.j41(5,"u-card",4)(6,"pre",5),t.nrm(7,"code",6),t.k0s()()),2&o&&(t.R7$(),t.Y8G("href",c.anchorHash,t.B4B),t.R7$(),t.JRh(c.sectionTitle),t.R7$(),t.Y8G("innerHTML",c._htmlSafe,t.npT),t.R7$(4),t.Y8G("highlight",c._html))},dependencies:[d.f4],styles:["pre[_ngcontent-%COMP%]{margin:0}pre[slot=after-content][_ngcontent-%COMP%]{border-end-start-radius:inherit;border-end-end-radius:inherit;overflow:hidden}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background-color:var(--u-color-surface-container);padding:32px}"]})}return a})()},2525:(h,r,n)=>{n.d(r,{Y:()=>d});const d=e=>e?`#${e.split(" ").join("-").toLowerCase()}`:null},1060:(h,r,n)=>{n.d(r,{W:()=>t});var d=n(2525),e=n(4292);let t=(()=>{class s{constructor(){this.anchorHash=null}ngOnChanges(a){this.anchorHash=(0,d.Y)(this.title)}static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275cmp=e.VBU({type:s,selectors:[["docs-title"]],inputs:{title:"title"},standalone:!0,features:[e.OA$,e.aNF],decls:3,vars:2,consts:[[1,"u-display-m","article-title"],[3,"href"]],template:function(i,l){1&i&&(e.j41(0,"h4",0)(1,"a",1),e.EFF(2),e.k0s()()),2&i&&(e.R7$(),e.Y8G("href",l.anchorHash,e.B4B),e.R7$(),e.JRh(l.title))}})}return s})()}}]);