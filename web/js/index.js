/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;class i{constructor(t,e,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const o=this.t;if(e&&void 0===t){const e=void 0!==o&&1===o.length;e&&(t=r.get(o)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&r.set(o,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,o,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1]),t[0]);return new i(r,t,o)},s=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new i("string"==typeof t?t:t+"",void 0,o))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:u,getOwnPropertySymbols:h,getPrototypeOf:d}=Object,v=globalThis,p=v.trustedTypes,b=p?p.emptyScript:"",f=v.reactiveElementPolyfillSupport,g=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},y=(t,e)=>!a(t,e),x={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(t,o,e);void 0!==r&&l(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){const{get:r,set:i}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return r?.call(this)},set(e){const n=r?.call(this);i.call(this,e),this.requestUpdate(t,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=d(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...u(t),...h(t)];for(const o of e)this.createProperty(o,t[o])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,o]of e)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const o=this._$Eu(t,e);void 0!==o&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Eu(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const o=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((o,r)=>{if(e)o.adoptedStyleSheets=r.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of r){const r=document.createElement("style"),i=t.litNonce;void 0!==i&&r.setAttribute("nonce",i),r.textContent=e.cssText,o.appendChild(r)}})(o,this.constructor.elementStyles),o}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EC(t,e){const o=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,o);if(void 0!==r&&!0===o.reflect){const i=(void 0!==o.converter?.toAttribute?o.converter:m).toAttribute(e,o.type);this._$Em=t,null==i?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,e){const o=this.constructor,r=o._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=o.getPropertyOptions(r),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=r,this[r]=i.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,o){if(void 0!==t){if(o??=this.constructor.getPropertyOptions(t),!(o.hasChanged??y)(this[t],e))return;this.P(t,e,o)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,o){this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,o]of t)!0!==o.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[g("elementProperties")]=new Map,w[g("finalized")]=new Map,f?.({ReactiveElement:w}),(v.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _=globalThis,k=_.trustedTypes,$=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",j=`lit$${(Math.random()+"").slice(9)}$`,z="?"+j,O=`<${z}>`,C=document,E=()=>C.createComment(""),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,M="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,P=/>/g,B=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,N=/"/g,L=/^(?:script|style|textarea|title)$/i,D=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),H=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),q=new WeakMap,J=C.createTreeWalker(C,129);function V(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(e):e}const Z=(t,e)=>{const o=t.length-1,r=[];let i,n=2===e?"<svg>":"",s=U;for(let e=0;e<o;e++){const o=t[e];let a,l,c=-1,u=0;for(;u<o.length&&(s.lastIndex=u,l=s.exec(o),null!==l);)u=s.lastIndex,s===U?"!--"===l[1]?s=I:void 0!==l[1]?s=P:void 0!==l[2]?(L.test(l[2])&&(i=RegExp("</"+l[2],"g")),s=B):void 0!==l[3]&&(s=B):s===B?">"===l[0]?(s=i??U,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?B:'"'===l[3]?N:R):s===N||s===R?s=B:s===I||s===P?s=U:(s=B,i=void 0);const h=s===B&&t[e+1].startsWith("/>")?" ":"";n+=s===U?o+O:c>=0?(r.push(a),o.slice(0,c)+S+o.slice(c)+j+h):o+j+(-2===c?e:h)}return[V(t,n+(t[o]||"<?>")+(2===e?"</svg>":"")),r]};class F{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let i=0,n=0;const s=t.length-1,a=this.parts,[l,c]=Z(t,e);if(this.el=F.createElement(l,o),J.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=J.nextNode())&&a.length<s;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(S)){const e=c[n++],o=r.getAttribute(t).split(j),s=/([.?@])?(.*)/.exec(e);a.push({type:1,index:i,name:s[2],strings:o,ctor:"."===s[1]?Y:"?"===s[1]?tt:"@"===s[1]?et:X}),r.removeAttribute(t)}else t.startsWith(j)&&(a.push({type:6,index:i}),r.removeAttribute(t));if(L.test(r.tagName)){const t=r.textContent.split(j),e=t.length-1;if(e>0){r.textContent=k?k.emptyScript:"";for(let o=0;o<e;o++)r.append(t[o],E()),J.nextNode(),a.push({type:2,index:++i});r.append(t[e],E())}}}else if(8===r.nodeType)if(r.data===z)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=r.data.indexOf(j,t+1));)a.push({type:7,index:i}),t+=j.length-1}i++}}static createElement(t,e){const o=C.createElement("template");return o.innerHTML=t,o}}function K(t,e,o=t,r){if(e===H)return e;let i=void 0!==r?o._$Co?.[r]:o._$Cl;const n=A(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),void 0===n?i=void 0:(i=new n(t),i._$AT(t,o,r)),void 0!==r?(o._$Co??=[])[r]=i:o._$Cl=i),void 0!==i&&(e=K(t,i._$AS(t,e.values),i,r)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,r=(t?.creationScope??C).importNode(e,!0);J.currentNode=r;let i=J.nextNode(),n=0,s=0,a=o[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Q(i,i.nextSibling,this,t):1===a.type?e=new a.ctor(i,a.name,a.strings,this,t):6===a.type&&(e=new ot(i,this,t)),this._$AV.push(e),a=o[++s]}n!==a?.index&&(i=J.nextNode(),n++)}return J.currentNode=C,r}p(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,r){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),A(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==H&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>T(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==W&&A(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:o}=t,r="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=F.createElement(V(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new G(r,this),o=t.u(this.options);t.p(e),this.T(o),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new F(t)),e}k(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const i of t)r===e.length?e.push(o=new Q(this.S(E()),this.S(E()),this,this.options)):o=e[r],o._$AI(i),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,r,i){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=W}_$AI(t,e=this,o,r){const i=this.strings;let n=!1;if(void 0===i)t=K(this,t,e,0),n=!A(t)||t!==this._$AH&&t!==H,n&&(this._$AH=t);else{const r=t;let s,a;for(t=i[0],s=0;s<i.length-1;s++)a=K(this,r[o+s],e,s),a===H&&(a=this._$AH[s]),n||=!A(a)||a!==this._$AH[s],a===W?t=W:t!==W&&(t+=(a??"")+i[s+1]),this._$AH[s]=a}n&&!r&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Y extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class tt extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class et extends X{constructor(t,e,o,r,i){super(t,e,o,r,i),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??W)===H)return;const o=this._$AH,r=t===W&&o!==W||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==W&&(o===W||r);r&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const rt=_.litHtmlPolyfillSupport;rt?.(F,Q),(_.litHtmlVersions??=[]).push("3.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class it extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{const r=o?.renderBefore??e;let i=r._$litPart$;if(void 0===i){const t=o?.renderBefore??null;r._$litPart$=i=new Q(e.insertBefore(E(),t),t,void 0,o??{})}return i._$AI(t),i})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}}it._$litElement$=!0,it.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:it});const nt=globalThis.litElementPolyfillSupport;nt?.({LitElement:it}),(globalThis.litElementVersions??=[]).push("4.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,at={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:y},lt=(t=at,e,o)=>{const{kind:r,metadata:i}=o;let n=globalThis.litPropertyMetadata.get(i);if(void 0===n&&globalThis.litPropertyMetadata.set(i,n=new Map),n.set(o.name,t),"accessor"===r){const{name:r}=o;return{set(o){const i=e.get.call(this);e.set.call(this,o),this.requestUpdate(r,i,t)},init(e){return void 0!==e&&this.P(r,void 0,t),e}}}if("setter"===r){const{name:r}=o;return function(o){const i=this[r];e.call(this,o),this.requestUpdate(r,i,t)}}throw Error("Unsupported decorator location: "+r)};function ct(t){return(e,o)=>"object"==typeof o?lt(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const ut=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,o)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function ht(t,e){return(o,r,i)=>{const n=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:e}="object"==typeof r?o:i??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return ut(0,0,{get(){let o=t.call(this);return void 0===o&&(o=n(this),(null!==o||this.hasUpdated)&&e.call(this,o)),o}})}return ut(0,0,{get(){return n(this)}})}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dt(t){return(e,o)=>{const{slot:r,selector:i}=t??{},n="slot"+(r?`[name=${r}]`:":not([name])");return ut(0,0,{get(){const e=this.renderRoot?.querySelector(n),o=e?.assignedElements(t)??[];return void 0===i?o:o.filter((t=>t.matches(i)))}})}}const vt=n`
  :host {
    --_level: var(--u-elevation-level, 0);
    --_shadow-color: var(--u-color-shadow, rgb(0, 0, 0));
    -webkit-tap-highlight-color: transparent;
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
  }
  :host::before, :host::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    transition: box-shadow 150ms ease-in-out;
  }
  :host::before {
    box-shadow: 0 calc(1px * (clamp(0, var(--_level), 1) + clamp(0, var(--_level) - 3, 1) + 2 * clamp(0, var(--_level) - 4, 1))) calc(1px * (2 * clamp(0, var(--_level), 1) + clamp(0, var(--_level) - 2, 1) + clamp(0, var(--_level) - 4, 1))) 0 var(--_shadow-color);
    opacity: 0.3;
  }
  :host::after {
    box-shadow: 0 calc(1px * (clamp(0, var(--_level), 1) + clamp(0, var(--_level) - 1, 1) + 2 * clamp(0, var(--_level) - 2, 3))) calc(1px * (3 * clamp(0, var(--_level), 2) + 2 * clamp(0, var(--_level) - 2, 3))) calc(1px * (clamp(0, var(--_level), 4) + 2 * clamp(0, var(--_level) - 4, 1))) var(--_shadow-color);
    opacity: 0.15;
  }
