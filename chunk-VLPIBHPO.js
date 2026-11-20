import{a as ie,b as re}from"./chunk-JUHLOZQQ.js";import{a as ne}from"./chunk-GRAK4QNI.js";import{e as ee}from"./chunk-CSQ3XL6T.js";import{d as te}from"./chunk-A2AONSIM.js";import{e as Z}from"./chunk-7ANKUTMV.js";import{Bb as g,Cb as J,Db as O,Ka as V,Kb as X,La as B,Lb as u,Mb as Y,Na as d,V as z,Za as M,bb as q,ea as R,fa as H,kb as K,lb as b,mb as _,nc as Q,qb as x,ra as D,rb as l,sb as s,tb as P,yb as W,zb as G}from"./chunk-QUVZ4KUC.js";import{a as v,b as F}from"./chunk-IPU5OYZE.js";var ve="https://stackblitz.com",oe=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],be=["project","search","ports","settings"],_e=["light","dark"],xe=["editor","preview"],ae={clickToLoad:e=>h("ctl",e),devToolsHeight:e=>le("devtoolsheight",e),forceEmbedLayout:e=>h("embed",e),hideDevTools:e=>h("hidedevtools",e),hideExplorer:e=>h("hideExplorer",e),hideNavigation:e=>h("hideNavigation",e),openFile:e=>C("file",e),showSidebar:e=>ye("showSidebar",e),sidebarView:e=>k("sidebarView",e,be),startScript:e=>C("startScript",e),terminalHeight:e=>le("terminalHeight",e),theme:e=>k("theme",e,_e),view:e=>k("view",e,xe),zenMode:e=>h("zenMode",e),organization:e=>`${C("orgName",e?.name)}&${C("orgProvider",e?.provider)}`,crossOriginIsolated:e=>h("corp",e)};function se(e={}){let t=Object.entries(e).map(([i,n])=>n!=null&&ae.hasOwnProperty(i)?ae[i](n):"").filter(Boolean);return t.length?`?${t.join("&")}`:""}function h(e,t){return t===!0?`${e}=1`:""}function ye(e,t){return typeof t=="boolean"?`${e}=${t?"1":"0"}`:""}function le(e,t){if(typeof t=="number"&&!Number.isNaN(t)){let i=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(i))}`}return""}function k(e,t="",i=[]){return i.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function C(e,t){return(Array.isArray(t)?t:[t]).filter(n=>typeof n=="string"&&n.trim()!=="").map(n=>`${e}=${encodeURIComponent(n)}`).join("&")}function ce(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function I(e,t){return`${pe(t)}${e}${se(t)}`}function N(e,t){let i={forceEmbedLayout:!0};return t&&typeof t=="object"&&Object.assign(i,t),`${pe(i)}${e}${se(i)}`}function pe(e={}){return(typeof e.origin=="string"?e.origin:ve).replace(/\/$/,"")}function U(e,t,i){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),we(t,i),Ce(e,t,i),e.replaceWith(t)}function $(e){if(typeof e=="string"){let t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}else if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function L(e){return e&&e.newWindow===!1?"_self":"_blank"}function we(e,t={}){let i=Object.hasOwnProperty.call(t,"height")?`${t.height}`:"300",n=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",i),n?e.setAttribute("width",n):e.setAttribute("style","width:100%;")}function Ce(e,t,i={}){let n=e.allow?.split(";")?.map(r=>r.trim())??[];i.crossOriginIsolated&&!n.includes("cross-origin-isolated")&&n.push("cross-origin-isolated"),n.length>0&&(t.allow=n.join("; "))}var T=class{constructor(t){this.pending={},this.port=t,this.port.onmessage=this.messageListener.bind(this)}request({type:t,payload:i}){return new Promise((n,r)=>{let o=ce();this.pending[o]={resolve:n,reject:r},this.port.postMessage({type:t,payload:F(v({},i),{__reqid:o})})})}messageListener(t){if(typeof t.data.payload?.__reqid!="string")return;let{type:i,payload:n}=t.data,{__reqid:r,__success:o,__error:a}=n;this.pending[r]&&(o?this.pending[r].resolve(this.cleanResult(n)):this.pending[r].reject(a?`${i}: ${a}`:i),delete this.pending[r])}cleanResult(t){let i=v({},t);return delete i.__reqid,delete i.__success,delete i.__error,Object.keys(i).length?i:null}},j=class{constructor(t,i){this.editor={openFile:n=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:n}}),setCurrentFile:n=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:n}}),setTheme:n=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:n}}),setView:n=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:n}}),showSidebar:(n=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:n}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(n=>n?.url??null),setUrl:(n="/")=>{if(typeof n!="string"||!n.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${n}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:n}})}},this._rdc=new T(t),Object.defineProperty(this.preview,"origin",{value:typeof i.previewOrigin=="string"?i.previewOrigin:null,writable:!1})}applyFsDiff(t){let i=n=>n!==null&&typeof n=="object";if(!i(t)||!i(t.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(t.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:t})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}},E=[],A=class{constructor(t){this.id=ce(),this.element=t,this.pending=new Promise((i,n)=>{let r=({data:c,ports:p})=>{c?.action==="SDK_INIT_SUCCESS"&&c.id===this.id&&(this.vm=new j(p[0],c.payload),i(this.vm),a())},o=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function a(){window.clearInterval(f),window.removeEventListener("message",r)}window.addEventListener("message",r),o();let m=0,f=window.setInterval(()=>{if(this.vm){a();return}if(m>=20){a(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),E.forEach((c,p)=>{c.id===this.id&&E.splice(p,1)});return}m++,o()},500)}),E.push(this)}},Ee=e=>{let t=e instanceof Element?"element":"id";return E.find(i=>i[t]===e)??null};function Se(e,t){let i=document.createElement("input");return i.type="hidden",i.name=e,i.value=t,i}function Me(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function me({template:e,title:t,description:i,dependencies:n,files:r,settings:o}){if(!oe.includes(e)){let c=oe.map(p=>`'${p}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${c}`)}let a=[],m=(c,p,ge="")=>{a.push(Se(c,typeof p=="string"?p:ge))};m("project[title]",t),typeof i=="string"&&i.length>0&&m("project[description]",i),m("project[template]",e,"javascript"),n&&(e==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):m("project[dependencies]",JSON.stringify(n))),o&&m("project[settings]",JSON.stringify(o)),Object.entries(r).forEach(([c,p])=>{m(`project[files][${Me(c)}]`,p)});let f=document.createElement("form");return f.method="POST",f.setAttribute("style","display:none!important;"),f.append(...a),f}function Pe(e,t){let i=me(e);return i.action=N("/run",t),i.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${i.outerHTML}
  <script>document.getElementById('${i.id}').submit();<\/script>
