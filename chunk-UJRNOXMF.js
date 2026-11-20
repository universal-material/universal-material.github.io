import{a as g,b as bd,c as yd,d as m,e as st,f as xd,g as xt,h as k,i as wd,j as Sn,k as T}from"./chunk-CEMGHJ4D.js";import{j as o}from"./chunk-QUVZ4KUC.js";import{a as N,b as Q,e as a,f as p,g as h,h as c,i as gd,j as vd,k as ne}from"./chunk-IPU5OYZE.js";var b=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};var fm={attribute:!0,type:String,converter:bd,reflect:!1,hasChanged:yd},gm=(r=fm,t,e)=>{let{kind:n,metadata:i}=e,s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),n==="setter"&&((r=Object.create(r)).wrapped=!0),s.set(e.name,r),n==="accessor"){let{name:u}=e;return{set(f){let v=t.get.call(this);t.set.call(this,f),this.requestUpdate(u,v,r)},init(f){return f!==void 0&&this.C(u,void 0,r,f),f}}}if(n==="setter"){let{name:u}=e;return function(f){let v=this[u];t.call(this,f),this.requestUpdate(u,v,r)}}throw Error("Unsupported decorator location: "+n)};function l(r){return(t,e)=>typeof e=="object"?gm(r,t,e):((n,i,s)=>{let u=i.hasOwnProperty(s);return i.constructor.createProperty(s,n),u?Object.getOwnPropertyDescriptor(i,s):void 0})(r,t,e)}function E(r){return l(Q(N({},r),{state:!0,attribute:!1}))}var Pt=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);function C(r,t){return(e,n,i)=>{let s=u=>u.renderRoot?.querySelector(r)??null;if(t){let{get:u,set:f}=typeof n=="object"?e:i??(()=>{let v=Symbol();return{get(){return this[v]},set(w){this[v]=w}}})();return Pt(e,n,{get(){let v=u.call(this);return v===void 0&&(v=s(this),(v!==null||this.hasUpdated)&&f.call(this,v)),v}})}return Pt(e,n,{get(){return s(this)}})}}var vm;function _d(r){return(t,e)=>Pt(t,e,{get(){return(this.renderRoot??(vm??=document.createDocumentFragment())).querySelectorAll(r)}})}function ee(r){return(t,e)=>{let{slot:n,selector:i}=r??{},s="slot"+(n?`[name=${n}]`:":not([name])");return Pt(t,e,{get(){let u=this.renderRoot?.querySelector(s),f=u?.assignedElements(r)??[];return i===void 0?f:f.filter(v=>v.matches(i))}})}}function hs(r){return(t,e)=>{let{slot:n}=r??{},i="slot"+(n?`[name=${n}]`:":not([name])");return Pt(t,e,{get(){return this.renderRoot?.querySelector(i)?.assignedNodes(r)??[]}})}}var $=g`
  :host,
  * {
    --_focus-ring-color: var(--u-focus-ring-color, var(--u-color-secondary, rgb(98, 91, 113)));
    --_focus-ring-outline-offset: var(--u-focus-ring-outline-offset, 2px);
    font-family: var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    box-sizing: border-box;
    outline: 0;
  }

  .force-focus-ring .focus-ring,
  :host(.force-focus-ring) .focus-ring,
  .focus-ring:focus-visible {
    animation: u-focus-pulse 500ms ease;
    animation-fill-mode: forwards;
    outline-offset: var(--_focus-ring-outline-offset);
  }

  @keyframes u-focus-pulse {
    0% {
      outline: 0 solid var(--_focus-ring-color);
    }
    50% {
      outline: 6px solid var(--_focus-ring-color);
    }
    100% {
      outline: 4px solid var(--_focus-ring-color);
    }
  }
`;var bm={dialog:{alertDefaults:{acknowledgeButton:{label:"Ok",variant:"text"}},confirmDefaults:{confirmButton:{label:"Ok",variant:"text"},cancelButton:{label:"Cancel",variant:"text"}}},navigationDrawer:{useSwiperJs:!1}},ur=bm;function Cd(r,t){(t==null||t>r.length)&&(t=r.length);for(var e=0,n=Array(t);e<t;e++)n[e]=r[e];return n}function ym(r){if(Array.isArray(r))return r}function xm(r,t){var e=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(e!=null){var n,i,s,u,f=[],v=!0,w=!1;try{if(s=(e=e.call(r)).next,t!==0)for(;!(v=(n=s.call(e)).done)&&(f.push(n.value),f.length!==t);v=!0);}catch(_){w=!0,i=_}finally{try{if(!v&&e.return!=null&&(u=e.return(),Object(u)!==u))return}finally{if(w)throw i}}return f}}function wm(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _m(r,t){return ym(r)||xm(r,t)||Cm(r,t)||wm()}function Cm(r,t){if(r){if(typeof r=="string")return Cd(r,t);var e={}.toString.call(r).slice(8,-1);return e==="Object"&&r.constructor&&(e=r.constructor.name),e==="Map"||e==="Set"?Array.from(r):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Cd(r,t):void 0}}var Rd=Object.entries,kd=Object.setPrototypeOf,km=Object.isFrozen,Em=Object.getPrototypeOf,Tm=Object.getOwnPropertyDescriptor,Be=Object.freeze,ft=Object.seal,Pn=Object.create,Od=typeof Reflect<"u"&&Reflect,zl=Od.apply,Pl=Od.construct;Be||(Be=function(t){return t});ft||(ft=function(t){return t});zl||(zl=function(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),s=2;s<n;s++)i[s-2]=arguments[s];return t.apply(e,i)});Pl||(Pl=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return new t(...n)});var In=Ce(Array.prototype.forEach),Sm=Ce(Array.prototype.lastIndexOf),Ed=Ce(Array.prototype.pop),An=Ce(Array.prototype.push),Im=Ce(Array.prototype.splice),qe=Array.isArray,jo=Ce(String.prototype.toLowerCase),Tl=Ce(String.prototype.toString),Td=Ce(String.prototype.match),Dn=Ce(String.prototype.replace),Sd=Ce(String.prototype.indexOf),Am=Ce(String.prototype.trim),Dm=Ce(Number.prototype.toString),zm=Ce(Boolean.prototype.toString),Id=typeof BigInt>"u"?null:Ce(BigInt.prototype.toString),Ad=typeof Symbol>"u"?null:Ce(Symbol.prototype.toString),ge=Ce(Object.prototype.hasOwnProperty),Vo=Ce(Object.prototype.toString),ze=Ce(RegExp.prototype.test),ps=Pm(TypeError);function Ce(r){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return zl(r,t,n)}}function Pm(r){return function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Pl(r,e)}}function F(r,t){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:jo;if(kd&&kd(r,null),!qe(t))return r;let n=t.length;for(;n--;){let i=t[n];if(typeof i=="string"){let s=e(i);s!==i&&(km(t)||(t[n]=s),i=s)}r[i]=!0}return r}function Lm(r){for(let t=0;t<r.length;t++)ge(r,t)||(r[t]=null);return r}function Qe(r){let t=Pn(null);for(let n of Rd(r)){var e=_m(n,2);let i=e[0],s=e[1];ge(r,i)&&(qe(s)?t[i]=Lm(s):s&&typeof s=="object"&&s.constructor===Object?t[i]=Qe(s):t[i]=s)}return t}function Mm(r){switch(typeof r){case"string":return r;case"number":return Dm(r);case"boolean":return zm(r);case"bigint":return Id?Id(r):"0";case"symbol":return Ad?Ad(r):"Symbol()";case"undefined":return Vo(r);case"function":case"object":{if(r===null)return Vo(r);let t=r,e=Ur(t,"toString");if(typeof e=="function"){let n=e(t);return typeof n=="string"?n:Vo(n)}return Vo(r)}default:return Vo(r)}}function Ur(r,t){for(;r!==null;){let n=Tm(r,t);if(n){if(n.get)return Ce(n.get);if(typeof n.value=="function")return Ce(n.value)}r=Em(r)}function e(){return null}return e}function $m(r){try{return ze(r,""),!0}catch{return!1}}var Dd=Be(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Sl=Be(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Il=Be(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Rm=Be(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Al=Be(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Om=Be(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),zd=Be(["#text"]),Pd=Be(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),Dl=Be(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ld=Be(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ms=Be(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),qm=ft(/{{[\w\W]*|^[\w\W]*}}/g),Bm=ft(/<%[\w\W]*|^[\w\W]*%>/g),Nm=ft(/\${[\w\W]*/g),Fm=ft(/^data-[\-\w.\u00B7-\uFFFF]+$/),Um=ft(/^aria-[\-\w]+$/),Md=ft(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Hm=ft(/^(?:\w+script|data):/i),Vm=ft(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),jm=ft(/^html$/i),Wm=ft(/^[a-z][.\w]*(-[.\w]+)+$/i),zn={element:1,text:3,progressingInstruction:7,comment:8,document:9},Gm=function(){return typeof window>"u"?null:window},Ym=function(t,e){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let n=null,i="data-tt-policy-suffix";e&&e.hasAttribute(i)&&(n=e.getAttribute(i));let s="dompurify"+(n?"#"+n:"");try{return t.createPolicy(s,{createHTML(u){return u},createScriptURL(u){return u}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}},$d=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function qd(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Gm(),t=P=>qd(P);if(t.version="3.4.5",t.removed=[],!r||!r.document||r.document.nodeType!==zn.document||!r.Element)return t.isSupported=!1,t;let e=r.document,n=e,i=n.currentScript,s=r.DocumentFragment,u=r.HTMLTemplateElement,f=r.Node,v=r.Element,w=r.NodeFilter,_=r.NamedNodeMap,S=_===void 0?r.NamedNodeMap||r.MozNamedAttrMap:_,I=r.HTMLFormElement,L=r.DOMParser,M=r.trustedTypes,z=v.prototype,X=Ur(z,"cloneNode"),te=Ur(z,"remove"),ae=Ur(z,"nextSibling"),G=Ur(z,"childNodes"),fe=Ur(z,"parentNode"),H=f&&f.prototype?Ur(f.prototype,"nodeType"):null;if(typeof u=="function"){let P=e.createElement("template");P.content&&P.content.ownerDocument&&(e=P.content.ownerDocument)}let Y,K="",oe=e,ve=oe.implementation,Le=oe.createNodeIterator,xe=oe.createDocumentFragment,At=oe.getElementsByTagName,mt=n.importNode,se=$d();t.isSupported=typeof Rd=="function"&&typeof fe=="function"&&ve&&ve.createHTMLDocument!==void 0;let Ze=qm,Vt=Bm,at=Nm,xn=Fm,Oo=Um,qo=Hm,wn=Vm,Bo=Wm,qr=Md,be=null,No=F({},[...Dd,...Sl,...Il,...Al,...zd]),Ee=null,os=F({},[...Pd,...Dl,...Ld,...ms]),le=Object.seal(Pn(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Br=null,_n=null,lr=Object.seal(Pn(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),Xc=!0,hl=!0,Kc=!1,Zc=!0,cr=!1,Fo=!0,Nr=!1,pl=!1,ml=!1,Cn=!1,as=!1,ss=!1,Jc=!0,Qc=!1,ed="user-content-",fl=!0,Uo=!1,kn={},Dt=null,gl=F({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),td=null,rd=F({},["audio","video","img","source","image","track"]),vl=null,nd=F({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ls="http://www.w3.org/1998/Math/MathML",cs="http://www.w3.org/2000/svg",zt="http://www.w3.org/1999/xhtml",En=zt,bl=!1,yl=null,lm=F({},[ls,cs,zt],Tl),xl=F({},["mi","mo","mn","ms","mtext"]),wl=F({},["annotation-xml"]),cm=F({},["title","style","font","a","script"]),Ho=null,dm=["application/xhtml+xml","text/html"],um="text/html",Te=null,Tn=null,hm=e.createElement("form"),id=function(d){return d instanceof RegExp||d instanceof Function},_l=function(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(Tn&&Tn===d)return;(!d||typeof d!="object")&&(d={}),d=Qe(d),Ho=dm.indexOf(d.PARSER_MEDIA_TYPE)===-1?um:d.PARSER_MEDIA_TYPE,Te=Ho==="application/xhtml+xml"?Tl:jo,be=ge(d,"ALLOWED_TAGS")&&qe(d.ALLOWED_TAGS)?F({},d.ALLOWED_TAGS,Te):No,Ee=ge(d,"ALLOWED_ATTR")&&qe(d.ALLOWED_ATTR)?F({},d.ALLOWED_ATTR,Te):os,yl=ge(d,"ALLOWED_NAMESPACES")&&qe(d.ALLOWED_NAMESPACES)?F({},d.ALLOWED_NAMESPACES,Tl):lm,vl=ge(d,"ADD_URI_SAFE_ATTR")&&qe(d.ADD_URI_SAFE_ATTR)?F(Qe(nd),d.ADD_URI_SAFE_ATTR,Te):nd,td=ge(d,"ADD_DATA_URI_TAGS")&&qe(d.ADD_DATA_URI_TAGS)?F(Qe(rd),d.ADD_DATA_URI_TAGS,Te):rd,Dt=ge(d,"FORBID_CONTENTS")&&qe(d.FORBID_CONTENTS)?F({},d.FORBID_CONTENTS,Te):gl,Br=ge(d,"FORBID_TAGS")&&qe(d.FORBID_TAGS)?F({},d.FORBID_TAGS,Te):Qe({}),_n=ge(d,"FORBID_ATTR")&&qe(d.FORBID_ATTR)?F({},d.FORBID_ATTR,Te):Qe({}),kn=ge(d,"USE_PROFILES")?d.USE_PROFILES&&typeof d.USE_PROFILES=="object"?Qe(d.USE_PROFILES):d.USE_PROFILES:!1,Xc=d.ALLOW_ARIA_ATTR!==!1,hl=d.ALLOW_DATA_ATTR!==!1,Kc=d.ALLOW_UNKNOWN_PROTOCOLS||!1,Zc=d.ALLOW_SELF_CLOSE_IN_ATTR!==!1,cr=d.SAFE_FOR_TEMPLATES||!1,Fo=d.SAFE_FOR_XML!==!1,Nr=d.WHOLE_DOCUMENT||!1,Cn=d.RETURN_DOM||!1,as=d.RETURN_DOM_FRAGMENT||!1,ss=d.RETURN_TRUSTED_TYPE||!1,ml=d.FORCE_BODY||!1,Jc=d.SANITIZE_DOM!==!1,Qc=d.SANITIZE_NAMED_PROPS||!1,fl=d.KEEP_CONTENT!==!1,Uo=d.IN_PLACE||!1,qr=$m(d.ALLOWED_URI_REGEXP)?d.ALLOWED_URI_REGEXP:Md,En=typeof d.NAMESPACE=="string"?d.NAMESPACE:zt,xl=ge(d,"MATHML_TEXT_INTEGRATION_POINTS")&&d.MATHML_TEXT_INTEGRATION_POINTS&&typeof d.MATHML_TEXT_INTEGRATION_POINTS=="object"?Qe(d.MATHML_TEXT_INTEGRATION_POINTS):F({},["mi","mo","mn","ms","mtext"]),wl=ge(d,"HTML_INTEGRATION_POINTS")&&d.HTML_INTEGRATION_POINTS&&typeof d.HTML_INTEGRATION_POINTS=="object"?Qe(d.HTML_INTEGRATION_POINTS):F({},["annotation-xml"]);let x=ge(d,"CUSTOM_ELEMENT_HANDLING")&&d.CUSTOM_ELEMENT_HANDLING&&typeof d.CUSTOM_ELEMENT_HANDLING=="object"?Qe(d.CUSTOM_ELEMENT_HANDLING):Pn(null);if(le=Pn(null),ge(x,"tagNameCheck")&&id(x.tagNameCheck)&&(le.tagNameCheck=x.tagNameCheck),ge(x,"attributeNameCheck")&&id(x.attributeNameCheck)&&(le.attributeNameCheck=x.attributeNameCheck),ge(x,"allowCustomizedBuiltInElements")&&typeof x.allowCustomizedBuiltInElements=="boolean"&&(le.allowCustomizedBuiltInElements=x.allowCustomizedBuiltInElements),cr&&(hl=!1),as&&(Cn=!0),kn&&(be=F({},zd),Ee=Pn(null),kn.html===!0&&(F(be,Dd),F(Ee,Pd)),kn.svg===!0&&(F(be,Sl),F(Ee,Dl),F(Ee,ms)),kn.svgFilters===!0&&(F(be,Il),F(Ee,Dl),F(Ee,ms)),kn.mathMl===!0&&(F(be,Al),F(Ee,Ld),F(Ee,ms))),lr.tagCheck=null,lr.attributeCheck=null,ge(d,"ADD_TAGS")&&(typeof d.ADD_TAGS=="function"?lr.tagCheck=d.ADD_TAGS:qe(d.ADD_TAGS)&&(be===No&&(be=Qe(be)),F(be,d.ADD_TAGS,Te))),ge(d,"ADD_ATTR")&&(typeof d.ADD_ATTR=="function"?lr.attributeCheck=d.ADD_ATTR:qe(d.ADD_ATTR)&&(Ee===os&&(Ee=Qe(Ee)),F(Ee,d.ADD_ATTR,Te))),ge(d,"ADD_URI_SAFE_ATTR")&&qe(d.ADD_URI_SAFE_ATTR)&&F(vl,d.ADD_URI_SAFE_ATTR,Te),ge(d,"FORBID_CONTENTS")&&qe(d.FORBID_CONTENTS)&&(Dt===gl&&(Dt=Qe(Dt)),F(Dt,d.FORBID_CONTENTS,Te)),ge(d,"ADD_FORBID_CONTENTS")&&qe(d.ADD_FORBID_CONTENTS)&&(Dt===gl&&(Dt=Qe(Dt)),F(Dt,d.ADD_FORBID_CONTENTS,Te)),fl&&(be["#text"]=!0),Nr&&F(be,["html","head","body"]),be.table&&(F(be,["tbody"]),delete Br.tbody),d.TRUSTED_TYPES_POLICY){if(typeof d.TRUSTED_TYPES_POLICY.createHTML!="function")throw ps('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof d.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw ps('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');Y=d.TRUSTED_TYPES_POLICY,K=Y.createHTML("")}else Y===void 0&&(Y=Ym(M,i)),Y!==null&&typeof K=="string"&&(K=Y.createHTML(""));Be&&Be(d),Tn=d},od=F({},[...Sl,...Il,...Rm]),ad=F({},[...Al,...Om]),pm=function(d){let x=fe(d);(!x||!x.tagName)&&(x={namespaceURI:En,tagName:"template"});let A=jo(d.tagName),V=jo(x.tagName);return yl[d.namespaceURI]?d.namespaceURI===cs?x.namespaceURI===zt?A==="svg":x.namespaceURI===ls?A==="svg"&&(V==="annotation-xml"||xl[V]):!!od[A]:d.namespaceURI===ls?x.namespaceURI===zt?A==="math":x.namespaceURI===cs?A==="math"&&wl[V]:!!ad[A]:d.namespaceURI===zt?x.namespaceURI===cs&&!wl[V]||x.namespaceURI===ls&&!xl[V]?!1:!ad[A]&&(cm[A]||!od[A]):!!(Ho==="application/xhtml+xml"&&yl[d.namespaceURI]):!1},yt=function(d){An(t.removed,{element:d});try{fe(d).removeChild(d)}catch{te(d)}},Fr=function(d,x){try{An(t.removed,{attribute:x.getAttributeNode(d),from:x})}catch{An(t.removed,{attribute:null,from:x})}if(x.removeAttribute(d),d==="is")if(Cn||as)try{yt(x)}catch{}else try{x.setAttribute(d,"")}catch{}},sd=function(d){let x=null,A=null;if(ml)d="<remove></remove>"+d;else{let _e=Td(d,/^[\r\n\t ]+/);A=_e&&_e[0]}Ho==="application/xhtml+xml"&&En===zt&&(d='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+d+"</body></html>");let V=Y?Y.createHTML(d):d;if(En===zt)try{x=new L().parseFromString(V,Ho)}catch{}if(!x||!x.documentElement){x=ve.createDocument(En,"template",null);try{x.documentElement.innerHTML=bl?K:V}catch{}}let we=x.body||x.documentElement;return d&&A&&we.insertBefore(e.createTextNode(A),we.childNodes[0]||null),En===zt?At.call(x,Nr?"html":"body")[0]:Nr?x.documentElement:we},ld=function(d){return Le.call(d.ownerDocument||d,d,w.SHOW_ELEMENT|w.SHOW_COMMENT|w.SHOW_TEXT|w.SHOW_PROCESSING_INSTRUCTION|w.SHOW_CDATA_SECTION,null)},cd=function(d){d.normalize();let x=Le.call(d.ownerDocument||d,d,w.SHOW_TEXT|w.SHOW_COMMENT|w.SHOW_CDATA_SECTION|w.SHOW_PROCESSING_INSTRUCTION,null),A=x.nextNode();for(;A;){let V=A.data;In([Ze,Vt,at],we=>{V=Dn(V,we," ")}),A.data=V,A=x.nextNode()}},Cl=function(d){return d instanceof I&&(typeof d.nodeName!="string"||typeof d.textContent!="string"||typeof d.removeChild!="function"||!(d.attributes instanceof S)||typeof d.removeAttribute!="function"||typeof d.setAttribute!="function"||typeof d.namespaceURI!="string"||typeof d.insertBefore!="function"||typeof d.hasChildNodes!="function")},ds=function(d){if(!H||typeof d!="object"||d===null)return!1;try{return typeof H(d)=="number"}catch{return!1}};function jt(P,d,x){In(P,A=>{A.call(t,d,x,Tn)})}let dd=function(d){let x=null;if(jt(se.beforeSanitizeElements,d,null),Cl(d))return yt(d),!0;let A=Te(d.nodeName);if(jt(se.uponSanitizeElement,d,{tagName:A,allowedTags:be}),Fo&&d.hasChildNodes()&&!ds(d.firstElementChild)&&ze(/<[/\w!]/g,d.innerHTML)&&ze(/<[/\w!]/g,d.textContent)||Fo&&d.namespaceURI===zt&&A==="style"&&ds(d.firstElementChild)||d.nodeType===zn.progressingInstruction||Fo&&d.nodeType===zn.comment&&ze(/<[/\w]/g,d.data))return yt(d),!0;if(Br[A]||!(lr.tagCheck instanceof Function&&lr.tagCheck(A))&&!be[A]){if(!Br[A]&&hd(A)&&(le.tagNameCheck instanceof RegExp&&ze(le.tagNameCheck,A)||le.tagNameCheck instanceof Function&&le.tagNameCheck(A)))return!1;if(fl&&!Dt[A]){let V=fe(d)||d.parentNode,we=G(d)||d.childNodes;if(we&&V){let _e=we.length;for(let Je=_e-1;Je>=0;--Je){let dr=X(we[Je],!0);V.insertBefore(dr,ae(d))}}}return yt(d),!0}return d instanceof v&&!pm(d)||(A==="noscript"||A==="noembed"||A==="noframes")&&ze(/<\/no(script|embed|frames)/i,d.innerHTML)?(yt(d),!0):(cr&&d.nodeType===zn.text&&(x=d.textContent,In([Ze,Vt,at],V=>{x=Dn(x,V," ")}),d.textContent!==x&&(An(t.removed,{element:d.cloneNode()}),d.textContent=x)),jt(se.afterSanitizeElements,d,null),!1)},ud=function(d,x,A){if(_n[x]||Jc&&(x==="id"||x==="name")&&(A in e||A in hm))return!1;let V=Ee[x]||lr.attributeCheck instanceof Function&&lr.attributeCheck(x,d);if(!(hl&&!_n[x]&&ze(xn,x))){if(!(Xc&&ze(Oo,x))){if(!V||_n[x]){if(!(hd(d)&&(le.tagNameCheck instanceof RegExp&&ze(le.tagNameCheck,d)||le.tagNameCheck instanceof Function&&le.tagNameCheck(d))&&(le.attributeNameCheck instanceof RegExp&&ze(le.attributeNameCheck,x)||le.attributeNameCheck instanceof Function&&le.attributeNameCheck(x,d))||x==="is"&&le.allowCustomizedBuiltInElements&&(le.tagNameCheck instanceof RegExp&&ze(le.tagNameCheck,A)||le.tagNameCheck instanceof Function&&le.tagNameCheck(A))))return!1}else if(!vl[x]){if(!ze(qr,Dn(A,wn,""))){if(!((x==="src"||x==="xlink:href"||x==="href")&&d!=="script"&&Sd(A,"data:")===0&&td[d])){if(!(Kc&&!ze(qo,Dn(A,wn,"")))){if(A)return!1}}}}}}return!0},mm=F({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),hd=function(d){return!mm[jo(d)]&&ze(Bo,d)},pd=function(d){jt(se.beforeSanitizeAttributes,d,null);let x=d.attributes;if(!x||Cl(d))return;let A={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Ee,forceKeepAttr:void 0},V=x.length;for(;V--;){let we=x[V],_e=we.name,Je=we.namespaceURI,dr=we.value,Wt=Te(_e),El=dr,Ae=_e==="value"?El:Am(El);if(A.attrName=Wt,A.attrValue=Ae,A.keepAttr=!0,A.forceKeepAttr=void 0,jt(se.uponSanitizeAttribute,d,A),Ae=A.attrValue,Qc&&(Wt==="id"||Wt==="name")&&Sd(Ae,ed)!==0&&(Fr(_e,d),Ae=ed+Ae),Fo&&ze(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,Ae)){Fr(_e,d);continue}if(Wt==="attributename"&&Td(Ae,"href")){Fr(_e,d);continue}if(A.forceKeepAttr)continue;if(!A.keepAttr){Fr(_e,d);continue}if(!Zc&&ze(/\/>/i,Ae)){Fr(_e,d);continue}cr&&In([Ze,Vt,at],fd=>{Ae=Dn(Ae,fd," ")});let md=Te(d.nodeName);if(!ud(md,Wt,Ae)){Fr(_e,d);continue}if(Y&&typeof M=="object"&&typeof M.getAttributeType=="function"&&!Je)switch(M.getAttributeType(md,Wt)){case"TrustedHTML":{Ae=Y.createHTML(Ae);break}case"TrustedScriptURL":{Ae=Y.createScriptURL(Ae);break}}if(Ae!==El)try{Je?d.setAttributeNS(Je,_e,Ae):d.setAttribute(_e,Ae),Cl(d)?yt(d):Ed(t.removed)}catch{Fr(_e,d)}}jt(se.afterSanitizeAttributes,d,null)},kl=function(d){let x=null,A=ld(d);for(jt(se.beforeSanitizeShadowDOM,d,null);x=A.nextNode();)jt(se.uponSanitizeShadowNode,x,null),dd(x),pd(x),x.content instanceof s&&kl(x.content);jt(se.afterSanitizeShadowDOM,d,null)},us=function(d){if(d.nodeType===zn.element&&d.shadowRoot instanceof s){let V=d.shadowRoot;us(V),kl(V)}let x=d.childNodes;if(!x)return;let A=[];In(x,V=>{An(A,V)});for(let V of A)us(V)};return t.sanitize=function(P){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},x=null,A=null,V=null,we=null;if(bl=!P,bl&&(P="<!-->"),typeof P!="string"&&!ds(P)&&(P=Mm(P),typeof P!="string"))throw ps("dirty is not a string, aborting");if(!t.isSupported)return P;if(pl||_l(d),t.removed=[],typeof P=="string"&&(Uo=!1),Uo){let dr=P.nodeName;if(typeof dr=="string"){let Wt=Te(dr);if(!be[Wt]||Br[Wt])throw ps("root node is forbidden and cannot be sanitized in-place")}us(P)}else if(ds(P))x=sd("<!---->"),A=x.ownerDocument.importNode(P,!0),A.nodeType===zn.element&&A.nodeName==="BODY"||A.nodeName==="HTML"?x=A:x.appendChild(A),us(A);else{if(!Cn&&!cr&&!Nr&&P.indexOf("<")===-1)return Y&&ss?Y.createHTML(P):P;if(x=sd(P),!x)return Cn?null:ss?K:""}x&&ml&&yt(x.firstChild);let _e=ld(Uo?P:x);for(;V=_e.nextNode();)dd(V),pd(V),V.content instanceof s&&kl(V.content);if(Uo)return cr&&cd(P),P;if(Cn){if(cr&&cd(x),as)for(we=xe.call(x.ownerDocument);x.firstChild;)we.appendChild(x.firstChild);else we=x;return(Ee.shadowroot||Ee.shadowrootmode)&&(we=mt.call(n,we,!0)),we}let Je=Nr?x.outerHTML:x.innerHTML;return Nr&&be["!doctype"]&&x.ownerDocument&&x.ownerDocument.doctype&&x.ownerDocument.doctype.name&&ze(jm,x.ownerDocument.doctype.name)&&(Je="<!DOCTYPE "+x.ownerDocument.doctype.name+`>
`+Je),cr&&In([Ze,Vt,at],dr=>{Je=Dn(Je,dr," ")}),Y&&ss?Y.createHTML(Je):Je},t.setConfig=function(){let P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};_l(P),pl=!0},t.clearConfig=function(){Tn=null,pl=!1},t.isValidAttribute=function(P,d,x){Tn||_l({});let A=Te(P),V=Te(d);return ud(A,V,x)},t.addHook=function(P,d){typeof d=="function"&&An(se[P],d)},t.removeHook=function(P,d){if(d!==void 0){let x=Sm(se[P],d);return x===-1?void 0:Im(se[P],x,1)[0]}return Ed(se[P])},t.removeHooks=function(P){se[P]=[]},t.removeAllHooks=function(){se=$d()},t}var Wo=qd();var lt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},hr=r=>(...t)=>({_$litDirective$:r,values:t}),Lt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var q=hr(class extends Lt{constructor(r){if(super(r),r.type!==lt.ATTRIBUTE||r.name!=="class"||r.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let e=r.element.classList;for(let n of this.st)n in t||(e.remove(n),this.st.delete(n));for(let n in t){let i=!!t[n];i===this.st.has(n)||this.nt?.has(n)||(i?(e.add(n),this.st.add(n)):(e.remove(n),this.st.delete(n)))}return xt}});var Bd=g`
  :host {
    --u-common-button-line-height: var(--u-label-large-line-height, 1.25rem);
    --u-common-button-font-size: var(--u-label-large-font-size, .875rem);
    --u-common-button-font-weight: var(--u-font-weight-medium, 500);
    --_common-button-padding: var(--u-common-button-padding, 16px);
    --_extra-small-font-size: var(--u-common-button-extra-small-font-size, .875rem);
    --_small-font-size: var(--u-common-button-small-font-size, .875rem);
    --_medium-font-size: var(--u-common-button-medium-font-size, 1rem);
    --_large-font-size: var(--u-common-button-large-font-size, 1.5rem);
    --_extra-large-font-size: var(--u-common-button-extra-large-font-size, 2rem);
    --_extra-small-font-weight: var(--u-common-button-extra-small-font-weight, var(--u-font-weight-medium, 500));
    --_small-font-weight: var(--u-common-button-small-font-weight, var(--u-font-weight-medium, 500));
    --_medium-font-weight: var(--u-common-button-medium-font-weight, var(--u-font-weight-medium, 500));
    --_large-font-weight: var(--u-common-button-large-font-weight, var(--u-font-weight-regular, 400));
    --_extra-large-font-weight: var(--u-common-button-extra-large-font-weight, var(--u-font-weight-regular, 400));
    --_extra-small-size: var(--u-common-button-extra-small-height, 32px);
    --_small-size: var(--u-common-button-small-height, 40px);
    --_medium-size: var(--u-common-button-medium-height, 56px);
    --_large-size: var(--u-common-button-large-height, 96px);
    --_extra-large-size: var(--u-common-button-extra-large-height, 136px);
    --_extra-small-icon-size: var(--u-icon-button-extra-small-icon-size, 1.25rem);
    --_small-icon-size: var(--u-icon-button-small-icon-size, 1.25rem);
    --_medium-icon-size: var(--u-icon-button-medium-icon-size, 1.5rem);
    --_large-icon-size: var(--u-icon-button-large-icon-size, 2rem);
    --_extra-large-icon-size: var(--u-icon-button-extra-large-icon-size, 2.5rem);
    --_extra-small-icon-margin: var(--u-icon-button-extra-small-icon-margin, 8px);
    --_small-icon-margin: var(--u-icon-button-small-icon-margin, 8px);
    --_medium-icon-margin: var(--u-icon-button-medium-icon-margin, 8px);
    --_large-icon-margin: var(--u-icon-button-large-icon-margin, 12px);
    --_extra-large-icon-margin: var(--u-icon-button-extra-large-icon-margin, 16px);
    --_extra-small-padding: var(--u-common-button-extra-small-padding, 12px);
    --_small-padding: var(--u-common-button-small-padding, 16px);
    --_medium-padding: var(--u-common-button-medium-padding, 24px);
    --_large-padding: var(--u-common-button-large-padding, 48px);
    --_extra-large-padding: var(--u-common-button-extra-large-padding, 64px);
    --_extra-small-square-shape-corner: var(--u-common-button-extra-small-square-shape-corner, 12px);
    --_small-square-shape-corner: var(--u-common-button-small-square-shape-corner, 12px);
    --_medium-square-shape-corner: var(--u-common-button-medium-square-shape-corner, 16px);
    --_large-square-shape-corner: var(--u-common-button-large-square-shape-corner, 28px);
    --_extra-large-square-shape-corner: var(--u-common-button-extra-large-square-shape-corner, 28px);
    --_extra-small-pressed-shape-corner: var(--u-common-button-extra-small-pressed-shape-corner, 8px);
    --_small-pressed-shape-corner: var(--u-common-button-small-pressed-shape-corner, 8px);
    --_medium-pressed-shape-corner: var(--u-common-button-medium-pressed-shape-corner, 12px);
    --_large-pressed-shape-corner: var(--u-common-button-large-pressed-shape-corner, 16px);
    --_extra-large-pressed-shape-corner: var(--u-common-button-extra-large-pressed-shape-corner, 16px);
    --_font-size: var(--_small-font-size);
    --_font-weight: var(--_small-font-weight);
    --_padding: var(--_small-padding);
    --_icon-margin: var(--_small-icon-margin);
    --_round-shape-corner: var(--u-common-button-round-shape-corner, calc(var(--_size) / 2));
  }

  .extra-small {
    --_font-size: var(--_extra-small-font-size);
    --_font-weight: var(--_extra-small-font-weight);
    --_padding: var(--_extra-small-padding);
    --_icon-margin: var(--_extra-small-icon-margin);
  }

  .medium {
    --_font-size: var(--_medium-font-size);
    --_font-weight: var(--_medium-font-weight);
    --_padding: var(--_medium-padding);
    --_icon-margin: var(--_medium-icon-margin);
  }

  .large {
    --_font-size: var(--_large-font-size);
    --_font-weight: var(--_large-font-weight);
    --_padding: var(--_large-padding);
    --_icon-margin: var(--_large-icon-margin);
  }

  .extra-large {
    --_font-size: var(--_extra-large-font-size);
    --_font-weight: var(--_extra-large-font-weight);
    --_padding: var(--_extra-large-padding);
    --_icon-margin: var(--_extra-large-icon-margin);
  }

  .container {
    font-family: var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    font-size: var(--_font-size);
    font-weight: var(--_font-weight);
    padding-inline: var(--_padding);
    box-sizing: border-box;
  }

  .filled.primary, .filled.primary.selected {
    background-color: var(--u-filled-button-primary-container-color, var(--u-color-primary, rgb(103, 80, 164)));
    color: var(--u-filled-button-primary-text-color, var(--u-color-on-primary, rgb(255, 255, 255)));
  }
  .filled.secondary, .filled.secondary.selected {
    background-color: var(--u-filled-button-secondary-container-color, var(--u-color-secondary, rgb(98, 91, 113)));
    color: var(--u-filled-button-secondary-text-color, var(--u-color-on-secondary, rgb(255, 255, 255)));
  }
  .filled.tertiary, .filled.tertiary.selected {
    background-color: var(--u-filled-button-tertiary-container-color, var(--u-color-tertiary, rgb(125, 82, 96)));
    color: var(--u-filled-button-tertiary-text-color, var(--u-color-on-tertiary, rgb(255, 255, 255)));
  }
  .filled.error, .filled.error.selected {
    background-color: var(--u-filled-button-error-container-color, var(--u-color-error, rgb(179, 38, 30)));
    color: var(--u-filled-button-error-text-color, var(--u-color-on-error, rgb(255, 255, 255)));
  }
  .filled.toggle {
    background-color: var(--u-filled-button-container-unselected-color, var(--u-color-surface-container, rgb(243, 237, 247)));
    color: var(--u-filled-button-unselected-text-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
  }

  .tonal {
    background-color: var(--u-tonal-button-container-color, var(--u-color-secondary-container, rgb(232, 222, 248)));
    color: var(--u-tonal-button-text-color, var(--u-color-on-secondary-container, rgb(29, 25, 43)));
  }
  .tonal.selected {
    background-color: var(--u-tonal-button-container-selected-color, var(--u-color-secondary, rgb(98, 91, 113)));
    color: var(--u-tonal-button-text-selected-color, var(--u-color-on-secondary, rgb(255, 255, 255)));
  }

  .elevated {
    background-color: var(--u-elevated-button-container-color, var(--u-color-surface-container-low, rgb(247, 242, 250)));
    color: var(--u-elevated-button-text-color, var(--u-color-primary, rgb(103, 80, 164)));
  }
  .elevated.selected {
    background-color: var(--u-elevated-button-container-selected-color, var(--u-color-primary, rgb(103, 80, 164)));
    color: var(--u-elevated-button-text-selected-color, var(--u-color-on-primary, rgb(255, 255, 255)));
  }

  @media (hover: hover) {
    .filled:hover:not(:focus-within):not(:active),
    .tonal:hover:not(:focus-within):not(:active) {
      --u-elevation-level: var(--u-filled-button-hover-elevation-level, 1);
    }
  }
  .text {
    color: var(--u-text-button-text-color, var(--_color-primary));
  }

  .outlined {
    color: var(--u-outlined-button-text-color, var(--u-text-button-text-color, var(--_color-primary)));
    border: 1px solid var(--u-outlined-button-outline-color, var(--u-color-outline, rgb(121, 116, 126)));
  }
  .outlined.selected {
    background-color: var(--u-outlined-button-container-selected-color, var(--u-color-inverse-surface, rgb(50, 47, 53)));
    color: var(--u-outlined-button-text-selected-color, var(--u-color-on-inverse-surface, rgb(245, 239, 247)));
  }
  .outlined.disabled {
    border-color: var(--u-outlined-button-disabled-border-color, color-mix(in srgb, var(--u-color-on-surface, rgb(29, 27, 32)) var(--u-outlined-button-disabled-border-opacity, 12%), transparent)) !important;
  }
  .outlined.disabled:not(.selected) {
    background-color: transparent !important;
  }

  .elevated {
    --u-elevation-level: var(--u-elevated-button-elevation-level, 1);
    color: var(--u-elevated-button-text-color, var(--_color-primary));
  }
  @media (hover: hover) {
    .elevated:hover {
      --u-elevation-level: var(--u-elevated-button-hover-elevation-level, 2);
    }
  }

  .container:not(.has-icon) .icon-container {
    display: none;
  }

  .content {
    gap: var(--_icon-margin);
  }

  .icon {
    font-size: var(--_icon-size);
  }

  .trailing-icon .content {
    flex-direction: row-reverse;
  }

  #label {
    display: inline-block;
  }

  .label {
    display: inline-block;
    inset-inline-start: 0;
    transition-duration: calc(var(--_morph-duration) * 0.7);
  }

  .label-container {
    position: relative;
  }
  .label-container.animate {
    transition: width var(--_morph-duration) linear;
  }

  .label-default {
    opacity: 1;
    transition-delay: calc(var(--_morph-duration) / 2);
  }

  .label-selected {
    position: absolute;
    opacity: 0;
    transition-delay: 0ms;
  }

  .selected.has-selection-label .label-default {
    position: absolute;
    opacity: 0;
    transition-delay: 0ms;
  }
  .selected.has-selection-label .label-selected {
    position: static;
    opacity: 1;
    transition-delay: calc(var(--_morph-duration) / 2);
  }
`;var pr=class extends Event{constructor(t,e,n,i){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=e,this.callback=n,this.subscribe=i??!1}};var Ln=class{constructor(t,e,n,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(s,u)=>{this.unsubscribe&&(this.unsubscribe!==u&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=s,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(s,u)),this.unsubscribe=u},this.host=t,e.context!==void 0){let s=e;this.context=s.context,this.callback=s.callback,this.subscribe=s.subscribe??!1}else this.context=e,this.callback=n,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new pr(this.context,this.host,this.t,this.subscribe))}};var fs=class{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){let n=e||!Object.is(t,this.o);this.o=t,n&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:n}]of this.subscriptions)e(this.o,n)},t!==void 0&&(this.value=t)}addCallback(t,e,n){if(!n)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});let{disposer:i}=this.subscriptions.get(t);t(this.value,i)}clearCallbacks(){this.subscriptions.clear()}};var Ll=class extends Event{constructor(t,e){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=e}},Mt=class extends fs{constructor(t,e,n){super(e.context!==void 0?e.initialValue:n),this.onContextRequest=i=>{if(i.context!==this.context)return;let s=i.contextTarget??i.composedPath()[0];s!==this.host&&(i.stopPropagation(),this.addCallback(i.callback,s,i.subscribe))},this.onProviderRequest=i=>{if(i.context!==this.context||(i.contextTarget??i.composedPath()[0])===this.host)return;let s=new Set;for(let[u,{consumerHost:f}]of this.subscriptions)s.has(u)||(s.add(u),f.dispatchEvent(new pr(this.context,f,u,!0)));i.stopPropagation()},this.host=t,e.context!==void 0?this.context=e.context:this.context=e,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Ll(this.context,this.host))}};function gs({context:r}){return(t,e)=>{let n=new WeakMap;if(typeof e=="object")return{get(){return t.get.call(this)},set(i){return n.get(this).setValue(i),t.set.call(this,i)},init(i){return n.set(this,new Mt(this,{context:r,initialValue:i})),i}};{t.constructor.addInitializer(u=>{n.set(u,new Mt(u,{context:r}))});let i=Object.getOwnPropertyDescriptor(t,e),s;if(i===void 0){let u=new WeakMap;s={get(){return u.get(this)},set(f){n.get(this).setValue(f),u.set(this,f)},configurable:!0,enumerable:!0}}else{let u=i.set;s=Q(N({},i),{set(f){n.get(this).setValue(f),u?.call(this,f)}})}return void Object.defineProperty(t,e,s)}}}function ce({context:r,subscribe:t}){return(e,n)=>{typeof n=="object"?n.addInitializer(function(){new Ln(this,{context:r,callback:i=>{e.set.call(this,i)},subscribe:t})}):e.constructor.addInitializer(i=>{new Ln(i,{context:r,callback:s=>{i[n]=s},subscribe:t})})}}var Go="u-compact-context";var mr=r=>r??k;var Nd=g`
  :host {
    --_color-primary: var(--u-color-primary, rgb(103, 80, 164));
    -webkit-tap-highlight-color: transparent;
    --u-elevation-level: 0;
    display: inline-block;
  }

  .container {
    position: relative;
    font-family: var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    appearance: none !important;
  }

  .disabled {
    --u-elevation-level: 0 !important;
    background-color: var(--u-button-disabled-bg-color, color-mix(in srgb, var(--u-color-on-surface, rgb(29, 27, 32)) var(--u-button-disabled-background-opacity, 10%), transparent)) !important;
    color: var(--u-button-disabled-text-color, color-mix(in srgb, var(--u-color-on-surface, rgb(29, 27, 32)) var(--u-button-disabled-opacity, 38%), transparent)) !important;
  }
  .disabled .button {
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
    inset-inline-start: 0;
    inset-block-start: 0;
    width: 100%;
    height: 100%;
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

  .content {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    border-radius: inherit;
    width: 100%;
    height: 100%;
  }
`;var vs=(r,t,e=null)=>{t.bubbles&&(!r.shadowRoot||t.composed)&&t.stopPropagation();let n=Reflect.construct(t.constructor,[e??t.type,t]),i=r.dispatchEvent(n);return i||t.preventDefault(),i};var Fd=g`
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
`;var $n,Ud=($n=class extends T{connectedCallback(){super.connectedCallback(),this.ariaHidden="true"}},$n.styles=Fd,$n);Ud=o([b("u-elevation")],Ud);var Hd=g`
  :host,
  .ripple-container::before {
    --_ripple-hover-color: var(--u-ripple-hover-color, var(--u-ripple-color, var(--u-state-layer-color, currentColor)));
    --_ripple-pressed-color: var(--u-ripple-pressed-color, var(--u-ripple-color, var(--u-state-layer-color, currentColor)));
    --_ripple-hover-opacity: var(--u-ripple-pressed-opacity, var(--u-state-hover-opacity, 0.08));
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
    border-radius: var(--u-ripple-border-radius, inherit);
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
`;var Ml,Hr,bs=(Hr=class extends T{constructor(){super(),this.isTouching=!1,this.disabled=!1}render(){return m`<div class="ripple-container"></div><slot></slot>`}connectedCallback(){super.connectedCallback(),this.attachEvents(),this.ariaHidden="true"}disconnectedCallback(){super.disconnectedCallback(),this.dettachEvents()}attachEvents(){this.addEventListener("mousedown",this.handleMouseDown),this.addEventListener("touchstart",this.handleTouchStart)}dettachEvents(){this.removeEventListener("mousedown",this.handleMouseDown),this.removeEventListener("touchstart",this.handleTouchStart)}handleMouseDown(t){this.isTouching||!this.canCreateRipple()||this.createRipple(t.clientX,t.clientY,"mouseup")}handleTouchStart(t){if(!this.canCreateRipple())return;this.isTouching=!0;let e=this.createRipple(t.touches[0].clientX,t.touches[0].clientY,"touchend");this.addEventListener("touchmove",e)}canCreateRipple(){return!this.disabled}createRipple(t=null,e=null,n=null){let i=this.rippleContainer.getBoundingClientRect();t??=i.x+this.rippleContainer.clientWidth/2,e??=i.y+this.rippleContainer.clientHeight/2;let s=document.createElement("DIV");s.classList.add("ripple"),this.rippleContainer.appendChild(s),requestAnimationFrame(()=>{let f=this.getBoundingClientRect(),w=Math.max(this.clientWidth,this.clientHeight)*2;Ml._setElementSquareSizeAndCenter(s,w),s.style.setProperty("--_ripple-transition-duration",`${1080*Math.pow(w,.3)}ms`);let _=t-f.left+(w-this.rippleContainer.clientWidth)/2,S=e-f.top+(w-this.rippleContainer.clientHeight)/2;s.style.transformOrigin=`${_}px ${S}px`,s.classList.add(n?"show":"show-forced")});let u=setInterval(()=>{!s.classList.contains("dismiss")&&!s.classList.contains("show-forced")||s.getAnimations().length||(clearInterval(u),s.remove())},1e3);return n?this.createDismissEvent(s,n):null}createDismissEvent(t,e){let n=()=>{t.classList.add("dismiss"),this.isTouching=!1,this.removeEventListener("dragover",n),this.removeEventListener("mouseleave",n),window.removeEventListener(e,n)};return this.addEventListener("dragover",n),this.addEventListener("mouseleave",n),window.addEventListener(e,n),n}static _setElementSquareSizeAndCenter(t,e){t.style.top="50%",t.style.left="50%",t.style.width=`${e}px`,t.style.height=`${e}px`,t.style.marginLeft=`${-e/2}px`,t.style.marginTop=`${-e/2}px`}},Ml=Hr,Hr.styles=Hd,Hr);o([l({type:Boolean,reflect:!0})],bs.prototype,"disabled",void 0);o([C(".ripple-container")],bs.prototype,"rippleContainer",void 0);bs=Ml=o([b("u-ripple")],bs);var De,Vd,jd,$l,Rl,Ol,ql,Bl=class Bl extends T{constructor(){super(...arguments);p(this,De);this.disabled=!1,this.renderRipple=!0,this.innerRole=null}get pathname(){return this.buttonElement?.pathname}render(){let e=typeof this.href=="string"?c(this,De,jd).call(this):c(this,De,Vd).call(this),n=q(this._getContainerClasses());return m`<div class="container ${n}" part="container"> ${e}</div>`}_getContainerClasses(){return{disabled:this.disabled}}static get observedAttributes(){return[...super.observedAttributes,"aria-label","aria-expanded"]}attributeChangedCallback(e,n,i){super.attributeChangedCallback(e,n,i),(e==="aria-label"||e==="aria-expanded")&&this.requestUpdate()}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",c(this,De,Ol))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",c(this,De,Ol))}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}getAriaLabel(){return this.ariaLabel}getAriaSelected(){return null}getAriaExpanded(){let e=this.getAttribute("aria-expanded");return e===null||e==="undefined"?null:e==="true"}_handleClick(e){}};De=new WeakSet,Vd=function(){return m`
      <div class="content">${this._renderContent()}</div>
      <button
        id="button"
        class="button focus-ring"
        ?disabled=${this.disabled}
        aria-label=${this.getAriaLabel()||k}
        aria-labelledby="${this.getAriaLabel()?k:"text"}"
        aria-selected=${mr(c(this,De,Rl).call(this))}
        aria-expanded=${mr(c(this,De,$l).call(this))}
        .role=${this.innerRole}
        type="button"
        @click=${c(this,De,ql)}>
        <u-ripple ?disabled=${this.disabled||!this.renderRipple}></u-ripple>
        <u-elevation></u-elevation>
      </button>
    `},jd=function(){return m`
      <div class="content">${this._renderContent()}</div>
      <a
        id="link"
        class="button"
        href=${this.disabled?k:mr(this.href)}
        aria-disabled=${this.disabled||k}
        aria-label=${this.getAriaLabel()||k}
        aria-labelledby="${this.getAriaLabel()?k:"text"}"
        aria-selected=${mr(c(this,De,Rl).call(this))}
        aria-expanded=${mr(c(this,De,$l).call(this))}
        .role=${this.innerRole}
        target=${this.target||k}
        @click=${c(this,De,ql)}>
        <u-elevation></u-elevation>
        <u-ripple ?disabled=${this.disabled||!this.renderRipple}></u-ripple>
      </a>
    `},$l=function(){let e=this.getAriaExpanded();if(e!==null)return e?"true":"false"},Rl=function(){let e=this.getAriaSelected();if(e!==null)return e?"true":"false"},Ol=function(){this.getAttribute("tabindex")==="0"&&(this.removeAttribute("tabindex"),setTimeout(()=>this.buttonElement?.focus()))},ql=function(e){this.disabled||!vs(this,e)||(e.pointerType||this._ripple.createRipple(),this._handleClick(e))},Bl.styles=[$,Nd];var J=Bl;o([l({type:Boolean,reflect:!0})],J.prototype,"disabled",void 0);o([E()],J.prototype,"renderRipple",void 0);o([l()],J.prototype,"href",void 0);o([l()],J.prototype,"target",void 0);o([l()],J.prototype,"name",void 0);o([C(".button")],J.prototype,"buttonElement",void 0);o([C("u-ripple")],J.prototype,"_ripple",void 0);var Wd=g`
  :host {
    --_morph-duration: var(--u-button-morph-duration, 125ms);
  }

  .container {
    transition: background-color var(--_morph-duration) linear, border-radius var(--_morph-duration) linear, color var(--_morph-duration) linear;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1em;
    height: 1em;
    line-height: 1em;
  }

  ::slotted([slot=icon]) {
    display: inline-block;
  }
`;var Rn,ys=class ys extends J{constructor(){super();p(this,Rn);this.type="submit",this.value="",h(this,Rn,this.attachInternals())}get form(){return a(this,Rn).form}_handleClick(e){if(!(this.type==="button"||this.href)&&this.form){if(a(this,Rn).setFormValue(this.value),this.type==="reset"){this.form.reset();return}this.form.addEventListener("submit",n=>{Object.defineProperty(n,"submitter",{configurable:!0,enumerable:!0,get:()=>this})},{capture:!0,once:!0}),this.form.requestSubmit()}}};Rn=new WeakMap,ys.formAssociated=!0,ys.styles=[J.styles,Wd];var ct=ys;o([l()],ct.prototype,"type",void 0);o([l({reflect:!0})],ct.prototype,"value",void 0);var Gd=g`
  :host {
    --_size: var(--_small-size);
    --_square-shape-corner: var(--_small-square-shape-corner);
    --_pressed-shape-corner: var(--_small-pressed-shape-corner);
    --_icon-size: var(--_small-icon-size);
  }

  .extra-small {
    --_size: var(--_extra-small-size);
    --_icon-size: var(--_extra-small-icon-size);
    --_square-shape-corner: var(--_extra-small-square-shape-corner);
    --_pressed-shape-corner: var(--_extra-small-pressed-shape-corner);
  }

  .medium {
    --_size: var(--_medium-size);
    --_icon-size: var(--_medium-icon-size);
    --_square-shape-corner: var(--_medium-square-shape-corner);
    --_pressed-shape-corner: var(--_medium-pressed-shape-corner);
  }

  .large {
    --_size: var(--_large-size);
    --_icon-size: var(--_large-icon-size);
    --_square-shape-corner: var(--_large-square-shape-corner);
    --_pressed-shape-corner: var(--_large-pressed-shape-corner);
  }

  .extra-large {
    --_size: var(--_extra-large-size);
    --_icon-size: var(--_extra-large-icon-size);
    --_square-shape-corner: var(--_extra-large-square-shape-corner);
    --_pressed-shape-corner: var(--_extra-large-pressed-shape-corner);
  }

  .container {
    height: var(--_size);
  }

  .round {
    border-radius: var(--_round-shape-corner);
  }

  .square {
    border-radius: var(--_square-shape-corner);
  }

  .selected.toggle-shape.round {
    border-radius: var(--_square-shape-corner);
  }
  .selected.toggle-shape.square {
    border-radius: var(--_round-shape-corner);
  }

  :host(:active) .toggle-shape:not(.disabled) {
    border-radius: var(--_pressed-shape-corner);
  }

  .icon-container {
    position: relative;
    width: var(--_icon-size);
    height: 1px;
  }

  .icon-default {
    opacity: 1;
  }

  .icon-selected {
    opacity: 0;
    transition-delay: calc(var(--_morph-duration) / 2);
  }

  .selected.selection-icon .icon-default {
    opacity: 0;
    transition-delay: 0ms;
  }
  .selected.selection-icon .icon-selected {
    opacity: 1;
    transition-delay: calc(var(--_morph-duration) / 2);
  }

  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: var(--_icon-size);
    transform: translate3d(-50%, -50%, 0);
    transition: opacity var(--_morph-duration) linear;
  }
`;var Nl=class Nl extends ct{constructor(){super(),this.toggle=!1,this.toggleShape=!1,this.selected=!1,this.shape="round",this.size="small",this.ariaLabelSelected="",this._hasSelectionIcon=!1,this.size=void 0}get _resolvedSize(){return this.size??(this._compactContext?"extra-small":"small")}_getContainerClasses(){return Q(N({},super._getContainerClasses()),{[this.shape]:!0,[this._resolvedSize]:!0,selected:this.selected,toggle:this.toggle,"toggle-shape":this.toggleShape,"selection-icon":this._hasSelectionIcon})}_handleClick(t){super._handleClick(t),this.toggle&&(this.selected=!this.selected,this.dispatchEvent(new Event("change",{bubbles:!0})))}getAriaLabel(){return this.selected?this.ariaLabelSelected||super.getAriaLabel():super.getAriaLabel()}_handleSelectedIconSlotChange(t){this._hasSelectionIcon=t.target.assignedElements({flatten:!0}).length>0}};Nl.styles=[ct.styles,Gd];var Me=Nl;o([l({type:Boolean,reflect:!0})],Me.prototype,"toggle",void 0);o([l({attribute:"toggle-shape",type:Boolean,reflect:!0})],Me.prototype,"toggleShape",void 0);o([l({type:Boolean,reflect:!0})],Me.prototype,"selected",void 0);o([l({reflect:!0})],Me.prototype,"shape",void 0);o([l({reflect:!0})],Me.prototype,"size",void 0);o([l({attribute:"aria-label-selected"})],Me.prototype,"ariaLabelSelected",void 0);o([ce({context:Go,subscribe:!0}),E()],Me.prototype,"_compactContext",void 0);o([E()],Me.prototype,"_hasSelectionIcon",void 0);var Yo,gt,Fl,Ul,Yd,Xd,On,$t=(On=class extends Me{constructor(){super(...arguments);p(this,gt);p(this,Yo);this.variant="filled",this.color="primary",this.trailingIcon=!1,this._hasIcon=!1,this._hasSelectionLabel=!1,this.animateTextChange=!1}firstUpdated(e){super.firstUpdated(e),h(this,Yo,new ResizeObserver(()=>c(this,gt,Fl).call(this))),a(this,Yo).observe(this._text),c(this,gt,Fl).call(this)}_getContainerClasses(){return Q(N({},super._getContainerClasses()),{[this.color]:!0,[this.variant]:!0,"trailing-icon":this.trailingIcon,"has-icon":this._hasIcon,"has-selection-label":this._hasSelectionLabel})}_renderContent(){let e={animate:this.animateTextChange};return m`
      <span class="icon-container" aria-hidden="true">
        <span class="icon icon-default">
          <slot name="icon" @slotchange="${c(this,gt,Yd)}"></slot>
        </span>
        <span class="icon icon-selected">
          <slot name="icon-selected" @slotchange="${this._handleSelectedIconSlotChange}"></slot>
        </span>
      </span>

      <span class="label-container ${q(e)}">
        <span id="label">
          <span class="label label-default" id=${a(this,gt,Ul)?k:"text"}>
            <slot></slot>
          </span>
          <span class="label label-selected" id=${a(this,gt,Ul)?"text":k}>
            <slot name="label-selected" @slotchange="${c(this,gt,Xd)}"></slot>
          </span>
        </span>
      </span>
    `}},Yo=new WeakMap,gt=new WeakSet,Fl=function(){let e=`${this._text.offsetWidth}px`;this._textWrapper.style.width=e;let n=!!parseInt(e,10);this.animateTextChange!==n&&setTimeout(()=>this.animateTextChange=n)},Ul=function(){return this.selected&&this._hasSelectionLabel},Yd=function(e){this._hasIcon=e.target.assignedElements({flatten:!0}).length>0},Xd=function(e){this._hasSelectionLabel=e.target.assignedElements({flatten:!0}).length>0},On.styles=[Me.styles,Bd],On);o([l()],$t.prototype,"variant",void 0);o([l()],$t.prototype,"color",void 0);o([l({type:Boolean,attribute:"trailing-icon",reflect:!0})],$t.prototype,"trailingIcon",void 0);o([E()],$t.prototype,"_hasIcon",void 0);o([E()],$t.prototype,"_hasSelectionLabel",void 0);o([E()],$t.prototype,"animateTextChange",void 0);o([C(".label-container",!0)],$t.prototype,"_textWrapper",void 0);o([C("#label",!0)],$t.prototype,"_text",void 0);$t=o([b("u-button")],$t);var qn=class{#e;constructor(t){this.message=t}headline(t){return this.#e=t,this}show(){let t=document.createElement("u-dialog");return t.innerHTML=Wo.sanitize(this.message),this._addHeadline(t),this._addButtons(t),this.innerShow(t)}innerShow(t){t.addEventListener("closed",()=>t.remove()),document.body.appendChild(t),t.show()}_addHeadline(t){if(!this.#e)return;let e=document.createElement("span");e.slot="headline",e.innerHTML=Wo.sanitize(this.#e),t.appendChild(e)}_addButton(t,e,n){let i=document.createElement("u-button");e.variant!==void 0&&(i.variant=e.variant),e.color!==void 0&&(i.color=e.color),e.label!==void 0&&(i.textContent=e.label),i.slot="actions",i.addEventListener("click",n),t.appendChild(i)}};var xs=class r extends qn{static create(t){return new r(t)}#e;#t;confirmButton(t){return this.#e=t,this}cancelButton(t){return this.#t=t,this}_addButtons(t){this._addButton(t,N(N({},ur.dialog.confirmDefaults.confirmButton),this.#e),()=>t.close("ok")),this._addButton(t,N(N({},ur.dialog.confirmDefaults.cancelButton),this.#t),()=>t.close("cancel"))}innerShow(t){return super.innerShow(t),new Promise(e=>t.addEventListener("closed",()=>e(t.returnValue==="ok")))}};var Kd=g`
  :host {
    --u-elevation-level: var(--u-dialog-elevation, 3);
    --_icon-size: var(--u-dialog-icon-size, 24px);
    --_divider-color: var(--u-dialog-divider-color, var(--u-color-outline-variant, rgb(202, 196, 208)));
    --_scrim-opacity: var(--u-dialog-scrim-opacity, .32);
    --_padding: var(--u-dialog-padding, 24px);
  }

  :host(:not([has-headline])) .headline {
    display: none;
  }

  :host([has-icon]) .icon {
    display: flex;
  }
  :host([has-icon]) .headline {
    padding-top: 0;
  }
  :host([has-icon]) .headline,
  :host([has-icon]) .container {
    text-align: center;
  }

  :host([has-headline]) .content.top-divider,
  :host([has-icon]) .content.top-divider {
    border-top: 1px solid var(--_divider-color);
    margin-top: -1px;
  }

  .scrim {
    position: fixed;
    inset: 0;
    background-color: var(--u-dialog-scrim-color, var(--u-color-scrim, rgb(0, 0, 0)));
    animation: scrim-show-animation 300ms;
    animation-fill-mode: forwards;
    z-index: -1;
  }

  dialog {
    align-items: center;
    background: none;
    border: none;
    overflow: visible;
    padding: var(--_padding);
    max-width: none;
    max-height: none;
    width: 100%;
    height: 100%;
  }
  dialog[open] {
    display: flex;
  }
  dialog::backdrop {
    background: none;
  }

  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-inline: auto;
    background-color: var(--u-dialog-container-bg-color, var(--u-color-surface-container-high, rgb(236, 230, 240)));
    border-radius: var(--u-dialog-border-radius, var(--u-shape-corner-extra-large, 28px));
    min-width: min(var(--u-dialog-min-width, 280px), 100%);
    max-width: var(--u-dialog-max-width, 560px);
    max-height: min(var(--u-dialog-max-height, 560px), 100%);
    animation: show 250ms cubic-bezier(0.19, 1, 0.22, 1);
    z-index: 1;
  }

  .headline,
  .icon,
  .content,
  .actions {
    padding: var(--_padding);
  }

  .headline {
    font-family: var(--u-font-family, var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"));
    line-height: var(--u-dialog-headline-line-height, var(--u-headline-s-line-height, 2rem));
    font-size: var(--u-dialog-headline-font-size, var(--u-headline-s-font-size, 1.5rem));
    letter-spacing: var(--u-dialog-headline-letter-spacing, var(--u-headline-s-letter-spacing, 0rem));
    font-weight: var(--u-dialog-headline-font-weight, var(--u-headline-s-font-weight, var(--u-font-weight-regular, 400)));
    padding-bottom: var(--u-headline-padding, 16px);
  }

  .icon {
    display: none;
    justify-content: center;
    align-items: center;
    font-size: var(--_icon-size);
    line-height: var(--_icon-size);
    color: var(--u-dialog-icon-color, var(--u-color-secondary, rgb(98, 91, 113)));
    padding-bottom: var(--u-icon-padding, 16px);
  }

  .content {
    font-family: var(--u-font-family, var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"));
    line-height: var(--u-dialog-content-line-height, var(--u-body-m-line-height, 1.25rem));
    font-size: var(--u-dialog-content-font-size, var(--u-body-m-font-size, 0.875rem));
    letter-spacing: var(--u-dialog-content-letter-spacing, var(--u-body-m-letter-spacing, 0.0178571429rem));
    font-weight: var(--u-dialog-content-font-weight, var(--u-body-m-font-weight, var(--u-font-weight-regular, 400)));
    color: var(--u-dialog-content-text-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
    padding-block: 0;
    overflow: auto;
  }
  .content.bottom-divider {
    border-bottom: 1px solid var(--_divider-color);
    margin-bottom: -1px;
  }

  :host(:not([has-headline]):not([has-icon])) .content {
    padding-top: var(--_padding);
  }

  .actions {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap-reverse;
    gap: var(--u-dialog-actions-gap, 8px);
  }

  :host(.closing) .container {
    animation-name: close;
  }
  :host(.closing) .scrim {
    animation-name: scrim-close-animation;
  }

  @keyframes scrim-show-animation {
    from {
      opacity: 0;
    }
    to {
      opacity: var(--_scrim-opacity);
    }
  }
  @keyframes scrim-close-animation {
    from {
      opacity: var(--_scrim-opacity);
    }
    to {
      opacity: 0;
    }
  }
  @keyframes show {
    from {
      transform: scale3d(0, 0, 1);
    }
    to {
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes close {
    from {
      transform: scale3d(1, 1, 1);
    }
    to {
      transform: scale3d(0, 0, 1);
    }
  }
`;var ws=class r extends qn{static create(t){return new r(t)}#e;acknowledgeButton(t){return this.#e=t,this}_addButtons(t){this._addButton(t,N(N({},ur.dialog.alertDefaults.acknowledgeButton),this.#e),()=>t.close())}};var Zd="top-divider",Jd="bottom-divider",Gt,Vr,jr,ue,Hl,Xo,Qd,eu,_s,Cs,tu,ru,nu,Bn,vt=(Bn=class extends T{constructor(){super(...arguments);p(this,ue);p(this,Gt);p(this,Vr);p(this,jr);p(this,Xo);h(this,Gt,!1),this.hasHeadline=!1,this.hasIcon=!1,h(this,jr,null),h(this,Xo,e=>{e.preventDefault(),this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.close()})}get open(){return a(this,Gt)}set open(e){if(a(this,Gt)!==e){if(!e){this.close();return}this.show()}}get returnValue(){return this.dialog.returnValue}get scrollContainer(){return a(this,jr)??this.content}set scrollContainer(e){a(this,jr)?.removeEventListener("scroll",c(this,ue,_s)),h(this,jr,e),e.addEventListener("scroll",c(this,ue,_s).bind(this)),c(this,ue,Cs).call(this)}static message(e){return ws.create(e)}static confirm(e){return xs.create(e)}render(){return m`
      <dialog>
        <div class="scrim" @click=${c(this,ue,nu)}></div>
        <div class="container" part="container">
          <u-elevation></u-elevation>
          <div class="icon" part="icon">
            <slot
              name="icon"
              @slotchange=${c(this,ue,Qd)}>
            </slot>
          </div>
          <div class="headline" part="headline">
            <slot
              name="headline"
              @slotchange=${c(this,ue,eu)}>
            </slot>
          </div>
          <div
            class="content"
            part="content"
            @scroll=${c(this,ue,_s)}>
            <slot></slot>
          </div>
          <div class="actions" part="actions">
            <slot name="actions"></slot>
          </div>
        </div>
      </dialog>`}firstUpdated(e){super.firstUpdated(e),this.dialog.addEventListener("cancel",a(this,Xo))}connectedCallback(){super.connectedCallback(),this.addEventListener("submit",c(this,ue,Hl)),setTimeout(()=>{this.isConnected&&(h(this,Vr,new ResizeObserver(()=>c(this,ue,Cs).call(this))),a(this,Vr).observe(this.content))})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("submit",c(this,ue,Hl)),a(this,Vr)?.disconnect(),h(this,Vr,null)}show(){return ne(this,null,function*(){h(this,Gt,!0),this.setAttribute("open",""),yield this.updateComplete,this.dialog.showModal(),this.querySelector("[autofocus]")?.focus(),this.content.scrollTop=0})}close(){return ne(this,arguments,function*(e=this.returnValue){if(h(this,Gt,!1),this.removeAttribute("open"),yield this.updateComplete,!this.dialog.open||this.open)return;if(!this.dispatchEvent(new Event("close",{cancelable:!0}))){h(this,Gt,!0);return}this.open=!1;let i=new Promise(s=>this.container.addEventListener("animationend",()=>{s(),this.classList.remove("closing"),this.dialog.close(e),this.dispatchEvent(new Event("closed"))},{capture:!0,once:!0}));this.classList.add("closing"),yield i})}},Gt=new WeakMap,Vr=new WeakMap,jr=new WeakMap,ue=new WeakSet,Hl=function(e){let n=e.target,{submitter:i}=e;n.method!=="dialog"||!i||this.close(i.getAttribute("value")??this.returnValue)},Xo=new WeakMap,Qd=function(){this.hasIcon=this.assignedIcons.length>0},eu=function(){this.hasHeadline=this.assignedHeadlines.length>0},_s=function(){c(this,ue,Cs).call(this)},Cs=function(){c(this,ue,ru).call(this),c(this,ue,tu).call(this)},tu=function(){if(this.scrollContainer.scrollTop+this.scrollContainer.offsetHeight>=this.scrollContainer.scrollHeight){this.content?.classList.remove(Jd);return}this.content?.classList.add(Jd)},ru=function(){if(this.scrollContainer.scrollTop){this.content?.classList.add(Zd);return}this.content?.classList.remove(Zd)},nu=function(){this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.close()},Bn.styles=[$,Kd],Bn);o([l({type:Boolean})],vt.prototype,"open",null);o([l({type:Boolean,attribute:"has-headline",reflect:!0})],vt.prototype,"hasHeadline",void 0);o([l({type:Boolean,attribute:"has-icon",reflect:!0})],vt.prototype,"hasIcon",void 0);o([l({attribute:!1})],vt.prototype,"scrollContainer",null);o([C("dialog")],vt.prototype,"dialog",void 0);o([C(".scrim")],vt.prototype,"scrim",void 0);o([C(".content")],vt.prototype,"content",void 0);o([C(".container")],vt.prototype,"container",void 0);o([ee({slot:"headline",flatten:!0})],vt.prototype,"assignedHeadlines",void 0);o([ee({slot:"icon",flatten:!0})],vt.prototype,"assignedIcons",void 0);vt=o([b("u-dialog")],vt);var iu=g`
  :host {
    --u-elevation-level: var(--u-snackbar-elevation-level, 3);
    --_snackbar-margin: var(--u-snackbar-margin, var(--u-spacing-medium, 16px));
    position: fixed;
    inset-inline: 0;
    inset-block-end: 0;
    padding: var(--_snackbar-margin);
    z-index: var(--u-snackbar-z-index, 1070);
    display: flex;
    justify-content: center;
    pointer-events: none;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
    min-height: var(--u-snackbar-height, 48px);
    background-color: var(--u-snackbar-container-color, var(--u-color-inverse-surface, rgb(50, 47, 53)));
    border-radius: var(--u-snackbar-shape, var(--u-shape-corner-extra-small, 4px));
    animation-name: snackbar-fade-in;
    animation-duration: 450ms;
    animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
    animation-fill-mode: forwards;
    min-width: var(--u-snackbar-min-width, 100%);
    max-width: var(--u-snackbar-max-width, 100%);
    pointer-events: auto;
  }
  .container.dismiss {
    animation-name: snackbar-fade-out;
  }

  u-button {
    --u-color-primary: var(--u-color-inverse-primary, );
    margin: var(--u-snackbar-action-margin, var(--u-spacing-extra-small, 4px));
  }

  u-icon-button {
    color: var(--u-color-on-inverse-surface, rgb(245, 239, 247));
    margin-inline: var(--u-snackbar-close-button-margin, var(--u-spacing-extra-small, 4px));
  }

  .message-container {
    flex: 1 1 auto;
    overflow: hidden;
    color: var(--u-snackbar-message-color, var(--u-color-on-inverse-surface, rgb(245, 239, 247)));
    padding: var(--u-snackbar-text-margin, var(--u-spacing-medium, 16px));
    line-height: 18px;
  }

  .message {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media (min-width: 840px) {
    :host {
      --_snackbar-margin: var(--u-snackbar-margin, var(--u-spacing-large, 24px));
    }
    .container {
      min-width: var(--u-snackbar-min-width, 344px);
    }
  }
  @keyframes snackbar-fade-in {
    0% {
      opacity: 0;
      transform: scale3d(0.5, 0.5, 1);
    }
    100% {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes snackbar-fade-out {
    0% {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
    100% {
      opacity: 0;
      transform: scale3d(0.5, 0.5, 1);
    }
  }
`;var ou=g`
  :host {
    --_round-shape-corner: var(--u-icon-button-round-shape-corner, calc(var(--_size) / 2));
    --_square-shape-corner: var(--u-icon-button-square-shape-corner, 12px);
    --_extra-small-size: var(--u-icon-button-extra-small-size, 32px);
    --_small-size: var(--u-icon-button-small-size, 40px);
    --_medium-size: var(--u-icon-button-medium-size, 56px);
    --_large-size: var(--u-icon-button-large-size, 96px);
    --_extra-large-size: var(--u-icon-button-extra-large-size, 136px);
    --_extra-small-narrow-width: var(--u-icon-button-extra-small-narrow-width, 28px);
    --_small-narrow-width: var(--u-icon-button-small-narrow-width, 32px);
    --_medium-narrow-width: var(--u-icon-button-medium-narrow-width, 48px);
    --_large-narrow-width: var(--u-icon-button-large-narrow-width, 64px);
    --_extra-large-narrow-width: var(--u-icon-button-extra-large-narrow-width, 104px);
    --_extra-small-wide-width: var(--u-icon-button-extra-small-wide-width, 40px);
    --_small-wide-width: var(--u-icon-button-small-wide-width, 52px);
    --_medium-wide-width: var(--u-icon-button-medium-wide-width, 72px);
    --_large-wide-width: var(--u-icon-button-large-wide-width, 128px);
    --_extra-large-wide-width: var(--u-icon-button-extra-large-wide-width, 184px);
    --_extra-small-icon-size: var(--u-icon-button-extra-small-icon-size, 1.25rem);
    --_small-icon-size: var(--u-icon-button-small-icon-size, 1.5rem);
    --_medium-icon-size: var(--u-icon-button-medium-icon-size, 1.5rem);
    --_large-icon-size: var(--u-icon-button-large-icon-size, 2rem);
    --_extra-large-icon-size: var(--u-icon-button-extra-large-icon-size, 2.5rem);
    --_extra-small-square-shape-corner: var(--u-icon-button-extra-small-square-shape-corner, 12px);
    --_small-square-shape-corner: var(--u-icon-button-small-square-shape-corner, 12px);
    --_medium-square-shape-corner: var(--u-icon-button-medium-square-shape-corner, 16px);
    --_large-square-shape-corner: var(--u-icon-button-large-square-shape-corner, 28px);
    --_extra-large-square-shape-corner: var(--u-icon-button-extra-large-square-shape-corner, 28px);
    --_extra-small-pressed-shape-corner: var(--u-icon-button-extra-small-pressed-shape-corner, 8px);
    --_small-pressed-shape-corner: var(--u-icon-button-small-pressed-shape-corner, 8px);
    --_medium-pressed-shape-corner: var(--u-icon-button-medium-pressed-shape-corner, 12px);
    --_large-pressed-shape-corner: var(--u-icon-button-large-pressed-shape-corner, 16px);
    --_extra-large-pressed-shape-corner: var(--u-icon-button-extra-large-pressed-shape-corner, 16px);
    --_narrow-width: var(--_small-narrow-width);
    --_wide-width: var(--_small-wide-width);
  }

  .container {
    width: var(--_size);
    height: var(--_size);
    font-family: var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
  }

  .extra-small {
    --_narrow-width: var(--_extra-small-narrow-width);
    --_wide-width: var(--_extra-small-wide-width);
  }

  .medium {
    --_narrow-width: var(--_medium-narrow-width);
    --_wide-width: var(--_medium-wide-width);
  }

  .large {
    --_narrow-width: var(--_large-narrow-width);
    --_wide-width: var(--_large-wide-width);
  }

  .extra-large {
    --_narrow-width: var(--_extra-large-narrow-width);
    --_wide-width: var(--_extra-large-wide-width);
  }

  .narrow {
    width: var(--_narrow-width);
  }

  .wide {
    width: var(--_wide-width);
  }

  .filled, .filled.selected {
    background-color: var(--u-filled-icon-button-container-color, var(--u-color-primary, rgb(103, 80, 164)));
    color: var(--u-filled-icon-button-text-color, var(--u-color-on-primary, rgb(255, 255, 255)));
  }
  .filled.toggle {
    background-color: var(--u-filled-icon-button-unselected-container-color, var(--u-color-surface-container, rgb(243, 237, 247)));
    color: var(--u-filled-icon-button-unselected-text-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
  }

  .tonal {
    background-color: var(--u-total-icon-button-unselected-container-color, var(--u-color-secondary-container, rgb(232, 222, 248)));
    color: var(--u-tonal-icon-button-unselected-text-color, var(--u-color-on-secondary-container, rgb(29, 25, 43)));
  }
  .tonal.selected {
    background-color: var(--u-tonal-icon-button-container-color, var(--u-color-secondary, rgb(98, 91, 113)));
    color: var(--u-tonal-icon-button-text-color, var(--u-color-on-secondary, rgb(255, 255, 255)));
  }

  .standard {
    color: var(--u-standard-icon-button-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
  }
  .standard.selected {
    color: var(--u-standard-icon-button-selected-text-color, var(--u-color-primary, rgb(103, 80, 164)));
    background-color: var(--u-standard-icon-button-selected-container-color, transparent);
  }

  .outlined {
    color: var(--u-outlined-icon-button-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
  }
  .outlined, .outlined.selected.disabled {
    border: 1px solid var(--u-color-outline-variant, rgb(202, 196, 208));
  }
  .outlined.selected {
    border: none;
    background-color: var(--u-outlined-icon-button-selected-container-color, var(--u-color-inverse-surface, rgb(50, 47, 53)));
    color: var(--u-outlined-icon-button-selected-text-color, var(--u-color-on-inverse-surface, rgb(245, 239, 247)));
  }
  .outlined.disabled {
    color: var(--u-outlined-icon-button-disabled-icon-color, color-mix(in srgb, var(--u-color-on-surface, rgb(29, 27, 32)) var(--u-outlined-icon-button-disabled-border-opacity, 10%), transparent)) !important;
  }
`;var Nn,ks=(Nn=class extends Me{constructor(){super(...arguments),this.variant="standard",this.width="default"}_getContainerClasses(){return Q(N({},super._getContainerClasses()),{[this.variant]:!0,[this.width]:!0})}_renderContent(){return m`
      <span class="icon-container" aria-hidden="true">
        <span class="icon icon-default">
          <slot></slot>
        </span>
        <span class="icon icon-selected">
          <slot name="selected" @slotchange="${this._handleSelectedIconSlotChange}"></slot>
        </span>
      </span>
    `}},Nn.styles=[Me.styles,ou],Nn);o([l()],ks.prototype,"variant",void 0);o([l()],ks.prototype,"width",void 0);ks=o([b("u-icon-button")],ks);var Se,au=(function(r){return r[r.short=2500]="short",r[r.long=5e3]="long",r[r.infinite=-1]="infinite",r})(au||{}),Rt,fr=(Rt=class extends T{constructor(){super(...arguments),this.message="",this.action="",this.showClose=!1,this._dismissed=!1,this._canDismiss=!1}firstUpdated(t){super.firstUpdated(t);let e=()=>{this.container.removeEventListener("animationend",e),Se.minDisplayTime>0?setTimeout(()=>this._canDismiss=!0,Se.minDisplayTime):this._canDismiss=!0};this.container.addEventListener("animationend",e)}render(){let t={dismiss:this._dismissed&&this._canDismiss};if(t.dismiss){let e=()=>{this.container.removeEventListener("animationend",e),this.remove(),Se._showNext()};this.container.addEventListener("animationend",e)}return m`
      <div class="container ${q(t)}" part="container">
        <u-elevation></u-elevation>
        <div class="message-container" part="message-container">
          <div class="message" part="message">${this.message}</div>
        </div>
        ${this.renderButton()} ${this.renderCloseButton()}
      </div>
    `}renderButton(){return this.action?m`
          <u-button
            variant="text"
            @click=${this.actionClick.bind(this)}
            part="action"
          >${this.action}
          </u-button>
        `:k}renderCloseButton(){return this.showClose?m`
          <u-icon-button
            @click=${this.dismiss.bind(this)}
            part="close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 -960 960 960"
              width="1em"
              fill="currentColor">
              <path
                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </u-icon-button>
        `:k}actionClick(t){t.stopPropagation();let e=new CustomEvent("actionClick",{cancelable:!0});this.dispatchEvent(e),!e.defaultPrevented&&this.dismiss()}dismiss(){this._dismissed||(this._dismissed=!0)}static show(t){typeof t=="string"&&(t={message:t}),t.duration??=au.long;let e=this.createSnackbar(t);return Se._queue.push(e),Se._lastEnqueued?.dismiss(),Se._lastEnqueued=e,Se._consuming||Se._consumeQueue(),e}static _consumeQueue(){Se._queue.length&&(Se._consuming=!0,Se._showNext())}static _showNext(){if(!Se._queue.length){Se._consuming=!1,Se._lastEnqueued=null;return}let t=Se._queue[0];Se._queue=Se._queue.slice(1),document.body.appendChild(t),t.duration!==-1&&setTimeout(()=>t.dismiss(),t.duration)}static createSnackbar(t){let e=document.createElement("u-snackbar");return e.message=t.message,e.action=t.action||"",e.showClose=t.showClose,e.duration=t.duration,e}},Se=Rt,Rt.styles=[$,iu],Rt.minDisplayTime=1500,Rt._queue=[],Rt._lastEnqueued=null,Rt);o([l({reflect:!0})],fr.prototype,"message",void 0);o([l({reflect:!0})],fr.prototype,"action",void 0);o([l({type:Boolean,attribute:"show-close",reflect:!0})],fr.prototype,"showClose",void 0);o([E()],fr.prototype,"_dismissed",void 0);o([E()],fr.prototype,"_canDismiss",void 0);o([C(".container",!0)],fr.prototype,"container",void 0);fr=Se=o([b("u-snackbar")],fr);var su=r=>{let[t,e]=r.split("-");return e?`${t.toLowerCase()}-${e.toUpperCase()}`:t.toLowerCase()};(function(){"weekInfo"in Intl.Locale.prototype&&typeof Intl.Locale.prototype.getWeekInfo!="function"&&(Intl.Locale.prototype.getWeekInfo=function(){return this.weekInfo}),typeof Intl.Locale.prototype.getWeekInfo!="function"&&import("./chunk-LU6XHYHH.js").then(({weekInfoData:r})=>{Intl.Locale.prototype.getWeekInfo=function(){var t;let e=this.toString(),n=su(e),i=r[n];if(!i){let s=n.split("-")[0];i=r[s]}return i||(i=(t=Object.entries(r).find(([s])=>su(s)===n))==null?void 0:t[1]),i}})})();var lu=g`
  :host {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    contain: layout paint style;
    isolation: isolate;
    background-color: var(--u-scaffold-container-color, var(--u-color-body, transparent));
    container-type: inline-size;
    container-name: u-scaffold;
  }

  @media (min-width: 840px) {
    :host {
      --u-pane-padding: 16px;
    }
  }
  .layout {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 0;
  }

  .top-bar-row,
  .bottom-bar-row {
    position: relative;
    flex: 0 0 auto;
  }

  .body-row {
    position: relative;
    display: flex;
    flex-direction: row;
    gap: var(--u-pane-gap, 16px);
    flex: 1 1 auto;
    min-height: 0;
    width: 100%;
    padding: 0 var(--u-pane-padding, 0);
    padding-block-end: var(--u-pane-padding, 0);
  }

  ::slotted(:not(u-pane)) {
    flex: 1 1 0;
    min-width: 0;
    min-height: 0;
  }

  .fab {
    position: absolute;
    inset-inline-end: var(--u-scaffold-fab-inline-offset, 16px);
    inset-block-end: calc(var(--u-scaffold-fab-block-offset, 16px) + var(--_u-scaffold-bottom-bar-height, 0px));
    z-index: 5;
    pointer-events: none;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    --u-fab-menu-toggle-margin: 0;
  }

  .fab ::slotted(u-fab) {
    pointer-events: auto;
  }
`;var Wr,Gr,Fn,Es,Un,Ko,Hn,Vl=(Hn=class extends T{constructor(){super(...arguments);p(this,Wr,null);p(this,Gr,null);p(this,Fn,()=>{let e=Array.from(this.children),n=-1,i=[];for(let f=0;f<e.length;f++){let v=e[f],w=v.getAttribute("slot");w==="top-bar"||w==="bottom-bar"||w==="fab"||(v.tagName==="U-PANE"?i.push(f):n===-1&&(n=f))}let s=n!==-1,u=i.length>1?i[i.length-1]:-1;for(let f of i){let v;s?v=f>n?"end":"start":v=f===u?"end":"start";let w=e[f];w.getAttribute("data-align")!==v&&w.setAttribute("data-align",v)}});p(this,Es,e=>{a(this,Ko).call(this,e),a(this,Un).call(this)});p(this,Un,()=>{if(!this._bottomBar)return;let e=this._bottomBar.offsetHeight;this.style.setProperty("--_u-scaffold-bottom-bar-height",`${e}px`)});p(this,Ko,e=>{let n=e.target;for(let i of n.assignedElements({flatten:!0})){let s=i.tagName;if(s!=="U-TOP-APP-BAR"&&s!=="U-NAVIGATION-BAR")continue;let u=i;u.position==="fixed"&&(u.position="absolute")}})}render(){return m`
      <div class="layout">
        <div class="top-bar-row" part="top-bar">
          <slot name="top-bar" @slotchange=${a(this,Ko)}></slot>
        </div>
        <div class="body-row" part="body-row">
          <slot @slotchange=${a(this,Fn)}></slot>
        </div>
        <div class="bottom-bar-row" part="bottom-bar">
          <slot
            name="bottom-bar"
            @slotchange=${a(this,Es)}></slot>
        </div>
      </div>
      <div class="fab" part="fab">
        <slot name="fab"></slot>
      </div>
    `}firstUpdated(e){super.firstUpdated(e),a(this,Un).call(this),typeof ResizeObserver<"u"&&(h(this,Wr,new ResizeObserver(()=>a(this,Un).call(this))),a(this,Wr).observe(this._bottomBar)),a(this,Fn).call(this),h(this,Gr,new MutationObserver(()=>a(this,Fn).call(this))),a(this,Gr).observe(this,{childList:!0,subtree:!1})}disconnectedCallback(){super.disconnectedCallback(),a(this,Wr)?.disconnect(),h(this,Wr,null),a(this,Gr)?.disconnect(),h(this,Gr,null)}},Wr=new WeakMap,Gr=new WeakMap,Fn=new WeakMap,Es=new WeakMap,Un=new WeakMap,Ko=new WeakMap,Hn.styles=[$,lu],Hn);o([C(".bottom-bar-row",!0)],Vl.prototype,"_bottomBar",void 0);Vl=o([b("u-scaffold")],Vl);var cu=g`
  :host {
    display: block;
    min-height: 0;
    --u-pane-transition: 300ms cubic-bezier(0.19, 1, 0.22, 1);
    --_u-pane-variant-bg: transparent;
    --_u-pane-variant-radius: 0;
    --_u-pane-bg-color: var(--_u-pane-variant-bg);
    --_u-pane-shape-corner: var(--_u-pane-variant-radius);
    --_u-pane-box-shadow: none;
    --_u-pane-drawer-width: 100%;
    --_u-pane-slide-distance: -100%;
    --_u-pane-shape-corner-end: 0;
  }

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow: hidden;
    box-sizing: border-box;
    background-color: var(--_u-pane-bg-color);
    border-radius: var(--_u-pane-shape-corner);
    box-shadow: var(--_u-pane-box-shadow);
  }

  .header {
    flex: 0 0 auto;
  }

  .content {
    flex: 1 1 auto;
    min-height: 0;
    overflow: auto;
  }

  :host([variant=filled]) {
    --_u-pane-variant-bg: var(--u-pane-filled-bg-color,
      var(--u-color-surface-container-low, rgb(247, 242, 250)));
    --_u-pane-variant-radius: var(--u-pane-filled-shape-corner,
      var(--u-shape-corner-medium, 12px));
  }

  :host([variant=transparent]) {
    --_u-pane-variant-bg: transparent;
    --_u-pane-variant-radius: 0;
  }

  @media (max-width: 839.98px) {
    :host([variant=filled]) {
      --_u-pane-variant-radius: 0;
    }
  }
  .scrim {
    position: fixed;
    inset: 0;
    background-color: var(--u-pane-scrim-color, var(--u-color-scrim, rgb(0, 0, 0)));
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--u-pane-transition);
    display: none;
  }

  :host([mode=fixed]) {
    display: block;
    position: relative;
    flex: 0 1 auto;
    height: auto;
    inset: auto;
    z-index: auto;
    pointer-events: auto;
    opacity: 1;
    transition: none;
    --_u-pane-bg-color: var(--_u-pane-variant-bg);
    --_u-pane-shape-corner: var(--_u-pane-variant-radius);
    --_u-pane-box-shadow: none;
  }

  :host([mode=fixed]) .container {
    position: relative;
    inset: auto;
    width: auto;
    transition: none;
    opacity: 1;
  }

  :host([mode=fixed]) .scrim {
    display: none;
  }

  :host([mode=collapsible]) {
    display: block;
    position: relative;
    flex: 0 1 auto;
    height: auto;
    inset: auto;
    z-index: auto;
    pointer-events: auto;
    opacity: 1;
    margin-inline-start: 0;
    margin-inline-end: 0;
    transition: margin-inline-start var(--u-pane-transition), margin-inline-end var(--u-pane-transition), display var(--u-pane-transition) allow-discrete;
    --_u-pane-bg-color: var(--_u-pane-variant-bg);
    --_u-pane-shape-corner: var(--_u-pane-variant-radius);
    --_u-pane-box-shadow: none;
    --_u-pane-collapsed-offset: calc(
      -1 * (var(--u-pane-width, 100%) + var(--u-pane-gap, 16px))
    );
  }

  :host([mode=collapsible]:where(:not([open]))) {
    margin-inline-start: var(--_u-pane-collapsed-offset);
    display: none;
  }

  :host([mode=collapsible]:where([data-align=end]:not([open]))) {
    margin-inline-start: 0;
    margin-inline-end: var(--_u-pane-collapsed-offset);
  }

  @starting-style {
    :host([mode=collapsible]:where([open])) {
      margin-inline-start: var(--_u-pane-collapsed-offset);
    }
    :host([mode=collapsible]:where([data-align=end][open])) {
      margin-inline-start: 0;
      margin-inline-end: var(--_u-pane-collapsed-offset);
    }
  }
  :host([mode=collapsible]) .container {
    position: relative;
    inset: auto;
    width: auto;
    transition: none;
    opacity: 1;
  }

  :host([mode=collapsible]) .scrim {
    display: none;
  }

  :host([mode=sidebar]) {
    display: block;
    position: fixed;
    inset: 0;
    z-index: var(--u-pane-z-index, 1030);
    pointer-events: none;
    flex: none;
    width: auto;
    height: auto;
    opacity: 1;
    transition: none;
    --_u-pane-bg-color: var(--u-pane-overlay-bg-color,
      var(--u-color-surface-container-low, rgb(247, 242, 250)));
    --_u-pane-shape-corner: var(--u-pane-overlay-corner-shape, var(--u-shape-corner-large, 16px));
    --_u-pane-box-shadow: 0 8px 24px rgba(0, 0, 0, .18);
    --_u-pane-drawer-width: min(var(--u-pane-mobile-width, 360px), 85%);
    --_u-pane-slide-distance: calc(var(--_u-pane-drawer-width) * -1);
  }

  :host([mode=sidebar]) .container {
    position: absolute;
    inset-block: 0;
    inset-inline-start: var(--_u-pane-slide-distance);
    inset-inline-end: auto;
    width: var(--_u-pane-drawer-width);
    transition: inset var(--u-pane-transition);
    pointer-events: auto;
    border-radius: var(--_u-pane-shape-corner);
  }

  :host([mode=sidebar]:where([open])) .container {
    inset-inline-start: 0;
  }

  :host([mode=sidebar]:where([data-align=end])) .container {
    inset-inline-start: auto;
    inset-inline-end: var(--_u-pane-slide-distance);
    border-start-end-radius: 0;
    border-end-end-radius: 0;
    border-start-start-radius: var(--_u-pane-shape-corner-end);
    border-end-start-radius: var(--_u-pane-shape-corner-end);
  }

  :host([mode=sidebar]:where([data-align=end][open])) .container {
    inset-inline-end: 0;
  }

  :host([mode=sidebar]) .scrim {
    display: block;
  }

  :host([mode=sidebar]:where([open])) .scrim {
    opacity: var(--u-pane-scrim-opacity, 0.4);
    pointer-events: auto;
  }

  :host([mode=fullscreen]) {
    display: block;
    position: fixed;
    inset: 0;
    z-index: var(--u-pane-fullscreen-z-index, 1040);
    pointer-events: none;
    flex: none;
    width: auto;
    height: auto;
    opacity: 1;
    transition: none;
    --_u-pane-bg-color: var(--u-pane-overlay-bg-color,
      var(--u-color-surface-container-lowest, rgb(255, 255, 255)));
    --_u-pane-shape-corner: 0;
    --_u-pane-shape-corner-end: 0;
    --_u-pane-box-shadow: none;
    --_u-pane-drawer-width: 100%;
    --_u-pane-slide-distance: -100%;
  }

  :host([mode=fullscreen]) .container {
    position: absolute;
    inset-block: 0;
    inset-inline-start: var(--_u-pane-slide-distance);
    inset-inline-end: auto;
    width: 100%;
    transition: inset var(--u-pane-transition);
    pointer-events: auto;
  }

  :host([mode=fullscreen]:where([open])) .container {
    inset-inline-start: 0;
  }

  :host([mode=fullscreen]:where([data-align=end])) .container {
    inset-inline-start: auto;
    inset-inline-end: var(--_u-pane-slide-distance);
  }

  :host([mode=fullscreen]:where([data-align=end][open])) .container {
    inset-inline-end: 0;
  }

  :host([mode=fullscreen]) .scrim {
    display: none;
  }

  @media (min-width: 600px) {
    :host(:where(:not([query-context=container]))[mode-sm=fixed]) {
      display: block;
      position: relative;
      flex: 0 1 auto;
      height: auto;
      inset: auto;
      z-index: auto;
      pointer-events: auto;
      opacity: 1;
      transition: none;
      --_u-pane-bg-color: var(--_u-pane-variant-bg);
      --_u-pane-shape-corner: var(--_u-pane-variant-radius);
      --_u-pane-box-shadow: none;
    }
    :host(:where(:not([query-context=container]))[mode-sm=fixed]) .container {
      position: relative;
      inset: auto;
      width: auto;
      transition: none;
      opacity: 1;
    }
    :host(:where(:not([query-context=container]))[mode-sm=fixed]) .scrim {
      display: none;
    }
    :host(:where(:not([query-context=container]))[mode-sm=collapsible]) {
      display: block;
      position: relative;
      flex: 0 1 auto;
      height: auto;
      inset: auto;
      z-index: auto;
      pointer-events: auto;
      opacity: 1;
      margin-inline-start: 0;
      margin-inline-end: 0;
      transition: margin-inline-start var(--u-pane-transition), margin-inline-end var(--u-pane-transition), display var(--u-pane-transition) allow-discrete;
      --_u-pane-bg-color: var(--_u-pane-variant-bg);
      --_u-pane-shape-corner: var(--_u-pane-variant-radius);
      --_u-pane-box-shadow: none;
      --_u-pane-collapsed-offset: calc(
        -1 * (var(--u-pane-width, 100%) + var(--u-pane-gap, 16px))
      );
    }
    :host(:where(:not([query-context=container]))[mode-sm=collapsible]:where(:not([open]))) {
      margin-inline-start: var(--_u-pane-collapsed-offset);
      display: none;
    }
    :host(:where(:not([query-context=container]))[mode-sm=collapsible]:where([data-align=end]:not([open]))) {
      margin-inline-start: 0;
      margin-inline-end: var(--_u-pane-collapsed-offset);
    }
    @starting-style {
      :host(:where(:not([query-context=container]))[mode-sm=collapsible]:where([open])) {
        margin-inline-start: var(--_u-pane-collapsed-offset);
      }
      :host(:where(:not([query-context=container]))[mode-sm=collapsible]:where([data-align=end][open])) {
        margin-inline-start: 0;
        margin-inline-end: var(--_u-pane-collapsed-offset);
      }
    }
    :host(:where(:not([query-context=container]))[mode-sm=collapsible]) .container {
      position: relative;
      inset: auto;
      width: auto;
      transition: none;
      opacity: 1;
    }
    :host(:where(:not([query-context=container]))[mode-sm=collapsible]) .scrim {
      display: none;
    }
    :host(:where(:not([query-context=container]))[mode-sm=sidebar]) {
      display: block;
      position: fixed;
      inset: 0;
      z-index: var(--u-pane-z-index, 1030);
      pointer-events: none;
      flex: none;
      width: auto;
      height: auto;
      opacity: 1;
      transition: none;
      --_u-pane-bg-color: var(--u-pane-overlay-bg-color,
        var(--u-color-surface-container-low, rgb(247, 242, 250)));
      --_u-pane-shape-corner: var(--u-pane-overlay-corner-shape, var(--u-shape-corner-large, 16px));
      --_u-pane-box-shadow: 0 8px 24px rgba(0, 0, 0, .18);
      --_u-pane-drawer-width: min(var(--u-pane-mobile-width, 360px), 85%);
      --_u-pane-slide-distance: calc(var(--_u-pane-drawer-width) * -1);
    }
    :host(:where(:not([query-context=container]))[mode-sm=sidebar]) .container {
      position: absolute;
      inset-block: 0;
      inset-inline-start: var(--_u-pane-slide-distance);
      inset-inline-end: auto;
      width: var(--_u-pane-drawer-width);
      transition: inset var(--u-pane-transition);
      pointer-events: auto;
      border-radius: var(--_u-pane-shape-corner);
    }
    :host(:where(:not([query-context=container]))[mode-sm=sidebar]:where([open])) .container {
      inset-inline-start: 0;
    }
    :host(:where(:not([query-context=container]))[mode-sm=sidebar]:where([data-align=end])) .container {
      inset-inline-start: auto;
      inset-inline-end: var(--_u-pane-slide-distance);
      border-start-end-radius: 0;
      border-end-end-radius: 0;
      border-start-start-radius: var(--_u-pane-shape-corner-end);
      border-end-start-radius: var(--_u-pane-shape-corner-end);
    }
    :host(:where(:not([query-context=container]))[mode-sm=sidebar]:where([data-align=end][open])) .container {
      inset-inline-end: 0;
    }
    :host(:where(:not([query-context=container]))[mode-sm=sidebar]) .scrim {
      display: block;
    }
    :host(:where(:not([query-context=container]))[mode-sm=sidebar]:where([open])) .scrim {
      opacity: var(--u-pane-scrim-opacity, 0.4);
      pointer-events: auto;
    }
    :host(:where(:not([query-context=container]))[mode-sm=fullscreen]) {
      display: block;
      position: fixed;
      inset: 0;
      z-index: var(--u-pane-fullscreen-z-index, 1040);
      pointer-events: none;
      flex: none;
      width: auto;
      height: auto;
      opacity: 1;
      transition: none;
      --_u-pane-bg-color: var(--u-pane-overlay-bg-color,
        var(--u-color-surface-container-lowest, rgb(255, 255, 255)));
      --_u-pane-shape-corner: 0;
      --_u-pane-shape-corner-end: 0;
      --_u-pane-box-shadow: none;
      --_u-pane-drawer-width: 100%;
      --_u-pane-slide-distance: -100%;
    }
    :host(:where(:not([query-context=container]))[mode-sm=fullscreen]) .container {
      position: absolute;
      inset-block: 0;
      inset-inline-start: var(--_u-pane-slide-distance);
      inset-inline-end: auto;
      width: 100%;
      transition: inset var(--u-pane-transition);
      pointer-events: auto;
    }
    :host(:where(:not([query-context=container]))[mode-sm=fullscreen]:where([open])) .container {
      inset-inline-start: 0;
    }
    :host(:where(:not([query-context=container]))[mode-sm=fullscreen]:where([data-align=end])) .container {
      inset-inline-start: auto;
      inset-inline-end: var(--_u-pane-slide-distance);
    }
    :host(:where(:not([query-context=container]))[mode-sm=fullscreen]:where([data-align=end][open])) .container {
      inset-inline-end: 0;
    }
    :host(:where(:not([query-context=container]))[mode-sm=fullscreen]) .scrim {
      display: none;
    }
  }
  @container (min-width: 600px) {
    :host(:where([query-context=container])[mode-sm=fixed]) {
      display: block;
      position: relative;
      flex: 0 1 auto;
      height: auto;
      inset: auto;
      z-index: auto;
      pointer-events: auto;
      opacity: 1;
      transition: none;
      --_u-pane-bg-color: var(--_u-pane-variant-bg);
      --_u-pane-shape-corner: var(--_u-pane-variant-radius);
      --_u-pane-box-shadow: none;
    }
    :host(:where([query-context=container])[mode-sm=fixed]) .container {
      position: relative;
      inset: auto;
      width: auto;
      transition: none;
      opacity: 1;
    }
    :host(:where([query-context=container])[mode-sm=fixed]) .scrim {
      display: none;
    }
    :host(:where([query-context=container])[mode-sm=collapsible]) {
      display: block;
      position: relative;
      flex: 0 1 auto;
      height: auto;
      inset: auto;
      z-index: auto;
      pointer-events: auto;
      opacity: 1;
      margin-inline-start: 0;
      margin-inline-end: 0;
      transition: margin-inline-start var(--u-pane-transition), margin-inline-end var(--u-pane-transition), display var(--u-pane-transition) allow-discrete;
      --_u-pane-bg-color: var(--_u-pane-variant-bg);
      --_u-pane-shape-corner: var(--_u-pane-variant-radius);
      --_u-pane-box-shadow: none;
      --_u-pane-collapsed-offset: calc(
        -1 * (var(--u-pane-width, 100%) + var(--u-pane-gap, 16px))
      );
    }
    :host(:where([query-context=container])[mode-sm=collapsible]:where(:not([open]))) {
      margin-inline-start: var(--_u-pane-collapsed-offset);
      display: none;
    }
    :host(:where([query-context=container])[mode-sm=collapsible]:where([data-align=end]:not([open]))) {
      margin-inline-start: 0;
      margin-inline-end: var(--_u-pane-collapsed-offset);
    }
    @starting-style {
      :host(:where([query-context=container])[mode-sm=collapsible]:where([open])) {
        margin-inline-start: var(--_u-pane-collapsed-offset);
      }
      :host(:where([query-context=container])[mode-sm=collapsible]:where([data-align=end][open])) {
        margin-inline-start: 0;
        margin-inline-end: var(--_u-pane-collapsed-offset);
      }
    }
    :host(:where([query-context=container])[mode-sm=collapsible]) .container {
      position: relative;
      inset: auto;
      width: auto;
      transition: none;
      opacity: 1;
    }
    :host(:where([query-context=container])[mode-sm=collapsible]) .scrim {
      display: none;
    }
    :host(:where([query-context=container])[mode-sm=sidebar]) {
      display: block;
      position: fixed;
      inset: 0;
      z-index: var(--u-pane-z-index, 1030);
      pointer-events: none;
      flex: none;
      width: auto;
      height: auto;
      opacity: 1;
      transition: none;
      --_u-pane-bg-color: var(--u-pane-overlay-bg-color,
        var(--u-color-surface-container-low, rgb(247, 242, 250)));
      --_u-pane-shape-corner: var(--u-pane-overlay-corner-shape, var(--u-shape-corner-large, 16px));
      --_u-pane-box-shadow: 0 8px 24px rgba(0, 0, 0, .18);
      --_u-pane-drawer-width: min(var(--u-pane-mobile-width, 360px), 85%);
      --_u-pane-slide-distance: calc(var(--_u-pane-drawer-width) * -1);
    }
    :host(:where([query-context=container])[mode-sm=sidebar]) .container {
      position: absolute;
      inset-block: 0;
      inset-inline-start: var(--_u-pane-slide-distance);
      inset-inline-end: auto;
      width: var(--_u-pane-drawer-width);
      transition: inset var(--u-pane-transition);
      pointer-events: auto;
      border-radius: var(--_u-pane-shape-corner);
    }
    :host(:where([query-context=container])[mode-sm=sidebar]:where([open])) .container {
      inset-inline-start: 0;
    }
    :host(:where([query-context=container])[mode-sm=sidebar]:where([data-align=end])) .container {
      inset-inline-start: auto;
      inset-inline-end: var(--_u-pane-slide-distance);
      border-start-end-radius: 0;
      border-end-end-radius: 0;
      border-start-start-radius: var(--_u-pane-shape-corner-end);
      border-end-start-radius: var(--_u-pane-shape-corner-end);
    }
    :host(:where([query-context=container])[mode-sm=sidebar]:where([data-align=end][open])) .container {
      inset-inline-end: 0;
    }
    :host(:where([query-context=container])[mode-sm=sidebar]) .scrim {
      display: block;
    }
    :host(:where([query-context=container])[mode-sm=sidebar]:where([open])) .scrim {
      opacity: var(--u-pane-scrim-opacity, 0.4);
      pointer-events: auto;
    }
    :host(:where([query-context=container])[mode-sm=fullscreen]) {
      display: block;
      position: fixed;
      inset: 0;
      z-index: var(--u-pane-fullscreen-z-index, 1040);
      pointer-events: none;
      flex: none;
      width: auto;
      height: auto;
      opacity: 1;
      transition: none;
      --_u-pane-bg-color: var(--u-pane-overlay-bg-color,
        var(--u-color-surface-container-lowest, rgb(255, 255, 255)));
      --_u-pane-shape-corner: 0;
      --_u-pane-shape-corner-end: 0;
      --_u-pane-box-shadow: none;
      --_u-pane-drawer-width: 100%;
      --_u-pane-slide-distance: -100%;
    }
    :host(:where([query-context=container])[mode-sm=fullscreen]) .container {
      position: absolute;
      inset-block: 0;
      inset-inline-start: var(--_u-pane-slide-distance);
      inset-inline-end: auto;
      width: 100%;
      transition: inset var(--u-pane-transition);
      pointer-events: auto;
    }
    :host(:where([query-context=container])[mode-sm=fullscreen]:where([open])) .container {
      inset-inline-start: 0;
    }
    :host(:where([query-context=container])[mode-sm=fullscreen]:where([data-align=end])) .container {
      inset-inline-start: auto;
      inset-inline-end: var(--_u-pane-slide-distance);
    }
    :host(:where([query-context=container])[mode-sm=fullscreen]:where([data-align=end][open])) .container {
      inset-inline-end: 0;
    }
    :host(:where([query-context=container])[mode-sm=fullscreen]) .scrim {
      display: none;
    }
  }
  @media (min-width: 840px) {
    :host(:where(:not([query-context=container]))[mode-md=fixed]) {
      display: block;
      position: relative;
      flex: 0 1 auto;
      height: auto;
      inset: auto;
      z-index: auto;
      pointer-events: auto;
      opacity: 1;
      transition: none;
      --_u-pane-bg-color: var(--_u-pane-variant-bg);
      --_u-pane-shape-corner: var(--_u-pane-variant-radius);
      --_u-pane-box-shadow: none;
    }
    :host(:where(:not([query-context=container]))[mode-md=fixed]) .container {
      position: relative;
      inset: auto;
      width: auto;
      transition: none;
      opacity: 1;
    }
    :host(:where(:not([query-context=container]))[mode-md=fixed]) .scrim {
      display: none;
    }
    :host(:where(:not([query-context=container]))[mode-md=collapsible]) {
      display: block;
      position: relative;
      flex: 0 1 auto;
      height: auto;
      inset: auto;
      z-index: auto;
      pointer-events: auto;
      opacity: 1;
      margin-inline-start: 0;
      margin-inline-end: 0;
      transition: margin-inline-start var(--u-pane-transition), margin-inline-end var(--u-pane-transition), display var(--u-pane-transition) allow-discrete;
      --_u-pane-bg-color: var(--_u-pane-variant-bg);
      --_u-pane-shape-corner: var(--_u-pane-variant-radius);
      --_u-pane-box-shadow: none;
      --_u-pane-collapsed-offset: calc(
        -1 * (var(--u-pane-width, 100%) + var(--u-pane-gap, 16px))
      );
    }
    :host(:where(:not([query-context=container]))[mode-md=collapsible]:where(:not([open]))) {
      margin-inline-start: var(--_u-pane-collapsed-offset);
      display: none;
    }
    :host(:where(:not([query-context=container]))[mode-md=collapsible]:where([data-align=end]:not([open]))) {
      margin-inline-start: 0;
      margin-inline-end: var(--_u-pane-collapsed-offset);
    }
    @starting-style {
      :host(:where(:not([query-context=container]))[mode-md=collapsible]:where([open])) {
        margin-inline-start: var(--_u-pane-collapsed-offset);
      }
      :host(:where(:not([query-context=container]))[mode-md=collapsible]:where([data-align=end][open])) {
        margin-inline-start: 0;
        margin-inline-end: var(--_u-pane-collapsed-offset);
      }
    }
    :host(:where(:not([query-context=container]))[mode-md=collapsible]) .container {
      position: relative;
      inset: auto;
      width: auto;
      transition: none;
      opacity: 1;
    }
    :host(:where(:not([query-context=container]))[mode-md=collapsible]) .scrim {
      display: none;
    }
    :host(:where(:not([query-context=container]))[mode-md=sidebar]) {
      display: block;
      position: fixed;
      inset: 0;
      z-index: var(--u-pane-z-index, 1030);
      pointer-events: none;
      flex: none;
      width: auto;
      height: auto;
      opacity: 1;
      transition: none;
      --_u-pane-bg-color: var(--u-pane-overlay-bg-color,
        var(--u-color-surface-container-low, rgb(247, 242, 250)));
      --_u-pane-shape-corner: var(--u-pane-overlay-corner-shape, var(--u-shape-corner-large, 16px));
      --_u-pane-box-shadow: 0 8px 24px rgba(0, 0, 0, .18);
      --_u-pane-drawer-width: min(var(--u-pane-mobile-width, 360px), 85%);
      --_u-pane-slide-distance: calc(var(--_u-pane-drawer-width) * -1);
    }
    :host(:where(:not([query-context=container]))[mode-md=sidebar]) .container {
      position: absolute;
      inset-block: 0;
      inset-inline-start: var(--_u-pane-slide-distance);
      inset-inline-end: auto;
      width: var(--_u-pane-drawer-width);
      transition: inset var(--u-pane-transition);
      pointer-events: auto;
      border-radius: var(--_u-pane-shape-corner);
    }
    :host(:where(:not([query-context=container]))[mode-md=sidebar]:where([open])) .container {
      inset-inline-start: 0;
    }
    :host(:where(:not([query-context=container]))[mode-md=sidebar]:where([data-align=end])) .container {
      inset-inline-start: auto;
      inset-inline-end: var(--_u-pane-slide-distance);
      border-start-end-radius: 0;
      border-end-end-radius: 0;
      border-start-start-radius: var(--_u-pane-shape-corner-end);
      border-end-start-radius: var(--_u-pane-shape-corner-end);
    }
    :host(:where(:not([query-context=container]))[mode-md=sidebar]:where([data-align=end][open])) .container {
      inset-inline-end: 0;
    }
    :host(:where(:not([query-context=container]))[mode-md=sidebar]) .scrim {
      display: block;
    }
    :host(:where(:not([query-context=container]))[mode-md=sidebar]:where([open])) .scrim {
      opacity: var(--u-pane-scrim-opacity, 0.4);
      pointer-events: auto;
    }
    :host(:where(:not([query-context=container]))[mode-md=fullscreen]) {
      display: block;
      position: fixed;
      inset: 0;
      z-index: var(--u-pane-fullscreen-z-index, 1040);
      pointer-events: none;
      flex: none;
      width: auto;
      height: auto;
      opacity: 1;
      transition: none;
      --_u-pane-bg-color: var(--u-pane-overlay-bg-color,
        var(--u-color-surface-container-lowest, rgb(255, 255, 255)));
      --_u-pane-shape-corner: 0;
      --_u-pane-shape-corner-end: 0;
      --_u-pane-box-shadow: none;
      --_u-pane-drawer-width: 100%;
      --_u-pane-slide-distance: -100%;
    }
    :host(:where(:not([query-context=container]))[mode-md=fullscreen]) .container {
      position: absolute;
      inset-block: 0;
      inset-inline-start: var(--_u-pane-slide-distance);
      inset-inline-end: auto;
      width: 100%;
      transition: inset var(--u-pane-transition);
      pointer-events: auto;
    }
    :host(:where(:not([query-context=container]))[mode-md=fullscreen]:where([open])) .container {
      inset-inline-start: 0;
    }
    :host(:where(:not([query-context=container]))[mode-md=fullscreen]:where([data-align=end])) .container {
      inset-inline-start: auto;
      inset-inline-end: var(--_u-pane-slide-distance);
    }
    :host(:where(:not([query-context=container]))[mode-md=fullscreen]:where([data-align=end][open])) .container {
      inset-inline-end: 0;
    }
    :host(:where(:not([query-context=container]))[mode-md=fullscreen]) .scrim {
      display: none;
    }
  }
  @container (min-width: 840px) {
    :host(:where([query-context=container])[mode-md=fixed]) {
      display: block;
      position: relative;
      flex: 0 1 auto;
      height: auto;
      inset: auto;
      z-index: auto;
      pointer-events: auto;
      opacity: 1;
      transition: none;
      --_u-pane-bg-color: var(--_u-pane-variant-bg);
      --_u-pane-shape-corner: var(--_u-pane-variant-radius);
      --_u-pane-box-shadow: none;
    }
    :host(:where([query-context=container])[mode-md=fixed]) .container {
      position: relative;
      inset: auto;
      width: auto;
      transition: none;
      opacity: 1;
    }
    :host(:where([query-context=container])[mode-md=fixed]) .scrim {
      display: none;
    }
    :host(:where([query-context=container])[mode-md=collapsible]) {
      display: block;
      position: relative;
      flex: 0 1 auto;
      height: auto;
      inset: auto;
      z-index: auto;
      pointer-events: auto;
      opacity: 1;
      margin-inline-start: 0;
      margin-inline-end: 0;
      transition: margin-inline-start var(--u-pane-transition), margin-inline-end var(--u-pane-transition), display var(--u-pane-transition) allow-discrete;
      --_u-pane-bg-color: var(--_u-pane-variant-bg);
      --_u-pane-shape-corner: var(--_u-pane-variant-radius);
      --_u-pane-box-shadow: none;
      --_u-pane-collapsed-offset: calc(
        -1 * (var(--u-pane-width, 100%) + var(--u-pane-gap, 16px))
      );
    }
    :host(:where([query-context=container])[mode-md=collapsible]:where(:not([open]))) {
      margin-inline-start: var(--_u-pane-collapsed-offset);
      display: none;
    }
    :host(:where([query-context=container])[mode-md=collapsible]:where([data-align=end]:not([open]))) {
      margin-inline-start: 0;
      margin-inline-end: var(--_u-pane-collapsed-offset);
    }
    @starting-style {
      :host(:where([query-context=container])[mode-md=collapsible]:where([open])) {
        margin-inline-start: var(--_u-pane-collapsed-offset);
      }
      :host(:where([query-context=container])[mode-md=collapsible]:where([data-align=end][open])) {
        margin-inline-start: 0;
        margin-inline-end: var(--_u-pane-collapsed-offset);
      }
    }
    :host(:where([query-context=container])[mode-md=collapsible]) .container {
      position: relative;
      inset: auto;
      width: auto;
      transition: none;
      opacity: 1;
    }
    :host(:where([query-context=container])[mode-md=collapsible]) .scrim {
      display: none;
    }
    :host(:where([query-context=container])[mode-md=sidebar]) {
      display: block;
      position: fixed;
      inset: 0;
      z-index: var(--u-pane-z-index, 1030);
      pointer-events: none;
      flex: none;
      width: auto;
      height: auto;
      opacity: 1;
      transition: none;
      --_u-pane-bg-color: var(--u-pane-overlay-bg-color,
        var(--u-color-surface-container-low, rgb(247, 242, 250)));
      --_u-pane-shape-corner: var(--u-pane-overlay-corner-shape, var(--u-shape-corner-large, 16px));
      --_u-pane-box-shadow: 0 8px 24px rgba(0, 0, 0, .18);
      --_u-pane-drawer-width: min(var(--u-pane-mobile-width, 360px), 85%);
      --_u-pane-slide-distance: calc(var(--_u-pane-drawer-width) * -1);
    }
    :host(:where([query-context=container])[mode-md=sidebar]) .container {
      position: absolute;
      inset-block: 0;
      inset-inline-start: var(--_u-pane-slide-distance);
      inset-inline-end: auto;
      width: var(--_u-pane-drawer-width);
      transition: inset var(--u-pane-transition);
      pointer-events: auto;
      border-radius: var(--_u-pane-shape-corner);
    }
    :host(:where([query-context=container])[mode-md=sidebar]:where([open])) .container {
      inset-inline-start: 0;
    }
    :host(:where([query-context=container])[mode-md=sidebar]:where([data-align=end])) .container {
      inset-inline-start: auto;
      inset-inline-end: var(--_u-pane-slide-distance);
      border-start-end-radius: 0;
      border-end-end-radius: 0;
      border-start-start-radius: var(--_u-pane-shape-corner-end);
      border-end-start-radius: var(--_u-pane-shape-corner-end);
    }
    :host(:where([query-context=container])[mode-md=sidebar]:where([data-align=end][open])) .container {
      inset-inline-end: 0;
    }
    :host(:where([query-context=container])[mode-md=sidebar]) .scrim {
      display: block;
    }
    :host(:where([query-context=container])[mode-md=sidebar]:where([open])) .scrim {
      opacity: var(--u-pane-scrim-opacity, 0.4);
      pointer-events: auto;
    }
    :host(:where([query-context=container])[mode-md=fullscreen]) {
      display: block;
      position: fixed;
      inset: 0;
      z-index: var(--u-pane-fullscreen-z-index, 1040);
      pointer-events: none;
      flex: none;
      width: auto;
      height: auto;
      opacity: 1;
      transition: none;
      --_u-pane-bg-color: var(--u-pane-overlay-bg-color,
        var(--u-color-surface-container-lowest, rgb(255, 255, 255)));
      --_u-pane-shape-corner: 0;
      --_u-pane-shape-corner-end: 0;
      --_u-pane-box-shadow: none;
      --_u-pane-drawer-width: 100%;
      --_u-pane-slide-distance: -100%;
    }
    :host(:where([query-context=container])[mode-md=fullscreen]) .container {
      position: absolute;
      inset-block: 0;
      inset-inline-start: var(--_u-pane-slide-distance);
      inset-inline-end: auto;
      width: 100%;
      transition: inset var(--u-pane-transition);
      pointer-events: auto;
    }
    :host(:where([query-context=container])[mode-md=fullscreen]:where([open])) .container {
      inset-inline-start: 0;
    }
    :host(:where([query-context=container])[mode-md=fullscreen]:where([data-align=end])) .container {
      inset-inline-start: auto;
      inset-inline-end: var(--_u-pane-slide-distance);
    }
    :host(:where([query-context=container])[mode-md=fullscreen]:where([data-align=end][open])) .container {
      inset-inline-end: 0;
    }
    :host(:where([query-context=container])[mode-md=fullscreen]) .scrim {
      display: none;
    }
  }
  @media (min-width: 1200px) {
    :host(:where(:not([query-context=container]))[mode-lg=fixed]) {
      display: block;
      position: relative;
      flex: 0 1 auto;
      height: auto;
      inset: auto;
      z-index: auto;
      pointer-events: auto;
      opacity: 1;
      transition: none;
      --_u-pane-bg-color: var(--_u-pane-variant-bg);
      --_u-pane-shape-corner: var(--_u-pane-variant-radius);
      --_u-pane-box-shadow: none;
    }
    :host(:where(:not([query-context=container]))[mode-lg=fixed]) .container {
      position: relative;
      inset: auto;
      width: auto;
      transition: none;
      opacity: 1;
    }
    :host(:where(:not([query-context=container]))[mode-lg=fixed]) .scrim {
      display: none;
    }
    :host(:where(:not([query-context=container]))[mode-lg=collapsible]) {
      display: block;
      position: relative;
      flex: 0 1 auto;
      height: auto;
      inset: auto;
      z-index: auto;
      pointer-events: auto;
      opacity: 1;
      margin-inline-start: 0;
      margin-inline-end: 0;
      transition: margin-inline-start var(--u-pane-transition), margin-inline-end var(--u-pane-transition), display var(--u-pane-transition) allow-discrete;
      --_u-pane-bg-color: var(--_u-pane-variant-bg);
      --_u-pane-shape-corner: var(--_u-pane-variant-radius);
      --_u-pane-box-shadow: none;
      --_u-pane-collapsed-offset: calc(
        -1 * (var(--u-pane-width, 100%) + var(--u-pane-gap, 16px))
      );
    }
    :host(:where(:not([query-context=container]))[mode-lg=collapsible]:where(:not([open]))) {
      margin-inline-start: var(--_u-pane-collapsed-offset);
      display: none;
    }
    :host(:where(:not([query-context=container]))[mode-lg=collapsible]:where([data-align=end]:not([open]))) {
      margin-inline-start: 0;
      margin-inline-end: var(--_u-pane-collapsed-offset);
    }
    @starting-style {
      :host(:where(:not([query-context=container]))[mode-lg=collapsible]:where([open])) {
        margin-inline-start: var(--_u-pane-collapsed-offset);
      }
      :host(:where(:not([query-context=container]))[mode-lg=collapsible]:where([data-align=end][open])) {
        margin-inline-start: 0;
        margin-inline-end: var(--_u-pane-collapsed-offset);
      }
    }
    :host(:where(:not([query-context=container]))[mode-lg=collapsible]) .container {
      position: relative;
      inset: auto;
      width: auto;
      transition: none;
      opacity: 1;
    }
    :host(:where(:not([query-context=container]))[mode-lg=collapsible]) .scrim {
      display: none;
    }
    :host(:where(:not([query-context=container]))[mode-lg=sidebar]) {
      display: block;
      position: fixed;
      inset: 0;
      z-index: var(--u-pane-z-index, 1030);
      pointer-events: none;
      flex: none;
      width: auto;
      height: auto;
      opacity: 1;
      transition: none;
      --_u-pane-bg-color: var(--u-pane-overlay-bg-color,
        var(--u-color-surface-container-low, rgb(247, 242, 250)));
      --_u-pane-shape-corner: var(--u-pane-overlay-corner-shape, var(--u-shape-corner-large, 16px));
      --_u-pane-box-shadow: 0 8px 24px rgba(0, 0, 0, .18);
      --_u-pane-drawer-width: min(var(--u-pane-mobile-width, 360px), 85%);
      --_u-pane-slide-distance: calc(var(--_u-pane-drawer-width) * -1);
    }
    :host(:where(:not([query-context=container]))[mode-lg=sidebar]) .container {
      position: absolute;
      inset-block: 0;
      inset-inline-start: var(--_u-pane-slide-distance);
      inset-inline-end: auto;
      width: var(--_u-pane-drawer-width);
      transition: inset var(--u-pane-transition);
      pointer-events: auto;
      border-radius: var(--_u-pane-shape-corner);
    }
    :host(:where(:not([query-context=container]))[mode-lg=sidebar]:where([open])) .container {
      inset-inline-start: 0;
    }
    :host(:where(:not([query-context=container]))[mode-lg=sidebar]:where([data-align=end])) .container {
      inset-inline-start: auto;
      inset-inline-end: var(--_u-pane-slide-distance);
      border-start-end-radius: 0;
      border-end-end-radius: 0;
      border-start-start-radius: var(--_u-pane-shape-corner-end);
      border-end-start-radius: var(--_u-pane-shape-corner-end);
    }
    :host(:where(:not([query-context=container]))[mode-lg=sidebar]:where([data-align=end][open])) .container {
      inset-inline-end: 0;
    }
    :host(:where(:not([query-context=container]))[mode-lg=sidebar]) .scrim {
      display: block;
    }
    :host(:where(:not([query-context=container]))[mode-lg=sidebar]:where([open])) .scrim {
      opacity: var(--u-pane-scrim-opacity, 0.4);
      pointer-events: auto;
    }
    :host(:where(:not([query-context=container]))[mode-lg=fullscreen]) {
      display: block;
      position: fixed;
      inset: 0;
      z-index: var(--u-pane-fullscreen-z-index, 1040);
      pointer-events: none;
      flex: none;
      width: auto;
      height: auto;
      opacity: 1;
      transition: none;
      --_u-pane-bg-color: var(--u-pane-overlay-bg-color,
        var(--u-color-surface-container-lowest, rgb(255, 255, 255)));
      --_u-pane-shape-corner: 0;
      --_u-pane-shape-corner-end: 0;
      --_u-pane-box-shadow: none;
      --_u-pane-drawer-width: 100%;
      --_u-pane-slide-distance: -100%;
    }
    :host(:where(:not([query-context=container]))[mode-lg=fullscreen]) .container {
      position: absolute;
      inset-block: 0;
      inset-inline-start: var(--_u-pane-slide-distance);
      inset-inline-end: auto;
      width: 100%;
      transition: inset var(--u-pane-transition);
      pointer-events: auto;
    }
    :host(:where(:not([query-context=container]))[mode-lg=fullscreen]:where([open])) .container {
      inset-inline-start: 0;
    }
    :host(:where(:not([query-context=container]))[mode-lg=fullscreen]:where([data-align=end])) .container {
      inset-inline-start: auto;
      inset-inline-end: var(--_u-pane-slide-distance);
    }
    :host(:where(:not([query-context=container]))[mode-lg=fullscreen]:where([data-align=end][open])) .container {
      inset-inline-end: 0;
    }
    :host(:where(:not([query-context=container]))[mode-lg=fullscreen]) .scrim {
      display: none;
    }
  }
  @container (min-width: 1200px) {
    :host(:where([query-context=container])[mode-lg=fixed]) {
      display: block;
      position: relative;
      flex: 0 1 auto;
      height: auto;
      inset: auto;
      z-index: auto;
      pointer-events: auto;
      opacity: 1;
      transition: none;
      --_u-pane-bg-color: var(--_u-pane-variant-bg);
      --_u-pane-shape-corner: var(--_u-pane-variant-radius);
      --_u-pane-box-shadow: none;
    }
    :host(:where([query-context=container])[mode-lg=fixed]) .container {
      position: relative;
      inset: auto;
      width: auto;
      transition: none;
      opacity: 1;
    }
    :host(:where([query-context=container])[mode-lg=fixed]) .scrim {
      display: none;
    }
    :host(:where([query-context=container])[mode-lg=collapsible]) {
      display: block;
      position: relative;
      flex: 0 1 auto;
      height: auto;
      inset: auto;
      z-index: auto;
      pointer-events: auto;
      opacity: 1;
      margin-inline-start: 0;
      margin-inline-end: 0;
      transition: margin-inline-start var(--u-pane-transition), margin-inline-end var(--u-pane-transition), display var(--u-pane-transition) allow-discrete;
      --_u-pane-bg-color: var(--_u-pane-variant-bg);
      --_u-pane-shape-corner: var(--_u-pane-variant-radius);
      --_u-pane-box-shadow: none;
      --_u-pane-collapsed-offset: calc(
        -1 * (var(--u-pane-width, 100%) + var(--u-pane-gap, 16px))
      );
    }
    :host(:where([query-context=container])[mode-lg=collapsible]:where(:not([open]))) {
      margin-inline-start: var(--_u-pane-collapsed-offset);
      display: none;
    }
    :host(:where([query-context=container])[mode-lg=collapsible]:where([data-align=end]:not([open]))) {
      margin-inline-start: 0;
      margin-inline-end: var(--_u-pane-collapsed-offset);
    }
    @starting-style {
      :host(:where([query-context=container])[mode-lg=collapsible]:where([open])) {
        margin-inline-start: var(--_u-pane-collapsed-offset);
      }
      :host(:where([query-context=container])[mode-lg=collapsible]:where([data-align=end][open])) {
        margin-inline-start: 0;
        margin-inline-end: var(--_u-pane-collapsed-offset);
      }
    }
    :host(:where([query-context=container])[mode-lg=collapsible]) .container {
      position: relative;
      inset: auto;
      width: auto;
      transition: none;
      opacity: 1;
    }
    :host(:where([query-context=container])[mode-lg=collapsible]) .scrim {
      display: none;
    }
    :host(:where([query-context=container])[mode-lg=sidebar]) {
      display: block;
      position: fixed;
      inset: 0;
      z-index: var(--u-pane-z-index, 1030);
      pointer-events: none;
      flex: none;
      width: auto;
      height: auto;
      opacity: 1;
      transition: none;
      --_u-pane-bg-color: var(--u-pane-overlay-bg-color,
        var(--u-color-surface-container-low, rgb(247, 242, 250)));
      --_u-pane-shape-corner: var(--u-pane-overlay-corner-shape, var(--u-shape-corner-large, 16px));
      --_u-pane-box-shadow: 0 8px 24px rgba(0, 0, 0, .18);
      --_u-pane-drawer-width: min(var(--u-pane-mobile-width, 360px), 85%);
      --_u-pane-slide-distance: calc(var(--_u-pane-drawer-width) * -1);
    }
    :host(:where([query-context=container])[mode-lg=sidebar]) .container {
      position: absolute;
      inset-block: 0;
      inset-inline-start: var(--_u-pane-slide-distance);
      inset-inline-end: auto;
      width: var(--_u-pane-drawer-width);
      transition: inset var(--u-pane-transition);
      pointer-events: auto;
      border-radius: var(--_u-pane-shape-corner);
    }
    :host(:where([query-context=container])[mode-lg=sidebar]:where([open])) .container {
      inset-inline-start: 0;
    }
    :host(:where([query-context=container])[mode-lg=sidebar]:where([data-align=end])) .container {
      inset-inline-start: auto;
      inset-inline-end: var(--_u-pane-slide-distance);
      border-start-end-radius: 0;
      border-end-end-radius: 0;
      border-start-start-radius: var(--_u-pane-shape-corner-end);
      border-end-start-radius: var(--_u-pane-shape-corner-end);
    }
    :host(:where([query-context=container])[mode-lg=sidebar]:where([data-align=end][open])) .container {
      inset-inline-end: 0;
    }
    :host(:where([query-context=container])[mode-lg=sidebar]) .scrim {
      display: block;
    }
    :host(:where([query-context=container])[mode-lg=sidebar]:where([open])) .scrim {
      opacity: var(--u-pane-scrim-opacity, 0.4);
      pointer-events: auto;
    }
    :host(:where([query-context=container])[mode-lg=fullscreen]) {
      display: block;
      position: fixed;
      inset: 0;
      z-index: var(--u-pane-fullscreen-z-index, 1040);
      pointer-events: none;
      flex: none;
      width: auto;
      height: auto;
      opacity: 1;
      transition: none;
      --_u-pane-bg-color: var(--u-pane-overlay-bg-color,
        var(--u-color-surface-container-lowest, rgb(255, 255, 255)));
      --_u-pane-shape-corner: 0;
      --_u-pane-shape-corner-end: 0;
      --_u-pane-box-shadow: none;
      --_u-pane-drawer-width: 100%;
      --_u-pane-slide-distance: -100%;
    }
    :host(:where([query-context=container])[mode-lg=fullscreen]) .container {
      position: absolute;
      inset-block: 0;
      inset-inline-start: var(--_u-pane-slide-distance);
      inset-inline-end: auto;
      width: 100%;
      transition: inset var(--u-pane-transition);
      pointer-events: auto;
    }
    :host(:where([query-context=container])[mode-lg=fullscreen]:where([open])) .container {
      inset-inline-start: 0;
    }
    :host(:where([query-context=container])[mode-lg=fullscreen]:where([data-align=end])) .container {
      inset-inline-start: auto;
      inset-inline-end: var(--_u-pane-slide-distance);
    }
    :host(:where([query-context=container])[mode-lg=fullscreen]:where([data-align=end][open])) .container {
      inset-inline-end: 0;
    }
    :host(:where([query-context=container])[mode-lg=fullscreen]) .scrim {
      display: none;
    }
  }
  @media (min-width: 1600px) {
    :host(:where(:not([query-context=container]))[mode-xl=fixed]) {
      display: block;
      position: relative;
      flex: 0 1 auto;
      height: auto;
      inset: auto;
      z-index: auto;
      pointer-events: auto;
      opacity: 1;
      transition: none;
      --_u-pane-bg-color: var(--_u-pane-variant-bg);
      --_u-pane-shape-corner: var(--_u-pane-variant-radius);
      --_u-pane-box-shadow: none;
    }
    :host(:where(:not([query-context=container]))[mode-xl=fixed]) .container {
      position: relative;
      inset: auto;
      width: auto;
      transition: none;
      opacity: 1;
    }
    :host(:where(:not([query-context=container]))[mode-xl=fixed]) .scrim {
      display: none;
    }
    :host(:where(:not([query-context=container]))[mode-xl=collapsible]) {
      display: block;
      position: relative;
      flex: 0 1 auto;
      height: auto;
      inset: auto;
      z-index: auto;
      pointer-events: auto;
      opacity: 1;
      margin-inline-start: 0;
      margin-inline-end: 0;
      transition: margin-inline-start var(--u-pane-transition), margin-inline-end var(--u-pane-transition), display var(--u-pane-transition) allow-discrete;
      --_u-pane-bg-color: var(--_u-pane-variant-bg);
      --_u-pane-shape-corner: var(--_u-pane-variant-radius);
      --_u-pane-box-shadow: none;
      --_u-pane-collapsed-offset: calc(
        -1 * (var(--u-pane-width, 100%) + var(--u-pane-gap, 16px))
      );
    }
    :host(:where(:not([query-context=container]))[mode-xl=collapsible]:where(:not([open]))) {
      margin-inline-start: var(--_u-pane-collapsed-offset);
      display: none;
    }
    :host(:where(:not([query-context=container]))[mode-xl=collapsible]:where([data-align=end]:not([open]))) {
      margin-inline-start: 0;
      margin-inline-end: var(--_u-pane-collapsed-offset);
    }
    @starting-style {
      :host(:where(:not([query-context=container]))[mode-xl=collapsible]:where([open])) {
        margin-inline-start: var(--_u-pane-collapsed-offset);
      }
      :host(:where(:not([query-context=container]))[mode-xl=collapsible]:where([data-align=end][open])) {
        margin-inline-start: 0;
        margin-inline-end: var(--_u-pane-collapsed-offset);
      }
    }
    :host(:where(:not([query-context=container]))[mode-xl=collapsible]) .container {
      position: relative;
      inset: auto;
      width: auto;
      transition: none;
      opacity: 1;
    }
    :host(:where(:not([query-context=container]))[mode-xl=collapsible]) .scrim {
      display: none;
    }
    :host(:where(:not([query-context=container]))[mode-xl=sidebar]) {
      display: block;
      position: fixed;
      inset: 0;
      z-index: var(--u-pane-z-index, 1030);
      pointer-events: none;
      flex: none;
      width: auto;
      height: auto;
      opacity: 1;
      transition: none;
      --_u-pane-bg-color: var(--u-pane-overlay-bg-color,
        var(--u-color-surface-container-low, rgb(247, 242, 250)));
      --_u-pane-shape-corner: var(--u-pane-overlay-corner-shape, var(--u-shape-corner-large, 16px));
      --_u-pane-box-shadow: 0 8px 24px rgba(0, 0, 0, .18);
      --_u-pane-drawer-width: min(var(--u-pane-mobile-width, 360px), 85%);
      --_u-pane-slide-distance: calc(var(--_u-pane-drawer-width) * -1);
    }
    :host(:where(:not([query-context=container]))[mode-xl=sidebar]) .container {
      position: absolute;
      inset-block: 0;
      inset-inline-start: var(--_u-pane-slide-distance);
      inset-inline-end: auto;
      width: var(--_u-pane-drawer-width);
      transition: inset var(--u-pane-transition);
      pointer-events: auto;
      border-radius: var(--_u-pane-shape-corner);
    }
    :host(:where(:not([query-context=container]))[mode-xl=sidebar]:where([open])) .container {
      inset-inline-start: 0;
    }
    :host(:where(:not([query-context=container]))[mode-xl=sidebar]:where([data-align=end])) .container {
      inset-inline-start: auto;
      inset-inline-end: var(--_u-pane-slide-distance);
      border-start-end-radius: 0;
      border-end-end-radius: 0;
      border-start-start-radius: var(--_u-pane-shape-corner-end);
      border-end-start-radius: var(--_u-pane-shape-corner-end);
    }
    :host(:where(:not([query-context=container]))[mode-xl=sidebar]:where([data-align=end][open])) .container {
      inset-inline-end: 0;
    }
    :host(:where(:not([query-context=container]))[mode-xl=sidebar]) .scrim {
      display: block;
    }
    :host(:where(:not([query-context=container]))[mode-xl=sidebar]:where([open])) .scrim {
      opacity: var(--u-pane-scrim-opacity, 0.4);
      pointer-events: auto;
    }
    :host(:where(:not([query-context=container]))[mode-xl=fullscreen]) {
      display: block;
      position: fixed;
      inset: 0;
      z-index: var(--u-pane-fullscreen-z-index, 1040);
      pointer-events: none;
      flex: none;
      width: auto;
      height: auto;
      opacity: 1;
      transition: none;
      --_u-pane-bg-color: var(--u-pane-overlay-bg-color,
        var(--u-color-surface-container-lowest, rgb(255, 255, 255)));
      --_u-pane-shape-corner: 0;
      --_u-pane-shape-corner-end: 0;
      --_u-pane-box-shadow: none;
      --_u-pane-drawer-width: 100%;
      --_u-pane-slide-distance: -100%;
    }
    :host(:where(:not([query-context=container]))[mode-xl=fullscreen]) .container {
      position: absolute;
      inset-block: 0;
      inset-inline-start: var(--_u-pane-slide-distance);
      inset-inline-end: auto;
      width: 100%;
      transition: inset var(--u-pane-transition);
      pointer-events: auto;
    }
    :host(:where(:not([query-context=container]))[mode-xl=fullscreen]:where([open])) .container {
      inset-inline-start: 0;
    }
    :host(:where(:not([query-context=container]))[mode-xl=fullscreen]:where([data-align=end])) .container {
      inset-inline-start: auto;
      inset-inline-end: var(--_u-pane-slide-distance);
    }
    :host(:where(:not([query-context=container]))[mode-xl=fullscreen]:where([data-align=end][open])) .container {
      inset-inline-end: 0;
    }
    :host(:where(:not([query-context=container]))[mode-xl=fullscreen]) .scrim {
      display: none;
    }
  }
  @container (min-width: 1600px) {
    :host(:where([query-context=container])[mode-xl=fixed]) {
      display: block;
      position: relative;
      flex: 0 1 auto;
      height: auto;
      inset: auto;
      z-index: auto;
      pointer-events: auto;
      opacity: 1;
      transition: none;
      --_u-pane-bg-color: var(--_u-pane-variant-bg);
      --_u-pane-shape-corner: var(--_u-pane-variant-radius);
      --_u-pane-box-shadow: none;
    }
    :host(:where([query-context=container])[mode-xl=fixed]) .container {
      position: relative;
      inset: auto;
      width: auto;
      transition: none;
      opacity: 1;
    }
    :host(:where([query-context=container])[mode-xl=fixed]) .scrim {
      display: none;
    }
    :host(:where([query-context=container])[mode-xl=collapsible]) {
      display: block;
      position: relative;
      flex: 0 1 auto;
      height: auto;
      inset: auto;
      z-index: auto;
      pointer-events: auto;
      opacity: 1;
      margin-inline-start: 0;
      margin-inline-end: 0;
      transition: margin-inline-start var(--u-pane-transition), margin-inline-end var(--u-pane-transition), display var(--u-pane-transition) allow-discrete;
      --_u-pane-bg-color: var(--_u-pane-variant-bg);
      --_u-pane-shape-corner: var(--_u-pane-variant-radius);
      --_u-pane-box-shadow: none;
      --_u-pane-collapsed-offset: calc(
        -1 * (var(--u-pane-width, 100%) + var(--u-pane-gap, 16px))
      );
    }
    :host(:where([query-context=container])[mode-xl=collapsible]:where(:not([open]))) {
      margin-inline-start: var(--_u-pane-collapsed-offset);
      display: none;
    }
    :host(:where([query-context=container])[mode-xl=collapsible]:where([data-align=end]:not([open]))) {
      margin-inline-start: 0;
      margin-inline-end: var(--_u-pane-collapsed-offset);
    }
    @starting-style {
      :host(:where([query-context=container])[mode-xl=collapsible]:where([open])) {
        margin-inline-start: var(--_u-pane-collapsed-offset);
      }
      :host(:where([query-context=container])[mode-xl=collapsible]:where([data-align=end][open])) {
        margin-inline-start: 0;
        margin-inline-end: var(--_u-pane-collapsed-offset);
      }
    }
    :host(:where([query-context=container])[mode-xl=collapsible]) .container {
      position: relative;
      inset: auto;
      width: auto;
      transition: none;
      opacity: 1;
    }
    :host(:where([query-context=container])[mode-xl=collapsible]) .scrim {
      display: none;
    }
    :host(:where([query-context=container])[mode-xl=sidebar]) {
      display: block;
      position: fixed;
      inset: 0;
      z-index: var(--u-pane-z-index, 1030);
      pointer-events: none;
      flex: none;
      width: auto;
      height: auto;
      opacity: 1;
      transition: none;
      --_u-pane-bg-color: var(--u-pane-overlay-bg-color,
        var(--u-color-surface-container-low, rgb(247, 242, 250)));
      --_u-pane-shape-corner: var(--u-pane-overlay-corner-shape, var(--u-shape-corner-large, 16px));
      --_u-pane-box-shadow: 0 8px 24px rgba(0, 0, 0, .18);
      --_u-pane-drawer-width: min(var(--u-pane-mobile-width, 360px), 85%);
      --_u-pane-slide-distance: calc(var(--_u-pane-drawer-width) * -1);
    }
    :host(:where([query-context=container])[mode-xl=sidebar]) .container {
      position: absolute;
      inset-block: 0;
      inset-inline-start: var(--_u-pane-slide-distance);
      inset-inline-end: auto;
      width: var(--_u-pane-drawer-width);
      transition: inset var(--u-pane-transition);
      pointer-events: auto;
      border-radius: var(--_u-pane-shape-corner);
    }
    :host(:where([query-context=container])[mode-xl=sidebar]:where([open])) .container {
      inset-inline-start: 0;
    }
    :host(:where([query-context=container])[mode-xl=sidebar]:where([data-align=end])) .container {
      inset-inline-start: auto;
      inset-inline-end: var(--_u-pane-slide-distance);
      border-start-end-radius: 0;
      border-end-end-radius: 0;
      border-start-start-radius: var(--_u-pane-shape-corner-end);
      border-end-start-radius: var(--_u-pane-shape-corner-end);
    }
    :host(:where([query-context=container])[mode-xl=sidebar]:where([data-align=end][open])) .container {
      inset-inline-end: 0;
    }
    :host(:where([query-context=container])[mode-xl=sidebar]) .scrim {
      display: block;
    }
    :host(:where([query-context=container])[mode-xl=sidebar]:where([open])) .scrim {
      opacity: var(--u-pane-scrim-opacity, 0.4);
      pointer-events: auto;
    }
    :host(:where([query-context=container])[mode-xl=fullscreen]) {
      display: block;
      position: fixed;
      inset: 0;
      z-index: var(--u-pane-fullscreen-z-index, 1040);
      pointer-events: none;
      flex: none;
      width: auto;
      height: auto;
      opacity: 1;
      transition: none;
      --_u-pane-bg-color: var(--u-pane-overlay-bg-color,
        var(--u-color-surface-container-lowest, rgb(255, 255, 255)));
      --_u-pane-shape-corner: 0;
      --_u-pane-shape-corner-end: 0;
      --_u-pane-box-shadow: none;
      --_u-pane-drawer-width: 100%;
      --_u-pane-slide-distance: -100%;
    }
    :host(:where([query-context=container])[mode-xl=fullscreen]) .container {
      position: absolute;
      inset-block: 0;
      inset-inline-start: var(--_u-pane-slide-distance);
      inset-inline-end: auto;
      width: 100%;
      transition: inset var(--u-pane-transition);
      pointer-events: auto;
    }
    :host(:where([query-context=container])[mode-xl=fullscreen]:where([open])) .container {
      inset-inline-start: 0;
    }
    :host(:where([query-context=container])[mode-xl=fullscreen]:where([data-align=end])) .container {
      inset-inline-start: auto;
      inset-inline-end: var(--_u-pane-slide-distance);
    }
    :host(:where([query-context=container])[mode-xl=fullscreen]:where([data-align=end][open])) .container {
      inset-inline-end: 0;
    }
    :host(:where([query-context=container])[mode-xl=fullscreen]) .scrim {
      display: none;
    }
  }
  :host([animation=none]),
  :host([animation=none]) .container,
  :host([animation=none]) .scrim {
    transition: none;
  }

  :host([animation=fade]) .container {
    inset-inline-start: 0;
    inset-inline-end: auto;
    transition: opacity var(--u-pane-transition);
    opacity: 1;
  }

  :host([animation=fade]:where(:not([open]))) .container {
    opacity: 0;
  }

  :host([animation=exit-start]) .container {
    inset-inline-start: var(--_u-pane-slide-distance);
    inset-inline-end: auto;
    transition: inset var(--u-pane-transition);
    border-start-start-radius: 0;
    border-end-start-radius: 0;
    border-start-end-radius: var(--_u-pane-shape-corner-end);
    border-end-end-radius: var(--_u-pane-shape-corner-end);
  }

  :host([animation=exit-start]:where([open])) .container {
    inset-inline-start: 0;
  }

  :host([animation=exit-end]) .container {
    inset-inline-start: auto;
    inset-inline-end: var(--_u-pane-slide-distance);
    transition: inset var(--u-pane-transition);
    border-start-end-radius: 0;
    border-end-end-radius: 0;
    border-start-start-radius: var(--_u-pane-shape-corner-end);
    border-end-start-radius: var(--_u-pane-shape-corner-end);
  }

  :host([animation=exit-end]:where([open])) .container {
    inset-inline-end: 0;
  }

  @media (min-width: 600px) {
    :host(:where(:not([query-context=container]))[animation-sm=none]),
    :host(:where(:not([query-context=container]))[animation-sm=none]) .container,
    :host(:where(:not([query-context=container]))[animation-sm=none]) .scrim {
      transition: none;
    }
    :host(:where(:not([query-context=container]))[animation-sm=fade]) .container {
      inset-inline-start: 0;
      inset-inline-end: auto;
      transition: opacity var(--u-pane-transition);
      opacity: 1;
    }
    :host(:where(:not([query-context=container]))[animation-sm=fade]:where(:not([open]))) .container {
      opacity: 0;
    }
    :host(:where(:not([query-context=container]))[animation-sm=exit-start]) .container {
      inset-inline-start: var(--_u-pane-slide-distance);
      inset-inline-end: auto;
      transition: inset var(--u-pane-transition);
      border-start-start-radius: 0;
      border-end-start-radius: 0;
      border-start-end-radius: var(--_u-pane-shape-corner-end);
      border-end-end-radius: var(--_u-pane-shape-corner-end);
    }
    :host(:where(:not([query-context=container]))[animation-sm=exit-start]:where([open])) .container {
      inset-inline-start: 0;
    }
    :host(:where(:not([query-context=container]))[animation-sm=exit-end]) .container {
      inset-inline-start: auto;
      inset-inline-end: var(--_u-pane-slide-distance);
      transition: inset var(--u-pane-transition);
      border-start-end-radius: 0;
      border-end-end-radius: 0;
      border-start-start-radius: var(--_u-pane-shape-corner-end);
      border-end-start-radius: var(--_u-pane-shape-corner-end);
    }
    :host(:where(:not([query-context=container]))[animation-sm=exit-end]:where([open])) .container {
      inset-inline-end: 0;
    }
  }
  @container (min-width: 600px) {
    :host(:where([query-context=container])[animation-sm=none]),
    :host(:where([query-context=container])[animation-sm=none]) .container,
    :host(:where([query-context=container])[animation-sm=none]) .scrim {
      transition: none;
    }
    :host(:where([query-context=container])[animation-sm=fade]) .container {
      inset-inline-start: 0;
      inset-inline-end: auto;
      transition: opacity var(--u-pane-transition);
      opacity: 1;
    }
    :host(:where([query-context=container])[animation-sm=fade]:where(:not([open]))) .container {
      opacity: 0;
    }
    :host(:where([query-context=container])[animation-sm=exit-start]) .container {
      inset-inline-start: var(--_u-pane-slide-distance);
      inset-inline-end: auto;
      transition: inset var(--u-pane-transition);
      border-start-start-radius: 0;
      border-end-start-radius: 0;
      border-start-end-radius: var(--_u-pane-shape-corner-end);
      border-end-end-radius: var(--_u-pane-shape-corner-end);
    }
    :host(:where([query-context=container])[animation-sm=exit-start]:where([open])) .container {
      inset-inline-start: 0;
    }
    :host(:where([query-context=container])[animation-sm=exit-end]) .container {
      inset-inline-start: auto;
      inset-inline-end: var(--_u-pane-slide-distance);
      transition: inset var(--u-pane-transition);
      border-start-end-radius: 0;
      border-end-end-radius: 0;
      border-start-start-radius: var(--_u-pane-shape-corner-end);
      border-end-start-radius: var(--_u-pane-shape-corner-end);
    }
    :host(:where([query-context=container])[animation-sm=exit-end]:where([open])) .container {
      inset-inline-end: 0;
    }
  }
  @media (min-width: 840px) {
    :host(:where(:not([query-context=container]))[animation-md=none]),
    :host(:where(:not([query-context=container]))[animation-md=none]) .container,
    :host(:where(:not([query-context=container]))[animation-md=none]) .scrim {
      transition: none;
    }
    :host(:where(:not([query-context=container]))[animation-md=fade]) .container {
      inset-inline-start: 0;
      inset-inline-end: auto;
      transition: opacity var(--u-pane-transition);
      opacity: 1;
    }
    :host(:where(:not([query-context=container]))[animation-md=fade]:where(:not([open]))) .container {
      opacity: 0;
    }
    :host(:where(:not([query-context=container]))[animation-md=exit-start]) .container {
      inset-inline-start: var(--_u-pane-slide-distance);
      inset-inline-end: auto;
      transition: inset var(--u-pane-transition);
      border-start-start-radius: 0;
      border-end-start-radius: 0;
      border-start-end-radius: var(--_u-pane-shape-corner-end);
      border-end-end-radius: var(--_u-pane-shape-corner-end);
    }
    :host(:where(:not([query-context=container]))[animation-md=exit-start]:where([open])) .container {
      inset-inline-start: 0;
    }
    :host(:where(:not([query-context=container]))[animation-md=exit-end]) .container {
      inset-inline-start: auto;
      inset-inline-end: var(--_u-pane-slide-distance);
      transition: inset var(--u-pane-transition);
      border-start-end-radius: 0;
      border-end-end-radius: 0;
      border-start-start-radius: var(--_u-pane-shape-corner-end);
      border-end-start-radius: var(--_u-pane-shape-corner-end);
    }
    :host(:where(:not([query-context=container]))[animation-md=exit-end]:where([open])) .container {
      inset-inline-end: 0;
    }
  }
  @container (min-width: 840px) {
    :host(:where([query-context=container])[animation-md=none]),
    :host(:where([query-context=container])[animation-md=none]) .container,
    :host(:where([query-context=container])[animation-md=none]) .scrim {
      transition: none;
    }
    :host(:where([query-context=container])[animation-md=fade]) .container {
      inset-inline-start: 0;
      inset-inline-end: auto;
      transition: opacity var(--u-pane-transition);
      opacity: 1;
    }
    :host(:where([query-context=container])[animation-md=fade]:where(:not([open]))) .container {
      opacity: 0;
    }
    :host(:where([query-context=container])[animation-md=exit-start]) .container {
      inset-inline-start: var(--_u-pane-slide-distance);
      inset-inline-end: auto;
      transition: inset var(--u-pane-transition);
      border-start-start-radius: 0;
      border-end-start-radius: 0;
      border-start-end-radius: var(--_u-pane-shape-corner-end);
      border-end-end-radius: var(--_u-pane-shape-corner-end);
    }
    :host(:where([query-context=container])[animation-md=exit-start]:where([open])) .container {
      inset-inline-start: 0;
    }
    :host(:where([query-context=container])[animation-md=exit-end]) .container {
      inset-inline-start: auto;
      inset-inline-end: var(--_u-pane-slide-distance);
      transition: inset var(--u-pane-transition);
      border-start-end-radius: 0;
      border-end-end-radius: 0;
      border-start-start-radius: var(--_u-pane-shape-corner-end);
      border-end-start-radius: var(--_u-pane-shape-corner-end);
    }
    :host(:where([query-context=container])[animation-md=exit-end]:where([open])) .container {
      inset-inline-end: 0;
    }
  }
  @media (min-width: 1200px) {
    :host(:where(:not([query-context=container]))[animation-lg=none]),
    :host(:where(:not([query-context=container]))[animation-lg=none]) .container,
    :host(:where(:not([query-context=container]))[animation-lg=none]) .scrim {
      transition: none;
    }
    :host(:where(:not([query-context=container]))[animation-lg=fade]) .container {
      inset-inline-start: 0;
      inset-inline-end: auto;
      transition: opacity var(--u-pane-transition);
      opacity: 1;
    }
    :host(:where(:not([query-context=container]))[animation-lg=fade]:where(:not([open]))) .container {
      opacity: 0;
    }
    :host(:where(:not([query-context=container]))[animation-lg=exit-start]) .container {
      inset-inline-start: var(--_u-pane-slide-distance);
      inset-inline-end: auto;
      transition: inset var(--u-pane-transition);
      border-start-start-radius: 0;
      border-end-start-radius: 0;
      border-start-end-radius: var(--_u-pane-shape-corner-end);
      border-end-end-radius: var(--_u-pane-shape-corner-end);
    }
    :host(:where(:not([query-context=container]))[animation-lg=exit-start]:where([open])) .container {
      inset-inline-start: 0;
    }
    :host(:where(:not([query-context=container]))[animation-lg=exit-end]) .container {
      inset-inline-start: auto;
      inset-inline-end: var(--_u-pane-slide-distance);
      transition: inset var(--u-pane-transition);
      border-start-end-radius: 0;
      border-end-end-radius: 0;
      border-start-start-radius: var(--_u-pane-shape-corner-end);
      border-end-start-radius: var(--_u-pane-shape-corner-end);
    }
    :host(:where(:not([query-context=container]))[animation-lg=exit-end]:where([open])) .container {
      inset-inline-end: 0;
    }
  }
  @container (min-width: 1200px) {
    :host(:where([query-context=container])[animation-lg=none]),
    :host(:where([query-context=container])[animation-lg=none]) .container,
    :host(:where([query-context=container])[animation-lg=none]) .scrim {
      transition: none;
    }
    :host(:where([query-context=container])[animation-lg=fade]) .container {
      inset-inline-start: 0;
      inset-inline-end: auto;
      transition: opacity var(--u-pane-transition);
      opacity: 1;
    }
    :host(:where([query-context=container])[animation-lg=fade]:where(:not([open]))) .container {
      opacity: 0;
    }
    :host(:where([query-context=container])[animation-lg=exit-start]) .container {
      inset-inline-start: var(--_u-pane-slide-distance);
      inset-inline-end: auto;
      transition: inset var(--u-pane-transition);
      border-start-start-radius: 0;
      border-end-start-radius: 0;
      border-start-end-radius: var(--_u-pane-shape-corner-end);
      border-end-end-radius: var(--_u-pane-shape-corner-end);
    }
    :host(:where([query-context=container])[animation-lg=exit-start]:where([open])) .container {
      inset-inline-start: 0;
    }
    :host(:where([query-context=container])[animation-lg=exit-end]) .container {
      inset-inline-start: auto;
      inset-inline-end: var(--_u-pane-slide-distance);
      transition: inset var(--u-pane-transition);
      border-start-end-radius: 0;
      border-end-end-radius: 0;
      border-start-start-radius: var(--_u-pane-shape-corner-end);
      border-end-start-radius: var(--_u-pane-shape-corner-end);
    }
    :host(:where([query-context=container])[animation-lg=exit-end]:where([open])) .container {
      inset-inline-end: 0;
    }
  }
  @media (min-width: 1600px) {
    :host(:where(:not([query-context=container]))[animation-xl=none]),
    :host(:where(:not([query-context=container]))[animation-xl=none]) .container,
    :host(:where(:not([query-context=container]))[animation-xl=none]) .scrim {
      transition: none;
    }
    :host(:where(:not([query-context=container]))[animation-xl=fade]) .container {
      inset-inline-start: 0;
      inset-inline-end: auto;
      transition: opacity var(--u-pane-transition);
      opacity: 1;
    }
    :host(:where(:not([query-context=container]))[animation-xl=fade]:where(:not([open]))) .container {
      opacity: 0;
    }
    :host(:where(:not([query-context=container]))[animation-xl=exit-start]) .container {
      inset-inline-start: var(--_u-pane-slide-distance);
      inset-inline-end: auto;
      transition: inset var(--u-pane-transition);
      border-start-start-radius: 0;
      border-end-start-radius: 0;
      border-start-end-radius: var(--_u-pane-shape-corner-end);
      border-end-end-radius: var(--_u-pane-shape-corner-end);
    }
    :host(:where(:not([query-context=container]))[animation-xl=exit-start]:where([open])) .container {
      inset-inline-start: 0;
    }
    :host(:where(:not([query-context=container]))[animation-xl=exit-end]) .container {
      inset-inline-start: auto;
      inset-inline-end: var(--_u-pane-slide-distance);
      transition: inset var(--u-pane-transition);
      border-start-end-radius: 0;
      border-end-end-radius: 0;
      border-start-start-radius: var(--_u-pane-shape-corner-end);
      border-end-start-radius: var(--_u-pane-shape-corner-end);
    }
    :host(:where(:not([query-context=container]))[animation-xl=exit-end]:where([open])) .container {
      inset-inline-end: 0;
    }
  }
  @container (min-width: 1600px) {
    :host(:where([query-context=container])[animation-xl=none]),
    :host(:where([query-context=container])[animation-xl=none]) .container,
    :host(:where([query-context=container])[animation-xl=none]) .scrim {
      transition: none;
    }
    :host(:where([query-context=container])[animation-xl=fade]) .container {
      inset-inline-start: 0;
      inset-inline-end: auto;
      transition: opacity var(--u-pane-transition);
      opacity: 1;
    }
    :host(:where([query-context=container])[animation-xl=fade]:where(:not([open]))) .container {
      opacity: 0;
    }
    :host(:where([query-context=container])[animation-xl=exit-start]) .container {
      inset-inline-start: var(--_u-pane-slide-distance);
      inset-inline-end: auto;
      transition: inset var(--u-pane-transition);
      border-start-start-radius: 0;
      border-end-start-radius: 0;
      border-start-end-radius: var(--_u-pane-shape-corner-end);
      border-end-end-radius: var(--_u-pane-shape-corner-end);
    }
    :host(:where([query-context=container])[animation-xl=exit-start]:where([open])) .container {
      inset-inline-start: 0;
    }
    :host(:where([query-context=container])[animation-xl=exit-end]) .container {
      inset-inline-start: auto;
      inset-inline-end: var(--_u-pane-slide-distance);
      transition: inset var(--u-pane-transition);
      border-start-end-radius: 0;
      border-end-end-radius: 0;
      border-start-start-radius: var(--_u-pane-shape-corner-end);
      border-end-start-radius: var(--_u-pane-shape-corner-end);
    }
    :host(:where([query-context=container])[animation-xl=exit-end]:where([open])) .container {
      inset-inline-end: 0;
    }
  }
`;var jl=new Set(["sidebar","fullscreen"]),Vn,jn,Ot,Zo,Yr,Wn,Ne=(Wn=class extends T{constructor(){super(...arguments);p(this,Vn);p(this,jn);p(this,Ot);p(this,Zo);p(this,Yr);this.variant="transparent",this.mode="fixed",this.queryContext="media",this.animation="exit",h(this,Vn,null),h(this,jn,null),h(this,Ot,!1),h(this,Zo,()=>{this.close()}),h(this,Yr,e=>{e.key==="Escape"&&this.open&&jl.has(this.mode)&&this.close()})}get open(){return a(this,Vn)??!jl.has(this.mode)}set open(e){let n=this.open;h(this,Vn,e),n!==e&&(this.requestUpdate("open",n),this.dispatchEvent(new Event(e?"open":"close",{bubbles:!0,composed:!0})))}show(){this.open=!0}close(){this.open=!1}toggle(){this.open=!this.open}disconnectedCallback(){super.disconnectedCallback(),a(this,Ot)&&(document.removeEventListener("keydown",a(this,Yr)),h(this,Ot,!1))}updated(e){super.updated(e);let n=this.open;a(this,jn)!==n&&(this.toggleAttribute("open",n),h(this,jn,n));let i=n&&jl.has(this.mode);i&&!a(this,Ot)?(document.addEventListener("keydown",a(this,Yr)),h(this,Ot,!0)):!i&&a(this,Ot)&&(document.removeEventListener("keydown",a(this,Yr)),h(this,Ot,!1))}render(){return m`
      <div class="scrim" part="scrim" @click=${a(this,Zo)}></div>
      <aside class="container" part="container">
        <header class="header" part="header">
          <slot name="header"></slot>
        </header>
        <div class="content" part="content">
          <slot></slot>
        </div>
      </aside>
    `}},Vn=new WeakMap,jn=new WeakMap,Ot=new WeakMap,Zo=new WeakMap,Yr=new WeakMap,Wn.styles=[$,cu],Wn);o([l({type:String,reflect:!0})],Ne.prototype,"variant",void 0);o([l({type:String,reflect:!0})],Ne.prototype,"mode",void 0);o([l({type:String,reflect:!0,attribute:"mode-sm"})],Ne.prototype,"modeSm",void 0);o([l({type:String,reflect:!0,attribute:"mode-md"})],Ne.prototype,"modeMd",void 0);o([l({type:String,reflect:!0,attribute:"mode-lg"})],Ne.prototype,"modeLg",void 0);o([l({type:String,reflect:!0,attribute:"mode-xl"})],Ne.prototype,"modeXl",void 0);o([l({type:String,reflect:!0,attribute:"query-context"})],Ne.prototype,"queryContext",void 0);o([l({type:String,reflect:!0})],Ne.prototype,"animation",void 0);o([l({type:String,reflect:!0,attribute:"animation-sm"})],Ne.prototype,"animationSm",void 0);o([l({type:String,reflect:!0,attribute:"animation-md"})],Ne.prototype,"animationMd",void 0);o([l({type:String,reflect:!0,attribute:"animation-lg"})],Ne.prototype,"animationLg",void 0);o([l({type:String,reflect:!0,attribute:"animation-xl"})],Ne.prototype,"animationXl",void 0);o([l({type:Boolean})],Ne.prototype,"open",null);Ne=o([b("u-pane")],Ne);var du=g`
  :host {
    --_navigation-width: 0;
    --_navigation-drawer-width: min(var(--u-navigation-drawer-width, 360px), 85vw);
    --_navigation-drawer-width-negative: calc(var(--_navigation-drawer-width) * -1);
    --_navigation-drawer-corner-shape: var(--u-navigation-drawer-corner-shape, var(--u-shape-corner-large, 16px));
    --_scrim-opacity: var(--u-drawer-scrim-opacity, .4);
    display: block;
    width: 100%;
    height: 100%;
    --u-app-bar-offset: var(--_navigation-width);
  }

  :host(.disable-transition) * {
    transition: none !important;
  }
  :host(.disable-transition) * ::slotted(u-top-app-bar) {
    transition: none !important;
  }

  .drawer {
    transition: inset 375ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  .drawer,
  .drawer u-elevation,
  .drawer .drawer-container {
    border-start-end-radius: var(--_navigation-drawer-corner-shape);
    border-end-end-radius: var(--_navigation-drawer-corner-shape);
  }
  .drawer.toggle u-elevation {
    --u-elevation-level: 1;
  }

  .drawer-container {
    height: 100%;
    overflow: hidden;
  }

  .scrim {
    --_modal-drawer-open-progress: 0;
    position: absolute;
    inset-inline-start: 0;
    inset-block-start: 0;
    width: 100vw;
    height: 100vh;
    background: var(--u-drawer-scrim-color, var(--u-color-scrim, rgb(0, 0, 0)));
    pointer-events: none;
    opacity: calc(var(--_scrim-opacity) * var(--_modal-drawer-open-progress));
    transition: opacity 375ms linear;
  }
  .scrim.moving {
    transition: none;
  }
  .scrim.toggle {
    --_modal-drawer-open-progress: 1;
    pointer-events: auto;
  }

  @media (min-width: 840px) {
    .content slot {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
  }
  @media (min-width: 1200px) {
    .container {
      --_navigation-width: var(--_navigation-drawer-width);
    }
    .container:has(.drawer.toggle) {
      --_navigation-width: 0;
    }
    .drawer {
      border-radius: 0;
      inset-inline-start: 0;
    }
    .drawer.toggle {
      inset-inline-start: var(--_navigation-drawer-width-negative);
    }
    u-elevation,
    .scrim {
      display: none;
    }
  }
  .content {
    position: fixed;
    inset: 0;
    z-index: 1;
    overflow: auto;
  }

  .drawer {
    position: relative;
    width: var(--_navigation-drawer-width);
    z-index: var(--u-side-navigation-z-index, 1030);
    pointer-events: auto;
  }

  .scrim {
    z-index: 1;
  }

  swiper-container {
    height: 100%;
    --u-app-bar-offset: var(--_navigation-width);
  }

  swiper-container::part(wrapper) {
    pointer-events: none;
    z-index: 2;
  }

  @media (min-width: 1200px) {
    :host {
      --_navigation-width: var(--_navigation-drawer-width);
    }
    .content {
      position: static;
    }
    swiper-container::part(container) {
      display: grid;
      grid-template-columns: var(--_navigation-width) minmax(0, 1fr);
      transition: 375ms cubic-bezier(0.19, 1, 0.22, 1);
    }
    .dummy-slide {
      display: none;
    }
  }
`;var uu=g`
  :host {
    --_navigation-width: 0;
    --_navigation-drawer-width: min(var(--u-navigation-drawer-width, 360px), 85vw);
    --_navigation-drawer-width-negative: calc(var(--_navigation-drawer-width) * -1);
    --_navigation-drawer-corner-shape: var(--u-navigation-drawer-corner-shape, var(--u-shape-corner-large, 16px));
    --_scrim-opacity: var(--u-drawer-scrim-opacity, .4);
    display: block;
    width: 100%;
    height: 100%;
    --u-app-bar-offset: var(--_navigation-width);
  }

  :host(.disable-transition) * {
    transition: none !important;
  }
  :host(.disable-transition) * ::slotted(u-top-app-bar) {
    transition: none !important;
  }

  .drawer {
    transition: inset 375ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  .drawer,
  .drawer u-elevation,
  .drawer .drawer-container {
    border-start-end-radius: var(--_navigation-drawer-corner-shape);
    border-end-end-radius: var(--_navigation-drawer-corner-shape);
  }
  .drawer.toggle u-elevation {
    --u-elevation-level: 1;
  }

  .drawer-container {
    height: 100%;
    overflow: hidden;
  }

  .scrim {
    --_modal-drawer-open-progress: 0;
    position: absolute;
    inset-inline-start: 0;
    inset-block-start: 0;
    width: 100vw;
    height: 100vh;
    background: var(--u-drawer-scrim-color, var(--u-color-scrim, rgb(0, 0, 0)));
    pointer-events: none;
    opacity: calc(var(--_scrim-opacity) * var(--_modal-drawer-open-progress));
    transition: opacity 375ms linear;
  }
  .scrim.moving {
    transition: none;
  }
  .scrim.toggle {
    --_modal-drawer-open-progress: 1;
    pointer-events: auto;
  }

  @media (min-width: 840px) {
    .content slot {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
  }
  @media (min-width: 1200px) {
    .container {
      --_navigation-width: var(--_navigation-drawer-width);
    }
    .container:has(.drawer.toggle) {
      --_navigation-width: 0;
    }
    .drawer {
      border-radius: 0;
      inset-inline-start: 0;
    }
    .drawer.toggle {
      inset-inline-start: var(--_navigation-drawer-width-negative);
    }
    u-elevation,
    .scrim {
      display: none;
    }
  }
  .navigation {
    position: fixed;
    inset-inline-start: 0;
    inset-block-start: 0;
    height: 100%;
    z-index: var(--u-side-navigation-z-index, 1030);
  }

  .drawer {
    position: absolute;
    inset-inline-start: var(--_navigation-drawer-width-negative);
    inset-block-start: 0;
    width: var(--_navigation-drawer-width);
    height: 100%;
    border-start-end-radius: var(--_navigation-drawer-corner-shape);
    border-end-end-radius: var(--_navigation-drawer-corner-shape);
    overflow: hidden;
  }
  .drawer.toggle {
    inset-inline-start: 0;
  }

  .grid {
    display: grid;
    grid-template-columns: var(--_navigation-width) minmax(0, 1fr);
    transition: 375ms cubic-bezier(0.19, 1, 0.22, 1);
    --u-app-bar-offset: var(--_navigation-width);
  }

  @media (min-width: 1200px) {
    .drawer {
      inset-inline-start: 0;
    }
    .drawer.toggle {
      inset-inline-start: var(--_navigation-drawer-width-negative);
    }
  }
`;var Gn,Yn,Xn=(Yn=class extends T{constructor(){super(...arguments);p(this,Gn);h(this,Gn,!1),this.disableSlideAnimation=!1}get toggleDrawer(){return a(this,Gn)}set toggleDrawer(e){h(this,Gn,e),this.disableSlideAnimation||this.swiperContainer?.swiper?.slideTo(e?0:1)}render(){return ur.navigationDrawer.useSwiperJs?this.renderWithSwipe():this.renderDefault()}renderDefault(){let e={toggle:this.toggleDrawer};return m`
      <div class="grid container">
        <div>
          <div class="navigation">
            <div class="scrim ${q(e)}" @click="${this.scrimClick}"></div>
            <div class="drawer ${q(e)}">
              <u-elevation></u-elevation>
              <div class="drawer-container">
                <slot name="drawer"></slot>
              </div>
            </div>
            <slot name="rail"></slot>
          </div>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `}renderWithSwipe(){let e={toggle:this.toggleDrawer};return m`
      <swiper-container
        class="container"
        initial-slide="1"
        resistance-ratio="0"
        slides-per-view="auto"
        simulate-touch="false"
        @swiperactiveindexchange="${this.swiperActiveIndexChange}"
        @swiperslidermove="${this.swiperSliderMove}"
        @swipertransitionend="${this.swiperTransitionEnd}"
        @swipertransitionstart="${this.swiperTransitionStart}"
        @swiperslidesgridlengthchange="${this.slidesGridLengthChange}">
        <swiper-slide class="drawer ${q(e)}">
          <u-elevation></u-elevation>
          <div class="drawer-container">
            <slot name="drawer"></slot>
          </div>
        </swiper-slide>
        <swiper-slide class="dummy-slide"></swiper-slide>

        <div id="scroll-container" class="content" slot="container-end">
          <slot></slot>
        </div>
        <div class="scrim ${q(e)}" @click="${this.scrimClick}" slot="container-end"></div>
      </swiper-container>
    `}swiperActiveIndexChange(){this.swiperContainer?.swiper&&(this.toggleDrawer=!this.swiperContainer.swiper.activeIndex)}swiperTransitionStart(){this.scrim.classList.add("moving")}slidesGridLengthChange(){if(!this.swiperContainer?.swiper)return;this.classList.add("disable-transition");let e=this.swiperContainer.swiper.snapGrid.length;this.swiperContainer.swiper.slideTo(e===1?0:1,0),this.disableSlideAnimation=!0,this.toggleDrawer=!0,this.toggleDrawer=!1,this.disableSlideAnimation=!1,setTimeout(()=>this.classList.remove("disable-transition"))}swiperTransitionEnd(){this.scrim.style.removeProperty("--_modal-drawer-open-progress"),this.scrim.classList.remove("moving")}swiperSliderMove(e){let n=e.detail[0];this.scrim.style.setProperty("--_modal-drawer-open-progress",`${1-n.progress}`)}scrimClick(){this.toggleDrawer=!1,this.swiperContainer?.swiper?.slideTo(1)}},Gn=new WeakMap,Yn.styles=[$,ur.navigationDrawer.useSwiperJs?du:uu],Yn);o([l({type:Boolean,attribute:"toggle-drawer"})],Xn.prototype,"toggleDrawer",null);o([C("swiper-container")],Xn.prototype,"swiperContainer",void 0);o([C(".scrim")],Xn.prototype,"scrim",void 0);o([C("#scroll-container")],Xn.prototype,"scrollContainer",void 0);Xn=o([b("u-side-navigation")],Xn);var hu=g`
  :host {
    display: block;
    padding-inline-start: var(--u-nav-rail-headline-padding-inline-start, calc(var(--u-nav-rail-item-horizontal-full-width-leading-space, 16px) + var(--u-nav-rail-item-active-indicator-leading-space, 16px)));
    padding-inline-end: var(--u-nav-rail-headline-padding-inline-end, var(--u-nav-rail-item-active-indicator-leading-space, 16px));
    padding-block: var(--u-nav-rail-headline-padding-block, 20px 8px);
  }

  .container {
    font-family: var(--u-font-family, var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"));
    line-height: var(--u-nav-rail-headline-line-height, var(--u-title-s-line-height, 1.25rem));
    font-size: var(--u-nav-rail-headline-font-size, var(--u-title-s-font-size, 0.875rem));
    letter-spacing: var(--u-nav-rail-headline-letter-spacing, var(--u-title-s-letter-spacing, 0.0071428571rem));
    font-weight: var(--u-nav-rail-headline-font-weight, var(--u-title-s-font-weight, var(--u-font-weight-medium, 500)));
    color: var(--u-nav-rail-headline-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
  }
`;var Kn,pu=(Kn=class extends T{render(){return m`<div class="container" part="container"><slot></slot></div>`}},Kn.styles=[$,hu],Kn);pu=o([b("u-navigation-rail-headline")],pu);var mu=g`
  :host {
    display: flex;
    --_nav-rail-item-icon-size: var(--u-nav-rail-item-icon-size, 24px);
    --_nav-rail-item-state-layer-color: var(--u-nav-rail-item-state-layer-color, var(--u-color-on-secondary-container, rgb(29, 25, 43)));
  }

  :host(:not([variant=expanded])) {
    width: 100%;
  }

  .container {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    color: var(--u-nav-rail-item-inactive-text-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
  }

  .content {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    pointer-events: none;
  }

  .active-indicator {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    border-radius: var(--u-nav-rail-item-active-indicator-shape, var(--u-shape-corner-full, 9999px));
    transition: background-color 150ms;
    overflow: hidden;
  }

  .active-indicator::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: var(--_nav-rail-item-state-layer-color);
    opacity: 0;
    transition: opacity 150ms;
    pointer-events: none;
    z-index: 1;
  }

  @media (hover: hover) {
    :host(:not([disabled]):hover) .active-indicator::before {
      opacity: var(--u-state-hover-opacity, 0.08);
    }
  }
  :host(:not([disabled])) .button:focus-visible ~ .content .active-indicator::before {
    opacity: var(--u-state-focus-opacity, 0.1);
  }

  :host(:not([disabled])) .button:active ~ .content .active-indicator::before {
    opacity: var(--u-state-pressed-opacity, 0.1);
  }

  .pill-ripple {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    z-index: 0;
    pointer-events: none;
    --u-ripple-pressed-color: var(--_nav-rail-item-state-layer-color);
    --u-ripple-hover-color: transparent;
  }

  :host(:not([variant=expanded])) .content {
    flex-direction: column;
    gap: var(--u-nav-rail-item-vertical-icon-label-space, 4px);
  }
  :host(:not([variant=expanded])) .active-indicator {
    width: var(--u-nav-rail-item-vertical-active-indicator-width, 56px);
    height: var(--u-nav-rail-item-vertical-active-indicator-height, 32px);
  }
  :host(:not([variant=expanded])) .container {
    min-height: var(--u-nav-rail-item-container-height, 64px);
    padding-block: var(--u-nav-rail-item-vertical-padding-block, 4px);
    padding-inline: var(--u-nav-rail-item-vertical-leading-space, 16px) var(--u-nav-rail-item-vertical-trailing-space, 16px);
  }
  :host(:not([variant=expanded])) .label {
    font-family: var(--u-font-family, var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"));
    line-height: var(--u-nav-rail-item-label-line-height, var(--u-label-m-line-height, 1rem));
    font-size: var(--u-nav-rail-item-label-font-size, var(--u-label-m-font-size, 0.75rem));
    letter-spacing: var(--u-nav-rail-item-label-letter-spacing, var(--u-label-m-letter-spacing, 0.0416666667rem));
    font-weight: var(--u-nav-rail-item-label-font-weight, var(--u-label-m-font-weight, var(--u-font-weight-medium, 500)));
    letter-spacing: var(--u-nav-rail-item-label-letter-spacing, 0.5px);
  }

  :host([variant=expanded]) {
    width: 100%;
  }
  :host([variant=expanded]) .content {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    align-self: stretch;
  }
  :host([variant=expanded]) .active-indicator {
    flex: 0 0 auto;
    flex-direction: row;
    justify-content: flex-start;
    padding-inline: var(--u-nav-rail-item-active-indicator-leading-space, 16px) var(--u-nav-rail-item-active-indicator-trailing-space, 16px);
    gap: var(--u-nav-rail-item-horizontal-icon-label-space, 8px);
    max-width: 100%;
    align-self: stretch;
  }
  :host([variant=expanded]) .container {
    justify-content: flex-start;
    min-height: var(--u-nav-rail-item-container-height, 64px);
    padding-block: var(--u-nav-rail-item-expanded-padding-block, 2px);
    padding-inline-start: var(--u-nav-rail-item-horizontal-full-width-leading-space, 16px);
  }
  :host([variant=expanded]) .label {
    font-family: var(--u-font-family, var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"));
    line-height: var(--u-nav-rail-item-label-expanded-line-height, var(--u-label-l-line-height, 1.25rem));
    font-size: var(--u-nav-rail-item-label-expanded-font-size, var(--u-label-l-font-size, 0.875rem));
    letter-spacing: var(--u-nav-rail-item-label-expanded-letter-spacing, var(--u-label-l-letter-spacing, 0.0071428571rem));
    font-weight: var(--u-nav-rail-item-label-expanded-font-weight, var(--u-label-l-font-weight, var(--u-font-weight-medium, 500)));
    text-align: start;
  }

  .icon {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--_nav-rail-item-icon-size);
    height: var(--_nav-rail-item-icon-size);
    font-size: var(--_nav-rail-item-icon-size);
    line-height: 1;
    color: var(--u-nav-rail-item-inactive-icon-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
    flex: 0 0 auto;
    z-index: 2;
  }

  .label {
    color: var(--u-nav-rail-item-inactive-label-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    z-index: 2;
  }

  .container:not(.has-label) .label,
  .container:not(.has-icon) .icon {
    display: none;
  }

  :host(.active) .container .active-indicator,
  :host([active]) .container .active-indicator {
    background-color: var(--u-nav-rail-item-active-indicator-color, var(--u-color-secondary-container, rgb(232, 222, 248)));
  }
  :host(.active) .container .icon,
  :host([active]) .container .icon {
    color: var(--u-nav-rail-item-active-icon-color, var(--u-color-on-secondary-container, rgb(29, 25, 43)));
  }
  :host(.active) .container .label,
  :host([active]) .container .label {
    font-weight: var(--u-nav-rail-item-active-label-weight, var(--u-font-weight-bold, 700));
  }

  :host(.active:not([variant=expanded])) .container .label,
  :host([active]:not([variant=expanded])) .container .label {
    color: var(--u-nav-rail-item-vertical-active-label-color, var(--u-color-secondary, rgb(98, 91, 113)));
  }

  :host(.active[variant=expanded]) .container .label,
  :host([active][variant=expanded]) .container .label {
    color: var(--u-nav-rail-item-horizontal-active-label-color, var(--u-color-on-secondary-container, rgb(29, 25, 43)));
  }
`;var Jo,Qo,Zn,Jn,Qn,Yt=(Qn=class extends J{constructor(){super(...arguments);p(this,Jo);p(this,Qo);p(this,Zn);p(this,Jn);this._hasIcon=!1,this._hasLabel=!1,this.active=!1,this.variant="collapsed",h(this,Jo,()=>{this._hasIcon=this.assignedIcons.length>0}),h(this,Qo,()=>{this._hasLabel=this.assignedLabelNodes.some(e=>e.nodeType===Node.TEXT_NODE?!!e.textContent?.trim():!0)}),h(this,Zn,e=>{this.disabled||!this._pillRipple||this._pillRipple.createRipple(e.clientX,e.clientY,"mouseup")}),h(this,Jn,e=>{this.disabled||!this._pillRipple||!e.touches[0]||this._pillRipple.createRipple(e.touches[0].clientX,e.touches[0].clientY,"touchend")})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-labelledby","text"),this.renderRipple=!1,this.addEventListener("mousedown",a(this,Zn)),this.addEventListener("touchstart",a(this,Jn),{passive:!0})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mousedown",a(this,Zn)),this.removeEventListener("touchstart",a(this,Jn))}_getContainerClasses(){return Q(N({},super._getContainerClasses()),{"has-icon":this._hasIcon,"has-label":this._hasLabel})}_renderContent(){let e=m`
      <span class="icon" part="icon">
        <slot
          name="icon"
          aria-hidden="true"
          @slotchange=${a(this,Jo)}></slot>
        <slot name="badge"></slot>
      </span>
    `,n=m`
      <span class="label" id="text" part="label">
        <slot @slotchange=${a(this,Qo)}></slot>
      </span>
    `;return this.variant==="expanded"?m`
        <span class="active-indicator" part="active-indicator">
          <u-ripple class="pill-ripple" ?disabled=${this.disabled}></u-ripple>
          ${e}
          ${n}
        </span>
      `:m`
      <span class="active-indicator" part="active-indicator">
        <u-ripple class="pill-ripple" ?disabled=${this.disabled}></u-ripple>
        ${e}
      </span>
      ${n}
    `}},Jo=new WeakMap,Qo=new WeakMap,Zn=new WeakMap,Jn=new WeakMap,Qn.styles=[J.styles,mu],Qn);o([E()],Yt.prototype,"_hasIcon",void 0);o([E()],Yt.prototype,"_hasLabel",void 0);o([l({type:Boolean,reflect:!0})],Yt.prototype,"active",void 0);o([l({reflect:!0})],Yt.prototype,"variant",void 0);o([ee({slot:"icon",flatten:!0})],Yt.prototype,"assignedIcons",void 0);o([hs({flatten:!0})],Yt.prototype,"assignedLabelNodes",void 0);o([C(".pill-ripple")],Yt.prototype,"_pillRipple",void 0);Yt=o([b("u-navigation-rail-item")],Yt);var fu=g`
  :host {
    --_nav-rail-width: var(--u-nav-rail-width, 96px);
    --_nav-rail-expanded-width: clamp(
      var(--u-nav-rail-expanded-width-minimum, 220px),
      var(--u-nav-rail-expanded-width, 360px),
      var(--u-nav-rail-expanded-width-maximum, 360px)
    );
    --_nav-rail-expanded-width-negative: calc(var(--_nav-rail-expanded-width) * -1);
    --_nav-rail-expanded-corner-shape: var(--u-nav-rail-expanded-corner-shape, var(--u-shape-corner-large, 16px));
    --_navigation-width: 0;
    --_scrim-opacity: var(--u-drawer-scrim-opacity, .4);
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    --u-app-bar-offset: var(--_navigation-width);
  }

  :host(.disable-transition) * {
    transition: none !important;
  }

  .grid {
    display: grid;
    grid-template-columns: var(--_navigation-width) minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr);
    transition: grid-template-columns 375ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 100%;
    height: 100%;
    min-height: 0;
    --u-app-bar-offset: var(--_navigation-width);
  }

  .rail-column {
    height: 100%;
  }

  .content {
    height: 100%;
    min-width: 0;
  }

  .rail {
    display: none;
    flex-direction: column;
    position: absolute;
    inset-inline-start: 0;
    inset-block-start: 0;
    width: var(--_nav-rail-width);
    height: 100%;
    background-color: var(--u-nav-rail-container-color, var(--u-color-surface, rgb(254, 247, 255)));
    color: var(--u-nav-rail-text-color, var(--u-color-on-surface, rgb(29, 27, 32)));
    overflow: hidden;
    z-index: var(--u-nav-rail-z-index, 1030);
  }

  .rail-items {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: var(--u-nav-rail-item-vertical-space, 4px);
    padding-block: var(--u-nav-rail-vertical-trailing-space, 20px);
    overflow-y: auto;
    overflow-x: hidden;
  }

  .rail-expanded {
    display: none;
    flex-direction: column;
    position: absolute;
    inset-inline-start: var(--_nav-rail-expanded-width-negative);
    inset-block-start: 0;
    width: var(--_nav-rail-expanded-width);
    height: 100%;
    background-color: var(--u-nav-rail-container-color, var(--u-color-surface, rgb(254, 247, 255)));
    color: var(--u-nav-rail-text-color, var(--u-color-on-surface, rgb(29, 27, 32)));
    overflow: hidden;
    z-index: calc(var(--u-nav-rail-z-index, 1030) + 1);
    transition: inset 375ms cubic-bezier(0.19, 1, 0.22, 1);
    border-start-end-radius: var(--_nav-rail-expanded-corner-shape);
    border-end-end-radius: var(--_nav-rail-expanded-corner-shape);
  }

  .top,
  .bottom {
    display: none;
    flex-direction: column;
    align-items: center;
    gap: var(--u-nav-rail-edge-gap, 4px);
  }

  :host([has-top]) .top {
    display: flex;
    padding-block-start: var(--u-nav-rail-top-space, 44px);
    min-height: calc(var(--u-nav-rail-top-space, 44px) + var(--u-nav-rail-header-space-minimum, 40px));
  }

  :host([has-bottom]) .bottom {
    display: flex;
    padding-block-end: var(--u-nav-rail-vertical-trailing-space, 20px);
  }

  .rail-items-expanded {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: var(--u-nav-rail-expanded-between-item-space, 0);
    padding-block: var(--u-nav-rail-vertical-trailing-space, 20px);
    overflow-y: auto;
    overflow-x: hidden;
    min-height: 0;
  }

  :host([has-bottom]) .rail-items-expanded {
    padding-block-end: 0;
  }

  :host([has-bottom]) .bottom {
    padding-block-end: var(--u-nav-rail-vertical-trailing-space, 20px);
  }

  .rail-items,
  .rail-items-expanded {
    scrollbar-width: none;
  }
  .rail-items::-webkit-scrollbar,
  .rail-items-expanded::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }

  .scroll-thumb {
    position: absolute;
    inset-inline-end: var(--u-nav-rail-scrollbar-inline-inset, 2px);
    width: var(--u-nav-rail-scrollbar-width, 4px);
    background: var(--u-nav-rail-scrollbar-thumb-color, var(--u-color-outline-variant, rgb(202, 196, 208)));
    border-radius: 999px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 200ms;
  }

  .rail:hover .scroll-thumb,
  .rail.scrolling .scroll-thumb,
  .rail-expanded:hover .scroll-thumb,
  .rail-expanded.scrolling .scroll-thumb {
    opacity: 1;
  }

  .scrim {
    --_modal-rail-open-progress: 0;
    position: absolute;
    inset: 0;
    background: var(--u-drawer-scrim-color, var(--u-color-scrim, rgb(0, 0, 0)));
    pointer-events: none;
    opacity: calc(var(--_scrim-opacity) * var(--_modal-rail-open-progress));
    transition: opacity 375ms linear;
    z-index: var(--u-nav-rail-z-index, 1030);
  }

  :host([toggle-drawer][has-expanded-items]) .rail-expanded {
    display: flex;
    inset-inline-start: 0;
  }
  :host([toggle-drawer][has-expanded-items]) .scrim {
    --_modal-rail-open-progress: 1;
    pointer-events: auto;
  }

  :host([has-expanded-items]) .rail-expanded {
    display: flex;
  }

  @media (min-width: 840px) and (max-width: 1200px) {
    :host([has-rail-items]) {
      --_navigation-width: var(--_nav-rail-width);
    }
    :host([has-rail-items]) .rail {
      display: flex;
    }
  }
  @media (min-width: 1200px) {
    :host,
    :host([has-rail-items]) {
      --_navigation-width: var(--_nav-rail-expanded-width);
    }
    :host([has-rail-items]:not([has-expanded-items])) {
      --_navigation-width: var(--_nav-rail-width);
    }
    :host([toggle-drawer][has-rail-items]) {
      --_navigation-width: var(--_nav-rail-width);
    }
    :host([toggle-drawer]:not([has-rail-items])) {
      --_navigation-width: 0;
    }
    :host([toggle-drawer][has-rail-items]) .rail,
    :host([has-rail-items]:not([has-expanded-items])) .rail {
      display: flex;
    }
    :host([has-expanded-items]) .rail-expanded {
      display: flex;
      inset-inline-start: 0;
      border-start-end-radius: 0;
      border-end-end-radius: 0;
    }
    :host([toggle-drawer][has-expanded-items]) .rail-expanded {
      inset-inline-start: var(--_nav-rail-expanded-width-negative);
    }
    .scrim,
    :host([toggle-drawer][has-expanded-items]) .scrim {
      --_modal-rail-open-progress: 0;
      pointer-events: none;
    }
  }
`;var gr,Wl,ea,ta,ra,na,ia,Gl,ei,dt=(ei=class extends T{constructor(){super(...arguments);p(this,gr);p(this,ea);p(this,ta);p(this,ra);p(this,na);p(this,ia);this.toggleDrawer=!1,h(this,ea,()=>{this.toggleDrawer=!1}),h(this,ta,()=>{this.assignedCollapsedItems.length>0?this.setAttribute("has-rail-items",""):this.removeAttribute("has-rail-items");for(let e of this.assignedCollapsedItems)c(this,gr,Gl).call(this,e)&&(e.variant="collapsed")}),h(this,ra,()=>{this.assignedExpandedElements.length>0?this.setAttribute("has-expanded-items",""):this.removeAttribute("has-expanded-items");for(let e of this.assignedExpandedElements)c(this,gr,Gl).call(this,e)&&(e.variant="expanded")}),h(this,na,()=>{this.assignedTop.length>0?this.setAttribute("has-top",""):this.removeAttribute("has-top")}),h(this,ia,()=>{this.assignedBottom.length>0?this.setAttribute("has-bottom",""):this.removeAttribute("has-bottom")})}render(){return m`
      <div class="grid">
        <div class="rail-column"></div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
      <div class="scrim" part="scrim" @click=${a(this,ea)}></div>
      <aside class="rail" part="rail">
        <div class="top" part="top">
          <slot name="top" @slotchange=${a(this,na)}></slot>
        </div>
        <div class="rail-items" part="rail-items">
          <slot name="rail" @slotchange=${a(this,ta)}></slot>
        </div>
        <div class="bottom" part="bottom">
          <slot name="bottom" @slotchange=${a(this,ia)}></slot>
        </div>
        <div class="scroll-thumb" part="scroll-thumb" aria-hidden="true"></div>
      </aside>
      <aside class="rail-expanded" part="rail-expanded">
        <div class="rail-items-expanded" part="rail-items-expanded">
          <slot name="expanded" @slotchange=${a(this,ra)}></slot>
        </div>
        <div class="scroll-thumb" part="scroll-thumb" aria-hidden="true"></div>
      </aside>
    `}firstUpdated(){c(this,gr,Wl).call(this,this.railItemsEl,this.railThumbEl,this.railEl),c(this,gr,Wl).call(this,this.railItemsExpandedEl,this.railExpandedThumbEl,this.railExpandedEl)}},gr=new WeakSet,Wl=function(e,n,i){let u=()=>{let _=getComputedStyle(i).getPropertyValue("--_nav-rail-expanded-corner-shape").trim(),S=parseFloat(_);return Number.isFinite(S)?S:16},f=()=>{let _=e.clientHeight,S=e.scrollHeight;if(S<=_+1||_===0){n.style.display="none";return}n.style.display="";let I=u(),L=Math.max(0,_-I*2),M=_/S,z=Math.max(24,Math.floor(L*M)),X=Math.max(0,L-z),te=(S-_<=0?0:e.scrollTop/(S-_))*X;n.style.height=`${z}px`,n.style.top=`${I+te}px`},v=0;e.addEventListener("scroll",()=>{f(),i.classList.add("scrolling"),window.clearTimeout(v),v=window.setTimeout(()=>i.classList.remove("scrolling"),800)},{passive:!0}),new ResizeObserver(f).observe(e),f(),e.querySelector("slot")?.addEventListener("slotchange",()=>requestAnimationFrame(f))},ea=new WeakMap,ta=new WeakMap,ra=new WeakMap,na=new WeakMap,ia=new WeakMap,Gl=function(e){return e.tagName==="U-NAVIGATION-RAIL-ITEM"},ei.styles=[$,fu],ei);o([l({type:Boolean,attribute:"toggle-drawer",reflect:!0})],dt.prototype,"toggleDrawer",void 0);o([ee({slot:"rail",flatten:!0})],dt.prototype,"assignedCollapsedItems",void 0);o([ee({slot:"expanded",flatten:!0})],dt.prototype,"assignedExpandedElements",void 0);o([ee({slot:"top",flatten:!0})],dt.prototype,"assignedTop",void 0);o([ee({slot:"bottom",flatten:!0})],dt.prototype,"assignedBottom",void 0);o([C(".rail")],dt.prototype,"railEl",void 0);o([C(".rail-expanded")],dt.prototype,"railExpandedEl",void 0);o([C(".rail-items")],dt.prototype,"railItemsEl",void 0);o([C(".rail-items-expanded")],dt.prototype,"railItemsExpandedEl",void 0);o([C(".rail .scroll-thumb")],dt.prototype,"railThumbEl",void 0);o([C(".rail-expanded .scroll-thumb")],dt.prototype,"railExpandedThumbEl",void 0);dt=o([b("u-navigation-rail")],dt);var Xt=Symbol("scrollContainerContext");var gu=g`
  :host {
    display: block;
    --u-elevation-level: 2;
  }

  .container {
    position: relative;
    background-color: var(--u-nav-bar-container-color, var(--u-color-surface-container, rgb(243, 237, 247)));
    color: var(--u-nav-bar-text-color, var(--u-color-on-surface, rgb(29, 27, 32)));
    transition: background-color 100ms;
  }

  .absolute {
    position: absolute;
    inset-inline: 0;
    inset-block-end: 0;
    z-index: var(--u-nav-bar-z-index, 1010);
  }

  .fixed {
    position: fixed;
    inset-inline: 0;
    inset-block-end: 0;
    inset-inline-start: var(--u-app-bar-offset, 0);
    z-index: var(--u-nav-bar-z-index, 1010);
    transition: background-color 100ms, inset-inline-start 375ms cubic-bezier(0.19, 1, 0.22, 1);
  }

  .spacing {
    padding-block-start: var(--_content-height);
  }

  .content {
    display: flex;
    align-items: stretch;
    justify-content: space-around;
    min-height: var(--u-nav-bar-container-height, 64px);
    padding-inline: 0;
    gap: var(--u-nav-bar-item-between-space, 0);
  }
`;var oa,Yl,ti,ri=(ti=class extends T{constructor(){super(...arguments);p(this,oa);this.position="fixed",this.scrollContainer=void 0,this.containerSizeObserver=null}render(){let e=q({[this.position]:!0}),n=this.position!=="static"?m`<div class="spacing"></div>`:k;return m`
      ${n}
      <div class="container ${e}" part="container">
        <div class="content" part="content">
          <slot></slot>
        </div>
      </div>
    `}firstUpdated(e){super.firstUpdated(e),this.containerSizeObserver=new ResizeObserver(()=>c(this,oa,Yl).call(this)),this.containerSizeObserver.observe(this._container),c(this,oa,Yl).call(this)}disconnectedCallback(){super.disconnectedCallback(),this.containerSizeObserver?.disconnect(),this.containerSizeObserver=null}},oa=new WeakSet,Yl=function(){this.style.setProperty("--_content-height",`${this._container.clientHeight}px`)},ti.styles=[$,gu],ti);o([l({reflect:!0})],ri.prototype,"position",void 0);o([l({attribute:"scroll-container"})],ri.prototype,"scrollContainer",void 0);o([ce({context:Xt,subscribe:!0}),E()],ri.prototype,"_scrollContainerFromContext",void 0);o([C(".container",!0)],ri.prototype,"_container",void 0);ri=o([b("u-navigation-bar")],ri);var vu=g`
  :host {
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    --_nav-bar-item-icon-size: var(--u-nav-bar-item-icon-size, 24px);
  }

  .container {
    display: flex;
    flex: 1 1 0;
    align-items: center;
    justify-content: center;
    color: var(--u-nav-bar-item-inactive-text-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
  }

  .content {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--u-nav-bar-item-vertical-between-space, 6px);
  }

  :host([variant=horizontal]) .content {
    flex-direction: column;
  }

  .active-indicator {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    border-radius: var(--u-nav-bar-item-active-indicator-shape, var(--u-shape-corner-full, 9999px));
    transition: background-color 150ms;
  }

  :host(:not([variant=horizontal])) .active-indicator {
    width: var(--u-nav-bar-item-vertical-active-indicator-width, 56px);
    height: var(--u-nav-bar-item-vertical-active-indicator-height, 32px);
  }

  :host([variant=horizontal]) .active-indicator {
    flex-direction: row;
    height: var(--u-nav-bar-item-horizontal-active-indicator-height, 40px);
    padding-inline: var(--u-nav-bar-item-horizontal-active-indicator-leading-space, 16px) var(--u-nav-bar-item-horizontal-active-indicator-trailing-space, 16px);
    gap: var(--u-nav-bar-item-horizontal-active-indicator-icon-label-space, 4px);
  }

  .icon {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--_nav-bar-item-icon-size);
    height: var(--_nav-bar-item-icon-size);
    font-size: var(--_nav-bar-item-icon-size);
    line-height: 1;
    color: var(--u-nav-bar-item-inactive-icon-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
  }

  .label {
    font-family: var(--u-font-family, var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"));
    line-height: var(--u-nav-bar-item-label-line-height, var(--u-label-m-line-height, 1rem));
    font-size: var(--u-nav-bar-item-label-font-size, var(--u-label-m-font-size, 0.75rem));
    letter-spacing: var(--u-nav-bar-item-label-letter-spacing, var(--u-label-m-letter-spacing, 0.0416666667rem));
    font-weight: var(--u-nav-bar-item-label-font-weight, var(--u-label-m-font-weight, var(--u-font-weight-medium, 500)));
    letter-spacing: var(--u-nav-bar-item-label-letter-spacing, 0.5px);
    color: var(--u-nav-bar-item-inactive-label-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  :host([variant=horizontal]) .label {
    text-align: start;
  }

  .container:not(.has-label) .label,
  .container:not(.has-icon) .icon {
    display: none;
  }

  :host(.active) .container .active-indicator,
  :host([active]) .container .active-indicator {
    background-color: var(--u-nav-bar-item-active-indicator-color, var(--u-color-secondary-container, rgb(232, 222, 248)));
  }
  :host(.active) .container .icon,
  :host([active]) .container .icon {
    color: var(--u-nav-bar-item-active-icon-color, var(--u-color-on-secondary-container, rgb(29, 25, 43)));
  }
  :host(.active) .container .label,
  :host([active]) .container .label {
    color: var(--u-nav-bar-item-active-label-color, var(--u-color-secondary, rgb(98, 91, 113)));
  }
`;var aa,sa,ni,vr=(ni=class extends J{constructor(){super(...arguments);p(this,aa);p(this,sa);this._hasIcon=!1,this._hasLabel=!1,this.active=!1,this.variant="vertical",h(this,aa,()=>{this._hasIcon=this.assignedIcons.length>0}),h(this,sa,()=>{this._hasLabel=this.assignedLabelNodes.some(e=>e.nodeType===Node.TEXT_NODE?!!e.textContent?.trim():!0)})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-labelledby","text")}_getContainerClasses(){return Q(N({},super._getContainerClasses()),{"has-icon":this._hasIcon,"has-label":this._hasLabel})}_renderContent(){let e=m`
      <span class="icon" part="icon">
        <slot
          name="icon"
          aria-hidden="true"
          @slotchange=${a(this,aa)}></slot>
        <slot name="badge"></slot>
      </span>
    `,n=m`
      <span class="label" id="text" part="label">
        <slot @slotchange=${a(this,sa)}></slot>
      </span>
    `;return this.variant==="horizontal"?m`
        <span class="active-indicator" part="active-indicator">
          ${e}
          ${n}
        </span>
      `:m`
      <span class="active-indicator" part="active-indicator">
        ${e}
      </span>
      ${n}
    `}},aa=new WeakMap,sa=new WeakMap,ni.styles=[J.styles,vu],ni);o([E()],vr.prototype,"_hasIcon",void 0);o([E()],vr.prototype,"_hasLabel",void 0);o([l({type:Boolean,reflect:!0})],vr.prototype,"active",void 0);o([l({reflect:!0})],vr.prototype,"variant",void 0);o([ee({slot:"icon",flatten:!0})],vr.prototype,"assignedIcons",void 0);o([hs({flatten:!0})],vr.prototype,"assignedLabelNodes",void 0);vr=o([b("u-navigation-bar-item")],vr);var bu=g`
  :host {
    display: block;
  }

  slot[name=leading-icon]::slotted(u-icon-button) {
    color: inherit;
  }

  .container {
    background-color: var(--u-top-app-bar-container-color, var(--u-color-body, var(--u-color-surface, rgb(254, 247, 255))));
    color: var(--u-top-app-bar-text-color, var(--u-color-on-surface, rgb(29, 27, 32)));
    transition: background-color 100ms;
  }

  .fixed {
    transition: background-color 100ms, inset-inline-start 375ms cubic-bezier(0.19, 1, 0.22, 1);
  }

  .scrolled {
    background-color: var(--u-top-app-bar-on-scroll-container-color, var(--u-color-surface-container, rgb(243, 237, 247)));
  }

  .leading-icon,
  .trailing-icon {
    display: none;
    align-items: center;
    gap: var(--u-top-app-bar-icons-gap, 8px);
  }

  .has-leading-icon .leading-icon,
  .has-trailing-icon .trailing-icon {
    display: inline-flex;
  }

  .absolute {
    position: absolute;
    inset-inline: 0;
    inset-block-start: 0;
  }

  .fixed {
    position: fixed;
    inset-inline: 0;
    inset-block-start: 0;
    inset-inline-start: var(--u-app-bar-offset, 0);
  }

  .absolute,
  .fixed {
    z-index: var(--u-fixed-app-bar-z-index, 1010);
  }

  .spacing {
    padding-top: var(--_content-height);
  }

  .extended-content {
    display: flex;
    align-items: flex-end;
    padding-inline: var(--u-extended-content-inline-padding, 16px);
  }

  .medium + .extended-content {
    font-family: var(--u-font-family, var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"));
    line-height: var(--u-extended-content-medium-line-height, var(--u-headline-s-line-height, 2rem));
    font-size: var(--u-extended-content-medium-font-size, var(--u-headline-s-font-size, 1.5rem));
    letter-spacing: var(--u-extended-content-medium-letter-spacing, var(--u-headline-s-letter-spacing, 0rem));
    font-weight: var(--u-extended-content-medium-font-weight, var(--u-headline-s-font-weight, var(--u-font-weight-regular, 400)));
    height: var(--u-extended-content-medium-height, 3.5rem);
    padding-bottom: var(--u-extended-content-medium-padding-bottom, 24px);
  }

  .large + .extended-content {
    font-family: var(--u-font-family, var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"));
    line-height: var(--u-extended-content-large-line-height, var(--u-headline-m-line-height, 2.25rem));
    font-size: var(--u-extended-content-large-font-size, var(--u-headline-m-font-size, 1.75rem));
    letter-spacing: var(--u-extended-content-large-letter-spacing, var(--u-headline-m-letter-spacing, 0rem));
    font-weight: var(--u-extended-content-large-font-weight, var(--u-headline-m-font-weight, var(--u-font-weight-regular, 400)));
    height: var(--u-extended-content-medium-large, 6rem);
    padding-bottom: var(--u-extended-content-large-padding-bottom, 28px);
  }

  .content {
    display: flex;
    align-items: center;
    background-color: inherit;
    transition: inherit;
    min-height: var(--u-top-app-bar-min-height, 56px);
  }
  @media (min-width: 840px) {
    .content {
      min-height: var(--u-top-app-bar-extended-min-height, 64px);
    }
  }

  .headline {
    overflow: hidden;
    font-family: var(--u-font-family, var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"));
    line-height: var(--u-top-app-bar-headline-line-height, var(--u-title-l-line-height, 1.75rem));
    font-size: var(--u-top-app-bar-headline-font-size, var(--u-title-l-font-size, 1.375rem));
    letter-spacing: var(--u-top-app-bar-headline-letter-spacing, var(--u-title-l-letter-spacing, 0rem));
    font-weight: var(--u-top-app-bar-headline-font-weight, var(--u-title-l-font-weight, var(--u-font-weight-regular, 400)));
    margin-inline: var(--u-headline-margin, 16px);
  }
  .has-leading-icon .headline {
    margin-inline-start: 0;
  }

  .leading-icon {
    margin-inline: var(--u-leading-icon-margin, 8px);
  }

  @media (min-width: 1200px) {
    .leading-icon {
      min-width: var(--u-app-bar-leading-icon-width, 0);
      box-sizing: border-box;
    }
  }
  .trailing-icon {
    padding-inline: var(--u-trailing-icon-margin, 8px);
    margin-inline-start: auto;
  }
`;var Xl,br,Fe,Ts,yu,xu,wu,Kt,Kl,Xr,Ue=(Xr=class extends T{constructor(){super(...arguments);p(this,Fe);p(this,br);p(this,Kt);this._hasLeadingIcon=!1,this._hasTrailingIcon=!1,this.position="fixed",this.size="small",this.headline="",this.containerScrolled=!1,this.containerSizeObserver=null,h(this,br,void 0),this.scrollContainerElement=null,h(this,Kt,()=>{let e=this.scrollContainerElement??window,n=Math.max(this._extendedContent?.offsetHeight??0,0),i=Xl._getScrollTop(e);if(this.containerScrolled=i>n,this._headlineElement&&(this._headlineElement.style.opacity=i>=n?"1":"0"),n===0)return;let s=this._extendedContent.offsetHeight*.7;if(i>s){this._extendedContent.style.opacity="0";return}this._extendedContent.style.opacity=1-i/s+""})}get scrollContainer(){return this.attributes.getNamedItem("scrollContainer")?.value}set scrollContainer(e){h(this,br,e),c(this,Fe,Ts).call(this)}render(){let e=m`
      <div class="extended-content" part="extended-content">
        <slot name="extended-content">${this.headline}</slot>
      </div>
    `,n=q({[this.position]:!0,[this.size]:!0,scrolled:this.containerScrolled,"has-leading-icon":this._hasLeadingIcon,"has-trailing-icon":this._hasTrailingIcon}),i=this.position!=="static"?m`<div class="spacing"></div>`:k;return m`
      ${i}
      <div class="container ${n}" part="container">
        <div class="content" part="content">
          <div class="icon leading-icon" part="icon leading">
            <slot name="leading-icon" @slotchange="${c(this,Fe,xu)}"></slot>
          </div>
          <div class="headline" part="headline">
            <slot>
              <span>${this.headline}</span>
            </slot>
          </div>

          <div class="icon trailing-icon" part="icon trailing">
            <slot name="trailing-icon" @slotchange="${c(this,Fe,wu)}"></slot>
          </div>
        </div>
        <slot name="additional-content"></slot>
      </div>
      ${this.size!=="small"?e:k}
    `}updated(e){super.updated(e),e.has("_scrollContainerFromContext")&&c(this,Fe,Ts).call(this),a(this,Kt).call(this)}firstUpdated(e){super.firstUpdated(e),this.containerSizeObserver=new ResizeObserver(()=>c(this,Fe,Kl).call(this)),this.containerSizeObserver.observe(this._container),c(this,Fe,Kl).call(this)}connectedCallback(){super.connectedCallback();let e=this.attributes.getNamedItem("scrollContainer")?.value;e!==void 0&&a(this,br)===void 0&&h(this,br,e),c(this,Fe,Ts).call(this)}disconnectedCallback(){super.disconnectedCallback(),this.scrollContainerElement?.removeEventListener("scroll",a(this,Kt)),this.scrollContainerElement=null,this.containerSizeObserver?.disconnect(),this.containerSizeObserver=null}static _getScrollTop(e){return typeof e.scrollY=="number"?e.scrollY:typeof e.scrollTop=="number"?e.scrollTop:document.body.scrollTop}},br=new WeakMap,Fe=new WeakSet,Ts=function(){let e=c(this,Fe,yu).call(this);e!==this.scrollContainerElement&&(this.scrollContainerElement?.removeEventListener("scroll",a(this,Kt)),this.scrollContainerElement=e,this.scrollContainerElement?.addEventListener("scroll",a(this,Kt)),a(this,Kt).call(this))},yu=function(){let e=a(this,br);return e==="none"?null:e instanceof HTMLElement?e:typeof e=="string"&&e.length>0?e==="window"?window:document.getElementById(e):this._scrollContainerFromContext?this._scrollContainerFromContext:window},xu=function(){this._hasLeadingIcon=this.assignedLeadingIcons.length>0},wu=function(){this._hasTrailingIcon=this.assignedTrailingIcons.length>0},Kt=new WeakMap,Kl=function(){this.style.setProperty("--_content-height",`${this._container.clientHeight}px`)},Xl=Xr,Xr.styles=[$,bu],Xr);o([E()],Ue.prototype,"_hasLeadingIcon",void 0);o([E()],Ue.prototype,"_hasTrailingIcon",void 0);o([l({reflect:!0})],Ue.prototype,"position",void 0);o([l({reflect:!0})],Ue.prototype,"size",void 0);o([l()],Ue.prototype,"headline",void 0);o([l({reflect:!0})],Ue.prototype,"scrollContainer",null);o([ce({context:Xt,subscribe:!0}),E()],Ue.prototype,"_scrollContainerFromContext",void 0);o([E()],Ue.prototype,"containerScrolled",void 0);o([ee({slot:"leading-icon",flatten:!0})],Ue.prototype,"assignedLeadingIcons",void 0);o([ee({slot:"trailing-icon",flatten:!0})],Ue.prototype,"assignedTrailingIcons",void 0);o([C(".container",!0)],Ue.prototype,"_container",void 0);o([C(".extended-content")],Ue.prototype,"_extendedContent",void 0);o([C(".headline")],Ue.prototype,"_headlineElement",void 0);Ue=Xl=o([b("u-top-app-bar")],Ue);var _u=g`
  :host {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: nowrap;
  }

  :host([alignment=start]) {
    justify-content: flex-start;
  }

  :host([alignment=center]) {
    justify-content: center;
  }

  :host([alignment=end]) {
    justify-content: flex-end;
  }
`;var Zl=class Zl extends T{constructor(){super(...arguments),this.alignment="start"}render(){return m`
      <slot></slot>`}};Zl.styles=[_u];var Zt=Zl;o([l({reflect:!0})],Zt.prototype,"alignment",void 0);var Cu=g`
  :host([stack][alignment=start]) {
    align-items: flex-start;
  }

  :host([stack][alignment=center]) {
    align-items: center;
  }

  :host([stack][alignment=end]) {
    align-items: flex-end;
  }

  :host([stack]) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;var ii,Jl=(ii=class extends Zt{constructor(){super(...arguments),this.stack=!1,this.alignment="end"}},ii.styles=[Zt.styles,Cu],ii);o([l({type:Boolean,reflect:!0})],Jl.prototype,"stack",void 0);Jl=o([b("u-button-set")],Jl);var ku=g`
  .container {
    --u-elevation-level: var(--u-fab-elevation-level, 3);
    aspect-ratio: 1;
  }
  @media (hover: hover) {
    .container:hover:not(:focus-within):not(:active) {
      --u-elevation-level: var(--u-fab-hover-elevation-level, 4);
    }
  }

  .lowered {
    --u-elevation-level: var(--u-fab-elevation-level, 1);
  }
  @media (hover: hover) {
    .lowered:hover:not(:focus-within):not(:active) {
      --u-elevation-level: var(--u-fab-elevation-level, 2);
    }
  }

  .small {
    width: var(--u-fab-small-size, 40px);
    border-radius: var(--u-fab-small-shape-corner, var(--u-shape-corner-medium, 12px));
  }

  .large {
    width: var(--u-fab-large-size, 96px);
    border-radius: var(--u-fab-large-shape-corner, var(--u-shape-corner-extra-large, 28px));
  }
  .large .icon {
    font-size: var(--u-fab-large-icon-size, 2rem);
  }

  .extended,
  .medium {
    width: var(--u-fab-medium-size, 56px);
    border-radius: var(--u-fab-medium-shape-corner, var(--u-shape-corner-large, 16px));
  }

  .extended .icon,
  .small .icon,
  .medium .icon {
    font-size: var(--u-fab-icon-size, 1.5rem);
  }

  .extended {
    width: auto;
    height: var(--u-extended-fab-height, 56px);
    aspect-ratio: auto;
    min-width: var(--u-extended-fab-min-width, 80px);
    padding-inline: var(--u-extended-fab-padding, 16px 24px);
  }
  .extended .icon {
    margin-inline-end: var(--u-extended-fab-icon-margin, 12px);
  }

  .primary {
    background-color: var(--u-fab-primary-container-color, var(--u-color-primary-container, rgb(234, 221, 255)));
    color: var(--u-fab-primary-text-color, var(--u-color-on-primary-container, rgb(33, 0, 93)));
  }

  .secondary {
    background-color: var(--u-fab-secondary-container-color, var(--u-color-secondary-container, rgb(232, 222, 248)));
    color: var(--u-fab-secondary-text-color, var(--u-color-on-secondary-container, rgb(29, 25, 43)));
  }

  .tertiary {
    background-color: var(--u-fab-tertiary-container-color, var(--u-color-tertiary-container, rgb(255, 216, 228)));
    color: var(--u-fab-tertiary-text-color, var(--u-color-on-tertiary-container, rgb(49, 17, 29)));
  }

  .branded,
  .surface {
    background-color: var(--u-fab-surface-container-color, var(--u-color-surface-container-high, rgb(236, 230, 240)));
    color: var(--u-fab-surface-text-color, var(--_color-primary));
  }
  .branded.lowered,
  .surface.lowered {
    background-color: var(--u-fab-surface-container-color, var(--u-color-surface-container-low, rgb(247, 242, 250)));
  }
`;var oi,yr=(oi=class extends ct{constructor(){super(...arguments),this.color="primary",this.size="medium",this.label=null,this.lowered=!1,this.scrollContainer=void 0}get _effectiveScrollContainer(){let t=this.scrollContainer;return t==="none"?null:t instanceof HTMLElement?t:typeof t=="string"&&t.length>0?t==="window"?window:document.getElementById(t):this._scrollContainerFromContext??window}get extended(){return!!this.label}_getContainerClasses(){return Q(N({},super._getContainerClasses()),{[this.color]:!0,[this.size]:!0,lowered:this.lowered,extended:this.extended})}_renderContent(){let t=m`<span id="text">${this.label}</span>`;return m`
      <span class="icon" aria-hidden="true"><slot></slot></span>
      ${this.label?t:k}
    `}},oi.styles=[ct.styles,ku],oi);o([l()],yr.prototype,"color",void 0);o([l()],yr.prototype,"size",void 0);o([l()],yr.prototype,"label",void 0);o([l({type:Boolean,reflect:!0})],yr.prototype,"lowered",void 0);o([l({attribute:"scroll-container"})],yr.prototype,"scrollContainer",void 0);o([ce({context:Xt,subscribe:!0}),E()],yr.prototype,"_scrollContainerFromContext",void 0);yr=o([b("u-fab")],yr);var Ss=Symbol("fabMenuColorContext");var Eu=g`
  .container {
    --_animation-duration: 225ms;
    --_height: var(--u-fab-menu-item-height, 56px);
    height: var(--_height);
    border-radius: calc(var(--_height) / 2);
    padding-inline: var(--u-fab-menu-item-padding, 24px);
    opacity: 0;
    transition: opacity var(--_animation-duration) linear;
  }
  .container:not(.has-icon) .icon {
    display: none;
  }

  .icon {
    font-size: var(--u-fab-icon-size, 1.5rem);
    margin-inline-end: var(--u-fab-menu-item-icon-margin, 8px);
  }

  .label {
    font-family: var(--u-font-family, var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"));
    line-height: var(--u-fab-menu-item-label-line-height, var(--u-title-m-line-height, 1.5rem));
    font-size: var(--u-fab-menu-item-label-font-size, var(--u-title-m-font-size, 1rem));
    letter-spacing: var(--u-fab-menu-item-label-letter-spacing, var(--u-title-m-letter-spacing, 0.009375rem));
    font-weight: var(--u-fab-menu-item-label-font-weight, var(--u-title-m-font-weight, var(--u-font-weight-medium, 500)));
  }

  .primary {
    background-color: var(--u-fab-menu-item-primary-container-color, var(--u-color-primary-container, rgb(234, 221, 255)));
    color: var(--u-fab-menu-item-primary-text-color, var(--u-color-on-primary-container, rgb(33, 0, 93)));
  }

  .secondary {
    background-color: var(--u-fab-menu-item-secondary-container-color, var(--u-color-secondary-container, rgb(232, 222, 248)));
    color: var(--u-fab-menu-item-secondary-text-color, var(--u-color-on-secondary-container, rgb(29, 25, 43)));
  }

  .tertiary {
    background-color: var(--u-fab-menu-item-tertiary-container-color, var(--u-color-tertiary-container, rgb(255, 216, 228)));
    color: var(--u-fab-menu-item-tertiary-text-color, var(--u-color-on-tertiary-container, rgb(49, 17, 29)));
  }

  .clipper {
    animation: clip-out var(--_animation-duration) forwards linear;
  }

  .open {
    opacity: 1;
    transition-delay: calc(75ms * var(--_animation-delay-increment, 0));
  }
  .open .clipper {
    animation-name: clip-in;
  }
  .open .clipper {
    animation-delay: calc(75ms * var(--_animation-delay-increment, 0));
  }

  @keyframes clip-in {
    0% {
      margin-inline-start: -32px;
    }
    25% {
      margin-inline-start: -8px;
    }
    50% {
      margin-inline-start: 16px;
    }
    100% {
      margin-inline-start: 0;
    }
  }
  @keyframes clip-out {
    0% {
      margin-inline-start: 0;
    }
    100% {
      margin-inline-start: -32px;
    }
  }
`;var Is=Symbol("fabMenuOpenContext");var ai,As,Tu,si,wt=(si=class extends ct{constructor(){super(...arguments);p(this,As);p(this,ai);h(this,ai,0),this.label=null,this._hasIcon=!1}get _index(){return a(this,ai)}set _index(e){h(this,ai,e),this.style.setProperty("--_animation-delay-increment",e.toString())}_getContainerClasses(){return Q(N({},super._getContainerClasses()),{open:this._menuOpen,[this._color]:!0,"has-icon":this._hasIcon})}_renderContent(){return m`
      <span class="clipper"></span>
      <span class="icon" aria-hidden="true">
        <slot @slotchange=${c(this,As,Tu)}></slot>
      </span>
      <span class="label" id="text">${this.label}</span>
    `}},ai=new WeakMap,As=new WeakSet,Tu=function(e){this._hasIcon=e.target.assignedElements({flatten:!0}).length>0},si.styles=[ct.styles,Eu],si);o([ce({context:Ss,subscribe:!0}),E()],wt.prototype,"_color",void 0);o([ce({context:Is,subscribe:!0}),E()],wt.prototype,"_menuOpen",void 0);o([l()],wt.prototype,"label",void 0);o([E()],wt.prototype,"_hasIcon",void 0);o([E()],wt.prototype,"_index",null);wt=o([b("u-fab-menu-item")],wt);var Su=g`
  :host {
    --_fab-menu-morph-duration: var(--u-fab-menu-morph-duration, 175ms);
    --u-button-morph-duration: var(--_fab-menu-morph-duration);
    display: inline-block;
    pointer-events: none;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .menu-items {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    gap: var(--u-fab-menu-item-margin, 4px);
    pointer-events: none;
  }

  .toggle-container {
    position: relative;
  }
  .toggle-container * {
    pointer-events: auto;
  }
  .toggle-container::part(container) {
    --u-elevation-level: 0 !important;
    background: transparent !important;
  }

  .toggle {
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    margin-top: var(--u-fab-menu-toggle-margin, 8px);
  }
  .toggle::part(container) {
    transition: width var(--_fab-menu-morph-duration), height var(--_fab-menu-morph-duration), background-color var(--_fab-menu-morph-duration) linear, border-radius var(--_fab-menu-morph-duration) linear, color var(--_fab-menu-morph-duration) linear;
  }

  .icon-container {
    position: relative;
    height: 1px;
  }

  .icon {
    --_scale: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transform: translate3d(-50%, -50%, 0) scale(var(--_scale));
    transition: opacity, transform;
    transition-duration: calc(var(--_fab-menu-morph-duration) * 0.75);
  }

  .icon-default {
    --_scale: 1;
    opacity: 1;
    transition-delay: calc(var(--_fab-menu-morph-duration) * 0.5);
  }

  .icon-close {
    --_scale: .5;
    opacity: 0;
    transition-delay: 0ms;
  }

  .open .menu-items {
    display: flex;
    pointer-events: auto;
  }
  .open .toggle::part(container) {
    border-radius: 50%;
  }
  .open .icon-default {
    --_scale: .5;
    opacity: 0;
    transition-delay: 0ms;
  }
  .open .icon-close {
    --_scale: 1;
    opacity: 1;
    transition-delay: calc(var(--_fab-menu-morph-duration) * 0.5);
  }
  .open.primary {
    --u-fab-primary-container-color: var(--u-fab-menu-toggle-primary-container-color, var(--u-color-primary, rgb(103, 80, 164)));
    --u-fab-primary-text-color: var(--u-fab-menu-toggle-primary-text-color, var(--u-color-on-primary, rgb(255, 255, 255)));
  }
  .open.secondary {
    --u-fab-secondary-container-color: var(--u-fab-menu-toggle-secondary-container-color, var(--u-color-secondary, rgb(98, 91, 113)));
    --u-fab-secondary-text-color: var(--u-fab-menu-toggle-secondary-text-color, var(--u-color-on-secondary, rgb(255, 255, 255)));
  }
  .open.tertiary {
    --u-fab-tertiary-container-color: var(--u-fab-menu-toggle-tertiary-container-color, var(--u-color-tertiary, rgb(125, 82, 96)));
    --u-fab-tertiary-text-color: var(--u-fab-menu-toggle-tertiary-text-color, var(--u-color-on-tertiary, rgb(255, 255, 255)));
  }

  ::slotted(u-fab-menu-item) {
    --_animation-delay: $i * 50ms;
  }

  ::slotted(u-fab-menu-item) {
    --_animation-delay: $i * 50ms;
  }

  ::slotted(u-fab-menu-item) {
    --_animation-delay: $i * 50ms;
  }

  ::slotted(u-fab-menu-item) {
    --_animation-delay: $i * 50ms;
  }

  ::slotted(u-fab-menu-item) {
    --_animation-delay: $i * 50ms;
  }

  ::slotted(u-fab-menu-item) {
    --_animation-delay: $i * 50ms;
  }

  ::slotted(u-fab-menu-item) {
    --_animation-delay: $i * 50ms;
  }

  ::slotted(u-fab-menu-item) {
    --_animation-delay: $i * 50ms;
  }

  ::slotted(u-fab-menu-item) {
    --_animation-delay: $i * 50ms;
  }

  ::slotted(u-fab-menu-item) {
    --_animation-delay: $i * 50ms;
  }
`;var li,et,Iu,Au,ci,xr,Du,zu,Pu,Lu,Kr,_t=(Kr=class extends T{constructor(){super(...arguments);p(this,et);p(this,li);p(this,ci);p(this,xr);this.color="primary",this.size="medium",this.lowered=!1,this._menuOpen=!1,h(this,li,0),this.scrollContainer=void 0,h(this,ci,e=>{e.key!=="Escape"||!this.open||(e.preventDefault(),e.stopPropagation(),this.close(),this.open||this.focus())}),h(this,xr,e=>{e.composedPath().includes(this)||this.close()})}get open(){return this._menuOpen}set open(e){if(e=!!e,e===this._menuOpen||this.hasUpdated&&!c(this,et,zu).call(this,e))return;let n=this._menuOpen;this._menuOpen=e,this.requestUpdate("open",n),this.hasUpdated&&c(this,et,Du).call(this,e)}get _effectiveScrollContainer(){let e=this.scrollContainer;return e==="none"?null:e instanceof HTMLElement?e:typeof e=="string"&&e.length>0?e==="window"?window:document.getElementById(e):this._scrollContainerFromContext??window}static get observedAttributes(){return[...super.observedAttributes,"aria-label"]}attributeChangedCallback(e,n,i){super.attributeChangedCallback(e,n,i),e==="aria-label"&&this.requestUpdate()}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",a(this,ci)),this.open&&document.addEventListener("click",a(this,xr))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",a(this,ci)),document.removeEventListener("click",a(this,xr))}firstUpdated(e){return ne(this,null,function*(){vd(Kr.prototype,this,"firstUpdated").call(this,e),yield this._toggleContainer?.updateComplete;let n=this._toggleContainer?.buttonElement;n?.setAttribute("tabindex","-1"),n?.setAttribute("aria-hidden","true")})}updated(e){if(super.updated(e),!!e.has("open")){if(this.open){document.addEventListener("click",a(this,xr));return}document.removeEventListener("click",a(this,xr))}}focus(e){this._toggle?.buttonElement?.focus(e)}show(){this.open=!0}close(){this.open=!1}toggle(){this.open=!this.open}render(){let e=q({open:this.open,[this.color]:!0});return m`
      <div class="container ${e}">
        <div
          class="menu-items"
          ?inert=${!this.open}
          @click=${c(this,et,Au)}>
          <slot @slotchange=${c(this,et,Lu)}></slot>
        </div>
        <u-fab class="toggle-container" .size=${this.size}>
          <u-fab 
            class="toggle"
            .color=${this.color}
            .lowered=${this.lowered}
            .size=${this.open?"medium":this.size}
            type="button"
            aria-label=${this.getAttribute("aria-label")||k}
            aria-expanded=${this.open?"true":"false"}
            @click=${c(this,et,Iu)}>
            <span class="icon-container" aria-hidden="true">
              <span class="icon icon-default">
                <slot name="icon"></slot>
              </span>
              <span class="icon icon-close">
                <slot name="close-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill="currentColor">
                    <path
                      d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                </slot>
              </span>
            </span>
          </u-fab>
        </u-fab>
      </div>
    `}},li=new WeakMap,et=new WeakSet,Iu=function(){this.toggle()},Au=function(e){let n=e.composedPath().find(s=>s instanceof wt);if(!n||n.disabled||e.defaultPrevented)return;let i=n.matches(":focus-within");this.close(),!this.open&&i&&this.focus()},ci=new WeakMap,xr=new WeakMap,Du=function(e){return ne(this,null,function*(){let n=++gd(this,li)._,i=c(this,et,Pu).call(this);yield this.updateComplete,yield Promise.all(i.map(f=>f.updateComplete)),this._toggle&&(yield this._toggle.updateComplete);let u=[this.shadowRoot,this._toggle?.shadowRoot,...i.map(f=>f.shadowRoot)].flatMap(f=>f?.getAnimations()??[]);if(yield Promise.all(u.map(f=>f.finished.catch(()=>{}))),n===a(this,li)){if(e){this.dispatchEvent(new Event("opened"));return}this.dispatchEvent(new Event("closed"))}})},zu=function(e){return e?this.dispatchEvent(new Event("open",{cancelable:!0})):this.dispatchEvent(new Event("close",{cancelable:!0}))},Pu=function(){return[...this.children].filter(e=>e instanceof wt)},Lu=function(e){let n=e.target.assignedElements({flatten:!0}),i=0;for(let s of n.filter(u=>u instanceof wt).reverse())s._index=i,i++},Kr.styles=[Su],Kr);o([gs({context:Ss}),l()],_t.prototype,"color",void 0);o([l()],_t.prototype,"size",void 0);o([l({type:Boolean,reflect:!0})],_t.prototype,"lowered",void 0);o([gs({context:Is}),E()],_t.prototype,"_menuOpen",void 0);o([l({type:Boolean,reflect:!0})],_t.prototype,"open",null);o([C("u-fab.toggle")],_t.prototype,"_toggle",void 0);o([C("u-fab.toggle-container")],_t.prototype,"_toggleContainer",void 0);o([l({attribute:"scroll-container"})],_t.prototype,"scrollContainer",void 0);o([ce({context:Xt,subscribe:!0}),E()],_t.prototype,"_scrollContainerFromContext",void 0);_t=o([b("u-fab-menu")],_t);var Mu=g`
  :host {
    display: block;
    position: relative;
    border-radius: var(--u-card-shape-corner, var(--u-shape-corner-medium, 12px));
  }

  :host([variant=elevated]) {
    --u-current-bg-color: var(--u-card-elevated-bg-color, var(--u-color-surface-container-low, rgb(247, 242, 250)));
    background-color: var(--u-current-bg-color);
  }
  :host([variant=elevated]) u-elevation {
    --u-elevation-level: var(--u-elevated-card-elevation-level, 1);
  }

  :host([variant=filled]) {
    --u-current-bg-color: var(--u-card-filled-bg-color, var(--u-color-surface-container-highest, rgb(230, 224, 233)));
    background-color: var(--u-current-bg-color);
  }

  :host([variant=outlined]) {
    --u-current-bg-color: var(--u-card-outlined-bg-color, var(--u-color-surface, rgb(254, 247, 255)));
    background-color: var(--u-current-bg-color);
    border: var(--u-outlined-card-outline-width, 1px) solid var(--u-outlined-card-outline-color, var(--u-color-outline-variant, rgb(202, 196, 208)));
  }

  u-card-content,
  slot {
    border-radius: inherit;
  }
`;var $u=g`
  :host {
    display: block;
  }

  :host(:has(slot > *)) {
    display: none;
  }

  :host([has-content]) {
    padding: var(--u-card-padding, 16px);
  }

  slot {
    border-radius: inherit;
  }
`;var di,Ql=(di=class extends T{constructor(){super(...arguments),this.hasContent=!1}render(){return m`
      <slot @slotchange="${this.handleSlotChange}"></slot>`}handleSlotChange(t){let e=t.target;if(this.hasContent=e.assignedElements({flatten:!0}).length>0,this.hasContent)return;let n=e.assignedNodes({flatten:!0});for(let i of n)if(i.nodeValue?.trim()){this.hasContent=!0;return}this.hasContent=!1}},di.styles=[$,$u],di);o([l({type:Boolean,attribute:"has-content",reflect:!0})],Ql.prototype,"hasContent",void 0);Ql=o([b("u-card-content")],Ql);var Ru=g`
  :host {
    display: block;
    aspect-ratio: 1;
    border-radius: var(--u-card-shape-corner, var(--u-shape-corner-medium, 12px));
  }

  :host([wide]) {
    aspect-ratio: 16/9;
  }
`;var ui,ec=(ui=class extends T{constructor(){super(...arguments),this.wide=!1}render(){return m`
      <slot></slot>`}},ui.styles=[$,Ru],ui);o([l({type:Boolean,reflect:!0})],ec.prototype,"wide",void 0);ec=o([b("u-card-media")],ec);var hi,tc=(hi=class extends T{constructor(){super(...arguments),this.variant="filled"}render(){return m`
      <u-elevation></u-elevation>
      <slot name="before-content"></slot>
      <u-card-content part="content">
        <slot></slot>
      </u-card-content>
      <slot name="after-content"></slot>
    `}},hi.styles=[$,Mu],hi);o([l({reflect:!0})],tc.prototype,"variant",void 0);tc=o([b("u-card")],tc);var Ou=g`
  :host {
    display: block;
    overflow: hidden;
  }
`;var wr,_r,pi,Ds=(pi=class extends T{constructor(){super(...arguments);p(this,wr);p(this,_r);this.open=!1,h(this,wr,null),h(this,_r,()=>{this._content&&(this.style.maxHeight=this.open?`${this._content.scrollHeight}px`:"0")})}render(){return m`<div class="content" part="content"><slot @slotchange=${a(this,_r)}></slot></div>`}firstUpdated(){a(this,_r).call(this),requestAnimationFrame(()=>{this.style.transition="max-height var(--u-collapse-transition-duration, 200ms) var(--u-collapse-transition-timing, ease-out)"}),h(this,wr,new ResizeObserver(()=>a(this,_r).call(this))),a(this,wr).observe(this._content)}updated(e){e.has("open")&&a(this,_r).call(this)}disconnectedCallback(){super.disconnectedCallback(),a(this,wr)?.disconnect(),h(this,wr,null)}},wr=new WeakMap,_r=new WeakMap,pi.styles=[$,Ou],pi);o([l({type:Boolean,reflect:!0})],Ds.prototype,"open",void 0);o([C(".content")],Ds.prototype,"_content",void 0);Ds=o([b("u-collapse")],Ds);var qu=g`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--u-expansion-panel-container-gap, 0.5rem);
  }
`;var Ie=r=>{class t extends r{constructor(){super(...arguments),this.compact=void 0}get isCompact(){return this.compact??this._compactContext??!1}updated(n){super.updated(n),this.toggleAttribute("data-compact",this.isCompact)}}return o([l({type:Boolean})],t.prototype,"compact",void 0),o([ce({context:Go,subscribe:!0}),E()],t.prototype,"_compactContext",void 0),t};var Bu=g`
  :host {
    display: block;
    position: relative;
    background-color: var(--u-expansion-panel-bg-color, var(--u-color-surface-container-low, rgb(247, 242, 250)));
    color: var(--u-expansion-panel-color, var(--u-color-on-surface, rgb(29, 27, 32)));
    border-radius: var(--u-expansion-panel-shape-corner, var(--u-shape-corner-medium, 12px));
    overflow: hidden;
    --_header-min-height: var(--u-expansion-panel-header-min-height, 3rem);
    --_header-padding: var(--u-expansion-panel-header-padding, .75rem 1rem);
  }

  :host([data-compact]) {
    --_header-min-height: var(--u-expansion-panel-compact-header-min-height, 2.5rem);
    --_header-padding: var(--u-expansion-panel-compact-header-padding, .5rem 1rem);
  }

  .header {
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--u-expansion-panel-header-gap, 0.75rem);
    padding: var(--_header-padding);
    min-height: var(--_header-min-height);
    cursor: pointer;
    user-select: none;
    font-family: var(--u-font-family);
    line-height: var(--u-title-m-line-height);
    font-size: var(--u-title-m-font-size);
    letter-spacing: var(--u-title-m-letter-spacing);
    font-weight: var(--u-title-m-font-weight);
  }

  :host([disabled]) .header {
    cursor: default;
    color: color-mix(in srgb, var(--u-color-on-surface, rgb(29, 27, 32)) 38%, transparent);
  }

  .header-content {
    flex: 1 1 auto;
    min-width: 0;
  }

  .chevron {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    line-height: 1;
    color: var(--u-expansion-panel-chevron-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
    transition: transform 200ms ease-out;
  }

  :host([expanded]) .chevron {
    transform: rotate(180deg);
  }

  .body {
    border-top: 1px solid transparent;
    transition: border-color 200ms ease-out;
  }

  :host([expanded]) .body {
    border-top-color: var(--u-expansion-panel-divider-color, var(--u-color-outline-variant, rgb(202, 196, 208)));
  }

  ::slotted([slot=header]) {
    display: block;
  }
`;var Zr,la,mi,Jr=(mi=class extends Ie(T){constructor(){super(...arguments);p(this,Zr);p(this,la);h(this,Zr,!1),this.disabled=!1,this.hideToggle=!1,h(this,la,()=>{this.toggle()})}get expanded(){return a(this,Zr)}set expanded(e){let n=a(this,Zr);h(this,Zr,e),this.requestUpdate("expanded",n),n!==e&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}toggle(){this.disabled||(this.expanded=!this.expanded)}render(){return m`
      <div class="header" part="header" @click=${a(this,la)}>
        <div class="header-content">
          <slot name="header"></slot>
        </div>
        ${this.hideToggle?k:m`
          <span class="chevron" part="chevron" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill="currentColor">
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </span>
        `}
        <u-ripple ?disabled=${this.disabled}></u-ripple>
      </div>
      <u-collapse class="body" part="content" ?open=${this.expanded}>
        <slot></slot>
      </u-collapse>
    `}},Zr=new WeakMap,la=new WeakMap,mi.styles=[$,Bu],mi);o([l({type:Boolean,reflect:!0})],Jr.prototype,"expanded",null);o([l({type:Boolean,reflect:!0})],Jr.prototype,"disabled",void 0);o([l({type:Boolean,reflect:!0,attribute:"hide-toggle"})],Jr.prototype,"hideToggle",void 0);Jr=o([b("u-expansion-panel")],Jr);var fi,gi,rc=(gi=class extends T{constructor(){super(...arguments);p(this,fi);this.multi=!1,h(this,fi,e=>{if(this.multi)return;let n=e.target;if(!(!(n instanceof Jr)||!n.expanded))for(let i of this.querySelectorAll("u-expansion-panel"))i!==n&&i.expanded&&(i.expanded=!1)})}connectedCallback(){super.connectedCallback(),this.addEventListener("change",a(this,fi))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",a(this,fi))}render(){return m`<slot></slot>`}},fi=new WeakMap,gi.styles=[$,qu],gi);o([l({type:Boolean,reflect:!0})],rc.prototype,"multi",void 0);rc=o([b("u-expansion-panel-container")],rc);var{I:D1}=wd;var Nu=r=>r.strings===void 0;var Xm={},Fu=(r,t=Xm)=>r._$AH=t;var tt=hr(class extends Lt{constructor(r){if(super(r),r.type!==lt.PROPERTY&&r.type!==lt.ATTRIBUTE&&r.type!==lt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Nu(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(r,[t]){if(t===xt||t===k)return t;let e=r.element,n=r.name;if(r.type===lt.PROPERTY){if(t===e[n])return xt}else if(r.type===lt.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(n))return xt}else if(r.type===lt.ATTRIBUTE&&e.getAttribute(n)===t+"")return xt;return Fu(r),t}});var Uu="important",Km=" !"+Uu,qt=hr(class extends Lt{constructor(r){if(super(r),r.type!==lt.ATTRIBUTE||r.name!=="style"||r.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((t,e)=>{let n=r[e];return n==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(r,[t]){let{style:e}=r.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?e.removeProperty(n):e[n]=null);for(let n in t){let i=t[n];if(i!=null){this.ft.add(n);let s=typeof i=="string"&&i.endsWith(Km);n.includes("-")||s?e.setProperty(n,s?i.slice(0,-11):i,s?Uu:""):e[n]=i}}return xt}});var Hu=g`
  :host {
    --_track-height: var(--u-slider-track-height, 16px);
    --_handle-width: var(--u-slider-handle-width, 4px);
    --_handle-height: var(--u-slider-handle-height, 44px);
    --_handle-gap: var(--u-slider-handle-gap, 6px);
    --_pressed-handle-width: var(--u-slider-pressed-handle-width, 2px);
    --_inner-corner: var(--u-slider-inner-corner, 2px);
    --_state-layer-size: var(--u-slider-state-layer-size, 40px);
    --_stop-indicator-size: var(--u-slider-stop-indicator-size, 4px);
    --_stop-indicator-trailing-space: var(--u-slider-stop-indicator-space, 2px);
    --_value-indicator-size: var(--u-slider-value-indicator-size, 44px);
    --_value-indicator-gap: var(--u-slider-value-indicator-gap, 12px);
    --_active-color: var(--u-slider-active-color, var(--u-color-primary, rgb(103, 80, 164)));
    --_inactive-color: var(--u-slider-inactive-color, var(--u-color-secondary-container, rgb(232, 222, 248)));
    --_handle-color: var(--u-slider-handle-color, var(--u-color-primary, rgb(103, 80, 164)));
    --_value-indicator-bg: var(--u-slider-value-indicator-bg, var(--u-color-inverse-surface, rgb(50, 47, 53)));
    --_value-indicator-color: var(--u-slider-value-indicator-color, var(--u-color-on-inverse-surface, rgb(245, 239, 247)));
    --_stop-indicator-active-color: var(--u-slider-stop-indicator-active-color, var(--u-color-on-primary, rgb(255, 255, 255)));
    --_stop-indicator-inactive-color: var(--u-slider-stop-indicator-inactive-color, var(--u-color-on-secondary-container, rgb(29, 25, 43)));
    --_tick-active-color: var(--u-slider-tick-active-color, var(--u-color-on-primary, rgb(255, 255, 255)));
    --_tick-inactive-color: var(--u-slider-tick-inactive-color, var(--u-color-on-secondary-container, rgb(29, 25, 43)));
    --_disabled-opacity: var(--u-slider-disabled-opacity, .38);
    display: block;
    position: relative;
    width: 100%;
    height: max(var(--_handle-height), var(--_state-layer-size));
    touch-action: none;
    --_typo: label-l;
  }

  :host([size=extra-small]) {
    --_track-height: 16px;
    --_handle-height: 44px;
    --_state-layer-size: 40px;
    --_value-indicator-size: 44px;
    --_typo: label-l;
  }

  :host([size=small]) {
    --_track-height: 24px;
    --_handle-height: 52px;
    --_state-layer-size: 48px;
    --_value-indicator-size: 48px;
    --_typo: label-l;
  }

  :host([size=medium]) {
    --_track-height: 40px;
    --_handle-height: 64px;
    --_state-layer-size: 56px;
    --_value-indicator-size: 56px;
    --_handle-width: 6px;
    --_pressed-handle-width: 4px;
    --_typo: title-m;
  }

  :host([size=large]) {
    --_track-height: 56px;
    --_handle-height: 80px;
    --_state-layer-size: 68px;
    --_value-indicator-size: 64px;
    --_handle-width: 6px;
    --_pressed-handle-width: 4px;
    --_typo: title-m;
  }

  :host([size=extra-large]) {
    --_track-height: 96px;
    --_handle-height: 120px;
    --_state-layer-size: 96px;
    --_value-indicator-size: 80px;
    --_handle-width: 8px;
    --_pressed-handle-width: 6px;
    --_typo: title-l;
  }

  :host([disabled]) {
    opacity: var(--_disabled-opacity);
    pointer-events: none;
  }

  .container {
    position: relative;
    width: 100%;
    height: 100%;
    padding-inline: calc(var(--_handle-width) / 2);
    box-sizing: border-box;
    cursor: pointer;
  }

  :host([disabled]) .container {
    cursor: default;
  }

  .track {
    position: absolute;
    inset-block: 50%;
    inset-inline: calc(var(--_handle-width) / 2);
    transform: translateY(-50%);
    height: var(--_track-height);
    pointer-events: none;
  }

  .segment {
    position: absolute;
    inset-block: 0;
    border-radius: calc(var(--_track-height) / 2);
  }

  .segment.inactive {
    background-color: var(--_inactive-color);
  }

  .segment.active {
    background-color: var(--_active-color);
  }

  .stop-indicator {
    position: absolute;
    top: 50%;
    inset-inline-end: var(--_stop-indicator-trailing-space);
    width: var(--_stop-indicator-size);
    height: var(--_stop-indicator-size);
    border-radius: 50%;
    background-color: var(--_stop-indicator-inactive-color);
    transform: translateY(-50%);
    pointer-events: none;
  }

  .stop-indicator.leading {
    inset-inline-start: var(--_stop-indicator-trailing-space);
    inset-inline-end: auto;
  }

  .container:not(.range) .stop-indicator.leading {
    background-color: var(--_stop-indicator-active-color);
  }

  .ticks {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .tick {
    position: absolute;
    top: 50%;
    width: var(--_stop-indicator-size);
    height: var(--_stop-indicator-size);
    border-radius: 50%;
    background-color: var(--_tick-inactive-color);
    transform: translate(-50%, -50%);
  }

  .tick.active {
    background-color: var(--_tick-active-color);
  }

  .tick.in-gap {
    opacity: 0;
  }

  input.native {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: transparent;
    appearance: none;
    -webkit-appearance: none;
    opacity: 0;
    pointer-events: none;
  }

  input.native::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;
    width: var(--_state-layer-size);
    height: var(--_state-layer-size);
    border-radius: 50%;
    background: transparent;
    border: 0;
  }

  input.native::-moz-range-thumb {
    width: var(--_state-layer-size);
    height: var(--_state-layer-size);
    border-radius: 50%;
    background: transparent;
    border: 0;
  }

  .thumb {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: var(--_handle-width);
    height: var(--_handle-height);
    background-color: var(--_handle-color);
    border-radius: calc(var(--_handle-width) / 2);
    pointer-events: none;
  }

  .focus-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    width: calc(var(--_handle-width) + 8px);
    height: calc(var(--_handle-height) + 8px);
    border-radius: calc((var(--_handle-width) + 8px) / 2);
    transform: translate(-50%, -50%);
    outline: 2px solid var(--_focus-ring-color);
    outline-offset: 0;
    opacity: 0;
    pointer-events: none;
    transition: opacity 120ms ease-out;
  }

  input.native:focus-visible ~ .thumb .focus-ring {
    opacity: 1;
  }

  #input:focus-visible ~ .thumb-start .focus-ring {
    opacity: 1;
  }

  #input-end:focus-visible ~ .thumb-end .focus-ring {
    opacity: 1;
  }

  .container.range #input:focus-visible ~ .thumb-end .focus-ring,
  .container.range #input-end:focus-visible ~ .thumb-start .focus-ring {
    opacity: 0;
  }

  .value-indicator {
    position: absolute;
    bottom: calc(100% + var(--_value-indicator-gap));
    left: 50%;
    min-width: var(--_value-indicator-size);
    height: var(--_value-indicator-size);
    padding: 0 12px;
    border-radius: calc(var(--_value-indicator-size) / 2);
    background-color: var(--_value-indicator-bg);
    color: var(--_value-indicator-color);
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    transform: translateX(-50%);
    pointer-events: none;
    box-sizing: border-box;
  }

  :host .value-indicator {
    font-family: var(--u-font-family);
    line-height: var(--u-label-l-line-height);
    font-size: var(--u-label-l-font-size);
    letter-spacing: var(--u-label-l-letter-spacing);
    font-weight: var(--u-label-l-font-weight);
  }

  :host([size=small]) .value-indicator {
    font-family: var(--u-font-family);
    line-height: var(--u-label-l-line-height);
    font-size: var(--u-label-l-font-size);
    letter-spacing: var(--u-label-l-letter-spacing);
    font-weight: var(--u-label-l-font-weight);
  }

  :host([size=medium]) .value-indicator,
  :host([size=large]) .value-indicator {
    font-family: var(--u-font-family);
    line-height: var(--u-title-m-line-height);
    font-size: var(--u-title-m-font-size);
    letter-spacing: var(--u-title-m-letter-spacing);
    font-weight: var(--u-title-m-font-weight);
  }

  :host([size=extra-large]) .value-indicator {
    font-family: var(--u-font-family);
    line-height: var(--u-title-l-line-height);
    font-size: var(--u-title-l-font-size);
    letter-spacing: var(--u-title-l-letter-spacing);
    font-weight: var(--u-title-l-font-weight);
  }
`;var Zm={"extra-small":8,small:8,medium:9,large:9,"extra-large":10},Z,Vu,ju,zs,Ps,Ls,Wu,Gu,nc,ca,vi,bi,da,ua,ic,Yu,ha,pa,ma,fa,Cr,oc,Qr,ye=(Qr=class extends T{constructor(){super();p(this,Z);p(this,ca);p(this,vi);p(this,bi);p(this,da);p(this,ua);p(this,ha);p(this,pa);p(this,ma);p(this,fa);p(this,Cr);this.min=0,this.max=100,this.step=1,this.range=!1,this.discrete=!1,this.ticks=!1,this.disabled=!1,this.name="",this.size="extra-small",this.labelFormat=e=>String(e),this._dragging=!1,this._activeThumb=null,this._hoveredThumb=null,h(this,ca,e=>{if(this.disabled||e.button!==void 0&&e.button!==0)return;e.preventDefault();let n=c(this,Z,Ls).call(this,e.clientX),i=c(this,Z,nc).call(this,n);c(this,Z,Yu).call(this,i),c(this,Z,ic).call(this,i,n);try{this._container.setPointerCapture(e.pointerId)}catch{}this._container.addEventListener("pointermove",a(this,vi)),this._container.addEventListener("pointerup",a(this,bi),{once:!0}),this._container.addEventListener("pointercancel",a(this,bi),{once:!0})}),h(this,vi,e=>{if(!this._dragging||!this._activeThumb)return;let n=c(this,Z,Ls).call(this,e.clientX);c(this,Z,ic).call(this,this._activeThumb,n)}),h(this,bi,()=>{this._container.removeEventListener("pointermove",a(this,vi)),a(this,ha).call(this),a(this,Cr).call(this)}),h(this,da,e=>{if(this.disabled||this._dragging)return;let n=c(this,Z,Ls).call(this,e.clientX);this._hoveredThumb=c(this,Z,nc).call(this,n)}),h(this,ua,()=>{this._dragging||(this._hoveredThumb=null)}),h(this,ha,()=>{this._dragging=!1,this._activeThumb=null}),h(this,pa,()=>{this.value=this._input.valueAsNumber,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),h(this,ma,()=>{this.valueStart=Math.min(this._input.valueAsNumber,this.valueEnd),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),h(this,fa,()=>{this.valueEnd=Math.max(this._inputEnd.valueAsNumber,this.valueStart),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),h(this,Cr,()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.elementInternals=this.attachInternals()}get form(){return this.elementInternals.form}willUpdate(e){(e.has("valueStart")||e.has("valueEnd"))&&this.valueStart!==void 0&&this.valueEnd!==void 0&&(this.range=!0),this.range?(this.valueStart===void 0&&(this.valueStart=this.min),this.valueEnd===void 0&&(this.valueEnd=this.max),this.valueStart>this.valueEnd&&([this.valueStart,this.valueEnd]=[this.valueEnd,this.valueStart])):this.value===void 0&&(this.value=(this.max-this.min)/2+this.min)}firstUpdated(){c(this,Z,oc).call(this)}updated(e){(e.has("value")||e.has("valueStart")||e.has("valueEnd")||e.has("name"))&&c(this,Z,oc).call(this)}render(){let e=this.max-this.min||1,n=this.range?c(this,Z,Ps).call(this,this.valueStart):0,i=this.range?c(this,Z,Ps).call(this,this.valueEnd):c(this,Z,Ps).call(this,this.value),s=(this.discrete||this.ticks)&&this.step>0?Math.floor(e/this.step)+1:0,u=Zm[this.size],f=!this.range||n<=0,v=i>=100,w=te=>`calc(${te/100} * (100% - var(--_handle-width)) + var(--_handle-width) / 2)`,_=this.range?f?"0":`calc(${n}% + ${u}px)`:"0",S=v?"0":`calc(${100-i}% + ${u}px)`,I=c(this,Z,Vu).call(this,f,v),L="calc(var(--_track-height) / 2)",M="var(--_inner-corner)",z=`${L} ${f?L:M} ${f?L:M} ${L}`,X=`${v?L:M} ${L} ${L} ${v?L:M}`;return m`
      <div
        class="container ${q({dragging:this._dragging,range:this.range,discrete:this.discrete})}"
        @pointerdown=${a(this,ca)}
        @pointermove=${a(this,da)}
        @pointerleave=${a(this,ua)}
      >
        <div class="track" part="track">
          ${this.range&&!f?m`<div
                class="segment inactive inactive-start"
                part="track-inactive-start"
                style=${qt({insetInlineStart:"0",insetInlineEnd:`calc(${100-n}% + ${u}px)`,borderRadius:z})}
              ></div>`:k}
          <div
            class="segment active"
            part="track-active"
            style=${qt({insetInlineStart:_,insetInlineEnd:S,borderRadius:I})}
          ></div>
          ${v?k:m`<div
                class="segment inactive inactive-end"
                part="track-inactive-end"
                style=${qt({insetInlineStart:`calc(${i}% + ${u}px)`,insetInlineEnd:"0",borderRadius:X})}
              ></div>`}
          ${s>0?c(this,Z,ju).call(this,s,n,i,u):k}
          ${s===0?m`<span
                  class="stop-indicator leading"
                  part="stop-indicator"
                  style=${qt({backgroundColor:this.range&&!f?"var(--_stop-indicator-inactive-color)":"var(--_stop-indicator-active-color)"})}
                ></span>
                <span
                  class="stop-indicator trailing"
                  part="stop-indicator"
                  style=${qt({backgroundColor:v?"var(--_stop-indicator-active-color)":"var(--_stop-indicator-inactive-color)"})}
                ></span>`:k}
        </div>

        ${this.range?m`
            <input
              id="input"
              class="native"
              type="range"
              aria-label="Start value"
              .min=${String(this.min)}
              .max=${String(this.valueEnd)}
              step=${this.step||"any"}
              .value=${tt(String(this.valueStart))}
              ?disabled=${this.disabled}
              @input=${a(this,ma)}
              @change=${a(this,Cr)}
            />
            <input
              id="input-end"
              class="native"
              type="range"
              aria-label="End value"
              .min=${String(this.valueStart)}
              .max=${String(this.max)}
              step=${this.step||"any"}
              .value=${tt(String(this.valueEnd))}
              ?disabled=${this.disabled}
              @input=${a(this,fa)}
              @change=${a(this,Cr)}
            />
            <div
              class=${q({thumb:!0,"thumb-start":!0,"active-thumb":this._activeThumb==="start",hovered:this._hoveredThumb==="start"})}
              part="thumb"
              style=${qt({insetInlineStart:w(n)})}
            >
              <span class="focus-ring"></span>
              ${c(this,Z,zs).call(this,"start",this.valueStart)}
            </div>
            <div
              class=${q({thumb:!0,"thumb-end":!0,"active-thumb":this._activeThumb==="end",hovered:this._hoveredThumb==="end"})}
              part="thumb-end"
              style=${qt({insetInlineStart:w(i)})}
            >
              <span class="focus-ring"></span>
              ${c(this,Z,zs).call(this,"end",this.valueEnd)}
            </div>
          `:m`
            <input
              id="input"
              class="native"
              type="range"
              aria-label=${this.getAttribute("aria-label")??"Slider"}
              .min=${String(this.min)}
              .max=${String(this.max)}
              step=${this.step||"any"}
              .value=${tt(String(this.value))}
              ?disabled=${this.disabled}
              @input=${a(this,pa)}
              @change=${a(this,Cr)}
            />
            <div
              class=${q({thumb:!0,"active-thumb":this._activeThumb==="end",hovered:this._hoveredThumb==="end"})}
              part="thumb"
              style=${qt({insetInlineStart:w(i)})}
            >
              <span class="focus-ring"></span>
              ${c(this,Z,zs).call(this,"end",this.value)}
            </div>
          `}
      </div>
    `}},Z=new WeakSet,Vu=function(e,n){let i="calc(var(--_track-height) / 2)",s="var(--_inner-corner)";if(this.range){let f=e?i:s,v=n?i:s;return`${f} ${v} ${v} ${f}`}let u=n?i:s;return`${i} ${u} ${u} ${i}`},ju=function(e,n,i,s){let u=[],f=this.offsetWidth||200,v=s/f*100;for(let w=0;w<e;w++){let _=w/(e-1)*100,S=_>=n&&_<=i,I=Math.abs(_-i)<v||this.range&&Math.abs(_-n)<v;u.push(m`<span
        class=${q({tick:!0,active:S,"in-gap":I})}
        style=${qt({insetInlineStart:`${_}%`})}
      ></span>`)}return m`<div class="ticks">${u}</div>`},zs=function(e,n){return this.discrete?!this._dragging||this._activeThumb!==e?k:m`<div class="value-indicator" part="value-indicator">${this.labelFormat(n)}</div>`:k},Ps=function(e){let n=this.max-this.min||1;return(e-this.min)/n*100},Ls=function(e){let n=this._container.getBoundingClientRect(),i=c(this,Z,Gu).call(this),s=n.width-i*2,u=Math.max(0,Math.min(s,e-n.left-i)),f=s>0?u/s:0,v=this.min+f*(this.max-this.min);return c(this,Z,Wu).call(this,v)},Wu=function(e){if(!this.step||this.step<=0)return e;let n=Math.round((e-this.min)/this.step);return Math.max(this.min,Math.min(this.max,this.min+n*this.step))},Gu=function(){let e=getComputedStyle(this);return(parseFloat(e.getPropertyValue("--_handle-width"))||4)/2},nc=function(e){if(!this.range)return"end";let n=Math.abs(e-(this.valueStart??this.min)),i=Math.abs(e-(this.valueEnd??this.max));if(n===i){let s=((this.valueStart??this.min)+(this.valueEnd??this.max))/2;return e<s?"start":"end"}return n<=i?"start":"end"},ca=new WeakMap,vi=new WeakMap,bi=new WeakMap,da=new WeakMap,ua=new WeakMap,ic=function(e,n){this.range?e==="start"?this.valueStart=Math.min(n,this.valueEnd):this.valueEnd=Math.max(n,this.valueStart):this.value=n,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))},Yu=function(e){this._activeThumb=e,this._dragging=!0,this._hoveredThumb=e},ha=new WeakMap,pa=new WeakMap,ma=new WeakMap,fa=new WeakMap,Cr=new WeakMap,oc=function(){if(!this.name){this.elementInternals.setFormValue(null);return}if(this.range){let e=new FormData;e.append(`${this.name}-start`,String(this.valueStart??this.min)),e.append(`${this.name}-end`,String(this.valueEnd??this.max)),this.elementInternals.setFormValue(e);return}this.elementInternals.setFormValue(String(this.value??""))},Qr.styles=[$,Hu],Qr.formAssociated=!0,Qr);o([l({type:Number})],ye.prototype,"min",void 0);o([l({type:Number})],ye.prototype,"max",void 0);o([l({type:Number})],ye.prototype,"step",void 0);o([l({type:Number})],ye.prototype,"value",void 0);o([l({type:Number,attribute:"value-start"})],ye.prototype,"valueStart",void 0);o([l({type:Number,attribute:"value-end"})],ye.prototype,"valueEnd",void 0);o([l({type:Boolean,reflect:!0})],ye.prototype,"range",void 0);o([l({type:Boolean,reflect:!0})],ye.prototype,"discrete",void 0);o([l({type:Boolean,reflect:!0})],ye.prototype,"ticks",void 0);o([l({type:Boolean,reflect:!0})],ye.prototype,"disabled",void 0);o([l({reflect:!0})],ye.prototype,"name",void 0);o([l({reflect:!0})],ye.prototype,"size",void 0);o([l({attribute:!1})],ye.prototype,"labelFormat",void 0);o([E()],ye.prototype,"_dragging",void 0);o([E()],ye.prototype,"_activeThumb",void 0);o([E()],ye.prototype,"_hoveredThumb",void 0);o([C("#input")],ye.prototype,"_input",void 0);o([C("#input-end")],ye.prototype,"_inputEnd",void 0);o([C(".container")],ye.prototype,"_container",void 0);ye=o([b("u-slider")],ye);var Xu=g`
  :host {
    --_height: var(--u-chip-height, 32px);
    --_outline-width: var(--u-chip-outline-width, 1px);
    --_outline-color: var(--u-chip-outline-color, var(--u-color-outline, rgb(121, 116, 126)));
    --_shape: var(--u-chip-shape, var(--u-shape-corner-small, 8px));
    --_gap: var(--u-chip-gap, 8px);
    --_icon-size: var(--u-chip-icon-size, 1.125rem);
    --_remove-button-margin: var(--u-chip-remove-button-margin, 2px);
    --_remove-button-size: calc(var(--_height) - var(--_remove-button-margin) * 2);
    --_padding: var(--u-chip-padding, 16px);
    --_selected-icon-color: var(--u-chip-selected-icon-color, var(--u-color-on-secondary-container, rgb(29, 25, 43)));
    display: inline-block;
  }

  :host([data-compact]) {
    --_height: var(--u-chip-compact-height, 28px);
    --_padding: var(--u-chip-compact-padding, 12px);
  }

  .container {
    height: var(--_height);
    border-radius: var(--_shape);
    padding-inline: var(--_padding);
  }
  .container:not(.clickable):not(.toggle) .button {
    cursor: auto;
  }
  .container:not(.leading-icon) .leading {
    display: none;
  }
  .container:not(.trailing-icon) .trailing {
    display: none;
  }

  .content {
    gap: var(--_gap);
  }

  .elevated {
    --u-elevation-level: var(--u-elevated-chip-elevation-level, 1);
  }
  @media (hover: hover) {
    .elevated:hover {
      --u-elevation-level: var(--u-elevated-chip-hover-elevation-level, 2);
    }
  }

  .outline {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    border: var(--_outline-width) solid var(--_outline-color);
  }

  .icon {
    width: 1em;
    height: var(--_icon-size);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--_icon-size);
  }

  .leading {
    color: var(--u-chip-leading-icon-color, var(--u-color-primary, rgb(103, 80, 164)));
  }

  .icon-selected {
    color: var(--_selected-icon-color);
  }

  .trailing {
    color: var(--u-chip-trailing-icon-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
  }

  .label {
    font-family: var(--u-font-family, var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"));
    line-height: var(--u-chip-label-line-height, var(--u-label-l-line-height, 1.25rem));
    font-size: var(--u-chip-label-font-size, var(--u-label-l-font-size, 0.875rem));
    letter-spacing: var(--u-chip-label-letter-spacing, var(--u-label-l-letter-spacing, 0.0071428571rem));
    font-weight: var(--u-chip-label-font-weight, var(--u-label-l-font-weight, var(--u-font-weight-medium, 500)));
  }

  .remove-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--_remove-button-size);
    height: var(--_remove-button-size);
    cursor: pointer;
    padding: 0;
    margin: 0;
    margin-inline: calc((var(--_remove-button-size) - var(--_icon-size)) * -0.5);
    background: gray;
    border: none;
    border-radius: var(--u-chip-remove-button-border-radius, var(--u-shape-corner-full, 9999px));
    background: none;
    appearance: none;
    outline: 0;
    outline-offset: 0;
    z-index: 1;
  }

  ::slotted([slot=remove-icon]),
  ::slotted([slot=selected-icon]),
  ::slotted([slot=leading-icon]),
  ::slotted([slot=trailing-icon]) {
    font-size: inherit !important;
  }

  slot[name=selected-icon] {
    display: none;
  }

  .selected:not(.hide-selected-icon) .leading {
    display: none;
  }
  .selected:not(.hide-selected-icon) slot[name=selected-icon] {
    display: contents;
  }

  .default-select-icon {
    display: contents;
  }

  .selected-icon .default-select-icon {
    display: none;
  }

  .selected:not(.disabled) {
    background-color: var(--u-chip-selected-bg-color, var(--u-color-secondary-container, rgb(232, 222, 248)));
  }
  .selected:not(.disabled) .leading {
    color: var(--u-chip-selected-leading-icon-color, var(--_selected-icon-color));
  }
  .selected:not(.disabled) .trailing {
    color: var(--u-chip-selected-trailing-icon-color, var(--_selected-icon-color));
  }

  .leading-icon,
  .selected:not(.hide-selected-icon) {
    padding-inline-start: var(--_gap);
  }

  .trailing-icon,
  .removable {
    padding-inline-end: var(--_gap);
  }

  .hide-selected-icon .icon-selected,
  .container:not(.selected) .icon-selected {
    display: none;
  }

  [part=default-selected-icon] {
    display: contents;
  }

  :host([disabled]) .remove-button {
    cursor: default;
  }
`;var Jt,Qt,Bt,Ku,Zu,Ju,Qu,yi,He=(yi=class extends Ie(J){constructor(){super(...arguments);p(this,Bt);p(this,Jt);p(this,Qt);h(this,Jt,!1),h(this,Qt,!1),this.selected=!1,this.elevated=!1,this.removable=!1,this.hideSelectedIcon=!1,this._hasLeadingIcon=!1,this._hasSelectedIcon=!1,this._hasTrailingIcon=!1}get clickable(){return a(this,Jt)}set clickable(e){h(this,Jt,e),this.renderRipple=a(this,Jt)||a(this,Qt)}get toggle(){return a(this,Qt)}set toggle(e){h(this,Qt,e),this.renderRipple=a(this,Jt)||a(this,Qt)}connectedCallback(){super.connectedCallback(),this.renderRipple=a(this,Jt)||a(this,Qt)}_handleClick(e){super._handleClick(e),this.toggle&&(this.selected=!this.selected,this.dispatchEvent(new Event("change",{bubbles:!0})))}_getContainerClasses(){return Q(N({},super._getContainerClasses()),{clickable:this.clickable,toggle:this.toggle,selected:this.selected,removable:this.removable,elevated:this.elevated&&!this.disabled,"trailing-icon":this._hasTrailingIcon,"leading-icon":this._hasLeadingIcon,"selected-icon":this._hasSelectedIcon,"hide-selected-icon":this.hideSelectedIcon})}_renderContent(){let e=m`
      <button class="icon remove-button focus-ring" ?disabled=${this.disabled} @click=${c(this,Bt,Ku)}>
        <u-ripple id="remove-ripple" ?disabled=${this.disabled}></u-ripple>
        <slot name="remove-icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill="currentColor">
            <path
              d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </slot>
      </button>
    `,n=!this.disabled&&!this.elevated&&!this.selected?m`<div class="outline"></div>`:k;return m`
      ${n}
      <span class="icon leading" part="icon leading">
        <slot name="leading-icon" @slotchange="${c(this,Bt,Ju)}"></slot>
      </span>
      <span class="icon icon-selected" part="icon selected">
        <slot name="icon-selected" @slotchange="${c(this,Bt,Qu)}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 -960 960 960"
            width="1em"
            fill="currentColor">
            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
          </svg>
        </slot>
      </span>
      <div class="label" id="text">
        <slot></slot>
      </div>
      <slot
        class="icon trailing"
        part="icon trailing"
        name="trailing-icon"
        @slotchange="${c(this,Bt,Zu)}"></slot>
      ${this.removable?e:k}
    `}},Jt=new WeakMap,Qt=new WeakMap,Bt=new WeakSet,Ku=function(e){e.stopPropagation(),e.pointerType||this.removeRipple.createRipple();let n=new Event("remove",{bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(n),n.defaultPrevented||this.remove()},Zu=function(){this._hasTrailingIcon=this._assignedTrailingIcons.length>0},Ju=function(){this._hasLeadingIcon=this._assignedLeadingIcons.length>0},Qu=function(){this._hasSelectedIcon=this._assignedSelectedIcons.length>0},yi.styles=[J.styles,Xu],yi);o([l({type:Boolean,reflect:!0})],He.prototype,"selected",void 0);o([l({type:Boolean,reflect:!0})],He.prototype,"clickable",null);o([l({type:Boolean,reflect:!0})],He.prototype,"elevated",void 0);o([l({type:Boolean,reflect:!0})],He.prototype,"toggle",null);o([l({type:Boolean,reflect:!0})],He.prototype,"removable",void 0);o([l({type:Boolean,attribute:"hide-selected-icon",reflect:!0})],He.prototype,"hideSelectedIcon",void 0);o([E()],He.prototype,"_hasLeadingIcon",void 0);o([E()],He.prototype,"_hasSelectedIcon",void 0);o([E()],He.prototype,"_hasTrailingIcon",void 0);o([ee({slot:"leading-icon",flatten:!0})],He.prototype,"_assignedLeadingIcons",void 0);o([ee({slot:"icon-selected",flatten:!0})],He.prototype,"_assignedSelectedIcons",void 0);o([ee({slot:"trailing-icon",flatten:!0})],He.prototype,"_assignedTrailingIcons",void 0);o([C("#remove-ripple")],He.prototype,"removeRipple",void 0);He=o([b("u-chip")],He);var eh=g`
  :host {
    flex-wrap: wrap;
  }
`;var xi,th=(xi=class extends Zt{},xi.styles=[Zt.styles,eh],xi);th=o([b("u-chip-set")],th);var ga=class extends Lt{constructor(t){if(super(t),this.it=k,t.type!==lt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===k||t==null)return this._t=void 0,this.it=t;if(t===xt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};ga.directiveName="unsafeHTML",ga.resultType=1;var ac=hr(ga);var rh=g`
  :host([data-compact]) {
    --_field-min-height: var(--u-field-compact-min-height, 48px);
    --_vertical-padding: var(--u-field-compact-vertical-padding, 4px);
  }

  :host {
    --_control-line-height: var(--u-field-control-line-height, 1.5rem);
    --_label-line-height: var(--u-field-label-line-height, 1rem);
    --_field-icon-size: var(--u-field-icon-size, 1.5rem);
    --_field-control-padding: var(--u-field-control-padding, 16px);
    --_field-control-inline-padding: var(--u-field-control-inline-padding, var(--_field-control-padding));
    --_field-control-block-padding: var(--u-field-control-block-padding, var(--_field-control-padding));
    --_field-min-height: var(--u-field-min-height, 56px);
    --_field-placeholder-color: var(--u-field-placeholder-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
    --_disabled-color: var(--u-field-disabled-color, color-mix(in srgb, var(--u-color-on-surface, rgb(29, 27, 32)) var(--u-field-disabled-opacity, 38%), transparent));
    --_disabled-bg-color: var(--u-filled-field-disabled-bg-color, color-mix(in srgb, var(--u-color-on-surface, rgb(29, 27, 32)) var(--u-filled-field-background-disabled-opacity, 12%), transparent));
    --_color-primary: var(--u-color-primary, rgb(103, 80, 164));
    --_color-error: var(--u-field-error-color, var(--u-color-error, rgb(179, 38, 30)));
    --_active-indicator-opacity: 1;
    --_vertical-padding: var(--u-field-vertical-padding, 8px);
    --_icon-size: var(--u-field-icon-size, 1.5rem);
    --_icon-padding: var(--u-field-icon-padding, 12px);
    --_icon-color: var(--u-icon-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
    --_border-width: var(--u-field-border-width, 1px);
    --_border-color: var(--u-field-border-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
    --_field-control-leading-padding: var(--_field-control-inline-padding);
    --_outlined-label-margin: var(--u-outlined-field-label-margin, 12px);
    --_outlined-label-padding: var(--u-outlined-field-label-padding, 4px);
    --u-label-input-start: auto;
    --u-label-input-span-leading-offset: 0;
    --u-label-input-span-trailing-offset: 0;
    --u-text-field-horizontal-padding: 12px;
    display: block;
  }

  .container {
    display: flex;
    align-items: center;
    position: relative;
  }
  .container::before, .container::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    pointer-events: none;
  }
  .container::before {
    background: var(--u-color-on-surface, rgb(29, 27, 32));
    transition: opacity 150ms;
    opacity: 0;
  }
  .container::after {
    border-width: var(--_border-width);
    border-color: var(--_border-color);
  }

  @media (hover: hover) {
    :host(:not([disabled]):not([invalid]):hover) .container.filled::before {
      opacity: var(--u-state-hover-opacity, 0.08);
    }
    :host(:not([disabled]):not([invalid]):not(:focus-within):hover) {
      --_border-color: var(--u-field-hover-border-color, var(--u-color-on-surface, rgb(29, 27, 32)));
    }
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: var(--_icon-size);
    color: var(--_icon-color);
    font-size: var(--_icon-size);
    line-height: var(--_icon-size);
  }
  .icon::slotted(*) {
    flex-shrink: 0;
  }

  .leading-icon {
    margin-inline-start: var(--_icon-padding);
  }

  .trailing-icon {
    margin-inline-end: var(--_icon-padding);
  }

  .outline-notch-label,
  .label {
    font-family: var(--u-font-family, var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"));
    line-height: var(--u-field-label-line-height, var(--u-body-l-line-height, 1.5rem));
    font-size: var(--u-field-label-font-size, var(--u-body-l-font-size, 1rem));
    letter-spacing: var(--u-field-label-letter-spacing, var(--u-body-l-letter-spacing, 0.03125rem));
    font-weight: var(--u-field-label-font-weight, var(--u-body-l-font-weight, var(--u-font-weight-regular, 400)));
    font-size: var(--u-field-label-font-size, var(--u-body-s-font-size, 0.75rem));
  }

  .label {
    display: block;
    position: absolute;
    inset-inline-start: var(--_field-control-leading-padding);
    margin-bottom: 0;
    line-height: var(--_label-line-height);
    color: var(--u-field-label-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
    transition: inset 200ms, font-size 200ms;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    flex: 1;
    padding-block: var(--_vertical-padding);
    padding-inline: var(--_field-control-inline-padding);
    min-width: 0;
    min-height: var(--_field-min-height);
    transition: opacity 150ms;
  }

  .input {
    color: var(--u-field-input-text-color, var(--u-color-on-surface, rgb(29, 27, 32)));
    flex: 1;
  }
  .input:focus {
    outline: 0;
  }
  .input textarea,
  .input select,
  .input input,
  .input ::slotted(*) {
    font-family: var(--u-font-family, var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"));
    line-height: var(--u-field-control-line-height, var(--u-body-l-line-height, 1.5rem));
    font-size: var(--u-field-control-font-size, var(--u-body-l-font-size, 1rem));
    letter-spacing: var(--u-field-control-letter-spacing, var(--u-body-l-letter-spacing, 0.03125rem));
    font-weight: var(--u-field-control-font-weight, var(--u-body-l-font-weight, var(--u-font-weight-regular, 400)));
    display: block;
    width: 100%;
    color: var(--u-field-input-text-color, var(--u-color-on-surface, rgb(29, 27, 32)));
    min-height: var(--_control-line-height);
    line-height: var(--_control-line-height);
    padding: 0;
    margin: 0;
    appearance: none;
    background: transparent;
    border: none;
    outline: 0 !important;
    caret-color: var(--_color-primary);
  }
  .input,
  .input textarea::placeholder,
  .input input::placeholder,
  .input ::slotted(select),
  .input ::slotted(:is(input, textarea))::placeholder {
    transition: color 150ms 100ms;
  }
  .input textarea::placeholder,
  .input input::placeholder,
  .input ::slotted(:is(input, textarea))::placeholder {
    color: var(--_field-placeholder-color);
  }

  .supporting-text {
    font-family: var(--u-font-family, var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"));
    line-height: var(--u-field-supporting-text-line-height, var(--u-body-s-line-height, 1rem));
    font-size: var(--u-field-supporting-text-font-size, var(--u-body-s-font-size, 0.75rem));
    letter-spacing: var(--u-field-supporting-text-letter-spacing, var(--u-body-s-letter-spacing, 0.0333333333rem));
    font-weight: var(--u-field-supporting-text-font-weight, var(--u-body-s-font-weight, var(--u-font-weight-regular, 400)));
    display: flex;
    color: var(--u-field-supporting-text, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
    padding-inline: 16px;
    gap: 16px;
  }
  .supporting-text div:empty {
    display: none;
  }
  .supporting-text div,
  .supporting-text ::slotted(*) {
    display: inline-block;
    margin-top: 4px;
  }

  .error-text {
    display: none;
  }

  .counter div, .counter::slotted(*) {
    margin-inline-start: auto;
  }

  :host([has-leading-icon]) {
    --_field-control-leading-padding: calc(var(--_icon-padding) + var(--_icon-size) + var(--_field-control-inline-padding)) ;
  }

  :host(:not([has-leading-icon])) .leading-icon {
    display: none;
  }

  :host(:not([has-trailing-icon])) .container:has(slot[name=trailing-icon] span:empty) .trailing-icon {
    display: none;
  }

  :host(:focus-within) {
    --_border-width: var(--u-text-field-focus-border-width, 2px);
    --_border-color: var(--u-field-focused-border-color, var(--_color-primary));
  }
  :host(:focus-within) .label {
    color: var(--u-field-label-focused-color, var(--_color-primary));
  }

  :host([invalid]) {
    --_border-color: var(--u-field-error-border-color, var(--_color-error));
  }
  :host([invalid]) .label {
    color: var(--u-field-label-error-color, var(--_color-error));
  }
  :host([invalid]) .supporting-text {
    color: var(--u-field-supporting-text-error-color, var(--_color-error));
  }
  :host([invalid]) .trailing-icon {
    color: var(--u-field-trailing-icon-error-color, var(--_color-error));
  }
  :host([invalid]) .leading-icon {
    color: var(--u-field-leading-icon-error-color, var(--_icon-color));
  }

  :host([invalid]) .supporting-text:has(.error-text div:not(:empty)) .error-text,
  :host([invalid][has-error-text]) .error-text {
    display: contents;
  }
  :host([invalid]) .supporting-text:has(.error-text div:not(:empty)) slot[name=supporting-text],
  :host([invalid][has-error-text]) slot[name=supporting-text] {
    display: none;
  }

  .container.filled {
    border-radius: var(--u-field-filled-border-radius, 4px 4px 0 0);
    background-color: var(--u-color-surface-container-highest, rgb(230, 224, 233));
  }
  .container.filled::after {
    border-bottom-style: solid;
  }
  .container.filled:not(.no-label) .input-wrapper {
    padding-top: calc(var(--_vertical-padding) + var(--_label-line-height));
    padding-bottom: var(--_vertical-padding);
  }
  .container.filled .label {
    top: var(--_vertical-padding);
  }
  .container.filled .input ::slotted(:is(input, textarea, select, button)) {
    display: block;
  }
  .container.outlined .label {
    top: calc(var(--_label-line-height) / -2);
  }

  .container.outlined:focus-within .label,
  :host(:not([empty])) .container.outlined .label {
    inset-inline-start: calc(var(--_outlined-label-margin) + var(--_outlined-label-padding));
  }

  :host([empty]) ::slotted(select) {
    color: var(--_field-placeholder-color);
  }

  :host([empty]:not(:focus-within)) .label {
    font-size: var(--u-field-label-font-size, var(--u-body-l-font-size, 1rem));
    pointer-events: none;
    top: calc(var(--_field-min-height) / 2 - var(--_label-line-height) / 2);
  }
  :host([empty]:not(:focus-within)) .container:not(.no-label) .input-wrapper,
  :host([empty]:not(:focus-within)) .container:not(.no-label) .input,
  :host([empty]:not(:focus-within)) .container:not(.no-label) .input input::placeholder,
  :host([empty]:not(:focus-within)) .container:not(.no-label) .input textarea::placeholder,
  :host([empty]:not(:focus-within)) .container:not(.no-label) ::slotted(:is(input, textarea))::placeholder,
  :host([empty]:not(:focus-within)) .container:not(.no-label) ::slotted(select) {
    color: transparent;
    transition: color 150ms;
  }

  :host([disabled]) {
    --_border-color: var(--u-field-disabled-border-color, var(--_disabled-color));
  }
  :host([disabled]) .container .filled {
    background-color: var(--u-filled-field-disabled-bg-color, color-mix(in srgb, var(--u-color-on-surface, rgb(29, 27, 32)) var(--u-filled-field-background-disabled-opacity, 4%), transparent));
  }
  :host([disabled]) .supporting-text {
    color: var(--u-field-supporting-text-disabled-color, var(--_disabled-color));
  }
  :host([disabled]) .label {
    color: var(--u-field-label-disabled-color, var(--_disabled-color));
  }
  :host([disabled]) .input,
  :host([disabled]) .input select,
  :host([disabled]) .input select::placeholder,
  :host([disabled]) .input textarea,
  :host([disabled]) .input textarea::placeholder,
  :host([disabled]) .input input,
  :host([disabled]) .input input::placeholder,
  :host([disabled]) .input ::slotted(*),
  :host([disabled]) .input ::slotted(:is(input, textarea))::placeholder {
    color: var(--u-field-input-disabled-color, var(--_disabled-color));
  }
  :host([disabled]) .trailing-icon {
    color: var(--u-field-trailing-icon-disabled-color, var(--_disabled-color));
  }
  :host([disabled]) .leading-icon {
    color: var(--u-field-leading-icon-disabled-color, var(--_disabled-color));
  }

  .outline {
    position: absolute;
    inset: 0;
    display: flex;
    border-radius: var(--u-outlined-field-shape-corder, var(--u-shape-corner-small, 8px));
    pointer-events: none;
  }

  .outline-start,
  .outline-end {
    border: var(--_border-width) solid var(--_border-color);
    border-radius: inherit;
    flex-basis: var(--_outlined-label-margin);
  }

  .outline-start {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
    border-inline-end: none;
  }

  .outline-end {
    flex: 1;
    border-start-start-radius: 0;
    border-end-start-radius: 0;
    border-inline-start: none;
  }

  .outline-notch {
    min-width: 0;
    border-bottom: var(--_border-width) solid var(--_border-color);
  }

  .outline-notch-label {
    position: relative;
    color: transparent;
    padding-inline: var(--_outlined-label-padding);
    user-select: none;
  }

  .outline-notch-label::before,
  .outline-notch-label::after {
    content: "";
    position: absolute;
    border-top: var(--_border-width) solid var(--_border-color);
    width: 50%;
    transition: width 100ms;
  }

  .outline-notch-label::before {
    left: 0;
  }

  .outline-notch-label::after {
    right: 0;
  }

  .container:not(.no-label):focus-within .outline-notch-label::before,
  .container:not(.no-label):focus-within .outline-notch-label::after,
  :host(:not([empty])) .container:not(.no-label) .outline-notch-label::before,
  :host(:not([empty])) .container:not(.no-label) .outline-notch-label::after {
    width: 0;
  }
`;var sc="u-field-defaults-context";var lc=class lc extends Ie(T){static setDefaults(t,e){return new Mt(t,{context:sc,initialValue:e})}constructor(){super(),this.variant="filled",this.hideCounter=!1,this.empty=!1,this.disabled=!1,this.invalid=!1,this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.hasErrorText=!1,this.variant=void 0}render(){let t=this.variant??this.config?.variant??"filled",e={[t]:!0,"no-label":!this.label},n=m`
      <slot class="counter" name="counter">
        <div>${this.counter??this._innerCounter}</div>
      </slot>
    `,i=m`
      <div class="outline">
        <div class="outline-start"></div>
        <div class="outline-notch">
          <div class="outline-notch-label">${this.label}</div>
        </div>
        <div class="outline-end"></div>
      </div>
    `;return m`
      <div class="container ${q(e)}">
        ${t==="outlined"?i:k}
        <slot class="icon leading-icon" name="leading-icon" @slotchange="${this.handleLeadingIconSlotChange}"></slot>
        <label class="label" id="label">${this.label}</label>
        <div class="input-wrapper" part="wrapper">${this.renderControl()}</div>
        <slot class="icon trailing-icon" name="trailing-icon" @slotchange="${this.handleTrailingIconSlotChange}">
          <span>${this.renderDefaultTrailingIcon()}</span>
        </slot>
      </div>
      <div class="supporting-text" id="supporting-text">
        <slot class="error-text" name="error-text" @slotchange="${this.handleErrorTextSlotChange}">
          <div>${this.errorText}</div>
        </slot>
        <slot name="supporting-text" id="supporting-text">
          <div>${this.supportingText}</div>
        </slot>
        ${this.hideCounter?k:n}
      </div>
      ${this.renderAfterContent()}
    `}renderAfterContent(){return m``}connectedCallback(){super.connectedCallback(),this.hasLeadingIcon=!!this.assignedLeadingIcons.length}handleLeadingIconSlotChange(){this._labelElement.style.transition="none",this.hasLeadingIcon=this.assignedLeadingIcons.length>0,setTimeout(()=>{this._labelElement.style.transition=""})}handleTrailingIconSlotChange(){this.hasTrailingIcon=this.assignedTrailingIcons.length>0}handleErrorTextSlotChange(){this.hasErrorText=this.assignedErrorTexts.length>0}renderDefaultTrailingIcon(){return k}};lc.styles=[$,rh];var ie=lc;o([ce({context:sc,subscribe:!0}),E()],ie.prototype,"config",void 0);o([l()],ie.prototype,"variant",void 0);o([l()],ie.prototype,"label",void 0);o([E()],ie.prototype,"_innerCounter",void 0);o([l()],ie.prototype,"counter",void 0);o([l({type:Boolean,attribute:"hide-counter"})],ie.prototype,"hideCounter",void 0);o([l({attribute:"supporting-text"})],ie.prototype,"supportingText",void 0);o([l({attribute:"error-text"})],ie.prototype,"errorText",void 0);o([l({type:Boolean,reflect:!0})],ie.prototype,"empty",void 0);o([l({type:Boolean,reflect:!0})],ie.prototype,"disabled",void 0);o([l({type:Boolean,reflect:!0})],ie.prototype,"invalid",void 0);o([l({type:Boolean,attribute:"has-leading-icon",reflect:!0})],ie.prototype,"hasLeadingIcon",void 0);o([l({type:Boolean,attribute:"has-trailing-icon",reflect:!0})],ie.prototype,"hasTrailingIcon",void 0);o([l({type:Boolean,attribute:"has-error-text",reflect:!0})],ie.prototype,"hasErrorText",void 0);o([ee({slot:"leading-icon",flatten:!0})],ie.prototype,"assignedLeadingIcons",void 0);o([ee({slot:"trailing-icon",flatten:!0})],ie.prototype,"assignedTrailingIcons",void 0);o([ee({slot:"error-text",flatten:!0})],ie.prototype,"assignedErrorTexts",void 0);o([C(".label",!0)],ie.prototype,"_labelElement",void 0);o([C(".container",!0)],ie.prototype,"_container",void 0);var nh=g`
  .container {
    cursor: text;
  }

  :host([disabled]) .container {
    cursor: default;
  }
`;var va=class va extends ie{get form(){return this.elementInternals.form}get validity(){return this.elementInternals.validity}get validationMessage(){return this.elementInternals.validationMessage}constructor(){super(),this.empty=!0,this.placeholder="",this.required=!1,this.elementInternals=this.attachInternals()}_getValidity(){let t=this.required&&this.empty;return{flags:{valueMissing:t},message:t?"Please fill out this field.":""}}_syncValidity(){let{flags:t,message:e,anchor:n}=this._getValidity();if(!Object.values(t).some(Boolean)){this.elementInternals.setValidity({});return}this.elementInternals.setValidity(t,e||"Invalid value.",n)}checkValidity(){return this._syncValidity(),this.elementInternals.checkValidity()}reportValidity(){this._syncValidity();let t=this.elementInternals.reportValidity();return this.invalid=!t,t}updated(t){super.updated(t),this._syncValidity()}};va.formAssociated=!0,va.styles=[ie.styles,nh],va.shadowRootOptions=Q(N({},T.shadowRootOptions),{delegatesFocus:!0});var he=va;o([l({reflect:!0})],he.prototype,"placeholder",void 0);o([l({type:Boolean,reflect:!0})],he.prototype,"required",void 0);var ih=g`
  u-chip {
    flex-basis: 0;
  }

  .input {
    display: flex;
    gap: var(--u-chip-field-chips-gap, var(--u-spacing-extra-small, 4px));
    flex-wrap: wrap;
  }
  .input:has(u-chip) {
    margin-top: var(--u-chip-field-chips-margin, var(--u-spacing-extra-small, 4px));
  }
  .input input {
    width: auto;
    flex: 1;
    flex-basis: 200px;
    padding: 4px 0;
    margin-block: -4px;
  }
`;var wi,pe,oh,ah,sh,lh,_i,cc,dc,uc,ch,dh,Ci,ba=(Ci=class extends he{constructor(){super(...arguments);p(this,pe);p(this,wi);p(this,_i);this.manual=!1,h(this,wi,[]),h(this,_i,e=>n=>{n?.preventDefault(),this.input.focus(),!c(this,pe,ch).call(this,e)&&this.removeAt(e,!0)})}get value(){return a(this,wi)}set value(e){h(this,wi,e),c(this,pe,dc).call(this)}setFormValue(){let e=new FormData;for(let n of this.value)e.append(this.name,n.toString());this.elementInternals.setFormValue(e)}focus(){this.input.focus()}renderControl(){return m`
      <div class="input">
        ${c(this,pe,oh).call(this)}
        <input
          part="input"
          id=${this.id||k}
          aria-labelledby="label"
          ?disabled=${this.disabled}
          placeholder=${this.placeholder||k}
          @blur=${c(this,pe,ah)}
          @keydown=${c(this,pe,lh)}
          @input=${c(this,pe,sh)} />
      </div>
    `}add(e,n=!1){this.value.push(e),c(this,pe,cc).call(this,n)}removeAt(e,n=!1){this.value.splice(e,1),c(this,pe,cc).call(this,n)}},wi=new WeakMap,pe=new WeakSet,oh=function(){return this.value?.map((e,n)=>{let i=this.leadingIconTemplate?m`
            <span slot="leading-icon">${ac(this.leadingIconTemplate(e))}</span>
          `:k;return m`
        <u-chip removable ?disabled=${this.disabled} @remove=${a(this,_i).call(this,n)}>
          ${i} ${c(this,pe,dh).call(this,e)}
        </u-chip>
      `})},ah=function(){this.requestUpdate()},sh=function(){c(this,pe,uc).call(this)},lh=function(e){if(!this.manual&&e.key==="Enter"){this.add(this.input.value,!0),this.input.value="";return}if(e.key==="Backspace"&&this.input.selectionStart===0&&this.input.selectionEnd===0){a(this,_i).call(this,this.value.length-1)();return}},_i=new WeakMap,cc=function(e){c(this,pe,dc).call(this),e&&this.dispatchEvent(new Event("change",{bubbles:!0}))},dc=function(){c(this,pe,uc).call(this),this.setFormValue(),this.requestUpdate()},uc=function(){this.empty=!this.value?.length&&!this.input?.value},ch=function(e){let n=this.value[e],i=new CustomEvent("remove",{cancelable:!0,detail:n});return this.dispatchEvent(i),i.defaultPrevented},dh=function(e){if(!this.formatter)return e.toString();let n=this.formatter(e);return typeof n=="string"?ac(Wo.sanitize(n)):n},Ci.styles=[he.styles,ih],Ci);o([C("input")],ba.prototype,"input",void 0);o([l()],ba.prototype,"name",void 0);o([l({type:Boolean})],ba.prototype,"manual",void 0);ba=o([b("u-chip-field")],ba);var $e=class extends he{constructor(){super(...arguments),this._value="",this.role=null}get value(){return this._getPublicValue()}set value(t){this._setValue(this._coerceValue(t))}#e;get maxlength(){return this.#e}set maxlength(t){this.#e=t,this.#t()}focus(){this.input.focus()}_getPublicValue(){return this._value}_coerceValue(t){return t??""}_setValue(t){this._value=t,this.empty=!t,this.elementInternals.setFormValue(t),this.#t()}_handleKeyDown(t){t.key==="Enter"&&this.elementInternals.form?.requestSubmit()}_handleInput(){this._setValue(this.input.value)}#t(){if(this.maxlength){this._innerCounter=`${this._value.length}/${this.maxlength}`;return}this._innerCounter=void 0}};o([l()],$e.prototype,"value",null);o([l({reflect:!0})],$e.prototype,"autocomplete",void 0);o([l({type:Number,reflect:!0})],$e.prototype,"maxlength",null);o([l({reflect:!0})],$e.prototype,"role",void 0);var en="u-locale-context";var ki=g`
  .prefix::slotted(*),
  .prefix span,
  .suffix::slotted(*),
  .suffix span {
    transition: opacity 150ms 100ms;
  }
  .prefix span:empty,
  .suffix span:empty {
    display: none;
  }

  .prefix::slotted(*),
  .prefix span {
    color: var(--u-field-prefix-color, var(--u-field-affix-color, var(--u-color-on-surface-variant, rgb(73, 69, 79))));
    margin-inline-end: var(--u-prefix-margin, var(--u-affix-margin, 2px));
  }

  .suffix::slotted(*),
  .suffix span {
    color: var(--u-field-suffix-color, var(--u-field-affix-color, var(--u-color-on-surface-variant, rgb(73, 69, 79))));
    margin-inline-start: var(--u-suffix-margin, var(--u-affix-margin, 2px));
  }

  :host([disabled]) .prefix span, :host([disabled]) .prefix::slotted(*) {
    color: var(--u-text-field-prefix-color, var(--u-text-field-affix-color, color-mix(in srgb, var(--u-color-on-surface, rgb(29, 27, 32)) var(--u-field-disabled-opacity, 38%), transparent)));
  }
  :host([disabled]) .suffix span, :host([disabled]) .suffix::slotted(*) {
    color: var(--u-text-field-suffix-color, var(--u-text-field-affix-color, color-mix(in srgb, var(--u-color-on-surface, rgb(29, 27, 32)) var(--u-field-disabled-opacity, 38%), transparent)));
  }

  :host([empty]:not(:focus-within)) .container:not(.no-label) .suffix::slotted(*),
  :host([empty]:not(:focus-within)) .container:not(.no-label) .suffix span,
  :host([empty]:not(:focus-within)) .container:not(.no-label) .prefix::slotted(*),
  :host([empty]:not(:focus-within)) .container:not(.no-label) .prefix span {
    opacity: 0;
    transition: opacity 150ms;
  }
`;var Ms=g`
  :host(:not([editable]):not([disabled])) .container {
    cursor: pointer;
  }

  u-menu {
    --u-menu-max-width: none;
  }

  .trigger {
    position: absolute;
    inset: 0;
    margin: 0;
    padding: 0;
    background: transparent;
    border: none;
    appearance: none;
    cursor: inherit;
  }

  input[type=date]::-webkit-calendar-picker-indicator {
    display: none;
  }

  input[type=date]::-webkit-inner-spin-button, input[type=date]::-webkit-clear-button {
    display: none;
  }

  :host([empty]:not(:focus-within)) .container:not(.no-label) input[type=date]::-webkit-datetime-edit {
    color: transparent;
  }
`;var Jm=/^\d{4}-\d{2}-\d{2}$/,Ei=r=>{if(!Jm.test(r))return null;let[t,e,n]=r.split("-").map(Number);return new Date(t,e-1,n)},ya=r=>{let t=(r.getMonth()+1).toString().padStart(2,"0"),e=r.getDate().toString().padStart(2,"0");return`${r.getFullYear()}-${t}-${e}`},er=(r,t,e)=>{if(!r||t==="iso")return r;let n=Ei(r);if(!n)return r;let i=typeof t=="string"?{dateStyle:t}:t;return new Intl.DateTimeFormat(e??void 0,i).format(n)},uh=(r,t,e)=>{if(!r||t==="iso")return r;let n=r.split(" - ");if(n.length!==2)return r;let[i,s]=n;return`${er(i,t,e)} - ${er(s,t,e)}`};var hh=g`
  :host {
    --_date-size: var(--u-calendar-date-size, 40px);
    display: inline-block;
  }

  .calendar-grid {
    position: relative;
  }

  .calendar {
    display: grid;
    grid-template-columns: repeat(7, 48px);
    align-items: center;
  }

  .calendar-item {
    --u-ripple-border-radius: 9999px;
    position: relative;
    isolation: isolate;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
  }
  .calendar-item:has(.date) {
    cursor: pointer;
  }
  .calendar-item u-ripple {
    padding: 4px;
  }

  .month-button {
    --u-common-button-padding: var(--u-calendar-month-button--padding, 16px);
    color: var(--u-calendar-month-button-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
  }

  .month-button-icon {
    transition: transform 200ms;
  }
  .month-button-icon.open {
    transform: rotate(180deg);
  }

  .previous-month-button {
    margin-inline-start: auto;
  }

  .week-day {
    font-family: var(--u-font-family, var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"));
    line-height: var(--u-calendar-week-day-line-height, var(--u-body-l-line-height, 1.5rem));
    font-size: var(--u-calendar-week-day-font-size, var(--u-body-l-font-size, 1rem));
    letter-spacing: var(--u-calendar-week-day-letter-spacing, var(--u-body-l-letter-spacing, 0.03125rem));
    font-weight: var(--u-calendar-week-day-font-weight, var(--u-body-l-font-weight, var(--u-font-weight-regular, 400)));
    color: var(--u-calendar-week-day-color, var(--u-color-on-surface, rgb(29, 27, 32)));
  }

  .date {
    font-family: var(--u-font-family, var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"));
    line-height: var(--u-calendar-date-line-height, var(--u-body-l-line-height, 1.5rem));
    font-size: var(--u-calendar-date-font-size, var(--u-body-l-font-size, 1rem));
    letter-spacing: var(--u-calendar-date-letter-spacing, var(--u-body-l-letter-spacing, 0.03125rem));
    font-weight: var(--u-calendar-date-font-weight, var(--u-body-l-font-weight, var(--u-font-weight-regular, 400)));
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--_date-size);
    height: var(--_date-size);
    border-radius: var(--u-calendar-date-border-radius, 9999px);
    color: var(--u-calendar-date-color, var(--u-color-on-surface, rgb(29, 27, 32)));
  }

  .date-outside-month .date {
    color: var(--u-calendar-date-out-of-month-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
  }

  .current-date .date {
    border: 1px solid var(--u-calendar-current-date-color, var(--u-color-primary, rgb(103, 80, 164)));
    color: var(--u-calendar-current-date-color, var(--u-color-primary, rgb(103, 80, 164)));
  }

  .selected-date .date {
    background-color: var(--u-calendar-selected-date-background-color, var(--u-color-primary, rgb(103, 80, 164)));
    color: var(--u-calendar-selected-date-color, var(--u-color-on-primary, rgb(255, 255, 255)));
  }

  .date-out-of-month {
    color: var(--u-calendar-date-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
  }

  .year-grid,
  .month-grid {
    display: grid;
    grid-template-columns: repeat(3, 112px);
    align-items: center;
  }

  .year-cell,
  .month-cell {
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--u-calendar-selection-cell-height, 52px);
    cursor: pointer;
  }

  .year-label,
  .month-label {
    --u-ripple-border-radius: 9999px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--u-calendar-selection-label-width, 72px);
    height: var(--u-calendar-selection-label-height, 36px);
    border-radius: var(--u-calendar-date-border-radius, 9999px);
    color: var(--u-calendar-date-color, var(--u-color-on-surface, rgb(29, 27, 32)));
  }

  .year-label {
    font-family: var(--u-font-family, var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"));
    line-height: var(--u-calendar-year-label-line-height, var(--u-body-l-line-height, 1.5rem));
    font-size: var(--u-calendar-year-label-font-size, var(--u-body-l-font-size, 1rem));
    letter-spacing: var(--u-calendar-year-label-letter-spacing, var(--u-body-l-letter-spacing, 0.03125rem));
    font-weight: var(--u-calendar-year-label-font-weight, var(--u-body-l-font-weight, var(--u-font-weight-regular, 400)));
  }

  .month-label {
    font-family: var(--u-font-family, var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"));
    line-height: var(--u-calendar-month-label-line-height, var(--u-body-l-line-height, 1.5rem));
    font-size: var(--u-calendar-month-label-font-size, var(--u-body-l-font-size, 1rem));
    letter-spacing: var(--u-calendar-month-label-letter-spacing, var(--u-body-l-letter-spacing, 0.03125rem));
    font-weight: var(--u-calendar-month-label-font-weight, var(--u-body-l-font-weight, var(--u-font-weight-regular, 400)));
  }

  .current-year .year-label,
  .current-month .month-label {
    border: 1px solid var(--u-calendar-current-date-color, var(--u-color-primary, rgb(103, 80, 164)));
    color: var(--u-calendar-current-date-color, var(--u-color-primary, rgb(103, 80, 164)));
  }

  .selected-year .year-label,
  .selected-month .month-label {
    background-color: var(--u-calendar-selected-date-background-color, var(--u-color-primary, rgb(103, 80, 164)));
    color: var(--u-calendar-selected-date-color, var(--u-color-on-primary, rgb(255, 255, 255)));
  }

  .disabled {
    pointer-events: none;
  }
  .disabled .date,
  .disabled .month-label,
  .disabled .year-label {
    color: var(--u-calendar-disabled-color, color-mix(in srgb, var(--u-color-on-surface, rgb(29, 27, 32)) var(--u-calendar-disabled-opacity, 38%), transparent));
  }
  .disabled .date {
    border-color: var(--u-calendar-disabled-color, color-mix(in srgb, var(--u-color-on-surface, rgb(29, 27, 32)) var(--u-calendar-disabled-opacity, 38%), transparent));
  }
`;var $s=class{constructor(){this.weekDayFormat="narrow",this.locale="pt-br"}getWeekDays(t){let e=new Date,n=this.getFirstDayOfWeek(t);this.#e(e,n);let i=[];for(let s=0;s<7;s++)i.push(e.toLocaleDateString(t,{weekday:this.weekDayFormat})),e.setDate(e.getDate()+1);return i}getFirstDayOfWeek(t){let e=new Intl.Locale(t);return(e.getWeekInfo?e.getWeekInfo():e.weekinfo).firstDay%7}#e(t,e){let n=(e-t.getDay()+7)%7;t.setDate(t.getDate()+n)}getDay(t){return t.toLocaleDateString(this.locale,{day:"numeric"})}getMonth(t){return t.toLocaleDateString(this.locale,{month:"long",year:"numeric"})}getYear(t){return t.toLocaleDateString(this.locale,{year:"numeric"})}getMonthShort(t,e){return new Date(2e3,t,1).toLocaleDateString(e,{month:"short"})}};var ut,Ve,je,O,ph,mh,fh,hc,gh,vh,bh,yh,xh,wh,xa,wa,_a,Rs,_h,Ch,kh,pc,mc,fc,Os,gc=class gc extends T{constructor(){super();p(this,O);p(this,ut);p(this,Ve);p(this,je);p(this,xa);p(this,wa);p(this,_a);this.weekDays=[],this._firstDayOfWeek=0,this.dateRenderer=null,this.dateOutsideMonth=!1,this.yearRange=24,this.min=null,this.max=null,this.valueType="iso",h(this,ut,new Date),this.view="day",this._yearPageStart=0,this.locale=null,this._innerLocale=navigator.language,this.adapter=new $s,h(this,Ve,null),h(this,je,null),h(this,xa,()=>{if(this.view==="day"){this._yearPageStart=c(this,O,Rs).call(this,this.year),this.view="year";return}if(this.view==="month"){this._yearPageStart=c(this,O,Rs).call(this,this.year),this.view="year";return}this.view="day"}),h(this,wa,()=>{if(!c(this,O,pc).call(this)){if(this.view==="year"){this._yearPageStart-=this.yearRange;return}if(this.view==="month"){this.year-=1;return}c(this,O,fc).call(this,-1)}}),h(this,_a,()=>{if(!c(this,O,mc).call(this)){if(this.view==="year"){this._yearPageStart+=this.yearRange;return}if(this.view==="month"){this.year+=1;return}c(this,O,fc).call(this,1)}}),a(this,ut).setHours(0),a(this,ut).setMinutes(0),a(this,ut).setSeconds(0),a(this,ut).setMilliseconds(0),this._displayingMonthDate=new Date(a(this,ut)),this._displayingMonthDate.setDate(1),this._yearPageStart=c(this,O,Rs).call(this,this.year)}get year(){return this._displayingMonthDate.getFullYear()}set year(e){this._displayingMonthDate=new Date(e,this._displayingMonthDate.getMonth(),1)}get month(){return this._displayingMonthDate.getMonth()}set month(e){this._displayingMonthDate=new Date(this._displayingMonthDate.getFullYear(),e,1)}connectedCallback(){super.connectedCallback(),c(this,O,Os).call(this),window.addEventListener("languagechange",()=>{this.locale!==null||this.contextLocale!==void 0||(this._innerLocale=navigator.language,c(this,O,Os).call(this))})}willUpdate(e){(e.has("locale")||e.has("contextLocale"))&&(this._innerLocale=this.locale??this.contextLocale??navigator.language,c(this,O,Os).call(this)),e.has("min")&&h(this,Ve,this._getDateFromString(this.min??"")),e.has("max")&&h(this,je,this._getDateFromString(this.max??""))}render(){return m`
      <div>
        <u-button-set>
          <u-button class="month-button" type="button" variant="text" @click=${a(this,xa)}>
            ${c(this,O,mh).call(this)}
            <svg
              class="month-button-icon ${this.view!=="day"?"open":""}"
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              viewBox="0 -960 960 960"
              width="1.5em"
              fill="currentColor">
              <path d="M480-360 280-560h400L480-360Z" />
            </svg>
          </u-button>
          <u-icon-button
            class="previous-month-button"
            ?disabled=${c(this,O,pc).call(this)}
            @click=${a(this,wa)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 -960 960 960"
              width="1em"
              fill="currentColor">
              <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
            </svg>
          </u-icon-button>
          <u-icon-button
            ?disabled=${c(this,O,mc).call(this)}
            @click=${a(this,_a)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 -960 960 960"
              width="1em"
              fill="currentColor">
              <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
          </u-icon-button>
        </u-button-set>
      </div>
      ${c(this,O,ph).call(this)}
    `}_renderGridOverlay(){return null}_getCalendarClassMap(){return null}_getDateFromIsoDate(e){let n=new Date(e),i=n.getTimezoneOffset()*60*1e3;return n.setTime(n.getTime()+i),n}_getDateString(e){return e?Intl.DateTimeFormat("en-CA",{year:"numeric",month:"2-digit",day:"2-digit"}).format(e):""}_getDateFromString(e){if(!e)return null;let n=Date.parse(e);return!n&&n!==0?null:this._getDateFromIsoDate(e)}_getDateFromValue(e){return e?e instanceof Date?new Date(e.getFullYear(),e.getMonth(),e.getDate()):this._getDateFromString(e):null}};ut=new WeakMap,Ve=new WeakMap,je=new WeakMap,O=new WeakSet,ph=function(){return this.view==="year"?m`<div class="year-grid">${c(this,O,vh).call(this)}</div>`:this.view==="month"?m`<div class="month-grid">${c(this,O,bh).call(this)}</div>`:m`
      <div class="calendar-grid">
        <div class="calendar ${this._getCalendarClassMap()}">
          ${c(this,O,fh).call(this)}${c(this,O,gh).call(this)}
        </div>
        ${this._renderGridOverlay()}
      </div>
    `},mh=function(){return this.view==="month"?this.adapter.getYear(c(this,O,hc).call(this)):this.adapter.getMonth(c(this,O,hc).call(this))},fh=function(){return this.weekDays.map(e=>m`
          <div class="calendar-item">
            <span class="week-day">${e}</span>
          </div>
        `)},hc=function(){return new Date(this.year,this.month,1)},gh=function(){let e=this.year,n=this.month,s=(new Date(e,n,1).getDay()-this._firstDayOfWeek+7)%7,u=new Date(e,n,1-s),f=[];for(let v=0;v<6;v++)for(let w=0;w<7;w++){let _=u.getMonth()!==n,S=c(this,O,_h).call(this,u),I=this._getSelectedDateClasses(u);!Object.keys(I).length&&a(this,ut).getTime()===u.getTime()&&(I["current-date"]=!0),_&&(I["date-outside-month"]=!0),S&&(I.disabled=!0);let L=q(I),M=!_||this.dateOutsideMonth,z=M?m`
              ${S?null:m`<u-ripple></u-ripple>`}
              <span class="date">
                ${this.dateRenderer?this.dateRenderer(new Date(u),this.adapter.getDay(u)):this.adapter.getDay(u)}
              </span>
            `:null,X=M&&!S?c(this,O,yh).call(this,new Date(u)):null;f.push(m`
          <div
            class="calendar-item ${L}"
            @click=${X}>
            ${z}
          </div>
        `),u.setDate(u.getDate()+1)}return f},vh=function(){let e=[],n=a(this,ut).getFullYear(),i=this.year;for(let s=0;s<this.yearRange;s++){let u=this._yearPageStart+s,f=c(this,O,kh).call(this,u),v=q({"year-cell":!0,"current-year":u===n&&u!==i,"selected-year":u===i,disabled:f});e.push(m`
        <div class=${v} @click=${f?null:c(this,O,xh).call(this,u)}>
          <span class="year-label">
            ${f?null:m`<u-ripple></u-ripple>`}
            ${u}
          </span>
        </div>
      `)}return e},bh=function(){let e=[],n=a(this,ut).getFullYear(),i=a(this,ut).getMonth(),s=this.month,u=this.year;for(let f=0;f<12;f++){let v=u===n&&f===i,w=f===s,_=c(this,O,Ch).call(this,f),S=q({"month-cell":!0,"current-month":v&&!w,"selected-month":w,disabled:_});e.push(m`
        <div class=${S} @click=${_?null:c(this,O,wh).call(this,f)}>
          <span class="month-label">
            ${_?null:m`<u-ripple></u-ripple>`}
            ${this.adapter.getMonthShort(f,this._innerLocale)}
          </span>
        </div>
      `)}return e},yh=function(e){return()=>this._selectDate(e)},xh=function(e){return()=>{this.year=e,this.view="month"}},wh=function(e){return()=>{this.month=e,this.view="day"}},xa=new WeakMap,wa=new WeakMap,_a=new WeakMap,Rs=function(e){return e-Math.floor(this.yearRange/2)},_h=function(e){return!!a(this,Ve)&&e<a(this,Ve)||!!a(this,je)&&e>a(this,je)},Ch=function(e){let n=new Date(this.year,e,1),i=new Date(this.year,e+1,0);return!!a(this,Ve)&&i<a(this,Ve)||!!a(this,je)&&n>a(this,je)},kh=function(e){return!!a(this,Ve)&&e<a(this,Ve).getFullYear()||!!a(this,je)&&e>a(this,je).getFullYear()},pc=function(){return a(this,Ve)?this.view==="year"?this._yearPageStart-1<a(this,Ve).getFullYear():this.view==="month"?this.year-1<a(this,Ve).getFullYear():new Date(this.year,this.month,0)<a(this,Ve):!1},mc=function(){return a(this,je)?this.view==="year"?this._yearPageStart+this.yearRange>a(this,je).getFullYear():this.view==="month"?this.year+1>a(this,je).getFullYear():new Date(this.year,this.month+1,1)>a(this,je):!1},fc=function(e){this.month+=e},Os=function(){this.adapter.locale=this._innerLocale,this.weekDays=this.adapter.getWeekDays(this._innerLocale),this._firstDayOfWeek=this.adapter.getFirstDayOfWeek(this._innerLocale)},gc.styles=[hh];var de=gc;o([E()],de.prototype,"weekDays",void 0);o([E()],de.prototype,"_firstDayOfWeek",void 0);o([E()],de.prototype,"dateRenderer",void 0);o([l({type:Boolean})],de.prototype,"dateOutsideMonth",void 0);o([l({type:Number,attribute:"year-range"})],de.prototype,"yearRange",void 0);o([l()],de.prototype,"min",void 0);o([l()],de.prototype,"max",void 0);o([l({attribute:"value-type"})],de.prototype,"valueType",void 0);o([E()],de.prototype,"_displayingMonthDate",void 0);o([E()],de.prototype,"view",void 0);o([E()],de.prototype,"_yearPageStart",void 0);o([l()],de.prototype,"locale",void 0);o([ce({context:en,subscribe:!0}),E()],de.prototype,"contextLocale",void 0);var Eh=g`

`;var Ti,qs=(Ti=class extends de{constructor(){super(...arguments),this.dateValue=null}get value(){return this.valueType==="date"?this.dateValue?new Date(this.dateValue):null:this._getDateString(this.dateValue)}set value(t){this.dateValue=this._getDateFromValue(t)}_selectDate(t){this.dateValue=t,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})),!(this.month===t.getMonth()&&this.year===t.getFullYear())&&(this.month=t.getMonth(),this.year=t.getFullYear())}_getSelectedDateClasses(t){return this.dateValue?.getTime()===t.getTime()?{"selected-date":!0}:{}}},Ti.styles=[Eh,de.styles],Ti);o([E()],qs.prototype,"dateValue",void 0);o([l()],qs.prototype,"value",null);qs=o([b("u-calendar")],qs);var Th=g`
  :host {
    --u-elevation-level: var(--u-menu-elevation-level, 2);
    display: block;
    width: 0;
    z-index: var(--u-menu-z-index, 1020);
  }

  :host([positioning=relative]) {
    position: relative;
  }

  :host([positioning=fixed]) {
    position: fixed;
  }

  .ref {
    position: absolute;
    inset-inline-start: 0;
    pointer-events: none;
  }

  .content {
    width: 100%;
    padding-block: var(--u-menu-padding, 8px);
    opacity: 0;
    transition: opacity 1ms 400ms;
    scroll-padding-block: 32px;
    overflow: auto;
  }

  .menu {
    position: absolute;
    display: none;
    min-width: var(--u-menu-min-width, 112px);
    max-width: var(--u-menu-max-width, 280px);
    background: var(--u-menu-bg-color, var(--u-color-surface-container, rgb(243, 237, 247)));
    border-radius: var(--u-menu-shape-corner, var(--u-shape-corner-extra-small, 4px));
    opacity: 0;
    transform: scale3d(1, 0, 0);
    transform-origin: top;
    transition: transform 350ms cubic-bezier(0.19, 1, 0.22, 1) 350ms, opacity 350ms, display 700ms allow-discrete;
  }
  .menu.measuring {
    display: flex;
    visibility: hidden;
    pointer-events: none;
    transform: none;
  }
  .menu.up {
    transform-origin: bottom;
  }
  .menu.open {
    display: flex;
    opacity: 1;
    transform: scale3d(1, 1, 1);
    transition: transform 350ms cubic-bezier(0.19, 1, 0.22, 1), opacity 250ms, display 350ms allow-discrete;
  }
  @starting-style {
    .menu.open {
      opacity: 0;
      transform: scale3d(1, 0, 0);
    }
  }
  .menu.open .content {
    opacity: 1;
    transition: opacity 300ms 150ms;
  }
  @starting-style {
    .menu.open .content {
      opacity: 0;
    }
  }
`;var tn,Si,U,Sh,Ih,Ii,Ai,Ca,Di,Ah,ka,Dh,zh,Ph,Lh,Mh,vc,$h,bc,yc,xc,Bs,Ns,zi,Ct=(zi=class extends T{constructor(){super(...arguments);p(this,U);p(this,tn);p(this,Si);p(this,Ii);p(this,Ai);p(this,Ca);p(this,Di);p(this,ka);h(this,tn,!1),h(this,Si,!1),this.autoclose=!0,this.positioning="relative",this.manualFocus=!1,this.anchorCorner="end-start",this.direction="down-end",this.allowOverflow=!1,h(this,Ii,()=>this.dispatchEvent(new Event("opened"))),h(this,Ai,()=>{this.dispatchEvent(new Event("closed"))}),this.toggle=()=>{if(this.open){this.close();return}this.show()},this.close=()=>{this.open=!1},h(this,Di,()=>{this.autoclose!==!1&&(this.open=!1)}),h(this,ka,e=>{this.autoclose==="outside"&&e.stopPropagation()})}get open(){return a(this,tn)}set open(e){if(!this.menu){h(this,Si,e);return}if(this.open===e)return;if(this.menu.removeEventListener("transitionend",a(this,Ai),!0),this.menu.removeEventListener("transitionend",a(this,Ii),!0),!e){if(!this.dispatchEvent(new Event("close",{cancelable:!0})))return;h(this,tn,e),c(this,U,Ih).call(this);return}this.dispatchEvent(new Event("open",{cancelable:!0}))&&(h(this,tn,e),c(this,U,Sh).call(this))}get scrollContainer(){return this.menu}get anchorElement(){return a(this,Ca)??this.parentElement??this.getRootNode().host}set anchorElement(e){h(this,Ca,e)}render(){let e={open:this.open};return m`
      <div class="ref"></div>
      <div
        class="menu ${q(e)}" 
        part="menu"
        ?inert=${!this.open}
        @click=${a(this,ka)}>
        <u-elevation></u-elevation>
        <div role="menu" class="content" part="content">
          <slot></slot>
        </div>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.role="listbox",c(this,U,Ah).call(this)}show(){this.open=!0}calcDropdownPositioning(){if(!this.anchorElement)return;let e=this.getMenuPosition(),n=this.getMenuSize();c(this,U,Dh).call(this),c(this,U,zh).call(this,e,n),c(this,U,$h).call(this,e,n)}getMenuPosition(){let e=window.innerWidth,n=window.innerHeight,i=this.anchorElement,s=i.getBoundingClientRect(),u=this.ref.getBoundingClientRect(),f=getComputedStyle(i),v=f.direction==="rtl",w=parseInt(f.width,10),_=parseInt(f.height,10),S=u.left,I=u.top,L={left:s.left,right:e-s.left,relativeX:s.left-S},M={left:s.right,right:e-s.right,relativeX:L.relativeX+w},z={top:s.top,relativeY:s.top-I,bottom:n-s.top},X={top:z,bottom:{top:s.bottom,relativeY:z.relativeY+_,bottom:n-s.bottom},start:v?M:L,end:v?L:M,width:w,height:_};return{isRtl:v,bounds:X}}getMenuSize(){let e=this.menu;e.classList.add("measuring");let n=e.getBoundingClientRect();return e.classList.remove("measuring"),{width:n.width,height:n.height}}},tn=new WeakMap,Si=new WeakMap,U=new WeakSet,Sh=function(){this.calcDropdownPositioning(),this.menu.addEventListener("transitionend",a(this,Ii),{capture:!0,once:!0}),setTimeout(()=>document.addEventListener("click",a(this,Di))),!this.manualFocus&&setTimeout(()=>this.querySelector("u-menu-item:not([disabled])")?.focus())},Ih=function(){document.removeEventListener("click",a(this,Di)),this.menu.addEventListener("transitionend",a(this,Ai),{capture:!0,once:!0})},Ii=new WeakMap,Ai=new WeakMap,Ca=new WeakMap,Di=new WeakMap,Ah=function(){return ne(this,null,function*(){yield this.updateComplete,a(this,Si)&&(this.open=!0)})},ka=new WeakMap,Dh=function(){this.menu.className="menu",this.menu.style.top="",this.menu.style.bottom="",this.menu.style.left="",this.menu.style.right="",this.menu.style.maxHeight=""},zh=function(e,n){if(this.anchorCorner.startsWith("auto-")){c(this,U,Ph).call(this,e,n);return}let i=this.anchorCorner.startsWith("start-")?e.bounds.top:e.bounds.bottom;if(this.direction.startsWith("up-")){c(this,U,Lh).call(this,i,n);return}c(this,U,Mh).call(this,i,n)},Ph=function(e,n){let i=e.bounds.top,s=e.bounds.bottom,u=window.innerHeight;if(s.bottom>=i.top||u-(s.top+n.height)>=0){c(this,U,Ns).call(this,s);return}c(this,U,Bs).call(this,i)},Lh=function(e,n){if(e.top===e.bottom||e.top-n.height>=0){c(this,U,Bs).call(this,e);return}c(this,U,vc).call(this,e)},Mh=function(e,n){let i=window.innerHeight;if(e.top===e.bottom||i-(e.top+n.height)>=0){c(this,U,Ns).call(this,e);return}c(this,U,vc).call(this,e)},vc=function(e){if(e.top>e.bottom){c(this,U,Bs).call(this,e);return}c(this,U,Ns).call(this,e)},$h=function(e,n){let i=e.isRtl?c(this,U,yc).bind(this):c(this,U,bc).bind(this),s=e.isRtl?c(this,U,bc).bind(this):c(this,U,yc).bind(this),u=this.anchorCorner.endsWith("-start")?e.bounds.start:e.bounds.end;if(this.direction.endsWith("-start")){i(u,n);return}s(u,n)},bc=function(e,n){if(e.left===e.right||e.left-n.width>=0){this.menu.style.right=`${e.relativeX*-1}px`;return}c(this,U,xc).call(this,e)},yc=function(e,n){let i=window.innerWidth;if(e.left===e.right||i-(e.left+n.width)>=0){this.menu.style.left=`${e.relativeX}px`;return}c(this,U,xc).call(this,e)},xc=function(e){if(e.left>e.right){this.menu.style.right=`${e.relativeX*-1}px`;return}this.menu.style.left=`${e.relativeX}px`},Bs=function(e){let n=window.innerHeight;this.menu.style.bottom=`${e.relativeY*-1}px`,this.menu.classList.add("up"),this.menu.style.maxHeight=this.allowOverflow?"":`${n-e.bottom}px`},Ns=function(e){let n=window.innerHeight;this.menu.style.top=`${e.relativeY}px`,this.menu.style.maxHeight=this.allowOverflow?"":`${n-e.top}px`},zi.styles=[$,Th],zi);o([l()],Ct.prototype,"autoclose",void 0);o([l({type:Boolean,reflect:!0})],Ct.prototype,"open",null);o([l({reflect:!0})],Ct.prototype,"positioning",void 0);o([l({type:Boolean})],Ct.prototype,"manualFocus",void 0);o([l({attribute:"anchor-corner",reflect:!0})],Ct.prototype,"anchorCorner",void 0);o([l({reflect:!0})],Ct.prototype,"direction",void 0);o([l({type:Boolean,attribute:"allow-overflow",reflect:!0})],Ct.prototype,"allowOverflow",void 0);o([C(".menu")],Ct.prototype,"menu",void 0);o([C(".ref")],Ct.prototype,"ref",void 0);Ct=o([b("u-menu")],Ct);var Fs=/^\d{4}-\d{2}-\d{2}$/,kr,Us,Ea,Ta,Sa,rn,Rh,Pi,We=(Pi=class extends $e{constructor(){super(...arguments);p(this,kr);p(this,Ea);p(this,Ta);p(this,Sa);p(this,rn);this.locale=null,this.format="short",this.editable=!1,this.readOnly=!1,this.menuPositioning="relative",this.min=null,this.max=null,this.valueType="iso",h(this,Ea,e=>{if(e.key==="ArrowDown"&&!this._menu.open){e.preventDefault(),this._menu.show();return}if(e.key==="Escape"&&this._menu.open){e.preventDefault(),this._menu.close();return}this._handleKeyDown(e)}),h(this,Ta,e=>{e.stopPropagation();let n=e.target.value;this.value=n,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})),this._menu.close()}),h(this,Sa,e=>{e.stopPropagation()}),h(this,rn,()=>{this.disabled||this._menu.toggle()})}renderControl(){let e=this.editable?this._value:er(this._value,this.format,a(this,kr,Us));return m`
      ${this.editable?k:m`
          <u-ripple ?disabled=${this.disabled}>
            <button
              class="trigger"
              type="button"
              aria-haspopup="dialog"
              ?disabled=${this.disabled}
              @click=${a(this,rn)}></button>
          </u-ripple>
        `}
      <div class="input">
        <input
          type=${this.editable?"date":"text"}
          part="input"
          id=${this.id||k}
          aria-labelledby="label"
          aria-describedby="supporting-text"
          aria-haspopup="dialog"
          tabindex=${this.editable?k:-1}
          ?readonly=${this.readOnly||!this.editable}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder??k}
          min=${this.editable&&this.min||k}
          max=${this.editable&&this.max||k}
          .value=${tt(e)}
          @input=${this._handleInput}
          @keydown=${a(this,Ea)} />
      </div>
    `}renderDefaultTrailingIcon(){let e=st`
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill="currentColor">
        <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33
        0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/>
      </svg>`;return this.editable?m`<u-icon-button
          type="button"
          aria-haspopup="dialog"
          aria-label="Open calendar"
          ?disabled=${this.disabled}>${e}</u-icon-button>`:e}renderAfterContent(){return m`
      <u-menu
        positioning=${this.menuPositioning}
        autoclose="outside"
        anchor-corner="end-start"
        direction="down-end"
        allow-overflow
        manualFocus
        @click=${a(this,Sa)}>
        <u-calendar
          .value=${this._value}
          .locale=${this.locale}
          .min=${this.min}
          .max=${this.max}
          @input=${a(this,Ta)}></u-calendar>
      </u-menu>
    `}connectedCallback(){super.connectedCallback(),!this.hasAttribute("menu-positioning")&&this.closest("u-dialog")&&(this.menuPositioning="fixed"),c(this,kr,Rh).call(this)}disconnectedCallback(){super.disconnectedCallback(),this._trailingSlot?.removeEventListener("click",a(this,rn))}_getPublicValue(){return this.valueType==="date"?Ei(this._value):this._value}_coerceValue(e){return e?e instanceof Date?ya(e):e:""}_handleInput(){super._handleInput(),Fs.test(this._value)&&(this._calendar.value=this._value),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}_getValidity(){let e=super._getValidity();return e.flags.valueMissing||!Fs.test(this._value)?e:this.min&&Fs.test(this.min)&&this._value<this.min?{flags:{rangeUnderflow:!0},message:`Value must be ${er(this.min,this.format,a(this,kr,Us))} or later.`,anchor:this.input??void 0}:this.max&&Fs.test(this.max)&&this._value>this.max?{flags:{rangeOverflow:!0},message:`Value must be ${er(this.max,this.format,a(this,kr,Us))} or earlier.`,anchor:this.input??void 0}:e}},kr=new WeakSet,Us=function(){return this.locale??this.contextLocale??null},Ea=new WeakMap,Ta=new WeakMap,Sa=new WeakMap,rn=new WeakMap,Rh=function(){return ne(this,null,function*(){yield this.updateComplete,this._menu.anchorElement=this._container,this._trailingSlot.addEventListener("click",a(this,rn))})},Pi.styles=[he.styles,ki,Ms],Pi);o([l()],We.prototype,"locale",void 0);o([ce({context:en,subscribe:!0}),E()],We.prototype,"contextLocale",void 0);o([l()],We.prototype,"format",void 0);o([l({type:Boolean,reflect:!0})],We.prototype,"editable",void 0);o([l({type:Boolean,reflect:!0})],We.prototype,"readOnly",void 0);o([l({reflect:!0,attribute:"menu-positioning"})],We.prototype,"menuPositioning",void 0);o([l()],We.prototype,"min",void 0);o([l()],We.prototype,"max",void 0);o([l({attribute:"value-type"})],We.prototype,"valueType",void 0);o([C("input")],We.prototype,"input",void 0);o([C("u-menu",!0)],We.prototype,"_menu",void 0);o([C("u-calendar",!0)],We.prototype,"_calendar",void 0);o([C(".trailing-icon",!0)],We.prototype,"_trailingSlot",void 0);We=o([b("u-datepicker")],We);var Oh=g`
  .selected:not(:has(.start-date)):not(:has(.end-date)) .calendar-item:has(.date)::before, .selected:not(:has(.start-date)) .calendar-item:has(.date):has(~ .end-date)::before, .selected:not(:has(.end-date)) .start-date ~ .calendar-item:has(.date)::before,
  .selected .start-date ~ .calendar-item:has(.date):has(~ .end-date)::before,
  .selected .start-date:has(.date)::before,
  .selected .end-date:has(.date)::before, .selecting.before-start-date-month:not(:has(.selected-date)) .calendar-item:hover:has(.date) ~ .calendar-item:has(.date)::before, .selecting.after-start-date-month:not(:has(.selected-date)) .calendar-item:has(.date):has(~ .calendar-item:hover .date)::before, .selecting:has(.selected-date) .calendar-item:hover:has(.date):has(~ .selected-date) ~ .selected-date::before,
  .selecting:has(.selected-date) .calendar-item:hover:has(.date):has(~ .selected-date) ~ .calendar-item:has(~ .selected-date)::before, .selecting:has(.selected-date) .selected-date:has(~ .calendar-item:hover .date)::before,
  .selecting:has(.selected-date) .selected-date:has(~ .calendar-item:hover .date) ~ .calendar-item:has(~ .calendar-item:hover .date)::before, .selecting .calendar-item:hover:has(.date)::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    margin-top: calc(var(--_date-size) * -0.5);
    height: var(--_date-size);
    background: var(--u-color-secondary-container);
    z-index: -1;
    pointer-events: none;
  }

  .selected .start-date:has(.date)::before, .selecting.before-start-date-month:not(:has(.selected-date)) .calendar-item:has(.date):hover::before, .selecting:has(.selected-date) .calendar-item:hover:has(.date):has(~ .selected-date)::before, .selecting:has(.selected-date) .selected-date:has(~ .calendar-item:hover .date)::before {
    left: 50%;
    width: 50%;
  }

  .selected .end-date:has(.date)::before, .selecting.after-start-date-month:not(:has(.selected-date)) .calendar-item:has(.date):hover::before, .selecting:has(.selected-date) .calendar-item:hover:has(.date):has(~ .selected-date) ~ .selected-date::before, .selecting:has(.selected-date) .selected-date:has(~ .calendar-item:hover .date) ~ .calendar-item:has(.date):hover::before {
    width: 50%;
  }

  .selecting .calendar-item:hover .date {
    background-color: var(--u-calendar-selected-date-background-color, var(--u-color-primary, rgb(103, 80, 164)));
    color: var(--u-calendar-selected-date-color, var(--u-color-on-primary, rgb(255, 255, 255)));
  }
  .selecting:has(.selected-date) .selected-date:hover::before {
    display: none;
  }
  .selected .start-date.end-date::before {
    display: none;
  }
`;var ht,Hs,qh,Bh,wc,Li,Ia=(Li=class extends de{constructor(){super(...arguments);p(this,ht);this.startDateValue=null,this.endDateValue=null}get value(){return this.valueType==="date"?!this.startDateValue&&!this.endDateValue?null:{start:this.startDateValue?new Date(this.startDateValue):null,end:this.endDateValue?new Date(this.endDateValue):null}:!this.startDateValue&&!this.endDateValue?"":`${this._getDateString(this.startDateValue)} - ${this._getDateString(this.endDateValue)}`}set value(e){if(!e){this.startDateValue=null,this.endDateValue=null;return}if(typeof e=="object"){this.startDateValue=this._getDateFromValue(e.start),this.endDateValue=this._getDateFromValue(e.end);return}let n=e.split(" - ");if(n.length!==2){this.startDateValue=null,this.endDateValue=null;return}let i=n[0],s=n[1];this.startDateValue=this._getDateFromString(i),this.endDateValue=this._getDateFromString(s)}_selectDate(e){if(!this.startDateValue||this.endDateValue){c(this,ht,Hs).call(this,e,null);return}if(e>this.startDateValue){c(this,ht,Hs).call(this,this.startDateValue,e);return}c(this,ht,Hs).call(this,e,this.startDateValue)}_getCalendarClassMap(){let e={};if(!this.startDateValue)return null;if(this.startDateValue){let n=this.endDateValue?"selected":"selecting";e[n]=!0}return e[c(this,ht,qh).call(this)]=!0,this.endDateValue&&(e[c(this,ht,Bh).call(this)]=!0),q(e)}_getSelectedDateClasses(e){let n={};return this.startDateValue?.getTime()===e.getTime()&&(n["selected-date"]=!0,n["start-date"]=!0),this.endDateValue?.getTime()===e.getTime()&&(n["selected-date"]=!0,n["end-date"]=!0),n}},ht=new WeakSet,Hs=function(e,n){this.startDateValue=e,this.endDateValue=n,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0}))},qh=function(){return c(this,ht,wc).call(this,"start",this.startDateValue)},Bh=function(){return c(this,ht,wc).call(this,"end",this.endDateValue)},wc=function(e,n){let i=n.getMonth(),s=n.getFullYear();return this.month===i&&this.year===s?`on-${e}-date-month`:this.year>s||this.year===s&&this.month>i?`after-${e}-date-month`:`before-${e}-date-month`},Li.styles=[Oh,de.styles],Li);o([E()],Ia.prototype,"startDateValue",void 0);o([E()],Ia.prototype,"endDateValue",void 0);o([l()],Ia.prototype,"value",null);Ia=o([b("u-range-calendar")],Ia);var Nh=/^\d{4}-\d{2}-\d{2}$/,_c=/^\d{4}-\d{2}-\d{2} - \d{4}-\d{2}-\d{2}$/,Er,Vs,Aa,Da,za,Pa,nn,Fh,Mi,Ge=(Mi=class extends $e{constructor(){super(...arguments);p(this,Er);p(this,Aa);p(this,Da);p(this,za);p(this,Pa);p(this,nn);this.locale=null,this.format="short",this.editable=!1,this.readOnly=!1,this.menuPositioning="relative",this.min=null,this.max=null,this.valueType="iso",h(this,Aa,e=>{if(e.key==="ArrowDown"&&!this._menu.open){e.preventDefault(),this._menu.show();return}if(e.key==="Escape"&&this._menu.open){e.preventDefault(),this._menu.close();return}this._handleKeyDown(e)}),h(this,Da,e=>{e.stopPropagation();let n=e.target.value??"";this.value=n,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}),h(this,za,e=>{e.stopPropagation(),_c.test(this._value)&&(this.dispatchEvent(new Event("change",{bubbles:!0})),this._menu.close())}),h(this,Pa,e=>{e.stopPropagation()}),h(this,nn,()=>{this.disabled||this._menu.toggle()})}renderControl(){let e=this.editable?this._value:uh(this._value,this.format,a(this,Er,Vs));return m`
      ${this.editable?k:m`
          <u-ripple ?disabled=${this.disabled}>
            <button
              class="trigger"
              type="button"
              aria-haspopup="dialog"
              ?disabled=${this.disabled}
              @click=${a(this,nn)}></button>
          </u-ripple>
        `}
      <div class="input">
        <input
          type="text"
          part="input"
          id=${this.id||k}
          aria-labelledby="label"
          aria-describedby="supporting-text"
          aria-haspopup="dialog"
          tabindex=${this.editable?k:-1}
          ?readonly=${this.readOnly||!this.editable}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder??k}
          .value=${tt(e)}
          @input=${this._handleInput}
          @keydown=${a(this,Aa)} />
      </div>
    `}renderDefaultTrailingIcon(){let e=st`
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill="currentColor">
        <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33
        0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/>
      </svg>`;return this.editable?m`<u-icon-button
          type="button"
          aria-haspopup="dialog"
          aria-label="Open calendar"
          ?disabled=${this.disabled}>${e}</u-icon-button>`:e}renderAfterContent(){return m`
      <u-menu
        positioning=${this.menuPositioning}
        autoclose="outside"
        anchor-corner="end-start"
        direction="down-end"
        allow-overflow
        manualFocus
        @click=${a(this,Pa)}>
        <u-range-calendar
          .value=${this._value}
          .locale=${this.locale}
          .min=${this.min}
          .max=${this.max}
          @input=${a(this,Da)}
          @change=${a(this,za)}></u-range-calendar>
      </u-menu>
    `}connectedCallback(){super.connectedCallback(),!this.hasAttribute("menu-positioning")&&this.closest("u-dialog")&&(this.menuPositioning="fixed"),c(this,Er,Fh).call(this)}disconnectedCallback(){super.disconnectedCallback(),this._trailingSlot?.removeEventListener("click",a(this,nn))}_getPublicValue(){if(this.valueType==="date"){if(!this._value)return null;let[e,n]=this._value.split(" - ");return{start:Ei(e??""),end:Ei(n??"")}}return this._value}_coerceValue(e){if(!e)return"";if(typeof e=="string")return e;let n=e.start?ya(e.start):"",i=e.end?ya(e.end):"";return!n&&!i?"":`${n} - ${i}`}_handleInput(){super._handleInput(),_c.test(this._value)&&(this._calendar.value=this._value),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}_getValidity(){let e=super._getValidity();if(e.flags.valueMissing||!_c.test(this._value))return e;let[n,i]=this._value.split(" - ");return this.min&&Nh.test(this.min)&&n<this.min?{flags:{rangeUnderflow:!0},message:`Value must be ${er(this.min,this.format,a(this,Er,Vs))} or later.`,anchor:this.input??void 0}:this.max&&Nh.test(this.max)&&i>this.max?{flags:{rangeOverflow:!0},message:`Value must be ${er(this.max,this.format,a(this,Er,Vs))} or earlier.`,anchor:this.input??void 0}:e}},Er=new WeakSet,Vs=function(){return this.locale??this.contextLocale??null},Aa=new WeakMap,Da=new WeakMap,za=new WeakMap,Pa=new WeakMap,nn=new WeakMap,Fh=function(){return ne(this,null,function*(){yield this.updateComplete,this._menu.anchorElement=this._container,this._trailingSlot.addEventListener("click",a(this,nn))})},Mi.styles=[he.styles,ki,Ms],Mi);o([l()],Ge.prototype,"locale",void 0);o([ce({context:en,subscribe:!0}),E()],Ge.prototype,"contextLocale",void 0);o([l()],Ge.prototype,"format",void 0);o([l({type:Boolean,reflect:!0})],Ge.prototype,"editable",void 0);o([l({type:Boolean,reflect:!0})],Ge.prototype,"readOnly",void 0);o([l({reflect:!0,attribute:"menu-positioning"})],Ge.prototype,"menuPositioning",void 0);o([l()],Ge.prototype,"min",void 0);o([l()],Ge.prototype,"max",void 0);o([l({attribute:"value-type"})],Ge.prototype,"valueType",void 0);o([C("input")],Ge.prototype,"input",void 0);o([C("u-menu",!0)],Ge.prototype,"_menu",void 0);o([C("u-range-calendar",!0)],Ge.prototype,"_calendar",void 0);o([C(".trailing-icon",!0)],Ge.prototype,"_trailingSlot",void 0);Ge=o([b("u-range-datepicker")],Ge);var Uh=g`
  :host {
    --_state-layer-padding: var(--u--state-layer-padding, 4px);
    --_input-size: calc(var(--_width) - var(--_state-layer-padding) * 2);
    --_indicator-color: var(--u--indicator-unselected-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
    display: inline-block;
    vertical-align: middle;
  }

  .container {
    cursor: pointer;
    position: relative;
    width: var(--_width);
    height: var(--_height);
    padding: var(--_state-layer-padding);
    border-radius: var(--u-shape-corner-full, 9999px);
  }

  :host([hide-state-layer]) .container {
    width: var(--_indicator-size);
    height: var(--_indicator-size);
    padding: 0;
  }
  :host([hide-state-layer]) u-ripple {
    display: none;
  }

  input {
    cursor: pointer;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    border-radius: inherit;
    appearance: none;
  }

  u-ripple {
    padding: var(--_state-layer-padding);
  }

  .indicator-container {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    inset: 0;
    pointer-events: none;
  }

  input:checked ~ .indicator-container {
    --_indicator-color: var(--u--indicator-selected-color, var(--u-color-primary, rgb(103, 80, 164)));
  }

  :host([disabled]) {
    opacity: var(--u--disabled-state-opacity, 0.38);
  }
  :host([disabled]) input,
  :host([disabled]) .container {
    cursor: default;
  }
  :host([disabled]) .indicator-container {
    --_indicator-color: var(--u--indicator-disabled-color, var(--u-color-on-surface, rgb(29, 27, 32)));
  }
`;var Qm=r=>r.currentTarget!==r.target||r.composedPath()[0]!==r.target||r.target.disabled?!1:!ef(r),ef=r=>{let t=Cc;return t&&(r.preventDefault(),r.stopImmediatePropagation()),tf(),t},Cc=!1,tf=()=>ne(null,null,function*(){Cc=!0,yield null,Cc=!1}),tr,Tr,Hh,Vh,jh,La=class La extends T{constructor(){super();p(this,Tr);p(this,tr);this.name="",this.disabled=!1,h(this,tr,!1),this.inputType="checkbox",this.renderRipple=!0,this.inputDescribedById=void 0,this.inputLabelledById=void 0,this.value="on",this._checkedAttribute=!1,this.elementInternals=this.attachInternals()}get form(){return this.elementInternals.form}focus(e){this.input.focus(e)}get checked(){return this.input?this.input.checked:a(this,tr)}set checked(e){h(this,tr,e),this.input&&(this.input.checked=e),this.elementInternals.setFormValue(e?this.value:null)}firstUpdated(e){super.firstUpdated(e),this._checkedAttribute&&!a(this,tr)&&(h(this,tr,!0),this.elementInternals.setFormValue(this.value)),this.input.checked=a(this,tr)}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleClick)}render(){let e=m`
      <u-ripple ?disabled=${this.disabled} @click=${c(this,Tr,jh)}></u-ripple>
    `;return m`
      <div class="container">
        ${this.renderRipple?e:k}
        <input
          id="input"
          type=${this.inputType}
          class="focus-ring"
          .checked=${this._checkedAttribute}
          .disabled=${this.disabled}
          aria-labelledby="${this.inputLabelledById||k}"
          aria-describedby="${this.inputDescribedById||k}"
          @input=${c(this,Tr,Hh)}
          @change=${c(this,Tr,Vh)} />
        <div class="indicator-container">${this.renderIndicator()}</div>
      </div>
    `}_handleClick(e){Qm(e)&&this.input.click()}};tr=new WeakMap,Tr=new WeakSet,Hh=function(e){let n=e.target;this.checked=n.checked},Vh=function(e){vs(this,e)},jh=function(e){e.preventDefault(),this.input.click()},La.styles=[$,Uh],La.formAssociated=!0,La.shadowRootOptions=Q(N({},T.shadowRootOptions),{delegatesFocus:!0});var rt=La;o([l({reflect:!0})],rt.prototype,"name",void 0);o([l({type:Boolean,reflect:!0})],rt.prototype,"disabled",void 0);o([C("input")],rt.prototype,"input",void 0);o([l()],rt.prototype,"value",void 0);o([l({type:Boolean})],rt.prototype,"checked",null);o([l({type:Boolean,attribute:"checked"})],rt.prototype,"_checkedAttribute",void 0);var Wh=g`
  :host {
    --_state-layer-padding: var(--u-checkbox-state-layer-padding, 4px);
    --_input-size: calc(var(--_width) - var(--_state-layer-padding) * 2);
    --_indicator-color: var(--u-checkbox-indicator-unselected-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
    display: inline-block;
    vertical-align: middle;
  }

  .container {
    cursor: pointer;
    position: relative;
    width: var(--_width);
    height: var(--_height);
    padding: var(--_state-layer-padding);
    border-radius: var(--u-shape-corner-full, 9999px);
  }

  :host([hide-state-layer]) .container {
    width: var(--_indicator-size);
    height: var(--_indicator-size);
    padding: 0;
  }
  :host([hide-state-layer]) u-ripple {
    display: none;
  }

  input {
    cursor: pointer;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    border-radius: inherit;
    appearance: none;
  }

  u-ripple {
    padding: var(--_state-layer-padding);
  }

  .indicator-container {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    inset: 0;
    pointer-events: none;
  }

  input:checked ~ .indicator-container {
    --_indicator-color: var(--u-checkbox-indicator-selected-color, var(--u-color-primary, rgb(103, 80, 164)));
  }

  :host([disabled]) {
    opacity: var(--u-checkbox-disabled-state-opacity, 0.38);
  }
  :host([disabled]) input,
  :host([disabled]) .container {
    cursor: default;
  }
  :host([disabled]) .indicator-container {
    --_indicator-color: var(--u-checkbox-indicator-disabled-color, var(--u-color-on-surface, rgb(29, 27, 32)));
  }

  :host {
    --_indicator-size: var(--u-checkbox-indicator-size, 1.125rem);
    --_width: var(--u-checkbox-size, 3rem);
    --_height: var(--_width);
  }

  .border {
    width: var(--_indicator-size);
    height: var(--_indicator-size);
    box-shadow: 0 0 0 var(--u-checkbox-indicator-border-width, 0.125rem) var(--_indicator-color) inset;
    border-radius: var(--u-checkbox-indicator-shaper-coner, 2px);
    transition: box-shadow 175ms 175ms;
  }

  .indicator {
    position: absolute;
    display: flex;
    justify-content: center;
    width: var(--_indicator-size);
    height: var(--_indicator-size);
    overflow: hidden;
    clip: rect(0, 0, var(--_indicator-size), 0);
    transition: clip 275ms;
  }
  .indicator::before {
    position: relative;
    top: 25%;
    box-sizing: border-box;
    display: block;
    width: 0.75rem;
    height: 0.35rem;
    content: "";
    border: var(--u-checkbox-indicator-border-width, 0.125rem) solid var(--u-color-on-primary, rgb(255, 255, 255));
    border-top-style: none;
    border-right-style: none;
    transform: rotate(-45deg);
    transition: border 175ms, transform 175ms;
  }

  input.indeterminate ~ .indicator-container .border,
  input:checked ~ .indicator-container .border {
    box-shadow: 0 0 0 calc(var(--_indicator-size) / 2) var(--_indicator-color) inset;
    transition: box-shadow 175ms;
  }
  input.indeterminate ~ .indicator-container .indicator,
  input:checked ~ .indicator-container .indicator {
    clip: rect(0, var(--_indicator-size), var(--_indicator-size), 0);
    transition: clip 175ms 175ms;
  }

  input.indeterminate ~ .indicator-container {
    --_indicator-color: var(--u-checkbox-indicator-indeterminate-color, var(--u-color-primary, rgb(103, 80, 164)));
  }
  input.indeterminate ~ .indicator-container .indicator::before {
    border-left-style: none;
    transform: rotate(0);
    width: 0.6rem;
  }
`;var $i,Ri,Oi=(Ri=class extends rt{constructor(){super();p(this,$i);h(this,$i,!1),this.hideStateLayer=!1}get indeterminate(){return a(this,$i)}set indeterminate(e){if(h(this,$i,e),!e){this.input?.classList.remove("indeterminate");return}this.input?.classList.add("indeterminate"),this.elementInternals.setFormValue(null)}get checked(){return super.checked}set checked(e){super.checked=e,this.indeterminate=!1}firstUpdated(e){super.firstUpdated(e),this.indeterminate=this.indeterminate}renderIndicator(){return m`
      <div class="border"><div class="indicator"></div></div>
    `}},$i=new WeakMap,Ri.styles=[$,Wh],Ri);o([l({type:Boolean,attribute:"hide-state-layer",reflect:!0})],Oi.prototype,"hideStateLayer",void 0);o([l({type:Boolean})],Oi.prototype,"indeterminate",null);Oi=o([b("u-checkbox")],Oi);var qi=r=>{let e=class e extends Ie(r){constructor(){super(...arguments),this.leading=!1,this.noInset=!1,this.inputDescribedById="description",this.inputLabelledById="label"}render(){return m`
        <label>
          <u-list-item ?selectable=${!this.disabled} ?no-inset=${this.noInset} ?compact=${this.isCompact}>
            <div slot="${this.leading?"leading-icon":"trailing-icon"}">${super.render()}</div>
            <span id="label"><slot></slot></span>
            <span id="description" slot="supporting-text"><slot name="supporting-text"></slot></span>
          </u-list-item>
        </label>
      `}};e.styles=[r.styles??[],g`
        :host {
          --u-list-item-block-padding: 0;
          display: block;
        }

        :host(:not([disabled])) {
          cursor: pointer;
        }
      `];let t=e;return o([l({type:Boolean})],t.prototype,"leading",void 0),o([l({type:Boolean,attribute:"no-inset"})],t.prototype,"noInset",void 0),t};var Gh=class extends qi(Oi){};Gh=o([b("u-checkbox-list-item")],Gh);var Yh=g`
  :host {
    --_state-layer-padding: var(--u-radio-state-layer-padding, 4px);
    --_input-size: calc(var(--_width) - var(--_state-layer-padding) * 2);
    --_indicator-color: var(--u-radio-indicator-unselected-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
    display: inline-block;
    vertical-align: middle;
  }

  .container {
    cursor: pointer;
    position: relative;
    width: var(--_width);
    height: var(--_height);
    padding: var(--_state-layer-padding);
    border-radius: var(--u-shape-corner-full, 9999px);
  }

  :host([hide-state-layer]) .container {
    width: var(--_indicator-size);
    height: var(--_indicator-size);
    padding: 0;
  }
  :host([hide-state-layer]) u-ripple {
    display: none;
  }

  input {
    cursor: pointer;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    border-radius: inherit;
    appearance: none;
  }

  u-ripple {
    padding: var(--_state-layer-padding);
  }

  .indicator-container {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    inset: 0;
    pointer-events: none;
  }

  input:checked ~ .indicator-container {
    --_indicator-color: var(--u-radio-indicator-selected-color, var(--u-color-primary, rgb(103, 80, 164)));
  }

  :host([disabled]) {
    opacity: var(--u-radio-disabled-state-opacity, 0.38);
  }
  :host([disabled]) input,
  :host([disabled]) .container {
    cursor: default;
  }
  :host([disabled]) .indicator-container {
    --_indicator-color: var(--u-radio-indicator-disabled-color, var(--u-color-on-surface, rgb(29, 27, 32)));
  }

  :host {
    --_indicator-size: var(--u-radio-indicator-size, 1.25rem);
    --_width: var(--u-radio-size, 3rem);
    --_height: var(--_width);
  }

  .indicator {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--_indicator-size);
    height: var(--_indicator-size);
    border: var(--u-radio-indicator-border-width, 0.125rem) solid var(--_indicator-color);
    border-radius: 50%;
  }
  .indicator::before {
    content: "";
    width: calc(var(--_indicator-size) / 2);
    height: calc(var(--_indicator-size) / 2);
    background: var(--_indicator-color);
    border-radius: 50%;
    transition: transform 250ms;
    transform: scale3d(0, 0, 1);
  }

  input:checked ~ .indicator-container .indicator::before {
    transform: scale3d(1, 1, 1);
  }
`;var Sr,kc,Ec,Bi,Ma=(Bi=class extends rt{constructor(){super();p(this,Sr);this.hideStateLayer=!1,this.inputType="radio"}renderIndicator(){return m`
      <div class="indicator"></div>
    `}get checked(){return super.checked}set checked(e){super.checked=e,e&&(this.uncheckSiblings(),this.input&&(this.input.tabIndex=0))}firstUpdated(e){super.firstUpdated(e),this.ensureOnlyOneChecked()}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",c(this,Sr,Ec))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",c(this,Sr,Ec))}ensureOnlyOneChecked(){if(!this.name)return;let n=Array.from(document.querySelectorAll(`${this.tagName}[name="${this.name}"]`)).reverse().find(i=>i.checked);n&&(n.checked=!0)}uncheckSiblings(){for(let e of a(this,Sr,kc))e!==this&&(e.input&&(e.input.tabIndex=-1),e.checked=!1)}},Sr=new WeakSet,kc=function(){return this.name?Array.from(this.getRootNode().querySelectorAll(`${this.tagName}[name="${this.name}"]`)):[this]},Ec=function(e){let n=e.key==="ArrowDown",i=e.key==="ArrowUp",s=e.key==="ArrowLeft",u=e.key==="ArrowRight";if(!s&&!u&&!n&&!i)return;let f=a(this,Sr,kc);if(!f.length)return;e.preventDefault();let _=(getComputedStyle(this).direction==="rtl"?s||n:u||n)?1:-1,S=f.indexOf(this),I=S+_;for(;I!==S;){I>=f.length?I=0:I<0&&(I=f.length-1);let L=f[I];if(L.disabled){I+=_;continue}let M=!L.dispatchEvent(new Event("click",{bubbles:!0,cancelable:!0}));if(L.input.focus(),M)break;L.checked=!0,L.dispatchEvent(new Event("change",{bubbles:!0}));break}},Bi.styles=[$,Yh],Bi);o([l({type:Boolean,attribute:"hide-state-layer",reflect:!0})],Ma.prototype,"hideStateLayer",void 0);Ma=o([b("u-radio")],Ma);var Xh=class extends qi(Ma){};Xh=o([b("u-radio-list-item")],Xh);var Kh=g`
  :host {
    --_state-layer-padding: var(--u-switch-state-layer-padding, 4px);
    --_input-size: calc(var(--_width) - var(--_state-layer-padding) * 2);
    --_indicator-color: var(--u-switch-indicator-unselected-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
    display: inline-block;
    vertical-align: middle;
  }

  .container {
    cursor: pointer;
    position: relative;
    width: var(--_width);
    height: var(--_height);
    padding: var(--_state-layer-padding);
    border-radius: var(--u-shape-corner-full, 9999px);
  }

  :host([hide-state-layer]) .container {
    width: var(--_indicator-size);
    height: var(--_indicator-size);
    padding: 0;
  }
  :host([hide-state-layer]) u-ripple {
    display: none;
  }

  input {
    cursor: pointer;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    border-radius: inherit;
    appearance: none;
  }

  u-ripple {
    padding: var(--_state-layer-padding);
  }

  .indicator-container {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    inset: 0;
    pointer-events: none;
  }

  input:checked ~ .indicator-container {
    --_indicator-color: var(--u-switch-indicator-selected-color, var(--u-color-primary, rgb(103, 80, 164)));
  }

  :host([disabled]) {
    opacity: var(--u-switch-disabled-state-opacity, 0.38);
  }
  :host([disabled]) input,
  :host([disabled]) .container {
    cursor: default;
  }
  :host([disabled]) .indicator-container {
    --_indicator-color: var(--u-switch-indicator-disabled-color, var(--u-color-on-surface, rgb(29, 27, 32)));
  }

  :host {
    --_width: 3.25rem;
    --_height: 2rem;
    --_state-layer-padding: 0;
    --_selected-track-background: var(--u-switch-track-bg-color, var(--u-color-primary, rgb(103, 80, 164)));
    --_state-layer-size: var(--u-switch-state-layer-size, 2.5rem);
    --_unselected-color: var(--u-switch-track-outline-color, var(--u-color-outline, rgb(121, 116, 126)));
    --_unselected-handle-size: var(--u-swich-unselected-handle-size, 1rem);
    --_selected-handle-size: var(--u-swich-unselected-handle-size, 1.5rem);
    --_active-handle-size: var(--u-swich-unselected-handle-size, 1.75rem);
  }

  .indicator-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: var(--_height);
    transition: width 200ms;
  }

  .state-layer,
  .indicator {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .indicator {
    width: var(--_height);
    height: var(--_height);
  }

  .state-layer {
    flex-shrink: 0;
    width: var(--_state-layer-size);
    height: var(--_state-layer-size);
    border-radius: var(--u-shape-corner-full, 9999px);
  }

  .handle {
    width: var(--_unselected-handle-size);
    height: var(--_unselected-handle-size);
    background-color: var(--u-switch-unselected-handle-color, var(--_unselected-color));
    border-radius: var(--u-switch-handle-shape-corner, var(--u-shape-corner-full, 9999px));
    transition: background 200ms, width 200ms, height 200ms;
  }

  input {
    border: var(--u-switch-track-width, 0.125rem) solid var(--u-switch-unselected-track-outline-color, var(--_unselected-color));
    background-color: var(--u-switch-unselected-track-bg-color, var(--u-color-surface-container-highest, rgb(230, 224, 233)));
    transition: background 200ms, border-color 200ms;
  }
  input:checked {
    background-color: var(--_selected-track-background);
    border-color: var(--_selected-track-background);
  }
  input:checked ~ .indicator-container {
    width: 100%;
  }
  input:checked ~ .indicator-container .handle {
    width: var(--_selected-handle-size);
    height: var(--_selected-handle-size);
    background-color: var(--u-switch-selected-handle-color, var(--u-color-on-primary, rgb(255, 255, 255)));
  }

  @media (hover: hover) {
    :host(:not([disabled]):hover) .state-layer {
      background-color: color-mix(in srgb, var(--u-color-on-surface, rgb(29, 27, 32)) var(--u-switch-state-layer-hover-opacity, var(--u-state-hover-opacity, 0.08)), transparent);
    }
  }
  :host(:not([disabled]):active) .indicator-container .handle {
    width: var(--_active-handle-size);
    height: var(--_active-handle-size);
  }
`;var Ni,js=(Ni=class extends rt{constructor(){super(),this.renderRipple=!1}renderIndicator(){return m`
      <div class="indicator">
        <div class="state-layer">
          <div class="handle"></div>
        </div>
      </div>
    `}},Ni.styles=[$,Kh],Ni);js=o([b("u-switch")],js);var Zh=class extends qi(js){};Zh=o([b("u-switch-list-item")],Zh);var Tc=class extends ie{constructor(){super(...arguments),this.autoEmpty=!1,this.control=null,this.handleControlInput=()=>{this.autoEmpty&&(this.empty=!this.control?.value)}}connectedCallback(){super.connectedCallback(),this.control=this.querySelector("input, select, button, textarea"),this.control?.addEventListener("input",this.handleControlInput),this.autoEmpty&&(this.empty=!this.control?.value)}disconnectedCallback(){super.disconnectedCallback(),this.control?.removeEventListener("input",this.handleControlInput),this.control=null}renderControl(){return m`
      <slot name="prefix"></slot>
      <div class="input"><slot></slot></div>
      <slot name="suffix"></slot>
    `}};o([l({type:Boolean})],Tc.prototype,"autoEmpty",void 0);Tc=o([b("u-field")],Tc);var Fi,Nt=(Fi=class extends $e{constructor(){super(...arguments),this.type="text",this.readOnly=!1}renderControl(){return m`
      <slot class="prefix" name="prefix">
        <span>${this.prefixText}</span>
      </slot>
      <div class="input">
        <input
          type=${this.type}
          part="input"
          id=${this.id||k}
          aria-labelledby="label"
          aria-describedBy="supporting-text"
          ?readonly=${this.readOnly}
          ?disabled=${this.disabled}
          ?required=${this.required}
          spellcheck=${this.spellcheck}
          autocomplete=${this.autocomplete??k}
          autocapitalize=${this.autocapitalize||k}
          ?autofocus=${this.autofocus}
          role=${this.role??k}
          maxlength=${this.maxlength??k}
          minlength=${this.minlength??k}
          pattern=${this.pattern??k}
          .placeholder=${this.placeholder??k}
          .value=${tt(this._value)}
          @input=${this._handleInput}
          @keydown=${this._handleKeyDown} />
      </div>
      <slot class="suffix" name="suffix">
        <span>${this.suffixText}</span>
      </slot>
    `}_getValidity(){if(!this.input)return super._getValidity();let t=this.input.validity;return{flags:{valueMissing:t.valueMissing,typeMismatch:t.typeMismatch,patternMismatch:t.patternMismatch,tooLong:t.tooLong,tooShort:t.tooShort,rangeUnderflow:t.rangeUnderflow,rangeOverflow:t.rangeOverflow,stepMismatch:t.stepMismatch,badInput:t.badInput,customError:t.customError},message:this.input.validationMessage,anchor:this.input}}},Fi.styles=[he.styles,ki],Fi);o([l()],Nt.prototype,"type",void 0);o([l({attribute:"prefix-text"})],Nt.prototype,"prefixText",void 0);o([l({attribute:"suffix-text"})],Nt.prototype,"suffixText",void 0);o([l({type:Boolean,reflect:!0})],Nt.prototype,"readOnly",void 0);o([l()],Nt.prototype,"pattern",void 0);o([l({type:Number})],Nt.prototype,"minlength",void 0);o([l({reflect:!0})],Nt.prototype,"autocapitalize",void 0);o([C("input")],Nt.prototype,"input",void 0);Nt=o([b("u-text-field")],Nt);var Jh=g`
  :host {
    resize: both;
  }

  .container,
  .input-wrapper {
    resize: inherit;
  }

  .input-wrapper,
  .input,
  textarea,
  .container {
    height: 100%;
  }

  .input-wrapper {
    padding: 0 !important;
    overflow: hidden;
  }

  textarea {
    margin: 0;
    resize: none;
  }

  .input textarea {
    border-block: var(--_vertical-padding) solid transparent;
    padding-inline: var(--_field-control-inline-padding);
  }

  .container.filled:not(.no-label) textarea {
    border-top: calc(var(--_vertical-padding) + var(--_label-line-height)) solid transparent;
    border-bottom: var(--_vertical-padding) solid transparent;
  }
`;var Ui,Ws=(Ui=class extends $e{constructor(){super(...arguments),this.rows=2}renderControl(){return m`
      <div class="input">
        <textarea
          part="input"
          id=${this.id||k}
          aria-labelledby="label"
          aria-describedBy="supporting-text"
          ?disabled=${this.disabled}
          spellcheck=${this.spellcheck}
          autocomplete=${mr(this.autocomplete)}
          autocapitalize=${this.autocapitalize}
          role=${this.role??k}
          maxlength=${this.maxlength??k}
          .rows=${this.rows}
          .placeholder=${this.placeholder}
          .value=${tt(this._value)}
          @input=${this._handleInput}></textarea>
      </div>
    `}},Ui.styles=[he.styles,Jh],Ui);o([l({type:Number})],Ws.prototype,"rows",void 0);o([C("textarea")],Ws.prototype,"input",void 0);Ws=o([b("u-text-area")],Ws);function*$a(r,t){if(r!==void 0){let e=0;for(let n of r)yield t(n,e++)}}var rf=Symbol.for(""),nf=r=>{if(r?.r===rf)return r?._$litStatic$};var Qh=new Map,Sc=r=>(t,...e)=>{let n=e.length,i,s,u=[],f=[],v,w=0,_=!1;for(;w<n;){for(v=t[w];w<n&&(s=e[w],(i=nf(s))!==void 0);)v+=i+t[++w],_=!0;w!==n&&f.push(s),u.push(v),w++}if(w===n&&u.push(t[n]),_){let S=u.join("$$lit$$");(t=Qh.get(S))===void 0&&(u.raw=u,Qh.set(S,t=u)),e=f}return r(t,...e)},Gs=Sc(m),xC=Sc(st),wC=Sc(xd);var Ft=r=>r?r.normalize("NFD").replace(/[\u0300-\u036f]/g,""):r??"";var Ic=(r,t)=>Ft(r).toLowerCase().startsWith(Ft(t).toLowerCase());var Hi=class{#e;constructor(t){this.#e=null,this.focusedMenu=null,this.#t=()=>this.blurMenu(),this.getHost=()=>t,this._bindHandleKeyDown=this.handleKeyDown.bind(this)}attach(t){this.detach(),t?.addEventListener("keydown",this._bindHandleKeyDown,{capture:!0}),this.getHost()._menu?.addEventListener("close",this.#t),this.#e=t}detach(){this.#e?.removeEventListener("keydown",this._bindHandleKeyDown),this.getHost()._menu?.removeEventListener("close",this.#t),this.#e=null}#t;handleKeyDown(t){if(this.getHost()._menu?.open!==!0)return!1;if(t.key==="Escape"&&this.getHost()._menu.close(),t.key==="Home")return this.navigateTo(t,this.getHost()._menuItems[0],0),!0;if(t.key==="End")return this.navigateTo(t,this.getHost()._menuItems[this.getHost()._menuItems.length-1],this.getHost()._menuItems.length-1),!0;let n=t.key==="ArrowDown",i=t.key==="ArrowUp";if(n||i)return this.navigate(t,n),!0;let s=t.key==="Enter",u=t.key==="Tab";return s||u?(this.selectActiveItem(t),!0):!1}navigate(t,e){let n=this.getHost()._menuItems;if(!n.length)return;t.preventDefault();let i=this.focusedMenu,s=i?n.indexOf(i):-1,u=e?n[s+1]??n[0]:n[s-1]??n[n.length-1];u&&this.navigateTo(t,u,n.indexOf(u))}navigateTo(t,e,n){t.preventDefault(),this.blurMenu(),e&&this.focusMenu(e,n)}focusMenu(t,e,n=!0,i=!0){this.focusedMenu&&(this.focusedMenu.active=!1),this.focusedMenu=t,t.active=n,i&&t.scrollIntoView({block:"nearest"}),this.afterFocus(t,e)}blurMenu(){this.focusedMenu&&(this.focusedMenu.active=!1,this.focusedMenu=null,this.afterBlur())}selectActiveItem(t){this.focusedMenu&&(t.preventDefault(),this.focusedMenu.click(),this.getHost()._menu.open=!1)}afterFocus(t,e){}afterBlur(){}};var ep=()=>({typing:!1,repeating:!1,buffer:"",timeoutId:0}),Ys=class extends Hi{#e=ep();handleKeyDown(t){if(this.getHost()._menu.open)return super.handleKeyDown(t)||this.handleType(t);let e=t.key==="ArrowDown",n=t.key==="ArrowUp";if(!e&&!n)return this.handleType(t);if(t.preventDefault(),this.getHost()._menu.show(),!this.getHost().selectedOptions.length)return!0;let i=this.getHost().selectedOptions[0];return this.navigateTo(t,i,this.getHost()._menuItems.indexOf(i)),!0}attach(t){super.attach(t),this.getHost()._menu.addEventListener("menu-item-mouseenter",this.#t)}detach(){super.detach(),this.getHost()._menu.removeEventListener("menu-item-mouseenter",this.#t)}#t=t=>{this.blurMenu();let e=t.target;this.focusMenu(e,this.getHost()._menuItems.indexOf(e),!1,!1)};afterFocus(t,e){this.getHost()._button.setAttribute("aria-activedescendant",`item-${e+1}`)}afterBlur(){this.getHost()._button.removeAttribute("aria-activedescendant")}handleType(t){if(t.key.length>1)return!1;this.#e.timeoutId&&clearTimeout(this.#e.timeoutId);let e=this.focusedMenu;this.#e.buffer+=t.key,this.#e.timeoutId=setTimeout(()=>this.#e=ep(),1e3);let n=this.#e.buffer.replaceAll(t.key,"")===""?t.key:this.#e.buffer;return this.findNextElementByTerm(n,e),!0}findNextElementByTerm(t,e){let n=this.getHost()._options,i=e?n.indexOf(e):-1,s=i>-1?this.getHost()._options[i+1]:null;if((!s||!Ic(s.textContent,t))&&(s=n.find(f=>Ic(f.textContent,t))),!s)return;let u=n.indexOf(s);if(this.getHost()._menu.open){this.blurMenu(),this.focusMenu(s,u);return}s._setSelectedByUser()}};var tp=g`
  u-menu {
    display: block;
    width: 100%;
  }
  u-menu::part(menu) {
    width: var(--_menu-width);
    max-width: none;
  }

  :host(:not([disabled])) .button {
    cursor: pointer;
  }

  .button {
    position: absolute;
    inset: 0;
    margin: 0;
    padding: 0;
    background: transparent;
    border: none;
    appearance: none;
  }

  select {
    pointer-events: none;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .list {
    width: 2px;
    height: 2px;
    margin: -1px;
    overflow: hidden;
  }

  .input {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;var rp=g`
  :host {
    display: block;
    --_menu-item-height: var(--u-menu-item-height, 56px);
    --_menu-item-icon-size: var(--u-menu-item-icon-size, 1.5rem);
    --_menu-item-padding: var(--u-menu-item-padding, 12px);
    --u-focus-ring-outline-offset: -4px;
  }

  :host([data-compact]) {
    --_menu-item-height: var(--u-menu-item-compact-height, 40px);
  }

  .container {
    height: var(--_menu-item-height);
    padding-inline: var(--_menu-item-padding);
    color: var(--u-menu-item-label-color, var(--u-color-on-surface, rgb(29, 27, 32)));
    font-family: var(--u-font-family, var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"));
    line-height: var(--u-menu-item-label-line-height, var(--u-label-l-line-height, 1.25rem));
    font-size: var(--u-menu-item-label-font-size, var(--u-label-l-font-size, 0.875rem));
    letter-spacing: var(--u-menu-item-label-letter-spacing, var(--u-label-l-letter-spacing, 0.0071428571rem));
    font-weight: var(--u-menu-item-label-font-weight, var(--u-label-l-font-weight, var(--u-font-weight-medium, 500)));
  }
  .container:not(.leading-icon) .leading {
    display: none;
  }
  .container:not(.trailing-icon) .trailing:has(slot[name=trailing-icon] span:empty) {
    display: none;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--_menu-item-icon-size);
    height: var(--_menu-item-icon-size);
    font-size: var(--_menu-item-icon-size);
    color: var(--u-menu-item-label-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
  }

  .content {
    justify-content: flex-start;
    gap: var(--u-menu-item-icon-margin, 12px);
  }

  .force-focus-ring .button,
  .button:focus-visible {
    border-radius: var(--u-spacing-small, 8px);
  }

  .label {
    flex: 1;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;var Vi,Wi,np,ip,ji,rr=(ji=class extends Ie(J){constructor(){super(...arguments);p(this,Wi);p(this,Vi);this.active=!1,this._hasLeadingIcon=!1,this._hasTrailingIcon=!1,this.hasBadge=!1,this.innerRole="menuitem",h(this,Vi,()=>this.dispatchEvent(new CustomEvent("menu-item-mouseenter",{bubbles:!0})))}connectedCallback(){super.connectedCallback(),this.role="presentation",this.addEventListener("mouseenter",a(this,Vi))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",a(this,Vi))}_getContainerClasses(){return Q(N({},super._getContainerClasses()),{"force-focus-ring":this.active,"leading-icon":this._hasLeadingIcon,"trailing-icon":this._hasTrailingIcon})}_renderContent(){return m`
      <div class="icon leading">
        <slot name="leading-icon" aria-hidden="true" @slotchange="${c(this,Wi,np)}"></slot>
      </div>
      <span class="label" id="text">
        <slot></slot>
      </span>
      <div class="icon trailing">
        <slot name="trailing-icon" aria-hidden="true" @slotchange="${c(this,Wi,ip)}">
          <span>${this._renderDefaultTrailingIcon()}</span>
        </slot>
      </div>
    `}_renderDefaultTrailingIcon(){return k}},Vi=new WeakMap,Wi=new WeakSet,np=function(e){this._hasLeadingIcon=e.target.assignedElements({flatten:!0}).length>0},ip=function(e){this._hasTrailingIcon=e.target.assignedElements({flatten:!0}).length>0},ji.styles=[J.styles,rp],ji);o([l({type:Boolean,reflect:!0})],rr.prototype,"active",void 0);o([E()],rr.prototype,"_hasLeadingIcon",void 0);o([E()],rr.prototype,"_hasTrailingIcon",void 0);o([l({type:Boolean,attribute:"has-badge",reflect:!0})],rr.prototype,"hasBadge",void 0);rr=o([b("u-menu-item")],rr);var op=g`
  .selected {
    background-color: var(--u-select-option-selected-bg-color, color-mix(in srgb, var(--u-color-primary, rgb(103, 80, 164)) 12%, transparent));
  }
  .selected .icon,
  .selected .content {
    color: var(--u-select-option-selected-text-color, var(--u-color-primary, rgb(103, 80, 164)));
  }

  .container:not(.selected):not(.trailing-icon) .trailing {
    display: none;
  }
`;var Ra,Gi,Yi,nt,nr,Oa,Ac,Xi,Xs=(Xi=class extends rr{constructor(){super(...arguments);p(this,nt);p(this,Ra,new MutationObserver(()=>c(this,nt,Ac).call(this)));p(this,Gi,"");p(this,Yi,!1);p(this,Oa,e=>{!a(this,nt,nr)||this.disabled||(e.stopPropagation(),a(this,nt,nr)._setSelectedByUser(this))})}get value(){return a(this,Gi)}set value(e){a(this,Gi)!==e&&(h(this,Gi,e),a(this,nt,nr)?._scheduleSync())}get selected(){return a(this,Yi)}set selected(e){a(this,Yi)!==e&&(h(this,Yi,e),a(this,nt,nr)?._scheduleSync())}get defaultSelected(){return this.hasAttribute("selected")}set defaultSelected(e){this.toggleAttribute("selected",e)}_getContainerClasses(){return Q(N({},super._getContainerClasses()),{selected:this.selected})}_renderDefaultTrailingIcon(){return st`
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill="currentColor">
        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
      </svg>`}connectedCallback(){super.connectedCallback(),this.addEventListener("click",a(this,Oa)),this.setAttribute("tabindex","-1"),a(this,Ra).observe(this,{subtree:!0,characterData:!0,childList:!0}),c(this,nt,Ac).call(this)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",a(this,Oa)),a(this,Ra).disconnect()}attributeChangedCallback(e,n,i){super.attributeChangedCallback(e,n,i),e==="disabled"&&a(this,nt,nr)?._scheduleSync()}_setSelectedByUser(){!a(this,nt,nr)||this.disabled||a(this,nt,nr)._setSelectedByUser(this)}},Ra=new WeakMap,Gi=new WeakMap,Yi=new WeakMap,nt=new WeakSet,nr=function(){return this.parentElement?.tagName==="U-SELECT"?this.parentElement:null},Oa=new WeakMap,Ac=function(){a(this,nt,nr)?._renderOptionRelatedElements()},Xi.styles=[rr.styles,op],Xi);o([l({reflect:!0})],Xs.prototype,"value",null);o([l({type:Boolean})],Xs.prototype,"selected",null);Xs=o([b("u-option")],Xs);var an,Ir,Ki,Ar,sn,it,Zi,kt,j,on,qa,Dc,ap,sp,zc,Pc,lp,Ba,Ji,Lc,Qi,eo,to,cp,dp,ro,Dr=(ro=class extends he{constructor(){super(...arguments);p(this,j);p(this,an);p(this,Ir);p(this,Ki);p(this,Ar);p(this,sn);p(this,it);p(this,Zi);p(this,kt);p(this,Ba);p(this,Ji);p(this,Qi);p(this,eo);p(this,to);h(this,an,(()=>{let e=document.createElement("div");return e.role="listbox",e.id="list",e.className="list",e})()),h(this,Ir,new Ys(this)),h(this,Ki,new ResizeObserver(()=>c(this,j,lp).call(this))),h(this,Ar,!1),h(this,sn,!1),h(this,it,-1),h(this,Zi,""),h(this,kt,null),this.menuPositioning="relative",h(this,Ba,()=>{c(this,j,qa).call(this)}),h(this,Ji,e=>{this._menu.toggle(),!(!this._menu.open||a(this,it)===-1)&&a(this,Ir).focusMenu(this.selectedOptions[0],0,e.detail===0,!1)}),h(this,Qi,()=>{this._button.setAttribute("aria-expanded","true")}),h(this,eo,()=>{this._options[a(this,it)]?.scrollIntoView({block:"nearest"})}),h(this,to,()=>{this._button.setAttribute("aria-expanded","false"),a(this,Ir).blurMenu()})}get value(){return this._options[a(this,it)]?.value??""}set value(e){h(this,kt,e),c(this,j,on).call(this,this._options.findIndex(n=>n.value===e))}get selectedIndex(){return a(this,it)}set selectedIndex(e){let n=this._options.length,i=e>=0&&e<n?e:-1;h(this,kt,i>=0?this._options[i].value:null),c(this,j,on).call(this,i)}get _options(){return Array.from(this.querySelectorAll(":scope > u-option"))}get _menuItems(){return this._options}get selectedOptions(){let e=this._options[a(this,it)];return e?[e]:[]}renderControl(){return Gs`
      <button 
         class="button"
         role="combobox"
         aria-haspopup="listbox"
         aria-controls="list"
         aria-expanded="false"
         ?disabled=${this.disabled}></button>
      <div class="input">
        <span class="display"></span>
      </div>`}renderAfterContent(){return m`
      <u-menu positioning="${this.menuPositioning}">
        <slot @slotchange=${a(this,Ba)}></slot>
      </u-menu>
    `}renderDefaultTrailingIcon(){return st`
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill="currentColor">
        <path d="M480-360 280-560h400L480-360Z"/>
      </svg>`}connectedCallback(){super.connectedCallback(),h(this,Ar,!0),c(this,j,cp).call(this)}disconnectedCallback(){super.disconnectedCallback(),c(this,j,dp).call(this)}formResetCallback(){for(let e of this._options)e.selected=e.defaultSelected;h(this,kt,null),c(this,j,qa).call(this)}formStateRestoreCallback(e){this.value=e??""}_scheduleSync(){a(this,sn)||!a(this,Ar)||(h(this,sn,!0),queueMicrotask(()=>{try{c(this,j,Dc).call(this)!==a(this,Zi)&&c(this,j,qa).call(this)}finally{h(this,sn,!1)}}))}_setSelectedByUser(e){let n=a(this,it),i=this._options.indexOf(e);i<0||(h(this,kt,e.value),c(this,j,on).call(this,i),n!==i&&(this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0}))),this._menu.close())}_getValidity(){let e=this.required&&this.value==="";return{flags:{valueMissing:e},message:e?"Please select an item in the list.":"",anchor:this._button}}_renderOptionRelatedElements(){!a(this,Ar)||!this._input||(c(this,j,zc).call(this),c(this,j,Pc).call(this))}},an=new WeakMap,Ir=new WeakMap,Ki=new WeakMap,Ar=new WeakMap,sn=new WeakMap,it=new WeakMap,Zi=new WeakMap,kt=new WeakMap,j=new WeakSet,on=function(e){let n=this._options,i=e>=0?n[e]:null;for(let s of n)s.selected=s===i;h(this,it,i?e:-1),h(this,Zi,c(this,j,Dc).call(this)),c(this,j,ap).call(this)},qa=function(){let e=this._options;if(a(this,kt)!==null){let i=e.findIndex(s=>s.value===a(this,kt)&&!s.disabled);if(i>=0){c(this,j,on).call(this,i);return}}let n=-1;for(let i=0;i<e.length;i++)e[i].defaultSelected&&(n=i);if(n>=0){h(this,kt,e[n].value),c(this,j,on).call(this,n);return}c(this,j,on).call(this,-1)},Dc=function(){return this._options.map(e=>`${e.selected?1:0}:${e.disabled?1:0}:${e.value}`).join("|")},ap=function(){this.elementInternals.setFormValue(this.value||null),c(this,j,zc).call(this),c(this,j,Pc).call(this),c(this,j,sp).call(this),this.requestUpdate()},sp=function(){let e=this._options[a(this,it)];this.empty=!e?.textContent?.trim()},zc=function(){let e=a(this,it);Sn($a(this._options,(n,i)=>m`<div role="option"
                  id=${`item-${i+1}`}
                  aria-selected=${i===e?"true":"false"}>
               ${n.textContent}
             </div>`),a(this,an))},Pc=function(){this._input&&(this._input.textContent=this._options[a(this,it)]?.textContent?.trim()??"")},lp=function(){this.style.setProperty("--_menu-width",`${this.clientWidth}px`)},Ba=new WeakMap,Ji=new WeakMap,Lc=function(e){e.stopPropagation()},Qi=new WeakMap,eo=new WeakMap,to=new WeakMap,cp=function(){return ne(this,null,function*(){a(this,Ki).observe(this),this._renderOptionRelatedElements(),yield this.updateComplete,a(this,Ir).attach(this),this._input.appendChild(a(this,an)),this._button.addEventListener("click",a(this,Ji)),this._menu.anchorElement=this._container,this._menu.addEventListener("click",c(this,j,Lc)),this._menu.addEventListener("open",a(this,Qi)),this._menu.addEventListener("opened",a(this,eo)),this._menu.addEventListener("close",a(this,to)),c(this,j,qa).call(this)})},dp=function(){a(this,Ki).disconnect(),a(this,an).remove(),a(this,Ir).detach(),h(this,Ar,!1),this._button.removeEventListener("click",a(this,Ji)),this._menu.removeEventListener("click",c(this,j,Lc)),this._menu.removeEventListener("open",a(this,Qi)),this._menu.removeEventListener("opened",a(this,eo)),this._menu.removeEventListener("close",a(this,to))},ro.styles=[he.styles,tp],ro);o([C("u-menu",!0)],Dr.prototype,"_menu",void 0);o([C(".button",!0)],Dr.prototype,"_button",void 0);o([C(".input",!0)],Dr.prototype,"_input",void 0);o([l({reflect:!0,attribute:"menu-positioning"})],Dr.prototype,"menuPositioning",void 0);o([E()],Dr.prototype,"value",null);o([E()],Dr.prototype,"selectedIndex",null);Dr=o([b("u-select")],Dr);var up=g`
  :host {
    display: block;
    padding-block: var(--u-list-padding, 8px);
  }
`;var no,hp=(no=class extends T{render(){return m`<slot></slot>`}},no.styles=up,no);hp=o([b("u-list")],hp);var pp=g`
  :host {
    display: block;
    --_min-height: var(--u-list-item-min-height, 56px);
  }

  :host([data-compact]) {
    --_min-height: var(--u-list-item-compact-min-height, 40px);
  }

  * {
    box-sizing: border-box;
  }

  .container {
    position: relative;
    display: flex;
    align-items: center;
    min-height: var(--_min-height);
    padding-block: var(--u-list-item-block-padding, 8px);
    padding-inline: var(--u-list-item-inline-padding, 16px);
    gap: var(--u-list-item-gap, 16px);
  }

  :host([no-inset]) .container {
    margin-inline: calc(var(--u-list-item-inline-padding, 16px) * -1);
  }

  .selectable {
    cursor: pointer;
  }

  :host([selected]) .container {
    background-color: var(--u-list-item-selected-container-color, var(--u-color-secondary-container, rgb(232, 222, 248)));
    color: var(--u-list-item-selected-label-color, var(--u-color-on-secondary-container, rgb(29, 25, 43)));
  }

  :host([selected]) .supporting-text {
    color: var(--u-list-item-selected-label-color, var(--u-color-on-secondary-container, rgb(29, 25, 43)));
  }

  slot:not([name]) {
    display: block;
    margin-inline-end: auto;
  }

  slot {
    flex-shrink: 0;
  }

  .content {
    flex: 1;
    min-width: 0;
  }

  .headline {
    font-family: var(--u-font-family, var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"));
    line-height: var(--u-list-item-headline-line-height, var(--u-body-l-line-height, 1.5rem));
    font-size: var(--u-list-item-headline-font-size, var(--u-body-l-font-size, 1rem));
    letter-spacing: var(--u-list-item-headline-letter-spacing, var(--u-body-l-letter-spacing, 0.03125rem));
    font-weight: var(--u-list-item-headline-font-weight, var(--u-body-l-font-weight, var(--u-font-weight-regular, 400)));
  }

  .supporting-text {
    font-family: var(--u-font-family, var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"));
    line-height: var(--u-list-item-supporting-text-line-height, var(--u-body-m-line-height, 1.25rem));
    font-size: var(--u-list-item-supporting-text-font-size, var(--u-body-m-font-size, 0.875rem));
    letter-spacing: var(--u-list-item-supporting-text-letter-spacing, var(--u-body-m-letter-spacing, 0.0178571429rem));
    font-weight: var(--u-list-item-supporting-text-font-weight, var(--u-body-m-font-weight, var(--u-font-weight-regular, 400)));
    color: var(--u-list-item-supporting-text-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
  }
`;var io,Na=(io=class extends Ie(T){constructor(){super(...arguments),this.selectable=!1,this.selected=!1,this.noInset=!1}render(){let t=m`<u-ripple></u-ripple>`,e=q({selectable:this.selectable,selected:this.selected});return m`
      <div class="container ${e}" part="container">
        ${this.selectable?t:k}
        <slot name="leading-icon" part="leading"></slot>
        <div class="content" part="content">
          <div class="headline" part="headline">
            <slot></slot>
          </div>
          <div class="supporting-text" part="supporting-text">
            <slot name="supporting-text"></slot>
          </div>
        </div>
        <slot name="trailing-icon" part="trailing"></slot>
      </div>
    `}},io.styles=pp,io);o([l({type:Boolean,reflect:!0})],Na.prototype,"selectable",void 0);o([l({type:Boolean,reflect:!0})],Na.prototype,"selected",void 0);o([l({type:Boolean,reflect:!0,attribute:"no-inset"})],Na.prototype,"noInset",void 0);Na=o([b("u-list-item")],Na);var mp=g`
  :host {
    display: block;
    height: 100vh;
  }

  .container {
    background-color: var(--u-modal-drawer-bg-color, var(--u-color-surface-container-low, rgb(247, 242, 250)));
    color: var(--u-drawer-text-color, var(--u-color-on-secondary-container, rgb(29, 25, 43)));
    height: 100%;
    overflow: auto;
    padding: var(--u-drawer-padding, var(--u-drawer-padding-block, 16px) var(--u-drawer-padding-inline, 28px));
  }

  @media (min-width: 1200px) {
    .container {
      background-color: var(--u-standard-drawer-bg-color, var(--u-color-body, var(--u-color-surface, rgb(254, 247, 255))));
    }
  }
`;var oo,fp=(oo=class extends T{render(){return m`
      <div class="container" part="container">
        <slot></slot>
      </div>
    `}},oo.styles=[$,mp],oo);fp=o([b("u-drawer")],fp);var gp=g`
  :host {
    display: block;
    --_drawer-item-height: var(--u-drawer-item-height, 56px);
    --_drawer-item-icon-size: var(--u-drawer-item-icon-size, 1.5rem);
    --_drawer-item-padding: var(--u-drawer-item-padding, 16px);
  }

  :host([data-compact]) {
    --_drawer-item-height: var(--u-drawer-item-compact-height, 44px);
  }

  .container {
    font-family: var(--u-font-family, var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"));
    line-height: var(--u-drawer-item-line-height, var(--u-label-l-line-height, 1.25rem));
    font-size: var(--u-drawer-item-font-size, var(--u-label-l-font-size, 0.875rem));
    letter-spacing: var(--u-drawer-item-letter-spacing, var(--u-label-l-letter-spacing, 0.0071428571rem));
    font-weight: var(--u-drawer-item-font-weight, var(--u-label-l-font-weight, var(--u-font-weight-medium, 500)));
    height: var(--_drawer-item-height);
    padding-inline: var(--_drawer-item-padding);
    margin-inline: calc(var(--_drawer-item-padding) * -1);
    border-radius: var(--u-drawer-item-shape-corner, var(--u-shape-corner-full, 9999px));
    color: var(--u-drawer-item-label-inactive-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
  }
  .container:not(.has-icon) .icon, .container:not(.has-badge) .badge {
    display: none;
  }

  :host(.active) .container,
  :host([active]) .container {
    background-color: var(--u-drawer-item-label-active-color, var(--u-color-secondary-container, rgb(232, 222, 248)));
    color: var(--u-drawer-item-label-active-color, var(--u-color-on-secondary-container, rgb(29, 25, 43)));
  }

  .icon {
    display: flex;
    width: 1em;
    height: 1em;
    align-items: center;
    justify-content: center;
    font-size: var(--_drawer-item-icon-size);
    line-height: 1em;
    margin-inline-end: var(--u-drawer-item-icon-margin, 16px);
  }

  .badge {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline-start: auto;
    padding-inline: var(--u-drawer-item-badge-padding, 12px 8px);
  }

  .content {
    justify-content: flex-start;
  }
`;var ao,zr=(ao=class extends Ie(J){constructor(){super(...arguments),this._hasIcon=!1,this._hasBadge=!1,this.active=!1,this.keepDrawerOpen=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-labelledby","label")}_getContainerClasses(){return Q(N({},super._getContainerClasses()),{"has-icon":this._hasIcon,"has-badge":this._hasBadge})}_renderContent(){return m`
      <div class="icon">
        <slot
          name="icon"
          aria-hidden="true"
          @slotchange="${this.handleIconSlotChange}"></slot>
      </div>
      <span class="label" id="text"><slot></slot></span>
      <span class="badge">
        <slot
          name="badge"
          @slotchange="${this.handleBadgeSlotChange}"></slot>
      </span>
    `}handleIconSlotChange(){this._hasIcon=this.assignedIcons.length>0}handleBadgeSlotChange(){this._hasBadge=this.assignedBadges.length>0}_handleClick(){if(this.keepDrawerOpen)return;let t=this.closest("u-side-navigation");if(t){t.toggleDrawer=!1;return}let e=this.closest("u-navigation-rail");e&&(e.toggleDrawer=!1)}},ao.styles=[J.styles,gp],ao);o([E()],zr.prototype,"_hasIcon",void 0);o([E()],zr.prototype,"_hasBadge",void 0);o([l({type:Boolean,reflect:!0})],zr.prototype,"active",void 0);o([l({type:Boolean,attribute:"keep-drawer-open",reflect:!0})],zr.prototype,"keepDrawerOpen",void 0);o([ee({slot:"icon",flatten:!0})],zr.prototype,"assignedIcons",void 0);o([ee({slot:"badge",flatten:!0})],zr.prototype,"assignedBadges",void 0);zr=o([b("u-drawer-item")],zr);var vp=g`
  :host {
    position: relative;
    display: inline-block;
    width: var(--_size);
    height: var(--_size);
    margin-inline: auto;
    --_size: var(--u-circular-progress-size, 3rem);
  }

  .circular {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
    transform-origin: center;
  }
  .circular.indeterminate {
    position: relative;
    animation: rotate 2s linear infinite;
  }
  .circular:not(.indeterminate) .path {
    transition: stroke-dashoffset 200ms linear;
  }

  .path {
    stroke-linecap: round;
    stroke: var(--u-circular-progress-color, var(--u-color-primary, rgb(103, 80, 164)));
  }

  .track {
    position: absolute;
    inset: 0;
  }
  .track .path {
    stroke: var(--u-circular-progress-track-color, var(--u-color-secondary-container, rgb(232, 222, 248)));
  }

  .indeterminate .path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite;
  }

  .on-going {
    transform: rotate(-80deg);
  }
  .on-going.track {
    transform: rotate(-100deg);
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
    }
  }
`;var so=255,Pr,bp,yp,xp,lo,Ks=(lo=class extends T{constructor(){super(...arguments);p(this,Pr);this.max=1}render(){return this.value===void 0?c(this,Pr,yp).call(this):c(this,Pr,xp).call(this)}},Pr=new WeakSet,bp=function(e){return st`
      <svg class="circular ${e}" viewBox="0 0 50 50">
        <circle
          class="path"
          cx="50%"
          cy="50%"
          r="20"
          fill="none"
          stroke-width="4"
          stroke-miterlimit="10" />
      </svg>`},yp=function(){return c(this,Pr,bp).call(this,"indeterminate")},xp=function(){let e=this.value/this.max,n=e===0||e===1?0:.10625;e=Math.floor(e*100)/100;let i=so-so*e,s=so-so*Math.max(1-n-e,0)*-1;return st`
      <svg class="circular on-going" viewBox="0 0 50 50">
        <circle
          class="path"
          cx="50%"
          cy="50%"
          r="20"
          fill="none"
          stroke-width="4"
          stroke-miterlimit="10"
          stroke-dasharray=${`${so}%`} 
          stroke-dashoffset=${`${i}%`} />
      </svg>
      <svg class="circular track on-going" viewBox="0 0 50 50">
        <circle
          class="path"
          cx="50%"
          cy="50%"
          r="20"
          fill="none"
          stroke-width="4"
          stroke-miterlimit="10"
          stroke-dasharray=${`${so}%`}
          stroke-dashoffset=${`${s}%`}/>
      </svg>
    `},lo.styles=[vp],lo);o([l({type:Number})],Ks.prototype,"value",void 0);o([l({type:Number})],Ks.prototype,"max",void 0);Ks=o([b("u-circular-progress")],Ks);var wp=g`
  :host {
    --_border-radius: var(--u-progress-bar-border-radius, var(--u-shape-corner-full, 9999px));
    --_height: var(--u-progress-bar-height, 4px);
  }

  :host,
  .determinate,
  .indeterminate {
    overflow: hidden;
    border-radius: var(--_border-radius);
  }

  .determinate,
  .indeterminate {
    display: flex;
    gap: 4px;
  }

  .indeterminate {
    flex: 1;
    margin-inline: -8px;
    border-radius: var(--_border-radius);
  }

  .determinate {
    margin-inline-end: -4px;
  }
  .determinate .bar {
    transition: flex-basis 200ms linear;
  }

  .last {
    flex-shrink: 1;
    flex-basis: 100%;
    animation: last 2.1s infinite linear;
  }

  .slow {
    animation: slow 2.1s infinite linear;
  }

  .middle {
    animation: middle 2.1s infinite linear;
  }

  .fast {
    animation: fast 2.1s infinite linear;
  }

  .first {
    animation: first 2.1s infinite linear;
  }

  .bar {
    height: var(--_height);
    border-radius: var(--_border-radius);
    background: var(--u-progress-bar-color, var(--u-color-primary, rgb(103, 80, 164)));
  }

  .track {
    background: var(--u-progress-bar-track-color, var(--u-color-secondary-container, rgb(232, 222, 248)));
    flex-shrink: 1;
  }

  @keyframes slow {
    0% {
      flex-basis: 0;
    }
    10% {
      flex-basis: 50%;
    }
    20% {
      flex-basis: 100%;
    }
    30% {
      flex-basis: 0;
    }
  }
  @keyframes last {
    0% {
      flex-basis: 100%;
    }
    10% {
      flex-basis: 50%;
    }
    20% {
      flex-basis: 0;
    }
    100% {
      flex-basis: 0;
    }
  }
  @keyframes middle {
    10% {
      flex-basis: 0;
    }
    20% {
      flex-basis: 100%;
    }
    35% {
      flex-basis: 100%;
    }
    45% {
      flex-basis: 0;
    }
  }
  @keyframes fast {
    0% {
      flex-basis: 0;
    }
    25% {
      flex-basis: 0;
    }
    35% {
      flex-basis: 100%;
    }
    45% {
      flex-basis: 100%;
    }
    55% {
      flex-basis: 0;
    }
  }
  @keyframes first {
    35% {
      flex-basis: 0;
    }
    45% {
      flex-basis: 100%;
    }
    100% {
      flex-basis: 100%;
    }
  }
  @keyframes fast-bar-pre {
    0% {
      flex-basis: 0;
    }
    60% {
      flex-basis: 0;
    }
    90% {
      flex-basis: 100%;
    }
    100% {
      flex-basis: 100%;
    }
  }
`;var uo,_p,Cp,co,Zs=(co=class extends T{constructor(){super(...arguments);p(this,uo);this.max=1}render(){return this.value===void 0?c(this,uo,_p).call(this):c(this,uo,Cp).call(this)}},uo=new WeakSet,_p=function(){return m`
      <div class="indeterminate">
        <div class="bar track first"></div>
        <div class="bar active fast"></div>
        <div class="bar track middle"></div>
        <div class="bar active slow"></div>
        <div class="bar track last"></div>
      </div>
    `},Cp=function(){let e=this.value/this.max,n=Math.floor(e*1e3)/10,i=100-n;return m`
      <div class="determinate">
        <div class="bar active" style="flex-basis: ${n}%"></div>
        <div class="bar track" style="flex-basis: ${i}%"></div>
      </div>
    `},co.styles=[wp],co);o([l({type:Number})],Zs.prototype,"value",void 0);o([l({type:Number})],Zs.prototype,"max",void 0);Zs=o([b("u-progress-bar")],Zs);var kp=g`
  :host {
    position: relative;
    display: block;
    --_active-color: var(--u-tab-active-color, var(--u-color-primary, rgb(103, 80, 164)));
    --_active-label-color: var(--u-tab-active-label-color, var(--u-color-primary, rgb(103, 80, 164)));
    overflow: hidden;
  }

  .container {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: var(--u-tab-bar-min-height, 48px);
    overflow: auto;
    scroll-padding-inline: 128px;
    scrollbar-width: none;
  }
  .container::-webkit-scrollbar {
    display: none;
  }

  .scroll-indicator {
    --u-elevation-level: 2;
    cursor: pointer;
    position: absolute;
    display: none;
    align-items: center;
    justify-content: center;
    top: 0;
    width: var(--u-tab-bar-scroll-indicator-size, 32px);
    background-color: var(--u-scroll-indicator-bg-color, var(--u-current-bg-color, var(--u-color-surface, rgb(254, 247, 255))));
    font-size: 1.5rem;
    height: 100%;
    z-index: 1;
  }
  @media (hover: hover) {
    :host(:hover) .scroll-indicator.active {
      display: flex;
    }
  }

  .scroll-left {
    left: 0;
  }

  .scroll-right {
    right: 0;
  }

  .tab-indicator {
    position: absolute;
    background-color: var(--_active-color);
    height: 3px;
    bottom: 0;
    transition: inset 200ms ease-out, width 200ms ease-out;
  }

  .container:not(.secondary) .tab-indicator {
    border-radius: var(--u-tab-bar-primary-border-radius, 9999px 9999px 0 0);
  }

  .secondary {
    --_active-label-color: var(--u-tab-secondary-active-label-color, var(--u-color-on-surface, rgb(29, 27, 32)));
    --_tab-content-direction: row;
    --_tab-content-gap: 8px;
    --u-tab-with-icon-height: var(--u-tab-secondary-with-icon-height, 48px);
  }
`;var Ep=g`
  :host {
    flex: 0.5;
  }

  .container {
    --u-focus-ring-outline-offset: -4px;
    --_tab-height: var(--u-tab-height, 48px);
    display: block;
    height: 100%;
    padding-inline: var(--u-tab-padding, 16px);
  }

  .tab-content {
    display: flex;
    flex-direction: var(--_tab-content-direction, column);
    align-items: center;
    justify-content: center;
    max-width: 100%;
    height: var(--_tab-height);
    gap: var(--_tab-content-gap, 0);
  }

  .has-icon {
    --_tab-height: var(--u-tab-with-icon-height, 64px);
  }

  :host([data-compact]) .container {
    --_tab-height: var(--u-tab-compact-height, 40px);
  }

  :host([data-compact]) .has-icon {
    --_tab-height: var(--u-tab-compact-with-icon-height, 48px);
  }

  .force-focus-ring .button,
  .button:focus-visible {
    border-radius: var(--u-spacing-small, 8px);
  }

  .label {
    font-family: var(--u-font-family, var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"));
    line-height: var(--u-tab-label-line-height, var(--u-title-s-line-height, 1.25rem));
    font-size: var(--u-tab-label-font-size, var(--u-title-s-font-size, 0.875rem));
    letter-spacing: var(--u-tab-label-letter-spacing, var(--u-title-s-letter-spacing, 0.0071428571rem));
    font-weight: var(--u-tab-label-font-weight, var(--u-title-s-font-weight, var(--u-font-weight-medium, 500)));
    color: var(--u-tab-label-text-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
    max-width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--u-tab-label-text-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
  }

  .active .icon,
  .active .label {
    color: var(--_active-label-color);
  }
`;var Fa,Js,Tp,ho,ln=(ho=class extends Ie(J){constructor(){super();p(this,Js);p(this,Fa);this._bar=null,this.innerRole="tab",h(this,Fa,new ResizeObserver(()=>{this.active&&this._bar?._updateTabIndicator()})),this.hasIcon=!1,a(this,Fa).observe(this)}get active(){return this._bar?.activeTab===this}set active(e){if(this._bar){if(e){this._bar.activeTab=this;return}this._bar.activeTabIndex=0}}getAriaSelected(){return this.active}get _paddingInline(){return getComputedStyle(this._container).paddingInline}_renderContent(){let e={active:this.active,"has-icon":this.hasIcon};return m`
      <div class="tab-content ${q(e)}">
        <div class="icon" part="icon">
          <slot name="icon" @slotchange=${c(this,Js,Tp)}></slot>
        </div>
        <div class="label" part="label" id="text">
          <slot></slot>
        </div>
      </div>
    `}connectedCallback(){super.connectedCallback(),this._bar?._updateTabIndicator(),this._bar?._setScrollIndicatorsActive()}disconnectedCallback(){super.disconnectedCallback(),this._bar&&(this._bar.activeTab===this&&(this._bar.activeTabIndex=0),this._bar._updateTabIndicator(),this._bar._setScrollIndicatorsActive(),this._bar=null)}_handleClick(e){super._handleClick(e),!(!this._bar||!this._bar.dispatchEvent(new Event("changing",{bubbles:!0,cancelable:!0})))&&(this._bar.activeTab=this,this._bar.dispatchEvent(new Event("change",{bubbles:!0})))}},Fa=new WeakMap,Js=new WeakSet,Tp=function(e){let n=e.target;this.hasIcon=!!n.assignedElements({flatten:!0}).length},ho.styles=[J.styles,Ep],ho);o([E()],ln.prototype,"active",null);o([l({type:Boolean})],ln.prototype,"hasIcon",void 0);o([C(".container")],ln.prototype,"_container",void 0);ln=o([b("u-tab")],ln);var Et,ir,Ua,Ha,cn,Mc,Va,ja,Wa,Sp,po,Lr=(po=class extends T{constructor(){super();p(this,cn);p(this,Et);p(this,ir);p(this,Ua);p(this,Ha);p(this,Va);p(this,ja);p(this,Wa);h(this,Et,[]),h(this,ir,null),h(this,Ua,new ResizeObserver(()=>{this._setScrollIndicatorsActive(),this._updateTabIndicator()})),this.variant="primary",h(this,Ha,()=>{c(this,cn,Mc).call(this)}),h(this,Va,()=>{this._setScrollIndicatorsActive()}),h(this,ja,()=>{this._container.scrollBy({left:this._container.offsetWidth/-2,behavior:"smooth"})}),h(this,Wa,()=>{this._container.scrollBy({left:this._container.offsetWidth/2,behavior:"smooth"})}),a(this,Ua).observe(this)}get activeTabIndex(){return this.activeTab?a(this,Et).indexOf(this.activeTab):-1}set activeTabIndex(e){this.activeTab=a(this,Et)[e]}get activeTab(){return a(this,ir)}set activeTab(e){if(!a(this,Et).length){h(this,ir,null),this._updateTabIndicator();return}if(!e||a(this,ir)===e||!a(this,Et).includes(e))return;let n=a(this,ir);h(this,ir,e),n?.requestUpdate(),e.scrollIntoView({block:"nearest",behavior:"smooth"}),e.requestUpdate(),this._updateTabIndicator()}attributeChangedCallback(e,n,i){super.attributeChangedCallback(e,n,i),e==="variant"&&this._updateTabIndicator()}connectedCallback(){super.connectedCallback(),c(this,cn,Sp).call(this)}render(){let e={secondary:this.variant==="secondary"};return m`
      <div
        class="scroll-indicator scroll-left active"
        @click=${a(this,ja)}>
        <u-elevation></u-elevation>
        <u-ripple></u-ripple>
        <slot name="scroll-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 -960 960 960"
            width="1em"
            fill="currentColor">
            <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
          </svg>
        </slot>
      </div>
      <div
        class="container ${q(e)}"
        role="tablist"
        @scrollend=${a(this,Va)}>
        <slot @slotchange=${a(this,Ha)}></slot>
        <div class="tab-indicator"></div>
      </div>
      <div
        class="scroll-indicator scroll-right active"
        @click=${a(this,Wa)}>
        <u-elevation></u-elevation>
        <u-ripple></u-ripple>
        <slot name="scroll-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 -960 960 960"
            width="1em"
            fill="currentColor">
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </slot>
      </div>
    `}_updateTabIndicator(){if(!this._tabIndicator)return;if(!this.activeTab){this._tabIndicator.style.left="0",this._tabIndicator.style.width="0";return}let e=this.variant==="primary"?parseInt(this.activeTab._paddingInline,10):0;this._tabIndicator.style.left=`${this.activeTab.offsetLeft+e}px`,this._tabIndicator.style.width=`${this.activeTab.offsetWidth-e*2}px`}_setScrollIndicatorsActive(){let n=this._container.scrollWidth-this._container.offsetWidth,s=getComputedStyle(this._container).direction==="rtl"?this._container.scrollLeft+n:this._container.scrollLeft;s-1<=0?(this._container.scrollBy(-1,0),this._scrollLeft.classList.remove("active")):this._scrollLeft.classList.add("active"),s>=n-1?(this._container.scrollBy(1,0),this._scrollRight.classList.remove("active")):this._scrollRight.classList.add("active")}},Et=new WeakMap,ir=new WeakMap,Ua=new WeakMap,Ha=new WeakMap,cn=new WeakSet,Mc=function(){let e=this.assignedElements.filter(n=>n instanceof ln);if(e.length){h(this,Et,e);for(let n of e)n._bar=this;this.activeTabIndex<0?this.activeTab=a(this,Et).find(n=>n.hasAttribute("active"))??a(this,Et)[0]:(this.activeTab?.requestUpdate(),this._updateTabIndicator())}},Va=new WeakMap,ja=new WeakMap,Wa=new WeakMap,Sp=function(){return ne(this,null,function*(){yield this.updateComplete,c(this,cn,Mc).call(this),this._setScrollIndicatorsActive()})},po.styles=[$,kp],po);o([l({reflect:!0})],Lr.prototype,"variant",void 0);o([C(".scroll-left")],Lr.prototype,"_scrollLeft",void 0);o([C(".scroll-right")],Lr.prototype,"_scrollRight",void 0);o([C(".container")],Lr.prototype,"_container",void 0);o([C(".tab-indicator")],Lr.prototype,"_tabIndicator",void 0);o([ee({flatten:!0})],Lr.prototype,"assignedElements",void 0);Lr=o([b("u-tab-bar")],Lr);var Ip=g`
  :host {
    display: inline-block;
  }
`;var of=r=>r.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),Ya,Xa,mo,Ga=(mo=class extends T{constructor(){super(...arguments);p(this,Ya);p(this,Xa)}get result(){return a(this,Ya)}set result(e){h(this,Ya,e),this.setParts()}get term(){return a(this,Xa)}set term(e){h(this,Xa,e),this.setParts()}render(){return this.parts?this.parts.map((e,n)=>n%2?m`<strong>${e}</strong>`:m`<span>${e}</span>`):m`<span></span>`}setParts(){let e=this.result||"",n=Ft(e).toLowerCase(),i=Ft(this.term||"").toLowerCase(),s=0;if(i.length<=0){this.parts=[e];return}this.parts=n.split(new RegExp(`(${of(i)})`)).map(u=>{let f=e.substring(s,s+u.length);return s+=u.length,f})}},Ya=new WeakMap,Xa=new WeakMap,mo.styles=Ip,mo);o([E()],Ga.prototype,"parts",void 0);o([l()],Ga.prototype,"result",null);o([l()],Ga.prototype,"term",null);Ga=o([b("u-highlight")],Ga);var Ap=g`
  :host {
    display: block;
    --u-menu-item-label-font-weight: var(--u-typeahead-item-font-weight, var(--u-font-weight-regular, 400));
  }

  :host([fit-target]) u-menu::part(menu) {
    width: var(--_menu-width);
    max-width: none;
  }
`;var $c=class extends T{constructor(){super(...arguments),this.content=null}render(){if(this.content instanceof HTMLElement||typeof this.content=="string")return m`${this.content}`;let t=document.createElement("div");return Sn(this.content,t),m`${t}`}};o([l()],$c.prototype,"content",void 0);$c=o([b("u-typeahead-template-render")],$c);var Ka,Mr,W,$r,fo,dn,bt,un,go,hn,B,Qs,el,Dp,Rc,vo,bo,zp,Oc,Pp,qc,Lp,Bc,Nc,Mp,tl,$p,Rp,Op,pn,Re=(pn=class extends T{constructor(){super();p(this,B);p(this,Ka);p(this,Mr);p(this,W);p(this,$r);p(this,fo);p(this,dn);p(this,bt);p(this,un);p(this,go);p(this,hn);p(this,vo);p(this,bo);h(this,Mr,!1),h(this,W,null),h(this,$r,null),h(this,fo,null),h(this,dn,new Hi(this)),h(this,bt,""),h(this,un,null),this.debounce=300,this.limit=10,this.minLength=2,this.openOnFocus=!1,this.editable=!1,this.autocomplete="off",this.spellcheck=!1,this.fitTarget=!1,this.positioning="relative",h(this,vo,()=>ne(this,null,function*(){this.openOnFocus&&(yield c(this,B,qc).call(this))})),h(this,bo,()=>{a(this,un)&&clearTimeout(a(this,un)),c(this,B,Oc).call(this,this.editable?c(this,B,Nc).call(this):null,!0),h(this,un,setTimeout(()=>ne(this,null,function*(){return yield c(this,B,qc).call(this,!0)}),this.debounce))}),h(this,hn,this.attachInternals())}get form(){return a(this,hn).form}get value(){return a(this,go)}set value(e){h(this,go,e),a(this,hn).setFormValue(e),a(this,Mr)&&c(this,B,Bc).call(this)}focus(){a(this,W)?.focus()}clear(){a(this,W)&&(h(this,bt,""),c(this,B,Mp).call(this,""))}get targetId(){return a(this,Ka)}set targetId(e){h(this,Ka,e),a(this,Mr)&&c(this,B,Qs).call(this)}get _menuItems(){return Array.from(this.menuItems)}attributeChangedCallback(e,n,i){super.attributeChangedCallback(e,n,i),a(this,W)&&(e==="autocomplete"&&(a(this,W).autocomplete=i),e==="spellcheck"&&(a(this,W).spellcheck=i==="true"))}connectedCallback(){super.connectedCallback(),h(this,Mr,!0),c(this,B,Qs).call(this),h(this,$r,new MutationObserver(()=>c(this,B,Qs).call(this))),a(this,$r).observe(document,{attributes:!0,childList:!0})}disconnectedCallback(){super.disconnectedCallback(),h(this,Mr,!1),c(this,B,el).call(this),h(this,W,null),a(this,$r).disconnect(),h(this,$r,null)}render(){return this.results?.length?(setTimeout(()=>{c(this,B,tl).call(this),this._menu.open=!0,a(this,dn).focusMenu(this._menuItems[0],0)}),m`
      <u-menu manualFocus manualClose anchor-corner="auto-start" positioning="${this.positioning}">
        ${this.results.map(e=>{let n=this.template?c(this,B,Pp).call(this,e.value):m`
                <u-highlight .term=${a(this,bt)} .result=${e.label}></u-highlight>
              `;return m`
            <u-menu-item
              @mousedown=${c(this,B,Dp)}
              @click=${c(this,B,zp).call(this,e)}
              tabindex="-1">
              ${n}
            </u-menu-item>
          `})}
      </u-menu>
    `):m``}},Ka=new WeakMap,Mr=new WeakMap,W=new WeakMap,$r=new WeakMap,fo=new WeakMap,dn=new WeakMap,bt=new WeakMap,un=new WeakMap,go=new WeakMap,hn=new WeakMap,B=new WeakSet,Qs=function(){if(!this.targetId){c(this,B,el).call(this),h(this,W,null),c(this,B,tl).call(this);return}let e=document.getElementById(this.targetId);e!==a(this,W)&&(c(this,B,el).call(this),e&&(h(this,W,e),c(this,B,tl).call(this),e.role="combobox",e.autocomplete=this.autocomplete,e.spellcheck=this.spellcheck,e.autocapitalize="off",e.addEventListener("click",c(this,B,Rc)),e.addEventListener("input",a(this,bo)),a(this,dn).attach(e),e.addEventListener("focus",a(this,vo)),h(this,fo,new ResizeObserver(()=>c(this,B,Op).call(this))),a(this,fo).observe(e),this.value&&c(this,B,Bc).call(this)))},el=function(){a(this,W)?.removeEventListener("click",c(this,B,Rc)),a(this,W)?.removeEventListener("input",a(this,bo)),a(this,dn).detach(),a(this,W)?.removeEventListener("focus",a(this,vo))},Dp=function(e){e.preventDefault()},Rc=function(e){e.stopPropagation()},vo=new WeakMap,bo=new WeakMap,zp=function(e){return()=>{let n=new CustomEvent("selected",{cancelable:!0,detail:e.value});this.dispatchEvent(n),!n.defaultPrevented&&c(this,B,Oc).call(this,e.value)}},Oc=function(e,n=!1){n?(h(this,go,e),a(this,hn).setFormValue(e)):this.value=e,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0}))},Pp=function(e){let n=this.template(a(this,bt),e);return m`${n}`},qc=function(e=!1){return ne(this,null,function*(){let n=c(this,B,Nc).call(this),i=Ft(n).toLowerCase();if(!(e&&i===a(this,bt)&&this._menu?.open===!0)){if(h(this,bt,i),i.length<this.minLength){this.results=[];return}this.results=yield c(this,B,Lp).call(this),this.results=this.results.slice(0,this.limit||this.results.length)}})},Lp=function(){return ne(this,null,function*(){if(!this.source)return[];let e,n=!1;if(this.source instanceof Array)e=this.source,n=!0;else{let s=this.source;e=yield s(a(this,bt))}let i=e.map(s=>({label:this.formatter?this.formatter(s):s.toString(),value:s}));return n?i.filter(s=>Ft(s.label).toLowerCase().includes(a(this,bt))):i})},Bc=function(){if(!a(this,W))return;let e=c(this,B,Rp).call(this);if(h(this,bt,Ft(e)?.toLowerCase()),a(this,W).tagName==="U-TEXT-FIELD"){a(this,W).value=e;return}if(a(this,W).input){a(this,W).input.value=e;return}a(this,W).value=e},Nc=function(){return a(this,W).input?.value??a(this,W).value},Mp=function(e){let n=a(this,W)?.input??a(this,W);n&&(n.value=e)},tl=function(){this._menu&&(this._menu.anchorElement=c(this,B,$p).call(this))},$p=function(){return a(this,W)?a(this,W).tagName==="U-CHIP-FIELD"?a(this,W).input:a(this,W).tagName==="U-SEARCH"?a(this,W).input:a(this,W).tagName==="U-TEXT-FIELD"?a(this,W)._container:a(this,W):null},Rp=function(){return this.value?this.formatter?this.formatter(this.value):this.value:""},Op=function(){if(!this.fitTarget||!a(this,W)){this.style.removeProperty("--_menu-width");return}this.style.setProperty("--_menu-width",`${a(this,W).clientWidth}px`)},pn.formAssociated=!0,pn.styles=Ap,pn);o([E()],Re.prototype,"results",void 0);o([E()],Re.prototype,"source",void 0);o([l({type:Number,reflect:!0})],Re.prototype,"debounce",void 0);o([l({type:Number,reflect:!0})],Re.prototype,"limit",void 0);o([l({type:Number,reflect:!0})],Re.prototype,"minLength",void 0);o([l({type:Boolean,attribute:"open-on-focus",reflect:!0})],Re.prototype,"openOnFocus",void 0);o([l({type:Boolean,reflect:!0})],Re.prototype,"editable",void 0);o([l({reflect:!0})],Re.prototype,"autocomplete",void 0);o([l({type:Boolean,reflect:!0})],Re.prototype,"spellcheck",void 0);o([l({type:Boolean,attribute:"fit-target",reflect:!0})],Re.prototype,"fitTarget",void 0);o([l({reflect:!0})],Re.prototype,"positioning",void 0);o([l({reflect:!0,attribute:"target-id"})],Re.prototype,"targetId",null);o([C("u-menu")],Re.prototype,"_menu",void 0);o([_d("u-menu-item")],Re.prototype,"menuItems",void 0);Re=o([b("u-typeahead")],Re);var qp=g`
  .container {
    --_badge-size: var(--u-badge-small-size, 6px);
    font-family: var(--u-font-family, var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"));
    line-height: var(--u-badge-line-height, var(--u-label-s-line-height, 1rem));
    font-size: var(--u-badge-font-size, var(--u-label-s-font-size, 0.6875rem));
    letter-spacing: var(--u-badge-letter-spacing, var(--u-label-s-letter-spacing, 0.0454545455rem));
    font-weight: var(--u-badge-font-weight, var(--u-label-s-font-weight, var(--u-font-weight-medium, 500)));
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: var(--_badge-size);
    height: var(--_badge-size);
    line-height: var(--_badge-size);
    background-color: var(--u-badge-color, var(--u-color-error, rgb(179, 38, 30)));
    color: var(--u-badge-color, var(--u-color-on-error, rgb(255, 255, 255)));
    border-radius: calc(var(--_badge-size) / 2);
    box-sizing: border-box;
  }
  .container:not(.static) {
    --_badge-inline-start: calc(100% - var(--_badge-size));
    position: absolute;
    top: 0;
    inset-inline-start: var(--_badge-inline-start);
  }
  .container:not(.empty) {
    --_badge-size: var(--u-badge-large-size, 16px);
    top: var(--u-badge-top-offset, -2px);
    inset-inline-start: calc(var(--_badge-inline-start) - var(--u-badge-inline-offset, -4px));
    padding-inline: var(--u-badge-padding, 4px);
  }
`;var nl,Bp,yo,rl=(yo=class extends T{constructor(){super(...arguments);p(this,nl);this.static=!1,this._empty=!0}render(){let e=q({static:this.static,empty:this._empty});return m`
      <div class="container ${e}" part="container">
        <slot @slotchange=${c(this,nl,Bp)}></slot>
      </div>
    `}},nl=new WeakSet,Bp=function(e){let n=e.target;this._empty=!!n.assignedElements().length},yo.styles=qp,yo);o([l({type:Boolean,reflect:!0})],rl.prototype,"static",void 0);o([E()],rl.prototype,"_empty",void 0);rl=o([b("u-badge")],rl);var Np=g`
  :host(:not([disabled])) .container {
    cursor: pointer;
  }

  .button {
    position: absolute;
    inset: 0;
    margin: 0;
    padding: 0;
    background: transparent;
    border: none;
    appearance: none;
  }
`;var xo,Za=(xo=class extends he{constructor(){super(...arguments),this._value=""}get value(){return this._value}set value(t){this._value=t,this.empty=!t,this.elementInternals.setFormValue(t)}renderControl(){return Gs`
      <button 
         class="button"
         aria-expanded="false"
         aria-owns="select"
         ?disabled=${this.disabled}></button>
      <div class="input">
        <slot>${this.value}</slot>
      </div>
      <u-ripple ?disabled=${this.disabled}></u-ripple>`}renderAfterContent(){return m`
      <u-menu>
        <slot></slot>
      </u-menu>
    `}},xo.styles=[he.styles,Np],xo);o([l()],Za.prototype,"value",null);o([C(".button",!0)],Za.prototype,"_button",void 0);o([C(".input",!0)],Za.prototype,"_input",void 0);Za=o([b("u-button-field")],Za);var Fp=g`
  .calendar-item u-ripple {
    display: none;
  }

  .week-row {
    position: absolute;
    left: 0;
    width: 336px;
    height: 48px;
    cursor: pointer;
  }
  .week-row u-ripple {
    display: block;
    top: calc((48px - var(--_date-size)) / 2);
    bottom: auto;
    height: var(--_date-size);
    --u-ripple-border-radius: 9999px;
    --u-ripple-hover-color: transparent;
    --u-ripple-pressed-color: var(--u-color-on-secondary-container, rgb(29, 25, 43));
  }

  .week::before, .week-hover::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    margin-top: calc(var(--_date-size) * -0.5);
    height: var(--_date-size);
    z-index: -1;
    pointer-events: none;
  }

  .week-start::before, .week-hover-start::before {
    border-top-left-radius: 9999px;
    border-bottom-left-radius: 9999px;
  }

  .week-end::before, .week-hover-end::before {
    border-top-right-radius: 9999px;
    border-bottom-right-radius: 9999px;
  }

  .week-hover::before {
    background: var(--u-calendar-week-hover-background-color, var(--u-color-surface-container-highest, rgb(230, 224, 233)));
  }

  .week::before {
    background: var(--u-calendar-week-selected-background-color, var(--u-color-secondary-container, rgb(232, 222, 248)));
  }
`;var af=6,Tt,Fc,Uc,Hc,wo,Ja=(wo=class extends de{constructor(){super();p(this,Tt);this.weekStartValue=null,this._hoverWeekStart=null,this.dateOutsideMonth=!0}get value(){return this.valueType==="date"?this.weekStartValue?new Date(this.weekStartValue):null:this._getDateString(this.weekStartValue)}set value(e){let n=this._getDateFromValue(e);this.weekStartValue=n?c(this,Tt,Uc).call(this,n):null}_selectDate(e){this.weekStartValue=c(this,Tt,Uc).call(this,e),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0}))}_renderGridOverlay(){return m`
      ${Array.from({length:af},(e,n)=>m`
        <div
          class="week-row"
          style="top: ${(n+1)*48}px"
          @mouseenter=${()=>{this._hoverWeekStart=c(this,Tt,Hc).call(this,n)}}
          @mouseleave=${()=>{this._hoverWeekStart=null}}
          @click=${()=>this._selectDate(c(this,Tt,Hc).call(this,n))}>
          <u-ripple></u-ripple>
        </div>
      `)}
    `}_getSelectedDateClasses(e){let n={};return c(this,Tt,Fc).call(this,n,e,this.weekStartValue,"week"),this._hoverWeekStart&&this.weekStartValue?.getTime()!==this._hoverWeekStart.getTime()&&c(this,Tt,Fc).call(this,n,e,this._hoverWeekStart,"week-hover"),n}},Tt=new WeakSet,Fc=function(e,n,i,s){if(!i)return;let u=new Date(i.getFullYear(),i.getMonth(),i.getDate()+6);n<i||n>u||(e[s]=!0,n.getTime()===i.getTime()&&(e[`${s}-start`]=!0),n.getTime()===u.getTime()&&(e[`${s}-end`]=!0))},Uc=function(e){let n=(e.getDay()-this._firstDayOfWeek+7)%7;return new Date(e.getFullYear(),e.getMonth(),e.getDate()-n)},Hc=function(e){let i=(new Date(this.year,this.month,1).getDay()-this._firstDayOfWeek+7)%7;return new Date(this.year,this.month,1-i+e*7)},wo.styles=[Fp,de.styles],wo);o([E()],Ja.prototype,"weekStartValue",void 0);o([E()],Ja.prototype,"_hoverWeekStart",void 0);o([l()],Ja.prototype,"value",null);Ja=o([b("u-week-calendar")],Ja);var Up=g`
  :host {
    display: block;
  }

  :host(:not([has-leading-icon])) .leading-icon {
    display: none;
  }

  :host(:not([has-trailing-icon])) .trailing-icon {
    display: none;
  }

  .icon {
    display: inline-flex;
    align-items: center;
    gap: var(--u-search-icons-gap, 8px);
  }

  slot[name=leading-icon]::slotted(u-icon-button) {
    color: inherit;
  }

  :host([position=absolute]) .container {
    position: absolute;
  }

  :host([position=fixed]) .container {
    position: fixed;
    inset-inline: 0;
    inset-block-start: 0;
    inset-inline-start: var(--u-app-bar-offset, 0);
  }

  :host([position=absolute]),
  :host([position=fixed]) {
    padding-top: var(--_content-height);
  }
  :host([position=absolute]) .container,
  :host([position=fixed]) .container {
    z-index: var(--u-fixed-search-z-index, 1010);
  }

  .input {
    font-family: var(--u-font-family, var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"));
    line-height: var(--u-search-input-line-height, var(--u-body-l-line-height, 1.5rem));
    font-size: var(--u-search-input-font-size, var(--u-body-l-font-size, 1rem));
    letter-spacing: var(--u-search-input-letter-spacing, var(--u-body-l-letter-spacing, 0.03125rem));
    font-weight: var(--u-search-input-font-weight, var(--u-body-l-font-weight, var(--u-font-weight-regular, 400)));
    margin: 0;
    margin-inline: var(--u-search-placeholder-margin, 16px);
    display: block;
    width: 100%;
    color: var(--u-search-input-text-color, var(--u-color-on-surface, rgb(29, 27, 32)));
    padding: 0;
    appearance: none;
    background: transparent;
    border: none;
    outline: 0 !important;
    caret-color: var(--u-color-primary, rgb(103, 80, 164));
  }
  .input::placeholder {
    color: var(--u-search-input-placeholder-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
  }
  :host([has-leading-icon]) .input {
    margin-inline-start: 0;
  }

  .content {
    display: flex;
    align-items: center;
    background-color: var(--u-search-container-color, var(--u-color-surface-container-high, rgb(236, 230, 240)));
    border-radius: var(--u-search-border-radius, 9999px);
    height: var(--u-search-height, 56px);
  }

  .inner-container {
    padding-inline: var(--u-layout-margin-inline, var(--u-layout-margin));
    padding-block: var(--u-search-margin-block, 8px);
    width: 100%;
  }

  .inner-container {
    max-width: var(--u-container-width, 992px);
    margin-inline: auto;
  }

  :host([position=static]) .inner-container {
    padding: 0;
    max-width: none;
    margin-inline: 0;
  }

  .leading-icon {
    margin-inline: var(--u-search-leading-icon-margin, 8px);
  }

  .trailing-icon {
    padding-inline: var(--u-search-trailing-icon-margin, 8px);
    margin-inline-start: auto;
  }
`;var _o,or,Hp,Vp,Vc,Co,il=(Co=class extends $e{constructor(){super(...arguments);p(this,or);p(this,_o);this.position="fixed",h(this,_o,null)}renderControl(){return m``}render(){let e=q({"inner-container":!0});return m`<div class="container">
      <div class="${e}">
        <div class="content">
          <div class="icon leading-icon" part="icon leading">
            <slot name="leading-icon" @slotchange="${c(this,or,Hp)}"></slot>
          </div>
          <input
            class="input"
            part="input"
            id=${this.id||k}
            spellcheck=${this.spellcheck}
            autocomplete=${this.autocomplete??k}
            autocapitalize=${this.autocapitalize||k}
            ?autofocus=${this.autofocus}
            role=${this.role??k}
            maxlength=${this.maxlength??k}
            .placeholder=${this.placeholder??k}
            .value=${tt(this._value)}
            @input=${this._handleInput}
            @keydown=${this._handleKeyDown} />
    
          <div class="icon trailing-icon" part="icon trailing">
            <slot name="trailing-icon" @slotchange="${c(this,or,Vp)}"></slot>
          </div>
        </div>
      </div>
    </div>`}firstUpdated(e){super.firstUpdated(e),h(this,_o,new ResizeObserver(()=>c(this,or,Vc).call(this))),a(this,_o).observe(this._container),c(this,or,Vc).call(this)}},_o=new WeakMap,or=new WeakSet,Hp=function(){this.hasLeadingIcon=this.assignedLeadingIcons.length>0},Vp=function(){this.hasTrailingIcon=this.assignedTrailingIcons.length>0},Vc=function(){this.style.setProperty("--_content-height",`${this._container.clientHeight}px`)},Co.styles=[$,Up],Co);o([l({reflect:!0})],il.prototype,"position",void 0);o([C("input")],il.prototype,"input",void 0);il=o([b("u-search")],il);var jp=g`
  :host {
    --_container-size: var(--u-icon-container-size, 40px);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--_container-size);
    height: var(--_container-size);
    font-size: var(--u-icon-size, 24px);
  }
`;var ko,Wp=(ko=class extends T{render(){return m`
      <slot></slot>
    `}},ko.styles=[jp],ko);Wp=o([b("u-icon")],Wp);var Gp=g`
  .container {
    font-family: var(--u-font-family, var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"));
    line-height: var(--u-drawer-headline-line-height, var(--u-title-s-line-height, 1.25rem));
    font-size: var(--u-drawer-headline-font-size, var(--u-title-s-font-size, 0.875rem));
    letter-spacing: var(--u-drawer-headline-letter-spacing, var(--u-title-s-letter-spacing, 0.0071428571rem));
    font-weight: var(--u-drawer-headline-font-weight, var(--u-title-s-font-weight, var(--u-font-weight-medium, 500)));
    color: var(--u-drawer-headline-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
    margin-block: var(--u-drawer-headline-margin-block, 16px 8px);
  }
`;var Eo,Yp=(Eo=class extends T{render(){return m`
      <div class="container">
        <slot></slot>
      </div>
    `}},Eo.styles=[J.styles,Gp],Eo);Yp=o([b("u-drawer-headline")],Yp);function Xp(r,t,e){return r?t(r):e?.(r)}var Kp=g`
  :host {
    --_gap: var(--u-overflow-menu-items-gap, 8px);
    --_items-height: var(--u-icon-button-small-height, 40px);
    display: block;
  }

  :host([data-compact]) {
    --_items-height: var(--u-overflow-menu-compact-items-height, 32px);
  }

  .empty-space {
    height: var(--_items-height);
  }

  .items-set {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: var(--_gap);
    max-height: var(--_items-height);
    overflow: hidden;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr auto;
    margin-inline-start: calc(var(--_gap) * -1);
  }
  .container.show-menu {
    gap: var(--_gap);
  }

  .inner-menu {
    position: relative;
  }
`;var mn,Rr,Ut,To,fn,So,Ye,ol,Zp,Jp,jc,Qp,Io,Ao=(Io=class extends Ie(T){constructor(){super();p(this,Ye);p(this,mn);p(this,Rr);p(this,Ut);p(this,To);p(this,fn);p(this,So);h(this,mn,new ResizeObserver(()=>c(this,Ye,ol).call(this))),h(this,Rr,[]),h(this,Ut,[]),this._renderMenu=!1,this.menuPositioning="relative",h(this,To,null),h(this,fn,document.createElement("div")),h(this,So,0),a(this,fn).slot="menu-items",setTimeout(()=>this.appendChild(a(this,fn)))}set anchor(e){h(this,To,e),c(this,Ye,ol).call(this),a(this,mn).disconnect(),a(this,mn).observe(this.anchor)}get anchor(){return a(this,To)??this}connectedCallback(){super.connectedCallback(),this.anchor=this.anchor}disconnectedCallback(){super.disconnectedCallback(),a(this,mn).disconnect()}render(){this._renderMenuItems();let e={"show-menu":this._renderMenu};return m`
      <div class="container ${q(e)}">
        <div class="items-set">
          <div class="empty-space"></div>
          <slot @slotchange="${c(this,Ye,Qp)}"></slot>
        </div>
        ${Xp(this._renderMenu,()=>m`
          <div class="inner-menu">
            <u-icon-button @click=${{handleEvent:()=>this.menu?.toggle()}}>
              <slot name="icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em"
                     fill="currentColor">
                  <path
                    d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 
                      33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 
                      33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/>
                </svg>
              </slot>
            </u-icon-button>
            <u-menu anchor-corner="end-end" positioning=${this.menuPositioning}>
              <slot name="menu-items"></slot>
            </u-menu>
          </div>
        `)}
      </div>
    `}_renderMenuItems(){let e=m`
      ${$a(a(this,Ut),n=>{let i=n.childNodes.values();return m`
            <u-menu-item @click=${{handleEvent:()=>n.click()}}>
              <div slot="leading-icon">
                ${$a(i,s=>s.cloneNode(!0))}
              </div>
              
              ${n.label}
            </u-menu-item>
          `})}`;Sn(e,a(this,fn))}},mn=new WeakMap,Rr=new WeakMap,Ut=new WeakMap,To=new WeakMap,fn=new WeakMap,So=new WeakMap,Ye=new WeakSet,ol=function(){c(this,Ye,Zp).call(this),c(this,Ye,Jp).call(this)},Zp=function(){let e=0,n=!1;for(let u of a(this,Rr))n=n||u.collapse==="always",!c(this,Ye,jc).call(this,u)&&e++;let i=a(this,Rr)[0],s=n||!!i&&(this._renderMenu?e>1:e>0);this._renderMenu!==s&&(this._renderMenu=s)},Jp=function(){if(!this._renderMenu){a(this,Ut).length=0;return}clearTimeout(a(this,So)),h(this,So,setTimeout(()=>{let e=a(this,Ut).length;a(this,Ut).length=0;for(let n of a(this,Rr))c(this,Ye,jc).call(this,n)||a(this,Ut).push(n);e!==a(this,Ut).length&&this.requestUpdate()},100))},jc=function(e){return e.offsetTop===this.offsetTop&&e.collapse!=="always"},Qp=function(e){let n=e.target;h(this,Rr,n.assignedElements().filter(i=>i.tagName==="U-OVERFLOW-MENU-ITEM").reverse()),c(this,Ye,ol).call(this)},Io.styles=Kp,Io);o([E()],Ao.prototype,"_renderMenu",void 0);o([l({reflect:!0})],Ao.prototype,"menuPositioning",void 0);o([C("u-menu")],Ao.prototype,"menu",void 0);o([l({attribute:!1})],Ao.prototype,"anchor",null);Ao=o([b("u-overflow-menu")],Ao);var Do,zo,es,Wc,Po,Qa=(Po=class extends T{constructor(){super(...arguments);p(this,es);p(this,Do);p(this,zo);h(this,Do,""),h(this,zo,new MutationObserver(()=>a(this,es,Wc)?._renderMenuItems())),this.collapse="auto"}get label(){return a(this,Do)}set label(e){h(this,Do,e),a(this,es,Wc)?._renderMenuItems()}connectedCallback(){super.connectedCallback(),a(this,zo).observe(this,{subtree:!0,characterData:!0,childList:!0})}disconnectedCallback(){super.disconnectedCallback(),a(this,zo).disconnect()}render(){return m`
      <u-icon-button title="${this.label}">
        <slot></slot>
      </u-icon-button>
    `}},Do=new WeakMap,zo=new WeakMap,es=new WeakSet,Wc=function(){return this.parentElement},Po.styles=g`
    :host([collapse=always]) {
      display: none;
    }
  `,Po);o([l()],Qa.prototype,"label",null);o([l({reflect:!0})],Qa.prototype,"collapse",void 0);o([ee()],Qa.prototype,"icons",void 0);Qa=o([b("u-overflow-menu-item")],Qa);function Oe(r){return r<0?-1:r===0?0:1}function gn(r,t,e){return(1-e)*r+e*t}function em(r,t,e){return e<r?r:e>t?t:e}function Lo(r,t,e){return e<r?r:e>t?t:e}function ar(r){return r=r%360,r<0&&(r=r+360),r}function ts(r,t){let e=r[0]*t[0][0]+r[1]*t[0][1]+r[2]*t[0][2],n=r[0]*t[1][0]+r[1]*t[1][1]+r[2]*t[1][2],i=r[0]*t[2][0]+r[1]*t[2][1]+r[2]*t[2][2];return[e,n,i]}var sf=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],lf=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],cf=[95.047,100,108.883];function al(r,t,e){return(255<<24|(r&255)<<16|(t&255)<<8|e&255)>>>0}function Gc(r){let t=bn(r[0]),e=bn(r[1]),n=bn(r[2]);return al(t,e,n)}function sl(r){return r>>16&255}function ll(r){return r>>8&255}function cl(r){return r&255}function tm(r,t,e){let n=lf,i=n[0][0]*r+n[0][1]*t+n[0][2]*e,s=n[1][0]*r+n[1][1]*t+n[1][2]*e,u=n[2][0]*r+n[2][1]*t+n[2][2]*e,f=bn(i),v=bn(s),w=bn(u);return al(f,v,w)}function df(r){let t=vn(sl(r)),e=vn(ll(r)),n=vn(cl(r));return ts([t,e,n],sf)}function rm(r){let t=St(r),e=bn(t);return al(e,e,e)}function dl(r){let t=df(r)[1];return 116*im(t/100)-16}function St(r){return 100*uf((r+16)/116)}function rs(r){return im(r/100)*116-16}function vn(r){let t=r/255;return t<=.040449936?t/12.92*100:Math.pow((t+.055)/1.055,2.4)*100}function bn(r){let t=r/100,e=0;return t<=.0031308?e=t*12.92:e=1.055*Math.pow(t,1/2.4)-.055,em(0,255,Math.round(e*255))}function nm(){return cf}function im(r){let t=.008856451679035631,e=24389/27;return r>t?Math.pow(r,1/3):(e*r+16)/116}function uf(r){let t=.008856451679035631,e=24389/27,n=r*r*r;return n>t?n:(116*r-16)/e}var pt=class r{static make(t=nm(),e=200/Math.PI*St(50)/100,n=50,i=2,s=!1){let u=t,f=u[0]*.401288+u[1]*.650173+u[2]*-.051461,v=u[0]*-.250268+u[1]*1.204414+u[2]*.045854,w=u[0]*-.002079+u[1]*.048952+u[2]*.953127,_=.8+i/10,S=_>=.9?gn(.59,.69,(_-.9)*10):gn(.525,.59,(_-.8)*10),I=s?1:_*(1-1/3.6*Math.exp((-e-42)/92));I=I>1?1:I<0?0:I;let L=_,M=[I*(100/f)+1-I,I*(100/v)+1-I,I*(100/w)+1-I],z=1/(5*e+1),X=z*z*z*z,te=1-X,ae=X*e+.1*te*te*Math.cbrt(5*e),G=St(n)/t[1],fe=1.48+Math.sqrt(G),H=.725/Math.pow(G,.2),Y=H,K=[Math.pow(ae*M[0]*f/100,.42),Math.pow(ae*M[1]*v/100,.42),Math.pow(ae*M[2]*w/100,.42)],oe=[400*K[0]/(K[0]+27.13),400*K[1]/(K[1]+27.13),400*K[2]/(K[2]+27.13)],ve=(2*oe[0]+oe[1]+.05*oe[2])*H;return new r(G,ve,H,Y,S,L,M,ae,Math.pow(ae,.25),fe)}constructor(t,e,n,i,s,u,f,v,w,_){this.n=t,this.aw=e,this.nbb=n,this.ncb=i,this.c=s,this.nc=u,this.rgbD=f,this.fl=v,this.fLRoot=w,this.z=_}};pt.DEFAULT=pt.make();var Ht=class r{constructor(t,e,n,i,s,u,f,v,w){this.hue=t,this.chroma=e,this.j=n,this.q=i,this.m=s,this.s=u,this.jstar=f,this.astar=v,this.bstar=w}distance(t){let e=this.jstar-t.jstar,n=this.astar-t.astar,i=this.bstar-t.bstar,s=Math.sqrt(e*e+n*n+i*i);return 1.41*Math.pow(s,.63)}static fromInt(t){return r.fromIntInViewingConditions(t,pt.DEFAULT)}static fromIntInViewingConditions(t,e){let n=(t&16711680)>>16,i=(t&65280)>>8,s=t&255,u=vn(n),f=vn(i),v=vn(s),w=.41233895*u+.35762064*f+.18051042*v,_=.2126*u+.7152*f+.0722*v,S=.01932141*u+.11916382*f+.95034478*v,I=.401288*w+.650173*_-.051461*S,L=-.250268*w+1.204414*_+.045854*S,M=-.002079*w+.048952*_+.953127*S,z=e.rgbD[0]*I,X=e.rgbD[1]*L,te=e.rgbD[2]*M,ae=Math.pow(e.fl*Math.abs(z)/100,.42),G=Math.pow(e.fl*Math.abs(X)/100,.42),fe=Math.pow(e.fl*Math.abs(te)/100,.42),H=Oe(z)*400*ae/(ae+27.13),Y=Oe(X)*400*G/(G+27.13),K=Oe(te)*400*fe/(fe+27.13),oe=(11*H+-12*Y+K)/11,ve=(H+Y-2*K)/9,Le=(20*H+20*Y+21*K)/20,xe=(40*H+20*Y+K)/20,mt=Math.atan2(ve,oe)*180/Math.PI,se=mt<0?mt+360:mt>=360?mt-360:mt,Ze=se*Math.PI/180,Vt=xe*e.nbb,at=100*Math.pow(Vt/e.aw,e.c*e.z),xn=4/e.c*Math.sqrt(at/100)*(e.aw+4)*e.fLRoot,Oo=se<20.14?se+360:se,qo=.25*(Math.cos(Oo*Math.PI/180+2)+3.8),Bo=5e4/13*qo*e.nc*e.ncb*Math.sqrt(oe*oe+ve*ve)/(Le+.305),qr=Math.pow(Bo,.9)*Math.pow(1.64-Math.pow(.29,e.n),.73),be=qr*Math.sqrt(at/100),No=be*e.fLRoot,Ee=50*Math.sqrt(qr*e.c/(e.aw+4)),os=(1+100*.007)*at/(1+.007*at),le=1/.0228*Math.log(1+.0228*No),Br=le*Math.cos(Ze),_n=le*Math.sin(Ze);return new r(se,be,at,xn,No,Ee,os,Br,_n)}static fromJch(t,e,n){return r.fromJchInViewingConditions(t,e,n,pt.DEFAULT)}static fromJchInViewingConditions(t,e,n,i){let s=4/i.c*Math.sqrt(t/100)*(i.aw+4)*i.fLRoot,u=e*i.fLRoot,f=e/Math.sqrt(t/100),v=50*Math.sqrt(f*i.c/(i.aw+4)),w=n*Math.PI/180,_=(1+100*.007)*t/(1+.007*t),S=1/.0228*Math.log(1+.0228*u),I=S*Math.cos(w),L=S*Math.sin(w);return new r(n,e,t,s,u,v,_,I,L)}static fromUcs(t,e,n){return r.fromUcsInViewingConditions(t,e,n,pt.DEFAULT)}static fromUcsInViewingConditions(t,e,n,i){let s=e,u=n,f=Math.sqrt(s*s+u*u),w=(Math.exp(f*.0228)-1)/.0228/i.fLRoot,_=Math.atan2(u,s)*(180/Math.PI);_<0&&(_+=360);let S=t/(1-(t-100)*.007);return r.fromJchInViewingConditions(S,w,_,i)}toInt(){return this.viewed(pt.DEFAULT)}viewed(t){let e=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(e/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),i=this.hue*Math.PI/180,s=.25*(Math.cos(i+2)+3.8),u=t.aw*Math.pow(this.j/100,1/t.c/t.z),f=s*(5e4/13)*t.nc*t.ncb,v=u/t.nbb,w=Math.sin(i),_=Math.cos(i),S=23*(v+.305)*n/(23*f+11*n*_+108*n*w),I=S*_,L=S*w,M=(460*v+451*I+288*L)/1403,z=(460*v-891*I-261*L)/1403,X=(460*v-220*I-6300*L)/1403,te=Math.max(0,27.13*Math.abs(M)/(400-Math.abs(M))),ae=Oe(M)*(100/t.fl)*Math.pow(te,1/.42),G=Math.max(0,27.13*Math.abs(z)/(400-Math.abs(z))),fe=Oe(z)*(100/t.fl)*Math.pow(G,1/.42),H=Math.max(0,27.13*Math.abs(X)/(400-Math.abs(X))),Y=Oe(X)*(100/t.fl)*Math.pow(H,1/.42),K=ae/t.rgbD[0],oe=fe/t.rgbD[1],ve=Y/t.rgbD[2],Le=1.86206786*K-1.01125463*oe+.14918677*ve,xe=.38752654*K+.62144744*oe-.00897398*ve,At=-.0158415*K-.03412294*oe+1.04996444*ve;return tm(Le,xe,At)}static fromXyzInViewingConditions(t,e,n,i){let s=.401288*t+.650173*e-.051461*n,u=-.250268*t+1.204414*e+.045854*n,f=-.002079*t+.048952*e+.953127*n,v=i.rgbD[0]*s,w=i.rgbD[1]*u,_=i.rgbD[2]*f,S=Math.pow(i.fl*Math.abs(v)/100,.42),I=Math.pow(i.fl*Math.abs(w)/100,.42),L=Math.pow(i.fl*Math.abs(_)/100,.42),M=Oe(v)*400*S/(S+27.13),z=Oe(w)*400*I/(I+27.13),X=Oe(_)*400*L/(L+27.13),te=(11*M+-12*z+X)/11,ae=(M+z-2*X)/9,G=(20*M+20*z+21*X)/20,fe=(40*M+20*z+X)/20,Y=Math.atan2(ae,te)*180/Math.PI,K=Y<0?Y+360:Y>=360?Y-360:Y,oe=K*Math.PI/180,ve=fe*i.nbb,Le=100*Math.pow(ve/i.aw,i.c*i.z),xe=4/i.c*Math.sqrt(Le/100)*(i.aw+4)*i.fLRoot,At=K<20.14?K+360:K,mt=1/4*(Math.cos(At*Math.PI/180+2)+3.8),Ze=5e4/13*mt*i.nc*i.ncb*Math.sqrt(te*te+ae*ae)/(G+.305),Vt=Math.pow(Ze,.9)*Math.pow(1.64-Math.pow(.29,i.n),.73),at=Vt*Math.sqrt(Le/100),xn=at*i.fLRoot,Oo=50*Math.sqrt(Vt*i.c/(i.aw+4)),qo=(1+100*.007)*Le/(1+.007*Le),wn=Math.log(1+.0228*xn)/.0228,Bo=wn*Math.cos(oe),qr=wn*Math.sin(oe);return new r(K,at,Le,xe,xn,Oo,qo,Bo,qr)}xyzInViewingConditions(t){let e=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(e/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),i=this.hue*Math.PI/180,s=.25*(Math.cos(i+2)+3.8),u=t.aw*Math.pow(this.j/100,1/t.c/t.z),f=s*(5e4/13)*t.nc*t.ncb,v=u/t.nbb,w=Math.sin(i),_=Math.cos(i),S=23*(v+.305)*n/(23*f+11*n*_+108*n*w),I=S*_,L=S*w,M=(460*v+451*I+288*L)/1403,z=(460*v-891*I-261*L)/1403,X=(460*v-220*I-6300*L)/1403,te=Math.max(0,27.13*Math.abs(M)/(400-Math.abs(M))),ae=Oe(M)*(100/t.fl)*Math.pow(te,1/.42),G=Math.max(0,27.13*Math.abs(z)/(400-Math.abs(z))),fe=Oe(z)*(100/t.fl)*Math.pow(G,1/.42),H=Math.max(0,27.13*Math.abs(X)/(400-Math.abs(X))),Y=Oe(X)*(100/t.fl)*Math.pow(H,1/.42),K=ae/t.rgbD[0],oe=fe/t.rgbD[1],ve=Y/t.rgbD[2],Le=1.86206786*K-1.01125463*oe+.14918677*ve,xe=.38752654*K+.62144744*oe-.00897398*ve,At=-.0158415*K-.03412294*oe+1.04996444*ve;return[Le,xe,At]}};var ns=(()=>{class r{static sanitizeRadians(e){return(e+Math.PI*8)%(Math.PI*2)}static trueDelinearized(e){let n=e/100,i=0;return n<=.0031308?i=n*12.92:i=1.055*Math.pow(n,1/2.4)-.055,i*255}static chromaticAdaptation(e){let n=Math.pow(Math.abs(e),.42);return Oe(e)*400*n/(n+27.13)}static hueOf(e){let n=ts(e,r.SCALED_DISCOUNT_FROM_LINRGB),i=r.chromaticAdaptation(n[0]),s=r.chromaticAdaptation(n[1]),u=r.chromaticAdaptation(n[2]),f=(11*i+-12*s+u)/11,v=(i+s-2*u)/9;return Math.atan2(v,f)}static areInCyclicOrder(e,n,i){let s=r.sanitizeRadians(n-e),u=r.sanitizeRadians(i-e);return s<u}static intercept(e,n,i){return(n-e)/(i-e)}static lerpPoint(e,n,i){return[e[0]+(i[0]-e[0])*n,e[1]+(i[1]-e[1])*n,e[2]+(i[2]-e[2])*n]}static setCoordinate(e,n,i,s){let u=r.intercept(e[s],n,i[s]);return r.lerpPoint(e,u,i)}static isBounded(e){return 0<=e&&e<=100}static nthVertex(e,n){let i=r.Y_FROM_LINRGB[0],s=r.Y_FROM_LINRGB[1],u=r.Y_FROM_LINRGB[2],f=n%4<=1?0:100,v=n%2===0?0:100;if(n<4){let w=f,_=v,S=(e-w*s-_*u)/i;return r.isBounded(S)?[S,w,_]:[-1,-1,-1]}else if(n<8){let w=f,_=v,S=(e-_*i-w*u)/s;return r.isBounded(S)?[_,S,w]:[-1,-1,-1]}else{let w=f,_=v,S=(e-w*i-_*s)/u;return r.isBounded(S)?[w,_,S]:[-1,-1,-1]}}static bisectToSegment(e,n){let i=[-1,-1,-1],s=i,u=0,f=0,v=!1,w=!0;for(let _=0;_<12;_++){let S=r.nthVertex(e,_);if(S[0]<0)continue;let I=r.hueOf(S);if(!v){i=S,s=S,u=I,f=I,v=!0;continue}(w||r.areInCyclicOrder(u,I,f))&&(w=!1,r.areInCyclicOrder(u,n,I)?(s=S,f=I):(i=S,u=I))}return[i,s]}static midpoint(e,n){return[(e[0]+n[0])/2,(e[1]+n[1])/2,(e[2]+n[2])/2]}static criticalPlaneBelow(e){return Math.floor(e-.5)}static criticalPlaneAbove(e){return Math.ceil(e-.5)}static bisectToLimit(e,n){let i=r.bisectToSegment(e,n),s=i[0],u=r.hueOf(s),f=i[1];for(let v=0;v<3;v++)if(s[v]!==f[v]){let w=-1,_=255;s[v]<f[v]?(w=r.criticalPlaneBelow(r.trueDelinearized(s[v])),_=r.criticalPlaneAbove(r.trueDelinearized(f[v]))):(w=r.criticalPlaneAbove(r.trueDelinearized(s[v])),_=r.criticalPlaneBelow(r.trueDelinearized(f[v])));for(let S=0;S<8&&!(Math.abs(_-w)<=1);S++){let I=Math.floor((w+_)/2),L=r.CRITICAL_PLANES[I],M=r.setCoordinate(s,L,f,v),z=r.hueOf(M);r.areInCyclicOrder(u,n,z)?(f=M,_=I):(s=M,u=z,w=I)}}return r.midpoint(s,f)}static inverseChromaticAdaptation(e){let n=Math.abs(e),i=Math.max(0,27.13*n/(400-n));return Oe(e)*Math.pow(i,1/.42)}static findResultByJ(e,n,i){let s=Math.sqrt(i)*11,u=pt.DEFAULT,f=1/Math.pow(1.64-Math.pow(.29,u.n),.73),w=.25*(Math.cos(e+2)+3.8)*(5e4/13)*u.nc*u.ncb,_=Math.sin(e),S=Math.cos(e);for(let I=0;I<5;I++){let L=s/100,M=n===0||s===0?0:n/Math.sqrt(L),z=Math.pow(M*f,1/.9),te=u.aw*Math.pow(L,1/u.c/u.z)/u.nbb,ae=23*(te+.305)*z/(23*w+11*z*S+108*z*_),G=ae*S,fe=ae*_,H=(460*te+451*G+288*fe)/1403,Y=(460*te-891*G-261*fe)/1403,K=(460*te-220*G-6300*fe)/1403,oe=r.inverseChromaticAdaptation(H),ve=r.inverseChromaticAdaptation(Y),Le=r.inverseChromaticAdaptation(K),xe=ts([oe,ve,Le],r.LINRGB_FROM_SCALED_DISCOUNT);if(xe[0]<0||xe[1]<0||xe[2]<0)return 0;let At=r.Y_FROM_LINRGB[0],mt=r.Y_FROM_LINRGB[1],se=r.Y_FROM_LINRGB[2],Ze=At*xe[0]+mt*xe[1]+se*xe[2];if(Ze<=0)return 0;if(I===4||Math.abs(Ze-i)<.002)return xe[0]>100.01||xe[1]>100.01||xe[2]>100.01?0:Gc(xe);s=s-(Ze-i)*s/(2*Ze)}return 0}static solveToInt(e,n,i){if(n<1e-4||i<1e-4||i>99.9999)return rm(i);e=ar(e);let s=e/180*Math.PI,u=St(i),f=r.findResultByJ(s,n,u);if(f!==0)return f;let v=r.bisectToLimit(u,s);return Gc(v)}static solveToCam(e,n,i){return Ht.fromInt(r.solveToInt(e,n,i))}}return r.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]],r.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]],r.Y_FROM_LINRGB=[.2126,.7152,.0722],r.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776],r})();var ke=class r{static from(t,e,n){return new r(ns.solveToInt(t,e,n))}static fromInt(t){return new r(t)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(t){this.setInternalState(ns.solveToInt(t,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(t){this.setInternalState(ns.solveToInt(this.internalHue,t,this.internalTone))}get tone(){return this.internalTone}set tone(t){this.setInternalState(ns.solveToInt(this.internalHue,this.internalChroma,t))}constructor(t){this.argb=t;let e=Ht.fromInt(t);this.internalHue=e.hue,this.internalChroma=e.chroma,this.internalTone=dl(t),this.argb=t}setInternalState(t){let e=Ht.fromInt(t);this.internalHue=e.hue,this.internalChroma=e.chroma,this.internalTone=dl(t),this.argb=t}inViewingConditions(t){let n=Ht.fromInt(this.toInt()).xyzInViewingConditions(t),i=Ht.fromXyzInViewingConditions(n[0],n[1],n[2],pt.make());return r.from(i.hue,i.chroma,rs(n[1]))}};var Ke=class r{static ratioOfTones(t,e){return t=Lo(0,100,t),e=Lo(0,100,e),r.ratioOfYs(St(t),St(e))}static ratioOfYs(t,e){let n=t>e?t:e,i=n===e?t:e;return(n+5)/(i+5)}static lighter(t,e){if(t<0||t>100)return-1;let n=St(t),i=e*(n+5)-5,s=r.ratioOfYs(i,n),u=Math.abs(s-e);if(s<e&&u>.04)return-1;let f=rs(i)+.4;return f<0||f>100?-1:f}static darker(t,e){if(t<0||t>100)return-1;let n=St(t),i=(n+5)/e-5,s=r.ratioOfYs(n,i),u=Math.abs(s-e);if(s<e&&u>.04)return-1;let f=rs(i)-.4;return f<0||f>100?-1:f}static lighterUnsafe(t,e){let n=r.lighter(t,e);return n<0?100:n}static darkerUnsafe(t,e){let n=r.darker(t,e);return n<0?0:n}};var Mo=class r{static isDisliked(t){let e=Math.round(t.hue)>=90&&Math.round(t.hue)<=111,n=Math.round(t.chroma)>16,i=Math.round(t.tone)<65;return e&&n&&i}static fixIfDisliked(t){return r.isDisliked(t)?ke.from(t.hue,t.chroma,70):t}};var D=class r{static fromPalette(t){return new r(t.name??"",t.palette,t.tone,t.isBackground??!1,t.background,t.secondBackground,t.contrastCurve,t.toneDeltaPair)}constructor(t,e,n,i,s,u,f,v){if(this.name=t,this.palette=e,this.tone=n,this.isBackground=i,this.background=s,this.secondBackground=u,this.contrastCurve=f,this.toneDeltaPair=v,this.hctCache=new Map,!s&&u)throw new Error(`Color ${t} has secondBackgrounddefined, but background is not defined.`);if(!s&&f)throw new Error(`Color ${t} has contrastCurvedefined, but background is not defined.`);if(s&&!f)throw new Error(`Color ${t} has backgrounddefined, but contrastCurve is not defined.`)}getArgb(t){return this.getHct(t).toInt()}getHct(t){let e=this.hctCache.get(t);if(e!=null)return e;let n=this.getTone(t),i=this.palette(t).getHct(n);return this.hctCache.size>4&&this.hctCache.clear(),this.hctCache.set(t,i),i}getTone(t){let e=t.contrastLevel<0;if(this.toneDeltaPair){let n=this.toneDeltaPair(t),i=n.roleA,s=n.roleB,u=n.delta,f=n.polarity,v=n.stayTogether,_=this.background(t).getTone(t),S=f==="nearer"||f==="lighter"&&!t.isDark||f==="darker"&&t.isDark,I=S?i:s,L=S?s:i,M=this.name===I.name,z=t.isDark?1:-1,X=I.contrastCurve.get(t.contrastLevel),te=L.contrastCurve.get(t.contrastLevel),ae=I.tone(t),G=Ke.ratioOfTones(_,ae)>=X?ae:r.foregroundTone(_,X),fe=L.tone(t),H=Ke.ratioOfTones(_,fe)>=te?fe:r.foregroundTone(_,te);return e&&(G=r.foregroundTone(_,X),H=r.foregroundTone(_,te)),(H-G)*z>=u||(H=Lo(0,100,G+u*z),(H-G)*z>=u||(G=Lo(0,100,H-u*z))),50<=G&&G<60?z>0?(G=60,H=Math.max(H,G+u*z)):(G=49,H=Math.min(H,G+u*z)):50<=H&&H<60&&(v?z>0?(G=60,H=Math.max(H,G+u*z)):(G=49,H=Math.min(H,G+u*z)):z>0?H=60:H=49),M?G:H}else{let n=this.tone(t);if(this.background==null)return n;let i=this.background(t).getTone(t),s=this.contrastCurve.get(t.contrastLevel);if(Ke.ratioOfTones(i,n)>=s||(n=r.foregroundTone(i,s)),e&&(n=r.foregroundTone(i,s)),this.isBackground&&50<=n&&n<60&&(Ke.ratioOfTones(49,i)>=s?n=49:n=60),this.secondBackground){let[u,f]=[this.background,this.secondBackground],[v,w]=[u(t).getTone(t),f(t).getTone(t)],[_,S]=[Math.max(v,w),Math.min(v,w)];if(Ke.ratioOfTones(_,n)>=s&&Ke.ratioOfTones(S,n)>=s)return n;let I=Ke.lighter(_,s),L=Ke.darker(S,s),M=[];return I!==-1&&M.push(I),L!==-1&&M.push(L),r.tonePrefersLightForeground(v)||r.tonePrefersLightForeground(w)?I<0?100:I:M.length===1?M[0]:L<0?0:L}return n}}static foregroundTone(t,e){let n=Ke.lighterUnsafe(t,e),i=Ke.darkerUnsafe(t,e),s=Ke.ratioOfTones(n,t),u=Ke.ratioOfTones(i,t);if(r.tonePrefersLightForeground(t)){let v=Math.abs(s-u)<.1&&s<e&&u<e;return s>=e||s>=u||v?n:i}else return u>=e||u>=s?i:n}static tonePrefersLightForeground(t){return Math.round(t)<60}static toneAllowsLightForeground(t){return Math.round(t)<=49}static enableLightForeground(t){return r.tonePrefersLightForeground(t)&&!r.toneAllowsLightForeground(t)?49:t}};var re=class r{static fromInt(t){let e=ke.fromInt(t);return r.fromHct(e)}static fromHct(t){return new r(t.hue,t.chroma,t)}static fromHueAndChroma(t,e){let n=new Yc(t,e).create();return new r(t,e,n)}constructor(t,e,n){this.hue=t,this.chroma=e,this.keyColor=n,this.cache=new Map}tone(t){let e=this.cache.get(t);return e===void 0&&(e=ke.from(this.hue,this.chroma,t).toInt(),this.cache.set(t,e)),e}getHct(t){return ke.fromInt(this.tone(t))}},Yc=class{constructor(t,e){this.hue=t,this.requestedChroma=e,this.chromaCache=new Map,this.maxChromaValue=200}create(){let i=0,s=100;for(;i<s;){let u=Math.floor((i+s)/2),f=this.maxChroma(u)<this.maxChroma(u+1);if(this.maxChroma(u)>=this.requestedChroma-.01)if(Math.abs(i-50)<Math.abs(s-50))s=u;else{if(i===u)return ke.from(this.hue,this.requestedChroma,i);i=u}else f?i=u+1:s=u}return ke.from(this.hue,this.requestedChroma,i)}maxChroma(t){if(this.chromaCache.has(t))return this.chromaCache.get(t);let e=ke.from(this.hue,this.maxChromaValue,t).chroma;return this.chromaCache.set(t,e),e}};var R=class{constructor(t,e,n,i){this.low=t,this.normal=e,this.medium=n,this.high=i}get(t){return t<=-1?this.low:t<0?gn(this.low,this.normal,(t- -1)/1):t<.5?gn(this.normal,this.medium,(t-0)/.5):t<1?gn(this.medium,this.high,(t-.5)/.5):this.high}};var Pe=class{constructor(t,e,n,i,s){this.roleA=t,this.roleB=e,this.delta=n,this.polarity=i,this.stayTogether=s}};var ot=(function(r){return r[r.MONOCHROME=0]="MONOCHROME",r[r.NEUTRAL=1]="NEUTRAL",r[r.TONAL_SPOT=2]="TONAL_SPOT",r[r.VIBRANT=3]="VIBRANT",r[r.EXPRESSIVE=4]="EXPRESSIVE",r[r.FIDELITY=5]="FIDELITY",r[r.CONTENT=6]="CONTENT",r[r.RAINBOW=7]="RAINBOW",r[r.FRUIT_SALAD=8]="FRUIT_SALAD",r})(ot||{});function $o(r){return r.variant===ot.FIDELITY||r.variant===ot.CONTENT}function me(r){return r.variant===ot.MONOCHROME}function pf(r,t,e,n){let i=e,s=ke.from(r,t,e);if(s.chroma<t){let u=s.chroma;for(;s.chroma<t;){i+=n?-1:1;let f=ke.from(r,t,i);if(u>f.chroma||Math.abs(f.chroma-t)<.4)break;let v=Math.abs(f.chroma-t),w=Math.abs(s.chroma-t);v<w&&(s=f),u=Math.max(u,f.chroma)}}return i}var y=class r{static highestSurface(t){return t.isDark?r.surfaceBright:r.surfaceDim}};y.contentAccentToneDelta=15;y.primaryPaletteKeyColor=D.fromPalette({name:"primary_palette_key_color",palette:r=>r.primaryPalette,tone:r=>r.primaryPalette.keyColor.tone});y.secondaryPaletteKeyColor=D.fromPalette({name:"secondary_palette_key_color",palette:r=>r.secondaryPalette,tone:r=>r.secondaryPalette.keyColor.tone});y.tertiaryPaletteKeyColor=D.fromPalette({name:"tertiary_palette_key_color",palette:r=>r.tertiaryPalette,tone:r=>r.tertiaryPalette.keyColor.tone});y.neutralPaletteKeyColor=D.fromPalette({name:"neutral_palette_key_color",palette:r=>r.neutralPalette,tone:r=>r.neutralPalette.keyColor.tone});y.neutralVariantPaletteKeyColor=D.fromPalette({name:"neutral_variant_palette_key_color",palette:r=>r.neutralVariantPalette,tone:r=>r.neutralVariantPalette.keyColor.tone});y.background=D.fromPalette({name:"background",palette:r=>r.neutralPalette,tone:r=>r.isDark?6:98,isBackground:!0});y.onBackground=D.fromPalette({name:"on_background",palette:r=>r.neutralPalette,tone:r=>r.isDark?90:10,background:r=>y.background,contrastCurve:new R(3,3,4.5,7)});y.surface=D.fromPalette({name:"surface",palette:r=>r.neutralPalette,tone:r=>r.isDark?6:98,isBackground:!0});y.surfaceDim=D.fromPalette({name:"surface_dim",palette:r=>r.neutralPalette,tone:r=>r.isDark?6:new R(87,87,80,75).get(r.contrastLevel),isBackground:!0});y.surfaceBright=D.fromPalette({name:"surface_bright",palette:r=>r.neutralPalette,tone:r=>r.isDark?new R(24,24,29,34).get(r.contrastLevel):98,isBackground:!0});y.surfaceContainerLowest=D.fromPalette({name:"surface_container_lowest",palette:r=>r.neutralPalette,tone:r=>r.isDark?new R(4,4,2,0).get(r.contrastLevel):100,isBackground:!0});y.surfaceContainerLow=D.fromPalette({name:"surface_container_low",palette:r=>r.neutralPalette,tone:r=>r.isDark?new R(10,10,11,12).get(r.contrastLevel):new R(96,96,96,95).get(r.contrastLevel),isBackground:!0});y.surfaceContainer=D.fromPalette({name:"surface_container",palette:r=>r.neutralPalette,tone:r=>r.isDark?new R(12,12,16,20).get(r.contrastLevel):new R(94,94,92,90).get(r.contrastLevel),isBackground:!0});y.surfaceContainerHigh=D.fromPalette({name:"surface_container_high",palette:r=>r.neutralPalette,tone:r=>r.isDark?new R(17,17,21,25).get(r.contrastLevel):new R(92,92,88,85).get(r.contrastLevel),isBackground:!0});y.surfaceContainerHighest=D.fromPalette({name:"surface_container_highest",palette:r=>r.neutralPalette,tone:r=>r.isDark?new R(22,22,26,30).get(r.contrastLevel):new R(90,90,84,80).get(r.contrastLevel),isBackground:!0});y.onSurface=D.fromPalette({name:"on_surface",palette:r=>r.neutralPalette,tone:r=>r.isDark?90:10,background:r=>y.highestSurface(r),contrastCurve:new R(4.5,7,11,21)});y.surfaceVariant=D.fromPalette({name:"surface_variant",palette:r=>r.neutralVariantPalette,tone:r=>r.isDark?30:90,isBackground:!0});y.onSurfaceVariant=D.fromPalette({name:"on_surface_variant",palette:r=>r.neutralVariantPalette,tone:r=>r.isDark?80:30,background:r=>y.highestSurface(r),contrastCurve:new R(3,4.5,7,11)});y.inverseSurface=D.fromPalette({name:"inverse_surface",palette:r=>r.neutralPalette,tone:r=>r.isDark?90:20});y.inverseOnSurface=D.fromPalette({name:"inverse_on_surface",palette:r=>r.neutralPalette,tone:r=>r.isDark?20:95,background:r=>y.inverseSurface,contrastCurve:new R(4.5,7,11,21)});y.outline=D.fromPalette({name:"outline",palette:r=>r.neutralVariantPalette,tone:r=>r.isDark?60:50,background:r=>y.highestSurface(r),contrastCurve:new R(1.5,3,4.5,7)});y.outlineVariant=D.fromPalette({name:"outline_variant",palette:r=>r.neutralVariantPalette,tone:r=>r.isDark?30:80,background:r=>y.highestSurface(r),contrastCurve:new R(1,1,3,4.5)});y.shadow=D.fromPalette({name:"shadow",palette:r=>r.neutralPalette,tone:r=>0});y.scrim=D.fromPalette({name:"scrim",palette:r=>r.neutralPalette,tone:r=>0});y.surfaceTint=D.fromPalette({name:"surface_tint",palette:r=>r.primaryPalette,tone:r=>r.isDark?80:40,isBackground:!0});y.primary=D.fromPalette({name:"primary",palette:r=>r.primaryPalette,tone:r=>me(r)?r.isDark?100:0:r.isDark?80:40,isBackground:!0,background:r=>y.highestSurface(r),contrastCurve:new R(3,4.5,7,7),toneDeltaPair:r=>new Pe(y.primaryContainer,y.primary,10,"nearer",!1)});y.onPrimary=D.fromPalette({name:"on_primary",palette:r=>r.primaryPalette,tone:r=>me(r)?r.isDark?10:90:r.isDark?20:100,background:r=>y.primary,contrastCurve:new R(4.5,7,11,21)});y.primaryContainer=D.fromPalette({name:"primary_container",palette:r=>r.primaryPalette,tone:r=>$o(r)?r.sourceColorHct.tone:me(r)?r.isDark?85:25:r.isDark?30:90,isBackground:!0,background:r=>y.highestSurface(r),contrastCurve:new R(1,1,3,4.5),toneDeltaPair:r=>new Pe(y.primaryContainer,y.primary,10,"nearer",!1)});y.onPrimaryContainer=D.fromPalette({name:"on_primary_container",palette:r=>r.primaryPalette,tone:r=>$o(r)?D.foregroundTone(y.primaryContainer.tone(r),4.5):me(r)?r.isDark?0:100:r.isDark?90:30,background:r=>y.primaryContainer,contrastCurve:new R(3,4.5,7,11)});y.inversePrimary=D.fromPalette({name:"inverse_primary",palette:r=>r.primaryPalette,tone:r=>r.isDark?40:80,background:r=>y.inverseSurface,contrastCurve:new R(3,4.5,7,7)});y.secondary=D.fromPalette({name:"secondary",palette:r=>r.secondaryPalette,tone:r=>r.isDark?80:40,isBackground:!0,background:r=>y.highestSurface(r),contrastCurve:new R(3,4.5,7,7),toneDeltaPair:r=>new Pe(y.secondaryContainer,y.secondary,10,"nearer",!1)});y.onSecondary=D.fromPalette({name:"on_secondary",palette:r=>r.secondaryPalette,tone:r=>me(r)?r.isDark?10:100:r.isDark?20:100,background:r=>y.secondary,contrastCurve:new R(4.5,7,11,21)});y.secondaryContainer=D.fromPalette({name:"secondary_container",palette:r=>r.secondaryPalette,tone:r=>{let t=r.isDark?30:90;return me(r)?r.isDark?30:85:$o(r)?pf(r.secondaryPalette.hue,r.secondaryPalette.chroma,t,!r.isDark):t},isBackground:!0,background:r=>y.highestSurface(r),contrastCurve:new R(1,1,3,4.5),toneDeltaPair:r=>new Pe(y.secondaryContainer,y.secondary,10,"nearer",!1)});y.onSecondaryContainer=D.fromPalette({name:"on_secondary_container",palette:r=>r.secondaryPalette,tone:r=>me(r)?r.isDark?90:10:$o(r)?D.foregroundTone(y.secondaryContainer.tone(r),4.5):r.isDark?90:30,background:r=>y.secondaryContainer,contrastCurve:new R(3,4.5,7,11)});y.tertiary=D.fromPalette({name:"tertiary",palette:r=>r.tertiaryPalette,tone:r=>me(r)?r.isDark?90:25:r.isDark?80:40,isBackground:!0,background:r=>y.highestSurface(r),contrastCurve:new R(3,4.5,7,7),toneDeltaPair:r=>new Pe(y.tertiaryContainer,y.tertiary,10,"nearer",!1)});y.onTertiary=D.fromPalette({name:"on_tertiary",palette:r=>r.tertiaryPalette,tone:r=>me(r)?r.isDark?10:90:r.isDark?20:100,background:r=>y.tertiary,contrastCurve:new R(4.5,7,11,21)});y.tertiaryContainer=D.fromPalette({name:"tertiary_container",palette:r=>r.tertiaryPalette,tone:r=>{if(me(r))return r.isDark?60:49;if(!$o(r))return r.isDark?30:90;let t=r.tertiaryPalette.getHct(r.sourceColorHct.tone);return Mo.fixIfDisliked(t).tone},isBackground:!0,background:r=>y.highestSurface(r),contrastCurve:new R(1,1,3,4.5),toneDeltaPair:r=>new Pe(y.tertiaryContainer,y.tertiary,10,"nearer",!1)});y.onTertiaryContainer=D.fromPalette({name:"on_tertiary_container",palette:r=>r.tertiaryPalette,tone:r=>me(r)?r.isDark?0:100:$o(r)?D.foregroundTone(y.tertiaryContainer.tone(r),4.5):r.isDark?90:30,background:r=>y.tertiaryContainer,contrastCurve:new R(3,4.5,7,11)});y.error=D.fromPalette({name:"error",palette:r=>r.errorPalette,tone:r=>r.isDark?80:40,isBackground:!0,background:r=>y.highestSurface(r),contrastCurve:new R(3,4.5,7,7),toneDeltaPair:r=>new Pe(y.errorContainer,y.error,10,"nearer",!1)});y.onError=D.fromPalette({name:"on_error",palette:r=>r.errorPalette,tone:r=>r.isDark?20:100,background:r=>y.error,contrastCurve:new R(4.5,7,11,21)});y.errorContainer=D.fromPalette({name:"error_container",palette:r=>r.errorPalette,tone:r=>r.isDark?30:90,isBackground:!0,background:r=>y.highestSurface(r),contrastCurve:new R(1,1,3,4.5),toneDeltaPair:r=>new Pe(y.errorContainer,y.error,10,"nearer",!1)});y.onErrorContainer=D.fromPalette({name:"on_error_container",palette:r=>r.errorPalette,tone:r=>me(r)?r.isDark?90:10:r.isDark?90:30,background:r=>y.errorContainer,contrastCurve:new R(3,4.5,7,11)});y.primaryFixed=D.fromPalette({name:"primary_fixed",palette:r=>r.primaryPalette,tone:r=>me(r)?40:90,isBackground:!0,background:r=>y.highestSurface(r),contrastCurve:new R(1,1,3,4.5),toneDeltaPair:r=>new Pe(y.primaryFixed,y.primaryFixedDim,10,"lighter",!0)});y.primaryFixedDim=D.fromPalette({name:"primary_fixed_dim",palette:r=>r.primaryPalette,tone:r=>me(r)?30:80,isBackground:!0,background:r=>y.highestSurface(r),contrastCurve:new R(1,1,3,4.5),toneDeltaPair:r=>new Pe(y.primaryFixed,y.primaryFixedDim,10,"lighter",!0)});y.onPrimaryFixed=D.fromPalette({name:"on_primary_fixed",palette:r=>r.primaryPalette,tone:r=>me(r)?100:10,background:r=>y.primaryFixedDim,secondBackground:r=>y.primaryFixed,contrastCurve:new R(4.5,7,11,21)});y.onPrimaryFixedVariant=D.fromPalette({name:"on_primary_fixed_variant",palette:r=>r.primaryPalette,tone:r=>me(r)?90:30,background:r=>y.primaryFixedDim,secondBackground:r=>y.primaryFixed,contrastCurve:new R(3,4.5,7,11)});y.secondaryFixed=D.fromPalette({name:"secondary_fixed",palette:r=>r.secondaryPalette,tone:r=>me(r)?80:90,isBackground:!0,background:r=>y.highestSurface(r),contrastCurve:new R(1,1,3,4.5),toneDeltaPair:r=>new Pe(y.secondaryFixed,y.secondaryFixedDim,10,"lighter",!0)});y.secondaryFixedDim=D.fromPalette({name:"secondary_fixed_dim",palette:r=>r.secondaryPalette,tone:r=>me(r)?70:80,isBackground:!0,background:r=>y.highestSurface(r),contrastCurve:new R(1,1,3,4.5),toneDeltaPair:r=>new Pe(y.secondaryFixed,y.secondaryFixedDim,10,"lighter",!0)});y.onSecondaryFixed=D.fromPalette({name:"on_secondary_fixed",palette:r=>r.secondaryPalette,tone:r=>10,background:r=>y.secondaryFixedDim,secondBackground:r=>y.secondaryFixed,contrastCurve:new R(4.5,7,11,21)});y.onSecondaryFixedVariant=D.fromPalette({name:"on_secondary_fixed_variant",palette:r=>r.secondaryPalette,tone:r=>me(r)?25:30,background:r=>y.secondaryFixedDim,secondBackground:r=>y.secondaryFixed,contrastCurve:new R(3,4.5,7,11)});y.tertiaryFixed=D.fromPalette({name:"tertiary_fixed",palette:r=>r.tertiaryPalette,tone:r=>me(r)?40:90,isBackground:!0,background:r=>y.highestSurface(r),contrastCurve:new R(1,1,3,4.5),toneDeltaPair:r=>new Pe(y.tertiaryFixed,y.tertiaryFixedDim,10,"lighter",!0)});y.tertiaryFixedDim=D.fromPalette({name:"tertiary_fixed_dim",palette:r=>r.tertiaryPalette,tone:r=>me(r)?30:80,isBackground:!0,background:r=>y.highestSurface(r),contrastCurve:new R(1,1,3,4.5),toneDeltaPair:r=>new Pe(y.tertiaryFixed,y.tertiaryFixedDim,10,"lighter",!0)});y.onTertiaryFixed=D.fromPalette({name:"on_tertiary_fixed",palette:r=>r.tertiaryPalette,tone:r=>me(r)?100:10,background:r=>y.tertiaryFixedDim,secondBackground:r=>y.tertiaryFixed,contrastCurve:new R(4.5,7,11,21)});y.onTertiaryFixedVariant=D.fromPalette({name:"on_tertiary_fixed_variant",palette:r=>r.tertiaryPalette,tone:r=>me(r)?90:30,background:r=>y.tertiaryFixedDim,secondBackground:r=>y.tertiaryFixed,contrastCurve:new R(3,4.5,7,11)});var yn=class r{static of(t){return new r(t,!1)}static contentOf(t){return new r(t,!0)}static fromColors(t){return r.createPaletteFromColors(!1,t)}static contentFromColors(t){return r.createPaletteFromColors(!0,t)}static createPaletteFromColors(t,e){let n=new r(e.primary,t);if(e.secondary){let i=new r(e.secondary,t);n.a2=i.a1}if(e.tertiary){let i=new r(e.tertiary,t);n.a3=i.a1}if(e.error){let i=new r(e.error,t);n.error=i.a1}if(e.neutral){let i=new r(e.neutral,t);n.n1=i.n1}if(e.neutralVariant){let i=new r(e.neutralVariant,t);n.n2=i.n2}return n}constructor(t,e){let n=ke.fromInt(t),i=n.hue,s=n.chroma;e?(this.a1=re.fromHueAndChroma(i,s),this.a2=re.fromHueAndChroma(i,s/3),this.a3=re.fromHueAndChroma(i+60,s/2),this.n1=re.fromHueAndChroma(i,Math.min(s/12,4)),this.n2=re.fromHueAndChroma(i,Math.min(s/6,8))):(this.a1=re.fromHueAndChroma(i,Math.max(48,s)),this.a2=re.fromHueAndChroma(i,16),this.a3=re.fromHueAndChroma(i+60,24),this.n1=re.fromHueAndChroma(i,4),this.n2=re.fromHueAndChroma(i,8)),this.error=re.fromHueAndChroma(25,84)}};function is(r){let t=sl(r),e=ll(r),n=cl(r),i=[t.toString(16),e.toString(16),n.toString(16)];for(let[s,u]of i.entries())u.length===1&&(i[s]="0"+u);return"#"+i.join("")}function ul(r){r=r.replace("#","");let t=r.length===3,e=r.length===6,n=r.length===8;if(!t&&!e&&!n)throw new Error("unexpected hex "+r);let i=0,s=0,u=0;return t?(i=sr(r.slice(0,1).repeat(2)),s=sr(r.slice(1,2).repeat(2)),u=sr(r.slice(2,3).repeat(2))):e?(i=sr(r.slice(0,2)),s=sr(r.slice(2,4)),u=sr(r.slice(4,6))):n&&(i=sr(r.slice(2,4)),s=sr(r.slice(4,6)),u=sr(r.slice(6,8))),(255<<24|(i&255)<<16|(s&255)<<8|u&255)>>>0}function sr(r){return parseInt(r,16)}var Ro=class r{constructor(){this.content=""}static create(){return new r}add(t,e){let n=`  ${t}: ${e};
`;return this.content+=n,this}addFromArgb(t,e){return this.add(`--u-color-${t}`,is(e)),this}addLightAndDarkFromArgb(t,e,n){return this.add(`--u-color-${t}`,`light-dark(${is(e)}, ${is(n)})`),this}build(){return this.content}};var om=[{name:"surface",lightTone:98,darkTone:6},{name:"surface-bright",lightTone:98,darkTone:24},{name:"surface-dim",lightTone:87,darkTone:6},{name:"surface-container-lowest",lightTone:100,darkTone:4},{name:"surface-container-low",lightTone:96,darkTone:10},{name:"surface-container",lightTone:94,darkTone:12},{name:"surface-container-high",lightTone:92,darkTone:17},{name:"surface-container-highest",lightTone:90,darkTone:22},{name:"on-surface",lightTone:10,darkTone:90},{name:"light",fixedTone:98},{name:"on-light",fixedTone:10},{name:"dark",fixedTone:6},{name:"on-dark",fixedTone:90},{name:"scrim",fixedTone:0},{name:"shadow",fixedTone:0}],am=[{name:"surface-variant",lightTone:90,darkTone:30},{name:"on-surface-variant",lightTone:30,darkTone:80},{name:"outline",lightTone:50,darkTone:60},{name:"outline-variant",lightTone:80,darkTone:30}];var vf=(r,t)=>`${r} {
${t}}`,sm=class r{#e;constructor(t){this.colors=[],this.partial=!1,this.cssClass=null,this.#e=yn.of(ul(t)),this.addColorFromPalette("primary",this.#e.a1)}static create(t){return new r(t)}static createPartial(t){let e=new r(t);return e.partial=!0,e}addColorFromHex(t,e){let n=re.fromInt(ul(e));return this.addColorFromPalette(t,n),this}addColorFromPalette(t,e){return this.colors.push({name:t,lightTone:40,darkTone:80,tonalPalette:e}),this.colors.push({name:`on-${t}`,lightTone:100,darkTone:20,tonalPalette:e}),this.colors.push({name:`${t}-container`,lightTone:90,darkTone:30,tonalPalette:e}),this.colors.push({name:`on-${t}-container`,lightTone:10,darkTone:90,tonalPalette:e}),this.colors.push({name:`${t}-fixed`,fixedTone:90,tonalPalette:e}),this.colors.push({name:`${t}-fixed-dim`,fixedTone:80,tonalPalette:e}),this.colors.push({name:`on-${t}-fixed`,fixedTone:10,tonalPalette:e}),this.colors.push({name:`on-${t}-fixed-variant`,fixedTone:30,tonalPalette:e}),this}addStaticColor(t,e,n=80){let i=re.fromInt(ul(e));return this.colors.push({name:t,fixedTone:n,tonalPalette:i}),this.colors.push({name:`on-${t}`,fixedTone:15,tonalPalette:i}),this.colors.push({name:`${t}-container`,fixedTone:90,tonalPalette:i}),this.colors.push({name:`on-${t}-container`,fixedTone:15,tonalPalette:i}),this}setCssClass(t){return this.cssClass=t,this}ensureCssClassStartsWithDot(){!this.cssClass||this.cssClass.startsWith(".")||(this.cssClass=`.${this.cssClass}`)}ensureThemeColors(){this.colors.find(t=>t.name==="secondary")||this.addColorFromPalette("secondary",this.#e.a2),this.colors.find(t=>t.name==="tertiary")||this.addColorFromPalette("tertiary",this.#e.a3)}ensureStatusColors(){this.colors.find(t=>t.name==="success")||this.addStaticColor("success","#198754",60),this.colors.find(t=>t.name==="info")||this.addStaticColor("info","#0dcaf0"),this.colors.find(t=>t.name==="warning")||this.addStaticColor("warning","#ffc107"),this.colors.find(t=>t.name==="error")||this.addColorFromHex("error","#b3261e")}getNeutralVariables(){let t=Ro.create();return this.addColors(t,om,this.#e.n1),t.add("--u-color-body","var(--u-color-surface)").add("--u-color-inverse-body","var(--u-color-inverse-surface)").add("--u-color-on-body","var(--u-color-on-surface)").add("--u-color-on-inverse-body","var(--u-color-on-inverse-surface)"),t.build()}getNeutralVariantVariables(){let t=Ro.create();return this.addColors(t,am,this.#e.n2),t.build()}getColorVariables(t){let e=Ro.create();return this.addToneColor(e,t,t.tonalPalette),e.build()}getColorsVariables(){let t="";for(let e of this.colors)t+=this.getColorVariables(e);return t+=this.getNeutralVariables(),t+=this.getNeutralVariantVariables(),t}addColors(t,e,n){for(let i of e)this.addToneColor(t,i,n)}addToneColor(t,e,n){if(e.fixedTone!==void 0){t.addFromArgb(e.name,n.tone(e.fixedTone));return}let i=`inverse-${e.name}`.replace("inverse-on","on-inverse");if(t.addLightAndDarkFromArgb(e.name,n.tone(e.lightTone),n.tone(e.darkTone)).addLightAndDarkFromArgb(i,n.tone(e.darkTone),n.tone(e.lightTone)),e.name==="surface"||e.name==="on-surface"){let s=e.name.startsWith("on-")?"on-":"";t.addFromArgb(`${s}light-surface`,n.tone(e.lightTone)),t.addFromArgb(`${s}dark-surface`,n.tone(e.darkTone))}}build(){this.ensureCssClassStartsWithDot();let t=this.cssClass??":root";return this.ensureThemeColors(),this.partial||this.ensureStatusColors(),`${vf(t,this.getColorsVariables())}
`}};export{vt as a,au as b,fr as c,sm as d};