`;var pt=function(t,e,o,r){for(var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r,a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};let bt=class extends it{constructor(){super(...arguments),this.ariaHidden="true"}};bt.styles=vt,bt=pt([st("u-elevation")],bt);const ft=n`
  :host,
  .ripple-container::before {
    --_ripple-hover-color: var(--u-ripple-hover-color, var(--u-ripple-color, var(--u-state-layer-color, currentColor)));
    --_ripple-pressed-color: var(--u-ripple-pressed-color, var(--u-ripple-color, var(--u-state-layer-color, currentColor)));
    --_ripple-hover-opacity: var(--u-ripple-pressed-opacity, .08);
    --_ripple-pressed-opacity: var(--u-ripple-pressed-opacity, .2);
    display: block;
    inset: 0;
    isolation: isolate;
  }

  .ripple-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: inherit;
  }

  .ripple-container::before {
    content: "";
    background: var(--_ripple-hover-color);
    opacity: 0;
    transition: opacity 200ms;
  }

  @media (hover: hover) {
    :host(:not([disabled]):hover) .ripple-container::before {
      content: "";
      background: var(--_ripple-hover-color);
      opacity: var(--_ripple-hover-opacity);
    }
  }
  :host,
  .ripple-container::before,
  .ripple {
    position: absolute;
    border-radius: inherit;
  }

  .ripple {
    top: 50%;
    left: 50%;
    background: var(--_ripple-pressed-color);
    border-radius: 50%;
    box-shadow: 0 0 64px 64px var(--_ripple-pressed-color);
    opacity: var(--_ripple-pressed-opacity);
    transform: scale3d(0, 0, 1);
    pointer-events: none;
    will-change: transform;
  }
  .ripple.show {
    transition: transform calc(var(--_ripple-transition-duration) / var(--u-ripple-speed, 1)) cubic-bezier(0.19, 1, 0.22, 1), opacity calc(750ms / var(--u-ripple-speed, 1));
    transform: scale3d(1, 1, 1);
  }
  .ripple.show-forced {
    transition: transform calc(var(--_ripple-transition-duration) / var(--u-ripple-speed, 1)) cubic-bezier(0.19, 1, 0.22, 1), opacity calc(200ms / var(--u-ripple-speed, 1)) 300ms;
    transform: scale3d(2, 2, 1);
    opacity: 0;
  }
  .ripple.dismiss {
    opacity: 0;
    transform: scale3d(2, 2, 1);
  }

  ::slotted(*) {
    position: absolute !important;
    inset: 0;
    border-radius: inherit;
  }