</body>
</html>`}function Oe(e,t){let i=me(e);i.action=I("/run",t),i.target=L(t),document.body.appendChild(i),i.submit(),document.body.removeChild(i)}function S(e){return e?.contentWindow?(Ee(e)??new A(e)).pending:Promise.reject("Provided element is not an iframe.")}function ke(e,t){Oe(e,t)}function Te(e,t){let i=I(`/edit/${e}`,t),n=L(t);window.open(i,n)}function je(e,t){let i=I(`/github/${e}`,t),n=L(t);window.open(i,n)}function Ae(e,t,i){let n=$(e),r=Pe(t,i),o=document.createElement("iframe");return U(n,o,i),o.contentDocument?.write(r),S(o)}function Ie(e,t,i){let n=$(e),r=document.createElement("iframe");return r.src=N(`/edit/${t}`,i),U(n,r,i),S(r)}function Ne(e,t,i){let n=$(e),r=document.createElement("iframe");return r.src=N(`/github/${t}`,i),U(n,r,i),S(r)}var de={connect:S,embedGithubProject:Ne,embedProject:Ae,embedProjectId:Ie,openGithubProject:je,openProject:ke,openProjectId:Te};var ue=`^${ne}`,y="^1.3.9",w="^5.0.0",he=`    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0">`,fe=(()=>{let t=class t{open(n,r={}){let{project:o,openFile:a}=this.buildProject(n,r);de.openProject(o,{openFile:a,view:"editor",newWindow:!0})}buildProject(n,r){switch(n){case"angular":return this.angular(r);case"react":return this.react(r);case"vue":return this.vue(r);case"svelte":return this.svelte(r);case"solid":return this.solid(r);default:return this.vanilla(r)}}title(n,r){return n.title??r}indexHtml(n){return`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Universal Material example</title>
${he}
  </head>
  <body>
