function t(t,e,o,i){for(var r,s=arguments.length,n=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i,a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,o,n):r(e,o))||n);return s>3&&n&&Object.defineProperty(e,o,n),n}function e(t,e,o,i){if("a"===o&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===o?i:"a"===o?i.call(t):i?i.value:e.get(t)}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o=globalThis,i=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),s=new WeakMap;class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&s.set(e,t))}return t}toString(){return this.cssText}}const a=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,o,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1]),t[0]);return new n(o,t,r)},l=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,r))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:c,defineProperty:h,getOwnPropertyDescriptor:u,getOwnPropertyNames:d,getOwnPropertySymbols:v,getPrototypeOf:p}=Object,f=globalThis,b=f.trustedTypes,m=b?b.emptyScript:"",g=f.reactiveElementPolyfillSupport,y=(t,e)=>t,x={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},w=(t,e)=>!c(t,e),k={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class _ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=k){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(t,o,e);void 0!==i&&h(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){const{get:i,set:r}=u(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const s=i?.call(this);r.call(this,e),this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??k}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...d(t),...v(t)];for(const o of e)this.createProperty(o,t[o])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,o]of e)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const o=this._$Eu(t,e);void 0!==o&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(i)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),r=o.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EC(t,e){const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(void 0!==i&&!0===o.reflect){const r=(void 0!==o.converter?.toAttribute?o.converter:x).toAttribute(e,o.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const o=this.constructor,i=o._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=o.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:x;this._$Em=i,this[i]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,o){if(void 0!==t){if(o??=this.constructor.getPropertyOptions(t),!(o.hasChanged??w)(this[t],e))return;this.P(t,e,o)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,o){this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,o]of t)!0!==o.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[y("elementProperties")]=new Map,_[y("finalized")]=new Map,g?.({ReactiveElement:_}),(f.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const S=globalThis,$=S.trustedTypes,z=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,A="?"+E,j=`<${A}>`,T=document,M=()=>T.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,B="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,R=/>/g,N=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,D=/"/g,H=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),q=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),V=new WeakMap,Z=T.createTreeWalker(T,129);function F(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==z?z.createHTML(e):e}const K=(t,e)=>{const o=t.length-1,i=[];let r,s=2===e?"<svg>":"",n=I;for(let e=0;e<o;e++){const o=t[e];let a,l,c=-1,h=0;for(;h<o.length&&(n.lastIndex=h,l=n.exec(o),null!==l);)h=n.lastIndex,n===I?"!--"===l[1]?n=O:void 0!==l[1]?n=R:void 0!==l[2]?(H.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=N):void 0!==l[3]&&(n=N):n===N?">"===l[0]?(n=r??I,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?N:'"'===l[3]?D:L):n===D||n===L?n=N:n===O||n===R?n=I:(n=N,r=void 0);const u=n===N&&t[e+1].startsWith("/>")?" ":"";s+=n===I?o+j:c>=0?(i.push(a),o.slice(0,c)+C+o.slice(c)+E+u):o+E+(-2===c?e:u)}return[F(t,s+(t[o]||"<?>")+(2===e?"</svg>":"")),i]};class G{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let r=0,s=0;const n=t.length-1,a=this.parts,[l,c]=K(t,e);if(this.el=G.createElement(l,o),Z.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=Z.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(C)){const e=c[s++],o=i.getAttribute(t).split(E),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:o,ctor:"."===n[1]?et:"?"===n[1]?ot:"@"===n[1]?it:tt}),i.removeAttribute(t)}else t.startsWith(E)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(H.test(i.tagName)){const t=i.textContent.split(E),e=t.length-1;if(e>0){i.textContent=$?$.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],M()),Z.nextNode(),a.push({type:2,index:++r});i.append(t[e],M())}}}else if(8===i.nodeType)if(i.data===A)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(E,t+1));)a.push({type:7,index:r}),t+=E.length-1}r++}}static createElement(t,e){const o=T.createElement("template");return o.innerHTML=t,o}}function Q(t,e,o=t,i){if(e===q)return e;let r=void 0!==i?o._$Co?.[i]:o._$Cl;const s=U(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),void 0===s?r=void 0:(r=new s(t),r._$AT(t,o,i)),void 0!==i?(o._$Co??=[])[i]=r:o._$Cl=r),void 0!==r&&(e=Q(t,r._$AS(t,e.values),r,i)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,i=(t?.creationScope??T).importNode(e,!0);Z.currentNode=i;let r=Z.nextNode(),s=0,n=0,a=o[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new Y(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new rt(r,this,t)),this._$AV.push(e),a=o[++n]}s!==a?.index&&(r=Z.nextNode(),s++)}return Z.currentNode=T,i}p(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,i){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),U(t)?t===J||null==t||""===t?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>P(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==J&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:o}=t,i="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=G.createElement(F(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new X(i,this),o=t.u(this.options);t.p(e),this.T(o),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new G(t)),e}k(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const r of t)i===e.length?e.push(o=new Y(this.S(M()),this.S(M()),this,this.options)):o=e[i],o._$AI(r),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,i,r){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=J}_$AI(t,e=this,o,i){const r=this.strings;let s=!1;if(void 0===r)t=Q(this,t,e,0),s=!U(t)||t!==this._$AH&&t!==q,s&&(this._$AH=t);else{const i=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=Q(this,i[o+n],e,n),a===q&&(a=this._$AH[n]),s||=!U(a)||a!==this._$AH[n],a===J?t=J:t!==J&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}s&&!i&&this.j(t)}j(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===J?void 0:t}}class ot extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==J)}}class it extends tt{constructor(t,e,o,i,r){super(t,e,o,i,r),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??J)===q)return;const o=this._$AH,i=t===J&&o!==J||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==J&&(o===J||i);i&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const st=S.litHtmlPolyfillSupport;st?.(G,Y),(S.litHtmlVersions??=[]).push("3.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class nt extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{const i=o?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=o?.renderBefore??null;i._$litPart$=r=new Y(e.insertBefore(M(),t),t,void 0,o??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}nt._$litElement$=!0,nt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:nt});const at=globalThis.litElementPolyfillSupport;at?.({LitElement:nt}),(globalThis.litElementVersions??=[]).push("4.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ct={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:w},ht=(t=ct,e,o)=>{const{kind:i,metadata:r}=o;let s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(o.name,t),"accessor"===i){const{name:i}=o;return{set(o){const r=e.get.call(this);e.set.call(this,o),this.requestUpdate(i,r,t)},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=o;return function(o){const r=this[i];e.call(this,o),this.requestUpdate(i,r,t)}}throw Error("Unsupported decorator location: "+i)};function ut(t){return(e,o)=>"object"==typeof o?ht(t,e,o):((t,e,o)=>{const i=e.hasOwnProperty(o);return e.constructor.createProperty(o,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const dt=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,o)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function vt(t,e){return(o,i,r)=>{const s=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:e}="object"==typeof i?o:r??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return dt(0,0,{get(){let o=t.call(this);return void 0===o&&(o=s(this),(null!==o||this.hasUpdated)&&e.call(this,o)),o}})}return dt(0,0,{get(){return s(this)}})}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t){return(e,o)=>{const{slot:i,selector:r}=t??{},s="slot"+(i?`[name=${i}]`:":not([name])");return dt(0,0,{get(){const e=this.renderRoot?.querySelector(s),o=e?.assignedElements(t)??[];return void 0===r?o:o.filter((t=>t.matches(r)))}})}}const ft=a`
  :host {
    --_level: var(--u-elevation-level, 0);
    --_shadow-color: var(--u-shadow-color, #000);
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
`;let bt=class extends nt{constructor(){super(...arguments),this.ariaHidden="true"}};bt.styles=ft,bt=t([lt("u-elevation")],bt);const mt=a`
  :host,
  .ripple-container::before {
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
    background: var(--u-state-layer-color, currentColor);
    opacity: 0;
    transition: opacity 200ms;
  }

  @media (hover: hover) {
    :host(:not([disabled]):hover) .ripple-container::before {
      content: "";
      background: var(--u-state-layer-color, currentColor);
      opacity: 0.08;
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
    background: var(--u-state-layer-color, currentColor);
    border-radius: 50%;
    box-shadow: 0 0 64px 64px var(--u-state-layer-color, currentColor);
    opacity: 0.2;
    transform: scale3d(0, 0, 1);
    pointer-events: none;
    will-change: transform;
  }
  .ripple.show {
    transition: transform var(--u-ripple-wave-duration, 3s) cubic-bezier(0.19, 1, 0.22, 1), opacity 750ms;
    transform: scale3d(1, 1, 1);
  }
  .ripple.show-forced {
    transition: transform var(--u-ripple-wave-duration, 3s) cubic-bezier(0.19, 1, 0.22, 1), opacity 200ms 300ms;
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
`;var gt;let yt=gt=class extends nt{constructor(){super(),this.isTouching=!1,this.ariaHidden="true",this.disabled=!1,this.attachEvents()}render(){return W`<div class="ripple-container"></div><slot></slot>`}attachEvents(){this.addEventListener("mousedown",this.handleMouseDown),this.addEventListener("touchstart",this.handleTouchStart)}handleMouseDown(t){!this.isTouching&&this.canCreateRipple()&&this.createRipple("mouseup",t.clientX,t.clientY)}handleTouchStart(t){if(!this.canCreateRipple())return;let e;this.isTouching=!0;let o=!1;const i=()=>{o=!0,this.removeEventListener("touchmove",i),e&&e()};this.addEventListener("touchmove",i),setTimeout((()=>{o||(e=this.createRipple("touchend",t.touches[0].clientX,t.touches[0].clientY))}),100)}canCreateRipple(){if(this.disabled)return!1;const t=this.parentElement;return!(!t||"relative"!==window.getComputedStyle(t).position&&"absolute"!==window.getComputedStyle(t).position&&"fixed"!==window.getComputedStyle(t).position)||(console.warn('Ripple: Parent element position must be "relative", "absolute" or "fixed"'),!1)}createRipple(t=null,e=null,o=null){const i=this.rippleContainer.getBoundingClientRect();e??=i.x+this.rippleContainer.clientWidth/2,o??=i.y+this.rippleContainer.clientHeight/2;const r=document.createElement("DIV");r.classList.add("ripple"),this.rippleContainer.appendChild(r);const s=()=>{r.classList.add("dismiss"),this.isTouching=!1};return this.addEventListener("dragstart",s),this.addEventListener("mouseleave",s),r.addEventListener("transitionend",(()=>{(r.classList.contains("dismiss")||r.classList.contains("show-forced"))&&(r.remove(),this.removeEventListener("dragstart",s),this.removeEventListener("mouseleave",s),t&&window.removeEventListener(t,s))})),requestAnimationFrame((()=>{const i=this.getBoundingClientRect(),s=2*Math.max(this.clientWidth,this.clientHeight);gt._setElementSquareSizeAndCenter(r,s),r.style.transitionDuration=1080*Math.pow(s,.3)+"ms, 750ms";const n=e-i.left+(s-this.rippleContainer.clientWidth)/2,a=o-i.top+(s-this.rippleContainer.clientHeight)/2;r.style.transformOrigin=n+"px "+a+"px",r.classList.add(t?"show":"show-forced")})),t&&window.addEventListener(t,s),s}static _setElementSquareSizeAndCenter(t,e){t.style.top="50%",t.style.left="50%",t.style.width=e+"px",t.style.height=e+"px",t.style.marginLeft=-e/2+"px",t.style.marginTop=-e/2+"px"}};var xt;yt.styles=mt,t([ut({type:Boolean,reflect:!0})],yt.prototype,"disabled",void 0),t([vt(".ripple-container")],yt.prototype,"rippleContainer",void 0),yt=gt=t([lt("u-ripple")],yt);class wt extends nt{get form(){return e(this,xt,"f").form}constructor(){super(),this.disabled=!1,this.href="",this.target="",this.type="submit",this.value="",xt.set(this,void 0),function(t,e,o,i,r){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");"a"===i?r.call(t,o):r?r.value=o:e.set(t,o)}(this,xt,this.attachInternals(),"f")}render(){return this.href?this.renderLink():this.renderButton()}renderButton(){return W`
      <button
        id="button"
        class="button"
        ?disabled=${this.disabled}
        aria-label="${this.getAriaLabel()}"
        type="button">
        <u-ripple ?disabled=${this.disabled}></u-ripple>
        <u-elevation></u-elevation>
      </button>
      ${this.renderContent()}`}renderLink(){return W`<a
      id="link"
      class="button"
      href=${this.disabled?J:this.href}
      aria-disabled=${this.disabled||J}
      aria-label="${this.getAriaLabel()}"
      target=${this.target||J}>
      <u-elevation></u-elevation>
      <u-ripple ?disabled=${this.disabled}></u-ripple>
    </a>
    ${this.renderContent()}`}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.innerHandleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.innerHandleClick)}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}getAriaLabel(){return this.ariaLabel||J}innerHandleClick(t){this.disabled||(0===t.detail&&this.ripple.createRipple(),this.handleClick(t),"button"===this.type||this.href||this.form&&(e(this,xt,"f").setFormValue(this.value),"submit"!==this.type?this.form.reset():this.form.requestSubmit()))}handleClick(t){}}xt=new WeakMap,wt.formAssociated=!0,t([ut({type:Boolean,reflect:!0})],wt.prototype,"disabled",void 0),t([ut()],wt.prototype,"href",void 0),t([ut()],wt.prototype,"target",void 0),t([ut()],wt.prototype,"type",void 0),t([ut({reflect:!0})],wt.prototype,"value",void 0),t([ut()],wt.prototype,"name",void 0),t([vt(".button")],wt.prototype,"buttonElement",void 0),t([vt("u-ripple")],wt.prototype,"ripple",void 0),t([ut()],wt.prototype,"form",null);const kt=a`
  :host {
    --_primary-color: var(--u-primary-color, #6750a4);
    --_shadow-color-rgb: var(--u-shadow-color-rgb, 0, 0, 0);
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
    background-color: var(--u-button-disabled-background-color, rgba(var(--u-on-surface-color-rgb, 29, 27, 32), 0.12)) !important;
    color: var(--u-button-disabled-text-color, rgba(var(--u-on-surface-color-rgb, 29, 27, 32), 0.38)) !important;
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
      outline: 4px solid var(--u-primary-color, #6750a4);
    }
    50% {
      outline: 8px solid var(--u-primary-color, #6750a4);
    }
    100% {
      outline: 4px solid var(--u-primary-color, #6750a4);
    }
  }
`,_t=a`
  :host {
    --u-common-button-line-height: var(--u-label-large-line-height, 1.25rem);
    --u-common-button-font-size: var(--u-label-large-font-size, 0.875rem);
    --u-common-button-font-weight: var(--u-font-weight-medium, 500);
    --_common-button-height: var(--u-common-button-height, 2.5rem);
    --_common-button-padding: var(--u-common-button-padding, 24px);
    --_common-button-icon-padding: var(--u-common-button-icon-padding, 16px);
    border-radius: var(--u-common-button-shape, 9999px);
    font-family: var(--u-font-family-base, system-ui);
    height: var(--u-common-button-height, 40px);
    font-size: var(--u-common-button-font-size);
    font-weight: var(--u-common-button-font-weight);
    padding-inline: var(--_common-button-padding);
    box-sizing: border-box;
  }

  :host([variant=filled]) {
    background-color: var(--u-filled-button-background-color, var(--_primary-color));
    color: var(--u-filled-button-text-color, var(--u-on-primary-color, #fff));
  }

  :host([variant=tonal]) {
    background-color: var(--u-tonal-button-background-color, var(--u-secondary-container-color, #e8def8));
    color: var(--u-tonal-button-text-color, var(--u-on-secondary-container-color, #1d192b));
  }

  :host([variant=elevated]) {
    background-color: var(--u-elevated-button-background-color, var(--u-surface-container-low-color, #f7f2fa));
    color: var(--u-tonal-button-text-color, var(--u-on-secondary-container-color, #1d192b));
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
    color: var(--_primary-color);
  }

  :host([variant=outlined]) {
    border: 1px solid var(--u-outline-color, #79747e);
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
`;let St=class extends wt{constructor(){super(...arguments),this.variant="filled",this.trailingIcon=!1,this.hasIcon=!1}renderContent(){const t=W`
      <slot
        name="icon"
        aria-hidden="true"
        @slotchange="${this.handleSlotChange}"></slot>`;return W`
      ${this.trailingIcon?J:t}
      <span><slot></slot></span>
      ${this.trailingIcon?t:J}
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}};St.styles=[kt,_t],t([ut({reflect:!0})],St.prototype,"variant",void 0),t([ut({type:Boolean,attribute:"trailing-icon",reflect:!0})],St.prototype,"trailingIcon",void 0),t([ut({type:Boolean,attribute:"has-icon",reflect:!0})],St.prototype,"hasIcon",void 0),t([pt({slot:"icon",flatten:!0})],St.prototype,"assignedIcons",void 0),St=t([lt("u-button")],St);const $t=a`
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
    border-radius: var(--u-fab-button-medium-shape, var(--u-shape-corner-medium, 12px));
  }

  :host([size=large]) {
    width: var(--u-fab-button-medium-size, 96px);
    border-radius: var(--u-fab-button-medium-shape, var(--u-shape-corner-extra-large, 28px));
  }

  :host([extended]),
  :host([size=medium]) {
    width: var(--u-fab-button-medium-size, 56px);
    border-radius: var(--u-fab-button-medium-shape, var(--u-shape-corner-large, 16px));
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
    background-color: var(--u-fab-button-primary-background-color, var(--u-primary-container-color, #eaddff));
    color: var(--u-fab-button-primary-text-color, var(--u-on-primary-container-color, #21005d));
  }

  :host([color=secondary]) {
    background-color: var(--u-fab-button-secondary-background-color, var(--u-secondary-container-color, #e8def8));
    color: var(--u-fab-button-secondary-text-color, var(--u-on-secondary-container-color, #1d192b));
  }

  :host([color=tertiary]) {
    background-color: var(--u-fab-button-tertiary-background-color, var(--u-tertiary-container-color, #ffd8e4));
    color: var(--u-fab-button-tertiary-text-color, var(--u-on-tertiary-container-color, #31111d));
  }

  :host([color=branded]),
  :host([color=surface]) {
    background-color: var(--u-fab-button-surface-background-color, var(--u-surface-container-high-color, #ece6f0));
    color: var(--u-fab-button-surface-text-color, var(--_primary-color));
  }

  :host([color=branded][lowered]),
  :host([color=surface][lowered]) {
    background-color: var(--u-fab-button-surface-background-color, var(--u-surface-container-low-color, #ece6f0));
  }
`;let zt=class extends wt{constructor(){super(...arguments),this.color="primary",this.size="medium",this.label=null,this.lowered=!1}get extended(){return!!this.label}renderContent(){const t=W`<span>${this.label}</span>`;return W`
      <span class="icon" aria-hidden="true"><slot name="icon"></slot></span>
      ${this.label?t:J}
    `}};zt.styles=[kt,$t],t([ut({reflect:!0})],zt.prototype,"color",void 0),t([ut({reflect:!0})],zt.prototype,"size",void 0),t([ut({reflect:!0})],zt.prototype,"label",void 0),t([ut({type:Boolean,reflect:!0})],zt.prototype,"lowered",void 0),t([ut({type:Boolean,reflect:!0})],zt.prototype,"extended",null),zt=t([lt("u-fab")],zt);const Ct=a`
  :host {
    --_surface-container-highest-color: var(--u-surface-container-highest-color, #e6e0e9);
    width: var(--u-icon-button-size, 2.5rem);
    height: var(--u-icon-button-size, 2.5rem);
    border-radius: var(--u-icon-button-shape, 9999px);
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
    color: var(--u-filled-icon-button-unselected-text-color, var(--_primary-color));
  }

  :host([variant=tonal]) {
    background-color: var(--u-total-icon-button-unselected-background-color, var(--_surface-container-highest-color));
    color: var(--u-tonal-icon-button-unselected-text-color, var(--u-on-surface-variant-color, #49454f));
  }

  :host([selected][variant=filled]),
  :host([variant=filled]:not([has-selection-icon])) {
    background-color: var(--u-filled-icon-button-background-color, var(--_primary-color));
    color: var(--u-filled-icon-button-text-color, var(--u-on-primary-color, #fff));
  }

  :host([selected][variant=tonal]),
  :host([variant=tonal]:not([has-selection-icon])) {
    background-color: var(--u-tonal-icon-button-background-color, var(--u-secondary-container-color, #e8def8));
    color: var(--u-tonal-icon-button-text-color, var(--u-on-secondary-container-color, #1d192b));
  }

  :host([variant=standard]),
  :host([variant=outlined]) {
    color: var(--u-on-surface-variant-color, #49454f);
  }

  :host([variant=outlined]) {
    border: 1px solid var(--u-outline-color, #79747e);
  }

  :host([selected][variant=outlined]) {
    border: none;
    background-color: var(--u-outlined-icon-button-selected-background-color, var(--u-inverse-surface-color, #322f35));
    color: var(--u-outlined-icon-button-selected-text-color, var(--u-inverse-on-surface-color, #f5eff7));
  }

  :host([selected][variant=standard]) {
    color: var(--u-standard-icon-button-selected-text-color, var(--_primary-color));
  }
`;let Et=class extends wt{constructor(){super(...arguments),this.variant="standard",this.toggle=!1,this.hasSelectionIcon=!1,this.selected=!1,this.ariaLabelSelected=""}renderContent(){return W`
      <span class="icon" aria-hidden="true"><slot></slot></span>
      <span class="icon icon-selected" aria-hidden="true">
        <slot name="selected" @slotchange="${this.handleSlotChange}"></slot>
      </span>
    `}handleClick(t){this.toggle&&(this.selected=!this.selected)}getAriaLabel(){return this.selected&&this.ariaLabelSelected||super.getAriaLabel()}handleSlotChange(){this.hasSelectionIcon=this.selectedIcons.length>0}};Et.styles=[kt,Ct],t([ut({reflect:!0})],Et.prototype,"variant",void 0),t([ut({type:Boolean})],Et.prototype,"toggle",void 0),t([ut({type:Boolean,attribute:"has-selection-icon",reflect:!0})],Et.prototype,"hasSelectionIcon",void 0),t([ut({type:Boolean,reflect:!0})],Et.prototype,"selected",void 0),t([ut({attribute:"aria-label-selected"})],Et.prototype,"ariaLabelSelected",void 0),t([pt({slot:"selected",flatten:!0})],Et.prototype,"selectedIcons",void 0),Et=t([lt("u-icon-button")],Et);const At=a`
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
`;let jt=class extends nt{constructor(){super(...arguments),this.align="end",this.stack=!1}render(){return W`
      <slot></slot>`}};jt.styles=At,t([ut({reflect:!0})],jt.prototype,"align",void 0),t([ut({type:Boolean,reflect:!0})],jt.prototype,"stack",void 0),jt=t([lt("u-button-set")],jt);const Tt=a`
  :host,
  * {
    font-family: var(--u-font-family-base, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol");
    box-sizing: border-box;
  }
`,Mt=a`
  :host {
    display: block;
    position: relative;
    border-radius: var(--u-card-shape, var(--u-shape-corner-medium, 12px));
  }

  :host(:not(:first-child)) {
    margin-top: 8px;
  }

  :host([variant=elevated]) {
    background-color: var(--u-surface-container-low-color, #f7f2fa);
    --u-elevation-level: var(--u-elevated-card-elevation-level, 1);
  }

  :host([variant=filled]) {
    background-color: var(--u-surface-container-highest-color, #e6e0e9);
  }

  :host([variant=outlined]) {
    border: var(--u-outlined-card-outline-width, 1px) solid var(--u-outlined-card-outline-color, var(--u-outline-variant-color, #cac4d0));
  }
`,Ut=a`
  :host {
    display: block;
  }

  :host(:has(slot > *)) {
    display: none;
  }

  :host([has-content]) {
    padding: var(--u-card-padding, 16px);
  }
`;let Pt=class extends nt{constructor(){super(...arguments),this.hasContent=!1}render(){return W`
      <slot @slotchange="${this.handleSlotChange}"></slot>`}handleSlotChange(t){const e=t.target;if(this.hasContent=e.assignedElements({flatten:!0}).length>0,this.hasContent)return;const o=e.assignedNodes({flatten:!0});for(const t of o)if(t.nodeValue?.trim())return void(this.hasContent=!0);this.hasContent=!1}};Pt.styles=[Tt,Ut],t([ut({type:Boolean,attribute:"has-content",reflect:!0})],Pt.prototype,"hasContent",void 0),Pt=t([lt("u-card-content")],Pt);const Bt=a`
  :host {
    display: block;
    aspect-ratio: 1;
    border-radius: var(--u-card-shape, var(--u-shape-corner-medium, 12px));
  }

  :host([wide]) {
    aspect-ratio: 16/9;
  }
`;let It=class extends nt{constructor(){super(...arguments),this.wide=!1}render(){return W`
      <slot></slot>`}};It.styles=[Tt,Bt],t([ut({type:Boolean,reflect:!0})],It.prototype,"wide",void 0),It=t([lt("u-card-media")],It);let Ot=class extends nt{constructor(){super(...arguments),this.variant="elevated"}render(){return W`
      <u-elevation></u-elevation>
      <slot name="before-content"></slot>
      <u-card-content>
        <slot></slot>
      </u-card-content>
      <slot name="after-content"></slot>`}};Ot.styles=[Tt,Mt],t([ut({reflect:!0})],Ot.prototype,"variant",void 0),Ot=t([lt("u-card")],Ot);let Rt=class extends nt{constructor(){super(...arguments),this.handleInputChange=t=>{this.input!==document.elementFromPoint(t.clientX,t.clientY)&&this.ripple.createRipple()}}render(){return W`
      <div class="touch">
        <u-ripple><slot @slotchange="${this.handleSlotChange}"></slot></u-ripple>
      </div>`}handleSlotChange(){console.log("slotchange"),this.input&&this.input.removeEventListener("click",this.handleInputChange),this.input=this.assignedInputs[0],this.input&&this.input.addEventListener("click",this.handleInputChange)}};Rt.styles=[Tt,a`
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
    `],t([vt("u-ripple")],Rt.prototype,"ripple",void 0),t([pt({selector:"input",flatten:!0})],Rt.prototype,"assignedInputs",void 0),Rt=t([lt("u-checkbox")],Rt);const Nt=a`
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
`;let Lt=class extends nt{render(){return W`<slot></slot>`}};Lt.styles=Nt,t([ut({reflect:!0})],Lt.prototype,"margin",void 0),Lt=t([lt("u-container")],Lt);const Dt=a`
  :host {
    --_divider-thickness: var(--u-divider-thickness, 1px);
    display: block;
    margin-block: 8px;
    height: var(--_divider-thickness);
    background-color: var(--u-divider-color, var(--u-outline-variant-color, #cac4d0));
  }

  :host([no-margin]) {
    margin: 0;
  }
`;let Ht=class extends nt{constructor(){super(...arguments),this.noMargin=!1}};Ht.styles=Dt,t([ut({type:Boolean,attribute:"no-margin",reflect:!0})],Ht.prototype,"noMargin",void 0),Ht=t([lt("u-divider")],Ht);const Wt=a`
  :host {
    display: table-header-group;
  }

  ::slotted(u-tr:not(:first-child)) {
    border-top: 1px solid var(--u-outline-variant-color, #cac5ca);
  }
`;let qt=class extends nt{render(){return W`<slot></slot>`}};qt.styles=[Tt,Wt],qt=t([lt("u-thead")],qt);const Jt=a`
  :host {
    display: table-row-group;
  }

  ::slotted(u-tr:not(:first-child)) {
    border-top: 1px solid var(--u-outline-variant-color, #cac5ca);
  }
`;let Vt=class extends nt{render(){return W`<slot></slot>`}};Vt.styles=[Tt,Jt],Vt=t([lt("u-tbody")],Vt);const Zt=a`
  :host {
    display: table-row;
  }
`;let Ft=class extends nt{render(){return W`<slot></slot>`}};Ft.styles=[Tt,Zt],Ft=t([lt("u-tr")],Ft);const Kt=a`
  :host {
    display: table-cell;
    padding: var(--u-td-padding, 13px 16px);
    font-size: var(--u-td-font-size, 0.875rem);
    font-weight: var(--u-td-font-weight, var(--u-font-weight-medium, 500));
    text-align: start;
  }
`;let Gt=class extends nt{render(){return W`<slot></slot>`}};Gt.styles=[Tt,Kt],Gt=t([lt("u-td")],Gt);const Qt=a`
  :host {
    display: table-cell;
    padding: var(--u-th-padding, 13px 16px);
    font-size: var(--u-th-font-size, 0.8125rem);
    font-weight: var(--u-th-font-weigh, var(--u-font-weight-medium, 500));
    text-align: start;
    color: var(--u-low-emphasis-color, rgba(28, 27, 30, 0.75));
  }
`;let Xt=class extends nt{render(){return W`<slot></slot>`}};Xt.styles=[Tt,Qt],Xt=t([lt("u-th")],Xt);const Yt=a`
  :host {
    display: table;
    min-width: 100%;
    border-collapse: collapse;
  }

  ::slotted(u-thead:not(:first-child)),
  ::slotted(u-tbody:not(:first-child)),
  ::slotted(u-tfooter:not(:first-child)),
  ::slotted(u-tr:not(:first-child)) {
    border-top: 1px solid var(--u-outline-variant-color, #cac5ca);
  }
`;class te extends nt{render(){return W`
      <slot name="header"></slot>
      <slot></slot>
`}}te.styles=[Tt,Yt],customElements.define("u-table",te);export{St as Button,jt as ButtonSet,Ot as Card,Rt as Checkbox,Ht as Divider,bt as Elevation,zt as FabButton,Et as IconButton,yt as Ripple,te as Table,Lt as container};