`;var gt,mt=function(t,e,o,r){for(var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r,a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};let yt=gt=class extends it{constructor(){super(),this.isTouching=!1,this.disabled=!1,this.ariaHidden="true",this.attachEvents()}render(){return D`<div class="ripple-container"></div><slot></slot>`}attachEvents(){this.addEventListener("mousedown",this.handleMouseDown),this.addEventListener("touchstart",this.handleTouchStart)}handleMouseDown(t){!this.isTouching&&this.canCreateRipple()&&this.createRipple(t.clientX,t.clientY,"mouseup")}handleTouchStart(t){if(!this.canCreateRipple())return;this.isTouching=!0;const e=this.createRipple(t.touches[0].clientX,t.touches[0].clientY,"touchend");this.addEventListener("touchmove",e)}canCreateRipple(){if(this.disabled)return!1;const t=this.parentElement;return!(!t||"relative"!==window.getComputedStyle(t).position&&"absolute"!==window.getComputedStyle(t).position&&"fixed"!==window.getComputedStyle(t).position)}createRipple(t=null,e=null,o=null){const r=this.rippleContainer.getBoundingClientRect();t??=r.x+this.rippleContainer.clientWidth/2,e??=r.y+this.rippleContainer.clientHeight/2;const i=document.createElement("DIV");i.classList.add("ripple"),this.rippleContainer.appendChild(i),requestAnimationFrame((()=>{const r=this.getBoundingClientRect(),n=2*Math.max(this.clientWidth,this.clientHeight);gt._setElementSquareSizeAndCenter(i,n),i.style.setProperty("--_ripple-transition-duration",1080*Math.pow(n,.3)+"ms");const s=t-r.left+(n-this.rippleContainer.clientWidth)/2,a=e-r.top+(n-this.rippleContainer.clientHeight)/2;i.style.transformOrigin=`${s}px ${a}px`,i.classList.add(o?"show":"show-forced")}));const n=setInterval((()=>{if(!i.classList.contains("dismiss")&&!i.classList.contains("show-forced"))return;i.getAnimations().length||(clearInterval(n),i.remove())}),1e3);return o?this.createDismissEvent(i,o):null}createDismissEvent(t,e){const o=()=>{t.classList.add("dismiss"),this.isTouching=!1,this.removeEventListener("dragover",o),this.removeEventListener("mouseleave",o),window.removeEventListener(e,o)};return this.addEventListener("dragover",o),this.addEventListener("mouseleave",o),window.addEventListener(e,o),o}static _setElementSquareSizeAndCenter(t,e){t.style.top="50%",t.style.left="50%",t.style.width=`${e}px`,t.style.height=`${e}px`,t.style.marginLeft=-e/2+"px",t.style.marginTop=-e/2+"px"}};yt.styles=ft,mt([ct({type:Boolean,reflect:!0})],yt.prototype,"disabled",void 0),mt([ht(".ripple-container")],yt.prototype,"rippleContainer",void 0),yt=gt=mt([st("u-ripple")],yt);var xt,wt=function(t,e,o,r){for(var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r,a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s},_t=function(t,e,o,r){if("a"===o&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===o?r:"a"===o?r.call(t):r?r.value:e.get(t)},kt=function(t,e,o,r,i){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?i.call(t,o):i?i.value=o:e.set(t,o),o};class $t extends it{get form(){return _t(this,xt,"f").form}constructor(){super(),this.disabled=!1,this.href="",this.target="",this.type="submit",this.value="",xt.set(this,void 0),kt(this,xt,this.attachInternals(),"f")}render(){return this.href?this.renderLink():this.renderButton()}renderButton(){return D`
      <button
        id="button"
        class="button"
        ?disabled=${this.disabled}
        aria-label="${this.getAriaLabel()}"
        type="button">
        <u-ripple ?disabled=${this.disabled}></u-ripple>
        <u-elevation></u-elevation>
      </button>
      ${this.renderContent()}`}renderLink(){return D`<a
      id="link"
      class="button"
      href=${this.disabled?W:this.href}
      aria-disabled=${this.disabled||W}
      aria-label="${this.getAriaLabel()}"
      target=${this.target||W}>
      <u-elevation></u-elevation>
      <u-ripple ?disabled=${this.disabled}></u-ripple>
    </a>
    ${this.renderContent()}`}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.innerHandleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.innerHandleClick)}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}getAriaLabel(){return this.ariaLabel||W}innerHandleClick(t){this.disabled||(0===t.detail&&this.ripple.createRipple(),this.handleClick(t),"button"===this.type||this.href||this.form&&(_t(this,xt,"f").setFormValue(this.value),"submit"!==this.type?this.form.reset():this.form.requestSubmit()))}handleClick(t){}}xt=new WeakMap,$t.formAssociated=!0,wt([ct({type:Boolean,reflect:!0})],$t.prototype,"disabled",void 0),wt([ct()],$t.prototype,"href",void 0),wt([ct()],$t.prototype,"target",void 0),wt([ct()],$t.prototype,"type",void 0),wt([ct({reflect:!0})],$t.prototype,"value",void 0),wt([ct()],$t.prototype,"name",void 0),wt([ht(".button")],$t.prototype,"buttonElement",void 0),wt([ht("u-ripple")],$t.prototype,"ripple",void 0),wt([ct()],$t.prototype,"form",null);const St=n`
  :host {
    --_color-primary: var(--u-color-primary, rgb(103, 80, 164));
    -webkit-tap-highlight-color: transparent;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: baseline;
    position: relative;
    white-space: nowrap;
    font-family: var(--u-font-family-base, system-ui);
    transition: color 150ms ease-in-out, background-color 150ms ease-in-out;
  }

  :host([disabled]) {
    --u-elevation-level: 0 !important;
    background-color: var(--u-button-disabled-background-color, rgba(var(--u-color-on-surface, 29, 27, 32), 0.12)) !important;
    color: var(--u-button-disabled-text-color, rgba(var(--u-color-on-surface, 29, 27, 32), 0.38)) !important;
  }

  :host([disabled]) .button {
    cursor: default;
  }

  * {
    color: inherit;
  }

  u-elevation {
    z-index: -1;
  }

  .button {
    cursor: pointer;
    position: absolute;
    inset: 0;
    font-family: inherit;
    border-radius: inherit;
    color: inherit;
    border: none;
    margin: 0;
    padding: 0;
    text-align: center;
    white-space: nowrap;
    background: transparent;
    user-select: none;
    text-decoration: none;
    outline: 0;
    z-index: 0;
  }

  .button:focus-visible {
    animation: offset-pulse 400ms ease;
    animation-fill-mode: forwards;
    outline-offset: 2px;
  }

  ::slotted([slot=icon]) {
    display: inline-block;
  }

  @keyframes offset-pulse {
    0% {
      outline: 4px solid var(--_color-primary);
    }
    50% {
      outline: 8px solid var(--_color-primary);
    }
    100% {
      outline: 4px solid var(--_color-primary);
    }
  }
