import{a as Ds}from"./chunk-KHBNYRDQ.js";import{G as $s,I as ao,M as Wt,N as bn,O as Lt,P as oo,R as ro,S as io,a as Kt,b as Ya,c as Ns,e as Os,f as y,g as Xa,h as dt,i as B,j as Je,l as _a,m as Qa,n as et,o as mt,p as Rt,q as Za,r as Ja,s as eo,t as to,u as no,v as so}from"./chunk-GF5XNTCX.js";import{c as Wa,g as Ga,h as gn,q as Ua}from"./chunk-FY6Y25VJ.js";import{Ba as Ka,Va as vn,ea as ja,qb as Gn,ra as qa}from"./chunk-IAG3P5FE.js";function lo(n,e){let t=n.listen;if(typeof t=="function")return t.call(n,e);if(!gn(n))throw new Error("listen: not a state or a stream");let s=!0,a=n.subscribe(()=>{s||e()});return s=!1,()=>a.unsubscribe()}var Un=!1,xn=class{},qs=class extends xn{constructor(t,s){super();this.stream=t;this.fn=s}#e;#n=!1;#a=!1;start(){if(this.#n||this.#a)return;this.#n=!0;let t=Un,s=tt.starting;Un=!0,this.site&&(tt.starting=this.site);try{this.#r()}finally{Un=t,tt.starting=s}}#r(){let t=this.stream;if(typeof t.listen=="function"){this.#e=t.listen(this.fn);let a=t.value;if(this.fn(a),!this.#n)return;let o=t.value;Object.is(o,a)||this.fn(o);return}let s=this.stream.subscribe(this.fn);this.#n?this.#e=s:s.unsubscribe()}stop(){this.#n=!1;let t=this.#e;this.#e=void 0,typeof t=="function"?t():t?.unsubscribe()}unsubscribe(){this.#a=!0,this.stop()}},tt={},yn=[],pt=0,co=[],Ks=[],Ws=0,mo=[],Bs=!1;Ja.flush=()=>Ye();_a.after=()=>{if(Ye(),!Bs){Bs=!0;try{let n=Ks,e=Ws;Ks=mo,Ws=0,mo=n,uo(n,e)}finally{Bs=!1}Ye()}};var Vs=new Int32Array(64),mi=[];function pi(n,e){let t=!0,s=0;for(let r=0;r<e;r++){let i=n[r].depth;i>s&&(s=i),r>0&&i<n[r-1].depth&&(t=!1)}if(t)return;Vs.length<=s+1&&(Vs=new Int32Array(2*(s+1)));let a=Vs;a.fill(0,0,s+2);for(let r=0;r<e;r++)a[n[r].depth+1]++;for(let r=1;r<=s+1;r++)a[r]+=a[r-1];let o=mi;for(let r=0;r<e;r++){let i=n[r];o[a[i.depth]++]=i}for(let r=0;r<e;r++)n[r]=o[r],o[r]=void 0}function uo(n,e){pi(n,e);for(let t=0;t<e;t++){let s=n[t];n[t]=void 0,s.queued&&(s.queued=!1,s.run())}}var Gs=!1,js=!1,hi=100;function ui(n){if(!n.queued){if(n.queued=!0,n.frame){Ks[Ws++]=n,Qa();return}yn[pt++]=n,!Gs&&(Gs=!0,queueMicrotask(fi))}}function fi(){Gs=!1,Ye()}function Ye(){if(!js){js=!0;try{for(let n=0;pt>0||to("task");n++){if(n===hi){console.error("watch: renders kept marking watches (a render sets what it watches?); dropped",pt);for(let s=0;s<pt;s++)yn[s].queued=!1,yn[s]=void 0;pt=0,eo();break}if(no("task"),pt===0)continue;let e=yn,t=pt;yn=co,pt=0,co=e,uo(e,t)}}finally{js=!1}}}var Us=class extends xn{constructor(t,s,a){super();this.depth=t;this.#r=!1;this.#t=!1;this.queued=!1;this.frame=!1;this.#o=()=>{this.#r&&(this.because?.add(Ns.source),ui(this))};this.#e=s,this.#n=a,this.frame=ho(s)}#e;#n;#a;#r;#t;#o;retarget(t){if(this.#t)return;let s=this.#r;this.stop(),this.#e=vo(t),this.frame=ho(this.#e),s&&this.start()}start(){if(this.#r||this.#t)return;this.#r=!0;let t=this.#e,s=new Array(t.length),a=tt.starting;this.site&&(tt.starting=this.site);try{for(let o=0;o<t.length;o++)s[o]=lo(t[o],this.#o)}finally{tt.starting=a}this.#a=s,this.run()}run(){if(!this.#r)return;Ya.render++;let t=st;st=void 0;try{this.#n()}catch(s){console.error(s)}finally{st=t}}stop(){this.#r=!1,this.queued=!1;let t=this.#a;if(this.#a=void 0,t)for(let s=0;s<t.length;s++)t[s]()}unsubscribe(){this.#t=!0,this.stop()}},wn=class n{#e;#n;#a;#r=!1;#t=!1;#o=!0;#s=!0;#i;constructor(e){this.#e=e,this.depth=e?e.depth+1:0,this.#s=e?e.#s:!0}get active(){return this.#s}setActive(e){this.#o!==e&&(this.#o=e,this.#h())}#h(){if(this.#r)return;let e=this.#o&&(this.#e?this.#e.#s:!0);if(e===this.#s)return;this.#s=e,e&&this.#u(!0),this.#f(e),e||this.#u(!1);let t=this.#n;if(t)for(let s of t)s.#h()}#u(e){let t=this.#a;if(t)for(let s=0;s<t.length;s++){let a=t[s];a instanceof xn&&(e?a.start():a.stop())}}#f(e){let t=this.#i;if(t)for(let s=0;s<t.length;s++)try{t[s](e)}catch(a){console.error(a)}}onActive(e){if(!this.#r){(this.#i??=[]).push(e);try{e(this.#s)}catch(t){console.error(t)}}}follow(e){let t=De(e);t?this.own(t.subscribe(s=>this.setActive(!!s))):this.setActive(!!e)}bind(e,t,s=!1){let a=tt.on,o=s?void 0:tt.run,r=o?new Error().stack??"":"",i=o?p=>o("write",r,[Un?void 0:Ns.source],()=>t(p)):t,c=new qs(e,a?p=>{a("write",this),i(p)}:i);o&&(c.site=r),this.own(c),this.#s&&c.start()}watch(e,t){let s=vo(e),a=tt.on,o=tt.run,r=o?new Error().stack??"":"",i,c=o?()=>{let p=i.because.size?[...i.because]:[void 0];i.because.clear(),o("render",r,p,t)}:t;return i=new Us(this.depth,s,a?()=>{a("render",this),c()}:c),o&&(i.because=new Set,i.site=r),this.own(i),this.#s&&i.start(),i}get disposed(){return this.#r}child(){let e=new n(this);return this.#r?e.dispose():(this.#n??=new Set).add(e),e}onCleanup(e){if(this.#r){po(e);return}(this.#a??=[]).push(e)}own(e){if(this.#r){e.unsubscribe();return}(this.#a??=[]).push(e)}dispose(){if(this.#r)return;this.#r=!0,this.#t=!0,this.#i=void 0;let e=this.#n;if(e){let a=[...e];for(let o=a.length-1;o>=0;o--)a[o].dispose();this.#n=void 0}let t=this.#a;if(this.#a=void 0,t)for(let a=t.length-1;a>=0;a--){let o=t[a];typeof o=="function"?po(o):o.unsubscribe()}let s=this.#e;s&&!s.#t&&s.#n?.delete(this)}};function po(n){try{n()}catch(e){console.error(e)}}var st;function Yn(){return st}function be(n="A binding"){if(!st)throw new Error(`${n} was created outside a render scope; render with \`render\` or in an element.`);return st}function Ae(n,e){let t=st;st=n;try{return e()}finally{st=t}}function ne(n){be("onCleanup").onCleanup(n)}function fo(n){let e=new wn;return Ae(e,()=>n(()=>e.dispose()))}function De(n){if(gn(n))return n;if(n&&typeof n=="object"&&"asReadonly"in n&&gn(n.asReadonly))return n.asReadonly}function Gt(n){be("onActive").onActive(n)}function he(n,e){let t=De(n);if(!t){e(n);return}be().bind(t,e)}function O(n,e){return be("watch").watch(n,e)}function Se(n,e){let t=De(n);if(!t){e(n);return}be("effect").bind(t,e,!0)}function ho(n){for(let e=0;e<n.length;e++)if(n[e].frameLane===!0)return!0;return!1}function qe(n,e){let t=new Za(n,e);return Yn()?.onCleanup(()=>t.dispose()),t}function vo(n){let e=[];for(let t of n){let s=De(t)??(typeof t.listen=="function"?t:void 0);s&&e.push(s)}return e}var vi="http://www.w3.org/2000/svg",gi=new Set(["svg","animate","animateMotion","animateTransform","circle","clipPath","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","tspan","use","view"]),bi=new Set(["list","form","download","role","width","height"]),xo=Symbol("Passthrough");function wo(n,e){if(typeof n=="function"){let a=n(e??{});return a&&typeof a=="object"&&xo in a?a:Xs(a)}let t=gi.has(n),s=t?document.createElementNS(vi,n):document.createElement(n);if(e){let a=n==="select"&&"value"in e;yo(s,e,t,n.includes("-"),a);let o=e.children;typeof o=="string"||typeof o=="number"?s.textContent=String(o):o!==void 0&&Ke(s,o,null),a&&yo(s,{value:e.value},t,!1),typeof e.ref=="function"&&e.ref(s)}return s}function xe(n){let e=document.createDocumentFragment();return Ke(e,n.children,null),e}function Xs(n){if(n instanceof Node)return n;let e=document.createDocumentFragment();return Ke(e,n,null),e}function Ke(n,e,t){if(!(e==null||typeof e=="boolean"))if(e instanceof Node)n.insertBefore(e,t);else if(Array.isArray(e))for(let s of e)Ke(n,s,t);else if(typeof e=="function")Ke(n,e(),t);else if(typeof e=="object"){let s=De(e);s?_s(n,s,t):console.warn("Cannot render",e)}else n.insertBefore(document.createTextNode(String(e)),t)}function yi(n){let e=typeof n;return n===null||e==="undefined"||e==="string"||e==="number"||e==="bigint"||e==="boolean"}function _s(n,e,t,s=!1){let a=be("A reactive child"),o=document.createTextNode("");n.insertBefore(o,t);let r,i,c,p;he(e,d=>{if(s&&typeof d=="function"&&d===p)return;if(p=d,yi(d)){let f=d==null||typeof d=="boolean"?"":String(d);if(o){o.data!==f&&(o.data=f);return}m(),o=document.createTextNode(f),i.parentNode.insertBefore(o,i);return}if(!r){r=document.createComment(""),i=document.createComment("");let f=o;f.parentNode.insertBefore(r,f),f.parentNode.insertBefore(i,f.nextSibling)}o&&(o.remove(),o=void 0),m();let h=a.child();c=h;let u=document.createDocumentFragment();Ae(h,()=>Ke(u,d,null)),i.parentNode.insertBefore(u,i)});function m(){c?.dispose(),c=void 0,r&&i&&Mn(r,i)}}function Mn(n,e){let t=n.parentNode;if(!t)return;let s=n.nextSibling;for(;s&&s!==e;){let a=s.nextSibling;t.removeChild(s),s=a}}var ko=new Set(["click","dblclick","contextmenu","input","change","beforeinput","keydown","keyup","pointerdown","pointerup","pointermove","pointerover","pointerout","pointercancel","mousedown","mouseup","mousemove","mouseover","mouseout","focusin","focusout"]),Qs=Symbol("handlers"),Xn=Symbol("walked"),go=new WeakSet,bo=new Map;function Mo(n){if(!go.has(n)){go.add(n);for(let e of ko)n.addEventListener(e,wi),n.addEventListener(e,xi,!0)}}function xi(n){if(n.bubbles||n[Xn])return;n[Xn]=n.currentTarget;let e=n.target,t=e[Qs]?.[n.type];if(t){Object.defineProperty(n,"currentTarget",{configurable:!0,value:e});try{t.call(e,n)}finally{delete n.currentTarget,Ye()}}}function wi(n){if(!n.bubbles)return;let e=n.currentTarget,t=n.composedPath(),s=t.indexOf(e);if(s<0)return;let a=n[Xn],o=a?t.indexOf(a):-1,r=!1;try{for(let i=a?o<0?s+1:o+1:0;i<=s;i++){let c=t[i],p=c[Qs]?.[n.type];if(p&&(Object.defineProperty(n,"currentTarget",{configurable:!0,value:c}),r=!0,p.call(c,n),n.cancelBubble))break}}finally{n[Xn]=e,r&&(delete n.currentTarget,Ye())}}function ki(n,e,t){if(!ko.has(e)){n.addEventListener(e,t);return}(n[Qs]??={})[e]=t,typeof document<"u"&&Mo(document)}var Ys=n=>n===null||typeof n!="object"&&typeof n!="function";function yo(n,e,t,s,a=!1){let o;for(let r in e){let i=e[r];if(!(r==="children"||r==="ref"||i===void 0||a&&r==="value")){if(r==="class"&&typeof i=="string"&&e.classList===void 0){i&&n.setAttribute("class",i);continue}if(r.startsWith("on:"))n.addEventListener(r.slice(3),i);else if(r.length>2&&r.startsWith("on")&&r.charCodeAt(2)<91&&typeof i=="function"){let c=bo.get(r);c===void 0&&bo.set(r,c=r.slice(2).toLowerCase()),ki(n,c,i)}else if(r==="class"||r==="className")o??=new _n(n),he(i,c=>o.setBase(c));else if(r==="classList"){o??=new _n(n);for(let c of Object.keys(i))he(i[c],p=>o.setFlag(c,!!p))}else if(r==="style")Mi(n,i);else if(r.startsWith("attr:")){let c=r.slice(5);he(i,p=>kn(n,c,p))}else if(r.startsWith("prop:")){let c=r.slice(5);he(i,p=>{n[c]=p})}else if(t||r.includes("-"))Ys(i)?kn(n,r,i):he(i,c=>kn(n,r,c));else if(s)he(i,c=>{n[r]=c});else if(r in n&&!bi.has(r)){if(Ys(i)){n[r]=i===null?"":i,(i===null||i===!1)&&n.removeAttribute(r);continue}he(i,c=>{n[r]=c??"",(c==null||c===!1)&&n.removeAttribute(r)})}else Ys(i)?kn(n,r,i):he(i,c=>kn(n,r,c))}}}function kn(n,e,t){typeof t=="boolean"&&e.startsWith("aria-")?n.setAttribute(e,String(t)):t==null||t===!1?n.removeAttribute(e):n.setAttribute(e,t===!0?"":String(t))}var _n=class{constructor(e){this.el=e}#e="";#n=new Map;setBase(e){this.#e=e??"",this.#a()}setFlag(e,t){this.#n.set(e,t),this.#a()}#a(){let e=this.#e;for(let[t,s]of this.#n)s&&(e=e?`${e} ${t}`:t);e?this.el.setAttribute("class",e):this.el.removeAttribute("class")}};function Mi(n,e){if(typeof e=="string"||De(e)){he(e,s=>{s?n.setAttribute("style",s):n.removeAttribute("style")});return}let t=e;for(let s of Object.keys(t)){let a=s.startsWith("--")||s.includes("-")?s:Ci(s),o=!a.startsWith("--")&&!Si.has(a);he(t[s],r=>{r==null||r===""?n.style.removeProperty(a):n.style.setProperty(a,typeof r=="number"&&o&&r!==0?`${r}px`:String(r))})}}var Si=new Set(["opacity","z-index","flex","flex-grow","flex-shrink","order","line-height","font-weight","zoom","aspect-ratio","scale","fill-opacity","stroke-opacity","stroke-width","grid-row","grid-column","tab-size","orphans","widows","columns","column-count"]);function Ci(n){return n.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function Zs(n,e,t){Mo(e);let s=t?t.child():new wn,a=document.createComment(""),o=document.createComment(""),r=document.createDocumentFragment();return r.append(a),Ae(s,()=>Ke(r,n(),null)),r.append(o),e.appendChild(r),()=>{s.dispose(),Mn(a,o),a.remove(),o.remove()}}function Qn(n,e){if(typeof n.animate!="function"||!n.isConnected||globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches)return;let t=getComputedStyle(n),s=t.getPropertyValue("--msp-ease-reveal").trim()||"ease";if(e==="fade"){let r=So(t.getPropertyValue("--msp-motion-fade"))||360;return n.animate([{opacity:1},{opacity:0}],{duration:r,easing:s,fill:"forwards"})}let a=So(t.getPropertyValue("--msp-motion-base"))||220,o=e==="side"?[{opacity:1,translate:"0 0"},{opacity:0,translate:"12px 0"}]:[{height:`${n.getBoundingClientRect().height}px`,opacity:1,overflow:"clip"},{height:"0px",paddingBlock:"0px",marginBlock:"0px",opacity:0,overflow:"clip"}];return n.animate(o,{duration:a,easing:s,fill:"forwards"})}function Co(n,e){let t=n?.startViewTransition;if(!n?.isConnected||typeof t!="function"||globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches){e();return}t.call(n,e)}function So(n){let e=n.trim(),t=Number.parseFloat(e);return e.endsWith("ms")?t:e.endsWith("s")?t*1e3:t}function Ti(n){return De(n)??Ga(n)}function Ei(n){let e=document.createDocumentFragment();return _s(e,n,null,!0),e}function L(n){let e=!0,t=!1,s=[],a,o,r=(i,c)=>()=>{let p=n.children(i);if(s=sa(p),c)for(let m of s)m.setAttribute("data-reveal",n.reveal===!0?"":String(n.reveal));return p};return Ei(new Wa(i=>{let c,p=!0,m=Ti(n.when).pipe(Ua()).subscribe(d=>{if(c)for(let k of c)k.cancel();c=void 0;let h=t,u=!e&&!h&&!!d,f=!e&&h&&!d;e=!1,t=!!d;let v=p;if(p=!1,d){if(!(h&&o&&(Object.is(d,a)||v&&Kt(d,a)))&&(a=d,o=r(d,!!n.reveal&&u),h&&n.swap)){let T=o;Co(n.swap(),()=>{o===T&&i.next(T)});return}i.next(o);return}a=o=void 0;let g=n.reveal===!0?"grow":n.reveal,w=f&&g?s.map(k=>Qn(k,g)):[];if(w.length===0||w.some(k=>!k)){i.next(n.fallback??null);return}let b=w;c=b;for(let k of s)Js(k,!0);Promise.all(b.map(k=>k.finished)).then(()=>{c!==b||i.closed||(c=void 0,i.next(n.fallback??null))},()=>{})});return()=>{if(m.unsubscribe(),c)for(let d of c)d.cancel()}}))}function Js(n,e){n.toggleAttribute("inert",e)}function ht(n,e){let t=be("activity"),s=t.child();s.follow(n);let a=Ae(s,e),o=sa(a),r=De(n);if(r)o.length>0&&t.own(r.subscribe(i=>{for(let c of o)Js(c,!i)}));else if(!n)for(let i of o)Js(i,!0);return a}function sa(n){return n instanceof Element?[n]:n instanceof DocumentFragment?[...n.children]:Array.isArray(n)?n.flatMap(e=>sa(e)):[]}var Ri=12,Eo=64,Pt=0,ea=0,ta=new Set,na=!1,To="auto";function Li(){return To!=="auto"?To:typeof document<"u"&&!/jsdom/i.test(globalThis.navigator?.userAgent??"")}function Sn(){return Li()?(Pt===0&&(Pt=performance.now()+Ri,ea=0,queueMicrotask(()=>{Pt=0})),++ea<=Eo||performance.now()<Pt):!0}function Zn(n){ta.add(n),!na&&(na=!0,Ka.setImmediate(Pi))}function Pi(){na=!1,Pt=0;let n=[...ta];ta.clear();for(let e of n)Ai()?Zn(e):e()}function Ai(){return Pt!==0&&ea>Eo&&performance.now()>=Pt}function ie(n){let e=be("For"),t=n.by??n.key??(A=>A),s=document.createComment("for"),a=document.createComment("/for"),o=document.createDocumentFragment();o.append(s,a);let r=new Map,i,c=!1,p=n.children.length>1,m=(A,C,$)=>{let M=e.child(),E=p?B($):void 0,D=document.createDocumentFragment();Ae(M,()=>Ke(D,n.children(C,E?.asReadonly),null));let N,Y;return D.childNodes.length===1&&D.firstChild.nodeType===Node.ELEMENT_NODE?N=Y=D.firstChild:(N=document.createComment(""),Y=document.createComment(""),D.insertBefore(N,D.firstChild),D.appendChild(Y)),{key:A,item:C,scope:M,index:E,first:N,last:Y,pos:-1,at:$}},d=A=>{let C=[A.first],$=A.first;for(;$!==A.last&&($=$.nextSibling);)C.push($);return C},h=A=>{A.scope.dispose();for(let C of d(A))C.parentNode?.removeChild(C)},u=[],f,v=!1,g=!1;ne(()=>{g=!0});let w=()=>{v||(v=!0,Zn(()=>{v=!1,!(g||!e.active)&&(f?.items===u?I(f):T(u))}))},b=[],k=A=>{let C=A.length;if(C===0||C!==b.length)return!1;for(let $=0;$<C;$++)if(b[$].item!==A[$])return!1;return!0},T=A=>{if(u=A,f=void 0,k(A))return;let C=a.parentNode;if(A.length===0&&r.size>0){for(let ee of r.values())ee.scope.dispose();r=new Map;let W=document.createRange();W.setStartAfter(s),W.setEndBefore(a),W.deleteContents()}let $=new Map,M=[],E,D;for(let W=0;W<A.length;W++){let ee=A[W],P=t(ee);if($.has(P)){c||(c=!0,console.warn("For: duplicate key; later items with the same key are not rendered.",P));continue}let U=r.get(P);if(U&&U.item!==ee&&(h(U),U=void 0),!U){if(!Sn()){(E??=[]).push(W),(D??=[]).push(P);continue}U=m(P,ee,W)}U.index?.set(W),U.at=W,$.set(P,U),M.push(U)}for(let[W,ee]of r)$.has(W)||h(ee);r=$;let N=zi(M),Y=a;for(let W=M.length-1;W>=0;W--){let ee=M[W];if(!N[W]||ee.last.parentNode!==C)for(let P of d(ee))C.insertBefore(P,Y);Y=ee.first}for(let W=0;W<M.length;W++)M[W].pos=M[W].at;if(b=E?[]:M,M.length===0&&n.fallback&&!i){i=e.child();let W=document.createDocumentFragment();Ae(i,()=>Ke(W,n.fallback(),null)),C.insertBefore(W,a)}else M.length>0&&i&&(i.dispose(),i=void 0,Mn(s,M[0].first));E&&(f=F(A,M,E,D),w())},F=(A,C,$,M)=>{let E=new Array($.length);for(let N=$.length-1,Y=C.length-1,W=a;N>=0;N--){for(;Y>=0&&C[Y].at>$[N];)W=C[Y--].first;E[N]=W}let D=new Array(A.length);for(let N of C)D[N.at]=N;return{items:A,at:$,keys:M,before:E,slots:D,next:0}},I=A=>{let C=a.parentNode,$;for(;A.next<A.at.length;A.next++){let E=A.at[A.next],D=A.keys[A.next];if(r.has(D)){c||(c=!0,console.warn("For: duplicate key; later items with the same key are not rendered.",D));continue}if(!Sn())break;let N=m(D,A.items[E],E);N.pos=E,r.set(D,N),A.slots[E]=N;let Y=A.before[A.next];for(let W of d(N))C.insertBefore(W,Y);$??=N}if($&&i&&(i.dispose(),i=void 0,Mn(s,$.first)),A.next<A.at.length){w();return}f=void 0;let M=[];for(let E of A.slots)E&&M.push(E);b=M};return he(n.each,T),o}function zi(n){let e=n.length,t=new Array(e).fill(!1),s=!0;for(let r=0,i=-1;r<e;r++){let c=n[r].pos;if(!(c<0)){if(c<i){s=!1;break}i=c}}if(s){for(let r=0;r<e;r++)t[r]=n[r].pos>=0;return t}let a=[],o=new Int32Array(e).fill(-1);for(let r=0;r<e;r++){let i=n[r].pos;if(i<0)continue;let c=0,p=a.length;for(;c<p;){let m=c+p>>1;n[a[m]].pos<i?c=m+1:p=m}c>0&&(o[r]=a[c-1]),a[c]=r}for(let r=a.length?a[a.length-1]:-1;r>=0;r=o[r])t[r]=!0;return t}function Em(n){return{mount:(e,t,s)=>Zs(()=>n({ctx:t}),e,s)}}var Hi="@layer msp.reset, msp.theme, msp.components, msp.overrides;",ra=new Map,Ut=new Set,aa=new Map,Jn=new Map,oa=!1;function Fi(){oa||(oa=!0,queueMicrotask(()=>{oa=!1;for(let n of Ut)n()}))}function _(n,e){ra.get(n)!==e&&(ra.set(n,e),Ut.size&&Fi())}function Ro(){return[Hi,...ra.values()].join(`
`)}function Lm(n=document){let e=Jn.get(n);if(e){e.users++;return}let t=Lo(n)?n:n.ownerDocument,s=t.defaultView,a;if(s&&"adoptedStyleSheets"in n&&typeof s.CSSStyleSheet?.prototype.replaceSync=="function"){let o=aa.get(t);if(!o){let i=new s.CSSStyleSheet,c=()=>i.replaceSync(Ro());c(),o={sheet:i,update:c,users:0},aa.set(t,o),Ut.add(c)}let r=o;r.users++,n.adoptedStyleSheets=[...n.adoptedStyleSheets,r.sheet],a=()=>{n.adoptedStyleSheets=n.adoptedStyleSheets.filter(i=>i!==r.sheet),!(--r.users>0)&&(aa.delete(t),Ut.delete(r.update))}}else{let o=t.createElement("style");o.setAttribute("data-msp-styles",""),Lo(n)?n.head.appendChild(o):n.prepend(o);let r=()=>{o.textContent=Ro()};r(),Ut.add(r),a=()=>{o.remove(),Ut.delete(r)}}Jn.set(n,{users:1,remove:a})}function Pm(n){let e=Jn.get(n);!e||--e.users>0||(e.remove(),Jn.delete(n))}function Lo(n){return n.nodeType===9}var ia={icon:"msp-icon-icon"};_("components/icon/icon.module.css",`@layer msp.components {
.msp-icon-icon {
  flex-shrink: 0;
}
}
`);var Po={"align-left":'<path d="M21 5H3"/><path d="M15 12H3"/><path d="M17 19H3"/>',"app-window":'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M10 4v4"/><path d="M2 8h20"/><path d="M6 4v4"/>',"arrow-down":'<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',"arrow-up":'<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',"axis-3d":'<path d="M13.5 10.5 15 9"/><path d="M4 4v15a1 1 0 0 0 1 1h15"/><path d="M4.293 19.707 6 18"/><path d="m9 15 1.5-1.5"/>',ban:'<circle cx="12" cy="12" r="10"/><path d="M4.929 4.929 19.07 19.071"/>',"book-open":'<path d="M12 5v16"/><path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"/>',bot:'<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',box:'<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',camera:'<path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/>',"chart-gantt":'<path d="M10 6h8"/><path d="M12 16h6"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M8 11h7"/>',check:'<path d="M20 6 9 17l-5-5"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',"chevron-up":'<path d="m18 15-6-6-6 6"/>',"chevrons-left":'<path d="m11 17-5-5 5-5"/><path d="m18 17-5-5 5-5"/>',"chevrons-right":'<path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/>',circle:'<circle cx="12" cy="12" r="10"/>',"circle-alert":'<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',"circle-check":'<circle cx="12" cy="12" r="10"/><path d="m16 9-5.5 5.5L8 12"/>',"circle-help":'<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',clapperboard:'<path d="m12.296 3.464 3.02 3.956"/><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z"/><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="m6.18 5.276 3.1 3.899"/>',clipboard:'<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',cloud:'<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',"cloud-upload":'<path d="M12 13v8"/><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m8 17 4-4 4 4"/>',command:'<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/>',cone:'<path d="m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"/><ellipse cx="12" cy="19" rx="9" ry="3"/>',copy:'<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',crop:'<path d="M6 2v14a2 2 0 0 0 2 2h14"/><path d="M18 22V8a2 2 0 0 0-2-2H2"/>',crosshair:'<circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/>',cylinder:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/>',download:'<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',ellipsis:'<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',"ellipsis-vertical":'<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>',eye:'<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',"eye-off":'<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/>',file:'<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/>',"file-code":'<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 12.5 8 15l2 2.5"/><path d="m14 12.5 2 2.5-2 2.5"/>',film:'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/>',"flip-vertical-2":'<path d="M12 14v2"/><path d="M12 20v2"/><path d="M12 2v2"/><path d="M12 8v2"/><path d="M20.288 16.703A1 1 0 0022 16V8a1 1 0 00-1.712-.703l-3.99 3.991a1 1 0 00-.001 1.424z"/><path d="M3.712 16.703A1 1 0 012 16V8a1 1 0 011.712-.703l3.99 3.991a1 1 0 01.001 1.424z"/>',focus:'<circle cx="12" cy="12" r="3"/><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/>',"folder-open":'<path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/>',fullscreen:'<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><rect width="10" height="8" x="7" y="8" rx="1"/>',gauge:'<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',glasses:'<circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"/><path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2"/><path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2"/>',"grip-vertical":'<circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>',history:'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',hourglass:'<path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>',house:'<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',image:'<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',images:'<path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"/><path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"/><circle cx="13" cy="7" r="1" fill="currentColor"/><rect x="8" y="2" width="14" height="14" rx="2"/>',info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',keyboard:'<path d="M10 8h.01"/><path d="M12 12h.01"/><path d="M14 8h.01"/><path d="M16 12h.01"/><path d="M18 8h.01"/><path d="M6 8h.01"/><path d="M7 16h10"/><path d="M8 12h.01"/><rect width="20" height="16" x="2" y="4" rx="2"/>',layers:'<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',lightbulb:'<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',list:'<path d="M3 5h.01"/><path d="M3 12h.01"/><path d="M3 19h.01"/><path d="M8 5h13"/><path d="M8 12h13"/><path d="M8 19h13"/>',"list-restart":'<path d="M21 5H3"/><path d="M7 12H3"/><path d="M7 19H3"/><path d="M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"/><path d="M11 10v4h4"/>',"list-tree":'<path d="M8 5h13"/><path d="M13 12h8"/><path d="M13 19h8"/><path d="M3 10a2 2 0 0 0 2 2h3"/><path d="M3 5v12a2 2 0 0 0 2 2h3"/>',"loader-circle":'<path d="M21 12a9 9 0 1 1-6.219-8.56"/>',locate:'<line x1="2" x2="5" y1="12" y2="12"/><line x1="19" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="5"/><line x1="12" x2="12" y1="19" y2="22"/><circle cx="12" cy="12" r="7"/>',"locate-off":'<path d="M12 19v3"/><path d="M12 2v3"/><path d="M18.89 13.24a7 7 0 0 0-8.13-8.13"/><path d="M19 12h3"/><path d="M2 12h3"/><path d="m2 2 20 20"/><path d="M7.05 7.05a7 7 0 0 0 9.9 9.9"/>',maximize:'<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>',"maximize-2":'<path d="M15 3h6v6"/><path d="m21 3-7 7"/><path d="m3 21 7-7"/><path d="M9 21H3v-6"/>',minimize:'<path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/><path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/>',minus:'<path d="M5 12h14"/>',"monitor-cog":'<path d="M12 17v4"/><path d="m14.305 7.53.923-.382"/><path d="m15.228 4.852-.923-.383"/><path d="m16.852 3.228-.383-.924"/><path d="m16.852 8.772-.383.923"/><path d="m19.148 3.228.383-.924"/><path d="m19.53 9.696-.382-.924"/><path d="m20.772 4.852.924-.383"/><path d="m20.772 7.148.924.383"/><path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><path d="M8 21h8"/><circle cx="18" cy="6" r="3"/>',moon:'<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>',"mouse-pointer-2":'<path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"/>',"mouse-pointer-click":'<path d="M14 4.1 12 6"/><path d="m5.1 8-2.9-.8"/><path d="m6 12-1.9 2"/><path d="M7.2 2.2 8 5.1"/><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"/>',"move-3d":'<path d="M5 3v16h16"/><path d="m5 19 6-6"/><path d="m2 6 3-3 3 3"/><path d="m18 16 3 3-3 3"/>',orbit:'<path d="M20.341 6.484A10 10 0 0 1 10.266 21.85"/><path d="M3.659 17.516A10 10 0 0 1 13.74 2.152"/><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/>',paintbrush:'<path d="m14.622 17.897-10.68-2.913"/><path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"/><path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"/>',palette:'<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>',"panel-bottom":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 15h18"/>',"panel-left":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>',"panel-right":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/>',"panel-top":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/>',pause:'<rect x="14" y="3" width="5" height="18" rx="1"/><rect x="5" y="3" width="5" height="18" rx="1"/>',pencil:'<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',pin:'<path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/>',play:'<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',"redo-2":'<path d="m15 14 5-5-5-5"/><path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"/>',"refresh-cw":'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',"rotate-3d":'<path d="m15.194 13.707 3.814 1.86-1.86 3.814"/><path d="M16.47214 7.52786 A 5 10 0 1 0 13 21.79796"/><path d="M21.79796 11 A 10 5 0 1 0 19 15.57071"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',ruler:'<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/>',save:'<path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/>',scan:'<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/>',scissors:'<circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/>',"scroll-text":'<path d="M15 12h-5"/><path d="M15 8h-5"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/>',search:'<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',settings:'<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/>',shapes:'<path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"/><rect x="3" y="14" width="7" height="7" rx="1"/><circle cx="17.5" cy="17.5" r="3.5"/>',"share-2":'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',shield:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',"skip-back":'<path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"/><path d="M3 20V4"/>',"skip-forward":'<path d="M21 4v16"/><path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"/>',"sliders-horizontal":'<path d="M10 5H3"/><path d="M12 19H3"/><path d="M14 3v4"/><path d="M16 17v4"/><path d="M21 12h-9"/><path d="M21 19h-5"/><path d="M21 5h-7"/><path d="M8 10v4"/><path d="M8 12H3"/>',sparkles:'<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>',square:'<rect width="18" height="18" x="3" y="3" rx="2"/>',"squares-exclude":'<path d="M16 12v2a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0"/><path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2v2"/>',"squares-intersect":'<path d="M10 22a2 2 0 0 1-2-2"/><path d="M14 2a2 2 0 0 1 2 2"/><path d="M16 22h-2"/><path d="M2 10V8"/><path d="M2 4a2 2 0 0 1 2-2"/><path d="M20 8a2 2 0 0 1 2 2"/><path d="M22 14v2"/><path d="M22 20a2 2 0 0 1-2 2"/><path d="M4 16a2 2 0 0 1-2-2"/><path d="M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z"/><path d="M8 2h2"/>',"squares-subtract":'<path d="M10 22a2 2 0 0 1-2-2"/><path d="M16 22h-2"/><path d="M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z"/><path d="M20 8a2 2 0 0 1 2 2"/><path d="M22 14v2"/><path d="M22 20a2 2 0 0 1-2 2"/>',"squares-unite":'<path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 0 1 1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3a1 1 0 0 0-1-1z"/>',"step-back":'<path d="M13.971 4.285A2 2 0 0 1 17 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"/><path d="M21 20V4"/>',"step-forward":'<path d="M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"/><path d="M3 4v16"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',"sun-moon":'<path d="M12 2v2"/><path d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"/><path d="M16 12a4 4 0 0 0-4-4"/><path d="m19 5-1.256 1.256"/><path d="M20 12h2"/>',"swatch-book":'<path d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"/><path d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"/><path d="M 7 17h.01"/><path d="m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"/>',tag:'<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',"text-cursor-input":'<path d="M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6"/><path d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"/><path d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"/><path d="M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1"/><path d="M9 6v12"/>',"toggle-right":'<circle cx="15" cy="12" r="3"/><rect width="20" height="14" x="2" y="5" rx="7"/>',"trash-2":'<path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',"undo-2":'<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/>',upload:'<path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>',user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',"volume-2":'<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.364 18.364a9 9 0 0 0 0-12.728"/>',"volume-x":'<path d="M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z"/><path d="m16.5 14.5 5-5"/><path d="m16.5 9.5 5 5"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',"zoom-in":'<circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/>',"zoom-out":'<circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="8" x2="14" y1="11" y2="11"/>'};var Ao={"ball-and-stick":'<circle cx="5" cy="18" r="2.5"/><circle cx="12" cy="6" r="3"/><circle cx="19" cy="17" r="2.5"/><path d="m6.3 15.8 4.2-7.2"/><path d="m13.6 8.5 4 6.4"/>',cartoon:'<path d="M3 15c3-10 6-10 9 0s6 10 9 0"/><path d="M3 9c3 10 6 10 9 0s6-10 9 0"/>',ligand:'<path d="M10 7l5.2 3v6L10 19l-5.2-3v-6z"/><path d="m15.2 10 3.5-2"/><circle cx="20" cy="7" r="1.5"/>',snapshots:'<rect x="7" y="3" width="14" height="14" rx="2"/><path d="M3 7v12a2 2 0 0 0 2 2h12"/><path d="M13 6.4l2.6 1.5v3L13 12.4l-2.6-1.5v-3z"/><path d="m15.6 10.9 1.6 1"/><circle cx="18.1" cy="12.5" r="1.1"/>',"measure-distance":'<path d="M3 6v12M21 6v12M3 12h18M7 9l-4 3 4 3M17 9l4 3-4 3"/>',"measure-angle":'<path d="M4 20h17M4 20 17 6M12 20a8 8 0 0 0-2.54-5.85"/>',sequence:'<rect x="2" y="9" width="5" height="8" rx="1"/><rect x="9.5" y="9" width="5" height="8" rx="1"/><rect x="17" y="9" width="5" height="8" rx="1"/><path d="M4.5 4v2M12 4v2M19.5 4v2"/>',kinemage:'<circle cx="6.5" cy="15.5" r="4"/><circle cx="17.5" cy="8.5" r="4"/><path d="M10 9h.01M12.5 11.5h.01M15 14h.01M9 12h.01M14.5 17h.01M11.5 15h.01"/>',structure:'<circle cx="12" cy="8" r="5"/><circle cx="7.5" cy="15.5" r="5"/><circle cx="16.5" cy="15.5" r="5"/>',spacefill:'<circle cx="9" cy="10" r="6"/><circle cx="16" cy="15" r="5"/>',surface:'<path d="M12 3c3 0 4 2 7 3s3 4 2 7-1 5-4 6-5 3-8 2-6-3-6-6 0-5 2-7 4-5 7-5z"/><path d="M9 11.5c1.5-2 4-2 6 0"/>',superpose:'<path d="M9.5 3.5l5.63 3.25v6.5L9.5 16.5l-5.63-3.25v-6.5z"/><path d="M14.5 7.5l5.63 3.25v6.5L14.5 20.5l-5.63-3.25v-6.5z"/>',trajectory:'<rect x="3" y="10" width="12" height="11" rx="2"/><path d="M6 7h10a2 2 0 0 1 2 2v9"/><path d="M9 4h10a2 2 0 0 1 2 2v9"/>',volume:'<path d="M12 2.5l8.5 4.75v9.5L12 21.5l-8.5-4.75v-9.5z"/><path d="M8.5 12.5c0-2.5 2-4 3.5-4s3.5 1.5 3.5 4-1.5 3-3.5 3-3.5-.5-3.5-3z"/>',prism:'<path stroke-linejoin="miter" d="M12 3 21.5 19.5h-19z"/><path stroke-width="2.6" stroke-linejoin="miter" d="M12 11.2 14.6 15.7H9.4z"/>',molstar:'<path stroke-linejoin="miter" d="M9.7 1.4h4.6v5.05l3.57-3.57 3.25 3.25-3.57 3.57h5.05v4.6h-5.05l3.57 3.57-3.25 3.25-3.57-3.57v5.05H9.7v-5.05l-3.57 3.57-3.25-3.25 3.57-3.57H1.4V9.7h5.05L2.88 6.13l3.25-3.25 3.57 3.57z"/>',"pick-atom":'<circle cx="12" cy="12" r="4"/>',"pick-residue":'<path d="M12 4.5l6.5 3.75v7.5L12 19.5l-6.5-3.75v-7.5z"/>',"pick-chain":'<circle cx="5" cy="15" r="2.5"/><circle cx="12" cy="9" r="2.5"/><circle cx="19" cy="15" r="2.5"/><path d="m7 13.3 3-2.6M14 10.7l3 2.6"/>',"pick-entity":'<circle cx="6" cy="8" r="2"/><circle cx="12" cy="8" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="6" cy="16" r="2"/><circle cx="12" cy="16" r="2"/><circle cx="18" cy="16" r="2"/>',"pick-model":'<rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3"/>'};var Ii="http://www.w3.org/2000/svg",Di=18,Ni={...Po,...Ao},zo=new Map;function Oi(n){let e=zo.get(n);if(e)return e;let t=Ni[n];if(t===void 0)throw new Error(`Unknown icon "${n}"`);return e=document.createElementNS(Ii,"svg"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.setAttribute("stroke","currentColor"),e.setAttribute("stroke-width","2"),e.setAttribute("stroke-linecap","round"),e.setAttribute("stroke-linejoin","round"),e.setAttribute("focusable","false"),e.innerHTML=t,zo.set(n,e),e}function H(n){let e=Oi(n.name).cloneNode(!0),t=String(n.size??Di);return e.setAttribute("width",t),e.setAttribute("height",t),e.setAttribute("class",n.class?`${ia.icon} ${n.class}`:ia.icon),n.label!==void 0?(e.setAttribute("role","img"),e.setAttribute("aria-label",n.label)):e.setAttribute("aria-hidden","true"),e}function l(n,e,t){return wo(n,e)}var x=l;function q(n,e,t,s){let a=be("on"),o=!1,r=!1,i=t,c=m=>{r||m===o||(o=m,m?n.addEventListener(e,i,s):n.removeEventListener(e,i,s))};a.onActive(c);let p=()=>{c(!1),r=!0};return a.onCleanup(p),p}function ze(n,e){if(typeof ResizeObserver>"u")return;let t=new ResizeObserver(e);return n&&t.observe(n),be("observeResize").onCleanup(()=>t.disconnect()),t}function Ho(n,e,t){if(typeof IntersectionObserver>"u")return;let s=new IntersectionObserver(e,t);return s.observe(n),be("observeIntersection").onCleanup(()=>s.disconnect()),s}function es(n){let e=be("frame"),t=!1,s=0,a=!1,o=!1,r=c=>{if(!(t||e.disposed)){if(!e.active){a=!0,o||(o=!0,e.onActive(p=>{!p||!a||t||(a=!1,s=et(r))}));return}t=!0,n(c)}};s=et(r);let i=()=>{t||(t=!0,mt(s))};return e.onCleanup(i),i}function Gm(n,e){let t=setTimeout(n,e),s=()=>clearTimeout(t);return be("timeout").onCleanup(s),s}function Yt(n){let e=be("restartable"),t,s=0,a=!1,o=()=>{clearTimeout(t),t=setTimeout(()=>{t=void 0,a=!1,n()},s)},r=()=>{clearTimeout(t),t=void 0,a=!1};return e.onActive(i=>{i?a&&o():(clearTimeout(t),t=void 0)}),e.onCleanup(r),{start(i){s=i,a=!0,e.active&&o()},cancel:r}}function Um(n){let e=so(n),t=be("workQueue");return t.onActive(s=>e.setActive(s)),t.onCleanup(()=>e.dispose()),e}function ut(n,e){let t=be("drag"),s,a=-1,o=(r,i)=>{if(s===void 0)return;let c=s;if(s=void 0,a>=0&&"releasePointerCapture"in n)try{n.hasPointerCapture?.(a)&&n.releasePointerCapture(a)}catch{}a=-1,e.end?.(c,r,i)};return q(n,"pointerdown",r=>{if(s!==void 0){if(r.pointerId!==a&&n.hasPointerCapture?.(a))return;o("cancel",r)}let i=e.start(r);if(i!==void 0){s=i,a=r.pointerId;try{n.setPointerCapture?.(r.pointerId)}catch{}}}),q(n,"pointermove",r=>{if(!(s===void 0||r.pointerId!==a)){if(r.buttons===0&&r.pointerType!=="touch")return o("cancel",r);e.move?.(r,s)}}),q(n,"pointerup",r=>{r.pointerId===a&&o("up",r)}),q(n,"pointercancel",r=>{r.pointerId===a&&o("cancel",r)}),q(n,"lostpointercapture",r=>{r.pointerId===a&&o("cancel",r)}),t.onActive(r=>{r||o("cancel")}),t.onCleanup(()=>o("cancel")),{get active(){return s!==void 0},cancel:()=>o("cancel")}}function Xt(n){let e=be("frames"),t=0,s=!1,a=!1,o=c=>{if(t=0,!a){if(!e.active){s=!0;return}n(c)}},r=()=>{if(!(a||t)){if(!e.active){s=!0;return}t=et(o)}},i=()=>{s=!1,t&&(mt(t),t=0)};return e.onActive(c=>{c?s&&(s=!1,r()):t&&(mt(t),t=0,s=!0)}),e.onCleanup(()=>{i(),a=!0}),{request:r,cancel:i}}var At={apply:"msp-action-footer-apply",footer:"msp-action-footer-footer",info:"msp-action-footer-info",reset:"msp-action-footer-reset",secondary:"msp-action-footer-secondary",spin:"msp-action-footer-spin"};_("components/action-footer/action-footer.module.css",`@layer msp.components {
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
`);function $i(n){let e=Fo(n.busy),t=y([e,Fo(n.disabled)],(r,i)=>r||i),s=be("ActionFooter"),a=r=>{if(r.key!=="Enter"||r.defaultPrevented||r.isComposing||r.altKey||r.ctrlKey||r.metaKey)return;let i=r.target;!Bi(i)||t.value||(r.preventDefault(),i.dispatchEvent(new Event("change",{bubbles:!0})),queueMicrotask(()=>{t.value||n.onApply()}))},o=r=>queueMicrotask(()=>{let i=r.parentElement;i&&!s.disposed&&Ae(s,()=>q(i,"keydown",a))});return x("div",{class:At.footer,ref:r=>o(r),children:[n.onReset?l("button",{type:"button",class:At.reset,"data-tip":"Set defaults","aria-label":"Set defaults",onClick:()=>n.onReset?.(),children:l(H,{name:"list-restart",size:15})}):null,n.info!==void 0?l("span",{class:At.info,children:n.info}):null,n.secondary?l("button",{type:"button",class:At.secondary,disabled:e,onClick:()=>n.secondary?.onClick(),children:l("span",{children:n.secondary.label})}):null,x("button",{type:"button",class:At.apply,disabled:t,onClick:()=>n.onApply(),children:[l(L,{when:e,children:()=>l(H,{name:"loader-circle",size:15,class:At.spin})}),l("span",{children:n.label})]})]})}function Bi(n){return!(n instanceof HTMLInputElement)||n.getAttribute("role")==="combobox"||n.getAttribute("aria-expanded")==="true"?!1:["text","number","search","url","email","tel",""].includes(n.type)}function Fo(n){if(dt(n))return n;let e=B(!1);return Se(n??!1,t=>e.set(t)),e.asReadonly}var ft={block:"msp-button-block",button:"msp-button-button",danger:"msp-button-danger",ghost:"msp-button-ghost",icon:"msp-button-icon",iconOnly:"msp-button-iconOnly",primary:"msp-button-primary",small:"msp-button-small",tiny:"msp-button-tiny"};_("components/button/button.module.css",`@layer msp.components {
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
`);function Ce(n){let e=n.variant??"default",t=n.icon!==void 0&&n.children===void 0,s=[ft.button,e!=="default"?ft[e]:"",n.size==="sm"?ft.small:n.size==="xs"?ft.tiny:"",t?ft.iconOnly:"",n.block?ft.block:"",n.class??""].filter(Boolean).join(" ");return x("button",{type:"button",class:s,"data-tip":n.title,"aria-label":t?n.title:void 0,disabled:n.disabled,"aria-pressed":n.pressed,onClick:n.onClick,children:[n.icon!==void 0?l("span",{class:ft.icon,children:n.icon}):null,n.children]})}function at(n){return(typeof n.composedPath=="function"?n.composedPath():[])[0]??n.target}function He(n,e){if(!e)return!1;let t=typeof n.composedPath=="function"?n.composedPath():[];return t.length?t.includes(e):e.contains(n.target)}function vt(n){let t=n.getRootNode().activeElement??null;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t}function Vi(n){let e=n.getRootNode();return typeof ShadowRoot<"u"&&e instanceof ShadowRoot?e.host:n.closest?.(".msp-root")??n.parentElement?.closest(".msp-root")??void 0}function Xe(n,e){let t=Vi(n);if(!t||He(e,t))return!0;let s=t.ownerDocument,a=s.activeElement;return a&&a!==s.body&&a!==s.documentElement?!1:t.matches(":hover")}function Io(n){return typeof HTMLElement>"u"||!(n instanceof HTMLElement)?!1:n.isContentEditable||n instanceof HTMLTextAreaElement||n instanceof HTMLSelectElement?!0:n instanceof HTMLInputElement&&!["checkbox","radio","range","button","color"].includes(n.type)}var ji='a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]), [contenteditable="true"]',qi='[role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"]';function Ne(n=document){let e=n.activeElement;for(;e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;if(!(!e||e===n.body||e===n.documentElement)&&!(e.shadowRoot&&!e.shadowRoot.activeElement&&e.tabIndex<0))return e}function Cn(n){return[...n.querySelectorAll(ji)].filter(e=>!e.closest("[hidden], [inert]"))}function ts(n,e){if(n.key!=="Tab"||n.defaultPrevented)return;let t=Cn(e);if(!t.length)return;let s=Ne(e.ownerDocument),a=!!s&&e.contains(s);n.shiftKey&&(!a||s===t[0])?(n.preventDefault(),t[t.length-1].focus()):!n.shiftKey&&(!a||s===t[t.length-1])&&(n.preventDefault(),t[0].focus())}function ot(n){let e=Ne();return t=>{let s=Ne();if(s&&!(t&&t.contains(s)))return;let a=e?.isConnected?e:n?.();a?.isConnected&&a.focus({preventScroll:!0})}}function Do(n){if(!n)return!1;try{return n.matches(":focus-visible")}catch{return Ne(n.ownerDocument)===n}}function No(n){return[...n.querySelectorAll(qi)].filter(e=>!e.hasAttribute("disabled")&&e.getAttribute("aria-disabled")!=="true"&&!e.closest("[hidden]"))}function zt(n,e=!1){let t=No(n),s=(e?t.find(a=>a.getAttribute("aria-checked")==="true"):void 0)??t[0];return s?.focus(),!!s}function gt(n){if(n.defaultPrevented)return;let e=n.currentTarget,t=No(e);if(!t.length)return;let s=t.indexOf(Ne(e.ownerDocument)),a=t.length,o;switch(n.key){case"ArrowDown":o=t[s<0?0:(s+1)%a];break;case"ArrowUp":o=t[s<0?a-1:(s-1+a)%a];break;case"Home":o=t[0];break;case"End":o=t[a-1];break;default:return}n.preventDefault(),o.focus()}function Tn(n){let e=()=>[...n.querySelectorAll('[role="tab"]')].filter(i=>!i.closest("[hidden]")),t=()=>{let i=e(),c=Ne(n.ownerDocument),p=i.find(m=>m===c)??i.find(m=>m.getAttribute("aria-selected")==="true")??i[0];for(let m of i){let d=m===p?0:-1;m.tabIndex!==d&&(m.tabIndex=d)}},a=q(n,"keydown",i=>{if(i.defaultPrevented)return;let c=e(),p=c.indexOf(i.target);if(p<0)return;let m;switch(i.key){case"ArrowDown":case"ArrowRight":m=c[(p+1)%c.length];break;case"ArrowUp":case"ArrowLeft":m=c[(p-1+c.length)%c.length];break;case"Home":m=c[0];break;case"End":m=c[c.length-1];break;default:return}i.preventDefault(),m.focus()}),o=q(n,"focusin",t),r=new MutationObserver(t);return r.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["aria-selected"]}),t(),()=>{a(),o(),r.disconnect()}}var Ki=0;function _e(n="msp"){return`${n}-${++Ki}`}var ns={keys:"msp-context-menu-keys",menu:"msp-context-menu-menu",row:"msp-context-menu-row"};_("components/context-menu/context-menu.module.css",`@layer msp.components {
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
  grid-template-columns: 15px 1fr auto;
  display: grid;

  &:hover, &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &:disabled {
    opacity: .55;
  }
}

.msp-context-menu-keys {
  color: var(--msp-color-text-subtle);
  font-family: inherit;
  font-size: var(--msp-font-size-xs);
}
}
`);function la(n,e,t,s){let a=!1,o=()=>{},r=ot(),i=()=>{a||(a=!0,o(),r(m),m.remove(),s?.())},c=v=>{He(v,m)||i()},p=v=>{v.key==="Escape"&&(!He(v,m)&&!Xe(n,v)||(v.preventDefault(),v.stopPropagation(),i()))},m;fo(v=>{o=v,m=l("div",{class:ns.menu,role:"menu",onKeyDown:gt,onContextMenu:g=>g.preventDefault(),children:t.map(g=>x("button",{type:"button",role:"menuitem",class:ns.row,disabled:!!g.disabled,title:g.disabled,onClick:()=>{i(),g.run()},children:[g.icon?l(H,{name:g.icon,size:15}):l("span",{}),l("span",{children:g.label}),g.shortcut?l("kbd",{class:ns.keys,children:g.shortcut}):l("span",{})]}))}),q(document,"pointerdown",c,{capture:!0}),q(document,"keydown",p,{capture:!0}),q(window,"resize",i),q(window,"scroll",i,{capture:!0})}),n.append(m);let d=m.offsetWidth,h=m.offsetHeight,u=e.x+d>window.innerWidth-4?Math.max(4,e.x-d):e.x,f=e.y+h>window.innerHeight-4?Math.max(4,e.y-h):e.y;return m.style.transform=`translate(${Math.round(u)}px, ${Math.round(f)}px)`,m.querySelector("button:not(:disabled)")?.focus({preventScroll:!0}),i}var ss=class{constructor(e,t=Gn.getDefaultValues(e),s={}){this.params=e;this.options=s;this.#n=Gn.getDefaultValues(e),this.#e=B({...this.#n,...t},{compare:Object.is})}#e;#n;#a=new Map;#r=new Map;get values(){return this.#e.asReadonly}field(e){let t=this.#a.get(e);return t||(t=y(this.#e.asReadonly,s=>s[e]),this.#a.set(e,t)),t}visible(e){let t=this.params[e];return t.hideIf?y(this.#e.asReadonly,s=>!t.hideIf(s)):y(this.#e.asReadonly,()=>!0)}set(e,t){let s=this.#e.value;if(Object.is(s[e],t))return;let a={...s,[e]:t};this.#e.set(a),this.options.onChange?.(a,e)}load(e){this.#e.set({...this.#n,...e})}reset(){let e=this.#e.value,t={...this.#n};this.#e.set(t);for(let s of Object.keys(this.params))Gn.isParamEqual(this.params[s],e[s],t[s])||this.options.onChange?.(t,s)}layout(){let e=[],t=[];for(let s of Object.keys(this.params)){let a=this.params[s];a.isHidden||(a.isEssential?e.push(s):t.push(s))}return e.length?{essentials:e,advanced:t}:{essentials:t,advanced:[]}}fold(e,t=!1){let s=this.#r.get(e);return s||(s=B(t),this.#r.set(e,s)),s}};function Oo(n){let e=t=>{let s={names:[]},a=new Map;for(let r of Object.keys(n)){let i=n[r];if(i.isHidden||i.type==="value"||!!i.isEssential!==t)continue;if(!i.category){s.names.push(r);continue}let c=a.get(i.category);c||(c={category:i.category,names:[]},a.set(i.category,c)),c.names.push(r)}let o=[...a.values()].sort((r,i)=>r.category<i.category?-1:1);return s.names.length?[s,...o]:o};return{essentials:e(!0),advanced:e(!1)}}var _t={content:"msp-scroll-area-content",root:"msp-scroll-area-root",scrollbar:"msp-scroll-area-scrollbar",thumb:"msp-scroll-area-thumb",viewport:"msp-scroll-area-viewport"};_("components/scroll-area/scroll-area.module.css",`@layer msp.components {
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

  .msp-scroll-area-root:not([data-axis="x"], [data-no-fade]) > & {
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
`);var Wi=16,Gi=500;function ke(n){let{class:e,contentClass:t,axis:s="y",viewportRef:a,edge:o,chain:r,fade:i=!0,children:c,...p}=n,m,d,h,u={},f=()=>{d&&(u.y&&v(u.y,d.clientHeight,d.scrollHeight,d.scrollTop),u.x&&v(u.x,d.clientWidth,d.scrollWidth,d.scrollLeft))},v=(C,$,M,E)=>{let D=M-$>1;if(D!==C.overflows&&(C.overflows=D,m.toggleAttribute(C.axis==="y"?"data-overflow-y":"data-overflow-x",D)),!D)return;let N=C.axis==="y"?C.track.clientHeight:C.track.clientWidth,Y=Math.max(Wi,Math.round(N*$/M));Y!==C.size&&(C.size=Y,C.axis==="y"?C.thumb.style.height=`${Y}px`:C.thumb.style.width=`${Y}px`),C.travel=N-Y,C.range=M-$;let W=Math.round(C.travel*Math.min(Math.max(E,0),C.range)/C.range);W!==C.offset&&(C.offset=W,C.thumb.style.transform=C.axis==="y"?`translateY(${W}px)`:`translateX(${W}px)`)},g,w=()=>{g=void 0,m.removeAttribute("data-scrolling")},b=()=>{f(),g===void 0?m.setAttribute("data-scrolling",""):clearTimeout(g),g=setTimeout(w,Gi)},k=(C,$)=>{C.axis==="y"?d.scrollTop=$:d.scrollLeft=$},T=C=>C.axis==="y"?d.scrollTop:d.scrollLeft,F=(C,$)=>C.axis==="y"?$.clientY:$.clientX,I=C=>ut(C.track,{start:$=>{if(!($.button!==0||!C.overflows)){if($.preventDefault(),$.target!==C.thumb&&C.travel>0){let M=C.track.getBoundingClientRect(),E=F(C,$)-(C.axis==="y"?M.top:M.left)-C.size/2;k(C,Math.min(Math.max(E,0),C.travel)/C.travel*C.range)}return C.track.setAttribute("data-dragging",""),{start:F(C,$),scroll:T(C)}}},move:($,M)=>{C.travel>0&&k(C,M.scroll+(F(C,$)-M.start)/C.travel*C.range)},end:()=>C.track.removeAttribute("data-dragging")}),A=C=>{let $=l("div",{class:_t.thumb}),M=l("div",{class:_t.scrollbar,"data-orientation":C==="y"?"vertical":"horizontal","aria-hidden":"true",onMouseDown:D=>D.preventDefault(),children:$}),E={axis:C,track:M,thumb:$,overflows:!1,size:-1,offset:-1,travel:0,range:0};return I(E),u[C]=E,M};return m=x("div",{class:`${_t.root} ${e??""}`,"data-axis":s,"data-edge":o?"":void 0,"data-chain":r?"":void 0,"data-no-fade":i?void 0:"",children:[l("div",{class:_t.viewport,ref:C=>{d=C,a?.(C)},onScroll:b,children:l("div",{...p,class:`${_t.content} ${t??""}`,ref:C=>{h=C,p.ref?.(C)},children:c})}),s!=="x"?A("y"):null,s!=="y"?A("x"):null]}),ze(d,f)?.observe(h),ne(()=>{g!==void 0&&clearTimeout(g)}),queueMicrotask(f),m}var Fe={button:"msp-select-button",check:"msp-select-check",chevron:"msp-select-chevron",floating:"msp-select-floating",group:"msp-select-group",groupBody:"msp-select-groupBody",groupChevron:"msp-select-groupChevron",groupHead:"msp-select-groupHead",label:"msp-select-label",list:"msp-select-list","list-in":"msp-select-list-in",listContent:"msp-select-listContent",menuPopover:"msp-select-menuPopover",option:"msp-select-option",select:"msp-select-select"};_("components/select/select.module.css",`@layer msp.components {
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
  max-height: calc(100vh - 16px);
  padding: var(--msp-space-1);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-raised);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge),
    var(--msp-shadow-overlay);
  font-size: var(--msp-font-size-sm);
  animation: msp-select-list-in var(--msp-motion-fast) var(--msp-ease);
  display: grid;
  overflow-y: auto;
}
}
`);function ca(n){let e=B(!1),t=Ui(n.value),s;return x("span",{class:`${Fe.select} ${n.class??""}`,ref:a=>{s=a},children:[l(as,{label:y(t,a=>n.options.find(o=>o[0]===a)?.[1]??""),open:e,size:n.size,title:n.title,"aria-label":n["aria-label"]}),l(L,{when:e,children:()=>{let a=l(Qt,{options:n.options,value:t,onPick:o=>{e.set(!1),n.onChange?.(o)},onClose:()=>e.set(!1),floating:n.over,"aria-label":n["aria-label"]??n.title});return n.over?l(Ht,{anchor:s,children:a}):a}})]})}function as(n){return x("button",{type:"button",class:Fe.button,"data-size":n.size??"md","aria-haspopup":"listbox","aria-expanded":n.open,"aria-label":n["aria-label"],title:n.title,onClick:()=>n.open.set(!n.open.value),children:[l("span",{class:Fe.label,children:n.label}),l(H,{name:"chevron-down",size:14,class:Fe.chevron})]})}function Qt(n){let e;he(n.value,d=>{e=d});let t=new Map,s=()=>[...p.querySelectorAll('[role="option"], [data-group-head]')].filter(d=>!d.closest("[hidden]")),a=d=>{let h=s();h[Math.max(0,Math.min(h.length-1,d))]?.focus()},o=([d,h])=>{let u=x("button",{type:"button",role:"option",class:Fe.option,"aria-selected":y(n.value,f=>f===d),onClick:()=>n.onPick(d),children:[l("span",{children:h}),l(H,{name:"check",size:14,class:Fe.check})]});return t.set(d,u),u},r=new Map,i=[];for(let d of n.options)d[2]?r.has(d[2])?r.get(d[2]).push(d):r.set(d[2],[d]):i.push(d);let c=(d,h)=>{let u=B(h.some(f=>f[0]===e));return x("div",{class:Fe.group,role:"group","aria-label":d,children:[x("button",{type:"button",class:Fe.groupHead,"data-group-head":"","aria-expanded":u,onClick:()=>u.set(!u.value),children:[l(H,{name:"chevron-right",size:13,class:Fe.groupChevron}),l("span",{children:d})]}),l("div",{class:Fe.groupBody,hidden:y(u.asReadonly,f=>!f),children:h.map(o)})]})},p=x(ke,{class:Fe.list,contentClass:Fe.listContent,chain:!n.floating,role:"listbox","aria-label":n["aria-label"],onKeyDown:d=>{let h=s(),u=h.indexOf(vt(p));if(d.key==="ArrowDown")a(u+1);else if(d.key==="ArrowUp")a(u-1);else if(d.key==="Home")a(0);else if(d.key==="End")a(h.length-1);else if(d.key==="Escape")n.onClose();else return;d.preventDefault(),d.stopPropagation()},children:[i.map(o),[...r].map(([d,h])=>c(d,h))]});return queueMicrotask(()=>{let d=e===void 0?void 0:t.get(e);d&&!d.closest("[hidden]")?d.focus():a(0)}),q(document,"pointerdown",d=>{let h=at(d);He(d,p)||h.closest?.('[aria-haspopup="listbox"][aria-expanded="true"]')||n.onClose()},{capture:!0}),p}function Ui(n){if(dt(n))return n;let e=De(n),t=B(e?void 0:n);return e&&Se(e,s=>t.set(s)),t.asReadonly}function Yi(n){let e,t=a=>{a.key!=="Escape"||a.defaultPrevented||(a.preventDefault(),n.onClose(!0))},s=a=>{He(a,e)||He(a,n.anchor)||n.onClose()};return q(document,"keydown",t,{capture:!0}),q(document,"pointerdown",s,{capture:!0}),l(Ht,{anchor:n.anchor,align:"end",children:l("div",{class:Fe.menuPopover,role:"menu","aria-label":n["aria-label"],ref:a=>{e=a,es(()=>a.querySelector("button:not(:disabled)")?.focus())},children:n.children})})}function Ht(n){let e=l("div",{class:Fe.floating,"attr:popover":"manual",children:n.children}),t=-1,s=()=>{let o=n.anchor.getBoundingClientRect();o.width!==t&&(t=o.width,e.style.minWidth=`${o.width}px`);let r=e.offsetHeight,i=e.offsetWidth,c=window.innerHeight-o.bottom,p=c>=r+8||c>=o.top?o.bottom+2:o.top-r-2,m=n.align==="end"?o.right-i:o.left;e.style.left=`${Math.max(8,Math.min(m,window.innerWidth-8-i))}px`,e.style.top=`${Math.max(4,Math.min(p,window.innerHeight-8-r))}px`},a=o=>{He(o,e)||s()};return queueMicrotask(()=>{e.isConnected&&(e.showPopover?.(),s(),(e.querySelector('[aria-selected="true"]')??e.querySelector("[role=option]"))?.focus())}),q(window,"scroll",a,{capture:!0}),q(window,"resize",s),ze(e,()=>{e.isConnected&&s()}),e}function ve(n,e){n.data!==e&&(n.data=e)}function K(n,e,t){if(t==null||t===!1){n.hasAttribute(e)&&n.removeAttribute(e);return}let s=t===!0?"":String(t);n.getAttribute(e)!==s&&n.setAttribute(e,s)}function Zt(n,e,t){n.classList.toggle(e,t)}function Ee(n,e,t){let s=n.style;if(!t){s.getPropertyValue(e)&&s.removeProperty(e);return}s.getPropertyValue(e)!==t&&s.setProperty(e,t)}function Yp(n,e){let t=e?"":"none";n.style.display!==t&&(n.style.display=t)}var Be={custom:"msp-color-color-picker-custom",field:"msp-color-color-picker-field",greys:"msp-color-color-picker-greys",marker:"msp-color-color-picker-marker",palette:"msp-color-color-picker-palette",picker:"msp-color-color-picker-picker",preview:"msp-color-color-picker-preview",swatch:"msp-color-color-picker-swatch",text:"msp-color-color-picker-text"};_("components/color/color-picker.module.css",`@layer msp.components {
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
`);var Bo=[15026253,16214805,16762173,4630360,1222036,37119,7231183,14041247];function $o(n){let e=n>>16&255,t=n>>8&255,s=n&255,a=(Math.max(e,t,s)+Math.min(e,t,s))/510,o=Math.round(7*(1-a)),r=7-o,i=[];for(let c=o;c>0;c--)i.push(os(n,.9*c/o));i.push(n);for(let c=1;c<=r;c++)i.push(os(n,-.85*c/r));return i}function Qe(n){return`#${(n>>>0&16777215).toString(16).padStart(6,"0")}`}function bt(n){return`${n>>16&255}, ${n>>8&255}, ${n&255}`}var rt=(n,e,t)=>n<<16|e<<8|t,yt=n=>Math.max(0,Math.min(255,Math.round(n)));function Xi(n){let e=n.trim().toLowerCase();if(!e)return;let t=/^(?:#|0x)?([0-9a-f]{3}|[0-9a-f]{6})$/.exec(e);if(t){let o=t[1].length===3?t[1].replace(/./g,r=>r+r):t[1];return Number.parseInt(o,16)}let s=/^(rgba?|hsla?)?\s*\(?\s*([^()]*?)\s*\)?$/.exec(e);if(s){let o=s[2].split(/\s*[,;/\s]\s*/).filter(Boolean);if(o.length===3||o.length===4){let r=o.slice(0,3);if(r.every(i=>/^[+]?(\d+\.?\d*|\.\d+)%?$/.test(i))){if(s[1]?.startsWith("hsl"))return _i(r);let i=r.some(d=>d.endsWith("%")),c=r.map(d=>Number.parseFloat(d)),p=!i&&c.every(d=>d<=1)&&r.some(d=>d.includes(".")),m=d=>i?d*255/100:p?d*255:d;return!i&&!p&&c.some(d=>d>255)?void 0:rt(yt(m(c[0])),yt(m(c[1])),yt(m(c[2])))}}}let a=e.replace(/[\s_-]/g,"");return Object.hasOwn(Ds,a)?Ds[a]:void 0}function _i(n){let e=(Number.parseFloat(n[0])%360+360)%360/60,t=Math.min(1,Number.parseFloat(n[1])/100),s=Math.min(1,Number.parseFloat(n[2])/100),a=(1-Math.abs(2*s-1))*t,o=a*(1-Math.abs(e%2-1)),r=s-a/2,[i,c,p]=e<1?[a,o,0]:e<2?[o,a,0]:e<3?[0,a,o]:e<4?[0,o,a]:e<5?[o,0,a]:[a,0,o];return rt(yt((i+r)*255),yt((c+r)*255),yt((p+r)*255))}function os(n,e){let t=e>0?255:0,s=Math.abs(e),a=o=>{let r=n>>o&255;return Math.round(r+(t-r)*s)<<o};return a(16)|a(8)|a(0)}var rs=.9;function Qi(n){let e=n*6%6,t=e-Math.floor(e),s=yt(t*255),a=255-s;switch(Math.floor(e)){case 0:return rt(255,s,0);case 1:return rt(a,255,0);case 2:return rt(0,255,s);case 3:return rt(0,a,255);case 4:return rt(s,0,255);default:return rt(255,0,a)}}function Zi(n,e){let t=Qi(Math.max(0,Math.min(1,n))),s=Math.max(0,Math.min(1,e));return s<.5?os(t,rs*(1-s/.5)):os(t,-rs*((s-.5)/.5))}function Ji(n){let e=n>>16&255,t=n>>8&255,s=n&255,a=Math.max(e,t,s),o=Math.min(e,t,s);if(a-o<16)return{greys:!0,x:(e+t+s)/765,y:.5};let r=a-o,i=a===e?((t-s)/r+6)%6:a===t?(s-e)/r+2:(e-t)/r+4,c=(a+o)/510,p=c>=.5?.5*(1-(2*c-1)/rs):.5+.5*(1-2*c)/rs;return{greys:!1,x:i/6,y:Math.max(0,Math.min(1,p))}}function da(n){let e=el(n.value),t=y(e,Ji),s=0,a,o=B(0),r=!1,i=y(o.asReadonly,$o);he(e,m=>{s=m,r||o.set(m),a&&vt(a)!==a&&(a.value=bt(m))});let c=m=>d=>{let h=u=>{let f=d.getBoundingClientRect();n.onChange(m((u.clientX-f.left)/f.width,(u.clientY-f.top)/f.height))};ut(d,{start(u){if(u.button===0)return h(u),!0},move:h})},p=m=>{let d=m<.03?0:m>.97?255:yt(m*255);return rt(d,d,d)};return x("div",{class:Be.picker,children:[l("div",{class:Be.field,"aria-hidden":"true",ref:c(Zi),children:l("span",{class:Be.marker,hidden:y(t,m=>m.greys),style:{left:y(t,m=>`${m.x*100}%`),top:y(t,m=>`${m.y*100}%`)}})}),l("div",{class:Be.greys,"aria-hidden":"true",ref:c(m=>p(m)),children:l("span",{class:Be.marker,hidden:y(t,m=>!m.greys),style:{left:y(t,m=>`${m.x*100}%`),top:"50%"}})}),l("div",{class:Be.palette,role:"listbox","aria-label":"Palette",children:Bo.map(m=>l("button",{type:"button",role:"option",class:Be.swatch,style:{background:Qe(m)},"aria-label":bt(m),"aria-selected":y(e,d=>d===m),onClick:()=>n.onChange(m)}))}),l("div",{class:Be.palette,role:"listbox","aria-label":"Weights",children:[0,1,2,3,4,5,6,7].map(m=>{let d=y(i,h=>h[m]);return l("button",{type:"button",role:"option",class:Be.swatch,style:{background:y(d,Qe)},"aria-label":y(d,bt),"aria-selected":y([d,e],(h,u)=>h===u),onClick:()=>{r=!0,n.onChange($o(o.value)[m]),r=!1}})})}),x("div",{class:Be.custom,children:[l("span",{class:Be.preview,style:{background:y(e,Qe)}}),l("input",{ref:m=>{a=m,m.value=bt(s)},type:"text",class:Be.text,"aria-label":"Color",placeholder:"r, g, b \xB7 #hex \xB7 rgb() \xB7 name","data-tip":"r, g, b; hex, rgb(), hsl() or a name",spellcheck:!1,onInput:m=>{let d=Xi(m.currentTarget.value);d!==void 0&&n.onChange(d)},onKeyDown:m=>{m.key==="Enter"&&(m.currentTarget.value=bt(s))},onBlur:m=>{m.currentTarget.value=bt(s)}})]})]})}function el(n){if(dt(n))return n;let e=B(0);return Se(n,t=>e.set(t)),e.asReadonly}var G={afterSelect:"msp-params-params-form-afterSelect",channels:"msp-params-params-form-channels",chevron:"msp-params-params-form-chevron",collapsible:"msp-params-params-form-collapsible",collapsibleBar:"msp-params-params-form-collapsibleBar",collapsibleHeader:"msp-params-params-form-collapsibleHeader",collapsibleMeta:"msp-params-params-form-collapsibleMeta",color:"msp-params-params-form-color",control:"msp-params-params-form-control",count:"msp-params-params-form-count",fields:"msp-params-params-form-fields",file:"msp-params-params-form-file",fileClear:"msp-params-params-form-fileClear",fileNames:"msp-params-params-form-fileNames",filePick:"msp-params-params-form-filePick",form:"msp-params-params-form-form",input:"msp-params-params-form-input",item:"msp-params-params-form-item",itemActions:"msp-params-params-form-itemActions",itemAdd:"msp-params-params-form-itemAdd",itemForm:"msp-params-params-form-itemForm",itemLabel:"msp-params-params-form-itemLabel",itemRow:"msp-params-params-form-itemRow",items:"msp-params-params-form-items",knob:"msp-params-params-form-knob",label:"msp-params-params-form-label",mapped:"msp-params-params-form-mapped",nested:"msp-params-params-form-nested",number:"msp-params-params-form-number",presets:"msp-params-params-form-presets",presetsList:"msp-params-params-form-presetsList",range:"msp-params-params-form-range",row:"msp-params-params-form-row",select:"msp-params-params-form-select",settings:"msp-params-params-form-settings",slider:"msp-params-params-form-slider",subSettings:"msp-params-params-form-subSettings",swatch:"msp-params-params-form-swatch",switch:"msp-params-params-form-switch",textarea:"msp-params-params-form-textarea",unsupported:"msp-params-params-form-unsupported"};_("components/params/params-form.module.css",`@layer msp.components {
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
`);var de={check:"msp-params-extra-controls-check",chevron:"msp-params-extra-controls-chevron",curve:"msp-params-extra-controls-curve",field:"msp-params-extra-controls-field",fieldContent:"msp-params-extra-controls-fieldContent",graph:"msp-params-extra-controls-graph",graphArea:"msp-params-extra-controls-graphArea",graphAt:"msp-params-extra-controls-graphAt",graphEditor:"msp-params-extra-controls-graphEditor",graphFoot:"msp-params-extra-controls-graphFoot",graphHint:"msp-params-extra-controls-graphHint",grid:"msp-params-extra-controls-grid",interval:"msp-params-extra-controls-interval",intervalRange:"msp-params-extra-controls-intervalRange",intervalTrack:"msp-params-extra-controls-intervalTrack",intervalValue:"msp-params-extra-controls-intervalValue",matrix:"msp-params-extra-controls-matrix",option:"msp-params-extra-controls-option",options:"msp-params-extra-controls-options",optionsContent:"msp-params-extra-controls-optionsContent",point:"msp-params-extra-controls-point",spark:"msp-params-extra-controls-spark",strip:"msp-params-extra-controls-strip",stripName:"msp-params-extra-controls-stripName",under:"msp-params-extra-controls-under",vec:"msp-params-extra-controls-vec"};_("components/params/extra-controls.module.css",`@layer msp.components {
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
`);function Jt(n){let{open:e}=n,t=x("button",{type:"button",class:G.presets,ref:s=>jo.set(e,s),"aria-label":`${n.label} presets`,"aria-haspopup":"listbox",onClick:s=>{s.stopPropagation(),e.set(!e.value)},children:[l(H,{name:"swatch-book",size:12}),"Presets"]});return O([e],()=>K(t,"aria-expanded",String(e.value))),t}var jo=new WeakMap;function Ft(n){let{open:e}=n;return l(L,{when:e,children:()=>{let t=n.presets(),s=n.anchor?.()??jo.get(e),a=l(Qt,{"aria-label":s?.getAttribute("aria-label")??"Presets",options:t.map(([,o],r)=>[String(r),o]),value:y(n.current,o=>o===void 0?void 0:String(o)),onPick:o=>{e.set(!1);let r=t[Number(o)];r&&n.onPick(r[0])},onClose:()=>e.set(!1),floating:!0});return s?l(Ht,{anchor:s,children:a}):l("div",{class:G.presetsList,children:a})}})}var Vo=(n,e)=>JSON.stringify(n)===JSON.stringify(e);function en(n,e,t=!1){let s=n.findIndex(([a])=>t&&a&&typeof a=="object"&&e&&typeof e=="object"?Object.entries(a).every(([o,r])=>Vo(e[o],r)):Vo(a,e));return s<0?void 0:s}function cs(n){let e=B(!1);return x(xe,{children:[x("div",{class:G.row,children:[l("span",{class:G.label,children:n.head}),l("div",{class:G.control,children:n.field(e)})]}),l(L,{when:e,reveal:!0,children:()=>l("div",{class:de.under,children:n.body(()=>e.set(!1))})})]})}function ds(n){let e=x("button",{type:"button",class:de.field,"aria-label":n.label,onClick:()=>n.open.set(!n.open.value),children:[l("span",{class:de.fieldContent,children:n.children}),l(H,{name:"chevron-down",size:14,class:de.chevron})]});return O([n.open],()=>K(e,"aria-expanded",String(n.open.value))),e}function qo(n){let{param:e,binding:t}=n,s=document.createTextNode("");return O([t.value],()=>{let a=t.get(),o=e.options.filter(([r])=>a?.includes(r)).map(([,r])=>r);ve(s,o.length?o.join(", "):e.emptyValue??"None")}),l(cs,{head:n.head,field:a=>l(ds,{open:a,label:n.label,children:s}),body:()=>{let a=[],o=l(ke,{class:de.options,contentClass:de.optionsContent,role:"listbox","aria-multiselectable":"true","aria-label":n.label,children:e.options.map(([r,i])=>x("button",{type:"button",role:"option",class:de.option,ref:c=>a.push(c),onClick:()=>{let c=t.get()??[];t.set(c.includes(r)?c.filter(p=>p!==r):[...c,r])},children:[l("span",{children:i}),l(H,{name:"check",size:14,class:de.check})]}))});return O([t.value],()=>{let r=t.get();for(let i=0;i<a.length;i++)K(a[i],"aria-selected",String(!!r?.includes(e.options[i][0])))}),o}})}function Ko(n){let{binding:e}=n,t=[],s=l("div",{class:de.vec,children:["x","y","z"].map((a,o)=>l("input",{class:G.number,"aria-label":n.label?`${n.label} ${a}`:a,"data-tip":a,ref:r=>t.push(r),onChange:r=>{let i=r.currentTarget,c=Number(i.value),p=[...e.get()??[0,0,0]];Number.isFinite(c)&&(p[o]=c,e.set(p)),i.value=is(p[o])}}))});return O([e.value],()=>{let a=e.get();for(let o=0;o<t.length;o++)En(t[o],is(a?.[o]))}),s}function En(n,e){n.value!==e&&(n.value=e)}function is(n){return n===void 0||!Number.isFinite(n)?"":String(Math.round(n*1e4)/1e4)}function Wo(n){let{binding:e}=n,t=a=>{for(let o=0;o<16;o++)if(a[o]!==(o%5===0?1:0))return!1;return!0},s=document.createTextNode("");return O([e.value],()=>{let a=e.get();ve(s,a&&t(a)?"Identity":"4 \xD7 4 matrix")}),l(cs,{head:n.head,field:a=>l(ds,{open:a,label:n.label,children:s}),body:()=>{let a=[],o=l("div",{class:de.matrix,children:Array.from({length:16},(r,i)=>{let c=i%4*4+Math.floor(i/4);return l("input",{class:G.number,"aria-label":`${n.label}, row ${Math.floor(i/4)+1}, column ${i%4+1}`,ref:p=>a.push(p),onChange:p=>{let m=p.currentTarget,d=Number(m.value),h=Array.from(e.get());Number.isFinite(d)&&(h[c]=d,e.set(h)),m.value=is(h[c])}})})});return O([e.value],()=>{let r=e.get();for(let i=0;i<16;i++)En(a[i],is(r?.[i%4*4+Math.floor(i/4)]))}),o}})}function Go(n){let{param:e,binding:t}=n,s=e.min??0,a=e.max??1,o=e.step??(a-s)/100,r=u=>`${100*(u-s)/(a-s||1)}%`,i=o<1?Math.min(4,Math.ceil(-Math.log10(o))):0,c=[],p,m=document.createTextNode(""),d=u=>l("input",{class:de.intervalRange,type:"range",min:String(s),max:String(a),step:String(o),"aria-label":`${n.label?`${n.label} `:""}${u===0?"from":"to"}`,ref:f=>c[u]=f,onInput:f=>{let v=Number(f.currentTarget.value),g=[...t.get()??[s,a]];g[u]=u===0?Math.min(v,g[1]):Math.max(v,g[0]),t.set(g),f.currentTarget.value=String(g[u])}}),h=x("div",{class:de.interval,children:[x("div",{class:de.intervalTrack,ref:u=>p=u,children:[d(0),d(1)]}),l("span",{class:de.intervalValue,children:m})]});return O([t.value],()=>{let u=t.get(),f=u?.[0]??s,v=u?.[1]??a;En(c[0],String(u?.[0]??s)),En(c[1],String(u?.[1]??a)),Ee(p,"--msp-from",r(f)),Ee(p,"--msp-to",r(v)),ve(m,`${f.toFixed(i)}\u2013${v.toFixed(i)}`)}),h}function ls(n){let e=n?.colors??[];if(!e.length)return"none";let t=e.map((s,a)=>Array.isArray(s)?{color:Qe(s[0]),at:s[1]}:{color:Qe(s),at:e.length===1?0:a/(e.length-1)});if(n?.kind==="set"){let s=t.length;return`linear-gradient(90deg, ${t.map((a,o)=>`${a.color} ${100*o/s}% ${100*(o+1)/s}%`).join(", ")})`}return`linear-gradient(90deg, ${t.map(s=>`${s.color} ${100*s.at}%`).join(", ")})`}var tl=Object.entries(qa);function Uo(n){let{param:e,binding:t}=n,s=e.presetKind??"all",a=tl.filter(([,m])=>s==="all"?!0:s==="set"?m.type==="qualitative":m.type!=="qualitative"),o=m=>a.find(([,d])=>JSON.stringify(d.list)===JSON.stringify(m?.colors))?.[1].label??"Custom",r,i=document.createTextNode(""),c=y(t.value,o),p=l(cs,{head:n.head,field:m=>x(ds,{open:m,label:n.label,children:[l("span",{class:de.strip,ref:d=>r=d}),l("span",{class:de.stripName,children:i})]}),body:m=>{let d=[],h=l(ke,{class:de.options,contentClass:de.optionsContent,role:"listbox","aria-label":n.label,children:a.map(([,u])=>{let f={kind:u.type==="qualitative"?"set":"interpolate",colors:u.list};return x("button",{type:"button",role:"option",class:de.option,ref:v=>d.push(v),onClick:()=>{t.set({kind:f.kind,colors:[...f.colors]}),m()},children:[l("span",{class:de.strip,style:{background:ls(f)}}),l("span",{class:de.stripName,children:u.label}),l(H,{name:"check",size:14,class:de.check})]})})});return O([c],()=>{for(let u=0;u<d.length;u++)K(d[u],"aria-selected",String(c.value===a[u][1].label))}),h}});return O([t.value],()=>{Ee(r,"background",ls(t.get())),ve(i,o(t.get()))}),p}function Yo(n){let{binding:e}=n,t=l("input",{class:G.input,"aria-labelledby":n.labelId,placeholder:"https://\u2026",onChange:s=>e.set(vn.Url(s.currentTarget.value))});return O([e.value],()=>En(t,e.get()?.url??"")),t}function Xo(n){let{binding:e}=n,t=(r,i,c)=>(r??[]).map(([p,m],d)=>`${d?"L":"M"}${(p*i).toFixed(1)} ${((1-m)*c).toFixed(1)}`).join(" "),s,a=document.createTextNode(""),o=l(cs,{head:n.head,field:r=>x(ds,{open:r,label:n.label,children:[l("svg",{class:de.spark,viewBox:"0 0 56 14",preserveAspectRatio:"none","aria-hidden":"true",children:l("path",{ref:i=>s=i})}),l("span",{class:de.stripName,children:a})]}),body:()=>l(nl,{param:n.param,binding:e,pathOf:t})});return O([e.value],()=>{let r=e.get();K(s,"d",t(r,56,14)),ve(a,`${r?.length??0} points`)}),o}function nl(n){let{binding:e}=n,t=240,s=96,a=qe(""),o=document.createTextNode(""),r=e.value,i=n.param.getPresets,c=B(!1),p,m=x("svg",{class:de.graph,viewBox:`0 0 ${t} ${s}`,preserveAspectRatio:"none",children:[[.25,.5,.75].map(u=>l("line",{class:de.grid,x1:String(u*t),x2:String(u*t),y1:"0",y2:String(s)})),[.25,.5,.75].map(u=>l("line",{class:de.grid,y1:String(u*s),y2:String(u*s),x1:"0",x2:String(t)})),l("path",{class:de.curve,ref:u=>p=u}),l(ie,{each:y(r,u=>(u??[]).map((f,v)=>v)),children:u=>{let f=y(r,g=>g?.[u]),v=l("circle",{class:de.point,r:"4","data-index":String(u)});return O([f],()=>{K(v,"cx",String((f.value?.[0]??0)*t)),K(v,"cy",String((1-(f.value?.[1]??0))*s))}),v}})]});O([e.value],()=>K(p,"d",n.pathOf(e.get(),t,s))),O([a],()=>ve(o,a.value));let d=u=>{let f=m.getBoundingClientRect(),v=Math.min(1,Math.max(0,(u.clientX-f.left)/f.width)),g=Math.min(1,Math.max(0,1-(u.clientY-f.top)/f.height));return[Math.round(v*1e3)/1e3,Math.round(g*1e3)/1e3]};return ut(m,{start(u){let f=u.target;if(f.tagName==="circle")return Number(f.dataset.index);let v=[...e.get()??[]],g=d(u),w=v.findIndex(([b])=>b>g[0]);v.splice(w<0?v.length:w,0,g),e.set(v)},move(u,f){let v=d(u),g=[...e.get()??[]],w=f>0?g[f-1][0]:0,b=f<g.length-1?g[f+1][0]:1;g[f]=[Math.min(b,Math.max(w,v[0])),v[1]],e.set(g)}}),q(m,"pointermove",u=>{let f=d(u);a.offer(`${f[0].toFixed(2)}, ${f[1].toFixed(2)}`)}),q(m,"dblclick",u=>{let f=u.target;if(f.tagName!=="circle")return;let v=Number(f.dataset.index),g=[...e.get()??[]];g.length<=2||(g.splice(v,1),e.set(g))}),q(m,"pointerleave",()=>a.offer("")),x("div",{class:de.graphEditor,children:[x("div",{class:de.graphArea,children:[m,l("span",{class:de.graphAt,children:o})]}),x("div",{class:de.graphFoot,children:[l("p",{class:de.graphHint,children:"Drag a point \xB7 click to add \xB7 double-click to remove"}),i?l(Jt,{open:c,label:"Curve"}):null]}),i?l(Ft,{open:c,presets:i,current:y(e.value,u=>en(i(),u)),onPick:u=>e.set(u)}):null]})}var Ve={bar:"msp-params-help-bar",description:"msp-params-help-description",ends:"msp-params-help-ends",entry:"msp-params-help-entry",help:"msp-params-help-help",name:"msp-params-help-name",scale:"msp-params-help-scale",swatch:"msp-params-help-swatch",table:"msp-params-help-table",text:"msp-params-help-text",toggle:"msp-params-help-toggle"};_("components/params/help.module.css",`@layer msp.components {
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
`);function _o(n,e){let t=a=>a&&(a.description||a.legend)?a:void 0;if(n.help){let a=n.help;return y(e,o=>{try{return t(a(o))}catch{return}},(o,r)=>o?.description===r?.description&&o?.legend===r?.legend)}let s=t({description:n.description,legend:n.legend});return s?B(s).asReadonly:void 0}function Qo(n,e,t){if(!e)return{head:l("span",{class:Ve.text,id:t,"data-tip-overflow":"",children:n}),block:null};let s=B(!1),a=y(e,i=>!!i),o,r=x(xe,{children:[l("span",{class:Ve.text,id:t,"data-tip-overflow":"",ref:i=>o=i,onClick:i=>{i.currentTarget.hasAttribute("data-help")&&(i.stopPropagation(),s.set(!s.value))},children:n}),l(L,{when:a,children:()=>{let i=l("button",{type:"button",class:Ve.toggle,"aria-label":`About ${n}`,title:`About ${n}`,onClick:c=>{c.stopPropagation(),s.set(!s.value)},children:l(H,{name:"circle-help",size:12})});return O([s],()=>K(i,"aria-expanded",String(s.value))),i}})]});return O([a],()=>K(o,"data-help",a.value)),{head:r,block:l(sl,{help:e,open:s})}}function sl(n){return l(L,{when:n.open,reveal:!0,children:()=>l(L,{when:n.help,children:e=>x("div",{class:Ve.help,children:[e.description?l("p",{class:Ve.description,children:al(e.description)}):null,e.legend?l(ol,{legend:e.legend}):null]})})})}function al(n){return n.split(/(`[^`]+`)/).map(e=>e.startsWith("`")&&e.endsWith("`")&&e.length>1?l("code",{children:e.slice(1,-1)}):e)}function ol(n){let{legend:e}=n;return e.kind==="table-legend"?l("ul",{class:Ve.table,children:e.table.map(([t,s])=>x("li",{class:Ve.entry,children:[l("span",{class:Ve.swatch,style:{background:Qe(s)}}),l("span",{class:Ve.name,children:t})]}))}):x("div",{class:Ve.scale,children:[l("span",{class:Ve.bar,style:{background:ls({kind:"interpolate",colors:e.colors})}}),x("span",{class:Ve.ends,children:[l("span",{children:e.minLabel}),l("span",{children:e.maxLabel})]})]})}function hs(n){let{form:e}=n;return l("div",{class:G.form,children:l(Jo,{params:e.params,field:t=>({value:e.field(t),get:()=>e.values.value[t],set:s=>e.set(t,s)}),visible:t=>e.params[t].hideIf?e.visible(t):void 0,filter:rl(n.filter),place:{form:e,path:""}})})}function Pn(n){return Object.keys(n).some(e=>!n[e].isHidden&&n[e].type!=="value")}function Jo(n){let{params:e,filter:t,place:s}=n,{essentials:a,advanced:o}=Oo(e),r=ma(t),i=new Map,c=h=>(i.has(h)||i.set(h,n.visible(h)),i.get(h)),p=(h,u)=>{if(!t&&u.some(v=>!c(v)))return h;let f=[];for(let v of u){let g=c(v);g&&f.push(g)}return t&&f.push(t),O(f,()=>{let v=t?.value??"";K(h,"hidden",!u.some(g=>c(g)?.value!==!1&&tn(g,e[g],v)))}),h},m=h=>l(us,{name:h,param:e[h],binding:n.field(h),visible:c(h),filter:t,place:{form:s.form,path:`${s.path}/${h}`}}),d=(h,u)=>h.flatMap(f=>f.category?[p(l("div",{children:l(Ln,{title:f.category,state:s.form.fold(`${s.path}#${u}${f.category}`),force:r,children:()=>f.names.map(m)})}),f.names)]:f.names.map(m));return!a.length||!o.length?l(xe,{children:d(a.length?a:o,"")}):x(xe,{children:[d(a,""),p(l("div",{children:l(Ln,{title:"Advanced",state:s.form.fold(`${s.path}#advanced`),force:r,children:()=>d(o,"advanced/")})}),o.flatMap(h=>h.names))]})}function rl(n){return n&&y(n,e=>e.trim().toLowerCase())}function ma(n){return n&&y(n,e=>e.length>0)}function er(n,e){return e.label||ja(n)}function pa(n,e){let t=e.trim().toLowerCase();return Object.keys(n).some(s=>!n[s].isHidden&&tn(s,n[s],t))}function tn(n,e,t){return!t||er(n,e).toLowerCase().includes(t)||e.description?.toLowerCase().includes(t)?!0:e.type==="group"?Object.keys(e.params).some(s=>tn(s,e.params[s],t)):e.type==="mapped"?e.select.options.some(([s])=>{let a=e.map(s);return a.type==="group"?Object.keys(a.params).some(o=>tn(o,a.params[o],t)):tn(s,a,t)}):!1}function us(n){let{name:e,param:t,binding:s,filter:a,place:o}=n,r=er(e,t),i=n.visible,c=[];i&&c.push(i),a&&c.push(a);let p=(...v)=>{let g=l("div",{children:v});return c.length&&O(c,()=>K(g,"hidden",!((i?.value??!0)&&tn(e,t,a?.value??"")))),g},m=a&&y(a,v=>r.toLowerCase().includes(v)?"":v);if(t.type==="group")return p(l(pl,{label:r,param:t,binding:s,filter:m,force:ma(a),place:o}));let d=_e("msp-field"),{head:h,block:u}=Qo(r,_o(t,s.value),d),f=v=>p(v,u);if(t.type==="mapped")return f(ul(t)?l(fl,{label:r,labelId:d,head:h,description:t.description,param:t,binding:s,place:o}):l(vl,{label:r,head:h,param:t,binding:s,filter:m,force:ma(a),place:o}));if(t.type==="select")return f(l(fs,{label:r,head:h,description:t.description,options:t.options,binding:s}));if(t.type==="color")return f(l(il,{label:r,labelId:d,head:h,description:t.description,binding:s}));if(t.type==="multi-select")return f(l(qo,{head:h,label:r,param:t,binding:s}));if(t.type==="mat4")return f(l(Wo,{head:h,label:r,param:t,binding:s}));if(t.type==="line-graph")return f(l(Xo,{head:h,label:r,param:t,binding:s}));if(t.type==="color-list")return f(l(Uo,{head:h,label:r,param:t,binding:s}));if(t.type==="object-list")return f(l(xl,{head:h,label:r,param:t,binding:s}));if(t.type==="conditioned")return f(l(gl,{head:h,label:r,param:t,binding:s,place:o}));if(t.type==="script")return f(l(yl,{head:h,label:r,binding:s}));if(t.type==="converted"){let v={value:y(s.value,w=>t.fromValue(w)),get:()=>t.fromValue(s.get()),set:w=>s.set(t.toValue(w))},g={...t.converted,label:t.converted.label??r};return l(us,{name:e,param:g,binding:v,visible:n.visible,filter:a,place:o})}return t.type==="value"?null:f(x("div",{class:G.row,children:[l("span",{class:G.label,children:h}),l("div",{class:G.control,children:cl(t,s,d,r)})]}))}function il(n){let{binding:e,labelId:t}=n,s=B(!1),a,o,r=document.createTextNode(""),i=x(xe,{children:[x("div",{class:G.row,children:[l("span",{class:G.label,children:n.head??l("span",{id:t,children:n.label})}),l("div",{class:G.control,children:x("button",{type:"button",class:G.color,"aria-labelledby":`${t} ${t}-value`,ref:c=>o=c,onClick:()=>s.set(!s.value),children:[l("span",{class:G.swatch,ref:c=>a=c}),l("span",{class:G.channels,id:`${t}-value`,"data-tip-overflow":"",children:r})]})})]}),l(L,{when:s,reveal:!0,children:()=>l(da,{value:e.value,onChange:c=>e.set(c)})})]});return O([e.value,s],()=>{let c=e.get();Ee(a,"background",Qe(c)),ve(r,bt(c)),K(o,"aria-expanded",String(s.value))}),i}function ll(n){let{param:e,binding:t,labelId:s}=n,a=e.type==="file-list",o=B(!1),r=u=>{u.length&&t.set(a?u.map(f=>vn.File(f)):vn.File(u[0]))},i=l("input",{type:"file",hidden:!0,multiple:a,accept:e.accept,onChange:u=>{r([...u.currentTarget.files??[]]),u.currentTarget.value=""}}),c=y(t.value,u=>(u?Array.isArray(u)?u:[u]:[]).map(f=>f.name)),p,m,d=document.createTextNode(""),h=x("div",{class:G.file,ref:u=>p=u,children:[l("button",{type:"button",class:G.filePick,"aria-labelledby":s?`${s} ${s}-value`:void 0,onClick:()=>i.click(),onDragOver:u=>{u.preventDefault(),o.set(!0)},onDragLeave:()=>o.set(!1),onDrop:u=>{u.preventDefault(),u.stopPropagation(),o.set(!1),r([...u.dataTransfer?.files??[]])},children:l("span",{class:G.fileNames,id:s?`${s}-value`:void 0,ref:u=>m=u,children:d})}),l(L,{when:y(c,u=>u.length>0),children:()=>l("button",{type:"button",class:G.fileClear,"aria-label":"Clear",title:"Clear",onClick:()=>t.set(null),children:l(H,{name:"x",size:13})})}),i]});return O([c,o],()=>{let u=c.value;K(p,"data-dragging",o.value),K(m,"data-empty",u.length===0),ve(d,u.length===0?a?"Select files\u2026":"Select a file\u2026":u.length===1?u[0]:`${u.length} files \xB7 ${u.join(", ")}`)}),h}function cl(n,e,t,s){switch(n.type){case"boolean":return l(tr,{binding:e,labelId:t});case"number":return l(ml,{param:n,binding:e,labelId:t});case"text":return l(dl,{binding:e,labelId:t,placeholder:n.placeholder,multiline:n.multiline});case"file":case"file-list":return l(ll,{param:n,binding:e,labelId:t});case"vec3":return l(Ko,{param:n,binding:e,label:s});case"interval":return l(Go,{param:n,binding:e,label:s});case"url":return l(Yo,{binding:e,labelId:t});default:return l("span",{class:G.unsupported,children:n.type})}}function dl(n){let{binding:e}=n,t=n.multiline?l("textarea",{class:G.textarea,rows:3,"aria-labelledby":n.labelId,placeholder:n.placeholder,onChange:s=>e.set(s.currentTarget.value)}):l("input",{class:G.input,"aria-labelledby":n.labelId,placeholder:n.placeholder,onChange:s=>e.set(s.currentTarget.value)});return O([e.value],()=>Rn(t,e.get())),t}function Rn(n,e){let t=e==null?"":String(e);n.value!==t&&(n.value=t)}function tr(n){let{binding:e}=n,t=l("button",{type:"button",role:"switch",class:G.switch,"aria-labelledby":n.labelId,onClick:()=>e.set(!e.get()),children:l("span",{class:G.knob})});return O([e.value],()=>K(t,"aria-checked",String(!!e.get()))),t}function ml(n){let{param:e,binding:t,labelId:s}=n;if(e.min===void 0||e.max===void 0){let m=l("input",{class:G.input,type:"text",inputMode:"decimal","aria-labelledby":s,onChange:d=>{let h=Zo(d.currentTarget.value);Number.isFinite(h)&&t.set(h),d.currentTarget.value=ms(Number.isFinite(h)?h:t.get(),e.step)}});return O([t.value],()=>Rn(m,ms(t.get(),e.step))),m}let a=e.min,o=e.max,r=qe(Number.NaN,(m,d)=>Object.is(m,d));Se(r,m=>{Number.isNaN(m)||t.set(m)});let i,c,p=x("div",{class:G.slider,children:[l("input",{class:G.range,type:"range","aria-labelledby":s,min:String(a),max:String(o),step:String(e.step??(o-a)/100),ref:m=>i=m,onInput:m=>r.offer(Number(m.currentTarget.value))}),l("input",{class:G.number,"aria-labelledby":s,ref:m=>c=m,onChange:m=>{let d=Zo(m.currentTarget.value),h=Number.isFinite(d)?Math.min(o,Math.max(a,d)):t.get();Number.isFinite(d)&&t.set(h),m.currentTarget.value=ms(h,e.step)}})]});return O([t.value],()=>{let m=t.get();Rn(i,m),Ee(i,"--msp-progress",`${100*(m-a)/(o-a||1)}%`),Rn(c,ms(m,e.step))}),p}function ms(n,e){if(!Number.isFinite(n))return"";if(e===void 0)return String(Number(n.toFixed(4)));let t=e<1?Math.min(4,Math.ceil(-Math.log10(e))):0;return n.toFixed(t)}function Zo(n){let e=n.trim().replace(",",".");return e===""?Number.NaN:Number(e)}function fs(n){let{options:e,binding:t}=n,s=B(!1),a=y(t.value,p=>String(e.findIndex(m=>m[0]===p))),o=e.map(([,p,m],d)=>[String(d),p,m]),r,i=document.createTextNode(""),c=x(xe,{children:[x("div",{class:G.row,children:[l("span",{class:G.label,children:n.head??n.label}),x("div",{class:G.control,ref:p=>r=p,children:[l(as,{size:"sm",open:s,"aria-label":n.label,label:i}),n.after]})]}),l(L,{when:s,children:()=>{let p=l(Qt,{options:o,value:a,onPick:m=>{s.set(!1),t.set(e[Number(m)][0])},onClose:()=>s.set(!1),floating:!0,"aria-label":n.label});return r?l(Ht,{anchor:r,children:p}):p}})]});return O([a],()=>ve(i,o[Number(a.value)]?.[1]??"")),c}function pl(n){let{param:e,binding:t,filter:s,place:a}=n;if(!Pn(e.params))return null;let o=e.presets,r=u=>l(ps,{params:u,binding:t,filter:s,place:a}),i=a.form.fold(`${a.path}#open`,!!e.isExpanded),c=u=>t.set({...t.get()??{},...u}),p=o?y(t.value,u=>en(o,u,!0)):void 0;if(e.isFlat)return x(xe,{children:[o&&p?l(hl,{label:n.label,presets:o,current:p,onPick:c}):null,r(e.params)]});let m=typeof e.pivot=="string"&&e.params[e.pivot]?e.pivot:void 0;if(m&&(!o||!p)){let{[m]:u,...f}=e.params;return x(xe,{children:[r({[m]:u}),Pn(f)?l(Ln,{title:n.label,state:i,force:n.force,children:()=>r(f)}):null]})}if(!o||!p)return l(Ln,{title:n.label,state:i,force:n.force,children:()=>r(e.params)});let d=B(!1),h=B(!1);return l(Ln,{title:n.label,state:i,force:n.force,openWhen:h.asReadonly,meta:y(p,u=>u===void 0?"":o[u][1]),action:l(Jt,{open:d,label:n.label}),below:()=>l(Ft,{open:d,presets:()=>o,current:p,onPick:u=>{c(u),h.set(!0)}}),children:()=>r(e.params)})}function hl(n){let e=B(!1),t,s=document.createTextNode(""),a=x(xe,{children:[x("div",{class:G.row,children:[l("span",{class:G.label,children:"Presets"}),l("div",{class:G.control,ref:o=>t=o,children:l(as,{size:"sm",open:e,"aria-label":`${n.label} presets`,label:s})})]}),l(Ft,{open:e,presets:()=>n.presets,current:n.current,onPick:n.onPick,anchor:()=>t})]});return O([n.current],()=>{let o=n.current.value;ve(s,o===void 0?"Custom":n.presets[o][1])}),a}function ul(n){let e=n.select.options.map(t=>t[0]).sort();return e.length===2&&e[0]==="off"&&e[1]==="on"}function fl(n){let{param:e,binding:t,place:s}=n,a=y(t.value,d=>d?.name==="on"),o=s.form.fold(`${s.path}#params`),r=d=>t.set({name:d,params:sr(e.map(d))}),i={value:a,get:()=>t.get()?.name==="on",set:d=>{r(d?"on":"off"),d||o.set(!1)}},c=e.map("on"),p=c.type==="group"&&Pn(c.params),m={value:y(t.value,d=>d?.params),get:()=>t.get()?.params,set:d=>t.set({name:"on",params:d})};return x(xe,{children:[x("div",{class:G.row,children:[l("span",{class:G.label,children:n.head??l("span",{id:n.labelId,children:n.label})}),x("div",{class:G.control,children:[l(tr,{binding:i,labelId:n.labelId}),p?l(L,{when:a,children:()=>l(nr,{open:o.asReadonly,label:`${n.label} settings`,onClick:()=>o.set(!o.value)})}):null]})]}),p?l(L,{when:y([a,o.asReadonly],(d,h)=>d&&h),children:()=>l("div",{class:G.subSettings,children:l(ps,{params:c.params,binding:m,place:{form:s.form,path:`${s.path}:on`}})})}):null]})}function vl(n){let{param:e,binding:t,place:s}=n,a=y(t.value,d=>d?.name),o={value:a,get:()=>t.get()?.name,set:d=>{let h=e.map(d);t.set({name:d,params:sr(h)})}},i=y(a,d=>{if(d===void 0)return!1;let h=e.map(d);return h.type==="group"&&!h.isFlat&&Pn(h.params)}),c=s.form.fold(`${s.path}#params`),p=n.force?y([c.asReadonly,n.force],(d,h)=>d||h):c.asReadonly,m=l(L,{when:i,children:()=>l(nr,{open:p,label:`${n.label} settings`,extraClass:G.afterSelect,onClick:()=>c.set(!c.value)})});return x("div",{class:G.mapped,children:[l(fs,{label:n.label,head:n.head,options:e.select.options,binding:o,after:m}),l(L,{when:a,children:d=>{let h=e.map(d),u={value:y(t.value,v=>v?.params),get:()=>t.get()?.params,set:v=>t.set({name:d,params:v})},f={form:s.form,path:`${s.path}:${d}`};return h.type==="group"?h.isFlat?l(ps,{params:h.params,binding:u,filter:n.filter,place:f}):Pn(h.params)?l(L,{when:p,reveal:!0,children:()=>l(ps,{params:h.params,binding:u,filter:n.filter,place:f,nested:!0})}):null:l(us,{name:d,param:h,binding:u,filter:n.filter,place:f})}})]})}function ps(n){let{params:e,binding:t}=n;return l("div",{class:n.nested?G.nested:G.fields,children:l(Jo,{params:e,field:s=>({value:y(t.value,a=>a?.[s]),get:()=>t.get()?.[s],set:a=>t.set({...t.get(),[s]:a})}),visible:s=>{let a=e[s].hideIf;if(a)return y(t.value,o=>!a(o??{}))},filter:n.filter,place:n.place})})}function gl(n){let{param:e,binding:t,place:s}=n,a=y(t.value,r=>String(e.conditionForValue(r))),o={value:a,get:()=>String(e.conditionForValue(t.get())),set:r=>t.set(e.conditionedValue(t.get(),r))};return x("div",{class:G.mapped,children:[l(fs,{label:n.label,head:n.head,options:e.select.options,binding:o}),l(L,{when:a,children:r=>l("div",{class:G.nested,children:l(us,{name:r,param:e.conditionParams[r],binding:t,place:{form:s.form,path:`${s.path}:${r}`}})})})]})}var bl=[["mol-script","MolScript"],["pymol","PyMOL"],["vmd","VMD"],["jmol","Jmol"]];function yl(n){let{binding:e}=n,t=i=>({value:y(e.value,c=>c?.[i]??""),get:()=>e.get()?.[i],set:c=>e.set({...e.get(),[i]:c})}),s=t("expression"),a=_e("msp-field"),o,r=x("div",{class:G.mapped,children:[l(fs,{label:n.label,head:n.head,options:bl,binding:t("language")}),l("div",{class:G.nested,children:x("div",{class:G.row,children:[l("span",{class:G.label,id:a,children:"Expression"}),l("div",{class:G.control,children:l("textarea",{class:G.textarea,"aria-labelledby":a,rows:3,spellcheck:!1,ref:i=>o=i,onChange:i=>s.set(i.currentTarget.value)})})]})})]});return O([s.value],()=>Rn(o,s.get())),r}function xl(n){let{param:e,binding:t}=n,s=e.presets,a=B(!1),o=y(t.value,p=>p??[]),r=(p,m)=>{let d=[...t.get()??[]];d[p]=m,t.set(d)},i=document.createTextNode(""),c=x(xe,{children:[x("div",{class:G.row,children:[l("span",{class:G.label,children:n.head}),l("div",{class:G.control,children:l("span",{class:G.count,children:i})})]}),x("div",{class:G.items,children:[l(ie,{each:y(o,p=>p.map((m,d)=>d)),children:p=>l(wl,{param:e,binding:t,index:p,replace:r})}),x("div",{class:G.itemActions,children:[x("button",{type:"button",class:G.itemAdd,"aria-label":`Add to ${n.label}`,onClick:()=>t.set([...t.get()??[],e.ctor()]),children:[l(H,{name:"plus",size:13}),"Add"]}),s?l(Jt,{open:a,label:n.label}):null]}),s?l(Ft,{open:a,presets:()=>s,current:y(t.value,p=>en(s,p)),onPick:p=>t.set(p)}):null]})]});return O([o],()=>{let p=o.value.length;ve(i,p===1?"1 item":`${p} items`)}),c}function wl(n){let{param:e,binding:t,index:s}=n,a=B(!1),o,r,i=document.createTextNode(""),c=x("div",{class:G.item,ref:m=>o=m,children:[x("div",{class:G.itemRow,onClick:()=>a.set(!a.value),children:[l("span",{class:G.itemLabel,children:i}),l("button",{type:"button",class:G.settings,title:"Edit","aria-label":"Edit",ref:m=>r=m,onClick:m=>{m.stopPropagation(),a.set(!a.value)},children:l(H,{name:"sliders-horizontal",size:14})}),l("button",{type:"button",class:G.settings,title:"Remove","aria-label":"Remove",onClick:m=>{m.stopPropagation(),t.set((t.get()??[]).filter((d,h)=>h!==s))},children:l(H,{name:"x",size:13})})]}),l(L,{when:a,reveal:!0,children:()=>{let m=new ss(e.element,t.get()?.[s],{onChange:d=>n.replace(s,d)});return l("div",{class:G.itemForm,children:l(hs,{form:m})})}})]}),p=y(t.value,m=>m?.[s]!==void 0?e.getLabel(m[s]):"");return O([p,a],()=>{ve(i,p.value),K(o,"data-open",a.value),K(r,"aria-expanded",String(a.value))}),c}function nr(n){let e=l("button",{type:"button",class:n.extraClass?`${G.settings} ${n.extraClass}`:G.settings,title:n.label,"aria-label":n.label,onClick:n.onClick,children:l(H,{name:"sliders-horizontal",size:14})});return O([n.open],()=>K(e,"aria-expanded",String(n.open.value))),e}function sr(n){if(n.type==="group"){let e={};for(let t of Object.keys(n.params))e[t]=n.params[t].defaultValue;return e}return n.defaultValue}function Ln(n){let e=n.state??B(!!n.open),t=n.openWhen;if(t){let c=t.value;Se(t,p=>{p&&!c&&e.set(!0),c=p})}let s=n.force?y([e.asReadonly,n.force],(c,p)=>c||p):e.asReadonly,a=n.meta,o,r=document.createTextNode(""),i=x("div",{class:G.collapsible,children:[x("div",{class:G.collapsibleBar,children:[x("button",{type:"button",class:G.collapsibleHeader,ref:c=>o=c,onClick:()=>e.set(!e.value),children:[n.title,l(H,{name:"chevron-right",size:12,class:G.chevron}),a?l("span",{class:G.collapsibleMeta,children:r}):null]}),n.action]}),n.below?.(),l(L,{when:s,reveal:!0,children:()=>l("div",{class:G.nested,children:n.children()})})]});return O(a?[s,a]:[s],()=>{K(o,"aria-expanded",String(s.value)),a&&ve(r,a.value)}),i}var ar={input:"msp-text-input-input"};_("components/text-input/text-input.module.css",`@layer msp.components {
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
`);function It(n){return l("input",{type:n.type??"text",class:`${ar.input} ${n.class??""}`,"data-size":n.size??"md",value:n.value,placeholder:n.placeholder,"aria-label":n["aria-label"],onInput:e=>n.onInput?.(e.currentTarget.value),onKeyDown:e=>{let t=e.currentTarget;e.key==="Enter"?n.onSubmit?.(t.value):e.key==="Escape"&&n.search&&t.value&&(t.value="",n.onInput?.(""),e.preventDefault(),e.stopPropagation())}})}var kl=new Map([["amp","&"],["lt","<"],["gt",">"],["quot",'"'],["apos","'"],["nbsp","\xA0"],["ensp","\u2002"],["emsp","\u2003"],["thinsp","\u2009"],["shy","\xAD"],["zwj","\u200D"],["zwnj","\u200C"],["ndash","\u2013"],["mdash","\u2014"],["hellip","\u2026"],["lsquo","\u2018"],["rsquo","\u2019"],["ldquo","\u201C"],["rdquo","\u201D"],["laquo","\xAB"],["raquo","\xBB"],["bull","\u2022"],["middot","\xB7"],["para","\xB6"],["sect","\xA7"],["dagger","\u2020"],["Dagger","\u2021"],["prime","\u2032"],["Prime","\u2033"],["iexcl","\xA1"],["iquest","\xBF"],["copy","\xA9"],["reg","\xAE"],["trade","\u2122"],["deg","\xB0"],["plusmn","\xB1"],["times","\xD7"],["divide","\xF7"],["minus","\u2212"],["le","\u2264"],["ge","\u2265"],["ne","\u2260"],["asymp","\u2248"],["infin","\u221E"],["micro","\xB5"],["permil","\u2030"],["sup1","\xB9"],["sup2","\xB2"],["sup3","\xB3"],["frac12","\xBD"],["frac14","\xBC"],["frac34","\xBE"],["euro","\u20AC"],["pound","\xA3"],["yen","\xA5"],["cent","\xA2"],["check","\u2713"],["star","\u2606"],["larr","\u2190"],["uarr","\u2191"],["rarr","\u2192"],["darr","\u2193"],["harr","\u2194"],["lArr","\u21D0"],["rArr","\u21D2"],["hArr","\u21D4"],["Aring","\xC5"],["aring","\xE5"],["angst","\xC5"],["auml","\xE4"],["ouml","\xF6"],["uuml","\xFC"],["Auml","\xC4"],["Ouml","\xD6"],["Uuml","\xDC"],["szlig","\xDF"],["eacute","\xE9"],["egrave","\xE8"],["aacute","\xE1"],["iacute","\xED"],["oacute","\xF3"],["uacute","\xFA"],["ntilde","\xF1"],["ccedil","\xE7"],["alpha","\u03B1"],["beta","\u03B2"],["gamma","\u03B3"],["delta","\u03B4"],["epsilon","\u03B5"],["zeta","\u03B6"],["eta","\u03B7"],["theta","\u03B8"],["kappa","\u03BA"],["lambda","\u03BB"],["mu","\u03BC"],["nu","\u03BD"],["xi","\u03BE"],["pi","\u03C0"],["rho","\u03C1"],["sigma","\u03C3"],["tau","\u03C4"],["phi","\u03C6"],["chi","\u03C7"],["psi","\u03C8"],["omega","\u03C9"],["Gamma","\u0393"],["Delta","\u0394"],["Theta","\u0398"],["Lambda","\u039B"],["Pi","\u03A0"],["Sigma","\u03A3"],["Phi","\u03A6"],["Psi","\u03A8"],["Omega","\u03A9"]]),Ml=/&(?:#(\d{1,7})|#[xX]([0-9a-fA-F]{1,6})|([a-zA-Z][a-zA-Z0-9]{1,31}));/g;function Sl(n,e,t,s){if(s!==void 0)return kl.get(s)??n;let a=e!==void 0?Number.parseInt(e,10):Number.parseInt(t,16);return a>0&&a<=1114111&&(a<55296||a>57343)?String.fromCodePoint(a):"\uFFFD"}function vs(n){return n.includes("&")?n.replace(Ml,Sl):n}var gs={markdown:"msp-markdown-markdown",media:"msp-markdown-media",table:"msp-markdown-table"};_("components/markdown/markdown.module.css",`@layer msp.components {
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
`);function ha(n){let e=document.createElement("div");e.className=gs.markdown;let t={onLink:n.onLink,host:n.host},s=n.host?.media;if(s){let i=document.createElement("div");i.className=gs.media,e.appendChild(i);let c=p=>{i.replaceChildren(...p?[p]:[]),i.hidden=!p};Yn()?he(s,c):c(s.value)}let a=n.source.split(`
`),o,r;for(let i=0;i<a.length;i++){let c=a[i].trimEnd(),p=/^(#{1,4})\s+(.*)$/.exec(c),m=/^\s*[-*]\s+(.*)$/.exec(c),d=/^\s*\d+\.\s+(.*)$/.exec(c);if(!c.trim())o=r=void 0;else if(/^\s*```/.test(c)){o=r=void 0;let h=[];for(i++;i<a.length&&!/^\s*```/.test(a[i]);i++)h.push(a[i]);let u=document.createElement("pre");u.appendChild(ir("code",h.join(`
`))),e.appendChild(u)}else if(Tl(a,i))o=r=void 0,i=El(e,a,i,t)-1;else if(/^\s*([-*_])(\s*\1){2,}\s*$/.test(c))o=r=void 0,e.appendChild(document.createElement("hr"));else if(p){o=r=void 0;let h=document.createElement(`h${Math.min(6,p[1].length+2)}`);nn(h,p[2],t),e.appendChild(h)}else if(m||d){r=void 0;let h=m?"UL":"OL";(!o||o.tagName!==h)&&(o=document.createElement(m?"ul":"ol"),e.appendChild(o));let u=document.createElement("li");nn(u,(m??d)[1],t),o.appendChild(u)}else o=void 0,r?r.appendChild(document.createTextNode(" ")):(r=document.createElement("p"),e.appendChild(r)),nn(r,c.trim(),t)}return e}var Cl=/^\s*\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)*\|?\s*$/;function Tl(n,e){return n[e].includes("|")&&e+1<n.length&&Cl.test(n[e+1])&&n[e+1].includes("-")}function or(n){let e=n.trim();return e.startsWith("|")&&(e=e.slice(1)),e.endsWith("|")&&!e.endsWith("\\|")&&(e=e.slice(0,-1)),e.split(/(?<!\\)\|/).map(t=>t.trim().replace(/\\\|/g,"|"))}function El(n,e,t,s){let a=or(e[t+1]).map(d=>d.startsWith(":")&&d.endsWith(":")?"center":d.endsWith(":")?"right":""),o=document.createElement("table"),r=(d,h,u)=>{let f=document.createElement("tr"),v=or(h);for(let g=0;g<a.length;g++){let w=document.createElement(u);a[g]&&(w.style.textAlign=a[g]),nn(w,v[g]??"",s),f.appendChild(w)}d.appendChild(f)},i=document.createElement("thead");r(i,e[t],"th"),o.appendChild(i);let c=document.createElement("tbody"),p=t+2;for(;p<e.length&&e[p].trim()&&e[p].includes("|");p++)r(c,e[p],"td");c.childNodes.length&&o.appendChild(c);let m=document.createElement("div");return m.className=gs.table,m.appendChild(o),n.appendChild(m),p}var Rl=/\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`|!\[([^\]]*)\]\(([^)\s]+)\)|\[([^\]]+)\]\(([^)\s]+)\)/g;function nn(n,e,t){let s=0,a=new RegExp(Rl.source,"g");for(let o=a.exec(e);o;o=a.exec(e))o.index>s&&n.appendChild(document.createTextNode(vs(e.slice(s,o.index)))),o[1]!==void 0?n.appendChild(rr("strong",o[1],t)):o[2]!==void 0?n.appendChild(rr("em",o[2],t)):o[3]!==void 0?n.appendChild(ir("code",o[3])):o[5]!==void 0?n.appendChild(Pl(o[5],vs(o[4]),t)):n.appendChild(Ll(o[7],o[6],t)),s=o.index+o[0].length;s<e.length&&n.appendChild(document.createTextNode(vs(e.slice(s))))}function Ll(n,e,t){let s=document.createElement("a");nn(s,e,t);let a=t.host?.link?.(n);if(a){s.href="#",s.addEventListener("click",i=>{i.preventDefault(),a("click")});let r=!1;return s.addEventListener("pointerenter",()=>{r=!0,a("enter")}),s.addEventListener("pointerleave",()=>{r=!1,a("leave")}),Yn()&&ne(()=>r&&a("leave")),s}let o=/^https?:/i.test(n);return s.href=n.startsWith("#")||o?n:"#",o?(s.target="_blank",s.rel="noopener noreferrer"):s.addEventListener("click",r=>{r.preventDefault(),t.onLink?.(n)}),s}function Pl(n,e,t){let s=t.host?.image?.(n,e);if(s instanceof Node)return s;let a=document.createElement("img");return a.alt=e,typeof s=="string"?a.src=s:s?(a.hidden=!0,s.then(o=>{o&&(a.src=o,a.hidden=!1)},()=>{})):a.src=n,a}function rr(n,e,t){let s=document.createElement(n);return nn(s,e,t),s}function ir(n,e){let t=document.createElement(n);return t.textContent=e,t}var le={bar:"msp-canvas-playback-bar",bare:"msp-canvas-playback-bare",card:"msp-canvas-playback-card",counter:"msp-canvas-playback-counter",deck:"msp-canvas-playback-deck",description:"msp-canvas-playback-description",descriptionContent:"msp-canvas-playback-descriptionContent",dot:"msp-canvas-playback-dot",dots:"msp-canvas-playback-dots",lead:"msp-canvas-playback-lead",list:"msp-canvas-playback-list",listIndex:"msp-canvas-playback-listIndex",listRow:"msp-canvas-playback-listRow",listRows:"msp-canvas-playback-listRows",listRowsContent:"msp-canvas-playback-listRowsContent",plain:"msp-canvas-playback-plain",position:"msp-canvas-playback-position",rowTitle:"msp-canvas-playback-rowTitle",scrubber:"msp-canvas-playback-scrubber",snapshots:"msp-canvas-playback-snapshots",time:"msp-canvas-playback-time",title:"msp-canvas-playback-title",trajectoryLabel:"msp-canvas-playback-trajectoryLabel"};_("views/canvas/playback.module.css",`@layer msp.components {
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
`);var Al=7;function zl(n){return l(L,{when:y(n.model.count,e=>e>0),children:()=>l("section",{class:n.bare?le.bare:le.card,"aria-label":"Snapshots",children:l(Ol,{model:n.model})})})}function Hl(n){return l("section",{class:le.deck,"aria-label":"Playback",children:n.children})}function Fl(n){return l(L,{when:y(n.model.count,e=>e>1),children:()=>l(jl,{model:n.model,compact:n.compact})})}function Il(n){let{model:e}=n;return l(L,{when:y(e.count,t=>t>1),children:()=>{let t=B(!1);return x("div",{"data-row":!0,children:[x("div",{class:le.bar,role:"group","aria-label":"Snapshots",children:[l("span",{class:le.lead,children:l(H,{name:"snapshots",size:16})}),l("button",{type:"button",class:le.position,"aria-expanded":t,"aria-label":y(e.title,s=>s?`Snapshots: ${s}`:"Snapshots"),"data-tip":y(e.title,s=>s??"No snapshot applied"),onClick:()=>t.set(!t.value),children:y([e.index,e.count],(s,a)=>`${s<0?"\u2013":s+1} / ${a}`)}),l(Ce,{variant:"ghost",size:"sm",icon:l(H,{name:"chevron-left"}),title:"Previous snapshot",onClick:()=>e.previous()}),l(bs,{playing:e.isPlaying,title:"Play snapshots",onClick:()=>e.togglePlay()}),l(Ce,{variant:"ghost",size:"sm",icon:l(H,{name:"chevron-right"}),title:"Next snapshot",onClick:()=>e.next()}),n.actions?.()]}),l(L,{when:t,children:()=>l(mr,{model:e,onClose:()=>t.set(!1)})})]})}})}function dr(n){return l(Ce,{variant:"ghost",size:"sm",icon:l(L,{when:n.muted,fallback:()=>l(H,{name:"volume-2"}),children:()=>l(H,{name:"volume-x"})}),title:y(n.muted,e=>e?"Unmute":"Mute"),pressed:n.muted,onClick:()=>n.onClick()})}function Dl(n){return x("div",{class:le.bar,role:"group","aria-label":"Audio","data-row":!0,children:[l("span",{class:le.lead,children:l(H,{name:"volume-2",size:16})}),l("span",{class:le.rowTitle,children:"Audio"}),l(dr,{muted:n.muted,onClick:n.onToggleMute})]})}var lr=n=>(n/1e3).toFixed(1);function Nl(n){let{model:e}=n;return l(L,{when:y(e.duration,t=>t>0),children:()=>{let t=y([e.time,e.duration],(s,a)=>`${a>0?100*Math.min(s,a)/a:0}%`);return x("div",{class:le.bar,role:"group","aria-label":"Transition","data-row":!0,children:[l("span",{class:le.lead,children:l(H,{name:"film",size:16})}),l("input",{class:le.scrubber,type:"range",min:"0",max:y(e.duration,String),step:y(e.step,s=>String(Math.max(1,Math.round(s)))),value:y(e.time,s=>String(Math.round(s))),style:{"--msp-progress":t},"aria-label":"Transition time",onInput:s=>e.seek(Number(s.currentTarget.value))}),l("span",{class:le.time,children:y([e.time,e.duration],(s,a)=>`${lr(s)} / ${lr(a)} s`)}),l(Ce,{variant:"ghost",size:"sm",icon:l(L,{when:e.isPlaying,fallback:()=>l(H,{name:"play"}),children:()=>l(H,{name:"square"})}),title:y(e.isPlaying,s=>s?"Stop the transition":"Play the transition"),onClick:()=>e.togglePlay()})]})}})}function Ol(n){let{model:e}=n,t=B(!1),s=y(e.count,i=>i>Al),a=B(void 0),o,r=Yt(()=>a.set(o));return Se(y([e.description,e.title],(i,c)=>i&&$l(i,c??"")),i=>{o=i,r.start(0)}),x("div",{class:le.snapshots,children:[x("div",{class:le.bar,children:[l("span",{class:le.title,children:e.title}),l(L,{when:y(e.count,i=>i>1),children:()=>x(xe,{children:[l(L,{when:s,fallback:()=>l(Bl,{model:e}),children:()=>l("button",{type:"button",class:le.position,"aria-expanded":t,"aria-label":"Snapshots",onClick:()=>t.set(!t.value),children:y([e.index,e.count],(i,c)=>`${i+1} / ${c}`)})}),l(Ce,{variant:"ghost",size:"sm",icon:l(H,{name:"chevron-left"}),title:"Previous snapshot",onClick:()=>e.previous()}),l(Ce,{variant:"ghost",size:"sm",icon:l(H,{name:"chevron-right"}),title:"Next snapshot",onClick:()=>e.next()}),l(bs,{playing:e.isPlaying,title:"Play snapshots",onClick:()=>e.togglePlay()})]})})]}),l(L,{when:t,children:()=>l(mr,{model:e,onClose:()=>t.set(!1)})}),l(L,{when:a.asReadonly,children:i=>l(ke,{class:le.description,contentClass:le.descriptionContent,children:l(L,{when:e.plainText??!1,fallback:()=>l(ha,{source:i,onLink:c=>e.openLink(c),host:e.markdown}),children:()=>l("p",{class:le.plain,children:i})})})})]})}function $l(n,e){let t=/^\s*#{1,6}[ \t]+(.+?)[ \t]*#*[ \t]*(?:\r?\n|$)/.exec(n);if(!t)return n;let s=cr(t[1]),a=cr(e);return!s||!(a===s||a.startsWith(`${s} `)||a.includes(` ${s} `)||a.endsWith(` ${s}`))?n:n.slice(t[0].length).replace(/^\s+/,"")}function cr(n){return n.replace(/[[(]\s*\d+\s*\/\s*\d+\s*[\])]/g," ").replace(/[*_`~]/g,"").toLowerCase().replace(/[^\p{L}\p{N}]+/gu," ").trim()}function Bl(n){let{model:e}=n;return l("span",{class:le.dots,role:"tablist","aria-label":"Snapshots",children:l(ie,{each:e.titles,children:(t,s)=>l("button",{type:"button",role:"tab",class:le.dot,"data-tip":t,"aria-label":t,"aria-selected":y([e.index,s],(a,o)=>a===o),onClick:()=>e.goTo(s.value)})})})}function mr(n){let{model:e}=n,t=B(""),s=y([e.titles,t.asReadonly],(o,r)=>{let i=r.trim().toLowerCase();return o.map((c,p)=>({title:c,index:p})).filter(c=>!i||c.title.toLowerCase().includes(i))}),a=Je(e.index);return x("div",{class:le.list,children:[l(L,{when:y(e.count,o=>o>12),children:()=>l(It,{search:!0,size:"sm","aria-label":"Filter snapshots",placeholder:"Filter",value:t,onInput:o=>t.set(o)})}),l(ke,{class:le.listRows,contentClass:le.listRowsContent,role:"listbox","aria-label":"Snapshots",children:l(ie,{each:s,children:o=>x("button",{type:"button",role:"option",class:le.listRow,"aria-selected":a.key(o.index),onClick:()=>{e.goTo(o.index),n.onClose()},children:[l("span",{class:le.listIndex,children:String(o.index+1)}),l("span",{children:o.title})]})},o=>o.index)})]})}var Vl=new Os("models").asReadonly;function jl(n){let{model:e}=n,t=e.unit??Vl,s=y(t,c=>c==="models"?"Models":"Frames"),a=y(t,c=>c==="models"?"model":"frame"),o=y(s,c=>`${c.slice(0,-1)} shown`);if(n.compact)return x("div",{class:le.bar,role:"group","aria-label":s,"data-row":!0,children:[l("span",{class:le.lead,children:l(H,{name:"trajectory",size:16})}),l("span",{class:le.trajectoryLabel,children:e.label}),l("span",{class:le.counter,children:y([e.index,e.count],(c,p)=>`${c+1} / ${p}`)}),l(bs,{playing:e.isPlaying,title:y(t,c=>`Play ${c}`),onClick:()=>e.togglePlay()})]});let r=c=>{let p=e.count.value;p>1&&e.seek(((e.index.value+c)%p+p)%p)},i=y([e.index,e.count],(c,p)=>`${p>1?100*c/(p-1):0}%`);return x("div",{class:le.bar,role:"group","aria-label":s,"data-row":!0,children:[l("span",{class:le.lead,children:l(H,{name:"trajectory",size:16})}),l("span",{class:le.trajectoryLabel,children:e.label}),l("span",{class:le.counter,children:y([e.index,e.count],(c,p)=>`${c+1} / ${p}`)}),l("input",{class:le.scrubber,type:"range",min:"0",max:y(e.count,c=>String(c-1)),value:y(e.index,String),style:{"--msp-progress":i},"aria-label":o,"aria-valuetext":y([s,e.index,e.count],(c,p,m)=>`${c.slice(0,-1)} ${p+1} of ${m}`),onInput:c=>e.seek(Number(c.currentTarget.value))}),l(Ce,{variant:"ghost",size:"sm",icon:l(H,{name:"chevron-left"}),title:y(a,c=>`Previous ${c}`),onClick:()=>r(-1)}),l(bs,{playing:e.isPlaying,title:y(t,c=>`Play ${c}`),onClick:()=>e.togglePlay()}),l(Ce,{variant:"ghost",size:"sm",icon:l(H,{name:"chevron-right"}),title:y(a,c=>`Next ${c}`),onClick:()=>r(1)})]})}function bs(n){let e=typeof n.title=="string"?new Os(n.title).asReadonly:n.title;return l(Ce,{variant:"ghost",size:"sm",icon:l(L,{when:n.playing,fallback:()=>l(H,{name:"play"}),children:()=>l(H,{name:"pause"})}),title:y([n.playing,e],(t,s)=>t?"Pause":s),pressed:n.playing,onClick:()=>n.onClick()})}function Ze(n){let e=l("div",{class:n.class,style:"display: contents"}),t=n.renderer.mount(e,n.ctx,be("ViewHost"));return ne(t),e}var Dt={body:"msp-shell-section-list-body",chevron:"msp-shell-section-list-chevron",header:"msp-shell-section-list-header",list:"msp-shell-section-list-list",section:"msp-shell-section-list-section",title:"msp-shell-section-list-title"};_("views/shell/section-list.module.css",`@layer msp.components {
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
`);function ql(n){let{shell:e,subject:t}=n,s={shell:e,subject:t},a=e.sections(n.slot),r=y(a,m=>m.filter(d=>!d.when||d.when(s))),i=n.focus,c=m=>!!i&&(i===m||i.startsWith(`${m}/`)),p=m=>i?.startsWith(`${m}/`)?i.slice(m.length+1):void 0;return l("div",{class:Dt.list,"data-flat":n.flat?"":void 0,"data-bare":n.bare?"":void 0,children:l(ie,{each:r,children:m=>l(Kl,{ctx:p(m.id)?{...s,focus:p(m.id)}:s,slot:n.slot,section:m,open:i?c(m.id):e.sectionOpen(n.slot,m.id)??(!n.collapsed||!!m.open),focused:c(m.id)})},m=>m.id)})}function Kl(n){let{ctx:e,section:t}=n,s=B(n.open),a=B(n.open),o=B(!1),r,i,c,p=()=>{o.set(!0),c?.cancel(),c=void 0,a.set(!a.value);let d=!a.value&&s.value&&r?Qn(r,"grow"):void 0;if(d){c=d,e.shell.setSectionOpen(n.slot,t.id,!1),d.finished.then(()=>{c===d&&(c=void 0,s.set(!1),d.cancel())},()=>{});return}s.set(a.value),e.shell.setSectionOpen(n.slot,t.id,s.value)},m=x("section",{class:Dt.section,"data-section":t.id,children:[x("button",{type:"button",class:Dt.header,ref:d=>i=d,onClick:p,children:[l("span",{class:Dt.title,children:t.heading??t.title}),l(H,{name:"chevron-down",size:14,class:Dt.chevron})]}),l("div",{class:Dt.body,ref:d=>{r=d},children:ht(s.asReadonly,()=>l(Ze,{renderer:t.render,ctx:e}))})]});return O([a,s,o],()=>{K(i,"aria-expanded",String(a.value)),K(r,"hidden",!s.value),K(r,"data-reveal",o.value)}),n.focused&&(e.shell.setSectionOpen(n.slot,t.id,!0),queueMicrotask(()=>m.scrollIntoView({block:"nearest"}))),m}var pr=class{constructor(e){this.target=e;this.available=typeof document<"u"&&!!document.fullscreenEnabled,this.embedded=typeof window<"u"&&window.self!==window.top,typeof document<"u"&&document.addEventListener("fullscreenchange",this.#n)}#e=B(!1);#n=()=>this.#e.set(this.#a());#a(){let e=this.target();return!e||typeof document>"u"?!1:(e.getRootNode().fullscreenElement??document.fullscreenElement)===e}get mode(){return this.embedded&&this.available?"fullscreen":"expand"}get active(){return this.#e.asReadonly}get unavailableReason(){return this.available?void 0:"Not allowed by the page Mol* is embedded in"}async toggle(){if(this.available)try{this.#a()?await document.exitFullscreen():await this.target()?.requestFullscreen()}catch(e){console.error(e)}}dispose(){typeof document<"u"&&document.removeEventListener("fullscreenchange",this.#n)}};var sn={choice:"msp-choices-choice",group:"msp-choices-group",label:"msp-choices-label",row:"msp-choices-row",text:"msp-choices-text"};_("components/choices/choices.module.css",`@layer msp.components {
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
`);function Wl(n){let{active:e}=n;return x("div",{class:sn.group,children:[n.label?l("span",{class:sn.label,children:n.label}):null,l("div",{class:sn.row,role:"group","aria-label":n.label,children:n.choices.map(t=>x("button",{type:"button",class:sn.choice,title:t.title,"aria-pressed":e&&y(e,s=>s===t.id),onClick:()=>n.onPick(t.id),children:[t.icon?l(H,{name:t.icon,size:15}):null,l("span",{class:sn.text,"data-tip-overflow":"",children:t.label})]}))})]})}var je={bar:"msp-legend-bar",caption:"msp-legend-caption",dot:"msp-legend-dot",ends:"msp-legend-ends",item:"msp-legend-item",label:"msp-legend-label",legend:"msp-legend-legend",line:"msp-legend-line",mark:"msp-legend-mark",none:"msp-legend-none",ramp:"msp-legend-ramp",swatch:"msp-legend-swatch",title:"msp-legend-title"};_("components/legend/legend.module.css",`@layer msp.components {
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
`);function Gl(n){return`linear-gradient(to right, ${(n.stops.length>0?n.stops:[{t:0,color:"transparent"}]).map(s=>`${s.color} ${(Math.min(1,Math.max(0,s.t))*100).toFixed(1)}%`).join(", ")})`}function Ul(n){let e=n.items??[],t=n.ramps??[];return x("div",{class:n.class?`${je.legend} ${n.class}`:je.legend,role:"group","aria-label":"Legend",children:[l(L,{when:n.title,children:s=>l("span",{class:je.title,children:s})}),l(ie,{each:e,children:s=>x("div",{class:je.item,children:[l("span",{class:`${je.mark} ${je[s.glyph??"swatch"]}`,classList:{[je.none]:s.color===null},style:{"--legend-color":s.color??void 0},"aria-hidden":"true"}),l("span",{class:je.label,children:s.label})]})}),l(ie,{each:t,children:s=>x("div",{class:je.ramp,children:[s.caption?l("span",{class:je.caption,children:s.caption}):null,l("span",{class:je.bar,style:{background:Gl(s)},role:"img","aria-label":`${s.lo} to ${s.hi}`}),x("span",{class:je.ends,children:[l("span",{children:s.lo}),l("span",{children:s.hi})]})]})})]})}var an={core:"msp-icon-wordmark-core",flash:"msp-icon-wordmark-flash","flash-hover":"msp-icon-wordmark-flash-hover","flash-often":"msp-icon-wordmark-flash-often","flash-rare":"msp-icon-wordmark-flash-rare","flash-reveal":"msp-icon-wordmark-flash-reveal",live:"msp-icon-wordmark-live",outline:"msp-icon-wordmark-outline",wordmark:"msp-icon-wordmark-wordmark"};_("components/icon/wordmark.module.css",`@layer msp.components {
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
`);var hr="M0.5 1.5 3.5 1.5 8.5 10.5 13.5 1.5 16.5 1.5 16.5 19.5 13.5 19.5 13.5 7.68 8.5 16.68 3.5 7.68 3.5 19.5 0.5 19.5Z",ur="M46.5 3.5 49.5 3.5 49.5 6.38 51.54 4.34 53.66 6.46 51.62 8.5 54.5 8.5 54.5 11.5 51.62 11.5 53.66 13.54 51.54 15.66 49.5 13.62 49.5 16.5 46.5 16.5 46.5 13.62 44.46 15.66 42.34 13.54 44.38 11.5 36.5 11.5 36.5 19.5 33.5 19.5 33.5 0.5 36.5 0.5 36.5 8.5 44.38 8.5 42.34 6.46 44.46 4.34 46.5 6.38Z",Yl="M57.5 3.5 68.76 10 57.5 16.5Z",Xl="M60 7.83 63.76 10 60 12.17Z",_l=72,fr=57,vr=48,gr=10,Ql="M24.5 6.5H25.5A5 5 0 0 1 30.5 11.5V14.5A5 5 0 0 1 25.5 19.5H24.5A5 5 0 0 1 19.5 14.5V11.5A5 5 0 0 1 24.5 6.5Z",Zl="M25 9.5A2.5 2.5 0 0 1 27.5 12V14A2.5 2.5 0 0 1 25 16.5A2.5 2.5 0 0 1 22.5 14V12A2.5 2.5 0 0 1 25 9.5Z",ge={paths:[hr,Ql,Zl,ur],width:fr,height:22,star:{x:vr,y:gr},stroke:n=>1.5/Math.sqrt(n)},Jl=0;function br(n){return x(xe,{children:[l("path",{d:hr}),l("rect",{x:"19.5",y:"6.5",width:"11",height:"13",rx:"5"}),l("rect",{x:"22.5",y:"9.5",width:"5",height:"7",rx:"2.5"}),l("path",{d:ur}),n.prism?l("path",{d:Yl,"data-part":"prism"}):null,n.prism?l("path",{d:Xl,class:an.core}):null]})}function ua(n){let e=`msp-wordmark-${++Jl}`,t=Math.max(1,Math.round(n.scale??1)),s=n.prism??!0,a=s?_l:fr,o=c=>x("svg",{class:c.class,viewBox:`-1 -1 ${a} 22`,width:a*t,height:22*t,fill:"none",stroke:c.stroke,"stroke-linejoin":"miter","aria-hidden":c.hidden?"true":void 0,children:[c.hidden?l("defs",{children:x("linearGradient",{id:e,gradientUnits:"userSpaceOnUse",x1:"0",y1:"0",x2:String(a-2),y2:"0",children:[l("stop",{offset:"0",style:{"stop-color":"var(--msp-color-brand-1)"}}),l("stop",{offset:"0.35",style:{"stop-color":"var(--msp-color-brand-2)"}}),l("stop",{offset:"0.6",style:{"stop-color":"var(--msp-color-brand-3)"}}),l("stop",{offset:"1",style:{"stop-color":"var(--msp-color-brand-4)"}})]})}):null,l(br,{prism:s}),c.hidden?null:l("rect",{"data-part":"star",x:vr-.5,y:gr-.5,width:"1",height:"1",stroke:"none",visibility:"hidden"})]}),r=n.live?ec(e,t,a,s):void 0,i=x("span",{class:`${an.wordmark} ${n.class??""}`,style:{"--msp-wordmark-scale":t,"--msp-wordmark-width":a},"data-flash":n.flash??"rare","data-live":n.live?"":void 0,role:"img","aria-label":"Mol* Prism",children:[o({class:an.outline,stroke:"currentColor"}),o({class:an.flash,stroke:`url(#${e})`,hidden:!0}),r?.svg]});return r&&q(i,"pointermove",c=>{let p=i.getBoundingClientRect(),m=c.clientX-p.left,d=m/t-1;r.gradient.setAttribute("x1",String(d-14)),r.gradient.setAttribute("x2",String(d+14)),i.style.setProperty("--msp-wordmark-x",`${m}px`)}),i}function ec(n,e,t,s){let a=x("linearGradient",{id:`${n}-live`,gradientUnits:"userSpaceOnUse",x1:"13",y1:"0",x2:"41",y2:"0",children:[l("stop",{offset:"0",style:{"stop-color":"var(--msp-color-brand-1)"}}),l("stop",{offset:"0.3",style:{"stop-color":"var(--msp-color-brand-3)"}}),l("stop",{offset:"0.5",style:{"stop-color":"var(--msp-color-brand-2)"}}),l("stop",{offset:"0.7",style:{"stop-color":"var(--msp-color-brand-3)"}}),l("stop",{offset:"1",style:{"stop-color":"var(--msp-color-brand-4)"}})]});return{svg:x("svg",{class:an.live,viewBox:`-1 -1 ${t} 22`,width:t*e,height:22*e,fill:"none",stroke:`url(#${n}-live)`,"stroke-linejoin":"miter","aria-hidden":"true",children:[l("defs",{children:a}),l(br,{prism:s})]}),gradient:a}}var ys={canvas:"msp-shell-glass-wordmark-canvas",wordmark:"msp-shell-glass-wordmark-wordmark"};_("views/shell/glass-wordmark.module.css",`@layer msp.components {
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
`);var Nt=11,ln=4,ye=Nt*ln*2,yr={duration:2.4,stagger:.7},on={duration:.45,stagger:.12},tc=.8,nc=3,xr=14,wr=1.4,sc=.1,fa=140,va=11,rn=11,ac=3;function oc(n){let e=n>>>0||1;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function rc(n){let t=n-1;return 1+(1.4+1)*t*t*t+1.4*t*t}var xt=class{constructor(e=11,t=1){this.#a=[];this.#r=new Float32Array(ye);this.#t=new Float32Array(ye);this.#o=new Float32Array(ye);this.#s=new Float32Array(ye);this.#i=new Float32Array(ye);this.#h=new Float32Array(ye);this.#u=new Float32Array(ye);this.#f=new Float32Array(ye);this.#T=new Float32Array(ye);this.#E=new Float32Array(ye);this.#P=new Float32Array(ye);this.#A=new Float32Array(ye);this.#p=new Float32Array(ye);this.#d=new Float32Array(ye);this.#g=new Float32Array(ye);this.#v=new Float32Array(ye);this.#_=new Float32Array(ye);this.#K=new Float32Array(ye);this.#m=yr;this.#l="whole";this.#O=0;this.#b=0;this.#c=!1;this.#y=!1;this.#W=0;this.#$=0;this.#I=!0;this.#z=!1;this.onWhole=()=>{};this.onSnap=()=>{};this.count=ye;this.#G=0;this.#w=0;this.#R=0;this.corners=new Float32Array(ye*6);this.#e=oc(e),this.#x=t,this.#n=ge.paths.map(h=>new Path2D(h));let s=-1,a=-1,o=ge.width,r=ge.height,i=[],c=[];for(let h=0;h<=ln;h++)for(let u=0;u<=Nt;u++){let f=h>0&&h<ln&&u>0&&u<Nt;i.push(s+u/Nt*o+(f?(this.#e()-.5)*.7*(o/Nt):0)),c.push(a+h/ln*r+(f?(this.#e()-.5)*.7*(r/ln):0))}let p=(h,u)=>u*(Nt+1)+h,m=0,d=(h,u,f)=>{let v=(i[h]+i[u]+i[f])/3,g=(c[h]+c[u]+c[f])/3,w=new Path2D;w.moveTo(i[h]-v,c[h]-g),w.lineTo(i[u]-v,c[u]-g),w.lineTo(i[f]-v,c[f]-g),w.closePath(),this.#a.push(w),this.corners.set([i[h]-v,c[h]-g,i[u]-v,c[u]-g,i[f]-v,c[f]-g],m*6),this.#r[m]=v,this.#t[m]=g,m++};for(let h=0;h<ln;h++)for(let u=0;u<Nt;u++){let[f,v,g,w]=[p(u,h),p(u+1,h),p(u,h+1),p(u+1,h+1)];this.#e()<.5?(d(f,v,w),d(f,w,g)):(d(f,v,g),d(v,w,g))}}#e;#n;#a;#r;#t;#o;#s;#i;#h;#u;#f;#T;#E;#P;#A;#p;#d;#g;#v;#_;#K;#m;#l;#O;#b;#c;#y;#W;#$;#I;#z;#x;#D;#G;#U;#w;#R;place(e,t){t[0]=this.#r[e]+this.#o[e]+this.#p[e],t[1]=this.#t[e]+this.#s[e]+this.#d[e],t[2]=this.#i[e]+this.#g[e],t[3]=this.#r[e],t[4]=this.#t[e]}get assembled(){let e=0;for(let t=0;t<ye;t++){let s=this.#o[t],a=this.#s[t];e+=Math.sqrt(s*s+a*a)+Math.abs(this.#i[t])*6}return Math.exp(-e/ye/ac)}get pull(){if(this.#l!=="assembling"||this.#m!==on)return 0;let e=on.duration+on.stagger,t=Math.min(1,(this.#b-this.#O)/e);return(1-t)*(1-t)}get resting(){return this.#I}get animating(){return this.#l!=="whole"||this.#z}get phase(){return this.#l}get whole(){return this.#l==="whole"}scatter(e=yr){for(let t=0;t<ye;t++){let s=this.#e()*Math.PI*2,a=(18+this.#e()*36)*this.#x;this.#T[t]=Math.cos(s)*a,this.#E[t]=Math.sin(s)*a*.7,this.#P[t]=(this.#e()*2-1)*1.6,this.#A[t]=this.#e()*e.stagger}this.#m=e,this.#c=!0,this.#k("assembling")}setPointer(e,t){this.#y=!0,this.#W=e,this.#$=t}clearPointer(){this.#y=!1}shatter(e,t){let s=this.#l==="broken";for(let a=0;a<ye;a++){let o=this.#r[a]+this.#o[a]-e,r=this.#t[a]+this.#s[a]-t,i=Math.hypot(o,r)||1,c=(26+this.#e()*34)/(1+i*.04)*this.#x,p=s?1:0;this.#h[a]=this.#h[a]*p+o/i*c+(this.#e()-.5)*6,this.#u[a]=this.#u[a]*p+r/i*c+(this.#e()-.5)*6,this.#f[a]=this.#f[a]*p+(this.#e()*2-1)*6}this.#k("broken")}hits(e,t){if(this.#l==="whole")return e>=-2&&e<=ge.width+1&&t>=-2&&t<=ge.height+1;for(let s=0;s<ye;s++){let a=this.#r[s]+this.#o[s]-e,o=this.#t[s]+this.#s[s]-t;if(a*a+o*o<36)return!0}return!1}#k(e){let t=this.#l==="whole";this.#l=e,this.#O=this.#b,this.#I=!1,t&&e!=="whole"&&this.onWhole(!1)}#M(){for(let e=0;e<ye;e++)this.#T[e]=this.#o[e],this.#E[e]=this.#s[e],this.#P[e]=this.#i[e],this.#A[e]=this.#e()*on.stagger;this.#m=on,this.#c=!1,this.#k("assembling")}step(e){this.#b+=e;let t=this.#b-this.#O;if(this.#S(e),this.#l==="broken"){let s=Math.exp(-nc*e);for(let a=0;a<ye;a++)this.#o[a]+=this.#h[a]*e,this.#s[a]+=this.#u[a]*e,this.#i[a]+=this.#f[a]*e,this.#h[a]*=s,this.#u[a]*=s,this.#f[a]*=s;t>=tc&&this.#M()}else if(this.#l==="assembling"){let s=!0;for(let a=0;a<ye;a++){let o=Math.min(1,Math.max(0,(t-this.#A[a])/this.#m.duration));o<1&&(s=!1);let r=1-o,i=this.#m===on?1-rc(o):r*r*r*r*r;this.#o[a]=this.#T[a]*i,this.#s[a]=this.#E[a]*i,this.#i[a]=this.#P[a]*i}s&&(this.#o.fill(0),this.#s.fill(0),this.#i.fill(0),this.#l="whole",this.onWhole(!0),this.onSnap())}}#S(e){let t=Math.min(e,.03333333333333333),s=!1,a=!1;for(let o=0;o<ye;o++){let r=0,i=0,c=0;if(this.#y){let p=this.#r[o]+this.#o[o]-this.#W,m=this.#t[o]+this.#s[o]-this.#$,d=Math.sqrt(p*p+m*m);if(d<xr){let h=1-d/xr,u=h*h,f=1/(d||1);r=p*f*wr*u,i=m*f*wr*u,c=(p>=0?1:-1)*sc*u}}(Math.abs(r-this.#p[o])+Math.abs(i-this.#d[o])>.01||Math.abs(c-this.#g[o])>.001||Math.abs(this.#v[o])+Math.abs(this.#_[o])>.02)&&(a=!0),this.#v[o]+=(fa*(r-this.#p[o])-va*this.#v[o])*t,this.#_[o]+=(fa*(i-this.#d[o])-va*this.#_[o])*t,this.#K[o]+=(fa*(c-this.#g[o])-va*this.#K[o])*t,this.#p[o]+=this.#v[o]*t,this.#d[o]+=this.#_[o]*t,this.#g[o]+=this.#K[o]*t,(Math.abs(this.#p[o])+Math.abs(this.#d[o])>.01||Math.abs(this.#g[o])>.001||Math.abs(this.#v[o])+Math.abs(this.#_[o])>.02)&&(s=!0)}this.#I=this.#l==="whole"&&!s,this.#z=a}draw(e,t,s,a,o,r,i,c=1){let p=this.#b-this.#O;if(this.#I){e.save(),e.translate(t,s),e.scale(a,a),e.globalAlpha=i,e.strokeStyle=o,e.lineWidth=ge.stroke(a),e.lineJoin="miter";for(let h=0;h<this.#n.length;h++)e.stroke(this.#n[h]);e.restore(),e.globalAlpha=1;return}let m=this.#B(a,c,o),d=a*c;e.save(),e.lineWidth=.35,e.strokeStyle=r;for(let h=0;h<ye;h++){let u=this.#o[h]+this.#p[h],f=this.#s[h]+this.#d[h],v=this.#i[h]+this.#g[h],g=this.#l==="assembling"&&this.#c?Math.min(1,Math.max(0,(p-this.#A[h])/(this.#m.duration*.35))):1;if(g<=0)continue;let w=Math.cos(v)*d,b=Math.sin(v)*d;e.setTransform(w,b,-b,w,(t+(this.#r[h]+u)*a)*c,(s+(this.#t[h]+f)*a)*c);let k=Math.abs(this.#o[h])+Math.abs(this.#s[h])+Math.abs(this.#i[h])*6,T=Math.abs(this.#p[h])+Math.abs(this.#d[h])+Math.abs(this.#g[h])*6,F=Math.min(1,k/8+T/3)*.22*i*g;if(F>.01&&(e.globalAlpha=F,e.stroke(this.#a[h])),e.globalAlpha=i*g,m){let I=this.#w,A=this.#R;e.drawImage(m,h%rn*I,(h/rn|0)*A,I,A,-I/(2*d),-A/(2*d),I/d,A/d)}else{e.save(),e.clip(this.#a[h]),e.translate(-this.#r[h],-this.#t[h]),e.strokeStyle=o,e.lineWidth=ge.stroke(a),e.lineJoin="miter";for(let I=0;I<this.#n.length;I++)e.stroke(this.#n[I]);e.restore()}}e.restore(),e.globalAlpha=1}#B(e,t,s){let a=e*t;if(this.#D&&this.#G===a&&this.#U===s)return this.#D;if(typeof document>"u")return;let o=this.#D??document.createElement("canvas"),r=o.getContext("2d");if(!r)return;let i=0;for(let m=0;m<this.corners.length;m++)i=Math.max(i,Math.abs(this.corners[m]));let c=ge.stroke(e)/2+.5,p=Math.ceil(2*(i+c)*a);this.#w=p,this.#R=p,o.width=p*rn,o.height=p*Math.ceil(ye/rn),r.clearRect(0,0,o.width,o.height),r.strokeStyle=s,r.lineWidth=ge.stroke(e),r.lineJoin="miter";for(let m=0;m<ye;m++){r.setTransform(a,0,0,a,m%rn*p+p/2,(m/rn|0)*p+p/2),r.save(),r.clip(this.#a[m]),r.translate(-this.#r[m],-this.#t[m]);for(let d=0;d<this.#n.length;d++)r.stroke(this.#n[d]);r.restore()}return r.setTransform(1,0,0,1,0,0),this.#D=o,this.#G=a,this.#U=s,o}};var ic=.35,lc={duration:.9,stagger:.3},cc=22;function dc(){return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}function mc(n){let e=Math.max(1,Math.round(n.scale??1)),t=ge.width*e,s=ge.height*e,a=cc*e,o=l("canvas",{class:ys.canvas,"aria-hidden":"true",style:{left:`${-a}px`,top:`${-a}px`,width:`${t+2*a}px`,height:`${s+2*a}px`}}),r=l("span",{class:n.class?`${ys.wordmark} ${n.class}`:ys.wordmark,style:{width:`${t}px`,height:`${s}px`},role:"img","aria-label":"Mol*",children:o}),i=o.getContext("2d"),p=dc()||typeof Path2D!="function"||!i?void 0:new xt(23,ic),m=a+e,d=1,h="currentColor",u="currentColor",f=()=>{if(!i)return;d=Math.min(2,globalThis.devicePixelRatio||1),o.width=Math.round((t+2*a)*d),o.height=Math.round((s+2*a)*d);let M=D=>(o.style.color=`var(${D})`,getComputedStyle(o).color),E=i.createLinearGradient(0,0,ge.width-2,0);E.addColorStop(0,M("--msp-color-brand-1")),E.addColorStop(.35,M("--msp-color-brand-2")),E.addColorStop(.6,M("--msp-color-brand-3")),E.addColorStop(1,M("--msp-color-brand-4")),h=E,u=M("--msp-color-text-subtle"),o.style.color=""},v,g=()=>{if(i){if(i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,o.width,o.height),i.setTransform(d,0,0,d,0,0),p){p.draw(i,m,m,e,h,u,1,d);return}i.translate(m,m),i.scale(e,e),i.strokeStyle=h,i.lineWidth=ge.stroke(e),i.lineJoin="miter",v??=ge.paths.map(M=>new Path2D(M));for(let M=0;M<v.length;M++)i.stroke(v[M])}},w=0,b=!0,k=!1,F=Xt(M=>{if(!b)return;if(k){if(k=!1,f(),p&&(n.assemble?.()??!0)){p.scatter(lc),I();return}g(),p&&!p.resting&&I();return}if(!p)return;let E=w?Math.min(.05,(M-w)/1e3):1/60;w=M,p.step(E),g(),p.resting?w=0:I()}),I=()=>F.request(),A=()=>{!p||!b||I()},C,$=M=>(C??=r.getBoundingClientRect(),{u:(M.clientX-C.left)/e-1,v:(M.clientY-C.top)/e-1});return p&&(q(r,"pointerenter",()=>{C=r.getBoundingClientRect()}),q(r,"pointermove",M=>{let E=$(M);p.setPointer(E.u,E.v),A()}),q(r,"pointerleave",()=>{p.clearPointer(),C=void 0,A()}),q(r,"pointerdown",M=>{let E=$(M);p.shatter(E.u,E.v),A()})),Gt(M=>{if(b=M,!M){F.cancel(),w=0;return}k=!0,I()}),ne(()=>{b=!1}),r}var We={content:"msp-virtual-list-content",enter:"msp-virtual-list-enter",glide:"msp-virtual-list-glide",list:"msp-virtual-list-list",row:"msp-virtual-list-row",window:"msp-virtual-list-window"};_("components/virtual-list/virtual-list.module.css",`@layer msp.components {
.msp-virtual-list-list {
  flex: 1 1 0;
}

.msp-virtual-list-content {
  contain: strict;
  background-image: linear-gradient(to bottom,
    transparent 38%,
    color-mix(in srgb, var(--msp-color-text) 7%, transparent) 38%,
    color-mix(in srgb, var(--msp-color-text) 7%, transparent) 62%,
    transparent 62%);
  background-size: calc(100% - 2 * var(--msp-space-6)) var(--msp-virtual-row, 26px);
  background-repeat: repeat-y;
  background-position: var(--msp-space-6) 0;
  width: 100%;
  position: relative;
}

.msp-virtual-list-content[data-revealing] {
  background-image: none;
}

.msp-virtual-list-window {
  will-change: transform;
  background-color: var(--msp-surface, var(--msp-color-panel));
  position: absolute;
  inset: 0 0 auto;
}

.msp-virtual-list-row {
  contain: layout style;
  background-color: var(--msp-surface, var(--msp-color-panel));
  position: absolute;
  inset: 0 0 auto;
}

.msp-virtual-list-glide {
  z-index: 1;
  transition: transform var(--msp-motion-base) var(--msp-ease-reveal);
}

.msp-virtual-list-enter {
  animation: msp-reveal-fade var(--msp-motion-base) var(--msp-ease-reveal);
}

.msp-virtual-list-list[data-edge] .msp-virtual-list-window, .msp-virtual-list-list[data-edge] .msp-virtual-list-row {
  right: var(--msp-scroll-edge, var(--msp-space-2));
}
}
`);function wt(n,e,t,s){let a=Math.ceil(2*n/e);return Math.max(s,Math.min(a,3*Math.max(1,t)))}var xs=240;function ws(n,e,t){let s=e.length-n.length;if(s<=0||n.length===0)return;let a=0;for(;a<n.length&&t(n[a])===t(e[a]);)a++;for(let o=a;o<n.length;o++)if(t(n[o])!==t(e[o+s]))return;return{at:a,count:s}}function pc(n){let e=n.overscan??8,t=qe(0),s=B(0),a=B(n.rowHeight),o,r=()=>{if(!o)return;let M=o.scrollTop,E=o.clientHeight;t.offer(M),E!==s.value&&s.set(E)},i=M=>M||800,c=B({first:0,last:0}),p=[],m=0,d=Number.NEGATIVE_INFINITY,h=()=>{d=performance.now()},u,f=120,v=M=>{let E=p.length,D=a.value,N=t.value,Y=Math.min(E,Math.floor(N/D)),W=Math.min(E,Math.ceil((N+i(s.value))/D)),ee=W-Y,P=N>=m,U=performance.now()-d<200?Math.abs(N-m):0;m=N;let{first:te,last:ue}=c.value,S=wt(U,D,ee,Math.max(e,Math.ceil(ee/2))),j=te<=Math.max(0,Y-(P?e:S))&&ue>=Math.min(E,W+(P?S:e))&&ue<=E,Q,ce;if(M)Q=Y-ee,ce=W+ee;else{if(j)return;if(W<=te||Y>=ue){let fe=wt(U,D,ee,2);Q=Y-(P?2:fe),ce=W+(P?fe:2)}else{let fe=wt(U,D,ee,Math.max(e,ee));Q=Y-(P?e:fe),ce=W+(P?fe:e)}}Q=Math.max(0,Q),ce=Math.min(E,ce),(Q!==te||ce!==ue)&&c.set({first:Q,last:ce})},g=()=>{T(),v(!1),u!==void 0&&clearTimeout(u),u=setTimeout(()=>{u=void 0,v(!0)},f)},w=new Set,b=[],k;function T(){if(k!==void 0){clearTimeout(k),k=void 0,w.clear();for(let M of b)M.removeAttribute("data-reveal");b.length=0}}let F=M=>n.itemKey(M),I=[],A=M=>{if(!n.reveal||M===I)return;let E=ws(I,M,F);if(I=M,!!E){T();for(let D=E.at;D<E.at+E.count;D++)w.add(F(M[D]));k=setTimeout(T,xs)}};ne(()=>{u!==void 0&&clearTimeout(u),T()}),he(y([n.items,s.asReadonly,a.asReadonly],(M,E,D)=>({list:M,h:E,rh:D})),({list:M})=>{p=M,v(!0)}),he(t,g);let C=y([n.items,c.asReadonly,a.asReadonly],(M,E,D)=>(A(M),{items:M,first:Math.min(E.first,M.length),last:Math.min(E.last,M.length),rh:D}),(M,E)=>M.items===E.items&&M.first===E.first&&M.last===E.last&&M.rh===E.rh),$=y(C,M=>M.items.slice(M.first,M.last));return n.ref?.({scrollToIndex(M){let E=a.value,D=i(s.value),N=M*E,Y=t.value;N<Y?Y=N:N+E>Y+D&&(Y=N+E-D),Y!==t.value&&(m=Y,o&&(o.scrollTop=Y),t.offer(Y)),Rt(),Ye()}}),l(ke,{class:`${We.list} ${n.class??""}`,contentClass:We.content,edge:n.edge,fade:!1,viewportRef:M=>{o=M,q(M,"scroll",r,{passive:!0}),q(M,"wheel",h,{passive:!0}),q(M,"touchmove",h,{passive:!0}),ze(M,r),queueMicrotask(r)},role:n.role,"aria-label":n["aria-label"],ref:M=>n.contentRef?.(M),style:{height:y([n.items,a.asReadonly],(M,E)=>`${M.length*E}px`),"--msp-virtual-row":y(a.asReadonly,M=>`${M}px`)},children:l("div",{class:We.window,style:{transform:y(C,M=>`translateY(${M.first*M.rh}px)`)},ref:M=>{ze(M,E=>{let D=E[E.length-1].contentRect.height,N=M.childElementCount;if(N<=0||D<=0||k!==void 0)return;let Y=D/N;Math.abs(Y-a.value)>.5&&a.set(Y)})},children:l(ie,{each:$,by:n.itemKey,children:M=>{let E=n.children(M);return w.size&&E instanceof Element&&w.has(F(M))&&(E.setAttribute("data-reveal",""),b.push(E)),E}})})})}function hc(n,e,t){let s=[],a=(o,r)=>{for(let i=0;i<o.length;i++){let c=o[i];s.push({node:c,depth:r,posinset:i+1,setsize:o.length});let p=e(c);p?.length&&t(c)&&a(p,r+1)}};return a(n,0),s}function ba(n,e){let t=new Map;return s=>{let a=new Map,o=s.map(r=>{let i=n(r),c=t.get(i),p=c!==void 0&&e(c,r)?c:r;return a.set(i,p),p});return t=a,o}}var ks={settles:0,moved:0,lastMs:0};function uc(n){let e=be("RecycledList"),t=n.overscan??8,s=qe(0),a=B(0),o=B(n.rowHeight),r,i=()=>{if(!r)return;let V=r.scrollTop,X=r.clientHeight;s.offer(V),X!==a.value&&a.set(X)},c=V=>V||800,p=B({first:0,last:0}),m=[],d=0,h=Number.NEGATIVE_INFINITY,u=()=>{h=performance.now()},f,v=120,g=V=>{let X=m.length,ae=o.value,oe=s.value,J=Math.min(X,Math.floor(oe/ae)),Te=Math.min(X,Math.ceil((oe+c(a.value))/ae)),pe=Te-J,Pe=oe>=d,re=performance.now()-h<200?Math.abs(oe-d):0;d=oe;let{first:se,last:Me}=p.value,Ct=wt(re,ae,pe,Math.max(t,Math.ceil(pe/2))),nt=se<=Math.max(0,J-(Pe?t:Ct))&&Me>=Math.min(X,Te+(Pe?Ct:t))&&Me<=X,Tt,Et;if(V)Tt=J-pe,Et=Te+pe;else{if(nt)return;if(Te<=se||J>=Me){let fn=wt(re,ae,pe,2);Tt=J-(Pe?2:fn),Et=Te+(Pe?fn:2)}else{let fn=wt(re,ae,pe,Math.max(t,pe));Tt=J-(Pe?t:fn),Et=Te+(Pe?fn:t)}}Tt=Math.max(0,Tt),Et=Math.min(X,Et),(Tt!==se||Et!==Me)&&p.set({first:Tt,last:Et})},w=()=>{T(),g(!1),f!==void 0&&clearTimeout(f),f=setTimeout(()=>{f=void 0,g(!0),fe()},v)},b=[],k;function T(){if(k!==void 0){clearTimeout(k),k=void 0;for(let V of b)V.classList.remove(We.glide,We.enter);b.length=0,I?.removeAttribute("data-revealing")}}let F=!1;ne(()=>{f!==void 0&&clearTimeout(f),T()}),he(y([n.items,a.asReadonly,o.asReadonly],(V,X,ae)=>({list:V,h:X,rh:ae})),({list:V})=>{m=V,g(!0)}),he(s,w);let I,A=new Map,C=[],$=V=>!!n.slot&&(!n.recycle||n.recycle(V)),M,E=ze(void 0,V=>{let X=V[V.length-1].contentRect.height;X>0&&Math.abs(X-o.value)>.5&&o.set(X)}),D=V=>{M||!E||(M=V,E.observe(V))},N=()=>{let V=document.createElement("div");return V.className=We.row,V},Y=()=>{let V=e.child(),X=Ae(V,()=>n.slot()),ae=N();return ae.append(X.el),I.append(ae),D(ae),{el:ae,view:X,shown:!0}},W=(V,X)=>{let ae=e.child(),oe=N();return Ae(ae,()=>Ke(oe,n.children?.(X),null)),I.append(oe),D(oe),{key:V,item:X,el:oe,y:Number.NaN,scope:ae}},ee=V=>{V.scope.dispose(),V.el.remove(),M===V.el&&(E?.unobserve(V.el),M=void 0)},P=(V,X,ae)=>{let oe=X*ae;V.y!==oe&&(F&&(V.el.classList.add(Number.isNaN(V.y)?We.enter:We.glide),b.push(V.el)),V.y=oe,V.el.style.transform=`translateY(${oe}px)`)},U=(V,X,ae)=>{let oe=m[X],J=n.itemKey(oe);if(V.has(J))return!0;let Te;if($(oe)){let pe=C.pop();if(pe)pe.shown||(pe.shown=!0,pe.el.hidden=!1);else{if(!Sn())return!1;pe=Y()}pe.view.show(oe),Te={key:J,item:oe,el:pe.el,y:Number.NaN,slot:pe}}else{if(!Sn())return!1;Te=W(J,oe)}return V.set(J,Te),P(Te,X,ae),!0},te=!1,ue=!1,S=(V,X,ae)=>{if(!I)return;let oe=new Map;for(let se=V;se<X;se++){let Me=m[se],Ct=n.itemKey(Me);if(oe.has(Ct)){ue||(ue=!0,console.warn("VirtualList: duplicate key; later items with the same key are not rendered.",Ct));continue}let nt=A.get(Ct);if(nt){if(nt.item!==Me)if(nt.slot&&$(Me))nt.item=Me,nt.slot.view.show(Me);else continue;oe.set(Ct,nt),P(nt,se,ae)}}let J=C.length;for(let[se,Me]of A)oe.get(se)!==Me&&(Me.slot?C.push(Me.slot):ee(Me));A=oe;let Te=s.value,pe=Math.max(V,Math.min(X,Math.floor(Te/ae))),Pe=Math.max(pe,Math.min(X,Math.ceil((Te+c(a.value))/ae))),re=!1;for(let se=pe;se<Pe&&!re;se++)U(oe,se,ae)||(re=!0);for(let se=V;se<pe&&!re;se++)U(oe,se,ae)||(re=!0);for(let se=Pe;se<X&&!re;se++)U(oe,se,ae)||(re=!0);for(let se=C.length-1;se>=J;se--){let Me=C[se];Me.shown&&(Me.shown=!1,Me.view.show(void 0),Me.el.hidden=!0)}re&&!te&&(te=!0,Zn(()=>{te=!1,!e.disposed&&e.active&&S(j.first,j.last,j.rh)}))},j={first:0,last:0,rh:n.rowHeight},Q=[],ce=y([n.items,p.asReadonly,o.asReadonly],(V,X,ae)=>({list:V,first:Math.min(X.first,V.length),last:Math.min(X.last,V.length),rh:ae}),(V,X)=>V.list===X.list&&V.first===X.first&&V.last===X.last&&V.rh===X.rh);ne(()=>{for(let V of A.values())V.slot||V.scope.dispose();A.clear()});let fe=()=>{if(!I)return;let V=performance.now(),X=[...A.values()].sort((re,se)=>re.y-se.y),ae=new Set;for(let re of X)ae.add(re.el);let J=I.getRootNode().activeElement,Te,pe=I.firstChild,Pe=0;for(let re of X){for(;pe&&!ae.has(pe);)pe=pe.nextSibling;if(re.el===pe){pe=pe.nextSibling;continue}J&&!Te&&re.el.contains(J)&&(Te=J),I.insertBefore(re.el,pe),Pe++}Te?.focus({preventScroll:!0}),ks.settles++,ks.moved+=Pe,ks.lastMs=performance.now()-V};return n.ref?.({scrollToIndex(V){let X=o.value,ae=c(a.value),oe=V*X,J=s.value;oe<J?J=oe:oe+X>J+ae&&(J=oe+X-ae),J!==s.value&&(d=J,r&&(r.scrollTop=J),s.offer(J)),Rt(),Ye()}}),l(ke,{class:`${We.list} ${n.class??""}`,contentClass:We.content,edge:n.edge,fade:!1,viewportRef:V=>{r=V,q(V,"scroll",i,{passive:!0}),q(V,"wheel",u,{passive:!0}),q(V,"touchmove",u,{passive:!0}),ze(V,i),queueMicrotask(i)},role:n.role,"aria-label":n["aria-label"],ref:V=>{I=V,n.contentRef?.(V),he(ce,X=>{let ae=n.reveal&&X.list!==Q?ws(Q,X.list,n.itemKey):void 0;Q=X.list,m=X.list,j=X,ae&&(T(),F=!0,I?.setAttribute("data-revealing",""),k=setTimeout(T,xs)),S(X.first,X.last,X.rh),F=!1})},style:{height:y([n.items,o.asReadonly],(V,X)=>`${V.length*X}px`),"--msp-virtual-row":y(o.asReadonly,V=>`${V}px`)}})}var Oe={body:"msp-canvas-hover-label-body",code:"msp-canvas-hover-label-code",corner:"msp-canvas-hover-label-corner",item:"msp-canvas-hover-label-item",label:"msp-canvas-hover-label-label",link:"msp-canvas-hover-label-link",out:"msp-canvas-hover-label-out",primary:"msp-canvas-hover-label-primary",secondary:"msp-canvas-hover-label-secondary"};_("views/canvas/hover-label.module.css",`@layer msp.components {
.msp-canvas-hover-label-label {
  z-index: var(--msp-z-tooltip);
  max-width: 280px;
  padding: var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-lg);
  font-size: var(--msp-font-size-sm);
  pointer-events: none;
  will-change: transform;
  background: var(--msp-glass-panel-bg);
  box-shadow: var(--msp-glass-shadow);
  transition: none;
  position: absolute;
  top: 0;
  left: 0;
}

.msp-canvas-hover-label-body {
  --cap: var(--msp-hover-label-height, 16rem);
  max-height: var(--cap);
  overflow-wrap: anywhere;
  mask-image: linear-gradient(to bottom, #000 calc(var(--cap) - 2.5em), transparent var(--cap));
  gap: 1px;
  display: grid;
  overflow: hidden;
}

.msp-canvas-hover-label-out {
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--msp-motion-fast) ease-out,
    visibility 0s var(--msp-motion-fast);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
}

.msp-canvas-hover-label-corner {
  top: auto;
  left: auto;
  right: var(--msp-canvas-right-inset, var(--msp-canvas-edge, var(--msp-space-3)));
  bottom: calc(var(--msp-canvas-edge, var(--msp-space-3)) + var(--msp-corner-room, 0px));
  will-change: auto;
}

.msp-canvas-hover-label-primary {
  font-weight: 600;
}

.msp-canvas-hover-label-secondary {
  color: var(--msp-color-text-muted);
}

.msp-canvas-hover-label-item {
  text-indent: -1em;
  padding-inline-start: 1em;
}

.msp-canvas-hover-label-link {
  color: var(--msp-color-accent);
  text-decoration: underline;
}

.msp-canvas-hover-label-code {
  font-family: var(--msp-font-mono, ui-monospace, monospace);
  font-size: .95em;
}
}
`);var cn=14;function fc(n,e){let t=document.createElement("span");if(typeof n=="string")return t.className=e===0?Oe.primary:Oe.secondary,t.textContent=n,t;t.className=n.role==="title"?Oe.primary:n.role==="item"?`${Oe.secondary} ${Oe.item}`:Oe.secondary;for(let s of n.runs)t.append(vc(s));return t}function vc(n){let e=document.createTextNode(n.text),t=(s,a)=>{let o=document.createElement(s);a&&(o.className=a),o.append(e),e=o};return n.code&&t("code",Oe.code),n.sub&&t("sub"),n.sup&&t("sup"),n.small&&t("small"),n.italic&&t("em"),n.bold&&t("strong"),n.link&&t("span",Oe.link),e}function gc(n){let e=(n.placement??"corner")==="corner",t=l("div",{class:Oe.body}),s=l("div",{class:`${Oe.label} ${Oe.out}${e?` ${Oe.corner}`:""}`,role:"tooltip","aria-hidden":"true",children:t}),a=B([]),o=Xt(()=>a.set([]));he(n.model.lines,k=>{k.length?(o.cancel(),a.set(k)):a.value.length&&o.request()});let r=0,i=0,c=!1,p=!1,m=!1,d=!1,h=k=>{d!==k&&(d=k,s.classList.toggle(Oe.out,!k),k?s.removeAttribute("aria-hidden"):s.setAttribute("aria-hidden","true"))},u=()=>c&&!p&&m,f=()=>{u()?(g.cancel(),e?h(!0):w.request()):p||!m?(g.cancel(),h(!1)):d&&g.request()},v=()=>{if(!u())return;let k=s.offsetParent;if(k){let T=k.getBoundingClientRect(),F=r-T.left,I=i-T.top,A=s.offsetWidth,C=s.offsetHeight,$=F+cn+A>k.clientWidth?F-cn-A:F+cn,M=I+cn+C>k.clientHeight?I-cn-C:I+cn;s.style.transform=`translate(${Math.max(0,$)}px, ${Math.max(0,M)}px)`}h(!0)},g=Xt(()=>{u()||h(!1)}),w=Xt(v);he(a.asReadonly,k=>{k.length&&t.replaceChildren(...k.map(fc)),m=k.length>0,f()});let b=be("HoverLabel");return queueMicrotask(()=>{if(b.disposed)return;let k=n.area();if(!k)return;let T=n.over;Ae(b,()=>{q(k,"pointermove",F=>{r=F.clientX,i=F.clientY,c=!T||T(F.target),p=F.buttons!==0,f()}),q(k,"pointerleave",()=>{c=!1,f()})})}),s}var Z={ask:"msp-command-menu-ask",askIcon:"msp-command-menu-askIcon",askKeys:"msp-command-menu-askKeys",askLabel:"msp-command-menu-askLabel",askText:"msp-command-menu-askText",before:"msp-command-menu-before",caption:"msp-command-menu-caption",command:"msp-command-menu-command",crumb:"msp-command-menu-crumb",empty:"msp-command-menu-empty",error:"msp-command-menu-error",footer:"msp-command-menu-footer",form:"msp-command-menu-form",head:"msp-command-menu-head",headIcon:"msp-command-menu-headIcon",hint:"msp-command-menu-hint",input:"msp-command-menu-input",keys:"msp-command-menu-keys",list:"msp-command-menu-list",listContent:"msp-command-menu-listContent",menu:"msp-command-menu-menu","menu-fade":"msp-command-menu-menu-fade","menu-in":"msp-command-menu-menu-in",message:"msp-command-menu-message",more:"msp-command-menu-more",proposed:"msp-command-menu-proposed",rest:"msp-command-menu-rest",row:"msp-command-menu-row",rowChevron:"msp-command-menu-rowChevron",rowIcon:"msp-command-menu-rowIcon",rowMeta:"msp-command-menu-rowMeta",rowTitle:"msp-command-menu-rowTitle",run:"msp-command-menu-run",scrim:"msp-command-menu-scrim",sentence:"msp-command-menu-sentence",shared:"msp-command-menu-shared",sharedOption:"msp-command-menu-sharedOption",sharedTitle:"msp-command-menu-sharedTitle",spacer:"msp-command-menu-spacer",srOnly:"msp-command-menu-srOnly",tail:"msp-command-menu-tail",token:"msp-command-menu-token",value:"msp-command-menu-value",view:"msp-command-menu-view"};_("views/command-menu/command-menu.module.css",`@layer msp.components {
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

.msp-command-menu-form {
  flex: auto;
  min-height: 0;
  overflow-y: auto;
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

.msp-command-menu-shared {
  align-items: center;
  gap: var(--msp-space-1);
  padding: var(--msp-space-2) var(--msp-space-4);
  border-bottom: 1px solid var(--msp-glass-edge);
  font-size: var(--msp-font-size-xs);
  flex: none;
  display: flex;
}

.msp-command-menu-sharedTitle {
  margin-right: var(--msp-space-2);
  color: var(--msp-color-text-subtle);
}

.msp-command-menu-sharedOption {
  height: 22px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[aria-pressed="true"] {
    background: var(--msp-color-hover);
    color: var(--msp-color-accent);
  }
}
}
`);function bc(n,e,t,s){let a=n.assistant,o=t.trim();return a.ready()?{id:"assistant-ask",label:"Ask AI assistant",detail:`\u201C${o}\u201D`,icon:"sparkles",run:()=>{let r=a.propose(o);if(r)return s(o),e.open(r.command,r.tail).kind==="form";a.ask(o)}}:{id:"assistant-setup",label:"Set up the assistant to ask",detail:`\u201C${o}\u201D`,icon:"sparkles",run:()=>a.setup()}}var yc=n=>n.kind==="caption"?`caption:${n.label}`:n.kind==="group"?`group:${n.group.id}:${n.index}`:n.kind==="item"?`item:${n.item.label}:${n.index}`:`match:${n.match.command.id}:${n.match.preset?.id??""}:${n.index}:${n.tail??""}`,xc=(n,e)=>{if(n.kind!==e.kind)return!1;if(n.kind==="caption")return n.label===e.label;if(n.kind==="group")return n.group===e.group&&n.index===e.index;if(n.kind==="item")return n.item===e.item&&n.index===e.index;let t=e;return n.match.command===t.match.command&&n.match.preset===t.match.preset&&n.match.blocked===t.match.blocked&&n.index===t.index&&n.tail===t.tail},An=24,kr=28;function wc(n){let{manager:e}=n;ne(e.want());let t=B(void 0);Se(e.active,o=>{o||t.set(void 0)}),Se(e.outcomes,o=>{o.kind==="done"&&n.onClose()}),ne(()=>e.close());let s=ot(),a;return ne(()=>s(a)),l("div",{class:Z.scrim,"data-keeps-card":"",onPointerDown:o=>{o.target===o.currentTarget&&n.onClose()},children:l("div",{class:Z.menu,role:"dialog","aria-modal":"true","aria-label":"Commands",ref:o=>{a=o},onKeyDown:o=>{ts(o,o.currentTarget),!(o.key!=="Escape"||o.defaultPrevented)&&(o.preventDefault(),o.stopPropagation(),n.onClose())},children:l(L,{when:e.active,fallback:()=>l(kc,{...n,onPropose:o=>t.set(o)}),children:o=>l(Ac,{manager:e,invocation:o,proposed:t.asReadonly,onClose:n.onClose,...n.direct?{direct:!0}:{},...n.forms?.[o.command.id]?{form:n.forms[o.command.id]}:{}})})})})}function kc(n){let{manager:e}=n,t=B(n.initial??""),s=qe(t.value),a=()=>{s.latest!==s.value&&Rt()},o=B(n.group),r=B(0),i=B(void 0),c=_e("msp-command-list"),p=S=>`${c}-${S}`,m=[...n.prefixes??[],Tc(n,S=>Y(S))],d=S=>m.find(j=>S.startsWith(j.char)),h=ba(S=>`${o.value??""}|${yc(S)}`,xc),u,f=y([s,o.asReadonly,e.commands,e.groups],(S,j,Q,ce)=>{if(u&&u.t===S&&u.g===j&&u.c===Q&&u.gs===ce)return u.rows;let fe=h(v(S,j));return u?(u.t=S,u.g=j,u.c=Q,u.gs=ce,u.rows=fe):u={t:S,g:j,c:Q,gs:ce,rows:fe},fe});function v(S,j){let Q=[],ce=0,fe=J=>{J.kind!=="caption"&&(J.index=ce++),Q.push(J)},V=d(S);if(V){for(let J of V.items(S.slice(V.char.length).trimStart()))fe({kind:"item",item:J,index:0});return Q}if(!S.trim()){let{groups:J,commands:Te}=e.children(j);if(j===void 0){let re=e.query("");if(re.recent.length){fe({kind:"caption",label:"Recent"});for(let se of re.recent)fe({kind:"match",match:se,index:0})}J.length&&fe({kind:"caption",label:"Browse"})}for(let re of J)fe({kind:"group",group:re,index:0});if(j!==void 0){let re=new Set(Te.map(Me=>Me.command.category)),se;for(let Me of Te)re.size>1&&Me.command.category!==se&&(se=Me.command.category,fe({kind:"caption",label:se})),fe({kind:"match",match:Me,index:0});return Q}let pe=new Set(e.query("").recent.map(re=>re.command)),Pe=new Map;for(let re of Te){if(pe.has(re.command))continue;let se=Pe.get(re.command.category);se?se.push(re):Pe.set(re.command.category,[re])}for(let[re,se]of Pe){fe({kind:"caption",label:re});for(let Me of se)fe({kind:"match",match:Me,index:0})}return Q}let X=e.query(S),ae=J=>j===void 0||e.inGroup(J.command,j);X.direct&&ae(X.direct)&&fe({kind:"match",match:X.direct,tail:X.direct.tail,index:0});let oe=e.groups.value.filter(J=>(j===void 0||e.groupPath(J.id).some(Te=>Te.id===j))&&J.id!==j&&(ro(J.title,S)??-1)>=0);for(let J of oe)fe({kind:"group",group:J,index:0});for(let J of X.matches)J.command!==X.direct?.command&&ae(J)&&fe({kind:"match",match:J,index:0});return Q}let g=[],w=()=>g.filter(S=>S.kind!=="caption"),b=()=>{if(!n.assistant)return;if(!n.assistant.ready()){n.assistant.setup(),n.onClose();return}if(!t.value.trim()||d(t.value))return;!bc(n,e,t.value,n.onPropose).run()&&!e.active.value&&n.onClose()},k=y([s,f],(S,j)=>!!S.trim()&&!d(S)&&!j.some(Q=>Q.kind!=="caption"));Se(f,S=>{g=S,r.value>=w().length&&r.set(0)});let T=B({n:An}),F=y([f,T.asReadonly],(S,j)=>S.length<=(j.of===S?j.n:An)?S:S.slice(0,j.of===S?j.n:An),(S,j)=>S.length===j.length&&S.every((Q,ce)=>Q===j[ce])),I=y([f,F],(S,j)=>(S.length-j.length)*kr),A=S=>{let j=T.value,Q=j.of===g?j.n:An;S>Q&&Q<g.length&&T.set({of:g,n:Math.max(S,Q+An)})};Se(r.asReadonly,S=>{let j=g.findIndex(Q=>Q.kind!=="caption"&&Q.index===S);j>=0&&A(j+1)});let C=Je(r.asReadonly);Se(y([r.asReadonly,f],(S,j)=>{let Q=j.find(ce=>ce.kind==="match"&&ce.index===S);return Q?.kind==="match"&&!Q.match.preset&&!Q.tail&&!Q.match.blocked?Q.match.command.id:void 0}),S=>e.browse(S)),ne(()=>e.browse(void 0));let $=y([o.asReadonly,e.groups],S=>[...e.groupPath(S)].reverse().find(j=>j.shared)),M=y([r.asReadonly,f],(S,j)=>j.some(Q=>Q.kind!=="caption")?p(S):void 0),E=B(""),N=Yt(()=>{if(!s.value.trim())return E.set("");let j=0;for(let Q of f.value)Q.kind!=="caption"&&j++;if(j)return E.set(j===1?"1 result":`${j} results`);E.set(n.assistant?"No command matches: ask AI assistant.":"Nothing matches.")});Se(f,()=>N.start(400));let Y=S=>{t.set(S),s.offer(S),a(),te.value=S,r.set(0),i.set(void 0)},W=S=>{o.set(S),Y("")},ee=S=>{if(a(),S.kind==="group")return W(S.group.id);if(S.kind==="item"){!S.item.run()&&!e.active.value&&n.onClose();return}if(S.match.blocked)return i.set(S.match.blocked);let j=e.open(S.match.command.id,S.tail,S.match.preset?.id);j.kind==="blocked"?i.set(j.reason):j.kind==="ran"&&n.onClose()},P=()=>{let S=e.groupPath(o.value);return S.length?(W(S[S.length-2]?.id),!0):!1},U=y([t.asReadonly,o.asReadonly],(S,j)=>{let Q=d(S);return Q?Q.placeholder??Q.title:j===void 0?"Search commands, or type ? for help":`Search in ${e.groupPath(j).pop()?.title}`}),te=l("input",{class:Z.input,type:"text",role:"combobox","aria-expanded":"true","aria-controls":c,"aria-autocomplete":"list","aria-label":"Command",spellcheck:!1,onInput:S=>{t.set(S.currentTarget.value),s.offer(S.currentTarget.value),r.set(0),i.set(void 0)},onKeyDown:S=>{a();let j=w().length,Q=!S.currentTarget.value;if(S.key==="ArrowDown"||S.key==="ArrowUp")S.preventDefault(),j&&r.set((r.value+(S.key==="ArrowDown"?1:j-1))%j);else if(S.key==="Enter"){S.preventDefault();let ce=w()[r.value];S.metaKey||S.ctrlKey?b():ce?ee(ce):b()}else if(S.key==="ArrowRight"&&Q){let ce=w()[r.value];ce?.kind==="group"&&(S.preventDefault(),W(ce.group.id))}else(S.key==="Backspace"||S.key==="ArrowLeft")&&Q?P()&&S.preventDefault():S.key==="Escape"&&(S.preventDefault(),S.stopPropagation(),n.onClose())}});queueMicrotask(()=>te.focus()),O([M,U,t.asReadonly],()=>{K(te,"aria-activedescendant",M.value),K(te,"placeholder",U.value),Mr(te,t.value)});let ue=document.createTextNode("");return O([E.asReadonly],()=>ve(ue,E.value)),x(xe,{children:[x("div",{class:Z.head,children:[l(H,{name:"search",size:15,class:Z.headIcon}),l(ie,{each:y(o.asReadonly,S=>e.groupPath(S)),children:S=>x("button",{type:"button",class:Z.crumb,onClick:()=>W(S.id),children:[S.title,l(H,{name:"chevron-right",size:12})]})}),te]}),l(L,{when:$,children:S=>l(Sc,{manager:e,group:S})}),l(L,{when:i,children:S=>l("p",{class:Z.message,role:"alert",children:S})}),l("span",{class:Z.srOnly,role:"status","aria-live":"polite",children:ue}),x(ke,{class:Z.list,contentClass:Z.listContent,id:c,role:"listbox","aria-label":"Commands",viewportRef:S=>{q(S,"scroll",()=>A(Math.ceil((S.scrollTop+2*S.clientHeight)/kr)),{passive:!0})},children:[l(ie,{each:F,fallback:()=>l("p",{class:Z.empty,children:n.assistant?"No command matches: ask AI assistant.":"Nothing matches."}),children:S=>{if(S.kind==="caption")return l("div",{class:Z.caption,role:"presentation",children:S.label});let j=S.index,Q={id:p(j),index:j,highlight:r.asReadonly,selected:C.key(j),onPick:()=>ee(S),onHover:()=>r.set(j)};return S.kind==="group"?l(Ec,{...Q,manager:e,group:S.group}):S.kind==="item"?l(Rc,{...Q,item:S.item}):l(Lc,{...Q,manager:e,row:S,path:Cc(e,S.match.command.group,o.value),inGroup:o.value!==void 0,query:s})}}),l(L,{when:y(I,S=>S>0),children:()=>{let S=l("div",{class:Z.rest,role:"presentation"});return O([I],()=>Ee(S,"height",`${I.value}px`)),S}})]}),n.assistant?l(Mc,{ready:n.assistant.ready(),text:y(t.asReadonly,S=>d(S)?"":S.trim()),unmatched:k,onAsk:()=>{n.assistant?.ready()?t.value.trim()?b():te.focus():(n.assistant?.setup(),n.onClose())}}):null,l(Sr,{hints:[["\u2191\u2193","move"],["\u21B5","run"],...n.assistant?.ready()?[[Wt()?"\u2318\u21B5":"Ctrl+\u21B5","ask"]]:[],["\u2192","open group"],["?","help"],["esc","close"]]})]})}function Mc(n){if(!n.ready)return x("button",{type:"button",class:Z.ask,"data-setup":"",onClick:()=>n.onAsk(),children:[l(H,{name:"sparkles",size:15,class:Z.askIcon}),l("span",{class:Z.askText,children:"Set up an AI assistant"})]});let e=document.createTextNode(""),t=document.createTextNode(""),s=x("button",{type:"button",class:Z.ask,onClick:()=>n.onAsk(),children:[l(H,{name:"sparkles",size:15,class:Z.askIcon}),l("span",{class:Z.askLabel,children:"Ask AI assistant"}),l("span",{class:Z.askText,children:e}),l("kbd",{class:Z.askKeys,children:t})]});return O([n.text,n.unmatched],()=>{let a=n.text.value,o=n.unmatched.value;K(s,"data-default",o),ve(e,a?`\u201C${a}\u201D`:"describe what you want, in your words"),ve(t,o?"\u21B5":Wt()?"\u2318\u21B5":"Ctrl+\u21B5")}),s}function Sc(n){let{manager:e,group:t}=n,s=t.shared,a=y(e.shared,()=>e.sharedValue(t.id)),o=[],r=x("div",{class:Z.shared,role:"group","aria-label":`${t.title}: ${s.title}`,children:[l("span",{class:Z.sharedTitle,children:s.title}),s.options.map(([i,c])=>l("button",{type:"button",class:Z.sharedOption,ref:p=>o.push(p),onClick:()=>e.setShared(t.id,i),children:c}))]});return O([a],()=>{for(let i=0;i<o.length;i++)K(o[i],"aria-pressed",a.value===s.options[i][0]?"true":"false")}),r}function Cc(n,e,t){let s=n.groupPath(e),a=t===void 0?-1:s.findIndex(o=>o.id===t);return s.slice(a+1).map(o=>o.title)}function Tc(n,e){return{char:"?",title:"Help",placeholder:"Prefixes and shortcuts",items:t=>{let s=t.toLowerCase(),a=(n.prefixes??[]).map(i=>({id:`prefix:${i.char}`,label:`${i.char}  ${i.title}`,detail:i.placeholder,icon:"command",run:()=>(e(i.char),!0)})),o=n.manager.commands.value.flatMap(i=>{let c=n.manager.shortcut(i);return c?[{c:i,chord:c}]:[]}).map(({c:i,chord:c})=>({id:`keys:${i.id}`,label:i.title,detail:Lt(c),icon:i.icon??"keyboard",run:()=>{n.manager.open(i.id)}}));return[...n.manager.get("help.show")?[{id:"help:card",label:"Keyboard and mouse",detail:"The Help card",icon:"circle-help",run:()=>{n.manager.open("help.show")}}]:[],...a,...o].filter(i=>!s||i.label.toLowerCase().includes(s))}}}function Mr(n,e){n.value!==e&&(n.value=e)}function ya(n,e,t){return K(n,"aria-selected",String(e)),e&&!t&&queueMicrotask(()=>n.scrollIntoView?.({block:"nearest"})),e}function Ec(n){let e=n.manager.groupPath(n.group.parent).map(a=>a.title),t=x("div",{id:n.id,class:Z.row,role:"option",onClick:()=>n.onPick(),onPointerMove:()=>n.onHover(),children:[l("span",{class:Z.rowIcon,children:l(H,{name:n.group.icon??"list-tree",size:15})}),l("span",{class:Z.rowTitle,children:n.group.title}),l("span",{class:Z.rowMeta,children:e.join(" \u203A ")}),l(H,{name:"chevron-right",size:14,class:Z.rowChevron})]}),s=!1;return O([n.selected],()=>{s=ya(t,n.highlight.value===n.index,s)}),t}function Rc(n){let{item:e}=n,t=x("div",{id:n.id,class:Z.row,role:"option",onClick:()=>n.onPick(),onPointerMove:()=>n.onHover(),children:[l("span",{class:Z.rowIcon,children:e.icon?l(H,{name:e.icon,size:15}):null}),l("span",{class:Z.rowTitle,children:e.label}),l("span",{class:Z.rowMeta,children:e.detail})]}),s=!1;return O([n.selected],()=>{s=ya(t,n.highlight.value===n.index,s)}),t}function Lc(n){let{manager:e,query:t}=n,{match:s,tail:a}=n.row,o=s.command,r=s.preset?`${o.title.replace(/…$/,"")} ${s.preset.title}`:o.title,i=e.shortcut(o),c=s.blocked??(n.path.length?n.path.join(" \u203A "):n.inGroup?"":o.category),p=document.createElement("span"),m=document.createTextNode(c),d=x("div",{id:n.id,class:Z.row,role:"option","aria-disabled":s.blocked?"true":void 0,onClick:()=>n.onPick(),onPointerMove:()=>n.onHover(),children:[l("span",{class:Z.rowIcon,children:o.icon?l(H,{name:o.icon,size:15}):null}),x("span",{class:Z.rowTitle,children:[p,a?l("span",{class:Z.tail,children:a}):null]}),l("span",{class:Z.rowMeta,children:m}),i?l("kbd",{class:Z.keys,children:Lt(i)}):null]}),h=!1,u=[n.selected];o.count&&!s.preset&&u.push(e.browsing),O(u,()=>{if(h=ya(d,n.highlight.value===n.index,h),o.count&&!s.preset){let g=e.browsing.value;ve(m,(g?.id===o.id?g.count:void 0)??c)}});let f,v=g=>{if(g===f)return;f=g;let w=Pc(r,g);typeof w=="string"?p.textContent=w:p.replaceChildren(Xs(w))};return a?v(""):O([t],()=>v(t.value)),d}function Pc(n,e){let t=new Set(io(n,e));if(!t.size)return n;let s=[],a="",o=!1,r=()=>{a&&(s.push(o?l("mark",{children:a}):a),a="")};for(let i=0;i<n.length;i++){let c=t.has(i);c!==o&&(r(),o=c),a+=n[i]}return r(),l(xe,{children:s})}function Ac(n){let{manager:e,invocation:t}=n,s,a=b=>b.field!==void 0&&!!n.form?.fields?.includes(b.field),o=t.state,r=t.command,i=_e("msp-command-options"),c=y(o,b=>b.pick),p=b=>`${i}-${b}`,m,d=()=>m?Cn(m).filter(b=>b.tabIndex>=0):[],h=b=>{if(!m)return!1;let k=o.value;if(k.canAssist||k.text.trim()&&k.completions.length||k.pick>=0)return!1;let T=k.fields.findIndex(A=>A.id===k.field);if(b?T>0:T<k.fields.length-1)return!1;let F=d(),I=b?F[F.length-1]:F[0];return I?(I.focus(),!0):!1},u=b=>{if(b.key!=="Tab"||b.defaultPrevented||!m||b.altKey||b.metaKey||b.ctrlKey)return;let k=d();if(Ne(m.ownerDocument)!==(b.shiftKey?k[0]:k[k.length-1]))return;b.preventDefault();let F=o.value.fields,I=b.shiftKey?F[F.length-1]:F[0];I&&t.focus(I.id),f.focus()},f=l("input",{class:Z.input,type:"text",role:"combobox","aria-controls":i,"aria-autocomplete":"list",spellcheck:!1,onInput:b=>t.type(b.currentTarget.value),onKeyDown:b=>{if(s?.(b)){b.preventDefault();return}b.key==="Enter"&&b.altKey&&r.view?(b.preventDefault(),w()):b.key==="Enter"?(b.preventDefault(),t.enter()):b.key==="Tab"?(b.preventDefault(),h(b.shiftKey)||t.tab(b.shiftKey?-1:1)):b.key==="ArrowDown"||b.key==="ArrowUp"?(b.preventDefault(),t.move(b.key==="ArrowDown"?1:-1)):b.key==="Backspace"&&!b.currentTarget.value?(b.preventDefault(),t.back()||g()):b.key==="Escape"&&(b.preventDefault(),b.stopPropagation(),g())}});queueMicrotask(()=>f.focus());let v=document.createTextNode("");O([o],()=>{let b=o.value;ve(v,b.action);let k=b.fields.find(F=>F.id===b.field),T=!a(b)&&b.completions.length>0;K(f,"aria-expanded",String(T)),K(f,"aria-activedescendant",T&&b.pick>=0&&b.pick<b.completions.length?p(b.pick):void 0),K(f,"aria-label",k?.label??r.title),K(f,"placeholder",k?k.label:"Enter to run"),Mr(f,b.text)});let g=()=>{e.close(),n.direct&&n.onClose()},w=()=>{let b=r.view;b&&(e.close(),n.onClose(),b.open(e.context.value))};return x(xe,{children:[l(L,{when:n.proposed,children:b=>x("p",{class:Z.proposed,children:[l(H,{name:"sparkles",size:13,class:Z.askIcon}),"Proposed by the assistant from \u201C",b,"\u201D: check it, then Enter to run"]})}),x("div",{class:Z.head,children:[x("span",{class:Z.command,children:[r.icon?l(H,{name:r.icon,size:15}):null,r.title.replace(/…$/,"")]}),f]}),x("div",{class:Z.sentence,"aria-label":"Arguments",children:[l(ie,{each:y(o,b=>b.fields),children:b=>l(Hc,{field:b,state:o,onFocus:()=>{t.focus(b.id),f.focus()}})},b=>b.id),l("span",{class:Z.spacer}),r.view?x("button",{type:"button",class:Z.view,title:`Open ${r.view.title} (\u2325\u21B5)`,onClick:w,children:[r.view.title,l(H,{name:"chevron-right",size:13})]}):null,x("button",{type:"button",class:Z.run,onClick:()=>{t.enter()},children:[v,l("kbd",{children:"\u21B5"})]})]}),l(L,{when:y(o,b=>b.error),children:b=>x("p",{class:Z.error,role:"alert",children:[b.message,b.hint?x("span",{class:Z.hint,children:[" ",b.hint]}):null]})}),l(ke,{class:Z.list,contentClass:Z.listContent,id:i,role:"listbox","aria-label":"Options",children:l(ie,{each:y(o,b=>a(b)?zc:b.completions),children:(b,k)=>{let T=x("div",{class:Z.row,role:"option",onClick:()=>t.accept(k.value),onPointerMove:()=>t.point(k.value),children:[l("span",{class:Z.rowIcon}),l("span",{class:Z.rowTitle,children:b.label}),l("span",{class:Z.rowMeta,children:b.detail??(b.value!==b.label?b.value:"")})]});return O([c,k],()=>{K(T,"id",p(k.value)),K(T,"aria-selected",String(c.value===k.value))}),T}})}),n.form?l("div",{class:Z.form,ref:b=>{m=b},onKeyDown:u,children:n.form.render({manager:e,invocation:t,run:()=>{t.enter()},keys:b=>{s=b}})}):null,l(L,{when:y(o,b=>!n.form&&b.formOnly.length>0),children:()=>{let b=document.createTextNode("");return O([o],()=>{let k=o.value.formOnly.length;ve(b,`+ ${k} more option${k>1?"s":""} at their defaults`)}),l("p",{class:Z.more,children:b})}}),l(Sr,{hints:[["tab","next field"],["\u21B5","run"],...r.view?[["\u2325\u21B5","open in the UI"]]:[],["\u232B","back"],n.direct?["esc","close"]:["esc","commands"]]})]})}var zc=[];function Hc(n){let{field:e}=n,t=y(n.state,i=>{let c=i.values[e.id];if(!(c===void 0||c===""))return e.options?.find(p=>p.value===String(c))?.label??String(c)}),s=y(n.state,i=>i.field===e.id),a=y(n.state,i=>i.missing.includes(e.id)),o=document.createTextNode(""),r=l("button",{type:"button",class:Z.value,onClick:()=>n.onFocus(),children:o});return O([t,s,a],()=>{let i=t.value;K(r,"data-active",s.value),K(r,"data-missing",a.value),K(r,"data-empty",i===void 0),ve(o,i??e.label)}),x("span",{class:Z.token,children:[e.before?l("span",{class:Z.before,children:e.before}):null,r]})}function Sr(n){return l("div",{class:Z.footer,children:n.hints.map(([e,t])=>x("span",{children:[l("kbd",{children:e})," ",t]}))})}var R={announce:"msp-shell-canvas-announce",bar:"msp-shell-canvas-bar",bottom:"msp-shell-canvas-bottom",bottomGrid:"msp-shell-canvas-bottomGrid",busy:"msp-shell-canvas-busy","busy-in":"msp-shell-canvas-busy-in","busy-slide":"msp-shell-canvas-busy-slide","busy-spin":"msp-shell-canvas-busy-spin",busyActions:"msp-shell-canvas-busyActions",busyBar:"msp-shell-canvas-busyBar",busyCard:"msp-shell-canvas-busyCard",busyHead:"msp-shell-canvas-busyHead",busyLabel:"msp-shell-canvas-busyLabel",busyPercent:"msp-shell-canvas-busyPercent",busySpin:"msp-shell-canvas-busySpin",busyTrack:"msp-shell-canvas-busyTrack",caption:"msp-shell-canvas-caption",card:"msp-shell-canvas-card","card-in":"msp-shell-canvas-card-in",cardBody:"msp-shell-canvas-cardBody",cardBodyContent:"msp-shell-canvas-cardBodyContent",cardBodyFill:"msp-shell-canvas-cardBodyFill",cardDocked:"msp-shell-canvas-cardDocked",cardHeader:"msp-shell-canvas-cardHeader",cardSlot:"msp-shell-canvas-cardSlot",cardTitle:"msp-shell-canvas-cardTitle",chip:"msp-shell-canvas-chip",context:"msp-shell-canvas-context",corner:"msp-shell-canvas-corner",countdown:"msp-shell-canvas-countdown",face:"msp-shell-canvas-face",folded:"msp-shell-canvas-folded",frame:"msp-shell-canvas-frame",lead:"msp-shell-canvas-lead",menuMark:"msp-shell-canvas-menuMark",message:"msp-shell-canvas-message",pill:"msp-shell-canvas-pill","pill-in":"msp-shell-canvas-pill-in",pillButton:"msp-shell-canvas-pillButton",pillMain:"msp-shell-canvas-pillMain",progress:"msp-shell-canvas-progress",railMenu:"msp-shell-canvas-railMenu",railMenuAnchor:"msp-shell-canvas-railMenuAnchor",railMenuButton:"msp-shell-canvas-railMenuButton",railMenuDivider:"msp-shell-canvas-railMenuDivider",railMenuList:"msp-shell-canvas-railMenuList",railToggle:"msp-shell-canvas-railToggle",sections:"msp-shell-canvas-sections",spin:"msp-shell-canvas-spin",stack:"msp-shell-canvas-stack",stackTools:"msp-shell-canvas-stackTools",status:"msp-shell-canvas-status",text:"msp-shell-canvas-text",tool:"msp-shell-canvas-tool","tool-menu-in":"msp-shell-canvas-tool-menu-in",toolMenu:"msp-shell-canvas-toolMenu",toolMenuCard:"msp-shell-canvas-toolMenuCard",toolMenuCheck:"msp-shell-canvas-toolMenuCheck",toolMenuChevron:"msp-shell-canvas-toolMenuChevron",toolMenuDivider:"msp-shell-canvas-toolMenuDivider",toolMenuHeading:"msp-shell-canvas-toolMenuHeading",toolMenuHint:"msp-shell-canvas-toolMenuHint",toolMenuLabel:"msp-shell-canvas-toolMenuLabel",toolMenuRow:"msp-shell-canvas-toolMenuRow",toolMenuScroll:"msp-shell-canvas-toolMenuScroll",toolMenuScrollContent:"msp-shell-canvas-toolMenuScrollContent",toolSubmenu:"msp-shell-canvas-toolSubmenu",toolbar:"msp-shell-canvas-toolbar",toolbarSlot:"msp-shell-canvas-toolbarSlot"};_("views/shell/canvas.module.css",`@layer msp.components {
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

  [data-right-panel="open"] & {
    animation: none;
  }

  [data-pinned] & {
    top: 0;
    right: calc(var(--msp-canvas-rail-inset, 52px) - var(--msp-canvas-edge));
    background: var(--msp-pinned-bg);
    --msp-surface: var(--msp-pinned-bg);
    -webkit-backdrop-filter: none;
    box-shadow: var(--msp-pinned-edge);
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
  max-height: calc(var(--msp-menu-room) - var(--msp-space-3));
  padding: var(--msp-space-2);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-glass-panel-bg);
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  flex-direction: column;
  display: flex;
}

.msp-shell-canvas-toolMenuScroll {
  flex: auto;
  min-height: 0;
}

.msp-shell-canvas-toolMenuScrollContent {
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

.msp-shell-canvas-toolMenuChevron {
  color: var(--msp-color-text-subtle);
}

.msp-shell-canvas-toolSubmenu {
  margin-right: var(--msp-space-2);
  animation: msp-shell-canvas-tool-menu-in var(--msp-motion-fast) var(--msp-ease);
  position: absolute;
  right: 100%;
}

.msp-shell-canvas-toolMenuHeading {
  padding: var(--msp-space-2) var(--msp-space-3) 0;
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

.msp-shell-canvas-cardSlot {
  display: contents;
}

.msp-shell-canvas-cardDocked {
  contain: content;
  flex-direction: column;
  height: min(45cqh, 420px);
  min-height: 0;
  display: flex;
  overflow: hidden;
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

.msp-shell-canvas-bar, .msp-shell-canvas-folded {
  min-width: 0;
}
}
`);var me={band:"msp-shell-dock-band",barTab:"msp-shell-dock-barTab",body:"msp-shell-dock-body",bodyContent:"msp-shell-dock-bodyContent",bottom:"msp-shell-dock-bottom",collapsedBar:"msp-shell-dock-collapsedBar",compact:"msp-shell-dock-compact",content:"msp-shell-dock-content",dock:"msp-shell-dock-dock",floating:"msp-shell-dock-floating",floatingBottom:"msp-shell-dock-floatingBottom",floatingLeft:"msp-shell-dock-floatingLeft",floatingRight:"msp-shell-dock-floatingRight",floatingTop:"msp-shell-dock-floatingTop",frameless:"msp-shell-dock-frameless",header:"msp-shell-dock-header",left:"msp-shell-dock-left",pin:"msp-shell-dock-pin",rail:"msp-shell-dock-rail","rail-menu-in":"msp-shell-dock-rail-menu-in",railFoot:"msp-shell-dock-railFoot",railMenu:"msp-shell-dock-railMenu",railMenuRows:"msp-shell-dock-railMenuRows",railMenuScroll:"msp-shell-dock-railMenuScroll",right:"msp-shell-dock-right",splitter:"msp-shell-dock-splitter",strip:"msp-shell-dock-strip",tab:"msp-shell-dock-tab",title:"msp-shell-dock-title",top:"msp-shell-dock-top"};_("views/shell/dock.module.css",`@layer msp.components {
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

  & .msp-shell-dock-splitter, &[data-covered] > .msp-shell-dock-content {
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
    --msp-surface: var(--msp-glass-panel-bg);
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
    box-shadow: none;
  }

  & .msp-shell-dock-header {
    height: max(var(--msp-rail-head, 40px), var(--msp-touch-target, 0px));
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
    box-shadow: none;
    border-radius: 0;
    position: relative;

    &:before {
      content: "";
      z-index: 1;
      background: var(--msp-glass-edge);
      pointer-events: none;
      width: 1px;
      position: absolute;
      inset: 0 auto 0 0;
    }
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

[data-pinned] {
  --msp-pinned-bg: var(--msp-color-panel);
  --msp-pinned-edge: -1px 0 0 var(--msp-glass-edge);
}

[data-pinned] > .msp-shell-dock-floatingRight {
  gap: 0;

  & .msp-shell-dock-content {
    background: var(--msp-pinned-bg);
    --msp-surface: var(--msp-pinned-bg);
    -webkit-backdrop-filter: none;
    box-shadow: var(--msp-pinned-edge);
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
`);var zn=[{name:"normal",min:620,button:40,captioned:46},{name:"compact",min:530,button:34,captioned:40},{name:"small",min:0,button:30,captioned:36}];function xa(n){return zn.find(e=>n>=e.min)??zn[zn.length-1]}var Cr=new Set;function Fc(n,e){let t=xa(e);if(e<=0)return{step:t,hidden:Cr};let s=(i,c)=>{let p=new Set(i.map(d=>d.section)),m=0;for(let d of i)m+=d.captioned?t.captioned:t.button;return c&&(m+=t.button,p.add("more")),m+Math.max(0,p.size-1)};if(s(n,!1)<=e)return{step:t,hidden:Cr};let a=n.map((i,c)=>({e:i,i:c})).sort((i,c)=>c.e.priority-i.e.priority||c.i-i.i).map(i=>i.e),o=new Set,r=n;for(let i of a)if(o.add(i.id),r=r.filter(c=>c!==i),s(r,!0)<=e)break;return{step:t,hidden:o}}function Ss(n){let e=[];for(let t of n){let s=t.group,a=e.find(o=>o.group===s);a?a.items.push(t):e.push({group:s,items:[t]})}return e.sort((t,s)=>t.group===void 0?-1:s.group===void 0?1:0)}function Ic(n,e){let t=(r,i)=>({id:`tab:${r.id}`,section:i,priority:r.priority,captioned:!1,kind:"tab",tab:r}),s=(r,i)=>({id:`tool:${r.id}`,section:i,priority:r.priority,captioned:!!r.caption,kind:"tool",item:r}),a=[];for(let r of n.filter(i=>i.place==="head"))a.push(t(r,"head"));for(let r of n.filter(i=>!i.place||i.place==="strip"))a.push(t(r,"strip"));let o=Ss(e);for(let r of o)if(r.group!==void 0)for(let i of r.items)a.push(s(i,`group:${r.group}`));for(let r of n.filter(i=>i.place==="foot"))a.push(t(r,"foot"));for(let r of o)if(r.group===void 0)for(let i of r.items)a.push(s(i,"lead"));return a.map((r,i)=>r.priority===void 0?{...r,priority:i}:r)}function wa(n){let e=B([]),t=new Map,s=[],a=()=>e.set(s.filter(r=>!r.visible||t.get(r.visible)?.on===!0)),o=()=>{for(let r of t.values())r.stop();t.clear()};return Se(n,r=>{s=r;let i=new Set;for(let c of r){let p=c.visible;if(!p||(i.add(p),t.has(p)))continue;let m={on:void 0,stop:()=>{}};t.set(p,m);let d=!0,h=p.subscribe(u=>{m.on=u,d||a()});d=!1,m.stop=()=>h.unsubscribe()}for(let[c,p]of t)i.has(c)||(p.stop(),t.delete(c));a()}),Gt(r=>{r||o()}),ne(o),e.asReadonly}var Dc=(n,e)=>n.size===e.size&&[...n].every(t=>e.has(t)),Nc=(n,e)=>n.length===e.length&&n.every((t,s)=>t===e[s]),Ms=class{constructor(e,t){this.height=B(0);this.menu=B(void 0);let s=wa(y(e.toolbar,o=>o.filter(r=>r.place!=="canvas")));this.entries=y([t.tabs,s],(o,r)=>Ic(o,r));let a=y([this.entries,this.height.asReadonly],(o,r)=>({entries:o,fit:Fc(o,r)}));this.hidden=y(a,o=>o.fit.hidden,Dc),this.overflow=y(a,o=>o.entries.filter(r=>o.fit.hidden.has(r.id)),Nc)}toggleMenu(e,t){let s=this.menu.value;if(s&&s.anchor===e)return this.menu.set(void 0);let a=this.#e?.parentElement,o=a?a.getBoundingClientRect().bottom-e.getBoundingClientRect().bottom:0;this.menu.set({bottom:o,anchor:e,...t?{item:t}:{}})}#e;observe(e){this.#e=e;let t=ze(e,s=>{let a=Math.round(s[s.length-1].contentRect.height);a!==this.height.value&&this.height.set(a)});return()=>t?.disconnect()}};var Tr=new WeakMap;function it(n,e){let t=Tr.get(e);if(t)return t;let s=y(e.state,r=>r,(r,i)=>r.size===i.size&&r.pinned===i.pinned&&r.floating===i.floating),a=y(s,r=>r.size),o=e.id==="right"?y([e.state,n.overlay],(r,i)=>i||r.collapsed?void 0:r.active):y(e.state,r=>r.collapsed?void 0:r.active);return t={size:a,sizePx:y(a,r=>`${r}px`),pinned:y(s,r=>r.pinned),floating:y(s,r=>r.floating),selected:Je(o)},Tr.set(e,t),t}function Hn(n){let{shell:e,dock:t}=n,s=t.id==="top"||t.id==="bottom",a=y(t.tabs,d=>d.length>0),o=y(e.mode,d=>d==="compact"&&t.id==="right"),r=y([e.overlay,o],(d,h)=>h?d:void 0),i=y([t.tabs,o],(d,h)=>h&&d.some(u=>u.compactBar)?d.filter(u=>u.compactBar):d),c=s?y([t.tabs,t.active],(d,h)=>d.length>1&&!!h):!0,p=_e("msp-panel"),m;return l(L,{when:a,children:()=>{let d=it(e,t).sizePx,h=x("div",{class:`${me.dock} ${me[t.id]}`,ref:u=>{m=u},children:[l(L,{when:t.active,reveal:!0,swap:()=>m,fallback:s?()=>l(Vc,{shell:e,dock:t}):void 0,children:u=>l(ka,{shell:e,dock:t,tab:u,id:p,...t.id==="right"?{coveredBy:r}:{}})}),l(L,{when:o,children:()=>l(Lr,{shell:e})}),l(L,{when:c,children:()=>{let u,f=x("div",{class:me.strip,children:[l("div",{role:"tablist","aria-label":"Panels",style:"display: contents",ref:v=>{u=v,ne(Tn(v))},children:l(ie,{each:i,children:v=>l(Cs,{shell:e,dock:t,tab:v,panel:p})})}),n.stripEnd]});return O([o],()=>K(u,"aria-orientation",o.value||s?"horizontal":"vertical")),f}})]});return O([d,o,r],()=>{Zt(h,me.compact,o.value),K(h,"data-covered",!!r.value),Ee(h,"--msp-dock-size",d.value)}),h}})}function Ma(n){let{shell:e,dock:t}=n,s=it(e,t).sizePx,a=new Ms(e,t),o=y([t.tabs,a.hidden],(h,u)=>u.size?h.filter(f=>!u.has(`tab:${f.id}`)):h),r=y(o,h=>h.filter(u=>u.place==="head"),Kt),i=y(o,h=>h.filter(u=>!u.place||u.place==="strip"),Kt),c=y(o,h=>h.filter(u=>u.place==="foot"),Kt),p=_e("msp-panel");if(t.id==="top"||t.id==="bottom"){let h=y(t.active,f=>f?.frame==="none"),u=l("div",{class:`${me.floating} ${t.id==="top"?me.floatingTop:me.floatingBottom}`,children:l(L,{when:t.active,reveal:"fade",children:f=>l(ka,{shell:e,dock:t,tab:f,id:p})})});return O([h,s],()=>{Zt(u,me.band,h.value),Ee(u,"--msp-dock-size",s.value)}),u}let m=y(a.height.asReadonly,h=>`${(h>0?xa(h):zn[0]).button}px`),d=x("div",{class:`${me.floating} ${t.id==="left"?me.floatingLeft:me.floatingRight}`,children:[x("div",{class:`${me.rail} ${R.frame}`,ref:h=>{ne(a.observe(h))},children:[n.railLead,l(L,{when:y(r,h=>h.length>0),children:()=>l("div",{class:me.strip,role:"tablist","aria-orientation":"vertical","aria-label":"Home",ref:h=>ne(Tn(h)),children:l(ie,{each:r,children:h=>l(Cs,{shell:e,dock:t,tab:h,panel:p})})})}),l(L,{when:y(i,h=>h.length>0),children:()=>l("div",{class:me.strip,role:"tablist","aria-orientation":"vertical","aria-label":"Panels",ref:h=>ne(Tn(h)),children:l(ie,{each:i,children:h=>l(Cs,{shell:e,dock:t,tab:h,panel:p})})})}),n.railItems?.(a),l(Oc,{shell:e,dock:t,rail:a,root:()=>d}),x("div",{class:me.railFoot,children:[l(L,{when:y(c,h=>h.length>0),children:()=>l("div",{class:me.strip,role:"tablist","aria-orientation":"vertical","aria-label":"More panels",ref:h=>ne(Tn(h)),children:l(ie,{each:c,children:h=>l(Cs,{shell:e,dock:t,tab:h,panel:p})})})}),n.railFoot?.(a)]})]}),l(L,{when:t.active,reveal:"side",swap:()=>d,children:h=>l(ka,{shell:e,dock:t,tab:h,id:p,pinnable:!0,coveredBy:e.overlay})}),l($c,{shell:e,dock:t,rail:a})]});return O([s,m],()=>{Ee(d,"--msp-dock-size",s.value),Ee(d,"--msp-rail-head",m.value)}),d}function Rr(n,e,t){e.id==="right"&&n.overlay.value?(n.closeOverlay(),n.show(t.id)):n.select(t.id)}function Oc(n){let{rail:e}=n,t=e.menu,s=y(t.asReadonly,a=>!!a);return l(L,{when:y(e.overflow,a=>a.length>0),children:()=>{ne(()=>t.set(void 0));let a=l("button",{type:"button",class:me.tab,"data-tip":"More","data-tip-side":"left","aria-label":"More","aria-haspopup":"menu",onClick:o=>e.toggleMenu(o.currentTarget),onKeyDown:o=>{o.key!=="ArrowDown"&&o.key!=="ArrowUp"||t.value||(o.preventDefault(),o.currentTarget.click())},children:l(H,{name:"ellipsis",size:20})});return O([s],()=>K(a,"aria-expanded",String(s.value))),l("nav",{class:me.strip,"aria-label":"More buttons",children:a})}})}function $c(n){let{shell:e,dock:t,rail:s}=n,a=s.menu,o=y([a.asReadonly,s.overflow],(p,m)=>p&&(p.item?p.item.menu?.length:m.length>0)?p:void 0),r=(p,m)=>{if(a.set(void 0),p.tab)return Rr(e,t,p.tab);let d=p.item;d.overlay?e.toggleOverlay(d.overlay,m):d.run?.(m)},i=p=>{if(p.key!=="Escape"||!a.value||!Xe(a.value.anchor,p))return;let m=a.value.anchor;a.set(void 0),m.focus(),p.preventDefault()},c=p=>{let m=a.value;if(!m)return;let d=at(p);He(p,m.anchor)||d.closest?.(`.${me.railMenu}`)||a.set(void 0)};return q(document,"keydown",i),q(document,"pointerdown",c),l(L,{when:o,children:p=>{let m=ot(()=>p.anchor),d;ne(()=>m(d));let h=p.item?Ot(p.item):void 0,u=l("div",{class:R.toolMenuCard,role:"menu","aria-label":p.item?dn(p.item):"More",onKeyDown:gt,ref:f=>{d=f,queueMicrotask(()=>zt(f))},children:l(ke,{class:me.railMenuScroll,contentClass:me.railMenuRows,children:p.item?l($t,{items:p.item.menu,onRun:()=>a.set(void 0)}):l(ie,{each:s.overflow,children:f=>l(Bc,{entry:f,onRun:()=>r(f,p.anchor)})},f=>f.id)})});return h&&O([h],()=>K(u,"aria-label",h.value.title)),l("div",{class:me.railMenu,style:{bottom:`${p.bottom}px`},children:u})}})}function Bc(n){let{entry:e}=n,t=e.item?Ot(e.item):void 0,s=document.createTextNode(e.tab?e.tab.title:t?t.value.title:dn(e.item));return t&&O([t],()=>ve(s,t.value.title)),x("button",{type:"button",role:"menuitem",class:R.toolMenuRow,onClick:()=>n.onRun(),children:[e.tab?l(H,{name:e.tab.icon,size:16}):l(Fn,{item:e.item,size:16,...t?{face:t}:{}}),l("span",{class:R.toolMenuLabel,children:s}),l("span",{})]})}function Vc(n){let{shell:e,dock:t}=n;return l("div",{class:me.collapsedBar,children:l(ie,{each:t.tabs,children:s=>x("button",{type:"button",class:me.barTab,onClick:()=>e.show(s.id),title:`Show ${s.title}`,children:[l(H,{name:t.id==="top"?"chevron-down":"chevron-up",size:14}),s.title]})})})}function jc(n,e){return[{id:"hide",label:`Hide ${e.title}`,icon:"eye-off",run:()=>n.hideTab(e.id)},...n.hiddenTabs.value.map(t=>({id:`show:${t.id}`,label:`Show ${t.title}`,icon:"eye",run:()=>n.showTab(t.id)})),{id:"reset",label:"Reset layout",icon:"rotate-ccw",run:()=>n.resetLayout()}]}function Er(n,e,t,s){let a=t.closest(".msp-root")??document.body,o=t.getBoundingClientRect();la(a,s??{x:o.left,y:o.bottom},jc(n,e))}function Cs(n){let{shell:e,dock:t,tab:s}=n,a=it(e,t).selected.key(s.id),o=l("button",{type:"button",role:"tab",class:me.tab,"data-tip":s.title,"data-tip-side":"left","aria-label":s.title,"aria-controls":n.panel,"data-tab":s.id,onClick:()=>Rr(e,t,s),onContextMenu:r=>{r.preventDefault(),Er(e,s,r.currentTarget,{x:r.clientX,y:r.clientY})},onKeyDown:r=>{r.key!=="ContextMenu"&&!(r.shiftKey&&r.key==="F10")||(r.preventDefault(),Er(e,s,r.currentTarget))},children:l(H,{name:s.icon,size:20})});return O([a],()=>K(o,"aria-selected",String(a.value))),o}function Sa(n){let{shell:e}=n,t=e.dock(n.dock),s=y([e.mode,e.compactRail],(a,o)=>!o&&a!=="embedded"&&a!=="compact");return l(L,{when:s,children:()=>l(Ce,{variant:"ghost",size:"sm",class:me.pin,icon:l(H,{name:"pin"}),title:"Pin beside the canvas",pressed:it(e,t).pinned,onClick:()=>e.setPinned(n.dock,!t.state.value.pinned)})})}function ka(n){let{shell:e,dock:t,tab:s}=n,a=n.coveredBy?y(n.coveredBy,c=>!c):!0,o,r=!1,i=c=>{let p=c.relatedTarget;if(p){r=!!o?.contains(p);return}let m=at(c);queueMicrotask(()=>{let d=Ne();d&&o?.contains(d)||m.isConnected&&!m.closest("[inert]")&&(r=!1)})};return ne(()=>{if(!r)return;let c=Ne();if(c&&!o?.contains(c))return;let p=o?.closest(".msp-root")??o?.getRootNode();(p?[...p.querySelectorAll('[role="tab"]')]:[]).find(d=>d.dataset.tab===s.id)?.focus({preventScroll:!0})}),ht(a,()=>x("section",{class:s.frame==="none"?`${me.content} ${me.frameless}`:me.content,role:"tabpanel",id:n.id,"aria-label":s.title,"data-msp-scope":`panel:${s.id}`,ref:c=>{o=c},onFocusIn:()=>{r=!0},onFocusOut:i,children:[l(qc,{shell:e,dock:t}),x("header",{class:me.header,children:[l("h2",{class:me.title,children:typeof s.heading=="function"?s.heading():s.heading??s.title}),n.pinnable?l(Sa,{shell:e,dock:t.id}):null,l(Ce,{variant:"ghost",size:"sm",icon:l(H,{name:"x"}),title:"Close panel",onClick:()=>e.toggle(t.id)})]}),l(ke,{class:me.body,contentClass:me.bodyContent,children:l(L,{when:y(e.tabFocus,c=>({section:c?.tab===s.id?c.section:void 0}),(c,p)=>c.section===p.section&&!p.section),children:c=>l(Ze,{renderer:s.render,ctx:{shell:e,dock:t.id,...c.section?{focus:c.section}:{}}})})})]}))}function qc(n){let{shell:e,dock:t}=n,s=t.id==="left"?1:-1,a=qe(-1);Se(a,c=>{c>=0&&e.setSize(t.id,c)});let o,r=it(e,t).size,i=l("div",{class:me.splitter,role:"separator","aria-orientation":"vertical",tabIndex:0,"aria-label":"Panel width",onKeyDown:c=>{if(c.key!=="ArrowLeft"&&c.key!=="ArrowRight")return;c.preventDefault();let p=(c.shiftKey?64:16)*(c.key==="ArrowRight"?1:-1);e.setSize(t.id,t.state.value.size+s*p)},onPointerEnter:c=>c.currentTarget.setAttribute("data-active",""),onPointerLeave:c=>{o?.active||c.currentTarget.removeAttribute("data-active")},ref:c=>{o=ut(c,{start:p=>(c.setAttribute("data-active",""),{x:p.clientX,size:t.state.value.size}),move:(p,m)=>a.offer(m.size+s*(p.clientX-m.x)),end:(p,m,d)=>{if(m==="up"&&d){let h=c.getBoundingClientRect();if(d.clientX>=h.left&&d.clientX<=h.right&&d.clientY>=h.top&&d.clientY<=h.bottom)return}c.removeAttribute("data-active")}})},onDblClick:()=>e.setSize(t.id,t.id==="left"?300:340)});return O([r],()=>K(i,"aria-valuenow",Math.round(r.value))),i}function Dn(n,e){let t=De(n);if(!t)return B(n).asReadonly;if(dt(t))return t;let s=Xa(t,e);return ne(()=>s.dispose()),s}function Ot(n){return n.face?Dn(n.face,{icon:n.icon,title:n.title}):void 0}function dn(n){return n.caption?`${n.title} (${n.caption})`:n.title}function Fn(n){let{item:e}=n,t=n.face??Ot(e);if(!t)return l(H,{name:e.icon,size:n.size});let s,a=l("span",{class:n.class});return O([t],()=>{let o=t.value.icon;o!==s&&(s=o,a.replaceChildren(H({name:o,size:n.size})))}),a}function Nn(n){let{shell:e}=n,t=n.part??"all",s=t==="canvas",a=n.hidden?y([e.toolbar,n.hidden],(r,i)=>i.size?r.filter(c=>!i.has(`tool:${c.id}`)):r):e.toolbar,o=y(a,r=>{let i=Ss(r.filter(c=>c.place==="canvas"===s));return t==="all"||s?i:i.filter(c=>t==="lead"?c.group===void 0:c.group!==void 0)});return l("div",{class:R.sections,children:l(ie,{each:o,children:r=>l("div",{class:R.toolbar,role:"toolbar","aria-orientation":n.menus?"horizontal":"vertical","aria-label":r.group??"commands",children:r.items.map(i=>i.visible?l(L,{when:i.visible,children:()=>l(Pr,{shell:e,item:i,menus:n.menus,railMenu:n.railMenu})}):l(Pr,{shell:e,item:i,menus:n.menus,railMenu:n.railMenu}))})},r=>r.group??"")})}function zr(n,e){let t=Dn(e.pressed??!1,!1),s=e.overlay;return s?y([n.overlay,t],(a,o)=>a?.overlay.id===s||o):t}function Pr(n){let{shell:e,item:t,menus:s}=n,a=!s&&t.menu?.length?n.railMenu:void 0,o=s&&t.menu?.length?s:void 0,r=t.pressed||t.overlay?zr(e,t):void 0,i=Ot(t),c=i?void 0:dn(t),p=o?.shown.key(t),m=x("button",{type:"button",class:R.tool,"data-captioned":t.caption?"":void 0,"data-tip":o?void 0:c,"data-tip-side":t.place==="canvas"?"top":"left","aria-label":c,"aria-haspopup":o||a?"menu":void 0,"data-overlay-trigger":t.overlay?"":void 0,"data-keeps-card":t.keepsCard?"":void 0,onClick:h=>{if(o&&!t.overlay&&!t.run)return o.show(t,h.currentTarget,h.detail===0);if(o&&Ta())return o.open.value?.item===t?o.hide():o.show(t,h.currentTarget,h.detail===0);if(a)return a(t,h.currentTarget);o?.hide(),t.overlay?e.toggleOverlay(t.overlay,h.currentTarget):t.run?.(h.currentTarget)},onKeyDown:o?h=>{h.key!=="ArrowDown"&&h.key!=="ArrowUp"||(h.preventDefault(),o.show(t,h.currentTarget,!0))}:void 0,onPointerEnter:o?h=>h.pointerType==="mouse"&&o.show(t,h.currentTarget):void 0,onPointerLeave:o?()=>o.hideSoon():void 0,onBlur:o?()=>o.hideSoon():void 0,children:[l(Fn,{item:t,size:t.caption?16:20,class:R.face,...i?{face:i}:{}}),t.caption?l("span",{class:R.caption,children:t.caption}):null,o?l("span",{class:R.menuMark,"aria-hidden":"true"}):null]}),d=[];return i&&d.push(i),r&&d.push(r),p&&d.push(p),d.length&&O(d,()=>{i&&(K(m,"aria-label",i.value.title),o||K(m,"data-tip",i.value.title)),r&&K(m,"aria-pressed",String(r.value)),p&&K(m,"aria-expanded",String(p.value))}),m}var Ta=()=>typeof matchMedia=="function"&&matchMedia("(hover: none)").matches;function Kc(n,e){let t=n.menu??[];return!n.run||!Ta()?t:[{id:`${n.id}:self`,label:n.title,icon:n.icon,group:"",run:()=>n.run?.(e)},...t]}function $t(n){let{onSubmenu:e}=n;return l(xe,{children:n.items.map((t,s,a)=>x(xe,{children:[s>0&&t.group!==a[s-1].group?l("div",{class:R.toolMenuDivider,role:"separator"}):null,t.items&&!e?x(xe,{children:[l("div",{class:R.toolMenuHeading,role:"presentation",children:t.label}),l(L,{when:t.items,children:o=>l($t,{items:o,onRun:n.onRun})})]}):t.items&&e?x("button",{type:"button",role:"menuitem","aria-haspopup":"menu",class:R.toolMenuRow,disabled:!!t.disabled,onPointerEnter:o=>e(t,o.currentTarget),onClick:o=>e(t,o.currentTarget,!0),onKeyDown:o=>{o.key==="ArrowRight"&&(o.preventDefault(),e(t,o.currentTarget,!0))},children:[t.icon?l(H,{name:t.icon,size:16}):l("span",{}),x("span",{class:R.toolMenuLabel,children:[t.label,t.disabled||t.hint?l("span",{class:R.toolMenuHint,children:t.disabled??t.hint}):null]}),l(H,{name:"chevron-right",size:14,class:R.toolMenuChevron})]}):x("button",{type:"button",role:t.pressed?t.choice?"menuitemradio":"menuitemcheckbox":"menuitem","aria-checked":t.pressed,class:R.toolMenuRow,disabled:!!t.disabled,onPointerEnter:e?()=>e(void 0):void 0,onClick:()=>{n.onRun(),t.run()},children:[t.icon?l(H,{name:t.icon,size:16}):l("span",{}),x("span",{class:R.toolMenuLabel,children:[t.label,t.disabled||t.hint?l("span",{class:R.toolMenuHint,children:t.disabled??t.hint}):null]}),t.pressed?l(L,{when:t.pressed,children:()=>l(H,{name:"check",size:14,class:R.toolMenuCheck})}):null]})]}))})}function Wc(n,e,t){let s=e.pressed||e.overlay?zr(n,e):void 0,a=()=>{e.overlay?n.toggleOverlay(e.overlay,t()):e.run?.(t())},o={id:e.id,label:e.title,icon:e.icon,group:e.group??""},r=e.menu??[];if(!r.length)return{...o,...s?{pressed:s}:{},run:a};let i=(e.run||e.overlay)&&!r.some(c=>c.label===e.title)?[{id:`${e.id}:self`,label:e.title,icon:e.icon,group:"",...s?{pressed:s}:{},run:a}]:[];return{...o,run:()=>{},items:B([...i,...r]).asReadonly}}function Gc(n,e,t){let s=be("collapsedRows"),a=new Map,o=i=>{let c=a.get(i);if(!c){let p=s.child();a.set(i,c={row:Ae(p,()=>Wc(n,i,t)),scope:p})}return c.row},r=wa(y(n.toolbar,i=>Ss(i.filter(c=>c.place==="canvas")).flatMap(c=>c.items)));return y([Dn(e??[],[]),r],(i,c)=>{let p=[...i.map(m=>({...m,group:m.group??"lead"})),...c.map(o)];if(a.size>c.length){let m=new Set(c);for(let[d,h]of a)m.has(d)||(h.scope.dispose(),a.delete(d))}return p})}var In={id:"toolbar",place:"canvas",icon:"wrench",title:"Toolbar"};function Hr(n){let{shell:e}=n,t=new Ca,s,a,o={rows:Gc(e,n.leadMenu,()=>a??s)},r=e.toolbarCollapsed,i=ht(y(r,d=>!d),()=>x("div",{class:R.bar,children:[l("div",{class:R.frame,children:x(ke,{axis:"x",contentClass:R.stackTools,children:[n.lead,l(Nn,{shell:e,part:"canvas",menus:t})]})}),n.aside]})),c=y(o.rows,d=>d.length>0),p=n.quiet===void 0?void 0:Dn(n.quiet,!1),m=x("div",{class:R.stack,children:[i,l(L,{when:r,children:()=>l(L,{when:c,children:()=>l("div",{class:`${R.frame} ${R.folded}`,children:l(Uc,{menus:t,popup:o,ref:d=>{a=d}})})})}),l(Xc,{menus:t})]});return s=m,O(p?[r,p]:[r],()=>{K(i,"hidden",r.value),p&&K(m,"data-quiet",p.value)}),Se(r,()=>t.hide()),t.stack=m,ne(()=>t.dispose()),m}function Uc(n){let{menus:e,popup:t}=n,s=e.shown.key(In),a=x("button",{type:"button",class:R.tool,"data-stack-collapsed":"","aria-label":"Toolbar","aria-haspopup":"menu",ref:n.ref,onClick:o=>{if(Ta()&&e.open.value?.item===In)return e.hide();e.show(In,o.currentTarget,o.detail===0,t)},onKeyDown:o=>{o.key!=="ArrowDown"&&o.key!=="ArrowUp"||(o.preventDefault(),e.show(In,o.currentTarget,!0,t))},onPointerEnter:o=>o.pointerType==="mouse"&&e.show(In,o.currentTarget,!1,t),onPointerLeave:()=>e.hideSoon(),onBlur:()=>e.hideSoon(),children:[l(H,{name:"wrench",size:18}),l("span",{class:R.menuMark,"aria-hidden":"true"})]});return O([s],()=>K(a,"aria-expanded",String(s.value))),a}var Yc=8,Ca=class{constructor(){this.open=B(void 0);this.shown=Je(y(this.open.asReadonly,e=>e?.item))}#e;show(e,t,s=!1,a){this.keep();let o=this.stack?this.stack.getBoundingClientRect().right-t.getBoundingClientRect().right:0,r=this.roomAbove(this.stack),i=this.open.value;(i?.item!==e||i.right!==o||i.room!==r)&&this.open.set({item:e,right:o,room:r,button:t,...a?{popup:a}:{}}),s&&queueMicrotask(()=>this.menu&&zt(this.menu))}roomAbove(e,t){if(!e)return 0;let s=e.closest("[data-msp-viewport]"),a=(t??e.getBoundingClientRect().top)-(s?.getBoundingClientRect().top??0)-Yc;return a>0?Math.round(a):0}keep(){this.#e!==void 0&&clearTimeout(this.#e),this.#e=void 0}hideSoon(){this.keep(),this.#e=setTimeout(()=>this.hide(),160)}hide(){this.keep(),this.open.value&&this.open.set(void 0)}dispose(){this.keep()}};function Xc(n){let{menus:e}=n,t=a=>{a.key!=="Escape"||a.defaultPrevented||!e.open.value||e.stack&&!Xe(e.stack,a)||(e.hide(),a.preventDefault())},s=a=>{let o=e.open.value;if(!o)return;let r=a.composedPath();e.menu&&r.includes(e.menu)||r.includes(o.button)||e.hide()};return q(document,"keydown",t),q(document,"pointerdown",s,{capture:!0}),l(L,{when:e.open,children:a=>{let o=!1,r;ne(()=>{if(e.menu===r&&(e.menu=void 0),!o)return;let d=Ne();(!d||r?.contains(d))&&a.button.focus({preventScroll:!0})});let i=B(void 0),c,p=(d,h,u=!1)=>{if(!d||!h||!r){i.value&&i.set(void 0);return}let f=h.getBoundingClientRect().bottom,v=Math.round(r.getBoundingClientRect().bottom-f),g=e.roomAbove(e.stack,f);(i.value?.item!==d||i.value.bottom!==v||i.value.room!==g)&&i.set({item:d,row:h,bottom:v,room:g}),u&&queueMicrotask(()=>c&&zt(c))},m=d=>{if(d.key==="ArrowLeft"||d.key==="Escape"){d.preventDefault();let h=i.value?.row;i.set(void 0),h?.focus({preventScroll:!0});return}gt(d)};return x("div",{class:R.toolMenu,style:{right:`${a.right}px`,...a.room?{"--msp-menu-room":`${a.room}px`}:{}},role:"menu","aria-label":a.item.title,ref:d=>{r=d,e.menu=d},onPointerEnter:()=>e.keep(),onPointerLeave:()=>e.hideSoon(),onFocusIn:()=>{o=!0,e.keep()},onFocusOut:()=>e.hideSoon(),children:[l("div",{class:R.toolMenuCard,onKeyDown:gt,children:a.popup?l(xe,{children:l(L,{when:a.popup.rows,children:d=>l(ke,{class:R.toolMenuScroll,contentClass:R.toolMenuScrollContent,children:l($t,{items:d,onRun:()=>e.hide(),onSubmenu:p})})})}):l(ke,{class:R.toolMenuScroll,contentClass:R.toolMenuScrollContent,children:l($t,{items:Kc(a.item,a.button),onRun:()=>e.hide(),onSubmenu:p})})}),l(L,{when:i,children:d=>l("div",{class:R.toolSubmenu,style:{bottom:`${d.bottom}px`,...d.room?{"--msp-menu-room":`${d.room}px`}:{}},role:"menu","aria-label":d.item.label,ref:h=>{c=h},onKeyDown:m,children:l("div",{class:R.toolMenuCard,children:l(ke,{class:R.toolMenuScroll,contentClass:R.toolMenuScrollContent,children:l(L,{when:d.item.items,children:h=>l($t,{items:h,onRun:()=>e.hide()})})})})})})]})}})}function Fr(n){let{shell:e}=n,t=B(!1),s=e.dock("right"),a=y(e.toolbar,h=>h.filter(u=>u.place!=="canvas"&&!u.group)),o=y(e.toolbar,h=>h.filter(u=>u.place!=="canvas"&&u.group)),r=y(s.tabs,h=>h.some(u=>u.compactBar)?h.filter(u=>!u.compactBar):[]),i,c=(h,u)=>{t.set(!1),h.overlay?e.toggleOverlay(h.overlay,u):h.run?.(u)},p,m=x("div",{class:R.railMenu,children:[l(ie,{each:a,children:h=>{let u=Ot(h),f=u?void 0:dn(h),v=l("button",{type:"button",class:R.railMenuButton,"aria-label":f,"data-tip":f,onClick:g=>c(h,g.currentTarget),children:l(Fn,{item:h,size:20,class:R.face,...u?{face:u}:{}})});return u&&O([u],()=>{K(v,"aria-label",u.value.title),K(v,"data-tip",u.value.title)}),v}},h=>h.id),x("div",{class:R.railMenuAnchor,children:[l("button",{type:"button",class:R.railMenuButton,"aria-label":"More","aria-haspopup":"menu","data-tip":"More",ref:h=>p=h,onClick:h=>{t.set(!t.value),t.value&&h.detail===0&&queueMicrotask(()=>i&&zt(i))},onKeyDown:h=>{h.key!=="ArrowDown"&&h.key!=="ArrowUp"||(h.preventDefault(),t.set(!0),queueMicrotask(()=>i&&zt(i)))},children:l(H,{name:"ellipsis",size:20})}),l(L,{when:t,children:()=>{let h=ot();return ne(()=>h(i)),x("div",{class:R.railMenuList,role:"menu","aria-label":"More",ref:u=>{i=u},onKeyDown:u=>{gt(u),u.key==="Escape"&&(u.preventDefault(),u.stopPropagation(),t.set(!1))},children:[l(ie,{each:r,children:u=>x("button",{type:"button",role:"menuitem",class:R.toolMenuRow,onClick:()=>{t.set(!1),e.show(u.id)},children:[l(H,{name:u.icon,size:16}),l("span",{class:R.toolMenuLabel,children:u.title}),l("span",{})]})},u=>u.id),l(L,{when:y([r,o],(u,f)=>u.length>0&&f.length>0),children:()=>l("div",{class:R.railMenuDivider})}),l(ie,{each:o,children:u=>{let f=Ot(u),v=u.visible?Dn(u.visible,!0):void 0,g=document.createTextNode(f?f.value.title:dn(u)),w=x("button",{type:"button",role:"menuitem",class:R.toolMenuRow,onClick:k=>c(u,k.currentTarget),children:[l(Fn,{item:u,size:16,class:R.face,...f?{face:f}:{}}),l("span",{class:R.toolMenuLabel,children:g}),l("span",{})]}),b=[];return f&&b.push(f),v&&b.push(v),b.length&&O(b,()=>{f&&ve(g,f.value.title),v&&K(w,"hidden",!v.value)}),w}},u=>u.id)]})}})]})]});return O([t.asReadonly],()=>K(p,"aria-expanded",String(t.value))),q(document,"pointerdown",h=>{t.value&&!He(h,m)&&t.set(!1)}),m}function Ir(n){let e=y(n.status.tasks,t=>t.find(s=>s.overlay),(t,s)=>t?.id===s?.id);return l(L,{when:e,children:t=>{let s=y(n.status.tasks,m=>m.find(d=>d.id===t.id)??t),a=y(s,m=>m.progress===void 0?void 0:Math.round(m.progress*100)),o=document.createTextNode(""),r=document.createTextNode(""),i,c,p=l("div",{class:R.busy,role:"alertdialog","aria-modal":"true","aria-label":t.label,children:x("div",{class:R.busyCard,children:[x("div",{class:R.busyHead,children:[l(H,{name:"loader-circle",size:18,class:R.busySpin}),l("span",{class:R.busyLabel,children:o}),l("span",{class:R.busyPercent,children:r})]}),l("div",{class:R.busyTrack,role:"progressbar","aria-valuemin":0,"aria-valuemax":100,ref:m=>i=m,children:l("span",{class:R.busyBar,ref:m=>c=m})}),t.abort?l("div",{class:R.busyActions,children:l(Ce,{size:"sm",onClick:()=>t.abort?.(),children:"Cancel"})}):null]})});return O([s,a],()=>{let m=a.value;ve(o,s.value.label),ve(r,m===void 0?"":`${m}%`),K(i,"aria-valuenow",m),K(c,"data-indeterminate",m===void 0),Ee(c,"scale",`${(m??30)/100} 1`)}),p}})}var Ar=new WeakMap;function Dr(n){let e=Ar.get(n);return e||Ar.set(n,e=B(void 0,{compare:Object.is})),e}function Lr(n){let e=Dr(n.shell),t=l("div",{class:R.cardSlot});return e.set(t),ne(()=>{e.value===t&&e.set(void 0)}),t}function Nr(n){let{shell:e}=n,t=y(e.overlay,s=>!!s);return l(L,{when:t,children:()=>l(_c,{shell:e})})}function _c(n){let{shell:e}=n,s=e.overlay.value.anchor,a=ot(()=>s),o=_e("msp-card-title"),r=y(e.dock("right").state,b=>b.pinned),i=document.createTextNode(""),c,p=Dr(e),m=()=>!!p.value,d=x("section",{class:R.card,role:"dialog","aria-labelledby":o,onKeyDown:b=>{f()||ts(b,b.currentTarget)},children:[x("header",{class:R.cardHeader,children:[l("h2",{class:R.cardTitle,id:o,children:i}),l(Sa,{shell:e,dock:"right"}),l(Ce,{variant:"ghost",size:"sm",icon:l(H,{name:"x"}),title:"Close",onClick:()=>e.closeOverlay()})]}),l(L,{when:e.overlay,children:b=>{s=b.anchor,Do(b.anchor)&&(c?.(),c=es(()=>{c=void 0;let T=d.querySelector(`.${R.cardBody}, .${R.cardBodyFill}`),F=Cn(d);(F.find(I=>T?.contains(I))??F[F.length-1])?.focus()}));let k={shell:e,...b.focus?{focus:b.focus}:{}};return b.overlay.fill?l("div",{class:R.cardBodyFill,children:l(Ze,{renderer:b.overlay.render,ctx:k})}):l(ke,{class:R.cardBody,contentClass:R.cardBodyContent,children:l(Ze,{renderer:b.overlay.render,ctx:k})})}})]}),h=l("div",{style:"display: contents",children:d});O([p.asReadonly],()=>{let b=p.value??h;if(d.parentElement===b)return;let k=Ne(),T=k&&d.contains(k)?k:void 0;b.append(d),Zt(d,R.card,!p.value),Zt(d,R.cardDocked,!!p.value),T?.focus({preventScroll:!0})}),ne(()=>d.remove()),O([r,p.asReadonly,e.overlay],()=>{K(d,"aria-modal",String(!p.value&&!r.value)),ve(i,e.overlay.value?.overlay.title??"")});let u=()=>e.dock("right").state.value.pinned,f=()=>m()||u(),v=document,g=b=>{b.key!=="Escape"||b.defaultPrevented||u()||!Xe(d,b)||(e.closeOverlay(),b.preventDefault())},w=b=>{let k=e.overlay.value;if(!k)return;let T=at(b);u()||k.overlay.persistent||He(b,d)||He(b,k.anchor)||T.closest?.("[data-overlay-trigger], [role=tab]")||T.closest?.("[data-keeps-card], [data-msp-canvas]")||e.closeOverlay()};return q(v,"keydown",g),q(v,"pointerdown",w,{capture:!0}),ne(()=>a(d)),h}var Ts={info:"info",success:"circle-check",warning:"triangle-alert",error:"circle-alert"};function Ea(n){let{status:e}=n,t=a=>{e.setLogFilter(a==="error"?"problems":"all"),n.onOpenLog?.()},s=document.createTextNode("");return O([e.spoken],()=>ve(s,e.spoken.value)),x("div",{class:R.status,children:[l("div",{class:R.announce,role:"status","aria-live":"polite",children:s}),l(L,{when:e.current,children:a=>a.kind==="error"?x("span",{class:`${R.pill} ${R.message}`,"data-kind":a.kind,children:[x("button",{type:"button",class:R.pillMain,title:"Show the problems in the log",onClick:()=>t(a.kind),children:[l(H,{name:Ts[a.kind],size:14}),l("span",{class:R.text,children:a.text})]}),l("button",{type:"button",class:R.pillButton,"aria-label":"Dismiss","data-tip":"Dismiss",onClick:()=>e.dismiss(a.id),children:l(H,{name:"x",size:14})})]}):x("button",{type:"button",class:`${R.pill} ${R.message}`,"data-kind":a.kind,title:"Show the log",onClick:()=>t(a.kind),children:[l(H,{name:Ts[a.kind],size:14}),l("span",{class:R.text,children:a.text})]})}),l(ie,{each:y(e.tasks,a=>a.filter(o=>!o.overlay)),children:a=>l(Zc,{task:a})}),n.after]})}function Qc(n){let e,t=0,s=0,a=!1,o=B(void 0),r=()=>{e&&clearTimeout(e),e=void 0},i=()=>{r(),!(a||t<=0)&&(s=performance.now(),e=setTimeout(()=>n.onDismiss?.(),t))},c=m=>{m!==a&&(a=m,m&&e&&(t-=performance.now()-s),m?r():i())};n.autoDismiss&&n.onDismiss&&(Se(n.autoDismiss,m=>{r(),t=m??0,o.set(m),i()}),ne(r));let p=x(xe,{children:[n.icon,l("span",{class:R.text,children:n.text}),n.after]});return x("span",{class:R.pill,onPointerEnter:()=>c(!0),onPointerLeave:()=>c(!1),onFocusIn:()=>c(!0),onFocusOut:m=>{m.currentTarget.contains(m.relatedTarget)||c(!1)},children:[n.onClick?l("button",{type:"button",class:R.pillMain,"aria-label":n.label,onClick:()=>n.onClick?.(),children:p}):p,n.onDismiss?x("button",{type:"button",class:R.pillButton,"aria-label":n.dismissLabel??"Dismiss","data-tip":n.dismissLabel??"Dismiss",onClick:()=>n.onDismiss?.(),children:[l(H,{name:"x",size:14}),l(L,{when:o.asReadonly,children:m=>l("svg",{class:R.countdown,viewBox:"0 0 20 20","aria-hidden":"true",style:{"--msp-countdown":`${m}ms`},children:l("circle",{cx:"10",cy:"10",r:"9",pathLength:"100"})})})]}):null]})}function Or(n){return x("div",{class:R.context,children:[n.lead,l(ie,{each:n.status.chips,children:e=>x("span",{class:`${R.pill} ${R.chip}`,children:[l("button",{type:"button",class:R.text,onClick:()=>e.activate?.(),children:e.label}),e.dismiss?l("button",{type:"button",class:R.pillButton,title:"Clear",onClick:()=>e.dismiss?.(),children:l(H,{name:"x",size:14})}):null]})})]})}function Zc(n){let{task:e}=n;return x("span",{class:R.pill,children:[l(H,{name:"loader-circle",size:14,class:R.spin}),l("span",{class:R.text,children:e.label}),e.progress!==void 0?l("span",{class:R.progress,children:l("div",{style:{width:`${Math.round(e.progress*100)}%`}})}):null,e.abort?l("button",{type:"button",class:R.pillButton,title:"Cancel",onClick:()=>e.abort?.(),children:l(H,{name:"x",size:14})}):null]})}function $r(n){let{shell:e}=n,t=y(e.dock("right").tabs,i=>i.find(c=>c.place==="head")?.icon??"prism"),s,a,o=l("div",{class:`${R.stack} ${R.railToggle}`,children:l("div",{class:R.frame,children:l("button",{type:"button",class:R.tool,"data-tip-side":"top",ref:i=>s=i,onClick:()=>e.toggleRail(),children:l("span",{class:R.face,ref:i=>a=i})})})}),r;return O([t,e.railOpen],()=>{let i=e.railOpen.value,c=i?"Hide the panel rail":"Show the panel rail";K(s,"data-tip",c),K(s,"aria-label",c),K(s,"aria-pressed",String(i)),t.value!==r&&(r=t.value,a.replaceChildren(H({name:r,size:18})))}),o}var Le={action:"msp-shell-help-panel-action",conflict:"msp-shell-help-panel-conflict",conflicts:"msp-shell-help-panel-conflicts",content:"msp-shell-help-panel-content",edit:"msp-shell-help-panel-edit",editBar:"msp-shell-help-panel-editBar",group:"msp-shell-help-panel-group",heading:"msp-shell-help-panel-heading",headingRow:"msp-shell-help-panel-headingRow",help:"msp-shell-help-panel-help",input:"msp-shell-help-panel-input",key:"msp-shell-help-panel-key",keys:"msp-shell-help-panel-keys",list:"msp-shell-help-panel-list",or:"msp-shell-help-panel-or",recorder:"msp-shell-help-panel-recorder",row:"msp-shell-help-panel-row",srOnly:"msp-shell-help-panel-srOnly"};_("views/shell/help-panel.module.css",`@layer msp.components {
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

.msp-shell-help-panel-headingRow {
  padding-right: var(--msp-space-1);
  justify-content: space-between;
  align-items: center;
  display: flex;

  & .msp-shell-help-panel-heading {
    padding-bottom: 0;
  }
}

.msp-shell-help-panel-edit {
  gap: var(--msp-space-1);
  display: flex;
}

.msp-shell-help-panel-recorder {
  padding: 1px var(--msp-space-2);
  border-radius: var(--msp-radius-sm);
  outline: 1px solid var(--msp-color-accent);
  color: var(--msp-color-accent);
  font-size: var(--msp-font-size-xs);
  white-space: nowrap;
}

.msp-shell-help-panel-editBar {
  justify-content: space-between;
  align-items: center;
  gap: var(--msp-space-2);
  padding: var(--msp-space-1) var(--msp-inset) 0;
  display: flex;
}

.msp-shell-help-panel-srOnly {
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
}
}
`);var Jc=()=>[{action:"Command menu",input:bn({key:"k",mod:!0}),or:bn({key:"p",mod:!0,shift:!0})},{action:"Help (this card)",input:["?"]},{action:"Close a menu, a card or the command menu",input:["Esc"]}];function ed(n){let e=n.commands,t=e.keymap,s=B(!1),a=B(void 0),o=Je(a.asReadonly),r=B(""),i=y([e.commands,t.layers,a.asReadonly],(d,h,u)=>d.filter(f=>e.shortcut(f)||t.isRemapped(f.id)||f.id===u)),c=y([e.commands,t.layers],d=>{let h=t.conflicts(d);return h.length?h:void 0}),p=(d,h)=>{t.remap(d.id,h),a.set(void 0);let u=t.sharing(d.id,h,e.commands.value);r.set(`${d.title}: ${Lt(h)}${u.length?`, also used by ${u.map(f=>f.title).join(" and ")}`:""}.`)},m=document.createTextNode("");return O([r.asReadonly],()=>ve(m,r.value)),x(ke,{edge:!0,class:Le.help,contentClass:Le.content,"aria-label":"Help",children:[n.intro?.(),l(L,{when:c,children:d=>x("section",{class:Le.conflicts,"aria-label":"Shortcut conflicts",children:[l(H,{name:"triangle-alert",size:14}),l("div",{children:d.map(h=>x("p",{class:Le.conflict,children:[l(Es,{input:bn(h.chord)})," is used by ",h.commands.map(u=>u.title).join(" and "),h.scope==="global"?"":` (in ${h.scope})`,": only the first that can run takes it."]}))})]})}),l(ie,{each:n.bindings,children:d=>l(Br,{title:d.title,bindings:d.bindings})}),l(Br,{title:"Everywhere",bindings:Jc()}),x("section",{class:Le.group,"aria-label":"Commands",children:[x("div",{class:Le.headingRow,children:[l("h3",{class:Le.heading,children:"Commands"}),l(Ce,{size:"xs",variant:"ghost",pressed:s.asReadonly,onClick:()=>{s.set(!s.value),a.set(void 0)},children:"Change keys"})]}),l("dl",{class:Le.list,children:l(ie,{each:i,children:d=>l(td,{manager:e,command:d,editing:s.asReadonly,recording:o.key(d.id),onRecord:()=>a.set(d.id),onRecorded:h=>h?p(d,h):a.set(void 0),onChanged:h=>r.set(h)})},d=>d.id)}),l(L,{when:y(s.asReadonly,d=>d?!0:void 0),children:()=>x("div",{class:Le.editBar,children:[l(ca,{size:"sm","aria-label":"Give a key to a command",options:[["","Give a key to\u2026"],...e.commands.value.filter(d=>!e.shortcut(d)).map(d=>[d.id,d.title]).sort((d,h)=>d[1].localeCompare(h[1]))],value:"",onChange:d=>d&&a.set(d)}),l(Ce,{size:"xs",variant:"ghost",onClick:()=>(t.resetAll(),r.set("Every key is back to its default.")),children:"Reset all"})]})}),l("span",{class:Le.srOnly,role:"status","aria-live":"polite",children:m})]})]})}function td(n){let{manager:e,command:t}=n,s=e.keymap,a=y(s.layers,()=>({chord:e.shortcut(t),remapped:s.isRemapped(t.id)})),o=Wt();return x("div",{class:Le.row,children:[l("dt",{class:Le.action,children:t.title}),x("dd",{class:Le.input,children:[l(L,{when:y(n.recording,r=>r?!0:void 0),fallback:()=>l(L,{when:y(a,r=>r.chord),fallback:()=>l("span",{class:Le.or,children:"no key"}),children:r=>l(Es,{input:bn(r,o)})}),children:()=>l("span",{class:Le.recorder,tabIndex:0,role:"button","aria-label":`Press the new keys for ${t.title}; Escape cancels`,ref:r=>setTimeout(()=>r.isConnected&&r.focus()),onBlur:()=>n.onRecorded(void 0),onKeyDown:r=>{if(r.preventDefault(),r.stopPropagation(),r.key==="Escape")return n.onRecorded(void 0);let i=oo(r,o);i&&n.onRecorded(i)},children:"Press keys\u2026"})}),l(L,{when:y(n.editing,r=>r?!0:void 0),children:()=>x("span",{class:Le.edit,children:[l(Ce,{size:"xs",variant:"ghost",title:`Change the key of ${t.title}`,onClick:()=>n.onRecord(),children:"Change"}),l(L,{when:y(a,r=>r.chord?!0:void 0),children:()=>l(Ce,{size:"xs",variant:"ghost",title:`Remove the key of ${t.title}`,onClick:()=>{s.remap(t.id,null),n.onChanged(`${t.title}: no key.`)},children:"Clear"})}),l(L,{when:y(a,r=>r.remapped?!0:void 0),children:()=>l(Ce,{size:"xs",variant:"ghost",title:`Back to the default key of ${t.title}`,onClick:()=>{s.reset(t.id);let r=s.defaultShortcut(t);n.onChanged(`${t.title}: ${r?Lt(r,o):"no key"} again.`)},children:"Reset"})})]})})]})]})}function Br(n){return x("section",{class:Le.group,"aria-label":n.title,children:[l("h3",{class:Le.heading,children:n.title}),l("dl",{class:Le.list,children:n.bindings.map(e=>x("div",{class:Le.row,children:[l("dt",{class:Le.action,children:e.action}),x("dd",{class:Le.input,children:[l(Es,{input:e.input}),e.or?x(xe,{children:[l("span",{class:Le.or,children:"or"}),l(Es,{input:e.or})]}):null]})]}))})]})}function Es(n){return l("span",{class:Le.keys,children:n.input.map(e=>l("kbd",{class:Le.key,children:e}))})}var Ge={detail:"msp-shell-log-view-detail",empty:"msp-shell-log-view-empty",entries:"msp-shell-log-view-entries",entry:"msp-shell-log-view-entry",filters:"msp-shell-log-view-filters",kind:"msp-shell-log-view-kind",kinds:"msp-shell-log-view-kinds",log:"msp-shell-log-view-log",search:"msp-shell-log-view-search",text:"msp-shell-log-view-text",time:"msp-shell-log-view-time"};_("views/shell/log-view.module.css",`@layer msp.components {
.msp-shell-log-view-log {
  gap: var(--msp-space-2);
  padding: 0 var(--msp-panel-inset) var(--msp-panel-inset);
  font-size: var(--msp-font-size-sm);
  display: grid;
}

.msp-shell-log-view-filters {
  z-index: 1;
  align-items: center;
  gap: var(--msp-space-2);
  padding: var(--msp-space-2) var(--msp-space-3);
  background: var(--msp-color-panel);
  display: flex;
  position: sticky;
  top: 0;
}

.msp-shell-log-view-kinds {
  gap: var(--msp-space-1);
  flex: none;
  display: flex;
}

.msp-shell-log-view-search {
  flex: auto;
  min-width: 0;
}

.msp-shell-log-view-entries {
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
  grid-template-columns: auto minmax(0, 1fr) auto auto;
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

.msp-shell-log-view-detail {
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.msp-shell-log-view-time {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
}
}
`);var nd=new Intl.DateTimeFormat(void 0,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),sd={Transforms:"layers",Plugin:"wrench"},ad=(n,e,t)=>e==="messages"&&n.source!==void 0||e==="problems"&&n.kind!=="warning"&&n.kind!=="error"||e.startsWith("source:")&&n.source!==e.slice(7)?!1:!t||n.text.toLowerCase().includes(t)||!!n.detail?.toLowerCase().includes(t);function od(n){let e=n.status.logFilter,t=B(""),s=y(n.status.logged,r=>{let i=new Set;for(let c of r)c.source!==void 0&&i.add(c.source);return[...i].sort()},(r,i)=>r.length===i.length&&r.every((c,p)=>c===i[p])),a=y(s,r=>[{id:"all",label:"All",icon:"list"},{id:"messages",label:"Messages",icon:"info"},...r.map(i=>({id:`source:${i}`,label:i,icon:sd[i]??"tag"})),{id:"problems",label:"Problems",icon:"triangle-alert"}]),o=y([n.status.logged,e,t.asReadonly],(r,i,c)=>{let p=c.trim().toLowerCase();return i==="all"&&!p?r:r.filter(m=>ad(m,i,p))});return x("div",{class:Ge.log,children:[x("div",{class:Ge.filters,children:[l("div",{class:Ge.kinds,role:"group","aria-label":"Show",children:l(ie,{each:a,children:r=>l(Ce,{variant:"ghost",size:"sm",icon:l(H,{name:r.icon,size:15}),title:r.label,pressed:y(e,i=>i===r.id),onClick:()=>n.status.setLogFilter(r.id)})},r=>r.id)}),l(It,{search:!0,size:"sm",class:Ge.search,placeholder:"Filter","aria-label":"Filter the log",value:t.asReadonly,onInput:r=>t.set(r)})]}),l("div",{class:Ge.entries,role:"log","aria-live":"off","aria-label":"Log",children:l(ie,{each:o,fallback:()=>l("p",{class:Ge.empty,children:y(n.status.logged,r=>r.length?"Nothing matches.":"No messages yet.")}),children:r=>x("div",{class:Ge.entry,"data-kind":r.kind,"data-source":r.source,children:[l(H,{name:Ts[r.kind],size:14,class:Ge.kind}),l("span",{class:Ge.text,children:r.text}),r.detail?l("span",{class:Ge.detail,children:r.detail}):l("span",{}),l("time",{class:Ge.time,dateTime:r.time.toISOString(),children:nd.format(r.time)})]})},r=>r.id)})]})}var $e={body:"msp-settings-settings-tab-body",chevron:"msp-settings-settings-tab-chevron",group:"msp-settings-settings-tab-group",groups:"msp-settings-settings-tab-groups",groupsContent:"msp-settings-settings-tab-groupsContent",header:"msp-settings-settings-tab-header",none:"msp-settings-settings-tab-none",search:"msp-settings-settings-tab-search",searchIcon:"msp-settings-settings-tab-searchIcon",searchInput:"msp-settings-settings-tab-searchInput",tab:"msp-settings-settings-tab-tab",title:"msp-settings-settings-tab-title",toggle:"msp-settings-settings-tab-toggle"};_("views/settings/settings-tab.module.css",`@layer msp.components {
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
`);function rd(n){let{model:e}=n,t=B(""),s=t.asReadonly,a=y(s,o=>o.trim().length>0&&!e.groups.some(r=>pa(r.form.params,o)));return x("div",{class:$e.tab,children:[x("div",{class:$e.search,children:[l(H,{name:"search",size:14,class:$e.searchIcon}),l(It,{search:!0,size:"sm",class:$e.searchInput,"aria-label":"Search settings",placeholder:"Search settings",value:s,onInput:o=>t.set(o)})]}),x(ke,{class:$e.groups,contentClass:$e.groupsContent,children:[e.groups.map((o,r)=>l(id,{group:o,query:s,open:r===0})),l(L,{when:a,children:()=>x("p",{class:$e.none,children:["No setting matches \u201C",s,"\u201D."]})}),n.more?.()]})]})}function id(n){let{group:e,query:t}=n,s=B(n.open),a=y(t,i=>i.trim().length>0),o=y([s.asReadonly,a],(i,c)=>i||c),r=y(t,i=>!pa(e.form.params,i));return x("section",{class:$e.group,hidden:r,"aria-label":e.title,children:[l("div",{class:$e.header,children:x("button",{type:"button",class:$e.toggle,"aria-expanded":o,onClick:()=>s.set(!s.value),children:[l("span",{class:$e.title,children:e.title}),l(H,{name:"chevron-down",size:14,class:$e.chevron})]})}),l(L,{when:o,reveal:!0,children:()=>l("div",{class:$e.body,"data-wide-labels":e.wideLabels?"":void 0,children:l(hs,{form:e.form,filter:t})})})]})}var Bt={canvas:"msp-shell-canvas",canvasLayer:"msp-shell-canvasLayer",layer:"msp-shell-layer",shell:"msp-shell-shell",viewport:"msp-shell-viewport"};_("views/shell/shell.module.css",`@layer msp.components {
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
}

:where(.msp-shell-layer) > * {
  pointer-events: auto;
}

.msp-shell-canvasLayer {
  right: var(--msp-canvas-pinned, 0px);
}
}
`);var Ra={muted:"msp-tooltip-muted",tooltip:"msp-tooltip-tooltip","tooltip-in":"msp-tooltip-tooltip-in"};_("components/tooltip/tooltip.module.css",`@layer msp.components {
.msp-tooltip-tooltip {
  z-index: var(--msp-z-tooltip);
  max-width: 240px;
  padding: var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-text);
  color: var(--msp-color-bg);
  font-size: var(--msp-font-size-xs);
  white-space: nowrap;
  text-overflow: ellipsis;
  pointer-events: none;
  animation: msp-tooltip-tooltip-in var(--msp-motion-fast) var(--msp-ease);
  line-height: 1.3;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;

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
  overflow-wrap: anywhere;
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
`);var ld=350;function jr(n){let e=document.createElement("div");e.className=Ra.tooltip,e.setAttribute("role","tooltip"),e.hidden=!0,n.append(e);let t,s=!1,a,o=ze(void 0,()=>!Vr(t)&&i()),r=v=>{let g=v.dataset.tipRow!==void 0;g?dd(e,v):e.textContent=v.dataset.tip??v.textContent??"",e.dataset.kind=g?"row":"",e.hidden=!1;let w=g?"beside":v.dataset.tipSide??"bottom",b=v.getBoundingClientRect(),k=e.getBoundingClientRect(),T=8,F,I,A;if(w==="beside"){let C=v.closest('[data-tip-edge], [role="tabpanel"]')?.getBoundingClientRect()??b;A=C;let $=8;F=C.left-$-k.width,F<4&&(F=C.right+$),I=b.top+(b.height-k.height)/2}else w==="left"?(F=b.left-T-k.width,I=b.top+(b.height-k.height)/2):w==="top"?(F=b.left+(b.width-k.width)/2,I=b.top-T-k.height):(F=b.left+(b.width-k.width)/2,I=b.bottom+T);if(F=Math.max(4,Math.min(F,window.innerWidth-k.width-4)),I=Math.max(4,Math.min(I,window.innerHeight-k.height-4)),A&&F<A.right&&F+k.width>A.left&&A!==b)return i();e.style.transform=`translate(${Math.round(F)}px, ${Math.round(I)}px)`,e.dataset.side=w},i=()=>{a!==void 0&&clearTimeout(a),a=void 0,o?.disconnect(),t=void 0,e.hidden=!0},c=(v,g,w)=>{if(a!==void 0&&clearTimeout(a),s=w,v.dataset.tip===void 0&&!cd(v)){t=void 0,e.hidden=!0;return}t=v;let b=()=>{if(t!==v||!Vr(v))return i();r(v),!e.hidden&&(o?.disconnect(),o?.observe(v))};g?b():a=setTimeout(b,ld)},p=v=>{let g=v.target,w=g?.closest?.("[data-tip], [data-tip-overflow], [data-tip-row]")??void 0;if(!w?.closest("[inert]")&&!(w?.dataset.tipRow!==void 0&&!g?.closest("[data-tip-part]")))return w},m=v=>{t&&!t.isConnected&&i();let g=p(v);!g||g===t||c(g,!e.hidden,!0)},d=v=>{let g=p(v);g&&!g.contains(v.relatedTarget)&&i()},h=v=>{let g=p(v);g?.matches(":focus-visible")&&c(g,!0,!1)},u=v=>{t&&(!t.isConnected||s&&!t.contains(v.target))&&i()},f=[q(n,"pointerover",m),q(n,"pointermove",u,{passive:!0}),q(n,"pointerout",d),q(n,"focusin",h),q(n,"focusout",i),q(n,"pointerdown",i),q(window,"keydown",i),q(window,"scroll",i,{capture:!0})];return()=>{i(),e.remove(),o?.disconnect();for(let v of f)v()}}function Vr(n){return!!n&&n.isConnected&&(n.checkVisibility?.()??!0)&&!n.closest("[inert]")}function cd(n){if(n.dataset.tipRow===void 0)return n.scrollWidth-n.clientWidth>1;for(let e of n.querySelectorAll("[data-tip-part]"))if(e.scrollWidth-e.clientWidth>1)return!0;return!1}function dd(n,e){n.textContent="";let t=!0;for(let s of e.querySelectorAll("[data-tip-part]")){let a=s.textContent?.trim();if(!a)continue;let o=document.createElement("span");o.textContent=a,t||(o.className=Ra.muted),t||n.append(" "),n.append(o),t=!1}}var Rs={empty:"msp-shell-empty-canvas-empty","fade-in":"msp-shell-empty-canvas-fade-in","fade-out":"msp-shell-empty-canvas-fade-out",mark:"msp-shell-empty-canvas-mark",splash:"msp-shell-empty-canvas-splash"};_("views/shell/empty-canvas.module.css",`@layer msp.components {
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
`);var La={splash:"msp-shell-prism-splash-splash"};_("views/shell/prism-splash.module.css",`@layer msp.components {
.msp-shell-prism-splash-splash {
  pointer-events: none;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
}
}
`);var Ls=class{constructor(){this.su=0;this.sv=0;this.drag=.6;this.confinement=0;this.#e=0;this.#n=0;this.#a=0;this.#r=0;this.#t=12;this.#o=new Float32Array(0);this.#s=new Float32Array(0);this.#i=new Float32Array(0);this.#h=new Float32Array(0);this.#u=new Float32Array(0);this.#f=new Float32Array(0);this.#T=0;this.#E=0;this.#P=0}#e;#n;#a;#r;#t;#o;#s;#i;#h;#u;#f;#T;#E;#P;get on(){return this.#a>=2&&this.#r>=2}layout(e,t,s,a){this.#e=e,this.#n=t;let o=12;s/o*(a/o)>4800&&(o=Math.sqrt(s*a/4800));let r=Math.max(0,Math.ceil(s/o)),i=Math.max(0,Math.ceil(a/o));if(r===this.#a&&i===this.#r&&o===this.#t)return;this.#a=r,this.#r=i,this.#t=o;let c=r*i;this.#o.length<c&&(this.#o=new Float32Array(c),this.#s=new Float32Array(c),this.#i=new Float32Array(c),this.#h=new Float32Array(c),this.#u=new Float32Array(c),this.#f=new Float32Array(c)),this.clear()}clear(){this.#o.fill(0),this.#s.fill(0),this.#u.fill(0)}sample(e,t){if(!this.on){this.su=0,this.sv=0;return}this.#g((e-this.#e)/this.#t-.5,(t-this.#n)/this.#t-.5),this.su=this.#v(this.#o),this.sv=this.#v(this.#s)}drive(e,t,s,a,o,r){if(!this.on)return;let i=this.#a,c=this.#t,p=o*o,m=Math.max(0,Math.floor((e-o-this.#e)/c)),d=Math.min(i-1,Math.ceil((e+o-this.#e)/c)),h=Math.max(0,Math.floor((t-o-this.#n)/c)),u=Math.min(this.#r-1,Math.ceil((t+o-this.#n)/c));for(let f=h;f<=u;f++){let v=this.#n+(f+.5)*c-t;for(let g=m;g<=d;g++){let w=this.#e+(g+.5)*c-e,b=w*w+v*v;if(b>=p)continue;let k=1-Math.sqrt(b)/o,T=r*k*k,F=f*i+g;this.#o[F]+=(s-this.#o[F])*T,this.#s[F]+=(a-this.#s[F])*T}}}swirl(e,t,s,a){if(!this.on)return;let o=this.#a,r=this.#t,i=a*a,c=Math.max(0,Math.floor((e-a-this.#e)/r)),p=Math.min(o-1,Math.ceil((e+a-this.#e)/r)),m=Math.max(0,Math.floor((t-a-this.#n)/r)),d=Math.min(this.#r-1,Math.ceil((t+a-this.#n)/r));for(let h=m;h<=d;h++){let u=this.#n+(h+.5)*r-t;for(let f=c;f<=p;f++){let v=this.#e+(f+.5)*r-e,g=v*v+u*u;if(g>=i||g<1e-6)continue;let w=Math.sqrt(g),b=w/a,k=s*6.75*b*(1-b)*(1-b)/w,T=h*o+f;this.#o[T]-=u*k,this.#s[T]+=v*k}}}step(e){this.on&&(this.#A(e),this.confinement>0&&this.#p(e),this.#d())}#A(e){let t=this.#a,s=this.#r,a=t*s,o=this.#o,r=this.#s,i=this.#i,c=this.#h;i.set(o.subarray(0,a)),c.set(r.subarray(0,a));let p=e/this.#t,m=Math.exp(-this.drag*e);for(let d=0,h=0;d<s;d++)for(let u=0;u<t;u++,h++){this.#g(u-.5*p*i[h],d-.5*p*c[h]);let f=this.#v(i),v=this.#v(c);this.#g(u-p*f,d-p*v),o[h]=this.#v(i)*m,r[h]=this.#v(c)*m}}#p(e){let t=this.#a,s=this.#r,a=this.#o,o=this.#s,r=this.#f,i=this.#i,c=2*this.#t;for(let m=0,d=0;m<s;m++)for(let h=0;h<t;h++,d++){let u=h<t-1?d+1:d,f=h>0?d-1:d,v=m<s-1?d+t:d,g=m>0?d-t:d;r[d]=(o[u]-o[f]-(a[v]-a[g]))/c,i[d]=Math.abs(r[d])}let p=this.confinement*this.#t*e;for(let m=1;m<s-1;m++)for(let d=1,h=m*t+1;d<t-1;d++,h++){let u=i[h+1]-i[h-1],f=i[h+t]-i[h-t],v=Math.sqrt(u*u+f*f)+1e-5;a[h]+=p*(f/v)*r[h],o[h]-=p*(u/v)*r[h]}}#d(){let e=this.#a,t=this.#r,s=this.#o,a=this.#s,o=this.#u,r=this.#f,i=this.#t,c=2*i;for(let p=0,m=0;p<t;p++)for(let d=0;d<e;d++,m++){let h=d<e-1?s[m+1]:s[m],u=d>0?s[m-1]:s[m],f=p<t-1?a[m+e]:a[m],v=p>0?a[m-e]:a[m];r[m]=(h-u+f-v)/c*i*i}for(let p=0;p<10;p++)for(let m=0,d=0;m<t;m++)for(let h=0;h<e;h++,d++){let u=h<e-1?o[d+1]:0,f=h>0?o[d-1]:0,v=m<t-1?o[d+e]:0,g=m>0?o[d-e]:0;o[d]=(u+f+v+g-r[d])*.25}for(let p=0,m=0;p<t;p++)for(let d=0;d<e;d++,m++){let h=d<e-1?o[m+1]:0,u=d>0?o[m-1]:0,f=p<t-1?o[m+e]:0,v=p>0?o[m-e]:0;s[m]-=(h-u)/c,a[m]-=(f-v)/c}}#g(e,t){let s=this.#a,a=this.#r;e<0?e=0:e>s-1&&(e=s-1),t<0?t=0:t>a-1&&(t=a-1);let o=e|0,r=t|0;o>s-2&&(o=s-2),r>a-2&&(r=a-2),this.#E=e-o,this.#P=t-r,this.#T=r*s+o}#v(e){let t=this.#T,s=this.#a,a=this.#E,o=this.#P;return(e[t]*(1-a)+e[t+1]*a)*(1-o)+(e[t+s]*(1-a)+e[t+s+1]*a)*o}};var lt=4,md=.8,mn=class{#e;#n=0;#a=0;#r=new Float32Array(5);constructor(){if(typeof document>"u"||typeof Path2D!="function")return;let e=(ge.width+2)*lt,t=(ge.height+2)*lt,s=document.createElement("canvas");s.width=e,s.height=t;let a=s.getContext("2d",{willReadFrequently:!0});if(!a)return;a.filter=`blur(${md*lt}px)`,a.setTransform(lt,0,0,lt,lt,lt),a.fillStyle="#000",a.strokeStyle="#000",a.lineWidth=ge.stroke(3),a.lineJoin="miter";for(let i of ge.paths){let c=new Path2D(i);a.fill(c),a.stroke(c)}let o=a.getImageData(0,0,e,t).data,r=new Float32Array(e*t);for(let i=0;i<r.length;i++)r[i]=o[i*4+3]/255;this.#e=r,this.#n=e,this.#a=t}get ready(){return!!this.#e}rasterize(e,t,s,a,o,r,i,c,p,m){m.fill(0,0,c*p);let d=this.#e;if(!d)return;let h=this.#r,u=e.corners,f=this.#n,v=this.#a;for(let g=0;g<e.count;g++){e.place(g,h);let w=h[0],b=h[1],k=Math.cos(h[2]),T=Math.sin(h[2]),F=h[3],I=h[4],A=u[g*6],C=u[g*6+1],$=u[g*6+2],M=u[g*6+3],E=u[g*6+4],D=u[g*6+5],N=Number.POSITIVE_INFINITY,Y=Number.NEGATIVE_INFINITY,W=Number.POSITIVE_INFINITY,ee=Number.NEGATIVE_INFINITY;for(let S=0;S<3;S++){let j=u[g*6+2*S],Q=u[g*6+2*S+1],ce=(t+(w+j*k-Q*T)*a-o)/i,fe=(s+(b+j*T+Q*k)*a-r)/i;ce<N&&(N=ce),ce>Y&&(Y=ce),fe<W&&(W=fe),fe>ee&&(ee=fe)}let P=Math.max(0,Math.floor(N)),U=Math.min(c-1,Math.ceil(Y)),te=Math.max(0,Math.floor(W)),ue=Math.min(p-1,Math.ceil(ee));for(let S=te;S<=ue;S++)for(let j=P;j<=U;j++){let Q=0;for(let fe=0;fe<2;fe++)for(let V=0;V<2;V++){let X=(o+(j+.25+.5*V)*i-t)/a-w,ae=(r+(S+.25+.5*fe)*i-s)/a-b,oe=X*k+ae*T,J=-X*T+ae*k,Te=($-A)*(J-C)-(M-C)*(oe-A),pe=(E-$)*(J-M)-(D-M)*(oe-$),Pe=(A-E)*(J-D)-(C-D)*(oe-E);if(!(Te>=0&&pe>=0&&Pe>=0||Te<=0&&pe<=0&&Pe<=0))continue;let re=Math.round((F+oe+1)*lt),se=Math.round((I+J+1)*lt);re>=0&&se>=0&&re<f&&se<v&&(Q+=d[se*f+re])}let ce=S*c+j;Q/4>m[ce]&&(m[ce]=Q/4)}}}};var Pa=()=>performance.now(),pn=class{constructor(e={}){this.#r=Number.NEGATIVE_INFINITY;this.#t=Number.NaN;this.#o=0;this.#s=1;this.#i=!1;this.steps=0;this.#e=e.activeMs??1500,this.#n=e.restAfterMs??12e3,this.#a=e.fadeMs??400}#e;#n;#a;#r;#t;#o;#s;#i;get level(){return this.#s}get asleep(){return this.#i}input(){this.#r=Pa(),this.#i=!1}advance(e){let t=Pa(),s=Number.isNaN(this.#t)?0:Math.min(100,Math.max(0,t-this.#t));return this.#t=t,this.#o+=s,!e&&t-this.#r>=this.#e&&this.#o>=this.#n?(this.#s=Math.max(0,this.#s-s/this.#a),this.#s===0&&(this.#i=!0)):this.#s=Math.min(1,this.#s+s/this.#a),this.#s}stepped(){this.steps++}reset(){this.#t=Number.NaN,this.#i||(this.#r=Pa())}};var Xr={rate:24,speed:26,beam:260,width:10,spread:7,reach:320,alpha:.55,size:1.4,variety:.7,bob:.35,twinkle:.45,colors:!0,pulse:.55,intro:2.4,curl:.6,breathe:.3,interactive:!0,radius:90,push:520,wake:.5,swirl:.5,follow:.5,burst:36,seed:3},Ie=1536,kt=12,Ps=5,pd=30,hd=22,qr=140,ud=1.6,fd=260,Vt=[0,1,2,3,5,6,7].map(n=>n*Math.PI/4),Aa=new Float32Array(Vt.length),za=220,Kr=260,Ha=360,vd=900,As=60,gd=.5,bd=5,yd=700,Wr=3,xd=150,wd=30,Gr=36,Ur=110,Yr=160,On=4,zs=200,kd=1.6,Md=8,Sd=.8,Cd=["--msp-color-text-subtle","--msp-color-brand-1","--msp-color-brand-2","--msp-color-brand-3","--msp-color-brand-4"],Td=Cd.map(n=>`var(${n})`);function Fa(n){let e=n>>>0||1;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Hs=class{#e;#n;#a;#r;#t;#o=new Float32Array(Ie);#s=new Float32Array(Ie);#i=new Float32Array(Ie);#h=new Float32Array(Ie);#u=new Float32Array(Ie);#f=new Float32Array(Ie);#T=new Float32Array(Ie);#E=new Float32Array(Ie);#P=new Float32Array(Ie);#A=new Float32Array(Ie);#p=new Uint8Array(Ie);#d=0;#g=new Uint16Array(Ie);#v=new Uint16Array(Ie);#_=new Uint16Array(Ps*kt);#K=new Uint16Array(Ps*kt);#m=["#888","#7a4f2f","#e0ae2c","#6f9a80","#3f86ad"];#l=0;#O=0;#b=1;#c=0;#y=0;#W=0;#$=0;#I=0;#z=0;#x;#D=!1;#G=!0;#U=Number.NEGATIVE_INFINITY;#w;#R=0;#k=0;#M=0;#S=0;#B=!1;#V=0;#Q=0;#ee=0;#j=0;#L;#Z=0;#te=0;#H=1;#ue;#ne=0;#re;#N=new Float32Array(0);#Y=0;#ke=0;#ie=0;#Me=0;#fe=!0;#le;#oe=new Float32Array(Wr*2);constructor(e,t={},s={}){if(this.#n=e,this.#a=e.getContext("2d"),this.#e={...Xr,...t},this.#t=Fa(this.#e.seed),this.#w=!!s.still,this.#x=new pn(s.pace),!this.#w){this.#le=new Ls;for(let a=0;a<this.#oe.length;a++)this.#oe[a]=this.#t()*Math.PI*2}}setOptions(e){this.#se();let t=this.#e.seed;this.#e={...this.#e,...e},this.#e.seed!==t&&(this.#t=Fa(this.#e.seed),this.#d=0),this.#ce(),this.#w&&this.#C()}setOrigin(e,t){this.#c=e,this.#y=t,this.#ce(),this.#w&&this.#C()}#ce(){let e=this.#le;if(!e)return;let t=this.#e,s=Math.max(0,this.#c-Math.max(t.beam,t.reach)-As),a=Math.min(this.#l,this.#c+t.reach+As),o=Math.max(0,this.#y-t.reach-As),r=Math.min(this.#O,this.#y+t.reach+As);e.layout(s,o,Math.max(0,a-s),Math.max(0,r-o))}resize(){this.#se();let e=this.#n.clientWidth,t=this.#n.clientHeight,s=Math.min(2,globalThis.devicePixelRatio||1);e===this.#l&&t===this.#O&&s===this.#b||(this.#l=e,this.#O=t,this.#b=s,this.#n.width=Math.round(e*s),this.#n.height=Math.round(t*s),this.readColors(),this.#ce(),this.#w&&this.#C())}readColors(){if(typeof getComputedStyle!="function")return;let e=this.#n,t=e.style.color,s=!this.#ue;for(let a=0;a<Ps;a++){e.style.color=Td[a],this.#r??=getComputedStyle(e);let o=this.#r.color;o&&o!==this.#m[a]&&(this.#m[a]=o,s=!0)}if(e.style.color=t,this.#a&&s){let a=this.#a.createLinearGradient(0,0,ge.width-2,0);a.addColorStop(0,this.#m[1]),a.addColorStop(.35,this.#m[2]),a.addColorStop(.6,this.#m[3]),a.addColorStop(1,this.#m[4]),this.#ue=a}}setWord(e,t,s){if(this.#Z=e,this.#te=t,this.#H=s,this.#Se(),this.#L)return!0;if(this.#w||typeof Path2D!="function")return!1;let a=new xt(this.#e.seed+8);return a.onSnap=()=>{this.#ne+=this.#e.burst*.6},this.#L=a,this.#re=new mn,a.scatter(),!0}#Se(){let e=Math.ceil((ge.width*this.#H+2*zs)/On),t=Math.ceil((ge.height*this.#H+2*zs)/On);this.#N.length<e*t&&(this.#N=new Float32Array(e*t)),this.#Y=this.#Z-zs,this.#ke=this.#te-zs,this.#ie=e,this.#Me=t,this.#fe=!0}#Te(e,t){let s=(e-this.#Y)/On,a=(t-this.#ke)/On;return s<0||a<0||s>=this.#ie||a>=this.#Me?1:1-Math.min(1,this.#N[(a|0)*this.#ie+(s|0)]*kd)}shatterAt(e,t){let s=this.#L;if(!s||!this.#e.interactive||this.#w)return!1;let a=(e-this.#Z)/this.#H,o=(t-this.#te)/this.#H;if(!s.hits(a,o))return!1;this.#se(),s.shatter(a,o);let r=za*za;for(let c=0;c<this.#d;c++){let p=this.#o[c]-e,m=this.#s[c]-t,d=p*p+m*m;if(d>=r)continue;let h=Math.sqrt(d)+.001,u=1-h/za;this.#i[c]+=p/h*Kr*u,this.#h[c]+=m/h*Kr*u}let i=this.#le;if(i){let c=this.#t()*Math.PI*2,p=Math.cos(c)*Gr,m=Math.sin(c)*Gr;i.swirl(e+p,t+m,Yr,Ur),i.swirl(e-p,t-m,-Yr,Ur)}return this.#ne+=this.#e.burst,!0}pointerMove(e,t,s){if(!(!this.#e.interactive||this.#w)){if(this.#se(),this.#B&&this.#V){let a=Math.max(.008,(s-this.#V)/1e3);this.#M+=((e-this.#R)/a-this.#M)*.35,this.#S+=((t-this.#k)/a-this.#S)*.35,this.#Q=Math.min(1,this.#Q+Math.hypot(e-this.#R,t-this.#k)/fd)}this.#R=e,this.#k=t,this.#V=s,this.#B=!0,this.#L?.setPointer((e-this.#Z)/this.#H,(t-this.#te)/this.#H)}}pointerLeave(){this.#B=!1,this.#L?.clearPointer(),this.#M=0,this.#S=0}pointerDown(e,t,s){!this.#e.interactive||this.#w||(this.pointerMove(e,t,s),this.#ne+=this.#e.burst)}start(){this.#D=!0,this.#x.input(),this.#w?this.#C():this.#de()}stop(){this.#D=!1,this.#z&&mt(this.#z),this.#z=0}setVisible(e){this.#G=e,e&&this.#de()}dispose(){this.stop()}get steps(){return this.#x.steps}get asleep(){return this.#x.asleep}#se(){this.#x.input(),this.#de()}#de(){this.#w||!this.#D||!this.#G||this.#z||this.#x.asleep||(this.#I=0,this.#x.reset(),this.#z=et(this.#me))}#me=e=>{if(this.#z=0,!this.#D||!this.#G)return;let t=this.#x.advance(!!this.#L?.animating);if(this.#x.asleep){this.#ge(0);return}this.#x.stepped();let s=this.#I?Math.min(.1,(e-this.#I)/1e3):1/60;this.#I=e,e-this.#U>1500&&(this.#U=e,this.readColors()),e-this.#V>80&&(this.#M*=.85,this.#S*=.85),this.#he(s),this.#ge(t),this.#z=et(this.#me)};#C(){if(this.#l){this.#d=0,this.#$=0,this.#t=Fa(this.#e.seed);for(let e=0;e<pd;e+=1/30)this.#he(1/30);this.#ge(1)}}#F(){if(this.#d>=Ie)return;let e=this.#e,t=this.#d++;this.#o[t]=this.#c-e.beam,this.#s[t]=this.#y+(this.#t()*2-1)*e.width;let s=this.#y-this.#s[t],a=Math.hypot(e.beam,s)||1,o=e.speed*(.8+this.#t()*.4);this.#i[t]=o*e.beam/a,this.#h[t]=o*s/a,this.#u[t]=o,this.#p[t]=0,this.#E[t]=this.#t()*Math.PI*2,this.#P[t]=.55+this.#t()*.35,this.#A[t]=.6+this.#t()*.9}#ve(e){if(this.#d>=Ie)return;let t=this.#e,s=this.#d++,a=1+Math.floor(this.#t()*4),o=this.#J(a,e*1.6),r=t.speed*(2.2+this.#t()*1.6);this.#o[s]=this.#c,this.#f[s]=this.#c,this.#s[s]=this.#y,this.#T[s]=this.#y,this.#i[s]=r*Math.cos(o),this.#h[s]=r*Math.sin(o),this.#u[s]=t.speed*(.8+this.#t()*.4),this.#p[s]=a,this.#E[s]=this.#t()*Math.PI*2,this.#P[s]=this.#pe(),this.#A[s]=.6+this.#t()*.9}#pe(){let e=this.#t();return 1+this.#e.variety*2*e*e*e}#J(e,t){let s=0;for(let r=0;r<Vt.length;r++){let i=Math.max(0,Math.cos(Vt[r]-this.#ee));Aa[r]=1+this.#j*6*i*i*i,s+=Aa[r]}let a=this.#t()*s,o=Vt[Vt.length-1];for(let r=0;r<Vt.length;r++)if(a-=Aa[r],a<=0){o=Vt[r];break}return o+t*((e-1)/1.5-1)+(this.#t()*2-1)*t*.22}#q(e){let t=--this.#d;this.#o[e]=this.#o[t],this.#s[e]=this.#s[t],this.#i[e]=this.#i[t],this.#h[e]=this.#h[t],this.#u[e]=this.#u[t],this.#f[e]=this.#f[t],this.#T[e]=this.#T[t],this.#p[e]=this.#p[t],this.#E[e]=this.#E[t],this.#P[e]=this.#P[t],this.#A[e]=this.#A[t]}#he(e){let t=this.#e;this.#$+=e;let s=this.#$;this.#Q=Math.max(0,this.#Q-e/ud),this.#L?.step(e);let a=this.#L;a&&this.#re?.ready&&this.#ie&&(this.#fe||!a.resting)&&(this.#re.rasterize(a,this.#Z,this.#te,this.#H,this.#Y,this.#ke,On,this.#ie,this.#Me,this.#N),this.#fe=!1);let o=!this.#L||this.#L.whole,r=t.intro>0?Math.min(1,Math.max(0,(s/t.intro-.5)*2)):1,i=1+(Md-1)*(1-r*r*(3-2*r)),c=t.spread*Math.PI/180*(1+t.breathe*Math.sin(s*.37)),p=this.#B&&t.interactive?t.follow:0;p&&(this.#ee=Math.atan2(this.#k-this.#y,this.#R-this.#c)),this.#j+=(p-this.#j)*Math.min(1,e*1.5);let m=.5+.35*Math.sin(s*.83)+.15*Math.sin(s*2.1+1.3);for(this.#W+=e*t.rate*(1-t.pulse+t.pulse*2*m)*(1+2*this.#Q)*i;this.#W>=1;)this.#W-=1,this.#F();for(;this.#ne>=1;)this.#ne-=1,this.#ve(c);let d=this.#B&&t.interactive,h=this.#le;if(h){if(t.curl>0)for(let T=0;T<Wr;T++){let F=this.#c+t.reach*.55*Math.sin(s*(.05+.03*T)+this.#oe[2*T]),I=this.#y+t.reach*.45*Math.cos(s*(.04+.025*T)+this.#oe[2*T+1]);h.swirl(F,I,(T%2?-1:1)*t.curl*wd*e,xd)}if(d&&t.wake>0&&(this.#M||this.#S)){let T=t.wake*Math.min(1,yd/(Math.sqrt(this.#M*this.#M+this.#S*this.#S)||1));h.drive(this.#R,this.#k,this.#M*T,this.#S*T,t.radius*.7,Math.min(1,e*12))}h.drag=gd,h.confinement=t.swirl*bd,h.step(e)}let u=this.#L?this.#L.pull:0,f=this.#Z+(ge.width/2-1)*this.#H,v=this.#te+(ge.height/2-1)*this.#H,g=Ha*Ha,w=t.radius,b=w*w,k=Math.min(1,e/Sd);for(let T=0;T<this.#d;T++){let F=this.#i[T],I=this.#h[T],A=this.#o[T],C=this.#s[T];if(d){let ee=A-this.#R,P=C-this.#k,U=ee*ee+P*P;if(U<b){let te=Math.sqrt(U)+.001,ue=1-te/w,S=ue*ue;F+=ee/te*t.push*S*e,I+=P/te*t.push*S*e}}let $=Math.sqrt(F*F+I*I)||1,M=1+(this.#u[T]/$-1)*k;if(F*=M,I*=M,u>0){let ee=f-A,P=v-C,U=ee*ee+P*P;if(U<g){let te=Math.sqrt(U)+.001,ue=vd*u*(1-te/Ha)*e;F+=ee/te*ue,I+=P/te*ue}}let E=this.#p[T]===0?i:1,D=F*E,N=I*E,Y=A+D*e,W=C+N*e;if(h?.on){let ee=e/2;h.sample(A,C);let P=h.su,U=h.sv;h.sample(A+(D+P)*ee,C+(N+U)*ee);let te=h.su,ue=h.sv;h.sample(A+(D+te)*ee,C+(N+ue)*ee);let S=h.su,j=h.sv;h.sample(A+(D+S)*e,C+(N+j)*e),Y+=(P+2*te+2*S+h.su)*e/6,W+=(U+2*ue+2*j+h.sv)*e/6}if(this.#i[T]=F,this.#h[T]=I,this.#o[T]=Y,this.#s[T]=W,this.#p[T]===0)if(o&&A<this.#c&&Y>=this.#c&&Math.abs(W-this.#y)<=hd){let ee=1+Math.floor(this.#t()*4);this.#p[T]=ee;let P=this.#J(ee,c),U=Math.hypot(F,I)*Math.min(3,i);this.#i[T]=U*Math.cos(P),this.#h[T]=U*Math.sin(P),this.#f[T]=Y,this.#T[T]=W,this.#P[T]=this.#pe()}else(Y>this.#c+qr||Y<this.#c-t.beam*1.5||Math.abs(W-this.#y)>t.reach)&&(this.#q(T),T--);else{let ee=Y-this.#f[T],P=W-this.#T[T];ee*ee+P*P>t.reach*t.reach&&(this.#q(T),T--)}}}#Ce(e){let t=this.#e,s;if(this.#p[e]===0){let a=this.#o[e],o=1-(this.#c-a)/t.beam;s=t.alpha/3*Math.min(1,Math.max(0,o*3)),a>this.#c&&(s*=Math.max(0,1-(a-this.#c)/qr))}else{let a=Math.hypot(this.#o[e]-this.#f[e],this.#s[e]-this.#T[e])/t.reach;s=t.alpha*Math.min(1,a*12)*(1-a)**1.6}return s*=this.#Te(this.#o[e],this.#s[e]),s*=1-t.twinkle+t.twinkle*(.5+.5*Math.sin(this.#$*(1.4+2.6*this.#A[e])+this.#E[e])),Math.max(0,Math.min(kt-1,Math.round(s/Math.max(t.alpha,1e-6)*(kt-1))))}#ge(e){let t=this.#a;if(!t)return;let s=this.#e,a=this.#b;t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,this.#n.width,this.#n.height),t.setTransform(a,0,0,a,0,0);let o=this.#_;o.fill(0);for(let c=0;e>0&&c<this.#d;c++){let m=(s.colors?this.#p[c]:0)*kt+this.#Ce(c);this.#v[c]=m,o[m]++}let r=0;for(let c=0;c<o.length;c++)this.#K[c]=r,r+=o[c];o.fill(0);for(let c=0;e>0&&c<this.#d;c++){let p=this.#v[c];this.#g[this.#K[p]+o[p]++]=c}let i=this.#$;for(let c=0;c<Ps;c++){t.fillStyle=this.#m[c];for(let p=1;p<kt;p++){let m=c*kt+p,d=o[m];if(!d)continue;t.globalAlpha=s.alpha*p*e/(kt-1),t.beginPath();let h=this.#K[m];for(let u=0;u<d;u++){let f=this.#g[h+u],v=this.#o[f],g=this.#s[f],w=s.size*this.#P[f];this.#p[f]!==0&&(w*=1+s.bob*Math.sin(i*(1.5+2*this.#A[f])+this.#E[f])),!(w<.2)&&(t.moveTo(v+w,g),t.arc(v,g,w,0,Math.PI*2))}t.fill()}}t.globalAlpha=1,this.#L?.draw(t,this.#Z,this.#te,this.#H,this.#ue??this.#m[1],this.#m[0],1,this.#b)}};var oi={rate:3.4,k:1.1,spectrum:.4,speed:64,prism:1.2,glow:.35,ripples:.45,spawn:160,decay:1.6,alpha:.6,size:1.3,colors:!0,interactive:!0,radius:36,barrier:2,kick:1.4,seed:3},z=128,_r=7,we=5,Re=z*z,jt=.15,Qr=4,qt=14,Ed=.18,Ia=1.6,Rd=34,Zr=.45,Jr=1.5,ct=12,Ld=20,ei=7,ti=8,Pd=.07,ni=14,Ad=.8,si=10,ai=10,zd=.5,Hd=.25,Fd=1.5,Id=.45,Da=qt+6,Dd=.45,Nd=5,Od=3,$d=1.2,Bd=320,Vd=1.6,Mt=1500,jd=5,qd=.3,Kd=.25,Wd=.22,St=10,$n=5,Gd=3,Fs=.5,Ud=["--msp-color-text-subtle","--msp-color-brand-1","--msp-color-brand-2","--msp-color-brand-3","--msp-color-brand-4"],Yd=Ud.map(n=>`var(${n})`);function Na(n){let e=n>>>0||1;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Oa=new Uint16Array(z);for(let n=0;n<z;n++){let e=0;for(let t=0;t<_r;t++)e|=(n>>t&1)<<_r-1-t;Oa[n]=e}var qn=new Float64Array(z/2),Kn=new Float64Array(z/2);for(let n=0;n<z/2;n++)qn[n]=Math.cos(-2*Math.PI*n/z),Kn[n]=Math.sin(-2*Math.PI*n/z);function Xd(n,e){for(let t=0;t<Re;t+=z)for(let s=z;s>=2;s>>=1){let a=s>>1,o=z/s;for(let r=0;r<z;r+=s)for(let i=0;i<a;i++){let c=qn[i*o],p=Kn[i*o],m=t+r+i,d=m+a,h=n[m],u=e[m],f=h-n[d],v=u-e[d];n[m]=h+n[d],e[m]=u+e[d],n[d]=f*c-v*p,e[d]=f*p+v*c}}for(let t=z;t>=2;t>>=1){let s=t>>1,a=z/t;for(let o=0;o<z;o+=t)for(let r=0;r<s;r++){let i=qn[r*a],c=Kn[r*a],p=(o+r)*z,m=p+s*z;for(let d=0;d<z;d++){let h=p+d,u=m+d,f=n[h],v=e[h],g=f-n[u],w=v-e[u];n[h]=f+n[u],e[h]=v+e[u],n[u]=g*i-w*c,e[u]=g*c+w*i}}}}function _d(n,e){for(let t=2;t<=z;t<<=1){let s=t>>1,a=z/t;for(let o=0;o<z;o+=t)for(let r=0;r<s;r++){let i=qn[r*a],c=-Kn[r*a],p=(o+r)*z,m=p+s*z;for(let d=0;d<z;d++){let h=p+d,u=m+d,f=n[u]*i-e[u]*c,v=n[u]*c+e[u]*i;n[u]=n[h]-f,e[u]=e[h]-v,n[h]+=f,e[h]+=v}}}for(let t=0;t<Re;t+=z)for(let s=2;s<=z;s<<=1){let a=s>>1,o=z/s;for(let r=0;r<z;r+=s)for(let i=0;i<a;i++){let c=qn[i*o],p=-Kn[i*o],m=t+r+i,d=m+a,h=n[d]*c-e[d]*p,u=n[d]*p+e[d]*c;n[d]=n[m]-h,e[d]=e[m]-u,n[m]+=h,e[m]+=u}}}function Bn(n,e){let t=Math.abs(e),s=Math.abs(n),a=t>s?t:s;if(a===0)return 0;let o=(t<s?t:s)/a,r=o*o,i=((-.0464964749*r+.15931422)*r-.327622764)*r*o+o;return s>t&&(i=1.5707963267948966-i),e<0&&(i=3.141592653589793-i),n<0?-i:i}var $a=new Float64Array(Re),Ba=new Float64Array(Re),Vn=new Float32Array(Re),Va=new Float32Array(Re),jn=new Float32Array(Re);for(let n=0;n<z;n++){let e=Oa[n],t=2*Math.PI*(e<z/2?e:e-z)/z,s=Math.max(0,qt-Math.min(n,z-1-n))/qt;for(let a=0;a<z;a++){let o=Oa[a],r=2*Math.PI*(o<z/2?o:o-z)/z,i=-(r*r+t*t)*jt/2;$a[n*z+a]=Math.cos(i)/Re,Ba[n*z+a]=Math.sin(i)/Re;let c=Math.max(0,qt-Math.min(a,z-1-a))/qt,p=Math.max(c,s);Vn[n*z+a]=1-Ed*p*p,Va[n*z+a]=Math.sqrt(Vn[n*z+a]);let m=Math.hypot(a+.5-z/2,n+.5-z/2)/(z/2-qt),d=Math.min(1,Math.max(0,(1-m)/Dd));jn[n*z+a]=d*d*(3-2*d)}}var hn=(()=>{let n=[];for(let e=1;e<z-1;e++)for(let t=1;t<z-1;t++)jn[e*z+t]>0&&n.push(e*z+t);return Int32Array.from(n)})(),Is=class{#e;#n;#a;#r;#t;#o;#s=new Float64Array(Re);#i=new Float64Array(Re);#h=new Float32Array(Re);#u=new Float64Array(Re);#f=new Float64Array(Re);#T=new Float64Array(Re);#E=new Float64Array(Re);#P=new Float32Array(z);#A=new Float32Array(z);#p=new Float32Array(z);#d=new Float32Array(z);#g=new Float32Array(Re);#v=new Float32Array(Re);#_=new Float32Array(Re);#K=new Float32Array(hn.length);#m=Fs;#l=0;#O=!1;#b=!0;#c=0;#y=0;#W=0;#$=new Float32Array(ct);#I=new Float32Array(ct);#z=new Float32Array(ct);#x=new Float32Array(ct);#D=new Float32Array(ct);#G=new Float32Array(ct);#U=new Float32Array(ct);#w=new Uint8Array(ct);#R=0;#k=new Float32Array(Mt);#M=new Float32Array(Mt);#S=new Float32Array(Mt);#B=0;#V=0;#Q=new Float32Array(Mt);#ee=new Uint8Array(Mt);#j=0;#L=new Uint16Array(Mt);#Z=new Uint16Array(Mt);#te=new Uint16Array($n*St);#H=new Uint16Array($n*St);#ue;#ne;#re=null;#N=["#888","#7a4f2f","#e0ae2c","#6f9a80","#3f86ad"];#Y=new Uint8Array($n*3);#ke=new Float32Array(Re);#ie=new Float32Array(Re);#Me=new Float32Array(Re);#fe=!1;#le=1/60;#oe=!1;#ce;#Se=0;#Te=0;#se=1;#de=0;#me=0;#C=0;#F=0;#ve=0;#pe=0;#J=0;#q;#he=!1;#Ce=!0;#ge=Number.NEGATIVE_INFINITY;#Ie=0;#De=0;#Le=!1;#X;#be=0;#ye=0;#ae=1;#Ne=!0;#Pe;#xe=new Float32Array(Re);#Oe=0;#Ae=0;constructor(e,t={},s={}){if(this.#n=e,this.#a=e.getContext("2d"),this.#e={...oi,...t},this.#t=Na(this.#e.seed),this.#o=!!s.still,this.#q=new pn(s.pace),typeof document<"u"&&this.#a){let a=document.createElement("canvas");a.width=z,a.height=z;let o=a.getContext("2d");o&&(this.#ne=a,this.#re=o,this.#ue=o.createImageData(z,z))}}setOptions(e){this.#Ee();let t=this.#e.seed;this.#e={...this.#e,...e},this.#e.seed!==t&&(this.#t=Na(this.#e.seed),this.#s.fill(0),this.#i.fill(0),this.#j=0,this.#R=0,this.#B=0,this.#V=0,this.#l=0,this.#m=Fs,this.#O=!1),this.#b=!0,this.#o&&this.#Re()}setOrigin(e,t){this.#de=e,this.#me=t,this.#C=e-.47*z*we,this.#F=t-.5*z*we,this.#b=!0,this.#o&&this.#Re()}resize(){this.#Ee();let e=this.#n.clientWidth,t=this.#n.clientHeight,s=Math.min(2,globalThis.devicePixelRatio||1);e===this.#Se&&t===this.#Te&&s===this.#se||(this.#Se=e,this.#Te=t,this.#se=s,this.#n.width=Math.round(e*s),this.#n.height=Math.round(t*s),this.readColors(),this.#o&&this.#Re())}readColors(){if(typeof getComputedStyle!="function")return;let e=this.#n,t=e.style.color,s=!this.#ce;for(let a=0;a<$n;a++){e.style.color=Yd[a],this.#r??=getComputedStyle(e);let o=this.#r.color;if(!o||o===this.#N[a])continue;this.#N[a]=o,s=!0;let r=/rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/.exec(o);r&&(this.#Y[a*3]=+r[1],this.#Y[a*3+1]=+r[2],this.#Y[a*3+2]=+r[3])}if(e.style.color=t,this.#oe=.299*this.#Y[0]+.587*this.#Y[1]+.114*this.#Y[2]>128,this.#a&&s){let a=this.#a.createLinearGradient(0,0,ge.width-2,0);a.addColorStop(0,this.#N[1]),a.addColorStop(.35,this.#N[2]),a.addColorStop(.6,this.#N[3]),a.addColorStop(1,this.#N[4]),this.#ce=a}}setWord(e,t,s){if(this.#be=e,this.#ye=t,this.#ae=s,this.#X)return!0;if(this.#o||typeof Path2D!="function")return!1;let a=new xt(this.#e.seed+8);return a.onSnap=()=>{this.#Ae+=3},this.#X=a,this.#Pe=new mn,a.scatter(),!0}shatterAt(e,t){let s=this.#X;if(!s||!this.#e.interactive||this.#o)return!1;let a=(e-this.#be)/this.#ae,o=(t-this.#ye)/this.#ae;return s.hits(a,o)?(this.#Ee(),s.shatter(a,o),this.#qe(e,t,this.#e.kick*1.6,90),this.#b=!0,!0):!1}pointerMove(e,t,s){!this.#e.interactive||this.#o||(this.#Ee(),this.#Ie=e,this.#De=t,this.#Le=!0,this.#b=!0,this.#X?.setPointer((e-this.#be)/this.#ae,(t-this.#ye)/this.#ae))}pointerLeave(){this.#Le=!1,this.#b=!0,this.#X?.clearPointer()}pointerDown(e,t,s){!this.#e.interactive||this.#o||(this.pointerMove(e,t,s),this.#qe(e,t,this.#e.kick,70))}start(){this.#he=!0,this.#q.input(),this.#o?this.#Re():this.#ze()}stop(){this.#he=!1,this.#J&&mt(this.#J),this.#J=0}setVisible(e){this.#Ce=e,e&&this.#ze()}dispose(){this.stop()}get steps(){return this.#q.steps}get asleep(){return this.#q.asleep}#Ee(){this.#q.input(),this.#ze()}#ze(){this.#o||!this.#he||!this.#Ce||this.#J||this.#q.asleep||(this.#pe=0,this.#q.reset(),this.#J=et(this.#$e))}#$e=e=>{if(this.#J=0,!this.#he||!this.#Ce)return;let t=this.#q.advance(!!this.#X?.animating);if(this.#q.asleep){this.#Fe(0);return}this.#q.stepped();let s=this.#pe?Math.min(.1,(e-this.#pe)/1e3):1/60;this.#pe=e,e-this.#ge>1500&&(this.#ge=e,this.readColors()),this.#le=s,this.#We(s),this.#Fe(t),this.#J=et(this.#$e)};#Re(){if(this.#Se){this.#s.fill(0),this.#i.fill(0),this.#j=0,this.#R=0,this.#B=0,this.#V=0,this.#l=0,this.#m=Fs,this.#O=!1,this.#ve=0,this.#t=Na(this.#e.seed);for(let e=0;e<6;e+=1/20)this.#We(1/20);this.#Fe(1)}}#Be(){let e=this.#e;return e.speed/(Math.max(.2,e.k)*we)}#Ge(){let e=this.#e,t=this.#s,s=this.#i,a=2*ai*ai;for(let o=0;o<si;o++){let r=(this.#me-this.#F)/we,i=Da+(o+.3+.4*this.#t())/si*(z-qt-Da),c=r+(this.#t()*2-1)*ni*1.4,p=(this.#t()*2-1)*Hd,m=e.k*(1+e.spectrum*(this.#t()*2-1)),d=m*Math.cos(p),h=m*Math.sin(p),u=this.#t()*Math.PI*2;for(let f=0;f<z;f++){let v=f-c;for(let g=0;g<z;g++){let w=g-i,b=zd*Math.exp(-(w*w+v*v)/a);if(b<1e-4)continue;let k=d*w+h*v+u,T=f*z+g;t[T]+=b*Math.cos(k),s[T]+=b*Math.sin(k)}}}}#Ve(e,t,s,a,o,r){let i=this.#R;i>=ct||(this.#$[i]=e,this.#I[i]=t,this.#z[i]=Math.cos(s),this.#x[i]=Math.sin(s),this.#D[i]=a,this.#G[i]=o,this.#U[i]=this.#W,this.#w[i]=r?1:0,this.#R=i+1)}#je(){let e=this.#s,t=this.#i;for(let s=0;s<this.#R;s++){let a=(this.#W-this.#U[s])/Ld;if(a>=1){let E=--this.#R;this.#$[s]=this.#$[E],this.#I[s]=this.#I[E],this.#z[s]=this.#z[E],this.#x[s]=this.#x[E],this.#D[s]=this.#D[E],this.#G[s]=this.#G[E],this.#U[s]=this.#U[E],this.#w[s]=this.#w[E],s--;continue}let o=Math.sin(Math.PI*a),r=this.#G[s]*Pd*o*o*jt*(this.#w[s]?this.#l:1),i=this.#D[s],c=this.#z[s],p=this.#x[s],m=this.#$[s],d=this.#I[s],h=Math.abs(p)<.001,u=h?ei:(ei+ti)/2,f=h?ti:u,v=i*c,g=i*p,w=Math.max(1,Math.floor(m-3*u)),b=Math.min(z-2,Math.ceil(m+3*u)),k=Math.max(1,Math.floor(d-3*f)),T=Math.min(z-2,Math.ceil(d+3*f)),F=this.#P,I=this.#A;for(let E=w;E<=b;E++){let D=E-m,N=Math.exp(-(D*D)/(2*u*u));F[E]=N*Math.cos(v*D),I[E]=N*Math.sin(v*D)}let A=this.#W-this.#U[s],C=-i*i*A/2,$=this.#p,M=this.#d;for(let E=k;E<=T;E++){let D=E-d,N=r*Math.exp(-(D*D)/(2*f*f));$[E]=N*Math.cos(g*D+C),M[E]=N*Math.sin(g*D+C)}for(let E=k;E<=T;E++){let D=$[E],N=M[E];if(Math.abs(D)+Math.abs(N)<1e-7)continue;let Y=E*z;for(let W=w;W<=b;W++)e[Y+W]+=D*F[W]-N*I[W],t[Y+W]+=D*I[W]+N*F[W]}}}#qe(e,t,s,a){let o=(e-this.#C)/we,r=(t-this.#F)/we,i=a/we,c=Math.max(0,Math.floor(o-i)),p=Math.min(z-1,Math.ceil(o+i)),m=Math.max(0,Math.floor(r-i)),d=Math.min(z-1,Math.ceil(r+i));for(let h=m;h<=d;h++)for(let u=c;u<=p;u++){let f=u-o,v=h-r,g=Math.sqrt(f*f+v*v);if(g>=i)continue;let w=1-g/i,b=s*g*w*w,k=h*z+u,T=Math.cos(b),F=Math.sin(b),I=this.#s[k],A=this.#i[k];this.#s[k]=I*T-A*F,this.#i[k]=I*F+A*T}}#Ue(e){let t=this.#e,s=this.#h;s.fill(0);let a=t.k*t.k/2,o=(this.#de-this.#C)/we,r=(this.#me-this.#F)/we;if(this.#X&&this.#Pe?.ready){this.#Pe.rasterize(this.#X,this.#be,this.#ye,this.#ae,this.#C,this.#F,we,z,z,this.#xe);let d=t.prism*a;for(let h=0;h<Re;h++)s[h]-=d*this.#xe[h]}else{this.#xe.fill(0);let d=Rd/we,h=t.prism*a,u=Math.ceil(d+Jr+1);for(let f=Math.max(0,Math.floor(r-u));f<=Math.min(z-1,r+u);f++)for(let v=Math.max(0,Math.floor(o-u));v<=Math.min(z-1,o+u);v++){let g=v-o,w=f-r,b=Math.sqrt(g*g+w*w),k=Math.cos(4*Math.atan2(w,g)),T=d*(1-Zr+Zr*k*k),F=Math.min(1,Math.max(0,(T-b)/Jr+.5));F>0&&(s[f*z+v]-=h*F*F*(3-2*F))}}if(this.#Le&&t.interactive&&t.barrier>0){let d=(this.#Ie-this.#C)/we,h=(this.#De-this.#F)/we,u=Math.max(1,t.radius/we/1.5),f=2*u*u,v=3*u,g=t.barrier*a;for(let w=Math.max(0,Math.floor(h-v));w<=Math.min(z-1,h+v);w++)for(let b=Math.max(0,Math.floor(d-v));b<=Math.min(z-1,d+v);b++){let k=b-d,T=w-h;s[w*z+b]+=g*Math.exp(-(k*k+T*T)/f)}}if(e>0){let d=(this.#be+(ge.width/2-1)*this.#ae-this.#C)/we,h=(this.#ye+(ge.height/2-1)*this.#ae-this.#F)/we,u=Bd/we,f=Vd*a*e;for(let v=0;v<z;v++)for(let g=0;g<z;g++){let w=g-d,b=v-h,k=Math.sqrt(w*w+b*b);k<u&&(s[v*z+g]-=f*(1-k/u))}}let i=this.#u,c=this.#f,p=this.#T,m=this.#E;for(let d=0;d<Re;d++){if(s[d]===0){i[d]=Va[d],c[d]=0,p[d]=Vn[d],m[d]=0;continue}let h=-s[d]*jt/2,u=Va[d],f=Math.cos(h),v=Math.sin(h);i[d]=f*u,c[d]=v*u,p[d]=(f*f-v*v)*Vn[d],m[d]=2*f*v*Vn[d]}}#He(e,t){let s=this.#s,a=this.#i;for(let o=0;o<Re;o++){let r=s[o],i=a[o];s[o]=r*e[o]-i*t[o],a[o]=r*t[o]+i*e[o]}}#Ye(e){let t=this.#s,s=this.#i;this.#je(),this.#W+=jt,this.#He(this.#u,this.#f);for(let a=0;a<e;a++){Xd(t,s);for(let o=0;o<Re;o++){let r=t[o],i=s[o];t[o]=r*$a[o]-i*Ba[o],s[o]=r*Ba[o]+i*$a[o]}_d(t,s),a===e-1?this.#He(this.#u,this.#f):(this.#He(this.#T,this.#E),this.#je(),this.#W+=jt)}}#Xe(e){let t=this.#s,s=this.#i,a=this.#_,o=this.#g,r=this.#v,i=2.5*Math.max(.2,this.#e.k),c=i*i,p=0,m=0,d=this.#K,h=this.#xe;for(let u=0;u<hn.length;u++){let f=hn[u],v=t[f],g=s[f],w=v*v+g*g;a[f]=w;let b=h[f]*Ia,k=b>=1?0:w*(1-b);if(k>p&&(p=k),m+=k,d[u]=m,w<1e-9){o[f]=0,r[f]=0;continue}let T=t[f+1],F=s[f+1],I=t[f-1],A=s[f-1],C=(Bn(F*v-T*g,T*v+F*g)+Bn(g*I-v*A,v*I+g*A))/2,$=t[f+z],M=s[f+z],E=t[f-z],D=s[f-z],N=(Bn(M*v-$*g,$*v+M*g)+Bn(g*E-v*D,v*E+g*D))/2,Y=C*C+N*N;if(Y>c){let W=i/Math.sqrt(Y);C*=W,N*=W}o[f]=C,r[f]=N}this.#m=Math.max(Fs,this.#m+(p-this.#m)*Math.min(1,e*$d))}#we(e,t,s){let a=(t-this.#C)/we,o=(s-this.#F)/we;a<0?a=0:a>z-1.001&&(a=z-1.001),o<0?o=0:o>z-1.001&&(o=z-1.001);let r=a|0,i=o|0,c=a-r,p=o-i,m=i*z+r;return(e[m]*(1-c)+e[m+1]*c)*(1-p)+(e[m+z]*(1-c)+e[m+z+1]*c)*p}#Ke(e,t){let s=this.#e,a=Math.sqrt(e*e+t*t);if(a<.001||Math.abs(Bn(t,e))<Wd)return 0;let o=s.k*(1-s.spectrum),r=(a-o)/Math.max(.001,2*s.k*s.spectrum);return 1+Math.min(3,Math.max(0,Math.floor(r*4)))}#_e(e){let t=this.#K,s=t[t.length-1];if(s<.001)return!1;let a=this.#t()*s,o=0,r=t.length-1;for(;o<r;){let m=o+r>>1;t[m]<a?o=m+1:r=m}let i=hn[o],c=i%z,p=i/z|0;return this.#k[e]=this.#C+(c+this.#t())*we,this.#M[e]=this.#F+(p+this.#t())*we,this.#S[e]=0,this.#Q[e]=this.#t()*Math.PI*2,this.#ee[e]=this.#Ke(this.#g[i],this.#v[i]),!0}#We(e){let t=this.#e;this.#ve+=e,this.#X?.step(e);let s=this.#X,a=s?s.pull:0;this.#l+=((s?s.assembled:1)-this.#l)*Math.min(1,e*Gd);let o=!s||s.whole;(o!==this.#Ne||a>0||this.#Oe>0||s&&!s.resting)&&(this.#b=!0),this.#Ne=o,this.#Oe=a,this.#b&&(this.#Ue(a),this.#b=!1);let r=(this.#de-this.#C)/we,i=(this.#me-this.#F)/we;for(this.#O||(this.#O=!0,this.#Ge()),this.#y+=e*t.rate;this.#y>=1;){this.#y-=1;let g=i+(this.#t()*2-1)*ni,w=t.k*(1+t.spectrum*(this.#t()*2-1));this.#Ve(Da,g,0,w,Ad,!0)}for(;this.#Ae>=1;){this.#Ae-=1;let g=Math.floor(this.#t()*8)*Math.PI/4,w=t.k*(1+t.spectrum*(this.#t()*2-1));this.#Ve(r+Math.cos(g)*4,i+Math.sin(g)*4,g,w,Id,!1)}this.#c+=e*this.#Be();let c=0;for(;this.#c>=jt&&c<Qr;)this.#c-=jt,c++;c===Qr&&(this.#c=0),c&&this.#Ye(c),this.#Xe(e);let p=this.#Be()*we,m=jd*Math.max(.1,t.decay),d=this.#C,h=this.#F,u=this.#C+z*we,f=this.#F+z*we;for(let g=0;g<this.#j;g++){let w=this.#k[g],b=this.#M[g],k=this.#we(this.#g,w,b)*p,T=this.#we(this.#v,w,b)*p,F=w+k*e/2,I=b+T*e/2,A=this.#we(this.#g,F,I),C=this.#we(this.#v,F,I),$=w+A*p*e,M=b+C*p*e;this.#k[g]=$,this.#M[g]=M,this.#S[g]+=e,this.#ee[g]===0&&(this.#ee[g]=this.#Ke(A,C)),(this.#S[g]>m||$<d||M<h||$>=u||M>=f||jn[((M-h)/we|0)*z+(($-d)/we|0)|0]===0)&&(this.#Qe(g),g--)}let v=this.#K[this.#K.length-1];for(this.#l>.9&&(this.#V=this.#V?this.#V+(v-this.#V)*Math.min(1,e*Kd):v),this.#B+=e*t.spawn*(this.#V>1e-6?v/this.#V:this.#l);this.#B>=1;)this.#B-=1,!(this.#j>=Mt||!this.#_e(this.#j))&&this.#j++}#Qe(e){let t=--this.#j;this.#k[e]=this.#k[t],this.#M[e]=this.#M[t],this.#S[e]=this.#S[t],this.#Q[e]=this.#Q[t],this.#ee[e]=this.#ee[t]}#Ze(){let e=this.#ue;if(!e||!this.#re)return;let t=this.#e,s=e.data,a=this.#_,o=1/this.#m,r=Math.min(1,t.glow)*(this.#oe?Od:1)*255*Math.min(1,this.#ve/Fd),i=this.#Y,c=this.#ke,p=this.#ie,m=this.#Me;if(!this.#fe){let f=t.colors?6:0,v=t.colors?9:0;c.fill((i[f]+i[v])/2),p.fill((i[f+1]+i[v+1])/2),m.fill((i[f+2]+i[v+2])/2),this.#fe=!0}let d=Math.min(1,this.#le*Nd),h=t.k*(1-t.spectrum),u=Math.max(.001,2*t.k*t.spectrum);for(let f=0;f<hn.length;f++){let v=hn[f],g=a[v]*o,w=v*4;if(g<1e-4){s[w+3]=0;continue}let b=i[0],k=i[1],T=i[2],F=1;if(t.colors){let $=this.#g[v],M=this.#v[v],E=Math.min(2.999,Math.max(0,(Math.sqrt($*$+M*M)-h)/u*4-.5)),D=E|0,N=E-D,Y=(1+D)*3,W=(2+D)*3;b=i[Y]*(1-N)+i[W]*N,k=i[Y+1]*(1-N)+i[W+1]*N,T=i[Y+2]*(1-N)+i[W+2]*N,F=Math.min(1,g*12)}let I=d*F;c[v]+=(b-c[v])*I,p[v]+=(k-p[v])*I,m[v]+=(T-m[v])*I,s[w]=c[v],s[w+1]=p[v],s[w+2]=m[v];let A=1-t.ripples*.5*(1-this.#s[v]/Math.sqrt(a[v])),C=1-Math.min(1,this.#xe[v]*Ia);s[w+3]=Math.min(255,r*Math.min(1,Math.sqrt(g))*A*jn[v]*C)}this.#re.putImageData(e,0,0)}#Fe(e){let t=this.#a;if(!t)return;let s=this.#e,a=this.#se;t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,this.#n.width,this.#n.height),t.setTransform(a,0,0,a,0,0),e>0&&s.glow>0&&this.#ne&&(this.#Ze(),t.imageSmoothingEnabled=!0,t.globalAlpha=e,this.#oe&&(t.globalCompositeOperation="lighter"),t.drawImage(this.#ne,this.#C,this.#F,z*we,z*we),t.globalCompositeOperation="source-over",t.globalAlpha=1);let o=this.#te;o.fill(0);let r=-Math.LN2/Math.max(.1,s.decay);for(let p=0;e>0&&p<this.#j;p++){let m=this.#S[p],d=this.#k[p],h=this.#M[p],u=1-Math.min(1,this.#we(this.#xe,d,h)*Ia),f=Math.min(1,m/qd)*Math.exp(m*r)*this.#we(jn,d,h)*u,v=Math.max(0,Math.min(St-1,Math.round(f*(St-1)))),w=(s.colors?this.#ee[p]:0)*St+v;this.#Z[p]=w,o[w]++}let i=0;for(let p=0;p<o.length;p++)this.#H[p]=i,i+=o[p];o.fill(0);for(let p=0;e>0&&p<this.#j;p++){let m=this.#Z[p];this.#L[this.#H[m]+o[m]++]=p}let c=this.#ve;for(let p=0;p<$n;p++){t.fillStyle=this.#N[p];for(let m=1;m<St;m++){let d=p*St+m,h=o[d];if(!h)continue;t.globalAlpha=(p===0?.5:1)*s.alpha*m*e/(St-1),t.beginPath();let u=this.#H[d];for(let f=0;f<h;f++){let v=this.#L[u+f],g=s.size*(p===0?.7:1)*(1+.25*Math.sin(c*2.2+this.#Q[v])),w=this.#k[v],b=this.#M[v];t.moveTo(w+g,b),t.arc(w,b,g,0,Math.PI*2)}t.fill()}}t.globalAlpha=1,this.#X?.draw(t,this.#be,this.#ye,this.#ae,this.#ce??this.#N[1],this.#N[0],1,this.#se)}};function Qd(){return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}function ri(n){let e=l("canvas",{class:n.class?`${La.splash} ${n.class}`:La.splash,"aria-hidden":"true"}),t={still:Qd()},s=n.field==="quantum"?new Is(e,{},t):new Hs(e,{},t);n.options&&he(n.options,v=>s.setOptions(v));let a=0,o=0,r=()=>{let v=e.getBoundingClientRect();a=v.left,o=v.top},i=()=>{s.resize();let v=e.getBoundingClientRect();a=v.left,o=v.top;let w=n.mark?.()?.querySelector('[data-part="star"]')?.getBoundingClientRect();w?.width?s.setOrigin(w.left+w.width/2-v.left,w.top+w.height/2-v.top):s.setOrigin(v.width/2,v.height/2);let b=c(),k=b?.getBoundingClientRect();if(b&&k?.width){let T=k.width/ge.width;s.setWord(k.left-v.left+T,k.top-v.top+T,T)&&(b.style.visibility="hidden")}},c=()=>{let v=n.mark?.();if(v)return v.matches("[role=img]")?v:v.querySelector("[role=img]")},p=be("PrismSplash"),m=!1;ze(e,()=>{i(),m||(m=!0,p.disposed||Ae(p,f),s.start())});let d=!0,h=!0,u=()=>s.setVisible(d&&h&&document.visibilityState==="visible");Ho(e,([v])=>{d=v?.isIntersecting??!0,u()}),q(document,"visibilitychange",u),q(window,"scroll",r,{capture:!0,passive:!0}),Gt(v=>{h=v,u()});function f(){let v=n.pointer?.();if(!v)return;let g={passive:!0};q(v,"pointermove",b=>s.pointerMove(b.clientX-a,b.clientY-o,b.timeStamp),g),q(v,"pointerdown",b=>{let k=b.clientX-a,T=b.clientY-o;s.shatterAt(k,T)||s.pointerDown(k,T,b.timeStamp)},g);let w=b=>{(b.type!=="pointerup"||b.pointerType!=="mouse")&&s.pointerLeave()};q(v,"pointerleave",w,g),q(v,"pointerup",w,g),q(v,"pointercancel",w,g)}return ne(()=>{let v=c();v&&(v.style.visibility=""),s.dispose()}),e}var Zd=700,Jd=2/3,em=250;function ii(n){let e=B("gone"),t=d=>{let h=e.value,u=d==="out"&&h!=="in"?"gone":d;u!==h&&(e.set(u),u==="in"?n.onCanvasShown?.(!1):u==="out"&&n.onCanvasShown?.(!0))},s="gone",a=Yt(()=>t(s)),o=(d,h)=>{s=h,a.start(d)},r,i=!1,c=()=>{a.cancel(),r!==void 0&&(r?i||o(Zd,"in"):(t("out"),o(em,"gone")))};Se(n.empty,d=>{d!==r&&(r=d,c())}),n.busy!==void 0&&Se(n.busy,d=>{i=d,c()}),n.onCanvasShown&&he(n.empty,d=>!d&&n.onCanvasShown?.(!0));let p=n.splash??!0,m=()=>{if(typeof p=="object")return"light";let d=n.field??"random";return d==="random"?Math.random()<Jd?"quantum":"light":d};return l(L,{when:y(e.asReadonly,d=>d!=="gone"),children:()=>{let d=l(ua,{scale:3,flash:"reveal",live:!p,prism:!p,class:Rs.mark});return x("div",{class:Rs.empty,"data-phase":e.asReadonly,children:[p?l("div",{class:Rs.splash,children:l(ri,{field:m(),mark:()=>d,pointer:()=>d.closest("[data-msp-viewport]")??d.parentElement,options:p===!0?{}:p})}):null,d]})}})}var Wn={"drop-in":"msp-shell-file-drop-drop-in",hint:"msp-shell-file-drop-hint",overlay:"msp-shell-file-drop-overlay",target:"msp-shell-file-drop-target",title:"msp-shell-file-drop-title"};_("views/shell/file-drop.module.css",`@layer msp.components {
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
`);function li(n){let e=B(!1),t=o=>{tm(o)&&e.set(!0)};q(n.target,"dragenter",t);let s=o=>{o.preventDefault(),o.stopPropagation(),o.dataTransfer&&(o.dataTransfer.dropEffect="copy")},a=l("div",{class:Wn.overlay,onDragEnter:s,onDragOver:s,onDragLeave:()=>e.set(!1),onDrop:o=>{s(o),e.set(!1);let r=[...o.dataTransfer?.files??[]];r.length&&n.onDrop(r)},children:x("div",{class:Wn.target,children:[l(H,{name:"folder-open",size:24}),l("span",{class:Wn.title,children:"Drop to open"}),n.formats?.length?l("span",{class:Wn.hint,children:n.formats.join(", ")}):null]})});return O([e],()=>K(a,"hidden",!e.value)),a}function tm(n){let e=n.dataTransfer?.types;if(!e)return!1;for(let t=0;t<e.length;t++)if(e[t]==="Files")return!0;return!1}var un={body:"msp-shell-page-body",header:"msp-shell-page-header",headerContent:"msp-shell-page-headerContent",page:"msp-shell-page-page","page-in":"msp-shell-page-page-in",title:"msp-shell-page-title"};_("views/shell/page.module.css",`@layer msp.components {
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
`);function ci(n){let{shell:e}=n,t=y(e.page,s=>s?.page);return l(L,{when:t,children:s=>l(nm,{shell:e,page:s})})}function nm(n){let{shell:e}=n,t={page:n.page,focus:e.page.value?.focus},s={shell:e,...t.focus?{focus:t.focus}:{}},a=x("section",{class:un.page,role:"region","aria-label":t.page.title,tabIndex:-1,"data-msp-page":"",children:[x("header",{class:un.header,children:[x("span",{class:un.title,children:[t.page.icon?l(H,{name:t.page.icon}):null,t.page.title]}),l("div",{class:un.headerContent,children:t.page.header?l(Ze,{renderer:t.page.header,ctx:s}):null}),l(Ce,{variant:"ghost",size:"sm",icon:l(H,{name:"x"}),title:"Close (Esc)",onClick:()=>e.closePage()})]}),l("div",{class:un.body,children:l(Ze,{renderer:t.page.render,ctx:s})})]}),o=vt(document);return q(document,"keydown",i=>{if(i.key!=="Escape"||i.defaultPrevented||!Xe(a,i))return;let c=vt(a);c&&c!==document.body&&!a.contains(c)||(e.closePage(),i.preventDefault())}),queueMicrotask(()=>{a.contains(vt(a))||a.focus({preventScroll:!0})}),ne(()=>{o?.isConnected&&o.focus({preventScroll:!0})}),a}var di=44,Ue=8,sm=34+Ue;function am(n){let{shell:e,status:t}=n,s=e.dock("right"),a=y(e.mode,P=>P==="compact"),o=e.dock("top"),r=e.expanded,i=y(r,P=>!P),c=it(e,s),p=y([c.floating,e.mode],(P,U)=>P&&U!=="compact"),m=it(e,o).floating,d=y([it(e,o).size,o.active,m,r],(P,U,te,ue)=>`${te&&U&&!ue?U.frame==="none"?P-$s+Ue:Ue+P+Ue:Ue}px`),h=y([p,e.railShown,r],(P,U,te)=>P&&!U||te?0:di),u=y([p,e.compactRail,r],(P,U,te)=>P&&U&&!te),f=y([h,u],(P,U)=>U?0:P),v=u,g=y([c.pinned,p,r],(P,U,te)=>U&&P&&!te),w=y([c.size,s.active,e.overlay,g,h],(P,U,te,ue,S)=>ue?S+(U||te?P:0):0),b=y([w,p,f],(P,U,te)=>P>0?P:U?te:0),k=y([c.size,s.active,e.overlay,p,g,h,r,a],(P,U,te,ue,S,j,Q,ce)=>`${S||Q?Ue:(ce?0:j)+Ue+(ue&&(U||te)?P+Ue:0)}px`),T=y([g,a,f,u,r],(P,U,te,ue,S)=>`${P||U||S?Ue:(ue?di:te)+Ue}px`),F=y([s.active,p,r],(P,U,te)=>U&&P&&!te?"open":void 0),I=c.sizePx,A=y(h,P=>`${P+Ue}px`),C=l("div",{class:Bt.canvas,"data-msp-canvas":"","data-msp-scope":"canvas","data-quiet":n.empty?"":void 0,children:n.canvas}),$=P=>C.toggleAttribute("data-quiet",!P),M,E,D,N=x("div",{class:Bt.shell,children:[l(L,{when:y([m,r],(P,U)=>!P&&!U),children:()=>l(Hn,{shell:e,dock:o})}),l(L,{when:i,children:()=>l(Hn,{shell:e,dock:e.dock("left")})}),x("main",{class:Bt.viewport,"data-msp-viewport":"",style:{"--msp-canvas-edge":`${Ue}px`,"--msp-corner-room":`${sm}px`,"--msp-band-fade":`${$s}px`,"--msp-band-dissolve":`${ao}px`},ref:P=>M=P,children:[C,x("div",{class:`${Bt.layer} ${Bt.canvasLayer}`,"data-msp-theme":n.ink?void 0:"light",ref:P=>E=P,children:[l(L,{when:y([m,r],(P,U)=>P&&!U),children:()=>l(Ma,{shell:e,dock:o})}),n.empty?l(ii,{empty:n.empty,splash:n.splash??!0,field:n.splashField??"random",onCanvasShown:$,...n.busy?{busy:n.busy}:{}}):null,l("div",{class:R.lead,children:n.playback}),n.overlays,l(L,{when:v,children:()=>l($r,{shell:e})}),l("div",{class:R.bottom,"data-keeps-card":"",children:x("div",{class:R.bottomGrid,children:[l(Ea,{status:t,onOpenLog:n.onOpenLog,after:n.agent}),x("div",{class:R.corner,children:[l(Hr,{shell:e,lead:n.canvasLead,aside:n.canvasAside,...n.canvasLeadMenu?{leadMenu:n.canvasLeadMenu}:{},quiet:n.empty}),l(Or,{status:t,lead:n.context?.()})]})]})})]}),x("div",{class:Bt.layer,ref:P=>D=P,children:[l(Nr,{shell:e}),l(ci,{shell:e}),l(L,{when:i,children:()=>l(L,{when:p,fallback:()=>l(L,{when:y(a,P=>!P),children:()=>l("div",{class:`${R.toolbarSlot} ${R.frame}`,children:l(Nn,{shell:e})})}),children:()=>{let P=ht(e.railShown,()=>l(Ma,{shell:e,dock:s,railItems:U=>l(Nn,{shell:e,part:"rest",hidden:U.hidden,railMenu:(te,ue)=>U.toggleMenu(ue,te)}),railFoot:U=>l(Nn,{shell:e,part:"lead",hidden:U.hidden,railMenu:(te,ue)=>U.toggleMenu(ue,te)})}));return O([e.railShown,e.compactRail],()=>{K(P,"data-rail-hidden",!e.railShown.value),K(P,"data-rail-overlay",e.compactRail.value)}),P}})})]})]}),l(L,{when:y([p,r],(P,U)=>!P&&!U),children:()=>l(Hn,{shell:e,dock:s,stripEnd:l(L,{when:a,children:()=>l(Fr,{shell:e})})})}),l(L,{when:i,children:()=>l(Hn,{shell:e,dock:e.dock("bottom")})}),n.commandMenu,l(Ir,{status:t})]});O([e.mode,r],()=>{K(N,"data-mode",e.mode.value),K(N,"data-expanded",r.value)});let Y=[k,T,d,b,A,I,w];if(n.ink&&Y.push(n.ink),O(Y,()=>{Ee(M,"--msp-canvas-right-inset",k.value),Ee(M,"--msp-canvas-corner-inset",T.value),Ee(M,"--msp-canvas-top-inset",d.value),Ee(M,"--msp-canvas-end",`${b.value}px`),Ee(M,"--msp-canvas-rail-inset",A.value),Ee(M,"--msp-canvas-panel-right",A.value),Ee(M,"--msp-right-panel-width",I.value),Ee(M,"--msp-canvas-pinned",`${w.value}px`),Ee(M,"background",n.ink?.value.color)}),n.ink){let P=n.ink;O([P],()=>{K(E,"data-msp-theme",P.value.theme),Ee(E,"--msp-color-bg",P.value.color)})}O([F,g,e.overlay],()=>{K(D,"data-right-panel",F.value),K(D,"data-pinned",g.value),K(D,"data-overlay",e.overlay.value?"open":null)}),n.onDropFiles&&N.appendChild(l(li,{target:N,onDrop:n.onDropFiles,formats:n.dropFormats})),q(document,"keydown",P=>{if(!(P.key!=="Escape"||P.defaultPrevented||e.overlay.value||Io(at(P)))&&Xe(N,P)){if(r.value){e.setExpanded(!1),P.preventDefault();return}s.state.value.pinned||!s.state.value.collapsed&&s.active.value!==void 0&&(e.toggle("right"),P.preventDefault())}});let ee=P=>{(P.type!=="wheel"||P.ctrlKey)&&P.preventDefault()};return q(N,"wheel",ee,{passive:!1}),q(N,"gesturestart",ee),q(N,"gesturechange",ee),ne(jr(N)),ze(N,P=>e.setWidth(P[0].contentRect.width)),N}export{lo as a,Ye as b,Yn as c,be as d,Ae as e,ne as f,fo as g,Gt as h,he as i,O as j,Se as k,qe as l,xe as m,Zs as n,L as o,ie as p,q,es as r,Gm as s,Um as t,ut as u,Xt as v,Ne as w,zt as x,gt as y,_e as z,Em as A,pr as B,_ as C,Lm as D,Pm as E,H as F,l as G,x as H,$i as I,Ce as J,Wl as K,Xe as L,Bo as M,Qe as N,da as O,la as P,Ul as Q,mc as R,vs as S,ve as T,K as U,Zt as V,Ee as W,Yp as X,ss as Y,ke as Z,ca as _,Yi as $,Ht as aa,Jt as ba,Ft as ca,hs as da,It as ea,pc as fa,hc as ga,ba as ha,uc as ia,gc as ja,zl as ka,Hl as la,Fl as ma,Il as na,dr as oa,Dl as pa,Nl as qa,wc as ra,Ze as sa,$t as ta,Qc as ua,ed as va,od as wa,ql as xa,rd as ya,am as za};
