import{a as v,b as xl,c as _l,d as p,e as Yt,f as wl,g as Te,h as T,i as Cl,j as Hr,k as A}from"./chunk-HDWFW7SF.js";import{j as n}from"./chunk-GNK3CTVM.js";import{a as U,b as J,e as l,f as m,g as h,h as u,i as at}from"./chunk-76XQYYO4.js";var y=e=>(r,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(e,r)}):customElements.define(e,r)};var Vd={attribute:!0,type:String,converter:xl,reflect:!1,hasChanged:_l},qd=(e=Vd,r,t)=>{let{kind:o,metadata:i}=t,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(t.name,e),o==="accessor"){let{name:c}=t;return{set(f){let x=r.get.call(this);r.set.call(this,f),this.requestUpdate(c,x,e)},init(f){return f!==void 0&&this.C(c,void 0,e,f),f}}}if(o==="setter"){let{name:c}=t;return function(f){let x=this[c];r.call(this,f),this.requestUpdate(c,x,e)}}throw Error("Unsupported decorator location: "+o)};function d(e){return(r,t)=>typeof t=="object"?qd(e,r,t):((o,i,a)=>{let c=i.hasOwnProperty(a);return i.constructor.createProperty(a,o),c?Object.getOwnPropertyDescriptor(i,a):void 0})(e,r,t)}function S(e){return d(J(U({},e),{state:!0,attribute:!1}))}var Ee=(e,r,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof r!="object"&&Object.defineProperty(e,r,t),t);function k(e,r){return(t,o,i)=>{let a=c=>c.renderRoot?.querySelector(e)??null;if(r){let{get:c,set:f}=typeof o=="object"?t:i??(()=>{let x=Symbol();return{get(){return this[x]},set(_){this[x]=_}}})();return Ee(t,o,{get(){let x=c.call(this);return x===void 0&&(x=a(this),(x!==null||this.hasUpdated)&&f.call(this,x)),x}})}return Ee(t,o,{get(){return a(this)}})}}var jd;function kl(e){return(r,t)=>Ee(r,t,{get(){return(this.renderRoot??(jd??=document.createDocumentFragment())).querySelectorAll(e)}})}function mt(e){return(r,t)=>{let{slot:o,selector:i}=e??{},a="slot"+(o?`[name=${o}]`:":not([name])");return Ee(r,t,{get(){let c=this.renderRoot?.querySelector(a),f=c?.assignedElements(e)??[];return i===void 0?f:f.filter(x=>x.matches(i))}})}}var G=v`
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
`;var Wd={dialog:{alertDefaults:{acknowledgeButton:{label:"Ok",variant:"text"}},confirmDefaults:{confirmButton:{label:"Ok",variant:"text"},cancelButton:{label:"Cancel",variant:"text"}}},navigationDrawer:{useSwiperJs:!1}},Ve=Wd;function Tl(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,o=Array(r);t<r;t++)o[t]=e[t];return o}function Gd(e){if(Array.isArray(e))return e}function Yd(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var o,i,a,c,f=[],x=!0,_=!1;try{if(a=(t=t.call(e)).next,r!==0)for(;!(x=(o=a.call(t)).done)&&(f.push(o.value),f.length!==r);x=!0);}catch(w){_=!0,i=w}finally{try{if(!x&&t.return!=null&&(c=t.return(),Object(c)!==c))return}finally{if(_)throw i}}return f}}function Xd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kd(e,r){return Gd(e)||Yd(e,r)||Zd(e,r)||Xd()}function Zd(e,r){if(e){if(typeof e=="string")return Tl(e,r);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Tl(e,r):void 0}}var Bl=Object.entries,El=Object.setPrototypeOf,Jd=Object.isFrozen,Qd=Object.getPrototypeOf,th=Object.getOwnPropertyDescriptor,Mt=Object.freeze,te=Object.seal,Gr=Object.create,Nl=typeof Reflect<"u"&&Reflect,Ja=Nl.apply,Qa=Nl.construct;Mt||(Mt=function(r){return r});te||(te=function(r){return r});Ja||(Ja=function(r,t){for(var o=arguments.length,i=new Array(o>2?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];return r.apply(t,i)});Qa||(Qa=function(r){for(var t=arguments.length,o=new Array(t>1?t-1:0),i=1;i<t;i++)o[i-1]=arguments[i];return new r(...o)});var Vr=yt(Array.prototype.forEach),eh=yt(Array.prototype.lastIndexOf),Il=yt(Array.prototype.pop),qr=yt(Array.prototype.push),rh=yt(Array.prototype.splice),Lt=Array.isArray,Ni=yt(String.prototype.toLowerCase),Ga=yt(String.prototype.toString),Al=yt(String.prototype.match),jr=yt(String.prototype.replace),Sl=yt(String.prototype.indexOf),oh=yt(String.prototype.trim),ih=yt(Number.prototype.toString),nh=yt(Boolean.prototype.toString),Dl=typeof BigInt>"u"?null:yt(BigInt.prototype.toString),Pl=typeof Symbol>"u"?null:yt(Symbol.prototype.toString),ut=yt(Object.prototype.hasOwnProperty),Bi=yt(Object.prototype.toString),Tt=yt(RegExp.prototype.test),$n=ah(TypeError);function yt(e){return function(r){r instanceof RegExp&&(r.lastIndex=0);for(var t=arguments.length,o=new Array(t>1?t-1:0),i=1;i<t;i++)o[i-1]=arguments[i];return Ja(e,r,o)}}function ah(e){return function(){for(var r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];return Qa(e,t)}}function $(e,r){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ni;if(El&&El(e,null),!Lt(r))return e;let o=r.length;for(;o--;){let i=r[o];if(typeof i=="string"){let a=t(i);a!==i&&(Jd(r)||(r[o]=a),i=a)}e[i]=!0}return e}function sh(e){for(let r=0;r<e.length;r++)ut(e,r)||(e[r]=null);return e}function Ht(e){let r=Gr(null);for(let o of Bl(e)){var t=Kd(o,2);let i=t[0],a=t[1];ut(e,i)&&(Lt(a)?r[i]=sh(a):a&&typeof a=="object"&&a.constructor===Object?r[i]=Ht(a):r[i]=a)}return r}function lh(e){switch(typeof e){case"string":return e;case"number":return ih(e);case"boolean":return nh(e);case"bigint":return Dl?Dl(e):"0";case"symbol":return Pl?Pl(e):"Symbol()";case"undefined":return Bi(e);case"function":case"object":{if(e===null)return Bi(e);let r=e,t=ur(r,"toString");if(typeof t=="function"){let o=t(r);return typeof o=="string"?o:Bi(o)}return Bi(e)}default:return Bi(e)}}function ur(e,r){for(;e!==null;){let o=th(e,r);if(o){if(o.get)return yt(o.get);if(typeof o.value=="function")return yt(o.value)}e=Qd(e)}function t(){return null}return t}function ch(e){try{return Tt(e,""),!0}catch{return!1}}var Ll=Mt(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Ya=Mt(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Xa=Mt(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),uh=Mt(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ka=Mt(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),dh=Mt(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Ml=Mt(["#text"]),Rl=Mt(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),Za=Mt(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),zl=Mt(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Bn=Mt(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),hh=te(/{{[\w\W]*|^[\w\W]*}}/g),ph=te(/<%[\w\W]*|^[\w\W]*%>/g),mh=te(/\${[\w\W]*/g),fh=te(/^data-[\-\w.\u00B7-\uFFFF]+$/),gh=te(/^aria-[\-\w]+$/),Ol=te(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),vh=te(/^(?:\w+script|data):/i),bh=te(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),yh=te(/^html$/i),xh=te(/^[a-z][.\w]*(-[.\w]+)+$/i),Wr={element:1,text:3,progressingInstruction:7,comment:8,document:9},_h=function(){return typeof window>"u"?null:window},wh=function(r,t){if(typeof r!="object"||typeof r.createPolicy!="function")return null;let o=null,i="data-tt-policy-suffix";t&&t.hasAttribute(i)&&(o=t.getAttribute(i));let a="dompurify"+(o?"#"+o:"");try{return r.createPolicy(a,{createHTML(c){return c},createScriptURL(c){return c}})}catch{return console.warn("TrustedTypes policy "+a+" could not be created."),null}},$l=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Fl(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:_h(),r=P=>Fl(P);if(r.version="3.4.5",r.removed=[],!e||!e.document||e.document.nodeType!==Wr.document||!e.Element)return r.isSupported=!1,r;let t=e.document,o=t,i=o.currentScript,a=e.DocumentFragment,c=e.HTMLTemplateElement,f=e.Node,x=e.Element,_=e.NodeFilter,w=e.NamedNodeMap,E=w===void 0?e.NamedNodeMap||e.MozNamedAttrMap:w,I=e.HTMLFormElement,z=e.DOMParser,O=e.trustedTypes,L=x.prototype,K=ur(L,"cloneNode"),rt=ur(L,"remove"),ot=ur(L,"nextSibling"),V=ur(L,"childNodes"),ct=ur(L,"parentNode"),N=f&&f.prototype?ur(f.prototype,"nodeType"):null;if(typeof c=="function"){let P=t.createElement("template");P.content&&P.content.ownerDocument&&(t=P.content.ownerDocument)}let W,X="",et=t,ht=et.implementation,At=et.createNodeIterator,gt=et.createDocumentFragment,he=et.getElementsByTagName,Qt=o.importNode,it=$l();r.isSupported=typeof Bl=="function"&&typeof ct=="function"&&ht&&ht.createHTMLDocument!==void 0;let Ft=hh,we=ph,Gt=mh,zr=fh,Pi=gh,Li=vh,Or=bh,Mi=xh,ar=Ol,pt=null,Ri=$({},[...Ll,...Ya,...Xa,...Ka,...Ml]),_t=null,Dn=$({},[...Rl,...Za,...zl,...Bn]),nt=Object.seal(Gr(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),sr=null,$r=null,Fe=Object.seal(Gr(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),Qs=!0,Ma=!0,tl=!1,el=!0,Ue=!1,zi=!0,lr=!1,Ra=!1,za=!1,Br=!1,Pn=!1,Ln=!1,rl=!0,ol=!1,il="user-content-",Oa=!0,Oi=!1,Nr={},pe=null,$a=$({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),nl=null,al=$({},["audio","video","img","source","image","track"]),Ba=null,sl=$({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Mn="http://www.w3.org/1998/Math/MathML",Rn="http://www.w3.org/2000/svg",me="http://www.w3.org/1999/xhtml",Fr=me,Na=!1,Fa=null,Od=$({},[Mn,Rn,me],Ga),Ua=$({},["mi","mo","mn","ms","mtext"]),Ha=$({},["annotation-xml"]),$d=$({},["title","style","font","a","script"]),$i=null,Bd=["application/xhtml+xml","text/html"],Nd="text/html",wt=null,Ur=null,Fd=t.createElement("form"),ll=function(s){return s instanceof RegExp||s instanceof Function},Va=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(Ur&&Ur===s)return;(!s||typeof s!="object")&&(s={}),s=Ht(s),$i=Bd.indexOf(s.PARSER_MEDIA_TYPE)===-1?Nd:s.PARSER_MEDIA_TYPE,wt=$i==="application/xhtml+xml"?Ga:Ni,pt=ut(s,"ALLOWED_TAGS")&&Lt(s.ALLOWED_TAGS)?$({},s.ALLOWED_TAGS,wt):Ri,_t=ut(s,"ALLOWED_ATTR")&&Lt(s.ALLOWED_ATTR)?$({},s.ALLOWED_ATTR,wt):Dn,Fa=ut(s,"ALLOWED_NAMESPACES")&&Lt(s.ALLOWED_NAMESPACES)?$({},s.ALLOWED_NAMESPACES,Ga):Od,Ba=ut(s,"ADD_URI_SAFE_ATTR")&&Lt(s.ADD_URI_SAFE_ATTR)?$(Ht(sl),s.ADD_URI_SAFE_ATTR,wt):sl,nl=ut(s,"ADD_DATA_URI_TAGS")&&Lt(s.ADD_DATA_URI_TAGS)?$(Ht(al),s.ADD_DATA_URI_TAGS,wt):al,pe=ut(s,"FORBID_CONTENTS")&&Lt(s.FORBID_CONTENTS)?$({},s.FORBID_CONTENTS,wt):$a,sr=ut(s,"FORBID_TAGS")&&Lt(s.FORBID_TAGS)?$({},s.FORBID_TAGS,wt):Ht({}),$r=ut(s,"FORBID_ATTR")&&Lt(s.FORBID_ATTR)?$({},s.FORBID_ATTR,wt):Ht({}),Nr=ut(s,"USE_PROFILES")?s.USE_PROFILES&&typeof s.USE_PROFILES=="object"?Ht(s.USE_PROFILES):s.USE_PROFILES:!1,Qs=s.ALLOW_ARIA_ATTR!==!1,Ma=s.ALLOW_DATA_ATTR!==!1,tl=s.ALLOW_UNKNOWN_PROTOCOLS||!1,el=s.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ue=s.SAFE_FOR_TEMPLATES||!1,zi=s.SAFE_FOR_XML!==!1,lr=s.WHOLE_DOCUMENT||!1,Br=s.RETURN_DOM||!1,Pn=s.RETURN_DOM_FRAGMENT||!1,Ln=s.RETURN_TRUSTED_TYPE||!1,za=s.FORCE_BODY||!1,rl=s.SANITIZE_DOM!==!1,ol=s.SANITIZE_NAMED_PROPS||!1,Oa=s.KEEP_CONTENT!==!1,Oi=s.IN_PLACE||!1,ar=ch(s.ALLOWED_URI_REGEXP)?s.ALLOWED_URI_REGEXP:Ol,Fr=typeof s.NAMESPACE=="string"?s.NAMESPACE:me,Ua=ut(s,"MATHML_TEXT_INTEGRATION_POINTS")&&s.MATHML_TEXT_INTEGRATION_POINTS&&typeof s.MATHML_TEXT_INTEGRATION_POINTS=="object"?Ht(s.MATHML_TEXT_INTEGRATION_POINTS):$({},["mi","mo","mn","ms","mtext"]),Ha=ut(s,"HTML_INTEGRATION_POINTS")&&s.HTML_INTEGRATION_POINTS&&typeof s.HTML_INTEGRATION_POINTS=="object"?Ht(s.HTML_INTEGRATION_POINTS):$({},["annotation-xml"]);let b=ut(s,"CUSTOM_ELEMENT_HANDLING")&&s.CUSTOM_ELEMENT_HANDLING&&typeof s.CUSTOM_ELEMENT_HANDLING=="object"?Ht(s.CUSTOM_ELEMENT_HANDLING):Gr(null);if(nt=Gr(null),ut(b,"tagNameCheck")&&ll(b.tagNameCheck)&&(nt.tagNameCheck=b.tagNameCheck),ut(b,"attributeNameCheck")&&ll(b.attributeNameCheck)&&(nt.attributeNameCheck=b.attributeNameCheck),ut(b,"allowCustomizedBuiltInElements")&&typeof b.allowCustomizedBuiltInElements=="boolean"&&(nt.allowCustomizedBuiltInElements=b.allowCustomizedBuiltInElements),Ue&&(Ma=!1),Pn&&(Br=!0),Nr&&(pt=$({},Ml),_t=Gr(null),Nr.html===!0&&($(pt,Ll),$(_t,Rl)),Nr.svg===!0&&($(pt,Ya),$(_t,Za),$(_t,Bn)),Nr.svgFilters===!0&&($(pt,Xa),$(_t,Za),$(_t,Bn)),Nr.mathMl===!0&&($(pt,Ka),$(_t,zl),$(_t,Bn))),Fe.tagCheck=null,Fe.attributeCheck=null,ut(s,"ADD_TAGS")&&(typeof s.ADD_TAGS=="function"?Fe.tagCheck=s.ADD_TAGS:Lt(s.ADD_TAGS)&&(pt===Ri&&(pt=Ht(pt)),$(pt,s.ADD_TAGS,wt))),ut(s,"ADD_ATTR")&&(typeof s.ADD_ATTR=="function"?Fe.attributeCheck=s.ADD_ATTR:Lt(s.ADD_ATTR)&&(_t===Dn&&(_t=Ht(_t)),$(_t,s.ADD_ATTR,wt))),ut(s,"ADD_URI_SAFE_ATTR")&&Lt(s.ADD_URI_SAFE_ATTR)&&$(Ba,s.ADD_URI_SAFE_ATTR,wt),ut(s,"FORBID_CONTENTS")&&Lt(s.FORBID_CONTENTS)&&(pe===$a&&(pe=Ht(pe)),$(pe,s.FORBID_CONTENTS,wt)),ut(s,"ADD_FORBID_CONTENTS")&&Lt(s.ADD_FORBID_CONTENTS)&&(pe===$a&&(pe=Ht(pe)),$(pe,s.ADD_FORBID_CONTENTS,wt)),Oa&&(pt["#text"]=!0),lr&&$(pt,["html","head","body"]),pt.table&&($(pt,["tbody"]),delete sr.tbody),s.TRUSTED_TYPES_POLICY){if(typeof s.TRUSTED_TYPES_POLICY.createHTML!="function")throw $n('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof s.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw $n('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');W=s.TRUSTED_TYPES_POLICY,X=W.createHTML("")}else W===void 0&&(W=wh(O,i)),W!==null&&typeof X=="string"&&(X=W.createHTML(""));Mt&&Mt(s),Ur=s},cl=$({},[...Ya,...Xa,...uh]),ul=$({},[...Ka,...dh]),Ud=function(s){let b=ct(s);(!b||!b.tagName)&&(b={namespaceURI:Fr,tagName:"template"});let C=Ni(s.tagName),F=Ni(b.tagName);return Fa[s.namespaceURI]?s.namespaceURI===Rn?b.namespaceURI===me?C==="svg":b.namespaceURI===Mn?C==="svg"&&(F==="annotation-xml"||Ua[F]):!!cl[C]:s.namespaceURI===Mn?b.namespaceURI===me?C==="math":b.namespaceURI===Rn?C==="math"&&Ha[F]:!!ul[C]:s.namespaceURI===me?b.namespaceURI===Rn&&!Ha[F]||b.namespaceURI===Mn&&!Ua[F]?!1:!ul[C]&&($d[C]||!cl[C]):!!($i==="application/xhtml+xml"&&Fa[s.namespaceURI]):!1},ie=function(s){qr(r.removed,{element:s});try{ct(s).removeChild(s)}catch{rt(s)}},cr=function(s,b){try{qr(r.removed,{attribute:b.getAttributeNode(s),from:b})}catch{qr(r.removed,{attribute:null,from:b})}if(b.removeAttribute(s),s==="is")if(Br||Pn)try{ie(b)}catch{}else try{b.setAttribute(s,"")}catch{}},dl=function(s){let b=null,C=null;if(za)s="<remove></remove>"+s;else{let bt=Al(s,/^[\r\n\t ]+/);C=bt&&bt[0]}$i==="application/xhtml+xml"&&Fr===me&&(s='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+s+"</body></html>");let F=W?W.createHTML(s):s;if(Fr===me)try{b=new z().parseFromString(F,$i)}catch{}if(!b||!b.documentElement){b=ht.createDocument(Fr,"template",null);try{b.documentElement.innerHTML=Na?X:F}catch{}}let vt=b.body||b.documentElement;return s&&C&&vt.insertBefore(t.createTextNode(C),vt.childNodes[0]||null),Fr===me?he.call(b,lr?"html":"body")[0]:lr?b.documentElement:vt},hl=function(s){return At.call(s.ownerDocument||s,s,_.SHOW_ELEMENT|_.SHOW_COMMENT|_.SHOW_TEXT|_.SHOW_PROCESSING_INSTRUCTION|_.SHOW_CDATA_SECTION,null)},pl=function(s){s.normalize();let b=At.call(s.ownerDocument||s,s,_.SHOW_TEXT|_.SHOW_COMMENT|_.SHOW_CDATA_SECTION|_.SHOW_PROCESSING_INSTRUCTION,null),C=b.nextNode();for(;C;){let F=C.data;Vr([Ft,we,Gt],vt=>{F=jr(F,vt," ")}),C.data=F,C=b.nextNode()}},qa=function(s){return s instanceof I&&(typeof s.nodeName!="string"||typeof s.textContent!="string"||typeof s.removeChild!="function"||!(s.attributes instanceof E)||typeof s.removeAttribute!="function"||typeof s.setAttribute!="function"||typeof s.namespaceURI!="string"||typeof s.insertBefore!="function"||typeof s.hasChildNodes!="function")},zn=function(s){if(!N||typeof s!="object"||s===null)return!1;try{return typeof N(s)=="number"}catch{return!1}};function Ce(P,s,b){Vr(P,C=>{C.call(r,s,b,Ur)})}let ml=function(s){let b=null;if(Ce(it.beforeSanitizeElements,s,null),qa(s))return ie(s),!0;let C=wt(s.nodeName);if(Ce(it.uponSanitizeElement,s,{tagName:C,allowedTags:pt}),zi&&s.hasChildNodes()&&!zn(s.firstElementChild)&&Tt(/<[/\w!]/g,s.innerHTML)&&Tt(/<[/\w!]/g,s.textContent)||zi&&s.namespaceURI===me&&C==="style"&&zn(s.firstElementChild)||s.nodeType===Wr.progressingInstruction||zi&&s.nodeType===Wr.comment&&Tt(/<[/\w]/g,s.data))return ie(s),!0;if(sr[C]||!(Fe.tagCheck instanceof Function&&Fe.tagCheck(C))&&!pt[C]){if(!sr[C]&&gl(C)&&(nt.tagNameCheck instanceof RegExp&&Tt(nt.tagNameCheck,C)||nt.tagNameCheck instanceof Function&&nt.tagNameCheck(C)))return!1;if(Oa&&!pe[C]){let F=ct(s)||s.parentNode,vt=V(s)||s.childNodes;if(vt&&F){let bt=vt.length;for(let Ut=bt-1;Ut>=0;--Ut){let He=K(vt[Ut],!0);F.insertBefore(He,ot(s))}}}return ie(s),!0}return s instanceof x&&!Ud(s)||(C==="noscript"||C==="noembed"||C==="noframes")&&Tt(/<\/no(script|embed|frames)/i,s.innerHTML)?(ie(s),!0):(Ue&&s.nodeType===Wr.text&&(b=s.textContent,Vr([Ft,we,Gt],F=>{b=jr(b,F," ")}),s.textContent!==b&&(qr(r.removed,{element:s.cloneNode()}),s.textContent=b)),Ce(it.afterSanitizeElements,s,null),!1)},fl=function(s,b,C){if($r[b]||rl&&(b==="id"||b==="name")&&(C in t||C in Fd))return!1;let F=_t[b]||Fe.attributeCheck instanceof Function&&Fe.attributeCheck(b,s);if(!(Ma&&!$r[b]&&Tt(zr,b))){if(!(Qs&&Tt(Pi,b))){if(!F||$r[b]){if(!(gl(s)&&(nt.tagNameCheck instanceof RegExp&&Tt(nt.tagNameCheck,s)||nt.tagNameCheck instanceof Function&&nt.tagNameCheck(s))&&(nt.attributeNameCheck instanceof RegExp&&Tt(nt.attributeNameCheck,b)||nt.attributeNameCheck instanceof Function&&nt.attributeNameCheck(b,s))||b==="is"&&nt.allowCustomizedBuiltInElements&&(nt.tagNameCheck instanceof RegExp&&Tt(nt.tagNameCheck,C)||nt.tagNameCheck instanceof Function&&nt.tagNameCheck(C))))return!1}else if(!Ba[b]){if(!Tt(ar,jr(C,Or,""))){if(!((b==="src"||b==="xlink:href"||b==="href")&&s!=="script"&&Sl(C,"data:")===0&&nl[s])){if(!(tl&&!Tt(Li,jr(C,Or,"")))){if(C)return!1}}}}}}return!0},Hd=$({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),gl=function(s){return!Hd[Ni(s)]&&Tt(Mi,s)},vl=function(s){Ce(it.beforeSanitizeAttributes,s,null);let b=s.attributes;if(!b||qa(s))return;let C={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:_t,forceKeepAttr:void 0},F=b.length;for(;F--;){let vt=b[F],bt=vt.name,Ut=vt.namespaceURI,He=vt.value,ke=wt(bt),Wa=He,kt=bt==="value"?Wa:oh(Wa);if(C.attrName=ke,C.attrValue=kt,C.keepAttr=!0,C.forceKeepAttr=void 0,Ce(it.uponSanitizeAttribute,s,C),kt=C.attrValue,ol&&(ke==="id"||ke==="name")&&Sl(kt,il)!==0&&(cr(bt,s),kt=il+kt),zi&&Tt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,kt)){cr(bt,s);continue}if(ke==="attributename"&&Al(kt,"href")){cr(bt,s);continue}if(C.forceKeepAttr)continue;if(!C.keepAttr){cr(bt,s);continue}if(!el&&Tt(/\/>/i,kt)){cr(bt,s);continue}Ue&&Vr([Ft,we,Gt],yl=>{kt=jr(kt,yl," ")});let bl=wt(s.nodeName);if(!fl(bl,ke,kt)){cr(bt,s);continue}if(W&&typeof O=="object"&&typeof O.getAttributeType=="function"&&!Ut)switch(O.getAttributeType(bl,ke)){case"TrustedHTML":{kt=W.createHTML(kt);break}case"TrustedScriptURL":{kt=W.createScriptURL(kt);break}}if(kt!==Wa)try{Ut?s.setAttributeNS(Ut,bt,kt):s.setAttribute(bt,kt),qa(s)?ie(s):Il(r.removed)}catch{cr(bt,s)}}Ce(it.afterSanitizeAttributes,s,null)},ja=function(s){let b=null,C=hl(s);for(Ce(it.beforeSanitizeShadowDOM,s,null);b=C.nextNode();)Ce(it.uponSanitizeShadowNode,b,null),ml(b),vl(b),b.content instanceof a&&ja(b.content);Ce(it.afterSanitizeShadowDOM,s,null)},On=function(s){if(s.nodeType===Wr.element&&s.shadowRoot instanceof a){let F=s.shadowRoot;On(F),ja(F)}let b=s.childNodes;if(!b)return;let C=[];Vr(b,F=>{qr(C,F)});for(let F of C)On(F)};return r.sanitize=function(P){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},b=null,C=null,F=null,vt=null;if(Na=!P,Na&&(P="<!-->"),typeof P!="string"&&!zn(P)&&(P=lh(P),typeof P!="string"))throw $n("dirty is not a string, aborting");if(!r.isSupported)return P;if(Ra||Va(s),r.removed=[],typeof P=="string"&&(Oi=!1),Oi){let He=P.nodeName;if(typeof He=="string"){let ke=wt(He);if(!pt[ke]||sr[ke])throw $n("root node is forbidden and cannot be sanitized in-place")}On(P)}else if(zn(P))b=dl("<!---->"),C=b.ownerDocument.importNode(P,!0),C.nodeType===Wr.element&&C.nodeName==="BODY"||C.nodeName==="HTML"?b=C:b.appendChild(C),On(C);else{if(!Br&&!Ue&&!lr&&P.indexOf("<")===-1)return W&&Ln?W.createHTML(P):P;if(b=dl(P),!b)return Br?null:Ln?X:""}b&&za&&ie(b.firstChild);let bt=hl(Oi?P:b);for(;F=bt.nextNode();)ml(F),vl(F),F.content instanceof a&&ja(F.content);if(Oi)return Ue&&pl(P),P;if(Br){if(Ue&&pl(b),Pn)for(vt=gt.call(b.ownerDocument);b.firstChild;)vt.appendChild(b.firstChild);else vt=b;return(_t.shadowroot||_t.shadowrootmode)&&(vt=Qt.call(o,vt,!0)),vt}let Ut=lr?b.outerHTML:b.innerHTML;return lr&&pt["!doctype"]&&b.ownerDocument&&b.ownerDocument.doctype&&b.ownerDocument.doctype.name&&Tt(yh,b.ownerDocument.doctype.name)&&(Ut="<!DOCTYPE "+b.ownerDocument.doctype.name+`>
`+Ut),Ue&&Vr([Ft,we,Gt],He=>{Ut=jr(Ut,He," ")}),W&&Ln?W.createHTML(Ut):Ut},r.setConfig=function(){let P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Va(P),Ra=!0},r.clearConfig=function(){Ur=null,Ra=!1},r.isValidAttribute=function(P,s,b){Ur||Va({});let C=wt(P),F=wt(s);return fl(C,F,b)},r.addHook=function(P,s){typeof s=="function"&&qr(it[P],s)},r.removeHook=function(P,s){if(s!==void 0){let b=eh(it[P],s);return b===-1?void 0:rh(it[P],b,1)[0]}return Il(it[P])},r.removeHooks=function(P){it[P]=[]},r.removeAllHooks=function(){it=$l()},r}var ts=Fl();var Yr=class{#t;constructor(r){this.message=r}headline(r){return this.#t=r,this}show(){let r=document.createElement("u-dialog");return r.innerHTML=ts.sanitize(this.message),this._addHeadline(r),this._addButtons(r),this.innerShow(r)}innerShow(r){r.addEventListener("closed",()=>r.remove()),document.body.appendChild(r),r.show()}_addHeadline(r){if(!this.#t)return;let t=document.createElement("span");t.slot="headline",t.innerHTML=ts.sanitize(this.#t),r.appendChild(t)}_addButton(r,t,o){let i=document.createElement("u-button");i.variant=t.variant,i.color=t.color,i.textContent=t.label,i.slot="actions",i.addEventListener("click",o),r.appendChild(i)}};var Nn=class e extends Yr{static create(r){return new e(r)}#t;#e;confirmButton(r){return this.#t=r,this}cancelButton(r){return this.#e=r,this}_addButtons(r){this._addButton(r,U(U({},Ve.dialog.confirmDefaults.confirmButton),this.#t),()=>r.close("ok")),this._addButton(r,U(U({},Ve.dialog.confirmDefaults.cancelButton),this.#e),()=>r.close("cancel"))}innerShow(r){return super.innerShow(r),new Promise(t=>r.addEventListener("closed",()=>t(r.returnValue==="ok")))}};var Ul=v`
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
`;var Fn=class e extends Yr{static create(r){return new e(r)}#t;acknowledgeButton(r){return this.#t=r,this}_addButtons(r){this._addButton(r,U(U({},Ve.dialog.alertDefaults.acknowledgeButton),this.#t),()=>r.close())}};var Hl=v`
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
`;var Xr,Vl=(Xr=class extends A{connectedCallback(){super.connectedCallback(),this.ariaHidden="true"}},Xr.styles=Hl,Xr);Vl=n([y("u-elevation")],Vl);var ql="top-divider",jl="bottom-divider",Ie,dr,hr,st,es,Fi,Wl,Gl,Un,Hn,Yl,Xl,Kl,Kr,ee=(Kr=class extends A{constructor(){super(...arguments);m(this,st);m(this,Ie);m(this,dr);m(this,hr);m(this,Fi);h(this,Ie,!1),this.hasHeadline=!1,this.hasIcon=!1,h(this,hr,null),h(this,Fi,t=>{t.preventDefault(),this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.close()})}get open(){return l(this,Ie)}set open(t){if(l(this,Ie)!==t){if(!t){this.close();return}this.show()}}get returnValue(){return this.dialog.returnValue}get scrollContainer(){return l(this,hr)??this.content}set scrollContainer(t){l(this,hr)?.removeEventListener("scroll",u(this,st,Un)),h(this,hr,t),t.addEventListener("scroll",u(this,st,Un).bind(this)),u(this,st,Hn).call(this)}static message(t){return Fn.create(t)}static confirm(t){return Nn.create(t)}render(){return p`
      <dialog>
        <div class="scrim" @click=${u(this,st,Kl)}></div>
        <div class="container" part="container">
          <u-elevation></u-elevation>
          <div class="icon" part="icon">
            <slot
              name="icon"
              @slotchange=${u(this,st,Wl)}>
            </slot>
          </div>
          <div class="headline" part="headline">
            <slot
              name="headline"
              @slotchange=${u(this,st,Gl)}>
            </slot>
          </div>
          <div
            class="content"
            part="content"
            @scroll=${u(this,st,Un)}>
            <slot></slot>
          </div>
          <div class="actions" part="actions">
            <slot name="actions"></slot>
          </div>
        </div>
      </dialog>`}firstUpdated(t){super.firstUpdated(t),this.dialog.addEventListener("cancel",l(this,Fi))}connectedCallback(){super.connectedCallback(),this.addEventListener("submit",u(this,st,es)),setTimeout(()=>{h(this,dr,new ResizeObserver(()=>u(this,st,Hn).call(this))),l(this,dr).observe(this.content)})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("submit",u(this,st,es)),l(this,dr).disconnect(),h(this,dr,null)}show(){return at(this,null,function*(){h(this,Ie,!0),this.setAttribute("open",""),yield this.updateComplete,this.dialog.showModal(),this.querySelector("[autofocus]")?.focus(),this.content.scrollTop=0})}close(){return at(this,arguments,function*(t=this.returnValue){if(h(this,Ie,!1),this.removeAttribute("open"),yield this.updateComplete,!this.dialog.open||this.open)return;if(!this.dispatchEvent(new Event("close",{cancelable:!0}))){h(this,Ie,!0);return}this.open=!1;let i=new Promise(a=>this.container.addEventListener("animationend",()=>{a(),this.classList.remove("closing"),this.dialog.close(t),this.dispatchEvent(new Event("closed"))},{capture:!0,once:!0}));this.classList.add("closing"),yield i})}},Ie=new WeakMap,dr=new WeakMap,hr=new WeakMap,st=new WeakSet,es=function(t){let o=t.target,{submitter:i}=t;o.method!=="dialog"||!i||this.close(i.getAttribute("value")??this.returnValue)},Fi=new WeakMap,Wl=function(){this.hasIcon=this.assignedIcons.length>0},Gl=function(){this.hasHeadline=this.assignedHeadlines.length>0},Un=function(){u(this,st,Hn).call(this)},Hn=function(){u(this,st,Xl).call(this),u(this,st,Yl).call(this)},Yl=function(){if(this.scrollContainer.scrollTop+this.scrollContainer.offsetHeight>=this.scrollContainer.scrollHeight){this.content?.classList.remove(jl);return}this.content?.classList.add(jl)},Xl=function(){if(this.scrollContainer.scrollTop){this.content?.classList.add(ql);return}this.content?.classList.remove(ql)},Kl=function(){this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.close()},Kr.styles=[G,Ul],Kr);n([d({type:Boolean})],ee.prototype,"open",null);n([d({type:Boolean,attribute:"has-headline",reflect:!0})],ee.prototype,"hasHeadline",void 0);n([d({type:Boolean,attribute:"has-icon",reflect:!0})],ee.prototype,"hasIcon",void 0);n([d()],ee.prototype,"scrollContainer",null);n([k("dialog")],ee.prototype,"dialog",void 0);n([k(".scrim")],ee.prototype,"scrim",void 0);n([k(".content")],ee.prototype,"content",void 0);n([k(".container")],ee.prototype,"container",void 0);n([mt({slot:"headline",flatten:!0})],ee.prototype,"assignedHeadlines",void 0);n([mt({slot:"icon",flatten:!0})],ee.prototype,"assignedIcons",void 0);ee=n([y("u-dialog")],ee);var ne={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Zr=e=>(...r)=>({_$litDirective$:e,values:r}),qe=class{constructor(r){}get _$AU(){return this._$AM._$AU}_$AT(r,t,o){this._$Ct=r,this._$AM=t,this._$Ci=o}_$AS(r,t){return this.update(r,t)}update(r,t){return this.render(...t)}};var H=Zr(class extends qe{constructor(e){if(super(e),e.type!==ne.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(r=>e[r]).join(" ")+" "}update(e,[r]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(let o in r)r[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(r)}let t=e.element.classList;for(let o of this.st)o in r||(t.remove(o),this.st.delete(o));for(let o in r){let i=!!r[o];i===this.st.has(o)||this.nt?.has(o)||(i?(t.add(o),this.st.add(o)):(t.remove(o),this.st.delete(o)))}return Te}});var Zl=v`
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
    color: var(--u-color-inverse-primary, );
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
`;var Jl=v`
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
`;var Ql=v`
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
`;var Vn=(e,r,t=null)=>{r.bubbles&&(!e.shadowRoot||r.composed)&&r.stopPropagation();let o=Reflect.construct(r.constructor,[t??r.type,r]),i=e.dispatchEvent(o);return i||r.preventDefault(),i};var tc=v`
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
`;var rs,pr,qn=(pr=class extends A{constructor(){super(),this.isTouching=!1,this.disabled=!1}render(){return p`<div class="ripple-container"></div><slot></slot>`}connectedCallback(){super.connectedCallback(),this.attachEvents(),this.ariaHidden="true"}disconnectedCallback(){super.disconnectedCallback(),this.dettachEvents()}attachEvents(){this.addEventListener("mousedown",this.handleMouseDown),this.addEventListener("touchstart",this.handleTouchStart)}dettachEvents(){this.removeEventListener("mousedown",this.handleMouseDown),this.removeEventListener("touchstart",this.handleTouchStart)}handleMouseDown(r){this.isTouching||!this.canCreateRipple()||this.createRipple(r.clientX,r.clientY,"mouseup")}handleTouchStart(r){if(!this.canCreateRipple())return;this.isTouching=!0;let t=this.createRipple(r.touches[0].clientX,r.touches[0].clientY,"touchend");this.addEventListener("touchmove",t)}canCreateRipple(){return!this.disabled}createRipple(r=null,t=null,o=null){let i=this.rippleContainer.getBoundingClientRect();r??=i.x+this.rippleContainer.clientWidth/2,t??=i.y+this.rippleContainer.clientHeight/2;let a=document.createElement("DIV");a.classList.add("ripple"),this.rippleContainer.appendChild(a),requestAnimationFrame(()=>{let f=this.getBoundingClientRect(),_=Math.max(this.clientWidth,this.clientHeight)*2;rs._setElementSquareSizeAndCenter(a,_),a.style.setProperty("--_ripple-transition-duration",`${1080*Math.pow(_,.3)}ms`);let w=r-f.left+(_-this.rippleContainer.clientWidth)/2,E=t-f.top+(_-this.rippleContainer.clientHeight)/2;a.style.transformOrigin=`${w}px ${E}px`,a.classList.add(o?"show":"show-forced")});let c=setInterval(()=>{!a.classList.contains("dismiss")&&!a.classList.contains("show-forced")||a.getAnimations().length||(clearInterval(c),a.remove())},1e3);return o?this.createDismissEvent(a,o):null}createDismissEvent(r,t){let o=()=>{r.classList.add("dismiss"),this.isTouching=!1,this.removeEventListener("dragover",o),this.removeEventListener("mouseleave",o),window.removeEventListener(t,o)};return this.addEventListener("dragover",o),this.addEventListener("mouseleave",o),window.addEventListener(t,o),o}static _setElementSquareSizeAndCenter(r,t){r.style.top="50%",r.style.left="50%",r.style.width=`${t}px`,r.style.height=`${t}px`,r.style.marginLeft=`${-t/2}px`,r.style.marginTop=`${-t/2}px`}},rs=pr,pr.styles=tc,pr);n([d({type:Boolean,reflect:!0})],qn.prototype,"disabled",void 0);n([k(".ripple-container")],qn.prototype,"rippleContainer",void 0);qn=rs=n([y("u-ripple")],qn);var re,ec,rc,os,is,ns=class ns extends A{constructor(){super(...arguments);m(this,re);this.disabled=!1,this.renderRipple=!0,this.innerRole=null}get pathname(){return this.buttonElement?.pathname}render(){let t=typeof this.href=="string"?u(this,re,rc).call(this):u(this,re,ec).call(this),o=H(this._getContainerClasses());return p`<div class="container ${o}" part="container"> ${t}</div>`}_getContainerClasses(){return{disabled:this.disabled}}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",u(this,re,os))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",u(this,re,os))}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}getAriaLabel(){return this.ariaLabel}_handleClick(t){}};re=new WeakSet,ec=function(){return p`
      <div class="content">${this._renderContent()}</div>
      <button
        id="button"
        class="button focus-ring"
        ?disabled=${this.disabled}
        aria-label=${this.getAriaLabel()||T}
        aria-labelledby="${this.getAriaLabel()?T:"text"}"
        .role=${this.innerRole}
        type="button"
        @click=${u(this,re,is)}>
        <u-ripple ?disabled=${this.disabled||!this.renderRipple}></u-ripple>
        <u-elevation></u-elevation>
      </button>
    `},rc=function(){return p`
      <div class="content">${this._renderContent()}</div>
      <a
        id="link"
        class="button"
        href=${this.disabled?T:this.href}
        aria-disabled=${this.disabled||T}
        aria-label=${this.ariaLabel||T}
        aria-labelledby="${this.ariaLabel?T:"text"}"
        .role=${this.innerRole}
        target=${this.target||T}
        @click=${u(this,re,is)}>
        <u-elevation></u-elevation>
        <u-ripple ?disabled=${this.disabled||!this.renderRipple}></u-ripple>
      </a>
    `},os=function(){this.getAttribute("tabindex")==="0"&&(this.removeAttribute("tabindex"),setTimeout(()=>this.buttonElement?.focus()))},is=function(t){this.disabled||!Vn(this,t)||(t.pointerType||this._ripple.createRipple(),this._handleClick(t))},ns.styles=[G,Ql];var Q=ns;n([d({type:Boolean,reflect:!0})],Q.prototype,"disabled",void 0);n([S()],Q.prototype,"renderRipple",void 0);n([d()],Q.prototype,"href",void 0);n([d()],Q.prototype,"target",void 0);n([d()],Q.prototype,"name",void 0);n([k(".button")],Q.prototype,"buttonElement",void 0);n([k("u-ripple")],Q.prototype,"_ripple",void 0);var oc=v`
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
`;var Jr,jn=class jn extends Q{constructor(){super();m(this,Jr);this.type="submit",this.value="",h(this,Jr,this.attachInternals())}get form(){return l(this,Jr).form}_handleClick(t){if(!(this.type==="button"||this.href)&&this.form){if(l(this,Jr).setFormValue(this.value),this.type==="reset"){this.form.reset();return}this.form.addEventListener("submit",o=>{Object.defineProperty(o,"submitter",{configurable:!0,enumerable:!0,get:()=>this})},{capture:!0,once:!0}),this.form.requestSubmit()}}};Jr=new WeakMap,jn.formAssociated=!0,jn.styles=[Q.styles,oc];var Xt=jn;n([d()],Xt.prototype,"type",void 0);n([d({reflect:!0})],Xt.prototype,"value",void 0);var ic=v`
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
`;var as=class as extends Xt{constructor(){super(...arguments),this.toggle=!1,this.toggleShape=!1,this.selected=!1,this.shape="round",this.size="small",this.ariaLabelSelected="",this._hasSelectionIcon=!1}_getContainerClasses(){return J(U({},super._getContainerClasses()),{[this.shape]:!0,[this.size]:!0,selected:this.selected,toggle:this.toggle,"toggle-shape":this.toggleShape,"selection-icon":this._hasSelectionIcon})}_handleClick(r){super._handleClick(r),this.toggle&&(this.selected=!this.selected,this.dispatchEvent(new Event("change",{bubbles:!0})))}getAriaLabel(){return this.selected?this.ariaLabelSelected||super.getAriaLabel():super.getAriaLabel()}_handleSelectedIconSlotChange(r){this._hasSelectionIcon=r.target.assignedElements({flatten:!0}).length>0}};as.styles=[Xt.styles,ic];var Rt=as;n([d({type:Boolean,reflect:!0})],Rt.prototype,"toggle",void 0);n([d({attribute:"toggle-shape",type:Boolean,reflect:!0})],Rt.prototype,"toggleShape",void 0);n([d({type:Boolean,reflect:!0})],Rt.prototype,"selected",void 0);n([d({reflect:!0})],Rt.prototype,"shape",void 0);n([d({reflect:!0})],Rt.prototype,"size",void 0);n([d({attribute:"aria-label-selected"})],Rt.prototype,"ariaLabelSelected",void 0);n([S()],Rt.prototype,"_hasSelectionIcon",void 0);var Ui,Ae,ss,nc,ac,Qr,fe=(Qr=class extends Rt{constructor(){super(...arguments);m(this,Ae);m(this,Ui);this.variant="filled",this.color="primary",this.trailingIcon=!1,this._hasIcon=!1,this._hasSelectionLabel=!1,this.animateTextChange=!1}firstUpdated(t){super.firstUpdated(t),h(this,Ui,new ResizeObserver(()=>u(this,Ae,ss).call(this))),l(this,Ui).observe(this._text),u(this,Ae,ss).call(this)}_getContainerClasses(){return J(U({},super._getContainerClasses()),{[this.color]:!0,[this.variant]:!0,"trailing-icon":this.trailingIcon,"has-icon":this._hasIcon,"has-selection-label":this._hasSelectionLabel})}_renderContent(){let t={animate:this.animateTextChange};return p`
      <span class="icon-container" aria-hidden="true">
        <span class="icon icon-default">
          <slot name="icon" @slotchange="${u(this,Ae,nc)}"></slot>
        </span>
        <span class="icon icon-selected">
          <slot name="icon-selected" @slotchange="${this._handleSelectedIconSlotChange}"></slot>
        </span>
      </span>

      <span class="label-container ${H(t)}">
        <span id="label">
          <span class="label label-default">
            <slot></slot>
          </span>
          <span class="label label-selected">
            <slot name="label-selected" @slotchange="${u(this,Ae,ac)}"></slot>
          </span>
        </span>
      </span>
    `}},Ui=new WeakMap,Ae=new WeakSet,ss=function(){let t=`${this._text.offsetWidth}px`;this._textWrapper.style.width=t;let o=!!parseInt(t,10);this.animateTextChange!==o&&setTimeout(()=>this.animateTextChange=o)},nc=function(t){this._hasIcon=t.target.assignedElements({flatten:!0}).length>0},ac=function(t){this._hasSelectionLabel=t.target.assignedElements({flatten:!0}).length>0},Qr.styles=[Rt.styles,Jl],Qr);n([d()],fe.prototype,"variant",void 0);n([d()],fe.prototype,"color",void 0);n([d({type:Boolean,attribute:"trailing-icon",reflect:!0})],fe.prototype,"trailingIcon",void 0);n([S()],fe.prototype,"_hasIcon",void 0);n([S()],fe.prototype,"_hasSelectionLabel",void 0);n([S()],fe.prototype,"animateTextChange",void 0);n([k(".label-container",!0)],fe.prototype,"_textWrapper",void 0);n([k("#label",!0)],fe.prototype,"_text",void 0);fe=n([y("u-button")],fe);var sc=v`
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
`;var to,Wn=(to=class extends Rt{constructor(){super(...arguments),this.variant="standard",this.width="default"}_getContainerClasses(){return J(U({},super._getContainerClasses()),{[this.variant]:!0,[this.width]:!0})}_renderContent(){return p`
      <span class="icon-container" aria-hidden="true">
        <span class="icon icon-default">
          <slot></slot>
        </span>
        <span class="icon icon-selected">
          <slot name="selected" @slotchange="${this._handleSelectedIconSlotChange}"></slot>
        </span>
      </span>
    `}},to.styles=[Rt.styles,sc],to);n([d()],Wn.prototype,"variant",void 0);n([d()],Wn.prototype,"width",void 0);Wn=n([y("u-icon-button")],Wn);var Ct,lc=function(e){return e[e.short=2500]="short",e[e.long=5e3]="long",e[e.infinite=-1]="infinite",e}(lc||{}),ge,je=(ge=class extends A{constructor(){super(...arguments),this.message="",this.action="",this.showClose=!1,this._dismissed=!1,this._canDismiss=!1}firstUpdated(r){super.firstUpdated(r);let t=()=>{this.container.removeEventListener("animationend",t),Ct.minDisplayTime>0?setTimeout(()=>this._canDismiss=!0,Ct.minDisplayTime):this._canDismiss=!0};this.container.addEventListener("animationend",t)}render(){let r={dismiss:this._dismissed&&this._canDismiss};if(r.dismiss){let t=()=>{this.container.removeEventListener("animationend",t),this.remove(),Ct._showNext()};this.container.addEventListener("animationend",t)}return p`
      <div class="container ${H(r)}" part="container">
        <u-elevation></u-elevation>
        <div class="message-container" part="message-container">
          <div class="message" part="message">${this.message}</div>
        </div>
        ${this.renderButton()} ${this.renderCloseButton()}
      </div>
    `}renderButton(){return this.action?p`
          <u-button
            variant="text"
            @click=${this.actionClick.bind(this)}
            part="action"
          >${this.action}
          </u-button>
        `:T}renderCloseButton(){return this.showClose?p`
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
        `:T}actionClick(r){r.stopPropagation();let t=new CustomEvent("actionClick",{cancelable:!0});this.dispatchEvent(t),!t.defaultPrevented&&this.dismiss()}dismiss(){this._dismissed||(this._dismissed=!0)}static show(r){typeof r=="string"&&(r={message:r}),r.duration??=lc.long;let t=this.createSnackbar(r);return Ct._queue.push(t),Ct._lastEnqueued?.dismiss(),Ct._lastEnqueued=t,Ct._consuming||Ct._consumeQueue(),t}static _consumeQueue(){Ct._queue.length&&(Ct._consuming=!0,Ct._showNext())}static _showNext(){if(!Ct._queue.length){Ct._consuming=!1,Ct._lastEnqueued=null;return}let r=Ct._queue[0];Ct._queue=Ct._queue.slice(1),document.body.appendChild(r),r.duration!==-1&&setTimeout(()=>r.dismiss(),r.duration)}static createSnackbar(r){let t=document.createElement("u-snackbar");return t.message=r.message,t.action=r.action||"",t.showClose=r.showClose,t.duration=r.duration,t}},Ct=ge,ge.styles=[G,Zl],ge.minDisplayTime=1500,ge._queue=[],ge._lastEnqueued=null,ge);n([d({reflect:!0})],je.prototype,"message",void 0);n([d({reflect:!0})],je.prototype,"action",void 0);n([d({type:Boolean,attribute:"show-close",reflect:!0})],je.prototype,"showClose",void 0);n([S()],je.prototype,"_dismissed",void 0);n([S()],je.prototype,"_canDismiss",void 0);n([k(".container",!0)],je.prototype,"container",void 0);je=Ct=n([y("u-snackbar")],je);function St(e){return e<0?-1:e===0?0:1}function mr(e,r,t){return(1-t)*e+t*r}function cc(e,r,t){return t<e?e:t>r?r:t}function eo(e,r,t){return t<e?e:t>r?r:t}function Se(e){return e=e%360,e<0&&(e=e+360),e}function Hi(e,r){let t=e[0]*r[0][0]+e[1]*r[0][1]+e[2]*r[0][2],o=e[0]*r[1][0]+e[1]*r[1][1]+e[2]*r[1][2],i=e[0]*r[2][0]+e[1]*r[2][1]+e[2]*r[2][2];return[t,o,i]}var Ch=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],kh=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],Th=[95.047,100,108.883];function Gn(e,r,t){return(255<<24|(e&255)<<16|(r&255)<<8|t&255)>>>0}function ls(e){let r=gr(e[0]),t=gr(e[1]),o=gr(e[2]);return Gn(r,t,o)}function Yn(e){return e>>16&255}function Xn(e){return e>>8&255}function Kn(e){return e&255}function uc(e,r,t){let o=kh,i=o[0][0]*e+o[0][1]*r+o[0][2]*t,a=o[1][0]*e+o[1][1]*r+o[1][2]*t,c=o[2][0]*e+o[2][1]*r+o[2][2]*t,f=gr(i),x=gr(a),_=gr(c);return Gn(f,x,_)}function Eh(e){let r=fr(Yn(e)),t=fr(Xn(e)),o=fr(Kn(e));return Hi([r,t,o],Ch)}function dc(e){let r=ae(e),t=gr(r);return Gn(t,t,t)}function Zn(e){let r=Eh(e)[1];return 116*pc(r/100)-16}function ae(e){return 100*Ih((e+16)/116)}function Vi(e){return pc(e/100)*116-16}function fr(e){let r=e/255;return r<=.040449936?r/12.92*100:Math.pow((r+.055)/1.055,2.4)*100}function gr(e){let r=e/100,t=0;return r<=.0031308?t=r*12.92:t=1.055*Math.pow(r,1/2.4)-.055,cc(0,255,Math.round(t*255))}function hc(){return Th}function pc(e){let r=.008856451679035631,t=24389/27;return e>r?Math.pow(e,1/3):(t*e+16)/116}function Ih(e){let r=.008856451679035631,t=24389/27,o=e*e*e;return o>r?o:(116*e-16)/t}var Kt=class e{static make(r=hc(),t=200/Math.PI*ae(50)/100,o=50,i=2,a=!1){let c=r,f=c[0]*.401288+c[1]*.650173+c[2]*-.051461,x=c[0]*-.250268+c[1]*1.204414+c[2]*.045854,_=c[0]*-.002079+c[1]*.048952+c[2]*.953127,w=.8+i/10,E=w>=.9?mr(.59,.69,(w-.9)*10):mr(.525,.59,(w-.8)*10),I=a?1:w*(1-1/3.6*Math.exp((-t-42)/92));I=I>1?1:I<0?0:I;let z=w,O=[I*(100/f)+1-I,I*(100/x)+1-I,I*(100/_)+1-I],L=1/(5*t+1),K=L*L*L*L,rt=1-K,ot=K*t+.1*rt*rt*Math.cbrt(5*t),V=ae(o)/r[1],ct=1.48+Math.sqrt(V),N=.725/Math.pow(V,.2),W=N,X=[Math.pow(ot*O[0]*f/100,.42),Math.pow(ot*O[1]*x/100,.42),Math.pow(ot*O[2]*_/100,.42)],et=[400*X[0]/(X[0]+27.13),400*X[1]/(X[1]+27.13),400*X[2]/(X[2]+27.13)],ht=(2*et[0]+et[1]+.05*et[2])*N;return new e(V,ht,N,W,E,z,O,ot,Math.pow(ot,.25),ct)}constructor(r,t,o,i,a,c,f,x,_,w){this.n=r,this.aw=t,this.nbb=o,this.ncb=i,this.c=a,this.nc=c,this.rgbD=f,this.fl=x,this.fLRoot=_,this.z=w}};Kt.DEFAULT=Kt.make();var ve=class e{constructor(r,t,o,i,a,c,f,x,_){this.hue=r,this.chroma=t,this.j=o,this.q=i,this.m=a,this.s=c,this.jstar=f,this.astar=x,this.bstar=_}distance(r){let t=this.jstar-r.jstar,o=this.astar-r.astar,i=this.bstar-r.bstar,a=Math.sqrt(t*t+o*o+i*i);return 1.41*Math.pow(a,.63)}static fromInt(r){return e.fromIntInViewingConditions(r,Kt.DEFAULT)}static fromIntInViewingConditions(r,t){let o=(r&16711680)>>16,i=(r&65280)>>8,a=r&255,c=fr(o),f=fr(i),x=fr(a),_=.41233895*c+.35762064*f+.18051042*x,w=.2126*c+.7152*f+.0722*x,E=.01932141*c+.11916382*f+.95034478*x,I=.401288*_+.650173*w-.051461*E,z=-.250268*_+1.204414*w+.045854*E,O=-.002079*_+.048952*w+.953127*E,L=t.rgbD[0]*I,K=t.rgbD[1]*z,rt=t.rgbD[2]*O,ot=Math.pow(t.fl*Math.abs(L)/100,.42),V=Math.pow(t.fl*Math.abs(K)/100,.42),ct=Math.pow(t.fl*Math.abs(rt)/100,.42),N=St(L)*400*ot/(ot+27.13),W=St(K)*400*V/(V+27.13),X=St(rt)*400*ct/(ct+27.13),et=(11*N+-12*W+X)/11,ht=(N+W-2*X)/9,At=(20*N+20*W+21*X)/20,gt=(40*N+20*W+X)/20,Qt=Math.atan2(ht,et)*180/Math.PI,it=Qt<0?Qt+360:Qt>=360?Qt-360:Qt,Ft=it*Math.PI/180,we=gt*t.nbb,Gt=100*Math.pow(we/t.aw,t.c*t.z),zr=4/t.c*Math.sqrt(Gt/100)*(t.aw+4)*t.fLRoot,Pi=it<20.14?it+360:it,Li=.25*(Math.cos(Pi*Math.PI/180+2)+3.8),Mi=5e4/13*Li*t.nc*t.ncb*Math.sqrt(et*et+ht*ht)/(At+.305),ar=Math.pow(Mi,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),pt=ar*Math.sqrt(Gt/100),Ri=pt*t.fLRoot,_t=50*Math.sqrt(ar*t.c/(t.aw+4)),Dn=(1+100*.007)*Gt/(1+.007*Gt),nt=1/.0228*Math.log(1+.0228*Ri),sr=nt*Math.cos(Ft),$r=nt*Math.sin(Ft);return new e(it,pt,Gt,zr,Ri,_t,Dn,sr,$r)}static fromJch(r,t,o){return e.fromJchInViewingConditions(r,t,o,Kt.DEFAULT)}static fromJchInViewingConditions(r,t,o,i){let a=4/i.c*Math.sqrt(r/100)*(i.aw+4)*i.fLRoot,c=t*i.fLRoot,f=t/Math.sqrt(r/100),x=50*Math.sqrt(f*i.c/(i.aw+4)),_=o*Math.PI/180,w=(1+100*.007)*r/(1+.007*r),E=1/.0228*Math.log(1+.0228*c),I=E*Math.cos(_),z=E*Math.sin(_);return new e(o,t,r,a,c,x,w,I,z)}static fromUcs(r,t,o){return e.fromUcsInViewingConditions(r,t,o,Kt.DEFAULT)}static fromUcsInViewingConditions(r,t,o,i){let a=t,c=o,f=Math.sqrt(a*a+c*c),_=(Math.exp(f*.0228)-1)/.0228/i.fLRoot,w=Math.atan2(c,a)*(180/Math.PI);w<0&&(w+=360);let E=r/(1-(r-100)*.007);return e.fromJchInViewingConditions(E,_,w,i)}toInt(){return this.viewed(Kt.DEFAULT)}viewed(r){let t=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),o=Math.pow(t/Math.pow(1.64-Math.pow(.29,r.n),.73),1/.9),i=this.hue*Math.PI/180,a=.25*(Math.cos(i+2)+3.8),c=r.aw*Math.pow(this.j/100,1/r.c/r.z),f=a*(5e4/13)*r.nc*r.ncb,x=c/r.nbb,_=Math.sin(i),w=Math.cos(i),E=23*(x+.305)*o/(23*f+11*o*w+108*o*_),I=E*w,z=E*_,O=(460*x+451*I+288*z)/1403,L=(460*x-891*I-261*z)/1403,K=(460*x-220*I-6300*z)/1403,rt=Math.max(0,27.13*Math.abs(O)/(400-Math.abs(O))),ot=St(O)*(100/r.fl)*Math.pow(rt,1/.42),V=Math.max(0,27.13*Math.abs(L)/(400-Math.abs(L))),ct=St(L)*(100/r.fl)*Math.pow(V,1/.42),N=Math.max(0,27.13*Math.abs(K)/(400-Math.abs(K))),W=St(K)*(100/r.fl)*Math.pow(N,1/.42),X=ot/r.rgbD[0],et=ct/r.rgbD[1],ht=W/r.rgbD[2],At=1.86206786*X-1.01125463*et+.14918677*ht,gt=.38752654*X+.62144744*et-.00897398*ht,he=-.0158415*X-.03412294*et+1.04996444*ht;return uc(At,gt,he)}static fromXyzInViewingConditions(r,t,o,i){let a=.401288*r+.650173*t-.051461*o,c=-.250268*r+1.204414*t+.045854*o,f=-.002079*r+.048952*t+.953127*o,x=i.rgbD[0]*a,_=i.rgbD[1]*c,w=i.rgbD[2]*f,E=Math.pow(i.fl*Math.abs(x)/100,.42),I=Math.pow(i.fl*Math.abs(_)/100,.42),z=Math.pow(i.fl*Math.abs(w)/100,.42),O=St(x)*400*E/(E+27.13),L=St(_)*400*I/(I+27.13),K=St(w)*400*z/(z+27.13),rt=(11*O+-12*L+K)/11,ot=(O+L-2*K)/9,V=(20*O+20*L+21*K)/20,ct=(40*O+20*L+K)/20,W=Math.atan2(ot,rt)*180/Math.PI,X=W<0?W+360:W>=360?W-360:W,et=X*Math.PI/180,ht=ct*i.nbb,At=100*Math.pow(ht/i.aw,i.c*i.z),gt=4/i.c*Math.sqrt(At/100)*(i.aw+4)*i.fLRoot,he=X<20.14?X+360:X,Qt=1/4*(Math.cos(he*Math.PI/180+2)+3.8),Ft=5e4/13*Qt*i.nc*i.ncb*Math.sqrt(rt*rt+ot*ot)/(V+.305),we=Math.pow(Ft,.9)*Math.pow(1.64-Math.pow(.29,i.n),.73),Gt=we*Math.sqrt(At/100),zr=Gt*i.fLRoot,Pi=50*Math.sqrt(we*i.c/(i.aw+4)),Li=(1+100*.007)*At/(1+.007*At),Or=Math.log(1+.0228*zr)/.0228,Mi=Or*Math.cos(et),ar=Or*Math.sin(et);return new e(X,Gt,At,gt,zr,Pi,Li,Mi,ar)}xyzInViewingConditions(r){let t=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),o=Math.pow(t/Math.pow(1.64-Math.pow(.29,r.n),.73),1/.9),i=this.hue*Math.PI/180,a=.25*(Math.cos(i+2)+3.8),c=r.aw*Math.pow(this.j/100,1/r.c/r.z),f=a*(5e4/13)*r.nc*r.ncb,x=c/r.nbb,_=Math.sin(i),w=Math.cos(i),E=23*(x+.305)*o/(23*f+11*o*w+108*o*_),I=E*w,z=E*_,O=(460*x+451*I+288*z)/1403,L=(460*x-891*I-261*z)/1403,K=(460*x-220*I-6300*z)/1403,rt=Math.max(0,27.13*Math.abs(O)/(400-Math.abs(O))),ot=St(O)*(100/r.fl)*Math.pow(rt,1/.42),V=Math.max(0,27.13*Math.abs(L)/(400-Math.abs(L))),ct=St(L)*(100/r.fl)*Math.pow(V,1/.42),N=Math.max(0,27.13*Math.abs(K)/(400-Math.abs(K))),W=St(K)*(100/r.fl)*Math.pow(N,1/.42),X=ot/r.rgbD[0],et=ct/r.rgbD[1],ht=W/r.rgbD[2],At=1.86206786*X-1.01125463*et+.14918677*ht,gt=.38752654*X+.62144744*et-.00897398*ht,he=-.0158415*X-.03412294*et+1.04996444*ht;return[At,gt,he]}};var qi=(()=>{class e{static sanitizeRadians(t){return(t+Math.PI*8)%(Math.PI*2)}static trueDelinearized(t){let o=t/100,i=0;return o<=.0031308?i=o*12.92:i=1.055*Math.pow(o,1/2.4)-.055,i*255}static chromaticAdaptation(t){let o=Math.pow(Math.abs(t),.42);return St(t)*400*o/(o+27.13)}static hueOf(t){let o=Hi(t,e.SCALED_DISCOUNT_FROM_LINRGB),i=e.chromaticAdaptation(o[0]),a=e.chromaticAdaptation(o[1]),c=e.chromaticAdaptation(o[2]),f=(11*i+-12*a+c)/11,x=(i+a-2*c)/9;return Math.atan2(x,f)}static areInCyclicOrder(t,o,i){let a=e.sanitizeRadians(o-t),c=e.sanitizeRadians(i-t);return a<c}static intercept(t,o,i){return(o-t)/(i-t)}static lerpPoint(t,o,i){return[t[0]+(i[0]-t[0])*o,t[1]+(i[1]-t[1])*o,t[2]+(i[2]-t[2])*o]}static setCoordinate(t,o,i,a){let c=e.intercept(t[a],o,i[a]);return e.lerpPoint(t,c,i)}static isBounded(t){return 0<=t&&t<=100}static nthVertex(t,o){let i=e.Y_FROM_LINRGB[0],a=e.Y_FROM_LINRGB[1],c=e.Y_FROM_LINRGB[2],f=o%4<=1?0:100,x=o%2===0?0:100;if(o<4){let _=f,w=x,E=(t-_*a-w*c)/i;return e.isBounded(E)?[E,_,w]:[-1,-1,-1]}else if(o<8){let _=f,w=x,E=(t-w*i-_*c)/a;return e.isBounded(E)?[w,E,_]:[-1,-1,-1]}else{let _=f,w=x,E=(t-_*i-w*a)/c;return e.isBounded(E)?[_,w,E]:[-1,-1,-1]}}static bisectToSegment(t,o){let i=[-1,-1,-1],a=i,c=0,f=0,x=!1,_=!0;for(let w=0;w<12;w++){let E=e.nthVertex(t,w);if(E[0]<0)continue;let I=e.hueOf(E);if(!x){i=E,a=E,c=I,f=I,x=!0;continue}(_||e.areInCyclicOrder(c,I,f))&&(_=!1,e.areInCyclicOrder(c,o,I)?(a=E,f=I):(i=E,c=I))}return[i,a]}static midpoint(t,o){return[(t[0]+o[0])/2,(t[1]+o[1])/2,(t[2]+o[2])/2]}static criticalPlaneBelow(t){return Math.floor(t-.5)}static criticalPlaneAbove(t){return Math.ceil(t-.5)}static bisectToLimit(t,o){let i=e.bisectToSegment(t,o),a=i[0],c=e.hueOf(a),f=i[1];for(let x=0;x<3;x++)if(a[x]!==f[x]){let _=-1,w=255;a[x]<f[x]?(_=e.criticalPlaneBelow(e.trueDelinearized(a[x])),w=e.criticalPlaneAbove(e.trueDelinearized(f[x]))):(_=e.criticalPlaneAbove(e.trueDelinearized(a[x])),w=e.criticalPlaneBelow(e.trueDelinearized(f[x])));for(let E=0;E<8&&!(Math.abs(w-_)<=1);E++){let I=Math.floor((_+w)/2),z=e.CRITICAL_PLANES[I],O=e.setCoordinate(a,z,f,x),L=e.hueOf(O);e.areInCyclicOrder(c,o,L)?(f=O,w=I):(a=O,c=L,_=I)}}return e.midpoint(a,f)}static inverseChromaticAdaptation(t){let o=Math.abs(t),i=Math.max(0,27.13*o/(400-o));return St(t)*Math.pow(i,1/.42)}static findResultByJ(t,o,i){let a=Math.sqrt(i)*11,c=Kt.DEFAULT,f=1/Math.pow(1.64-Math.pow(.29,c.n),.73),_=.25*(Math.cos(t+2)+3.8)*(5e4/13)*c.nc*c.ncb,w=Math.sin(t),E=Math.cos(t);for(let I=0;I<5;I++){let z=a/100,O=o===0||a===0?0:o/Math.sqrt(z),L=Math.pow(O*f,1/.9),rt=c.aw*Math.pow(z,1/c.c/c.z)/c.nbb,ot=23*(rt+.305)*L/(23*_+11*L*E+108*L*w),V=ot*E,ct=ot*w,N=(460*rt+451*V+288*ct)/1403,W=(460*rt-891*V-261*ct)/1403,X=(460*rt-220*V-6300*ct)/1403,et=e.inverseChromaticAdaptation(N),ht=e.inverseChromaticAdaptation(W),At=e.inverseChromaticAdaptation(X),gt=Hi([et,ht,At],e.LINRGB_FROM_SCALED_DISCOUNT);if(gt[0]<0||gt[1]<0||gt[2]<0)return 0;let he=e.Y_FROM_LINRGB[0],Qt=e.Y_FROM_LINRGB[1],it=e.Y_FROM_LINRGB[2],Ft=he*gt[0]+Qt*gt[1]+it*gt[2];if(Ft<=0)return 0;if(I===4||Math.abs(Ft-i)<.002)return gt[0]>100.01||gt[1]>100.01||gt[2]>100.01?0:ls(gt);a=a-(Ft-i)*a/(2*Ft)}return 0}static solveToInt(t,o,i){if(o<1e-4||i<1e-4||i>99.9999)return dc(i);t=Se(t);let a=t/180*Math.PI,c=ae(i),f=e.findResultByJ(a,o,c);if(f!==0)return f;let x=e.bisectToLimit(c,a);return ls(x)}static solveToCam(t,o,i){return ve.fromInt(e.solveToInt(t,o,i))}}return e.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]],e.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]],e.Y_FROM_LINRGB=[.2126,.7152,.0722],e.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776],e})();var xt=class e{static from(r,t,o){return new e(qi.solveToInt(r,t,o))}static fromInt(r){return new e(r)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(r){this.setInternalState(qi.solveToInt(r,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(r){this.setInternalState(qi.solveToInt(this.internalHue,r,this.internalTone))}get tone(){return this.internalTone}set tone(r){this.setInternalState(qi.solveToInt(this.internalHue,this.internalChroma,r))}constructor(r){this.argb=r;let t=ve.fromInt(r);this.internalHue=t.hue,this.internalChroma=t.chroma,this.internalTone=Zn(r),this.argb=r}setInternalState(r){let t=ve.fromInt(r);this.internalHue=t.hue,this.internalChroma=t.chroma,this.internalTone=Zn(r),this.argb=r}inViewingConditions(r){let o=ve.fromInt(this.toInt()).xyzInViewingConditions(r),i=ve.fromXyzInViewingConditions(o[0],o[1],o[2],Kt.make());return e.from(i.hue,i.chroma,Vi(o[1]))}};var Ot=class e{static ratioOfTones(r,t){return r=eo(0,100,r),t=eo(0,100,t),e.ratioOfYs(ae(r),ae(t))}static ratioOfYs(r,t){let o=r>t?r:t,i=o===t?r:t;return(o+5)/(i+5)}static lighter(r,t){if(r<0||r>100)return-1;let o=ae(r),i=t*(o+5)-5,a=e.ratioOfYs(i,o),c=Math.abs(a-t);if(a<t&&c>.04)return-1;let f=Vi(i)+.4;return f<0||f>100?-1:f}static darker(r,t){if(r<0||r>100)return-1;let o=ae(r),i=(o+5)/t-5,a=e.ratioOfYs(o,i),c=Math.abs(a-t);if(a<t&&c>.04)return-1;let f=Vi(i)-.4;return f<0||f>100?-1:f}static lighterUnsafe(r,t){let o=e.lighter(r,t);return o<0?100:o}static darkerUnsafe(r,t){let o=e.darker(r,t);return o<0?0:o}};var ro=class e{static isDisliked(r){let t=Math.round(r.hue)>=90&&Math.round(r.hue)<=111,o=Math.round(r.chroma)>16,i=Math.round(r.tone)<65;return t&&o&&i}static fixIfDisliked(r){return e.isDisliked(r)?xt.from(r.hue,r.chroma,70):r}};var D=class e{static fromPalette(r){return new e(r.name??"",r.palette,r.tone,r.isBackground??!1,r.background,r.secondBackground,r.contrastCurve,r.toneDeltaPair)}constructor(r,t,o,i,a,c,f,x){if(this.name=r,this.palette=t,this.tone=o,this.isBackground=i,this.background=a,this.secondBackground=c,this.contrastCurve=f,this.toneDeltaPair=x,this.hctCache=new Map,!a&&c)throw new Error(`Color ${r} has secondBackgrounddefined, but background is not defined.`);if(!a&&f)throw new Error(`Color ${r} has contrastCurvedefined, but background is not defined.`);if(a&&!f)throw new Error(`Color ${r} has backgrounddefined, but contrastCurve is not defined.`)}getArgb(r){return this.getHct(r).toInt()}getHct(r){let t=this.hctCache.get(r);if(t!=null)return t;let o=this.getTone(r),i=this.palette(r).getHct(o);return this.hctCache.size>4&&this.hctCache.clear(),this.hctCache.set(r,i),i}getTone(r){let t=r.contrastLevel<0;if(this.toneDeltaPair){let o=this.toneDeltaPair(r),i=o.roleA,a=o.roleB,c=o.delta,f=o.polarity,x=o.stayTogether,w=this.background(r).getTone(r),E=f==="nearer"||f==="lighter"&&!r.isDark||f==="darker"&&r.isDark,I=E?i:a,z=E?a:i,O=this.name===I.name,L=r.isDark?1:-1,K=I.contrastCurve.get(r.contrastLevel),rt=z.contrastCurve.get(r.contrastLevel),ot=I.tone(r),V=Ot.ratioOfTones(w,ot)>=K?ot:e.foregroundTone(w,K),ct=z.tone(r),N=Ot.ratioOfTones(w,ct)>=rt?ct:e.foregroundTone(w,rt);return t&&(V=e.foregroundTone(w,K),N=e.foregroundTone(w,rt)),(N-V)*L>=c||(N=eo(0,100,V+c*L),(N-V)*L>=c||(V=eo(0,100,N-c*L))),50<=V&&V<60?L>0?(V=60,N=Math.max(N,V+c*L)):(V=49,N=Math.min(N,V+c*L)):50<=N&&N<60&&(x?L>0?(V=60,N=Math.max(N,V+c*L)):(V=49,N=Math.min(N,V+c*L)):L>0?N=60:N=49),O?V:N}else{let o=this.tone(r);if(this.background==null)return o;let i=this.background(r).getTone(r),a=this.contrastCurve.get(r.contrastLevel);if(Ot.ratioOfTones(i,o)>=a||(o=e.foregroundTone(i,a)),t&&(o=e.foregroundTone(i,a)),this.isBackground&&50<=o&&o<60&&(Ot.ratioOfTones(49,i)>=a?o=49:o=60),this.secondBackground){let[c,f]=[this.background,this.secondBackground],[x,_]=[c(r).getTone(r),f(r).getTone(r)],[w,E]=[Math.max(x,_),Math.min(x,_)];if(Ot.ratioOfTones(w,o)>=a&&Ot.ratioOfTones(E,o)>=a)return o;let I=Ot.lighter(w,a),z=Ot.darker(E,a),O=[];return I!==-1&&O.push(I),z!==-1&&O.push(z),e.tonePrefersLightForeground(x)||e.tonePrefersLightForeground(_)?I<0?100:I:O.length===1?O[0]:z<0?0:z}return o}}static foregroundTone(r,t){let o=Ot.lighterUnsafe(r,t),i=Ot.darkerUnsafe(r,t),a=Ot.ratioOfTones(o,r),c=Ot.ratioOfTones(i,r);if(e.tonePrefersLightForeground(r)){let x=Math.abs(a-c)<.1&&a<t&&c<t;return a>=t||a>=c||x?o:i}else return c>=t||c>=a?i:o}static tonePrefersLightForeground(r){return Math.round(r)<60}static toneAllowsLightForeground(r){return Math.round(r)<=49}static enableLightForeground(r){return e.tonePrefersLightForeground(r)&&!e.toneAllowsLightForeground(r)?49:r}};var Z=class e{static fromInt(r){let t=xt.fromInt(r);return e.fromHct(t)}static fromHct(r){return new e(r.hue,r.chroma,r)}static fromHueAndChroma(r,t){let o=new cs(r,t).create();return new e(r,t,o)}constructor(r,t,o){this.hue=r,this.chroma=t,this.keyColor=o,this.cache=new Map}tone(r){let t=this.cache.get(r);return t===void 0&&(t=xt.from(this.hue,this.chroma,r).toInt(),this.cache.set(r,t)),t}getHct(r){return xt.fromInt(this.tone(r))}},cs=class{constructor(r,t){this.hue=r,this.requestedChroma=t,this.chromaCache=new Map,this.maxChromaValue=200}create(){let i=0,a=100;for(;i<a;){let c=Math.floor((i+a)/2),f=this.maxChroma(c)<this.maxChroma(c+1);if(this.maxChroma(c)>=this.requestedChroma-.01)if(Math.abs(i-50)<Math.abs(a-50))a=c;else{if(i===c)return xt.from(this.hue,this.requestedChroma,i);i=c}else f?i=c+1:a=c}return xt.from(this.hue,this.requestedChroma,i)}maxChroma(r){if(this.chromaCache.has(r))return this.chromaCache.get(r);let t=xt.from(this.hue,this.maxChromaValue,r).chroma;return this.chromaCache.set(r,t),t}};var M=class{constructor(r,t,o,i){this.low=r,this.normal=t,this.medium=o,this.high=i}get(r){return r<=-1?this.low:r<0?mr(this.low,this.normal,(r- -1)/1):r<.5?mr(this.normal,this.medium,(r-0)/.5):r<1?mr(this.medium,this.high,(r-.5)/.5):this.high}};var Et=class{constructor(r,t,o,i,a){this.roleA=r,this.roleB=t,this.delta=o,this.polarity=i,this.stayTogether=a}};var Vt=function(e){return e[e.MONOCHROME=0]="MONOCHROME",e[e.NEUTRAL=1]="NEUTRAL",e[e.TONAL_SPOT=2]="TONAL_SPOT",e[e.VIBRANT=3]="VIBRANT",e[e.EXPRESSIVE=4]="EXPRESSIVE",e[e.FIDELITY=5]="FIDELITY",e[e.CONTENT=6]="CONTENT",e[e.RAINBOW=7]="RAINBOW",e[e.FRUIT_SALAD=8]="FRUIT_SALAD",e}(Vt||{});function oo(e){return e.variant===Vt.FIDELITY||e.variant===Vt.CONTENT}function lt(e){return e.variant===Vt.MONOCHROME}function Sh(e,r,t,o){let i=t,a=xt.from(e,r,t);if(a.chroma<r){let c=a.chroma;for(;a.chroma<r;){i+=o?-1:1;let f=xt.from(e,r,i);if(c>f.chroma||Math.abs(f.chroma-r)<.4)break;let x=Math.abs(f.chroma-r),_=Math.abs(a.chroma-r);x<_&&(a=f),c=Math.max(c,f.chroma)}}return i}var g=class e{static highestSurface(r){return r.isDark?e.surfaceBright:e.surfaceDim}};g.contentAccentToneDelta=15;g.primaryPaletteKeyColor=D.fromPalette({name:"primary_palette_key_color",palette:e=>e.primaryPalette,tone:e=>e.primaryPalette.keyColor.tone});g.secondaryPaletteKeyColor=D.fromPalette({name:"secondary_palette_key_color",palette:e=>e.secondaryPalette,tone:e=>e.secondaryPalette.keyColor.tone});g.tertiaryPaletteKeyColor=D.fromPalette({name:"tertiary_palette_key_color",palette:e=>e.tertiaryPalette,tone:e=>e.tertiaryPalette.keyColor.tone});g.neutralPaletteKeyColor=D.fromPalette({name:"neutral_palette_key_color",palette:e=>e.neutralPalette,tone:e=>e.neutralPalette.keyColor.tone});g.neutralVariantPaletteKeyColor=D.fromPalette({name:"neutral_variant_palette_key_color",palette:e=>e.neutralVariantPalette,tone:e=>e.neutralVariantPalette.keyColor.tone});g.background=D.fromPalette({name:"background",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0});g.onBackground=D.fromPalette({name:"on_background",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>g.background,contrastCurve:new M(3,3,4.5,7)});g.surface=D.fromPalette({name:"surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0});g.surfaceDim=D.fromPalette({name:"surface_dim",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:new M(87,87,80,75).get(e.contrastLevel),isBackground:!0});g.surfaceBright=D.fromPalette({name:"surface_bright",palette:e=>e.neutralPalette,tone:e=>e.isDark?new M(24,24,29,34).get(e.contrastLevel):98,isBackground:!0});g.surfaceContainerLowest=D.fromPalette({name:"surface_container_lowest",palette:e=>e.neutralPalette,tone:e=>e.isDark?new M(4,4,2,0).get(e.contrastLevel):100,isBackground:!0});g.surfaceContainerLow=D.fromPalette({name:"surface_container_low",palette:e=>e.neutralPalette,tone:e=>e.isDark?new M(10,10,11,12).get(e.contrastLevel):new M(96,96,96,95).get(e.contrastLevel),isBackground:!0});g.surfaceContainer=D.fromPalette({name:"surface_container",palette:e=>e.neutralPalette,tone:e=>e.isDark?new M(12,12,16,20).get(e.contrastLevel):new M(94,94,92,90).get(e.contrastLevel),isBackground:!0});g.surfaceContainerHigh=D.fromPalette({name:"surface_container_high",palette:e=>e.neutralPalette,tone:e=>e.isDark?new M(17,17,21,25).get(e.contrastLevel):new M(92,92,88,85).get(e.contrastLevel),isBackground:!0});g.surfaceContainerHighest=D.fromPalette({name:"surface_container_highest",palette:e=>e.neutralPalette,tone:e=>e.isDark?new M(22,22,26,30).get(e.contrastLevel):new M(90,90,84,80).get(e.contrastLevel),isBackground:!0});g.onSurface=D.fromPalette({name:"on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>g.highestSurface(e),contrastCurve:new M(4.5,7,11,21)});g.surfaceVariant=D.fromPalette({name:"surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:90,isBackground:!0});g.onSurfaceVariant=D.fromPalette({name:"on_surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?80:30,background:e=>g.highestSurface(e),contrastCurve:new M(3,4.5,7,11)});g.inverseSurface=D.fromPalette({name:"inverse_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:20});g.inverseOnSurface=D.fromPalette({name:"inverse_on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?20:95,background:e=>g.inverseSurface,contrastCurve:new M(4.5,7,11,21)});g.outline=D.fromPalette({name:"outline",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?60:50,background:e=>g.highestSurface(e),contrastCurve:new M(1.5,3,4.5,7)});g.outlineVariant=D.fromPalette({name:"outline_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:80,background:e=>g.highestSurface(e),contrastCurve:new M(1,1,3,4.5)});g.shadow=D.fromPalette({name:"shadow",palette:e=>e.neutralPalette,tone:e=>0});g.scrim=D.fromPalette({name:"scrim",palette:e=>e.neutralPalette,tone:e=>0});g.surfaceTint=D.fromPalette({name:"surface_tint",palette:e=>e.primaryPalette,tone:e=>e.isDark?80:40,isBackground:!0});g.primary=D.fromPalette({name:"primary",palette:e=>e.primaryPalette,tone:e=>lt(e)?e.isDark?100:0:e.isDark?80:40,isBackground:!0,background:e=>g.highestSurface(e),contrastCurve:new M(3,4.5,7,7),toneDeltaPair:e=>new Et(g.primaryContainer,g.primary,10,"nearer",!1)});g.onPrimary=D.fromPalette({name:"on_primary",palette:e=>e.primaryPalette,tone:e=>lt(e)?e.isDark?10:90:e.isDark?20:100,background:e=>g.primary,contrastCurve:new M(4.5,7,11,21)});g.primaryContainer=D.fromPalette({name:"primary_container",palette:e=>e.primaryPalette,tone:e=>oo(e)?e.sourceColorHct.tone:lt(e)?e.isDark?85:25:e.isDark?30:90,isBackground:!0,background:e=>g.highestSurface(e),contrastCurve:new M(1,1,3,4.5),toneDeltaPair:e=>new Et(g.primaryContainer,g.primary,10,"nearer",!1)});g.onPrimaryContainer=D.fromPalette({name:"on_primary_container",palette:e=>e.primaryPalette,tone:e=>oo(e)?D.foregroundTone(g.primaryContainer.tone(e),4.5):lt(e)?e.isDark?0:100:e.isDark?90:30,background:e=>g.primaryContainer,contrastCurve:new M(3,4.5,7,11)});g.inversePrimary=D.fromPalette({name:"inverse_primary",palette:e=>e.primaryPalette,tone:e=>e.isDark?40:80,background:e=>g.inverseSurface,contrastCurve:new M(3,4.5,7,7)});g.secondary=D.fromPalette({name:"secondary",palette:e=>e.secondaryPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>g.highestSurface(e),contrastCurve:new M(3,4.5,7,7),toneDeltaPair:e=>new Et(g.secondaryContainer,g.secondary,10,"nearer",!1)});g.onSecondary=D.fromPalette({name:"on_secondary",palette:e=>e.secondaryPalette,tone:e=>lt(e)?e.isDark?10:100:e.isDark?20:100,background:e=>g.secondary,contrastCurve:new M(4.5,7,11,21)});g.secondaryContainer=D.fromPalette({name:"secondary_container",palette:e=>e.secondaryPalette,tone:e=>{let r=e.isDark?30:90;return lt(e)?e.isDark?30:85:oo(e)?Sh(e.secondaryPalette.hue,e.secondaryPalette.chroma,r,!e.isDark):r},isBackground:!0,background:e=>g.highestSurface(e),contrastCurve:new M(1,1,3,4.5),toneDeltaPair:e=>new Et(g.secondaryContainer,g.secondary,10,"nearer",!1)});g.onSecondaryContainer=D.fromPalette({name:"on_secondary_container",palette:e=>e.secondaryPalette,tone:e=>lt(e)?e.isDark?90:10:oo(e)?D.foregroundTone(g.secondaryContainer.tone(e),4.5):e.isDark?90:30,background:e=>g.secondaryContainer,contrastCurve:new M(3,4.5,7,11)});g.tertiary=D.fromPalette({name:"tertiary",palette:e=>e.tertiaryPalette,tone:e=>lt(e)?e.isDark?90:25:e.isDark?80:40,isBackground:!0,background:e=>g.highestSurface(e),contrastCurve:new M(3,4.5,7,7),toneDeltaPair:e=>new Et(g.tertiaryContainer,g.tertiary,10,"nearer",!1)});g.onTertiary=D.fromPalette({name:"on_tertiary",palette:e=>e.tertiaryPalette,tone:e=>lt(e)?e.isDark?10:90:e.isDark?20:100,background:e=>g.tertiary,contrastCurve:new M(4.5,7,11,21)});g.tertiaryContainer=D.fromPalette({name:"tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>{if(lt(e))return e.isDark?60:49;if(!oo(e))return e.isDark?30:90;let r=e.tertiaryPalette.getHct(e.sourceColorHct.tone);return ro.fixIfDisliked(r).tone},isBackground:!0,background:e=>g.highestSurface(e),contrastCurve:new M(1,1,3,4.5),toneDeltaPair:e=>new Et(g.tertiaryContainer,g.tertiary,10,"nearer",!1)});g.onTertiaryContainer=D.fromPalette({name:"on_tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>lt(e)?e.isDark?0:100:oo(e)?D.foregroundTone(g.tertiaryContainer.tone(e),4.5):e.isDark?90:30,background:e=>g.tertiaryContainer,contrastCurve:new M(3,4.5,7,11)});g.error=D.fromPalette({name:"error",palette:e=>e.errorPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>g.highestSurface(e),contrastCurve:new M(3,4.5,7,7),toneDeltaPair:e=>new Et(g.errorContainer,g.error,10,"nearer",!1)});g.onError=D.fromPalette({name:"on_error",palette:e=>e.errorPalette,tone:e=>e.isDark?20:100,background:e=>g.error,contrastCurve:new M(4.5,7,11,21)});g.errorContainer=D.fromPalette({name:"error_container",palette:e=>e.errorPalette,tone:e=>e.isDark?30:90,isBackground:!0,background:e=>g.highestSurface(e),contrastCurve:new M(1,1,3,4.5),toneDeltaPair:e=>new Et(g.errorContainer,g.error,10,"nearer",!1)});g.onErrorContainer=D.fromPalette({name:"on_error_container",palette:e=>e.errorPalette,tone:e=>lt(e)?e.isDark?90:10:e.isDark?90:30,background:e=>g.errorContainer,contrastCurve:new M(3,4.5,7,11)});g.primaryFixed=D.fromPalette({name:"primary_fixed",palette:e=>e.primaryPalette,tone:e=>lt(e)?40:90,isBackground:!0,background:e=>g.highestSurface(e),contrastCurve:new M(1,1,3,4.5),toneDeltaPair:e=>new Et(g.primaryFixed,g.primaryFixedDim,10,"lighter",!0)});g.primaryFixedDim=D.fromPalette({name:"primary_fixed_dim",palette:e=>e.primaryPalette,tone:e=>lt(e)?30:80,isBackground:!0,background:e=>g.highestSurface(e),contrastCurve:new M(1,1,3,4.5),toneDeltaPair:e=>new Et(g.primaryFixed,g.primaryFixedDim,10,"lighter",!0)});g.onPrimaryFixed=D.fromPalette({name:"on_primary_fixed",palette:e=>e.primaryPalette,tone:e=>lt(e)?100:10,background:e=>g.primaryFixedDim,secondBackground:e=>g.primaryFixed,contrastCurve:new M(4.5,7,11,21)});g.onPrimaryFixedVariant=D.fromPalette({name:"on_primary_fixed_variant",palette:e=>e.primaryPalette,tone:e=>lt(e)?90:30,background:e=>g.primaryFixedDim,secondBackground:e=>g.primaryFixed,contrastCurve:new M(3,4.5,7,11)});g.secondaryFixed=D.fromPalette({name:"secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>lt(e)?80:90,isBackground:!0,background:e=>g.highestSurface(e),contrastCurve:new M(1,1,3,4.5),toneDeltaPair:e=>new Et(g.secondaryFixed,g.secondaryFixedDim,10,"lighter",!0)});g.secondaryFixedDim=D.fromPalette({name:"secondary_fixed_dim",palette:e=>e.secondaryPalette,tone:e=>lt(e)?70:80,isBackground:!0,background:e=>g.highestSurface(e),contrastCurve:new M(1,1,3,4.5),toneDeltaPair:e=>new Et(g.secondaryFixed,g.secondaryFixedDim,10,"lighter",!0)});g.onSecondaryFixed=D.fromPalette({name:"on_secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>10,background:e=>g.secondaryFixedDim,secondBackground:e=>g.secondaryFixed,contrastCurve:new M(4.5,7,11,21)});g.onSecondaryFixedVariant=D.fromPalette({name:"on_secondary_fixed_variant",palette:e=>e.secondaryPalette,tone:e=>lt(e)?25:30,background:e=>g.secondaryFixedDim,secondBackground:e=>g.secondaryFixed,contrastCurve:new M(3,4.5,7,11)});g.tertiaryFixed=D.fromPalette({name:"tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>lt(e)?40:90,isBackground:!0,background:e=>g.highestSurface(e),contrastCurve:new M(1,1,3,4.5),toneDeltaPair:e=>new Et(g.tertiaryFixed,g.tertiaryFixedDim,10,"lighter",!0)});g.tertiaryFixedDim=D.fromPalette({name:"tertiary_fixed_dim",palette:e=>e.tertiaryPalette,tone:e=>lt(e)?30:80,isBackground:!0,background:e=>g.highestSurface(e),contrastCurve:new M(1,1,3,4.5),toneDeltaPair:e=>new Et(g.tertiaryFixed,g.tertiaryFixedDim,10,"lighter",!0)});g.onTertiaryFixed=D.fromPalette({name:"on_tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>lt(e)?100:10,background:e=>g.tertiaryFixedDim,secondBackground:e=>g.tertiaryFixed,contrastCurve:new M(4.5,7,11,21)});g.onTertiaryFixedVariant=D.fromPalette({name:"on_tertiary_fixed_variant",palette:e=>e.tertiaryPalette,tone:e=>lt(e)?90:30,background:e=>g.tertiaryFixedDim,secondBackground:e=>g.tertiaryFixed,contrastCurve:new M(3,4.5,7,11)});var vr=class e{static of(r){return new e(r,!1)}static contentOf(r){return new e(r,!0)}static fromColors(r){return e.createPaletteFromColors(!1,r)}static contentFromColors(r){return e.createPaletteFromColors(!0,r)}static createPaletteFromColors(r,t){let o=new e(t.primary,r);if(t.secondary){let i=new e(t.secondary,r);o.a2=i.a1}if(t.tertiary){let i=new e(t.tertiary,r);o.a3=i.a1}if(t.error){let i=new e(t.error,r);o.error=i.a1}if(t.neutral){let i=new e(t.neutral,r);o.n1=i.n1}if(t.neutralVariant){let i=new e(t.neutralVariant,r);o.n2=i.n2}return o}constructor(r,t){let o=xt.fromInt(r),i=o.hue,a=o.chroma;t?(this.a1=Z.fromHueAndChroma(i,a),this.a2=Z.fromHueAndChroma(i,a/3),this.a3=Z.fromHueAndChroma(i+60,a/2),this.n1=Z.fromHueAndChroma(i,Math.min(a/12,4)),this.n2=Z.fromHueAndChroma(i,Math.min(a/6,8))):(this.a1=Z.fromHueAndChroma(i,Math.max(48,a)),this.a2=Z.fromHueAndChroma(i,16),this.a3=Z.fromHueAndChroma(i+60,24),this.n1=Z.fromHueAndChroma(i,4),this.n2=Z.fromHueAndChroma(i,8)),this.error=Z.fromHueAndChroma(25,84)}};function ji(e){let r=Yn(e),t=Xn(e),o=Kn(e),i=[r.toString(16),t.toString(16),o.toString(16)];for(let[a,c]of i.entries())c.length===1&&(i[a]="0"+c);return"#"+i.join("")}function Jn(e){e=e.replace("#","");let r=e.length===3,t=e.length===6,o=e.length===8;if(!r&&!t&&!o)throw new Error("unexpected hex "+e);let i=0,a=0,c=0;return r?(i=De(e.slice(0,1).repeat(2)),a=De(e.slice(1,2).repeat(2)),c=De(e.slice(2,3).repeat(2))):t?(i=De(e.slice(0,2)),a=De(e.slice(2,4)),c=De(e.slice(4,6))):o&&(i=De(e.slice(2,4)),a=De(e.slice(4,6)),c=De(e.slice(6,8))),(255<<24|(i&255)<<16|(a&255)<<8|c&255)>>>0}function De(e){return parseInt(e,16)}var io=class e{constructor(){this.content=""}static create(){return new e}add(r,t){let o=`  ${r}: ${t};
`;return this.content+=o,this}addFromArgb(r,t){return this.add(`--u-color-${r}`,ji(t)),this}addLightAndDarkFromArgb(r,t,o){return this.add(`--u-color-${r}`,`light-dark(${ji(t)}, ${ji(o)})`),this}build(){return this.content}};var mc=[{name:"surface",lightTone:98,darkTone:6},{name:"surface-bright",lightTone:98,darkTone:24},{name:"surface-dim",lightTone:87,darkTone:6},{name:"surface-container-lowest",lightTone:100,darkTone:4},{name:"surface-container-low",lightTone:96,darkTone:10},{name:"surface-container",lightTone:94,darkTone:12},{name:"surface-container-high",lightTone:92,darkTone:17},{name:"surface-container-highest",lightTone:90,darkTone:22},{name:"on-surface",lightTone:10,darkTone:90},{name:"light",fixedTone:98},{name:"on-light",fixedTone:10},{name:"dark",fixedTone:6},{name:"on-dark",fixedTone:90},{name:"scrim",fixedTone:0},{name:"shadow",fixedTone:0}],fc=[{name:"surface-variant",lightTone:90,darkTone:30},{name:"on-surface-variant",lightTone:30,darkTone:80},{name:"outline",lightTone:50,darkTone:60},{name:"outline-variant",lightTone:80,darkTone:30}];var Mh=(e,r)=>`${e} {
${r}}`,gc=class e{#t;constructor(r){this.colors=[],this.partial=!1,this.cssClass=null,this.#t=vr.of(Jn(r)),this.addColorFromPalette("primary",this.#t.a1)}static create(r){return new e(r)}static createPartial(r){let t=new e(r);return t.partial=!0,t}addColorFromHex(r,t){let o=Z.fromInt(Jn(t));return this.addColorFromPalette(r,o),this}addColorFromPalette(r,t){return this.colors.push({name:r,lightTone:40,darkTone:80,tonalPalette:t}),this.colors.push({name:`on-${r}`,lightTone:100,darkTone:20,tonalPalette:t}),this.colors.push({name:`${r}-container`,lightTone:90,darkTone:30,tonalPalette:t}),this.colors.push({name:`on-${r}-container`,lightTone:10,darkTone:90,tonalPalette:t}),this.colors.push({name:`${r}-fixed`,fixedTone:90,tonalPalette:t}),this.colors.push({name:`${r}-fixed-dim`,fixedTone:80,tonalPalette:t}),this.colors.push({name:`on-${r}-fixed`,fixedTone:10,tonalPalette:t}),this.colors.push({name:`on-${r}-fixed-variant`,fixedTone:30,tonalPalette:t}),this}addStaticColor(r,t,o=80){let i=Z.fromInt(Jn(t));return this.colors.push({name:r,fixedTone:o,tonalPalette:i}),this.colors.push({name:`on-${r}`,fixedTone:15,tonalPalette:i}),this.colors.push({name:`${r}-container`,fixedTone:90,tonalPalette:i}),this.colors.push({name:`on-${r}-container`,fixedTone:15,tonalPalette:i}),this}setCssClass(r){return this.cssClass=r,this}ensureCssClassStartsWithDot(){!this.cssClass||this.cssClass.startsWith(".")||(this.cssClass=`.${this.cssClass}`)}ensureThemeColors(){this.colors.find(r=>r.name==="secondary")||this.addColorFromPalette("secondary",this.#t.a2),this.colors.find(r=>r.name==="tertiary")||this.addColorFromPalette("tertiary",this.#t.a3)}ensureStatusColors(){this.colors.find(r=>r.name==="success")||this.addStaticColor("success","#198754",60),this.colors.find(r=>r.name==="info")||this.addStaticColor("info","#0dcaf0"),this.colors.find(r=>r.name==="warning")||this.addStaticColor("warning","#ffc107"),this.colors.find(r=>r.name==="error")||this.addColorFromHex("error","#b3261e")}getNeutralVariables(){let r=io.create();return this.addColors(r,mc,this.#t.n1),r.add("--u-color-body","var(--u-color-surface)").add("--u-color-inverse-body","var(--u-color-inverse-surface)").add("--u-color-on-body","var(--u-color-on-surface)").add("--u-color-on-inverse-body","var(--u-color-on-inverse-surface)"),r.build()}getNeutralVariantVariables(){let r=io.create();return this.addColors(r,fc,this.#t.n2),r.build()}getColorVariables(r){let t=io.create();return this.addToneColor(t,r,r.tonalPalette),t.build()}getColorsVariables(){let r="";for(let t of this.colors)r+=this.getColorVariables(t);return r+=this.getNeutralVariables(),r+=this.getNeutralVariantVariables(),r}addColors(r,t,o){for(let i of t)this.addToneColor(r,i,o)}addToneColor(r,t,o){if(t.fixedTone!==void 0){r.addFromArgb(t.name,o.tone(t.fixedTone));return}let i=`inverse-${t.name}`.replace("inverse-on","on-inverse");if(r.addLightAndDarkFromArgb(t.name,o.tone(t.lightTone),o.tone(t.darkTone)).addLightAndDarkFromArgb(i,o.tone(t.darkTone),o.tone(t.lightTone)),t.name==="surface"||t.name==="on-surface"){let a=t.name.startsWith("on-")?"on-":"";r.addFromArgb(`${a}light-surface`,o.tone(t.lightTone)),r.addFromArgb(`${a}dark-surface`,o.tone(t.darkTone))}}build(){this.ensureCssClassStartsWithDot();let r=this.cssClass??":root";return this.ensureThemeColors(),this.partial||this.ensureStatusColors(),`${Mh(r,this.getColorsVariables())}
`}};var vc=e=>{let[r,t]=e.split("-");return t?`${r.toLowerCase()}-${t.toUpperCase()}`:r.toLowerCase()};(function(){"weekInfo"in Intl.Locale.prototype&&typeof Intl.Locale.prototype.getWeekInfo!="function"&&(Intl.Locale.prototype.getWeekInfo=function(){return this.weekInfo}),typeof Intl.Locale.prototype.getWeekInfo!="function"&&import("./chunk-RTTSNGLB.js").then(({weekInfoData:e})=>{Intl.Locale.prototype.getWeekInfo=function(){var r;let t=this.toString(),o=vc(t),i=e[o];if(!i){let a=o.split("-")[0];i=e[a]}return i||(i=(r=Object.entries(e).find(([a])=>vc(a)===o))==null?void 0:r[1]),i}})})();var bc=v`
  :host {
    display: block;
  }

  slot[name=leading-icon]::slotted(u-icon-button) {
    color: inherit;
  }

  .container {
    background-color: var(--u-top-app-bar-container-color, var(--u-color-body, var(--u-color-surface, rgb(254, 247, 255))));
    color: var(--u-top-app-bar-text-color, var(--u-color-on-surface, rgb(29, 27, 32)));
    transition: background-color 100ms, inset 375ms cubic-bezier(0.19, 1, 0.22, 1);
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

  .trailing-icon {
    padding-inline: var(--u-trailing-icon-margin, 8px);
    margin-inline-start: auto;
  }
`;var us,Pe,yc,xc,br,ds,yr,qt=(yr=class extends A{constructor(){super(...arguments);m(this,Pe);m(this,br);this._hasLeadingIcon=!1,this._hasTrailingIcon=!1,this.position="fixed",this.size="small",this.headline="",this.containerScrolled=!1,this.containerSizeObserver=null,this.scrollContainerElement=null,h(this,br,()=>{let t=this.scrollContainerElement??window,o=Math.max(this._extendedContent?.offsetHeight??0,0),i=us._getScrollTop(t);if(this.containerScrolled=i>o,this._headlineElement.style.opacity=i>=o?"1":"0",o===0)return;let a=this._extendedContent.offsetHeight*.7;if(i>a){this._extendedContent.style.opacity="0";return}this._extendedContent.style.opacity=1-i/a+""})}get scrollContainer(){return this.attributes.getNamedItem("scrollContainer")?.value}set scrollContainer(t){this.scrollContainerElement?.removeEventListener("scroll",l(this,br)),t!=="none"&&(this.scrollContainerElement=this.getScrollContainer(t),this.scrollContainerElement?.addEventListener("scroll",l(this,br)))}getScrollContainer(t){return t instanceof HTMLElement?t:t==="window"?window:document.getElementById(t)}render(){let t=p`
      <div class="extended-content" part="extended-content">
        <slot name="extended-content">${this.headline}</slot>
      </div>
    `,o=H({[this.position]:!0,[this.size]:!0,scrolled:this.containerScrolled,"has-leading-icon":this._hasLeadingIcon,"has-trailing-icon":this._hasTrailingIcon}),i=this.position!=="static"?p`<div class="spacing"></div>`:T;return p`
      ${i}
      <div class="container ${o}" part="container">
        <div class="content" part="content">
          <div class="icon leading-icon" part="icon leading">
            <slot name="leading-icon" @slotchange="${u(this,Pe,yc)}"></slot>
          </div>
          <div class="headline" part="headline">
            <slot>
              <span>${this.headline}</span>
            </slot>
          </div>

          <div class="icon trailing-icon" part="icon trailing">
            <slot name="trailing-icon" @slotchange="${u(this,Pe,xc)}"></slot>
          </div>
        </div>
        <slot name="additional-content"></slot>
      </div>
      ${this.size!=="small"?t:T}
    `}updated(t){super.updated(t),l(this,br).call(this)}firstUpdated(t){super.firstUpdated(t),this.containerSizeObserver=new ResizeObserver(()=>u(this,Pe,ds).call(this)),this.containerSizeObserver.observe(this._container),u(this,Pe,ds).call(this)}connectedCallback(){super.connectedCallback(),this.scrollContainer=this.scrollContainer||"window"}disconnectedCallback(){super.disconnectedCallback(),this.containerSizeObserver.disconnect(),this.containerSizeObserver=null}static _getScrollTop(t){return typeof t.scrollY=="number"?t.scrollY:typeof t.scrollTop=="number"?t.scrollTop:document.body.scrollTop}},Pe=new WeakSet,yc=function(){this._hasLeadingIcon=this.assignedLeadingIcons.length>0},xc=function(){this._hasTrailingIcon=this.assignedTrailingIcons.length>0},br=new WeakMap,ds=function(){this.style.setProperty("--_content-height",`${this._container.clientHeight}px`)},us=yr,yr.styles=[G,bc],yr);n([S()],qt.prototype,"_hasLeadingIcon",void 0);n([S()],qt.prototype,"_hasTrailingIcon",void 0);n([d({reflect:!0})],qt.prototype,"position",void 0);n([d({reflect:!0})],qt.prototype,"size",void 0);n([d()],qt.prototype,"headline",void 0);n([d({reflect:!0})],qt.prototype,"scrollContainer",null);n([S()],qt.prototype,"containerScrolled",void 0);n([mt({slot:"leading-icon",flatten:!0})],qt.prototype,"assignedLeadingIcons",void 0);n([mt({slot:"trailing-icon",flatten:!0})],qt.prototype,"assignedTrailingIcons",void 0);n([k(".container",!0)],qt.prototype,"_container",void 0);n([k(".extended-content")],qt.prototype,"_extendedContent",void 0);n([k(".headline")],qt.prototype,"_headlineElement",void 0);qt=us=n([y("u-top-app-bar")],qt);var _c=v`
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
`;var hs=class hs extends A{constructor(){super(...arguments),this.alignment="start"}render(){return p`
      <slot></slot>`}};hs.styles=[_c];var Le=hs;n([d({reflect:!0})],Le.prototype,"alignment",void 0);var wc=v`
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
`;var no,ps=(no=class extends Le{constructor(){super(...arguments),this.stack=!1,this.alignment="end"}},no.styles=[Le.styles,wc],no);n([d({type:Boolean,reflect:!0})],ps.prototype,"stack",void 0);ps=n([y("u-button-set")],ps);var Cc=v`
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
`;var ao,so=(ao=class extends Xt{constructor(){super(...arguments),this.color="primary",this.size="medium",this.label=null,this.lowered=!1}get extended(){return!!this.label}_getContainerClasses(){return J(U({},super._getContainerClasses()),{[this.color]:!0,[this.size]:!0,lowered:this.lowered,extended:this.extended})}_renderContent(){let r=p`<span>${this.label}</span>`;return p`
      <span class="icon" aria-hidden="true"><slot></slot></span>
      ${this.label?r:T}
    `}},ao.styles=[Xt.styles,Cc],ao);n([d()],so.prototype,"color",void 0);n([d()],so.prototype,"size",void 0);n([d()],so.prototype,"label",void 0);n([d({type:Boolean,reflect:!0})],so.prototype,"lowered",void 0);so=n([y("u-fab")],so);var Ge=class extends Event{constructor(r,t,o,i){super("context-request",{bubbles:!0,composed:!0}),this.context=r,this.contextTarget=t,this.callback=o,this.subscribe=i??!1}};var lo=class{constructor(r,t,o,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(a,c)=>{this.unsubscribe&&(this.unsubscribe!==c&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=a,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(a,c)),this.unsubscribe=c},this.host=r,t.context!==void 0){let a=t;this.context=a.context,this.callback=a.callback,this.subscribe=a.subscribe??!1}else this.context=t,this.callback=o,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Ge(this.context,this.host,this.t,this.subscribe))}};var Qn=class{get value(){return this.o}set value(r){this.setValue(r)}setValue(r,t=!1){let o=t||!Object.is(r,this.o);this.o=r,o&&this.updateObservers()}constructor(r){this.subscriptions=new Map,this.updateObservers=()=>{for(let[t,{disposer:o}]of this.subscriptions)t(this.o,o)},r!==void 0&&(this.value=r)}addCallback(r,t,o){if(!o)return void r(this.value);this.subscriptions.has(r)||this.subscriptions.set(r,{disposer:()=>{this.subscriptions.delete(r)},consumerHost:t});let{disposer:i}=this.subscriptions.get(r);r(this.value,i)}clearCallbacks(){this.subscriptions.clear()}};var ms=class extends Event{constructor(r,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=r,this.contextTarget=t}},Ye=class extends Qn{constructor(r,t,o){super(t.context!==void 0?t.initialValue:o),this.onContextRequest=i=>{if(i.context!==this.context)return;let a=i.contextTarget??i.composedPath()[0];a!==this.host&&(i.stopPropagation(),this.addCallback(i.callback,a,i.subscribe))},this.onProviderRequest=i=>{if(i.context!==this.context||(i.contextTarget??i.composedPath()[0])===this.host)return;let a=new Set;for(let[c,{consumerHost:f}]of this.subscriptions)a.has(c)||(a.add(c),f.dispatchEvent(new Ge(this.context,f,c,!0)));i.stopPropagation()},this.host=r,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new ms(this.context,this.host))}};function ta({context:e}){return(r,t)=>{let o=new WeakMap;if(typeof t=="object")return{get(){return r.get.call(this)},set(i){return o.get(this).setValue(i),r.set.call(this,i)},init(i){return o.set(this,new Ye(this,{context:e,initialValue:i})),i}};{r.constructor.addInitializer(c=>{o.set(c,new Ye(c,{context:e}))});let i=Object.getOwnPropertyDescriptor(r,t),a;if(i===void 0){let c=new WeakMap;a={get(){return c.get(this)},set(f){o.get(this).setValue(f),c.set(this,f)},configurable:!0,enumerable:!0}}else{let c=i.set;a=J(U({},i),{set(f){o.get(this).setValue(f),c?.call(this,f)}})}return void Object.defineProperty(r,t,a)}}}function co({context:e,subscribe:r}){return(t,o)=>{typeof o=="object"?o.addInitializer(function(){new lo(this,{context:e,callback:i=>{t.set.call(this,i)},subscribe:r})}):t.constructor.addInitializer(i=>{new lo(i,{context:e,callback:a=>{i[o]=a},subscribe:r})})}}var ea=Symbol("fabMenuColorContext");var kc=v`
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
`;var ra=Symbol("fabMenuOpenContext");var uo,oa,Tc,ho,Me=(ho=class extends Xt{constructor(){super(...arguments);m(this,oa);m(this,uo);h(this,uo,0),this.label=null,this._hasIcon=!1}get _index(){return l(this,uo)}set _index(t){h(this,uo,t),this.style.setProperty("--_animation-delay-increment",t.toString())}_getContainerClasses(){return J(U({},super._getContainerClasses()),{open:this._menuOpen,[this._color]:!0,"has-icon":this._hasIcon})}_renderContent(){return p`
      <span class="clipper"></span>
      <span class="icon" aria-hidden="true">
        <slot @slotchange=${u(this,oa,Tc)}></slot>
      </span>
      <span class="label">${this.label}</span>
    `}},uo=new WeakMap,oa=new WeakSet,Tc=function(t){this._hasIcon=t.target.assignedElements({flatten:!0}).length>0},ho.styles=[Xt.styles,kc],ho);n([co({context:ea,subscribe:!0}),S()],Me.prototype,"_color",void 0);n([co({context:ra,subscribe:!0}),S()],Me.prototype,"_menuOpen",void 0);n([d()],Me.prototype,"label",void 0);n([S()],Me.prototype,"_hasIcon",void 0);n([S()],Me.prototype,"_index",null);Me=n([y("u-fab-menu-item")],Me);var Ec=v`
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
`;var fo,Ic,Ac,po,mo=(po=class extends A{constructor(){super(...arguments);m(this,fo);this.color="primary",this.size="medium",this.lowered=!1,this.open=!1}render(){let t=H({open:this.open,[this.color]:!0});return p`
      <div class="container ${t}">
        <div class="menu-items">
          <slot @slotchange=${u(this,fo,Ac)}></slot>
        </div>
        <u-fab class="toggle-container" .size=${this.size}>
          <u-fab 
            class="toggle"
            .color=${this.color}
            .lowered=${this.lowered}
            .size=${this.open?"medium":this.size}
            @click=${u(this,fo,Ic)}>
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
    `}},fo=new WeakSet,Ic=function(){this.open=!this.open},Ac=function(t){let o=t.target.assignedElements({flatten:!0}),i=0;for(let a of o.filter(c=>c instanceof Me).reverse())a._index=i,i++},po.styles=[Ec],po);n([ta({context:ea}),d()],mo.prototype,"color",void 0);n([d()],mo.prototype,"size",void 0);n([d({type:Boolean,reflect:!0})],mo.prototype,"lowered",void 0);n([ta({context:ra}),S()],mo.prototype,"open",void 0);mo=n([y("u-fab-menu")],mo);var Sc=v`
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
`;var Dc=v`
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
`;var go,gs=(go=class extends A{constructor(){super(...arguments),this.hasContent=!1}render(){return p`
      <slot @slotchange="${this.handleSlotChange}"></slot>`}handleSlotChange(r){let t=r.target;if(this.hasContent=t.assignedElements({flatten:!0}).length>0,this.hasContent)return;let o=t.assignedNodes({flatten:!0});for(let i of o)if(i.nodeValue?.trim()){this.hasContent=!0;return}this.hasContent=!1}},go.styles=[G,Dc],go);n([d({type:Boolean,attribute:"has-content",reflect:!0})],gs.prototype,"hasContent",void 0);gs=n([y("u-card-content")],gs);var Pc=v`
  :host {
    display: block;
    aspect-ratio: 1;
    border-radius: var(--u-card-shape-corner, var(--u-shape-corner-medium, 12px));
  }

  :host([wide]) {
    aspect-ratio: 16/9;
  }
`;var vo,vs=(vo=class extends A{constructor(){super(...arguments),this.wide=!1}render(){return p`
      <slot></slot>`}},vo.styles=[G,Pc],vo);n([d({type:Boolean,reflect:!0})],vs.prototype,"wide",void 0);vs=n([y("u-card-media")],vs);var bo,bs=(bo=class extends A{constructor(){super(...arguments),this.variant="filled"}render(){return p`
      <u-elevation></u-elevation>
      <slot name="before-content"></slot>
      <u-card-content part="content">
        <slot></slot>
      </u-card-content>
      <slot name="after-content"></slot>
    `}},bo.styles=[G,Sc],bo);n([d({reflect:!0})],bs.prototype,"variant",void 0);bs=n([y("u-card")],bs);var Lc=v`
  :host {
    --_height: var(--u-chip-height, 32px);
    --_outline-width: var(--u-chip-outline-width, 1px);
    --_outline-color: var(--u-chip-outline-color, var(--u-color-outline, rgb(121, 116, 126)));
    --_shape: var(--u-chip-shape, var(--u-shape-corner-small, 8px));
    --_gap: var(--u-chip-gap, 8px);
    --_icon-size: var(--u-chip-icon-size, 1.125rem);
    --_remove-button-margin: var(--u-chip-remove-button-margin, 2px);
    --_remove-button-size: calc(var(--_height) - var(--_remove-button-margin) * 2);
    --_selected-icon-color: var(--u-chip-selected-icon-color, var(--u-color-on-secondary-container, rgb(29, 25, 43)));
    display: inline-block;
  }

  .container {
    height: var(--_height);
    border-radius: var(--_shape);
    padding-inline: var(--u-chip-padding, 16px);
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
`;var Re,ze,be,Mc,Rc,zc,Oc,yo,$t=(yo=class extends Q{constructor(){super(...arguments);m(this,be);m(this,Re);m(this,ze);h(this,Re,!1),h(this,ze,!1),this.selected=!1,this.elevated=!1,this.removable=!1,this.hideSelectedIcon=!1,this._hasLeadingIcon=!1,this._hasSelectedIcon=!1,this._hasTrailingIcon=!1}get clickable(){return l(this,Re)}set clickable(t){h(this,Re,t),this.renderRipple=l(this,Re)||l(this,ze)}get toggle(){return l(this,ze)}set toggle(t){h(this,ze,t),this.renderRipple=l(this,Re)||l(this,ze)}connectedCallback(){super.connectedCallback(),this.renderRipple=l(this,Re)||l(this,ze)}_handleClick(t){super._handleClick(t),this.toggle&&(this.selected=!this.selected,this.dispatchEvent(new Event("change",{bubbles:!0})))}_getContainerClasses(){return J(U({},super._getContainerClasses()),{clickable:this.clickable,toggle:this.toggle,selected:this.selected,removable:this.removable,elevated:this.elevated&&!this.disabled,"trailing-icon":this._hasTrailingIcon,"leading-icon":this._hasLeadingIcon,"selected-icon":this._hasSelectedIcon,"hide-selected-icon":this.hideSelectedIcon})}_renderContent(){let t=p`
      <button class="icon remove-button focus-ring" ?disabled=${this.disabled} @click=${u(this,be,Mc)}>
        <u-ripple id="remove-ripple" ?disabled=${this.disabled}></u-ripple>
        <slot name="remove-icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill="currentColor">
            <path
              d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </slot>
      </button>
    `,o=!this.disabled&&!this.elevated&&!this.selected?p`<div class="outline"></div>`:T;return p`
      ${o}
      <span class="icon leading" part="icon leading">
        <slot name="leading-icon" @slotchange="${u(this,be,zc)}"></slot>
      </span>
      <span class="icon icon-selected" part="icon selected">
        <slot name="icon-selected" @slotchange="${u(this,be,Oc)}">
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
      <div class="label">
        <slot></slot>
      </div>
      <slot
        class="icon trailing"
        part="icon trailing"
        name="trailing-icon"
        @slotchange="${u(this,be,Rc)}"></slot>
      ${this.removable?t:T}
    `}},Re=new WeakMap,ze=new WeakMap,be=new WeakSet,Mc=function(t){t.stopPropagation(),t.pointerType||this.removeRipple.createRipple();let o=new Event("remove",{cancelable:!0});this.dispatchEvent(o),o.defaultPrevented||this.remove()},Rc=function(){this._hasTrailingIcon=this._assignedTrailingIcons.length>0},zc=function(){this._hasLeadingIcon=this._assignedLeadingIcons.length>0},Oc=function(){this._hasSelectedIcon=this._assignedSelectedIcons.length>0},yo.styles=[Q.styles,Lc],yo);n([d({type:Boolean,reflect:!0})],$t.prototype,"selected",void 0);n([d({type:Boolean,reflect:!0})],$t.prototype,"clickable",null);n([d({type:Boolean,reflect:!0})],$t.prototype,"elevated",void 0);n([d({type:Boolean,reflect:!0})],$t.prototype,"toggle",null);n([d({type:Boolean,reflect:!0})],$t.prototype,"removable",void 0);n([d({type:Boolean,attribute:"hide-selected-icon",reflect:!0})],$t.prototype,"hideSelectedIcon",void 0);n([S()],$t.prototype,"_hasLeadingIcon",void 0);n([S()],$t.prototype,"_hasSelectedIcon",void 0);n([S()],$t.prototype,"_hasTrailingIcon",void 0);n([mt({slot:"leading-icon",flatten:!0})],$t.prototype,"_assignedLeadingIcons",void 0);n([mt({slot:"icon-selected",flatten:!0})],$t.prototype,"_assignedSelectedIcons",void 0);n([mt({slot:"trailing-icon",flatten:!0})],$t.prototype,"_assignedTrailingIcons",void 0);n([k("#remove-ripple")],$t.prototype,"removeRipple",void 0);$t=n([y("u-chip")],$t);var $c=v`
  :host {
    flex-wrap: wrap;
  }
`;var xo,Bc=(xo=class extends Le{},xo.styles=[Le.styles,$c],xo);Bc=n([y("u-chip-set")],Bc);var Wi=class extends qe{constructor(r){if(super(r),this.it=T,r.type!==ne.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===T||r==null)return this._t=void 0,this.it=r;if(r===Te)return r;if(typeof r!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;let t=[r];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Wi.directiveName="unsafeHTML",Wi.resultType=1;var Nc=Zr(Wi);var Fc=v`
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
`;var ys="u-field-defaults-context";var xs=class xs extends A{static setDefaults(r,t){return new Ye(r,{context:ys,initialValue:t})}constructor(){super(),this.variant="filled",this.hideCounter=!1,this.empty=!1,this.disabled=!1,this.invalid=!1,this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.hasErrorText=!1,this.variant=void 0}render(){let r=this.variant??this.config?.variant??"filled",t={[r]:!0,"no-label":!this.label},o=p`
      <slot class="counter" name="counter">
        <div>${this.counter??this._innerCounter}</div>
      </slot>
    `,i=p`
      <div class="outline">
        <div class="outline-start"></div>
        <div class="outline-notch">
          <div class="outline-notch-label">${this.label}</div>
        </div>
        <div class="outline-end"></div>
      </div>
    `;return p`
      <div class="container ${H(t)}">
        ${r==="outlined"?i:T}
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
        ${this.hideCounter?T:o}
      </div>
      ${this.renderAfterContent()}
    `}renderAfterContent(){return p``}connectedCallback(){super.connectedCallback(),this.hasLeadingIcon=!!this.assignedLeadingIcons.length}handleLeadingIconSlotChange(){this._labelElement.style.transition="none",this.hasLeadingIcon=this.assignedLeadingIcons.length>0,setTimeout(()=>{this._labelElement.style.transition=""})}handleTrailingIconSlotChange(){this.hasTrailingIcon=this.assignedTrailingIcons.length>0}handleErrorTextSlotChange(){this.hasErrorText=this.assignedErrorTexts.length>0}renderDefaultTrailingIcon(){return T}};xs.styles=[G,Fc];var tt=xs;n([co({context:ys,subscribe:!0}),S()],tt.prototype,"config",void 0);n([d()],tt.prototype,"variant",void 0);n([d()],tt.prototype,"label",void 0);n([S()],tt.prototype,"_innerCounter",void 0);n([d()],tt.prototype,"counter",void 0);n([d({type:Boolean,attribute:"hide-counter"})],tt.prototype,"hideCounter",void 0);n([d({attribute:"supporting-text"})],tt.prototype,"supportingText",void 0);n([d({attribute:"error-text"})],tt.prototype,"errorText",void 0);n([d({type:Boolean,reflect:!0})],tt.prototype,"empty",void 0);n([d({type:Boolean,reflect:!0})],tt.prototype,"disabled",void 0);n([d({type:Boolean,reflect:!0})],tt.prototype,"invalid",void 0);n([d({type:Boolean,attribute:"has-leading-icon",reflect:!0})],tt.prototype,"hasLeadingIcon",void 0);n([d({type:Boolean,attribute:"has-trailing-icon",reflect:!0})],tt.prototype,"hasTrailingIcon",void 0);n([d({type:Boolean,attribute:"has-error-text",reflect:!0})],tt.prototype,"hasErrorText",void 0);n([mt({slot:"leading-icon",flatten:!0})],tt.prototype,"assignedLeadingIcons",void 0);n([mt({slot:"trailing-icon",flatten:!0})],tt.prototype,"assignedTrailingIcons",void 0);n([mt({slot:"error-text",flatten:!0})],tt.prototype,"assignedErrorTexts",void 0);n([k(".label",!0)],tt.prototype,"_labelElement",void 0);n([k(".container",!0)],tt.prototype,"_container",void 0);var Uc=v`
  .container {
    cursor: text;
  }

  :host([disabled]) .container {
    cursor: default;
  }
`;var Gi=class Gi extends tt{get form(){return this.elementInternals.form}constructor(){super(),this.empty=!0,this.placeholder="",this.elementInternals=this.attachInternals()}};Gi.formAssociated=!0,Gi.styles=[tt.styles,Uc],Gi.shadowRootOptions=J(U({},A.shadowRootOptions),{delegatesFocus:!0});var dt=Gi;n([d({reflect:!0})],dt.prototype,"placeholder",void 0);var Hc=v`
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
`;var _o,ft,Vc,qc,jc,Wc,wo,_s,ws,Cs,Gc,Co,Yi=(Co=class extends dt{constructor(){super(...arguments);m(this,ft);m(this,_o);m(this,wo);this.manual=!1,h(this,_o,[]),h(this,wo,t=>o=>{o?.preventDefault(),this.input.focus(),!u(this,ft,Gc).call(this,t)&&this.removeAt(t,!0)})}get value(){return l(this,_o)}set value(t){h(this,_o,t),u(this,ft,ws).call(this)}setFormValue(){let t=new FormData;for(let o of this.value)t.append(this.name,this.getItemLabel(o));this.elementInternals.setFormValue(t)}focus(){this.input.focus()}renderControl(){return p`
      <div class="input">
        ${u(this,ft,Vc).call(this)}
        <input
          part="input"
          id=${this.id||T}
          aria-labelledby="label"
          ?disabled=${this.disabled}
          placeholder=${this.placeholder||T}
          @blur=${u(this,ft,qc)}
          @keydown=${u(this,ft,Wc)}
          @input=${u(this,ft,jc)} />
      </div>
    `}add(t,o=!1){this.value.push(t),u(this,ft,_s).call(this,o)}removeAt(t,o=!1){this.value.splice(t,1),u(this,ft,_s).call(this,o)}getItemLabel(t){return this.formatter?this.formatter(t):t.toString()}},_o=new WeakMap,ft=new WeakSet,Vc=function(){return this.value?.map((t,o)=>{let i=this.leadingIconTemplate?p`
            <span slot="leading-icon">${Nc(this.leadingIconTemplate(t))}</span>
          `:T;return p`
        <u-chip removable ?disabled=${this.disabled} @remove=${l(this,wo).call(this,o)}>
          ${i} ${this.getItemLabel(t)}
        </u-chip>
      `})},qc=function(){this.requestUpdate()},jc=function(){u(this,ft,Cs).call(this)},Wc=function(t){if(!this.manual&&t.key==="Enter"){this.add(this.input.value,!0),this.input.value="";return}if(t.key==="Backspace"&&this.input.selectionStart===0&&this.input.selectionEnd===0){l(this,wo).call(this,this.value.length-1)();return}},wo=new WeakMap,_s=function(t){u(this,ft,ws).call(this),t&&this.dispatchEvent(new Event("change",{bubbles:!0}))},ws=function(){u(this,ft,Cs).call(this),this.setFormValue(),this.requestUpdate()},Cs=function(){this.empty=!this.value?.length&&!this.input?.value},Gc=function(t){let o=this.value[t],i=new CustomEvent("remove",{cancelable:!0,detail:o});return this.dispatchEvent(i),i.defaultPrevented},Co.styles=[dt.styles,Hc],Co);n([k("input")],Yi.prototype,"input",void 0);n([d()],Yi.prototype,"name",void 0);n([d({type:Boolean})],Yi.prototype,"manual",void 0);Yi=n([y("u-chip-field")],Yi);var{I:I1}=Cl;var Yc=e=>e.strings===void 0;var Rh={},Xc=(e,r=Rh)=>e._$AH=r;var ye=Zr(class extends qe{constructor(e){if(super(e),e.type!==ne.PROPERTY&&e.type!==ne.ATTRIBUTE&&e.type!==ne.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Yc(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[r]){if(r===Te||r===T)return r;let t=e.element,o=e.name;if(e.type===ne.PROPERTY){if(r===t[o])return Te}else if(e.type===ne.BOOLEAN_ATTRIBUTE){if(!!r===t.hasAttribute(o))return Te}else if(e.type===ne.ATTRIBUTE&&t.getAttribute(o)===r+"")return Te;return Xc(e),r}});var Dt=class extends dt{constructor(){super(...arguments),this._value="",this.role=null}get value(){return this._value}set value(r){this._value=r,this.empty=!r,this.elementInternals.setFormValue(r),this.#e()}#t;get maxlength(){return this.#t}set maxlength(r){this.#t=r,this.#e()}focus(){this.input.focus()}_handleKeyDown(r){r.key==="Enter"&&this.elementInternals.form?.requestSubmit()}_handleInput(){this.value=this.input.value,this.#e()}#e(){if(this.maxlength){this._innerCounter=`${this.value.length}/${this.maxlength}`;return}this._innerCounter=void 0}};n([d()],Dt.prototype,"value",null);n([d({reflect:!0})],Dt.prototype,"autocomplete",void 0);n([d({type:Number,reflect:!0})],Dt.prototype,"maxlength",null);n([d({reflect:!0})],Dt.prototype,"role",void 0);var ko=v`
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
`;var ia=v`

`;var zh=/^\d{4}-\d{2}-\d{2}$/;function Oh(e){if(!zh.test(e))return null;let[r,t,o]=e.split("-").map(Number);return new Date(r,t-1,o)}function na(e,r,t){if(!e||r==="iso")return e;let o=Oh(e);if(!o)return e;let i=typeof r=="string"?{dateStyle:r}:r;return new Intl.DateTimeFormat(t??void 0,i).format(o)}function Kc(e,r,t){if(!e||r==="iso")return e;let o=e.split(" - ");if(o.length!==2)return e;let[i,a]=o;return`${na(i,r,t)} - ${na(a,r,t)}`}var Zc=v`
  :host {
    --_date-size: var(--u-calendar-date-size, 40px);
    display: inline-block;
  }

  .calendar {
    display: grid;
    grid-template-columns: repeat(7, 48px);
    align-items: center;
  }

  .calendar-item {
    --u-ripple-border-radius: 9999px;
    position: relative;
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
`;var aa=class{constructor(){this.weekDayFormat="narrow",this.locale="pt-br"}getWeekDays(r){let t=new Date,o=this.getFirstDayOfWeek(r);this.#t(t,o);let i=[];for(let a=0;a<7;a++)i.push(t.toLocaleDateString(r,{weekday:this.weekDayFormat})),t.setDate(t.getDate()+1);return i}getFirstDayOfWeek(r){let t=new Intl.Locale(r);return(t.getWeekInfo?t.getWeekInfo():t.weekinfo).firstDay%7}#t(r,t){let o=(t-r.getDay()+7)%7;r.setDate(r.getDate()+o)}getDay(r){return r.toLocaleDateString(this.locale,{day:"numeric"})}getMonth(r){return r.toLocaleDateString(this.locale,{month:"long",year:"numeric"})}getYear(r){return r.toLocaleDateString(this.locale,{year:"numeric"})}getMonthShort(r,t){return new Date(2e3,r,1).toLocaleDateString(t,{month:"short"})}};var Zt,Y,Jc,Qc,tu,ks,eu,ru,ou,iu,nu,au,Xi,Ki,Zi,sa,Ts,la,Es=class Es extends A{constructor(){super();m(this,Y);m(this,Zt);m(this,Xi);m(this,Ki);m(this,Zi);this.weekDays=[],this._firstDayOfWeek=0,this.dateRenderer=null,this.dateOutsideMonth=!1,this.yearRange=24,h(this,Zt,new Date),this.view="day",this._yearPageStart=0,this.locale=null,this._innerLocale=navigator.language,this.adapter=new aa,h(this,Xi,()=>{if(this.view==="day"){this._yearPageStart=u(this,Y,sa).call(this,this.year),this.view="year";return}if(this.view==="month"){this._yearPageStart=u(this,Y,sa).call(this,this.year),this.view="year";return}this.view="day"}),h(this,Ki,()=>{if(this.view==="year"){this._yearPageStart-=this.yearRange;return}if(this.view==="month"){this.year-=1;return}u(this,Y,Ts).call(this,-1)}),h(this,Zi,()=>{if(this.view==="year"){this._yearPageStart+=this.yearRange;return}if(this.view==="month"){this.year+=1;return}u(this,Y,Ts).call(this,1)}),l(this,Zt).setHours(0),l(this,Zt).setMinutes(0),l(this,Zt).setSeconds(0),l(this,Zt).setMilliseconds(0),this._displayingMonthDate=new Date(l(this,Zt)),this._displayingMonthDate.setDate(1),this._yearPageStart=u(this,Y,sa).call(this,this.year)}get year(){return this._displayingMonthDate.getFullYear()}set year(t){this._displayingMonthDate=new Date(t,this._displayingMonthDate.getMonth(),1)}get month(){return this._displayingMonthDate.getMonth()}set month(t){this._displayingMonthDate=new Date(this._displayingMonthDate.getFullYear(),t,1)}connectedCallback(){super.connectedCallback(),u(this,Y,la).call(this),window.addEventListener("languagechange",()=>{this.locale===null&&(this._innerLocale=navigator.language,u(this,Y,la).call(this))})}willUpdate(t){t.has("locale")&&(this._innerLocale=this.locale??navigator.language,u(this,Y,la).call(this))}render(){return p`
      <div>
        <u-button-set>
          <u-button class="month-button" type="button" variant="text" @click=${l(this,Xi)}>
            ${u(this,Y,Qc).call(this)}
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
          <u-icon-button class="previous-month-button" @click=${l(this,Ki)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 -960 960 960"
              width="1em"
              fill="currentColor">
              <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
            </svg>
          </u-icon-button>
          <u-icon-button @click=${l(this,Zi)}>
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
      ${u(this,Y,Jc).call(this)}
    `}_getCalendarClassMap(){return null}_getDateFromIsoDate(t){let o=new Date(t),i=o.getTimezoneOffset()*60*1e3;return o.setTime(o.getTime()+i),o}_getDateString(t){return t?Intl.DateTimeFormat("en-CA",{year:"numeric",month:"2-digit",day:"2-digit"}).format(t):""}_getDateFromString(t){if(!t)return null;let o=Date.parse(t);return!o&&o!==0?null:this._getDateFromIsoDate(t)}};Zt=new WeakMap,Y=new WeakSet,Jc=function(){return this.view==="year"?p`<div class="year-grid">${u(this,Y,ru).call(this)}</div>`:this.view==="month"?p`<div class="month-grid">${u(this,Y,ou).call(this)}</div>`:p`
      <div class="calendar ${this._getCalendarClassMap()}">${u(this,Y,tu).call(this)}${u(this,Y,eu).call(this)}</div>
    `},Qc=function(){return this.view==="month"?this.adapter.getYear(u(this,Y,ks).call(this)):this.adapter.getMonth(u(this,Y,ks).call(this))},tu=function(){return this.weekDays.map(t=>p`
          <div class="calendar-item">
            <span class="week-day">${t}</span>
          </div>
        `)},ks=function(){return new Date(this.year,this.month,1)},eu=function(){let t=this.year,o=this.month,a=(new Date(t,o,1).getDay()-this._firstDayOfWeek+7)%7,c=new Date(t,o,1-a),f=[];for(let x=0;x<6;x++)for(let _=0;_<7;_++){let w=c.getMonth()!==o,E=this._getSelectedDateClasses(c);!Object.keys(E).length&&l(this,Zt).getTime()===c.getTime()&&(E["current-date"]=!0),w&&(E["date-outside-month"]=!0);let I=H(E),z=!w||this.dateOutsideMonth,O=z?p`
              <u-ripple></u-ripple>
              <span class="date">
                ${this.dateRenderer?this.dateRenderer(new Date(c),this.adapter.getDay(c)):this.adapter.getDay(c)}
              </span>
            `:null,L=z?u(this,Y,iu).call(this,new Date(c)):null;f.push(p`
          <div
            class="calendar-item ${I}"
            @click=${L}>
            ${O}
          </div>
        `),c.setDate(c.getDate()+1)}return f},ru=function(){let t=[],o=l(this,Zt).getFullYear(),i=this.year;for(let a=0;a<this.yearRange;a++){let c=this._yearPageStart+a,f=H({"year-cell":!0,"current-year":c===o&&c!==i,"selected-year":c===i});t.push(p`
        <div class=${f} @click=${u(this,Y,nu).call(this,c)}>
          <span class="year-label">
            <u-ripple></u-ripple>
            ${c}
          </span>
        </div>
      `)}return t},ou=function(){let t=[],o=l(this,Zt).getFullYear(),i=l(this,Zt).getMonth(),a=this.month,c=this.year;for(let f=0;f<12;f++){let x=c===o&&f===i,_=f===a,w=H({"month-cell":!0,"current-month":x&&!_,"selected-month":_});t.push(p`
        <div class=${w} @click=${u(this,Y,au).call(this,f)}>
          <span class="month-label">
            <u-ripple></u-ripple>
            ${this.adapter.getMonthShort(f,this._innerLocale)}
          </span>
        </div>
      `)}return t},iu=function(t){return()=>this._selectDate(t)},nu=function(t){return()=>{this.year=t,this.view="month"}},au=function(t){return()=>{this.month=t,this.view="day"}},Xi=new WeakMap,Ki=new WeakMap,Zi=new WeakMap,sa=function(t){return t-Math.floor(this.yearRange/2)},Ts=function(t){this.month+=t},la=function(){this.adapter.locale=this._innerLocale,this.weekDays=this.adapter.getWeekDays(this._innerLocale),this._firstDayOfWeek=this.adapter.getFirstDayOfWeek(this._innerLocale)},Es.styles=[Zc];var It=Es;n([S()],It.prototype,"weekDays",void 0);n([S()],It.prototype,"_firstDayOfWeek",void 0);n([S()],It.prototype,"dateRenderer",void 0);n([d({type:Boolean})],It.prototype,"dateOutsideMonth",void 0);n([d({type:Number,attribute:"year-range"})],It.prototype,"yearRange",void 0);n([S()],It.prototype,"_displayingMonthDate",void 0);n([S()],It.prototype,"view",void 0);n([S()],It.prototype,"_yearPageStart",void 0);n([d()],It.prototype,"locale",void 0);var su=v`

`;var To,ca=(To=class extends It{constructor(){super(...arguments),this.dateValue=null}get value(){return this._getDateString(this.dateValue)}set value(r){this.dateValue=this._getDateFromString(r)}_selectDate(r){this.dateValue=r,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})),!(this.month===r.getMonth()&&this.year===r.getFullYear())&&(this.month=r.getMonth(),this.year=r.getFullYear())}_getSelectedDateClasses(r){return this.dateValue?.getTime()===r.getTime()?{"selected-date":!0}:{}}},To.styles=[su,It.styles],To);n([S()],ca.prototype,"dateValue",void 0);n([d()],ca.prototype,"value",null);ca=n([y("u-calendar")],ca);var lu=v`
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
`;var xr,Eo,B,cu,uu,Io,Ao,Ji,So,du,Qi,hu,pu,mu,fu,gu,Is,vu,As,Ss,Ds,ua,da,Do,le=(Do=class extends A{constructor(){super(...arguments);m(this,B);m(this,xr);m(this,Eo);m(this,Io);m(this,Ao);m(this,Ji);m(this,So);m(this,Qi);h(this,xr,!1),h(this,Eo,!1),this.autoclose=!0,this.positioning="relative",this.manualFocus=!1,this.anchorCorner="end-start",this.direction="down-end",this.allowOverflow=!1,h(this,Io,()=>this.dispatchEvent(new Event("opened"))),h(this,Ao,()=>{this.dispatchEvent(new Event("closed"))}),this.toggle=()=>{if(this.open){this.close();return}this.show()},this.close=()=>{this.open=!1},h(this,So,()=>{this.autoclose!==!1&&(this.open=!1)}),h(this,Qi,t=>{this.autoclose==="outside"&&t.stopPropagation()})}get open(){return l(this,xr)}set open(t){if(!this.menu){h(this,Eo,t);return}if(this.open===t)return;if(this.menu.removeEventListener("transitionend",l(this,Ao),!0),this.menu.removeEventListener("transitionend",l(this,Io),!0),!t){if(!this.dispatchEvent(new Event("close",{cancelable:!0})))return;h(this,xr,t),u(this,B,uu).call(this);return}this.dispatchEvent(new Event("open",{cancelable:!0}))&&(h(this,xr,t),u(this,B,cu).call(this))}get scrollContainer(){return this.menu}get anchorElement(){return l(this,Ji)??this.parentElement??this.getRootNode().host}set anchorElement(t){h(this,Ji,t)}render(){let t={open:this.open};return p`
      <div class="ref"></div>
      <div
        class="menu ${H(t)}" 
        part="menu"
        ?inert=${!this.open}
        @click=${l(this,Qi)}>
        <u-elevation></u-elevation>
        <div role="menu" class="content" part="content">
          <slot></slot>
        </div>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.role="listbox",u(this,B,du).call(this)}show(){this.open=!0}calcDropdownPositioning(){if(!this.anchorElement)return;let t=this.getMenuPosition(),o=this.getMenuSize();u(this,B,hu).call(this),u(this,B,pu).call(this,t,o),u(this,B,vu).call(this,t,o)}getMenuPosition(){let t=window.innerWidth,o=window.innerHeight,i=this.anchorElement,a=i.getBoundingClientRect(),c=this.ref.getBoundingClientRect(),f=getComputedStyle(i),x=f.direction==="rtl",_=parseInt(f.width,10),w=parseInt(f.height,10),E=c.left,I=c.top,z={left:a.left,right:t-a.left,relativeX:a.left-E},O={left:a.right,right:t-a.right,relativeX:z.relativeX+_},L={top:a.top,relativeY:a.top-I,bottom:o-a.top},K={top:L,bottom:{top:a.bottom,relativeY:L.relativeY+w,bottom:o-a.bottom},start:x?O:z,end:x?z:O,width:_,height:w};return{isRtl:x,bounds:K}}getMenuSize(){let t=this.menu;t.classList.add("measuring");let o=t.getBoundingClientRect();return t.classList.remove("measuring"),{width:o.width,height:o.height}}},xr=new WeakMap,Eo=new WeakMap,B=new WeakSet,cu=function(){this.calcDropdownPositioning(),this.menu.addEventListener("transitionend",l(this,Io),{capture:!0,once:!0}),setTimeout(()=>document.addEventListener("click",l(this,So))),!this.manualFocus&&setTimeout(()=>this.querySelector("u-menu-item:not([disabled])")?.focus())},uu=function(){document.removeEventListener("click",l(this,So)),this.menu.addEventListener("transitionend",l(this,Ao),{capture:!0,once:!0})},Io=new WeakMap,Ao=new WeakMap,Ji=new WeakMap,So=new WeakMap,du=function(){return at(this,null,function*(){yield this.updateComplete,l(this,Eo)&&(this.open=!0)})},Qi=new WeakMap,hu=function(){this.menu.className="menu",this.menu.style.top="",this.menu.style.bottom="",this.menu.style.left="",this.menu.style.right="",this.menu.style.maxHeight=""},pu=function(t,o){if(this.anchorCorner.startsWith("auto-")){u(this,B,mu).call(this,t,o);return}let i=this.anchorCorner.startsWith("start-")?t.bounds.top:t.bounds.bottom;if(this.direction.startsWith("up-")){u(this,B,fu).call(this,i,o);return}u(this,B,gu).call(this,i,o)},mu=function(t,o){let i=t.bounds.top,a=t.bounds.bottom,c=window.innerHeight;if(a.bottom>=i.top||c-(a.top+o.height)>=0){u(this,B,da).call(this,a);return}u(this,B,ua).call(this,i)},fu=function(t,o){if(t.top===t.bottom||t.top-o.height>=0){u(this,B,ua).call(this,t);return}u(this,B,Is).call(this,t)},gu=function(t,o){let i=window.innerHeight;if(t.top===t.bottom||i-(t.top+o.height)>=0){u(this,B,da).call(this,t);return}u(this,B,Is).call(this,t)},Is=function(t){if(t.top>t.bottom){u(this,B,ua).call(this,t);return}u(this,B,da).call(this,t)},vu=function(t,o){let i=t.isRtl?u(this,B,Ss).bind(this):u(this,B,As).bind(this),a=t.isRtl?u(this,B,As).bind(this):u(this,B,Ss).bind(this),c=this.anchorCorner.endsWith("-start")?t.bounds.start:t.bounds.end;if(this.direction.endsWith("-start")){i(c,o);return}a(c,o)},As=function(t,o){if(t.left===t.right||t.left-o.width>=0){this.menu.style.right=`${t.relativeX*-1}px`;return}u(this,B,Ds).call(this,t)},Ss=function(t,o){let i=window.innerWidth;if(t.left===t.right||i-(t.left+o.width)>=0){this.menu.style.left=`${t.relativeX}px`;return}u(this,B,Ds).call(this,t)},Ds=function(t){if(t.left>t.right){this.menu.style.right=`${t.relativeX*-1}px`;return}this.menu.style.left=`${t.relativeX}px`},ua=function(t){let o=window.innerHeight;this.menu.style.bottom=`${t.relativeY*-1}px`,this.menu.classList.add("up"),this.menu.style.maxHeight=this.allowOverflow?"":`${o-t.bottom}px`},da=function(t){let o=window.innerHeight;this.menu.style.top=`${t.relativeY}px`,this.menu.style.maxHeight=this.allowOverflow?"":`${o-t.top}px`},Do.styles=[G,lu],Do);n([d()],le.prototype,"autoclose",void 0);n([d({type:Boolean,reflect:!0})],le.prototype,"open",null);n([d({reflect:!0})],le.prototype,"positioning",void 0);n([d({type:Boolean})],le.prototype,"manualFocus",void 0);n([d({attribute:"anchor-corner",reflect:!0})],le.prototype,"anchorCorner",void 0);n([d({reflect:!0})],le.prototype,"direction",void 0);n([d({type:Boolean,attribute:"allow-overflow",reflect:!0})],le.prototype,"allowOverflow",void 0);n([k(".menu")],le.prototype,"menu",void 0);n([k(".ref")],le.prototype,"ref",void 0);le=n([y("u-menu")],le);var $h=/^\d{4}-\d{2}-\d{2}$/,tn,en,rn,_r,ha,bu,Po,ce=(Po=class extends Dt{constructor(){super(...arguments);m(this,ha);m(this,tn);m(this,en);m(this,rn);m(this,_r);this.locale=null,this.format="short",this.editable=!1,this.readOnly=!1,this.menuPositioning="relative",h(this,tn,t=>{if(t.key==="ArrowDown"&&!this._menu.open){t.preventDefault(),this._menu.show();return}if(t.key==="Escape"&&this._menu.open){t.preventDefault(),this._menu.close();return}this._handleKeyDown(t)}),h(this,en,t=>{t.stopPropagation();let o=t.target.value;this.value=o,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})),this._menu.close()}),h(this,rn,t=>{t.stopPropagation()}),h(this,_r,()=>{this.disabled||this._menu.toggle()})}renderControl(){let t=this.editable?this._value:na(this._value,this.format,this.locale);return p`
      ${this.editable?T:p`
          <button
            class="trigger"
            type="button"
            aria-haspopup="dialog"
            ?disabled=${this.disabled}
            @click=${l(this,_r)}></button>
        `}
      <div class="input">
        <input
          type=${this.editable?"date":"text"}
          part="input"
          id=${this.id||T}
          aria-labelledby="label"
          aria-describedby="supporting-text"
          aria-haspopup="dialog"
          tabindex=${this.editable?T:-1}
          ?readonly=${this.readOnly||!this.editable}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder??T}
          .value=${ye(t)}
          @input=${this._handleInput}
          @keydown=${l(this,tn)} />
      </div>
    `}renderDefaultTrailingIcon(){return Yt`
      <svg xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 -960 960 960" width="1.25em" fill="currentColor">
        <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/>
      </svg>`}renderAfterContent(){return p`
      <u-menu
        positioning=${this.menuPositioning}
        autoclose="outside"
        anchor-corner="end-start"
        direction="down-start"
        allow-overflow
        manualFocus
        @click=${l(this,rn)}>
        <u-calendar
          .value=${this._value}
          .locale=${this.locale}
          @input=${l(this,en)}></u-calendar>
      </u-menu>
    `}connectedCallback(){super.connectedCallback(),u(this,ha,bu).call(this)}disconnectedCallback(){super.disconnectedCallback(),this._trailingSlot?.removeEventListener("click",l(this,_r))}_handleInput(){super._handleInput(),$h.test(this._value)&&(this._calendar.value=this._value),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}},tn=new WeakMap,en=new WeakMap,rn=new WeakMap,_r=new WeakMap,ha=new WeakSet,bu=function(){return at(this,null,function*(){yield this.updateComplete,this._menu.anchorElement=this._container,this._trailingSlot.addEventListener("click",l(this,_r))})},Po.styles=[dt.styles,ko,ia],Po);n([d()],ce.prototype,"locale",void 0);n([d()],ce.prototype,"format",void 0);n([d({type:Boolean,reflect:!0})],ce.prototype,"editable",void 0);n([d({type:Boolean,reflect:!0})],ce.prototype,"readOnly",void 0);n([d({reflect:!0,attribute:"menu-positioning"})],ce.prototype,"menuPositioning",void 0);n([k("input")],ce.prototype,"input",void 0);n([k("u-menu",!0)],ce.prototype,"_menu",void 0);n([k("u-calendar",!0)],ce.prototype,"_calendar",void 0);n([k(".trailing-icon",!0)],ce.prototype,"_trailingSlot",void 0);ce=n([y("u-datepicker")],ce);var yu=v`
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
`;var Jt,pa,xu,_u,Ps,Lo,on=(Lo=class extends It{constructor(){super(...arguments);m(this,Jt);this.startDateValue=null,this.endDateValue=null}get value(){return!this.startDateValue&&!this.endDateValue?"":`${this._getDateString(this.startDateValue)} - ${this._getDateString(this.endDateValue)}`}set value(t){if(!t){this.startDateValue=null,this.endDateValue=null;return}let o=t.split(" - ");if(o.length!==2){this.startDateValue=null,this.endDateValue=null;return}let i=o[0],a=o[1];this.startDateValue=this._getDateFromString(i),this.endDateValue=this._getDateFromString(a)}_selectDate(t){if(!this.startDateValue||this.endDateValue){u(this,Jt,pa).call(this,t,null);return}if(t>this.startDateValue){u(this,Jt,pa).call(this,this.startDateValue,t);return}u(this,Jt,pa).call(this,t,this.startDateValue)}_getCalendarClassMap(){let t={};if(!this.startDateValue)return null;if(this.startDateValue){let o=this.endDateValue?"selected":"selecting";t[o]=!0}return t[u(this,Jt,xu).call(this)]=!0,this.endDateValue&&(t[u(this,Jt,_u).call(this)]=!0),H(t)}_getSelectedDateClasses(t){let o={};return this.startDateValue?.getTime()===t.getTime()&&(o["selected-date"]=!0,o["start-date"]=!0),this.endDateValue?.getTime()===t.getTime()&&(o["selected-date"]=!0,o["end-date"]=!0),o}},Jt=new WeakSet,pa=function(t,o){this.startDateValue=t,this.endDateValue=o,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0}))},xu=function(){return u(this,Jt,Ps).call(this,"start",this.startDateValue)},_u=function(){return u(this,Jt,Ps).call(this,"end",this.endDateValue)},Ps=function(t,o){let i=o.getMonth(),a=o.getFullYear();return this.month===i&&this.year===a?`on-${t}-date-month`:this.year>a||this.year===a&&this.month>i?`after-${t}-date-month`:`before-${t}-date-month`},Lo.styles=[yu,It.styles],Lo);n([S()],on.prototype,"startDateValue",void 0);n([S()],on.prototype,"endDateValue",void 0);n([d()],on.prototype,"value",null);on=n([y("u-range-calendar")],on);var wu=/^\d{4}-\d{2}-\d{2} - \d{4}-\d{2}-\d{2}$/,nn,an,sn,ln,wr,ma,Cu,Mo,ue=(Mo=class extends Dt{constructor(){super(...arguments);m(this,ma);m(this,nn);m(this,an);m(this,sn);m(this,ln);m(this,wr);this.locale=null,this.format="short",this.editable=!1,this.readOnly=!1,this.menuPositioning="relative",h(this,nn,t=>{if(t.key==="ArrowDown"&&!this._menu.open){t.preventDefault(),this._menu.show();return}if(t.key==="Escape"&&this._menu.open){t.preventDefault(),this._menu.close();return}this._handleKeyDown(t)}),h(this,an,t=>{t.stopPropagation();let o=t.target.value??"";this.value=o,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}),h(this,sn,t=>{t.stopPropagation(),wu.test(this._value)&&(this.dispatchEvent(new Event("change",{bubbles:!0})),this._menu.close())}),h(this,ln,t=>{t.stopPropagation()}),h(this,wr,()=>{this.disabled||this._menu.toggle()})}renderControl(){let t=this.editable?this._value:Kc(this._value,this.format,this.locale);return p`
      ${this.editable?T:p`
          <button
            class="trigger"
            type="button"
            aria-haspopup="dialog"
            ?disabled=${this.disabled}
            @click=${l(this,wr)}></button>
        `}
      <div class="input">
        <input
          type="text"
          part="input"
          id=${this.id||T}
          aria-labelledby="label"
          aria-describedby="supporting-text"
          aria-haspopup="dialog"
          tabindex=${this.editable?T:-1}
          ?readonly=${this.readOnly||!this.editable}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder??T}
          .value=${ye(t)}
          @input=${this._handleInput}
          @keydown=${l(this,nn)} />
      </div>
    `}renderDefaultTrailingIcon(){return Yt`
      <svg xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 -960 960 960" width="1.25em" fill="currentColor">
        <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/>
      </svg>`}renderAfterContent(){return p`
      <u-menu
        positioning=${this.menuPositioning}
        autoclose="outside"
        anchor-corner="end-start"
        direction="down-start"
        allow-overflow
        manualFocus
        @click=${l(this,ln)}>
        <u-range-calendar
          .value=${this._value}
          .locale=${this.locale}
          @input=${l(this,an)}
          @change=${l(this,sn)}></u-range-calendar>
      </u-menu>
    `}connectedCallback(){super.connectedCallback(),u(this,ma,Cu).call(this)}disconnectedCallback(){super.disconnectedCallback(),this._trailingSlot?.removeEventListener("click",l(this,wr))}_handleInput(){super._handleInput(),wu.test(this._value)&&(this._calendar.value=this._value),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}},nn=new WeakMap,an=new WeakMap,sn=new WeakMap,ln=new WeakMap,wr=new WeakMap,ma=new WeakSet,Cu=function(){return at(this,null,function*(){yield this.updateComplete,this._menu.anchorElement=this._container,this._trailingSlot.addEventListener("click",l(this,wr))})},Mo.styles=[dt.styles,ko,ia],Mo);n([d()],ue.prototype,"locale",void 0);n([d()],ue.prototype,"format",void 0);n([d({type:Boolean,reflect:!0})],ue.prototype,"editable",void 0);n([d({type:Boolean,reflect:!0})],ue.prototype,"readOnly",void 0);n([d({reflect:!0,attribute:"menu-positioning"})],ue.prototype,"menuPositioning",void 0);n([k("input")],ue.prototype,"input",void 0);n([k("u-menu",!0)],ue.prototype,"_menu",void 0);n([k("u-range-calendar",!0)],ue.prototype,"_calendar",void 0);n([k(".trailing-icon",!0)],ue.prototype,"_trailingSlot",void 0);ue=n([y("u-range-datepicker")],ue);var ku=v`
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
`;var Bh=e=>e.currentTarget!==e.target||e.composedPath()[0]!==e.target||e.target.disabled?!1:!Nh(e),Nh=e=>{let r=Ls;return r&&(e.preventDefault(),e.stopImmediatePropagation()),Fh(),r},Ls=!1,Fh=()=>at(null,null,function*(){Ls=!0,yield null,Ls=!1}),Cr,Xe,Tu,Eu,Iu,cn=class cn extends A{constructor(){super();m(this,Xe);m(this,Cr);this.name="",this.disabled=!1,h(this,Cr,!1),this.inputType="checkbox",this.renderRipple=!0,this.inputDescribedById=void 0,this.inputLabelledById=void 0,this.value="on",this._checkedAttribute=!1,this.elementInternals=this.attachInternals()}get form(){return this.elementInternals.form}focus(t){this.input.focus(t)}get checked(){return this.input?this.input.checked:l(this,Cr)}set checked(t){h(this,Cr,t),this.input&&(this.input.checked=t),this.elementInternals.setFormValue(t?this.value:null)}firstUpdated(t){super.firstUpdated(t),this.input.checked=l(this,Cr)}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleClick)}render(){let t=p`
      <u-ripple ?disabled=${this.disabled} @click=${u(this,Xe,Iu)}></u-ripple>
    `;return p`
      <div class="container">
        ${this.renderRipple?t:T}
        <input
          id="input"
          type=${this.inputType}
          class="focus-ring"
          .checked=${this._checkedAttribute}
          .disabled=${this.disabled}
          aria-labelledby="${this.inputLabelledById||T}"
          aria-describedby="${this.inputDescribedById||T}"
          @input=${u(this,Xe,Tu)}
          @change=${u(this,Xe,Eu)} />
        <div class="indicator-container">${this.renderIndicator()}</div>
      </div>
    `}_handleClick(t){Bh(t)&&this.input.click()}};Cr=new WeakMap,Xe=new WeakSet,Tu=function(t){let o=t.target;this.checked=o.checked},Eu=function(t){Vn(this,t)},Iu=function(t){t.preventDefault(),this.input.click()},cn.styles=[G,ku],cn.formAssociated=!0,cn.shadowRootOptions=J(U({},A.shadowRootOptions),{delegatesFocus:!0});var jt=cn;n([d({reflect:!0})],jt.prototype,"name",void 0);n([d({type:Boolean,reflect:!0})],jt.prototype,"disabled",void 0);n([k("input")],jt.prototype,"input",void 0);n([d()],jt.prototype,"value",void 0);n([d({type:Boolean})],jt.prototype,"checked",null);n([d({type:Boolean,attribute:"checked"})],jt.prototype,"_checkedAttribute",void 0);var Au=v`
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
`;var Ro,zo,Oo=(zo=class extends jt{constructor(){super();m(this,Ro);h(this,Ro,!1),this.hideStateLayer=!1}get indeterminate(){return l(this,Ro)}set indeterminate(t){if(h(this,Ro,t),!t){this.input?.classList.remove("indeterminate");return}this.input?.classList.add("indeterminate"),this.elementInternals.setFormValue(null)}get checked(){return super.checked}set checked(t){super.checked=t,this.indeterminate=!1}firstUpdated(t){super.firstUpdated(t),this.indeterminate=this.indeterminate}renderIndicator(){return p`
      <div class="border"><div class="indicator"></div></div>
    `}},Ro=new WeakMap,zo.styles=[G,Au],zo);n([d({type:Boolean,attribute:"hide-state-layer",reflect:!0})],Oo.prototype,"hideStateLayer",void 0);n([d({type:Boolean})],Oo.prototype,"indeterminate",null);Oo=n([y("u-checkbox")],Oo);var $o=e=>{let t=class t extends e{constructor(){super(...arguments),this.leading=!1,this.inputDescribedById="description",this.inputLabelledById="label"}render(){return p`
        <label>
          <u-list-item ?selectable=${!this.disabled}>
            <div slot="${this.leading?"leading-icon":"trailing-icon"}">${super.render()}</div>
            <span id="label"><slot></slot></span>
            <span id="description" slot="supporting-text"><slot name="supporting-text"></slot></span>
          </u-list-item>
        </label>
      `}};t.styles=[e.styles??[],v`
        :host {
          --u-list-item-block-padding: 0;
          display: block;
        }

        :host(:not([disabled])) {
          cursor: pointer;
        }
      `];let r=t;return n([d({type:Boolean})],r.prototype,"leading",void 0),r};var Su=class extends $o(Oo){};Su=n([y("u-checkbox-list-item")],Su);var Du=v`
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
`;var Ke,Ms,Rs,Bo,un=(Bo=class extends jt{constructor(){super();m(this,Ke);this.hideStateLayer=!1,this.inputType="radio"}renderIndicator(){return p`
      <div class="indicator"></div>
    `}get checked(){return super.checked}set checked(t){super.checked=t,t&&(this.uncheckSiblings(),this.input&&(this.input.tabIndex=0))}firstUpdated(t){super.firstUpdated(t),this.ensureOnlyOneChecked()}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",u(this,Ke,Rs))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",u(this,Ke,Rs))}ensureOnlyOneChecked(){if(!this.name)return;let o=Array.from(document.querySelectorAll(`${this.tagName}[name="${this.name}"]`)).reverse().find(i=>i.checked);o&&(o.checked=!0)}uncheckSiblings(){for(let t of l(this,Ke,Ms))t!==this&&(t.input&&(t.input.tabIndex=-1),t.checked=!1)}},Ke=new WeakSet,Ms=function(){return this.name?Array.from(this.getRootNode().querySelectorAll(`${this.tagName}[name="${this.name}"]`)):[this]},Rs=function(t){let o=t.key==="ArrowDown",i=t.key==="ArrowUp",a=t.key==="ArrowLeft",c=t.key==="ArrowRight";if(!a&&!c&&!o&&!i)return;let f=l(this,Ke,Ms);if(!f.length)return;t.preventDefault();let w=(getComputedStyle(this).direction==="rtl"?a||o:c||o)?1:-1,E=f.indexOf(this),I=E+w;for(;I!==E;){I>=f.length?I=0:I<0&&(I=f.length-1);let z=f[I];if(z.disabled){I+=w;continue}let O=!z.dispatchEvent(new Event("click",{bubbles:!0,cancelable:!0}));if(z.input.focus(),O)break;z.checked=!0,z.dispatchEvent(new Event("change",{bubbles:!0}));break}},Bo.styles=[G,Du],Bo);n([d({type:Boolean,attribute:"hide-state-layer",reflect:!0})],un.prototype,"hideStateLayer",void 0);un=n([y("u-radio")],un);var Pu=class extends $o(un){};Pu=n([y("u-radio-list-item")],Pu);var Lu=v`
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
`;var No,fa=(No=class extends jt{constructor(){super(),this.renderRipple=!1}renderIndicator(){return p`
      <div class="indicator">
        <div class="state-layer">
          <div class="handle"></div>
        </div>
      </div>
    `}},No.styles=[G,Lu],No);fa=n([y("u-switch")],fa);var Mu=class extends $o(fa){};Mu=n([y("u-switch-list-item")],Mu);var zs=class extends tt{constructor(){super(...arguments),this.autoEmpty=!1,this.control=null,this.handleControlInput=()=>{this.autoEmpty&&(this.empty=!this.control?.value)}}connectedCallback(){super.connectedCallback(),this.control=this.querySelector("input, select, button, textarea"),this.control?.addEventListener("input",this.handleControlInput),this.autoEmpty&&(this.empty=!this.control?.value)}disconnectedCallback(){super.disconnectedCallback(),this.control?.removeEventListener("input",this.handleControlInput),this.control=null}renderControl(){return p`
      <slot name="prefix"></slot>
      <div class="input"><slot></slot></div>
      <slot name="suffix"></slot>
    `}};n([d({type:Boolean})],zs.prototype,"autoEmpty",void 0);zs=n([y("u-field")],zs);var Fo,Ze=(Fo=class extends Dt{constructor(){super(...arguments),this.type="text",this.readOnly=!1}renderControl(){return p`
      <slot class="prefix" name="prefix">
        <span>${this.prefixText}</span>
      </slot>
      <div class="input">
        <input
          type=${this.type}
          part="input"
          id=${this.id||T}
          aria-labelledby="label"
          aria-describedBy="supporting-text"
          ?readonly=${this.readOnly}
          ?disabled=${this.disabled}
          spellcheck=${this.spellcheck}
          autocomplete=${this.autocomplete??T}
          autocapitalize=${this.autocapitalize||T}
          ?autofocus=${this.autofocus}
          role=${this.role??T}
          maxlength=${this.maxlength??T}
          .placeholder=${this.placeholder??T}
          .value=${ye(this._value)}
          @input=${this._handleInput}
          @keydown=${this._handleKeyDown} />
      </div>
      <slot class="suffix" name="suffix">
        <span>${this.suffixText}</span>
      </slot>
    `}},Fo.styles=[dt.styles,ko],Fo);n([d()],Ze.prototype,"type",void 0);n([d({attribute:"prefix-text"})],Ze.prototype,"prefixText",void 0);n([d({attribute:"suffix-text"})],Ze.prototype,"suffixText",void 0);n([d({type:Boolean,reflect:!0})],Ze.prototype,"readOnly",void 0);n([d({reflect:!0})],Ze.prototype,"autocapitalize",void 0);n([k("input")],Ze.prototype,"input",void 0);Ze=n([y("u-text-field")],Ze);var Ru=v`
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
`;var Uo,ga=(Uo=class extends Dt{constructor(){super(...arguments),this.rows=2}renderControl(){return p`
      <div class="input">
        <textarea
          part="input"
          id=${this.id||T}
          aria-labelledby="label"
          aria-describedBy="supporting-text"
          ?disabled=${this.disabled}
          spellcheck=${this.spellcheck}
          autocomplete=${this.autocomplete}
          autocapitalize=${this.autocapitalize}
          role=${this.role??T}
          maxlength=${this.maxlength??T}
          .rows=${this.rows}
          .placeholder=${this.placeholder}
          .value=${ye(this._value)}
          @input=${this._handleInput}></textarea>
      </div>
    `}},Uo.styles=[dt.styles,Ru],Uo);n([d({type:Number})],ga.prototype,"rows",void 0);n([k("textarea")],ga.prototype,"input",void 0);ga=n([y("u-text-area")],ga);function*dn(e,r){if(e!==void 0){let t=0;for(let o of e)yield r(o,t++)}}var Uh=Symbol.for(""),Hh=e=>{if(e?.r===Uh)return e?._$litStatic$};var zu=new Map,Os=e=>(r,...t)=>{let o=t.length,i,a,c=[],f=[],x,_=0,w=!1;for(;_<o;){for(x=r[_];_<o&&(a=t[_],(i=Hh(a))!==void 0);)x+=i+r[++_],w=!0;_!==o&&f.push(a),c.push(x),_++}if(_===o&&c.push(r[o]),w){let E=c.join("$$lit$$");(r=zu.get(E))===void 0&&(c.raw=c,zu.set(E,r=c)),t=f}return e(r,...t)},va=Os(p),$_=Os(Yt),B_=Os(wl);var xe=e=>e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e??"";var $s=(e,r)=>xe(e).toLowerCase().startsWith(xe(r).toLowerCase());var Ho=class{#t;constructor(r){this.#t=null,this.focusedMenu=null,this.#e=()=>this.blurMenu(),this.getHost=()=>r,this._bindHandleKeyDown=this.handleKeyDown.bind(this)}attach(r){this.detach(),r?.addEventListener("keydown",this._bindHandleKeyDown,{capture:!0}),this.getHost()._menu?.addEventListener("close",this.#e),this.#t=r}detach(){this.#t?.removeEventListener("keydown",this._bindHandleKeyDown),this.getHost()._menu?.removeEventListener("close",this.#e),this.#t=null}#e;handleKeyDown(r){if(this.getHost()._menu?.open!==!0)return!1;if(r.key==="Escape"&&this.getHost()._menu.close(),r.key==="Home")return this.navigateTo(r,this.getHost()._menuItems[0],0),!0;if(r.key==="End")return this.navigateTo(r,this.getHost()._menuItems[this.getHost()._menuItems.length-1],this.getHost()._menuItems.length-1),!0;let o=r.key==="ArrowDown",i=r.key==="ArrowUp";if(o||i)return this.navigate(r,o),!0;let a=r.key==="Enter",c=r.key==="Tab";return a||c?(this.selectActiveItem(r),!0):!1}navigate(r,t){let o=this.getHost()._menuItems;if(!o.length)return;r.preventDefault();let i=this.focusedMenu,a=i?o.indexOf(i):-1,c=t?o[a+1]??o[0]:o[a-1]??o[o.length-1];c&&this.navigateTo(r,c,o.indexOf(c))}navigateTo(r,t,o){r.preventDefault(),this.blurMenu(),t&&this.focusMenu(t,o)}focusMenu(r,t,o=!0,i=!0){this.focusedMenu&&(this.focusedMenu.active=!1),this.focusedMenu=r,r.active=o,i&&r.scrollIntoView({block:"nearest"}),this.afterFocus(r,t)}blurMenu(){this.focusedMenu&&(this.focusedMenu.active=!1,this.focusedMenu=null,this.afterBlur())}selectActiveItem(r){this.focusedMenu&&(r.preventDefault(),this.focusedMenu.click(),this.getHost()._menu.open=!1)}afterFocus(r,t){}afterBlur(){}};var Ou=()=>({typing:!1,repeating:!1,buffer:"",timeoutId:0}),ba=class extends Ho{#t=Ou();handleKeyDown(r){if(this.getHost()._menu.open)return super.handleKeyDown(r)||this.handleType(r);let t=r.key==="ArrowDown",o=r.key==="ArrowUp";if(!t&&!o)return this.handleType(r);if(r.preventDefault(),this.getHost()._menu.show(),!this.getHost().selectedOptions.length)return!0;let i=this.getHost().selectedOptions[0];return this.navigateTo(r,i,this.getHost()._menuItems.indexOf(i)),!0}attach(r){super.attach(r),this.getHost()._menu.addEventListener("menu-item-mouseenter",this.#e)}detach(){super.detach(),this.getHost()._menu.removeEventListener("menu-item-mouseenter",this.#e)}#e=r=>{this.blurMenu();let t=r.target;this.focusMenu(t,this.getHost()._menuItems.indexOf(t),!1,!1)};afterFocus(r,t){this.getHost()._button.setAttribute("aria-activedescendant",`item-${t+1}`)}afterBlur(){this.getHost()._button.removeAttribute("aria-activedescendant")}handleType(r){if(r.key.length>1)return!1;this.#t.timeoutId&&clearTimeout(this.#t.timeoutId);let t=this.focusedMenu;this.#t.buffer+=r.key,this.#t.timeoutId=setTimeout(()=>this.#t=Ou(),1e3);let o=this.#t.buffer.replaceAll(r.key,"")===""?r.key:this.#t.buffer;return this.findNextElementByTerm(o,t),!0}findNextElementByTerm(r,t){let o=this.getHost()._options,i=t?o.indexOf(t):-1,a=i>-1?this.getHost()._options[i+1]:null;if((!a||!$s(a.textContent,r))&&(a=o.find(f=>$s(f.textContent,r))),!a)return;let c=o.indexOf(a);if(this.getHost()._menu.open){this.blurMenu(),this.focusMenu(a,c);return}a._setSelectedByUser()}};var $u=v`
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
`;var Bu=v`
  :host {
    display: block;
    --_menu-item-icon-size: var(--u-menu-item-icon-size, 1.5rem);
    --_menu-item-padding: var(--u-menu-item-padding, 12px);
    --u-focus-ring-outline-offset: -4px;
  }

  .container {
    height: var(--u-menu-item-height, 56px);
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
`;var Vo,jo,Nu,Fu,qo,Oe=(qo=class extends Q{constructor(){super(...arguments);m(this,jo);m(this,Vo);this.active=!1,this._hasLeadingIcon=!1,this._hasTrailingIcon=!1,this.hasBadge=!1,this.innerRole="menuitem",h(this,Vo,()=>this.dispatchEvent(new CustomEvent("menu-item-mouseenter",{bubbles:!0})))}connectedCallback(){super.connectedCallback(),this.role="presentation",this.addEventListener("mouseenter",l(this,Vo))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",l(this,Vo))}_getContainerClasses(){return J(U({},super._getContainerClasses()),{"force-focus-ring":this.active,"leading-icon":this._hasLeadingIcon,"trailing-icon":this._hasTrailingIcon})}_renderContent(){return p`
      <div class="icon leading">
        <slot name="leading-icon" aria-hidden="true" @slotchange="${u(this,jo,Nu)}"></slot>
      </div>
      <span class="label" id="text">
        <slot></slot>
      </span>
      <div class="icon trailing">
        <slot name="trailing-icon" aria-hidden="true" @slotchange="${u(this,jo,Fu)}">
          <span>${this._renderDefaultTrailingIcon()}</span>
        </slot>
      </div>
    `}_renderDefaultTrailingIcon(){return T}},Vo=new WeakMap,jo=new WeakSet,Nu=function(t){this._hasLeadingIcon=t.target.assignedElements({flatten:!0}).length>0},Fu=function(t){this._hasTrailingIcon=t.target.assignedElements({flatten:!0}).length>0},qo.styles=[Q.styles,Bu],qo);n([d({type:Boolean,reflect:!0})],Oe.prototype,"active",void 0);n([S()],Oe.prototype,"_hasLeadingIcon",void 0);n([S()],Oe.prototype,"_hasTrailingIcon",void 0);n([d({type:Boolean,attribute:"has-badge",reflect:!0})],Oe.prototype,"hasBadge",void 0);Oe=n([y("u-menu-item")],Oe);var Uu=v`
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
`;var hn,Wo,Go,Wt,$e,pn,Bs,Yo,ya=(Yo=class extends Oe{constructor(){super(...arguments);m(this,Wt);m(this,hn,new MutationObserver(()=>u(this,Wt,Bs).call(this)));m(this,Wo,"");m(this,Go,!1);m(this,pn,t=>{!l(this,Wt,$e)||this.disabled||(t.stopPropagation(),l(this,Wt,$e)._setSelectedByUser(this))})}get value(){return l(this,Wo)}set value(t){l(this,Wo)!==t&&(h(this,Wo,t),l(this,Wt,$e)?._scheduleSync())}get selected(){return l(this,Go)}set selected(t){l(this,Go)!==t&&(h(this,Go,t),l(this,Wt,$e)?._scheduleSync())}get defaultSelected(){return this.hasAttribute("selected")}set defaultSelected(t){this.toggleAttribute("selected",t)}_getContainerClasses(){return J(U({},super._getContainerClasses()),{selected:this.selected})}_renderDefaultTrailingIcon(){return Yt`
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill="currentColor">
        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
      </svg>`}connectedCallback(){super.connectedCallback(),this.addEventListener("click",l(this,pn)),this.setAttribute("tabindex","-1"),l(this,hn).observe(this,{subtree:!0,characterData:!0,childList:!0}),u(this,Wt,Bs).call(this)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",l(this,pn)),l(this,hn).disconnect()}attributeChangedCallback(t,o,i){super.attributeChangedCallback(t,o,i),t==="disabled"&&l(this,Wt,$e)?._scheduleSync()}_setSelectedByUser(){!l(this,Wt,$e)||this.disabled||l(this,Wt,$e)._setSelectedByUser(this)}},hn=new WeakMap,Wo=new WeakMap,Go=new WeakMap,Wt=new WeakSet,$e=function(){return this.parentElement?.tagName==="U-SELECT"?this.parentElement:null},pn=new WeakMap,Bs=function(){l(this,Wt,$e)?._renderOptionRelatedElements()},Yo.styles=[Oe.styles,Uu],Yo);n([d({reflect:!0})],ya.prototype,"value",null);n([d({type:Boolean})],ya.prototype,"selected",null);ya=n([y("u-option")],ya);var kr,Je,Xo,Tr,Er,Bt,Ir,q,xa,mn,_a,Ns,Hu,Fs,Us,Vu,fn,Ko,Hs,Zo,Jo,Qo,qu,ju,ti,Qe=(ti=class extends dt{constructor(){super(...arguments);m(this,q);m(this,kr);m(this,Je);m(this,Xo);m(this,Tr);m(this,Er);m(this,Bt);m(this,Ir);m(this,fn);m(this,Ko);m(this,Zo);m(this,Jo);m(this,Qo);h(this,kr,(()=>{let t=document.createElement("div");return t.role="listbox",t.id="list",t.className="list",t})()),h(this,Je,new ba(this)),h(this,Xo,new ResizeObserver(()=>u(this,q,Vu).call(this))),h(this,Tr,!1),h(this,Er,!1),h(this,Bt,-1),h(this,Ir,""),this.menuPositioning="relative",h(this,fn,()=>{u(this,q,mn).call(this)}),h(this,Ko,t=>{this._menu.toggle(),!(!this._menu.open||l(this,Bt)===-1)&&l(this,Je).focusMenu(this.selectedOptions[0],0,t.detail===0,!1)}),h(this,Zo,()=>{this._button.setAttribute("aria-expanded","true")}),h(this,Jo,()=>{this._options[l(this,Bt)]?.scrollIntoView({block:"nearest"})}),h(this,Qo,()=>{this._button.setAttribute("aria-expanded","false"),l(this,Je).blurMenu()})}get value(){return this._options[l(this,Bt)]?.value??""}set value(t){u(this,q,xa).call(this,this._options.findIndex(o=>o.value===t))}get selectedIndex(){return l(this,Bt)}set selectedIndex(t){let o=this._options.length;u(this,q,xa).call(this,t>=0&&t<o?t:-1)}get _options(){return Array.from(this.querySelectorAll(":scope > u-option"))}get _menuItems(){return this._options}get selectedOptions(){let t=this._options[l(this,Bt)];return t?[t]:[]}renderControl(){return va`
      <button 
         class="button"
         role="combobox"
         aria-haspopup="listbox"
         aria-controls="list"
         aria-expanded="false"
         ?disabled=${this.disabled}></button>
      <div class="input">
        <span class="display"></span>
      </div>`}renderAfterContent(){return p`
      <u-menu positioning="${this.menuPositioning}">
        <slot @slotchange=${l(this,fn)}></slot>
      </u-menu>
    `}renderDefaultTrailingIcon(){return Yt`
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill="currentColor">
        <path d="M480-360 280-560h400L480-360Z"/>
      </svg>`}connectedCallback(){super.connectedCallback(),h(this,Tr,!0),u(this,q,qu).call(this)}disconnectedCallback(){super.disconnectedCallback(),u(this,q,ju).call(this)}formResetCallback(){for(let t of this._options)t.selected=t.defaultSelected;u(this,q,mn).call(this)}formStateRestoreCallback(t){this.value=t??""}_scheduleSync(){l(this,Er)||!l(this,Tr)||(h(this,Er,!0),queueMicrotask(()=>{try{u(this,q,_a).call(this)!==l(this,Ir)&&u(this,q,mn).call(this)}finally{h(this,Er,!1)}}))}_setSelectedByUser(t){let o=l(this,Bt),i=this._options.indexOf(t);i<0||(u(this,q,xa).call(this,i),o!==i&&(this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0}))),this._menu.close())}_renderOptionRelatedElements(){u(this,q,Fs).call(this),u(this,q,Us).call(this)}},kr=new WeakMap,Je=new WeakMap,Xo=new WeakMap,Tr=new WeakMap,Er=new WeakMap,Bt=new WeakMap,Ir=new WeakMap,q=new WeakSet,xa=function(t){let o=this._options,i=t>=0?o[t]:null;for(let a of o)a.selected=a===i;h(this,Bt,i?t:-1),h(this,Ir,u(this,q,_a).call(this)),u(this,q,Ns).call(this)},mn=function(){let t=this._options,o=-1;for(let i=0;i<t.length;i++)t[i].selected&&(o>=0&&(t[o].selected=!1),o=i);if(o<0&&t.length>0){let i=t.findIndex(a=>!a.disabled);i>=0&&(t[i].selected=!0,o=i)}h(this,Bt,o),h(this,Ir,u(this,q,_a).call(this)),u(this,q,Ns).call(this)},_a=function(){return this._options.map(t=>`${t.selected?1:0}:${t.disabled?1:0}:${t.value}`).join("|")},Ns=function(){this.elementInternals.setFormValue(this.value||null),u(this,q,Fs).call(this),u(this,q,Us).call(this),u(this,q,Hu).call(this),this.requestUpdate()},Hu=function(){let t=this._options[l(this,Bt)];this.empty=!t?.textContent?.trim()},Fs=function(){let t=l(this,Bt);Hr(dn(this._options,(o,i)=>p`<div role="option"
                  id=${`item-${i+1}`}
                  aria-selected=${i===t?"true":"false"}>
               ${o.textContent}
             </div>`),l(this,kr))},Us=function(){this._input&&(this._input.textContent=this._options[l(this,Bt)]?.textContent?.trim()??"")},Vu=function(){this.style.setProperty("--_menu-width",`${this.clientWidth}px`)},fn=new WeakMap,Ko=new WeakMap,Hs=function(t){t.stopPropagation()},Zo=new WeakMap,Jo=new WeakMap,Qo=new WeakMap,qu=function(){return at(this,null,function*(){l(this,Xo).observe(this),this._renderOptionRelatedElements(),yield this.updateComplete,l(this,Je).attach(this),this._input.appendChild(l(this,kr)),this._button.addEventListener("click",l(this,Ko)),this._menu.anchorElement=this._container,this._menu.addEventListener("click",u(this,q,Hs)),this._menu.addEventListener("open",l(this,Zo)),this._menu.addEventListener("opened",l(this,Jo)),this._menu.addEventListener("close",l(this,Qo)),u(this,q,mn).call(this)})},ju=function(){l(this,Xo).disconnect(),l(this,kr).remove(),l(this,Je).detach(),h(this,Tr,!1),this._button.removeEventListener("click",l(this,Ko)),this._menu.removeEventListener("click",u(this,q,Hs)),this._menu.removeEventListener("open",l(this,Zo)),this._menu.removeEventListener("opened",l(this,Jo)),this._menu.removeEventListener("close",l(this,Qo))},ti.styles=[dt.styles,$u],ti);n([k("u-menu",!0)],Qe.prototype,"_menu",void 0);n([k(".button",!0)],Qe.prototype,"_button",void 0);n([k(".input",!0)],Qe.prototype,"_input",void 0);n([d({reflect:!0,attribute:"menu-positioning"})],Qe.prototype,"menuPositioning",void 0);n([S()],Qe.prototype,"value",null);n([S()],Qe.prototype,"selectedIndex",null);Qe=n([y("u-select")],Qe);var Wu=v`
  :host {
    display: block;
    padding-block: var(--u-list-padding, 8px);
  }
`;var ei,Gu=(ei=class extends A{render(){return p`<slot></slot>`}},ei.styles=Wu,ei);Gu=n([y("u-list")],Gu);var Yu=v`
  :host {
    display: block;
  }

  * {
    box-sizing: border-box;
  }

  .container {
    position: relative;
    display: flex;
    align-items: center;
    min-height: var(--u-list-item-min-height, 56px);
    padding-block: var(--u-list-item-block-padding, 8px);
    padding-inline: var(--u-list-item-inline-padding, 16px);
    gap: var(--u-list-item-gap, 16px);
  }

  .selectable {
    cursor: pointer;
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
`;var ri,Vs=(ri=class extends A{constructor(){super(...arguments),this.selectable=!1}render(){let r=p`<u-ripple></u-ripple>`,t=H({selectable:this.selectable});return p`
      <div class="container ${t}" part="container">
        ${this.selectable?r:T}
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
    `}},ri.styles=Yu,ri);n([d({type:Boolean,reflect:!0})],Vs.prototype,"selectable",void 0);Vs=n([y("u-list-item")],Vs);var Xu=v`
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
`;var oi,Ku=(oi=class extends A{render(){return p`
      <div class="container" part="container">
        <slot></slot>
      </div>
    `}},oi.styles=[G,Xu],oi);Ku=n([y("u-drawer")],Ku);var Zu=v`
  :host {
    display: block;
    --_drawer-item-icon-size: var(--u-drawer-item-icon-size, 1.5rem);
    --_drawer-item-padding: var(--u-drawer-item-padding, 16px);
  }

  .container {
    font-family: var(--u-font-family, var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"));
    line-height: var(--u-drawer-item-line-height, var(--u-label-l-line-height, 1.25rem));
    font-size: var(--u-drawer-item-font-size, var(--u-label-l-font-size, 0.875rem));
    letter-spacing: var(--u-drawer-item-letter-spacing, var(--u-label-l-letter-spacing, 0.0071428571rem));
    font-weight: var(--u-drawer-item-font-weight, var(--u-label-l-font-weight, var(--u-font-weight-medium, 500)));
    height: var(--u-drawer-item-height, 56px);
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
`;var ii,tr=(ii=class extends Q{constructor(){super(...arguments),this._hasIcon=!1,this._hasBadge=!1,this.active=!1,this.keepDrawerOpen=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-labelledby","label")}_getContainerClasses(){return J(U({},super._getContainerClasses()),{"has-icon":this._hasIcon,"has-badge":this._hasBadge})}_renderContent(){return p`
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
    `}handleIconSlotChange(){this._hasIcon=this.assignedIcons.length>0}handleBadgeSlotChange(){this._hasBadge=this.assignedBadges.length>0}_handleClick(){if(this.keepDrawerOpen)return;let r=this.closest("u-side-navigation");r&&(r.toggleDrawer=!1)}},ii.styles=[Q.styles,Zu],ii);n([S()],tr.prototype,"_hasIcon",void 0);n([S()],tr.prototype,"_hasBadge",void 0);n([d({type:Boolean,reflect:!0})],tr.prototype,"active",void 0);n([d({type:Boolean,attribute:"keep-drawer-open",reflect:!0})],tr.prototype,"keepDrawerOpen",void 0);n([mt({slot:"icon",flatten:!0})],tr.prototype,"assignedIcons",void 0);n([mt({slot:"badge",flatten:!0})],tr.prototype,"assignedBadges",void 0);tr=n([y("u-drawer-item")],tr);var Ju=v`
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
`;var Qu=v`
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
`;var ni,ai,si=(ai=class extends A{constructor(){super(...arguments);m(this,ni);h(this,ni,!1),this.disableSlideAnimation=!1}get toggleDrawer(){return l(this,ni)}set toggleDrawer(t){h(this,ni,t),this.disableSlideAnimation||this.swiperContainer?.swiper?.slideTo(t?0:1)}render(){return Ve.navigationDrawer.useSwiperJs?this.renderWithSwipe():this.renderDefault()}renderDefault(){let t={toggle:this.toggleDrawer};return p`
      <div class="grid container">
        <div>
          <div class="navigation">
            <div class="scrim ${H(t)}" @click="${this.scrimClick}"></div>
            <div class="drawer ${H(t)}">
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
    `}renderWithSwipe(){let t={toggle:this.toggleDrawer};return p`
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
        <swiper-slide class="drawer ${H(t)}">
          <u-elevation></u-elevation>
          <div class="drawer-container">
            <slot name="drawer"></slot>
          </div>
        </swiper-slide>
        <swiper-slide class="dummy-slide"></swiper-slide>

        <div id="scroll-container" class="content" slot="container-end">
          <slot></slot>
        </div>
        <div class="scrim ${H(t)}" @click="${this.scrimClick}" slot="container-end"></div>
      </swiper-container>
    `}swiperActiveIndexChange(){this.swiperContainer?.swiper&&(this.toggleDrawer=!this.swiperContainer.swiper.activeIndex)}swiperTransitionStart(){this.scrim.classList.add("moving")}slidesGridLengthChange(){if(!this.swiperContainer?.swiper)return;this.classList.add("disable-transition");let t=this.swiperContainer.swiper.snapGrid.length;this.swiperContainer.swiper.slideTo(t===1?0:1,0),this.disableSlideAnimation=!0,this.toggleDrawer=!0,this.toggleDrawer=!1,this.disableSlideAnimation=!1,setTimeout(()=>this.classList.remove("disable-transition"))}swiperTransitionEnd(){this.scrim.style.removeProperty("--_modal-drawer-open-progress"),this.scrim.classList.remove("moving")}swiperSliderMove(t){let o=t.detail[0];this.scrim.style.setProperty("--_modal-drawer-open-progress",`${1-o.progress}`)}scrimClick(){this.toggleDrawer=!1,this.swiperContainer?.swiper?.slideTo(1)}},ni=new WeakMap,ai.styles=[G,Ve.navigationDrawer.useSwiperJs?Ju:Qu],ai);n([d({type:Boolean,attribute:"toggle-drawer"})],si.prototype,"toggleDrawer",null);n([k("swiper-container")],si.prototype,"swiperContainer",void 0);n([k(".scrim")],si.prototype,"scrim",void 0);n([k("#scroll-container")],si.prototype,"scrollContainer",void 0);si=n([y("u-side-navigation")],si);var td=v`
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
`;var li=255,er,ed,rd,od,ci,wa=(ci=class extends A{constructor(){super(...arguments);m(this,er);this.max=1}render(){return this.value===void 0?u(this,er,rd).call(this):u(this,er,od).call(this)}},er=new WeakSet,ed=function(t){return Yt`
      <svg class="circular ${t}" viewBox="0 0 50 50">
        <circle
          class="path"
          cx="50%"
          cy="50%"
          r="20"
          fill="none"
          stroke-width="4"
          stroke-miterlimit="10" />
      </svg>`},rd=function(){return u(this,er,ed).call(this,"indeterminate")},od=function(){let t=this.value/this.max,o=t===0||t===1?0:.10625;t=Math.floor(t*100)/100;let i=li-li*t,a=li-li*Math.max(1-o-t,0)*-1;return Yt`
      <svg class="circular on-going" viewBox="0 0 50 50">
        <circle
          class="path"
          cx="50%"
          cy="50%"
          r="20"
          fill="none"
          stroke-width="4"
          stroke-miterlimit="10"
          stroke-dasharray=${`${li}%`} 
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
          stroke-dasharray=${`${li}%`}
          stroke-dashoffset=${`${a}%`}/>
      </svg>
    `},ci.styles=[td],ci);n([d({type:Number})],wa.prototype,"value",void 0);n([d({type:Number})],wa.prototype,"max",void 0);wa=n([y("u-circular-progress")],wa);var id=v`
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
`;var di,nd,ad,ui,Ca=(ui=class extends A{constructor(){super(...arguments);m(this,di);this.max=1}render(){return this.value===void 0?u(this,di,nd).call(this):u(this,di,ad).call(this)}},di=new WeakSet,nd=function(){return p`
      <div class="indeterminate">
        <div class="bar track first"></div>
        <div class="bar active fast"></div>
        <div class="bar track middle"></div>
        <div class="bar active slow"></div>
        <div class="bar track last"></div>
      </div>
    `},ad=function(){let t=this.value/this.max,o=Math.floor(t*1e3)/10,i=100-o;return p`
      <div class="determinate">
        <div class="bar active" style="flex-basis: ${o}%"></div>
        <div class="bar track" style="flex-basis: ${i}%"></div>
      </div>
    `},ui.styles=[id],ui);n([d({type:Number})],Ca.prototype,"value",void 0);n([d({type:Number})],Ca.prototype,"max",void 0);Ca=n([y("u-progress-bar")],Ca);var sd=v`
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
`;var ld=v`
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
`;var gn,ka,cd,hi,Ar=(hi=class extends Q{constructor(){super();m(this,ka);m(this,gn);this._bar=null,h(this,gn,new ResizeObserver(()=>{this.active&&this._bar?._updateTabIndicator()})),this.hasIcon=!1,l(this,gn).observe(this)}get active(){return this._bar?.activeTab===this}set active(t){if(this._bar){if(t){this._bar.activeTab=this;return}this._bar.activeTabIndex=0}}get _paddingInline(){return getComputedStyle(this._container).paddingInline}_renderContent(){let t={active:this.active,"has-icon":this.hasIcon};return p`
      <div class="tab-content ${H(t)}">
        <div class="icon" part="icon">
          <slot name="icon" @slotchange=${u(this,ka,cd)}></slot>
        </div>
        <div class="label" part="label">
          <slot></slot>
        </div>
      </div>
    `}connectedCallback(){super.connectedCallback(),this._bar?._updateTabIndicator(),this._bar?._setScrollIndicatorsActive()}disconnectedCallback(){super.disconnectedCallback(),this._bar&&(this._bar.activeTab===this&&(this._bar.activeTabIndex=0),this._bar._updateTabIndicator(),this._bar._setScrollIndicatorsActive(),this._bar=null)}_handleClick(t){super._handleClick(t),!(!this._bar||!this._bar.dispatchEvent(new Event("changing",{bubbles:!0,cancelable:!0})))&&(this._bar.activeTab=this,this._bar.dispatchEvent(new Event("change",{bubbles:!0})))}},gn=new WeakMap,ka=new WeakSet,cd=function(t){let o=t.target;this.hasIcon=!!o.assignedElements({flatten:!0}).length},hi.styles=[Q.styles,ld],hi);n([S()],Ar.prototype,"active",null);n([d({type:Boolean})],Ar.prototype,"hasIcon",void 0);n([k(".container")],Ar.prototype,"_container",void 0);Ar=n([y("u-tab")],Ar);var de,Be,vn,bn,yn,xn,_n,Ta,ud,pi,rr=(pi=class extends A{constructor(){super();m(this,Ta);m(this,de);m(this,Be);m(this,vn);m(this,bn);m(this,yn);m(this,xn);m(this,_n);h(this,de,[]),h(this,Be,null),h(this,vn,new ResizeObserver(()=>{this._setScrollIndicatorsActive(),this._updateTabIndicator()})),this.variant="primary",h(this,bn,t=>{let o=t.target;h(this,de,o.assignedElements({flatten:!0}).filter(i=>i instanceof Ar));for(let i of l(this,de))i._bar=this;this.activeTabIndex>-1||(this.activeTab=l(this,de)[0])}),h(this,yn,()=>{this._setScrollIndicatorsActive()}),h(this,xn,()=>{this._container.scrollBy({left:this._container.offsetWidth/-2,behavior:"smooth"})}),h(this,_n,()=>{this._container.scrollBy({left:this._container.offsetWidth/2,behavior:"smooth"})}),l(this,vn).observe(this)}get activeTabIndex(){return this.activeTab?l(this,de).indexOf(this.activeTab):-1}set activeTabIndex(t){this.activeTab=l(this,de)[t]}get activeTab(){return l(this,Be)}set activeTab(t){if(!l(this,de).length){h(this,Be,null),this._updateTabIndicator();return}if(!t||l(this,Be)===t||!l(this,de).includes(t))return;let o=l(this,Be);h(this,Be,t),o?.requestUpdate(),t.scrollIntoView({block:"nearest",behavior:"smooth"}),t.requestUpdate(),this._updateTabIndicator()}attributeChangedCallback(t,o,i){t==="variant"&&this._updateTabIndicator()}connectedCallback(){super.connectedCallback(),u(this,Ta,ud).call(this)}render(){let t={secondary:this.variant==="secondary"};return p`
      <div
        class="scroll-indicator scroll-left active"
        @click=${l(this,xn)}>
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
        class="container ${H(t)}"
        @scrollend=${l(this,yn)}>
        <slot @slotchange=${l(this,bn)}></slot>
        <div class="tab-indicator"></div>
      </div>
      <div
        class="scroll-indicator scroll-right active"
        @click=${l(this,_n)}>
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
    `}_updateTabIndicator(){if(!this._tabIndicator)return;if(!this.activeTab){this._tabIndicator.style.left="0",this._tabIndicator.style.width="0";return}let t=this.variant==="primary"?parseInt(this.activeTab._paddingInline,10):0;this._tabIndicator.style.left=`${this.activeTab.offsetLeft+t}px`,this._tabIndicator.style.width=`${this.activeTab.offsetWidth-t*2}px`}_setScrollIndicatorsActive(){let o=this._container.scrollWidth-this._container.offsetWidth,a=getComputedStyle(this._container).direction==="rtl"?this._container.scrollLeft+o:this._container.scrollLeft;a-1<=0?(this._container.scrollBy(-1,0),this._scrollLeft.classList.remove("active")):this._scrollLeft.classList.add("active"),a>=o-1?(this._container.scrollBy(1,0),this._scrollRight.classList.remove("active")):this._scrollRight.classList.add("active")}},de=new WeakMap,Be=new WeakMap,vn=new WeakMap,bn=new WeakMap,yn=new WeakMap,xn=new WeakMap,_n=new WeakMap,Ta=new WeakSet,ud=function(){return at(this,null,function*(){yield this.updateComplete,this._setScrollIndicatorsActive()})},pi.styles=[G,sd],pi);n([d({reflect:!0})],rr.prototype,"variant",void 0);n([k(".scroll-left")],rr.prototype,"_scrollLeft",void 0);n([k(".scroll-right")],rr.prototype,"_scrollRight",void 0);n([k(".container")],rr.prototype,"_container",void 0);n([k(".tab-indicator")],rr.prototype,"_tabIndicator",void 0);n([mt({flatten:!0})],rr.prototype,"assignedElements",void 0);rr=n([y("u-tab-bar")],rr);var dd=v`
  :host {
    display: inline-block;
  }
`;var Vh=e=>e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),Cn,kn,mi,wn=(mi=class extends A{constructor(){super(...arguments);m(this,Cn);m(this,kn)}get result(){return l(this,Cn)}set result(t){h(this,Cn,t),this.setParts()}get term(){return l(this,kn)}set term(t){h(this,kn,t),this.setParts()}render(){return this.parts?this.parts.map((t,o)=>o%2?p`<strong>${t}</strong>`:p`<span>${t}</span>`):p`<span></span>`}setParts(){let t=this.result||"",o=xe(t).toLowerCase(),i=xe(this.term||"").toLowerCase(),a=0;if(i.length<=0){this.parts=[t];return}this.parts=o.split(new RegExp(`(${Vh(i)})`)).map(c=>{let f=t.substring(a,a+c.length);return a+=c.length,f})}},Cn=new WeakMap,kn=new WeakMap,mi.styles=dd,mi);n([S()],wn.prototype,"parts",void 0);n([d()],wn.prototype,"result",null);n([d()],wn.prototype,"term",null);wn=n([y("u-highlight")],wn);var hd=v`
  :host {
    display: block;
    --u-menu-item-label-font-weight: var(--u-typeahead-item-font-weight, var(--u-font-weight-regular, 400));
  }

  :host([fit-target]) u-menu::part(menu) {
    width: var(--_menu-width);
    max-width: none;
  }
`;var qs=class extends A{constructor(){super(...arguments),this.content=null}render(){if(this.content instanceof HTMLElement||typeof this.content=="string")return p`${this.content}`;let r=document.createElement("div");return Hr(this.content,r),p`${r}`}};n([d()],qs.prototype,"content",void 0);qs=n([y("u-typeahead-template-render")],qs);var Tn,or,j,ir,fi,Sr,oe,Dr,gi,Pr,R,Ea,Ia,pd,js,vi,bi,md,Ws,fd,Gs,gd,Ys,Xs,vd,Aa,bd,yd,xd,Lr,Pt=(Lr=class extends A{constructor(){super();m(this,R);m(this,Tn);m(this,or);m(this,j);m(this,ir);m(this,fi);m(this,Sr);m(this,oe);m(this,Dr);m(this,gi);m(this,Pr);m(this,vi);m(this,bi);h(this,or,!1),h(this,j,null),h(this,ir,null),h(this,fi,null),h(this,Sr,new Ho(this)),h(this,oe,""),h(this,Dr,null),this.debounce=300,this.limit=10,this.minLength=2,this.openOnFocus=!1,this.editable=!1,this.autocomplete="off",this.spellcheck=!1,this.fitTarget=!1,this.positioning="relative",h(this,vi,()=>at(this,null,function*(){this.openOnFocus&&(yield u(this,R,Gs).call(this))})),h(this,bi,()=>{l(this,Dr)&&clearTimeout(l(this,Dr)),u(this,R,Ws).call(this,this.editable?u(this,R,Xs).call(this):null,!0),h(this,Dr,setTimeout(()=>at(this,null,function*(){return yield u(this,R,Gs).call(this,!0)}),this.debounce))}),h(this,Pr,this.attachInternals())}get form(){return l(this,Pr).form}get value(){return l(this,gi)}set value(t){h(this,gi,t),l(this,Pr).setFormValue(t),l(this,or)&&u(this,R,Ys).call(this)}focus(){l(this,j)?.focus()}clear(){l(this,j)&&(h(this,oe,""),u(this,R,vd).call(this,""))}get targetId(){return l(this,Tn)}set targetId(t){h(this,Tn,t),l(this,or)&&u(this,R,Ea).call(this)}get _menuItems(){return Array.from(this.menuItems)}attributeChangedCallback(t,o,i){super.attributeChangedCallback(t,o,i),l(this,j)&&(t==="autocomplete"&&(l(this,j).autocomplete=i),t==="spellcheck"&&(l(this,j).spellcheck=i==="true"))}connectedCallback(){super.connectedCallback(),h(this,or,!0),u(this,R,Ea).call(this),h(this,ir,new MutationObserver(()=>u(this,R,Ea).call(this))),l(this,ir).observe(document,{attributes:!0,childList:!0})}disconnectedCallback(){super.disconnectedCallback(),h(this,or,!1),u(this,R,Ia).call(this),l(this,ir).disconnect(),h(this,ir,null)}render(){return this.results?.length?(setTimeout(()=>{u(this,R,Aa).call(this),this._menu.open=!0,l(this,Sr).focusMenu(this._menuItems[0],0)}),p`
      <u-menu manualFocus manualClose anchor-corner="auto-start" positioning="${this.positioning}">
        ${this.results.map(t=>{let o=this.template?u(this,R,fd).call(this,t.value):p`
                <u-highlight .term=${l(this,oe)} .result=${t.label}></u-highlight>
              `;return p`
            <u-menu-item
              @mousedown=${u(this,R,pd)}
              @click=${u(this,R,md).call(this,t)}
              tabindex="-1">
              ${o}
            </u-menu-item>
          `})}
      </u-menu>
    `):p``}},Tn=new WeakMap,or=new WeakMap,j=new WeakMap,ir=new WeakMap,fi=new WeakMap,Sr=new WeakMap,oe=new WeakMap,Dr=new WeakMap,gi=new WeakMap,Pr=new WeakMap,R=new WeakSet,Ea=function(){if(!this.targetId){u(this,R,Ia).call(this),h(this,j,null),u(this,R,Aa).call(this);return}let t=document.getElementById(this.targetId);t!==l(this,j)&&(u(this,R,Ia).call(this),t&&(h(this,j,t),u(this,R,Aa).call(this),t.role="combobox",t.autocomplete=this.autocomplete,t.spellcheck=this.spellcheck,t.autocapitalize="off",t.addEventListener("click",u(this,R,js)),t.addEventListener("input",l(this,bi)),l(this,Sr).attach(t),t.addEventListener("focus",l(this,vi)),h(this,fi,new ResizeObserver(()=>u(this,R,xd).call(this))),l(this,fi).observe(t),this.value&&u(this,R,Ys).call(this)))},Ia=function(){l(this,j)?.removeEventListener("click",u(this,R,js)),l(this,j)?.removeEventListener("input",l(this,bi)),l(this,Sr).detach(),l(this,j)?.removeEventListener("focus",l(this,vi))},pd=function(t){t.preventDefault()},js=function(t){t.stopPropagation()},vi=new WeakMap,bi=new WeakMap,md=function(t){return()=>{let o=new CustomEvent("selected",{cancelable:!0,detail:t.value});this.dispatchEvent(o),!o.defaultPrevented&&u(this,R,Ws).call(this,t.value)}},Ws=function(t,o=!1){o?(h(this,gi,t),l(this,Pr).setFormValue(t)):this.value=t,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0}))},fd=function(t){let o=this.template(l(this,oe),t);return p`${o}`},Gs=function(t=!1){return at(this,null,function*(){let o=u(this,R,Xs).call(this),i=xe(o).toLowerCase();if(!(t&&i===l(this,oe)&&this._menu?.open===!0)){if(h(this,oe,i),i.length<this.minLength){this.results=[];return}this.results=yield u(this,R,gd).call(this),this.results=this.results.slice(0,this.limit||this.results.length)}})},gd=function(){return at(this,null,function*(){if(!this.source)return[];let t,o=!1;if(this.source instanceof Array)t=this.source,o=!0;else{let a=this.source;t=yield a(l(this,oe))}let i=t.map(a=>({label:this.formatter?this.formatter(a):a.toString(),value:a}));return o?i.filter(a=>xe(a.label).toLowerCase().includes(l(this,oe))):i})},Ys=function(){if(!l(this,j))return;let t=u(this,R,yd).call(this);if(h(this,oe,xe(t)?.toLowerCase()),l(this,j).tagName==="U-TEXT-FIELD"){l(this,j).value=t;return}if(l(this,j).input){l(this,j).input.value=t;return}l(this,j).value=t},Xs=function(){return l(this,j).input?.value??l(this,j).value},vd=function(t){let o=l(this,j)?.input??l(this,j);o&&(o.value=t)},Aa=function(){this._menu&&(this._menu.anchorElement=u(this,R,bd).call(this))},bd=function(){return l(this,j)?l(this,j).tagName==="U-CHIP-FIELD"?l(this,j).input:l(this,j).tagName==="U-SEARCH"?l(this,j).input:l(this,j).tagName==="U-TEXT-FIELD"?l(this,j)._container:l(this,j):null},yd=function(){return this.value?this.formatter?this.formatter(this.value):this.value:""},xd=function(){if(!this.fitTarget||!l(this,j)){this.style.removeProperty("--_menu-width");return}this.style.setProperty("--_menu-width",`${l(this,j).clientWidth}px`)},Lr.formAssociated=!0,Lr.styles=hd,Lr);n([S()],Pt.prototype,"results",void 0);n([S()],Pt.prototype,"source",void 0);n([d({type:Number,reflect:!0})],Pt.prototype,"debounce",void 0);n([d({type:Number,reflect:!0})],Pt.prototype,"limit",void 0);n([d({type:Number,reflect:!0})],Pt.prototype,"minLength",void 0);n([d({type:Boolean,attribute:"open-on-focus",reflect:!0})],Pt.prototype,"openOnFocus",void 0);n([d({type:Boolean,reflect:!0})],Pt.prototype,"editable",void 0);n([d({reflect:!0})],Pt.prototype,"autocomplete",void 0);n([d({reflect:!0})],Pt.prototype,"spellcheck",void 0);n([d({type:Boolean,attribute:"fit-target",reflect:!0})],Pt.prototype,"fitTarget",void 0);n([d({reflect:!0})],Pt.prototype,"positioning",void 0);n([d({reflect:!0,attribute:"target-id"})],Pt.prototype,"targetId",null);n([k("u-menu")],Pt.prototype,"_menu",void 0);n([kl("u-menu-item")],Pt.prototype,"menuItems",void 0);Pt=n([y("u-typeahead")],Pt);var _d=v`
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
`;var Da,wd,yi,Sa=(yi=class extends A{constructor(){super(...arguments);m(this,Da);this.static=!1,this._empty=!0}render(){let t=H({static:this.static,empty:this._empty});return p`
      <div class="container ${t}" part="container">
        <slot @slotchange=${u(this,Da,wd)}></slot>
      </div>
    `}},Da=new WeakSet,wd=function(t){let o=t.target;this._empty=!!o.assignedElements().length},yi.styles=_d,yi);n([d({type:Boolean,reflect:!0})],Sa.prototype,"static",void 0);n([S()],Sa.prototype,"_empty",void 0);Sa=n([y("u-badge")],Sa);var Cd=v`
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
`;var xi,En=(xi=class extends dt{constructor(){super(...arguments),this._value=""}get value(){return this._value}set value(r){this._value=r,this.empty=!r,this.elementInternals.setFormValue(r)}renderControl(){return va`
      <button 
         class="button"
         aria-expanded="false"
         aria-owns="select"
         ?disabled=${this.disabled}></button>
      <div class="input">
        <slot>${this.value}</slot>
      </div>
      <u-ripple ?disabled=${this.disabled}></u-ripple>`}renderAfterContent(){return p`
      <u-menu>
        <slot></slot>
      </u-menu>
    `}},xi.styles=[dt.styles,Cd],xi);n([d()],En.prototype,"value",null);n([k(".button",!0)],En.prototype,"_button",void 0);n([k(".input",!0)],En.prototype,"_input",void 0);En=n([y("u-button-field")],En);var kd=v`
  :host {
    display: block;
  }

  :host(:not([has-leading-icon])) .leading-icon {
    display: none;
  }

  :host(:not([has-trailing-icon])) .trailing-icon {
    display: none;
  }

  slot[name=leading-icon],
  slot[name=trailing-icon] {
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

  .leading-icon {
    margin-inline: var(--u-search-leading-icon-margin, 8px);
  }

  .trailing-icon {
    padding-inline: var(--u-search-trailing-icon-margin, 8px);
    margin-inline-start: auto;
  }
`;var _i,Ne,Td,Ed,Ks,wi,Pa=(wi=class extends Dt{constructor(){super(...arguments);m(this,Ne);m(this,_i);this.position="fixed",h(this,_i,null)}renderControl(){return p``}render(){let t=H({"inner-container":!0});return p`<div class="container">
      <div class="${t}">
        <div class="content">
          <div class="icon leading-icon" part="icon leading">
            <slot name="leading-icon" @slotchange="${u(this,Ne,Td)}"></slot>
          </div>
          <input
            class="input"
            part="input"
            id=${this.id||T}
            spellcheck=${this.spellcheck}
            autocomplete=${this.autocomplete??T}
            autocapitalize=${this.autocapitalize||T}
            ?autofocus=${this.autofocus}
            role=${this.role??T}
            maxlength=${this.maxlength??T}
            .placeholder=${this.placeholder??T}
            .value=${ye(this._value)}
            @input=${this._handleInput}
            @keydown=${this._handleKeyDown} />
    
          <div class="icon trailing-icon" part="icon trailing">
            <slot name="trailing-icon" @slotchange="${u(this,Ne,Ed)}"></slot>
          </div>
        </div>
      </div>
    </div>`}firstUpdated(t){super.firstUpdated(t),h(this,_i,new ResizeObserver(()=>u(this,Ne,Ks).call(this))),l(this,_i).observe(this._container),u(this,Ne,Ks).call(this)}},_i=new WeakMap,Ne=new WeakSet,Td=function(){this.hasLeadingIcon=this.assignedLeadingIcons.length>0},Ed=function(){this.hasTrailingIcon=this.assignedTrailingIcons.length>0},Ks=function(){this.style.setProperty("--_content-height",`${this._container.clientHeight}px`)},wi.styles=[G,kd],wi);n([d({reflect:!0})],Pa.prototype,"position",void 0);n([k("input")],Pa.prototype,"input",void 0);Pa=n([y("u-search")],Pa);var Id=v`
  :host {
    --_container-size: var(--u-icon-container-size, 40px);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--_container-size);
    height: var(--_container-size);
    font-size: var(--u-icon-size, 24px);
  }
`;var Ci,Ad=(Ci=class extends A{render(){return p`
      <slot></slot>
    `}},Ci.styles=[Id],Ci);Ad=n([y("u-icon")],Ad);var Sd=v`
  .container {
    font-family: var(--u-font-family, var(--u-font-family, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"));
    line-height: var(--u-drawer-headline-line-height, var(--u-title-s-line-height, 1.25rem));
    font-size: var(--u-drawer-headline-font-size, var(--u-title-s-font-size, 0.875rem));
    letter-spacing: var(--u-drawer-headline-letter-spacing, var(--u-title-s-letter-spacing, 0.0071428571rem));
    font-weight: var(--u-drawer-headline-font-weight, var(--u-title-s-font-weight, var(--u-font-weight-medium, 500)));
    color: var(--u-drawer-headline-color, var(--u-color-on-surface-variant, rgb(73, 69, 79)));
    margin-block: var(--u-drawer-headline-margin-block, 16px 8px);
  }
`;var ki,Dd=(ki=class extends A{render(){return p`
      <div class="container">
        <slot></slot>
      </div>
    `}},ki.styles=[Q.styles,Sd],ki);Dd=n([y("u-drawer-headline")],Dd);function Pd(e,r,t){return e?r(e):t?.(e)}var Ld=v`
  :host {
    --_gap: var(--u-overflow-menu-items-gap, 8px);
    --_items-height: var(--u-icon-button-small-height, 40px);
    display: block;
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
`;var Mr,nr,_e,Ti,Rr,Ei,Nt,La,Md,Rd,Zs,zd,Ii,In=(Ii=class extends A{constructor(){super();m(this,Nt);m(this,Mr);m(this,nr);m(this,_e);m(this,Ti);m(this,Rr);m(this,Ei);h(this,Mr,new ResizeObserver(()=>u(this,Nt,La).call(this))),h(this,nr,[]),h(this,_e,[]),this._renderMenu=!1,h(this,Ti,null),h(this,Rr,document.createElement("div")),h(this,Ei,0),l(this,Rr).slot="menu-items",setTimeout(()=>this.appendChild(l(this,Rr)))}set anchor(t){h(this,Ti,t),u(this,Nt,La).call(this),l(this,Mr).disconnect(),l(this,Mr).observe(this.anchor)}get anchor(){return l(this,Ti)??this}connectedCallback(){super.connectedCallback(),this.anchor=this.anchor}disconnectedCallback(){super.disconnectedCallback(),l(this,Mr).disconnect()}render(){this._renderMenuItems();let t={"show-menu":this._renderMenu};return p`
      <div class="container ${H(t)}">
        <div class="items-set">
          <div class="empty-space"></div>
          <slot @slotchange="${u(this,Nt,zd)}"></slot>
        </div>
        ${Pd(this._renderMenu,()=>p`
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
            <u-menu anchor-corner="end-end">
              <slot name="menu-items"></slot>
            </u-menu>
          </div>
        `)}
      </div>
    `}_renderMenuItems(){let t=p`
      ${dn(l(this,_e),o=>{let i=o.childNodes.values();return p`
            <u-menu-item @click=${{handleEvent:()=>o.click()}}>
              <div slot="leading-icon">
                ${dn(i,a=>a.cloneNode(!0))}
              </div>
              
              ${o.label}
            </u-menu-item>
          `})}`;Hr(t,l(this,Rr))}},Mr=new WeakMap,nr=new WeakMap,_e=new WeakMap,Ti=new WeakMap,Rr=new WeakMap,Ei=new WeakMap,Nt=new WeakSet,La=function(){u(this,Nt,Md).call(this),u(this,Nt,Rd).call(this)},Md=function(){let t=0,o=!1;for(let c of l(this,nr))o=o||c.collapse==="always",!u(this,Nt,Zs).call(this,c)&&t++;let i=l(this,nr)[0],a=o||!!i&&(this._renderMenu?t>1:t>0);this._renderMenu!==a&&(this._renderMenu=a)},Rd=function(){if(!this._renderMenu){l(this,_e).length=0;return}clearTimeout(l(this,Ei)),h(this,Ei,setTimeout(()=>{let t=l(this,_e).length;l(this,_e).length=0;for(let o of l(this,nr))u(this,Nt,Zs).call(this,o)||l(this,_e).push(o);t!==l(this,_e).length&&this.requestUpdate()},100))},Zs=function(t){return t.offsetTop===this.offsetTop&&t.collapse!=="always"},zd=function(t){let o=t.target;h(this,nr,o.assignedElements().filter(i=>i.tagName==="U-OVERFLOW-MENU-ITEM").reverse()),u(this,Nt,La).call(this)},Ii.styles=Ld,Ii);n([S()],In.prototype,"_renderMenu",void 0);n([k("u-menu")],In.prototype,"menu",void 0);n([d()],In.prototype,"anchor",null);In=n([y("u-overflow-menu")],In);var Ai,Si,Sn,Js,Di,An=(Di=class extends A{constructor(){super(...arguments);m(this,Sn);m(this,Ai);m(this,Si);h(this,Ai,""),h(this,Si,new MutationObserver(()=>l(this,Sn,Js)?._renderMenuItems())),this.collapse="auto"}get label(){return l(this,Ai)}set label(t){h(this,Ai,t),l(this,Sn,Js)?._renderMenuItems()}connectedCallback(){super.connectedCallback(),l(this,Si).observe(this,{subtree:!0,characterData:!0,childList:!0})}disconnectedCallback(){super.disconnectedCallback(),l(this,Si).disconnect()}render(){return p`
      <u-icon-button title="${this.label}">
        <slot></slot>
      </u-icon-button>
    `}},Ai=new WeakMap,Si=new WeakMap,Sn=new WeakSet,Js=function(){return this.parentElement},Di.styles=v`
    :host([collapse=always]) {
      display: none;
    }
  `,Di);n([d()],An.prototype,"label",null);n([d({reflect:!0})],An.prototype,"collapse",void 0);n([mt()],An.prototype,"icons",void 0);An=n([y("u-overflow-menu-item")],An);export{ee as a,lc as b,je as c,gc as d};