`,jt=n`
  :host {
    --u-common-button-line-height: var(--u-label-large-line-height, 1.25rem);
    --u-common-button-font-size: var(--u-label-large-font-size, 0.875rem);
    --u-common-button-font-weight: var(--u-font-weight-medium, 500);
    --_common-button-height: var(--u-common-button-height, 2.5rem);
    --_common-button-padding: var(--u-common-button-padding, 24px);
    --_common-button-icon-padding: var(--u-common-button-icon-padding, 16px);
    border-radius: var(--u-common-button-shape-corner, var(--u-shape-corner-full, 9999px));
    font-family: var(--u-font-family-base, system-ui);
    height: var(--u-common-button-height, 40px);
    font-size: var(--u-common-button-font-size);
    font-weight: var(--u-common-button-font-weight);
    padding-inline: var(--_common-button-padding);
    box-sizing: border-box;
  }

  :host([variant=filled]),
  :host([variant=filled][color=primary]) {
    background-color: var(--u-filled-button-primary-container-color, var(--_color-primary));
    color: var(--u-filled-button-primary-text-color, var(--u-color-on-primary, rgb(255, 255, 255)));
  }

  :host([variant=filled][color=secondary]) {
    background-color: var(--u-filled-button-secondary-container-color, var(--u-color-secondary, rgb(98, 91, 113)));
    color: var(--u-filled-button-secondary-text-color, var(--u-color-on-secondary, rgb(255, 255, 255)));
  }

  :host([variant=filled][color=tertiary]) {
    background-color: var(--u-filled-button-tertiary-container-color, var(--u-color-tertiary, rgb(125, 82, 96)));
    color: var(--u-filled-button-tertiary-text-color, var(--u-color-on-tertiary, rgb(255, 255, 255)));
  }

  :host([variant=filled][color=error]) {
    background-color: var(--u-filled-button-error-container-color, var(--u-color-error, rgb(179, 38, 30)));
    color: var(--u-filled-button-error-text-color, var(--u-color-on-error, rgb(255, 255, 255)));
  }

  :host([variant=tonal]) {
    background-color: var(--u-tonal-button-background-color, var(--u-color-secondary-container, rgb(232, 222, 248)));
    color: var(--u-tonal-button-text-color, var(--u-color-on-secondary-container, rgb(29, 25, 43)));
  }

  :host([variant=elevated]) {
    background-color: var(--u-elevated-button-background-color, var(--u-color-surface-container-low, rgb(247, 242, 250)));
    color: var(--u-tonal-button-text-color, var(--u-color-on-secondary-container, rgb(29, 25, 43)));
  }

  @media (hover: hover) {
    :host([variant=filled]:hover:not(:focus-within):not(:active)),
    :host([variant=tonal]:hover:not(:focus-within):not(:active)) {
      --u-elevation-level: var(--u-filled-button-hover-elevation-level, 1);
    }
  }
  :host([variant=outlined]),
  :host([variant=text]),
  :host([variant=elevated]) {
    color: var(--_color-primary);
  }

  :host([variant=outlined]) {
    border: 1px solid var(--u-color-outline-color, );
  }

  :host([variant=elevated]) {
    --u-elevation-level: var(--u-elevated-button-elevation-level, 1);
  }

  @media (hover: hover) {
    :host([variant=elevated]:hover) {
      --u-elevation-level: var(--u-elevated-button-hover-elevation-level, 2);
    }
  }
  :host([has-icon]) {
    padding-inline: var(--_common-button-icon-padding) var(--_common-button-padding);
  }

  :host([has-icon][trailing-icon]) {
    padding-inline: var(--_common-button-padding) var(--_common-button-icon-padding);
  }

  ::slotted([slot=icon]) {
    display: inline-block;
    margin-inline-end: 8px;
    font-size: var(--u-common-button-icon-size, 1.125rem);
    line-height: var(--u-common-button-icon-size, 1.125rem);
  }

  :host([trailing-icon]) ::slotted([slot=icon]) {
    margin-inline: 8px 0;
  }
