let Wx=class extends Event{constructor(t,n,i,s){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=n,this.callback=i,this.subscribe=s??!1}};let _S=class{constructor(t,n,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(a,c)=>{this.unsubscribe&&(this.unsubscribe!==c&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=a,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(a,c)),this.unsubscribe=c},this.host=t,n.context!==void 0){const a=n;this.context=a.context,this.callback=a.callback,this.subscribe=a.subscribe??!1}else this.context=n,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Wx(this.context,this.host,this.t,this.subscribe))}};const Nh=globalThis,jm=Nh.ShadowRoot&&(Nh.ShadyCSS===void 0||Nh.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Hm=Symbol(),_w=new WeakMap;let Bx=class{constructor(t,n,i){if(this._$cssResult$=!0,i!==Hm)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(jm&&t===void 0){const i=n!==void 0&&n.length===1;i&&(t=_w.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&_w.set(n,t))}return t}toString(){return this.cssText}};const AS=e=>new Bx(typeof e=="string"?e:e+"",void 0,Hm),kS=(e,...t)=>{const n=e.length===1?e[0]:t.reduce(((i,s,a)=>i+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[a+1]),e[0]);return new Bx(n,e,Hm)},SS=(e,t)=>{if(jm)e.adoptedStyleSheets=t.map((n=>n instanceof CSSStyleSheet?n:n.styleSheet));else for(const n of t){const i=document.createElement("style"),s=Nh.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=n.cssText,e.appendChild(i)}},Aw=jm?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const i of t.cssRules)n+=i.cssText;return AS(n)})(e):e;const{is:ES,defineProperty:MS,getOwnPropertyDescriptor:RS,getOwnPropertyNames:$S,getOwnPropertySymbols:TS,getPrototypeOf:zS}=Object,Rd=globalThis,kw=Rd.trustedTypes,LS=kw?kw.emptyScript:"",OS=Rd.reactiveElementPolyfillSupport,yl=(e,t)=>e,eu={toAttribute(e,t){switch(t){case Boolean:e=e?LS:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Um=(e,t)=>!ES(e,t),Sw={attribute:!0,type:String,converter:eu,reflect:!1,useDefault:!1,hasChanged:Um};Symbol.metadata??=Symbol("metadata"),Rd.litPropertyMetadata??=new WeakMap;let Ar=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Sw){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,n);s!==void 0&&MS(this.prototype,t,s)}}static getPropertyDescriptor(t,n,i){const{get:s,set:a}=RS(this.prototype,t)??{get(){return this[n]},set(c){this[n]=c}};return{get:s,set(c){const h=s?.call(this);a?.call(this,c),this.requestUpdate(t,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Sw}static _$Ei(){if(this.hasOwnProperty(yl("elementProperties")))return;const t=zS(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(yl("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(yl("properties"))){const n=this.properties,i=[...$S(n),...TS(n)];for(const s of i)this.createProperty(s,n[s])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[i,s]of n)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[n,i]of this.elementProperties){const s=this._$Eu(n,i);s!==void 0&&this._$Eh.set(s,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)n.unshift(Aw(s))}else t!==void 0&&n.push(Aw(t));return n}static _$Eu(t,n){const i=n.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const i of n.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return SS(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,n,i){this._$AK(t,i)}_$ET(t,n){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const a=(i.converter?.toAttribute!==void 0?i.converter:eu).toAttribute(n,i.type);this._$Em=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(t,n){const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),c=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:eu;this._$Em=s;const h=c.fromAttribute(n,a.type);this[s]=h??this._$Ej?.get(s)??h,this._$Em=null}}requestUpdate(t,n,i){if(t!==void 0){const s=this.constructor,a=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??Um)(a,n)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,n,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:i,reflect:s,wrapped:a},c){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,c??n??this[t]),a!==!0||c!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(n=void 0),this._$AL.set(t,n)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,a]of i){const{wrapped:c}=a,h=this[s];c!==!0||this._$AL.has(s)||h===void 0||this.C(s,void 0,a,h)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach((i=>i.hostUpdate?.())),this.update(n)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach((n=>n.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((n=>this._$ET(n,this[n]))),this._$EM()}updated(t){}firstUpdated(t){}};Ar.elementStyles=[],Ar.shadowRootOptions={mode:"open"},Ar[yl("elementProperties")]=new Map,Ar[yl("finalized")]=new Map,OS?.({ReactiveElement:Ar}),(Rd.reactiveElementVersions??=[]).push("2.1.1");const Vm=globalThis,tu=Vm.trustedTypes,Ew=tu?tu.createPolicy("lit-html",{createHTML:e=>e}):void 0,Gx="$lit$",$o=`lit$${Math.random().toFixed(9).slice(2)}$`,Kx="?"+$o,DS=`<${Kx}>`,Vs=document,Bl=()=>Vs.createComment(""),Gl=e=>e===null||typeof e!="object"&&typeof e!="function",Zm=Array.isArray,PS=e=>Zm(e)||typeof e?.[Symbol.iterator]=="function",wf=`[ 	
\f\r]`,cl=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Mw=/-->/g,Rw=/>/g,Cs=RegExp(`>|${wf}(?:([^\\s"'>=/]+)(${wf}*=${wf}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$w=/'/g,Tw=/"/g,qx=/^(?:script|style|textarea|title)$/i,jx=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),L=jx(1),Xm=jx(2),Xt=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),zw=new WeakMap,zs=Vs.createTreeWalker(Vs,129);function Hx(e,t){if(!Zm(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ew!==void 0?Ew.createHTML(t):t}const IS=(e,t)=>{const n=e.length-1,i=[];let s,a=t===2?"<svg>":t===3?"<math>":"",c=cl;for(let h=0;h<n;h++){const u=e[h];let f,g,v=-1,y=0;for(;y<u.length&&(c.lastIndex=y,g=c.exec(u),g!==null);)y=c.lastIndex,c===cl?g[1]==="!--"?c=Mw:g[1]!==void 0?c=Rw:g[2]!==void 0?(qx.test(g[2])&&(s=RegExp("</"+g[2],"g")),c=Cs):g[3]!==void 0&&(c=Cs):c===Cs?g[0]===">"?(c=s??cl,v=-1):g[1]===void 0?v=-2:(v=c.lastIndex-g[2].length,f=g[1],c=g[3]===void 0?Cs:g[3]==='"'?Tw:$w):c===Tw||c===$w?c=Cs:c===Mw||c===Rw?c=cl:(c=Cs,s=void 0);const _=c===Cs&&e[h+1].startsWith("/>")?" ":"";a+=c===cl?u+DS:v>=0?(i.push(f),u.slice(0,v)+Gx+u.slice(v)+$o+_):u+$o+(v===-2?h:_)}return[Hx(e,a+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class Kl{constructor({strings:t,_$litType$:n},i){let s;this.parts=[];let a=0,c=0;const h=t.length-1,u=this.parts,[f,g]=IS(t,n);if(this.el=Kl.createElement(f,i),zs.currentNode=this.el.content,n===2||n===3){const v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(s=zs.nextNode())!==null&&u.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(const v of s.getAttributeNames())if(v.endsWith(Gx)){const y=g[c++],_=s.getAttribute(v).split($o),E=/([.?@])?(.*)/.exec(y);u.push({type:1,index:a,name:E[2],strings:_,ctor:E[1]==="."?NS:E[1]==="?"?WS:E[1]==="@"?BS:$d}),s.removeAttribute(v)}else v.startsWith($o)&&(u.push({type:6,index:a}),s.removeAttribute(v));if(qx.test(s.tagName)){const v=s.textContent.split($o),y=v.length-1;if(y>0){s.textContent=tu?tu.emptyScript:"";for(let _=0;_<y;_++)s.append(v[_],Bl()),zs.nextNode(),u.push({type:2,index:++a});s.append(v[y],Bl())}}}else if(s.nodeType===8)if(s.data===Kx)u.push({type:2,index:a});else{let v=-1;for(;(v=s.data.indexOf($o,v+1))!==-1;)u.push({type:7,index:a}),v+=$o.length-1}a++}}static createElement(t,n){const i=Vs.createElement("template");return i.innerHTML=t,i}}function Qr(e,t,n=e,i){if(t===Xt)return t;let s=i!==void 0?n._$Co?.[i]:n._$Cl;const a=Gl(t)?void 0:t._$litDirective$;return s?.constructor!==a&&(s?._$AO?.(!1),a===void 0?s=void 0:(s=new a(e),s._$AT(e,n,i)),i!==void 0?(n._$Co??=[])[i]=s:n._$Cl=s),s!==void 0&&(t=Qr(e,s._$AS(e,t.values),s,i)),t}let FS=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:i}=this._$AD,s=(t?.creationScope??Vs).importNode(n,!0);zs.currentNode=s;let a=zs.nextNode(),c=0,h=0,u=i[0];for(;u!==void 0;){if(c===u.index){let f;u.type===2?f=new $a(a,a.nextSibling,this,t):u.type===1?f=new u.ctor(a,u.name,u.strings,this,t):u.type===6&&(f=new GS(a,this,t)),this._$AV.push(f),u=i[++h]}c!==u?.index&&(a=zs.nextNode(),c++)}return zs.currentNode=Vs,s}p(t){let n=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,n),n+=i.strings.length-2):i._$AI(t[n])),n++}};class $a{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,i,s){this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Qr(this,t,n),Gl(t)?t===P||t==null||t===""?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==Xt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):PS(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==P&&Gl(this._$AH)?this._$AA.nextSibling.data=t:this.T(Vs.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Kl.createElement(Hx(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(n);else{const a=new FS(s,this),c=a.u(this.options);a.p(n),this.T(c),this._$AH=a}}_$AC(t){let n=zw.get(t.strings);return n===void 0&&zw.set(t.strings,n=new Kl(t)),n}k(t){Zm(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,s=0;for(const a of t)s===n.length?n.push(i=new $a(this.O(Bl()),this.O(Bl()),this,this.options)):i=n[s],i._$AI(a),s++;s<n.length&&(this._$AR(i&&i._$AB.nextSibling,s),n.length=s)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class $d{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,i,s,a){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=n,this._$AM=s,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=P}_$AI(t,n=this,i,s){const a=this.strings;let c=!1;if(a===void 0)t=Qr(this,t,n,0),c=!Gl(t)||t!==this._$AH&&t!==Xt,c&&(this._$AH=t);else{const h=t;let u,f;for(t=a[0],u=0;u<a.length-1;u++)f=Qr(this,h[i+u],n,u),f===Xt&&(f=this._$AH[u]),c||=!Gl(f)||f!==this._$AH[u],f===P?t=P:t!==P&&(t+=(f??"")+a[u+1]),this._$AH[u]=f}c&&!s&&this.j(t)}j(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class NS extends $d{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===P?void 0:t}}class WS extends $d{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==P)}}class BS extends $d{constructor(t,n,i,s,a){super(t,n,i,s,a),this.type=5}_$AI(t,n=this){if((t=Qr(this,t,n,0)??P)===Xt)return;const i=this._$AH,s=t===P&&i!==P||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==P&&(i===P||s);s&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class GS{constructor(t,n,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Qr(this,t)}}const KS={I:$a},qS=Vm.litHtmlPolyfillSupport;qS?.(Kl,$a),(Vm.litHtmlVersions??=[]).push("3.3.1");const jS=(e,t,n)=>{const i=n?.renderBefore??t;let s=i._$litPart$;if(s===void 0){const a=n?.renderBefore??null;i._$litPart$=s=new $a(t.insertBefore(Bl(),a),a,void 0,n??{})}return s._$AI(e),s};const Ym=globalThis;let Lr=class extends Ar{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=jS(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Xt}};Lr._$litElement$=!0,Lr.finalized=!0,Ym.litElementHydrateSupport?.({LitElement:Lr});const HS=Ym.litElementPolyfillSupport;HS?.({LitElement:Lr});(Ym.litElementVersions??=[]).push("4.2.1");const Jm=!1;const Ux=e=>(t,n)=>{n!==void 0?n.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)};const US={attribute:!0,type:String,converter:eu,reflect:!1,hasChanged:Um},VS=(e=US,t,n)=>{const{kind:i,metadata:s}=n;let a=globalThis.litPropertyMetadata.get(s);if(a===void 0&&globalThis.litPropertyMetadata.set(s,a=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),i==="accessor"){const{name:c}=n;return{set(h){const u=t.get.call(this);t.set.call(this,h),this.requestUpdate(c,u,e)},init(h){return h!==void 0&&this.C(c,void 0,e,h),h}}}if(i==="setter"){const{name:c}=n;return function(h){const u=this[c];t.call(this,h),this.requestUpdate(c,u,e)}}throw Error("Unsupported decorator location: "+i)};function G(e){return(t,n)=>typeof n=="object"?VS(e,t,n):((i,s,a)=>{const c=s.hasOwnProperty(a);return s.constructor.createProperty(a,i),c?Object.getOwnPropertyDescriptor(s,a):void 0})(e,t,n)}function Vx(e){return G({...e,state:!0,attribute:!1})}const Sn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},dr=e=>(...t)=>({_$litDirective$:e,values:t});let Ta=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,i){this._$Ct=t,this._$AM=n,this._$Ci=i}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};const Ni=dr(class extends Ta{constructor(e){if(super(e),e.type!==Sn.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((i=>i!==""))));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const n=e.element.classList;for(const i of this.st)i in t||(n.remove(i),this.st.delete(i));for(const i in t){const s=!!t[i];s===this.st.has(i)||this.nt?.has(i)||(s?(n.add(i),this.st.add(i)):(n.remove(i),this.st.delete(i)))}return Xt}});const W=e=>e??P;function*rt(e,t){if(e!==void 0){let n=0;for(const i of e)yield t(i,n++)}}const{I:ZS}=KS,Zx=e=>e.strings===void 0,Lw=()=>document.createComment(""),Ss=(e,t,n)=>{const i=e._$AA.parentNode,s=t===void 0?e._$AB:t._$AA;if(n===void 0){const a=i.insertBefore(Lw(),s),c=i.insertBefore(Lw(),s);n=new ZS(a,c,e,e.options)}else{const a=n._$AB.nextSibling,c=n._$AM,h=c!==e;if(h){let u;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(u=e._$AU)!==c._$AU&&n._$AP(u)}if(a!==s||h){let u=n._$AA;for(;u!==a;){const f=u.nextSibling;i.insertBefore(u,s),u=f}}}return n},ko=(e,t,n=e)=>(e._$AI(t,n),e),XS={},Qm=(e,t=XS)=>e._$AH=t,Xx=e=>e._$AH,Cl=e=>{e._$AR(),e._$AA.remove()};const _l=(e,t)=>{const n=e._$AN;if(n===void 0)return!1;for(const i of n)i._$AO?.(t,!1),_l(i,t);return!0},nu=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Yx=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),QS(t)}};function YS(e){this._$AN!==void 0?(nu(this),this._$AM=e,Yx(this)):this._$AM=e}function JS(e,t=!1,n=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(i))for(let a=n;a<i.length;a++)_l(i[a],!1),nu(i[a]);else i!=null&&(_l(i,!1),nu(i));else _l(this,e)}const QS=e=>{e.type==Sn.CHILD&&(e._$AP??=JS,e._$AQ??=YS)};class Jx extends Ta{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,i){super._$AT(t,n,i),Yx(this),this.isConnected=t._$AU}_$AO(t,n=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),n&&(_l(this,t),nu(this))}setValue(t){if(Zx(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const at=()=>new eE;class eE{}const xf=new WeakMap,it=dr(class extends Jx{render(e){return P}update(e,[t]){const n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),P}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let n=xf.get(t);n===void 0&&(n=new WeakMap,xf.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?xf.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});const Qx="important",tE=" !"+Qx,eg=dr(class extends Ta{constructor(e){if(super(e),e.type!==Sn.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,n)=>{const i=e[n];return i==null?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(e,[t]){const{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?n.removeProperty(i):n[i]=null);for(const i in t){const s=t[i];if(s!=null){this.ft.add(i);const a=typeof s=="string"&&s.endsWith(tE);i.includes("-")||a?n.setProperty(i,a?s.slice(0,-11):s,a?Qx:""):n[i]=s}}return Xt}}),De=e=>({fromAttribute:t=>t===null?e:t!=="false",toAttribute:t=>t?"":null}),nE={fromAttribute:e=>e===null?null:e!=="false",toAttribute:e=>e===null?null:String(e)},iE={fromAttribute:e=>{if(e===null||e.trim()==="")return null;const t=Number(e);return Number.isFinite(t)?t:null},toAttribute:e=>e==null?null:String(e)},Lf=new Set("= <> < <= > >= contains notcontains startswith endswith between anyof noneof isblank isnotblank".split(" ")),oE={fromAttribute:e=>e===null?null:Lf.has(e)?e:(console.warn(`<u-grid-column>: unknown filter operation ignored: ${e}.`),null)},sE={fromAttribute:e=>{if(e===null)return null;const t=e.split(/\s+/).filter(Boolean),n=t.filter(i=>!Lf.has(i));return n.length&&console.warn(`<u-grid-column>: unknown filter operation(s) ignored: ${n.join(", ")}.`),t.filter(i=>Lf.has(i))}},rE=e=>({fromAttribute:t=>t===null?e:t.split(/[\s,]+/).filter(Boolean).map(Number).filter(n=>Number.isInteger(n)&&n>0)}),Ow=new Set(["csv","xlsx","pdf"]),aE={fromAttribute:e=>{if(e===null)return[];const t=e.split(/[\s,]+/).filter(Boolean),n=t.filter(i=>!Ow.has(i));return n.length&&console.warn(`<u-grid>: unknown export format(s) ignored: ${n.join(", ")}.`),[...new Set(t.filter(i=>Ow.has(i)))]}},Pc=(e,t)=>{if(!t)return;let n=e;for(const i of t.split(".")){if(n==null)return;n=n[i]}return n},ti=(e,t)=>t.valueGetter?t.valueGetter(e):Pc(e,t.path),ao=e=>{const{valueGetter:t,path:n}=e;if(t)return s=>t(s);if(!n)return()=>{};const i=n.split(".");return i.length===1?s=>s?.[n]:s=>{let a=s;for(const c of i){if(a==null)return;a=a[c]}return a}},xt=e=>e==null?"":String(e),ey=Object.freeze({filtering:!1,sorting:!1,paging:!1,grouping:!1,summary:!1}),lE=e=>{if(!e)return{flags:ey,forced:[]};if(e===!0)return{flags:{filtering:!0,sorting:!0,paging:!0,grouping:!0,summary:!0},forced:[]};const t=[],n={filtering:!!e.filtering,sorting:!!e.sorting,paging:!!e.paging,grouping:!!e.grouping,summary:!!e.summary},i=s=>{n[s]||(n[s]=!0,t.push(s))};return n.paging&&i("grouping"),n.paging||n.grouping?(i("filtering"),i("sorting"),i("summary")):n.summary=!1,{flags:n,forced:t}},cE=e=>typeof e=="function"?e:typeof e=="string"&&e?e.includes(".")?t=>Pc(t,e):t=>t?.[e]:t=>t,hE=e=>typeof e=="string"?`s${e}`:typeof e=="number"?`n${e}`:`${typeof e}:${String(e)}`,tg=e=>{if(e&&typeof e=="object"&&!Object.isFrozen(e)&&!(e instanceof Date)){Object.freeze(e);for(const t of Object.values(e))tg(t)}return e},Or=Symbol("missing"),uE=e=>e.lazy===!0,ng=e=>e.lazy===!0,ig=e=>e.tree===!0,ty=({items:e},t)=>ng(e)?e.get(t):ig(e)?e.nodes[e.children[e.from+t]]:e[t],dE=(e,t)=>{const{items:n}=e;if(ng(n))return n.find(t);if(ig(n)){for(let i=0;i<n.length;i++)if(t(ty(e,i)))return i;return-1}return n.findIndex(t)},ny=(e,t)=>{let n=0,i=e.length;for(;n<i;){const s=Math.floor((n+i)/2);e[s]<t?n=s+1:i=s}return n},Dw=({items:e,details:t})=>t?t.all?2*e.length-t.positions.length:e.length+t.positions.length:e.length,Al=({details:e},t)=>{if(!e)return t;const n=ny(e.positions,t);return e.all?2*t-n:t+n},pE=({details:e},t)=>{if(!e)return!1;const{positions:n}=e,i=ny(n,t),s=i<n.length&&n[i]===t;return e.all?!s:s},Pw=(e,t)=>{const{details:n}=e;if(!n)return{position:t,detail:!1};if(!n.all){const{positions:a}=n;let c=0,h=a.length;for(;c<h;){const u=Math.floor((c+h)/2);a[u]+u+1<=t?c=u+1:h=u}return c>0&&a[c-1]+c===t?{position:a[c-1],detail:!0}:{position:t-c,detail:!1}}let i=0,s=e.items.length-1;for(;i<s;){const a=Math.floor((i+s+1)/2);Al(e,a)<=t?i=a:s=a-1}return{position:i,detail:Al(e,i)!==t}},_s=e=>!("isGroup"in e),fE=e=>!e.isGroup&&!e.isFooter&&!e.isDetail,mE=(e,t,n)=>{const i=e.detailCount?e.detailIndices():void 0,s=h=>{if(!i)return h;let u=0,f=i.length;for(;u<f;){const g=Math.floor((u+f)/2);i[g]-g<=h?u=g+1:f=g}return h+u},a=Math.min(s(t),e.length),c=Math.min(s(t+n),e.length);return{offset:a,length:Math.max(0,c-a)}};class ea{constructor(t){this.offset=0,this.#e=[],this.#t=[],this.#o=0,this.#s=0,this.#n=t}#e;#t;#n;#o;#s;#i;get length(){return this.#o}get detailCount(){return this.#s}push(t){this.#i=void 0,this.#e.push(this.#o),this.#t.push(t),this.#o++}pushTreeRun(t,n,i,s,a,c,h,u){if(s<=i)return;this.#i=void 0;const f={tree:!0,nodes:t,children:n,from:i,length:s-i,base:i-a,setSize:c,level:h},g={items:f,details:u&&(u.all||u.positions.length)?u:void 0},v=Dw(g);this.#e.push(this.#o),this.#t.push(g),this.#o+=v,this.#s+=v-f.length}pushItems(t,n){if(!t.length)return;this.#i=void 0;const i={items:t,details:n&&(n.all||n.positions.length)?n:void 0},s=Dw(i);this.#e.push(this.#o),this.#t.push(i),this.#o+=s,this.#s+=s-t.length}#a(t){const n=this.#e;let i=0,s=n.length-1;for(;i<s;){const a=Math.floor((i+s+1)/2);n[a]<=t?i=a:s=a-1}return i}dataRowsBefore(t){if(t<=0||!this.#t.length)return 0;let n=this.#i;if(!n){n=this.#i=[];let u=0;for(const f of this.#t)n.push(u),u+=_s(f)?f.items.length:fE(f)?1:0;n.push(u)}if(t>=this.#o)return n[n.length-1];const i=this.#a(t),s=this.#t[i],a=t-this.#e[i];if(!_s(s))return n[i];const{position:c,detail:h}=Pw(s,a);return n[i]+c+(h?1:0)}at(t){const n=this.#a(t),i=this.#t[n];if(!_s(i))return i;const{position:s,detail:a}=Pw(i,t-this.#e[n]),c=ty(i,s);if(c===Or){const{id:u,level:f}=i.items;return{isGroup:!1,key:`s:${u}:${s}${a?":x":""}`,item:void 0,index:s,skeleton:!0,level:f}}const h=`d:${this.#n(c)}`;if(ig(i.items)){const u=i.items,f={node:u.children[u.from+s],level:u.level,posInSet:u.base+s+1,setSize:u.setSize};return a?{isGroup:!1,isDetail:!0,key:`x:${this.#n(c)}`,item:c,masterKey:h,tree:f}:{isGroup:!1,key:h,item:c,index:t,tree:f}}return a?{isGroup:!1,isDetail:!0,key:`x:${this.#n(c)}`,item:c,masterKey:h}:{isGroup:!1,key:h,item:c,index:s}}#r(t,n){const i=n?s=>n(s)===t:s=>s===t;for(let s=0;s<this.#t.length;s++){const a=this.#t[s];if(_s(a)){const c=!n&&Array.isArray(a.items)?a.items.indexOf(t):dE(a,i);if(c>=0&&c<a.items.length)return{segment:s,position:c}}}}indexOfSkeletonKey(t){const n=t.slice(2).replace(/:x$/,""),i=n.lastIndexOf(":"),s=n.slice(0,i),a=Number(n.slice(i+1));for(let c=0;c<this.#t.length;c++){const h=this.#t[c];if(_s(h)&&ng(h.items)&&h.items.id===s&&a<h.items.length)return this.#e[c]+Al(h,a)}return-1}indexOfItem(t){return this.indexOfDataKey(t)}indexOfDataKey(t,n){const i=this.#r(t,n);return i?this.#e[i.segment]+Al(this.#t[i.segment],i.position):-1}indexOfDetail(t){return this.indexOfDetailKey(t)}indexOfDetailKey(t,n){const i=this.#r(t,n);if(!i)return-1;const s=this.#t[i.segment];return pE(s,i.position)?this.#e[i.segment]+Al(s,i.position)+1:-1}detailIndices(){const t=new Int32Array(this.#s);let n=0;for(let i=0;i<this.#t.length;i++){const s=this.#t[i];if(!_s(s)||!s.details)continue;const a=this.#e[i],{all:c,positions:h}=s.details;if(!c){h.forEach((g,v)=>{t[n++]=a+g+v+1});continue}let u=0,f=a;for(let g=0;g<s.items.length;g++)u<h.length&&h[u]===g?(u++,f++):(t[n++]=f+1,f+=2)}return t}indexOfKey(t){for(let n=0;n<this.#t.length;n++){const i=this.#t[n];if(!_s(i)&&i.key===t)return this.#e[n]}return-1}slice(t=0,n=this.#o){return og(this,t,n)}}const og=(e,t,n)=>{const i=[],s=new Map;for(let a=Math.max(0,t);a<Math.min(n,e.length);a++){const c=e.at(a),h=s.get(c.key)??0;s.set(c.key,h+1),i.push(h?{...c,key:`${c.key}#${h}`}:c)}return i};class gE{#e;#t;constructor(t,n,i){this.#e=t,this.size=i,this.offset=Math.max(0,Math.min(n,t.length)),this.length=Math.max(0,Math.min(i,t.length-this.offset))}get source(){return this.#e}detailIndices(){if(!this.#t){const t=this.offset+this.length;this.#t=this.#e.detailCount?this.#e.detailIndices().filter(n=>n>=this.offset&&n<t).map(n=>n-this.offset):new Int32Array(0)}return this.#t}get detailCount(){return this.detailIndices().length}at(t){return this.#e.at(this.offset+t)}dataRowsBefore(t){const n=Math.min(Math.max(t,0),this.length);return this.#e.dataRowsBefore(this.offset+n)-this.#e.dataRowsBefore(this.offset)}slice(t=0,n=this.length){return og(this,t,n)}indexOfKey(t){for(let n=0;n<this.length;n++)if(this.at(n).key===t)return n;return-1}indexOfSkeletonKey(t){const n=this.#e.indexOfSkeletonKey(t)-this.offset;return n>=0&&n<this.length?n:-1}#n(t,n,i){for(let s=0;s<this.length;s++){const a=this.at(s);if((i?a.isDetail:!a.isGroup&&!a.isFooter&&!a.isDetail&&!a.skeleton)&&(n?n(a.item):a.item)===t)return s}return-1}indexOfDataKey(t,n){return this.#n(t,n,!1)}indexOfDetailKey(t,n){return this.#n(t,n,!0)}}const vE=(e,t,n,i,s=!1,a)=>{const c=new ea(i);if(!t.length)return c.pushItems(e,a?.(e)),c;const h=u=>{for(const f of u){const g=n(f.key,f.level);c.push({isGroup:!0,key:`g:${f.key}`,groupKey:f.key,level:f.level,column:f.column,value:f.value,expanded:g,itemCount:f.items.length,firstItem:f.items[0],path:f.path,summaries:f.summaries}),g&&(f.children.length?h(f.children):c.pushItems(f.items,a?.(f.items)),s&&c.push({isGroup:!1,isFooter:!0,key:`f:${f.key}`,groupKey:f.key,level:f.level,path:f.path,summaries:f.summaries}))}};return h(t),c};class ql{#e=new Map;#t;constructor(t){this.#t=t}get size(){return this.#e.size}get(t){const n=this.#e.get(t);return n!==void 0&&(this.#e.delete(t),this.#e.set(t,n)),n}entries(){return this.#e.entries()}replace(t,n){this.#e.has(t)&&this.#e.set(t,n)}clear(){this.#e.clear()}delete(t){this.#e.delete(t)}set(t,n){this.#e.delete(t),this.#e.set(t,n),this.#e.size>this.#t&&this.#e.delete(this.#e.keys().next().value)}}const bE=/^(\d{4})-(\d{2})-(\d{2})$/,wE=/^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2})(?:\.\d+)?)?(?:Z|[+-]\d{2}:?\d{2})?$/i,xE=(e,t)=>new Date(e,t,0).getDate(),Iw=(e,t,n)=>t>=1&&t<=12&&n>=1&&n<=xE(e,t),go=e=>{if(e instanceof Date)return Number.isNaN(e.getTime())?void 0:e;if(typeof e=="number")return Number.isFinite(e)?new Date(e):void 0;if(typeof e!="string")return;const t=e.trim(),n=bE.exec(t);if(n){const[v,y,_]=n.slice(1).map(Number);return Iw(v,y,_)?new Date(v,y-1,_):void 0}const i=wE.exec(t);if(!i)return;const[s,a,c,h,u,f=0]=i.slice(1).map(v=>Number(v??0));if(!Iw(s,a,c)||h>23||u>59||f>59)return;const g=new Date(t.replace(" ","T"));return Number.isNaN(g.getTime())?void 0:g},pr=e=>{if(typeof e=="bigint")return e;if(typeof e=="number")return Number.isNaN(e)?void 0:e;if(typeof e=="string"&&e.trim()!==""){const t=Number(e);return Number.isNaN(t)?void 0:t}},Ri=(e,t)=>{if(e==null||!t)return e;switch(t){case"number":return pr(e)??e;case"date":case"datetime":return go(e)??e;case"boolean":return typeof e=="boolean"?e:e==="true"?!0:e==="false"?!1:e;case"string":return xt(e)}},yE=e=>{switch(typeof e){case"number":case"bigint":return"number";case"boolean":return"boolean";case"string":return"string";default:return e instanceof Date?"date":void 0}},iy=(e,t)=>{if(t.dataType)return t.dataType;if(!(!t.path&&!t.valueGetter))for(const n of e){const i=ti(n,t);if(i!=null)return yE(i)}},oy=(e,t)=>e.alignment??(t==="number"?"end":t==="boolean"?"center":"start"),Fw={useGrouping:!1,maximumFractionDigits:20},Jo={year:"numeric",month:"numeric",day:"numeric"},sg={...Jo,hour:"numeric",minute:"2-digit"},CE=128,Nw=new ql(CE),sy=(e,t,n,i)=>{const s=`${e}|${t??""}|${JSON.stringify(n)}`;let a=Nw.get(s);if(!a){const c=(h,u)=>e==="number"?new Intl.NumberFormat(h,u):new Intl.DateTimeFormat(h,u);try{a=c(t,n)}catch{try{a=c(t,i)}catch{a=c(void 0,i)}}Nw.set(s,a)}return a},nn=(e,t=Fw)=>sy("number",e,t,Fw),Qo=(e,t,n=Jo)=>sy("date",e,t,n),_E=e=>e==null||typeof e=="number"&&Number.isNaN(e)||e instanceof Date&&Number.isNaN(e.getTime()),Ic=(e,t,n,i)=>{if(n.displayValue)return xt(n.displayValue(e,t));if(_E(e))return n.emptyText??"";const{format:s}=n;if(typeof s=="function")return xt(s(e,t));const{dataType:a}=i;if(a==="number"){const c=pr(e);return c===void 0?xt(e):nn(i.language,s??void 0).format(c)}if(a==="date"||a==="datetime"){const c=go(e),h=a==="date"?Jo:sg;return c?Qo(i.language,s??h,h).format(c):xt(e)}return a==="boolean"&&typeof e=="boolean"?e?i.trueText:i.falseText:xt(e)},ry=(e,t,n)=>{if(t.booleanDisplay!=="icon"&&t.booleanDisplay!=="check"||n.dataType!=="boolean"||t.displayValue||typeof t.format=="function")return;const i=Ri(e,"boolean");return typeof i=="boolean"?i:void 0},AE=(e,t,n)=>{if(e.displayValue||typeof e.format=="function")return;const i=[e.emptyText??""],{dataType:s,language:a}=t;if(s==="number"){const c=nn(a,e.format??void 0);for(const h of[-1234567890125e-3,.5,987e19,-1234e-9,0])i.push(c.format(h))}else if(s==="date"||s==="datetime"){const c=s==="date"?Jo:sg,h=Qo(a,e.format??c,c);for(let u=0;u<12;u++)for(const f of[1,10,20,28])for(const g of[0,13])i.push(h.format(new Date(2024,u,f,g,5,7))),i.push(h.format(new Date(1999,u,f+1,g+9,48,59)))}else if(s==="boolean")i.push(t.trueText,t.falseText);else return;return new Set(Array.from(n(i.join(""))))},Ww=(e,t,n)=>Ic(ti(e,t),e,t,n),ay=e=>{for(const t of e)t.keys=void 0},Of=e=>e.map(()=>({rows:0,count:0,sum:0,min:void 0,max:void 0,minKey:void 0,maxKey:void 0})),ly=e=>e==null||e===""||typeof e=="number"&&Number.isNaN(e)||e instanceof Date&&Number.isNaN(e.getTime()),kE=(e,t)=>{const n=e instanceof Date?e.getTime():e,i=t instanceof Date?t.getTime():t;return n<i?-1:n>i?1:0},SE=(e,t)=>{const{dataType:n}=e;if(n==="string"||n==="boolean")return;if(typeof t=="number")return t;if(t instanceof Date)return t.getTime();if(typeof t!="string"||n!=="number"&&n!=="date"&&n!=="datetime")return;e.keys??=new Map;let i=e.keys.get(t);if(i===void 0){const s=n==="number"?pr(t):go(t)?.getTime();i=s===void 0?Number.NaN:Number(s),e.keys.set(t,i)}return i},iu=(e,t,n,i,s)=>n!==void 0&&s!==void 0&&!Number.isNaN(n)&&!Number.isNaN(s)?n<s:(e.compare??kE)(Ri(t,e.dataType),Ri(i,e.dataType))<0,cy=(e,t,n)=>{for(let i=0;i<t.length;i++){const s=t[i],a=e[i];if(a.rows++,typeof s.type=="function"||s.type==="count"||!s.column)continue;s.read??=ao(s.column);const c=s.read(n);if(s.type==="sum"||s.type==="avg"){const u=typeof c=="number"?c:Number(pr(c));Number.isFinite(u)&&(a.sum+=u,a.count++);continue}if(c==null||c==="")continue;let h=SE(s,c);if(h===void 0){if(ly(Ri(c,s.dataType)))continue;h=Number.NaN}else if(Number.isNaN(h))continue;s.type==="min"?(a.min===void 0||iu(s,c,h,a.min,a.minKey))&&(a.min=c,a.minKey=h):(a.max===void 0||iu(s,a.max,a.maxKey,c,h))&&(a.max=c,a.maxKey=h)}},Bw=(e,t,n)=>{for(let i=0;i<n.length;i++){const s=e[i],a=t[i],c=n[i];s.rows+=a.rows,s.count+=a.count,s.sum+=a.sum,a.min!==void 0&&(s.min===void 0||iu(c,a.min,a.minKey,s.min,s.minKey))&&(s.min=a.min,s.minKey=a.minKey),a.max!==void 0&&(s.max===void 0||iu(c,s.max,s.maxKey,a.max,a.maxKey))&&(s.max=a.max,s.maxKey=a.maxKey)}},hy=(e,t,n)=>t.map((i,s)=>{const a=e[s];if(typeof i.type=="function"){const{column:c}=i,h=c?ao(c):void 0,u=h?n.map(h):[];return i.type(Object.freeze(u),Object.isFrozen(n)?n:Object.freeze([...n]))}switch(i.type){case"count":return a.rows;case"sum":return a.sum;case"avg":return a.count?a.sum/a.count:null;case"min":return a.min===void 0?null:Ri(a.min,i.dataType);case"max":return a.max===void 0?null:Ri(a.max,i.dataType);default:return null}}),Td=(e,t)=>{if(!t.length)return[];const n=Of(t);for(const i of e)cy(n,t,i);return ay(t),hy(n,t,e)},EE={maximumFractionDigits:2},ME=e=>e.type==="min"||e.type==="max"?void 0:EE,RE=(e,t)=>e.type==="count"||e.type==="sum"||e.type==="avg"?"number":e.type==="min"||e.type==="max"?e.dataType:typeof t=="number"||typeof t=="bigint"?"number":t instanceof Date?"date":void 0,uy=(e,t,n,i)=>{if(ly(e))return"";const s=t.type==="count"||typeof t.column?.format=="function"?void 0:t.column?.format,a=n??s;if(typeof a=="function")return xt(a(e));const c=RE(t,e);if(c==="number"){const h=pr(e);return h===void 0?xt(e):nn(i.language,a??ME(t)).format(h)}if(c==="date"||c==="datetime"){const h=go(e),u=c==="date"?Jo:sg;return h?Qo(i.language,a??u,u).format(h):xt(e)}return typeof e=="boolean"?e?i.trueText:i.falseText:xt(e)},$E=e=>e==null?"blank":e instanceof Date?`date:${e.getTime()}`:`${typeof e}:${String(e)}`,dy=(e,t)=>e.path??`#${t}:${e.label??""}`,py=e=>{const{groupValueGetter:t}=e;return t?n=>t(n):ao(e)},TE=(e,t)=>t.map(n=>py(n)(e)),fy=(e,t)=>$E(t.groupValueGetter?e:Ri(e,t.dataType)),$i=(e,t)=>{if(!(!e.length||e.length>t.length))return JSON.stringify(e.map((n,i)=>{const s=t[i];return[dy(s,i),fy(n,s)]}))},zE=(e,t,n,i=[],s=[])=>{const a=s.length>0,c=t.length-1,h=(f,g,v,y)=>{const _=t[g],E=n(_),$=py(_),z=g===c,D=a&&z,I=new Map,j=new Map,X=Se=>{if(!(Se instanceof Date))return Se;const ce=`\0date:${Se.getTime()}`;return j.has(ce)||j.set(ce,Se),ce};for(const Se of f){const ce=X($(Se));let Ee=I.get(ce);Ee?Ee.items.push(Se):(Ee={items:[Se],accumulators:D?Of(s):void 0},I.set(ce,Ee)),D&&cy(Ee.accumulators,s,Se)}const Q=new Map,ge=new Map;let F=!1;for(const[Se,ce]of I){const Ee=typeof Se=="string"?j.get(Se)??Se:Se,Ve=fy(Ee,_),Ze=Q.get(Ve);ge.set(Se,Ve),Ze?(F=!0,Ze.items=[],Ze.accumulators&&ce.accumulators&&Bw(Ze.accumulators,ce.accumulators,s)):Q.set(Ve,{value:Ee,items:ce.items,accumulators:ce.accumulators})}if(F){const Se=new Set([...Q.values()].filter(ce=>!ce.items.length));for(const ce of f){const Ee=Q.get(ge.get(X($(ce))));Se.has(Ee)&&Ee.items.push(ce)}}const ee=i[g]==="desc"?-1:1,We=_.groupValueGetter?null:_.comparator,ue=[...Q.entries()].sort(([,Se],[,ce])=>ee*(We?We(Se.value,ce.value,Se.items[0],ce.items[0])||0:E(Se.value,ce.value))),mt=[],Pe=[];for(const[Se,ce]of ue){const Ee=[...v,[dy(_,g),Se]],Ve=Object.freeze([...y,ce.value]);let Ze=[],Ot=ce.accumulators;if(!z){const An=h(ce.items,g+1,Ee,Ve);if(Ze=An.nodes,a){Ot=Of(s);for(const li of An.accumulators)Bw(Ot,li,s)}}Ot&&Pe.push(Ot),Object.freeze(ce.items),mt.push({key:JSON.stringify(Ee),level:g,column:_,value:ce.value,path:Ve,items:ce.items,children:Ze,summaries:Ot?hy(Ot,s,ce.items):[]})}return{nodes:mt,accumulators:Pe}};if(!t.length)return[];const{nodes:u}=h(e,0,[],[]);return ay(s),u},LE=200,As="\0",hl=e=>e?JSON.stringify(e.map(rg)):"",rg=e=>e instanceof Date?{date:e.getTime()}:e===void 0?null:e;class Wh{constructor(t,n,i,s){this.lazy=!0,this.loadedEnd=0,this.#e=t,this.id=n,this.path=i,this.count=s}#e;get length(){return this.count!==void 0?this.count:this.loadedEnd+this.#e.blockSizeFor(this)}get(t){const n=this.peek(t);return n===Or&&this.#e.want(this,this.#e.blockOf(t)),n}find(t){return this.#e.find(this,t)}loadedPositions(t){return this.#e.loadedPositions(this,t)}peek(t){const n=this.#e.blockSizeFor(this),i=this.#e.block(this,Math.floor(t/n));if(!i)return Or;const s=t%n;return s<i.length?i[s]:Or}}class kl{constructor(t,n,i,s){this.lazy=!0,this.#e=t,this.id=n,this.path=i,this.level=s}#e;get length(){return this.groups?0:1}get(){return this.#e.want(this,0),Or}peek(){return Or}find(){return-1}loadedPositions(){return[]}}class OE{constructor(t,n,i){this.#n=new ql(LE),this.#o=new Map,this.#s=new Map,this.#i=new Map,this.#a=new Map,this.#r=new Set,this.ready=!1,this.summary=[],this.error=void 0,this.hasError=!1,this.disposed=!1,this.#c=!1,this.version=0,this.query=t,this.#e=n,this.#t=i,this.root=t.group.length?this.#l(null,0):this.#h(null,void 0)}#e;#t;#n;#o;#s;#i;#a;#r;#c;get blocksCached(){return this.#n.size}get pendingCount(){return this.#i.size}blockSizeFor(t){return Number.isFinite(this.query.blockSize)?this.query.blockSize:Math.max(t.count??t.loadedEnd,1)}blockOf(t){return Number.isFinite(this.query.blockSize)?Math.floor(t/this.query.blockSize):0}find(t,n){const i=t.id+As,s=this.blockSizeFor(t);let a=-1;for(const[c,h]of this.#n.entries()){if(!c.startsWith(i))continue;const u=Number(c.slice(i.length))*(Number.isFinite(this.query.blockSize)?s:0),f=h.findIndex(n);f>=0&&(a<0||u+f<a)&&(a=u+f)}return a}loadedPositions(t,n){const i=t.id+As,s=Number.isFinite(this.query.blockSize)?this.blockSizeFor(t):0,a=[];for(const[c,h]of this.#n.entries()){if(!c.startsWith(i))continue;const u=Number(c.slice(i.length))*s;h.forEach((f,g)=>{n(f)&&a.push(u+g)})}return a.sort((c,h)=>c-h)}rootItems(){return this.root instanceof Wh?this.block(this.root,0):void 0}block(t,n){return this.#n.get(t.id+As+n)}#l(t,n){const i=`l${hl(t)}`;let s=this.#o.get(i);return s||(s=new kl(this,i,t,n),this.#o.set(i,s)),s}#h(t,n){const i=`d${hl(t)}`;let s=this.#s.get(i);return s||(s=new Wh(this,i,t,n),this.#s.set(i,s)),s}loadedList(t){return this.#o.get(`l${hl(t.path)}`)}childrenOf(t){return t.path.length<this.query.group.length?this.#l(t.path,t.path.length):this.#h(t.path,t.count)}want(t,n){const i=t.id+As+n;!this.disposed&&!this.#i.has(i)&&!this.#r.has(i)&&this.#a.set(i,{node:t,block:n})}flush(){const t=[...this.#a.values()];this.#a.clear();for(const{node:n,block:i}of t)this.#p(n,i)}#d(t,n,i){const{query:s}=this,a=t instanceof kl,c=!a&&Number.isFinite(s.blockSize),h={sort:s.sort,filter:s.filter,filterValue:s.filterValue,searchText:s.searchText,group:s.group,groupPath:t.path,requireTotalCount:i&&!s.infinite,requireGroupCount:a,totalSummary:i?s.totalSummary:[],groupSummary:a?s.groupSummary:[],tree:s.tree??null};return c&&(h.skip=n*s.blockSize,h.take=s.blockSize),tg(h)}#p(t,n){const i=t.id+As+n;if(this.disposed||this.#i.has(i))return;const s=new AbortController,a=t===this.root&&!this.#c,c=this.#d(t,n,a);a&&(this.#c=!0);let h;try{h=this.#e.request(c,s.signal)}catch(u){h=Promise.reject(u)}if(!h){a&&(this.#c=!1),this.#u();return}this.#i.set(i,s),h.then(u=>{this.#i.get(i)!==s||s.signal.aborted||this.disposed||(this.#i.delete(i),this.#f(t,n,u,a),this.version++,this.#u(),this.#e.changed())},u=>{this.#i.get(i)!==s||s.signal.aborted||this.disposed||(this.#i.delete(i),this.#r.add(i),a&&(this.#c=!1),this.error=u,this.hasError=!0,this.version++,this.#u(),this.#e.changed())})}#u(){this.#t(this)}#f(t,n,i,s){const a=Array.isArray(i?.data)?i.data:[];if(s&&(this.ready=!0,this.summary=i.summary??[],typeof i.totalCount=="number"&&i.totalCount>=0&&(this.totalCount=i.totalCount)),t instanceof kl){const u=a.map(f=>({value:f?.key,count:Math.max(0,Number(f?.count)||0),summary:f?.summary??[],path:[...t.path??[],f?.key]}));t.groups=u,t===this.root&&this.totalCount===void 0&&(this.totalCount=u.reduce((f,g)=>f+g.count,0));return}const c=this.query.blockSize;if(this.#n.set(t.id+As+n,a),!Number.isFinite(c)){t.count=a.length,t.loadedEnd=a.length;return}const h=n*c+a.length;t.loadedEnd=Math.max(t.loadedEnd,h),t===this.root&&!this.query.infinite&&this.totalCount!==void 0&&(t.count=this.totalCount),a.length<c&&(t.count===void 0||t.count>h)&&(t.count=h,t===this.root&&(this.totalCount=h))}retry(){this.hasError=!1,this.error=void 0,this.#r.clear()}*loadedItems(){for(const[,t]of this.#n.entries())yield*t}loadedInOrder(){const t=new Map;for(const[s,a]of this.#n.entries()){const c=s.lastIndexOf(As),h=s.slice(0,c);let u=t.get(h);u||(u=[],t.set(h,u)),u.push([Number(s.slice(c+1)),a])}const n=[],i=s=>{if(s){if(s instanceof Wh){for(const[,a]of(t.get(s.id)??[]).sort((c,h)=>c[0]-h[0]))for(const c of a)n.push(c);return}for(const a of s.groups??[])i(a.path.length<this.query.group.length?this.#o.get(`l${hl(a.path)}`):this.#s.get(`d${hl(a.path)}`))}};return i(this.root),n}updateItems(t,n){let i=0;for(const[s,a]of this.#n.entries()){let c;a.forEach((h,u)=>{const f=n.get(t(h));f!==void 0&&(c??=[...a],c[u]=f,i++)}),c&&this.#n.replace(s,c)}return i&&this.version++,i}abortPending(){for(const t of this.#i.values())t.abort();this.#i.clear(),this.ready||(this.#c=!1)}dispose(){this.disposed=!0,this.#a.clear(),this.abortPending()}}class DE{#e;#t;#n;#o=[];constructor(t){this.#e=t}get current(){return this.#t}get loading(){return!!this.#n&&!this.#n.hasError}get pending(){return(this.#t?.pendingCount??0)+(this.#n?.pendingCount??0)}get blocksCached(){return(this.#t?.blocksCached??0)+(this.#n?.blocksCached??0)}get error(){const t=this.#n?.hasError?this.#n:this.#t?.hasError?this.#t:void 0;return t?{error:t.error}:void 0}reset(t,n=0){this.#n?.dispose(),this.#t?.abortPending();const i=new OE(t,this.#e,a=>this.#s(a));this.#n=i;const{root:s}=i;if(s instanceof kl||!Number.isFinite(t.blockSize)||t.infinite)i.want(s,0);else{i.want(s,0);const a=Math.floor(Math.max(0,n)/t.blockSize);a>0&&i.want(s,a)}i.flush()}#s(t){t===this.#n&&(t.ready?(this.#t?.dispose(),this.#t=t,this.#n=void 0,this.#i()):t.hasError?this.#i():t.pendingCount||(t.dispose(),this.#n=void 0,this.#i(),this.#e.changed()))}whenSettled(){return!this.#n||!this.#n.pendingCount&&!this.#n.ready?Promise.resolve():new Promise(t=>this.#o.push(t))}#i(){const t=this.#o;this.#o=[],t.forEach(n=>n())}flush(){this.#t?.flush(),this.#n?.flush()}retry(){const t=this.#n;if(t?.hasError&&!t.ready){t.retry(),t.want(t.root,0),t.flush(),this.#e.changed();return}this.#t?.retry(),this.#e.changed()}dispose(){this.#n?.dispose(),this.#t?.dispose(),this.#n=void 0,this.#t=void 0,this.#i()}}const PE=(e,t,n,i,s,a=!1,c)=>{const h=new ea(i),u=f=>{if(f instanceof Wh){h.pushItems(f,c?.(f));return}if(!f.groups){h.pushItems(f);return}for(const g of f.groups){const v=g.path.length-1,y=t[v],_=$i(g.path,t)??JSON.stringify(g.path.map(rg)),E=n(_,v),$=s(g.summary);h.push({isGroup:!0,key:`g:${_}`,groupKey:_,level:v,column:y,value:g.value,expanded:E,itemCount:g.count,firstItem:void 0,path:g.path,summaries:$}),E&&(u(e.childrenOf(g)),a&&h.push({isGroup:!1,isFooter:!0,key:`f:${_}`,groupKey:_,level:v,path:g.path,summaries:$}))}};return u(e.root),h},IE=(e,t,n)=>{const i=s=>s?.groups?.map(a=>({key:$i(a.path,t)??JSON.stringify(a.path.map(rg)),level:a.path.length-1,column:t[a.path.length-1],value:a.value,path:a.path,items:[],children:i(e.loadedList(a)),summaries:n(a.summary)}))??[];return e.root instanceof kl?i(e.root):[]},FE=(e,t)=>{const n=URL.createObjectURL(e),i=document.createElement("a");i.href=n,i.download=t,i.style.display="none",document.body.append(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)},Th=(e,t,n,i=null)=>{const{columns:s}=e,a=new Array(s.length),c=new Array(s.length);for(let h=0;h<s.length;h++){const u=s[h],f=u.read(t);a[h]=f,c[h]=u.text(f,t)}return{rowType:"data",level:n,item:t,values:a,texts:c,fixed:i}},ag=(e,t,n,i)=>{const s=e.columns.length,a=Array.from({length:s},()=>[]),c=Array.from({length:s},()=>[]),h=[];return t.forEach((u,f)=>{const g=u.column?e.columns.findIndex(y=>y.info.column===u.column):-1,v=i(u,g);v==="label"?h.push(u.text(n[f]).label):v==="cell"&&g>=0&&(a[g].push(u.value(n[f])),c[g].push(u.text(n[f]).text))}),{summaries:a,texts:c.map(u=>u.join(e.listSeparator)),labels:h}},NE=(e,t)=>{const{summaries:n,texts:i,labels:s}=ag(e,e.includeSummaries?e.groupSummaries:[],t.summaries,({item:c},h)=>{const u=c.display??"inline";return u==="footer"?"skip":u==="column"&&h>0?"cell":"label"}),a=e.groupValueText(t);return{rowType:"group",level:t.level,groupPath:t.path,column:t.column,value:t.value,text:a,label:e.groupLabel(t,a,s),itemCount:t.items.length,summaries:n,texts:i}},Gw=(e,t)=>{const{summaries:n,texts:i}=ag(e,e.groupSummaries,t.summaries,({item:s})=>s.display==="footer"?"cell":"skip");return{rowType:"group-footer",level:t.level+1,groupPath:t.path,summaries:n,texts:i}},WE=e=>{if(!e.includeSummaries||!e.totalSummaries.length)return;const{summaries:t,texts:n}=ag(e,e.totalSummaries,e.totals,()=>"cell");return{rowType:"total",level:0,groupPath:null,summaries:t,texts:n}};function*zd(e){const{groups:t,includeGroups:n}=e,i=n&&e.includeSummaries&&e.groupSummaries.some(a=>a.item.display==="footer");for(const a of e.fixedTop??[])yield Th(e,a,0,"top");if(t.length){const a=n?my(t):0,c=[{nodes:t,index:0}];for(;c.length;){const h=c[c.length-1];if(h.index>=h.nodes.length){c.pop(),i&&h.parent&&(yield Gw(e,h.parent));continue}const u=h.nodes[h.index++];if(n&&(yield NE(e,u)),u.children.length){c.push({nodes:u.children,index:0,parent:u});continue}for(const f of u.items)yield Th(e,f,a);i&&(yield Gw(e,u))}}else{const{items:a,itemLevels:c,itemOverrides:h}=e;for(let u=0;u<a.length;u++){const f=Th(e,a[u],c?.[u]??0);for(const[g,v]of h?.(u)??[])f.values[g]=v.value,f.texts[g]=v.text;yield f}}for(const a of e.fixedBottom??[])yield Th(e,a,0,"bottom");const s=WE(e);s&&(yield s)}const BE=e=>{const t=e.itemLevels;if(t){let n=0;for(let i=0;i<t.length;i++)n=Math.max(n,t[i]);return n}return e.includeGroups?my(e.groups):0},my=e=>{let t=0,n=e;for(;n.length;)t++,n=n[0].children;return t},gy=/^[=+\-@\t\r]/,GE=/^(?:[+-][ \u00a0\u202f]?)?(?:\p{Sc}[ \u00a0\u202f]?)?[\d.,]*\d[\d\s.,'’]*(?:[eE][+-]?\d+)?\s?[%\p{Sc}]?$/u,Df=e=>gy.test(e)&&!GE.test(e)?`'${e}`:e,KE=e=>e.startsWith("'")&&gy.test(e.slice(1)),vy=(e,t)=>e.includes('"')||e.includes(`
`)||e.includes("\r")||e.includes(t)?`"${e.replaceAll('"','""')}"`:e,by=e=>vy(e,"	"),qE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ou=e=>e.replace(/[&<>"']/g,t=>qE[t]),jE=(e,t)=>e&&e!=="auto"?e:HE(t)===","?";":",",HE=e=>{try{return new Intl.NumberFormat(e||void 0).formatToParts(1.5).find(t=>t.type==="decimal")?.value??"."}catch{return"."}},UE="\uFEFF",su=`\r
`,VE=6,ZE=256,XE=()=>{const e=typeof window>"u"?void 0:window.scheduler;return e?.yield?e.yield():new Promise(t=>setTimeout(t,0))},lg=(e=VE,t=()=>performance.now())=>{let n=0,i=t();return{tick:()=>{if(!(++n<ZE)&&(n=0,!(t()-i<e)))return XE().then(()=>{i=t()})}}},YE=1e4,JE=64,ji=(e,t=2)=>String(e).padStart(t,"0"),QE=(e,t)=>{const n=`${ji(e.getFullYear(),4)}-${ji(e.getMonth()+1)}-${ji(e.getDate())}`;if(t)return n;const i=-e.getTimezoneOffset(),s=i===0?"Z":`${i>0?"+":"-"}${ji(Math.floor(Math.abs(i)/60))}:${ji(Math.abs(i)%60)}`,a=`${ji(e.getHours())}:${ji(e.getMinutes())}:${ji(e.getSeconds())}`;return`${n}T${a}${e.getMilliseconds()?`.${ji(e.getMilliseconds(),3)}`:""}${s}`},e1=(e,t)=>e==null?"":e instanceof Date?Number.isNaN(e.getTime())?"":QE(e,t.info.dataType==="date"):typeof e=="number"?Number.isFinite(e)?String(e):"":typeof e=="object"?JSON.stringify(e)??"":String(e),t1=(e,t)=>(typeof e=="number"||typeof e=="bigint"||e instanceof Date)&&t.builtIn,cg=(e,t,n,i)=>{const s=a=>n?Df(a):a;switch(e.rowType){case"data":return e.texts.map((a,c)=>{const h=t[c],u=e.values[c],f=i?e1(u,h):a;return n&&!t1(u,h)?Df(f):f});case"group":return e.texts.map((a,c)=>s(c?a:e.label));default:return e.texts.map(s)}},Kw=(e,t)=>e.map(n=>vy(n,t)).join(t),ru=e=>{e?.throwIfAborted()},n1=async(e,t,n,i=lg())=>{const{signal:s}=t;ru(s);const a=jE(t.separator,n);if(a.length!==1||['"',"\r",`
`].includes(a))throw new RangeError(`Invalid CSV separator: ${JSON.stringify(a)} (one character other than a quote, CR or LF).`);const c=t.escapeFormulas!==!1,h=t.rawValues===!0,u=e.columns;let f=[],g=[];t.bom!==!1&&g.push(UE);const v=()=>{g.length&&(f.push(new Blob([g.join("")])),g=[]),f.length>=JE&&(f=[new Blob(f)])};t.includeHeaders!==!1&&g.push(Kw(u.map(y=>c?Df(y.info.label):y.info.label),a),su);for(const y of zd(e)){g.push(Kw(cg(y,u,c,h),a),su);const _=i.tick();_&&(v(),await _,ru(s))}return v(),new Blob(f,{type:"text/csv;charset=utf-8"})},i1=async(e,t,n=lg())=>{ru(t);const i=[];for(const s of zd(e)){i.push(s);const a=n.tick();a&&(await a,ru(t))}return i},wy=e=>KE(e)?`<td style='mso-number-format:"\\@"'>${ou(e)}</td>`:`<td>${ou(e)}</td>`,xy=(e,t,n={})=>{const i=[],s=[],a=e.length<=YE;for(const u of e){const f=cg(u,t,!0,!1);i.push(f.map(by).join("	")),a&&s.push(`<tr>${f.map(wy).join("")}</tr>`)}const c=n.rtl?' dir="rtl"':"",h=n.lang?` lang="${ou(n.lang)}"`:"";return{text:i.join(su),html:a?`<table${c}${h}><tbody>${s.join("")}</tbody></table>`:""}},o1=1e5,s1=(e,t,n={})=>{const i=[],s=[],a=t<=o1;for(const{rows:u,columns:f}of e)for(const g of u){const v=cg(g,f,!0,!1);i.push(v.map(by).join("	")),a&&s.push(`<tr>${v.map(wy).join("")}</tr>`)}const c=n.rtl?' dir="rtl"':"",h=n.lang?` lang="${ou(n.lang)}"`:"";return{text:i.join(su),html:a?`<table${c}${h}><tbody>${s.join("")}</tbody></table>`:""}},qw=(e,t,n=e.some(i=>i.priority!==null))=>{let i=0;for(const h of e)i+=h.width;if(i<=t||e.length<2)return[];const s=[];e.forEach((h,u)=>{!h.fixed&&(!n||h.priority!==null)&&s.push(u)}),n?s.sort((h,u)=>e[h].priority-e[u].priority||u-h):s.reverse();const a=[];let c=e.length;for(const h of s){if(i<=t||c<=1)break;a.push(h),i-=e[h].width,c--}return a.sort((h,u)=>h-u)},yf=e=>typeof e=="number"&&Number.isFinite(e)?e:null,hg=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])",'[contenteditable=""]','[contenteditable="true"]','[tabindex]:not([tabindex="-1"])'].join(", "),yy=new WeakSet,r1=e=>e.localName.includes("-")&&!!e.shadowRoot&&(e.shadowRoot.delegatesFocus||!!e.shadowRoot.querySelector(hg)),jw=e=>{for(const t of[e,...e.querySelectorAll("*")])(t.matches(hg)||r1(t))&&(t.setAttribute("tabindex","-1"),yy.add(t))},a1=".focus-target[tabindex]",l1=e=>(e.matches(hg)||yy.has(e)||e.matches(a1))&&!e.closest('[aria-hidden="true"]'),Hw=e=>{jw(e);const t=[e,...e.querySelectorAll("*")].filter(n=>n.localName.includes("-"));if(t.length){const n=t.map(i=>i.updateComplete??Promise.resolve());Promise.all(n).then(()=>{e.isConnected&&jw(e)})}},mi=e=>{const t=[...e.querySelectorAll("slot")].flatMap(i=>i.assignedElements({flatten:!0})),n=[];for(const i of[e,...t]){const s=i===e?i.querySelectorAll("*"):[i,...i.querySelectorAll("*")];for(const a of s)(a instanceof HTMLElement||a instanceof SVGElement)&&l1(a)&&n.push(a)}return n},zh=e=>{const t=mi(e)[0];return t?.focus(),!!t},c1=(e,t,n)=>{const i=mi(e);if(i.length<2)return!1;const s=i.findIndex(c=>c===t||c.contains(t)||c.shadowRoot?.contains(t));return i[(s+(n?-1:1)+i.length)%i.length].focus(),!0},h1=e=>e==="single"||e==="multiple"?e:"none",Cy=Symbol("not-data"),_y=Symbol("not-loaded"),u1=e=>e==null||e==="",d1=async(e,t,n,i,s)=>{s?.throwIfAborted();const a=lg();let c=0,h=0,u=0,f=!0;for(const g of e){const v=[];for(const[_,E]of g.columns)for(let $=_;$<=E;$++){const z=n($);z&&v.push(z)}const y=Math.max(1,Math.ceil(v.length/8));for(let _=g.top;_<=g.bottom;_++){for(let $=0;$<y;$++){const z=a.tick();z&&(await z,s?.throwIfAborted())}s?.throwIfAborted();const E=t(_);if(E!==Cy){if(E===_y){f=!1;continue}for(const $ of v){const z=i(E,$);u1(z)||(c++,typeof z=="number"&&Number.isFinite(z)?(h++,u+=z):typeof z=="bigint"&&(h++,u+=Number(z)))}}}}return Object.freeze({count:c,numericCount:h,sum:h?u:null,avg:h?u/h:null,complete:f})},p1="input, textarea, select, [role=textbox], [role=combobox], [role=spinbutton], [role=searchbox]",Uw=e=>!!e&&!e.isCollapsed&&e.toString()!=="",ug=e=>{if(Uw(e.getSelection?.()))return!0;const t=e.ownerDocument.getSelection(),n=i=>!!i&&(i===e.host||e.contains(i)||e.host.contains(i));return Uw(t)&&(n(t.anchorNode)||n(t.focusNode))},f1=(e,t)=>{for(const n of e){if(n===t)return!1;if(n instanceof HTMLElement&&(n.isContentEditable||n.matches(p1)))return!0}return!1},Ay=(e,t,n)=>{if(e.type==="copy"&&!e.clipboardData)return!1;const i=e.composedPath();return i.includes(t)&&!f1(i,t)&&!ug(n)},m1=(e,t)=>{e.setData("text/plain",t.text),t.html&&e.setData("text/html",t.html)};const xn=dr(class extends Ta{constructor(e){if(super(e),e.type!==Sn.PROPERTY&&e.type!==Sn.ATTRIBUTE&&e.type!==Sn.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Zx(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Xt||t===P)return t;const n=e.element,i=e.name;if(e.type===Sn.PROPERTY){if(t===n[i])return Xt}else if(e.type===Sn.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(i))return Xt}else if(e.type===Sn.ATTRIBUTE&&n.getAttribute(i)===t+"")return Xt;return Qm(e),t}});const Vw=(e,t,n)=>{const i=new Map;for(let s=t;s<=n;s++)i.set(e[s],s);return i},g1=dr(class extends Ta{constructor(e){if(super(e),e.type!==Sn.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let i;n===void 0?n=t:t!==void 0&&(i=t);const s=[],a=[];let c=0;for(const h of e)s[c]=i?i(h,c):c,a[c]=n(h,c),c++;return{values:a,keys:s}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,i]){const s=Xx(e),{values:a,keys:c}=this.dt(t,n,i);if(!Array.isArray(s))return this.ut=c,a;const h=this.ut??=[],u=[];let f,g,v=0,y=s.length-1,_=0,E=a.length-1;for(;v<=y&&_<=E;)if(s[v]===null)v++;else if(s[y]===null)y--;else if(h[v]===c[_])u[_]=ko(s[v],a[_]),v++,_++;else if(h[y]===c[E])u[E]=ko(s[y],a[E]),y--,E--;else if(h[v]===c[E])u[E]=ko(s[v],a[E]),Ss(e,u[E+1],s[v]),v++,E--;else if(h[y]===c[_])u[_]=ko(s[y],a[_]),Ss(e,s[v],s[y]),y--,_++;else if(f===void 0&&(f=Vw(c,_,E),g=Vw(h,v,y)),f.has(h[v]))if(f.has(h[y])){const $=g.get(c[_]),z=$!==void 0?s[$]:null;if(z===null){const D=Ss(e,s[v]);ko(D,a[_]),u[_]=D}else u[_]=ko(z,a[_]),Ss(e,s[v],z),s[$]=null;_++}else Cl(s[y]),y--;else Cl(s[v]),v++;for(;_<=E;){const $=Ss(e,u[E+1]);ko($,a[_]),u[_++]=$}for(;v<=y;){const $=s[v++];$!==null&&Cl($)}return this.ut=c,Qm(e,u),Xt}});function v1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pl={exports:{}},b1=pl.exports,Zw;function w1(){return Zw||(Zw=1,(function(e,t){(function(n,i){e.exports=i()})(b1,(function(){function n(p,d){var m=Object.keys(p);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(p);d&&(b=b.filter((function(x){return Object.getOwnPropertyDescriptor(p,x).enumerable}))),m.push.apply(m,b)}return m}function i(p){for(var d=1;d<arguments.length;d++){var m=arguments[d]!=null?arguments[d]:{};d%2?n(Object(m),!0).forEach((function(b){u(p,b,m[b])})):Object.getOwnPropertyDescriptors?Object.defineProperties(p,Object.getOwnPropertyDescriptors(m)):n(Object(m)).forEach((function(b){Object.defineProperty(p,b,Object.getOwnPropertyDescriptor(m,b))}))}return p}function s(p){return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},s(p)}function a(p,d){if(!(p instanceof d))throw new TypeError("Cannot call a class as a function")}function c(p,d){for(var m=0;m<d.length;m++){var b=d[m];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(p,$(b.key),b)}}function h(p,d,m){return d&&c(p.prototype,d),Object.defineProperty(p,"prototype",{writable:!1}),p}function u(p,d,m){return(d=$(d))in p?Object.defineProperty(p,d,{value:m,enumerable:!0,configurable:!0,writable:!0}):p[d]=m,p}function f(p,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function");p.prototype=Object.create(d&&d.prototype,{constructor:{value:p,writable:!0,configurable:!0}}),Object.defineProperty(p,"prototype",{writable:!1}),d&&v(p,d)}function g(p){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(d){return d.__proto__||Object.getPrototypeOf(d)},g(p)}function v(p,d){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(m,b){return m.__proto__=b,m},v(p,d)}function y(p){if(p===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p}function _(p){var d=(function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})();return function(){var m,b=g(p);if(d){var x=g(this).constructor;m=Reflect.construct(b,arguments,x)}else m=b.apply(this,arguments);return(function(C,A){if(A&&(typeof A=="object"||typeof A=="function"))return A;if(A!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return y(C)})(this,m)}}function E(){return E=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(p,d,m){var b=(function(C,A){for(;!Object.prototype.hasOwnProperty.call(C,A)&&(C=g(C))!==null;);return C})(p,d);if(b){var x=Object.getOwnPropertyDescriptor(b,d);return x.get?x.get.call(arguments.length<3?p:m):x.value}},E.apply(this,arguments)}function $(p){var d=(function(m,b){if(typeof m!="object"||m===null)return m;var x=m[Symbol.toPrimitive];if(x!==void 0){var C=x.call(m,b);if(typeof C!="object")return C;throw new TypeError("@@toPrimitive must return a primitive value.")}return(b==="string"?String:Number)(m)})(p,"string");return typeof d=="symbol"?d:d+""}var z=function(p){return!(!p||!p.Window)&&p instanceof p.Window},D=void 0,I=void 0;function j(p){D=p;var d=p.document.createTextNode("");d.ownerDocument!==p.document&&typeof p.wrap=="function"&&p.wrap(d)===d&&(p=p.wrap(p)),I=p}function X(p){return z(p)?p:(p.ownerDocument||p).defaultView||I.window}typeof window<"u"&&window&&j(window);var Q=function(p){return!!p&&s(p)==="object"},ge=function(p){return typeof p=="function"},F={window:function(p){return p===I||z(p)},docFrag:function(p){return Q(p)&&p.nodeType===11},object:Q,func:ge,number:function(p){return typeof p=="number"},bool:function(p){return typeof p=="boolean"},string:function(p){return typeof p=="string"},element:function(p){if(!p||s(p)!=="object")return!1;var d=X(p)||I;return/object|function/.test(typeof Element>"u"?"undefined":s(Element))?p instanceof Element||p instanceof d.Element:p.nodeType===1&&typeof p.nodeName=="string"},plainObject:function(p){return Q(p)&&!!p.constructor&&/function Object\b/.test(p.constructor.toString())},array:function(p){return Q(p)&&p.length!==void 0&&ge(p.splice)}};function ee(p){var d=p.interaction;if(d.prepared.name==="drag"){var m=d.prepared.axis;m==="x"?(d.coords.cur.page.y=d.coords.start.page.y,d.coords.cur.client.y=d.coords.start.client.y,d.coords.velocity.client.y=0,d.coords.velocity.page.y=0):m==="y"&&(d.coords.cur.page.x=d.coords.start.page.x,d.coords.cur.client.x=d.coords.start.client.x,d.coords.velocity.client.x=0,d.coords.velocity.page.x=0)}}function We(p){var d=p.iEvent,m=p.interaction;if(m.prepared.name==="drag"){var b=m.prepared.axis;if(b==="x"||b==="y"){var x=b==="x"?"y":"x";d.page[x]=m.coords.start.page[x],d.client[x]=m.coords.start.client[x],d.delta[x]=0}}}var ue={id:"actions/drag",install:function(p){var d=p.actions,m=p.Interactable,b=p.defaults;m.prototype.draggable=ue.draggable,d.map.drag=ue,d.methodDict.drag="draggable",b.actions.drag=ue.defaults},listeners:{"interactions:before-action-move":ee,"interactions:action-resume":ee,"interactions:action-move":We,"auto-start:check":function(p){var d=p.interaction,m=p.interactable,b=p.buttons,x=m.options.drag;if(x&&x.enabled&&(!d.pointerIsDown||!/mouse|pointer/.test(d.pointerType)||(b&m.options.drag.mouseButtons)!=0))return p.action={name:"drag",axis:x.lockAxis==="start"?x.startAxis:x.lockAxis},!1}},draggable:function(p){return F.object(p)?(this.options.drag.enabled=p.enabled!==!1,this.setPerAction("drag",p),this.setOnEvents("drag",p),/^(xy|x|y|start)$/.test(p.lockAxis)&&(this.options.drag.lockAxis=p.lockAxis),/^(xy|x|y)$/.test(p.startAxis)&&(this.options.drag.startAxis=p.startAxis),this):F.bool(p)?(this.options.drag.enabled=p,this):this.options.drag},beforeMove:ee,move:We,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"},filterEventType:function(p){return p.search("drag")===0}},mt=ue,Pe={init:function(p){var d=p;Pe.document=d.document,Pe.DocumentFragment=d.DocumentFragment||Se,Pe.SVGElement=d.SVGElement||Se,Pe.SVGSVGElement=d.SVGSVGElement||Se,Pe.SVGElementInstance=d.SVGElementInstance||Se,Pe.Element=d.Element||Se,Pe.HTMLElement=d.HTMLElement||Pe.Element,Pe.Event=d.Event,Pe.Touch=d.Touch||Se,Pe.PointerEvent=d.PointerEvent||d.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function Se(){}var ce=Pe,Ee={init:function(p){var d=ce.Element,m=p.navigator||{};Ee.supportsTouch="ontouchstart"in p||F.func(p.DocumentTouch)&&ce.document instanceof p.DocumentTouch,Ee.supportsPointerEvent=m.pointerEnabled!==!1&&!!ce.PointerEvent,Ee.isIOS=/iP(hone|od|ad)/.test(m.platform),Ee.isIOS7=/iP(hone|od|ad)/.test(m.platform)&&/OS 7[^\d]/.test(m.appVersion),Ee.isIe9=/MSIE 9/.test(m.userAgent),Ee.isOperaMobile=m.appName==="Opera"&&Ee.supportsTouch&&/Presto/.test(m.userAgent),Ee.prefixedMatchesSelector="matches"in d.prototype?"matches":"webkitMatchesSelector"in d.prototype?"webkitMatchesSelector":"mozMatchesSelector"in d.prototype?"mozMatchesSelector":"oMatchesSelector"in d.prototype?"oMatchesSelector":"msMatchesSelector",Ee.pEventTypes=Ee.supportsPointerEvent?ce.PointerEvent===p.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,Ee.wheelEvent=ce.document&&"onmousewheel"in ce.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null},Ve=Ee;function Ze(p,d){if(p.contains)return p.contains(d);for(;d;){if(d===p)return!0;d=d.parentNode}return!1}function Ot(p,d){for(;F.element(p);){if(li(p,d))return p;p=An(p)}return null}function An(p){var d=p.parentNode;if(F.docFrag(d)){for(;(d=d.host)&&F.docFrag(d););return d}return d}function li(p,d){return I!==D&&(d=d.replace(/\/deep\//g," ")),p[Ve.prefixedMatchesSelector](d)}var jp=function(p){return p.parentNode||p.host};function Mb(p,d){for(var m,b=[],x=p;(m=jp(x))&&x!==d&&m!==x.ownerDocument;)b.unshift(x),x=m;return b}function Hp(p,d,m){for(;F.element(p);){if(li(p,d))return!0;if((p=An(p))===m)return li(p,d)}return!1}function Rb(p){return p.correspondingUseElement||p}function Up(p){var d=p instanceof ce.SVGElement?p.getBoundingClientRect():p.getClientRects()[0];return d&&{left:d.left,right:d.right,top:d.top,bottom:d.bottom,width:d.width||d.right-d.left,height:d.height||d.bottom-d.top}}function Vp(p){var d,m=Up(p);if(!Ve.isIOS7&&m){var b={x:(d=(d=X(p))||I).scrollX||d.document.documentElement.scrollLeft,y:d.scrollY||d.document.documentElement.scrollTop};m.left+=b.x,m.right+=b.x,m.top+=b.y,m.bottom+=b.y}return m}function $b(p){for(var d=[];p;)d.push(p),p=An(p);return d}function Tb(p){return!!F.string(p)&&(ce.document.querySelector(p),!0)}function le(p,d){for(var m in d)p[m]=d[m];return p}function zb(p,d,m){return p==="parent"?An(m):p==="self"?d.getRect(m):Ot(m,p)}function Ya(p,d,m,b){var x=p;return F.string(x)?x=zb(x,d,m):F.func(x)&&(x=x.apply(void 0,b)),F.element(x)&&(x=Vp(x)),x}function gh(p){return p&&{x:"x"in p?p.x:p.left,y:"y"in p?p.y:p.top}}function Zp(p){return!p||"x"in p&&"y"in p||((p=le({},p)).x=p.left||0,p.y=p.top||0,p.width=p.width||(p.right||0)-p.x,p.height=p.height||(p.bottom||0)-p.y),p}function vh(p,d,m){p.left&&(d.left+=m.x),p.right&&(d.right+=m.x),p.top&&(d.top+=m.y),p.bottom&&(d.bottom+=m.y),d.width=d.right-d.left,d.height=d.bottom-d.top}function Ja(p,d,m){var b=m&&p.options[m];return gh(Ya(b&&b.origin||p.options.origin,p,d,[p&&d]))||{x:0,y:0}}function ws(p,d){var m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(M){return!0},b=arguments.length>3?arguments[3]:void 0;if(b=b||{},F.string(p)&&p.search(" ")!==-1&&(p=Lb(p)),F.array(p))return p.forEach((function(M){return ws(M,d,m,b)})),b;if(F.object(p)&&(d=p,p=""),F.func(d)&&m(p))b[p]=b[p]||[],b[p].push(d);else if(F.array(d))for(var x=0,C=d;x<C.length;x++){var A=C[x];ws(p,A,m,b)}else if(F.object(d))for(var k in d)ws(Lb(k).map((function(M){return"".concat(p).concat(M)})),d[k],m,b);return b}function Lb(p){return p.trim().split(/ +/)}var Qa=function(p,d){return Math.sqrt(p*p+d*d)},hk=["webkit","moz"];function bh(p,d){p.__set||(p.__set={});var m=function(x){if(hk.some((function(C){return x.indexOf(C)===0})))return 1;typeof p[x]!="function"&&x!=="__set"&&Object.defineProperty(p,x,{get:function(){return x in p.__set?p.__set[x]:p.__set[x]=d[x]},set:function(C){p.__set[x]=C},configurable:!0})};for(var b in d)m(b);return p}function wh(p,d){p.page=p.page||{},p.page.x=d.page.x,p.page.y=d.page.y,p.client=p.client||{},p.client.x=d.client.x,p.client.y=d.client.y,p.timeStamp=d.timeStamp}function Ob(p){p.page.x=0,p.page.y=0,p.client.x=0,p.client.y=0}function Db(p){return p instanceof ce.Event||p instanceof ce.Touch}function xh(p,d,m){return p=p||"page",(m=m||{}).x=d[p+"X"],m.y=d[p+"Y"],m}function Pb(p,d){return d=d||{x:0,y:0},Ve.isOperaMobile&&Db(p)?(xh("screen",p,d),d.x+=window.scrollX,d.y+=window.scrollY):xh("page",p,d),d}function el(p){return F.number(p.pointerId)?p.pointerId:p.identifier}function uk(p,d,m){var b=d.length>1?Ib(d):d[0];Pb(b,p.page),(function(x,C){C=C||{},Ve.isOperaMobile&&Db(x)?xh("screen",x,C):xh("client",x,C)})(b,p.client),p.timeStamp=m}function Xp(p){var d=[];return F.array(p)?(d[0]=p[0],d[1]=p[1]):p.type==="touchend"?p.touches.length===1?(d[0]=p.touches[0],d[1]=p.changedTouches[0]):p.touches.length===0&&(d[0]=p.changedTouches[0],d[1]=p.changedTouches[1]):(d[0]=p.touches[0],d[1]=p.touches[1]),d}function Ib(p){for(var d={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},m=0;m<p.length;m++){var b=p[m];for(var x in d)d[x]+=b[x]}for(var C in d)d[C]/=p.length;return d}function Yp(p){if(!p.length)return null;var d=Xp(p),m=Math.min(d[0].pageX,d[1].pageX),b=Math.min(d[0].pageY,d[1].pageY),x=Math.max(d[0].pageX,d[1].pageX),C=Math.max(d[0].pageY,d[1].pageY);return{x:m,y:b,left:m,top:b,right:x,bottom:C,width:x-m,height:C-b}}function Jp(p,d){var m=d+"X",b=d+"Y",x=Xp(p),C=x[0][m]-x[1][m],A=x[0][b]-x[1][b];return Qa(C,A)}function Qp(p,d){var m=d+"X",b=d+"Y",x=Xp(p),C=x[1][m]-x[0][m],A=x[1][b]-x[0][b];return 180*Math.atan2(A,C)/Math.PI}function Fb(p){return F.string(p.pointerType)?p.pointerType:F.number(p.pointerType)?[void 0,void 0,"touch","pen","mouse"][p.pointerType]:/touch/.test(p.type||"")||p instanceof ce.Touch?"touch":"mouse"}function Nb(p){var d=F.func(p.composedPath)?p.composedPath():p.path;return[Rb(d?d[0]:p.target),Rb(p.currentTarget)]}var yh=(function(){function p(d){a(this,p),this.immediatePropagationStopped=!1,this.propagationStopped=!1,this._interaction=d}return h(p,[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),p})();Object.defineProperty(yh.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var Wb=function(p,d){for(var m=0;m<d.length;m++){var b=d[m];p.push(b)}return p},Bb=function(p){return Wb([],p)},tl=function(p,d){for(var m=0;m<p.length;m++)if(d(p[m],m,p))return m;return-1},nl=function(p,d){return p[tl(p,d)]},br=(function(p){f(m,p);var d=_(m);function m(b,x,C){var A;a(this,m),(A=d.call(this,x._interaction)).dropzone=void 0,A.dragEvent=void 0,A.relatedTarget=void 0,A.draggable=void 0,A.propagationStopped=!1,A.immediatePropagationStopped=!1;var k=C==="dragleave"?b.prev:b.cur,M=k.element,T=k.dropzone;return A.type=C,A.target=M,A.currentTarget=M,A.dropzone=T,A.dragEvent=x,A.relatedTarget=x.target,A.draggable=x.interactable,A.timeStamp=x.timeStamp,A}return h(m,[{key:"reject",value:function(){var b=this,x=this._interaction.dropState;if(this.type==="dropactivate"||this.dropzone&&x.cur.dropzone===this.dropzone&&x.cur.element===this.target)if(x.prev.dropzone=this.dropzone,x.prev.element=this.target,x.rejected=!0,x.events.enter=null,this.stopImmediatePropagation(),this.type==="dropactivate"){var C=x.activeDrops,A=tl(C,(function(M){var T=M.dropzone,R=M.element;return T===b.dropzone&&R===b.target}));x.activeDrops.splice(A,1);var k=new m(x,this.dragEvent,"dropdeactivate");k.dropzone=this.dropzone,k.target=this.target,this.dropzone.fire(k)}else this.dropzone.fire(new m(x,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),m})(yh);function Gb(p,d){for(var m=0,b=p.slice();m<b.length;m++){var x=b[m],C=x.dropzone,A=x.element;d.dropzone=C,d.target=A,C.fire(d),d.propagationStopped=d.immediatePropagationStopped=!1}}function ef(p,d){for(var m=(function(C,A){for(var k=[],M=0,T=C.interactables.list;M<T.length;M++){var R=T[M];if(R.options.drop.enabled){var O=R.options.drop.accept;if(!(F.element(O)&&O!==A||F.string(O)&&!li(A,O)||F.func(O)&&!O({dropzone:R,draggableElement:A})))for(var N=0,q=R.getAllElements();N<q.length;N++){var K=q[N];K!==A&&k.push({dropzone:R,element:K,rect:R.getRect(K)})}}}return k})(p,d),b=0;b<m.length;b++){var x=m[b];x.rect=x.dropzone.getRect(x.element)}return m}function Kb(p,d,m){for(var b=p.dropState,x=p.interactable,C=p.element,A=[],k=0,M=b.activeDrops;k<M.length;k++){var T=M[k],R=T.dropzone,O=T.element,N=T.rect,q=R.dropCheck(d,m,x,C,O,N);A.push(q?O:null)}var K=(function(H){for(var J,Y,re,we=[],Te=0;Te<H.length;Te++){var de=H[Te],ye=H[J];if(de&&Te!==J)if(ye){var Ut=jp(de),nt=jp(ye);if(Ut!==de.ownerDocument)if(nt!==de.ownerDocument)if(Ut!==nt){we=we.length?we:Mb(ye);var fn=void 0;if(ye instanceof ce.HTMLElement&&de instanceof ce.SVGElement&&!(de instanceof ce.SVGSVGElement)){if(de===nt)continue;fn=de.ownerSVGElement}else fn=de;for(var jn=Mb(fn,ye.ownerDocument),qi=0;jn[qi]&&jn[qi]===we[qi];)qi++;var $h=[jn[qi-1],jn[qi],we[qi]];if($h[0])for(var ll=$h[0].lastChild;ll;){if(ll===$h[1]){J=Te,we=jn;break}if(ll===$h[2])break;ll=ll.previousSibling}}else re=ye,(parseInt(X(Y=de).getComputedStyle(Y).zIndex,10)||0)>=(parseInt(X(re).getComputedStyle(re).zIndex,10)||0)&&(J=Te);else J=Te}else J=Te}return J})(A);return b.activeDrops[K]||null}function tf(p,d,m){var b=p.dropState,x={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return m.type==="dragstart"&&(x.activate=new br(b,m,"dropactivate"),x.activate.target=null,x.activate.dropzone=null),m.type==="dragend"&&(x.deactivate=new br(b,m,"dropdeactivate"),x.deactivate.target=null,x.deactivate.dropzone=null),b.rejected||(b.cur.element!==b.prev.element&&(b.prev.dropzone&&(x.leave=new br(b,m,"dragleave"),m.dragLeave=x.leave.target=b.prev.element,m.prevDropzone=x.leave.dropzone=b.prev.dropzone),b.cur.dropzone&&(x.enter=new br(b,m,"dragenter"),m.dragEnter=b.cur.element,m.dropzone=b.cur.dropzone)),m.type==="dragend"&&b.cur.dropzone&&(x.drop=new br(b,m,"drop"),m.dropzone=b.cur.dropzone,m.relatedTarget=b.cur.element),m.type==="dragmove"&&b.cur.dropzone&&(x.move=new br(b,m,"dropmove"),m.dropzone=b.cur.dropzone)),x}function nf(p,d){var m=p.dropState,b=m.activeDrops,x=m.cur,C=m.prev;d.leave&&C.dropzone.fire(d.leave),d.enter&&x.dropzone.fire(d.enter),d.move&&x.dropzone.fire(d.move),d.drop&&x.dropzone.fire(d.drop),d.deactivate&&Gb(b,d.deactivate),m.prev.dropzone=x.dropzone,m.prev.element=x.element}function qb(p,d){var m=p.interaction,b=p.iEvent,x=p.event;if(b.type==="dragmove"||b.type==="dragend"){var C=m.dropState;d.dynamicDrop&&(C.activeDrops=ef(d,m.element));var A=b,k=Kb(m,A,x);C.rejected=C.rejected&&!!k&&k.dropzone===C.cur.dropzone&&k.element===C.cur.element,C.cur.dropzone=k&&k.dropzone,C.cur.element=k&&k.element,C.events=tf(m,0,A)}}var jb={id:"actions/drop",install:function(p){var d=p.actions,m=p.interactStatic,b=p.Interactable,x=p.defaults;p.usePlugin(mt),b.prototype.dropzone=function(C){return(function(A,k){if(F.object(k)){if(A.options.drop.enabled=k.enabled!==!1,k.listeners){var M=ws(k.listeners),T=Object.keys(M).reduce((function(O,N){return O[/^(enter|leave)/.test(N)?"drag".concat(N):/^(activate|deactivate|move)/.test(N)?"drop".concat(N):N]=M[N],O}),{}),R=A.options.drop.listeners;R&&A.off(R),A.on(T),A.options.drop.listeners=T}return F.func(k.ondrop)&&A.on("drop",k.ondrop),F.func(k.ondropactivate)&&A.on("dropactivate",k.ondropactivate),F.func(k.ondropdeactivate)&&A.on("dropdeactivate",k.ondropdeactivate),F.func(k.ondragenter)&&A.on("dragenter",k.ondragenter),F.func(k.ondragleave)&&A.on("dragleave",k.ondragleave),F.func(k.ondropmove)&&A.on("dropmove",k.ondropmove),/^(pointer|center)$/.test(k.overlap)?A.options.drop.overlap=k.overlap:F.number(k.overlap)&&(A.options.drop.overlap=Math.max(Math.min(1,k.overlap),0)),"accept"in k&&(A.options.drop.accept=k.accept),"checker"in k&&(A.options.drop.checker=k.checker),A}return F.bool(k)?(A.options.drop.enabled=k,A):A.options.drop})(this,C)},b.prototype.dropCheck=function(C,A,k,M,T,R){return(function(O,N,q,K,H,J,Y){var re=!1;if(!(Y=Y||O.getRect(J)))return!!O.options.drop.checker&&O.options.drop.checker(N,q,re,O,J,K,H);var we=O.options.drop.overlap;if(we==="pointer"){var Te=Ja(K,H,"drag"),de=Pb(N);de.x+=Te.x,de.y+=Te.y;var ye=de.x>Y.left&&de.x<Y.right,Ut=de.y>Y.top&&de.y<Y.bottom;re=ye&&Ut}var nt=K.getRect(H);if(nt&&we==="center"){var fn=nt.left+nt.width/2,jn=nt.top+nt.height/2;re=fn>=Y.left&&fn<=Y.right&&jn>=Y.top&&jn<=Y.bottom}return nt&&F.number(we)&&(re=Math.max(0,Math.min(Y.right,nt.right)-Math.max(Y.left,nt.left))*Math.max(0,Math.min(Y.bottom,nt.bottom)-Math.max(Y.top,nt.top))/(nt.width*nt.height)>=we),O.options.drop.checker&&(re=O.options.drop.checker(N,q,re,O,J,K,H)),re})(this,C,A,k,M,T,R)},m.dynamicDrop=function(C){return F.bool(C)?(p.dynamicDrop=C,m):p.dynamicDrop},le(d.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),d.methodDict.drop="dropzone",p.dynamicDrop=!1,x.actions.drop=jb.defaults},listeners:{"interactions:before-action-start":function(p){var d=p.interaction;d.prepared.name==="drag"&&(d.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(p,d){var m=p.interaction,b=(p.event,p.iEvent);if(m.prepared.name==="drag"){var x=m.dropState;x.activeDrops=[],x.events={},x.activeDrops=ef(d,m.element),x.events=tf(m,0,b),x.events.activate&&(Gb(x.activeDrops,x.events.activate),d.fire("actions/drop:start",{interaction:m,dragEvent:b}))}},"interactions:action-move":qb,"interactions:after-action-move":function(p,d){var m=p.interaction,b=p.iEvent;if(m.prepared.name==="drag"){var x=m.dropState;nf(m,x.events),d.fire("actions/drop:move",{interaction:m,dragEvent:b}),x.events={}}},"interactions:action-end":function(p,d){if(p.interaction.prepared.name==="drag"){var m=p.interaction,b=p.iEvent;qb(p,d),nf(m,m.dropState.events),d.fire("actions/drop:end",{interaction:m,dragEvent:b})}},"interactions:stop":function(p){var d=p.interaction;if(d.prepared.name==="drag"){var m=d.dropState;m&&(m.activeDrops=null,m.events=null,m.cur.dropzone=null,m.cur.element=null,m.prev.dropzone=null,m.prev.element=null,m.rejected=!1)}}},getActiveDrops:ef,getDrop:Kb,getDropEvents:tf,fireDropEvents:nf,filterEventType:function(p){return p.search("drag")===0||p.search("drop")===0},defaults:{enabled:!1,accept:null,overlap:"pointer"}},dk=jb;function of(p){var d=p.interaction,m=p.iEvent,b=p.phase;if(d.prepared.name==="gesture"){var x=d.pointers.map((function(T){return T.pointer})),C=b==="start",A=b==="end",k=d.interactable.options.deltaSource;if(m.touches=[x[0],x[1]],C)m.distance=Jp(x,k),m.box=Yp(x),m.scale=1,m.ds=0,m.angle=Qp(x,k),m.da=0,d.gesture.startDistance=m.distance,d.gesture.startAngle=m.angle;else if(A||d.pointers.length<2){var M=d.prevEvent;m.distance=M.distance,m.box=M.box,m.scale=M.scale,m.ds=0,m.angle=M.angle,m.da=0}else m.distance=Jp(x,k),m.box=Yp(x),m.scale=m.distance/d.gesture.startDistance,m.angle=Qp(x,k),m.ds=m.scale-d.gesture.scale,m.da=m.angle-d.gesture.angle;d.gesture.distance=m.distance,d.gesture.angle=m.angle,F.number(m.scale)&&m.scale!==1/0&&!isNaN(m.scale)&&(d.gesture.scale=m.scale)}}var sf={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(p){var d=p.actions,m=p.Interactable,b=p.defaults;m.prototype.gesturable=function(x){return F.object(x)?(this.options.gesture.enabled=x.enabled!==!1,this.setPerAction("gesture",x),this.setOnEvents("gesture",x),this):F.bool(x)?(this.options.gesture.enabled=x,this):this.options.gesture},d.map.gesture=sf,d.methodDict.gesture="gesturable",b.actions.gesture=sf.defaults},listeners:{"interactions:action-start":of,"interactions:action-move":of,"interactions:action-end":of,"interactions:new":function(p){p.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(p){if(!(p.interaction.pointers.length<2)){var d=p.interactable.options.gesture;if(d&&d.enabled)return p.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""},filterEventType:function(p){return p.search("gesture")===0}},pk=sf;function fk(p,d,m,b,x,C,A){if(!d)return!1;if(d===!0){var k=F.number(C.width)?C.width:C.right-C.left,M=F.number(C.height)?C.height:C.bottom-C.top;if(A=Math.min(A,Math.abs((p==="left"||p==="right"?k:M)/2)),k<0&&(p==="left"?p="right":p==="right"&&(p="left")),M<0&&(p==="top"?p="bottom":p==="bottom"&&(p="top")),p==="left"){var T=k>=0?C.left:C.right;return m.x<T+A}if(p==="top"){var R=M>=0?C.top:C.bottom;return m.y<R+A}if(p==="right")return m.x>(k>=0?C.right:C.left)-A;if(p==="bottom")return m.y>(M>=0?C.bottom:C.top)-A}return!!F.element(b)&&(F.element(d)?d===b:Hp(b,d,x))}function Hb(p){var d=p.iEvent,m=p.interaction;if(m.prepared.name==="resize"&&m.resizeAxes){var b=d;m.interactable.options.resize.square?(m.resizeAxes==="y"?b.delta.x=b.delta.y:b.delta.y=b.delta.x,b.axes="xy"):(b.axes=m.resizeAxes,m.resizeAxes==="x"?b.delta.y=0:m.resizeAxes==="y"&&(b.delta.x=0))}}var Gi,xs,Ki={id:"actions/resize",before:["actions/drag"],install:function(p){var d=p.actions,m=p.browser,b=p.Interactable,x=p.defaults;Ki.cursors=(function(C){return C.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}})(m),Ki.defaultMargin=m.supportsTouch||m.supportsPointerEvent?20:10,b.prototype.resizable=function(C){return(function(A,k,M){return F.object(k)?(A.options.resize.enabled=k.enabled!==!1,A.setPerAction("resize",k),A.setOnEvents("resize",k),F.string(k.axis)&&/^x$|^y$|^xy$/.test(k.axis)?A.options.resize.axis=k.axis:k.axis===null&&(A.options.resize.axis=M.defaults.actions.resize.axis),F.bool(k.preserveAspectRatio)?A.options.resize.preserveAspectRatio=k.preserveAspectRatio:F.bool(k.square)&&(A.options.resize.square=k.square),A):F.bool(k)?(A.options.resize.enabled=k,A):A.options.resize})(this,C,p)},d.map.resize=Ki,d.methodDict.resize="resizable",x.actions.resize=Ki.defaults},listeners:{"interactions:new":function(p){p.interaction.resizeAxes="xy"},"interactions:action-start":function(p){(function(d){var m=d.iEvent,b=d.interaction;if(b.prepared.name==="resize"&&b.prepared.edges){var x=m,C=b.rect;b._rects={start:le({},C),corrected:le({},C),previous:le({},C),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},x.edges=b.prepared.edges,x.rect=b._rects.corrected,x.deltaRect=b._rects.delta}})(p),Hb(p)},"interactions:action-move":function(p){(function(d){var m=d.iEvent,b=d.interaction;if(b.prepared.name==="resize"&&b.prepared.edges){var x=m,C=b.interactable.options.resize.invert,A=C==="reposition"||C==="negate",k=b.rect,M=b._rects,T=M.start,R=M.corrected,O=M.delta,N=M.previous;if(le(N,R),A){if(le(R,k),C==="reposition"){if(R.top>R.bottom){var q=R.top;R.top=R.bottom,R.bottom=q}if(R.left>R.right){var K=R.left;R.left=R.right,R.right=K}}}else R.top=Math.min(k.top,T.bottom),R.bottom=Math.max(k.bottom,T.top),R.left=Math.min(k.left,T.right),R.right=Math.max(k.right,T.left);for(var H in R.width=R.right-R.left,R.height=R.bottom-R.top,R)O[H]=R[H]-N[H];x.edges=b.prepared.edges,x.rect=R,x.deltaRect=O}})(p),Hb(p)},"interactions:action-end":function(p){var d=p.iEvent,m=p.interaction;if(m.prepared.name==="resize"&&m.prepared.edges){var b=d;b.edges=m.prepared.edges,b.rect=m._rects.corrected,b.deltaRect=m._rects.delta}},"auto-start:check":function(p){var d=p.interaction,m=p.interactable,b=p.element,x=p.rect,C=p.buttons;if(x){var A=le({},d.coords.cur.page),k=m.options.resize;if(k&&k.enabled&&(!d.pointerIsDown||!/mouse|pointer/.test(d.pointerType)||(C&k.mouseButtons)!=0)){if(F.object(k.edges)){var M={left:!1,right:!1,top:!1,bottom:!1};for(var T in M)M[T]=fk(T,k.edges[T],A,d._latestPointer.eventTarget,b,x,k.margin||Ki.defaultMargin);M.left=M.left&&!M.right,M.top=M.top&&!M.bottom,(M.left||M.right||M.top||M.bottom)&&(p.action={name:"resize",edges:M})}else{var R=k.axis!=="y"&&A.x>x.right-Ki.defaultMargin,O=k.axis!=="x"&&A.y>x.bottom-Ki.defaultMargin;(R||O)&&(p.action={name:"resize",axes:(R?"x":"")+(O?"y":"")})}return!p.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(p){var d=p.edges,m=p.axis,b=p.name,x=Ki.cursors,C=null;if(m)C=x[b+m];else if(d){for(var A="",k=0,M=["top","bottom","left","right"];k<M.length;k++){var T=M[k];d[T]&&(A+=T)}C=x[A]}return C},filterEventType:function(p){return p.search("resize")===0},defaultMargin:null},mk=Ki,gk={id:"actions",install:function(p){p.usePlugin(pk),p.usePlugin(mk),p.usePlugin(mt),p.usePlugin(dk)}},Ub=0,xo={request:function(p){return Gi(p)},cancel:function(p){return xs(p)},init:function(p){if(Gi=p.requestAnimationFrame,xs=p.cancelAnimationFrame,!Gi)for(var d=["ms","moz","webkit","o"],m=0;m<d.length;m++){var b=d[m];Gi=p["".concat(b,"RequestAnimationFrame")],xs=p["".concat(b,"CancelAnimationFrame")]||p["".concat(b,"CancelRequestAnimationFrame")]}Gi=Gi&&Gi.bind(p),xs=xs&&xs.bind(p),Gi||(Gi=function(x){var C=Date.now(),A=Math.max(0,16-(C-Ub)),k=p.setTimeout((function(){x(C+A)}),A);return Ub=C+A,k},xs=function(x){return clearTimeout(x)})}},me={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(p){me.isScrolling=!0,xo.cancel(me.i),p.autoScroll=me,me.interaction=p,me.prevTime=me.now(),me.i=xo.request(me.scroll)},stop:function(){me.isScrolling=!1,me.interaction&&(me.interaction.autoScroll=null),xo.cancel(me.i)},scroll:function(){var p=me.interaction,d=p.interactable,m=p.element,b=p.prepared.name,x=d.options[b].autoScroll,C=Vb(x.container,d,m),A=me.now(),k=(A-me.prevTime)/1e3,M=x.speed*k;if(M>=1){var T={x:me.x*M,y:me.y*M};if(T.x||T.y){var R=Zb(C);F.window(C)?C.scrollBy(T.x,T.y):C&&(C.scrollLeft+=T.x,C.scrollTop+=T.y);var O=Zb(C),N={x:O.x-R.x,y:O.y-R.y};(N.x||N.y)&&d.fire({type:"autoscroll",target:m,interactable:d,delta:N,interaction:p,container:C})}me.prevTime=A}me.isScrolling&&(xo.cancel(me.i),me.i=xo.request(me.scroll))},check:function(p,d){var m;return(m=p.options[d].autoScroll)==null?void 0:m.enabled},onInteractionMove:function(p){var d=p.interaction,m=p.pointer;if(d.interacting()&&me.check(d.interactable,d.prepared.name))if(d.simulation)me.x=me.y=0;else{var b,x,C,A,k=d.interactable,M=d.element,T=d.prepared.name,R=k.options[T].autoScroll,O=Vb(R.container,k,M);if(F.window(O))A=m.clientX<me.margin,b=m.clientY<me.margin,x=m.clientX>O.innerWidth-me.margin,C=m.clientY>O.innerHeight-me.margin;else{var N=Up(O);A=m.clientX<N.left+me.margin,b=m.clientY<N.top+me.margin,x=m.clientX>N.right-me.margin,C=m.clientY>N.bottom-me.margin}me.x=x?1:A?-1:0,me.y=C?1:b?-1:0,me.isScrolling||(me.margin=R.margin,me.speed=R.speed,me.start(d))}}};function Vb(p,d,m){return(F.string(p)?zb(p,d,m):p)||X(m)}function Zb(p){return F.window(p)&&(p=window.document.body),{x:p.scrollLeft,y:p.scrollTop}}var vk={id:"auto-scroll",install:function(p){var d=p.defaults,m=p.actions;p.autoScroll=me,me.now=function(){return p.now()},m.phaselessTypes.autoscroll=!0,d.perAction.autoScroll=me.defaults},listeners:{"interactions:new":function(p){p.interaction.autoScroll=null},"interactions:destroy":function(p){p.interaction.autoScroll=null,me.stop(),me.interaction&&(me.interaction=null)},"interactions:stop":me.stop,"interactions:action-move":function(p){return me.onInteractionMove(p)}}},bk=vk;function il(p,d){var m=!1;return function(){return m||(I.console.warn(d),m=!0),p.apply(this,arguments)}}function rf(p,d){return p.name=d.name,p.axis=d.axis,p.edges=d.edges,p}function wk(p){return F.bool(p)?(this.options.styleCursor=p,this):p===null?(delete this.options.styleCursor,this):this.options.styleCursor}function xk(p){return F.func(p)?(this.options.actionChecker=p,this):p===null?(delete this.options.actionChecker,this):this.options.actionChecker}var yk={id:"auto-start/interactableMethods",install:function(p){var d=p.Interactable;d.prototype.getAction=function(m,b,x,C){var A=(function(k,M,T,R,O){var N=k.getRect(R),q=M.buttons||{0:1,1:4,3:8,4:16}[M.button],K={action:null,interactable:k,interaction:T,element:R,rect:N,buttons:q};return O.fire("auto-start:check",K),K.action})(this,b,x,C,p);return this.options.actionChecker?this.options.actionChecker(m,b,A,this,C,x):A},d.prototype.ignoreFrom=il((function(m){return this._backCompatOption("ignoreFrom",m)}),"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),d.prototype.allowFrom=il((function(m){return this._backCompatOption("allowFrom",m)}),"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),d.prototype.actionChecker=xk,d.prototype.styleCursor=wk}};function Xb(p,d,m,b,x){return d.testIgnoreAllow(d.options[p.name],m,b)&&d.options[p.name].enabled&&Ch(d,m,p,x)?p:null}function Ck(p,d,m,b,x,C,A){for(var k=0,M=b.length;k<M;k++){var T=b[k],R=x[k],O=T.getAction(d,m,p,R);if(O){var N=Xb(O,T,R,C,A);if(N)return{action:N,interactable:T,element:R}}}return{action:null,interactable:null,element:null}}function Yb(p,d,m,b,x){var C=[],A=[],k=b;function M(R){C.push(R),A.push(k)}for(;F.element(k);){C=[],A=[],x.interactables.forEachMatch(k,M);var T=Ck(p,d,m,C,A,b,x);if(T.action&&!T.interactable.options[T.action.name].manualStart)return T;k=An(k)}return{action:null,interactable:null,element:null}}function Jb(p,d,m){var b=d.action,x=d.interactable,C=d.element;b=b||{name:null},p.interactable=x,p.element=C,rf(p.prepared,b),p.rect=x&&b.name?x.getRect(C):null,ew(p,m),m.fire("autoStart:prepared",{interaction:p})}function Ch(p,d,m,b){var x=p.options,C=x[m.name].max,A=x[m.name].maxPerElement,k=b.autoStart.maxInteractions,M=0,T=0,R=0;if(!(C&&A&&k))return!1;for(var O=0,N=b.interactions.list;O<N.length;O++){var q=N[O],K=q.prepared.name;if(q.interacting()&&(++M>=k||q.interactable===p&&((T+=K===m.name?1:0)>=C||q.element===d&&(R++,K===m.name&&R>=A))))return!1}return k>0}function Qb(p,d){return F.number(p)?(d.autoStart.maxInteractions=p,this):d.autoStart.maxInteractions}function af(p,d,m){var b=m.autoStart.cursorElement;b&&b!==p&&(b.style.cursor=""),p.ownerDocument.documentElement.style.cursor=d,p.style.cursor=d,m.autoStart.cursorElement=d?p:null}function ew(p,d){var m=p.interactable,b=p.element,x=p.prepared;if(p.pointerType==="mouse"&&m&&m.options.styleCursor){var C="";if(x.name){var A=m.options[x.name].cursorChecker;C=F.func(A)?A(x,m,b,p._interacting):d.actions.map[x.name].getCursor(x)}af(p.element,C||"",d)}else d.autoStart.cursorElement&&af(d.autoStart.cursorElement,"",d)}var _k={id:"auto-start/base",before:["actions"],install:function(p){var d=p.interactStatic,m=p.defaults;p.usePlugin(yk),m.base.actionChecker=null,m.base.styleCursor=!0,le(m.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),d.maxInteractions=function(b){return Qb(b,p)},p.autoStart={maxInteractions:1/0,withinInteractionLimit:Ch,cursorElement:null}},listeners:{"interactions:down":function(p,d){var m=p.interaction,b=p.pointer,x=p.event,C=p.eventTarget;m.interacting()||Jb(m,Yb(m,b,x,C,d),d)},"interactions:move":function(p,d){(function(m,b){var x=m.interaction,C=m.pointer,A=m.event,k=m.eventTarget;x.pointerType!=="mouse"||x.pointerIsDown||x.interacting()||Jb(x,Yb(x,C,A,k,b),b)})(p,d),(function(m,b){var x=m.interaction;if(x.pointerIsDown&&!x.interacting()&&x.pointerWasMoved&&x.prepared.name){b.fire("autoStart:before-start",m);var C=x.interactable,A=x.prepared.name;A&&C&&(C.options[A].manualStart||!Ch(C,x.element,x.prepared,b)?x.stop():(x.start(x.prepared,C,x.element),ew(x,b)))}})(p,d)},"interactions:stop":function(p,d){var m=p.interaction,b=m.interactable;b&&b.options.styleCursor&&af(m.element,"",d)}},maxInteractions:Qb,withinInteractionLimit:Ch,validateAction:Xb},lf=_k,Ak={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(p,d){var m=p.interaction,b=p.eventTarget,x=p.dx,C=p.dy;if(m.prepared.name==="drag"){var A=Math.abs(x),k=Math.abs(C),M=m.interactable.options.drag,T=M.startAxis,R=A>k?"x":A<k?"y":"xy";if(m.prepared.axis=M.lockAxis==="start"?R[0]:M.lockAxis,R!=="xy"&&T!=="xy"&&T!==R){m.prepared.name=null;for(var O=b,N=function(K){if(K!==m.interactable){var H=m.interactable.options.drag;if(!H.manualStart&&K.testIgnoreAllow(H,O,b)){var J=K.getAction(m.downPointer,m.downEvent,m,O);if(J&&J.name==="drag"&&(function(Y,re){if(!re)return!1;var we=re.options.drag.startAxis;return Y==="xy"||we==="xy"||we===Y})(R,K)&&lf.validateAction(J,K,O,b,d))return K}}};F.element(O);){var q=d.interactables.forEachMatch(O,N);if(q){m.prepared.name="drag",m.interactable=q,m.element=O;break}O=An(O)}}}}}};function cf(p){var d=p.prepared&&p.prepared.name;if(!d)return null;var m=p.interactable.options;return m[d].hold||m[d].delay}var kk={id:"auto-start/hold",install:function(p){var d=p.defaults;p.usePlugin(lf),d.perAction.hold=0,d.perAction.delay=0},listeners:{"interactions:new":function(p){p.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(p){var d=p.interaction,m=cf(d);m>0&&(d.autoStartHoldTimer=setTimeout((function(){d.start(d.prepared,d.interactable,d.element)}),m))},"interactions:move":function(p){var d=p.interaction,m=p.duplicate;d.autoStartHoldTimer&&d.pointerWasMoved&&!m&&(clearTimeout(d.autoStartHoldTimer),d.autoStartHoldTimer=null)},"autoStart:before-start":function(p){var d=p.interaction;cf(d)>0&&(d.prepared.name=null)}},getHoldDuration:cf},Sk=kk,Ek={id:"auto-start",install:function(p){p.usePlugin(lf),p.usePlugin(Sk),p.usePlugin(Ak)}},Mk=function(p){return/^(always|never|auto)$/.test(p)?(this.options.preventDefault=p,this):F.bool(p)?(this.options.preventDefault=p?"always":"never",this):this.options.preventDefault};function Rk(p){var d=p.interaction,m=p.event;d.interactable&&d.interactable.checkAndPreventDefault(m)}var tw={id:"core/interactablePreventDefault",install:function(p){var d=p.Interactable;d.prototype.preventDefault=Mk,d.prototype.checkAndPreventDefault=function(m){return(function(b,x,C){var A=b.options.preventDefault;if(A!=="never")if(A!=="always"){if(x.events.supportsPassive&&/^touch(start|move)$/.test(C.type)){var k=X(C.target).document,M=x.getDocOptions(k);if(!M||!M.events||M.events.passive!==!1)return}/^(mouse|pointer|touch)*(down|start)/i.test(C.type)||F.element(C.target)&&li(C.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||C.preventDefault()}else C.preventDefault()})(this,p,m)},p.interactions.docEvents.push({type:"dragstart",listener:function(m){for(var b=0,x=p.interactions.list;b<x.length;b++){var C=x[b];if(C.element&&(C.element===m.target||Ze(C.element,m.target)))return void C.interactable.checkAndPreventDefault(m)}}})},listeners:["down","move","up","cancel"].reduce((function(p,d){return p["interactions:".concat(d)]=Rk,p}),{})};function _h(p,d){if(d.phaselessTypes[p])return!0;for(var m in d.map)if(p.indexOf(m)===0&&p.substr(m.length)in d.phases)return!0;return!1}function wr(p){var d={};for(var m in p){var b=p[m];F.plainObject(b)?d[m]=wr(b):F.array(b)?d[m]=Bb(b):d[m]=b}return d}var hf=(function(){function p(d){a(this,p),this.states=[],this.startOffset={left:0,right:0,top:0,bottom:0},this.startDelta=void 0,this.result=void 0,this.endResult=void 0,this.startEdges=void 0,this.edges=void 0,this.interaction=void 0,this.interaction=d,this.result=Ah(),this.edges={left:!1,right:!1,top:!1,bottom:!1}}return h(p,[{key:"start",value:function(d,m){var b,x,C=d.phase,A=this.interaction,k=(function(T){var R=T.interactable.options[T.prepared.name],O=R.modifiers;return O&&O.length?O:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map((function(N){var q=R[N];return q&&q.enabled&&{options:q,methods:q._methods}})).filter((function(N){return!!N}))})(A);this.prepareStates(k),this.startEdges=le({},A.edges),this.edges=le({},this.startEdges),this.startOffset=(b=A.rect,x=m,b?{left:x.x-b.left,top:x.y-b.top,right:b.right-x.x,bottom:b.bottom-x.y}:{left:0,top:0,right:0,bottom:0}),this.startDelta={x:0,y:0};var M=this.fillArg({phase:C,pageCoords:m,preEnd:!1});return this.result=Ah(),this.startAll(M),this.result=this.setAll(M)}},{key:"fillArg",value:function(d){var m=this.interaction;return d.interaction=m,d.interactable=m.interactable,d.element=m.element,d.rect||(d.rect=m.rect),d.edges||(d.edges=this.startEdges),d.startOffset=this.startOffset,d}},{key:"startAll",value:function(d){for(var m=0,b=this.states;m<b.length;m++){var x=b[m];x.methods.start&&(d.state=x,x.methods.start(d))}}},{key:"setAll",value:function(d){var m=d.phase,b=d.preEnd,x=d.skipModifiers,C=d.rect,A=d.edges;d.coords=le({},d.pageCoords),d.rect=le({},C),d.edges=le({},A);for(var k=x?this.states.slice(x):this.states,M=Ah(d.coords,d.rect),T=0;T<k.length;T++){var R,O=k[T],N=O.options,q=le({},d.coords),K=null;(R=O.methods)!=null&&R.set&&this.shouldDo(N,b,m)&&(d.state=O,K=O.methods.set(d),vh(d.edges,d.rect,{x:d.coords.x-q.x,y:d.coords.y-q.y})),M.eventProps.push(K)}le(this.edges,d.edges),M.delta.x=d.coords.x-d.pageCoords.x,M.delta.y=d.coords.y-d.pageCoords.y,M.rectDelta.left=d.rect.left-C.left,M.rectDelta.right=d.rect.right-C.right,M.rectDelta.top=d.rect.top-C.top,M.rectDelta.bottom=d.rect.bottom-C.bottom;var H=this.result.coords,J=this.result.rect;if(H&&J){var Y=M.rect.left!==J.left||M.rect.right!==J.right||M.rect.top!==J.top||M.rect.bottom!==J.bottom;M.changed=Y||H.x!==M.coords.x||H.y!==M.coords.y}return M}},{key:"applyToInteraction",value:function(d){var m=this.interaction,b=d.phase,x=m.coords.cur,C=m.coords.start,A=this.result,k=this.startDelta,M=A.delta;b==="start"&&le(this.startDelta,A.delta);for(var T=0,R=[[C,k],[x,M]];T<R.length;T++){var O=R[T],N=O[0],q=O[1];N.page.x+=q.x,N.page.y+=q.y,N.client.x+=q.x,N.client.y+=q.y}var K=this.result.rectDelta,H=d.rect||m.rect;H.left+=K.left,H.right+=K.right,H.top+=K.top,H.bottom+=K.bottom,H.width=H.right-H.left,H.height=H.bottom-H.top}},{key:"setAndApply",value:function(d){var m=this.interaction,b=d.phase,x=d.preEnd,C=d.skipModifiers,A=this.setAll(this.fillArg({preEnd:x,phase:b,pageCoords:d.modifiedCoords||m.coords.cur.page}));if(this.result=A,!A.changed&&(!C||C<this.states.length)&&m.interacting())return!1;if(d.modifiedCoords){var k=m.coords.cur.page,M={x:d.modifiedCoords.x-k.x,y:d.modifiedCoords.y-k.y};A.coords.x+=M.x,A.coords.y+=M.y,A.delta.x+=M.x,A.delta.y+=M.y}this.applyToInteraction(d)}},{key:"beforeEnd",value:function(d){var m=d.interaction,b=d.event,x=this.states;if(x&&x.length){for(var C=!1,A=0;A<x.length;A++){var k=x[A];d.state=k;var M=k.options,T=k.methods,R=T.beforeEnd&&T.beforeEnd(d);if(R)return this.endResult=R,!1;C=C||!C&&this.shouldDo(M,!0,d.phase,!0)}C&&m.move({event:b,preEnd:!0})}}},{key:"stop",value:function(d){var m=d.interaction;if(this.states&&this.states.length){var b=le({states:this.states,interactable:m.interactable,element:m.element,rect:null},d);this.fillArg(b);for(var x=0,C=this.states;x<C.length;x++){var A=C[x];b.state=A,A.methods.stop&&A.methods.stop(b)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(d){this.states=[];for(var m=0;m<d.length;m++){var b=d[m],x=b.options,C=b.methods,A=b.name;this.states.push({options:x,methods:C,index:m,name:A})}return this.states}},{key:"restoreInteractionCoords",value:function(d){var m=d.interaction,b=m.coords,x=m.rect,C=m.modification;if(C.result){for(var A=C.startDelta,k=C.result,M=k.delta,T=k.rectDelta,R=0,O=[[b.start,A],[b.cur,M]];R<O.length;R++){var N=O[R],q=N[0],K=N[1];q.page.x-=K.x,q.page.y-=K.y,q.client.x-=K.x,q.client.y-=K.y}x.left-=T.left,x.right-=T.right,x.top-=T.top,x.bottom-=T.bottom}}},{key:"shouldDo",value:function(d,m,b,x){return!(!d||d.enabled===!1||x&&!d.endOnly||d.endOnly&&!m||b==="start"&&!d.setStart)}},{key:"copyFrom",value:function(d){this.startOffset=d.startOffset,this.startDelta=d.startDelta,this.startEdges=d.startEdges,this.edges=d.edges,this.states=d.states.map((function(m){return wr(m)})),this.result=Ah(le({},d.result.coords),le({},d.result.rect))}},{key:"destroy",value:function(){for(var d in this)this[d]=null}}]),p})();function Ah(p,d){return{rect:d,coords:p,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function yo(p,d){var m=p.defaults,b={start:p.start,set:p.set,beforeEnd:p.beforeEnd,stop:p.stop},x=function(C){var A=C||{};for(var k in A.enabled=A.enabled!==!1,m)k in A||(A[k]=m[k]);var M={options:A,methods:b,name:d,enable:function(){return A.enabled=!0,M},disable:function(){return A.enabled=!1,M}};return M};return d&&typeof d=="string"&&(x._defaults=m,x._methods=b),x}function ol(p){var d=p.iEvent,m=p.interaction.modification.result;m&&(d.modifiers=m.eventProps)}var $k={id:"modifiers/base",before:["actions"],install:function(p){p.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(p){var d=p.interaction;d.modification=new hf(d)},"interactions:before-action-start":function(p){var d=p.interaction,m=p.interaction.modification;m.start(p,d.coords.start.page),d.edges=m.edges,m.applyToInteraction(p)},"interactions:before-action-move":function(p){var d=p.interaction,m=d.modification,b=m.setAndApply(p);return d.edges=m.edges,b},"interactions:before-action-end":function(p){var d=p.interaction,m=d.modification,b=m.beforeEnd(p);return d.edges=m.startEdges,b},"interactions:action-start":ol,"interactions:action-move":ol,"interactions:action-end":ol,"interactions:after-action-start":function(p){return p.interaction.modification.restoreInteractionCoords(p)},"interactions:after-action-move":function(p){return p.interaction.modification.restoreInteractionCoords(p)},"interactions:stop":function(p){return p.interaction.modification.stop(p)}}},nw=$k,iw={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}},uf=(function(p){f(m,p);var d=_(m);function m(b,x,C,A,k,M,T){var R;a(this,m),(R=d.call(this,b)).relatedTarget=null,R.screenX=void 0,R.screenY=void 0,R.button=void 0,R.buttons=void 0,R.ctrlKey=void 0,R.shiftKey=void 0,R.altKey=void 0,R.metaKey=void 0,R.page=void 0,R.client=void 0,R.delta=void 0,R.rect=void 0,R.x0=void 0,R.y0=void 0,R.t0=void 0,R.dt=void 0,R.duration=void 0,R.clientX0=void 0,R.clientY0=void 0,R.velocity=void 0,R.speed=void 0,R.swipe=void 0,R.axes=void 0,R.preEnd=void 0,k=k||b.element;var O=b.interactable,N=(O&&O.options||iw).deltaSource,q=Ja(O,k,C),K=A==="start",H=A==="end",J=K?y(R):b.prevEvent,Y=K?b.coords.start:H?{page:J.page,client:J.client,timeStamp:b.coords.cur.timeStamp}:b.coords.cur;return R.page=le({},Y.page),R.client=le({},Y.client),R.rect=le({},b.rect),R.timeStamp=Y.timeStamp,H||(R.page.x-=q.x,R.page.y-=q.y,R.client.x-=q.x,R.client.y-=q.y),R.ctrlKey=x.ctrlKey,R.altKey=x.altKey,R.shiftKey=x.shiftKey,R.metaKey=x.metaKey,R.button=x.button,R.buttons=x.buttons,R.target=k,R.currentTarget=k,R.preEnd=M,R.type=T||C+(A||""),R.interactable=O,R.t0=K?b.pointers[b.pointers.length-1].downTime:J.t0,R.x0=b.coords.start.page.x-q.x,R.y0=b.coords.start.page.y-q.y,R.clientX0=b.coords.start.client.x-q.x,R.clientY0=b.coords.start.client.y-q.y,R.delta=K||H?{x:0,y:0}:{x:R[N].x-J[N].x,y:R[N].y-J[N].y},R.dt=b.coords.delta.timeStamp,R.duration=R.timeStamp-R.t0,R.velocity=le({},b.coords.velocity[N]),R.speed=Qa(R.velocity.x,R.velocity.y),R.swipe=H||A==="inertiastart"?R.getSwipe():null,R}return h(m,[{key:"getSwipe",value:function(){var b=this._interaction;if(b.prevEvent.speed<600||this.timeStamp-b.prevEvent.timeStamp>150)return null;var x=180*Math.atan2(b.prevEvent.velocityY,b.prevEvent.velocityX)/Math.PI;x<0&&(x+=360);var C=112.5<=x&&x<247.5,A=202.5<=x&&x<337.5;return{up:A,down:!A&&22.5<=x&&x<157.5,left:C,right:!C&&(292.5<=x||x<67.5),angle:x,speed:b.prevEvent.speed,velocity:{x:b.prevEvent.velocityX,y:b.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}]),m})(yh);Object.defineProperties(uf.prototype,{pageX:{get:function(){return this.page.x},set:function(p){this.page.x=p}},pageY:{get:function(){return this.page.y},set:function(p){this.page.y=p}},clientX:{get:function(){return this.client.x},set:function(p){this.client.x=p}},clientY:{get:function(){return this.client.y},set:function(p){this.client.y=p}},dx:{get:function(){return this.delta.x},set:function(p){this.delta.x=p}},dy:{get:function(){return this.delta.y},set:function(p){this.delta.y=p}},velocityX:{get:function(){return this.velocity.x},set:function(p){this.velocity.x=p}},velocityY:{get:function(){return this.velocity.y},set:function(p){this.velocity.y=p}}});var Tk=h((function p(d,m,b,x,C){a(this,p),this.id=void 0,this.pointer=void 0,this.event=void 0,this.downTime=void 0,this.downTarget=void 0,this.id=d,this.pointer=m,this.event=b,this.downTime=x,this.downTarget=C})),zk=(function(p){return p.interactable="",p.element="",p.prepared="",p.pointerIsDown="",p.pointerWasMoved="",p._proxy="",p})({}),ow=(function(p){return p.start="",p.move="",p.end="",p.stop="",p.interacting="",p})({}),Lk=0,Ok=(function(){function p(d){var m=this,b=d.pointerType,x=d.scopeFire;a(this,p),this.interactable=null,this.element=null,this.rect=null,this._rects=void 0,this.edges=null,this._scopeFire=void 0,this.prepared={name:null,axis:null,edges:null},this.pointerType=void 0,this.pointers=[],this.downEvent=null,this.downPointer={},this._latestPointer={pointer:null,event:null,eventTarget:null},this.prevEvent=null,this.pointerIsDown=!1,this.pointerWasMoved=!1,this._interacting=!1,this._ending=!1,this._stopped=!0,this._proxy=void 0,this.simulation=null,this.doMove=il((function(R){this.move(R)}),"The interaction.doMove() method has been renamed to interaction.move()"),this.coords={start:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},prev:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},cur:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},delta:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},velocity:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},this._id=Lk++,this._scopeFire=x,this.pointerType=b;var C=this;this._proxy={};var A=function(R){Object.defineProperty(m._proxy,R,{get:function(){return C[R]}})};for(var k in zk)A(k);var M=function(R){Object.defineProperty(m._proxy,R,{value:function(){return C[R].apply(C,arguments)}})};for(var T in ow)M(T);this._scopeFire("interactions:new",{interaction:this})}return h(p,[{key:"pointerMoveTolerance",get:function(){return 1}},{key:"pointerDown",value:function(d,m,b){var x=this.updatePointer(d,m,b,!0),C=this.pointers[x];this._scopeFire("interactions:down",{pointer:d,event:m,eventTarget:b,pointerIndex:x,pointerInfo:C,type:"down",interaction:this})}},{key:"start",value:function(d,m,b){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<(d.name==="gesture"?2:1)||!m.options[d.name].enabled)&&(rf(this.prepared,d),this.interactable=m,this.element=b,this.rect=m.getRect(b),this.edges=this.prepared.edges?le({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(d,m,b){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(d,m,b,!1);var x,C,A=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(x=this.coords.cur.client.x-this.coords.start.client.x,C=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=Qa(x,C)>this.pointerMoveTolerance);var k,M,T,R=this.getPointerIndex(d),O={pointer:d,pointerIndex:R,pointerInfo:this.pointers[R],event:m,type:"move",eventTarget:b,dx:x,dy:C,duplicate:A,interaction:this};A||(k=this.coords.velocity,M=this.coords.delta,T=Math.max(M.timeStamp/1e3,.001),k.page.x=M.page.x/T,k.page.y=M.page.y/T,k.client.x=M.client.x/T,k.client.y=M.client.y/T,k.timeStamp=T),this._scopeFire("interactions:move",O),A||this.simulation||(this.interacting()&&(O.type=null,this.move(O)),this.pointerWasMoved&&wh(this.coords.prev,this.coords.cur))}},{key:"move",value:function(d){d&&d.event||Ob(this.coords.delta),(d=le({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},d||{})).phase="move",this._doPhase(d)}},{key:"pointerUp",value:function(d,m,b,x){var C=this.getPointerIndex(d);C===-1&&(C=this.updatePointer(d,m,b,!1));var A=/cancel$/i.test(m.type)?"cancel":"up";this._scopeFire("interactions:".concat(A),{pointer:d,pointerIndex:C,pointerInfo:this.pointers[C],event:m,eventTarget:b,type:A,curEventTarget:x,interaction:this}),this.simulation||this.end(m),this.removePointer(d,m)}},{key:"documentBlur",value:function(d){this.end(d),this._scopeFire("interactions:blur",{event:d,type:"blur",interaction:this})}},{key:"end",value:function(d){var m;this._ending=!0,d=d||this._latestPointer.event,this.interacting()&&(m=this._doPhase({event:d,interaction:this,phase:"end"})),this._ending=!1,m===!0&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(d){var m=el(d);return this.pointerType==="mouse"||this.pointerType==="pen"?this.pointers.length-1:tl(this.pointers,(function(b){return b.id===m}))}},{key:"getPointerInfo",value:function(d){return this.pointers[this.getPointerIndex(d)]}},{key:"updatePointer",value:function(d,m,b,x){var C,A,k,M=el(d),T=this.getPointerIndex(d),R=this.pointers[T];return x=x!==!1&&(x||/(down|start)$/i.test(m.type)),R?R.pointer=d:(R=new Tk(M,d,m,null,null),T=this.pointers.length,this.pointers.push(R)),uk(this.coords.cur,this.pointers.map((function(O){return O.pointer})),this._now()),C=this.coords.delta,A=this.coords.prev,k=this.coords.cur,C.page.x=k.page.x-A.page.x,C.page.y=k.page.y-A.page.y,C.client.x=k.client.x-A.client.x,C.client.y=k.client.y-A.client.y,C.timeStamp=k.timeStamp-A.timeStamp,x&&(this.pointerIsDown=!0,R.downTime=this.coords.cur.timeStamp,R.downTarget=b,bh(this.downPointer,d),this.interacting()||(wh(this.coords.start,this.coords.cur),wh(this.coords.prev,this.coords.cur),this.downEvent=m,this.pointerWasMoved=!1)),this._updateLatestPointer(d,m,b),this._scopeFire("interactions:update-pointer",{pointer:d,event:m,eventTarget:b,down:x,pointerInfo:R,pointerIndex:T,interaction:this}),T}},{key:"removePointer",value:function(d,m){var b=this.getPointerIndex(d);if(b!==-1){var x=this.pointers[b];this._scopeFire("interactions:remove-pointer",{pointer:d,event:m,eventTarget:null,pointerIndex:b,pointerInfo:x,interaction:this}),this.pointers.splice(b,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(d,m,b){this._latestPointer.pointer=d,this._latestPointer.event=m,this._latestPointer.eventTarget=b}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(d,m,b,x){return new uf(this,d,this.prepared.name,m,this.element,b,x)}},{key:"_fireEvent",value:function(d){var m;(m=this.interactable)==null||m.fire(d),(!this.prevEvent||d.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=d)}},{key:"_doPhase",value:function(d){var m=d.event,b=d.phase,x=d.preEnd,C=d.type,A=this.rect;if(A&&b==="move"&&(vh(this.edges,A,this.coords.delta[this.interactable.options.deltaSource]),A.width=A.right-A.left,A.height=A.bottom-A.top),this._scopeFire("interactions:before-action-".concat(b),d)===!1)return!1;var k=d.iEvent=this._createPreparedEvent(m,b,x,C);return this._scopeFire("interactions:action-".concat(b),d),b==="start"&&(this.prevEvent=k),this._fireEvent(k),this._scopeFire("interactions:after-action-".concat(b),d),!0}},{key:"_now",value:function(){return Date.now()}}]),p})();function sw(p){rw(p.interaction)}function rw(p){if(!(function(m){return!(!m.offset.pending.x&&!m.offset.pending.y)})(p))return!1;var d=p.offset.pending;return df(p.coords.cur,d),df(p.coords.delta,d),vh(p.edges,p.rect,d),d.x=0,d.y=0,!0}function Dk(p){var d=p.x,m=p.y;this.offset.pending.x+=d,this.offset.pending.y+=m,this.offset.total.x+=d,this.offset.total.y+=m}function df(p,d){var m=p.page,b=p.client,x=d.x,C=d.y;m.x+=x,m.y+=C,b.x+=x,b.y+=C}ow.offsetBy="";var Pk={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(p){p.Interaction.prototype.offsetBy=Dk},listeners:{"interactions:new":function(p){p.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(p){return(function(d){d.pointerIsDown&&(df(d.coords.cur,d.offset.total),d.offset.pending.x=0,d.offset.pending.y=0)})(p.interaction)},"interactions:before-action-start":sw,"interactions:before-action-move":sw,"interactions:before-action-end":function(p){var d=p.interaction;if(rw(d))return d.move({offset:!0}),d.end(),!1},"interactions:stop":function(p){var d=p.interaction;d.offset.total.x=0,d.offset.total.y=0,d.offset.pending.x=0,d.offset.pending.y=0}}},aw=Pk,Ik=(function(){function p(d){a(this,p),this.active=!1,this.isModified=!1,this.smoothEnd=!1,this.allowResume=!1,this.modification=void 0,this.modifierCount=0,this.modifierArg=void 0,this.startCoords=void 0,this.t0=0,this.v0=0,this.te=0,this.targetOffset=void 0,this.modifiedOffset=void 0,this.currentOffset=void 0,this.lambda_v0=0,this.one_ve_v0=0,this.timeout=void 0,this.interaction=void 0,this.interaction=d}return h(p,[{key:"start",value:function(d){var m=this.interaction,b=kh(m);if(!b||!b.enabled)return!1;var x=m.coords.velocity.client,C=Qa(x.x,x.y),A=this.modification||(this.modification=new hf(m));if(A.copyFrom(m.modification),this.t0=m._now(),this.allowResume=b.allowResume,this.v0=C,this.currentOffset={x:0,y:0},this.startCoords=m.coords.cur.page,this.modifierArg=A.fillArg({pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"}),this.t0-m.coords.cur.timeStamp<50&&C>b.minSpeed&&C>b.endSpeed)this.startInertia();else{if(A.result=A.setAll(this.modifierArg),!A.result.changed)return!1;this.startSmoothEnd()}return m.modification.result.rect=null,m.offsetBy(this.targetOffset),m._doPhase({interaction:m,event:d,phase:"inertiastart"}),m.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),m.modification.result.rect=null,this.active=!0,m.simulation=this,!0}},{key:"startInertia",value:function(){var d=this,m=this.interaction.coords.velocity.client,b=kh(this.interaction),x=b.resistance,C=-Math.log(b.endSpeed/this.v0)/x;this.targetOffset={x:(m.x-C)/x,y:(m.y-C)/x},this.te=C,this.lambda_v0=x/this.v0,this.one_ve_v0=1-b.endSpeed/this.v0;var A=this.modification,k=this.modifierArg;k.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},A.result=A.setAll(k),A.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+A.result.delta.x,y:this.targetOffset.y+A.result.delta.y}),this.onNextFrame((function(){return d.inertiaTick()}))}},{key:"startSmoothEnd",value:function(){var d=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame((function(){return d.smoothEndTick()}))}},{key:"onNextFrame",value:function(d){var m=this;this.timeout=xo.request((function(){m.active&&d()}))}},{key:"inertiaTick",value:function(){var d,m,b,x,C,A,k,M=this,T=this.interaction,R=kh(T).resistance,O=(T._now()-this.t0)/1e3;if(O<this.te){var N,q=1-(Math.exp(-R*O)-this.lambda_v0)/this.one_ve_v0;this.isModified?(d=0,m=0,b=this.targetOffset.x,x=this.targetOffset.y,C=this.modifiedOffset.x,A=this.modifiedOffset.y,N={x:lw(k=q,d,b,C),y:lw(k,m,x,A)}):N={x:this.targetOffset.x*q,y:this.targetOffset.y*q};var K={x:N.x-this.currentOffset.x,y:N.y-this.currentOffset.y};this.currentOffset.x+=K.x,this.currentOffset.y+=K.y,T.offsetBy(K),T.move(),this.onNextFrame((function(){return M.inertiaTick()}))}else T.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var d=this,m=this.interaction,b=m._now()-this.t0,x=kh(m).smoothEndDuration;if(b<x){var C={x:cw(b,0,this.targetOffset.x,x),y:cw(b,0,this.targetOffset.y,x)},A={x:C.x-this.currentOffset.x,y:C.y-this.currentOffset.y};this.currentOffset.x+=A.x,this.currentOffset.y+=A.y,m.offsetBy(A),m.move({skipModifiers:this.modifierCount}),this.onNextFrame((function(){return d.smoothEndTick()}))}else m.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(d){var m=d.pointer,b=d.event,x=d.eventTarget,C=this.interaction;C.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),C.updatePointer(m,b,x,!0),C._doPhase({interaction:C,event:b,phase:"resume"}),wh(C.coords.prev,C.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,xo.cancel(this.timeout)}}]),p})();function kh(p){var d=p.interactable,m=p.prepared;return d&&d.options&&m.name&&d.options[m.name].inertia}var Fk={id:"inertia",before:["modifiers","actions"],install:function(p){var d=p.defaults;p.usePlugin(aw),p.usePlugin(nw),p.actions.phases.inertiastart=!0,p.actions.phases.resume=!0,d.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(p){var d=p.interaction;d.inertia=new Ik(d)},"interactions:before-action-end":function(p){var d=p.interaction,m=p.event;return(!d._interacting||d.simulation||!d.inertia.start(m))&&null},"interactions:down":function(p){var d=p.interaction,m=p.eventTarget,b=d.inertia;if(b.active)for(var x=m;F.element(x);){if(x===d.element){b.resume(p);break}x=An(x)}},"interactions:stop":function(p){var d=p.interaction.inertia;d.active&&d.stop()},"interactions:before-action-resume":function(p){var d=p.interaction.modification;d.stop(p),d.start(p,p.interaction.coords.cur.page),d.applyToInteraction(p)},"interactions:before-action-inertiastart":function(p){return p.interaction.modification.setAndApply(p)},"interactions:action-resume":ol,"interactions:action-inertiastart":ol,"interactions:after-action-inertiastart":function(p){return p.interaction.modification.restoreInteractionCoords(p)},"interactions:after-action-resume":function(p){return p.interaction.modification.restoreInteractionCoords(p)}}};function lw(p,d,m,b){var x=1-p;return x*x*d+2*x*p*m+p*p*b}function cw(p,d,m,b){return-m*(p/=b)*(p-2)+d}var Nk=Fk;function hw(p,d){for(var m=0;m<d.length;m++){var b=d[m];if(p.immediatePropagationStopped)break;b(p)}}var uw=(function(){function p(d){a(this,p),this.options=void 0,this.types={},this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.global=void 0,this.options=le({},d||{})}return h(p,[{key:"fire",value:function(d){var m,b=this.global;(m=this.types[d.type])&&hw(d,m),!d.propagationStopped&&b&&(m=b[d.type])&&hw(d,m)}},{key:"on",value:function(d,m){var b=ws(d,m);for(d in b)this.types[d]=Wb(this.types[d]||[],b[d])}},{key:"off",value:function(d,m){var b=ws(d,m);for(d in b){var x=this.types[d];if(x&&x.length)for(var C=0,A=b[d];C<A.length;C++){var k=A[C],M=x.indexOf(k);M!==-1&&x.splice(M,1)}}}},{key:"getRect",value:function(d){return null}}]),p})(),Wk=(function(){function p(d){a(this,p),this.currentTarget=void 0,this.originalEvent=void 0,this.type=void 0,this.originalEvent=d,bh(this,d)}return h(p,[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}]),p})();function sl(p){return F.object(p)?{capture:!!p.capture,passive:!!p.passive}:{capture:!!p,passive:!1}}function Sh(p,d){return p===d||(typeof p=="boolean"?!!d.capture===p&&!d.passive:!!p.capture==!!d.capture&&!!p.passive==!!d.passive)}var Bk={id:"events",install:function(p){var d,m=[],b={},x=[],C={add:A,remove:k,addDelegate:function(R,O,N,q,K){var H=sl(K);if(!b[N]){b[N]=[];for(var J=0;J<x.length;J++){var Y=x[J];A(Y,N,M),A(Y,N,T,!0)}}var re=b[N],we=nl(re,(function(Te){return Te.selector===R&&Te.context===O}));we||(we={selector:R,context:O,listeners:[]},re.push(we)),we.listeners.push({func:q,options:H})},removeDelegate:function(R,O,N,q,K){var H,J=sl(K),Y=b[N],re=!1;if(Y)for(H=Y.length-1;H>=0;H--){var we=Y[H];if(we.selector===R&&we.context===O){for(var Te=we.listeners,de=Te.length-1;de>=0;de--){var ye=Te[de];if(ye.func===q&&Sh(ye.options,J)){Te.splice(de,1),Te.length||(Y.splice(H,1),k(O,N,M),k(O,N,T,!0)),re=!0;break}}if(re)break}}},delegateListener:M,delegateUseCapture:T,delegatedEvents:b,documents:x,targets:m,supportsOptions:!1,supportsPassive:!1};function A(R,O,N,q){if(R.addEventListener){var K=sl(q),H=nl(m,(function(J){return J.eventTarget===R}));H||(H={eventTarget:R,events:{}},m.push(H)),H.events[O]||(H.events[O]=[]),nl(H.events[O],(function(J){return J.func===N&&Sh(J.options,K)}))||(R.addEventListener(O,N,C.supportsOptions?K:K.capture),H.events[O].push({func:N,options:K}))}}function k(R,O,N,q){if(R.addEventListener&&R.removeEventListener){var K=tl(m,(function(Ut){return Ut.eventTarget===R})),H=m[K];if(H&&H.events)if(O!=="all"){var J=!1,Y=H.events[O];if(Y){if(N==="all"){for(var re=Y.length-1;re>=0;re--){var we=Y[re];k(R,O,we.func,we.options)}return}for(var Te=sl(q),de=0;de<Y.length;de++){var ye=Y[de];if(ye.func===N&&Sh(ye.options,Te)){R.removeEventListener(O,N,C.supportsOptions?Te:Te.capture),Y.splice(de,1),Y.length===0&&(delete H.events[O],J=!0);break}}}J&&!Object.keys(H.events).length&&m.splice(K,1)}else for(O in H.events)H.events.hasOwnProperty(O)&&k(R,O,"all")}}function M(R,O){for(var N=sl(O),q=new Wk(R),K=b[R.type],H=Nb(R)[0],J=H;F.element(J);){for(var Y=0;Y<K.length;Y++){var re=K[Y],we=re.selector,Te=re.context;if(li(J,we)&&Ze(Te,H)&&Ze(Te,J)){var de=re.listeners;q.currentTarget=J;for(var ye=0;ye<de.length;ye++){var Ut=de[ye];Sh(Ut.options,N)&&Ut.func(q)}}}J=An(J)}}function T(R){return M(R,!0)}return(d=p.document)==null||d.createElement("div").addEventListener("test",null,{get capture(){return C.supportsOptions=!0},get passive(){return C.supportsPassive=!0}}),p.events=C,C}},pf={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(p){for(var d=0,m=pf.methodOrder;d<m.length;d++){var b=m[d],x=pf[b](p);if(x)return x}return null},simulationResume:function(p){var d=p.pointerType,m=p.eventType,b=p.eventTarget,x=p.scope;if(!/down|start/i.test(m))return null;for(var C=0,A=x.interactions.list;C<A.length;C++){var k=A[C],M=b;if(k.simulation&&k.simulation.allowResume&&k.pointerType===d)for(;M;){if(M===k.element)return k;M=An(M)}}return null},mouseOrPen:function(p){var d,m=p.pointerId,b=p.pointerType,x=p.eventType,C=p.scope;if(b!=="mouse"&&b!=="pen")return null;for(var A=0,k=C.interactions.list;A<k.length;A++){var M=k[A];if(M.pointerType===b){if(M.simulation&&!dw(M,m))continue;if(M.interacting())return M;d||(d=M)}}if(d)return d;for(var T=0,R=C.interactions.list;T<R.length;T++){var O=R[T];if(!(O.pointerType!==b||/down/i.test(x)&&O.simulation))return O}return null},hasPointer:function(p){for(var d=p.pointerId,m=0,b=p.scope.interactions.list;m<b.length;m++){var x=b[m];if(dw(x,d))return x}return null},idle:function(p){for(var d=p.pointerType,m=0,b=p.scope.interactions.list;m<b.length;m++){var x=b[m];if(x.pointers.length===1){var C=x.interactable;if(C&&(!C.options.gesture||!C.options.gesture.enabled))continue}else if(x.pointers.length>=2)continue;if(!x.interacting()&&d===x.pointerType)return x}return null}};function dw(p,d){return p.pointers.some((function(m){return m.id===d}))}var Gk=pf,ff=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function pw(p,d){return function(m){var b=d.interactions.list,x=Fb(m),C=Nb(m),A=C[0],k=C[1],M=[];if(/^touch/.test(m.type)){d.prevTouchTime=d.now();for(var T=0,R=m.changedTouches;T<R.length;T++){var O=R[T],N={pointer:O,pointerId:el(O),pointerType:x,eventType:m.type,eventTarget:A,curEventTarget:k,scope:d},q=fw(N);M.push([N.pointer,N.eventTarget,N.curEventTarget,q])}}else{var K=!1;if(!Ve.supportsPointerEvent&&/mouse/.test(m.type)){for(var H=0;H<b.length&&!K;H++)K=b[H].pointerType!=="mouse"&&b[H].pointerIsDown;K=K||d.now()-d.prevTouchTime<500||m.timeStamp===0}if(!K){var J={pointer:m,pointerId:el(m),pointerType:x,eventType:m.type,curEventTarget:k,eventTarget:A,scope:d},Y=fw(J);M.push([J.pointer,J.eventTarget,J.curEventTarget,Y])}}for(var re=0;re<M.length;re++){var we=M[re],Te=we[0],de=we[1],ye=we[2];we[3][p](Te,m,de,ye)}}}function fw(p){var d=p.pointerType,m=p.scope,b={interaction:Gk.search(p),searchDetails:p};return m.fire("interactions:find",b),b.interaction||m.interactions.new({pointerType:d})}function mf(p,d){var m=p.doc,b=p.scope,x=p.options,C=b.interactions.docEvents,A=b.events,k=A[d];for(var M in b.browser.isIOS&&!x.events&&(x.events={passive:!1}),A.delegatedEvents)k(m,M,A.delegateListener),k(m,M,A.delegateUseCapture,!0);for(var T=x&&x.events,R=0;R<C.length;R++){var O=C[R];k(m,O.type,O.listener,T)}}var Kk={id:"core/interactions",install:function(p){for(var d={},m=0;m<ff.length;m++){var b=ff[m];d[b]=pw(b,p)}var x,C=Ve.pEventTypes;function A(){for(var k=0,M=p.interactions.list;k<M.length;k++){var T=M[k];if(T.pointerIsDown&&T.pointerType==="touch"&&!T._interacting)for(var R=function(){var q=N[O];p.documents.some((function(K){return Ze(K.doc,q.downTarget)}))||T.removePointer(q.pointer,q.event)},O=0,N=T.pointers;O<N.length;O++)R()}}(x=ce.PointerEvent?[{type:C.down,listener:A},{type:C.down,listener:d.pointerDown},{type:C.move,listener:d.pointerMove},{type:C.up,listener:d.pointerUp},{type:C.cancel,listener:d.pointerUp}]:[{type:"mousedown",listener:d.pointerDown},{type:"mousemove",listener:d.pointerMove},{type:"mouseup",listener:d.pointerUp},{type:"touchstart",listener:A},{type:"touchstart",listener:d.pointerDown},{type:"touchmove",listener:d.pointerMove},{type:"touchend",listener:d.pointerUp},{type:"touchcancel",listener:d.pointerUp}]).push({type:"blur",listener:function(k){for(var M=0,T=p.interactions.list;M<T.length;M++)T[M].documentBlur(k)}}),p.prevTouchTime=0,p.Interaction=(function(k){f(T,k);var M=_(T);function T(){return a(this,T),M.apply(this,arguments)}return h(T,[{key:"pointerMoveTolerance",get:function(){return p.interactions.pointerMoveTolerance},set:function(R){p.interactions.pointerMoveTolerance=R}},{key:"_now",value:function(){return p.now()}}]),T})(Ok),p.interactions={list:[],new:function(k){k.scopeFire=function(T,R){return p.fire(T,R)};var M=new p.Interaction(k);return p.interactions.list.push(M),M},listeners:d,docEvents:x,pointerMoveTolerance:1},p.usePlugin(tw)},listeners:{"scope:add-document":function(p){return mf(p,"add")},"scope:remove-document":function(p){return mf(p,"remove")},"interactable:unset":function(p,d){for(var m=p.interactable,b=d.interactions.list.length-1;b>=0;b--){var x=d.interactions.list[b];x.interactable===m&&(x.stop(),d.fire("interactions:destroy",{interaction:x}),x.destroy(),d.interactions.list.length>2&&d.interactions.list.splice(b,1))}}},onDocSignal:mf,doOnInteractions:pw,methodNames:ff},qk=Kk,Co=(function(p){return p[p.On=0]="On",p[p.Off=1]="Off",p})(Co||{}),jk=(function(){function p(d,m,b,x){a(this,p),this.target=void 0,this.options=void 0,this._actions=void 0,this.events=new uw,this._context=void 0,this._win=void 0,this._doc=void 0,this._scopeEvents=void 0,this._actions=m.actions,this.target=d,this._context=m.context||b,this._win=X(Tb(d)?this._context:d),this._doc=this._win.document,this._scopeEvents=x,this.set(m)}return h(p,[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}},{key:"setOnEvents",value:function(d,m){return F.func(m.onstart)&&this.on("".concat(d,"start"),m.onstart),F.func(m.onmove)&&this.on("".concat(d,"move"),m.onmove),F.func(m.onend)&&this.on("".concat(d,"end"),m.onend),F.func(m.oninertiastart)&&this.on("".concat(d,"inertiastart"),m.oninertiastart),this}},{key:"updatePerActionListeners",value:function(d,m,b){var x,C=this,A=(x=this._actions.map[d])==null?void 0:x.filterEventType,k=function(M){return(A==null||A(M))&&_h(M,C._actions)};(F.array(m)||F.object(m))&&this._onOff(Co.Off,d,m,void 0,k),(F.array(b)||F.object(b))&&this._onOff(Co.On,d,b,void 0,k)}},{key:"setPerAction",value:function(d,m){var b=this._defaults;for(var x in m){var C=x,A=this.options[d],k=m[C];C==="listeners"&&this.updatePerActionListeners(d,A.listeners,k),F.array(k)?A[C]=Bb(k):F.plainObject(k)?(A[C]=le(A[C]||{},wr(k)),F.object(b.perAction[C])&&"enabled"in b.perAction[C]&&(A[C].enabled=k.enabled!==!1)):F.bool(k)&&F.object(b.perAction[C])?A[C].enabled=k:A[C]=k}}},{key:"getRect",value:function(d){return d=d||(F.element(this.target)?this.target:null),F.string(this.target)&&(d=d||this._context.querySelector(this.target)),Vp(d)}},{key:"rectChecker",value:function(d){var m=this;return F.func(d)?(this.getRect=function(b){var x=le({},d.apply(m,b));return"width"in x||(x.width=x.right-x.left,x.height=x.bottom-x.top),x},this):d===null?(delete this.getRect,this):this.getRect}},{key:"_backCompatOption",value:function(d,m){if(Tb(m)||F.object(m)){for(var b in this.options[d]=m,this._actions.map)this.options[b][d]=m;return this}return this.options[d]}},{key:"origin",value:function(d){return this._backCompatOption("origin",d)}},{key:"deltaSource",value:function(d){return d==="page"||d==="client"?(this.options.deltaSource=d,this):this.options.deltaSource}},{key:"getAllElements",value:function(){var d=this.target;return F.string(d)?Array.from(this._context.querySelectorAll(d)):F.func(d)&&d.getAllElements?d.getAllElements():F.element(d)?[d]:[]}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(d){return this._context===d.ownerDocument||Ze(this._context,d)}},{key:"testIgnoreAllow",value:function(d,m,b){return!this.testIgnore(d.ignoreFrom,m,b)&&this.testAllow(d.allowFrom,m,b)}},{key:"testAllow",value:function(d,m,b){return!d||!!F.element(b)&&(F.string(d)?Hp(b,d,m):!!F.element(d)&&Ze(d,b))}},{key:"testIgnore",value:function(d,m,b){return!(!d||!F.element(b))&&(F.string(d)?Hp(b,d,m):!!F.element(d)&&Ze(d,b))}},{key:"fire",value:function(d){return this.events.fire(d),this}},{key:"_onOff",value:function(d,m,b,x,C){F.object(m)&&!F.array(m)&&(x=b,b=null);var A=ws(m,b,C);for(var k in A){k==="wheel"&&(k=Ve.wheelEvent);for(var M=0,T=A[k];M<T.length;M++){var R=T[M];_h(k,this._actions)?this.events[d===Co.On?"on":"off"](k,R):F.string(this.target)?this._scopeEvents[d===Co.On?"addDelegate":"removeDelegate"](this.target,this._context,k,R,x):this._scopeEvents[d===Co.On?"add":"remove"](this.target,k,R,x)}}return this}},{key:"on",value:function(d,m,b){return this._onOff(Co.On,d,m,b)}},{key:"off",value:function(d,m,b){return this._onOff(Co.Off,d,m,b)}},{key:"set",value:function(d){var m=this._defaults;for(var b in F.object(d)||(d={}),this.options=wr(m.base),this._actions.methodDict){var x=b,C=this._actions.methodDict[x];this.options[x]={},this.setPerAction(x,le(le({},m.perAction),m.actions[x])),this[C](d[x])}for(var A in d)A!=="getRect"?F.func(this[A])&&this[A](d[A]):this.rectChecker(d.getRect);return this}},{key:"unset",value:function(){if(F.string(this.target))for(var d in this._scopeEvents.delegatedEvents)for(var m=this._scopeEvents.delegatedEvents[d],b=m.length-1;b>=0;b--){var x=m[b],C=x.selector,A=x.context,k=x.listeners;C===this.target&&A===this._context&&m.splice(b,1);for(var M=k.length-1;M>=0;M--)this._scopeEvents.removeDelegate(this.target,this._context,d,k[M][0],k[M][1])}else this._scopeEvents.remove(this.target,"all")}}]),p})(),Hk=(function(){function p(d){var m=this;a(this,p),this.list=[],this.selectorMap={},this.scope=void 0,this.scope=d,d.addListeners({"interactable:unset":function(b){var x=b.interactable,C=x.target,A=F.string(C)?m.selectorMap[C]:C[m.scope.id],k=tl(A,(function(M){return M===x}));A.splice(k,1)}})}return h(p,[{key:"new",value:function(d,m){m=le(m||{},{actions:this.scope.actions});var b=new this.scope.Interactable(d,m,this.scope.document,this.scope.events);return this.scope.addDocument(b._doc),this.list.push(b),F.string(d)?(this.selectorMap[d]||(this.selectorMap[d]=[]),this.selectorMap[d].push(b)):(b.target[this.scope.id]||Object.defineProperty(d,this.scope.id,{value:[],configurable:!0}),d[this.scope.id].push(b)),this.scope.fire("interactable:new",{target:d,options:m,interactable:b,win:this.scope._win}),b}},{key:"getExisting",value:function(d,m){var b=m&&m.context||this.scope.document,x=F.string(d),C=x?this.selectorMap[d]:d[this.scope.id];if(C)return nl(C,(function(A){return A._context===b&&(x||A.inContext(d))}))}},{key:"forEachMatch",value:function(d,m){for(var b=0,x=this.list;b<x.length;b++){var C=x[b],A=void 0;if((F.string(C.target)?F.element(d)&&li(d,C.target):d===C.target)&&C.inContext(d)&&(A=m(C)),A!==void 0)return A}}}]),p})(),Uk=(function(){function p(){var d=this;a(this,p),this.id="__interact_scope_".concat(Math.floor(100*Math.random())),this.isInitialized=!1,this.listenerMaps=[],this.browser=Ve,this.defaults=wr(iw),this.Eventable=uw,this.actions={map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}},this.interactStatic=(function(b){var x=function C(A,k){var M=b.interactables.getExisting(A,k);return M||((M=b.interactables.new(A,k)).events.global=C.globalEvents),M};return x.getPointerAverage=Ib,x.getTouchBBox=Yp,x.getTouchDistance=Jp,x.getTouchAngle=Qp,x.getElementRect=Vp,x.getElementClientRect=Up,x.matchesSelector=li,x.closest=Ot,x.globalEvents={},x.version="1.10.27",x.scope=b,x.use=function(C,A){return this.scope.usePlugin(C,A),this},x.isSet=function(C,A){return!!this.scope.interactables.get(C,A&&A.context)},x.on=il((function(C,A,k){if(F.string(C)&&C.search(" ")!==-1&&(C=C.trim().split(/ +/)),F.array(C)){for(var M=0,T=C;M<T.length;M++){var R=T[M];this.on(R,A,k)}return this}if(F.object(C)){for(var O in C)this.on(O,C[O],A);return this}return _h(C,this.scope.actions)?this.globalEvents[C]?this.globalEvents[C].push(A):this.globalEvents[C]=[A]:this.scope.events.add(this.scope.document,C,A,{options:k}),this}),"The interact.on() method is being deprecated"),x.off=il((function(C,A,k){if(F.string(C)&&C.search(" ")!==-1&&(C=C.trim().split(/ +/)),F.array(C)){for(var M=0,T=C;M<T.length;M++){var R=T[M];this.off(R,A,k)}return this}if(F.object(C)){for(var O in C)this.off(O,C[O],A);return this}var N;return _h(C,this.scope.actions)?C in this.globalEvents&&(N=this.globalEvents[C].indexOf(A))!==-1&&this.globalEvents[C].splice(N,1):this.scope.events.remove(this.scope.document,C,A,k),this}),"The interact.off() method is being deprecated"),x.debug=function(){return this.scope},x.supportsTouch=function(){return Ve.supportsTouch},x.supportsPointerEvent=function(){return Ve.supportsPointerEvent},x.stop=function(){for(var C=0,A=this.scope.interactions.list;C<A.length;C++)A[C].stop();return this},x.pointerMoveTolerance=function(C){return F.number(C)?(this.scope.interactions.pointerMoveTolerance=C,this):this.scope.interactions.pointerMoveTolerance},x.addDocument=function(C,A){this.scope.addDocument(C,A)},x.removeDocument=function(C){this.scope.removeDocument(C)},x})(this),this.InteractEvent=uf,this.Interactable=void 0,this.interactables=new Hk(this),this._win=void 0,this.document=void 0,this.window=void 0,this.documents=[],this._plugins={list:[],map:{}},this.onWindowUnload=function(b){return d.removeDocument(b.target)};var m=this;this.Interactable=(function(b){f(C,b);var x=_(C);function C(){return a(this,C),x.apply(this,arguments)}return h(C,[{key:"_defaults",get:function(){return m.defaults}},{key:"set",value:function(A){return E(g(C.prototype),"set",this).call(this,A),m.fire("interactable:set",{options:A,interactable:this}),this}},{key:"unset",value:function(){E(g(C.prototype),"unset",this).call(this);var A=m.interactables.list.indexOf(this);A<0||(m.interactables.list.splice(A,1),m.fire("interactable:unset",{interactable:this}))}}]),C})(jk)}return h(p,[{key:"addListeners",value:function(d,m){this.listenerMaps.push({id:m,map:d})}},{key:"fire",value:function(d,m){for(var b=0,x=this.listenerMaps;b<x.length;b++){var C=x[b].map[d];if(C&&C(m,this,d)===!1)return!1}}},{key:"init",value:function(d){return this.isInitialized?this:(function(m,b){return m.isInitialized=!0,F.window(b)&&j(b),ce.init(b),Ve.init(b),xo.init(b),m.window=b,m.document=b.document,m.usePlugin(qk),m.usePlugin(Bk),m})(this,d)}},{key:"pluginIsInstalled",value:function(d){var m=d.id;return m?!!this._plugins.map[m]:this._plugins.list.indexOf(d)!==-1}},{key:"usePlugin",value:function(d,m){if(!this.isInitialized)return this;if(this.pluginIsInstalled(d))return this;if(d.id&&(this._plugins.map[d.id]=d),this._plugins.list.push(d),d.install&&d.install(this,m),d.listeners&&d.before){for(var b=0,x=this.listenerMaps.length,C=d.before.reduce((function(k,M){return k[M]=!0,k[mw(M)]=!0,k}),{});b<x;b++){var A=this.listenerMaps[b].id;if(A&&(C[A]||C[mw(A)]))break}this.listenerMaps.splice(b,0,{id:d.id,map:d.listeners})}else d.listeners&&this.listenerMaps.push({id:d.id,map:d.listeners});return this}},{key:"addDocument",value:function(d,m){if(this.getDocIndex(d)!==-1)return!1;var b=X(d);m=m?le({},m):{},this.documents.push({doc:d,options:m}),this.events.documents.push(d),d!==this.document&&this.events.add(b,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:d,window:b,scope:this,options:m})}},{key:"removeDocument",value:function(d){var m=this.getDocIndex(d),b=X(d),x=this.documents[m].options;this.events.remove(b,"unload",this.onWindowUnload),this.documents.splice(m,1),this.events.documents.splice(m,1),this.fire("scope:remove-document",{doc:d,window:b,scope:this,options:x})}},{key:"getDocIndex",value:function(d){for(var m=0;m<this.documents.length;m++)if(this.documents[m].doc===d)return m;return-1}},{key:"getDocOptions",value:function(d){var m=this.getDocIndex(d);return m===-1?null:this.documents[m].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),p})();function mw(p){return p&&p.replace(/\/.*$/,"")}var gw=new Uk,Ht=gw.interactStatic,Vk=typeof globalThis<"u"?globalThis:window;gw.init(Vk);var Zk=Object.freeze({__proto__:null,edgeTarget:function(){},elements:function(){},grid:function(p){var d=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter((function(b){var x=b[0],C=b[1];return x in p||C in p})),m=function(b,x){for(var C=p.range,A=p.limits,k=A===void 0?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:A,M=p.offset,T=M===void 0?{x:0,y:0}:M,R={range:C,grid:p,x:null,y:null},O=0;O<d.length;O++){var N=d[O],q=N[0],K=N[1],H=Math.round((b-T.x)/p[q]),J=Math.round((x-T.y)/p[K]);R[q]=Math.max(k.left,Math.min(k.right,H*p[q]+T.x)),R[K]=Math.max(k.top,Math.min(k.bottom,J*p[K]+T.y))}return R};return m.grid=p,m.coordFields=d,m}}),Xk={id:"snappers",install:function(p){var d=p.interactStatic;d.snappers=le(d.snappers||{},Zk),d.createSnapGrid=d.snappers.grid}},Yk=Xk,Jk={start:function(p){var d=p.state,m=p.rect,b=p.edges,x=p.pageCoords,C=d.options,A=C.ratio,k=C.enabled,M=d.options,T=M.equalDelta,R=M.modifiers;A==="preserve"&&(A=m.width/m.height),d.startCoords=le({},x),d.startRect=le({},m),d.ratio=A,d.equalDelta=T;var O=d.linkedEdges={top:b.top||b.left&&!b.bottom,left:b.left||b.top&&!b.right,bottom:b.bottom||b.right&&!b.top,right:b.right||b.bottom&&!b.left};if(d.xIsPrimaryAxis=!(!b.left&&!b.right),d.equalDelta){var N=(O.left?1:-1)*(O.top?1:-1);d.edgeSign={x:N,y:N}}else d.edgeSign={x:O.left?-1:1,y:O.top?-1:1};if(k!==!1&&le(b,O),R!=null&&R.length){var q=new hf(p.interaction);q.copyFrom(p.interaction.modification),q.prepareStates(R),d.subModification=q,q.startAll(i({},p))}},set:function(p){var d=p.state,m=p.rect,b=p.coords,x=d.linkedEdges,C=le({},b),A=d.equalDelta?Qk:eS;if(le(p.edges,x),A(d,d.xIsPrimaryAxis,b,m),!d.subModification)return null;var k=le({},m);vh(x,k,{x:b.x-C.x,y:b.y-C.y});var M=d.subModification.setAll(i(i({},p),{},{rect:k,edges:x,pageCoords:b,prevCoords:b,prevRect:k})),T=M.delta;return M.changed&&(A(d,Math.abs(T.x)>Math.abs(T.y),M.coords,M.rect),le(b,M.coords)),M.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function Qk(p,d,m){var b=p.startCoords,x=p.edgeSign;d?m.y=b.y+(m.x-b.x)*x.y:m.x=b.x+(m.y-b.y)*x.x}function eS(p,d,m,b){var x=p.startRect,C=p.startCoords,A=p.ratio,k=p.edgeSign;if(d){var M=b.width/A;m.y=C.y+(M-x.height)*k.y}else{var T=b.height*A;m.x=C.x+(T-x.width)*k.x}}var tS=yo(Jk,"aspectRatio"),vw=function(){};vw._defaults={};var Eh=vw;function ys(p,d,m){return F.func(p)?Ya(p,d.interactable,d.element,[m.x,m.y,d]):Ya(p,d.interactable,d.element)}var Mh={start:function(p){var d=p.rect,m=p.startOffset,b=p.state,x=p.interaction,C=p.pageCoords,A=b.options,k=A.elementRect,M=le({left:0,top:0,right:0,bottom:0},A.offset||{});if(d&&k){var T=ys(A.restriction,x,C);if(T){var R=T.right-T.left-d.width,O=T.bottom-T.top-d.height;R<0&&(M.left+=R,M.right+=R),O<0&&(M.top+=O,M.bottom+=O)}M.left+=m.left-d.width*k.left,M.top+=m.top-d.height*k.top,M.right+=m.right-d.width*(1-k.right),M.bottom+=m.bottom-d.height*(1-k.bottom)}b.offset=M},set:function(p){var d=p.coords,m=p.interaction,b=p.state,x=b.options,C=b.offset,A=ys(x.restriction,m,d);if(A){var k=(function(M){return!M||"left"in M&&"top"in M||((M=le({},M)).left=M.x||0,M.top=M.y||0,M.right=M.right||M.left+M.width,M.bottom=M.bottom||M.top+M.height),M})(A);d.x=Math.max(Math.min(k.right-C.right,d.x),k.left+C.left),d.y=Math.max(Math.min(k.bottom-C.bottom,d.y),k.top+C.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}},nS=yo(Mh,"restrict"),bw={top:1/0,left:1/0,bottom:-1/0,right:-1/0},ww={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function xw(p,d){for(var m=0,b=["top","left","bottom","right"];m<b.length;m++){var x=b[m];x in p||(p[x]=d[x])}return p}var rl={noInner:bw,noOuter:ww,start:function(p){var d,m=p.interaction,b=p.startOffset,x=p.state,C=x.options;C&&(d=gh(ys(C.offset,m,m.coords.start.page))),d=d||{x:0,y:0},x.offset={top:d.y+b.top,left:d.x+b.left,bottom:d.y-b.bottom,right:d.x-b.right}},set:function(p){var d=p.coords,m=p.edges,b=p.interaction,x=p.state,C=x.offset,A=x.options;if(m){var k=le({},d),M=ys(A.inner,b,k)||{},T=ys(A.outer,b,k)||{};xw(M,bw),xw(T,ww),m.top?d.y=Math.min(Math.max(T.top+C.top,k.y),M.top+C.top):m.bottom&&(d.y=Math.max(Math.min(T.bottom+C.bottom,k.y),M.bottom+C.bottom)),m.left?d.x=Math.min(Math.max(T.left+C.left,k.x),M.left+C.left):m.right&&(d.x=Math.max(Math.min(T.right+C.right,k.x),M.right+C.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}},iS=yo(rl,"restrictEdges"),oS=le({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(p){}},Mh.defaults),sS=yo({start:Mh.start,set:Mh.set,defaults:oS},"restrictRect"),rS={width:-1/0,height:-1/0},aS={width:1/0,height:1/0},lS=yo({start:function(p){return rl.start(p)},set:function(p){var d=p.interaction,m=p.state,b=p.rect,x=p.edges,C=m.options;if(x){var A=Zp(ys(C.min,d,p.coords))||rS,k=Zp(ys(C.max,d,p.coords))||aS;m.options={endOnly:C.endOnly,inner:le({},rl.noInner),outer:le({},rl.noOuter)},x.top?(m.options.inner.top=b.bottom-A.height,m.options.outer.top=b.bottom-k.height):x.bottom&&(m.options.inner.bottom=b.top+A.height,m.options.outer.bottom=b.top+k.height),x.left?(m.options.inner.left=b.right-A.width,m.options.outer.left=b.right-k.width):x.right&&(m.options.inner.right=b.left+A.width,m.options.outer.right=b.left+k.width),rl.set(p),m.options=C}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}},"restrictSize"),gf={start:function(p){var d,m=p.interaction,b=p.interactable,x=p.element,C=p.rect,A=p.state,k=p.startOffset,M=A.options,T=M.offsetWithOrigin?(function(N){var q=N.interaction.element,K=gh(Ya(N.state.options.origin,null,null,[q])),H=K||Ja(N.interactable,q,N.interaction.prepared.name);return H})(p):{x:0,y:0};if(M.offset==="startCoords")d={x:m.coords.start.page.x,y:m.coords.start.page.y};else{var R=Ya(M.offset,b,x,[m]);(d=gh(R)||{x:0,y:0}).x+=T.x,d.y+=T.y}var O=M.relativePoints;A.offsets=C&&O&&O.length?O.map((function(N,q){return{index:q,relativePoint:N,x:k.left-C.width*N.x+d.x,y:k.top-C.height*N.y+d.y}})):[{index:0,relativePoint:null,x:d.x,y:d.y}]},set:function(p){var d=p.interaction,m=p.coords,b=p.state,x=b.options,C=b.offsets,A=Ja(d.interactable,d.element,d.prepared.name),k=le({},m),M=[];x.offsetWithOrigin||(k.x-=A.x,k.y-=A.y);for(var T=0,R=C;T<R.length;T++)for(var O=R[T],N=k.x-O.x,q=k.y-O.y,K=0,H=x.targets.length;K<H;K++){var J=x.targets[K],Y=void 0;(Y=F.func(J)?J(N,q,d._proxy,O,K):J)&&M.push({x:(F.number(Y.x)?Y.x:N)+O.x,y:(F.number(Y.y)?Y.y:q)+O.y,range:F.number(Y.range)?Y.range:x.range,source:J,index:K,offset:O})}for(var re={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},we=0;we<M.length;we++){var Te=M[we],de=Te.range,ye=Te.x-k.x,Ut=Te.y-k.y,nt=Qa(ye,Ut),fn=nt<=de;de===1/0&&re.inRange&&re.range!==1/0&&(fn=!1),re.target&&!(fn?re.inRange&&de!==1/0?nt/de<re.distance/re.range:de===1/0&&re.range!==1/0||nt<re.distance:!re.inRange&&nt<re.distance)||(re.target=Te,re.distance=nt,re.range=de,re.inRange=fn,re.delta.x=ye,re.delta.y=Ut)}return re.inRange&&(m.x=re.target.x,m.y=re.target.y),b.closest=re,re},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}},cS=yo(gf,"snap"),Rh={start:function(p){var d=p.state,m=p.edges,b=d.options;if(!m)return null;p.state={options:{targets:null,relativePoints:[{x:m.left?0:1,y:m.top?0:1}],offset:b.offset||"self",origin:{x:0,y:0},range:b.range}},d.targetFields=d.targetFields||[["width","height"],["x","y"]],gf.start(p),d.offsets=p.state.offsets,p.state=d},set:function(p){var d=p.interaction,m=p.state,b=p.coords,x=m.options,C=m.offsets,A={x:b.x-C[0].x,y:b.y-C[0].y};m.options=le({},x),m.options.targets=[];for(var k=0,M=x.targets||[];k<M.length;k++){var T=M[k],R=void 0;if(R=F.func(T)?T(A.x,A.y,d):T){for(var O=0,N=m.targetFields;O<N.length;O++){var q=N[O],K=q[0],H=q[1];if(K in R||H in R){R.x=R[K],R.y=R[H];break}}m.options.targets.push(R)}}var J=gf.set(p);return m.options=x,J},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}},hS=yo(Rh,"snapSize"),vf={aspectRatio:tS,restrictEdges:iS,restrict:nS,restrictRect:sS,restrictSize:lS,snapEdges:yo({start:function(p){var d=p.edges;return d?(p.state.targetFields=p.state.targetFields||[[d.left?"left":"right",d.top?"top":"bottom"]],Rh.start(p)):null},set:Rh.set,defaults:le(wr(Rh.defaults),{targets:void 0,range:void 0,offset:{x:0,y:0}})},"snapEdges"),snap:cS,snapSize:hS,spring:Eh,avoid:Eh,transform:Eh,rubberband:Eh},uS={id:"modifiers",install:function(p){var d=p.interactStatic;for(var m in p.usePlugin(nw),p.usePlugin(Yk),d.modifiers=vf,vf){var b=vf[m],x=b._defaults,C=b._methods;x._methods=C,p.defaults.perAction[m]=x}}},dS=uS,yw=(function(p){f(m,p);var d=_(m);function m(b,x,C,A,k,M){var T;if(a(this,m),bh(y(T=d.call(this,k)),C),C!==x&&bh(y(T),x),T.timeStamp=M,T.originalEvent=C,T.type=b,T.pointerId=el(x),T.pointerType=Fb(x),T.target=A,T.currentTarget=null,b==="tap"){var R=k.getPointerIndex(x);T.dt=T.timeStamp-k.pointers[R].downTime;var O=T.timeStamp-k.tapTime;T.double=!!k.prevTap&&k.prevTap.type!=="doubletap"&&k.prevTap.target===T.target&&O<500}else b==="doubletap"&&(T.dt=x.timeStamp-k.tapTime,T.double=!0);return T}return h(m,[{key:"_subtractOrigin",value:function(b){var x=b.x,C=b.y;return this.pageX-=x,this.pageY-=C,this.clientX-=x,this.clientY-=C,this}},{key:"_addOrigin",value:function(b){var x=b.x,C=b.y;return this.pageX+=x,this.pageY+=C,this.clientX+=x,this.clientY+=C,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}]),m})(yh),al={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(p){p.pointerEvents=al,p.defaults.actions.pointerEvents=al.defaults,le(p.actions.phaselessTypes,al.types)},listeners:{"interactions:new":function(p){var d=p.interaction;d.prevTap=null,d.tapTime=0},"interactions:update-pointer":function(p){var d=p.down,m=p.pointerInfo;!d&&m.hold||(m.hold={duration:1/0,timeout:null})},"interactions:move":function(p,d){var m=p.interaction,b=p.pointer,x=p.event,C=p.eventTarget;p.duplicate||m.pointerIsDown&&!m.pointerWasMoved||(m.pointerIsDown&&bf(p),_o({interaction:m,pointer:b,event:x,eventTarget:C,type:"move"},d))},"interactions:down":function(p,d){(function(m,b){for(var x=m.interaction,C=m.pointer,A=m.event,k=m.eventTarget,M=m.pointerIndex,T=x.pointers[M].hold,R=$b(k),O={interaction:x,pointer:C,event:A,eventTarget:k,type:"hold",targets:[],path:R,node:null},N=0;N<R.length;N++){var q=R[N];O.node=q,b.fire("pointerEvents:collect-targets",O)}if(O.targets.length){for(var K=1/0,H=0,J=O.targets;H<J.length;H++){var Y=J[H].eventable.options.holdDuration;Y<K&&(K=Y)}T.duration=K,T.timeout=setTimeout((function(){_o({interaction:x,eventTarget:k,pointer:C,event:A,type:"hold"},b)}),K)}})(p,d),_o(p,d)},"interactions:up":function(p,d){bf(p),_o(p,d),(function(m,b){var x=m.interaction,C=m.pointer,A=m.event,k=m.eventTarget;x.pointerWasMoved||_o({interaction:x,eventTarget:k,pointer:C,event:A,type:"tap"},b)})(p,d)},"interactions:cancel":function(p,d){bf(p),_o(p,d)}},PointerEvent:yw,fire:_o,collectEventTargets:Cw,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function _o(p,d){var m=p.interaction,b=p.pointer,x=p.event,C=p.eventTarget,A=p.type,k=p.targets,M=k===void 0?Cw(p,d):k,T=new yw(A,b,x,C,m,d.now());d.fire("pointerEvents:new",{pointerEvent:T});for(var R={interaction:m,pointer:b,event:x,eventTarget:C,targets:M,type:A,pointerEvent:T},O=0;O<M.length;O++){var N=M[O];for(var q in N.props||{})T[q]=N.props[q];var K=Ja(N.eventable,N.node);if(T._subtractOrigin(K),T.eventable=N.eventable,T.currentTarget=N.node,N.eventable.fire(T),T._addOrigin(K),T.immediatePropagationStopped||T.propagationStopped&&O+1<M.length&&M[O+1].node!==T.currentTarget)break}if(d.fire("pointerEvents:fired",R),A==="tap"){var H=T.double?_o({interaction:m,pointer:b,event:x,eventTarget:C,type:"doubletap"},d):T;m.prevTap=H,m.tapTime=H.timeStamp}return T}function Cw(p,d){var m=p.interaction,b=p.pointer,x=p.event,C=p.eventTarget,A=p.type,k=m.getPointerIndex(b),M=m.pointers[k];if(A==="tap"&&(m.pointerWasMoved||!M||M.downTarget!==C))return[];for(var T=$b(C),R={interaction:m,pointer:b,event:x,eventTarget:C,type:A,path:T,targets:[],node:null},O=0;O<T.length;O++){var N=T[O];R.node=N,d.fire("pointerEvents:collect-targets",R)}return A==="hold"&&(R.targets=R.targets.filter((function(q){var K,H;return q.eventable.options.holdDuration===((K=m.pointers[k])==null||(H=K.hold)==null?void 0:H.duration)}))),R.targets}function bf(p){var d=p.interaction,m=p.pointerIndex,b=d.pointers[m].hold;b&&b.timeout&&(clearTimeout(b.timeout),b.timeout=null)}var pS=Object.freeze({__proto__:null,default:al});function fS(p){var d=p.interaction;d.holdIntervalHandle&&(clearInterval(d.holdIntervalHandle),d.holdIntervalHandle=null)}var mS={id:"pointer-events/holdRepeat",install:function(p){p.usePlugin(al);var d=p.pointerEvents;d.defaults.holdRepeatInterval=0,d.types.holdrepeat=p.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce((function(p,d){return p["pointerEvents:".concat(d)]=fS,p}),{"pointerEvents:new":function(p){var d=p.pointerEvent;d.type==="hold"&&(d.count=(d.count||0)+1)},"pointerEvents:fired":function(p,d){var m=p.interaction,b=p.pointerEvent,x=p.eventTarget,C=p.targets;if(b.type==="hold"&&C.length){var A=C[0].eventable.options.holdRepeatInterval;A<=0||(m.holdIntervalHandle=setTimeout((function(){d.pointerEvents.fire({interaction:m,eventTarget:x,type:"hold",pointer:b,event:b},d)}),A))}}})},gS=mS,vS={id:"pointer-events/interactableTargets",install:function(p){var d=p.Interactable;d.prototype.pointerEvents=function(b){return le(this.events.options,b),this};var m=d.prototype._backCompatOption;d.prototype._backCompatOption=function(b,x){var C=m.call(this,b,x);return C===this&&(this.events.options[b]=x),C}},listeners:{"pointerEvents:collect-targets":function(p,d){var m=p.targets,b=p.node,x=p.type,C=p.eventTarget;d.interactables.forEachMatch(b,(function(A){var k=A.events,M=k.options;k.types[x]&&k.types[x].length&&A.testIgnoreAllow(M,b,C)&&m.push({node:b,eventable:k,props:{interactable:A}})}))},"interactable:new":function(p){var d=p.interactable;d.events.getRect=function(m){return d.getRect(m)}},"interactable:set":function(p,d){var m=p.interactable,b=p.options;le(m.events.options,d.pointerEvents.defaults),le(m.events.options,b.pointerEvents||{})}}},bS=vS,wS={id:"pointer-events",install:function(p){p.usePlugin(pS),p.usePlugin(gS),p.usePlugin(bS)}},xS=wS,yS={id:"reflow",install:function(p){var d=p.Interactable;p.actions.phases.reflow=!0,d.prototype.reflow=function(m){return(function(b,x,C){for(var A=b.getAllElements(),k=C.window.Promise,M=k?[]:null,T=function(){var O=A[R],N=b.getRect(O);if(!N)return 1;var q,K=nl(C.interactions.list,(function(Y){return Y.interacting()&&Y.interactable===b&&Y.element===O&&Y.prepared.name===x.name}));if(K)K.move(),M&&(q=K._reflowPromise||new k((function(Y){K._reflowResolve=Y})));else{var H=Zp(N),J=(function(Y){return{coords:Y,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}})({page:{x:H.x,y:H.y},client:{x:H.x,y:H.y},timeStamp:C.now()});q=(function(Y,re,we,Te,de){var ye=Y.interactions.new({pointerType:"reflow"}),Ut={interaction:ye,event:de,pointer:de,eventTarget:we,phase:"reflow"};ye.interactable=re,ye.element=we,ye.prevEvent=de,ye.updatePointer(de,de,we,!0),Ob(ye.coords.delta),rf(ye.prepared,Te),ye._doPhase(Ut);var nt=Y.window,fn=nt.Promise,jn=fn?new fn((function(qi){ye._reflowResolve=qi})):void 0;return ye._reflowPromise=jn,ye.start(Te,re,we),ye._interacting?(ye.move(Ut),ye.end(de)):(ye.stop(),ye._reflowResolve()),ye.removePointer(de,de),jn})(C,b,O,x,J)}M&&M.push(q)},R=0;R<A.length&&!T();R++);return M&&k.all(M).then((function(){return b}))})(this,m,p)}},listeners:{"interactions:stop":function(p,d){var m=p.interaction;m.pointerType==="reflow"&&(m._reflowResolve&&m._reflowResolve(),(function(b,x){b.splice(b.indexOf(x),1)})(d.interactions.list,m))}}},CS=yS;if(Ht.use(tw),Ht.use(aw),Ht.use(xS),Ht.use(Nk),Ht.use(dS),Ht.use(Ek),Ht.use(gk),Ht.use(bk),Ht.use(CS),Ht.default=Ht,s(e)==="object"&&e)try{e.exports=Ht}catch{}return Ht.default=Ht,Ht}))})(pl,pl.exports)),pl.exports}var x1=w1();const es=v1(x1),fe=e=>e.label||e.path||e.name||"",Ld=e=>e.label||e.path||e.valueGetter&&e.name||"",Fc=(e,t)=>({trueText:e?.trueText||t.trueText,falseText:e?.falseText||t.falseText}),y1=e=>!!e&&Array.isArray(e.columns)&&e.columns.length>0,Pf=e=>{const t=new Map,n=new Map,i=[],s=[];let a=0;const c=(u,f,g)=>{const v=[];for(const y of u)!y||typeof y!="object"||t.has(y)||(t.set(y,f),v.push(y),y1(y)?(s.push(y),n.set(y,c(y.columns,y,g+1))):(i.push(y),a=Math.max(a,g)));return v};return{roots:c(e,null,0),parentOf:t,childrenOf:n,leaves:i,bands:s,maxBandDepth:a}},Ls=(e,t)=>{const n=[];let i=e.parentOf.get(t)??null;for(;i;)n.unshift(i),i=e.parentOf.get(i)??null;return n},C1=(e,t)=>{let n=t,i=e.parentOf.get(n)??null;for(;i;)n=i,i=e.parentOf.get(n)??null;return n},jl=(e,t,n)=>{if(!t.bands.length&&!n)return e.filter(u=>t.parentOf.has(u));const i=new Map;e.forEach((u,f)=>i.set(u,f));const s=new Map,a=u=>{const f=s.get(u);if(f!==void 0)return f;let g=1/0;const v=t.childrenOf.get(u);if(v)for(const y of v)g=Math.min(g,a(y));else g=i.get(u)??1/0;return s.set(u,g),g},c=[],h=u=>{const f=u.filter(g=>a(g)!==1/0).map(g=>({column:g,key:n?.get(g)??a(g)})).sort((g,v)=>g.key-v.key||a(g.column)-a(v.column));for(const{column:g}of f){const v=t.childrenOf.get(g);v?h(v):c.push(g)}};return h(t.roots),c},Od=(e,t,n)=>{const i=n?t.childrenOf.get(n)??[]:t.roots,s=jl(e,t),a=new Map;s.forEach((h,u)=>a.set(h,u));const c=h=>{const u=t.childrenOf.get(h);return u?Math.min(1/0,...u.map(c)):a.get(h)??1/0};return i.map(h=>({column:h,first:c(h)})).filter(h=>h.first!==1/0).sort((h,u)=>h.first-u.first).map(h=>h.column)},Xw=(e,t,n,i)=>{const s=t.parentOf.get(n)??null,a=Od(e,t,s),c=a.indexOf(n);if(c<0)return[...e];const h=a[i];if(h===n)return jl(e,t);a.splice(c,1);const u=h?a.indexOf(h):a.length;a.splice(u,0,n);const f=new Map;return a.forEach((g,v)=>f.set(g,v)),jl(e,t,f)},ky=(e,t)=>{const n=Math.max(t,1),i=Array.from({length:n},()=>[]);for(let s=0;s<n;s++){const a=i[s];let c=null;const h=()=>{c&&(a.push({column:c.column,band:!0,level:s,rowSpan:1,start:c.start,span:c.span}),c=null)};e.forEach((u,f)=>{const g=u.chain;if(s<g.length){const v=g[s];c&&c.column===v&&c.start+c.span===f?c.span++:(h(),c={column:v,start:f,span:1});return}h(),s===g.length&&a.push({column:u.leaf,band:!1,level:s,rowSpan:n-s,start:f,span:1})}),h()}return i},Sy=(e,t,n)=>{for(let i=Math.min(t,e.length-1);i>=0;i--){const s=e[i].find(a=>n>=a.start&&n<a.start+a.span);if(s)return s.level+s.rowSpan>t?s:void 0}},_1=4,Ey=e=>{let t={x:0,y:0};return e.on("down",n=>{t={x:n.clientX,y:n.clientY}}),n=>Math.hypot(n.clientX-t.x,n.clientY-t.y)>=_1};class My{static set(t){const n={x:0,y:0};return es(t).draggable({manualStart:!0,listeners:{start:()=>{n.x=0,n.y=0},move:i=>{n.x+=i.dx,n.y+=i.dy,i.target.style.transform=`translate(${n.x}px, ${n.y}px)`},end:i=>{i.target.remove()}}})}}const A1=()=>es.scope,k1=(e,t)=>e instanceof Node&&(t.contains(e)||!!t.shadowRoot?.contains(e)),S1=(e,t)=>[e.element,e.downEvent?.target,e.downPointer?.target,e._latestPointer?.eventTarget,...(e.pointers??[]).map(n=>n.downTarget)].some(n=>k1(n,t)),E1=e=>{const t=A1(),n=t?.interactions?.list;if(!(!t||!n))for(let i=n.length-1;i>=0;i--){const s=n[i];s.interacting()||!S1(s,e)||(t.fire("interactions:destroy",{interaction:s}),s.destroy(),n.splice(i,1))}};class dg{#e=new Set;get size(){return this.#e.size}add(t){return this.#e.has(t)?!1:(this.#e.add(t),!0)}prune(){for(const t of this.#e)t.isConnected||(es(t).unset(),this.#e.delete(t))}clear(){for(const t of this.#e)es(t).unset();this.#e.clear()}}const M1=e=>({remove:e.ctrlKey||e.metaKey,append:e.shiftKey}),Ry=e=>e==="asc"?"desc":"asc",Hl=(e,t,n,i,s)=>{if(!n)return e.filter(c=>c.column!==t);const a=e.findIndex(c=>c.column===t);return i||s(t)?a<0?[...e,{column:t,order:n}]:e.map((c,h)=>h===a?{column:t,order:n}:c):[...e.filter(c=>c.column!==t&&s(c.column)),{column:t,order:n}]},R1=(e,t,n,i,s)=>{if(n.remove)return Hl(e,t,null,!1,s);const a=e.find(c=>c.column===t)?.order;return Hl(e,t,Ry(a),n.append&&i==="multiple",s)},$y=(e,t)=>e.length===t.length&&e.every((n,i)=>n.column===t[i].column&&n.order===t[i].order),$1=e=>e.map((t,n)=>({column:t,position:n})).filter(({column:t})=>t.sortOrder==="asc"||t.sortOrder==="desc").sort((t,n)=>(t.column.sortIndex??1/0)-(n.column.sortIndex??1/0)||t.position-n.position).map(({column:t})=>({column:t,order:t.sortOrder})),oe=(e,t)=>e.replace(/\{(\w+)\}/g,(n,i)=>t[i]??n),Yw=e=>e.normalize("NFD").replace(/\p{M}/gu,"").toLowerCase().trim(),pg=(e,t)=>{const n=Yw(t);return n?e.flatMap(i=>{if(Yw(fe(i.column)).includes(n))return[i];const s=i.children?pg(i.children,t):[];return s.length?[{...i,children:s}]:[]}):e},Ty=e=>e.reduce((t,n)=>t+1+(n.children?Ty(n.children):0),0),T1=L`
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/>
  </svg>`,z1=L`
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill="currentColor" fill-rule="evenodd" aria-hidden="true">
    <path d="M3 5h18v14H3zM5 7v10h3.5V7zm5.5 0v10h3V7zm5 0v10H19V7z"/>
  </svg>`,zy="column-chooser-reorder-hint",Ly=(e,t)=>{const{translation:n,onVisibleChange:i,onMove:s,onDragStart:a}=t,c=e.length>1;return L`${g1(e,h=>h.id,(h,u)=>{const f=[...h.adaptive?[`column-chooser-title-${h.id}`,`column-chooser-hint-${h.id}`]:[],...c?[zy]:[]].join(" ");return L`
      <li class="column-chooser-item ${h.children?"column-chooser-band":""} ${h.adaptive?"column-chooser-adaptive":""}" data-column-id=${h.id}>
        <div class="column-chooser-row">
          ${c?L`<span
              class="column-chooser-drag-handle"
              aria-hidden="true"
              @pointerdown=${g=>a(g,h.column)}>${T1}</span>`:P}
          <label class="column-chooser-check">
            <input
              type="checkbox"
              .checked=${xn(h.visible)}
              .indeterminate=${xn(!!h.indeterminate)}
              ?disabled=${!h.canToggle}
              title=${h.visible?n.hideColumn:n.showColumn}
              aria-describedby=${W(f||void 0)}
              aria-keyshortcuts=${W(c?"Alt+Shift+ArrowUp Alt+Shift+ArrowDown":void 0)}
              @keydown=${g=>{const v=g.key==="ArrowUp";if(!c||!g.altKey||!g.shiftKey||g.ctrlKey||g.metaKey||!v&&g.key!=="ArrowDown")return;g.preventDefault();const y=e[u+(v?-1:1)];y&&s(h.column,y.column,!v,!0)}}
              @change=${g=>i(h.column,g.target.checked)}>
            <span id="column-chooser-label-${h.id}">${fe(h.column)}</span>
          </label>
        </div>
        ${h.adaptive?L`<span hidden id="column-chooser-title-${h.id}">${h.visible?n.hideColumn:n.showColumn}</span><span
              class="column-chooser-hint"
              id="column-chooser-hint-${h.id}">${n.adaptiveColumnDescription}</span>`:P}
        ${h.children?.length?L`<ul class="column-chooser-list column-chooser-nested" aria-labelledby="column-chooser-label-${h.id}">${Ly(h.children,t)}</ul>`:P}
      </li>`})}`},L1=e=>{const t=e.filter(i=>i.visible).length,n=e.some(i=>i.indeterminate);return{checked:t===e.length&&!n,indeterminate:n||t>0&&t<e.length}},O1=e=>{const{items:t,translation:n,search:i,onSearch:s,onVisibleChangeAll:a,onKeyDown:c,onFocusOut:h}=e,u=pg(t,i),f=L1(u);return L`
    <div
      class="column-chooser"
      part="column-chooser"
      .popover=${"manual"}
      role="dialog"
      aria-label=${n.columnChooser}
      @keydown=${c}
      @focusout=${h}>
      <div class="column-chooser-title" aria-hidden="true">${n.columnChooser}</div>
      <input
        class="column-chooser-search"
        type="search"
        autocomplete="off"
        .value=${xn(i)}
        aria-label=${n.columnChooserSearchLabel}
        placeholder=${n.columnChooserSearchLabel}
        @input=${g=>s(g.target.value)}>
      ${u.length?L`<label class="column-chooser-check column-chooser-all">
            <input
              type="checkbox"
              .checked=${xn(f.checked)}
              .indeterminate=${xn(f.indeterminate)}
              @change=${g=>a(u.map(v=>v.column),g.target.checked)}>
            <span>${n.selectAllColumns}</span>
          </label>`:P}
      <ul class="column-chooser-list">${Ly(u,e)}</ul>
      <span hidden id=${zy}>${n.reorderColumnLabel}</span>
      <div class="column-chooser-drop-hint" aria-hidden="true">${n.hideColumn}</div>
    </div>`},D1=500;class P1{constructor(t){this.#t=new dg,this.#n=!1,this.#o=!1,this.#s=!1,this.#i=null,this.#a=null,this.#r="",this.#l=null,this.onKeyDown=n=>{if(n.key==="Escape"){if(n.preventDefault(),n.stopPropagation(),this.#l){this.#g();return}this.hide(!0)}},this.onFocusOut=n=>{const i=n.relatedTarget;!(i instanceof Node)||this.#h?.contains(i)||this.#d?.contains(i)||this.hide()},this.startDrag=(n,i,s)=>{if(n.button!==0||!n.isPrimary)return;n.preventDefault(),this.#g();const a=n.currentTarget;this.#l={column:i,onDrop:s,handle:a,pointerId:n.pointerId,target:null};try{a.setPointerCapture?.(n.pointerId)}catch{}a.closest("li")?.classList.add("dragging"),a.addEventListener("pointermove",this.#u),a.addEventListener("pointerup",this.#f),a.addEventListener("pointercancel",this.#m),a.addEventListener("lostpointercapture",this.#m)},this.#u=n=>{const i=this.#l;if(i?.pointerId!==n.pointerId)return;const s=i.handle.closest("li"),c=[...s?.parentElement?.children??[]].filter(u=>u instanceof HTMLElement&&u.tagName==="LI");let h=null;for(const u of c){const f=u.getBoundingClientRect();if(n.clientY<f.bottom||u===c[c.length-1]){h=u===s?null:{li:u,after:n.clientY>f.top+f.height/2};break}}this.#v(h)},this.#f=n=>{const i=this.#l;if(i?.pointerId!==n.pointerId)return;const s=i.target,a=s?.li.getAttribute("data-column-id")??void 0;this.#g(),s&&a!==void 0&&i.onDrop(a,s.after)},this.#m=()=>{this.#g()},this.#b=n=>{n.composedPath().some(a=>a instanceof HTMLElement&&(a.classList.contains("column-chooser")||a.classList.contains("column-chooser-button")||a===this.#a||(a.classList.contains("header-column")||a.classList.contains("band-header"))&&this.#e.renderRoot.contains(a)))||this.hide()},this.#e=t,t.addController(this)}#e;#t;#n;#o;#s;#i;#a;#r;#c;#l;get dropzones(){return this.#t.size}get timers(){return(this.#c===void 0?0:1)+(this.#l?1:0)}get open(){return this.#n}get search(){return this.#r}show(t=null){this.#n||(this.#a=t,this.#n=!0,this.#o=!1,this.#r="",this.#e.requestUpdate())}hide(t=!1){this.#n&&(this.#n=!1,this.#s=t,this.#p(),this.#g(),this.#h?.hidePopover?.(),document.removeEventListener("pointerdown",this.#b,!0),this.#e.requestUpdate())}toggle(t=null){this.#n?this.hide(!0):this.show(t)}setSearch(t,n){this.#r=t,this.#e.requestUpdate(),this.#p(),this.#c=setTimeout(()=>{this.#c=void 0,this.#n&&n()},D1)}get#h(){return this.#e.renderRoot.querySelector(".column-chooser")}hostUpdate(){const n=this.#e.renderRoot.activeElement,i=n&&this.#h?.contains(n)&&n.closest(".column-chooser-item")?n.closest("li")?.querySelector('[id^="column-chooser-label-"]')?.id:void 0;this.#i=i?{labelId:i}:null}get#d(){return(this.#a?.isConnected?this.#a:null)??this.#e.renderRoot.querySelector(".column-chooser-button")??this.#e.renderRoot.querySelector(".toolbar-more-button")}hostUpdated(){this.#t.prune();const t=this.#i;if(this.#i=null,this.#n&&t&&!this.#e.renderRoot.activeElement&&this.#e.renderRoot.querySelector(`#${t.labelId}`)?.closest("li")?.querySelector("input")?.focus(),!this.#n){this.#s&&(this.#s=!1,this.#d?.focus());return}const n=this.#h;!n||this.#o||(this.#o=!0,typeof n.showPopover=="function"&&!n.matches(":popover-open")&&n.showPopover(),this.#w(n),this.#x(n),document.addEventListener("pointerdown",this.#b,!0),n.querySelector(".column-chooser-search, input:not([disabled]), button")?.focus())}hostDisconnected(){this.#a=null,this.#t.clear(),this.#p(),this.#g(),document.removeEventListener("pointerdown",this.#b,!0),this.#n=!1,this.#o=!1}#p(){clearTimeout(this.#c),this.#c=void 0}#u;#f;#m;#v(t){const n=this.#l;n&&(n.target?.li.classList.remove("drop-before","drop-after"),n.target=t,t?.li.classList.add(t.after?"drop-after":"drop-before"))}#g(){const t=this.#l;t&&(this.#l=null,t.target?.li.classList.remove("drop-before","drop-after"),t.handle.closest("li")?.classList.remove("dragging"),t.handle.removeEventListener("pointermove",this.#u),t.handle.removeEventListener("pointerup",this.#f),t.handle.removeEventListener("pointercancel",this.#m),t.handle.removeEventListener("lostpointercapture",this.#m),t.handle.hasPointerCapture?.(t.pointerId)&&t.handle.releasePointerCapture(t.pointerId))}#w(t){const i=(this.#d??this.#e).getBoundingClientRect(),s=t.offsetWidth,a=t.offsetHeight,c=8,h=document.documentElement.clientWidth,u=document.documentElement.clientHeight,f=this.#e._isRtl()?i.left:i.right-s,g=i.bottom+4;t.style.top=`${Math.round(Math.max(c,Math.min(g,u-a-c)))}px`,t.style.left=`${Math.round(Math.max(c,Math.min(f,h-s-c)))}px`}#b;#x(t){this.#t.add(t)&&es(t).dropzone({accept:".move-container",ondragenter:n=>{this.#y(n)&&t.classList.add("drop-target")},ondragleave:()=>t.classList.remove("drop-target"),ondropdeactivate:()=>t.classList.remove("drop-target"),ondrop:n=>{const i=this.#y(n);i&&this.#e._userSetVisible(i,!1)}})}#y(t){const n=this.#e._nativeColumnMap.get(t.draggable.target);return n&&this.#e._isRegularColumn(n)?n:void 0}}const I1=(e,t)=>oe(e.columnChooserSearchAnnouncement,{count:String(t)}),ta={Before:0,After:1},fg=e=>getComputedStyle(e).direction==="rtl",au=e=>{const t=e.target,n=t.getBoundingClientRect();return(e.dragEvent.clientX-n.left)/n.width>.5!==fg(t)?ta.After:ta.Before},F1=(e,t)=>{const n=e.getBoundingClientRect();return t===ta.After!==fg(e)?n.right:n.left};class N1{#e=new dg;#t;constructor(t){this.#t=t}get size(){return this.#e.size}prune(){this.#e.prune()}attach(t){if(!t||!this.#e.add(t))return;const n=My.set(t),i=Ey(n);n.on("move",s=>{const a=s.interaction;if(!(a.pointerIsDown&&!a.interacting())||!i(s))return;this.#t._dragStarted();const c=s.currentTarget,h=s.currentTarget.cloneNode(!0),u=c.getBoundingClientRect(),f=getComputedStyle(c);Object.assign(h.style,{display:"flex",alignItems:f.verticalAlign==="bottom"?"flex-end":"center",justifyContent:f.textAlign==="center"?"center":f.textAlign==="end"||f.textAlign==="right"?"flex-end":"flex-start",boxSizing:"border-box",width:`${u.width}px`,minWidth:`${u.width}px`,maxWidth:`${u.width}px`,height:`${u.height}px`,padding:f.padding,font:f.font,color:f.color,overflow:"hidden",whiteSpace:f.whiteSpace});const g=document.createElement("div");g.style.top=u.top+"px",g.style.left=u.left+"px",g.classList.add("move-container"),g.setAttribute("aria-hidden","true"),[h,...h.querySelectorAll("[tabindex], button, input, a[href]")].forEach(v=>v.setAttribute("tabindex","-1")),g.appendChild(h),this.#t._containerRef.value.appendChild(g),a.start({name:"drag"},s.interactable,g)}),es(t).dropzone({accept:".move-container",ondragenter:s=>{this.#n(s)&&this.#t._containerRef.value?.classList.add("drop-target")},ondragleave:()=>{this.#t._containerRef.value?.classList.remove("drop-target")},ondropdeactivate:()=>{this.#t._containerRef.value?.classList.remove("drop-target")},ondropmove:s=>{if(!this.#n(s)){this.#t._containerRef.value?.classList.remove("drop-target");return}this.#t._containerRef.value?.classList.add("drop-target");const a=this.#t._containerRef.value,c=a.getBoundingClientRect(),h=au(s),u=F1(s.target,h)-c.left;a.style.setProperty("--_drop-indicator-left",`${Math.floor(u)}px`)},ondrop:s=>{const a=this.#t._nativeColumnMap.get(s.target),c=this.#t._nativeColumnMap.get(s.draggable.target);if(!this.#n(s)||!a||!c)return;const h=au(s);let u=this.#t._siblingIndexOf(a);h===ta.After&&u++,this.#t._userMoveColumn(c,u)}})}#n(t){if(t.target===t.draggable.target)return!1;const n=this.#t._nativeColumnMap.get(t.target),i=this.#t._nativeColumnMap.get(t.draggable.target);return!n||!i||!this.#t._isRegularColumn(i)?!0:this.#t._canDropColumn(i,n)}detach(){this.#e.clear()}}const W1={header:new Set(["sortColumnAscending","sortColumnDescending","clearColumnSorting","fixColumn","fixColumnStart","fixColumnEnd","unfixColumn","autoSizeColumn","autoSizeAllColumns","increaseColumnWidth","decreaseColumnWidth","moveLeft","moveRight","groupColumn","openColumnChooser","resetColumns"]),"group-panel":new Set(["ungroupColumn","moveLeft","moveRight","ungroupAll","expandAllGroups","collapseAllGroups"]),row:new Set(["copySelectedCells","paste","extendSelectionToCell","addCellToSelection","copyCell","copySelectedRows","exportSelectedCsv","exportSelectedXlsx","exportSelectedPdf","editRow","editCell","removeRow","restoreRow","expandRow","collapseRow","expandNode","collapseNode","addChildRow"]),"group-row":new Set(["expandGroup","collapseGroup","expandAllGroups","collapseAllGroups","ungroupColumn"])},Oy=new Set(["fixColumnStart","fixColumnEnd","unfixColumn"]),B1=500,G1=10,Jw=24;class K1{constructor(t){this.#n=null,this.#o=!1,this.#s=-1/0,this.onClickCapture=n=>{this.#o&&(this.#o=!1,n.preventDefault(),n.stopPropagation())},this.#i=n=>{const i=this.#t;i?.pointerId===n.pointerId&&Math.hypot(n.clientX-i.x,n.clientY-i.y)>G1&&this.#r()},this.#a=()=>{this.#r()},t.addController(this)}#e;#t;#n;#o;#s;get timers(){return this.#e===void 0?0:1}get justFired(){return performance.now()-this.#s<1e3}start(t,n){if(this.#o=!1,t.pointerType!=="touch"||!t.isPrimary){t.pointerType==="touch"&&this.cancel();return}this.cancel();const i=t.composedPath(),s=t.currentTarget;this.#t={x:t.clientX,y:t.clientY,pointerId:t.pointerId},this.#n=s,s?.addEventListener("pointermove",this.#i),s?.addEventListener("pointerup",this.#a),s?.addEventListener("pointercancel",this.#a),s?.addEventListener("scroll",this.#a,!0),this.#e=setTimeout(()=>{const a=this.#t;this.#r(),n(i,a.x+Jw,a.y+Jw)&&(this.#o=!0,this.#s=performance.now())},B1)}cancel(){this.#r()}#i;#a;#r(){clearTimeout(this.#e),this.#e=void 0,this.#t=void 0;const t=this.#n;this.#n=null,t?.removeEventListener("pointermove",this.#i),t?.removeEventListener("pointerup",this.#a),t?.removeEventListener("pointercancel",this.#a),t?.removeEventListener("scroll",this.#a,!0)}hostDisconnected(){this.#r(),this.#o=!1}}class za{constructor(t,n){this.text=t,this.kind=n}}const Qw=(e,t=!0)=>e==null||typeof e=="string"&&(t?e.trim()==="":e==="")||typeof e=="number"&&Number.isNaN(e),q1=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Lh=new Map,j1=e=>{let t=Lh.get(e);if(t===void 0){try{t=new RegExp(`^(?:${e})$`,"u")}catch{console.error(`<u-grid>: invalid validation pattern "${e}"; the rule is ignored.`),t=null}Lh.size>64&&Lh.clear(),Lh.set(e,t)}return t},H1=(e,t)=>{if(typeof e=="string"){const n=j1(e);return!n||n.test(t)}return e.lastIndex=0,e.test(t)},Cf=e=>{if(e instanceof Date)return e.getTime();if(typeof e=="string"){const t=Date.parse(e);return Number.isNaN(t)?Number(e):t}return Number(e)},To=(e,t,n={})=>({rule:e,message:e.message||oe(t,n)}),U1=(e,t,n,i)=>{if(e.type==="required")return Qw(t,e.trim??!0)?To(e,n.validationRequired):null;if(Qw(t,!1))return null;switch(e.type){case"range":{const s=Cf(t),a=e.min!==void 0&&e.min!==null&&s<Cf(e.min),c=e.max!==void 0&&e.max!==null&&s>Cf(e.max);if(!a&&!c&&!Number.isNaN(s))return null;const h={min:e.min===void 0||e.min===null?"":i(e.min),max:e.max===void 0||e.max===null?"":i(e.max)},u=h.min&&h.max?n.validationRange:h.min?n.validationRangeMin:n.validationRangeMax;return To(e,u,h)}case"stringLength":{const s=String(t).length;if((e.min===void 0||s>=e.min)&&(e.max===void 0||s<=e.max))return null;const a={min:e.min===void 0?"":String(e.min),max:e.max===void 0?"":String(e.max)},c=a.min&&a.max?n.validationStringLength:a.min?n.validationStringLengthMin:n.validationStringLengthMax;return To(e,c,a)}case"pattern":return H1(e.pattern,String(t))?null:To(e,n.validationPattern);case"email":return q1.test(String(t))?null:To(e,n.validationEmail);default:return null}},ex=(e,t,n)=>t===!0?null:typeof t=="string"&&t?{rule:e,message:t}:To(e,n.validationInvalid),V1=e=>!!e&&typeof e.then=="function",Dy=(e,t,n,i,s)=>{const{value:a}=t;if(a instanceof za)return{rule:a.kind,message:a.kind==="number"?n.validationNumber:n.validationDate};const c=e??[];for(let h=0;h<c.length;h++){const u=c[h];if(!u||typeof u!="object")continue;if(u.type!=="custom"){const v=U1(u,a,n,i);if(v)return v;continue}if(typeof u.validate!="function")continue;let f;try{f=u.validate(t,s)}catch(v){return console.error("<u-grid>: a custom validation rule threw.",v),To(u,n.validationInvalid)}if(V1(f)){const v=c.slice(h+1);return Promise.resolve(f).then(y=>s.aborted?null:ex(u,y,n)??Dy(v,t,n,i,s),y=>s.aborted?null:(console.error("<u-grid>: a custom validation rule rejected.",y),To(u,n.validationInvalid)))}const g=ex(u,f,n);if(g)return g}return null},lu=e=>{if(!e||typeof e!="object"||Array.isArray(e)||e instanceof Date)return!1;const t=Object.getPrototypeOf(e);return t===Object.prototype||t===null},mg=(e,t,n)=>{const i=t.split(".");let s=e;for(let a=0;a<i.length-1;a++){const c=i[a],h=s[c];lu(h)||(s[c]={}),s=s[c]}s[i[i.length-1]]=n},Ti=e=>{if(!lu(e))return e;const t={};for(const n of Object.keys(e))t[n]=Ti(e[n]);return t},Py=(e,t)=>{if(!e||typeof e!="object")return Ti(t);const n=Object.assign(Object.create(Object.getPrototypeOf(e)),e);for(const i of Object.keys(t)){const s=t[i],a=n[i];n[i]=lu(s)&&lu(a)?Py(a,s):Ti(s)}return n},Oh=new Map,Iy=e=>{const t=e??"";let n=Oh.get(t);if(!n){const i=new Intl.NumberFormat(e||void 0).formatToParts(11111.5);n={decimal:i.find(s=>s.type==="decimal")?.value??".",group:i.find(s=>s.type==="group")?.value??","},Oh.size>32&&Oh.clear(),Oh.set(t,n)}return n},Z1=(e,t)=>{if(typeof e!="number"||!Number.isFinite(e))return e==null?"":String(e);const{decimal:n}=Iy(t),i=String(e);return n==="."||/e/i.test(i)?i:i.replace(".",n)},_f=/\s/g,If=(e,t)=>{const n=e.replace(_f,"");if(!n)return null;const{decimal:i,group:s}=Iy(t);let a=n.replace(/[−‒–]/g,"-");i!=="."?a.includes(i)?a=a.split(s.replace(_f,"")||"\0").join("").replace(i,"."):s==="."&&/^-?\d{1,3}(\.\d{3})+$/.test(a)&&(a=a.replace(/\./g,"")):s&&(a=a.split(s.replace(_f,"")||"\0").join(""));const c=/^[-+]?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?$/i.test(a)?Number(a):NaN;return Number.isFinite(c)?c:new za(e,"number")},ul=(e,t=2)=>String(e).padStart(t,"0"),X1=(e,t)=>{if(e==null||e==="")return"";const n=e instanceof Date?e:new Date(e);if(Number.isNaN(n.getTime()))return"";const i=`${ul(n.getFullYear(),4)}-${ul(n.getMonth()+1)}-${ul(n.getDate())}`;return t?`${i}T${ul(n.getHours())}:${ul(n.getMinutes())}`:i},Fy=(e,t,n)=>{if(!e)return null;const i=/^(\d{4,})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?$/.exec(e);if(!i)return new za(e,"date");const[,s,a,c,h="0",u="0"]=i,f=new Date(Number(s),Number(a)-1,Number(c),n?Number(h):0,n?Number(u):0);return typeof t=="number"?f.getTime():typeof t=="string"?t.length<=10&&!n?e:f.toISOString():f},Ny=e=>e==="number"||e==="date"||e==="datetime"||e==="boolean"?e:"text",Y1=()=>Object.freeze({});class J1{constructor(){this.#e=new Map,this.version=0}#e;get size(){return this.#e.size}get(t){return this.#e.get(t)}has(t){return this.#e.has(t)}values(){return this.#e.values()}ensure(t,n){let i=this.#e.get(t);return i||(i={type:"update",rowKey:t,item:n,data:{},modified:new Set,unparsed:new Map,errors:new Map,errorRules:new Map},this.#e.set(t,i)),i}add(t,n,i){const s={type:"add",rowKey:t,item:{},data:n,modified:new Set,unparsed:new Map,errors:new Map,errorRules:new Map};return i!==void 0&&(s.parentKey=i),this.#e.set(t,s),this.touch(),s}delete(t){const n=this.#e.delete(t);return n&&this.touch(),n}clear(){this.#e.size&&(this.#e.clear(),this.touch())}rekey(t,n){const i=this.#e.get(t);i&&(this.#e.delete(t),i.rowKey=n,this.#e.set(n,i),this.touch())}touch(t){t&&(t.merged=void 0),this.version++}mergedOf(t){return t.merged===void 0&&(t.merged=t.type==="add"?Ti(t.data):Object.keys(t.data).length?Py(t.item,t.data):t.item),t.merged}prune(t){t.type==="update"&&!Object.keys(t.data).length&&!t.unparsed.size&&!t.errors.size&&!t.rowError&&this.delete(t.rowKey)}}const na=e=>{if(e.type==="remove")return{type:"remove",rowKey:e.rowKey,item:e.item};if(e.type==="add"){const t={type:"add",rowKey:e.rowKey,data:Ti(e.data)};return e.parentKey!==void 0&&(t.parentKey=e.parentKey),t}return{type:"update",rowKey:e.rowKey,data:Ti(e.data),item:e.item}},Q1=32,cu=new ql(Q1),gg=(e,t=!0)=>{const n=`${t?"n":"t"}:${e??""}`;let i=cu.get(n);if(!i){try{i=new Intl.Collator(e,{numeric:t})}catch{i=new Intl.Collator(void 0,{numeric:t})}cu.set(n,i)}return i},eM=e=>{const t=`b:${e??""}`;let n=cu.get(t);if(!n){try{n=new Intl.Collator(e,{numeric:!0,sensitivity:"base"})}catch{n=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"})}cu.set(t,n)}return n},vg=(e,t)=>e<t?-1:e>t?1:0,tx=e=>e==null||typeof e=="number"&&Number.isNaN(e)||e instanceof Date&&Number.isNaN(e.getTime()),nx=e=>typeof e=="number"||typeof e=="bigint"?0:e instanceof Date?1:typeof e=="boolean"?2:3,tM=e=>(t,n)=>{const i=tx(t),s=tx(n);if(i||s)return i===s?0:i?-1:1;const a=nx(t)-nx(n);if(a!==0)return a;if(typeof t=="number"||typeof t=="bigint")return t<n?-1:t>n?1:0;if(t instanceof Date)return t.getTime()-n.getTime();if(typeof t=="boolean")return Number(t)-Number(n);const c=String(t),h=String(n),u=e.compare(c,h);return u!==0?u:vg(c,h)},Dd=(e,t)=>{const n=gg(e),i=tM(n);return t?(s,a)=>i(Ri(s,t),Ri(a,t)):i},Wy=64,Ff=/[0-9]+/g,By=/[^\P{Nd}0-9]/u,nM=e=>{let t=0,n=0;for(const i of e)if(typeof i=="string"){if(By.test(i))return;n++;for(const s of i.match(Ff)??[])t=Math.max(t,s.length)}if(!(n<2||t>Wy))return e.map(i=>typeof i!="string"?void 0:t?i.replace(Ff,s=>s.padStart(t,"0")):i)},Gy=(e,t,n)=>{const i=e.length,s=65536,a=new Int32Array(4*s);let c=e,h=new Uint32Array(i),u=new Uint32Array(i);for(let y=0;y<i;y++){const _=c[y],E=t[_],$=n[_];h[y]=E,u[y]=$,a[$&65535]++,a[s+($>>>16)]++,a[2*s+(E&65535)]++,a[3*s+(E>>>16)]++}let f=new Int32Array(i),g=new Uint32Array(i),v=new Uint32Array(i);for(let y=0;y<4;y++){const _=y*s,E=y%2?16:0,$=y<2?u:h;if(a[_+($[0]>>>E&65535)]===i)continue;let z=0;for(let D=0;D<s;D++){const I=a[_+D];a[_+D]=z,z+=I}for(let D=0;D<i;D++){const I=a[_+($[D]>>>E&65535)]++;f[I]=c[D],g[I]=h[D],v[I]=u[D]}[c,f]=[f,c],[h,g]=[g,h],[u,v]=[v,u]}return c},Ky=new Float64Array(1),ix=new Uint32Array(Ky.buffer),ox=new Uint8Array(new Uint16Array([1]).buffer)[0]===1?1:0,iM=(e,t,n,i)=>{Ky[0]=e===0?0:e;let s=ix[ox],a=ix[1-ox];s&2147483648?(s=~s>>>0,a=~a>>>0):s=(s|2147483648)>>>0,t[i]=s,n[i]=a},oM=e=>{const t=e.length,n=new Uint32Array(t),i=new Uint32Array(t),s=new Int32Array(t),a=new Int32Array(t);let c=0,h=!1,u=!1;for(let v=0;v<t;v++){const y=e[v];let _;if(typeof y=="number")_=y,h=!0;else if(y instanceof Date)_=y.getTime(),u=!0;else{if(y==null)continue;return}Number.isNaN(_)||(iM(_,n,i,v),a[c++]=v)}if(h&&u)return;if(!c)return s;const f=Gy(a.subarray(0,c),n,i);let g=1;for(let v=0;v<f.length;v++){const y=f[v];if(v){const _=f[v-1];(n[y]!==n[_]||i[y]!==i[_])&&g++}s[y]=g}return s},Dr=" 0123456789abcdefghijklmnopqrstuvwxyz",Bh=(()=>{const e=new Int8Array(128).fill(-1);for(let t=0;t<Dr.length;t++)e[Dr.charCodeAt(t)]=t+1,e[Dr.toUpperCase().charCodeAt(t)]=t+1;return e})(),Nf=Dr.length+1,Sl=10,sM=(e,t,n)=>{for(let i=0;i<2;i++){let s=0;for(let a=i*Sl;a<(i+1)*Sl;a++){let c=0;if(a<e.length){const h=e.charCodeAt(a);if(c=h<128?Bh[h]:-1,c<0)return!1}s=s*Nf+c}t[n*2+i]=s}return!0},sx=new WeakMap,qy=e=>{let t=sx.get(e);if(t===void 0){const n=[];for(const i of Dr){n.push(i);for(const s of Dr)n.push(i+s)}t=n.every((i,s)=>s===0||e.compare(n[s-1],i)<0&&e.compare(n[s-1].toUpperCase(),i)<0&&e.compare(n[s-1],i.toUpperCase())<0),sx.set(e,t)}return t},rx=2**32,jy=(e,t,n)=>{const i=new Uint32Array(t),s=new Uint32Array(t);let a=new Int32Array(t);for(let c=0;c<t;c++)a[c]=c;for(const c of[1,0]){for(let h=0;h<t;h++){const u=e[h*2+c];i[h]=Math.floor(u/rx),s[h]=u%rx}a=Gy(a,i,s)}for(let c=0;c<t;){let h=c+1;const u=a[c];for(;h<t&&e[a[h]*2]===e[u*2]&&e[a[h]*2+1]===e[u*2+1];)h++;h-c>1&&a.subarray(c,h).sort(n),c=h}return a},Hy=64,rM=.5,aM=1024,lM=e=>{const t=Math.max(1,Math.floor(e.length/aM)),n=new Set;let i=0;for(let s=0;s<e.length;s+=t)n.add(e[s]),i++;return n.size>i*rM},Uy=48,cM=57,Af=e=>e>=Uy&&e<=cM,hM=(e,t)=>{const n=e.length;if(n<Hy||!e.every(z=>typeof z=="string")||!lM(e))return;const i=e,s=gg(t,!1);if(!qy(s))return;let a=0;for(const z of i){let D=0;for(let I=0;I<z.length;I++){const j=z.charCodeAt(I);if(Af(j)){D++;continue}if(D>a&&(a=D),D=0,j>=128&&By.test(z[I]))return}D>a&&(a=D)}if(a>Wy)return;const c=new Float64Array(n*2),h=Sl*2,u=new Int8Array(h),f=Bh[Uy];for(let z=0;z<n;z++){const D=i[z];let I=0,j=0;for(;I<h&&j<D.length;){const ge=D.charCodeAt(j);if(Af(ge)){let ee=j+1;for(;ee<D.length&&Af(D.charCodeAt(ee));)ee++;for(let We=ee-j;We<a&&I<h;We++)u[I++]=f;for(;j<ee&&I<h;j++)u[I++]=Bh[D.charCodeAt(j)];j=ee;continue}const F=ge<128?Bh[ge]:-1;if(F<0)return;u[I++]=F,j++}u.fill(0,I);let X=0,Q=0;for(let ge=0;ge<Sl;ge++)X=X*Nf+u[ge],Q=Q*Nf+u[ge+Sl];c[z*2]=X,c[z*2+1]=Q}const g=[],v=z=>g[z]??=a?i[z].replace(Ff,D=>D.padStart(a,"0")):i[z],y=(z,D)=>{const I=c[z*2]-c[D*2]||c[z*2+1]-c[D*2+1];return I||i[z]===i[D]?I:s.compare(v(z),v(D))||vg(i[z],i[D])},_=jy(c,n,y),E=new Int32Array(n);let $=0;for(let z=0;z<n;z++)z&&y(_[z-1],_[z])!==0&&$++,E[_[z]]=$;return E},uM=(e,t,n)=>{if(!n||n==="number"){const $=oM(e);if($)return $}if(!n||n==="string"){const $=hM(e,t);if($)return $}const i=Dd(t),s=new Map,a=[],c=new Int32Array(e.length);for(let $=0;$<e.length;$++){const z=e[$];let D=s.get(z);D===void 0&&(D=a.length,s.set(z,D),a.push(z)),c[$]=D}const h=n?a.map($=>Ri($,n)):a,u=h.length,f=nM(h);let g=($,z)=>i(h[$],h[z]),v;if(f){const $=gg(t,!1);if(g=(z,D)=>{const I=f[z],j=f[D];return I===void 0||j===void 0?i(h[z],h[D]):$.compare(I,j)||vg(h[z],h[D])},u>=Hy&&qy($)){const z=new Float64Array(u*2);if(f.every((D,I)=>D!==void 0&&sM(D,z,I))){const D=g;g=(I,j)=>z[I*2]-z[j*2]||z[I*2+1]-z[j*2+1]||D(I,j),v=jy(z,u,g)}}}v??=Int32Array.from(h.keys()).sort(g);const y=new Int32Array(u);let _=0;for(let $=0;$<v.length;$++)$&&g(v[$-1],v[$])!==0&&_++,y[v[$]]=_;const E=new Int32Array(e.length);for(let $=0;$<e.length;$++)E[$]=y[c[$]];return E},dM=/\p{M}/gu,pM=/[^\t\n\r -~]/u,La=e=>pM.test(e)?e.normalize("NFD").replace(dM,"").toLowerCase().replace(/ς/g,"σ"):e.toLowerCase();let xr;const fM=[[65,90],[192,591],[880,1279],[7680,8191]],mM=()=>{if(xr)return xr;xr=new Map;for(const[e,t]of fM)for(let n=e;n<=t;n++){const i=String.fromCodePoint(n),s=La(i);s.length!==1||s===i||xr.set(s,(xr.get(s)??"")+i)}return xr},gM=e=>/[\\\]^-]/.test(e)?`\\${e}`:e,vM=e=>/[.*+?^${}()|[\]\\/-]/.test(e)?`\\${e}`:e,Pd=(e,t="contains")=>{const n=La(e);if(!n)return null;const i=mM();let s="";for(const a of n){const c=i.get(a),h=a.toUpperCase(),u=h!==a&&h.length===1?a+h:a;s+=c||u.length>1?`[${[...new Set(u+(c??""))].map(gM).join("")}]`:vM(a),s+="\\p{M}*"}return(t==="startswith"||t==="equals")&&(s=`^${s}`),(t==="endswith"||t==="equals")&&(s=`${s}$`),new RegExp(s,"u")},bM=(e,t)=>{if(!t||!e)return[e];const n=new RegExp(t.source,"gu"),i=[];let s=0;for(const a of e.matchAll(n)){if(!a[0])break;i.push(e.slice(s,a.index),a[0]),s=a.index+a[0].length}return i.push(e.slice(s)),i},wM=["contains","notcontains","startswith","endswith","=","<>","<",">","<=",">=","between","anyof","noneof","isblank","isnotblank"],xM=new Set(wM),Nc=e=>typeof e=="string"&&xM.has(e);class Ul extends TypeError{}const bg=e=>e==="and"||e==="or",Wc=e=>Array.isArray(e)&&e.length>=2&&e.length<=3&&typeof e[0]=="string"&&e[0]!=="!"&&!bg(e[1])&&(e.length===3?Nc(e[1]):!Array.isArray(e[1])),Id=e=>e.length===2&&!Nc(e[1])?[e[0],"=",e[1]]:[e[0],e[1],e[2]],Bt=e=>e==null||e===""||typeof e=="number"&&Number.isNaN(e)||e instanceof Date&&Number.isNaN(e.getTime()),yM=/^\d{4}-\d{2}-\d{2}$/,Vy=e=>e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate(),CM=e=>{const t=pr(e);return t===void 0?void 0:Number(t)},Zy=e=>go(e)?.getTime(),ax=e=>{const t=go(e);return t?Vy(t):void 0},_M=e=>typeof e=="boolean"?e:e==="true"?!0:e==="false"?!1:void 0,wg=(e,t)=>{switch(e){case"number":return CM;case"date":return ax;case"datetime":return typeof t=="string"&&yM.test(t)?ax:Zy;case"boolean":return _M;default:return}},xg=e=>{const t=new Map;return n=>{if(typeof n!="string")return e(n);if(t.has(n))return t.get(n);const i=e(n);return t.size<Xy&&t.set(n,i),i}},Xy=4096,Yy=e=>{if(e==="number")return t=>pr(t)!==void 0;if(e==="date"||e==="datetime"){const t=xg(Zy);return n=>t(n)!==void 0}return e==="boolean"?t=>typeof t=="boolean":void 0},AM=(e,t,n)=>{const i=Yy(n);if(!i)return!1;const s=ao(t);for(const a of e){const c=s(a);if(!Bt(c)&&!i(c))return!1}return!0},Oa=(e,t)=>{let n=t.readers.get(e);return n||(n=ao(e),t.readers.set(e,n)),n},kM=(e,t)=>t.find(n=>n.path===e)??t.find(n=>!n.path&&n.name===e),hu=e=>e.path||e.name||void 0,SM=(e,t)=>{const{context:n}=t,i=n.resolve?n.resolve(e):kM(e,n.columns);if(i)return i;let s=t.synthetic.get(e);return s||(s={path:e},t.synthetic.set(e,s)),s},Jy=(e,t,n,i)=>{const s=Oa(e,t),{context:a}=t,c=a.dataTypeOf(e),h=!!e.displayValue||typeof e.format=="function";if((c==="string"||c===void 0)&&!h&&!e.format){const v=new Map;let y=0,_=!0;return E=>{const $=s(E);if(typeof $!="string")return n(Bt($)?e.emptyText??"":xt($));if(!_)return n($);y++;let z=v.get($);return z===void 0&&(z=n($),v.size<Xy?v.set($,z):y<v.size*2&&(_=!1)),z}}const u=i===void 0||h?void 0:a.alphabetOf?.(e),f=Yy(c);if(u&&f&&!Array.from(La(i)).every(v=>u.has(v)))return a.allConvert?.(e)?Os:v=>{const y=s(v);return Bt(y)?n(e.emptyText??""):f(y)?!1:n(a.textOf(v,e))};if(h)return v=>n(a.textOf(v,e));const g=new Map;return v=>{const y=s(v),_=y instanceof Date?y.getTime():y;if(typeof _=="object"&&_!==null)return n(a.textOf(v,e));let E=g.get(_);return E===void 0&&(E=n(a.textOf(v,e)),g.set(_,E)),E}},EM={contains:"contains",notcontains:"contains",startswith:"startswith",endswith:"endswith"},Vt=()=>!0,Os=()=>!1,MM=e=>t=>{for(const n of e)if(!n(t))return!1;return!0},RM=e=>t=>{for(const n of e)if(n(t))return!0;return!1},$M=(e,t,n,i)=>{const s=Bt(n)?null:Pd(xt(n),EM[t]);if(!s)return Vt;const a=t==="notcontains",c=xt(n);return Jy(e,i,h=>s.test(h)!==a,a?void 0:c)},lx=(e,t,n)=>{const i=Oa(e,n);if(Bt(t))return u=>Bt(i(u));const s=n.context.dataTypeOf(e),a=wg(s,t),c=a&&xg(a);if(!c){const u=Pd(xt(t),"equals");return u?Jy(e,n,f=>u.test(f)):Vt}const h=c(t);return h===void 0?()=>!1:u=>c(i(u))===h},Wf=(e,t,n,i)=>{const s=Oa(e,i);if(Bt(n))return Vt;const{context:a}=i,c=a.dataTypeOf(e),h=wg(c,n),u=h&&xg(h);let f;if(u){const g=u(n);if(g===void 0)return()=>!1;f=v=>{const y=u(s(v));return y===void 0?void 0:Number(y)-Number(g)}}else{const g=eM(a.language),v=xt(n);f=y=>{const _=s(y);return Bt(_)?void 0:g.compare(xt(_),v)}}switch(t){case"<":return g=>(f(g)??0)<0;case"<=":return g=>{const v=f(g);return v!==void 0&&v<=0};case">":return g=>(f(g)??0)>0;default:return g=>{const v=f(g);return v!==void 0&&v>=0}}},TM=(e,t,n)=>{const i=Oa(e,n),[s,a]=Array.isArray(t)?t:[],c=Bt(s)?Vt:Wf(e,">=",s,n),h=Bt(a)?Vt:Wf(e,"<=",a,n);return c===Vt&&h===Vt?Vt:u=>!Bt(i(u))&&c(u)&&h(u)},zM=(e,t,n,i)=>{const s=Oa(e,i),a=Array.isArray(n)?n:[],c=i.context.dataTypeOf(e),h=a.some(Bt),u=new Set,f=new Set;for(const E of a){if(Bt(E))continue;const $=wg(c,E)??(D=>La(xt(D))),z=$(E);z!==void 0&&(u.add(z),f.add($))}const g=[...f],v=new Map,y=E=>{if(Bt(E))return h;const $=typeof E!="object",z=$?v.get(E):void 0;if(z!==void 0)return z;const D=g.some(I=>u.has(I(E)));return $&&v.set(E,D),D},_=t==="noneof";return E=>y(s(E))!==_},LM=(e,t)=>{const[n,i,s]=Id(e);if(!Nc(i))throw new Ul(`Unknown filter operation "${String(i)}".`);const a=SM(n,t),c=Oa(a,t);switch(i){case"contains":case"notcontains":case"startswith":case"endswith":return $M(a,i,s,t);case"=":return lx(a,s,t);case"<>":{const h=lx(a,s,t);return u=>!h(u)}case"<":case"<=":case">":case">=":return Wf(a,i,s,t);case"between":return TM(a,s,t);case"anyof":case"noneof":return zM(a,i,s,t);case"isblank":return h=>Bt(c(h));case"isnotblank":return h=>!Bt(c(h))}},OM=(e,t)=>{const n=[[]];let i=!0;for(const c of e){if(bg(c)){if(i)throw new Ul(`Misplaced "${c}" in filter expression.`);c==="or"&&n.push([]),i=!0;continue}n[n.length-1].push(yg(c,t)),i=!1}if(i&&e.length)throw new Ul("Filter expression ends with a connector.");const s=n.filter(c=>c.length).map(c=>c.filter(h=>h!==Vt)).map(c=>c.includes(Os)?Os:c.length===1?c[0]:c.length===0?Vt:MM(c));if(!s.length||s.includes(Vt))return Vt;const a=s.filter(c=>c!==Os);return a.length?a.length===1?a[0]:RM(a):Os},yg=(e,t)=>{if(!Array.isArray(e))throw new Ul("Filter expression must be an array.");if(e[0]==="!"){const n=yg(e[1],t);return n===Vt?Os:n===Os?Vt:i=>!n(i)}return Wc(e)?LM(e,t):OM(e,t)},Qy=(e,t)=>{if(!e||Array.isArray(e)&&!e.length)return null;const n=yg(e,{context:t,synthetic:new Map,readers:new Map});return n===Vt?null:n},uu=(...e)=>{const t=e.filter(n=>!!n&&n.length>0);return t.length<2?t[0]??null:t.flatMap((n,i)=>i?["and",n]:[n])},cx=(e,t,n=new Uint8Array(e.length),i=0,s=e.length)=>{for(let a=i;a<s;a++)n[a]=t(e[a])?1:0;return n},e0=(e,t,n)=>{if(!n){if(!t)return e;const s=new Array(t.length);for(let a=0;a<t.length;a++)s[a]=e[t[a]];return s}const i=[];if(t)for(const s of t)n[s]&&i.push(e[s]);else for(let s=0;s<e.length;s++)n[s]&&i.push(e[s]);return i},DM=(e,t)=>t?e.filter(n=>t(n)):e,Bf=(e,t)=>{const n=e.trim()?t.flatMap(i=>{const s=hu(i);return s?[[s,"contains",e]]:[]}):[];return n.length?n.length===1?n[0]:n.flatMap((i,s)=>s?["or",i]:[i]):null},Cg=e=>{if(!e?.length)return[];if(Wc(e)||e[0]==="!")return[e];const t=e;return t.includes("or")?[e]:t.filter(n=>!bg(n))},_g=(e,t,n)=>t.path?e===t.path:!!t.name&&e===t.name&&n(e)===t,t0=e=>e==="anyof"||e==="noneof"?"header":"row",du=(e,t,n,i)=>{for(const s of Cg(e)){if(!Wc(s))continue;const[a,c,h]=Id(s);if(Nc(c)&&_g(a,t,i)&&t0(c)===n)return[c,h]}},n0=(e,t,n)=>{const i=du(e,t,"header",n);if(i)return{condition:i,adopted:!1};const s=du(e,t,"row",n);if(s&&(s[0]==="="||s[0]==="<>")&&!Array.isArray(s[1]))return{condition:[s[0]==="="?"anyof":"noneof",[s[1]]],adopted:!0}},PM=(e,t,n)=>{const i=n0(e,t,n)?.adopted,s=Gf(e,t,"header",null,n);return i?Gf(s,t,"row",null,n):s},Vl=(e,t,n)=>Cg(e).some(i=>Wc(i)&&_g(Id(i)[0],t,n)),Gf=(e,t,n,i,s)=>{const a=Cg(e).filter(c=>{if(!Wc(c))return!0;const[h,u]=Id(c);return!_g(h,t,s)||n!=="all"&&Nc(u)&&t0(u)!==n});return i&&a.push(i),uu(...a)},Kf=e=>Array.isArray(e)?e.map(Kf):e,IM=300;class Zl{#e=new Map;constructor(t){t.addController(this)}get size(){return this.#e.size}has(t){return this.#e.has(t)}run(t,n,i=IM){this.cancel(t),this.#e.set(t,setTimeout(()=>{this.#e.delete(t),n()},i))}cancel(t){const n=this.#e.get(t);n!==void 0&&(clearTimeout(n),this.#e.delete(t))}clear(){this.#e.forEach(t=>clearTimeout(t)),this.#e.clear()}hostDisconnected(){this.clear()}}class FM{constructor(t){this.onInput=n=>{const i=n.target.value;this.#n=i,this.#t.run("search",()=>this.#o(i))},this.onKeyDown=n=>{n.key==="Enter"&&(this.#t.cancel("search"),this.#o(n.target.value))},this.#e=t,this.#t=new Zl(t),t.addController(this)}#e;#t;#n;get timers(){return this.#t.size}get value(){return this.#n??this.#e.searchText}#o(t){this.#n=void 0,this.#e._userSearch(t)}discardDraft(){this.#t.cancel("search"),this.#n=void 0}hostDisconnected(){this.#n=void 0}}const NM="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z",i0=L`
  <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" height="1.25em" width="1.25em" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
    <path d=${NM}/>
  </svg>`,WM=(e,t)=>L`
  <label class="search-panel">
    ${i0}
    <input
      class="search-input"
      part="search-input"
      type="search"
      autocomplete="off"
      spellcheck="false"
      placeholder=${t.searchPlaceholder}
      aria-label=${t.searchPanelLabel}
      .value=${xn(e.value)}
      @input=${e.onInput}
      @keydown=${e.onKeyDown}>
  </label>`,BM=(e,t)=>{const n=bM(e,t);return n.length===1?e:L`${rt(n,(i,s)=>s%2?L`<mark class="search-highlight" part="search-highlight">${i}</mark>`:i||P)}`},GM=["contains","notcontains","startswith","endswith","=","<>"],KM=["=","<>","<",">","<=",">=","between"],qM=new Set(["anyof","noneof"]),o0=new Set(["isblank","isnotblank"]),s0=e=>e==="number"||e==="date"||e==="datetime",Ag=(e,t)=>{const n=e.filterOperations?.filter(i=>!qM.has(i));return n?.length?n:t==="boolean"?["="]:[...s0(t)?KM:GM]},hx=(e,t)=>{const n=Ag(e,t),i=e.defaultFilterOperation??(s0(t)||t==="boolean"?"=":"contains");return n.includes(i)?i:n[0]},ux=e=>String(e).padStart(2,"0"),kf=(e,t)=>{if(e==null)return"";if(t==="date"||t==="datetime"){const n=go(e);return n?`${n.getFullYear()}-${ux(n.getMonth()+1)}-${ux(n.getDate())}`:""}return String(e)},Sf=(e,t)=>{if(e!=="")switch(t){case"number":{const n=Number(e);return Number.isNaN(n)?void 0:n}case"boolean":return e==="true"?!0:e==="false"?!1:void 0;default:return e}},jM={"=":"=","<>":"≠","<":"<","<=":"≤",">":">",">=":"≥",contains:"",notcontains:"∌",startswith:"a…",endswith:"…a",between:"↔",anyof:"∈",noneof:"∉",isblank:"∅",isnotblank:"≠∅"},HM={"=":"filterEquals","<>":"filterNotEquals","<":"filterLessThan","<=":"filterLessThanOrEqual",">":"filterGreaterThan",">=":"filterGreaterThanOrEqual",contains:"filterContains",notcontains:"filterNotContains",startswith:"filterStartsWith",endswith:"filterEndsWith",between:"filterBetween",anyof:"filterAnyOf",noneof:"filterNoneOf",isblank:"filterIsBlank",isnotblank:"filterIsNotBlank"},qf=(e,t)=>t[HM[e]]??"",r0=e=>e==="contains"?i0:jM[e];class UM{constructor(t){this.#t=n=>this.#e._resolveFilterField(n),this.#o=new Map,this.#s=new Map,this.#a=!1,this.#r="checked",this.#l="operation",this.onButtonKeyDown=(n,i,s="operation")=>{(n.key==="ArrowDown"||n.key==="ArrowUp")&&!n.altKey&&!n.ctrlKey&&!n.metaKey&&(n.preventDefault(),n.stopPropagation(),this.openMenu(i,n.key==="ArrowDown"?"first":"last",s))},this.#f=n=>{n.composedPath().some(s=>s instanceof HTMLElement&&(s.classList.contains("filter-menu")||s.hasAttribute("data-filter-menu")))||this.closeMenu()},this.onMenuKeyDown=n=>{const i=[...n.currentTarget.querySelectorAll('[role^="menuitem"]')],s=i.indexOf(n.target);let a=-1;switch(n.key){case"ArrowDown":a=(s+1)%i.length;break;case"ArrowUp":a=(s-1+i.length)%i.length;break;case"Home":a=0;break;case"End":a=i.length-1;break;case"Escape":n.preventDefault(),n.stopPropagation(),this.closeMenu(!0);return;case"Tab":this.closeMenu(!0),n.preventDefault();return;default:return}n.preventDefault(),i[a]?.focus()},this.#e=t,this.#n=new Zl(t),t.addController(this)}#e;#t;#n;#o;#s;#i;#a;#r;#c;#l;get size(){return this.#o.size+this.#s.size}get timers(){return this.#n.size}get menuColumn(){return this.#i}get menuKind(){return this.#l}isMenuOpen(t,n){return this.#i===t&&this.#l===n}prune(t){for(const n of[this.#o,this.#s])for(const i of n.keys())t.has(i)||(n.delete(i),this.#n.cancel(i));this.#i&&!t.has(this.#i)&&this.closeMenu()}operationOf(t){return du(this.#e.filterValue,t,"row",this.#t)?.[0]??this.#s.get(t)??hx(t,this.#e._columnDataType(t))}textsOf(t){const n=this.#o.get(t);if(n)return n;const i=du(this.#e.filterValue,t,"row",this.#t),s=this.#e._columnDataType(t);if(!i)return["",""];const[a,c]=i;if(a==="between"){const[h,u]=Array.isArray(c)?c:[];return[kf(h,s),kf(u,s)]}return[kf(c,s),""]}input(t,n,i,s){const a=[...this.textsOf(t)];a[n]=i,this.#o.set(t,a),s?this.commit(t):this.#n.run(t,()=>this.commit(t))}commit(t){this.#n.cancel(t);const n=this.textsOf(t);this.#o.delete(t),this.#h(t,this.operationOf(t),n)}selectValue(t,n){this.closeMenu(!0),this.input(t,0,n,!0),this.#e.requestUpdate()}selectOperation(t,n){if(this.closeMenu(!0),!n){this.#n.cancel(t),this.#o.delete(t),this.#s.delete(t),this.#e._userFilterColumn(t,"row",null),this.#e.requestUpdate();return}const i=this.textsOf(t);this.#n.cancel(t),this.#o.delete(t),this.#s.set(t,n),this.#h(t,n,i),this.#e.requestUpdate()}#h(t,n,i){const s=this.#e._columnDataType(t),a=hu(t);let c=null;if(o0.has(n))c=[a,n];else if(n==="between"){const h=Sf(i[0]??"",s),u=Sf(i[1]??"",s);c=h===void 0&&u===void 0?null:[a,"between",[h??null,u??null]]}else{const h=Sf(i[0]??"",s);c=h===void 0?null:[a,n,h]}n!==hx(t,s)&&this.#s.set(t,n),this.#e._userFilterColumn(t,"row",c)}toggleMenu(t,n="operation"){if(this.isMenuOpen(t,n)){this.closeMenu(!0);return}this.openMenu(t,"checked",n)}openMenu(t,n="checked",i="operation"){this.closeMenu(),this.#i=t,this.#l=i,this.#r=n,this.#a=!1,this.#e.requestUpdate()}closeMenu(t=!1){this.#i&&(this.#c=t?this.#i:void 0,this.#d?.hidePopover?.(),this.#i=void 0,document.removeEventListener("pointerdown",this.#f,!0),this.#e.requestUpdate())}get#d(){return this.#e.renderRoot.querySelector(".filter-menu")}#p(t,n){return this.#e.renderRoot.querySelector(`[data-filter-menu="${Xl(t)}"][data-filter-menu-kind="${n}"]`)}hostUpdated(){if(!this.#i){this.#c&&(this.#p(this.#c,this.#l)?.focus(),this.#c=void 0);return}const t=this.#d;if(!t||this.#a)return;this.#a=!0,typeof t.showPopover=="function"&&!t.matches(":popover-open")&&t.showPopover(),this.#u(t,this.#p(this.#i,this.#l)),document.addEventListener("pointerdown",this.#f,!0);const n=[...t.querySelectorAll('[role^="menuitem"]')];(this.#r==="first"?n[0]:this.#r==="last"?n[n.length-1]:t.querySelector('[aria-checked="true"]')??n[0])?.focus()}discardDrafts(){this.#n.clear(),this.#o.clear(),this.#s.clear()}hostDisconnected(){document.removeEventListener("pointerdown",this.#f,!0),this.#i=void 0,this.#a=!1,this.#c=void 0,this.#o.clear()}#u(t,n){if(!n)return;const i=n.getBoundingClientRect(),s=t.offsetWidth,a=8,c=document.documentElement.clientWidth,h=this.#e._isRtl()?i.right-s:i.left;t.style.top=`${Math.round(i.bottom+2)}px`,t.style.left=`${Math.round(Math.max(a,Math.min(h,c-s-a)))}px`}#f}let VM=0;const dx=new WeakMap,Xl=e=>{let t=dx.get(e);return t===void 0&&(t=VM++,dx.set(e,t)),t},ZM=e=>e==="number"?"number":e==="date"||e==="datetime"?"date":"text",a0=(e,t,n)=>{const{trueText:i,falseText:s}=Fc(n,t);return e==="true"?i:e==="false"?s:t.filterAll},XM=({controller:e,column:t,dataType:n,filterable:i,translation:s,className:a,style:c,colIndex:h})=>{if(!i)return L`<td class="filter-cell ${a}" style=${c} part="filter-cell" role="gridcell" aria-colindex=${h}></td>`;const u=e.operationOf(t),f=Ag(t,n),g=e.textsOf(t),v=oe(s.filterEditorLabel,{column:fe(t)}),y=n==="date"||n==="datetime",_=(z,D)=>L`
    <input
      class="filter-editor"
      part="filter-editor"
      type=${ZM(n)}
      inputmode=${W(n==="number"?"decimal":void 0)}
      autocomplete="off"
      aria-label=${D}
      .value=${xn(g[z]??"")}
      @input=${y?P:I=>e.input(t,z,I.target.value,!1)}
      @change=${y?I=>e.input(t,z,I.target.value,!0):P}
      @keydown=${I=>{I.key==="Enter"?e.input(t,z,I.target.value,!0):I.key==="ArrowDown"&&I.altKey&&f.length>1&&(I.preventDefault(),e.toggleMenu(t))}}>`;let E;if(n==="boolean"){const z=a0(g[0]??"",s,t);E=L`
      <button
        class="filter-editor filter-value-button"
        part="filter-editor"
        type="button"
        data-filter-menu=${Xl(t)}
        data-filter-menu-kind="value"
        aria-haspopup="menu"
        aria-expanded=${e.isMenuOpen(t,"value")?"true":"false"}
        aria-label=${`${v}, ${z}`}
        @click=${()=>e.toggleMenu(t,"value")}
        @keydown=${D=>e.onButtonKeyDown(D,t,"value")}><span class="filter-value-text">${z}</span><span
          class="filter-value-arrow" aria-hidden="true"></span></button>`}else u==="between"?E=L`
      <span class="filter-between">
        ${_(0,`${v}, ${s.filterBetweenStart}`)}
        ${_(1,`${v}, ${s.filterBetweenEnd}`)}
      </span>`:o0.has(u)?E=L`<span class="filter-no-value">${qf(u,s)}</span>`:E=_(0,v);const $=oe(s.filterOperationButtonLabel,{column:fe(t),operation:qf(u,s)});return L`
    <td class="filter-cell ${a}" style=${c} part="filter-cell" role="gridcell" aria-colindex=${h}>
      <div class="filter-cell-content">
        ${f.length>1?L`
            <button
              class="filter-operation-button"
              part="filter-operation-button"
              type="button"
              data-filter-menu=${Xl(t)}
              data-filter-menu-kind="operation"
              aria-haspopup="menu"
              aria-expanded=${e.isMenuOpen(t,"operation")?"true":"false"}
              aria-label=${$}
              title=${$}
              @click=${()=>e.toggleMenu(t)}
              @keydown=${z=>e.onButtonKeyDown(z,t)}><span aria-hidden="true">${r0(u)}</span></button>`:P}
        ${E}
      </div>
    </td>`},YM=(e,t,n,i)=>{if(n==="boolean"&&e.menuKind==="value"){const a=e.textsOf(t)[0]??"";return L`
      <div
        class="filter-menu"
        .popover=${"manual"}
        role="menu"
        aria-label=${oe(i.filterEditorLabel,{column:fe(t)})}
        @keydown=${e.onMenuKeyDown}>
        ${rt(["","true","false"],c=>L`
          <button
            class="filter-menu-item"
            type="button"
            role="menuitemradio"
            tabindex="-1"
            aria-checked=${c===a?"true":"false"}
            @click=${()=>e.selectValue(t,c)}>
            <span class="filter-menu-glyph" aria-hidden="true">${c===a?"✓":""}</span>
            <span>${a0(c,i,t)}</span>
          </button>`)}
      </div>`}const s=e.operationOf(t);return L`
    <div
      class="filter-menu"
      .popover=${"manual"}
      role="menu"
      aria-label=${i.filterOperationLabel}
      @keydown=${e.onMenuKeyDown}>
      ${rt(Ag(t,n),a=>L`
        <button
          class="filter-menu-item"
          type="button"
          role="menuitemradio"
          tabindex="-1"
          aria-checked=${a===s?"true":"false"}
          @click=${()=>e.selectOperation(t,a)}>
          <span class="filter-menu-glyph" aria-hidden="true">${r0(a)}</span>
          <span>${qf(a,i)}</span>
        </button>`)}
      <div class="filter-menu-separator" role="separator"></div>
      <button
        class="filter-menu-item"
        type="button"
        role="menuitem"
        tabindex="-1"
        @click=${()=>e.selectOperation(t,null)}>
        <span class="filter-menu-glyph" aria-hidden="true"></span>
        <span>${i.filterReset}</span>
      </button>
    </div>`},JM=2e5,QM=8,eR=2048,l0=e=>(Array.isArray(e)&&(e.forEach(l0),Object.freeze(e)),e),c0=(e,t)=>e===t?!0:e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e.every((n,i)=>c0(n,t[i]));class tR{#e;#t=null;#n="";#o=null;#s=null;#i=!0;#a=!0;#r;#c=!1;constructor(t){this.#e=t,t.addController(this)}get filterValue(){return this.#t}get searchText(){return this.#n}set(t,n){const i=t?.length?l0(Kf(t)):null,s=n??"";return c0(i,this.#t)&&s===this.#n?!1:(this.#t=i,this.#n=s,this.#c=!1,this.#i=!0,this.#e.requestUpdate(),!0)}invalidate(){this.#i=!0,this.#a=!0}searchColumnsChanged(){this.#n.trim()&&this.invalidate()}get active(){return!!this.#t||!!this.#n.trim()}combined(){return Kf(uu(this.#t,Bf(this.#n,this.#e._searchColumns())))}get pending(){return this.#r?.promise}maskFor(t){if(!this.#i&&this.#s===t)return this.#o;this.#s!==t&&(this.#a=!0),this.#i=!1,this.#p();const n=this.#h();return n?t.length<=JM||this.#a?(this.#l(cx(t,n),t),this.#o):(this.#d(t,n),this.#o):(this.#l(null,t),null)}adopt(t,n){return this.#i||this.#r?!1:(this.#l(n,t),!0)}hostDisconnected(){this.#p(),this.#i=!0}#l(t,n){this.#o=t,this.#s=n,this.#a=!1}#h(){const t=uu(this.#t,Bf(this.#n,this.#e._searchColumns()));try{return Qy(t,this.#e._filterContext())}catch(n){if(!(n instanceof Ul))throw n;return this.#c||(this.#c=!0,console.warn(`<u-grid>: invalid filterValue ignored. ${n.message}`)),null}}#d(t,n){const i=new Uint8Array(t.length);let s;const a=new Promise(g=>{s=g}),c=new MessageChannel,h={channel:c,resolve:s,promise:a};let u=0;const f=()=>{if(this.#r!==h)return;const g=performance.now();for(;u<t.length;){const v=Math.min(t.length,u+eR);if(cx(t,n,i,u,v),u=v,performance.now()-g>QM)break}if(u<t.length){c.port2.postMessage(null);return}c.port1.close(),this.#r=void 0,this.#l(i,t),this.onCommit?.(),this.#e.requestUpdate(),s()};this.#r=h,c.port1.onmessage=f,c.port2.postMessage(null)}#p(){const t=this.#r;t&&(this.#r=void 0,t.channel.port1.close(),t.resolve())}}const Bc=e=>e.groupable??(!!e.path||!!e.valueGetter||!!e.groupValueGetter),h0=e=>e.sortable??(!!e.path||!!e.valueGetter||!!e.comparator),ia=e=>e.exportable??(!!e.path||!!e.valueGetter||!!e.displayValue),nR=e=>e.filterable!==!1&&(!!e.path||!!e.valueGetter&&!!e.name),u0=e=>e.editable??(!!e.path||!!e.valueSetter),px=e=>!!e&&Array.isArray(e.columns)&&e.columns.length>0;class iR{#e=new dg;#t;constructor(t){this.#t=t}get size(){return this.#e.size}prune(){this.#e.prune()}#n(t){const n=this.#t._nativeColumnMap.get(t.draggable.target);return!!n&&(this.#t._groupColumns.includes(n)||Bc(n))}attachToGroupDropTarget(t,n){!t||!this.#e.add(t)||es(t).dropzone({accept:".move-container",ondragenter:i=>{if(!this.#n(i))return;const s=this.#t._groupContainerRef.value;s.classList.add("drop-target"),s.style.setProperty("--_drop-indicator-order",`${n}`)},ondragleave:()=>{this.#t._groupContainerRef.value?.classList.remove("drop-target")},ondropdeactivate:()=>{this.#t._groupContainerRef.value?.classList.remove("drop-target")},ondrop:i=>{const s=this.#t._nativeColumnMap.get(i.draggable.target);s&&this.#t._userGroupColumn(s,this.#t._groupColumns.length)}})}attach(t){if(!t||!this.#e.add(t))return;const n=My.set(t),i=Ey(n);n.on("move",s=>{const a=s.interaction;if(!(a.pointerIsDown&&!a.interacting())||!i(s))return;this.#t._dragStarted();const c=s.currentTarget,h=c.getBoundingClientRect(),u=document.createElement("th");u.style.width=`${h.width}px`,u.style.minWidth=u.style.width,u.textContent=c.textContent;const f=document.createElement("div");f.style.top=`${h.top}px`,f.style.left=`${h.left}px`,f.classList.add("move-container"),f.setAttribute("aria-hidden","true"),f.appendChild(u),this.#t._containerRef.value.appendChild(f),a.start({name:"drag"},s.interactable,f)}),es(t).dropzone({accept:".move-container",ondragenter:s=>{s.target===s.draggable.target||!this.#n(s)||this.#t._groupContainerRef.value?.classList.add("drop-target")},ondragleave:()=>{this.#t._groupContainerRef.value?.classList.remove("drop-target")},ondropdeactivate:()=>{this.#t._groupContainerRef.value?.classList.remove("drop-target")},ondropmove:s=>{if(s.target===s.draggable.target||!this.#n(s))return;const a=this.#t._nativeColumnMap.get(s.target);if(!a)return;let c=this.#t._groupColumns.indexOf(a);au(s)===ta.After&&c++,this.#t._groupContainerRef.value?.style.setProperty("--_drop-indicator-order",`${c}`)},ondrop:s=>{const a=this.#t._nativeColumnMap.get(s.target),c=this.#t._nativeColumnMap.get(s.draggable.target);if(s.target===s.draggable.target||!a||!c)return;let h=this.#t._groupColumns.indexOf(a);au(s)===ta.After&&h++,this.#t._userGroupColumn(c,h)}})}detach(){this.#e.clear()}}const oR=e=>e==="asc"?"ascending":e==="desc"?"descending":"none",sR='a[href], button, input, select, textarea, [role="button"], [contenteditable=""], [contenteditable="true"]',fx=e=>{for(const t of e.composedPath()){if(t===e.currentTarget)return!1;if(t instanceof Element&&t.matches(sR))return!0}return!1},jf=e=>e.key==="Enter"||e.key===" ",d0=(e,t)=>e?L`
      <span
        class="sort-indicator ${e}"
        part="sort-indicator"
        aria-hidden="true"
        data-sort-index=${t??P}>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill="currentColor">
          <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"/>
        </svg>
      </span>`:P,p0=(e,t)=>t?L`<span id="header-description-${e}" hidden>${t}</span>`:P,rR=({column:e,classes:t,styles:n,colIndex:i,colSpan:s,ariaColSpan:a,level:c,tabIndex:h,idSuffix:u,columnId:f,description:g="",keyShortcuts:v,onContextMenu:y,label:_=Ld(e)})=>L`
  <th
    class="band-header ${Ni(t)}"
    style=${eg(n)}
    part="header-cell band-header-cell"
    role="columnheader"
    colspan=${s}
    aria-colspan=${W(a&&a>1?a:void 0)}
    aria-colindex="${i}"
    aria-labelledby="header-text-${u}"
    aria-describedby=${W(g?`header-description-${u}`:void 0)}
    aria-keyshortcuts=${W(v||void 0)}
    data-col=${i-1}
    data-level=${c}
    data-column-id=${f}
    tabindex=${h}
    @contextmenu=${y??P}>
    <span class="header-content"><span class="header-text" id="header-text-${u}">${_}</span></span>${p0(u,g)}
  </th>`,kg=(e,t,n)=>{const i=e.indexOf("{column}"),s=i>=0?e.slice(0,i):e,a=i>=0?e.slice(i+8):"",c=(h,u)=>u?L`<span class="visually-hidden" id="${t}-${h}-${n}">${u}</span>`:P;return{labelledBy:[s&&`${t}-before-${n}`,`header-text-${n}`,a&&`${t}-after-${n}`].filter(Boolean).join(" "),parts:L`${c("before",s)}${c("after",a)}`}},aR=({column:e,classes:t,styles:n,colIndex:i,tabIndex:s,sortable:a,order:c,sortIndex:h,onActivate:u,onPointerDown:f,onKeyDown:g,trailing:v=P,filterButton:y=P,menuButton:_=P,filtered:E=!1,description:$="",keyShortcuts:z,onContextMenu:D,label:I=Ld(e),level:j,rowSpan:X,ariaRowSpan:Q,idSuffix:ge=String(i),columnId:F})=>L`
  <th
    class="header-column ${Ni({...t,sortable:a,sorted:!!c,filtered:E})}"
    style=${eg(n)}
    part="header-cell"
    role="columnheader"
    rowspan=${W(X&&X>1?X:void 0)}
    aria-rowspan=${W(Q&&X&&X>1?X:void 0)}
    aria-colindex="${i}"
    aria-labelledby="header-text-${ge}"
    aria-sort=${W(a||c?oR(h===void 0||h===1?c:void 0):void 0)}
    aria-describedby=${W($?`header-description-${ge}`:void 0)}
    aria-keyshortcuts=${W(z||void 0)}
    data-col=${i-1}
    data-level=${W(j)}
    data-column-id=${W(F)}
    tabindex=${s}
    @pointerdown=${a?f:P}
    @contextmenu=${D??P}
    @click=${a?ee=>!fx(ee)&&u(e,ee):P}
    @keydown=${a||g?ee=>{g?.(ee),a&&!ee.defaultPrevented&&jf(ee)&&!ee.repeat&&!fx(ee)&&(ee.preventDefault(),u(e,ee))}:P}>
    <span class="header-content"><span class="header-text" id="header-text-${ge}">${I}</span>${d0(c,h)}${y===P&&_===P?P:L`<span class="header-buttons">${y}${_}</span>`}</span>${v}${p0(ge,$)}
  </th>`,f0=500,lR="\0blank",ci=e=>e==null?lR:`${typeof e}:${String(e)}`;class cR{constructor(t){this.#n=!1,this.#i=[],this.#a="",this.onSearchKeyDown=n=>{if(!(n.isComposing||n.keyCode===229))if(n.key==="ArrowDown"){const i=n.currentTarget.closest(".header-filter")?.querySelector('[role=treeitem][tabindex="0"]');i&&(n.preventDefault(),i.focus())}else n.key==="Enter"&&(n.preventDefault(),this.apply())},this.onTreeKeyDown=n=>{const i=n.currentTarget,s=[...i.querySelectorAll("[role=treeitem]")],a=n.target,c=s.indexOf(a),h=this.#i.find(g=>g.key===a.getAttribute("data-key"));if(c<0||!h)return;let u=n.key;this.#e._isRtl()&&(u==="ArrowLeft"||u==="ArrowRight")&&(u=u==="ArrowLeft"?"ArrowRight":"ArrowLeft");let f;switch(u){case"ArrowDown":f=s[c+1];break;case"ArrowUp":f=s[c-1];break;case"Home":f=s[0];break;case"End":f=s[s.length-1];break;case"ArrowRight":h.expanded===!1?this.toggleExpanded(h.key.slice(2)):h.expanded&&(f=s[c+1]);break;case"ArrowLeft":h.expanded?this.toggleExpanded(h.key.slice(2)):h.parent&&(f=s.find(g=>g.getAttribute("data-key")===h.parent));break;case" ":this.setSelected(h.values,this.stateOf(h.values)!==!0);break;case"Enter":n.preventDefault(),this.apply();return;default:n.key.length===1&&!n.ctrlKey&&!n.metaKey&&!n.altKey&&i.closest(".header-filter")?.querySelector(".header-filter-search")?.focus();return}n.preventDefault(),f?.focus()},this.#d=n=>{n.composedPath().some(s=>s instanceof HTMLElement&&(s.classList.contains("header-filter")||s.classList.contains("header-filter-button")))||this.close()},this.onKeyDown=n=>{if(n.isComposing||n.keyCode===229)return;if(n.key==="Escape"){n.preventDefault(),n.stopPropagation(),this.close(!0);return}if(n.key!=="Tab")return;const i=n.currentTarget,s=[...i.querySelectorAll('input, button, [tabindex="0"]')].filter(f=>!f.hasAttribute("disabled")),c=i.getRootNode().activeElement,h=s[0],u=s[s.length-1];n.shiftKey&&c===h?(n.preventDefault(),u?.focus()):!n.shiftKey&&c===u&&(n.preventDefault(),h?.focus())},this.#e=t,t.addController(this),this.#r=new Zl(t)}#e;#t;#n;#o;#s;#i;#a;#r;get activeItem(){return this.#s}get searchAnnouncement(){return this.#a}get timers(){return this.#r.size}setActiveItem(t){this.#s!==t&&(this.#s=t,this.#e.requestUpdate())}treeItems(t){const n=this.#t;if(!n)return this.#i=[];const i=!!n.search.trim(),s=n.distinct.blanks>0&&!i,a=s?1:0,c=[],h=n.distinct.tree&&!i?void 0:this.visibleValues().slice(0,f0),u=(h?.length??n.distinct.tree.length)+a;return s&&c.push({key:ci(null),text:t.filterBlanks,count:n.distinct.blanks,values:[null],level:1,setSize:u,posInSet:1}),h?h.forEach((f,g)=>c.push({key:ci(f.value),text:f.text,count:f.count,values:[f.value],level:1,setSize:u,posInSet:g+1+a})):g0(n.distinct.tree,n.expanded,1,void 0,a,c),this.#i=c}get open(){return!!this.#t}get column(){return this.#t?.column}get state(){return this.#t}toggle(t){if(this.#t?.column===t){this.close(!0);return}this.close();const n=this.#e._distinctValues(t),i=[...n.blanks?[null]:[],...n.values.map(u=>u.value)],s=n0(this.#e.filterValue,t,u=>this.#e._resolveFilterField(u)),a=s?.condition,c=new Set((Array.isArray(a?.[1])?a[1]:[]).map(ci)),h=new Set;for(const u of i){const f=ci(u),g=c.has(f);(!a||(a[0]==="anyof"?g:!g))&&h.add(f)}this.#t={column:t,distinct:n,all:i,selected:h,search:"",expanded:new Set,adopted:!!s?.adopted},this.#n=!1,this.#e.requestUpdate()}close(t=!1){this.#t&&(this.#o=t?this.#t.column:void 0,this.#c?.hidePopover?.(),this.#t=void 0,this.#s=void 0,this.#i=[],this.#a="",this.#r.cancel("search"),document.removeEventListener("pointerdown",this.#d,!0),this.#e.requestUpdate())}closeIfRemoved(t){this.#t&&!t.has(this.#t.column)&&this.close()}setSelected(t,n){const i=this.#t;if(i){for(const s of t)n?i.selected.add(ci(s)):i.selected.delete(ci(s));this.#e.requestUpdate()}}isSelected(t){return!!this.#t?.selected.has(ci(t))}stateOf(t){let n=0;for(const i of t)this.isSelected(i)&&n++;return n===0?!1:n===t.length?!0:"mixed"}setSearch(t,n){this.#t&&(this.#t.search=t,this.#s=void 0,this.#e.requestUpdate(),n&&this.#r.run("search",()=>{const i=this.#t;if(i){const s=this.visibleValues().length+(i.distinct.blanks>0&&!i.search.trim()?1:0);this.#a=oe(n.headerFilterSearchAnnouncement,{count:String(s)}),this.#e.requestUpdate()}},500))}toggleExpanded(t){const n=this.#t?.expanded;n&&(n.delete(t)||n.add(t),this.#e.requestUpdate())}visibleValues(){const t=this.#t;if(!t)return[];const n=Pd(t.search);return n?t.distinct.values.filter(i=>n.test(i.text)):t.distinct.values}apply(){const t=this.#t;if(!t)return;const{column:n,all:i,selected:s,adopted:a}=t,c=i.filter(f=>s.has(ci(f))),h=i.filter(f=>!s.has(ci(f)));let u=null;h.length&&(u=c.length<=h.length?[hu(n),"anyof",c]:[hu(n),"noneof",h]),this.close(!0),this.#e._userFilterColumn(n,a?"all":"header",u)}clearColumn(){const t=this.#t?.column;t&&(this.close(!0),this.#e._userFilterColumn(t,"all",null))}get#c(){return this.#e.renderRoot.querySelector(".header-filter")}#l(t){return this.#e.renderRoot.querySelector(`.header-filter-button[data-column="${Xl(t)}"]`)}hostUpdated(){if(!this.#t){this.#o&&(this.#l(this.#o)?.focus(),this.#o=void 0);return}const t=this.#c;!t||this.#n||(this.#n=!0,typeof t.showPopover=="function"&&!t.matches(":popover-open")&&t.showPopover(),this.#h(t,this.#l(this.#t.column)),document.addEventListener("pointerdown",this.#d,!0),t.querySelector(".header-filter-search")?.focus())}hostDisconnected(){document.removeEventListener("pointerdown",this.#d,!0),this.#t=void 0,this.#n=!1,this.#o=void 0,this.#i=[],this.#a=""}#h(t,n){if(!n)return;const i=n.getBoundingClientRect(),s=t.offsetWidth,a=8,c=document.documentElement.clientWidth,h=this.#e._isRtl()?i.left:i.right-s;t.style.top=`${Math.round(i.bottom+4)}px`,t.style.left=`${Math.round(Math.max(a,Math.min(h,c-s-a)))}px`}#d}const hR=e=>L`
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
    <path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h${e?520:720}v80H120Z"/>
    ${e?Xm`<circle class="header-filter-badge" cx="800" cy="-760" r="110"/>`:P}
  </svg>`,uR=(e,t,n,i,s,a,c,h)=>{const u=Vl(n,t,s),f=oe(i.headerFilterLabel,{column:fe(t)}),g=t.headerRenderer&&c?kg(i.headerFilterLabel,"header-filter-name",c):void 0;return L`
    <button
      class="header-filter-button ${u?"active":""}"
      part="header-filter-button"
      type="button"
      tabindex="-1"
      aria-label=${W(g?void 0:f)}
      aria-labelledby=${W(g?.labelledBy)}
      lang=${W(h)}
      title=${W(g&&!t.label?void 0:f)}
      aria-haspopup="dialog"
      aria-expanded=${e.column===t?"true":"false"}
      aria-describedby=${W(u?a:void 0)}
      data-column=${Xl(t)}
      @pointerdown=${v=>v.stopPropagation()}
      @click=${v=>{v.stopPropagation(),e.toggle(t)}}
      @keydown=${v=>{(v.key==="Enter"||v.key===" ")&&v.stopPropagation()}}>${hR(u)}${g?.parts??P}</button>`},dR=(e,t,n,i)=>L`
  <label class="header-filter-check">
    <input
      type="checkbox"
      .checked=${xn(e===!0)}
      .indeterminate=${xn(e==="mixed")}
      @change=${s=>i(s.target.checked)}>
    <span class="header-filter-text">${t}</span>
    ${P}
  </label>`,m0=e=>"children"in e?e.children.flatMap(m0):[e.value],g0=(e,t,n,i,s,a)=>{e.forEach((c,h)=>{const u="children"in c,f=u?`d:${c.key}`:ci(c.value),g=u&&t.has(c.key);a.push({key:f,text:c.text,count:c.count,values:m0(c),level:n,setSize:e.length+s,posInSet:h+1+s,expanded:u?g:void 0,parent:i}),u&&g&&g0(c.children,t,n+1,f,0,a)})},pR=e=>L`
  <span class="header-filter-box" aria-hidden="true">${e?L`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="18" height="18" fill="currentColor">
        <path d=${e==="mixed"?"M200-440v-80h560v80H200Z":"M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"}/>
      </svg>`:P}</span>`,fR=(e,t,n)=>{const i=e.stateOf(t.values);return L`
    <li
      class="header-filter-item"
      role="treeitem"
      style="--_level: ${t.level-1}"
      tabindex=${n?0:-1}
      data-key=${t.key}
      aria-level=${t.level}
      aria-setsize=${t.setSize}
      aria-posinset=${t.posInSet}
      aria-checked=${i==="mixed"?"mixed":i?"true":"false"}
      aria-expanded=${W(t.expanded===void 0?void 0:t.expanded?"true":"false")}
      @focus=${()=>e.setActiveItem(t.key)}
      @click=${()=>e.setSelected(t.values,i!==!0)}>
      ${t.expanded===void 0?P:L`<span
          class="header-filter-expand ${t.expanded?"expanded":""}"
          aria-hidden="true"
          @click=${s=>{s.stopPropagation(),e.toggleExpanded(t.key.slice(2))}}>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" viewBox="0 -960 960 960" fill="currentColor">
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
          </svg>
        </span>`}
      ${pR(i)}
      <span class="header-filter-text">${t.text}</span>
      <span class="header-filter-count">${t.count}</span>
    </li>`},mR=(e,t)=>{const n=e.state;if(!n)return P;const{distinct:i,column:s}=n,a=!!n.search.trim(),c=!!i.tree&&!a,h=e.visibleValues(),u=h.slice(0,f0),g=[...i.blanks>0&&!a?[null]:[],...h.map($=>$.value)],v=oe(t.headerFilterLabel,{column:fe(s)}),y=e.treeItems(t),_=y.some($=>$.key===e.activeItem)?e.activeItem:y[0]?.key,E=!c&&h.length>u.length;return L`
    <div
      class="header-filter"
      part="header-filter"
      .popover=${"manual"}
      role="dialog"
      aria-modal="true"
      aria-label=${v}
      @keydown=${e.onKeyDown}>
      <input
        class="header-filter-search"
        type="search"
        autocomplete="off"
        placeholder=${t.searchPlaceholder}
        aria-label=${t.headerFilterSearchLabel}
        .value=${xn(n.search)}
        @keydown=${e.onSearchKeyDown}
        @input=${$=>e.setSearch($.target.value,t)}>
      <div class="header-filter-select-all">
        ${dR(e.stateOf(g),a?oe(t.selectAllResults,{count:String(g.length)}):t.selectAll,void 0,$=>e.setSelected(g,$))}
      </div>
      <ul
        class="header-filter-list"
        role="tree"
        aria-multiselectable="true"
        aria-label=${v}
        aria-describedby=${E?"header-filter-note":P}
        @keydown=${e.onTreeKeyDown}>
        ${rt(y,$=>fR(e,$,$.key===_))}
      </ul>
      ${E?L`<p class="header-filter-note" id="header-filter-note">${oe(t.headerFilterTruncated,{shown:String(u.length),count:String(h.length)})}</p>`:P}
      <div class="visually-hidden" role="status" aria-live="polite">${e.searchAnnouncement}</div>
      <div class="header-filter-actions">
        <button class="header-filter-clear" type="button" @click=${()=>e.clearColumn()}>${t.filterClear}</button>
        <span class="header-filter-spacer"></span>
        <button class="header-filter-ok" type="button" @click=${()=>e.apply()}>${t.ok}</button>
        <button class="header-filter-cancel" type="button" @click=${()=>e.close(!0)}>${t.cancel}</button>
      </div>
    </div>`},gR=40;class vR{#e;#t=new Map;#n=new WeakMap;#o=null;#s=null;#i;#a=0;#r=!1;constructor(t,n){this.#e=n,t.addController(this)}hostDisconnected(){this.detach()}get body(){return this.#t.get("body")?.element??null}get overflow(){return this.#r}get listeners(){return this.#t.size+(this.#i?1:0)+(this.#a?1:0)}attach(t){const n=["body","head","fixedTop","fixedBottom","foot","bar"];if(!t.body){this.detach();return}for(const i of n){const s=t[i]??null,a=this.#t.get(i);if(a?.element!==s&&(a?.abort.abort(),this.#t.delete(i),s)){const c=new AbortController;s.addEventListener("scroll",this.#d,{passive:!0,signal:c.signal}),i!=="body"&&i!=="bar"&&s.addEventListener("wheel",this.#p,{passive:!1,signal:c.signal}),this.#t.set(i,{element:s,abort:c}),this.#c(s)}}this.#s=t.spacer??null,this.#h(t.body,t.table??null)}detach(){for(const{abort:t}of this.#t.values())t.abort();this.#t.clear(),this.#i?.disconnect(),this.#i=void 0,cancelAnimationFrame(this.#a),this.#a=0,this.#o=null,this.#s=null,this.#r=!1}syncFrom(t){const n=this.body;if(n){t!==n&&this.#l(n,t.scrollLeft);for(const{element:i}of this.#t.values())i!==n&&i!==t&&this.#l(i,n.scrollLeft);t!==n&&Math.abs(t.scrollLeft-n.scrollLeft)>=1&&this.#l(t,n.scrollLeft),this.#e.scrolled()}}measure(){const t=this.body;if(!t)return;const n=this.#o?.offsetWidth??t.scrollWidth,i=t.scrollWidth>t.clientWidth+1,s=this.#t.get("bar")?.element;this.#s&&(this.#s.style.inlineSize=`${n}px`),s?.hidden===i&&(s.hidden=!i),this.#r=i;for(const{element:a}of this.#t.values())a!==t&&this.#c(a)}#c(t){const n=this.body;n&&t!==n&&Math.abs(t.scrollLeft-n.scrollLeft)>=1&&this.#l(t,n.scrollLeft)}#l(t,n){t.scrollLeft=n,this.#n.set(t,t.scrollLeft)}#h(t,n){if(typeof ResizeObserver>"u"){this.#o=n,this.measure();return}this.#i??=new ResizeObserver(()=>{this.#a||(this.#a=requestAnimationFrame(()=>{this.#a=0,this.measure(),this.#e.resized()}))}),this.#o!==n&&(this.#o&&this.#i.unobserve(this.#o),n&&this.#i.observe(n),this.#o=n),this.#i.observe(t)}#d=t=>{const n=t.currentTarget,i=this.#n.get(n);i!==void 0&&(this.#n.delete(n),Math.abs(i-n.scrollLeft)<1)||this.syncFrom(n)};#p=t=>{const n=this.body,i=t.deltaX||(t.shiftKey?t.deltaY:0);if(!n||!i||t.ctrlKey)return;const s=t.deltaMode===1?gR:t.deltaMode===2?n.clientWidth:1;t.preventDefault(),this.#l(n,n.scrollLeft+i*s),this.syncFrom(n)}}const mx=["aria-label","aria-labelledby"],bR={subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:["aria-label","aria-hidden","alt","hidden"]},wR={attributes:!0,attributeFilter:["aria-label"]},xR={subtree:!0,childList:!0,attributes:!0,attributeFilter:["id"]},yR=new Set(["SCRIPT","STYLE","TEMPLATE","NOSCRIPT"]),Ds=e=>e.replace(/\s+/g," ").trim(),v0=e=>typeof e.checkVisibility!="function"||e.checkVisibility({visibilityProperty:!0}),b0=(e,t)=>{if(e.nodeType===Node.TEXT_NODE)return e.nodeValue??"";if(!(e instanceof Element)||yR.has(e.tagName)||e.getAttribute("aria-hidden")==="true"||t&&!v0(e))return"";const n=Ds(e.getAttribute("aria-label")??"");if(n)return` ${n} `;if(e.tagName==="IMG")return` ${e.getAttribute("alt")??""} `;if(e.tagName==="BR")return" ";const i=e instanceof HTMLSlotElement?e.assignedNodes({flatten:!0}):[];return(i.length?i:[...(e.shadowRoot??e).childNodes]).map(a=>b0(a,t)).join("")},CR=e=>{const t=Ds(e.getAttribute("aria-label")??"");if(t)return t;const n=v0(e);return Ds([...(e.shadowRoot??e).childNodes].map(i=>b0(i,n)).join(""))};class _R{#e;#t;#n="";#o=[];#s=[];#i=[];#a;#r;#c;#l=!1;constructor(t,n){this.#e=t,this.#t=n}get name(){return this.#n}get elements(){return this.#i}get observers(){return(this.#a?1:0)+(this.#r?1:0)}update(){const t=Ds(this.#e.getAttribute("aria-labelledby")??"").split(" ").filter(Boolean),n=this.#e.isConnected?this.#e.getRootNode():void 0;this.#o=t,this.#c=t.length&&typeof n?.getElementById=="function"&&typeof MutationObserver=="function"?n:void 0,this.#s=this.#c?t.map(i=>this.#c.getElementById(i)):[],this.#d(),this.#f()}disconnect(){this.#a?.disconnect(),this.#a=void 0,this.#r?.disconnect(),this.#r=void 0,this.#o=[],this.#s=[],this.#i=[],this.#c=void 0}#h(t){return t===this.#e||t.contains(this.#e)}#d(){this.#a?.disconnect(),this.#r?.disconnect();const t=this.#s.filter(n=>!!n);if(t.length){this.#a??=new MutationObserver(this.#p);for(const n of t)this.#a.observe(n,this.#h(n)?wR:bR)}else this.#a=void 0;this.#c?(this.#r??=new MutationObserver(this.#u),this.#r.observe(this.#c,xR)):this.#r=void 0}#p=()=>{this.#f()};#u=()=>{const t=this.#c;t&&this.#o.some((n,i)=>t.getElementById(n)!==this.#s[i])&&this.update()};#f(){const t=a=>a?this.#h(a)?Ds(a.getAttribute("aria-label")??""):CR(a):"";!this.#l&&this.#s.some(a=>a&&this.#h(a))&&(this.#l=!0,console.warn("<u-grid>: aria-labelledby points to the grid or an element that contains it; only its aria-label is used."));const n=Ds(this.#s.map(t).join(" "))||Ds(this.#e.getAttribute("aria-label")??""),i=this.#s.filter(a=>!!a&&!this.#h(a)),s=i.length===this.#i.length&&i.every((a,c)=>a===this.#i[c]);(n!==this.#n||!s)&&(this.#n=n,this.#i=i,this.#t())}}const Po=-1,w0=(e,t)=>{const n=e.ctrlKey||e.metaKey;switch(e.key){case"ArrowLeft":return t?"right":"left";case"ArrowRight":return t?"left":"right";case"ArrowUp":return"up";case"ArrowDown":return"down";case"Home":return n?"gridHome":"home";case"End":return n?"gridEnd":"end";case"PageUp":return"pageUp";case"PageDown":return"pageDown";default:return}},gx=(e,t,n)=>Math.min(Math.max(e,t),n),AR=(e,t,n)=>{const{rowCount:i,colCount:s,hasHeader:a,pageSize:c}=n,h=a?Po:0,u=i-1,f=Math.max(s-1,0),g=gx(e.row,h,Math.max(u,h)),v=gx(e.col,0,f),y=g>=0&&n.isGroupRow(g);switch(t){case"left":return{row:g,col:y?v:Math.max(v-1,0)};case"right":return{row:g,col:y?v:Math.min(v+1,f)};case"up":return{row:Math.max(g-1,h),col:v};case"down":return{row:Math.min(g+1,Math.max(u,h)),col:v};case"home":return{row:g,col:y?v:0};case"end":return{row:g,col:y?v:f};case"gridHome":return{row:h,col:0};case"gridEnd":return{row:Math.max(u,h),col:f};case"pageUp":return{row:g===Po?Po:Math.max(g-Math.max(c,1),0),col:v};case"pageDown":{const _=Math.min(g===Po?Math.max(c,1)-1:g+Math.max(c,1),u);return{row:Math.max(_,h),col:v}}}},kR=(e,t)=>{const n=Math.min(e,t),i=Math.max(e,t),s=[];for(let a=n;a<=i;a++)s.push(a);return s},SR=(e,t,n)=>{const{levels:i,colCount:s,hasBody:a,cellAt:c}=n,h=Math.min(Math.max(e.row+i,0),i-1),u=Math.max(s-1,0),f=Math.min(Math.max(e.col,0),u),g=c(h,f)??{level:h,rowSpan:1,start:f,span:1},v=h-i;switch(t){case"left":return{row:v,col:g.start>0?g.start-1:f};case"right":return{row:v,col:g.start+g.span<=u?g.start+g.span:f};case"home":return{row:v,col:0};case"end":return{row:v,col:u};case"gridHome":return{row:-i,col:0};case"up":return{row:g.level>0?g.level-1-i:v,col:f};case"down":{const y=g.level+g.rowSpan;return y<i?{row:y-i,col:f}:a?{row:0,col:f}:{row:v,col:f}}case"pageUp":return{row:v,col:f};default:return}},Gc=e=>e.key==="ContextMenu"||e.key==="F10"&&e.shiftKey&&!e.ctrlKey&&!e.altKey&&!e.metaKey,ER=500,vx=(e,t)=>{const n=e.normalize("NFD").replace(/\p{M}/gu,"").trim();try{return n.toLocaleLowerCase(t||void 0)}catch{return n.toLowerCase()}},Ef=e=>typeof e=="function"?e():e,bx=e=>e.getAttribute("aria-disabled")!=="true";class wx{constructor(t,n){this.#n=null,this.#o=!1,this.#s=null,this.#i="",this.#r=null,this.#c=!1,this.#l=!1,this.onKeyDown=i=>{if(i.isComposing)return;const s=i.composedPath()[0],a=this.#u,c=!!a?.contains(s),h=c?this.#f(a):this.#m,u=h.indexOf(s),f=c?void 0:s.getAttribute?.("data-submenu")??void 0,g=this.#e._isRtl(),v=g?"ArrowLeft":"ArrowRight",y=g?"ArrowRight":"ArrowLeft";let _;if(f!==void 0&&(i.key===v||i.key==="Enter"||i.key===" ")){i.preventDefault(),this.openSubmenu(f,!0);return}if(c&&(i.key===y||i.key==="Escape")){i.preventDefault(),i.stopPropagation(),this.closeSubmenu(!0);return}switch(i.key){case"ArrowDown":_=(u+1)%h.length;break;case"ArrowUp":_=(u-1+h.length)%h.length;break;case"Home":_=0;break;case"End":_=h.length-1;break;case"Escape":i.preventDefault(),i.stopPropagation(),this.hide(!0);return;case"Tab":i.preventDefault(),this.hide(!0);return;default:if(_=this.#b(i,h,u),_===void 0)return}i.preventDefault();const E=h[_];!c&&E!==s&&this.closeSubmenu(),E?.focus()},this.#C=i=>{const s=this.#n?.opener;i.composedPath().some(c=>c instanceof HTMLElement&&(c.classList.contains(this.#t)||c.classList.contains(`${this.#t}-submenu`)||!!s&&c===s&&c.getAttribute("aria-expanded")==="true"))||this.hide()},this.#e=t,this.#t=n,t.addController(this)}#e;#t;#n;#o;#s;#i;#a;#r;#c;#l;get open(){return this.#n!==null}get data(){return this.#n?.data}get opener(){return this.#n?.opener??null}get submenu(){return this.#r}get timers(){return this.#a===void 0?0:1}show(t){this.#n&&(this.#u?.hidePopover?.(),this.#p?.hidePopover?.()),this.#n=t,this.#o=!1,this.#s=null,this.#h(),this.#e.requestUpdate()}hide(t=!1){this.#n&&(this.#s=t?this.#n.returnFocus:null,this.#d())}hideAndFocus(){const t=this.#n;if(!t)return;this.#s=null,this.#d();const n=Ef(t.returnFocus);n?.isConnected&&n.focus()}openSubmenu(t,n=!1){if(this.#n){if(this.#r===t){n&&(this.#c?this.#g(this.#u):this.#l=!0);return}this.#u?.hidePopover?.(),this.#r=t,this.#c=!1,this.#l=n,this.#e.requestUpdate()}}closeSubmenu(t=!1){const n=this.#r;if(n===null)return;const i=this.#v(n),s=this.#u,a=this.#e.renderRoot.activeElement,c=!!a&&!!s?.contains(a);s?.hidePopover?.(),this.#h(),this.#e.requestUpdate(),(t||c)&&i?.focus()}hoverItem(t,n){n?this.openSubmenu(t):this.closeSubmenu()}#h(){this.#r=null,this.#c=!1,this.#l=!1}#d(){this.#n=null,this.#x(),this.#u?.hidePopover?.(),this.#h(),this.#p?.hidePopover?.(),document.removeEventListener("pointerdown",this.#C,!0),this.#e.requestUpdate()}get#p(){return this.#e.renderRoot.querySelector(`.${this.#t}`)}get#u(){return this.#e.renderRoot.querySelector(`.${this.#t}-submenu`)}#f(t){return[...t?.querySelectorAll("[role^=menuitem]")??[]]}get#m(){return this.#f(this.#p)}#v(t){return this.#m.find(n=>n.getAttribute("data-submenu")===t)??null}#g(t){const n=this.#f(t);(n.find(bx)??n[0])?.focus()}hostUpdated(){if(!this.#n){const n=Ef(this.#s);this.#s=null,n?.isConnected&&n.focus();return}const t=this.#p;if(t){if(!this.#o){this.#o=!0,typeof t.showPopover=="function"&&!t.matches(":popover-open")&&t.showPopover(),this.#y(t,this.#n),document.addEventListener("pointerdown",this.#C,!0);const n=this.#m,i=n.filter(bx);((this.#n.focusLast?i[i.length-1]:i[0])??n[0])?.focus()}this.#w()}}#w(){const t=this.#r;if(t===null||this.#c)return;const n=this.#u,i=this.#v(t);if(!n||!i){this.#h();return}this.#c=!0,typeof n.showPopover=="function"&&!n.matches(":popover-open")&&n.showPopover(),this.#_(n,i),this.#l&&(this.#l=!1,this.#g(n))}hostDisconnected(){document.removeEventListener("pointerdown",this.#C,!0),this.#n=null,this.#o=!1,this.#s=null,this.#h(),this.#x()}focusItem(t){const n=this.#m;n[(t+n.length)%n.length]?.focus()}#b(t,n,i){if(t.key.length!==1||t.key===" "||t.ctrlKey||t.altKey||t.metaKey||!n.length)return;const a=(n[0].closest("[role=menu]")??this.#p)?.closest("[lang]")?.getAttribute("lang")??void 0,c=vx(t.key,a);clearTimeout(this.#a),this.#i+=c,this.#a=setTimeout(()=>this.#x(),ER);const h=this.#i,u=h.length>1&&h.split(c).every(v=>v===""),f=u?c:h,g=h.length===1||u?i+1:i;for(let v=0;v<n.length;v++){const y=(g+v+n.length)%n.length,_=n[y];if(vx(_.querySelector(".menu-item-text")?.textContent??_.textContent??"",_.closest("[lang]")?.getAttribute("lang")??a).startsWith(f))return y}return i>=0?i:0}#x(){clearTimeout(this.#a),this.#a=void 0,this.#i=""}#y(t,n){const s=t.offsetWidth,a=t.offsetHeight,c=document.documentElement.clientWidth,h=document.documentElement.clientHeight;let u,f;if(n.x!==void 0&&n.y!==void 0)u=this.#e._isRtl()?n.x-s:n.x,f=n.y;else{const v=(n.positionTarget??Ef(n.returnFocus)??this.#e).getBoundingClientRect();u=this.#e._isRtl()?v.right-s:v.left,f=v.bottom+4,f+a>h-8&&v.top-a-4>=8&&(f=v.top-a-4)}t.style.left=`${Math.round(Math.max(8,Math.min(u,c-s-8)))}px`,t.style.top=`${Math.round(Math.max(8,Math.min(f,h-a-8)))}px`}#_(t,n){const s=n.getBoundingClientRect(),a=t.offsetWidth,c=t.offsetHeight,h=document.documentElement.clientWidth,u=document.documentElement.clientHeight,f=this.#e._isRtl();let g=f?s.left-a:s.right;!f&&g+a>h-8&&s.left-a>=8?g=s.left-a:f&&g<8&&s.right+a<=h-8&&(g=s.right);const v=s.top-8;t.style.left=`${Math.round(Math.max(8,Math.min(g,h-a-8)))}px`,t.style.top=`${Math.round(Math.max(8,Math.min(v,u-c-8)))}px`}#C}const MR=Xm`<path d="M9.3 6.7 10.7 5.3l6.7 6.7-6.7 6.7-1.4-1.4 5.3-5.3z"/>`,RR=Xm`<path d="M9.5 16.2 5.3 12l-1.4 1.4 5.6 5.6 11-11-1.4-1.4z"/>`,$R=(e,t,n,i)=>{const{onAction:s,onDisabledAction:a,controller:c}=t,h=!i&&!!e.children?.length&&!!c,u=h&&c.submenu===e.key,f=e.checked!==void 0;return L`<button
    class="menu-item group-panel-menu-item ${h?"menu-item-parent":""} ${f?"menu-item-radio":""}"
    part="menu-item"
    type="button"
    role=${f?"menuitemradio":"menuitem"}
    tabindex="-1"
    lang=${W(e.lang)}
    data-submenu=${W(h?e.key:void 0)}
    aria-haspopup=${W(h?"menu":e.hasPopup)}
    aria-expanded=${W(h?u?"true":"false":void 0)}
    aria-controls=${W(u?n:void 0)}
    aria-checked=${W(f?e.checked?"true":"false":void 0)}
    aria-disabled=${e.disabled?"true":"false"}
    @pointerenter=${!i&&c?g=>{g.pointerType!=="touch"&&c.hoverItem(e.key,h)}:P}
    @click=${()=>{h?u?c.closeSubmenu():c.openSubmenu(e.key):e.disabled?a?.(e.key):s(e.key)}}>${f?L`<svg class="menu-item-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">${e.checked?RR:P}</svg>`:P}<span class="menu-item-text">${e.label}</span>${e.hiddenSuffix?L`<span class="visually-hidden" lang=${W(e.suffixLang)}> ${e.hiddenSuffix}</span>`:P}${h?L`<svg class="menu-item-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">${MR}</svg>`:P}</button>`},xx=(e,t,n,i)=>rt(e,(s,a)=>L`${s.separatorBefore&&a>0?L`<div class="menu-separator" part="menu-separator" role="separator"></div>`:P}${$R(s,t,n,i)}`),x0=e=>{const{className:t,part:n,label:i,labelledBy:s,labelLang:a,entries:c,onKeyDown:h,controller:u}=e,f=`${t.split(" ")[0]}-submenu`,g=u?.submenu??null,v=g===null?void 0:c.find(y=>y.key===g&&y.children?.length);return L`
    <div
      class="grid-menu ${t}"
      part=${n}
      .popover=${"manual"}
      role="menu"
      lang=${W(a)}
      aria-label=${W(i)}
      aria-labelledby=${W(s)}
      @contextmenu=${y=>y.preventDefault()}
      @keydown=${h}>
      ${xx(c,e,f,!1)}
    </div>${v?L`<div
        class="grid-menu grid-submenu ${f}"
        id=${f}
        part=${n}
        .popover=${"manual"}
        role="menu"
        lang=${W(a)}
        aria-label=${v.label}
        @contextmenu=${y=>y.preventDefault()}
        @keydown=${h}>
        <div class="menu-group" role="group" aria-label=${v.label} lang=${W(v.lang)}>${xx(v.children,e,f,!0)}</div>
      </div>`:P}`},TR=16,y0=40,Zs=(e,t,n)=>Math.round(Math.min(Math.max(e,t),Math.max(t,n))),zR=(e,t,n)=>{const i=Zs(t.width+e,t.min,t.max);if(!n)return{width:i};const s=Zs(n.width-(i-t.width),n.min,n.max);return{width:t.width+(n.width-s),nextWidth:s}},LR=e=>getComputedStyle(e).display.startsWith("inline"),OR=(e,t=".resize-handle")=>{const n=document.createRange();let i=1/0,s=-1/0;const a=g=>{for(const v of g)v.width>0&&(i=Math.min(i,v.left),s=Math.max(s,v.right))},c=g=>{if(g.nodeType===Node.TEXT_NODE){n.selectNodeContents(g),a(n.getClientRects());return}if(!(!(g instanceof Element)||g.matches(t))){if(g instanceof HTMLSlotElement){g.assignedNodes({flatten:!0}).forEach(c);return}if(g!==e&&LR(g)&&g.childNodes.length){a([g.getBoundingClientRect()]);return}g.childNodes.forEach(c)}};c(e);const h=getComputedStyle(e),u=(parseFloat(h.paddingInlineStart)||0)+(parseFloat(h.paddingInlineEnd)||0),f=s>i?s-i:0;return Math.ceil(f+u)};class DR{constructor(t){this.pointerDown=(n,i)=>{if(n.button!==0||this.#t)return;n.stopPropagation(),n.preventDefault();const s=n.currentTarget,{start:a,next:c,startNext:h}=this.#n(i),u=(s.parentElement??s).getBoundingClientRect(),f=this.#e._isRtl()?u.left:u.right;this.#t={column:i,next:c,start:a,startNext:h,startX:n.clientX,pointerId:n.pointerId,handle:s,delta:0,changed:!1,startEdge:f};try{s.setPointerCapture(n.pointerId)}catch{}s.addEventListener("pointermove",this.#s),s.addEventListener("pointerup",this.#i),s.addEventListener("pointercancel",this.#i),s.addEventListener("lostpointercapture",this.#i),this.#e._setResizing(!0),this.#e._showResizeLine(f)},this.#s=n=>{const i=this.#t;if(i?.pointerId!==n.pointerId)return;i.delta=(n.clientX-i.startX)*(this.#e._isRtl()?-1:1);const{changed:s,width:a}=this.#o(i.column,i.start,i.delta,i.next,i.startNext,!1);i.changed=s,this.#e._showResizeLine(i.startEdge+(a-i.start.width)*(this.#e._isRtl()?-1:1))},this.#i=n=>{const i=this.#t;i?.pointerId===n.pointerId&&(this.#a(i),n.type==="pointercancel"?this.#o(i.column,i.start,0,i.next,i.startNext,!1):i.changed&&this.#o(i.column,i.start,i.delta,i.next,i.startNext,!0))},this.#e=t}#e;#t;get active(){return!!this.#t}keyDown(t,n,i){if(t.key!=="ArrowLeft"&&t.key!=="ArrowRight"||(i?!t.altKey:t.ctrlKey||t.metaKey))return!1;t.preventDefault(),t.stopPropagation();const s=t.key==="ArrowRight"?1:-1;return this.step(n,s*(this.#e._isRtl()?-1:1)),!0}step(t,n){const{start:i,next:s,startNext:a}=this.#n(t);this.#o(t,i,n*TR,s,a,!0)}#n(t){const n=this.#e;n._freezeWidths();const i=n.resizeMode==="next-column"?n._resizeNeighbor(t):void 0;return{start:n._boundsOf(t),next:i,startNext:i?n._boundsOf(i):void 0}}#o(t,n,i,s,a,c){const h=zR(i,n,a),u=new Map([[t,h.width]]);s&&h.nextWidth!==void 0&&u.set(s,h.nextWidth),this.#e._setUserWidths(u);const f=h.width!==n.width;return c&&f&&this.#e._dispatchColumnResize({column:t,width:h.width,previousWidth:n.width,...s&&h.nextWidth!==void 0?{nextColumn:s,nextColumnWidth:h.nextWidth}:{}}),{changed:f,width:h.width}}#s;#i;cancel(){this.#t&&this.#a(this.#t)}#a(t){this.#t=void 0;const{handle:n,pointerId:i}=t;n.removeEventListener("pointermove",this.#s),n.removeEventListener("pointerup",this.#i),n.removeEventListener("pointercancel",this.#i),n.removeEventListener("lostpointercapture",this.#i),n.hasPointerCapture(i)&&n.releasePointerCapture(i),this.#e._showResizeLine(null),this.#e._setResizing(!1)}}const yx=15e6,PR=30;class C0{constructor(t){this.source=t}get isWindow(){return!(this.source instanceof HTMLElement)}get target(){return this.source}get element(){const t=this.source;return t instanceof HTMLElement?t:t.document.scrollingElement??t.document.documentElement}get scrollTop(){const t=this.source;return t instanceof HTMLElement?t.scrollTop:t.scrollY}set scrollTop(t){const n=this.source;n instanceof HTMLElement?n.scrollTop=t:n.scrollTo({top:t,behavior:"instant"})}get clientHeight(){const t=this.source;return t instanceof HTMLElement?t.clientHeight:t.document.documentElement.clientHeight}rect(){const t=this.source;if(!(t instanceof HTMLElement)){const c=t.document.documentElement;return{top:0,left:0,right:c.clientWidth,bottom:c.clientHeight}}const n=t.getBoundingClientRect(),i=n.top+t.clientTop,s=Math.max(0,t.offsetWidth-t.clientLeft*2-t.clientWidth),a=n.left+t.clientLeft+(s&&getComputedStyle(t).direction==="rtl"?s:0);return{top:i,left:a,right:a+t.clientWidth,bottom:i+t.clientHeight}}}class IR{#e;#t;#n=0;#o=0;#s=0;#i=0;#a=0;#r=0;#c;#l;#h;#d;#p=0;#u=new Int32Array(0);#f=new Float64Array(0);#m;#v;#g;#w;#b=0;#x;constructor(t,n){this.#e=t,this.#t=n,t.addController(this)}hostConnected(){this.#y()}hostUpdated(){this.#y()}hostDisconnected(){const t=this.#v;t?.target.removeEventListener("scroll",this.#$),this.#w&&(t?.target.removeEventListener("resize",this.#w),this.#w=void 0),cancelAnimationFrame(this.#b),this.#b=0,this.#g?.disconnect(),this.#g=void 0,this.#v=void 0,this.#l=void 0,this.#c=void 0}get port(){return this.#v}#y(){const t=this.#t.getScrollElement()??void 0;if(!t||t===this.#v?.source)return;this.hostDisconnected();const n=new C0(t);this.#v=n,n.target.addEventListener("scroll",this.#$,{passive:!0});const i=()=>{const s=n.clientHeight,a=this.#t.getScrollMargin?.()??0;(s!==this.#s||a!==this.#i)&&(this.#s=s,this.#i=a,this.#I(n.scrollTop),this.#e.requestUpdate())};n.isWindow?(this.#w=i,n.target.addEventListener("resize",i,{passive:!0}),this.#b=requestAnimationFrame(()=>{this.#b=0,i()})):typeof ResizeObserver<"u"&&(this.#g=new ResizeObserver(i),this.#g.observe(n.element))}sync(){const t=this.#v;t&&(this.#s=t.clientHeight||this.#s,this.#$())}get count(){return this.#n}set count(t){t!==this.#n&&(this.#n=t,this.#R(),this.#M())}measure(){this.#R(),this.#M()}get measuredSizes(){return this.#p}setVariableRows(t,n){this.#u=t,this.#f=n,this.#_(),this.#M()}get variableRows(){return this.#u.length}#_(){const t=this.#u.length;if(!t){this.#m=void 0;return}const n=new Float64Array(t+1);for(let i=1;i<=t;i++){n[i]+=this.#f[i-1]-this.#L(this.#u[i-1]);const s=i+(i&-i);s<=t&&(n[s]+=n[i])}this.#m=n}#C(t){const n=this.#u,i=this.#E(t);return i<n.length&&n[i]===t?i:-1}#E(t){const n=this.#u;let i=0,s=n.length;for(;i<s;){const a=i+s>>>1;n[a]<t?i=a+1:s=a}return i}#z(t){const n=this.#m;if(!n)return 0;let i=0;for(let s=t;s>0;s-=s&-s)i+=n[s];return i}#F(t,n){const i=this.#m,s=n-this.#f[t];this.#f[t]=n;for(let a=t+1;a<i.length;a+=a&-a)i[a]+=s}get virtualSize(){return(this.#h?this.#O(this.#n):this.#n*this.#A())+this.#z(this.#u.length)}getTotalSize(){return Math.min(this.virtualSize,yx)}startOf(t){const n=this.#h?this.#O(t):t*this.#A();return this.#m?n+this.#z(this.#E(t)):n}#L(t){return this.#d?.[t]??this.#A()}sizeOf(t){if(this.#m){const n=this.#C(t);if(n>=0)return this.#f[n]}return this.#L(t)}measureRows(t,n=!0){let i=!1,s=0;const a=this.#r-this.#i;for(const c of t){const h=Number(c.getAttribute("data-index")??Number.NaN);if(!(h>=0&&h<this.#n))continue;const u=this.#m?this.#C(h):-1;if(u<0&&!n)continue;const f=c.getBoundingClientRect().height,g=this.sizeOf(h);f>0&&Math.abs(f-g)>.5&&(this.startOf(h)+g<=a&&(s+=f-g),u>=0?this.#F(u,f):this.#W(h,f),i=!0)}return i&&(s&&this.#N(s),this.#M(),this.#e.requestUpdate()),i}#N(t){const n=this.#v;if(!n)return;if(this.scaled){this.#r=Math.max(0,this.#r+t);return}const i=Math.max(0,this.#a+t);this.#a=i,this.#r=i,this.#c={physical:i,virtual:i},n.scrollTop=i}#A(){const t=this.#t.rowHeight();return t!==this.#o&&(this.#o=t,this.#R(),this.#_()),t}#R(){this.#h=void 0,this.#d=void 0,this.#p=0}#W(t,n){const i=this.#A();if(!this.#h){const c=this.#n,h=new Float64Array(c+1);for(let u=1;u<=c;u++){h[u]+=i;const f=u+(u&-u);f<=c&&(h[f]+=h[u])}this.#h=h,this.#d=new Float64Array(c).fill(i)}const s=this.#d,a=n-s[t];s[t]===i?this.#p++:n===i&&this.#p--,s[t]=n;for(let c=t+1;c<=this.#n;c+=c&-c)this.#h[c]+=a}#O(t){const n=this.#h;let i=0;for(let s=Math.min(t,this.#n);s>0;s-=s&-s)i+=n[s];return i}indexAt(t){const n=this.#n;if(n===0)return 0;if(this.#m){let c=0,h=n-1;for(;c<h;){const u=Math.floor((c+h+1)/2);this.startOf(u)<=t?c=u:h=u-1}return c}if(!this.#h)return Math.min(n-1,Math.max(0,Math.floor(t/this.#A())));const i=this.#h;let s=0,a=t;for(let c=2**Math.floor(Math.log2(n));c>=1;c/=2){const h=s+c;h<=n&&i[h]<=a&&(s=h,a-=i[h])}return Math.min(n-1,s)}get scaled(){return this.virtualSize>yx}#$=()=>{const t=this.#v;if(!t)return;this.#i=this.#t.getScrollMargin?.()??0,this.#I(t.scrollTop);const n=this.getWindow(),i=this.#x;(!n||n.first!==i?.first||n.end!==i.end||n.offset!==i.offset)&&this.#e.requestUpdate()};revealOffset(t,n,i){const s=this.#v,a=Math.min(Math.max(this.#n-1,0),Math.max(0,t));if(!s||!this.scaled)return this.startOf(a);this.#i=this.#t.getScrollMargin?.()??this.#i;const c=this.#s||s.clientHeight,h=this.startOf(a)+this.#i-n,u=this.startOf(a)+this.sizeOf(a)+this.#i+i,f=this.#r;let g=f;h<f?g=h:u>f+c&&(g=u-c),g=Math.max(0,g);const v=Math.abs(g-f)<=c?this.#a+g-f:this.#B(g);return this.#l={fromPhysical:this.#a,fromVirtual:f,physical:v,virtual:g},this.startOf(a)-(g-v)}endGlide(){this.#l&&Math.abs(this.#a-this.#l.physical)>=1&&(this.#l=void 0)}#k(){return Math.max(0,this.getTotalSize()+this.#i-this.#s)}#S(){return Math.max(0,this.virtualSize+this.#i-this.#s)}#T(){return this.#t.isExternal?.()??!1}#D(){const t=Math.max(this.#s,this.#A()),n=this.#k(),i=this.#S();return{p0:this.#i+t,p1:n-t,v0:this.#i+t,v1:i-t,maxPhysical:n,maxVirtual:i}}#P(t){const{p0:n,p1:i,v0:s,v1:a,maxPhysical:c,maxVirtual:h}=this.#D();return t<=n?t:t>=i?h+t-c:s+(t-n)*(a-s)/Math.max(1,i-n)}#B(t){const{p0:n,p1:i,v0:s,v1:a,maxPhysical:c,maxVirtual:h}=this.#D();return t<=s?t:t>=a?c+t-h:n+(t-s)*(i-n)/Math.max(1,a-s)}#I(t){const n=this.#a;this.#a=t;const i=this.#l;if(i){const h=Math.min(i.fromPhysical,i.physical)-1,u=Math.max(i.fromPhysical,i.physical)+1;if(t>=h&&t<=u){const f=i.physical-i.fromPhysical,g=Math.abs(f)<1?1:Math.min(1,Math.max(0,(t-i.fromPhysical)/f));this.#r=g===1?i.virtual+t-i.physical:i.fromVirtual+g*(i.virtual-i.fromVirtual),Math.abs(t-i.physical)<1&&(this.#l=void 0);return}this.#l=void 0}if(this.#c&&Math.abs(this.#c.physical-t)<1){this.#r=this.#c.virtual,this.#c=void 0;return}if(this.#c=void 0,!this.scaled){this.#r=t;return}const s=this.#k(),a=this.#S(),c=t-n;if(this.#T()){const h=Math.abs(c)<=Math.max(this.#s,this.#A());this.#r=t>this.#i&&t<s-1&&h?Math.min(a,Math.max(0,this.#r+c)):this.#P(t)}else t<=0?this.#r=0:t>=s-1?this.#r=a:Math.abs(c)<=Math.max(this.#s,this.#A())?this.#r=Math.min(a,Math.max(0,this.#r+c)):this.#r=s?t/s*a:0}#M(){if(!this.scaled){this.#r=this.#T()?this.#a:Math.min(this.#a,this.#k());return}if(this.#T()&&(this.#a<=this.#i||this.#a>=this.#k()-1)){this.#r=this.#P(this.#a);return}this.#r=Math.min(Math.max(0,this.#r),this.#S())}getWindow(){const t=this.#n;if(!this.#s||!t)return;const{overscan:n}=this.#t,i=Math.max(0,this.#r-this.#i),s=Math.max(0,this.indexAt(i)-n),a=Math.min(t,this.indexAt(i+this.#s)+1+n),c=this.scaled?this.#r-this.#a:0;return{first:s,end:a,offset:this.startOf(s)-c}}renderWindow(){const t=this.getWindow()??{first:0,end:Math.min(this.#n,PR),offset:0};return this.#x=t,t}scrollToIndex(t,{align:n="auto"}={}){const i=this.#v;if(!i||!this.#n)return;const s=Math.min(this.#n-1,Math.max(0,t)),a=this.#t.getScrollMargin?.()??this.#i,c=this.#t.getStickyHeight?.()??0,h=this.startOf(s)+a-c,u=this.startOf(s)+this.sizeOf(s)+a,f=Math.max((this.#s||i.clientHeight)-(this.#t.getStickyBottomHeight?.()??0),this.sizeOf(s)),g=this.#r;let v=g;if(n==="start"||n==="auto"&&h<g?v=h:n==="end"||n==="auto"&&u>g+f?v=u-f:n==="center"&&(v=(h+u-f)/2),v=Math.min(Math.max(0,v),this.#S()),Math.abs(v-g)<.5)return;if(!this.scaled){i.scrollTop=v;return}const y=this.#S(),E=Math.abs(v-g)<=f?Math.min(this.#k(),Math.max(0,this.#a+v-g)):y?v/y*this.#k():0;this.#c={physical:E,virtual:v},i.scrollTop=E,this.#a=E,this.#r=v,this.#e.requestUpdate()}}const FR=':host([scroll-container]:not([scroll-container=""]):not([scroll-container-axis="both"]))',NR=2e3,Cx=e=>{const t=e.ownerDocument;return e===t.documentElement||e===t.scrollingElement},yr=e=>{if(e.parentElement)return e.parentElement;const t=e.parentNode;return t instanceof ShadowRoot?t.host:null};class WR{#e;#t;#n=null;#o=!1;#s=new Set;#i;#a="";#r;#c;#l=new Set;#h=new Map;constructor(t,n){this.#e=t,this.#t=n,t.addController(this)}hostConnected(){this.resolve()}hostDisconnected(){this.#x(),this.#o=!1}get port(){return this.#n}get external(){return this.#o?this.#n!==null:this.#d()}get axis(){const t=this.#e.scrollContainerAxis;return t==="both"||t==="block"?t:(t!=null&&this.#f(`axis:${String(t)}`,`scroll-container-axis="${String(t)}" is not 'block' or 'both'; using 'block'.`),"block")}get bands(){return this.external&&this.axis==="block"}#d(){const{scrollContainer:t,scrollContainerElement:n}=this.#e;return!!n||!!t?.trim()}#p=new WeakMap;#u(t,n){const i=this.#p.get(t)??new Set;i.has(n)||(i.add(n),this.#p.set(t,i),console.warn(`<u-grid>: ${n}`))}checkHeight(){const t=this.#e;this.#n&&t.scrollHeight>t.clientHeight+1&&this.#u(t,"with scroll-container the grid grows to its content; do not give it a height (it clips the rows).")}checkHorizontalClip(t){const n=this.#n,i=this.#e;if(!n||!t)return;const s=t.getBoundingClientRect(),a=n.rect(),c=t.offsetWidth>i.clientWidth+1,h=s.right>a.right+1||s.left<a.left-1;if(!c&&!h)return;const u=i.ownerDocument,f=v=>["hidden","clip"].includes(getComputedStyle(v).overflowX),g=n.isWindow?[u.documentElement,u.body].find(v=>v&&f(v)):f(n.source)?n.source:void 0;g&&this.#u(g,`the table does not fit horizontally, but ${n.isWindow?`<${g.tagName.toLowerCase()}>`:"its scroll container"} has overflow-x: hidden/clip, so the extra columns cannot be scrolled to; use overflow-x: auto (or give the columns less width).`)}#f(t,n){this.#s.has(t)||(this.#s.add(t),console.warn(`<u-grid>: ${n}`))}axisChanged(){this.#w()}resolve(){const t=this.#e;if(!t.isConnected)return;const n=this.#m();this.#o=!0,n!==(this.#n?.source??null)&&(this.#x(),n&&this.#b(new C0(n)),t.requestUpdate()),this.#w()}#m(){const t=this.#e,n=t.scrollContainerElement,i=t.ownerDocument.defaultView;if(n)return n===i||n instanceof Element&&Cx(n)?(this.#g(null),i):!(n instanceof HTMLElement)||!this.#v(n)?(this.#u(n,"scrollContainerElement must be an ancestor element of the grid (or window); using the grid's own scrolling."),null):(this.#g(n),n);const s=t.scrollContainer;if(s==null)return null;const a=s.trim();if(!a)return this.#f("empty","scroll-container is empty; using the grid's own scrolling."),null;if(a==="window")return this.#g(null),i;for(let c=yr(t);c;c=yr(c))if(c.id===a)return Cx(c)?(this.#g(null),i):(this.#g(c),c);return this.#f(`id:${a}`,`scroll-container="${a}": no ancestor with this id; using the grid's own scrolling.`),null}#v(t){for(let n=yr(this.#e);n;n=yr(n))if(n===t)return!0;return!1}#g(t){const n=this.#e.ownerDocument;for(let i=yr(this.#e);i&&i!==t&&!(i===n.documentElement||i===n.body);i=yr(i)){const s=getComputedStyle(i);if(![s.overflowX,s.overflowY].every(a=>a==="visible"||a==="clip")){this.#u(i,"an ancestor between the grid and its scroll container has overflow set; sticky headers will stick to it instead.");return}}}#w(){const t=this.#e.shadowRoot,n=this.#e.hasAttribute("scroll-container"),i=this.#n?` min-inline-size: ${this.axis==="block"?"0":"auto"};`:"",s=n&&!(this.#n&&this.axis==="block")?` ${FR} { min-inline-size: auto; }`:"",c=`${this.#n&&!n?`:host { height: auto; overflow-anchor: none;${i} }`:!this.#n&&n?':host([scroll-container]:not([scroll-container=""])) { height: 100%; overflow-anchor: auto; min-inline-size: auto; }':i?`:host {${i} }`:""}${s}`.trim();if(!t||c===this.#a||typeof CSSStyleSheet>"u"||!("adoptedStyleSheets"in t))return;this.#a=c;const h=t.adoptedStyleSheets.filter(u=>u!==this.#i);c&&(this.#i??=new CSSStyleSheet,this.#i.replaceSync(c),h.push(this.#i)),t.adoptedStyleSheets=h}#b(t){this.#n=t,t.target.addEventListener("scroll",this.#y,{passive:!0}),t.isWindow?t.target.addEventListener("resize",this.#_,{passive:!0}):typeof ResizeObserver<"u"&&(this.#r=new ResizeObserver(this.#_),this.#r.observe(t.element)),typeof IntersectionObserver<"u"&&(this.#c=new IntersectionObserver(this.#E,{root:t.isWindow?null:t.element,threshold:[0,1]}))}#x(){const t=this.#n;t&&(t.target.removeEventListener("scroll",this.#y),t.target.removeEventListener("resize",this.#_)),this.#r?.disconnect(),this.#r=void 0,this.#c?.disconnect(),this.#c=void 0,this.#l.clear();for(const n of[...this.#h.keys()])n();this.#n=null}#y=()=>{this.#t.scroll()};#_=()=>{this.#t.moved()};#C=new WeakSet;#E=t=>{let n=!1;for(const i of t)this.#C.has(i.target)?n=!0:this.#C.add(i.target);n&&this.#t.moved()};observeRows(t){const n=this.#c;if(!n)return;const i=new Set(t);for(const s of this.#l)i.has(s)||(n.unobserve(s),this.#l.delete(s));for(const s of i)this.#l.has(s)||(n.observe(s),this.#l.add(s))}get observedRows(){return this.#l.size}get scrollEndWaits(){return this.#h.size}afterScrollEnd(t){const n=this.#n;if(!n){t();return}let i=!1,s=0;const a=()=>{i=!0},c=()=>{const h=this.#h.get(c);h!==void 0&&(clearTimeout(h),cancelAnimationFrame(s),this.#h.delete(c),n.target.removeEventListener("scrollend",c),n.target.removeEventListener("scroll",a),t())};this.#h.set(c,setTimeout(c,NR)),n.target.addEventListener("scrollend",c),n.target.addEventListener("scroll",a,{passive:!0}),s=requestAnimationFrame(()=>{s=requestAnimationFrame(()=>{i||c()})})}inlineInsets(t){const n=this.#n,i=this.#e;if(!n||!t)return{start:0,end:0,maskStart:0,maskEnd:0};const s=n.element,a=getComputedStyle(s),c=ge=>{const F=parseFloat(ge);return Number.isFinite(F)?Math.max(0,F):0},h=getComputedStyle(i).direction==="rtl",u=n.rect(),f=u.right-u.left,g=Math.abs(n.isWindow?s.ownerDocument.defaultView?.scrollX??0:s.scrollLeft),v=Math.max(0,s.scrollWidth-(n.isWindow?s.ownerDocument.documentElement.clientWidth:s.clientWidth)),y=Math.max(0,v-g),_=i.getBoundingClientRect(),E=t.getBoundingClientRect(),$=h?u.right-_.right-g:_.left-u.left+g,z=h?E.left+y-u.left:u.right-(E.right-y),D=ge=>ge>0&&ge<=f/2?Math.round(ge):0,I=c(a.scrollPaddingInlineStart),j=c(a.scrollPaddingInlineEnd),X=Math.max(I,D($)),Q=Math.max(j,D(z));return{start:X,end:Q,maskStart:X-I,maskEnd:Q-j}}padding(){const t=this.#n;if(!t)return{top:0,bottom:0};const n=getComputedStyle(t.element),i=parseFloat(n.scrollPaddingTop),s=parseFloat(n.scrollPaddingBottom);return{top:Number.isFinite(i)?i:0,bottom:Number.isFinite(s)?s:0}}}const _0=e=>e==="single"||e==="multiple"?e:"none";class BR{constructor(){this.#e=new Set,this.#t=Object.freeze([]),this.version=0}#e;#t;get size(){return this.#e.size}get keys(){return this.#t??=Object.freeze([...this.#e]),this.#t}has(t){return this.#e.has(t)}replace(t){const n=new Set(t),i=[],s=[];for(const a of n)this.#e.has(a)||i.push(a);for(const a of this.#e)n.has(a)||s.push(a);if(!(!i.length&&!s.length))return this.#n(n,i,s)}add(t){const n=[];let i;for(const s of t)this.#e.has(s)||i?.has(s)||(i??=new Set(this.#e),i.add(s),n.push(s));return i?this.#n(i,n,[]):void 0}remove(t){const n=[];let i;for(const s of t)(i??this.#e).has(s)&&(i??=new Set(this.#e),i.delete(s),n.push(s));return i?this.#n(i,[],n):void 0}#n(t,n,i){const s=this.keys;return this.#e=t,this.#t=void 0,this.version++,{selectedKeys:this.keys,previous:s,added:n,removed:i}}}const GR=(e,t,n)=>{if(!e.size)return 0;let i=0;for(const s of t)e.has(n?n(s):s)&&i++;return i},Sg=Object.freeze(["groupPanel","addRowButton","saveButton","discardButton","exportButton","columnChooserButton","searchPanel"]),KR=new Set(Sg),qR=new Set(["groupPanel","searchPanel"]),jR=e=>e.kind==="content"||e.kind==="built-in"&&e.name==="searchPanel",pu=e=>e.kind!=="content"&&e.inMenu!=="never",_x=new WeakMap,Dh=(e,t,n)=>{let i=_x.get(e);i||(i=new Set,_x.set(e,i)),i.has(t)||(i.add(t),console.warn(`<u-grid>: ${n}`))},HR=(e,t)=>{const n=e??Sg,i={leading:[],start:[],end:[],trailing:[]},s=new Set,a=e!==null;return n.forEach((c,h)=>{const u=typeof c=="string"?{name:c}:c;if(!u||typeof u!="object")return;let f;if(typeof u.name=="string"){const g=u.name;if(!KR.has(g)){Dh(n,`unknown:${g}`,`unknown toolbar item "${g}" ignored (host items use \`id\`, \`text\` and \`action\`).`);return}if(s.has(g)){Dh(n,`twice:${g}`,`toolbar item "${g}" listed twice; the first one is used.`);return}if(s.add(g),!t(g)){a&&Dh(n,`off:${g}`,`toolbar item "${g}" is not shown: its feature is off.`);return}const v=u.location??(g==="groupPanel"?"start":"end"),y=qR.has(g)?"never":u.locateInMenu??"auto";f={kind:"built-in",key:`b:${g}`,name:g,item:u,location:v,inMenu:y}}else if(typeof u.renderer=="function")f={kind:"content",key:`c:${h}`,item:u,location:u.location??"end"};else if(typeof u.text=="string"&&u.text.trim()&&typeof u.action=="function")f={kind:"button",key:`h:${h}`,item:u,location:u.location??"end",inMenu:u.locateInMenu??"never"};else{Dh(n,`unnamed:${h}`,"toolbar item without `text` and `action` (or `renderer`) ignored.");return}jR(f)?(f.location==="start"?i.leading:i.trailing).push(f):(f.location==="start"?i.start:i.end).push(f)}),i},UR=(e,t,n,i,s)=>{const a=new Set,c=[];for(const g of e)g.kind!=="content"&&(g.inMenu==="always"?a.add(g.key):g.inMenu==="auto"&&c.push(g));const h=c.reduce((g,v)=>g+(s(v.key)??0),0);if(n+h+(a.size?i:0)<=t)return a;let u=n+i,f=!1;for(const g of c){const v=s(g.key)??0;!f&&u+v<=t?u+=v:(f=!0,a.add(g.key))}return a};class VR{#e;constructor(t){this.#e=t}get(t){if(typeof t!="number"||!Number.isInteger(t)||t<0||t>=this.#e.length)return;const n=this.#e[t];return n<0?void 0:n}has(t){return this.get(t)!==void 0}}const ZR=(e,t)=>e==null||e===t||t!=null&&String(e)===String(t),XR=e=>{const t=e.length;let n=-1,i=!0;for(let c=0;c<t&&i;c++){const h=e[c];typeof h=="number"&&Number.isInteger(h)&&h>=0&&h<4*t+1024?n=Math.max(n,h):i=!1}let s=0;if(i){const c=new Int32Array(n+1).fill(-1);for(let h=0;h<t;h++){const u=e[h];c[u]>=0?s++:c[u]=h}return{lookup:new VR(c),duplicates:s}}const a=new Map;for(let c=0;c<t;c++){const h=e[c];a.has(h)?s++:a.set(h,c)}return{lookup:a,duplicates:s}},YR=(e,t,n,i)=>{const s=e.length,a=new Array(s);for(let D=0;D<s;D++)a[D]=t(e[D]);const{lookup:c,duplicates:h}=XR(a),u=new Int32Array(s);let f=0,g=!0;for(let D=0;D<s;D++){const I=n(e[D]);if(ZR(I,i)){u[D]=-1;continue}const j=c.get(I);if(j===void 0||j===D){u[D]=-1,f+=j===void 0?1:0;continue}u[D]=j,g&&=j<D}const v=new Int32Array(s);if(g){for(let D=0;D<s;D++){const I=u[D];v[D]=I<0?0:v[I]+1}return{nodes:e,parent:u,level:v,topo:null,keyIndex:c,orphans:f,cycles:0,duplicates:h}}const y=new Uint8Array(s),_=new Int32Array(s),E=[];let $=0,z=0;for(let D=0;D<s;D++){if(y[D]===2)continue;let I=D;for(E.length=0;I>=0&&y[I]===0;)y[I]=1,E.push(I),I=u[I];I>=0&&y[I]===1&&(u[I]=-1,z++);for(let j=E.length-1;j>=0;j--){const X=E[j],Q=u[X];v[X]=Q<0?0:v[Q]+1,y[X]=2,_[$++]=X}}return{nodes:e,parent:u,level:v,topo:_,keyIndex:c,orphans:f,cycles:z,duplicates:h}},JR=(e,t,n)=>{const i=[],s=[],a=[],c=new Map,h=n?new Set:c;let u=0,f=0;const g=[e],v=[0],y=[-1];for(;g.length;){const _=g.length-1,E=g[_],$=v[_];if($>=E.length){g.pop(),v.pop(),y.pop();continue}v[_]=$+1;const z=E[$];if(n?h.has(z):c.has(z)){u++;continue}const D=i.length,I=y[_];if(i.push(z),s.push(I),a.push(I<0?0:a[I]+1),n){h.add(z);const X=n(z);c.has(X)?f++:c.set(X,D)}else c.set(z,D);const j=t(z);Array.isArray(j)&&j.length&&(g.push(j),v.push(0),y.push(D))}return n&&h.clear(),{nodes:i,parent:Int32Array.from(s),level:Int32Array.from(a),topo:null,keyIndex:c,orphans:0,cycles:u,duplicates:f}},A0=e=>{if(typeof e=="function")return e;const t=e.split(".");return n=>{let i=n;for(const s of t){if(i==null)return;i=i[s]}return Array.isArray(i)?i:void 0}},k0=(e,t)=>{const{topo:n}=e,i=e.nodes.length;for(let s=0;s<i;s++)t(n?n[s]:s)},QR=(e,t,n)=>{if(!t)return null;const i=e.nodes.length,{parent:s}=e;if(n==="match-only")return t;const a=new Uint8Array(i);for(let c=0;c<i;c++){if(!t[c])continue;let h=c;for(;h>=0&&!a[h];)a[h]=1,h=s[h]}if(n==="full-branch"){const c=new Uint8Array(i);k0(e,h=>{const u=s[h];(t[h]||u>=0&&c[u])&&(c[h]=1,a[h]=1)})}return a},S0=(e,t,n,i)=>{const s=e.nodes.length;let a=e.parent,c=e.level;if(t&&i==="match-only"){const v=new Int32Array(s),y=new Int32Array(s);k0(e,_=>{const E=e.parent[_],$=E<0?-1:t[E]?E:v[E];v[_]=$,y[_]=$<0?0:y[$]+1}),a=v,c=y}const h=new Int32Array(s+2);let u=0;for(let v=0;v<s;v++)if(!t||t[v]){const y=a[v];h[(y<0?s:y)+1]++,u++}for(let v=1;v<s+2;v++)h[v]+=h[v-1];const f=h.slice(0,s+1),g=new Int32Array(u);for(let v=0;v<s;v++){const y=n?n[v]:v;if(!t||t[y]){const _=a[y];g[f[_<0?s:_]++]=y}}return{visible:t,count:u,childStart:h,children:g,parent:a,level:c}},Da=(e,t)=>e.childStart[t+1]-e.childStart[t],e$=(e,t)=>{const n=e.nodes.length,i=new Uint8Array(n);for(let s=0;s<n;s++){if(!t[s])continue;let a=e.parent[s];for(;a>=0&&!i[a];)i[a]=1,a=e.parent[a]}return i},t$=(e,t,n,i,s,a,c)=>{const h=new ea(i),u=e.nodes.length,{childStart:f,children:g}=t,v=$=>(f[$+1]>f[$]||!!s&&s($))&&n($),y=[u],_=[f[u]],E=[f[u]];for(;y.length;){const $=y.length-1,z=y[$],D=f[z],I=f[z+1];let j=_[$],X=!1;for(;j<I;){const Q=g[j++];if(v(Q)){h.pushTreeRun(e.nodes,g,E[$],j,D,I-D,t.level[Q],c?.(g,E[$],j)),_[$]=j,E[$]=j,y.push(Q),_.push(f[Q]),E.push(f[Q]),X=!0;break}}if(!X){if(E[$]<I){const Q=z===u?0:t.level[z]+1;h.pushTreeRun(e.nodes,g,E[$],I,D,I-D,Q,c?.(g,E[$],I))}y.pop(),_.pop(),E.pop(),z!==u&&a&&a(z,h)}}return h},n$=e=>S0(e,null,null,"with-ancestors"),i$=(e,t,n,i,s)=>{const a=[],c=new Set,{childStart:h,children:u}=t,f=y=>c.has(y)?i:s(y),g=y=>{f(y)!==i&&!c.has(y)&&a.push(y),c.add(y)},v=[n];for(;v.length;){const y=v.pop();g(y);for(let _=h[y];_<h[y+1];_++)v.push(u[_])}for(let y=e.parent[n];y>=0;y=e.parent[y]){if(!i){g(y);continue}let _=!0;for(let E=h[y];E<h[y+1]&&_;E++)_=f(u[E]);if(!_)break;g(y)}return a},o$=(e,t)=>{const n=e.nodes.length,i=new Uint8Array(n),{topo:s,parent:a}=e;for(let c=n-1;c>=0;c--){const h=s?s[c]:c,u=a[h];u>=0&&(i[h]||t(h))&&(i[u]=1)}return i},s$=(e,t,n)=>{const i=[],{childStart:s,children:a}=t,c=[];for(let h=s[n+1]-1;h>=s[n];h--)c.push(a[h]);for(;c.length;){const h=c.pop();i.push(e.nodes[h]);for(let u=s[h+1]-1;u>=s[h];u--)c.push(a[u])}return i},Kc=e=>e==="nested"||e==="flat"?e:"none",r$=e=>e==="full-branch"||e==="match-only"?e:"with-ancestors",Eg=e=>typeof e=="function"?e:t=>Pc(t,e);class a${constructor(){this.all=null,this.exceptions=new Set,this.version=0}#e;#t;#n;indexFor(t,n){const i=this.#n;return this.#e&&this.#t===t&&i?.mode===n.mode&&i.childrenExpr===n.childrenExpr&&i.parentKeyExpr===n.parentKeyExpr&&i.rootParentKey===n.rootParentKey&&i.keyOf===n.keyOf?this.#e:(this.#t=t,this.#n={...n},this.#e=n.mode==="flat"&&n.parentKeyExpr!==null&&n.keyOf?YR(t,n.keyOf,Eg(n.parentKeyExpr),n.rootParentKey):JR(t,A0(n.childrenExpr??"children"),n.keyOf),this.#e)}get index(){return this.#e}release(){this.#e=void 0,this.#t=void 0}defaultExpanded(t){return this.all??t}isExpanded(t,n){return this.defaultExpanded(n)!==this.exceptions.has(t)}set(t,n,i){return this.isExpanded(t,i)===n?!1:(this.exceptions.has(t)?this.exceptions.delete(t):this.exceptions.add(t),this.version++,!0)}setAll(t){this.all=t,this.exceptions.clear(),this.version++}reset(){this.all=null,this.exceptions.clear(),this.version++}expandAncestors(t,n,i){const s=this.#e;if(!s)return!1;const a=e$(s,t);let c=!1;for(let h=0;h<a.length;h++)a[h]&&this.set(n(h),!0,i)&&(c=!0);return c}}const l$={clearSorting:"sortClearedAnnouncement",pinStart:"fixStart",pinEnd:"fixEnd",unpin:"unfix",groupPanelMenu:"groupPanelMenuLabel",pdfDefaultTitle:"exportDefaultTitle"},Ph=new Set,c$=new Set(["fixStartLabel","fixEndLabel"]),h$=e=>{const t={};for(const[n,i]of Object.entries(e)){const s=l$[n];if(c$.has(n)){Ph.has(n)||(Ph.add(n),console.warn(`setGridTranslation: "${n}" is deprecated and ignored (pin from the column header menu).`));continue}if(!s){t[n]=i;continue}Ph.has(n)||(Ph.add(n),console.warn(`setGridTranslation: "${n}" is deprecated, use "${s}" instead.`)),s in e||(t[s]=i)}return t},Yl="en",Pr=Object.assign(Object.create(null),{en:{noData:"No data",dragToGroup:"Drag a column header here, or press Ctrl+G on one, to group",groupLabelSeparator:": ",sortAscending:"ascending",sortDescending:"descending",sortClearedAnnouncement:"Sorting removed from {column}",sortedAnnouncement:"Sorted by {column}, {order}",trueText:"True",falseText:"False",columnChooser:"Column chooser",hideColumn:"Hide column",showColumn:"Show column",fixStart:"Pin to start",fixEnd:"Pin to end",unfix:"Unpin",autoSize:"Double-click or press Enter to auto-size",summarySum:"Sum",summaryMin:"Min",summaryMax:"Max",summaryAvg:"Avg",summaryCount:"Count",summaryText:"{type}: {value}",summaryColumnText:"{type} of {column}: {value}",groupInfoText:"({info})",ungroupColumn:"Ungroup",ungroupAll:"Ungroup all",expandAllGroups:"Expand all groups",collapseAllGroups:"Collapse all groups",groupPanelMenuLabel:"Group options",filterEquals:"Equals",filterNotEquals:"Does not equal",filterLessThan:"Less than",filterLessThanOrEqual:"Less than or equal to",filterGreaterThan:"Greater than",filterGreaterThanOrEqual:"Greater than or equal to",filterContains:"Contains",filterNotContains:"Does not contain",filterStartsWith:"Starts with",filterEndsWith:"Ends with",filterBetween:"Between",filterAnyOf:"Is any of",filterNoneOf:"Is none of",filterIsBlank:"Is blank",filterIsNotBlank:"Is not blank",filterReset:"Reset",filterEditorLabel:"Filter {column}",filterOperationLabel:"Filter operation",headerFilterLabel:"Filter options for {column}",filterBetweenStart:"From",filterBetweenEnd:"To",filterAll:"(All)",filterBlanks:"(Blanks)",filterClear:"Clear filter",searchPlaceholder:"Search…",selectAll:"Select all",ok:"OK",cancel:"Cancel",filteredAnnouncement:"Rows: {count}",selectRow:"Select row",rowDetails:"Row details",adaptiveColumnsAnnouncement:"Columns in row details: {columns}",noAdaptiveColumnsAnnouncement:"All columns in the table",adaptiveColumnDescription:"In row details",adaptiveLabelSeparator:": ",fixedTopRowsLabel:"Pinned rows at top",fixedBottomRowsLabel:"Pinned rows at bottom",selectAllRows:"Select all rows",rowsSelectedAnnouncement:"Selected rows: {count}",rowsCopiedAnnouncement:"Copied rows: {count}",cellCopiedAnnouncement:"Cell copied",columnMovedAnnouncement:"{column} moved to position {position} of {count}",groupedAnnouncement:"Grouped by {column}",ungroupedAnnouncement:"Ungrouped {column}",columnHeaderMenuLabel:"Options for {column}",groupColumn:"Group by this column",moveLeft:"Move left",moveRight:"Move right",autoSizeColumn:"Auto-size column",increaseColumnWidth:"Increase width",decreaseColumnWidth:"Decrease width",columnFiltered:"Filtered",columnFixedStart:"Pinned to start",columnFixedEnd:"Pinned to end",columnSortPriority:"Sorted {order}, priority {priority}",sortedWithPriorityAnnouncement:"Sorted by {column}, {order}, priority {priority}",groupLevelChangedAnnouncement:"{column} moved to grouping level {level} of {count}",groupingClearedAnnouncement:"All columns ungrouped",groupsExpandedAnnouncement:"All groups expanded",groupsCollapsedAnnouncement:"All groups collapsed",columnResizedAnnouncement:"{column} width: {width} px",resizeHandleLabel:"Resize {column}",groupPanelLabel:"Grouping",filterOperationButtonLabel:"Filter operation for {column}: {operation}",searchPanelLabel:"Search in the grid",headerFilterSearchLabel:"Search values",headerFilterTruncated:"Showing {shown} of {count}",headerFilterSearchAnnouncement:"Values: {count}",selectAllResults:"Select all results ({count})",loading:"Loading…",loadError:"Could not load the data.",retry:"Retry",pageInfo:"Page {page} of {pageCount} ({count} items)",pageInfoUnknownCount:"Page {page}",pageSizeLabel:"Rows per page",paginationLabel:"Pagination",firstPage:"First page",previousPage:"Previous page",nextPage:"Next page",lastPage:"Last page",editRow:"Edit",saveRow:"Save",removeRow:"Delete",restoreRow:"Restore",addRow:"Add row",saveChanges:"Save changes",discardChanges:"Discard changes",commandColumn:"Actions",confirmRemoveTitle:"Delete row",confirmRemoveMessage:"Are you sure you want to delete this row?",addedRowDescription:"New row, not saved",removedRowDescription:"Marked for removal",modifiedCellDescription:"Changed, not saved",changesSavedAnnouncement:"Changes saved",changesDiscardedAnnouncement:"Changes discarded: {count}",rowRemovedAnnouncement:"Row deleted",rowMarkedForRemovalAnnouncement:"Row marked for removal",rowRestoredAnnouncement:"Row restored",rowAddedAnnouncement:"Row added",saveError:"Could not save the changes.",invalidRowsMessage:"Fix the errors before saving. Rows with errors: {count}",saving:"Saving…",validating:"Validating…",validationEscapeHint:"Press Esc to cancel.",validationRequired:"This field is required.",validationRange:"Enter a value between {min} and {max}.",validationRangeMin:"Enter a value of at least {min}.",validationRangeMax:"Enter a value of at most {max}.",validationStringLength:"Enter between {min} and {max} characters.",validationStringLengthMin:"Enter at least {min} characters.",validationStringLengthMax:"Enter at most {max} characters.",validationPattern:"The value does not match the expected format.",validationEmail:"Enter a valid email address.",validationNumber:"Enter a number.",validationDate:"Enter a valid date.",validationInvalid:"The value is not valid.",toolbarLabel:"Grid toolbar",toolbarMoreButtonLabel:"More actions",exportButtonLabel:"Export",exportCsv:"Export to CSV",exportXlsx:"Export to Excel",exportSelectedCsv:"Export selected rows to CSV",exportSelectedXlsx:"Export selected rows to Excel",exportPdf:"Export to PDF",exportSelectedPdf:"Export selected rows to PDF",exportCancel:"Cancel export",exportCanceledAnnouncement:"Export canceled",exportProgress:"Exporting… {percent}%",pdfPageNumber:"Page {page} of {pageCount}",exportDefaultTitle:"Data",pdfTotalRow:"Total",exportingAnnouncement:"Exporting…",exportCompleteAnnouncement:"Exported to {format}",exportErrorAnnouncement:"Export failed",copyCell:"Copy",copySelectedRows:"Copy selected rows",rowMenuLabel:"Row options",groupRowMenuLabel:"Options for group {value}",sortColumnAscending:"Sort ascending",sortColumnDescending:"Sort descending",clearColumnSorting:"Clear sorting",expandGroup:"Expand group",collapseGroup:"Collapse group",expandRow:"Show details",collapseRow:"Hide details",copyFailedAnnouncement:"Could not copy to the clipboard.",cellRangeSelectedAnnouncement:"Selected cells: {cells}. Rows: {rows}, columns: {columns}",cellRangesSelectedAnnouncement:"Selected ranges: {count}. Cells: {cells}",addToSelectionOnAnnouncement:"Adding to selection. Shift+F8 or Esc stops.",addToSelectionOffAnnouncement:"Stopped adding to selection",addingToSelection:"Adding to selection",cellsCopiedAnnouncement:"Copied cells: {count}",cellsPastedAnnouncement:"Pasted cells: {count}",cellsSkippedAnnouncement:"Pasted cells: {count}. Skipped: {skipped}",copyLimitExceededAnnouncement:"Too many cells to copy: {count}. Limit: {max}",pasteLimitExceededAnnouncement:"Too many cells to paste: {count}. Limit: {max}",rowsNotLoadedAnnouncement:"Some rows are not loaded yet. Scroll to them and try again.",cellRangeSummaryLabel:"Selection summary",extendSelectionToCell:"Extend selection to this cell",addCellToSelection:"Add cell to selection",copySelectedCells:"Copy selected cells",paste:"Paste",pasteFailedAnnouncement:"Could not read the clipboard. Paste with the keyboard.",expandNode:"Expand",collapseNode:"Collapse",addChildRow:"Add child row",childRowsLoadingAnnouncement:"Loading child rows",childRowsLoadedAnnouncement:"Child rows loaded: {count}",childRowsLoadErrorAnnouncement:"Could not load child rows",nodesExpandedAnnouncement:"Expanded rows: {count}",fixColumn:"Pin column",autoSizeAllColumns:"Auto-size all columns",openColumnChooser:"Choose columns",resetColumns:"Reset columns",columnChooserSearchLabel:"Search columns",columnChooserSearchAnnouncement:"Columns: {count}",selectAllColumns:"Show all columns",reorderColumnLabel:"Alt+Shift+Up or Down arrow moves the column",columnFixedStartAnnouncement:"{column} pinned to start",columnFixedEndAnnouncement:"{column} pinned to end",columnUnfixedAnnouncement:"{column} unpinned",allColumnsAutoSizedAnnouncement:"All columns auto-sized",columnMoveRefusedAnnouncement:"{column} can't move past {target}",columnsResetAnnouncement:"Columns reset"},es:{noData:"Sin datos",dragToGroup:"Arrastre un encabezado aquí o pulse Ctrl+G en él para agrupar",groupLabelSeparator:": ",sortAscending:"ascendente",sortDescending:"descendente",sortClearedAnnouncement:"Se quitó el orden de {column}",sortedAnnouncement:"Ordenado por {column}, {order}",trueText:"Verdadero",falseText:"Falso",columnChooser:"Selector de columnas",hideColumn:"Ocultar columna",showColumn:"Mostrar columna",fixStart:"Fijar al inicio",fixEnd:"Fijar al final",unfix:"Desfijar",autoSize:"Doble clic o Intro para ajustar al contenido",summarySum:"Suma",summaryMin:"Mín.",summaryMax:"Máx.",summaryAvg:"Prom.",summaryCount:"Recuento",summaryText:"{type}: {value}",summaryColumnText:"{type} de {column}: {value}",groupInfoText:"({info})",ungroupColumn:"Desagrupar",ungroupAll:"Desagrupar todo",expandAllGroups:"Expandir todos los grupos",collapseAllGroups:"Contraer todos los grupos",groupPanelMenuLabel:"Opciones de grupo",filterEquals:"Igual a",filterNotEquals:"Distinto de",filterLessThan:"Menor que",filterLessThanOrEqual:"Menor o igual que",filterGreaterThan:"Mayor que",filterGreaterThanOrEqual:"Mayor o igual que",filterContains:"Contiene",filterNotContains:"No contiene",filterStartsWith:"Empieza por",filterEndsWith:"Termina en",filterBetween:"Entre",filterAnyOf:"Es alguno de",filterNoneOf:"No es ninguno de",filterIsBlank:"Está vacío",filterIsNotBlank:"No está vacío",filterReset:"Restablecer",filterEditorLabel:"Filtrar {column}",filterOperationLabel:"Operación de filtro",headerFilterLabel:"Opciones de filtro de {column}",filterBetweenStart:"Desde",filterBetweenEnd:"Hasta",filterAll:"(Todos)",filterBlanks:"(Vacíos)",filterClear:"Quitar filtro",searchPlaceholder:"Buscar…",selectAll:"Seleccionar todo",ok:"Aceptar",cancel:"Cancelar",filteredAnnouncement:"Filas: {count}",selectRow:"Seleccionar fila",rowDetails:"Detalles de la fila",adaptiveColumnsAnnouncement:"Columnas en los detalles de la fila: {columns}",noAdaptiveColumnsAnnouncement:"Todas las columnas en la tabla",adaptiveColumnDescription:"En los detalles de la fila",adaptiveLabelSeparator:": ",fixedTopRowsLabel:"Filas fijadas arriba",fixedBottomRowsLabel:"Filas fijadas abajo",selectAllRows:"Seleccionar todas las filas",rowsSelectedAnnouncement:"Filas seleccionadas: {count}",rowsCopiedAnnouncement:"Filas copiadas: {count}",cellCopiedAnnouncement:"Celda copiada",columnMovedAnnouncement:"{column} movida a la posición {position} de {count}",groupedAnnouncement:"Agrupado por {column}",ungroupedAnnouncement:"Se quitó la agrupación por {column}",columnHeaderMenuLabel:"Opciones de {column}",groupColumn:"Agrupar por esta columna",moveLeft:"Mover a la izquierda",moveRight:"Mover a la derecha",autoSizeColumn:"Ajustar ancho al contenido",increaseColumnWidth:"Aumentar ancho",decreaseColumnWidth:"Reducir ancho",columnFiltered:"Filtrada",columnFixedStart:"Fijada al inicio",columnFixedEnd:"Fijada al final",columnSortPriority:"Orden {order}, prioridad {priority}",sortedWithPriorityAnnouncement:"Ordenado por {column}, {order}, prioridad {priority}",groupLevelChangedAnnouncement:"{column} movida al nivel de agrupación {level} de {count}",groupingClearedAnnouncement:"Todas las columnas desagrupadas",groupsExpandedAnnouncement:"Todos los grupos expandidos",groupsCollapsedAnnouncement:"Todos los grupos contraídos",columnResizedAnnouncement:"Ancho de {column}: {width} px",resizeHandleLabel:"Cambiar el ancho de {column}",groupPanelLabel:"Agrupación",filterOperationButtonLabel:"Operación de filtro de {column}: {operation}",searchPanelLabel:"Buscar en la cuadrícula",headerFilterSearchLabel:"Buscar valores",headerFilterTruncated:"Mostrando {shown} de {count}",headerFilterSearchAnnouncement:"Valores: {count}",selectAllResults:"Seleccionar todos los resultados ({count})",loading:"Cargando…",loadError:"No se pudieron cargar los datos.",retry:"Reintentar",pageInfo:"Página {page} de {pageCount} ({count} elementos)",pageInfoUnknownCount:"Página {page}",pageSizeLabel:"Filas por página",paginationLabel:"Paginación",firstPage:"Primera página",previousPage:"Página anterior",nextPage:"Página siguiente",lastPage:"Última página",editRow:"Editar",saveRow:"Guardar",removeRow:"Eliminar",restoreRow:"Restaurar",addRow:"Agregar fila",saveChanges:"Guardar cambios",discardChanges:"Descartar cambios",commandColumn:"Acciones",confirmRemoveTitle:"Eliminar fila",confirmRemoveMessage:"¿Seguro que quiere eliminar esta fila?",addedRowDescription:"Fila nueva, sin guardar",removedRowDescription:"Marcada para eliminar",modifiedCellDescription:"Modificado, sin guardar",changesSavedAnnouncement:"Cambios guardados",changesDiscardedAnnouncement:"Cambios descartados: {count}",rowRemovedAnnouncement:"Fila eliminada",rowMarkedForRemovalAnnouncement:"Fila marcada para eliminar",rowRestoredAnnouncement:"Fila restaurada",rowAddedAnnouncement:"Fila agregada",saveError:"No se pudieron guardar los cambios.",invalidRowsMessage:"Corrija los errores antes de guardar. Filas con errores: {count}",saving:"Guardando…",validating:"Validando…",validationEscapeHint:"Pulse Esc para cancelar.",validationRequired:"Este campo es obligatorio.",validationRange:"Introduzca un valor entre {min} y {max}.",validationRangeMin:"Introduzca un valor de al menos {min}.",validationRangeMax:"Introduzca un valor de como máximo {max}.",validationStringLength:"Introduzca entre {min} y {max} caracteres.",validationStringLengthMin:"Introduzca al menos {min} caracteres.",validationStringLengthMax:"Introduzca como máximo {max} caracteres.",validationPattern:"El valor no tiene el formato esperado.",validationEmail:"Introduzca un correo electrónico válido.",validationNumber:"Introduzca un número.",validationDate:"Introduzca una fecha válida.",validationInvalid:"El valor no es válido.",toolbarLabel:"Barra de herramientas de la cuadrícula",toolbarMoreButtonLabel:"Más acciones",exportButtonLabel:"Exportar",exportCsv:"Exportar a CSV",exportXlsx:"Exportar a Excel",exportSelectedCsv:"Exportar filas seleccionadas a CSV",exportSelectedXlsx:"Exportar filas seleccionadas a Excel",exportPdf:"Exportar a PDF",exportSelectedPdf:"Exportar filas seleccionadas a PDF",exportCancel:"Cancelar exportación",exportCanceledAnnouncement:"Exportación cancelada",exportProgress:"Exportando… {percent} %",pdfPageNumber:"Página {page} de {pageCount}",exportDefaultTitle:"Datos",pdfTotalRow:"Total",exportingAnnouncement:"Exportando…",exportCompleteAnnouncement:"Exportado a {format}",exportErrorAnnouncement:"Error al exportar",copyCell:"Copiar",copySelectedRows:"Copiar filas seleccionadas",rowMenuLabel:"Opciones de la fila",groupRowMenuLabel:"Opciones del grupo {value}",sortColumnAscending:"Orden ascendente",sortColumnDescending:"Orden descendente",clearColumnSorting:"Quitar orden",expandGroup:"Expandir grupo",collapseGroup:"Contraer grupo",expandRow:"Mostrar detalles",collapseRow:"Ocultar detalles",copyFailedAnnouncement:"No se pudo copiar al portapapeles.",cellRangeSelectedAnnouncement:"Celdas seleccionadas: {cells}. Filas: {rows}, columnas: {columns}",cellRangesSelectedAnnouncement:"Rangos seleccionados: {count}. Celdas: {cells}",addToSelectionOnAnnouncement:"Agregando a la selección. Mayús+F8 o Esc para terminar.",addToSelectionOffAnnouncement:"Se dejó de agregar a la selección",addingToSelection:"Agregando a la selección",cellsCopiedAnnouncement:"Celdas copiadas: {count}",cellsPastedAnnouncement:"Celdas pegadas: {count}",cellsSkippedAnnouncement:"Celdas pegadas: {count}. Omitidas: {skipped}",copyLimitExceededAnnouncement:"Demasiadas celdas para copiar: {count}. Límite: {max}",pasteLimitExceededAnnouncement:"Demasiadas celdas para pegar: {count}. Límite: {max}",rowsNotLoadedAnnouncement:"Algunas filas aún no se cargaron. Desplácese hasta ellas e inténtelo de nuevo.",cellRangeSummaryLabel:"Resumen de la selección",extendSelectionToCell:"Extender la selección hasta esta celda",addCellToSelection:"Agregar la celda a la selección",copySelectedCells:"Copiar celdas seleccionadas",paste:"Pegar",pasteFailedAnnouncement:"No se pudo leer el portapapeles. Pegue con el teclado.",expandNode:"Expandir",collapseNode:"Contraer",addChildRow:"Agregar fila secundaria",childRowsLoadingAnnouncement:"Cargando filas secundarias",childRowsLoadedAnnouncement:"Filas secundarias cargadas: {count}",childRowsLoadErrorAnnouncement:"No se pudieron cargar las filas secundarias",nodesExpandedAnnouncement:"Filas expandidas: {count}",fixColumn:"Fijar columna",autoSizeAllColumns:"Ajustar ancho de todas las columnas",openColumnChooser:"Elegir columnas",resetColumns:"Restablecer columnas",columnChooserSearchLabel:"Buscar columnas",columnChooserSearchAnnouncement:"Columnas: {count}",selectAllColumns:"Mostrar todas las columnas",reorderColumnLabel:"Alt+Mayús+Flecha arriba o abajo mueve la columna",columnFixedStartAnnouncement:"{column} fijada al inicio",columnFixedEndAnnouncement:"{column} fijada al final",columnUnfixedAnnouncement:"{column} desfijada",allColumnsAutoSizedAnnouncement:"Ancho de todas las columnas ajustado",columnMoveRefusedAnnouncement:"{column} no puede pasar de {target}",columnsResetAnnouncement:"Columnas restablecidas"},pt:{noData:"Sem dados",dragToGroup:"Arraste um cabeçalho aqui ou pressione Ctrl+G nele para agrupar",groupLabelSeparator:": ",sortAscending:"crescente",sortDescending:"decrescente",sortClearedAnnouncement:"Ordenação removida de {column}",sortedAnnouncement:"Ordenado por {column}, {order}",trueText:"Verdadeiro",falseText:"Falso",columnChooser:"Seletor de colunas",hideColumn:"Ocultar coluna",showColumn:"Mostrar coluna",fixStart:"Fixar no início",fixEnd:"Fixar no fim",unfix:"Desafixar",autoSize:"Clique duplo ou Enter para ajustar ao conteúdo",summarySum:"Soma",summaryMin:"Mín.",summaryMax:"Máx.",summaryAvg:"Média",summaryCount:"Contagem",summaryText:"{type}: {value}",summaryColumnText:"{type} de {column}: {value}",groupInfoText:"({info})",ungroupColumn:"Desagrupar",ungroupAll:"Desagrupar tudo",expandAllGroups:"Expandir todos os grupos",collapseAllGroups:"Recolher todos os grupos",groupPanelMenuLabel:"Opções de grupo",filterEquals:"Igual a",filterNotEquals:"Diferente de",filterLessThan:"Menor que",filterLessThanOrEqual:"Menor ou igual a",filterGreaterThan:"Maior que",filterGreaterThanOrEqual:"Maior ou igual a",filterContains:"Contém",filterNotContains:"Não contém",filterStartsWith:"Começa com",filterEndsWith:"Termina com",filterBetween:"Entre",filterAnyOf:"É um de",filterNoneOf:"Não é nenhum de",filterIsBlank:"Está vazio",filterIsNotBlank:"Não está vazio",filterReset:"Redefinir",filterEditorLabel:"Filtrar {column}",filterOperationLabel:"Operação do filtro",headerFilterLabel:"Opções de filtro de {column}",filterBetweenStart:"De",filterBetweenEnd:"Até",filterAll:"(Todos)",filterBlanks:"(Vazios)",filterClear:"Limpar filtro",searchPlaceholder:"Pesquisar…",selectAll:"Selecionar tudo",ok:"OK",cancel:"Cancelar",filteredAnnouncement:"Linhas: {count}",selectRow:"Selecionar linha",rowDetails:"Detalhes da linha",adaptiveColumnsAnnouncement:"Colunas nos detalhes da linha: {columns}",noAdaptiveColumnsAnnouncement:"Todas as colunas na tabela",adaptiveColumnDescription:"Nos detalhes da linha",adaptiveLabelSeparator:": ",fixedTopRowsLabel:"Linhas fixadas no topo",fixedBottomRowsLabel:"Linhas fixadas no rodapé",selectAllRows:"Selecionar todas as linhas",rowsSelectedAnnouncement:"Linhas selecionadas: {count}",rowsCopiedAnnouncement:"Linhas copiadas: {count}",cellCopiedAnnouncement:"Célula copiada",columnMovedAnnouncement:"{column} movida para a posição {position} de {count}",groupedAnnouncement:"Agrupado por {column}",ungroupedAnnouncement:"Agrupamento por {column} removido",columnHeaderMenuLabel:"Opções de {column}",groupColumn:"Agrupar por esta coluna",moveLeft:"Mover para a esquerda",moveRight:"Mover para a direita",autoSizeColumn:"Ajustar largura ao conteúdo",increaseColumnWidth:"Aumentar largura",decreaseColumnWidth:"Diminuir largura",columnFiltered:"Filtrada",columnFixedStart:"Fixada no início",columnFixedEnd:"Fixada no fim",columnSortPriority:"Ordem {order}, prioridade {priority}",sortedWithPriorityAnnouncement:"Ordenado por {column}, {order}, prioridade {priority}",groupLevelChangedAnnouncement:"{column} movida para o nível de agrupamento {level} de {count}",groupingClearedAnnouncement:"Todas as colunas desagrupadas",groupsExpandedAnnouncement:"Todos os grupos expandidos",groupsCollapsedAnnouncement:"Todos os grupos recolhidos",columnResizedAnnouncement:"Largura de {column}: {width} px",resizeHandleLabel:"Redimensionar {column}",groupPanelLabel:"Agrupamento",filterOperationButtonLabel:"Operação de filtro de {column}: {operation}",searchPanelLabel:"Pesquisar na grade",headerFilterSearchLabel:"Pesquisar valores",headerFilterTruncated:"Mostrando {shown} de {count}",headerFilterSearchAnnouncement:"Valores: {count}",selectAllResults:"Selecionar todos os resultados ({count})",loading:"Carregando…",loadError:"Não foi possível carregar os dados.",retry:"Tentar de novo",pageInfo:"Página {page} de {pageCount} ({count} itens)",pageInfoUnknownCount:"Página {page}",pageSizeLabel:"Linhas por página",paginationLabel:"Paginação",firstPage:"Primeira página",previousPage:"Página anterior",nextPage:"Próxima página",lastPage:"Última página",editRow:"Editar",saveRow:"Salvar",removeRow:"Excluir",restoreRow:"Restaurar",addRow:"Adicionar linha",saveChanges:"Salvar alterações",discardChanges:"Descartar alterações",commandColumn:"Ações",confirmRemoveTitle:"Excluir linha",confirmRemoveMessage:"Tem certeza de que deseja excluir esta linha?",addedRowDescription:"Linha nova, não salva",removedRowDescription:"Marcada para exclusão",modifiedCellDescription:"Alterado, não salvo",changesSavedAnnouncement:"Alterações salvas",changesDiscardedAnnouncement:"Alterações descartadas: {count}",rowRemovedAnnouncement:"Linha excluída",rowMarkedForRemovalAnnouncement:"Linha marcada para exclusão",rowRestoredAnnouncement:"Linha restaurada",rowAddedAnnouncement:"Linha adicionada",saveError:"Não foi possível salvar as alterações.",invalidRowsMessage:"Corrija os erros antes de salvar. Linhas com erros: {count}",saving:"Salvando…",validating:"Validando…",validationEscapeHint:"Pressione Esc para cancelar.",validationRequired:"Este campo é obrigatório.",validationRange:"Informe um valor entre {min} e {max}.",validationRangeMin:"Informe um valor de no mínimo {min}.",validationRangeMax:"Informe um valor de no máximo {max}.",validationStringLength:"Informe entre {min} e {max} caracteres.",validationStringLengthMin:"Informe no mínimo {min} caracteres.",validationStringLengthMax:"Informe no máximo {max} caracteres.",validationPattern:"O valor não está no formato esperado.",validationEmail:"Informe um e-mail válido.",validationNumber:"Informe um número.",validationDate:"Informe uma data válida.",validationInvalid:"O valor não é válido.",toolbarLabel:"Barra de ferramentas da grade",toolbarMoreButtonLabel:"Mais ações",exportButtonLabel:"Exportar",exportCsv:"Exportar para CSV",exportXlsx:"Exportar para Excel",exportSelectedCsv:"Exportar linhas selecionadas para CSV",exportSelectedXlsx:"Exportar linhas selecionadas para Excel",exportPdf:"Exportar para PDF",exportSelectedPdf:"Exportar linhas selecionadas para PDF",exportCancel:"Cancelar exportação",exportCanceledAnnouncement:"Exportação cancelada",exportProgress:"Exportando… {percent}%",pdfPageNumber:"Página {page} de {pageCount}",exportDefaultTitle:"Dados",pdfTotalRow:"Total",exportingAnnouncement:"Exportando…",exportCompleteAnnouncement:"Exportado para {format}",exportErrorAnnouncement:"Falha ao exportar",copyCell:"Copiar",copySelectedRows:"Copiar linhas selecionadas",rowMenuLabel:"Opções da linha",groupRowMenuLabel:"Opções do grupo {value}",sortColumnAscending:"Ordenar crescente",sortColumnDescending:"Ordenar decrescente",clearColumnSorting:"Limpar ordenação",expandGroup:"Expandir grupo",collapseGroup:"Recolher grupo",expandRow:"Mostrar detalhes",collapseRow:"Ocultar detalhes",copyFailedAnnouncement:"Não foi possível copiar para a área de transferência.",cellRangeSelectedAnnouncement:"Células selecionadas: {cells}. Linhas: {rows}, colunas: {columns}",cellRangesSelectedAnnouncement:"Intervalos selecionados: {count}. Células: {cells}",addToSelectionOnAnnouncement:"Adicionando à seleção. Shift+F8 ou Esc para parar.",addToSelectionOffAnnouncement:"Parou de adicionar à seleção",addingToSelection:"Adicionando à seleção",cellsCopiedAnnouncement:"Células copiadas: {count}",cellsPastedAnnouncement:"Células coladas: {count}",cellsSkippedAnnouncement:"Células coladas: {count}. Ignoradas: {skipped}",copyLimitExceededAnnouncement:"Células demais para copiar: {count}. Limite: {max}",pasteLimitExceededAnnouncement:"Células demais para colar: {count}. Limite: {max}",rowsNotLoadedAnnouncement:"Algumas linhas ainda não foram carregadas. Role até elas e tente de novo.",cellRangeSummaryLabel:"Resumo da seleção",extendSelectionToCell:"Estender a seleção até esta célula",addCellToSelection:"Adicionar a célula à seleção",copySelectedCells:"Copiar células selecionadas",paste:"Colar",pasteFailedAnnouncement:"Não foi possível ler a área de transferência. Cole pelo teclado.",expandNode:"Expandir",collapseNode:"Recolher",addChildRow:"Adicionar linha filha",childRowsLoadingAnnouncement:"Carregando linhas filhas",childRowsLoadedAnnouncement:"Linhas filhas carregadas: {count}",childRowsLoadErrorAnnouncement:"Não foi possível carregar as linhas filhas",nodesExpandedAnnouncement:"Linhas expandidas: {count}",fixColumn:"Fixar coluna",autoSizeAllColumns:"Ajustar largura de todas as colunas",openColumnChooser:"Escolher colunas",resetColumns:"Redefinir colunas",columnChooserSearchLabel:"Pesquisar colunas",columnChooserSearchAnnouncement:"Colunas: {count}",selectAllColumns:"Mostrar todas as colunas",reorderColumnLabel:"Alt+Shift+Seta para cima ou para baixo move a coluna",columnFixedStartAnnouncement:"{column} fixada no início",columnFixedEndAnnouncement:"{column} fixada no fim",columnUnfixedAnnouncement:"{column} desafixada",allColumnsAutoSizedAnnouncement:"Largura de todas as colunas ajustada",columnMoveRefusedAnnouncement:"{column} não pode passar de {target}",columnsResetAnnouncement:"Colunas redefinidas"},fr:{noData:"Aucune donnée",dragToGroup:"Glissez un en-tête ici ou appuyez sur Ctrl+G dessus pour regrouper",groupLabelSeparator:" : ",sortAscending:"croissant",sortDescending:"décroissant",sortClearedAnnouncement:"Tri retiré de {column}",sortedAnnouncement:"Trié par {column}, {order}",trueText:"Vrai",falseText:"Faux",columnChooser:"Sélecteur de colonnes",hideColumn:"Masquer la colonne",showColumn:"Afficher la colonne",fixStart:"Épingler au début",fixEnd:"Épingler à la fin",unfix:"Désépingler",autoSize:"Double-cliquez ou appuyez sur Entrée pour ajuster au contenu",summarySum:"Somme",summaryMin:"Min",summaryMax:"Max",summaryAvg:"Moy.",summaryCount:"Nombre",summaryText:"{type} : {value}",summaryColumnText:"{type} de {column} : {value}",groupInfoText:"({info})",ungroupColumn:"Dégrouper",ungroupAll:"Tout dégrouper",expandAllGroups:"Développer tous les groupes",collapseAllGroups:"Réduire tous les groupes",groupPanelMenuLabel:"Options de groupe",filterEquals:"Égal à",filterNotEquals:"Différent de",filterLessThan:"Inférieur à",filterLessThanOrEqual:"Inférieur ou égal à",filterGreaterThan:"Supérieur à",filterGreaterThanOrEqual:"Supérieur ou égal à",filterContains:"Contient",filterNotContains:"Ne contient pas",filterStartsWith:"Commence par",filterEndsWith:"Se termine par",filterBetween:"Entre",filterAnyOf:"Est l’un de",filterNoneOf:"N’est aucun de",filterIsBlank:"Est vide",filterIsNotBlank:"N’est pas vide",filterReset:"Réinitialiser",filterEditorLabel:"Filtrer {column}",filterOperationLabel:"Opération de filtre",headerFilterLabel:"Options de filtre pour {column}",filterBetweenStart:"De",filterBetweenEnd:"À",filterAll:"(Tous)",filterBlanks:"(Vides)",filterClear:"Effacer le filtre",searchPlaceholder:"Rechercher…",selectAll:"Tout sélectionner",ok:"OK",cancel:"Annuler",filteredAnnouncement:"Lignes : {count}",selectRow:"Sélectionner la ligne",rowDetails:"Détails de la ligne",adaptiveColumnsAnnouncement:"Colonnes dans les détails de la ligne : {columns}",noAdaptiveColumnsAnnouncement:"Toutes les colonnes dans le tableau",adaptiveColumnDescription:"Dans les détails de la ligne",adaptiveLabelSeparator:" : ",fixedTopRowsLabel:"Lignes épinglées en haut",fixedBottomRowsLabel:"Lignes épinglées en bas",selectAllRows:"Sélectionner toutes les lignes",rowsSelectedAnnouncement:"Lignes sélectionnées : {count}",rowsCopiedAnnouncement:"Lignes copiées : {count}",cellCopiedAnnouncement:"Cellule copiée",columnMovedAnnouncement:"{column} déplacée en position {position} sur {count}",groupedAnnouncement:"Groupé par {column}",ungroupedAnnouncement:"Regroupement par {column} supprimé",columnHeaderMenuLabel:"Options de {column}",groupColumn:"Regrouper par cette colonne",moveLeft:"Déplacer vers la gauche",moveRight:"Déplacer vers la droite",autoSizeColumn:"Ajuster la largeur au contenu",increaseColumnWidth:"Élargir",decreaseColumnWidth:"Rétrécir",columnFiltered:"Filtrée",columnFixedStart:"Épinglée au début",columnFixedEnd:"Épinglée à la fin",columnSortPriority:"Tri {order}, priorité {priority}",sortedWithPriorityAnnouncement:"Trié par {column}, {order}, priorité {priority}",groupLevelChangedAnnouncement:"{column} déplacée au niveau de regroupement {level} sur {count}",groupingClearedAnnouncement:"Toutes les colonnes dégroupées",groupsExpandedAnnouncement:"Tous les groupes développés",groupsCollapsedAnnouncement:"Tous les groupes réduits",columnResizedAnnouncement:"Largeur de {column} : {width} px",resizeHandleLabel:"Redimensionner {column}",groupPanelLabel:"Regroupement",filterOperationButtonLabel:"Opération de filtre pour {column} : {operation}",searchPanelLabel:"Rechercher dans la grille",headerFilterSearchLabel:"Rechercher des valeurs",headerFilterTruncated:"{shown} affichées sur {count}",headerFilterSearchAnnouncement:"Valeurs : {count}",selectAllResults:"Sélectionner tous les résultats ({count})",loading:"Chargement…",loadError:"Impossible de charger les données.",retry:"Réessayer",pageInfo:"Page {page} sur {pageCount} ({count} éléments)",pageInfoUnknownCount:"Page {page}",pageSizeLabel:"Lignes par page",paginationLabel:"Pagination",firstPage:"Première page",previousPage:"Page précédente",nextPage:"Page suivante",lastPage:"Dernière page",editRow:"Modifier",saveRow:"Enregistrer",removeRow:"Supprimer",restoreRow:"Restaurer",addRow:"Ajouter une ligne",saveChanges:"Enregistrer les modifications",discardChanges:"Annuler les modifications",commandColumn:"Actions",confirmRemoveTitle:"Supprimer la ligne",confirmRemoveMessage:"Voulez-vous vraiment supprimer cette ligne ?",addedRowDescription:"Nouvelle ligne, non enregistrée",removedRowDescription:"Marquée pour suppression",modifiedCellDescription:"Modifié, non enregistré",changesSavedAnnouncement:"Modifications enregistrées",changesDiscardedAnnouncement:"Modifications annulées : {count}",rowRemovedAnnouncement:"Ligne supprimée",rowMarkedForRemovalAnnouncement:"Ligne marquée pour suppression",rowRestoredAnnouncement:"Ligne restaurée",rowAddedAnnouncement:"Ligne ajoutée",saveError:"Impossible d’enregistrer les modifications.",invalidRowsMessage:"Corrigez les erreurs avant d’enregistrer. Lignes en erreur : {count}",saving:"Enregistrement…",validating:"Validation…",validationEscapeHint:"Appuyez sur Échap pour annuler.",validationRequired:"Ce champ est obligatoire.",validationRange:"Saisissez une valeur entre {min} et {max}.",validationRangeMin:"Saisissez une valeur d’au moins {min}.",validationRangeMax:"Saisissez une valeur d’au plus {max}.",validationStringLength:"Saisissez entre {min} et {max} caractères.",validationStringLengthMin:"Saisissez au moins {min} caractères.",validationStringLengthMax:"Saisissez au plus {max} caractères.",validationPattern:"La valeur ne respecte pas le format attendu.",validationEmail:"Saisissez une adresse e-mail valide.",validationNumber:"Saisissez un nombre.",validationDate:"Saisissez une date valide.",validationInvalid:"La valeur n’est pas valide.",toolbarLabel:"Barre d’outils de la grille",toolbarMoreButtonLabel:"Plus d’actions",exportButtonLabel:"Exporter",exportCsv:"Exporter en CSV",exportXlsx:"Exporter vers Excel",exportSelectedCsv:"Exporter les lignes sélectionnées en CSV",exportSelectedXlsx:"Exporter les lignes sélectionnées vers Excel",exportPdf:"Exporter en PDF",exportSelectedPdf:"Exporter les lignes sélectionnées en PDF",exportCancel:"Annuler l’exportation",exportCanceledAnnouncement:"Exportation annulée",exportProgress:"Exportation… {percent} %",pdfPageNumber:"Page {page} sur {pageCount}",exportDefaultTitle:"Données",pdfTotalRow:"Total",exportingAnnouncement:"Exportation…",exportCompleteAnnouncement:"Exporté en {format}",exportErrorAnnouncement:"Échec de l’exportation",copyCell:"Copier",copySelectedRows:"Copier les lignes sélectionnées",rowMenuLabel:"Options de la ligne",groupRowMenuLabel:"Options du groupe {value}",sortColumnAscending:"Trier par ordre croissant",sortColumnDescending:"Trier par ordre décroissant",clearColumnSorting:"Effacer le tri",expandGroup:"Développer le groupe",collapseGroup:"Réduire le groupe",expandRow:"Afficher les détails",collapseRow:"Masquer les détails",copyFailedAnnouncement:"Impossible de copier dans le presse-papiers.",cellRangeSelectedAnnouncement:"Cellules sélectionnées : {cells}. Lignes : {rows}, colonnes : {columns}",cellRangesSelectedAnnouncement:"Plages sélectionnées : {count}. Cellules : {cells}",addToSelectionOnAnnouncement:"Ajout à la sélection. Maj+F8 ou Échap pour arrêter.",addToSelectionOffAnnouncement:"Fin de l’ajout à la sélection",addingToSelection:"Ajout à la sélection",cellsCopiedAnnouncement:"Cellules copiées : {count}",cellsPastedAnnouncement:"Cellules collées : {count}",cellsSkippedAnnouncement:"Cellules collées : {count}. Ignorées : {skipped}",copyLimitExceededAnnouncement:"Trop de cellules à copier : {count}. Limite : {max}",pasteLimitExceededAnnouncement:"Trop de cellules à coller : {count}. Limite : {max}",rowsNotLoadedAnnouncement:"Certaines lignes ne sont pas encore chargées. Faites-les défiler et réessayez.",cellRangeSummaryLabel:"Résumé de la sélection",extendSelectionToCell:"Étendre la sélection jusqu’à cette cellule",addCellToSelection:"Ajouter la cellule à la sélection",copySelectedCells:"Copier les cellules sélectionnées",paste:"Coller",pasteFailedAnnouncement:"Impossible de lire le presse-papiers. Collez avec le clavier.",expandNode:"Développer",collapseNode:"Réduire",addChildRow:"Ajouter une ligne enfant",childRowsLoadingAnnouncement:"Chargement des lignes enfants",childRowsLoadedAnnouncement:"Lignes enfants chargées : {count}",childRowsLoadErrorAnnouncement:"Impossible de charger les lignes enfants",nodesExpandedAnnouncement:"Lignes développées : {count}",fixColumn:"Épingler la colonne",autoSizeAllColumns:"Ajuster la largeur de toutes les colonnes",openColumnChooser:"Choisir les colonnes",resetColumns:"Réinitialiser les colonnes",columnChooserSearchLabel:"Rechercher des colonnes",columnChooserSearchAnnouncement:"Colonnes : {count}",selectAllColumns:"Afficher toutes les colonnes",reorderColumnLabel:"Alt+Maj+Flèche haut ou bas déplace la colonne",columnFixedStartAnnouncement:"{column} épinglée au début",columnFixedEndAnnouncement:"{column} épinglée à la fin",columnUnfixedAnnouncement:"{column} désépinglée",allColumnsAutoSizedAnnouncement:"Largeur de toutes les colonnes ajustée",columnMoveRefusedAnnouncement:"{column} ne peut pas dépasser {target}",columnsResetAnnouncement:"Colonnes réinitialisées"},de:{noData:"Keine Daten",dragToGroup:"Spaltenüberschrift hierher ziehen oder Strg+G darauf drücken, um zu gruppieren",groupLabelSeparator:": ",sortAscending:"aufsteigend",sortDescending:"absteigend",sortClearedAnnouncement:"Sortierung von {column} entfernt",sortedAnnouncement:"Sortiert nach {column}, {order}",trueText:"Wahr",falseText:"Falsch",columnChooser:"Spaltenauswahl",hideColumn:"Spalte ausblenden",showColumn:"Spalte einblenden",fixStart:"Am Anfang fixieren",fixEnd:"Am Ende fixieren",unfix:"Fixierung aufheben",autoSize:"Doppelklicken oder Eingabetaste drücken, um die Breite anzupassen",summarySum:"Summe",summaryMin:"Min.",summaryMax:"Max.",summaryAvg:"Mittelw.",summaryCount:"Anzahl",summaryText:"{type}: {value}",summaryColumnText:"{type} von {column}: {value}",groupInfoText:"({info})",ungroupColumn:"Gruppierung aufheben",ungroupAll:"Alle Gruppierungen aufheben",expandAllGroups:"Alle Gruppen erweitern",collapseAllGroups:"Alle Gruppen reduzieren",groupPanelMenuLabel:"Gruppenoptionen",filterEquals:"Gleich",filterNotEquals:"Ungleich",filterLessThan:"Kleiner als",filterLessThanOrEqual:"Kleiner oder gleich",filterGreaterThan:"Größer als",filterGreaterThanOrEqual:"Größer oder gleich",filterContains:"Enthält",filterNotContains:"Enthält nicht",filterStartsWith:"Beginnt mit",filterEndsWith:"Endet mit",filterBetween:"Zwischen",filterAnyOf:"Ist einer von",filterNoneOf:"Ist keiner von",filterIsBlank:"Ist leer",filterIsNotBlank:"Ist nicht leer",filterReset:"Zurücksetzen",filterEditorLabel:"{column} filtern",filterOperationLabel:"Filteroperation",headerFilterLabel:"Filteroptionen für {column}",filterBetweenStart:"Von",filterBetweenEnd:"Bis",filterAll:"(Alle)",filterBlanks:"(Leer)",filterClear:"Filter löschen",searchPlaceholder:"Suchen…",selectAll:"Alle auswählen",ok:"OK",cancel:"Abbrechen",filteredAnnouncement:"Zeilen: {count}",selectRow:"Zeile auswählen",rowDetails:"Zeilendetails",adaptiveColumnsAnnouncement:"Spalten in den Zeilendetails: {columns}",noAdaptiveColumnsAnnouncement:"Alle Spalten in der Tabelle",adaptiveColumnDescription:"In den Zeilendetails",adaptiveLabelSeparator:": ",fixedTopRowsLabel:"Oben angeheftete Zeilen",fixedBottomRowsLabel:"Unten angeheftete Zeilen",selectAllRows:"Alle Zeilen auswählen",rowsSelectedAnnouncement:"Ausgewählte Zeilen: {count}",rowsCopiedAnnouncement:"Kopierte Zeilen: {count}",cellCopiedAnnouncement:"Zelle kopiert",columnMovedAnnouncement:"{column} an Position {position} von {count} verschoben",groupedAnnouncement:"Gruppiert nach {column}",ungroupedAnnouncement:"Gruppierung nach {column} aufgehoben",columnHeaderMenuLabel:"Optionen für {column}",groupColumn:"Nach dieser Spalte gruppieren",moveLeft:"Nach links verschieben",moveRight:"Nach rechts verschieben",autoSizeColumn:"Breite an Inhalt anpassen",increaseColumnWidth:"Breiter",decreaseColumnWidth:"Schmaler",columnFiltered:"Gefiltert",columnFixedStart:"Am Anfang fixiert",columnFixedEnd:"Am Ende fixiert",columnSortPriority:"Sortierung {order}, Priorität {priority}",sortedWithPriorityAnnouncement:"Sortiert nach {column}, {order}, Priorität {priority}",groupLevelChangedAnnouncement:"{column} auf Gruppierungsebene {level} von {count} verschoben",groupingClearedAnnouncement:"Gruppierung aller Spalten aufgehoben",groupsExpandedAnnouncement:"Alle Gruppen erweitert",groupsCollapsedAnnouncement:"Alle Gruppen reduziert",columnResizedAnnouncement:"Breite von {column}: {width} px",resizeHandleLabel:"Breite von {column} ändern",groupPanelLabel:"Gruppierung",filterOperationButtonLabel:"Filteroperation für {column}: {operation}",searchPanelLabel:"Im Raster suchen",headerFilterSearchLabel:"Werte suchen",headerFilterTruncated:"{shown} von {count} angezeigt",headerFilterSearchAnnouncement:"Werte: {count}",selectAllResults:"Alle Ergebnisse auswählen ({count})",loading:"Wird geladen…",loadError:"Die Daten konnten nicht geladen werden.",retry:"Erneut versuchen",pageInfo:"Seite {page} von {pageCount} ({count} Einträge)",pageInfoUnknownCount:"Seite {page}",pageSizeLabel:"Zeilen pro Seite",paginationLabel:"Seitennavigation",firstPage:"Erste Seite",previousPage:"Vorherige Seite",nextPage:"Nächste Seite",lastPage:"Letzte Seite",editRow:"Bearbeiten",saveRow:"Speichern",removeRow:"Löschen",restoreRow:"Wiederherstellen",addRow:"Zeile hinzufügen",saveChanges:"Änderungen speichern",discardChanges:"Änderungen verwerfen",commandColumn:"Aktionen",confirmRemoveTitle:"Zeile löschen",confirmRemoveMessage:"Möchten Sie diese Zeile wirklich löschen?",addedRowDescription:"Neue Zeile, nicht gespeichert",removedRowDescription:"Zum Löschen markiert",modifiedCellDescription:"Geändert, nicht gespeichert",changesSavedAnnouncement:"Änderungen gespeichert",changesDiscardedAnnouncement:"Änderungen verworfen: {count}",rowRemovedAnnouncement:"Zeile gelöscht",rowMarkedForRemovalAnnouncement:"Zeile zum Löschen markiert",rowRestoredAnnouncement:"Zeile wiederhergestellt",rowAddedAnnouncement:"Zeile hinzugefügt",saveError:"Die Änderungen konnten nicht gespeichert werden.",invalidRowsMessage:"Beheben Sie die Fehler vor dem Speichern. Zeilen mit Fehlern: {count}",saving:"Wird gespeichert…",validating:"Wird geprüft…",validationEscapeHint:"Drücken Sie Esc zum Abbrechen.",validationRequired:"Dieses Feld ist erforderlich.",validationRange:"Geben Sie einen Wert zwischen {min} und {max} ein.",validationRangeMin:"Geben Sie einen Wert von mindestens {min} ein.",validationRangeMax:"Geben Sie einen Wert von höchstens {max} ein.",validationStringLength:"Geben Sie zwischen {min} und {max} Zeichen ein.",validationStringLengthMin:"Geben Sie mindestens {min} Zeichen ein.",validationStringLengthMax:"Geben Sie höchstens {max} Zeichen ein.",validationPattern:"Der Wert entspricht nicht dem erwarteten Format.",validationEmail:"Geben Sie eine gültige E-Mail-Adresse ein.",validationNumber:"Geben Sie eine Zahl ein.",validationDate:"Geben Sie ein gültiges Datum ein.",validationInvalid:"Der Wert ist ungültig.",toolbarLabel:"Tabellen-Symbolleiste",toolbarMoreButtonLabel:"Weitere Aktionen",exportButtonLabel:"Exportieren",exportCsv:"Als CSV exportieren",exportXlsx:"Nach Excel exportieren",exportSelectedCsv:"Ausgewählte Zeilen als CSV exportieren",exportSelectedXlsx:"Ausgewählte Zeilen nach Excel exportieren",exportPdf:"Als PDF exportieren",exportSelectedPdf:"Ausgewählte Zeilen als PDF exportieren",exportCancel:"Export abbrechen",exportCanceledAnnouncement:"Export abgebrochen",exportProgress:"Export läuft… {percent} %",pdfPageNumber:"Seite {page} von {pageCount}",exportDefaultTitle:"Daten",pdfTotalRow:"Summe",exportingAnnouncement:"Wird exportiert…",exportCompleteAnnouncement:"Nach {format} exportiert",exportErrorAnnouncement:"Export fehlgeschlagen",copyCell:"Kopieren",copySelectedRows:"Ausgewählte Zeilen kopieren",rowMenuLabel:"Zeilenoptionen",groupRowMenuLabel:"Optionen für Gruppe {value}",sortColumnAscending:"Aufsteigend sortieren",sortColumnDescending:"Absteigend sortieren",clearColumnSorting:"Sortierung aufheben",expandGroup:"Gruppe erweitern",collapseGroup:"Gruppe reduzieren",expandRow:"Details anzeigen",collapseRow:"Details ausblenden",copyFailedAnnouncement:"Konnte nicht in die Zwischenablage kopieren.",cellRangeSelectedAnnouncement:"Ausgewählte Zellen: {cells}. Zeilen: {rows}, Spalten: {columns}",cellRangesSelectedAnnouncement:"Ausgewählte Bereiche: {count}. Zellen: {cells}",addToSelectionOnAnnouncement:"Zur Auswahl hinzufügen. Umschalt+F8 oder Esc beendet.",addToSelectionOffAnnouncement:"Hinzufügen zur Auswahl beendet",addingToSelection:"Zur Auswahl hinzufügen",cellsCopiedAnnouncement:"Kopierte Zellen: {count}",cellsPastedAnnouncement:"Eingefügte Zellen: {count}",cellsSkippedAnnouncement:"Eingefügte Zellen: {count}. Übersprungen: {skipped}",copyLimitExceededAnnouncement:"Zu viele Zellen zum Kopieren: {count}. Grenze: {max}",pasteLimitExceededAnnouncement:"Zu viele Zellen zum Einfügen: {count}. Grenze: {max}",rowsNotLoadedAnnouncement:"Einige Zeilen sind noch nicht geladen. Scrollen Sie zu ihnen und versuchen Sie es erneut.",cellRangeSummaryLabel:"Zusammenfassung der Auswahl",extendSelectionToCell:"Auswahl bis zu dieser Zelle erweitern",addCellToSelection:"Zelle zur Auswahl hinzufügen",copySelectedCells:"Ausgewählte Zellen kopieren",paste:"Einfügen",pasteFailedAnnouncement:"Die Zwischenablage konnte nicht gelesen werden. Fügen Sie über die Tastatur ein.",expandNode:"Erweitern",collapseNode:"Reduzieren",addChildRow:"Untergeordnete Zeile hinzufügen",childRowsLoadingAnnouncement:"Untergeordnete Zeilen werden geladen",childRowsLoadedAnnouncement:"Untergeordnete Zeilen geladen: {count}",childRowsLoadErrorAnnouncement:"Untergeordnete Zeilen konnten nicht geladen werden",nodesExpandedAnnouncement:"Erweiterte Zeilen: {count}",fixColumn:"Spalte fixieren",autoSizeAllColumns:"Breite aller Spalten an Inhalt anpassen",openColumnChooser:"Spalten auswählen",resetColumns:"Spalten zurücksetzen",columnChooserSearchLabel:"Spalten suchen",columnChooserSearchAnnouncement:"Spalten: {count}",selectAllColumns:"Alle Spalten anzeigen",reorderColumnLabel:"Alt+Umschalt+Pfeil nach oben oder unten verschiebt die Spalte",columnFixedStartAnnouncement:"{column} am Anfang fixiert",columnFixedEndAnnouncement:"{column} am Ende fixiert",columnUnfixedAnnouncement:"Fixierung von {column} aufgehoben",allColumnsAutoSizedAnnouncement:"Breite aller Spalten angepasst",columnMoveRefusedAnnouncement:"{column} kann nicht an {target} vorbei verschoben werden",columnsResetAnnouncement:"Spalten zurückgesetzt"},it:{noData:"Nessun dato",dragToGroup:"Trascina qui un’intestazione o premi Ctrl+G su di essa per raggruppare",groupLabelSeparator:": ",sortAscending:"crescente",sortDescending:"decrescente",sortClearedAnnouncement:"Ordinamento rimosso da {column}",sortedAnnouncement:"Ordinato per {column}, {order}",trueText:"Vero",falseText:"Falso",columnChooser:"Selettore colonne",hideColumn:"Nascondi colonna",showColumn:"Mostra colonna",fixStart:"Blocca all’inizio",fixEnd:"Blocca alla fine",unfix:"Sblocca",autoSize:"Doppio clic o Invio per adattare al contenuto",summarySum:"Somma",summaryMin:"Min",summaryMax:"Max",summaryAvg:"Media",summaryCount:"Conteggio",summaryText:"{type}: {value}",summaryColumnText:"{type} di {column}: {value}",groupInfoText:"({info})",ungroupColumn:"Separa",ungroupAll:"Separa tutto",expandAllGroups:"Espandi tutti i gruppi",collapseAllGroups:"Comprimi tutti i gruppi",groupPanelMenuLabel:"Opzioni di gruppo",filterEquals:"Uguale a",filterNotEquals:"Diverso da",filterLessThan:"Minore di",filterLessThanOrEqual:"Minore o uguale a",filterGreaterThan:"Maggiore di",filterGreaterThanOrEqual:"Maggiore o uguale a",filterContains:"Contiene",filterNotContains:"Non contiene",filterStartsWith:"Inizia con",filterEndsWith:"Termina con",filterBetween:"Tra",filterAnyOf:"È uno di",filterNoneOf:"Non è nessuno di",filterIsBlank:"È vuoto",filterIsNotBlank:"Non è vuoto",filterReset:"Reimposta",filterEditorLabel:"Filtra {column}",filterOperationLabel:"Operazione di filtro",headerFilterLabel:"Opzioni di filtro per {column}",filterBetweenStart:"Da",filterBetweenEnd:"A",filterAll:"(Tutti)",filterBlanks:"(Vuoti)",filterClear:"Cancella filtro",searchPlaceholder:"Cerca…",selectAll:"Seleziona tutto",ok:"OK",cancel:"Annulla",filteredAnnouncement:"Righe: {count}",selectRow:"Seleziona riga",rowDetails:"Dettagli della riga",adaptiveColumnsAnnouncement:"Colonne nei dettagli della riga: {columns}",noAdaptiveColumnsAnnouncement:"Tutte le colonne nella tabella",adaptiveColumnDescription:"Nei dettagli della riga",adaptiveLabelSeparator:": ",fixedTopRowsLabel:"Righe bloccate in alto",fixedBottomRowsLabel:"Righe bloccate in basso",selectAllRows:"Seleziona tutte le righe",rowsSelectedAnnouncement:"Righe selezionate: {count}",rowsCopiedAnnouncement:"Righe copiate: {count}",cellCopiedAnnouncement:"Cella copiata",columnMovedAnnouncement:"{column} spostata in posizione {position} di {count}",groupedAnnouncement:"Raggruppato per {column}",ungroupedAnnouncement:"Raggruppamento per {column} rimosso",columnHeaderMenuLabel:"Opzioni di {column}",groupColumn:"Raggruppa per questa colonna",moveLeft:"Sposta a sinistra",moveRight:"Sposta a destra",autoSizeColumn:"Adatta larghezza al contenuto",increaseColumnWidth:"Aumenta larghezza",decreaseColumnWidth:"Riduci larghezza",columnFiltered:"Filtrata",columnFixedStart:"Bloccata all’inizio",columnFixedEnd:"Bloccata alla fine",columnSortPriority:"Ordine {order}, priorità {priority}",sortedWithPriorityAnnouncement:"Ordinato per {column}, {order}, priorità {priority}",groupLevelChangedAnnouncement:"{column} spostata al livello di raggruppamento {level} di {count}",groupingClearedAnnouncement:"Raggruppamento rimosso da tutte le colonne",groupsExpandedAnnouncement:"Tutti i gruppi espansi",groupsCollapsedAnnouncement:"Tutti i gruppi compressi",columnResizedAnnouncement:"Larghezza di {column}: {width} px",resizeHandleLabel:"Ridimensiona {column}",groupPanelLabel:"Raggruppamento",filterOperationButtonLabel:"Operazione di filtro per {column}: {operation}",searchPanelLabel:"Cerca nella griglia",headerFilterSearchLabel:"Cerca valori",headerFilterTruncated:"Visualizzati {shown} di {count}",headerFilterSearchAnnouncement:"Valori: {count}",selectAllResults:"Seleziona tutti i risultati ({count})",loading:"Caricamento…",loadError:"Impossibile caricare i dati.",retry:"Riprova",pageInfo:"Pagina {page} di {pageCount} ({count} elementi)",pageInfoUnknownCount:"Pagina {page}",pageSizeLabel:"Righe per pagina",paginationLabel:"Paginazione",firstPage:"Prima pagina",previousPage:"Pagina precedente",nextPage:"Pagina successiva",lastPage:"Ultima pagina",editRow:"Modifica",saveRow:"Salva",removeRow:"Elimina",restoreRow:"Ripristina",addRow:"Aggiungi riga",saveChanges:"Salva modifiche",discardChanges:"Annulla modifiche",commandColumn:"Azioni",confirmRemoveTitle:"Elimina riga",confirmRemoveMessage:"Eliminare questa riga?",addedRowDescription:"Riga nuova, non salvata",removedRowDescription:"Contrassegnata per l’eliminazione",modifiedCellDescription:"Modificato, non salvato",changesSavedAnnouncement:"Modifiche salvate",changesDiscardedAnnouncement:"Modifiche annullate: {count}",rowRemovedAnnouncement:"Riga eliminata",rowMarkedForRemovalAnnouncement:"Riga contrassegnata per l’eliminazione",rowRestoredAnnouncement:"Riga ripristinata",rowAddedAnnouncement:"Riga aggiunta",saveError:"Impossibile salvare le modifiche.",invalidRowsMessage:"Correggi gli errori prima di salvare. Righe con errori: {count}",saving:"Salvataggio…",validating:"Convalida…",validationEscapeHint:"Premi Esc per annullare.",validationRequired:"Campo obbligatorio.",validationRange:"Inserisci un valore tra {min} e {max}.",validationRangeMin:"Inserisci un valore di almeno {min}.",validationRangeMax:"Inserisci un valore di al massimo {max}.",validationStringLength:"Inserisci da {min} a {max} caratteri.",validationStringLengthMin:"Inserisci almeno {min} caratteri.",validationStringLengthMax:"Inserisci al massimo {max} caratteri.",validationPattern:"Il valore non è nel formato previsto.",validationEmail:"Inserisci un indirizzo e-mail valido.",validationNumber:"Inserisci un numero.",validationDate:"Inserisci una data valida.",validationInvalid:"Il valore non è valido.",toolbarLabel:"Barra degli strumenti della griglia",toolbarMoreButtonLabel:"Altre azioni",exportButtonLabel:"Esporta",exportCsv:"Esporta in CSV",exportXlsx:"Esporta in Excel",exportSelectedCsv:"Esporta le righe selezionate in CSV",exportSelectedXlsx:"Esporta le righe selezionate in Excel",exportPdf:"Esporta in PDF",exportSelectedPdf:"Esporta le righe selezionate in PDF",exportCancel:"Annulla esportazione",exportCanceledAnnouncement:"Esportazione annullata",exportProgress:"Esportazione… {percent}%",pdfPageNumber:"Pagina {page} di {pageCount}",exportDefaultTitle:"Dati",pdfTotalRow:"Totale",exportingAnnouncement:"Esportazione…",exportCompleteAnnouncement:"Esportato in {format}",exportErrorAnnouncement:"Esportazione non riuscita",copyCell:"Copia",copySelectedRows:"Copia le righe selezionate",rowMenuLabel:"Opzioni della riga",groupRowMenuLabel:"Opzioni del gruppo {value}",sortColumnAscending:"Ordine crescente",sortColumnDescending:"Ordine decrescente",clearColumnSorting:"Rimuovi ordinamento",expandGroup:"Espandi gruppo",collapseGroup:"Comprimi gruppo",expandRow:"Mostra dettagli",collapseRow:"Nascondi dettagli",copyFailedAnnouncement:"Impossibile copiare negli appunti.",cellRangeSelectedAnnouncement:"Celle selezionate: {cells}. Righe: {rows}, colonne: {columns}",cellRangesSelectedAnnouncement:"Intervalli selezionati: {count}. Celle: {cells}",addToSelectionOnAnnouncement:"Aggiunta alla selezione. Maiusc+F8 o Esc per terminare.",addToSelectionOffAnnouncement:"Aggiunta alla selezione terminata",addingToSelection:"Aggiunta alla selezione",cellsCopiedAnnouncement:"Celle copiate: {count}",cellsPastedAnnouncement:"Celle incollate: {count}",cellsSkippedAnnouncement:"Celle incollate: {count}. Saltate: {skipped}",copyLimitExceededAnnouncement:"Troppe celle da copiare: {count}. Limite: {max}",pasteLimitExceededAnnouncement:"Troppe celle da incollare: {count}. Limite: {max}",rowsNotLoadedAnnouncement:"Alcune righe non sono ancora caricate. Scorri fino a esse e riprova.",cellRangeSummaryLabel:"Riepilogo della selezione",extendSelectionToCell:"Estendi la selezione fino a questa cella",addCellToSelection:"Aggiungi la cella alla selezione",copySelectedCells:"Copia le celle selezionate",paste:"Incolla",pasteFailedAnnouncement:"Impossibile leggere gli appunti. Incolla con la tastiera.",expandNode:"Espandi",collapseNode:"Comprimi",addChildRow:"Aggiungi riga figlia",childRowsLoadingAnnouncement:"Caricamento delle righe figlie",childRowsLoadedAnnouncement:"Righe figlie caricate: {count}",childRowsLoadErrorAnnouncement:"Impossibile caricare le righe figlie",nodesExpandedAnnouncement:"Righe espanse: {count}",fixColumn:"Blocca colonna",autoSizeAllColumns:"Adatta larghezza di tutte le colonne",openColumnChooser:"Scegli colonne",resetColumns:"Ripristina colonne",columnChooserSearchLabel:"Cerca colonne",columnChooserSearchAnnouncement:"Colonne: {count}",selectAllColumns:"Mostra tutte le colonne",reorderColumnLabel:"Alt+Maiusc+Freccia su o giù sposta la colonna",columnFixedStartAnnouncement:"{column} bloccata all’inizio",columnFixedEndAnnouncement:"{column} bloccata alla fine",columnUnfixedAnnouncement:"{column} sbloccata",allColumnsAutoSizedAnnouncement:"Larghezza di tutte le colonne adattata",columnMoveRefusedAnnouncement:"{column} non può superare {target}",columnsResetAnnouncement:"Colonne ripristinate"},nl:{noData:"Geen gegevens",dragToGroup:"Sleep een kolomkop hierheen of druk erop op Ctrl+G om te groeperen",groupLabelSeparator:": ",sortAscending:"oplopend",sortDescending:"aflopend",sortClearedAnnouncement:"Sortering verwijderd van {column}",sortedAnnouncement:"Gesorteerd op {column}, {order}",trueText:"Waar",falseText:"Onwaar",columnChooser:"Kolomkiezer",hideColumn:"Kolom verbergen",showColumn:"Kolom weergeven",fixStart:"Vastzetten aan het begin",fixEnd:"Vastzetten aan het einde",unfix:"Losmaken",autoSize:"Dubbelklik of druk op Enter om aan de inhoud aan te passen",summarySum:"Som",summaryMin:"Min.",summaryMax:"Max.",summaryAvg:"Gem.",summaryCount:"Aantal",summaryText:"{type}: {value}",summaryColumnText:"{type} van {column}: {value}",groupInfoText:"({info})",ungroupColumn:"Groepering opheffen",ungroupAll:"Alle groeperingen opheffen",expandAllGroups:"Alle groepen uitvouwen",collapseAllGroups:"Alle groepen samenvouwen",groupPanelMenuLabel:"Groepsopties",filterEquals:"Is gelijk aan",filterNotEquals:"Is niet gelijk aan",filterLessThan:"Kleiner dan",filterLessThanOrEqual:"Kleiner dan of gelijk aan",filterGreaterThan:"Groter dan",filterGreaterThanOrEqual:"Groter dan of gelijk aan",filterContains:"Bevat",filterNotContains:"Bevat niet",filterStartsWith:"Begint met",filterEndsWith:"Eindigt op",filterBetween:"Tussen",filterAnyOf:"Is een van",filterNoneOf:"Is geen van",filterIsBlank:"Is leeg",filterIsNotBlank:"Is niet leeg",filterReset:"Herstellen",filterEditorLabel:"{column} filteren",filterOperationLabel:"Filterbewerking",headerFilterLabel:"Filteropties voor {column}",filterBetweenStart:"Van",filterBetweenEnd:"Tot",filterAll:"(Alle)",filterBlanks:"(Leeg)",filterClear:"Filter wissen",searchPlaceholder:"Zoeken…",selectAll:"Alles selecteren",ok:"OK",cancel:"Annuleren",filteredAnnouncement:"Rijen: {count}",selectRow:"Rij selecteren",rowDetails:"Rijdetails",adaptiveColumnsAnnouncement:"Kolommen in de rijdetails: {columns}",noAdaptiveColumnsAnnouncement:"Alle kolommen in de tabel",adaptiveColumnDescription:"In de rijdetails",adaptiveLabelSeparator:": ",fixedTopRowsLabel:"Bovenaan vastgezette rijen",fixedBottomRowsLabel:"Onderaan vastgezette rijen",selectAllRows:"Alle rijen selecteren",rowsSelectedAnnouncement:"Geselecteerde rijen: {count}",rowsCopiedAnnouncement:"Gekopieerde rijen: {count}",cellCopiedAnnouncement:"Cel gekopieerd",columnMovedAnnouncement:"{column} verplaatst naar positie {position} van {count}",groupedAnnouncement:"Gegroepeerd op {column}",ungroupedAnnouncement:"Groepering op {column} verwijderd",columnHeaderMenuLabel:"Opties voor {column}",groupColumn:"Groeperen op deze kolom",moveLeft:"Naar links verplaatsen",moveRight:"Naar rechts verplaatsen",autoSizeColumn:"Breedte aan inhoud aanpassen",increaseColumnWidth:"Breder",decreaseColumnWidth:"Smaller",columnFiltered:"Gefilterd",columnFixedStart:"Vastgezet aan het begin",columnFixedEnd:"Vastgezet aan het einde",columnSortPriority:"Sortering {order}, prioriteit {priority}",sortedWithPriorityAnnouncement:"Gesorteerd op {column}, {order}, prioriteit {priority}",groupLevelChangedAnnouncement:"{column} verplaatst naar groeperingsniveau {level} van {count}",groupingClearedAnnouncement:"Groepering van alle kolommen opgeheven",groupsExpandedAnnouncement:"Alle groepen uitgevouwen",groupsCollapsedAnnouncement:"Alle groepen samengevouwen",columnResizedAnnouncement:"Breedte van {column}: {width} px",resizeHandleLabel:"Breedte van {column} wijzigen",groupPanelLabel:"Groepering",filterOperationButtonLabel:"Filterbewerking voor {column}: {operation}",searchPanelLabel:"Zoeken in het raster",headerFilterSearchLabel:"Waarden zoeken",headerFilterTruncated:"{shown} van {count} weergegeven",headerFilterSearchAnnouncement:"Waarden: {count}",selectAllResults:"Alle resultaten selecteren ({count})",loading:"Laden…",loadError:"De gegevens konden niet worden geladen.",retry:"Opnieuw proberen",pageInfo:"Pagina {page} van {pageCount} ({count} items)",pageInfoUnknownCount:"Pagina {page}",pageSizeLabel:"Rijen per pagina",paginationLabel:"Paginering",firstPage:"Eerste pagina",previousPage:"Vorige pagina",nextPage:"Volgende pagina",lastPage:"Laatste pagina",editRow:"Bewerken",saveRow:"Opslaan",removeRow:"Verwijderen",restoreRow:"Herstellen",addRow:"Rij toevoegen",saveChanges:"Wijzigingen opslaan",discardChanges:"Wijzigingen negeren",commandColumn:"Acties",confirmRemoveTitle:"Rij verwijderen",confirmRemoveMessage:"Weet u zeker dat u deze rij wilt verwijderen?",addedRowDescription:"Nieuwe rij, niet opgeslagen",removedRowDescription:"Gemarkeerd voor verwijdering",modifiedCellDescription:"Gewijzigd, niet opgeslagen",changesSavedAnnouncement:"Wijzigingen opgeslagen",changesDiscardedAnnouncement:"Wijzigingen genegeerd: {count}",rowRemovedAnnouncement:"Rij verwijderd",rowMarkedForRemovalAnnouncement:"Rij gemarkeerd voor verwijdering",rowRestoredAnnouncement:"Rij hersteld",rowAddedAnnouncement:"Rij toegevoegd",saveError:"De wijzigingen konden niet worden opgeslagen.",invalidRowsMessage:"Herstel de fouten voor het opslaan. Rijen met fouten: {count}",saving:"Opslaan…",validating:"Valideren…",validationEscapeHint:"Druk op Esc om te annuleren.",validationRequired:"Dit veld is verplicht.",validationRange:"Voer een waarde in tussen {min} en {max}.",validationRangeMin:"Voer een waarde in van minimaal {min}.",validationRangeMax:"Voer een waarde in van maximaal {max}.",validationStringLength:"Voer tussen {min} en {max} tekens in.",validationStringLengthMin:"Voer minimaal {min} tekens in.",validationStringLengthMax:"Voer maximaal {max} tekens in.",validationPattern:"De waarde heeft niet de verwachte notatie.",validationEmail:"Voer een geldig e-mailadres in.",validationNumber:"Voer een getal in.",validationDate:"Voer een geldige datum in.",validationInvalid:"De waarde is ongeldig.",toolbarLabel:"Werkbalk van het raster",toolbarMoreButtonLabel:"Meer acties",exportButtonLabel:"Exporteren",exportCsv:"Exporteren naar CSV",exportXlsx:"Exporteren naar Excel",exportSelectedCsv:"Geselecteerde rijen exporteren naar CSV",exportSelectedXlsx:"Geselecteerde rijen exporteren naar Excel",exportPdf:"Exporteren naar PDF",exportSelectedPdf:"Geselecteerde rijen exporteren naar PDF",exportCancel:"Exporteren annuleren",exportCanceledAnnouncement:"Exporteren geannuleerd",exportProgress:"Exporteren… {percent}%",pdfPageNumber:"Pagina {page} van {pageCount}",exportDefaultTitle:"Gegevens",pdfTotalRow:"Totaal",exportingAnnouncement:"Bezig met exporteren…",exportCompleteAnnouncement:"Geëxporteerd naar {format}",exportErrorAnnouncement:"Exporteren mislukt",copyCell:"Kopiëren",copySelectedRows:"Geselecteerde rijen kopiëren",rowMenuLabel:"Rijopties",groupRowMenuLabel:"Opties voor groep {value}",sortColumnAscending:"Oplopend sorteren",sortColumnDescending:"Aflopend sorteren",clearColumnSorting:"Sortering wissen",expandGroup:"Groep uitvouwen",collapseGroup:"Groep samenvouwen",expandRow:"Details weergeven",collapseRow:"Details verbergen",copyFailedAnnouncement:"Kopiëren naar het klembord is mislukt.",cellRangeSelectedAnnouncement:"Geselecteerde cellen: {cells}. Rijen: {rows}, kolommen: {columns}",cellRangesSelectedAnnouncement:"Geselecteerde bereiken: {count}. Cellen: {cells}",addToSelectionOnAnnouncement:"Toevoegen aan selectie. Shift+F8 of Esc stopt.",addToSelectionOffAnnouncement:"Gestopt met toevoegen aan selectie",addingToSelection:"Toevoegen aan selectie",cellsCopiedAnnouncement:"Gekopieerde cellen: {count}",cellsPastedAnnouncement:"Geplakte cellen: {count}",cellsSkippedAnnouncement:"Geplakte cellen: {count}. Overgeslagen: {skipped}",copyLimitExceededAnnouncement:"Te veel cellen om te kopiëren: {count}. Limiet: {max}",pasteLimitExceededAnnouncement:"Te veel cellen om te plakken: {count}. Limiet: {max}",rowsNotLoadedAnnouncement:"Sommige rijen zijn nog niet geladen. Scrol ernaartoe en probeer het opnieuw.",cellRangeSummaryLabel:"Samenvatting van de selectie",extendSelectionToCell:"Selectie uitbreiden tot deze cel",addCellToSelection:"Cel aan selectie toevoegen",copySelectedCells:"Geselecteerde cellen kopiëren",paste:"Plakken",pasteFailedAnnouncement:"Het klembord kon niet worden gelezen. Plak met het toetsenbord.",expandNode:"Uitvouwen",collapseNode:"Samenvouwen",addChildRow:"Onderliggende rij toevoegen",childRowsLoadingAnnouncement:"Onderliggende rijen laden",childRowsLoadedAnnouncement:"Onderliggende rijen geladen: {count}",childRowsLoadErrorAnnouncement:"Onderliggende rijen konden niet worden geladen",nodesExpandedAnnouncement:"Uitgevouwen rijen: {count}",fixColumn:"Kolom vastzetten",autoSizeAllColumns:"Breedte van alle kolommen aanpassen",openColumnChooser:"Kolommen kiezen",resetColumns:"Kolommen herstellen",columnChooserSearchLabel:"Kolommen zoeken",columnChooserSearchAnnouncement:"Kolommen: {count}",selectAllColumns:"Alle kolommen tonen",reorderColumnLabel:"Alt+Shift+pijl omhoog of omlaag verplaatst de kolom",columnFixedStartAnnouncement:"{column} vastgezet aan het begin",columnFixedEndAnnouncement:"{column} vastgezet aan het einde",columnUnfixedAnnouncement:"{column} losgemaakt",allColumnsAutoSizedAnnouncement:"Breedte van alle kolommen aangepast",columnMoveRefusedAnnouncement:"{column} kan niet voorbij {target}",columnsResetAnnouncement:"Kolommen hersteld"},ru:{noData:"Нет данных",dragToGroup:"Перетащите сюда заголовок или нажмите на нём Ctrl+G для группировки",groupLabelSeparator:": ",sortAscending:"по возрастанию",sortDescending:"по убыванию",sortClearedAnnouncement:"Сортировка по столбцу {column} отменена",sortedAnnouncement:"Отсортировано по столбцу {column}, {order}",trueText:"Истина",falseText:"Ложь",columnChooser:"Выбор столбцов",hideColumn:"Скрыть столбец",showColumn:"Показать столбец",fixStart:"Закрепить в начале",fixEnd:"Закрепить в конце",unfix:"Открепить",autoSize:"Дважды щёлкните или нажмите Enter, чтобы подогнать ширину",summarySum:"Сумма",summaryMin:"Мин.",summaryMax:"Макс.",summaryAvg:"Сред.",summaryCount:"Количество",summaryText:"{type}: {value}",summaryColumnText:"{type} ({column}): {value}",groupInfoText:"({info})",ungroupColumn:"Разгруппировать",ungroupAll:"Разгруппировать все",expandAllGroups:"Развернуть все группы",collapseAllGroups:"Свернуть все группы",groupPanelMenuLabel:"Параметры группировки",filterEquals:"Равно",filterNotEquals:"Не равно",filterLessThan:"Меньше",filterLessThanOrEqual:"Меньше или равно",filterGreaterThan:"Больше",filterGreaterThanOrEqual:"Больше или равно",filterContains:"Содержит",filterNotContains:"Не содержит",filterStartsWith:"Начинается с",filterEndsWith:"Заканчивается на",filterBetween:"Между",filterAnyOf:"Любое из",filterNoneOf:"Ни одно из",filterIsBlank:"Пусто",filterIsNotBlank:"Не пусто",filterReset:"Сбросить",filterEditorLabel:"Фильтр: {column}",filterOperationLabel:"Операция фильтра",headerFilterLabel:"Параметры фильтра: {column}",filterBetweenStart:"С",filterBetweenEnd:"По",filterAll:"(Все)",filterBlanks:"(Пустые)",filterClear:"Очистить фильтр",searchPlaceholder:"Поиск…",selectAll:"Выбрать все",ok:"ОК",cancel:"Отмена",filteredAnnouncement:"Строк: {count}",selectRow:"Выбрать строку",rowDetails:"Сведения о строке",adaptiveColumnsAnnouncement:"Столбцы в сведениях о строке: {columns}",noAdaptiveColumnsAnnouncement:"Все столбцы в таблице",adaptiveColumnDescription:"В сведениях о строке",adaptiveLabelSeparator:": ",fixedTopRowsLabel:"Закреплённые строки сверху",fixedBottomRowsLabel:"Закреплённые строки снизу",selectAllRows:"Выбрать все строки",rowsSelectedAnnouncement:"Выбрано строк: {count}",rowsCopiedAnnouncement:"Скопировано строк: {count}",cellCopiedAnnouncement:"Ячейка скопирована",columnMovedAnnouncement:"Столбец {column} перемещён на позицию {position} из {count}",groupedAnnouncement:"Сгруппировано по {column}",ungroupedAnnouncement:"Группировка по {column} снята",columnHeaderMenuLabel:"Параметры столбца {column}",groupColumn:"Группировать по этому столбцу",moveLeft:"Переместить влево",moveRight:"Переместить вправо",autoSizeColumn:"Подогнать ширину по содержимому",increaseColumnWidth:"Увеличить ширину",decreaseColumnWidth:"Уменьшить ширину",columnFiltered:"Отфильтрован",columnFixedStart:"Закреплён в начале",columnFixedEnd:"Закреплён в конце",columnSortPriority:"Сортировка {order}, приоритет {priority}",sortedWithPriorityAnnouncement:"Отсортировано по столбцу {column}, {order}, приоритет {priority}",groupLevelChangedAnnouncement:"Столбец {column} перемещён на уровень группировки {level} из {count}",groupingClearedAnnouncement:"Группировка всех столбцов отменена",groupsExpandedAnnouncement:"Все группы развёрнуты",groupsCollapsedAnnouncement:"Все группы свёрнуты",columnResizedAnnouncement:"Ширина столбца {column}: {width} px",resizeHandleLabel:"Изменить ширину столбца {column}",groupPanelLabel:"Группировка",filterOperationButtonLabel:"Операция фильтра для столбца {column}: {operation}",searchPanelLabel:"Поиск в таблице",headerFilterSearchLabel:"Поиск значений",headerFilterTruncated:"Показано {shown} из {count}",headerFilterSearchAnnouncement:"Значения: {count}",selectAllResults:"Выбрать все результаты ({count})",loading:"Загрузка…",loadError:"Не удалось загрузить данные.",retry:"Повторить",pageInfo:"Страница {page} из {pageCount} (элементов: {count})",pageInfoUnknownCount:"Страница {page}",pageSizeLabel:"Строк на странице",paginationLabel:"Разбиение на страницы",firstPage:"Первая страница",previousPage:"Предыдущая страница",nextPage:"Следующая страница",lastPage:"Последняя страница",editRow:"Изменить",saveRow:"Сохранить",removeRow:"Удалить",restoreRow:"Восстановить",addRow:"Добавить строку",saveChanges:"Сохранить изменения",discardChanges:"Отменить изменения",commandColumn:"Действия",confirmRemoveTitle:"Удаление строки",confirmRemoveMessage:"Удалить эту строку?",addedRowDescription:"Новая строка, не сохранена",removedRowDescription:"Отмечена для удаления",modifiedCellDescription:"Изменено, не сохранено",changesSavedAnnouncement:"Изменения сохранены",changesDiscardedAnnouncement:"Изменения отменены: {count}",rowRemovedAnnouncement:"Строка удалена",rowMarkedForRemovalAnnouncement:"Строка отмечена для удаления",rowRestoredAnnouncement:"Строка восстановлена",rowAddedAnnouncement:"Строка добавлена",saveError:"Не удалось сохранить изменения.",invalidRowsMessage:"Исправьте ошибки перед сохранением. Строк с ошибками: {count}",saving:"Сохранение…",validating:"Проверка…",validationEscapeHint:"Нажмите Esc для отмены.",validationRequired:"Обязательное поле.",validationRange:"Введите значение от {min} до {max}.",validationRangeMin:"Введите значение не меньше {min}.",validationRangeMax:"Введите значение не больше {max}.",validationStringLength:"Введите от {min} до {max} символов.",validationStringLengthMin:"Введите не меньше {min} символов.",validationStringLengthMax:"Введите не больше {max} символов.",validationPattern:"Значение не соответствует ожидаемому формату.",validationEmail:"Введите действительный адрес электронной почты.",validationNumber:"Введите число.",validationDate:"Введите действительную дату.",validationInvalid:"Недопустимое значение.",toolbarLabel:"Панель инструментов таблицы",toolbarMoreButtonLabel:"Другие действия",exportButtonLabel:"Экспорт",exportCsv:"Экспорт в CSV",exportXlsx:"Экспорт в Excel",exportSelectedCsv:"Экспорт выбранных строк в CSV",exportSelectedXlsx:"Экспорт выбранных строк в Excel",exportPdf:"Экспорт в PDF",exportSelectedPdf:"Экспорт выбранных строк в PDF",exportCancel:"Отменить экспорт",exportCanceledAnnouncement:"Экспорт отменён",exportProgress:"Экспорт… {percent} %",pdfPageNumber:"Страница {page} из {pageCount}",exportDefaultTitle:"Данные",pdfTotalRow:"Итого",exportingAnnouncement:"Экспорт…",exportCompleteAnnouncement:"Экспортировано в {format}",exportErrorAnnouncement:"Не удалось экспортировать",copyCell:"Копировать",copySelectedRows:"Копировать выбранные строки",rowMenuLabel:"Параметры строки",groupRowMenuLabel:"Параметры группы {value}",sortColumnAscending:"Сортировать по возрастанию",sortColumnDescending:"Сортировать по убыванию",clearColumnSorting:"Сбросить сортировку",expandGroup:"Развернуть группу",collapseGroup:"Свернуть группу",expandRow:"Показать подробности",collapseRow:"Скрыть подробности",copyFailedAnnouncement:"Не удалось скопировать в буфер обмена.",cellRangeSelectedAnnouncement:"Выделено ячеек: {cells}. Строк: {rows}, столбцов: {columns}",cellRangesSelectedAnnouncement:"Выделено диапазонов: {count}. Ячеек: {cells}",addToSelectionOnAnnouncement:"Добавление к выделению. Shift+F8 или Esc — завершить.",addToSelectionOffAnnouncement:"Добавление к выделению завершено",addingToSelection:"Добавление к выделению",cellsCopiedAnnouncement:"Скопировано ячеек: {count}",cellsPastedAnnouncement:"Вставлено ячеек: {count}",cellsSkippedAnnouncement:"Вставлено ячеек: {count}. Пропущено: {skipped}",copyLimitExceededAnnouncement:"Слишком много ячеек для копирования: {count}. Предел: {max}",pasteLimitExceededAnnouncement:"Слишком много ячеек для вставки: {count}. Предел: {max}",rowsNotLoadedAnnouncement:"Некоторые строки ещё не загружены. Прокрутите к ним и повторите попытку.",cellRangeSummaryLabel:"Сводка по выделению",extendSelectionToCell:"Расширить выделение до этой ячейки",addCellToSelection:"Добавить ячейку к выделению",copySelectedCells:"Копировать выделенные ячейки",paste:"Вставить",pasteFailedAnnouncement:"Не удалось прочитать буфер обмена. Вставьте с клавиатуры.",expandNode:"Развернуть",collapseNode:"Свернуть",addChildRow:"Добавить дочернюю строку",childRowsLoadingAnnouncement:"Загрузка дочерних строк",childRowsLoadedAnnouncement:"Загружено дочерних строк: {count}",childRowsLoadErrorAnnouncement:"Не удалось загрузить дочерние строки",nodesExpandedAnnouncement:"Развёрнуто строк: {count}",fixColumn:"Закрепить столбец",autoSizeAllColumns:"Подогнать ширину всех столбцов",openColumnChooser:"Выбрать столбцы",resetColumns:"Сбросить столбцы",columnChooserSearchLabel:"Поиск столбцов",columnChooserSearchAnnouncement:"Столбцы: {count}",selectAllColumns:"Показать все столбцы",reorderColumnLabel:"Alt+Shift+стрелка вверх или вниз перемещает столбец",columnFixedStartAnnouncement:"Столбец {column} закреплён в начале",columnFixedEndAnnouncement:"Столбец {column} закреплён в конце",columnUnfixedAnnouncement:"Столбец {column} откреплён",allColumnsAutoSizedAnnouncement:"Ширина всех столбцов подогнана",columnMoveRefusedAnnouncement:"Столбец {column} нельзя переместить за {target}",columnsResetAnnouncement:"Столбцы сброшены"},pl:{noData:"Brak danych",dragToGroup:"Przeciągnij tu nagłówek lub naciśnij na nim Ctrl+G, aby pogrupować",groupLabelSeparator:": ",sortAscending:"rosnąco",sortDescending:"malejąco",sortClearedAnnouncement:"Usunięto sortowanie według {column}",sortedAnnouncement:"Posortowano według {column}, {order}",trueText:"Prawda",falseText:"Fałsz",columnChooser:"Wybór kolumn",hideColumn:"Ukryj kolumnę",showColumn:"Pokaż kolumnę",fixStart:"Przypnij na początku",fixEnd:"Przypnij na końcu",unfix:"Odepnij",autoSize:"Kliknij dwukrotnie lub naciśnij Enter, aby dopasować szerokość",summarySum:"Suma",summaryMin:"Min.",summaryMax:"Maks.",summaryAvg:"Średnia",summaryCount:"Liczba",summaryText:"{type}: {value}",summaryColumnText:"{type} ({column}): {value}",groupInfoText:"({info})",ungroupColumn:"Rozgrupuj",ungroupAll:"Rozgrupuj wszystko",expandAllGroups:"Rozwiń wszystkie grupy",collapseAllGroups:"Zwiń wszystkie grupy",groupPanelMenuLabel:"Opcje grupowania",filterEquals:"Równe",filterNotEquals:"Różne od",filterLessThan:"Mniejsze niż",filterLessThanOrEqual:"Mniejsze lub równe",filterGreaterThan:"Większe niż",filterGreaterThanOrEqual:"Większe lub równe",filterContains:"Zawiera",filterNotContains:"Nie zawiera",filterStartsWith:"Zaczyna się od",filterEndsWith:"Kończy się na",filterBetween:"Pomiędzy",filterAnyOf:"Jest jednym z",filterNoneOf:"Nie jest żadnym z",filterIsBlank:"Jest puste",filterIsNotBlank:"Nie jest puste",filterReset:"Resetuj",filterEditorLabel:"Filtruj {column}",filterOperationLabel:"Operacja filtru",headerFilterLabel:"Opcje filtru dla {column}",filterBetweenStart:"Od",filterBetweenEnd:"Do",filterAll:"(Wszystkie)",filterBlanks:"(Puste)",filterClear:"Wyczyść filtr",searchPlaceholder:"Szukaj…",selectAll:"Zaznacz wszystko",ok:"OK",cancel:"Anuluj",filteredAnnouncement:"Wiersze: {count}",selectRow:"Zaznacz wiersz",rowDetails:"Szczegóły wiersza",adaptiveColumnsAnnouncement:"Kolumny w szczegółach wiersza: {columns}",noAdaptiveColumnsAnnouncement:"Wszystkie kolumny w tabeli",adaptiveColumnDescription:"W szczegółach wiersza",adaptiveLabelSeparator:": ",fixedTopRowsLabel:"Wiersze przypięte u góry",fixedBottomRowsLabel:"Wiersze przypięte u dołu",selectAllRows:"Zaznacz wszystkie wiersze",rowsSelectedAnnouncement:"Zaznaczone wiersze: {count}",rowsCopiedAnnouncement:"Skopiowane wiersze: {count}",cellCopiedAnnouncement:"Skopiowano komórkę",columnMovedAnnouncement:"{column} przeniesiono na pozycję {position} z {count}",groupedAnnouncement:"Pogrupowano według {column}",ungroupedAnnouncement:"Usunięto grupowanie według {column}",columnHeaderMenuLabel:"Opcje kolumny {column}",groupColumn:"Grupuj według tej kolumny",moveLeft:"Przenieś w lewo",moveRight:"Przenieś w prawo",autoSizeColumn:"Dopasuj szerokość do zawartości",increaseColumnWidth:"Zwiększ szerokość",decreaseColumnWidth:"Zmniejsz szerokość",columnFiltered:"Przefiltrowana",columnFixedStart:"Przypięta na początku",columnFixedEnd:"Przypięta na końcu",columnSortPriority:"Sortowanie {order}, priorytet {priority}",sortedWithPriorityAnnouncement:"Posortowano według {column}, {order}, priorytet {priority}",groupLevelChangedAnnouncement:"{column} przeniesiono na poziom grupowania {level} z {count}",groupingClearedAnnouncement:"Usunięto grupowanie wszystkich kolumn",groupsExpandedAnnouncement:"Rozwinięto wszystkie grupy",groupsCollapsedAnnouncement:"Zwinięto wszystkie grupy",columnResizedAnnouncement:"Szerokość {column}: {width} px",resizeHandleLabel:"Zmień szerokość {column}",groupPanelLabel:"Grupowanie",filterOperationButtonLabel:"Operacja filtra dla {column}: {operation}",searchPanelLabel:"Szukaj w siatce",headerFilterSearchLabel:"Szukaj wartości",headerFilterTruncated:"Wyświetlono {shown} z {count}",headerFilterSearchAnnouncement:"Wartości: {count}",selectAllResults:"Zaznacz wszystkie wyniki ({count})",loading:"Wczytywanie…",loadError:"Nie udało się wczytać danych.",retry:"Spróbuj ponownie",pageInfo:"Strona {page} z {pageCount} (elementy: {count})",pageInfoUnknownCount:"Strona {page}",pageSizeLabel:"Wierszy na stronie",paginationLabel:"Stronicowanie",firstPage:"Pierwsza strona",previousPage:"Poprzednia strona",nextPage:"Następna strona",lastPage:"Ostatnia strona",editRow:"Edytuj",saveRow:"Zapisz",removeRow:"Usuń",restoreRow:"Przywróć",addRow:"Dodaj wiersz",saveChanges:"Zapisz zmiany",discardChanges:"Odrzuć zmiany",commandColumn:"Akcje",confirmRemoveTitle:"Usuń wiersz",confirmRemoveMessage:"Czy na pewno usunąć ten wiersz?",addedRowDescription:"Nowy wiersz, niezapisany",removedRowDescription:"Oznaczony do usunięcia",modifiedCellDescription:"Zmieniono, niezapisane",changesSavedAnnouncement:"Zmiany zapisane",changesDiscardedAnnouncement:"Odrzucone zmiany: {count}",rowRemovedAnnouncement:"Wiersz usunięty",rowMarkedForRemovalAnnouncement:"Wiersz oznaczony do usunięcia",rowRestoredAnnouncement:"Wiersz przywrócony",rowAddedAnnouncement:"Wiersz dodany",saveError:"Nie udało się zapisać zmian.",invalidRowsMessage:"Popraw błędy przed zapisaniem. Wiersze z błędami: {count}",saving:"Zapisywanie…",validating:"Sprawdzanie…",validationEscapeHint:"Naciśnij Esc, aby anulować.",validationRequired:"To pole jest wymagane.",validationRange:"Wpisz wartość od {min} do {max}.",validationRangeMin:"Wpisz wartość co najmniej {min}.",validationRangeMax:"Wpisz wartość co najwyżej {max}.",validationStringLength:"Wpisz od {min} do {max} znaków.",validationStringLengthMin:"Wpisz co najmniej {min} znaków.",validationStringLengthMax:"Wpisz co najwyżej {max} znaków.",validationPattern:"Wartość nie ma oczekiwanego formatu.",validationEmail:"Wpisz prawidłowy adres e-mail.",validationNumber:"Wpisz liczbę.",validationDate:"Wpisz prawidłową datę.",validationInvalid:"Wartość jest nieprawidłowa.",toolbarLabel:"Pasek narzędzi siatki",toolbarMoreButtonLabel:"Więcej działań",exportButtonLabel:"Eksportuj",exportCsv:"Eksportuj do CSV",exportXlsx:"Eksportuj do Excela",exportSelectedCsv:"Eksportuj zaznaczone wiersze do CSV",exportSelectedXlsx:"Eksportuj zaznaczone wiersze do Excela",exportPdf:"Eksportuj do PDF",exportSelectedPdf:"Eksportuj zaznaczone wiersze do PDF",exportCancel:"Anuluj eksport",exportCanceledAnnouncement:"Eksport anulowany",exportProgress:"Eksportowanie… {percent}%",pdfPageNumber:"Strona {page} z {pageCount}",exportDefaultTitle:"Dane",pdfTotalRow:"Suma",exportingAnnouncement:"Eksportowanie…",exportCompleteAnnouncement:"Wyeksportowano do {format}",exportErrorAnnouncement:"Eksport nie powiódł się",copyCell:"Kopiuj",copySelectedRows:"Kopiuj zaznaczone wiersze",rowMenuLabel:"Opcje wiersza",groupRowMenuLabel:"Opcje grupy {value}",sortColumnAscending:"Sortuj rosnąco",sortColumnDescending:"Sortuj malejąco",clearColumnSorting:"Wyczyść sortowanie",expandGroup:"Rozwiń grupę",collapseGroup:"Zwiń grupę",expandRow:"Pokaż szczegóły",collapseRow:"Ukryj szczegóły",copyFailedAnnouncement:"Nie udało się skopiować do schowka.",cellRangeSelectedAnnouncement:"Zaznaczone komórki: {cells}. Wiersze: {rows}, kolumny: {columns}",cellRangesSelectedAnnouncement:"Zaznaczone zakresy: {count}. Komórki: {cells}",addToSelectionOnAnnouncement:"Dodawanie do zaznaczenia. Shift+F8 lub Esc kończy.",addToSelectionOffAnnouncement:"Zakończono dodawanie do zaznaczenia",addingToSelection:"Dodawanie do zaznaczenia",cellsCopiedAnnouncement:"Skopiowane komórki: {count}",cellsPastedAnnouncement:"Wklejone komórki: {count}",cellsSkippedAnnouncement:"Wklejone komórki: {count}. Pominięte: {skipped}",copyLimitExceededAnnouncement:"Za dużo komórek do skopiowania: {count}. Limit: {max}",pasteLimitExceededAnnouncement:"Za dużo komórek do wklejenia: {count}. Limit: {max}",rowsNotLoadedAnnouncement:"Niektóre wiersze nie są jeszcze wczytane. Przewiń do nich i spróbuj ponownie.",cellRangeSummaryLabel:"Podsumowanie zaznaczenia",extendSelectionToCell:"Rozszerz zaznaczenie do tej komórki",addCellToSelection:"Dodaj komórkę do zaznaczenia",copySelectedCells:"Kopiuj zaznaczone komórki",paste:"Wklej",pasteFailedAnnouncement:"Nie udało się odczytać schowka. Wklej za pomocą klawiatury.",expandNode:"Rozwiń",collapseNode:"Zwiń",addChildRow:"Dodaj wiersz podrzędny",childRowsLoadingAnnouncement:"Ładowanie wierszy podrzędnych",childRowsLoadedAnnouncement:"Załadowane wiersze podrzędne: {count}",childRowsLoadErrorAnnouncement:"Nie udało się załadować wierszy podrzędnych",nodesExpandedAnnouncement:"Rozwinięte wiersze: {count}",fixColumn:"Przypnij kolumnę",autoSizeAllColumns:"Dopasuj szerokość wszystkich kolumn",openColumnChooser:"Wybierz kolumny",resetColumns:"Przywróć kolumny",columnChooserSearchLabel:"Szukaj kolumn",columnChooserSearchAnnouncement:"Kolumny: {count}",selectAllColumns:"Pokaż wszystkie kolumny",reorderColumnLabel:"Alt+Shift+strzałka w górę lub w dół przenosi kolumnę",columnFixedStartAnnouncement:"{column} przypięto na początku",columnFixedEndAnnouncement:"{column} przypięto na końcu",columnUnfixedAnnouncement:"{column} odpięto",allColumnsAutoSizedAnnouncement:"Dopasowano szerokość wszystkich kolumn",columnMoveRefusedAnnouncement:"{column} nie może przejść za {target}",columnsResetAnnouncement:"Przywrócono kolumny"},tr:{noData:"Veri yok",dragToGroup:"Gruplamak için bir başlığı buraya sürükleyin veya üzerinde Ctrl+G’ye basın",groupLabelSeparator:": ",sortAscending:"artan",sortDescending:"azalan",sortClearedAnnouncement:"{column} sıralaması kaldırıldı",sortedAnnouncement:"{column} sütununa göre sıralandı, {order}",trueText:"Doğru",falseText:"Yanlış",columnChooser:"Sütun seçici",hideColumn:"Sütunu gizle",showColumn:"Sütunu göster",fixStart:"Başa sabitle",fixEnd:"Sona sabitle",unfix:"Sabitlemeyi kaldır",autoSize:"İçeriğe sığdırmak için çift tıklayın veya Enter tuşuna basın",summarySum:"Toplam",summaryMin:"En küçük",summaryMax:"En büyük",summaryAvg:"Ortalama",summaryCount:"Sayı",summaryText:"{type}: {value}",summaryColumnText:"{column} {type}: {value}",groupInfoText:"({info})",ungroupColumn:"Gruplamayı kaldır",ungroupAll:"Tüm gruplamaları kaldır",expandAllGroups:"Tüm grupları genişlet",collapseAllGroups:"Tüm grupları daralt",groupPanelMenuLabel:"Grup seçenekleri",filterEquals:"Eşittir",filterNotEquals:"Eşit değildir",filterLessThan:"Küçüktür",filterLessThanOrEqual:"Küçük veya eşittir",filterGreaterThan:"Büyüktür",filterGreaterThanOrEqual:"Büyük veya eşittir",filterContains:"İçerir",filterNotContains:"İçermez",filterStartsWith:"İle başlar",filterEndsWith:"İle biter",filterBetween:"Arasında",filterAnyOf:"Şunlardan biri",filterNoneOf:"Şunların hiçbiri",filterIsBlank:"Boş",filterIsNotBlank:"Boş değil",filterReset:"Sıfırla",filterEditorLabel:"{column} filtrele",filterOperationLabel:"Filtre işlemi",headerFilterLabel:"{column} filtre seçenekleri",filterBetweenStart:"Başlangıç",filterBetweenEnd:"Bitiş",filterAll:"(Tümü)",filterBlanks:"(Boş)",filterClear:"Filtreyi temizle",searchPlaceholder:"Ara…",selectAll:"Tümünü seç",ok:"Tamam",cancel:"İptal",filteredAnnouncement:"Satır: {count}",selectRow:"Satırı seç",rowDetails:"Satır ayrıntıları",adaptiveColumnsAnnouncement:"Satır ayrıntılarındaki sütunlar: {columns}",noAdaptiveColumnsAnnouncement:"Tüm sütunlar tabloda",adaptiveColumnDescription:"Satır ayrıntılarında",adaptiveLabelSeparator:": ",fixedTopRowsLabel:"Üste sabitlenmiş satırlar",fixedBottomRowsLabel:"Alta sabitlenmiş satırlar",selectAllRows:"Tüm satırları seç",rowsSelectedAnnouncement:"Seçili satır: {count}",rowsCopiedAnnouncement:"Kopyalanan satır: {count}",cellCopiedAnnouncement:"Hücre kopyalandı",columnMovedAnnouncement:"{column} {count} içinde {position}. konuma taşındı",groupedAnnouncement:"{column} ile gruplandı",ungroupedAnnouncement:"{column} gruplaması kaldırıldı",columnHeaderMenuLabel:"{column} seçenekleri",groupColumn:"Bu sütuna göre grupla",moveLeft:"Sola taşı",moveRight:"Sağa taşı",autoSizeColumn:"Genişliği içeriğe sığdır",increaseColumnWidth:"Genişliği artır",decreaseColumnWidth:"Genişliği azalt",columnFiltered:"Filtrelendi",columnFixedStart:"Başa sabitlendi",columnFixedEnd:"Sona sabitlendi",columnSortPriority:"Sıralama {order}, öncelik {priority}",sortedWithPriorityAnnouncement:"{column} sütununa göre sıralandı, {order}, öncelik {priority}",groupLevelChangedAnnouncement:"{column} gruplama düzeyi {level}/{count} konumuna taşındı",groupingClearedAnnouncement:"Tüm sütunların gruplaması kaldırıldı",groupsExpandedAnnouncement:"Tüm gruplar genişletildi",groupsCollapsedAnnouncement:"Tüm gruplar daraltıldı",columnResizedAnnouncement:"{column} genişliği: {width} px",resizeHandleLabel:"{column} genişliğini değiştir",groupPanelLabel:"Gruplama",filterOperationButtonLabel:"{column} için filtre işlemi: {operation}",searchPanelLabel:"Tabloda ara",headerFilterSearchLabel:"Değerlerde ara",headerFilterTruncated:"{count} değerden {shown} tanesi gösteriliyor",headerFilterSearchAnnouncement:"Değerler: {count}",selectAllResults:"Tüm sonuçları seç ({count})",loading:"Yükleniyor…",loadError:"Veriler yüklenemedi.",retry:"Yeniden dene",pageInfo:"Sayfa {page} / {pageCount} ({count} öğe)",pageInfoUnknownCount:"Sayfa {page}",pageSizeLabel:"Sayfa başına satır",paginationLabel:"Sayfalandırma",firstPage:"İlk sayfa",previousPage:"Önceki sayfa",nextPage:"Sonraki sayfa",lastPage:"Son sayfa",editRow:"Düzenle",saveRow:"Kaydet",removeRow:"Sil",restoreRow:"Geri al",addRow:"Satır ekle",saveChanges:"Değişiklikleri kaydet",discardChanges:"Değişiklikleri at",commandColumn:"İşlemler",confirmRemoveTitle:"Satırı sil",confirmRemoveMessage:"Bu satırı silmek istediğinizden emin misiniz?",addedRowDescription:"Yeni satır, kaydedilmedi",removedRowDescription:"Silinmek üzere işaretlendi",modifiedCellDescription:"Değiştirildi, kaydedilmedi",changesSavedAnnouncement:"Değişiklikler kaydedildi",changesDiscardedAnnouncement:"Atılan değişiklikler: {count}",rowRemovedAnnouncement:"Satır silindi",rowMarkedForRemovalAnnouncement:"Satır silinmek üzere işaretlendi",rowRestoredAnnouncement:"Satır geri alındı",rowAddedAnnouncement:"Satır eklendi",saveError:"Değişiklikler kaydedilemedi.",invalidRowsMessage:"Kaydetmeden önce hataları düzeltin. Hatalı satırlar: {count}",saving:"Kaydediliyor…",validating:"Doğrulanıyor…",validationEscapeHint:"İptal etmek için Esc tuşuna basın.",validationRequired:"Bu alan zorunludur.",validationRange:"{min} ile {max} arasında bir değer girin.",validationRangeMin:"En az {min} olan bir değer girin.",validationRangeMax:"En fazla {max} olan bir değer girin.",validationStringLength:"{min} ile {max} arasında karakter girin.",validationStringLengthMin:"En az {min} karakter girin.",validationStringLengthMax:"En fazla {max} karakter girin.",validationPattern:"Değer beklenen biçimde değil.",validationEmail:"Geçerli bir e-posta adresi girin.",validationNumber:"Bir sayı girin.",validationDate:"Geçerli bir tarih girin.",validationInvalid:"Değer geçerli değil.",toolbarLabel:"Tablo araç çubuğu",toolbarMoreButtonLabel:"Diğer işlemler",exportButtonLabel:"Dışa aktar",exportCsv:"CSV olarak dışa aktar",exportXlsx:"Excel’e aktar",exportSelectedCsv:"Seçili satırları CSV olarak dışa aktar",exportSelectedXlsx:"Seçili satırları Excel’e aktar",exportPdf:"PDF’e aktar",exportSelectedPdf:"Seçili satırları PDF’e aktar",exportCancel:"Dışa aktarmayı iptal et",exportCanceledAnnouncement:"Dışa aktarma iptal edildi",exportProgress:"Dışa aktarılıyor… %{percent}",pdfPageNumber:"Sayfa {page} / {pageCount}",exportDefaultTitle:"Veriler",pdfTotalRow:"Toplam",exportingAnnouncement:"Dışa aktarılıyor…",exportCompleteAnnouncement:"{format} olarak dışa aktarıldı",exportErrorAnnouncement:"Dışa aktarma başarısız oldu",copyCell:"Kopyala",copySelectedRows:"Seçili satırları kopyala",rowMenuLabel:"Satır seçenekleri",groupRowMenuLabel:"{value} grubu seçenekleri",sortColumnAscending:"Artan sırala",sortColumnDescending:"Azalan sırala",clearColumnSorting:"Sıralamayı temizle",expandGroup:"Grubu genişlet",collapseGroup:"Grubu daralt",expandRow:"Ayrıntıları göster",collapseRow:"Ayrıntıları gizle",copyFailedAnnouncement:"Panoya kopyalanamadı.",cellRangeSelectedAnnouncement:"Seçili hücre: {cells}. Satır: {rows}, sütun: {columns}",cellRangesSelectedAnnouncement:"Seçili aralık: {count}. Hücre: {cells}",addToSelectionOnAnnouncement:"Seçime ekleniyor. Durdurmak için Shift+F8 veya Esc.",addToSelectionOffAnnouncement:"Seçime ekleme durduruldu",addingToSelection:"Seçime ekleniyor",cellsCopiedAnnouncement:"Kopyalanan hücre: {count}",cellsPastedAnnouncement:"Yapıştırılan hücre: {count}",cellsSkippedAnnouncement:"Yapıştırılan hücre: {count}. Atlanan: {skipped}",copyLimitExceededAnnouncement:"Kopyalanacak hücre çok fazla: {count}. Sınır: {max}",pasteLimitExceededAnnouncement:"Yapıştırılacak hücre çok fazla: {count}. Sınır: {max}",rowsNotLoadedAnnouncement:"Bazı satırlar henüz yüklenmedi. Onlara kaydırıp yeniden deneyin.",cellRangeSummaryLabel:"Seçim özeti",extendSelectionToCell:"Seçimi bu hücreye kadar genişlet",addCellToSelection:"Hücreyi seçime ekle",copySelectedCells:"Seçili hücreleri kopyala",paste:"Yapıştır",pasteFailedAnnouncement:"Pano okunamadı. Klavyeyle yapıştırın.",expandNode:"Genişlet",collapseNode:"Daralt",addChildRow:"Alt satır ekle",childRowsLoadingAnnouncement:"Alt satırlar yükleniyor",childRowsLoadedAnnouncement:"Yüklenen alt satırlar: {count}",childRowsLoadErrorAnnouncement:"Alt satırlar yüklenemedi",nodesExpandedAnnouncement:"Genişletilen satırlar: {count}",fixColumn:"Sütunu sabitle",autoSizeAllColumns:"Tüm sütunların genişliğini sığdır",openColumnChooser:"Sütunları seç",resetColumns:"Sütunları sıfırla",columnChooserSearchLabel:"Sütunlarda ara",columnChooserSearchAnnouncement:"Sütunlar: {count}",selectAllColumns:"Tüm sütunları göster",reorderColumnLabel:"Alt+Shift+Yukarı veya Aşağı ok sütunu taşır",columnFixedStartAnnouncement:"{column} başa sabitlendi",columnFixedEndAnnouncement:"{column} sona sabitlendi",columnUnfixedAnnouncement:"{column} sabitlemesi kaldırıldı",allColumnsAutoSizedAnnouncement:"Tüm sütunların genişliği sığdırıldı",columnMoveRefusedAnnouncement:"{column}, {target} sütununu geçemez",columnsResetAnnouncement:"Sütunlar sıfırlandı"},ja:{noData:"データがありません",dragToGroup:"列ヘッダーをここにドラッグするか、ヘッダーで Ctrl+G を押してグループ化",groupLabelSeparator:"：",sortAscending:"昇順",sortDescending:"降順",sortClearedAnnouncement:"{column} の並べ替えを解除しました",sortedAnnouncement:"{column} で並べ替えました（{order}）",trueText:"真",falseText:"偽",columnChooser:"列の選択",hideColumn:"列を非表示",showColumn:"列を表示",fixStart:"先頭に固定",fixEnd:"末尾に固定",unfix:"固定を解除",autoSize:"ダブルクリックまたは Enter で幅を自動調整",summarySum:"合計",summaryMin:"最小",summaryMax:"最大",summaryAvg:"平均",summaryCount:"件数",summaryText:"{type}: {value}",summaryColumnText:"{column}の{type}: {value}",groupInfoText:"（{info}）",ungroupColumn:"グループ解除",ungroupAll:"すべてのグループ解除",expandAllGroups:"すべてのグループを展開",collapseAllGroups:"すべてのグループを折りたたむ",groupPanelMenuLabel:"グループのオプション",filterEquals:"等しい",filterNotEquals:"等しくない",filterLessThan:"より小さい",filterLessThanOrEqual:"以下",filterGreaterThan:"より大きい",filterGreaterThanOrEqual:"以上",filterContains:"含む",filterNotContains:"含まない",filterStartsWith:"で始まる",filterEndsWith:"で終わる",filterBetween:"範囲内",filterAnyOf:"いずれかに一致",filterNoneOf:"いずれにも一致しない",filterIsBlank:"空白",filterIsNotBlank:"空白ではない",filterReset:"リセット",filterEditorLabel:"{column} をフィルター",filterOperationLabel:"フィルター演算子",headerFilterLabel:"{column} のフィルターオプション",filterBetweenStart:"開始",filterBetweenEnd:"終了",filterAll:"(すべて)",filterBlanks:"(空白)",filterClear:"フィルターをクリア",searchPlaceholder:"検索…",selectAll:"すべて選択",ok:"OK",cancel:"キャンセル",filteredAnnouncement:"行数: {count}",selectRow:"行を選択",rowDetails:"行の詳細",adaptiveColumnsAnnouncement:"行の詳細にある列: {columns}",noAdaptiveColumnsAnnouncement:"すべての列が表にあります",adaptiveColumnDescription:"行の詳細にあります",adaptiveLabelSeparator:"：",fixedTopRowsLabel:"上部に固定された行",fixedBottomRowsLabel:"下部に固定された行",selectAllRows:"すべての行を選択",rowsSelectedAnnouncement:"選択した行: {count}",rowsCopiedAnnouncement:"コピーした行: {count}",cellCopiedAnnouncement:"セルをコピーしました",columnMovedAnnouncement:"{column} を {count} 列中 {position} 番目に移動しました",groupedAnnouncement:"{column} でグループ化しました",ungroupedAnnouncement:"{column} のグループ化を解除しました",columnHeaderMenuLabel:"{column} のオプション",groupColumn:"この列でグループ化",moveLeft:"左へ移動",moveRight:"右へ移動",autoSizeColumn:"幅を内容に合わせる",increaseColumnWidth:"幅を広げる",decreaseColumnWidth:"幅を狭める",columnFiltered:"フィルター適用中",columnFixedStart:"先頭に固定済み",columnFixedEnd:"末尾に固定済み",columnSortPriority:"並べ替え: {order}、優先度 {priority}",sortedWithPriorityAnnouncement:"{column} で並べ替えました（{order}、優先度 {priority}）",groupLevelChangedAnnouncement:"{column} をグループ化レベル {count} 中 {level} に移動しました",groupingClearedAnnouncement:"すべての列のグループ化を解除しました",groupsExpandedAnnouncement:"すべてのグループを展開しました",groupsCollapsedAnnouncement:"すべてのグループを折りたたみました",columnResizedAnnouncement:"{column} の幅: {width} px",resizeHandleLabel:"{column} の幅を変更",groupPanelLabel:"グループ化",filterOperationButtonLabel:"{column} のフィルター演算: {operation}",searchPanelLabel:"グリッド内を検索",headerFilterSearchLabel:"値を検索",headerFilterTruncated:"{count} 件中 {shown} 件を表示",headerFilterSearchAnnouncement:"値: {count}",selectAllResults:"検索結果をすべて選択 ({count})",loading:"読み込み中…",loadError:"データを読み込めませんでした。",retry:"再試行",pageInfo:"{page} / {pageCount} ページ（{count} 件）",pageInfoUnknownCount:"{page} ページ",pageSizeLabel:"1 ページの行数",paginationLabel:"ページ送り",firstPage:"最初のページ",previousPage:"前のページ",nextPage:"次のページ",lastPage:"最後のページ",editRow:"編集",saveRow:"保存",removeRow:"削除",restoreRow:"元に戻す",addRow:"行を追加",saveChanges:"変更を保存",discardChanges:"変更を破棄",commandColumn:"操作",confirmRemoveTitle:"行の削除",confirmRemoveMessage:"この行を削除してもよろしいですか？",addedRowDescription:"新しい行（未保存）",removedRowDescription:"削除予定",modifiedCellDescription:"変更あり（未保存）",changesSavedAnnouncement:"変更を保存しました",changesDiscardedAnnouncement:"変更を破棄しました: {count}",rowRemovedAnnouncement:"行を削除しました",rowMarkedForRemovalAnnouncement:"行を削除予定にしました",rowRestoredAnnouncement:"行を元に戻しました",rowAddedAnnouncement:"行を追加しました",saveError:"変更を保存できませんでした。",invalidRowsMessage:"保存する前にエラーを修正してください。エラーのある行: {count}",saving:"保存中…",validating:"検証中…",validationEscapeHint:"キャンセルするには Esc キーを押してください。",validationRequired:"この項目は必須です。",validationRange:"{min} から {max} の値を入力してください。",validationRangeMin:"{min} 以上の値を入力してください。",validationRangeMax:"{max} 以下の値を入力してください。",validationStringLength:"{min} から {max} 文字で入力してください。",validationStringLengthMin:"{min} 文字以上で入力してください。",validationStringLengthMax:"{max} 文字以内で入力してください。",validationPattern:"値が想定された形式と一致しません。",validationEmail:"有効なメールアドレスを入力してください。",validationNumber:"数値を入力してください。",validationDate:"有効な日付を入力してください。",validationInvalid:"値が無効です。",toolbarLabel:"グリッドのツールバー",toolbarMoreButtonLabel:"その他の操作",exportButtonLabel:"エクスポート",exportCsv:"CSV にエクスポート",exportXlsx:"Excel にエクスポート",exportSelectedCsv:"選択した行を CSV にエクスポート",exportSelectedXlsx:"選択した行を Excel にエクスポート",exportPdf:"PDF にエクスポート",exportSelectedPdf:"選択した行を PDF にエクスポート",exportCancel:"エクスポートをキャンセル",exportCanceledAnnouncement:"エクスポートをキャンセルしました",exportProgress:"エクスポート中… {percent}%",pdfPageNumber:"{page} / {pageCount} ページ",exportDefaultTitle:"データ",pdfTotalRow:"合計",exportingAnnouncement:"エクスポートしています…",exportCompleteAnnouncement:"{format} にエクスポートしました",exportErrorAnnouncement:"エクスポートに失敗しました",copyCell:"コピー",copySelectedRows:"選択した行をコピー",rowMenuLabel:"行のオプション",groupRowMenuLabel:"グループ {value} のオプション",sortColumnAscending:"昇順で並べ替え",sortColumnDescending:"降順で並べ替え",clearColumnSorting:"並べ替えを解除",expandGroup:"グループを展開",collapseGroup:"グループを折りたたむ",expandRow:"詳細を表示",collapseRow:"詳細を非表示",copyFailedAnnouncement:"クリップボードにコピーできませんでした。",cellRangeSelectedAnnouncement:"選択したセル: {cells}。行: {rows}、列: {columns}",cellRangesSelectedAnnouncement:"選択した範囲: {count}。セル: {cells}",addToSelectionOnAnnouncement:"選択に追加中。Shift+F8 または Esc で終了。",addToSelectionOffAnnouncement:"選択への追加を終了しました",addingToSelection:"選択に追加中",cellsCopiedAnnouncement:"コピーしたセル: {count}",cellsPastedAnnouncement:"貼り付けたセル: {count}",cellsSkippedAnnouncement:"貼り付けたセル: {count}。スキップ: {skipped}",copyLimitExceededAnnouncement:"コピーするセルが多すぎます: {count}。上限: {max}",pasteLimitExceededAnnouncement:"貼り付けるセルが多すぎます: {count}。上限: {max}",rowsNotLoadedAnnouncement:"まだ読み込まれていない行があります。その行までスクロールしてもう一度お試しください。",cellRangeSummaryLabel:"選択の集計",extendSelectionToCell:"このセルまで選択を広げる",addCellToSelection:"セルを選択に追加",copySelectedCells:"選択したセルをコピー",paste:"貼り付け",pasteFailedAnnouncement:"クリップボードを読み取れませんでした。キーボードで貼り付けてください。",expandNode:"展開",collapseNode:"折りたたむ",addChildRow:"子行を追加",childRowsLoadingAnnouncement:"子行を読み込んでいます",childRowsLoadedAnnouncement:"読み込んだ子行: {count}",childRowsLoadErrorAnnouncement:"子行を読み込めませんでした",nodesExpandedAnnouncement:"展開した行: {count}",fixColumn:"列を固定",autoSizeAllColumns:"すべての列の幅を内容に合わせる",openColumnChooser:"列を選択",resetColumns:"列をリセット",columnChooserSearchLabel:"列を検索",columnChooserSearchAnnouncement:"列: {count}",selectAllColumns:"すべての列を表示",reorderColumnLabel:"Alt+Shift+上下矢印キーで列を移動",columnFixedStartAnnouncement:"{column} を先頭に固定しました",columnFixedEndAnnouncement:"{column} を末尾に固定しました",columnUnfixedAnnouncement:"{column} の固定を解除しました",allColumnsAutoSizedAnnouncement:"すべての列の幅を調整しました",columnMoveRefusedAnnouncement:"{column} は {target} を越えて移動できません",columnsResetAnnouncement:"列をリセットしました"},ko:{noData:"데이터 없음",dragToGroup:"머리글을 여기로 끌거나 머리글에서 Ctrl+G를 눌러 그룹화",groupLabelSeparator:": ",sortAscending:"오름차순",sortDescending:"내림차순",sortClearedAnnouncement:"{column} 정렬을 해제했습니다",sortedAnnouncement:"{column} 기준 {order} 정렬됨",trueText:"참",falseText:"거짓",columnChooser:"열 선택기",hideColumn:"열 숨기기",showColumn:"열 표시",fixStart:"시작 부분에 고정",fixEnd:"끝 부분에 고정",unfix:"고정 해제",autoSize:"두 번 클릭하거나 Enter를 눌러 너비 자동 맞춤",summarySum:"합계",summaryMin:"최소",summaryMax:"최대",summaryAvg:"평균",summaryCount:"개수",summaryText:"{type}: {value}",summaryColumnText:"{column} {type}: {value}",groupInfoText:"({info})",ungroupColumn:"그룹 해제",ungroupAll:"모든 그룹 해제",expandAllGroups:"모든 그룹 펼치기",collapseAllGroups:"모든 그룹 접기",groupPanelMenuLabel:"그룹 옵션",filterEquals:"같음",filterNotEquals:"같지 않음",filterLessThan:"보다 작음",filterLessThanOrEqual:"작거나 같음",filterGreaterThan:"보다 큼",filterGreaterThanOrEqual:"크거나 같음",filterContains:"포함",filterNotContains:"포함하지 않음",filterStartsWith:"시작 문자",filterEndsWith:"끝 문자",filterBetween:"범위",filterAnyOf:"다음 중 하나",filterNoneOf:"다음 중 어느 것도 아님",filterIsBlank:"비어 있음",filterIsNotBlank:"비어 있지 않음",filterReset:"초기화",filterEditorLabel:"{column} 필터",filterOperationLabel:"필터 연산",headerFilterLabel:"{column} 필터 옵션",filterBetweenStart:"시작",filterBetweenEnd:"끝",filterAll:"(전체)",filterBlanks:"(빈 값)",filterClear:"필터 지우기",searchPlaceholder:"검색…",selectAll:"모두 선택",ok:"확인",cancel:"취소",filteredAnnouncement:"행: {count}",selectRow:"행 선택",rowDetails:"행 세부 정보",adaptiveColumnsAnnouncement:"행 세부 정보에 있는 열: {columns}",noAdaptiveColumnsAnnouncement:"모든 열이 표에 있음",adaptiveColumnDescription:"행 세부 정보에 있음",adaptiveLabelSeparator:": ",fixedTopRowsLabel:"위쪽에 고정된 행",fixedBottomRowsLabel:"아래쪽에 고정된 행",selectAllRows:"모든 행 선택",rowsSelectedAnnouncement:"선택한 행: {count}",rowsCopiedAnnouncement:"복사한 행: {count}",cellCopiedAnnouncement:"셀을 복사했습니다",columnMovedAnnouncement:"{column}을(를) {count}개 중 {position}번째로 이동했습니다",groupedAnnouncement:"{column}(으)로 그룹화했습니다",ungroupedAnnouncement:"{column} 그룹화를 해제했습니다",columnHeaderMenuLabel:"{column} 옵션",groupColumn:"이 열로 그룹화",moveLeft:"왼쪽으로 이동",moveRight:"오른쪽으로 이동",autoSizeColumn:"내용에 맞게 너비 조정",increaseColumnWidth:"너비 늘리기",decreaseColumnWidth:"너비 줄이기",columnFiltered:"필터 적용됨",columnFixedStart:"시작 부분에 고정됨",columnFixedEnd:"끝 부분에 고정됨",columnSortPriority:"정렬: {order}, 우선순위 {priority}",sortedWithPriorityAnnouncement:"{column} 기준 {order} 정렬됨, 우선순위 {priority}",groupLevelChangedAnnouncement:"{column}을(를) 그룹화 수준 {count}개 중 {level}(으)로 이동했습니다",groupingClearedAnnouncement:"모든 열의 그룹화를 해제했습니다",groupsExpandedAnnouncement:"모든 그룹을 펼쳤습니다",groupsCollapsedAnnouncement:"모든 그룹을 접었습니다",columnResizedAnnouncement:"{column} 너비: {width} px",resizeHandleLabel:"{column} 너비 조정",groupPanelLabel:"그룹화",filterOperationButtonLabel:"{column} 필터 연산: {operation}",searchPanelLabel:"그리드에서 검색",headerFilterSearchLabel:"값 검색",headerFilterTruncated:"{count}개 중 {shown}개 표시",headerFilterSearchAnnouncement:"값: {count}",selectAllResults:"검색 결과 모두 선택 ({count})",loading:"로드 중…",loadError:"데이터를 불러오지 못했습니다.",retry:"다시 시도",pageInfo:"{page}/{pageCount} 페이지({count}개 항목)",pageInfoUnknownCount:"{page} 페이지",pageSizeLabel:"페이지당 행 수",paginationLabel:"페이지 탐색",firstPage:"첫 페이지",previousPage:"이전 페이지",nextPage:"다음 페이지",lastPage:"마지막 페이지",editRow:"편집",saveRow:"저장",removeRow:"삭제",restoreRow:"복원",addRow:"행 추가",saveChanges:"변경 내용 저장",discardChanges:"변경 내용 취소",commandColumn:"작업",confirmRemoveTitle:"행 삭제",confirmRemoveMessage:"이 행을 삭제하시겠습니까?",addedRowDescription:"새 행, 저장되지 않음",removedRowDescription:"삭제 표시됨",modifiedCellDescription:"변경됨, 저장되지 않음",changesSavedAnnouncement:"변경 내용을 저장했습니다",changesDiscardedAnnouncement:"변경 내용을 취소했습니다: {count}",rowRemovedAnnouncement:"행을 삭제했습니다",rowMarkedForRemovalAnnouncement:"행을 삭제 표시했습니다",rowRestoredAnnouncement:"행을 복원했습니다",rowAddedAnnouncement:"행을 추가했습니다",saveError:"변경 내용을 저장할 수 없습니다.",invalidRowsMessage:"저장하기 전에 오류를 수정하세요. 오류가 있는 행: {count}",saving:"저장 중…",validating:"검증 중…",validationEscapeHint:"취소하려면 Esc 키를 누르세요.",validationRequired:"필수 입력 항목입니다.",validationRange:"{min}에서 {max} 사이의 값을 입력하세요.",validationRangeMin:"{min} 이상의 값을 입력하세요.",validationRangeMax:"{max} 이하의 값을 입력하세요.",validationStringLength:"{min}~{max}자를 입력하세요.",validationStringLengthMin:"{min}자 이상 입력하세요.",validationStringLengthMax:"{max}자 이하로 입력하세요.",validationPattern:"값이 예상 형식과 일치하지 않습니다.",validationEmail:"올바른 이메일 주소를 입력하세요.",validationNumber:"숫자를 입력하세요.",validationDate:"올바른 날짜를 입력하세요.",validationInvalid:"값이 올바르지 않습니다.",toolbarLabel:"그리드 도구 모음",toolbarMoreButtonLabel:"추가 작업",exportButtonLabel:"내보내기",exportCsv:"CSV로 내보내기",exportXlsx:"Excel로 내보내기",exportSelectedCsv:"선택한 행을 CSV로 내보내기",exportSelectedXlsx:"선택한 행을 Excel로 내보내기",exportPdf:"PDF로 내보내기",exportSelectedPdf:"선택한 행을 PDF로 내보내기",exportCancel:"내보내기 취소",exportCanceledAnnouncement:"내보내기를 취소했습니다",exportProgress:"내보내는 중… {percent}%",pdfPageNumber:"{pageCount}페이지 중 {page}페이지",exportDefaultTitle:"데이터",pdfTotalRow:"합계",exportingAnnouncement:"내보내는 중…",exportCompleteAnnouncement:"{format}(으)로 내보냈습니다",exportErrorAnnouncement:"내보내지 못했습니다",copyCell:"복사",copySelectedRows:"선택한 행 복사",rowMenuLabel:"행 옵션",groupRowMenuLabel:"{value} 그룹 옵션",sortColumnAscending:"오름차순 정렬",sortColumnDescending:"내림차순 정렬",clearColumnSorting:"정렬 해제",expandGroup:"그룹 펼치기",collapseGroup:"그룹 접기",expandRow:"세부 정보 표시",collapseRow:"세부 정보 숨기기",copyFailedAnnouncement:"클립보드에 복사할 수 없습니다.",cellRangeSelectedAnnouncement:"선택한 셀: {cells}. 행: {rows}, 열: {columns}",cellRangesSelectedAnnouncement:"선택한 범위: {count}. 셀: {cells}",addToSelectionOnAnnouncement:"선택에 추가하는 중. Shift+F8 또는 Esc로 종료.",addToSelectionOffAnnouncement:"선택에 추가를 종료했습니다",addingToSelection:"선택에 추가하는 중",cellsCopiedAnnouncement:"복사한 셀: {count}",cellsPastedAnnouncement:"붙여넣은 셀: {count}",cellsSkippedAnnouncement:"붙여넣은 셀: {count}. 건너뜀: {skipped}",copyLimitExceededAnnouncement:"복사할 셀이 너무 많습니다: {count}. 한도: {max}",pasteLimitExceededAnnouncement:"붙여넣을 셀이 너무 많습니다: {count}. 한도: {max}",rowsNotLoadedAnnouncement:"아직 불러오지 않은 행이 있습니다. 해당 행으로 스크롤한 뒤 다시 시도하세요.",cellRangeSummaryLabel:"선택 요약",extendSelectionToCell:"이 셀까지 선택 확장",addCellToSelection:"셀을 선택에 추가",copySelectedCells:"선택한 셀 복사",paste:"붙여넣기",pasteFailedAnnouncement:"클립보드를 읽을 수 없습니다. 키보드로 붙여넣으세요.",expandNode:"펼치기",collapseNode:"접기",addChildRow:"하위 행 추가",childRowsLoadingAnnouncement:"하위 행을 불러오는 중",childRowsLoadedAnnouncement:"불러온 하위 행: {count}",childRowsLoadErrorAnnouncement:"하위 행을 불러올 수 없습니다",nodesExpandedAnnouncement:"펼친 행: {count}",fixColumn:"열 고정",autoSizeAllColumns:"모든 열 너비를 내용에 맞게 조정",openColumnChooser:"열 선택",resetColumns:"열 초기화",columnChooserSearchLabel:"열 검색",columnChooserSearchAnnouncement:"열: {count}",selectAllColumns:"모든 열 표시",reorderColumnLabel:"Alt+Shift+위쪽 또는 아래쪽 화살표로 열 이동",columnFixedStartAnnouncement:"{column}을(를) 시작 부분에 고정했습니다",columnFixedEndAnnouncement:"{column}을(를) 끝 부분에 고정했습니다",columnUnfixedAnnouncement:"{column} 고정을 해제했습니다",allColumnsAutoSizedAnnouncement:"모든 열 너비를 조정했습니다",columnMoveRefusedAnnouncement:"{column}은(는) {target}을(를) 지나 이동할 수 없습니다",columnsResetAnnouncement:"열을 초기화했습니다"},zh:{noData:"无数据",dragToGroup:"将列标题拖到此处，或在列标题上按 Ctrl+G 分组",groupLabelSeparator:"：",sortAscending:"升序",sortDescending:"降序",sortClearedAnnouncement:"已取消按 {column} 排序",sortedAnnouncement:"已按 {column} {order}排序",trueText:"是",falseText:"否",columnChooser:"列选择器",hideColumn:"隐藏列",showColumn:"显示列",fixStart:"固定到开头",fixEnd:"固定到末尾",unfix:"取消固定",autoSize:"双击或按 Enter 自动调整宽度",summarySum:"合计",summaryMin:"最小值",summaryMax:"最大值",summaryAvg:"平均值",summaryCount:"计数",summaryText:"{type}：{value}",summaryColumnText:"{column}{type}：{value}",groupInfoText:"（{info}）",ungroupColumn:"取消分组",ungroupAll:"全部取消分组",expandAllGroups:"展开所有分组",collapseAllGroups:"折叠所有分组",groupPanelMenuLabel:"分组选项",filterEquals:"等于",filterNotEquals:"不等于",filterLessThan:"小于",filterLessThanOrEqual:"小于或等于",filterGreaterThan:"大于",filterGreaterThanOrEqual:"大于或等于",filterContains:"包含",filterNotContains:"不包含",filterStartsWith:"开头是",filterEndsWith:"结尾是",filterBetween:"介于",filterAnyOf:"是其中之一",filterNoneOf:"不是其中任何一个",filterIsBlank:"为空",filterIsNotBlank:"不为空",filterReset:"重置",filterEditorLabel:"筛选 {column}",filterOperationLabel:"筛选运算",headerFilterLabel:"{column} 的筛选选项",filterBetweenStart:"从",filterBetweenEnd:"到",filterAll:"(全部)",filterBlanks:"(空白)",filterClear:"清除筛选",searchPlaceholder:"搜索…",selectAll:"全选",ok:"确定",cancel:"取消",filteredAnnouncement:"行数：{count}",selectRow:"选择行",rowDetails:"行详细信息",adaptiveColumnsAnnouncement:"行详细信息中的列：{columns}",noAdaptiveColumnsAnnouncement:"所有列都在表格中",adaptiveColumnDescription:"在行详细信息中",adaptiveLabelSeparator:"：",fixedTopRowsLabel:"固定在顶部的行",fixedBottomRowsLabel:"固定在底部的行",selectAllRows:"选择所有行",rowsSelectedAnnouncement:"已选择行数：{count}",rowsCopiedAnnouncement:"已复制行数：{count}",cellCopiedAnnouncement:"已复制单元格",columnMovedAnnouncement:"已将 {column} 移到第 {position} 位（共 {count} 位）",groupedAnnouncement:"已按 {column} 分组",ungroupedAnnouncement:"已取消按 {column} 分组",columnHeaderMenuLabel:"{column} 选项",groupColumn:"按此列分组",moveLeft:"左移",moveRight:"右移",autoSizeColumn:"自动调整列宽",increaseColumnWidth:"增加宽度",decreaseColumnWidth:"减小宽度",columnFiltered:"已筛选",columnFixedStart:"已固定到开头",columnFixedEnd:"已固定到末尾",columnSortPriority:"排序：{order}，优先级 {priority}",sortedWithPriorityAnnouncement:"已按 {column} {order}排序，优先级 {priority}",groupLevelChangedAnnouncement:"已将 {column} 移到分组级别 {level}（共 {count} 级）",groupingClearedAnnouncement:"已取消所有列的分组",groupsExpandedAnnouncement:"已展开所有分组",groupsCollapsedAnnouncement:"已折叠所有分组",columnResizedAnnouncement:"{column} 宽度：{width} px",resizeHandleLabel:"调整 {column} 的宽度",groupPanelLabel:"分组",filterOperationButtonLabel:"{column} 的筛选运算：{operation}",searchPanelLabel:"在表格中搜索",headerFilterSearchLabel:"搜索值",headerFilterTruncated:"显示 {count} 项中的 {shown} 项",headerFilterSearchAnnouncement:"值：{count}",selectAllResults:"全选搜索结果（{count}）",loading:"正在加载…",loadError:"无法加载数据。",retry:"重试",pageInfo:"第 {page} 页，共 {pageCount} 页（{count} 项）",pageInfoUnknownCount:"第 {page} 页",pageSizeLabel:"每页行数",paginationLabel:"分页",firstPage:"第一页",previousPage:"上一页",nextPage:"下一页",lastPage:"最后一页",editRow:"编辑",saveRow:"保存",removeRow:"删除",restoreRow:"恢复",addRow:"添加行",saveChanges:"保存更改",discardChanges:"放弃更改",commandColumn:"操作",confirmRemoveTitle:"删除行",confirmRemoveMessage:"确定要删除此行吗？",addedRowDescription:"新行，未保存",removedRowDescription:"已标记为删除",modifiedCellDescription:"已更改，未保存",changesSavedAnnouncement:"更改已保存",changesDiscardedAnnouncement:"已放弃更改：{count}",rowRemovedAnnouncement:"行已删除",rowMarkedForRemovalAnnouncement:"行已标记为删除",rowRestoredAnnouncement:"行已恢复",rowAddedAnnouncement:"行已添加",saveError:"无法保存更改。",invalidRowsMessage:"保存前请更正错误。有错误的行：{count}",saving:"正在保存…",validating:"正在验证…",validationEscapeHint:"按 Esc 键取消。",validationRequired:"此字段为必填项。",validationRange:"请输入介于 {min} 和 {max} 之间的值。",validationRangeMin:"请输入不小于 {min} 的值。",validationRangeMax:"请输入不大于 {max} 的值。",validationStringLength:"请输入 {min} 到 {max} 个字符。",validationStringLengthMin:"请至少输入 {min} 个字符。",validationStringLengthMax:"最多输入 {max} 个字符。",validationPattern:"值不符合预期格式。",validationEmail:"请输入有效的电子邮件地址。",validationNumber:"请输入数字。",validationDate:"请输入有效日期。",validationInvalid:"值无效。",toolbarLabel:"表格工具栏",toolbarMoreButtonLabel:"更多操作",exportButtonLabel:"导出",exportCsv:"导出为 CSV",exportXlsx:"导出到 Excel",exportSelectedCsv:"将所选行导出为 CSV",exportSelectedXlsx:"将所选行导出到 Excel",exportPdf:"导出到 PDF",exportSelectedPdf:"将所选行导出到 PDF",exportCancel:"取消导出",exportCanceledAnnouncement:"已取消导出",exportProgress:"正在导出… {percent}%",pdfPageNumber:"第 {page} 页，共 {pageCount} 页",exportDefaultTitle:"数据",pdfTotalRow:"合计",exportingAnnouncement:"正在导出…",exportCompleteAnnouncement:"已导出为 {format}",exportErrorAnnouncement:"导出失败",copyCell:"复制",copySelectedRows:"复制所选行",rowMenuLabel:"行选项",groupRowMenuLabel:"分组 {value} 的选项",sortColumnAscending:"升序排序",sortColumnDescending:"降序排序",clearColumnSorting:"清除排序",expandGroup:"展开分组",collapseGroup:"折叠分组",expandRow:"显示详细信息",collapseRow:"隐藏详细信息",copyFailedAnnouncement:"无法复制到剪贴板。",cellRangeSelectedAnnouncement:"已选单元格：{cells}。行：{rows}，列：{columns}",cellRangesSelectedAnnouncement:"已选区域：{count}。单元格：{cells}",addToSelectionOnAnnouncement:"正在添加到所选内容。按 Shift+F8 或 Esc 停止。",addToSelectionOffAnnouncement:"已停止添加到所选内容",addingToSelection:"正在添加到所选内容",cellsCopiedAnnouncement:"已复制单元格：{count}",cellsPastedAnnouncement:"已粘贴单元格：{count}",cellsSkippedAnnouncement:"已粘贴单元格：{count}。已跳过：{skipped}",copyLimitExceededAnnouncement:"要复制的单元格过多：{count}。上限：{max}",pasteLimitExceededAnnouncement:"要粘贴的单元格过多：{count}。上限：{max}",rowsNotLoadedAnnouncement:"部分行尚未加载。请滚动到这些行后重试。",cellRangeSummaryLabel:"所选内容摘要",extendSelectionToCell:"将所选内容扩展到此单元格",addCellToSelection:"将单元格添加到所选内容",copySelectedCells:"复制所选单元格",paste:"粘贴",pasteFailedAnnouncement:"无法读取剪贴板。请使用键盘粘贴。",expandNode:"展开",collapseNode:"折叠",addChildRow:"添加子行",childRowsLoadingAnnouncement:"正在加载子行",childRowsLoadedAnnouncement:"已加载子行：{count}",childRowsLoadErrorAnnouncement:"无法加载子行",nodesExpandedAnnouncement:"已展开的行：{count}",fixColumn:"固定列",autoSizeAllColumns:"自动调整所有列宽",openColumnChooser:"选择列",resetColumns:"重置列",columnChooserSearchLabel:"搜索列",columnChooserSearchAnnouncement:"列：{count}",selectAllColumns:"显示所有列",reorderColumnLabel:"Alt+Shift+上下方向键移动列",columnFixedStartAnnouncement:"已将 {column} 固定到开头",columnFixedEndAnnouncement:"已将 {column} 固定到末尾",columnUnfixedAnnouncement:"已取消固定 {column}",allColumnsAutoSizedAnnouncement:"已自动调整所有列宽",columnMoveRefusedAnnouncement:"{column} 无法移过 {target}",columnsResetAnnouncement:"已重置列"},ar:{noData:"لا توجد بيانات",dragToGroup:"اسحب عنوانًا إلى هنا أو اضغط Ctrl+G عليه للتجميع",groupLabelSeparator:": ",sortAscending:"تصاعدي",sortDescending:"تنازلي",sortClearedAnnouncement:"تمت إزالة الفرز حسب {column}",sortedAnnouncement:"تم الفرز حسب {column}، {order}",trueText:"صحيح",falseText:"خطأ",columnChooser:"منتقي الأعمدة",hideColumn:"إخفاء العمود",showColumn:"إظهار العمود",fixStart:"تثبيت في البداية",fixEnd:"تثبيت في النهاية",unfix:"إلغاء التثبيت",autoSize:"انقر نقرًا مزدوجًا أو اضغط Enter لملاءمة العرض",summarySum:"المجموع",summaryMin:"الحد الأدنى",summaryMax:"الحد الأقصى",summaryAvg:"المتوسط",summaryCount:"العدد",summaryText:"{type}: {value}",summaryColumnText:"{type} {column}: {value}",groupInfoText:"({info})",ungroupColumn:"إلغاء التجميع",ungroupAll:"إلغاء كل التجميعات",expandAllGroups:"توسيع كل المجموعات",collapseAllGroups:"طي كل المجموعات",groupPanelMenuLabel:"خيارات التجميع",filterEquals:"يساوي",filterNotEquals:"لا يساوي",filterLessThan:"أصغر من",filterLessThanOrEqual:"أصغر من أو يساوي",filterGreaterThan:"أكبر من",filterGreaterThanOrEqual:"أكبر من أو يساوي",filterContains:"يحتوي على",filterNotContains:"لا يحتوي على",filterStartsWith:"يبدأ بـ",filterEndsWith:"ينتهي بـ",filterBetween:"بين",filterAnyOf:"أحد القيم",filterNoneOf:"ليس أيًا من القيم",filterIsBlank:"فارغ",filterIsNotBlank:"غير فارغ",filterReset:"إعادة تعيين",filterEditorLabel:"تصفية {column}",filterOperationLabel:"عملية التصفية",headerFilterLabel:"خيارات التصفية لـ {column}",filterBetweenStart:"من",filterBetweenEnd:"إلى",filterAll:"(الكل)",filterBlanks:"(فارغ)",filterClear:"مسح عامل التصفية",searchPlaceholder:"بحث…",selectAll:"تحديد الكل",ok:"موافق",cancel:"إلغاء",filteredAnnouncement:"الصفوف: {count}",selectRow:"تحديد الصف",rowDetails:"تفاصيل الصف",adaptiveColumnsAnnouncement:"الأعمدة في تفاصيل الصف: {columns}",noAdaptiveColumnsAnnouncement:"كل الأعمدة في الجدول",adaptiveColumnDescription:"في تفاصيل الصف",adaptiveLabelSeparator:": ",fixedTopRowsLabel:"الصفوف المثبتة في الأعلى",fixedBottomRowsLabel:"الصفوف المثبتة في الأسفل",selectAllRows:"تحديد كل الصفوف",rowsSelectedAnnouncement:"الصفوف المحددة: {count}",rowsCopiedAnnouncement:"الصفوف المنسوخة: {count}",cellCopiedAnnouncement:"تم نسخ الخلية",columnMovedAnnouncement:"تم نقل {column} إلى الموضع {position} من {count}",groupedAnnouncement:"تم التجميع حسب {column}",ungroupedAnnouncement:"تم إلغاء التجميع حسب {column}",columnHeaderMenuLabel:"خيارات {column}",groupColumn:"التجميع حسب هذا العمود",moveLeft:"نقل لليسار",moveRight:"نقل لليمين",autoSizeColumn:"ملاءمة العرض مع المحتوى",increaseColumnWidth:"زيادة العرض",decreaseColumnWidth:"تقليل العرض",columnFiltered:"مُصفّى",columnFixedStart:"مثبّت في البداية",columnFixedEnd:"مثبّت في النهاية",columnSortPriority:"الفرز {order}، الأولوية {priority}",sortedWithPriorityAnnouncement:"تم الفرز حسب {column}، {order}، الأولوية {priority}",groupLevelChangedAnnouncement:"تم نقل {column} إلى مستوى التجميع {level} من {count}",groupingClearedAnnouncement:"تم إلغاء تجميع كل الأعمدة",groupsExpandedAnnouncement:"تم توسيع كل المجموعات",groupsCollapsedAnnouncement:"تم طي كل المجموعات",columnResizedAnnouncement:"عرض {column}: {width} px",resizeHandleLabel:"تغيير عرض {column}",groupPanelLabel:"التجميع",filterOperationButtonLabel:"عملية التصفية لـ {column}: {operation}",searchPanelLabel:"البحث في الجدول",headerFilterSearchLabel:"البحث في القيم",headerFilterTruncated:"عرض {shown} من {count}",headerFilterSearchAnnouncement:"القيم: {count}",selectAllResults:"تحديد كل النتائج ({count})",loading:"جارٍ التحميل…",loadError:"تعذّر تحميل البيانات.",retry:"إعادة المحاولة",pageInfo:"الصفحة {page} من {pageCount} ({count} عنصر)",pageInfoUnknownCount:"الصفحة {page}",pageSizeLabel:"صفوف في الصفحة",paginationLabel:"ترقيم الصفحات",firstPage:"الصفحة الأولى",previousPage:"الصفحة السابقة",nextPage:"الصفحة التالية",lastPage:"الصفحة الأخيرة",editRow:"تعديل",saveRow:"حفظ",removeRow:"حذف",restoreRow:"استعادة",addRow:"إضافة صف",saveChanges:"حفظ التغييرات",discardChanges:"تجاهل التغييرات",commandColumn:"إجراءات",confirmRemoveTitle:"حذف الصف",confirmRemoveMessage:"هل تريد بالتأكيد حذف هذا الصف؟",addedRowDescription:"صف جديد، غير محفوظ",removedRowDescription:"محدد للحذف",modifiedCellDescription:"تم التغيير، غير محفوظ",changesSavedAnnouncement:"تم حفظ التغييرات",changesDiscardedAnnouncement:"تم تجاهل التغييرات: {count}",rowRemovedAnnouncement:"تم حذف الصف",rowMarkedForRemovalAnnouncement:"تم تحديد الصف للحذف",rowRestoredAnnouncement:"تمت استعادة الصف",rowAddedAnnouncement:"تمت إضافة صف",saveError:"تعذّر حفظ التغييرات.",invalidRowsMessage:"صحّح الأخطاء قبل الحفظ. الصفوف التي بها أخطاء: {count}",saving:"جارٍ الحفظ…",validating:"جارٍ التحقق…",validationEscapeHint:"اضغط Esc للإلغاء.",validationRequired:"هذا الحقل مطلوب.",validationRange:"أدخل قيمة بين {min} و{max}.",validationRangeMin:"أدخل قيمة لا تقل عن {min}.",validationRangeMax:"أدخل قيمة لا تزيد عن {max}.",validationStringLength:"أدخل من {min} إلى {max} حرفًا.",validationStringLengthMin:"أدخل {min} أحرف على الأقل.",validationStringLengthMax:"أدخل {max} حرفًا على الأكثر.",validationPattern:"القيمة لا تطابق التنسيق المتوقع.",validationEmail:"أدخل عنوان بريد إلكتروني صالحًا.",validationNumber:"أدخل رقمًا.",validationDate:"أدخل تاريخًا صالحًا.",validationInvalid:"القيمة غير صالحة.",toolbarLabel:"شريط أدوات الجدول",toolbarMoreButtonLabel:"إجراءات أخرى",exportButtonLabel:"تصدير",exportCsv:"تصدير إلى CSV",exportXlsx:"تصدير إلى Excel",exportSelectedCsv:"تصدير الصفوف المحددة إلى CSV",exportSelectedXlsx:"تصدير الصفوف المحددة إلى Excel",exportPdf:"تصدير إلى PDF",exportSelectedPdf:"تصدير الصفوف المحددة إلى PDF",exportCancel:"إلغاء التصدير",exportCanceledAnnouncement:"تم إلغاء التصدير",exportProgress:"جارٍ التصدير… ‎{percent}%",pdfPageNumber:"الصفحة {page} من {pageCount}",exportDefaultTitle:"البيانات",pdfTotalRow:"الإجمالي",exportingAnnouncement:"جارٍ التصدير…",exportCompleteAnnouncement:"تم التصدير إلى {format}",exportErrorAnnouncement:"فشل التصدير",copyCell:"نسخ",copySelectedRows:"نسخ الصفوف المحددة",rowMenuLabel:"خيارات الصف",groupRowMenuLabel:"خيارات المجموعة {value}",sortColumnAscending:"فرز تصاعدي",sortColumnDescending:"فرز تنازلي",clearColumnSorting:"مسح الفرز",expandGroup:"توسيع المجموعة",collapseGroup:"طي المجموعة",expandRow:"إظهار التفاصيل",collapseRow:"إخفاء التفاصيل",copyFailedAnnouncement:"تعذّر النسخ إلى الحافظة.",cellRangeSelectedAnnouncement:"الخلايا المحددة: {cells}. الصفوف: {rows}، الأعمدة: {columns}",cellRangesSelectedAnnouncement:"النطاقات المحددة: {count}. الخلايا: {cells}",addToSelectionOnAnnouncement:"جارٍ الإضافة إلى التحديد. اضغط Shift+F8 أو Esc للإيقاف.",addToSelectionOffAnnouncement:"تم إيقاف الإضافة إلى التحديد",addingToSelection:"جارٍ الإضافة إلى التحديد",cellsCopiedAnnouncement:"الخلايا المنسوخة: {count}",cellsPastedAnnouncement:"الخلايا الملصقة: {count}",cellsSkippedAnnouncement:"الخلايا الملصقة: {count}. تم تخطي: {skipped}",copyLimitExceededAnnouncement:"عدد الخلايا المراد نسخها كبير جدًا: {count}. الحد: {max}",pasteLimitExceededAnnouncement:"عدد الخلايا المراد لصقها كبير جدًا: {count}. الحد: {max}",rowsNotLoadedAnnouncement:"لم يتم تحميل بعض الصفوف بعد. انتقل إليها وحاول مرة أخرى.",cellRangeSummaryLabel:"ملخص التحديد",extendSelectionToCell:"توسيع التحديد حتى هذه الخلية",addCellToSelection:"إضافة الخلية إلى التحديد",copySelectedCells:"نسخ الخلايا المحددة",paste:"لصق",pasteFailedAnnouncement:"تعذّرت قراءة الحافظة. الصق باستخدام لوحة المفاتيح.",expandNode:"توسيع",collapseNode:"طي",addChildRow:"إضافة صف فرعي",childRowsLoadingAnnouncement:"جارٍ تحميل الصفوف الفرعية",childRowsLoadedAnnouncement:"الصفوف الفرعية المحمّلة: {count}",childRowsLoadErrorAnnouncement:"تعذّر تحميل الصفوف الفرعية",nodesExpandedAnnouncement:"الصفوف الموسّعة: {count}",fixColumn:"تثبيت العمود",autoSizeAllColumns:"ملاءمة عرض كل الأعمدة",openColumnChooser:"اختيار الأعمدة",resetColumns:"إعادة تعيين الأعمدة",columnChooserSearchLabel:"البحث في الأعمدة",columnChooserSearchAnnouncement:"الأعمدة: {count}",selectAllColumns:"إظهار كل الأعمدة",reorderColumnLabel:"Alt+Shift+السهم لأعلى أو لأسفل ينقل العمود",columnFixedStartAnnouncement:"تم تثبيت {column} في البداية",columnFixedEndAnnouncement:"تم تثبيت {column} في النهاية",columnUnfixedAnnouncement:"تم إلغاء تثبيت {column}",allColumnsAutoSizedAnnouncement:"تمت ملاءمة عرض كل الأعمدة",columnMoveRefusedAnnouncement:"لا يمكن نقل {column} إلى ما بعد {target}",columnsResetAnnouncement:"تمت إعادة تعيين الأعمدة"}}),Gh=Symbol.for("u-grid-language"),E0=e=>{if(!e||typeof e!="string")return;const t=e.toLowerCase();return Pr[t]??Pr[t.split("-")[0]]},Jl=e=>E0(e)??Pr[Yl];globalThis[Symbol.for("u-grid-resolve-translation")]=Jl;const mz=(e,t)=>{const n=e.toLowerCase(),i=Pr[n]??E0(e)??Pr[Yl];Pr[n]={...i,...h$(t)}};class u${constructor(){this.#e=[],this.#t=new WeakSet,this.#n=Mf,this.onRequest=t=>{if(t.context!==Gh||t.subscribe!==!0||this.#t.has(t.callback))return;const n=t.contextTarget??t.composedPath()[0];this.#t.add(t.callback),this.#e.push({element:new WeakRef(n),callback:new WeakRef(t.callback)}),this.#e.length>=this.#n&&(this.#o(),this.#n=Math.max(Mf,this.#e.length*2))},this.onProvider=t=>{if(t.context!==Gh)return;const n=this.#e;this.#e=[],this.#t=new WeakSet,this.#n=Mf;for(const i of n){const s=i.element.deref(),a=i.callback.deref();s?.isConnected&&a&&s.dispatchEvent(new Wx(Gh,s,a,!0))}}}#e;#t;#n;get size(){return this.#e.length}#o(){this.#e=this.#e.filter(t=>{const n=t.callback.deref(),i=!!n&&!!t.element.deref()?.isConnected;return!i&&n&&this.#t.delete(n),i})}}const Mf=16,Ax=Symbol.for("u-grid-pending-language-requests");if(typeof document<"u"&&!window[Ax]){const e=new u$;window[Ax]=e;const t=()=>{document.body.addEventListener("context-request",e.onRequest),document.body.addEventListener("context-provider",e.onProvider)};document.body?t():document.addEventListener("DOMContentLoaded",t,{once:!0})}const Ih=new Set;let dl;const d$=e=>typeof document>"u"||typeof MutationObserver>"u"?()=>{}:(Ih.add(e),dl||(dl=new MutationObserver(()=>{for(const t of Ih)t()}),dl.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"]})),()=>{Ih.delete(e),Ih.size||(dl?.disconnect(),dl=void 0)}),p$=kS`
  * {
    box-sizing: border-box;
  }

  :host {
    display: block;
    /*
     * Bloco de contenção dos absolutos internos (região aria-live, textos só
     * para leitor de tela): sem isso, com a rolagem num contêiner externo
     * (spec 27), eles se posicionam num ancestral fora dele, escapam do
     * overflow e esticam a página até a altura do grid. O hospedeiro pode
     * trocar (\`u-grid { position: absolute }\` vence o \`:host\`).
     */
    position: relative;
    height: 100%;
    /* Cor do texto própria (spec 17, A4): numa página escura sem tema, não herda texto claro sobre o fundo claro do grid. */
    color: var(--u-grid-color, var(--u-color-on-surface, rgb(29, 27, 32)));
    /*
     * Base das cores de texto atenuadas (color-mix): o \`currentColor\`. O
     * Chromium antes do 120 resolve \`currentColor\` dentro de color-mix() na
     * propriedade \`color\` como transparente (texto do cabeçalho e das linhas
     * de grupo sumia no Chrome/Edge 114, medido no BrowserStack); lá a base é
     * a cor de texto do grid. O teste de \`mask-image\` sem prefixo (Chromium
     * 120, Firefox, Safari 15.4) separa os dois (@supports logo depois do
     * :host; \`mask\` não serve: o Chromium antigo o aceita como propriedade SVG).
     */
    --_mix-base: var(--u-grid-color, var(--u-color-on-surface, rgb(29, 27, 32)));
    --_background-color: var(--u-grid-background-color, var(--u-color-surface-container-lowest, rgb(255, 255, 255)));
    /* Nomes antigos (antes da spec 15) seguem como fallback dos novos. */
    --_striped-background-color: var(--u-grid-striped-background-color, var(--u-grid-stripped-background-color, color-mix(in srgb, var(--u-color-surface-container, rgb(243, 237, 247)) 80%, transparent)));
    --_border-color: color-mix(in srgb, currentColor var(--u-grid-line-opacity, var(--u-grid-border-opacity, 20%)), transparent);
    --_borders-width: var(--u-grid-line-width, var(--u-grid-borders-width, 1px));
    --_cell-block-padding: var(--u-grid-cell-block-padding, var(--u-table-cell-block-padding, 13px));
    --_cell-inline-padding: var(--u-grid-cell-inline-padding, var(--u-table-cell-inline-padding, 16px));
    /*
     * Os longhands novos (--u-grid-cell-block/inline-padding) vencem os atalhos
     * antigos (--u-table-cell-padding, --u-grid-data-cell-padding): o tema do
     * Universal Material define --u-table-cell-padding no :root, e ele anulava o
     * longhand. Um var() sem fallback de variável não definida deixa a custom
     * property inválida (valor inicial), então --_cell-padding-longhand só existe
     * quando um dos dois longhands foi definido.
     */
    --_cell-padding-block-set: var(--u-grid-cell-block-padding) var(--_cell-inline-padding);
    --_cell-padding-inline-set: var(--_cell-block-padding) var(--u-grid-cell-inline-padding);
    --_cell-padding-longhand: var(--_cell-padding-block-set, var(--_cell-padding-inline-set));
    --_cell-padding: var(--_cell-padding-longhand, var(--u-table-cell-padding, var(--_cell-block-padding) var(--_cell-inline-padding)));
    --_header-padding: var(--u-grid-toolbar-padding, var(--u-table-header-padding, var(--u-grid-toolbar-block-padding, var(--u-table-header-block-padding, 8px)) var(--u-grid-toolbar-inline-padding, var(--u-table-header-inline-padding, var(--_cell-inline-padding)))));
    --_column-lines-width: var(--u-grid-column-line-width, var(--u-grid-column-lines-width, var(--_borders-width)));
    --_drop-indicator-width: var(--u-grid-drop-indicator-width, 3px);
    --_drop-indicator-color: var(--u-grid-drop-indicator-color, var(--u-grid-drop-indicator-bg, var(--u-color-primary, rgb(103, 80, 164))));
    --_row-lines-height: var(--u-grid-row-line-width, var(--u-grid-row-lines-height, var(--_borders-width)));
    --_header-height: var(--u-grid-toolbar-height, var(--u-grid-header-height, 56px));
    /* Ícones, bordas de caixas e placeholder: sem o tema, derivam da cor do texto (página escura; spec 17). */
    --_variant-color: var(--u-color-on-surface-variant, color-mix(in srgb, var(--_mix-base) 80%, transparent));
    --_toggle-color: var(--u-grid-group-toggle-color, var(--u-grid-toggle-color, var(--_variant-color)));
    --_row-hover-opacity: var(--u-grid-row-hover-opacity, var(--u-table-hover-opacity, var(--u-state-layer-hover-opacity, 8%)));
    --_group-column-width: 32px;
    --_dir: 1;
    --_resize-handle-width: var(--u-grid-resize-handle-width, 8px);
    --_fixed-shadow-color: var(--u-grid-fixed-shadow-color, color-mix(in srgb, var(--u-color-shadow, rgb(0, 0, 0)) 22%, transparent));
    --_focus-ring: var(--u-grid-focus-ring-width, 2px) solid var(--u-grid-focus-ring-color, var(--u-color-primary, rgb(103, 80, 164)));
    --_selection-column-width: 48px;
    --_detail-toggle-width: 40px;
    --_command-column-width: 176px;
    --_selected-row-color: var(--u-grid-selected-row-background-color, color-mix(in srgb, var(--u-color-primary, rgb(103, 80, 164)) 12%, transparent));
  }

  /* Engines em que currentColor em color-mix() funciona na propriedade \`color\` (ver --_mix-base). */
  @supports (mask-image: none) {
    :host {
      --_mix-base: currentColor;
    }
  }

  :host(:dir(rtl)) {
    --_dir: -1;
  }

  .layout {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .layout > .container {
    flex: 1;
    min-height: 0;
  }

  /* Esperando o estado salvo (frente 11): nada do layout padrão aparece nem
     recebe foco/gesto até ele entrar; só o painel de carga. */
  .layout.state-loading .scroll-container,
  .layout.state-loading .pager {
    visibility: hidden;
  }

  .container {
    position: relative;
    display: block;
    background-color: var(--_background-color);
    height: 100%;
  }

  .container.drop-target::after,
  .container.resizing::after {
    content: "";
    position: absolute;
    top: 0;
    left: min(var(--_drop-indicator-left), 100% - var(--_drop-indicator-width));
    bottom: 0;
    background-color: var(--_drop-indicator-color);
    width: var(--_drop-indicator-width);
    z-index: 20;
  }

  .container:has(.header).drop-target::after,
  .container:has(.header).resizing::after {
    top: var(--_toolbar-offset, var(--_header-height));
  }

  /* Arrasto da borda da coluna: o mesmo separador de mover coluna, na borda nova (como a referência). */
  .container.resizing::after {
    left: min(var(--_resize-line-left, -100px), 100% - var(--_drop-indicator-width));
    background-color: var(--u-grid-resize-handle-color, var(--_drop-indicator-color));
  }

  .scroll-container {
    /*
     * Bloco de contenção dos absolutos da tabela (textos só para leitor de
     * tela nas linhas de grupo, linha ativa fora da janela): sem isso eles se
     * posicionam no \`.container\`, fora desta área, escapam do overflow e
     * alargam o grid e a página (relato de uso, celular).
     */
    position: relative;
    height: 100%;
    overflow: auto;
  }

  /*
   * Rolagem por contêiner externo (spec 27): o grid cresce com o conteúdo e
   * quem rola, nas duas direções, é o contêiner; tudo o que é sticky gruda
   * nele. O atributo cobre o SSR; o modo vindo só da propriedade (e a
   * anulação quando o contêiner não resolve) usa a folha da instância.
   * \`overflow-anchor: none\`: a âncora de rolagem do navegador não escolhe
   * linhas que o virtualizador troca (a posição é relida pelo
   * \`IntersectionObserver\`).
   */
  :host([scroll-container]:not([scroll-container=""])) {
    height: auto;
    overflow-anchor: none;
  }

  /* Tão larga quanto a tabela: a barra e a paginação grudam na borda inicial visível. */
  .layout.external-scroll {
    height: auto;
    inline-size: max-content;
    min-inline-size: 100%;
  }

  .external-scroll > .container,
  .external-scroll .scroll-container {
    height: auto;
    overflow: visible;
  }

  /*
   * Folga entre a borda visível do contêiner (depois do \`scroll-padding\`) e
   * o que gruda (\`--_port-mask-start/end\`, medida pelo grid, ex.: o padding
   * do hospedeiro em volta do grid): duas faixas sticky com o fundo do grid,
   * acima das células, escondem o conteúdo rolado que passaria ali. A
   * posição natural delas é fora da tabela; o corte da camada
   * (\`clip-path\` na área do grid) as esconde em repouso (a folga é do
   * hospedeiro) e mostra só a parte que o conteúdo rolado ocupa. O corte não
   * vai no \`.container\`: com milhões de linhas (15M px de altura) o
   * Chromium erra o hit-test das células. (Sombra na célula não serve: o
   * Chromium não pinta a sombra externa de \`<td>\` com \`border-collapse:
   * collapse\`, e um pseudo-elemento seria cortado pelo \`overflow\` da célula.)
   */
  .port-masks {
    position: absolute;
    inset: 0;
    z-index: 3;
    display: flex;
    pointer-events: none;
    clip-path: inset(0);
  }

  .port-mask {
    position: sticky;
    flex: none;
    background: var(--_background-color);
    pointer-events: auto;
  }

  .port-mask:first-child {
    inline-size: var(--_port-mask-start, 0px);
    margin-inline-start: calc(var(--_port-mask-start, 0px) * -1);
    inset-inline-start: calc(var(--_port-inset-start, 0px) - var(--_port-mask-start, 0px));
  }

  .port-mask:last-child {
    inline-size: var(--_port-mask-end, 0px);
    margin-inline: auto calc(var(--_port-mask-end, 0px) * -1);
    inset-inline-end: calc(var(--_port-inset-end, 0px) - var(--_port-mask-end, 0px));
  }

  /*
   * Barra e paginação: na largura da parte visível do grid, presas à borda
   * inicial. Sem entrar no \`max-content\` do layout (\`contain: inline-size\` e
   * largura em %): uma largura explícita aqui alargava a tabela até a parte
   * visível do contêiner, e a parte visível seguia larga — com o grid recuado
   * no contêiner, o responsivo nunca cabia (relato 0.3.3).
   */
  .external-scroll .header,
  .external-scroll > .pager {
    contain: inline-size;
    inline-size: 100%;
    max-inline-size: var(--_viewport-inline-size, 100%);
  }

  .external-scroll > .pager {
    position: sticky;
    inset-inline-start: var(--_port-inset-start, 0px);
  }

  /* O que o hospedeiro gruda no contêiner (\`scroll-padding\` dele) desloca o que o grid gruda. */
  .external-scroll .header,
  .external-scroll thead:where(.grid-table > *) {
    top: var(--_port-inset-top, 0px);
  }

  .external-scroll .header + table:where(.grid-table) thead:where(.grid-table > *) {
    top: calc(var(--_port-inset-top, 0px) + var(--_toolbar-offset, var(--_header-height)));
  }

  .external-scroll tbody:where(.grid-table > *).fixed-top-rows {
    top: calc(var(--_port-inset-top, 0px) + var(--_fixed-top-offset, 0px));
  }

  .external-scroll tbody:where(.grid-table > *).fixed-bottom-rows {
    bottom: calc(var(--_port-inset-bottom, 0px) + var(--_fixed-bottom-offset, 0px));
  }

  .external-scroll .total-footer {
    bottom: var(--_port-inset-bottom, 0px);
  }

  /* Barra de erro: no pé da parte visível, não no fim de um grid de milhões de linhas. */
  .external-scroll .error-row {
    position: sticky;
    bottom: var(--_port-inset-bottom, 0px);
    contain: inline-size;
    inline-size: 100%;
    max-inline-size: var(--_viewport-inline-size, 100%);
    inset-inline-start: var(--_port-inset-start, 0px);
  }

  /* Painel de carga: no centro da parte visível do grid (medido na rolagem). */
  .external-scroll .load-panel {
    inset-block-start: var(--_visible-block-center, 50%);
    inset-inline-start: var(--_visible-inline-center, 50%);
  }

  /*
   * Foco nativo (Tab de fora, controle de renderer) e \`scrollIntoView\` da
   * célula: não param sob o que o grid gruda (WCAG 2.4.11). As margens são
   * medidas pelo grid; o \`scroll-padding\` do contêiner o navegador já soma.
   */
  .external-scroll tbody:where(.grid-table > *).body-rows > tr > :is(td, th),
  .external-scroll tbody:where(.grid-table > *).body-rows > tr > :is(td, th) * {
    scroll-margin-block: var(--_reveal-top, 0px) var(--_reveal-bottom, 0px);
    scroll-margin-inline: var(--_reveal-start, 0px) var(--_reveal-end, 0px);
  }

  .external-scroll :is(thead, tfoot, tbody.fixed-rows):where(.grid-table > *) > tr > :is(td, th),
  .external-scroll :is(thead, tfoot, tbody.fixed-rows):where(.grid-table > *) > tr > :is(td, th) * {
    scroll-margin-inline: var(--_reveal-start, 0px) var(--_reveal-end, 0px);
  }

  /*
   * Eixo \`block\` (spec 30): o contêiner externo rola só na vertical; o grid
   * fica na largura que o hospedeiro dá e rola as colunas dentro dele, em
   * faixas (cabeçalho, corpo, rodapé) com o mesmo \`<colgroup>\`. O atributo
   * cobre o SSR (\`min-inline-size: 0\`: item de flex/grid não cresce até a
   * tabela); com a propriedade, a folha da instância.
   */
  :host([scroll-container]:not([scroll-container=""]):not([scroll-container-axis="both"])) {
    min-inline-size: 0;
  }

  .layout.external-scroll.axis-block {
    inline-size: auto;
    min-inline-size: 0;
  }

  .grid-bands {
    position: relative;
  }

  /*
   * As três faixas rolam na horizontal com \`auto\` e a barra oculta (a visível
   * é a própria, no rodapé). Cabeçalho e rodapé também \`auto\`, não
   * \`hidden\`: o Chromium pinta a área \`overflow: hidden\` num deslocamento
   * fracionário de pixel físico (escala de 110%, grid num x fracionário) e as
   * linhas dela saíam 1 px fora das do corpo (relato do ClickCompliance,
   * 0.5.0); com \`auto\` as três caem no mesmo pixel. Rolar o cabeçalho ou o
   * rodapé direto (toque, roda) chega ao corpo pela sincronização.
   */
  .band {
    /* Bloco de contenção dos absolutos da tabela (linha ativa fora da janela, textos do leitor), como o \`.scroll-container\`. */
    position: relative;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
    /* Sem âncora de rolagem: o virtualizador troca as linhas (spec 27). */
    overflow-anchor: none;
  }

  .band::-webkit-scrollbar {
    display: none;
  }

  /*
   * Focáveis só por programa (\`tabindex="-1"\`: área rolável fora do Tab, que
   * o Chromium tornaria parada sem nome; o teclado é o das células). Clique
   * no vazio: sem anel; o foco visível é o das células.
   */
  .band:focus {
    outline: none;
  }

  /* Cabeçalho (rótulos, linha de filtro, fixas do topo) e rodapé (fixas do fundo, totais, barra) grudam na porta. */
  .band-head {
    position: sticky;
    top: var(--_port-inset-top, 0px);
    z-index: 2;
    background-color: var(--u-grid-header-background-color, var(--_background-color));
  }

  .header + .grid-bands > .band-head {
    top: calc(var(--_port-inset-top, 0px) + var(--_toolbar-offset, var(--_header-height)));
  }

  .band-foot {
    position: sticky;
    bottom: var(--_port-inset-bottom, 0px);
    z-index: 2;
    background-color: var(--_background-color);
  }

  /* Dentro das faixas o que grudava na vertical fica no fluxo: quem gruda é a faixa. */
  .grid-bands :is(thead, tfoot, tbody.fixed-rows):where(.grid-table > *) {
    position: relative;
    inset-block: auto;
  }

  /* Acima da metade da altura da porta (zoom, WCAG 1.4.10/2.4.11): as faixas rolam com o conteúdo. */
  .bands-scroll .band-head,
  .bands-scroll .band-foot {
    position: relative;
    inset-block: auto;
  }

  /*
   * Barra horizontal própria: espelho do \`scrollLeft\` do corpo. Oculta para o
   * leitor e fora do Tab (o teclado rola pela navegação de células). A área
   * operável é a da barra nativa (exceção de controle do agente de usuário,
   * 2.5.8); os 24px reservam o espaço com barra de sobreposição. A cor vem do
   * \`scrollbar-color\` herdado.
   */
  .hscroll {
    display: flex;
    align-items: flex-end;
    min-block-size: 24px;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  .hscroll[hidden] {
    display: none;
  }

  .hscroll-spacer {
    flex: none;
    block-size: 1px;
  }

  /* Foco nativo e \`scrollIntoView\` nas faixas: as margens das fixas já estão no \`scroll-padding\` delas. */
  .axis-block tbody:where(.grid-table > *).body-rows > tr > :is(td, th),
  .axis-block tbody:where(.grid-table > *).body-rows > tr > :is(td, th) *,
  .axis-block :is(thead, tfoot, tbody.fixed-rows):where(.grid-table > *) > tr > :is(td, th),
  .axis-block :is(thead, tfoot, tbody.fixed-rows):where(.grid-table > *) > tr > :is(td, th) * {
    scroll-margin-inline: 0;
  }

  /* Alvo invisível do \`scrollIntoView\` de uma linha fora da janela virtual. */
  .reveal-probe {
    position: absolute;
    inline-size: 1px;
    pointer-events: none;
    visibility: hidden;
  }

  /* Quebra linha em telas estreitas (WCAG 1.4.10, spec 17 A9). */
  .group-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-self: stretch;
    flex: 1 1 200px;
    gap: 8px;
    /* O que a barra reserva ao painel antes de recolher botões no "mais" (frente 18). */
    min-width: min(120px, 100%);
  }

  .group-container.drop-target::before {
    content: "";
    width: 3px;
    height: 100%;
    background-color: var(--_drop-indicator-color);
    order: var(--_drop-indicator-order, 0);
  }

  .group {
    line-height: var(--u-grid-group-chip-line-height, var(--u-group-label-line-height, var(--u-label-l-line-height, 1.25rem)));
    font-size: var(--u-grid-group-chip-font-size, var(--u-group-label-font-size, var(--u-label-l-font-size, 0.875rem)));
    letter-spacing: var(--u-grid-group-chip-letter-spacing, var(--u-group-label-letter-spacing, var(--u-label-l-letter-spacing, 0.0071428571rem)));
    font-weight: var(--u-grid-group-chip-font-weight, var(--u-group-label-font-weight, var(--u-label-l-font-weight, var(--u-font-weight-medium, 500))));
    display: flex;
    align-items: center;
    height: var(--u-grid-group-chip-height, var(--u-group-height, 32px));
    border: var(--u-grid-group-chip-outline-width, var(--u-group-outline-width, 1px)) solid var(--u-grid-group-chip-outline-color, var(--u-group-outline-color, var(--u-color-outline, rgb(121, 116, 126))));
    border-radius: var(--u-grid-group-chip-shape, var(--u-group-shape, var(--u-shape-corner-small, 8px)));
    padding-inline: var(--u-grid-group-chip-padding, var(--u-group-padding, 16px));
    order: var(--_order);
    user-select: none;
    touch-action: none;
  }

  tr:where(.grid-table > * > *) {
    --_row-tint: transparent;
  }

  .striped .even {
    --_row-tint: var(--_striped-background-color);
    background-color: var(--_row-tint);
  }

  thead:where(.grid-table > *) {
    position: sticky;
    top: 0;
    background-color: var(--u-grid-header-background-color, var(--_background-color));
    z-index: 2;
  }

  table:where(.grid-table) {
    width: max-content;
    min-width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
  }

  /* Todas as larguras definidas: a tabela tem a soma exata e não estica. */
  table:where(.grid-table).fit {
    min-width: 0;
  }

  td:where(.grid-table > * > * > *), th:where(.grid-table > * > * > *) {
    max-width: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    --_col-line: 0 0 transparent;
    --_row-line: 0 0 transparent;
    --_edge-line: 0 0 transparent;
    --_edge-shadow: 0 0 transparent;
  }

  td:where(.grid-table > * > * > *) {
    border-collapse: separate;
    padding: var(--u-grid-cell-padding, var(--_cell-padding-longhand, var(--u-grid-data-cell-padding, var(--_cell-padding))));
    font-size: var(--u-grid-cell-font-size, var(--u-td-font-size, 0.875rem));
    font-weight: var(--u-grid-cell-font-weight, var(--u-td-font-weight));
    text-align: start;
  }

  th:where(.grid-table > * > * > *) {
    height: var(--u-grid-header-cell-height, 46px);
    padding: var(--u-grid-header-cell-padding, var(--_cell-padding));
    font-size: var(--u-grid-header-cell-font-size, var(--u-th-font-size, 0.8125rem));
    font-weight: var(--u-grid-header-cell-font-weight, var(--u-th-font-weight));
    color: color-mix(in srgb, var(--_mix-base) var(--u-low-emphasis-opacity, 75%), transparent);
    text-align: start;
  }

  /* Alinhamento lógico: \`end\` vai para a esquerda em RTL. */
  td:where(.grid-table > * > * > *).align-center, th:where(.grid-table > * > * > *).align-center {
    text-align: center;
  }

  td:where(.grid-table > * > * > *).align-end, th:where(.grid-table > * > * > *).align-end {
    text-align: end;
  }

  .boolean-icon {
    display: inline-flex;
    vertical-align: middle;
  }

  .boolean-icon.false {
    color: color-mix(in srgb, var(--_mix-base) var(--u-low-emphasis-opacity, 60%), transparent);
  }

  td:where(.grid-table > * > * > *).wrap {
    white-space: normal;
    overflow-wrap: anywhere;
  }

  .column-lines td:where(.grid-table > * > * > *):not(.group-column):not(:last-child),
  .column-lines th:where(.grid-table > * > * > *):not(.group-column):not(:last-child) {
    --_col-line: inset calc(var(--_column-lines-width) * -1 * var(--_dir)) 0 0 0 var(--_border-color);
    box-shadow: var(--_col-line), var(--_row-line), var(--_edge-line), var(--_edge-shadow);
  }

  /* A barra (painel de grupos, botões) tem linha embaixo sempre, com ou sem \`show-column-lines\` (como a referência). */
  .header,
  .group-row,
  thead:where(.grid-table > *),
  .row-lines :is(tbody, tfoot) > tr:where(.grid-table > * > *):not(.last):not(:last-child),
  .row-lines thead > tr:where(.grid-table > * > *):has(+ .filter-row),
  tr:where(.grid-table > * > *):has(+ .group-row) {
    box-shadow: inset 0 calc(var(--_row-lines-height) * -1) 0 0 var(--_border-color);
  }

  /* Espaçadora do virtualizador (altura até a 1ª linha da janela): sem linha nem borda. */
  tr:where(.grid-table > * > *).spacer {
    box-shadow: none;
  }

  /*
   * Última linha do corpo: fica com a sobra da altura do \`<tbody>\` (a altura
   * virtual). Em %, a tabela dá a sobra só a ela — sem isso a sobra se divide
   * entre as linhas de altura automática, inclusive a da célula ativa fora da
   * janela (\`.pinned\`, fora do fluxo mas com vaga na grade), e as linhas
   * visíveis descem (revisão do site: master-detail e adicionar/cancelar).
   */
  tr:where(.grid-table > * > *).filler {
    height: 100%;
    box-shadow: none;
  }

  /* Realce da linha de dados sob o ponteiro (\`--u-grid-row-hover-opacity: 0%\` desliga). */
  tbody:where(.grid-table > *) tr:where(.grid-table > * > *)[role=row]:not(.group-row):not(.summary-row):not(.detail-row):hover {
    --_row-tint: color-mix(in srgb, currentColor var(--_row-hover-opacity), transparent);
    background-color: var(--_row-tint);
  }

  .group-column {
    width: var(--_group-column-width);
    min-width: var(--_group-column-width);
  }

  /* Linha selecionada (depois do realce do ponteiro: a seleção vence). */
  tbody:where(.grid-table > *) tr:where(.grid-table > * > *)[role=row].selected:not(.group-row) {
    --_row-tint: var(--_selected-row-color);
    background-color: var(--_row-tint);
  }

  /*
   * Seleção não só por cor (WCAG 1.4.1, spec 17 A2): barra no início da 1ª
   * célula da linha selecionada (dentro da cadeia de box-shadow da célula).
   */
  tbody tr[role=row].selected:not(.group-row) > td:first-child {
    --_select-line: inset calc(var(--u-grid-selected-row-indicator-width, 3px) * var(--_dir)) 0 0 0 var(--u-grid-selected-row-indicator-color, var(--u-color-primary, rgb(103, 80, 164)));
    box-shadow: var(--_select-line), var(--_col-line), var(--_row-line), var(--_edge-line), var(--_edge-shadow);
  }

  /* Célula ativa do teclado (roving tabindex); o clique não mostra o anel. */
  td:where(.grid-table > * > * > *)[tabindex]:focus,
  th:where(.grid-table > * > * > *)[tabindex]:focus {
    outline: none;
  }

  td:where(.grid-table > * > * > *)[tabindex]:focus-visible,
  th:where(.grid-table > * > * > *)[tabindex]:focus-visible {
    outline: var(--_focus-ring);
    outline-offset: calc(var(--u-grid-focus-ring-width, 2px) * -1);
  }

  /*
   * Linha da célula ativa fora da janela virtual: fica no DOM (o foco não se
   * perde ao rolar) mas fora do fluxo e invisível.
   */
  tbody:where(.grid-table > *) tr:where(.grid-table > * > *).pinned {
    position: absolute;
    inset-inline-start: 0;
    top: 0;
    height: 1px !important;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
  }

  .selection-column,
  .selection-cell {
    width: var(--_selection-column-width);
    min-width: var(--_selection-column-width);
  }

  .selection-cell {
    padding: 0;
    text-align: center;
    cursor: pointer;
  }

  /* Master-detail: coluna de expansão e linha de detalhe de largura total. */
  .detail-toggle-column,
  .detail-toggle-cell {
    width: var(--_detail-toggle-width);
    min-width: var(--_detail-toggle-width);
  }

  .detail-toggle-cell {
    padding: 0;
    font-size: 24px;
    color: var(--_toggle-color);
  }

  .detail-toggle {
    all: unset;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: 24px;
    cursor: pointer;
    border-radius: var(--u-grid-group-toggle-shape, var(--u-grid-toggle-shape, 50%));
  }

  .detail-toggle:focus-visible {
    outline: var(--_focus-ring);
    outline-offset: -2px;
  }

  /*
   * Conteúdo do detalhe na largura da área visível (WCAG 1.4.10): preso ao
   * início na rolagem horizontal de uma tabela larga.
   */
  .detail-content {
    position: sticky;
    inset-inline-start: calc(var(--_port-inset-start, 0px) + var(--_cell-inline-padding));
    max-inline-size: calc(var(--_viewport-inline-size, 100%) - 2 * var(--_cell-inline-padding));
  }

  :host(:dir(rtl)) tr:where(.grid-table > * > *):not(.expanded) > .detail-toggle-cell .toggle-icon {
    transform: scaleX(-1);
  }

  /* \`clip\` (não \`hidden\`): não vira contêiner de rolagem e o conteúdo sticky segue a área visível. */
  td:where(.grid-table > * > * > *).detail-cell {
    white-space: normal;
    overflow: clip;
  }

  /*
   * Linha adaptativa (spec 21): os valores das colunas ocultas por falta de
   * espaço, "Rótulo: valor"; o par quebra (valor sob o rótulo) quando não
   * cabe e o valor quebra em qualquer ponto (URL, e-mail) — WCAG 1.4.10.
   */
  .adaptive-fields {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin: 0;
    padding-block: 8px;
  }

  .adaptive-fields + * {
    margin-block-start: 8px;
  }

  .adaptive-field {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    column-gap: 4px;
    min-width: 0;
  }

  .adaptive-label {
    flex: none;
    max-width: 100%;
    margin: 0;
    color: var(--u-color-on-surface-variant, rgb(73, 69, 79));
    overflow-wrap: anywhere;
  }

  .adaptive-band {
    font-size: 0.875em;
  }

  .adaptive-mark {
    vertical-align: -0.125em;
    margin-inline-start: 4px;
  }

  .adaptive-sort.desc {
    transform: rotate(180deg);
  }

  .adaptive-value {
    position: relative;
    flex: 1 1 12em;
    min-width: 0;
    margin: 0;
    padding: 2px 4px;
    border-radius: 4px;
    overflow-wrap: anywhere;
  }

  /* Anel por dentro: a \`.detail-cell\` corta o que passa da borda (\`overflow: clip\`). */
  .adaptive-value:focus-visible {
    outline: var(--_focus-ring);
    outline-offset: -2px;
  }

  .adaptive-value.modified {
    background-color: var(--u-grid-modified-cell-background-color, color-mix(in srgb, var(--u-color-primary, rgb(103, 80, 164)) 10%, transparent));
    box-shadow: inset calc(3px * var(--_dir)) 0 0 0 var(--u-grid-modified-cell-indicator-color, var(--u-color-primary, rgb(103, 80, 164)));
  }

  .adaptive-value.invalid {
    outline: 2px solid var(--u-grid-invalid-cell-color, var(--u-color-error, rgb(179, 38, 30)));
    outline-offset: -2px;
  }

  .adaptive-value.invalid:focus-visible {
    outline: var(--_focus-ring);
    box-shadow: inset 0 0 0 4px var(--u-color-surface, #fff), inset 0 0 0 6px var(--u-grid-invalid-cell-color, var(--u-color-error, rgb(179, 38, 30)));
  }

  /* Mensagem de erro no fluxo (a linha adaptativa cresce; nada por cima de outra linha). */
  .adaptive-value > .validation-message {
    position: static;
    width: auto;
    min-width: 0;
    max-width: none;
    margin-block-start: 4px;
  }

  .adaptive-value.editing {
    padding: 0;
  }

  /* Marca na célula de expansão: há valor alterado/inválido nas ocultas com a linha fechada. */
  td:where(.grid-table > * > * > *).detail-toggle-cell.adaptive-invalid {
    outline: 2px solid var(--u-grid-invalid-cell-color, var(--u-color-error, rgb(179, 38, 30)));
    outline-offset: -2px;
  }

  /* Foco com erro: anel + faixa clara + borda de erro (o anel não some atrás do vermelho, 2.4.7). */
  td:where(.grid-table > * > * > *).detail-toggle-cell.adaptive-invalid[tabindex]:focus-visible {
    outline: var(--_focus-ring);
    box-shadow:
      inset 0 0 0 4px var(--u-color-surface, #fff),
      inset 0 0 0 6px var(--u-grid-invalid-cell-color, var(--u-color-error, rgb(179, 38, 30)));
  }

  td:where(.grid-table > * > * > *).detail-toggle-cell.adaptive-modified {
    box-shadow: inset calc(3px * var(--_dir)) 0 0 0 var(--u-grid-modified-cell-indicator-color, var(--u-color-primary, rgb(103, 80, 164)));
  }

  @media (forced-colors: active) {

    .adaptive-mark {
      color: CanvasText;
    }

    .adaptive-value:focus-visible {
      outline-color: Highlight;
    }

    .adaptive-value.invalid,
    td.detail-toggle-cell.adaptive-invalid {
      outline: 2px dashed CanvasText;
    }

    .adaptive-value.invalid:focus-visible,
    td.detail-toggle-cell.adaptive-invalid[tabindex]:focus-visible {
      outline: 2px solid Highlight;
    }

    .adaptive-value.modified,
    td.detail-toggle-cell.adaptive-modified {
      border-inline-start: 3px solid CanvasText;
    }
  }

  .selection-checkbox {
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border: 2px solid var(--_variant-color);
    border-radius: 2px;
    vertical-align: middle;
    color: var(--u-color-on-primary, rgb(255, 255, 255));
  }

  .selection-checkbox svg {
    visibility: hidden;
  }

  .selection-checkbox:is([aria-checked="true"], [aria-checked="mixed"]) {
    border-color: var(--u-color-primary, rgb(103, 80, 164));
    background-color: var(--u-color-primary, rgb(103, 80, 164));
  }

  .selection-checkbox:is([aria-checked="true"], [aria-checked="mixed"]) svg {
    visibility: visible;
  }

  /*
   * Colunas fixas e recuos de grupo: sticky na rolagem horizontal. Precisam de
   * fundo opaco (a cor da linha por cima do fundo do grid) e desenham as
   * próprias linhas, que o fundo cobriria.
   */
  .fixed,
  .sticky-cell {
    position: sticky;
    z-index: 1;
    box-shadow: var(--_col-line), var(--_row-line), var(--_edge-line), var(--_edge-shadow);
  }

  td:where(.grid-table > * > * > *).fixed,
  td:where(.grid-table > * > * > *).sticky-cell {
    background: linear-gradient(var(--_row-tint), var(--_row-tint)) var(--_background-color);
  }

  th:where(.grid-table > * > * > *).fixed,
  th:where(.grid-table > * > * > *).sticky-cell,
  thead:where(.grid-table > *) td:where(.grid-table > * > * > *):is(.fixed, .sticky-cell) {
    /* Na linha de filtro (\`<td>\` no \`<thead>\`) também: o fundo é o do cabeçalho (revisão do site). */
    background: var(--u-grid-header-background-color, var(--_background-color));
  }

  .row-lines tr:where(.grid-table > * > *):not(.last):not(:last-child) > :is(.fixed, .sticky-cell),
  tr:where(.grid-table > * > *):has(+ .group-row) > :is(.fixed, .sticky-cell),
  .group-row > .sticky-cell,
  thead:where(.grid-table > *) :is(.fixed, .sticky-cell) {
    --_row-line: inset 0 calc(var(--_row-lines-height) * -1) 0 0 var(--_border-color);
  }

  /* Borda do bloco fixo: linha sempre; sombra só com conteúdo rolado por baixo. */
  .fixed-start-edge {
    --_edge-line: inset calc(var(--_column-lines-width) * -1 * var(--_dir)) 0 0 0 var(--_border-color);
  }

  .fixed-end-edge {
    --_edge-line: inset calc(var(--_column-lines-width) * var(--_dir)) 0 0 0 var(--_border-color);
  }

  .scroll-start .fixed-start-edge {
    --_edge-shadow: calc(6px * var(--_dir)) 0 6px -4px var(--_fixed-shadow-color);
  }

  .scroll-end .fixed-end-edge {
    --_edge-shadow: calc(-6px * var(--_dir)) 0 6px -4px var(--_fixed-shadow-color);
  }

  .sortable-ghost ~ .swap-target::after {
    inset-inline-start: initial;
    inset-inline-end: 0;
  }

  .move-container {
    --u-elevation-level: 1;
    position: fixed;
    background-color: var(--u-color-surface-container, rgb(243, 237, 247));
    border-radius: 4px;
    z-index: 2000;
    --_level: 1;
    --_shadow-color: var(--u-color-shadow, rgb(0, 0, 0));
  }

  .move-container::before, .move-container::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    transition: box-shadow 150ms ease-in-out;
  }

  .move-container::before {
    box-shadow: 0 calc(1px * (clamp(0, var(--_level), 1) + clamp(0, var(--_level) - 3, 1) + 2 * clamp(0, var(--_level) - 4, 1))) calc(1px * (2 * clamp(0, var(--_level), 1) + clamp(0, var(--_level) - 2, 1) + clamp(0, var(--_level) - 4, 1))) 0 var(--_shadow-color);
    opacity: 0.3;
  }

  .move-container::after {
    box-shadow: 0 calc(1px * (clamp(0, var(--_level), 1) + clamp(0, var(--_level) - 1, 1) + 2 * clamp(0, var(--_level) - 2, 3))) calc(1px * (3 * clamp(0, var(--_level), 2) + 2 * clamp(0, var(--_level) - 2, 3))) calc(1px * (clamp(0, var(--_level), 4) + 2 * clamp(0, var(--_level) - 4, 1))) var(--_shadow-color);
    opacity: 0.15;
  }

  .group-column-toggle {
    font-size: 24px;
    padding: 0;
    padding-inline-start: 8px;
    color: var(--_toggle-color);
  }

  .group-toggle {
    all: unset;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
    border-radius: var(--u-grid-group-toggle-shape, var(--u-grid-toggle-shape, 50%));
  }

  .group-toggle:focus-visible {
    outline: var(--_focus-ring);
    outline-offset: -2px;
  }

  :host(:dir(rtl)) .group-column-toggle:not(.expanded) .toggle-icon {
    transform: scaleX(-1);
  }

  .toggle-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .expanded .toggle-icon {
    transform: rotateZ(90deg);
    transform-origin: center;
  }

  .header-column {
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    touch-action: none;
  }

  .header-column.fixed,
  .band-header.fixed {
    position: sticky;
  }

  /*
   * Banda (frente 13): o rótulo quebra linha (WCAG 1.4.12) e os limites
   * (fim e base) ficam sempre visíveis, com ou sem \`show-column-lines\`.
   */
  th:where(.grid-table > * > * > *).band-header {
    position: relative;
    /* \`clip\` (não \`hidden\`): não vira contêiner de rolagem e o rótulo \`sticky\` segue a área visível. */
    overflow: clip;
    white-space: normal;
    overflow-wrap: anywhere;
    user-select: none;
    touch-action: none;
    --_col-line: inset calc(var(--_column-lines-width) * -1 * var(--_dir)) 0 0 0 var(--_border-color);
    --_row-line: inset 0 calc(var(--_row-lines-height) * -1) 0 0 var(--_border-color);
    box-shadow: var(--_col-line), var(--_row-line), var(--_edge-line), var(--_edge-shadow);
  }

  .band-header .header-text {
    white-space: normal;
  }

  /*
   * O rótulo da banda fica na parte visível dela (banda larga com colunas
   * fora da tela, virtualização): preso entre as áreas fixas do início e do fim.
   */
  .band-header:not(.fixed) > .header-content {
    position: sticky;
    inset-inline-start: calc(var(--_port-inset-start, 0px) + var(--_fixed-start, 0px) + var(--_cell-inline-padding, 16px));
    inset-inline-end: calc(var(--_port-inset-end, 0px) + var(--_fixed-end, 0px) + var(--_cell-inline-padding, 16px));
  }

  /* Colunas fora do DOM (virtualização de colunas): só ocupam a largura. */
  :where(.grid-table) .column-spacer {
    padding: 0;
    box-shadow: none;
  }

  .resize-handle {
    position: absolute;
    top: 0;
    bottom: 0;
    inset-inline-end: 0;
    /* Nunca além do padding do fim: não cobre o "⋮" nem o texto. */
    width: min(var(--_resize-handle-width), var(--_cell-inline-padding));
    cursor: col-resize;
    touch-action: none;
    z-index: 1;
  }

  /*
   * Como a referência: a alça é invisível (só o cursor muda) e fica sobre o
   * padding do fim, sem reservar espaço — o texto do cabeçalho alinha com o
   * das células. Alvo menor que 24px pela exceção "equivalente" da WCAG
   * 2.5.8 (menu do cabeçalho: autoajustar, alargar/estreitar; Alt+←/→).
   */
  .resize-handle:focus-visible {
    outline: var(--_focus-ring);
    outline-offset: -2px;
  }

  .container.resizing {
    cursor: col-resize;
    user-select: none;
  }

  .header-text {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    min-width: 1px;
  }

  /* inline: o \`text-align\` do <th> (alinhamento da coluna, RTL) posiciona o conteúdo (banda). */
  .header-content {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    max-width: 100%;
    vertical-align: middle;
  }

  /*
   * Folha (como o AG Grid): início/centro \`[texto][seta] … [funil][⋮]\`, com o
   * "⋮" na ponta do fim; fim (números) \`[⋮][funil] … [seta][texto]\`. Direção
   * lógica: RTL espelha sozinho. Os botões ficam sempre no lugar (espaço
   * reservado, nada se desloca no hover); o texto corta com reticências.
   */
  .header-column > .header-content {
    display: flex;
    width: 100%;
    min-width: 0;
  }

  .header-column.align-end > .header-content {
    flex-direction: row-reverse;
  }

  /* Auto-ajuste (medição): o conteúdo no tamanho natural, sem a sobra entre o texto e os botões. */
  /* \`headerWrap\`: o rótulo quebra linha e a linha do cabeçalho cresce (WCAG 1.4.12, sem corte). */
  .header-column.header-wrap {
    white-space: normal;
  }

  /*
   * Quebra só entre palavras (hífen com \`hyphens: auto\` e o \`lang\` do
   * hospedeiro); uma palavra maior que a coluna fica com reticências na linha
   * dela. Com \`--u-grid-header-cell-max-lines\`, as linhas além do limite viram
   * reticências. O texto inteiro segue no nome acessível; quem enxerga e usa
   * teclado o lê alargando a coluna (Alt+→) ou pelo autoajuste do menu ⋮
   * (WCAG 1.4.12; spec 17). Só no rótulo padrão: conteúdo de
   * \`headerRenderer\` (pode ter controles focáveis) nunca é cortado.
   */
  .header-column.header-wrap > .header-content > .header-text {
    white-space: normal;
    overflow-wrap: normal;
    hyphens: auto;
  }

  /*
   * No Chromium, \`-webkit-box\` com \`line-clamp: none\` desliga as reticências
   * de TODAS as linhas (a palavra longa sai cortada no meio da letra); com um
   * número, cada linha que transborda ganha reticências, como na referência.
   * Sem limite = um número alto; \`none\` explícito vira bloco comum (que
   * também tem reticências por linha).
   */
  .header-column.header-wrap > .header-content > .header-text:not(:has(*)) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--u-grid-header-cell-max-lines, 9999);
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @container style(--u-grid-header-cell-max-lines: none) {
    .header-column.header-wrap > .header-content > .header-text:not(:has(*)) {
      display: block;
    }
  }

  /* Auto-size mede o rótulo numa linha só (como o DevExtreme): senão a coluna encolhe até a maior palavra. */
  .header-column.measuring > .header-content > .header-text {
    white-space: nowrap;
  }

  /* Barra + cabeçalho acima da metade da altura visível: o cabeçalho rola com o conteúdo. */
  .header-rows-scroll thead:where(.grid-table > *) {
    position: static;
  }

  .header-column.measuring > .header-content {
    display: inline-flex;
    width: max-content;
    max-width: none;
  }

  .header-column > .header-content > .header-text {
    flex: 0 1 auto;
    min-width: 0;
  }

  /*
   * Botões e seta na altura da ÚLTIMA linha do rótulo (o rótulo da folha fica
   * no pé da célula): com \`header-wrap\`, um rótulo de 2 linhas centralizava
   * os botões entre elas e eles subiam em relação aos das outras colunas
   * (relato do usuário). O centro do alvo de 24px fica no centro da linha.
   */
  .header-column > .header-content > .header-buttons {
    align-self: flex-end;
    margin-block-end: calc((1lh - 24px) / 2);
  }

  .header-column > .header-content > .sort-indicator {
    align-self: flex-end;
    margin-block-end: calc((1lh - 1em) / 2);
  }

  /*
   * Funil e "⋮" lado a lado, sem espaço entre os alvos (cada um já tem 24px,
   * WCAG 2.5.8), e avançando sobre o padding do fim até a alça de
   * redimensionar (que fica sobre esse padding): ~10px a mais para o rótulo.
   */
  .header-buttons {
    display: flex;
    flex: none;
    align-items: center;
    gap: 0;
    margin-inline-start: auto;
    margin-inline-end: calc(min(var(--_resize-handle-width), var(--_cell-inline-padding)) - var(--_cell-inline-padding));
  }

  /*
   * Botões no começo (rótulo no fim): sem avanço sobre o padding do começo —
   * senão o "⋮" encosta no "⋮" da coluna anterior (16px entre eles).
   */
  .header-column.align-end .header-buttons {
    flex-direction: row-reverse;
    margin-inline: 0 auto;
  }

  /* Centro: texto e seta no meio do espaço que sobra antes dos botões. */
  .header-column.align-center > .header-content > .header-text {
    margin-inline-start: auto;
  }

  .header-column.align-center > .header-content:not(:has(> .header-buttons)) > :last-child {
    margin-inline-end: auto;
  }

  /*
   * Botão "⋮" do menu do cabeçalho: sempre visível, alvo de 24px (WCAG
   * 2.5.8), ícone na cor dos controles (≥ 3:1 com o fundo, WCAG 1.4.11).
   */
  .column-header-menu-button {
    all: unset;
    box-sizing: border-box;
    flex: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--u-grid-column-header-menu-button-size, 24px);
    height: var(--u-grid-column-header-menu-button-size, 24px);
    border-radius: 50%;
    font-size: 1.125rem;
    cursor: pointer;
    color: var(--_toggle-color);
  }

  /* Três pontos (desenho próprio) em máscara: nenhum nó de SVG por cabeçalho (spec 16). */
  .column-header-menu-button::before {
    content: "";
    width: 1em;
    height: 1em;
    background-color: currentColor;
    -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='5.5' r='2'/%3E%3Ccircle cx='12' cy='12' r='2'/%3E%3Ccircle cx='12' cy='18.5' r='2'/%3E%3C/svg%3E") center / contain no-repeat;
    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='5.5' r='2'/%3E%3Ccircle cx='12' cy='12' r='2'/%3E%3Ccircle cx='12' cy='18.5' r='2'/%3E%3C/svg%3E") center / contain no-repeat;
  }

  .column-header-menu-button:hover,
  .column-header-menu-button[aria-expanded="true"] {
    background-color: color-mix(in srgb, currentColor 8%, transparent);
  }

  .column-header-menu-button:focus-visible {
    outline: var(--_focus-ring);
    outline-offset: -2px;
  }

  .header-column.sortable,
  .group.sortable {
    cursor: pointer;
  }

  /*
   * Cabeçalho multinível: linhas verticais em todo o cabeçalho, com ou sem
   * \`show-column-lines\` (como a referência: o corpo segue a opção). A folha
   * que é a última da SUA \`<tr>\` (ex.: a última de uma banda, ao lado de uma
   * folha com rowspan) não está na borda do grid — leva a linha do fim; só a
   * da última posição (\`.last-column\`) fica sem (revisão do site).
   */
  thead:where(.grid-table > *):has(.band-header) th:where(.grid-table > * > * > *).header-column:not(.last-column) {
    --_col-line: inset calc(var(--_column-lines-width) * -1 * var(--_dir)) 0 0 0 var(--_border-color);
    box-shadow: var(--_col-line), var(--_row-line), var(--_edge-line), var(--_edge-shadow);
  }

  /* Cabeçalho multinível: o rótulo das folhas fica embaixo, junto das células. */
  /*
   * Folhas no pé da linha (fim na vertical, como pedido na revisão do site),
   * com ou sem bandas: numa linha em que um rótulo quebra (\`header-wrap\`), os
   * de uma linha e os botões ficam na altura da última linha dele.
   */
  thead:where(.grid-table > *) .header-column {
    vertical-align: bottom;
  }

  /* Realce sob o ponteiro (o mesmo tom da linha; \`--u-grid-row-hover-opacity: 0%\` desliga). */
  th:where(.grid-table > * > * > *):is(.header-column, .band-header):hover {
    background-image: linear-gradient(color-mix(in srgb, currentColor var(--_row-hover-opacity), transparent), color-mix(in srgb, currentColor var(--_row-hover-opacity), transparent));
  }

  .header-column.sorted {
    color: var(--u-grid-sorted-header-color, currentColor);
  }

  .header-column:focus-visible,
  .band-header:focus-visible,
  .group:focus-visible {
    outline: var(--u-grid-focus-ring-width, 2px) solid var(--u-grid-focus-ring-color, var(--u-color-primary, rgb(103, 80, 164)));
    outline-offset: -2px;
  }

  .sort-indicator {
    display: inline-flex;
    align-items: center;
    flex: none;
    font-size: var(--u-grid-sort-indicator-size, 1.125em);
  }

  .sort-indicator.desc svg {
    transform: rotate(180deg);
  }

  .sort-indicator[data-sort-index]::after {
    content: attr(data-sort-index);
    font-size: 0.6875rem;
    line-height: 1;
    margin-inline-start: 1px;
  }

  .group .sort-indicator {
    margin-inline-start: 4px;
  }

  /* Só leva o \`lang\` dos textos da i18n (spec 17); não muda o layout. */
  .lang-scope {
    display: contents;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
  }

  /*
   * A região \`aria-live\` (filha da raiz): presa ao canto inicial do host e
   * sem a margem negativa — na posição estática, em RTL, ela passava 1px da
   * borda e a página rolava na horizontal (spec 30).
   */
  .visually-hidden:where([role="status"]) {
    inset-block-start: 0;
    inset-inline-start: 0;
    margin: 0;
  }

  .grouping-cell {
    color: color-mix(in srgb, var(--_mix-base) var(--u-grid-group-row-emphasis, var(--u-grid-grouping-cell-emphasis, 80%)), transparent);
    /* clip (não hidden): não vira contêiner de rolagem e o rótulo fica sticky. */
    overflow: clip;
  }

  .grouping-label {
    position: sticky;
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
  }

  .header {
    position: sticky;
    top: 0;
    inset-inline-start: var(--_port-inset-start, 0px);
    background-color: var(--u-grid-header-background-color, var(--_background-color));
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    /* Entre itens e entre linhas da barra (o conteúdo do hospedeiro não encosta no painel de grupos). */
    gap: var(--u-grid-toolbar-gap, 8px);
    padding: var(--_header-padding);
    /* \`--u-grid-toolbar-height\` é a altura mínima: a barra cresce ao quebrar linha. */
    min-height: var(--_header-height);
    /* Acima do cabeçalho (2) e das células sticky do corpo (recuos de grupo, expansão, fixas: 1). */
    z-index: 3;
  }

  .drag-here {
    line-height: var(--u-title-s-line-height);
    font-size: var(--u-title-s-font-size);
    letter-spacing: var(--u-title-s-letter-spacing);
    font-weight: var(--u-title-s-font-weight);
    display: flex;
    align-items: center;
    min-height: 32px;
    flex: 1;
    color: color-mix(in srgb, var(--_mix-base) var(--u-low-emphasis-opacity, 75%), transparent);
  }

  .group-end-dropzone {
    display: flex;
    align-items: center;
    align-self: stretch;
    min-width: 24px;
    flex: 1;
    order: 9999;
  }

  .header + table:where(.grid-table) thead:where(.grid-table > *) {
    top: var(--_toolbar-offset, var(--_header-height));
  }

  .column-chooser-button {
    all: unset;
    box-sizing: border-box;
    flex: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    color: var(--_toggle-color);
  }

  /*
   * Barra de ferramentas (frente 18): o roving (\`role="toolbar"\`) ocupa o
   * espaço entre os avulsos (busca, conteúdo do hospedeiro); os botões que não
   * cabem vão ao "mais". DOM na ordem visual (RTL só inverte as setas).
   */
  .toolbar-roving {
    display: flex;
    /* Largura dada pelo espaço (não pelo conteúdo): é o que a medida do "mais" usa. */
    flex: 1 1 200px;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--u-grid-toolbar-gap, 8px);
    min-width: min(200px, 100%);
  }

  /*
   * Conteúdo do hospedeiro: encolhe até a largura da barra (nunca além do
   * grid), para o \`flex-wrap\` dele quebrar linhas; o mínimo de cada filho
   * continua sendo o do próprio conteúdo (relato 0.3.2).
   */
  .toolbar-content {
    display: flex;
    align-items: center;
    flex: 0 1 auto;
    min-width: 0;
    max-width: 100%;
  }

  .toolbar-button {
    all: unset;
    box-sizing: border-box;
    flex: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    min-width: 24px;
    min-height: 32px;
    padding-inline: 10px;
    border-radius: 16px;
    cursor: pointer;
    color: var(--u-color-primary, rgb(103, 80, 164));
    font-size: 0.875rem;
    font-weight: var(--u-font-weight-medium, 500);
    white-space: nowrap;
  }

  .toolbar-button.icon-only,
  .toolbar-button.column-chooser-button,
  .toolbar-button.export-button {
    width: auto;
    min-width: 40px;
    height: 40px;
    padding-inline: 8px;
    border-radius: 20px;
    color: var(--_toggle-color);
  }

  .toolbar-button.icon-only {
    width: 40px;
    padding: 0;
  }

  .toolbar-button:not([aria-disabled="true"]):hover,
  .toolbar-button[aria-expanded="true"] {
    background-color: color-mix(in srgb, currentColor 8%, transparent);
  }

  .toolbar-button:focus-visible {
    outline: var(--_focus-ring);
    outline-offset: -2px;
  }

  /* Desabilitado: o botão inteiro (ícone e texto) a 38%, como no Material — não só o matiz (WCAG 1.4.1). */
  .toolbar-button[aria-disabled="true"] {
    cursor: default;
    opacity: 0.38;
  }

  .toolbar-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .toolbar-more-button::before {
    content: "";
    width: 24px;
    height: 24px;
    background-color: currentColor;
    -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960'%3E%3Cpath d='M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z'/%3E%3C/svg%3E") center / contain no-repeat;
    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960'%3E%3Cpath d='M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z'/%3E%3C/svg%3E") center / contain no-repeat;
  }

  .column-chooser-button:hover,
  .column-chooser-button[aria-expanded="true"] {
    background-color: color-mix(in srgb, currentColor 8%, transparent);
  }

  .column-chooser-button:focus-visible,
  .column-chooser-search:focus-visible,
  .column-chooser-check input:focus-visible {
    outline: var(--_focus-ring);
    outline-offset: 2px;
  }

  .column-chooser {
    position: fixed;
    inset: auto;
    margin: 0;
    box-sizing: border-box;
    min-width: 240px;
    max-width: min(320px, calc(100vw - 16px));
    max-height: min(420px, calc(100vh - 16px));
    overflow: auto;
    padding: 4px 0 8px;
    border: none;
    border-radius: var(--u-grid-column-chooser-shape, var(--u-shape-corner-medium, 12px));
    background-color: var(--u-grid-column-chooser-background-color, var(--u-color-surface-container, rgb(243, 237, 247)));
    color: var(--u-color-on-surface, rgb(29, 27, 32));
    box-shadow: 0 2px 6px 2px color-mix(in srgb, var(--u-color-shadow, rgb(0, 0, 0)) 15%, transparent), 0 1px 2px color-mix(in srgb, var(--u-color-shadow, rgb(0, 0, 0)) 30%, transparent);
    font: inherit;
    z-index: 2100;
  }

  .column-chooser-title {
    padding: 12px 16px 8px;
    font-size: var(--u-title-s-font-size, 0.875rem);
    font-weight: var(--u-title-s-font-weight, var(--u-font-weight-medium, 500));
  }

  .column-chooser-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /* Busca (como o AG Grid): limite do campo ≥ 3:1 (WCAG 1.4.11). */
  .column-chooser-search {
    box-sizing: border-box;
    display: block;
    width: calc(100% - 32px);
    height: 36px;
    margin: 0 16px 4px;
    padding-inline: 12px;
    border: 1px solid var(--u-color-outline, rgb(121, 116, 126));
    border-radius: var(--u-shape-corner-extra-small, 4px);
    background: transparent;
    color: inherit;
    font: inherit;
    font-size: 0.875rem;
  }

  .column-chooser-search:focus-visible {
    outline-offset: -1px;
  }

  /* "Mostrar todas": a caixa alinhada com as dos itens (depois da alça). */
  .column-chooser-all {
    min-height: 40px;
    padding-inline: 36px 16px;
    border-block-end: 1px solid var(--_border-color);
  }

  .column-chooser-row {
    display: flex;
    align-items: center;
    gap: 4px;
    min-height: 40px;
    padding-inline: 8px 16px;
  }

  /* Sem alça (item único na lista): a caixa no mesmo lugar. */
  .column-chooser-row:not(:has(> .column-chooser-drag-handle)) {
    padding-inline-start: 36px;
  }

  /* Alça de arrasto (só ponteiro; o teclado usa Alt+Shift+↑/↓ na caixa). */
  .column-chooser-drag-handle {
    flex: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    font-size: 18px;
    color: var(--u-color-on-surface-variant, rgb(73, 69, 79));
    cursor: grab;
    touch-action: none;
  }

  .column-chooser-item.dragging {
    opacity: 0.5;
  }

  .column-chooser-item.dragging .column-chooser-drag-handle {
    cursor: grabbing;
  }

  .column-chooser-item.drop-before > .column-chooser-row {
    box-shadow: inset 0 2px 0 var(--u-color-primary, rgb(103, 80, 164));
  }

  .column-chooser-item.drop-after > .column-chooser-row {
    box-shadow: inset 0 -2px 0 var(--u-color-primary, rgb(103, 80, 164));
  }

  /* Banda no seletor (frente 13): as colunas dela numa lista aninhada, recuada. */
  .column-chooser-nested {
    margin: 0;
    padding: 0;
    padding-inline-start: 16px;
  }

  .column-chooser-check {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
    min-width: 0;
    cursor: pointer;
    font-size: 0.875rem;
  }

  /* Coluna oculta por falta de espaço (spec 21): a dica numa linha própria, sob o rótulo. */
  .column-chooser-hint {
    display: block;
    padding-inline-start: 66px;
    padding-block-end: 6px;
    font-size: 0.75rem;
    color: var(--u-color-on-surface-variant, rgb(73, 69, 79));
  }

  .column-chooser-check span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .column-chooser-check input {
    flex: none;
    width: 18px;
    height: 18px;
    margin: 0;
    accent-color: var(--u-color-primary, rgb(103, 80, 164));
  }

  .column-chooser-drop-hint {
    display: none;
  }

  .column-chooser.drop-target .column-chooser-drop-hint {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px dashed var(--u-color-primary, rgb(103, 80, 164));
    border-radius: inherit;
    background-color: color-mix(in srgb, var(--u-grid-column-chooser-background-color, var(--u-color-surface-container, rgb(243, 237, 247))) 85%, transparent);
    font-weight: var(--u-font-weight-medium, 500);
  }

  /* ------------------------------------------------------------- linhas fixas e linha inteira (frente 20) */

  /*
   * Linhas fixas: \`<tbody>\` sticky abaixo do cabeçalho / acima dos totais
   * (deslocamentos medidos pelo grid). Fundo opaco no \`<tbody>\` (a linha
   * põe só a tinta da listra/realce por cima): o corpo rola por baixo.
   */
  tbody:where(.grid-table > *).fixed-rows {
    --_fixed-row-background: var(--u-grid-fixed-row-background-color, var(--u-grid-header-background-color, var(--_background-color)));
    position: sticky;
    z-index: 2;
    background-color: var(--_fixed-row-background);
  }

  tbody:where(.grid-table > *).fixed-top-rows {
    top: var(--_fixed-top-offset, 0px);
  }

  tbody:where(.grid-table > *).fixed-bottom-rows {
    bottom: var(--_fixed-bottom-offset, 0px);
  }

  /* Zoom/reflow (WCAG 1.4.10/2.4.11): ocupando demais, as fixas rolam com o conteúdo. */
  .fixed-rows-scroll tbody:where(.grid-table > *).fixed-rows {
    position: static;
  }

  tbody.fixed-rows > tr > td:where(.grid-table > * > * > *):is(.fixed, .sticky-cell) {
    background: linear-gradient(var(--_row-tint), var(--_row-tint)) var(--_fixed-row-background);
  }

  /* Divisa entre as fixas e o corpo (e entre as do fundo e os totais). */
  tbody.fixed-top-rows > tr:where(.grid-table > * > *):last-child,
  tbody.fixed-top-rows > tr:where(.grid-table > * > *):last-child > :is(.fixed, .sticky-cell) {
    box-shadow: inset 0 calc(var(--_row-lines-height) * -2) 0 0 var(--u-grid-fixed-row-shadow-color, var(--_border-color));
  }

  tbody.fixed-bottom-rows > tr:where(.grid-table > * > *):first-child,
  tbody.fixed-bottom-rows > tr:where(.grid-table > * > *):first-child > :is(.fixed, .sticky-cell) {
    box-shadow: inset 0 calc(var(--_row-lines-height) * 2) 0 0 var(--u-grid-fixed-row-shadow-color, var(--_border-color));
  }

  /*
   * Linha inteira: o conteúdo fica na largura visível menos as células
   * iniciais (WCAG 1.4.10), preso ao início na rolagem horizontal.
   */
  td:where(.grid-table > * > * > *).full-width-cell {
    white-space: normal;
    padding-block: 0;
    overflow: clip;
  }

  .full-width-content {
    position: sticky;
    inset-inline-start: calc(var(--_port-inset-start, 0px) + var(--_full-width-start, 0px) + var(--_cell-inline-padding));
    max-inline-size: calc(var(--_viewport-inline-size, 100%) - var(--_full-width-start, 0px) - 2 * var(--_cell-inline-padding));
  }

  /* ------------------------------------------------------------- resumos */

  /* Fundo opaco: o rodapé fixo cobre as linhas que rolam por baixo. */
  .summary-row {
    --_summary-background: var(--u-grid-summary-background-color, var(--u-grid-header-background-color, var(--_background-color)));
    background-color: var(--_summary-background);
  }

  .summary-row > td:where(.grid-table > * > * > *).fixed,
  .summary-row > td:where(.grid-table > * > * > *).sticky-cell {
    background: var(--_summary-background);
  }

  .summary-cell {
    font-weight: var(--u-grid-summary-cell-font-weight, var(--u-font-weight-medium, 500));
  }

  /* Na linha virtual a altura é fixa: vários resumos da mesma coluna lado a lado. */
  .summary-item + .summary-item {
    margin-inline-start: 12px;
  }

  /* No rodapé de totais (fora do virtualizador) um por linha, como na referência. */
  .total-footer .summary-item {
    display: block;
  }

  .total-footer .summary-item + .summary-item {
    margin-inline-start: 0;
  }

  .total-footer {
    position: sticky;
    bottom: 0;
    z-index: 2;
  }

  .total-row {
    box-shadow: inset 0 var(--_row-lines-height) 0 0 var(--_border-color);
  }

  .group-info {
    opacity: 0.8;
  }

  /* --------------------------------- menus: contexto e barra (motor único, frente 18) */

  .grid-menu {
    position: fixed;
    inset: auto;
    margin: 0;
    min-width: 200px;
    max-width: calc(100vw - 16px);
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 8px 0;
    border: none;
    border-radius: var(--u-grid-menu-shape, var(--u-shape-corner-extra-small, 4px));
    background-color: var(--u-grid-menu-background-color, var(--u-color-surface-container, rgb(243, 237, 247)));
    color: var(--u-color-on-surface, rgb(29, 27, 32));
    box-shadow: 0 2px 6px 2px color-mix(in srgb, var(--u-color-shadow, rgb(0, 0, 0)) 15%, transparent), 0 1px 2px color-mix(in srgb, var(--u-color-shadow, rgb(0, 0, 0)) 30%, transparent);
    font: inherit;
    z-index: 2100;
  }

  .group-panel-menu-item {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 40px;
    padding-inline: 16px;
    border: none;
    background: none;
    color: inherit;
    font: inherit;
    text-align: start;
    cursor: pointer;
  }

  .group-panel-menu-item:hover,
  .group-panel-menu-item:focus-visible {
    background-color: color-mix(in srgb, currentColor 8%, transparent);
  }

  .group-panel-menu-item:focus-visible {
    outline: var(--_focus-ring);
    outline-offset: -2px;
  }

  /* Item que não se aplica agora (limite do bloco): focável pelas setas, sem efeito. */
  .group-panel-menu-item[aria-disabled="true"] {
    cursor: default;
    color: color-mix(in srgb, var(--_mix-base) 50%, transparent);
  }

  .group-panel-menu-item[aria-disabled="true"]:hover {
    background: none;
  }

  /*
   * Toque longo (frente 18): sem o balão nativo do iOS (seleção/"copiar") por
   * cima do menu do grid, só onde há menu.
   */
  :is(.grid-table[data-row-menu], [data-row-menu] .grid-table) > tbody > tr > td,
  .grid-table > thead th,
  .group {
    -webkit-touch-callout: none;
  }

  .menu-separator {
    height: 0;
    margin-block: 8px;
    border-block-start: 1px solid var(--_border-color);
  }

  /*
   * Submenu ("Fixar coluna ▸"): seta no fim do item pai, espelhada em RTL. O
   * espaço vai no texto, não na seta: padding no \`<svg>\` (border-box) deixava
   * 2px de desenho e a seta saía com 1×1 px, invisível (relato do usuário).
   */
  .menu-item-arrow {
    flex: none;
    margin-inline-start: auto;
  }

  .menu-item-parent > .menu-item-text {
    padding-inline-end: 16px;
  }

  .menu-item-arrow:dir(rtl) {
    transform: scaleX(-1);
  }

  .menu-item-parent[aria-expanded="true"] {
    background-color: color-mix(in srgb, currentColor 8%, transparent);
  }

  /* Itens de rádio: a marca do lado atual antes do texto (espaço reservado em todos). */
  .menu-item-check {
    flex: none;
    margin-inline: -4px 8px;
  }

  /* Nada anima nos menus; um tema que traga transição não a aplica com movimento reduzido. */
  @media (prefers-reduced-motion: reduce) {
    .grid-menu,
    .grid-menu .menu-item {
      transition: none;
    }
  }

  /* Toque: alvos maiores nos menus (WCAG 2.5.8 já atende com 40px; 48px é o do Material). */
  @media (pointer: coarse) {
    .menu-item {
      min-height: 48px;
    }
  }

  /* ------------------------------------------------------------- filtro */

  .toolbar-spacer {
    flex: 1;
  }

  .search-panel {
    flex: 0 1 240px;
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 120px;
    height: 40px;
    padding-inline: 12px;
    border-radius: 20px;
    background-color: color-mix(in srgb, currentColor 6%, transparent);
    color: var(--_toggle-color);
  }

  .search-panel:focus-within {
    outline: var(--_focus-ring);
  }

  .search-icon {
    flex: none;
  }

  .search-input,
  .header-filter-search {
    all: unset;
    box-sizing: border-box;
    flex: 1;
    min-width: 0;
    height: 100%;
    font: inherit;
    font-size: 0.875rem;
    color: var(--u-color-on-surface, rgb(29, 27, 32));
  }

  /* Único rótulo visível do campo: ≥ 4,5:1 sobre o fundo do campo (WCAG 1.4.3, spec 17). */
  .search-input::placeholder,
  .header-filter-search::placeholder,
  .column-chooser-search::placeholder {
    color: var(--_variant-color);
    opacity: 1;
  }

  .search-highlight {
    background-color: var(--u-grid-search-highlight-background-color, color-mix(in srgb, var(--u-color-primary, rgb(103, 80, 164)) 24%, transparent));
    color: var(--u-grid-search-highlight-color, inherit);
    border-radius: 2px;
  }

  .filter-row > td:where(.grid-table > * > * > *) {
    height: var(--u-grid-filter-row-height, var(--u-grid-header-cell-height, 46px));
    padding: 4px 8px;
    font-weight: normal;
    vertical-align: middle;
  }

  /*
   * Célula da linha de filtro com o foco: linha de destaque embaixo (única
   * linha do campo), com a cor e a espessura do anel de foco (tokens do tema).
   */
  .filter-row > td:where(.grid-table > * > * > *):focus-within {
    --_row-line: inset 0 calc(var(--u-grid-focus-ring-width, 2px) * -1) 0 0 var(--u-grid-focus-ring-color, var(--u-color-primary, rgb(103, 80, 164)));
    box-shadow: var(--_col-line), var(--_row-line), var(--_edge-line), var(--_edge-shadow);
  }

  /*
   * O editor único da célula não leva anel próprio: a linha de destaque já
   * marca o foco. No "between" (dois campos) o anel fica, para mostrar qual.
   */
  .filter-cell-content > input.filter-editor:focus-visible {
    outline: none;
  }

  /* Sem botão de operação (uma operação só) nada marca o campo: fica a linha de baixo (≥ 3:1, WCAG 1.4.11). */
  .filter-cell-content:not(:has(> .filter-operation-button)) > input.filter-editor {
    border-block-end: 1px solid var(--u-color-outline, rgb(121, 116, 126));
  }

  .filter-cell-content {
    display: flex;
    align-items: center;
    gap: 4px;
    min-width: 0;
  }

  .filter-operation-button,
  .header-filter-button,
  .header-filter-expand {
    all: unset;
    box-sizing: border-box;
    flex: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 0.875rem;
    color: var(--_toggle-color);
  }

  .filter-operation-button:hover,
  .filter-operation-button[aria-expanded="true"],
  .header-filter-button:hover,
  .header-filter-button[aria-expanded="true"],
  .header-filter-expand:hover {
    background-color: color-mix(in srgb, currentColor 8%, transparent);
  }

  .filter-operation-button:focus-visible,
  .header-filter-button:focus-visible,
  .header-filter-expand:focus-visible,
  .filter-editor:focus-visible,
  .filter-menu-item:focus-visible,
  .header-filter-actions button:focus-visible,
  .header-filter-check input:focus-visible {
    outline: var(--_focus-ring);
    outline-offset: 1px;
  }

  /* Item de largura total num menu com \`overflow\`: o anel fica para dentro (não é cortado). */
  .filter-menu-item:focus-visible {
    outline-offset: -2px;
  }

  .filter-editor {
    flex: 1;
    min-width: 0;
    width: 100%;
    height: 32px;
    padding-inline: 8px;
    border: none;
    border-radius: 0;
    /*
     * Sem fundo nem linha (revisão do site, como o DevExtreme): a lupa/glifo
     * da operação marca o campo; a célula com o foco ganha a linha de
     * destaque de 2px (\`.filter-row > td:focus-within\`).
     */
    background: transparent;
    font: inherit;
    font-size: 0.875rem;
    color: inherit;
  }

  /* Ícone da operação (lupa, glifos) centrado no botão redondo. */
  .filter-operation-button > span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
  }

  /* Valor do filtro booleano: botão de menu com a cara dos outros campos (estilizável, tema escuro). */
  .filter-value-button {
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    text-align: start;
    cursor: pointer;
  }

  .filter-value-text {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .filter-value-arrow {
    flex: none;
    width: 10px;
    height: 10px;
    background-color: var(--_toggle-color);
    -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath d='M1 3h8L5 8z'/%3E%3C/svg%3E") center / contain no-repeat;
    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath d='M1 3h8L5 8z'/%3E%3C/svg%3E") center / contain no-repeat;
  }

  .filter-value-button:focus-visible {
    outline: var(--_focus-ring);
    outline-offset: 1px;
  }

  .filter-between {
    display: flex;
    flex: 1;
    gap: 4px;
    min-width: 0;
  }

  .filter-no-value {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.8125rem;
    opacity: 0.75;
  }

  /* Mesmo alvo do "⋮" (24px); ícone sem transparência (≥ 3:1 em repouso, WCAG 1.4.11). */
  .header-filter-button {
    width: var(--u-grid-column-header-menu-button-size, 24px);
    height: var(--u-grid-column-header-menu-button-size, 24px);
    font-size: 1rem;
  }

  .header-buttons > .header-filter-button:focus-visible {
    outline-offset: -2px;
  }

  .header-filter-button.active {
    color: var(--u-grid-header-filter-button-active-color, var(--u-color-primary, rgb(103, 80, 164)));
  }

  .filter-menu,
  .header-filter {
    position: fixed;
    inset: auto;
    margin: 0;
    box-sizing: border-box;
    border: none;
    color: var(--u-color-on-surface, rgb(29, 27, 32));
    box-shadow: 0 2px 6px 2px color-mix(in srgb, var(--u-color-shadow, rgb(0, 0, 0)) 15%, transparent), 0 1px 2px color-mix(in srgb, var(--u-color-shadow, rgb(0, 0, 0)) 30%, transparent);
    font: inherit;
    z-index: 2100;
  }

  .filter-menu {
    min-width: 200px;
    max-height: min(420px, calc(100vh - 16px));
    overflow: auto;
    padding: 8px 0;
    border-radius: var(--u-shape-corner-extra-small, 4px);
    background-color: var(--u-color-surface-container, rgb(243, 237, 247));
  }

  .filter-menu-item {
    all: unset;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    min-height: 40px;
    padding-inline: 12px 16px;
    cursor: pointer;
    font-size: 0.875rem;
  }

  .filter-menu-item:hover,
  .filter-menu-item:focus-visible {
    background-color: color-mix(in srgb, currentColor 8%, transparent);
  }

  .filter-menu-item[aria-checked="true"] {
    color: var(--u-color-primary, rgb(103, 80, 164));
    font-weight: var(--u-font-weight-medium, 500);
  }

  .filter-menu-glyph {
    display: inline-flex;
    justify-content: center;
    width: 24px;
  }

  .filter-menu-separator {
    height: 1px;
    margin: 8px 0;
    background-color: var(--_border-color);
  }

  .header-filter {
    display: flex;
    flex-direction: column;
    width: min(300px, calc(100vw - 16px));
    max-height: min(480px, calc(100vh - 16px));
    padding: 12px 0 8px;
    border-radius: var(--u-grid-header-filter-shape, var(--u-shape-corner-medium, 12px));
    background-color: var(--u-grid-header-filter-background-color, var(--u-color-surface-container, rgb(243, 237, 247)));
  }

  .header-filter-search {
    flex: none;
    height: 36px;
    margin: 0 16px 8px;
    padding-inline: 12px;
    border-radius: 18px;
    background-color: color-mix(in srgb, currentColor 6%, transparent);
  }

  .header-filter-search:focus-visible {
    outline: var(--_focus-ring);
  }

  .header-filter-select-all {
    padding-inline: 16px;
    border-bottom: 1px solid var(--_border-color);
  }

  .header-filter-list {
    flex: 1;
    overflow: auto;
    list-style: none;
    margin: 0;
    padding: 4px 0;
  }

  /* Item da árvore (spec 17, A10): a linha inteira marca; a caixa é só visual. */
  .header-filter-item {
    display: flex;
    align-items: center;
    gap: 12px;
    min-height: 36px;
    padding-inline: calc(16px + var(--_level, 0) * 20px) 16px;
    cursor: pointer;
    font-size: 0.875rem;
  }

  .header-filter-item:hover {
    background-color: color-mix(in srgb, currentColor 8%, transparent);
  }

  .header-filter-item:focus-visible {
    outline: var(--_focus-ring);
    outline-offset: -2px;
  }

  .header-filter-box {
    box-sizing: border-box;
    flex: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border: 2px solid var(--_variant-color);
    border-radius: 2px;
    color: var(--u-color-on-primary, rgb(255, 255, 255));
  }

  .header-filter-item:is([aria-checked="true"], [aria-checked="mixed"]) .header-filter-box {
    border-color: var(--u-color-primary, rgb(103, 80, 164));
    background-color: var(--u-color-primary, rgb(103, 80, 164));
  }

  .header-filter-note {
    margin: 0;
    padding: 4px 16px;
    font-size: 0.75rem;
  }

  .header-filter-expand {
    margin-inline-start: -6px;
    margin-inline-end: -8px;
  }

  .header-filter-expand svg {
    transform: scaleX(var(--_dir));
  }

  .header-filter-expand.expanded svg {
    transform: rotate(90deg);
  }

  .header-filter-check {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
    min-width: 0;
    min-height: 36px;
    cursor: pointer;
    font-size: 0.875rem;
  }

  .header-filter-check input {
    flex: none;
    width: 18px;
    height: 18px;
    margin: 0;
    accent-color: var(--u-color-primary, rgb(103, 80, 164));
  }

  .header-filter-text {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .header-filter-count {
    flex: none;
    font-size: 0.75rem;
    opacity: 0.7;
    font-variant-numeric: tabular-nums;
  }

  .header-filter-actions {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 12px 0;
    border-top: 1px solid var(--_border-color);
  }

  .header-filter-spacer {
    flex: 1;
  }

  .header-filter-actions button {
    all: unset;
    box-sizing: border-box;
    height: 36px;
    padding-inline: 12px;
    border-radius: 18px;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: var(--u-font-weight-medium, 500);
    color: var(--u-color-primary, rgb(103, 80, 164));
  }

  .header-filter-actions button:hover {
    background-color: color-mix(in srgb, currentColor 8%, transparent);
  }

  /* ------------------------------------------------ preferências do usuário */

  @media (prefers-reduced-motion: reduce) {
    .move-container::before,
    .move-container::after {
      transition: none;
    }
  }

  /*
   * Alto contraste (forced-colors, spec 17): fundos e box-shadow somem, então
   * seleção, realces, linhas da grade, bordas das fixas e estados ganham
   * cores do sistema ou bordas reais.
   */
  @media (forced-colors: active) {
    tbody tr[role=row].selected:not(.group-row) > td,
    .search-highlight {
      forced-color-adjust: none;
      background: Highlight;
      color: HighlightText;
    }

    thead,
    .row-lines tbody tr[role=row]:not(.last) > td,
    .group-row > td {
      border-block-end: 1px solid CanvasText;
    }

    th.band-header {
      border-inline-end: 1px solid CanvasText;
      border-block-end: 1px solid CanvasText;
    }

    /* Editor do filtro: o alto contraste tira o box-shadow da linha de foco; limite e anel em cores do sistema. */
    input.filter-editor {
      border-block-end: 1px solid CanvasText;
    }

    .filter-cell-content > input.filter-editor:focus-visible {
      outline: 2px solid Highlight;
      outline-offset: -2px;
    }

    .column-lines td:not(.group-column):not(:last-child),
    .column-lines th:not(.group-column):not(:last-child),
    thead:has(.band-header) th.header-column:not(.last-column),
    .fixed-start-edge {
      border-inline-end: 1px solid CanvasText;
    }

    .fixed-end-edge {
      border-inline-start: 1px solid CanvasText;
    }

    .total-row > td {
      border-block-start: 1px solid CanvasText;
    }

    tbody.fixed-top-rows > tr:last-child > td {
      border-block-end: 2px solid CanvasText;
    }

    /* Linha inteira selecionada: o conteúdo do hospedeiro segue as cores do sistema; a seleção é uma borda. */
    tbody tr[role=row].selected > td.full-width-cell {
      background: Canvas;
      color: CanvasText;
      border-inline-start: 4px solid Highlight;
    }

    td.full-width-cell .full-width-content {
      forced-color-adjust: auto;
    }

    tbody.fixed-bottom-rows > tr:first-child > td,
    tbody.fixed-bottom-rows + tfoot .total-row > td {
      border-block-start: 2px solid CanvasText;
    }

    .container.drop-target::after,
    .group-container.drop-target::before,
    .container.resizing::after {
      forced-color-adjust: none;
      background-color: Highlight;
    }

    .header-filter-button.active,
    .column-chooser-button[aria-expanded="true"],
    .column-header-menu-button[aria-expanded="true"],
    .menu-item-parent[aria-expanded="true"],
    .filter-menu-item[aria-checked="true"] {
      outline: 2px solid Highlight;
      outline-offset: -2px;
    }

    .column-chooser,
    .grid-menu,
    .filter-menu,
    .header-filter {
      border: 1px solid CanvasText;
    }

    .group-panel-menu-item[aria-disabled="true"],
    .toolbar-button[aria-disabled="true"] {
      color: GrayText;
    }

    .menu-item:focus-visible {
      forced-color-adjust: none;
      background: Highlight;
      color: HighlightText;
    }

    /* Desabilitado e focado: segue GrayText (o estado não some no foco). */
    .menu-item[aria-disabled="true"]:focus-visible {
      background: Canvas;
      color: GrayText;
      outline: 2px solid Highlight;
      outline-offset: -2px;
    }

    .menu-separator {
      border-block-start-color: CanvasText;
    }

    /* Indicador de soltar do seletor (o alto contraste tira o box-shadow). */
    .column-chooser-item.drop-before > .column-chooser-row {
      border-block-start: 2px solid Highlight;
    }

    .column-chooser-item.drop-after > .column-chooser-row {
      border-block-end: 2px solid Highlight;
    }

    .toolbar-button[aria-expanded="true"] {
      outline: 2px solid Highlight;
      outline-offset: -2px;
    }

    .toolbar-more-button::before,
    .column-header-menu-button::before,
    .filter-value-arrow {
      forced-color-adjust: none;
      background-color: ButtonText;
    }

    .header-filter-item:is([aria-checked="true"], [aria-checked="mixed"]) .header-filter-box {
      forced-color-adjust: none;
      border-color: Highlight;
      background-color: Highlight;
      color: HighlightText;
    }

    .selection-checkbox:is([aria-checked="true"], [aria-checked="mixed"]) {
      forced-color-adjust: none;
      border-color: Highlight;
      background-color: Highlight;
      color: HighlightText;
    }

    .load-panel,
    .error-row {
      border: 1px solid CanvasText;
    }

    .pager-button[aria-current="page"] {
      outline: 2px solid Highlight;
      outline-offset: -2px;
    }

    .pager-button[disabled] {
      color: GrayText;
    }

    .load-spinner {
      forced-color-adjust: none;
      border-block-start-color: Highlight;
    }

    .skeleton {
      forced-color-adjust: none;
      background-color: GrayText;
    }
  }

  /* ------------------------------------------------ fonte de dados (08) */


  .load-panel {
    position: absolute;
    inset-block-start: 50%;
    inset-inline-start: 50%;
    transform: translate(calc(-50% * var(--_dir)), -50%);
    z-index: 30;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 20px;
    border-radius: 12px;
    background-color: var(--u-grid-load-panel-background-color, var(--u-color-surface-container-high, rgb(236, 230, 240)));
    color: var(--u-color-on-surface, rgb(29, 27, 32));
    box-shadow: 0 1px 3px color-mix(in srgb, var(--u-color-shadow, rgb(0, 0, 0)) 30%, transparent);
    font-size: 0.875rem;
    pointer-events: none;
  }

  .load-spinner {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 3px solid color-mix(in srgb, var(--u-color-primary, rgb(103, 80, 164)) 25%, transparent);
    border-block-start-color: var(--u-color-primary, rgb(103, 80, 164));
    animation: u-grid-spin 0.8s linear infinite;
  }

  @keyframes u-grid-spin {
    to {
      transform: rotate(360deg);
    }
  }

  .error-row {
    position: absolute;
    inset-inline: 0;
    inset-block-end: 0;
    z-index: 30;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 8px var(--_cell-inline-padding);
    background-color: var(--u-color-error-container, rgb(249, 222, 220));
    color: var(--u-color-on-error-container, rgb(65, 14, 11));
    font-size: 0.875rem;
  }

  .retry-button,
  .pager-button {
    all: unset;
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 40px;
    height: 40px;
    padding-inline: 12px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: var(--u-font-weight-medium, 500);
  }

  .retry-button {
    color: inherit;
    text-decoration: underline;
  }

  .retry-button:hover,
  .pager-button:not([disabled]):hover {
    background-color: color-mix(in srgb, currentColor 8%, transparent);
  }

  .retry-button:focus-visible,
  .pager-button:focus-visible,
  .page-size select:focus-visible {
    outline: var(--_focus-ring);
    outline-offset: -2px;
  }

  .skeleton {
    display: block;
    height: 0.75em;
    width: 70%;
    border-radius: 4px;
    background-color: var(--u-grid-skeleton-row-color, color-mix(in srgb, currentColor 12%, transparent));
  }

  .pager {
    container: u-grid-pager / inline-size;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px 16px;
    min-height: var(--u-grid-pager-height, 56px);
    padding-inline: var(--_cell-inline-padding);
    background-color: var(--_background-color);
    border-block-start: var(--_borders-width) solid var(--_border-color);
    font-size: 0.875rem;
  }

  .page-size {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .page-size select {
    font: inherit;
    color: inherit;
    background-color: transparent;
    border: 1px solid var(--_variant-color);
    border-radius: 4px;
    padding: 4px 8px;
  }

  .page-info {
    flex: 1;
  }

  .pager-buttons {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2px;
    max-width: 100%;
  }

  /*
   * Paginador estreito (celular, painel lateral): só as setas — o número da
   * página já está no texto ("Página 1 de 14"). Sem isso, os 9 botões de 40px
   * (376px com os espaços) passavam da largura do grid e alargavam a página
   * (WCAG 1.4.10). A medida é a área de conteúdo do paginador (sem padding).
   */
  @container u-grid-pager (max-width: 375.98px) {
    .pager-number {
      display: none;
    }
  }

  .pager-button {
    padding-inline: 8px;
  }

  .pager-button[disabled] {
    cursor: default;
    opacity: 0.38;
  }

  /* Página atual: não só por cor (peso e sublinhado). */
  .pager-button[aria-current="page"] {
    background-color: color-mix(in srgb, var(--u-color-primary, rgb(103, 80, 164)) 12%, transparent);
    color: var(--u-color-primary, rgb(103, 80, 164));
    font-weight: 700;
    box-shadow: inset 0 -2px 0 currentColor;
  }

  :host(:dir(rtl)) .pager-arrow svg {
    transform: scaleX(-1);
  }

  @media (prefers-reduced-motion: reduce) {
    .load-spinner {
      animation: none;
    }
  }

  /* ------------------------------------------------------- edição (09) */

  td:where(.grid-table > * > * > *).editing {
    /* O editor ocupa a célula; a mensagem de erro sai por baixo dela. */
    padding-block: 4px;
    padding-inline: max(4px, calc(var(--_cell-inline-padding) - 8px));
    overflow: visible;
  }

  td:where(.grid-table > * > * > *).show-message {
    overflow: visible;
  }

  td.editing:not(.fixed):not(.sticky-cell),
  td.show-message:not(.fixed):not(.sticky-cell) {
    position: relative;
  }

  td.show-message > .cell-text {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .cell-editor {
    box-sizing: border-box;
    width: 100%;
    min-height: 32px;
    padding-inline: 8px;
    border: none;
    /* Limite do campo de 3:1 ou mais (WCAG 1.4.11), como a linha de filtro. */
    border-bottom: 1px solid var(--u-color-outline, rgb(121, 116, 126));
    border-radius: 4px 4px 0 0;
    background-color: color-mix(in srgb, currentColor 4%, transparent);
    font: inherit;
    color: inherit;
    text-align: inherit;
  }

  .cell-editor:focus {
    outline: var(--_focus-ring);
    outline-offset: 1px;
  }

  .cell-editor[aria-invalid="true"] {
    border-bottom: 2px solid var(--u-grid-invalid-cell-color, var(--u-color-error, rgb(179, 38, 30)));
  }

  /* Caixa do booleano: alvo de 24 px (WCAG 2.5.8). */
  .cell-editor-checkbox {
    width: 24px;
    height: 24px;
    min-height: 24px;
    margin: 0;
    padding: 0;
    accent-color: var(--u-color-primary, rgb(103, 80, 164));
  }

  /* Célula alterada (lote): fundo + marca no canto (não só cor, WCAG 1.4.1). */
  td:where(.grid-table > * > * > *).modified {
    background-color: var(--u-grid-modified-cell-background-color, color-mix(in srgb, var(--u-color-primary, rgb(103, 80, 164)) 10%, transparent));
  }

  td.modified:not(.fixed):not(.sticky-cell) {
    position: relative;
  }

  /* Triângulo no canto final (bordas: espelha em RTL e sobrevive ao forced-colors). */
  td.modified::after {
    content: '';
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    border-block-start: 8px solid var(--u-grid-modified-cell-indicator-color, var(--u-color-primary, rgb(103, 80, 164)));
    border-inline-start: 8px solid transparent;
    pointer-events: none;
  }

  /* Linha nova: barra no início (não só o fundo). */
  tbody tr[role=row].added > td:first-child {
    box-shadow: inset calc(3px * var(--_dir)) 0 0 0 var(--u-grid-modified-cell-indicator-color, var(--u-color-primary, rgb(103, 80, 164))), var(--_col-line), var(--_row-line), var(--_edge-line), var(--_edge-shadow);
  }

  /* Célula inválida: borda de erro (cor + espessura). */
  td:where(.grid-table > * > * > *).invalid {
    outline: 2px solid var(--u-grid-invalid-cell-color, var(--u-color-error, rgb(179, 38, 30)));
    outline-offset: -2px;
  }

  /* Foco numa célula inválida: anel + faixa clara + borda de erro (o anel não encosta no vermelho). */
  td:where(.grid-table > * > * > *).invalid[tabindex]:focus-visible {
    outline: var(--_focus-ring);
    box-shadow:
      inset 0 0 0 4px var(--u-color-surface, #fff),
      inset 0 0 0 6px var(--u-grid-invalid-cell-color, var(--u-color-error, rgb(179, 38, 30))),
      var(--_col-line),
      var(--_row-line);
  }

  /* Mensagem visível e persistente abaixo da célula (acima, na última linha). */
  .validation-message {
    position: absolute;
    inset-block-start: 100%;
    inset-inline-start: 0;
    z-index: 4;
    min-width: 100%;
    max-width: max(100%, 320px);
    width: max-content;
    padding: 6px 10px;
    border-inline-start: 4px solid var(--u-grid-invalid-cell-color, var(--u-color-error, rgb(179, 38, 30)));
    border-radius: 0 0 4px 4px;
    background-color: var(--u-color-error-container, rgb(249, 222, 220));
    color: var(--u-color-on-error-container, rgb(65, 14, 11));
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.4;
    white-space: normal;
    text-align: start;
    text-decoration: none;
    box-shadow: 0 2px 6px rgb(0 0 0 / 20%);
  }

  .validation-message[hidden] {
    display: none;
  }

  tr.last > td > .validation-message {
    inset-block-start: auto;
    inset-block-end: 100%;
    border-radius: 4px 4px 0 0;
  }

  .validating-spinner {
    display: inline-block;
    width: 0.9em;
    height: 0.9em;
    margin-inline-end: 6px;
    vertical-align: -0.1em;
    border-radius: 50%;
    border: 2px solid currentColor;
    border-block-start-color: transparent;
    animation: u-grid-edit-spin 0.9s linear infinite;
  }

  @keyframes u-grid-edit-spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Linha nova e linha marcada para remoção (lote). */
  tbody:where(.grid-table > *) tr:where(.grid-table > * > *).added {
    background-color: var(--u-grid-added-row-background-color, color-mix(in srgb, var(--u-color-primary, rgb(103, 80, 164)) 6%, transparent));
  }

  tbody:where(.grid-table > *) tr:where(.grid-table > * > *).removed > td:not(.command-cell) {
    opacity: var(--u-grid-removed-row-opacity, 0.7);
    text-decoration: line-through;
  }

  /* Coluna dos botões da linha. */
  .command-column {
    width: var(--_command-column-width);
  }

  td:where(.grid-table > * > * > *).command-cell,
  th:where(.grid-table > * > * > *).command-cell {
    padding-block: 0;
    padding-inline: 8px;
  }

  .command-button,
  .edit-bar-button,
  .dialog-button {
    all: unset;
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    min-width: 24px;
    min-height: 32px;
    padding-inline: 10px;
    border-radius: 16px;
    cursor: pointer;
    color: var(--u-color-primary, rgb(103, 80, 164));
    font-size: 0.875rem;
    font-weight: var(--u-font-weight-medium, 500);
    white-space: nowrap;
  }

  .command-button:hover,
  .edit-bar-button:not([aria-disabled="true"]):hover,
  .dialog-button:hover {
    background-color: color-mix(in srgb, currentColor 8%, transparent);
  }

  .command-button:focus-visible,
  .edit-bar-button:focus-visible,
  .dialog-button:focus-visible {
    outline: var(--_focus-ring);
    outline-offset: -2px;
  }

  .edit-bar-button[aria-disabled="true"] {
    cursor: default;
    color: color-mix(in srgb, var(--_mix-base) 60%, transparent);
  }

  /* Na barra o desabilitado é pela opacidade (acima): a cor fica a do botão. */
  .toolbar-button.edit-bar-button[aria-disabled="true"] {
    color: var(--u-color-primary, rgb(103, 80, 164));
  }

  .edit-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px 8px;
    margin-inline-end: 8px;
  }

  .edit-status {
    padding: 4px 10px;
    border-inline-start: 4px solid var(--u-grid-invalid-cell-color, var(--u-color-error, rgb(179, 38, 30)));
    background-color: var(--u-color-error-container, rgb(249, 222, 220));
    color: var(--u-color-on-error-container, rgb(65, 14, 11));
    font-size: 0.8125rem;
  }

  .remove-dialog {
    max-width: min(420px, calc(100vw - 32px));
    padding: 24px;
    border: none;
    border-radius: var(--u-grid-column-chooser-shape, 12px);
    background-color: var(--u-grid-column-chooser-background-color, var(--u-color-surface-container-high, rgb(236, 230, 240)));
    color: var(--u-grid-color, var(--u-color-on-surface, rgb(29, 27, 32)));
    box-shadow: 0 4px 16px rgb(0 0 0 / 25%);
  }

  .remove-dialog::backdrop {
    background-color: rgb(0 0 0 / 32%);
  }

  .remove-dialog-title {
    margin: 0 0 12px;
    font-size: 1.25rem;
    font-weight: 400;
  }

  .remove-dialog-message {
    margin: 0 0 20px;
    font-size: 0.875rem;
  }

  .remove-dialog-actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }

  .dialog-button.danger {
    color: var(--u-color-error, rgb(179, 38, 30));
  }

  @media (prefers-reduced-motion: reduce) {
    .validating-spinner {
      animation: none;
    }
  }

  @media (forced-colors: active) {
    td.modified::after {
      forced-color-adjust: none;
      border-block-start-color: CanvasText;
    }

    tbody tr[role=row].selected > td.modified::after {
      border-block-start-color: HighlightText;
    }

    tbody tr[role=row].added > td:first-child {
      border-inline-start: 3px solid CanvasText;
    }

    td.invalid,
    .cell-editor[aria-invalid="true"] {
      outline: 2px dashed CanvasText;
    }

    .validation-message,
    .edit-status,
    .remove-dialog,
    .cell-editor {
      border: 1px solid CanvasText;
    }

    .edit-bar-button[aria-disabled="true"] {
      color: GrayText;
    }
  }

  /*
   * Intervalo de células (frente 19): tinta de fundo + contorno de borda real
   * nas bordas externas de cada intervalo (não só cor, WCAG 1.4.1/1.4.11;
   * propriedades lógicas: espelha em RTL e sobrevive ao forced-colors).
   */
  .cell-range-mode td:where(.grid-table > tbody > tr > *)[data-col]:not(.editing) {
    user-select: none;
    -webkit-user-select: none;
  }

  td:where(.grid-table > * > * > *).in-range {
    background-color: var(--u-grid-selected-cell-background-color, color-mix(in srgb, var(--u-color-primary, rgb(103, 80, 164)) 14%, transparent));
  }

  /* Contexto de empilhamento próprio: o contorno não pinta por cima das colunas fixas ao rolar. */
  td.in-range:not(.fixed):not(.sticky-cell) {
    position: relative;
    z-index: 0;
  }

  td.in-range::before {
    --_range-border: var(--u-grid-cell-range-border-width, 2px) solid var(--u-grid-cell-range-border-color, var(--u-color-primary, rgb(103, 80, 164)));
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
  }

  td.in-range.range-top::before {
    border-block-start: var(--_range-border);
  }

  td.in-range.range-bottom::before {
    border-block-end: var(--_range-border);
  }

  td.in-range.range-start::before {
    border-inline-start: var(--_range-border);
  }

  td.in-range.range-end::before {
    border-inline-end: var(--_range-border);
  }

  /* A barra da linha selecionada (A2, spec 17) fica visível ao lado do contorno. */
  tbody tr[role=row].selected:not(.group-row) > td:first-child.range-start::before {
    inset-inline-start: var(--u-grid-selected-row-indicator-width, 3px);
  }

  /* Célula ativa dentro do intervalo: anel + faixa clara (o anel não se funde ao contorno; WCAG 2.4.7). */
  td:where(.grid-table > * > * > *).in-range[tabindex]:focus-visible {
    outline: var(--_focus-ring);
    outline-offset: calc(var(--u-grid-focus-ring-width, 2px) * -1);
    box-shadow:
      inset 0 0 0 calc(var(--u-grid-focus-ring-width, 2px) + 2px) var(--u-color-surface, #fff),
      var(--_col-line),
      var(--_row-line),
      var(--_edge-line),
      var(--_edge-shadow);
  }

  td.in-range[tabindex]:focus-visible::before {
    inset: calc(var(--u-grid-focus-ring-width, 2px) + 2px);
  }

  /* Inválida focada dentro do intervalo: anel, faixa clara e a borda de erro (não some). */
  td:where(.grid-table > * > * > *).in-range.invalid[tabindex]:focus-visible {
    box-shadow:
      inset 0 0 0 calc(var(--u-grid-focus-ring-width, 2px) + 2px) var(--u-color-surface, #fff),
      inset 0 0 0 calc(var(--u-grid-focus-ring-width, 2px) + 4px) var(--u-grid-invalid-cell-color, var(--u-color-error, rgb(179, 38, 30))),
      var(--_col-line),
      var(--_row-line),
      var(--_edge-line),
      var(--_edge-shadow);
  }

  td.in-range.invalid[tabindex]:focus-visible::before {
    inset: calc(var(--u-grid-focus-ring-width, 2px) + 4px);
  }

  .range-dragging {
    cursor: cell;
  }

  /* Barra abaixo do grid: modo "adicionar à seleção" e o resumo (contagem, soma, média). */
  .cell-range-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px 16px;
    min-width: 0;
    font-size: 0.875rem;
    color: var(--u-color-on-surface, inherit);
  }

  .cell-range-bar.has-text {
    padding: 8px 16px;
    border-block-start: var(--_borders-width, 1px) solid var(--u-color-outline-variant, rgb(202, 196, 208));
  }

  .cell-range-adding {
    font-weight: 500;
    color: var(--u-color-primary, rgb(103, 80, 164));
  }

  .cell-range-summary {
    overflow-wrap: anywhere;
  }

  @media (forced-colors: active) {
    /* Sem fundo no alto contraste: marca pontilhada em toda célula do intervalo (o interior também). */
    td.in-range::before {
      --_range-border: var(--u-grid-cell-range-border-width, 2px) solid Highlight;
      forced-color-adjust: none;
      outline: 1px dotted Highlight;
      outline-offset: -3px;
    }

    tbody tr[role=row].selected > td.in-range::before {
      --_range-border: var(--u-grid-cell-range-border-width, 2px) solid HighlightText;
      outline-color: HighlightText;
    }

    td:where(.grid-table > * > * > *).in-range[tabindex]:focus-visible {
      outline: 2px solid CanvasText;
      outline-offset: -4px;
    }

    .cell-range-bar.has-text {
      border-block-start: 1px solid CanvasText;
    }
  }

  /* ------------------------------------------------------- árvore (frente 25) */

  /* Recuo por nível (lado inicial: espelha em RTL), botão e conteúdo cortado com reticências. */
  /* O botão de 24 px (WCAG 2.5.8) cabe na altura da linha: sem o respiro vertical da célula. */
  td.tree-cell {
    padding-block: 0;
  }

  .tree-node {
    display: flex;
    align-items: center;
    gap: 2px;
    min-width: 0;
    /* Recuo com teto: o botão e 3 caracteres do conteúdo sempre cabem (WCAG 1.4.10). */
    padding-inline-start: min(calc(var(--_tree-level, 0) * var(--u-grid-tree-indent, 24px)), calc(100% - 24px - 3ch));
  }

  .tree-content {
    flex: 1 1 auto;
    /* Recuo profundo (WCAG 1.4.10): o texto não some de todo. */
    min-width: 3ch;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .wrap .tree-content {
    white-space: normal;
  }

  .tree-toggle,
  .tree-toggle-spacer {
    flex: none;
    /* Alvo de 24×24 (WCAG 2.5.8). */
    inline-size: 24px;
    block-size: 24px;
    min-inline-size: 24px;
    min-block-size: 24px;
  }

  .tree-toggle {
    all: unset;
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    inline-size: 24px;
    block-size: 24px;
    font-size: 20px;
    cursor: pointer;
    border-radius: var(--u-grid-group-toggle-shape, 50%);
    color: var(--u-grid-tree-toggle-color, var(--_toggle-color));
  }

  .tree-toggle:hover {
    background: color-mix(in srgb, currentColor 8%, transparent);
  }

  :host(:dir(rtl)) .tree-toggle:not(.expanded) .toggle-icon {
    transform: scaleX(-1);
  }

  .tree-spinner {
    box-sizing: border-box;
    inline-size: 14px;
    block-size: 14px;
    border-radius: 50%;
    border: 2px solid color-mix(in srgb, currentColor 25%, transparent);
    border-block-start-color: currentColor;
    animation: u-grid-spin 0.8s linear infinite;
  }

  .tree-summary {
    flex: none;
    margin-inline-start: 8px;
    opacity: 0.8;
  }

  .node-summary {
    font-weight: var(--u-grid-summary-cell-font-weight, 500);
  }

  @media (prefers-reduced-motion: reduce) {
    .tree-spinner {
      animation: none;
    }

    .tree-toggle .toggle-icon {
      transition: none;
    }
  }

  @media (forced-colors: active) {
    .tree-toggle {
      color: ButtonText;
    }

    .tree-spinner {
      border-color: CanvasText;
      border-block-start-color: transparent;
    }
  }
`,kx=new WeakSet,f$=(e,t)=>{kx.has(e)||(kx.add(e),console.error("[u-grid] A renderer threw; the content was left empty.",t))},Rf=e=>L`<slot name=${e}></slot>`,m$=e=>typeof e=="object"&&e!==null&&typeof e.nodeType=="number",g$=(e,t)=>e.length===t.length&&e.every((n,i)=>n===t[i]);class v$ extends Jx{#e;#t;#n;#o;#s;constructor(t){if(super(t),t.type!==Sn.CHILD)throw new Error("rendererContent() só pode ser usado como conteúdo.")}render(t){return this.#a(t,Jm)}update(t,[n]){if(this.#t=n,this.#s=t,this.#e&&g$(this.#e,n.deps))return this.#o&&this.#o.parentNode!==n.host&&n.host.appendChild(this.#o),Xt;this.#r(),this.#e=n.deps;const i=this.#a(n,!1);return n.demote!==!1&&this.#i(),i}#i(){queueMicrotask(()=>{const t=this.#s;if(!(!this.isConnected||!t?.startNode))for(let n=t.startNode.nextSibling;n&&n!==t.endNode;n=n.nextSibling)n instanceof Element&&Hw(n)})}#a(t,n){let i;try{i=t.invoke(()=>(this.#n??=new AbortController).signal)}catch(s){return n?Rf(t.slotName):(f$(t.renderer,s),P)}if(i==null||i===P)return P;if(m$(i)){if(n)return Rf(t.slotName);const s=this.#o??=t.host.ownerDocument.createElement("div");return s.slot=t.slotName,s.replaceChildren(i),t.demote!==!1&&Hw(i),s.parentNode!==t.host&&t.host.appendChild(s),Rf(t.slotName)}return i}#r(){this.#n?.abort(),this.#n=void 0,this.#o?.remove(),this.#o=void 0,this.#e=void 0}disconnected(){this.#r()}reconnected(){const t=this.#t;t&&(this.#e=t.deps,this.setValue(this.#a(t,!1)),t.demote!==!1&&this.#i())}}const ms=dr(v$),b$="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z",w$="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z",x$=(e,t,n)=>!e&&n?L`<span class="boolean-icon false visually-hidden">${t.falseText}</span>`:L`
  <span
    class="boolean-icon ${e?"true":"false"}"
    role="img"
    aria-label=${e?t.trueText:t.falseText}><svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.25em"
      width="1.25em"
      viewBox="0 -960 960 960"
      fill="currentColor"
      aria-hidden="true"><path d=${e?b$:w$}/></svg></span>`,y$=(e,t,n)=>{const i=ti(e,t),s=ry(i,t,n);return s===void 0?Ic(i,e,t,n):s?n.trueText:n.falseText},C$=(e,t,n,i,s,a,c=!1)=>{const{renderer:h}=n;if(!h){const f=ti(t.item,n),g=ry(f,n,s);return g===void 0?Ic(f,t.item,n,s):x$(g,s,n.booleanDisplay==="check")}const{item:u}=t;return ms({host:e,slotName:`u-grid-internal:${c?"adaptive":"cell"}:${t.key}:${i}`,deps:[u,n,h,a],renderer:h,invoke:f=>{const g={item:u,get value(){return ti(u,n)},get text(){return y$(u,n,s)},column:n,rowKey:u,adaptive:c,grid:e,get signal(){return f()}};return h.call(n,u,g)}})},_$=e=>{const t=new Array(e.length+1);t[0]=0;for(let n=0;n<e.length;n++)t[n+1]=t[n]+Math.max(e[n],0);return t},Sx=(e,t)=>{const n=e.length-1;let i=0,s=n-1;for(;i<s;){const a=Math.floor((i+s+1)/2);e[a]<=t?i=a:s=a-1}return i},A$=(e,t,n,i)=>{if(e.length-1<=0)return{first:0,last:-1};const a=Math.max(t-i,0),c=Math.max(t+Math.max(n,0)+i,a),h=Sx(e,a);let u=Sx(e,c);return u>h&&e[u]>=c&&u--,{first:h,last:u}},k$=e=>{const t=e.describedBy||void 0;if(e.kind==="boolean")return L`<input
      class="cell-editor cell-editor-checkbox"
      part="cell-editor"
      type="checkbox"
      aria-label=${W(e.labelledBy||!e.label?void 0:e.label)}
      aria-labelledby=${W(e.labelledBy)}
      aria-invalid=${e.invalid?"true":"false"}
      aria-describedby=${W(t)}
      .checked=${xn(e.checked===!0)}
      .indeterminate=${xn(e.checked===null)}
      @change=${e.onChange}>`;const n=e.kind==="date"?"date":e.kind==="datetime"?"datetime-local":"text";return L`<input
    class="cell-editor"
    part="cell-editor"
    type=${n}
    inputmode=${W(e.kind==="number"?"decimal":void 0)}
    autocomplete="off"
    spellcheck=${e.kind==="text"?"true":"false"}
    placeholder=${W(e.placeholder)}
    aria-label=${W(e.labelledBy||!e.label?void 0:e.label)}
    aria-labelledby=${W(e.labelledBy)}
    aria-invalid=${e.invalid?"true":"false"}
    aria-describedby=${W(t)}
    .value=${xn(e.text)}
    @input=${e.onInput}
    @change=${e.onChange}>`};class S$ extends Ta{#e;constructor(t){if(super(t),t.type!==Sn.CHILD)throw new Error("keyedRows() só pode ser usado como conteúdo.")}render(t,n,i){return t.map(s=>i(s))}update(t,[n,i,s]){const a=Xx(t);if(!this.#e||!Array.isArray(a)||a.length!==this.#e.length)return this.#e=n.map(i),this.render(n,i,s);const c=a,h=this.#e,u=new Set(n.map(i)),f=new Map,g=[];h.forEach((E,$)=>{const z=f.get(E);z&&g.push(z),f.set(E,c[$])});for(const[E,$]of f)u.has(E)||(g.push($),f.delete(E));for(const E of g)Cl(E),E.endNode?.parentNode?.removeChild(E.endNode);const v=new Array(n.length),y=new Array(n.length);let _;for(let E=n.length-1;E>=0;E--){const $=i(n[E]);let z=f.get($);z?(f.delete($),Ss(t,_,z)):z=Ss(t,_),ko(z,s(n[E])),v[E]=z,y[E]=$,_=z}for(const E of f.values())Cl(E),E.endNode?.parentNode?.removeChild(E.endNode);return Qm(t,v),this.#e=y,Xt}}const Pa=dr(S$),Ex=e=>e?L`<td class="column-spacer" role="presentation"></td>`:P,Mg=(e,t,n=0,i=", ",s=0,a,c=0,h)=>{const u=(g,v)=>{const y=t.get(g.column),_=g.col??s+n+v;return L`${Ex(g.gapBefore)}${y?.length?L`<td
          part="summary-cell"
          class="summary-cell ${g.className}"
          style=${g.style}
          role="gridcell"
          aria-colindex=${_+1}
          data-col=${W(a?_:void 0)}
          tabindex=${W(a?.(_))}
          ><span aria-hidden="true">${rt(y,E=>L`<span class="summary-item">${E.text}</span>`)}</span><span
            class="visually-hidden">${y.map(E=>E.label).join(i)}</span></td>`:L`<td
          class="summary-cell ${g.className}"
          style=${g.style}
          role="gridcell"
          aria-colindex=${_+1}
          data-col=${W(a?_:void 0)}
          tabindex=${W(a?.(_))}></td>`}`},f=e.slice(n);return L`${h?Pa(f,h,g=>u(g,0)):rt(f,u)}${Ex(c)}`},M0=(e,t)=>L`${rt(Array.from({length:e}),(n,i)=>L`
    <td
      role="presentation"
      class="group-column sticky-cell"
      style="inset-inline-start: calc(var(--_port-inset-start, 0px) + ${i*t}px)"></td>`)}`,E$=({layout:e,texts:t,groupColumns:n,groupColumnWidth:i,rowIndex:s,separator:a,leading:c=P,trailing:h=P,colOffset:u=0,tabIndexOf:f,trailingGap:g=0,keyOf:v,level:y,role:_="rowgroup"})=>L`
  <tfoot class="total-footer" role=${_}>
    <tr class="summary-row total-row" part="summary-row total-row" role="row" aria-rowindex=${s} aria-level=${W(y)}>
      ${n?M0(n,i):P}
      ${c}
      ${Mg(e,t,0,a,u,f,g,v)}
      ${h}
    </tr>
  </tfoot>`,R0=(e,t,n)=>`${fe(e.column)}${t}${n}`,M$=({row:e,totalColumns:t,separator:n,valueText:i,info:s="",tabIndex:a,ariaColSpan:c,ariaLabel:h,labelSpan:u,trailing:f=P,onToggle:g,content:v,alignedSummaries:y})=>{const _=R0(e,n,i);return L`
    ${e.level?L`<td class="group-column sticky-cell" style="inset-inline-start: var(--_port-inset-start, 0px)" role="presentation" colspan=${e.level}></td>`:P}
    <td
      class="group-column group-column-toggle sticky-cell ${Ni({expanded:e.expanded})}"
      style="inset-inline-start: calc(var(--_port-inset-start, 0px) + ${e.level} * var(--_group-column-width))"
      role="presentation">
      <button
        class="group-toggle"
        type="button"
        tabindex="-1"
        aria-hidden="true"
        aria-expanded=${e.expanded?"true":"false"}
        @mousedown=${E=>E.preventDefault()}
        @click=${E=>{E.currentTarget.closest("tr")?.querySelector(".grouping-cell")?.focus(),g(e)}}>
        <span class="toggle-icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill="currentColor" aria-hidden="true">
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
          </svg>
        </span>
      </button>
    </td>
    <td
      class="grouping-cell"
      role="gridcell"
      aria-colindex="1"
      data-col="group"
      tabindex=${a}
      aria-keyshortcuts="Control+G Meta+G"
      aria-label=${W(h)}
      aria-labelledby=${W(y?`${y.id}-label ${y.id}-summaries`:void 0)}
      colspan=${Math.max(u??t-(e.level+1),1)}
      aria-colspan=${W(c&&c>1?c:void 0)}><span
        class="grouping-label"
        id=${W(y?`${y.id}-label`:void 0)}
        style="inset-inline-start: calc(var(--_port-inset-start, 0px) + ${e.level+1} * var(--_group-column-width) + var(--_cell-inline-padding))">${v===void 0?L`${_}${s?L` <span class="group-info" part="group-count">${s}</span>`:P}`:v}</span>${y?L`<span id="${y.id}-summaries" hidden>${y.text}</span>`:P}</td>
    ${f}
  `};class R${#e;#t;#n;constructor(t,n){this.#e=t,this.#t=[...n].sort((i,s)=>i.position-s.position),this.#n=Int32Array.from(this.#t,(i,s)=>Math.min(i.position,t.length)+s)}get base(){return this.#e}get offset(){return this.#e.offset}get length(){return this.#e.length+this.#t.length}get detailCount(){return this.#e.detailCount}#o(t){let n=0,i=this.#n.length;for(;n<i;){const s=Math.floor((n+i)/2);this.#n[s]<t?n=s+1:i=s}return n}#s(t){if(t<0)return t;let n=0,i=this.#t.length;for(;n<i;){const s=Math.floor((n+i)/2);Math.min(this.#t[s].position,this.#e.length)<=t?n=s+1:i=s}return t+n}at(t){const n=this.#o(t);return n<this.#n.length&&this.#n[n]===t?this.#t[n].row:this.#e.at(t-n)}slice(t=0,n=this.length){return og(this,t,n)}dataRowsBefore(t){const n=Math.min(Math.max(t,0),this.length),i=this.#o(n);return i+this.#e.dataRowsBefore(n-i)}indexOfKey(t){const n=this.#t.findIndex(i=>i.row.key===t);return n>=0?this.#n[n]:this.#s(this.#e.indexOfKey(t))}indexOfDataKey(t,n){const i=this.#t.findIndex(s=>s.rowKey===t);return i>=0?this.#n[i]:this.#s(this.#e.indexOfDataKey(t,n))}indexOfDetailKey(t,n){return this.#s(this.#e.indexOfDetailKey(t,n))}detailIndices(){return this.#e.detailIndices().map(t=>this.#s(t))}indexOfSkeletonKey(t){return this.#s(this.#e.indexOfSkeletonKey(t))}}const $$=e=>({top:Math.min(e.anchorRow,e.endRow),bottom:Math.max(e.anchorRow,e.endRow),left:Math.min(e.anchorCol,e.endCol),right:Math.max(e.anchorCol,e.endCol)}),$0=e=>e.anchorRow===e.endRow&&e.anchorCol===e.endCol,T$=(e,t)=>e.length===t.length&&e.every((n,i)=>{const s=t[i];return n.anchorRow===s.anchorRow&&n.anchorCol===s.anchorCol&&n.endRow===s.endRow&&n.endCol===s.endCol}),z$=(e,t,n)=>{let i=null;for(const s of e)t<s.top||t>s.bottom||n<s.left||n>s.right||(i??={top:!1,bottom:!1,start:!1,end:!1},i.top||=t===s.top,i.bottom||=t===s.bottom,i.start||=n===s.left,i.end||=n===s.right);return i},L$=e=>{const t=[...e].sort((i,s)=>i[0]-s[0]),n=[];for(const[i,s]of t){const a=n[n.length-1];a&&i<=a[1]+1?a[1]=Math.max(a[1],s):n.push([i,s])}return n},Rg=e=>{const t=[...new Set(e.flatMap(i=>[i.top,i.bottom+1]))].sort((i,s)=>i-s),n=[];for(let i=0;i<t.length-1;i++){const s=t[i],a=t[i+1]-1,c=e.filter(f=>f.top<=s&&f.bottom>=a).map(f=>[f.left,f.right]);if(!c.length)continue;const h=L$(c),u=n[n.length-1];u?.bottom===s-1&&O$(u.columns,h)?u.bottom=a:n.push({top:s,bottom:a,columns:h})}return n},O$=(e,t)=>e.length===t.length&&e.every((n,i)=>n[0]===t[i][0]&&n[1]===t[i][1]),D$=(e,t)=>{let n=0;for(const i of e){const s=i.columns.reduce((a,[c,h])=>a+h-c+1,0);n+=t(i.top,i.bottom)*s}return n},P$=e=>{const t=[];let n=[],i="",s=0,a=!1,c=!0;const h=()=>{n.push(i),i="",c=!0},u=()=>{h(),t.push(n),n=[]};for(;s<e.length;){const f=e[s];if(a){if(f==='"'){if(e[s+1]==='"'){i+='"',s+=2;continue}a=!1,s++;continue}i+=f,s++;continue}if(f==='"'&&c){a=!0,c=!1,s++;continue}c=!1,f==="	"?h():f==="\r"||f===`
`?(u(),f==="\r"&&e[s+1]===`
`&&s++):i+=f,s++}return(!c||i||n.length)&&u(),t},I$=/^'[=+\-@\t\r]/,F$=e=>I$.test(e)?e.slice(1):e,N$=(e,t,n,i)=>!e||!t?{rows:0,cols:0}:!(n===1&&i===1)&&(e===1&&t===1||n%e===0&&i%t===0)?{rows:n,cols:i}:{rows:e,cols:t},W$={year:"numeric",month:"numeric",day:"numeric"},B$={month:"long"},Mx=e=>String(e).padStart(2,"0"),G$=e=>e==null||e===""||typeof e=="number"&&Number.isNaN(e)||e instanceof Date&&Number.isNaN(e.getTime()),K$=(e,t,n)=>{const{dataType:i}=n,s=i==="date"||i==="datetime",a=new Map;let c=0;const h=ao(t);for(const v of e){const y=h(v);if(G$(y)){c++;continue}let _,E=y,$=y;if(s){const D=go(y);D?(_=Vy(D),E=`${D.getFullYear()}-${Mx(D.getMonth()+1)}-${Mx(D.getDate())}`,$=_):_=`?${xt(y)}`}else typeof y=="string"?_=La(y):_=typeof y=="object"?xt(y):y;const z=a.get(_);z?z.count++:a.set(_,{value:E,item:v,count:1,sortKey:$})}const u=Dd(n.language,s?"number":i),g=[...a.values()].sort((v,y)=>u(v.sortKey,y.sortKey)).map(v=>({value:v.value,text:s&&t.displayValue===void 0&&typeof t.format!="function"?q$(v.value,n.language):n.textOf(v.item,t),count:v.count}));return s?{values:g,tree:H$(g,n.language),blanks:c}:{values:g,blanks:c}},q$=(e,t)=>{const[n,i,s]=e.split("-").map(Number);return s?Qo(t,W$).format(new Date(n,i-1,s)):e},j$=(e,t,n)=>Qo(n,B$).format(new Date(e,t-1,1)),H$=(e,t)=>{const n=[];let i,s;for(const a of e){const c=a.value;if(!/^\d{4}-\d{2}-\d{2}$/.test(c))continue;const h=c.slice(0,4),u=c.slice(0,7);i?.key!==h&&(i={key:h,text:h,count:0,children:[]},n.push(i),s=void 0),s?.key!==u&&(s={key:u,text:j$(Number(h),Number(c.slice(5,7)),t),count:0,children:[]},i.children.push(s)),s.children.push(a),s.count+=a.count,i.count+=a.count}return n},U$=(e,{column:t,order:n},i,s)=>{const a=n==="desc",c=t.comparator;if(c){const u=ao(t),f=e.map(u),g=a?-1:1;return{compare:(v,y)=>(c(f[v],f[y],e[v],e[y])||0)*g}}let h=s?.get(t);return h||(h=uM(e.map(ao(t)),i,t.dataType),s?.set(t,h)),{ranks:h,descending:a}},V$=(e,t,n)=>{const i=e.length;let s=0;for(const f of t)f>s&&(s=f);const a=n?-1:1,c=n?s:0,h=new Int32Array(s+2);for(let f=0;f<i;f++)h[c+a*t[e[f]]+1]++;for(let f=1;f<h.length;f++)h[f]+=h[f-1];const u=new Int32Array(i);for(let f=0;f<i;f++){const g=e[f];u[h[c+a*t[g]]++]=g}return u},gz=(e,t,n,i)=>{const s=$g(e,t,n,i);if(!s)return e;const a=new Array(s.length);for(let c=0;c<s.length;c++)a[c]=e[s[c]];return a},$g=(e,t,n,i)=>{if(!t.length||e.length<2)return null;const s=t.map(c=>U$(e,c,n,i));let a=new Int32Array(e.length);for(let c=0;c<a.length;c++)a[c]=c;if(s.every(c=>"ranks"in c))for(const c of[...s].reverse())a=V$(a,c.ranks,c.descending);else{const c=s.map(h=>"compare"in h?h.compare:(u,f)=>(h.ranks[u]-h.ranks[f])*(h.descending?-1:1));a.sort((h,u)=>{for(const f of c){const g=f(h,u);if(g)return g}return h-u})}return a},fu=1,vt={columns:2e3,nameLength:1e3,keys:1e6,keyLength:1e3,groups:1e5,groupLevels:64,textLength:1e4,filterDepth:32,filterNodes:1e4,width:1e5,pageIndex:1e9,pageSize:1e5},oa=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),He=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,hi=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)&&e[t]!==void 0,Z$=e=>typeof e=="string"&&e.length>0&&e.length<=vt.nameLength,X$=e=>typeof e=="string"&&e.length<=vt.keyLength||typeof e=="number"&&Number.isFinite(e),mu=(e,t)=>typeof e=="number"&&Number.isInteger(e)&&e>=0&&e<=t,Kh=e=>e===!0||e===!1?e:e===null?null:void 0;class T0 extends Error{}const Be=e=>{throw new T0(e)},Ql=(e,t)=>{if(!Array.isArray(e)||e.length>vt.keys)return Be(`"${t}" must be an array of at most ${vt.keys} keys`);const n=[];for(const i of e){if(!X$(i))return Be(`"${t}" has a key that is not a string or a finite number`);n.push(i)}return n},Y$=e=>{if(!oa(e)||!Z$(He(e,"name")))return Be('every column needs a "name"');const t={name:He(e,"name")},n=He(e,"width"),i=He(e,"visible"),s=He(e,"fixed"),a=He(e,"groupIndex"),c=He(e,"sortOrder"),h=He(e,"sortIndex");return n===null||typeof n=="number"&&Number.isFinite(n)&&n>=0&&n<=vt.width?t.width=n:n!==void 0&&Be(`column "${t.name}": invalid "width"`),i===!0||i===!1?t.visible=i:i!==void 0&&Be(`column "${t.name}": invalid "visible"`),s==="start"||s==="end"||s===null?t.fixed=s:s!==void 0&&Be(`column "${t.name}": invalid "fixed"`),a===null||mu(a,vt.columns)?t.groupIndex=a:a!==void 0&&Be(`column "${t.name}": invalid "groupIndex"`),c==="asc"||c==="desc"||c===null?t.sortOrder=c:c!==void 0&&Be(`column "${t.name}": invalid "sortOrder"`),h===null||mu(h,vt.columns)?t.sortIndex=h:h!==void 0&&Be(`column "${t.name}": invalid "sortIndex"`),t},J$=e=>{if(!Array.isArray(e)||e.length>vt.columns)return Be(`"columns" must be an array of at most ${vt.columns} columns`);const t=new Set,n=[];for(const i of e){const s=Y$(i);t.has(s.name)||(t.add(s.name),n.push(s))}return n},Q$=e=>{if(e===null)return null;let t=0;const n=(i,s)=>++t>vt.filterNodes||s>vt.filterDepth?Be('"filterValue" is too large or too deep'):Array.isArray(i)?i.map(a=>n(a,s+1)):typeof i=="string"?i.length<=vt.textLength?i:Be('"filterValue" has a text too long'):i===null||typeof i=="boolean"||typeof i=="number"&&Number.isFinite(i)?i:i instanceof Date&&!Number.isNaN(i.getTime())?i.toISOString():Be('"filterValue" may only hold arrays, texts, finite numbers, booleans, dates and null');return Array.isArray(e)?n(e,0):Be('"filterValue" must be an array or null')},Rx=e=>{if(!Array.isArray(e)||!e.length||e.length>vt.groupLevels)return Be("a group path must be a non-empty array");for(const t of e)if(!(t===null||typeof t=="boolean"||typeof t=="number"&&Number.isFinite(t)||typeof t=="string"&&t.length<=vt.textLength))return Be("a group path may only hold texts, finite numbers, booleans and null");return[...e]},eT=e=>{if(!oa(e))return Be('"groupExpansion" must be an object');const t=Kh(He(e,"all")),n=He(e,"levels")??[],i=He(e,"expanded")??[],s=He(e,"collapsed")??[];return t===void 0&&hi(e,"all")&&Be('"groupExpansion.all" must be a boolean or null'),(!Array.isArray(n)||n.length>vt.groupLevels||n.some(a=>Kh(a)===void 0))&&Be('"groupExpansion.levels" must be an array of booleans or null'),(!Array.isArray(i)||!Array.isArray(s)||i.length+s.length>vt.groups)&&Be(`"groupExpansion" may list at most ${vt.groups} groups`),{all:t??null,levels:n.map(a=>Kh(a)??null),expanded:i.map(Rx),collapsed:s.map(Rx)}},tT=e=>oa(e)?{expanded:Ql(He(e,"expanded")??[],"rowExpansion.expanded"),collapsed:Ql(He(e,"collapsed")??[],"rowExpansion.collapsed")}:Be('"rowExpansion" must be an object'),nT=e=>{if(!oa(e))return Be('"nodeExpansion" must be an object');const t=Kh(He(e,"all")??null);return t===void 0&&Be('"nodeExpansion.all" must be a boolean or null'),{all:t??null,expanded:Ql(He(e,"expanded")??[],"nodeExpansion.expanded"),collapsed:Ql(He(e,"collapsed")??[],"nodeExpansion.collapsed")}},iT=new Map,z0=e=>{try{if(!oa(e))return Be("the state must be an object");let t=e,n=He(t,"version");for(;n!==fu;){const s=typeof n=="number"?iT.get(n):void 0;if(!s)return Be(`unknown state version ${JSON.stringify(n)??"undefined"}`);if(t=s(t),!oa(t))return Be("migration failed");const a=He(t,"version");if(typeof a!="number"||a<=n)return Be("migration failed");n=a}const i={version:fu};if(hi(t,"columns")&&(i.columns=J$(He(t,"columns"))),hi(t,"filterValue")&&(i.filterValue=Q$(He(t,"filterValue"))),hi(t,"searchText")){const s=He(t,"searchText");i.searchText=typeof s=="string"&&s.length<=vt.textLength?s:Be('"searchText" must be a text')}if(hi(t,"groupExpansion")&&(i.groupExpansion=eT(He(t,"groupExpansion"))),hi(t,"selectedKeys")&&(i.selectedKeys=Ql(He(t,"selectedKeys"),"selectedKeys")),hi(t,"rowExpansion")&&(i.rowExpansion=tT(He(t,"rowExpansion"))),hi(t,"nodeExpansion")&&(i.nodeExpansion=nT(He(t,"nodeExpansion"))),hi(t,"pageIndex")){const s=He(t,"pageIndex");i.pageIndex=mu(s,vt.pageIndex)?s:Be('"pageIndex" must be a non-negative integer')}if(hi(t,"pageSize")){const s=He(t,"pageSize");i.pageSize=mu(s,vt.pageSize)&&s>0?s:Be('"pageSize" must be a positive integer')}return{state:i}}catch(t){return t instanceof T0?{error:t.message}:{error:"the state could not be read"}}},oT=e=>e==null?null:e instanceof Date?Number.isNaN(e.getTime())?null:e.toISOString():typeof e=="number"?Number.isFinite(e)?e:void 0:typeof e=="string"||typeof e=="boolean"?e:void 0,sT=(e,t,n)=>{if(!(e==null||e==="")){if(e==="local"||e==="session"){if(!t){n(`state-storage="${e}" needs a "state-storage-key"; state storing is off.`);return}return{kind:e,key:t}}if(typeof e=="object"){const i=e;if(typeof i.load=="function"&&typeof i.save=="function")return{kind:"custom",storage:e}}n('"stateStorage" must be "local", "session" or an object with load() and save(); state storing is off.')}},L0=e=>{if(typeof window>"u")return;const t=e==="local"?window.localStorage:window.sessionStorage;return t||void 0},rT=(e,t)=>{let n;try{n=L0(e)?.getItem(t)??null}catch(i){return{error:`could not read the ${e} storage (${String(i)})`}}if(n===null)return{value:null};try{return{value:JSON.parse(n)}}catch{return{error:"the saved state is not valid JSON"}}},aT=(e,t,n)=>{try{L0(e)?.setItem(t,n);return}catch(i){return`could not write the ${e} storage (${String(i)})`}};class Fh extends Map{constructor(){super(...arguments),this.version=0}set(t,n){return(!super.has(t)||super.get(t)!==n)&&this.version++,super.set(t,n)}delete(t){const n=super.delete(t);return n&&this.version++,n}clear(){this.size&&this.version++,super.clear()}}class lT extends Set{constructor(){super(...arguments),this.version=0}add(t){return super.has(t)||this.version++,super.add(t)}delete(t){const n=super.delete(t);return n&&this.version++,n}clear(){this.size&&this.version++,super.clear()}}var cT=Object.defineProperty,hT=Object.getOwnPropertyDescriptor,O0=e=>{throw TypeError(e)},_e=(e,t,n,i)=>{for(var s=i>1?void 0:i?hT(t,n):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(s=(i?c(t,n,s):c(s))||s);return i&&s&&cT(t,n,s),s},Tg=(e,t,n)=>t.has(e)||O0("Cannot "+n),ui=(e,t,n)=>(Tg(e,t,"read from private field"),n?n.call(e):t.get(e)),Cr=(e,t,n)=>t.has(e)?O0("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),$f=(e,t,n,i)=>(Tg(e,t,"write to private field"),t.set(e,n),n),_r=(e,t,n)=>(Tg(e,t,"access private method"),n),gu,kr,fl,ml,Hf,So,D0,Sr;const Wi=nE,$x={"data-type":"type"},Tx=e=>!!e&&typeof e._columnChanged=="function",Uf=e=>e instanceof Element&&e.localName==="u-grid-column",uT=(e,t)=>e.length===t.length&&e.every((n,i)=>n===t[i]),dT={fromAttribute:e=>e==="start"||e==="end"?e:null};let xe=class extends Lr{constructor(){super(...arguments),Cr(this,So),Cr(this,gu,new Set),Cr(this,kr,Object.freeze([])),Cr(this,fl,null),Cr(this,ml,null),this.path="",this.name="",this.renderer=null,this.headerRenderer=null,this.groupRenderer=null,this.dataType=null,this.format=null,this.alignment=null,this.valueGetter=null,this.displayValue=null,this.booleanDisplay=null,this.trueText=null,this.falseText=null,this.wrap=!1,this.headerWrap=null,this.minWidth=null,this.emptyText=null,this.maxWidth=null,this.hidingPriority=null,this.resizable=null,this.fixed=null,this.visible=null,this.showInChooser=null,this.headerMenu=null,this.sortable=null,this.sortOrder=null,this.sortIndex=null,this.comparator=null,this.groupValueGetter=null,this.groupable=null,this.filterable=null,this.exportable=null,this.filterOperations=null,this.defaultFilterOperation=null,this.editable=null,this.editorRenderer=null,this.validationRules=null,this.valueSetter=null,Cr(this,Hf,()=>_r(this,So,Sr).call(this,"columns"))}static get observedAttributes(){return[...super.observedAttributes,...Object.keys($x)]}get width(){return ui(this,fl)}set width(e){ui(this,fl)!==e&&($f(this,fl,e),_r(this,So,Sr).call(this,"width"))}get groupIndex(){return ui(this,ml)}set groupIndex(e){ui(this,ml)!==e&&($f(this,ml,e),_r(this,So,Sr).call(this,"groupIndex"))}attributeChangedCallback(e,t,n){const i=$x[e];if(i){_r(this,So,D0).call(this,`${e} attribute`,`${i} attribute`),super.attributeChangedCallback(i,t,n);return}super.attributeChangedCallback(e,t,n)}willUpdate(e){this.hasUpdated&&(e.has("path")||e.has("valueGetter")||e.has("dataType")||e.has("comparator")||e.has("groupValueGetter")?_r(this,So,Sr).call(this,"value"):e.size&&_r(this,So,Sr).call(this,"display"))}get columns(){const e=Array.from(this.children).filter(Uf);return uT(e,ui(this,kr))||$f(this,kr,Object.freeze(e)),ui(this,kr).length?ui(this,kr):null}get label(){if(!this.columns)return(this.textContent??"").trim();let e="";for(const t of this.childNodes)Uf(t)||(e+=t.textContent??"");return e.trim()}render(){return L`<slot @slotchange=${ui(this,Hf)}></slot>`}};gu=new WeakMap;kr=new WeakMap;fl=new WeakMap;ml=new WeakMap;Hf=new WeakMap;So=new WeakSet;D0=function(e,t){ui(this,gu).has(e)||(ui(this,gu).add(e),console.warn(`<u-grid-column>: "${e}" is deprecated, use "${t}" instead.`))};Sr=function(e){let t=this.parentElement;for(;t&&!Tx(t)&&Uf(t);)t=t.parentElement;Tx(t)&&t._columnChanged(this,e)};_e([G({type:Number})],xe.prototype,"width",1);_e([G({type:Number,attribute:"group-index"})],xe.prototype,"groupIndex",1);_e([G()],xe.prototype,"path",2);_e([G()],xe.prototype,"name",2);_e([G({attribute:!1})],xe.prototype,"renderer",2);_e([G({attribute:!1})],xe.prototype,"headerRenderer",2);_e([G({attribute:!1})],xe.prototype,"groupRenderer",2);_e([G({attribute:"type"})],xe.prototype,"dataType",2);_e([G({attribute:!1})],xe.prototype,"format",2);_e([G()],xe.prototype,"alignment",2);_e([G({attribute:!1})],xe.prototype,"valueGetter",2);_e([G({attribute:!1})],xe.prototype,"displayValue",2);_e([G({attribute:"boolean-display"})],xe.prototype,"booleanDisplay",2);_e([G({attribute:"true-text"})],xe.prototype,"trueText",2);_e([G({attribute:"false-text"})],xe.prototype,"falseText",2);_e([G({type:Boolean,converter:De(!1)})],xe.prototype,"wrap",2);_e([G({converter:Wi,attribute:"header-wrap"})],xe.prototype,"headerWrap",2);_e([G({type:Number,attribute:"min-width"})],xe.prototype,"minWidth",2);_e([G({attribute:"empty-text"})],xe.prototype,"emptyText",2);_e([G({type:Number,attribute:"max-width"})],xe.prototype,"maxWidth",2);_e([G({converter:iE,attribute:"hiding-priority"})],xe.prototype,"hidingPriority",2);_e([G({converter:Wi})],xe.prototype,"resizable",2);_e([G({converter:dT})],xe.prototype,"fixed",2);_e([G({converter:Wi})],xe.prototype,"visible",2);_e([G({converter:Wi,attribute:"show-in-chooser"})],xe.prototype,"showInChooser",2);_e([G({converter:Wi,attribute:"header-menu"})],xe.prototype,"headerMenu",2);_e([G({converter:Wi})],xe.prototype,"sortable",2);_e([G({attribute:"sort-order"})],xe.prototype,"sortOrder",2);_e([G({type:Number,attribute:"sort-index"})],xe.prototype,"sortIndex",2);_e([G({attribute:!1})],xe.prototype,"comparator",2);_e([G({attribute:!1})],xe.prototype,"groupValueGetter",2);_e([G({converter:Wi})],xe.prototype,"groupable",2);_e([G({converter:Wi})],xe.prototype,"filterable",2);_e([G({converter:Wi})],xe.prototype,"exportable",2);_e([G({converter:sE,attribute:"filter-operations"})],xe.prototype,"filterOperations",2);_e([G({converter:oE,attribute:"default-filter-operation"})],xe.prototype,"defaultFilterOperation",2);_e([G({converter:Wi})],xe.prototype,"editable",2);_e([G({attribute:!1})],xe.prototype,"editorRenderer",2);_e([G({attribute:!1})],xe.prototype,"validationRules",2);_e([G({attribute:!1})],xe.prototype,"valueSetter",2);xe=_e([Ux("u-grid-column")],xe);var pT=Object.defineProperty,fT=Object.getOwnPropertyDescriptor,P0=e=>{throw TypeError(e)},V=(e,t,n,i)=>{for(var s=i>1?void 0:i?fT(t,n):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(s=(i?c(t,n,s):c(s))||s);return i&&s&&pT(t,n,s),s},zg=(e,t,n)=>t.has(e)||P0("Cannot "+n),o=(e,t,n)=>(zg(e,t,"read from private field"),n?n.call(e):t.get(e)),S=(e,t,n)=>t.has(e)?P0("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),w=(e,t,n,i)=>(zg(e,t,"write to private field"),t.set(e,n),n),l=(e,t,n)=>(zg(e,t,"access private method"),n),zi=(e,t,n,i)=>({set _(s){w(e,t,s)},get _(){return o(e,t,i)}}),bt,Ko,Fd,Bs,Gs,vu,Xs,sa,r,ri,I0,Lg,Vf,lo,Rt,Nd,ec,Wd,Io,El,st,Z,on,tc,co,Ae,Ji,Ks,Ir,Kt,bu,Qe,Ys,Ui,ra,Fo,qs,wu,No,Zt,_i,Ml,xu,Gt,be,et,nc,Fr,yu,aa,ic,Nr,Es,Cu,Fn,Js,At,Ln,Ai,Mt,Ce,qc,Og,Ia,Dg,Qs,F0,Bi,Fa,Pg,N0,_u,W0,B0,G0,Na,Nn,Li,ki,jc,K0,Zf,q0,Ig,j0,Xf,H0,Bd,Au,U0,Hc,V0,Gd,Z0,Kd,er,Fg,X0,Ng,Wa,Y0,lt,St,ai,Wn,Et,Wr,ot,It,ho,gi,vn,Oi,ae,$t,kt,Me,ku,Xn,di,Hi,qh,un,Ba,ts,fr,Zn,yt,Yt,ft,ns,Rl,Er,gl,Ie,Ne,js,tr,Wo,Un,zo,oc,vi,sc,qo,Ct,_t,an,bn,Rn,la,qd,$l,Tl,bi,yn,Nt,ca,zl,ha,Xe,Si,jh,qe,ni,Br,Su,wi,Ll,Gr,ua,da,Eu,Mu,ie,jo,Wg,pt,_n,qt,Bg,Ue,Uc,Ga,ct,Le,xi,Fe,rc,ac,je,ln,Lo,pa,dn,tn,$n,jd,Hd,Ud,Vd,fa,Zd,Xd,Yd,ma,mr,Jd,lc,Qd,ga,Ge,gr,nr,Vc,Gg,cc,Hn,Ru,Eo,$u,vl,Kg,ir,B,tt,Mo,Ps,Rr,Ho,Jt,Tu,Kr,Is,zu,hc,uc,Vi,or,Qi,va,dc,pc,Ms,ep,qg,Hh,tp,Ei,fc,J0,Lu,Q0,jg,eC,tC,nC,iC,Hg,Zc,is,Yf,Ou,Uh,oC,Ug,Du,sC,Pu,Iu,sr,ve,ht,Yn,eo,rC,Xc,qr,Bo,Ro,os,Vn,Ke,ut,ks,ne,Dt,yi,Fs,Tn,Ci,mc,Vh,Qn,Jn,np,aC,lC,ip,cC,op,to,sp,gc,Vg,hC,uC,Jf,jr,Zg,Qf,Yc,rr,Xg,dC,Yg,Jg,rp,Fu,Qg,pC,em,fC,se,he,cn,ev,ap,On,ss,hn,Jc,uo,pi,fi,rs,Qc,ei,Nu,Pt,vc,dt,wt,mC,lp,Di,Lt,eh,Bn,tv,gC,nv,pn,tm,gs,iv,Zh,ov,sv,Wu,vC,rv,nm,bC,sn,ba,th,Ka,as,wC,cp,av,Bu,lv,cv,bc,im,hp,vo,xC,nh,hv,uv,yC,Gu,CC,om,Ku,_C,qa,sm,AC,kC,SC,EC,Ol,MC,RC,up,rm,qu,ju,am,Hu,lm,dp,Dl,ke,Qt,Gn,Wt,Tt,pp,Zi,Uo,zn,Hr,Xi,wa,mn,Uu,wc,Ft,ja,Pi,Hs,no,bl,xc,$C,dv,Kn,fp,TC,cm,zC,LC,Ur,OC,DC,pv,fv,PC,IC,mp,Vo,FC,mv,gv,hm,um,ih,Vu,gp,vv,NC,WC,BC,GC,Zu,Xu,KC,Yu,vp,bv,qC,Mr,Xh,$r,jC,Tr,kn,Zo,wv,HC,UC,dm,VC,ZC,XC,YC,JC,xv,QC,e_,xa,bp,t_,yv,wl,Cv,Ju,n_,i_,En,o_,Cn,oh,Rs,_v,wp,s_,Re,Av,ii,po,r_,kv,Ns,ar,yc,Sv,a_,pm,l_,fm,Ev,c_,Oo,mm,Qu,ed,Mv,h_,u_,d_,Rv,$v,p_,Tv,Pl,f_,Xo,xp,ls,zv,Lv,gm,Vr,ze,td,m_,g_,v_,nd,id,Ov,od,vm,sd,Zr,rd,jt,Il,ad,bm,Xr,ya,Ca,cs,Dv,Pv,b_,w_,Iv,x_,Yh,$s,Mn,ld,lr,Fv,wm,Nv,Wv,hs,zr,cd,Mi,yp,Bv,Cp,Cc,en,Ha,_p,Gv,y_,Ua,Ap,Dn,Kv,hd,_c,xm,Fl,wn,Nl,Wl,qv,sh,te,jv,ym,Ye,rh,C_,__,pe,us,qn,bo,oi,gn,ud,cr,Cm,A_,Jh,dd,kp,ds,pd,Qh,Sp,Je,k_,Yr,Ac,ah,S_,_a,Oe,fd,E_,M_,R_,rn,si,_m,$_,Go,Yi,Am,md,Yo,hr,kc,Ws,gd,vd,bd,Ts,T_,vr,z_,Hv,ps,ur,Uv,Sc,io,Pn,wd,xd,L_,O_,km,D_,P_,Vv,I_,yd,Sm,Em,Mm,Ep,F_,N_,W_,B_,G_,Rm,K_,Mp,q_,Zv,Cd,Rp,j_,H_,$p,Xv,Tp,Yv,U_,Jv,V_,Z_,X_,$m,Y_,J_,Q_,Qv,eA,tA,nA,eb,Tm,iA,oA,zm,sA,rA,aA,tb,nb,lA,lh,ib,ob,cA,hA,Lm,uA,dA,pA,fA,zp,ch,mA,gA,sb,rb,vA,bA,ab,lb,Om,cb,wA,hh,hb,xA,yA,_d,wo,CA,Aa,_A,uh,Lp,Op,so,Dm,AA,Dp,gt,Ad,Pp,Ip,ub,Us,db,oo,kA,ka,Ec,Mc,Sa,Jr,dh,Rc,ph,fs,$c,pb,fb,fo,Fp,Do,mb,SA,Pm,Im,EA,Tc,MA,RA,gb,vb,Np,$A,Wp,TA,bb,zA,LA,OA,DA,wb,zc,xb,Ea,Va,yb,Bp,Za,Fm,PA,IA,FA,Gp,Cb,_b,NA,WA,BA,Ab,GA,KA,qA,jA,HA,UA,VA,ZA,XA,YA,JA,Nm,Kp,Xa,kd,Wm,Lc,Oc,qp,Bm,QA,xl,ek,Gm,tk;const vz=Sg,zx=["csv","xlsx","pdf"],mT={csv:"CSV",xlsx:"Excel",pdf:"PDF"},gT={csv:"exportSelectedCsv",xlsx:"exportSelectedXlsx",pdf:"exportSelectedPdf"},Ii=32,nk=48,Km=40,vs="selection",mo="detail-toggle",qm="a[href], button, input, select, textarea, [contenteditable], [tabindex]",fh=Object.freeze([]),ik=Symbol("skip-paste"),Dc=2e5,Lx=500,Ao=32,ok=e=>e.ctrlKey&&!e.metaKey&&e.button===0&&typeof navigator<"u"&&/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent),sk=(e,t)=>Object.freeze({startRowIndex:e.anchorRow,endRowIndex:e.endRow,startColumn:t[e.anchorCol],endColumn:t[e.endCol]}),vT=/[\p{Sc}%\s']/gu,bT=/^\p{L}+|\p{L}+$/gu,wT=(e,t)=>{const n=If(e,t);if(!(n instanceof za)||!/\d/.test(e))return n;const i=e.includes("%"),s=e.replace(vT,"").replace(bT,""),a=If(s,t);return typeof a!="number"?n:i?a/100:a},xT=(e,t,n)=>{const i=e.trim();if(!i||/^\d{4,}-\d{2}-\d{2}(T\d{2}:\d{2})?$/.test(i))return i;const s=u=>String(u).padStart(2,"0"),a=u=>`${String(u.getFullYear()).padStart(4,"0")}-${s(u.getMonth()+1)}-${s(u.getDate())}`+(n?`T${s(u.getHours())}:${s(u.getMinutes())}`:""),c=i.match(/\d+/g)?.map(Number)??[];if(c.length>=3){const u=new Intl.DateTimeFormat(t,{year:"numeric",month:"numeric",day:"numeric"}).formatToParts(new Date(2001,10,23)).map(I=>I.type).filter(I=>I==="year"||I==="month"||I==="day"),f={};u.forEach((I,j)=>{f[I]=c[j]});const{year:g,month:v,day:y}=f,_=g<100?2e3+g:g;let E=c[3]??0;const $=c[4]??0;/\bp\.?\s?m\.?/i.test(i)&&E<12?E+=12:/\ba\.?\s?m\.?/i.test(i)&&E===12&&(E=0);const D=new Date(_,v-1,y,E,$);if(!Number.isNaN(D.getTime())&&D.getMonth()===v-1)return a(D)}const h=Date.parse(i);return Number.isNaN(h)?i:a(new Date(h))};let yT=0;const rk=1e3,Ma=e=>!!e&&typeof e.then=="function",kb=e=>({type:e.type,removedFrom:e.removedFrom,data:Ti(e.data),modified:new Set(e.modified),unparsed:new Map(e.unparsed),errors:new Map(e.errors),rowError:e.rowError}),Sb=(e,t,n)=>{if(!n){e.delete(t.rowKey);return}t.type=n.type,t.removedFrom=n.removedFrom,t.data=Ti(n.data),t.modified.clear(),n.modified.forEach(i=>t.modified.add(i)),t.unparsed.clear(),n.unparsed.forEach((i,s)=>t.unparsed.set(s,i)),t.errors.clear(),n.errors.forEach((i,s)=>t.errors.set(s,i)),t.errorRules.clear(),t.rowError=n.rowError,e.touch(t)},CT=(e,t)=>{const n=t.split("."),i=[];let s=e;for(const a of n.slice(0,-1)){i.push(s);const c=s[a];if(!c||typeof c!="object")return;s=c}delete s[n[n.length-1]];for(let a=i.length-1;a>=0;a--){const c=i[a][n[a]];if(Object.keys(c).length)break;delete i[a][n[a]]}},_T=(e,t,n,i)=>{if(n.valueSetter||!n.path){Sb(e,t,i??{...kb(t),data:{},modified:new Set,unparsed:new Map,errors:new Map}),e.prune(t);return}i?.modified.has(n)?mg(t.data,n.path,Pc(i.data,n.path)):(CT(t.data,n.path),t.modified.delete(n));const s=i?.unparsed.get(n),a=i?.errors.get(n);s?t.unparsed.set(n,s):t.unparsed.delete(n),a?t.errors.set(n,a):t.errors.delete(n),e.touch(t),e.prune(t)},AT=(e,t)=>Object.is(e,t)||e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime()||(e==null||e==="")&&(t==null||t===""),bs="command",Ra=e=>typeof e=="object"?e:null,Sd=new Int32Array(0),kT="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z",ak="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z",ST="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z",ET="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z",Ox=(e,t)=>L`<svg
  class="adaptive-mark ${e}"
  xmlns="http://www.w3.org/2000/svg"
  height="1em"
  width="1em"
  viewBox="0 -960 960 960"
  fill="currentColor"
  aria-hidden="true"><path d=${t}/></svg>`,MT=30,lk=300,RT=1e3,Dx={rowheight:"row-height",showrowlines:"show-row-lines",showcolumnlines:"show-column-lines"},Eb=(e,t)=>e&&t.replace(/\u00A0$/,"")===e&&!t.endsWith(" ")?`${e} `:e,$T=e=>{const t=[{type:"conjunction",style:"long"},{type:"unit",style:"short"}];for(const n of t)try{const i=new Intl.ListFormat(e,n).format(["","",""]),s=/^\s*\p{P}\s*/u.exec(i.slice(i.indexOf("")+1,i.indexOf("")));if(s)return s[0]}catch{}return", "},Px=(e,t)=>e.length===t.length&&e.every((n,i)=>{const s=t[i];return n.item===s.item&&n.spec.column===s.spec.column&&n.spec.type===s.spec.type&&n.spec.dataType===s.spec.dataType}),TT=e=>e.column===null?`gap-${e.start}`:typeof e.column=="object"?zt(e.column):e.column,zT=(e,t)=>{const n=[];for(let i=0;i<Math.min(e.length,t.length)&&e[i]===t[i];i++)n.push(e[i]);return n},LT=50,OT=150,Ed=e=>{const t=typeof window>"u"?1:window.devicePixelRatio||1;return Math.round(e*t)/t},DT=1920,PT=150,IT=24,FT=176,NT=1e3,WT=3,BT=160,Md=e=>e==="start"||e==="end"?e:null,GT=e=>e==="start"?0:e==="end"?2:1,KT=()=>{if(typeof document>"u")return;const e=document.documentElement.lang;return e||document.querySelector('meta[http-equiv="content-language" i]')?.getAttribute("content")?.split(",")[0].trim()||void 0},qT=()=>typeof navigator>"u"?void 0:navigator.language||void 0,ro=(e,t)=>e.length===t.length&&e.every((n,i)=>n===t[i]);let jT=0;const Ix=new WeakMap,Tf=e=>{if(e!==null&&(typeof e=="object"||typeof e=="function")){let t=Ix.get(e);return t===void 0&&(t=jT++,Ix.set(e,t)),`o${t}`}return`${typeof e}:${String(e)}`};let HT=0;const Fx=new WeakMap,zt=e=>{let t=Fx.get(e);return t===void 0&&(t=HT++,Fx.set(e,t)),t},UT="M240-240v-480h80v480h-80Zm440 0L440-480l240-240 56 56-184 184 184 184-56 56Z",VT="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z",ZT="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z",XT="m280-240-56-56 184-184-184-184 56-56 240 240-240 240Zm360 0v-480h80v480h-80Z",YT="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z",JT="M200-440v-80h560v80H200Z",QT="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z",ez=L`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" height="24" fill="currentColor" aria-hidden="true"><path d=${QT}/></svg>`,tz=e=>typeof e.name=="string"&&e.name||typeof e.path=="string"&&e.path||void 0,zf=e=>typeof e=="string"||typeof e=="number"&&Number.isFinite(e),ck=e=>Array.isArray(e)?e.map(ck):e instanceof Date?Number.isNaN(e.getTime())?null:e.toISOString():e,nz=new Set(["u-grid-sort-change","u-grid-group-change","u-grid-group-expansion-change","u-grid-filter-change","u-grid-column-resize","u-grid-column-visibility-change","u-grid-column-fixed-change","u-grid-column-reorder","u-grid-selection-change","u-grid-page-change","u-grid-row-expansion-change","u-grid-node-expansion-change"]),iz=500,In=e=>!e.isGroup&&!e.isFooter&&!e.isDetail,$e=e=>!!e&&!e.isGroup&&!e.isFooter&&!e.isDetail&&!e.skeleton&&!e.fixed,Fi=e=>!!e&&!e.isGroup&&!e.isFooter&&!e.isDetail&&!!e.fixed,oz=(e,t,n)=>{const i=e.indexOfDetailKey(t,n);return i>=0?i:e.indexOfDataKey(t,n)},mh=e=>!!e&&!!e.isDetail,sz=10,Nx=new WeakSet,rz=e=>e==null||e===P||typeof e=="string"||typeof e=="object"&&("_$litType$"in e||typeof e.nodeType=="number"),az=["sortColumnAscending","sortColumnDescending","clearColumnSorting","fixColumn","autoSizeAllColumns","openColumnChooser","resetColumns"];let U=class extends Lr{constructor(){super(...arguments),S(this,r),S(this,bt,[]),this.autoExpandGroups=!1,S(this,Ko,null),this.noDataRenderer=null,this.loading=!1,this.headerWrap=!1,S(this,Fd,sz),this.detailRenderer=null,this.autoExpandRows=!1,this.autoHideColumns=!1,S(this,Bs,[]),S(this,Gs,[]),S(this,vu),this.rowRenderer=null,S(this,Xs,new Map),S(this,sa,0),S(this,Rt,new lT),S(this,Nd,new WeakMap),S(this,ec,new ql(256)),S(this,Wd,0),S(this,Io),S(this,El,new Set),S(this,st,null),S(this,Z,e=>e),S(this,on,e=>e),S(this,tc,!1),S(this,co,e=>o(this,st)?hE(o(this,Z).call(this,e)):Tf(e)),S(this,Ae,null),this.remoteOperations=!1,this.reshapeOnChanges=!1,S(this,Ji,!1),S(this,Ks,!1),S(this,Ir,!1),S(this,Kt,ey),S(this,bu),S(this,Qe,new DE({request:(e,t)=>l(this,r,Dv).call(this,e,t),changed:()=>this.requestUpdate()})),S(this,Ys),S(this,Ui),S(this,ra,0),S(this,Fo),S(this,qs),S(this,wu,-1),S(this,No),S(this,Zt),S(this,_i,!1),S(this,Ml,!1),S(this,xu,new Set),this.treeMode="none",this.childrenExpr="children",this.parentKeyExpr=null,this.rootParentKey=null,this.hasChildrenExpr=null,this.treeColumn=null,this.treeFilterMode="with-ancestors",this.autoExpandNodes=!1,this.recursiveSelection=!1,S(this,be,new a$),S(this,et),S(this,nc),S(this,Fr,!0),S(this,yu,""),S(this,aa,new Map),S(this,ic),S(this,Nr),S(this,Es),S(this,Cu,new Set),S(this,Fn,[]),S(this,Js,new Set),S(this,At,new Map),S(this,Ln),S(this,Ai),S(this,Pg,e=>{const t=o(this,be).index;if(!t)return!1;const n=o(this,Z).call(this,t.nodes[e]);return l(this,r,Fa).call(this,e)?o(this,At).has(n)||o(this,Ln)?.keys.includes(n)?!0:o(this,be).exceptions.has(n)&&!o(this,be).defaultExpanded(this.autoExpandNodes)?(l(this,r,Ig).call(this,n),!0):!1:o(this,be).isExpanded(n,this.autoExpandNodes)}),S(this,_u),S(this,Hc),this.paging=!1,this.pageSize=20,S(this,lt,0),this.pageSizeOptions=[10,20,50,100],this.scrollMode="virtual",this.scrollContainer=null,this.scrollContainerElement=null,this.scrollContainerAxis="block",S(this,St),S(this,ai,new ea(Tf)),S(this,Wn,0),S(this,Et,[]),S(this,ot,[]),S(this,It),S(this,ho,null),S(this,gi,!0),S(this,vn,new Map),S(this,Oi,[]),S(this,ae,new ea(Tf)),S(this,$t,!0),S(this,kt,!0),S(this,Me,!0),S(this,ku),S(this,Xn,new Map),S(this,di,new Map),S(this,Hi,!1),S(this,qh,!1),S(this,un,new Fh),S(this,Ba,0),S(this,ts,[]),S(this,fr),S(this,Zn,!0),S(this,yt,!0),S(this,Yt,[]),S(this,ft,[]),S(this,ns,[]),S(this,Rl),S(this,Er),S(this,gl,[]),S(this,Ie,Pf([])),this._nativeColumnMap=new WeakMap,this._groupColumns=[],this._regularColumns=[],this._visibleColumns=[],this._shownColumns=[],S(this,Ne,[]),S(this,js,[]),S(this,tr),S(this,Wo),S(this,Un,!0),S(this,zo),S(this,oc,1),S(this,vi),S(this,sc),S(this,qo),S(this,Ct,new Fh),S(this,_t,new Fh),S(this,an,new Fh),S(this,bn,new Map),S(this,Rn,new Map),S(this,la),S(this,qd,0),S(this,$l,{first:0,last:-1}),S(this,Tl,0),S(this,bi,0),S(this,yn,0),S(this,Nt,1),S(this,ca,[]),S(this,zl),S(this,ha,new Map),S(this,Xe,!0),S(this,Si,!0),S(this,jh,!1),this.sortMode="single",S(this,qe,[]),S(this,ni,""),S(this,Br,!1),S(this,wi,e=>this._groupColumns.includes(e)),this.rowHeight=48,this.striped=!1,this.showGroupPanel=!0,this.showColumnHeaders=!0,this.showRowLines=!0,this.showColumnLines=!1,this.showGroupCount=!0,this.groupPanelMenu=!0,this.columnHeaderMenu=!0,this.showColumnHeaderMenuButton=!0,this.columnFixing=!0,this.rowMenu=!1,S(this,Ll,null),S(this,Gr,Object.freeze([])),this.xlsxExporter=null,this.pdfExporter=null,this.csvExportOptions=null,this.showFilterRow=!1,this.showSearchPanel=!1,this.headerFilter=!1,S(this,ua,!1),S(this,da,""),S(this,Eu,""),S(this,Mu,null),this.columnResizing=!1,this.resizeMode="widget",this.columnChooser=!1,this.columnAutoWidth=!1,this.columnRenderingMode="auto",this.selectionMode="none",this.showCheckboxes=!1,this.clipboardMode="copy",this.cellSelectionMode="none",this.showCellRangeSummary=!1,this.editMode="cell",this.allowEditing=!1,this.allowAdding=!1,this.allowRemoving=!1,this.editTrigger="click",this.confirmRemove=!0,S(this,ie,new BR),S(this,jo),S(this,Wg,{version:-1,items:void 0,count:0}),S(this,ct,null),S(this,Le,Po),S(this,xi),S(this,Fe,0),S(this,rc,!1),S(this,ac),S(this,je,!1),S(this,ln,!1),S(this,Lo,!1),S(this,pa,new Zl(this)),S(this,dn,[]),S(this,tn,at()),S(this,$n,at()),S(this,jd,at()),S(this,Hd,at()),S(this,Ud,at()),S(this,Vd,at()),S(this,fa,at()),S(this,Zd,at()),S(this,Xd,at()),S(this,Yd,at()),S(this,ma,at()),S(this,mr,at()),S(this,Jd,at()),S(this,lc,at()),S(this,Qd,at()),S(this,ga,new vR(this,{scrolled:()=>{o(this,Ns).call(this),o(this,Oo).call(this)},resized:()=>{o(this,Ns).call(this),o(this,Oo).call(this),l(this,r,Xc).call(this),l(this,r,vr).call(this)}})),S(this,Hn,new _R(this,()=>this.requestUpdate())),S(this,Ru,new Set),S(this,$u),S(this,vl),S(this,Kg,new _S(this,{context:Gh,subscribe:!0})),S(this,Ps,null),S(this,Rr,""),this.stateChangeDelay=500,S(this,Ho,[]),S(this,Jt,!1),S(this,Tu,!1),S(this,Kr),S(this,Is,0),S(this,zu,!1),S(this,hc),S(this,uc),S(this,Vi,new Set),S(this,or,new Set),S(this,Qi),S(this,va),S(this,dc,!1),S(this,pc,new Set),S(this,Ms,!1),S(this,Pu,()=>{o(this,Qi)!==void 0&&l(this,r,Du).call(this)}),this._containerRef=at(),this._scrollContainerRef=at(),this._groupContainerRef=at(),S(this,sr,at()),S(this,ve,new WR(this,{scroll:()=>l(this,r,u_).call(this),moved:()=>l(this,r,$v).call(this)})),S(this,ht,new IR(this,{getScrollElement:()=>o(this,ve).port?.source??this._scrollContainerRef.value??null,isExternal:()=>o(this,ve).port!==null,rowHeight:()=>this.rowHeight,overscan:3,getScrollMargin:()=>{const e=this._scrollContainerRef.value,t=e?.querySelector("table.grid-table"),n=o(this,ve).port;if(!e||!t)return 0;const i=n?n.rect().top-n.scrollTop:e.getBoundingClientRect().top-e.scrollTop,s=o(this,r,Ge)?o(this,tn).value:void 0;return s?s.getBoundingClientRect().top-i:t.getBoundingClientRect().top-i+(t.tHead?.offsetHeight??0)+(t.querySelector(":scope > tbody.fixed-top-rows")?.offsetHeight??0)},getStickyHeight:()=>{const e=this._scrollContainerRef.value,t=e?.querySelector("thead"),n=o(this,Yn)?e?.querySelector("tbody.fixed-top-rows"):null,i=Math.max(t?.getBoundingClientRect().bottom??-1/0,n?.getBoundingClientRect().bottom??-1/0);return e&&i>-1/0?Math.max(0,i-e.getBoundingClientRect().top):0},getStickyBottomHeight:()=>l(this,r,ur).call(this)})),S(this,Yn,!0),S(this,eo,new Set),S(this,qr,new N1(this)),S(this,Bo,new iR(this)),S(this,Ro,!0),S(this,os,new DR(this)),S(this,Vn,new P1(this)),S(this,Ke,new wx(this,"context-menu-panel")),S(this,ut,new wx(this,"toolbar-menu")),S(this,ks,new K1(this)),S(this,ne,new tR(this)),S(this,Dt,new UM(this)),S(this,yi,new cR(this)),S(this,Fs,new FM(this)),S(this,Tn),S(this,Ci,null),S(this,mc,at()),S(this,Vh,()=>{this.columnAutoWidth&&(w(this,Si,!0),w(this,Xe,!0),this.requestUpdate())}),S(this,np,e=>{if(!o(this,r,qt))return;const t=this.autoExpandRows,n=o(this,Rt),i=o(this,Z);if(uE(e)){if(!t&&!n.size)return;const a=e.loadedPositions(c=>t!==n.has(i(c)));return a.length?{all:!1,positions:Int32Array.from(a)}:void 0}if(!n.size)return t?{all:t,positions:Sd}:void 0;const s=[];if(n.size<=16&&!o(this,st)){for(const a of n)for(let c=e.indexOf(a);c>=0;c=e.indexOf(a,c+1))s.push(c);s.sort((a,c)=>a-c)}else e.forEach((a,c)=>{n.has(i(a))&&s.push(c)});return{all:t,positions:Int32Array.from(s)}}),S(this,ip),S(this,op,Sd),S(this,to,new Map),S(this,sp,new WeakMap),S(this,gc,new ql(256)),S(this,se,new J1),S(this,he,null),S(this,cn,new Map),S(this,ev,0),S(this,ap,new WeakMap),S(this,On,new Map),S(this,ss,new Set),S(this,hn,null),S(this,Jc,!1),S(this,uo),S(this,pi),S(this,fi,""),S(this,rs,null),S(this,Qc,at()),S(this,ei),S(this,Nu,!1),S(this,Pt),S(this,vc,!1),S(this,qu,e=>{const t=l(this,r,am).call(this,e),n=t&&l(this,r,Xu).call(this,t.position);if(n&&"refused"in n){l(this,r,te).call(this,n.refused);return}const i=n??(t&&((o(this,ie).size?l(this,r,Hu).call(this):void 0)??l(this,r,Dl).call(this,t)));if(!i)return;const s=e.clipboardData,a={...i.detail,clipboardData:s,source:"user"};this.dispatchEvent(new CustomEvent("u-grid-copying",{...l(this,r,Re).call(this,a),cancelable:!0}))&&(e.preventDefault(),m1(s,i.detail),l(this,r,te).call(this,i.announcement))}),S(this,ju,e=>{const t=l(this,r,am).call(this,e);t&&(o(this,ie).size||o(this,ke).length&&o(this,r,Ft)!=="none"||l(this,r,Dl).call(this,t))&&e.preventDefault()}),S(this,ke,[]),S(this,Qt,[]),S(this,Gn,fh),S(this,Wt,!1),S(this,Tt,!1),S(this,pp,[]),S(this,Zi),S(this,Uo),S(this,zn),S(this,Hr,!1),S(this,Xi,new Zl(this)),S(this,wa,""),S(this,mn),S(this,Uu,!1),S(this,wc),S(this,mp,e=>{const t=o(this,zn);if(t?.pointerId===e.pointerId){if(t.x=e.clientX,t.y=e.clientY,e.buttons%2===0){l(this,r,um).call(this);return}l(this,r,gv).call(this),l(this,r,hm).call(this)}}),S(this,Vo,e=>{e.pointerId===o(this,zn)?.pointerId&&l(this,r,um).call(this)}),S(this,Yu,e=>{const t=o(this,$n).value;if(!l(this,r,vp).call(this)||!t||!this.shadowRoot||!Ay(e,t,this.shadowRoot))return;const n=l(this,r,io).call(this,e.composedPath()),i=n&&!n.closest("tr.filter-row")?l(this,r,Pn).call(this,n):void 0;i&&l(this,r,bv).call(this,e.clipboardData.getData("text/plain"),i,e.clipboardData)&&e.preventDefault()}),S(this,Xh,()=>{if(o(this,Er))return;const e=Array.from(this.querySelectorAll("u-grid-column")).filter(t=>t.parentElement===this);ro(e,o(this,gl))||(w(this,gl,e),l(this,r,Tr).call(this))}),S(this,$r,new Set),S(this,Cn),S(this,Rs,{regular:[],tree:Pf([]),byParent:new Map}),S(this,Ns,()=>{const e=l(this,r,cc).call(this),t=l(this,r,mm).call(this);if(t&&l(this,r,h_).call(this,t.visible),!e||!o(this,la))return;const n=t?t.start:Math.abs(e.scrollLeft),i=t?t.visible:e.clientWidth;if(n===o(this,Tl)&&i===l(this,r,Mv).call(this))return;w(this,Tl,n),t?w(this,Qu,i):w(this,bi,i);const s=l(this,r,kv).call(this);(s.first!==o(this,$l).first||s.last!==o(this,$l).last)&&(w(this,Ro,!0),this.requestUpdate())}),S(this,Oo,()=>{const e=l(this,r,cc).call(this),t=this._containerRef.value;if(!e||!t)return;const n=l(this,r,mm).call(this),i=n?n.start:Math.abs(e.scrollLeft),s=n?n.end:e.scrollWidth-e.clientWidth-i;t.classList.toggle("scroll-start",i>.5),t.classList.toggle("scroll-end",s>.5)}),S(this,Qu,0),S(this,ed,-1),S(this,Pl,!1),S(this,ls,(e,t)=>o(this,un).get(e)?.expanded??l(this,r,xp).call(this,t)),S(this,nd),S(this,id,-1),S(this,Zr,!1),S(this,rd,0),S(this,Il),S(this,Xr),S(this,$s),S(this,Mn,e=>{if(!o(this,$s)){const t=new Map,n=o(this,Ie).leaves;for(const i of n)i.path&&!t.has(i.path)&&t.set(i.path,i);for(const i of n)!i.path&&i.name&&!t.has(i.name)&&t.set(i.name,i);w(this,$s,t)}return o(this,$s).get(e)}),S(this,ld,new WeakSet),S(this,Mi,e=>o(this,r,Su)!=="none"&&h0(e)),S(this,yp,()=>{w(this,Br,!1)}),S(this,Bv,(e,t)=>{if(l(this,r,Cc).call(this,t)||!o(this,Mi).call(this,e))return;const n=R1(o(this,qe),e,M1(t),o(this,r,Su),o(this,wi));l(this,r,zr).call(this,n,"user")&&l(this,r,cd).call(this,e)}),S(this,Cp,(e,t)=>{if(l(this,r,Cc).call(this,t)||!o(this,Mi).call(this,e))return;const n=Hl(o(this,qe),e,Ry(l(this,r,hs).call(this,e)??"asc"),!0,o(this,wi));l(this,r,zr).call(this,n,"user")&&l(this,r,cd).call(this,e)}),S(this,hd,e=>{const t=e.target,n=t?.closest?.("th .header-text");if(n instanceof HTMLElement&&!n.firstElementChild){n.scrollWidth>n.clientWidth||n.scrollHeight>n.clientHeight?n.title=n.textContent.trim():n.removeAttribute("title");return}const i=t?.closest?.("td.truncate");i instanceof HTMLElement&&(i.scrollWidth>i.clientWidth?i.title=i.textContent.trim():i.removeAttribute("title"))}),S(this,_c,e=>{l(this,r,Yc).call(this,e.groupKey,e.level,e.path,!e.expanded,"user")}),S(this,ym,e=>{const t=o(this,r,Ft)!=="none";if(t&&(o(this,Hr)||e.shiftKey||e.ctrlKey||e.metaKey)){const u=e.composedPath().some(f=>f instanceof HTMLElement&&f.classList.contains("selection-cell"));if(w(this,Hr,!1),!u)return}if(l(this,r,Sm).call(this,e,"click"),o(this,r,pt)==="none")return;const n=e.composedPath(),i=n.find(u=>u instanceof HTMLTableRowElement&&u.parentElement===e.currentTarget),s=Number(i?.getAttribute("data-index")??NaN),a=l(this,r,pe).call(this,s);if(!$e(a)||n.some(u=>u instanceof HTMLElement&&u.classList.contains("detail-toggle-cell")))return;const c=n.some(u=>u instanceof HTMLElement&&u.classList.contains("selection-cell")),h=e.ctrlKey||e.metaKey;if(c){e.shiftKey?l(this,r,Wl).call(this,s,!0):l(this,r,Nl).call(this,a);return}o(this,r,_n)||t||(e.shiftKey&&o(this,r,pt)==="multiple"?l(this,r,Wl).call(this,s,h):h?l(this,r,Nl).call(this,a):(w(this,jo,o(this,Z).call(this,a.item)),l(this,r,xm).call(this,[o(this,jo)],!1,"user")))}),S(this,_a,0),S(this,Go),S(this,Yi),S(this,md,e=>{e?.composedPath().includes(this)||(o(this,Yi)?.abort(),w(this,Yi,void 0),w(this,ln,!1),w(this,hr,!1),w(this,Yo,!1),o(this,Go)!==void 0&&(w(this,je,!1),w(this,Go,void 0)))}),S(this,Yo,!1),S(this,hr,!1),S(this,kc,{start:0,end:0}),S(this,Ws,{start:0,end:0,maskStart:0,maskEnd:0}),S(this,gd,""),S(this,vd),S(this,Ts,{x:0,y:0}),S(this,wd,e=>{const t=e.composedPath();if(t[0]===o(this,ma).value||t[0]===o(this,lc).value){const f=e.relatedTarget;(f&&o(this,$n).value?.contains(f)&&f!==t[0]?f:l(this,r,si).call(this))?.focus({preventScroll:!0});return}const n=l(this,r,io).call(this,t),i=n&&l(this,r,Pn).call(this,n);if(!n||!i)return;const s=l(this,r,xa).call(this,t),a=o(this,vi);if(w(this,vi,s?{rowKey:s.rowKey,column:s.column}:void 0),i.row===o(this,Le)&&a?.column!==o(this,vi)?.column&&l(this,r,fd).call(this,"user"),i.row<0&&o(this,Le)<0&&l(this,r,Yr).call(this,i.row,i.col)?.column===l(this,r,Ac).call(this))return;const c=i.row===o(this,Le),h=l(this,r,pe).call(this,i.row),u=c&&i.col>=o(this,r,Ue)&&o(this,Fe)>=o(this,r,Ue)&&l(this,r,lo).call(this,i.row);!c||i.col!==o(this,Fe)&&!h?.isGroup&&!h?.isDetail&&!u?l(this,r,Oe).call(this,i,"user"):t[0]===n&&n.closest("tr")?.classList.contains("pinned")&&(w(this,Yo,!1),w(this,ln,!0),w(this,_a,0),this.requestUpdate())}),S(this,xd,e=>{if(e.defaultPrevented||e.isComposing)return;const t=e.composedPath(),n=l(this,r,io).call(this,t),i=n&&l(this,r,Pn).call(this,n);if(!n||!i)return;const s=l(this,r,xa).call(this,t);if(s&&l(this,r,t_).call(this,e,s,n)||o(this,he)&&l(this,r,O_).call(this,e,n,i))return;if(t[0]!==n){if(e.key==="Escape")e.preventDefault(),n.focus();else if(e.key==="Tab"&&i.row>=0&&!e.ctrlKey&&!e.altKey&&!e.metaKey)c1(n,t[0],e.shiftKey)&&e.preventDefault();else if(e.key==="F2"&&i.row<0){const f=l(this,r,Ep).call(this,n),g=f[f.indexOf(t[0])+1]??n;e.preventDefault(),g.focus()}return}i.row<0&&o(this,Le)<0&&l(this,r,Yr).call(this,i.row,i.col)?.column===l(this,r,Ac).call(this)&&(i.row=o(this,Le),i.col=o(this,Fe));const a=e.ctrlKey||e.metaKey,c=l(this,r,pe).call(this,i.row),h=i.row<0?l(this,r,Yr).call(this,i.row,i.col)?.column??o(this,dn)[i.col]:o(this,dn)[i.col];if(i.row<0&&h&&l(this,r,F_).call(this,e,n,h))return;if(Gc(e)&&i.row>=0){l(this,r,Xa).call(this,l(this,r,yb).call(this,i,n,null,e));return}if(l(this,r,zC).call(this,e,i,h))return;if(a&&!e.altKey&&!e.shiftKey&&e.key.toLowerCase()==="a"){o(this,r,pt)==="multiple"&&(e.preventDefault(),l(this,r,Fl).call(this,!0,"user")&&l(this,r,sh).call(this));return}const u=w0(e,this._isRtl());if(u){e.altKey||l(this,r,W_).call(this,e,i,u,c);return}if(c){if(e.key==="*"&&!a&&!e.altKey&&$e(c)&&c.tree&&c.tree.node>=0&&o(this,r,Ce)){e.preventDefault(),l(this,r,q0).call(this,c.tree.node);return}if(c.isGroup){e.key==="Enter"||e.key===" "?(e.preventDefault(),o(this,_c).call(this,c)):e.key==="F2"?zh(n)&&e.preventDefault():a&&!e.altKey&&!e.shiftKey&&e.key.toLowerCase()==="g"&&(e.preventDefault(),l(this,r,Rp).call(this,c.column));return}if(c.isDetail){(e.key==="Enter"||e.key==="F2")&&zh(n)&&e.preventDefault();return}if(Fi(c)){h===mo?(e.key==="Enter"||e.key===" ")&&!e.repeat&&(e.preventDefault(),l(this,r,Jn).call(this,o(this,Z).call(this,c.item),!l(this,r,Qn).call(this,o(this,Z).call(this,c.item)),"user")):(e.key==="Enter"||e.key==="F2")&&zh(n)&&e.preventDefault();return}if($e(c)){if(h===mo){(e.key==="Enter"||e.key===" ")&&!e.repeat&&(e.preventDefault(),l(this,r,Jn).call(this,o(this,Z).call(this,c.item),!l(this,r,Qn).call(this,o(this,Z).call(this,c.item)),"user"));return}if(e.key===" "&&o(this,r,pt)!=="none")e.preventDefault(),e.shiftKey?l(this,r,Wl).call(this,i.row,a):l(this,r,Nl).call(this,c);else if((e.key==="Enter"||e.key==="F2")&&h!==vs){const f=i.col>=o(this,r,Ue)&&l(this,r,lo).call(this,i.row);if(e.key==="Enter"&&!e.repeat&&typeof h=="object"&&l(this,r,er).call(this,c,h)&&l(this,r,Bi).call(this,c.tree.node)&&!(o(this,r,dt)&&l(this,r,Bn).call(this,c,h,l(this,r,Lt).call(this,c)))&&!mi(n).length){e.preventDefault(),l(this,r,ki).call(this,o(this,Z).call(this,c.item),!l(this,r,Nn).call(this,c.tree.node),"user");return}(!f&&typeof h=="object"&&o(this,r,dt)&&l(this,r,L_).call(this,i,h)||zh(n))&&e.preventDefault()}}}}),S(this,yd,e=>{if(o(this,Ji)&&queueMicrotask(()=>l(this,r,em).call(this)),o(this,Un)&&this.autoHideColumns&&queueMicrotask(()=>this.isConnected&&this.requestUpdate()),o(this,Wt)&&(typeof document.hasFocus!="function"||document.hasFocus())){const i=e.relatedTarget;(!i||!(this.shadowRoot?.contains(i)||this.contains(i)))&&l(this,r,Ur).call(this,!1)}const t=o(this,he);if(!t||t.wholeRow)return;const n=l(this,r,io).call(this,e.composedPath());n?.classList.contains("editing")&&queueMicrotask(()=>{if(o(this,he)!==t||typeof document.hasFocus=="function"&&!document.hasFocus())return;const i=this.shadowRoot?.activeElement;i&&n.contains(i)||document.activeElement&&document.activeElement!==this&&this.contains(document.activeElement)||l(this,r,as).call(this,"user",()=>{},{blur:!0})})}),S(this,Em,e=>{l(this,r,Sm).call(this,e,"dblclick")}),S(this,Mm,e=>{const t=e.composedPath()[0];w(this,vc,t instanceof HTMLInputElement&&t.classList.contains("cell-editor-checkbox")),l(this,r,PC).call(this,e)}),S(this,tb,()=>{o(this,Qe).retry(),this.requestUpdate()}),S(this,_d),S(this,Op,new Set),S(this,so),S(this,gt,null),S(this,Pp,0),S(this,Ip,!1),S(this,Us,null),S(this,oo),S(this,ka,null),S(this,Ec,0),S(this,Mc,!1),S(this,Sa,new Set),S(this,Jr,new Map),S(this,dh,""),S(this,Rc,""),S(this,ph,null),S(this,fs,at()),S(this,$c,!1),S(this,gb,e=>{if(e.defaultPrevented||e.isComposing||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return;const t=e.composedPath()[0],n=t instanceof HTMLElement?t.getAttribute("data-roving"):null,i=o(this,fs).value;if(!n||!i)return;const s=[...i.querySelectorAll("[data-roving]")],a=s.indexOf(t),c=e.key==="ArrowRight"!==this._isRtl();let h;switch(e.key){case"ArrowLeft":case"ArrowRight":h=Math.min(Math.max(a+(c?1:-1),0),s.length-1);break;case"Home":h=0;break;case"End":h=s.length-1;break;default:return}e.preventDefault(),l(this,r,$A).call(this,s[h])}),S(this,vb,e=>{const t=e.composedPath()[0],n=t instanceof HTMLElement?t.getAttribute("data-roving"):null;n&&n!==o(this,ka)&&(l(this,r,Np).call(this,n),this.requestUpdate())}),S(this,xb,e=>{if(e.defaultPrevented||e.ctrlKey||l(this,r,Nm).call(this,e))return;const t=e.composedPath().find(n=>n instanceof HTMLElement&&n.classList.contains("group"));l(this,r,Ea).call(this,t??null,{x:e.clientX,y:e.clientY},e)}),S(this,Kp,-1/0),S(this,kd,e=>{if(!(e.defaultPrevented||e.ctrlKey&&!ok(e))){if(o(this,ks).justFired){e.preventDefault();return}o(this,ks).cancel(),!l(this,r,Nm).call(this,e)&&l(this,r,Wm).call(this,e.composedPath(),{x:e.clientX,y:e.clientY},e)}}),S(this,Lc,e=>{o(this,ks).start(e,(t,n,i)=>{if(t.some(s=>s instanceof HTMLElement&&(s.isContentEditable||s.matches("input, textarea, select")))||this.shadowRoot&&ug(this.shadowRoot))return!1;if(t.some(s=>s===this._groupContainerRef.value)){const s=t.find(a=>a instanceof HTMLElement&&a.classList.contains("group"));return l(this,r,Ea).call(this,s??null,{x:n,y:i},null)}return l(this,r,Wm).call(this,t,{x:n,y:i},null)})}),S(this,Oc,{handleEvent:e=>o(this,ks).onClickCapture(e),capture:!0})}static get observedAttributes(){return[...super.observedAttributes,...Object.keys(Dx),...mx]}get summary(){return o(this,Ko)}set summary(e){w(this,Ko,e??null),w(this,Zn,!0)}get fixedTopItems(){return o(this,Bs)}set fixedTopItems(e){w(this,Bs,e??[])}get fixedBottomItems(){return o(this,Gs)}set fixedBottomItems(e){w(this,Gs,e??[])}get keyExpr(){return o(this,st)}set keyExpr(e){const t=e||null;if(t===o(this,st))return;const n=o(this,Z),i=this.hasUpdated;if(w(this,st,t),w(this,on,cE(t)),l(this,r,qa).call(this),w(this,tc,!1),w(this,Me,!0),o(this,ct)&&"key"in o(this,ct)){const s=l(this,r,C_).call(this,o(this,ct).key,n);w(this,ct,s===void 0?null:{key:o(this,Z).call(this,s)})}o(this,ie).size&&l(this,r,__).call(this,n,i),this.requestUpdate()}get dataSource(){return o(this,Ae)}set dataSource(e){const t=e&&typeof e.load=="function"?e:null;e&&!t&&console.error('<u-grid>: "dataSource" needs a load(options, signal) method; ignored.'),t!==o(this,Ae)&&((o(this,se).size||o(this,he))&&l(this,r,Ku).call(this,"api"),w(this,Ae,t),o(this,Qe).dispose(),l(this,r,Au).call(this),w(this,Fn,[]),o(this,Js).clear(),w(this,Ui,void 0),w(this,Fo,void 0),w(this,qs,void 0),t&&o(this,Et).length&&console.error('<u-grid>: set either "items" or "dataSource", not both; "dataSource" is used.'),l(this,r,Wr).call(this,t?[]:o(this,Et)),this.requestUpdate())}get pageIndex(){return o(this,lt)}set pageIndex(e){const t=o(this,lt);w(this,lt,Number.isFinite(e)?Math.max(0,Math.trunc(e)):0),this.requestUpdate("pageIndex",t)}get items(){return o(this,Et)}set items(e){w(this,Et,e??[]),o(this,Ae)&&o(this,Et).length&&console.error('<u-grid>: set either "items" or "dataSource", not both; "dataSource" is used.'),o(this,Ae)||(l(this,r,_C).call(this,o(this,r,Ce)&&Kc(this.treeMode)==="nested"?o(this,be).indexFor(o(this,Et),l(this,r,Og).call(this)).nodes:o(this,Et)),l(this,r,Wr).call(this,o(this,Et)))}get columns(){return o(this,Er)??o(this,gl)}set columns(e){w(this,Er,e??void 0),l(this,r,Tr).call(this)}get sorting(){return this.sortMode}set sorting(e){l(this,r,Eo).call(this,"sorting","sortMode"),this.sortMode=e}get toolbarItems(){return o(this,Ll)}set toolbarItems(e){w(this,Ll,Array.isArray(e)?Object.freeze([...e]):null)}get exportFormats(){return o(this,Gr)}set exportFormats(e){const t=Array.isArray(e)?e.map(i=>typeof i=="string"?i.toLowerCase():String(i)):[],n=t.filter(i=>!zx.includes(i));n.length&&console.warn(`<u-grid>: unknown export format(s) ignored: ${n.join(", ")}.`),w(this,Gr,Object.freeze([...new Set(t.filter(i=>zx.includes(i)))]))}get filterValue(){return o(this,ne).filterValue}set filterValue(e){o(this,Dt).discardDrafts(),o(this,ne).set(e,o(this,ne).searchText)}get searchText(){return o(this,ne).searchText}set searchText(e){o(this,Fs).discardDraft(),o(this,ne).set(o(this,ne).filterValue,e??"")}get selectedKeys(){return o(this,ie).keys}set selectedKeys(e){const t=[...e??[]];o(this,ie).replace(o(this,r,pt)==="single"?t.slice(-1):t)}get focusedRowKey(){const e=l(this,r,ah).call(this);return e.rowFixed?null:e.rowKey}set focusedRowKey(e){if(e==null){this.showColumnHeaders&&l(this,r,Oe).call(this,{row:Po,col:0},null);return}l(this,r,ze).call(this);const t=l(this,r,Ye).call(this,e);t>=0&&l(this,r,Oe).call(this,{row:t,col:o(this,Fe)},null,{reveal:!0})}get stripped(){return this.striped}set stripped(e){l(this,r,Eo).call(this,"stripped","striped"),this.striped=e}get showHeader(){return this.showGroupPanel}set showHeader(e){l(this,r,Eo).call(this,"showHeader","showGroupPanel"),this.showGroupPanel=e}attributeChangedCallback(e,t,n){mx.includes(e)&&o(this,Hn).update();const i=Dx[e];if(i){l(this,r,Eo).call(this,`${e} attribute`,`${i} attribute`),super.attributeChangedCallback(i,t,n);return}super.attributeChangedCallback(e,t,n)}get language(){return o(this,r,ir)??Yl}set language(e){w(this,$u,e||void 0)}get stateStorage(){return o(this,Ps)}set stateStorage(e){const t=o(this,Ps);w(this,Ps,e??null),l(this,r,Yf).call(this),this.requestUpdate("stateStorage",t)}get stateStorageKey(){return o(this,Rr)}set stateStorageKey(e){const t=o(this,Rr);w(this,Rr,e??""),l(this,r,Yf).call(this),this.requestUpdate("stateStorageKey",t)}getState(){return w(this,Ms,!0),l(this,r,ep).call(this)}setState(e,t){w(this,Ms,!0);const n=z0(e);if("error"in n){console.warn(`<u-grid>: setState ignored: ${n.error}.`);return}l(this,r,Hh).call(this),l(this,r,Lu).call(this,n.state,t?.partial===!0,!1)}resetState(){w(this,Ms,!0),l(this,r,Hh).call(this),l(this,r,Lu).call(this,{version:fu},!1,!1)}dispatchEvent(e){if(nz.has(e.type)){const t=e.detail?.source;o(this,Vi).add(t==="api"?"api":"user")}return super.dispatchEvent(e)}get _scrollElement(){const e=o(this,ve).port;return e&&!e.isWindow?e.element:void 0}get _dragAndDropRegistrations(){return o(this,qr).size+o(this,Bo).size}get _virtualizer(){return o(this,ht)}get _memoryStats(){return{dragAndDrop:this._dragAndDropRegistrations,measuredElements:0,measuredSizes:o(this,ht).measuredSizes,dataTypes:o(this,Xn).size,expansion:o(this,un).size,sortRanks:o(this,vn).size,columnState:o(this,Ct).size+o(this,_t).size+o(this,an).size+o(this,bn).size+o(this,Rn).size+o(this,ha).size,chooserDropzones:o(this,Vn).dropzones,chooserTimers:o(this,Vn).timers,filterRowState:o(this,Dt).size,filterTimers:o(this,Dt).timers+o(this,Fs).timers+o(this,yi).timers+(o(this,ne).pending?1:0),announceTimers:o(this,pa).size,headerFilterOpen:o(this,yi).open?1:0,selectedKeys:o(this,ie).size,pendingLoads:o(this,Qe).pending,cachedBlocks:o(this,Qe).blocksCached,loadTimers:(o(this,No)===void 0?0:1)+(o(this,Zt)===void 0?0:1),rowExpansion:o(this,Rt).size,scrollPortAttached:o(this,ve).port?1:0,scrollPortObservedRows:o(this,ve).observedRows,scrollEndWaits:o(this,ve).scrollEndWaits,horizontalSyncListeners:o(this,ga).listeners,adaptiveTimers:o(this,Wo)===void 0?0:1,adaptiveColumns:o(this,Ne).length+o(this,js).length,primitiveDetailSizes:o(this,ec).size,observedDetails:o(this,El).size,hostLabelObservers:o(this,Hn).observers,stateTimers:o(this,Qi)===void 0?0:1,pageHideListeners:o(this,dc)?1:0,pendingStates:o(this,Ho).length,warnedState:o(this,pc).size,pendingEdits:o(this,se).size,addedRows:o(this,cn).size,validations:o(this,On).size+o(this,ss).size,editTimers:(o(this,uo)===void 0?0:1)+(o(this,pi)===void 0?0:1),editLightNodes:o(this,Pt)?1:0,menuTimers:o(this,Ke).timers+o(this,ut).timers,longPressTimers:o(this,ks).timers,exportTimers:(o(this,oo)===void 0?0:1)+(o(this,gt)?1:0)+(o(this,so)===void 0?0:1),toolbarWidths:o(this,Jr).size,rangeTimers:o(this,Xi).size,rangeDrag:o(this,zn)?1:0,rangeSummaries:o(this,mn)?1:0,rowRenders:o(this,Xs).size,fullWidthIndices:o(this,to).size,primitiveFullWidthSizes:o(this,gc).size,observedFixedSections:o(this,eo).size,treeLoads:o(this,At).size+(o(this,Ln)?.keys.length??0),treeTimers:o(this,Ai)===void 0?0:1,nodeSummaries:o(this,aa).size,treeExpansion:o(this,be).exceptions.size}}async getUpdateComplete(){let e=await super.getUpdateComplete();for(;o(this,ne).pending;)await o(this,ne).pending,e=await super.getUpdateComplete();return e}connectedCallback(){const e=!this.hasUpdated&&!!this.shadowRoot;super.connectedCallback(),o(this,Xh).call(this),w(this,vl,d$(()=>this.requestUpdate())),document.fonts?.addEventListener("loadingdone",o(this,Vh)),o(this,Hn).update(),w(this,Ro,!0),w(this,Xe,!0),l(this,r,fm).call(this),l(this,r,tp).call(this),o(this,zu)||(e&&o(this,r,Zc)?w(this,Jt,!0):l(this,r,Ou).call(this)),l(this,r,Iu).call(this)}disconnectedCallback(){var e;o(this,os).cancel(),l(this,r,ih).call(this),o(this,mn)?.abort(),w(this,mn,void 0),w(this,Wt,!1),o(this,md).call(this),o(this,Hn).disconnect(),l(this,r,lm).call(this),super.disconnectedCallback(),(e=o(this,vl))==null||e.call(this),w(this,vl,void 0),document.fonts?.removeEventListener("loadingdone",o(this,Vh)),o(this,qr).detach(),o(this,Bo).detach(),E1(this),this.renderRoot?.querySelectorAll(".move-container").forEach(t=>t.remove()),o(this,Tn)?.disconnect(),w(this,Tn,void 0),w(this,Ci,null),o(this,eo).clear(),o(this,Io)?.disconnect(),w(this,Io,void 0),o(this,El).clear(),l(this,r,Vf).call(this,!0),clearTimeout(o(this,No)),w(this,No,void 0),clearTimeout(o(this,Zt)),w(this,Zt,void 0),w(this,_i,!1),o(this,Qe).dispose(),w(this,Ui,void 0),w(this,Ys,void 0),l(this,r,Au).call(this),o(this,Qi)!==void 0&&l(this,r,Du).call(this),l(this,r,Iu).call(this),l(this,r,EC).call(this),l(this,r,kA).call(this),clearTimeout(o(this,Wo)),w(this,Wo,void 0),w(this,tr,void 0)}willUpdate(e){if((e.has("scrollContainer")||e.has("scrollContainerElement"))&&o(this,ve).resolve(),e.has("scrollContainerAxis")&&(o(this,ve).axisChanged(),w(this,Xe,!0)),l(this,r,Q0).call(this),e.has("rowRenderer")&&o(this,to).size&&(o(this,to).clear(),l(this,r,Vg).call(this)),w(this,Lo,!!this.shadowRoot?.activeElement||typeof this.matches=="function"&&this.matches(":focus-within")),e.has("selectionMode")&&o(this,r,pt)==="single"&&o(this,ie).size>1){const s=o(this,ie).replace(o(this,ie).keys.slice(-1));this.hasUpdated&&_0(e.get("selectionMode"))==="multiple"&&l(this,r,wn).call(this,s,"api")}(e.has("cellSelectionMode")||e.has("selectionMode")||e.has("showCheckboxes"))&&l(this,r,LC).call(this,e.has("cellSelectionMode")),e.has("autoExpandRows")&&(e.get("autoExpandRows")!==void 0&&o(this,Rt).clear(),w(this,Me,!0)),e.has("autoHideColumns")&&(w(this,Un,!0),this.autoHideColumns&&o(this,bi)&&w(this,oc,(parseFloat(getComputedStyle(this).fontSize)||16)/16)),e.has("detailRenderer")&&!e.get("detailRenderer")!=!this.detailRenderer&&(w(this,Me,!0),w(this,Xe,!0)),e.has("scrollMode")&&this.scrollMode!=="virtual"&&!o(this,Ae)&&!o(this,Zr)&&(w(this,Zr,!0),console.warn(this.scrollMode==="infinite"?'<u-grid>: scroll-mode="infinite" needs a dataSource with remote paging; ignored.':`<u-grid>: unknown scroll-mode "${String(this.scrollMode)}"; "virtual" is used.`)),(e.has("treeMode")||e.has("childrenExpr")||e.has("parentKeyExpr")||e.has("rootParentKey")||e.has("hasChildrenExpr")||e.has("treeFilterMode"))&&(w(this,Fr,!0),w(this,Me,!0),w(this,Zn,!0),w(this,kt,!0),w(this,yt,!0),w(this,Xe,!0),w(this,Un,!0),e.has("treeMode")&&!o(this,r,Ce)&&(o(this,be).release(),w(this,nc,void 0),w(this,et,void 0),l(this,r,Wr).call(this,o(this,Ae)?[]:o(this,Et)),w(this,Fo,void 0),w(this,Ui,void 0)),e.has("treeMode")&&o(this,Ae)&&(w(this,Ui,void 0),w(this,Fo,void 0))),e.has("autoExpandNodes")&&(e.get("autoExpandNodes")!==void 0&&o(this,be).reset(),w(this,Me,!0)),l(this,r,Y0).call(this),e.has("autoExpandGroups")&&(e.get("autoExpandGroups")!==void 0&&l(this,r,zv).call(this),w(this,Me,!0));const t=o(this,Ke).open?o(this,Ke).data?.request:void 0,n=t?.column;t?.target==="header"&&(!n||!(this._isBand(n)?this._isColumnVisible(n):this._visibleColumns.includes(n)))&&o(this,Ke).hide(),t?.target==="header"&&n?.headerMenu===!1&&az.some(s=>o(this,Ke).data?.available.has(s))&&o(this,Ke).hide(!0),t?.target==="group-panel"&&(!this.showGroupPanel||!this._groupColumns.length||n&&!this._groupColumns.includes(n))&&o(this,Ke).hide();const i=this.shadowRoot?.activeElement;if(w(this,$c,!!i&&!!o(this,mc).value?.contains(i)),e.has("columnAutoWidth")&&(o(this,bn).clear(),w(this,Si,!0)),e.has("columnRenderingMode")){const s=this.columnRenderingMode;s!=="auto"&&s!=="virtual"&&s!=="standard"&&!o(this,jh)&&(w(this,jh,!0),console.warn(`<u-grid>: unknown column-rendering-mode "${String(s)}"; "auto" is used.`)),w(this,Xe,!0),w(this,Ro,!0)}(e.has("columnAutoWidth")||e.has("columnResizing")||e.has("resizeMode")||e.has("showColumnHeaders")||e.has("_regularColumns")||e.has("_groupColumns"))&&w(this,Xe,!0),l(this,r,HC).call(this)}firstUpdated(){this._scrollContainerRef.value?.addEventListener("scroll",o(this,Oo),{passive:!0}),this._scrollContainerRef.value?.addEventListener("scroll",o(this,Ns),{passive:!0}),l(this,r,fm).call(this),o(this,Jt)&&o(this,Kr)===void 0&&(w(this,Jt,!1),l(this,r,Ou).call(this),this.requestUpdate())}updated(e){const t=o(this,ht);if(l(this,r,p_).call(this),l(this,r,Vf).call(this),l(this,r,d_).call(this),l(this,r,Ev).call(this),l(this,r,rC).call(this),l(this,r,lm).call(this),o(this,Pl)&&!o(this,Un)&&o(this,bi)>0&&(w(this,Pl,!1),l(this,r,Tv).call(this)),o(this,Ji)&&!o(this,r,rp)&&queueMicrotask(()=>l(this,r,em).call(this)),o(this,Hi)!==o(this,qh)&&(w(this,qh,o(this,Hi)),o(this,Hi)||t.measure()),o(this,Hi)&&t.measureRows(this.renderRoot.querySelectorAll("tbody tr[data-index]")),l(this,r,Jf).call(this,!o(this,Hi)),o(this,Hi)||l(this,r,uC).call(this),o(this,Xe)&&this.offsetWidth>0){w(this,Xe,!1);const a=l(this,r,a_).call(this),c=l(this,r,pm).call(this);o(this,Oo).call(this),(a||c&&(this.columnResizing||l(this,r,s_).call(this)))&&(w(this,Xe,a),this.requestUpdate())}const n=o(this,Ne)!==o(this,js);l(this,r,fd).call(this,n?"api":null),n&&l(this,r,YC).call(this);const i=o(this,Uo);w(this,Uo,void 0),w(this,Zi,void 0),i&&l(this,r,fp).call(this,i.previous,i.source),(o(this,je)||o(this,ln))&&l(this,r,_m).call(this),l(this,r,AC).call(this),l(this,r,n_).call(this),l(this,r,TA).call(this),l(this,r,AA).call(this),o(this,Lo)&&this.updateComplete.then(()=>{!this.shadowRoot?.activeElement&&(!document.activeElement||document.activeElement===document.body)&&(w(this,je,!0),this.requestUpdate())}),o(this,Lo)&&!this.shadowRoot?.activeElement&&!this.matches(":focus-within")&&(!document.activeElement||document.activeElement===document.body)&&(w(this,Lo,!1),w(this,je,!0),l(this,r,_m).call(this));const s=o(this,Xr);s&&(w(this,Xr,void 0),s.pageIndex!==o(this,lt)&&this.dispatchEvent(new CustomEvent("u-grid-page-change",l(this,r,Re).call(this,{pageIndex:o(this,lt),previousPageIndex:s.pageIndex,pageSize:o(this,r,jt),previousPageSize:s.pageSize,source:s.source})))),l(this,r,w_).call(this),l(this,r,b_).call(this),l(this,r,oC).call(this),(o(this,Ro)||e.has("_regularColumns")||e.has("_groupColumns")||e.has("showColumnHeaders")||e.has("showGroupPanel")||e.has("columnChooser"))&&(w(this,Ro,!1),l(this,r,tk).call(this))}sortColumn(e,t,n={}){this._isBand(e)||l(this,r,zr).call(this,Hl(o(this,qe),e,t,n.append??!1,o(this,wi)),"api")}sortBy(e,t,n={}){l(this,r,Eo).call(this,"sortBy()","sortColumn()"),this.sortColumn(e,t,n)}clearSorting(){l(this,r,zr).call(this,[],"api")}getSorting(){return o(this,qe).map(({column:e,order:t})=>({column:e,order:t}))}groupColumn(e,t){l(this,r,kn).call(this,!0,e,t??this._groupColumns.length,"api")}ungroupColumn(e){this._groupColumns.includes(e)&&l(this,r,kn).call(this,!1,e,this._regularColumns.length,"api")}getGrouping(){return[...this._groupColumns]}expandAllGroups(e){l(this,r,rr).call(this,!0,e,"api")}collapseAllGroups(e){l(this,r,rr).call(this,!1,e,"api")}expandGroup(e){l(this,r,Qf).call(this,e,!0)}collapseGroup(e){l(this,r,Qf).call(this,e,!1)}isGroupExpanded(e){const t=Array.isArray(e)?$i(e,this._groupColumns):void 0;return t!==void 0&&o(this,ls).call(this,t,e.length-1)}expandRow(e){l(this,r,Jn).call(this,e,!0,"api")}collapseRow(e){l(this,r,Jn).call(this,e,!1,"api")}isRowExpanded(e){return o(this,r,Bg)&&l(this,r,Qn).call(this,e)}expandNode(e){return l(this,r,ki).call(this,e,!0,"api")}collapseNode(e){l(this,r,ki).call(this,e,!1,"api")}isNodeExpanded(e){l(this,r,ze).call(this);const t=l(this,r,Qs).call(this,e);return o(this,r,Ce)&&t>=0&&l(this,r,Nn).call(this,t)}expandAllNodes(){l(this,r,Zf).call(this,!0,"api")}collapseAllNodes(){l(this,r,Zf).call(this,!1,"api")}getNodeSummaryValues(e){l(this,r,ze).call(this);const t=l(this,r,Qs).call(this,e);if(!o(this,r,Ce)||t<0||!o(this,et)||!Da(o(this,et),t)||o(this,et).visible&&!o(this,et).visible[t])return[];const n=l(this,r,Na).call(this,t);return o(this,ft).map((i,s)=>l(this,r,jr).call(this,i,n[s]))}getSummaryValues(e){if(l(this,r,ze).call(this),e===void 0)return o(this,Yt).map((n,i)=>l(this,r,jr).call(this,n,o(this,ns)[i]));const t=l(this,r,Zg).call(this,e);return t?o(this,ft).map((n,i)=>l(this,r,jr).call(this,n,t.summaries[i])):[]}moveColumn(e,t){l(this,r,kn).call(this,!1,e,t,"api")}_dragStarted(){w(this,Br,!0)}setColumnWidth(e,t){if(!this._regularColumns.includes(e)||!Number.isFinite(t))return;const{min:n,max:i}=this._boundsOf(e);this._setUserWidths(new Map([[e,Zs(t,n,i)]]))}autoSizeColumn(e){if(this._isBand(e)){this._visibleColumns.filter(n=>this._bandChainOf(n).includes(e)).forEach(n=>this.autoSizeColumn(n));return}const t=l(this,r,Sv).call(this,e);t!==void 0&&this.setColumnWidth(e,t)}autoSizeAllColumns(){[...this._visibleColumns].forEach(e=>this.autoSizeColumn(e))}resetColumns(){w(this,Ms,!0),l(this,r,Hh).call(this),l(this,r,Yg).call(this)}async refresh(){if(w(this,Ji,!1),w(this,Ir,!1),!o(this,Ae)){w(this,$t,!0),o(this,vn).clear(),o(this,Xn).clear(),o(this,di).clear(),o(this,ne).invalidate(),w(this,Zn,!0),w(this,yt,!0),w(this,kt,!0),this.requestUpdate(),await this.updateComplete;return}zi(this,ra)._++,this.requestUpdate(),await this.updateComplete,await o(this,Qe).whenSettled(),await this.updateComplete}applyChanges(e){l(this,r,Jg).call(this,e,this.reshapeOnChanges)}getTotalCount(){return l(this,r,ze).call(this),o(this,Wn)}clearFilter(){o(this,Dt).discardDrafts(),o(this,Fs).discardDraft(),l(this,r,Yh).call(this,null,"","api")}getCombinedFilter(){return o(this,ne).combined()}openColumnChooser(){o(this,Vn).show()}closeColumnChooser(){o(this,Vn).hide()}showColumnChooser(){l(this,r,Eo).call(this,"showColumnChooser()","openColumnChooser()"),this.openColumnChooser()}selectRows(e,t={}){l(this,r,xm).call(this,e,t.append??!1,"api")}deselectRows(e){if(o(this,r,pt)!=="none"){if(o(this,r,Ia)){l(this,r,ze).call(this),l(this,r,wn).call(this,o(this,ie).replace(l(this,r,Gd).call(this,e,!1,new Set(o(this,ie).keys))),"api");return}l(this,r,wn).call(this,o(this,ie).remove(e),"api")}}selectAll(){l(this,r,Fl).call(this,!0,"api")}deselectAll(){l(this,r,Fl).call(this,!1,"api")}clearSelection(){o(this,r,pt)!=="none"&&l(this,r,wn).call(this,o(this,ie).replace([]),"api")}isRowSelected(e){return o(this,ie).has(e)}getSelectedItems(){if(!o(this,ie).size)return[];l(this,r,ze).call(this);const e=new Map;for(const t of l(this,r,rh).call(this)){const n=o(this,Z).call(this,t);o(this,ie).has(n)&&!e.has(n)&&e.set(n,t)}return o(this,ie).keys.filter(t=>e.has(t)).map(t=>e.get(t))}focusCell(e,t,n){l(this,r,ze).call(this);const i=n?.rowFixed;if(n?.expandAncestors&&!i&&l(this,r,Ye).call(this,e)<0){const f=t==null?void 0:l(this,r,Mr).call(this,t);(t==null||f&&(this._visibleColumns.includes(f)||o(this,Ne).includes(f))&&!this._groupColumns.includes(f))&&l(this,r,fC).call(this,e)&&l(this,r,ze).call(this)}const s=i?l(this,r,us).call(this)[i].findIndex(f=>o(this,Z).call(this,f.item)===e):-1,a=i?s<0?-1:l(this,r,gn).call(this,i,s):l(this,r,Ye).call(this,e);if(a<0)return!1;const c=l(this,r,Je).call(this),h=t==null?void 0:l(this,r,Mr).call(this,t),u=h?c.indexOf(h):t==null?c.indexOf(this._visibleColumns[0]):-1;return h&&u<0&&o(this,Ne).includes(h)?l(this,r,Cv).call(this,e,h,"api",i??void 0):t!=null&&u<0?!1:(l(this,r,Oe).call(this,{row:a,col:Math.max(u,0)},"api",{focus:!0,reveal:!0}),!0)}editCell(e,t){l(this,r,ze).call(this);const n=l(this,r,Ye).call(this,e),i=l(this,r,Mr).call(this,t);return n>=0&&!!i&&l(this,r,pn).call(this,n,i,"api")}editRow(e){if(this.editMode!=="row")return!1;l(this,r,ze).call(this);const t=l(this,r,Ye).call(this,e);return t>=0&&l(this,r,pn).call(this,t,null,"api")}addRow(e={},t){return l(this,r,cp).call(this,e,"api",null,t?.parentKey)}removeRow(e){return l(this,r,bc).call(this,e,"api")}restoreRow(e){l(this,r,hp).call(this,e,"api")}saveChanges(){return l(this,r,vo).call(this,"api")}discardChanges(){l(this,r,Ku).call(this,"api")}hasChanges(){return o(this,se).size>0||!!o(this,he)?.drafts.size}getChanges(){return[...o(this,se).values()].map(na)}async getExportData(e={}){const t=l(this,r,Ol).call(this,e),n=await i1(t,e.signal);return{columns:t.columns.map(i=>i.info),rows:n}}async exportCsv(e={}){return n1(l(this,r,Ol).call(this,e),e,this.language)}async downloadCsv(e={}){FE(await this.exportCsv(e),e.fileName||"export.csv")}_exportStream(e){const t=l(this,r,Ol).call(this,e);return{columns:t.columns.map(n=>n.info),rows:zd(t),totalCount:t.items.length+(t.fixedTop?.length??0)+(t.fixedBottom?.length??0),maxLevel:BE(t)}}get _exportTranslation(){return o(this,r,B)}get _exportLanguages(){return{content:o(this,r,ir),text:o(this,r,tt)}}get _exportName(){return o(this,Hn).name}getCellRanges(){return[...o(this,Gn)]}selectCellRange(e,t={}){const n=o(this,r,Ft);if(n==="none"||!e)return!1;l(this,r,ze).call(this);const i=l(this,r,Je).call(this),s=l(this,r,Mr).call(this,e.startColumn),a=l(this,r,Mr).call(this,e.endColumn),c=s?i.indexOf(s):-1,h=a?i.indexOf(a):-1,{startRowIndex:u,endRowIndex:f}=e;if(c<0||h<0||!Number.isInteger(u)||!Number.isInteger(f)||!l(this,r,Pi).call(this,u)||!l(this,r,Pi).call(this,f))return!1;const g={anchorRow:u,anchorCol:c,endRow:f,endCol:h},v=!!t.append&&n==="multiple";return $0(g)&&!(v&&o(this,ke).length)?!1:(w(this,Tt,!1),l(this,r,Kn).call(this,[...v?o(this,ke):[],g],"api"),l(this,r,Oe).call(this,{row:f,col:h},"api"),!0)}clearCellRanges(){w(this,Tt,!1),l(this,r,Kn).call(this,[],"api")}getCellRangeSummary(e={}){l(this,r,ze).call(this);const t=o(this,ae),n=l(this,r,Je).call(this),i=Rg(o(this,Qt));return d1(i,s=>{const a=s>=0&&s<t.length?t.at(s):void 0;return!a||!In(a)?Cy:a.skeleton?_y:l(this,r,Zu).call(this,a)},s=>Ra(n[s])??void 0,(s,a)=>ti(s,a),e.signal)}getRowIndex(e){return l(this,r,ze).call(this),l(this,r,Ye).call(this,e)}getRowKey(e){l(this,r,ze).call(this);const t=l(this,r,pe).call(this,e);return $e(t)?o(this,Z).call(this,t.item):void 0}focus(e){if(o(this,r,is)){w(this,je,!0);return}const t=l(this,r,si).call(this);t?t.focus(e):super.focus(e)}_columnChanged(e,t){if(w(this,$s,void 0),t==="display"&&!e.path&&e.valueGetter&&o(this,ne).invalidate(),t==="columns"){o(this,Er)||l(this,r,Tr).call(this);return}if(o(this,Ie).childrenOf.has(e)||px(e)){px(e)!==o(this,Ie).childrenOf.has(e)&&l(this,r,Tr).call(this),w(this,Xe,!0),this.requestUpdate();return}const n=this._groupColumns.includes(e);if(!(!n&&!this._regularColumns.includes(e))){if(t==="groupIndex"){l(this,r,Eo).call(this,"changing groupIndex after the column is rendered","groupColumn()/ungroupColumn()");const i=e.groupIndex;i==null?n&&l(this,r,kn).call(this,!1,e,this._regularColumns.length,null):l(this,r,kn).call(this,!0,e,i,null)}t==="value"&&(w(this,Zn,!0),w(this,yt,!0),o(this,kt)||w(this,kt,o(this,ft).length>0),o(this,Xn).delete(e),o(this,di).delete(e),o(this,vn).delete(e),o(this,ne).invalidate(),o(this,$t)||w(this,$t,n||o(this,qe).some(i=>i.column===e))),this.requestUpdate()}}getAdaptiveColumns(){return[...o(this,Ne)]}_isColumnVisible(e){const t=o(this,Ie);if(!l(this,r,En).call(this,e))return!1;let n=t.parentOf.get(e)??null;for(;n;){if(!l(this,r,En).call(this,n))return!1;n=t.parentOf.get(n)??null}return t.childrenOf.has(e)?l(this,r,o_).call(this).has(e):!0}_fixedOf(e){const t=o(this,Ie).parentOf.has(e)?C1(o(this,Ie),e):e;return o(this,an).has(t)?o(this,an).get(t):Md(t.fixed)}_isBand(e){return o(this,Ie).childrenOf.has(e)}_parentBandOf(e){return o(this,Ie).parentOf.get(e)??null}_bandChainOf(e){return Ls(o(this,Ie),e)}_siblingIndexOf(e){return l(this,r,oh).call(this,e).indexOf(e)}_isRegularColumn(e){return this._regularColumns.includes(e)||o(this,Ie).childrenOf.has(e)&&this._regularColumns.some(t=>Ls(o(this,Ie),t).includes(e))}_sameBlock(e,t){return this._fixedOf(e)===this._fixedOf(t)}_canDropColumn(e,t){return this._parentBandOf(e)===this._parentBandOf(t)&&this._sameBlock(e,t)}_userMoveColumn(e,t){const n=this._siblingIndexOf(e);l(this,r,kn).call(this,!1,e,t,"user");const i=this._siblingIndexOf(e);n>=0&&i!==n&&(w(this,Zi,"user"),this.dispatchEvent(new CustomEvent("u-grid-column-reorder",l(this,r,Re).call(this,{column:e,band:this._parentBandOf(e),index:i,previousIndex:n,fromIndex:n,toIndex:i}))))}_userGroupColumn(e,t){!this._groupColumns.includes(e)&&!Bc(e)||l(this,r,kn).call(this,!0,e,t,"user")}_userSetVisible(e,t){if(!this._isRegularColumn(e))return!1;const n=o(this,Ie),i=[],s=(c,h)=>{l(this,r,En).call(this,c)!==h&&i.push(c)};if(t){const c=!l(this,r,En).call(this,e)||Ls(n,e).some(h=>!l(this,r,En).call(this,h));if(Ls(n,e).forEach(h=>s(h,!0)),s(e,!0),n.childrenOf.has(e)&&(!c||!l(this,r,i_).call(this,e))){const h=u=>(n.childrenOf.get(u)??[]).filter(f=>f.showInChooser!==!1).forEach(f=>{s(f,!0),h(f)});h(e)}}else this._isColumnVisible(e)&&s(e,!1);if(!i.length)return!1;const a=new Map(i.map(c=>[c,o(this,_t).get(c)]));return i.forEach(c=>o(this,_t).set(c,t)),w(this,Cn,void 0),!t&&!this._regularColumns.some(c=>this._isColumnVisible(c))?(a.forEach((c,h)=>c===void 0?o(this,_t).delete(h):o(this,_t).set(h,c)),w(this,Cn,void 0),this.requestUpdate(),!1):(w(this,Xe,!0),this.requestUpdate(),w(this,Zi,"user"),i.forEach(c=>this.dispatchEvent(new CustomEvent("u-grid-column-visibility-change",l(this,r,Re).call(this,{column:c,visible:t})))),!0)}_userSetFixed(e,t){const n=this._fixedOf(e);!this._isRegularColumn(e)||this._parentBandOf(e)||n===t||(o(this,an).set(e,t),w(this,Xe,!0),this.requestUpdate(),w(this,Zi,"user"),this.dispatchEvent(new CustomEvent("u-grid-column-fixed-change",l(this,r,Re).call(this,{column:e,fixed:t,previousFixed:n}))))}_boundsOf(e){const t=Math.max(0,e.minWidth??y0),n=e.maxWidth??1/0,i=l(this,r,ii).call(this,e)??o(this,Rn).get(e)??t;return{width:Math.round(i),min:t,max:n}}_resizeNeighbor(e){const t=this._visibleColumns[this._visibleColumns.indexOf(e)+1];return t&&l(this,r,ar).call(this,t)?t:void 0}_freezeWidths(){l(this,r,pm).call(this);for(const e of this._visibleColumns){if(o(this,Ct).has(e))continue;const t=l(this,r,ii).call(this,e)??o(this,Rn).get(e);t!==void 0&&o(this,Ct).set(e,Math.round(t))}}_setUserWidths(e){for(const[t,n]of e)o(this,Ct).set(t,n);w(this,Xe,!0),this.requestUpdate()}_isRtl(){return fg(this)}_setResizing(e){this._containerRef.value?.classList.toggle("resizing",e),!e&&this.autoHideColumns&&(w(this,Un,!0),this.requestUpdate())}_showResizeLine(e){const t=this._containerRef.value;if(t){if(e===null){t.style.removeProperty("--_resize-line-left");return}t.style.setProperty("--_resize-line-left",`${Math.floor(e-t.getBoundingClientRect().left-1)}px`)}}_dispatchColumnResize(e){this.dispatchEvent(new CustomEvent("u-grid-column-resize",l(this,r,Re).call(this,e)))}_filterContext(){const e=[...this._regularColumns,...this._groupColumns],t=new Set(e),n=new Map,i=o(this,r,B),s=this.language,a=h=>t.has(h)?l(this,r,en).call(this,h):iy(l(this,r,Ov).call(this),h),c=h=>{let u=n.get(h);return u||(u={language:s,dataType:a(h),...Fc(h,i)},n.set(h,u)),u};return{language:s,columns:e,resolve:o(this,Mn),dataTypeOf:a,textOf:(h,u)=>Ww(h,u,c(u)),alphabetOf:h=>AE(h,c(h),La),allConvert:h=>{let u=o(this,di).get(h);return u===void 0&&(u=AM(o(this,bt),h,a(h)),t.has(h)&&o(this,di).set(h,u)),u}}}_searchColumns(){return[...this._groupColumns,...this._shownColumns].filter(e=>l(this,r,lr).call(this,e))}_columnDataType(e){return l(this,r,en).call(this,e)}_isFilterable(e){return l(this,r,lr).call(this,e)}_resolveFilterField(e){return o(this,Mn).call(this,e)}_userFilterColumn(e,t,n){l(this,r,Yh).call(this,Gf(o(this,ne).filterValue,e,t,n,o(this,Mn)),o(this,ne).searchText,"user")}_userSearch(e){l(this,r,Yh).call(this,o(this,ne).filterValue,e,"user")}_distinctValues(e){const t=uu(PM(o(this,ne).filterValue,e,o(this,Mn)),Bf(o(this,ne).searchText,this._searchColumns()));let n=o(this,bt);try{n=DM(n,Qy(t,this._filterContext()))}catch{}return K$(n,e,{language:this.language,dataType:l(this,r,en).call(this,e),textOf:(i,s)=>Ww(i,s,l(this,r,Ha).call(this,s))})}render(){const e=o(this,r,is);zi(this,sa)._++,e||(w(this,Tu,!0),l(this,r,ze).call(this)),w(this,Hi,this._visibleColumns.some(X=>X.wrap));const t=o(this,ae),n=o(this,ht);n.count=t.length;const i=n.renderWindow();w(this,rd,t.offset+i.first);const s=l(this,r,Je).call(this);l(this,r,k_).call(this,s),l(this,r,E_).call(this,s),l(this,r,TC).call(this);const a=l(this,r,f_).call(this,l(this,r,r_).call(this)),c=o(this,Nt)+(this.showFilterRow?1:0),h=o(this,Yt).length?1:0,{top:u,bottom:f}=e?{top:[],bottom:[]}:l(this,r,us).call(this),g=o(this,r,pt),v={striped:this.striped,"row-lines":this.showRowLines,"column-lines":this.showColumnLines},y=a.length>0&&(o(this,r,po)||o(this,r,Ge)||a.every(({column:X})=>o(this,Ct).has(X)||X.width!==null&&X.width!==void 0||o(this,bn).has(X))),_=a.reduce((X,{headerClasses:Q,width:ge})=>X+(Q["fixed-end"]?ge??0:0),0),E=a.reduce((X,{headerClasses:Q,width:ge})=>X+(Q["fixed-start"]?ge??0:0),0);w(this,kc,{start:l(this,r,Xo).call(this)+E,end:_});const $=`scroll-padding-inline: ${l(this,r,Xo).call(this)+E}px ${_}px; --_fixed-start: ${l(this,r,Xo).call(this)+E}px; --_fixed-end: ${_}px;`+(o(this,Ae)&&o(this,Qe).error?" scroll-padding-block-end: 56px;":""),z=o(this,r,Ge),D={role:this._groupColumns.length||o(this,r,Ce)?"treegrid":"grid",label:o(this,Hn).name||void 0,rowCount:`${e||o(this,r,sA)||o(this,r,Tm)?-1:o(this,r,dd)+c+h+u.length+f.length}`,colCount:`${s.length}`,multiselectable:g==="multiple"||o(this,r,Ft)!=="none"?"true":void 0,busy:e||o(this,r,cs)&&!o(this,Ks)||o(this,ne).pending||o(this,r,Tm)?"true":void 0,rowMenu:this.rowMenu||o(this,r,Ft)!=="none"?"":void 0,scrollPadding:$},I=`grid-table${y?" fit":""}${o(this,r,Ft)!=="none"?" cell-range-mode":""}`,j={className:I,colgroup:()=>L`<colgroup>${l(this,r,H_).call(this,a,y&&!o(this,r,po))}</colgroup>`,head:l(this,r,V_).call(this,a),fixedTop:u.length?l(this,r,zm).call(this,"top",u,c,a):P,body:L`<tbody
              class="body-rows"
              role=${z?"presentation":"rowgroup"}
              style="height: ${n.getTotalSize()}px;"
              @click=${o(this,ym)}
              @dblclick=${o(this,Em)}
              @pointerdown=${o(this,Mm)}>
              <tr class="spacer" role="presentation" aria-hidden="true" style="height: ${i.offset}px;"></tr>
              ${l(this,r,oA).call(this,i,c,a)}
              <tr class="filler" role="presentation"></tr>
            </tbody>`,fixedBottom:f.length?l(this,r,zm).call(this,"bottom",f,c,a):P,foot:h?l(this,r,mA).call(this,a,l(this,r,kp).call(this,o(this,ae).length,c)):P,hasHead:this.showColumnHeaders||this.showFilterRow||u.length>0,hasFoot:h>0||f.length>0,hasHeadRows:this.showColumnHeaders||this.showFilterRow,hasFixedTop:u.length>0,hasFixedBottom:f.length>0,hasTotals:h>0};return L`
      <div class=${`layout${e?" state-loading":""}${o(this,ve).external?" external-scroll":""}${z?" axis-block":""}`} ${it(o(this,sr))}>
      <div
        class="container ${Ni(v)}"
        ${it(this._containerRef)}>
        <div class="scroll-container" style=${z?"":$} .inert=${e} ${it(this._scrollContainerRef)}>
          ${o(this,ve).external&&!z?L`<div class="port-masks" aria-hidden="true"><div class="port-mask"></div><div class="port-mask"></div></div>`:P}
          ${l(this,r,SA).call(this)}
          ${z?l(this,r,j_).call(this,D,j):L`<table
            class=${I}
            role=${D.role}
            aria-label=${W(D.label)}
            aria-rowcount=${D.rowCount}
            aria-colcount=${D.colCount}
            aria-multiselectable=${W(D.multiselectable)}
            aria-busy=${W(D.busy)}
            ${it(o(this,tn))}
            ${it(o(this,$n))}
            @pointerover=${o(this,hd)}
            @keydown=${o(this,xd)}
            @copy=${o(this,qu)}
            data-row-menu=${W(D.rowMenu)}
            @contextmenu=${o(this,kd)}
            @pointerdown=${o(this,Lc)}
            @click=${o(this,Oc)}
            @beforecopy=${o(this,ju)}
            @paste=${o(this,Yu)}
            @focusin=${o(this,wd)}
            @focusout=${o(this,yd)}>
            ${j.colgroup()}
            ${j.head}
            ${j.fixedTop}
            ${j.body}
            ${j.fixedBottom}
            ${j.foot}
          </table>`}
        </div>
        ${l(this,r,Mo).call(this,l(this,r,aA).call(this))}
        ${l(this,r,Mo).call(this,o(this,Vn).open?l(this,r,ek).call(this):P)}
        ${l(this,r,Mo).call(this,this.headerFilter?mR(o(this,yi),o(this,r,B)):P)}
        ${l(this,r,Mo).call(this,o(this,Dt).menuColumn?YM(o(this,Dt),o(this,Dt).menuColumn,l(this,r,en).call(this,o(this,Dt).menuColumn),o(this,r,B)):P)}
      </div>
      ${l(this,r,Mo).call(this,l(this,r,GC).call(this))}
      ${l(this,r,Mo).call(this,this.paging?l(this,r,lA).call(this):P)}
      </div>
      ${o(this,Ke).open?l(this,r,jA).call(this):P}
      ${o(this,ut).open?l(this,r,RA).call(this):P}
      <div class="visually-hidden" role="status" aria-live="polite" aria-atomic="true" lang=${o(this,r,tt)}>${o(this,ni)}</div>
      ${o(this,r,dt)?L`<div hidden lang=${o(this,r,tt)}><span id="edit-desc-added">${o(this,r,B).addedRowDescription}</span><span
            id="edit-desc-removed">${o(this,r,B).removedRowDescription}</span><span
            id="edit-desc-modified">${o(this,r,B).modifiedCellDescription}</span></div>`:P}
      ${l(this,r,QA).call(this)}
      <slot hidden @slotchange=${o(this,Xh)}></slot>
    `}cancelExport(){o(this,gt)?.abort(new DOMException("The export was canceled.","AbortError"))}async copySelection(){if(this.clipboardMode==="none")return!1;l(this,r,ze).call(this);const e={row:o(this,Le),col:o(this,Fe)},t=o(this,ke)[o(this,ke).length-1],n=t?l(this,r,Xu).call(this,{row:t.endRow,col:t.endCol}):void 0;if(n&&"refused"in n)return l(this,r,te).call(this,n.refused),!1;const i=n??(o(this,ie).size?l(this,r,Hu).call(this):void 0)??(e.row>=0?l(this,r,Dl).call(this,{position:e}):void 0);return i?l(this,r,qp).call(this,i,"api"):!1}openContextMenu(e,t){if(!this.hasUpdated||!e||typeof e!="object")return!1;l(this,r,ze).call(this);const n=l(this,r,Je).call(this);if("groupPath"in e){const c=Array.isArray(e.groupPath)?$i(e.groupPath,this._groupColumns):void 0;for(let h=0;c!==void 0&&h<o(this,ae).length;h++){const u=l(this,r,pe).call(this,h);if(u?.isGroup&&u.groupKey===c&&u.level===e.groupPath.length-1)return l(this,r,Bm).call(this,{row:h,col:Math.max(o(this,Fe),0)},t??null)}return!1}if("rowKey"in e){const c=l(this,r,Ye).call(this,e.rowKey),h=e.column?n.indexOf(e.column):Math.max(n.findIndex(u=>typeof u=="object"),0);return c>=0&&h>=0?l(this,r,Bm).call(this,{row:c,col:h},t??null):!1}const i=n.indexOf(e.column),s=this._isBand(e.column);if(i<0&&!s||!this.showColumnHeaders)return!1;const a=this.renderRoot.querySelector(`thead [data-col="${i>=0?i:-1}"]`)??[...this.renderRoot.querySelectorAll("thead th")].find(c=>this._nativeColumnMap.get(c)===e.column);return a?l(this,r,Va).call(this,e.column,a,{opener:t??null,returnFocus:t??null},null):!1}closeContextMenu(){o(this,Ke).hide()}};bt=new WeakMap;Ko=new WeakMap;Fd=new WeakMap;Bs=new WeakMap;Gs=new WeakMap;vu=new WeakMap;Xs=new WeakMap;sa=new WeakMap;r=new WeakSet;ri=function(e){const t=this.rowRenderer;if(!t||!e||e.isGroup||e.isFooter||e.isDetail||e.skeleton||e.key.startsWith("n:")||o(this,r,Ce))return;const n=l(this,r,wo).call(this),i=e.fixed??null;let s=o(this,Xs).get(e.key);return(!s||s.item!==e.item||s.renderer!==t||s.epoch!==n||s.fixed!==i)&&(l(this,r,Lg).call(this,s),s=l(this,r,I0).call(this,e.item,t,n,i),o(this,Xs).set(e.key,s)),s.pass=o(this,sa),s.result===!1?void 0:s};I0=function(e,t,n,i){const s={item:e,renderer:t,epoch:n,fixed:i,result:!1,controller:void 0,pass:o(this,sa),dead:!1},a=this,c=(h,u)=>{Nx.has(t)||(Nx.add(t),console.error(h,u))};try{const h=t(e,{item:e,rowKey:o(this,Z).call(this,e),fixed:i,grid:a,get signal(){return(s.controller??=new AbortController).signal}});h===!1||rz(h)?s.result=h:(c("[u-grid] rowRenderer returned an invalid value (use false to keep the columns); the full-width row was left empty.",h),s.result=P)}catch(h){c("[u-grid] rowRenderer threw; the row keeps its columns.",h),s.result=!1}return s.result===!1&&s.controller?.abort(),s};Lg=function(e){e&&!e.dead&&(e.dead=!0,e.controller?.abort())};Vf=function(e=!1){for(const[t,n]of o(this,Xs))(e||n.pass<o(this,sa))&&(l(this,r,Lg).call(this,n),o(this,Xs).delete(t))};lo=function(e){return!!this.rowRenderer&&!!l(this,r,ri).call(this,l(this,r,pe).call(this,e))};Rt=new WeakMap;Nd=new WeakMap;ec=new WeakMap;Wd=new WeakMap;Io=new WeakMap;El=new WeakMap;st=new WeakMap;Z=new WeakMap;on=new WeakMap;tc=new WeakMap;co=new WeakMap;Ae=new WeakMap;Ji=new WeakMap;Ks=new WeakMap;Ir=new WeakMap;Kt=new WeakMap;bu=new WeakMap;Qe=new WeakMap;Ys=new WeakMap;Ui=new WeakMap;ra=new WeakMap;Fo=new WeakMap;qs=new WeakMap;wu=new WeakMap;No=new WeakMap;Zt=new WeakMap;_i=new WeakMap;Ml=new WeakMap;xu=new WeakMap;Gt=function(){return!!o(this,Ae)&&(o(this,Kt).paging||o(this,Kt).grouping)&&!o(this,r,Ce)};be=new WeakMap;et=new WeakMap;nc=new WeakMap;Fr=new WeakMap;yu=new WeakMap;aa=new WeakMap;ic=new WeakMap;Nr=new WeakMap;Es=new WeakMap;Cu=new WeakMap;Fn=new WeakMap;Js=new WeakMap;At=new WeakMap;Ln=new WeakMap;Ai=new WeakMap;Mt=function(e,t){o(this,Cu).has(e)||(o(this,Cu).add(e),console.warn(`<u-grid>: ${t}`))};Ce=function(){const e=Kc(this.treeMode);return e==="none"?!1:e==="flat"&&(!o(this,st)||this.parentKeyExpr===null||this.parentKeyExpr===void 0||this.parentKeyExpr==="")?(l(this,r,Mt).call(this,"flat",'tree-mode="flat" needs "keyExpr" and "parentKeyExpr"; the items are shown as a list.'),!1):o(this,Ae)&&e!=="flat"?(l(this,r,Mt).call(this,"nested-remote",'a "dataSource" tree needs tree-mode="flat"; the items are shown as a list.'),!1):!0};qc=function(){return!!o(this,Ae)&&o(this,r,Ce)};Og=function(){return{mode:Kc(this.treeMode),childrenExpr:this.childrenExpr||"children",parentKeyExpr:this.parentKeyExpr??null,rootParentKey:this.rootParentKey??null,keyOf:o(this,st)?o(this,on):void 0}};Ia=function(){return!this.recursiveSelection||!o(this,r,Ce)?!1:o(this,r,pt)!=="multiple"||!this.showCheckboxes?(l(this,r,Mt).call(this,"recursive",'recursive-selection needs selection-mode="multiple" and show-checkboxes; ignored.'),!1):!0};Dg=function(){if(!o(this,r,Ce))return;const e=this._visibleColumns,t=this.treeColumn,n=t?l(this,r,Lv).call(this,t):void 0;return t&&!n&&l(this,r,Mt).call(this,"tree-column",`tree-column "${typeof t=="string"?t:fe(t)}" matches no column; the first visible column is used.`),n&&e.includes(n)?n:e[0]};Qs=function(e){return o(this,be).index?.keyIndex.get(e)??-1};F0=function(e){const t=o(this,be).index;if(!t)return-1;for(let n=0;n<t.nodes.length;n++)if(o(this,co).call(this,t.nodes[n])===e)return n;return-1};Bi=function(e){const t=o(this,et);return!t||e<0?!1:Da(t,e)>0?!0:l(this,r,Fa).call(this,e)};Fa=function(e){const t=o(this,be).index;if(!o(this,r,qc)||!t||!this.hasChildrenExpr||o(this,Kt).filtering&&o(this,ne).combined())return!1;const n=t.nodes[e];return!o(this,Js).has(o(this,Z).call(this,n))&&!!Eg(this.hasChildrenExpr)(n)};Pg=new WeakMap;N0=function(e){e.orphans&&l(this,r,Mt).call(this,"orphans",`${e.orphans} tree node(s) have a parent key with no item; shown as root nodes.`),e.cycles&&l(this,r,Mt).call(this,"cycles",`${e.cycles} tree node(s) close a cycle or repeat; the cycle is cut (shown as a root node) or the repeat ignored.`),e.duplicates&&l(this,r,Mt).call(this,"duplicates",`${e.duplicates} tree node(s) repeat a key; only the first one is a parent.`)};_u=new WeakMap;W0=function(e,t){const n=o(this,Ae)?o(this,Fn):o(this,Et),i=o(this,be).indexFor(n,l(this,r,Og).call(this));i!==o(this,nc)&&(w(this,nc,i),l(this,r,Wr).call(this,i.nodes),w(this,Fr,!0),w(this,Nr,void 0),w(this,ic,void 0),l(this,r,N0).call(this,i)),(o(this,$t)||t&&o(this,qe).length)&&(w(this,It,void 0),w(this,$t,!1),w(this,gi,!0));const s=String(this._searchColumns().map(zt));s!==o(this,da)&&(w(this,da,s),o(this,ne).searchColumnsChanged());const a=o(this,Kt).filtering?null:o(this,ne).maskFor(o(this,bt)),c=r$(this.treeFilterMode);if(a!==o(this,ho)&&(w(this,ho,a),w(this,gi,!0)),o(this,gi)||o(this,Fr)||c!==o(this,_u)){o(this,It)===void 0&&w(this,It,$g(o(this,bt),o(this,Kt).sorting?[]:o(this,qe),e,o(this,vn)));const h=QR(i,a,c);w(this,et,S0(i,h,o(this,It),c)),w(this,_u,c),w(this,ot,e0(o(this,bt),o(this,It),h));const u=a?JSON.stringify([o(this,ne).filterValue,o(this,ne).searchText]):"";a&&u!==o(this,yu)&&o(this,be).expandAncestors(a,f=>o(this,Z).call(this,i.nodes[f]),this.autoExpandNodes),w(this,yu,u),w(this,gi,!1),w(this,Fr,!1),w(this,yt,!0),w(this,Me,!0)}if(o(this,yt)&&(w(this,ns,Td(o(this,ot),o(this,Yt).map(({spec:h})=>h))),w(this,yt,!1)),(o(this,kt)||o(this,Oi).length)&&(w(this,Oi,[]),w(this,kt,!1)),o(this,Me)){const h=o(this,r,Vr);o(this,aa).clear(),w(this,ai,t$(i,o(this,et),o(this,Pg),o(this,co),o(this,r,qc)?u=>l(this,r,Fa).call(this,u):void 0,(u,f)=>l(this,r,G0).call(this,u,f,h),l(this,r,B0).call(this))),w(this,Me,!1),o(this,ht).measure()}w(this,Wn,o(this,ot).length),o(this,Ae)&&l(this,r,sd).call(this),l(this,r,td).call(this),l(this,r,ad).call(this)};B0=function(){const e=o(this,be).index;if(!o(this,r,qt)||!e)return;const t=this.autoExpandRows,n=new Set;for(const i of o(this,Rt)){const s=e.keyIndex.get(i);s!==void 0&&n.add(s)}return n.size?(i,s,a)=>{const c=[];for(let h=s;h<a;h++)n.has(i[h])&&c.push(h-s);return t||c.length?{all:t,positions:Int32Array.from(c)}:void 0}:t?()=>({all:t,positions:Sd}):void 0};G0=function(e,t,n){const i=o(this,et),s=o(this,be).index,a=o(this,co).call(this,s.nodes[e]),c=i.level[e];if(!Da(i,e)){t.push({isGroup:!1,key:`s:tree:${a}`,item:void 0,index:t.length,skeleton:!0,tree:{node:-1,level:c+1,posInSet:0,setSize:0}});return}n&&t.push({isGroup:!1,isFooter:!0,key:`f:n:${a}`,groupKey:`n:${a}`,level:c,path:[],summaries:l(this,r,Na).call(this,e)})};Na=function(e){let t=o(this,aa).get(e);if(!t){const n=o(this,be).index,i=o(this,et);t=n&&i&&o(this,ft).length?Td(s$(n,i,e),o(this,ft).map(({spec:s})=>s)):[],o(this,aa).set(e,t)}return t};Nn=function(e){const t=o(this,be).index;if(!t||!l(this,r,Bi).call(this,e))return!1;const n=o(this,Z).call(this,t.nodes[e]);return l(this,r,Fa).call(this,e)?o(this,At).has(n)||!!o(this,Ln)?.keys.includes(n):o(this,be).isExpanded(n,this.autoExpandNodes)};Li=function(){const e=o(this,r,Dg);return e?o(this,r,Ue)+this._visibleColumns.indexOf(e):-1};ki=function(e,t,n){l(this,r,ze).call(this);const i=l(this,r,Qs).call(this,e);if(!o(this,r,Ce)||i<0||!l(this,r,Bi).call(this,i))return Promise.resolve(!1);const s=l(this,r,Nn).call(this,i),a=t&&l(this,r,Fa).call(this,i);t||l(this,r,K0).call(this,i,e,n),o(this,be).set(e,t,this.autoExpandNodes),t||l(this,r,Bd).call(this,e);const c=a?l(this,r,Ig).call(this,e):void 0;return w(this,Me,!0),this.requestUpdate(),s!==t&&l(this,r,jc).call(this,e,t,n),c??Promise.resolve(t)};jc=function(e,t,n){this.dispatchEvent(new CustomEvent("u-grid-node-expansion-change",l(this,r,Re).call(this,{rowKey:e,expanded:t,source:n})))};K0=function(e,t,n){const i=l(this,r,pe).call(this,o(this,Le)),s=o(this,et),a=i&&(In(i)||mh(i))?i.tree:void 0;if(!s||!i||!a)return;let c=a.node;if(c<0){const u=o(this,be).index;c=u&&i.key===`s:tree:${o(this,co).call(this,u.nodes[e])}`?e:-1}else{if(c===e)return;for(;c>=0&&c!==e;)c=s.parent[c]}if(c!==e)return;const h=l(this,r,Ye).call(this,t);if(h>=0){const u=!!this.shadowRoot?.activeElement;l(this,r,Oe).call(this,{row:h,col:o(this,r,Li)>=0?o(this,r,Li):o(this,Fe)},n==="user"?"user":null,{focus:u})}};Zf=function(e,t){if(!o(this,r,Ce))return;if(l(this,r,ze).call(this),e&&o(this,r,qc)&&l(this,r,Mt).call(this,"remote-all",'expandAllNodes() and auto-expand-nodes with a "dataSource" only reach loaded nodes (no loads).'),!e){const i=l(this,r,pe).call(this,o(this,Le)),s=o(this,et),a=o(this,be).index,c=i&&In(i)&&i.key.startsWith("s:tree:")?l(this,r,F0).call(this,i.key.slice(7)):-1,h=c>=0?c:($e(i)||mh(i))&&i.tree?i.tree.node:-1;if(s&&a&&h>=0){let u=h;for(;s.parent[u]>=0;)u=s.parent[u];const f=l(this,r,Ye).call(this,o(this,Z).call(this,a.nodes[u]));if(f>=0&&f!==o(this,Le)){const g=o(this,r,Li)>=0?o(this,r,Li):o(this,Fe);l(this,r,Oe).call(this,{row:f,col:g},t==="user"?"user":null,{focus:!!this.shadowRoot?.activeElement})}}for(const u of[...o(this,At).keys()])l(this,r,Bd).call(this,u)}const n=o(this,be).all!==e||o(this,be).exceptions.size>0;o(this,be).setAll(e),w(this,Me,!0),this.requestUpdate(),n&&l(this,r,jc).call(this,null,e,t)};q0=function(e){const t=o(this,et),n=o(this,be).index;if(!t||!n)return;const i=t.parent[e],s=i<0?n.nodes.length:i;let a=0;for(let c=t.childStart[s];c<t.childStart[s+1];c++){const h=t.children[c];l(this,r,Bi).call(this,h)&&!l(this,r,Nn).call(this,h)&&(a++,l(this,r,ki).call(this,o(this,Z).call(this,n.nodes[h]),!0,"user"))}l(this,r,te).call(this,oe(o(this,r,B).nodesExpandedAnnouncement,{count:String(a)}))};Ig=function(e){return new Promise(t=>{const n=o(this,At).get(e);if(n){n.resolvers.push(t);return}let i=o(this,Ln);i||(i=w(this,Ln,{keys:[],resolvers:new Map}),queueMicrotask(()=>l(this,r,j0).call(this))),i.keys.includes(e)||i.keys.push(e);let s=i.resolvers.get(e);s||(s=[],i.resolvers.set(e,s)),s.push(t)})};j0=function(){const e=o(this,Ln);if(w(this,Ln,void 0),!e?.keys.length)return;const t=u=>{for(const f of e.resolvers.values())for(const g of f)g(u)};if(!this.isConnected||!o(this,r,qc)){t(!1);return}const n=new AbortController,i=e.keys;for(const u of i)o(this,At).set(u,{controller:n,resolvers:e.resolvers.get(u)??[]});const s=o(this,Hc),a=tg({sort:s?.sort??[],filter:s?.filter??null,filterValue:s?.filterValue??null,searchText:s?.searchText??"",group:[],groupPath:null,requireTotalCount:!1,requireGroupCount:!1,totalSummary:[],groupSummary:[],tree:{parentKeys:i.map(u=>u)}});l(this,r,U0).call(this);const c=(u,f)=>{const g=[];for(const v of i){const y=o(this,At).get(v);y?.controller===n&&(o(this,At).delete(v),g.push(...y.resolvers))}o(this,At).size||(clearTimeout(o(this,Ai)),w(this,Ai,void 0)),l(this,r,te).call(this,u?oe(o(this,r,B).childRowsLoadedAnnouncement,{count:String(f)}):o(this,r,B).childRowsLoadErrorAnnouncement),w(this,Me,!0),this.requestUpdate();for(const v of g)v(u)},h=l(this,r,Dv).call(this,a,n.signal);if(!h){for(const u of i)o(this,At).delete(u),l(this,r,Xf).call(this,u);t(!1),w(this,Me,!0),this.requestUpdate();return}h.then(u=>{if(n.signal.aborted)return;const f=Array.isArray(u?.data)?u.data:[];l(this,r,H0).call(this,i,f),c(!0,f.length)},()=>{if(!n.signal.aborted){for(const u of i)l(this,r,Xf).call(this,u);c(!1,0)}})};Xf=function(e){o(this,be).exceptions.has(e)&&!o(this,be).defaultExpanded(this.autoExpandNodes)&&o(this,be).set(e,!1,this.autoExpandNodes),l(this,r,jc).call(this,e,!1,"api")};H0=function(e,t){const n=o(this,on),i=o(this,be).index?.keyIndex,s=t.filter(a=>!i?.has(n(a)));for(const a of e)o(this,Js).add(a),o(this,be).set(a,!0,this.autoExpandNodes);if(s.length&&w(this,Fn,[...o(this,Fn),...s]),o(this,r,Ia)&&this.parentKeyExpr){const a=Eg(this.parentKeyExpr),c=s.filter(h=>e.some(u=>o(this,ie).has(u)&&String(a(h))===String(u))).map(h=>n(h));c.length&&l(this,r,wn).call(this,o(this,ie).add(c),"api")}};Bd=function(e){const t=o(this,At).get(e);if(t){o(this,At).delete(e),[...o(this,At).values()].some(n=>n.controller===t.controller)||t.controller.abort();for(const n of t.resolvers)n(!1)}};Au=function(){for(const t of[...o(this,At).keys()])l(this,r,Bd).call(this,t);const e=o(this,Ln);w(this,Ln,void 0);for(const t of e?.resolvers.values()??[])for(const n of t)n(!1);clearTimeout(o(this,Ai)),w(this,Ai,void 0)};U0=function(){o(this,Ai)||w(this,Ai,setTimeout(()=>{w(this,Ai,void 0),o(this,At).size&&l(this,r,te).call(this,o(this,r,B).childRowsLoadingAnnouncement)},RT))};Hc=new WeakMap;V0=function(){const e=o(this,be).index;if(e)return o(this,Nr)?.index!==e&&w(this,Nr,{index:e,view:n$(e)}),o(this,Nr).view};Gd=function(e,t,n){const i=o(this,be).index,s=l(this,r,V0).call(this);for(const a of e){const c=l(this,r,Qs).call(this,a);if(!i||!s||c<0){t?n.add(a):n.delete(a);continue}for(const h of i$(i,s,c,t,u=>n.has(o(this,Z).call(this,i.nodes[u])))){const u=o(this,Z).call(this,i.nodes[h]);t?n.add(u):n.delete(u)}}return n};Z0=function(e){const t=o(this,be).index;if(!t||e<0)return!1;let n=o(this,ic);return(n?.version!==o(this,ie).version||n.index!==t)&&(n=w(this,ic,{version:o(this,ie).version,index:t,partial:o$(t,i=>o(this,ie).has(o(this,Z).call(this,t.nodes[i])))})),!!n.partial[e]};Kd=function(e){if(!(!In(e)||!e.tree||e.tree.node<0||!l(this,r,Bi).call(this,e.tree.node)))return l(this,r,Nn).call(this,e.tree.node)?"true":"false"};er=function(e,t){return!!e.tree&&(e.tree.node>=0||e.key.startsWith("n:"))&&t===o(this,r,Dg)};Fg=function(e,t,n){if(!l(this,r,er).call(this,e,t))return n;const i=e.tree,s=i.node,a=l(this,r,Bi).call(this,s),c=a&&l(this,r,Nn).call(this,s),h=o(this,Z).call(this,e.item),u=o(this,At).has(h)||!!o(this,Ln)?.keys.includes(h),f=o(this,ft).length&&o(this,et)&&Da(o(this,et),s)?o(this,ft).map((g,v)=>({summary:g,position:v})).filter(({summary:g})=>(g.item.display??"inline")==="inline").map(({summary:g,position:v})=>l(this,r,Ua).call(this,g,l(this,r,Na).call(this,s)[v])):[];return L`<span class="tree-node" style="--_tree-level: ${i.level}">${a?L`<button
          class=${Ni({"tree-toggle":!0,expanded:c,loading:u})}
          part="tree-toggle-button"
          type="button"
          tabindex="-1"
          aria-hidden="true"
          @mousedown=${g=>g.preventDefault()}
          @click=${g=>l(this,r,X0).call(this,g,h,!c)}>${u?L`<span class="tree-spinner"></span>`:L`<span class="toggle-icon"><svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              width="1em"
              viewBox="0 -960 960 960"
              fill="currentColor"
              aria-hidden="true"><path d=${ak}/></svg></span>`}</button>`:L`<span class="tree-toggle-spacer"></span>`}<span class="tree-content">${n}</span>${f.length?L`<span class="tree-summary" part="node-summary">${l(this,r,Ng).call(this,f)}</span>`:P}</span>`};X0=function(e,t,n){e.stopPropagation();const i=e.currentTarget.closest("tr"),s=Number(i?.getAttribute("data-index"));Number.isInteger(s)&&o(this,r,Li)>=0&&l(this,r,Oe).call(this,{row:s,col:o(this,r,Li)},"user",{focus:!0}),l(this,r,ki).call(this,t,n,"user")};Ng=function(e){const t=o(this,r,Dn);return L`<span aria-hidden="true">${e.map(n=>n.text).join(t)}</span><span
      class="visually-hidden">${e.map(n=>n.label).join(t)}</span>`};Wa=function(e,t){const n=e.tree;if(!n||n.node<0||!o(this,ft).length||!o(this,et)||!Da(o(this,et),n.node))return;const i=l(this,r,Na).call(this,n.node),s=o(this,ft).map((a,c)=>({summary:a,position:c})).filter(({summary:a})=>a.item.display==="column"&&a.spec.column===t).map(({summary:a,position:c})=>l(this,r,Ua).call(this,a,i[c]));return s.length?s:void 0};Y0=function(){const e=o(this,r,Ce);if(e&&this._groupColumns.length){l(this,r,Mt).call(this,"grouping",'grouping is ignored with tree-mode; restored when tree-mode is "none".'),w(this,Es,[...this._groupColumns]);for(const t of o(this,Es))l(this,r,kn).call(this,!1,t,this._regularColumns.length,null)}else if(!e&&o(this,Es)){const t=o(this,Es);w(this,Es,void 0),t.forEach((n,i)=>{this._regularColumns.includes(n)&&l(this,r,kn).call(this,!0,n,i,null)})}e&&this.detailRenderer&&l(this,r,Mt).call(this,"detail","detailRenderer is ignored with tree-mode."),e&&this.rowRenderer&&l(this,r,Mt).call(this,"row-renderer","rowRenderer is ignored with tree-mode."),e&&o(this,Ae)&&(o(this,Kt).paging||o(this,Kt).grouping)&&l(this,r,Mt).call(this,"remote-paging","remote paging and grouping do not apply to a tree; children load per node."),e&&o(this,Ae)&&o(this,Ko)?.node?.length&&l(this,r,Mt).call(this,"remote-node-summary",'summary.node is off with a "dataSource" (children not loaded would make it partial).')};lt=new WeakMap;St=new WeakMap;ai=new WeakMap;Wn=new WeakMap;Et=new WeakMap;Wr=function(e){o(this,St)??w(this,St,"api"),w(this,bt,e),w(this,$t,!0),o(this,vn).clear(),o(this,Xn).clear(),w(this,Zn,!0),w(this,yt,!0),o(this,di).clear(),o(this,ne).invalidate(),w(this,Si,!0),w(this,Xe,!0)};ot=new WeakMap;It=new WeakMap;ho=new WeakMap;gi=new WeakMap;vn=new WeakMap;Oi=new WeakMap;ae=new WeakMap;$t=new WeakMap;kt=new WeakMap;Me=new WeakMap;ku=new WeakMap;Xn=new WeakMap;di=new WeakMap;Hi=new WeakMap;qh=new WeakMap;un=new WeakMap;Ba=new WeakMap;ts=new WeakMap;fr=new WeakMap;Zn=new WeakMap;yt=new WeakMap;Yt=new WeakMap;ft=new WeakMap;ns=new WeakMap;Rl=new WeakMap;Er=new WeakMap;gl=new WeakMap;Ie=new WeakMap;Ne=new WeakMap;js=new WeakMap;tr=new WeakMap;Wo=new WeakMap;Un=new WeakMap;zo=new WeakMap;oc=new WeakMap;vi=new WeakMap;sc=new WeakMap;qo=new WeakMap;Ct=new WeakMap;_t=new WeakMap;an=new WeakMap;bn=new WeakMap;Rn=new WeakMap;la=new WeakMap;qd=new WeakMap;$l=new WeakMap;Tl=new WeakMap;bi=new WeakMap;yn=new WeakMap;Nt=new WeakMap;ca=new WeakMap;zl=new WeakMap;ha=new WeakMap;Xe=new WeakMap;Si=new WeakMap;jh=new WeakMap;qe=new WeakMap;ni=new WeakMap;Br=new WeakMap;Su=function(){return this.sortMode==="none"||this.sortMode==="multiple"?this.sortMode:"single"};wi=new WeakMap;Ll=new WeakMap;Gr=new WeakMap;ua=new WeakMap;da=new WeakMap;Eu=new WeakMap;Mu=new WeakMap;ie=new WeakMap;jo=new WeakMap;Wg=new WeakMap;pt=function(){return _0(this.selectionMode)};_n=function(){return this.showCheckboxes&&o(this,r,pt)==="multiple"};qt=function(){return!!this.detailRenderer&&!o(this,r,Ce)||o(this,Ne).length>0};Bg=function(){return!!this.detailRenderer&&!o(this,r,Ce)||this.autoHideColumns};Ue=function(){return(o(this,r,qt)?1:0)+(o(this,r,_n)?1:0)};Uc=function(){return o(this,r,qt)?1:0};Ga=function(){return this._groupColumns.length*Ii+(o(this,r,qt)?Km:0)};ct=new WeakMap;Le=new WeakMap;xi=new WeakMap;Fe=new WeakMap;rc=new WeakMap;ac=new WeakMap;je=new WeakMap;ln=new WeakMap;Lo=new WeakMap;pa=new WeakMap;dn=new WeakMap;tn=new WeakMap;$n=new WeakMap;jd=new WeakMap;Hd=new WeakMap;Ud=new WeakMap;Vd=new WeakMap;fa=new WeakMap;Zd=new WeakMap;Xd=new WeakMap;Yd=new WeakMap;ma=new WeakMap;mr=new WeakMap;Jd=new WeakMap;lc=new WeakMap;Qd=new WeakMap;ga=new WeakMap;Ge=function(){return o(this,ve).bands};gr=function(){return[o(this,jd).value,o(this,Hd).value,o(this,tn).value,o(this,Ud).value,o(this,Vd).value].filter(e=>!!e?.isConnected)};nr=function(e){for(const t of l(this,r,gr).call(this)){const n=t.querySelector(e);if(n)return n}return null};Vc=function(){return l(this,r,gr).call(this).find(e=>e.tHead)?.tHead??null};Gg=function(){return l(this,r,gr).call(this).find(e=>e.tFoot)?.tFoot??null};cc=function(){return(o(this,r,Ge)?o(this,ma).value:void 0)??this._scrollContainerRef.value};Hn=new WeakMap;Ru=new WeakMap;Eo=function(e,t){o(this,Ru).has(e)||(o(this,Ru).add(e),console.warn(`<u-grid>: "${e}" is deprecated, use "${t}" instead.`))};$u=new WeakMap;vl=new WeakMap;Kg=new WeakMap;ir=function(){return o(this,$u)??o(this,Kg).value??KT()??qT()};B=function(){return Jl(o(this,r,ir))};tt=function(){const e=o(this,r,ir),t=Jl(e);return e&&t!==Jl(Yl)?e:Yl};Mo=function(e){return e===P?P:L`<div class="lang-scope" lang=${o(this,r,tt)}>${e}</div>`};Ps=new WeakMap;Rr=new WeakMap;Ho=new WeakMap;Jt=new WeakMap;Tu=new WeakMap;Kr=new WeakMap;Is=new WeakMap;zu=new WeakMap;hc=new WeakMap;uc=new WeakMap;Vi=new WeakMap;or=new WeakMap;Qi=new WeakMap;va=new WeakMap;dc=new WeakMap;pc=new WeakMap;Ms=new WeakMap;ep=function(){const e={version:fu},t=new Map(o(this,qe).map((i,s)=>[i.column,s])),n=[];for(const[i,s]of l(this,r,fc).call(this,[...this._regularColumns,...this._groupColumns])){const a=t.get(s),c=this._groupColumns.indexOf(s),h=!!this._parentBandOf(s);n.push({name:i,width:o(this,Ct).get(s)??null,visible:l(this,r,En).call(this,s),...h?{}:{fixed:this._fixedOf(s)},groupIndex:c>=0?c:null,sortOrder:a===void 0?null:o(this,qe)[a].order,sortIndex:a??null})}for(const[i,s]of l(this,r,fc).call(this,o(this,Ie).bands,!0))n.push({name:i,visible:l(this,r,En).call(this,s),...this._parentBandOf(s)?{}:{fixed:this._fixedOf(s)}});if(e.columns=n,e.filterValue=ck(o(this,ne).filterValue),e.searchText=o(this,ne).searchText,e.groupExpansion=l(this,r,J0).call(this),o(this,st)){e.selectedKeys=o(this,ie).keys.filter(zf);const i=[...o(this,Rt)].filter(zf);if(e.rowExpansion=this.autoExpandRows?{expanded:[],collapsed:i}:{expanded:i,collapsed:[]},o(this,r,Ce)){const s=o(this,be),a=[...s.exceptions].filter(zf),c=s.defaultExpanded(this.autoExpandNodes);e.nodeExpansion={all:s.all,expanded:c?[]:a,collapsed:c?a:[]}}}return e.pageIndex=o(this,lt),e.pageSize=o(this,r,jt),e};qg=function(){o(this,he)&&(l(this,r,gs).call(this),l(this,r,sn).call(this),o(this,je)||w(this,je,l(this,r,nh).call(this)))};Hh=function(){l(this,r,tp).call(this),zi(this,Is)._++,!this.isConnected&&!this.hasUpdated&&w(this,zu,!0),o(this,Jt)&&(w(this,Jt,!1),this.requestUpdate())};tp=function(){o(this,hc)??w(this,hc,{filterValue:o(this,ne).filterValue,searchText:o(this,ne).searchText,pageIndex:o(this,lt),pageSize:this.pageSize,selectedKeys:o(this,ie).keys})};Ei=function(e){o(this,pc).has(e)||(o(this,pc).add(e),console.warn(`<u-grid>: ${e}`))};fc=function(e,t=!1){const n=new Map;for(const i of e){const s=tz(i),a=(o(this,Ms)||!!o(this,Ps))&&!(t&&!s);s?n.has(s)?a&&l(this,r,Ei).call(this,`column name "${s}" is repeated; only the first column with it is in the state.`):n.set(s,i):a&&l(this,r,Ei).call(this,`a column without "name" or "path" (${JSON.stringify(fe(i))}) is left out of the state.`)}return n};J0=function(){const e=this._groupColumns,t=[],n=[];for(const[i,s]of o(this,un)){if(s.path.length>e.length||$i(s.path,e)!==i)continue;const a=s.path.map(oT);a.every(c=>c!==void 0)&&(s.expanded?t:n).push(a)}return{all:o(this,fr)??null,levels:Array.from(o(this,ts),i=>i??null),expanded:t,collapsed:n}};Lu=function(e,t,n){this.columns.length?l(this,r,jg).call(this,e,t,n):(o(this,Ho).push({state:e,partial:t,fromStorage:n}),this.requestUpdate())};Q0=function(){if(!o(this,Ho).length||!this.columns.length)return;const e=o(this,Ho);w(this,Ho,[]),e.forEach(({state:t,partial:n,fromStorage:i})=>l(this,r,jg).call(this,t,n,i))};jg=function(e,t,n){l(this,r,qg).call(this),l(this,r,tp).call(this);const i=o(this,hc),s=!t;if(e.columns?l(this,r,tC).call(this,e.columns):s&&l(this,r,eC).call(this),e.filterValue!==void 0||e.searchText!==void 0||s){const h=e.filterValue!==void 0?e.filterValue:s?i.filterValue:o(this,ne).filterValue,u=e.searchText??(s?i.searchText:o(this,ne).searchText);o(this,Dt).discardDrafts(),o(this,Fs).discardDraft(),o(this,ne).set(h,u)}if(w(this,ua,!1),o(this,pa).cancel("resize"),(e.groupExpansion||s)&&l(this,r,nC).call(this,e.groupExpansion),e.selectedKeys||s){const h=e.selectedKeys??i.selectedKeys;o(this,ie).replace(o(this,r,pt)==="single"?h.slice(-1):h)}if(e.nodeExpansion||s){const h=o(this,be);h.reset(),h.all=e.nodeExpansion?.all??null;const u=h.defaultExpanded(this.autoExpandNodes);for(const f of(u?e.nodeExpansion?.collapsed:e.nodeExpansion?.expanded)??[])h.exceptions.add(f);w(this,Me,!0)}if(e.rowExpansion||s){o(this,Rt).clear();for(const h of(this.autoExpandRows?e.rowExpansion?.collapsed:e.rowExpansion?.expanded)??[])o(this,Rt).add(h);w(this,Me,!0)}const a=e.pageSize??(s?i.pageSize:void 0);a!==void 0&&(a===i.pageSize||this.pageSizeOptions.includes(a))&&(this.pageSize=a);const c=e.pageIndex??(s?i.pageIndex:void 0);c!==void 0&&(this.pageIndex=c),l(this,r,Hg).call(this),w(this,Me,!0),w(this,Xe,!0),this.requestUpdate(),n&&(o(this,or).add("storage"),w(this,uc,void 0),l(this,r,Ug).call(this))};eC=function(){o(this,Ct).clear(),o(this,_t).clear(),o(this,an).clear(),o(this,bn).clear(),this._regularColumns=[],this._groupColumns=[],w(this,qe,[]),w(this,$t,!0),w(this,Xe,!0),l(this,r,Tr).call(this)};tC=function(e){const t=o(this,Ie).leaves,n=l(this,r,fc).call(this,t),i=l(this,r,fc).call(this,o(this,Ie).bands,!0),s=new Map,a=new Map;for(const v of e){const y=n.get(v.name),_=y?void 0:i.get(v.name);y&&!s.has(y)?s.set(y,v):_&&!a.has(_)&&a.set(_,v)}const c=[...s.keys(),...t.filter(v=>!s.has(v))],h=(v,y,_)=>{const E=s.get(v);return E?.[y]!==void 0?E[y]:_},u=v=>{const y=h(v,"groupIndex",v.groupIndex??null);return typeof y=="number"&&Number.isInteger(y)&&y>=0?y:null};o(this,Ct).clear(),o(this,_t).clear(),o(this,an).clear(),o(this,bn).clear();for(const[v,y]of s)typeof y.width=="number"&&o(this,Ct).set(v,Math.round(y.width)),y.visible!==void 0&&y.visible!==(v.visible!==!1)&&o(this,_t).set(v,y.visible),y.fixed!==void 0&&y.fixed!==Md(v.fixed)&&!this._parentBandOf(v)&&o(this,an).set(v,y.fixed);for(const[v,y]of a)y.visible!==void 0&&y.visible!==(v.visible!==!1)&&o(this,_t).set(v,y.visible),y.fixed!==void 0&&y.fixed!==Md(v.fixed)&&!this._parentBandOf(v)&&o(this,an).set(v,y.fixed);w(this,Cn,void 0);const f=c.filter(v=>u(v)===null),g=c.map((v,y)=>({column:v,position:y,index:u(v)})).filter(v=>v.index!==null).sort((v,y)=>v.index-y.index||v.position-y.position).map(v=>v.column);f.length&&!f.some(v=>this._isColumnVisible(v))&&(f.forEach(v=>o(this,_t).delete(v)),a.forEach((v,y)=>o(this,_t).delete(y)),w(this,Cn,void 0)),w(this,qe,c.map((v,y)=>({column:v,position:y,order:h(v,"sortOrder",v.sortOrder??null),index:h(v,"sortIndex",v.sortIndex??null)})).filter(v=>v.order==="asc"||v.order==="desc").sort((v,y)=>(v.index??1/0)-(y.index??1/0)||v.position-y.position).map(({column:v,order:y})=>({column:v,order:y}))),w(this,$t,!0),w(this,Si,!0),w(this,Xe,!0),l(this,r,Zo).call(this,f,g)};nC=function(e){if(l(this,r,zv).call(this),!e)return;w(this,fr,e.all??void 0),w(this,ts,e.levels.map(i=>i??void 0));const t=this._groupColumns,n=(i,s)=>{if(i.length>t.length)return;const a=Object.freeze(i.map((u,f)=>l(this,r,iC).call(this,u,t[f]))),c=$i(a,t),h=i.length-1;c!==void 0&&s!==l(this,r,xp).call(this,h)&&o(this,un).set(c,{expanded:s,level:h,path:a})};e.expanded.forEach(i=>n(i,!0)),e.collapsed.forEach(i=>n(i,!1))};iC=function(e,t){if(typeof e!="string"||t.groupValueGetter)return e;const n=l(this,r,en).call(this,t);return n==="date"||n==="datetime"?go(e)??e:e};Hg=function(){const e=new Set(this._regularColumns.filter(i=>this._isColumnVisible(i)));if(this.shadowRoot?.activeElement?.closest(".header-filter, .filter-menu")){const i=o(this,yi).column,s=o(this,Dt).menuColumn;(i&&!e.has(i)||s&&!e.has(s))&&w(this,je,!0)}o(this,yi).closeIfRemoved(e);const n=o(this,Dt).menuColumn;n&&!e.has(n)&&o(this,Dt).closeMenu()};Zc=function(){return sT(o(this,Ps),o(this,Rr),e=>l(this,r,Ei).call(this,e))};is=function(){return o(this,Jt)||Jm};Yf=function(){this.isConnected&&this.hasUpdated&&l(this,r,Ou).call(this),l(this,r,Iu).call(this)};Ou=function(){const e=o(this,r,Zc);if(!e){w(this,Kr,void 0);return}const t=e.kind==="custom"?e.storage:`${e.kind}:${e.key}`;if(t===o(this,Kr))return;w(this,Kr,t);const n=++zi(this,Is)._;if(e.kind!=="custom"){const s=rT(e.kind,e.key);"error"in s?l(this,r,Ei).call(this,`${s.error}; the initial state is used.`):l(this,r,Uh).call(this,s.value);return}let i;try{i=e.storage.load()}catch(s){l(this,r,Ei).call(this,`stateStorage.load() failed (${String(s)}); the initial state is used.`);return}if(!i||typeof i.then!="function"){l(this,r,Uh).call(this,i);return}o(this,Tu)||(w(this,Jt,!0),this.requestUpdate()),Promise.resolve(i).then(s=>{n===o(this,Is)&&l(this,r,Uh).call(this,s)},s=>{n===o(this,Is)&&l(this,r,Ei).call(this,`stateStorage.load() rejected (${String(s)}); the initial state is used.`)}).finally(()=>{n===o(this,Is)&&o(this,Jt)&&(w(this,Jt,!1),this.requestUpdate())})};Uh=function(e){if(e==null)return;const t=z0(e);if("error"in t){l(this,r,Ei).call(this,`the saved state is ignored: ${t.error}.`);return}l(this,r,Lu).call(this,t.state,!1,!0)};oC=function(){if(!this.isConnected||o(this,r,is)||o(this,Ho).length)return;const e=[this._regularColumns,this._groupColumns,o(this,qe),o(this,Ct).version,o(this,_t).version,o(this,an).version,o(this,ne).filterValue,o(this,ne).searchText,o(this,un).version,o(this,Ba),o(this,Rt).version,this.autoExpandRows,o(this,be).version,this.autoExpandNodes,this.treeMode,o(this,lt),o(this,r,jt),o(this,ie).version,o(this,st)],t=o(this,uc);if(w(this,uc,e),!t){o(this,Vi).clear(),o(this,va)??w(this,va,JSON.stringify(l(this,r,ep).call(this)));return}if(e.every((n,i)=>n===t[i])){o(this,Vi).clear();return}o(this,Vi).size?o(this,Vi).forEach(n=>o(this,or).add(n)):o(this,or).add("api"),o(this,Vi).clear(),l(this,r,Ug).call(this)};Ug=function(){if(!this.isConnected)return;const e=Number(this.stateChangeDelay);clearTimeout(o(this,Qi)),w(this,Qi,setTimeout(()=>l(this,r,Du).call(this),Number.isFinite(e)&&e>=0?e:iz))};Du=function(){clearTimeout(o(this,Qi)),w(this,Qi,void 0);const e=[...o(this,or)];o(this,or).clear();const t=l(this,r,ep).call(this),n=JSON.stringify(t),i=e.includes("storage");n===o(this,va)&&!i||(w(this,va,n),this.dispatchEvent(new CustomEvent("u-grid-state-change",l(this,r,Re).call(this,{state:t,sources:e}))),e.some(s=>s!=="storage")&&l(this,r,sC).call(this,n))};sC=function(e){const t=o(this,r,Zc);if(!t)return;if(t.kind!=="custom"){const i=aT(t.kind,t.key,e);i&&l(this,r,Ei).call(this,`${i}; the state was not saved.`);return}const n=i=>l(this,r,Ei).call(this,`stateStorage.save() failed (${String(i)}).`);try{const i=t.storage.save(JSON.parse(e));i&&typeof i.then=="function"&&Promise.resolve(i).catch(n)}catch(i){n(i)}};Pu=new WeakMap;Iu=function(){const e=!!this.isConnected&&!!o(this,r,Zc);e!==o(this,dc)&&(w(this,dc,e),e?window.addEventListener("pagehide",o(this,Pu)):window.removeEventListener("pagehide",o(this,Pu)))};sr=new WeakMap;ve=new WeakMap;ht=new WeakMap;Yn=new WeakMap;eo=new WeakMap;rC=function(){const e=o(this,Tn),t=new Set;if(e&&o(this,r,Ge))for(const n of[o(this,fa).value,o(this,mr).value])n?.isConnected&&t.add(n);else if(e&&(o(this,Bs).length||o(this,Gs).length||o(this,r,eb)))for(const n of[l(this,r,Vc).call(this),l(this,r,Gg).call(this),...l(this,r,gr).call(this).flatMap(i=>[...i.querySelectorAll(":scope > tbody.fixed-rows")])])n&&t.add(n);for(const n of o(this,eo))t.has(n)||(e?.unobserve(n),o(this,eo).delete(n));for(const n of t)o(this,eo).has(n)||(e.observe(n),o(this,eo).add(n));t.size&&l(this,r,Xc).call(this)};Xc=function(){const e=o(this,tn).value,t=this._scrollContainerRef.value,n=this._containerRef.value;if(!e||!t||!n)return;const i=l(this,r,nr).call(this,":scope > tbody.fixed-top-rows"),s=l(this,r,nr).call(this,":scope > tbody.fixed-bottom-rows"),a=o(this,Ci)?.isConnected?o(this,Ci).offsetHeight:0,c=l(this,r,Vc).call(this)?.offsetHeight??0,h=l(this,r,Gg).call(this)?.offsetHeight??0,u=o(this,ve).port,f=u?o(this,ve).padding():{top:0,bottom:0},g=u?u.clientHeight:t.clientHeight;if(o(this,r,Ge)){const E=o(this,fa).value?.isConnected?o(this,fa).value.offsetHeight:0,$=o(this,mr).value?.offsetHeight??0,z=a+E+$+f.top+f.bottom<=g*.5||!g;n.classList.toggle("bands-scroll",!z),n.classList.toggle("header-rows-scroll",!z),n.style.setProperty("--_fixed-top-offset",`${a}px`),n.style.setProperty("--_fixed-bottom-offset","0px"),z!==o(this,Yn)&&(w(this,Yn,z),n.classList.toggle("fixed-rows-scroll",!z));return}n.classList.remove("bands-scroll");const v=a+c+h+(i?.offsetHeight??0)+(s?.offsetHeight??0)+f.top+f.bottom,y=!(i||s)||v<=g*.5||!g,_=!o(this,r,eb)||a+c+f.top<=g*.5||!g;n.classList.toggle("header-rows-scroll",!_),n.style.setProperty("--_fixed-top-offset",`${_?a+c:a}px`),n.style.setProperty("--_fixed-bottom-offset",`${h}px`),y!==o(this,Yn)&&(w(this,Yn,y),n.classList.toggle("fixed-rows-scroll",!y))};qr=new WeakMap;Bo=new WeakMap;Ro=new WeakMap;os=new WeakMap;Vn=new WeakMap;Ke=new WeakMap;ut=new WeakMap;ks=new WeakMap;ne=new WeakMap;Dt=new WeakMap;yi=new WeakMap;Fs=new WeakMap;Tn=new WeakMap;Ci=new WeakMap;mc=new WeakMap;Vh=new WeakMap;Qn=function(e){return this.autoExpandRows!==o(this,Rt).has(e)};Jn=function(e,t,n){!o(this,r,Bg)||e===void 0||l(this,r,Qn).call(this,e)===t||(t===this.autoExpandRows?o(this,Rt).delete(e):o(this,Rt).add(e),w(this,Me,!0),this.requestUpdate(),this.dispatchEvent(new CustomEvent("u-grid-row-expansion-change",l(this,r,Re).call(this,{rowKey:e,expanded:t,source:n}))))};np=new WeakMap;aC=function(e){const t=o(this,Z).call(this,e);return t!==null&&typeof t=="object"?o(this,Nd).get(t):o(this,ec).get(t)};lC=function(e,t){const n=o(this,Z).call(this,e);n!==null&&typeof n=="object"?o(this,Nd).set(n,t):o(this,ec).set(n,t)};ip=new WeakMap;cC=function(){const e=o(this,ae);w(this,ip,e);const t=e.detailCount?e.detailIndices():Sd,n=new Float64Array(t.length),i=o(this,Wd)||this.rowHeight*3;t.forEach((s,a)=>{n[a]=l(this,r,aC).call(this,e.at(s).item)??i}),o(this,to).clear(),w(this,op,t),o(this,ht).count=e.length,o(this,ht).setVariableRows(t,n)};op=new WeakMap;to=new WeakMap;sp=new WeakMap;gc=new WeakMap;Vg=function(){const e=o(this,ht),t=o(this,op),n=[...o(this,to).keys()].sort((h,u)=>h-u),i=new Int32Array(t.length+n.length),s=new Float64Array(i.length);let a=0,c=0;for(let h=0;h<i.length;h++)c>=n.length||a<t.length&&t[a]<n[c]?(i[h]=t[a],s[h]=e.sizeOf(t[a++])):(i[h]=n[c],s[h]=o(this,to).get(n[c++]));e.setVariableRows(i,s)};hC=function(e){return e!==null&&typeof e=="object"?o(this,sp).get(e):o(this,gc).get(e)};uC=function(){const e=o(this,to);if(!this.rowRenderer&&!e.size)return;const t=o(this,ht),n=o(this,tn).value?.querySelector(":scope > tbody.body-rows"),i=n?[...n.querySelectorAll(":scope > tr[data-index]:not(.pinned)")]:[],s=[];let a=!1;for(const c of i){const h=Number(c.getAttribute("data-index"));if(c.classList.contains("full-width-row")){if(s.push(c),!e.has(h)){const u=l(this,r,pe).call(this,h);e.set(h,(u&&!u.isGroup&&!u.isFooter?l(this,r,hC).call(this,u.item):void 0)??this.rowHeight),a=!0}}else e.delete(h)&&(a=!0)}if(a&&l(this,r,Vg).call(this),!!s.length){t.measureRows(s,!1);for(const c of s){const h=Number(c.getAttribute("data-index")),u=t.sizeOf(h),f=l(this,r,pe).call(this,h);if(e.set(h,u),f&&!f.isGroup&&!f.isFooter){const{item:g}=f;g!==null&&typeof g=="object"?o(this,sp).set(g,u):o(this,gc).set(g,u)}}}};Jf=function(e){const t=[...this.renderRoot.querySelectorAll("tbody:not(.fixed-rows) > tr.detail-row:not(.pinned)")],n=o(this,El);if(!t.length&&!n.size)return;e&&o(this,ht).measureRows(t,!1);for(const s of t){const a=Number(s.getAttribute("data-index")),c=l(this,r,pe).call(this,a);if(mh(c)){const h=o(this,ht).sizeOf(a);w(this,Wd,h),l(this,r,lC).call(this,c.item,h)}}if(typeof ResizeObserver>"u")return;o(this,Io)??w(this,Io,new ResizeObserver(()=>{this.isConnected&&l(this,r,Jf).call(this,!0)}));const i=new Set(t);for(const s of n)i.has(s)||(o(this,Io).unobserve(s),n.delete(s));for(const s of t)n.has(s)||(o(this,Io).observe(s),n.add(s))};jr=function({item:e,spec:t},n){return{item:e,value:n??null,text:uy(n,t,e.format,l(this,r,Gv).call(this,t.column))}};Zg=function(e){if(!Array.isArray(e))return;let t=o(this,Oi),n;for(let i=0;i<e.length;i++){const s=$i(e.slice(0,i+1),this._groupColumns);if(n=s===void 0?void 0:t.find(a=>a.key===s),!n)return;t=n.children}return n};Qf=function(e,t){const n=Array.isArray(e)?$i(e,this._groupColumns):void 0;n!==void 0&&l(this,r,Yc).call(this,n,e.length-1,Object.freeze([...e]),t,"api")};Yc=function(e,t,n,i,s){o(this,ls).call(this,e,t)!==i&&(i===l(this,r,xp).call(this,t)?o(this,un).delete(e):o(this,un).set(e,{expanded:i,level:t,path:n}),w(this,Me,!0),o(this,St)??w(this,St,s),this.requestUpdate(),l(this,r,Xg).call(this,{groupPath:n,groupIndex:t,expanded:i,source:s}))};rr=function(e,t,n){if(t!==void 0&&(!Number.isInteger(t)||t<0))return;l(this,r,ze).call(this);let i=!1;const s=a=>{for(const c of a){if(i)return;if((t===void 0||c.level===t)&&o(this,ls).call(this,c.key,c.level)!==e){i=!0;return}(t===void 0||c.level<t)&&s(c.children)}};if(s(o(this,Oi)),zi(this,Ba)._++,t===void 0)o(this,un).clear(),w(this,ts,[]),w(this,fr,e);else{for(const[a,c]of o(this,un))c.level===t&&o(this,un).delete(a);o(this,ts)[t]=e}w(this,Me,!0),o(this,St)??w(this,St,n),this.requestUpdate(),i&&l(this,r,Xg).call(this,{groupPath:null,groupIndex:t??null,expanded:e,source:n})};Xg=function(e){this.dispatchEvent(new CustomEvent("u-grid-group-expansion-change",l(this,r,Re).call(this,e)))};dC=function(e){const t=this.getGrouping();t.length&&(l(this,r,Zo).call(this,[...this._regularColumns,...t],[]),this.dispatchEvent(new CustomEvent("u-grid-group-change",l(this,r,Re).call(this,{grouping:[],previous:t,source:e}))))};Yg=function(){l(this,r,qg).call(this),o(this,Ct).clear(),o(this,_t).clear(),o(this,an).clear(),o(this,bn).clear(),w(this,Cn,void 0),w(this,Si,!0),w(this,Xe,!0),w(this,Me,!0);const e=[...this._groupColumns];l(this,r,Zo).call(this,o(this,Ie).leaves.filter(t=>!e.includes(t)),e),l(this,r,Hg).call(this),this.requestUpdate()};Jg=function(e,t){if(!o(this,Ae)){console.warn('<u-grid>: applyChanges() works with "dataSource"; with "items", set a new array (rows keep their state by keyExpr).');return}const n=e?.add??[],i=e?.update??[],s=e?.remove??[];if((i.length||s.length)&&!o(this,st)){console.error('<u-grid>: applyChanges() needs "keyExpr" to update or remove rows.');return}if(l(this,r,ze).call(this),o(this,r,Ce)){w(this,Fn,l(this,r,Gu).call(this,o(this,Fn),n,new Map(i.map(c=>[o(this,on).call(this,c),c])),new Set(s))),w(this,Me,!0),this.requestUpdate();return}if(!o(this,r,Gt)){l(this,r,Iv).call(this,n,new Map(i.map(c=>[o(this,on).call(this,c),c])),new Set(s)),t&&(n.length||i.length||s.length)&&l(this,r,Fu).call(this);return}const a=o(this,Qe).current;if(i.length&&a){const c=o(this,Z);a.updateItems(c,new Map(i.map(h=>[c(h),h])))&&this.requestUpdate()}t&&(n.length||i.length||s.length)?l(this,r,Fu).call(this):(n.length||s.length)&&(zi(this,ra)._++,this.requestUpdate())};rp=function(){if(o(this,he)||o(this,Ke).open)return!0;const e=this.shadowRoot?.activeElement,t=o(this,$n).value;if(e&&t?.contains(e)&&!e.closest("thead, tfoot"))return!0;const n=this.getRootNode().activeElement;if(!n||n===this||!this.contains(n))return!1;let i=n;for(;i.parentElement&&i.parentElement!==this;)i=i.parentElement;const s=i.assignedSlot;return!!s&&!!t?.contains(s)&&!s.closest("thead, tfoot")};Fu=function(){if(o(this,r,rp)){w(this,Ji,!0);return}l(this,r,Qg).call(this)};Qg=function(){if(w(this,Ji,!1),o(this,r,Gt)){l(this,r,pC).call(this);return}w(this,$t,!0),o(this,vn).clear(),o(this,ne).invalidate(),w(this,yt,!0),w(this,kt,!0),this.requestUpdate()};pC=function(){if(o(this,Ks)){w(this,Ir,!0);return}w(this,Ks,!0),zi(this,ra)._++,this.requestUpdate(),this.updateComplete.then(()=>o(this,Qe).whenSettled()).then(()=>this.updateComplete).catch(()=>{}).finally(()=>{w(this,Ks,!1);const e=o(this,Ir);w(this,Ir,!1),e&&this.isConnected&&this.reshapeOnChanges&&l(this,r,Fu).call(this)})};em=function(){if(!this.reshapeOnChanges){w(this,Ji,!1);return}o(this,Ji)&&this.isConnected&&!o(this,r,rp)&&l(this,r,Qg).call(this)};fC=function(e){if(o(this,Ae))return!1;if(o(this,r,Ce)){const c=o(this,be).index,h=l(this,r,Qs).call(this,e);if(!c||h<0)return!1;const u=[];for(let g=c.parent[h];g>=0;g=c.parent[g])u.unshift(g);let f=!1;for(const g of u)l(this,r,Nn).call(this,g)||(l(this,r,ki).call(this,o(this,Z).call(this,c.nodes[g]),!0,"api"),f=!0);return f}const t=this._groupColumns;if(!t.length)return!1;const n=this.items.find(c=>o(this,Z).call(this,c)===e);if(n===void 0)return!1;const i=TE(n,t);if(!l(this,r,Zg).call(this,i)?.items.includes(n))return!1;let a=!1;for(let c=0;c<i.length;c++){const h=Object.freeze(i.slice(0,c+1)),u=$i(h,t);u!==void 0&&!o(this,ls).call(this,u,c)&&(l(this,r,Yc).call(this,u,c,h,!0,"api"),a=!0)}return a};se=new WeakMap;he=new WeakMap;cn=new WeakMap;ev=new WeakMap;ap=new WeakMap;On=new WeakMap;ss=new WeakMap;hn=new WeakMap;Jc=new WeakMap;uo=new WeakMap;pi=new WeakMap;fi=new WeakMap;rs=new WeakMap;Qc=new WeakMap;ei=new WeakMap;Nu=new WeakMap;Pt=new WeakMap;vc=new WeakMap;dt=function(){return!this.allowEditing&&!this.allowAdding&&!this.allowRemoving?!1:o(this,Ae)&&!o(this,st)?(o(this,Nu)||(w(this,Nu,!0),console.error('<u-grid>: editing with "dataSource" needs "keyExpr"; editing is off.')),!1):!0};wt=function(){const e=this.editMode;return e==="row"||e==="batch"?e:"cell"};mC=function(e){const t=this.allowEditing;return typeof t=="function"?!!t(e):!!t};lp=function(e){const t=this.allowRemoving;return typeof t=="function"?!!t(e):!!t};Di=function(){return o(this,r,dt)&&(!!this.allowRemoving||o(this,r,wt)==="row"&&(!!this.allowEditing||this.allowAdding))};Lt=function(e){return o(this,se).size?o(this,se).get(o(this,Z).call(this,e.item)):void 0};eh=function(e,t=l(this,r,Lt).call(this,e)){return!o(this,r,dt)||e.skeleton||t?.type==="remove"?!1:t?.type==="add"?this.allowAdding:l(this,r,mC).call(this,e.item)};Bn=function(e,t,n=l(this,r,Lt).call(this,e)){return u0(t)&&l(this,r,eh).call(this,e,n)&&!(e.tree&&l(this,r,Wa).call(this,e,t))};tv=function(){return[...this._regularColumns,...this._groupColumns]};gC=function(e,t){return t?t.item:e.item};nv=function(e,t,n,i){const s=o(this,he);return!s||s.rowKey!==e?!1:s.wholeRow?l(this,r,Bn).call(this,i,t,n):s.column===t};pn=function(e,t,n,{focus:i=!0,returnFocus:s=null}={}){if(o(this,hn))return!1;const a=l(this,r,pe).call(this,e);if(!$e(a)||a.skeleton||l(this,r,ri).call(this,a))return!1;const c=o(this,r,wt)==="row",h=l(this,r,Lt).call(this,a);let u=t;if(u&&!l(this,r,Bn).call(this,a,u,h)){if(!c)return!1;u=null}if(c){if(!l(this,r,eh).call(this,a,h)||(u??=this._visibleColumns.find(v=>l(this,r,Bn).call(this,a,v,h))??null,!u))return!1}else if(!u)return!1;const f=o(this,Z).call(this,a.item),g=o(this,he);if(g&&g.rowKey===f&&(g.wholeRow||g.column===u))return g.column=u,g.focus=i,l(this,r,Oe).call(this,l(this,r,tm).call(this,f,e,u,n),null,{reveal:!0}),!0;if(g){if(l(this,r,gs).call(this)===!1&&!g.wholeRow&&o(this,r,wt)!=="batch")return g.focus=!0,this.requestUpdate(),!1;l(this,r,sn).call(this)}return this.dispatchEvent(new CustomEvent("u-grid-edit-starting",{...l(this,r,Re).call(this,{rowKey:f,item:l(this,r,gC).call(this,a,h),column:n==="api"&&c&&!t?null:u,source:n}),cancelable:!0}))?(w(this,fi,""),w(this,he,{rowKey:f,column:u,wholeRow:c,drafts:new Map,texts:new Map,snapshot:h?kb(h):null,focus:i,returnFocus:s,session:{},seq:0}),c&&o(this,Ne).length&&!l(this,r,Qn).call(this,f)&&(l(this,r,Jn).call(this,f,!0,n),w(this,sc,{rowKey:f,source:n})),l(this,r,Oe).call(this,l(this,r,tm).call(this,f,e,u,n),n,{reveal:!0}),this.requestUpdate(),!0):!1};tm=function(e,t,n,i){const s=l(this,r,Je).call(this).indexOf(n);if(s>=0||!o(this,Ne).includes(n))return{row:t,col:s>=0?s:o(this,Fe)};l(this,r,Qn).call(this,e)||l(this,r,Jn).call(this,e,!0,i),l(this,r,ze).call(this);const a=l(this,r,Ye).call(this,e);return{row:a>=0?a+1:t,col:o(this,Fe)}};gs=function(){const e=o(this,he);if(!e?.drafts.size)return e?!l(this,r,Zh).call(this,e.rowKey,e.wholeRow?null:e.column):!0;const t=l(this,r,iv).call(this,e.rowKey);if(!t)return e.drafts.clear(),!0;const n=[];for(const[s,a]of e.drafts)n.push(l(this,r,ov).call(this,t,s,a));e.drafts.clear(),e.texts.clear(),o(this,se).prune(t),this.requestUpdate();const i=n.filter(s=>Ma(s));return i.length?Promise.all(i).then(()=>!l(this,r,Zh).call(this,e.rowKey,e.wholeRow?null:e.column)):!n.some(Boolean)&&!l(this,r,Zh).call(this,e.rowKey,e.wholeRow?null:e.column)};iv=function(e){const t=o(this,se).get(e);if(t)return t;const n=l(this,r,Ye).call(this,e),i=l(this,r,pe).call(this,n);return $e(i)&&!i.skeleton?o(this,se).ensure(e,i.item):void 0};Zh=function(e,t){const n=o(this,se).get(e);return n?t?n.errors.has(t):n.errors.size>0||!!n.rowError:!1};ov=function(e,t,n){if(n instanceof za)e.unparsed.set(t,n);else{const i=ti(e.item,t);if(e.unparsed.delete(t),!e.modified.has(t)&&AT(i,n))return o(this,se).touch(e),l(this,r,Wu).call(this,e,t,n);t.valueSetter?t.valueSetter(e.data,n,e.item):t.path&&mg(e.data,t.path,n)}return e.modified.add(t),o(this,se).touch(e),l(this,r,Wu).call(this,e,t,n)};sv=function(e,t){return e.unparsed.get(t)??ti(o(this,se).mergedOf(e),t)};Wu=function(e,t,n){let i=o(this,On).get(e);i?.get(t)?.abort();const s=new AbortController,a=o(this,r,B),c={value:n,item:e.item,data:e.data,column:t,rowKey:e.rowKey},h=Dy(t.validationRules,c,a,g=>l(this,r,bC).call(this,g,t),s.signal);if(!Ma(h))return i?.delete(t),l(this,r,nm).call(this,e,t,h),h;i||(i=new Map,o(this,On).set(e,i)),i.set(t,s),o(this,se).touch(),this.requestUpdate();const u=new Promise(g=>{s.signal.addEventListener("abort",()=>g(null),{once:!0})}),f=Promise.race([h,u]).then(g=>(o(this,ss).delete(f),s.signal.aborted?null:(i.delete(t),i.size||o(this,On).delete(e),l(this,r,nm).call(this,e,t,g),o(this,se).touch(),this.requestUpdate(),g&&!l(this,r,rv).call(this,e.rowKey,t)&&l(this,r,te).call(this,`${fe(t)}: ${g.message}`),g)));return o(this,ss).add(f),f};vC=function(e,t){return!!o(this,On).get(e)?.has(t)};rv=function(e,t){const n=l(this,r,pe).call(this,o(this,Le));return n?.isDetail&&o(this,Ne).includes(t)?o(this,Z).call(this,n.item)===e:$e(n)&&o(this,Z).call(this,n.item)===e&&o(this,xi)===t};nm=function(e,t,n){e.errorRules.delete(t),n?(e.errors.set(t,n.message),typeof n.rule=="object"&&e.errorRules.set(t,n.rule)):e.errors.delete(t),e.rowError=void 0};bC=function(e,t){return e instanceof Date?Qo(this.language,Jo).format(e):l(this,r,en).call(this,t)==="date"||l(this,r,en).call(this,t)==="datetime"?Qo(this.language,Jo).format(new Date(e)):nn(this.language).format(e)};sn=function(){const e=o(this,sc);e&&o(this,he)?.rowKey===e.rowKey&&(w(this,sc,void 0),l(this,r,Jn).call(this,e.rowKey,!1,e.source)),o(this,he)&&(w(this,he,null),o(this,Pt)?.remove(),w(this,Pt,void 0),this.requestUpdate())};ba=function(e){const t=o(this,he);if(!t)return;const n=o(this,se).get(t.rowKey),i=[];if(n?.type==="add"&&o(this,r,wt)!=="batch")i.push(na(n)),l(this,r,Ka).call(this,n),l(this,r,sn).call(this),t.returnFocus?.isConnected?t.returnFocus.focus():w(this,je,!0);else{if(n&&(t.wholeRow||o(this,r,wt)!=="batch")){const s=na(n),a=JSON.stringify(s.data??null)!==JSON.stringify(t.snapshot?.data??{});Sb(o(this,se),n,t.snapshot),l(this,r,th).call(this,n),a&&n.type!=="remove"&&i.push(s)}else n&&t.column&&_T(o(this,se),n,t.column,t.snapshot);l(this,r,sn).call(this),w(this,je,!0)}i.length&&this.dispatchEvent(new CustomEvent("u-grid-edit-cancel",l(this,r,Re).call(this,{changes:i,source:e}))),this.requestUpdate()};th=function(e){const t=o(this,On).get(e);t&&(t.forEach(n=>n.abort()),o(this,On).delete(e))};Ka=function(e){if(l(this,r,th).call(this,e),o(this,se).delete(e.rowKey),o(this,cn).delete(e.rowKey)){l(this,r,qa).call(this),w(this,ei,void 0);const t=o(this,ct)&&"key"in o(this,ct)?o(this,ct).key:void 0;if(e.parentKey!==void 0&&t===e.rowKey){w(this,Me,!0),l(this,r,ze).call(this);const n=l(this,r,Ye).call(this,e.parentKey);if(n>=0){const i=!!this.shadowRoot?.activeElement;l(this,r,Oe).call(this,{row:n,col:o(this,r,Li)>=0?o(this,r,Li):o(this,Fe)},null,{focus:i})}}}};as=function(e,t,{keepOpen:n=!1,blur:i=!1}={}){const s=o(this,he);if(!s){t();return}const a=s.seq,c=u=>{if(!(o(this,he)!==s||s.seq!==a)){if(!u&&o(this,r,wt)!=="batch"&&i){l(this,r,sn).call(this);return}if(!u&&o(this,r,wt)!=="batch"){const f=o(this,se).get(s.rowKey),g=f&&s.column?f.errors.get(s.column):void 0;g&&l(this,r,te).call(this,g),s.focus=!0,this.requestUpdate();return}if(!n&&!s.wholeRow&&l(this,r,sn).call(this),o(this,r,wt)==="cell"&&!s.wholeRow&&o(this,se).size&&!l(this,r,wC).call(this)){const f=s.column;l(this,r,vo).call(this,e).then(g=>{g&&f&&l(this,r,rv).call(this,s.rowKey,f)&&l(this,r,nh).call(this)&&t()});return}t()}},h=l(this,r,gs).call(this);Ma(h)?(clearTimeout(o(this,pi)),w(this,pi,setTimeout(()=>{w(this,pi,void 0),l(this,r,te).call(this,o(this,r,B).validating)},rk)),h.then(u=>{clearTimeout(o(this,pi)),w(this,pi,void 0),c(u)})):c(h)};wC=function(){for(const e of o(this,se).values())if(e.errors.size||e.rowError||e.unparsed.size)return!0;return!1};cp=function(e,t,n,i){if(!o(this,r,dt)||!this.allowAdding||o(this,hn))return null;l(this,r,ze).call(this);const s=i===void 0||!o(this,r,Ce)?-1:l(this,r,Qs).call(this,i);if(i!==void 0&&s<0)return l(this,r,Mt).call(this,"add-parent",'addRow(): "parentKey" is not a node of the tree (or tree-mode is off); no row was added.'),null;if(o(this,he)&&l(this,r,gs).call(this)===!1&&o(this,r,wt)!=="batch")return null;l(this,r,sn).call(this);const a=Ti(e&&typeof e=="object"?e:{});if(i!==void 0&&Kc(this.treeMode)==="flat"&&typeof this.parentKeyExpr=="string"&&mg(a,this.parentKeyExpr,i),!this.dispatchEvent(new CustomEvent("u-grid-row-adding",{...l(this,r,Re).call(this,{data:a,parentKey:i,source:t}),cancelable:!0})))return null;l(this,r,ze).call(this);const c=Y1();let h=l(this,r,av).call(this),u=o(this,r,Ce)?0:void 0;if(i!==void 0){const z=o(this,be).index;for(let I=s;I>=0;I=o(this,et)?.parent[I]??-1){const j=o(this,Z).call(this,z.nodes[I]),X=l(this,r,Nn).call(this,I);o(this,be).set(j,!0,this.autoExpandNodes),!X&&l(this,r,Bi).call(this,I)&&l(this,r,jc).call(this,j,!0,t)}w(this,Me,!0),l(this,r,ze).call(this);const D=l(this,r,Ye).call(this,i);h=D>=0?D+1:h,u=(o(this,et)?.level[s]??0)+1}const f=l(this,r,pe).call(this,Math.min(h,o(this,ae).length-1)),g=h>=o(this,ae).length,v={seq:++zi(this,ev)._,level:u,anchorKey:!g&&$e(f)&&!f.skeleton?o(this,Z).call(this,f.item):void 0,anchorRowKey:!g&&f&&!$e(f)?f.key:void 0,fallback:Math.min(h,o(this,ae).length)};o(this,cn).set(c,v);const y=o(this,se).add(c,a,i);for(const z of l(this,r,tv).call(this))z.path&&Pc(a,z.path)!==void 0&&y.modified.add(z);l(this,r,qa).call(this),w(this,ei,void 0),this.requestUpdate(),l(this,r,ze).call(this);const _=l(this,r,Ye).call(this,c),E=this._visibleColumns.find(z=>u0(z));return _>=0&&E&&l(this,r,pn).call(this,_,E,t,{returnFocus:n})||(l(this,r,te).call(this,o(this,r,B).rowAddedAnnouncement),_>=0&&l(this,r,Oe).call(this,{row:_,col:o(this,Fe)},t,{focus:!!n,reveal:!0})),c};av=function(){const e=this._scrollContainerRef.value,t=o(this,tn).value?.querySelectorAll(":scope > tbody.body-rows > tr[data-index]:not(.pinned)");if(!e||!t?.length)return 0;const n=o(this,ve).port,i=n?Math.max(n.rect().top+o(this,ve).padding().top+l(this,r,ps).call(this),t[0].getBoundingClientRect().top):e.getBoundingClientRect().top+l(this,r,ps).call(this);for(const s of t)if(s.getBoundingClientRect().bottom>i+1)return Math.min(Number(s.getAttribute("data-index")),o(this,ae).length);return 0};Bu=async function(e,t){if(o(this,se).get(e)?.type==="add"){await l(this,r,bc).call(this,e,"user");return}if(this.confirmRemove&&o(this,r,wt)!=="batch"){const i=l(this,r,cv).call(this,e);if(i===void 0||!l(this,r,lv).call(this,e,i,"user"))return;w(this,rs,{rowKey:e,returnFocus:t}),this.requestUpdate();return}await l(this,r,bc).call(this,e,"user")};lv=function(e,t,n){return this.dispatchEvent(new CustomEvent("u-grid-row-removing",{...l(this,r,Re).call(this,{rowKey:e,item:t,source:n}),cancelable:!0}))};cv=function(e){const t=o(this,se).get(e);if(t)return t.item;const n=l(this,r,pe).call(this,l(this,r,Ye).call(this,e));return $e(n)&&!n.skeleton?n.item:void 0};bc=async function(e,t,n=!1){if(!o(this,r,dt)||o(this,hn))return!1;l(this,r,ze).call(this);const i=o(this,se).get(e),s=l(this,r,cv).call(this,e);if(s===void 0||i?.type==="remove"||i?.type!=="add"&&!l(this,r,lp).call(this,s)||!n&&!l(this,r,lv).call(this,e,i?.type==="add"?i.item:s,t))return!1;const c=l(this,r,ah).call(this).rowKey===e;if(o(this,he)?.rowKey===e&&l(this,r,sn).call(this),i?.type==="add")return l(this,r,Ka).call(this,i),w(this,ei,void 0),l(this,r,te).call(this,o(this,r,B).rowRemovedAnnouncement),l(this,r,im).call(this,c),this.requestUpdate(),!0;const h=o(this,se).ensure(e,s),u=kb(h);if(h.removedFrom=Object.keys(h.data).length?"update":void 0,h.type="remove",l(this,r,th).call(this,h),h.errors.clear(),o(this,se).touch(h),this.requestUpdate(),o(this,r,wt)==="batch")return l(this,r,te).call(this,o(this,r,B).rowMarkedForRemovalAnnouncement),!0;const f=await l(this,r,vo).call(this,t,[h]);return!f&&o(this,se).get(e)===h?(Sb(o(this,se),h,u),this.requestUpdate()):f&&(l(this,r,te).call(this,o(this,r,B).rowRemovedAnnouncement),l(this,r,im).call(this,c)),f};im=function(e){e&&this.updateComplete.then(()=>{const t=o(this,ae).length,n=t?Math.min(o(this,Le),t-1):Po;l(this,r,Oe).call(this,{row:n,col:o(this,Fe)},null,{focus:!0,reveal:!0})})};hp=function(e,t){const n=o(this,se).get(e);n?.type==="remove"&&(n.removedFrom?(n.type=n.removedFrom,n.removedFrom=void 0,o(this,se).touch(n)):o(this,se).delete(e),t==="user"&&l(this,r,te).call(this,o(this,r,B).rowRestoredAnnouncement),this.requestUpdate())};vo=function(e,t){if(o(this,hn))return o(this,hn);const n=l(this,r,xC).call(this,e,t).finally(()=>{w(this,hn,null),clearTimeout(o(this,uo)),w(this,uo,void 0),w(this,Jc,!1),this.requestUpdate()});return w(this,hn,n),n};xC=async function(e,t){const n=o(this,he);if(n){const _=l(this,r,gs).call(this);Ma(_)&&await _}for(;o(this,ss).size;)await Promise.all([...o(this,ss)]);const i=(t??[...o(this,se).values()]).filter(_=>o(this,se).get(_.rowKey)===_);if(!i.length)return n?.wholeRow&&l(this,r,sn).call(this),!0;const s=[];for(const _ of i)if(_.type!=="remove"){for(const E of l(this,r,tv).call(this))if(_.type==="add"?!!E.validationRules?.length&&!_.modified.has(E):!1){const z=l(this,r,Wu).call(this,_,E,l(this,r,sv).call(this,_,E));Ma(z)&&s.push(z)}}await Promise.all(s);let a=0;for(const _ of i){if(_.type==="remove")continue;const E=[];for(const[j,X]of _.errors)E.push({column:j,rule:_.errorRules.get(j)??null,message:X});let $;const z={rowKey:_.rowKey,item:_.item,change:na(_),errors:E,setError:(j,X)=>{D.preventDefault(),X?(_.errors.set(X,String(j)),_.errorRules.delete(X)):$=String(j)},source:e},D=new CustomEvent("u-grid-row-validating",{...l(this,r,Re).call(this,z),cancelable:!0}),I=this.dispatchEvent(D);_.rowError=$??(!I&&!E.length&&_.errors.size===0?o(this,r,B).validationInvalid:void 0),(!I||_.errors.size||_.unparsed.size||_.rowError)&&a++}if(o(this,se).touch(),a)return w(this,fi,oe(o(this,r,B).invalidRowsMessage,{count:String(a)})),l(this,r,te).call(this,`${o(this,fi)} ${l(this,r,hv).call(this,i)}`.trim()),l(this,r,uv).call(this,i),this.requestUpdate(),!1;if(!this.isConnected)return!1;const c=i.map(na),h=[];let u=!0;const f={changes:c,waitUntil:_=>{if(!u)throw new DOMException("waitUntil() can only be called while u-grid-saving is dispatched.","InvalidStateError");h.push(Promise.resolve(_))},source:e},g=this.dispatchEvent(new CustomEvent("u-grid-saving",{...l(this,r,Re).call(this,f),cancelable:!0}));if(u=!1,!g)return!1;let v;if(h.length&&this.isConnected){w(this,uo,setTimeout(()=>{w(this,uo,void 0),w(this,Jc,!0),l(this,r,te).call(this,o(this,r,B).saving)},rk)),this.requestUpdate();try{v=(await Promise.all(h)).find(E=>!!E&&typeof E=="object")}catch(_){const E=typeof _=="string"?_:_ instanceof Error&&_.message?_.message:"";return w(this,fi,E?`${o(this,r,B).saveError} ${E}`:o(this,r,B).saveError),l(this,r,te).call(this,o(this,fi)),this.dispatchEvent(new CustomEvent("u-grid-save-error",l(this,r,Re).call(this,{changes:c,error:_,source:e}))),this.requestUpdate(),!1}}if(!this.isConnected&&!this.hasUpdated)return!1;const y=l(this,r,yC).call(this,i,v);for(const _ of i)l(this,r,Ka).call(this,_);return o(this,he)&&i.some(_=>_.rowKey===o(this,he)?.rowKey)&&(l(this,r,sn).call(this),w(this,je,l(this,r,nh).call(this))),w(this,ei,void 0),w(this,fi,""),this.requestUpdate(),this.dispatchEvent(new CustomEvent("u-grid-save",l(this,r,Re).call(this,{changes:c,items:y,source:e}))),i.length===1&&i[0].type==="remove"||l(this,r,te).call(this,o(this,r,B).changesSavedAnnouncement),!0};nh=function(){return!!this.shadowRoot?.activeElement};hv=function(e){for(const t of e){if(t.rowError)return t.rowError;const[n]=t.errors;if(n)return`${fe(n[0])}: ${n[1]}`;const[i]=t.unparsed;if(i)return fe(i[0])}return""};uv=function(e){for(const t of e){const n=this._shownColumns.find(s=>t.errors.has(s)||t.unparsed.has(s)),i=l(this,r,Ye).call(this,t.rowKey);if(!(i<0)){if(n&&o(this,Ne).includes(n)){if(o(this,r,wt)!=="batch"&&(!o(this,he)||o(this,he).rowKey!==t.rowKey))l(this,r,pn).call(this,i,n,"user");else{l(this,r,Cv).call(this,t.rowKey,n,"user");const s=o(this,he);s&&s.rowKey===t.rowKey&&(s.column=n,s.focus=!0)}return}if(n&&o(this,r,wt)!=="batch")!o(this,he)||o(this,he).rowKey!==t.rowKey?l(this,r,pn).call(this,i,n,"user"):(o(this,he).column=n,o(this,he).focus=!0,l(this,r,Oe).call(this,{row:i,col:l(this,r,Je).call(this).indexOf(n)},null,{reveal:!0}));else{const s=n?l(this,r,Je).call(this).indexOf(n):o(this,r,Ue);l(this,r,Oe).call(this,{row:i,col:s},"user",{focus:!0,reveal:!0})}return}}};yC=function(e,t){const n=!!o(this,st),i=[],s=new Map,a=[],c=new Map,h=new Map,u=new Map;if(t){i.push(...t.add??[]),a.push(...t.remove??[]);for(const y of t.update??[])s.set(o(this,on).call(this,y),y);const v=e.filter(y=>y.type==="add");(t.add??[]).forEach((y,_)=>{v[_]&&c.set(v[_].rowKey,y)})}else for(const v of e)if(v.type==="remove")a.push(v.rowKey);else if(v.type==="add"){const y=Ti(v.data);i.push(y),c.set(v.rowKey,y),v.parentKey!==void 0&&u.set(y,v.parentKey)}else s.set(v.rowKey,o(this,se).mergedOf(v)),h.set(v.rowKey,v.item);const f=o(this,ct)&&"key"in o(this,ct)?o(this,ct).key:void 0,g=f===void 0?void 0:c.get(f);for(const v of e)v.type==="add"&&o(this,cn).delete(v.rowKey);if(l(this,r,qa).call(this),w(this,ei,void 0),o(this,r,Ce)){const v=new Set(a);return o(this,Ae)?w(this,Fn,l(this,r,Gu).call(this,o(this,Fn),i,s,v)):w(this,Et,Kc(this.treeMode)==="nested"?l(this,r,CC).call(this,o(this,Et),i,u,s,v):l(this,r,Gu).call(this,o(this,Et),i,s,v)),n||l(this,r,om).call(this,s,v),w(this,Me,!0),this.requestUpdate(),g!==void 0&&w(this,ct,{key:o(this,Z).call(this,g)}),o(this,Ae)?null:o(this,Et)}return o(this,Ae)?l(this,r,Jg).call(this,{add:i,update:[...s.values()],remove:a},!1):(l(this,r,ze).call(this),l(this,r,Iv).call(this,i,s,new Set(a),h),w(this,Et,o(this,bt)),n||l(this,r,om).call(this,s,new Set(a))),g!==void 0&&w(this,ct,{key:o(this,Z).call(this,g)}),o(this,Ae)?null:o(this,bt)};Gu=function(e,t,n,i){const s=o(this,on),a=[];for(const c of e){const h=s(c);i.has(h)||a.push(n.get(h)??c)}return a.push(...t),a};CC=function(e,t,n,i,s){const a=o(this,st)?o(this,on):v=>v,c=this.childrenExpr||"children",h=typeof c=="string"&&!c.includes("."),u=A0(c),f=new Map;for(const v of t){const y=h?n.get(v):void 0;n.has(v)&&!h&&l(this,r,Mt).call(this,"child-expr",'a new child row needs a plain "childrenExpr" property name; it was added as a root node.');const _=f.get(y)??[];_.push(v),f.set(y,_)}const g=(v,y)=>{const _=[...f.get(y)??[]];for(const E of v){const $=a(E);if(s.has($))continue;let z=i.get($)??E;const D=u(E)??[],I=g(D,$);(I.length!==D.length||I.some((X,Q)=>X!==D[Q]))&&h&&z&&typeof z=="object"&&(z={...z,[c]:I}),_.push(z)}return _};return g(e,void 0)};om=function(e,t){if(o(this,ie).size){const n=o(this,ie).keys.filter(i=>!t.has(i)).map(i=>e.get(i)??i);o(this,ie).replace(n)}for(const[n,i]of e)o(this,Rt).delete(n)&&o(this,Rt).add(i);o(this,ct)&&"key"in o(this,ct)&&e.has(o(this,ct).key)&&w(this,ct,{key:e.get(o(this,ct).key)})};Ku=function(e){const t=this.getChanges(),n=!!o(this,he);for(const i of[...o(this,se).values()])l(this,r,Ka).call(this,i);o(this,se).clear(),o(this,cn).clear(),l(this,r,qa).call(this),w(this,ei,void 0),w(this,fi,""),n&&(l(this,r,sn).call(this),w(this,je,l(this,r,nh).call(this))),this.requestUpdate(),t.length&&(this.dispatchEvent(new CustomEvent("u-grid-edit-cancel",l(this,r,Re).call(this,{changes:t,source:e}))),e==="user"&&l(this,r,te).call(this,oe(o(this,r,B).changesDiscardedAnnouncement,{count:String(t.length)})))};_C=function(e){if(!o(this,se).size)return;const t=new Map;for(const i of e)t.set(o(this,on).call(this,i),i);const n=[];for(const i of[...o(this,se).values()])i.type!=="add"&&(t.has(i.rowKey)?(i.item=t.get(i.rowKey),o(this,se).touch(i)):(n.push(na(i)),o(this,he)?.rowKey===i.rowKey&&l(this,r,sn).call(this),l(this,r,Ka).call(this,i)));n.length&&this.dispatchEvent(new CustomEvent("u-grid-edit-cancel",l(this,r,Re).call(this,{changes:n,source:"api"})))};qa=function(){const e=o(this,on);if(!o(this,cn).size){w(this,Z,e);return}const t=o(this,ap);w(this,Z,n=>n&&typeof n=="object"&&t.get(n)||e(n))};sm=function(e){if(!o(this,cn).size)return w(this,ei,void 0),e;const t=o(this,ei);if(t?.base===e&&t.version===o(this,se).version)return t.rows;const n=o(this,st)?o(this,on):void 0,i=[];for(const[a,c]of o(this,cn)){const h=o(this,se).get(a);if(!h)continue;const u=o(this,se).mergedOf(h);o(this,ap).set(u,a);let f=c.anchorKey!==void 0?e.indexOfDataKey(c.anchorKey,n):-1;f<0&&c.anchorRowKey&&(f=e.indexOfKey(c.anchorRowKey)),i.push({position:f>=0?f:Math.min(c.fallback,e.length),rowKey:a,row:c.level===void 0?{isGroup:!1,key:`n:${c.seq}`,item:u,index:0}:{isGroup:!1,key:`n:${c.seq}`,item:u,index:0,tree:{node:-1,level:c.level,posInSet:0,setSize:0}}})}i.sort((a,c)=>a.position-c.position||o(this,cn).get(c.rowKey).seq-o(this,cn).get(a.rowKey).seq);const s=new R$(e,i);return w(this,ei,{base:e,version:o(this,se).version,rows:s}),s};AC=function(){const e=o(this,Qc).value;o(this,rs)&&e&&!e.open&&e.isConnected&&e.showModal();const t=o(this,he);if(!t)return;if(!o(this,r,dt)){l(this,r,sn).call(this);return}if(l(this,r,Ye).call(this,t.rowKey)<0){l(this,r,gs).call(this),l(this,r,sn).call(this);return}const n=l(this,r,kC).call(this,t),i=n&&(n.querySelector(":scope > .cell-editor")??mi(n)[0]);if(i instanceof HTMLElement&&i.getRootNode()!==this.shadowRoot&&l(this,r,SC).call(this,i,t),!(!t.focus||!(i instanceof HTMLElement||i instanceof SVGElement))&&(t.focus=!1,i.focus({preventScroll:!0}),i instanceof HTMLInputElement&&(i.type==="text"||i.type==="search"))){const s=i.value.length;i.setSelectionRange(s,s)}};kC=function(e){const t=l(this,r,Ye).call(this,e.rowKey);if(e.column&&o(this,Ne).includes(e.column))return l(this,r,bp).call(this,t+1,e.column,".editing");const n=e.column?l(this,r,Je).call(this).indexOf(e.column):-1,i=l(this,r,nr).call(this,`:scope > tbody > tr[data-index="${t}"]`);return i?.querySelector(`:scope > td.editing[data-col="${n}"]`)??i?.querySelector(":scope > td.editing")??null};SC=function(e,t){const n=o(this,se).get(t.rowKey),i=t.column,s=n&&i?n.errors.get(i):void 0,a=i?fe(i):"";a&&!e.hasAttribute("aria-label")&&!e.hasAttribute("aria-labelledby")&&e.setAttribute("aria-label",a);const c=(e.getAttribute("aria-describedby")??"").split(/\s+/).filter(Boolean),h=o(this,Pt)?.id;if(!s){if(h&&c.includes(h)){const u=c.filter(f=>f!==h);u.length?e.setAttribute("aria-describedby",u.join(" ")):e.removeAttribute("aria-describedby")}e.removeAttribute("aria-invalid");return}o(this,Pt)||(w(this,Pt,document.createElement("div")),o(this,Pt).id=`u-grid-${++yT}-edit-message`,o(this,Pt).slot="u-grid-internal:edit-message",this.append(o(this,Pt))),o(this,Pt).textContent=s,e.setAttribute("aria-invalid","true"),c.includes(o(this,Pt).id)||e.setAttribute("aria-describedby",[...c,o(this,Pt).id].join(" "))};EC=function(){for(const e of[...o(this,On).keys()])l(this,r,th).call(this,e);o(this,ss).clear(),clearTimeout(o(this,uo)),w(this,uo,void 0),clearTimeout(o(this,pi)),w(this,pi,void 0),o(this,Pt)?.remove(),w(this,Pt,void 0),w(this,rs,null)};Ol=function(e){e.signal?.throwIfAborted(),l(this,r,ze).call(this);const t=e.includeGroups!==!1,n=e.includeSummaries!==!1,i=o(this,r,Gt),s=[...t&&!i?[]:this._groupColumns,...this._shownColumns].filter(ia).map(_=>l(this,r,up).call(this,_));let a=i?o(this,Qe).current?.loadedInOrder()??[]:o(this,ot),c=i?[]:o(this,Oi),h=o(this,ns);const u=o(this,r,Ce)?l(this,r,MC).call(this,e.selectedOnly===!0):void 0;if(u)a=u.items;else if(e.selectedOnly){const _=o(this,Z);a=a.filter(E=>o(this,ie).has(_(E))),c=this._groupColumns.length&&!i?l(this,r,Wv).call(this,a):[],h=n&&o(this,Yt).length?Td(a,o(this,Yt).map(({spec:E})=>E)):[]}const f=o(this,r,B),g=o(this,r,Dn),v=nn(this.language,{maximumFractionDigits:0}),y=e.includeFixedRows!==!1&&!e.selectedOnly;return{columns:s,items:a,fixedTop:y?o(this,Bs):void 0,fixedBottom:y?o(this,Gs):void 0,groups:c,includeGroups:t,includeSummaries:n,groupSummaries:u?[]:o(this,ft).map(_=>l(this,r,rm).call(this,_)),totalSummaries:o(this,Yt).map(_=>l(this,r,rm).call(this,_)),totals:h,listSeparator:g,itemLevels:u?.levels,itemOverrides:u&&n?_=>l(this,r,RC).call(this,u.rows[_],s):void 0,groupValueText:_=>l(this,r,_p).call(this,{column:_.column,value:_.value,firstItem:_.items[0]}),groupLabel:(_,E,$)=>{const z=this.showGroupCount?[v.format(_.items.length),...$]:[...$],D=z.length?` ${oe(f.groupInfoText,{info:z.join(g)})}`:"";return`${fe(_.column)}${f.groupLabelSeparator}${E}${D}`}}};MC=function(e){const t=o(this,ai),n=[],i=o(this,et),s=o(this,be).index;if(e&&i&&s){const a=[],c=h=>{for(let u=i.childStart[h+1]-1;u>=i.childStart[h];u--)a.push(i.children[u])};for(c(s.nodes.length);a.length;){const h=a.pop(),u=s.nodes[h];o(this,ie).has(o(this,Z).call(this,u))&&n.push({isGroup:!1,key:"",item:u,index:0,tree:{node:h,level:i.level[h],posInSet:0,setSize:0}}),c(h)}return{items:n.map(h=>h.item),levels:Int32Array.from(n,h=>h.tree.level),rows:n}}for(let a=0;a<t.length;a++){const c=t.at(a);$e(c)&&c.tree&&c.tree.node>=0&&(!e||o(this,ie).has(o(this,Z).call(this,c.item)))&&n.push(c)}return{items:n.map(a=>a.item),levels:Int32Array.from(n,a=>a.tree.level),rows:n}};RC=function(e,t){let n;return t.forEach(({info:i},s)=>{const a=l(this,r,Wa).call(this,e,i.column);if(a){const c=l(this,r,Na).call(this,e.tree.node),h=o(this,ft).map((u,f)=>({summary:u,position:f})).filter(({summary:u})=>u.item.display==="column"&&u.spec.column===i.column).map(({position:u})=>c[u]);n??=new Map,n.set(s,{value:h.length===1?h[0]:h,text:a.map(u=>u.text).join(o(this,r,Dn))})}}),n};up=function(e){const t=l(this,r,en).call(this,e),n=l(this,r,Ha).call(this,e);return{info:{column:e,label:fe(e),dataType:t,alignment:oy(e,t),width:l(this,r,ii).call(this,e)??o(this,Rn).get(e)},read:ao(e),text:(i,s)=>Ic(i,s,e,n),builtIn:!e.displayValue&&typeof e.format!="function"}};rm=function(e){return{item:e.item,column:e.spec.column,value:t=>l(this,r,jr).call(this,e,t),text:t=>l(this,r,Ua).call(this,e,t)}};qu=new WeakMap;ju=new WeakMap;am=function(e){const t=o(this,$n).value;if(this.clipboardMode==="none"||!t||!this.shadowRoot||!Ay(e,t,this.shadowRoot))return;const n=e.composedPath(),i=l(this,r,xa).call(this,n);if(i)return{position:{row:i.masterIndex,col:-1},column:i.column};const s=l(this,r,io).call(this,n),a=s&&!s.closest("tr.filter-row")?l(this,r,Pn).call(this,s):void 0;return a?{position:a}:void 0};Hu=function(){const e=l(this,r,Ol).call(this,{selectedOnly:!0,includeGroups:!1,includeSummaries:!1});if(!e.items.length||!e.columns.length)return;const t=[...zd(e)];return{detail:{items:t.map(n=>n.item),columns:e.columns.map(n=>n.info.column),ranges:fh,...xy(t,e.columns,l(this,r,dp).call(this))},announcement:oe(o(this,r,B).rowsCopiedAnnouncement,{count:String(t.length)})}};lm=function(){const e=o(this,$n).value;if(!e)return;const t=o(this,Hn).name||null;if(e.getAttribute("aria-label")!==t&&(t?e.setAttribute("aria-label",t):e.removeAttribute("aria-label")),"ariaLabelledByElements"in e){const n=o(this,Hn).elements,i=e.ariaLabelledByElements??[];(i.length!==n.length||n.some((s,a)=>i[a]!==s))&&(e.ariaLabelledByElements=n.length?[...n]:null)}};dp=function(){return{rtl:this._isRtl(),lang:this.language}};Dl=function({position:e,column:t}){const n=l(this,r,pe).call(this,e.row);if(!n||!($e(n)||Fi(n)))return;const i=!t&&e.col>=o(this,r,Ue)&&l(this,r,lo).call(this,e.row),s=t??Ra(l(this,r,Je).call(this)[e.col]),a=i?this._shownColumns.filter(ia):s&&ia(s)?[s]:[];if(!a.length)return;const c=a.map(f=>l(this,r,up).call(this,f)),h=c.map(f=>f.read(n.item)),u={rowType:"data",level:0,item:n.item,values:h,texts:c.map((f,g)=>f.text(h[g],n.item)),fixed:n.fixed??null};return{detail:{items:[n.item],columns:a,ranges:fh,...xy([u],c,l(this,r,dp).call(this))},announcement:i?oe(o(this,r,B).rowsCopiedAnnouncement,{count:"1"}):o(this,r,B).cellCopiedAnnouncement}};ke=new WeakMap;Qt=new WeakMap;Gn=new WeakMap;Wt=new WeakMap;Tt=new WeakMap;pp=new WeakMap;Zi=new WeakMap;Uo=new WeakMap;zn=new WeakMap;Hr=new WeakMap;Xi=new WeakMap;wa=new WeakMap;mn=new WeakMap;Uu=new WeakMap;wc=new WeakMap;Ft=function(){return h1(this.cellSelectionMode)};ja=function(){const e=o(this,r,Ue);return[e,e+this._visibleColumns.length-1]};Pi=function(e){const t=l(this,r,pe).call(this,e);return!!t&&In(t)&&!t.fixed&&!l(this,r,ri).call(this,t)};Hs=function(e,t){const[n,i]=l(this,r,ja).call(this);return t>=n&&t<=i&&l(this,r,Pi).call(this,e)};no=function(e,t){for(let n=e,i=1e4;n>=0&&n<o(this,ae).length&&i>0;n+=t,i--)if(l(this,r,Pi).call(this,n))return n;return-1};bl=function(e,t,n){const i=Math.min(Math.max(e+t*Math.max(n,1),0),o(this,ae).length-1),s=l(this,r,no).call(this,i,t);if(s>=0)return s;const a=l(this,r,no).call(this,i,t===1?-1:1);return a>=0?a:e};xc=function(e,t){return o(this,ae).dataRowsBefore(t+1)-o(this,ae).dataRowsBefore(e)};$C=function(e,t){if(!this.rowRenderer||t-e+1>Dc)return l(this,r,xc).call(this,e,t);let n=0;for(let i=e;i<=t;i++)l(this,r,Pi).call(this,i)&&n++;return n};dv=function(){return[this._visibleColumns,o(this,r,Ue),this._groupColumns,o(this,qe),o(this,ne).filterValue,o(this,ne).searchText,o(this,un).version,o(this,Ba),o(this,Rt).version,this.autoExpandRows,o(this,be).version,this.autoExpandNodes,this.treeMode,o(this,lt),o(this,r,jt),o(this,Ae),o(this,cn).size,o(this,r,Gt)?-1:o(this,ae).length]};Kn=function(e,t){const n=e.length===1&&$0(e[0])?[]:e;if(T$(n,o(this,ke)))return!1;const i=o(this,Gn),s=l(this,r,Je).call(this);return w(this,ke,n),w(this,Qt,n.map($$)),w(this,Gn,n.length?Object.freeze(n.map(a=>sk(a,s))):fh),w(this,pp,l(this,r,dv).call(this)),this.requestUpdate(),l(this,r,vv).call(this,t!=="api"),t&&l(this,r,fp).call(this,i,t),!0};fp=function(e,t){this.dispatchEvent(new CustomEvent("u-grid-cell-range-change",l(this,r,Re).call(this,{ranges:o(this,Gn),previous:e,source:t})))};TC=function(){if(!o(this,ke).length)return;const e=l(this,r,dv).call(this),t=o(this,pp);if(e.length===t.length&&e.every((i,s)=>Object.is(i,t[s]))&&o(this,ke).every(i=>Math.max(i.anchorRow,i.endRow)<o(this,ae).length))return;const n=o(this,Gn);w(this,ke,[]),w(this,Qt,[]),w(this,Gn,fh),w(this,Tt,!1),l(this,r,ih).call(this),l(this,r,vv).call(this),o(this,Uo)??w(this,Uo,{previous:n,source:o(this,Zi)??"api"})};cm=function(e){return{anchorRow:e.row,anchorCol:e.col,endRow:e.row,endCol:e.col}};zC=function(e,t,n){const i=o(this,r,Ft),s=e.ctrlKey||e.metaKey;if(o(this,Wt)&&t.row<0&&(e.key==="F8"&&e.shiftKey&&!s||e.key==="Escape"))return e.preventDefault(),l(this,r,Ur).call(this,!1),!0;if(i==="none"||t.row<0||e.altKey)return!1;if(e.key==="F8"&&e.shiftKey&&!s)return i!=="multiple"?!1:(e.preventDefault(),l(this,r,Ur).call(this,!o(this,Wt)),!0);if(e.key==="Escape"&&o(this,Wt))return e.preventDefault(),l(this,r,Ur).call(this,!1),!0;if(s&&!e.shiftKey&&e.key.toLowerCase()==="a"&&n!==vs)return e.preventDefault(),l(this,r,OC).call(this,"user"),!0;const a=w0(e,this._isRtl());return a?e.shiftKey&&typeof n=="object"&&l(this,r,Pi).call(this,t.row)?(e.preventDefault(),l(this,r,DC).call(this,t,a,s),!0):(e.shiftKey||(o(this,Wt)?w(this,Tt,!0):o(this,ke).length&&(w(this,Tt,!1),l(this,r,Kn).call(this,[],"user"))),!1):!1};LC=function(e){const t=o(this,r,Ft);if(e){t!=="multiple"&&l(this,r,Ur).call(this,!1,!1);const n=t==="none"?[]:t==="single"?o(this,ke).slice(-1):o(this,ke);if(n.length!==o(this,ke).length){const i=o(this,Gn);l(this,r,Kn).call(this,n,null),o(this,Uo)??w(this,Uo,{previous:i,source:"api"})}}t!=="none"&&o(this,r,pt)!=="none"&&!o(this,r,_n)&&!o(this,Uu)&&(w(this,Uu,!0),console.warn('<u-grid>: with cell-selection-mode and selection-mode, clicks select cells; add show-checkboxes (selection-mode="multiple") so rows can be selected with the pointer.'))};Ur=function(e,t=!0){o(this,Wt)!==e&&(w(this,Wt,e),w(this,Tt,e),this.requestUpdate(),t&&l(this,r,te).call(this,e?o(this,r,B).addToSelectionOnAnnouncement:o(this,r,B).addToSelectionOffAnnouncement))};OC=function(e){const[t,n]=l(this,r,ja).call(this),i=l(this,r,no).call(this,0,1),s=l(this,r,no).call(this,o(this,ae).length-1,-1);return i<0||s<0||n<t?!1:(w(this,Tt,!0),l(this,r,Kn).call(this,[{anchorRow:i,anchorCol:t,endRow:s,endCol:n}],e))};DC=function(e,t,n){const[i,s]=l(this,r,ja).call(this),a=o(this,ke)[o(this,ke).length-1],c=!a||o(this,Tt)||a.endRow!==e.row||a.endCol!==e.col;let{row:h,col:u}=e;switch(t){case"left":u=n?i:Math.max(u-1,i);break;case"right":u=n?s:Math.min(u+1,s);break;case"up":h=n?l(this,r,no).call(this,0,1):l(this,r,bl).call(this,h,-1,1);break;case"down":h=n?l(this,r,no).call(this,o(this,ae).length-1,-1):l(this,r,bl).call(this,h,1,1);break;case"home":u=i;break;case"end":u=s;break;case"gridHome":h=l(this,r,no).call(this,0,1),u=i;break;case"gridEnd":h=l(this,r,no).call(this,o(this,ae).length-1,-1),u=s;break;case"pageUp":h=l(this,r,bl).call(this,h,-1,l(this,r,Sc).call(this));break;case"pageDown":h=l(this,r,bl).call(this,h,1,l(this,r,Sc).call(this));break}const f=c?e:{row:a.anchorRow,col:a.anchorCol},g=c?o(this,Wt)&&o(this,r,Ft)==="multiple"?o(this,ke):[]:o(this,ke).slice(0,-1);w(this,Tt,!1),l(this,r,Kn).call(this,[...g,{anchorRow:f.row,anchorCol:f.col,endRow:h,endCol:u}],"user"),(h!==e.row||u!==e.col)&&l(this,r,Oe).call(this,{row:h,col:u},"user",{focus:!0,reveal:!0})};pv=function(e,t,n={row:o(this,Le),col:o(this,Fe)}){const i=o(this,ke)[o(this,ke).length-1],s=!!i&&!o(this,Tt);let a=s?{row:i.anchorRow,col:i.anchorCol}:n;l(this,r,Hs).call(this,a.row,a.col)||(a=e);const c=s?o(this,ke).slice(0,-1):o(this,Wt)&&o(this,r,Ft)==="multiple"?o(this,ke):[];w(this,Tt,!1),l(this,r,Kn).call(this,[...c,{anchorRow:a.row,anchorCol:a.col,endRow:e.row,endCol:e.col}],t),l(this,r,Oe).call(this,e,t,{focus:!0})};fv=function(e,t,n={row:o(this,Le),col:o(this,Fe)}){const i=o(this,ke).length||!l(this,r,Hs).call(this,n.row,n.col)||n.row===e.row&&n.col===e.col?o(this,ke):[l(this,r,cm).call(this,n)];w(this,Tt,!1),l(this,r,Kn).call(this,o(this,r,Ft)==="multiple"?[...i,l(this,r,cm).call(this,e)]:[],t),l(this,r,Oe).call(this,e,t,{focus:!0})};PC=function(e){const t=o(this,r,Ft);if(w(this,Hr,!1),e.button===2||ok(e)){w(this,wc,{position:{row:o(this,Le),col:o(this,Fe)},at:performance.now()});return}if(t==="none"||e.button!==0||e.pointerType==="touch"||e.altKey)return;const n=e.composedPath(),i=l(this,r,io).call(this,n),s=i&&l(this,r,Pn).call(this,i);if(!i||!s||s.row<0)return;const a=l(this,r,Je).call(this)[s.col],c=e.ctrlKey||e.metaKey;if(typeof a!="object"||!l(this,r,Pi).call(this,s.row)){a!==vs&&!e.shiftKey&&!c&&o(this,ke).length&&!o(this,Wt)&&l(this,r,Kn).call(this,[],"user");return}const h=n[0]!==i&&n.some(g=>g instanceof HTMLElement&&g!==i&&i.contains(g)&&g.matches(qm));if(i.classList.contains("editing")||h)return;if(e.shiftKey){e.preventDefault(),l(this,r,pv).call(this,s,"user");return}const u=c&&t==="multiple";u?l(this,r,fv).call(this,s,"user"):o(this,ke).length&&!o(this,Wt)&&l(this,r,Kn).call(this,[],"user");const f=u||o(this,Wt)?o(this,ke).slice(0,u?-1:void 0):[];w(this,Tt,!1),l(this,r,IC).call(this,e,s,f)};IC=function(e,t,n){const i=o(this,$n).value;i&&(l(this,r,ih).call(this),w(this,zn,{pointerId:e.pointerId,anchor:t,end:t,base:n,started:!1,previous:o(this,Gn),x:e.clientX,y:e.clientY,frame:0,table:i}),i.addEventListener("pointermove",o(this,mp)),i.addEventListener("pointerup",o(this,Vo)),i.addEventListener("pointercancel",o(this,Vo)),i.addEventListener("lostpointercapture",o(this,Vo)))};mp=new WeakMap;Vo=new WeakMap;FC=function(e,t){const n=l(this,r,cc).call(this),i=l(this,r,gr).call(this),s=this.shadowRoot;if(!n||!i.length||!s)return;const a=l(this,r,mv).call(this,n),c=l(this,r,Vc).call(this)?.getBoundingClientRect().bottom??a.top,h=Math.min(Math.max(e,a.left+1),a.right-2),u=Math.min(Math.max(t,Math.max(c,a.top)+1),a.bottom-2),[f,g]=l(this,r,ja).call(this);for(const v of s.elementsFromPoint(h,u)){const y=v.closest("td[data-col]");if(!(y instanceof HTMLElement)||!i.includes(y.parentElement?.parentElement?.parentElement)||y.closest("tbody")===null)continue;const _=l(this,r,Pn).call(this,y);return!_||!l(this,r,Pi).call(this,_.row)?void 0:{row:_.row,col:Math.min(Math.max(_.col,f),g)}}};mv=function(e){const t=e.getBoundingClientRect(),n=o(this,ve).port;if(!n)return t;const i=n.rect(),s=o(this,ve).padding(),a=o(this,r,Ge)&&o(this,Yn)?o(this,mr).value?.getBoundingClientRect().top??1/0:1/0;return{top:Math.max(t.top,i.top+s.top),left:Math.max(t.left,i.left),right:Math.min(t.right,i.right),bottom:Math.min(t.bottom,i.bottom-s.bottom,a)}};gv=function(){const e=o(this,zn);if(!e)return;const t=l(this,r,FC).call(this,e.x,e.y);if(t){if(!e.started){if(t.row===e.anchor.row&&t.col===e.anchor.col)return;e.started=!0,e.table.classList.add("range-dragging");try{e.table.setPointerCapture(e.pointerId)}catch{}}t.row===e.end.row&&t.col===e.end.col||(e.end=t,l(this,r,Kn).call(this,[...e.base,{anchorRow:e.anchor.row,anchorCol:e.anchor.col,endRow:t.row,endCol:t.col}],null))}};hm=function(){const e=o(this,zn);!e?.started||e.frame||(e.frame=requestAnimationFrame(()=>{e.frame=0;const t=l(this,r,cc).call(this);if(o(this,zn)!==e||!t)return;const n=l(this,r,mv).call(this,t),i=Math.max(l(this,r,Vc).call(this)?.getBoundingClientRect().bottom??n.top,n.top),s=u=>Math.min(Math.ceil(u/2)+2,48),a=e.y<i+Ao?-s(i+Ao-e.y):e.y>n.bottom-Ao?s(e.y-n.bottom+Ao):0,c=e.x<n.left+Ao?-s(n.left+Ao-e.x):e.x>n.right-Ao?s(e.x-n.right+Ao):0;if(!c&&!a)return;const h=o(this,ve).port;h&&o(this,r,Ge)?(t.scrollBy(c,0),h.source.scrollBy(0,a)):(h?.source??t).scrollBy(c,a),l(this,r,gv).call(this),l(this,r,hm).call(this)}))};um=function(){const e=o(this,zn);e&&(l(this,r,ih).call(this),e.started&&(w(this,Hr,!0),l(this,r,Oe).call(this,e.end,"user",{focus:!0}),e.previous!==o(this,Gn)&&l(this,r,fp).call(this,e.previous,"user")))};ih=function(){const e=o(this,zn);if(e){w(this,zn,void 0),e.table.removeEventListener("pointermove",o(this,mp)),e.table.removeEventListener("pointerup",o(this,Vo)),e.table.removeEventListener("pointercancel",o(this,Vo)),e.table.removeEventListener("lostpointercapture",o(this,Vo)),e.table.classList.remove("range-dragging"),e.frame&&cancelAnimationFrame(e.frame);try{e.table.hasPointerCapture(e.pointerId)&&e.table.releasePointerCapture(e.pointerId)}catch{}}};Vu=function(e){return e?` in-range${e.top?" range-top":""}${e.bottom?" range-bottom":""}${e.start?" range-start":""}${e.end?" range-end":""}`:""};gp=function(e,t){return o(this,Qt).length?z$(o(this,Qt),e,t):null};vv=function(e=!0){if(o(this,mn)?.abort(),w(this,mn,void 0),!o(this,ke).length){o(this,Xi).cancel("range"),o(this,Xi).cancel("summary"),o(this,wa)&&(w(this,wa,""),this.requestUpdate());return}e?o(this,Xi).run("range",()=>l(this,r,NC).call(this),Lx):o(this,Xi).cancel("range"),this.showCellRangeSummary&&o(this,Xi).run("summary",()=>l(this,r,WC).call(this),Lx)};NC=function(){if(!o(this,ke).length)return;const e=o(this,r,B),t=nn(this.language,{maximumFractionDigits:0});if(o(this,ke).length===1){const i=o(this,Qt)[0],s=l(this,r,xc).call(this,i.top,i.bottom),a=i.right-i.left+1;l(this,r,te).call(this,oe(e.cellRangeSelectedAnnouncement,{cells:t.format(s*a),rows:t.format(s),columns:t.format(a)}),!0);return}const n=D$(Rg(o(this,Qt)),(i,s)=>l(this,r,xc).call(this,i,s));l(this,r,te).call(this,oe(e.cellRangesSelectedAnnouncement,{count:t.format(o(this,ke).length),cells:t.format(n)}),!0)};WC=function(){const e=new AbortController;o(this,mn)?.abort(),w(this,mn,e),this.getCellRangeSummary({signal:e.signal}).then(t=>{o(this,mn)===e&&(w(this,mn,void 0),w(this,wa,l(this,r,BC).call(this,t)),this.requestUpdate())},()=>{o(this,mn)===e&&w(this,mn,void 0)})};BC=function(e){const t=o(this,r,B),n=nn(this.language,{maximumFractionDigits:0}),i=nn(this.language,{maximumFractionDigits:2}),s=[oe(t.summaryText,{type:t.summaryCount,value:n.format(e.count)})];return e.sum!==null&&e.avg!==null&&(s.push(oe(t.summaryText,{type:t.summarySum,value:i.format(e.sum)})),s.push(oe(t.summaryText,{type:t.summaryAvg,value:i.format(e.avg)}))),s.join(o(this,r,Dn))};GC=function(){const e=o(this,r,Ft),t=this.showCellRangeSummary&&e!=="none",n=o(this,Wt)&&e==="multiple";if(!t&&!n)return P;const i=o(this,r,B),s=o(this,ke).length?o(this,wa):"";return L`
      <div class=${s||n?"cell-range-bar has-text":"cell-range-bar"} part="cell-range-summary">
        ${n?L`<span class="cell-range-adding">${i.addingToSelection}</span>`:P}
        ${t?L`<div class="cell-range-summary" role="status" aria-atomic="true" aria-label=${i.cellRangeSummaryLabel}>${s}</div>`:P}
      </div>
    `};Zu=function(e){const t=l(this,r,Lt).call(this,e);return t&&t.type!=="add"&&Object.keys(t.data).length?o(this,se).mergedOf(t):e.item};Xu=function(e){if(o(this,r,Ft)==="none"||!o(this,ke).length||typeof l(this,r,Je).call(this)[e.col]!="object")return;const t=l(this,r,Je).call(this),n=o(this,r,B),i=nn(this.language,{maximumFractionDigits:0}),s=o(this,Qt).reduce((v,y)=>v+l(this,r,xc).call(this,y.top,y.bottom)*(y.right-y.left+1),0);if(s>Dc)return{refused:oe(n.copyLimitExceededAnnouncement,{count:i.format(s),max:i.format(Dc)})};const a=new Map,c=v=>{let y=a.get(v);return y||(y=ia(v)?l(this,r,up).call(this,v):l(this,r,KC).call(this,v),a.set(v,y)),y},h=[];for(const v of o(this,Qt)){const y=[];for(let E=v.left;E<=v.right;E++)y.push(c(t[E]));const _=[];for(let E=v.top;E<=v.bottom;E++){const $=l(this,r,pe).call(this,E);if(!$||!In($)||l(this,r,ri).call(this,$))continue;if($.skeleton)return{refused:n.rowsNotLoadedAnnouncement};const z=l(this,r,Zu).call(this,$),D=y.map(I=>I.read(z));_.push({rowType:"data",level:0,item:z,values:D,texts:D.map((I,j)=>y[j].text(I,z)),fixed:null})}h.push({rows:_,columns:y})}const u=Rg(o(this,Qt)),f=[];for(const v of u)for(let y=v.top;y<=v.bottom;y++){const _=l(this,r,pe).call(this,y);$e(_)&&f.push(l(this,r,Zu).call(this,_))}const g=[...new Set(o(this,Qt).flatMap(v=>t.slice(v.left,v.right+1)))].filter(v=>typeof v=="object").sort((v,y)=>t.indexOf(v)-t.indexOf(y));return{detail:{items:f,columns:g,ranges:o(this,Gn),...s1(h,s,l(this,r,dp).call(this))},announcement:oe(n.cellsCopiedAnnouncement,{count:i.format(s)})}};KC=function(e){return{info:{column:e,label:fe(e),dataType:l(this,r,en).call(this,e),alignment:"start"},read:()=>"",text:()=>"",builtIn:!0}};Yu=new WeakMap;vp=function(){return this.clipboardMode==="copy-paste"&&o(this,r,dt)&&!!this.allowEditing&&!o(this,he)&&!o(this,hn)};bv=function(e,t,n){if(!l(this,r,Hs).call(this,t.row,t.col))return!1;const i=P$(e).map(ue=>ue.map(F$));if(!i.length)return!1;const s=i.length,a=Math.max(...i.map(ue=>ue.length)),c=l(this,r,Ab).call(this,t),h=N$(s,a,l(this,r,$C).call(this,c.top,c.bottom),c.right-c.left+1),u=nn(this.language,{maximumFractionDigits:0});if(h.rows*h.cols>Dc)return l(this,r,te).call(this,oe(o(this,r,B).pasteLimitExceededAnnouncement,{count:u.format(h.rows*h.cols),max:u.format(Dc)})),!0;const f=[];for(let ue=c.top;ue<o(this,ae).length&&f.length<h.rows;ue++)l(this,r,Pi).call(this,ue)&&f.push(ue);const[,g]=l(this,r,ja).call(this),v=Math.min(c.left+h.cols-1,g),y=l(this,r,Je).call(this),_=sk({anchorRow:c.top,anchorCol:c.left,endRow:f[f.length-1],endCol:v},y),E={text:e,values:i,range:_,clipboardData:n};if(!this.dispatchEvent(new CustomEvent("u-grid-pasting",{...l(this,r,Re).call(this,E),cancelable:!0})))return!1;const $=E.values,z=Math.max($.length,1),D=Math.max(1,...$.map(ue=>ue.length)),I=[],j=new Set;let X=0,Q=0;f.forEach((ue,mt)=>{const Pe=l(this,r,pe).call(this,ue);if(!$e(Pe)){Q+=v-c.left+1;return}const Se=l(this,r,Lt).call(this,Pe),ce=$[mt%z]??[];for(let Ee=c.left;Ee<=v;Ee++){const Ve=y[Ee];if(!l(this,r,Bn).call(this,Pe,Ve,Se)){Q++;continue}const Ze=l(this,r,iv).call(this,o(this,Z).call(this,Pe.item));if(!Ze){Q++;continue}const Ot=l(this,r,qC).call(this,String(ce[(Ee-c.left)%D]??""),Ve,ti(Ze.item,Ve));if(Ot===ik){Q++;continue}I.push(l(this,r,ov).call(this,Ze,Ve,Ot)),j.add(Ze),X++}});for(const ue of[...o(this,se).values()])o(this,se).prune(ue);o(this,se).touch(),this.requestUpdate();const ge=o(this,r,B),F=Q?oe(ge.cellsSkippedAnnouncement,{count:u.format(X),skipped:u.format(Q)}):oe(ge.cellsPastedAnnouncement,{count:u.format(X)});if(X&&o(this,r,wt)!=="batch")return l(this,r,te).call(this,F),l(this,r,vo).call(this,"user"),!0;const ee=()=>{const ue=[...j].filter(Pe=>o(this,se).get(Pe.rowKey)===Pe&&(Pe.errors.size||Pe.unparsed.size||Pe.rowError));if(!ue.length){l(this,r,te).call(this,F);return}const mt=oe(ge.invalidRowsMessage,{count:u.format(ue.length)});l(this,r,te).call(this,`${F} ${mt} ${l(this,r,hv).call(this,ue)}`.trim()),l(this,r,uv).call(this,ue),this.requestUpdate()},We=I.filter(ue=>Ma(ue));return We.length?Promise.all(We).then(ee):ee(),!0};qC=function(e,t,n){const i=Ny(l(this,r,en).call(this,t)),s=this.language||void 0;if(i==="number")return wT(e,s);if(i==="date"||i==="datetime")return Fy(xT(e,s,i==="datetime"),n,i==="datetime");if(i==="boolean"){const a=e.trim().toLowerCase(),c=o(this,r,B),h=Fc(t,c);return a?a===h.trueText.toLowerCase()?!0:a===h.falseText.toLowerCase()?!1:["true","1","yes","✓",c.trueText.toLowerCase()].includes(a)?!0:["false","0","no",c.falseText.toLowerCase()].includes(a)?!1:ik:null}return e};Mr=function(e){const t=[...this._regularColumns,...this._groupColumns];return typeof e=="string"?t.find(n=>n.name===e)??t.find(n=>n.path===e):e&&t.includes(e)?e:void 0};Xh=new WeakMap;$r=new WeakMap;jC=function(e){for(const t of e.leaves)if(!t.label&&!t.headerRenderer&&!t.path&&t.valueGetter&&t.name&&(l(this,r,lr).call(this,t)||h0(t))){const n=`computed:${t.name}`;o(this,$r).has(n)||(o(this,$r).add(n),console.warn(`<u-grid>: column "${t.name}" has a "valueGetter" but no "label"; its header, menus and announcements show the name "${t.name}".`))}for(const t of[...e.leaves,...e.bands]){if(!t.headerRenderer||t.label)continue;const n=fe(t),i=e.childrenOf.has(t),s=`${i?"band":"column"}:${n}`;if(o(this,$r).has(s))continue;o(this,$r).add(s);const a=n?`${i?"band":"column"} "${n}"`:i?"a band":"a column",c=n?`"${n}" names it`:"it has no name";console.warn(`<u-grid>: ${a} has a "headerRenderer" but no "label" (with <u-grid-column>, its text content); ${c} in menus, the column chooser, announcements and export.`)}};Tr=function(){const e=Pf(this.columns);w(this,Ie,e),w(this,$s,void 0),l(this,r,jC).call(this,e),w(this,Cn,void 0);const t=e.leaves,n=new Set(e.parentOf.keys());o(this,vn).clear(),o(this,ne).invalidate();const i=new Set([...this._regularColumns,...this._groupColumns]);for(const u of[o(this,Ct),o(this,_t),o(this,an),o(this,bn),o(this,Rn),o(this,ha)])for(const f of u.keys())n.has(f)||u.delete(f);const s=this._regularColumns.filter(u=>n.has(u)&&!e.childrenOf.has(u)),a=this._groupColumns.filter(u=>n.has(u)&&!e.childrenOf.has(u)),c=[],h=[...o(this,qe).filter(u=>n.has(u.column)),...$1(t.filter(u=>!i.has(u)))];$y(h,o(this,qe))||(w(this,qe,h),w(this,$t,!0)),t.forEach((u,f)=>{i.has(u)||(u.groupIndex===null||u.groupIndex===void 0?s.splice(Math.min(f,s.length),0,u):c.push(u))}),c.sort((u,f)=>u.groupIndex-f.groupIndex).forEach(u=>a.splice(Math.min(u.groupIndex,a.length),0,u)),w(this,Si,!0),w(this,Xe,!0),o(this,Dt).prune(n),o(this,yi).closeIfRemoved(n),l(this,r,Zo).call(this,s,a)};kn=function(e,t,n,i){if(e&&o(this,r,Ce)){l(this,r,Mt).call(this,"group-api","grouping is ignored with tree-mode.");return}const s=this.getGrouping();let a=[...this._regularColumns];const c=[...this._groupColumns],h=o(this,Ie);if(h.childrenOf.has(t)){!e&&this._isRegularColumn(t)&&l(this,r,Zo).call(this,Xw(a,h,t,n),c);return}const u=a.includes(t)?a:c.includes(t)?c:null;if(u){if(e){const f=c[n];if(f===t)return;u.splice(u.indexOf(t),1);const g=f?c.indexOf(f):c.length;c.splice(g,0,t),l(this,r,Zo).call(this,a,c)}else{if(u===c){c.splice(c.indexOf(t),1);const f=h.parentOf.get(t)??null;let g=a.length;if(f){for(let v=a.length-1;v>=0;v--)if(Ls(h,a[v]).includes(f)){g=v+1;break}}a.splice(g,0,t),a=jl(a,h)}l(this,r,Zo).call(this,Xw(a,h,t,n),c)}i&&!ro(s,this._groupColumns)&&this.dispatchEvent(new CustomEvent("u-grid-group-change",l(this,r,Re).call(this,{grouping:this.getGrouping(),previous:s,source:i})))}};Zo=function(e,t){o(this,Xn).clear(),w(this,Zn,!0),o(this,di).clear(),ro(t,this._groupColumns)||(this._groupColumns=t,w(this,$t,!0)),w(this,Cn,void 0);const n=l(this,r,wv).call(this,jl(e,o(this,Ie)));ro(n,this._regularColumns)||(this._regularColumns=n),this.requestUpdate()};wv=function(e){return e.map((t,n)=>({column:t,index:n,rank:GT(this._fixedOf(t))})).sort((t,n)=>t.rank-n.rank||t.index-n.index).map(t=>t.column)};HC=function(){w(this,Cn,void 0);const e=a=>{const c=a.width??null,h=a.visible!==!1,u=Md(a.fixed),f=o(this,ha).get(a);f?.width===c&&f.visible===h&&f.fixed===u||(f&&(f.width!==c&&o(this,Ct).delete(a),f.visible!==h&&o(this,_t).delete(a),f.fixed!==u&&o(this,an).delete(a)),o(this,ha).set(a,{width:c,visible:h,fixed:u}),w(this,Xe,!0))};this._regularColumns.forEach(e),this._groupColumns.forEach(e),o(this,Ie).bands.forEach(e);const t=l(this,r,wv).call(this,this._regularColumns);ro(t,this._regularColumns)||(this._regularColumns=t);const n=this._regularColumns.filter(a=>this._isColumnVisible(a));ro(n,this._shownColumns)||(this._shownColumns=n,w(this,Un,!0)),(o(this,Un)||o(this,Xe))&&l(this,r,UC).call(this);const i=o(this,Ne),s=i.length?n.filter(a=>!i.includes(a)):n;ro(s,this._visibleColumns)||(this._visibleColumns=s,w(this,Xe,!0),w(this,Ro,!0))};UC=function(){if(l(this,r,XC).call(this)){const e=o(this,Ne).filter(t=>this._shownColumns.includes(t));l(this,r,dm).call(this,e);return}w(this,Un,!1),l(this,r,dm).call(this,l(this,r,VC).call(this))};dm=function(e){const t=o(this,Ne);ro(e,t)||(w(this,Ne,e),w(this,Xe,!0),!t.length!=!e.length&&w(this,Me,!0),this.requestUpdate())};VC=function(){const e=o(this,bi);w(this,zo,void 0);const t=this._shownColumns;if(!this.autoHideColumns||Jm||e<=0||t.length<2)return[];const n=o(this,oc),i=t.map(y=>({width:l(this,r,ZC).call(this,y,n),fixed:this._fixedOf(y)!==null,priority:yf(y.hidingPriority)})),s=this._regularColumns.some(y=>yf(y.hidingPriority)!==null)||this._groupColumns.some(y=>yf(y.hidingPriority)!==null),a=this._groupColumns.length*Ii+(o(this,r,_n)?nk:0)+(o(this,r,Di)?FT:0)+(this.detailRenderer?Km:0);let c=0;for(const y of i)c+=y.width;if(c<=e-a)return[];const h=e-a-(this.detailRenderer?0:Km),u=o(this,Ne).length;let f=qw(i,h,s);if(f.length<u){const y=qw(i,h-IT,s);y.length<=u&&(f=y)}const v=i.filter((y,_)=>!f.includes(_)).reduce((y,_)=>y+_.width,0)-h;if(f.length&&v>0){const y=_=>{const E=t[_],$=l(this,r,ii).call(this,E),z=Math.max(E.minWidth??0,y0);return $===void 0||f.includes(_)?void 0:{column:E,width:Math.max(z,$-v)}};for(let _=t.length-1;_>=0&&!o(this,zo);_--)i[_].fixed||w(this,zo,y(_));if(!o(this,zo)){let _=-1;i.forEach((E,$)=>{E.fixed&&!f.includes($)&&(_<0||E.width>i[_].width)&&(_=$)}),w(this,zo,_>=0?y(_):void 0)}}return f.map(y=>t[y])};ZC=function(e,t){return l(this,r,ii).call(this,e)??Zs(Math.max(e.minWidth??0,PT*t),e.minWidth??0,e.maxWidth??1/0)};XC=function(){if(o(this,he)||o(this,Ke).open||o(this,ut).open||o(this,yi).open||o(this,os).active)return!0;const e=this.shadowRoot?.activeElement;return!!e&&!!e.closest?.(".filter-row")};YC=function(){const e=o(this,js),t=o(this,Ne);w(this,js,t),o(this,tr)??w(this,tr,e),clearTimeout(o(this,Wo)),w(this,Wo,setTimeout(()=>l(this,r,JC).call(this),NT)),this.dispatchEvent(new CustomEvent("u-grid-adaptive-columns-change",l(this,r,Re).call(this,{columns:Object.freeze([...t]),previous:Object.freeze([...e])})))};JC=function(){const e=o(this,tr)??[],t=o(this,Ne);w(this,Wo,void 0),w(this,tr,void 0),!(ro(e,t)||!this.isConnected||!l(this,r,e_).call(this))&&l(this,r,te).call(this,l(this,r,xv).call(this))};xv=function(){const e=o(this,r,B),t=o(this,Ne);if(!t.length)return e.noAdaptiveColumnsAnnouncement;const n=t.length<=WT?l(this,r,Kv).call(this,t.map(i=>fe(i))):String(t.length);return oe(e.adaptiveColumnsAnnouncement,{columns:n})};QC=function(){const e=o(this,r,B),t=o(this,ne).filterValue,n=o(this,qe),i=o(this,Ne).flatMap(s=>{const a=n.find(h=>h.column===s)?.order,c=[...a?[a==="asc"?e.sortAscending:e.sortDescending]:[],...Vl(t,s,o(this,Mn))?[e.columnFiltered]:[]];return c.length?[`${fe(s)}${e.adaptiveLabelSeparator}${c.join(", ")}`]:[]});return[l(this,r,xv).call(this),...i].join(". ")};e_=function(){return!!this.shadowRoot?.activeElement||typeof this.matches=="function"&&this.matches(":focus-within")};xa=function(e){if(!o(this,Ne).length)return;const t=e.find(h=>h instanceof HTMLElement&&h.classList.contains("adaptive-value")),n=t?.closest("tr.detail-row"),i=Number(t?.getAttribute("data-column")),s=o(this,Ne).find(h=>zt(h)===i);if(!t||!n||!s)return;const a=Number(n.getAttribute("data-index"))-1,c=l(this,r,pe).call(this,a);return $e(c)?{element:t,column:s,masterIndex:a,rowKey:o(this,Z).call(this,c.item)}:void 0};bp=function(e,t,n=""){return l(this,r,nr).call(this,`:scope > tbody > tr.detail-row[data-index="${e}"] .adaptive-value${n}[data-column="${zt(t)}"]`)??null};t_=function(e,t,n){const{element:i,column:s,masterIndex:a,rowKey:c}=t,h=l(this,r,pe).call(this,a),u=e.ctrlKey||e.metaKey,f=o(this,he),g=e.composedPath()[0]===i;if(!$e(h)||u||e.altKey)return!1;if(f&&f.rowKey===c&&i.classList.contains("editing")&&!g){if(e.key==="Escape")return e.preventDefault(),w(this,qo,f.wholeRow?void 0:{rowKey:c,column:s}),l(this,r,ba).call(this,"user"),!0;if(e.key==="Enter")return e.preventDefault(),f.wholeRow?l(this,r,vo).call(this,"user"):(l(this,r,wl).call(this,c,s),l(this,r,as).call(this,"user",()=>l(this,r,wl).call(this,c,s))),!0;if(e.key==="Tab"){if(e.preventDefault(),f.wholeRow)l(this,r,Vv).call(this,n,e.shiftKey);else{const v=e.shiftKey?-1:1;l(this,r,wl).call(this,c,s,v),l(this,r,as).call(this,"user",()=>l(this,r,wl).call(this,c,s,v))}return!0}return!1}return g?(e.key==="Enter"||e.key==="F2")&&!e.shiftKey?(e.preventDefault(),o(this,r,dt)&&l(this,r,Bn).call(this,h,s)?l(this,r,pn).call(this,a,s,"user"):mi(i).find(v=>v!==i)?.focus(),!0):Gc(e)?(l(this,r,Xa).call(this,l(this,r,yv).call(this,t,null,e)),!0):!1:!1};yv=function(e,t,n){const i=l(this,r,Bp).call(this,{row:e.masterIndex,col:-1},e.column);if(!i)return!1;const{element:s,rowKey:a,column:c}=e;return l(this,r,Za).call(this,i,{returnFocus:()=>s.isConnected?s:l(this,r,bp).call(this,l(this,r,Ye).call(this,a)+1,c)??l(this,r,si).call(this),...t??{},positionTarget:s},n)};wl=function(e,t,n=0){const i=o(this,Ne),s=i.indexOf(t),a=n&&s>=0?i[(s+n+i.length)%i.length]:t,c=l(this,r,pe).call(this,o(this,Le))?.isDetail?l(this,r,pe).call(this,o(this,Le)).fixed:void 0;w(this,qo,{rowKey:e,column:a,fixed:c}),this.requestUpdate()};Cv=function(e,t,n,i){return l(this,r,Ju).call(this,e,i)<0?!1:(l(this,r,Qn).call(this,e)||(l(this,r,Jn).call(this,e,!0,n),l(this,r,ze).call(this)),l(this,r,Oe).call(this,{row:l(this,r,Ju).call(this,e,i)+1,col:o(this,Fe)},n,{reveal:!0}),w(this,qo,{rowKey:e,column:t,fixed:i}),!0)};Ju=function(e,t){if(!t)return l(this,r,Ye).call(this,e);const n=l(this,r,us).call(this)[t].findIndex(i=>!i.isDetail&&o(this,Z).call(this,i.item)===e);return n<0?-1:l(this,r,gn).call(this,t,n)};n_=function(){const e=this.shadowRoot?.activeElement,t=o(this,vi);!o(this,qo)&&t&&e instanceof HTMLElement&&e.classList.contains("adaptive-value")&&Number(e.getAttribute("data-column"))!==zt(t.column)&&e.closest(".detail-cell")?.querySelector(`.adaptive-value.focus-target[data-column="${zt(t.column)}"]`)?.focus();const n=o(this,qo);if(!n||o(this,he)?.focus)return;w(this,qo,void 0);const i=l(this,r,bp).call(this,l(this,r,Ju).call(this,n.rowKey,n.fixed)+1,n.column);i&&(w(this,je,!1),i.focus({preventScroll:!0}),i.scrollIntoView({block:"nearest",inline:"nearest"}))};i_=function(e){const t=o(this,Ie);return this._regularColumns.some(n=>{if(!l(this,r,En).call(this,n))return!1;for(let i=t.parentOf.get(n)??null;i;i=t.parentOf.get(i)??null){if(i===e)return!0;if(!l(this,r,En).call(this,i))return!1}return!1})};En=function(e){return o(this,_t).get(e)??e.visible!==!1};o_=function(){if(o(this,Cn))return o(this,Cn);const e=new Set,t=o(this,Ie);for(const n of this._regularColumns){if(!l(this,r,En).call(this,n))continue;const i=Ls(t,n);i.every(s=>l(this,r,En).call(this,s))&&i.forEach(s=>e.add(s))}return w(this,Cn,e),e};Cn=new WeakMap;oh=function(e){const t=o(this,Ie).parentOf.get(e)??null;(o(this,Rs).regular!==this._regularColumns||o(this,Rs).tree!==o(this,Ie))&&w(this,Rs,{regular:this._regularColumns,tree:o(this,Ie),byParent:new Map});let n=o(this,Rs).byParent.get(t);return n||(n=Od(this._regularColumns,o(this,Ie),t),o(this,Rs).byParent.set(t,n)),n};Rs=new WeakMap;_v=function(e){return l(this,r,oh).call(this,e).filter(t=>this._isColumnVisible(t)&&this._sameBlock(e,t))};wp=function(e){const t=l(this,r,oh).call(this,e),n=t.indexOf(e);if(n<0||!this._isColumnVisible(e))return!1;for(const i of[-1,1])for(let s=n+i;s>=0&&s<t.length;s+=i)if(this._isColumnVisible(t[s])){if(this._sameBlock(e,t[s]))return!0;break}return!1};s_=function(){return this._visibleColumns.some(e=>this._fixedOf(e)!==null)};Re=function(e){const t=e?.source;return(t==="user"||t==="api")&&l(this,r,Av).call(this,t),{detail:e,bubbles:!0,composed:!0}};Av=function(e){w(this,Zi,o(this,Zi)==="user"?"user":e)};ii=function(e){const t=o(this,Ct).get(e)??e.width??o(this,bn).get(e);return t==null?o(this,r,po)||o(this,r,Ge)?Zs(Math.max(e.minWidth??0,OT),e.minWidth??0,e.maxWidth??1/0):void 0:Zs(t,e.minWidth??0,e.maxWidth??1/0)};po=function(){const e=this.columnRenderingMode;return e==="virtual"||e!=="standard"&&o(this,Ie).leaves.length>LT};r_=function(){if(w(this,yn,0),!o(this,r,po)){w(this,la,void 0);return}const e=this._visibleColumns,t=e.map(g=>this._fixedOf(g)),n=e.map(g=>l(this,r,ii).call(this,g)??o(this,Rn).get(g)??0),i=[];let s=l(this,r,Xo).call(this);e.forEach((g,v)=>{t[v]?s+=n[v]:i.push(v)}),w(this,la,_$(i.map(g=>n[g]))),w(this,qd,s);const a=l(this,r,kv).call(this);w(this,$l,a);const c=new Set(i.slice(a.first,a.last+1)),h=o(this,Fe)-o(this,r,Ue);h>=0&&h<e.length&&c.add(h);const u=new Map;let f=0;return e.forEach((g,v)=>{t[v]||c.has(v)?(c.add(v),f&&u.set(v,f),f=0):f+=n[v]}),w(this,yn,f),{kept:c,gaps:u}};kv=function(){const e=o(this,la);if(!e)return{first:0,last:-1};const t=l(this,r,Mv).call(this)||DT;return A$(e,o(this,Tl),Math.max(t-o(this,qd),0),BT)};Ns=new WeakMap;ar=function(e){return this.columnResizing&&e.resizable!==!1};yc=function(e){const t=this._boundsOf(e).width;this.autoSizeColumn(e);const n=this._boundsOf(e).width;n!==t&&this._dispatchColumnResize({column:e,width:n,previousWidth:t})};Sv=function(e){const t=this._visibleColumns.indexOf(e);if(t<0)return;const n=t+1+o(this,r,Ue),i=this.renderRoot.querySelectorAll(`th.header-column[aria-colindex="${n}"], tbody tr:not(.group-row):not(.detail-row) > td[aria-colindex="${n}"]`);let s;return i.forEach(a=>{const c=a.tagName==="TH";let h,u;if(c&&(a.classList.add("measuring"),o(this,Mi).call(this,e))){const f=this.sortMode==="multiple",g=a.querySelector(".sort-indicator");g?f&&!g.hasAttribute("data-sort-index")&&(u=g,g.setAttribute("data-sort-index","9")):(h=document.createElement("span"),h.className="sort-indicator asc",h.style.visibility="hidden",h.setAttribute("aria-hidden","true"),h.append(Object.assign(document.createElement("span"),{style:"display:inline-block;width:1em;height:1em"})),f&&h.setAttribute("data-sort-index","9"),a.querySelector(".header-text")?.after(h))}s=Math.max(s??0,OR(a)),c&&(h?.remove(),u&&u.removeAttribute("data-sort-index"),a.classList.remove("measuring"))}),s};a_=function(){if(!this.columnAutoWidth)return!1;const e=o(this,Si);w(this,Si,!1);let t=!1;for(const n of this._visibleColumns){if(o(this,Ct).has(n)||n.width!==null&&n.width!==void 0||!e&&o(this,bn).has(n))continue;const i=l(this,r,Sv).call(this,n);if(i!==void 0&&i!==o(this,bn).get(n)){const{min:s,max:a}=this._boundsOf(n);o(this,bn).set(n,Zs(i,s,a)),t=!0}}return t};pm=function(){const e=this.renderRoot;let t=[...e.querySelectorAll("th.header-column")];if(!t.length){const s=e.querySelector("tbody tr[role=row]:not(.group-row):not(.detail-row)");t=s?[...s.querySelectorAll("td[role=gridcell]:not(.selection-cell):not(.detail-toggle-cell)")]:[]}let n=!1;const i=o(this,r,Ue);return t.forEach(s=>{const a=this._visibleColumns[Number(s.getAttribute("aria-colindex"))-1-i];if(!a)return;const c=s.getBoundingClientRect().width;Math.abs((o(this,Rn).get(a)??-1)-c)>.5&&(o(this,Rn).set(a,c),n=!0)}),n};l_=function(e){const t=e.querySelector("tbody.body-rows");if(!t||o(this,ve).port)return;const n=t.getBoundingClientRect().top-e.getBoundingClientRect().top,i=e.querySelector("tfoot")?.offsetHeight??0,s=Math.floor((e.clientHeight-n-i)/this.rowHeight)-1;w(this,Fd,Math.min(20,Math.max(1,s)))};fm=function(){const e=this._scrollContainerRef.value;!e||o(this,Tn)||typeof ResizeObserver>"u"||(w(this,Tn,new ResizeObserver(t=>{if(t.some(n=>n.target===e||n.target===this)){const n=o(this,ve).port?this.clientWidth:e.clientWidth;w(this,Xe,!0),w(this,Un,!0),w(this,bi,n),w(this,oc,this.autoHideColumns?(parseFloat(getComputedStyle(this).fontSize)||16)/16:1),o(this,sr).value?.style.setProperty("--_fill-inline-size",`${n}px`),l(this,r,l_).call(this,e),(!o(this,ve).port||o(this,r,Ge))&&o(this,sr).value?.style.setProperty("--_viewport-inline-size",`${n}px`),o(this,ve).port&&l(this,r,$v).call(this),this.requestUpdate()}l(this,r,c_).call(this),l(this,r,bb).call(this),o(this,eo).size&&(l(this,r,Xc).call(this),l(this,r,vr).call(this))})),o(this,Tn).observe(e),o(this,Tn).observe(this),l(this,r,Ev).call(this))};Ev=function(){const e=o(this,mc).value??null;!o(this,Tn)||e===o(this,Ci)||(o(this,Ci)&&o(this,Tn).unobserve(o(this,Ci)),w(this,Ci,e),e?o(this,Tn).observe(e):this._containerRef.value?.style.removeProperty("--_toolbar-offset"))};c_=function(){const e=o(this,Ci);e?.isConnected&&this._containerRef.value?.style.setProperty("--_toolbar-offset",`${e.offsetHeight}px`)};Oo=new WeakMap;mm=function(){const e=o(this,ve).port,t=o(this,tn).value;if(!e||!t||o(this,r,Ge))return;const n=t.getBoundingClientRect(),i=this.matches(":dir(rtl)"),s=e.rect(),a=i?o(this,Ws).end:o(this,Ws).start,c=i?o(this,Ws).start:o(this,Ws).end,h={left:s.left+a,right:Math.max(s.left+a,s.right-c)},u=Math.max(0,h.left-n.left),f=Math.max(0,n.right-h.right),g=Math.max(0,Math.min(h.right,n.right)-Math.max(h.left,n.left));return{start:i?f:u,end:i?u:f,visible:Math.round(g)}};Qu=new WeakMap;ed=new WeakMap;Mv=function(){return o(this,ve).port&&!o(this,r,Ge)?o(this,Qu):o(this,bi)};h_=function(e){e!==o(this,ed)&&e>0&&(w(this,ed,e),o(this,sr).value?.style.setProperty("--_viewport-inline-size",`${e}px`))};u_=function(){o(this,Ns).call(this),o(this,Oo).call(this),l(this,r,Rv).call(this)};d_=function(){o(this,ve).port&&(l(this,r,vr).call(this),o(this,ve).observeRows(o(this,tn).value?.querySelectorAll(":scope > tbody.body-rows > tr[data-index]:not(.pinned)")??[]),l(this,r,Rv).call(this))};Rv=function(){const e=this._containerRef.value,t=o(this,ve).port;if(!t||!e?.querySelector(".lang-scope > .load-panel"))return;const n=e.getBoundingClientRect(),i=t.rect(),s=Math.max(n.top,i.top),a=Math.min(n.bottom,i.bottom),c=Math.max(n.left,i.left),h=Math.min(n.right,i.right),u=(s+a)/2-n.top,f=this.matches(":dir(rtl)")?n.right-(c+h)/2:(c+h)/2-n.left;e.style.setProperty("--_visible-block-center",`${Math.max(0,u)}px`),e.style.setProperty("--_visible-inline-center",`${Math.max(0,f)}px`)};$v=function(){o(this,ht).sync(),o(this,Ns).call(this),o(this,Oo).call(this),l(this,r,Xc).call(this),l(this,r,vr).call(this),o(this,ve).checkHeight(),this.autoHideColumns?(w(this,Pl,!0),this.requestUpdate()):l(this,r,Tv).call(this)};p_=function(){if(!o(this,r,Ge)){o(this,ga).detach();return}const e=t=>t?.isConnected?t:null;o(this,ga).attach({body:o(this,ma).value,table:o(this,tn).value,head:e(o(this,Zd).value),fixedTop:e(o(this,Xd).value),fixedBottom:e(o(this,Yd).value),foot:e(o(this,Jd).value),bar:o(this,lc).value,spacer:o(this,Qd).value})};Tv=function(){o(this,r,Ge)||o(this,ve).checkHorizontalClip(o(this,tn).value)};Pl=new WeakMap;f_=function(e){const t=this._visibleColumns,n=u=>o(this,Rn).get(u)??l(this,r,ii).call(this,u)??0;let i=t.map(u=>this._fixedOf(u));this.autoHideColumns&&o(this,bi)&&i.some(Boolean)&&t.reduce((f,g,v)=>f+(i[v]?n(g):0),l(this,r,Xo).call(this))>o(this,bi)/2&&(i=i.map(()=>null));const s=[];let a=l(this,r,Xo).call(this);t.forEach((u,f)=>{i[f]==="start"&&(s[f]=a,a+=n(u))});let c=0;for(let u=t.length-1;u>=0;u--)i[u]==="end"&&(s[u]=c,c+=n(t[u]));const h=this.resizeMode==="next-column";return t.flatMap((u,f)=>{if(e&&!e.kept.has(f))return[];const g=i[f],v=l(this,r,Ha).call(this,u),y=oy(u,v.dataType),_=[];let E="";g==="start"?(_.push(i[f+1]==="start"?"fixed fixed-start":"fixed fixed-start fixed-start-edge"),E=`inset-inline-start: calc(var(--_port-inset-start, 0px) + ${s[f]}px)`):g==="end"&&(_.push(i[f-1]==="end"?"fixed fixed-end":"fixed fixed-end fixed-end-edge"),E=`inset-inline-end: calc(var(--_port-inset-end, 0px) + ${s[f]}px)`),(y==="center"||y==="end")&&_.push(`align-${y}`),u.wrap&&_.push("wrap");const $=_.join(" "),z=u.minWidth??null,D={minWidth:z===null?void 0:`${z}px`,insetInlineStart:g==="start"?`calc(var(--_port-inset-start, 0px) + ${s[f]}px)`:void 0,insetInlineEnd:g==="end"?`calc(var(--_port-inset-end, 0px) + ${s[f]}px)`:void 0},I=!u.wrap&&!u.renderer&&u.booleanDisplay!=="icon"&&u.booleanDisplay!=="check",j=this._boundsOf(u),X=l(this,r,ar).call(this,u)&&(!h||!!this._resizeNeighbor(u));return[{column:u,id:zt(u),format:v,className:$,cellClassName:I?`${$} truncate`:$,style:E,headerClasses:Object.fromEntries(_.flatMap(Q=>Q.split(" ")).map(Q=>[Q,!0])),headerStyles:D,resizable:X,bounds:j,width:l(this,r,ii).call(this,u)??o(this,Rn).get(u),col:f+o(this,r,Ue),gapBefore:e?.gaps.get(f)??0}]})};Xo=function(){return o(this,r,Ga)+(o(this,r,_n)?nk:0)};xp=function(e){return o(this,ts)[e]??o(this,fr)??this.autoExpandGroups};ls=new WeakMap;zv=function(){zi(this,Ba)._++,o(this,un).clear(),w(this,ts,[]),w(this,fr,void 0),w(this,Me,!0)};Lv=function(e){const t=o(this,Ie).leaves;return typeof e=="string"?t.find(n=>n.name===e)??t.find(n=>n.path===e):e&&t.includes(e)?e:void 0};gm=function(e,t){return(e??[]).filter(n=>!!n).map(n=>{const i=l(this,r,Lv).call(this,n.column),s=i?l(this,r,en).call(this,i):void 0;return{item:n,spec:{column:i,type:n.type,dataType:s,compare:n.type==="min"||n.type==="max"?Dd(t,s):void 0}}})};Vr=function(){return o(this,ft).some(({item:e})=>e.display==="footer")};ze=function(){const e=o(this,r,ir),t=e!==o(this,ku);if(w(this,ku,e),t&&(o(this,vn).clear(),o(this,ne).invalidate()),l(this,r,m_).call(this),o(this,Ae)&&!o(this,r,Gt))l(this,r,g_).call(this);else if(o(this,r,Gt)){const s=o(this,Qe).current,a=s?.version??-1;(s!==o(this,nd)||a!==o(this,id))&&(w(this,nd,s),w(this,id,a),o(this,Xn).clear(),w(this,Zn,!0))}if(o(this,Zn)||t&&(o(this,Yt).length||o(this,ft).length)){const s=o(this,r,Vr),a=l(this,r,gm).call(this,o(this,Ko)?.total,e),c=l(this,r,gm).call(this,o(this,r,Ce)?o(this,Ae)?[]:o(this,Ko)?.node:o(this,Ko)?.group,e);(t||!Px(a,o(this,Yt)))&&(w(this,Yt,a),w(this,yt,!0)),(t||!Px(c,o(this,ft)))&&(w(this,ft,c),w(this,kt,!0)),w(this,Zn,!1),o(this,Me)||w(this,Me,s!==o(this,r,Vr))}if(o(this,r,Gt)){l(this,r,v_).call(this),l(this,r,sd).call(this),l(this,r,td).call(this),l(this,r,ad).call(this);return}if(o(this,r,Ce)){l(this,r,W0).call(this,e,t);return}(o(this,$t)||t&&o(this,qe).length)&&(w(this,It,void 0),w(this,$t,!1),w(this,gi,!0));const n=String(this._searchColumns().map(zt));n!==o(this,da)&&(w(this,da,n),o(this,ne).searchColumnsChanged());const i=o(this,Kt).filtering?null:o(this,ne).maskFor(o(this,bt));if(i!==o(this,ho)&&(w(this,ho,i),w(this,gi,!0),w(this,yt,!0)),o(this,gi)){if(o(this,It)===void 0){const s=o(this,Kt).sorting?[]:o(this,qe).filter(a=>!o(this,wi).call(this,a.column));w(this,It,$g(o(this,bt),s,e,o(this,vn)))}w(this,ot,e0(o(this,bt),o(this,It),i)),!i&&o(this,It)&&w(this,It,void 0),w(this,gi,!1),w(this,kt,!0)}o(this,yt)&&(w(this,ns,Td(o(this,ot),o(this,Yt).map(({spec:s})=>s))),w(this,yt,!1)),(o(this,kt)||t&&this._groupColumns.length)&&(w(this,Oi,l(this,r,Wv).call(this,o(this,ot))),w(this,kt,!1),w(this,Me,!0)),o(this,Me)&&(w(this,ai,vE(o(this,ot),o(this,Oi),o(this,ls),o(this,co),o(this,r,Vr),o(this,np))),w(this,Me,!1),o(this,ht).measure()),w(this,Wn,o(this,ot).length),o(this,Ae)&&l(this,r,sd).call(this),l(this,r,td).call(this),l(this,r,ad).call(this)};td=function(){!o(this,ua)||o(this,ne).pending||o(this,r,cs)||(w(this,ua,!1),o(this,Wn)>=0&&w(this,ni,Eb(oe(o(this,r,B).filteredAnnouncement,{count:String(o(this,Wn))}),o(this,ni))))};m_=function(){const e=this.remoteOperations;if(e===o(this,bu))return;w(this,bu,e);const{flags:t,forced:n}=lE(e),i=JSON.stringify(t)!==JSON.stringify(o(this,Kt));n.length&&console.warn(`<u-grid>: remoteOperations also needs ${n.join(", ")} on the server; turned on.`),typeof e=="object"&&e?.summary&&!t.summary&&console.warn("<u-grid>: remoteOperations.summary only applies with remote paging or grouping; summaries are computed in the browser."),w(this,Kt,t),i&&(w(this,$t,!0),o(this,ne).invalidate(),w(this,kt,!0),w(this,yt,!0),w(this,Me,!0),w(this,Ui,void 0),w(this,Fo,void 0),w(this,qs,void 0))};g_=function(){const e=o(this,Qe).current;if(e&&e!==o(this,Fo)){if(w(this,Fo,e),o(this,r,Ce)){if(l(this,r,Au).call(this),o(this,Js).clear(),w(this,Fn,e.rootItems()??[]),o(this,Hc)?.tree?.parentKeys===null)for(const t of o(this,Fn))o(this,Js).add(o(this,on).call(this,t));return}l(this,r,Wr).call(this,e.rootItems()??[])}};v_=function(){const e=o(this,Qe).current,t=e?.version??-1;if(e===o(this,qs)&&t===o(this,wu)&&!o(this,Me)&&!o(this,kt)&&!o(this,yt))return;e!==o(this,qs)&&(o(this,St)??w(this,St,"api")),w(this,qs,e),w(this,wu,t),w(this,Me,!1),w(this,kt,!1),w(this,yt,!1);const n=e?.query.context,i=n?.groupColumns??[],s=n?.groupSummaryMap??[],a=n?.totalSummaryMap??[],c=h=>s.map(u=>u>=0?h[u]:void 0);w(this,ot,[]),w(this,ai,e?PE(e,i,o(this,ls),o(this,co),c,o(this,r,Vr),o(this,np)):new ea(o(this,co))),w(this,Oi,e?IE(e,i,c):[]),w(this,ns,a.map(h=>h>=0?e?.summary[h]:void 0)),w(this,Wn,e?.totalCount??(e?-1:0)),o(this,ht).measure()};nd=new WeakMap;id=new WeakMap;Ov=function(){if(!o(this,r,Gt))return o(this,bt);const e=[];for(const t of o(this,Qe).current?.loadedItems()??[])if(e.push(t),e.length>=1e3)break;return e};od=function(e,t){if(!e.path||t!=="summary"&&!!e.valueGetter||t==="sorting"&&!!e.comparator||t==="grouping"&&!!e.groupValueGetter){const i=`${t}:${zt(e)}`;o(this,xu).has(i)||(o(this,xu).add(i),console.warn(`<u-grid>: column "${fe(e)}" needs a plain "path" for remote ${t}; ignored on the server.`));return}return e.path};vm=function(e,t){const n=[];t.length=0;for(const{item:i,spec:s}of e){const a=typeof s.type=="string"&&s.column?l(this,r,od).call(this,s.column,"summary"):void 0;if(a===void 0||typeof s.type!="string"){t.push(-1);continue}t.push(n.length),n.push(i.name?{path:a,type:s.type,name:i.name}:{path:a,type:s.type})}return n};sd=function(){const e=o(this,Kt),n=o(this,r,Gt)?this._groupColumns.filter(y=>l(this,r,od).call(this,y,"grouping")!==void 0):[],i=o(this,qe).filter(y=>!o(this,wi).call(this,y.column)),s=e.sorting?[...n.map(y=>({path:y.path,order:l(this,r,hs).call(this,y)??"asc"})),...i.flatMap(({column:y,order:_})=>{const E=l(this,r,od).call(this,y,"sorting");return E===void 0?[]:[{path:E,order:_}]})]:[],a=[],c=[],h=o(this,r,Ce),u=e.paging&&!h,f=e.filtering?o(this,ne).combined():null,g={sort:s,filter:e.filtering?o(this,ne).combined():null,filterValue:e.filtering?o(this,ne).filterValue:null,searchText:e.filtering?o(this,ne).searchText:"",group:n.map(y=>({path:y.path,order:l(this,r,hs).call(this,y)??"asc",expanded:!1})),totalSummary:e.summary?l(this,r,vm).call(this,o(this,Yt),a):[],groupSummary:e.summary&&n.length?l(this,r,vm).call(this,o(this,ft),c):[],blockSize:u?o(this,r,jt):1/0,infinite:u&&this.scrollMode==="infinite"&&!this.paging,tree:h?{parentKeys:f?null:[this.rootParentKey??null]}:null},v=JSON.stringify([g,o(this,ra)]);if(v!==o(this,Ui)){if(this.scrollMode!=="virtual"&&!o(this,Zr)){const y=this.scrollMode!=="infinite"?`unknown scroll-mode "${String(this.scrollMode)}"; "virtual" is used.`:this.paging?'scroll-mode="infinite" is ignored with paging (the pager wins).':u?"":'scroll-mode="infinite" needs a dataSource with remote paging; ignored.';y&&(w(this,Zr,!0),console.warn(`<u-grid>: ${y}`))}w(this,Ui,v),w(this,Hc,h?g:void 0),g.context={groupColumns:n,totalSummaryMap:a,groupSummaryMap:c},w(this,Ys,{query:g,hintRow:this.paging?o(this,lt)*o(this,r,jt):o(this,rd)})}};Zr=new WeakMap;rd=new WeakMap;jt=function(){const e=Math.trunc(Number(this.pageSize));return e>0?e:20};Il=new WeakMap;ad=function(){const e=o(this,ai);if(!this.paging){w(this,Il,void 0),w(this,ae,l(this,r,sm).call(this,e)),l(this,r,bm).call(this);return}const t=o(this,r,jt),n=!o(this,Ae)||!!o(this,Qe).current||!o(this,r,Gt),i=Math.max(1,Math.ceil((e.length-e.detailCount)/t));n&&o(this,lt)>=i&&!o(this,r,cs)&&(o(this,St)&&(o(this,Xr)??w(this,Xr,{pageIndex:o(this,lt),pageSize:t,source:o(this,St)})),w(this,lt,i-1)),o(this,r,cs)||w(this,St,void 0);const{offset:s,length:a}=mE(e,o(this,lt)*t,t);let c=o(this,Il);c?.source===e&&c.offset===s&&c.length===a||(c=w(this,Il,new gE(e,s,a))),w(this,ae,l(this,r,sm).call(this,c)),l(this,r,bm).call(this)};bm=function(){o(this,ae)!==o(this,ip)&&l(this,r,cC).call(this)};Xr=new WeakMap;ya=function(){const e=o(this,ai);return Math.max(1,Math.ceil((e.length-e.detailCount)/o(this,r,jt)))};Ca=function(e,t,n){const i=o(this,lt),s=o(this,r,jt);e===i&&t===s||(this.pageSize=t,this.pageIndex=e,n==="user"&&o(this,ai).length&&l(this,r,te).call(this,l(this,r,nb).call(this,Math.min(o(this,lt),l(this,r,ya).call(this)-1))),this.dispatchEvent(new CustomEvent("u-grid-page-change",l(this,r,Re).call(this,{pageIndex:o(this,lt),previousPageIndex:i,pageSize:o(this,r,jt),previousPageSize:s,source:n}))))};cs=function(){return!!o(this,Ae)&&(!!o(this,Ys)||o(this,Qe).loading)};Dv=function(e,t){const n=o(this,Ae);if(!n)return null;const i=new CustomEvent("u-grid-loading",{...l(this,r,Re).call(this,{options:e}),cancelable:!0});if(!this.dispatchEvent(i))return null;let s;try{s=Promise.resolve(n.load(e,t))}catch(a){s=Promise.reject(a)}return s.then(a=>(t.aborted||this.dispatchEvent(new CustomEvent("u-grid-load",l(this,r,Re).call(this,{options:e,result:a}))),a),a=>{throw t.aborted||this.dispatchEvent(new CustomEvent("u-grid-load-error",l(this,r,Re).call(this,{options:e,error:a}))),a})};Pv=function(){o(this,_i)&&o(this,ni).replace(/\u00A0$/,"")===o(this,r,B).loading&&(w(this,ni,""),this.requestUpdate()),w(this,_i,!1)};b_=function(){if(o(this,Ae))return;if(o(this,Jt)||this.loading)!o(this,Zt)&&!o(this,_i)&&this.isConnected&&w(this,Zt,setTimeout(()=>{w(this,Zt,void 0),(o(this,Jt)||this.loading)&&(w(this,Ml,this.loading),w(this,_i,!0),l(this,r,te).call(this,o(this,r,B).loading))},lk));else{clearTimeout(o(this,Zt)),w(this,Zt,void 0);const t=o(this,_i)&&o(this,Ml);w(this,Ml,!1),l(this,r,Pv).call(this),t&&l(this,r,te).call(this,o(this,ae).length?oe(o(this,r,B).filteredAnnouncement,{count:String(o(this,Wn))}):o(this,r,B).noData)}};w_=function(){if(!o(this,Ae)||!this.isConnected)return;const e=o(this,Ys);e&&(w(this,Ys,void 0),o(this,Qe).reset(e.query,e.hintRow)),!o(this,r,cs)&&!o(this,Jt)?(clearTimeout(o(this,Zt)),w(this,Zt,void 0),l(this,r,Pv).call(this)):!o(this,Zt)&&!o(this,_i)&&!o(this,Ks)&&w(this,Zt,setTimeout(()=>{w(this,Zt,void 0),(o(this,r,cs)||o(this,Jt))&&(w(this,_i,!0),l(this,r,te).call(this,o(this,r,B).loading))},lk)),clearTimeout(o(this,No)),w(this,No,setTimeout(()=>{w(this,No,void 0),o(this,Qe).flush()},MT))};Iv=function(e,t,n,i){if(i&&!e.length&&!n.size&&t.size&&t.size<=256&&l(this,r,x_).call(this,t,i))return;const s=o(this,on),a=o(this,bt),c=!t.size&&!n.size?a.slice():[],h=new Map,u=new Set,f=n.size?new Int32Array(a.length):void 0;for(let E=0;E<a.length&&(t.size||n.size);E++){const $=a[E],z=s($);if(n.has(z)){u.add($),f&&(f[E]=-1);continue}f&&(f[E]=c.length);const D=t.get(z);D!==void 0&&D!==$?(h.set($,D),c.push(D)):c.push($)}if(!h.size&&!u.size&&!e.length)return;const g=c.length;for(const E of e)c.push(E);const v=[];for(const E of o(this,ot))u.has(E)||v.push(h.get(E)??E);for(const E of e)v.push(E);const y=o(this,ho);let _=null;if(y){_=new Uint8Array(c.length);for(let E=0;E<a.length;E++){const $=f?f[E]:E;$>=0&&(_[$]=y[E])}_.fill(1,g)}if(o(this,It)){const E=[];for(const $ of o(this,It)){const z=f?f[$]:$;z>=0&&E.push(z)}for(let $=g;$<c.length;$++)E.push($);w(this,It,Int32Array.from(E))}o(this,St)??w(this,St,"api"),w(this,bt,c),w(this,ot,v),w(this,ho,_),o(this,ne).adopt(c,_),o(this,vn).clear(),o(this,di).clear(),w(this,yt,!0),this._groupColumns.length?w(this,kt,!0):w(this,Me,!0),this.requestUpdate()};x_=function(e,t){const n=o(this,bt),i=o(this,ot)===n,s=n.slice(),a=i?s:o(this,ot).slice();for(const[c,h]of e){const u=t.get(c),f=u===void 0?-1:n.indexOf(u);if(f<0)return!1;if(s[f]=h,!i){const g=a.indexOf(u);g>=0&&(a[g]=h)}}return o(this,St)??w(this,St,"api"),w(this,bt,s),w(this,ot,a),o(this,ne).adopt(s,o(this,ho)),o(this,vn).clear(),o(this,di).clear(),w(this,yt,!0),this._groupColumns.length?w(this,kt,!0):w(this,Me,!0),this.requestUpdate(),!0};Yh=function(e,t,n){const i=o(this,ne).filterValue,s=o(this,ne).searchText;return o(this,ne).set(e,t)?(w(this,St,n),n==="user"&&w(this,ua,!0),this.dispatchEvent(new CustomEvent("u-grid-filter-change",l(this,r,Re).call(this,{filterValue:o(this,ne).filterValue,previousFilterValue:i,searchText:o(this,ne).searchText,previousSearchText:s,source:n}))),this.paging&&l(this,r,Ca).call(this,0,o(this,r,jt),n),!0):!1};$s=new WeakMap;Mn=new WeakMap;ld=new WeakMap;lr=function(e){return nR(e)?e.path?!0:o(this,Mn).call(this,e.name)!==e?(e.filterable===!0&&l(this,r,wm).call(this,e,`has the name "${e.name}" of another column's path or name; not filterable.`),!1):!o(this,Kt).filtering||e.filterable===!0:(e.filterable===!0&&l(this,r,wm).call(this,e,'needs a "path", or a "valueGetter" and a "name", to be filterable; ignored.'),!1)};Fv=function(e){return this.headerFilter&&l(this,r,lr).call(this,e)&&(!!e.path||!o(this,Kt).filtering)};wm=function(e,t){o(this,ld).has(e)||(o(this,ld).add(e),console.warn(`<u-grid>: column "${fe(e)}" ${t}`))};Nv=function(){const e=o(this,ne).searchText;return e!==o(this,Eu)&&(w(this,Eu,e),w(this,Mu,e.trim()?Pd(e):null)),o(this,Mu)};Wv=function(e){const t=this.language;return zE(e,this._groupColumns,n=>Dd(t,n.groupValueGetter?void 0:n.dataType),this._groupColumns.map(n=>l(this,r,hs).call(this,n)),o(this,ft).map(({spec:n})=>n))};hs=function(e){return o(this,qe).find(t=>t.column===e)?.order};zr=function(e,t){if($y(e,o(this,qe)))return!1;const n=this.getSorting(),i=()=>e.map(({column:a,order:c})=>({column:a,order:c})),s=new CustomEvent("u-grid-sorting",{detail:{sorting:i(),previous:n,source:t},bubbles:!0,composed:!0,cancelable:!0});return this.dispatchEvent(s)?(w(this,qe,i()),w(this,$t,!0),l(this,r,Av).call(this,t),this.requestUpdate(),this.dispatchEvent(new CustomEvent("u-grid-sort-change",{detail:{sorting:this.getSorting(),previous:n,source:t},bubbles:!0,composed:!0})),!0):!1};cd=function(e){const t=o(this,r,B),n=l(this,r,hs).call(this,e),i={column:fe(e)},s=o(this,qe).filter(h=>!o(this,wi).call(this,h.column)),a=s.findIndex(h=>h.column===e)+1,c=n==="asc"?t.sortAscending:t.sortDescending;w(this,ni,Eb(n?s.length>1&&a>0?oe(t.sortedWithPriorityAnnouncement,{...i,order:c,priority:String(a)}):oe(t.sortedAnnouncement,{...i,order:c}):oe(t.sortClearedAnnouncement,i),o(this,ni)))};Mi=new WeakMap;yp=new WeakMap;Bv=new WeakMap;Cp=new WeakMap;Cc=function(e){return e.type!=="click"||!o(this,Br)?!1:(w(this,Br,!1),!0)};en=function(e){return o(this,Xn).has(e)||o(this,Xn).set(e,iy(l(this,r,Ov).call(this),e)),o(this,Xn).get(e)};Ha=function(e){return{language:this.language,dataType:l(this,r,en).call(this,e),...Fc(e,o(this,r,B))}};_p=function(e){const{column:t}=e;if(t.groupValueGetter){const n=e.value;return n==null?t.emptyText??"":typeof n=="number"?nn(this.language).format(n):n instanceof Date?Qo(this.language,Jo).format(n):String(n)}return Ic(e.value,e.firstItem,t,l(this,r,Ha).call(this,t))};Gv=function(e){return{language:this.language,...Fc(e,o(this,r,B))}};y_=function(e){if(e.label)return e.label;const t=o(this,r,B);switch(e.type){case"sum":return t.summarySum;case"min":return t.summaryMin;case"max":return t.summaryMax;case"avg":return t.summaryAvg;case"count":return t.summaryCount;default:return}};Ua=function({item:e,spec:t},n){const i=o(this,r,B),s=uy(n,t,e.format,l(this,r,Gv).call(this,t.column)),a=l(this,r,y_).call(this,e),c=t.column?fe(t.column):"",h=a?oe(i.summaryText,{type:a,value:s}):s;return c?{text:h,label:a?oe(i.summaryColumnText,{type:a,column:c,value:s}):`${c}${i.groupLabelSeparator}${s}`}:{text:h,label:h}};Ap=function(e,t,n){const i=new Map,s=o(this,Ne);return e.forEach((a,c)=>{const{column:h}=a.spec;if(!h||!n(a,c)||s.includes(h))return;let u=i.get(h);u||(u=[],i.set(h,u)),u.push(l(this,r,Ua).call(this,a,t[c]))}),i};Dn=function(){const e=this.language;return o(this,Rl)?.language!==e&&w(this,Rl,{language:e,separator:$T(e)}),o(this,Rl).separator};Kv=function(e){return e.join(o(this,r,Dn))};hd=new WeakMap;_c=new WeakMap;xm=function(e,t,n){const i=o(this,r,pt);if(i==="none")return;l(this,r,ze).call(this);const s=o(this,r,Ia)&&i==="multiple"?[...l(this,r,Gd).call(this,e,!0,new Set(t?o(this,ie).keys:[]))]:[...e];l(this,r,wn).call(this,i==="single"?o(this,ie).replace(s.slice(-1)):t?o(this,ie).add(s):o(this,ie).replace(s),n)};Fl=function(e,t){if(o(this,r,pt)!=="multiple")return!1;l(this,r,ze).call(this);const n=o(this,r,Gt)?l(this,r,rh).call(this):o(this,ot),i=o(this,st)?n.map(o(this,Z)):n;return l(this,r,wn).call(this,e?o(this,ie).add(i):o(this,ie).remove(i),t)};wn=function(e,t){return e?(this.requestUpdate(),this.dispatchEvent(new CustomEvent("u-grid-selection-change",l(this,r,Re).call(this,{...e,source:t}))),!0):!1};Nl=function(e){const t=o(this,Z).call(this,e.item),n=o(this,ie).has(t);w(this,jo,t),o(this,r,pt)==="single"?l(this,r,wn).call(this,n?o(this,ie).remove([t]):o(this,ie).replace([t]),"user"):o(this,r,Ia)?l(this,r,wn).call(this,o(this,ie).replace(l(this,r,Gd).call(this,[t],!n,new Set(o(this,ie).keys))),"user"):l(this,r,wn).call(this,n?o(this,ie).remove([t]):o(this,ie).add([t]),"user"),l(this,r,sh).call(this)};Wl=function(e,t){const n=l(this,r,pe).call(this,e);if(!$e(n))return;if(o(this,r,pt)!=="multiple"){l(this,r,Nl).call(this,n);return}let i=l(this,r,Ye).call(this,o(this,jo));i<0&&(i=e,w(this,jo,o(this,Z).call(this,n.item)));const s=kR(i,e).map(c=>o(this,ae).at(c)).filter($e).map(c=>o(this,Z).call(this,c.item));l(this,r,wn).call(this,t?o(this,ie).add(s):o(this,ie).replace(s),"user")&&s.length>1&&l(this,r,sh).call(this)};qv=function(){if(o(this,r,Gt))return;const e=o(this,ot).length>0&&l(this,r,jv).call(this)===o(this,ot).length;l(this,r,Fl).call(this,!e,"user")&&l(this,r,sh).call(this)};sh=function(){l(this,r,te).call(this,oe(o(this,r,B).rowsSelectedAnnouncement,{count:String(o(this,ie).size)}))};te=function(e,t=!1){t||o(this,Xi).cancel("range"),w(this,ni,Eb(e,o(this,ni))),this.requestUpdate()};jv=function(){const e=o(this,Wg);return(e.version!==o(this,ie).version||e.items!==o(this,ot))&&(e.version=o(this,ie).version,e.items=o(this,ot),e.count=GR(o(this,ie),o(this,ot),o(this,st)?o(this,Z):void 0)),e.count};ym=new WeakMap;Ye=function(e){if(e===void 0)return-1;const t=l(this,r,pe).call(this,o(this,Le));return $e(t)&&o(this,Z).call(this,t.item)===e?o(this,Le):o(this,ae).indexOfDataKey(e,o(this,st)?o(this,Z):void 0)};rh=function(){if(o(this,r,Gt)){const e=o(this,Qe).current;return e?[...e.loadedItems()]:[]}return o(this,bt)};C_=function(e,t){return l(this,r,rh).call(this).find(n=>t(n)===e)};__=function(e,t){const n=new Map,i=o(this,ie);for(const c of l(this,r,rh).call(this)){const h=e(c);i.has(h)&&!n.has(h)&&n.set(h,o(this,Z).call(this,c))}const s=i.keys.filter(c=>n.has(c)).map(c=>n.get(c)),a=i.replace(s);w(this,jo,void 0),t&&l(this,r,wn).call(this,a,"api")};pe=function(e){if(e>=0&&e<o(this,ae).length)return o(this,ae).at(e);const{top:t,bottom:n}=l(this,r,us).call(this),i=e-o(this,r,oi);return i<0?void 0:i<t.length?t[i]:n[i-t.length]};us=function(){const e=o(this,vu),t=o(this,Bs),n=o(this,Gs),i=o(this,r,qt),s=i?`${o(this,Rt).version}:${this.autoExpandRows}`:"";if(e?.top===t&&e.bottom===n&&e.expansion===s)return e.rows;const a=(h,u)=>{const f=u==="top"?"t":"b",g=[];return h.forEach((v,y)=>{const _=`f:${f}:${y}`;g.push({isGroup:!1,key:_,item:v,index:y,fixed:u}),i&&l(this,r,Qn).call(this,o(this,Z).call(this,v))&&g.push({isGroup:!1,isDetail:!0,key:`${_}:d`,item:v,masterKey:_,fixed:u})}),g},c={top:a(t,"top"),bottom:a(n,"bottom")};return w(this,vu,{top:t,bottom:n,expansion:s,rows:c}),c};qn=function(){return l(this,r,us).call(this).top.length};bo=function(){return l(this,r,us).call(this).bottom.length};oi=function(){return o(this,ae).length+1};gn=function(e,t){return o(this,r,oi)+(e==="top"?0:o(this,r,qn))+t};ud=function(e){return e>=o(this,r,oi)&&e<o(this,r,oi)+o(this,r,qn)+o(this,r,bo)};cr=function(e){return e>=0&&e<o(this,ae).length};Cm=function(){return o(this,r,qn)+o(this,ae).length+o(this,r,bo)+(o(this,r,ds)?1:0)};A_=function(e){const t=o(this,r,qn),n=o(this,ae).length;if(e<0)return e;if(e<n)return t+e;if(e===n)return t+n+o(this,r,bo);const i=e-o(this,r,oi);return i<t?i:n+i};Jh=function(e){const t=o(this,r,qn),n=o(this,ae).length,i=o(this,r,bo);return e<0?e:e<t?o(this,r,oi)+e:e<t+n?e-t:e<t+n+i?o(this,r,oi)+t+e-t-n:n};dd=function(){return o(this,ai).length+o(this,cn).size};kp=function(e,t){const n=o(this,r,qn);if(l(this,r,cr).call(this,e))return e+1+t+n+o(this,ae).offset;if(e===o(this,ae).length)return o(this,r,dd)+t+n+o(this,r,bo)+1;const i=e-o(this,r,oi);return i<n?t+i+1:t+n+o(this,r,dd)+i-n+1};ds=function(){return o(this,Yt).length>0};pd=function(e){if(e===o(this,ae).length&&o(this,r,ds))return{totals:!0};const t=l(this,r,pe).call(this,e);if(!t)return null;if(Fi(t)||t.isDetail&&t.fixed){const n=e-o(this,r,oi)-(t.fixed==="top"?0:o(this,r,qn));return t.isDetail?{fixed:t.fixed,fixedKey:o(this,Z).call(this,t.item),position:n,detail:!0}:{fixed:t.fixed,fixedKey:o(this,Z).call(this,t.item),position:n}}return $e(t)?{key:o(this,Z).call(this,t.item)}:mh(t)?{detailOf:o(this,Z).call(this,t.item)}:{rowKey:t.key}};Qh=function(e,t){if("totals"in t)return e===o(this,ae).length;const n=l(this,r,pe).call(this,e);if(!n)return!1;const i=!!n.isDetail&&!!n.fixed;return"fixed"in t||Fi(n)||i?"fixed"in t&&(Fi(n)||i)&&n.fixed===t.fixed&&o(this,Z).call(this,n.item)===t.fixedKey&&i===!!t.detail:"detailOf"in t?mh(n)&&o(this,Z).call(this,n.item)===t.detailOf:"key"in t?$e(n)&&o(this,Z).call(this,n.item)===t.key:n.key===t.rowKey};Sp=function(){const e=[];return o(this,r,qt)&&e.push(mo),o(this,r,_n)&&e.push(vs),e};Je=function(){const e=l(this,r,Sp).call(this);return o(this,r,Di)?[...e,...this._visibleColumns,bs]:[...e,...this._visibleColumns]};k_=function(e){if(!this.showColumnHeaders){w(this,Nt,0),w(this,ca,[]),w(this,zl,void 0);return}const t=o(this,zl),n=l(this,r,Sp).call(this).join();if(t?.visible===this._visibleColumns&&t.tree===o(this,Ie)&&t.leading===n)return;w(this,zl,{visible:this._visibleColumns,tree:o(this,Ie),leading:n});const i=e.map(a=>({leaf:a,chain:typeof a=="object"?this._bandChainOf(a):[]})),s=1+i.reduce((a,c)=>Math.max(a,c.chain.length),0);w(this,Nt,s),w(this,ca,ky(i,s))};Yr=function(e,t){return Sy(o(this,ca),e+o(this,Nt),t)};Ac=function(){return o(this,Le)<0?l(this,r,Yr).call(this,o(this,Le),o(this,Fe))?.column??void 0:void 0};ah=function(){const e=l(this,r,S_).call(this),t=l(this,r,pe).call(this,o(this,Le)),n=Fi(t)?t.fixed:t?.isDetail?t.fixed??null:null;return(e.cellType==="data"||e.cellType==="command")&&o(this,Fe)>=o(this,r,Ue)&&l(this,r,lo).call(this,o(this,Le))?{rowKey:e.rowKey,column:null,cellType:"full-width",rowFixed:n}:{...e,rowFixed:n}};S_=function(){const e=o(this,xi),t=l(this,r,pe).call(this,o(this,Le));if(!t){const i=o(this,Le)<0;return{rowKey:null,column:Ra(i?l(this,r,Ac).call(this)??e:e),cellType:i?"header":"summary"}}if(t.isGroup)return{rowKey:null,column:null,cellType:"group"};if(t.isFooter)return{rowKey:null,column:Ra(e),cellType:"summary"};const n=!t.isDetail&&t.skeleton?null:o(this,Z).call(this,t.item);if(t.isDetail){const i=o(this,vi);return{rowKey:n,column:i&&i.rowKey===n?i.column:null,cellType:"detail"}}return e===mo?{rowKey:n,column:null,cellType:"detail-toggle"}:e===bs?{rowKey:n,column:null,cellType:"command"}:e===vs||!e?{rowKey:n,column:null,cellType:e?"selection":"data"}:{rowKey:n,column:e,cellType:"data"}};_a=new WeakMap;Oe=function({row:e,col:t},n,{focus:i=!1,reveal:s=!1}={}){const a=l(this,r,Je).call(this),c=e<0||l(this,r,pd).call(this,e)?e:o(this,Le);w(this,Le,c),w(this,ct,l(this,r,pd).call(this,c)),w(this,Fe,Math.min(Math.max(t,0),Math.max(a.length-1,0))),w(this,xi,a[o(this,Fe)]),w(this,rc,!0),o(this,je)||w(this,je,i),o(this,ln)||w(this,ln,s||i),w(this,_a,0),(s||i)&&(w(this,Yo,n==="api"),n==="user"&&w(this,hr,!1)),l(this,r,fd).call(this,n),this.requestUpdate()};fd=function(e){const t=l(this,r,ah).call(this),n=o(this,ac);w(this,ac,t),!(!e||!n||n.rowKey===t.rowKey&&n.column===t.column&&n.cellType===t.cellType&&n.rowFixed===t.rowFixed)&&this.dispatchEvent(new CustomEvent("u-grid-focus-change",l(this,r,Re).call(this,{rowKey:t.rowKey,column:t.column,cellType:t.cellType,previousRowKey:n.rowKey,previousColumn:n.column,rowFixed:t.rowFixed,previousRowFixed:n.rowFixed,source:e})))};E_=function(e){const t=o(this,ae);let n=o(this,Le);const i=o(this,ct);if(i&&!l(this,r,Qh).call(this,n,i)&&"rowKey"in i&&i.rowKey.startsWith("s:")){const f=t.indexOfSkeletonKey(i.rowKey);f>=0&&(n=f)}else if(i&&"fixed"in i&&!l(this,r,Qh).call(this,n,i))n=l(this,r,R_).call(this,i);else if(i&&!l(this,r,Qh).call(this,n,i)){const f="totals"in i?o(this,r,ds)?t.length:-1:"detailOf"in i?oz(t,i.detailOf,o(this,st)?o(this,Z):void 0):"key"in i?t.indexOfDataKey(i.key,o(this,st)?o(this,Z):void 0):"rowKey"in i?t.indexOfKey(i.rowKey):-1;n=f>=0?f:n}const s=t.length-(o(this,r,ds)?0:1);n>s&&!l(this,r,ud).call(this,n)&&(n=s),n<0&&!this.showColumnHeaders&&t.length&&(n=0),n<-Math.max(o(this,Nt),1)&&(n=-Math.max(o(this,Nt),1));let a=o(this,xi)===void 0?-1:e.indexOf(o(this,xi));const c=o(this,Ne)!==o(this,js);a<0&&(a=Math.min(o(this,Fe),Math.max(e.length-1,0)),c&&(a=l(this,r,M_).call(this,n,e,a)));const h=o(this,vi),u=!!i&&("detailOf"in i||"fixed"in i&&!!i.detail);c&&h&&u&&e.includes(h.column)&&(n-=l(this,r,pe).call(this,n)?.isDetail?1:0,a=e.indexOf(h.column),w(this,vi,void 0)),c&&(n!==o(this,Le)||e[a]!==o(this,xi))&&o(this,Lo)&&w(this,je,!0),w(this,Le,n),w(this,ct,l(this,r,pd).call(this,n)),w(this,Fe,a),w(this,xi,e[a]),w(this,dn,e),o(this,rc)||(w(this,rc,!0),w(this,ac,l(this,r,ah).call(this)))};M_=function(e,t,n){const i=o(this,xi),s=t.findIndex(h=>typeof h=="object"),a=t.reduce((h,u,f)=>typeof u=="object"?f:h,-1);if(i===mo)return s>=0?s:n;if(typeof i!="object"||!o(this,Ne).includes(i))return n;const c=l(this,r,pe).call(this,e);if(e>=0&&$e(c)&&!c.skeleton&&t[0]===mo&&!l(this,r,ri).call(this,c))return 0;if(e<0||c?.isGroup){const h=this._shownColumns,u=h.indexOf(i);for(let f=u-1;f>=0;f--){const g=t.indexOf(h[f]);if(g>=0)return g}return s>=0?s:n}return a>=0?a:n};R_=function(e){const t=l(this,r,us).call(this)[e.fixed],n=[!!e.detail,!1].map(s=>t.findIndex(a=>o(this,Z).call(this,a.item)===e.fixedKey&&!!a.isDetail===s)).find(s=>s>=0)??-1;if(n>=0)return l(this,r,gn).call(this,e.fixed,n);if(t.length)return l(this,r,gn).call(this,e.fixed,Math.min(e.position,t.length-1));const i=o(this,ae).length;if(e.fixed==="top"){const s=o(this,r,bo);return i?0:s?l(this,r,gn).call(this,"bottom",0):o(this,r,ds)?i:-1}return i?i-1:o(this,r,ds)?i:o(this,r,qn)?l(this,r,gn).call(this,"top",o(this,r,qn)-1):-1};rn=function(e,t){return e===o(this,Le)&&(t<0||t===o(this,Fe))};si=function(){return l(this,r,nr).call(this,':scope > thead > tr > [tabindex="0"], :scope > tbody > tr > [tabindex="0"], :scope > tfoot > tr > [tabindex="0"]')};_m=function(){const e=l(this,r,si).call(this);if(!e){w(this,je,!1),w(this,ln,!1);return}const t=e.closest("tr")?.classList.contains("pinned")??!1;if(o(this,je)&&t&&o(this,ln)&&o(this,ve).port!==null&&l(this,r,bd).call(this)!=="instant")o(this,Go)??w(this,Go,l(this,r,Am).call(this));else if(o(this,je)){w(this,je,!1);const s=o(this,Go);w(this,Go,void 0);const a=s!==void 0&&l(this,r,Am).call(this)!==s&&!this.matches(":focus-within"),c=o(this,vi),h=c&&e.classList.contains("detail-cell")?e.querySelector(`.adaptive-value.focus-target[data-column="${zt(c.column)}"]`):null;a||(h??e).focus({preventScroll:!0})}if(!o(this,ln)||o(this,hr))return;if(e.closest("tr")?.classList.contains("pinned")){++zi(this,_a)._>3&&(w(this,ln,!1),w(this,Yo,!1)),l(this,r,$_).call(this,o(this,Le));return}if(w(this,ln,!1),o(this,ve).port){l(this,r,vr).call(this);const s=l(this,r,bd).call(this);e.scrollIntoView({block:"nearest",inline:"nearest",behavior:s});const a=o(this,r,Ge)?e.closest(".band"):null;a&&o(this,ga).syncFrom(a),l(this,r,Hv).call(this,s),w(this,Yo,!1);return}const i=this._scrollContainerRef.value;if(i){const s=o(this,Yn)&&e.closest("tbody.fixed-rows")!==null,a=e.closest("tbody")!==null&&!s;i.style.scrollPaddingBlockStart=e.tagName==="TH"||s?"0px":`${l(this,r,ps).call(this)}px`,i.style.scrollPaddingBlockEnd=a?`${l(this,r,ur).call(this)}px`:"0px"}e.scrollIntoView({block:"nearest",inline:"nearest"})};$_=function(e){l(this,r,cr).call(this,e)&&(o(this,ve).port?l(this,r,z_).call(this,e):o(this,ht).scrollToIndex(e))};Go=new WeakMap;Yi=new WeakMap;Am=function(){let e=document.activeElement;for(;e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;return e};md=new WeakMap;Yo=new WeakMap;hr=new WeakMap;kc=new WeakMap;Ws=new WeakMap;gd=new WeakMap;vd=new WeakMap;bd=function(){const e=o(this,ve).port;return o(this,Yo)&&e&&getComputedStyle(e.element).scrollBehavior==="smooth"&&!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches?"auto":"instant"};Ts=new WeakMap;T_=function(){const e=o(this,$n).value;if(!e?.classList.contains("grid-bands"))return;const t=e.getBoundingClientRect(),n=t.left-o(this,Ts).x,i=t.top-o(this,Ts).y,s={x:Ed(n)-n,y:Ed(i)-i};Math.abs(s.x-o(this,Ts).x)<.001&&Math.abs(s.y-o(this,Ts).y)<.001||(w(this,Ts,s),e.style.left=s.x?`${s.x}px`:"",e.style.top=s.y?`${s.y}px`:"")};vr=function(){const e=o(this,sr).value;if(!e||!o(this,ve).port)return;const t=o(this,r,Ge);t&&l(this,r,T_).call(this);const n=o(this,ve).padding(),i=t?{top:Ed(n.top),bottom:Ed(n.bottom)}:n,s=w(this,Ws,t?{start:0,end:0,maskStart:0,maskEnd:0}:o(this,ve).inlineInsets(o(this,tn).value)),a=o(this,Ae)&&o(this,Qe).error?56:0,c=[l(this,r,ps).call(this),l(this,r,ur).call(this)+a,t?0:o(this,kc).start+s.start,t?0:o(this,kc).end+s.end,i.top,i.bottom,s.start,s.end,s.maskStart,s.maskEnd],h=c.join();if(h===o(this,gd))return;w(this,gd,h),["--_reveal-top","--_reveal-bottom","--_reveal-start","--_reveal-end","--_port-inset-top","--_port-inset-bottom","--_port-inset-start","--_port-inset-end","--_port-mask-start","--_port-mask-end"].forEach((f,g)=>e.style.setProperty(f,`${c[g]}px`))};z_=function(e){const t=o(this,ve).port,n=this._containerRef.value,i=o(this,tn).value?.querySelector(":scope > tbody.body-rows");if(!t||!n||!i)return;l(this,r,vr).call(this);const s=o(this,ve).padding(),a=l(this,r,ps).call(this),c=l(this,r,ur).call(this)+(o(this,Ae)&&o(this,Qe).error?56:0),h=o(this,ht).revealOffset(e,a+s.top,c+s.bottom),u=n.getBoundingClientRect(),f=t.rect(),g=o(this,vd)??w(this,vd,Object.assign(document.createElement("div"),{className:"reveal-probe"}));g.setAttribute("aria-hidden","true"),g.style.top=`${i.getBoundingClientRect().top-u.top+h}px`,g.style.height=`${o(this,ht).sizeOf(e)}px`,g.style.left=`${Math.max(0,Math.min(u.width-1,Math.max(f.left,u.left)-u.left))}px`,g.style.scrollMargin=`${a}px 0px ${c}px`,n.append(g);const v=l(this,r,bd).call(this);g.scrollIntoView({block:"nearest",inline:"nearest",behavior:v}),l(this,r,Hv).call(this,v,g)};Hv=function(e,t){if(e==="instant"){t?.remove(),o(this,ht).sync();return}w(this,hr,!0);const n=o(this,ve).port;if(n&&!o(this,Yi)){w(this,Yi,new AbortController);const i={passive:!0,signal:o(this,Yi).signal};for(const s of["wheel","touchstart","pointerdown","keydown"])n.target.addEventListener(s,o(this,md),i)}o(this,ve).afterScrollEnd(()=>{o(this,Yi)?.abort(),w(this,Yi,void 0),t?.remove(),w(this,hr,!1),o(this,ht).endGlide(),this.isConnected&&(o(this,ht).sync(),this.requestUpdate())})};ps=function(){const e=this.renderRoot,t=e.querySelector("thead"),n=e.querySelector(".header");return(this._containerRef.value?.classList.contains("header-rows-scroll")?0:t?.offsetHeight??0)+(n?.offsetHeight??0)+l(this,r,Uv).call(this,"top")};ur=function(){return o(this,r,Ge)?o(this,Yn)?o(this,mr).value?.offsetHeight??0:0:(this.renderRoot.querySelector("tfoot")?.offsetHeight??0)+l(this,r,Uv).call(this,"bottom")};Uv=function(e){return o(this,Yn)?this.renderRoot.querySelector(`tbody.fixed-${e}-rows`)?.offsetHeight??0:0};Sc=function(){const e=this._scrollContainerRef.value,t=o(this,ve).port;if(t){const n=o(this,ve).padding();return Math.max(1,Math.floor((t.clientHeight-n.top-n.bottom-l(this,r,ps).call(this)-l(this,r,ur).call(this))/this.rowHeight))}return e?Math.max(1,Math.floor((e.clientHeight-l(this,r,ps).call(this)-l(this,r,ur).call(this))/this.rowHeight)):1};io=function(e){const t=o(this,$n).value,n=l(this,r,gr).call(this);for(const i of e){if(i===t)return;if(i instanceof HTMLElement&&i.hasAttribute("data-col")&&(i.tagName==="TD"||i.tagName==="TH")&&n.includes(i.parentElement?.parentElement?.parentElement))return i}};Pn=function(e){const t=e.parentElement;if(!(t instanceof HTMLTableRowElement))return;const n=t.parentElement?.tagName,i=n==="THEAD"?Number(e.getAttribute("data-level")??o(this,Nt)-1)-o(this,Nt):n==="TFOOT"?o(this,ae).length:Number(t.getAttribute("data-index")??NaN);if(Number.isNaN(i))return;const s=Number(e.getAttribute("data-col")??NaN);return{row:i,col:Number.isNaN(s)?o(this,Fe):s}};wd=new WeakMap;xd=new WeakMap;L_=function(e,t){const n=o(this,he),i=l(this,r,pe).call(this,e.row);return n&&$e(i)&&n.rowKey===o(this,Z).call(this,i.item)&&(n.wholeRow||n.column===t)?(n.column=t,n.focus=!0,this.requestUpdate(),!0):l(this,r,pn).call(this,e.row,t,"user")};O_=function(e,t,n){const i=o(this,he),s=l(this,r,pe).call(this,n.row);if(!$e(s)||o(this,Z).call(this,s.item)!==i.rowKey||e.ctrlKey||e.metaKey||e.altKey)return!1;const a=o(this,dn)[n.col],c=e.composedPath()[0]!==t,h=c&&t.classList.contains("editing"),u=c&&i.wholeRow&&a===bs;if(e.key==="Escape"&&i.wholeRow&&!c)return e.preventDefault(),l(this,r,ba).call(this,"user"),!0;if(!h&&!u)return!1;if(l(this,r,cb).call(this,e),e.key==="Escape")return e.preventDefault(),l(this,r,ba).call(this,"user"),!0;if(e.key==="Tab"){if(e.preventDefault(),i.wholeRow)l(this,r,Vv).call(this,t,e.shiftKey);else{const f=e.shiftKey;l(this,r,as).call(this,"user",()=>l(this,r,P_).call(this,l(this,r,km).call(this,i.rowKey,n),f))}return!0}if(e.key==="Enter"&&h){if(e.preventDefault(),i.wholeRow)l(this,r,vo).call(this,"user");else{const f=e.shiftKey?-1:1;l(this,r,as).call(this,"user",()=>l(this,r,D_).call(this,l(this,r,km).call(this,i.rowKey,n),f))}return!0}return!1};km=function(e,t){const n=l(this,r,Ye).call(this,e);return{row:n>=0?n:t.row,col:t.col}};D_=function(e,t){let n=e.row+t;for(;n>=0&&n<o(this,ae).length&&!$e(l(this,r,pe).call(this,n));)n+=t;const i=n>=0&&n<o(this,ae).length?n:e.row;l(this,r,Oe).call(this,{row:i,col:e.col},"user",{focus:!0,reveal:!0})};P_=function(e,t){const n=l(this,r,Je).call(this),i=t?-1:1;let s=e.row,a=e.col+i,c=Math.max(n.length,1)*200;for(;s>=0&&s<o(this,ae).length&&c-- >0;){const h=l(this,r,pe).call(this,s);if($e(h)&&!h.skeleton){const u=l(this,r,Lt).call(this,h);for(;a>=0&&a<n.length;a+=i){const f=n[a];if(typeof f=="object"&&l(this,r,Bn).call(this,h,f,u)){l(this,r,pn).call(this,s,f,"user");return}}}s+=i,a=t?n.length-1:0}l(this,r,Oe).call(this,e,"user",{focus:!0,reveal:!0})};Vv=function(e,t){const n=e.closest("tr"),i=n?.classList.contains("detail-row")?n.previousElementSibling:n;if(!i)return;const s=i.nextElementSibling?.classList.contains("detail-row")?i.nextElementSibling:null,a=[];for(const v of i.querySelectorAll(":scope > td.editing"))a.push(...mi(v));if(s)for(const v of s.querySelectorAll(".adaptive-value.editing"))a.push(...mi(v));for(const v of i.querySelectorAll(":scope > td.command-cell"))a.push(...mi(v));if(!a.length)return;const c=this.shadowRoot?.activeElement??document.activeElement,h=a.findIndex(v=>v===c||v.contains(c)),u=a[(h+(t?-1:1)+a.length)%a.length],f=o(this,r,po)&&n===i&&!s?.contains(u)?l(this,r,I_).call(this,e,u,t):void 0;if(l(this,r,gs).call(this),f===void 0){u.focus();return}const g=l(this,r,Pn).call(this,e);g&&(l(this,r,Oe).call(this,{row:g.row,col:f},"user",{reveal:!0}),this.updateComplete.then(()=>{const v=l(this,r,nr).call(this,`:scope > tbody > tr[data-index="${g.row}"] > td[data-col="${f}"]`);((v?mi(v)[0]:void 0)??v)?.focus()}))};I_=function(e,t,n){const i=l(this,r,Pn).call(this,e),s=i&&l(this,r,pe).call(this,i.row);if(!i||!s||!$e(s))return;const a=l(this,r,Lt).call(this,s),h=l(this,r,Je).call(this).map((y,_)=>({column:y,col:_})).filter(({column:y})=>y===bs||typeof y=="object"&&l(this,r,Bn).call(this,s,y,a)).map(({col:y})=>y);if(!h.length)return;const u=t.closest("td"),f=Number(u?.getAttribute("data-col")??NaN);if(u===e)return;const g=h.indexOf(i.col),v=h[((g<0?n?0:-1:g)+(n?-1:1)+h.length)%h.length];return v===f?void 0:v};yd=new WeakMap;Sm=function(e,t){if(!o(this,r,dt)||o(this,r,wt)==="row"||(this.editTrigger==="dblclick"?"dblclick":"click")!==t)return;const n=e.composedPath(),i=l(this,r,xa).call(this,n);if(i){const u=n[0]!==i.element&&n.some(f=>f instanceof HTMLElement&&f!==i.element&&i.element.contains(f)&&f.matches(qm));!i.element.classList.contains("editing")&&!u&&l(this,r,pn).call(this,i.masterIndex,i.column,"user");return}const s=l(this,r,io).call(this,n),a=s&&l(this,r,Pn).call(this,s),c=n[0]!==s&&n.some(u=>u instanceof HTMLElement&&u!==s&&s?.contains(u)&&u.matches(qm));if(!s||!a||s.classList.contains("editing")||c)return;const h=l(this,r,Je).call(this)[a.col];typeof h=="object"&&l(this,r,pn).call(this,a.row,h,"user")};Em=new WeakMap;Mm=new WeakMap;Ep=function(e){const t=e.querySelector(".header-text");return[...t?mi(t):[],...e.querySelectorAll(".header-filter-button, .column-header-menu-button, .resize-handle")]};F_=function(e,t,n){if(typeof n=="object"&&this._isBand(n))return l(this,r,N_).call(this,e,t,n);if(n===vs)return(e.key===" "||e.key==="Enter")&&!e.repeat?(e.preventDefault(),l(this,r,qv).call(this),!0):!1;if(!n||n===mo||n===bs)return!1;const i=e.ctrlKey||e.metaKey;if(e.altKey&&e.shiftKey&&!i&&(e.key==="ArrowLeft"||e.key==="ArrowRight")){e.preventDefault();const s=e.key==="ArrowRight"!==this._isRtl();return l(this,r,Mp).call(this,n,s?1:-1),!0}if(i&&!e.altKey&&!e.shiftKey&&e.key.toLowerCase()==="g")return e.preventDefault(),this._userGroupColumn(n,this._groupColumns.length),this._groupColumns.includes(n)&&l(this,r,te).call(this,oe(o(this,r,B).groupedAnnouncement,{column:fe(n)})),w(this,je,!0),!0;if(Gc(e))return l(this,r,Xa).call(this,l(this,r,Va).call(this,n,t,{},e)),!0;if(e.key==="F2"){const s=l(this,r,Ep).call(this,t)[0];return s&&(e.preventDefault(),s.focus()),!0}if(e.altKey&&!e.shiftKey&&!i&&e.key==="ArrowDown"){const s=t.querySelector(".header-filter-button");return s&&(e.preventDefault(),s.click()),!0}return!1};N_=function(e,t,n){const i=e.ctrlKey||e.metaKey;if(e.altKey&&e.shiftKey&&!i&&(e.key==="ArrowLeft"||e.key==="ArrowRight")){e.preventDefault();const s=e.key==="ArrowRight"!==this._isRtl();return l(this,r,Mp).call(this,n,s?1:-1),!0}if(Gc(e))return l(this,r,Xa).call(this,l(this,r,Va).call(this,n,t,{},e)),!0;if(e.key==="F2"){const s=l(this,r,Ep).call(this,t)[0];return s&&(e.preventDefault(),s.focus()),!0}return!1};W_=function(e,t,n,i){if(e.preventDefault(),(n==="left"||n==="right")&&!e.shiftKey&&l(this,r,G_).call(this,t,n,i))return;if(i?.isGroup&&(n==="left"||n==="right")&&!e.shiftKey){if(n==="right"?!i.expanded:i.expanded)o(this,_c).call(this,i);else if(n==="left"){const y=l(this,r,K_).call(this,t.row);y>=0&&l(this,r,Oe).call(this,{row:y,col:o(this,Fe)},"user",{focus:!0})}return}if(t.row<0&&o(this,Nt)){const y=SR(t,n,{levels:o(this,Nt),colCount:o(this,dn).length,hasBody:o(this,r,Cm)>0,cellAt:(_,E)=>Sy(o(this,ca),_,E)});if(y){l(this,r,Oe).call(this,{row:l(this,r,Jh).call(this,y.row),col:y.col},"user",{focus:!0});return}}if(n==="gridHome"&&this.showColumnHeaders&&o(this,Nt)>1){l(this,r,Oe).call(this,{row:-o(this,Nt),col:0},"user",{focus:!0});return}if(this.paging&&(n==="pageUp"||n==="pageDown")&&l(this,r,cr).call(this,t.row)&&!e.shiftKey){const y=o(this,lt)+(n==="pageDown"?1:-1);if(y>=0&&y<l(this,r,ya).call(this)){l(this,r,Ca).call(this,y,o(this,r,jt),"user"),l(this,r,Oe).call(this,{row:t.row,col:t.col},"user",{focus:!0});return}}const s=o(this,r,Ue),a=t.row>=0&&t.col>=s&&l(this,r,lo).call(this,t.row);if(t.row>=0&&(n==="left"||n==="right"||n==="home"||n==="end")&&l(this,r,lo).call(this,t.row)){const y=o(this,Fe),_=a?(n==="left"||n==="home")&&s?n==="home"?0:s-1:y:n==="left"?Math.max(t.col-1,0):n==="home"?0:n==="end"?s:t.col+1;l(this,r,Oe).call(this,{row:t.row,col:_},"user",{focus:!0});return}const h=o(this,r,qn)+o(this,r,bo)&&(n==="pageUp"||n==="pageDown")?l(this,r,B_).call(this,t.row,n):void 0,u=h===void 0?AR({row:l(this,r,A_).call(this,t.row),col:i?.isGroup||i?.isDetail||a?o(this,Fe):t.col},n,{rowCount:o(this,r,Cm),colCount:o(this,dn).length,hasHeader:this.showColumnHeaders,pageSize:l(this,r,Sc).call(this),isGroupRow:y=>{const _=l(this,r,pe).call(this,l(this,r,Jh).call(this,y));return!!_?.isGroup||!!_?.isDetail}}):void 0,f=u?{row:l(this,r,Jh).call(this,u.row),col:u.col}:{row:h,col:a||i?.isGroup||i?.isDetail?o(this,Fe):t.col},g=y=>{const _=l(this,r,pe).call(this,y);return!!_&&In(_)&&_.key.startsWith("s:tree:")};if(o(this,r,Ce)&&g(f.row)){const y=f.row>=t.row?1:-1;let _=f.row;for(;g(_);)_+=y;f.row=l(this,r,pe).call(this,_)?_:t.row}l(this,r,Oe).call(this,f,"user",{focus:!0});const v=n==="up"||n==="down"||n==="pageUp"||n==="pageDown";e.shiftKey&&v&&l(this,r,cr).call(this,f.row)&&o(this,r,pt)==="multiple"&&l(this,r,Wl).call(this,f.row,e.ctrlKey||e.metaKey)};B_=function(e,t){const n=o(this,r,qn),i=o(this,r,bo),s=o(this,ae).length,a=o(this,r,ds)?s:void 0,c=Math.max(l(this,r,Sc).call(this),1),h=Math.min(l(this,r,av).call(this),Math.max(s-1,0)),u=i?l(this,r,gn).call(this,"bottom",0):void 0,f=n?l(this,r,gn).call(this,"top",n-1):void 0,g=e>=0&&l(this,r,ud).call(this,e)&&e-o(this,r,oi)<n,v=l(this,r,ud).call(this,e)&&!g;if(t==="pageDown"){if(e<0||g)return s?Math.min(s-1,h+c-1):u??a??e;if(l(this,r,cr).call(this,e))return e<s-1?Math.min(s-1,e+c):u??a??e;if(v){const y=l(this,r,gn).call(this,"bottom",i-1);return e<y?y:a??e}return e}return e<0?e:g?l(this,r,gn).call(this,"top",0):l(this,r,cr).call(this,e)?e>0?Math.max(0,e-c):f??e:v?e>u?u:s?h:f??e:i?l(this,r,gn).call(this,"bottom",i-1):s?h:f??e};G_=function(e,t,n){if(!o(this,r,Ce)||!$e(n)||!n.tree||e.col!==o(this,r,Li))return!1;if(n.tree.node<0){const u=t==="left"?l(this,r,Lt).call(this,n)?.parentKey:void 0;return u!==void 0&&l(this,r,Rm).call(this,u,e.col)}const i=n.tree.node,s=l(this,r,Bi).call(this,i),a=s&&l(this,r,Nn).call(this,i);if(t==="right")return!s||a?!1:(l(this,r,ki).call(this,o(this,Z).call(this,n.item),!0,"user"),!0);if(a)return l(this,r,ki).call(this,o(this,Z).call(this,n.item),!1,"user"),!0;const c=o(this,et)?.parent[i]??-1,h=o(this,be).index;return c<0||!h?!1:l(this,r,Rm).call(this,o(this,Z).call(this,h.nodes[c]),e.col)};Rm=function(e,t){let n=l(this,r,Ye).call(this,e);if(n<0&&this.paging){const i=o(this,ai).indexOfDataKey(e,o(this,st)?o(this,Z):void 0);if(i<0)return!1;l(this,r,Ca).call(this,Math.floor(i/o(this,r,jt)),o(this,r,jt),"user"),l(this,r,ze).call(this),n=l(this,r,Ye).call(this,e)}return n<0?!1:(l(this,r,Oe).call(this,{row:n,col:t},"user",{focus:!0}),!0)};K_=function(e){const t=l(this,r,pe).call(this,e);if(!t?.isGroup||t.level===0)return-1;for(let n=e-1;n>=0;n--){const i=o(this,ae).at(n);if(i.isGroup&&i.level<t.level)return n}return-1};Mp=function(e,t){const n=l(this,r,_v).call(this,e),i=n[n.indexOf(e)+t];if(!i)return;const s=this._siblingIndexOf(i);this._userMoveColumn(e,t>0?s+1:s);const a=l(this,r,oh).call(this,e).filter(c=>this._isColumnVisible(c));l(this,r,te).call(this,oe(o(this,r,B).columnMovedAnnouncement,{column:fe(e),position:String(a.indexOf(e)+1),count:String(a.length)})),w(this,je,!0),w(this,ln,!0)};q_=function(e,t,n){const i=n.ctrlKey||n.metaKey,s=this._groupColumns.length,a=n.key==="ArrowLeft"||n.key==="ArrowRight",c=n.key==="ArrowRight"!==this._isRtl();if(a&&n.altKey&&n.shiftKey&&!i){n.preventDefault();const h=t+(c?1:-1);h>=0&&h<s&&(this._userGroupColumn(e,c?h+1:h),l(this,r,Zv).call(this,e),l(this,r,wb).call(this,h));return}if(i&&!n.altKey&&n.key.toLowerCase()==="g"||n.key==="Delete"){n.preventDefault(),l(this,r,Rp).call(this,e);return}Gc(n)?l(this,r,Xa).call(this,l(this,r,Ea).call(this,n.currentTarget,null,n)):this.groupPanelMenu&&!o(this,Mi).call(this,e)&&jf(n)?(n.preventDefault(),l(this,r,Ea).call(this,n.currentTarget,null,null)):jf(n)&&!n.repeat&&o(this,Mi).call(this,e)&&(n.preventDefault(),o(this,Cp).call(this,e,n))};Zv=function(e){l(this,r,te).call(this,oe(o(this,r,B).groupLevelChangedAnnouncement,{column:fe(e),level:String(this._groupColumns.indexOf(e)+1),count:String(this._groupColumns.length)}))};Cd=function(e,t){const n=()=>l(this,r,te).call(this,oe(o(this,r,B).columnResizedAnnouncement,{column:fe(e),width:String(Math.round(l(this,r,ii).call(this,e)??this._boundsOf(e).width))}));t?o(this,pa).run("resize",n,t):(o(this,pa).cancel("resize"),n())};Rp=function(e){l(this,r,kn).call(this,!1,e,this._regularColumns.length,"user"),l(this,r,te).call(this,oe(o(this,r,B).ungroupedAnnouncement,{column:fe(e)})),this.updateComplete.then(()=>{const t=l(this,r,Je).call(this).indexOf(e);t>=0&&this.showColumnHeaders&&l(this,r,Oe).call(this,{row:Po,col:t},"user",{focus:!0})})};j_=function(e,t){return L`<div
      class="grid-bands"
      role=${e.role}
      aria-label=${W(e.label)}
      aria-rowcount=${e.rowCount}
      aria-colcount=${e.colCount}
      aria-multiselectable=${W(e.multiselectable)}
      aria-busy=${W(e.busy)}
      style=${e.scrollPadding}
      data-row-menu=${W(e.rowMenu)}
      ${it(o(this,$n))}
      @pointerover=${o(this,hd)}
      @keydown=${o(this,xd)}
      @copy=${o(this,qu)}
      @contextmenu=${o(this,kd)}
      @pointerdown=${o(this,Lc)}
      @click=${o(this,Oc)}
      @beforecopy=${o(this,ju)}
      @paste=${o(this,Yu)}
      @focusin=${o(this,wd)}
      @focusout=${o(this,yd)}>
      ${t.hasHead?L`<div class="band-head" ${it(o(this,fa))}>${t.hasHeadRows?L`<div class="band band-head-rows" role="rowgroup" tabindex="-1" style=${e.scrollPadding} ${it(o(this,Zd))}><table
              class=${t.className} role="presentation" ${it(o(this,jd))}>${t.colgroup()}${t.head}</table></div>`:P}${t.hasFixedTop?L`<div class="band band-fixed-top" role="rowgroup" tabindex="-1" aria-label=${o(this,r,B).fixedTopRowsLabel}
              style=${e.scrollPadding} ${it(o(this,Xd))}><table
              class=${t.className} role="presentation" ${it(o(this,Hd))}>${t.colgroup()}${t.fixedTop}</table></div>`:P}</div>`:P}
      <div class="band band-body" role="rowgroup" tabindex="-1" style=${e.scrollPadding} ${it(o(this,ma))}><table
        class=${t.className} role="presentation" ${it(o(this,tn))}>${t.colgroup()}${t.body}</table></div>
      <div class="band-foot" ${it(o(this,mr))}>
        ${t.hasFixedBottom?L`<div class="band band-fixed-bottom" role="rowgroup" tabindex="-1" aria-label=${o(this,r,B).fixedBottomRowsLabel}
              style=${e.scrollPadding} ${it(o(this,Yd))}><table
              class=${t.className} role="presentation" ${it(o(this,Ud))}>${t.colgroup()}${t.fixedBottom}</table></div>`:P}${t.hasTotals?L`<div class="band band-foot-rows" role="rowgroup" tabindex="-1" style=${e.scrollPadding} ${it(o(this,Jd))}><table
              class=${t.className} role="presentation" ${it(o(this,Vd))}>${t.colgroup()}${t.foot}</table></div>`:P}
        <div class="hscroll" aria-hidden="true" tabindex="-1" hidden ${it(o(this,lc))}><div
          class="hscroll-spacer" .inert=${!0} ${it(o(this,Qd))}></div></div>
      </div>
    </div>`};H_=function(e,t=!1){const n=h=>{const u=o(this,zo),f=l(this,r,ii).call(this,h);return u?.column===h&&f!==void 0?Math.min(f,u.width):f},i=[...e].reverse(),s=h=>o(this,Ct).has(h)||h.width!==null&&h.width!==void 0,a=i.find(({column:h})=>this._fixedOf(h)===null)??i.find(({column:h})=>!s(h))??e[e.length-1];let c;if(t&&a){const u=[`${e.reduce((g,{column:v,gapBefore:y})=>g+y+(v===a.column?0:n(v)??0),o(this,yn))}px`,...this._groupColumns.map(()=>"var(--_group-column-width)"),...o(this,r,qt)?["var(--_detail-toggle-width)"]:[],...o(this,r,_n)?["var(--_selection-column-width)"]:[],...o(this,r,Di)?["var(--_command-column-width)"]:[]].join(" - ");c=`max(${n(a.column)??0}px, var(--_fill-inline-size, 0px) - ${u})`}return L`
      ${rt(this._groupColumns,()=>L`
        <col class="group-column"/>`)}
      ${o(this,r,qt)?L`<col class="detail-toggle-column"/>`:P}
      ${o(this,r,_n)?L`<col class="selection-column"/>`:P}
      ${rt(e,({column:h,gapBefore:u})=>{const f=n(h),g={};return c&&h===a.column?g.width=c:f!==void 0&&(g.width=`${f}px`),L`${u?L`<col class="column-spacer" style="width: ${u}px"/>`:P}
          <col style="${eg(g)}"/>`})}
      ${o(this,yn)?L`<col class="column-spacer" style="width: ${o(this,yn)}px"/>`:P}
      ${o(this,r,Di)?L`<col class="command-column"/>`:P}
    `};$p=function(){return o(this,r,po)?e=>e.id:void 0};Xv=function(e,t){return o(this,r,po)?Pa(e,n=>n.id,t):rt(e,t)};Tp=function(e){return e?L`<td class="column-spacer" role="presentation"></td>`:P};Yv=function(){return l(this,r,Tp).call(this,o(this,yn))};U_=function(){const e=o(this,ot).length,t=e?l(this,r,jv).call(this):0;return t===0?"false":t===e?"true":"mixed"};Jv=function(e,t){return L`<span
      class="selection-checkbox"
      part="selection-checkbox"
      role="checkbox"
      aria-checked=${e}
      aria-label=${t}><svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        width="18"
        height="18"
        fill="currentColor"
        aria-hidden="true"><path d=${e==="mixed"?JT:YT}/></svg></span>`};V_=function(e){return!this.showColumnHeaders&&!this.showFilterRow?P:L`
      <thead role=${o(this,r,Ge)?"presentation":"rowgroup"}>
        ${this.showColumnHeaders?l(this,r,X_).call(this,e):P}
        ${this.showFilterRow?l(this,r,Z_).call(this,e):P}
      </thead>
    `};Z_=function(e){const t=o(this,r,B);return L`
      <tr class="filter-row" part="filter-row" role="row" aria-rowindex=${o(this,Nt)+1}>
        ${rt(this._groupColumns,(n,i)=>L`
          <td
            role="presentation"
            class="group-column sticky-cell"
            style="inset-inline-start: calc(var(--_port-inset-start, 0px) + ${i*Ii}px)"></td>`)}
        ${l(this,r,ch).call(this,null)}
        ${o(this,r,_n)?L`<td
            class="selection-cell sticky-cell"
            part="selection-cell"
            role="gridcell"
            aria-colindex=${o(this,r,Uc)+1}
            style="inset-inline-start: calc(var(--_port-inset-start, 0px) + ${o(this,r,Ga)}px)"></td>`:P}
        ${l(this,r,Xv).call(this,e,n=>L`${l(this,r,Tp).call(this,n.gapBefore)}${XM({controller:o(this,Dt),column:n.column,dataType:l(this,r,en).call(this,n.column),filterable:l(this,r,lr).call(this,n.column),translation:t,className:n.className,style:n.style,colIndex:n.col+1})}`)}
        ${l(this,r,Yv).call(this)}
        ${l(this,r,hh).call(this,null,o(this,r,Ue)+this._visibleColumns.length)}
      </tr>`};X_=function(e){const t=o(this,Nt),n=[],i=[];for(const f of l(this,r,Sp).call(this))n.push({leaf:f,chain:[]}),i.push(null);let s=[];for(const f of e){const g=this._bandChainOf(f.column);f.gapBefore&&(n.push({leaf:null,chain:zT(s,g)}),i.push(null)),n.push({leaf:f.column,chain:g}),i.push(f),s=g}o(this,yn)&&(n.push({leaf:null,chain:[]}),i.push(null)),o(this,r,Di)&&(n.push({leaf:bs,chain:[]}),i.push(null));const a=ky(n,t),c=l(this,r,Ac).call(this),h=o(this,qe).filter(f=>!o(this,wi).call(this,f.column)),u={rowSorting:h,showIndex:h.length>1};return rt(a,(f,g)=>L`
        <tr id=${W(g===0?"header-columns-row":void 0)} role="row" aria-rowindex=${g+1}>
          ${g===0?rt(this._groupColumns,(v,y)=>L`
              <th
                role="presentation"
                class="group-column sticky-cell"
                rowspan=${W(t>1?t:void 0)}
                style="inset-inline-start: calc(var(--_port-inset-start, 0px) + ${y*Ii}px)"></th>`):P}
          ${o(this,r,po)?Pa(f,v=>TT(v),v=>l(this,r,$m).call(this,v,i,c,u)):rt(f,v=>l(this,r,$m).call(this,v,i,c,u))}
        </tr>`)};$m=function(e,t,n,{rowSorting:i,showIndex:s}){const a=e.rowSpan>1?e.rowSpan:void 0,c=e.level+e.rowSpan-1,h=o(this,r,B),u=e.column;if(u===null)return L`<th class="column-spacer" role="presentation" rowspan=${W(a)}></th>`;if(u===mo)return L`
        <th
          class="detail-toggle-cell sticky-cell"
          part="detail-toggle-cell"
          role="columnheader"
          rowspan=${W(a)}
          aria-rowspan=${W(o(this,r,Ge)?a:void 0)}
          aria-colindex="1"
          data-col="0"
          data-level=${c}
          aria-describedby=${W(o(this,Ne).length?"adaptive-columns-description":void 0)}
          tabindex=${n===u?0:-1}
          style="inset-inline-start: calc(var(--_port-inset-start, 0px) + ${this._groupColumns.length*Ii}px)"
          ><span class="visually-hidden">${h.rowDetails}</span>${o(this,Ne).length?L`<span hidden id="adaptive-columns-description">${l(this,r,QC).call(this)}</span>`:P}</th>`;if(u===vs){const _=o(this,r,Uc);return L`
        <th
          class="selection-cell sticky-cell"
          part="selection-cell"
          role="columnheader"
          rowspan=${W(a)}
          aria-rowspan=${W(o(this,r,Ge)?a:void 0)}
          aria-colindex=${_+1}
          data-col=${_}
          data-level=${c}
          tabindex=${n===u?0:-1}
          style="inset-inline-start: calc(var(--_port-inset-start, 0px) + ${o(this,r,Ga)}px)"
          @click=${()=>l(this,r,qv).call(this)}>${o(this,r,Gt)?L`<span class="visually-hidden">${h.selectRow}</span>`:l(this,r,Jv).call(this,l(this,r,U_).call(this),h.selectAllRows)}</th>`}if(u===bs){const _=o(this,r,Ue)+this._visibleColumns.length;return L`<th
        class="command-cell"
        part="command-cell"
        role="columnheader"
        rowspan=${W(a)}
        aria-rowspan=${W(o(this,r,Ge)?a:void 0)}
        aria-colindex=${_+1}
        data-col=${_}
        data-level=${c}
        tabindex=${n===u?0:-1}><span class="header-text">${h.commandColumn}</span></th>`}if(e.band)return l(this,r,Y_).call(this,u,e,t,n);const f=t[e.start],g=o(this,ne).filterValue,v=i.findIndex(_=>_.column===u),y=`${e.level}-${f.col+1}`;return aR({column:u,classes:{...f.headerClasses,"last-column":e.start+e.span===t.length,"header-wrap":l(this,r,nA).call(this,u)},styles:f.headerStyles,colIndex:f.col+1,tabIndex:n===u?0:-1,level:c,rowSpan:a,ariaRowSpan:o(this,r,Ge),idSuffix:y,columnId:f.id,sortable:o(this,Mi).call(this,u),order:i[v]?.order,sortIndex:s&&v>=0?v+1:void 0,onActivate:o(this,Bv),onPointerDown:o(this,yp),onKeyDown:f.resizable?_=>{!_.shiftKey&&o(this,os).keyDown(_,u,!0)&&l(this,r,Cd).call(this,u,500)}:void 0,trailing:f.resizable?l(this,r,tA).call(this,f,y):P,filterButton:l(this,r,Fv).call(this,u)?uR(o(this,yi),u,g,o(this,r,B),o(this,Mn),`header-description-${y}`,y,o(this,r,tt)):P,menuButton:l(this,r,eA).call(this,u,y),filtered:Vl(g,u,o(this,Mn)),description:l(this,r,J_).call(this,u,i[v]?.order,v+1,s,Vl(g,u,o(this,Mn))),keyShortcuts:l(this,r,Q_).call(this,u,f.resizable),label:u.headerRenderer?l(this,r,hb).call(this,u,f.id):Ld(u)})};Y_=function(e,t,n,i){const s=n.slice(t.start,t.start+t.span).filter($=>!!$),a=s[0],c=s[s.length-1];if(!a)return L`<th class="column-spacer" role="presentation" colspan=${t.span}></th>`;const h=o(this,r,B),u=a.className.split(" ").includes("fixed")?this._fixedOf(e):null,f=e.alignment??"start",g={fixed:!!u,"fixed-start":u==="start","fixed-end":u==="end","fixed-start-edge":u==="start"&&!!c.headerClasses["fixed-start-edge"],"fixed-end-edge":u==="end"&&!!a.headerClasses["fixed-end-edge"],"align-center":f==="center","align-end":f==="end"},v=zt(e),y=l(this,r,Gp).call(this,e),{insetInlineStart:_}=a.headerStyles,{insetInlineEnd:E}=c.headerStyles;return rR({column:e,classes:g,styles:{insetInlineStart:u==="start"?_:void 0,insetInlineEnd:u==="end"?E:void 0},colIndex:a.col+1,colSpan:t.span,ariaColSpan:o(this,r,Ge)?c.col-a.col+1:void 0,level:t.level,tabIndex:i===e?0:-1,idSuffix:`${t.level}-${a.col+1}`,columnId:v,description:u==="start"?h.columnFixedStart:u==="end"?h.columnFixedEnd:"",keyShortcuts:[...l(this,r,wp).call(this,e)?["Alt+Shift+ArrowLeft","Alt+Shift+ArrowRight"]:[],...y?["Shift+F10"]:[],...e.headerRenderer?["F2"]:[]].join(" "),label:e.headerRenderer?l(this,r,hb).call(this,e,v):Ld(e)})};J_=function(e,t,n,i,s){const a=o(this,r,B),c=[];t&&i&&n>1&&c.push(oe(a.columnSortPriority,{order:t==="asc"?a.sortAscending:a.sortDescending,priority:String(n)}));const h=this._fixedOf(e);return h&&c.push(h==="start"?a.columnFixedStart:a.columnFixedEnd),s&&c.push(a.columnFiltered),c.join(", ")};Q_=function(e,t){const n=[],i=l(this,r,Fv).call(this,e);return l(this,r,Gp).call(this,e)&&n.push("Shift+F10"),Bc(e)&&n.push("Control+G","Meta+G"),l(this,r,wp).call(this,e)&&n.push("Alt+Shift+ArrowLeft","Alt+Shift+ArrowRight"),t&&n.push("Alt+ArrowLeft","Alt+ArrowRight"),i&&n.push("Alt+ArrowDown"),(i||t||e.headerRenderer||l(this,r,Qv).call(this,e))&&n.push("F2"),n.join(" ")};Qv=function(e){return this.showColumnHeaderMenuButton&&l(this,r,Gp).call(this,e)};eA=function(e,t){if(!l(this,r,Qv).call(this,e))return P;const n=o(this,r,B).columnHeaderMenuLabel,i=n.indexOf("{column}"),s=i>=0?n.slice(0,i):n,a=i>=0?n.slice(i+8):"",c=fe(e),h=l(this,r,zc).call(this,"header",e),u=e.headerRenderer?kg(n,"header-menu-name",t):void 0,f=(g,v)=>{l(this,r,Va).call(this,e,g.closest("th"),{opener:g,focusLast:v},null)};return L`<button
      class="column-header-menu-button"
      part="column-header-menu-button"
      type="button"
      tabindex="-1"
      aria-haspopup="menu"
      aria-expanded=${h?"true":"false"}
      aria-labelledby=${W(u?.labelledBy)}
      lang=${W(u?o(this,r,tt):void 0)}
      title=${W(u&&!e.label?void 0:oe(n,{column:c}))}
      @pointerdown=${g=>{g.stopPropagation()}}
      @click=${g=>{if(g.stopPropagation(),!l(this,r,Cc).call(this,g)){if(l(this,r,zc).call(this,"header",e)){o(this,Ke).hide(!0);return}f(g.currentTarget,!1)}}}
      @keydown=${g=>{g.altKey||g.ctrlKey||g.metaKey||g.shiftKey||(g.key==="Enter"||g.key===" "||g.key==="ArrowDown"||g.key==="ArrowUp")&&(g.preventDefault(),g.stopPropagation(),g.repeat||f(g.currentTarget,g.key==="ArrowUp"))}}>${u?.parts??L`<span
        class="visually-hidden"
        lang=${o(this,r,tt)}>${s}<span lang=${o(this,r,fo)}>${c}</span>${a}</span>`}</button>`};tA=function({column:e,bounds:t,width:n},i){const s=e.headerRenderer?kg(o(this,r,B).resizeHandleLabel,"resize-handle-name",i):void 0;return L`<div
      class="resize-handle"
      role="separator"
      aria-orientation="vertical"
      aria-label=${W(s?void 0:oe(o(this,r,B).resizeHandleLabel,{column:fe(e)}))}
      aria-labelledby=${W(s?.labelledBy)}
      lang=${o(this,r,tt)}
      aria-valuenow=${W(n===void 0?void 0:Math.round(n))}
      aria-valuemin=${t.min}
      aria-valuemax=${W(Number.isFinite(t.max)?t.max:void 0)}
      tabindex="-1"
      title=${o(this,r,B).autoSize}
      @pointerdown=${a=>o(this,os).pointerDown(a,e)}
      @click=${a=>a.stopPropagation()}
      @dblclick=${a=>{a.stopPropagation(),l(this,r,yc).call(this,e)}}
      @keydown=${a=>{a.key==="Enter"||a.key===" "?(a.preventDefault(),a.stopPropagation(),a.key==="Enter"&&l(this,r,yc).call(this,e)):o(this,os).keyDown(a,e,!1)}}>${s?.parts??P}</div>`};nA=function(e){return e.headerWrap??this.headerWrap};eb=function(){return this.headerWrap||this._visibleColumns.some(e=>e.headerWrap)};Tm=function(){return this.loading&&!o(this,ae).length&&!o(this,r,is)};iA=function(e){const t=Math.max(l(this,r,lh).call(this,e),1),n=this.loading;return L`
      <tr role="row" class=${n?"no-data-row loading-row":"no-data-row"}>
        <td
          role="gridcell"
          part="no-data"
          tabindex=${W(o(this,r,Ge)?"-1":void 0)}
          aria-colspan=${W(o(this,r,Ge)&&o(this,dn).length>1?o(this,dn).length:void 0)}
          lang=${W(this.noDataRenderer&&!n?void 0:o(this,r,tt))} colspan="${t}">${n?o(this,r,B).loading:this.noDataRenderer?l(this,r,yA).call(this,this.noDataRenderer):o(this,r,B).noData}</td>
      </tr>
      ${n?rt(Array.from({length:o(this,Fd)}),()=>L`
        <tr class="skeleton-row loading-placeholder" part="row skeleton-row" aria-hidden="true">
          ${rt(Array.from({length:t}),()=>L`<td><span class="skeleton"></span></td>`)}
        </tr>`):P}`};oA=function(e,t,n){if(!o(this,ae).length)return o(this,r,is)||o(this,Ae)&&!o(this,Qe).current?P:l(this,r,iA).call(this,n);const{first:i,end:s}=e,a=o(this,ae).slice(i,s).map((h,u)=>({row:h,index:i+u,pinned:!1}));o(this,st)&&!o(this,tc)&&l(this,r,rA).call(this,a.map(h=>h.row));const c=o(this,Le);if(c>=0&&c<o(this,ae).length&&(c<i||c>=s)){const h={row:o(this,ae).at(c),index:c,pinned:!0};c<i?a.unshift(h):a.push(h)}return Pa(a,h=>h.row.key,h=>l(this,r,ob).call(this,h.index,h.row,t,n,h.pinned))};zm=function(e,t,n,i){const s=o(this,r,B),a=new Map(t.map((c,h)=>[c,h]));return L`
      <tbody
        class="fixed-rows fixed-${e}-rows"
        part="fixed-${e}-row-group"
        role=${o(this,r,Ge)?"presentation":"rowgroup"}
        aria-label=${W(o(this,r,Ge)?void 0:e==="top"?s.fixedTopRowsLabel:s.fixedBottomRowsLabel)}>
        ${Pa(t,c=>c.key,c=>l(this,r,ob).call(this,l(this,r,gn).call(this,e,a.get(c)),c,n,i,!1))}
      </tbody>
    `};sA=function(){return o(this,r,Gt)&&o(this,Wn)<0};rA=function(e){const t=new Set;for(const n of e){if(!$e(n))continue;const i=o(this,Z).call(this,n.item);if(i==null||i===""||t.has(i)){w(this,tc,!0),console.error(`<u-grid>: keyExpr returned an empty or duplicate key (${String(i)}); keys must be unique.`);return}t.add(i)}};aA=function(){const e=o(this,r,is),t=this.loading&&o(this,ae).length>0;if(!o(this,Ae)&&!e&&!t)return P;const n=o(this,r,B),i=o(this,Ae)?o(this,Qe).error:void 0;return L`
      ${e||o(this,r,cs)||t?L`<div class="load-panel" part="load-panel" aria-hidden=${W(e?void 0:"true")}>
          <span class="load-spinner" aria-hidden="true"></span><span>${n.loading}</span>
        </div>`:P}
      ${i?L`<div class="error-row" part="error-row" role="alert">
          <span>${n.loadError}</span>
          <button type="button" part="retry-button" class="retry-button" @click=${o(this,tb)}>${n.retry}</button>
        </div>`:P}
    `};tb=new WeakMap;nb=function(e=Math.min(o(this,lt),l(this,r,ya).call(this)-1),t=l(this,r,ya).call(this)){const n=o(this,r,B),i=nn(this.language,{maximumFractionDigits:0});return o(this,Wn)<0?oe(n.pageInfoUnknownCount,{page:i.format(e+1)}):oe(n.pageInfo,{page:i.format(e+1),pageCount:i.format(t),count:i.format(o(this,Wn))})};lA=function(){const e=o(this,r,B),t=o(this,r,jt),n=l(this,r,ya).call(this),i=Math.min(o(this,lt),n-1),s=nn(this.language,{maximumFractionDigits:0}),a=l(this,r,nb).call(this,i,n),c=[...new Set([...this.pageSizeOptions??[]].filter(v=>Number.isInteger(v)&&v>0))];c.length&&!c.includes(t)&&(c.push(t),c.sort((v,y)=>v-y));const h=Math.max(0,Math.min(i-2,n-5)),u=Array.from({length:Math.min(5,n)},(v,y)=>h+y),f=v=>y=>{const _=y.currentTarget,E=Math.max(0,Math.min(v,n-1));l(this,r,Ca).call(this,E,t,"user"),(_.matches(":focus")||this.shadowRoot?.activeElement===_)&&this.updateComplete.then(()=>{const $=E===0||E===n-1;(_.classList.contains("pager-number")||$&&_.disabled)&&this.renderRoot.querySelector('.pager-number[aria-current="page"]')?.focus()})},g=(v,y,_,E,$="")=>L`<button
      type="button"
      part="pager-button"
      class="pager-button pager-arrow ${$}"
      aria-label=${y}
      title=${y}
      ?disabled=${E}
      @click=${f(v)}><svg viewBox="0 -960 960 960" width="20" height="20" fill="currentColor" aria-hidden="true"><path d=${_}/></svg></button>`;return L`
      <nav class="pager" part="pager" aria-label=${e.paginationLabel} .inert=${o(this,r,is)}>
        ${c.length?L`<label class="page-size">
            <span>${e.pageSizeLabel}</span>
            <select part="page-size-select" @change=${v=>l(this,r,Ca).call(this,0,Number(v.target.value),"user")}>
              ${c.map(v=>L`<option value=${v} ?selected=${v===t}>${s.format(v)}</option>`)}
            </select>
          </label>`:P}
        <span class="page-info" part="page-info">${a}</span>
        <span class="pager-buttons">
          ${g(0,e.firstPage,UT,i===0)}
          ${g(i-1,e.previousPage,VT,i===0)}
          ${u.map(v=>L`<button
            type="button"
            part="pager-button"
            class="pager-button pager-number"
            aria-label=${oe(e.pageInfoUnknownCount,{page:s.format(v+1)})}
            aria-current=${W(v===i?"page":void 0)}
            @click=${f(v)}>${s.format(v+1)}</button>`)}
          ${g(i+1,e.nextPage,ZT,i>=n-1)}
          ${g(n-1,e.lastPage,XT,i>=n-1)}
        </span>
      </nav>
    `};lh=function(e){return this._groupColumns.length+o(this,r,Ue)+e.length+e.reduce((t,n)=>t+(n.gapBefore?1:0),0)+(o(this,yn)?1:0)+(o(this,r,Di)?1:0)};ib=function(e){if(o(this,r,Ce)){if(Fi(e))return 1;if(e.isFooter)return e.level+2;if(e.isDetail){if(!e.tree)return 1;const t=o(this,et)&&Da(o(this,et),e.tree.node)>0&&l(this,r,Nn).call(this,e.tree.node);return e.tree.level+(t?2:1)}return In(e)&&e.tree?e.tree.level+1:1}return this._groupColumns.length?Fi(e)?1:!e.isGroup&&!e.isFooter&&!e.isDetail&&e.skeleton&&e.level!==void 0||e.isGroup?e.level+1:e.isFooter?e.level+2:this._groupColumns.length+1:P};ob=function(e,t,n,i,s){if(t.isDetail)return l(this,r,cA).call(this,e,t,n,i,s);const a=t.isGroup||t.isFooter?"":t.index%2===0?"odd":"even",c=Fi(t)?t.fixed:void 0,h=!t.isGroup&&!t.isFooter?l(this,r,ri).call(this,t):void 0,u=$e(t)&&o(this,r,pt)!=="none",f=u&&o(this,ie).has(o(this,Z).call(this,t.item)),g=$e(t)||Fi(t),v=g&&o(this,r,qt)&&l(this,r,Qn).call(this,o(this,Z).call(this,t.item)),y=$e(t)?l(this,r,Lt).call(this,t):void 0,_=$e(t)&&!!o(this,he)&&o(this,he).rowKey===o(this,Z).call(this,t.item),E=In(t)?t.tree:void 0,$=E?l(this,r,Kd).call(this,t):void 0,z={"group-row":t.isGroup,"group-footer-row":!!t.isFooter,"summary-row":!!t.isFooter,"skeleton-row":In(t)&&!!t.skeleton,last:e===o(this,ae).length-1,selected:f,expanded:v,pinned:s,added:y?.type==="add",removed:y?.type==="remove",editing:_,"fixed-row":!!c,"full-width-row":!!h};a&&(z[a]=!0);const D=t.isFooter&&o(this,r,Ce)?"summary-row footer-row node-footer-row":"summary-row footer-row group-footer-row",I=["row",t.isGroup?"group-row":t.isFooter?D:t.skeleton?"skeleton-row":a];return c&&I.push(`fixed-row fixed-${c}-row`),h&&I.push("full-width-row"),f&&I.push("selected"),(v||$==="true")&&I.push("expanded"),(y?.type==="add"||y?.type==="remove")&&I.push(y.type==="add"?"added":"removed"),L`
      <tr
        id=${W(o(this,r,qt)&&g?`row-${e}`:void 0)}
        style="height: ${this.rowHeight}px;"
        data-index=${e}
        role="row"
        aria-rowindex="${l(this,r,kp).call(this,e,n)}"
        aria-busy=${W(In(t)&&t.skeleton?"true":void 0)}
        aria-level=${l(this,r,ib).call(this,t)}
        aria-setsize=${W(E?.setSize?E.setSize:void 0)}
        aria-posinset=${W(E?.setSize?E.posInSet:void 0)}
        aria-expanded=${W(t.isGroup?t.expanded?"true":"false":$)}
        aria-selected=${W(u?f?"true":"false":void 0)}
        class="${Ni(z)}"
        part=${I.join(" ")}>
        ${t.isGroup?l(this,r,pA).call(this,t,e,i):t.isFooter?l(this,r,fA).call(this,t,e,i):h?l(this,r,vA).call(this,t,e,i,f,v,h):l(this,r,gA).call(this,t,e,i,f,v)}
      </tr>
    `};cA=function(e,t,n,i,s){const a=this.detailRenderer,c=this,{item:h}=t;return L`
      <tr
        data-index=${e}
        role="row"
        aria-rowindex="${l(this,r,kp).call(this,e,n)}"
        aria-labelledby=${W(e>0?`row-${e-1}`:void 0)}
        aria-level=${l(this,r,ib).call(this,t)}
        style="height: 1px;"
        class=${Ni({"detail-row":!0,last:e===o(this,ae).length-1,pinned:s})}
        part="row detail-row">
        <td
          class="detail-cell"
          part="detail-cell"
          role="gridcell"
          aria-colindex="1"
          data-col="detail"
          colspan=${Math.max(l(this,r,lh).call(this,i),1)}
          aria-colspan=${Math.max(o(this,dn).length,1)}
          tabindex=${l(this,r,rn).call(this,e,-1)?0:-1}><div class="detail-content">${o(this,Ne).length?l(this,r,hA).call(this,e,l(this,r,pe).call(this,e-1)):P}${a?ms({host:this,slotName:`u-grid-internal:detail:${t.masterKey}`,deps:[h,a,l(this,r,wo).call(this)],renderer:a,invoke:u=>a(h,{item:h,rowKey:h,grid:c,get signal(){return u()}})}):P}</div></td>
      </tr>
    `};hA=function(e,t){if(!t||!In(t)||t.skeleton||l(this,r,ri).call(this,t))return P;const n=o(this,Ne),i=o(this,r,B),s=!!t.fixed,a=s?null:l(this,r,Nv).call(this),c=o(this,r,dt)&&!s?l(this,r,Lt).call(this,t):void 0,h=o(this,Z).call(this,t.item),u=o(this,qe),f=o(this,ne).filterValue,g=o(this,r,Dn),v=n.length-1;return L`<dl class="adaptive-fields" part="adaptive-fields">${Pa(n,zt,y=>{const _=n.indexOf(y),E=zt(y),$=`adaptive-${e}-${E}`,z=`${$}-value`,D=this._bandChainOf(y).map(Ot=>fe(Ot)).filter(Boolean),I=u.findIndex(Ot=>Ot.column===y),j=u[I]?.order,X=j==="asc"?i.sortAscending:i.sortDescending,Q=j&&u.length>1&&I>0?oe(i.columnSortPriority,{order:X,priority:String(I+1)}):X,ge=Vl(f,y,o(this,Mn)),F=l(this,r,dA).call(this,y,E),ee=c?.type==="remove",We=c?.type==="add",ue=o(this,r,dt)&&!s&&l(this,r,nv).call(this,h,y,c,t),mt=!!c&&!We&&!ee&&c.modified.has(y),Pe=ee?void 0:c?.errors.get(y),Se=Pe?`${$}-message`:void 0,Ee=[Se,We?"edit-desc-added":ee?"edit-desc-removed":mt?"edit-desc-modified":void 0].filter(Boolean).join(" "),Ve=["adaptive-value",...mt?["modified"]:[],...Pe?["invalid"]:[]];let Ze;return ue?Ze=l(this,r,lb).call(this,t,c,y,F,Ee,$):c?.unparsed.has(y)?Ze=c.unparsed.get(y).text:c&&!We&&Object.keys(c.data).length?Ze=l(this,r,Aa).call(this,{...t,item:o(this,se).mergedOf(c)},F,a,!0):Ze=l(this,r,Aa).call(this,t,F,a,!0),L`<div class="adaptive-field" part="adaptive-field"><dt
          class="adaptive-label"
          part="adaptive-label"
          id=${$}>${D.length?L`<span class="adaptive-band">${D.join(" ")}</span> `:P}<span class="adaptive-label-text">${fe(y)}</span>${j?L`${Ox(`adaptive-sort ${j}`,ST)}<span class="visually-hidden"> ${Q}</span>`:P}${ge?L`${Ox("adaptive-filter",ET)}<span class="visually-hidden"> ${i.columnFiltered}</span>`:P}<span class="adaptive-separator">${i.adaptiveLabelSeparator}</span></dt><dd
          class=${Ni({"adaptive-value":!0,modified:mt,invalid:!!Pe,editing:ue,"focus-target":!ue})}
          part=${Ve.join(" ")}
          data-column=${E}
          tabindex=${W(ue?void 0:"-1")}
          aria-labelledby=${W(ue?void 0:`${$} ${z}`)}
          aria-invalid=${W(Pe&&!ue?"true":void 0)}
          aria-describedby=${W(!ue&&Ee?Ee:void 0)}>${ue?Ze:L`<span class="adaptive-text" id=${z}>${Ze}</span>`}${Pe?L`<div id=${W(Se)} class="validation-message" part="validation-message">${Pe}</div>`:P}${_<v?L`<span class="visually-hidden">${g}</span>`:P}</dd></div>`})}</dl>`};Lm=function(e){return!e.skeleton&&(!!this.detailRenderer||!l(this,r,ri).call(this,e))};uA=function(e){const t=o(this,Ne);if(!t.length||!o(this,r,dt)||e.fixed||e.skeleton)return;const n=l(this,r,Lt).call(this,e);if(!n||n.type==="remove")return;const i=n.type!=="add"&&t.some(c=>n.modified.has(c)),s=t.find(c=>n.errors.has(c)),a=s?`${fe(s)}: ${n.errors.get(s)}`:"";return i||a?{modified:i,error:a}:void 0};dA=function(e,t){const n=l(this,r,Ha).call(this,e);return{column:e,id:t,format:n,className:"",cellClassName:"",style:"",headerClasses:{},headerStyles:{},resizable:!1,bounds:this._boundsOf(e),width:void 0,col:-1,gapBefore:0}};pA=function(e,t,n){const i=this._groupColumns.length,s=o(this,r,Ue),a=l(this,r,lh).call(this,n),c=i-e.level-1+s,h=o(this,ft),u=this._visibleColumns;let f=u.length;const g=ee=>ee?u.indexOf(ee):-1;for(const{item:ee,spec:We}of h){const ue=g(We.column);ee.display==="column"&&ue>=0&&c+ue>=1&&(f=Math.min(f,ue))}const v=({spec:ee},We)=>{const ue=g(ee.column);return We==="column"&&ue>=f},y=[];this.showGroupCount&&y.push(nn(this.language,{maximumFractionDigits:0}).format(e.itemCount)),h.forEach((ee,We)=>{const ue=ee.item.display??"inline";ue!=="footer"&&!v(ee,ue)&&y.push(l(this,r,Ua).call(this,ee,e.summaries[We]).label)});const _=y.length?oe(o(this,r,B).groupInfoText,{info:l(this,r,Kv).call(this,y)}):"",E=l(this,r,Ap).call(this,h,e.summaries,ee=>v(ee,ee.item.display));let $=n.findIndex(ee=>ee.col-s>=f);$=$<0?n.length:$;const z=$+n.slice(0,$).reduce((ee,We)=>ee+(We.gapBefore?1:0),0),D=$<n.length?Mg(n,E,$,o(this,r,Dn),s,void 0,o(this,yn),o(this,r,$p)):P,I=[...E.values()].flat().map(ee=>ee.label),j=l(this,r,_p).call(this,e),X=`${R0(e,o(this,r,B).groupLabelSeparator,j)}${_?` ${_}`:""}`,Q=!!e.column.groupRenderer,ge=I.length&&!Q?[X,...I].join(o(this,r,Dn)):void 0,F=()=>h.map((ee,We)=>({summary:ee,index:We})).filter(({summary:ee})=>(ee.item.display??"inline")==="inline").map(({summary:ee,index:We})=>l(this,r,jr).call(this,ee,e.summaries[We]));return M$({row:e,content:Q?l(this,r,xA).call(this,e,j,F,X):void 0,alignedSummaries:Q&&I.length?{text:I.join(o(this,r,Dn)),id:`group-${t}`}:void 0,totalColumns:a,separator:o(this,r,B).groupLabelSeparator,valueText:j,info:_,ariaLabel:ge,labelSpan:$<n.length?c+z:void 0,trailing:D===P?P:L`${D}${o(this,r,Di)?L`<td class="command-cell" role="gridcell" aria-colindex=${s+this._visibleColumns.length+1}></td>`:P}`,tabIndex:l(this,r,rn).call(this,t,-1)?0:-1,ariaColSpan:o(this,r,Ge)?$<n.length?s+f:o(this,dn).length:void 0,onToggle:o(this,_c)})};fA=function(e,t,n){const i=l(this,r,Ap).call(this,o(this,ft),e.summaries,({item:a})=>a.display==="footer"),s=o(this,r,Ue);return L`
      ${M0(this._groupColumns.length,Ii)}
      ${l(this,r,ch).call(this,t)}
      ${l(this,r,zp).call(this,t)}
      ${Mg(n,i,0,o(this,r,Dn),s,a=>l(this,r,rn).call(this,t,a)?0:-1,o(this,yn),o(this,r,$p))}
      ${l(this,r,hh).call(this,t,s+this._visibleColumns.length)}
    `};zp=function(e){const t=o(this,r,Uc);return o(this,r,_n)?L`<td
        class="selection-cell sticky-cell"
        part="selection-cell"
        role="gridcell"
        aria-colindex=${t+1}
        data-col=${t}
        tabindex=${l(this,r,rn).call(this,e,t)?0:-1}
        style="inset-inline-start: calc(var(--_port-inset-start, 0px) + ${o(this,r,Ga)}px)"></td>`:P};ch=function(e){return o(this,r,qt)?L`<td
        class="detail-toggle-cell sticky-cell"
        part="detail-toggle-cell"
        role="gridcell"
        aria-colindex="1"
        data-col=${W(e===null?void 0:0)}
        tabindex=${W(e===null?void 0:l(this,r,rn).call(this,e,0)?0:-1)}
        style="inset-inline-start: calc(var(--_port-inset-start, 0px) + ${this._groupColumns.length*Ii}px)"></td>`:P};mA=function(e,t){const n=o(this,ae).length;return E$({role:o(this,r,Ge)?"presentation":"rowgroup",layout:e,texts:l(this,r,Ap).call(this,o(this,Yt),o(this,ns),()=>!0),groupColumns:this._groupColumns.length,groupColumnWidth:Ii,rowIndex:t,separator:o(this,r,Dn),leading:L`${l(this,r,ch).call(this,n)}${l(this,r,zp).call(this,n)}`,trailing:l(this,r,hh).call(this,n,o(this,r,Ue)+this._visibleColumns.length),colOffset:o(this,r,Ue),tabIndexOf:i=>l(this,r,rn).call(this,n,i)?0:-1,trailingGap:o(this,yn),keyOf:o(this,r,$p),level:o(this,r,Ce)?1:void 0})};gA=function(e,t,n,i,s){const a=!!e.fixed,c=a?null:l(this,r,Nv).call(this),h=o(this,r,dt)&&!e.skeleton&&!a?{pending:l(this,r,Lt).call(this,e),rowKey:o(this,Z).call(this,e.item),readonlyMarks:!!this.allowEditing||this.allowAdding}:void 0,u=f=>a?null:l(this,r,gp).call(this,t,f);return L`
      ${l(this,r,rb).call(this,e,t,i,s)}
      ${l(this,r,Xv).call(this,n,f=>L`${l(this,r,Tp).call(this,f.gapBefore)}${e.skeleton?L`
          <td
            part=${u(f.col)?"cell selected":"cell"}
            class=${f.cellClassName+l(this,r,Vu).call(this,u(f.col))}
            style=${f.style}
            role="gridcell"
            aria-colindex="${f.col+1}"
            data-col=${f.col}
            aria-selected=${W(u(f.col)?"true":void 0)}
            tabindex=${l(this,r,rn).call(this,t,f.col)?0:-1}><span class="skeleton" aria-hidden="true"></span><span class="visually-hidden">${o(this,r,B).loading}</span></td>`:h?l(this,r,bA).call(this,e,t,f,f.col,c,h):L`
          <td
            part=${l(this,r,CA).call(this,e,f.column,!!u(f.col))}
            class=${f.cellClassName+l(this,r,Vu).call(this,u(f.col))+(l(this,r,er).call(this,e,f.column)?" tree-cell":"")}
            style=${f.style}
            role="gridcell"
            aria-colindex="${f.col+1}"
            aria-readonly=${W(a&&o(this,r,dt)&&o(this,r,sb)?"true":void 0)}
            aria-expanded=${W(l(this,r,er).call(this,e,f.column)?l(this,r,Kd).call(this,e):void 0)}
            data-col=${f.col}
            aria-selected=${W(u(f.col)?"true":void 0)}
            tabindex=${l(this,r,rn).call(this,t,f.col)?0:-1}>${l(this,r,Fg).call(this,e,f.column,l(this,r,Aa).call(this,e,f,c))}</td>`}`)}
      ${l(this,r,Yv).call(this)}
      ${o(this,r,Di)?a?l(this,r,hh).call(this,t,o(this,r,Ue)+this._visibleColumns.length):l(this,r,wA).call(this,e,t,o(this,r,Ue)+this._visibleColumns.length,h?.pending):P}
    `};sb=function(){return!!this.allowEditing||this.allowAdding};rb=function(e,t,n,i){const s=o(this,r,Uc),a=i?void 0:l(this,r,uA).call(this,e),c=a?.error?`adaptive-error-${t}`:void 0,h=c??(a?.modified?"edit-desc-modified":void 0);return L`
      ${rt(this._groupColumns,(u,f)=>L`
        <td
          role="presentation"
          class="group-column sticky-cell"
          style="inset-inline-start: calc(var(--_port-inset-start, 0px) + ${f*Ii}px)"></td>`)}
      ${o(this,r,qt)&&!l(this,r,Lm).call(this,e)?l(this,r,ch).call(this,t):P}
      ${o(this,r,qt)&&l(this,r,Lm).call(this,e)?L`
          <td
            class=${Ni({"detail-toggle-cell":!0,"sticky-cell":!0,"adaptive-invalid":!!a?.error,"adaptive-modified":!!a?.modified})}
            part="detail-toggle-cell"
            role="gridcell"
            aria-colindex="1"
            data-col="0"
            aria-expanded=${i?"true":"false"}
            aria-label=${W(o(this,r,Ce)?o(this,r,B).rowDetails:void 0)}
            aria-invalid=${W(a?.error?"true":void 0)}
            aria-describedby=${W(h)}
            tabindex=${l(this,r,rn).call(this,t,0)?0:-1}
            style="inset-inline-start: calc(var(--_port-inset-start, 0px) + ${this._groupColumns.length*Ii}px)"><button
              class="detail-toggle"
              part="detail-toggle-button"
              type="button"
              tabindex="-1"
              aria-hidden=${W(o(this,r,Ce)?"true":void 0)}
              aria-expanded=${W(o(this,r,Ce)?void 0:i?"true":"false")}
              aria-label=${W(o(this,r,Ce)?void 0:o(this,r,B).rowDetails)}
              @mousedown=${u=>u.preventDefault()}
              @click=${u=>{u.currentTarget.closest("td")?.focus(),l(this,r,Jn).call(this,o(this,Z).call(this,e.item),!i,"user")}}><span class="toggle-icon"><svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                width="1em"
                viewBox="0 -960 960 960"
                fill="currentColor"
                aria-hidden="true"><path d=${ak}/></svg></span></button>${c?L`<span hidden id=${c}>${a.error}</span>`:P}</td>`:P}
      ${o(this,r,_n)&&e.fixed?l(this,r,zp).call(this,t):P}
      ${o(this,r,_n)&&!e.fixed?L`
          <td
            class="selection-cell sticky-cell"
            part="selection-cell"
            role="gridcell"
            aria-colindex=${s+1}
            data-col=${s}
            tabindex=${l(this,r,rn).call(this,t,s)?0:-1}
            style="inset-inline-start: calc(var(--_port-inset-start, 0px) + ${o(this,r,Ga)}px)">${e.skeleton?P:l(this,r,Jv).call(this,n?"true":o(this,r,Ia)&&e.tree&&l(this,r,Z0).call(this,e.tree.node)?"mixed":"false",o(this,r,B).selectRow)}</td>`:P}
    `};vA=function(e,t,n,i,s,a){const c=o(this,r,Ue),h=l(this,r,lh).call(this,n)-this._groupColumns.length-c,u=e.fixed?void 0:l(this,r,Lt).call(this,e),f=u&&u.type!=="remove"?l(this,r,ab).call(this,u):"",g=f?`full-width-error-${t}`:void 0,v=[u?.type==="remove"?"edit-desc-removed":void 0,g].filter(Boolean).join(" ");return L`
      ${l(this,r,rb).call(this,e,t,i,s)}
      <td
        class="full-width-cell"
        part="full-width-cell"
        role="gridcell"
        aria-colindex=${c+1}
        aria-colspan=${Math.max(o(this,dn).length-c,1)}
        aria-readonly=${W(o(this,r,dt)&&o(this,r,sb)?"true":void 0)}
        aria-describedby=${W(v||void 0)}
        data-col=${c}
        colspan=${Math.max(h,1)}
        style="--_full-width-start: ${l(this,r,Xo).call(this)}px"
        tabindex=${l(this,r,rn).call(this,t,-1)&&o(this,Fe)>=c?0:-1}><div class="full-width-content">${ms({host:this,slotName:`u-grid-internal:row:${e.key}`,deps:[a],renderer:a.renderer,invoke:()=>a.dead?P:a.result})}</div>${g?L`<span class="visually-hidden" id=${g}>${f}</span>`:P}</td>
    `};bA=function(e,t,n,i,s,a){const{column:c}=n,{pending:h,rowKey:u}=a,f=l(this,r,rn).call(this,t,i),g=l(this,r,nv).call(this,u,c,h,e),v=h?.type==="remove",y=h?.type==="add",_=!!h&&!y&&!v&&h.modified.has(c),E=v?void 0:h?.errors.get(c),$=!!h&&!v&&l(this,r,vC).call(this,h,c),z=a.readonlyMarks&&!l(this,r,Bn).call(this,e,c,h),D=E||$?`edit-message-${t}-${i}`:void 0,I=y?"edit-desc-added":v?"edit-desc-removed":_?"edit-desc-modified":void 0,j=v||!h?"":l(this,r,ab).call(this,h),X=j?`edit-row-error-${t}`:void 0,Q=[D,X,I].filter(Boolean).join(" "),ge=!!D&&(g||f),F=l(this,r,gp).call(this,t,i),ee=[n.cellClassName+l(this,r,Vu).call(this,F)],We=F?["cell","selected"]:["cell"],ue=l(this,r,er).call(this,e,c);ue&&(ee.push("tree-cell"),We.push("tree-cell")),e.tree&&l(this,r,Wa).call(this,e,c)&&We.push("summary-cell"),_&&(ee.push("modified"),We.push("modified")),E&&(ee.push("invalid"),We.push("invalid")),g&&ee.push("editing"),ge&&ee.push("show-message");let mt;g?mt=l(this,r,lb).call(this,e,h,c,n,Q):h?.unparsed.has(c)?mt=h.unparsed.get(c).text:h&&!y&&Object.keys(h.data).length?mt=l(this,r,Aa).call(this,{...e,item:o(this,se).mergedOf(h)},n,s):mt=l(this,r,Aa).call(this,e,n,s);const Pe=D?L`<div
          id=${D}
          class="validation-message"
          part="validation-message"
          lang=${W(E?void 0:o(this,r,tt))}
          aria-hidden=${W(g?void 0:"true")}
          ?hidden=${!ge}>${E?g&&o(this,r,wt)!=="batch"?`${E} ${o(this,r,B).validationEscapeHint}`:E:L`<span class="validating-spinner" aria-hidden="true"></span>${o(this,r,B).validating}`}</div>`:P,Se=i===o(this,r,Ue),ce=!!X&&Se&&t===o(this,Le),Ee=X&&Se?L`<div
          id=${X}
          class="validation-message"
          part="validation-message"
          aria-hidden=${W(g?void 0:"true")}
          ?hidden=${!ce||ge}>${j}</div>`:P;ce&&ee.push("show-message");const Ve=(ge||ce)&&!g?L`<span class="cell-text">${mt}</span>`:mt;return L`
      <td
        part=${We.join(" ")}
        class=${ee.join(" ")}
        style=${n.style}
        role="gridcell"
        aria-colindex="${i+1}"
        data-col=${i}
        aria-selected=${W(F?"true":void 0)}
        aria-readonly=${W(z?"true":void 0)}
        aria-invalid=${W((E||j)&&!g?"true":void 0)}
        aria-describedby=${W(!g&&Q?Q:void 0)}
        aria-expanded=${W(ue?l(this,r,Kd).call(this,e):void 0)}
        tabindex=${f?0:-1}>${l(this,r,Fg).call(this,e,c,Ve)}${Pe}${Ee}</td>`};ab=function(e){const t=e.rowError?[e.rowError]:[];for(const[n,i]of e.errors)this._visibleColumns.includes(n)||t.push(`${fe(n)}: ${i}`);return t.join(" ")};lb=function(e,t,n,i,s,a){const c=o(this,he),h=t?t.item:e.item,u=c.drafts.has(n)?c.drafts.get(n):t?l(this,r,sv).call(this,t,n):ti(e.item,n),f=fe(n),g=t?.errors.get(n)??"",v=n.editorRenderer;if(v){const D=this,I=c.rowKey;return ms({host:this,slotName:`u-grid-internal:${a?"adaptive-editor":"editor"}:${e.key}:${i.id}`,deps:[c.session,n,v,l(this,r,wo).call(this),g],renderer:v,invoke:j=>{const X={item:h,get value(){return c.drafts.has(n)?c.drafts.get(n):u},get data(){return t?.data??{}},column:n,rowKey:I,label:f,adaptive:!!a,invalid:!!g,errorMessage:g,describedBy:s,setValue:Q=>{var ge;o(D,he)===c&&(l(ge=D,r,Om).call(ge,c,n),c.drafts.set(n,Q))},commit:()=>{var Q;o(D,he)===c&&l(Q=D,r,as).call(Q,"user",()=>{},{keepOpen:!0})},cancel:()=>{var Q;o(D,he)===c&&l(Q=D,r,ba).call(Q,"user")},grid:D,get signal(){return j()}};return v.call(n,h,X)}})}const y=Ny(l(this,r,en).call(this,n)),_=this.language||void 0,E=ti(h,n),$=c.texts.get(n)??(u instanceof za?u.text:y==="number"?Z1(u,_):y==="date"||y==="datetime"?X1(u,y==="datetime"):u==null?"":String(u)),z=l(this,r,Je).call(this).indexOf(n)+1;return k$({kind:y,text:$,checked:u==null?null:!!u,label:f,labelledBy:a??(this.showColumnHeaders&&z>0?`header-text-${this._bandChainOf(n).length}-${z}`:void 0),invalid:!!g,describedBy:s,onInput:D=>{if(o(this,he)!==c)return;const I=D.target.value;l(this,r,Om).call(this,c,n),c.texts.set(n,I),c.drafts.set(n,y==="number"?If(I,_):y==="date"||y==="datetime"?Fy(I,E,y==="datetime"):I),l(this,r,cb).call(this,D)},onChange:D=>{o(this,he)!==c||y!=="boolean"||(c.drafts.set(n,D.target.checked),o(this,vc)&&!c.wholeRow&&(w(this,vc,!1),l(this,r,as).call(this,"user",()=>{w(this,je,!0),this.requestUpdate()})))}})};Om=function(e,t){e.seq++;const n=o(this,se).get(e.rowKey),i=n&&o(this,On).get(n)?.get(t);i&&(i.abort(),o(this,On).get(n).delete(t),o(this,se).touch(),this.requestUpdate())};cb=function(e){e.composedPath().find(n=>n instanceof HTMLTableRowElement)?.classList.contains("pinned")&&(w(this,ln,!0),w(this,_a,0),this.requestUpdate())};wA=function(e,t,n,i){const s=o(this,r,B);let a=P;if(!e.skeleton){const c=o(this,Z).call(this,e.item),h=i?.type==="remove",u=i?.type==="add"?!0:l(this,r,lp).call(this,e.item),f=(g,v,y)=>L`<button
        class="command-button ${y}"
        part="command-button"
        type="button"
        tabindex="-1"
        @click=${v}>${g}</button>`;o(this,r,wt)==="row"?a=o(this,he)?.rowKey===c?L`${f(s.saveRow,()=>{l(this,r,vo).call(this,"user")},"save")}${f(s.cancel,()=>l(this,r,ba).call(this,"user"),"cancel")}`:L`${l(this,r,eh).call(this,e,i)?f(s.editRow,()=>l(this,r,pn).call(this,l(this,r,Ye).call(this,c),null,"user"),"edit"):P}${u&&this.allowRemoving?f(s.removeRow,v=>{l(this,r,Bu).call(this,c,v.currentTarget)},"remove"):P}`:this.allowRemoving&&(u||h)&&(a=f(h?s.restoreRow:s.removeRow,g=>h?l(this,r,hp).call(this,c,"user"):void l(this,r,Bu).call(this,c,g.currentTarget),"remove"))}return L`<td
      class="command-cell"
      part="command-cell"
      role="gridcell"
      aria-colindex=${n+1}
      data-col=${n}
      tabindex=${l(this,r,rn).call(this,t,n)?0:-1}>${a}</td>`};hh=function(e,t){return o(this,r,Di)?L`<td
        class="command-cell"
        part="command-cell"
        role="gridcell"
        aria-colindex=${t+1}
        data-col=${W(e===null?void 0:t)}
        tabindex=${W(e===null?void 0:l(this,r,rn).call(this,e,t)?0:-1)}></td>`:P};hb=function(e,t){const n=e.headerRenderer,i=this;return ms({host:this,slotName:`u-grid-internal:header:${t}`,deps:[e,n,l(this,r,wo).call(this)],renderer:n,invoke:s=>n.call(e,{column:e,grid:i,get signal(){return s()}})})};xA=function(e,t,n,i){const{column:s}=e,a=s.groupRenderer,c=this;return ms({host:this,slotName:`u-grid-internal:group:${e.key}`,deps:[e.groupKey,s,a,l(this,r,wo).call(this),e.value,e.expanded,e.itemCount,e.summaries,i,e.firstItem],renderer:a,invoke:h=>a.call(s,{column:s,value:e.value,text:t,groupPath:e.path,groupIndex:e.level,itemCount:e.itemCount,expanded:e.expanded,firstItem:e.firstItem,get summaries(){return n()},defaultText:i,grid:c,get signal(){return h()}})})};yA=function(e){const t=o(this,bt).length>0,n=this;return ms({host:this,slotName:"u-grid-internal:no-data",deps:[e,t,l(this,r,wo).call(this)],renderer:e,demote:!1,invoke:i=>e({filtered:t,grid:n,get signal(){return i()}})})};_d=new WeakMap;wo=function(){const e=o(this,r,ir),t=o(this,r,B);let n=o(this,_d);return(!n||n.language!==e||n.translation!==t)&&(n=w(this,_d,{language:e,translation:t})),n};CA=function(e,t,n){const i=l(this,r,er).call(this,e,t)?" tree-cell":"",s=e.tree&&l(this,r,Wa).call(this,e,t)?" summary-cell":"";return n?`cell${i}${s} selected`:`cell${i}${s}`};Aa=function(e,t,n,i=!1){const s=e.tree?l(this,r,Wa).call(this,e,t.column):void 0;if(s)return L`<span class="node-summary">${l(this,r,Ng).call(this,s)}</span>`;const a=C$(this,e,t.column,t.id,t.format,l(this,r,wo).call(this),i);return n&&typeof a=="string"&&l(this,r,lr).call(this,t.column)?BM(a,n):a};_A=function(e){switch(e){case"groupPanel":return this.showGroupPanel&&!o(this,r,Ce);case"searchPanel":return this.showSearchPanel;case"columnChooserButton":return this.columnChooser;case"exportButton":return l(this,r,uh).call(this).length>0;case"addRowButton":return o(this,r,dt)&&this.allowAdding;case"saveButton":case"discardButton":return o(this,r,dt)&&o(this,r,wt)==="batch"}};uh=function(){const e=o(this,r,B),t=o(this,r,pt)!=="none",n=[];for(const i of o(this,Gr)){if(i!=="csv"&&typeof l(this,r,Lp).call(this,i)!="function")continue;const s={csv:[e.exportCsv,e.exportSelectedCsv],xlsx:[e.exportXlsx,e.exportSelectedXlsx],pdf:[e.exportPdf,e.exportSelectedPdf]}[i];n.push({key:`export:${i}:all`,label:s[0],format:i,selectedOnly:!1,disabled:!1}),t&&n.push({key:`export:${i}:selected`,label:s[1],format:i,selectedOnly:!0,disabled:o(this,ie).size===0})}return n};Lp=function(e){return e==="xlsx"?this.xlsxExporter:e==="pdf"?this.pdfExporter:null};Op=new WeakMap;so=new WeakMap;Dm=function(){return o(this,Gr).filter(e=>e!=="csv"&&!o(this,Op).has(e)&&typeof l(this,r,Lp).call(this,e)!="function")};AA=function(){o(this,so)!==void 0||!l(this,r,Dm).call(this).length||w(this,so,requestAnimationFrame(()=>{if(w(this,so,void 0),!!this.isConnected)for(const e of l(this,r,Dm).call(this)){o(this,Op).add(e);const[t,n,i]=e==="xlsx"?["xlsxExporter","createXlsxExporter","export-xlsx"]:["pdfExporter","createPdfExporter","export-pdf"];console.warn(`<u-grid>: export format "${e}" needs "${t}" (${n} from "@universal-material/data-grid/${i}"); its entries are not shown.`)}}))};Dp=async function(e,t){const n=o(this,r,B);if(o(this,gt)){l(this,r,te).call(this,n.exportingAnnouncement);return}const i={format:e,selectedOnly:t};if(!this.dispatchEvent(new CustomEvent("u-grid-exporting",{...l(this,r,Re).call(this,i),cancelable:!0})))return;const s=new AbortController;w(this,gt,s),w(this,Pp,performance.now()),w(this,Us,null),w(this,oo,setTimeout(()=>{w(this,oo,void 0),l(this,r,te).call(this,n.exportingAnnouncement)},1e3)),this.requestUpdate();try{if(e==="csv")await this.downloadCsv({...this.csvExportOptions,selectedOnly:t,signal:s.signal});else{const a=c=>{o(this,gt)===s&&c.totalCount>0&&(w(this,Us,Math.min(100,Math.floor(c.rowCount*100/c.totalCount))),this.requestUpdate())};await l(this,r,Lp).call(this,e)(this,{selectedOnly:t,signal:s.signal,onProgress:a})}s.signal.throwIfAborted(),this.dispatchEvent(new CustomEvent("u-grid-export",l(this,r,Re).call(this,{format:e,selectedOnly:t}))),l(this,r,te).call(this,oe(o(this,r,B).exportCompleteAnnouncement,{format:mT[e]}))}catch(a){s.signal.aborted||a instanceof Error&&a.name==="AbortError"||a instanceof DOMException&&a.name==="AbortError"?this.isConnected&&l(this,r,te).call(this,o(this,r,B).exportCanceledAnnouncement):(console.error("<u-grid>: the export failed.",a),this.dispatchEvent(new CustomEvent("u-grid-export-error",l(this,r,Re).call(this,{format:e,selectedOnly:t,error:a}))),l(this,r,te).call(this,o(this,r,B).exportErrorAnnouncement))}finally{clearTimeout(o(this,oo)),w(this,oo,void 0),o(this,gt)===s&&(w(this,gt,null),w(this,Us,null),this.requestUpdate())}};gt=new WeakMap;Ad=function(){return o(this,gt)&&o(this,Us)!==null?oe(o(this,r,B).exportProgress,{percent:nn(o(this,r,tt),{maximumFractionDigits:0}).format(o(this,Us))}):""};Pp=new WeakMap;Ip=new WeakMap;ub=function(){performance.now()-o(this,Pp)>=500&&this.cancelExport()};Us=new WeakMap;db=function(){o(this,gt)&&l(this,r,te).call(this,o(this,r,B).exportingAnnouncement)};oo=new WeakMap;kA=function(){o(this,so)!==void 0&&(cancelAnimationFrame(o(this,so)),w(this,so,void 0)),o(this,gt)?.abort(),w(this,gt,null),clearTimeout(o(this,oo)),w(this,oo,void 0)};ka=new WeakMap;Ec=new WeakMap;Mc=new WeakMap;Sa=new WeakMap;Jr=new WeakMap;dh=new WeakMap;Rc=new WeakMap;ph=new WeakMap;fs=new WeakMap;$c=new WeakMap;pb=function(e){const t=o(this,r,B);if(e.item.text)return e.item.text;switch(e.name){case"addRowButton":return t.addRow;case"saveButton":return t.saveChanges;case"discardButton":return t.discardChanges;case"exportButton":return t.exportButtonLabel;case"columnChooserButton":return t.columnChooser;default:return""}};fb=function(e){return e.kind!=="built-in"||!!e.item.text};fo=function(){return(typeof this.closest=="function"?this.closest("[lang]")?.getAttribute("lang"):void 0)??""};Fp=function(e){if(e.item.disabled)return!0;const t=!!o(this,hn);switch(e.name){case"addRowButton":return t;case"saveButton":case"discardButton":return t||!this.hasChanges();default:return!1}};Do=function(e,t){if(e.kind==="button"){if(e.item.disabled)return;try{e.item.action({toolbarItem:e.item,grid:this})}catch(n){console.error("<u-grid>: a toolbar item action threw.",n)}return}if(!(e.kind!=="built-in"||l(this,r,Fp).call(this,e)))switch(e.name){case"addRowButton":l(this,r,cp).call(this,{},"user",t);break;case"saveButton":l(this,r,vo).call(this,"user");break;case"discardButton":l(this,r,Ku).call(this,"user");break;case"columnChooserButton":o(this,Vn).toggle(t);break}};mb=function(e){const t=e.filter(n=>n.kind!=="content"&&n.inMenu==="always");return t.length?new Set([...o(this,Sa),...t.map(n=>n.key)]):o(this,Sa)};SA=function(){const e=HR(o(this,Ll),$=>l(this,r,_A).call(this,$));w(this,ph,e);const t=o(this,Jc)?o(this,r,B).saving:o(this,fi),n=[...e.start,...e.end];if(!n.length&&!e.leading.length&&!e.trailing.length&&!t)return P;const i=l(this,r,mb).call(this,n),s=$=>!pu($)||!i.has($.key),a=e.start.filter(s),c=e.end.filter(s),h=n.filter($=>pu($)&&i.has($.key)),u=a.find($=>$.kind==="built-in"&&$.name==="groupPanel")??c.find($=>$.kind==="built-in"&&$.name==="groupPanel"),f=[],g=$=>$.forEach(z=>{z===u?this._groupColumns.forEach((D,I)=>f.push(`chip:${I}`)):f.push(z.key)});g(a),g(c),h.length&&f.push("more");const v=o(this,ka),y=v&&f.includes(v)?v:v&&i.has(v)&&h.length?"more":f[Math.min(o(this,Ec),f.length-1)]??null;w(this,ka,y),w(this,Ec,y?f.indexOf(y):0),w(this,dh,`${n.map($=>$.key).join()}|${o(this,r,tt)}|${t}|${!!o(this,gt)}|${o(this,r,B)===Jl(o(this,r,tt))}`);const _=f.length>=2,E=o(this,Hn).name;return L`
      <div class="header" part="toolbar" ${it(o(this,mc))}>
        <span hidden id="u-grid-toolbar-host-name" lang=${o(this,r,fo)}>${E}</span><span
          hidden
          id="u-grid-toolbar-name"
          lang=${o(this,r,tt)}>${o(this,r,B).toolbarLabel}</span>${l(this,r,Ad).call(this)?L`<span hidden id="u-grid-export-progress" lang=${o(this,r,tt)}>${l(this,r,Ad).call(this)}</span>`:P}
        ${rt(e.leading,$=>l(this,r,Pm).call(this,$))}
        <div
          class="toolbar-roving"
          role=${W(_?"toolbar":void 0)}
          aria-labelledby=${W(_?E?"u-grid-toolbar-host-name u-grid-toolbar-name":"u-grid-toolbar-name":void 0)}
          ${it(o(this,fs))}
          @keydown=${o(this,gb)}
          @focusin=${o(this,vb)}>
          ${rt(a,$=>l(this,r,Im).call(this,$,y))}
          ${u?P:L`<div class="toolbar-spacer"></div>`}
          ${t?L`<span class="edit-status" lang=${o(this,r,tt)}>${t}</span>`:P}
          ${rt(c,$=>l(this,r,Im).call(this,$,y))}
          ${h.length?l(this,r,EA).call(this,y):P}
        </div>
        ${rt(e.trailing,$=>l(this,r,Pm).call(this,$))}
      </div>
    `};Pm=function(e){if(e.kind==="built-in")return l(this,r,Mo).call(this,WM(o(this,Fs),o(this,r,B)));if(e.kind!=="content")return P;const t=e.item,n=t.renderer,i=this;return L`<div class="toolbar-content" data-toolbar-key=${e.key}>${ms({host:this,slotName:`u-grid-internal:toolbar:${e.key}`,deps:[t,n,l(this,r,wo).call(this)],renderer:n,demote:!1,invoke:s=>n({toolbarItem:t,grid:i,get signal(){return s()}})})}</div>`};Im=function(e,t){if(e.kind==="built-in"&&e.name==="groupPanel")return l(this,r,zA).call(this,t);if(e.kind==="button"){const h=e.item,u=h.showText==="in-menu"&&h.icon!==void 0&&h.icon!==null;return L`<button
        class="toolbar-button ${u?"icon-only":""}"
        part="toolbar-button"
        type="button"
        data-roving=${e.key}
        data-toolbar-key=${e.key}
        tabindex=${e.key===t?0:-1}
        lang=${o(this,r,fo)}
        aria-label=${W(u?h.text:void 0)}
        title=${W(u?h.text:void 0)}
        aria-disabled=${h.disabled?"true":"false"}
        @click=${f=>l(this,r,Do).call(this,e,f.currentTarget)}>${h.icon!==void 0&&h.icon!==null?L`<span class="toolbar-icon" aria-hidden="true">${h.icon}</span>`:P}${u?P:L`<span>${h.text}</span>`}</button>`}if(e.kind!=="built-in")return P;const n=o(this,r,B),i=l(this,r,pb).call(this,e),s=l(this,r,Fp).call(this,e),a=l(this,r,fb).call(this,e)?o(this,r,fo):o(this,r,tt),c={key:e.key,tabindex:e.key===t?0:-1};switch(e.name){case"columnChooserButton":{const h=e.item.showText==="always";return L`<button
          class="column-chooser-button toolbar-button ${h?"":"icon-only"}"
          part="toolbar-button column-chooser-button"
          type="button"
          data-roving=${c.key}
          data-toolbar-key=${c.key}
          tabindex=${c.tabindex}
          lang=${a}
          aria-label=${W(h?void 0:i)}
          title=${W(h?void 0:i)}
          aria-haspopup="dialog"
          aria-expanded=${o(this,Vn).open?"true":"false"}
          aria-disabled=${s?"true":"false"}
          @click=${u=>l(this,r,Do).call(this,e,u.currentTarget)}>${z1}${h?L`<span>${i}</span>`:P}</button>`}case"exportButton":{const h=l(this,r,uh).call(this),u=h.length===1?h[0]:void 0,f=e.item.showText==="always",g=!!o(this,gt),v=o(this,ut).open&&o(this,ut).data?.kind==="export",y=g&&!!u,_=y?n.exportCancel:u?u.label:i,E=l(this,r,Ad).call(this);return L`<button
          class="export-button toolbar-button ${f?"":"icon-only"}"
          id="u-grid-export-button"
          part="toolbar-button export-button"
          type="button"
          data-roving=${c.key}
          data-toolbar-key=${c.key}
          tabindex=${c.tabindex}
          lang=${a}
          aria-label=${W(f&&!y?void 0:_)}
          title=${W(f&&!y?void 0:_)}
          aria-haspopup=${W(u?void 0:"menu")}
          aria-expanded=${W(u?void 0:v?"true":"false")}
          aria-disabled=${s?"true":"false"}
          aria-describedby=${W(E?"u-grid-export-progress":void 0)}
          @click=${$=>{const z=$.currentTarget;s||(y?l(this,r,ub).call(this):u?l(this,r,Dp).call(this,u.format,u.selectedOnly):v?o(this,ut).hide(!0):l(this,r,Tc).call(this,"export",z))}}
          @keydown=${$=>{!u&&!s&&($.key==="ArrowDown"||$.key==="ArrowUp")&&($.preventDefault(),l(this,r,Tc).call(this,"export",$.currentTarget,$.key==="ArrowUp"))}}>${ez}${f?L`<span>${y?n.exportCancel:i}</span>`:P}</button>`}case"addRowButton":{const h=e.item.showText==="in-menu";return L`<button
          class="edit-bar-button add-row-button toolbar-button ${h?"icon-only":""}"
          part="toolbar-button add-row-button"
          type="button"
          data-roving=${c.key}
          data-toolbar-key=${c.key}
          tabindex=${c.tabindex}
          lang=${a}
          aria-label=${W(h?i:void 0)}
          title=${W(h?i:void 0)}
          aria-disabled=${s?"true":"false"}
          @click=${u=>l(this,r,Do).call(this,e,u.currentTarget)}><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            width="18"
            height="18"
            fill="currentColor"
            aria-hidden="true"><path d=${kT}/></svg>${h?P:i}</button>`}case"saveButton":return L`<button
          class="edit-bar-button toolbar-button save-button"
          part="toolbar-button save-button"
          type="button"
          data-roving=${c.key}
          data-toolbar-key=${c.key}
          tabindex=${c.tabindex}
          lang=${a}
          aria-disabled=${s?"true":"false"}
          aria-busy=${o(this,hn)?"true":"false"}
          @click=${h=>l(this,r,Do).call(this,e,h.currentTarget)}>${i}</button>`;case"discardButton":return L`<button
          class="edit-bar-button toolbar-button discard-button"
          part="toolbar-button discard-button"
          type="button"
          data-roving=${c.key}
          data-toolbar-key=${c.key}
          tabindex=${c.tabindex}
          lang=${a}
          aria-disabled=${s?"true":"false"}
          @click=${h=>l(this,r,Do).call(this,e,h.currentTarget)}>${i}</button>`;default:return P}};EA=function(e){const t=o(this,r,B).toolbarMoreButtonLabel,n=o(this,ut).open&&o(this,ut).data?.kind==="more";return L`<button
      class="toolbar-more-button toolbar-button icon-only"
      id="u-grid-toolbar-more-button"
      part="toolbar-more-button"
      type="button"
      data-roving="more"
      tabindex=${e==="more"?0:-1}
      lang=${o(this,r,tt)}
      aria-label=${t}
      title=${t}
      aria-haspopup="menu"
      aria-expanded=${n?"true":"false"}
      @click=${i=>{n?o(this,ut).hide(!0):l(this,r,Tc).call(this,"more",i.currentTarget)}}
      @keydown=${i=>{(i.key==="ArrowDown"||i.key==="ArrowUp")&&(i.preventDefault(),l(this,r,Tc).call(this,"more",i.currentTarget,i.key==="ArrowUp"))}}></button>`};Tc=function(e,t,n=!1){o(this,Ke).hide(),w(this,Ip,!!o(this,gt)),o(this,ut).show({returnFocus:t,opener:t,focusLast:n,data:{kind:e}})};MA=function(e){const t=()=>{const c=o(this,ut).open?o(this,Ip):!!o(this,gt),h=l(this,r,uh).call(this).map((u,f)=>({entry:{key:u.key,label:u.label,disabled:u.disabled||!!o(this,gt),separatorBefore:e==="more"&&f===0&&!c,lang:o(this,r,tt)},run:()=>{l(this,r,Dp).call(this,u.format,u.selectedOnly)}}));return c&&h.length&&h.unshift({entry:{key:"export:cancel",label:o(this,r,B).exportCancel,disabled:!o(this,gt),separatorBefore:e==="more",lang:o(this,r,tt)},run:()=>l(this,r,ub).call(this)}),h};if(e==="export")return t();const n=o(this,ph),i=n?[...n.start,...n.end]:[],s=l(this,r,mb).call(this,i),a=[];for(const c of i)if(!(!pu(c)||!s.has(c.key))){if(c.kind==="button")a.push({entry:{key:c.key,label:c.item.text,disabled:!!c.item.disabled,lang:o(this,r,fo)},run:h=>l(this,r,Do).call(this,c,h)});else if(c.kind==="built-in"&&c.name==="exportButton")a.push(...t());else if(c.kind==="built-in"){const h=a.length>0&&a[a.length-1].entry.key.startsWith("export:");a.push({entry:{key:c.key,label:l(this,r,pb).call(this,c),disabled:l(this,r,Fp).call(this,c),separatorBefore:h,lang:l(this,r,fb).call(this,c)?o(this,r,fo):o(this,r,tt),hasPopup:c.name==="columnChooserButton"?"dialog":void 0},run:u=>l(this,r,Do).call(this,c,u)})}}return a};RA=function(){const e=o(this,ut).data,t=l(this,r,MA).call(this,e.kind),n=e.kind==="more"?"u-grid-toolbar-more-button":"u-grid-export-button";return x0({className:"toolbar-menu",part:"menu toolbar-menu",labelledBy:n,entries:t.map(({entry:i})=>i),onKeyDown:o(this,ut).onKeyDown,onDisabledAction:()=>l(this,r,db).call(this),onAction:i=>{const s=t.find(({entry:h})=>h.key===i),a=o(this,ut).opener;if(!s)return;i==="b:columnChooserButton"||i==="b:addRowButton"?o(this,ut).hide():o(this,ut).hideAndFocus(),s.run(a)}})};gb=new WeakMap;vb=new WeakMap;Np=function(e){const t=o(this,fs).value,n=t?[...t.querySelectorAll("[data-roving]")].map(i=>i.getAttribute("data-roving")):[];w(this,ka,e),w(this,Ec,Math.max(n.indexOf(e),0))};$A=function(e){const t=e?.getAttribute("data-roving");!e||!t||(l(this,r,Np).call(this,t),e.focus(),this.requestUpdate())};Wp=function(e){l(this,r,Np).call(this,e),w(this,Mc,!0),this.requestUpdate()};TA=function(){const e=o(this,fs).value;if(o(this,Mc)||o(this,$c)&&!this.shadowRoot?.activeElement){const t=e?.querySelector('[data-roving][tabindex="0"]');t&&(t.focus(),w(this,Lo,!1))}w(this,Mc,!1),w(this,$c,!1),e&&o(this,dh)!==o(this,Rc)&&l(this,r,bb).call(this)};bb=function(){const e=o(this,fs).value,t=o(this,ph);if(!e?.isConnected||!t)return;const n=o(this,dh);n.split("|").slice(0,3).join("|")!==o(this,Rc).split("|").slice(0,3).join("|")&&o(this,Jr).clear(),w(this,Rc,n);const i=getComputedStyle(e),s=parseFloat(i.columnGap)||0,a=new Set([...t.start,...t.end].filter(pu).map(v=>v.key));let c=0,h=40+s;for(const v of e.children){if(!(v instanceof HTMLElement))continue;const y=v.getAttribute("data-toolbar-key");if(y&&a.has(y))o(this,Jr).set(y,v.offsetWidth+s);else if(v.classList.contains("toolbar-more-button"))h=v.offsetWidth+s;else if(v.classList.contains("group-container")){const _=parseFloat(getComputedStyle(v).minWidth);c+=(Number.isNaN(_)?120:_)+s}else!v.classList.contains("toolbar-spacer")&&!v.classList.contains("lang-scope")?c+=v.offsetWidth+s:v.classList.contains("lang-scope")&&(c+=[...v.children].reduce((_,E)=>_+E.offsetWidth+s,0))}const u=e.clientWidth-(parseFloat(i.paddingInlineStart)||0)-(parseFloat(i.paddingInlineEnd)||0)+s,f=UR([...t.start,...t.end],u,c,h,v=>o(this,Jr).get(v)),g=o(this,Sa);(f.size!==g.size||[...f].some(v=>!g.has(v)))&&(w(this,Sa,f),o(this,ut).open&&o(this,ut).data?.kind==="more"&&(o(this,ut).hide(f.size>0),f.size||l(this,r,Wp).call(this,"more")),this.requestUpdate())};zA=function(e){return L`
      <div
        class="group-container"
        role="group"
        aria-label=${o(this,r,B).groupPanelLabel}
        lang=${o(this,r,tt)}
        ${it(this._groupContainerRef)}
        @pointerdown=${o(this,Lc)}
        @click=${o(this,Oc)}
        @contextmenu=${o(this,xb)}>
        ${this._groupColumns.length?L`
            ${rt(this._groupColumns,(t,n)=>l(this,r,LA).call(this,t,n,e))}
            <div class="group-end-dropzone"></div>`:L`<div class="drag-here">${o(this,r,B).dragToGroup}</div>`}
      </div>
    `};LA=function(e,t,n){const i=o(this,Mi).call(this,e),s=this.groupPanelMenu,a=s&&!i,c=l(this,r,hs).call(this,e)??"asc",h=o(this,r,B),u=`chip:${t}`;return L`
      <div
        class="group ${Ni({sortable:i})}"
        part="group-chip"
        style="--_order: ${t}"
        role="button"
        data-roving=${u}
        tabindex=${u===n?0:-1}
        lang=${o(this,r,fo)}
        aria-haspopup=${W(a?"menu":void 0)}
        aria-expanded=${W(a?l(this,r,zc).call(this,"group-panel",e)?"true":"false":void 0)}
        aria-keyshortcuts=${`${s&&i?"Shift+F10 ":""}Alt+Shift+ArrowLeft Alt+Shift+ArrowRight Delete Control+G Meta+G`}
        aria-label=${i?`${fe(e)}, ${c==="asc"?h.sortAscending:h.sortDescending}`:fe(e)}
        @pointerdown=${i?o(this,yp):P}
        @click=${i?f=>o(this,Cp).call(this,e,f):a?f=>l(this,r,OA).call(this,e,f):P}
        @keydown=${f=>l(this,r,q_).call(this,e,t,f)}>
        <span class="group-label">${fe(e)}</span>${d0(c)}
      </div>`};OA=function(e,t){l(this,r,Cc).call(this,t)||(l(this,r,zc).call(this,"group-panel",e)?o(this,Ke).hide(!0):l(this,r,Ea).call(this,t.currentTarget,null,null))};DA=function(e){const t=this._groupColumns.length;l(this,r,Wp).call(this,t?`chip:${Math.min(e,t-1)}`:`chip:${e}`)};wb=function(e){l(this,r,Wp).call(this,`chip:${e}`)};zc=function(e,t){const n=o(this,Ke).data;return!!n&&o(this,Ke).open&&n.request.target===e&&n.request.column===t};xb=new WeakMap;Ea=function(e,t,n){const i=e?this._nativeColumnMap.get(e)??null:null,s=e??o(this,fs).value?.querySelector('[data-roving][tabindex="0"]')??null;return l(this,r,Za).call(this,{target:"group-panel",cellType:null,column:i,item:null,rowKey:null,groupPath:null},{returnFocus:s,...t??{},positionTarget:e,opener:e},n)};Va=function(e,t,n,i){const s=l(this,r,Pn).call(this,t);return s&&l(this,r,Oe).call(this,s,"user"),l(this,r,Za).call(this,{target:"header",cellType:"header",column:e,item:null,rowKey:null,groupPath:null},{returnFocus:n.returnFocus??(()=>l(this,r,si).call(this)??(t.isConnected?t:null)),x:n.x,y:n.y,opener:n.opener,positionTarget:n.opener??t,focusLast:n.focusLast},i)};yb=function(e,t,n,i,s){const a=l(this,r,Bp).call(this,e);if(!a)return!1;const c=o(this,wc);w(this,wc,void 0),a.rangeFrom=c&&performance.now()-c.at<1e3?c.position:{row:o(this,Le),col:o(this,Fe)},l(this,r,Oe).call(this,e,"user");const h=s??(t?.classList.contains("full-width-cell")?t.querySelector(".full-width-content")??t:t);return l(this,r,Za).call(this,a,{returnFocus:()=>l(this,r,si).call(this),...n??{},positionTarget:h},i)};Bp=function(e,t){const n=l(this,r,pe).call(this,e.row);if(!n)return null;if(n.isGroup)return{target:"group-row",cellType:"group",column:n.column,item:null,rowKey:null,groupPath:Object.freeze([...n.path]),groupRow:n};if(!$e(n))return null;const i=t??l(this,r,Je).call(this)[e.col],a=!t&&e.col>=o(this,r,Ue)&&l(this,r,lo).call(this,e.row)?"full-width":i===vs?"selection":i===mo?"detail-toggle":i===bs?"command":"data";return{target:"row",cellType:a,column:a==="data"?Ra(i)??null:null,item:n.item,rowKey:o(this,Z).call(this,n.item),groupPath:null,rowIndex:e.row,col:e.col}};Za=function(e,t,n){const i=l(this,r,PA).call(this,e),s=({name:y,disabled:_,separatorBefore:E,children:$,checked:z})=>({name:y,disabled:z===void 0&&!!_,separatorBefore:!!E,...$?{items:$.map(s)}:{}}),a=i.map(s),{groupRow:c,rowIndex:h,...u}=e,f={...u,grid:this,menuItems:a};if(!this.dispatchEvent(new CustomEvent("u-grid-context-menu-opening",{...l(this,r,Re).call(this,f),cancelable:!0})))return!1;const g=l(this,r,Fm).call(this,f.menuItems,e.target);if(!g.length)return!1;n?.preventDefault(),o(this,ut).hide();const v=new Map;return i.forEach(y=>{v.set(y.name,y),y.children?.forEach(_=>v.set(_.name,_))}),o(this,Ke).show({...t,data:{request:e,items:g,available:v}}),!0};Fm=function(e,t,n=!1){if(!Array.isArray(e))return[];const i=[],s=a=>console.warn(`<u-grid>: ${a}`);for(const a of e){if(!a||typeof a!="object")continue;const{items:c,...h}=a,u=typeof h.action!="function"&&h.name==="fixColumn";c!==void 0&&!u&&s(`\`items\` of context menu item "${h.name??h.id??h.text??""}" ignored (only "fixColumn" has a submenu).`),typeof h.action=="function"?typeof h.text=="string"&&h.text.trim()?i.push({...h}):s("context menu item without `text` ignored."):n&&!(typeof h.name=="string"&&Oy.has(h.name))?s(`context menu item "${h.name??""}" ignored inside the "fixColumn" submenu (only the pin items and host items go there).`):typeof h.name=="string"&&W1[t].has(h.name)?i.push(u?{...h,items:l(this,r,Fm).call(this,c??[],t,!0)}:{...h}):typeof h.name=="string"?s(`context menu item "${h.name}" does not apply to "${t}" and was ignored.`):s("context menu item without `name` or `action` ignored.")}return i};PA=function(e){switch(e.target){case"header":return e.column&&this.columnHeaderMenu&&(e.column.headerMenu!==!1||l(this,r,Cb).call(this,e.column))?l(this,r,IA).call(this,e.column):[];case"group-panel":return this.groupPanelMenu&&this._groupColumns.length?l(this,r,NA).call(this,e.column):[];case"row":{const t=l(this,r,WA).call(this,e),n=this.rowMenu?l(this,r,KA).call(this,e):[];return t.length&&n.length&&(n[0].separatorBefore=!0),[...t,...n]}case"group-row":return this.rowMenu&&e.groupRow?l(this,r,qA).call(this,e.groupRow):[]}};IA=function(e){const t=o(this,r,B),n=[],i=this._isBand(e),s=this._groupColumns.includes(e),a=e.headerMenu!==!1,c=y=>{y.length&&(y[0].separatorBefore=n.length>0,n.push(...y))};if(a&&!i&&!s&&o(this,Mi).call(this,e)){const y=l(this,r,hs).call(this,e);c([{name:"sortColumnAscending",text:t.sortColumnAscending,disabled:y==="asc"},{name:"sortColumnDescending",text:t.sortColumnDescending,disabled:y==="desc"},...y?[{name:"clearColumnSorting",text:t.clearColumnSorting}]:[]])}if(a&&l(this,r,FA).call(this,e)){const y=this._fixedOf(e);c([{name:"fixColumn",text:t.fixColumn,children:[{name:"fixColumnStart",text:t.fixStart,checked:y==="start",disabled:y==="start"},{name:"fixColumnEnd",text:t.fixEnd,checked:y==="end",disabled:y==="end"},{name:"unfixColumn",text:t.unfix,checked:!y,disabled:!y}]}])}const h=!i&&l(this,r,ar).call(this,e)&&(this.resizeMode!=="next-column"||!!this._resizeNeighbor(e));c([...h?[{name:"autoSizeColumn",text:t.autoSizeColumn}]:[],...a&&this._visibleColumns.some(y=>l(this,r,ar).call(this,y))?[{name:"autoSizeAllColumns",text:t.autoSizeAllColumns}]:[],...h?[{name:"increaseColumnWidth",text:t.increaseColumnWidth},{name:"decreaseColumnWidth",text:t.decreaseColumnWidth}]:[]]);const u=l(this,r,_v).call(this,e),f=u.indexOf(e),g=y=>!!u[f+y],v=this._isRtl()?-1:1;return f>=0&&(g(1)||g(-1))&&c([{name:"moveLeft",text:t.moveLeft,disabled:!g(-v)},{name:"moveRight",text:t.moveRight,disabled:!g(v)}]),!i&&!s&&Bc(e)&&(a||o(this,r,_b))&&c([{name:"groupColumn",text:t.groupColumn}]),a&&c([...this.columnChooser?[{name:"openColumnChooser",text:t.openColumnChooser,hasPopup:"dialog"}]:[],{name:"resetColumns",text:t.resetColumns}]),n};FA=function(e){return this.columnFixing&&!this._groupColumns.includes(e)&&this._isRegularColumn(e)&&!this._parentBandOf(e)};Gp=function(e){return this.columnHeaderMenu&&!this._groupColumns.includes(e)&&(e.headerMenu!==!1||l(this,r,Cb).call(this,e))};Cb=function(e){const t=this._isBand(e),n=!t&&l(this,r,ar).call(this,e)&&(this.resizeMode!=="next-column"||!!this._resizeNeighbor(e)),i=!t&&!this._groupColumns.includes(e)&&Bc(e)&&o(this,r,_b);return n||i||l(this,r,wp).call(this,e)};_b=function(){return this.showGroupPanel&&!o(this,r,Ce)};NA=function(e){const t=o(this,r,B),n=e?this._groupColumns.indexOf(e):-1,i=this._groupColumns.length,s=this._isRtl()?n+1<i:n>0,a=this._isRtl()?n>0:n+1<i;return[...n>=0?[{name:"ungroupColumn",text:t.ungroupColumn,hiddenSuffix:fe(e)},{name:"moveLeft",text:t.moveLeft,disabled:!s},{name:"moveRight",text:t.moveRight,disabled:!a}]:[],{name:"ungroupAll",text:t.ungroupAll,separatorBefore:n>=0},{name:"expandAllGroups",text:t.expandAllGroups},{name:"collapseAllGroups",text:t.collapseAllGroups}]};WA=function(e){const t=o(this,r,B),n=[],i=o(this,r,Ft),{rowIndex:s,col:a}=e;if(e.cellType!=="data"||s===void 0||a===void 0||!l(this,r,Hs).call(this,s,a)||(i!=="none"&&o(this,ke).length&&this.clipboardMode!=="none"&&n.push({name:"copySelectedCells",text:t.copySelectedCells}),(i!=="none"||this.rowMenu)&&l(this,r,vp).call(this)&&l(this,r,BA).call(this,{row:s,col:a})&&n.push({name:"paste",text:t.paste}),i==="none"))return n;const c=n.length,h=o(this,ke)[o(this,ke).length-1],u=h&&!o(this,Tt)?{row:h.anchorRow,col:h.anchorCol}:e.rangeFrom,f=h&&!o(this,Tt)?{row:h.endRow,col:h.endCol}:u;u&&f&&l(this,r,Hs).call(this,u.row,u.col)&&(f.row!==s||f.col!==a)&&n.push({name:"extendSelectionToCell",text:t.extendSelectionToCell});const g=o(this,ke).length>0||!!e.rangeFrom&&l(this,r,Hs).call(this,e.rangeFrom.row,e.rangeFrom.col)&&(e.rangeFrom.row!==s||e.rangeFrom.col!==a);return i==="multiple"&&g&&!l(this,r,gp).call(this,s,a)&&n.push({name:"addCellToSelection",text:t.addCellToSelection}),n.length>c&&c>0&&(n[c].separatorBefore=!0),n};BA=function(e){const t=l(this,r,Ab).call(this,e),n=l(this,r,Je).call(this);let i=1e3;for(let s=t.top;s<=t.bottom&&i>0;s++){const a=l(this,r,pe).call(this,s);if(!$e(a)||l(this,r,ri).call(this,a))continue;const c=l(this,r,Lt).call(this,a);for(let h=t.left;h<=t.right&&i-- >0;h++)if(l(this,r,Bn).call(this,a,n[h],c))return!0}return!1};Ab=function(e){const t=o(this,Qt)[o(this,Qt).length-1];return!!t&&e.row>=t.top&&e.row<=t.bottom&&e.col>=t.left&&e.col<=t.right?t:{top:e.row,bottom:e.row,left:e.col,right:e.col}};GA=async function(e){const t=typeof navigator>"u"?void 0:navigator.clipboard;let n;try{if(!t||typeof t.readText!="function")throw new Error("no Clipboard API");n=await t.readText()}catch{l(this,r,te).call(this,o(this,r,B).pasteFailedAnnouncement);return}const i=new DataTransfer;if(i.setData("text/plain",n),!n||!l(this,r,vp).call(this)){l(this,r,te).call(this,o(this,r,B).pasteFailedAnnouncement);return}l(this,r,bv).call(this,n,e,i)};KA=function(e){const t=o(this,r,B),n=[],i=e.rowIndex===void 0?void 0:l(this,r,pe).call(this,e.rowIndex);if(!$e(i))return n;const s=this.clipboardMode!=="none",a=e.column,c=e.cellType==="full-width";if(s&&(c?this._shownColumns.some(ia):a&&ia(a))&&n.push({name:"copyCell",text:t.copyCell}),s&&o(this,ie).size&&n.push({name:"copySelectedRows",text:t.copySelectedRows}),o(this,ie).size){const g=n.length;for(const v of l(this,r,uh).call(this))v.selectedOnly&&n.push({name:gT[v.format],text:v.label,disabled:!!o(this,gt)});n.length>g&&(n[g].separatorBefore=g>0)}const h=l(this,r,Lt).call(this,i),u=n.length,f=!!l(this,r,ri).call(this,i);if(o(this,r,dt)&&!o(this,hn)){o(this,r,wt)==="row"?!f&&l(this,r,eh).call(this,i,h)&&o(this,he)?.rowKey!==e.rowKey&&n.push({name:"editRow",text:t.editRow}):a&&l(this,r,Bn).call(this,i,a,h)&&n.push({name:"editCell",text:t.editRow});const g=h?.type==="remove",v=h?.type==="add"?!0:l(this,r,lp).call(this,i.item);g&&this.allowRemoving?n.push({name:"restoreRow",text:t.restoreRow}):v&&this.allowRemoving&&n.push({name:"removeRow",text:t.removeRow})}if(o(this,r,qt)){const g=l(this,r,Qn).call(this,e.rowKey);n.push(g?{name:"collapseRow",text:t.collapseRow}:{name:"expandRow",text:t.expandRow})}return o(this,r,Ce)&&i.tree&&i.tree.node>=0&&(l(this,r,Bi).call(this,i.tree.node)&&n.push(l(this,r,Nn).call(this,i.tree.node)?{name:"collapseNode",text:t.collapseNode}:{name:"expandNode",text:t.expandNode}),o(this,r,dt)&&this.allowAdding&&!o(this,hn)&&n.push({name:"addChildRow",text:t.addChildRow})),n.length>u&&u>0&&(n[u].separatorBefore=!0),n};qA=function(e){const t=o(this,r,B);return[e.expanded?{name:"collapseGroup",text:t.collapseGroup}:{name:"expandGroup",text:t.expandGroup},{name:"expandAllGroups",text:t.expandAllGroups},{name:"collapseAllGroups",text:t.collapseAllGroups},{name:"ungroupColumn",text:t.ungroupColumn,hiddenSuffix:fe(e.column),separatorBefore:!0}]};jA=function(){const e=o(this,Ke).data,{request:t,items:n,available:i}=e,s=o(this,r,B),a=o(this,r,tt),c=o(this,r,fo),h=(v,y,_)=>{const E=typeof v.action!="function"&&v.name?i.get(v.name):void 0,$=typeof v.text=="string"&&!!v.text,z=!_&&E?.name==="fixColumn"?(v.items??[]).map((I,j)=>h(I,`${y}.${j}`,!0)).filter(I=>!!I):void 0;if(z&&!z.length||typeof v.action!="function"&&!E&&!$)return null;const D=_&&!!E&&Oy.has(E.name);return{key:y,label:$?v.text:E?.text??"",disabled:!!v.disabled||typeof v.action!="function"&&(!E||!D&&!!E.disabled),separatorBefore:v.separatorBefore??(E?E.separatorBefore:!1),hiddenSuffix:$?void 0:E?.hiddenSuffix,suffixLang:c,lang:$?c:a,hasPopup:E?.hasPopup,checked:D?!!E.checked:void 0,children:z}},u=n.map((v,y)=>h(v,String(y),!1)).filter(v=>!!v);let f,g;switch(t.target){case"header":f=oe(s.columnHeaderMenuLabel,{column:t.column?fe(t.column):""}),g="column-header-menu";break;case"group-panel":f=s.groupPanelMenuLabel,g="group-panel-menu";break;case"group-row":{const v=t.groupRow;f=oe(s.groupRowMenuLabel,{value:l(this,r,_p).call(this,{column:v.column,value:v.value,firstItem:v.firstItem})}),g="row-menu";break}default:f=s.rowMenuLabel,g="row-menu";break}return x0({className:`context-menu-panel ${g}`,part:`menu ${g}`,label:f,labelLang:a,entries:u,controller:o(this,Ke),onKeyDown:o(this,Ke).onKeyDown,onAction:v=>l(this,r,HA).call(this,v),onDisabledAction:()=>l(this,r,db).call(this)})};HA=function(e){const t=o(this,Ke).data,[n,i]=e.split(".").map(Number),s=t?.items[n],a=i===void 0?s:s?.items?.[i];if(!t||!a)return;if(typeof a.action=="function"){o(this,Ke).hideAndFocus();const{groupRow:h,rowIndex:u,...f}=t.request;try{a.action({...f,grid:this,menuItem:a})}catch(g){console.error("<u-grid>: a context menu item action threw.",g)}return}const c=a.name?t.available.get(a.name):void 0;c&&!c.disabled&&!a.disabled?l(this,r,UA).call(this,c.name,t.request):c?.checked&&o(this,Ke).hide(!0)};UA=function(e,t){const n=t.column,i=o(this,Ke);switch(t.target){case"header":n&&l(this,r,ZA).call(this,e,n);return;case"group-panel":l(this,r,YA).call(this,e,n);return;case"group-row":l(this,r,JA).call(this,e,t.groupRow);return}const s=t.rowKey,a=l(this,r,Ye).call(this,s),c={row:a,col:t.col??(n?l(this,r,Je).call(this).indexOf(n):-1)};switch(e){case"copyCell":case"copySelectedRows":i.hideAndFocus(),l(this,r,VA).call(this,e,n,a);break;case"copySelectedCells":{i.hideAndFocus();const h=l(this,r,Xu).call(this,c);h&&"refused"in h?l(this,r,te).call(this,h.refused):h&&l(this,r,qp).call(this,h,"user");break}case"paste":i.hideAndFocus(),l(this,r,GA).call(this,c);break;case"extendSelectionToCell":i.hide(),l(this,r,pv).call(this,c,"user",t.rangeFrom);break;case"addCellToSelection":i.hide(),l(this,r,fv).call(this,c,"user",t.rangeFrom);break;case"exportSelectedCsv":case"exportSelectedXlsx":case"exportSelectedPdf":i.hideAndFocus(),l(this,r,Dp).call(this,e==="exportSelectedCsv"?"csv":e==="exportSelectedXlsx"?"xlsx":"pdf",!0);break;case"editRow":i.hide(),l(this,r,pn).call(this,a,null,"user");break;case"editCell":i.hide(),n&&l(this,r,pn).call(this,a,n,"user");break;case"removeRow":i.hide(!0),l(this,r,Bu).call(this,s,l(this,r,si).call(this));break;case"restoreRow":i.hide(!0),l(this,r,hp).call(this,s,"user");break;case"expandRow":case"collapseRow":i.hide(!0),l(this,r,Jn).call(this,s,e==="expandRow","user");break;case"expandNode":case"collapseNode":i.hide(!0),l(this,r,ki).call(this,s,e==="expandNode","user");break;case"addChildRow":i.hide(),l(this,r,cp).call(this,{},"user",l(this,r,si).call(this),s);break}};VA=function(e,t,n){const i=e==="copySelectedRows"?l(this,r,Hu).call(this):n>=0&&(t||l(this,r,lo).call(this,n))?l(this,r,Dl).call(this,{position:{row:n,col:t?l(this,r,Je).call(this).indexOf(t):o(this,r,Ue)}}):void 0;i&&l(this,r,qp).call(this,i,"user")};ZA=function(e,t){const n=o(this,Ke),i=e==="moveRight"?1:-1,s=e==="clearColumnSorting"?null:e==="sortColumnAscending"?"asc":"desc";switch(e){case"moveLeft":case"moveRight":n.hide(),l(this,r,Mp).call(this,t,i*(this._isRtl()?-1:1));break;case"groupColumn":n.hide(),this._userGroupColumn(t,this._groupColumns.length),this._groupColumns.includes(t)&&l(this,r,te).call(this,oe(o(this,r,B).groupedAnnouncement,{column:fe(t)})),w(this,je,!0);break;case"sortColumnAscending":case"sortColumnDescending":case"clearColumnSorting":n.hide(!0),l(this,r,zr).call(this,Hl(o(this,qe),t,s,o(this,r,Su)==="multiple",o(this,wi)),"user")&&l(this,r,cd).call(this,t);break;case"fixColumnStart":case"fixColumnEnd":case"unfixColumn":n.hide(!0),l(this,r,XA).call(this,t,e==="fixColumnStart"?"start":e==="fixColumnEnd"?"end":null);break;case"autoSizeColumn":n.hide(!0),l(this,r,yc).call(this,t),this.updateComplete.then(()=>l(this,r,Cd).call(this,t,0));break;case"autoSizeAllColumns":n.hide(!0),this._visibleColumns.filter(a=>l(this,r,ar).call(this,a)).forEach(a=>l(this,r,yc).call(this,a)),this.updateComplete.then(()=>l(this,r,te).call(this,o(this,r,B).allColumnsAutoSizedAnnouncement));break;case"openColumnChooser":{const a=l(this,r,si).call(this);n.hide(),o(this,Vn).show(a);break}case"resetColumns":n.hide(!0),o(this,Vi).add("user"),l(this,r,Yg).call(this),l(this,r,te).call(this,o(this,r,B).columnsResetAnnouncement),w(this,je,!0);break;case"increaseColumnWidth":case"decreaseColumnWidth":o(this,os).step(t,e==="increaseColumnWidth"?1:-1),this.updateComplete.then(()=>l(this,r,Cd).call(this,t,0));break}};XA=function(e,t){const n=this._fixedOf(e);if(this._userSetFixed(e,t),this._fixedOf(e)===n)return;const i=o(this,r,B),s=t==="start"?i.columnFixedStartAnnouncement:t==="end"?i.columnFixedEndAnnouncement:i.columnUnfixedAnnouncement;l(this,r,te).call(this,oe(s,{column:fe(e)}))};YA=function(e,t){const n=o(this,Ke),i=t?this._groupColumns.indexOf(t):0;if((e==="moveLeft"||e==="moveRight")&&t){const a=e==="moveRight"!==this._isRtl(),c=i+(a?1:-1);n.hide(),c>=0&&c<this._groupColumns.length&&(this._userGroupColumn(t,a?c+1:c),l(this,r,Zv).call(this,t),l(this,r,wb).call(this,c));return}const s=e==="ungroupColumn"||e==="ungroupAll";switch(n.hide(!s),s&&l(this,r,DA).call(this,i),e){case"ungroupColumn":t&&this._groupColumns.includes(t)&&(l(this,r,kn).call(this,!1,t,this._regularColumns.length,"user"),l(this,r,te).call(this,oe(o(this,r,B).ungroupedAnnouncement,{column:fe(t)})));break;case"ungroupAll":l(this,r,dC).call(this,"user"),l(this,r,te).call(this,o(this,r,B).groupingClearedAnnouncement);break;case"expandAllGroups":l(this,r,rr).call(this,!0,void 0,"user"),l(this,r,te).call(this,o(this,r,B).groupsExpandedAnnouncement);break;case"collapseAllGroups":l(this,r,rr).call(this,!1,void 0,"user"),l(this,r,te).call(this,o(this,r,B).groupsCollapsedAnnouncement);break}};JA=function(e,t){const n=o(this,Ke);switch(e){case"expandGroup":case"collapseGroup":n.hide(!0),l(this,r,Yc).call(this,t.groupKey,t.level,Object.freeze([...t.path]),e==="expandGroup","user");break;case"expandAllGroups":n.hide(!0),l(this,r,rr).call(this,!0,void 0,"user"),l(this,r,te).call(this,o(this,r,B).groupsExpandedAnnouncement);break;case"collapseAllGroups":{n.hide();const i=t.path[0],s=this._groupColumns[0];l(this,r,rr).call(this,!1,void 0,"user"),l(this,r,te).call(this,o(this,r,B).groupsCollapsedAnnouncement),this.updateComplete.then(()=>{const a=s?$i([i],this._groupColumns):void 0;for(let c=0;c<o(this,ae).length;c++){const h=l(this,r,pe).call(this,c);if(h?.isGroup&&h.level===0&&h.groupKey===a){l(this,r,Oe).call(this,{row:c,col:o(this,Fe)},"user",{focus:!0,reveal:!0});return}}w(this,je,!0),this.requestUpdate()});break}case"ungroupColumn":n.hide(),l(this,r,Rp).call(this,t.column);break}};Nm=function(e){return performance.now()-o(this,Kp)<1e3?!0:e.composedPath().some(n=>n instanceof HTMLElement&&(n.isContentEditable||n.matches("input, textarea, select")))||!!this.shadowRoot&&ug(this.shadowRoot)};Kp=new WeakMap;Xa=function(e){w(this,Kp,e?-1/0:performance.now())};kd=new WeakMap;Wm=function(e,t,n){const i=l(this,r,io).call(this,e),s=i&&l(this,r,Pn).call(this,i);if(!i||!s||i.closest("tr.filter-row"))return!1;const a=l(this,r,xa).call(this,e);if(a)return l(this,r,yv).call(this,a,t,n);if(s.row<0){const c=l(this,r,Yr).call(this,s.row,s.col)?.column??o(this,dn)[s.col],h=typeof c=="object"?Ra(c)??c:void 0;return h?l(this,r,Va).call(this,h,i,t,n):!1}return l(this,r,yb).call(this,s,i,t,n)};Lc=new WeakMap;Oc=new WeakMap;qp=async function(e,t){const n=new DataTransfer,i={...e.detail,clipboardData:n,source:t},s=!this.dispatchEvent(new CustomEvent("u-grid-copying",{...l(this,r,Re).call(this,i),cancelable:!0})),a=s?n.getData("text/plain"):e.detail.text,c=s?n.getData("text/html"):e.detail.html;if(!a&&!c)return!1;const h=typeof navigator>"u"?void 0:navigator.clipboard,u=()=>(t==="user"&&l(this,r,te).call(this,o(this,r,B).copyFailedAnnouncement),!1);try{if(h&&typeof h.write=="function"&&typeof ClipboardItem=="function"){const f={"text/plain":new Blob([a],{type:"text/plain"})};c&&(f["text/html"]=new Blob([c],{type:"text/html"})),await h.write([new ClipboardItem(f)])}else if(h&&typeof h.writeText=="function")await h.writeText(a);else return u()}catch{return u()}return s||l(this,r,te).call(this,e.announcement),!0};Bm=function(e,t){const n=l(this,r,Bp).call(this,e);return n?(l(this,r,Oe).call(this,e,"api"),l(this,r,Za).call(this,n,{returnFocus:t??(()=>l(this,r,si).call(this)),positionTarget:t,opener:t},null)):!1};QA=function(){if(!o(this,rs))return P;const e=o(this,r,B);return L`
      <dialog
        class="remove-dialog"
        part="remove-dialog"
        role="alertdialog"
        aria-labelledby="remove-dialog-title"
        aria-describedby="remove-dialog-message"
        lang=${o(this,r,tt)}
        ${it(o(this,Qc))}
        @cancel=${t=>{t.preventDefault(),l(this,r,xl).call(this,!1)}}
        @close=${()=>l(this,r,xl).call(this,!1)}>
        <h2 id="remove-dialog-title" class="remove-dialog-title">${e.confirmRemoveTitle}</h2>
        <p id="remove-dialog-message" class="remove-dialog-message">${e.confirmRemoveMessage}</p>
        <div class="remove-dialog-actions">
          <button class="dialog-button" type="button" autofocus @click=${()=>l(this,r,xl).call(this,!1)}>${e.cancel}</button>
          <button class="dialog-button danger" type="button" @click=${()=>l(this,r,xl).call(this,!0)}>${e.removeRow}</button>
        </div>
      </dialog>`};xl=function(e){const t=o(this,rs);if(t){if(w(this,rs,null),o(this,Qc).value?.close(),this.requestUpdate(),e){l(this,r,bc).call(this,t.rowKey,"user",!0).then(n=>{!n&&t.returnFocus?.isConnected&&t.returnFocus.focus()}),t.returnFocus?.focus();return}t.returnFocus?.isConnected?t.returnFocus.focus():w(this,je,!0)}};ek=function(){const e=this._shownColumns.length,t=o(this,Ie),n=o(this,Ne),i=c=>Od(this._regularColumns,t,c).filter(h=>h.showInChooser!==!1).map(h=>{const u=this._isColumnVisible(h);if(!t.childrenOf.has(h))return{column:h,id:zt(h),visible:u,canToggle:!u||e>1,adaptive:n.includes(h)};const f=this._regularColumns.filter(v=>v.showInChooser!==!1&&Ls(t,v).includes(h)),g=f.filter(v=>this._isColumnVisible(v)).length;return{column:h,id:zt(h),visible:u&&g===f.length,indeterminate:u&&g>0&&g<f.length,canToggle:!u||e>g,children:i(h),adaptive:g>0&&f.every(v=>!this._isColumnVisible(v)||n.includes(v))}}),s=i(null),a=o(this,Vn);return O1({items:s,translation:o(this,r,B),search:a.search,onSearch:c=>a.setSearch(c,()=>{l(this,r,te).call(this,I1(o(this,r,B),Ty(pg(s,c))))}),onVisibleChange:(c,h)=>this._userSetVisible(c,h),onVisibleChangeAll:(c,h)=>{c.forEach(u=>this._userSetVisible(u,h))},onMove:(c,h,u,f)=>l(this,r,Gm).call(this,c,h,u,f),onDragStart:(c,h)=>a.startDrag(c,h,(u,f)=>{const g=[...t.parentOf.keys()].find(v=>String(zt(v))===u);g&&l(this,r,Gm).call(this,h,g,f)}),onKeyDown:a.onKeyDown,onFocusOut:a.onFocusOut})};Gm=function(e,t,n,i=!1){if(e===t)return!1;if(!this._canDropColumn(e,t))return i&&l(this,r,te).call(this,oe(o(this,r,B).columnMoveRefusedAnnouncement,{column:fe(e),target:fe(t)})),!1;const s=this._siblingIndexOf(e),a=this._siblingIndexOf(t)+(n?1:0);if(this._userMoveColumn(e,a),this._siblingIndexOf(e)===s)return!1;const c=Od(this._regularColumns,o(this,Ie),this._parentBandOf(e)??null).filter(h=>h.showInChooser!==!1);return l(this,r,te).call(this,oe(o(this,r,B).columnMovedAnnouncement,{column:fe(e),position:String(c.indexOf(e)+1),count:String(c.length)})),!0};tk=function(){const e=this.renderRoot;o(this,qr).prune(),o(this,Bo).prune();const t=new Map;o(this,Ie).parentOf.forEach((s,a)=>t.set(String(zt(a)),a)),e.querySelectorAll("th.header-column, th.band-header").forEach(s=>{const a=t.get(s.getAttribute("data-column-id")??"");a&&(this._nativeColumnMap.set(s,a),o(this,qr).attach(s))}),e.querySelectorAll(".group").forEach((s,a)=>{const c=this._groupColumns[a];c&&(this._nativeColumnMap.set(s,c),o(this,Bo).attach(s))});const n=e.querySelector(".drag-here");n&&o(this,Bo).attachToGroupDropTarget(n,0);const i=e.querySelector(".group-end-dropzone");i&&o(this,Bo).attachToGroupDropTarget(i,9998)};U.styles=[p$];V([G({type:Boolean,converter:De(!1),attribute:"auto-expand-groups"})],U.prototype,"autoExpandGroups",2);V([G({attribute:!1})],U.prototype,"summary",1);V([G({attribute:!1})],U.prototype,"noDataRenderer",2);V([G({type:Boolean,converter:De(!1)})],U.prototype,"loading",2);V([G({type:Boolean,converter:De(!1),attribute:"header-wrap"})],U.prototype,"headerWrap",2);V([G({attribute:!1})],U.prototype,"detailRenderer",2);V([G({type:Boolean,converter:De(!1),attribute:"auto-expand-rows"})],U.prototype,"autoExpandRows",2);V([G({type:Boolean,converter:De(!1),attribute:"auto-hide-columns"})],U.prototype,"autoHideColumns",2);V([G({attribute:!1})],U.prototype,"fixedTopItems",1);V([G({attribute:!1})],U.prototype,"fixedBottomItems",1);V([G({attribute:!1})],U.prototype,"rowRenderer",2);V([G({attribute:"key-expr"})],U.prototype,"keyExpr",1);V([G({attribute:!1})],U.prototype,"dataSource",1);V([G({type:Boolean,converter:De(!1),attribute:"remote-operations"})],U.prototype,"remoteOperations",2);V([G({type:Boolean,converter:De(!1),attribute:"reshape-on-changes"})],U.prototype,"reshapeOnChanges",2);V([G({attribute:"tree-mode"})],U.prototype,"treeMode",2);V([G({attribute:"children-expr"})],U.prototype,"childrenExpr",2);V([G({attribute:"parent-key-expr"})],U.prototype,"parentKeyExpr",2);V([G({attribute:"root-parent-key"})],U.prototype,"rootParentKey",2);V([G({attribute:"has-children-expr"})],U.prototype,"hasChildrenExpr",2);V([G({attribute:"tree-column"})],U.prototype,"treeColumn",2);V([G({attribute:"tree-filter-mode"})],U.prototype,"treeFilterMode",2);V([G({type:Boolean,converter:De(!1),attribute:"auto-expand-nodes"})],U.prototype,"autoExpandNodes",2);V([G({type:Boolean,converter:De(!1),attribute:"recursive-selection"})],U.prototype,"recursiveSelection",2);V([G({type:Boolean,converter:De(!1)})],U.prototype,"paging",2);V([G({type:Number,attribute:"page-size"})],U.prototype,"pageSize",2);V([G({type:Number,attribute:"page-index"})],U.prototype,"pageIndex",1);V([G({type:Array,attribute:"page-size-options",converter:rE([10,20,50,100])})],U.prototype,"pageSizeOptions",2);V([G({attribute:"scroll-mode"})],U.prototype,"scrollMode",2);V([G({attribute:"scroll-container"})],U.prototype,"scrollContainer",2);V([G({attribute:!1})],U.prototype,"scrollContainerElement",2);V([G({attribute:"scroll-container-axis"})],U.prototype,"scrollContainerAxis",2);V([G({attribute:!1})],U.prototype,"items",1);V([Vx()],U.prototype,"_groupColumns",2);V([Vx()],U.prototype,"_regularColumns",2);V([G({attribute:!1})],U.prototype,"columns",1);V([G({attribute:"sort-mode"})],U.prototype,"sortMode",2);V([G()],U.prototype,"sorting",1);V([G({type:Number,attribute:"row-height"})],U.prototype,"rowHeight",2);V([G({type:Boolean,converter:De(!1)})],U.prototype,"striped",2);V([G({type:Boolean,converter:De(!0),attribute:"show-group-panel"})],U.prototype,"showGroupPanel",2);V([G({type:Boolean,converter:De(!0),attribute:"show-column-headers"})],U.prototype,"showColumnHeaders",2);V([G({type:Boolean,converter:De(!0),attribute:"show-row-lines"})],U.prototype,"showRowLines",2);V([G({type:Boolean,converter:De(!1),attribute:"show-column-lines"})],U.prototype,"showColumnLines",2);V([G({type:Boolean,converter:De(!0),attribute:"show-group-count"})],U.prototype,"showGroupCount",2);V([G({type:Boolean,converter:De(!0),attribute:"group-panel-menu"})],U.prototype,"groupPanelMenu",2);V([G({type:Boolean,converter:De(!0),attribute:"column-header-menu"})],U.prototype,"columnHeaderMenu",2);V([G({type:Boolean,converter:De(!0),attribute:"show-column-header-menu-button"})],U.prototype,"showColumnHeaderMenuButton",2);V([G({type:Boolean,converter:De(!0),attribute:"column-fixing"})],U.prototype,"columnFixing",2);V([G({type:Boolean,converter:De(!1),attribute:"row-menu"})],U.prototype,"rowMenu",2);V([G({attribute:!1})],U.prototype,"toolbarItems",1);V([G({attribute:"export-formats",converter:aE})],U.prototype,"exportFormats",1);V([G({attribute:!1})],U.prototype,"xlsxExporter",2);V([G({attribute:!1})],U.prototype,"pdfExporter",2);V([G({attribute:!1})],U.prototype,"csvExportOptions",2);V([G({type:Boolean,converter:De(!1),attribute:"show-filter-row"})],U.prototype,"showFilterRow",2);V([G({type:Boolean,converter:De(!1),attribute:"show-search-panel"})],U.prototype,"showSearchPanel",2);V([G({type:Boolean,converter:De(!1),attribute:"header-filter"})],U.prototype,"headerFilter",2);V([G({attribute:!1})],U.prototype,"filterValue",1);V([G({attribute:"search-text"})],U.prototype,"searchText",1);V([G({type:Boolean,converter:De(!1),attribute:"column-resizing"})],U.prototype,"columnResizing",2);V([G({attribute:"resize-mode"})],U.prototype,"resizeMode",2);V([G({type:Boolean,converter:De(!1),attribute:"column-chooser"})],U.prototype,"columnChooser",2);V([G({type:Boolean,converter:De(!1),attribute:"column-auto-width"})],U.prototype,"columnAutoWidth",2);V([G({attribute:"column-rendering-mode"})],U.prototype,"columnRenderingMode",2);V([G({attribute:"selection-mode"})],U.prototype,"selectionMode",2);V([G({type:Boolean,converter:De(!1),attribute:"show-checkboxes"})],U.prototype,"showCheckboxes",2);V([G({attribute:"clipboard-mode"})],U.prototype,"clipboardMode",2);V([G({attribute:"cell-selection-mode"})],U.prototype,"cellSelectionMode",2);V([G({type:Boolean,converter:De(!1),attribute:"show-cell-range-summary"})],U.prototype,"showCellRangeSummary",2);V([G({attribute:"edit-mode"})],U.prototype,"editMode",2);V([G({type:Boolean,converter:De(!1),attribute:"allow-editing"})],U.prototype,"allowEditing",2);V([G({type:Boolean,converter:De(!1),attribute:"allow-adding"})],U.prototype,"allowAdding",2);V([G({type:Boolean,converter:De(!1),attribute:"allow-removing"})],U.prototype,"allowRemoving",2);V([G({attribute:"edit-trigger"})],U.prototype,"editTrigger",2);V([G({type:Boolean,converter:De(!0),attribute:"confirm-remove"})],U.prototype,"confirmRemove",2);V([G({attribute:!1})],U.prototype,"selectedKeys",1);V([G({attribute:!1})],U.prototype,"focusedRowKey",1);V([G({type:Boolean,converter:De(!1)})],U.prototype,"stripped",1);V([G({type:Boolean,converter:De(!0),attribute:"showheader"})],U.prototype,"showHeader",1);V([G()],U.prototype,"language",1);V([G({attribute:"state-storage"})],U.prototype,"stateStorage",1);V([G({attribute:"state-storage-key"})],U.prototype,"stateStorageKey",1);V([G({type:Number,attribute:"state-change-delay"})],U.prototype,"stateChangeDelay",2);U=V([Ux("u-grid")],U);export{jS as B,P as E,vz as G,ql as L,Td as a,zE as b,Qy as c,Dd as d,nn as e,DM as f,Pc as g,Qo as h,go as i,FE as j,fe as k,lg as l,mz as m,dr as n,Ta as o,Qm as p,eg as q,gz as s,pr as t,L as x,XE as y};
