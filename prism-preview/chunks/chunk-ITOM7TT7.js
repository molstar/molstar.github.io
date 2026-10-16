import{a as Os}from"./chunk-KHBNYRDQ.js";import{a as Un,b as V,c as Yn,n as Ds,p as Xn,t as $s,u as lt,v as Bs,w as _n,x as Zn}from"./chunk-4XDSNK62.js";import{c as jn,g as re,h as Is,i as f,j as B,k as Vn,l as Hs,n as qn,q as _t,s as H,t as Gn,v as it,x as Wn,y as Zt,z as Kn}from"./chunk-QZGD7T6O.js";import{Aa as Nn,Ta as Tt,ea as $n,pb as Xt,qa as Bn}from"./chunk-CZB3H7J7.js";var Qt=class{constructor(e,t){this.stream=e;this.fn=t}#e;#s=!1;#o=!1;start(){if(this.#s||this.#o)return;this.#s=!0;let e=this.stream.subscribe(this.fn);this.#s?this.#e=e:e.unsubscribe()}stop(){this.#s=!1;let e=this.#e;this.#e=void 0,e?.unsubscribe()}unsubscribe(){this.#o=!0,this.stop()}},Lt=class s{#e;#s;#o;#r=!1;#t=!1;#a=!0;#n=!0;#i;constructor(e){this.#e=e,this.#n=e?e.#n:!0}get active(){return this.#n}setActive(e){this.#a!==e&&(this.#a=e,this.#h())}#h(){if(this.#r)return;let e=this.#a&&(this.#e?this.#e.#n:!0);if(e===this.#n)return;this.#n=e,e&&this.#u(!0),this.#f(e),e||this.#u(!1);let t=this.#s;if(t)for(let n of t)n.#h()}#u(e){let t=this.#o;if(t)for(let n=0;n<t.length;n++){let a=t[n];a instanceof Qt&&(e?a.start():a.stop())}}#f(e){let t=this.#i;if(t)for(let n=0;n<t.length;n++)try{t[n](e)}catch(a){console.error(a)}}onActive(e){if(!this.#r){(this.#i??=[]).push(e);try{e(this.#n)}catch(t){console.error(t)}}}follow(e){let t=Ae(e);t?this.own(t.subscribe(n=>this.setActive(!!n))):this.setActive(!!e)}bind(e,t){let n=new Qt(e,t);this.own(n),this.#n&&n.start()}get disposed(){return this.#r}child(){let e=new s(this);return this.#r?e.dispose():(this.#s??=new Set).add(e),e}onCleanup(e){if(this.#r){Qn(e);return}(this.#o??=[]).push(e)}own(e){if(this.#r){e.unsubscribe();return}(this.#o??=[]).push(e)}dispose(){if(this.#r)return;this.#r=!0,this.#t=!0,this.#i=void 0;let e=this.#s;if(e){let a=[...e];for(let o=a.length-1;o>=0;o--)a[o].dispose();this.#s=void 0}let t=this.#o;if(this.#o=void 0,t)for(let a=t.length-1;a>=0;a--){let o=t[a];typeof o=="function"?Qn(o):o.unsubscribe()}let n=this.#e;n&&!n.#t&&n.#s?.delete(this)}};function Qn(s){try{s()}catch(e){console.error(e)}}var ct;function Ns(){return ct}function ze(s="A binding"){if(!ct)throw new Error(`${s} was created outside a render scope; render with \`render\` or in an element.`);return ct}function Be(s,e){let t=ct;ct=s;try{return e()}finally{ct=t}}function q(s){ze("onCleanup").onCleanup(s)}function Jn(s){let e=new Lt;return Be(e,()=>s(()=>e.dispose()))}function Ae(s){if(Is(s))return s;if(s&&typeof s=="object"&&"asReadonly"in s&&Is(s.asReadonly))return s.asReadonly}function Jt(s){ze("onActive").onActive(s)}function U(s,e){let t=Ae(s);if(!t){e(s);return}ze().bind(t,e)}var No="http://www.w3.org/2000/svg",jo=new Set(["svg","animate","animateMotion","animateTransform","circle","clipPath","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","tspan","use","view"]),Vo=new Set(["list","form","download","role","width","height"]),na=Symbol("Passthrough");function aa(s,e){if(typeof s=="function"){let a=s(e??{});return a&&typeof a=="object"&&na in a?a:qo(a)}let t=jo.has(s),n=t?document.createElementNS(No,s):document.createElement(s);if(e){let a=s==="select"&&"value"in e;sa(n,e,t,s.includes("-"),a);let o=e.children;typeof o=="string"||typeof o=="number"?n.textContent=String(o):o!==void 0&&Fe(n,o,null),a&&sa(n,{value:e.value},t,!1),typeof e.ref=="function"&&e.ref(n)}return n}function se(s){let e=document.createDocumentFragment();return Fe(e,s.children,null),e}function qo(s){if(s instanceof Node)return s;let e=document.createDocumentFragment();return Fe(e,s,null),e}function Fe(s,e,t){if(!(e==null||typeof e=="boolean"))if(e instanceof Node)s.insertBefore(e,t);else if(Array.isArray(e))for(let n of e)Fe(s,n,t);else if(typeof e=="function")Fe(s,e(),t);else if(typeof e=="object"){let n=Ae(e);n?Vs(s,n,t):console.warn("Cannot render",e)}else s.insertBefore(document.createTextNode(String(e)),t)}function Go(s){let e=typeof s;return s===null||e==="undefined"||e==="string"||e==="number"||e==="bigint"||e==="boolean"}function Vs(s,e,t,n=!1){let a=ze("A reactive child"),o=document.createTextNode("");s.insertBefore(o,t);let i,l,p,d;U(e,c=>{if(n&&typeof c=="function"&&c===d)return;if(d=c,Go(c)){let b=c==null||typeof c=="boolean"?"":String(c);if(o){o.data!==b&&(o.data=b);return}m(),o=document.createTextNode(b),l.parentNode.insertBefore(o,l);return}if(!i){i=document.createComment(""),l=document.createComment("");let b=o;b.parentNode.insertBefore(i,b),b.parentNode.insertBefore(l,b.nextSibling)}o&&(o.remove(),o=void 0),m();let h=a.child();p=h;let u=document.createDocumentFragment();Be(h,()=>Fe(u,c,null)),l.parentNode.insertBefore(u,l)});function m(){p?.dispose(),p=void 0,i&&l&&ss(i,l)}}function ss(s,e){let t=s.parentNode;if(!t)return;let n=s.nextSibling;for(;n&&n!==e;){let a=n.nextSibling;t.removeChild(n),n=a}}var oa=new Set(["click","dblclick","contextmenu","input","change","beforeinput","keydown","keyup","pointerdown","pointerup","pointermove","pointerover","pointerout","pointercancel","mousedown","mouseup","mousemove","mouseover","mouseout","focusin","focusout"]),qs=Symbol("handlers"),es=Symbol("walked"),ea=new WeakSet,ta=new Map;function ra(s){if(!ea.has(s)){ea.add(s);for(let e of oa)s.addEventListener(e,Ko),s.addEventListener(e,Wo,!0)}}function Wo(s){if(s.bubbles||s[es])return;s[es]=s.currentTarget;let e=s.target,t=e[qs]?.[s.type];if(t){Object.defineProperty(s,"currentTarget",{configurable:!0,value:e});try{t.call(e,s)}finally{delete s.currentTarget}}}function Ko(s){if(!s.bubbles)return;let e=s.currentTarget,t=s.composedPath(),n=t.indexOf(e);if(n<0)return;let a=s[es],o=a?t.indexOf(a):-1,i=!1;try{for(let l=a?o<0?n+1:o+1:0;l<=n;l++){let p=t[l],d=p[qs]?.[s.type];if(d&&(Object.defineProperty(s,"currentTarget",{configurable:!0,value:p}),i=!0,d.call(p,s),s.cancelBubble))break}}finally{s[es]=e,i&&delete s.currentTarget}}function Uo(s,e,t){if(!oa.has(e)){s.addEventListener(e,t);return}(s[qs]??={})[e]=t,typeof document<"u"&&ra(document)}var js=s=>s===null||typeof s!="object"&&typeof s!="function";function sa(s,e,t,n,a=!1){let o;for(let i in e){let l=e[i];if(!(i==="children"||i==="ref"||l===void 0||a&&i==="value")){if(i==="class"&&typeof l=="string"&&e.classList===void 0){l&&s.setAttribute("class",l);continue}if(i.startsWith("on:"))s.addEventListener(i.slice(3),l);else if(i.length>2&&i.startsWith("on")&&i.charCodeAt(2)<91&&typeof l=="function"){let p=ta.get(i);p===void 0&&ta.set(i,p=i.slice(2).toLowerCase()),Uo(s,p,l)}else if(i==="class"||i==="className")o??=new ts(s),U(l,p=>o.setBase(p));else if(i==="classList"){o??=new ts(s);for(let p of Object.keys(l))U(l[p],d=>o.setFlag(p,!!d))}else if(i==="style")Yo(s,l);else if(i.startsWith("attr:")){let p=i.slice(5);U(l,d=>Pt(s,p,d))}else if(i.startsWith("prop:")){let p=i.slice(5);U(l,d=>{s[p]=d})}else if(t||i.includes("-"))js(l)?Pt(s,i,l):U(l,p=>Pt(s,i,p));else if(n)U(l,p=>{s[i]=p});else if(i in s&&!Vo.has(i)){if(js(l)){s[i]=l===null?"":l,(l===null||l===!1)&&s.removeAttribute(i);continue}U(l,p=>{s[i]=p??"",(p==null||p===!1)&&s.removeAttribute(i)})}else js(l)?Pt(s,i,l):U(l,p=>Pt(s,i,p))}}}function Pt(s,e,t){typeof t=="boolean"&&e.startsWith("aria-")?s.setAttribute(e,String(t)):t==null||t===!1?s.removeAttribute(e):s.setAttribute(e,t===!0?"":String(t))}var ts=class{constructor(e){this.el=e}#e="";#s=new Map;setBase(e){this.#e=e??"",this.#o()}setFlag(e,t){this.#s.set(e,t),this.#o()}#o(){let e=this.#e;for(let[t,n]of this.#s)n&&(e=e?`${e} ${t}`:t);e?this.el.setAttribute("class",e):this.el.removeAttribute("class")}};function Yo(s,e){if(typeof e=="string"||Ae(e)){U(e,n=>{n?s.setAttribute("style",n):s.removeAttribute("style")});return}let t=e;for(let n of Object.keys(t)){let a=n.startsWith("--")||n.includes("-")?n:_o(n),o=!a.startsWith("--")&&!Xo.has(a);U(t[n],i=>{i==null||i===""?s.style.removeProperty(a):s.style.setProperty(a,typeof i=="number"&&o&&i!==0?`${i}px`:String(i))})}}var Xo=new Set(["opacity","z-index","flex","flex-grow","flex-shrink","order","line-height","font-weight","zoom","aspect-ratio","scale","fill-opacity","stroke-opacity","stroke-width","grid-row","grid-column","tab-size","orphans","widows","columns","column-count"]);function _o(s){return s.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function Gs(s,e,t){ra(e);let n=t?t.child():new Lt,a=document.createComment(""),o=document.createComment(""),i=document.createDocumentFragment();return i.append(a),Be(n,()=>Fe(i,s(),null)),i.append(o),e.appendChild(i),()=>{n.dispose(),ss(a,o),a.remove(),o.remove()}}function ns(s,e){if(typeof s.animate!="function"||!s.isConnected||globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches)return;let t=getComputedStyle(s),n=t.getPropertyValue("--msp-ease-reveal").trim()||"ease";if(e==="fade"){let i=ia(t.getPropertyValue("--msp-motion-fade"))||360;return s.animate([{opacity:1},{opacity:0}],{duration:i,easing:n,fill:"forwards"})}let a=ia(t.getPropertyValue("--msp-motion-base"))||220,o=e==="side"?[{opacity:1,translate:"0 0"},{opacity:0,translate:"12px 0"}]:[{height:`${s.getBoundingClientRect().height}px`,opacity:1,overflow:"clip"},{height:"0px",paddingBlock:"0px",marginBlock:"0px",opacity:0,overflow:"clip"}];return s.animate(o,{duration:a,easing:n,fill:"forwards"})}function la(s,e){let t=s?.startViewTransition;if(!s?.isConnected||typeof t!="function"||globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches){e();return}t.call(s,e)}function ia(s){let e=s.trim(),t=Number.parseFloat(e);return e.endsWith("ms")?t:e.endsWith("s")?t*1e3:t}function Zo(s){return Ae(s)??re(s)}function Qo(s){let e=document.createDocumentFragment();return Vs(e,s,null,!0),e}function P(s){let e=!0,t=!1,n=[],a,o,i=(l,p)=>()=>{let d=s.children(l);if(n=Xs(d),p)for(let m of n)m.setAttribute("data-reveal",s.reveal===!0?"":String(s.reveal));return d};return Qo(new jn(l=>{let p,d=!0,m=Zo(s.when).pipe(H()).subscribe(c=>{if(p)for(let T of p)T.cancel();p=void 0;let h=t,u=!e&&!h&&!!c,b=!e&&h&&!c;e=!1,t=!!c;let g=d;if(d=!1,c){if(!(h&&o&&(Object.is(c,a)||g&&Un(c,a)))&&(a=c,o=i(c,!!s.reveal&&u),h&&s.swap)){let C=o;la(s.swap(),()=>{o===C&&l.next(C)});return}l.next(o);return}a=o=void 0;let y=s.reveal===!0?"grow":s.reveal,w=b&&y?n.map(T=>ns(T,y)):[];if(w.length===0||w.some(T=>!T)){l.next(s.fallback??null);return}let S=w;p=S;for(let T of n)Ws(T,!0);Promise.all(S.map(T=>T.finished)).then(()=>{p!==S||l.closed||(p=void 0,l.next(s.fallback??null))},()=>{})});return()=>{if(m.unsubscribe(),p)for(let c of p)c.cancel()}}))}function Ws(s,e){s.toggleAttribute("inert",e)}function pt(s,e){let t=ze("activity"),n=t.child();n.follow(s);let a=Be(n,e),o=Xs(a),i=Ae(s);if(i)o.length>0&&t.own(i.subscribe(l=>{for(let p of o)Ws(p,!l)}));else if(!s)for(let l of o)Ws(l,!0);return a}function Xs(s){return s instanceof Element?[s]:s instanceof DocumentFragment?[...s.children]:Array.isArray(s)?s.flatMap(e=>Xs(e)):[]}var Jo=12,pa=64,Xe=0,Ks=0,Us=new Set,Ys=!1,ca="auto";function er(){return ca!=="auto"?ca:typeof document<"u"&&!/jsdom/i.test(globalThis.navigator?.userAgent??"")}function tr(){return er()?(Xe===0&&(Xe=performance.now()+Jo,Ks=0,queueMicrotask(()=>{Xe=0})),++Ks<=pa||performance.now()<Xe):!0}function da(s){Us.add(s),!Ys&&(Ys=!0,Nn.setImmediate(sr))}function sr(){Ys=!1,Xe=0;let s=[...Us];Us.clear();for(let e of s)nr()?da(e):e()}function nr(){return Xe!==0&&Ks>pa&&performance.now()>=Xe}function Y(s){let e=ze("For"),t=s.key??(S=>S),n=document.createComment("for"),a=document.createComment("/for"),o=document.createDocumentFragment();o.append(n,a);let i=new Map,l,p=!1,d=s.children.length>1,m=(S,T,C)=>{let I=e.child(),D=d?V(C):void 0,M=document.createDocumentFragment();Be(I,()=>Fe(M,s.children(T,D?.asReadonly),null));let z,F;return M.childNodes.length===1&&M.firstChild.nodeType===Node.ELEMENT_NODE?z=F=M.firstChild:(z=document.createComment(""),F=document.createComment(""),M.insertBefore(z,M.firstChild),M.appendChild(F)),{key:S,item:T,scope:I,index:D,first:z,last:F,pos:-1}},c=S=>{let T=[S.first],C=S.first;for(;C!==S.last&&(C=C.nextSibling);)T.push(C);return T},h=S=>{S.scope.dispose();for(let T of c(S))T.parentNode?.removeChild(T)},u=[],b=!1,g=!1;q(()=>{g=!0});let y=()=>{b||(b=!0,da(()=>{b=!1,!g&&e.active&&w(u)}))},w=S=>{u=S;let T=a.parentNode;if(S.length===0&&i.size>0){for(let W of i.values())W.scope.dispose();i=new Map;let F=document.createRange();F.setStartAfter(n),F.setEndBefore(a),F.deleteContents()}let C=new Map,I=[],D=!1;for(let F=0;F<S.length;F++){let W=S[F],$=t(W);if(C.has($)){p||(p=!0,console.warn("For: duplicate key; later items with the same key are not rendered.",$));continue}let v=i.get($);if(v&&v.item!==W&&(h(v),v=void 0),!v){if(!tr()){D=!0;continue}v=m($,W,F)}v.index?.set(F),C.set($,v),I.push(v)}for(let[F,W]of i)C.has(F)||h(W);i=C;let M=ar(I),z=a;for(let F=I.length-1;F>=0;F--){let W=I[F];if(!M[F]||W.last.parentNode!==T)for(let $ of c(W))T.insertBefore($,z);z=W.first}for(let F=0;F<I.length;F++)I[F].pos=F;if(I.length===0&&s.fallback&&!l){l=e.child();let F=document.createDocumentFragment();Be(l,()=>Fe(F,s.fallback(),null)),T.insertBefore(F,a)}else I.length>0&&l&&(l.dispose(),l=void 0,ss(n,I[0].first));D&&y()};return U(s.each,w),o}function ar(s){let e=s.length,t=new Array(e).fill(!1),n=!0;for(let i=0,l=-1;i<e;i++){let p=s[i].pos;if(!(p<0)){if(p<l){n=!1;break}l=p}}if(n){for(let i=0;i<e;i++)t[i]=s[i].pos>=0;return t}let a=[],o=new Int32Array(e).fill(-1);for(let i=0;i<e;i++){let l=s[i].pos;if(l<0)continue;let p=0,d=a.length;for(;p<d;){let m=p+d>>1;s[a[m]].pos<l?p=m+1:d=m}p>0&&(o[i]=a[p-1]),a[p]=i}for(let i=a.length?a[a.length-1]:-1;i>=0;i=o[i])t[i]=!0;return t}function kc(s){return{mount:(e,t,n)=>Gs(()=>s({ctx:t}),e,n)}}var or="@layer msp.reset, msp.theme, msp.components, msp.overrides;",Qs=new Map,dt=new Set,_s=new Map,as=new Map,Zs=!1;function rr(){Zs||(Zs=!0,queueMicrotask(()=>{Zs=!1;for(let s of dt)s()}))}function N(s,e){Qs.get(s)!==e&&(Qs.set(s,e),dt.size&&rr())}function ma(){return[or,...Qs.values()].join(`
`)}function Cc(s=document){let e=as.get(s);if(e){e.users++;return}let t=ha(s)?s:s.ownerDocument,n=t.defaultView,a;if(n&&"adoptedStyleSheets"in s&&typeof n.CSSStyleSheet?.prototype.replaceSync=="function"){let o=_s.get(t);if(!o){let l=new n.CSSStyleSheet,p=()=>l.replaceSync(ma());p(),o={sheet:l,update:p,users:0},_s.set(t,o),dt.add(p)}let i=o;i.users++,s.adoptedStyleSheets=[...s.adoptedStyleSheets,i.sheet],a=()=>{s.adoptedStyleSheets=s.adoptedStyleSheets.filter(l=>l!==i.sheet),!(--i.users>0)&&(_s.delete(t),dt.delete(i.update))}}else{let o=t.createElement("style");o.setAttribute("data-msp-styles",""),ha(s)?s.head.appendChild(o):s.prepend(o);let i=()=>{o.textContent=ma()};i(),dt.add(i),a=()=>{o.remove(),dt.delete(i)}}as.set(s,{users:1,remove:a})}function Sc(s){let e=as.get(s);!e||--e.users>0||(e.remove(),as.delete(s))}function ha(s){return s.nodeType===9}var Js={icon:"msp-icon-icon"};N("components/icon/icon.module.css",`@layer msp.components {
.msp-icon-icon {
  flex-shrink: 0;
}
}
`);var ua={"align-left":'<path d="M21 5H3"/><path d="M15 12H3"/><path d="M17 19H3"/>',"app-window":'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M10 4v4"/><path d="M2 8h20"/><path d="M6 4v4"/>',"arrow-down":'<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',"arrow-up":'<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',"axis-3d":'<path d="M13.5 10.5 15 9"/><path d="M4 4v15a1 1 0 0 0 1 1h15"/><path d="M4.293 19.707 6 18"/><path d="m9 15 1.5-1.5"/>',ban:'<circle cx="12" cy="12" r="10"/><path d="M4.929 4.929 19.07 19.071"/>',"book-open":'<path d="M12 5v16"/><path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"/>',bot:'<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',box:'<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',camera:'<path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/>',"chart-gantt":'<path d="M10 6h8"/><path d="M12 16h6"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M8 11h7"/>',check:'<path d="M20 6 9 17l-5-5"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',"chevron-up":'<path d="m18 15-6-6-6 6"/>',"chevrons-left":'<path d="m11 17-5-5 5-5"/><path d="m18 17-5-5 5-5"/>',"chevrons-right":'<path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/>',"circle-alert":'<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',"circle-check":'<circle cx="12" cy="12" r="10"/><path d="m16 9-5.5 5.5L8 12"/>',"circle-help":'<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',clapperboard:'<path d="m12.296 3.464 3.02 3.956"/><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z"/><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="m6.18 5.276 3.1 3.899"/>',clipboard:'<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',cloud:'<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',"cloud-upload":'<path d="M12 13v8"/><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m8 17 4-4 4 4"/>',command:'<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/>',copy:'<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',crop:'<path d="M6 2v14a2 2 0 0 0 2 2h14"/><path d="M18 22V8a2 2 0 0 0-2-2H2"/>',crosshair:'<circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/>',download:'<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',ellipsis:'<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',"ellipsis-vertical":'<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>',eye:'<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',"eye-off":'<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/>',file:'<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/>',"file-code":'<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 12.5 8 15l2 2.5"/><path d="m14 12.5 2 2.5-2 2.5"/>',film:'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/>',focus:'<circle cx="12" cy="12" r="3"/><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/>',"folder-open":'<path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/>',fullscreen:'<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><rect width="10" height="8" x="7" y="8" rx="1"/>',gauge:'<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',glasses:'<circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"/><path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2"/><path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2"/>',"grip-vertical":'<circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>',history:'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',hourglass:'<path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>',house:'<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',image:'<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',images:'<path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"/><path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"/><circle cx="13" cy="7" r="1" fill="currentColor"/><rect x="8" y="2" width="14" height="14" rx="2"/>',info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',keyboard:'<path d="M10 8h.01"/><path d="M12 12h.01"/><path d="M14 8h.01"/><path d="M16 12h.01"/><path d="M18 8h.01"/><path d="M6 8h.01"/><path d="M7 16h10"/><path d="M8 12h.01"/><rect width="20" height="16" x="2" y="4" rx="2"/>',layers:'<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',lightbulb:'<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',list:'<path d="M3 5h.01"/><path d="M3 12h.01"/><path d="M3 19h.01"/><path d="M8 5h13"/><path d="M8 12h13"/><path d="M8 19h13"/>',"list-restart":'<path d="M21 5H3"/><path d="M7 12H3"/><path d="M7 19H3"/><path d="M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"/><path d="M11 10v4h4"/>',"list-tree":'<path d="M8 5h13"/><path d="M13 12h8"/><path d="M13 19h8"/><path d="M3 10a2 2 0 0 0 2 2h3"/><path d="M3 5v12a2 2 0 0 0 2 2h3"/>',"loader-circle":'<path d="M21 12a9 9 0 1 1-6.219-8.56"/>',locate:'<line x1="2" x2="5" y1="12" y2="12"/><line x1="19" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="5"/><line x1="12" x2="12" y1="19" y2="22"/><circle cx="12" cy="12" r="7"/>',maximize:'<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>',"maximize-2":'<path d="M15 3h6v6"/><path d="m21 3-7 7"/><path d="m3 21 7-7"/><path d="M9 21H3v-6"/>',minimize:'<path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/><path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/>',minus:'<path d="M5 12h14"/>',"monitor-cog":'<path d="M12 17v4"/><path d="m14.305 7.53.923-.382"/><path d="m15.228 4.852-.923-.383"/><path d="m16.852 3.228-.383-.924"/><path d="m16.852 8.772-.383.923"/><path d="m19.148 3.228.383-.924"/><path d="m19.53 9.696-.382-.924"/><path d="m20.772 4.852.924-.383"/><path d="m20.772 7.148.924.383"/><path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><path d="M8 21h8"/><circle cx="18" cy="6" r="3"/>',moon:'<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>',"mouse-pointer-2":'<path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"/>',"mouse-pointer-click":'<path d="M14 4.1 12 6"/><path d="m5.1 8-2.9-.8"/><path d="m6 12-1.9 2"/><path d="M7.2 2.2 8 5.1"/><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"/>',"move-3d":'<path d="M5 3v16h16"/><path d="m5 19 6-6"/><path d="m2 6 3-3 3 3"/><path d="m18 16 3 3-3 3"/>',orbit:'<path d="M20.341 6.484A10 10 0 0 1 10.266 21.85"/><path d="M3.659 17.516A10 10 0 0 1 13.74 2.152"/><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/>',paintbrush:'<path d="m14.622 17.897-10.68-2.913"/><path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"/><path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"/>',palette:'<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>',"panel-bottom":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 15h18"/>',"panel-left":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>',"panel-right":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/>',"panel-top":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/>',pause:'<rect x="14" y="3" width="5" height="18" rx="1"/><rect x="5" y="3" width="5" height="18" rx="1"/>',pencil:'<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',pin:'<path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/>',play:'<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',"redo-2":'<path d="m15 14 5-5-5-5"/><path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"/>',"refresh-cw":'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',"rotate-3d":'<path d="m15.194 13.707 3.814 1.86-1.86 3.814"/><path d="M16.47214 7.52786 A 5 10 0 1 0 13 21.79796"/><path d="M21.79796 11 A 10 5 0 1 0 19 15.57071"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',ruler:'<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/>',save:'<path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/>',scan:'<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/>',"scroll-text":'<path d="M15 12h-5"/><path d="M15 8h-5"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/>',search:'<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',settings:'<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/>',shapes:'<path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"/><rect x="3" y="14" width="7" height="7" rx="1"/><circle cx="17.5" cy="17.5" r="3.5"/>',"share-2":'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',"skip-back":'<path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"/><path d="M3 20V4"/>',"skip-forward":'<path d="M21 4v16"/><path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"/>',"sliders-horizontal":'<path d="M10 5H3"/><path d="M12 19H3"/><path d="M14 3v4"/><path d="M16 17v4"/><path d="M21 12h-9"/><path d="M21 19h-5"/><path d="M21 5h-7"/><path d="M8 10v4"/><path d="M8 12H3"/>',sparkles:'<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>',square:'<rect width="18" height="18" x="3" y="3" rx="2"/>',"squares-exclude":'<path d="M16 12v2a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0"/><path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2v2"/>',"squares-intersect":'<path d="M10 22a2 2 0 0 1-2-2"/><path d="M14 2a2 2 0 0 1 2 2"/><path d="M16 22h-2"/><path d="M2 10V8"/><path d="M2 4a2 2 0 0 1 2-2"/><path d="M20 8a2 2 0 0 1 2 2"/><path d="M22 14v2"/><path d="M22 20a2 2 0 0 1-2 2"/><path d="M4 16a2 2 0 0 1-2-2"/><path d="M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z"/><path d="M8 2h2"/>',"squares-subtract":'<path d="M10 22a2 2 0 0 1-2-2"/><path d="M16 22h-2"/><path d="M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z"/><path d="M20 8a2 2 0 0 1 2 2"/><path d="M22 14v2"/><path d="M22 20a2 2 0 0 1-2 2"/>',"squares-unite":'<path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 0 1 1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3a1 1 0 0 0-1-1z"/>',"step-back":'<path d="M13.971 4.285A2 2 0 0 1 17 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"/><path d="M21 20V4"/>',"step-forward":'<path d="M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"/><path d="M3 4v16"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',"sun-moon":'<path d="M12 2v2"/><path d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"/><path d="M16 12a4 4 0 0 0-4-4"/><path d="m19 5-1.256 1.256"/><path d="M20 12h2"/>',"swatch-book":'<path d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"/><path d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"/><path d="M 7 17h.01"/><path d="m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"/>',tag:'<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',"text-cursor-input":'<path d="M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6"/><path d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"/><path d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"/><path d="M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1"/><path d="M9 6v12"/>',"toggle-right":'<circle cx="15" cy="12" r="3"/><rect width="20" height="14" x="2" y="5" rx="7"/>',"trash-2":'<path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',"undo-2":'<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/>',upload:'<path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>',user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',"volume-2":'<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.364 18.364a9 9 0 0 0 0-12.728"/>',"volume-x":'<path d="M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z"/><path d="m16.5 14.5 5-5"/><path d="m16.5 9.5 5 5"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',"zoom-in":'<circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/>',"zoom-out":'<circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="8" x2="14" y1="11" y2="11"/>'};var fa={"ball-and-stick":'<circle cx="5" cy="18" r="2.5"/><circle cx="12" cy="6" r="3"/><circle cx="19" cy="17" r="2.5"/><path d="m6.3 15.8 4.2-7.2"/><path d="m13.6 8.5 4 6.4"/>',cartoon:'<path d="M3 15c3-10 6-10 9 0s6 10 9 0"/><path d="M3 9c3 10 6 10 9 0s6-10 9 0"/>',ligand:'<path d="M10 7l5.2 3v6L10 19l-5.2-3v-6z"/><path d="m15.2 10 3.5-2"/><circle cx="20" cy="7" r="1.5"/>',snapshots:'<rect x="7" y="3" width="14" height="14" rx="2"/><path d="M3 7v12a2 2 0 0 0 2 2h12"/><path d="M13 6.4l2.6 1.5v3L13 12.4l-2.6-1.5v-3z"/><path d="m15.6 10.9 1.6 1"/><circle cx="18.1" cy="12.5" r="1.1"/>',"measure-distance":'<path d="M3 6v12M21 6v12M3 12h18M7 9l-4 3 4 3M17 9l4 3-4 3"/>',"measure-angle":'<path d="M4 20h17M4 20 17 6M12 20a8 8 0 0 0-2.54-5.85"/>',sequence:'<rect x="2" y="9" width="5" height="8" rx="1"/><rect x="9.5" y="9" width="5" height="8" rx="1"/><rect x="17" y="9" width="5" height="8" rx="1"/><path d="M4.5 4v2M12 4v2M19.5 4v2"/>',structure:'<circle cx="12" cy="8" r="5"/><circle cx="7.5" cy="15.5" r="5"/><circle cx="16.5" cy="15.5" r="5"/>',spacefill:'<circle cx="9" cy="10" r="6"/><circle cx="16" cy="15" r="5"/>',surface:'<path d="M12 3c3 0 4 2 7 3s3 4 2 7-1 5-4 6-5 3-8 2-6-3-6-6 0-5 2-7 4-5 7-5z"/><path d="M9 11.5c1.5-2 4-2 6 0"/>',superpose:'<path d="M9.5 3.5l5.63 3.25v6.5L9.5 16.5l-5.63-3.25v-6.5z"/><path d="M14.5 7.5l5.63 3.25v6.5L14.5 20.5l-5.63-3.25v-6.5z"/>',trajectory:'<rect x="3" y="10" width="12" height="11" rx="2"/><path d="M6 7h10a2 2 0 0 1 2 2v9"/><path d="M9 4h10a2 2 0 0 1 2 2v9"/>',volume:'<path d="M12 2.5l8.5 4.75v9.5L12 21.5l-8.5-4.75v-9.5z"/><path d="M8.5 12.5c0-2.5 2-4 3.5-4s3.5 1.5 3.5 4-1.5 3-3.5 3-3.5-.5-3.5-3z"/>',prism:'<path stroke-linejoin="miter" d="M12 3 21.5 19.5h-19z"/><path stroke-width="2.6" stroke-linejoin="miter" d="M12 11.2 14.6 15.7H9.4z"/>',molstar:'<path stroke-linejoin="miter" d="M9.7 1.4h4.6v5.05l3.57-3.57 3.25 3.25-3.57 3.57h5.05v4.6h-5.05l3.57 3.57-3.25 3.25-3.57-3.57v5.05H9.7v-5.05l-3.57 3.57-3.25-3.25 3.57-3.57H1.4V9.7h5.05L2.88 6.13l3.25-3.25 3.57 3.57z"/>',"pick-atom":'<circle cx="12" cy="12" r="4"/>',"pick-residue":'<path d="M12 4.5l6.5 3.75v7.5L12 19.5l-6.5-3.75v-7.5z"/>',"pick-chain":'<circle cx="5" cy="15" r="2.5"/><circle cx="12" cy="9" r="2.5"/><circle cx="19" cy="15" r="2.5"/><path d="m7 13.3 3-2.6M14 10.7l3 2.6"/>',"pick-entity":'<circle cx="6" cy="8" r="2"/><circle cx="12" cy="8" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="6" cy="16" r="2"/><circle cx="12" cy="16" r="2"/><circle cx="18" cy="16" r="2"/>',"pick-model":'<rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3"/>'};var ir="http://www.w3.org/2000/svg",lr=18,cr={...ua,...fa},va=new Map;function pr(s){let e=va.get(s);if(e)return e;let t=cr[s];if(t===void 0)throw new Error(`Unknown icon "${s}"`);return e=document.createElementNS(ir,"svg"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.setAttribute("stroke","currentColor"),e.setAttribute("stroke-width","2"),e.setAttribute("stroke-linecap","round"),e.setAttribute("stroke-linejoin","round"),e.setAttribute("focusable","false"),e.innerHTML=t,va.set(s,e),e}function L(s){let e=pr(s.name).cloneNode(!0),t=String(s.size??lr);return e.setAttribute("width",t),e.setAttribute("height",t),e.setAttribute("class",s.class?`${Js.icon} ${s.class}`:Js.icon),s.label!==void 0?(e.setAttribute("role","img"),e.setAttribute("aria-label",s.label)):e.setAttribute("aria-hidden","true"),e}function r(s,e,t){return aa(s,e)}var x=r;var _e={apply:"msp-action-footer-apply",footer:"msp-action-footer-footer",info:"msp-action-footer-info",reset:"msp-action-footer-reset",secondary:"msp-action-footer-secondary",spin:"msp-action-footer-spin"};N("components/action-footer/action-footer.module.css",`@layer msp.components {
.msp-action-footer-footer {
  height: 30px;
  margin: var(--msp-space-1) calc(-1 * var(--msp-space-3)) calc(-1 * var(--msp-space-3));
  display: flex;
}

.msp-action-footer-reset {
  width: 32px;
  color: var(--msp-color-text-subtle);
  flex: none;
  place-items: center;
  display: grid;

  &:hover {
    color: var(--msp-color-text);
  }

  &:focus-visible {
    color: var(--msp-color-text);
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }
}

.msp-action-footer-apply {
  align-items: center;
  gap: var(--msp-space-2);
  padding: 0 var(--msp-space-4);
  color: var(--msp-color-accent);
  font-size: var(--msp-font-size-sm);
  flex: none;
  margin-left: auto;
  font-weight: 600;
  display: flex;

  &:hover:not(:disabled) {
    color: var(--msp-color-accent-strong);

    & > span {
      text-underline-offset: 3px;
      text-decoration: underline 1.5px;
    }
  }

  &:focus-visible {
    color: var(--msp-color-accent-strong);
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }

  &:disabled {
    color: var(--msp-color-text-subtle);
  }
}

.msp-action-footer-info {
  min-width: 0;
  padding-left: var(--msp-space-3);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  align-self: center;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-action-footer-reset + .msp-action-footer-info {
  padding-left: 0;
}

.msp-action-footer-secondary {
  align-items: center;
  gap: var(--msp-space-2);
  padding: 0 var(--msp-space-2) 0 var(--msp-space-4);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  flex: none;
  display: flex;

  &:hover:not(:disabled) {
    color: var(--msp-color-text);

    & > span {
      text-underline-offset: 3px;
      text-decoration: underline 1.5px;
    }
  }

  &:focus-visible {
    color: var(--msp-color-text);
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }

  &:disabled {
    color: var(--msp-color-text-subtle);
  }
}

.msp-action-footer-footer:not(:has(.msp-action-footer-info)) .msp-action-footer-secondary {
  margin-left: auto;
}

.msp-action-footer-secondary ~ .msp-action-footer-apply {
  margin-left: 0;
}

.msp-action-footer-spin {
  animation: .9s linear infinite msp-action-footer-spin;
}

@keyframes msp-action-footer-spin {
  to {
    transform: rotate(360deg);
  }
}
}
`);function dr(s){let e=s.busy??re(!1),t=B([e,s.disabled??re(!1)]).pipe(f(([n,a])=>n||a));return x("div",{class:_e.footer,children:[s.onReset?r("button",{type:"button",class:_e.reset,"data-tip":"Set defaults","aria-label":"Set defaults",onClick:()=>s.onReset?.(),children:r(L,{name:"list-restart",size:15})}):null,s.info!==void 0?r("span",{class:_e.info,children:s.info}):null,s.secondary?r("button",{type:"button",class:_e.secondary,disabled:e,onClick:()=>s.secondary?.onClick(),children:r("span",{children:s.secondary.label})}):null,x("button",{type:"button",class:_e.apply,disabled:t,onClick:()=>s.onApply(),children:[r(P,{when:e,children:()=>r(L,{name:"loader-circle",size:15,class:_e.spin})}),r("span",{children:s.label})]})]})}var Ne={block:"msp-button-block",button:"msp-button-button",danger:"msp-button-danger",ghost:"msp-button-ghost",icon:"msp-button-icon",iconOnly:"msp-button-iconOnly",primary:"msp-button-primary",small:"msp-button-small",tiny:"msp-button-tiny"};N("components/button/button.module.css",`@layer msp.components {
.msp-button-button {
  justify-content: center;
  align-items: center;
  gap: var(--msp-space-2);
  height: var(--msp-control-height);
  padding: 0 var(--msp-space-4);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-md);
  white-space: nowrap;
  display: inline-flex;

  &:hover:not(:disabled) {
    background: var(--msp-color-hover);
  }

  &:active:not(:disabled), &[aria-pressed="true"] {
    background: var(--msp-color-pressed);
    box-shadow: inset 0 0 0 1px var(--msp-selected-edge);
  }

  &:disabled {
    color: var(--msp-color-text-subtle);
  }
}

.msp-button-primary {
  background: color-mix(in oklab, var(--msp-color-accent), transparent 84%);
  color: var(--msp-color-accent-strong);
  font-weight: 600;

  &:hover:not(:disabled) {
    background: color-mix(in oklab, var(--msp-color-accent), transparent 76%);
  }

  &:active:not(:disabled), &[aria-pressed="true"] {
    background: color-mix(in oklab, var(--msp-color-accent), transparent 70%);
    box-shadow: inset 0 0 0 1px var(--msp-selected-edge);
  }

  &:disabled {
    background: color-mix(in oklab, var(--msp-color-accent), transparent 92%);
    color: var(--msp-color-text-subtle);
  }
}

.msp-button-block {
  width: 100%;
}

.msp-button-ghost {
  background: none;
}

.msp-button-danger:hover:not(:disabled) {
  background: var(--msp-color-danger);
  color: #fff;
}

.msp-button-small {
  height: max(24px, var(--msp-touch-target, 0px));
  padding: 0 var(--msp-inset);
  font-size: var(--msp-font-size-sm);
}

.msp-button-tiny {
  gap: var(--msp-space-1);
  height: max(24px, var(--msp-touch-target, 0px));
  padding: 0 var(--msp-space-2);
  font-size: var(--msp-font-size-xs);

  & .msp-button-icon {
    width: 14px;
    height: 14px;
  }
}

.msp-button-iconOnly {
  width: var(--msp-control-height);
  padding: 0;

  &.msp-button-small, &.msp-button-tiny {
    width: max(24px, var(--msp-touch-target, 0px));
  }
}

.msp-button-icon {
  width: 18px;
  height: 18px;
  display: inline-flex;

  & > svg {
    width: 100%;
    height: 100%;
  }
}
}
`);function ce(s){let e=s.variant??"default",t=s.icon!==void 0&&s.children===void 0,n=[Ne.button,e!=="default"?Ne[e]:"",s.size==="sm"?Ne.small:s.size==="xs"?Ne.tiny:"",t?Ne.iconOnly:"",s.block?Ne.block:"",s.class??""].filter(Boolean).join(" ");return x("button",{type:"button",class:n,"data-tip":s.title,"aria-label":t?s.title:void 0,disabled:s.disabled,"aria-pressed":s.pressed,onClick:s.onClick,children:[s.icon!==void 0?r("span",{class:Ne.icon,children:s.icon}):null,s.children]})}var os=class{constructor(e,t=Xt.getDefaultValues(e),n={}){this.params=e;this.options=n;this.#s=Xt.getDefaultValues(e),this.#e=V({...this.#s,...t},{compare:Object.is})}#e;#s;#o=new Map;#r=new Map;get values(){return this.#e.asReadonly}field(e){let t=this.#o.get(e);return t||(t=this.#e.asReadonly.pipe(f(n=>n[e]),H()),this.#o.set(e,t)),t}visible(e){let t=this.params[e];return t.hideIf?this.#e.asReadonly.pipe(f(n=>!t.hideIf(n)),H()):this.#e.asReadonly.pipe(f(()=>!0),H())}set(e,t){let n=this.#e.value;if(Object.is(n[e],t))return;let a={...n,[e]:t};this.#e.set(a),this.options.onChange?.(a,e)}load(e){this.#e.set({...this.#s,...e})}reset(){let e=this.#e.value,t={...this.#s};this.#e.set(t);for(let n of Object.keys(this.params))Xt.isParamEqual(this.params[n],e[n],t[n])||this.options.onChange?.(t,n)}layout(){let e=[],t=[];for(let n of Object.keys(this.params)){let a=this.params[n];a.isHidden||(a.isEssential?e.push(n):t.push(n))}return e.length?{essentials:e,advanced:t}:{essentials:t,advanced:[]}}fold(e,t=!1){let n=this.#r.get(e);return n||(n=V(t),this.#r.set(e,n)),n}};function ga(s){let e=t=>{let n={names:[]},a=new Map;for(let i of Object.keys(s)){let l=s[i];if(l.isHidden||l.type==="value"||!!l.isEssential!==t)continue;if(!l.category){n.names.push(i);continue}let p=a.get(l.category);p||(p={category:l.category,names:[]},a.set(l.category,p)),p.names.push(i)}let o=[...a.values()].sort((i,l)=>i.category<l.category?-1:1);return n.names.length?[n,...o]:o};return{essentials:e(!0),advanced:e(!1)}}function Re(s){return(typeof s.composedPath=="function"?s.composedPath():[])[0]??s.target}function me(s,e){if(!e)return!1;let t=typeof s.composedPath=="function"?s.composedPath():[];return t.length?t.includes(e):e.contains(s.target)}function je(s){let t=s.getRootNode().activeElement??null;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t}function mr(s){let e=s.getRootNode();return typeof ShadowRoot<"u"&&e instanceof ShadowRoot?e.host:s.closest?.(".msp-root")??s.parentElement?.closest(".msp-root")??void 0}function Ce(s,e){let t=mr(s);if(!t||me(e,t))return!0;let n=t.ownerDocument,a=n.activeElement;return a&&a!==n.body&&a!==n.documentElement?!1:t.matches(":hover")}function ba(s){return typeof HTMLElement>"u"||!(s instanceof HTMLElement)?!1:s.isContentEditable||s instanceof HTMLTextAreaElement||s instanceof HTMLSelectElement?!0:s instanceof HTMLInputElement&&!["checkbox","radio","range","button","color"].includes(s.type)}var mt={content:"msp-scroll-area-content",root:"msp-scroll-area-root",scrollbar:"msp-scroll-area-scrollbar",thumb:"msp-scroll-area-thumb",viewport:"msp-scroll-area-viewport"};N("components/scroll-area/scroll-area.module.css",`@layer msp.components {
.msp-scroll-area-root {
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  display: flex;
  position: relative;
  overflow: hidden;
}

.msp-scroll-area-root[data-edge] {
  margin-inline-end: calc(-1 * var(--msp-scroll-edge, var(--msp-space-2)));
}

.msp-scroll-area-viewport {
  overscroll-behavior: contain;
  scrollbar-width: none;
  flex: auto;
  min-width: 0;
  min-height: 0;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .msp-scroll-area-root[data-chain] > & {
    overscroll-behavior: auto;
  }

  .msp-scroll-area-root[data-axis="y"] > & {
    overflow-x: hidden;
  }

  .msp-scroll-area-root[data-axis="x"] > & {
    overflow-y: hidden;
  }

  .msp-scroll-area-root:not([data-axis="x"]) > & {
    mask-image: linear-gradient(to bottom,
      transparent,
      #000 var(--msp-fade-top),
      #000 calc(100% - var(--msp-fade-bottom)),
      transparent);
    animation-name: msp-fade-scroll-top, msp-fade-scroll-bottom;
    animation-timing-function: linear;
    animation-fill-mode: both;
    animation-timeline: scroll(self);
    animation-range: 0 24px, calc(100% - 24px) 100%;
  }
}

.msp-scroll-area-content {
  min-width: 0;

  .msp-scroll-area-root[data-edge] > .msp-scroll-area-viewport > & {
    padding-inline-end: var(--msp-scroll-edge, var(--msp-space-2));
  }

  .msp-scroll-area-root[data-axis="x"] > .msp-scroll-area-viewport > &, .msp-scroll-area-root[data-axis="both"] > .msp-scroll-area-viewport > & {
    width: max-content;
    min-width: 100%;
  }
}

.msp-scroll-area-scrollbar {
  z-index: 1;
  opacity: 0;
  transition: opacity var(--msp-motion-base) var(--msp-ease);
  touch-action: none;
  user-select: none;
  display: flex;
  position: absolute;

  &[data-orientation="vertical"] {
    justify-content: center;
    width: 10px;
    top: 2px;
    bottom: 2px;
    right: 1px;
  }

  &[data-orientation="horizontal"] {
    flex-direction: column;
    justify-content: center;
    height: 10px;
    bottom: 1px;
    left: 2px;
    right: 2px;
  }

  .msp-scroll-area-root:hover > &, .msp-scroll-area-root:focus-within > &, .msp-scroll-area-root[data-scrolling] > &, &[data-dragging] {
    opacity: 1;
  }

  .msp-scroll-area-root[data-edge] > &[data-orientation="vertical"] {
    width: 8px;
    right: 0;
  }

  .msp-scroll-area-root:not([data-overflow-y]) > &[data-orientation="vertical"], .msp-scroll-area-root:not([data-overflow-x]) > &[data-orientation="horizontal"] {
    display: none;
  }
}

.msp-scroll-area-thumb {
  background: color-mix(in oklab, var(--msp-color-text), transparent 72%);
  transition: scale var(--msp-motion-fast) var(--msp-ease);
  border-radius: 3px;
  flex: none;

  [data-orientation="vertical"] > & {
    transform-origin: 100%;
    width: 4px;
  }

  [data-orientation="horizontal"] > & {
    transform-origin: bottom;
    height: 4px;
  }

  .msp-scroll-area-scrollbar:hover > &, [data-dragging] > & {
    background: color-mix(in oklab, var(--msp-color-text), transparent 52%);
  }

  [data-orientation="vertical"]:hover > &, [data-orientation="vertical"][data-dragging] > & {
    scale: 1.5 1;
  }

  [data-orientation="horizontal"]:hover > &, [data-orientation="horizontal"][data-dragging] > & {
    scale: 1 1.5;
  }
}
}
`);var hr=16,ur=500;function ie(s){let{class:e,contentClass:t,axis:n="y",viewportRef:a,edge:o,chain:i,children:l,...p}=s,d,m,c,h={},u=()=>{m&&(h.y&&b(h.y,m.clientHeight,m.scrollHeight,m.scrollTop),h.x&&b(h.x,m.clientWidth,m.scrollWidth,m.scrollLeft))},b=(M,z,F,W)=>{let $=F-z>1;if($!==M.overflows&&(M.overflows=$,d.toggleAttribute(M.axis==="y"?"data-overflow-y":"data-overflow-x",$)),!$)return;let v=M.axis==="y"?M.track.clientHeight:M.track.clientWidth,k=Math.max(hr,Math.round(v*z/F));k!==M.size&&(M.size=k,M.axis==="y"?M.thumb.style.height=`${k}px`:M.thumb.style.width=`${k}px`),M.travel=v-k,M.range=F-z;let R=Math.round(M.travel*Math.min(Math.max(W,0),M.range)/M.range);R!==M.offset&&(M.offset=R,M.thumb.style.transform=M.axis==="y"?`translateY(${R}px)`:`translateX(${R}px)`)},g,y=()=>{g=void 0,d.removeAttribute("data-scrolling")},w=()=>{u(),g===void 0?d.setAttribute("data-scrolling",""):clearTimeout(g),g=setTimeout(y,ur)},S=(M,z)=>{M.axis==="y"?m.scrollTop=z:m.scrollLeft=z},T=M=>M.axis==="y"?m.scrollTop:m.scrollLeft,C=(M,z)=>M.axis==="y"?z.clientY:z.clientX,I=M=>z=>{if(z.button!==0||!M.overflows)return;if(z.preventDefault(),z.target!==M.thumb&&M.travel>0){let k=M.track.getBoundingClientRect(),R=C(M,z)-(M.axis==="y"?k.top:k.left)-M.size/2;S(M,Math.min(Math.max(R,0),M.travel)/M.travel*M.range)}let F=C(M,z),W=T(M);M.track.setPointerCapture(z.pointerId),M.track.setAttribute("data-dragging","");let $=k=>{if((k.buttons&1)===0)return v();M.travel>0&&S(M,W+(C(M,k)-F)/M.travel*M.range)},v=()=>{M.track.removeEventListener("pointermove",$),M.track.removeEventListener("pointerup",v),M.track.removeEventListener("pointercancel",v),M.track.removeAttribute("data-dragging")};M.track.addEventListener("pointermove",$),M.track.addEventListener("pointerup",v),M.track.addEventListener("pointercancel",v)},D=M=>{let z=r("div",{class:mt.thumb}),F=r("div",{class:mt.scrollbar,"data-orientation":M==="y"?"vertical":"horizontal","aria-hidden":"true",onMouseDown:$=>$.preventDefault(),children:z}),W={axis:M,track:F,thumb:z,overflows:!1,size:-1,offset:-1,travel:0,range:0};return F.addEventListener("pointerdown",I(W)),h[M]=W,F};if(d=x("div",{class:`${mt.root} ${e??""}`,"data-axis":n,"data-edge":o?"":void 0,"data-chain":i?"":void 0,children:[r("div",{class:mt.viewport,ref:M=>{m=M,a?.(M)},onScroll:w,children:r("div",{...p,class:`${mt.content} ${t??""}`,ref:M=>{c=M,p.ref?.(M)},children:l})}),n!=="x"?D("y"):null,n!=="y"?D("x"):null]}),typeof ResizeObserver<"u"){let M=new ResizeObserver(u);M.observe(m),M.observe(c),q(()=>M.disconnect())}return q(()=>{g!==void 0&&clearTimeout(g)}),queueMicrotask(u),d}var he={button:"msp-select-button",check:"msp-select-check",chevron:"msp-select-chevron",floating:"msp-select-floating",group:"msp-select-group",groupBody:"msp-select-groupBody",groupChevron:"msp-select-groupChevron",groupHead:"msp-select-groupHead",label:"msp-select-label",list:"msp-select-list","list-in":"msp-select-list-in",listContent:"msp-select-listContent",menuPopover:"msp-select-menuPopover",option:"msp-select-option",select:"msp-select-select"};N("components/select/select.module.css",`@layer msp.components {
.msp-select-select {
  gap: var(--msp-space-1);
  min-width: 0;
  display: grid;
}

.msp-select-button {
  align-items: center;
  gap: var(--msp-space-2);
  width: 100%;
  min-width: 0;
  height: var(--msp-control-height);
  padding: 0 var(--msp-space-2) 0 var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  box-shadow: inset 0 0 0 1px var(--msp-field-edge);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  display: flex;

  &[data-size="sm"] {
    height: 24px;
  }

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }
}

.msp-select-label {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-select-chevron {
  color: var(--msp-color-text-muted);
  transition: transform var(--msp-motion-fast) var(--msp-ease);
  flex: none;

  [aria-expanded="true"] > & {
    transform: rotate(180deg);
  }
}

.msp-select-list {
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  max-height: 240px;
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  animation: msp-select-list-in var(--msp-motion-fast) var(--msp-ease);
}

.msp-select-listContent {
  padding: var(--msp-space-1);
  display: grid;
}

@keyframes msp-select-list-in {
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
}

.msp-select-option {
  justify-content: space-between;
  align-items: center;
  gap: var(--msp-space-2);
  min-height: 26px;
  padding: 0 var(--msp-space-2) 0 var(--msp-space-3);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  display: flex;

  &:hover, &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
    outline: none;
  }

  &[aria-selected="true"] {
    color: var(--msp-color-accent);
    font-weight: 600;
  }
}

.msp-select-group {
  display: grid;
}

.msp-select-groupHead {
  align-items: center;
  gap: var(--msp-space-1);
  min-height: 26px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  text-align: left;
  font-weight: 600;
  display: flex;

  &:hover, &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
    outline: none;
  }
}

.msp-select-groupChevron {
  transition: transform var(--msp-motion-fast) var(--msp-ease);
  flex: none;

  [aria-expanded="true"] > & {
    transform: rotate(90deg);
  }
}

.msp-select-groupBody {
  padding-left: var(--msp-space-3);
  display: grid;

  &[hidden] {
    display: none;
  }
}

.msp-select-check {
  visibility: hidden;
  flex: none;

  [aria-selected="true"] > & {
    visibility: visible;
  }
}

.msp-select-floating {
  color: inherit;
  background: none;
  border: 0;
  width: max-content;
  max-width: calc(100vw - 16px);
  margin: 0;
  padding: 0;
  position: fixed;
  inset: auto;
  overflow: visible;

  & .msp-select-option {
    white-space: nowrap;
    min-height: 24px;
  }

  & > .msp-select-list {
    background: var(--msp-color-raised);
    box-shadow: inset 0 0 0 1px var(--msp-glass-edge),
      var(--msp-shadow-overlay);
  }
}

.msp-select-menuPopover {
  min-width: 180px;
  padding: var(--msp-space-1);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-raised);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge),
    var(--msp-shadow-overlay);
  font-size: var(--msp-font-size-sm);
  animation: msp-select-list-in var(--msp-motion-fast) var(--msp-ease);
  display: grid;
}
}
`);function fr(s){let e=V(!1),t=vr(s.value),n;return x("span",{class:`${he.select} ${s.class??""}`,ref:a=>{n=a},children:[r(rs,{label:t.pipe(f(a=>s.options.find(o=>o[0]===a)?.[1]??"")),open:e,size:s.size,title:s.title,"aria-label":s["aria-label"]}),r(P,{when:e,children:()=>{let a=r(ht,{options:s.options,value:t,onPick:o=>{e.set(!1),s.onChange?.(o)},onClose:()=>e.set(!1),floating:s.over});return s.over?r(Ze,{anchor:n,children:a}):a}})]})}function rs(s){return x("button",{type:"button",class:he.button,"data-size":s.size??"md","aria-haspopup":"listbox","aria-expanded":s.open,"aria-label":s["aria-label"],title:s.title,onClick:()=>s.open.set(!s.open.value),children:[r("span",{class:he.label,children:s.label}),r(L,{name:"chevron-down",size:14,class:he.chevron})]})}function ht(s){let e;U(s.value,c=>{e=c});let t=new Map,n=()=>[...d.querySelectorAll('[role="option"], [data-group-head]')].filter(c=>!c.closest("[hidden]")),a=c=>{let h=n();h[Math.max(0,Math.min(h.length-1,c))]?.focus()},o=([c,h])=>{let u=x("button",{type:"button",role:"option",class:he.option,"aria-selected":s.value.pipe(f(b=>b===c),H()),onClick:()=>s.onPick(c),children:[r("span",{children:h}),r(L,{name:"check",size:14,class:he.check})]});return t.set(c,u),u},i=new Map,l=[];for(let c of s.options)c[2]?i.has(c[2])?i.get(c[2]).push(c):i.set(c[2],[c]):l.push(c);let p=(c,h)=>{let u=V(h.some(b=>b[0]===e));return x("div",{class:he.group,role:"group","aria-label":c,children:[x("button",{type:"button",class:he.groupHead,"data-group-head":"","aria-expanded":u,onClick:()=>u.set(!u.value),children:[r(L,{name:"chevron-right",size:13,class:he.groupChevron}),r("span",{children:c})]}),r("div",{class:he.groupBody,hidden:u.asReadonly.pipe(f(b=>!b)),children:h.map(o)})]})},d=x(ie,{class:he.list,contentClass:he.listContent,chain:!s.floating,role:"listbox",onKeyDown:c=>{let h=n(),u=h.indexOf(je(d));if(c.key==="ArrowDown")a(u+1);else if(c.key==="ArrowUp")a(u-1);else if(c.key==="Home")a(0);else if(c.key==="End")a(h.length-1);else if(c.key==="Escape")s.onClose();else return;c.preventDefault(),c.stopPropagation()},children:[l.map(o),[...i].map(([c,h])=>p(c,h))]});queueMicrotask(()=>{let c=e===void 0?void 0:t.get(e);c&&!c.closest("[hidden]")?c.focus():a(0)});let m=c=>{let h=Re(c);me(c,d)||h.closest?.('[aria-haspopup="listbox"][aria-expanded="true"]')||s.onClose()};return document.addEventListener("pointerdown",m,!0),q(()=>document.removeEventListener("pointerdown",m,!0)),d}function vr(s){let e=Ae(s);return e||V(s).asReadonly}function gr(s){let e,t=a=>{a.key!=="Escape"||a.defaultPrevented||(a.preventDefault(),s.onClose(!0))},n=a=>{me(a,e)||me(a,s.anchor)||s.onClose()};return document.addEventListener("keydown",t,!0),document.addEventListener("pointerdown",n,!0),q(()=>{document.removeEventListener("keydown",t,!0),document.removeEventListener("pointerdown",n,!0)}),r(Ze,{anchor:s.anchor,align:"end",children:r("div",{class:he.menuPopover,role:"menu","aria-label":s["aria-label"],ref:a=>{e=a,requestAnimationFrame(()=>a.querySelector("button:not(:disabled)")?.focus())},children:s.children})})}function Ze(s){let e=r("div",{class:he.floating,"attr:popover":"manual",children:s.children}),t=-1,n=()=>{let o=s.anchor.getBoundingClientRect();o.width!==t&&(t=o.width,e.style.minWidth=`${o.width}px`);let i=e.offsetHeight,l=e.offsetWidth,p=window.innerHeight-o.bottom,d=p>=i+8||p>=o.top?o.bottom+2:o.top-i-2,m=s.align==="end"?o.right-l:o.left;e.style.left=`${Math.max(8,Math.min(m,window.innerWidth-8-l))}px`,e.style.top=`${Math.max(4,d)}px`},a=o=>{me(o,e)||n()};return queueMicrotask(()=>{e.isConnected&&(e.showPopover?.(),n(),(e.querySelector('[aria-selected="true"]')??e.querySelector("[role=option]"))?.focus())}),window.addEventListener("scroll",a,!0),window.addEventListener("resize",n),q(()=>{window.removeEventListener("scroll",a,!0),window.removeEventListener("resize",n)}),e}var br='a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]), [contenteditable="true"]',yr='[role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"]';function Se(s=document){let e=s.activeElement;for(;e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;if(!(!e||e===s.body||e===s.documentElement)&&!(e.shadowRoot&&!e.shadowRoot.activeElement&&e.tabIndex<0))return e}function en(s){return[...s.querySelectorAll(br)].filter(e=>!e.closest("[hidden], [inert]"))}function is(s,e){if(s.key!=="Tab"||s.defaultPrevented)return;let t=en(e);if(!t.length)return;let n=Se(e.ownerDocument),a=!!n&&e.contains(n);s.shiftKey&&(!a||n===t[0])?(s.preventDefault(),t[t.length-1].focus()):!s.shiftKey&&(!a||n===t[t.length-1])&&(s.preventDefault(),t[0].focus())}function Ie(s){let e=Se();return t=>{let n=Se();if(n&&!(t&&t.contains(n)))return;let a=e?.isConnected?e:s?.();a?.isConnected&&a.focus({preventScroll:!0})}}function ya(s){if(!s)return!1;try{return s.matches(":focus-visible")}catch{return Se(s.ownerDocument)===s}}function xa(s){return[...s.querySelectorAll(yr)].filter(e=>!e.hasAttribute("disabled")&&e.getAttribute("aria-disabled")!=="true"&&!e.closest("[hidden]"))}function ut(s,e=!1){let t=xa(s),n=(e?t.find(a=>a.getAttribute("aria-checked")==="true"):void 0)??t[0];return n?.focus(),!!n}function Qe(s){if(s.defaultPrevented)return;let e=s.currentTarget,t=xa(e);if(!t.length)return;let n=t.indexOf(Se(e.ownerDocument)),a=t.length,o;switch(s.key){case"ArrowDown":o=t[n<0?0:(n+1)%a];break;case"ArrowUp":o=t[n<0?a-1:(n-1+a)%a];break;case"Home":o=t[0];break;case"End":o=t[a-1];break;default:return}s.preventDefault(),o.focus()}function zt(s){let e=()=>[...s.querySelectorAll('[role="tab"]')].filter(o=>!o.closest("[hidden]")),t=()=>{let o=e(),i=Se(s.ownerDocument),l=o.find(p=>p===i)??o.find(p=>p.getAttribute("aria-selected")==="true")??o[0];for(let p of o){let d=p===l?0:-1;p.tabIndex!==d&&(p.tabIndex=d)}},n=o=>{if(o.defaultPrevented)return;let i=e(),l=i.indexOf(o.target);if(l<0)return;let p;switch(o.key){case"ArrowDown":case"ArrowRight":p=i[(l+1)%i.length];break;case"ArrowUp":case"ArrowLeft":p=i[(l-1+i.length)%i.length];break;case"Home":p=i[0];break;case"End":p=i[i.length-1];break;default:return}o.preventDefault(),p.focus()};s.addEventListener("keydown",n),s.addEventListener("focusin",t);let a=new MutationObserver(t);return a.observe(s,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["aria-selected"]}),t(),()=>{s.removeEventListener("keydown",n),s.removeEventListener("focusin",t),a.disconnect()}}var xr=0;function Ee(s="msp"){return`${s}-${++xr}`}var be={custom:"msp-color-color-picker-custom",field:"msp-color-color-picker-field",greys:"msp-color-color-picker-greys",marker:"msp-color-color-picker-marker",palette:"msp-color-color-picker-palette",picker:"msp-color-color-picker-picker",preview:"msp-color-color-picker-preview",swatch:"msp-color-color-picker-swatch",text:"msp-color-color-picker-text"};N("components/color/color-picker.module.css",`@layer msp.components {
.msp-color-color-picker-picker {
  gap: var(--msp-space-3);
  margin-block: var(--msp-space-1) var(--msp-space-2);
  padding: var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  display: grid;
}

.msp-color-color-picker-field, .msp-color-color-picker-greys {
  border-radius: var(--msp-radius-sm);
  box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-text), transparent 88%);
  cursor: crosshair;
  touch-action: none;
  position: relative;
}

.msp-color-color-picker-field {
  background: linear-gradient(#ffffffe6, #fff0 50%, #0000 50%, #000000e6), linear-gradient(to right, red, #ff0, #0f0, #0ff, #00f, #f0f, red);
  height: 96px;
}

.msp-color-color-picker-greys {
  background: linear-gradient(to right, #000, #fff);
  height: 12px;
}

.msp-color-color-picker-marker {
  pointer-events: none;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  position: absolute;
  translate: -50% -50%;
  box-shadow: 0 0 0 1.5px #fff, 0 0 0 2.5px #00000080;
}

.msp-color-color-picker-palette {
  gap: var(--msp-space-2);
  grid-template-columns: repeat(8, minmax(0, 1fr));
  display: grid;
}

.msp-color-color-picker-swatch {
  border-radius: var(--msp-radius-sm);
  min-width: 0;
  height: 16px;
  box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-text), transparent 88%);
  transition: transform var(--msp-motion-fast) var(--msp-ease);

  &:hover {
    transform: scale(1.08);
  }

  &[aria-selected="true"] {
    box-shadow: 0 0 0 1.5px var(--msp-color-bg),
      0 0 0 3px var(--msp-color-text-muted);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: 2px;
  }
}

.msp-color-color-picker-custom {
  align-items: center;
  gap: var(--msp-space-2);
  display: flex;
}

.msp-color-color-picker-preview {
  border-radius: var(--msp-radius-sm);
  width: 22px;
  height: 22px;
  box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-text), transparent 88%);
  flex: none;
}

.msp-color-color-picker-text {
  min-width: 0;
  height: 24px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  font-variant-numeric: tabular-nums;
  border: 0;
  flex: 1;

  &::placeholder {
    color: var(--msp-color-text-subtle);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }
}
}
`);var ka=[15026253,16214805,16762173,4630360,1222036,37119,7231183,14041247];function wa(s){let e=s>>16&255,t=s>>8&255,n=s&255,a=(Math.max(e,t,n)+Math.min(e,t,n))/510,o=Math.round(7*(1-a)),i=7-o,l=[];for(let p=o;p>0;p--)l.push(ls(s,.9*p/o));l.push(s);for(let p=1;p<=i;p++)l.push(ls(s,-.85*p/i));return l}function Te(s){return`#${(s>>>0&16777215).toString(16).padStart(6,"0")}`}function Ve(s){return`${s>>16&255}, ${s>>8&255}, ${s&255}`}var He=(s,e,t)=>s<<16|e<<8|t,qe=s=>Math.max(0,Math.min(255,Math.round(s)));function wr(s){let e=s.trim().toLowerCase();if(!e)return;let t=/^(?:#|0x)?([0-9a-f]{3}|[0-9a-f]{6})$/.exec(e);if(t){let o=t[1].length===3?t[1].replace(/./g,i=>i+i):t[1];return Number.parseInt(o,16)}let n=/^(rgba?|hsla?)?\s*\(?\s*([^()]*?)\s*\)?$/.exec(e);if(n){let o=n[2].split(/\s*[,;/\s]\s*/).filter(Boolean);if(o.length===3||o.length===4){let i=o.slice(0,3);if(i.every(l=>/^[+]?(\d+\.?\d*|\.\d+)%?$/.test(l))){if(n[1]?.startsWith("hsl"))return kr(i);let l=i.some(c=>c.endsWith("%")),p=i.map(c=>Number.parseFloat(c)),d=!l&&p.every(c=>c<=1)&&i.some(c=>c.includes(".")),m=c=>l?c*255/100:d?c*255:c;return!l&&!d&&p.some(c=>c>255)?void 0:He(qe(m(p[0])),qe(m(p[1])),qe(m(p[2])))}}}let a=e.replace(/[\s_-]/g,"");return Object.hasOwn(Os,a)?Os[a]:void 0}function kr(s){let e=(Number.parseFloat(s[0])%360+360)%360/60,t=Math.min(1,Number.parseFloat(s[1])/100),n=Math.min(1,Number.parseFloat(s[2])/100),a=(1-Math.abs(2*n-1))*t,o=a*(1-Math.abs(e%2-1)),i=n-a/2,[l,p,d]=e<1?[a,o,0]:e<2?[o,a,0]:e<3?[0,a,o]:e<4?[0,o,a]:e<5?[o,0,a]:[a,0,o];return He(qe((l+i)*255),qe((p+i)*255),qe((d+i)*255))}function ls(s,e){let t=e>0?255:0,n=Math.abs(e),a=o=>{let i=s>>o&255;return Math.round(i+(t-i)*n)<<o};return a(16)|a(8)|a(0)}var cs=.9;function Mr(s){let e=s*6%6,t=e-Math.floor(e),n=qe(t*255),a=255-n;switch(Math.floor(e)){case 0:return He(255,n,0);case 1:return He(a,255,0);case 2:return He(0,255,n);case 3:return He(0,a,255);case 4:return He(n,0,255);default:return He(255,0,a)}}function Cr(s,e){let t=Mr(Math.max(0,Math.min(1,s))),n=Math.max(0,Math.min(1,e));return n<.5?ls(t,cs*(1-n/.5)):ls(t,-cs*((n-.5)/.5))}function Sr(s){let e=s>>16&255,t=s>>8&255,n=s&255,a=Math.max(e,t,n),o=Math.min(e,t,n);if(a-o<16)return{greys:!0,x:(e+t+n)/765,y:.5};let i=a-o,l=a===e?((t-n)/i+6)%6:a===t?(n-e)/i+2:(e-t)/i+4,p=(a+o)/510,d=p>=.5?.5*(1-(2*p-1)/cs):.5+.5*(1-2*p)/cs;return{greys:!1,x:l/6,y:Math.max(0,Math.min(1,d))}}function tn(s){let e=s.value.pipe(H()),t=e.pipe(f(Sr)),n=0,a,o=V(0),i=!1,l=o.asReadonly.pipe(f(wa),it({bufferSize:1,refCount:!0}));U(e,m=>{n=m,i||o.set(m),a&&je(a)!==a&&(a.value=Ve(m))});let p=m=>c=>{if(c.button!==0)return;let h=c.currentTarget;h.setPointerCapture(c.pointerId);let u=g=>{let y=h.getBoundingClientRect();s.onChange(m((g.clientX-y.left)/y.width,(g.clientY-y.top)/y.height))},b=()=>{h.removeEventListener("pointermove",u),h.removeEventListener("pointerup",b),h.removeEventListener("pointercancel",b)};h.addEventListener("pointermove",u),h.addEventListener("pointerup",b),h.addEventListener("pointercancel",b),u(c)},d=m=>{let c=m<.03?0:m>.97?255:qe(m*255);return He(c,c,c)};return x("div",{class:be.picker,children:[r("div",{class:be.field,"aria-hidden":"true",onPointerDown:p(Cr),children:r("span",{class:be.marker,hidden:t.pipe(f(m=>m.greys)),style:{left:t.pipe(f(m=>`${m.x*100}%`)),top:t.pipe(f(m=>`${m.y*100}%`))}})}),r("div",{class:be.greys,"aria-hidden":"true",onPointerDown:p(m=>d(m)),children:r("span",{class:be.marker,hidden:t.pipe(f(m=>!m.greys)),style:{left:t.pipe(f(m=>`${m.x*100}%`)),top:"50%"}})}),r("div",{class:be.palette,role:"listbox","aria-label":"Palette",children:ka.map(m=>r("button",{type:"button",role:"option",class:be.swatch,style:{background:Te(m)},"aria-label":Ve(m),"aria-selected":e.pipe(f(c=>c===m)),onClick:()=>s.onChange(m)}))}),r("div",{class:be.palette,role:"listbox","aria-label":"Weights",children:[0,1,2,3,4,5,6,7].map(m=>{let c=l.pipe(f(h=>h[m]));return r("button",{type:"button",role:"option",class:be.swatch,style:{background:c.pipe(f(Te))},"aria-label":c.pipe(f(Ve)),"aria-selected":B([c,e]).pipe(f(([h,u])=>h===u)),onClick:()=>{i=!0,s.onChange(wa(o.value)[m]),i=!1}})})}),x("div",{class:be.custom,children:[r("span",{class:be.preview,style:{background:e.pipe(f(Te))}}),r("input",{ref:m=>{a=m,m.value=Ve(n)},type:"text",class:be.text,"aria-label":"Color",placeholder:"r, g, b \xB7 #hex \xB7 rgb() \xB7 name","data-tip":"r, g, b; hex, rgb(), hsl() or a name",spellcheck:!1,onInput:m=>{let c=wr(m.currentTarget.value);c!==void 0&&s.onChange(c)},onKeyDown:m=>{m.key==="Enter"&&(m.currentTarget.value=Ve(n))},onBlur:m=>{m.currentTarget.value=Ve(n)}})]})]})}var O={afterSelect:"msp-params-params-form-afterSelect",channels:"msp-params-params-form-channels",chevron:"msp-params-params-form-chevron",collapsible:"msp-params-params-form-collapsible",collapsibleBar:"msp-params-params-form-collapsibleBar",collapsibleHeader:"msp-params-params-form-collapsibleHeader",collapsibleMeta:"msp-params-params-form-collapsibleMeta",color:"msp-params-params-form-color",control:"msp-params-params-form-control",count:"msp-params-params-form-count",fields:"msp-params-params-form-fields",file:"msp-params-params-form-file",fileClear:"msp-params-params-form-fileClear",fileNames:"msp-params-params-form-fileNames",filePick:"msp-params-params-form-filePick",form:"msp-params-params-form-form",input:"msp-params-params-form-input",item:"msp-params-params-form-item",itemActions:"msp-params-params-form-itemActions",itemAdd:"msp-params-params-form-itemAdd",itemForm:"msp-params-params-form-itemForm",itemLabel:"msp-params-params-form-itemLabel",itemRow:"msp-params-params-form-itemRow",items:"msp-params-params-form-items",knob:"msp-params-params-form-knob",label:"msp-params-params-form-label",mapped:"msp-params-params-form-mapped",nested:"msp-params-params-form-nested",number:"msp-params-params-form-number",presets:"msp-params-params-form-presets",presetsList:"msp-params-params-form-presetsList",range:"msp-params-params-form-range",row:"msp-params-params-form-row",select:"msp-params-params-form-select",settings:"msp-params-params-form-settings",slider:"msp-params-params-form-slider",subSettings:"msp-params-params-form-subSettings",swatch:"msp-params-params-form-swatch",switch:"msp-params-params-form-switch",textarea:"msp-params-params-form-textarea",unsupported:"msp-params-params-form-unsupported"};N("components/params/params-form.module.css",`@layer msp.components {
.msp-params-params-form-form {
  gap: var(--msp-space-1);
  display: grid;
}

.msp-params-params-form-row {
  grid-template-columns: var(--msp-label-width) minmax(0, 1fr);
  align-items: center;
  gap: var(--msp-space-3);
  min-height: 24px;
  display: grid;

  &[hidden] {
    display: none;
  }
}

.msp-params-params-form-label {
  align-items: center;
  gap: var(--msp-space-1);
  min-width: 0;
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  white-space: nowrap;
  display: flex;
  overflow: hidden;
}

.msp-params-params-form-control {
  align-items: center;
  min-width: 0;
  display: flex;
}

.msp-params-params-form-input, .msp-params-params-form-number, .msp-params-params-form-textarea {
  width: 100%;
  height: 24px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  box-shadow: inset 0 0 0 1px var(--msp-field-edge);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  border: 0;

  &:hover {
    background: var(--msp-color-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }

  &::placeholder {
    color: var(--msp-color-text-subtle);
  }
}

.msp-params-params-form-textarea {
  height: auto;
  min-height: 56px;
  padding: var(--msp-space-2) var(--msp-space-3);
  resize: vertical;
  font-family: inherit;
  line-height: 1.45;
}

.msp-params-params-form-row:has(.msp-params-params-form-textarea) {
  align-items: start;

  & .msp-params-params-form-label {
    padding-top: var(--msp-space-2);
  }
}

.msp-params-params-form-select {
  width: 100%;
}

.msp-params-params-form-slider {
  align-items: center;
  gap: var(--msp-space-2);
  grid-template-columns: minmax(0, 1fr) 52px;
  width: 100%;
  display: grid;
}

.msp-params-params-form-range {
  --msp-range-fill: color-mix(in oklab, var(--msp-color-text-muted), transparent 45%);
  width: calc(100% - var(--msp-space-3));
  height: 16px;
  margin: 0 0 0 var(--msp-space-3);
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  background: none;

  &::-webkit-slider-runnable-track {
    background: linear-gradient(to right,
      var(--msp-range-fill) var(--msp-progress, 0%),
      var(--msp-color-pressed) var(--msp-progress, 0%));
    border-radius: 1.5px;
    height: 3px;
  }

  &::-webkit-slider-thumb {
    background: var(--msp-color-text-muted);
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 10px;
    transition: transform var(--msp-motion-fast) var(--msp-ease);
    border-radius: 50%;
    margin-top: -3.5px;
  }

  &:hover::-webkit-slider-thumb, &:active::-webkit-slider-thumb {
    transform: scale(1.25);
  }

  &::-moz-range-track {
    background: var(--msp-color-pressed);
    border-radius: 1.5px;
    height: 3px;
  }

  &::-moz-range-progress {
    background: var(--msp-range-fill);
    border-radius: 1.5px;
    height: 3px;
  }

  &::-moz-range-thumb {
    background: var(--msp-color-text-muted);
    border: 0;
    border-radius: 50%;
    width: 10px;
    height: 10px;
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: 2px;
    border-radius: var(--msp-radius-sm);
  }
}

.msp-params-params-form-number {
  padding: 0 var(--msp-space-2);
  font-variant-numeric: tabular-nums;
  text-align: right;
}

.msp-params-params-form-switch {
  width: 24px;
  height: 14px;
  margin-left: var(--msp-space-3);
  background: var(--msp-color-pressed);
  box-shadow: inset 0 0 0 1px var(--msp-field-edge);
  border-radius: 7px;
  flex: none;
  position: relative;

  &[aria-checked="true"] {
    background: var(--msp-color-text-muted);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: 2px;
  }
}

.msp-params-params-form-knob {
  background: var(--msp-color-bg);
  width: 10px;
  height: 10px;
  transition: transform var(--msp-motion-fast) var(--msp-ease);
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  box-shadow: 0 1px 1px #0000001f;

  [aria-checked="true"] > & {
    transform: translateX(10px);
  }
}

.msp-params-params-form-color {
  align-items: center;
  gap: var(--msp-space-3);
  width: 100%;
  min-width: 0;
  height: 24px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  box-shadow: inset 0 0 0 1px var(--msp-field-edge);
  display: flex;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
  }
}

.msp-params-params-form-swatch {
  border-radius: var(--msp-radius-sm);
  width: 12px;
  height: 12px;
  box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-text), transparent 88%);
  flex: none;
}

.msp-params-params-form-channels {
  min-width: 0;
  color: var(--msp-color-text);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  font-size: var(--msp-font-size-sm);
  font-variant-numeric: tabular-nums;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-params-params-form-unsupported {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-params-params-form-mapped, .msp-params-params-form-fields, .msp-params-params-form-nested {
  gap: var(--msp-space-1);
  display: grid;
}

.msp-params-params-form-nested :is(.msp-params-params-form-label, .msp-params-params-form-collapsibleHeader) {
  padding-left: var(--msp-space-3);
}

.msp-params-params-form-nested .msp-params-params-form-nested :is(.msp-params-params-form-label, .msp-params-params-form-collapsibleHeader) {
  padding-left: calc(2 * var(--msp-space-3));
}

.msp-params-params-form-nested .msp-params-params-form-nested .msp-params-params-form-nested :is(.msp-params-params-form-label, .msp-params-params-form-collapsibleHeader) {
  padding-left: calc(3 * var(--msp-space-3));
}

.msp-params-params-form-collapsible {
  display: grid;
}

.msp-params-params-form-collapsibleBar {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  display: flex;
}

.msp-params-params-form-collapsibleHeader {
  align-items: center;
  gap: var(--msp-space-1);
  min-width: 0;
  height: 24px;
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  flex: auto;
  display: flex;

  &:hover {
    color: var(--msp-color-text);
  }
}

.msp-params-params-form-chevron {
  color: var(--msp-color-text-subtle);
  transition: transform var(--msp-motion-fast) var(--msp-ease);
  flex: none;

  [aria-expanded="true"] > & {
    transform: rotate(90deg);
  }
}

.msp-params-params-form-collapsibleMeta {
  min-width: 0;
  margin-left: var(--msp-space-1);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  white-space: nowrap;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-params-params-form-presets {
  align-items: center;
  gap: var(--msp-space-1);
  height: 20px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  flex: none;
  display: flex;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }
}

.msp-params-params-form-presetsList {
  margin: var(--msp-space-1) 0;
  display: block;

  & > * {
    animation: none;
  }
}

.msp-params-params-form-settings {
  border-radius: var(--msp-radius-md);
  width: 24px;
  height: 24px;
  color: var(--msp-color-text-muted);
  place-items: center;
  margin-left: auto;
  display: grid;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-params-params-form-afterSelect {
  margin-left: var(--msp-space-1);
  flex: none;
}

.msp-params-params-form-subSettings {
  margin: var(--msp-space-1) calc(-1 * var(--msp-space-2)) var(--msp-space-1);
  padding: var(--msp-space-1) var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);

  & .msp-params-params-form-label {
    padding-left: var(--msp-space-3);
  }
}

.msp-params-params-form-file {
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  width: 100%;
  min-width: 0;
  height: 24px;
  box-shadow: inset 0 0 0 1px var(--msp-field-edge);
  align-items: center;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  &[data-dragging] {
    background: var(--msp-color-hover);
    outline: 1.5px dashed var(--msp-color-border-strong);
    outline-offset: -1.5px;
  }
}

.msp-params-params-form-filePick {
  align-items: center;
  gap: var(--msp-space-3);
  min-width: 0;
  height: 100%;
  padding: 0 var(--msp-inset);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  flex: 1;
  display: flex;

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
    border-radius: var(--msp-radius-md);
  }
}

.msp-params-params-form-fileNames {
  min-width: 0;
  color: var(--msp-color-text);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;

  &[data-empty] {
    color: var(--msp-color-text-muted);
  }
}

.msp-params-params-form-fileClear {
  width: 20px;
  height: 20px;
  margin-right: var(--msp-space-1);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-muted);
  flex: none;
  place-items: center;
  display: grid;

  &:hover {
    background: var(--msp-color-pressed);
    color: var(--msp-color-text);
  }
}

.msp-params-params-form-count {
  padding-left: var(--msp-space-3);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-sm);
  flex: 1;
}

.msp-params-params-form-items {
  margin: var(--msp-space-1) calc(-1 * var(--msp-space-2)) var(--msp-space-1);
  padding: var(--msp-space-1) var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  display: grid;
}

.msp-params-params-form-item {
  display: grid;
}

.msp-params-params-form-itemRow {
  cursor: pointer;
  align-items: center;
  gap: var(--msp-space-1);
  height: 26px;
  margin: 0 calc(-1 * var(--msp-space-1));
  padding: 0 var(--msp-space-1) 0 calc(var(--msp-space-1) + var(--msp-space-3));
  border-radius: var(--msp-radius-sm);
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  & .msp-params-params-form-settings {
    opacity: 0;
    width: 22px;
    height: 22px;
  }

  &:hover .msp-params-params-form-settings, & .msp-params-params-form-settings:focus-visible, [data-open] > & .msp-params-params-form-settings {
    opacity: 1;
  }
}

.msp-params-params-form-itemLabel {
  min-width: 0;
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-params-params-form-itemForm {
  padding: var(--msp-space-1) 0 var(--msp-space-2);

  & .msp-params-params-form-label {
    padding-left: calc(2 * var(--msp-space-3));
  }
}

.msp-params-params-form-itemActions {
  justify-content: space-between;
  align-items: center;
  gap: var(--msp-space-2);
  display: flex;
}

.msp-params-params-form-itemAdd {
  align-items: center;
  gap: var(--msp-space-2);
  height: 26px;
  margin: 0 calc(-1 * var(--msp-space-1));
  padding: 0 var(--msp-space-1) 0 calc(var(--msp-space-1) + var(--msp-space-3));
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}
}
`);var _={check:"msp-params-extra-controls-check",chevron:"msp-params-extra-controls-chevron",curve:"msp-params-extra-controls-curve",field:"msp-params-extra-controls-field",fieldContent:"msp-params-extra-controls-fieldContent",graph:"msp-params-extra-controls-graph",graphArea:"msp-params-extra-controls-graphArea",graphAt:"msp-params-extra-controls-graphAt",graphEditor:"msp-params-extra-controls-graphEditor",graphFoot:"msp-params-extra-controls-graphFoot",graphHint:"msp-params-extra-controls-graphHint",grid:"msp-params-extra-controls-grid",interval:"msp-params-extra-controls-interval",intervalRange:"msp-params-extra-controls-intervalRange",intervalTrack:"msp-params-extra-controls-intervalTrack",intervalValue:"msp-params-extra-controls-intervalValue",matrix:"msp-params-extra-controls-matrix",option:"msp-params-extra-controls-option",options:"msp-params-extra-controls-options",optionsContent:"msp-params-extra-controls-optionsContent",point:"msp-params-extra-controls-point",spark:"msp-params-extra-controls-spark",strip:"msp-params-extra-controls-strip",stripName:"msp-params-extra-controls-stripName",under:"msp-params-extra-controls-under",vec:"msp-params-extra-controls-vec"};N("components/params/extra-controls.module.css",`@layer msp.components {
.msp-params-extra-controls-field {
  align-items: center;
  gap: var(--msp-space-2);
  width: 100%;
  min-width: 0;
  height: 24px;
  padding: 0 var(--msp-space-2) 0 var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  box-shadow: inset 0 0 0 1px var(--msp-field-edge);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  display: flex;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }
}

.msp-params-extra-controls-fieldContent {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  display: flex;
  overflow: hidden;
}

.msp-params-extra-controls-chevron {
  color: var(--msp-color-text-muted);
  transition: transform var(--msp-motion-fast) var(--msp-ease);
  flex: none;

  [aria-expanded="true"] > & {
    transform: rotate(180deg);
  }
}

.msp-params-extra-controls-under {
  margin: var(--msp-space-1) 0 var(--msp-space-1);
  padding: var(--msp-space-1);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
}

.msp-params-extra-controls-options {
  max-height: 240px;
}

.msp-params-extra-controls-optionsContent {
  display: grid;
}

.msp-params-extra-controls-option {
  align-items: center;
  gap: var(--msp-space-2);
  min-height: 26px;
  padding: 0 var(--msp-space-2) 0 var(--msp-space-3);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  display: flex;

  & > span:first-child:not(.msp-params-extra-controls-strip) {
    flex: 1;
  }

  &:hover, &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
    outline: none;
  }

  &[aria-selected="true"] {
    color: var(--msp-color-accent);
    font-weight: 600;
  }
}

.msp-params-extra-controls-check {
  visibility: hidden;
  flex: none;
  margin-left: auto;

  [aria-selected="true"] > & {
    visibility: visible;
  }
}

.msp-params-extra-controls-vec {
  gap: var(--msp-space-1);
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: 100%;
  display: grid;
}

.msp-params-extra-controls-matrix {
  gap: var(--msp-space-1);
  padding: var(--msp-space-1);
  grid-template-columns: repeat(4, minmax(0, 1fr));
  display: grid;
}

.msp-params-extra-controls-interval {
  align-items: center;
  gap: var(--msp-space-2);
  grid-template-columns: minmax(0, 1fr) 72px;
  width: 100%;
  display: grid;
}

.msp-params-extra-controls-intervalTrack {
  height: 16px;
  margin-left: var(--msp-space-3);
  position: relative;

  &:before {
    content: "";
    background: linear-gradient(90deg,
      var(--msp-color-pressed) var(--msp-from),
      color-mix(in oklab, var(--msp-color-text-muted), transparent 45%) var(--msp-from) var(--msp-to),
      var(--msp-color-pressed) var(--msp-to));
    border-radius: 1.5px;
    height: 3px;
    margin-top: -1.5px;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
  }
}

.msp-params-extra-controls-intervalRange {
  -webkit-appearance: none;
  appearance: none;
  pointer-events: none;
  background: none;
  width: 100%;
  margin: 0;
  position: absolute;
  inset: 0;

  &::-webkit-slider-runnable-track {
    background: none;
    height: 3px;
  }

  &::-webkit-slider-thumb {
    background: var(--msp-color-text-muted);
    -webkit-appearance: none;
    appearance: none;
    pointer-events: auto;
    cursor: pointer;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin-top: -3.5px;
  }

  &::-moz-range-track {
    background: none;
  }

  &::-moz-range-thumb {
    background: var(--msp-color-text-muted);
    pointer-events: auto;
    cursor: pointer;
    border: 0;
    border-radius: 50%;
    width: 10px;
    height: 10px;
  }

  &:focus-visible {
    outline: none;
  }
}

.msp-params-extra-controls-intervalValue {
  height: 24px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  font-variant-numeric: tabular-nums;
  text-align: right;
  line-height: 24px;
}

.msp-params-extra-controls-strip {
  width: 56px;
  height: 10px;
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  border-radius: 2px;
  flex: none;
}

.msp-params-extra-controls-stripName {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-params-extra-controls-spark {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.2px;
  vector-effect: non-scaling-stroke;
  flex: none;
  width: 56px;
  height: 14px;
}

.msp-params-extra-controls-graphEditor {
  gap: var(--msp-space-1);
  padding: var(--msp-space-1);
  display: grid;
}

.msp-params-extra-controls-graph {
  border-radius: var(--msp-radius-sm);
  background: var(--msp-color-panel);
  cursor: crosshair;
  touch-action: none;
  width: 100%;
  height: 96px;
  display: block;
}

.msp-params-extra-controls-grid {
  stroke: var(--msp-glass-edge);
  stroke-width: 1px;
  vector-effect: non-scaling-stroke;
}

.msp-params-extra-controls-curve {
  fill: none;
  stroke: var(--msp-color-text-muted);
  stroke-width: 1.5px;
  vector-effect: non-scaling-stroke;
}

.msp-params-extra-controls-point {
  fill: var(--msp-color-panel);
  stroke: var(--msp-color-text);
  stroke-width: 1.5px;
  vector-effect: non-scaling-stroke;
  cursor: grab;

  &:hover {
    fill: var(--msp-color-accent);
  }
}

.msp-params-extra-controls-graphArea {
  position: relative;
}

.msp-params-extra-controls-graphAt {
  top: var(--msp-space-1);
  right: var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  pointer-events: none;
  position: absolute;
}

.msp-params-extra-controls-graphFoot {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  display: flex;

  & > .msp-params-extra-controls-graphHint {
    flex: auto;
    min-width: 0;
  }
}

.msp-params-extra-controls-graphHint {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  margin: 0;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}
}
`);function ft(s){let{open:e}=s;return x("button",{type:"button",class:O.presets,ref:t=>Ca.set(e,t),"aria-label":`${s.label} presets`,"aria-haspopup":"listbox","aria-expanded":e,onClick:t=>{t.stopPropagation(),e.set(!e.value)},children:[r(L,{name:"swatch-book",size:12}),"Presets"]})}var Ca=new WeakMap;function Je(s){let{open:e}=s;return r(P,{when:e,children:()=>{let t=s.presets(),n=r(ht,{options:t.map(([,o],i)=>[String(i),o]),value:s.current.pipe(f(o=>o===void 0?void 0:String(o))),onPick:o=>{e.set(!1);let i=t[Number(o)];i&&s.onPick(i[0])},onClose:()=>e.set(!1),floating:!0}),a=s.anchor?.()??Ca.get(e);return a?r(Ze,{anchor:a,children:n}):r("div",{class:O.presetsList,children:n})}})}var Ma=(s,e)=>JSON.stringify(s)===JSON.stringify(e);function vt(s,e,t=!1){let n=s.findIndex(([a])=>t&&a&&typeof a=="object"&&e&&typeof e=="object"?Object.entries(a).every(([o,i])=>Ma(e[o],i)):Ma(a,e));return n<0?void 0:n}function ds(s){let e=V(!1);return x(se,{children:[x("div",{class:O.row,children:[r("span",{class:O.label,children:s.head}),r("div",{class:O.control,children:s.field(e)})]}),r(P,{when:e,reveal:!0,children:()=>r("div",{class:_.under,children:s.body(()=>e.set(!1))})})]})}function ms(s){return x("button",{type:"button",class:_.field,"aria-expanded":s.open,"aria-label":s.label,onClick:()=>s.open.set(!s.open.value),children:[r("span",{class:_.fieldContent,children:s.children}),r(L,{name:"chevron-down",size:14,class:_.chevron})]})}function Sa(s){let{param:e,binding:t}=s,n=t.value.pipe(f(a=>{let o=e.options.filter(([i])=>a?.includes(i)).map(([,i])=>i);return o.length?o.join(", "):e.emptyValue??"None"}));return r(ds,{head:s.head,field:a=>r(ms,{open:a,label:s.label,children:n}),body:()=>r(ie,{class:_.options,contentClass:_.optionsContent,role:"listbox","aria-multiselectable":"true","aria-label":s.label,children:e.options.map(([a,o])=>x("button",{type:"button",role:"option",class:_.option,"aria-selected":t.value.pipe(f(i=>!!i?.includes(a)),H()),onClick:()=>{let i=t.get()??[];t.set(i.includes(a)?i.filter(l=>l!==a):[...i,a])},children:[r("span",{children:o}),r(L,{name:"check",size:14,class:_.check})]}))})})}function Ea(s){let{binding:e}=s;return r("div",{class:_.vec,children:["x","y","z"].map((t,n)=>r("input",{class:O.number,"aria-label":s.label?`${s.label} ${t}`:t,"data-tip":t,value:e.value.pipe(f(a=>Ta(a?.[n]))),onChange:a=>{let o=Number(a.currentTarget.value);if(!Number.isFinite(o))return;let i=[...e.get()??[0,0,0]];i[n]=o,e.set(i)}}))})}function Ta(s){return s===void 0||!Number.isFinite(s)?"":String(Math.round(s*1e4)/1e4)}function La(s){let{binding:e}=s,t=n=>{for(let a=0;a<16;a++)if(n[a]!==(a%5===0?1:0))return!1;return!0};return r(ds,{head:s.head,field:n=>r(ms,{open:n,label:s.label,children:e.value.pipe(f(a=>a&&t(a)?"Identity":"4 \xD7 4 matrix"))}),body:()=>r("div",{class:_.matrix,children:Array.from({length:16},(n,a)=>{let o=a%4*4+Math.floor(a/4);return r("input",{class:O.number,"aria-label":`${s.label}, row ${Math.floor(a/4)+1}, column ${a%4+1}`,value:e.value.pipe(f(i=>Ta(i?.[o]))),onChange:i=>{let l=Number(i.currentTarget.value);if(!Number.isFinite(l))return;let p=Array.from(e.get());p[o]=l,e.set(p)}})})})})}function Pa(s){let{param:e,binding:t}=s,n=e.min??0,a=e.max??1,o=e.step??(a-n)/100,i=d=>`${100*(d-n)/(a-n||1)}%`,l=o<1?Math.min(4,Math.ceil(-Math.log10(o))):0,p=d=>r("input",{class:_.intervalRange,type:"range",min:String(n),max:String(a),step:String(o),"aria-label":`${s.label?`${s.label} `:""}${d===0?"from":"to"}`,value:t.value.pipe(f(m=>String(m?.[d]??(d?a:n)))),onInput:m=>{let c=Number(m.currentTarget.value),h=[...t.get()??[n,a]];h[d]=d===0?Math.min(c,h[1]):Math.max(c,h[0]),t.set(h),m.currentTarget.value=String(h[d])}});return x("div",{class:_.interval,children:[x("div",{class:_.intervalTrack,style:{"--msp-from":t.value.pipe(f(d=>i(d?.[0]??n))),"--msp-to":t.value.pipe(f(d=>i(d?.[1]??a)))},children:[p(0),p(1)]}),r("span",{class:_.intervalValue,children:t.value.pipe(f(d=>`${(d?.[0]??n).toFixed(l)}\u2013${(d?.[1]??a).toFixed(l)}`))})]})}function ps(s){let e=s?.colors??[];if(!e.length)return"none";let t=e.map((n,a)=>Array.isArray(n)?{color:Te(n[0]),at:n[1]}:{color:Te(n),at:e.length===1?0:a/(e.length-1)});if(s?.kind==="set"){let n=t.length;return`linear-gradient(90deg, ${t.map((a,o)=>`${a.color} ${100*o/n}% ${100*(o+1)/n}%`).join(", ")})`}return`linear-gradient(90deg, ${t.map(n=>`${n.color} ${100*n.at}%`).join(", ")})`}var Er=Object.entries(Bn);function za(s){let{param:e,binding:t}=s,n=e.presetKind??"all",a=Er.filter(([,i])=>n==="all"?!0:n==="set"?i.type==="qualitative":i.type!=="qualitative"),o=i=>a.find(([,l])=>JSON.stringify(l.list)===JSON.stringify(i?.colors))?.[1].label??"Custom";return r(ds,{head:s.head,field:i=>x(ms,{open:i,label:s.label,children:[r("span",{class:_.strip,style:{background:t.value.pipe(f(ps))}}),r("span",{class:_.stripName,children:t.value.pipe(f(o))})]}),body:i=>r(ie,{class:_.options,contentClass:_.optionsContent,role:"listbox","aria-label":s.label,children:a.map(([,l])=>{let p={kind:l.type==="qualitative"?"set":"interpolate",colors:l.list};return x("button",{type:"button",role:"option",class:_.option,"aria-selected":t.value.pipe(f(d=>o(d)===l.label)),onClick:()=>{t.set({kind:p.kind,colors:[...p.colors]}),i()},children:[r("span",{class:_.strip,style:{background:ps(p)}}),r("span",{class:_.stripName,children:l.label}),r(L,{name:"check",size:14,class:_.check})]})})})})}function Aa(s){let{binding:e}=s;return r("input",{class:O.input,"aria-labelledby":s.labelId,placeholder:"https://\u2026",value:e.value.pipe(f(t=>t?.url??"")),onChange:t=>e.set(Tt.Url(t.currentTarget.value))})}function Fa(s){let{binding:e}=s,t=(n,a,o)=>(n??[]).map(([i,l],p)=>`${p?"L":"M"}${(i*a).toFixed(1)} ${((1-l)*o).toFixed(1)}`).join(" ");return r(ds,{head:s.head,field:n=>x(ms,{open:n,label:s.label,children:[r("svg",{class:_.spark,viewBox:"0 0 56 14",preserveAspectRatio:"none","aria-hidden":"true",children:r("path",{d:e.value.pipe(f(a=>t(a,56,14)))})}),r("span",{class:_.stripName,children:e.value.pipe(f(a=>`${a?.length??0} points`))})]}),body:()=>r(Tr,{param:s.param,binding:e,pathOf:t})})}function Tr(s){let{binding:e}=s,t=240,n=96,a=V(""),o=e.value,i=s.param.getPresets,l=V(!1),p=x("svg",{class:_.graph,viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:"none",children:[[.25,.5,.75].map(g=>r("line",{class:_.grid,x1:String(g*t),x2:String(g*t),y1:"0",y2:String(n)})),[.25,.5,.75].map(g=>r("line",{class:_.grid,y1:String(g*n),y2:String(g*n),x1:"0",x2:String(t)})),r("path",{class:_.curve,d:e.value.pipe(f(g=>s.pathOf(g,t,n)))}),r(Y,{each:o.pipe(f(g=>(g??[]).map((y,w)=>w))),children:g=>r("circle",{class:_.point,r:"4",cx:o.pipe(f(y=>String((y?.[g]?.[0]??0)*t))),cy:o.pipe(f(y=>String((1-(y?.[g]?.[1]??0))*n))),"data-index":String(g)})})]}),d=g=>{let y=p.getBoundingClientRect(),w=Math.min(1,Math.max(0,(g.clientX-y.left)/y.width)),S=Math.min(1,Math.max(0,1-(g.clientY-y.top)/y.height));return[Math.round(w*1e3)/1e3,Math.round(S*1e3)/1e3]},m=-1,c=g=>{let y=g.target,w=[...e.get()??[]];if(y.tagName==="circle"){m=Number(y.dataset.index),p.setPointerCapture(g.pointerId);return}let S=d(g),T=w.findIndex(([C])=>C>S[0]);w.splice(T<0?w.length:T,0,S),e.set(w)},h=g=>{let y=d(g);if(a.set(`${y[0].toFixed(2)}, ${y[1].toFixed(2)}`),m<0)return;let w=[...e.get()??[]],S=m>0?w[m-1][0]:0,T=m<w.length-1?w[m+1][0]:1;w[m]=[Math.min(T,Math.max(S,y[0])),y[1]],e.set(w)},u=()=>{m=-1},b=g=>{let y=g.target;if(y.tagName!=="circle")return;let w=Number(y.dataset.index),S=[...e.get()??[]];S.length<=2||(S.splice(w,1),e.set(S))};return p.addEventListener("pointerdown",c),p.addEventListener("pointermove",h),p.addEventListener("pointerup",u),p.addEventListener("pointercancel",u),p.addEventListener("dblclick",b),p.addEventListener("pointerleave",()=>a.set("")),q(()=>{m=-1}),x("div",{class:_.graphEditor,children:[x("div",{class:_.graphArea,children:[p,r("span",{class:_.graphAt,children:a.asReadonly})]}),x("div",{class:_.graphFoot,children:[r("p",{class:_.graphHint,children:"Drag a point \xB7 click to add \xB7 double-click to remove"}),i?r(ft,{open:l,label:"Curve"}):null]}),i?r(Je,{open:l,presets:i,current:e.value.pipe(f(g=>vt(i(),g))),onPick:g=>e.set(g)}):null]})}var ye={bar:"msp-params-help-bar",description:"msp-params-help-description",ends:"msp-params-help-ends",entry:"msp-params-help-entry",help:"msp-params-help-help",name:"msp-params-help-name",scale:"msp-params-help-scale",swatch:"msp-params-help-swatch",table:"msp-params-help-table",text:"msp-params-help-text",toggle:"msp-params-help-toggle"};N("components/params/help.module.css",`@layer msp.components {
.msp-params-help-text {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;

  &[data-help] {
    text-decoration: underline dotted color-mix(in oklab, currentColor, transparent 45%);
    text-underline-offset: 3px;
    cursor: help;
    text-decoration-thickness: 1px;
  }
}

.msp-params-help-toggle {
  width: 16px;
  height: 16px;
  color: var(--msp-color-text-subtle);
  opacity: 0;
  border-radius: 50%;
  flex: none;
  place-items: center;
  display: grid;
  position: relative;

  &:after {
    content: "";
    width: max(24px, var(--msp-touch-target, 0px));
    height: max(24px, var(--msp-touch-target, 0px));
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  :hover > * > &, :hover > &, &[aria-expanded="true"], &:focus-visible {
    opacity: 1;
  }

  &:hover, &[aria-expanded="true"] {
    color: var(--msp-color-text);
  }
}

.msp-params-help-help {
  gap: var(--msp-space-2);
  margin: var(--msp-space-1) 0 var(--msp-space-1);
  padding: var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  font-size: var(--msp-font-size-xs);
  display: grid;
}

.msp-params-help-description {
  color: var(--msp-color-text-muted);
  margin: 0;
  line-height: 1.45;

  & code {
    padding: 0 var(--msp-space-1);
    background: var(--msp-color-control);
    font-family: var(--msp-font-mono);
    border-radius: 2px;
    font-size: .95em;
  }
}

.msp-params-help-table {
  gap: var(--msp-space-1) var(--msp-space-3);
  grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
}

.msp-params-help-entry {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  display: flex;
}

.msp-params-help-swatch {
  width: 12px;
  height: 12px;
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  border-radius: 2px;
  flex: none;
}

.msp-params-help-name {
  min-width: 0;
  color: var(--msp-color-text);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-params-help-scale {
  gap: var(--msp-space-1);
  display: grid;
}

.msp-params-help-bar {
  height: 10px;
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  border-radius: 2px;
}

.msp-params-help-ends {
  color: var(--msp-color-text-muted);
  font-variant-numeric: tabular-nums;
  justify-content: space-between;
  display: flex;
}
}
`);function Ra(s,e){let t=a=>a&&(a.description||a.legend)?a:void 0;if(s.help){let a=s.help;return e.pipe(f(o=>{try{return t(a(o))}catch{return}}),H((o,i)=>o?.description===i?.description&&o?.legend===i?.legend))}let n=t({description:s.description,legend:s.legend});return n?re(n):void 0}function Ia(s,e,t){if(!e)return{head:r("span",{class:ye.text,id:t,"data-tip-overflow":"",children:s}),block:null};let n=V(!1),a=e.pipe(f(i=>!!i));return{head:x(se,{children:[r("span",{class:ye.text,id:t,"data-tip-overflow":"","data-help":a.pipe(f(i=>i?"":void 0)),onClick:i=>{i.currentTarget.hasAttribute("data-help")&&(i.stopPropagation(),n.set(!n.value))},children:s}),r(P,{when:a,children:()=>r("button",{type:"button",class:ye.toggle,"aria-label":`About ${s}`,title:`About ${s}`,"aria-expanded":n,onClick:i=>{i.stopPropagation(),n.set(!n.value)},children:r(L,{name:"circle-help",size:12})})})]}),block:r(Lr,{help:e,open:n})}}function Lr(s){return r(P,{when:s.open,reveal:!0,children:()=>r(P,{when:s.help,children:e=>x("div",{class:ye.help,children:[e.description?r("p",{class:ye.description,children:Pr(e.description)}):null,e.legend?r(zr,{legend:e.legend}):null]})})})}function Pr(s){return s.split(/(`[^`]+`)/).map(e=>e.startsWith("`")&&e.endsWith("`")&&e.length>1?r("code",{children:e.slice(1,-1)}):e)}function zr(s){let{legend:e}=s;return e.kind==="table-legend"?r("ul",{class:ye.table,children:e.table.map(([t,n])=>x("li",{class:ye.entry,children:[r("span",{class:ye.swatch,style:{background:Te(n)}}),r("span",{class:ye.name,children:t})]}))}):x("div",{class:ye.scale,children:[r("span",{class:ye.bar,style:{background:ps({kind:"interpolate",colors:e.colors})}}),x("span",{class:ye.ends,children:[r("span",{children:e.minLabel}),r("span",{children:e.maxLabel})]})]})}function us(s){let{form:e}=s;return r("div",{class:O.form,children:r(Da,{params:e.params,field:t=>({value:e.field(t),get:()=>e.values.value[t],set:n=>e.set(t,n)}),visible:t=>e.params[t].hideIf?e.visible(t):void 0,filter:Ar(s.filter),place:{form:e,path:""}})})}function Ft(s){return Object.keys(s).some(e=>!s[e].isHidden&&s[e].type!=="value")}function Da(s){let{params:e,filter:t,place:n}=s,{essentials:a,advanced:o}=ga(e),i=sn(t),l=new Map,p=u=>(l.has(u)||l.set(u,s.visible(u)),l.get(u)),d=u=>{let b=p(u);return t?B([b??re(!0),t]).pipe(f(([g,y])=>g&&gt(u,e[u],y))):b},m=u=>{let b=u.map(d);if(!b.every(g=>!g))return B(b.map(g=>g??re(!0))).pipe(f(g=>!g.some(Boolean)),H())},c=u=>r(fs,{name:u,param:e[u],binding:s.field(u),visible:p(u),filter:t,place:{form:n.form,path:`${n.path}/${u}`}}),h=(u,b)=>u.flatMap(g=>g.category?[r("div",{hidden:m(g.names),children:r(At,{title:g.category,state:n.form.fold(`${n.path}#${b}${g.category}`),force:i,children:()=>g.names.map(c)})})]:g.names.map(c));return!a.length||!o.length?r(se,{children:h(a.length?a:o,"")}):x(se,{children:[h(a,""),r("div",{hidden:m(o.flatMap(u=>u.names)),children:r(At,{title:"Advanced",state:n.form.fold(`${n.path}#advanced`),force:i,children:()=>h(o,"advanced/")})})]})}function Ar(s){return s?.pipe(f(e=>e.trim().toLowerCase()),H())}function sn(s){return s?.pipe(f(e=>e.length>0),H())}function $a(s,e){return e.label||$n(s)}function nn(s,e){let t=e.trim().toLowerCase();return Object.keys(s).some(n=>!s[n].isHidden&&gt(n,s[n],t))}function gt(s,e,t){return!t||$a(s,e).toLowerCase().includes(t)||e.description?.toLowerCase().includes(t)?!0:e.type==="group"?Object.keys(e.params).some(n=>gt(n,e.params[n],t)):e.type==="mapped"?e.select.options.some(([n])=>{let a=e.map(n);return a.type==="group"?Object.keys(a.params).some(o=>gt(o,a.params[o],t)):gt(n,a,t)}):!1}function fs(s){let{name:e,param:t,binding:n,filter:a,place:o}=s,i=$a(e,t),p=(a?B([s.visible??re(!0),a]).pipe(f(([b,g])=>b&&gt(e,t,g))):s.visible)?.pipe(f(b=>!b),H()),d=a?.pipe(f(b=>i.toLowerCase().includes(b)?"":b));if(t.type==="group")return r("div",{hidden:p,children:r(Or,{label:i,param:t,binding:n,filter:d,force:sn(a),place:o})});let m=Ee("msp-field"),{head:c,block:h}=Ia(i,Ra(t,n.value),m),u=b=>x("div",{hidden:p,children:[b,h]});if(t.type==="mapped")return u($r(t)?r(Br,{label:i,labelId:m,head:c,description:t.description,param:t,binding:n,place:o}):r(Nr,{label:i,head:c,param:t,binding:n,filter:d,force:sn(a),place:o}));if(t.type==="select")return u(r(vs,{label:i,head:c,description:t.description,options:t.options,binding:n}));if(t.type==="color")return u(r(Fr,{label:i,labelId:m,head:c,description:t.description,binding:n}));if(t.type==="multi-select")return u(r(Sa,{head:c,label:i,param:t,binding:n}));if(t.type==="mat4")return u(r(La,{head:c,label:i,param:t,binding:n}));if(t.type==="line-graph")return u(r(Fa,{head:c,label:i,param:t,binding:n}));if(t.type==="color-list")return u(r(za,{head:c,label:i,param:t,binding:n}));if(t.type==="object-list")return u(r(Gr,{head:c,label:i,param:t,binding:n}));if(t.type==="conditioned")return u(r(jr,{head:c,label:i,param:t,binding:n,place:o}));if(t.type==="script")return u(r(qr,{head:c,label:i,binding:n}));if(t.type==="converted"){let b={value:n.value.pipe(f(y=>t.fromValue(y))),get:()=>t.fromValue(n.get()),set:y=>n.set(t.toValue(y))},g={...t.converted,label:t.converted.label??i};return r(fs,{name:e,param:g,binding:b,visible:s.visible,filter:a,place:o})}return t.type==="value"?null:u(x("div",{class:O.row,children:[r("span",{class:O.label,children:c}),r("div",{class:O.control,children:Ir(t,n,m,i)})]}))}function Fr(s){let{binding:e,labelId:t}=s,n=V(!1),a=e.value.pipe(f(i=>Te(i))),o=e.value.pipe(f(i=>Ve(i)));return x(se,{children:[x("div",{class:O.row,children:[r("span",{class:O.label,children:s.head??r("span",{id:t,children:s.label})}),r("div",{class:O.control,children:x("button",{type:"button",class:O.color,"aria-labelledby":`${t} ${t}-value`,"aria-expanded":n,onClick:()=>n.set(!n.value),children:[r("span",{class:O.swatch,style:{background:a}}),r("span",{class:O.channels,id:`${t}-value`,"data-tip-overflow":"",children:o})]})})]}),r(P,{when:n,reveal:!0,children:()=>r(tn,{value:e.value,onChange:i=>e.set(i)})})]})}function Rr(s){let{param:e,binding:t,labelId:n}=s,a=e.type==="file-list",o=V(!1),i=d=>{d.length&&t.set(a?d.map(m=>Tt.File(m)):Tt.File(d[0]))},l=r("input",{type:"file",hidden:!0,multiple:a,accept:e.accept,onChange:d=>{i([...d.currentTarget.files??[]]),d.currentTarget.value=""}}),p=t.value.pipe(f(d=>(d?Array.isArray(d)?d:[d]:[]).map(m=>m.name)));return x("div",{class:O.file,"data-dragging":o.asReadonly.pipe(f(d=>d?"":void 0)),children:[r("button",{type:"button",class:O.filePick,"aria-labelledby":n?`${n} ${n}-value`:void 0,onClick:()=>l.click(),onDragOver:d=>{d.preventDefault(),o.set(!0)},onDragLeave:()=>o.set(!1),onDrop:d=>{d.preventDefault(),d.stopPropagation(),o.set(!1),i([...d.dataTransfer?.files??[]])},children:r("span",{class:O.fileNames,id:n?`${n}-value`:void 0,"data-empty":p.pipe(f(d=>d.length?void 0:"")),children:p.pipe(f(d=>d.length===0?a?"Select files\u2026":"Select a file\u2026":d.length===1?d[0]:`${d.length} files \xB7 ${d.join(", ")}`))})}),r(P,{when:p.pipe(f(d=>d.length>0)),children:()=>r("button",{type:"button",class:O.fileClear,"aria-label":"Clear",title:"Clear",onClick:()=>t.set(null),children:r(L,{name:"x",size:13})})}),l]})}function Ir(s,e,t,n){switch(s.type){case"boolean":return r(Ba,{binding:e,labelId:t});case"number":return r(Hr,{param:s,binding:e,labelId:t});case"text":return s.multiline?r("textarea",{class:O.textarea,rows:3,"aria-labelledby":t,value:e.value,placeholder:s.placeholder,onChange:a=>e.set(a.currentTarget.value)}):r("input",{class:O.input,"aria-labelledby":t,value:e.value,placeholder:s.placeholder,onChange:a=>e.set(a.currentTarget.value)});case"file":case"file-list":return r(Rr,{param:s,binding:e,labelId:t});case"vec3":return r(Ea,{param:s,binding:e,label:n});case"interval":return r(Pa,{param:s,binding:e,label:n});case"url":return r(Aa,{binding:e,labelId:t});default:return r("span",{class:O.unsupported,children:s.type})}}function Ba(s){let{binding:e}=s;return r("button",{type:"button",role:"switch",class:O.switch,"aria-labelledby":s.labelId,"aria-checked":e.value.pipe(f(t=>!!t)),onClick:()=>e.set(!e.get()),children:r("span",{class:O.knob})})}function Hr(s){let{param:e,binding:t,labelId:n}=s,a=t.value.pipe(f(o=>Ha(o,e.step)));return e.min===void 0||e.max===void 0?r("input",{class:O.input,type:"text",inputMode:"decimal","aria-labelledby":n,value:a,onChange:o=>{let i=Oa(o.currentTarget.value);Number.isFinite(i)?t.set(i):o.currentTarget.value=Ha(t.get(),e.step)}}):x("div",{class:O.slider,children:[r("input",{class:O.range,type:"range","aria-labelledby":n,min:String(e.min),max:String(e.max),step:String(e.step??(e.max-e.min)/100),value:t.value.pipe(f(String)),style:{"--msp-progress":t.value.pipe(f(o=>`${100*(o-e.min)/(e.max-e.min||1)}%`))},onInput:o=>t.set(Number(o.currentTarget.value))}),r("input",{class:O.number,"aria-labelledby":n,value:a,onChange:o=>{let i=Oa(o.currentTarget.value);Number.isFinite(i)&&t.set(Math.min(e.max,Math.max(e.min,i)))}})]})}function Ha(s,e){if(!Number.isFinite(s))return"";if(e===void 0)return String(Number(s.toFixed(4)));let t=e<1?Math.min(4,Math.ceil(-Math.log10(e))):0;return s.toFixed(t)}function Oa(s){let e=s.trim().replace(",",".");return e===""?Number.NaN:Number(e)}function vs(s){let{options:e,binding:t}=s,n=V(!1),a=t.value.pipe(f(l=>String(e.findIndex(p=>p[0]===l)))),o=e.map(([,l,p],d)=>[String(d),l,p]),i;return x(se,{children:[x("div",{class:O.row,children:[r("span",{class:O.label,children:s.head??s.label}),x("div",{class:O.control,ref:l=>i=l,children:[r(rs,{size:"sm",open:n,"aria-label":s.label,label:a.pipe(f(l=>o[Number(l)]?.[1]??""))}),s.after]})]}),r(P,{when:n,children:()=>{let l=r(ht,{options:o,value:a,onPick:p=>{n.set(!1),t.set(e[Number(p)][0])},onClose:()=>n.set(!1),floating:!0});return i?r(Ze,{anchor:i,children:l}):l}})]})}function Or(s){let{param:e,binding:t,filter:n,place:a}=s;if(!Ft(e.params))return null;let o=e.presets,i=u=>r(hs,{params:u,binding:t,filter:n,place:a}),l=a.form.fold(`${a.path}#open`,!!e.isExpanded),p=u=>t.set({...t.get()??{},...u}),d=o?t.value.pipe(f(u=>vt(o,u,!0)),H()):void 0;if(e.isFlat)return x(se,{children:[o&&d?r(Dr,{label:s.label,presets:o,current:d,onPick:p}):null,i(e.params)]});let m=typeof e.pivot=="string"&&e.params[e.pivot]?e.pivot:void 0;if(m&&(!o||!d)){let{[m]:u,...b}=e.params;return x(se,{children:[i({[m]:u}),Ft(b)?r(At,{title:s.label,state:l,force:s.force,children:()=>i(b)}):null]})}if(!o||!d)return r(At,{title:s.label,state:l,force:s.force,children:()=>i(e.params)});let c=V(!1),h=V(!1);return r(At,{title:s.label,state:l,force:s.force,openWhen:h.asReadonly,meta:d.pipe(f(u=>u===void 0?"":o[u][1])),action:r(ft,{open:c,label:s.label}),below:()=>r(Je,{open:c,presets:()=>o,current:d,onPick:u=>{p(u),h.set(!0)}}),children:()=>i(e.params)})}function Dr(s){let e=V(!1),t;return x(se,{children:[x("div",{class:O.row,children:[r("span",{class:O.label,children:"Presets"}),r("div",{class:O.control,ref:n=>t=n,children:r(rs,{size:"sm",open:e,"aria-label":`${s.label} presets`,label:s.current.pipe(f(n=>n===void 0?"Custom":s.presets[n][1]))})})]}),r(Je,{open:e,presets:()=>s.presets,current:s.current,onPick:s.onPick,anchor:()=>t})]})}function $r(s){let e=s.select.options.map(t=>t[0]).sort();return e.length===2&&e[0]==="off"&&e[1]==="on"}function Br(s){let{param:e,binding:t,place:n}=s,a=t.value.pipe(f(c=>c?.name==="on"),H()),o=n.form.fold(`${n.path}#params`),i=c=>t.set({name:c,params:Na(e.map(c))}),l={value:a,get:()=>t.get()?.name==="on",set:c=>{i(c?"on":"off"),c||o.set(!1)}},p=e.map("on"),d=p.type==="group"&&Ft(p.params),m={value:t.value.pipe(f(c=>c?.params),H()),get:()=>t.get()?.params,set:c=>t.set({name:"on",params:c})};return x(se,{children:[x("div",{class:O.row,children:[r("span",{class:O.label,children:s.head??r("span",{id:s.labelId,children:s.label})}),x("div",{class:O.control,children:[r(Ba,{binding:l,labelId:s.labelId}),d?r(P,{when:a,children:()=>r("button",{type:"button",class:O.settings,title:`${s.label} settings`,"aria-label":`${s.label} settings`,"aria-expanded":o,onClick:()=>o.set(!o.value),children:r(L,{name:"sliders-horizontal",size:14})})}):null]})]}),d?r(P,{when:B([a,o.asReadonly]).pipe(f(([c,h])=>c&&h)),children:()=>r("div",{class:O.subSettings,children:r(hs,{params:p.params,binding:m,place:{form:n.form,path:`${n.path}:on`}})})}):null]})}function Nr(s){let{param:e,binding:t,place:n}=s,a=t.value.pipe(f(c=>c?.name),H()),o={value:a,get:()=>t.get()?.name,set:c=>{let h=e.map(c);t.set({name:c,params:Na(h)})}},i=c=>{if(c===void 0)return!1;let h=e.map(c);return h.type==="group"&&!h.isFlat&&Ft(h.params)},l=a.pipe(f(i),H()),p=n.form.fold(`${n.path}#params`),d=s.force?B([p.asReadonly,s.force]).pipe(f(([c,h])=>c||h)):p.asReadonly,m=r(P,{when:l,children:()=>r("button",{type:"button",class:`${O.settings} ${O.afterSelect}`,title:`${s.label} settings`,"aria-label":`${s.label} settings`,"aria-expanded":d,onClick:()=>p.set(!p.value),children:r(L,{name:"sliders-horizontal",size:14})})});return x("div",{class:O.mapped,children:[r(vs,{label:s.label,head:s.head,options:e.select.options,binding:o,after:m}),r(P,{when:a,children:c=>{let h=e.map(c),u={value:t.value.pipe(f(g=>g?.params),H()),get:()=>t.get()?.params,set:g=>t.set({name:c,params:g})},b={form:n.form,path:`${n.path}:${c}`};return h.type==="group"?h.isFlat?r(hs,{params:h.params,binding:u,filter:s.filter,place:b}):Ft(h.params)?r(P,{when:d,reveal:!0,children:()=>r(hs,{params:h.params,binding:u,filter:s.filter,place:b,nested:!0})}):null:r(fs,{name:c,param:h,binding:u,filter:s.filter,place:b})}})]})}function hs(s){let{params:e,binding:t}=s;return r("div",{class:s.nested?O.nested:O.fields,children:r(Da,{params:e,field:n=>({value:t.value.pipe(f(a=>a?.[n]),H()),get:()=>t.get()?.[n],set:a=>t.set({...t.get(),[n]:a})}),visible:n=>{let a=e[n].hideIf;if(a)return t.value.pipe(f(o=>!a(o??{})),H())},filter:s.filter,place:s.place})})}function jr(s){let{param:e,binding:t,place:n}=s,a=t.value.pipe(f(i=>String(e.conditionForValue(i))),H()),o={value:a,get:()=>String(e.conditionForValue(t.get())),set:i=>t.set(e.conditionedValue(t.get(),i))};return x("div",{class:O.mapped,children:[r(vs,{label:s.label,head:s.head,options:e.select.options,binding:o}),r(P,{when:a,children:i=>r("div",{class:O.nested,children:r(fs,{name:i,param:e.conditionParams[i],binding:t,place:{form:n.form,path:`${n.path}:${i}`}})})})]})}var Vr=[["mol-script","MolScript"],["pymol","PyMOL"],["vmd","VMD"],["jmol","Jmol"]];function qr(s){let{binding:e}=s,t=o=>({value:e.value.pipe(f(i=>i?.[o]??""),H()),get:()=>e.get()?.[o],set:i=>e.set({...e.get(),[o]:i})}),n=t("expression"),a=Ee("msp-field");return x("div",{class:O.mapped,children:[r(vs,{label:s.label,head:s.head,options:Vr,binding:t("language")}),r("div",{class:O.nested,children:x("div",{class:O.row,children:[r("span",{class:O.label,id:a,children:"Expression"}),r("div",{class:O.control,children:r("textarea",{class:O.textarea,"aria-labelledby":a,rows:3,spellcheck:!1,value:n.value,onChange:o=>n.set(o.currentTarget.value)})})]})})]})}function Gr(s){let{param:e,binding:t}=s,n=e.presets,a=V(!1),o=t.value.pipe(f(l=>l??[])),i=(l,p)=>{let d=[...t.get()??[]];d[l]=p,t.set(d)};return x(se,{children:[x("div",{class:O.row,children:[r("span",{class:O.label,children:s.head}),r("div",{class:O.control,children:r("span",{class:O.count,children:o.pipe(f(l=>l.length===1?"1 item":`${l.length} items`))})})]}),x("div",{class:O.items,children:[r(Y,{each:o.pipe(f(l=>l.map((p,d)=>d))),children:l=>r(Wr,{param:e,binding:t,index:l,replace:i})}),x("div",{class:O.itemActions,children:[x("button",{type:"button",class:O.itemAdd,"aria-label":`Add to ${s.label}`,onClick:()=>t.set([...t.get()??[],e.ctor()]),children:[r(L,{name:"plus",size:13}),"Add"]}),n?r(ft,{open:a,label:s.label}):null]}),n?r(Je,{open:a,presets:()=>n,current:t.value.pipe(f(l=>vt(n,l)),H()),onPick:l=>t.set(l)}):null]})]})}function Wr(s){let{param:e,binding:t,index:n}=s,a=V(!1);return x("div",{class:O.item,"data-open":a.asReadonly.pipe(f(o=>o?"":void 0)),children:[x("div",{class:O.itemRow,onClick:()=>a.set(!a.value),children:[r("span",{class:O.itemLabel,children:t.value.pipe(f(o=>o?.[n]!==void 0?e.getLabel(o[n]):""))}),r("button",{type:"button",class:O.settings,title:"Edit","aria-label":"Edit","aria-expanded":a,onClick:o=>{o.stopPropagation(),a.set(!a.value)},children:r(L,{name:"sliders-horizontal",size:14})}),r("button",{type:"button",class:O.settings,title:"Remove","aria-label":"Remove",onClick:o=>{o.stopPropagation(),t.set((t.get()??[]).filter((i,l)=>l!==n))},children:r(L,{name:"x",size:13})})]}),r(P,{when:a,reveal:!0,children:()=>{let o=new os(e.element,t.get()?.[n],{onChange:i=>s.replace(n,i)});return r("div",{class:O.itemForm,children:r(us,{form:o})})}})]})}function Na(s){if(s.type==="group"){let e={};for(let t of Object.keys(s.params))e[t]=s.params[t].defaultValue;return e}return s.defaultValue}function At(s){let e=s.state??V(!!s.open);if(s.openWhen){let n=s.openWhen.subscribe(a=>{a&&e.set(!0)});q(()=>n.unsubscribe())}let t=s.force?B([e.asReadonly,s.force]).pipe(f(([n,a])=>n||a)):e.asReadonly;return x("div",{class:O.collapsible,children:[x("div",{class:O.collapsibleBar,children:[x("button",{type:"button",class:O.collapsibleHeader,"aria-expanded":t,onClick:()=>e.set(!e.value),children:[s.title,r(L,{name:"chevron-right",size:12,class:O.chevron}),s.meta?r("span",{class:O.collapsibleMeta,children:s.meta}):null]}),s.action]}),s.below?.(),r(P,{when:t,reveal:!0,children:()=>r("div",{class:O.nested,children:s.children()})})]})}var ja={input:"msp-text-input-input"};N("components/text-input/text-input.module.css",`@layer msp.components {
.msp-text-input-input {
  min-width: 0;
  height: var(--msp-control-height);
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  box-shadow: inset 0 0 0 1px var(--msp-field-edge);
  color: var(--msp-color-text);
  font: inherit;
  font-size: var(--msp-font-size-sm);
  border: 0;
  margin: 0;

  &[data-size="sm"] {
    height: 24px;
  }

  &:hover {
    background: var(--msp-color-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }

  &::placeholder {
    color: var(--msp-color-text-subtle);
  }
}
}
`);function Rt(s){return r("input",{type:s.type??"text",class:`${ja.input} ${s.class??""}`,"data-size":s.size??"md",value:s.value,placeholder:s.placeholder,"aria-label":s["aria-label"],onInput:e=>s.onInput?.(e.currentTarget.value),onKeyDown:e=>{let t=e.currentTarget;e.key==="Enter"?s.onSubmit?.(t.value):e.key==="Escape"&&s.search&&t.value&&(t.value="",s.onInput?.(""),e.preventDefault(),e.stopPropagation())}})}var gs={markdown:"msp-markdown-markdown",media:"msp-markdown-media",table:"msp-markdown-table"};N("components/markdown/markdown.module.css",`@layer msp.components {
.msp-markdown-markdown {
  gap: var(--msp-space-3);
  line-height: 1.5;
  display: grid;

  & h3, & h4, & h5, & h6 {
    font-size: var(--msp-font-size-md);
    font-weight: 600;
  }

  & ul, & ol {
    gap: var(--msp-space-1);
    padding-left: var(--msp-space-5);
    display: grid;
  }

  & ul {
    list-style: outside;
  }

  & ol {
    list-style: decimal;
  }

  & code {
    padding: 0 var(--msp-space-1);
    border-radius: var(--msp-radius-sm);
    background: var(--msp-color-control);
    font-family: var(--msp-font-mono);
    font-size: .92em;
  }

  & pre {
    padding: var(--msp-space-2);
    border-radius: var(--msp-radius-sm);
    background: var(--msp-color-control);
    overflow-x: auto;

    & code {
      background: none;
      padding: 0;
    }
  }

  & hr {
    border: 0;
    border-top: 1px solid var(--msp-color-border);
  }

  & img {
    border-radius: var(--msp-radius-sm);
    max-width: 100%;
  }

  & a {
    color: var(--msp-color-accent);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.msp-markdown-media {
  display: grid;

  & audio {
    width: 100%;
    height: 32px;
  }
}

.msp-markdown-table {
  overflow-x: auto;

  & table {
    border-collapse: collapse;
    font-variant-numeric: tabular-nums;
  }

  & th, & td {
    padding: var(--msp-space-1) var(--msp-space-2);
    border-bottom: 1px solid var(--msp-color-border);
    text-align: left;
  }

  & th {
    font-weight: 600;
  }
}
}
`);function an(s){let e=document.createElement("div");e.className=gs.markdown;let t={onLink:s.onLink,host:s.host},n=s.host?.media;if(n){let l=document.createElement("div");l.className=gs.media,e.appendChild(l);let p=d=>{l.replaceChildren(...d?[d]:[]),l.hidden=!d};Ns()?U(n,p):p(n.value)}let a=s.source.split(`
`),o,i;for(let l=0;l<a.length;l++){let p=a[l].trimEnd(),d=/^(#{1,4})\s+(.*)$/.exec(p),m=/^\s*[-*]\s+(.*)$/.exec(p),c=/^\s*\d+\.\s+(.*)$/.exec(p);if(!p.trim())o=i=void 0;else if(/^\s*```/.test(p)){o=i=void 0;let h=[];for(l++;l<a.length&&!/^\s*```/.test(a[l]);l++)h.push(a[l]);let u=document.createElement("pre");u.appendChild(bs("code",h.join(`
`))),e.appendChild(u)}else if(Ur(a,l))o=i=void 0,l=Yr(e,a,l,t)-1;else if(/^\s*([-*_])(\s*\1){2,}\s*$/.test(p))o=i=void 0,e.appendChild(document.createElement("hr"));else if(d){o=i=void 0;let h=document.createElement(`h${Math.min(6,d[1].length+2)}`);It(h,d[2],t),e.appendChild(h)}else if(m||c){i=void 0;let h=m?"UL":"OL";(!o||o.tagName!==h)&&(o=document.createElement(m?"ul":"ol"),e.appendChild(o));let u=document.createElement("li");It(u,(m??c)[1],t),o.appendChild(u)}else o=void 0,i?i.appendChild(document.createTextNode(" ")):(i=document.createElement("p"),e.appendChild(i)),It(i,p.trim(),t)}return e}var Kr=/^\s*\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)*\|?\s*$/;function Ur(s,e){return s[e].includes("|")&&e+1<s.length&&Kr.test(s[e+1])&&s[e+1].includes("-")}function Va(s){let e=s.trim();return e.startsWith("|")&&(e=e.slice(1)),e.endsWith("|")&&!e.endsWith("\\|")&&(e=e.slice(0,-1)),e.split(/(?<!\\)\|/).map(t=>t.trim().replace(/\\\|/g,"|"))}function Yr(s,e,t,n){let a=Va(e[t+1]).map(c=>c.startsWith(":")&&c.endsWith(":")?"center":c.endsWith(":")?"right":""),o=document.createElement("table"),i=(c,h,u)=>{let b=document.createElement("tr"),g=Va(h);for(let y=0;y<a.length;y++){let w=document.createElement(u);a[y]&&(w.style.textAlign=a[y]),It(w,g[y]??"",n),b.appendChild(w)}c.appendChild(b)},l=document.createElement("thead");i(l,e[t],"th"),o.appendChild(l);let p=document.createElement("tbody"),d=t+2;for(;d<e.length&&e[d].trim()&&e[d].includes("|");d++)i(p,e[d],"td");p.childNodes.length&&o.appendChild(p);let m=document.createElement("div");return m.className=gs.table,m.appendChild(o),s.appendChild(m),d}var Xr=/\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`|!\[([^\]]*)\]\(([^)\s]+)\)|\[([^\]]+)\]\(([^)\s]+)\)/g;function It(s,e,t){let n=0,a=new RegExp(Xr.source,"g");for(let o=a.exec(e);o;o=a.exec(e))o.index>n&&s.appendChild(document.createTextNode(e.slice(n,o.index))),o[1]!==void 0?s.appendChild(bs("strong",o[1])):o[2]!==void 0?s.appendChild(bs("em",o[2])):o[3]!==void 0?s.appendChild(bs("code",o[3])):o[5]!==void 0?s.appendChild(Zr(o[5],o[4],t)):s.appendChild(_r(o[7],o[6],t)),n=o.index+o[0].length;n<e.length&&s.appendChild(document.createTextNode(e.slice(n)))}function _r(s,e,t){let n=document.createElement("a");It(n,e,t);let a=t.host?.link?.(s);if(a){n.href="#",n.addEventListener("click",l=>{l.preventDefault(),a("click")});let i=!1;return n.addEventListener("pointerenter",()=>{i=!0,a("enter")}),n.addEventListener("pointerleave",()=>{i=!1,a("leave")}),Ns()&&q(()=>i&&a("leave")),n}let o=/^https?:/i.test(s);return n.href=s.startsWith("#")||o?s:"#",o?(n.target="_blank",n.rel="noopener noreferrer"):n.addEventListener("click",i=>{i.preventDefault(),t.onLink?.(s)}),n}function Zr(s,e,t){let n=t.host?.image?.(s,e);if(n instanceof Node)return n;let a=document.createElement("img");return a.alt=e,typeof n=="string"?a.src=n:n?(a.hidden=!0,n.then(o=>{o&&(a.src=o,a.hidden=!1)},()=>{})):a.src=s,a}function bs(s,e){let t=document.createElement(s);return t.textContent=e,t}var Q={bar:"msp-canvas-playback-bar",bare:"msp-canvas-playback-bare",card:"msp-canvas-playback-card",counter:"msp-canvas-playback-counter",deck:"msp-canvas-playback-deck",description:"msp-canvas-playback-description",descriptionContent:"msp-canvas-playback-descriptionContent",dot:"msp-canvas-playback-dot",dots:"msp-canvas-playback-dots",lead:"msp-canvas-playback-lead",list:"msp-canvas-playback-list",listIndex:"msp-canvas-playback-listIndex",listRow:"msp-canvas-playback-listRow",listRows:"msp-canvas-playback-listRows",listRowsContent:"msp-canvas-playback-listRowsContent",plain:"msp-canvas-playback-plain",position:"msp-canvas-playback-position",rowTitle:"msp-canvas-playback-rowTitle",scrubber:"msp-canvas-playback-scrubber",snapshots:"msp-canvas-playback-snapshots",time:"msp-canvas-playback-time",title:"msp-canvas-playback-title",trajectoryLabel:"msp-canvas-playback-trajectoryLabel"};N("views/canvas/playback.module.css",`@layer msp.components {
.msp-canvas-playback-card {
  font-size: var(--msp-font-size-sm);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-glass-bg);
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
}

.msp-canvas-playback-deck {
  width: fit-content;
  max-width: 100%;
  font-size: var(--msp-font-size-sm);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-glass-bg);
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  grid-template-columns: minmax(0, 1fr);
  justify-self: start;
  display: grid;
  overflow: clip;

  &:not(:has([data-row])) {
    display: none;
  }

  & [data-row] {
    box-shadow: 0 -1px 0 var(--msp-color-border);
  }

  & .msp-canvas-playback-bar {
    height: 32px;
    padding: 0 var(--msp-space-1);
    gap: 0;
  }

  & :is(.msp-canvas-playback-rowTitle, .msp-canvas-playback-trajectoryLabel) {
    max-width: 168px;
    padding: 0 var(--msp-space-2);
    flex: 0 auto;
    font-weight: 500;
  }

  & :is(.msp-canvas-playback-rowTitle, .msp-canvas-playback-position) {
    margin-right: auto;
  }

  & :is(.msp-canvas-playback-counter, .msp-canvas-playback-position, .msp-canvas-playback-time) {
    font-size: var(--msp-font-size-xs);
  }

  & .msp-canvas-playback-counter {
    min-width: 36px;
  }

  & .msp-canvas-playback-time {
    min-width: 56px;
    padding-right: var(--msp-space-1);
  }

  & .msp-canvas-playback-scrubber {
    flex: 1 0 96px;
  }
}

.msp-canvas-playback-bare {
  min-width: 0;
  min-height: 0;
  font-size: var(--msp-font-size-sm);
  flex-direction: column;
  flex: 1 1 0;
  display: flex;

  & > .msp-canvas-playback-snapshots {
    flex: 1 1 0;
  }

  & .msp-canvas-playback-description {
    flex: 1 1 0;
    max-height: none;
  }
}

.msp-canvas-playback-snapshots {
  flex-direction: column;
  min-height: 0;
  display: flex;
}

.msp-canvas-playback-bar {
  align-items: center;
  gap: var(--msp-space-1);
  height: 34px;
  padding: 0 var(--msp-space-2);
  display: flex;

  & button {
    color: var(--msp-color-text-muted);

    &:hover:not(:disabled) {
      color: var(--msp-color-text);
    }

    &[aria-pressed="true"] {
      color: var(--msp-color-accent);
    }
  }

  & svg {
    width: 16px;
    height: 16px;
  }
}

.msp-canvas-playback-lead {
  width: 24px;
  height: 24px;
  color: var(--msp-color-text-muted);
  flex: none;
  place-items: center;
  display: grid;
}

.msp-canvas-playback-counter {
  min-width: 44px;
  font-size: var(--msp-font-size-sm);
  font-variant-numeric: tabular-nums;
  text-align: center;
  color: var(--msp-color-text-muted);
}

.msp-canvas-playback-title {
  min-width: 0;
  padding: 0 var(--msp-space-2) 0 var(--msp-space-3);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  font-weight: 600;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-canvas-playback-description {
  max-height: 40cqh;
}

.msp-canvas-playback-descriptionContent {
  min-width: 0;
  padding: 0 var(--msp-space-4) var(--msp-space-4);
  font-size: var(--msp-font-size-sm);
  overflow-wrap: anywhere;
}

.msp-canvas-playback-plain {
  white-space: pre-wrap;
  margin: 0;
  line-height: 1.5;
}

.msp-canvas-playback-scrubber {
  min-width: 40px;
  height: 16px;
  margin: 0 var(--msp-space-2);
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  background: none;
  flex: 1;

  &::-webkit-slider-runnable-track {
    background: linear-gradient(to right,
      var(--msp-color-text-muted) var(--msp-progress, 0%),
      var(--msp-color-border-strong) var(--msp-progress, 0%));
    border-radius: 1px;
    height: 2px;
  }

  &::-webkit-slider-thumb {
    background: var(--msp-color-text);
    -webkit-appearance: none;
    appearance: none;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin-top: -4px;
  }

  &::-moz-range-track {
    background: var(--msp-color-border-strong);
    border-radius: 1px;
    height: 2px;
  }

  &::-moz-range-progress {
    background: var(--msp-color-text-muted);
    border-radius: 1px;
    height: 2px;
  }

  &::-moz-range-thumb {
    background: var(--msp-color-text);
    border: 0;
    border-radius: 50%;
    width: 10px;
    height: 10px;
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: 2px;
    border-radius: var(--msp-radius-sm);
  }
}

.msp-canvas-playback-rowTitle {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  font-weight: 600;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-canvas-playback-time {
  min-width: 64px;
  color: var(--msp-color-text-muted);
  font-variant-numeric: tabular-nums;
  text-align: right;
  flex: none;
}

.msp-canvas-playback-trajectoryLabel {
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  font-weight: 600;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-canvas-playback-dots {
  margin-right: var(--msp-space-2);
  align-items: center;
  display: flex;
}

.msp-canvas-playback-dot {
  place-items: center;
  width: 14px;
  height: 24px;
  display: grid;

  &:before {
    content: "";
    background: var(--msp-color-border-strong);
    border-radius: 50%;
    width: 6px;
    height: 6px;
  }

  &:hover:before {
    background: var(--msp-color-text-muted);
  }

  &[aria-selected="true"]:before {
    background: var(--msp-color-text);
  }
}

.msp-canvas-playback-position {
  white-space: nowrap;
  height: 24px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  font-variant-numeric: tabular-nums;
  flex: none;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-canvas-playback-list {
  gap: var(--msp-space-2);
  padding: 0 var(--msp-space-2) var(--msp-space-2);
  display: grid;
}

.msp-canvas-playback-listRows {
  max-height: 220px;
}

.msp-canvas-playback-listRowsContent {
  grid-template-columns: minmax(0, 1fr);
  display: grid;
}

.msp-canvas-playback-listRow {
  align-items: center;
  gap: var(--msp-space-2);
  height: 26px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  grid-template-columns: 24px 1fr;
  display: grid;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[aria-selected="true"] {
    color: var(--msp-color-text);
    font-weight: 600;
  }
}

.msp-canvas-playback-listIndex {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  text-align: right;
}
}
`);var Qr=7;function Jr(s){return r(P,{when:s.model.count.pipe(f(e=>e>0)),children:()=>r("section",{class:s.bare?Q.bare:Q.card,"aria-label":"Snapshots",children:r(oi,{model:s.model})})})}function ei(s){return r("section",{class:Q.deck,"aria-label":"Playback",children:s.children})}function ti(s){return r(P,{when:s.model.count.pipe(f(e=>e>1)),children:()=>r(li,{model:s.model})})}function si(s){let{model:e}=s;return r(P,{when:e.count.pipe(f(t=>t>1)),children:()=>{let t=V(!1);return x("div",{"data-row":!0,children:[x("div",{class:Q.bar,role:"group","aria-label":"Snapshots",children:[r("span",{class:Q.lead,children:r(L,{name:"snapshots",size:16})}),r("button",{type:"button",class:Q.position,"aria-expanded":t,"aria-label":e.title.pipe(f(n=>n?`Snapshots: ${n}`:"Snapshots")),"data-tip":e.title.pipe(f(n=>n??"No snapshot applied")),onClick:()=>t.set(!t.value),children:B([e.index,e.count]).pipe(f(([n,a])=>`${n<0?"\u2013":n+1} / ${a}`))}),r(ce,{variant:"ghost",size:"sm",icon:r(L,{name:"chevron-left"}),title:"Previous snapshot",onClick:()=>e.previous()}),r(on,{playing:e.isPlaying,title:"Play snapshots",onClick:()=>e.togglePlay()}),r(ce,{variant:"ghost",size:"sm",icon:r(L,{name:"chevron-right"}),title:"Next snapshot",onClick:()=>e.next()}),s.actions?.()]}),r(P,{when:t,children:()=>r(Ka,{model:e,onClose:()=>t.set(!1)})})]})}})}function Wa(s){return r(ce,{variant:"ghost",size:"sm",icon:r(P,{when:s.muted,fallback:()=>r(L,{name:"volume-2"}),children:()=>r(L,{name:"volume-x"})}),title:s.muted.pipe(f(e=>e?"Unmute":"Mute")),pressed:s.muted,onClick:()=>s.onClick()})}function ni(s){return x("div",{class:Q.bar,role:"group","aria-label":"Audio","data-row":!0,children:[r("span",{class:Q.lead,children:r(L,{name:"volume-2",size:16})}),r("span",{class:Q.rowTitle,children:"Audio"}),r(Wa,{muted:s.muted,onClick:s.onToggleMute})]})}var qa=s=>(s/1e3).toFixed(1);function ai(s){let{model:e}=s;return r(P,{when:e.duration.pipe(f(t=>t>0)),children:()=>{let t=B([e.time,e.duration]).pipe(f(([n,a])=>`${a>0?100*Math.min(n,a)/a:0}%`));return x("div",{class:Q.bar,role:"group","aria-label":"Transition","data-row":!0,children:[r("span",{class:Q.lead,children:r(L,{name:"film",size:16})}),r("input",{class:Q.scrubber,type:"range",min:"0",max:e.duration.pipe(f(String)),step:e.step.pipe(f(n=>String(Math.max(1,Math.round(n))))),value:e.time.pipe(f(n=>String(Math.round(n)))),style:{"--msp-progress":t},"aria-label":"Transition time",onInput:n=>e.seek(Number(n.currentTarget.value))}),r("span",{class:Q.time,children:B([e.time,e.duration]).pipe(f(([n,a])=>`${qa(n)} / ${qa(a)} s`))}),r(ce,{variant:"ghost",size:"sm",icon:r(P,{when:e.isPlaying,fallback:()=>r(L,{name:"play"}),children:()=>r(L,{name:"square"})}),title:e.isPlaying.pipe(f(n=>n?"Stop the transition":"Play the transition")),onClick:()=>e.togglePlay()})]})}})}function oi(s){let{model:e}=s,t=V(!1),n=e.count.pipe(f(a=>a>Qr),H());return x("div",{class:Q.snapshots,children:[x("div",{class:Q.bar,children:[r("span",{class:Q.title,children:e.title}),r(P,{when:e.count.pipe(f(a=>a>1)),children:()=>x(se,{children:[r(P,{when:n,fallback:()=>r(ii,{model:e}),children:()=>r("button",{type:"button",class:Q.position,"aria-expanded":t,"aria-label":"Snapshots",onClick:()=>t.set(!t.value),children:B([e.index,e.count]).pipe(f(([a,o])=>`${a+1} / ${o}`))})}),r(ce,{variant:"ghost",size:"sm",icon:r(L,{name:"chevron-left"}),title:"Previous snapshot",onClick:()=>e.previous()}),r(ce,{variant:"ghost",size:"sm",icon:r(L,{name:"chevron-right"}),title:"Next snapshot",onClick:()=>e.next()}),r(on,{playing:e.isPlaying,title:"Play snapshots",onClick:()=>e.togglePlay()})]})})]}),r(P,{when:t,children:()=>r(Ka,{model:e,onClose:()=>t.set(!1)})}),r(P,{when:B([e.description,e.title]).pipe(_t(0),f(([a,o])=>a&&ri(a,o??"")),H()),children:a=>r(ie,{class:Q.description,contentClass:Q.descriptionContent,children:r(P,{when:e.plainText??!1,fallback:()=>r(an,{source:a,onLink:o=>e.openLink(o),host:e.markdown}),children:()=>r("p",{class:Q.plain,children:a})})})})]})}function ri(s,e){let t=/^\s*#{1,6}[ \t]+(.+?)[ \t]*#*[ \t]*(?:\r?\n|$)/.exec(s);if(!t)return s;let n=Ga(t[1]),a=Ga(e);return!n||!(a===n||a.startsWith(`${n} `)||a.includes(` ${n} `)||a.endsWith(` ${n}`))?s:s.slice(t[0].length).replace(/^\s+/,"")}function Ga(s){return s.replace(/[[(]\s*\d+\s*\/\s*\d+\s*[\])]/g," ").replace(/[*_`~]/g,"").toLowerCase().replace(/[^\p{L}\p{N}]+/gu," ").trim()}function ii(s){let{model:e}=s;return r("span",{class:Q.dots,role:"tablist","aria-label":"Snapshots",children:r(Y,{each:e.titles,children:(t,n)=>r("button",{type:"button",role:"tab",class:Q.dot,"data-tip":t,"aria-label":t,"aria-selected":B([e.index,n]).pipe(f(([a,o])=>a===o)),onClick:()=>e.goTo(n.value)})})})}function Ka(s){let{model:e}=s,t=V(""),n=B([e.titles,t.asReadonly]).pipe(f(([a,o])=>{let i=o.trim().toLowerCase();return a.map((l,p)=>({title:l,index:p})).filter(l=>!i||l.title.toLowerCase().includes(i))}));return x("div",{class:Q.list,children:[r(P,{when:e.count.pipe(f(a=>a>12)),children:()=>r(Rt,{search:!0,size:"sm","aria-label":"Filter snapshots",placeholder:"Filter",value:t,onInput:a=>t.set(a)})}),r(ie,{class:Q.listRows,contentClass:Q.listRowsContent,role:"listbox","aria-label":"Snapshots",children:r(Y,{each:n,children:a=>x("button",{type:"button",role:"option",class:Q.listRow,"aria-selected":e.index.pipe(f(o=>o===a.index)),onClick:()=>{e.goTo(a.index),s.onClose()},children:[r("span",{class:Q.listIndex,children:String(a.index+1)}),r("span",{children:a.title})]})},a=>a.index)})]})}function li(s){let{model:e}=s,t=a=>{let o=e.count.value;o>1&&e.seek(((e.index.value+a)%o+o)%o)},n=B([e.index,e.count]).pipe(f(([a,o])=>`${o>1?100*a/(o-1):0}%`));return x("div",{class:Q.bar,role:"group","aria-label":"Models","data-row":!0,children:[r("span",{class:Q.lead,children:r(L,{name:"trajectory",size:16})}),r("span",{class:Q.trajectoryLabel,children:e.label}),r("span",{class:Q.counter,children:B([e.index,e.count]).pipe(f(([a,o])=>`${a+1} / ${o}`))}),r("input",{class:Q.scrubber,type:"range",min:"0",max:e.count.pipe(f(a=>String(a-1))),value:e.index.pipe(f(String)),style:{"--msp-progress":n},"aria-label":"Model",onInput:a=>e.seek(Number(a.currentTarget.value))}),r(ce,{variant:"ghost",size:"sm",icon:r(L,{name:"chevron-left"}),title:"Previous model",onClick:()=>t(-1)}),r(on,{playing:e.isPlaying,title:"Play models",onClick:()=>e.togglePlay()}),r(ce,{variant:"ghost",size:"sm",icon:r(L,{name:"chevron-right"}),title:"Next model",onClick:()=>t(1)})]})}function on(s){return r(ce,{variant:"ghost",size:"sm",icon:r(P,{when:s.playing,fallback:()=>r(L,{name:"play"}),children:()=>r(L,{name:"pause"})}),title:s.playing.pipe(f(e=>e?"Pause":s.title)),pressed:s.playing,onClick:()=>s.onClick()})}function Le(s){let e=r("div",{class:s.class,style:"display: contents"}),t=s.renderer.mount(e,s.ctx,ze("ViewHost"));return q(t),e}var et={body:"msp-shell-section-list-body",chevron:"msp-shell-section-list-chevron",header:"msp-shell-section-list-header",list:"msp-shell-section-list-list",section:"msp-shell-section-list-section",title:"msp-shell-section-list-title"};N("views/shell/section-list.module.css",`@layer msp.components {
.msp-shell-section-list-list {
  font-size: var(--msp-font-size-sm);
  gap: var(--msp-space-1);
  padding: 0 var(--msp-panel-inset) var(--msp-panel-inset);
  display: grid;
}

.msp-shell-section-list-section {
  border-radius: var(--msp-radius-md);

  &:has([aria-expanded="true"]) {
    background: var(--msp-color-well);
  }
}

.msp-shell-section-list-header {
  align-items: center;
  gap: var(--msp-space-3);
  width: 100%;
  height: var(--msp-row-height);
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  text-align: left;
  font-weight: 600;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  &[aria-expanded="true"] {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
}

.msp-shell-section-list-title {
  white-space: nowrap;
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-shell-section-list-chevron {
  color: var(--msp-color-text-subtle);
  transition: transform var(--msp-motion-fast) var(--msp-ease);

  [aria-expanded="false"] > & {
    transform: rotate(-90deg);
  }
}

.msp-shell-section-list-body {
  padding: var(--msp-space-2) var(--msp-space-3) var(--msp-space-3);
}

.msp-shell-section-list-list[data-bare] {
  padding: 0;

  & .msp-shell-section-list-header {
    height: 32px;
  }
}

.msp-shell-section-list-list[data-flat] {
  padding: 0;

  & .msp-shell-section-list-section {
    background: none;
  }

  & .msp-shell-section-list-header {
    height: 26px;
    font-size: var(--msp-font-size-sm);
    padding: 0;

    &:hover {
      color: var(--msp-color-accent);
      background: none;
    }
  }

  & .msp-shell-section-list-body {
    padding: 0 0 var(--msp-space-2);
  }
}
}
`);function ci(s){let{shell:e,subject:t}=s,n={shell:e,subject:t},a=e.sections(s.slot),o=m=>m.filter(c=>!c.when||c.when(n)),i=a.pipe(f(o)),l=s.focus,p=m=>!!l&&(l===m||l.startsWith(`${m}/`)),d=m=>l?.startsWith(`${m}/`)?l.slice(m.length+1):void 0;return r("div",{class:et.list,"data-flat":s.flat?"":void 0,"data-bare":s.bare?"":void 0,children:r(Y,{each:i,children:m=>r(pi,{ctx:d(m.id)?{...n,focus:d(m.id)}:n,slot:s.slot,section:m,open:l?p(m.id):e.sectionOpen(s.slot,m.id)??(!s.collapsed||!!m.open),focused:p(m.id)})},m=>m.id)})}function pi(s){let{ctx:e,section:t}=s,n=V(s.open),a=V(s.open),o=V(!1),i,l,p=()=>{o.set(!0),l?.cancel(),l=void 0,a.set(!a.value);let m=!a.value&&n.value&&i?ns(i,"grow"):void 0;if(m){l=m,e.shell.setSectionOpen(s.slot,t.id,!1),m.finished.then(()=>{l===m&&(l=void 0,n.set(!1),m.cancel())},()=>{});return}n.set(a.value),e.shell.setSectionOpen(s.slot,t.id,n.value)},d=x("section",{class:et.section,"data-section":t.id,children:[x("button",{type:"button",class:et.header,"aria-expanded":a,onClick:p,children:[r("span",{class:et.title,children:t.heading??t.title}),r(L,{name:"chevron-down",size:14,class:et.chevron})]}),r("div",{class:et.body,ref:m=>{i=m},hidden:n.asReadonly.pipe(f(m=>!m)),"data-reveal":o.asReadonly.pipe(f(m=>m?"":void 0)),children:pt(n.asReadonly,()=>r(Le,{renderer:t.render,ctx:e}))})]});return s.focused&&(e.shell.setSectionOpen(s.slot,t.id,!0),queueMicrotask(()=>d.scrollIntoView({block:"nearest"}))),d}var Ua=class{constructor(e){this.target=e;this.available=typeof document<"u"&&!!document.fullscreenEnabled,this.embedded=typeof window<"u"&&window.self!==window.top,typeof document<"u"&&document.addEventListener("fullscreenchange",this.#s)}#e=V(!1);#s=()=>this.#e.set(document.fullscreenElement===this.target());get mode(){return this.embedded&&this.available?"fullscreen":"expand"}get active(){return this.#e.asReadonly}get unavailableReason(){return this.available?void 0:"Not allowed by the page Mol* is embedded in"}async toggle(){if(this.available)try{document.fullscreenElement?await document.exitFullscreen():await this.target()?.requestFullscreen()}catch(e){console.error(e)}}dispose(){typeof document<"u"&&document.removeEventListener("fullscreenchange",this.#s)}};var bt={choice:"msp-choices-choice",group:"msp-choices-group",label:"msp-choices-label",row:"msp-choices-row",text:"msp-choices-text"};N("components/choices/choices.module.css",`@layer msp.components {
.msp-choices-group {
  gap: var(--msp-space-1);
  grid-template-columns: minmax(0, 1fr);
  min-width: 0;
  display: grid;
}

.msp-choices-label {
  padding: 0 var(--msp-space-1);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
}

.msp-choices-row {
  gap: var(--msp-space-1);
  grid-template-columns: repeat(auto-fit, minmax(min(64px, 100%), 1fr));
  display: grid;
}

.msp-choices-choice {
  justify-content: center;
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  height: 28px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  white-space: nowrap;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  &[aria-pressed="true"] {
    background: color-mix(in oklab, var(--msp-color-accent), transparent 82%);
    color: var(--msp-color-accent);
  }

  & > svg {
    flex: none;
  }
}

.msp-choices-text {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}
}
`);function di(s){return x("div",{class:bt.group,children:[s.label?r("span",{class:bt.label,children:s.label}):null,r("div",{class:bt.row,role:"group","aria-label":s.label,children:s.choices.map(e=>x("button",{type:"button",class:bt.choice,title:e.title,"aria-pressed":s.active?.pipe(f(t=>t===e.id)),onClick:()=>s.onPick(e.id),children:[e.icon?r(L,{name:e.icon,size:15}):null,r("span",{class:bt.text,"data-tip-overflow":"",children:e.label})]}))})]})}var rn={menu:"msp-context-menu-menu",row:"msp-context-menu-row"};N("components/context-menu/context-menu.module.css",`@layer msp.components {
.msp-context-menu-menu {
  z-index: var(--msp-z-overlay);
  min-width: 180px;
  padding: var(--msp-space-2);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-glass-panel-bg);
  box-shadow: var(--msp-glass-shadow);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  display: grid;
  position: fixed;
  top: 0;
  left: 0;
}

.msp-context-menu-row {
  align-items: center;
  gap: var(--msp-space-3);
  height: 28px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  text-align: left;
  grid-template-columns: 15px 1fr;
  display: grid;

  &:hover, &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &:disabled {
    opacity: .55;
  }
}
}
`);function mi(s,e,t,n){let a=!1,o=()=>{},i=Ie(),l=()=>{a||(a=!0,document.removeEventListener("pointerdown",p,!0),document.removeEventListener("keydown",d,!0),window.removeEventListener("resize",l),window.removeEventListener("scroll",l,!0),o(),i(m),m.remove(),n?.())},p=g=>{me(g,m)||l()},d=g=>{g.key==="Escape"&&(!me(g,m)&&!Ce(s,g)||(g.preventDefault(),g.stopPropagation(),l()))},m;Jn(g=>{o=g,m=r("div",{class:rn.menu,role:"menu",onKeyDown:Qe,onContextMenu:y=>y.preventDefault(),children:t.map(y=>x("button",{type:"button",role:"menuitem",class:rn.row,disabled:!!y.disabled,title:y.disabled,onClick:()=>{l(),y.run()},children:[y.icon?r(L,{name:y.icon,size:15}):r("span",{}),r("span",{children:y.label})]}))})}),s.append(m);let c=m.offsetWidth,h=m.offsetHeight,u=e.x+c>window.innerWidth-4?Math.max(4,e.x-c):e.x,b=e.y+h>window.innerHeight-4?Math.max(4,e.y-h):e.y;return m.style.transform=`translate(${Math.round(u)}px, ${Math.round(b)}px)`,document.addEventListener("pointerdown",p,!0),document.addEventListener("keydown",d,!0),window.addEventListener("resize",l),window.addEventListener("scroll",l,!0),m.querySelector("button:not(:disabled)")?.focus({preventScroll:!0}),l}var xe={bar:"msp-legend-bar",caption:"msp-legend-caption",dot:"msp-legend-dot",ends:"msp-legend-ends",item:"msp-legend-item",label:"msp-legend-label",legend:"msp-legend-legend",line:"msp-legend-line",mark:"msp-legend-mark",none:"msp-legend-none",ramp:"msp-legend-ramp",swatch:"msp-legend-swatch",title:"msp-legend-title"};N("components/legend/legend.module.css",`@layer msp.components {
.msp-legend-legend {
  gap: var(--msp-space-2);
  min-width: 0;
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  flex-direction: column;
  line-height: 1.3;
  display: flex;
}

.msp-legend-title {
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
}

.msp-legend-item {
  align-items: center;
  gap: var(--msp-space-3);
  min-width: 0;
  display: flex;
}

.msp-legend-label {
  white-space: nowrap;
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-legend-mark {
  background: var(--legend-color, transparent);
  flex: none;
}

.msp-legend-swatch {
  border-radius: var(--msp-radius-sm);
  width: 12px;
  height: 12px;
}

.msp-legend-dot {
  border-radius: 50%;
  width: 10px;
  height: 10px;
}

.msp-legend-line {
  border-radius: 2px;
  width: 14px;
  height: 3px;
}

.msp-legend-none {
  background: color-mix(in oklab, var(--msp-color-text), transparent 85%);
}

.msp-legend-ramp {
  gap: var(--msp-space-1);
  flex-direction: column;
  display: flex;
}

.msp-legend-caption {
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
}

.msp-legend-bar {
  border-radius: var(--msp-radius-sm);
  height: 8px;
  display: block;
}

.msp-legend-ends {
  justify-content: space-between;
  gap: var(--msp-space-3);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
  display: flex;
}
}
`);function hi(s){return`linear-gradient(to right, ${(s.stops.length>0?s.stops:[{t:0,color:"transparent"}]).map(n=>`${n.color} ${(Math.min(1,Math.max(0,n.t))*100).toFixed(1)}%`).join(", ")})`}function ui(s){let e=s.items??[],t=s.ramps??[];return x("div",{class:s.class?`${xe.legend} ${s.class}`:xe.legend,role:"group","aria-label":"Legend",children:[r(P,{when:s.title,children:n=>r("span",{class:xe.title,children:n})}),r(Y,{each:e,children:n=>x("div",{class:xe.item,children:[r("span",{class:`${xe.mark} ${xe[n.glyph??"swatch"]}`,classList:{[xe.none]:n.color===null},style:{"--legend-color":n.color??void 0},"aria-hidden":"true"}),r("span",{class:xe.label,children:n.label})]})}),r(Y,{each:t,children:n=>x("div",{class:xe.ramp,children:[n.caption?r("span",{class:xe.caption,children:n.caption}):null,r("span",{class:xe.bar,style:{background:hi(n)},role:"img","aria-label":`${n.lo} to ${n.hi}`}),x("span",{class:xe.ends,children:[r("span",{children:n.lo}),r("span",{children:n.hi})]})]})})]})}var yt={core:"msp-icon-wordmark-core",flash:"msp-icon-wordmark-flash","flash-hover":"msp-icon-wordmark-flash-hover","flash-often":"msp-icon-wordmark-flash-often","flash-rare":"msp-icon-wordmark-flash-rare","flash-reveal":"msp-icon-wordmark-flash-reveal",live:"msp-icon-wordmark-live",outline:"msp-icon-wordmark-outline",wordmark:"msp-icon-wordmark-wordmark"};N("components/icon/wordmark.module.css",`@layer msp.components {
.msp-icon-wordmark-wordmark {
  width: calc(var(--msp-wordmark-width, 72) * 1px * var(--msp-wordmark-scale, 1));
  height: calc(22px * var(--msp-wordmark-scale, 1));
  flex: none;
  display: block;
  position: relative;

  & svg {
    stroke-width: calc(1.5 / sqrt(var(--msp-wordmark-scale, 1)));
    position: absolute;
    inset: 0;
    overflow: visible;
  }
}

.msp-icon-wordmark-core {
  stroke-width: calc(2.4 / sqrt(var(--msp-wordmark-scale, 1)));
}

.msp-icon-wordmark-outline {
  color: inherit;
}

.msp-icon-wordmark-flash {
  animation: 14s ease-in-out .3s infinite both msp-icon-wordmark-flash-rare;
  mask-image: linear-gradient(100deg, #0000 0 38%, #000 47% 53%, #0000 62% 100%);
  mask-position: 100% 0;
  mask-size: 300% 100%;
  mask-repeat: no-repeat;

  [data-flash="often"] > & {
    animation: 7s ease-in-out .3s infinite both msp-icon-wordmark-flash-often;
  }

  [data-flash="reveal"] > & {
    animation: 1.4s ease-out both msp-icon-wordmark-flash-reveal;
    mask-image: linear-gradient(100deg, #000 0 42%, #0000 58% 100%);
  }

  .msp-icon-wordmark-wordmark:not([data-flash="reveal"], [data-live]):hover & {
    animation: 2.8s ease-in-out both msp-icon-wordmark-flash-hover;
  }
}

@keyframes msp-icon-wordmark-flash-rare {
  0% {
    mask-position: 100% 0;
  }

  20%, 100% {
    mask-position: 0 0;
  }
}

@keyframes msp-icon-wordmark-flash-often {
  0% {
    mask-position: 100% 0;
  }

  40%, 100% {
    mask-position: 0 0;
  }
}

@keyframes msp-icon-wordmark-flash-reveal {
  from {
    mask-position: 100% 0;
  }

  to {
    mask-position: 0 0;
  }
}

@keyframes msp-icon-wordmark-flash-hover {
  from {
    mask-position: 100% 0;
  }

  to {
    mask-position: 0 0;
  }
}

.msp-icon-wordmark-wordmark[data-live] {
  pointer-events: auto;
}

.msp-icon-wordmark-live {
  opacity: 0;
  --msp-wordmark-strip: calc(14px * var(--msp-wordmark-scale, 1));
  mask-image: linear-gradient(90deg,
    transparent calc(var(--msp-wordmark-x, 50%) - var(--msp-wordmark-strip)),
    #000 calc(var(--msp-wordmark-x, 50%) - var(--msp-wordmark-strip) / 3),
    #000 calc(var(--msp-wordmark-x, 50%) + var(--msp-wordmark-strip) / 3),
    transparent calc(var(--msp-wordmark-x, 50%) + var(--msp-wordmark-strip)));
  transition: opacity .6s var(--msp-ease);

  .msp-icon-wordmark-wordmark:hover > & {
    opacity: 1;
    transition-duration: .2s;
  }
}

@media (prefers-reduced-motion: reduce) {
  .msp-icon-wordmark-flash {
    animation: none;
  }
}
}
`);var Ya="M0.5 1.5 3.5 1.5 8.5 10.5 13.5 1.5 16.5 1.5 16.5 19.5 13.5 19.5 13.5 7.68 8.5 16.68 3.5 7.68 3.5 19.5 0.5 19.5Z",Xa="M46.5 3.5 49.5 3.5 49.5 6.38 51.54 4.34 53.66 6.46 51.62 8.5 54.5 8.5 54.5 11.5 51.62 11.5 53.66 13.54 51.54 15.66 49.5 13.62 49.5 16.5 46.5 16.5 46.5 13.62 44.46 15.66 42.34 13.54 44.38 11.5 36.5 11.5 36.5 19.5 33.5 19.5 33.5 0.5 36.5 0.5 36.5 8.5 44.38 8.5 42.34 6.46 44.46 4.34 46.5 6.38Z",fi="M57.5 3.5 68.76 10 57.5 16.5Z",vi="M60 7.83 63.76 10 60 12.17Z",gi=72,_a=57,Za=48,Qa=10,bi="M24.5 6.5H25.5A5 5 0 0 1 30.5 11.5V14.5A5 5 0 0 1 25.5 19.5H24.5A5 5 0 0 1 19.5 14.5V11.5A5 5 0 0 1 24.5 6.5Z",yi="M25 9.5A2.5 2.5 0 0 1 27.5 12V14A2.5 2.5 0 0 1 25 16.5A2.5 2.5 0 0 1 22.5 14V12A2.5 2.5 0 0 1 25 9.5Z",J={paths:[Ya,bi,yi,Xa],width:_a,height:22,star:{x:Za,y:Qa},stroke:s=>1.5/Math.sqrt(s)},xi=0;function Ja(s){return x(se,{children:[r("path",{d:Ya}),r("rect",{x:"19.5",y:"6.5",width:"11",height:"13",rx:"5"}),r("rect",{x:"22.5",y:"9.5",width:"5",height:"7",rx:"2.5"}),r("path",{d:Xa}),s.prism?r("path",{d:fi,"data-part":"prism"}):null,s.prism?r("path",{d:vi,class:yt.core}):null]})}function ln(s){let e=`msp-wordmark-${++xi}`,t=Math.max(1,Math.round(s.scale??1)),n=s.prism??!0,a=n?gi:_a,o=p=>x("svg",{class:p.class,viewBox:`-1 -1 ${a} 22`,width:a*t,height:22*t,fill:"none",stroke:p.stroke,"stroke-linejoin":"miter","aria-hidden":p.hidden?"true":void 0,children:[p.hidden?r("defs",{children:x("linearGradient",{id:e,gradientUnits:"userSpaceOnUse",x1:"0",y1:"0",x2:String(a-2),y2:"0",children:[r("stop",{offset:"0",style:{"stop-color":"var(--msp-color-brand-1)"}}),r("stop",{offset:"0.35",style:{"stop-color":"var(--msp-color-brand-2)"}}),r("stop",{offset:"0.6",style:{"stop-color":"var(--msp-color-brand-3)"}}),r("stop",{offset:"1",style:{"stop-color":"var(--msp-color-brand-4)"}})]})}):null,r(Ja,{prism:n}),p.hidden?null:r("rect",{"data-part":"star",x:Za-.5,y:Qa-.5,width:"1",height:"1",stroke:"none",visibility:"hidden"})]}),i=s.live?wi(e,t,a,n):void 0,l=x("span",{class:`${yt.wordmark} ${s.class??""}`,style:{"--msp-wordmark-scale":t,"--msp-wordmark-width":a},"data-flash":s.flash??"rare","data-live":s.live?"":void 0,role:"img","aria-label":"Mol* Prism",children:[o({class:yt.outline,stroke:"currentColor"}),o({class:yt.flash,stroke:`url(#${e})`,hidden:!0}),i?.svg]});return i&&l.addEventListener("pointermove",p=>{let d=l.getBoundingClientRect(),m=p.clientX-d.left,c=m/t-1;i.gradient.setAttribute("x1",String(c-14)),i.gradient.setAttribute("x2",String(c+14)),l.style.setProperty("--msp-wordmark-x",`${m}px`)}),l}function wi(s,e,t,n){let a=x("linearGradient",{id:`${s}-live`,gradientUnits:"userSpaceOnUse",x1:"13",y1:"0",x2:"41",y2:"0",children:[r("stop",{offset:"0",style:{"stop-color":"var(--msp-color-brand-1)"}}),r("stop",{offset:"0.3",style:{"stop-color":"var(--msp-color-brand-3)"}}),r("stop",{offset:"0.5",style:{"stop-color":"var(--msp-color-brand-2)"}}),r("stop",{offset:"0.7",style:{"stop-color":"var(--msp-color-brand-3)"}}),r("stop",{offset:"1",style:{"stop-color":"var(--msp-color-brand-4)"}})]});return{svg:x("svg",{class:yt.live,viewBox:`-1 -1 ${t} 22`,width:t*e,height:22*e,fill:"none",stroke:`url(#${s}-live)`,"stroke-linejoin":"miter","aria-hidden":"true",children:[r("defs",{children:a}),r(Ja,{prism:n})]}),gradient:a}}var ys={canvas:"msp-shell-glass-wordmark-canvas",wordmark:"msp-shell-glass-wordmark-wordmark"};N("views/shell/glass-wordmark.module.css",`@layer msp.components {
.msp-shell-glass-wordmark-wordmark {
  flex: none;
  display: block;
  position: relative;
}

.msp-shell-glass-wordmark-canvas {
  pointer-events: none;
  position: absolute;
}
}
`);var tt=11,kt=4,ee=tt*kt*2,eo={duration:2.4,stagger:.7},xt={duration:.45,stagger:.12},ki=.8,Mi=3,to=14,so=1.4,Ci=.1,cn=140,pn=11,wt=11,Si=3;function Ei(s){let e=s>>>0||1;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Ti(s){let t=s-1;return 1+(1.4+1)*t*t*t+1.4*t*t}var Ge=class{constructor(e=11,t=1){this.#o=[];this.#r=new Float32Array(ee);this.#t=new Float32Array(ee);this.#a=new Float32Array(ee);this.#n=new Float32Array(ee);this.#i=new Float32Array(ee);this.#h=new Float32Array(ee);this.#u=new Float32Array(ee);this.#f=new Float32Array(ee);this.#S=new Float32Array(ee);this.#E=new Float32Array(ee);this.#P=new Float32Array(ee);this.#z=new Float32Array(ee);this.#v=new Float32Array(ee);this.#d=new Float32Array(ee);this.#y=new Float32Array(ee);this.#g=new Float32Array(ee);this.#Q=new Float32Array(ee);this.#j=new Float32Array(ee);this.#p=eo;this.#l="whole";this.#D=0;this.#x=0;this.#c=!1;this.#w=!1;this.#V=0;this.#$=0;this.#A=!0;this.onWhole=()=>{};this.onSnap=()=>{};this.count=ee;this.#q=0;this.#b=0;this.#R=0;this.corners=new Float32Array(ee*6);this.#e=Ei(e),this.#T=t,this.#s=J.paths.map(h=>new Path2D(h));let n=-1,a=-1,o=J.width,i=J.height,l=[],p=[];for(let h=0;h<=kt;h++)for(let u=0;u<=tt;u++){let b=h>0&&h<kt&&u>0&&u<tt;l.push(n+u/tt*o+(b?(this.#e()-.5)*.7*(o/tt):0)),p.push(a+h/kt*i+(b?(this.#e()-.5)*.7*(i/kt):0))}let d=(h,u)=>u*(tt+1)+h,m=0,c=(h,u,b)=>{let g=(l[h]+l[u]+l[b])/3,y=(p[h]+p[u]+p[b])/3,w=new Path2D;w.moveTo(l[h]-g,p[h]-y),w.lineTo(l[u]-g,p[u]-y),w.lineTo(l[b]-g,p[b]-y),w.closePath(),this.#o.push(w),this.corners.set([l[h]-g,p[h]-y,l[u]-g,p[u]-y,l[b]-g,p[b]-y],m*6),this.#r[m]=g,this.#t[m]=y,m++};for(let h=0;h<kt;h++)for(let u=0;u<tt;u++){let[b,g,y,w]=[d(u,h),d(u+1,h),d(u,h+1),d(u+1,h+1)];this.#e()<.5?(c(b,g,w),c(b,w,y)):(c(b,g,y),c(g,w,y))}}#e;#s;#o;#r;#t;#a;#n;#i;#h;#u;#f;#S;#E;#P;#z;#v;#d;#y;#g;#Q;#j;#p;#l;#D;#x;#c;#w;#V;#$;#A;#T;#F;#q;#W;#b;#R;place(e,t){t[0]=this.#r[e]+this.#a[e]+this.#v[e],t[1]=this.#t[e]+this.#n[e]+this.#d[e],t[2]=this.#i[e]+this.#y[e],t[3]=this.#r[e],t[4]=this.#t[e]}get assembled(){let e=0;for(let t=0;t<ee;t++){let n=this.#a[t],a=this.#n[t];e+=Math.sqrt(n*n+a*a)+Math.abs(this.#i[t])*6}return Math.exp(-e/ee/Si)}get pull(){if(this.#l!=="assembling"||this.#p!==xt)return 0;let e=xt.duration+xt.stagger,t=Math.min(1,(this.#x-this.#D)/e);return(1-t)*(1-t)}get resting(){return this.#A}get phase(){return this.#l}get whole(){return this.#l==="whole"}scatter(e=eo){for(let t=0;t<ee;t++){let n=this.#e()*Math.PI*2,a=(18+this.#e()*36)*this.#T;this.#S[t]=Math.cos(n)*a,this.#E[t]=Math.sin(n)*a*.7,this.#P[t]=(this.#e()*2-1)*1.6,this.#z[t]=this.#e()*e.stagger}this.#p=e,this.#c=!0,this.#C("assembling")}setPointer(e,t){this.#w=!0,this.#V=e,this.#$=t}clearPointer(){this.#w=!1}shatter(e,t){let n=this.#l==="broken";for(let a=0;a<ee;a++){let o=this.#r[a]+this.#a[a]-e,i=this.#t[a]+this.#n[a]-t,l=Math.hypot(o,i)||1,p=(26+this.#e()*34)/(1+l*.04)*this.#T,d=n?1:0;this.#h[a]=this.#h[a]*d+o/l*p+(this.#e()-.5)*6,this.#u[a]=this.#u[a]*d+i/l*p+(this.#e()-.5)*6,this.#f[a]=this.#f[a]*d+(this.#e()*2-1)*6}this.#C("broken")}hits(e,t){if(this.#l==="whole")return e>=-2&&e<=J.width+1&&t>=-2&&t<=J.height+1;for(let n=0;n<ee;n++){let a=this.#r[n]+this.#a[n]-e,o=this.#t[n]+this.#n[n]-t;if(a*a+o*o<36)return!0}return!1}#C(e){let t=this.#l==="whole";this.#l=e,this.#D=this.#x,this.#A=!1,t&&e!=="whole"&&this.onWhole(!1)}#k(){for(let e=0;e<ee;e++)this.#S[e]=this.#a[e],this.#E[e]=this.#n[e],this.#P[e]=this.#i[e],this.#z[e]=this.#e()*xt.stagger;this.#p=xt,this.#c=!1,this.#C("assembling")}step(e){this.#x+=e;let t=this.#x-this.#D;if(this.#M(e),this.#l==="broken"){let n=Math.exp(-Mi*e);for(let a=0;a<ee;a++)this.#a[a]+=this.#h[a]*e,this.#n[a]+=this.#u[a]*e,this.#i[a]+=this.#f[a]*e,this.#h[a]*=n,this.#u[a]*=n,this.#f[a]*=n;t>=ki&&this.#k()}else if(this.#l==="assembling"){let n=!0;for(let a=0;a<ee;a++){let o=Math.min(1,Math.max(0,(t-this.#z[a])/this.#p.duration));o<1&&(n=!1);let i=1-o,l=this.#p===xt?1-Ti(o):i*i*i*i*i;this.#a[a]=this.#S[a]*l,this.#n[a]=this.#E[a]*l,this.#i[a]=this.#P[a]*l}n&&(this.#a.fill(0),this.#n.fill(0),this.#i.fill(0),this.#l="whole",this.onWhole(!0),this.onSnap())}}#M(e){let t=Math.min(e,.03333333333333333),n=!1;for(let a=0;a<ee;a++){let o=0,i=0,l=0;if(this.#w){let p=this.#r[a]+this.#a[a]-this.#V,d=this.#t[a]+this.#n[a]-this.#$,m=Math.sqrt(p*p+d*d);if(m<to){let c=1-m/to,h=c*c,u=1/(m||1);o=p*u*so*h,i=d*u*so*h,l=(p>=0?1:-1)*Ci*h}}this.#g[a]+=(cn*(o-this.#v[a])-pn*this.#g[a])*t,this.#Q[a]+=(cn*(i-this.#d[a])-pn*this.#Q[a])*t,this.#j[a]+=(cn*(l-this.#y[a])-pn*this.#j[a])*t,this.#v[a]+=this.#g[a]*t,this.#d[a]+=this.#Q[a]*t,this.#y[a]+=this.#j[a]*t,(Math.abs(this.#v[a])+Math.abs(this.#d[a])>.01||Math.abs(this.#y[a])>.001||Math.abs(this.#g[a])+Math.abs(this.#Q[a])>.02)&&(n=!0)}this.#A=this.#l==="whole"&&!n}draw(e,t,n,a,o,i,l,p=1){let d=this.#x-this.#D;if(this.#A){e.save(),e.translate(t,n),e.scale(a,a),e.globalAlpha=l,e.strokeStyle=o,e.lineWidth=J.stroke(a),e.lineJoin="miter";for(let h=0;h<this.#s.length;h++)e.stroke(this.#s[h]);e.restore(),e.globalAlpha=1;return}let m=this.#I(a,p,o),c=a*p;e.save(),e.lineWidth=.35,e.strokeStyle=i;for(let h=0;h<ee;h++){let u=this.#a[h]+this.#v[h],b=this.#n[h]+this.#d[h],g=this.#i[h]+this.#y[h],y=this.#l==="assembling"&&this.#c?Math.min(1,Math.max(0,(d-this.#z[h])/(this.#p.duration*.35))):1;if(y<=0)continue;let w=Math.cos(g)*c,S=Math.sin(g)*c;e.setTransform(w,S,-S,w,(t+(this.#r[h]+u)*a)*p,(n+(this.#t[h]+b)*a)*p);let T=Math.abs(this.#a[h])+Math.abs(this.#n[h])+Math.abs(this.#i[h])*6,C=Math.abs(this.#v[h])+Math.abs(this.#d[h])+Math.abs(this.#y[h])*6,I=Math.min(1,T/8+C/3)*.22*l*y;if(I>.01&&(e.globalAlpha=I,e.stroke(this.#o[h])),e.globalAlpha=l*y,m){let D=this.#b,M=this.#R;e.drawImage(m,h%wt*D,(h/wt|0)*M,D,M,-D/(2*c),-M/(2*c),D/c,M/c)}else{e.save(),e.clip(this.#o[h]),e.translate(-this.#r[h],-this.#t[h]),e.strokeStyle=o,e.lineWidth=J.stroke(a),e.lineJoin="miter";for(let D=0;D<this.#s.length;D++)e.stroke(this.#s[D]);e.restore()}}e.restore(),e.globalAlpha=1}#I(e,t,n){let a=e*t;if(this.#F&&this.#q===a&&this.#W===n)return this.#F;if(typeof document>"u")return;let o=this.#F??document.createElement("canvas"),i=o.getContext("2d");if(!i)return;let l=0;for(let m=0;m<this.corners.length;m++)l=Math.max(l,Math.abs(this.corners[m]));let p=J.stroke(e)/2+.5,d=Math.ceil(2*(l+p)*a);this.#b=d,this.#R=d,o.width=d*wt,o.height=d*Math.ceil(ee/wt),i.clearRect(0,0,o.width,o.height),i.strokeStyle=n,i.lineWidth=J.stroke(e),i.lineJoin="miter";for(let m=0;m<ee;m++){i.setTransform(a,0,0,a,m%wt*d+d/2,(m/wt|0)*d+d/2),i.save(),i.clip(this.#o[m]),i.translate(-this.#r[m],-this.#t[m]);for(let c=0;c<this.#s.length;c++)i.stroke(this.#s[c]);i.restore()}return i.setTransform(1,0,0,1,0,0),this.#F=o,this.#q=a,this.#W=n,o}};var Li=.35,Pi={duration:.9,stagger:.3},zi=22;function Ai(){return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}function Fi(s){let e=Math.max(1,Math.round(s.scale??1)),t=J.width*e,n=J.height*e,a=zi*e,o=r("canvas",{class:ys.canvas,"aria-hidden":"true",style:{left:`${-a}px`,top:`${-a}px`,width:`${t+2*a}px`,height:`${n+2*a}px`}}),i=r("span",{class:s.class?`${ys.wordmark} ${s.class}`:ys.wordmark,style:{width:`${t}px`,height:`${n}px`},role:"img","aria-label":"Mol*",children:o}),l=o.getContext("2d"),d=Ai()||typeof Path2D!="function"||!l?void 0:new Ge(23,Li),m=a+e,c=1,h="currentColor",u="currentColor",b=()=>{if(!l)return;c=Math.min(2,globalThis.devicePixelRatio||1),o.width=Math.round((t+2*a)*c),o.height=Math.round((n+2*a)*c);let z=W=>(o.style.color=`var(${W})`,getComputedStyle(o).color),F=l.createLinearGradient(0,0,J.width-2,0);F.addColorStop(0,z("--msp-color-brand-1")),F.addColorStop(.35,z("--msp-color-brand-2")),F.addColorStop(.6,z("--msp-color-brand-3")),F.addColorStop(1,z("--msp-color-brand-4")),h=F,u=z("--msp-color-text-subtle"),o.style.color=""},g,y=()=>{if(l){if(l.setTransform(1,0,0,1,0,0),l.clearRect(0,0,o.width,o.height),l.setTransform(c,0,0,c,0,0),d){d.draw(l,m,m,e,h,u,1,c);return}l.translate(m,m),l.scale(e,e),l.strokeStyle=h,l.lineWidth=J.stroke(e),l.lineJoin="miter",g??=J.paths.map(z=>new Path2D(z));for(let z=0;z<g.length;z++)l.stroke(g[z])}},w=0,S=0,T=!0,C=z=>{if(w=0,!d||!T)return;let F=S?Math.min(.05,(z-S)/1e3):1/60;S=z,d.step(F),y(),d.resting?S=0:w=requestAnimationFrame(C)},I=()=>{!d||!T||w||(w=requestAnimationFrame(C))},D,M=z=>(D??=i.getBoundingClientRect(),{u:(z.clientX-D.left)/e-1,v:(z.clientY-D.top)/e-1});return d&&(i.addEventListener("pointerenter",()=>{D=i.getBoundingClientRect()}),i.addEventListener("pointermove",z=>{let F=M(z);d.setPointer(F.u,F.v),I()}),i.addEventListener("pointerleave",()=>{d.clearPointer(),D=void 0,I()}),i.addEventListener("pointerdown",z=>{let F=M(z);d.shatter(F.u,F.v),I()})),Jt(z=>{if(T=z,!z){w&&cancelAnimationFrame(w),w=0,S=0;return}requestAnimationFrame(()=>{T&&(b(),d&&(s.assemble?.()??!0)?(d.scatter(Pi),I()):y())})}),q(()=>{T=!1,w&&cancelAnimationFrame(w)}),i}N("components/virtual-list/virtual-list.module.css",`@layer msp.components {
.msp-virtual-list-list {
  flex: 1 1 0;
}

.msp-virtual-list-content {
  contain: strict;
  width: 100%;
  position: relative;
}

.msp-virtual-list-window {
  will-change: transform;
  position: absolute;
  inset: 0 0 auto;
}
}
`);var xs={label:"msp-canvas-hover-label-label",primary:"msp-canvas-hover-label-primary",secondary:"msp-canvas-hover-label-secondary"};N("views/canvas/hover-label.module.css",`@layer msp.components {
.msp-canvas-hover-label-label {
  z-index: var(--msp-z-tooltip);
  max-width: 280px;
  padding: var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  font-size: var(--msp-font-size-sm);
  pointer-events: none;
  will-change: transform;
  gap: 1px;
  display: grid;
  position: absolute;
  top: 0;
  left: 0;

  &[hidden] {
    display: none;
  }

  background: var(--msp-glass-panel-bg);
  box-shadow: var(--msp-glass-shadow);
}

.msp-canvas-hover-label-primary {
  font-weight: 600;
}

.msp-canvas-hover-label-secondary {
  color: var(--msp-color-text-muted);
}
}
`);var Mt=14;function Ri(s){let e=r("div",{class:xs.label,hidden:!0,role:"tooltip",children:r(Y,{each:s.model.lines,children:(c,h)=>r("span",{class:h.pipe(f(u=>u===0?xs.primary:xs.secondary)),children:c})})}),t=0,n=0,a=!1,o=!1,i=!1,l=0,p=()=>{l=0;let c=a&&!o&&i;if(e.hidden===c&&(e.hidden=!c),!c)return;let h=e.offsetParent;if(!h)return;let u=h.getBoundingClientRect(),b=t-u.left,g=n-u.top,y=e.offsetWidth,w=e.offsetHeight,S=b+Mt+y>h.clientWidth?b-Mt-y:b+Mt,T=g+Mt+w>h.clientHeight?g-Mt-w:g+Mt;e.style.transform=`translate(${Math.max(0,S)}px, ${Math.max(0,T)}px)`},d=()=>{l||(l=requestAnimationFrame(p))};U(s.model.lines,c=>{i=c.length>0,d()}),queueMicrotask(()=>{let c=s.area();if(!c)return;let h=s.over,u=g=>{t=g.clientX,n=g.clientY,a=!h||h(g.target),o=g.buttons!==0,d()},b=()=>{a=!1,d()};c.addEventListener("pointermove",u),c.addEventListener("pointerleave",b),m=()=>{c.removeEventListener("pointermove",u),c.removeEventListener("pointerleave",b)}});let m=()=>{};return q(()=>{m(),l&&cancelAnimationFrame(l)}),e}var j={ask:"msp-command-menu-ask",askIcon:"msp-command-menu-askIcon",askKeys:"msp-command-menu-askKeys",askLabel:"msp-command-menu-askLabel",askText:"msp-command-menu-askText",before:"msp-command-menu-before",caption:"msp-command-menu-caption",command:"msp-command-menu-command",crumb:"msp-command-menu-crumb",empty:"msp-command-menu-empty",error:"msp-command-menu-error",footer:"msp-command-menu-footer",head:"msp-command-menu-head",headIcon:"msp-command-menu-headIcon",hint:"msp-command-menu-hint",input:"msp-command-menu-input",keys:"msp-command-menu-keys",list:"msp-command-menu-list",listContent:"msp-command-menu-listContent",menu:"msp-command-menu-menu","menu-fade":"msp-command-menu-menu-fade","menu-in":"msp-command-menu-menu-in",message:"msp-command-menu-message",more:"msp-command-menu-more",proposed:"msp-command-menu-proposed",rest:"msp-command-menu-rest",row:"msp-command-menu-row",rowChevron:"msp-command-menu-rowChevron",rowIcon:"msp-command-menu-rowIcon",rowMeta:"msp-command-menu-rowMeta",rowTitle:"msp-command-menu-rowTitle",run:"msp-command-menu-run",scrim:"msp-command-menu-scrim",sentence:"msp-command-menu-sentence",spacer:"msp-command-menu-spacer",srOnly:"msp-command-menu-srOnly",tail:"msp-command-menu-tail",token:"msp-command-menu-token",value:"msp-command-menu-value",view:"msp-command-menu-view"};N("views/command-menu/command-menu.module.css",`@layer msp.components {
.msp-command-menu-scrim {
  z-index: var(--msp-z-dialog);
  padding: 12vh var(--msp-space-4) var(--msp-space-4);
  background: color-mix(in oklab, var(--msp-color-bg), transparent 75%);
  animation: msp-command-menu-menu-fade var(--msp-motion-fast) var(--msp-ease);
  justify-content: center;
  align-items: flex-start;
  display: flex;
  position: absolute;
  inset: 0;
}

@keyframes msp-command-menu-menu-fade {
  from {
    opacity: 0;
  }
}

.msp-command-menu-menu {
  border-radius: var(--msp-radius-lg);
  background: var(--msp-color-panel);
  width: min(560px, 100%);
  max-height: min(480px, 76vh);
  box-shadow: var(--msp-glass-shadow),
    0 12px 32px #0000001f;
  font-size: var(--msp-font-size-sm);
  animation: msp-command-menu-menu-in var(--msp-motion-base) var(--msp-ease);
  flex-direction: column;
  display: flex;
  overflow: hidden;
}

@keyframes msp-command-menu-menu-in {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
}

.msp-command-menu-head {
  align-items: center;
  gap: var(--msp-space-3);
  height: 40px;
  padding: 0 var(--msp-space-4);
  border-bottom: 1px solid var(--msp-glass-edge);
  flex: none;
  display: flex;
}

.msp-command-menu-headIcon {
  color: var(--msp-color-text-subtle);
  flex: none;
}

.msp-command-menu-input {
  min-width: 0;
  height: 100%;
  color: var(--msp-color-text);
  font: inherit;
  font-size: var(--msp-font-size-md);
  background: none;
  border: 0;
  outline: none;
  flex: 1;

  &::placeholder {
    color: var(--msp-color-text-subtle);
  }
}

.msp-command-menu-command {
  align-items: center;
  gap: var(--msp-space-2);
  height: 26px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-accent), transparent 85%);
  color: var(--msp-color-accent);
  font-size: var(--msp-font-size-sm);
  flex: none;
  font-weight: 600;
  display: flex;
}

.msp-command-menu-message, .msp-command-menu-error {
  padding: var(--msp-space-2) var(--msp-space-4);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  margin: 0;
}

.msp-command-menu-error {
  color: var(--msp-color-danger);
}

.msp-command-menu-hint {
  color: var(--msp-color-text-muted);
}

.msp-command-menu-list {
  flex: 1;
  min-height: 0;

  &:has(.msp-command-menu-listContent:empty) {
    display: none;
  }
}

.msp-command-menu-listContent {
  padding: var(--msp-space-2);
}

.msp-command-menu-empty {
  padding: var(--msp-space-5) var(--msp-space-4);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-sm);
  text-align: center;
  margin: 0;
}

.msp-command-menu-rest {
  pointer-events: none;
}

.msp-command-menu-caption {
  padding: var(--msp-space-3) var(--msp-space-3) var(--msp-space-1);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-command-menu-row {
  align-items: center;
  gap: var(--msp-space-3);
  height: 28px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text);
  cursor: default;
  grid-template-columns: 16px minmax(0, 1fr) auto auto;
  grid-auto-flow: column;
  display: grid;

  &[aria-selected="true"] {
    background: var(--msp-color-hover);
  }

  &[aria-selected="true"] .msp-command-menu-rowMeta {
    color: var(--msp-color-text-muted);
  }

  &[aria-disabled="true"] {
    color: var(--msp-color-text-subtle);
  }
}

.msp-command-menu-rowIcon {
  color: var(--msp-color-text-muted);
  place-items: center;
  display: grid;
}

.msp-command-menu-rowTitle {
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;

  & mark {
    color: var(--msp-color-accent-strong);
    background: none;
    font-weight: 600;
  }
}

.msp-command-menu-tail {
  margin-left: var(--msp-space-2);
  color: var(--msp-color-text-muted);
}

.msp-command-menu-rowMeta {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-command-menu-sentence {
  align-items: center;
  gap: var(--msp-space-2);
  padding: var(--msp-space-3) var(--msp-space-4);
  border-bottom: 1px solid var(--msp-glass-edge);
  flex-wrap: wrap;
  flex: none;
  display: flex;
}

.msp-command-menu-token {
  align-items: center;
  gap: var(--msp-space-2);
  display: inline-flex;
}

.msp-command-menu-before {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-sm);
}

.msp-command-menu-value {
  height: 26px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);

  &:hover {
    background: var(--msp-color-hover);
  }

  &[data-empty] {
    color: var(--msp-color-text-subtle);
  }

  &[data-missing] {
    box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-danger), transparent 50%);
  }

  &[data-active] {
    box-shadow: inset 0 0 0 1.5px var(--msp-color-accent);
  }
}

.msp-command-menu-spacer {
  flex: 1;
}

.msp-command-menu-view {
  align-items: center;
  gap: var(--msp-space-1);
  height: 28px;
  padding: 0 var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  white-space: nowrap;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-command-menu-run {
  align-items: center;
  gap: var(--msp-space-2);
  height: 28px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-accent);
  color: var(--msp-color-on-accent);
  font-size: var(--msp-font-size-sm);
  font-weight: 600;
  display: flex;

  & kbd {
    box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-on-accent), transparent 50%);
    color: inherit;
    background: none;
  }
}

.msp-command-menu-more {
  padding: var(--msp-space-2) var(--msp-space-4);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
}

.msp-command-menu-footer {
  gap: var(--msp-space-2) var(--msp-space-4);
  padding: var(--msp-space-2) var(--msp-space-4);
  border-top: 1px solid var(--msp-glass-edge);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  flex-wrap: wrap;
  flex: none;
  display: flex;

  & > span {
    align-items: center;
    gap: var(--msp-space-1);
    display: inline-flex;
  }
}

.msp-command-menu-footer kbd, .msp-command-menu-keys, .msp-command-menu-run kbd {
  min-width: 18px;
  height: 18px;
  padding: 0 var(--msp-space-1);
  border-radius: var(--msp-radius-sm);
  background: var(--msp-color-bg);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge),
    inset 0 -1px 0 var(--msp-glass-edge);
  color: var(--msp-color-text-muted);
  font: inherit;
  font-family: var(--msp-font-mono);
  place-items: center;
  font-size: 10px;
  line-height: 1;
  display: inline-grid;
}

.msp-command-menu-crumb {
  align-items: center;
  gap: var(--msp-space-1);
  height: 24px;
  padding: 0 var(--msp-space-1) 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  flex: none;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-command-menu-rowChevron {
  color: var(--msp-color-text-subtle);
}

.msp-command-menu-ask {
  align-items: center;
  gap: var(--msp-space-3);
  min-height: 32px;
  margin: 0 var(--msp-space-2) var(--msp-space-2);
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  flex: none;
  grid-template-columns: 16px auto minmax(0, 1fr) auto;
  display: grid;

  &:hover, &[data-default] {
    background: var(--msp-color-hover);
  }

  &[data-setup] {
    color: var(--msp-color-text-muted);
    grid-template-columns: 16px minmax(0, 1fr);

    & .msp-command-menu-askIcon {
      color: var(--msp-color-text-subtle);
    }
  }
}

.msp-command-menu-askIcon {
  color: var(--msp-color-accent);
  justify-self: center;
}

.msp-command-menu-askLabel {
  color: var(--msp-color-text);
  font-weight: 500;
}

.msp-command-menu-askText {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  color: var(--msp-color-text-muted);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-command-menu-askKeys {
  color: var(--msp-color-text-subtle);
  font-family: inherit;
  font-size: var(--msp-font-size-xs);
  flex: none;
}

.msp-command-menu-proposed {
  align-items: center;
  gap: var(--msp-space-2);
  margin: var(--msp-space-2) var(--msp-space-2) 0;
  padding: var(--msp-space-1) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-accent), transparent 90%);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
  display: flex;
}

.msp-command-menu-srOnly {
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
}
}
`);function Ii(s,e,t,n){let a=s.assistant,o=t.trim();return a.ready()?{id:"assistant-ask",label:"Ask AI assistant",detail:`\u201C${o}\u201D`,icon:"sparkles",run:()=>{let i=a.propose(o);if(i)return n(o),e.open(i.command,i.tail).kind==="form";a.ask(o)}}:{id:"assistant-setup",label:"Set up the assistant to ask",detail:`\u201C${o}\u201D`,icon:"sparkles",run:()=>a.setup()}}var Ht=24,no=28;function Hi(s){let{manager:e}=s,t=V(void 0);U(e.active,o=>{o||t.set(void 0)}),U(e.outcomes,o=>{o.kind==="done"&&s.onClose()}),q(()=>e.close());let n=Ie(),a;return q(()=>n(a)),r("div",{class:j.scrim,"data-keeps-card":"",onPointerDown:o=>{o.target===o.currentTarget&&s.onClose()},children:r("div",{class:j.menu,role:"dialog","aria-modal":"true","aria-label":"Commands",ref:o=>{a=o},onKeyDown:o=>{is(o,o.currentTarget),!(o.key!=="Escape"||o.defaultPrevented)&&(o.preventDefault(),o.stopPropagation(),s.onClose())},children:r(P,{when:e.active,fallback:()=>r(Oi,{...s,onPropose:o=>t.set(o)}),children:o=>r(Gi,{manager:e,invocation:o,proposed:t.asReadonly,onClose:s.onClose,...s.direct?{direct:!0}:{}})})})})}function Oi(s){let{manager:e}=s,t=V(s.initial??""),n=V(s.group),a=V(0),o=V(void 0),i=Ee("msp-command-list"),l=v=>`${i}-${v}`,p=[...s.prefixes??[],Bi(s,v=>D(v))],d=v=>p.find(k=>v.startsWith(k.char)),m=B([t.asReadonly,n.asReadonly,e.commands,e.groups]).pipe(f(([v,k])=>{let R=[],G=0,K=X=>{X.kind!=="caption"&&(X.index=G++),R.push(X)},oe=d(v);if(oe){for(let X of oe.items(v.slice(oe.char.length).trimStart()))K({kind:"item",item:X,index:0});return R}if(!v.trim()){let{groups:X,commands:pe}=e.children(k);if(k===void 0){let ae=e.query("");if(ae.recent.length){K({kind:"caption",label:"Recent"});for(let fe of ae.recent)K({kind:"match",match:fe,index:0})}X.length&&K({kind:"caption",label:"Browse"})}for(let ae of X)K({kind:"group",group:ae,index:0});if(k!==void 0){let ae=new Set(pe.map(Pe=>Pe.command.category)),fe;for(let Pe of pe)ae.size>1&&Pe.command.category!==fe&&(fe=Pe.command.category,K({kind:"caption",label:fe})),K({kind:"match",match:Pe,index:0});return R}let $e=new Set(e.query("").recent.map(ae=>ae.command)),Me=new Map;for(let ae of pe){if($e.has(ae.command))continue;let fe=Me.get(ae.command.category);fe?fe.push(ae):Me.set(ae.command.category,[ae])}for(let[ae,fe]of Me){K({kind:"caption",label:ae});for(let Pe of fe)K({kind:"match",match:Pe,index:0})}return R}let le=e.query(v),de=X=>k===void 0||e.inGroup(X.command,k);le.direct&&de(le.direct)&&K({kind:"match",match:le.direct,tail:le.direct.tail,index:0});let ke=e.groups.value.filter(X=>(k===void 0||e.groupPath(X.id).some(pe=>pe.id===k))&&X.id!==k&&(_n(X.title,v)??-1)>=0);for(let X of ke)K({kind:"group",group:X,index:0});for(let X of le.matches)X.command!==le.direct?.command&&de(X)&&K({kind:"match",match:X,index:0});return R}),it({bufferSize:1,refCount:!0})),c=[],h=()=>c.filter(v=>v.kind!=="caption"),u=()=>{if(!s.assistant)return;if(!s.assistant.ready()){s.assistant.setup(),s.onClose();return}if(!t.value.trim()||d(t.value))return;!Ii(s,e,t.value,s.onPropose).run()&&!e.active.value&&s.onClose()},b=B([t.asReadonly,m]).pipe(f(([v,k])=>!!v.trim()&&!d(v)&&!k.some(R=>R.kind!=="caption")),H());U(m,v=>{c=v,a.value>=h().length&&a.set(0)});let g=V({n:Ht}),y=B([m,g.asReadonly]).pipe(f(([v,k])=>v.length<=(k.of===v?k.n:Ht)?v:v.slice(0,k.of===v?k.n:Ht)),H((v,k)=>v.length===k.length&&v[0]===k[0]&&v[v.length-1]===k[k.length-1])),w=B([m,y]).pipe(f(([v,k])=>(v.length-k.length)*no),H()),S=v=>{let k=g.value,R=k.of===c?k.n:Ht;v>R&&R<c.length&&g.set({of:c,n:Math.max(v,R+Ht)})};U(a.asReadonly,v=>{let k=c.findIndex(R=>R.kind!=="caption"&&R.index===v);k>=0&&S(k+1)});let T=Yn(a.asReadonly),C=B([a.asReadonly,m]).pipe(f(([v,k])=>k.some(R=>R.kind!=="caption")?l(v):void 0),H()),I=B([t.asReadonly,m]).pipe(_t(400),f(([v,k])=>{if(!v.trim())return"";let R=k.filter(G=>G.kind!=="caption").length;return R?R===1?"1 result":`${R} results`:s.assistant?"No command matches: ask AI assistant.":"Nothing matches."}),H()),D=v=>{t.set(v),$.value=v,a.set(0),o.set(void 0)},M=v=>{n.set(v),D("")},z=v=>{if(v.kind==="group")return M(v.group.id);if(v.kind==="item"){!v.item.run()&&!e.active.value&&s.onClose();return}if(v.match.blocked)return o.set(v.match.blocked);let k=e.open(v.match.command.id,v.tail,v.match.preset?.id);k.kind==="blocked"?o.set(k.reason):k.kind==="ran"&&s.onClose()},F=()=>{let v=e.groupPath(n.value);return v.length?(M(v[v.length-2]?.id),!0):!1},W=B([t.asReadonly,n.asReadonly]).pipe(f(([v,k])=>{let R=d(v);return R?R.placeholder??R.title:k===void 0?"Search commands, or type ? for help":`Search in ${e.groupPath(k).pop()?.title}`})),$=r("input",{class:j.input,type:"text",role:"combobox","aria-expanded":"true","aria-controls":i,"aria-autocomplete":"list","aria-activedescendant":C,"aria-label":"Command",placeholder:W,spellcheck:!1,value:t,onInput:v=>{t.set(v.currentTarget.value),a.set(0),o.set(void 0)},onKeyDown:v=>{let k=h().length,R=!v.currentTarget.value;if(v.key==="ArrowDown"||v.key==="ArrowUp")v.preventDefault(),k&&a.set((a.value+(v.key==="ArrowDown"?1:k-1))%k);else if(v.key==="Enter"){v.preventDefault();let G=h()[a.value];v.metaKey||v.ctrlKey?u():G?z(G):u()}else if(v.key==="ArrowRight"&&R){let G=h()[a.value];G?.kind==="group"&&(v.preventDefault(),M(G.group.id))}else(v.key==="Backspace"||v.key==="ArrowLeft")&&R?F()&&v.preventDefault():v.key==="Escape"&&(v.preventDefault(),v.stopPropagation(),s.onClose())}});return queueMicrotask(()=>$.focus()),x(se,{children:[x("div",{class:j.head,children:[r(L,{name:"search",size:15,class:j.headIcon}),r(Y,{each:n.asReadonly.pipe(f(v=>e.groupPath(v))),children:v=>x("button",{type:"button",class:j.crumb,onClick:()=>M(v.id),children:[v.title,r(L,{name:"chevron-right",size:12})]})}),$]}),r(P,{when:o,children:v=>r("p",{class:j.message,role:"alert",children:v})}),r("span",{class:j.srOnly,role:"status","aria-live":"polite",children:I}),x(ie,{class:j.list,contentClass:j.listContent,id:i,role:"listbox","aria-label":"Commands",viewportRef:v=>{let k=()=>S(Math.ceil((v.scrollTop+2*v.clientHeight)/no));v.addEventListener("scroll",k,{passive:!0}),q(()=>v.removeEventListener("scroll",k))},children:[r(Y,{each:y,fallback:()=>r("p",{class:j.empty,children:s.assistant?"No command matches: ask AI assistant.":"Nothing matches."}),children:v=>{if(v.kind==="caption")return r("div",{class:j.caption,role:"presentation",children:v.label});let k=v.index,R=l(k),G=T.is(k),K=()=>a.set(k);return v.kind==="group"?r(Ni,{id:R,manager:e,group:v.group,selected:G,onPick:()=>z(v),onHover:K}):v.kind==="item"?r(ji,{id:R,item:v.item,selected:G,onPick:()=>z(v),onHover:K}):r(Vi,{id:R,row:v,path:$i(e,v.match.command.group,n.value),inGroup:n.value!==void 0,query:t.asReadonly,selected:G,onPick:()=>z(v),onHover:K})}}),r(P,{when:w.pipe(f(v=>v>0)),children:()=>r("div",{class:j.rest,role:"presentation",style:{height:w.pipe(f(v=>`${v}px`))}})})]}),s.assistant?r(Di,{ready:s.assistant.ready(),text:t.asReadonly.pipe(f(v=>d(v)?"":v.trim())),unmatched:b,onAsk:()=>{s.assistant?.ready()?t.value.trim()?u():$.focus():(s.assistant?.setup(),s.onClose())}}):null,r(ao,{hints:[["\u2191\u2193","move"],["\u21B5","run"],...s.assistant?.ready()?[[$s()?"\u2318\u21B5":"Ctrl+\u21B5","ask"]]:[],["\u2192","open group"],["?","help"],["esc","close"]]})]})}function Di(s){return s.ready?x("button",{type:"button",class:j.ask,"data-default":s.unmatched.pipe(f(e=>e?"":void 0)),onClick:()=>s.onAsk(),children:[r(L,{name:"sparkles",size:15,class:j.askIcon}),r("span",{class:j.askLabel,children:"Ask AI assistant"}),r("span",{class:j.askText,children:s.text.pipe(f(e=>e?`\u201C${e}\u201D`:"describe what you want, in your words"))}),r("kbd",{class:j.askKeys,children:s.unmatched.pipe(f(e=>e?"\u21B5":$s()?"\u2318\u21B5":"Ctrl+\u21B5"))})]}):x("button",{type:"button",class:j.ask,"data-setup":"",onClick:()=>s.onAsk(),children:[r(L,{name:"sparkles",size:15,class:j.askIcon}),r("span",{class:j.askText,children:"Set up an AI assistant"})]})}function $i(s,e,t){let n=s.groupPath(e),a=t===void 0?-1:n.findIndex(o=>o.id===t);return n.slice(a+1).map(o=>o.title)}function Bi(s,e){return{char:"?",title:"Help",placeholder:"Prefixes and shortcuts",items:t=>{let n=t.toLowerCase(),a=(s.prefixes??[]).map(l=>({id:`prefix:${l.char}`,label:`${l.char}  ${l.title}`,detail:l.placeholder,icon:"command",run:()=>(e(l.char),!0)})),o=s.manager.commands.value.filter(l=>l.shortcut).map(l=>({id:`keys:${l.id}`,label:l.title,detail:Bs(l.shortcut),icon:l.icon??"keyboard",run:()=>{s.manager.open(l.id)}}));return[...s.manager.get("help.show")?[{id:"help:card",label:"Keyboard and mouse",detail:"The Help card",icon:"circle-help",run:()=>{s.manager.open("help.show")}}]:[],...a,...o].filter(l=>!n||l.label.toLowerCase().includes(n))}}}function Ni(s){let e=s.manager.groupPath(s.group.parent).map(n=>n.title),t=x("div",{id:s.id,class:j.row,role:"option","aria-selected":s.selected,onClick:()=>s.onPick(),onPointerMove:()=>s.onHover(),children:[r("span",{class:j.rowIcon,children:r(L,{name:s.group.icon??"list-tree",size:15})}),r("span",{class:j.rowTitle,children:s.group.title}),r("span",{class:j.rowMeta,children:e.join(" \u203A ")}),r(L,{name:"chevron-right",size:14,class:j.rowChevron})]});return U(s.selected,n=>n&&queueMicrotask(()=>t.scrollIntoView?.({block:"nearest"}))),t}function ji(s){let{item:e}=s,t=x("div",{id:s.id,class:j.row,role:"option","aria-selected":s.selected,onClick:()=>s.onPick(),onPointerMove:()=>s.onHover(),children:[r("span",{class:j.rowIcon,children:e.icon?r(L,{name:e.icon,size:15}):null}),r("span",{class:j.rowTitle,children:e.label}),r("span",{class:j.rowMeta,children:e.detail})]});return U(s.selected,n=>n&&queueMicrotask(()=>t.scrollIntoView?.({block:"nearest"}))),t}function Vi(s){let{match:e,tail:t}=s.row,n=e.command,a=e.preset?`${n.title.replace(/…$/,"")} ${e.preset.title}`:n.title,o=x("div",{id:s.id,class:j.row,role:"option","aria-selected":s.selected,"aria-disabled":e.blocked?"true":void 0,onClick:()=>s.onPick(),onPointerMove:()=>s.onHover(),children:[r("span",{class:j.rowIcon,children:n.icon?r(L,{name:n.icon,size:15}):null}),x("span",{class:j.rowTitle,children:[s.query.pipe(f(i=>qi(a,t?"":i))),t?r("span",{class:j.tail,children:t}):null]}),r("span",{class:j.rowMeta,children:e.blocked??(s.path.length?s.path.join(" \u203A "):s.inGroup?"":n.category)}),n.shortcut?r("kbd",{class:j.keys,children:Bs(n.shortcut)}):null]});return U(s.selected,i=>{i&&queueMicrotask(()=>o.scrollIntoView?.({block:"nearest"}))}),o}function qi(s,e){let t=new Set(Zn(s,e));if(!t.size)return s;let n=[],a="",o=!1,i=()=>{a&&(n.push(o?r("mark",{children:a}):a),a="")};for(let l=0;l<s.length;l++){let p=t.has(l);p!==o&&(i(),o=p),a+=s[l]}return i(),r(se,{children:n})}function Gi(s){let{manager:e,invocation:t}=s,n=t.state,a=t.command,o=n.pipe(f(c=>c.fields.find(h=>h.id===c.field)),H()),i=Ee("msp-command-options"),l=c=>`${i}-${c}`,p=r("input",{class:j.input,type:"text",role:"combobox","aria-expanded":n.pipe(f(c=>c.completions.length>0)),"aria-controls":i,"aria-autocomplete":"list","aria-activedescendant":n.pipe(f(c=>c.pick>=0&&c.pick<c.completions.length?l(c.pick):void 0),H()),"aria-label":o.pipe(f(c=>c?.label??a.title)),placeholder:o.pipe(f(c=>c?c.label:"Enter to run")),spellcheck:!1,value:n.pipe(f(c=>c.text)),onInput:c=>t.type(c.currentTarget.value),onKeyDown:c=>{c.key==="Enter"&&c.altKey&&a.view?(c.preventDefault(),m()):c.key==="Enter"?(c.preventDefault(),t.enter()):c.key==="Tab"?(c.preventDefault(),t.tab(c.shiftKey?-1:1)):c.key==="ArrowDown"||c.key==="ArrowUp"?(c.preventDefault(),t.move(c.key==="ArrowDown"?1:-1)):c.key==="Backspace"&&!c.currentTarget.value?(c.preventDefault(),t.back()||d()):c.key==="Escape"&&(c.preventDefault(),c.stopPropagation(),d())}});queueMicrotask(()=>p.focus());let d=()=>{e.close(),s.direct&&s.onClose()},m=()=>{let c=a.view;c&&(e.close(),s.onClose(),c.open(e.context.value))};return x(se,{children:[r(P,{when:s.proposed,children:c=>x("p",{class:j.proposed,children:[r(L,{name:"sparkles",size:13,class:j.askIcon}),"Proposed by the assistant from \u201C",c,"\u201D: check it, then Enter to run"]})}),x("div",{class:j.head,children:[x("span",{class:j.command,children:[a.icon?r(L,{name:a.icon,size:15}):null,a.title.replace(/…$/,"")]}),p]}),x("div",{class:j.sentence,"aria-label":"Arguments",children:[r(Y,{each:n.pipe(f(c=>c.fields)),children:c=>r(Wi,{field:c,state:n,onFocus:()=>{t.focus(c.id),p.focus()}})},c=>c.id),r("span",{class:j.spacer}),a.view?x("button",{type:"button",class:j.view,title:`Open ${a.view.title} (\u2325\u21B5)`,onClick:m,children:[a.view.title,r(L,{name:"chevron-right",size:13})]}):null,x("button",{type:"button",class:j.run,onClick:()=>{t.enter()},children:[n.pipe(f(c=>c.action)),r("kbd",{children:"\u21B5"})]})]}),r(P,{when:n.pipe(f(c=>c.error)),children:c=>x("p",{class:j.error,role:"alert",children:[c.message,c.hint?x("span",{class:j.hint,children:[" ",c.hint]}):null]})}),r(ie,{class:j.list,contentClass:j.listContent,id:i,role:"listbox","aria-label":"Options",children:r(Y,{each:n.pipe(f(c=>c.completions)),children:(c,h)=>x("div",{id:h.pipe(f(l)),class:j.row,role:"option","aria-selected":B([n,h]).pipe(f(([u,b])=>u.pick===b)),onClick:()=>t.accept(h.value),onPointerMove:()=>t.point(h.value),children:[r("span",{class:j.rowIcon}),r("span",{class:j.rowTitle,children:c.label}),r("span",{class:j.rowMeta,children:c.detail??(c.value!==c.label?c.value:"")})]})})}),r(P,{when:n.pipe(f(c=>c.formOnly.length>0)),children:()=>r("p",{class:j.more,children:n.pipe(f(c=>`+ ${c.formOnly.length} more option${c.formOnly.length>1?"s":""} at their defaults`))})}),r(ao,{hints:[["tab","next field"],["\u21B5","run"],...a.view?[["\u2325\u21B5","open in the UI"]]:[],["\u232B","back"],s.direct?["esc","close"]:["esc","commands"]]})]})}function Wi(s){let{field:e}=s,t=s.state.pipe(f(n=>{let a=n.values[e.id];if(!(a===void 0||a===""))return e.options?.find(o=>o.value===String(a))?.label??String(a)}));return x("span",{class:j.token,children:[e.before?r("span",{class:j.before,children:e.before}):null,r("button",{type:"button",class:j.value,"data-active":s.state.pipe(f(n=>n.field===e.id?"":void 0)),"data-missing":s.state.pipe(f(n=>n.missing.includes(e.id)?"":void 0)),"data-empty":t.pipe(f(n=>n===void 0?"":void 0)),onClick:()=>s.onFocus(),children:t.pipe(f(n=>n??e.label))})]})}function ao(s){return r("div",{class:j.footer,children:s.hints.map(([e,t])=>x("span",{children:[r("kbd",{children:e})," ",t]}))})}var A={announce:"msp-shell-canvas-announce",bottom:"msp-shell-canvas-bottom",bottomGrid:"msp-shell-canvas-bottomGrid",busy:"msp-shell-canvas-busy","busy-in":"msp-shell-canvas-busy-in","busy-slide":"msp-shell-canvas-busy-slide","busy-spin":"msp-shell-canvas-busy-spin",busyActions:"msp-shell-canvas-busyActions",busyBar:"msp-shell-canvas-busyBar",busyCard:"msp-shell-canvas-busyCard",busyHead:"msp-shell-canvas-busyHead",busyLabel:"msp-shell-canvas-busyLabel",busyPercent:"msp-shell-canvas-busyPercent",busySpin:"msp-shell-canvas-busySpin",busyTrack:"msp-shell-canvas-busyTrack",caption:"msp-shell-canvas-caption",card:"msp-shell-canvas-card","card-in":"msp-shell-canvas-card-in",cardBody:"msp-shell-canvas-cardBody",cardBodyContent:"msp-shell-canvas-cardBodyContent",cardBodyFill:"msp-shell-canvas-cardBodyFill",cardHeader:"msp-shell-canvas-cardHeader",cardTitle:"msp-shell-canvas-cardTitle",chip:"msp-shell-canvas-chip",context:"msp-shell-canvas-context",corner:"msp-shell-canvas-corner",countdown:"msp-shell-canvas-countdown",face:"msp-shell-canvas-face",frame:"msp-shell-canvas-frame",lead:"msp-shell-canvas-lead",menuMark:"msp-shell-canvas-menuMark",message:"msp-shell-canvas-message",pill:"msp-shell-canvas-pill","pill-in":"msp-shell-canvas-pill-in",pillButton:"msp-shell-canvas-pillButton",pillMain:"msp-shell-canvas-pillMain",progress:"msp-shell-canvas-progress",railMenu:"msp-shell-canvas-railMenu",railMenuAnchor:"msp-shell-canvas-railMenuAnchor",railMenuButton:"msp-shell-canvas-railMenuButton",railMenuDivider:"msp-shell-canvas-railMenuDivider",railMenuList:"msp-shell-canvas-railMenuList",railToggle:"msp-shell-canvas-railToggle",sections:"msp-shell-canvas-sections",spin:"msp-shell-canvas-spin",stack:"msp-shell-canvas-stack",stackTools:"msp-shell-canvas-stackTools",status:"msp-shell-canvas-status",text:"msp-shell-canvas-text",tool:"msp-shell-canvas-tool","tool-menu-in":"msp-shell-canvas-tool-menu-in",toolMenu:"msp-shell-canvas-toolMenu",toolMenuCard:"msp-shell-canvas-toolMenuCard",toolMenuCheck:"msp-shell-canvas-toolMenuCheck",toolMenuDivider:"msp-shell-canvas-toolMenuDivider",toolMenuHint:"msp-shell-canvas-toolMenuHint",toolMenuLabel:"msp-shell-canvas-toolMenuLabel",toolMenuRow:"msp-shell-canvas-toolMenuRow",toolbar:"msp-shell-canvas-toolbar",toolbarSlot:"msp-shell-canvas-toolbarSlot"};N("views/shell/canvas.module.css",`@layer msp.components {
.msp-shell-canvas-frame {
  border-radius: var(--msp-radius-lg);
  background: var(--msp-glass-bg);
  width: 44px;
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  flex-direction: column;
  display: flex;
  overflow: hidden;

  & > * + *, & .msp-shell-canvas-stackTools > * + *, & .msp-shell-canvas-sections > * + * {
    border-top: 1px solid var(--msp-glass-edge);
  }

  & .msp-shell-canvas-sections:empty, & .msp-shell-canvas-toolbar:not(:has(button)) {
    display: none;
  }
}

.msp-shell-canvas-sections, .msp-shell-canvas-toolbar {
  flex-direction: column;
  display: flex;
}

.msp-shell-canvas-tool {
  width: 100%;
  height: max(var(--msp-rail-button, 40px), var(--msp-touch-target, 0px));
  color: var(--msp-color-text-muted);
  place-items: center;
  display: grid;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[aria-pressed="true"] {
    background: var(--msp-color-control);
    box-shadow: inset 0 0 0 1px var(--msp-selected-edge);
    color: var(--msp-color-accent);
  }
}

.msp-shell-canvas-card {
  top: var(--msp-canvas-edge);
  right: var(--msp-canvas-panel-right, 64px);
  bottom: calc(var(--msp-canvas-edge) + var(--msp-corner-room, 0px));
  z-index: var(--msp-z-overlay);
  width: min(var(--msp-right-panel-width, 340px), calc(100% - 96px));
  border-radius: var(--msp-radius-lg);
  contain: content;
  animation: msp-shell-canvas-card-in var(--msp-motion-base) var(--msp-ease);
  background: var(--msp-glass-panel-bg);
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  flex-direction: column;
  display: flex;
  position: absolute;
  overflow: hidden;

  [data-right-panel="open"] > & {
    animation: none;
  }

  [data-pinned] > & {
    top: 0;
    right: calc(var(--msp-canvas-rail-inset, 52px) - var(--msp-canvas-edge));
    box-shadow: -1px 0 0 var(--msp-glass-edge),
      inset -1px 0 0 var(--msp-glass-edge);
    border-radius: 0;
    bottom: 0;
  }
}

@keyframes msp-shell-canvas-card-in {
  from {
    opacity: 0;
    transform: translateX(8px);
  }
}

.msp-shell-canvas-cardHeader {
  align-items: center;
  gap: var(--msp-space-3);
  height: 40px;
  padding: 0 var(--msp-space-3) 0 var(--msp-space-4);
  font-weight: 600;
  display: flex;
}

.msp-shell-canvas-cardTitle {
  font-size: inherit;
  font-weight: inherit;
  flex: 1;
}

.msp-shell-canvas-cardBody {
  flex: 1 1 0;
  min-height: 0;
}

.msp-shell-canvas-cardBodyFill {
  flex-direction: column;
  flex: 1 1 0;
  min-height: 0;
  display: flex;
}

.msp-shell-canvas-cardBodyContent {
  flex-direction: column;
  min-height: 100%;
  display: flex;
}

.msp-shell-canvas-stack:not(:has(button)) {
  display: none;
}

.msp-shell-canvas-stack {
  --msp-stack-row: max(34px, min(var(--msp-touch-target, 0px), 38px));
  transition: opacity var(--msp-motion-fade) var(--msp-ease-reveal);
  position: relative;

  @starting-style {
    opacity: 0;
  }

  &[data-quiet] {
    opacity: 0;
    pointer-events: none;
  }
}

.msp-shell-canvas-railToggle {
  right: calc((44px - var(--msp-stack-row)) / 2);
  bottom: var(--msp-canvas-edge);
  z-index: var(--msp-z-overlay);
  pointer-events: auto;
  position: absolute;
}

.msp-shell-canvas-corner {
  justify-self: end;
  align-items: flex-end;
  gap: var(--msp-space-3);
  flex-flow: row-reverse wrap-reverse;
  grid-area: corner;
  max-width: 100%;
  display: flex;
}

.msp-shell-canvas-stack .msp-shell-canvas-frame {
  width: auto;
  height: var(--msp-stack-row);
  flex-direction: row;
  max-width: 100%;

  & > * + *, & .msp-shell-canvas-stackTools > * + * {
    border-top: 0;
    border-left: 1px solid var(--msp-glass-edge);
  }
}

.msp-shell-canvas-stackTools, .msp-shell-canvas-stack .msp-shell-canvas-sections, .msp-shell-canvas-stack .msp-shell-canvas-toolbar {
  flex-direction: row;
  display: flex;
}

.msp-shell-canvas-stack .msp-shell-canvas-sections > * + * {
  border-top: 0;
  border-left: 1px solid var(--msp-glass-edge);
}

.msp-shell-canvas-stack .msp-shell-canvas-tool {
  width: var(--msp-stack-row);
  height: var(--msp-stack-row);

  [data-mode="compact"] & svg {
    width: 18px;
    height: 18px;
  }

  flex: none;
}

.msp-shell-canvas-stack :is(.msp-shell-canvas-tool, button) > svg:first-child {
  width: 18px;
  height: 18px;
}

.msp-shell-canvas-tool[data-captioned] {
  justify-content: center;
  gap: var(--msp-space-1);
  height: var(--msp-rail-button-captioned, 46px);
  flex-direction: column;
  display: flex;
}

.msp-shell-canvas-tool > svg, .msp-shell-canvas-tool > .msp-shell-canvas-face > svg {
  width: var(--msp-rail-icon, 20px);
  height: var(--msp-rail-icon, 20px);
}

.msp-shell-canvas-tool[data-captioned] > svg, .msp-shell-canvas-tool[data-captioned] > .msp-shell-canvas-face > svg {
  width: var(--msp-rail-icon-captioned, 16px);
  height: var(--msp-rail-icon-captioned, 16px);
}

.msp-shell-canvas-caption {
  color: var(--msp-color-text-subtle);
  font-variant-numeric: tabular-nums;
  font-size: 10px;
  line-height: 1;
}

.msp-shell-canvas-tool {
  position: relative;
}

.msp-shell-canvas-face {
  display: contents;
}

.msp-shell-canvas-menuMark {
  opacity: .45;
  border-top: 4px solid #0000;
  border-right: 4px solid;
  position: absolute;
  bottom: 5px;
  right: 5px;
}

.msp-shell-canvas-toolMenu {
  z-index: var(--msp-z-overlay);
  padding-bottom: var(--msp-space-3);
  animation: msp-shell-canvas-tool-menu-in var(--msp-motion-fast) var(--msp-ease);
  position: absolute;
  bottom: 100%;
}

@keyframes msp-shell-canvas-tool-menu-in {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
}

.msp-shell-canvas-toolMenuCard {
  min-width: 200px;
  padding: var(--msp-space-2);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-glass-panel-bg);
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  display: grid;
}

.msp-shell-canvas-toolMenuRow {
  align-items: center;
  gap: var(--msp-space-3);
  min-height: 32px;
  padding: var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  grid-template-columns: 16px 1fr auto;
  display: grid;

  &:hover:not(:disabled), &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[data-choice][aria-checked="true"] {
    color: var(--msp-color-accent);
    font-weight: 600;

    & .msp-shell-canvas-toolMenuLabel {
      color: inherit;
    }
  }

  &:disabled {
    opacity: .55;
  }
}

.msp-shell-canvas-toolMenuDivider {
  height: 1px;
  margin: var(--msp-space-2) var(--msp-space-3);
  background: var(--msp-glass-edge);
}

.msp-shell-canvas-toolMenuLabel {
  color: var(--msp-color-text);
  display: grid;
}

.msp-shell-canvas-toolMenuCheck {
  color: var(--msp-color-accent);
}

.msp-shell-canvas-toolMenuHint {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-shell-canvas-toolbarSlot {
  top: var(--msp-canvas-edge);
  right: var(--msp-canvas-edge);
  position: absolute;
}

.msp-shell-canvas-lead {
  top: var(--msp-canvas-top-inset, var(--msp-canvas-edge));
  left: var(--msp-canvas-edge);
  gap: var(--msp-space-3);
  width: min(320px, 100% - 96px);
  display: grid;
  position: absolute;
}

:where([data-mode="compact"]) .msp-shell-canvas-lead {
  width: min(320px, calc(100% - 36px - 3 * var(--msp-canvas-edge)));
}

.msp-shell-canvas-bottom {
  left: var(--msp-canvas-edge);
  right: var(--msp-canvas-corner-inset, var(--msp-canvas-edge));
  bottom: var(--msp-canvas-edge);
  pointer-events: none;
  position: absolute;
  container: bottom-bar / inline-size;
}

:where([data-mode="compact"]) .msp-shell-canvas-bottom {
  right: var(--msp-canvas-edge);
}

.msp-shell-canvas-bottomGrid {
  align-items: end;
  gap: var(--msp-space-3);
  grid-template-columns: minmax(0, 1fr) auto;
  grid-template-areas: "status corner";
  display: grid;

  & > * {
    pointer-events: auto;
  }
}

@container bottom-bar (width < 560px) {
  .msp-shell-canvas-bottomGrid {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas: "corner";
    position: relative;
  }

  .msp-shell-canvas-bottomGrid > .msp-shell-canvas-status {
    left: 0;
    right: 0;
    bottom: calc(100% + var(--msp-space-2));
    position: absolute;
  }
}

.msp-shell-canvas-context {
  justify-content: flex-end;
  gap: var(--msp-space-2);
  flex-wrap: wrap;
  display: flex;
}

.msp-shell-canvas-chip {
  height: 30px;
  padding: 0 var(--msp-space-4);
  border-radius: var(--msp-radius-lg);
  font-size: var(--msp-font-size-md);
}

.msp-shell-canvas-status {
  pointer-events: none;
  flex-direction: column;
  grid-area: status;
  align-self: end;
  align-items: flex-start;
  display: flex;

  & > * {
    pointer-events: auto;
  }
}

.msp-shell-canvas-pill {
  align-items: center;
  gap: var(--msp-space-2);
  max-width: 100%;
  height: max(34px, var(--msp-touch-target, 0px));
  padding: 0 0 0 var(--msp-space-3);
  border-radius: var(--msp-radius-lg);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  white-space: nowrap;
  background: var(--msp-glass-bg);
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  display: inline-flex;
  overflow: hidden;
}

.msp-shell-canvas-message {
  animation: msp-shell-canvas-pill-in var(--msp-motion-base) var(--msp-ease);

  &[data-kind="error"] {
    color: var(--msp-color-danger);
  }

  &[data-kind="warning"] {
    color: var(--msp-color-warning);
  }

  &[data-kind="success"] {
    color: var(--msp-color-success);
  }
}

@keyframes msp-shell-canvas-pill-in {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
}

.msp-shell-canvas-text {
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-shell-canvas-progress {
  background: var(--msp-color-border);
  border-radius: 2px;
  width: 48px;
  height: 4px;
  overflow: hidden;

  & > div {
    background: var(--msp-color-accent);
    height: 100%;
  }
}

.msp-shell-canvas-spin {
  animation: 1s linear infinite msp-shell-canvas-spin;
}

@keyframes msp-shell-canvas-spin {
  to {
    transform: rotate(360deg);
  }
}

.msp-shell-canvas-pillMain {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  height: 100%;
  color: inherit;
  text-align: left;
  display: inline-flex;

  &:hover .msp-shell-canvas-text {
    text-underline-offset: 3px;
    text-decoration: underline;
  }
}

.msp-shell-canvas-pillButton {
  width: max(34px, var(--msp-touch-target, 0px));
  height: 100%;
  color: var(--msp-color-text-muted);
  flex: none;
  place-items: center;
  display: grid;
  position: relative;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-shell-canvas-countdown {
  pointer-events: none;
  width: 22px;
  height: 22px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);

  & circle {
    fill: none;
    stroke: currentColor;
    stroke-width: 1.5px;
    stroke-dasharray: 100;
    stroke-dashoffset: 0;
    opacity: .6;
    animation: msp-shell-canvas-countdown var(--msp-countdown, 8s) linear forwards;
  }

  .msp-shell-canvas-pill:hover &, .msp-shell-canvas-pill:focus-within & {
    & circle {
      animation-play-state: paused;
    }
  }
}

@keyframes msp-shell-canvas-countdown {
  to {
    stroke-dashoffset: 100px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .msp-shell-canvas-countdown {
    display: none;
  }
}

.msp-shell-canvas-status .msp-shell-canvas-announce {
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
}

.msp-shell-canvas-status .msp-shell-canvas-pill {
  height: auto;
  min-height: 24px;
  padding-left: var(--msp-space-3);
  box-shadow: none;
  -webkit-backdrop-filter: none;
  text-shadow: 0 0 2px var(--msp-color-bg),
    0 0 6px var(--msp-color-bg);
  background: none;
}

.msp-shell-canvas-status .msp-shell-canvas-pillButton {
  width: 24px;
  height: 24px;
  margin-left: var(--msp-space-1);
  border-radius: var(--msp-radius-md);
}

.msp-shell-canvas-pill:not(:has(.msp-shell-canvas-pillButton)) {
  padding-right: var(--msp-space-3);
}

.msp-shell-canvas-railMenu {
  display: contents;
}

.msp-shell-canvas-railMenuAnchor {
  display: grid;
  position: relative;
}

.msp-shell-canvas-railMenuButton {
  width: 44px;
  height: max(40px, var(--msp-touch-target, 0px));
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  place-items: center;
  display: grid;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-shell-canvas-railMenuList {
  right: 0;
  bottom: calc(100% + var(--msp-space-2));
  z-index: var(--msp-z-overlay);
  min-width: 220px;
  padding: var(--msp-space-2);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-color-panel);
  box-shadow: var(--msp-glass-shadow),
    0 8px 24px #0000001f;
  animation: msp-shell-canvas-tool-menu-in var(--msp-motion-fast) var(--msp-ease);
  display: grid;
  position: absolute;
}

:where([data-mode="compact"]) .msp-shell-canvas-card {
  left: var(--msp-canvas-edge);
  right: var(--msp-canvas-edge);
  width: auto;
}

.msp-shell-canvas-busy {
  z-index: var(--msp-z-dialog);
  padding: var(--msp-space-4);
  background: color-mix(in oklab, var(--msp-color-bg), transparent 30%);
  -webkit-backdrop-filter: blur(2px);
  animation: msp-shell-canvas-busy-in var(--msp-motion-base) var(--msp-ease);
  place-items: center;
  display: grid;
  position: absolute;
  inset: 0;
}

@keyframes msp-shell-canvas-busy-in {
  from {
    opacity: 0;
  }
}

.msp-shell-canvas-busyCard {
  gap: var(--msp-space-3);
  width: min(360px, 100%);
  padding: var(--msp-space-4);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-color-panel);
  box-shadow: var(--msp-glass-shadow),
    0 12px 32px #0000001f;
  display: grid;
}

.msp-shell-canvas-busyHead {
  align-items: center;
  gap: var(--msp-space-3);
  display: flex;
}

.msp-shell-canvas-busySpin {
  color: var(--msp-color-accent);
  flex: none;
  animation: .9s linear infinite msp-shell-canvas-busy-spin;
}

@keyframes msp-shell-canvas-busy-spin {
  to {
    transform: rotate(360deg);
  }
}

.msp-shell-canvas-busyLabel {
  flex: 1;
  font-weight: 600;
}

.msp-shell-canvas-busyPercent {
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  font-variant-numeric: tabular-nums;
}

.msp-shell-canvas-busyTrack {
  background: var(--msp-color-control);
  border-radius: 2px;
  height: 4px;
  overflow: hidden;
}

.msp-shell-canvas-busyBar {
  background: var(--msp-color-accent);
  transform-origin: 0;
  width: 100%;
  height: 100%;
  transition: scale var(--msp-motion-fast) linear;
  border-radius: 2px;
  display: block;

  &[data-indeterminate] {
    animation: msp-shell-canvas-busy-slide 1.2s var(--msp-ease) infinite;
  }
}

@keyframes msp-shell-canvas-busy-slide {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(340%);
  }
}

.msp-shell-canvas-busyActions {
  justify-content: flex-end;
  display: flex;
}

.msp-shell-canvas-railMenuDivider {
  height: 1px;
  margin: var(--msp-space-1) var(--msp-space-2);
  background: var(--msp-glass-edge);
}
}
`);var Z={band:"msp-shell-dock-band",barTab:"msp-shell-dock-barTab",body:"msp-shell-dock-body",bodyContent:"msp-shell-dock-bodyContent",bottom:"msp-shell-dock-bottom",collapsedBar:"msp-shell-dock-collapsedBar",compact:"msp-shell-dock-compact",content:"msp-shell-dock-content",dock:"msp-shell-dock-dock",floating:"msp-shell-dock-floating",floatingBottom:"msp-shell-dock-floatingBottom",floatingLeft:"msp-shell-dock-floatingLeft",floatingRight:"msp-shell-dock-floatingRight",floatingTop:"msp-shell-dock-floatingTop",frameless:"msp-shell-dock-frameless",header:"msp-shell-dock-header",left:"msp-shell-dock-left",pin:"msp-shell-dock-pin",rail:"msp-shell-dock-rail","rail-menu-in":"msp-shell-dock-rail-menu-in",railFoot:"msp-shell-dock-railFoot",railMenu:"msp-shell-dock-railMenu",railMenuRows:"msp-shell-dock-railMenuRows",railMenuScroll:"msp-shell-dock-railMenuScroll",right:"msp-shell-dock-right",splitter:"msp-shell-dock-splitter",strip:"msp-shell-dock-strip",tab:"msp-shell-dock-tab",title:"msp-shell-dock-title",top:"msp-shell-dock-top"};N("views/shell/dock.module.css",`@layer msp.components {
.msp-shell-dock-dock {
  background: var(--msp-color-panel);
  min-width: 0;
  min-height: 0;
  display: flex;
}

.msp-shell-dock-right {
  flex-direction: row;
  grid-area: right;
}

.msp-shell-dock-left {
  flex-direction: row-reverse;
  grid-area: left;
}

.msp-shell-dock-top, .msp-shell-dock-bottom {
  flex-direction: row-reverse;

  & .msp-shell-dock-content {
    width: auto;
    height: var(--msp-dock-size);
    flex: 1;
  }

  & .msp-shell-dock-header, & .msp-shell-dock-splitter {
    display: none;
  }

  & .msp-shell-dock-tab {
    width: 28px;
    height: 28px;
  }
}

.msp-shell-dock-top {
  grid-area: top;
}

.msp-shell-dock-bottom {
  grid-area: bottom;
}

.msp-shell-dock-content {
  contain: layout style;
  width: var(--msp-dock-size);
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  display: flex;
  position: relative;
}

.msp-shell-dock-header {
  align-items: center;
  gap: var(--msp-space-3);
  height: 40px;
  padding: 0 var(--msp-space-3) 0 var(--msp-space-4);
  font-weight: 600;
  display: flex;
}

.msp-shell-dock-title {
  min-width: 0;
  font-size: inherit;
  font-weight: inherit;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-shell-dock-body {
  contain: layout paint;
  flex: 1;
  min-height: 0;
}

.msp-shell-dock-bodyContent {
  flex-direction: column;
  min-height: 100%;
  display: flex;
}

.msp-shell-dock-strip {
  gap: var(--msp-space-1);
  padding: var(--msp-space-2);
  background: var(--msp-color-bg);
  flex-direction: column;
  display: flex;
}

.msp-shell-dock-tab {
  width: max(36px, var(--msp-touch-target, 0px));
  height: max(36px, var(--msp-touch-target, 0px));
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  place-items: center;
  display: grid;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[aria-selected="true"] {
    background: var(--msp-color-control);
    box-shadow: inset 0 0 0 1px var(--msp-selected-edge);
    color: var(--msp-color-accent);
  }
}

.msp-shell-dock-splitter {
  z-index: 1;
  cursor: col-resize;
  touch-action: none;
  width: 6px;
  position: absolute;
  top: 0;
  bottom: 0;

  &[data-active] {
    background: color-mix(in oklab, var(--msp-color-accent), transparent 60%);
  }
}

.msp-shell-dock-right .msp-shell-dock-splitter {
  left: -3px;
}

.msp-shell-dock-left .msp-shell-dock-splitter {
  right: -3px;
}

.msp-shell-dock-collapsedBar {
  align-items: center;
  gap: var(--msp-space-3);
  height: 24px;
  padding: 0 var(--msp-inset);
  flex: 1;
  display: flex;
}

.msp-shell-dock-barTab {
  align-items: center;
  gap: var(--msp-space-1);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  display: inline-flex;

  &:hover {
    color: var(--msp-color-text);
  }
}

.msp-shell-dock-compact {
  flex-direction: column;

  & .msp-shell-dock-content {
    width: auto;
    height: min(45cqh, 420px);
  }

  & .msp-shell-dock-strip {
    flex-direction: row;
    justify-content: space-around;
  }

  & .msp-shell-dock-splitter {
    display: none;
  }
}

.msp-shell-dock-floating {
  top: var(--msp-canvas-edge);
  bottom: var(--msp-canvas-edge);
  align-items: flex-start;
  gap: var(--msp-space-3);
  pointer-events: none;
  display: flex;
  position: absolute;

  & > * {
    pointer-events: auto;
  }

  & .msp-shell-dock-content {
    border-radius: var(--msp-radius-lg);
    background: var(--msp-glass-panel-bg);
    box-shadow: var(--msp-glass-shadow);
    -webkit-backdrop-filter: var(--msp-glass-filter);
    align-self: stretch;
    overflow: hidden;
  }

  & .msp-shell-dock-frameless {
    box-shadow: none;
    -webkit-backdrop-filter: none;
    background: none;
    border-radius: 0;
    overflow: visible;
  }

  & .msp-shell-dock-strip {
    background: none;
    gap: 0;
    padding: 0;
  }

  & .msp-shell-dock-tab {
    width: 100%;
    height: max(var(--msp-rail-button, 40px), var(--msp-touch-target, 0px));
    border-radius: 0;
  }

  & .msp-shell-dock-tab > svg {
    width: var(--msp-rail-icon, 20px);
    height: var(--msp-rail-icon, 20px);
  }

  & .msp-shell-dock-tab[aria-selected="true"] {
    background: var(--msp-color-control);
  }
}

.msp-shell-dock-floatingRight {
  gap: var(--msp-canvas-edge);
  transition: transform var(--msp-motion-base) var(--msp-ease),
    opacity var(--msp-motion-base) var(--msp-ease);
  flex-direction: row-reverse;
  top: 0;
  bottom: 0;
  right: 0;

  &[data-rail-hidden] {
    opacity: 0;
    transform: translateX(100%);
  }

  & .msp-shell-dock-rail {
    background: var(--msp-glass-panel-bg);
    box-shadow: -1px 0 0 var(--msp-glass-edge);
    border-radius: 0;
  }

  &[data-rail-overlay] {
    bottom: calc(var(--msp-canvas-edge) + var(--msp-corner-room, 0px));

    & .msp-shell-dock-rail {
      border-bottom-left-radius: var(--msp-radius-lg);
    }

    & .msp-shell-dock-content {
      margin-bottom: var(--msp-canvas-edge);
    }
  }

  & .msp-shell-dock-content {
    margin: var(--msp-canvas-edge) 0 calc(var(--msp-canvas-edge) + var(--msp-corner-room, 0px));
  }

  [data-overlay="open"] > & .msp-shell-dock-content {
    visibility: hidden;
  }
}

[data-pinned] > .msp-shell-dock-floatingRight {
  gap: 0;

  & .msp-shell-dock-content {
    box-shadow: -1px 0 0 var(--msp-glass-edge),
      inset -1px 0 0 var(--msp-glass-edge);
    border-radius: 0;
    margin: 0;
  }
}

.msp-shell-dock-floatingLeft {
  left: var(--msp-canvas-edge);
  flex-direction: row;
}

.msp-shell-dock-floatingTop, .msp-shell-dock-floatingBottom {
  left: var(--msp-canvas-edge);
  right: var(--msp-canvas-right-inset, var(--msp-canvas-edge));
  flex-direction: column;
  align-items: stretch;

  & .msp-shell-dock-content {
    width: auto;
    height: var(--msp-dock-size);
    flex: none;
  }

  & .msp-shell-dock-header, & .msp-shell-dock-splitter {
    display: none;
  }

  & .msp-shell-dock-collapsedBar {
    border-radius: var(--msp-radius-lg);
    background: var(--msp-glass-bg);
    height: 28px;
    box-shadow: var(--msp-glass-shadow);
    -webkit-backdrop-filter: var(--msp-glass-filter);
    flex: none;
    align-self: flex-start;
  }
}

.msp-shell-dock-floatingTop {
  bottom: auto;
}

.msp-shell-dock-floating:is(.msp-shell-dock-floatingRight, .msp-shell-dock-floatingLeft, .msp-shell-dock-floatingTop, .msp-shell-dock-floatingBottom) {
  pointer-events: none;
}

.msp-shell-dock-floatingTop.msp-shell-dock-band, .msp-shell-dock-floatingBottom.msp-shell-dock-band {
  left: 0;
  right: calc(var(--msp-canvas-end, 0px) - var(--msp-canvas-pinned, 0px));
  background: linear-gradient(to bottom,
    var(--msp-color-bg) calc(100% - var(--msp-band-fade, 0px) - var(--msp-band-dissolve, 0px)),
    color-mix(in srgb, var(--msp-color-bg) 60%, transparent) calc(100% - var(--msp-band-fade, 0px) * .6),
    transparent);
  pointer-events: none;

  & .msp-shell-dock-content {
    pointer-events: none;
  }
}

.msp-shell-dock-floatingTop.msp-shell-dock-band {
  top: 0;
}

.msp-shell-dock-floatingBottom.msp-shell-dock-band {
  background: linear-gradient(to top,
    var(--msp-color-bg) calc(100% - var(--msp-band-fade, 0px) - var(--msp-band-dissolve, 0px)),
    color-mix(in srgb, var(--msp-color-bg) 60%, transparent) calc(100% - var(--msp-band-fade, 0px) * .6),
    transparent);
  bottom: 0;
}

.msp-shell-dock-floatingBottom {
  flex-direction: column-reverse;
  top: auto;
}

.msp-shell-dock-rail {
  flex: none;
  align-self: stretch;
  container-type: size;
}

@container (height <= 619px) {
  .msp-shell-dock-rail > * {
    --msp-rail-button: 34px;
    --msp-rail-button-captioned: 40px;
    --msp-rail-icon: 18px;
    --msp-rail-icon-captioned: 15px;
  }
}

@container (height <= 529px) {
  .msp-shell-dock-rail > * {
    --msp-rail-button: 30px;
    --msp-rail-button-captioned: 36px;
    --msp-rail-icon: 16px;
    --msp-rail-icon-captioned: 14px;
  }
}

.msp-shell-dock-railMenu {
  right: calc(44px + var(--msp-space-2));
  z-index: var(--msp-z-overlay);
  max-height: 100%;
  animation: msp-shell-dock-rail-menu-in var(--msp-motion-fast) var(--msp-ease);
  display: flex;
  position: absolute;

  & > * {
    grid-template-rows: minmax(0, 1fr);
    min-height: 0;
  }
}

.msp-shell-dock-railMenuScroll {
  min-height: 0;
}

.msp-shell-dock-railMenuRows {
  display: grid;
}

@keyframes msp-shell-dock-rail-menu-in {
  from {
    opacity: 0;
    transform: translateX(4px);
  }
}

.msp-shell-dock-railFoot {
  flex-direction: column;
  margin-top: auto;
  display: flex;

  & > :last-child {
    background: color-mix(in oklab, var(--msp-color-control), transparent 30%);
  }

  & > * + * {
    border-top: 1px solid var(--msp-glass-edge);
  }
}

.msp-shell-dock-pin > span {
  justify-content: center;
  align-items: center;

  & > svg {
    width: 14px;
    height: 14px;
  }
}
}
`);var dn=[{name:"normal",min:620,button:40,captioned:46},{name:"compact",min:530,button:34,captioned:40},{name:"small",min:0,button:30,captioned:36}];function Ki(s){return dn.find(e=>s>=e.min)??dn[dn.length-1]}var oo=new Set;function Ui(s,e){let t=Ki(e);if(e<=0)return{step:t,hidden:oo};let n=(l,p)=>{let d=new Set(l.map(c=>c.section)),m=0;for(let c of l)m+=c.captioned?t.captioned:t.button;return p&&(m+=t.button,d.add("more")),m+Math.max(0,d.size-1)};if(n(s,!1)<=e)return{step:t,hidden:oo};let a=s.map((l,p)=>({e:l,i:p})).sort((l,p)=>p.e.priority-l.e.priority||p.i-l.i).map(l=>l.e),o=new Set,i=s;for(let l of a)if(o.add(l.id),i=i.filter(p=>p!==l),n(i,!0)<=e)break;return{step:t,hidden:o}}function mn(s){let e=[];for(let t of s){let n=t.group,a=e.find(o=>o.group===n);a?a.items.push(t):e.push({group:n,items:[t]})}return e.sort((t,n)=>t.group===void 0?-1:n.group===void 0?1:0)}function Yi(s,e){let t=(i,l)=>({id:`tab:${i.id}`,section:l,priority:i.priority,captioned:!1,kind:"tab",tab:i}),n=(i,l)=>({id:`tool:${i.id}`,section:l,priority:i.priority,captioned:!!i.caption,kind:"tool",item:i}),a=[];for(let i of s.filter(l=>l.place==="head"))a.push(t(i,"head"));for(let i of s.filter(l=>!l.place||l.place==="strip"))a.push(t(i,"strip"));let o=mn(e);for(let i of o)if(i.group!==void 0)for(let l of i.items)a.push(n(l,`group:${i.group}`));for(let i of s.filter(l=>l.place==="foot"))a.push(t(i,"foot"));for(let i of o)if(i.group===void 0)for(let l of i.items)a.push(n(l,"lead"));return a.map((i,l)=>i.priority===void 0?{...i,priority:l}:i)}var ws=class{constructor(e,t){this.height=V(0);this.menu=V(void 0);let n=e.toolbar.pipe(f(o=>o.filter(i=>i.place!=="canvas")),Zt(o=>o.length===0?re([]):B(o.map(i=>i.visible??re(!0))).pipe(f(i=>o.filter((l,p)=>i[p])))));this.entries=B([t.tabs,n]).pipe(f(([o,i])=>Yi(o,i)));let a=B([this.entries,this.height.asReadonly]).pipe(f(([o,i])=>({entries:o,fit:Ui(o,i)})));this.hidden=a.pipe(f(o=>o.fit.hidden),H((o,i)=>o.size===i.size&&[...o].every(l=>i.has(l)))),this.overflow=a.pipe(f(o=>o.entries.filter(i=>o.fit.hidden.has(i.id))),H((o,i)=>o.length===i.length&&o.every((l,p)=>l===i[p])))}toggleMenu(e,t){let n=this.menu.value;if(n&&n.anchor===e)return this.menu.set(void 0);let a=this.#e?.parentElement,o=a?a.getBoundingClientRect().bottom-e.getBoundingClientRect().bottom:0;this.menu.set({bottom:o,anchor:e,...t?{item:t}:{}})}#e;observe(e){this.#e=e;let t=new ResizeObserver(n=>{let a=Math.round(n[n.length-1].contentRect.height);a!==this.height.value&&this.height.set(a)});return t.observe(e),()=>t.disconnect()}};function Ot(s){let{shell:e,dock:t}=s,n=t.id==="top"||t.id==="bottom",a=t.tabs.pipe(f(m=>m.length>0)),o=e.mode.pipe(f(m=>m==="compact"&&t.id==="right")),i=B([t.tabs,o]).pipe(f(([m,c])=>c&&m.some(h=>h.compactBar)?m.filter(h=>h.compactBar):m)),l=n?B([t.tabs,t.active]).pipe(f(([m,c])=>m.length>1&&!!c)):re(!0),p=Ee("msp-panel"),d;return r(P,{when:a,children:()=>x("div",{class:`${Z.dock} ${Z[t.id]}`,classList:{[Z.compact]:o},style:{"--msp-dock-size":t.state.pipe(f(m=>`${m.size}px`))},ref:m=>{d=m},children:[r(P,{when:t.active,reveal:!0,swap:()=>d,fallback:n?()=>r(Zi,{shell:e,dock:t}):void 0,children:m=>r(hn,{shell:e,dock:t,tab:m,id:p})}),r(P,{when:l,children:()=>x("div",{class:Z.strip,role:"tablist","aria-label":"Panels","aria-orientation":o.pipe(f(m=>m||n?"horizontal":"vertical")),ref:m=>q(zt(m)),children:[r(Y,{each:i,children:m=>r(ks,{shell:e,dock:t,tab:m,panel:p})}),s.stripEnd]})})]})})}function un(s){let{shell:e,dock:t}=s,n={"--msp-dock-size":t.state.pipe(f(c=>`${c.size}px`))},a=new ws(e,t),o=B([t.tabs,a.hidden]).pipe(f(([c,h])=>h.size?c.filter(u=>!h.has(`tab:${u.id}`)):c)),i=o.pipe(f(c=>c.filter(h=>h.place==="head"))),l=o.pipe(f(c=>c.filter(h=>!h.place||h.place==="strip"))),p=o.pipe(f(c=>c.filter(h=>h.place==="foot"))),d=Ee("msp-panel");if(t.id==="top"||t.id==="bottom")return r("div",{class:`${Z.floating} ${t.id==="top"?Z.floatingTop:Z.floatingBottom}`,classList:{[Z.band]:t.active.pipe(f(c=>c?.frame==="none"))},style:n,children:r(P,{when:t.active,reveal:"fade",children:c=>r(hn,{shell:e,dock:t,tab:c,id:d})})});let m=x("div",{class:`${Z.floating} ${t.id==="left"?Z.floatingLeft:Z.floatingRight}`,style:n,children:[x("div",{class:`${Z.rail} ${A.frame}`,ref:c=>{q(a.observe(c))},children:[s.railLead,r(P,{when:i.pipe(f(c=>c.length>0)),children:()=>r("div",{class:Z.strip,role:"tablist","aria-orientation":"vertical","aria-label":"Home",ref:c=>q(zt(c)),children:r(Y,{each:i,children:c=>r(ks,{shell:e,dock:t,tab:c,panel:d})})})}),r(P,{when:l.pipe(f(c=>c.length>0)),children:()=>r("div",{class:Z.strip,role:"tablist","aria-orientation":"vertical","aria-label":"Panels",ref:c=>q(zt(c)),children:r(Y,{each:l,children:c=>r(ks,{shell:e,dock:t,tab:c,panel:d})})})}),s.railItems?.(a),r(Xi,{shell:e,dock:t,rail:a,root:()=>m}),x("div",{class:Z.railFoot,children:[r(P,{when:p.pipe(f(c=>c.length>0)),children:()=>r("div",{class:Z.strip,role:"tablist","aria-orientation":"vertical","aria-label":"More panels",ref:c=>q(zt(c)),children:r(Y,{each:p,children:c=>r(ks,{shell:e,dock:t,tab:c,panel:d})})})}),s.railFoot?.(a)]})]}),r(P,{when:t.active,reveal:"side",swap:()=>m,children:c=>r(hn,{shell:e,dock:t,tab:c,id:d,pinnable:!0,coveredBy:e.overlay})}),r(_i,{shell:e,dock:t,rail:a})]});return m}function ro(s,e,t){e.id==="right"&&s.overlay.value?(s.closeOverlay(),s.show(t.id)):s.select(t.id)}function Xi(s){let{rail:e}=s,t=e.menu;return r(P,{when:e.overflow.pipe(f(n=>n.length>0)),children:()=>(q(()=>t.set(void 0)),r("nav",{class:Z.strip,"aria-label":"More buttons",children:r("button",{type:"button",class:Z.tab,"data-tip":"More","data-tip-side":"left","aria-label":"More","aria-haspopup":"menu","aria-expanded":t.asReadonly.pipe(f(n=>!!n)),onClick:n=>e.toggleMenu(n.currentTarget),onKeyDown:n=>{n.key!=="ArrowDown"&&n.key!=="ArrowUp"||t.value||(n.preventDefault(),n.currentTarget.click())},children:r(L,{name:"ellipsis",size:20})})}))})}function _i(s){let{shell:e,dock:t,rail:n}=s,a=n.menu,o=B([a.asReadonly,n.overflow]).pipe(f(([d,m])=>d&&(d.item?d.item.menu?.length:m.length>0)?d:void 0)),i=(d,m)=>{if(a.set(void 0),d.tab)return ro(e,t,d.tab);let c=d.item;c.overlay?e.toggleOverlay(c.overlay,m):c.run?.(m)},l=d=>{if(d.key!=="Escape"||!a.value||!Ce(a.value.anchor,d))return;let m=a.value.anchor;a.set(void 0),m.focus(),d.preventDefault()},p=d=>{let m=a.value;if(!m)return;let c=Re(d);me(d,m.anchor)||c.closest?.(`.${Z.railMenu}`)||a.set(void 0)};return document.addEventListener("keydown",l),document.addEventListener("pointerdown",p),q(()=>{document.removeEventListener("keydown",l),document.removeEventListener("pointerdown",p)}),r(P,{when:o,children:d=>{let m=Ie(()=>d.anchor),c;return q(()=>m(c)),r("div",{class:Z.railMenu,style:{bottom:`${d.bottom}px`},children:r("div",{class:A.toolMenuCard,role:"menu","aria-label":d.item?We(d.item):"More",onKeyDown:Qe,ref:h=>{c=h,queueMicrotask(()=>ut(h))},children:r(ie,{class:Z.railMenuScroll,contentClass:Z.railMenuRows,children:d.item?r(vn,{items:d.item.menu,onRun:()=>a.set(void 0)}):r(Y,{each:n.overflow,children:h=>x("button",{type:"button",role:"menuitem",class:A.toolMenuRow,onClick:u=>i(h,d.anchor),children:[h.tab?r(L,{name:h.tab.icon,size:16}):r(Dt,{item:h.item,size:16}),r("span",{class:A.toolMenuLabel,children:h.tab?h.tab.title:We(h.item)}),r("span",{})]})},h=>h.id)})})})}})}function Zi(s){let{shell:e,dock:t}=s;return r("div",{class:Z.collapsedBar,children:r(Y,{each:t.tabs,children:n=>x("button",{type:"button",class:Z.barTab,onClick:()=>e.show(n.id),title:`Show ${n.title}`,children:[r(L,{name:t.id==="top"?"chevron-down":"chevron-up",size:14}),n.title]})})})}function ks(s){let{shell:e,dock:t,tab:n}=s,a=t.id==="right"?e.overlay.pipe(f(i=>!!i)):re(!1),o=B([t.state,a]).pipe(f(([i,l])=>!l&&!i.collapsed&&i.active===n.id),H());return r("button",{type:"button",role:"tab",class:Z.tab,"data-tip":n.title,"data-tip-side":"left","aria-label":n.title,"aria-selected":o,"aria-controls":s.panel,"data-tab":n.id,onClick:()=>ro(e,t,n),children:r(L,{name:n.icon,size:20})})}function fn(s){let{shell:e}=s,t=e.dock(s.dock);return r(ce,{variant:"ghost",size:"sm",class:Z.pin,icon:r(L,{name:"pin"}),title:"Pin beside the canvas",pressed:t.state.pipe(f(n=>n.pinned),H()),onClick:()=>e.setPinned(s.dock,!t.state.value.pinned)})}function hn(s){let{shell:e,dock:t,tab:n}=s,a=s.coveredBy?s.coveredBy.pipe(f(p=>!p)):!0,o,i=!1,l=p=>{let d=p.relatedTarget;if(d){i=!!o?.contains(d);return}let m=Re(p);queueMicrotask(()=>{let c=Se();c&&o?.contains(c)||m.isConnected&&!m.closest("[inert]")&&(i=!1)})};return q(()=>{if(!i)return;let p=Se();if(p&&!o?.contains(p))return;let d=o?.closest(".msp-root")??o?.getRootNode();(d?[...d.querySelectorAll('[role="tab"]')]:[]).find(c=>c.dataset.tab===n.id)?.focus({preventScroll:!0})}),pt(a,()=>x("section",{class:n.frame==="none"?`${Z.content} ${Z.frameless}`:Z.content,role:"tabpanel",id:s.id,"aria-label":n.title,ref:p=>{o=p},onFocusIn:()=>{i=!0},onFocusOut:l,children:[r(Qi,{shell:e,dock:t}),x("header",{class:Z.header,children:[r("h2",{class:Z.title,children:typeof n.heading=="function"?n.heading():n.heading??n.title}),s.pinnable?r(fn,{shell:e,dock:t.id}):null,r(ce,{variant:"ghost",size:"sm",icon:r(L,{name:"x"}),title:"Close panel",onClick:()=>e.toggle(t.id)})]}),r(ie,{class:Z.body,contentClass:Z.bodyContent,children:r(P,{when:e.tabFocus.pipe(f(p=>({section:p?.tab===n.id?p.section:void 0})),H((p,d)=>p.section===d.section&&!d.section)),children:p=>r(Le,{renderer:n.render,ctx:{shell:e,dock:t.id,...p.section?{focus:p.section}:{}}})})})]}))}function Qi(s){let{shell:e,dock:t}=s,n=t.id==="left"?1:-1,a=0,o=0,i=!1,l=p=>e.setSize(t.id,o+n*(p.clientX-a));return r("div",{class:Z.splitter,role:"separator","aria-orientation":"vertical",tabIndex:0,"aria-label":"Panel width","aria-valuenow":t.state.pipe(f(p=>Math.round(p.size))),onKeyDown:p=>{if(p.key!=="ArrowLeft"&&p.key!=="ArrowRight")return;p.preventDefault();let d=(p.shiftKey?64:16)*(p.key==="ArrowRight"?1:-1);e.setSize(t.id,t.state.value.size+n*d)},onPointerEnter:p=>p.currentTarget.setAttribute("data-active",""),onPointerLeave:p=>{i||p.currentTarget.removeAttribute("data-active")},onPointerDown:p=>{let d=p.currentTarget;a=p.clientX,o=t.state.value.size,i=!0,d.setPointerCapture(p.pointerId),d.setAttribute("data-active",""),d.addEventListener("pointermove",l);let m=c=>{if(!i)return;i=!1,d.removeEventListener("pointermove",l),d.removeEventListener("pointerup",m),d.removeEventListener("pointercancel",m),d.removeEventListener("lostpointercapture",m),d.hasPointerCapture(c.pointerId)&&d.releasePointerCapture(c.pointerId);let h=d.getBoundingClientRect();(!(c.clientX>=h.left&&c.clientX<=h.right&&c.clientY>=h.top&&c.clientY<=h.bottom)||c.type!=="pointerup")&&d.removeAttribute("data-active")};d.addEventListener("pointerup",m),d.addEventListener("pointercancel",m),d.addEventListener("lostpointercapture",m)},onDblClick:()=>e.setSize(t.id,t.id==="left"?300:340)})}function We(s){return s.face?s.face.pipe(f(e=>e.title)):s.caption?`${s.title} (${s.caption})`:s.title}function Dt(s){let{item:e}=s;return e.face?r("span",{class:s.class,ref:t=>U(e.face,n=>t.replaceChildren(L({name:n.icon,size:s.size})))}):r(L,{name:e.icon,size:s.size})}function $t(s){let{shell:e}=s,t=s.part??"all",n=t==="canvas",o=(s.hidden?B([e.toolbar,s.hidden]).pipe(f(([i,l])=>l.size?i.filter(p=>!l.has(`tool:${p.id}`)):i)):e.toolbar).pipe(f(i=>mn(i.filter(l=>l.place==="canvas"===n))),f(i=>t==="all"||n?i:i.filter(l=>t==="lead"?l.group===void 0:l.group!==void 0)));return r("div",{class:A.sections,children:r(Y,{each:o,children:i=>r("div",{class:A.toolbar,role:"toolbar","aria-orientation":s.menus?"horizontal":"vertical","aria-label":i.group??"commands",children:i.items.map(l=>l.visible?r(P,{when:l.visible,children:()=>r(io,{shell:e,item:l,menus:s.menus,railMenu:s.railMenu})}):r(io,{shell:e,item:l,menus:s.menus,railMenu:s.railMenu}))})},i=>i.group??"")})}function io(s){let{shell:e,item:t,menus:n}=s,a=!n&&t.menu?.length?s.railMenu:void 0,o=n&&t.menu?.length?n:void 0,i=t.overlay?e.overlay.pipe(f(d=>d?.overlay.id===t.overlay)):re(!1),l=B([i,t.pressed??re(!1)]).pipe(f(([d,m])=>d||m),H()),p=o?.open.asReadonly.pipe(f(d=>d?.item===t),H());return x("button",{type:"button",class:A.tool,"data-captioned":t.caption?"":void 0,"data-tip":o?void 0:We(t),"data-tip-side":t.place==="canvas"?"top":"left","aria-label":We(t),"aria-pressed":t.pressed||t.overlay?l:void 0,"aria-haspopup":o||a?"menu":void 0,"aria-expanded":p,"data-overlay-trigger":t.overlay?"":void 0,"data-keeps-card":t.keepsCard?"":void 0,onClick:d=>{if(o&&!t.overlay&&!t.run)return o.show(t,d.currentTarget,d.detail===0);if(o&&lo())return o.open.value?.item===t?o.hide():o.show(t,d.currentTarget,d.detail===0);if(a)return a(t,d.currentTarget);o?.hide(),t.overlay?e.toggleOverlay(t.overlay,d.currentTarget):t.run?.(d.currentTarget)},onKeyDown:o?d=>{d.key!=="ArrowDown"&&d.key!=="ArrowUp"||(d.preventDefault(),o.show(t,d.currentTarget,!0))}:void 0,onPointerEnter:o?d=>d.pointerType==="mouse"&&o.show(t,d.currentTarget):void 0,onPointerLeave:o?()=>o.hideSoon():void 0,onBlur:o?()=>o.hideSoon():void 0,children:[r(Dt,{item:t,size:t.caption?16:20,class:A.face}),t.caption?r("span",{class:A.caption,children:t.caption}):null,o?r("span",{class:A.menuMark,"aria-hidden":"true"}):null]})}var lo=()=>typeof matchMedia=="function"&&matchMedia("(hover: none)").matches;function Ji(s,e){let t=s.menu??[];return!s.run||!lo()?t:[{id:`${s.id}:self`,label:s.title,icon:s.icon,group:"",run:()=>s.run?.(e)},...t]}function vn(s){return r(se,{children:s.items.map((e,t,n)=>x(se,{children:[t>0&&e.group!==n[t-1].group?r("div",{class:A.toolMenuDivider,role:"separator"}):null,x("button",{type:"button",role:e.pressed?e.choice?"menuitemradio":"menuitemcheckbox":"menuitem","aria-checked":e.pressed,class:A.toolMenuRow,disabled:!!e.disabled,onClick:()=>{s.onRun(),e.run()},children:[e.icon?r(L,{name:e.icon,size:16}):r("span",{}),x("span",{class:A.toolMenuLabel,children:[e.label,e.disabled||e.hint?r("span",{class:A.toolMenuHint,children:e.disabled??e.hint}):null]}),e.pressed?r(P,{when:e.pressed,children:()=>r(L,{name:"check",size:14,class:A.toolMenuCheck})}):null]})]}))})}function co(s){let e=new gn,t=x("div",{class:A.stack,"data-quiet":s.quiet?.pipe(f(n=>n?"":void 0)),children:[r("div",{class:A.frame,children:x(ie,{axis:"x",contentClass:A.stackTools,children:[s.lead,r($t,{shell:s.shell,part:"canvas",menus:e})]})}),s.aside,r(el,{menus:e})]});return e.stack=t,q(()=>e.dispose()),t}var gn=class{constructor(){this.open=V(void 0)}#e;show(e,t,n=!1){this.keep();let a=this.stack?this.stack.getBoundingClientRect().right-t.getBoundingClientRect().right:0,o=this.open.value;(o?.item!==e||o.right!==a)&&this.open.set({item:e,right:a,button:t}),n&&queueMicrotask(()=>this.menu&&ut(this.menu))}keep(){this.#e!==void 0&&clearTimeout(this.#e),this.#e=void 0}hideSoon(){this.keep(),this.#e=setTimeout(()=>this.hide(),160)}hide(){this.keep(),this.open.value&&this.open.set(void 0)}dispose(){this.keep()}};function el(s){let{menus:e}=s,t=a=>{a.key!=="Escape"||a.defaultPrevented||!e.open.value||e.stack&&!Ce(e.stack,a)||(e.hide(),a.preventDefault())},n=a=>{let o=e.open.value;if(!o)return;let i=a.composedPath();e.menu&&i.includes(e.menu)||i.includes(o.button)||e.hide()};return document.addEventListener("keydown",t),document.addEventListener("pointerdown",n,!0),q(()=>{document.removeEventListener("keydown",t),document.removeEventListener("pointerdown",n,!0)}),r(P,{when:e.open,children:a=>{let o=!1,i;return q(()=>{if(e.menu===i&&(e.menu=void 0),!o)return;let l=Se();(!l||i?.contains(l))&&a.button.focus({preventScroll:!0})}),r("div",{class:A.toolMenu,style:{right:`${a.right}px`},role:"menu","aria-label":a.item.title,ref:l=>{i=l,e.menu=l},onKeyDown:Qe,onPointerEnter:()=>e.keep(),onPointerLeave:()=>e.hideSoon(),onFocusIn:()=>{o=!0,e.keep()},onFocusOut:()=>e.hideSoon(),children:r("div",{class:A.toolMenuCard,children:r(vn,{items:Ji(a.item,a.button),onRun:()=>e.hide()})})})}})}function po(s){let{shell:e}=s,t=V(!1),n=e.dock("right"),a=e.toolbar.pipe(f(c=>c.filter(h=>h.place!=="canvas"&&!h.group))),o=e.toolbar.pipe(f(c=>c.filter(h=>h.place!=="canvas"&&h.group))),i=n.tabs.pipe(f(c=>c.some(h=>h.compactBar)?c.filter(h=>!h.compactBar):[])),l,p=(c,h)=>{t.set(!1),c.overlay?e.toggleOverlay(c.overlay,h):c.run?.(h)},d=x("div",{class:A.railMenu,children:[r(Y,{each:a,children:c=>r("button",{type:"button",class:A.railMenuButton,"aria-label":We(c),"data-tip":We(c),onClick:h=>p(c,h.currentTarget),children:r(Dt,{item:c,size:20,class:A.face})})},c=>c.id),x("div",{class:A.railMenuAnchor,children:[r("button",{type:"button",class:A.railMenuButton,"aria-label":"More","aria-haspopup":"menu","aria-expanded":t,"data-tip":"More",onClick:c=>{t.set(!t.value),t.value&&c.detail===0&&queueMicrotask(()=>l&&ut(l))},onKeyDown:c=>{c.key!=="ArrowDown"&&c.key!=="ArrowUp"||(c.preventDefault(),t.set(!0),queueMicrotask(()=>l&&ut(l)))},children:r(L,{name:"ellipsis",size:20})}),r(P,{when:t,children:()=>{let c=Ie();return q(()=>c(l)),x("div",{class:A.railMenuList,role:"menu","aria-label":"More",ref:h=>{l=h},onKeyDown:h=>{Qe(h),h.key==="Escape"&&(h.preventDefault(),h.stopPropagation(),t.set(!1))},children:[r(Y,{each:i,children:h=>x("button",{type:"button",role:"menuitem",class:A.toolMenuRow,onClick:()=>{t.set(!1),e.show(h.id)},children:[r(L,{name:h.icon,size:16}),r("span",{class:A.toolMenuLabel,children:h.title}),r("span",{})]})},h=>h.id),r(P,{when:B([i,o]).pipe(f(([h,u])=>h.length>0&&u.length>0)),children:()=>r("div",{class:A.railMenuDivider})}),r(Y,{each:o,children:h=>x("button",{type:"button",role:"menuitem",class:A.toolMenuRow,hidden:h.visible?h.visible.pipe(f(u=>!u)):!1,onClick:u=>p(h,u.currentTarget),children:[r(Dt,{item:h,size:16,class:A.face}),r("span",{class:A.toolMenuLabel,children:We(h)}),r("span",{})]})},h=>h.id)]})}})]})]}),m=c=>{t.value&&!me(c,d)&&t.set(!1)};return document.addEventListener("pointerdown",m),q(()=>document.removeEventListener("pointerdown",m)),d}function mo(s){let e=s.status.tasks.pipe(f(t=>t.find(n=>n.overlay)),H((t,n)=>t?.id===n?.id));return r(P,{when:e,children:t=>{let n=s.status.tasks.pipe(f(o=>o.find(i=>i.id===t.id)??t)),a=n.pipe(f(o=>o.progress===void 0?void 0:Math.round(o.progress*100)));return r("div",{class:A.busy,role:"alertdialog","aria-modal":"true","aria-label":t.label,children:x("div",{class:A.busyCard,children:[x("div",{class:A.busyHead,children:[r(L,{name:"loader-circle",size:18,class:A.busySpin}),r("span",{class:A.busyLabel,children:n.pipe(f(o=>o.label))}),r("span",{class:A.busyPercent,children:a.pipe(f(o=>o===void 0?"":`${o}%`))})]}),r("div",{class:A.busyTrack,role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":a,children:r("span",{class:A.busyBar,"data-indeterminate":a.pipe(f(o=>o===void 0?"":void 0)),style:{scale:a.pipe(f(o=>`${(o??30)/100} 1`))}})}),t.abort?r("div",{class:A.busyActions,children:r(ce,{size:"sm",onClick:()=>t.abort?.(),children:"Cancel"})}):null]})})}})}function ho(s){let{shell:e}=s,t=e.overlay.pipe(f(n=>!!n),H());return r(P,{when:t,children:()=>r(tl,{shell:e})})}function tl(s){let{shell:e}=s,n=e.overlay.value.anchor,a=Ie(()=>n),o=Ee("msp-card-title"),i=e.dock("right").state.pipe(f(u=>u.pinned),H()),l=0,p=x("section",{class:A.card,role:"dialog","aria-modal":i.pipe(f(u=>!u)),"aria-labelledby":o,onKeyDown:u=>{d()||is(u,u.currentTarget)},children:[x("header",{class:A.cardHeader,children:[r("h2",{class:A.cardTitle,id:o,children:e.overlay.pipe(f(u=>u?.overlay.title??""))}),r(fn,{shell:e,dock:"right"}),r(ce,{variant:"ghost",size:"sm",icon:r(L,{name:"x"}),title:"Close",onClick:()=>e.closeOverlay()})]}),r(P,{when:e.overlay,children:u=>{n=u.anchor,ya(u.anchor)&&(l&&cancelAnimationFrame(l),l=requestAnimationFrame(()=>{l=0;let g=p.querySelector(`.${A.cardBody}, .${A.cardBodyFill}`),y=en(p);(y.find(w=>g?.contains(w))??y[y.length-1])?.focus()}));let b={shell:e,...u.focus?{focus:u.focus}:{}};return u.overlay.fill?r("div",{class:A.cardBodyFill,children:r(Le,{renderer:u.overlay.render,ctx:b})}):r(ie,{class:A.cardBody,contentClass:A.cardBodyContent,children:r(Le,{renderer:u.overlay.render,ctx:b})})}})]}),d=()=>e.dock("right").state.value.pinned,m=document,c=u=>{u.key!=="Escape"||u.defaultPrevented||d()||!Ce(p,u)||(e.closeOverlay(),u.preventDefault())},h=u=>{let b=e.overlay.value;if(!b)return;let g=Re(u);d()||b.overlay.persistent||me(u,p)||me(u,b.anchor)||g.closest?.("[data-overlay-trigger], [role=tab]")||g.closest?.("[data-keeps-card], [data-msp-canvas]")||e.closeOverlay()};return m.addEventListener("keydown",c),m.addEventListener("pointerdown",h,!0),q(()=>{l&&cancelAnimationFrame(l),m.removeEventListener("keydown",c),m.removeEventListener("pointerdown",h,!0),a(p)}),p}var Ms={info:"info",success:"circle-check",warning:"triangle-alert",error:"circle-alert"};function bn(s){let{status:e}=s;return x("div",{class:A.status,children:[r("div",{class:A.announce,role:"status","aria-live":"polite",children:e.spoken}),r(P,{when:e.current,children:t=>t.kind==="error"?x("span",{class:`${A.pill} ${A.message}`,"data-kind":t.kind,children:[x("button",{type:"button",class:A.pillMain,title:"Show the log",onClick:()=>s.onOpenLog?.(),children:[r(L,{name:Ms[t.kind],size:14}),r("span",{class:A.text,children:t.text})]}),r("button",{type:"button",class:A.pillButton,"aria-label":"Dismiss","data-tip":"Dismiss",onClick:()=>e.dismiss(t.id),children:r(L,{name:"x",size:14})})]}):x("button",{type:"button",class:`${A.pill} ${A.message}`,"data-kind":t.kind,title:"Show the log",onClick:()=>s.onOpenLog?.(),children:[r(L,{name:Ms[t.kind],size:14}),r("span",{class:A.text,children:t.text})]})}),r(Y,{each:e.tasks.pipe(f(t=>t.filter(n=>!n.overlay))),children:t=>r(nl,{task:t})}),s.after]})}function sl(s){let e,t=0,n=0,a=!1,o=V(void 0),i=()=>{e&&clearTimeout(e),e=void 0},l=()=>{i(),!(a||t<=0)&&(n=performance.now(),e=setTimeout(()=>s.onDismiss?.(),t))},p=m=>{m!==a&&(a=m,m&&e&&(t-=performance.now()-n),m?i():l())};s.autoDismiss&&s.onDismiss&&(U(s.autoDismiss,m=>{i(),t=m??0,o.set(m),l()}),q(i));let d=x(se,{children:[s.icon,r("span",{class:A.text,children:s.text}),s.after]});return x("span",{class:A.pill,onPointerEnter:()=>p(!0),onPointerLeave:()=>p(!1),onFocusIn:()=>p(!0),onFocusOut:m=>{m.currentTarget.contains(m.relatedTarget)||p(!1)},children:[s.onClick?r("button",{type:"button",class:A.pillMain,"aria-label":s.label,onClick:()=>s.onClick?.(),children:d}):d,s.onDismiss?x("button",{type:"button",class:A.pillButton,"aria-label":s.dismissLabel??"Dismiss","data-tip":s.dismissLabel??"Dismiss",onClick:()=>s.onDismiss?.(),children:[r(L,{name:"x",size:14}),r(P,{when:o.asReadonly,children:m=>r("svg",{class:A.countdown,viewBox:"0 0 20 20","aria-hidden":"true",style:{"--msp-countdown":`${m}ms`},children:r("circle",{cx:"10",cy:"10",r:"9",pathLength:"100"})})})]}):null]})}function uo(s){return x("div",{class:A.context,children:[s.lead,r(Y,{each:s.status.chips,children:e=>x("span",{class:`${A.pill} ${A.chip}`,children:[r("button",{type:"button",class:A.text,onClick:()=>e.activate?.(),children:e.label}),e.dismiss?r("button",{type:"button",class:A.pillButton,title:"Clear",onClick:()=>e.dismiss?.(),children:r(L,{name:"x",size:14})}):null]})})]})}function nl(s){let{task:e}=s;return x("span",{class:A.pill,children:[r(L,{name:"loader-circle",size:14,class:A.spin}),r("span",{class:A.text,children:e.label}),e.progress!==void 0?r("span",{class:A.progress,children:r("div",{style:{width:`${Math.round(e.progress*100)}%`}})}):null,e.abort?r("button",{type:"button",class:A.pillButton,title:"Cancel",onClick:()=>e.abort?.(),children:r(L,{name:"x",size:14})}):null]})}function fo(s){let{shell:e}=s,t=e.dock("right").tabs.pipe(f(a=>a.find(o=>o.place==="head")?.icon??"prism"),H()),n=e.railOpen.pipe(f(a=>a?"Hide the panel rail":"Show the panel rail"));return r("div",{class:`${A.stack} ${A.railToggle}`,children:r("div",{class:A.frame,children:r("button",{type:"button",class:A.tool,"data-tip":n,"data-tip-side":"top","aria-label":n,"aria-pressed":e.railOpen,onClick:()=>e.toggleRail(),children:r("span",{class:A.face,ref:a=>U(t,o=>a.replaceChildren(L({name:o,size:18})))})})})})}var ve={action:"msp-shell-help-panel-action",conflict:"msp-shell-help-panel-conflict",conflicts:"msp-shell-help-panel-conflicts",content:"msp-shell-help-panel-content",group:"msp-shell-help-panel-group",heading:"msp-shell-help-panel-heading",help:"msp-shell-help-panel-help",input:"msp-shell-help-panel-input",key:"msp-shell-help-panel-key",keys:"msp-shell-help-panel-keys",list:"msp-shell-help-panel-list",or:"msp-shell-help-panel-or",row:"msp-shell-help-panel-row"};N("views/shell/help-panel.module.css",`@layer msp.components {
.msp-shell-help-panel-help {
  flex: 1 1 0;
  min-height: 0;
}

.msp-shell-help-panel-content {
  gap: var(--msp-space-4);
  padding: 0 var(--msp-panel-inset) var(--msp-space-4);
  font-size: var(--msp-font-size-sm);
  display: grid;
}

.msp-shell-help-panel-group {
  gap: var(--msp-space-1);
  display: grid;
}

.msp-shell-help-panel-heading {
  padding: 0 var(--msp-inset) var(--msp-space-1);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
  font-weight: 500;
}

.msp-shell-help-panel-list {
  margin: 0;
  display: grid;
}

.msp-shell-help-panel-row {
  align-items: center;
  gap: var(--msp-space-3);
  min-height: var(--msp-control-height);
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }
}

.msp-shell-help-panel-action {
  flex: 1;
  min-width: 0;
}

.msp-shell-help-panel-input {
  justify-content: flex-end;
  align-items: center;
  gap: var(--msp-space-2);
  flex-wrap: wrap;
  margin: 0;
  display: flex;
}

.msp-shell-help-panel-keys {
  gap: var(--msp-space-1);
  display: flex;
}

.msp-shell-help-panel-key {
  min-width: 18px;
  padding: 1px var(--msp-space-2);
  border-radius: var(--msp-radius-sm);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font: inherit;
  font-size: var(--msp-font-size-xs);
  text-align: center;
  white-space: nowrap;
}

.msp-shell-help-panel-or {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-shell-help-panel-conflicts {
  gap: var(--msp-space-3);
  margin: 0 var(--msp-space-1);
  padding: var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-warning), transparent 85%);
  color: var(--msp-color-text);
  display: flex;
}

.msp-shell-help-panel-conflict {
  margin: 0;
}
}
`);var al=()=>[{action:"Command menu",input:lt({key:"k",mod:!0}),or:lt({key:"p",mod:!0,shift:!0})},{action:"Help (this card)",input:["?"]},{action:"Close a menu, a card or the command menu",input:["Esc"]}];function ol(s){let e=s.commands.commands.pipe(f(n=>n.filter(a=>a.shortcut))),t=e.pipe(f(rl));return x(ie,{edge:!0,class:ve.help,contentClass:ve.content,"aria-label":"Help",children:[s.intro?.(),r(P,{when:t.pipe(f(n=>n.length?n:void 0)),children:n=>x("section",{class:ve.conflicts,"aria-label":"Shortcut conflicts",children:[r(L,{name:"triangle-alert",size:14}),r("div",{children:n.map(([a,o])=>x("p",{class:ve.conflict,children:[r(xn,{input:a})," is used by ",o.join(" and "),": only the first runs."]}))})]})}),r(Y,{each:s.bindings,children:n=>r(yn,{title:n.title,bindings:n.bindings})}),r(yn,{title:"Everywhere",bindings:al()}),r(P,{when:e.pipe(f(n=>n.length?n:void 0)),children:n=>r(yn,{title:"Commands",bindings:n.map(a=>({action:a.title,input:lt(a.shortcut)}))})})]})}function yn(s){return x("section",{class:ve.group,"aria-label":s.title,children:[r("h3",{class:ve.heading,children:s.title}),r("dl",{class:ve.list,children:s.bindings.map(e=>x("div",{class:ve.row,children:[r("dt",{class:ve.action,children:e.action}),x("dd",{class:ve.input,children:[r(xn,{input:e.input}),e.or?x(se,{children:[r("span",{class:ve.or,children:"or"}),r(xn,{input:e.or})]}):null]})]}))})]})}function xn(s){return r("span",{class:ve.keys,children:s.input.map(e=>r("kbd",{class:ve.key,children:e}))})}function rl(s){let e=new Map;for(let t of s){let a=lt(t.shortcut).join("+");e.set(a,[...e.get(a)??[],t])}return[...e.values()].filter(t=>t.length>1).map(t=>[lt(t[0].shortcut),t.map(n=>n.title)])}var st={empty:"msp-shell-log-view-empty",entry:"msp-shell-log-view-entry",kind:"msp-shell-log-view-kind",log:"msp-shell-log-view-log",text:"msp-shell-log-view-text",time:"msp-shell-log-view-time"};N("views/shell/log-view.module.css",`@layer msp.components {
.msp-shell-log-view-log {
  padding: 0 var(--msp-panel-inset) var(--msp-panel-inset);
  font-size: var(--msp-font-size-sm);
  display: grid;
}

.msp-shell-log-view-empty {
  padding: var(--msp-space-4);
  color: var(--msp-color-text-muted);
}

.msp-shell-log-view-entry {
  align-items: baseline;
  gap: var(--msp-space-3);
  padding: var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  grid-template-columns: auto minmax(0, 1fr) auto;
  display: grid;

  &:hover {
    background: var(--msp-color-hover);
  }

  &[data-kind="error"] .msp-shell-log-view-kind {
    color: var(--msp-color-danger);
  }

  &[data-kind="warning"] .msp-shell-log-view-kind {
    color: var(--msp-color-warning);
  }

  &[data-kind="success"] .msp-shell-log-view-kind {
    color: var(--msp-color-success);
  }
}

.msp-shell-log-view-kind {
  color: var(--msp-color-text-subtle);
  align-self: center;
}

.msp-shell-log-view-text {
  overflow-wrap: anywhere;
}

.msp-shell-log-view-time {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
}
}
`);var il=new Intl.DateTimeFormat(void 0,{hour:"2-digit",minute:"2-digit",second:"2-digit"});function ll(s){return r("div",{class:st.log,role:"log","aria-live":"off","aria-label":"Log",children:r(Y,{each:s.status.history,fallback:()=>r("p",{class:st.empty,children:"No messages yet."}),children:e=>x("div",{class:st.entry,"data-kind":e.kind,children:[r(L,{name:Ms[e.kind],size:14,class:st.kind}),r("span",{class:st.text,children:e.text}),r("time",{class:st.time,dateTime:e.time.toISOString(),children:il.format(e.time)})]})},e=>e.id)})}var ge={body:"msp-settings-settings-tab-body",chevron:"msp-settings-settings-tab-chevron",group:"msp-settings-settings-tab-group",groups:"msp-settings-settings-tab-groups",groupsContent:"msp-settings-settings-tab-groupsContent",header:"msp-settings-settings-tab-header",none:"msp-settings-settings-tab-none",search:"msp-settings-settings-tab-search",searchIcon:"msp-settings-settings-tab-searchIcon",searchInput:"msp-settings-settings-tab-searchInput",tab:"msp-settings-settings-tab-tab",title:"msp-settings-settings-tab-title",toggle:"msp-settings-settings-tab-toggle"};N("views/settings/settings-tab.module.css",`@layer msp.components {
.msp-settings-settings-tab-tab {
  height: 100%;
  min-height: 0;
  font-size: var(--msp-font-size-sm);
  flex-direction: column;
  flex: 1 1 0;
  display: flex;
}

.msp-settings-settings-tab-search {
  align-items: center;
  gap: var(--msp-space-2);
  padding: 0 var(--msp-panel-inset) var(--msp-panel-inset);
  flex: none;
  display: flex;
  position: relative;
}

.msp-settings-settings-tab-searchIcon {
  left: calc(var(--msp-space-2) + var(--msp-space-3));
  color: var(--msp-color-text-subtle);
  pointer-events: none;
  position: absolute;
}

.msp-settings-settings-tab-searchInput {
  min-width: 0;
  padding-left: calc(var(--msp-space-3) + var(--msp-icon-sm) + var(--msp-space-2));
  flex: 1;
}

.msp-settings-settings-tab-groups {
  flex: 1 1 0;
  min-height: 0;
}

.msp-settings-settings-tab-groupsContent {
  align-content: start;
  gap: var(--msp-space-1);
  padding: 0 var(--msp-panel-inset) var(--msp-panel-inset);
  grid-template-columns: minmax(0, 1fr);
  display: grid;
}

.msp-settings-settings-tab-group {
  border-radius: var(--msp-radius-md);

  &:has(.msp-settings-settings-tab-toggle[aria-expanded="true"]) {
    background: var(--msp-color-well);
  }
}

.msp-settings-settings-tab-header {
  border-radius: var(--msp-radius-md);
  align-items: center;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  &:has(.msp-settings-settings-tab-toggle[aria-expanded="true"]) {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
}

.msp-settings-settings-tab-toggle {
  align-items: center;
  gap: var(--msp-space-3);
  min-width: 0;
  height: 32px;
  padding: 0 var(--msp-space-2);
  color: var(--msp-color-text-muted);
  text-align: left;
  flex: 1;
  display: flex;

  &:hover {
    color: var(--msp-color-text);
  }
}

.msp-settings-settings-tab-title {
  color: var(--msp-color-text);
  flex: 1;
  font-weight: 600;
}

.msp-settings-settings-tab-chevron {
  color: var(--msp-color-text-subtle);
  transition: transform var(--msp-motion-fast) var(--msp-ease);

  [aria-expanded="false"] > & {
    transform: rotate(-90deg);
  }
}

.msp-settings-settings-tab-body {
  --msp-label-width: 46%;
  padding: var(--msp-space-1) var(--msp-space-3) var(--msp-space-3);

  &[data-wide-labels] {
    --msp-label-width: calc(100% - 64px);
  }
}

.msp-settings-settings-tab-none {
  padding: var(--msp-space-4) var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  text-align: center;
  margin: 0;
}
}
`);function cl(s){let{model:e}=s,t=V(""),n=t.asReadonly,a=n.pipe(f(o=>o.trim().length>0&&!e.groups.some(i=>nn(i.form.params,o))),H());return x("div",{class:ge.tab,children:[x("div",{class:ge.search,children:[r(L,{name:"search",size:14,class:ge.searchIcon}),r(Rt,{search:!0,size:"sm",class:ge.searchInput,"aria-label":"Search settings",placeholder:"Search settings",value:n,onInput:o=>t.set(o)})]}),x(ie,{class:ge.groups,contentClass:ge.groupsContent,children:[e.groups.map((o,i)=>r(pl,{group:o,query:n,open:i===0})),r(P,{when:a,children:()=>x("p",{class:ge.none,children:["No setting matches \u201C",n,"\u201D."]})}),s.more?.()]})]})}function pl(s){let{group:e,query:t}=s,n=V(s.open),a=t.pipe(f(l=>l.trim().length>0),H()),o=B([n.asReadonly,a]).pipe(f(([l,p])=>l||p),H()),i=t.pipe(f(l=>!nn(e.form.params,l)),H());return x("section",{class:ge.group,hidden:i,"aria-label":e.title,children:[r("div",{class:ge.header,children:x("button",{type:"button",class:ge.toggle,"aria-expanded":o,onClick:()=>n.set(!n.value),children:[r("span",{class:ge.title,children:e.title}),r(L,{name:"chevron-down",size:14,class:ge.chevron})]})}),r(P,{when:o,reveal:!0,children:()=>r("div",{class:ge.body,"data-wide-labels":e.wideLabels?"":void 0,children:r(us,{form:e.form,filter:t})})})]})}var nt={canvas:"msp-shell-canvas",canvasLayer:"msp-shell-canvasLayer",layer:"msp-shell-layer",shell:"msp-shell-shell",viewport:"msp-shell-viewport"};N("views/shell/shell.module.css",`@layer msp.components {
.msp-shell-shell {
  background: var(--msp-color-bg);
  grid-template: "left top right"
                 "left viewport right" minmax(0, 1fr)
                 "left bottom right"
                 / auto minmax(0, 1fr) auto;
  width: 100%;
  height: 100%;
  display: grid;
  position: relative;
  overflow: hidden;
  container-type: size;

  &[data-mode="compact"] {
    --msp-row-height: 44px;
    --msp-control-height: 40px;
    --msp-touch-target: 44px;
    grid-template: "top"
                   "viewport" minmax(0, 1fr)
                   "bottom"
                   "right"
                   / minmax(0, 1fr);
  }
}

.msp-shell-viewport {
  grid-area: viewport;
  min-width: 0;
  min-height: 0;
  position: relative;
  overflow: hidden;
  container: canvas / inline-size;
}

.msp-shell-canvas {
  inset: 0 var(--msp-canvas-end, var(--msp-canvas-pinned, 0px)) 0 0;
  transition: opacity var(--msp-motion-reveal) var(--msp-ease);
  position: absolute;

  &[data-quiet] {
    opacity: 0;
  }
}

.msp-shell-layer {
  pointer-events: none;
  color: var(--msp-color-text);
  position: absolute;
  inset: 0;

  & > * {
    pointer-events: auto;
  }
}

.msp-shell-canvasLayer {
  right: var(--msp-canvas-pinned, 0px);
}
}
`);var wn={muted:"msp-tooltip-muted",tooltip:"msp-tooltip-tooltip","tooltip-in":"msp-tooltip-tooltip-in"};N("components/tooltip/tooltip.module.css",`@layer msp.components {
.msp-tooltip-tooltip {
  z-index: var(--msp-z-tooltip);
  max-width: 240px;
  padding: var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-text);
  color: var(--msp-color-bg);
  font-size: var(--msp-font-size-xs);
  white-space: nowrap;
  pointer-events: none;
  animation: msp-tooltip-tooltip-in var(--msp-motion-fast) var(--msp-ease);
  line-height: 1.3;
  position: fixed;
  top: 0;
  left: 0;

  &[hidden] {
    display: none;
  }
}

.msp-tooltip-tooltip[data-kind="row"] {
  max-width: 320px;
  padding: var(--msp-space-2) var(--msp-inset);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-color-raised);
  color: var(--msp-color-text);
  box-shadow: 0 0 0 1px var(--msp-glass-edge),
    var(--msp-shadow-float);
  font-size: var(--msp-font-size-sm);
  white-space: normal;
  line-height: 1.4;
}

.msp-tooltip-muted {
  color: var(--msp-color-text-muted);
}

@keyframes msp-tooltip-tooltip-in {
  from {
    opacity: 0;
  }
}
}
`);var dl=350;function go(s){let e=document.createElement("div");e.className=wn.tooltip,e.setAttribute("role","tooltip"),e.hidden=!0,s.append(e);let t,n=!1,a,o=typeof ResizeObserver>"u"?void 0:new ResizeObserver(()=>!vo(t)&&l()),i=b=>{let g=b.dataset.tipRow!==void 0;g?hl(e,b):e.textContent=b.dataset.tip??b.textContent??"",e.dataset.kind=g?"row":"",e.hidden=!1;let y=g?"beside":b.dataset.tipSide??"bottom",w=b.getBoundingClientRect(),S=e.getBoundingClientRect(),T=8,C,I,D;if(y==="beside"){let M=b.closest('[data-tip-edge], [role="tabpanel"]')?.getBoundingClientRect()??w;D=M;let z=8;C=M.left-z-S.width,C<4&&(C=M.right+z),I=w.top+(w.height-S.height)/2}else y==="left"?(C=w.left-T-S.width,I=w.top+(w.height-S.height)/2):y==="top"?(C=w.left+(w.width-S.width)/2,I=w.top-T-S.height):(C=w.left+(w.width-S.width)/2,I=w.bottom+T);if(C=Math.max(4,Math.min(C,window.innerWidth-S.width-4)),I=Math.max(4,Math.min(I,window.innerHeight-S.height-4)),D&&C<D.right&&C+S.width>D.left&&D!==w)return l();e.style.transform=`translate(${Math.round(C)}px, ${Math.round(I)}px)`,e.dataset.side=y},l=()=>{a!==void 0&&clearTimeout(a),a=void 0,o?.disconnect(),t=void 0,e.hidden=!0},p=(b,g,y)=>{if(a!==void 0&&clearTimeout(a),n=y,b.dataset.tip===void 0&&!ml(b)){t=void 0,e.hidden=!0;return}t=b;let w=()=>{if(t!==b||!vo(b))return l();i(b),!e.hidden&&(o?.disconnect(),o?.observe(b))};g?w():a=setTimeout(w,dl)},d=b=>{let g=b.target,y=g?.closest?.("[data-tip], [data-tip-overflow], [data-tip-row]")??void 0;if(!y?.closest("[inert]")&&!(y?.dataset.tipRow!==void 0&&!g?.closest("[data-tip-part]")))return y},m=b=>{t&&!t.isConnected&&l();let g=d(b);!g||g===t||p(g,!e.hidden,!0)},c=b=>{let g=d(b);g&&!g.contains(b.relatedTarget)&&l()},h=b=>{let g=d(b);g?.matches(":focus-visible")&&p(g,!0,!1)},u=b=>{t&&(!t.isConnected||n&&!t.contains(b.target))&&l()};return s.addEventListener("pointerover",m),s.addEventListener("pointermove",u,{passive:!0}),s.addEventListener("pointerout",c),s.addEventListener("focusin",h),s.addEventListener("focusout",l),s.addEventListener("pointerdown",l),window.addEventListener("keydown",l),window.addEventListener("scroll",l,!0),()=>{l(),e.remove(),o?.disconnect(),s.removeEventListener("pointerover",m),s.removeEventListener("pointermove",u),s.removeEventListener("pointerout",c),s.removeEventListener("focusin",h),s.removeEventListener("focusout",l),s.removeEventListener("pointerdown",l),window.removeEventListener("keydown",l),window.removeEventListener("scroll",l,!0)}}function vo(s){return!!s&&s.isConnected&&(s.checkVisibility?.()??!0)&&!s.closest("[inert]")}function ml(s){if(s.dataset.tipRow===void 0)return s.scrollWidth-s.clientWidth>1;for(let e of s.querySelectorAll("[data-tip-part]"))if(e.scrollWidth-e.clientWidth>1)return!0;return!1}function hl(s,e){s.textContent="";let t=!0;for(let n of e.querySelectorAll("[data-tip-part]")){let a=n.textContent?.trim();if(!a)continue;let o=document.createElement("span");o.textContent=a,t||(o.className=wn.muted),t||s.append(" "),s.append(o),t=!1}}var Cs={empty:"msp-shell-empty-canvas-empty","fade-in":"msp-shell-empty-canvas-fade-in","fade-out":"msp-shell-empty-canvas-fade-out",mark:"msp-shell-empty-canvas-mark",splash:"msp-shell-empty-canvas-splash"};N("views/shell/empty-canvas.module.css",`@layer msp.components {
.msp-shell-empty-canvas-empty {
  inset: 0 var(--msp-canvas-right-inset, 0) 0 0;
  pointer-events: none;
  animation: msp-shell-empty-canvas-fade-in .9s var(--msp-ease) both;
  position: absolute;

  &[data-phase="out"] {
    animation: msp-shell-empty-canvas-fade-out .25s var(--msp-ease) forwards;
  }
}

.msp-shell-empty-canvas-splash {
  inset: 0 calc(-1 * var(--msp-canvas-right-inset, 0px)) 0 0;
  animation: msp-shell-empty-canvas-fade-in 1.2s var(--msp-ease) both;
  position: absolute;
}

.msp-shell-empty-canvas-mark {
  color: var(--msp-color-text-subtle);
  position: absolute;
  top: round(down, 50% - 33px, 1px);
  left: round(down, 50% - 85.5px, 1px);
}

@keyframes msp-shell-empty-canvas-fade-in {
  from {
    opacity: 0;
  }
}

@keyframes msp-shell-empty-canvas-fade-out {
  to {
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .msp-shell-empty-canvas-empty {
    animation: none;
  }
}
}
`);var kn={splash:"msp-shell-prism-splash-splash"};N("views/shell/prism-splash.module.css",`@layer msp.components {
.msp-shell-prism-splash-splash {
  pointer-events: none;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
}
}
`);var Ss=class{constructor(){this.su=0;this.sv=0;this.drag=.6;this.confinement=0;this.#e=0;this.#s=0;this.#o=0;this.#r=0;this.#t=12;this.#a=new Float32Array(0);this.#n=new Float32Array(0);this.#i=new Float32Array(0);this.#h=new Float32Array(0);this.#u=new Float32Array(0);this.#f=new Float32Array(0);this.#S=0;this.#E=0;this.#P=0}#e;#s;#o;#r;#t;#a;#n;#i;#h;#u;#f;#S;#E;#P;get on(){return this.#o>=2&&this.#r>=2}layout(e,t,n,a){this.#e=e,this.#s=t;let o=12;n/o*(a/o)>4800&&(o=Math.sqrt(n*a/4800));let i=Math.max(0,Math.ceil(n/o)),l=Math.max(0,Math.ceil(a/o));if(i===this.#o&&l===this.#r&&o===this.#t)return;this.#o=i,this.#r=l,this.#t=o;let p=i*l;this.#a.length<p&&(this.#a=new Float32Array(p),this.#n=new Float32Array(p),this.#i=new Float32Array(p),this.#h=new Float32Array(p),this.#u=new Float32Array(p),this.#f=new Float32Array(p)),this.clear()}clear(){this.#a.fill(0),this.#n.fill(0),this.#u.fill(0)}sample(e,t){if(!this.on){this.su=0,this.sv=0;return}this.#y((e-this.#e)/this.#t-.5,(t-this.#s)/this.#t-.5),this.su=this.#g(this.#a),this.sv=this.#g(this.#n)}drive(e,t,n,a,o,i){if(!this.on)return;let l=this.#o,p=this.#t,d=o*o,m=Math.max(0,Math.floor((e-o-this.#e)/p)),c=Math.min(l-1,Math.ceil((e+o-this.#e)/p)),h=Math.max(0,Math.floor((t-o-this.#s)/p)),u=Math.min(this.#r-1,Math.ceil((t+o-this.#s)/p));for(let b=h;b<=u;b++){let g=this.#s+(b+.5)*p-t;for(let y=m;y<=c;y++){let w=this.#e+(y+.5)*p-e,S=w*w+g*g;if(S>=d)continue;let T=1-Math.sqrt(S)/o,C=i*T*T,I=b*l+y;this.#a[I]+=(n-this.#a[I])*C,this.#n[I]+=(a-this.#n[I])*C}}}swirl(e,t,n,a){if(!this.on)return;let o=this.#o,i=this.#t,l=a*a,p=Math.max(0,Math.floor((e-a-this.#e)/i)),d=Math.min(o-1,Math.ceil((e+a-this.#e)/i)),m=Math.max(0,Math.floor((t-a-this.#s)/i)),c=Math.min(this.#r-1,Math.ceil((t+a-this.#s)/i));for(let h=m;h<=c;h++){let u=this.#s+(h+.5)*i-t;for(let b=p;b<=d;b++){let g=this.#e+(b+.5)*i-e,y=g*g+u*u;if(y>=l||y<1e-6)continue;let w=Math.sqrt(y),S=w/a,T=n*6.75*S*(1-S)*(1-S)/w,C=h*o+b;this.#a[C]-=u*T,this.#n[C]+=g*T}}}step(e){this.on&&(this.#z(e),this.confinement>0&&this.#v(e),this.#d())}#z(e){let t=this.#o,n=this.#r,a=t*n,o=this.#a,i=this.#n,l=this.#i,p=this.#h;l.set(o.subarray(0,a)),p.set(i.subarray(0,a));let d=e/this.#t,m=Math.exp(-this.drag*e);for(let c=0,h=0;c<n;c++)for(let u=0;u<t;u++,h++){this.#y(u-.5*d*l[h],c-.5*d*p[h]);let b=this.#g(l),g=this.#g(p);this.#y(u-d*b,c-d*g),o[h]=this.#g(l)*m,i[h]=this.#g(p)*m}}#v(e){let t=this.#o,n=this.#r,a=this.#a,o=this.#n,i=this.#f,l=this.#i,p=2*this.#t;for(let m=0,c=0;m<n;m++)for(let h=0;h<t;h++,c++){let u=h<t-1?c+1:c,b=h>0?c-1:c,g=m<n-1?c+t:c,y=m>0?c-t:c;i[c]=(o[u]-o[b]-(a[g]-a[y]))/p,l[c]=Math.abs(i[c])}let d=this.confinement*this.#t*e;for(let m=1;m<n-1;m++)for(let c=1,h=m*t+1;c<t-1;c++,h++){let u=l[h+1]-l[h-1],b=l[h+t]-l[h-t],g=Math.sqrt(u*u+b*b)+1e-5;a[h]+=d*(b/g)*i[h],o[h]-=d*(u/g)*i[h]}}#d(){let e=this.#o,t=this.#r,n=this.#a,a=this.#n,o=this.#u,i=this.#f,l=this.#t,p=2*l;for(let d=0,m=0;d<t;d++)for(let c=0;c<e;c++,m++){let h=c<e-1?n[m+1]:n[m],u=c>0?n[m-1]:n[m],b=d<t-1?a[m+e]:a[m],g=d>0?a[m-e]:a[m];i[m]=(h-u+b-g)/p*l*l}for(let d=0;d<10;d++)for(let m=0,c=0;m<t;m++)for(let h=0;h<e;h++,c++){let u=h<e-1?o[c+1]:0,b=h>0?o[c-1]:0,g=m<t-1?o[c+e]:0,y=m>0?o[c-e]:0;o[c]=(u+b+g+y-i[c])*.25}for(let d=0,m=0;d<t;d++)for(let c=0;c<e;c++,m++){let h=c<e-1?o[m+1]:0,u=c>0?o[m-1]:0,b=d<t-1?o[m+e]:0,g=d>0?o[m-e]:0;n[m]-=(h-u)/p,a[m]-=(b-g)/p}}#y(e,t){let n=this.#o,a=this.#r;e<0?e=0:e>n-1&&(e=n-1),t<0?t=0:t>a-1&&(t=a-1);let o=e|0,i=t|0;o>n-2&&(o=n-2),i>a-2&&(i=a-2),this.#E=e-o,this.#P=t-i,this.#S=i*n+o}#g(e){let t=this.#S,n=this.#o,a=this.#E,o=this.#P;return(e[t]*(1-a)+e[t+1]*a)*(1-o)+(e[t+n]*(1-a)+e[t+n+1]*a)*o}};var Oe=4,ul=.8,Ct=class{#e;#s=0;#o=0;#r=new Float32Array(5);constructor(){if(typeof document>"u"||typeof Path2D!="function")return;let e=(J.width+2)*Oe,t=(J.height+2)*Oe,n=document.createElement("canvas");n.width=e,n.height=t;let a=n.getContext("2d",{willReadFrequently:!0});if(!a)return;a.filter=`blur(${ul*Oe}px)`,a.setTransform(Oe,0,0,Oe,Oe,Oe),a.fillStyle="#000",a.strokeStyle="#000",a.lineWidth=J.stroke(3),a.lineJoin="miter";for(let l of J.paths){let p=new Path2D(l);a.fill(p),a.stroke(p)}let o=a.getImageData(0,0,e,t).data,i=new Float32Array(e*t);for(let l=0;l<i.length;l++)i[l]=o[l*4+3]/255;this.#e=i,this.#s=e,this.#o=t}get ready(){return!!this.#e}rasterize(e,t,n,a,o,i,l,p,d,m){m.fill(0,0,p*d);let c=this.#e;if(!c)return;let h=this.#r,u=e.corners,b=this.#s,g=this.#o;for(let y=0;y<e.count;y++){e.place(y,h);let w=h[0],S=h[1],T=Math.cos(h[2]),C=Math.sin(h[2]),I=h[3],D=h[4],M=u[y*6],z=u[y*6+1],F=u[y*6+2],W=u[y*6+3],$=u[y*6+4],v=u[y*6+5],k=Number.POSITIVE_INFINITY,R=Number.NEGATIVE_INFINITY,G=Number.POSITIVE_INFINITY,K=Number.NEGATIVE_INFINITY;for(let X=0;X<3;X++){let pe=u[y*6+2*X],$e=u[y*6+2*X+1],Me=(t+(w+pe*T-$e*C)*a-o)/l,ae=(n+(S+pe*C+$e*T)*a-i)/l;Me<k&&(k=Me),Me>R&&(R=Me),ae<G&&(G=ae),ae>K&&(K=ae)}let oe=Math.max(0,Math.floor(k)),le=Math.min(p-1,Math.ceil(R)),de=Math.max(0,Math.floor(G)),ke=Math.min(d-1,Math.ceil(K));for(let X=de;X<=ke;X++)for(let pe=oe;pe<=le;pe++){let $e=0;for(let ae=0;ae<2;ae++)for(let fe=0;fe<2;fe++){let Pe=(o+(pe+.25+.5*fe)*l-t)/a-w,In=(i+(X+.25+.5*ae)*l-n)/a-S,Ut=Pe*T+In*C,Yt=-Pe*C+In*T,Hn=(F-M)*(Yt-z)-(W-z)*(Ut-M),On=($-F)*(Yt-W)-(v-W)*(Ut-F),Dn=(M-$)*(Yt-v)-(z-v)*(Ut-$);if(!(Hn>=0&&On>=0&&Dn>=0||Hn<=0&&On<=0&&Dn<=0))continue;let Fs=Math.round((I+Ut+1)*Oe),Rs=Math.round((D+Yt+1)*Oe);Fs>=0&&Rs>=0&&Fs<b&&Rs<g&&($e+=c[Rs*b+Fs])}let Me=X*p+pe;$e/4>m[Me]&&(m[Me]=$e/4)}}}};var Co={rate:24,speed:26,beam:260,width:10,spread:7,reach:320,alpha:.55,size:1.4,variety:.7,bob:.35,twinkle:.45,colors:!0,pulse:.55,intro:2.4,curl:.6,breathe:.3,interactive:!0,radius:90,push:520,wake:.5,swirl:.5,follow:.5,burst:36,seed:3},ue=1536,Ke=12,Es=5,fl=30,vl=22,bo=140,gl=1.6,bl=260,at=[0,1,2,3,5,6,7].map(s=>s*Math.PI/4),Mn=new Float32Array(at.length),Cn=220,yo=260,Sn=360,yl=900,Ts=60,xl=.5,wl=5,kl=700,xo=3,Ml=150,Cl=30,wo=36,ko=110,Mo=160,Bt=4,Ls=200,Sl=1.6,El=8,Tl=.8,Ll=["--msp-color-text-subtle","--msp-color-brand-1","--msp-color-brand-2","--msp-color-brand-3","--msp-color-brand-4"],Pl=Ll.map(s=>`var(${s})`);function En(s){let e=s>>>0||1;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Ps=class{#e;#s;#o;#r;#t;#a=new Float32Array(ue);#n=new Float32Array(ue);#i=new Float32Array(ue);#h=new Float32Array(ue);#u=new Float32Array(ue);#f=new Float32Array(ue);#S=new Float32Array(ue);#E=new Float32Array(ue);#P=new Float32Array(ue);#z=new Float32Array(ue);#v=new Uint8Array(ue);#d=0;#y=new Uint16Array(ue);#g=new Uint16Array(ue);#Q=new Uint16Array(Es*Ke);#j=new Uint16Array(Es*Ke);#p=["#888","#7a4f2f","#e0ae2c","#6f9a80","#3f86ad"];#l=0;#D=0;#x=1;#c=0;#w=0;#V=0;#$=0;#A=0;#T=0;#F=!1;#q=!0;#W=Number.NEGATIVE_INFINITY;#b;#R=0;#C=0;#k=0;#M=0;#I=!1;#K=0;#H=0;#ne=0;#U=0;#m;#Y=0;#X=0;#B=1;#ae;#ee=0;#oe;#te=new Float32Array(0);#N=0;#G=0;#re=0;#xe=0;#we=!0;#ie;#le=new Float32Array(xo*2);constructor(e,t={},n={}){if(this.#s=e,this.#o=e.getContext("2d"),this.#e={...Co,...t},this.#t=En(this.#e.seed),this.#b=!!n.still,!this.#b){this.#ie=new Ss;for(let a=0;a<this.#le.length;a++)this.#le[a]=this.#t()*Math.PI*2}}setOptions(e){let t=this.#e.seed;this.#e={...this.#e,...e},this.#e.seed!==t&&(this.#t=En(this.#e.seed),this.#d=0),this.#ce(),this.#b&&this.#se()}setOrigin(e,t){this.#c=e,this.#w=t,this.#ce(),this.#b&&this.#se()}#ce(){let e=this.#ie;if(!e)return;let t=this.#e,n=Math.max(0,this.#c-Math.max(t.beam,t.reach)-Ts),a=Math.min(this.#l,this.#c+t.reach+Ts),o=Math.max(0,this.#w-t.reach-Ts),i=Math.min(this.#D,this.#w+t.reach+Ts);e.layout(n,o,Math.max(0,a-n),Math.max(0,i-o))}resize(){let e=this.#s.clientWidth,t=this.#s.clientHeight,n=Math.min(2,globalThis.devicePixelRatio||1);e===this.#l&&t===this.#D&&n===this.#x||(this.#l=e,this.#D=t,this.#x=n,this.#s.width=Math.round(e*n),this.#s.height=Math.round(t*n),this.readColors(),this.#ce(),this.#b&&this.#se())}readColors(){if(typeof getComputedStyle!="function")return;let e=this.#s,t=e.style.color,n=!this.#ae;for(let a=0;a<Es;a++){e.style.color=Pl[a],this.#r??=getComputedStyle(e);let o=this.#r.color;o&&o!==this.#p[a]&&(this.#p[a]=o,n=!0)}if(e.style.color=t,this.#o&&n){let a=this.#o.createLinearGradient(0,0,J.width-2,0);a.addColorStop(0,this.#p[1]),a.addColorStop(.35,this.#p[2]),a.addColorStop(.6,this.#p[3]),a.addColorStop(1,this.#p[4]),this.#ae=a}}setWord(e,t,n){if(this.#Y=e,this.#X=t,this.#B=n,this.#ke(),this.#m)return!0;if(this.#b||typeof Path2D!="function")return!1;let a=new Ge(this.#e.seed+8);return a.onSnap=()=>{this.#ee+=this.#e.burst*.6},this.#m=a,this.#oe=new Ct,a.scatter(),!0}#ke(){let e=Math.ceil((J.width*this.#B+2*Ls)/Bt),t=Math.ceil((J.height*this.#B+2*Ls)/Bt);this.#te.length<e*t&&(this.#te=new Float32Array(e*t)),this.#N=this.#Y-Ls,this.#G=this.#X-Ls,this.#re=e,this.#xe=t,this.#we=!0}#Me(e,t){let n=(e-this.#N)/Bt,a=(t-this.#G)/Bt;return n<0||a<0||n>=this.#re||a>=this.#xe?1:1-Math.min(1,this.#te[(a|0)*this.#re+(n|0)]*Sl)}shatterAt(e,t){let n=this.#m;if(!n||!this.#e.interactive||this.#b)return!1;let a=(e-this.#Y)/this.#B,o=(t-this.#X)/this.#B;if(!n.hits(a,o))return!1;n.shatter(a,o);let i=Cn*Cn;for(let p=0;p<this.#d;p++){let d=this.#a[p]-e,m=this.#n[p]-t,c=d*d+m*m;if(c>=i)continue;let h=Math.sqrt(c)+.001,u=1-h/Cn;this.#i[p]+=d/h*yo*u,this.#h[p]+=m/h*yo*u}let l=this.#ie;if(l){let p=this.#t()*Math.PI*2,d=Math.cos(p)*wo,m=Math.sin(p)*wo;l.swirl(e+d,t+m,Mo,ko),l.swirl(e-d,t-m,-Mo,ko)}return this.#ee+=this.#e.burst,!0}pointerMove(e,t,n){if(!(!this.#e.interactive||this.#b)){if(this.#I&&this.#K){let a=Math.max(.008,(n-this.#K)/1e3);this.#k+=((e-this.#R)/a-this.#k)*.35,this.#M+=((t-this.#C)/a-this.#M)*.35,this.#H=Math.min(1,this.#H+Math.hypot(e-this.#R,t-this.#C)/bl)}this.#R=e,this.#C=t,this.#K=n,this.#I=!0,this.#m?.setPointer((e-this.#Y)/this.#B,(t-this.#X)/this.#B)}}pointerLeave(){this.#I=!1,this.#m?.clearPointer(),this.#k=0,this.#M=0}pointerDown(e,t,n){!this.#e.interactive||this.#b||(this.pointerMove(e,t,n),this.#ee+=this.#e.burst)}start(){this.#F=!0,this.#b?this.#se():this.#Ce()}stop(){this.#F=!1,this.#T&&cancelAnimationFrame(this.#T),this.#T=0}setVisible(e){this.#q=e,e&&this.#Ce()}dispose(){this.stop()}#Ce(){this.#b||!this.#F||!this.#q||this.#T||(this.#A=0,this.#T=requestAnimationFrame(this.#pe))}#pe=e=>{if(this.#T=0,!this.#F||!this.#q)return;let t=this.#A?Math.min(.1,(e-this.#A)/1e3):1/60;this.#A=e,e-this.#W>1500&&(this.#W=e,this.readColors()),e-this.#K>80&&(this.#k*=.85,this.#M*=.85),this.#_(t),this.#fe(),this.#T=requestAnimationFrame(this.#pe)};#se(){if(this.#l){this.#d=0,this.#$=0,this.#t=En(this.#e.seed);for(let e=0;e<fl;e+=1/30)this.#_(1/30);this.#fe()}}#he(){if(this.#d>=ue)return;let e=this.#e,t=this.#d++;this.#a[t]=this.#c-e.beam,this.#n[t]=this.#w+(this.#t()*2-1)*e.width;let n=this.#w-this.#n[t],a=Math.hypot(e.beam,n)||1,o=e.speed*(.8+this.#t()*.4);this.#i[t]=o*e.beam/a,this.#h[t]=o*n/a,this.#u[t]=o,this.#v[t]=0,this.#E[t]=this.#t()*Math.PI*2,this.#P[t]=.55+this.#t()*.35,this.#z[t]=.6+this.#t()*.9}#O(e){if(this.#d>=ue)return;let t=this.#e,n=this.#d++,a=1+Math.floor(this.#t()*4),o=this.#de(a,e*1.6),i=t.speed*(2.2+this.#t()*1.6);this.#a[n]=this.#c,this.#f[n]=this.#c,this.#n[n]=this.#w,this.#S[n]=this.#w,this.#i[n]=i*Math.cos(o),this.#h[n]=i*Math.sin(o),this.#u[n]=t.speed*(.8+this.#t()*.4),this.#v[n]=a,this.#E[n]=this.#t()*Math.PI*2,this.#P[n]=this.#L(),this.#z[n]=.6+this.#t()*.9}#L(){let e=this.#t();return 1+this.#e.variety*2*e*e*e}#de(e,t){let n=0;for(let i=0;i<at.length;i++){let l=Math.max(0,Math.cos(at[i]-this.#ne));Mn[i]=1+this.#U*6*l*l*l,n+=Mn[i]}let a=this.#t()*n,o=at[at.length-1];for(let i=0;i<at.length;i++)if(a-=Mn[i],a<=0){o=at[i];break}return o+t*((e-1)/1.5-1)+(this.#t()*2-1)*t*.22}#me(e){let t=--this.#d;this.#a[e]=this.#a[t],this.#n[e]=this.#n[t],this.#i[e]=this.#i[t],this.#h[e]=this.#h[t],this.#u[e]=this.#u[t],this.#f[e]=this.#f[t],this.#S[e]=this.#S[t],this.#v[e]=this.#v[t],this.#E[e]=this.#E[t],this.#P[e]=this.#P[t],this.#z[e]=this.#z[t]}#_(e){let t=this.#e;this.#$+=e;let n=this.#$;this.#H=Math.max(0,this.#H-e/gl),this.#m?.step(e);let a=this.#m;a&&this.#oe?.ready&&this.#re&&(this.#we||!a.resting)&&(this.#oe.rasterize(a,this.#Y,this.#X,this.#B,this.#N,this.#G,Bt,this.#re,this.#xe,this.#te),this.#we=!1);let o=!this.#m||this.#m.whole,i=t.intro>0?Math.min(1,Math.max(0,(n/t.intro-.5)*2)):1,l=1+(El-1)*(1-i*i*(3-2*i)),p=t.spread*Math.PI/180*(1+t.breathe*Math.sin(n*.37)),d=this.#I&&t.interactive?t.follow:0;d&&(this.#ne=Math.atan2(this.#C-this.#w,this.#R-this.#c)),this.#U+=(d-this.#U)*Math.min(1,e*1.5);let m=.5+.35*Math.sin(n*.83)+.15*Math.sin(n*2.1+1.3);for(this.#V+=e*t.rate*(1-t.pulse+t.pulse*2*m)*(1+2*this.#H)*l;this.#V>=1;)this.#V-=1,this.#he();for(;this.#ee>=1;)this.#ee-=1,this.#O(p);let c=this.#I&&t.interactive,h=this.#ie;if(h){if(t.curl>0)for(let C=0;C<xo;C++){let I=this.#c+t.reach*.55*Math.sin(n*(.05+.03*C)+this.#le[2*C]),D=this.#w+t.reach*.45*Math.cos(n*(.04+.025*C)+this.#le[2*C+1]);h.swirl(I,D,(C%2?-1:1)*t.curl*Cl*e,Ml)}if(c&&t.wake>0&&(this.#k||this.#M)){let C=t.wake*Math.min(1,kl/(Math.sqrt(this.#k*this.#k+this.#M*this.#M)||1));h.drive(this.#R,this.#C,this.#k*C,this.#M*C,t.radius*.7,Math.min(1,e*12))}h.drag=xl,h.confinement=t.swirl*wl,h.step(e)}let u=this.#m?this.#m.pull:0,b=this.#Y+(J.width/2-1)*this.#B,g=this.#X+(J.height/2-1)*this.#B,y=Sn*Sn,w=t.radius,S=w*w,T=Math.min(1,e/Tl);for(let C=0;C<this.#d;C++){let I=this.#i[C],D=this.#h[C],M=this.#a[C],z=this.#n[C];if(c){let K=M-this.#R,oe=z-this.#C,le=K*K+oe*oe;if(le<S){let de=Math.sqrt(le)+.001,ke=1-de/w,X=ke*ke;I+=K/de*t.push*X*e,D+=oe/de*t.push*X*e}}let F=Math.sqrt(I*I+D*D)||1,W=1+(this.#u[C]/F-1)*T;if(I*=W,D*=W,u>0){let K=b-M,oe=g-z,le=K*K+oe*oe;if(le<y){let de=Math.sqrt(le)+.001,ke=yl*u*(1-de/Sn)*e;I+=K/de*ke,D+=oe/de*ke}}let $=this.#v[C]===0?l:1,v=I*$,k=D*$,R=M+v*e,G=z+k*e;if(h?.on){let K=e/2;h.sample(M,z);let oe=h.su,le=h.sv;h.sample(M+(v+oe)*K,z+(k+le)*K);let de=h.su,ke=h.sv;h.sample(M+(v+de)*K,z+(k+ke)*K);let X=h.su,pe=h.sv;h.sample(M+(v+X)*e,z+(k+pe)*e),R+=(oe+2*de+2*X+h.su)*e/6,G+=(le+2*ke+2*pe+h.sv)*e/6}if(this.#i[C]=I,this.#h[C]=D,this.#a[C]=R,this.#n[C]=G,this.#v[C]===0)if(o&&M<this.#c&&R>=this.#c&&Math.abs(G-this.#w)<=vl){let K=1+Math.floor(this.#t()*4);this.#v[C]=K;let oe=this.#de(K,p),le=Math.hypot(I,D)*Math.min(3,l);this.#i[C]=le*Math.cos(oe),this.#h[C]=le*Math.sin(oe),this.#f[C]=R,this.#S[C]=G,this.#P[C]=this.#L()}else(R>this.#c+bo||R<this.#c-t.beam*1.5||Math.abs(G-this.#w)>t.reach)&&(this.#me(C),C--);else{let K=R-this.#f[C],oe=G-this.#S[C];K*K+oe*oe>t.reach*t.reach&&(this.#me(C),C--)}}}#ue(e){let t=this.#e,n;if(this.#v[e]===0){let a=this.#a[e],o=1-(this.#c-a)/t.beam;n=t.alpha/3*Math.min(1,Math.max(0,o*3)),a>this.#c&&(n*=Math.max(0,1-(a-this.#c)/bo))}else{let a=Math.hypot(this.#a[e]-this.#f[e],this.#n[e]-this.#S[e])/t.reach;n=t.alpha*Math.min(1,a*12)*(1-a)**1.6}return n*=this.#Me(this.#a[e],this.#n[e]),n*=1-t.twinkle+t.twinkle*(.5+.5*Math.sin(this.#$*(1.4+2.6*this.#z[e])+this.#E[e])),Math.max(0,Math.min(Ke-1,Math.round(n/Math.max(t.alpha,1e-6)*(Ke-1))))}#fe(){let e=this.#o;if(!e)return;let t=this.#e,n=this.#x;e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,this.#s.width,this.#s.height),e.setTransform(n,0,0,n,0,0);let a=this.#Q;a.fill(0);for(let l=0;l<this.#d;l++){let d=(t.colors?this.#v[l]:0)*Ke+this.#ue(l);this.#g[l]=d,a[d]++}let o=0;for(let l=0;l<a.length;l++)this.#j[l]=o,o+=a[l];a.fill(0);for(let l=0;l<this.#d;l++){let p=this.#g[l];this.#y[this.#j[p]+a[p]++]=l}let i=this.#$;for(let l=0;l<Es;l++){e.fillStyle=this.#p[l];for(let p=1;p<Ke;p++){let d=l*Ke+p,m=a[d];if(!m)continue;e.globalAlpha=t.alpha*p/(Ke-1),e.beginPath();let c=this.#j[d];for(let h=0;h<m;h++){let u=this.#y[c+h],b=this.#a[u],g=this.#n[u],y=t.size*this.#P[u];this.#v[u]!==0&&(y*=1+t.bob*Math.sin(i*(1.5+2*this.#z[u])+this.#E[u])),!(y<.2)&&(e.moveTo(b+y,g),e.arc(b,g,y,0,Math.PI*2))}e.fill()}}e.globalAlpha=1,this.#m?.draw(e,this.#Y,this.#X,this.#B,this.#ae??this.#p[1],this.#p[0],1,this.#x)}};var Io={rate:3.4,k:1.1,spectrum:.4,speed:64,prism:1.2,glow:.35,ripples:.45,spawn:160,decay:1.6,alpha:.6,size:1.3,colors:!0,interactive:!0,radius:36,barrier:2,kick:1.4,seed:3},E=128,So=7,te=5,ne=E*E,ot=.15,Eo=4,rt=14,zl=.18,Tn=1.6,Al=34,To=.45,Lo=1.5,De=12,Fl=20,Po=7,zo=8,Rl=.07,Ao=14,Il=.8,Fo=10,Ro=10,Hl=.5,Ol=.25,Dl=1.5,$l=.45,Ln=rt+6,Bl=.45,Nl=5,jl=3,Vl=1.2,ql=320,Gl=1.6,Ue=1500,Wl=5,Kl=.3,Ul=.25,Yl=.22,Ye=10,Nt=5,Xl=3,zs=.5,_l=["--msp-color-text-subtle","--msp-color-brand-1","--msp-color-brand-2","--msp-color-brand-3","--msp-color-brand-4"],Zl=_l.map(s=>`var(${s})`);function Pn(s){let e=s>>>0||1;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var zn=new Uint16Array(E);for(let s=0;s<E;s++){let e=0;for(let t=0;t<So;t++)e|=(s>>t&1)<<So-1-t;zn[s]=e}var Gt=new Float64Array(E/2),Wt=new Float64Array(E/2);for(let s=0;s<E/2;s++)Gt[s]=Math.cos(-2*Math.PI*s/E),Wt[s]=Math.sin(-2*Math.PI*s/E);function Ql(s,e){for(let t=0;t<ne;t+=E)for(let n=E;n>=2;n>>=1){let a=n>>1,o=E/n;for(let i=0;i<E;i+=n)for(let l=0;l<a;l++){let p=Gt[l*o],d=Wt[l*o],m=t+i+l,c=m+a,h=s[m],u=e[m],b=h-s[c],g=u-e[c];s[m]=h+s[c],e[m]=u+e[c],s[c]=b*p-g*d,e[c]=b*d+g*p}}for(let t=E;t>=2;t>>=1){let n=t>>1,a=E/t;for(let o=0;o<E;o+=t)for(let i=0;i<n;i++){let l=Gt[i*a],p=Wt[i*a],d=(o+i)*E,m=d+n*E;for(let c=0;c<E;c++){let h=d+c,u=m+c,b=s[h],g=e[h],y=b-s[u],w=g-e[u];s[h]=b+s[u],e[h]=g+e[u],s[u]=y*l-w*p,e[u]=y*p+w*l}}}}function Jl(s,e){for(let t=2;t<=E;t<<=1){let n=t>>1,a=E/t;for(let o=0;o<E;o+=t)for(let i=0;i<n;i++){let l=Gt[i*a],p=-Wt[i*a],d=(o+i)*E,m=d+n*E;for(let c=0;c<E;c++){let h=d+c,u=m+c,b=s[u]*l-e[u]*p,g=s[u]*p+e[u]*l;s[u]=s[h]-b,e[u]=e[h]-g,s[h]+=b,e[h]+=g}}}for(let t=0;t<ne;t+=E)for(let n=2;n<=E;n<<=1){let a=n>>1,o=E/n;for(let i=0;i<E;i+=n)for(let l=0;l<a;l++){let p=Gt[l*o],d=-Wt[l*o],m=t+i+l,c=m+a,h=s[c]*p-e[c]*d,u=s[c]*d+e[c]*p;s[c]=s[m]-h,e[c]=e[m]-u,s[m]+=h,e[m]+=u}}}function jt(s,e){let t=Math.abs(e),n=Math.abs(s),a=t>n?t:n;if(a===0)return 0;let o=(t<n?t:n)/a,i=o*o,l=((-.0464964749*i+.15931422)*i-.327622764)*i*o+o;return n>t&&(l=1.5707963267948966-l),e<0&&(l=3.141592653589793-l),s<0?-l:l}var An=new Float64Array(ne),Fn=new Float64Array(ne),Vt=new Float32Array(ne),Rn=new Float32Array(ne),qt=new Float32Array(ne);for(let s=0;s<E;s++){let e=zn[s],t=2*Math.PI*(e<E/2?e:e-E)/E,n=Math.max(0,rt-Math.min(s,E-1-s))/rt;for(let a=0;a<E;a++){let o=zn[a],i=2*Math.PI*(o<E/2?o:o-E)/E,l=-(i*i+t*t)*ot/2;An[s*E+a]=Math.cos(l)/ne,Fn[s*E+a]=Math.sin(l)/ne;let p=Math.max(0,rt-Math.min(a,E-1-a))/rt,d=Math.max(p,n);Vt[s*E+a]=1-zl*d*d,Rn[s*E+a]=Math.sqrt(Vt[s*E+a]);let m=Math.hypot(a+.5-E/2,s+.5-E/2)/(E/2-rt),c=Math.min(1,Math.max(0,(1-m)/Bl));qt[s*E+a]=c*c*(3-2*c)}}var St=(()=>{let s=[];for(let e=1;e<E-1;e++)for(let t=1;t<E-1;t++)qt[e*E+t]>0&&s.push(e*E+t);return Int32Array.from(s)})(),As=class{#e;#s;#o;#r;#t;#a;#n=new Float64Array(ne);#i=new Float64Array(ne);#h=new Float32Array(ne);#u=new Float64Array(ne);#f=new Float64Array(ne);#S=new Float64Array(ne);#E=new Float64Array(ne);#P=new Float32Array(E);#z=new Float32Array(E);#v=new Float32Array(E);#d=new Float32Array(E);#y=new Float32Array(ne);#g=new Float32Array(ne);#Q=new Float32Array(ne);#j=new Float32Array(St.length);#p=zs;#l=0;#D=!1;#x=!0;#c=0;#w=0;#V=0;#$=new Float32Array(De);#A=new Float32Array(De);#T=new Float32Array(De);#F=new Float32Array(De);#q=new Float32Array(De);#W=new Float32Array(De);#b=new Float32Array(De);#R=new Uint8Array(De);#C=0;#k=new Float32Array(Ue);#M=new Float32Array(Ue);#I=new Float32Array(Ue);#K=0;#H=0;#ne=new Float32Array(Ue);#U=new Uint8Array(Ue);#m=0;#Y=new Uint16Array(Ue);#X=new Uint16Array(Ue);#B=new Uint16Array(Nt*Ye);#ae=new Uint16Array(Nt*Ye);#ee;#oe;#te=null;#N=["#888","#7a4f2f","#e0ae2c","#6f9a80","#3f86ad"];#G=new Uint8Array(Nt*3);#re=new Float32Array(ne);#xe=new Float32Array(ne);#we=new Float32Array(ne);#ie=!1;#le=1/60;#ce=!1;#ke;#Me=0;#Ce=0;#pe=1;#se=0;#he=0;#O=0;#L=0;#de=0;#me=0;#_=0;#ue=!1;#fe=!0;#ze=Number.NEGATIVE_INFINITY;#Ae=0;#Fe=0;#Ee=!1;#Z;#ve=0;#ge=0;#J=1;#Re=!0;#Te;#be=new Float32Array(ne);#Ie=0;#Le=0;constructor(e,t={},n={}){if(this.#s=e,this.#o=e.getContext("2d"),this.#e={...Io,...t},this.#t=Pn(this.#e.seed),this.#a=!!n.still,typeof document<"u"&&this.#o){let a=document.createElement("canvas");a.width=E,a.height=E;let o=a.getContext("2d");o&&(this.#oe=a,this.#te=o,this.#ee=o.createImageData(E,E))}}setOptions(e){let t=this.#e.seed;this.#e={...this.#e,...e},this.#e.seed!==t&&(this.#t=Pn(this.#e.seed),this.#n.fill(0),this.#i.fill(0),this.#m=0,this.#C=0,this.#K=0,this.#H=0,this.#l=0,this.#p=zs,this.#D=!1),this.#x=!0,this.#a&&this.#Se()}setOrigin(e,t){this.#se=e,this.#he=t,this.#O=e-.47*E*te,this.#L=t-.5*E*te,this.#x=!0,this.#a&&this.#Se()}resize(){let e=this.#s.clientWidth,t=this.#s.clientHeight,n=Math.min(2,globalThis.devicePixelRatio||1);e===this.#Me&&t===this.#Ce&&n===this.#pe||(this.#Me=e,this.#Ce=t,this.#pe=n,this.#s.width=Math.round(e*n),this.#s.height=Math.round(t*n),this.readColors(),this.#a&&this.#Se())}readColors(){if(typeof getComputedStyle!="function")return;let e=this.#s,t=e.style.color,n=!this.#ke;for(let a=0;a<Nt;a++){e.style.color=Zl[a],this.#r??=getComputedStyle(e);let o=this.#r.color;if(!o||o===this.#N[a])continue;this.#N[a]=o,n=!0;let i=/rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/.exec(o);i&&(this.#G[a*3]=+i[1],this.#G[a*3+1]=+i[2],this.#G[a*3+2]=+i[3])}if(e.style.color=t,this.#ce=.299*this.#G[0]+.587*this.#G[1]+.114*this.#G[2]>128,this.#o&&n){let a=this.#o.createLinearGradient(0,0,J.width-2,0);a.addColorStop(0,this.#N[1]),a.addColorStop(.35,this.#N[2]),a.addColorStop(.6,this.#N[3]),a.addColorStop(1,this.#N[4]),this.#ke=a}}setWord(e,t,n){if(this.#ve=e,this.#ge=t,this.#J=n,this.#Z)return!0;if(this.#a||typeof Path2D!="function")return!1;let a=new Ge(this.#e.seed+8);return a.onSnap=()=>{this.#Le+=3},this.#Z=a,this.#Te=new Ct,a.scatter(),!0}shatterAt(e,t){let n=this.#Z;if(!n||!this.#e.interactive||this.#a)return!1;let a=(e-this.#ve)/this.#J,o=(t-this.#ge)/this.#J;return n.hits(a,o)?(n.shatter(a,o),this.#Ne(e,t,this.#e.kick*1.6,90),this.#x=!0,!0):!1}pointerMove(e,t,n){!this.#e.interactive||this.#a||(this.#Ae=e,this.#Fe=t,this.#Ee=!0,this.#x=!0,this.#Z?.setPointer((e-this.#ve)/this.#J,(t-this.#ge)/this.#J))}pointerLeave(){this.#Ee=!1,this.#x=!0,this.#Z?.clearPointer()}pointerDown(e,t,n){!this.#e.interactive||this.#a||(this.pointerMove(e,t,n),this.#Ne(e,t,this.#e.kick,70))}start(){this.#ue=!0,this.#a?this.#Se():this.#He()}stop(){this.#ue=!1,this.#_&&cancelAnimationFrame(this.#_),this.#_=0}setVisible(e){this.#fe=e,e&&this.#He()}dispose(){this.stop()}#He(){this.#a||!this.#ue||!this.#fe||this.#_||(this.#me=0,this.#_=requestAnimationFrame(this.#Oe))}#Oe=e=>{if(this.#_=0,!this.#ue||!this.#fe)return;let t=this.#me?Math.min(.1,(e-this.#me)/1e3):1/60;this.#me=e,e-this.#ze>1500&&(this.#ze=e,this.readColors()),this.#le=t,this.#Ve(t),this.#qe(),this.#_=requestAnimationFrame(this.#Oe)};#Se(){if(this.#Me){this.#n.fill(0),this.#i.fill(0),this.#m=0,this.#C=0,this.#K=0,this.#H=0,this.#l=0,this.#p=zs,this.#D=!1,this.#de=0,this.#t=Pn(this.#e.seed);for(let e=0;e<6;e+=1/20)this.#Ve(1/20);this.#qe()}}#De(){let e=this.#e;return e.speed/(Math.max(.2,e.k)*te)}#Ge(){let e=this.#e,t=this.#n,n=this.#i,a=2*Ro*Ro;for(let o=0;o<Fo;o++){let i=(this.#he-this.#L)/te,l=Ln+(o+.3+.4*this.#t())/Fo*(E-rt-Ln),p=i+(this.#t()*2-1)*Ao*1.4,d=(this.#t()*2-1)*Ol,m=e.k*(1+e.spectrum*(this.#t()*2-1)),c=m*Math.cos(d),h=m*Math.sin(d),u=this.#t()*Math.PI*2;for(let b=0;b<E;b++){let g=b-p;for(let y=0;y<E;y++){let w=y-l,S=Hl*Math.exp(-(w*w+g*g)/a);if(S<1e-4)continue;let T=c*w+h*g+u,C=b*E+y;t[C]+=S*Math.cos(T),n[C]+=S*Math.sin(T)}}}}#$e(e,t,n,a,o,i){let l=this.#C;l>=De||(this.#$[l]=e,this.#A[l]=t,this.#T[l]=Math.cos(n),this.#F[l]=Math.sin(n),this.#q[l]=a,this.#W[l]=o,this.#b[l]=this.#V,this.#R[l]=i?1:0,this.#C=l+1)}#Be(){let e=this.#n,t=this.#i;for(let n=0;n<this.#C;n++){let a=(this.#V-this.#b[n])/Fl;if(a>=1){let $=--this.#C;this.#$[n]=this.#$[$],this.#A[n]=this.#A[$],this.#T[n]=this.#T[$],this.#F[n]=this.#F[$],this.#q[n]=this.#q[$],this.#W[n]=this.#W[$],this.#b[n]=this.#b[$],this.#R[n]=this.#R[$],n--;continue}let o=Math.sin(Math.PI*a),i=this.#W[n]*Rl*o*o*ot*(this.#R[n]?this.#l:1),l=this.#q[n],p=this.#T[n],d=this.#F[n],m=this.#$[n],c=this.#A[n],h=Math.abs(d)<.001,u=h?Po:(Po+zo)/2,b=h?zo:u,g=l*p,y=l*d,w=Math.max(1,Math.floor(m-3*u)),S=Math.min(E-2,Math.ceil(m+3*u)),T=Math.max(1,Math.floor(c-3*b)),C=Math.min(E-2,Math.ceil(c+3*b)),I=this.#P,D=this.#z;for(let $=w;$<=S;$++){let v=$-m,k=Math.exp(-(v*v)/(2*u*u));I[$]=k*Math.cos(g*v),D[$]=k*Math.sin(g*v)}let M=this.#V-this.#b[n],z=-l*l*M/2,F=this.#v,W=this.#d;for(let $=T;$<=C;$++){let v=$-c,k=i*Math.exp(-(v*v)/(2*b*b));F[$]=k*Math.cos(y*v+z),W[$]=k*Math.sin(y*v+z)}for(let $=T;$<=C;$++){let v=F[$],k=W[$];if(Math.abs(v)+Math.abs(k)<1e-7)continue;let R=$*E;for(let G=w;G<=S;G++)e[R+G]+=v*I[G]-k*D[G],t[R+G]+=v*D[G]+k*I[G]}}}#Ne(e,t,n,a){let o=(e-this.#O)/te,i=(t-this.#L)/te,l=a/te,p=Math.max(0,Math.floor(o-l)),d=Math.min(E-1,Math.ceil(o+l)),m=Math.max(0,Math.floor(i-l)),c=Math.min(E-1,Math.ceil(i+l));for(let h=m;h<=c;h++)for(let u=p;u<=d;u++){let b=u-o,g=h-i,y=Math.sqrt(b*b+g*g);if(y>=l)continue;let w=1-y/l,S=n*y*w*w,T=h*E+u,C=Math.cos(S),I=Math.sin(S),D=this.#n[T],M=this.#i[T];this.#n[T]=D*C-M*I,this.#i[T]=D*I+M*C}}#We(e){let t=this.#e,n=this.#h;n.fill(0);let a=t.k*t.k/2,o=(this.#se-this.#O)/te,i=(this.#he-this.#L)/te;if(this.#Z&&this.#Te?.ready){this.#Te.rasterize(this.#Z,this.#ve,this.#ge,this.#J,this.#O,this.#L,te,E,E,this.#be);let c=t.prism*a;for(let h=0;h<ne;h++)n[h]-=c*this.#be[h]}else{this.#be.fill(0);let c=Al/te,h=t.prism*a,u=Math.ceil(c+Lo+1);for(let b=Math.max(0,Math.floor(i-u));b<=Math.min(E-1,i+u);b++)for(let g=Math.max(0,Math.floor(o-u));g<=Math.min(E-1,o+u);g++){let y=g-o,w=b-i,S=Math.sqrt(y*y+w*w),T=Math.cos(4*Math.atan2(w,y)),C=c*(1-To+To*T*T),I=Math.min(1,Math.max(0,(C-S)/Lo+.5));I>0&&(n[b*E+g]-=h*I*I*(3-2*I))}}if(this.#Ee&&t.interactive&&t.barrier>0){let c=(this.#Ae-this.#O)/te,h=(this.#Fe-this.#L)/te,u=Math.max(1,t.radius/te/1.5),b=2*u*u,g=3*u,y=t.barrier*a;for(let w=Math.max(0,Math.floor(h-g));w<=Math.min(E-1,h+g);w++)for(let S=Math.max(0,Math.floor(c-g));S<=Math.min(E-1,c+g);S++){let T=S-c,C=w-h;n[w*E+S]+=y*Math.exp(-(T*T+C*C)/b)}}if(e>0){let c=(this.#ve+(J.width/2-1)*this.#J-this.#O)/te,h=(this.#ge+(J.height/2-1)*this.#J-this.#L)/te,u=ql/te,b=Gl*a*e;for(let g=0;g<E;g++)for(let y=0;y<E;y++){let w=y-c,S=g-h,T=Math.sqrt(w*w+S*S);T<u&&(n[g*E+y]-=b*(1-T/u))}}let l=this.#u,p=this.#f,d=this.#S,m=this.#E;for(let c=0;c<ne;c++){if(n[c]===0){l[c]=Rn[c],p[c]=0,d[c]=Vt[c],m[c]=0;continue}let h=-n[c]*ot/2,u=Rn[c],b=Math.cos(h),g=Math.sin(h);l[c]=b*u,p[c]=g*u,d[c]=(b*b-g*g)*Vt[c],m[c]=2*b*g*Vt[c]}}#Pe(e,t){let n=this.#n,a=this.#i;for(let o=0;o<ne;o++){let i=n[o],l=a[o];n[o]=i*e[o]-l*t[o],a[o]=i*t[o]+l*e[o]}}#Ke(e){let t=this.#n,n=this.#i;this.#Be(),this.#V+=ot,this.#Pe(this.#u,this.#f);for(let a=0;a<e;a++){Ql(t,n);for(let o=0;o<ne;o++){let i=t[o],l=n[o];t[o]=i*An[o]-l*Fn[o],n[o]=i*Fn[o]+l*An[o]}Jl(t,n),a===e-1?this.#Pe(this.#u,this.#f):(this.#Pe(this.#S,this.#E),this.#Be(),this.#V+=ot)}}#Ue(e){let t=this.#n,n=this.#i,a=this.#Q,o=this.#y,i=this.#g,l=2.5*Math.max(.2,this.#e.k),p=l*l,d=0,m=0,c=this.#j,h=this.#be;for(let u=0;u<St.length;u++){let b=St[u],g=t[b],y=n[b],w=g*g+y*y;a[b]=w;let S=h[b]*Tn,T=S>=1?0:w*(1-S);if(T>d&&(d=T),m+=T,c[u]=m,w<1e-9){o[b]=0,i[b]=0;continue}let C=t[b+1],I=n[b+1],D=t[b-1],M=n[b-1],z=(jt(I*g-C*y,C*g+I*y)+jt(y*D-g*M,g*D+y*M))/2,F=t[b+E],W=n[b+E],$=t[b-E],v=n[b-E],k=(jt(W*g-F*y,F*g+W*y)+jt(y*$-g*v,g*$+y*v))/2,R=z*z+k*k;if(R>p){let G=l/Math.sqrt(R);z*=G,k*=G}o[b]=z,i[b]=k}this.#p=Math.max(zs,this.#p+(d-this.#p)*Math.min(1,e*Vl))}#ye(e,t,n){let a=(t-this.#O)/te,o=(n-this.#L)/te;a<0?a=0:a>E-1.001&&(a=E-1.001),o<0?o=0:o>E-1.001&&(o=E-1.001);let i=a|0,l=o|0,p=a-i,d=o-l,m=l*E+i;return(e[m]*(1-p)+e[m+1]*p)*(1-d)+(e[m+E]*(1-p)+e[m+E+1]*p)*d}#je(e,t){let n=this.#e,a=Math.sqrt(e*e+t*t);if(a<.001||Math.abs(jt(t,e))<Yl)return 0;let o=n.k*(1-n.spectrum),i=(a-o)/Math.max(.001,2*n.k*n.spectrum);return 1+Math.min(3,Math.max(0,Math.floor(i*4)))}#Ye(e){let t=this.#j,n=t[t.length-1];if(n<.001)return!1;let a=this.#t()*n,o=0,i=t.length-1;for(;o<i;){let m=o+i>>1;t[m]<a?o=m+1:i=m}let l=St[o],p=l%E,d=l/E|0;return this.#k[e]=this.#O+(p+this.#t())*te,this.#M[e]=this.#L+(d+this.#t())*te,this.#I[e]=0,this.#ne[e]=this.#t()*Math.PI*2,this.#U[e]=this.#je(this.#y[l],this.#g[l]),!0}#Ve(e){let t=this.#e;this.#de+=e,this.#Z?.step(e);let n=this.#Z,a=n?n.pull:0;this.#l+=((n?n.assembled:1)-this.#l)*Math.min(1,e*Xl);let o=!n||n.whole;(o!==this.#Re||a>0||this.#Ie>0||n&&!n.resting)&&(this.#x=!0),this.#Re=o,this.#Ie=a,this.#x&&(this.#We(a),this.#x=!1);let i=(this.#se-this.#O)/te,l=(this.#he-this.#L)/te;for(this.#D||(this.#D=!0,this.#Ge()),this.#w+=e*t.rate;this.#w>=1;){this.#w-=1;let y=l+(this.#t()*2-1)*Ao,w=t.k*(1+t.spectrum*(this.#t()*2-1));this.#$e(Ln,y,0,w,Il,!0)}for(;this.#Le>=1;){this.#Le-=1;let y=Math.floor(this.#t()*8)*Math.PI/4,w=t.k*(1+t.spectrum*(this.#t()*2-1));this.#$e(i+Math.cos(y)*4,l+Math.sin(y)*4,y,w,$l,!1)}this.#c+=e*this.#De();let p=0;for(;this.#c>=ot&&p<Eo;)this.#c-=ot,p++;p===Eo&&(this.#c=0),p&&this.#Ke(p),this.#Ue(e);let d=this.#De()*te,m=Wl*Math.max(.1,t.decay),c=this.#O,h=this.#L,u=this.#O+E*te,b=this.#L+E*te;for(let y=0;y<this.#m;y++){let w=this.#k[y],S=this.#M[y],T=this.#ye(this.#y,w,S)*d,C=this.#ye(this.#g,w,S)*d,I=w+T*e/2,D=S+C*e/2,M=this.#ye(this.#y,I,D),z=this.#ye(this.#g,I,D),F=w+M*d*e,W=S+z*d*e;this.#k[y]=F,this.#M[y]=W,this.#I[y]+=e,this.#U[y]===0&&(this.#U[y]=this.#je(M,z)),(this.#I[y]>m||F<c||W<h||F>=u||W>=b||qt[((W-h)/te|0)*E+((F-c)/te|0)|0]===0)&&(this.#Xe(y),y--)}let g=this.#j[this.#j.length-1];for(this.#l>.9&&(this.#H=this.#H?this.#H+(g-this.#H)*Math.min(1,e*Ul):g),this.#K+=e*t.spawn*(this.#H>1e-6?g/this.#H:this.#l);this.#K>=1;)this.#K-=1,!(this.#m>=Ue||!this.#Ye(this.#m))&&this.#m++}#Xe(e){let t=--this.#m;this.#k[e]=this.#k[t],this.#M[e]=this.#M[t],this.#I[e]=this.#I[t],this.#ne[e]=this.#ne[t],this.#U[e]=this.#U[t]}#_e(){let e=this.#ee;if(!e||!this.#te)return;let t=this.#e,n=e.data,a=this.#Q,o=1/this.#p,i=Math.min(1,t.glow)*(this.#ce?jl:1)*255*Math.min(1,this.#de/Dl),l=this.#G,p=this.#re,d=this.#xe,m=this.#we;if(!this.#ie){let b=t.colors?6:0,g=t.colors?9:0;p.fill((l[b]+l[g])/2),d.fill((l[b+1]+l[g+1])/2),m.fill((l[b+2]+l[g+2])/2),this.#ie=!0}let c=Math.min(1,this.#le*Nl),h=t.k*(1-t.spectrum),u=Math.max(.001,2*t.k*t.spectrum);for(let b=0;b<St.length;b++){let g=St[b],y=a[g]*o,w=g*4;if(y<1e-4){n[w+3]=0;continue}let S=l[0],T=l[1],C=l[2],I=1;if(t.colors){let F=this.#y[g],W=this.#g[g],$=Math.min(2.999,Math.max(0,(Math.sqrt(F*F+W*W)-h)/u*4-.5)),v=$|0,k=$-v,R=(1+v)*3,G=(2+v)*3;S=l[R]*(1-k)+l[G]*k,T=l[R+1]*(1-k)+l[G+1]*k,C=l[R+2]*(1-k)+l[G+2]*k,I=Math.min(1,y*12)}let D=c*I;p[g]+=(S-p[g])*D,d[g]+=(T-d[g])*D,m[g]+=(C-m[g])*D,n[w]=p[g],n[w+1]=d[g],n[w+2]=m[g];let M=1-t.ripples*.5*(1-this.#n[g]/Math.sqrt(a[g])),z=1-Math.min(1,this.#be[g]*Tn);n[w+3]=Math.min(255,i*Math.min(1,Math.sqrt(y))*M*qt[g]*z)}this.#te.putImageData(e,0,0)}#qe(){let e=this.#o;if(!e)return;let t=this.#e,n=this.#pe;e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,this.#s.width,this.#s.height),e.setTransform(n,0,0,n,0,0),t.glow>0&&this.#oe&&(this.#_e(),e.imageSmoothingEnabled=!0,this.#ce&&(e.globalCompositeOperation="lighter"),e.drawImage(this.#oe,this.#O,this.#L,E*te,E*te),e.globalCompositeOperation="source-over");let a=this.#B;a.fill(0);let o=-Math.LN2/Math.max(.1,t.decay);for(let p=0;p<this.#m;p++){let d=this.#I[p],m=this.#k[p],c=this.#M[p],h=1-Math.min(1,this.#ye(this.#be,m,c)*Tn),u=Math.min(1,d/Kl)*Math.exp(d*o)*this.#ye(qt,m,c)*h,b=Math.max(0,Math.min(Ye-1,Math.round(u*(Ye-1)))),y=(t.colors?this.#U[p]:0)*Ye+b;this.#X[p]=y,a[y]++}let i=0;for(let p=0;p<a.length;p++)this.#ae[p]=i,i+=a[p];a.fill(0);for(let p=0;p<this.#m;p++){let d=this.#X[p];this.#Y[this.#ae[d]+a[d]++]=p}let l=this.#de;for(let p=0;p<Nt;p++){e.fillStyle=this.#N[p];for(let d=1;d<Ye;d++){let m=p*Ye+d,c=a[m];if(!c)continue;e.globalAlpha=(p===0?.5:1)*t.alpha*d/(Ye-1),e.beginPath();let h=this.#ae[m];for(let u=0;u<c;u++){let b=this.#Y[h+u],g=t.size*(p===0?.7:1)*(1+.25*Math.sin(l*2.2+this.#ne[b])),y=this.#k[b],w=this.#M[b];e.moveTo(y+g,w),e.arc(y,w,g,0,Math.PI*2)}e.fill()}}e.globalAlpha=1,this.#Z?.draw(e,this.#ve,this.#ge,this.#J,this.#ke??this.#N[1],this.#N[0],1,this.#pe)}};function ec(){return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}function Ho(s){let e=r("canvas",{class:s.class?`${kn.splash} ${s.class}`:kn.splash,"aria-hidden":"true"}),t={still:ec()},n=s.field==="quantum"?new As(e,{},t):new Ps(e,{},t);s.options&&U(s.options,w=>n.setOptions(w));let a=0,o=0,i=()=>{let w=e.getBoundingClientRect();a=w.left,o=w.top},l=()=>{n.resize();let w=e.getBoundingClientRect();a=w.left,o=w.top;let T=s.mark?.()?.querySelector('[data-part="star"]')?.getBoundingClientRect();T?.width?n.setOrigin(T.left+T.width/2-w.left,T.top+T.height/2-w.top):n.setOrigin(w.width/2,w.height/2);let C=p(),I=C?.getBoundingClientRect();if(C&&I?.width){let D=I.width/J.width;n.setWord(I.left-w.left+D,I.top-w.top+D,D)&&(C.style.visibility="hidden")}},p=()=>{let w=s.mark?.();if(w)return w.matches("[role=img]")?w:w.querySelector("[role=img]")},d=!1,m=typeof ResizeObserver=="function"?new ResizeObserver(()=>{l(),d||(d=!0,y(),n.start())}):void 0;m?.observe(e);let c=!0,h=!0,u=()=>n.setVisible(c&&h&&document.visibilityState==="visible"),b=typeof IntersectionObserver=="function"?new IntersectionObserver(([w])=>{c=w?.isIntersecting??!0,u()}):void 0;b?.observe(e),document.addEventListener("visibilitychange",u),addEventListener("scroll",i,{capture:!0,passive:!0}),Jt(w=>{h=w,u()});let g=()=>{};function y(){let w=s.pointer?.();if(!w)return;let S=D=>{let M=D;n.pointerMove(M.clientX-a,M.clientY-o,M.timeStamp)},T=D=>{let M=D,z=M.clientX-a,F=M.clientY-o;n.shatterAt(z,F)||n.pointerDown(z,F,M.timeStamp)},C=D=>{(D.type!=="pointerup"||D.pointerType!=="mouse")&&n.pointerLeave()},I={passive:!0};w.addEventListener("pointermove",S,I),w.addEventListener("pointerdown",T,I),w.addEventListener("pointerleave",C,I),w.addEventListener("pointerup",C,I),w.addEventListener("pointercancel",C,I),g=()=>{w.removeEventListener("pointermove",S),w.removeEventListener("pointerdown",T),w.removeEventListener("pointerleave",C),w.removeEventListener("pointerup",C),w.removeEventListener("pointercancel",C)}}return q(()=>{let w=p();w&&(w.style.visibility=""),m?.disconnect(),b?.disconnect(),document.removeEventListener("visibilitychange",u),removeEventListener("scroll",i,{capture:!0}),g(),n.dispose()}),e}var tc=700,sc=2/3,nc=250;function Oo(s){let e=B([s.empty.pipe(H()),s.busy??re(!1)]).pipe(Zt(([a,o])=>a?o?qn:Hs(tc).pipe(f(()=>"in")):Vn(re("out"),Hs(nc).pipe(f(()=>"gone")))),Wn("gone"),Gn((a,o)=>o==="out"&&a!=="in"?"gone":o),H(),Kn(a=>{a==="in"?s.onCanvasShown?.(!1):a==="out"&&s.onCanvasShown?.(!0)}),it({bufferSize:1,refCount:!0}));s.onCanvasShown&&U(s.empty,a=>!a&&s.onCanvasShown?.(!0));let t=s.splash??!0,n=()=>{if(typeof t=="object")return"light";let a=s.field??"random";return a==="random"?Math.random()<sc?"quantum":"light":a};return r(P,{when:e.pipe(f(a=>a!=="gone")),children:()=>{let a=r(ln,{scale:3,flash:"reveal",live:!t,prism:!t,class:Cs.mark});return x("div",{class:Cs.empty,"data-phase":e,children:[t?r("div",{class:Cs.splash,children:r(Ho,{field:n(),mark:()=>a,pointer:()=>a.closest("[data-msp-viewport]")??a.parentElement,options:t===!0?{}:t})}):null,a]})}})}var Kt={"drop-in":"msp-shell-file-drop-drop-in",hint:"msp-shell-file-drop-hint",overlay:"msp-shell-file-drop-overlay",target:"msp-shell-file-drop-target",title:"msp-shell-file-drop-title"};N("views/shell/file-drop.module.css",`@layer msp.components {
.msp-shell-file-drop-overlay {
  z-index: var(--msp-z-overlay);
  padding: var(--msp-canvas-edge);
  background: color-mix(in oklab, var(--msp-color-bg), transparent 25%);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  animation: msp-shell-file-drop-drop-in var(--msp-motion-fast) var(--msp-ease);
  display: grid;
  position: absolute;
  inset: 0;

  &[hidden] {
    display: none;
  }
}

@keyframes msp-shell-file-drop-drop-in {
  from {
    opacity: 0;
  }
}

.msp-shell-file-drop-target {
  place-content: center;
  justify-items: center;
  gap: var(--msp-space-2);
  border: 1.5px dashed var(--msp-color-border-strong);
  border-radius: var(--msp-radius-lg);
  color: var(--msp-color-text-muted);
  pointer-events: none;
  display: grid;
}

.msp-shell-file-drop-title {
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-md);
  font-weight: 600;
}

.msp-shell-file-drop-hint {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}
}
`);function Do(s){let e=V(!1),t=a=>{ac(a)&&e.set(!0)};s.target.addEventListener("dragenter",t),q(()=>s.target.removeEventListener("dragenter",t));let n=a=>{a.preventDefault(),a.stopPropagation(),a.dataTransfer&&(a.dataTransfer.dropEffect="copy")};return r("div",{class:Kt.overlay,hidden:e.asReadonly.pipe(f(a=>!a)),onDragEnter:n,onDragOver:n,onDragLeave:()=>e.set(!1),onDrop:a=>{n(a),e.set(!1);let o=[...a.dataTransfer?.files??[]];o.length&&s.onDrop(o)},children:x("div",{class:Kt.target,children:[r(L,{name:"folder-open",size:24}),r("span",{class:Kt.title,children:"Drop to open"}),s.formats?.length?r("span",{class:Kt.hint,children:s.formats.join(", ")}):null]})})}function ac(s){let e=s.dataTransfer?.types;if(!e)return!1;for(let t=0;t<e.length;t++)if(e[t]==="Files")return!0;return!1}var Et={body:"msp-shell-page-body",header:"msp-shell-page-header",headerContent:"msp-shell-page-headerContent",page:"msp-shell-page-page","page-in":"msp-shell-page-page-in",title:"msp-shell-page-title"};N("views/shell/page.module.css",`@layer msp.components {
.msp-shell-page-page {
  top: var(--msp-canvas-edge);
  right: var(--msp-canvas-right-inset, var(--msp-canvas-edge));
  bottom: var(--msp-canvas-edge);
  left: var(--msp-canvas-edge);
  z-index: var(--msp-z-dialog);
  border-radius: var(--msp-radius-lg);
  --msp-color-bg: var(--msp-color-panel);
  background: var(--msp-color-bg);
  min-width: 0;
  box-shadow: var(--msp-glass-shadow);
  color: var(--msp-color-text);
  animation: msp-shell-page-page-in var(--msp-motion-base) var(--msp-ease-reveal);
  flex-direction: column;
  display: flex;
  position: absolute;
  overflow: hidden;
}

.msp-shell-page-header {
  align-items: center;
  gap: var(--msp-space-4);
  min-width: 0;
  height: 44px;
  padding: 0 var(--msp-space-3) 0 var(--msp-space-5);
  display: flex;
}

.msp-shell-page-title {
  align-items: center;
  gap: var(--msp-space-3);
  flex: none;
  font-weight: 600;
  display: flex;
}

.msp-shell-page-headerContent {
  align-items: center;
  gap: var(--msp-space-4);
  flex: auto;
  min-width: 0;
  display: flex;
}

.msp-shell-page-body {
  flex-direction: column;
  flex: 1 1 0;
  min-height: 0;
  display: flex;
}

:where([data-mode="compact"]) .msp-shell-page-page {
  right: var(--msp-canvas-edge);
}

@keyframes msp-shell-page-page-in {
  from {
    opacity: 0;
    transform: scale(.99);
  }
}

@media (prefers-reduced-motion: reduce) {
  .msp-shell-page-page {
    animation: none;
  }
}
}
`);function $o(s){let{shell:e}=s,t=e.page.pipe(f(n=>n?.page),H());return r(P,{when:t,children:n=>r(oc,{shell:e,page:n})})}function oc(s){let{shell:e}=s,t={page:s.page,focus:e.page.value?.focus},n={shell:e,...t.focus?{focus:t.focus}:{}},a=x("section",{class:Et.page,role:"region","aria-label":t.page.title,tabIndex:-1,"data-msp-page":"",children:[x("header",{class:Et.header,children:[x("span",{class:Et.title,children:[t.page.icon?r(L,{name:t.page.icon}):null,t.page.title]}),r("div",{class:Et.headerContent,children:t.page.header?r(Le,{renderer:t.page.header,ctx:n}):null}),r(ce,{variant:"ghost",size:"sm",icon:r(L,{name:"x"}),title:"Close (Esc)",onClick:()=>e.closePage()})]}),r("div",{class:Et.body,children:r(Le,{renderer:t.page.render,ctx:n})})]}),o=je(document),i=l=>{if(l.key!=="Escape"||l.defaultPrevented||!Ce(a,l))return;let p=je(a);p&&p!==document.body&&!a.contains(p)||(e.closePage(),l.preventDefault())};return document.addEventListener("keydown",i),queueMicrotask(()=>{a.contains(je(a))||a.focus({preventScroll:!0})}),q(()=>{document.removeEventListener("keydown",i),o?.isConnected&&o.focus({preventScroll:!0})}),a}var Bo=44,we=8,rc=34+we;function ic(s){let{shell:e,status:t}=s,n=e.dock("right"),a=e.mode.pipe(f(v=>v==="compact"),H()),o=e.dock("top"),i=e.expanded,l=i.pipe(f(v=>!v)),p=B([n.state,e.mode]).pipe(f(([v,k])=>v.floating&&k!=="compact"),H()),d=o.state.pipe(f(v=>v.floating),H()),m=B([o.state,o.active,d,i]).pipe(f(([v,k,R,G])=>R&&k&&!G?k.frame==="none"?v.size-Ds+we:we+v.size+we:we),H(),f(v=>`${v}px`)),h=B([p,e.railShown,i]).pipe(f(([v,k,R])=>v&&!k||R),H()).pipe(f(v=>v?0:Bo)),u=B([p,e.compactRail,i]).pipe(f(([v,k,R])=>v&&k&&!R),H()),b=B([h,u]).pipe(f(([v,k])=>k?0:v),H()),g=B([p,e.compactRail,i]).pipe(f(([v,k,R])=>v&&k&&!R),H()),y=B([n.state,p,i]).pipe(f(([v,k,R])=>k&&v.pinned&&!R),H()),w=B([n.state,n.active,e.overlay,y,h]).pipe(f(([v,k,R,G,K])=>G?K+(k||R?v.size:0):0),H()),S=B([w,p,b]).pipe(f(([v,k,R])=>v>0?v:k?R:0),H()),T=B([n.state,n.active,p,y,h,i,a]).pipe(f(([v,k,R,G,K,oe,le])=>G||oe?we:(le?0:K)+we+(R&&k?v.size+we:0)),H(),f(v=>`${v}px`)),C=B([y,a,b,u,i]).pipe(f(([v,k,R,G,K])=>v||k||K?we:(G?Bo:R)+we),H(),f(v=>`${v}px`)),I=B([n.active,p,i]).pipe(f(([v,k,R])=>k&&v&&!R?"open":void 0),H()),D=n.state.pipe(f(v=>`${v.size}px`)),M=r("div",{class:nt.canvas,"data-msp-canvas":"","data-quiet":s.empty?"":void 0,children:s.canvas}),z=v=>M.toggleAttribute("data-quiet",!v),F=x("div",{class:nt.shell,"data-mode":e.mode,"data-expanded":i.pipe(f(v=>v?"":void 0)),children:[r(P,{when:B([d,i]).pipe(f(([v,k])=>!v&&!k)),children:()=>r(Ot,{shell:e,dock:o})}),r(P,{when:l,children:()=>r(Ot,{shell:e,dock:e.dock("left")})}),x("main",{class:nt.viewport,"data-msp-viewport":"",style:{"--msp-canvas-edge":`${we}px`,"--msp-canvas-right-inset":T,"--msp-canvas-corner-inset":C,"--msp-corner-room":`${rc}px`,"--msp-canvas-top-inset":m,"--msp-canvas-end":S.pipe(f(v=>`${v}px`)),"--msp-band-fade":`${Ds}px`,"--msp-band-dissolve":`${Xn}px`,"--msp-canvas-rail-inset":h.pipe(f(v=>`${v+we}px`)),"--msp-right-panel-width":D,"--msp-canvas-panel-right":h.pipe(f(v=>`${v+we}px`)),"--msp-canvas-pinned":w.pipe(f(v=>`${v}px`)),background:s.ink?s.ink.pipe(f(v=>v.color)):void 0},children:[M,x("div",{class:`${nt.layer} ${nt.canvasLayer}`,"data-msp-theme":s.ink?s.ink.pipe(f(v=>v.theme)):"light",style:{"--msp-color-bg":s.ink?s.ink.pipe(f(v=>v.color)):void 0},children:[r(P,{when:B([d,i]).pipe(f(([v,k])=>v&&!k)),children:()=>r(un,{shell:e,dock:o})}),s.empty?r(Oo,{empty:s.empty,splash:s.splash??!0,field:s.splashField??"random",onCanvasShown:z,...s.busy?{busy:s.busy}:{}}):null,r("div",{class:A.lead,children:s.playback}),s.overlays,r(P,{when:g,children:()=>r(fo,{shell:e})}),r("div",{class:A.bottom,children:x("div",{class:A.bottomGrid,children:[r(bn,{status:t,onOpenLog:s.onOpenLog,after:s.agent}),x("div",{class:A.corner,children:[r(co,{shell:e,lead:s.canvasLead,aside:s.canvasAside,quiet:s.empty}),r(uo,{status:t,lead:s.context?.()})]})]})})]}),x("div",{class:nt.layer,"data-right-panel":I,"data-pinned":y.pipe(f(v=>v?"":void 0)),"data-overlay":e.overlay.pipe(f(v=>v?"open":void 0)),children:[r(ho,{shell:e}),r($o,{shell:e}),r(P,{when:l,children:()=>r(P,{when:p,fallback:()=>r(P,{when:a.pipe(f(v=>!v)),children:()=>r("div",{class:`${A.toolbarSlot} ${A.frame}`,children:r($t,{shell:e})})}),children:()=>{let v=pt(e.railShown,()=>r(un,{shell:e,dock:n,railItems:k=>r($t,{shell:e,part:"rest",hidden:k.hidden,railMenu:(R,G)=>k.toggleMenu(G,R)}),railFoot:k=>r($t,{shell:e,part:"lead",hidden:k.hidden,railMenu:(R,G)=>k.toggleMenu(G,R)})}));return U(e.railShown,k=>v.toggleAttribute("data-rail-hidden",!k)),U(e.compactRail,k=>v.toggleAttribute("data-rail-overlay",k)),v}})})]})]}),r(P,{when:B([p,i]).pipe(f(([v,k])=>!v&&!k)),children:()=>r(Ot,{shell:e,dock:n,stripEnd:r(P,{when:a,children:()=>r(po,{shell:e})})})}),r(P,{when:l,children:()=>r(Ot,{shell:e,dock:e.dock("bottom")})}),s.commandMenu,r(mo,{status:t})]});s.onDropFiles&&F.appendChild(r(Do,{target:F,onDrop:s.onDropFiles,formats:s.dropFormats}));let W=v=>{if(!(v.key!=="Escape"||v.defaultPrevented||e.overlay.value||ba(Re(v)))&&Ce(F,v)){if(i.value){e.setExpanded(!1),v.preventDefault();return}n.state.value.pinned||!n.state.value.collapsed&&n.active.value!==void 0&&(e.toggle("right"),v.preventDefault())}};document.addEventListener("keydown",W),q(()=>document.removeEventListener("keydown",W)),q(go(F));let $=new ResizeObserver(v=>e.setWidth(v[0].contentRect.width));return $.observe(F),q(()=>$.disconnect()),F}export{ze as a,q as b,Jt as c,U as d,se as e,Gs as f,P as g,Y as h,Se as i,ut as j,Qe as k,Ee as l,kc as m,Ua as n,N as o,Cc as p,Sc as q,L as r,r as s,x as t,dr as u,ce as v,di as w,Ce as x,ka as y,Te as z,tn as A,mi as B,ui as C,Fi as D,os as E,ie as F,fr as G,gr as H,Ze as I,ft as J,Je as K,us as L,Rt as M,Ri as N,Jr as O,ei as P,ti as Q,si as R,Wa as S,ni as T,ai as U,Hi as V,Le as W,sl as X,ol as Y,ll as Z,ci as _,cl as $,ic as aa};
