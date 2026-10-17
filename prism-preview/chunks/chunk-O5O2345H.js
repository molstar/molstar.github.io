import{a as As}from"./chunk-KHBNYRDQ.js";import{G as Fs,I as to,M as jt,N as pn,O as Tt,P as no,R as so,S as ao,a as Bt,b as Ka,c as zs,e as Is,f,g as Ga,h as ot,i as O,j as rt,l as Ua,m as Ya,n as Ne,o as it,p as Ct,q as _a,r as Xa,s as Qa,t as Za,u as Ja,v as eo}from"./chunk-I5FRM7IT.js";import{c as Va,g as qa,h as dn,q as Wa}from"./chunk-FY6Y25VJ.js";import{Aa as ja,Ta as cn,ea as Oa,pb as Dn,qa as Ba}from"./chunk-CZB3H7J7.js";function oo(n,e){let t=n.listen;if(typeof t=="function")return t.call(n,e);if(!dn(n))throw new Error("listen: not a state or a stream");let s=!0,a=n.subscribe(()=>{s||e()});return s=!1,()=>a.unsubscribe()}var $n=!1,hn=class{},Ns=class extends hn{constructor(t,s){super();this.stream=t;this.fn=s}#e;#t=!1;#a=!1;start(){if(this.#t||this.#a)return;this.#t=!0;let t=$n,s=_e.starting;$n=!0,this.site&&(_e.starting=this.site);try{this.#r()}finally{$n=t,_e.starting=s}}#r(){let t=this.stream;if(typeof t.listen=="function"){this.#e=t.listen(this.fn);let a=t.value;if(this.fn(a),!this.#t)return;let o=t.value;Object.is(o,a)||this.fn(o);return}let s=this.stream.subscribe(this.fn);this.#t?this.#e=s:s.unsubscribe()}stop(){this.#t=!1;let t=this.#e;this.#e=void 0,typeof t=="function"?t():t?.unsubscribe()}unsubscribe(){this.#a=!0,this.stop()}},_e={},mn=[],lt=0,ro=[],Os=[],Bs=0,io=[],Hs=!1;Xa.flush=()=>Ve();Ua.after=()=>{if(Ve(),!Hs){Hs=!0;try{let n=Os,e=Bs;Os=io,Bs=0,io=n,po(n,e)}finally{Hs=!1}Ve()}};var Ds=new Int32Array(64),ti=[];function ni(n,e){let t=!0,s=0;for(let r=0;r<e;r++){let l=n[r].depth;l>s&&(s=l),r>0&&l<n[r-1].depth&&(t=!1)}if(t)return;Ds.length<=s+1&&(Ds=new Int32Array(2*(s+1)));let a=Ds;a.fill(0,0,s+2);for(let r=0;r<e;r++)a[n[r].depth+1]++;for(let r=1;r<=s+1;r++)a[r]+=a[r-1];let o=ti;for(let r=0;r<e;r++){let l=n[r];o[a[l.depth]++]=l}for(let r=0;r<e;r++)n[r]=o[r],o[r]=void 0}function po(n,e){ni(n,e);for(let t=0;t<e;t++){let s=n[t];n[t]=void 0,s.queued&&(s.queued=!1,s.run())}}var js=!1,$s=!1,si=100;function ai(n){if(!n.queued){if(n.queued=!0,n.frame){Os[Bs++]=n,Ya();return}mn[lt++]=n,!js&&(js=!0,queueMicrotask(oi))}}function oi(){js=!1,Ve()}function Ve(){if(!$s){$s=!0;try{for(let n=0;lt>0||Za("task");n++){if(n===si){console.error("watch: renders kept marking watches (a render sets what it watches?); dropped",lt);for(let s=0;s<lt;s++)mn[s].queued=!1,mn[s]=void 0;lt=0,Qa();break}if(Ja("task"),lt===0)continue;let e=mn,t=lt;mn=ro,lt=0,ro=e,po(e,t)}}finally{$s=!1}}}var Vs=class extends hn{constructor(t,s,a){super();this.depth=t;this.#r=!1;this.#n=!1;this.queued=!1;this.frame=!1;this.#o=()=>{this.#r&&(this.because?.add(zs.source),ai(this))};this.#e=s,this.#t=a,this.frame=co(s)}#e;#t;#a;#r;#n;#o;retarget(t){if(this.#n)return;let s=this.#r;this.stop(),this.#e=ho(t),this.frame=co(this.#e),s&&this.start()}start(){if(this.#r||this.#n)return;this.#r=!0;let t=this.#e,s=new Array(t.length),a=_e.starting;this.site&&(_e.starting=this.site);try{for(let o=0;o<t.length;o++)s[o]=oo(t[o],this.#o)}finally{_e.starting=a}this.#a=s,this.run()}run(){if(!this.#r)return;Ka.render++;let t=Ze;Ze=void 0;try{this.#t()}catch(s){console.error(s)}finally{Ze=t}}stop(){this.#r=!1,this.queued=!1;let t=this.#a;if(this.#a=void 0,t)for(let s=0;s<t.length;s++)t[s]()}unsubscribe(){this.#n=!0,this.stop()}},un=class n{#e;#t;#a;#r=!1;#n=!1;#o=!0;#s=!0;#i;constructor(e){this.#e=e,this.depth=e?e.depth+1:0,this.#s=e?e.#s:!0}get active(){return this.#s}setActive(e){this.#o!==e&&(this.#o=e,this.#m())}#m(){if(this.#r)return;let e=this.#o&&(this.#e?this.#e.#s:!0);if(e===this.#s)return;this.#s=e,e&&this.#h(!0),this.#u(e),e||this.#h(!1);let t=this.#t;if(t)for(let s of t)s.#m()}#h(e){let t=this.#a;if(t)for(let s=0;s<t.length;s++){let a=t[s];a instanceof hn&&(e?a.start():a.stop())}}#u(e){let t=this.#i;if(t)for(let s=0;s<t.length;s++)try{t[s](e)}catch(a){console.error(a)}}onActive(e){if(!this.#r){(this.#i??=[]).push(e);try{e(this.#s)}catch(t){console.error(t)}}}follow(e){let t=ze(e);t?this.own(t.subscribe(s=>this.setActive(!!s))):this.setActive(!!e)}bind(e,t,s=!1){let a=_e.on,o=s?void 0:_e.run,r=o?new Error().stack??"":"",l=o?m=>o("write",r,[$n?void 0:zs.source],()=>t(m)):t,d=new Ns(e,a?m=>{a("write",this),l(m)}:l);o&&(d.site=r),this.own(d),this.#s&&d.start()}watch(e,t){let s=ho(e),a=_e.on,o=_e.run,r=o?new Error().stack??"":"",l,d=o?()=>{let m=l.because.size?[...l.because]:[void 0];l.because.clear(),o("render",r,m,t)}:t;return l=new Vs(this.depth,s,a?()=>{a("render",this),d()}:d),o&&(l.because=new Set,l.site=r),this.own(l),this.#s&&l.start(),l}get disposed(){return this.#r}child(){let e=new n(this);return this.#r?e.dispose():(this.#t??=new Set).add(e),e}onCleanup(e){if(this.#r){lo(e);return}(this.#a??=[]).push(e)}own(e){if(this.#r){e.unsubscribe();return}(this.#a??=[]).push(e)}dispose(){if(this.#r)return;this.#r=!0,this.#n=!0,this.#i=void 0;let e=this.#t;if(e){let a=[...e];for(let o=a.length-1;o>=0;o--)a[o].dispose();this.#t=void 0}let t=this.#a;if(this.#a=void 0,t)for(let a=t.length-1;a>=0;a--){let o=t[a];typeof o=="function"?lo(o):o.unsubscribe()}let s=this.#e;s&&!s.#n&&s.#t?.delete(this)}};function lo(n){try{n()}catch(e){console.error(e)}}var Ze;function Nn(){return Ze}function he(n="A binding"){if(!Ze)throw new Error(`${n} was created outside a render scope; render with \`render\` or in an element.`);return Ze}function Re(n,e){let t=Ze;Ze=n;try{return e()}finally{Ze=t}}function Q(n){he("onCleanup").onCleanup(n)}function mo(n){let e=new un;return Re(e,()=>n(()=>e.dispose()))}function ze(n){if(dn(n))return n;if(n&&typeof n=="object"&&"asReadonly"in n&&dn(n.asReadonly))return n.asReadonly}function Vt(n){he("onActive").onActive(n)}function X(n,e){let t=ze(n);if(!t){e(n);return}he().bind(t,e)}function qe(n,e){return he("watch").watch(n,e)}function Se(n,e){let t=ze(n);if(!t){e(n);return}he("effect").bind(t,e,!0)}function co(n){for(let e=0;e<n.length;e++)if(n[e].frameLane===!0)return!0;return!1}function Xe(n,e){let t=new _a(n,e);return Nn()?.onCleanup(()=>t.dispose()),t}function ho(n){let e=[];for(let t of n){let s=ze(t)??(typeof t.listen=="function"?t:void 0);s&&e.push(s)}return e}var ri="http://www.w3.org/2000/svg",ii=new Set(["svg","animate","animateMotion","animateTransform","circle","clipPath","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","tspan","use","view"]),li=new Set(["list","form","download","role","width","height"]),go=Symbol("Passthrough");function bo(n,e){if(typeof n=="function"){let a=n(e??{});return a&&typeof a=="object"&&go in a?a:Ws(a)}let t=ii.has(n),s=t?document.createElementNS(ri,n):document.createElement(n);if(e){let a=n==="select"&&"value"in e;vo(s,e,t,n.includes("-"),a);let o=e.children;typeof o=="string"||typeof o=="number"?s.textContent=String(o):o!==void 0&&Oe(s,o,null),a&&vo(s,{value:e.value},t,!1),typeof e.ref=="function"&&e.ref(s)}return s}function fe(n){let e=document.createDocumentFragment();return Oe(e,n.children,null),e}function Ws(n){if(n instanceof Node)return n;let e=document.createDocumentFragment();return Oe(e,n,null),e}function Oe(n,e,t){if(!(e==null||typeof e=="boolean"))if(e instanceof Node)n.insertBefore(e,t);else if(Array.isArray(e))for(let s of e)Oe(n,s,t);else if(typeof e=="function")Oe(n,e(),t);else if(typeof e=="object"){let s=ze(e);s?Ks(n,s,t):console.warn("Cannot render",e)}else n.insertBefore(document.createTextNode(String(e)),t)}function ci(n){let e=typeof n;return n===null||e==="undefined"||e==="string"||e==="number"||e==="bigint"||e==="boolean"}function Ks(n,e,t,s=!1){let a=he("A reactive child"),o=document.createTextNode("");n.insertBefore(o,t);let r,l,d,m;X(e,c=>{if(s&&typeof c=="function"&&c===m)return;if(m=c,ci(c)){let g=c==null||typeof c=="boolean"?"":String(c);if(o){o.data!==g&&(o.data=g);return}p(),o=document.createTextNode(g),l.parentNode.insertBefore(o,l);return}if(!r){r=document.createComment(""),l=document.createComment("");let g=o;g.parentNode.insertBefore(r,g),g.parentNode.insertBefore(l,g.nextSibling)}o&&(o.remove(),o=void 0),p();let h=a.child();d=h;let u=document.createDocumentFragment();Re(h,()=>Oe(u,c,null)),l.parentNode.insertBefore(u,l)});function p(){d?.dispose(),d=void 0,r&&l&&jn(r,l)}}function jn(n,e){let t=n.parentNode;if(!t)return;let s=n.nextSibling;for(;s&&s!==e;){let a=s.nextSibling;t.removeChild(s),s=a}}var yo=new Set(["click","dblclick","contextmenu","input","change","beforeinput","keydown","keyup","pointerdown","pointerup","pointermove","pointerover","pointerout","pointercancel","mousedown","mouseup","mousemove","mouseover","mouseout","focusin","focusout"]),Gs=Symbol("handlers"),On=Symbol("walked"),uo=new WeakSet,fo=new Map;function xo(n){if(!uo.has(n)){uo.add(n);for(let e of yo)n.addEventListener(e,pi),n.addEventListener(e,di,!0)}}function di(n){if(n.bubbles||n[On])return;n[On]=n.currentTarget;let e=n.target,t=e[Gs]?.[n.type];if(t){Object.defineProperty(n,"currentTarget",{configurable:!0,value:e});try{t.call(e,n)}finally{delete n.currentTarget,Ve()}}}function pi(n){if(!n.bubbles)return;let e=n.currentTarget,t=n.composedPath(),s=t.indexOf(e);if(s<0)return;let a=n[On],o=a?t.indexOf(a):-1,r=!1;try{for(let l=a?o<0?s+1:o+1:0;l<=s;l++){let d=t[l],m=d[Gs]?.[n.type];if(m&&(Object.defineProperty(n,"currentTarget",{configurable:!0,value:d}),r=!0,m.call(d,n),n.cancelBubble))break}}finally{n[On]=e,r&&(delete n.currentTarget,Ve())}}function mi(n,e,t){if(!yo.has(e)){n.addEventListener(e,t);return}(n[Gs]??={})[e]=t,typeof document<"u"&&xo(document)}var qs=n=>n===null||typeof n!="object"&&typeof n!="function";function vo(n,e,t,s,a=!1){let o;for(let r in e){let l=e[r];if(!(r==="children"||r==="ref"||l===void 0||a&&r==="value")){if(r==="class"&&typeof l=="string"&&e.classList===void 0){l&&n.setAttribute("class",l);continue}if(r.startsWith("on:"))n.addEventListener(r.slice(3),l);else if(r.length>2&&r.startsWith("on")&&r.charCodeAt(2)<91&&typeof l=="function"){let d=fo.get(r);d===void 0&&fo.set(r,d=r.slice(2).toLowerCase()),mi(n,d,l)}else if(r==="class"||r==="className")o??=new Bn(n),X(l,d=>o.setBase(d));else if(r==="classList"){o??=new Bn(n);for(let d of Object.keys(l))X(l[d],m=>o.setFlag(d,!!m))}else if(r==="style")hi(n,l);else if(r.startsWith("attr:")){let d=r.slice(5);X(l,m=>fn(n,d,m))}else if(r.startsWith("prop:")){let d=r.slice(5);X(l,m=>{n[d]=m})}else if(t||r.includes("-"))qs(l)?fn(n,r,l):X(l,d=>fn(n,r,d));else if(s)X(l,d=>{n[r]=d});else if(r in n&&!li.has(r)){if(qs(l)){n[r]=l===null?"":l,(l===null||l===!1)&&n.removeAttribute(r);continue}X(l,d=>{n[r]=d??"",(d==null||d===!1)&&n.removeAttribute(r)})}else qs(l)?fn(n,r,l):X(l,d=>fn(n,r,d))}}}function fn(n,e,t){typeof t=="boolean"&&e.startsWith("aria-")?n.setAttribute(e,String(t)):t==null||t===!1?n.removeAttribute(e):n.setAttribute(e,t===!0?"":String(t))}var Bn=class{constructor(e){this.el=e}#e="";#t=new Map;setBase(e){this.#e=e??"",this.#a()}setFlag(e,t){this.#t.set(e,t),this.#a()}#a(){let e=this.#e;for(let[t,s]of this.#t)s&&(e=e?`${e} ${t}`:t);e?this.el.setAttribute("class",e):this.el.removeAttribute("class")}};function hi(n,e){if(typeof e=="string"||ze(e)){X(e,s=>{s?n.setAttribute("style",s):n.removeAttribute("style")});return}let t=e;for(let s of Object.keys(t)){let a=s.startsWith("--")||s.includes("-")?s:fi(s),o=!a.startsWith("--")&&!ui.has(a);X(t[s],r=>{r==null||r===""?n.style.removeProperty(a):n.style.setProperty(a,typeof r=="number"&&o&&r!==0?`${r}px`:String(r))})}}var ui=new Set(["opacity","z-index","flex","flex-grow","flex-shrink","order","line-height","font-weight","zoom","aspect-ratio","scale","fill-opacity","stroke-opacity","stroke-width","grid-row","grid-column","tab-size","orphans","widows","columns","column-count"]);function fi(n){return n.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function Us(n,e,t){xo(e);let s=t?t.child():new un,a=document.createComment(""),o=document.createComment(""),r=document.createDocumentFragment();return r.append(a),Re(s,()=>Oe(r,n(),null)),r.append(o),e.appendChild(r),()=>{s.dispose(),jn(a,o),a.remove(),o.remove()}}function Vn(n,e){if(typeof n.animate!="function"||!n.isConnected||globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches)return;let t=getComputedStyle(n),s=t.getPropertyValue("--msp-ease-reveal").trim()||"ease";if(e==="fade"){let r=wo(t.getPropertyValue("--msp-motion-fade"))||360;return n.animate([{opacity:1},{opacity:0}],{duration:r,easing:s,fill:"forwards"})}let a=wo(t.getPropertyValue("--msp-motion-base"))||220,o=e==="side"?[{opacity:1,translate:"0 0"},{opacity:0,translate:"12px 0"}]:[{height:`${n.getBoundingClientRect().height}px`,opacity:1,overflow:"clip"},{height:"0px",paddingBlock:"0px",marginBlock:"0px",opacity:0,overflow:"clip"}];return n.animate(o,{duration:a,easing:s,fill:"forwards"})}function ko(n,e){let t=n?.startViewTransition;if(!n?.isConnected||typeof t!="function"||globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches){e();return}t.call(n,e)}function wo(n){let e=n.trim(),t=Number.parseFloat(e);return e.endsWith("ms")?t:e.endsWith("s")?t*1e3:t}function vi(n){return ze(n)??qa(n)}function gi(n){let e=document.createDocumentFragment();return Ks(e,n,null,!0),e}function P(n){let e=!0,t=!1,s=[],a,o,r=(l,d)=>()=>{let m=n.children(l);if(s=Zs(m),d)for(let p of s)p.setAttribute("data-reveal",n.reveal===!0?"":String(n.reveal));return m};return gi(new Va(l=>{let d,m=!0,p=vi(n.when).pipe(Wa()).subscribe(c=>{if(d)for(let T of d)T.cancel();d=void 0;let h=t,u=!e&&!h&&!!c,g=!e&&h&&!c;e=!1,t=!!c;let v=m;if(m=!1,c){if(!(h&&o&&(Object.is(c,a)||v&&Bt(c,a)))&&(a=c,o=r(c,!!n.reveal&&u),h&&n.swap)){let C=o;ko(n.swap(),()=>{o===C&&l.next(C)});return}l.next(o);return}a=o=void 0;let b=n.reveal===!0?"grow":n.reveal,k=g&&b?s.map(T=>Vn(T,b)):[];if(k.length===0||k.some(T=>!T)){l.next(n.fallback??null);return}let E=k;d=E;for(let T of s)Ys(T,!0);Promise.all(E.map(T=>T.finished)).then(()=>{d!==E||l.closed||(d=void 0,l.next(n.fallback??null))},()=>{})});return()=>{if(p.unsubscribe(),d)for(let c of d)c.cancel()}}))}function Ys(n,e){n.toggleAttribute("inert",e)}function ct(n,e){let t=he("activity"),s=t.child();s.follow(n);let a=Re(s,e),o=Zs(a),r=ze(n);if(r)o.length>0&&t.own(r.subscribe(l=>{for(let d of o)Ys(d,!l)}));else if(!n)for(let l of o)Ys(l,!0);return a}function Zs(n){return n instanceof Element?[n]:n instanceof DocumentFragment?[...n.children]:Array.isArray(n)?n.flatMap(e=>Zs(e)):[]}var bi=12,So=64,Rt=0,_s=0,Xs=new Set,Qs=!1,Mo="auto";function yi(){return Mo!=="auto"?Mo:typeof document<"u"&&!/jsdom/i.test(globalThis.navigator?.userAgent??"")}function qn(){return yi()?(Rt===0&&(Rt=performance.now()+bi,_s=0,queueMicrotask(()=>{Rt=0})),++_s<=So||performance.now()<Rt):!0}function Wn(n){Xs.add(n),!Qs&&(Qs=!0,ja.setImmediate(xi))}function xi(){Qs=!1,Rt=0;let n=[...Xs];Xs.clear();for(let e of n)wi()?Wn(e):e()}function wi(){return Rt!==0&&_s>So&&performance.now()>=Rt}function te(n){let e=he("For"),t=n.by??n.key??(C=>C),s=document.createComment("for"),a=document.createComment("/for"),o=document.createDocumentFragment();o.append(s,a);let r=new Map,l,d=!1,m=n.children.length>1,p=(C,I,H)=>{let V=e.child(),R=m?O(H):void 0,q=document.createDocumentFragment();Re(V,()=>Oe(q,n.children(I,R?.asReadonly),null));let M,S;return q.childNodes.length===1&&q.firstChild.nodeType===Node.ELEMENT_NODE?M=S=q.firstChild:(M=document.createComment(""),S=document.createComment(""),q.insertBefore(M,q.firstChild),q.appendChild(S)),{key:C,item:I,scope:V,index:R,first:M,last:S,pos:-1}},c=C=>{let I=[C.first],H=C.first;for(;H!==C.last&&(H=H.nextSibling);)I.push(H);return I},h=C=>{C.scope.dispose();for(let I of c(C))I.parentNode?.removeChild(I)},u=[],g=!1,v=!1;Q(()=>{v=!0});let b=()=>{g||(g=!0,Wn(()=>{g=!1,!v&&e.active&&T(u)}))},k=[],E=C=>{let I=C.length;if(I===0||I!==k.length)return!1;for(let H=0;H<I;H++)if(k[H].item!==C[H])return!1;return!0},T=C=>{if(u=C,E(C))return;let I=a.parentNode;if(C.length===0&&r.size>0){for(let w of r.values())w.scope.dispose();r=new Map;let S=document.createRange();S.setStartAfter(s),S.setEndBefore(a),S.deleteContents()}let H=new Map,V=[],R=!1;for(let S=0;S<C.length;S++){let w=C[S],F=t(w);if(H.has(F)){d||(d=!0,console.warn("For: duplicate key; later items with the same key are not rendered.",F));continue}let $=r.get(F);if($&&$.item!==w&&(h($),$=void 0),!$){if(!qn()){R=!0;continue}$=p(F,w,S)}$.index?.set(S),H.set(F,$),V.push($)}for(let[S,w]of r)H.has(S)||h(w);r=H;let q=ki(V),M=a;for(let S=V.length-1;S>=0;S--){let w=V[S];if(!q[S]||w.last.parentNode!==I)for(let F of c(w))I.insertBefore(F,M);M=w.first}for(let S=0;S<V.length;S++)V[S].pos=S;if(k=R?[]:V,V.length===0&&n.fallback&&!l){l=e.child();let S=document.createDocumentFragment();Re(l,()=>Oe(S,n.fallback(),null)),I.insertBefore(S,a)}else V.length>0&&l&&(l.dispose(),l=void 0,jn(s,V[0].first));R&&b()};return X(n.each,T),o}function ki(n){let e=n.length,t=new Array(e).fill(!1),s=!0;for(let r=0,l=-1;r<e;r++){let d=n[r].pos;if(!(d<0)){if(d<l){s=!1;break}l=d}}if(s){for(let r=0;r<e;r++)t[r]=n[r].pos>=0;return t}let a=[],o=new Int32Array(e).fill(-1);for(let r=0;r<e;r++){let l=n[r].pos;if(l<0)continue;let d=0,m=a.length;for(;d<m;){let p=d+m>>1;n[a[p]].pos<l?d=p+1:m=p}d>0&&(o[r]=a[d-1]),a[d]=r}for(let r=a.length?a[a.length-1]:-1;r>=0;r=o[r])t[r]=!0;return t}function mp(n){return{mount:(e,t,s)=>Us(()=>n({ctx:t}),e,s)}}var Mi="@layer msp.reset, msp.theme, msp.components, msp.overrides;",ta=new Map,qt=new Set,Js=new Map,Kn=new Map,ea=!1;function Si(){ea||(ea=!0,queueMicrotask(()=>{ea=!1;for(let n of qt)n()}))}function W(n,e){ta.get(n)!==e&&(ta.set(n,e),qt.size&&Si())}function Co(){return[Mi,...ta.values()].join(`
`)}function up(n=document){let e=Kn.get(n);if(e){e.users++;return}let t=To(n)?n:n.ownerDocument,s=t.defaultView,a;if(s&&"adoptedStyleSheets"in n&&typeof s.CSSStyleSheet?.prototype.replaceSync=="function"){let o=Js.get(t);if(!o){let l=new s.CSSStyleSheet,d=()=>l.replaceSync(Co());d(),o={sheet:l,update:d,users:0},Js.set(t,o),qt.add(d)}let r=o;r.users++,n.adoptedStyleSheets=[...n.adoptedStyleSheets,r.sheet],a=()=>{n.adoptedStyleSheets=n.adoptedStyleSheets.filter(l=>l!==r.sheet),!(--r.users>0)&&(Js.delete(t),qt.delete(r.update))}}else{let o=t.createElement("style");o.setAttribute("data-msp-styles",""),To(n)?n.head.appendChild(o):n.prepend(o);let r=()=>{o.textContent=Co()};r(),qt.add(r),a=()=>{o.remove(),qt.delete(r)}}Kn.set(n,{users:1,remove:a})}function fp(n){let e=Kn.get(n);!e||--e.users>0||(e.remove(),Kn.delete(n))}function To(n){return n.nodeType===9}var na={icon:"msp-icon-icon"};W("components/icon/icon.module.css",`@layer msp.components {
.msp-icon-icon {
  flex-shrink: 0;
}
}
`);var Ro={"align-left":'<path d="M21 5H3"/><path d="M15 12H3"/><path d="M17 19H3"/>',"app-window":'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M10 4v4"/><path d="M2 8h20"/><path d="M6 4v4"/>',"arrow-down":'<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',"arrow-up":'<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',"axis-3d":'<path d="M13.5 10.5 15 9"/><path d="M4 4v15a1 1 0 0 0 1 1h15"/><path d="M4.293 19.707 6 18"/><path d="m9 15 1.5-1.5"/>',ban:'<circle cx="12" cy="12" r="10"/><path d="M4.929 4.929 19.07 19.071"/>',"book-open":'<path d="M12 5v16"/><path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"/>',bot:'<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',box:'<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',camera:'<path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/>',"chart-gantt":'<path d="M10 6h8"/><path d="M12 16h6"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M8 11h7"/>',check:'<path d="M20 6 9 17l-5-5"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',"chevron-up":'<path d="m18 15-6-6-6 6"/>',"chevrons-left":'<path d="m11 17-5-5 5-5"/><path d="m18 17-5-5 5-5"/>',"chevrons-right":'<path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/>',"circle-alert":'<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',"circle-check":'<circle cx="12" cy="12" r="10"/><path d="m16 9-5.5 5.5L8 12"/>',"circle-help":'<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',clapperboard:'<path d="m12.296 3.464 3.02 3.956"/><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z"/><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="m6.18 5.276 3.1 3.899"/>',clipboard:'<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',cloud:'<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',"cloud-upload":'<path d="M12 13v8"/><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m8 17 4-4 4 4"/>',command:'<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/>',copy:'<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',crop:'<path d="M6 2v14a2 2 0 0 0 2 2h14"/><path d="M18 22V8a2 2 0 0 0-2-2H2"/>',crosshair:'<circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/>',download:'<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',ellipsis:'<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',"ellipsis-vertical":'<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>',eye:'<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',"eye-off":'<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/>',file:'<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/>',"file-code":'<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 12.5 8 15l2 2.5"/><path d="m14 12.5 2 2.5-2 2.5"/>',film:'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/>',focus:'<circle cx="12" cy="12" r="3"/><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/>',"folder-open":'<path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/>',fullscreen:'<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><rect width="10" height="8" x="7" y="8" rx="1"/>',gauge:'<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',glasses:'<circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"/><path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2"/><path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2"/>',"grip-vertical":'<circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>',history:'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',hourglass:'<path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>',house:'<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',image:'<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',images:'<path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"/><path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"/><circle cx="13" cy="7" r="1" fill="currentColor"/><rect x="8" y="2" width="14" height="14" rx="2"/>',info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',keyboard:'<path d="M10 8h.01"/><path d="M12 12h.01"/><path d="M14 8h.01"/><path d="M16 12h.01"/><path d="M18 8h.01"/><path d="M6 8h.01"/><path d="M7 16h10"/><path d="M8 12h.01"/><rect width="20" height="16" x="2" y="4" rx="2"/>',layers:'<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',lightbulb:'<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',list:'<path d="M3 5h.01"/><path d="M3 12h.01"/><path d="M3 19h.01"/><path d="M8 5h13"/><path d="M8 12h13"/><path d="M8 19h13"/>',"list-restart":'<path d="M21 5H3"/><path d="M7 12H3"/><path d="M7 19H3"/><path d="M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"/><path d="M11 10v4h4"/>',"list-tree":'<path d="M8 5h13"/><path d="M13 12h8"/><path d="M13 19h8"/><path d="M3 10a2 2 0 0 0 2 2h3"/><path d="M3 5v12a2 2 0 0 0 2 2h3"/>',"loader-circle":'<path d="M21 12a9 9 0 1 1-6.219-8.56"/>',locate:'<line x1="2" x2="5" y1="12" y2="12"/><line x1="19" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="5"/><line x1="12" x2="12" y1="19" y2="22"/><circle cx="12" cy="12" r="7"/>',maximize:'<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>',"maximize-2":'<path d="M15 3h6v6"/><path d="m21 3-7 7"/><path d="m3 21 7-7"/><path d="M9 21H3v-6"/>',minimize:'<path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/><path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/>',minus:'<path d="M5 12h14"/>',"monitor-cog":'<path d="M12 17v4"/><path d="m14.305 7.53.923-.382"/><path d="m15.228 4.852-.923-.383"/><path d="m16.852 3.228-.383-.924"/><path d="m16.852 8.772-.383.923"/><path d="m19.148 3.228.383-.924"/><path d="m19.53 9.696-.382-.924"/><path d="m20.772 4.852.924-.383"/><path d="m20.772 7.148.924.383"/><path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><path d="M8 21h8"/><circle cx="18" cy="6" r="3"/>',moon:'<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>',"mouse-pointer-2":'<path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"/>',"mouse-pointer-click":'<path d="M14 4.1 12 6"/><path d="m5.1 8-2.9-.8"/><path d="m6 12-1.9 2"/><path d="M7.2 2.2 8 5.1"/><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"/>',"move-3d":'<path d="M5 3v16h16"/><path d="m5 19 6-6"/><path d="m2 6 3-3 3 3"/><path d="m18 16 3 3-3 3"/>',orbit:'<path d="M20.341 6.484A10 10 0 0 1 10.266 21.85"/><path d="M3.659 17.516A10 10 0 0 1 13.74 2.152"/><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/>',paintbrush:'<path d="m14.622 17.897-10.68-2.913"/><path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"/><path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"/>',palette:'<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>',"panel-bottom":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 15h18"/>',"panel-left":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>',"panel-right":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/>',"panel-top":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/>',pause:'<rect x="14" y="3" width="5" height="18" rx="1"/><rect x="5" y="3" width="5" height="18" rx="1"/>',pencil:'<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',pin:'<path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/>',play:'<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',"redo-2":'<path d="m15 14 5-5-5-5"/><path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"/>',"refresh-cw":'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',"rotate-3d":'<path d="m15.194 13.707 3.814 1.86-1.86 3.814"/><path d="M16.47214 7.52786 A 5 10 0 1 0 13 21.79796"/><path d="M21.79796 11 A 10 5 0 1 0 19 15.57071"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',ruler:'<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/>',save:'<path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/>',scan:'<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/>',"scroll-text":'<path d="M15 12h-5"/><path d="M15 8h-5"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/>',search:'<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',settings:'<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/>',shapes:'<path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"/><rect x="3" y="14" width="7" height="7" rx="1"/><circle cx="17.5" cy="17.5" r="3.5"/>',"share-2":'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',"skip-back":'<path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"/><path d="M3 20V4"/>',"skip-forward":'<path d="M21 4v16"/><path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"/>',"sliders-horizontal":'<path d="M10 5H3"/><path d="M12 19H3"/><path d="M14 3v4"/><path d="M16 17v4"/><path d="M21 12h-9"/><path d="M21 19h-5"/><path d="M21 5h-7"/><path d="M8 10v4"/><path d="M8 12H3"/>',sparkles:'<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>',square:'<rect width="18" height="18" x="3" y="3" rx="2"/>',"squares-exclude":'<path d="M16 12v2a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0"/><path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2v2"/>',"squares-intersect":'<path d="M10 22a2 2 0 0 1-2-2"/><path d="M14 2a2 2 0 0 1 2 2"/><path d="M16 22h-2"/><path d="M2 10V8"/><path d="M2 4a2 2 0 0 1 2-2"/><path d="M20 8a2 2 0 0 1 2 2"/><path d="M22 14v2"/><path d="M22 20a2 2 0 0 1-2 2"/><path d="M4 16a2 2 0 0 1-2-2"/><path d="M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z"/><path d="M8 2h2"/>',"squares-subtract":'<path d="M10 22a2 2 0 0 1-2-2"/><path d="M16 22h-2"/><path d="M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z"/><path d="M20 8a2 2 0 0 1 2 2"/><path d="M22 14v2"/><path d="M22 20a2 2 0 0 1-2 2"/>',"squares-unite":'<path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 0 1 1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3a1 1 0 0 0-1-1z"/>',"step-back":'<path d="M13.971 4.285A2 2 0 0 1 17 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"/><path d="M21 20V4"/>',"step-forward":'<path d="M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"/><path d="M3 4v16"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',"sun-moon":'<path d="M12 2v2"/><path d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"/><path d="M16 12a4 4 0 0 0-4-4"/><path d="m19 5-1.256 1.256"/><path d="M20 12h2"/>',"swatch-book":'<path d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"/><path d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"/><path d="M 7 17h.01"/><path d="m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"/>',tag:'<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',"text-cursor-input":'<path d="M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6"/><path d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"/><path d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"/><path d="M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1"/><path d="M9 6v12"/>',"toggle-right":'<circle cx="15" cy="12" r="3"/><rect width="20" height="14" x="2" y="5" rx="7"/>',"trash-2":'<path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',"undo-2":'<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/>',upload:'<path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>',user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',"volume-2":'<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.364 18.364a9 9 0 0 0 0-12.728"/>',"volume-x":'<path d="M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z"/><path d="m16.5 14.5 5-5"/><path d="m16.5 9.5 5 5"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',"zoom-in":'<circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/>',"zoom-out":'<circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="8" x2="14" y1="11" y2="11"/>'};var Eo={"ball-and-stick":'<circle cx="5" cy="18" r="2.5"/><circle cx="12" cy="6" r="3"/><circle cx="19" cy="17" r="2.5"/><path d="m6.3 15.8 4.2-7.2"/><path d="m13.6 8.5 4 6.4"/>',cartoon:'<path d="M3 15c3-10 6-10 9 0s6 10 9 0"/><path d="M3 9c3 10 6 10 9 0s6-10 9 0"/>',ligand:'<path d="M10 7l5.2 3v6L10 19l-5.2-3v-6z"/><path d="m15.2 10 3.5-2"/><circle cx="20" cy="7" r="1.5"/>',snapshots:'<rect x="7" y="3" width="14" height="14" rx="2"/><path d="M3 7v12a2 2 0 0 0 2 2h12"/><path d="M13 6.4l2.6 1.5v3L13 12.4l-2.6-1.5v-3z"/><path d="m15.6 10.9 1.6 1"/><circle cx="18.1" cy="12.5" r="1.1"/>',"measure-distance":'<path d="M3 6v12M21 6v12M3 12h18M7 9l-4 3 4 3M17 9l4 3-4 3"/>',"measure-angle":'<path d="M4 20h17M4 20 17 6M12 20a8 8 0 0 0-2.54-5.85"/>',sequence:'<rect x="2" y="9" width="5" height="8" rx="1"/><rect x="9.5" y="9" width="5" height="8" rx="1"/><rect x="17" y="9" width="5" height="8" rx="1"/><path d="M4.5 4v2M12 4v2M19.5 4v2"/>',structure:'<circle cx="12" cy="8" r="5"/><circle cx="7.5" cy="15.5" r="5"/><circle cx="16.5" cy="15.5" r="5"/>',spacefill:'<circle cx="9" cy="10" r="6"/><circle cx="16" cy="15" r="5"/>',surface:'<path d="M12 3c3 0 4 2 7 3s3 4 2 7-1 5-4 6-5 3-8 2-6-3-6-6 0-5 2-7 4-5 7-5z"/><path d="M9 11.5c1.5-2 4-2 6 0"/>',superpose:'<path d="M9.5 3.5l5.63 3.25v6.5L9.5 16.5l-5.63-3.25v-6.5z"/><path d="M14.5 7.5l5.63 3.25v6.5L14.5 20.5l-5.63-3.25v-6.5z"/>',trajectory:'<rect x="3" y="10" width="12" height="11" rx="2"/><path d="M6 7h10a2 2 0 0 1 2 2v9"/><path d="M9 4h10a2 2 0 0 1 2 2v9"/>',volume:'<path d="M12 2.5l8.5 4.75v9.5L12 21.5l-8.5-4.75v-9.5z"/><path d="M8.5 12.5c0-2.5 2-4 3.5-4s3.5 1.5 3.5 4-1.5 3-3.5 3-3.5-.5-3.5-3z"/>',prism:'<path stroke-linejoin="miter" d="M12 3 21.5 19.5h-19z"/><path stroke-width="2.6" stroke-linejoin="miter" d="M12 11.2 14.6 15.7H9.4z"/>',molstar:'<path stroke-linejoin="miter" d="M9.7 1.4h4.6v5.05l3.57-3.57 3.25 3.25-3.57 3.57h5.05v4.6h-5.05l3.57 3.57-3.25 3.25-3.57-3.57v5.05H9.7v-5.05l-3.57 3.57-3.25-3.25 3.57-3.57H1.4V9.7h5.05L2.88 6.13l3.25-3.25 3.57 3.57z"/>',"pick-atom":'<circle cx="12" cy="12" r="4"/>',"pick-residue":'<path d="M12 4.5l6.5 3.75v7.5L12 19.5l-6.5-3.75v-7.5z"/>',"pick-chain":'<circle cx="5" cy="15" r="2.5"/><circle cx="12" cy="9" r="2.5"/><circle cx="19" cy="15" r="2.5"/><path d="m7 13.3 3-2.6M14 10.7l3 2.6"/>',"pick-entity":'<circle cx="6" cy="8" r="2"/><circle cx="12" cy="8" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="6" cy="16" r="2"/><circle cx="12" cy="16" r="2"/><circle cx="18" cy="16" r="2"/>',"pick-model":'<rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3"/>'};var Ci="http://www.w3.org/2000/svg",Ti=18,Ri={...Ro,...Eo},Po=new Map;function Ei(n){let e=Po.get(n);if(e)return e;let t=Ri[n];if(t===void 0)throw new Error(`Unknown icon "${n}"`);return e=document.createElementNS(Ci,"svg"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.setAttribute("stroke","currentColor"),e.setAttribute("stroke-width","2"),e.setAttribute("stroke-linecap","round"),e.setAttribute("stroke-linejoin","round"),e.setAttribute("focusable","false"),e.innerHTML=t,Po.set(n,e),e}function z(n){let e=Ei(n.name).cloneNode(!0),t=String(n.size??Ti);return e.setAttribute("width",t),e.setAttribute("height",t),e.setAttribute("class",n.class?`${na.icon} ${n.class}`:na.icon),n.label!==void 0?(e.setAttribute("role","img"),e.setAttribute("aria-label",n.label)):e.setAttribute("aria-hidden","true"),e}function i(n,e,t){return bo(n,e)}var y=i;function B(n,e,t,s){let a=he("on"),o=!1,r=!1,l=t,d=p=>{r||p===o||(o=p,p?n.addEventListener(e,l,s):n.removeEventListener(e,l,s))};a.onActive(d);let m=()=>{d(!1),r=!0};return a.onCleanup(m),m}function Ee(n,e){if(typeof ResizeObserver>"u")return;let t=new ResizeObserver(e);return n&&t.observe(n),he("observeResize").onCleanup(()=>t.disconnect()),t}function Lo(n,e,t){if(typeof IntersectionObserver>"u")return;let s=new IntersectionObserver(e,t);return s.observe(n),he("observeIntersection").onCleanup(()=>s.disconnect()),s}function Gn(n){let e=he("frame"),t=!1,s=0,a=!1,o=!1,r=d=>{if(!(t||e.disposed)){if(!e.active){a=!0,o||(o=!0,e.onActive(m=>{!m||!a||t||(a=!1,s=Ne(r))}));return}t=!0,n(d)}};s=Ne(r);let l=()=>{t||(t=!0,it(s))};return e.onCleanup(l),l}function Ap(n,e){let t=setTimeout(n,e),s=()=>clearTimeout(t);return he("timeout").onCleanup(s),s}function Wt(n){let e=he("restartable"),t,s=0,a=!1,o=()=>{clearTimeout(t),t=setTimeout(()=>{t=void 0,a=!1,n()},s)},r=()=>{clearTimeout(t),t=void 0,a=!1};return e.onActive(l=>{l?a&&o():(clearTimeout(t),t=void 0)}),e.onCleanup(r),{start(l){s=l,a=!0,e.active&&o()},cancel:r}}function zp(n){let e=eo(n),t=he("workQueue");return t.onActive(s=>e.setActive(s)),t.onCleanup(()=>e.dispose()),e}function dt(n,e){let t=he("drag"),s,a=-1,o=(r,l)=>{if(s===void 0)return;let d=s;if(s=void 0,a>=0&&"releasePointerCapture"in n)try{n.hasPointerCapture?.(a)&&n.releasePointerCapture(a)}catch{}a=-1,e.end?.(d,r,l)};return B(n,"pointerdown",r=>{if(s!==void 0){if(r.pointerId!==a&&n.hasPointerCapture?.(a))return;o("cancel",r)}let l=e.start(r);if(l!==void 0){s=l,a=r.pointerId;try{n.setPointerCapture?.(r.pointerId)}catch{}}}),B(n,"pointermove",r=>{if(!(s===void 0||r.pointerId!==a)){if(r.buttons===0&&r.pointerType!=="touch")return o("cancel",r);e.move?.(r,s)}}),B(n,"pointerup",r=>{r.pointerId===a&&o("up",r)}),B(n,"pointercancel",r=>{r.pointerId===a&&o("cancel",r)}),B(n,"lostpointercapture",r=>{r.pointerId===a&&o("cancel",r)}),t.onActive(r=>{r||o("cancel")}),t.onCleanup(()=>o("cancel")),{get active(){return s!==void 0},cancel:()=>o("cancel")}}function Kt(n){let e=he("frames"),t=0,s=!1,a=!1,o=d=>{if(t=0,!a){if(!e.active){s=!0;return}n(d)}},r=()=>{if(!(a||t)){if(!e.active){s=!0;return}t=Ne(o)}},l=()=>{s=!1,t&&(it(t),t=0)};return e.onActive(d=>{d?s&&(s=!1,r()):t&&(it(t),t=0,s=!0)}),e.onCleanup(()=>{l(),a=!0}),{request:r,cancel:l}}var Et={apply:"msp-action-footer-apply",footer:"msp-action-footer-footer",info:"msp-action-footer-info",reset:"msp-action-footer-reset",secondary:"msp-action-footer-secondary",spin:"msp-action-footer-spin"};W("components/action-footer/action-footer.module.css",`@layer msp.components {
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
`);function Pi(n){let e=Ao(n.busy),t=f([e,Ao(n.disabled)],(r,l)=>r||l),s=he("ActionFooter"),a=r=>{if(r.key!=="Enter"||r.defaultPrevented||r.isComposing||r.altKey||r.ctrlKey||r.metaKey)return;let l=r.target;!Li(l)||t.value||(r.preventDefault(),l.dispatchEvent(new Event("change",{bubbles:!0})),queueMicrotask(()=>{t.value||n.onApply()}))},o=r=>queueMicrotask(()=>{let l=r.parentElement;l&&!s.disposed&&Re(s,()=>B(l,"keydown",a))});return y("div",{class:Et.footer,ref:r=>o(r),children:[n.onReset?i("button",{type:"button",class:Et.reset,"data-tip":"Set defaults","aria-label":"Set defaults",onClick:()=>n.onReset?.(),children:i(z,{name:"list-restart",size:15})}):null,n.info!==void 0?i("span",{class:Et.info,children:n.info}):null,n.secondary?i("button",{type:"button",class:Et.secondary,disabled:e,onClick:()=>n.secondary?.onClick(),children:i("span",{children:n.secondary.label})}):null,y("button",{type:"button",class:Et.apply,disabled:t,onClick:()=>n.onApply(),children:[i(P,{when:e,children:()=>i(z,{name:"loader-circle",size:15,class:Et.spin})}),i("span",{children:n.label})]})]})}function Li(n){return!(n instanceof HTMLInputElement)||n.getAttribute("role")==="combobox"||n.getAttribute("aria-expanded")==="true"?!1:["text","number","search","url","email","tel",""].includes(n.type)}function Ao(n){if(ot(n))return n;let e=O(!1);return Se(n??!1,t=>e.set(t)),e.asReadonly}var pt={block:"msp-button-block",button:"msp-button-button",danger:"msp-button-danger",ghost:"msp-button-ghost",icon:"msp-button-icon",iconOnly:"msp-button-iconOnly",primary:"msp-button-primary",small:"msp-button-small",tiny:"msp-button-tiny"};W("components/button/button.module.css",`@layer msp.components {
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
`);function xe(n){let e=n.variant??"default",t=n.icon!==void 0&&n.children===void 0,s=[pt.button,e!=="default"?pt[e]:"",n.size==="sm"?pt.small:n.size==="xs"?pt.tiny:"",t?pt.iconOnly:"",n.block?pt.block:"",n.class??""].filter(Boolean).join(" ");return y("button",{type:"button",class:s,"data-tip":n.title,"aria-label":t?n.title:void 0,disabled:n.disabled,"aria-pressed":n.pressed,onClick:n.onClick,children:[n.icon!==void 0?i("span",{class:pt.icon,children:n.icon}):null,n.children]})}var Un=class{constructor(e,t=Dn.getDefaultValues(e),s={}){this.params=e;this.options=s;this.#t=Dn.getDefaultValues(e),this.#e=O({...this.#t,...t},{compare:Object.is})}#e;#t;#a=new Map;#r=new Map;get values(){return this.#e.asReadonly}field(e){let t=this.#a.get(e);return t||(t=f(this.#e.asReadonly,s=>s[e]),this.#a.set(e,t)),t}visible(e){let t=this.params[e];return t.hideIf?f(this.#e.asReadonly,s=>!t.hideIf(s)):f(this.#e.asReadonly,()=>!0)}set(e,t){let s=this.#e.value;if(Object.is(s[e],t))return;let a={...s,[e]:t};this.#e.set(a),this.options.onChange?.(a,e)}load(e){this.#e.set({...this.#t,...e})}reset(){let e=this.#e.value,t={...this.#t};this.#e.set(t);for(let s of Object.keys(this.params))Dn.isParamEqual(this.params[s],e[s],t[s])||this.options.onChange?.(t,s)}layout(){let e=[],t=[];for(let s of Object.keys(this.params)){let a=this.params[s];a.isHidden||(a.isEssential?e.push(s):t.push(s))}return e.length?{essentials:e,advanced:t}:{essentials:t,advanced:[]}}fold(e,t=!1){let s=this.#r.get(e);return s||(s=O(t),this.#r.set(e,s)),s}};function zo(n){let e=t=>{let s={names:[]},a=new Map;for(let r of Object.keys(n)){let l=n[r];if(l.isHidden||l.type==="value"||!!l.isEssential!==t)continue;if(!l.category){s.names.push(r);continue}let d=a.get(l.category);d||(d={category:l.category,names:[]},a.set(l.category,d)),d.names.push(r)}let o=[...a.values()].sort((r,l)=>r.category<l.category?-1:1);return s.names.length?[s,...o]:o};return{essentials:e(!0),advanced:e(!1)}}function Je(n){return(typeof n.composedPath=="function"?n.composedPath():[])[0]??n.target}function Pe(n,e){if(!e)return!1;let t=typeof n.composedPath=="function"?n.composedPath():[];return t.length?t.includes(e):e.contains(n.target)}function mt(n){let t=n.getRootNode().activeElement??null;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t}function Ai(n){let e=n.getRootNode();return typeof ShadowRoot<"u"&&e instanceof ShadowRoot?e.host:n.closest?.(".msp-root")??n.parentElement?.closest(".msp-root")??void 0}function We(n,e){let t=Ai(n);if(!t||Pe(e,t))return!0;let s=t.ownerDocument,a=s.activeElement;return a&&a!==s.body&&a!==s.documentElement?!1:t.matches(":hover")}function Io(n){return typeof HTMLElement>"u"||!(n instanceof HTMLElement)?!1:n.isContentEditable||n instanceof HTMLTextAreaElement||n instanceof HTMLSelectElement?!0:n instanceof HTMLInputElement&&!["checkbox","radio","range","button","color"].includes(n.type)}var Gt={content:"msp-scroll-area-content",root:"msp-scroll-area-root",scrollbar:"msp-scroll-area-scrollbar",thumb:"msp-scroll-area-thumb",viewport:"msp-scroll-area-viewport"};W("components/scroll-area/scroll-area.module.css",`@layer msp.components {
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
`);var zi=16,Ii=500;function ge(n){let{class:e,contentClass:t,axis:s="y",viewportRef:a,edge:o,chain:r,fade:l=!0,children:d,...m}=n,p,c,h,u={},g=()=>{c&&(u.y&&v(u.y,c.clientHeight,c.scrollHeight,c.scrollTop),u.x&&v(u.x,c.clientWidth,c.scrollWidth,c.scrollLeft))},v=(R,q,M,S)=>{let w=M-q>1;if(w!==R.overflows&&(R.overflows=w,p.toggleAttribute(R.axis==="y"?"data-overflow-y":"data-overflow-x",w)),!w)return;let F=R.axis==="y"?R.track.clientHeight:R.track.clientWidth,$=Math.max(zi,Math.round(F*q/M));$!==R.size&&(R.size=$,R.axis==="y"?R.thumb.style.height=`${$}px`:R.thumb.style.width=`${$}px`),R.travel=F-$,R.range=M-q;let _=Math.round(R.travel*Math.min(Math.max(S,0),R.range)/R.range);_!==R.offset&&(R.offset=_,R.thumb.style.transform=R.axis==="y"?`translateY(${_}px)`:`translateX(${_}px)`)},b,k=()=>{b=void 0,p.removeAttribute("data-scrolling")},E=()=>{g(),b===void 0?p.setAttribute("data-scrolling",""):clearTimeout(b),b=setTimeout(k,Ii)},T=(R,q)=>{R.axis==="y"?c.scrollTop=q:c.scrollLeft=q},C=R=>R.axis==="y"?c.scrollTop:c.scrollLeft,I=(R,q)=>R.axis==="y"?q.clientY:q.clientX,H=R=>dt(R.track,{start:q=>{if(!(q.button!==0||!R.overflows)){if(q.preventDefault(),q.target!==R.thumb&&R.travel>0){let M=R.track.getBoundingClientRect(),S=I(R,q)-(R.axis==="y"?M.top:M.left)-R.size/2;T(R,Math.min(Math.max(S,0),R.travel)/R.travel*R.range)}return R.track.setAttribute("data-dragging",""),{start:I(R,q),scroll:C(R)}}},move:(q,M)=>{R.travel>0&&T(R,M.scroll+(I(R,q)-M.start)/R.travel*R.range)},end:()=>R.track.removeAttribute("data-dragging")}),V=R=>{let q=i("div",{class:Gt.thumb}),M=i("div",{class:Gt.scrollbar,"data-orientation":R==="y"?"vertical":"horizontal","aria-hidden":"true",onMouseDown:w=>w.preventDefault(),children:q}),S={axis:R,track:M,thumb:q,overflows:!1,size:-1,offset:-1,travel:0,range:0};return H(S),u[R]=S,M};return p=y("div",{class:`${Gt.root} ${e??""}`,"data-axis":s,"data-edge":o?"":void 0,"data-chain":r?"":void 0,"data-no-fade":l?void 0:"",children:[i("div",{class:Gt.viewport,ref:R=>{c=R,a?.(R)},onScroll:E,children:i("div",{...m,class:`${Gt.content} ${t??""}`,ref:R=>{h=R,m.ref?.(R)},children:d})}),s!=="x"?V("y"):null,s!=="y"?V("x"):null]}),Ee(c,g)?.observe(h),Q(()=>{b!==void 0&&clearTimeout(b)}),queueMicrotask(g),p}var Le={button:"msp-select-button",check:"msp-select-check",chevron:"msp-select-chevron",floating:"msp-select-floating",group:"msp-select-group",groupBody:"msp-select-groupBody",groupChevron:"msp-select-groupChevron",groupHead:"msp-select-groupHead",label:"msp-select-label",list:"msp-select-list","list-in":"msp-select-list-in",listContent:"msp-select-listContent",menuPopover:"msp-select-menuPopover",option:"msp-select-option",select:"msp-select-select"};W("components/select/select.module.css",`@layer msp.components {
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
`);function sa(n){let e=O(!1),t=Fi(n.value),s;return y("span",{class:`${Le.select} ${n.class??""}`,ref:a=>{s=a},children:[i(Yn,{label:f(t,a=>n.options.find(o=>o[0]===a)?.[1]??""),open:e,size:n.size,title:n.title,"aria-label":n["aria-label"]}),i(P,{when:e,children:()=>{let a=i(Ut,{options:n.options,value:t,onPick:o=>{e.set(!1),n.onChange?.(o)},onClose:()=>e.set(!1),floating:n.over,"aria-label":n["aria-label"]??n.title});return n.over?i(Pt,{anchor:s,children:a}):a}})]})}function Yn(n){return y("button",{type:"button",class:Le.button,"data-size":n.size??"md","aria-haspopup":"listbox","aria-expanded":n.open,"aria-label":n["aria-label"],title:n.title,onClick:()=>n.open.set(!n.open.value),children:[i("span",{class:Le.label,children:n.label}),i(z,{name:"chevron-down",size:14,class:Le.chevron})]})}function Ut(n){let e;X(n.value,c=>{e=c});let t=new Map,s=()=>[...m.querySelectorAll('[role="option"], [data-group-head]')].filter(c=>!c.closest("[hidden]")),a=c=>{let h=s();h[Math.max(0,Math.min(h.length-1,c))]?.focus()},o=([c,h])=>{let u=y("button",{type:"button",role:"option",class:Le.option,"aria-selected":f(n.value,g=>g===c),onClick:()=>n.onPick(c),children:[i("span",{children:h}),i(z,{name:"check",size:14,class:Le.check})]});return t.set(c,u),u},r=new Map,l=[];for(let c of n.options)c[2]?r.has(c[2])?r.get(c[2]).push(c):r.set(c[2],[c]):l.push(c);let d=(c,h)=>{let u=O(h.some(g=>g[0]===e));return y("div",{class:Le.group,role:"group","aria-label":c,children:[y("button",{type:"button",class:Le.groupHead,"data-group-head":"","aria-expanded":u,onClick:()=>u.set(!u.value),children:[i(z,{name:"chevron-right",size:13,class:Le.groupChevron}),i("span",{children:c})]}),i("div",{class:Le.groupBody,hidden:f(u.asReadonly,g=>!g),children:h.map(o)})]})},m=y(ge,{class:Le.list,contentClass:Le.listContent,chain:!n.floating,role:"listbox","aria-label":n["aria-label"],onKeyDown:c=>{let h=s(),u=h.indexOf(mt(m));if(c.key==="ArrowDown")a(u+1);else if(c.key==="ArrowUp")a(u-1);else if(c.key==="Home")a(0);else if(c.key==="End")a(h.length-1);else if(c.key==="Escape")n.onClose();else return;c.preventDefault(),c.stopPropagation()},children:[l.map(o),[...r].map(([c,h])=>d(c,h))]});return queueMicrotask(()=>{let c=e===void 0?void 0:t.get(e);c&&!c.closest("[hidden]")?c.focus():a(0)}),B(document,"pointerdown",c=>{let h=Je(c);Pe(c,m)||h.closest?.('[aria-haspopup="listbox"][aria-expanded="true"]')||n.onClose()},{capture:!0}),m}function Fi(n){if(ot(n))return n;let e=ze(n),t=O(e?void 0:n);return e&&Se(e,s=>t.set(s)),t.asReadonly}function Hi(n){let e,t=a=>{a.key!=="Escape"||a.defaultPrevented||(a.preventDefault(),n.onClose(!0))},s=a=>{Pe(a,e)||Pe(a,n.anchor)||n.onClose()};return B(document,"keydown",t,{capture:!0}),B(document,"pointerdown",s,{capture:!0}),i(Pt,{anchor:n.anchor,align:"end",children:i("div",{class:Le.menuPopover,role:"menu","aria-label":n["aria-label"],ref:a=>{e=a,Gn(()=>a.querySelector("button:not(:disabled)")?.focus())},children:n.children})})}function Pt(n){let e=i("div",{class:Le.floating,"attr:popover":"manual",children:n.children}),t=-1,s=()=>{let o=n.anchor.getBoundingClientRect();o.width!==t&&(t=o.width,e.style.minWidth=`${o.width}px`);let r=e.offsetHeight,l=e.offsetWidth,d=window.innerHeight-o.bottom,m=d>=r+8||d>=o.top?o.bottom+2:o.top-r-2,p=n.align==="end"?o.right-l:o.left;e.style.left=`${Math.max(8,Math.min(p,window.innerWidth-8-l))}px`,e.style.top=`${Math.max(4,m)}px`},a=o=>{Pe(o,e)||s()};return queueMicrotask(()=>{e.isConnected&&(e.showPopover?.(),s(),(e.querySelector('[aria-selected="true"]')??e.querySelector("[role=option]"))?.focus())}),B(window,"scroll",a,{capture:!0}),B(window,"resize",s),e}var Di='a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]), [contenteditable="true"]',$i='[role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"]';function Ke(n=document){let e=n.activeElement;for(;e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;if(!(!e||e===n.body||e===n.documentElement)&&!(e.shadowRoot&&!e.shadowRoot.activeElement&&e.tabIndex<0))return e}function aa(n){return[...n.querySelectorAll(Di)].filter(e=>!e.closest("[hidden], [inert]"))}function _n(n,e){if(n.key!=="Tab"||n.defaultPrevented)return;let t=aa(e);if(!t.length)return;let s=Ke(e.ownerDocument),a=!!s&&e.contains(s);n.shiftKey&&(!a||s===t[0])?(n.preventDefault(),t[t.length-1].focus()):!n.shiftKey&&(!a||s===t[t.length-1])&&(n.preventDefault(),t[0].focus())}function et(n){let e=Ke();return t=>{let s=Ke();if(s&&!(t&&t.contains(s)))return;let a=e?.isConnected?e:n?.();a?.isConnected&&a.focus({preventScroll:!0})}}function Fo(n){if(!n)return!1;try{return n.matches(":focus-visible")}catch{return Ke(n.ownerDocument)===n}}function Ho(n){return[...n.querySelectorAll($i)].filter(e=>!e.hasAttribute("disabled")&&e.getAttribute("aria-disabled")!=="true"&&!e.closest("[hidden]"))}function Lt(n,e=!1){let t=Ho(n),s=(e?t.find(a=>a.getAttribute("aria-checked")==="true"):void 0)??t[0];return s?.focus(),!!s}function ht(n){if(n.defaultPrevented)return;let e=n.currentTarget,t=Ho(e);if(!t.length)return;let s=t.indexOf(Ke(e.ownerDocument)),a=t.length,o;switch(n.key){case"ArrowDown":o=t[s<0?0:(s+1)%a];break;case"ArrowUp":o=t[s<0?a-1:(s-1+a)%a];break;case"Home":o=t[0];break;case"End":o=t[a-1];break;default:return}n.preventDefault(),o.focus()}function vn(n){let e=()=>[...n.querySelectorAll('[role="tab"]')].filter(l=>!l.closest("[hidden]")),t=()=>{let l=e(),d=Ke(n.ownerDocument),m=l.find(p=>p===d)??l.find(p=>p.getAttribute("aria-selected")==="true")??l[0];for(let p of l){let c=p===m?0:-1;p.tabIndex!==c&&(p.tabIndex=c)}},a=B(n,"keydown",l=>{if(l.defaultPrevented)return;let d=e(),m=d.indexOf(l.target);if(m<0)return;let p;switch(l.key){case"ArrowDown":case"ArrowRight":p=d[(m+1)%d.length];break;case"ArrowUp":case"ArrowLeft":p=d[(m-1+d.length)%d.length];break;case"Home":p=d[0];break;case"End":p=d[d.length-1];break;default:return}l.preventDefault(),p.focus()}),o=B(n,"focusin",t),r=new MutationObserver(t);return r.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["aria-selected"]}),t(),()=>{a(),o(),r.disconnect()}}var Ni=0;function Ge(n="msp"){return`${n}-${++Ni}`}function Xn(n,e){n.data!==e&&(n.data=e)}function Qn(n,e,t){if(t==null||t===!1){n.hasAttribute(e)&&n.removeAttribute(e);return}let s=t===!0?"":String(t);n.getAttribute(e)!==s&&n.setAttribute(e,s)}function Mm(n,e,t){n.classList.toggle(e,t)}function oa(n,e,t){let s=n.style;if(!t){s.getPropertyValue(e)&&s.removeProperty(e);return}s.getPropertyValue(e)!==t&&s.setProperty(e,t)}function Sm(n,e){let t=e?"":"none";n.style.display!==t&&(n.style.display=t)}var He={custom:"msp-color-color-picker-custom",field:"msp-color-color-picker-field",greys:"msp-color-color-picker-greys",marker:"msp-color-color-picker-marker",palette:"msp-color-color-picker-palette",picker:"msp-color-color-picker-picker",preview:"msp-color-color-picker-preview",swatch:"msp-color-color-picker-swatch",text:"msp-color-color-picker-text"};W("components/color/color-picker.module.css",`@layer msp.components {
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
`);var $o=[15026253,16214805,16762173,4630360,1222036,37119,7231183,14041247];function Do(n){let e=n>>16&255,t=n>>8&255,s=n&255,a=(Math.max(e,t,s)+Math.min(e,t,s))/510,o=Math.round(7*(1-a)),r=7-o,l=[];for(let d=o;d>0;d--)l.push(Zn(n,.9*d/o));l.push(n);for(let d=1;d<=r;d++)l.push(Zn(n,-.85*d/r));return l}function Ue(n){return`#${(n>>>0&16777215).toString(16).padStart(6,"0")}`}function ut(n){return`${n>>16&255}, ${n>>8&255}, ${n&255}`}var tt=(n,e,t)=>n<<16|e<<8|t,ft=n=>Math.max(0,Math.min(255,Math.round(n)));function Oi(n){let e=n.trim().toLowerCase();if(!e)return;let t=/^(?:#|0x)?([0-9a-f]{3}|[0-9a-f]{6})$/.exec(e);if(t){let o=t[1].length===3?t[1].replace(/./g,r=>r+r):t[1];return Number.parseInt(o,16)}let s=/^(rgba?|hsla?)?\s*\(?\s*([^()]*?)\s*\)?$/.exec(e);if(s){let o=s[2].split(/\s*[,;/\s]\s*/).filter(Boolean);if(o.length===3||o.length===4){let r=o.slice(0,3);if(r.every(l=>/^[+]?(\d+\.?\d*|\.\d+)%?$/.test(l))){if(s[1]?.startsWith("hsl"))return Bi(r);let l=r.some(c=>c.endsWith("%")),d=r.map(c=>Number.parseFloat(c)),m=!l&&d.every(c=>c<=1)&&r.some(c=>c.includes(".")),p=c=>l?c*255/100:m?c*255:c;return!l&&!m&&d.some(c=>c>255)?void 0:tt(ft(p(d[0])),ft(p(d[1])),ft(p(d[2])))}}}let a=e.replace(/[\s_-]/g,"");return Object.hasOwn(As,a)?As[a]:void 0}function Bi(n){let e=(Number.parseFloat(n[0])%360+360)%360/60,t=Math.min(1,Number.parseFloat(n[1])/100),s=Math.min(1,Number.parseFloat(n[2])/100),a=(1-Math.abs(2*s-1))*t,o=a*(1-Math.abs(e%2-1)),r=s-a/2,[l,d,m]=e<1?[a,o,0]:e<2?[o,a,0]:e<3?[0,a,o]:e<4?[0,o,a]:e<5?[o,0,a]:[a,0,o];return tt(ft((l+r)*255),ft((d+r)*255),ft((m+r)*255))}function Zn(n,e){let t=e>0?255:0,s=Math.abs(e),a=o=>{let r=n>>o&255;return Math.round(r+(t-r)*s)<<o};return a(16)|a(8)|a(0)}var Jn=.9;function ji(n){let e=n*6%6,t=e-Math.floor(e),s=ft(t*255),a=255-s;switch(Math.floor(e)){case 0:return tt(255,s,0);case 1:return tt(a,255,0);case 2:return tt(0,255,s);case 3:return tt(0,a,255);case 4:return tt(s,0,255);default:return tt(255,0,a)}}function Vi(n,e){let t=ji(Math.max(0,Math.min(1,n))),s=Math.max(0,Math.min(1,e));return s<.5?Zn(t,Jn*(1-s/.5)):Zn(t,-Jn*((s-.5)/.5))}function qi(n){let e=n>>16&255,t=n>>8&255,s=n&255,a=Math.max(e,t,s),o=Math.min(e,t,s);if(a-o<16)return{greys:!0,x:(e+t+s)/765,y:.5};let r=a-o,l=a===e?((t-s)/r+6)%6:a===t?(s-e)/r+2:(e-t)/r+4,d=(a+o)/510,m=d>=.5?.5*(1-(2*d-1)/Jn):.5+.5*(1-2*d)/Jn;return{greys:!1,x:l/6,y:Math.max(0,Math.min(1,m))}}function ra(n){let e=Wi(n.value),t=f(e,qi),s=0,a,o=O(0),r=!1,l=f(o.asReadonly,Do);X(e,p=>{s=p,r||o.set(p),a&&mt(a)!==a&&(a.value=ut(p))});let d=p=>c=>{let h=u=>{let g=c.getBoundingClientRect();n.onChange(p((u.clientX-g.left)/g.width,(u.clientY-g.top)/g.height))};dt(c,{start(u){if(u.button===0)return h(u),!0},move:h})},m=p=>{let c=p<.03?0:p>.97?255:ft(p*255);return tt(c,c,c)};return y("div",{class:He.picker,children:[i("div",{class:He.field,"aria-hidden":"true",ref:d(Vi),children:i("span",{class:He.marker,hidden:f(t,p=>p.greys),style:{left:f(t,p=>`${p.x*100}%`),top:f(t,p=>`${p.y*100}%`)}})}),i("div",{class:He.greys,"aria-hidden":"true",ref:d(p=>m(p)),children:i("span",{class:He.marker,hidden:f(t,p=>!p.greys),style:{left:f(t,p=>`${p.x*100}%`),top:"50%"}})}),i("div",{class:He.palette,role:"listbox","aria-label":"Palette",children:$o.map(p=>i("button",{type:"button",role:"option",class:He.swatch,style:{background:Ue(p)},"aria-label":ut(p),"aria-selected":f(e,c=>c===p),onClick:()=>n.onChange(p)}))}),i("div",{class:He.palette,role:"listbox","aria-label":"Weights",children:[0,1,2,3,4,5,6,7].map(p=>{let c=f(l,h=>h[p]);return i("button",{type:"button",role:"option",class:He.swatch,style:{background:f(c,Ue)},"aria-label":f(c,ut),"aria-selected":f([c,e],(h,u)=>h===u),onClick:()=>{r=!0,n.onChange(Do(o.value)[p]),r=!1}})})}),y("div",{class:He.custom,children:[i("span",{class:He.preview,style:{background:f(e,Ue)}}),i("input",{ref:p=>{a=p,p.value=ut(s)},type:"text",class:He.text,"aria-label":"Color",placeholder:"r, g, b \xB7 #hex \xB7 rgb() \xB7 name","data-tip":"r, g, b; hex, rgb(), hsl() or a name",spellcheck:!1,onInput:p=>{let c=Oi(p.currentTarget.value);c!==void 0&&n.onChange(c)},onKeyDown:p=>{p.key==="Enter"&&(p.currentTarget.value=ut(s))},onBlur:p=>{p.currentTarget.value=ut(s)}})]})]})}function Wi(n){if(ot(n))return n;let e=O(0);return Se(n,t=>e.set(t)),e.asReadonly}var j={afterSelect:"msp-params-params-form-afterSelect",channels:"msp-params-params-form-channels",chevron:"msp-params-params-form-chevron",collapsible:"msp-params-params-form-collapsible",collapsibleBar:"msp-params-params-form-collapsibleBar",collapsibleHeader:"msp-params-params-form-collapsibleHeader",collapsibleMeta:"msp-params-params-form-collapsibleMeta",color:"msp-params-params-form-color",control:"msp-params-params-form-control",count:"msp-params-params-form-count",fields:"msp-params-params-form-fields",file:"msp-params-params-form-file",fileClear:"msp-params-params-form-fileClear",fileNames:"msp-params-params-form-fileNames",filePick:"msp-params-params-form-filePick",form:"msp-params-params-form-form",input:"msp-params-params-form-input",item:"msp-params-params-form-item",itemActions:"msp-params-params-form-itemActions",itemAdd:"msp-params-params-form-itemAdd",itemForm:"msp-params-params-form-itemForm",itemLabel:"msp-params-params-form-itemLabel",itemRow:"msp-params-params-form-itemRow",items:"msp-params-params-form-items",knob:"msp-params-params-form-knob",label:"msp-params-params-form-label",mapped:"msp-params-params-form-mapped",nested:"msp-params-params-form-nested",number:"msp-params-params-form-number",presets:"msp-params-params-form-presets",presetsList:"msp-params-params-form-presetsList",range:"msp-params-params-form-range",row:"msp-params-params-form-row",select:"msp-params-params-form-select",settings:"msp-params-params-form-settings",slider:"msp-params-params-form-slider",subSettings:"msp-params-params-form-subSettings",swatch:"msp-params-params-form-swatch",switch:"msp-params-params-form-switch",textarea:"msp-params-params-form-textarea",unsupported:"msp-params-params-form-unsupported"};W("components/params/params-form.module.css",`@layer msp.components {
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
`);var re={check:"msp-params-extra-controls-check",chevron:"msp-params-extra-controls-chevron",curve:"msp-params-extra-controls-curve",field:"msp-params-extra-controls-field",fieldContent:"msp-params-extra-controls-fieldContent",graph:"msp-params-extra-controls-graph",graphArea:"msp-params-extra-controls-graphArea",graphAt:"msp-params-extra-controls-graphAt",graphEditor:"msp-params-extra-controls-graphEditor",graphFoot:"msp-params-extra-controls-graphFoot",graphHint:"msp-params-extra-controls-graphHint",grid:"msp-params-extra-controls-grid",interval:"msp-params-extra-controls-interval",intervalRange:"msp-params-extra-controls-intervalRange",intervalTrack:"msp-params-extra-controls-intervalTrack",intervalValue:"msp-params-extra-controls-intervalValue",matrix:"msp-params-extra-controls-matrix",option:"msp-params-extra-controls-option",options:"msp-params-extra-controls-options",optionsContent:"msp-params-extra-controls-optionsContent",point:"msp-params-extra-controls-point",spark:"msp-params-extra-controls-spark",strip:"msp-params-extra-controls-strip",stripName:"msp-params-extra-controls-stripName",under:"msp-params-extra-controls-under",vec:"msp-params-extra-controls-vec"};W("components/params/extra-controls.module.css",`@layer msp.components {
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
`);function Yt(n){let{open:e}=n;return y("button",{type:"button",class:j.presets,ref:t=>Oo.set(e,t),"aria-label":`${n.label} presets`,"aria-haspopup":"listbox","aria-expanded":e,onClick:t=>{t.stopPropagation(),e.set(!e.value)},children:[i(z,{name:"swatch-book",size:12}),"Presets"]})}var Oo=new WeakMap;function At(n){let{open:e}=n;return i(P,{when:e,children:()=>{let t=n.presets(),s=n.anchor?.()??Oo.get(e),a=i(Ut,{"aria-label":s?.getAttribute("aria-label")??"Presets",options:t.map(([,o],r)=>[String(r),o]),value:f(n.current,o=>o===void 0?void 0:String(o)),onPick:o=>{e.set(!1);let r=t[Number(o)];r&&n.onPick(r[0])},onClose:()=>e.set(!1),floating:!0});return s?i(Pt,{anchor:s,children:a}):i("div",{class:j.presetsList,children:a})}})}var No=(n,e)=>JSON.stringify(n)===JSON.stringify(e);function _t(n,e,t=!1){let s=n.findIndex(([a])=>t&&a&&typeof a=="object"&&e&&typeof e=="object"?Object.entries(a).every(([o,r])=>No(e[o],r)):No(a,e));return s<0?void 0:s}function ns(n){let e=O(!1);return y(fe,{children:[y("div",{class:j.row,children:[i("span",{class:j.label,children:n.head}),i("div",{class:j.control,children:n.field(e)})]}),i(P,{when:e,reveal:!0,children:()=>i("div",{class:re.under,children:n.body(()=>e.set(!1))})})]})}function ss(n){return y("button",{type:"button",class:re.field,"aria-expanded":n.open,"aria-label":n.label,onClick:()=>n.open.set(!n.open.value),children:[i("span",{class:re.fieldContent,children:n.children}),i(z,{name:"chevron-down",size:14,class:re.chevron})]})}function Bo(n){let{param:e,binding:t}=n,s=f(t.value,a=>{let o=e.options.filter(([r])=>a?.includes(r)).map(([,r])=>r);return o.length?o.join(", "):e.emptyValue??"None"});return i(ns,{head:n.head,field:a=>i(ss,{open:a,label:n.label,children:s}),body:()=>i(ge,{class:re.options,contentClass:re.optionsContent,role:"listbox","aria-multiselectable":"true","aria-label":n.label,children:e.options.map(([a,o])=>y("button",{type:"button",role:"option",class:re.option,"aria-selected":f(t.value,r=>!!r?.includes(a)),onClick:()=>{let r=t.get()??[];t.set(r.includes(a)?r.filter(l=>l!==a):[...r,a])},children:[i("span",{children:o}),i(z,{name:"check",size:14,class:re.check})]}))})})}function jo(n){let{binding:e}=n;return i("div",{class:re.vec,children:["x","y","z"].map((t,s)=>i("input",{class:j.number,"aria-label":n.label?`${n.label} ${t}`:t,"data-tip":t,value:f(e.value,a=>es(a?.[s])),onChange:a=>{let o=a.currentTarget,r=Number(o.value),l=[...e.get()??[0,0,0]];Number.isFinite(r)&&(l[s]=r,e.set(l)),o.value=es(l[s])}}))})}function es(n){return n===void 0||!Number.isFinite(n)?"":String(Math.round(n*1e4)/1e4)}function Vo(n){let{binding:e}=n,t=s=>{for(let a=0;a<16;a++)if(s[a]!==(a%5===0?1:0))return!1;return!0};return i(ns,{head:n.head,field:s=>i(ss,{open:s,label:n.label,children:f(e.value,a=>a&&t(a)?"Identity":"4 \xD7 4 matrix")}),body:()=>i("div",{class:re.matrix,children:Array.from({length:16},(s,a)=>{let o=a%4*4+Math.floor(a/4);return i("input",{class:j.number,"aria-label":`${n.label}, row ${Math.floor(a/4)+1}, column ${a%4+1}`,value:f(e.value,r=>es(r?.[o])),onChange:r=>{let l=r.currentTarget,d=Number(l.value),m=Array.from(e.get());Number.isFinite(d)&&(m[o]=d,e.set(m)),l.value=es(m[o])}})})})})}function qo(n){let{param:e,binding:t}=n,s=e.min??0,a=e.max??1,o=e.step??(a-s)/100,r=m=>`${100*(m-s)/(a-s||1)}%`,l=o<1?Math.min(4,Math.ceil(-Math.log10(o))):0,d=m=>i("input",{class:re.intervalRange,type:"range",min:String(s),max:String(a),step:String(o),"aria-label":`${n.label?`${n.label} `:""}${m===0?"from":"to"}`,value:f(t.value,p=>String(p?.[m]??(m?a:s))),onInput:p=>{let c=Number(p.currentTarget.value),h=[...t.get()??[s,a]];h[m]=m===0?Math.min(c,h[1]):Math.max(c,h[0]),t.set(h),p.currentTarget.value=String(h[m])}});return y("div",{class:re.interval,children:[y("div",{class:re.intervalTrack,style:{"--msp-from":f(t.value,m=>r(m?.[0]??s)),"--msp-to":f(t.value,m=>r(m?.[1]??a))},children:[d(0),d(1)]}),i("span",{class:re.intervalValue,children:f(t.value,m=>`${(m?.[0]??s).toFixed(l)}\u2013${(m?.[1]??a).toFixed(l)}`)})]})}function ts(n){let e=n?.colors??[];if(!e.length)return"none";let t=e.map((s,a)=>Array.isArray(s)?{color:Ue(s[0]),at:s[1]}:{color:Ue(s),at:e.length===1?0:a/(e.length-1)});if(n?.kind==="set"){let s=t.length;return`linear-gradient(90deg, ${t.map((a,o)=>`${a.color} ${100*o/s}% ${100*(o+1)/s}%`).join(", ")})`}return`linear-gradient(90deg, ${t.map(s=>`${s.color} ${100*s.at}%`).join(", ")})`}var Ki=Object.entries(Ba);function Wo(n){let{param:e,binding:t}=n,s=e.presetKind??"all",a=Ki.filter(([,r])=>s==="all"?!0:s==="set"?r.type==="qualitative":r.type!=="qualitative"),o=r=>a.find(([,l])=>JSON.stringify(l.list)===JSON.stringify(r?.colors))?.[1].label??"Custom";return i(ns,{head:n.head,field:r=>y(ss,{open:r,label:n.label,children:[i("span",{class:re.strip,style:{background:f(t.value,ts)}}),i("span",{class:re.stripName,children:f(t.value,o)})]}),body:r=>i(ge,{class:re.options,contentClass:re.optionsContent,role:"listbox","aria-label":n.label,children:a.map(([,l])=>{let d={kind:l.type==="qualitative"?"set":"interpolate",colors:l.list};return y("button",{type:"button",role:"option",class:re.option,"aria-selected":f(t.value,m=>o(m)===l.label),onClick:()=>{t.set({kind:d.kind,colors:[...d.colors]}),r()},children:[i("span",{class:re.strip,style:{background:ts(d)}}),i("span",{class:re.stripName,children:l.label}),i(z,{name:"check",size:14,class:re.check})]})})})})}function Ko(n){let{binding:e}=n;return i("input",{class:j.input,"aria-labelledby":n.labelId,placeholder:"https://\u2026",value:f(e.value,t=>t?.url??""),onChange:t=>e.set(cn.Url(t.currentTarget.value))})}function Go(n){let{binding:e}=n,t=(s,a,o)=>(s??[]).map(([r,l],d)=>`${d?"L":"M"}${(r*a).toFixed(1)} ${((1-l)*o).toFixed(1)}`).join(" ");return i(ns,{head:n.head,field:s=>y(ss,{open:s,label:n.label,children:[i("svg",{class:re.spark,viewBox:"0 0 56 14",preserveAspectRatio:"none","aria-hidden":"true",children:i("path",{d:f(e.value,a=>t(a,56,14))})}),i("span",{class:re.stripName,children:f(e.value,a=>`${a?.length??0} points`)})]}),body:()=>i(Gi,{param:n.param,binding:e,pathOf:t})})}function Gi(n){let{binding:e}=n,t=240,s=96,a=O(""),o=e.value,r=n.param.getPresets,l=O(!1),d=y("svg",{class:re.graph,viewBox:`0 0 ${t} ${s}`,preserveAspectRatio:"none",children:[[.25,.5,.75].map(c=>i("line",{class:re.grid,x1:String(c*t),x2:String(c*t),y1:"0",y2:String(s)})),[.25,.5,.75].map(c=>i("line",{class:re.grid,y1:String(c*s),y2:String(c*s),x1:"0",x2:String(t)})),i("path",{class:re.curve,d:f(e.value,c=>n.pathOf(c,t,s))}),i(te,{each:f(o,c=>(c??[]).map((h,u)=>u)),children:c=>i("circle",{class:re.point,r:"4",cx:f(o,h=>String((h?.[c]?.[0]??0)*t)),cy:f(o,h=>String((1-(h?.[c]?.[1]??0))*s)),"data-index":String(c)})})]}),m=c=>{let h=d.getBoundingClientRect(),u=Math.min(1,Math.max(0,(c.clientX-h.left)/h.width)),g=Math.min(1,Math.max(0,1-(c.clientY-h.top)/h.height));return[Math.round(u*1e3)/1e3,Math.round(g*1e3)/1e3]};return dt(d,{start(c){let h=c.target;if(h.tagName==="circle")return Number(h.dataset.index);let u=[...e.get()??[]],g=m(c),v=u.findIndex(([b])=>b>g[0]);u.splice(v<0?u.length:v,0,g),e.set(u)},move(c,h){let u=m(c),g=[...e.get()??[]],v=h>0?g[h-1][0]:0,b=h<g.length-1?g[h+1][0]:1;g[h]=[Math.min(b,Math.max(v,u[0])),u[1]],e.set(g)}}),B(d,"pointermove",c=>{let h=m(c);a.set(`${h[0].toFixed(2)}, ${h[1].toFixed(2)}`)}),B(d,"dblclick",c=>{let h=c.target;if(h.tagName!=="circle")return;let u=Number(h.dataset.index),g=[...e.get()??[]];g.length<=2||(g.splice(u,1),e.set(g))}),B(d,"pointerleave",()=>a.set("")),y("div",{class:re.graphEditor,children:[y("div",{class:re.graphArea,children:[d,i("span",{class:re.graphAt,children:a.asReadonly})]}),y("div",{class:re.graphFoot,children:[i("p",{class:re.graphHint,children:"Drag a point \xB7 click to add \xB7 double-click to remove"}),r?i(Yt,{open:l,label:"Curve"}):null]}),r?i(At,{open:l,presets:r,current:f(e.value,c=>_t(r(),c)),onPick:c=>e.set(c)}):null]})}var De={bar:"msp-params-help-bar",description:"msp-params-help-description",ends:"msp-params-help-ends",entry:"msp-params-help-entry",help:"msp-params-help-help",name:"msp-params-help-name",scale:"msp-params-help-scale",swatch:"msp-params-help-swatch",table:"msp-params-help-table",text:"msp-params-help-text",toggle:"msp-params-help-toggle"};W("components/params/help.module.css",`@layer msp.components {
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
`);function Uo(n,e){let t=a=>a&&(a.description||a.legend)?a:void 0;if(n.help){let a=n.help;return f(e,o=>{try{return t(a(o))}catch{return}},(o,r)=>o?.description===r?.description&&o?.legend===r?.legend)}let s=t({description:n.description,legend:n.legend});return s?O(s).asReadonly:void 0}function Yo(n,e,t){if(!e)return{head:i("span",{class:De.text,id:t,"data-tip-overflow":"",children:n}),block:null};let s=O(!1),a=f(e,r=>!!r);return{head:y(fe,{children:[i("span",{class:De.text,id:t,"data-tip-overflow":"","data-help":f(a,r=>r?"":void 0),onClick:r=>{r.currentTarget.hasAttribute("data-help")&&(r.stopPropagation(),s.set(!s.value))},children:n}),i(P,{when:a,children:()=>i("button",{type:"button",class:De.toggle,"aria-label":`About ${n}`,title:`About ${n}`,"aria-expanded":s,onClick:r=>{r.stopPropagation(),s.set(!s.value)},children:i(z,{name:"circle-help",size:12})})})]}),block:i(Ui,{help:e,open:s})}}function Ui(n){return i(P,{when:n.open,reveal:!0,children:()=>i(P,{when:n.help,children:e=>y("div",{class:De.help,children:[e.description?i("p",{class:De.description,children:Yi(e.description)}):null,e.legend?i(_i,{legend:e.legend}):null]})})})}function Yi(n){return n.split(/(`[^`]+`)/).map(e=>e.startsWith("`")&&e.endsWith("`")&&e.length>1?i("code",{children:e.slice(1,-1)}):e)}function _i(n){let{legend:e}=n;return e.kind==="table-legend"?i("ul",{class:De.table,children:e.table.map(([t,s])=>y("li",{class:De.entry,children:[i("span",{class:De.swatch,style:{background:Ue(s)}}),i("span",{class:De.name,children:t})]}))}):y("div",{class:De.scale,children:[i("span",{class:De.bar,style:{background:ts({kind:"interpolate",colors:e.colors})}}),y("span",{class:De.ends,children:[i("span",{children:e.minLabel}),i("span",{children:e.maxLabel})]})]})}function is(n){let{form:e}=n;return i("div",{class:j.form,children:i(Xo,{params:e.params,field:t=>({value:e.field(t),get:()=>e.values.value[t],set:s=>e.set(t,s)}),visible:t=>e.params[t].hideIf?e.visible(t):void 0,filter:Xi(n.filter),place:{form:e,path:""}})})}function bn(n){return Object.keys(n).some(e=>!n[e].isHidden&&n[e].type!=="value")}function Xo(n){let{params:e,filter:t,place:s}=n,{essentials:a,advanced:o}=zo(e),r=ia(t),l=new Map,d=u=>(l.has(u)||l.set(u,n.visible(u)),l.get(u)),m=u=>{let g=d(u);return t?g?f([g,t],(v,b)=>v&&vt(u,e[u],b)):f(t,v=>vt(u,e[u],v)):g},p=u=>{let g=u.map(m);if(!g.some(v=>!v))return f(g,(...v)=>!v.some(Boolean))},c=u=>i(ls,{name:u,param:e[u],binding:n.field(u),visible:d(u),filter:t,place:{form:s.form,path:`${s.path}/${u}`}}),h=(u,g)=>u.flatMap(v=>v.category?[i("div",{hidden:p(v.names),children:i(gn,{title:v.category,state:s.form.fold(`${s.path}#${g}${v.category}`),force:r,children:()=>v.names.map(c)})})]:v.names.map(c));return!a.length||!o.length?i(fe,{children:h(a.length?a:o,"")}):y(fe,{children:[h(a,""),i("div",{hidden:p(o.flatMap(u=>u.names)),children:i(gn,{title:"Advanced",state:s.form.fold(`${s.path}#advanced`),force:r,children:()=>h(o,"advanced/")})})]})}function Xi(n){return n&&f(n,e=>e.trim().toLowerCase())}function ia(n){return n&&f(n,e=>e.length>0)}function Qo(n,e){return e.label||Oa(n)}function la(n,e){let t=e.trim().toLowerCase();return Object.keys(n).some(s=>!n[s].isHidden&&vt(s,n[s],t))}function vt(n,e,t){return!t||Qo(n,e).toLowerCase().includes(t)||e.description?.toLowerCase().includes(t)?!0:e.type==="group"?Object.keys(e.params).some(s=>vt(s,e.params[s],t)):e.type==="mapped"?e.select.options.some(([s])=>{let a=e.map(s);return a.type==="group"?Object.keys(a.params).some(o=>vt(o,a.params[o],t)):vt(s,a,t)}):!1}function ls(n){let{name:e,param:t,binding:s,filter:a,place:o}=n,r=Qo(e,t),l=n.visible,d=a?l?f([l,a],(v,b)=>v&&vt(e,t,b)):f(a,v=>vt(e,t,v)):l,m=d&&f(d,v=>!v),p=a&&f(a,v=>r.toLowerCase().includes(v)?"":v);if(t.type==="group")return i("div",{hidden:m,children:i(nl,{label:r,param:t,binding:s,filter:p,force:ia(a),place:o})});let c=Ge("msp-field"),{head:h,block:u}=Yo(r,Uo(t,s.value),c),g=v=>y("div",{hidden:m,children:[v,u]});if(t.type==="mapped")return g(al(t)?i(ol,{label:r,labelId:c,head:h,description:t.description,param:t,binding:s,place:o}):i(rl,{label:r,head:h,param:t,binding:s,filter:p,force:ia(a),place:o}));if(t.type==="select")return g(i(cs,{label:r,head:h,description:t.description,options:t.options,binding:s}));if(t.type==="color")return g(i(Qi,{label:r,labelId:c,head:h,description:t.description,binding:s}));if(t.type==="multi-select")return g(i(Bo,{head:h,label:r,param:t,binding:s}));if(t.type==="mat4")return g(i(Vo,{head:h,label:r,param:t,binding:s}));if(t.type==="line-graph")return g(i(Go,{head:h,label:r,param:t,binding:s}));if(t.type==="color-list")return g(i(Wo,{head:h,label:r,param:t,binding:s}));if(t.type==="object-list")return g(i(dl,{head:h,label:r,param:t,binding:s}));if(t.type==="conditioned")return g(i(il,{head:h,label:r,param:t,binding:s,place:o}));if(t.type==="script")return g(i(cl,{head:h,label:r,binding:s}));if(t.type==="converted"){let v={value:f(s.value,k=>t.fromValue(k)),get:()=>t.fromValue(s.get()),set:k=>s.set(t.toValue(k))},b={...t.converted,label:t.converted.label??r};return i(ls,{name:e,param:b,binding:v,visible:n.visible,filter:a,place:o})}return t.type==="value"?null:g(y("div",{class:j.row,children:[i("span",{class:j.label,children:h}),i("div",{class:j.control,children:Ji(t,s,c,r)})]}))}function Qi(n){let{binding:e,labelId:t}=n,s=O(!1),a,o=document.createTextNode(""),r=y(fe,{children:[y("div",{class:j.row,children:[i("span",{class:j.label,children:n.head??i("span",{id:t,children:n.label})}),i("div",{class:j.control,children:y("button",{type:"button",class:j.color,"aria-labelledby":`${t} ${t}-value`,"aria-expanded":s,onClick:()=>s.set(!s.value),children:[i("span",{class:j.swatch,ref:l=>a=l}),i("span",{class:j.channels,id:`${t}-value`,"data-tip-overflow":"",children:o})]})})]}),i(P,{when:s,reveal:!0,children:()=>i(ra,{value:e.value,onChange:l=>e.set(l)})})]});return qe([e.value],()=>{let l=e.get();oa(a,"background",Ue(l)),Xn(o,ut(l))}),r}function Zi(n){let{param:e,binding:t,labelId:s}=n,a=e.type==="file-list",o=O(!1),r=m=>{m.length&&t.set(a?m.map(p=>cn.File(p)):cn.File(m[0]))},l=i("input",{type:"file",hidden:!0,multiple:a,accept:e.accept,onChange:m=>{r([...m.currentTarget.files??[]]),m.currentTarget.value=""}}),d=f(t.value,m=>(m?Array.isArray(m)?m:[m]:[]).map(p=>p.name));return y("div",{class:j.file,"data-dragging":f(o.asReadonly,m=>m?"":void 0),children:[i("button",{type:"button",class:j.filePick,"aria-labelledby":s?`${s} ${s}-value`:void 0,onClick:()=>l.click(),onDragOver:m=>{m.preventDefault(),o.set(!0)},onDragLeave:()=>o.set(!1),onDrop:m=>{m.preventDefault(),m.stopPropagation(),o.set(!1),r([...m.dataTransfer?.files??[]])},children:i("span",{class:j.fileNames,id:s?`${s}-value`:void 0,"data-empty":f(d,m=>m.length?void 0:""),children:f(d,m=>m.length===0?a?"Select files\u2026":"Select a file\u2026":m.length===1?m[0]:`${m.length} files \xB7 ${m.join(", ")}`)})}),i(P,{when:f(d,m=>m.length>0),children:()=>i("button",{type:"button",class:j.fileClear,"aria-label":"Clear",title:"Clear",onClick:()=>t.set(null),children:i(z,{name:"x",size:13})})}),l]})}function Ji(n,e,t,s){switch(n.type){case"boolean":return i(Zo,{binding:e,labelId:t});case"number":return i(tl,{param:n,binding:e,labelId:t});case"text":return i(el,{binding:e,labelId:t,placeholder:n.placeholder,multiline:n.multiline});case"file":case"file-list":return i(Zi,{param:n,binding:e,labelId:t});case"vec3":return i(jo,{param:n,binding:e,label:s});case"interval":return i(qo,{param:n,binding:e,label:s});case"url":return i(Ko,{binding:e,labelId:t});default:return i("span",{class:j.unsupported,children:n.type})}}function el(n){let{binding:e}=n,t=n.multiline?i("textarea",{class:j.textarea,rows:3,"aria-labelledby":n.labelId,placeholder:n.placeholder,onChange:s=>e.set(s.currentTarget.value)}):i("input",{class:j.input,"aria-labelledby":n.labelId,placeholder:n.placeholder,onChange:s=>e.set(s.currentTarget.value)});return qe([e.value],()=>os(t,e.get())),t}function os(n,e){let t=e==null?"":String(e);n.value!==t&&(n.value=t)}function Zo(n){let{binding:e}=n,t=i("button",{type:"button",role:"switch",class:j.switch,"aria-labelledby":n.labelId,onClick:()=>e.set(!e.get()),children:i("span",{class:j.knob})});return qe([e.value],()=>Qn(t,"aria-checked",String(!!e.get()))),t}function tl(n){let{param:e,binding:t,labelId:s}=n;if(e.min===void 0||e.max===void 0){let p=i("input",{class:j.input,type:"text",inputMode:"decimal","aria-labelledby":s,onChange:c=>{let h=_o(c.currentTarget.value);Number.isFinite(h)&&t.set(h),c.currentTarget.value=as(Number.isFinite(h)?h:t.get(),e.step)}});return qe([t.value],()=>os(p,as(t.get(),e.step))),p}let a=e.min,o=e.max,r=Xe(Number.NaN,(p,c)=>Object.is(p,c));Se(r,p=>{Number.isNaN(p)||t.set(p)});let l,d,m=y("div",{class:j.slider,children:[i("input",{class:j.range,type:"range","aria-labelledby":s,min:String(a),max:String(o),step:String(e.step??(o-a)/100),ref:p=>l=p,onInput:p=>r.offer(Number(p.currentTarget.value))}),i("input",{class:j.number,"aria-labelledby":s,ref:p=>d=p,onChange:p=>{let c=_o(p.currentTarget.value),h=Number.isFinite(c)?Math.min(o,Math.max(a,c)):t.get();Number.isFinite(c)&&t.set(h),p.currentTarget.value=as(h,e.step)}})]});return qe([t.value],()=>{let p=t.get();os(l,p),oa(l,"--msp-progress",`${100*(p-a)/(o-a||1)}%`),os(d,as(p,e.step))}),m}function as(n,e){if(!Number.isFinite(n))return"";if(e===void 0)return String(Number(n.toFixed(4)));let t=e<1?Math.min(4,Math.ceil(-Math.log10(e))):0;return n.toFixed(t)}function _o(n){let e=n.trim().replace(",",".");return e===""?Number.NaN:Number(e)}function cs(n){let{options:e,binding:t}=n,s=O(!1),a=f(t.value,l=>String(e.findIndex(d=>d[0]===l))),o=e.map(([,l,d],m)=>[String(m),l,d]),r;return y(fe,{children:[y("div",{class:j.row,children:[i("span",{class:j.label,children:n.head??n.label}),y("div",{class:j.control,ref:l=>r=l,children:[i(Yn,{size:"sm",open:s,"aria-label":n.label,label:f(a,l=>o[Number(l)]?.[1]??"")}),n.after]})]}),i(P,{when:s,children:()=>{let l=i(Ut,{options:o,value:a,onPick:d=>{s.set(!1),t.set(e[Number(d)][0])},onClose:()=>s.set(!1),floating:!0,"aria-label":n.label});return r?i(Pt,{anchor:r,children:l}):l}})]})}function nl(n){let{param:e,binding:t,filter:s,place:a}=n;if(!bn(e.params))return null;let o=e.presets,r=u=>i(rs,{params:u,binding:t,filter:s,place:a}),l=a.form.fold(`${a.path}#open`,!!e.isExpanded),d=u=>t.set({...t.get()??{},...u}),m=o?f(t.value,u=>_t(o,u,!0)):void 0;if(e.isFlat)return y(fe,{children:[o&&m?i(sl,{label:n.label,presets:o,current:m,onPick:d}):null,r(e.params)]});let p=typeof e.pivot=="string"&&e.params[e.pivot]?e.pivot:void 0;if(p&&(!o||!m)){let{[p]:u,...g}=e.params;return y(fe,{children:[r({[p]:u}),bn(g)?i(gn,{title:n.label,state:l,force:n.force,children:()=>r(g)}):null]})}if(!o||!m)return i(gn,{title:n.label,state:l,force:n.force,children:()=>r(e.params)});let c=O(!1),h=O(!1);return i(gn,{title:n.label,state:l,force:n.force,openWhen:h.asReadonly,meta:f(m,u=>u===void 0?"":o[u][1]),action:i(Yt,{open:c,label:n.label}),below:()=>i(At,{open:c,presets:()=>o,current:m,onPick:u=>{d(u),h.set(!0)}}),children:()=>r(e.params)})}function sl(n){let e=O(!1),t;return y(fe,{children:[y("div",{class:j.row,children:[i("span",{class:j.label,children:"Presets"}),i("div",{class:j.control,ref:s=>t=s,children:i(Yn,{size:"sm",open:e,"aria-label":`${n.label} presets`,label:f(n.current,s=>s===void 0?"Custom":n.presets[s][1])})})]}),i(At,{open:e,presets:()=>n.presets,current:n.current,onPick:n.onPick,anchor:()=>t})]})}function al(n){let e=n.select.options.map(t=>t[0]).sort();return e.length===2&&e[0]==="off"&&e[1]==="on"}function ol(n){let{param:e,binding:t,place:s}=n,a=f(t.value,c=>c?.name==="on"),o=s.form.fold(`${s.path}#params`),r=c=>t.set({name:c,params:Jo(e.map(c))}),l={value:a,get:()=>t.get()?.name==="on",set:c=>{r(c?"on":"off"),c||o.set(!1)}},d=e.map("on"),m=d.type==="group"&&bn(d.params),p={value:f(t.value,c=>c?.params),get:()=>t.get()?.params,set:c=>t.set({name:"on",params:c})};return y(fe,{children:[y("div",{class:j.row,children:[i("span",{class:j.label,children:n.head??i("span",{id:n.labelId,children:n.label})}),y("div",{class:j.control,children:[i(Zo,{binding:l,labelId:n.labelId}),m?i(P,{when:a,children:()=>i("button",{type:"button",class:j.settings,title:`${n.label} settings`,"aria-label":`${n.label} settings`,"aria-expanded":o,onClick:()=>o.set(!o.value),children:i(z,{name:"sliders-horizontal",size:14})})}):null]})]}),m?i(P,{when:f([a,o.asReadonly],(c,h)=>c&&h),children:()=>i("div",{class:j.subSettings,children:i(rs,{params:d.params,binding:p,place:{form:s.form,path:`${s.path}:on`}})})}):null]})}function rl(n){let{param:e,binding:t,place:s}=n,a=f(t.value,c=>c?.name),o={value:a,get:()=>t.get()?.name,set:c=>{let h=e.map(c);t.set({name:c,params:Jo(h)})}},l=f(a,c=>{if(c===void 0)return!1;let h=e.map(c);return h.type==="group"&&!h.isFlat&&bn(h.params)}),d=s.form.fold(`${s.path}#params`),m=n.force?f([d.asReadonly,n.force],(c,h)=>c||h):d.asReadonly,p=i(P,{when:l,children:()=>i("button",{type:"button",class:`${j.settings} ${j.afterSelect}`,title:`${n.label} settings`,"aria-label":`${n.label} settings`,"aria-expanded":m,onClick:()=>d.set(!d.value),children:i(z,{name:"sliders-horizontal",size:14})})});return y("div",{class:j.mapped,children:[i(cs,{label:n.label,head:n.head,options:e.select.options,binding:o,after:p}),i(P,{when:a,children:c=>{let h=e.map(c),u={value:f(t.value,v=>v?.params),get:()=>t.get()?.params,set:v=>t.set({name:c,params:v})},g={form:s.form,path:`${s.path}:${c}`};return h.type==="group"?h.isFlat?i(rs,{params:h.params,binding:u,filter:n.filter,place:g}):bn(h.params)?i(P,{when:m,reveal:!0,children:()=>i(rs,{params:h.params,binding:u,filter:n.filter,place:g,nested:!0})}):null:i(ls,{name:c,param:h,binding:u,filter:n.filter,place:g})}})]})}function rs(n){let{params:e,binding:t}=n;return i("div",{class:n.nested?j.nested:j.fields,children:i(Xo,{params:e,field:s=>({value:f(t.value,a=>a?.[s]),get:()=>t.get()?.[s],set:a=>t.set({...t.get(),[s]:a})}),visible:s=>{let a=e[s].hideIf;if(a)return f(t.value,o=>!a(o??{}))},filter:n.filter,place:n.place})})}function il(n){let{param:e,binding:t,place:s}=n,a=f(t.value,r=>String(e.conditionForValue(r))),o={value:a,get:()=>String(e.conditionForValue(t.get())),set:r=>t.set(e.conditionedValue(t.get(),r))};return y("div",{class:j.mapped,children:[i(cs,{label:n.label,head:n.head,options:e.select.options,binding:o}),i(P,{when:a,children:r=>i("div",{class:j.nested,children:i(ls,{name:r,param:e.conditionParams[r],binding:t,place:{form:s.form,path:`${s.path}:${r}`}})})})]})}var ll=[["mol-script","MolScript"],["pymol","PyMOL"],["vmd","VMD"],["jmol","Jmol"]];function cl(n){let{binding:e}=n,t=o=>({value:f(e.value,r=>r?.[o]??""),get:()=>e.get()?.[o],set:r=>e.set({...e.get(),[o]:r})}),s=t("expression"),a=Ge("msp-field");return y("div",{class:j.mapped,children:[i(cs,{label:n.label,head:n.head,options:ll,binding:t("language")}),i("div",{class:j.nested,children:y("div",{class:j.row,children:[i("span",{class:j.label,id:a,children:"Expression"}),i("div",{class:j.control,children:i("textarea",{class:j.textarea,"aria-labelledby":a,rows:3,spellcheck:!1,value:s.value,onChange:o=>s.set(o.currentTarget.value)})})]})})]})}function dl(n){let{param:e,binding:t}=n,s=e.presets,a=O(!1),o=f(t.value,l=>l??[]),r=(l,d)=>{let m=[...t.get()??[]];m[l]=d,t.set(m)};return y(fe,{children:[y("div",{class:j.row,children:[i("span",{class:j.label,children:n.head}),i("div",{class:j.control,children:i("span",{class:j.count,children:f(o,l=>l.length===1?"1 item":`${l.length} items`)})})]}),y("div",{class:j.items,children:[i(te,{each:f(o,l=>l.map((d,m)=>m)),children:l=>i(pl,{param:e,binding:t,index:l,replace:r})}),y("div",{class:j.itemActions,children:[y("button",{type:"button",class:j.itemAdd,"aria-label":`Add to ${n.label}`,onClick:()=>t.set([...t.get()??[],e.ctor()]),children:[i(z,{name:"plus",size:13}),"Add"]}),s?i(Yt,{open:a,label:n.label}):null]}),s?i(At,{open:a,presets:()=>s,current:f(t.value,l=>_t(s,l)),onPick:l=>t.set(l)}):null]})]})}function pl(n){let{param:e,binding:t,index:s}=n,a=O(!1);return y("div",{class:j.item,"data-open":f(a.asReadonly,o=>o?"":void 0),children:[y("div",{class:j.itemRow,onClick:()=>a.set(!a.value),children:[i("span",{class:j.itemLabel,children:f(t.value,o=>o?.[s]!==void 0?e.getLabel(o[s]):"")}),i("button",{type:"button",class:j.settings,title:"Edit","aria-label":"Edit","aria-expanded":a,onClick:o=>{o.stopPropagation(),a.set(!a.value)},children:i(z,{name:"sliders-horizontal",size:14})}),i("button",{type:"button",class:j.settings,title:"Remove","aria-label":"Remove",onClick:o=>{o.stopPropagation(),t.set((t.get()??[]).filter((r,l)=>l!==s))},children:i(z,{name:"x",size:13})})]}),i(P,{when:a,reveal:!0,children:()=>{let o=new Un(e.element,t.get()?.[s],{onChange:r=>n.replace(s,r)});return i("div",{class:j.itemForm,children:i(is,{form:o})})}})]})}function Jo(n){if(n.type==="group"){let e={};for(let t of Object.keys(n.params))e[t]=n.params[t].defaultValue;return e}return n.defaultValue}function gn(n){let e=n.state??O(!!n.open),t=n.openWhen;if(t){let a=t.value;Se(t,o=>{o&&!a&&e.set(!0),a=o})}let s=n.force?f([e.asReadonly,n.force],(a,o)=>a||o):e.asReadonly;return y("div",{class:j.collapsible,children:[y("div",{class:j.collapsibleBar,children:[y("button",{type:"button",class:j.collapsibleHeader,"aria-expanded":s,onClick:()=>e.set(!e.value),children:[n.title,i(z,{name:"chevron-right",size:12,class:j.chevron}),n.meta?i("span",{class:j.collapsibleMeta,children:n.meta}):null]}),n.action]}),n.below?.(),i(P,{when:s,reveal:!0,children:()=>i("div",{class:j.nested,children:n.children()})})]})}var er={input:"msp-text-input-input"};W("components/text-input/text-input.module.css",`@layer msp.components {
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
`);function yn(n){return i("input",{type:n.type??"text",class:`${er.input} ${n.class??""}`,"data-size":n.size??"md",value:n.value,placeholder:n.placeholder,"aria-label":n["aria-label"],onInput:e=>n.onInput?.(e.currentTarget.value),onKeyDown:e=>{let t=e.currentTarget;e.key==="Enter"?n.onSubmit?.(t.value):e.key==="Escape"&&n.search&&t.value&&(t.value="",n.onInput?.(""),e.preventDefault(),e.stopPropagation())}})}var ds={markdown:"msp-markdown-markdown",media:"msp-markdown-media",table:"msp-markdown-table"};W("components/markdown/markdown.module.css",`@layer msp.components {
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
`);function ca(n){let e=document.createElement("div");e.className=ds.markdown;let t={onLink:n.onLink,host:n.host},s=n.host?.media;if(s){let l=document.createElement("div");l.className=ds.media,e.appendChild(l);let d=m=>{l.replaceChildren(...m?[m]:[]),l.hidden=!m};Nn()?X(s,d):d(s.value)}let a=n.source.split(`
`),o,r;for(let l=0;l<a.length;l++){let d=a[l].trimEnd(),m=/^(#{1,4})\s+(.*)$/.exec(d),p=/^\s*[-*]\s+(.*)$/.exec(d),c=/^\s*\d+\.\s+(.*)$/.exec(d);if(!d.trim())o=r=void 0;else if(/^\s*```/.test(d)){o=r=void 0;let h=[];for(l++;l<a.length&&!/^\s*```/.test(a[l]);l++)h.push(a[l]);let u=document.createElement("pre");u.appendChild(ps("code",h.join(`
`))),e.appendChild(u)}else if(hl(a,l))o=r=void 0,l=ul(e,a,l,t)-1;else if(/^\s*([-*_])(\s*\1){2,}\s*$/.test(d))o=r=void 0,e.appendChild(document.createElement("hr"));else if(m){o=r=void 0;let h=document.createElement(`h${Math.min(6,m[1].length+2)}`);xn(h,m[2],t),e.appendChild(h)}else if(p||c){r=void 0;let h=p?"UL":"OL";(!o||o.tagName!==h)&&(o=document.createElement(p?"ul":"ol"),e.appendChild(o));let u=document.createElement("li");xn(u,(p??c)[1],t),o.appendChild(u)}else o=void 0,r?r.appendChild(document.createTextNode(" ")):(r=document.createElement("p"),e.appendChild(r)),xn(r,d.trim(),t)}return e}var ml=/^\s*\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)*\|?\s*$/;function hl(n,e){return n[e].includes("|")&&e+1<n.length&&ml.test(n[e+1])&&n[e+1].includes("-")}function tr(n){let e=n.trim();return e.startsWith("|")&&(e=e.slice(1)),e.endsWith("|")&&!e.endsWith("\\|")&&(e=e.slice(0,-1)),e.split(/(?<!\\)\|/).map(t=>t.trim().replace(/\\\|/g,"|"))}function ul(n,e,t,s){let a=tr(e[t+1]).map(c=>c.startsWith(":")&&c.endsWith(":")?"center":c.endsWith(":")?"right":""),o=document.createElement("table"),r=(c,h,u)=>{let g=document.createElement("tr"),v=tr(h);for(let b=0;b<a.length;b++){let k=document.createElement(u);a[b]&&(k.style.textAlign=a[b]),xn(k,v[b]??"",s),g.appendChild(k)}c.appendChild(g)},l=document.createElement("thead");r(l,e[t],"th"),o.appendChild(l);let d=document.createElement("tbody"),m=t+2;for(;m<e.length&&e[m].trim()&&e[m].includes("|");m++)r(d,e[m],"td");d.childNodes.length&&o.appendChild(d);let p=document.createElement("div");return p.className=ds.table,p.appendChild(o),n.appendChild(p),m}var fl=/\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`|!\[([^\]]*)\]\(([^)\s]+)\)|\[([^\]]+)\]\(([^)\s]+)\)/g;function xn(n,e,t){let s=0,a=new RegExp(fl.source,"g");for(let o=a.exec(e);o;o=a.exec(e))o.index>s&&n.appendChild(document.createTextNode(e.slice(s,o.index))),o[1]!==void 0?n.appendChild(ps("strong",o[1])):o[2]!==void 0?n.appendChild(ps("em",o[2])):o[3]!==void 0?n.appendChild(ps("code",o[3])):o[5]!==void 0?n.appendChild(gl(o[5],o[4],t)):n.appendChild(vl(o[7],o[6],t)),s=o.index+o[0].length;s<e.length&&n.appendChild(document.createTextNode(e.slice(s)))}function vl(n,e,t){let s=document.createElement("a");xn(s,e,t);let a=t.host?.link?.(n);if(a){s.href="#",s.addEventListener("click",l=>{l.preventDefault(),a("click")});let r=!1;return s.addEventListener("pointerenter",()=>{r=!0,a("enter")}),s.addEventListener("pointerleave",()=>{r=!1,a("leave")}),Nn()&&Q(()=>r&&a("leave")),s}let o=/^https?:/i.test(n);return s.href=n.startsWith("#")||o?n:"#",o?(s.target="_blank",s.rel="noopener noreferrer"):s.addEventListener("click",r=>{r.preventDefault(),t.onLink?.(n)}),s}function gl(n,e,t){let s=t.host?.image?.(n,e);if(s instanceof Node)return s;let a=document.createElement("img");return a.alt=e,typeof s=="string"?a.src=s:s?(a.hidden=!0,s.then(o=>{o&&(a.src=o,a.hidden=!1)},()=>{})):a.src=n,a}function ps(n,e){let t=document.createElement(n);return t.textContent=e,t}var se={bar:"msp-canvas-playback-bar",bare:"msp-canvas-playback-bare",card:"msp-canvas-playback-card",counter:"msp-canvas-playback-counter",deck:"msp-canvas-playback-deck",description:"msp-canvas-playback-description",descriptionContent:"msp-canvas-playback-descriptionContent",dot:"msp-canvas-playback-dot",dots:"msp-canvas-playback-dots",lead:"msp-canvas-playback-lead",list:"msp-canvas-playback-list",listIndex:"msp-canvas-playback-listIndex",listRow:"msp-canvas-playback-listRow",listRows:"msp-canvas-playback-listRows",listRowsContent:"msp-canvas-playback-listRowsContent",plain:"msp-canvas-playback-plain",position:"msp-canvas-playback-position",rowTitle:"msp-canvas-playback-rowTitle",scrubber:"msp-canvas-playback-scrubber",snapshots:"msp-canvas-playback-snapshots",time:"msp-canvas-playback-time",title:"msp-canvas-playback-title",trajectoryLabel:"msp-canvas-playback-trajectoryLabel"};W("views/canvas/playback.module.css",`@layer msp.components {
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
`);var bl=7;function yl(n){return i(P,{when:f(n.model.count,e=>e>0),children:()=>i("section",{class:n.bare?se.bare:se.card,"aria-label":"Snapshots",children:i(Cl,{model:n.model})})})}function xl(n){return i("section",{class:se.deck,"aria-label":"Playback",children:n.children})}function wl(n){return i(P,{when:f(n.model.count,e=>e>1),children:()=>i(Pl,{model:n.model,compact:n.compact})})}function kl(n){let{model:e}=n;return i(P,{when:f(e.count,t=>t>1),children:()=>{let t=O(!1);return y("div",{"data-row":!0,children:[y("div",{class:se.bar,role:"group","aria-label":"Snapshots",children:[i("span",{class:se.lead,children:i(z,{name:"snapshots",size:16})}),i("button",{type:"button",class:se.position,"aria-expanded":t,"aria-label":f(e.title,s=>s?`Snapshots: ${s}`:"Snapshots"),"data-tip":f(e.title,s=>s??"No snapshot applied"),onClick:()=>t.set(!t.value),children:f([e.index,e.count],(s,a)=>`${s<0?"\u2013":s+1} / ${a}`)}),i(xe,{variant:"ghost",size:"sm",icon:i(z,{name:"chevron-left"}),title:"Previous snapshot",onClick:()=>e.previous()}),i(ms,{playing:e.isPlaying,title:"Play snapshots",onClick:()=>e.togglePlay()}),i(xe,{variant:"ghost",size:"sm",icon:i(z,{name:"chevron-right"}),title:"Next snapshot",onClick:()=>e.next()}),n.actions?.()]}),i(P,{when:t,children:()=>i(or,{model:e,onClose:()=>t.set(!1)})})]})}})}function ar(n){return i(xe,{variant:"ghost",size:"sm",icon:i(P,{when:n.muted,fallback:()=>i(z,{name:"volume-2"}),children:()=>i(z,{name:"volume-x"})}),title:f(n.muted,e=>e?"Unmute":"Mute"),pressed:n.muted,onClick:()=>n.onClick()})}function Ml(n){return y("div",{class:se.bar,role:"group","aria-label":"Audio","data-row":!0,children:[i("span",{class:se.lead,children:i(z,{name:"volume-2",size:16})}),i("span",{class:se.rowTitle,children:"Audio"}),i(ar,{muted:n.muted,onClick:n.onToggleMute})]})}var nr=n=>(n/1e3).toFixed(1);function Sl(n){let{model:e}=n;return i(P,{when:f(e.duration,t=>t>0),children:()=>{let t=f([e.time,e.duration],(s,a)=>`${a>0?100*Math.min(s,a)/a:0}%`);return y("div",{class:se.bar,role:"group","aria-label":"Transition","data-row":!0,children:[i("span",{class:se.lead,children:i(z,{name:"film",size:16})}),i("input",{class:se.scrubber,type:"range",min:"0",max:f(e.duration,String),step:f(e.step,s=>String(Math.max(1,Math.round(s)))),value:f(e.time,s=>String(Math.round(s))),style:{"--msp-progress":t},"aria-label":"Transition time",onInput:s=>e.seek(Number(s.currentTarget.value))}),i("span",{class:se.time,children:f([e.time,e.duration],(s,a)=>`${nr(s)} / ${nr(a)} s`)}),i(xe,{variant:"ghost",size:"sm",icon:i(P,{when:e.isPlaying,fallback:()=>i(z,{name:"play"}),children:()=>i(z,{name:"square"})}),title:f(e.isPlaying,s=>s?"Stop the transition":"Play the transition"),onClick:()=>e.togglePlay()})]})}})}function Cl(n){let{model:e}=n,t=O(!1),s=f(e.count,l=>l>bl),a=O(void 0),o,r=Wt(()=>a.set(o));return Se(f([e.description,e.title],(l,d)=>l&&Tl(l,d??"")),l=>{o=l,r.start(0)}),y("div",{class:se.snapshots,children:[y("div",{class:se.bar,children:[i("span",{class:se.title,children:e.title}),i(P,{when:f(e.count,l=>l>1),children:()=>y(fe,{children:[i(P,{when:s,fallback:()=>i(Rl,{model:e}),children:()=>i("button",{type:"button",class:se.position,"aria-expanded":t,"aria-label":"Snapshots",onClick:()=>t.set(!t.value),children:f([e.index,e.count],(l,d)=>`${l+1} / ${d}`)})}),i(xe,{variant:"ghost",size:"sm",icon:i(z,{name:"chevron-left"}),title:"Previous snapshot",onClick:()=>e.previous()}),i(xe,{variant:"ghost",size:"sm",icon:i(z,{name:"chevron-right"}),title:"Next snapshot",onClick:()=>e.next()}),i(ms,{playing:e.isPlaying,title:"Play snapshots",onClick:()=>e.togglePlay()})]})})]}),i(P,{when:t,children:()=>i(or,{model:e,onClose:()=>t.set(!1)})}),i(P,{when:a.asReadonly,children:l=>i(ge,{class:se.description,contentClass:se.descriptionContent,children:i(P,{when:e.plainText??!1,fallback:()=>i(ca,{source:l,onLink:d=>e.openLink(d),host:e.markdown}),children:()=>i("p",{class:se.plain,children:l})})})})]})}function Tl(n,e){let t=/^\s*#{1,6}[ \t]+(.+?)[ \t]*#*[ \t]*(?:\r?\n|$)/.exec(n);if(!t)return n;let s=sr(t[1]),a=sr(e);return!s||!(a===s||a.startsWith(`${s} `)||a.includes(` ${s} `)||a.endsWith(` ${s}`))?n:n.slice(t[0].length).replace(/^\s+/,"")}function sr(n){return n.replace(/[[(]\s*\d+\s*\/\s*\d+\s*[\])]/g," ").replace(/[*_`~]/g,"").toLowerCase().replace(/[^\p{L}\p{N}]+/gu," ").trim()}function Rl(n){let{model:e}=n;return i("span",{class:se.dots,role:"tablist","aria-label":"Snapshots",children:i(te,{each:e.titles,children:(t,s)=>i("button",{type:"button",role:"tab",class:se.dot,"data-tip":t,"aria-label":t,"aria-selected":f([e.index,s],(a,o)=>a===o),onClick:()=>e.goTo(s.value)})})})}function or(n){let{model:e}=n,t=O(""),s=f([e.titles,t.asReadonly],(o,r)=>{let l=r.trim().toLowerCase();return o.map((d,m)=>({title:d,index:m})).filter(d=>!l||d.title.toLowerCase().includes(l))}),a=rt(e.index);return y("div",{class:se.list,children:[i(P,{when:f(e.count,o=>o>12),children:()=>i(yn,{search:!0,size:"sm","aria-label":"Filter snapshots",placeholder:"Filter",value:t,onInput:o=>t.set(o)})}),i(ge,{class:se.listRows,contentClass:se.listRowsContent,role:"listbox","aria-label":"Snapshots",children:i(te,{each:s,children:o=>y("button",{type:"button",role:"option",class:se.listRow,"aria-selected":a.key(o.index),onClick:()=>{e.goTo(o.index),n.onClose()},children:[i("span",{class:se.listIndex,children:String(o.index+1)}),i("span",{children:o.title})]})},o=>o.index)})]})}var El=new Is("models").asReadonly;function Pl(n){let{model:e}=n,t=e.unit??El,s=f(t,d=>d==="models"?"Models":"Frames"),a=f(t,d=>d==="models"?"model":"frame"),o=f(s,d=>`${d.slice(0,-1)} shown`);if(n.compact)return y("div",{class:se.bar,role:"group","aria-label":s,"data-row":!0,children:[i("span",{class:se.lead,children:i(z,{name:"trajectory",size:16})}),i("span",{class:se.trajectoryLabel,children:e.label}),i("span",{class:se.counter,children:f([e.index,e.count],(d,m)=>`${d+1} / ${m}`)}),i(ms,{playing:e.isPlaying,title:f(t,d=>`Play ${d}`),onClick:()=>e.togglePlay()})]});let r=d=>{let m=e.count.value;m>1&&e.seek(((e.index.value+d)%m+m)%m)},l=f([e.index,e.count],(d,m)=>`${m>1?100*d/(m-1):0}%`);return y("div",{class:se.bar,role:"group","aria-label":s,"data-row":!0,children:[i("span",{class:se.lead,children:i(z,{name:"trajectory",size:16})}),i("span",{class:se.trajectoryLabel,children:e.label}),i("span",{class:se.counter,children:f([e.index,e.count],(d,m)=>`${d+1} / ${m}`)}),i("input",{class:se.scrubber,type:"range",min:"0",max:f(e.count,d=>String(d-1)),value:f(e.index,String),style:{"--msp-progress":l},"aria-label":o,"aria-valuetext":f([s,e.index,e.count],(d,m,p)=>`${d.slice(0,-1)} ${m+1} of ${p}`),onInput:d=>e.seek(Number(d.currentTarget.value))}),i(xe,{variant:"ghost",size:"sm",icon:i(z,{name:"chevron-left"}),title:f(a,d=>`Previous ${d}`),onClick:()=>r(-1)}),i(ms,{playing:e.isPlaying,title:f(t,d=>`Play ${d}`),onClick:()=>e.togglePlay()}),i(xe,{variant:"ghost",size:"sm",icon:i(z,{name:"chevron-right"}),title:f(a,d=>`Next ${d}`),onClick:()=>r(1)})]})}function ms(n){let e=typeof n.title=="string"?new Is(n.title).asReadonly:n.title;return i(xe,{variant:"ghost",size:"sm",icon:i(P,{when:n.playing,fallback:()=>i(z,{name:"play"}),children:()=>i(z,{name:"pause"})}),title:f([n.playing,e],(t,s)=>t?"Pause":s),pressed:n.playing,onClick:()=>n.onClick()})}function Ye(n){let e=i("div",{class:n.class,style:"display: contents"}),t=n.renderer.mount(e,n.ctx,he("ViewHost"));return Q(t),e}var zt={body:"msp-shell-section-list-body",chevron:"msp-shell-section-list-chevron",header:"msp-shell-section-list-header",list:"msp-shell-section-list-list",section:"msp-shell-section-list-section",title:"msp-shell-section-list-title"};W("views/shell/section-list.module.css",`@layer msp.components {
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
`);function Ll(n){let{shell:e,subject:t}=n,s={shell:e,subject:t},a=e.sections(n.slot),r=f(a,p=>p.filter(c=>!c.when||c.when(s))),l=n.focus,d=p=>!!l&&(l===p||l.startsWith(`${p}/`)),m=p=>l?.startsWith(`${p}/`)?l.slice(p.length+1):void 0;return i("div",{class:zt.list,"data-flat":n.flat?"":void 0,"data-bare":n.bare?"":void 0,children:i(te,{each:r,children:p=>i(Al,{ctx:m(p.id)?{...s,focus:m(p.id)}:s,slot:n.slot,section:p,open:l?d(p.id):e.sectionOpen(n.slot,p.id)??(!n.collapsed||!!p.open),focused:d(p.id)})},p=>p.id)})}function Al(n){let{ctx:e,section:t}=n,s=O(n.open),a=O(n.open),o=O(!1),r,l,d=()=>{o.set(!0),l?.cancel(),l=void 0,a.set(!a.value);let p=!a.value&&s.value&&r?Vn(r,"grow"):void 0;if(p){l=p,e.shell.setSectionOpen(n.slot,t.id,!1),p.finished.then(()=>{l===p&&(l=void 0,s.set(!1),p.cancel())},()=>{});return}s.set(a.value),e.shell.setSectionOpen(n.slot,t.id,s.value)},m=y("section",{class:zt.section,"data-section":t.id,children:[y("button",{type:"button",class:zt.header,"aria-expanded":a,onClick:d,children:[i("span",{class:zt.title,children:t.heading??t.title}),i(z,{name:"chevron-down",size:14,class:zt.chevron})]}),i("div",{class:zt.body,ref:p=>{r=p},hidden:f(s.asReadonly,p=>!p),"data-reveal":f(o.asReadonly,p=>p?"":void 0),children:ct(s.asReadonly,()=>i(Ye,{renderer:t.render,ctx:e}))})]});return n.focused&&(e.shell.setSectionOpen(n.slot,t.id,!0),queueMicrotask(()=>m.scrollIntoView({block:"nearest"}))),m}var rr=class{constructor(e){this.target=e;this.available=typeof document<"u"&&!!document.fullscreenEnabled,this.embedded=typeof window<"u"&&window.self!==window.top,typeof document<"u"&&document.addEventListener("fullscreenchange",this.#t)}#e=O(!1);#t=()=>this.#e.set(this.#a());#a(){let e=this.target();return!e||typeof document>"u"?!1:(e.getRootNode().fullscreenElement??document.fullscreenElement)===e}get mode(){return this.embedded&&this.available?"fullscreen":"expand"}get active(){return this.#e.asReadonly}get unavailableReason(){return this.available?void 0:"Not allowed by the page Mol* is embedded in"}async toggle(){if(this.available)try{this.#a()?await document.exitFullscreen():await this.target()?.requestFullscreen()}catch(e){console.error(e)}}dispose(){typeof document<"u"&&document.removeEventListener("fullscreenchange",this.#t)}};var Xt={choice:"msp-choices-choice",group:"msp-choices-group",label:"msp-choices-label",row:"msp-choices-row",text:"msp-choices-text"};W("components/choices/choices.module.css",`@layer msp.components {
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
`);function zl(n){let{active:e}=n;return y("div",{class:Xt.group,children:[n.label?i("span",{class:Xt.label,children:n.label}):null,i("div",{class:Xt.row,role:"group","aria-label":n.label,children:n.choices.map(t=>y("button",{type:"button",class:Xt.choice,title:t.title,"aria-pressed":e&&f(e,s=>s===t.id),onClick:()=>n.onPick(t.id),children:[t.icon?i(z,{name:t.icon,size:15}):null,i("span",{class:Xt.text,"data-tip-overflow":"",children:t.label})]}))})]})}var hs={keys:"msp-context-menu-keys",menu:"msp-context-menu-menu",row:"msp-context-menu-row"};W("components/context-menu/context-menu.module.css",`@layer msp.components {
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
`);function da(n,e,t,s){let a=!1,o=()=>{},r=et(),l=()=>{a||(a=!0,o(),r(p),p.remove(),s?.())},d=v=>{Pe(v,p)||l()},m=v=>{v.key==="Escape"&&(!Pe(v,p)&&!We(n,v)||(v.preventDefault(),v.stopPropagation(),l()))},p;mo(v=>{o=v,p=i("div",{class:hs.menu,role:"menu",onKeyDown:ht,onContextMenu:b=>b.preventDefault(),children:t.map(b=>y("button",{type:"button",role:"menuitem",class:hs.row,disabled:!!b.disabled,title:b.disabled,onClick:()=>{l(),b.run()},children:[b.icon?i(z,{name:b.icon,size:15}):i("span",{}),i("span",{children:b.label}),b.shortcut?i("kbd",{class:hs.keys,children:b.shortcut}):i("span",{})]}))}),B(document,"pointerdown",d,{capture:!0}),B(document,"keydown",m,{capture:!0}),B(window,"resize",l),B(window,"scroll",l,{capture:!0})}),n.append(p);let c=p.offsetWidth,h=p.offsetHeight,u=e.x+c>window.innerWidth-4?Math.max(4,e.x-c):e.x,g=e.y+h>window.innerHeight-4?Math.max(4,e.y-h):e.y;return p.style.transform=`translate(${Math.round(u)}px, ${Math.round(g)}px)`,p.querySelector("button:not(:disabled)")?.focus({preventScroll:!0}),l}var $e={bar:"msp-legend-bar",caption:"msp-legend-caption",dot:"msp-legend-dot",ends:"msp-legend-ends",item:"msp-legend-item",label:"msp-legend-label",legend:"msp-legend-legend",line:"msp-legend-line",mark:"msp-legend-mark",none:"msp-legend-none",ramp:"msp-legend-ramp",swatch:"msp-legend-swatch",title:"msp-legend-title"};W("components/legend/legend.module.css",`@layer msp.components {
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
`);function Il(n){return`linear-gradient(to right, ${(n.stops.length>0?n.stops:[{t:0,color:"transparent"}]).map(s=>`${s.color} ${(Math.min(1,Math.max(0,s.t))*100).toFixed(1)}%`).join(", ")})`}function Fl(n){let e=n.items??[],t=n.ramps??[];return y("div",{class:n.class?`${$e.legend} ${n.class}`:$e.legend,role:"group","aria-label":"Legend",children:[i(P,{when:n.title,children:s=>i("span",{class:$e.title,children:s})}),i(te,{each:e,children:s=>y("div",{class:$e.item,children:[i("span",{class:`${$e.mark} ${$e[s.glyph??"swatch"]}`,classList:{[$e.none]:s.color===null},style:{"--legend-color":s.color??void 0},"aria-hidden":"true"}),i("span",{class:$e.label,children:s.label})]})}),i(te,{each:t,children:s=>y("div",{class:$e.ramp,children:[s.caption?i("span",{class:$e.caption,children:s.caption}):null,i("span",{class:$e.bar,style:{background:Il(s)},role:"img","aria-label":`${s.lo} to ${s.hi}`}),y("span",{class:$e.ends,children:[i("span",{children:s.lo}),i("span",{children:s.hi})]})]})})]})}var Qt={core:"msp-icon-wordmark-core",flash:"msp-icon-wordmark-flash","flash-hover":"msp-icon-wordmark-flash-hover","flash-often":"msp-icon-wordmark-flash-often","flash-rare":"msp-icon-wordmark-flash-rare","flash-reveal":"msp-icon-wordmark-flash-reveal",live:"msp-icon-wordmark-live",outline:"msp-icon-wordmark-outline",wordmark:"msp-icon-wordmark-wordmark"};W("components/icon/wordmark.module.css",`@layer msp.components {
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
`);var ir="M0.5 1.5 3.5 1.5 8.5 10.5 13.5 1.5 16.5 1.5 16.5 19.5 13.5 19.5 13.5 7.68 8.5 16.68 3.5 7.68 3.5 19.5 0.5 19.5Z",lr="M46.5 3.5 49.5 3.5 49.5 6.38 51.54 4.34 53.66 6.46 51.62 8.5 54.5 8.5 54.5 11.5 51.62 11.5 53.66 13.54 51.54 15.66 49.5 13.62 49.5 16.5 46.5 16.5 46.5 13.62 44.46 15.66 42.34 13.54 44.38 11.5 36.5 11.5 36.5 19.5 33.5 19.5 33.5 0.5 36.5 0.5 36.5 8.5 44.38 8.5 42.34 6.46 44.46 4.34 46.5 6.38Z",Hl="M57.5 3.5 68.76 10 57.5 16.5Z",Dl="M60 7.83 63.76 10 60 12.17Z",$l=72,cr=57,dr=48,pr=10,Nl="M24.5 6.5H25.5A5 5 0 0 1 30.5 11.5V14.5A5 5 0 0 1 25.5 19.5H24.5A5 5 0 0 1 19.5 14.5V11.5A5 5 0 0 1 24.5 6.5Z",Ol="M25 9.5A2.5 2.5 0 0 1 27.5 12V14A2.5 2.5 0 0 1 25 16.5A2.5 2.5 0 0 1 22.5 14V12A2.5 2.5 0 0 1 25 9.5Z",de={paths:[ir,Nl,Ol,lr],width:cr,height:22,star:{x:dr,y:pr},stroke:n=>1.5/Math.sqrt(n)},Bl=0;function mr(n){return y(fe,{children:[i("path",{d:ir}),i("rect",{x:"19.5",y:"6.5",width:"11",height:"13",rx:"5"}),i("rect",{x:"22.5",y:"9.5",width:"5",height:"7",rx:"2.5"}),i("path",{d:lr}),n.prism?i("path",{d:Hl,"data-part":"prism"}):null,n.prism?i("path",{d:Dl,class:Qt.core}):null]})}function pa(n){let e=`msp-wordmark-${++Bl}`,t=Math.max(1,Math.round(n.scale??1)),s=n.prism??!0,a=s?$l:cr,o=d=>y("svg",{class:d.class,viewBox:`-1 -1 ${a} 22`,width:a*t,height:22*t,fill:"none",stroke:d.stroke,"stroke-linejoin":"miter","aria-hidden":d.hidden?"true":void 0,children:[d.hidden?i("defs",{children:y("linearGradient",{id:e,gradientUnits:"userSpaceOnUse",x1:"0",y1:"0",x2:String(a-2),y2:"0",children:[i("stop",{offset:"0",style:{"stop-color":"var(--msp-color-brand-1)"}}),i("stop",{offset:"0.35",style:{"stop-color":"var(--msp-color-brand-2)"}}),i("stop",{offset:"0.6",style:{"stop-color":"var(--msp-color-brand-3)"}}),i("stop",{offset:"1",style:{"stop-color":"var(--msp-color-brand-4)"}})]})}):null,i(mr,{prism:s}),d.hidden?null:i("rect",{"data-part":"star",x:dr-.5,y:pr-.5,width:"1",height:"1",stroke:"none",visibility:"hidden"})]}),r=n.live?jl(e,t,a,s):void 0,l=y("span",{class:`${Qt.wordmark} ${n.class??""}`,style:{"--msp-wordmark-scale":t,"--msp-wordmark-width":a},"data-flash":n.flash??"rare","data-live":n.live?"":void 0,role:"img","aria-label":"Mol* Prism",children:[o({class:Qt.outline,stroke:"currentColor"}),o({class:Qt.flash,stroke:`url(#${e})`,hidden:!0}),r?.svg]});return r&&B(l,"pointermove",d=>{let m=l.getBoundingClientRect(),p=d.clientX-m.left,c=p/t-1;r.gradient.setAttribute("x1",String(c-14)),r.gradient.setAttribute("x2",String(c+14)),l.style.setProperty("--msp-wordmark-x",`${p}px`)}),l}function jl(n,e,t,s){let a=y("linearGradient",{id:`${n}-live`,gradientUnits:"userSpaceOnUse",x1:"13",y1:"0",x2:"41",y2:"0",children:[i("stop",{offset:"0",style:{"stop-color":"var(--msp-color-brand-1)"}}),i("stop",{offset:"0.3",style:{"stop-color":"var(--msp-color-brand-3)"}}),i("stop",{offset:"0.5",style:{"stop-color":"var(--msp-color-brand-2)"}}),i("stop",{offset:"0.7",style:{"stop-color":"var(--msp-color-brand-3)"}}),i("stop",{offset:"1",style:{"stop-color":"var(--msp-color-brand-4)"}})]});return{svg:y("svg",{class:Qt.live,viewBox:`-1 -1 ${t} 22`,width:t*e,height:22*e,fill:"none",stroke:`url(#${n}-live)`,"stroke-linejoin":"miter","aria-hidden":"true",children:[i("defs",{children:a}),i(mr,{prism:s})]}),gradient:a}}var us={canvas:"msp-shell-glass-wordmark-canvas",wordmark:"msp-shell-glass-wordmark-wordmark"};W("views/shell/glass-wordmark.module.css",`@layer msp.components {
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
`);var It=11,en=4,ue=It*en*2,hr={duration:2.4,stagger:.7},Zt={duration:.45,stagger:.12},Vl=.8,ql=3,ur=14,fr=1.4,Wl=.1,ma=140,ha=11,Jt=11,Kl=3;function Gl(n){let e=n>>>0||1;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Ul(n){let t=n-1;return 1+(1.4+1)*t*t*t+1.4*t*t}var gt=class{constructor(e=11,t=1){this.#a=[];this.#r=new Float32Array(ue);this.#n=new Float32Array(ue);this.#o=new Float32Array(ue);this.#s=new Float32Array(ue);this.#i=new Float32Array(ue);this.#m=new Float32Array(ue);this.#h=new Float32Array(ue);this.#u=new Float32Array(ue);this.#R=new Float32Array(ue);this.#E=new Float32Array(ue);this.#L=new Float32Array(ue);this.#A=new Float32Array(ue);this.#f=new Float32Array(ue);this.#p=new Float32Array(ue);this.#g=new Float32Array(ue);this.#v=new Float32Array(ue);this.#J=new Float32Array(ue);this.#j=new Float32Array(ue);this.#d=hr;this.#l="whole";this.#$=0;this.#b=0;this.#c=!1;this.#y=!1;this.#V=0;this.#N=0;this.#F=!0;this.onWhole=()=>{};this.onSnap=()=>{};this.count=ue;this.#q=0;this.#G=0;this.#x=0;this.corners=new Float32Array(ue*6);this.#e=Gl(e),this.#M=t,this.#t=de.paths.map(h=>new Path2D(h));let s=-1,a=-1,o=de.width,r=de.height,l=[],d=[];for(let h=0;h<=en;h++)for(let u=0;u<=It;u++){let g=h>0&&h<en&&u>0&&u<It;l.push(s+u/It*o+(g?(this.#e()-.5)*.7*(o/It):0)),d.push(a+h/en*r+(g?(this.#e()-.5)*.7*(r/en):0))}let m=(h,u)=>u*(It+1)+h,p=0,c=(h,u,g)=>{let v=(l[h]+l[u]+l[g])/3,b=(d[h]+d[u]+d[g])/3,k=new Path2D;k.moveTo(l[h]-v,d[h]-b),k.lineTo(l[u]-v,d[u]-b),k.lineTo(l[g]-v,d[g]-b),k.closePath(),this.#a.push(k),this.corners.set([l[h]-v,d[h]-b,l[u]-v,d[u]-b,l[g]-v,d[g]-b],p*6),this.#r[p]=v,this.#n[p]=b,p++};for(let h=0;h<en;h++)for(let u=0;u<It;u++){let[g,v,b,k]=[m(u,h),m(u+1,h),m(u,h+1),m(u+1,h+1)];this.#e()<.5?(c(g,v,k),c(g,k,b)):(c(g,v,b),c(v,k,b))}}#e;#t;#a;#r;#n;#o;#s;#i;#m;#h;#u;#R;#E;#L;#A;#f;#p;#g;#v;#J;#j;#d;#l;#$;#b;#c;#y;#V;#N;#F;#M;#w;#q;#K;#G;#x;place(e,t){t[0]=this.#r[e]+this.#o[e]+this.#f[e],t[1]=this.#n[e]+this.#s[e]+this.#p[e],t[2]=this.#i[e]+this.#g[e],t[3]=this.#r[e],t[4]=this.#n[e]}get assembled(){let e=0;for(let t=0;t<ue;t++){let s=this.#o[t],a=this.#s[t];e+=Math.sqrt(s*s+a*a)+Math.abs(this.#i[t])*6}return Math.exp(-e/ue/Kl)}get pull(){if(this.#l!=="assembling"||this.#d!==Zt)return 0;let e=Zt.duration+Zt.stagger,t=Math.min(1,(this.#b-this.#$)/e);return(1-t)*(1-t)}get resting(){return this.#F}get phase(){return this.#l}get whole(){return this.#l==="whole"}scatter(e=hr){for(let t=0;t<ue;t++){let s=this.#e()*Math.PI*2,a=(18+this.#e()*36)*this.#M;this.#R[t]=Math.cos(s)*a,this.#E[t]=Math.sin(s)*a*.7,this.#L[t]=(this.#e()*2-1)*1.6,this.#A[t]=this.#e()*e.stagger}this.#d=e,this.#c=!0,this.#S("assembling")}setPointer(e,t){this.#y=!0,this.#V=e,this.#N=t}clearPointer(){this.#y=!1}shatter(e,t){let s=this.#l==="broken";for(let a=0;a<ue;a++){let o=this.#r[a]+this.#o[a]-e,r=this.#n[a]+this.#s[a]-t,l=Math.hypot(o,r)||1,d=(26+this.#e()*34)/(1+l*.04)*this.#M,m=s?1:0;this.#m[a]=this.#m[a]*m+o/l*d+(this.#e()-.5)*6,this.#h[a]=this.#h[a]*m+r/l*d+(this.#e()-.5)*6,this.#u[a]=this.#u[a]*m+(this.#e()*2-1)*6}this.#S("broken")}hits(e,t){if(this.#l==="whole")return e>=-2&&e<=de.width+1&&t>=-2&&t<=de.height+1;for(let s=0;s<ue;s++){let a=this.#r[s]+this.#o[s]-e,o=this.#n[s]+this.#s[s]-t;if(a*a+o*o<36)return!0}return!1}#S(e){let t=this.#l==="whole";this.#l=e,this.#$=this.#b,this.#F=!1,t&&e!=="whole"&&this.onWhole(!1)}#P(){for(let e=0;e<ue;e++)this.#R[e]=this.#o[e],this.#E[e]=this.#s[e],this.#L[e]=this.#i[e],this.#A[e]=this.#e()*Zt.stagger;this.#d=Zt,this.#c=!1,this.#S("assembling")}step(e){this.#b+=e;let t=this.#b-this.#$;if(this.#k(e),this.#l==="broken"){let s=Math.exp(-ql*e);for(let a=0;a<ue;a++)this.#o[a]+=this.#m[a]*e,this.#s[a]+=this.#h[a]*e,this.#i[a]+=this.#u[a]*e,this.#m[a]*=s,this.#h[a]*=s,this.#u[a]*=s;t>=Vl&&this.#P()}else if(this.#l==="assembling"){let s=!0;for(let a=0;a<ue;a++){let o=Math.min(1,Math.max(0,(t-this.#A[a])/this.#d.duration));o<1&&(s=!1);let r=1-o,l=this.#d===Zt?1-Ul(o):r*r*r*r*r;this.#o[a]=this.#R[a]*l,this.#s[a]=this.#E[a]*l,this.#i[a]=this.#L[a]*l}s&&(this.#o.fill(0),this.#s.fill(0),this.#i.fill(0),this.#l="whole",this.onWhole(!0),this.onSnap())}}#k(e){let t=Math.min(e,.03333333333333333),s=!1;for(let a=0;a<ue;a++){let o=0,r=0,l=0;if(this.#y){let d=this.#r[a]+this.#o[a]-this.#V,m=this.#n[a]+this.#s[a]-this.#N,p=Math.sqrt(d*d+m*m);if(p<ur){let c=1-p/ur,h=c*c,u=1/(p||1);o=d*u*fr*h,r=m*u*fr*h,l=(d>=0?1:-1)*Wl*h}}this.#v[a]+=(ma*(o-this.#f[a])-ha*this.#v[a])*t,this.#J[a]+=(ma*(r-this.#p[a])-ha*this.#J[a])*t,this.#j[a]+=(ma*(l-this.#g[a])-ha*this.#j[a])*t,this.#f[a]+=this.#v[a]*t,this.#p[a]+=this.#J[a]*t,this.#g[a]+=this.#j[a]*t,(Math.abs(this.#f[a])+Math.abs(this.#p[a])>.01||Math.abs(this.#g[a])>.001||Math.abs(this.#v[a])+Math.abs(this.#J[a])>.02)&&(s=!0)}this.#F=this.#l==="whole"&&!s}draw(e,t,s,a,o,r,l,d=1){let m=this.#b-this.#$;if(this.#F){e.save(),e.translate(t,s),e.scale(a,a),e.globalAlpha=l,e.strokeStyle=o,e.lineWidth=de.stroke(a),e.lineJoin="miter";for(let h=0;h<this.#t.length;h++)e.stroke(this.#t[h]);e.restore(),e.globalAlpha=1;return}let p=this.#C(a,d,o),c=a*d;e.save(),e.lineWidth=.35,e.strokeStyle=r;for(let h=0;h<ue;h++){let u=this.#o[h]+this.#f[h],g=this.#s[h]+this.#p[h],v=this.#i[h]+this.#g[h],b=this.#l==="assembling"&&this.#c?Math.min(1,Math.max(0,(m-this.#A[h])/(this.#d.duration*.35))):1;if(b<=0)continue;let k=Math.cos(v)*c,E=Math.sin(v)*c;e.setTransform(k,E,-E,k,(t+(this.#r[h]+u)*a)*d,(s+(this.#n[h]+g)*a)*d);let T=Math.abs(this.#o[h])+Math.abs(this.#s[h])+Math.abs(this.#i[h])*6,C=Math.abs(this.#f[h])+Math.abs(this.#p[h])+Math.abs(this.#g[h])*6,I=Math.min(1,T/8+C/3)*.22*l*b;if(I>.01&&(e.globalAlpha=I,e.stroke(this.#a[h])),e.globalAlpha=l*b,p){let H=this.#G,V=this.#x;e.drawImage(p,h%Jt*H,(h/Jt|0)*V,H,V,-H/(2*c),-V/(2*c),H/c,V/c)}else{e.save(),e.clip(this.#a[h]),e.translate(-this.#r[h],-this.#n[h]),e.strokeStyle=o,e.lineWidth=de.stroke(a),e.lineJoin="miter";for(let H=0;H<this.#t.length;H++)e.stroke(this.#t[H]);e.restore()}}e.restore(),e.globalAlpha=1}#C(e,t,s){let a=e*t;if(this.#w&&this.#q===a&&this.#K===s)return this.#w;if(typeof document>"u")return;let o=this.#w??document.createElement("canvas"),r=o.getContext("2d");if(!r)return;let l=0;for(let p=0;p<this.corners.length;p++)l=Math.max(l,Math.abs(this.corners[p]));let d=de.stroke(e)/2+.5,m=Math.ceil(2*(l+d)*a);this.#G=m,this.#x=m,o.width=m*Jt,o.height=m*Math.ceil(ue/Jt),r.clearRect(0,0,o.width,o.height),r.strokeStyle=s,r.lineWidth=de.stroke(e),r.lineJoin="miter";for(let p=0;p<ue;p++){r.setTransform(a,0,0,a,p%Jt*m+m/2,(p/Jt|0)*m+m/2),r.save(),r.clip(this.#a[p]),r.translate(-this.#r[p],-this.#n[p]);for(let c=0;c<this.#t.length;c++)r.stroke(this.#t[c]);r.restore()}return r.setTransform(1,0,0,1,0,0),this.#w=o,this.#q=a,this.#K=s,o}};var Yl=.35,_l={duration:.9,stagger:.3},Xl=22;function Ql(){return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}function Zl(n){let e=Math.max(1,Math.round(n.scale??1)),t=de.width*e,s=de.height*e,a=Xl*e,o=i("canvas",{class:us.canvas,"aria-hidden":"true",style:{left:`${-a}px`,top:`${-a}px`,width:`${t+2*a}px`,height:`${s+2*a}px`}}),r=i("span",{class:n.class?`${us.wordmark} ${n.class}`:us.wordmark,style:{width:`${t}px`,height:`${s}px`},role:"img","aria-label":"Mol*",children:o}),l=o.getContext("2d"),m=Ql()||typeof Path2D!="function"||!l?void 0:new gt(23,Yl),p=a+e,c=1,h="currentColor",u="currentColor",g=()=>{if(!l)return;c=Math.min(2,globalThis.devicePixelRatio||1),o.width=Math.round((t+2*a)*c),o.height=Math.round((s+2*a)*c);let M=w=>(o.style.color=`var(${w})`,getComputedStyle(o).color),S=l.createLinearGradient(0,0,de.width-2,0);S.addColorStop(0,M("--msp-color-brand-1")),S.addColorStop(.35,M("--msp-color-brand-2")),S.addColorStop(.6,M("--msp-color-brand-3")),S.addColorStop(1,M("--msp-color-brand-4")),h=S,u=M("--msp-color-text-subtle"),o.style.color=""},v,b=()=>{if(l){if(l.setTransform(1,0,0,1,0,0),l.clearRect(0,0,o.width,o.height),l.setTransform(c,0,0,c,0,0),m){m.draw(l,p,p,e,h,u,1,c);return}l.translate(p,p),l.scale(e,e),l.strokeStyle=h,l.lineWidth=de.stroke(e),l.lineJoin="miter",v??=de.paths.map(M=>new Path2D(M));for(let M=0;M<v.length;M++)l.stroke(v[M])}},k=0,E=!0,T=!1,I=Kt(M=>{if(!E)return;if(T){if(T=!1,g(),m&&(n.assemble?.()??!0)){m.scatter(_l),H();return}b(),m&&!m.resting&&H();return}if(!m)return;let S=k?Math.min(.05,(M-k)/1e3):1/60;k=M,m.step(S),b(),m.resting?k=0:H()}),H=()=>I.request(),V=()=>{!m||!E||H()},R,q=M=>(R??=r.getBoundingClientRect(),{u:(M.clientX-R.left)/e-1,v:(M.clientY-R.top)/e-1});return m&&(B(r,"pointerenter",()=>{R=r.getBoundingClientRect()}),B(r,"pointermove",M=>{let S=q(M);m.setPointer(S.u,S.v),V()}),B(r,"pointerleave",()=>{m.clearPointer(),R=void 0,V()}),B(r,"pointerdown",M=>{let S=q(M);m.shatter(S.u,S.v),V()})),Vt(M=>{if(E=M,!M){I.cancel(),k=0;return}T=!0,H()}),Q(()=>{E=!1}),r}var Be={content:"msp-virtual-list-content",enter:"msp-virtual-list-enter",glide:"msp-virtual-list-glide",list:"msp-virtual-list-list",row:"msp-virtual-list-row",window:"msp-virtual-list-window"};W("components/virtual-list/virtual-list.module.css",`@layer msp.components {
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
`);function bt(n,e,t,s){let a=Math.ceil(2*n/e);return Math.max(s,Math.min(a,3*Math.max(1,t)))}var fs=240;function vs(n,e,t){let s=e.length-n.length;if(s<=0||n.length===0)return;let a=0;for(;a<n.length&&t(n[a])===t(e[a]);)a++;for(let o=a;o<n.length;o++)if(t(n[o])!==t(e[o+s]))return;return{at:a,count:s}}function Jl(n){let e=n.overscan??8,t=Xe(0),s=O(0),a=O(n.rowHeight),o,r=()=>{if(!o)return;let M=o.scrollTop,S=o.clientHeight;t.offer(M),S!==s.value&&s.set(S)},l=M=>M||800,d=O({first:0,last:0}),m=[],p=0,c=Number.NEGATIVE_INFINITY,h=()=>{c=performance.now()},u,g=120,v=M=>{let S=m.length,w=a.value,F=t.value,$=Math.min(S,Math.floor(F/w)),_=Math.min(S,Math.ceil((F+l(s.value))/w)),Z=_-$,pe=F>=p,ke=performance.now()-c<200?Math.abs(F-p):0;p=F;let{first:be,last:x}=d.value,N=bt(ke,w,Z,Math.max(e,Math.ceil(Z/2))),U=be<=Math.max(0,$-(pe?e:N))&&x>=Math.min(S,_+(pe?N:e))&&x<=S,oe,le;if(M)oe=$-Z,le=_+Z;else{if(U)return;if(_<=be||$>=x){let Ce=bt(ke,w,Z,2);oe=$-(pe?2:Ce),le=_+(pe?Ce:2)}else{let Ce=bt(ke,w,Z,Math.max(e,Z));oe=$-(pe?e:Ce),le=_+(pe?Ce:e)}}oe=Math.max(0,oe),le=Math.min(S,le),(oe!==be||le!==x)&&d.set({first:oe,last:le})},b=()=>{C(),v(!1),u!==void 0&&clearTimeout(u),u=setTimeout(()=>{u=void 0,v(!0)},g)},k=new Set,E=[],T;function C(){if(T!==void 0){clearTimeout(T),T=void 0,k.clear();for(let M of E)M.removeAttribute("data-reveal");E.length=0}}let I=M=>n.itemKey(M),H=[],V=M=>{if(!n.reveal||M===H)return;let S=vs(H,M,I);if(H=M,!!S){C();for(let w=S.at;w<S.at+S.count;w++)k.add(I(M[w]));T=setTimeout(C,fs)}};Q(()=>{u!==void 0&&clearTimeout(u),C()}),X(f([n.items,s.asReadonly,a.asReadonly],(M,S,w)=>({list:M,h:S,rh:w})),({list:M})=>{m=M,v(!0)}),X(t,b);let R=f([n.items,d.asReadonly,a.asReadonly],(M,S,w)=>(V(M),{items:M,first:Math.min(S.first,M.length),last:Math.min(S.last,M.length),rh:w}),(M,S)=>M.items===S.items&&M.first===S.first&&M.last===S.last&&M.rh===S.rh),q=f(R,M=>M.items.slice(M.first,M.last));return n.ref?.({scrollToIndex(M){let S=a.value,w=l(s.value),F=M*S,$=t.value;F<$?$=F:F+S>$+w&&($=F+S-w),$!==t.value&&(p=$,o&&(o.scrollTop=$),t.offer($)),Ct(),Ve()}}),i(ge,{class:`${Be.list} ${n.class??""}`,contentClass:Be.content,edge:n.edge,fade:!1,viewportRef:M=>{o=M,B(M,"scroll",r,{passive:!0}),B(M,"wheel",h,{passive:!0}),B(M,"touchmove",h,{passive:!0}),Ee(M,r),queueMicrotask(r)},role:n.role,"aria-label":n["aria-label"],ref:M=>n.contentRef?.(M),style:{height:f([n.items,a.asReadonly],(M,S)=>`${M.length*S}px`),"--msp-virtual-row":f(a.asReadonly,M=>`${M}px`)},children:i("div",{class:Be.window,style:{transform:f(R,M=>`translateY(${M.first*M.rh}px)`)},ref:M=>{Ee(M,S=>{let w=S[S.length-1].contentRect.height,F=M.childElementCount;if(F<=0||w<=0||T!==void 0)return;let $=w/F;Math.abs($-a.value)>.5&&a.set($)})},children:i(te,{each:q,by:n.itemKey,children:M=>{let S=n.children(M);return k.size&&S instanceof Element&&k.has(I(M))&&(S.setAttribute("data-reveal",""),E.push(S)),S}})})})}function ec(n,e,t){let s=[],a=(o,r)=>{for(let l=0;l<o.length;l++){let d=o[l];s.push({node:d,depth:r,posinset:l+1,setsize:o.length});let m=e(d);m?.length&&t(d)&&a(m,r+1)}};return a(n,0),s}function fa(n,e){let t=new Map;return s=>{let a=new Map,o=s.map(r=>{let l=n(r),d=t.get(l),m=d!==void 0&&e(d,r)?d:r;return a.set(l,m),m});return t=a,o}}var gs={settles:0,moved:0,lastMs:0};function tc(n){let e=he("RecycledList"),t=n.overscan??8,s=Xe(0),a=O(0),o=O(n.rowHeight),r,l=()=>{if(!r)return;let D=r.scrollTop,K=r.clientHeight;s.offer(D),K!==a.value&&a.set(K)},d=D=>D||800,m=O({first:0,last:0}),p=[],c=0,h=Number.NEGATIVE_INFINITY,u=()=>{h=performance.now()},g,v=120,b=D=>{let K=p.length,J=o.value,Y=s.value,ne=Math.min(K,Math.floor(Y/J)),Me=Math.min(K,Math.ceil((Y+d(a.value))/J)),ae=Me-ne,me=Y>=c,ce=performance.now()-h<200?Math.abs(Y-c):0;c=Y;let{first:ee,last:Te}=m.value,kt=bt(ce,J,ae,Math.max(t,Math.ceil(ae/2))),Qe=ee<=Math.max(0,ne-(me?t:kt))&&Te>=Math.min(K,Me+(me?kt:t))&&Te<=K,Mt,St;if(D)Mt=ne-ae,St=Me+ae;else{if(Qe)return;if(Me<=ee||ne>=Te){let ln=bt(ce,J,ae,2);Mt=ne-(me?2:ln),St=Me+(me?ln:2)}else{let ln=bt(ce,J,ae,Math.max(t,ae));Mt=ne-(me?t:ln),St=Me+(me?ln:t)}}Mt=Math.max(0,Mt),St=Math.min(K,St),(Mt!==ee||St!==Te)&&m.set({first:Mt,last:St})},k=()=>{C(),b(!1),g!==void 0&&clearTimeout(g),g=setTimeout(()=>{g=void 0,b(!0),Ce()},v)},E=[],T;function C(){if(T!==void 0){clearTimeout(T),T=void 0;for(let D of E)D.classList.remove(Be.glide,Be.enter);E.length=0}}let I=!1;Q(()=>{g!==void 0&&clearTimeout(g),C()}),X(f([n.items,a.asReadonly,o.asReadonly],(D,K,J)=>({list:D,h:K,rh:J})),({list:D})=>{p=D,b(!0)}),X(s,k);let H,V=new Map,R=[],q=D=>!!n.slot&&(!n.recycle||n.recycle(D)),M,S=Ee(void 0,D=>{let K=D[D.length-1].contentRect.height;K>0&&Math.abs(K-o.value)>.5&&o.set(K)}),w=D=>{M||!S||(M=D,S.observe(D))},F=()=>{let D=document.createElement("div");return D.className=Be.row,D},$=()=>{let D=e.child(),K=Re(D,()=>n.slot()),J=F();return J.append(K.el),H.append(J),w(J),{el:J,view:K,shown:!0}},_=(D,K)=>{let J=e.child(),Y=F();return Re(J,()=>Oe(Y,n.children?.(K),null)),H.append(Y),w(Y),{key:D,item:K,el:Y,y:Number.NaN,scope:J}},Z=D=>{D.scope.dispose(),D.el.remove(),M===D.el&&(S?.unobserve(D.el),M=void 0)},pe=(D,K,J)=>{let Y=K*J;D.y!==Y&&(I&&(D.el.classList.add(Number.isNaN(D.y)?Be.enter:Be.glide),E.push(D.el)),D.y=Y,D.el.style.transform=`translateY(${Y}px)`)},ke=(D,K,J)=>{let Y=p[K],ne=n.itemKey(Y);if(D.has(ne))return!0;let Me;if(q(Y)){let ae=R.pop();if(ae)ae.shown||(ae.shown=!0,ae.el.hidden=!1);else{if(!qn())return!1;ae=$()}ae.view.show(Y),Me={key:ne,item:Y,el:ae.el,y:Number.NaN,slot:ae}}else{if(!qn())return!1;Me=_(ne,Y)}return D.set(ne,Me),pe(Me,K,J),!0},be=!1,x=!1,N=(D,K,J)=>{if(!H)return;let Y=new Map;for(let ee=D;ee<K;ee++){let Te=p[ee],kt=n.itemKey(Te);if(Y.has(kt)){x||(x=!0,console.warn("VirtualList: duplicate key; later items with the same key are not rendered.",kt));continue}let Qe=V.get(kt);if(Qe){if(Qe.item!==Te)if(Qe.slot&&q(Te))Qe.item=Te,Qe.slot.view.show(Te);else continue;Y.set(kt,Qe),pe(Qe,ee,J)}}let ne=R.length;for(let[ee,Te]of V)Y.get(ee)!==Te&&(Te.slot?R.push(Te.slot):Z(Te));V=Y;let Me=s.value,ae=Math.max(D,Math.min(K,Math.floor(Me/J))),me=Math.max(ae,Math.min(K,Math.ceil((Me+d(a.value))/J))),ce=!1;for(let ee=ae;ee<me&&!ce;ee++)ke(Y,ee,J)||(ce=!0);for(let ee=D;ee<ae&&!ce;ee++)ke(Y,ee,J)||(ce=!0);for(let ee=me;ee<K&&!ce;ee++)ke(Y,ee,J)||(ce=!0);for(let ee=R.length-1;ee>=ne;ee--){let Te=R[ee];Te.shown&&(Te.shown=!1,Te.view.show(void 0),Te.el.hidden=!0)}ce&&!be&&(be=!0,Wn(()=>{be=!1,!e.disposed&&e.active&&N(U.first,U.last,U.rh)}))},U={first:0,last:0,rh:n.rowHeight},oe=[],le=f([n.items,m.asReadonly,o.asReadonly],(D,K,J)=>({list:D,first:Math.min(K.first,D.length),last:Math.min(K.last,D.length),rh:J}),(D,K)=>D.list===K.list&&D.first===K.first&&D.last===K.last&&D.rh===K.rh);Q(()=>{for(let D of V.values())D.slot||D.scope.dispose();V.clear()});let Ce=()=>{if(!H)return;let D=performance.now(),K=[...V.values()].sort((ce,ee)=>ce.y-ee.y),J=new Set;for(let ce of K)J.add(ce.el);let ne=H.getRootNode().activeElement,Me,ae=H.firstChild,me=0;for(let ce of K){for(;ae&&!J.has(ae);)ae=ae.nextSibling;if(ce.el===ae){ae=ae.nextSibling;continue}ne&&!Me&&ce.el.contains(ne)&&(Me=ne),H.insertBefore(ce.el,ae),me++}Me?.focus({preventScroll:!0}),gs.settles++,gs.moved+=me,gs.lastMs=performance.now()-D};return n.ref?.({scrollToIndex(D){let K=o.value,J=d(a.value),Y=D*K,ne=s.value;Y<ne?ne=Y:Y+K>ne+J&&(ne=Y+K-J),ne!==s.value&&(c=ne,r&&(r.scrollTop=ne),s.offer(ne)),Ct(),Ve()}}),i(ge,{class:`${Be.list} ${n.class??""}`,contentClass:Be.content,edge:n.edge,fade:!1,viewportRef:D=>{r=D,B(D,"scroll",l,{passive:!0}),B(D,"wheel",u,{passive:!0}),B(D,"touchmove",u,{passive:!0}),Ee(D,l),queueMicrotask(l)},role:n.role,"aria-label":n["aria-label"],ref:D=>{H=D,n.contentRef?.(D),X(le,K=>{let J=n.reveal&&K.list!==oe?vs(oe,K.list,n.itemKey):void 0;oe=K.list,p=K.list,U=K,J&&(C(),I=!0,T=setTimeout(C,fs)),N(K.first,K.last,K.rh),I=!1})},style:{height:f([n.items,o.asReadonly],(D,K)=>`${D.length*K}px`),"--msp-virtual-row":f(o.asReadonly,D=>`${D}px`)}})}var Ie={body:"msp-canvas-hover-label-body",code:"msp-canvas-hover-label-code",corner:"msp-canvas-hover-label-corner",item:"msp-canvas-hover-label-item",label:"msp-canvas-hover-label-label",link:"msp-canvas-hover-label-link",out:"msp-canvas-hover-label-out",primary:"msp-canvas-hover-label-primary",secondary:"msp-canvas-hover-label-secondary"};W("views/canvas/hover-label.module.css",`@layer msp.components {
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
`);var tn=14;function nc(n,e){let t=document.createElement("span");if(typeof n=="string")return t.className=e===0?Ie.primary:Ie.secondary,t.textContent=n,t;t.className=n.role==="title"?Ie.primary:n.role==="item"?`${Ie.secondary} ${Ie.item}`:Ie.secondary;for(let s of n.runs)t.append(sc(s));return t}function sc(n){let e=document.createTextNode(n.text),t=(s,a)=>{let o=document.createElement(s);a&&(o.className=a),o.append(e),e=o};return n.code&&t("code",Ie.code),n.sub&&t("sub"),n.sup&&t("sup"),n.small&&t("small"),n.italic&&t("em"),n.bold&&t("strong"),n.link&&t("span",Ie.link),e}function ac(n){let e=(n.placement??"corner")==="corner",t=i("div",{class:Ie.body}),s=i("div",{class:`${Ie.label} ${Ie.out}${e?` ${Ie.corner}`:""}`,role:"tooltip","aria-hidden":"true",children:t}),a=O([]),o=Kt(()=>a.set([]));X(n.model.lines,T=>{T.length?(o.cancel(),a.set(T)):a.value.length&&o.request()});let r=0,l=0,d=!1,m=!1,p=!1,c=!1,h=T=>{c!==T&&(c=T,s.classList.toggle(Ie.out,!T),T?s.removeAttribute("aria-hidden"):s.setAttribute("aria-hidden","true"))},u=()=>d&&!m&&p,g=()=>{u()?(b.cancel(),e?h(!0):k.request()):m||!p?(b.cancel(),h(!1)):c&&b.request()},v=()=>{if(!u())return;let T=s.offsetParent;if(T){let C=T.getBoundingClientRect(),I=r-C.left,H=l-C.top,V=s.offsetWidth,R=s.offsetHeight,q=I+tn+V>T.clientWidth?I-tn-V:I+tn,M=H+tn+R>T.clientHeight?H-tn-R:H+tn;s.style.transform=`translate(${Math.max(0,q)}px, ${Math.max(0,M)}px)`}h(!0)},b=Kt(()=>{u()||h(!1)}),k=Kt(v);X(a.asReadonly,T=>{T.length&&t.replaceChildren(...T.map(nc)),p=T.length>0,g()});let E=he("HoverLabel");return queueMicrotask(()=>{if(E.disposed)return;let T=n.area();if(!T)return;let C=n.over;Re(E,()=>{B(T,"pointermove",I=>{r=I.clientX,l=I.clientY,d=!C||C(I.target),m=I.buttons!==0,g()}),B(T,"pointerleave",()=>{d=!1,g()})})}),s}var G={ask:"msp-command-menu-ask",askIcon:"msp-command-menu-askIcon",askKeys:"msp-command-menu-askKeys",askLabel:"msp-command-menu-askLabel",askText:"msp-command-menu-askText",before:"msp-command-menu-before",caption:"msp-command-menu-caption",command:"msp-command-menu-command",crumb:"msp-command-menu-crumb",empty:"msp-command-menu-empty",error:"msp-command-menu-error",footer:"msp-command-menu-footer",head:"msp-command-menu-head",headIcon:"msp-command-menu-headIcon",hint:"msp-command-menu-hint",input:"msp-command-menu-input",keys:"msp-command-menu-keys",list:"msp-command-menu-list",listContent:"msp-command-menu-listContent",menu:"msp-command-menu-menu","menu-fade":"msp-command-menu-menu-fade","menu-in":"msp-command-menu-menu-in",message:"msp-command-menu-message",more:"msp-command-menu-more",proposed:"msp-command-menu-proposed",rest:"msp-command-menu-rest",row:"msp-command-menu-row",rowChevron:"msp-command-menu-rowChevron",rowIcon:"msp-command-menu-rowIcon",rowMeta:"msp-command-menu-rowMeta",rowTitle:"msp-command-menu-rowTitle",run:"msp-command-menu-run",scrim:"msp-command-menu-scrim",sentence:"msp-command-menu-sentence",shared:"msp-command-menu-shared",sharedOption:"msp-command-menu-sharedOption",sharedTitle:"msp-command-menu-sharedTitle",spacer:"msp-command-menu-spacer",srOnly:"msp-command-menu-srOnly",tail:"msp-command-menu-tail",token:"msp-command-menu-token",value:"msp-command-menu-value",view:"msp-command-menu-view"};W("views/command-menu/command-menu.module.css",`@layer msp.components {
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
`);function oc(n,e,t,s){let a=n.assistant,o=t.trim();return a.ready()?{id:"assistant-ask",label:"Ask AI assistant",detail:`\u201C${o}\u201D`,icon:"sparkles",run:()=>{let r=a.propose(o);if(r)return s(o),e.open(r.command,r.tail).kind==="form";a.ask(o)}}:{id:"assistant-setup",label:"Set up the assistant to ask",detail:`\u201C${o}\u201D`,icon:"sparkles",run:()=>a.setup()}}var rc=n=>n.kind==="caption"?`caption:${n.label}`:n.kind==="group"?`group:${n.group.id}:${n.index}`:n.kind==="item"?`item:${n.item.label}:${n.index}`:`match:${n.match.command.id}:${n.match.preset?.id??""}:${n.index}:${n.tail??""}`,ic=(n,e)=>{if(n.kind!==e.kind)return!1;if(n.kind==="caption")return n.label===e.label;if(n.kind==="group")return n.group===e.group&&n.index===e.index;if(n.kind==="item")return n.item===e.item&&n.index===e.index;let t=e;return n.match.command===t.match.command&&n.match.preset===t.match.preset&&n.match.blocked===t.match.blocked&&n.index===t.index&&n.tail===t.tail},wn=24,vr=28;function lc(n){let{manager:e}=n,t=O(void 0);X(e.active,o=>{o||t.set(void 0)}),X(e.outcomes,o=>{o.kind==="done"&&n.onClose()}),Q(()=>e.close());let s=et(),a;return Q(()=>s(a)),i("div",{class:G.scrim,"data-keeps-card":"",onPointerDown:o=>{o.target===o.currentTarget&&n.onClose()},children:i("div",{class:G.menu,role:"dialog","aria-modal":"true","aria-label":"Commands",ref:o=>{a=o},onKeyDown:o=>{_n(o,o.currentTarget),!(o.key!=="Escape"||o.defaultPrevented)&&(o.preventDefault(),o.stopPropagation(),n.onClose())},children:i(P,{when:e.active,fallback:()=>i(cc,{...n,onPropose:o=>t.set(o)}),children:o=>i(bc,{manager:e,invocation:o,proposed:t.asReadonly,onClose:n.onClose,...n.direct?{direct:!0}:{}})})})})}function cc(n){let{manager:e}=n,t=O(n.initial??""),s=Xe(t.value),a=()=>{s.latest!==s.value&&Ct()},o=O(n.group),r=O(0),l=O(void 0),d=Ge("msp-command-list"),m=x=>`${d}-${x}`,p=[...n.prefixes??[],hc(n,x=>$(x))],c=x=>p.find(N=>x.startsWith(N.char)),h=fa(x=>`${o.value??""}|${rc(x)}`,ic),u,g=f([s,o.asReadonly,e.commands,e.groups],(x,N,U,oe)=>{if(u&&u.t===x&&u.g===N&&u.c===U&&u.gs===oe)return u.rows;let le=h(v(x,N));return u?(u.t=x,u.g=N,u.c=U,u.gs=oe,u.rows=le):u={t:x,g:N,c:U,gs:oe,rows:le},le});function v(x,N){let U=[],oe=0,le=Y=>{Y.kind!=="caption"&&(Y.index=oe++),U.push(Y)},Ce=c(x);if(Ce){for(let Y of Ce.items(x.slice(Ce.char.length).trimStart()))le({kind:"item",item:Y,index:0});return U}if(!x.trim()){let{groups:Y,commands:ne}=e.children(N);if(N===void 0){let me=e.query("");if(me.recent.length){le({kind:"caption",label:"Recent"});for(let ce of me.recent)le({kind:"match",match:ce,index:0})}Y.length&&le({kind:"caption",label:"Browse"})}for(let me of Y)le({kind:"group",group:me,index:0});if(N!==void 0){let me=new Set(ne.map(ee=>ee.command.category)),ce;for(let ee of ne)me.size>1&&ee.command.category!==ce&&(ce=ee.command.category,le({kind:"caption",label:ce})),le({kind:"match",match:ee,index:0});return U}let Me=new Set(e.query("").recent.map(me=>me.command)),ae=new Map;for(let me of ne){if(Me.has(me.command))continue;let ce=ae.get(me.command.category);ce?ce.push(me):ae.set(me.command.category,[me])}for(let[me,ce]of ae){le({kind:"caption",label:me});for(let ee of ce)le({kind:"match",match:ee,index:0})}return U}let D=e.query(x),K=Y=>N===void 0||e.inGroup(Y.command,N);D.direct&&K(D.direct)&&le({kind:"match",match:D.direct,tail:D.direct.tail,index:0});let J=e.groups.value.filter(Y=>(N===void 0||e.groupPath(Y.id).some(ne=>ne.id===N))&&Y.id!==N&&(so(Y.title,x)??-1)>=0);for(let Y of J)le({kind:"group",group:Y,index:0});for(let Y of D.matches)Y.command!==D.direct?.command&&K(Y)&&le({kind:"match",match:Y,index:0});return U}let b=[],k=()=>b.filter(x=>x.kind!=="caption"),E=()=>{if(!n.assistant)return;if(!n.assistant.ready()){n.assistant.setup(),n.onClose();return}if(!t.value.trim()||c(t.value))return;!oc(n,e,t.value,n.onPropose).run()&&!e.active.value&&n.onClose()},T=f([s,g],(x,N)=>!!x.trim()&&!c(x)&&!N.some(U=>U.kind!=="caption"));X(g,x=>{b=x,r.value>=k().length&&r.set(0)});let C=O({n:wn}),I=f([g,C.asReadonly],(x,N)=>x.length<=(N.of===x?N.n:wn)?x:x.slice(0,N.of===x?N.n:wn),(x,N)=>x.length===N.length&&x.every((U,oe)=>U===N[oe])),H=f([g,I],(x,N)=>(x.length-N.length)*vr),V=x=>{let N=C.value,U=N.of===b?N.n:wn;x>U&&U<b.length&&C.set({of:b,n:Math.max(x,U+wn)})};X(r.asReadonly,x=>{let N=b.findIndex(U=>U.kind!=="caption"&&U.index===x);N>=0&&V(N+1)});let R=rt(r.asReadonly);Se(f([r.asReadonly,g],(x,N)=>{let U=N.find(oe=>oe.kind==="match"&&oe.index===x);return U?.kind==="match"&&!U.match.preset&&!U.tail&&!U.match.blocked?U.match.command.id:void 0}),x=>e.browse(x)),Q(()=>e.browse(void 0));let q=f([o.asReadonly,e.groups],x=>[...e.groupPath(x)].reverse().find(N=>N.shared)),M=f([r.asReadonly,g],(x,N)=>N.some(U=>U.kind!=="caption")?m(x):void 0),S=O(""),F=Wt(()=>{if(!s.value.trim())return S.set("");let N=0;for(let U of g.value)U.kind!=="caption"&&N++;if(N)return S.set(N===1?"1 result":`${N} results`);S.set(n.assistant?"No command matches: ask AI assistant.":"Nothing matches.")});Se(g,()=>F.start(400));let $=x=>{t.set(x),s.offer(x),a(),be.value=x,r.set(0),l.set(void 0)},_=x=>{o.set(x),$("")},Z=x=>{if(a(),x.kind==="group")return _(x.group.id);if(x.kind==="item"){!x.item.run()&&!e.active.value&&n.onClose();return}if(x.match.blocked)return l.set(x.match.blocked);let N=e.open(x.match.command.id,x.tail,x.match.preset?.id);N.kind==="blocked"?l.set(N.reason):N.kind==="ran"&&n.onClose()},pe=()=>{let x=e.groupPath(o.value);return x.length?(_(x[x.length-2]?.id),!0):!1},ke=f([t.asReadonly,o.asReadonly],(x,N)=>{let U=c(x);return U?U.placeholder??U.title:N===void 0?"Search commands, or type ? for help":`Search in ${e.groupPath(N).pop()?.title}`}),be=i("input",{class:G.input,type:"text",role:"combobox","aria-expanded":"true","aria-controls":d,"aria-autocomplete":"list","aria-activedescendant":M,"aria-label":"Command",placeholder:ke,spellcheck:!1,value:t,onInput:x=>{t.set(x.currentTarget.value),s.offer(x.currentTarget.value),r.set(0),l.set(void 0)},onKeyDown:x=>{a();let N=k().length,U=!x.currentTarget.value;if(x.key==="ArrowDown"||x.key==="ArrowUp")x.preventDefault(),N&&r.set((r.value+(x.key==="ArrowDown"?1:N-1))%N);else if(x.key==="Enter"){x.preventDefault();let oe=k()[r.value];x.metaKey||x.ctrlKey?E():oe?Z(oe):E()}else if(x.key==="ArrowRight"&&U){let oe=k()[r.value];oe?.kind==="group"&&(x.preventDefault(),_(oe.group.id))}else(x.key==="Backspace"||x.key==="ArrowLeft")&&U?pe()&&x.preventDefault():x.key==="Escape"&&(x.preventDefault(),x.stopPropagation(),n.onClose())}});return queueMicrotask(()=>be.focus()),y(fe,{children:[y("div",{class:G.head,children:[i(z,{name:"search",size:15,class:G.headIcon}),i(te,{each:f(o.asReadonly,x=>e.groupPath(x)),children:x=>y("button",{type:"button",class:G.crumb,onClick:()=>_(x.id),children:[x.title,i(z,{name:"chevron-right",size:12})]})}),be]}),i(P,{when:q,children:x=>i(pc,{manager:e,group:x})}),i(P,{when:l,children:x=>i("p",{class:G.message,role:"alert",children:x})}),i("span",{class:G.srOnly,role:"status","aria-live":"polite",children:S.asReadonly}),y(ge,{class:G.list,contentClass:G.listContent,id:d,role:"listbox","aria-label":"Commands",viewportRef:x=>{B(x,"scroll",()=>V(Math.ceil((x.scrollTop+2*x.clientHeight)/vr)),{passive:!0})},children:[i(te,{each:I,fallback:()=>i("p",{class:G.empty,children:n.assistant?"No command matches: ask AI assistant.":"Nothing matches."}),children:x=>{if(x.kind==="caption")return i("div",{class:G.caption,role:"presentation",children:x.label});let N=x.index,U={id:m(N),index:N,highlight:r.asReadonly,selected:R.key(N),onPick:()=>Z(x),onHover:()=>r.set(N)};return x.kind==="group"?i(uc,{...U,manager:e,group:x.group}):x.kind==="item"?i(fc,{...U,item:x.item}):i(vc,{...U,manager:e,row:x,path:mc(e,x.match.command.group,o.value),inGroup:o.value!==void 0,query:s})}}),i(P,{when:f(H,x=>x>0),children:()=>i("div",{class:G.rest,role:"presentation",style:{height:f(H,x=>`${x}px`)}})})]}),n.assistant?i(dc,{ready:n.assistant.ready(),text:f(t.asReadonly,x=>c(x)?"":x.trim()),unmatched:T,onAsk:()=>{n.assistant?.ready()?t.value.trim()?E():be.focus():(n.assistant?.setup(),n.onClose())}}):null,i(gr,{hints:[["\u2191\u2193","move"],["\u21B5","run"],...n.assistant?.ready()?[[jt()?"\u2318\u21B5":"Ctrl+\u21B5","ask"]]:[],["\u2192","open group"],["?","help"],["esc","close"]]})]})}function dc(n){return n.ready?y("button",{type:"button",class:G.ask,"data-default":f(n.unmatched,e=>e?"":void 0),onClick:()=>n.onAsk(),children:[i(z,{name:"sparkles",size:15,class:G.askIcon}),i("span",{class:G.askLabel,children:"Ask AI assistant"}),i("span",{class:G.askText,children:f(n.text,e=>e?`\u201C${e}\u201D`:"describe what you want, in your words")}),i("kbd",{class:G.askKeys,children:f(n.unmatched,e=>e?"\u21B5":jt()?"\u2318\u21B5":"Ctrl+\u21B5")})]}):y("button",{type:"button",class:G.ask,"data-setup":"",onClick:()=>n.onAsk(),children:[i(z,{name:"sparkles",size:15,class:G.askIcon}),i("span",{class:G.askText,children:"Set up an AI assistant"})]})}function pc(n){let{manager:e,group:t}=n,s=t.shared,a=f(e.shared,()=>e.sharedValue(t.id));return y("div",{class:G.shared,role:"group","aria-label":`${t.title}: ${s.title}`,children:[i("span",{class:G.sharedTitle,children:s.title}),s.options.map(([o,r])=>i("button",{type:"button",class:G.sharedOption,"aria-pressed":f(a,l=>l===o?"true":"false"),onClick:()=>e.setShared(t.id,o),children:r}))]})}function mc(n,e,t){let s=n.groupPath(e),a=t===void 0?-1:s.findIndex(o=>o.id===t);return s.slice(a+1).map(o=>o.title)}function hc(n,e){return{char:"?",title:"Help",placeholder:"Prefixes and shortcuts",items:t=>{let s=t.toLowerCase(),a=(n.prefixes??[]).map(l=>({id:`prefix:${l.char}`,label:`${l.char}  ${l.title}`,detail:l.placeholder,icon:"command",run:()=>(e(l.char),!0)})),o=n.manager.commands.value.flatMap(l=>{let d=n.manager.shortcut(l);return d?[{c:l,chord:d}]:[]}).map(({c:l,chord:d})=>({id:`keys:${l.id}`,label:l.title,detail:Tt(d),icon:l.icon??"keyboard",run:()=>{n.manager.open(l.id)}}));return[...n.manager.get("help.show")?[{id:"help:card",label:"Keyboard and mouse",detail:"The Help card",icon:"circle-help",run:()=>{n.manager.open("help.show")}}]:[],...a,...o].filter(l=>!s||l.label.toLowerCase().includes(s))}}}function va(n,e,t){return Qn(n,"aria-selected",String(e)),e&&!t&&queueMicrotask(()=>n.scrollIntoView?.({block:"nearest"})),e}function uc(n){let e=n.manager.groupPath(n.group.parent).map(a=>a.title),t=y("div",{id:n.id,class:G.row,role:"option",onClick:()=>n.onPick(),onPointerMove:()=>n.onHover(),children:[i("span",{class:G.rowIcon,children:i(z,{name:n.group.icon??"list-tree",size:15})}),i("span",{class:G.rowTitle,children:n.group.title}),i("span",{class:G.rowMeta,children:e.join(" \u203A ")}),i(z,{name:"chevron-right",size:14,class:G.rowChevron})]}),s=!1;return qe([n.selected],()=>{s=va(t,n.highlight.value===n.index,s)}),t}function fc(n){let{item:e}=n,t=y("div",{id:n.id,class:G.row,role:"option",onClick:()=>n.onPick(),onPointerMove:()=>n.onHover(),children:[i("span",{class:G.rowIcon,children:e.icon?i(z,{name:e.icon,size:15}):null}),i("span",{class:G.rowTitle,children:e.label}),i("span",{class:G.rowMeta,children:e.detail})]}),s=!1;return qe([n.selected],()=>{s=va(t,n.highlight.value===n.index,s)}),t}function vc(n){let{manager:e,query:t}=n,{match:s,tail:a}=n.row,o=s.command,r=s.preset?`${o.title.replace(/…$/,"")} ${s.preset.title}`:o.title,l=e.shortcut(o),d=s.blocked??(n.path.length?n.path.join(" \u203A "):n.inGroup?"":o.category),m=document.createElement("span"),p=document.createTextNode(d),c=y("div",{id:n.id,class:G.row,role:"option","aria-disabled":s.blocked?"true":void 0,onClick:()=>n.onPick(),onPointerMove:()=>n.onHover(),children:[i("span",{class:G.rowIcon,children:o.icon?i(z,{name:o.icon,size:15}):null}),y("span",{class:G.rowTitle,children:[m,a?i("span",{class:G.tail,children:a}):null]}),i("span",{class:G.rowMeta,children:p}),l?i("kbd",{class:G.keys,children:Tt(l)}):null]}),h=!1,u=[n.selected];o.count&&!s.preset&&u.push(e.browsing),qe(u,()=>{if(h=va(c,n.highlight.value===n.index,h),o.count&&!s.preset){let b=e.browsing.value;Xn(p,(b?.id===o.id?b.count:void 0)??d)}});let g,v=b=>{if(b===g)return;g=b;let k=gc(r,b);typeof k=="string"?m.textContent=k:m.replaceChildren(Ws(k))};return a?v(""):qe([t],()=>v(t.value)),c}function gc(n,e){let t=new Set(ao(n,e));if(!t.size)return n;let s=[],a="",o=!1,r=()=>{a&&(s.push(o?i("mark",{children:a}):a),a="")};for(let l=0;l<n.length;l++){let d=t.has(l);d!==o&&(r(),o=d),a+=n[l]}return r(),i(fe,{children:s})}function bc(n){let{manager:e,invocation:t}=n,s=t.state,a=t.command,o=f(s,c=>c.fields.find(h=>h.id===c.field)),r=Ge("msp-command-options"),l=c=>`${r}-${c}`,d=i("input",{class:G.input,type:"text",role:"combobox","aria-expanded":f(s,c=>c.completions.length>0),"aria-controls":r,"aria-autocomplete":"list","aria-activedescendant":f(s,c=>c.pick>=0&&c.pick<c.completions.length?l(c.pick):void 0),"aria-label":f(o,c=>c?.label??a.title),placeholder:f(o,c=>c?c.label:"Enter to run"),spellcheck:!1,value:f(s,c=>c.text),onInput:c=>t.type(c.currentTarget.value),onKeyDown:c=>{c.key==="Enter"&&c.altKey&&a.view?(c.preventDefault(),p()):c.key==="Enter"?(c.preventDefault(),t.enter()):c.key==="Tab"?(c.preventDefault(),t.tab(c.shiftKey?-1:1)):c.key==="ArrowDown"||c.key==="ArrowUp"?(c.preventDefault(),t.move(c.key==="ArrowDown"?1:-1)):c.key==="Backspace"&&!c.currentTarget.value?(c.preventDefault(),t.back()||m()):c.key==="Escape"&&(c.preventDefault(),c.stopPropagation(),m())}});queueMicrotask(()=>d.focus());let m=()=>{e.close(),n.direct&&n.onClose()},p=()=>{let c=a.view;c&&(e.close(),n.onClose(),c.open(e.context.value))};return y(fe,{children:[i(P,{when:n.proposed,children:c=>y("p",{class:G.proposed,children:[i(z,{name:"sparkles",size:13,class:G.askIcon}),"Proposed by the assistant from \u201C",c,"\u201D: check it, then Enter to run"]})}),y("div",{class:G.head,children:[y("span",{class:G.command,children:[a.icon?i(z,{name:a.icon,size:15}):null,a.title.replace(/…$/,"")]}),d]}),y("div",{class:G.sentence,"aria-label":"Arguments",children:[i(te,{each:f(s,c=>c.fields),children:c=>i(yc,{field:c,state:s,onFocus:()=>{t.focus(c.id),d.focus()}})},c=>c.id),i("span",{class:G.spacer}),a.view?y("button",{type:"button",class:G.view,title:`Open ${a.view.title} (\u2325\u21B5)`,onClick:p,children:[a.view.title,i(z,{name:"chevron-right",size:13})]}):null,y("button",{type:"button",class:G.run,onClick:()=>{t.enter()},children:[f(s,c=>c.action),i("kbd",{children:"\u21B5"})]})]}),i(P,{when:f(s,c=>c.error),children:c=>y("p",{class:G.error,role:"alert",children:[c.message,c.hint?y("span",{class:G.hint,children:[" ",c.hint]}):null]})}),i(ge,{class:G.list,contentClass:G.listContent,id:r,role:"listbox","aria-label":"Options",children:i(te,{each:f(s,c=>c.completions),children:(c,h)=>y("div",{id:f(h,l),class:G.row,role:"option","aria-selected":f([s,h],(u,g)=>u.pick===g),onClick:()=>t.accept(h.value),onPointerMove:()=>t.point(h.value),children:[i("span",{class:G.rowIcon}),i("span",{class:G.rowTitle,children:c.label}),i("span",{class:G.rowMeta,children:c.detail??(c.value!==c.label?c.value:"")})]})})}),i(P,{when:f(s,c=>c.formOnly.length>0),children:()=>i("p",{class:G.more,children:f(s,c=>`+ ${c.formOnly.length} more option${c.formOnly.length>1?"s":""} at their defaults`)})}),i(gr,{hints:[["tab","next field"],["\u21B5","run"],...a.view?[["\u2325\u21B5","open in the UI"]]:[],["\u232B","back"],n.direct?["esc","close"]:["esc","commands"]]})]})}function yc(n){let{field:e}=n,t=f(n.state,s=>{let a=s.values[e.id];if(!(a===void 0||a===""))return e.options?.find(o=>o.value===String(a))?.label??String(a)});return y("span",{class:G.token,children:[e.before?i("span",{class:G.before,children:e.before}):null,i("button",{type:"button",class:G.value,"data-active":f(n.state,s=>s.field===e.id?"":void 0),"data-missing":f(n.state,s=>s.missing.includes(e.id)?"":void 0),"data-empty":f(t,s=>s===void 0?"":void 0),onClick:()=>n.onFocus(),children:f(t,s=>s??e.label)})]})}function gr(n){return i("div",{class:G.footer,children:n.hints.map(([e,t])=>y("span",{children:[i("kbd",{children:e})," ",t]}))})}var L={announce:"msp-shell-canvas-announce",bar:"msp-shell-canvas-bar",bottom:"msp-shell-canvas-bottom",bottomGrid:"msp-shell-canvas-bottomGrid",busy:"msp-shell-canvas-busy","busy-in":"msp-shell-canvas-busy-in","busy-slide":"msp-shell-canvas-busy-slide","busy-spin":"msp-shell-canvas-busy-spin",busyActions:"msp-shell-canvas-busyActions",busyBar:"msp-shell-canvas-busyBar",busyCard:"msp-shell-canvas-busyCard",busyHead:"msp-shell-canvas-busyHead",busyLabel:"msp-shell-canvas-busyLabel",busyPercent:"msp-shell-canvas-busyPercent",busySpin:"msp-shell-canvas-busySpin",busyTrack:"msp-shell-canvas-busyTrack",caption:"msp-shell-canvas-caption",card:"msp-shell-canvas-card","card-in":"msp-shell-canvas-card-in",cardBody:"msp-shell-canvas-cardBody",cardBodyContent:"msp-shell-canvas-cardBodyContent",cardBodyFill:"msp-shell-canvas-cardBodyFill",cardHeader:"msp-shell-canvas-cardHeader",cardTitle:"msp-shell-canvas-cardTitle",chip:"msp-shell-canvas-chip",context:"msp-shell-canvas-context",corner:"msp-shell-canvas-corner",countdown:"msp-shell-canvas-countdown",face:"msp-shell-canvas-face",folded:"msp-shell-canvas-folded",frame:"msp-shell-canvas-frame",lead:"msp-shell-canvas-lead",menuMark:"msp-shell-canvas-menuMark",message:"msp-shell-canvas-message",pill:"msp-shell-canvas-pill","pill-in":"msp-shell-canvas-pill-in",pillButton:"msp-shell-canvas-pillButton",pillMain:"msp-shell-canvas-pillMain",progress:"msp-shell-canvas-progress",railMenu:"msp-shell-canvas-railMenu",railMenuAnchor:"msp-shell-canvas-railMenuAnchor",railMenuButton:"msp-shell-canvas-railMenuButton",railMenuDivider:"msp-shell-canvas-railMenuDivider",railMenuList:"msp-shell-canvas-railMenuList",railToggle:"msp-shell-canvas-railToggle",sections:"msp-shell-canvas-sections",spin:"msp-shell-canvas-spin",stack:"msp-shell-canvas-stack",stackTools:"msp-shell-canvas-stackTools",status:"msp-shell-canvas-status",text:"msp-shell-canvas-text",tool:"msp-shell-canvas-tool","tool-menu-in":"msp-shell-canvas-tool-menu-in",toolMenu:"msp-shell-canvas-toolMenu",toolMenuCard:"msp-shell-canvas-toolMenuCard",toolMenuCheck:"msp-shell-canvas-toolMenuCheck",toolMenuChevron:"msp-shell-canvas-toolMenuChevron",toolMenuDivider:"msp-shell-canvas-toolMenuDivider",toolMenuHeading:"msp-shell-canvas-toolMenuHeading",toolMenuHint:"msp-shell-canvas-toolMenuHint",toolMenuLabel:"msp-shell-canvas-toolMenuLabel",toolMenuRow:"msp-shell-canvas-toolMenuRow",toolMenuScroll:"msp-shell-canvas-toolMenuScroll",toolMenuScrollContent:"msp-shell-canvas-toolMenuScrollContent",toolSubmenu:"msp-shell-canvas-toolSubmenu",toolbar:"msp-shell-canvas-toolbar",toolbarSlot:"msp-shell-canvas-toolbarSlot"};W("views/shell/canvas.module.css",`@layer msp.components {
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
`);var ie={band:"msp-shell-dock-band",barTab:"msp-shell-dock-barTab",body:"msp-shell-dock-body",bodyContent:"msp-shell-dock-bodyContent",bottom:"msp-shell-dock-bottom",collapsedBar:"msp-shell-dock-collapsedBar",compact:"msp-shell-dock-compact",content:"msp-shell-dock-content",dock:"msp-shell-dock-dock",floating:"msp-shell-dock-floating",floatingBottom:"msp-shell-dock-floatingBottom",floatingLeft:"msp-shell-dock-floatingLeft",floatingRight:"msp-shell-dock-floatingRight",floatingTop:"msp-shell-dock-floatingTop",frameless:"msp-shell-dock-frameless",header:"msp-shell-dock-header",left:"msp-shell-dock-left",pin:"msp-shell-dock-pin",rail:"msp-shell-dock-rail","rail-menu-in":"msp-shell-dock-rail-menu-in",railFoot:"msp-shell-dock-railFoot",railMenu:"msp-shell-dock-railMenu",railMenuRows:"msp-shell-dock-railMenuRows",railMenuScroll:"msp-shell-dock-railMenuScroll",right:"msp-shell-dock-right",splitter:"msp-shell-dock-splitter",strip:"msp-shell-dock-strip",tab:"msp-shell-dock-tab",title:"msp-shell-dock-title",top:"msp-shell-dock-top"};W("views/shell/dock.module.css",`@layer msp.components {
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
`);var kn=[{name:"normal",min:620,button:40,captioned:46},{name:"compact",min:530,button:34,captioned:40},{name:"small",min:0,button:30,captioned:36}];function ga(n){return kn.find(e=>n>=e.min)??kn[kn.length-1]}var br=new Set;function xc(n,e){let t=ga(e);if(e<=0)return{step:t,hidden:br};let s=(l,d)=>{let m=new Set(l.map(c=>c.section)),p=0;for(let c of l)p+=c.captioned?t.captioned:t.button;return d&&(p+=t.button,m.add("more")),p+Math.max(0,m.size-1)};if(s(n,!1)<=e)return{step:t,hidden:br};let a=n.map((l,d)=>({e:l,i:d})).sort((l,d)=>d.e.priority-l.e.priority||d.i-l.i).map(l=>l.e),o=new Set,r=n;for(let l of a)if(o.add(l.id),r=r.filter(d=>d!==l),s(r,!0)<=e)break;return{step:t,hidden:o}}function ys(n){let e=[];for(let t of n){let s=t.group,a=e.find(o=>o.group===s);a?a.items.push(t):e.push({group:s,items:[t]})}return e.sort((t,s)=>t.group===void 0?-1:s.group===void 0?1:0)}function wc(n,e){let t=(r,l)=>({id:`tab:${r.id}`,section:l,priority:r.priority,captioned:!1,kind:"tab",tab:r}),s=(r,l)=>({id:`tool:${r.id}`,section:l,priority:r.priority,captioned:!!r.caption,kind:"tool",item:r}),a=[];for(let r of n.filter(l=>l.place==="head"))a.push(t(r,"head"));for(let r of n.filter(l=>!l.place||l.place==="strip"))a.push(t(r,"strip"));let o=ys(e);for(let r of o)if(r.group!==void 0)for(let l of r.items)a.push(s(l,`group:${r.group}`));for(let r of n.filter(l=>l.place==="foot"))a.push(t(r,"foot"));for(let r of o)if(r.group===void 0)for(let l of r.items)a.push(s(l,"lead"));return a.map((r,l)=>r.priority===void 0?{...r,priority:l}:r)}function ba(n){let e=O([]),t=new Map,s=[],a=()=>e.set(s.filter(r=>!r.visible||t.get(r.visible)?.on===!0)),o=()=>{for(let r of t.values())r.stop();t.clear()};return Se(n,r=>{s=r;let l=new Set;for(let d of r){let m=d.visible;if(!m||(l.add(m),t.has(m)))continue;let p={on:void 0,stop:()=>{}};t.set(m,p);let c=!0,h=m.subscribe(u=>{p.on=u,c||a()});c=!1,p.stop=()=>h.unsubscribe()}for(let[d,m]of t)l.has(d)||(m.stop(),t.delete(d));a()}),Vt(r=>{r||o()}),Q(o),e.asReadonly}var kc=(n,e)=>n.size===e.size&&[...n].every(t=>e.has(t)),Mc=(n,e)=>n.length===e.length&&n.every((t,s)=>t===e[s]),bs=class{constructor(e,t){this.height=O(0);this.menu=O(void 0);let s=ba(f(e.toolbar,o=>o.filter(r=>r.place!=="canvas")));this.entries=f([t.tabs,s],(o,r)=>wc(o,r));let a=f([this.entries,this.height.asReadonly],(o,r)=>({entries:o,fit:xc(o,r)}));this.hidden=f(a,o=>o.fit.hidden,kc),this.overflow=f(a,o=>o.entries.filter(r=>o.fit.hidden.has(r.id)),Mc)}toggleMenu(e,t){let s=this.menu.value;if(s&&s.anchor===e)return this.menu.set(void 0);let a=this.#e?.parentElement,o=a?a.getBoundingClientRect().bottom-e.getBoundingClientRect().bottom:0;this.menu.set({bottom:o,anchor:e,...t?{item:t}:{}})}#e;observe(e){this.#e=e;let t=Ee(e,s=>{let a=Math.round(s[s.length-1].contentRect.height);a!==this.height.value&&this.height.set(a)});return()=>t?.disconnect()}};var yr=new WeakMap;function nt(n,e){let t=yr.get(e);if(t)return t;let s=f(e.state,r=>r,(r,l)=>r.size===l.size&&r.pinned===l.pinned&&r.floating===l.floating),a=f(s,r=>r.size),o=e.id==="right"?f([e.state,n.overlay],(r,l)=>l||r.collapsed?void 0:r.active):f(e.state,r=>r.collapsed?void 0:r.active);return t={size:a,sizePx:f(a,r=>`${r}px`),pinned:f(s,r=>r.pinned),floating:f(s,r=>r.floating),selected:rt(o)},yr.set(e,t),t}function Mn(n){let{shell:e,dock:t}=n,s=t.id==="top"||t.id==="bottom",a=f(t.tabs,p=>p.length>0),o=f(e.mode,p=>p==="compact"&&t.id==="right"),r=f([t.tabs,o],(p,c)=>c&&p.some(h=>h.compactBar)?p.filter(h=>h.compactBar):p),l=s?f([t.tabs,t.active],(p,c)=>p.length>1&&!!c):!0,d=Ge("msp-panel"),m;return i(P,{when:a,children:()=>y("div",{class:`${ie.dock} ${ie[t.id]}`,classList:{[ie.compact]:o},style:{"--msp-dock-size":nt(e,t).sizePx},ref:p=>{m=p},children:[i(P,{when:t.active,reveal:!0,swap:()=>m,fallback:s?()=>i(Tc,{shell:e,dock:t}):void 0,children:p=>i(ya,{shell:e,dock:t,tab:p,id:d})}),i(P,{when:l,children:()=>y("div",{class:ie.strip,children:[i("div",{role:"tablist","aria-label":"Panels","aria-orientation":f(o,p=>p||s?"horizontal":"vertical"),style:"display: contents",ref:p=>Q(vn(p)),children:i(te,{each:r,children:p=>i(xs,{shell:e,dock:t,tab:p,panel:d})})}),n.stripEnd]})})]})})}function xa(n){let{shell:e,dock:t}=n,s={"--msp-dock-size":nt(e,t).sizePx},a=new bs(e,t),o=f([t.tabs,a.hidden],(h,u)=>u.size?h.filter(g=>!u.has(`tab:${g.id}`)):h),r=f(o,h=>h.filter(u=>u.place==="head"),Bt),l=f(o,h=>h.filter(u=>!u.place||u.place==="strip"),Bt),d=f(o,h=>h.filter(u=>u.place==="foot"),Bt),m=Ge("msp-panel");if(t.id==="top"||t.id==="bottom")return i("div",{class:`${ie.floating} ${t.id==="top"?ie.floatingTop:ie.floatingBottom}`,classList:{[ie.band]:f(t.active,h=>h?.frame==="none")},style:s,children:i(P,{when:t.active,reveal:"fade",children:h=>i(ya,{shell:e,dock:t,tab:h,id:m})})});let p=f(a.height.asReadonly,h=>`${(h>0?ga(h):kn[0]).button}px`),c=y("div",{class:`${ie.floating} ${t.id==="left"?ie.floatingLeft:ie.floatingRight}`,style:{...s,"--msp-rail-head":p},children:[y("div",{class:`${ie.rail} ${L.frame}`,ref:h=>{Q(a.observe(h))},children:[n.railLead,i(P,{when:f(r,h=>h.length>0),children:()=>i("div",{class:ie.strip,role:"tablist","aria-orientation":"vertical","aria-label":"Home",ref:h=>Q(vn(h)),children:i(te,{each:r,children:h=>i(xs,{shell:e,dock:t,tab:h,panel:m})})})}),i(P,{when:f(l,h=>h.length>0),children:()=>i("div",{class:ie.strip,role:"tablist","aria-orientation":"vertical","aria-label":"Panels",ref:h=>Q(vn(h)),children:i(te,{each:l,children:h=>i(xs,{shell:e,dock:t,tab:h,panel:m})})})}),n.railItems?.(a),i(Sc,{shell:e,dock:t,rail:a,root:()=>c}),y("div",{class:ie.railFoot,children:[i(P,{when:f(d,h=>h.length>0),children:()=>i("div",{class:ie.strip,role:"tablist","aria-orientation":"vertical","aria-label":"More panels",ref:h=>Q(vn(h)),children:i(te,{each:d,children:h=>i(xs,{shell:e,dock:t,tab:h,panel:m})})})}),n.railFoot?.(a)]})]}),i(P,{when:t.active,reveal:"side",swap:()=>c,children:h=>i(ya,{shell:e,dock:t,tab:h,id:m,pinnable:!0,coveredBy:e.overlay})}),i(Cc,{shell:e,dock:t,rail:a})]});return c}function wr(n,e,t){e.id==="right"&&n.overlay.value?(n.closeOverlay(),n.show(t.id)):n.select(t.id)}function Sc(n){let{rail:e}=n,t=e.menu;return i(P,{when:f(e.overflow,s=>s.length>0),children:()=>(Q(()=>t.set(void 0)),i("nav",{class:ie.strip,"aria-label":"More buttons",children:i("button",{type:"button",class:ie.tab,"data-tip":"More","data-tip-side":"left","aria-label":"More","aria-haspopup":"menu","aria-expanded":f(t.asReadonly,s=>!!s),onClick:s=>e.toggleMenu(s.currentTarget),onKeyDown:s=>{s.key!=="ArrowDown"&&s.key!=="ArrowUp"||t.value||(s.preventDefault(),s.currentTarget.click())},children:i(z,{name:"ellipsis",size:20})})}))})}function Cc(n){let{shell:e,dock:t,rail:s}=n,a=s.menu,o=f([a.asReadonly,s.overflow],(m,p)=>m&&(m.item?m.item.menu?.length:p.length>0)?m:void 0),r=(m,p)=>{if(a.set(void 0),m.tab)return wr(e,t,m.tab);let c=m.item;c.overlay?e.toggleOverlay(c.overlay,p):c.run?.(p)},l=m=>{if(m.key!=="Escape"||!a.value||!We(a.value.anchor,m))return;let p=a.value.anchor;a.set(void 0),p.focus(),m.preventDefault()},d=m=>{let p=a.value;if(!p)return;let c=Je(m);Pe(m,p.anchor)||c.closest?.(`.${ie.railMenu}`)||a.set(void 0)};return B(document,"keydown",l),B(document,"pointerdown",d),i(P,{when:o,children:m=>{let p=et(()=>m.anchor),c;return Q(()=>p(c)),i("div",{class:ie.railMenu,style:{bottom:`${m.bottom}px`},children:i("div",{class:L.toolMenuCard,role:"menu","aria-label":m.item?Ft(m.item):"More",onKeyDown:ht,ref:h=>{c=h,queueMicrotask(()=>Lt(h))},children:i(ge,{class:ie.railMenuScroll,contentClass:ie.railMenuRows,children:m.item?i(nn,{items:m.item.menu,onRun:()=>a.set(void 0)}):i(te,{each:s.overflow,children:h=>y("button",{type:"button",role:"menuitem",class:L.toolMenuRow,onClick:u=>r(h,m.anchor),children:[h.tab?i(z,{name:h.tab.icon,size:16}):i(Sn,{item:h.item,size:16}),i("span",{class:L.toolMenuLabel,children:h.tab?h.tab.title:Ft(h.item)}),i("span",{})]})},h=>h.id)})})})}})}function Tc(n){let{shell:e,dock:t}=n;return i("div",{class:ie.collapsedBar,children:i(te,{each:t.tabs,children:s=>y("button",{type:"button",class:ie.barTab,onClick:()=>e.show(s.id),title:`Show ${s.title}`,children:[i(z,{name:t.id==="top"?"chevron-down":"chevron-up",size:14}),s.title]})})})}function Rc(n,e){return[{id:"hide",label:`Hide ${e.title}`,icon:"eye-off",run:()=>n.hideTab(e.id)},...n.hiddenTabs.value.map(t=>({id:`show:${t.id}`,label:`Show ${t.title}`,icon:"eye",run:()=>n.showTab(t.id)})),{id:"reset",label:"Reset layout",icon:"rotate-ccw",run:()=>n.resetLayout()}]}function xr(n,e,t,s){let a=t.closest(".msp-root")??document.body,o=t.getBoundingClientRect();da(a,s??{x:o.left,y:o.bottom},Rc(n,e))}function xs(n){let{shell:e,dock:t,tab:s}=n,a=nt(e,t).selected.key(s.id);return i("button",{type:"button",role:"tab",class:ie.tab,"data-tip":s.title,"data-tip-side":"left","aria-label":s.title,"aria-selected":a,"aria-controls":n.panel,"data-tab":s.id,onClick:()=>wr(e,t,s),onContextMenu:o=>{o.preventDefault(),xr(e,s,o.currentTarget,{x:o.clientX,y:o.clientY})},onKeyDown:o=>{o.key!=="ContextMenu"&&!(o.shiftKey&&o.key==="F10")||(o.preventDefault(),xr(e,s,o.currentTarget))},children:i(z,{name:s.icon,size:20})})}function wa(n){let{shell:e}=n,t=e.dock(n.dock),s=f(e.mode,a=>a!=="embedded"&&a!=="compact");return i(P,{when:s,children:()=>i(xe,{variant:"ghost",size:"sm",class:ie.pin,icon:i(z,{name:"pin"}),title:"Pin beside the canvas",pressed:nt(e,t).pinned,onClick:()=>e.setPinned(n.dock,!t.state.value.pinned)})})}function ya(n){let{shell:e,dock:t,tab:s}=n,a=n.coveredBy?f(n.coveredBy,d=>!d):!0,o,r=!1,l=d=>{let m=d.relatedTarget;if(m){r=!!o?.contains(m);return}let p=Je(d);queueMicrotask(()=>{let c=Ke();c&&o?.contains(c)||p.isConnected&&!p.closest("[inert]")&&(r=!1)})};return Q(()=>{if(!r)return;let d=Ke();if(d&&!o?.contains(d))return;let m=o?.closest(".msp-root")??o?.getRootNode();(m?[...m.querySelectorAll('[role="tab"]')]:[]).find(c=>c.dataset.tab===s.id)?.focus({preventScroll:!0})}),ct(a,()=>y("section",{class:s.frame==="none"?`${ie.content} ${ie.frameless}`:ie.content,role:"tabpanel",id:n.id,"aria-label":s.title,"data-msp-scope":`panel:${s.id}`,ref:d=>{o=d},onFocusIn:()=>{r=!0},onFocusOut:l,children:[i(Ec,{shell:e,dock:t}),y("header",{class:ie.header,children:[i("h2",{class:ie.title,children:typeof s.heading=="function"?s.heading():s.heading??s.title}),n.pinnable?i(wa,{shell:e,dock:t.id}):null,i(xe,{variant:"ghost",size:"sm",icon:i(z,{name:"x"}),title:"Close panel",onClick:()=>e.toggle(t.id)})]}),i(ge,{class:ie.body,contentClass:ie.bodyContent,children:i(P,{when:f(e.tabFocus,d=>({section:d?.tab===s.id?d.section:void 0}),(d,m)=>d.section===m.section&&!m.section),children:d=>i(Ye,{renderer:s.render,ctx:{shell:e,dock:t.id,...d.section?{focus:d.section}:{}}})})})]}))}function Ec(n){let{shell:e,dock:t}=n,s=t.id==="left"?1:-1,a=Xe(-1);Se(a,r=>{r>=0&&e.setSize(t.id,r)});let o;return i("div",{class:ie.splitter,role:"separator","aria-orientation":"vertical",tabIndex:0,"aria-label":"Panel width","aria-valuenow":f(nt(e,t).size,Math.round),onKeyDown:r=>{if(r.key!=="ArrowLeft"&&r.key!=="ArrowRight")return;r.preventDefault();let l=(r.shiftKey?64:16)*(r.key==="ArrowRight"?1:-1);e.setSize(t.id,t.state.value.size+s*l)},onPointerEnter:r=>r.currentTarget.setAttribute("data-active",""),onPointerLeave:r=>{o?.active||r.currentTarget.removeAttribute("data-active")},ref:r=>{o=dt(r,{start:l=>(r.setAttribute("data-active",""),{x:l.clientX,size:t.state.value.size}),move:(l,d)=>a.offer(d.size+s*(l.clientX-d.x)),end:(l,d,m)=>{if(d==="up"&&m){let p=r.getBoundingClientRect();if(m.clientX>=p.left&&m.clientX<=p.right&&m.clientY>=p.top&&m.clientY<=p.bottom)return}r.removeAttribute("data-active")}})},onDblClick:()=>e.setSize(t.id,t.id==="left"?300:340)})}function Tn(n,e){let t=ze(n);if(!t)return O(n).asReadonly;if(ot(t))return t;let s=Ga(t,e);return Q(()=>s.dispose()),s}function Ft(n){return n.face?f(Tn(n.face,{icon:n.icon,title:n.title}),e=>e.title):n.caption?`${n.title} (${n.caption})`:n.title}function Sn(n){let{item:e}=n;return e.face?i("span",{class:n.class,ref:t=>X(e.face,s=>t.replaceChildren(z({name:s.icon,size:n.size})))}):i(z,{name:e.icon,size:n.size})}function Rn(n){let{shell:e}=n,t=n.part??"all",s=t==="canvas",a=n.hidden?f([e.toolbar,n.hidden],(r,l)=>l.size?r.filter(d=>!l.has(`tool:${d.id}`)):r):e.toolbar,o=f(a,r=>{let l=ys(r.filter(d=>d.place==="canvas"===s));return t==="all"||s?l:l.filter(d=>t==="lead"?d.group===void 0:d.group!==void 0)});return i("div",{class:L.sections,children:i(te,{each:o,children:r=>i("div",{class:L.toolbar,role:"toolbar","aria-orientation":n.menus?"horizontal":"vertical","aria-label":r.group??"commands",children:r.items.map(l=>l.visible?i(P,{when:l.visible,children:()=>i(kr,{shell:e,item:l,menus:n.menus,railMenu:n.railMenu})}):i(kr,{shell:e,item:l,menus:n.menus,railMenu:n.railMenu}))})},r=>r.group??"")})}function Mr(n,e){let t=Tn(e.pressed??!1,!1),s=e.overlay;return s?f([n.overlay,t],(a,o)=>a?.overlay.id===s||o):t}function kr(n){let{shell:e,item:t,menus:s}=n,a=!s&&t.menu?.length?n.railMenu:void 0,o=s&&t.menu?.length?s:void 0,r=t.pressed||t.overlay?Mr(e,t):void 0,l=Ft(t),d=o?f(o.open.asReadonly,m=>m?.item===t):void 0;return y("button",{type:"button",class:L.tool,"data-captioned":t.caption?"":void 0,"data-tip":o?void 0:l,"data-tip-side":t.place==="canvas"?"top":"left","aria-label":l,"aria-pressed":r,"aria-haspopup":o||a?"menu":void 0,"aria-expanded":d,"data-overlay-trigger":t.overlay?"":void 0,"data-keeps-card":t.keepsCard?"":void 0,onClick:m=>{if(o&&!t.overlay&&!t.run)return o.show(t,m.currentTarget,m.detail===0);if(o&&Ma())return o.open.value?.item===t?o.hide():o.show(t,m.currentTarget,m.detail===0);if(a)return a(t,m.currentTarget);o?.hide(),t.overlay?e.toggleOverlay(t.overlay,m.currentTarget):t.run?.(m.currentTarget)},onKeyDown:o?m=>{m.key!=="ArrowDown"&&m.key!=="ArrowUp"||(m.preventDefault(),o.show(t,m.currentTarget,!0))}:void 0,onPointerEnter:o?m=>m.pointerType==="mouse"&&o.show(t,m.currentTarget):void 0,onPointerLeave:o?()=>o.hideSoon():void 0,onBlur:o?()=>o.hideSoon():void 0,children:[i(Sn,{item:t,size:t.caption?16:20,class:L.face}),t.caption?i("span",{class:L.caption,children:t.caption}):null,o?i("span",{class:L.menuMark,"aria-hidden":"true"}):null]})}var Ma=()=>typeof matchMedia=="function"&&matchMedia("(hover: none)").matches;function Pc(n,e){let t=n.menu??[];return!n.run||!Ma()?t:[{id:`${n.id}:self`,label:n.title,icon:n.icon,group:"",run:()=>n.run?.(e)},...t]}function nn(n){let{onSubmenu:e}=n;return i(fe,{children:n.items.map((t,s,a)=>y(fe,{children:[s>0&&t.group!==a[s-1].group?i("div",{class:L.toolMenuDivider,role:"separator"}):null,t.items&&!e?y(fe,{children:[i("div",{class:L.toolMenuHeading,role:"presentation",children:t.label}),i(P,{when:t.items,children:o=>i(nn,{items:o,onRun:n.onRun})})]}):t.items&&e?y("button",{type:"button",role:"menuitem","aria-haspopup":"menu",class:L.toolMenuRow,disabled:!!t.disabled,onPointerEnter:o=>e(t,o.currentTarget),onClick:o=>e(t,o.currentTarget,!0),onKeyDown:o=>{o.key==="ArrowRight"&&(o.preventDefault(),e(t,o.currentTarget,!0))},children:[t.icon?i(z,{name:t.icon,size:16}):i("span",{}),y("span",{class:L.toolMenuLabel,children:[t.label,t.disabled||t.hint?i("span",{class:L.toolMenuHint,children:t.disabled??t.hint}):null]}),i(z,{name:"chevron-right",size:14,class:L.toolMenuChevron})]}):y("button",{type:"button",role:t.pressed?t.choice?"menuitemradio":"menuitemcheckbox":"menuitem","aria-checked":t.pressed,class:L.toolMenuRow,disabled:!!t.disabled,onPointerEnter:e?()=>e(void 0):void 0,onClick:()=>{n.onRun(),t.run()},children:[t.icon?i(z,{name:t.icon,size:16}):i("span",{}),y("span",{class:L.toolMenuLabel,children:[t.label,t.disabled||t.hint?i("span",{class:L.toolMenuHint,children:t.disabled??t.hint}):null]}),t.pressed?i(P,{when:t.pressed,children:()=>i(z,{name:"check",size:14,class:L.toolMenuCheck})}):null]})]}))})}function Lc(n,e,t){let s=e.pressed||e.overlay?Mr(n,e):void 0,a=()=>{e.overlay?n.toggleOverlay(e.overlay,t()):e.run?.(t())},o={id:e.id,label:e.title,icon:e.icon,group:e.group??""},r=e.menu??[];if(!r.length)return{...o,...s?{pressed:s}:{},run:a};let l=(e.run||e.overlay)&&!r.some(d=>d.label===e.title)?[{id:`${e.id}:self`,label:e.title,icon:e.icon,group:"",...s?{pressed:s}:{},run:a}]:[];return{...o,run:()=>{},items:O([...l,...r]).asReadonly}}function Ac(n,e,t){let s=he("collapsedRows"),a=new Map,o=l=>{let d=a.get(l);if(!d){let m=s.child();a.set(l,d={row:Re(m,()=>Lc(n,l,t)),scope:m})}return d.row},r=ba(f(n.toolbar,l=>ys(l.filter(d=>d.place==="canvas")).flatMap(d=>d.items)));return f([Tn(e??[],[]),r],(l,d)=>{let m=[...l.map(p=>({...p,group:p.group??"lead"})),...d.map(o)];if(a.size>d.length){let p=new Set(d);for(let[c,h]of a)p.has(c)||(h.scope.dispose(),a.delete(c))}return m})}var Cn={id:"toolbar",place:"canvas",icon:"wrench",title:"Toolbar"};function Sr(n){let{shell:e}=n,t=new ka,s,a,o={rows:Ac(e,n.leadMenu,()=>a??s)},r=e.toolbarCollapsed,l=ct(f(r,p=>!p),()=>y("div",{class:L.bar,children:[i("div",{class:L.frame,children:y(ge,{axis:"x",contentClass:L.stackTools,children:[n.lead,i(Rn,{shell:e,part:"canvas",menus:t})]})}),n.aside]})),d=f(o.rows,p=>p.length>0),m=y("div",{class:L.stack,"data-quiet":n.quiet===void 0?void 0:f(Tn(n.quiet,!1),p=>p?"":void 0),children:[l,i(P,{when:r,children:()=>i(P,{when:d,children:()=>i("div",{class:`${L.frame} ${L.folded}`,children:i(zc,{menus:t,popup:o,ref:p=>{a=p}})})})}),i(Fc,{menus:t})]});return s=m,X(r,p=>{l.toggleAttribute("hidden",p),t.hide()}),t.stack=m,Q(()=>t.dispose()),m}function zc(n){let{menus:e,popup:t}=n,s=f(e.open.asReadonly,a=>a?.item===Cn);return y("button",{type:"button",class:L.tool,"data-stack-collapsed":"","aria-label":"Toolbar","aria-haspopup":"menu","aria-expanded":s,ref:n.ref,onClick:a=>{if(Ma()&&e.open.value?.item===Cn)return e.hide();e.show(Cn,a.currentTarget,a.detail===0,t)},onKeyDown:a=>{a.key!=="ArrowDown"&&a.key!=="ArrowUp"||(a.preventDefault(),e.show(Cn,a.currentTarget,!0,t))},onPointerEnter:a=>a.pointerType==="mouse"&&e.show(Cn,a.currentTarget,!1,t),onPointerLeave:()=>e.hideSoon(),onBlur:()=>e.hideSoon(),children:[i(z,{name:"wrench",size:18}),i("span",{class:L.menuMark,"aria-hidden":"true"})]})}var Ic=8,ka=class{constructor(){this.open=O(void 0)}#e;show(e,t,s=!1,a){this.keep();let o=this.stack?this.stack.getBoundingClientRect().right-t.getBoundingClientRect().right:0,r=this.roomAbove(this.stack),l=this.open.value;(l?.item!==e||l.right!==o||l.room!==r)&&this.open.set({item:e,right:o,room:r,button:t,...a?{popup:a}:{}}),s&&queueMicrotask(()=>this.menu&&Lt(this.menu))}roomAbove(e,t){if(!e)return 0;let s=e.closest("[data-msp-viewport]"),a=(t??e.getBoundingClientRect().top)-(s?.getBoundingClientRect().top??0)-Ic;return a>0?Math.round(a):0}keep(){this.#e!==void 0&&clearTimeout(this.#e),this.#e=void 0}hideSoon(){this.keep(),this.#e=setTimeout(()=>this.hide(),160)}hide(){this.keep(),this.open.value&&this.open.set(void 0)}dispose(){this.keep()}};function Fc(n){let{menus:e}=n,t=a=>{a.key!=="Escape"||a.defaultPrevented||!e.open.value||e.stack&&!We(e.stack,a)||(e.hide(),a.preventDefault())},s=a=>{let o=e.open.value;if(!o)return;let r=a.composedPath();e.menu&&r.includes(e.menu)||r.includes(o.button)||e.hide()};return B(document,"keydown",t),B(document,"pointerdown",s,{capture:!0}),i(P,{when:e.open,children:a=>{let o=!1,r;Q(()=>{if(e.menu===r&&(e.menu=void 0),!o)return;let c=Ke();(!c||r?.contains(c))&&a.button.focus({preventScroll:!0})});let l=O(void 0),d,m=(c,h,u=!1)=>{if(!c||!h||!r){l.value&&l.set(void 0);return}let g=h.getBoundingClientRect().bottom,v=Math.round(r.getBoundingClientRect().bottom-g),b=e.roomAbove(e.stack,g);(l.value?.item!==c||l.value.bottom!==v||l.value.room!==b)&&l.set({item:c,row:h,bottom:v,room:b}),u&&queueMicrotask(()=>d&&Lt(d))},p=c=>{if(c.key==="ArrowLeft"||c.key==="Escape"){c.preventDefault();let h=l.value?.row;l.set(void 0),h?.focus({preventScroll:!0});return}ht(c)};return y("div",{class:L.toolMenu,style:{right:`${a.right}px`,...a.room?{"--msp-menu-room":`${a.room}px`}:{}},role:"menu","aria-label":a.item.title,ref:c=>{r=c,e.menu=c},onPointerEnter:()=>e.keep(),onPointerLeave:()=>e.hideSoon(),onFocusIn:()=>{o=!0,e.keep()},onFocusOut:()=>e.hideSoon(),children:[i("div",{class:L.toolMenuCard,onKeyDown:ht,children:a.popup?i(fe,{children:i(P,{when:a.popup.rows,children:c=>i(ge,{class:L.toolMenuScroll,contentClass:L.toolMenuScrollContent,children:i(nn,{items:c,onRun:()=>e.hide(),onSubmenu:m})})})}):i(ge,{class:L.toolMenuScroll,contentClass:L.toolMenuScrollContent,children:i(nn,{items:Pc(a.item,a.button),onRun:()=>e.hide(),onSubmenu:m})})}),i(P,{when:l,children:c=>i("div",{class:L.toolSubmenu,style:{bottom:`${c.bottom}px`,...c.room?{"--msp-menu-room":`${c.room}px`}:{}},role:"menu","aria-label":c.item.label,ref:h=>{d=h},onKeyDown:p,children:i("div",{class:L.toolMenuCard,children:i(ge,{class:L.toolMenuScroll,contentClass:L.toolMenuScrollContent,children:i(P,{when:c.item.items,children:h=>i(nn,{items:h,onRun:()=>e.hide()})})})})})})]})}})}function Cr(n){let{shell:e}=n,t=O(!1),s=e.dock("right"),a=f(e.toolbar,c=>c.filter(h=>h.place!=="canvas"&&!h.group)),o=f(e.toolbar,c=>c.filter(h=>h.place!=="canvas"&&h.group)),r=f(s.tabs,c=>c.some(h=>h.compactBar)?c.filter(h=>!h.compactBar):[]),l,d=(c,h)=>{t.set(!1),c.overlay?e.toggleOverlay(c.overlay,h):c.run?.(h)},m=y("div",{class:L.railMenu,children:[i(te,{each:a,children:c=>i("button",{type:"button",class:L.railMenuButton,"aria-label":Ft(c),"data-tip":Ft(c),onClick:h=>d(c,h.currentTarget),children:i(Sn,{item:c,size:20,class:L.face})})},c=>c.id),y("div",{class:L.railMenuAnchor,children:[i("button",{type:"button",class:L.railMenuButton,"aria-label":"More","aria-haspopup":"menu","aria-expanded":t,"data-tip":"More",onClick:c=>{t.set(!t.value),t.value&&c.detail===0&&queueMicrotask(()=>l&&Lt(l))},onKeyDown:c=>{c.key!=="ArrowDown"&&c.key!=="ArrowUp"||(c.preventDefault(),t.set(!0),queueMicrotask(()=>l&&Lt(l)))},children:i(z,{name:"ellipsis",size:20})}),i(P,{when:t,children:()=>{let c=et();return Q(()=>c(l)),y("div",{class:L.railMenuList,role:"menu","aria-label":"More",ref:h=>{l=h},onKeyDown:h=>{ht(h),h.key==="Escape"&&(h.preventDefault(),h.stopPropagation(),t.set(!1))},children:[i(te,{each:r,children:h=>y("button",{type:"button",role:"menuitem",class:L.toolMenuRow,onClick:()=>{t.set(!1),e.show(h.id)},children:[i(z,{name:h.icon,size:16}),i("span",{class:L.toolMenuLabel,children:h.title}),i("span",{})]})},h=>h.id),i(P,{when:f([r,o],(h,u)=>h.length>0&&u.length>0),children:()=>i("div",{class:L.railMenuDivider})}),i(te,{each:o,children:h=>y("button",{type:"button",role:"menuitem",class:L.toolMenuRow,hidden:h.visible?f(Tn(h.visible,!0),u=>!u):!1,onClick:u=>d(h,u.currentTarget),children:[i(Sn,{item:h,size:16,class:L.face}),i("span",{class:L.toolMenuLabel,children:Ft(h)}),i("span",{})]})},h=>h.id)]})}})]})]});return B(document,"pointerdown",c=>{t.value&&!Pe(c,m)&&t.set(!1)}),m}function Tr(n){let e=f(n.status.tasks,t=>t.find(s=>s.overlay),(t,s)=>t?.id===s?.id);return i(P,{when:e,children:t=>{let s=f(n.status.tasks,o=>o.find(r=>r.id===t.id)??t),a=f(s,o=>o.progress===void 0?void 0:Math.round(o.progress*100));return i("div",{class:L.busy,role:"alertdialog","aria-modal":"true","aria-label":t.label,children:y("div",{class:L.busyCard,children:[y("div",{class:L.busyHead,children:[i(z,{name:"loader-circle",size:18,class:L.busySpin}),i("span",{class:L.busyLabel,children:f(s,o=>o.label)}),i("span",{class:L.busyPercent,children:f(a,o=>o===void 0?"":`${o}%`)})]}),i("div",{class:L.busyTrack,role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":a,children:i("span",{class:L.busyBar,"data-indeterminate":f(a,o=>o===void 0?"":void 0),style:{scale:f(a,o=>`${(o??30)/100} 1`)}})}),t.abort?i("div",{class:L.busyActions,children:i(xe,{size:"sm",onClick:()=>t.abort?.(),children:"Cancel"})}):null]})})}})}function Rr(n){let{shell:e}=n,t=f(e.overlay,s=>!!s);return i(P,{when:t,children:()=>i(Hc,{shell:e})})}function Hc(n){let{shell:e}=n,s=e.overlay.value.anchor,a=et(()=>s),o=Ge("msp-card-title"),r=f(e.dock("right").state,u=>u.pinned),l,d=y("section",{class:L.card,role:"dialog","aria-modal":f(r,u=>!u),"aria-labelledby":o,onKeyDown:u=>{m()||_n(u,u.currentTarget)},children:[y("header",{class:L.cardHeader,children:[i("h2",{class:L.cardTitle,id:o,children:f(e.overlay,u=>u?.overlay.title??"")}),i(wa,{shell:e,dock:"right"}),i(xe,{variant:"ghost",size:"sm",icon:i(z,{name:"x"}),title:"Close",onClick:()=>e.closeOverlay()})]}),i(P,{when:e.overlay,children:u=>{s=u.anchor,Fo(u.anchor)&&(l?.(),l=Gn(()=>{l=void 0;let v=d.querySelector(`.${L.cardBody}, .${L.cardBodyFill}`),b=aa(d);(b.find(k=>v?.contains(k))??b[b.length-1])?.focus()}));let g={shell:e,...u.focus?{focus:u.focus}:{}};return u.overlay.fill?i("div",{class:L.cardBodyFill,children:i(Ye,{renderer:u.overlay.render,ctx:g})}):i(ge,{class:L.cardBody,contentClass:L.cardBodyContent,children:i(Ye,{renderer:u.overlay.render,ctx:g})})}})]}),m=()=>e.dock("right").state.value.pinned,p=document,c=u=>{u.key!=="Escape"||u.defaultPrevented||m()||!We(d,u)||(e.closeOverlay(),u.preventDefault())},h=u=>{let g=e.overlay.value;if(!g)return;let v=Je(u);m()||g.overlay.persistent||Pe(u,d)||Pe(u,g.anchor)||v.closest?.("[data-overlay-trigger], [role=tab]")||v.closest?.("[data-keeps-card], [data-msp-canvas]")||e.closeOverlay()};return B(p,"keydown",c),B(p,"pointerdown",h,{capture:!0}),Q(()=>a(d)),d}var ws={info:"info",success:"circle-check",warning:"triangle-alert",error:"circle-alert"};function Sa(n){let{status:e}=n;return y("div",{class:L.status,children:[i("div",{class:L.announce,role:"status","aria-live":"polite",children:e.spoken}),i(P,{when:e.current,children:t=>t.kind==="error"?y("span",{class:`${L.pill} ${L.message}`,"data-kind":t.kind,children:[y("button",{type:"button",class:L.pillMain,title:"Show the log",onClick:()=>n.onOpenLog?.(),children:[i(z,{name:ws[t.kind],size:14}),i("span",{class:L.text,children:t.text})]}),i("button",{type:"button",class:L.pillButton,"aria-label":"Dismiss","data-tip":"Dismiss",onClick:()=>e.dismiss(t.id),children:i(z,{name:"x",size:14})})]}):y("button",{type:"button",class:`${L.pill} ${L.message}`,"data-kind":t.kind,title:"Show the log",onClick:()=>n.onOpenLog?.(),children:[i(z,{name:ws[t.kind],size:14}),i("span",{class:L.text,children:t.text})]})}),i(te,{each:f(e.tasks,t=>t.filter(s=>!s.overlay)),children:t=>i($c,{task:t})}),n.after]})}function Dc(n){let e,t=0,s=0,a=!1,o=O(void 0),r=()=>{e&&clearTimeout(e),e=void 0},l=()=>{r(),!(a||t<=0)&&(s=performance.now(),e=setTimeout(()=>n.onDismiss?.(),t))},d=p=>{p!==a&&(a=p,p&&e&&(t-=performance.now()-s),p?r():l())};n.autoDismiss&&n.onDismiss&&(X(n.autoDismiss,p=>{r(),t=p??0,o.set(p),l()}),Q(r));let m=y(fe,{children:[n.icon,i("span",{class:L.text,children:n.text}),n.after]});return y("span",{class:L.pill,onPointerEnter:()=>d(!0),onPointerLeave:()=>d(!1),onFocusIn:()=>d(!0),onFocusOut:p=>{p.currentTarget.contains(p.relatedTarget)||d(!1)},children:[n.onClick?i("button",{type:"button",class:L.pillMain,"aria-label":n.label,onClick:()=>n.onClick?.(),children:m}):m,n.onDismiss?y("button",{type:"button",class:L.pillButton,"aria-label":n.dismissLabel??"Dismiss","data-tip":n.dismissLabel??"Dismiss",onClick:()=>n.onDismiss?.(),children:[i(z,{name:"x",size:14}),i(P,{when:o.asReadonly,children:p=>i("svg",{class:L.countdown,viewBox:"0 0 20 20","aria-hidden":"true",style:{"--msp-countdown":`${p}ms`},children:i("circle",{cx:"10",cy:"10",r:"9",pathLength:"100"})})})]}):null]})}function Er(n){return y("div",{class:L.context,children:[n.lead,i(te,{each:n.status.chips,children:e=>y("span",{class:`${L.pill} ${L.chip}`,children:[i("button",{type:"button",class:L.text,onClick:()=>e.activate?.(),children:e.label}),e.dismiss?i("button",{type:"button",class:L.pillButton,title:"Clear",onClick:()=>e.dismiss?.(),children:i(z,{name:"x",size:14})}):null]})})]})}function $c(n){let{task:e}=n;return y("span",{class:L.pill,children:[i(z,{name:"loader-circle",size:14,class:L.spin}),i("span",{class:L.text,children:e.label}),e.progress!==void 0?i("span",{class:L.progress,children:i("div",{style:{width:`${Math.round(e.progress*100)}%`}})}):null,e.abort?i("button",{type:"button",class:L.pillButton,title:"Cancel",onClick:()=>e.abort?.(),children:i(z,{name:"x",size:14})}):null]})}function Pr(n){let{shell:e}=n,t=f(e.dock("right").tabs,a=>a.find(o=>o.place==="head")?.icon??"prism"),s=f(e.railOpen,a=>a?"Hide the panel rail":"Show the panel rail");return i("div",{class:`${L.stack} ${L.railToggle}`,children:i("div",{class:L.frame,children:i("button",{type:"button",class:L.tool,"data-tip":s,"data-tip-side":"top","aria-label":s,"aria-pressed":e.railOpen,onClick:()=>e.toggleRail(),children:i("span",{class:L.face,ref:a=>X(t,o=>a.replaceChildren(z({name:o,size:18})))})})})})}var we={action:"msp-shell-help-panel-action",conflict:"msp-shell-help-panel-conflict",conflicts:"msp-shell-help-panel-conflicts",content:"msp-shell-help-panel-content",edit:"msp-shell-help-panel-edit",editBar:"msp-shell-help-panel-editBar",group:"msp-shell-help-panel-group",heading:"msp-shell-help-panel-heading",headingRow:"msp-shell-help-panel-headingRow",help:"msp-shell-help-panel-help",input:"msp-shell-help-panel-input",key:"msp-shell-help-panel-key",keys:"msp-shell-help-panel-keys",list:"msp-shell-help-panel-list",or:"msp-shell-help-panel-or",recorder:"msp-shell-help-panel-recorder",row:"msp-shell-help-panel-row",srOnly:"msp-shell-help-panel-srOnly"};W("views/shell/help-panel.module.css",`@layer msp.components {
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
`);var Nc=()=>[{action:"Command menu",input:pn({key:"k",mod:!0}),or:pn({key:"p",mod:!0,shift:!0})},{action:"Help (this card)",input:["?"]},{action:"Close a menu, a card or the command menu",input:["Esc"]}];function Oc(n){let e=n.commands,t=e.keymap,s=O(!1),a=O(void 0),o=rt(a.asReadonly),r=O(""),l=f([e.commands,t.layers,a.asReadonly],(p,c,h)=>p.filter(u=>e.shortcut(u)||t.isRemapped(u.id)||u.id===h)),d=f([e.commands,t.layers],p=>{let c=t.conflicts(p);return c.length?c:void 0}),m=(p,c)=>{t.remap(p.id,c),a.set(void 0);let h=t.sharing(p.id,c,e.commands.value);r.set(`${p.title}: ${Tt(c)}${h.length?`, also used by ${h.map(u=>u.title).join(" and ")}`:""}.`)};return y(ge,{edge:!0,class:we.help,contentClass:we.content,"aria-label":"Help",children:[n.intro?.(),i(P,{when:d,children:p=>y("section",{class:we.conflicts,"aria-label":"Shortcut conflicts",children:[i(z,{name:"triangle-alert",size:14}),i("div",{children:p.map(c=>y("p",{class:we.conflict,children:[i(ks,{input:pn(c.chord)})," is used by ",c.commands.map(h=>h.title).join(" and "),c.scope==="global"?"":` (in ${c.scope})`,": only the first that can run takes it."]}))})]})}),i(te,{each:n.bindings,children:p=>i(Lr,{title:p.title,bindings:p.bindings})}),i(Lr,{title:"Everywhere",bindings:Nc()}),y("section",{class:we.group,"aria-label":"Commands",children:[y("div",{class:we.headingRow,children:[i("h3",{class:we.heading,children:"Commands"}),i(xe,{size:"xs",variant:"ghost",pressed:s.asReadonly,onClick:()=>{s.set(!s.value),a.set(void 0)},children:"Change keys"})]}),i("dl",{class:we.list,children:i(te,{each:l,children:p=>i(Bc,{manager:e,command:p,editing:s.asReadonly,recording:o.key(p.id),onRecord:()=>a.set(p.id),onRecorded:c=>c?m(p,c):a.set(void 0),onChanged:c=>r.set(c)})},p=>p.id)}),i(P,{when:f(s.asReadonly,p=>p?!0:void 0),children:()=>y("div",{class:we.editBar,children:[i(sa,{size:"sm","aria-label":"Give a key to a command",options:[["","Give a key to\u2026"],...e.commands.value.filter(p=>!e.shortcut(p)).map(p=>[p.id,p.title]).sort((p,c)=>p[1].localeCompare(c[1]))],value:"",onChange:p=>p&&a.set(p)}),i(xe,{size:"xs",variant:"ghost",onClick:()=>(t.resetAll(),r.set("Every key is back to its default.")),children:"Reset all"})]})}),i("span",{class:we.srOnly,role:"status","aria-live":"polite",children:r.asReadonly})]})]})}function Bc(n){let{manager:e,command:t}=n,s=e.keymap,a=f(s.layers,()=>({chord:e.shortcut(t),remapped:s.isRemapped(t.id)})),o=jt();return y("div",{class:we.row,children:[i("dt",{class:we.action,children:t.title}),y("dd",{class:we.input,children:[i(P,{when:f(n.recording,r=>r?!0:void 0),fallback:()=>i(P,{when:f(a,r=>r.chord),fallback:()=>i("span",{class:we.or,children:"no key"}),children:r=>i(ks,{input:pn(r,o)})}),children:()=>i("span",{class:we.recorder,tabIndex:0,role:"button","aria-label":`Press the new keys for ${t.title}; Escape cancels`,ref:r=>setTimeout(()=>r.isConnected&&r.focus()),onBlur:()=>n.onRecorded(void 0),onKeyDown:r=>{if(r.preventDefault(),r.stopPropagation(),r.key==="Escape")return n.onRecorded(void 0);let l=no(r,o);l&&n.onRecorded(l)},children:"Press keys\u2026"})}),i(P,{when:f(n.editing,r=>r?!0:void 0),children:()=>y("span",{class:we.edit,children:[i(xe,{size:"xs",variant:"ghost",title:`Change the key of ${t.title}`,onClick:()=>n.onRecord(),children:"Change"}),i(P,{when:f(a,r=>r.chord?!0:void 0),children:()=>i(xe,{size:"xs",variant:"ghost",title:`Remove the key of ${t.title}`,onClick:()=>{s.remap(t.id,null),n.onChanged(`${t.title}: no key.`)},children:"Clear"})}),i(P,{when:f(a,r=>r.remapped?!0:void 0),children:()=>i(xe,{size:"xs",variant:"ghost",title:`Back to the default key of ${t.title}`,onClick:()=>{s.reset(t.id);let r=s.defaultShortcut(t);n.onChanged(`${t.title}: ${r?Tt(r,o):"no key"} again.`)},children:"Reset"})})]})})]})]})}function Lr(n){return y("section",{class:we.group,"aria-label":n.title,children:[i("h3",{class:we.heading,children:n.title}),i("dl",{class:we.list,children:n.bindings.map(e=>y("div",{class:we.row,children:[i("dt",{class:we.action,children:e.action}),y("dd",{class:we.input,children:[i(ks,{input:e.input}),e.or?y(fe,{children:[i("span",{class:we.or,children:"or"}),i(ks,{input:e.or})]}):null]})]}))})]})}function ks(n){return i("span",{class:we.keys,children:n.input.map(e=>i("kbd",{class:we.key,children:e}))})}var Ht={empty:"msp-shell-log-view-empty",entry:"msp-shell-log-view-entry",kind:"msp-shell-log-view-kind",log:"msp-shell-log-view-log",text:"msp-shell-log-view-text",time:"msp-shell-log-view-time"};W("views/shell/log-view.module.css",`@layer msp.components {
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
`);var jc=new Intl.DateTimeFormat(void 0,{hour:"2-digit",minute:"2-digit",second:"2-digit"});function Vc(n){return i("div",{class:Ht.log,role:"log","aria-live":"off","aria-label":"Log",children:i(te,{each:n.status.history,fallback:()=>i("p",{class:Ht.empty,children:"No messages yet."}),children:e=>y("div",{class:Ht.entry,"data-kind":e.kind,children:[i(z,{name:ws[e.kind],size:14,class:Ht.kind}),i("span",{class:Ht.text,children:e.text}),i("time",{class:Ht.time,dateTime:e.time.toISOString(),children:jc.format(e.time)})]})},e=>e.id)})}var Fe={body:"msp-settings-settings-tab-body",chevron:"msp-settings-settings-tab-chevron",group:"msp-settings-settings-tab-group",groups:"msp-settings-settings-tab-groups",groupsContent:"msp-settings-settings-tab-groupsContent",header:"msp-settings-settings-tab-header",none:"msp-settings-settings-tab-none",search:"msp-settings-settings-tab-search",searchIcon:"msp-settings-settings-tab-searchIcon",searchInput:"msp-settings-settings-tab-searchInput",tab:"msp-settings-settings-tab-tab",title:"msp-settings-settings-tab-title",toggle:"msp-settings-settings-tab-toggle"};W("views/settings/settings-tab.module.css",`@layer msp.components {
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
`);function qc(n){let{model:e}=n,t=O(""),s=t.asReadonly,a=f(s,o=>o.trim().length>0&&!e.groups.some(r=>la(r.form.params,o)));return y("div",{class:Fe.tab,children:[y("div",{class:Fe.search,children:[i(z,{name:"search",size:14,class:Fe.searchIcon}),i(yn,{search:!0,size:"sm",class:Fe.searchInput,"aria-label":"Search settings",placeholder:"Search settings",value:s,onInput:o=>t.set(o)})]}),y(ge,{class:Fe.groups,contentClass:Fe.groupsContent,children:[e.groups.map((o,r)=>i(Wc,{group:o,query:s,open:r===0})),i(P,{when:a,children:()=>y("p",{class:Fe.none,children:["No setting matches \u201C",s,"\u201D."]})}),n.more?.()]})]})}function Wc(n){let{group:e,query:t}=n,s=O(n.open),a=f(t,l=>l.trim().length>0),o=f([s.asReadonly,a],(l,d)=>l||d),r=f(t,l=>!la(e.form.params,l));return y("section",{class:Fe.group,hidden:r,"aria-label":e.title,children:[i("div",{class:Fe.header,children:y("button",{type:"button",class:Fe.toggle,"aria-expanded":o,onClick:()=>s.set(!s.value),children:[i("span",{class:Fe.title,children:e.title}),i(z,{name:"chevron-down",size:14,class:Fe.chevron})]})}),i(P,{when:o,reveal:!0,children:()=>i("div",{class:Fe.body,"data-wide-labels":e.wideLabels?"":void 0,children:i(is,{form:e.form,filter:t})})})]})}var Dt={canvas:"msp-shell-canvas",canvasLayer:"msp-shell-canvasLayer",layer:"msp-shell-layer",shell:"msp-shell-shell",viewport:"msp-shell-viewport"};W("views/shell/shell.module.css",`@layer msp.components {
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
`);var Ca={muted:"msp-tooltip-muted",tooltip:"msp-tooltip-tooltip","tooltip-in":"msp-tooltip-tooltip-in"};W("components/tooltip/tooltip.module.css",`@layer msp.components {
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
`);var Kc=350;function zr(n){let e=document.createElement("div");e.className=Ca.tooltip,e.setAttribute("role","tooltip"),e.hidden=!0,n.append(e);let t,s=!1,a,o=Ee(void 0,()=>!Ar(t)&&l()),r=v=>{let b=v.dataset.tipRow!==void 0;b?Uc(e,v):e.textContent=v.dataset.tip??v.textContent??"",e.dataset.kind=b?"row":"",e.hidden=!1;let k=b?"beside":v.dataset.tipSide??"bottom",E=v.getBoundingClientRect(),T=e.getBoundingClientRect(),C=8,I,H,V;if(k==="beside"){let R=v.closest('[data-tip-edge], [role="tabpanel"]')?.getBoundingClientRect()??E;V=R;let q=8;I=R.left-q-T.width,I<4&&(I=R.right+q),H=E.top+(E.height-T.height)/2}else k==="left"?(I=E.left-C-T.width,H=E.top+(E.height-T.height)/2):k==="top"?(I=E.left+(E.width-T.width)/2,H=E.top-C-T.height):(I=E.left+(E.width-T.width)/2,H=E.bottom+C);if(I=Math.max(4,Math.min(I,window.innerWidth-T.width-4)),H=Math.max(4,Math.min(H,window.innerHeight-T.height-4)),V&&I<V.right&&I+T.width>V.left&&V!==E)return l();e.style.transform=`translate(${Math.round(I)}px, ${Math.round(H)}px)`,e.dataset.side=k},l=()=>{a!==void 0&&clearTimeout(a),a=void 0,o?.disconnect(),t=void 0,e.hidden=!0},d=(v,b,k)=>{if(a!==void 0&&clearTimeout(a),s=k,v.dataset.tip===void 0&&!Gc(v)){t=void 0,e.hidden=!0;return}t=v;let E=()=>{if(t!==v||!Ar(v))return l();r(v),!e.hidden&&(o?.disconnect(),o?.observe(v))};b?E():a=setTimeout(E,Kc)},m=v=>{let b=v.target,k=b?.closest?.("[data-tip], [data-tip-overflow], [data-tip-row]")??void 0;if(!k?.closest("[inert]")&&!(k?.dataset.tipRow!==void 0&&!b?.closest("[data-tip-part]")))return k},p=v=>{t&&!t.isConnected&&l();let b=m(v);!b||b===t||d(b,!e.hidden,!0)},c=v=>{let b=m(v);b&&!b.contains(v.relatedTarget)&&l()},h=v=>{let b=m(v);b?.matches(":focus-visible")&&d(b,!0,!1)},u=v=>{t&&(!t.isConnected||s&&!t.contains(v.target))&&l()},g=[B(n,"pointerover",p),B(n,"pointermove",u,{passive:!0}),B(n,"pointerout",c),B(n,"focusin",h),B(n,"focusout",l),B(n,"pointerdown",l),B(window,"keydown",l),B(window,"scroll",l,{capture:!0})];return()=>{l(),e.remove(),o?.disconnect();for(let v of g)v()}}function Ar(n){return!!n&&n.isConnected&&(n.checkVisibility?.()??!0)&&!n.closest("[inert]")}function Gc(n){if(n.dataset.tipRow===void 0)return n.scrollWidth-n.clientWidth>1;for(let e of n.querySelectorAll("[data-tip-part]"))if(e.scrollWidth-e.clientWidth>1)return!0;return!1}function Uc(n,e){n.textContent="";let t=!0;for(let s of e.querySelectorAll("[data-tip-part]")){let a=s.textContent?.trim();if(!a)continue;let o=document.createElement("span");o.textContent=a,t||(o.className=Ca.muted),t||n.append(" "),n.append(o),t=!1}}var Ms={empty:"msp-shell-empty-canvas-empty","fade-in":"msp-shell-empty-canvas-fade-in","fade-out":"msp-shell-empty-canvas-fade-out",mark:"msp-shell-empty-canvas-mark",splash:"msp-shell-empty-canvas-splash"};W("views/shell/empty-canvas.module.css",`@layer msp.components {
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
`);var Ta={splash:"msp-shell-prism-splash-splash"};W("views/shell/prism-splash.module.css",`@layer msp.components {
.msp-shell-prism-splash-splash {
  pointer-events: none;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
}
}
`);var Ss=class{constructor(){this.su=0;this.sv=0;this.drag=.6;this.confinement=0;this.#e=0;this.#t=0;this.#a=0;this.#r=0;this.#n=12;this.#o=new Float32Array(0);this.#s=new Float32Array(0);this.#i=new Float32Array(0);this.#m=new Float32Array(0);this.#h=new Float32Array(0);this.#u=new Float32Array(0);this.#R=0;this.#E=0;this.#L=0}#e;#t;#a;#r;#n;#o;#s;#i;#m;#h;#u;#R;#E;#L;get on(){return this.#a>=2&&this.#r>=2}layout(e,t,s,a){this.#e=e,this.#t=t;let o=12;s/o*(a/o)>4800&&(o=Math.sqrt(s*a/4800));let r=Math.max(0,Math.ceil(s/o)),l=Math.max(0,Math.ceil(a/o));if(r===this.#a&&l===this.#r&&o===this.#n)return;this.#a=r,this.#r=l,this.#n=o;let d=r*l;this.#o.length<d&&(this.#o=new Float32Array(d),this.#s=new Float32Array(d),this.#i=new Float32Array(d),this.#m=new Float32Array(d),this.#h=new Float32Array(d),this.#u=new Float32Array(d)),this.clear()}clear(){this.#o.fill(0),this.#s.fill(0),this.#h.fill(0)}sample(e,t){if(!this.on){this.su=0,this.sv=0;return}this.#g((e-this.#e)/this.#n-.5,(t-this.#t)/this.#n-.5),this.su=this.#v(this.#o),this.sv=this.#v(this.#s)}drive(e,t,s,a,o,r){if(!this.on)return;let l=this.#a,d=this.#n,m=o*o,p=Math.max(0,Math.floor((e-o-this.#e)/d)),c=Math.min(l-1,Math.ceil((e+o-this.#e)/d)),h=Math.max(0,Math.floor((t-o-this.#t)/d)),u=Math.min(this.#r-1,Math.ceil((t+o-this.#t)/d));for(let g=h;g<=u;g++){let v=this.#t+(g+.5)*d-t;for(let b=p;b<=c;b++){let k=this.#e+(b+.5)*d-e,E=k*k+v*v;if(E>=m)continue;let T=1-Math.sqrt(E)/o,C=r*T*T,I=g*l+b;this.#o[I]+=(s-this.#o[I])*C,this.#s[I]+=(a-this.#s[I])*C}}}swirl(e,t,s,a){if(!this.on)return;let o=this.#a,r=this.#n,l=a*a,d=Math.max(0,Math.floor((e-a-this.#e)/r)),m=Math.min(o-1,Math.ceil((e+a-this.#e)/r)),p=Math.max(0,Math.floor((t-a-this.#t)/r)),c=Math.min(this.#r-1,Math.ceil((t+a-this.#t)/r));for(let h=p;h<=c;h++){let u=this.#t+(h+.5)*r-t;for(let g=d;g<=m;g++){let v=this.#e+(g+.5)*r-e,b=v*v+u*u;if(b>=l||b<1e-6)continue;let k=Math.sqrt(b),E=k/a,T=s*6.75*E*(1-E)*(1-E)/k,C=h*o+g;this.#o[C]-=u*T,this.#s[C]+=v*T}}}step(e){this.on&&(this.#A(e),this.confinement>0&&this.#f(e),this.#p())}#A(e){let t=this.#a,s=this.#r,a=t*s,o=this.#o,r=this.#s,l=this.#i,d=this.#m;l.set(o.subarray(0,a)),d.set(r.subarray(0,a));let m=e/this.#n,p=Math.exp(-this.drag*e);for(let c=0,h=0;c<s;c++)for(let u=0;u<t;u++,h++){this.#g(u-.5*m*l[h],c-.5*m*d[h]);let g=this.#v(l),v=this.#v(d);this.#g(u-m*g,c-m*v),o[h]=this.#v(l)*p,r[h]=this.#v(d)*p}}#f(e){let t=this.#a,s=this.#r,a=this.#o,o=this.#s,r=this.#u,l=this.#i,d=2*this.#n;for(let p=0,c=0;p<s;p++)for(let h=0;h<t;h++,c++){let u=h<t-1?c+1:c,g=h>0?c-1:c,v=p<s-1?c+t:c,b=p>0?c-t:c;r[c]=(o[u]-o[g]-(a[v]-a[b]))/d,l[c]=Math.abs(r[c])}let m=this.confinement*this.#n*e;for(let p=1;p<s-1;p++)for(let c=1,h=p*t+1;c<t-1;c++,h++){let u=l[h+1]-l[h-1],g=l[h+t]-l[h-t],v=Math.sqrt(u*u+g*g)+1e-5;a[h]+=m*(g/v)*r[h],o[h]-=m*(u/v)*r[h]}}#p(){let e=this.#a,t=this.#r,s=this.#o,a=this.#s,o=this.#h,r=this.#u,l=this.#n,d=2*l;for(let m=0,p=0;m<t;m++)for(let c=0;c<e;c++,p++){let h=c<e-1?s[p+1]:s[p],u=c>0?s[p-1]:s[p],g=m<t-1?a[p+e]:a[p],v=m>0?a[p-e]:a[p];r[p]=(h-u+g-v)/d*l*l}for(let m=0;m<10;m++)for(let p=0,c=0;p<t;p++)for(let h=0;h<e;h++,c++){let u=h<e-1?o[c+1]:0,g=h>0?o[c-1]:0,v=p<t-1?o[c+e]:0,b=p>0?o[c-e]:0;o[c]=(u+g+v+b-r[c])*.25}for(let m=0,p=0;m<t;m++)for(let c=0;c<e;c++,p++){let h=c<e-1?o[p+1]:0,u=c>0?o[p-1]:0,g=m<t-1?o[p+e]:0,v=m>0?o[p-e]:0;s[p]-=(h-u)/d,a[p]-=(g-v)/d}}#g(e,t){let s=this.#a,a=this.#r;e<0?e=0:e>s-1&&(e=s-1),t<0?t=0:t>a-1&&(t=a-1);let o=e|0,r=t|0;o>s-2&&(o=s-2),r>a-2&&(r=a-2),this.#E=e-o,this.#L=t-r,this.#R=r*s+o}#v(e){let t=this.#R,s=this.#a,a=this.#E,o=this.#L;return(e[t]*(1-a)+e[t+1]*a)*(1-o)+(e[t+s]*(1-a)+e[t+s+1]*a)*o}};var st=4,Yc=.8,sn=class{#e;#t=0;#a=0;#r=new Float32Array(5);constructor(){if(typeof document>"u"||typeof Path2D!="function")return;let e=(de.width+2)*st,t=(de.height+2)*st,s=document.createElement("canvas");s.width=e,s.height=t;let a=s.getContext("2d",{willReadFrequently:!0});if(!a)return;a.filter=`blur(${Yc*st}px)`,a.setTransform(st,0,0,st,st,st),a.fillStyle="#000",a.strokeStyle="#000",a.lineWidth=de.stroke(3),a.lineJoin="miter";for(let l of de.paths){let d=new Path2D(l);a.fill(d),a.stroke(d)}let o=a.getImageData(0,0,e,t).data,r=new Float32Array(e*t);for(let l=0;l<r.length;l++)r[l]=o[l*4+3]/255;this.#e=r,this.#t=e,this.#a=t}get ready(){return!!this.#e}rasterize(e,t,s,a,o,r,l,d,m,p){p.fill(0,0,d*m);let c=this.#e;if(!c)return;let h=this.#r,u=e.corners,g=this.#t,v=this.#a;for(let b=0;b<e.count;b++){e.place(b,h);let k=h[0],E=h[1],T=Math.cos(h[2]),C=Math.sin(h[2]),I=h[3],H=h[4],V=u[b*6],R=u[b*6+1],q=u[b*6+2],M=u[b*6+3],S=u[b*6+4],w=u[b*6+5],F=Number.POSITIVE_INFINITY,$=Number.NEGATIVE_INFINITY,_=Number.POSITIVE_INFINITY,Z=Number.NEGATIVE_INFINITY;for(let N=0;N<3;N++){let U=u[b*6+2*N],oe=u[b*6+2*N+1],le=(t+(k+U*T-oe*C)*a-o)/l,Ce=(s+(E+U*C+oe*T)*a-r)/l;le<F&&(F=le),le>$&&($=le),Ce<_&&(_=Ce),Ce>Z&&(Z=Ce)}let pe=Math.max(0,Math.floor(F)),ke=Math.min(d-1,Math.ceil($)),be=Math.max(0,Math.floor(_)),x=Math.min(m-1,Math.ceil(Z));for(let N=be;N<=x;N++)for(let U=pe;U<=ke;U++){let oe=0;for(let Ce=0;Ce<2;Ce++)for(let D=0;D<2;D++){let K=(o+(U+.25+.5*D)*l-t)/a-k,J=(r+(N+.25+.5*Ce)*l-s)/a-E,Y=K*T+J*C,ne=-K*C+J*T,Me=(q-V)*(ne-R)-(M-R)*(Y-V),ae=(S-q)*(ne-M)-(w-M)*(Y-q),me=(V-S)*(ne-w)-(R-w)*(Y-S);if(!(Me>=0&&ae>=0&&me>=0||Me<=0&&ae<=0&&me<=0))continue;let ce=Math.round((I+Y+1)*st),ee=Math.round((H+ne+1)*st);ce>=0&&ee>=0&&ce<g&&ee<v&&(oe+=c[ee*g+ce])}let le=N*d+U;oe/4>p[le]&&(p[le]=oe/4)}}}};var _c=37.666666666666664,Xc=1500,Ra=()=>performance.now(),an=class{constructor(){this.#e=Number.NEGATIVE_INFINITY;this.#t=Number.NEGATIVE_INFINITY;this.steps=0}#e;#t;input(){this.#e=Ra()}due(e=!1){let t=Ra();return e||t-this.#e<Xc||t-this.#t>=_c}stepped(){this.#t=Ra(),this.steps++}reset(){this.#t=Number.NEGATIVE_INFINITY}};var Or={rate:24,speed:26,beam:260,width:10,spread:7,reach:320,alpha:.55,size:1.4,variety:.7,bob:.35,twinkle:.45,colors:!0,pulse:.55,intro:2.4,curl:.6,breathe:.3,interactive:!0,radius:90,push:520,wake:.5,swirl:.5,follow:.5,burst:36,seed:3},Ae=1536,yt=12,Cs=5,Qc=30,Zc=22,Ir=140,Jc=1.6,ed=260,$t=[0,1,2,3,5,6,7].map(n=>n*Math.PI/4),Ea=new Float32Array($t.length),Pa=220,Fr=260,La=360,td=900,Ts=60,nd=.5,sd=5,ad=700,Hr=3,od=150,rd=30,Dr=36,$r=110,Nr=160,En=4,Rs=200,id=1.6,ld=8,cd=.8,dd=["--msp-color-text-subtle","--msp-color-brand-1","--msp-color-brand-2","--msp-color-brand-3","--msp-color-brand-4"],pd=dd.map(n=>`var(${n})`);function Aa(n){let e=n>>>0||1;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Es=class{#e;#t;#a;#r;#n;#o=new Float32Array(Ae);#s=new Float32Array(Ae);#i=new Float32Array(Ae);#m=new Float32Array(Ae);#h=new Float32Array(Ae);#u=new Float32Array(Ae);#R=new Float32Array(Ae);#E=new Float32Array(Ae);#L=new Float32Array(Ae);#A=new Float32Array(Ae);#f=new Uint8Array(Ae);#p=0;#g=new Uint16Array(Ae);#v=new Uint16Array(Ae);#J=new Uint16Array(Cs*yt);#j=new Uint16Array(Cs*yt);#d=["#888","#7a4f2f","#e0ae2c","#6f9a80","#3f86ad"];#l=0;#$=0;#b=1;#c=0;#y=0;#V=0;#N=0;#F=0;#M=0;#w=new an;#q=!1;#K=!0;#G=Number.NEGATIVE_INFINITY;#x;#S=0;#P=0;#k=0;#C=0;#U=!1;#O=0;#Q=0;#ee=0;#B=0;#T;#Z=0;#te=0;#z=1;#ue;#ne=0;#re;#H=new Float32Array(0);#Y=0;#ke=0;#ie=0;#Me=0;#fe=!0;#le;#oe=new Float32Array(Hr*2);constructor(e,t={},s={}){if(this.#t=e,this.#a=e.getContext("2d"),this.#e={...Or,...t},this.#n=Aa(this.#e.seed),this.#x=!!s.still,!this.#x){this.#le=new Ss;for(let a=0;a<this.#oe.length;a++)this.#oe[a]=this.#n()*Math.PI*2}}setOptions(e){let t=this.#e.seed;this.#e={...this.#e,...e},this.#e.seed!==t&&(this.#n=Aa(this.#e.seed),this.#p=0),this.#ce(),this.#x&&this.#se()}setOrigin(e,t){this.#c=e,this.#y=t,this.#ce(),this.#x&&this.#se()}#ce(){let e=this.#le;if(!e)return;let t=this.#e,s=Math.max(0,this.#c-Math.max(t.beam,t.reach)-Ts),a=Math.min(this.#l,this.#c+t.reach+Ts),o=Math.max(0,this.#y-t.reach-Ts),r=Math.min(this.#$,this.#y+t.reach+Ts);e.layout(s,o,Math.max(0,a-s),Math.max(0,r-o))}resize(){this.#w.input();let e=this.#t.clientWidth,t=this.#t.clientHeight,s=Math.min(2,globalThis.devicePixelRatio||1);e===this.#l&&t===this.#$&&s===this.#b||(this.#l=e,this.#$=t,this.#b=s,this.#t.width=Math.round(e*s),this.#t.height=Math.round(t*s),this.readColors(),this.#ce(),this.#x&&this.#se())}readColors(){if(typeof getComputedStyle!="function")return;let e=this.#t,t=e.style.color,s=!this.#ue;for(let a=0;a<Cs;a++){e.style.color=pd[a],this.#r??=getComputedStyle(e);let o=this.#r.color;o&&o!==this.#d[a]&&(this.#d[a]=o,s=!0)}if(e.style.color=t,this.#a&&s){let a=this.#a.createLinearGradient(0,0,de.width-2,0);a.addColorStop(0,this.#d[1]),a.addColorStop(.35,this.#d[2]),a.addColorStop(.6,this.#d[3]),a.addColorStop(1,this.#d[4]),this.#ue=a}}setWord(e,t,s){if(this.#Z=e,this.#te=t,this.#z=s,this.#Se(),this.#T)return!0;if(this.#x||typeof Path2D!="function")return!1;let a=new gt(this.#e.seed+8);return a.onSnap=()=>{this.#ne+=this.#e.burst*.6},this.#T=a,this.#re=new sn,a.scatter(),!0}#Se(){let e=Math.ceil((de.width*this.#z+2*Rs)/En),t=Math.ceil((de.height*this.#z+2*Rs)/En);this.#H.length<e*t&&(this.#H=new Float32Array(e*t)),this.#Y=this.#Z-Rs,this.#ke=this.#te-Rs,this.#ie=e,this.#Me=t,this.#fe=!0}#Ce(e,t){let s=(e-this.#Y)/En,a=(t-this.#ke)/En;return s<0||a<0||s>=this.#ie||a>=this.#Me?1:1-Math.min(1,this.#H[(a|0)*this.#ie+(s|0)]*id)}shatterAt(e,t){let s=this.#T;if(!s||!this.#e.interactive||this.#x)return!1;let a=(e-this.#Z)/this.#z,o=(t-this.#te)/this.#z;if(!s.hits(a,o))return!1;this.#w.input(),s.shatter(a,o);let r=Pa*Pa;for(let d=0;d<this.#p;d++){let m=this.#o[d]-e,p=this.#s[d]-t,c=m*m+p*p;if(c>=r)continue;let h=Math.sqrt(c)+.001,u=1-h/Pa;this.#i[d]+=m/h*Fr*u,this.#m[d]+=p/h*Fr*u}let l=this.#le;if(l){let d=this.#n()*Math.PI*2,m=Math.cos(d)*Dr,p=Math.sin(d)*Dr;l.swirl(e+m,t+p,Nr,$r),l.swirl(e-m,t-p,-Nr,$r)}return this.#ne+=this.#e.burst,!0}pointerMove(e,t,s){if(!(!this.#e.interactive||this.#x)){if(this.#w.input(),this.#U&&this.#O){let a=Math.max(.008,(s-this.#O)/1e3);this.#k+=((e-this.#S)/a-this.#k)*.35,this.#C+=((t-this.#P)/a-this.#C)*.35,this.#Q=Math.min(1,this.#Q+Math.hypot(e-this.#S,t-this.#P)/ed)}this.#S=e,this.#P=t,this.#O=s,this.#U=!0,this.#T?.setPointer((e-this.#Z)/this.#z,(t-this.#te)/this.#z)}}pointerLeave(){this.#U=!1,this.#T?.clearPointer(),this.#k=0,this.#C=0}pointerDown(e,t,s){!this.#e.interactive||this.#x||(this.pointerMove(e,t,s),this.#ne+=this.#e.burst)}start(){this.#q=!0,this.#w.input(),this.#x?this.#se():this.#de()}stop(){this.#q=!1,this.#M&&it(this.#M),this.#M=0}setVisible(e){this.#K=e,e&&this.#de()}dispose(){this.stop()}get steps(){return this.#w.steps}#de(){this.#x||!this.#q||!this.#K||this.#M||(this.#F=0,this.#w.reset(),this.#M=Ne(this.#pe))}#pe=e=>{if(this.#M=0,!this.#q||!this.#K)return;if(!this.#w.due(!!this.#T&&!this.#T.whole)){this.#M=Ne(this.#pe);return}this.#w.stepped();let t=this.#F?Math.min(.1,(e-this.#F)/1e3):1/60;this.#F=e,e-this.#G>1500&&(this.#G=e,this.readColors()),e-this.#O>80&&(this.#k*=.85,this.#C*=.85),this.#X(t),this.#ge(),this.#M=Ne(this.#pe)};#se(){if(this.#l){this.#p=0,this.#N=0,this.#n=Aa(this.#e.seed);for(let e=0;e<Qc;e+=1/30)this.#X(1/30);this.#ge()}}#D(){if(this.#p>=Ae)return;let e=this.#e,t=this.#p++;this.#o[t]=this.#c-e.beam,this.#s[t]=this.#y+(this.#n()*2-1)*e.width;let s=this.#y-this.#s[t],a=Math.hypot(e.beam,s)||1,o=e.speed*(.8+this.#n()*.4);this.#i[t]=o*e.beam/a,this.#m[t]=o*s/a,this.#h[t]=o,this.#f[t]=0,this.#E[t]=this.#n()*Math.PI*2,this.#L[t]=.55+this.#n()*.35,this.#A[t]=.6+this.#n()*.9}#I(e){if(this.#p>=Ae)return;let t=this.#e,s=this.#p++,a=1+Math.floor(this.#n()*4),o=this.#he(a,e*1.6),r=t.speed*(2.2+this.#n()*1.6);this.#o[s]=this.#c,this.#u[s]=this.#c,this.#s[s]=this.#y,this.#R[s]=this.#y,this.#i[s]=r*Math.cos(o),this.#m[s]=r*Math.sin(o),this.#h[s]=t.speed*(.8+this.#n()*.4),this.#f[s]=a,this.#E[s]=this.#n()*Math.PI*2,this.#L[s]=this.#me(),this.#A[s]=.6+this.#n()*.9}#me(){let e=this.#n();return 1+this.#e.variety*2*e*e*e}#he(e,t){let s=0;for(let r=0;r<$t.length;r++){let l=Math.max(0,Math.cos($t[r]-this.#ee));Ea[r]=1+this.#B*6*l*l*l,s+=Ea[r]}let a=this.#n()*s,o=$t[$t.length-1];for(let r=0;r<$t.length;r++)if(a-=Ea[r],a<=0){o=$t[r];break}return o+t*((e-1)/1.5-1)+(this.#n()*2-1)*t*.22}#_(e){let t=--this.#p;this.#o[e]=this.#o[t],this.#s[e]=this.#s[t],this.#i[e]=this.#i[t],this.#m[e]=this.#m[t],this.#h[e]=this.#h[t],this.#u[e]=this.#u[t],this.#R[e]=this.#R[t],this.#f[e]=this.#f[t],this.#E[e]=this.#E[t],this.#L[e]=this.#L[t],this.#A[e]=this.#A[t]}#X(e){let t=this.#e;this.#N+=e;let s=this.#N;this.#Q=Math.max(0,this.#Q-e/Jc),this.#T?.step(e);let a=this.#T;a&&this.#re?.ready&&this.#ie&&(this.#fe||!a.resting)&&(this.#re.rasterize(a,this.#Z,this.#te,this.#z,this.#Y,this.#ke,En,this.#ie,this.#Me,this.#H),this.#fe=!1);let o=!this.#T||this.#T.whole,r=t.intro>0?Math.min(1,Math.max(0,(s/t.intro-.5)*2)):1,l=1+(ld-1)*(1-r*r*(3-2*r)),d=t.spread*Math.PI/180*(1+t.breathe*Math.sin(s*.37)),m=this.#U&&t.interactive?t.follow:0;m&&(this.#ee=Math.atan2(this.#P-this.#y,this.#S-this.#c)),this.#B+=(m-this.#B)*Math.min(1,e*1.5);let p=.5+.35*Math.sin(s*.83)+.15*Math.sin(s*2.1+1.3);for(this.#V+=e*t.rate*(1-t.pulse+t.pulse*2*p)*(1+2*this.#Q)*l;this.#V>=1;)this.#V-=1,this.#D();for(;this.#ne>=1;)this.#ne-=1,this.#I(d);let c=this.#U&&t.interactive,h=this.#le;if(h){if(t.curl>0)for(let C=0;C<Hr;C++){let I=this.#c+t.reach*.55*Math.sin(s*(.05+.03*C)+this.#oe[2*C]),H=this.#y+t.reach*.45*Math.cos(s*(.04+.025*C)+this.#oe[2*C+1]);h.swirl(I,H,(C%2?-1:1)*t.curl*rd*e,od)}if(c&&t.wake>0&&(this.#k||this.#C)){let C=t.wake*Math.min(1,ad/(Math.sqrt(this.#k*this.#k+this.#C*this.#C)||1));h.drive(this.#S,this.#P,this.#k*C,this.#C*C,t.radius*.7,Math.min(1,e*12))}h.drag=nd,h.confinement=t.swirl*sd,h.step(e)}let u=this.#T?this.#T.pull:0,g=this.#Z+(de.width/2-1)*this.#z,v=this.#te+(de.height/2-1)*this.#z,b=La*La,k=t.radius,E=k*k,T=Math.min(1,e/cd);for(let C=0;C<this.#p;C++){let I=this.#i[C],H=this.#m[C],V=this.#o[C],R=this.#s[C];if(c){let Z=V-this.#S,pe=R-this.#P,ke=Z*Z+pe*pe;if(ke<E){let be=Math.sqrt(ke)+.001,x=1-be/k,N=x*x;I+=Z/be*t.push*N*e,H+=pe/be*t.push*N*e}}let q=Math.sqrt(I*I+H*H)||1,M=1+(this.#h[C]/q-1)*T;if(I*=M,H*=M,u>0){let Z=g-V,pe=v-R,ke=Z*Z+pe*pe;if(ke<b){let be=Math.sqrt(ke)+.001,x=td*u*(1-be/La)*e;I+=Z/be*x,H+=pe/be*x}}let S=this.#f[C]===0?l:1,w=I*S,F=H*S,$=V+w*e,_=R+F*e;if(h?.on){let Z=e/2;h.sample(V,R);let pe=h.su,ke=h.sv;h.sample(V+(w+pe)*Z,R+(F+ke)*Z);let be=h.su,x=h.sv;h.sample(V+(w+be)*Z,R+(F+x)*Z);let N=h.su,U=h.sv;h.sample(V+(w+N)*e,R+(F+U)*e),$+=(pe+2*be+2*N+h.su)*e/6,_+=(ke+2*x+2*U+h.sv)*e/6}if(this.#i[C]=I,this.#m[C]=H,this.#o[C]=$,this.#s[C]=_,this.#f[C]===0)if(o&&V<this.#c&&$>=this.#c&&Math.abs(_-this.#y)<=Zc){let Z=1+Math.floor(this.#n()*4);this.#f[C]=Z;let pe=this.#he(Z,d),ke=Math.hypot(I,H)*Math.min(3,l);this.#i[C]=ke*Math.cos(pe),this.#m[C]=ke*Math.sin(pe),this.#u[C]=$,this.#R[C]=_,this.#L[C]=this.#me()}else($>this.#c+Ir||$<this.#c-t.beam*1.5||Math.abs(_-this.#y)>t.reach)&&(this.#_(C),C--);else{let Z=$-this.#u[C],pe=_-this.#R[C];Z*Z+pe*pe>t.reach*t.reach&&(this.#_(C),C--)}}}#ve(e){let t=this.#e,s;if(this.#f[e]===0){let a=this.#o[e],o=1-(this.#c-a)/t.beam;s=t.alpha/3*Math.min(1,Math.max(0,o*3)),a>this.#c&&(s*=Math.max(0,1-(a-this.#c)/Ir))}else{let a=Math.hypot(this.#o[e]-this.#u[e],this.#s[e]-this.#R[e])/t.reach;s=t.alpha*Math.min(1,a*12)*(1-a)**1.6}return s*=this.#Ce(this.#o[e],this.#s[e]),s*=1-t.twinkle+t.twinkle*(.5+.5*Math.sin(this.#N*(1.4+2.6*this.#A[e])+this.#E[e])),Math.max(0,Math.min(yt-1,Math.round(s/Math.max(t.alpha,1e-6)*(yt-1))))}#ge(){let e=this.#a;if(!e)return;let t=this.#e,s=this.#b;e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,this.#t.width,this.#t.height),e.setTransform(s,0,0,s,0,0);let a=this.#J;a.fill(0);for(let l=0;l<this.#p;l++){let m=(t.colors?this.#f[l]:0)*yt+this.#ve(l);this.#v[l]=m,a[m]++}let o=0;for(let l=0;l<a.length;l++)this.#j[l]=o,o+=a[l];a.fill(0);for(let l=0;l<this.#p;l++){let d=this.#v[l];this.#g[this.#j[d]+a[d]++]=l}let r=this.#N;for(let l=0;l<Cs;l++){e.fillStyle=this.#d[l];for(let d=1;d<yt;d++){let m=l*yt+d,p=a[m];if(!p)continue;e.globalAlpha=t.alpha*d/(yt-1),e.beginPath();let c=this.#j[m];for(let h=0;h<p;h++){let u=this.#g[c+h],g=this.#o[u],v=this.#s[u],b=t.size*this.#L[u];this.#f[u]!==0&&(b*=1+t.bob*Math.sin(r*(1.5+2*this.#A[u])+this.#E[u])),!(b<.2)&&(e.moveTo(g+b,v),e.arc(g,v,b,0,Math.PI*2))}e.fill()}}e.globalAlpha=1,this.#T?.draw(e,this.#Z,this.#te,this.#z,this.#ue??this.#d[1],this.#d[0],1,this.#b)}};var _r={rate:3.4,k:1.1,spectrum:.4,speed:64,prism:1.2,glow:.35,ripples:.45,spawn:160,decay:1.6,alpha:.6,size:1.3,colors:!0,interactive:!0,radius:36,barrier:2,kick:1.4,seed:3},A=128,Br=7,ve=5,ye=A*A,Nt=.15,jr=4,Ot=14,md=.18,za=1.6,hd=34,Vr=.45,qr=1.5,at=12,ud=20,Wr=7,Kr=8,fd=.07,Gr=14,vd=.8,Ur=10,Yr=10,gd=.5,bd=.25,yd=1.5,xd=.45,Ia=Ot+6,wd=.45,kd=5,Md=3,Sd=1.2,Cd=320,Td=1.6,xt=1500,Rd=5,Ed=.3,Pd=.25,Ld=.22,wt=10,Pn=5,Ad=3,Ps=.5,zd=["--msp-color-text-subtle","--msp-color-brand-1","--msp-color-brand-2","--msp-color-brand-3","--msp-color-brand-4"],Id=zd.map(n=>`var(${n})`);function Fa(n){let e=n>>>0||1;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Ha=new Uint16Array(A);for(let n=0;n<A;n++){let e=0;for(let t=0;t<Br;t++)e|=(n>>t&1)<<Br-1-t;Ha[n]=e}var In=new Float64Array(A/2),Fn=new Float64Array(A/2);for(let n=0;n<A/2;n++)In[n]=Math.cos(-2*Math.PI*n/A),Fn[n]=Math.sin(-2*Math.PI*n/A);function Fd(n,e){for(let t=0;t<ye;t+=A)for(let s=A;s>=2;s>>=1){let a=s>>1,o=A/s;for(let r=0;r<A;r+=s)for(let l=0;l<a;l++){let d=In[l*o],m=Fn[l*o],p=t+r+l,c=p+a,h=n[p],u=e[p],g=h-n[c],v=u-e[c];n[p]=h+n[c],e[p]=u+e[c],n[c]=g*d-v*m,e[c]=g*m+v*d}}for(let t=A;t>=2;t>>=1){let s=t>>1,a=A/t;for(let o=0;o<A;o+=t)for(let r=0;r<s;r++){let l=In[r*a],d=Fn[r*a],m=(o+r)*A,p=m+s*A;for(let c=0;c<A;c++){let h=m+c,u=p+c,g=n[h],v=e[h],b=g-n[u],k=v-e[u];n[h]=g+n[u],e[h]=v+e[u],n[u]=b*l-k*d,e[u]=b*d+k*l}}}}function Hd(n,e){for(let t=2;t<=A;t<<=1){let s=t>>1,a=A/t;for(let o=0;o<A;o+=t)for(let r=0;r<s;r++){let l=In[r*a],d=-Fn[r*a],m=(o+r)*A,p=m+s*A;for(let c=0;c<A;c++){let h=m+c,u=p+c,g=n[u]*l-e[u]*d,v=n[u]*d+e[u]*l;n[u]=n[h]-g,e[u]=e[h]-v,n[h]+=g,e[h]+=v}}}for(let t=0;t<ye;t+=A)for(let s=2;s<=A;s<<=1){let a=s>>1,o=A/s;for(let r=0;r<A;r+=s)for(let l=0;l<a;l++){let d=In[l*o],m=-Fn[l*o],p=t+r+l,c=p+a,h=n[c]*d-e[c]*m,u=n[c]*m+e[c]*d;n[c]=n[p]-h,e[c]=e[p]-u,n[p]+=h,e[p]+=u}}}function Ln(n,e){let t=Math.abs(e),s=Math.abs(n),a=t>s?t:s;if(a===0)return 0;let o=(t<s?t:s)/a,r=o*o,l=((-.0464964749*r+.15931422)*r-.327622764)*r*o+o;return s>t&&(l=1.5707963267948966-l),e<0&&(l=3.141592653589793-l),n<0?-l:l}var Da=new Float64Array(ye),$a=new Float64Array(ye),An=new Float32Array(ye),Na=new Float32Array(ye),zn=new Float32Array(ye);for(let n=0;n<A;n++){let e=Ha[n],t=2*Math.PI*(e<A/2?e:e-A)/A,s=Math.max(0,Ot-Math.min(n,A-1-n))/Ot;for(let a=0;a<A;a++){let o=Ha[a],r=2*Math.PI*(o<A/2?o:o-A)/A,l=-(r*r+t*t)*Nt/2;Da[n*A+a]=Math.cos(l)/ye,$a[n*A+a]=Math.sin(l)/ye;let d=Math.max(0,Ot-Math.min(a,A-1-a))/Ot,m=Math.max(d,s);An[n*A+a]=1-md*m*m,Na[n*A+a]=Math.sqrt(An[n*A+a]);let p=Math.hypot(a+.5-A/2,n+.5-A/2)/(A/2-Ot),c=Math.min(1,Math.max(0,(1-p)/wd));zn[n*A+a]=c*c*(3-2*c)}}var on=(()=>{let n=[];for(let e=1;e<A-1;e++)for(let t=1;t<A-1;t++)zn[e*A+t]>0&&n.push(e*A+t);return Int32Array.from(n)})(),Ls=class{#e;#t;#a;#r;#n;#o;#s=new Float64Array(ye);#i=new Float64Array(ye);#m=new Float32Array(ye);#h=new Float64Array(ye);#u=new Float64Array(ye);#R=new Float64Array(ye);#E=new Float64Array(ye);#L=new Float32Array(A);#A=new Float32Array(A);#f=new Float32Array(A);#p=new Float32Array(A);#g=new Float32Array(ye);#v=new Float32Array(ye);#J=new Float32Array(ye);#j=new Float32Array(on.length);#d=Ps;#l=0;#$=!1;#b=!0;#c=0;#y=0;#V=0;#N=new Float32Array(at);#F=new Float32Array(at);#M=new Float32Array(at);#w=new Float32Array(at);#q=new Float32Array(at);#K=new Float32Array(at);#G=new Float32Array(at);#x=new Uint8Array(at);#S=0;#P=new Float32Array(xt);#k=new Float32Array(xt);#C=new Float32Array(xt);#U=0;#O=0;#Q=new Float32Array(xt);#ee=new Uint8Array(xt);#B=0;#T=new Uint16Array(xt);#Z=new Uint16Array(xt);#te=new Uint16Array(Pn*wt);#z=new Uint16Array(Pn*wt);#ue;#ne;#re=null;#H=["#888","#7a4f2f","#e0ae2c","#6f9a80","#3f86ad"];#Y=new Uint8Array(Pn*3);#ke=new Float32Array(ye);#ie=new Float32Array(ye);#Me=new Float32Array(ye);#fe=!1;#le=1/60;#oe=!1;#ce;#Se=0;#Ce=0;#de=1;#pe=0;#se=0;#D=0;#I=0;#me=0;#he=0;#_=0;#X=new an;#ve=!1;#ge=!0;#ze=Number.NEGATIVE_INFINITY;#Ie=0;#Fe=0;#Re=!1;#W;#be=0;#ye=0;#ae=1;#He=!0;#Ee;#xe=new Float32Array(ye);#De=0;#Pe=0;constructor(e,t={},s={}){if(this.#t=e,this.#a=e.getContext("2d"),this.#e={..._r,...t},this.#n=Fa(this.#e.seed),this.#o=!!s.still,typeof document<"u"&&this.#a){let a=document.createElement("canvas");a.width=A,a.height=A;let o=a.getContext("2d");o&&(this.#ne=a,this.#re=o,this.#ue=o.createImageData(A,A))}}setOptions(e){let t=this.#e.seed;this.#e={...this.#e,...e},this.#e.seed!==t&&(this.#n=Fa(this.#e.seed),this.#s.fill(0),this.#i.fill(0),this.#B=0,this.#S=0,this.#U=0,this.#O=0,this.#l=0,this.#d=Ps,this.#$=!1),this.#b=!0,this.#o&&this.#Te()}setOrigin(e,t){this.#pe=e,this.#se=t,this.#D=e-.47*A*ve,this.#I=t-.5*A*ve,this.#b=!0,this.#o&&this.#Te()}resize(){this.#X.input();let e=this.#t.clientWidth,t=this.#t.clientHeight,s=Math.min(2,globalThis.devicePixelRatio||1);e===this.#Se&&t===this.#Ce&&s===this.#de||(this.#Se=e,this.#Ce=t,this.#de=s,this.#t.width=Math.round(e*s),this.#t.height=Math.round(t*s),this.readColors(),this.#o&&this.#Te())}readColors(){if(typeof getComputedStyle!="function")return;let e=this.#t,t=e.style.color,s=!this.#ce;for(let a=0;a<Pn;a++){e.style.color=Id[a],this.#r??=getComputedStyle(e);let o=this.#r.color;if(!o||o===this.#H[a])continue;this.#H[a]=o,s=!0;let r=/rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/.exec(o);r&&(this.#Y[a*3]=+r[1],this.#Y[a*3+1]=+r[2],this.#Y[a*3+2]=+r[3])}if(e.style.color=t,this.#oe=.299*this.#Y[0]+.587*this.#Y[1]+.114*this.#Y[2]>128,this.#a&&s){let a=this.#a.createLinearGradient(0,0,de.width-2,0);a.addColorStop(0,this.#H[1]),a.addColorStop(.35,this.#H[2]),a.addColorStop(.6,this.#H[3]),a.addColorStop(1,this.#H[4]),this.#ce=a}}setWord(e,t,s){if(this.#be=e,this.#ye=t,this.#ae=s,this.#W)return!0;if(this.#o||typeof Path2D!="function")return!1;let a=new gt(this.#e.seed+8);return a.onSnap=()=>{this.#Pe+=3},this.#W=a,this.#Ee=new sn,a.scatter(),!0}shatterAt(e,t){let s=this.#W;if(!s||!this.#e.interactive||this.#o)return!1;let a=(e-this.#be)/this.#ae,o=(t-this.#ye)/this.#ae;return s.hits(a,o)?(this.#X.input(),s.shatter(a,o),this.#je(e,t,this.#e.kick*1.6,90),this.#b=!0,!0):!1}pointerMove(e,t,s){!this.#e.interactive||this.#o||(this.#X.input(),this.#Ie=e,this.#Fe=t,this.#Re=!0,this.#b=!0,this.#W?.setPointer((e-this.#be)/this.#ae,(t-this.#ye)/this.#ae))}pointerLeave(){this.#Re=!1,this.#b=!0,this.#W?.clearPointer()}pointerDown(e,t,s){!this.#e.interactive||this.#o||(this.pointerMove(e,t,s),this.#je(e,t,this.#e.kick,70))}start(){this.#ve=!0,this.#X.input(),this.#o?this.#Te():this.#$e()}stop(){this.#ve=!1,this.#_&&it(this.#_),this.#_=0}setVisible(e){this.#ge=e,e&&this.#$e()}dispose(){this.stop()}get steps(){return this.#X.steps}#$e(){this.#o||!this.#ve||!this.#ge||this.#_||(this.#he=0,this.#X.reset(),this.#_=Ne(this.#Le))}#Le=e=>{if(this.#_=0,!this.#ve||!this.#ge)return;if(!this.#X.due(!!this.#W&&!this.#W.whole)){this.#_=Ne(this.#Le);return}this.#X.stepped();let t=this.#he?Math.min(.1,(e-this.#he)/1e3):1/60;this.#he=e,e-this.#ze>1500&&(this.#ze=e,this.readColors()),this.#le=t,this.#qe(t),this.#We(),this.#_=Ne(this.#Le)};#Te(){if(this.#Se){this.#s.fill(0),this.#i.fill(0),this.#B=0,this.#S=0,this.#U=0,this.#O=0,this.#l=0,this.#d=Ps,this.#$=!1,this.#me=0,this.#n=Fa(this.#e.seed);for(let e=0;e<6;e+=1/20)this.#qe(1/20);this.#We()}}#Ne(){let e=this.#e;return e.speed/(Math.max(.2,e.k)*ve)}#Ke(){let e=this.#e,t=this.#s,s=this.#i,a=2*Yr*Yr;for(let o=0;o<Ur;o++){let r=(this.#se-this.#I)/ve,l=Ia+(o+.3+.4*this.#n())/Ur*(A-Ot-Ia),d=r+(this.#n()*2-1)*Gr*1.4,m=(this.#n()*2-1)*bd,p=e.k*(1+e.spectrum*(this.#n()*2-1)),c=p*Math.cos(m),h=p*Math.sin(m),u=this.#n()*Math.PI*2;for(let g=0;g<A;g++){let v=g-d;for(let b=0;b<A;b++){let k=b-l,E=gd*Math.exp(-(k*k+v*v)/a);if(E<1e-4)continue;let T=c*k+h*v+u,C=g*A+b;t[C]+=E*Math.cos(T),s[C]+=E*Math.sin(T)}}}}#Oe(e,t,s,a,o,r){let l=this.#S;l>=at||(this.#N[l]=e,this.#F[l]=t,this.#M[l]=Math.cos(s),this.#w[l]=Math.sin(s),this.#q[l]=a,this.#K[l]=o,this.#G[l]=this.#V,this.#x[l]=r?1:0,this.#S=l+1)}#Be(){let e=this.#s,t=this.#i;for(let s=0;s<this.#S;s++){let a=(this.#V-this.#G[s])/ud;if(a>=1){let S=--this.#S;this.#N[s]=this.#N[S],this.#F[s]=this.#F[S],this.#M[s]=this.#M[S],this.#w[s]=this.#w[S],this.#q[s]=this.#q[S],this.#K[s]=this.#K[S],this.#G[s]=this.#G[S],this.#x[s]=this.#x[S],s--;continue}let o=Math.sin(Math.PI*a),r=this.#K[s]*fd*o*o*Nt*(this.#x[s]?this.#l:1),l=this.#q[s],d=this.#M[s],m=this.#w[s],p=this.#N[s],c=this.#F[s],h=Math.abs(m)<.001,u=h?Wr:(Wr+Kr)/2,g=h?Kr:u,v=l*d,b=l*m,k=Math.max(1,Math.floor(p-3*u)),E=Math.min(A-2,Math.ceil(p+3*u)),T=Math.max(1,Math.floor(c-3*g)),C=Math.min(A-2,Math.ceil(c+3*g)),I=this.#L,H=this.#A;for(let S=k;S<=E;S++){let w=S-p,F=Math.exp(-(w*w)/(2*u*u));I[S]=F*Math.cos(v*w),H[S]=F*Math.sin(v*w)}let V=this.#V-this.#G[s],R=-l*l*V/2,q=this.#f,M=this.#p;for(let S=T;S<=C;S++){let w=S-c,F=r*Math.exp(-(w*w)/(2*g*g));q[S]=F*Math.cos(b*w+R),M[S]=F*Math.sin(b*w+R)}for(let S=T;S<=C;S++){let w=q[S],F=M[S];if(Math.abs(w)+Math.abs(F)<1e-7)continue;let $=S*A;for(let _=k;_<=E;_++)e[$+_]+=w*I[_]-F*H[_],t[$+_]+=w*H[_]+F*I[_]}}}#je(e,t,s,a){let o=(e-this.#D)/ve,r=(t-this.#I)/ve,l=a/ve,d=Math.max(0,Math.floor(o-l)),m=Math.min(A-1,Math.ceil(o+l)),p=Math.max(0,Math.floor(r-l)),c=Math.min(A-1,Math.ceil(r+l));for(let h=p;h<=c;h++)for(let u=d;u<=m;u++){let g=u-o,v=h-r,b=Math.sqrt(g*g+v*v);if(b>=l)continue;let k=1-b/l,E=s*b*k*k,T=h*A+u,C=Math.cos(E),I=Math.sin(E),H=this.#s[T],V=this.#i[T];this.#s[T]=H*C-V*I,this.#i[T]=H*I+V*C}}#Ge(e){let t=this.#e,s=this.#m;s.fill(0);let a=t.k*t.k/2,o=(this.#pe-this.#D)/ve,r=(this.#se-this.#I)/ve;if(this.#W&&this.#Ee?.ready){this.#Ee.rasterize(this.#W,this.#be,this.#ye,this.#ae,this.#D,this.#I,ve,A,A,this.#xe);let c=t.prism*a;for(let h=0;h<ye;h++)s[h]-=c*this.#xe[h]}else{this.#xe.fill(0);let c=hd/ve,h=t.prism*a,u=Math.ceil(c+qr+1);for(let g=Math.max(0,Math.floor(r-u));g<=Math.min(A-1,r+u);g++)for(let v=Math.max(0,Math.floor(o-u));v<=Math.min(A-1,o+u);v++){let b=v-o,k=g-r,E=Math.sqrt(b*b+k*k),T=Math.cos(4*Math.atan2(k,b)),C=c*(1-Vr+Vr*T*T),I=Math.min(1,Math.max(0,(C-E)/qr+.5));I>0&&(s[g*A+v]-=h*I*I*(3-2*I))}}if(this.#Re&&t.interactive&&t.barrier>0){let c=(this.#Ie-this.#D)/ve,h=(this.#Fe-this.#I)/ve,u=Math.max(1,t.radius/ve/1.5),g=2*u*u,v=3*u,b=t.barrier*a;for(let k=Math.max(0,Math.floor(h-v));k<=Math.min(A-1,h+v);k++)for(let E=Math.max(0,Math.floor(c-v));E<=Math.min(A-1,c+v);E++){let T=E-c,C=k-h;s[k*A+E]+=b*Math.exp(-(T*T+C*C)/g)}}if(e>0){let c=(this.#be+(de.width/2-1)*this.#ae-this.#D)/ve,h=(this.#ye+(de.height/2-1)*this.#ae-this.#I)/ve,u=Cd/ve,g=Td*a*e;for(let v=0;v<A;v++)for(let b=0;b<A;b++){let k=b-c,E=v-h,T=Math.sqrt(k*k+E*E);T<u&&(s[v*A+b]-=g*(1-T/u))}}let l=this.#h,d=this.#u,m=this.#R,p=this.#E;for(let c=0;c<ye;c++){if(s[c]===0){l[c]=Na[c],d[c]=0,m[c]=An[c],p[c]=0;continue}let h=-s[c]*Nt/2,u=Na[c],g=Math.cos(h),v=Math.sin(h);l[c]=g*u,d[c]=v*u,m[c]=(g*g-v*v)*An[c],p[c]=2*g*v*An[c]}}#Ae(e,t){let s=this.#s,a=this.#i;for(let o=0;o<ye;o++){let r=s[o],l=a[o];s[o]=r*e[o]-l*t[o],a[o]=r*t[o]+l*e[o]}}#Ue(e){let t=this.#s,s=this.#i;this.#Be(),this.#V+=Nt,this.#Ae(this.#h,this.#u);for(let a=0;a<e;a++){Fd(t,s);for(let o=0;o<ye;o++){let r=t[o],l=s[o];t[o]=r*Da[o]-l*$a[o],s[o]=r*$a[o]+l*Da[o]}Hd(t,s),a===e-1?this.#Ae(this.#h,this.#u):(this.#Ae(this.#R,this.#E),this.#Be(),this.#V+=Nt)}}#Ye(e){let t=this.#s,s=this.#i,a=this.#J,o=this.#g,r=this.#v,l=2.5*Math.max(.2,this.#e.k),d=l*l,m=0,p=0,c=this.#j,h=this.#xe;for(let u=0;u<on.length;u++){let g=on[u],v=t[g],b=s[g],k=v*v+b*b;a[g]=k;let E=h[g]*za,T=E>=1?0:k*(1-E);if(T>m&&(m=T),p+=T,c[u]=p,k<1e-9){o[g]=0,r[g]=0;continue}let C=t[g+1],I=s[g+1],H=t[g-1],V=s[g-1],R=(Ln(I*v-C*b,C*v+I*b)+Ln(b*H-v*V,v*H+b*V))/2,q=t[g+A],M=s[g+A],S=t[g-A],w=s[g-A],F=(Ln(M*v-q*b,q*v+M*b)+Ln(b*S-v*w,v*S+b*w))/2,$=R*R+F*F;if($>d){let _=l/Math.sqrt($);R*=_,F*=_}o[g]=R,r[g]=F}this.#d=Math.max(Ps,this.#d+(m-this.#d)*Math.min(1,e*Sd))}#we(e,t,s){let a=(t-this.#D)/ve,o=(s-this.#I)/ve;a<0?a=0:a>A-1.001&&(a=A-1.001),o<0?o=0:o>A-1.001&&(o=A-1.001);let r=a|0,l=o|0,d=a-r,m=o-l,p=l*A+r;return(e[p]*(1-d)+e[p+1]*d)*(1-m)+(e[p+A]*(1-d)+e[p+A+1]*d)*m}#Ve(e,t){let s=this.#e,a=Math.sqrt(e*e+t*t);if(a<.001||Math.abs(Ln(t,e))<Ld)return 0;let o=s.k*(1-s.spectrum),r=(a-o)/Math.max(.001,2*s.k*s.spectrum);return 1+Math.min(3,Math.max(0,Math.floor(r*4)))}#_e(e){let t=this.#j,s=t[t.length-1];if(s<.001)return!1;let a=this.#n()*s,o=0,r=t.length-1;for(;o<r;){let p=o+r>>1;t[p]<a?o=p+1:r=p}let l=on[o],d=l%A,m=l/A|0;return this.#P[e]=this.#D+(d+this.#n())*ve,this.#k[e]=this.#I+(m+this.#n())*ve,this.#C[e]=0,this.#Q[e]=this.#n()*Math.PI*2,this.#ee[e]=this.#Ve(this.#g[l],this.#v[l]),!0}#qe(e){let t=this.#e;this.#me+=e,this.#W?.step(e);let s=this.#W,a=s?s.pull:0;this.#l+=((s?s.assembled:1)-this.#l)*Math.min(1,e*Ad);let o=!s||s.whole;(o!==this.#He||a>0||this.#De>0||s&&!s.resting)&&(this.#b=!0),this.#He=o,this.#De=a,this.#b&&(this.#Ge(a),this.#b=!1);let r=(this.#pe-this.#D)/ve,l=(this.#se-this.#I)/ve;for(this.#$||(this.#$=!0,this.#Ke()),this.#y+=e*t.rate;this.#y>=1;){this.#y-=1;let b=l+(this.#n()*2-1)*Gr,k=t.k*(1+t.spectrum*(this.#n()*2-1));this.#Oe(Ia,b,0,k,vd,!0)}for(;this.#Pe>=1;){this.#Pe-=1;let b=Math.floor(this.#n()*8)*Math.PI/4,k=t.k*(1+t.spectrum*(this.#n()*2-1));this.#Oe(r+Math.cos(b)*4,l+Math.sin(b)*4,b,k,xd,!1)}this.#c+=e*this.#Ne();let d=0;for(;this.#c>=Nt&&d<jr;)this.#c-=Nt,d++;d===jr&&(this.#c=0),d&&this.#Ue(d),this.#Ye(e);let m=this.#Ne()*ve,p=Rd*Math.max(.1,t.decay),c=this.#D,h=this.#I,u=this.#D+A*ve,g=this.#I+A*ve;for(let b=0;b<this.#B;b++){let k=this.#P[b],E=this.#k[b],T=this.#we(this.#g,k,E)*m,C=this.#we(this.#v,k,E)*m,I=k+T*e/2,H=E+C*e/2,V=this.#we(this.#g,I,H),R=this.#we(this.#v,I,H),q=k+V*m*e,M=E+R*m*e;this.#P[b]=q,this.#k[b]=M,this.#C[b]+=e,this.#ee[b]===0&&(this.#ee[b]=this.#Ve(V,R)),(this.#C[b]>p||q<c||M<h||q>=u||M>=g||zn[((M-h)/ve|0)*A+((q-c)/ve|0)|0]===0)&&(this.#Xe(b),b--)}let v=this.#j[this.#j.length-1];for(this.#l>.9&&(this.#O=this.#O?this.#O+(v-this.#O)*Math.min(1,e*Pd):v),this.#U+=e*t.spawn*(this.#O>1e-6?v/this.#O:this.#l);this.#U>=1;)this.#U-=1,!(this.#B>=xt||!this.#_e(this.#B))&&this.#B++}#Xe(e){let t=--this.#B;this.#P[e]=this.#P[t],this.#k[e]=this.#k[t],this.#C[e]=this.#C[t],this.#Q[e]=this.#Q[t],this.#ee[e]=this.#ee[t]}#Qe(){let e=this.#ue;if(!e||!this.#re)return;let t=this.#e,s=e.data,a=this.#J,o=1/this.#d,r=Math.min(1,t.glow)*(this.#oe?Md:1)*255*Math.min(1,this.#me/yd),l=this.#Y,d=this.#ke,m=this.#ie,p=this.#Me;if(!this.#fe){let g=t.colors?6:0,v=t.colors?9:0;d.fill((l[g]+l[v])/2),m.fill((l[g+1]+l[v+1])/2),p.fill((l[g+2]+l[v+2])/2),this.#fe=!0}let c=Math.min(1,this.#le*kd),h=t.k*(1-t.spectrum),u=Math.max(.001,2*t.k*t.spectrum);for(let g=0;g<on.length;g++){let v=on[g],b=a[v]*o,k=v*4;if(b<1e-4){s[k+3]=0;continue}let E=l[0],T=l[1],C=l[2],I=1;if(t.colors){let q=this.#g[v],M=this.#v[v],S=Math.min(2.999,Math.max(0,(Math.sqrt(q*q+M*M)-h)/u*4-.5)),w=S|0,F=S-w,$=(1+w)*3,_=(2+w)*3;E=l[$]*(1-F)+l[_]*F,T=l[$+1]*(1-F)+l[_+1]*F,C=l[$+2]*(1-F)+l[_+2]*F,I=Math.min(1,b*12)}let H=c*I;d[v]+=(E-d[v])*H,m[v]+=(T-m[v])*H,p[v]+=(C-p[v])*H,s[k]=d[v],s[k+1]=m[v],s[k+2]=p[v];let V=1-t.ripples*.5*(1-this.#s[v]/Math.sqrt(a[v])),R=1-Math.min(1,this.#xe[v]*za);s[k+3]=Math.min(255,r*Math.min(1,Math.sqrt(b))*V*zn[v]*R)}this.#re.putImageData(e,0,0)}#We(){let e=this.#a;if(!e)return;let t=this.#e,s=this.#de;e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,this.#t.width,this.#t.height),e.setTransform(s,0,0,s,0,0),t.glow>0&&this.#ne&&(this.#Qe(),e.imageSmoothingEnabled=!0,this.#oe&&(e.globalCompositeOperation="lighter"),e.drawImage(this.#ne,this.#D,this.#I,A*ve,A*ve),e.globalCompositeOperation="source-over");let a=this.#te;a.fill(0);let o=-Math.LN2/Math.max(.1,t.decay);for(let d=0;d<this.#B;d++){let m=this.#C[d],p=this.#P[d],c=this.#k[d],h=1-Math.min(1,this.#we(this.#xe,p,c)*za),u=Math.min(1,m/Ed)*Math.exp(m*o)*this.#we(zn,p,c)*h,g=Math.max(0,Math.min(wt-1,Math.round(u*(wt-1)))),b=(t.colors?this.#ee[d]:0)*wt+g;this.#Z[d]=b,a[b]++}let r=0;for(let d=0;d<a.length;d++)this.#z[d]=r,r+=a[d];a.fill(0);for(let d=0;d<this.#B;d++){let m=this.#Z[d];this.#T[this.#z[m]+a[m]++]=d}let l=this.#me;for(let d=0;d<Pn;d++){e.fillStyle=this.#H[d];for(let m=1;m<wt;m++){let p=d*wt+m,c=a[p];if(!c)continue;e.globalAlpha=(d===0?.5:1)*t.alpha*m/(wt-1),e.beginPath();let h=this.#z[p];for(let u=0;u<c;u++){let g=this.#T[h+u],v=t.size*(d===0?.7:1)*(1+.25*Math.sin(l*2.2+this.#Q[g])),b=this.#P[g],k=this.#k[g];e.moveTo(b+v,k),e.arc(b,k,v,0,Math.PI*2)}e.fill()}}e.globalAlpha=1,this.#W?.draw(e,this.#be,this.#ye,this.#ae,this.#ce??this.#H[1],this.#H[0],1,this.#de)}};function Dd(){return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}function Xr(n){let e=i("canvas",{class:n.class?`${Ta.splash} ${n.class}`:Ta.splash,"aria-hidden":"true"}),t={still:Dd()},s=n.field==="quantum"?new Ls(e,{},t):new Es(e,{},t);n.options&&X(n.options,v=>s.setOptions(v));let a=0,o=0,r=()=>{let v=e.getBoundingClientRect();a=v.left,o=v.top},l=()=>{s.resize();let v=e.getBoundingClientRect();a=v.left,o=v.top;let k=n.mark?.()?.querySelector('[data-part="star"]')?.getBoundingClientRect();k?.width?s.setOrigin(k.left+k.width/2-v.left,k.top+k.height/2-v.top):s.setOrigin(v.width/2,v.height/2);let E=d(),T=E?.getBoundingClientRect();if(E&&T?.width){let C=T.width/de.width;s.setWord(T.left-v.left+C,T.top-v.top+C,C)&&(E.style.visibility="hidden")}},d=()=>{let v=n.mark?.();if(v)return v.matches("[role=img]")?v:v.querySelector("[role=img]")},m=he("PrismSplash"),p=!1;Ee(e,()=>{l(),p||(p=!0,m.disposed||Re(m,g),s.start())});let c=!0,h=!0,u=()=>s.setVisible(c&&h&&document.visibilityState==="visible");Lo(e,([v])=>{c=v?.isIntersecting??!0,u()}),B(document,"visibilitychange",u),B(window,"scroll",r,{capture:!0,passive:!0}),Vt(v=>{h=v,u()});function g(){let v=n.pointer?.();if(!v)return;let b={passive:!0};B(v,"pointermove",E=>s.pointerMove(E.clientX-a,E.clientY-o,E.timeStamp),b),B(v,"pointerdown",E=>{let T=E.clientX-a,C=E.clientY-o;s.shatterAt(T,C)||s.pointerDown(T,C,E.timeStamp)},b);let k=E=>{(E.type!=="pointerup"||E.pointerType!=="mouse")&&s.pointerLeave()};B(v,"pointerleave",k,b),B(v,"pointerup",k,b),B(v,"pointercancel",k,b)}return Q(()=>{let v=d();v&&(v.style.visibility=""),s.dispose()}),e}var $d=700,Nd=2/3,Od=250;function Qr(n){let e=O("gone"),t=c=>{let h=e.value,u=c==="out"&&h!=="in"?"gone":c;u!==h&&(e.set(u),u==="in"?n.onCanvasShown?.(!1):u==="out"&&n.onCanvasShown?.(!0))},s="gone",a=Wt(()=>t(s)),o=(c,h)=>{s=h,a.start(c)},r,l=!1,d=()=>{a.cancel(),r!==void 0&&(r?l||o($d,"in"):(t("out"),o(Od,"gone")))};Se(n.empty,c=>{c!==r&&(r=c,d())}),n.busy!==void 0&&Se(n.busy,c=>{l=c,d()}),n.onCanvasShown&&X(n.empty,c=>!c&&n.onCanvasShown?.(!0));let m=n.splash??!0,p=()=>{if(typeof m=="object")return"light";let c=n.field??"random";return c==="random"?Math.random()<Nd?"quantum":"light":c};return i(P,{when:f(e.asReadonly,c=>c!=="gone"),children:()=>{let c=i(pa,{scale:3,flash:"reveal",live:!m,prism:!m,class:Ms.mark});return y("div",{class:Ms.empty,"data-phase":e.asReadonly,children:[m?i("div",{class:Ms.splash,children:i(Xr,{field:p(),mark:()=>c,pointer:()=>c.closest("[data-msp-viewport]")??c.parentElement,options:m===!0?{}:m})}):null,c]})}})}var Hn={"drop-in":"msp-shell-file-drop-drop-in",hint:"msp-shell-file-drop-hint",overlay:"msp-shell-file-drop-overlay",target:"msp-shell-file-drop-target",title:"msp-shell-file-drop-title"};W("views/shell/file-drop.module.css",`@layer msp.components {
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
`);function Zr(n){let e=O(!1),t=a=>{Bd(a)&&e.set(!0)};B(n.target,"dragenter",t);let s=a=>{a.preventDefault(),a.stopPropagation(),a.dataTransfer&&(a.dataTransfer.dropEffect="copy")};return i("div",{class:Hn.overlay,hidden:f(e.asReadonly,a=>!a),onDragEnter:s,onDragOver:s,onDragLeave:()=>e.set(!1),onDrop:a=>{s(a),e.set(!1);let o=[...a.dataTransfer?.files??[]];o.length&&n.onDrop(o)},children:y("div",{class:Hn.target,children:[i(z,{name:"folder-open",size:24}),i("span",{class:Hn.title,children:"Drop to open"}),n.formats?.length?i("span",{class:Hn.hint,children:n.formats.join(", ")}):null]})})}function Bd(n){let e=n.dataTransfer?.types;if(!e)return!1;for(let t=0;t<e.length;t++)if(e[t]==="Files")return!0;return!1}var rn={body:"msp-shell-page-body",header:"msp-shell-page-header",headerContent:"msp-shell-page-headerContent",page:"msp-shell-page-page","page-in":"msp-shell-page-page-in",title:"msp-shell-page-title"};W("views/shell/page.module.css",`@layer msp.components {
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
`);function Jr(n){let{shell:e}=n,t=f(e.page,s=>s?.page);return i(P,{when:t,children:s=>i(jd,{shell:e,page:s})})}function jd(n){let{shell:e}=n,t={page:n.page,focus:e.page.value?.focus},s={shell:e,...t.focus?{focus:t.focus}:{}},a=y("section",{class:rn.page,role:"region","aria-label":t.page.title,tabIndex:-1,"data-msp-page":"",children:[y("header",{class:rn.header,children:[y("span",{class:rn.title,children:[t.page.icon?i(z,{name:t.page.icon}):null,t.page.title]}),i("div",{class:rn.headerContent,children:t.page.header?i(Ye,{renderer:t.page.header,ctx:s}):null}),i(xe,{variant:"ghost",size:"sm",icon:i(z,{name:"x"}),title:"Close (Esc)",onClick:()=>e.closePage()})]}),i("div",{class:rn.body,children:i(Ye,{renderer:t.page.render,ctx:s})})]}),o=mt(document);return B(document,"keydown",l=>{if(l.key!=="Escape"||l.defaultPrevented||!We(a,l))return;let d=mt(a);d&&d!==document.body&&!a.contains(d)||(e.closePage(),l.preventDefault())}),queueMicrotask(()=>{a.contains(mt(a))||a.focus({preventScroll:!0})}),Q(()=>{o?.isConnected&&o.focus({preventScroll:!0})}),a}var ei=44,je=8,Vd=34+je;function qd(n){let{shell:e,status:t}=n,s=e.dock("right"),a=f(e.mode,w=>w==="compact"),o=e.dock("top"),r=e.expanded,l=f(r,w=>!w),d=nt(e,s),m=f([d.floating,e.mode],(w,F)=>w&&F!=="compact"),p=nt(e,o).floating,c=f([nt(e,o).size,o.active,p,r],(w,F,$,_)=>`${$&&F&&!_?F.frame==="none"?w-Fs+je:je+w+je:je}px`),h=f([m,e.railShown,r],(w,F,$)=>w&&!F||$?0:ei),u=f([m,e.compactRail,r],(w,F,$)=>w&&F&&!$),g=f([h,u],(w,F)=>F?0:w),v=u,b=f([d.pinned,m,r],(w,F,$)=>F&&w&&!$),k=f([d.size,s.active,e.overlay,b,h],(w,F,$,_,Z)=>_?Z+(F||$?w:0):0),E=f([k,m,g],(w,F,$)=>w>0?w:F?$:0),T=f([d.size,s.active,e.overlay,m,b,h,r,a],(w,F,$,_,Z,pe,ke,be)=>`${Z||ke?je:(be?0:pe)+je+(_&&(F||$)?w+je:0)}px`),C=f([b,a,g,u,r],(w,F,$,_,Z)=>`${w||F||Z?je:(_?ei:$)+je}px`),I=f([s.active,m,r],(w,F,$)=>F&&w&&!$?"open":void 0),H=d.sizePx,V=f(h,w=>`${w+je}px`),R=i("div",{class:Dt.canvas,"data-msp-canvas":"","data-msp-scope":"canvas","data-quiet":n.empty?"":void 0,children:n.canvas}),q=w=>R.toggleAttribute("data-quiet",!w),M=y("div",{class:Dt.shell,"data-mode":e.mode,"data-expanded":f(r,w=>w?"":void 0),children:[i(P,{when:f([p,r],(w,F)=>!w&&!F),children:()=>i(Mn,{shell:e,dock:o})}),i(P,{when:l,children:()=>i(Mn,{shell:e,dock:e.dock("left")})}),y("main",{class:Dt.viewport,"data-msp-viewport":"",style:{"--msp-canvas-edge":`${je}px`,"--msp-canvas-right-inset":T,"--msp-canvas-corner-inset":C,"--msp-corner-room":`${Vd}px`,"--msp-canvas-top-inset":c,"--msp-canvas-end":f(E,w=>`${w}px`),"--msp-band-fade":`${Fs}px`,"--msp-band-dissolve":`${to}px`,"--msp-canvas-rail-inset":V,"--msp-right-panel-width":H,"--msp-canvas-panel-right":V,"--msp-canvas-pinned":f(k,w=>`${w}px`),background:n.ink?f(n.ink,w=>w.color):void 0},children:[R,y("div",{class:`${Dt.layer} ${Dt.canvasLayer}`,"data-msp-theme":n.ink?f(n.ink,w=>w.theme):"light",style:{"--msp-color-bg":n.ink?f(n.ink,w=>w.color):void 0},children:[i(P,{when:f([p,r],(w,F)=>w&&!F),children:()=>i(xa,{shell:e,dock:o})}),n.empty?i(Qr,{empty:n.empty,splash:n.splash??!0,field:n.splashField??"random",onCanvasShown:q,...n.busy?{busy:n.busy}:{}}):null,i("div",{class:L.lead,children:n.playback}),n.overlays,i(P,{when:v,children:()=>i(Pr,{shell:e})}),i("div",{class:L.bottom,"data-keeps-card":"",children:y("div",{class:L.bottomGrid,children:[i(Sa,{status:t,onOpenLog:n.onOpenLog,after:n.agent}),y("div",{class:L.corner,children:[i(Sr,{shell:e,lead:n.canvasLead,aside:n.canvasAside,...n.canvasLeadMenu?{leadMenu:n.canvasLeadMenu}:{},quiet:n.empty}),i(Er,{status:t,lead:n.context?.()})]})]})})]}),y("div",{class:Dt.layer,"data-right-panel":I,"data-pinned":f(b,w=>w?"":void 0),"data-overlay":f(e.overlay,w=>w?"open":void 0),children:[i(Rr,{shell:e}),i(Jr,{shell:e}),i(P,{when:l,children:()=>i(P,{when:m,fallback:()=>i(P,{when:f(a,w=>!w),children:()=>i("div",{class:`${L.toolbarSlot} ${L.frame}`,children:i(Rn,{shell:e})})}),children:()=>{let w=ct(e.railShown,()=>i(xa,{shell:e,dock:s,railItems:F=>i(Rn,{shell:e,part:"rest",hidden:F.hidden,railMenu:($,_)=>F.toggleMenu(_,$)}),railFoot:F=>i(Rn,{shell:e,part:"lead",hidden:F.hidden,railMenu:($,_)=>F.toggleMenu(_,$)})}));return X(e.railShown,F=>w.toggleAttribute("data-rail-hidden",!F)),X(e.compactRail,F=>w.toggleAttribute("data-rail-overlay",F)),w}})})]})]}),i(P,{when:f([m,r],(w,F)=>!w&&!F),children:()=>i(Mn,{shell:e,dock:s,stripEnd:i(P,{when:a,children:()=>i(Cr,{shell:e})})})}),i(P,{when:l,children:()=>i(Mn,{shell:e,dock:e.dock("bottom")})}),n.commandMenu,i(Tr,{status:t})]});return n.onDropFiles&&M.appendChild(i(Zr,{target:M,onDrop:n.onDropFiles,formats:n.dropFormats})),B(document,"keydown",w=>{if(!(w.key!=="Escape"||w.defaultPrevented||e.overlay.value||Io(Je(w)))&&We(M,w)){if(r.value){e.setExpanded(!1),w.preventDefault();return}s.state.value.pinned||!s.state.value.collapsed&&s.active.value!==void 0&&(e.toggle("right"),w.preventDefault())}}),Q(zr(M)),Ee(M,w=>e.setWidth(w[0].contentRect.width)),M}export{oo as a,Ve as b,Nn as c,he as d,Re as e,Q as f,mo as g,Vt as h,X as i,qe as j,Se as k,Xe as l,fe as m,Us as n,P as o,te as p,B as q,Gn as r,Ap as s,zp as t,dt as u,Kt as v,Ke as w,Lt as x,ht as y,Ge as z,mp as A,rr as B,W as C,up as D,fp as E,z as F,i as G,y as H,Pi as I,xe as J,zl as K,We as L,$o as M,Ue as N,ra as O,da as P,Fl as Q,Zl as R,Xn as S,Qn as T,Mm as U,oa as V,Sm as W,Un as X,ge as Y,sa as Z,Hi as _,Pt as $,Yt as aa,At as ba,is as ca,yn as da,Jl as ea,ec as fa,fa as ga,tc as ha,ac as ia,yl as ja,xl as ka,wl as la,kl as ma,ar as na,Ml as oa,Sl as pa,lc as qa,Ye as ra,Dc as sa,Oc as ta,Vc as ua,Ll as va,qc as wa,qd as xa};
