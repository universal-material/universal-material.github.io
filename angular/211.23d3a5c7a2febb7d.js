(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[211],{211:ye=>{function W(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(t){var i=e[t];"object"==typeof i&&!Object.isFrozen(i)&&W(i)}),e}var ae=W;ae.default=W;class le{constructor(t){void 0===t.data&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function I(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function S(e,...t){const i=Object.create(null);for(const c in e)i[c]=e[c];return t.forEach(function(c){for(const E in c)i[E]=c[E]}),i}const ce=e=>!!e.kind;class ve{constructor(t,i){this.buffer="",this.classPrefix=i.classPrefix,t.walk(this)}addText(t){this.buffer+=I(t)}openNode(t){if(!ce(t))return;let i=t.kind;t.sublanguage||(i=`${this.classPrefix}${i}`),this.span(i)}closeNode(t){ce(t)&&(this.buffer+="</span>")}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}class V{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const i={kind:t,children:[]};this.add(i),this.stack.push(i)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,i){return"string"==typeof i?t.addText(i):i.children&&(t.openNode(i),i.children.forEach(c=>this._walk(t,c)),t.closeNode(i)),t}static _collapse(t){"string"!=typeof t&&t.children&&(t.children.every(i=>"string"==typeof i)?t.children=[t.children.join("")]:t.children.forEach(i=>{V._collapse(i)}))}}class ke extends V{constructor(t){super(),this.options=t}addKeyword(t,i){""!==t&&(this.openNode(i),this.addText(t),this.closeNode())}addText(t){""!==t&&this.add(t)}addSublanguage(t,i){const c=t.root;c.kind=i,c.sublanguage=!0,this.add(c)}toHTML(){return new ve(this,this.options).value()}finalize(){return!0}}function P(e){return e?"string"==typeof e?e:e.source:null}const De=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,oe="[a-zA-Z]\\w*",X="[a-zA-Z_]\\w*",q="\\b\\d+(\\.\\d+)?",ue="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ge="\\b(0b[01]+)",H={begin:"\\\\[\\s\\S]",relevance:0},je={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[H]},$e={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[H]},fe={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},U=function(e,t,i={}){const c=S({className:"comment",begin:e,end:t,contains:[]},i);return c.contains.push(fe),c.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),c},Ge=U("//","$"),Ke=U("/\\*","\\*/"),Fe=U("#","$");var j=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:oe,UNDERSCORE_IDENT_RE:X,NUMBER_RE:q,C_NUMBER_RE:ue,BINARY_NUMBER_RE:ge,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=function Le(...e){return e.map(i=>P(i)).join("")}(t,/.*\b/,e.binary,/\b.*/)),S({className:"meta",begin:t,end:/$/,relevance:0,"on:begin":(i,c)=>{0!==i.index&&c.ignoreMatch()}},e)},BACKSLASH_ESCAPE:H,APOS_STRING_MODE:je,QUOTE_STRING_MODE:$e,PHRASAL_WORDS_MODE:fe,COMMENT:U,C_LINE_COMMENT_MODE:Ge,C_BLOCK_COMMENT_MODE:Ke,HASH_COMMENT_MODE:Fe,NUMBER_MODE:{className:"number",begin:q,relevance:0},C_NUMBER_MODE:{className:"number",begin:ue,relevance:0},BINARY_NUMBER_MODE:{className:"number",begin:ge,relevance:0},CSS_NUMBER_MODE:{className:"number",begin:q+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[H,{begin:/\[/,end:/\]/,relevance:0,contains:[H]}]}]},TITLE_MODE:{className:"title",begin:oe,relevance:0},UNDERSCORE_TITLE_MODE:{className:"title",begin:X,relevance:0},METHOD_GUARD:{begin:"\\.\\s*"+X,relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(t,i)=>{i.data._beginMatch=t[1]},"on:end":(t,i)=>{i.data._beginMatch!==t[1]&&i.ignoreMatch()}})}});function Qe(e,t){"."===e.input[e.index-1]&&t.ignoreMatch()}function et(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=Qe,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function tt(e,t){Array.isArray(e.illegal)&&(e.illegal=function Te(...e){return"("+e.map(i=>P(i)).join("|")+")"}(...e.illegal))}function nt(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function it(e,t){void 0===e.relevance&&(e.relevance=1)}const rt=["of","and","for","in","not","or","if","then","parent","list","value"],st="keyword";function he(e,t,i=st){const c={};return"string"==typeof e?E(i,e.split(" ")):Array.isArray(e)?E(i,e):Object.keys(e).forEach(function(p){Object.assign(c,he(e[p],t,p))}),c;function E(p,M){t&&(M=M.map(r=>r.toLowerCase())),M.forEach(function(r){const a=r.split("|");c[a[0]]=[p,at(a[0],a[1])]})}}function at(e,t){return t?Number(t):function lt(e){return rt.includes(e.toLowerCase())}(e)?0:1}function ct(e,{}){function i(r,a){return new RegExp(P(r),"m"+(e.case_insensitive?"i":"")+(a?"g":""))}class c{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(a,u){u.position=this.position++,this.matchIndexes[this.matchAt]=u,this.regexes.push([u,a]),this.matchAt+=function Be(e){return new RegExp(e.toString()+"|").exec("").length-1}(a)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const a=this.regexes.map(u=>u[1]);this.matcherRe=i(function Ce(e,t="|"){let i=0;return e.map(c=>{i+=1;const E=i;let p=P(c),M="";for(;p.length>0;){const r=De.exec(p);if(!r){M+=p;break}M+=p.substring(0,r.index),p=p.substring(r.index+r[0].length),"\\"===r[0][0]&&r[1]?M+="\\"+String(Number(r[1])+E):(M+=r[0],"("===r[0]&&i++)}return M}).map(c=>`(${c})`).join(t)}(a),!0),this.lastIndex=0}exec(a){this.matcherRe.lastIndex=this.lastIndex;const u=this.matcherRe.exec(a);if(!u)return null;const g=u.findIndex((L,Q)=>Q>0&&void 0!==L),R=this.matchIndexes[g];return u.splice(0,g),Object.assign(u,R)}}class E{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(a){if(this.multiRegexes[a])return this.multiRegexes[a];const u=new c;return this.rules.slice(a).forEach(([g,R])=>u.addRule(g,R)),u.compile(),this.multiRegexes[a]=u,u}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(a,u){this.rules.push([a,u]),"begin"===u.type&&this.count++}exec(a){const u=this.getMatcher(this.regexIndex);u.lastIndex=this.lastIndex;let g=u.exec(a);if(this.resumingScanAtSamePosition()&&(!g||g.index!==this.lastIndex)){const R=this.getMatcher(0);R.lastIndex=this.lastIndex+1,g=R.exec(a)}return g&&(this.regexIndex+=g.position+1,this.regexIndex===this.count&&this.considerAll()),g}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=S(e.classNameAliases||{}),function M(r,a){const u=r;if(r.isCompiled)return u;[nt].forEach(R=>R(r,a)),e.compilerExtensions.forEach(R=>R(r,a)),r.__beforeBegin=null,[et,tt,it].forEach(R=>R(r,a)),r.isCompiled=!0;let g=null;if("object"==typeof r.keywords&&(g=r.keywords.$pattern,delete r.keywords.$pattern),r.keywords&&(r.keywords=he(r.keywords,e.case_insensitive)),r.lexemes&&g)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return g=g||r.lexemes||/\w+/,u.keywordPatternRe=i(g,!0),a&&(r.begin||(r.begin=/\B|\b/),u.beginRe=i(r.begin),r.endSameAsBegin&&(r.end=r.begin),!r.end&&!r.endsWithParent&&(r.end=/\B|\b/),r.end&&(u.endRe=i(r.end)),u.terminatorEnd=P(r.end)||"",r.endsWithParent&&a.terminatorEnd&&(u.terminatorEnd+=(r.end?"|":"")+a.terminatorEnd)),r.illegal&&(u.illegalRe=i(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map(function(R){return function ot(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return S(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:de(e)?S(e,{starts:e.starts?S(e.starts):null}):Object.isFrozen(e)?S(e):e}("self"===R?r:R)})),r.contains.forEach(function(R){M(R,u)}),r.starts&&M(r.starts,a),u.matcher=function p(r){const a=new E;return r.contains.forEach(u=>a.addRule(u.begin,{rule:u,type:"begin"})),r.terminatorEnd&&a.addRule(r.terminatorEnd,{type:"end"}),r.illegal&&a.addRule(r.illegal,{type:"illegal"}),a}(u),u}(e)}function de(e){return!!e&&(e.endsWithParent||de(e.starts))}function ft(e){const t={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,I(this.code);let c={};return this.autoDetect?(c=e.highlightAuto(this.code),this.detectedLanguage=c.language):(c=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),c.value},autoDetect(){return!this.language||function gt(e){return!(!e&&""!==e)}(this.autodetect)},ignoreIllegals:()=>!0},render(c){return c("pre",{},[c("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:t,VuePlugin:{install(c){c.component("highlightjs",t)}}}}const ht={"after:highlightElement":({el:e,result:t,text:i})=>{const c=pe(e);if(!c.length)return;const E=document.createElement("div");E.innerHTML=t.value,t.value=function dt(e,t,i){let c=0,E="";const p=[];function M(){return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t}function r(g){E+="<"+Y(g)+[].map.call(g.attributes,function R(L){return" "+L.nodeName+'="'+I(L.value)+'"'}).join("")+">"}function a(g){E+="</"+Y(g)+">"}function u(g){("start"===g.event?r:a)(g.node)}for(;e.length||t.length;){let g=M();if(E+=I(i.substring(c,g[0].offset)),c=g[0].offset,g===e){p.reverse().forEach(a);do{u(g.splice(0,1)[0]),g=M()}while(g===e&&g.length&&g[0].offset===c);p.reverse().forEach(r)}else"start"===g[0].event?p.push(g[0].node):p.pop(),u(g.splice(0,1)[0])}return E+I(i.substr(c))}(c,pe(E),i)}};function Y(e){return e.nodeName.toLowerCase()}function pe(e){const t=[];return function i(c,E){for(let p=c.firstChild;p;p=p.nextSibling)3===p.nodeType?E+=p.nodeValue.length:1===p.nodeType&&(t.push({event:"start",offset:E,node:p}),E=i(p,E),Y(p).match(/br|hr|img|input/)||t.push({event:"stop",offset:E,node:p}));return E}(e,0),t}const Ee={},J=e=>{console.error(e)},be=(e,...t)=>{console.log(`WARN: ${e}`,...t)},y=(e,t)=>{Ee[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),Ee[`${e}/${t}`]=!0)},Z=I,_e=S,Re=Symbol("nomatch");var pt=function(e){const t=Object.create(null),i=Object.create(null),c=[];let E=!0;const p=/(^(<[^>]+>|\t|)+|\n)/gm,M="Could not find the language '{}', did you forget to load/include a language module?",r={disableAutodetect:!0,name:"Plain text",contains:[]};let a={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:ke};function u(n){return a.noHighlightRe.test(n)}function R(n,s,d,_){let N="",B="";"object"==typeof s?(N=n,d=s.ignoreIllegals,B=s.language,_=void 0):(y("10.7.0","highlight(lang, code, ...args) has been deprecated."),y("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),B=n,N=s);const m={code:N,language:B};G("before:highlight",m);const A=m.result?m.result:L(m.language,m.code,d,_);return A.code=m.code,G("after:highlight",A),A}function L(n,s,d,_){function N(l,o){const h=D.case_insensitive?o[0].toLowerCase():o[0];return Object.prototype.hasOwnProperty.call(l.keywords,h)&&l.keywords[h]}function A(){null!=f.subLanguage?function m(){if(""===x)return;let l=null;if("string"==typeof f.subLanguage){if(!t[f.subLanguage])return void w.addText(x);l=L(f.subLanguage,x,!0,Oe[f.subLanguage]),Oe[f.subLanguage]=l.top}else l=ee(x,f.subLanguage.length?f.subLanguage:null);f.relevance>0&&(F+=l.relevance),w.addSublanguage(l.emitter,l.language)}():function B(){if(!f.keywords)return void w.addText(x);let l=0;f.keywordPatternRe.lastIndex=0;let o=f.keywordPatternRe.exec(x),h="";for(;o;){h+=x.substring(l,o.index);const b=N(f,o);if(b){const[O,z]=b;w.addText(h),h="",F+=z,O.startsWith("_")?h+=o[0]:w.addKeyword(o[0],D.classNameAliases[O]||O)}else h+=o[0];l=f.keywordPatternRe.lastIndex,o=f.keywordPatternRe.exec(x)}h+=x.substr(l),w.addText(h)}(),x=""}function v(l){return l.className&&w.openNode(D.classNameAliases[l.className]||l.className),f=Object.create(l,{parent:{value:f}}),f}function T(l,o,h){let b=function Ie(e,t){const i=e&&e.exec(t);return i&&0===i.index}(l.endRe,h);if(b){if(l["on:end"]){const O=new le(l);l["on:end"](o,O),O.isMatchIgnored&&(b=!1)}if(b){for(;l.endsParent&&l.parent;)l=l.parent;return l}}if(l.endsWithParent)return T(l.parent,o,h)}function Tt(l){return 0===f.matcher.regexIndex?(x+=l[0],1):(se=!0,0)}function It(l){const o=l[0],h=s.substr(l.index),b=T(f,l,h);if(!b)return Re;const O=f;O.skip?x+=o:(O.returnEnd||O.excludeEnd||(x+=o),A(),O.excludeEnd&&(x=o));do{f.className&&w.closeNode(),!f.skip&&!f.subLanguage&&(F+=f.relevance),f=f.parent}while(f!==b.parent);return b.starts&&(b.endSameAsBegin&&(b.starts.endRe=b.endRe),v(b.starts)),O.returnEnd?0:o.length}let K={};function we(l,o){const h=o&&o[0];if(x+=l,null==h)return A(),0;if("begin"===K.type&&"end"===o.type&&K.index===o.index&&""===h){if(x+=s.slice(o.index,o.index+1),!E){const b=new Error("0 width match regex");throw b.languageName=n,b.badRule=K.rule,b}return 1}if(K=o,"begin"===o.type)return function Bt(l){const o=l[0],h=l.rule,b=new le(h),O=[h.__beforeBegin,h["on:begin"]];for(const z of O)if(z&&(z(l,b),b.isMatchIgnored))return Tt(o);return h&&h.endSameAsBegin&&(h.endRe=function Se(e){return new RegExp(e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}(o)),h.skip?x+=o:(h.excludeBegin&&(x+=o),A(),!h.returnBegin&&!h.excludeBegin&&(x=o)),v(h),h.returnBegin?0:o.length}(o);if("illegal"===o.type&&!d){const b=new Error('Illegal lexeme "'+h+'" for mode "'+(f.className||"<unnamed>")+'"');throw b.mode=f,b}if("end"===o.type){const b=It(o);if(b!==Re)return b}if("illegal"===o.type&&""===h)return 1;if(re>1e5&&re>3*o.index)throw new Error("potential infinite loop, way more iterations than matches");return x+=h,h.length}const D=k(n);if(!D)throw J(M.replace("{}",n)),new Error('Unknown language: "'+n+'"');const Ct=ct(D,{plugins:c});let ie="",f=_||Ct;const Oe={},w=new a.__emitter(a);!function Dt(){const l=[];for(let o=f;o!==D;o=o.parent)o.className&&l.unshift(o.className);l.forEach(o=>w.openNode(o))}();let x="",F=0,C=0,re=0,se=!1;try{for(f.matcher.considerAll();;){re++,se?se=!1:f.matcher.considerAll(),f.matcher.lastIndex=C;const l=f.matcher.exec(s);if(!l)break;const h=we(s.substring(C,l.index),l);C=l.index+h}return we(s.substr(C)),w.closeAllNodes(),w.finalize(),ie=w.toHTML(),{relevance:Math.floor(F),value:ie,language:n,illegal:!1,emitter:w,top:f}}catch(l){if(l.message&&l.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:l.message,context:s.slice(C-100,C+100),mode:l.mode},sofar:ie,relevance:0,value:Z(s),emitter:w};if(E)return{illegal:!1,relevance:0,value:Z(s),emitter:w,language:n,top:f,errorRaised:l};throw l}}function ee(n,s){s=s||a.languages||Object.keys(t);const d=function Q(n){const s={relevance:0,emitter:new a.__emitter(a),value:Z(n),illegal:!1,top:r};return s.emitter.addText(n),s}(n),_=s.filter(k).filter(Ne).map(v=>L(v,n,!1));_.unshift(d);const N=_.sort((v,T)=>{if(v.relevance!==T.relevance)return T.relevance-v.relevance;if(v.language&&T.language){if(k(v.language).supersetOf===T.language)return 1;if(k(T.language).supersetOf===v.language)return-1}return 0}),[B,m]=N,A=B;return A.second_best=m,A}const _t={"before:highlightElement":({el:n})=>{a.useBR&&(n.innerHTML=n.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n"))},"after:highlightElement":({result:n})=>{a.useBR&&(n.value=n.value.replace(/\n/g,"<br>"))}},Rt=/^(<[^>]+>|\t)+/gm,xt={"after:highlightElement":({result:n})=>{a.tabReplace&&(n.value=n.value.replace(Rt,s=>s.replace(/\t/g,a.tabReplace)))}};function $(n){let s=null;const d=function g(n){let s=n.className+" ";s+=n.parentNode?n.parentNode.className:"";const d=a.languageDetectRe.exec(s);if(d){const _=k(d[1]);return _||(be(M.replace("{}",d[1])),be("Falling back to no-highlight mode for this block.",n)),_?d[1]:"no-highlight"}return s.split(/\s+/).find(_=>u(_)||k(_))}(n);if(u(d))return;G("before:highlightElement",{el:n,language:d}),s=n;const _=s.textContent,N=d?R(_,{language:d,ignoreIllegals:!0}):ee(_);G("after:highlightElement",{el:n,result:N,text:_}),n.innerHTML=N.value,function bt(n,s,d){const _=s?i[s]:d;n.classList.add("hljs"),_&&n.classList.add(_)}(n,d,N.language),n.result={language:N.language,re:N.relevance,relavance:N.relevance},N.second_best&&(n.second_best={language:N.second_best.language,re:N.second_best.relevance,relavance:N.second_best.relevance})}const te=()=>{te.called||(te.called=!0,y("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead."),document.querySelectorAll("pre code").forEach($))};let ne=!1;function xe(){"loading"!==document.readyState?document.querySelectorAll("pre code").forEach($):ne=!0}function k(n){return n=(n||"").toLowerCase(),t[n]||t[i[n]]}function Me(n,{languageName:s}){"string"==typeof n&&(n=[n]),n.forEach(d=>{i[d.toLowerCase()]=s})}function Ne(n){const s=k(n);return s&&!s.disableAutodetect}function G(n,s){const d=n;c.forEach(function(_){_[d]&&_[d](s)})}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",function wt(){ne&&xe()},!1),Object.assign(e,{highlight:R,highlightAuto:ee,highlightAll:xe,fixMarkup:function St(n){return y("10.2.0","fixMarkup will be removed entirely in v11.0"),y("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),function Et(n){return a.tabReplace||a.useBR?n.replace(p,s=>"\n"===s?a.useBR?"<br>":s:a.tabReplace?s.replace(/\t/g,a.tabReplace):s):n}(n)},highlightElement:$,highlightBlock:function Lt(n){return y("10.7.0","highlightBlock will be removed entirely in v12.0"),y("10.7.0","Please use highlightElement now."),$(n)},configure:function Mt(n){n.useBR&&(y("10.3.0","'useBR' will be removed entirely in v11.0"),y("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),a=_e(a,n)},initHighlighting:te,initHighlightingOnLoad:function Nt(){y("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),ne=!0},registerLanguage:function Ot(n,s){let d=null;try{d=s(e)}catch(_){if(J("Language definition for '{}' could not be registered.".replace("{}",n)),!E)throw _;J(_),d=r}d.name||(d.name=n),t[n]=d,d.rawDefinition=s.bind(null,e),d.aliases&&Me(d.aliases,{languageName:n})},unregisterLanguage:function yt(n){delete t[n];for(const s of Object.keys(i))i[s]===n&&delete i[s]},listLanguages:function mt(){return Object.keys(t)},getLanguage:k,registerAliases:Me,requireLanguage:function At(n){y("10.4.0","requireLanguage will be removed entirely in v11."),y("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");const s=k(n);if(s)return s;throw new Error("The '{}' language is required, but not loaded.".replace("{}",n))},autoDetection:Ne,inherit:_e,addPlugin:function kt(n){(function vt(n){n["before:highlightBlock"]&&!n["before:highlightElement"]&&(n["before:highlightElement"]=s=>{n["before:highlightBlock"](Object.assign({block:s.el},s))}),n["after:highlightBlock"]&&!n["after:highlightElement"]&&(n["after:highlightElement"]=s=>{n["after:highlightBlock"](Object.assign({block:s.el},s))})})(n),c.push(n)},vuePlugin:ft(e).VuePlugin}),e.debugMode=function(){E=!1},e.safeMode=function(){E=!0},e.versionString="10.7.3";for(const n in j)"object"==typeof j[n]&&ae(j[n]);return Object.assign(e,j),e.addPlugin(_t),e.addPlugin(ht),e.addPlugin(xt),e}({});ye.exports=pt}}]);