`;var zt=function(t,e,o,r){for(var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r,a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};let Ot=class extends $t{constructor(){super(...arguments),this.variant="filled",this.trailingIcon=!1,this.hasIcon=!1}renderContent(){const t=D`
      <slot
        name="icon"
        aria-hidden="true"
        @slotchange="${this.handleSlotChange}"></slot>`;return D`
      ${this.trailingIcon?W:t}
      <span><slot></slot></span>
      ${this.trailingIcon?t:W}
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}};Ot.styles=[St,jt],zt([ct({reflect:!0})],Ot.prototype,"variant",void 0),zt([ct({reflect:!0})],Ot.prototype,"color",void 0),zt([ct({type:Boolean,attribute:"trailing-icon",reflect:!0})],Ot.prototype,"trailingIcon",void 0),zt([ct({type:Boolean,attribute:"has-icon",reflect:!0})],Ot.prototype,"hasIcon",void 0),zt([dt({slot:"icon",flatten:!0})],Ot.prototype,"assignedIcons",void 0),Ot=zt([st("u-button")],Ot);const Ct=n`
  :host {
    aspect-ratio: 1;
    --u-elevation-level: var(--u-fab-button-elevation-level, 3);
  }

  :host([lowered]) {
    --u-elevation-level: var(--u-fab-button-elevation-level, 1);
  }

  @media (hover: hover) {
    :host(:hover:not(:focus-within):not(:active)) {
      --u-elevation-level: var(--u-fab-button-hover-elevation-level, 4);
    }
    :host(:hover:not(:focus-within):not(:active)[lowered]) {
      --u-elevation-level: var(--u-fab-button-elevation-level, 2);
    }
  }
  @media (hover: hover) {
    :host(:hover:not(:focus-within):not(:active)) {
      --u-elevation-level: var(--u-fab-button-hover-elevation-level, 4);
    }
  }
  :host([size=small]) {
    width: var(--u-fab-button-small-size, 40px);
    border-radius: var(--u-fab-button-medium-shape-corner, var(--u-shape-corner-medium, 12px));
  }

  :host([size=large]) {
    width: var(--u-fab-button-medium-size, 96px);
    border-radius: var(--u-fab-button-medium-shape-corner, var(--u-shape-corner-extra-large, 28px));
  }

  :host([extended]),
  :host([size=medium]) {
    width: var(--u-fab-button-medium-size, 56px);
    border-radius: var(--u-fab-button-medium-shape-corner, var(--u-shape-corner-large, 16px));
  }

  :host([size=large]) .icon {
    font-size: var(--u-fab-button-icon-size, 2rem);
  }

  :host([extended]) .icon,
  :host([size=small]) .icon,
  :host([size=medium]) .icon {
    font-size: var(--u-fab-button-icon-size, 1.5rem);
  }

  :host([extended]) {
    width: auto;
    height: var(--u-extended-fab-button-height, 56px);
    aspect-ratio: auto;
    min-width: var(--u-extended-fab-button-min-width, 80px);
    padding-inline: var(--u-extended-fab-button-padding, 16px 24px);
  }

  :host([extended]) .icon {
    margin-inline-end: var(--u-extended-fab-button-icon-margin, 12px);
  }

  :host([color=primary]) {
    background-color: var(--u-fab-button-primary-background-color, var(--u-color-primary-container, rgb(234, 221, 255)));
    color: var(--u-fab-button-primary-text-color, var(--u-color-on-primary-container, rgb(33, 0, 93)));
  }

  :host([color=secondary]) {
    background-color: var(--u-fab-button-secondary-background-color, var(--u-color-secondary-container, rgb(232, 222, 248)));
    color: var(--u-fab-button-secondary-text-color, var(--u-color-on-secondary-container, rgb(29, 25, 43)));
  }

  :host([color=tertiary]) {
    background-color: var(--u-fab-button-tertiary-background-color, var(--u-color-tertiary-container, rgb(255, 216, 228)));
    color: var(--u-fab-button-tertiary-text-color, var(--u-color-on-tertiary-container, rgb(49, 17, 29)));
  }

  :host([color=branded]),
  :host([color=surface]) {
    background-color: var(--u-fab-button-surface-background-color, var(--u-color-surface-container-high, rgb(236, 230, 240)));
    color: var(--u-fab-button-surface-text-color, var(--_color-primary));
  }

  :host([color=branded][lowered]),
  :host([color=surface][lowered]) {
    background-color: var(--u-fab-button-surface-background-color, var(--u-color-surface-container-low, rgb(247, 242, 250)));
  }
`;var Et=function(t,e,o,r){for(var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r,a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};let At=class extends $t{constructor(){super(...arguments),this.color="primary",this.size="medium",this.label=null,this.lowered=!1}get extended(){return!!this.label}renderContent(){const t=D`<span>${this.label}</span>`;return D`
      <span class="icon" aria-hidden="true"><slot></slot></span>
      ${this.label?t:W}
    `}};At.styles=[St,Ct],Et([ct({reflect:!0})],At.prototype,"color",void 0),Et([ct({reflect:!0})],At.prototype,"size",void 0),Et([ct({reflect:!0})],At.prototype,"label",void 0),Et([ct({type:Boolean,reflect:!0})],At.prototype,"lowered",void 0),Et([ct({type:Boolean,reflect:!0})],At.prototype,"extended",null),At=Et([st("u-fab")],At);const Tt=n`
  :host {
    --_surface-container-highest-color: var(--u-color-surface-container-highest, rgb(230, 224, 233));
    width: var(--u-icon-button-size, 2.5rem);
    height: var(--u-icon-button-size, 2.5rem);
    border-radius: var(--u-icon-button-shape-corner, 9999px);
    font-family: var(--u-font-family-base, system-ui);
  }

  .icon {
    display: inline-block;
    width: var(--u-icon-button-icon-size, 1.5rem);
    height: var(--u-icon-button-icon-size, 1.5rem);
    font-size: var(--u-icon-button-icon-size, 1.5rem);
    line-height: var(--u-icon-button-icon-size, 1.5rem);
  }
  .icon.icon-selected {
    display: none;
  }

  :host([selected]) .icon:not(.icon-selected) {
    display: none;
  }
  :host([selected]) .icon.icon-selected {
    display: inline-block;
  }

  :host([variant=filled]) {
    background-color: var(--u-filled-icon-button-unselected-background-color, var(--_surface-container-highest-color));
    color: var(--u-filled-icon-button-unselected-text-color, var(--_color-primary));
  }

  :host([variant=tonal]) {
    background-color: var(--u-total-icon-button-unselected-background-color, var(--_surface-container-highest-color));
    color: var(--u-tonal-icon-button-unselected-text-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
  }

  :host([selected][variant=filled]),
  :host([variant=filled]:not([has-selection-icon])) {
    background-color: var(--u-filled-icon-button-background-color, var(--_color-primary));
    color: var(--u-filled-icon-button-text-color, var(--u-color-on-primary, rgb(255, 255, 255)));
  }

  :host([selected][variant=tonal]),
  :host([variant=tonal]:not([has-selection-icon])) {
    background-color: var(--u-tonal-icon-button-background-color, var(--u-color-secondary-container, rgb(232, 222, 248)));
    color: var(--u-tonal-icon-button-text-color, var(--u-color-on-secondary-container, rgb(29, 25, 43)));
  }

  :host([variant=standard]),
  :host([variant=outlined]) {
    color: var(--u-color-on-surface-variant, rgb(73, 69, 79));
  }

  :host([variant=outlined]) {
    border: 1px solid var(--u-color-outline, rgb(121, 116, 126));
  }

  :host([selected][variant=outlined]) {
    border: none;
    background-color: var(--u-outlined-icon-button-selected-background-color, var(--u-color-inverse-surface, rgb(50, 47, 53)));
    color: var(--u-outlined-icon-button-selected-text-color, var(--u-color-inverse-on-surface, rgb(245, 239, 247)));
  }

  :host([selected][variant=standard]) {
    color: var(--u-standard-icon-button-selected-text-color, var(--_color-primary));
  }
`;var Mt=function(t,e,o,r){for(var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r,a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};let Ut=class extends $t{constructor(){super(...arguments),this.variant="standard",this.toggle=!1,this.hasSelectionIcon=!1,this.selected=!1,this.ariaLabelSelected=""}renderContent(){return D`
      <span class="icon" aria-hidden="true"><slot></slot></span>
      <span class="icon icon-selected" aria-hidden="true">
        <slot name="selected" @slotchange="${this.handleSlotChange}"></slot>
      </span>
    `}handleClick(t){this.toggle&&(this.selected=!this.selected)}getAriaLabel(){return this.selected&&this.ariaLabelSelected||super.getAriaLabel()}handleSlotChange(){this.hasSelectionIcon=this.selectedIcons.length>0}};Ut.styles=[St,Tt],Mt([ct({reflect:!0})],Ut.prototype,"variant",void 0),Mt([ct({type:Boolean})],Ut.prototype,"toggle",void 0),Mt([ct({type:Boolean,attribute:"has-selection-icon",reflect:!0})],Ut.prototype,"hasSelectionIcon",void 0),Mt([ct({type:Boolean,reflect:!0})],Ut.prototype,"selected",void 0),Mt([ct({attribute:"aria-label-selected"})],Ut.prototype,"ariaLabelSelected",void 0),Mt([dt({slot:"selected",flatten:!0})],Ut.prototype,"selectedIcons",void 0),Ut=Mt([st("u-icon-button")],Ut);const It=n`
  :host {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }

  :host([align=start]) {
    justify-content: flex-start;
  }

  :host([align=center]) {
    justify-content: center;
  }

  :host([align=end]) {
    justify-content: flex-end;
  }

  :host([stack][align=start]) {
    align-items: flex-start;
  }

  :host([stack][align=center]) {
    align-items: center;
  }

  :host([stack][align=end]) {
    align-items: flex-end;
  }

  :host([stack]) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;var Pt=function(t,e,o,r){for(var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r,a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};let Bt=class extends it{constructor(){super(...arguments),this.align="end",this.stack=!1}render(){return D`
      <slot></slot>`}};Bt.styles=It,Pt([ct({reflect:!0})],Bt.prototype,"align",void 0),Pt([ct({type:Boolean,reflect:!0})],Bt.prototype,"stack",void 0),Bt=Pt([st("u-button-set")],Bt);const Rt=n`
  :host,
  * {
    font-family: var(--u-font-family-base, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol");
    box-sizing: border-box;
  }
`,Nt=n`
  :host {
    display: block;
    position: relative;
    border-radius: var(--u-card-shape-corner, var(--u-shape-corner-medium, 12px));
  }

  :host(:not(:first-child)) {
    margin-top: 8px;
  }

  :host([variant=elevated]) {
    background-color: var(--u-color-surface-container-low, rgb(247, 242, 250));
  }

  :host([variant=filled]) {
    background-color: var(--u-color-surface-container-highest, rgb(230, 224, 233));
  }

  :host([variant=outlined]) {
    border: var(--u-outlined-card-outline-width, 1px) solid var(--u-outlined-card-outline-color, var(--u-color-outline-variant, rgb(202, 196, 208)));
  }

  u-elevation {
    --u-elevation-level: var(--u-elevated-card-elevation-level, 1);
  }
`,Lt=n`
  :host {
    display: block;
  }

  :host(:has(slot > *)) {
    display: none;
  }

  :host([has-content]) {
    padding: var(--u-card-padding, 16px);
  }
`;var Dt=function(t,e,o,r){for(var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r,a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};let Ht=class extends it{constructor(){super(...arguments),this.hasContent=!1}render(){return D`
      <slot @slotchange="${this.handleSlotChange}"></slot>`}handleSlotChange(t){const e=t.target;if(this.hasContent=e.assignedElements({flatten:!0}).length>0,this.hasContent)return;const o=e.assignedNodes({flatten:!0});for(const t of o)if(t.nodeValue?.trim())return void(this.hasContent=!0);this.hasContent=!1}};Ht.styles=[Rt,Lt],Dt([ct({type:Boolean,attribute:"has-content",reflect:!0})],Ht.prototype,"hasContent",void 0),Ht=Dt([st("u-card-content")],Ht);const Wt=n`
  :host {
    display: block;
    aspect-ratio: 1;
    border-radius: var(--u-card-shape-corner, var(--u-shape-corner-medium, 12px));
  }

  :host([wide]) {
    aspect-ratio: 16/9;
  }
`;var qt=function(t,e,o,r){for(var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r,a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};let Jt=class extends it{constructor(){super(...arguments),this.wide=!1}render(){return D`
      <slot></slot>`}};Jt.styles=[Rt,Wt],qt([ct({type:Boolean,reflect:!0})],Jt.prototype,"wide",void 0),Jt=qt([st("u-card-media")],Jt);var Vt=function(t,e,o,r){for(var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r,a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};let Zt=class extends it{constructor(){super(...arguments),this.variant="elevated"}render(){return D`
      <u-elevation></u-elevation>
      <slot name="before-content"></slot>
      <u-card-content>
        <slot></slot>
      </u-card-content>
      <slot name="after-content"></slot>`}};Zt.styles=[Rt,Nt],Vt([ct({reflect:!0})],Zt.prototype,"variant",void 0),Zt=Vt([st("u-card")],Zt);var Ft=function(t,e,o,r){for(var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r,a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};let Kt=class extends it{constructor(){super(...arguments),this.handleInputChange=t=>{this.input!==document.elementFromPoint(t.clientX,t.clientY)&&this.ripple.createRipple()}}render(){return D`
      <div class="touch">
        <u-ripple><slot @slotchange="${this.handleSlotChange}"></slot></u-ripple>
      </div>`}handleSlotChange(){console.log("slotchange"),this.input&&this.input.removeEventListener("click",this.handleInputChange),this.input=this.assignedInputs[0],this.input&&this.input.addEventListener("click",this.handleInputChange)}};Kt.styles=[Rt,n`
      :host {
        position: relative;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 48px;
        height: 48px;
      }
      
      ::slotted(input) {
        position: relative;
        padding: 0;
        margin: 0;
        aspect-ratio: 1;
        height: 100%;
        z-index: 1;
        appearance: none;
      }
      
      .touch {
        position: absolute;
        inset: 0;
        border-radius: 9999px;
      }
    `],Ft([ht("u-ripple")],Kt.prototype,"ripple",void 0),Ft([dt({selector:"input",flatten:!0})],Kt.prototype,"assignedInputs",void 0),Kt=Ft([st("u-checkbox")],Kt);const Gt=n`
  :host {
    --_grid-spacing-small: var(--u-spacing-sm, 8px);
    --_grid-spacing-medium: var(--u-spacing-md, 16px);
    --_grid-spacing-large: var(--u-spacing-lg, 24px);
    --_grid-spacing-extra-large: var(--u-spacing-xl, 40px);
  }

  :host([margin=none]) {
    --_container-margin: 0;
  }

  :host([margin=small]) {
    --_container-margin: var(--u-container-margin, var(--_grid-spacing-small));
  }

  :host([margin=medium]) {
    --_container-margin: var(--u-container-margin, var(--_grid-spacing-medium));
  }

  :host([margin=large]) {
    --_container-margin: var(--u-container-margin, var(--_grid-spacing-large));
  }

  :host([margin=extra-large]) {
    --_container-margin: var(--u-container-margin, var(--_grid-spacing-extra-large));
  }

  :host {
    display: block;
    width: 100%;
    max-width: var(--u-container-max-width, 992px);
    margin-inline: auto;
    padding: var(--_container-margin, var(--_grid-spacing-medium));
  }

  :host::after {
    content: "";
    display: block;
  }
`;var Qt=function(t,e,o,r){for(var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r,a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};let Xt=class extends it{render(){return D`<slot></slot>`}};Xt.styles=Gt,Qt([ct({reflect:!0})],Xt.prototype,"margin",void 0),Xt=Qt([st("u-container")],Xt);const Yt=n`
  :host {
    --_divider-thickness: var(--u-divider-thickness, 1px);
    display: block;
    margin-block: 8px;
    height: var(--_divider-thickness);
    background-color: var(--u-divider-color, var(--u-color-outline-variant, rgb(202, 196, 208)));
  }

  :host([no-margin]) {
    margin: 0;
  }
`;var te=function(t,e,o,r){for(var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r,a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};let ee=class extends it{constructor(){super(...arguments),this.noMargin=!1}};ee.styles=Yt,te([ct({type:Boolean,attribute:"no-margin",reflect:!0})],ee.prototype,"noMargin",void 0),ee=te([st("u-divider")],ee);const oe=n`
  :host {
    display: table-header-group;
  }

  ::slotted(u-tr:not(:first-child)) {
    border-top: 1px solid var(--u-color-outline-variant, rgb(202, 196, 208));
  }
`;var re=function(t,e,o,r){for(var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r,a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};let ie=class extends it{render(){return D`<slot></slot>`}};ie.styles=[Rt,oe],ie=re([st("u-thead")],ie);const ne=n`
  :host {
    display: table-row-group;
  }

  ::slotted(u-tr:not(:first-child)) {
    border-top: 1px solid var(--u-color-outline-variant, rgb(202, 196, 208));
  }
`;var se=function(t,e,o,r){for(var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r,a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};let ae=class extends it{render(){return D`<slot></slot>`}};ae.styles=[Rt,ne],ae=se([st("u-tbody")],ae);const le=n`
  :host {
    display: table-row;
  }
`;var ce=function(t,e,o,r){for(var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r,a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};let ue=class extends it{render(){return D`<slot></slot>`}};ue.styles=[Rt,le],ue=ce([st("u-tr")],ue);const he=n`
  :host {
    display: table-cell;
    padding: var(--u-td-padding, 13px 16px);
    font-size: var(--u-td-font-size, 0.875rem);
    font-weight: var(--u-td-font-weight, var(--u-font-weight-medium, 500));
    text-align: start;
  }
`;var de=function(t,e,o,r){for(var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r,a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};let ve=class extends it{render(){return D`<slot></slot>`}};ve.styles=[Rt,he],ve=de([st("u-td")],ve);const pe=n`
  :host {
    display: table-cell;
    padding: var(--u-th-padding, 13px 16px);
    font-size: var(--u-th-font-size, 0.8125rem);
    font-weight: var(--u-th-font-weigh, var(--u-font-weight-medium, 500));
    text-align: start;
    color: var(--u-low-emphasis-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
  }
`;var be=function(t,e,o,r){for(var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r,a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};let fe=class extends it{render(){return D`<slot></slot>`}};fe.styles=[Rt,pe],fe=be([st("u-th")],fe);const ge=n`
  :host {
    display: table;
    min-width: 100%;
    border-collapse: collapse;
  }

  ::slotted(u-thead:not(:first-child)),
  ::slotted(u-tbody:not(:first-child)),
  ::slotted(u-tfooter:not(:first-child)),
  ::slotted(u-tr:not(:first-child)) {
    border-top: 1px solid get-color-var(outline-variant);
  }
`;class me extends it{render(){return D`
      <slot name="header"></slot>
      <slot></slot>
`}}me.styles=[Rt,ge],customElements.define("u-table",me);export{Ot as UmButton,$t as UmButtonBase,Bt as UmButtonSet,Zt as UmCard,Ht as UmCardContent,Jt as UmCardMedia,Kt as UmCheckbox,Xt as UmContainer,ee as UmDivider,bt as UmElevation,At as UmFab,Ut as UmIconButton,yt as UmRipple,me as UmTable};
