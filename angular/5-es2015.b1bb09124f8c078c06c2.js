(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{ylzz:function(e,n){function t(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(n){var i=e[n];"object"!=typeof i||Object.isFrozen(i)||t(i)})),e}var i=t;i.default=t;class r{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}ignoreMatch(){this.ignore=!0}}function a(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function s(e,...n){const t=Object.create(null);for(const i in e)t[i]=e[i];return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}const o=e=>!!e.kind;class l{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=a(e)}openNode(e){if(!o(e))return;let n=e.kind;e.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(e){o(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class c{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach(n=>this._walk(e,n)),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every(e=>"string"==typeof e)?e.children=[e.children.join("")]:e.children.forEach(e=>{c._collapse(e)}))}}class u extends c{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new l(this,this.options).value()}finalize(){return!0}}function g(e){return e?"string"==typeof e?e:e.source:null}const d="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",h={begin:"\\\\[\\s\\S]",relevance:0},f={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[h]},p={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[h]},b={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},m=function(e,n,t={}){const i=s({className:"comment",begin:e,end:n,contains:[]},t);return i.contains.push(b),i.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),i},x=m("//","$"),w=m("/\\*","\\*/"),E=m("#","$");var v=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:"[a-zA-Z]\\w*",UNDERSCORE_IDENT_RE:"[a-zA-Z_]\\w*",NUMBER_RE:"\\b\\d+(\\.\\d+)?",C_NUMBER_RE:d,BINARY_NUMBER_RE:"\\b(0b[01]+)",RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map(e=>g(e)).join("")}(n,/.*\b/,e.binary,/\b.*/)),s({className:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:h,APOS_STRING_MODE:f,QUOTE_STRING_MODE:p,PHRASAL_WORDS_MODE:b,COMMENT:m,C_LINE_COMMENT_MODE:x,C_BLOCK_COMMENT_MODE:w,HASH_COMMENT_MODE:E,NUMBER_MODE:{className:"number",begin:"\\b\\d+(\\.\\d+)?",relevance:0},C_NUMBER_MODE:{className:"number",begin:d,relevance:0},BINARY_NUMBER_MODE:{className:"number",begin:"\\b(0b[01]+)",relevance:0},CSS_NUMBER_MODE:{className:"number",begin:"\\b\\d+(\\.\\d+)?(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[h,{begin:/\[/,end:/\]/,relevance:0,contains:[h]}]}]},TITLE_MODE:{className:"title",begin:"[a-zA-Z]\\w*",relevance:0},UNDERSCORE_TITLE_MODE:{className:"title",begin:"[a-zA-Z_]\\w*",relevance:0},METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});function N(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}function y(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=N,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function R(e,n){Array.isArray(e.illegal)&&(e.illegal=function(...e){return"("+e.map(e=>g(e)).join("|")+")"}(...e.illegal))}function _(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function k(e,n){void 0===e.relevance&&(e.relevance=1)}const O=["of","and","for","in","not","or","if","then","parent","list","value"];function M(e,n){return n?Number(n):function(e){return O.includes(e.toLowerCase())}(e)?0:1}function A(e){const n={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,a(this.code);let n={};return this.autoDetect?(n=e.highlightAuto(this.code),this.detectedLanguage=n.language):(n=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),n.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:n,VuePlugin:{install(e){e.component("highlightjs",n)}}}}const L={"after:highlightBlock":({block:e,result:n,text:t})=>{const i=I(e);if(!i.length)return;const r=document.createElement("div");r.innerHTML=n.value,n.value=function(e,n,t){let i=0,r="";const s=[];function o(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function l(e){r+="<"+B(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+a(e.value)+'"'})).join("")+">"}function c(e){r+="</"+B(e)+">"}function u(e){("start"===e.event?l:c)(e.node)}for(;e.length||n.length;){let n=o();if(r+=a(t.substring(i,n[0].offset)),i=n[0].offset,n===e){s.reverse().forEach(c);do{u(n.splice(0,1)[0]),n=o()}while(n===e&&n.length&&n[0].offset===i);s.reverse().forEach(l)}else"start"===n[0].event?s.push(n[0].node):s.pop(),u(n.splice(0,1)[0])}return r+a(t.substr(i))}(i,I(r),t)}};function B(e){return e.nodeName.toLowerCase()}function I(e){const n=[];return function e(t,i){for(let r=t.firstChild;r;r=r.nextSibling)3===r.nodeType?i+=r.nodeValue.length:1===r.nodeType&&(n.push({event:"start",offset:i,node:r}),i=e(r,i),B(r).match(/br|hr|img|input/)||n.push({event:"stop",offset:i,node:r}));return i}(e,0),n}const T=e=>{console.error(e)},S=(e,...n)=>{console.log("WARN: "+e,...n)},j=(e,n)=>{console.log(`Deprecated as of ${e}. ${n}`)},P=a,D=s,C=Symbol("nomatch");var H=function(e){const n=Object.create(null),t=Object.create(null),a=[];let o=!0;const l=/(^(<[^>]+>|\t|)+|\n)/gm,c="Could not find the language '{}', did you forget to load/include a language module?",d={disableAutodetect:!0,name:"Plain text",contains:[]};let h={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:u};function f(e){return h.noHighlightRe.test(e)}function p(e,n,t,i){const r={code:n,language:e};K("before:highlight",r);const a=r.result?r.result:b(r.language,r.code,t,i);return a.code=r.code,K("after:highlight",a),a}function b(e,t,i,l){const u=t;function d(e,n){const t=v.case_insensitive?n[0].toLowerCase():n[0];return Object.prototype.hasOwnProperty.call(e.keywords,t)&&e.keywords[t]}function f(){null!=A.subLanguage?function(){if(""===I)return;let e=null;if("string"==typeof A.subLanguage){if(!n[A.subLanguage])return void B.addText(I);e=b(A.subLanguage,I,!0,L[A.subLanguage]),L[A.subLanguage]=e.top}else e=m(I,A.subLanguage.length?A.subLanguage:null);A.relevance>0&&(S+=e.relevance),B.addSublanguage(e.emitter,e.language)}():function(){if(!A.keywords)return void B.addText(I);let e=0;A.keywordPatternRe.lastIndex=0;let n=A.keywordPatternRe.exec(I),t="";for(;n;){t+=I.substring(e,n.index);const i=d(A,n);if(i){const[e,r]=i;B.addText(t),t="",S+=r,B.addKeyword(n[0],v.classNameAliases[e]||e)}else t+=n[0];e=A.keywordPatternRe.lastIndex,n=A.keywordPatternRe.exec(I)}t+=I.substr(e),B.addText(t)}(),I=""}function p(e){return e.className&&B.openNode(v.classNameAliases[e.className]||e.className),A=Object.create(e,{parent:{value:A}}),A}function x(e){return 0===A.matcher.regexIndex?(I+=e[0],1):(H=!0,0)}let w={};function E(n,t){const a=t&&t[0];if(I+=n,null==a)return f(),0;if("begin"===w.type&&"end"===t.type&&w.index===t.index&&""===a){if(I+=u.slice(t.index,t.index+1),!o){const n=new Error("0 width match regex");throw n.languageName=e,n.badRule=w.rule,n}return 1}if(w=t,"begin"===t.type)return function(e){const n=e[0],t=e.rule,i=new r(t),a=[t.__beforeBegin,t["on:begin"]];for(const r of a)if(r&&(r(e,i),i.ignore))return x(n);return t&&t.endSameAsBegin&&(t.endRe=new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),t.skip?I+=n:(t.excludeBegin&&(I+=n),f(),t.returnBegin||t.excludeBegin||(I=n)),p(t),t.returnBegin?0:n.length}(t);if("illegal"===t.type&&!i){const e=new Error('Illegal lexeme "'+a+'" for mode "'+(A.className||"<unnamed>")+'"');throw e.mode=A,e}if("end"===t.type){const e=function(e){const n=e[0],t=u.substr(e.index),i=function e(n,t,i){let a=function(e,n){const t=e&&e.exec(n);return t&&0===t.index}(n.endRe,i);if(a){if(n["on:end"]){const e=new r(n);n["on:end"](t,e),e.ignore&&(a=!1)}if(a){for(;n.endsParent&&n.parent;)n=n.parent;return n}}if(n.endsWithParent)return e(n.parent,t,i)}(A,e,t);if(!i)return C;const a=A;a.skip?I+=n:(a.returnEnd||a.excludeEnd||(I+=n),f(),a.excludeEnd&&(I=n));do{A.className&&B.closeNode(),A.skip||A.subLanguage||(S+=A.relevance),A=A.parent}while(A!==i.parent);return i.starts&&(i.endSameAsBegin&&(i.starts.endRe=i.endRe),p(i.starts)),a.returnEnd?0:n.length}(t);if(e!==C)return e}if("illegal"===t.type&&""===a)return 1;if(D>1e5&&D>3*t.index)throw new Error("potential infinite loop, way more iterations than matches");return I+=a,a.length}const v=z(e);if(!v)throw T(c.replace("{}",e)),new Error('Unknown language: "'+e+'"');const N=function(e,{}){function n(n,t){return new RegExp(g(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map(e=>e[1]);this.matcherRe=n(function(e,n="|"){const t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;let i=0,r="";for(let a=0;a<e.length;a++){i+=1;const s=i;let o=g(e[a]);for(a>0&&(r+=n),r+="(";o.length>0;){const e=t.exec(o);if(null==e){r+=o;break}r+=o.substring(0,e.index),o=o.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?r+="\\"+String(Number(e[1])+s):(r+=e[0],"("===e[0]&&i++)}r+=")"}return r}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex((e,n)=>n>0&&void 0!==e),i=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,i)}}class i{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach(([e,t])=>n.addRule(e,t)),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=s(e.classNameAliases||{}),function t(r,a){const o=r;if(r.compiled)return o;[_].forEach(e=>e(r,a)),e.compilerExtensions.forEach(e=>e(r,a)),r.__beforeBegin=null,[y,R,k].forEach(e=>e(r,a)),r.compiled=!0;let l=null;if("object"==typeof r.keywords&&(l=r.keywords.$pattern,delete r.keywords.$pattern),r.keywords&&(r.keywords=function e(n,t,i="keyword"){const r={};return"string"==typeof n?a(i,n.split(" ")):Array.isArray(n)?a(i,n):Object.keys(n).forEach((function(i){Object.assign(r,e(n[i],t,i))})),r;function a(e,n){t&&(n=n.map(e=>e.toLowerCase())),n.forEach((function(n){const t=n.split("|");r[t[0]]=[e,M(t[0],t[1])]}))}}(r.keywords,e.case_insensitive)),r.lexemes&&l)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return l=l||r.lexemes||/\w+/,o.keywordPatternRe=n(l,!0),a&&(r.begin||(r.begin=/\B|\b/),o.beginRe=n(r.begin),r.endSameAsBegin&&(r.end=r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(o.endRe=n(r.end)),o.terminatorEnd=g(r.end)||"",r.endsWithParent&&a.terminatorEnd&&(o.terminatorEnd+=(r.end?"|":"")+a.terminatorEnd)),r.illegal&&(o.illegalRe=n(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map((function(e){return function(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(n){return s(e,{variants:null},n)}))),e.cachedVariants?e.cachedVariants:function e(n){return!!n&&(n.endsWithParent||e(n.starts))}(e)?s(e,{starts:e.starts?s(e.starts):null}):Object.isFrozen(e)?s(e):e}("self"===e?r:e)}))),r.contains.forEach((function(e){t(e,o)})),r.starts&&t(r.starts,a),o.matcher=function(e){const n=new i;return e.contains.forEach(e=>n.addRule(e.begin,{rule:e,type:"begin"})),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(o),o}(e)}(v,{plugins:a});let O="",A=l||N;const L={},B=new h.__emitter(h);!function(){const e=[];for(let n=A;n!==v;n=n.parent)n.className&&e.unshift(n.className);e.forEach(e=>B.openNode(e))}();let I="",S=0,j=0,D=0,H=!1;try{for(A.matcher.considerAll();;){D++,H?H=!1:A.matcher.considerAll(),A.matcher.lastIndex=j;const e=A.matcher.exec(u);if(!e)break;const n=E(u.substring(j,e.index),e);j=e.index+n}return E(u.substr(j)),B.closeAllNodes(),B.finalize(),O=B.toHTML(),{relevance:Math.floor(S),value:O,language:e,illegal:!1,emitter:B,top:A}}catch(U){if(U.message&&U.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:U.message,context:u.slice(j-100,j+100),mode:U.mode},sofar:O,relevance:0,value:P(u),emitter:B};if(o)return{illegal:!1,relevance:0,value:P(u),emitter:B,language:e,top:A,errorRaised:U};throw U}}function m(e,t){t=t||h.languages||Object.keys(n);const i=function(e){const n={relevance:0,emitter:new h.__emitter(h),value:P(e),illegal:!1,top:d};return n.emitter.addText(e),n}(e),r=t.filter(z).filter($).map(n=>b(n,e,!1));r.unshift(i);const a=r.sort((e,n)=>{if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(z(e.language).supersetOf===n.language)return 1;if(z(n.language).supersetOf===e.language)return-1}return 0}),[s,o]=a,l=s;return l.second_best=o,l}const x={"before:highlightBlock":({block:e})=>{h.useBR&&(e.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n"))},"after:highlightBlock":({result:e})=>{h.useBR&&(e.value=e.value.replace(/\n/g,"<br>"))}},w=/^(<[^>]+>|\t)+/gm,E={"after:highlightBlock":({result:e})=>{h.tabReplace&&(e.value=e.value.replace(w,e=>e.replace(/\t/g,h.tabReplace)))}};function N(e){let n=null;const i=function(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=h.languageDetectRe.exec(n);if(t){const n=z(t[1]);return n||(S(c.replace("{}",t[1])),S("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find(e=>f(e)||z(e))}(e);if(f(i))return;K("before:highlightBlock",{block:e,language:i}),n=e;const r=n.textContent,a=i?p(i,r,!0):m(r);K("after:highlightBlock",{block:e,result:a,text:r}),e.innerHTML=a.value,function(e,n,i){const r=n?t[n]:i;e.classList.add("hljs"),r&&e.classList.add(r)}(e,i,a.language),e.result={language:a.language,re:a.relevance,relavance:a.relevance},a.second_best&&(e.second_best={language:a.second_best.language,re:a.second_best.relevance,relavance:a.second_best.relevance})}const O=()=>{O.called||(O.called=!0,j("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead."),document.querySelectorAll("pre code").forEach(N))};let B=!1,I=!1;function H(){I?document.querySelectorAll("pre code").forEach(N):B=!0}function z(e){return e=(e||"").toLowerCase(),n[e]||n[t[e]]}function U(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach(e=>{t[e]=n})}function $(e){const n=z(e);return n&&!n.disableAutodetect}function K(e,n){const t=e;a.forEach((function(e){e[t]&&e[t](n)}))}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(function(){I=!0,B&&H()}),!1),Object.assign(e,{highlight:p,highlightAuto:m,highlightAll:H,fixMarkup:function(e){return j("10.2.0","fixMarkup will be removed entirely in v11.0"),j("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),n=e,h.tabReplace||h.useBR?n.replace(l,e=>"\n"===e?h.useBR?"<br>":e:h.tabReplace?e.replace(/\t/g,h.tabReplace):e):n;var n},highlightBlock:N,configure:function(e){e.useBR&&(j("10.3.0","'useBR' will be removed entirely in v11.0"),j("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),h=D(h,e)},initHighlighting:O,initHighlightingOnLoad:function(){j("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),B=!0},registerLanguage:function(t,i){let r=null;try{r=i(e)}catch(a){if(T("Language definition for '{}' could not be registered.".replace("{}",t)),!o)throw a;T(a),r=d}r.name||(r.name=t),n[t]=r,r.rawDefinition=i.bind(null,e),r.aliases&&U(r.aliases,{languageName:t})},listLanguages:function(){return Object.keys(n)},getLanguage:z,registerAliases:U,requireLanguage:function(e){j("10.4.0","requireLanguage will be removed entirely in v11."),j("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");const n=z(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:$,inherit:D,addPlugin:function(e){a.push(e)},vuePlugin:A(e).VuePlugin}),e.debugMode=function(){o=!1},e.safeMode=function(){o=!0},e.versionString="10.6.0";for(const r in v)"object"==typeof v[r]&&i(v[r]);return Object.assign(e,v),e.addPlugin(x),e.addPlugin(L),e.addPlugin(E),e}({});e.exports=H}}]);