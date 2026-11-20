import{x as a,p}from"./grid-CtGHRW12.js";import{m as d}from"./data-Cst3zD4w.js";const c={title:"Cell renderers",description:"A column `renderer(item, ctx)` returns the cell content: avatars with initials, status badges, a progress bar and a link are Lit templates styled through their `part` names; the **Priority** cell returns an `HTMLElement`, which lives in the light DOM, so a plain page class styles it. `ctx.text` is what the cell would show without the renderer."},n=e=>e.split(" ").map(r=>r[0]).join("").slice(0,2),s=[{path:"customer",label:"Customer",width:220,renderer:e=>a`
      <span part="app-person">
        <span part="app-avatar app-avatar-${e.id%4}" aria-hidden="true">${n(e.customer)}</span>
        ${e.customer}
      </span>`},{path:"status",label:"Status",width:140,renderer:e=>a`<span part="app-badge app-badge-${e.status.toLowerCase()}">${e.status}</span>`},{path:"quantity",label:"Fulfilled",width:160,dataType:"number",renderer:(e,{text:r})=>a`
      <span part="app-progress" title="${r} of 20 units">
        <span part="app-progress-bar" style=${p({width:`${e.quantity/20*100}%`})}></span>
      </span>`},{path:"product",label:"Product",width:160,renderer:e=>a`
      <a href="https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(e.product)}" target="_blank" rel="noopener">${e.product}</a>`},{path:"priority",label:"Priority",width:120,dataType:"boolean",renderer:e=>{if(!e.priority)return null;const r=document.createElement("span");return r.className="priority-flag",r.textContent="Urgent",r}},{path:"total",label:"Total",width:140,dataType:"number",format:{style:"currency",currency:"USD"}}],o=`
  .renderers-demo::part(app-person) { display: inline-flex; align-items: center; gap: 10px; }
  .renderers-demo::part(app-avatar) {
    display: inline-grid; place-items: center; inline-size: 28px; block-size: 28px; border-radius: 50%;
    font-size: 0.75rem; font-weight: 600; color: #fff;
  }
  .renderers-demo::part(app-avatar-0) { background: #6750a4; }
  .renderers-demo::part(app-avatar-1) { background: #00696d; }
  .renderers-demo::part(app-avatar-2) { background: #9a4521; }
  .renderers-demo::part(app-avatar-3) { background: #39608f; }
  .renderers-demo::part(app-badge) {
    padding: 2px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: 600;
    background: light-dark(#e7e0ec, #49454f);
  }
  .renderers-demo::part(app-badge-paid),
  .renderers-demo::part(app-badge-delivered) { background: light-dark(#c4eed0, #0f5223); color: light-dark(#0f5223, #c4eed0); }
  .renderers-demo::part(app-badge-shipped) { background: light-dark(#d3e3fd, #0b3a7a); color: light-dark(#0b3a7a, #d3e3fd); }
  .renderers-demo::part(app-badge-cancelled) { background: light-dark(#ffdad6, #8c1d18); color: light-dark(#8c1d18, #ffdad6); }
  .renderers-demo::part(app-progress) {
    display: block; block-size: 6px; border-radius: 3px; overflow: hidden; background: light-dark(#e7e0ec, #49454f);
  }
  .renderers-demo::part(app-progress-bar) { display: block; block-size: 100%; background: #6750a4; }
  .priority-flag { color: light-dark(#b3261e, #f2b8b5); font-weight: 600; }
`,g=e=>{const r=document.createElement("u-grid");r.className="renderers-demo",r.style.height="420px",r.keyExpr="id",r.columns=s,r.items=d(500);const t=document.createElement("style");t.textContent=o,e.append(t,r)};export{g as default,c as meta};