${n}
  </body>
</html>
`}vanilla(n){let r=n.source??`<u-text-field label="Name"></u-text-field>
<u-button>Click me</u-button>`,o={"index.html":this.indexHtml(`    <div id="app"></div>
    <script type="module" src="/main.js"><\/script>`),"main.js":`// Side-effect import registers every <u-*> custom element.
import '@universal-material/web';
import 'element-internals-polyfill';

document.getElementById('app').innerHTML = \`
${this.escapeTemplate(r)}
\`;
`,"package.json":this.nodePackageJson("universal-material-vanilla",{},{vite:w,"element-internals-polyfill":y})};return{project:{title:this.title(n,"Universal Material \u2014 Vanilla"),description:"Universal Material web components with Vite (vanilla JS).",template:"node",files:o},openFile:"main.js"}}vue(n){let r=n.source??`<script setup lang="ts">
import { ref } from 'vue'
const name = ref('Ada')
<\/script>

<template>
  <u-text-field :value="name" @input="name = ($event.target as any).value" label="Name" />
  <u-button>Click me</u-button>
</template>
`,o={"index.html":this.indexHtml(`    <div id="app"></div>
    <script type="module" src="/src/main.ts"><\/script>`),"src/main.ts":`// Side-effect import registers every <u-*> custom element.
import '@universal-material/web'
import 'element-internals-polyfill'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
`,"src/App.vue":r,"vite.config.ts":`import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('u-'),
        },
      },
    }),
  ],
})
`,"package.json":this.nodePackageJson("universal-material-vue",{vue:"^3.5.0"},{"@vitejs/plugin-vue":"^5.0.0",vite:w,"element-internals-polyfill":y})};return{project:{title:this.title(n,"Universal Material \u2014 Vue"),description:"Universal Material web components with Vue 3 + Vite.",template:"node",files:o},openFile:"src/App.vue"}}svelte(n){let r=n.source??`<script lang="ts">
  let name = 'Ada'
<\/script>

<u-text-field value={name} on:input={(e) => (name = (e.target as HTMLInputElement).value)} label="Name" />
<u-button>Click me</u-button>
`,o={"index.html":this.indexHtml(`    <div id="app"></div>
    <script type="module" src="/src/main.ts"><\/script>`),"src/main.ts":`// Side-effect import registers every <u-*> custom element.
import '@universal-material/web'
import 'element-internals-polyfill'
import App from './App.svelte'

new App({ target: document.getElementById('app')! })
`,"src/App.svelte":r,"vite.config.ts":`import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
})
`,"svelte.config.js":`import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  preprocess: vitePreprocess(),
  // <u-*> are custom elements, not Svelte components.
  compilerOptions: {},
}
`,"package.json":this.nodePackageJson("universal-material-svelte",{},{svelte:"^4.2.0","@sveltejs/vite-plugin-svelte":"^3.0.0",vite:w,"element-internals-polyfill":y})};return{project:{title:this.title(n,"Universal Material \u2014 Svelte"),description:"Universal Material web components with Svelte + Vite.",template:"node",files:o},openFile:"src/App.svelte"}}solid(n){let r=n.source??`import { createSignal } from 'solid-js'

export default function App() {
  const [name, setName] = createSignal('Ada')

  return (
    <>
      <u-text-field
        prop:value={name()}
        on:input={(e) => setName((e.currentTarget as HTMLInputElement).value)}
      />
      <u-button>Click me</u-button>
    </>
  )
}
`,o={"index.html":this.indexHtml(`    <div id="root"></div>
    <script type="module" src="/src/main.tsx"><\/script>`),"src/main.tsx":`// Side-effect import registers every <u-*> custom element.
import '@universal-material/web'
import 'element-internals-polyfill'
import { render } from 'solid-js/web'
import App from './App'

render(() => <App />, document.getElementById('root')!)
`,"src/App.tsx":r,"vite.config.ts":`import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
})
`,"package.json":this.nodePackageJson("universal-material-solid",{"solid-js":"^1.8.0"},{"vite-plugin-solid":"^2.10.0",vite:w,"element-internals-polyfill":y})};return{project:{title:this.title(n,"Universal Material \u2014 Solid"),description:"Universal Material web components with Solid + Vite.",template:"node",files:o},openFile:"src/App.tsx"}}react(n){let r=n.source??`import { useState } from 'react'

// NOTE: @universal-material/react (typed wrappers) is not published yet.
// React 19 sets props on custom elements natively, so the raw <u-*> elements
// work today. Swap to <UTextField> / <UButton> once the wrapper ships.
export default function App() {
  const [name, setName] = useState('Ada')

  return (
    <>
      <u-text-field
        value={name}
        onInput={(e: any) => setName(e.target.value)}
      />
      <u-button>Click me</u-button>
    </>
  )
}
`,o={"index.html":this.indexHtml(`    <div id="root"></div>
    <script type="module" src="/src/main.tsx"><\/script>`),"src/main.tsx":`// Side-effect import registers every <u-*> custom element.
import '@universal-material/web'
import 'element-internals-polyfill'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
`,"src/App.tsx":r,"vite.config.ts":`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
`,"README.md":"# Universal Material \u2014 React\n\nThis starter runs against the **published** `@universal-material/web` elements.\n\n> The dedicated typed React wrapper, `@universal-material/react`, is **not on\n> npm yet**. Once it is published you can import `UTextField`, `UButton`, \u2026 from\n> it for fully typed props and events. Until then, use the raw `<u-*>` elements\n> as shown \u2014 React 19 passes props to custom elements natively, so they work.\n","package.json":this.nodePackageJson("universal-material-react",{react:"^19.0.0","react-dom":"^19.0.0"},{"@vitejs/plugin-react":"^4.3.0","@types/react":"^19.0.0","@types/react-dom":"^19.0.0",vite:w,"element-internals-polyfill":y})};return{project:{title:this.title(n,"Universal Material \u2014 React"),description:"Universal Material web components with React + Vite. (@universal-material/react wrapper pending publish.)",template:"node",files:o},openFile:"src/App.tsx"}}angular(n){let r=n.source??`<u-text-field label="Name"></u-text-field>
<u-button>Click me</u-button>`,o={"src/index.html":`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Universal Material example</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
${he}
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>
`,"src/main.ts":`import { bootstrapApplication } from '@angular/platform-browser';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Side-effect import registers every <u-*> custom element.
import '@universal-material/web';

// NOTE: @universal-material/angular (the ControlValueAccessor wrapper) is not
// published yet. The raw <u-*> elements work today with CUSTOM_ELEMENTS_SCHEMA.
// Swap to UniversalMaterialModule once the wrapper ships.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
${this.escapeTemplate(r)}
\`,
})
export class AppComponent {}

bootstrapApplication(AppComponent);
`},a={"@universal-material/web":ue};return{project:{title:this.title(n,"Universal Material \u2014 Angular"),description:"Universal Material web components with Angular. (@universal-material/angular wrapper pending publish.)",template:"angular-cli",files:o,dependencies:a},openFile:"src/main.ts"}}nodePackageJson(n,r,o){let a={name:n,private:!0,version:"0.0.0",type:"module",scripts:{dev:"vite",build:"vite build",preview:"vite preview"},dependencies:v({"@universal-material/web":ue},r),devDependencies:o};return JSON.stringify(a,null,2)+`
`}escapeTemplate(n){return n.replace(/\\/g,"\\\\").replace(/`/g,"\\`").replace(/\$\{/g,"\\${")}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Le=["*",[["","example",""]]],Fe=["*","[example]"];function ze(e,t){if(e&1){let i=W();l(0,"u-button",6),G("click",function(){R(i);let r=g();return H(r.openInStackBlitz())}),l(1,"span",7),u(2,"bolt"),s(),u(3," Open in StackBlitz "),s()}}function Re(e,t){if(e&1&&(l(0,"a",9)(1,"span",13),u(2,"open_in_new"),s(),l(3,"span",14)(4,"span",15),u(5,"Open as screen"),s(),l(6,"span",16),u(7,"This example needs the full viewport"),s()(),l(8,"span",17),u(9,"arrow_forward"),s()()),e&2){let i=g(2);x("routerLink",i.screenRoute)}}function He(e,t){if(e&1&&P(0,"div",18),e&2){let i=g(3);x("innerHTML",i.htmlSafe,V)}}function De(e,t){e&1&&O(0,1)}function Ve(e,t){if(e&1&&(l(0,"div",10),b(1,He,1,1,"div",18)(2,De,1,0),s()),e&2){let i=g(2);d(),_(i.renderExample?1:2)}}function Be(e,t){if(e&1&&(l(0,"div",8),b(1,Re,10,1,"a",9)(2,Ve,3,1,"div",10),l(3,"div",11)(4,"pre"),P(5,"code",12),s()()()),e&2){let i=g();X("fluid",i.fluid),K("data-align",i.alignment),d(),_(i.screenRoute?1:2),d(4),x("highlight",i._html)("language",i.language)}}var nt=(()=>{let t=class t{set html(n){this.htmlSafe=this.sanitizer.bypassSecurityTrustHtml(n),this._html=n}constructor(n,r){this.sanitizer=n,this.stackblitzService=r,this.htmlSafe=null,this.renderExample=!0,this.language="html",this.fluid=!1,this.alignment="start",this.anchorHash=null}ngOnChanges(n){this.anchorHash=ie(this.sectionTitle)}openInStackBlitz(){if(!this.stackblitz)return;let n=(this.sectionTitle??"example").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");this.stackblitzService.open(this.stackblitz.framework,{name:n||"example",title:this.sectionTitle??"Universal Material example",source:this.stackblitz.source??this._html})}};t.\u0275fac=function(r){return new(r||t)(M(Z),M(fe))},t.\u0275cmp=q({type:t,selectors:[["docs-example"]],inputs:{renderExample:"renderExample",sectionTitle:"sectionTitle",language:"language",screenRoute:"screenRoute",fluid:[2,"fluid","fluid",n=>n===""||n===!0||n==="true"],alignment:"alignment",stackblitz:"stackblitz",html:"html"},features:[D],ngContentSelectors:Fe,decls:8,vars:4,consts:[[1,"example-header"],[1,"u-headline-m","article-title"],["docsAnchorScroll","",3,"href"],["variant","tonal","aria-label","Open in StackBlitz",1,"stackblitz-button"],[1,"description"],[1,"example-block",3,"fluid"],["variant","tonal","aria-label","Open in StackBlitz",1,"stackblitz-button",3,"click"],["slot","leading-icon",1,"material-symbols-outlined"],[1,"example-block"],[1,"example-screen-cta",3,"routerLink"],[1,"example-preview"],[1,"example-code"],[3,"highlight","language"],[1,"example-screen-cta-icon","material-symbols-outlined"],[1,"example-screen-cta-text"],[1,"example-screen-cta-title"],[1,"example-screen-cta-sub"],[1,"example-screen-cta-arrow","material-symbols-outlined"],[3,"innerHTML"]],template:function(r,o){r&1&&(J(Le),l(0,"div",0)(1,"h5",1)(2,"a",2),u(3),s()(),b(4,ze,4,0,"u-button",3),s(),l(5,"div",4),O(6),s(),b(7,Be,6,6,"div",5)),r&2&&(d(2),x("href",o.anchorHash,B),d(),Y(o.sectionTitle),d(),_(o.stackblitz?4:-1),d(3),_(o._html?7:-1))},dependencies:[Q,te,ee,re],styles:['[_nghost-%COMP%]{display:block}[_nghost-%COMP%]:not(:last-child){margin-bottom:3rem}.example-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}.example-header[_ngcontent-%COMP%]   .article-title[_ngcontent-%COMP%]{margin-block:0}.stackblitz-button[_ngcontent-%COMP%]{flex-shrink:0}.stackblitz-button[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:18px}.description[_ngcontent-%COMP%]{font-size:1.125rem;color:var(--u-color-on-surface-variant)}.description[_ngcontent-%COMP%]:not(:empty){margin-bottom:var(--u-spacing-medium)}.example-block[_ngcontent-%COMP%]{position:relative;border:1px solid var(--u-color-outline-variant);border-radius:14px;background:var(--u-color-surface-container-lowest)}.example-block[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;border-radius:inherit;background:radial-gradient(circle at 18% 22%,color-mix(in srgb,var(--u-color-primary) 18%,transparent) 0%,transparent 38%),radial-gradient(circle at 82% 78%,color-mix(in srgb,var(--u-color-tertiary, var(--u-color-primary)) 12%,transparent) 0%,transparent 42%);opacity:.55;pointer-events:none;z-index:0}.example-preview[_ngcontent-%COMP%]{position:relative;display:flex;flex-wrap:wrap;gap:16px;padding:36px 28px;background:transparent;border-bottom:1px solid var(--u-color-outline-variant);align-items:center;min-height:96px;border-top-left-radius:inherit;border-top-right-radius:inherit}.example-preview[_ngcontent-%COMP%]:not(:has(*)){display:none}.example-block[_ngcontent-%COMP%]:not(:has(.example-preview *,.example-screen-cta))   .example-code[_ngcontent-%COMP%]{border-top-left-radius:inherit;border-top-right-radius:inherit}.example-screen-cta[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;gap:16px;padding:20px 24px;background:color-mix(in srgb,var(--u-color-primary) 6%,transparent);border-bottom:1px solid var(--u-color-outline-variant);border-top-left-radius:inherit;border-top-right-radius:inherit;text-decoration:none;color:var(--u-color-on-surface);transition:background .18s}.example-screen-cta[_ngcontent-%COMP%]:hover{background:color-mix(in srgb,var(--u-color-primary) 12%,transparent)}.example-screen-cta[_ngcontent-%COMP%]:hover   .example-screen-cta-arrow[_ngcontent-%COMP%]{transform:translate(4px);color:var(--u-color-primary)}.example-screen-cta-icon[_ngcontent-%COMP%]{font-size:24px;color:var(--u-color-primary);flex-shrink:0}.example-screen-cta-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:0;line-height:1.3}.example-screen-cta-title[_ngcontent-%COMP%]{font-size:15px;font-weight:600;color:var(--u-color-on-surface)}.example-screen-cta-sub[_ngcontent-%COMP%]{font-size:13px;color:var(--u-color-on-surface-variant);margin-top:2px}.example-screen-cta-arrow[_ngcontent-%COMP%]{font-size:20px;color:var(--u-color-on-surface-variant);flex-shrink:0;transition:transform .18s,color .18s}.example-block[data-align=center][_ngcontent-%COMP%]   .example-preview[_ngcontent-%COMP%]{justify-content:center}.example-block[data-align=end][_ngcontent-%COMP%]   .example-preview[_ngcontent-%COMP%]{justify-content:flex-end}.example-block[data-align=between][_ngcontent-%COMP%]   .example-preview[_ngcontent-%COMP%]{justify-content:space-between}.example-block[data-align=stretch][_ngcontent-%COMP%]   .example-preview[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr)}.example-block.fluid[_ngcontent-%COMP%]   .example-preview[_ngcontent-%COMP%]{padding-inline:0;padding-block:24px;display:block;min-height:0}.example-block.fluid[_ngcontent-%COMP%]   .example-preview[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%}.example-code[_ngcontent-%COMP%]{position:relative;background:var(--u-color-surface-container);border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;overflow:hidden}.example-code[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin:0}.example-code[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{display:block;background:transparent;padding:20px 24px;font-size:13px;line-height:1.6}']});let e=t;return e})();export{nt as a};
