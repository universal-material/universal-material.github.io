/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),o=new WeakMap;class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const r=this.t;if(e&&void 0===t){const e=void 0!==r&&1===r.length;e&&(t=o.get(r)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o.set(r,t))}return t}toString(){return this.cssText}}const i=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,r,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1]),t[0]);return new n(o,t,r)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,r))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:s,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:d}=Object,v=globalThis,p=v.trustedTypes,f=p?p.emptyScript:"",b=v.reactiveElementPolyfillSupport,g=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},y=(t,e)=>!s(t,e),w={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;class k extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,e);void 0!==o&&c(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){const{get:o,set:n}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return o?.call(this)},set(e){const i=o?.call(this);n.call(this,e),this.requestUpdate(t,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=d(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...h(t),...u(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((r,o)=>{if(e)r.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,r.appendChild(o)}})(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(void 0!==o&&!0===r.reflect){const n=(void 0!==r.converter?.toAttribute?r.converter:m).toAttribute(e,r.type);this._$Em=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,e){const r=this.constructor,o=r._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=r.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=o,this[o]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,r){if(void 0!==t){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??y)(this[t],e))return;this.P(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t)!0!==r.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[g("elementProperties")]=new Map,k[g("finalized")]=new Map,b?.({ReactiveElement:k}),(v.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const M=globalThis,x=M.trustedTypes,_=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,T="?"+$,S=`<${T}>`,O=document,j=()=>O.createComment(""),B=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,P="[ \t\n\f\r]",E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,A=/-->/g,I=/>/g,D=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,R=/"/g,N=/^(?:script|style|textarea|title)$/i,L=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),V=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),H=new WeakMap,W=O.createTreeWalker(O,129);function J(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==_?_.createHTML(e):e}const q=(t,e)=>{const r=t.length-1,o=[];let n,i=2===e?"<svg>":"",a=E;for(let e=0;e<r;e++){const r=t[e];let s,c,l=-1,h=0;for(;h<r.length&&(a.lastIndex=h,c=a.exec(r),null!==c);)h=a.lastIndex,a===E?"!--"===c[1]?a=A:void 0!==c[1]?a=I:void 0!==c[2]?(N.test(c[2])&&(n=RegExp("</"+c[2],"g")),a=D):void 0!==c[3]&&(a=D):a===D?">"===c[0]?(a=n??E,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,s=c[1],a=void 0===c[3]?D:'"'===c[3]?R:U):a===R||a===U?a=D:a===A||a===I?a=E:(a=D,n=void 0);const u=a===D&&t[e+1].startsWith("/>")?" ":"";i+=a===E?r+S:l>=0?(o.push(s),r.slice(0,l)+C+r.slice(l)+$+u):r+$+(-2===l?e:u)}return[J(t,i+(t[r]||"<?>")+(2===e?"</svg>":"")),o]};class K{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let n=0,i=0;const a=t.length-1,s=this.parts,[c,l]=q(t,e);if(this.el=K.createElement(c,r),W.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=W.nextNode())&&s.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(C)){const e=l[i++],r=o.getAttribute(t).split($),a=/([.?@])?(.*)/.exec(e);s.push({type:1,index:n,name:a[2],strings:r,ctor:"."===a[1]?Q:"?"===a[1]?tt:"@"===a[1]?et:G}),o.removeAttribute(t)}else t.startsWith($)&&(s.push({type:6,index:n}),o.removeAttribute(t));if(N.test(o.tagName)){const t=o.textContent.split($),e=t.length-1;if(e>0){o.textContent=x?x.emptyScript:"";for(let r=0;r<e;r++)o.append(t[r],j()),W.nextNode(),s.push({type:2,index:++n});o.append(t[e],j())}}}else if(8===o.nodeType)if(o.data===T)s.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf($,t+1));)s.push({type:7,index:n}),t+=$.length-1}n++}}static createElement(t,e){const r=O.createElement("template");return r.innerHTML=t,r}}function X(t,e,r=t,o){if(e===V)return e;let n=void 0!==o?r._$Co?.[o]:r._$Cl;const i=B(e)?void 0:e._$litDirective$;return n?.constructor!==i&&(n?._$AO?.(!1),void 0===i?n=void 0:(n=new i(t),n._$AT(t,r,o)),void 0!==o?(r._$Co??=[])[o]=n:r._$Cl=n),void 0!==n&&(e=X(t,n._$AS(t,e.values),n,o)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,o=(t?.creationScope??O).importNode(e,!0);W.currentNode=o;let n=W.nextNode(),i=0,a=0,s=r[0];for(;void 0!==s;){if(i===s.index){let e;2===s.type?e=new Z(n,n.nextSibling,this,t):1===s.type?e=new s.ctor(n,s.name,s.strings,this,t):6===s.type&&(e=new rt(n,this,t)),this._$AV.push(e),s=r[++a]}i!==s?.index&&(n=W.nextNode(),i++)}return W.currentNode=O,o}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class Z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,o){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),B(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>z(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==F&&B(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,o="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=K.createElement(J(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new Y(o,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=H.get(t.strings);return void 0===e&&H.set(t.strings,e=new K(t)),e}k(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const n of t)o===e.length?e.push(r=new Z(this.S(j()),this.S(j()),this,this.options)):r=e[o],r._$AI(n),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,o,n){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=F}_$AI(t,e=this,r,o){const n=this.strings;let i=!1;if(void 0===n)t=X(this,t,e,0),i=!B(t)||t!==this._$AH&&t!==V,i&&(this._$AH=t);else{const o=t;let a,s;for(t=n[0],a=0;a<n.length-1;a++)s=X(this,o[r+a],e,a),s===V&&(s=this._$AH[a]),i||=!B(s)||s!==this._$AH[a],s===F?t=F:t!==F&&(t+=(s??"")+n[a+1]),this._$AH[a]=s}i&&!o&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Q extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class tt extends G{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class et extends G{constructor(t,e,r,o,n){super(t,e,r,o,n),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??F)===V)return;const r=this._$AH,o=t===F&&r!==F||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==F&&(r===F||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const ot=M.litHtmlPolyfillSupport;ot?.(K,Z),(M.litHtmlVersions??=[]).push("3.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class nt extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const o=r?.renderBefore??e;let n=o._$litPart$;if(void 0===n){const t=r?.renderBefore??null;o._$litPart$=n=new Z(e.insertBefore(j(),t),t,void 0,r??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}nt._$litElement$=!0,nt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:nt});const it=globalThis.litElementPolyfillSupport;it?.({LitElement:nt}),(globalThis.litElementVersions??=[]).push("4.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at=t=>(e,r)=>{void 0!==r?r.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,st={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:y},ct=(t=st,e,r)=>{const{kind:o,metadata:n}=r;let i=globalThis.litPropertyMetadata.get(n);if(void 0===i&&globalThis.litPropertyMetadata.set(n,i=new Map),i.set(r.name,t),"accessor"===o){const{name:o}=r;return{set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t)},init(e){return void 0!==e&&this.P(o,void 0,t),e}}}if("setter"===o){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t)}}throw Error("Unsupported decorator location: "+o)};function lt(t){return(e,r)=>"object"==typeof r?ct(t,e,r):((t,e,r)=>{const o=e.hasOwnProperty(r);return e.constructor.createProperty(r,o?{...t,wrapped:!0}:t),o?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const ht=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,r)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function ut(t,e){return(r,o,n)=>{const i=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:e}="object"==typeof o?r:n??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return ht(0,0,{get(){let r=t.call(this);return void 0===r&&(r=i(this),(null!==r||this.hasUpdated)&&e.call(this,r)),r}})}return ht(0,0,{get(){return i(this)}})}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dt(t){return(e,r)=>{const{slot:o,selector:n}=t??{},i="slot"+(o?`[name=${o}]`:":not([name])");return ht(0,0,{get(){const e=this.renderRoot?.querySelector(i),r=e?.assignedElements(t)??[];return void 0===n?r:r.filter((t=>t.matches(n)))}})}}const vt=i`
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
`;var pt=function(t,e,r,o){for(var n,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o,s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,r,a):n(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let ft=class extends nt{constructor(){super(...arguments),this.ariaHidden="true"}};ft.styles=vt,ft=pt([at("u-elevation")],ft);const bt=i`
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
`;var gt,mt=function(t,e,r,o){for(var n,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o,s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,r,a):n(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let yt=gt=class extends nt{constructor(){super(),this.isTouching=!1,this.disabled=!1,this.ariaHidden="true",this.attachEvents()}render(){return L`<div class="ripple-container"></div><slot></slot>`}attachEvents(){this.addEventListener("mousedown",this.handleMouseDown),this.addEventListener("touchstart",this.handleTouchStart)}handleMouseDown(t){!this.isTouching&&this.canCreateRipple()&&this.createRipple(t.clientX,t.clientY,"mouseup")}handleTouchStart(t){if(!this.canCreateRipple())return;this.isTouching=!0;const e=this.createRipple(t.touches[0].clientX,t.touches[0].clientY,"touchend");this.addEventListener("touchmove",e)}canCreateRipple(){if(this.disabled)return!1;const t=this.parentElement;return!(!t||"relative"!==window.getComputedStyle(t).position&&"absolute"!==window.getComputedStyle(t).position&&"fixed"!==window.getComputedStyle(t).position)}createRipple(t=null,e=null,r=null){const o=this.rippleContainer.getBoundingClientRect();t??=o.x+this.rippleContainer.clientWidth/2,e??=o.y+this.rippleContainer.clientHeight/2;const n=document.createElement("DIV");n.classList.add("ripple"),this.rippleContainer.appendChild(n),requestAnimationFrame((()=>{const o=this.getBoundingClientRect(),i=2*Math.max(this.clientWidth,this.clientHeight);gt._setElementSquareSizeAndCenter(n,i),n.style.setProperty("--_ripple-transition-duration",1080*Math.pow(i,.3)+"ms");const a=t-o.left+(i-this.rippleContainer.clientWidth)/2,s=e-o.top+(i-this.rippleContainer.clientHeight)/2;n.style.transformOrigin=`${a}px ${s}px`,n.classList.add(r?"show":"show-forced")}));const i=setInterval((()=>{if(!n.classList.contains("dismiss")&&!n.classList.contains("show-forced"))return;n.getAnimations().length||(clearInterval(i),n.remove())}),1e3);return r?this.createDismissEvent(n,r):null}createDismissEvent(t,e){const r=()=>{t.classList.add("dismiss"),this.isTouching=!1,this.removeEventListener("dragover",r),this.removeEventListener("mouseleave",r),window.removeEventListener(e,r)};return this.addEventListener("dragover",r),this.addEventListener("mouseleave",r),window.addEventListener(e,r),r}static _setElementSquareSizeAndCenter(t,e){t.style.top="50%",t.style.left="50%",t.style.width=`${e}px`,t.style.height=`${e}px`,t.style.marginLeft=-e/2+"px",t.style.marginTop=-e/2+"px"}};yt.styles=bt,mt([lt({type:Boolean,reflect:!0})],yt.prototype,"disabled",void 0),mt([ut(".ripple-container")],yt.prototype,"rippleContainer",void 0),yt=gt=mt([at("u-ripple")],yt);var wt,kt=function(t,e,r,o){for(var n,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o,s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,r,a):n(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},Mt=function(t,e,r,o){if("a"===r&&!o)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!o:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?o:"a"===r?o.call(t):o?o.value:e.get(t)},xt=function(t,e,r,o,n){if("m"===o)throw new TypeError("Private method is not writable");if("a"===o&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!n:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===o?n.call(t,r):n?n.value=r:e.set(t,r),r};class _t extends nt{get form(){return Mt(this,wt,"f").form}constructor(){super(),this.disabled=!1,this.href="",this.target="",this.type="submit",this.value="",wt.set(this,void 0),xt(this,wt,this.attachInternals(),"f")}render(){return this.href?this.renderLink():this.renderButton()}renderButton(){return L`
      <button
        id="button"
        class="button"
        ?disabled=${this.disabled}
        aria-label="${this.getAriaLabel()}"
        type="button">
        <u-ripple ?disabled=${this.disabled}></u-ripple>
        <u-elevation></u-elevation>
      </button>
      ${this.renderContent()}`}renderLink(){return L`<a
      id="link"
      class="button"
      href=${this.disabled?F:this.href}
      aria-disabled=${this.disabled||F}
      aria-label="${this.getAriaLabel()}"
      target=${this.target||F}>
      <u-elevation></u-elevation>
      <u-ripple ?disabled=${this.disabled}></u-ripple>
    </a>
    ${this.renderContent()}`}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.innerHandleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.innerHandleClick)}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}getAriaLabel(){return this.ariaLabel||F}innerHandleClick(t){this.disabled||(0===t.detail&&this.ripple.createRipple(),this.handleClick(t),"button"===this.type||this.href||this.form&&(Mt(this,wt,"f").setFormValue(this.value),"submit"!==this.type?this.form.reset():this.form.requestSubmit()))}handleClick(t){}}wt=new WeakMap,_t.formAssociated=!0,kt([lt({type:Boolean,reflect:!0})],_t.prototype,"disabled",void 0),kt([lt()],_t.prototype,"href",void 0),kt([lt()],_t.prototype,"target",void 0),kt([lt()],_t.prototype,"type",void 0),kt([lt({reflect:!0})],_t.prototype,"value",void 0),kt([lt()],_t.prototype,"name",void 0),kt([ut(".button")],_t.prototype,"buttonElement",void 0),kt([ut("u-ripple")],_t.prototype,"ripple",void 0),kt([lt()],_t.prototype,"form",null);const Ct=i`
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
`,$t=i`
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
    width: var(--u-common-button-icon-size, 1.125rem);
    height: var(--u-common-button-icon-size, 1.125rem);
    margin-inline-end: 8px;
    font-size: var(--u-common-button-icon-size, 1.125rem);
    line-height: var(--u-common-button-icon-size, 1.125rem);
  }

  :host([trailing-icon]) ::slotted([slot=icon]) {
    margin-inline: 8px 0;
  }
`;var Tt=function(t,e,r,o){for(var n,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o,s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,r,a):n(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let St=class extends _t{constructor(){super(...arguments),this.variant="filled",this.trailingIcon=!1,this.hasIcon=!1}renderContent(){const t=L`
      <slot
        name="icon"
        aria-hidden="true"
        @slotchange="${this.handleSlotChange}"></slot>`;return L`
      ${this.trailingIcon?F:t}
      <span><slot></slot></span>
      ${this.trailingIcon?t:F}
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}};St.styles=[Ct,$t],Tt([lt({reflect:!0})],St.prototype,"variant",void 0),Tt([lt({reflect:!0})],St.prototype,"color",void 0),Tt([lt({type:Boolean,attribute:"trailing-icon",reflect:!0})],St.prototype,"trailingIcon",void 0),Tt([lt({type:Boolean,attribute:"has-icon",reflect:!0})],St.prototype,"hasIcon",void 0),Tt([dt({slot:"icon",flatten:!0})],St.prototype,"assignedIcons",void 0),St=Tt([at("u-button")],St);const Ot=i`
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
`;var jt=function(t,e,r,o){for(var n,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o,s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,r,a):n(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let Bt=class extends _t{constructor(){super(...arguments),this.color="primary",this.size="medium",this.label=null,this.lowered=!1}get extended(){return!!this.label}renderContent(){const t=L`<span>${this.label}</span>`;return L`
      <span class="icon" aria-hidden="true"><slot></slot></span>
      ${this.label?t:F}
    `}};Bt.styles=[Ct,Ot],jt([lt({reflect:!0})],Bt.prototype,"color",void 0),jt([lt({reflect:!0})],Bt.prototype,"size",void 0),jt([lt({reflect:!0})],Bt.prototype,"label",void 0),jt([lt({type:Boolean,reflect:!0})],Bt.prototype,"lowered",void 0),jt([lt({type:Boolean,reflect:!0})],Bt.prototype,"extended",null),Bt=jt([at("u-fab")],Bt);const zt=i`
  :host {
    --_surface-container-highest-color: var(--u-color-surface-container-highest, rgb(230, 224, 233));
    width: var(--u-icon-button-size, 2.5rem);
    height: var(--u-icon-button-size, 2.5rem);
    border-radius: var(--u-icon-button-shape-corner, 9999px);
    font-family: var(--u-font-family-base, system-ui);
  }

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
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
`;var Pt=function(t,e,r,o){for(var n,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o,s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,r,a):n(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let Et=class extends _t{constructor(){super(...arguments),this.variant="standard",this.toggle=!1,this.hasSelectionIcon=!1,this.selected=!1,this.ariaLabelSelected=""}renderContent(){return L`
      <span class="icon" aria-hidden="true"><slot></slot></span>
      <span class="icon icon-selected" aria-hidden="true">
        <slot name="selected" @slotchange="${this.handleSlotChange}"></slot>
      </span>
    `}handleClick(t){this.toggle&&(this.selected=!this.selected)}getAriaLabel(){return this.selected&&this.ariaLabelSelected||super.getAriaLabel()}handleSlotChange(){this.hasSelectionIcon=this.selectedIcons.length>0}};Et.styles=[Ct,zt],Pt([lt({reflect:!0})],Et.prototype,"variant",void 0),Pt([lt({type:Boolean})],Et.prototype,"toggle",void 0),Pt([lt({type:Boolean,attribute:"has-selection-icon",reflect:!0})],Et.prototype,"hasSelectionIcon",void 0),Pt([lt({type:Boolean,reflect:!0})],Et.prototype,"selected",void 0),Pt([lt({attribute:"aria-label-selected"})],Et.prototype,"ariaLabelSelected",void 0),Pt([dt({slot:"selected",flatten:!0})],Et.prototype,"selectedIcons",void 0),Et=Pt([at("u-icon-button")],Et);const At=i`
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
`;var It=function(t,e,r,o){for(var n,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o,s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,r,a):n(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let Dt=class extends nt{constructor(){super(...arguments),this.align="end",this.stack=!1}render(){return L`
      <slot></slot>`}};Dt.styles=At,It([lt({reflect:!0})],Dt.prototype,"align",void 0),It([lt({type:Boolean,reflect:!0})],Dt.prototype,"stack",void 0),Dt=It([at("u-button-set")],Dt);const Ut=i`
  :host,
  * {
    font-family: var(--u-font-family-base, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol");
    box-sizing: border-box;
  }
`,Rt=i`
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
  :host([variant=elevated]) u-elevation {
    --u-elevation-level: var(--u-elevated-card-elevation-level, 1);
  }

  :host([variant=filled]) {
    background-color: var(--u-color-surface-container-highest, rgb(230, 224, 233));
  }

  :host([variant=outlined]) {
    border: var(--u-outlined-card-outline-width, 1px) solid var(--u-outlined-card-outline-color, var(--u-color-outline-variant, rgb(202, 196, 208)));
  }
`,Nt=i`
  :host {
    display: block;
  }

  :host(:has(slot > *)) {
    display: none;
  }

  :host([has-content]) {
    padding: var(--u-card-padding, 16px);
  }
`;var Lt=function(t,e,r,o){for(var n,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o,s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,r,a):n(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let Vt=class extends nt{constructor(){super(...arguments),this.hasContent=!1}render(){return L`
      <slot @slotchange="${this.handleSlotChange}"></slot>`}handleSlotChange(t){const e=t.target;if(this.hasContent=e.assignedElements({flatten:!0}).length>0,this.hasContent)return;const r=e.assignedNodes({flatten:!0});for(const t of r)if(t.nodeValue?.trim())return void(this.hasContent=!0);this.hasContent=!1}};Vt.styles=[Ut,Nt],Lt([lt({type:Boolean,attribute:"has-content",reflect:!0})],Vt.prototype,"hasContent",void 0),Vt=Lt([at("u-card-content")],Vt);const Ft=i`
  :host {
    display: block;
    aspect-ratio: 1;
    border-radius: var(--u-card-shape-corner, var(--u-shape-corner-medium, 12px));
  }

  :host([wide]) {
    aspect-ratio: 16/9;
  }
`;var Ht=function(t,e,r,o){for(var n,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o,s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,r,a):n(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let Wt=class extends nt{constructor(){super(...arguments),this.wide=!1}render(){return L`
      <slot></slot>`}};Wt.styles=[Ut,Ft],Ht([lt({type:Boolean,reflect:!0})],Wt.prototype,"wide",void 0),Wt=Ht([at("u-card-media")],Wt);var Jt=function(t,e,r,o){for(var n,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o,s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,r,a):n(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let qt=class extends nt{constructor(){super(...arguments),this.variant="elevated"}render(){return L`
      <u-elevation></u-elevation>
      <slot name="before-content"></slot>
      <u-card-content>
        <slot></slot>
      </u-card-content>
      <slot name="after-content"></slot>`}};qt.styles=[Ut,Rt],Jt([lt({reflect:!0})],qt.prototype,"variant",void 0),qt=Jt([at("u-card")],qt);var Kt=function(t,e,r,o){for(var n,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o,s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,r,a):n(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let Xt=class extends nt{constructor(){super(...arguments),this.handleInputChange=t=>{this.input!==document.elementFromPoint(t.clientX,t.clientY)&&this.ripple.createRipple()}}render(){return L`
      <div class="touch">
        <u-ripple><slot @slotchange="${this.handleSlotChange}"></slot></u-ripple>
      </div>`}handleSlotChange(){console.log("slotchange"),this.input&&this.input.removeEventListener("click",this.handleInputChange),this.input=this.assignedInputs[0],this.input&&this.input.addEventListener("click",this.handleInputChange)}};Xt.styles=[Ut,i`
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
    `],Kt([ut("u-ripple")],Xt.prototype,"ripple",void 0),Kt([dt({selector:"input",flatten:!0})],Xt.prototype,"assignedInputs",void 0),Xt=Kt([at("u-checkbox")],Xt);const Yt=i`
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
`;var Zt=function(t,e,r,o){for(var n,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o,s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,r,a):n(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let Gt=class extends nt{render(){return L`<slot></slot>`}};Gt.styles=Yt,Zt([lt({reflect:!0})],Gt.prototype,"margin",void 0),Gt=Zt([at("u-container")],Gt);const Qt=i`
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
`;var te=function(t,e,r,o){for(var n,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o,s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,r,a):n(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let ee=class extends nt{constructor(){super(...arguments),this.noMargin=!1}};ee.styles=Qt,te([lt({type:Boolean,attribute:"no-margin",reflect:!0})],ee.prototype,"noMargin",void 0),ee=te([at("u-divider")],ee);const re=i`
  :host {
    display: table-header-group;
  }

  ::slotted(u-tr:not(:first-child)) {
    border-top: 1px solid var(--u-color-outline-variant, rgb(202, 196, 208));
  }
`;var oe=function(t,e,r,o){for(var n,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o,s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,r,a):n(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let ne=class extends nt{render(){return L`<slot></slot>`}};ne.styles=[Ut,re],ne=oe([at("u-thead")],ne);const ie=i`
  :host {
    display: table-row-group;
  }

  ::slotted(u-tr:not(:first-child)) {
    border-top: 1px solid var(--u-color-outline-variant, rgb(202, 196, 208));
  }
`;var ae=function(t,e,r,o){for(var n,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o,s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,r,a):n(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let se=class extends nt{render(){return L`<slot></slot>`}};se.styles=[Ut,ie],se=ae([at("u-tbody")],se);const ce=i`
  :host {
    display: table-row;
  }
`;var le=function(t,e,r,o){for(var n,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o,s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,r,a):n(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let he=class extends nt{render(){return L`<slot></slot>`}};he.styles=[Ut,ce],he=le([at("u-tr")],he);const ue=i`
  :host {
    display: table-cell;
    padding: var(--u-td-padding, 13px 16px);
    font-size: var(--u-td-font-size, 0.875rem);
    font-weight: var(--u-td-font-weight, var(--u-font-weight-medium, 500));
    text-align: start;
  }
`;var de=function(t,e,r,o){for(var n,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o,s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,r,a):n(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let ve=class extends nt{render(){return L`<slot></slot>`}};ve.styles=[Ut,ue],ve=de([at("u-td")],ve);const pe=i`
  :host {
    display: table-cell;
    padding: var(--u-th-padding, 13px 16px);
    font-size: var(--u-th-font-size, 0.8125rem);
    font-weight: var(--u-th-font-weigh, var(--u-font-weight-medium, 500));
    text-align: start;
    color: var(--u-low-emphasis-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
  }
`;var fe=function(t,e,r,o){for(var n,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o,s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,r,a):n(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let be=class extends nt{render(){return L`<slot></slot>`}};be.styles=[Ut,pe],be=fe([at("u-th")],be);const ge=i`
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
`;class me extends nt{render(){return L`
      <slot name="header"></slot>
      <slot></slot>
`}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ye(t){return t<0?-1:0===t?0:1}function we(t,e,r){return(1-r)*t+r*e}function ke(t,e,r){return r<t?t:r>e?e:r}function Me(t,e){return[t[0]*e[0][0]+t[1]*e[0][1]+t[2]*e[0][2],t[0]*e[1][0]+t[1]*e[1][1]+t[2]*e[1][2],t[0]*e[2][0]+t[1]*e[2][1]+t[2]*e[2][2]]}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */me.styles=[Ut,ge],customElements.define("u-table",me);const xe=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],_e=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],Ce=[95.047,100,108.883];function $e(t,e,r){return(255<<24|(255&t)<<16|(255&e)<<8|255&r)>>>0}function Te(t){return $e(Ae(t[0]),Ae(t[1]),Ae(t[2]))}function Se(t){return t>>16&255}function Oe(t){return t>>8&255}function je(t){return 255&t}function Be(t){const e=function(t){return Me([Ee(Se(t)),Ee(Oe(t)),Ee(je(t))],xe)}(t)[1];return 116*Ie(e/100)-16}function ze(t){return 100*function(t){const e=216/24389,r=24389/27,o=t*t*t;return o>e?o:(116*t-16)/r}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */((t+16)/116)}function Pe(t){return 116*Ie(t/100)-16}function Ee(t){const e=t/255;return e<=.040449936?e/12.92*100:100*Math.pow((e+.055)/1.055,2.4)}function Ae(t){const e=t/100;let r=0;return r=e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055,o=0,n=255,(i=Math.round(255*r))<o?o:i>n?n:i;var o,n,i}function Ie(t){const e=24389/27;return t>216/24389?Math.pow(t,1/3):(e*t+16)/116}class De{static make(t=function(){return Ce}(),e=200/Math.PI*ze(50)/100,r=50,o=2,n=!1){const i=t,a=.401288*i[0]+.650173*i[1]+-.051461*i[2],s=-.250268*i[0]+1.204414*i[1]+.045854*i[2],c=-.002079*i[0]+.048952*i[1]+.953127*i[2],l=.8+o/10,h=l>=.9?we(.59,.69,10*(l-.9)):we(.525,.59,10*(l-.8));let u=n?1:l*(1-1/3.6*Math.exp((-e-42)/92));u=u>1?1:u<0?0:u;const d=l,v=[u*(100/a)+1-u,u*(100/s)+1-u,u*(100/c)+1-u],p=1/(5*e+1),f=p*p*p*p,b=1-f,g=f*e+.1*b*b*Math.cbrt(5*e),m=ze(r)/t[1],y=1.48+Math.sqrt(m),w=.725/Math.pow(m,.2),k=w,M=[Math.pow(g*v[0]*a/100,.42),Math.pow(g*v[1]*s/100,.42),Math.pow(g*v[2]*c/100,.42)],x=[400*M[0]/(M[0]+27.13),400*M[1]/(M[1]+27.13),400*M[2]/(M[2]+27.13)];return new De(m,(2*x[0]+x[1]+.05*x[2])*w,w,k,h,d,v,g,Math.pow(g,.25),y)}constructor(t,e,r,o,n,i,a,s,c,l){this.n=t,this.aw=e,this.nbb=r,this.ncb=o,this.c=n,this.nc=i,this.rgbD=a,this.fl=s,this.fLRoot=c,this.z=l}}De.DEFAULT=De.make();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ue{constructor(t,e,r,o,n,i,a,s,c){this.hue=t,this.chroma=e,this.j=r,this.q=o,this.m=n,this.s=i,this.jstar=a,this.astar=s,this.bstar=c}distance(t){const e=this.jstar-t.jstar,r=this.astar-t.astar,o=this.bstar-t.bstar,n=Math.sqrt(e*e+r*r+o*o);return 1.41*Math.pow(n,.63)}static fromInt(t){return Ue.fromIntInViewingConditions(t,De.DEFAULT)}static fromIntInViewingConditions(t,e){const r=(65280&t)>>8,o=255&t,n=Ee((16711680&t)>>16),i=Ee(r),a=Ee(o),s=.41233895*n+.35762064*i+.18051042*a,c=.2126*n+.7152*i+.0722*a,l=.01932141*n+.11916382*i+.95034478*a,h=.401288*s+.650173*c-.051461*l,u=-.250268*s+1.204414*c+.045854*l,d=-.002079*s+.048952*c+.953127*l,v=e.rgbD[0]*h,p=e.rgbD[1]*u,f=e.rgbD[2]*d,b=Math.pow(e.fl*Math.abs(v)/100,.42),g=Math.pow(e.fl*Math.abs(p)/100,.42),m=Math.pow(e.fl*Math.abs(f)/100,.42),y=400*ye(v)*b/(b+27.13),w=400*ye(p)*g/(g+27.13),k=400*ye(f)*m/(m+27.13),M=(11*y+-12*w+k)/11,x=(y+w-2*k)/9,_=(20*y+20*w+21*k)/20,C=(40*y+20*w+k)/20,$=180*Math.atan2(x,M)/Math.PI,T=$<0?$+360:$>=360?$-360:$,S=T*Math.PI/180,O=C*e.nbb,j=100*Math.pow(O/e.aw,e.c*e.z),B=4/e.c*Math.sqrt(j/100)*(e.aw+4)*e.fLRoot,z=T<20.14?T+360:T,P=5e4/13*(.25*(Math.cos(z*Math.PI/180+2)+3.8))*e.nc*e.ncb*Math.sqrt(M*M+x*x)/(_+.305),E=Math.pow(P,.9)*Math.pow(1.64-Math.pow(.29,e.n),.73),A=E*Math.sqrt(j/100),I=A*e.fLRoot,D=50*Math.sqrt(E*e.c/(e.aw+4)),U=(1+100*.007)*j/(1+.007*j),R=1/.0228*Math.log(1+.0228*I),N=R*Math.cos(S),L=R*Math.sin(S);return new Ue(T,A,j,B,I,D,U,N,L)}static fromJch(t,e,r){return Ue.fromJchInViewingConditions(t,e,r,De.DEFAULT)}static fromJchInViewingConditions(t,e,r,o){const n=4/o.c*Math.sqrt(t/100)*(o.aw+4)*o.fLRoot,i=e*o.fLRoot,a=e/Math.sqrt(t/100),s=50*Math.sqrt(a*o.c/(o.aw+4)),c=r*Math.PI/180,l=(1+100*.007)*t/(1+.007*t),h=1/.0228*Math.log(1+.0228*i),u=h*Math.cos(c),d=h*Math.sin(c);return new Ue(r,e,t,n,i,s,l,u,d)}static fromUcs(t,e,r){return Ue.fromUcsInViewingConditions(t,e,r,De.DEFAULT)}static fromUcsInViewingConditions(t,e,r,o){const n=e,i=r,a=Math.sqrt(n*n+i*i),s=(Math.exp(.0228*a)-1)/.0228/o.fLRoot;let c=Math.atan2(i,n)*(180/Math.PI);c<0&&(c+=360);const l=t/(1-.007*(t-100));return Ue.fromJchInViewingConditions(l,s,c,o)}toInt(){return this.viewed(De.DEFAULT)}viewed(t){const e=0===this.chroma||0===this.j?0:this.chroma/Math.sqrt(this.j/100),r=Math.pow(e/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),o=this.hue*Math.PI/180,n=.25*(Math.cos(o+2)+3.8),i=t.aw*Math.pow(this.j/100,1/t.c/t.z),a=n*(5e4/13)*t.nc*t.ncb,s=i/t.nbb,c=Math.sin(o),l=Math.cos(o),h=23*(s+.305)*r/(23*a+11*r*l+108*r*c),u=h*l,d=h*c,v=(460*s+451*u+288*d)/1403,p=(460*s-891*u-261*d)/1403,f=(460*s-220*u-6300*d)/1403,b=Math.max(0,27.13*Math.abs(v)/(400-Math.abs(v))),g=ye(v)*(100/t.fl)*Math.pow(b,1/.42),m=Math.max(0,27.13*Math.abs(p)/(400-Math.abs(p))),y=ye(p)*(100/t.fl)*Math.pow(m,1/.42),w=Math.max(0,27.13*Math.abs(f)/(400-Math.abs(f))),k=ye(f)*(100/t.fl)*Math.pow(w,1/.42),M=g/t.rgbD[0],x=y/t.rgbD[1],_=k/t.rgbD[2],C=function(t,e,r){const o=_e,n=o[0][0]*t+o[0][1]*e+o[0][2]*r,i=o[1][0]*t+o[1][1]*e+o[1][2]*r,a=o[2][0]*t+o[2][1]*e+o[2][2]*r;return $e(Ae(n),Ae(i),Ae(a))}(1.86206786*M-1.01125463*x+.14918677*_,.38752654*M+.62144744*x-.00897398*_,-.0158415*M-.03412294*x+1.04996444*_);return C}static fromXyzInViewingConditions(t,e,r,o){const n=.401288*t+.650173*e-.051461*r,i=-.250268*t+1.204414*e+.045854*r,a=-.002079*t+.048952*e+.953127*r,s=o.rgbD[0]*n,c=o.rgbD[1]*i,l=o.rgbD[2]*a,h=Math.pow(o.fl*Math.abs(s)/100,.42),u=Math.pow(o.fl*Math.abs(c)/100,.42),d=Math.pow(o.fl*Math.abs(l)/100,.42),v=400*ye(s)*h/(h+27.13),p=400*ye(c)*u/(u+27.13),f=400*ye(l)*d/(d+27.13),b=(11*v+-12*p+f)/11,g=(v+p-2*f)/9,m=(20*v+20*p+21*f)/20,y=(40*v+20*p+f)/20,w=180*Math.atan2(g,b)/Math.PI,k=w<0?w+360:w>=360?w-360:w,M=k*Math.PI/180,x=y*o.nbb,_=100*Math.pow(x/o.aw,o.c*o.z),C=4/o.c*Math.sqrt(_/100)*(o.aw+4)*o.fLRoot,$=k<20.14?k+360:k,T=5e4/13*(1/4*(Math.cos($*Math.PI/180+2)+3.8))*o.nc*o.ncb*Math.sqrt(b*b+g*g)/(m+.305),S=Math.pow(T,.9)*Math.pow(1.64-Math.pow(.29,o.n),.73),O=S*Math.sqrt(_/100),j=O*o.fLRoot,B=50*Math.sqrt(S*o.c/(o.aw+4)),z=(1+100*.007)*_/(1+.007*_),P=Math.log(1+.0228*j)/.0228,E=P*Math.cos(M),A=P*Math.sin(M);return new Ue(k,O,_,C,j,B,z,E,A)}xyzInViewingConditions(t){const e=0===this.chroma||0===this.j?0:this.chroma/Math.sqrt(this.j/100),r=Math.pow(e/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),o=this.hue*Math.PI/180,n=.25*(Math.cos(o+2)+3.8),i=t.aw*Math.pow(this.j/100,1/t.c/t.z),a=n*(5e4/13)*t.nc*t.ncb,s=i/t.nbb,c=Math.sin(o),l=Math.cos(o),h=23*(s+.305)*r/(23*a+11*r*l+108*r*c),u=h*l,d=h*c,v=(460*s+451*u+288*d)/1403,p=(460*s-891*u-261*d)/1403,f=(460*s-220*u-6300*d)/1403,b=Math.max(0,27.13*Math.abs(v)/(400-Math.abs(v))),g=ye(v)*(100/t.fl)*Math.pow(b,1/.42),m=Math.max(0,27.13*Math.abs(p)/(400-Math.abs(p))),y=ye(p)*(100/t.fl)*Math.pow(m,1/.42),w=Math.max(0,27.13*Math.abs(f)/(400-Math.abs(f))),k=ye(f)*(100/t.fl)*Math.pow(w,1/.42),M=g/t.rgbD[0],x=y/t.rgbD[1],_=k/t.rgbD[2];return[1.86206786*M-1.01125463*x+.14918677*_,.38752654*M+.62144744*x-.00897398*_,-.0158415*M-.03412294*x+1.04996444*_]}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{static sanitizeRadians(t){return(t+8*Math.PI)%(2*Math.PI)}static trueDelinearized(t){const e=t/100;let r=0;return r=e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055,255*r}static chromaticAdaptation(t){const e=Math.pow(Math.abs(t),.42);return 400*ye(t)*e/(e+27.13)}static hueOf(t){const e=Me(t,Re.SCALED_DISCOUNT_FROM_LINRGB),r=Re.chromaticAdaptation(e[0]),o=Re.chromaticAdaptation(e[1]),n=Re.chromaticAdaptation(e[2]),i=(11*r+-12*o+n)/11,a=(r+o-2*n)/9;return Math.atan2(a,i)}static areInCyclicOrder(t,e,r){return Re.sanitizeRadians(e-t)<Re.sanitizeRadians(r-t)}static intercept(t,e,r){return(e-t)/(r-t)}static lerpPoint(t,e,r){return[t[0]+(r[0]-t[0])*e,t[1]+(r[1]-t[1])*e,t[2]+(r[2]-t[2])*e]}static setCoordinate(t,e,r,o){const n=Re.intercept(t[o],e,r[o]);return Re.lerpPoint(t,n,r)}static isBounded(t){return 0<=t&&t<=100}static nthVertex(t,e){const r=Re.Y_FROM_LINRGB[0],o=Re.Y_FROM_LINRGB[1],n=Re.Y_FROM_LINRGB[2],i=e%4<=1?0:100,a=e%2==0?0:100;if(e<4){const e=i,s=a,c=(t-e*o-s*n)/r;return Re.isBounded(c)?[c,e,s]:[-1,-1,-1]}if(e<8){const e=i,s=a,c=(t-s*r-e*n)/o;return Re.isBounded(c)?[s,c,e]:[-1,-1,-1]}{const e=i,s=a,c=(t-e*r-s*o)/n;return Re.isBounded(c)?[e,s,c]:[-1,-1,-1]}}static bisectToSegment(t,e){let r=[-1,-1,-1],o=r,n=0,i=0,a=!1,s=!0;for(let c=0;c<12;c++){const l=Re.nthVertex(t,c);if(l[0]<0)continue;const h=Re.hueOf(l);a?(s||Re.areInCyclicOrder(n,h,i))&&(s=!1,Re.areInCyclicOrder(n,e,h)?(o=l,i=h):(r=l,n=h)):(r=l,o=l,n=h,i=h,a=!0)}return[r,o]}static midpoint(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2]}static criticalPlaneBelow(t){return Math.floor(t-.5)}static criticalPlaneAbove(t){return Math.ceil(t-.5)}static bisectToLimit(t,e){const r=Re.bisectToSegment(t,e);let o=r[0],n=Re.hueOf(o),i=r[1];for(let t=0;t<3;t++)if(o[t]!==i[t]){let r=-1,a=255;o[t]<i[t]?(r=Re.criticalPlaneBelow(Re.trueDelinearized(o[t])),a=Re.criticalPlaneAbove(Re.trueDelinearized(i[t]))):(r=Re.criticalPlaneAbove(Re.trueDelinearized(o[t])),a=Re.criticalPlaneBelow(Re.trueDelinearized(i[t])));for(let s=0;s<8&&!(Math.abs(a-r)<=1);s++){const s=Math.floor((r+a)/2),c=Re.CRITICAL_PLANES[s],l=Re.setCoordinate(o,c,i,t),h=Re.hueOf(l);Re.areInCyclicOrder(n,e,h)?(i=l,a=s):(o=l,n=h,r=s)}}return Re.midpoint(o,i)}static inverseChromaticAdaptation(t){const e=Math.abs(t),r=Math.max(0,27.13*e/(400-e));return ye(t)*Math.pow(r,1/.42)}static findResultByJ(t,e,r){let o=11*Math.sqrt(r);const n=De.DEFAULT,i=1/Math.pow(1.64-Math.pow(.29,n.n),.73),a=.25*(Math.cos(t+2)+3.8)*(5e4/13)*n.nc*n.ncb,s=Math.sin(t),c=Math.cos(t);for(let t=0;t<5;t++){const l=o/100,h=0===e||0===o?0:e/Math.sqrt(l),u=Math.pow(h*i,1/.9),d=n.aw*Math.pow(l,1/n.c/n.z)/n.nbb,v=23*(d+.305)*u/(23*a+11*u*c+108*u*s),p=v*c,f=v*s,b=(460*d+451*p+288*f)/1403,g=(460*d-891*p-261*f)/1403,m=(460*d-220*p-6300*f)/1403,y=Me([Re.inverseChromaticAdaptation(b),Re.inverseChromaticAdaptation(g),Re.inverseChromaticAdaptation(m)],Re.LINRGB_FROM_SCALED_DISCOUNT);if(y[0]<0||y[1]<0||y[2]<0)return 0;const w=Re.Y_FROM_LINRGB[0],k=Re.Y_FROM_LINRGB[1],M=Re.Y_FROM_LINRGB[2],x=w*y[0]+k*y[1]+M*y[2];if(x<=0)return 0;if(4===t||Math.abs(x-r)<.002)return y[0]>100.01||y[1]>100.01||y[2]>100.01?0:Te(y);o-=(x-r)*o/(2*x)}return 0}static solveToInt(t,e,r){if(e<1e-4||r<1e-4||r>99.9999)return function(t){const e=Ae(ze(t));return $e(e,e,e)}(r);var o;o=t,(o%=360)<0&&(o+=360);const n=(t=o)/180*Math.PI,i=ze(r),a=Re.findResultByJ(n,e,i);if(0!==a)return a;return Te(Re.bisectToLimit(i,n))}static solveToCam(t,e,r){return Ue.fromInt(Re.solveToInt(t,e,r))}}Re.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]],Re.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]],Re.Y_FROM_LINRGB=[.2126,.7152,.0722],Re.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ne{static from(t,e,r){return new Ne(Re.solveToInt(t,e,r))}static fromInt(t){return new Ne(t)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(t){this.setInternalState(Re.solveToInt(t,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(t){this.setInternalState(Re.solveToInt(this.internalHue,t,this.internalTone))}get tone(){return this.internalTone}set tone(t){this.setInternalState(Re.solveToInt(this.internalHue,this.internalChroma,t))}constructor(t){this.argb=t;const e=Ue.fromInt(t);this.internalHue=e.hue,this.internalChroma=e.chroma,this.internalTone=Be(t),this.argb=t}setInternalState(t){const e=Ue.fromInt(t);this.internalHue=e.hue,this.internalChroma=e.chroma,this.internalTone=Be(t),this.argb=t}inViewingConditions(t){const e=Ue.fromInt(this.toInt()).xyzInViewingConditions(t),r=Ue.fromXyzInViewingConditions(e[0],e[1],e[2],De.make());return Ne.from(r.hue,r.chroma,Pe(e[1]))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{static ratioOfTones(t,e){return t=ke(0,100,t),e=ke(0,100,e),Le.ratioOfYs(ze(t),ze(e))}static ratioOfYs(t,e){const r=t>e?t:e;return(r+5)/((r===e?t:e)+5)}static lighter(t,e){if(t<0||t>100)return-1;const r=ze(t),o=e*(r+5)-5,n=Le.ratioOfYs(o,r),i=Math.abs(n-e);if(n<e&&i>.04)return-1;const a=Pe(o)+.4;return a<0||a>100?-1:a}static darker(t,e){if(t<0||t>100)return-1;const r=ze(t),o=(r+5)/e-5,n=Le.ratioOfYs(r,o),i=Math.abs(n-e);if(n<e&&i>.04)return-1;const a=Pe(o)-.4;return a<0||a>100?-1:a}static lighterUnsafe(t,e){const r=Le.lighter(t,e);return r<0?100:r}static darkerUnsafe(t,e){const r=Le.darker(t,e);return r<0?0:r}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{static isDisliked(t){const e=Math.round(t.hue)>=90&&Math.round(t.hue)<=111,r=Math.round(t.chroma)>16,o=Math.round(t.tone)<65;return e&&r&&o}static fixIfDisliked(t){return Ve.isDisliked(t)?Ne.from(t.hue,t.chroma,70):t}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{static fromPalette(t){return new Fe(t.name??"",t.palette,t.tone,t.isBackground??!1,t.background,t.secondBackground,t.contrastCurve,t.toneDeltaPair)}constructor(t,e,r,o,n,i,a,s){if(this.name=t,this.palette=e,this.tone=r,this.isBackground=o,this.background=n,this.secondBackground=i,this.contrastCurve=a,this.toneDeltaPair=s,this.hctCache=new Map,!n&&i)throw new Error(`Color ${t} has secondBackgrounddefined, but background is not defined.`);if(!n&&a)throw new Error(`Color ${t} has contrastCurvedefined, but background is not defined.`);if(n&&!a)throw new Error(`Color ${t} has backgrounddefined, but contrastCurve is not defined.`)}getArgb(t){return this.getHct(t).toInt()}getHct(t){const e=this.hctCache.get(t);if(null!=e)return e;const r=this.getTone(t),o=this.palette(t).getHct(r);return this.hctCache.size>4&&this.hctCache.clear(),this.hctCache.set(t,o),o}getTone(t){const e=t.contrastLevel<0;if(this.toneDeltaPair){const r=this.toneDeltaPair(t),o=r.roleA,n=r.roleB,i=r.delta,a=r.polarity,s=r.stayTogether,c=this.background(t).getTone(t),l="nearer"===a||"lighter"===a&&!t.isDark||"darker"===a&&t.isDark,h=l?o:n,u=l?n:o,d=this.name===h.name,v=t.isDark?1:-1,p=h.contrastCurve.getContrast(t.contrastLevel),f=u.contrastCurve.getContrast(t.contrastLevel),b=h.tone(t);let g=Le.ratioOfTones(c,b)>=p?b:Fe.foregroundTone(c,p);const m=u.tone(t);let y=Le.ratioOfTones(c,m)>=f?m:Fe.foregroundTone(c,f);return e&&(g=Fe.foregroundTone(c,p),y=Fe.foregroundTone(c,f)),(y-g)*v>=i||(y=ke(0,100,g+i*v),(y-g)*v>=i||(g=ke(0,100,y-i*v))),50<=g&&g<60?v>0?(g=60,y=Math.max(y,g+i*v)):(g=49,y=Math.min(y,g+i*v)):50<=y&&y<60&&(s?v>0?(g=60,y=Math.max(y,g+i*v)):(g=49,y=Math.min(y,g+i*v)):y=v>0?60:49),d?g:y}{let r=this.tone(t);if(null==this.background)return r;const o=this.background(t).getTone(t),n=this.contrastCurve.getContrast(t.contrastLevel);if(Le.ratioOfTones(o,r)>=n||(r=Fe.foregroundTone(o,n)),e&&(r=Fe.foregroundTone(o,n)),this.isBackground&&50<=r&&r<60&&(r=Le.ratioOfTones(49,o)>=n?49:60),this.secondBackground){const[e,o]=[this.background,this.secondBackground],[i,a]=[e(t).getTone(t),o(t).getTone(t)],[s,c]=[Math.max(i,a),Math.min(i,a)];if(Le.ratioOfTones(s,r)>=n&&Le.ratioOfTones(c,r)>=n)return r;const l=Le.lighter(s,n),h=Le.darker(c,n),u=[];-1!==l&&u.push(l),-1!==h&&u.push(h);return Fe.tonePrefersLightForeground(i)||Fe.tonePrefersLightForeground(a)?l<0?100:l:1===u.length?u[0]:h<0?0:h}return r}}static foregroundTone(t,e){const r=Le.lighterUnsafe(t,e),o=Le.darkerUnsafe(t,e),n=Le.ratioOfTones(r,t),i=Le.ratioOfTones(o,t);if(Fe.tonePrefersLightForeground(t)){const t=Math.abs(n-i)<.1&&n<e&&i<e;return n>=e||n>=i||t?r:o}return i>=e||i>=n?o:r}static tonePrefersLightForeground(t){return Math.round(t)<60}static toneAllowsLightForeground(t){return Math.round(t)<=49}static enableLightForeground(t){return Fe.tonePrefersLightForeground(t)&&!Fe.toneAllowsLightForeground(t)?49:t}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He;!function(t){t[t.MONOCHROME=0]="MONOCHROME",t[t.NEUTRAL=1]="NEUTRAL",t[t.TONAL_SPOT=2]="TONAL_SPOT",t[t.VIBRANT=3]="VIBRANT",t[t.EXPRESSIVE=4]="EXPRESSIVE",t[t.FIDELITY=5]="FIDELITY",t[t.CONTENT=6]="CONTENT",t[t.RAINBOW=7]="RAINBOW",t[t.FRUIT_SALAD=8]="FRUIT_SALAD"}(He||(He={}));
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class We{constructor(t,e,r,o){this.low=t,this.normal=e,this.medium=r,this.high=o}getContrast(t){return t<=-1?this.low:t<0?we(this.low,this.normal,(t- -1)/1):t<.5?we(this.normal,this.medium,(t-0)/.5):t<1?we(this.medium,this.high,(t-.5)/.5):this.high}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t,e,r,o,n){this.roleA=t,this.roleB=e,this.delta=r,this.polarity=o,this.stayTogether=n}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t){return t.variant===He.FIDELITY||t.variant===He.CONTENT}function Ke(t){return t.variant===He.MONOCHROME}function Xe(t,e){const r=t.inViewingConditions(function(t){return De.make(void 0,void 0,t.isDark?30:80,void 0,void 0)}(e));return Fe.tonePrefersLightForeground(t.tone)&&!Fe.toneAllowsLightForeground(r.tone)?Fe.enableLightForeground(t.tone):Fe.enableLightForeground(r.tone)}class Ye{static highestSurface(t){return t.isDark?Ye.surfaceBright:Ye.surfaceDim}}Ye.contentAccentToneDelta=15,Ye.primaryPaletteKeyColor=Fe.fromPalette({name:"primary_palette_key_color",palette:t=>t.primaryPalette,tone:t=>t.primaryPalette.keyColor.tone}),Ye.secondaryPaletteKeyColor=Fe.fromPalette({name:"secondary_palette_key_color",palette:t=>t.secondaryPalette,tone:t=>t.secondaryPalette.keyColor.tone}),Ye.tertiaryPaletteKeyColor=Fe.fromPalette({name:"tertiary_palette_key_color",palette:t=>t.tertiaryPalette,tone:t=>t.tertiaryPalette.keyColor.tone}),Ye.neutralPaletteKeyColor=Fe.fromPalette({name:"neutral_palette_key_color",palette:t=>t.neutralPalette,tone:t=>t.neutralPalette.keyColor.tone}),Ye.neutralVariantPaletteKeyColor=Fe.fromPalette({name:"neutral_variant_palette_key_color",palette:t=>t.neutralVariantPalette,tone:t=>t.neutralVariantPalette.keyColor.tone}),Ye.background=Fe.fromPalette({name:"background",palette:t=>t.neutralPalette,tone:t=>t.isDark?6:98,isBackground:!0}),Ye.onBackground=Fe.fromPalette({name:"on_background",palette:t=>t.neutralPalette,tone:t=>t.isDark?90:10,background:t=>Ye.background,contrastCurve:new We(3,3,4.5,7)}),Ye.surface=Fe.fromPalette({name:"surface",palette:t=>t.neutralPalette,tone:t=>t.isDark?6:98,isBackground:!0}),Ye.surfaceDim=Fe.fromPalette({name:"surface_dim",palette:t=>t.neutralPalette,tone:t=>t.isDark?6:87,isBackground:!0}),Ye.surfaceBright=Fe.fromPalette({name:"surface_bright",palette:t=>t.neutralPalette,tone:t=>t.isDark?24:98,isBackground:!0}),Ye.surfaceContainerLowest=Fe.fromPalette({name:"surface_container_lowest",palette:t=>t.neutralPalette,tone:t=>t.isDark?4:100,isBackground:!0}),Ye.surfaceContainerLow=Fe.fromPalette({name:"surface_container_low",palette:t=>t.neutralPalette,tone:t=>t.isDark?10:96,isBackground:!0}),Ye.surfaceContainer=Fe.fromPalette({name:"surface_container",palette:t=>t.neutralPalette,tone:t=>t.isDark?12:94,isBackground:!0}),Ye.surfaceContainerHigh=Fe.fromPalette({name:"surface_container_high",palette:t=>t.neutralPalette,tone:t=>t.isDark?17:92,isBackground:!0}),Ye.surfaceContainerHighest=Fe.fromPalette({name:"surface_container_highest",palette:t=>t.neutralPalette,tone:t=>t.isDark?22:90,isBackground:!0}),Ye.onSurface=Fe.fromPalette({name:"on_surface",palette:t=>t.neutralPalette,tone:t=>t.isDark?90:10,background:t=>Ye.highestSurface(t),contrastCurve:new We(4.5,7,11,21)}),Ye.surfaceVariant=Fe.fromPalette({name:"surface_variant",palette:t=>t.neutralVariantPalette,tone:t=>t.isDark?30:90,isBackground:!0}),Ye.onSurfaceVariant=Fe.fromPalette({name:"on_surface_variant",palette:t=>t.neutralVariantPalette,tone:t=>t.isDark?80:30,background:t=>Ye.highestSurface(t),contrastCurve:new We(3,4.5,7,11)}),Ye.inverseSurface=Fe.fromPalette({name:"inverse_surface",palette:t=>t.neutralPalette,tone:t=>t.isDark?90:20}),Ye.inverseOnSurface=Fe.fromPalette({name:"inverse_on_surface",palette:t=>t.neutralPalette,tone:t=>t.isDark?20:95,background:t=>Ye.inverseSurface,contrastCurve:new We(4.5,7,11,21)}),Ye.outline=Fe.fromPalette({name:"outline",palette:t=>t.neutralVariantPalette,tone:t=>t.isDark?60:50,background:t=>Ye.highestSurface(t),contrastCurve:new We(1.5,3,4.5,7)}),Ye.outlineVariant=Fe.fromPalette({name:"outline_variant",palette:t=>t.neutralVariantPalette,tone:t=>t.isDark?30:80,background:t=>Ye.highestSurface(t),contrastCurve:new We(1,1,3,7)}),Ye.shadow=Fe.fromPalette({name:"shadow",palette:t=>t.neutralPalette,tone:t=>0}),Ye.scrim=Fe.fromPalette({name:"scrim",palette:t=>t.neutralPalette,tone:t=>0}),Ye.surfaceTint=Fe.fromPalette({name:"surface_tint",palette:t=>t.primaryPalette,tone:t=>t.isDark?80:40,isBackground:!0}),Ye.primary=Fe.fromPalette({name:"primary",palette:t=>t.primaryPalette,tone:t=>Ke(t)?t.isDark?100:0:t.isDark?80:40,isBackground:!0,background:t=>Ye.highestSurface(t),contrastCurve:new We(3,4.5,7,11),toneDeltaPair:t=>new Je(Ye.primaryContainer,Ye.primary,15,"nearer",!1)}),Ye.onPrimary=Fe.fromPalette({name:"on_primary",palette:t=>t.primaryPalette,tone:t=>Ke(t)?t.isDark?10:90:t.isDark?20:100,background:t=>Ye.primary,contrastCurve:new We(4.5,7,11,21)}),Ye.primaryContainer=Fe.fromPalette({name:"primary_container",palette:t=>t.primaryPalette,tone:t=>qe(t)?Xe(t.sourceColorHct,t):Ke(t)?t.isDark?85:25:t.isDark?30:90,isBackground:!0,background:t=>Ye.highestSurface(t),contrastCurve:new We(1,1,3,7),toneDeltaPair:t=>new Je(Ye.primaryContainer,Ye.primary,15,"nearer",!1)}),Ye.onPrimaryContainer=Fe.fromPalette({name:"on_primary_container",palette:t=>t.primaryPalette,tone:t=>qe(t)?Fe.foregroundTone(Ye.primaryContainer.tone(t),4.5):Ke(t)?t.isDark?0:100:t.isDark?90:10,background:t=>Ye.primaryContainer,contrastCurve:new We(4.5,7,11,21)}),Ye.inversePrimary=Fe.fromPalette({name:"inverse_primary",palette:t=>t.primaryPalette,tone:t=>t.isDark?40:80,background:t=>Ye.inverseSurface,contrastCurve:new We(3,4.5,7,11)}),Ye.secondary=Fe.fromPalette({name:"secondary",palette:t=>t.secondaryPalette,tone:t=>t.isDark?80:40,isBackground:!0,background:t=>Ye.highestSurface(t),contrastCurve:new We(3,4.5,7,11),toneDeltaPair:t=>new Je(Ye.secondaryContainer,Ye.secondary,15,"nearer",!1)}),Ye.onSecondary=Fe.fromPalette({name:"on_secondary",palette:t=>t.secondaryPalette,tone:t=>Ke(t)?t.isDark?10:100:t.isDark?20:100,background:t=>Ye.secondary,contrastCurve:new We(4.5,7,11,21)}),Ye.secondaryContainer=Fe.fromPalette({name:"secondary_container",palette:t=>t.secondaryPalette,tone:t=>{const e=t.isDark?30:90;if(Ke(t))return t.isDark?30:85;if(!qe(t))return e;let r=function(t,e,r,o){let n=r,i=Ne.from(t,e,r);if(i.chroma<e){let r=i.chroma;for(;i.chroma<e;){n+=o?-1:1;const a=Ne.from(t,e,n);if(r>a.chroma)break;if(Math.abs(a.chroma-e)<.4)break;Math.abs(a.chroma-e)<Math.abs(i.chroma-e)&&(i=a),r=Math.max(r,a.chroma)}}return n}(t.secondaryPalette.hue,t.secondaryPalette.chroma,e,!t.isDark);return r=Xe(t.secondaryPalette.getHct(r),t),r},isBackground:!0,background:t=>Ye.highestSurface(t),contrastCurve:new We(1,1,3,7),toneDeltaPair:t=>new Je(Ye.secondaryContainer,Ye.secondary,15,"nearer",!1)}),Ye.onSecondaryContainer=Fe.fromPalette({name:"on_secondary_container",palette:t=>t.secondaryPalette,tone:t=>qe(t)?Fe.foregroundTone(Ye.secondaryContainer.tone(t),4.5):t.isDark?90:10,background:t=>Ye.secondaryContainer,contrastCurve:new We(4.5,7,11,21)}),Ye.tertiary=Fe.fromPalette({name:"tertiary",palette:t=>t.tertiaryPalette,tone:t=>Ke(t)?t.isDark?90:25:t.isDark?80:40,isBackground:!0,background:t=>Ye.highestSurface(t),contrastCurve:new We(3,4.5,7,11),toneDeltaPair:t=>new Je(Ye.tertiaryContainer,Ye.tertiary,15,"nearer",!1)}),Ye.onTertiary=Fe.fromPalette({name:"on_tertiary",palette:t=>t.tertiaryPalette,tone:t=>Ke(t)?t.isDark?10:90:t.isDark?20:100,background:t=>Ye.tertiary,contrastCurve:new We(4.5,7,11,21)}),Ye.tertiaryContainer=Fe.fromPalette({name:"tertiary_container",palette:t=>t.tertiaryPalette,tone:t=>{if(Ke(t))return t.isDark?60:49;if(!qe(t))return t.isDark?30:90;const e=Xe(t.tertiaryPalette.getHct(t.sourceColorHct.tone),t),r=t.tertiaryPalette.getHct(e);return Ve.fixIfDisliked(r).tone},isBackground:!0,background:t=>Ye.highestSurface(t),contrastCurve:new We(1,1,3,7),toneDeltaPair:t=>new Je(Ye.tertiaryContainer,Ye.tertiary,15,"nearer",!1)}),Ye.onTertiaryContainer=Fe.fromPalette({name:"on_tertiary_container",palette:t=>t.tertiaryPalette,tone:t=>Ke(t)?t.isDark?0:100:qe(t)?Fe.foregroundTone(Ye.tertiaryContainer.tone(t),4.5):t.isDark?90:10,background:t=>Ye.tertiaryContainer,contrastCurve:new We(4.5,7,11,21)}),Ye.error=Fe.fromPalette({name:"error",palette:t=>t.errorPalette,tone:t=>t.isDark?80:40,isBackground:!0,background:t=>Ye.highestSurface(t),contrastCurve:new We(3,4.5,7,11),toneDeltaPair:t=>new Je(Ye.errorContainer,Ye.error,15,"nearer",!1)}),Ye.onError=Fe.fromPalette({name:"on_error",palette:t=>t.errorPalette,tone:t=>t.isDark?20:100,background:t=>Ye.error,contrastCurve:new We(4.5,7,11,21)}),Ye.errorContainer=Fe.fromPalette({name:"error_container",palette:t=>t.errorPalette,tone:t=>t.isDark?30:90,isBackground:!0,background:t=>Ye.highestSurface(t),contrastCurve:new We(1,1,3,7),toneDeltaPair:t=>new Je(Ye.errorContainer,Ye.error,15,"nearer",!1)}),Ye.onErrorContainer=Fe.fromPalette({name:"on_error_container",palette:t=>t.errorPalette,tone:t=>t.isDark?90:10,background:t=>Ye.errorContainer,contrastCurve:new We(4.5,7,11,21)}),Ye.primaryFixed=Fe.fromPalette({name:"primary_fixed",palette:t=>t.primaryPalette,tone:t=>Ke(t)?40:90,isBackground:!0,background:t=>Ye.highestSurface(t),contrastCurve:new We(1,1,3,7),toneDeltaPair:t=>new Je(Ye.primaryFixed,Ye.primaryFixedDim,10,"lighter",!0)}),Ye.primaryFixedDim=Fe.fromPalette({name:"primary_fixed_dim",palette:t=>t.primaryPalette,tone:t=>Ke(t)?30:80,isBackground:!0,background:t=>Ye.highestSurface(t),contrastCurve:new We(1,1,3,7),toneDeltaPair:t=>new Je(Ye.primaryFixed,Ye.primaryFixedDim,10,"lighter",!0)}),Ye.onPrimaryFixed=Fe.fromPalette({name:"on_primary_fixed",palette:t=>t.primaryPalette,tone:t=>Ke(t)?100:10,background:t=>Ye.primaryFixedDim,secondBackground:t=>Ye.primaryFixed,contrastCurve:new We(4.5,7,11,21)}),Ye.onPrimaryFixedVariant=Fe.fromPalette({name:"on_primary_fixed_variant",palette:t=>t.primaryPalette,tone:t=>Ke(t)?90:30,background:t=>Ye.primaryFixedDim,secondBackground:t=>Ye.primaryFixed,contrastCurve:new We(3,4.5,7,11)}),Ye.secondaryFixed=Fe.fromPalette({name:"secondary_fixed",palette:t=>t.secondaryPalette,tone:t=>Ke(t)?80:90,isBackground:!0,background:t=>Ye.highestSurface(t),contrastCurve:new We(1,1,3,7),toneDeltaPair:t=>new Je(Ye.secondaryFixed,Ye.secondaryFixedDim,10,"lighter",!0)}),Ye.secondaryFixedDim=Fe.fromPalette({name:"secondary_fixed_dim",palette:t=>t.secondaryPalette,tone:t=>Ke(t)?70:80,isBackground:!0,background:t=>Ye.highestSurface(t),contrastCurve:new We(1,1,3,7),toneDeltaPair:t=>new Je(Ye.secondaryFixed,Ye.secondaryFixedDim,10,"lighter",!0)}),Ye.onSecondaryFixed=Fe.fromPalette({name:"on_secondary_fixed",palette:t=>t.secondaryPalette,tone:t=>10,background:t=>Ye.secondaryFixedDim,secondBackground:t=>Ye.secondaryFixed,contrastCurve:new We(4.5,7,11,21)}),Ye.onSecondaryFixedVariant=Fe.fromPalette({name:"on_secondary_fixed_variant",palette:t=>t.secondaryPalette,tone:t=>Ke(t)?25:30,background:t=>Ye.secondaryFixedDim,secondBackground:t=>Ye.secondaryFixed,contrastCurve:new We(3,4.5,7,11)}),Ye.tertiaryFixed=Fe.fromPalette({name:"tertiary_fixed",palette:t=>t.tertiaryPalette,tone:t=>Ke(t)?40:90,isBackground:!0,background:t=>Ye.highestSurface(t),contrastCurve:new We(1,1,3,7),toneDeltaPair:t=>new Je(Ye.tertiaryFixed,Ye.tertiaryFixedDim,10,"lighter",!0)}),Ye.tertiaryFixedDim=Fe.fromPalette({name:"tertiary_fixed_dim",palette:t=>t.tertiaryPalette,tone:t=>Ke(t)?30:80,isBackground:!0,background:t=>Ye.highestSurface(t),contrastCurve:new We(1,1,3,7),toneDeltaPair:t=>new Je(Ye.tertiaryFixed,Ye.tertiaryFixedDim,10,"lighter",!0)}),Ye.onTertiaryFixed=Fe.fromPalette({name:"on_tertiary_fixed",palette:t=>t.tertiaryPalette,tone:t=>Ke(t)?100:10,background:t=>Ye.tertiaryFixedDim,secondBackground:t=>Ye.tertiaryFixed,contrastCurve:new We(4.5,7,11,21)}),Ye.onTertiaryFixedVariant=Fe.fromPalette({name:"on_tertiary_fixed_variant",palette:t=>t.tertiaryPalette,tone:t=>Ke(t)?90:30,background:t=>Ye.tertiaryFixedDim,secondBackground:t=>Ye.tertiaryFixed,contrastCurve:new We(3,4.5,7,11)});
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze{static fromInt(t){const e=Ne.fromInt(t);return Ze.fromHct(e)}static fromHct(t){return new Ze(t.hue,t.chroma,t)}static fromHueAndChroma(t,e){return new Ze(t,e,Ze.createKeyColor(t,e))}constructor(t,e,r){this.hue=t,this.chroma=e,this.keyColor=r,this.cache=new Map}static createKeyColor(t,e){let r=Ne.from(t,e,50),o=Math.abs(r.chroma-e);for(let n=1;n<50;n+=1){if(Math.round(e)===Math.round(r.chroma))return r;const i=Ne.from(t,e,50+n),a=Math.abs(i.chroma-e);a<o&&(o=a,r=i);const s=Ne.from(t,e,50-n),c=Math.abs(s.chroma-e);c<o&&(o=c,r=s)}return r}tone(t){let e=this.cache.get(t);return void 0===e&&(e=Ne.from(this.hue,this.chroma,t).toInt(),this.cache.set(t,e)),e}getHct(t){return Ne.fromInt(this.tone(t))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{static of(t){return new Ge(t,!1)}static contentOf(t){return new Ge(t,!0)}static fromColors(t){return Ge.createPaletteFromColors(!1,t)}static contentFromColors(t){return Ge.createPaletteFromColors(!0,t)}static createPaletteFromColors(t,e){const r=new Ge(e.primary,t);if(e.secondary){const o=new Ge(e.secondary,t);r.a2=o.a1}if(e.tertiary){const o=new Ge(e.tertiary,t);r.a3=o.a1}if(e.error){const o=new Ge(e.error,t);r.error=o.a1}if(e.neutral){const o=new Ge(e.neutral,t);r.n1=o.n1}if(e.neutralVariant){const o=new Ge(e.neutralVariant,t);r.n2=o.n2}return r}constructor(t,e){const r=Ne.fromInt(t),o=r.hue,n=r.chroma;e?(this.a1=Ze.fromHueAndChroma(o,n),this.a2=Ze.fromHueAndChroma(o,n/3),this.a3=Ze.fromHueAndChroma(o+60,n/2),this.n1=Ze.fromHueAndChroma(o,Math.min(n/12,4)),this.n2=Ze.fromHueAndChroma(o,Math.min(n/6,8))):(this.a1=Ze.fromHueAndChroma(o,Math.max(48,n)),this.a2=Ze.fromHueAndChroma(o,16),this.a3=Ze.fromHueAndChroma(o+60,24),this.n1=Ze.fromHueAndChroma(o,4),this.n2=Ze.fromHueAndChroma(o,8)),this.error=Ze.fromHueAndChroma(25,84)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t){const e=3===(t=t.replace("#","")).length,r=6===t.length,o=8===t.length;if(!e&&!r&&!o)throw new Error("unexpected hex "+t);let n=0,i=0,a=0;return e?(n=tr(t.slice(0,1).repeat(2)),i=tr(t.slice(1,2).repeat(2)),a=tr(t.slice(2,3).repeat(2))):r?(n=tr(t.slice(0,2)),i=tr(t.slice(2,4)),a=tr(t.slice(4,6))):o&&(n=tr(t.slice(2,4)),i=tr(t.slice(4,6)),a=tr(t.slice(6,8))),(255<<24|(255&n)<<16|(255&i)<<8|255&a)>>>0}function tr(t){return parseInt(t,16)}class er{constructor(t,e,r){this.toString=()=>`${this.r},${this.g},${this.b}`,this.r=t,this.g=e,this.b=r}static fromArgb(t){return new er(Se(t),Oe(t),je(t))}}class rr{constructor(){this.content=""}static create(){return new rr}add(t,e){const r=`  ${t}: ${e};\n`;return this.content+=r,this}addFromArgb(t,e){return this.add(`--u-color-${t}`,function(t){const e=Se(t),r=Oe(t),o=je(t),n=[e.toString(16),r.toString(16),o.toString(16)];for(const[t,e]of n.entries())1===e.length&&(n[t]="0"+e);return"#"+n.join("")}(e)),this.add(`--u-color-${t}-rgb`,er.fromArgb(e).toString()),this}build(){return this.content}}const or=[{name:"surface",lightTone:98,darkTone:6},{name:"surface-bright",lightTone:98,darkTone:24},{name:"surface-dim",lightTone:87,darkTone:6},{name:"surface-container-lowest",lightTone:100,darkTone:4},{name:"surface-container-low",lightTone:96,darkTone:10},{name:"surface-container",lightTone:94,darkTone:12},{name:"surface-container-high",lightTone:92,darkTone:17},{name:"surface-container-highest",lightTone:90,darkTone:22},{name:"on-surface",lightTone:10,darkTone:90},{name:"scrim",fixedTone:0},{name:"shadow",fixedTone:0}],nr=[{name:"on-surface-variant",lightTone:30,darkTone:80},{name:"outline",lightTone:50,darkTone:60},{name:"outline-variant",lightTone:80,darkTone:30}];function ir(t,e){return`${t} {\n${e}}`}class ar{constructor(){this.colors=[],this.commonColors=[],this.partial=!1,this.cssClass=null}static create(t){return(new ar).addColorFromHex("primary",t)}static createPartial(){const t=new ar;return t.partial=!0,t}addColorFromHex(t,e){const r=Ze.fromInt(Qe(e));return this.addColorFromPalette(t,r),this}addColorFromPalette(t,e){return this.colors.push({name:t,lightTone:40,darkTone:80,tonalPalette:e}),this.colors.push({name:`on-${t}`,lightTone:100,darkTone:20,tonalPalette:e}),this.colors.push({name:`${t}-container`,lightTone:90,darkTone:30,tonalPalette:e}),this.colors.push({name:`on-${t}-container`,lightTone:10,darkTone:90,tonalPalette:e}),this.colors.push({name:`${t}-fixed`,fixedTone:90,tonalPalette:e}),this.colors.push({name:`${t}-fixed-dim`,fixedTone:800,tonalPalette:e}),this.colors.push({name:`on-${t}-fixed`,fixedTone:10,tonalPalette:e}),this.colors.push({name:`on-${t}-fixed-variant`,fixedTone:30,tonalPalette:e}),this}addCommonColor(t,e){return this.commonColors.push({name:t,tonalPalette:Ze.fromInt(Qe(e))}),this}setCssClass(t){return this.cssClass=t,this}ensureCssClassStartsWithDot(){this.cssClass&&!this.cssClass.startsWith(".")&&(this.cssClass=`.${this.cssClass}`)}ensureThemeColors(){const t=this.colors.find((t=>"primary"===t.name)),e=Ge.of(t.tonalPalette.tone(40));this.colors.find((t=>"secondary"===t.name))||this.addColorFromPalette("secondary",e.a2),this.colors.find((t=>"tertiary"===t.name))||this.addColorFromPalette("tertiary",e.a3),this.neutralColorPalette||(this.neutralColorPalette=e.n1),this.neutralVariantColorPalette||(this.neutralVariantColorPalette=e.n2)}getNeutralVariables(t){const e=rr.create();return this.addColors(e,or,this.neutralColorPalette,t),e.add("--u-color-background","var(--u-color-surface-container-highest)").add("--u-color-inverse-background","var(--u-color-inverse-surface-container-highest)").add("--u-color-on-background","var(--u-color-on-surface)").add("--u-color-on-inverse-background","var(--u-color-inverse-on-surface)"),e.build()}getNeutralVariantVariables(t){const e=rr.create();return this.addColors(e,nr,this.neutralColorPalette,t),e.build()}getColorVariables(t,e){const r=rr.create();return this.addToneColor(r,t,t.tonalPalette,e),r.build()}getColorsVariables(t){let e="";for(const r of this.colors)e+=this.getColorVariables(r,t);return this.neutralColorPalette&&(e+=this.getNeutralVariables(t)),this.neutralVariantColorPalette&&(e+=this.getNeutralVariantVariables(t)),e}addColors(t,e,r,o){for(const n of e)this.addToneColor(t,n,r,o)}addToneColor(t,e,r,o){if(void 0!==e.fixedTone)return void t.addFromArgb(e.name,r.tone(e.fixedTone));const n=o?e.darkTone:e.lightTone,i=o?e.lightTone:e.darkTone;t.addFromArgb(e.name,r.tone(n)).addFromArgb(`inverse-${e.name}`,r.tone(i)),o||t.addFromArgb(`light-${e.name}`,r.tone(e.lightTone)).addFromArgb(`dark-${e.name}`,r.tone(e.darkTone))}build(){this.ensureCssClassStartsWithDot();const t=this.cssClass??":root",e=this.cssClass?`${this.cssClass}.u-dark-mode,\n${this.cssClass} .u-dark-mode`:".u-dark-mode";this.partial||this.ensureThemeColors();return`${ir(t,`${this.getColorsVariables(!1)}`)}\n\n${ir(e,this.getColorsVariables(!0))}\n`}}export{ar as ThemeBuilder,St as UmButton,_t as UmButtonBase,Dt as UmButtonSet,qt as UmCard,Vt as UmCardContent,Wt as UmCardMedia,Xt as UmCheckbox,Gt as UmContainer,ee as UmDivider,ft as UmElevation,Bt as UmFab,Et as UmIconButton,yt as UmRipple,me as UmTable};
