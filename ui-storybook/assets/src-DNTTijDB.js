import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,S as n,_ as r,b as i,m as a,n as o,o as s,r as c,s as l,t as u,v as d,w as f}from"./jsx-runtime-Dut-27nP.js";import{n as p,r as m}from"./registry-D35yV2Tb.js";import{D as h}from"./real-viewer-Ke13Ygzq.js";import{a as g,i as _,l as v,o as y,r as b,t as x}from"./control-flow-BLsZc6z1.js";import{a as S,b as C,u as ee,x as w}from"./work-queue-DoxU-HjK.js";import{D as T,S as E,T as te,c as D,f as O,g as k,i as A,l as j,m as M,n as N,o as P,s as F}from"./shell-view-BEqtIwth.js";import{n as I,t as L}from"./observable-state-C67cgDrf.js";import{l as R,n as z}from"./manager-BFhJYk0n.js";import{r as ne}from"./canvas-theme-BxlapNoV.js";import{o as re,u as ie}from"./shell-IfzmleJy.js";import{n as B,t as V}from"./icon-Fyk1xIJy.js";import{i as H,o as ae,r as U,s as W}from"./scoped-CYrGtqEo.js";import{n as G,t as oe}from"./scroll-area-C3WxaIdw.js";import{a as K,c as se,d as q,l as J,n as ce,s as le,u as Y}from"./command-menu-4XkRZSM4.js";import{C as ue,n as de,o as fe,u as pe}from"./params-form-DodHex4Z.js";import{t as me}from"./keyed-selector-MU49iODI.js";import{o as he}from"./select-Cc49vJOg.js";import{n as ge}from"./text-input-6-TvZsXK.js";import{n as _e}from"./button-C9pAumBZ.js";import{r as ve}from"./wordmark-ClMxGUTX.js";import{n as ye}from"./action-footer-Yw468haW.js";import{n as be}from"./choices-CNNyMk6-.js";import{n as xe}from"./legend-BquCIYdB.js";import{n as Se}from"./glass-wordmark-Ctu6HJfL.js";import{n as Ce}from"./markdown-Dh0Ept6l.js";import{c as we}from"./playback-CU2lVbEP.js";function Te(){return(Te=e((()=>{_(),B(),_e(),u()})))()}function Ee(e){let i=t(`RecycledList`),s=e.overscan??8,c=d(0),u=I(0),p=I(e.rowHeight),m,h=()=>{if(!m)return;let e=m.scrollTop,t=m.clientHeight;c.offer(e),t!==u.value&&u.set(t)},_=e=>e||800,v=I({first:0,last:0}),b=[],x=0,S=-1/0,w=()=>{S=performance.now()},T,E=e=>{let t=b.length,n=p.value,r=c.value,i=Math.min(t,Math.floor(r/n)),a=Math.min(t,Math.ceil((r+_(u.value))/n)),o=a-i,l=r>=x,d=performance.now()-S<200?Math.abs(r-x):0;x=r;let{first:f,last:m}=v.value,h=J(d,n,o,Math.max(s,Math.ceil(o/2))),g=f<=Math.max(0,i-(l?s:h))&&m>=Math.min(t,a+(l?h:s))&&m<=t,y,C;if(e)y=i-o,C=a+o;else if(g)return;else if(a<=f||i>=m){let e=J(d,n,o,2);y=i-(l?2:e),C=a+(l?e:2)}else{let e=J(d,n,o,Math.max(s,o));y=i-(l?s:e),C=a+(l?e:s)}y=Math.max(0,y),C=Math.min(t,C),(y!==f||C!==m)&&v.set({first:y,last:C})},te=()=>{k(),E(!1),T!==void 0&&clearTimeout(T),T=setTimeout(()=>{T=void 0,E(!0),le()},120)},D=[],O;function k(){if(O!==void 0){clearTimeout(O),O=void 0;for(let e of D)e.classList.remove(Y.glide,Y.enter);D.length=0}}let A=!1;n(()=>{T!==void 0&&clearTimeout(T),k()}),a(C([e.items,u.asReadonly,p.asReadonly],(e,t,n)=>({list:e,h:t,rh:n})),({list:e})=>{b=e,E(!0)}),a(c,te);let j,M=new Map,N=[],P=t=>!!e.slot&&(!e.recycle||e.recycle(t)),F,L=ae(void 0,e=>{let t=e[e.length-1].contentRect.height;t>0&&Math.abs(t-p.value)>.5&&p.set(t)}),R=e=>{!F&&L&&(F=e,L.observe(e))},z=()=>{let e=document.createElement(`div`);return e.className=Y.row,e},ne=()=>{let t=i.child(),n=f(t,()=>e.slot()),r=z();return r.append(n.el),j.append(r),R(r),{el:r,view:n,shown:!0}},re=(t,n)=>{let r=i.child(),a=z();return f(r,()=>l(a,e.children?.(n),null)),j.append(a),R(a),{key:t,item:n,el:a,y:NaN,scope:r}},ie=e=>{e.scope.dispose(),e.el.remove(),F===e.el&&(L?.unobserve(e.el),F=void 0)},B=(e,t,n)=>{let r=t*n;e.y!==r&&(A&&(e.el.classList.add(Number.isNaN(e.y)?Y.enter:Y.glide),D.push(e.el)),e.y=r,e.el.style.transform=`translateY(${r}px)`)},V=(t,n,r)=>{let i=b[n],a=e.itemKey(i);if(t.has(a))return!0;let o;if(P(i)){let e=N.pop();if(e)e.shown||(e.shown=!0,e.el.hidden=!1);else{if(!y())return!1;e=ne()}e.view.show(i),o={key:a,item:i,el:e.el,y:NaN,slot:e}}else{if(!y())return!1;o=re(a,i)}return t.set(a,o),B(o,n,r),!0},H=!1,U=!1,G=(t,n,r)=>{if(!j)return;let a=new Map;for(let i=t;i<n;i++){let t=b[i],n=e.itemKey(t);if(a.has(n)){U||(U=!0,console.warn(`VirtualList: duplicate key; later items with the same key are not rendered.`,n));continue}let o=M.get(n);if(o){if(o.item!==t){if(o.slot&&P(t))o.item=t,o.slot.view.show(t);else continue}a.set(n,o),B(o,i,r)}}let o=N.length;for(let[e,t]of M)a.get(e)!==t&&(t.slot?N.push(t.slot):ie(t));M=a;let s=c.value,l=Math.max(t,Math.min(n,Math.floor(s/r))),d=Math.max(l,Math.min(n,Math.ceil((s+_(u.value))/r))),f=!1;for(let e=l;e<d&&!f;e++)V(a,e,r)||(f=!0);for(let e=t;e<l&&!f;e++)V(a,e,r)||(f=!0);for(let e=d;e<n&&!f;e++)V(a,e,r)||(f=!0);for(let e=N.length-1;e>=o;e--){let t=N[e];t.shown&&(t.shown=!1,t.view.show(void 0),t.el.hidden=!0)}f&&!H&&(H=!0,g(()=>{H=!1,!i.disposed&&i.active&&G(K.first,K.last,K.rh)}))},K={first:0,last:0,rh:e.rowHeight},q=[],ce=C([e.items,v.asReadonly,p.asReadonly],(e,t,n)=>({list:e,first:Math.min(t.first,e.length),last:Math.min(t.last,e.length),rh:n}),(e,t)=>e.list===t.list&&e.first===t.first&&e.last===t.last&&e.rh===t.rh);n(()=>{for(let e of M.values())e.slot||e.scope.dispose();M.clear()});let le=()=>{if(!j)return;let e=performance.now(),t=[...M.values()].sort((e,t)=>e.y-t.y),n=new Set;for(let e of t)n.add(e.el);let r=j.getRootNode().activeElement,i,a=j.firstChild,o=0;for(let e of t){for(;a&&!n.has(a);)a=a.nextSibling;e.el===a?a=a.nextSibling:(r&&!i&&e.el.contains(r)&&(i=r),j.insertBefore(e.el,a),o++)}i?.focus({preventScroll:!0}),X.settles++,X.moved+=o,X.lastMs=performance.now()-e};return e.ref?.({scrollToIndex(e){let t=p.value,n=_(u.value),i=e*t,a=c.value;i<a?a=i:i+t>a+n&&(a=i+t-n),a!==c.value&&(x=a,m&&(m.scrollTop=a),c.offer(a)),ee(),r()}}),o(oe,{class:`${Y.list} ${e.class??``}`,contentClass:Y.content,edge:e.edge,fade:!1,viewportRef:e=>{m=e,W(e,`scroll`,h,{passive:!0}),W(e,`wheel`,w,{passive:!0}),W(e,`touchmove`,w,{passive:!0}),ae(e,h),queueMicrotask(h)},role:e.role,"aria-label":e[`aria-label`],ref:t=>{j=t,e.contentRef?.(t),a(ce,t=>{let n=e.reveal&&t.list!==q?se(q,t.list,e.itemKey):void 0;q=t.list,b=t.list,K=t,n&&(k(),A=!0,O=setTimeout(k,240)),G(t.first,t.last,t.rh),A=!1})},style:{height:C([e.items,p.asReadonly],(e,t)=>`${e.length*t}px`),"--msp-virtual-row":C(p.asReadonly,e=>`${e}px`)}})}var X;function De(){return(De=e((()=>{_(),s(),i(),L(),w(),H(),G(),q(),le(),u(),X={settles:0,moved:0,lastMs:0}})))()}var Z;function Oe(){return(Oe=e((()=>{m(),Z={body:`msp-canvas-hover-label-body`,code:`msp-canvas-hover-label-code`,corner:`msp-canvas-hover-label-corner`,item:`msp-canvas-hover-label-item`,label:`msp-canvas-hover-label-label`,link:`msp-canvas-hover-label-link`,out:`msp-canvas-hover-label-out`,primary:`msp-canvas-hover-label-primary`,secondary:`msp-canvas-hover-label-secondary`},p(`views/canvas/hover-label.module.css`,`@layer msp.components {
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
`)})))()}function ke(e,t){let n=document.createElement(`span`);if(typeof e==`string`)return n.className=t===0?Z.primary:Z.secondary,n.textContent=e,n;n.className=e.role===`title`?Z.primary:e.role===`item`?`${Z.secondary} ${Z.item}`:Z.secondary;for(let t of e.runs)n.append(Ae(t));return n}function Ae(e){let t=document.createTextNode(e.text),n=(e,n)=>{let r=document.createElement(e);n&&(r.className=n),r.append(t),t=r};return e.code&&n(`code`,Z.code),e.sub&&n(`sub`),e.sup&&n(`sup`),e.small&&n(`small`),e.italic&&n(`em`),e.bold&&n(`strong`),e.link&&n(`span`,Z.link),t}function je(e){let n=(e.placement??`corner`)===`corner`,r=o(`div`,{class:Z.body}),i=o(`div`,{class:`${Z.label} ${Z.out}${n?` ${Z.corner}`:``}`,role:`tooltip`,"aria-hidden":`true`,children:r}),s=I([]),c=U(()=>s.set([]));a(e.model.lines,e=>{e.length?(c.cancel(),s.set(e)):s.value.length&&c.request()});let l=0,u=0,d=!1,p=!1,m=!1,h=!1,g=e=>{h!==e&&(h=e,i.classList.toggle(Z.out,!e),e?i.removeAttribute(`aria-hidden`):i.setAttribute(`aria-hidden`,`true`))},_=()=>d&&!p&&m,v=()=>{_()?(b.cancel(),n?g(!0):x.request()):p||!m?(b.cancel(),g(!1)):h&&b.request()},y=()=>{if(!_())return;let e=i.offsetParent;if(e){let t=e.getBoundingClientRect(),n=l-t.left,r=u-t.top,a=i.offsetWidth,o=i.offsetHeight,s=n+Q+a>e.clientWidth?n-Q-a:n+Q,c=r+Q+o>e.clientHeight?r-Q-o:r+Q;i.style.transform=`translate(${Math.max(0,s)}px, ${Math.max(0,c)}px)`}g(!0)},b=U(()=>{_()||g(!1)}),x=U(y);a(s.asReadonly,e=>{e.length&&r.replaceChildren(...e.map(ke)),m=e.length>0,v()});let S=t(`HoverLabel`);return queueMicrotask(()=>{if(S.disposed)return;let t=e.area();if(!t)return;let n=e.over;f(S,()=>{W(t,`pointermove`,e=>{l=e.clientX,u=e.clientY,d=!n||n(e.target),p=e.buttons!==0,v()}),W(t,`pointerleave`,()=>{d=!1,v()})})}),i}var Q;function Me(){return(Me=e((()=>{i(),H(),L(),Oe(),u(),Q=14})))()}var $;function Ne(){return(Ne=e((()=>{m(),$={body:`msp-shell-section-list-body`,chevron:`msp-shell-section-list-chevron`,header:`msp-shell-section-list-header`,list:`msp-shell-section-list-list`,section:`msp-shell-section-list-section`,title:`msp-shell-section-list-title`},p(`views/shell/section-list.module.css`,`@layer msp.components {
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
`)})))()}function Pe(e){let{shell:t,subject:n}=e,r={shell:t,subject:n},i=t.sections(e.slot),a=C(i,e=>e.filter(e=>!e.when||e.when(r))),s=e.focus,c=e=>!!s&&(s===e||s.startsWith(`${e}/`)),l=e=>s?.startsWith(`${e}/`)?s.slice(e.length+1):void 0;return o(`div`,{class:$.list,"data-flat":e.flat?``:void 0,"data-bare":e.bare?``:void 0,children:o(x,{each:a,children:n=>o(Fe,{ctx:l(n.id)?{...r,focus:l(n.id)}:r,slot:e.slot,section:n,open:s?c(n.id):t.sectionOpen(e.slot,n.id)??(!e.collapsed||!!n.open),focused:c(n.id)})},e=>e.id)})}function Fe(e){let{ctx:t,section:n}=e,r=I(e.open),i=I(e.open),a=I(!1),s,l,u=c(`section`,{class:$.section,"data-section":n.id,children:[c(`button`,{type:`button`,class:$.header,"aria-expanded":i,onClick:()=>{a.set(!0),l?.cancel(),l=void 0,i.set(!i.value);let o=!i.value&&r.value&&s?v(s,`grow`):void 0;o?(l=o,t.shell.setSectionOpen(e.slot,n.id,!1),o.finished.then(()=>{l===o&&(l=void 0,r.set(!1),o.cancel())},()=>{})):(r.set(i.value),t.shell.setSectionOpen(e.slot,n.id,r.value))},children:[o(`span`,{class:$.title,children:n.heading??n.title}),o(V,{name:`chevron-down`,size:14,class:$.chevron})]}),o(`div`,{class:$.body,ref:e=>{s=e},hidden:C(r.asReadonly,e=>!e),"data-reveal":C(a.asReadonly,e=>e?``:void 0),children:b(r.asReadonly,()=>o(F,{renderer:n.render,ctx:t}))})]});return e.focused&&(t.shell.setSectionOpen(e.slot,n.id,!0),queueMicrotask(()=>u.scrollIntoView({block:`nearest`}))),u}function Ie(){return(Ie=e((()=>{B(),_(),L(),Ne(),D(),w(),u()})))()}function Le(){return(Le=e((()=>{_(),ue(),i(),te(),s(),me(),S(),E(),L(),ne(),ie(),k(),re(),h(),R(),z(),ye(),_e(),Te(),be(),pe(),j(),xe(),B(),ve(),Se(),Ce(),de(),fe(),G(),he(),ge(),K(),De(),Me(),we(),ce(),P(),T(),O(),A(),Ie(),D(),M(),N()})))()}export{Me as a,De as c,je as i,Pe as n,Ee as o,Ie as r,X as s,Le as t};