import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,E as n,S as r,_ as i,b as a,m as o,n as s,o as c,r as l,s as u,t as d,v as f,w as p}from"./jsx-runtime-Dut-27nP.js";import{n as m,r as h}from"./registry-D35yV2Tb.js";import{E as g}from"./real-viewer-8wWdKEGJ.js";import{a as _,i as v,l as y,o as b,r as x,t as S}from"./control-flow-BGkEkAG8.js";import{a as C,b as w,u as ee,x as T}from"./work-queue-DoxU-HjK.js";import{C as E,E as te,O as D,_ as O,c as k,h as A,i as j,l as M,n as N,p as P,s as F,u as I}from"./shell-view-4fMpWl4I.js";import{n as L,t as R}from"./observable-state-C67cgDrf.js";import{l as ne,n as re}from"./manager-DdxqI_fE.js";import{r as ie}from"./canvas-theme-BxlapNoV.js";import{o as ae,u as z}from"./shell-ntBQzh0l.js";import{n as B,t as V}from"./icon-CrwnZGU9.js";import{i as H,o as oe,r as U,s as W}from"./scoped-CYrGtqEo.js";import{n as G,t as se}from"./scroll-area-C3WxaIdw.js";import{a as K,c as ce,d as le,l as q,n as ue,s as de,u as J}from"./command-menu-DXbSGJvf.js";import{C as fe,m as Y,n as pe,o as me,u as he}from"./params-form-BQ9MddDI.js";import{t as ge}from"./keyed-selector-MU49iODI.js";import{o as _e}from"./select-iIBCxyFA.js";import{n as ve}from"./text-input-6-TvZsXK.js";import{n as ye}from"./button-C9pAumBZ.js";import{r as be}from"./wordmark-ClMxGUTX.js";import{n as xe}from"./action-footer-H5OADnJ2.js";import{n as Se}from"./choices-4VYZA6Ze.js";import{n as Ce}from"./legend-DSwdWBL5.js";import{n as we}from"./glass-wordmark-D2xSyFtq.js";import{n as Te}from"./markdown-BK4pKdRH.js";import{c as Ee}from"./playback-_bPz9Jn5.js";function De(){return(De=e((()=>{v(),B(),ye(),d()})))()}function Oe(e){let n=t(`RecycledList`),a=e.overscan??8,c=f(0),l=L(0),d=L(e.rowHeight),m,h=()=>{if(!m)return;let e=m.scrollTop,t=m.clientHeight;c.offer(e),t!==l.value&&l.set(t)},g=e=>e||800,v=L({first:0,last:0}),y=[],x=0,S=-1/0,C=()=>{S=performance.now()},T,E=e=>{let t=y.length,n=d.value,r=c.value,i=Math.min(t,Math.floor(r/n)),o=Math.min(t,Math.ceil((r+g(l.value))/n)),s=o-i,u=r>=x,f=performance.now()-S<200?Math.abs(r-x):0;x=r;let{first:p,last:m}=v.value,h=q(f,n,s,Math.max(a,Math.ceil(s/2))),_=p<=Math.max(0,i-(u?a:h))&&m>=Math.min(t,o+(u?h:a))&&m<=t,b,C;if(e)b=i-s,C=o+s;else if(_)return;else if(o<=p||i>=m){let e=q(f,n,s,2);b=i-(u?2:e),C=o+(u?e:2)}else{let e=q(f,n,s,Math.max(a,s));b=i-(u?a:e),C=o+(u?e:a)}b=Math.max(0,b),C=Math.min(t,C),(b!==p||C!==m)&&v.set({first:b,last:C})},te=()=>{k(),E(!1),T!==void 0&&clearTimeout(T),T=setTimeout(()=>{T=void 0,E(!0),ue()},120)},D=[],O;function k(){if(O!==void 0){clearTimeout(O),O=void 0;for(let e of D)e.classList.remove(J.glide,J.enter);D.length=0,j?.removeAttribute(`data-revealing`)}}let A=!1;r(()=>{T!==void 0&&clearTimeout(T),k()}),o(w([e.items,l.asReadonly,d.asReadonly],(e,t,n)=>({list:e,h:t,rh:n})),({list:e})=>{y=e,E(!0)}),o(c,te);let j,M=new Map,N=[],P=t=>!!e.slot&&(!e.recycle||e.recycle(t)),F,I=oe(void 0,e=>{let t=e[e.length-1].contentRect.height;t>0&&Math.abs(t-d.value)>.5&&d.set(t)}),R=e=>{!F&&I&&(F=e,I.observe(e))},ne=()=>{let e=document.createElement(`div`);return e.className=J.row,e},re=()=>{let t=n.child(),r=p(t,()=>e.slot()),i=ne();return i.append(r.el),j.append(i),R(i),{el:i,view:r,shown:!0}},ie=(t,r)=>{let i=n.child(),a=ne();return p(i,()=>u(a,e.children?.(r),null)),j.append(a),R(a),{key:t,item:r,el:a,y:NaN,scope:i}},ae=e=>{e.scope.dispose(),e.el.remove(),F===e.el&&(I?.unobserve(e.el),F=void 0)},z=(e,t,n)=>{let r=t*n;e.y!==r&&(A&&(e.el.classList.add(Number.isNaN(e.y)?J.enter:J.glide),D.push(e.el)),e.y=r,e.el.style.transform=`translateY(${r}px)`)},B=(t,n,r)=>{let i=y[n],a=e.itemKey(i);if(t.has(a))return!0;let o;if(P(i)){let e=N.pop();if(e)e.shown||(e.shown=!0,e.el.hidden=!1);else{if(!b())return!1;e=re()}e.view.show(i),o={key:a,item:i,el:e.el,y:NaN,slot:e}}else{if(!b())return!1;o=ie(a,i)}return t.set(a,o),z(o,n,r),!0},V=!1,H=!1,U=(t,r,i)=>{if(!j)return;let a=new Map;for(let n=t;n<r;n++){let t=y[n],r=e.itemKey(t);if(a.has(r)){H||(H=!0,console.warn(`VirtualList: duplicate key; later items with the same key are not rendered.`,r));continue}let o=M.get(r);if(o){if(o.item!==t){if(o.slot&&P(t))o.item=t,o.slot.view.show(t);else continue}a.set(r,o),z(o,n,i)}}let o=N.length;for(let[e,t]of M)a.get(e)!==t&&(t.slot?N.push(t.slot):ae(t));M=a;let s=c.value,u=Math.max(t,Math.min(r,Math.floor(s/i))),d=Math.max(u,Math.min(r,Math.ceil((s+g(l.value))/i))),f=!1;for(let e=u;e<d&&!f;e++)B(a,e,i)||(f=!0);for(let e=t;e<u&&!f;e++)B(a,e,i)||(f=!0);for(let e=d;e<r&&!f;e++)B(a,e,i)||(f=!0);for(let e=N.length-1;e>=o;e--){let t=N[e];t.shown&&(t.shown=!1,t.view.show(void 0),t.el.hidden=!0)}f&&!V&&(V=!0,_(()=>{V=!1,!n.disposed&&n.active&&U(G.first,G.last,G.rh)}))},G={first:0,last:0,rh:e.rowHeight},K=[],le=w([e.items,v.asReadonly,d.asReadonly],(e,t,n)=>({list:e,first:Math.min(t.first,e.length),last:Math.min(t.last,e.length),rh:n}),(e,t)=>e.list===t.list&&e.first===t.first&&e.last===t.last&&e.rh===t.rh);r(()=>{for(let e of M.values())e.slot||e.scope.dispose();M.clear()});let ue=()=>{if(!j)return;let e=performance.now(),t=[...M.values()].sort((e,t)=>e.y-t.y),n=new Set;for(let e of t)n.add(e.el);let r=j.getRootNode().activeElement,i,a=j.firstChild,o=0;for(let e of t){for(;a&&!n.has(a);)a=a.nextSibling;e.el===a?a=a.nextSibling:(r&&!i&&e.el.contains(r)&&(i=r),j.insertBefore(e.el,a),o++)}i?.focus({preventScroll:!0}),X.settles++,X.moved+=o,X.lastMs=performance.now()-e};return e.ref?.({scrollToIndex(e){let t=d.value,n=g(l.value),r=e*t,a=c.value;r<a?a=r:r+t>a+n&&(a=r+t-n),a!==c.value&&(x=a,m&&(m.scrollTop=a),c.offer(a)),ee(),i()}}),s(se,{class:`${J.list} ${e.class??``}`,contentClass:J.content,edge:e.edge,fade:!1,viewportRef:e=>{m=e,W(e,`scroll`,h,{passive:!0}),W(e,`wheel`,C,{passive:!0}),W(e,`touchmove`,C,{passive:!0}),oe(e,h),queueMicrotask(h)},role:e.role,"aria-label":e[`aria-label`],ref:t=>{j=t,e.contentRef?.(t),o(le,t=>{let n=e.reveal&&t.list!==K?ce(K,t.list,e.itemKey):void 0;K=t.list,y=t.list,G=t,n&&(k(),A=!0,j?.setAttribute(`data-revealing`,``),O=setTimeout(k,240)),U(t.first,t.last,t.rh),A=!1})},style:{height:w([e.items,d.asReadonly],(e,t)=>`${e.length*t}px`),"--msp-virtual-row":w(d.asReadonly,e=>`${e}px`)}})}var X;function ke(){return(ke=e((()=>{v(),c(),a(),R(),T(),H(),G(),le(),de(),d(),X={settles:0,moved:0,lastMs:0}})))()}var Z;function Ae(){return(Ae=e((()=>{h(),Z={body:`msp-canvas-hover-label-body`,code:`msp-canvas-hover-label-code`,corner:`msp-canvas-hover-label-corner`,item:`msp-canvas-hover-label-item`,label:`msp-canvas-hover-label-label`,link:`msp-canvas-hover-label-link`,out:`msp-canvas-hover-label-out`,primary:`msp-canvas-hover-label-primary`,secondary:`msp-canvas-hover-label-secondary`},m(`views/canvas/hover-label.module.css`,`@layer msp.components {
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
`)})))()}function je(e,t){let n=document.createElement(`span`);if(typeof e==`string`)return n.className=t===0?Z.primary:Z.secondary,n.textContent=e,n;n.className=e.role===`title`?Z.primary:e.role===`item`?`${Z.secondary} ${Z.item}`:Z.secondary;for(let t of e.runs)n.append(Me(t));return n}function Me(e){let t=document.createTextNode(e.text),n=(e,n)=>{let r=document.createElement(e);n&&(r.className=n),r.append(t),t=r};return e.code&&n(`code`,Z.code),e.sub&&n(`sub`),e.sup&&n(`sup`),e.small&&n(`small`),e.italic&&n(`em`),e.bold&&n(`strong`),e.link&&n(`span`,Z.link),t}function Ne(e){let n=(e.placement??`corner`)===`corner`,r=s(`div`,{class:Z.body}),i=s(`div`,{class:`${Z.label} ${Z.out}${n?` ${Z.corner}`:``}`,role:`tooltip`,"aria-hidden":`true`,children:r}),a=L([]),c=U(()=>a.set([]));o(e.model.lines,e=>{e.length?(c.cancel(),a.set(e)):a.value.length&&c.request()});let l=0,u=0,d=!1,f=!1,m=!1,h=!1,g=e=>{h!==e&&(h=e,i.classList.toggle(Z.out,!e),e?i.removeAttribute(`aria-hidden`):i.setAttribute(`aria-hidden`,`true`))},_=()=>d&&!f&&m,v=()=>{_()?(b.cancel(),n?g(!0):x.request()):f||!m?(b.cancel(),g(!1)):h&&b.request()},y=()=>{if(!_())return;let e=i.offsetParent;if(e){let t=e.getBoundingClientRect(),n=l-t.left,r=u-t.top,a=i.offsetWidth,o=i.offsetHeight,s=n+Q+a>e.clientWidth?n-Q-a:n+Q,c=r+Q+o>e.clientHeight?r-Q-o:r+Q;i.style.transform=`translate(${Math.max(0,s)}px, ${Math.max(0,c)}px)`}g(!0)},b=U(()=>{_()||g(!1)}),x=U(y);o(a.asReadonly,e=>{e.length&&r.replaceChildren(...e.map(je)),m=e.length>0,v()});let S=t(`HoverLabel`);return queueMicrotask(()=>{if(S.disposed)return;let t=e.area();if(!t)return;let n=e.over;p(S,()=>{W(t,`pointermove`,e=>{l=e.clientX,u=e.clientY,d=!n||n(e.target),f=e.buttons!==0,v()}),W(t,`pointerleave`,()=>{d=!1,v()})})}),i}var Q;function Pe(){return(Pe=e((()=>{a(),H(),R(),Ae(),d(),Q=14})))()}var $;function Fe(){return(Fe=e((()=>{h(),$={body:`msp-shell-section-list-body`,chevron:`msp-shell-section-list-chevron`,header:`msp-shell-section-list-header`,list:`msp-shell-section-list-list`,section:`msp-shell-section-list-section`,title:`msp-shell-section-list-title`},m(`views/shell/section-list.module.css`,`@layer msp.components {
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
`)})))()}function Ie(e){let{shell:t,subject:n}=e,r={shell:t,subject:n},i=t.sections(e.slot),a=w(i,e=>e.filter(e=>!e.when||e.when(r))),o=e.focus,c=e=>!!o&&(o===e||o.startsWith(`${e}/`)),l=e=>o?.startsWith(`${e}/`)?o.slice(e.length+1):void 0;return s(`div`,{class:$.list,"data-flat":e.flat?``:void 0,"data-bare":e.bare?``:void 0,children:s(S,{each:a,children:n=>s(Le,{ctx:l(n.id)?{...r,focus:l(n.id)}:r,slot:e.slot,section:n,open:o?c(n.id):t.sectionOpen(e.slot,n.id)??(!e.collapsed||!!n.open),focused:c(n.id)})},e=>e.id)})}function Le(e){let{ctx:t,section:r}=e,i=L(e.open),a=L(e.open),o=L(!1),c,u,d,f=l(`section`,{class:$.section,"data-section":r.id,children:[l(`button`,{type:`button`,class:$.header,ref:e=>u=e,onClick:()=>{o.set(!0),d?.cancel(),d=void 0,a.set(!a.value);let n=!a.value&&i.value&&c?y(c,`grow`):void 0;n?(d=n,t.shell.setSectionOpen(e.slot,r.id,!1),n.finished.then(()=>{d===n&&(d=void 0,i.set(!1),n.cancel())},()=>{})):(i.set(a.value),t.shell.setSectionOpen(e.slot,r.id,i.value))},children:[s(`span`,{class:$.title,children:r.heading??r.title}),s(V,{name:`chevron-down`,size:14,class:$.chevron})]}),s(`div`,{class:$.body,ref:e=>{c=e},children:x(i.asReadonly,()=>s(k,{renderer:r.render,ctx:t}))})]});return n([a,i,o],()=>{Y(u,`aria-expanded`,String(a.value)),Y(c,`hidden`,!i.value),Y(c,`data-reveal`,o.value)}),e.focused&&(t.shell.setSectionOpen(e.slot,r.id,!0),queueMicrotask(()=>f.scrollIntoView({block:`nearest`}))),f}function Re(){return(Re=e((()=>{B(),v(),a(),R(),Fe(),M(),T(),d()})))()}function ze(){return(ze=e((()=>{v(),fe(),a(),te(),c(),ge(),C(),E(),R(),ie(),z(),O(),ae(),g(),ne(),re(),xe(),ye(),De(),Se(),he(),I(),Ce(),B(),be(),we(),Te(),pe(),me(),G(),_e(),ve(),K(),ke(),Pe(),Ee(),ue(),F(),D(),P(),j(),Re(),M(),A(),N()})))()}export{Pe as a,ke as c,Ne as i,Ie as n,Oe as o,Re as r,X as s,ze as t};