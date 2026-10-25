import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{D as t,T as n,m as r,n as i,o as a,r as o,t as s,w as c,x as l}from"./jsx-runtime-DbCUSNU3.js";import{n as u,r as d}from"./registry-D35yV2Tb.js";import{C as f}from"./real-viewer-Bej2U4vD.js";import{a as p,b as m,x as h}from"./work-queue-DoxU-HjK.js";import{D as g,c as _,f as v,g as y,i as b,k as x,l as S,m as C,n as w,s as ee,v as te,w as T}from"./shell-view-DFCAxQCV.js";import{n as E,t as D}from"./observable-state-eRUcDuAs.js";import{n as ne,u as re}from"./manager-CrN3WzFc.js";import{i as O,l as ie,r as ae,t as oe}from"./control-flow-BQuMY04w.js";import{r as se}from"./canvas-theme-xlb-2Kyd.js";import{o as ce,u as le}from"./shell-BgE_1xEN.js";import{n as k,t as ue}from"./icon-1ydjt1pd.js";import{i as de,r as A,s as j}from"./scoped-Dk1HMUKj.js";import{n as M}from"./scroll-area-ukLK_GOt.js";import{a as N,n as P}from"./command-menu-Coh3Bcln.js";import{a as F}from"./focus-DbrNPVyh.js";import{m as I,n as L,o as R,u as z}from"./params-form-D0fEgQzm.js";import{t as B}from"./keyed-selector-MU49iODI.js";import{o as V}from"./select-DO80BU7g.js";import{n as H}from"./text-input-j_8_8M_A.js";import{n as U}from"./button-B7k80QJA.js";import{t as fe}from"./context-menu-CJgQIgte.js";import{r as pe}from"./wordmark-zN2ZvaUG.js";import{n as me}from"./action-footer-COsCeMvF.js";import{n as he}from"./choices-BEfIKmcx.js";import{n as ge}from"./legend-Dd-iP5cT.js";import{n as _e}from"./glass-wordmark-C7br6fIz.js";import{n as ve}from"./markdown-ArrLLmxo.js";import{c as ye}from"./playback-C6fSP8EU.js";function W(){return(W=e((()=>{O(),k(),U(),s()})))()}var G;function K(){return(K=e((()=>{d(),G={body:`msp-canvas-hover-label-body`,code:`msp-canvas-hover-label-code`,corner:`msp-canvas-hover-label-corner`,item:`msp-canvas-hover-label-item`,label:`msp-canvas-hover-label-label`,link:`msp-canvas-hover-label-link`,out:`msp-canvas-hover-label-out`,primary:`msp-canvas-hover-label-primary`,secondary:`msp-canvas-hover-label-secondary`},u(`views/canvas/hover-label.module.css`,`@layer msp.components {
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
`)})))()}function q(e,t){let n=document.createElement(`span`);if(typeof e==`string`)return n.className=t===0?G.primary:G.secondary,n.textContent=e,n;n.className=e.role===`title`?G.primary:e.role===`item`?`${G.secondary} ${G.item}`:G.secondary;for(let t of e.runs)n.append(be(t));return n}function be(e){let t=document.createTextNode(e.text),n=(e,n)=>{let r=document.createElement(e);n&&(r.className=n),r.append(t),t=r};return e.code&&n(`code`,G.code),e.sub&&n(`sub`),e.sup&&n(`sup`),e.small&&n(`small`),e.italic&&n(`em`),e.bold&&n(`strong`),e.link&&n(`span`,G.link),t}function xe(e){let t=(e.placement??`corner`)===`corner`,a=i(`div`,{class:G.body}),o=i(`div`,{class:`${G.label} ${G.out}${t?` ${G.corner}`:``}`,role:`tooltip`,"aria-hidden":`true`,children:a}),s=E([]),l=A(()=>s.set([]));r(e.model.lines,e=>{e.length?(l.cancel(),s.set(e)):s.value.length&&l.request()});let u=0,d=0,f=!1,p=!1,m=!1,h=!1,g=e=>{h!==e&&(h=e,o.classList.toggle(G.out,!e),e?o.removeAttribute(`aria-hidden`):o.setAttribute(`aria-hidden`,`true`))},_=()=>f&&!p&&m,v=()=>{_()?(b.cancel(),t?g(!0):x.request()):p||!m?(b.cancel(),g(!1)):h&&b.request()},y=()=>{if(!_())return;let e=o.offsetParent;if(e){let t=e.getBoundingClientRect(),n=u-t.left,r=d-t.top,i=o.offsetWidth,a=o.offsetHeight,s=n+J+i>e.clientWidth?n-J-i:n+J,c=r+J+a>e.clientHeight?r-J-a:r+J;o.style.transform=`translate(${Math.max(0,s)}px, ${Math.max(0,c)}px)`}g(!0)},b=A(()=>{_()||g(!1)}),x=A(y);r(s.asReadonly,e=>{e.length&&a.replaceChildren(...e.map(q)),m=e.length>0,v()});let S=c(`HoverLabel`);return queueMicrotask(()=>{if(S.disposed)return;let t=e.area();if(!t)return;let r=e.over;n(S,()=>{j(t,`pointermove`,e=>{u=e.clientX,d=e.clientY,f=!r||r(e.target),p=e.buttons!==0,v()}),j(t,`pointerleave`,()=>{f=!1,v()})})}),o}var J;function Y(){return(Y=e((()=>{l(),de(),D(),K(),s(),J=14})))()}var X;function Z(){return(Z=e((()=>{d(),X={body:`msp-shell-section-list-body`,chevron:`msp-shell-section-list-chevron`,header:`msp-shell-section-list-header`,list:`msp-shell-section-list-list`,section:`msp-shell-section-list-section`,title:`msp-shell-section-list-title`},u(`views/shell/section-list.module.css`,`@layer msp.components {
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
`)})))()}function Se(e){let{shell:t,subject:n}=e,r={shell:t,subject:n},a=t.sections(e.slot),o=m(a,e=>e.filter(e=>!e.when||e.when(r))),s=e.focus,c=e=>!!s&&(s===e||s.startsWith(`${e}/`)),l=e=>s?.startsWith(`${e}/`)?s.slice(e.length+1):void 0;return i(`div`,{class:X.list,"data-flat":e.flat?``:void 0,"data-bare":e.bare?``:void 0,children:i(oe,{each:o,by:e=>e.id,children:n=>i(Ce,{ctx:l(n.id)?{...r,focus:l(n.id)}:r,slot:e.slot,section:n,open:s?c(n.id):t.sectionOpen(e.slot,n.id)??(!e.collapsed||!!n.open),focused:c(n.id)})})})}function Ce(e){let{ctx:n,section:r}=e,a=E(e.open),s=E(e.open),c=E(!1),l,u,d,f=o(`section`,{class:X.section,"data-section":r.id,children:[o(`button`,{type:`button`,class:X.header,ref:e=>u=e,onClick:()=>{c.set(!0),d?.cancel(),d=void 0,s.set(!s.value);let t=!s.value&&a.value&&l?ie(l,`grow`):void 0;t?(d=t,n.shell.setSectionOpen(e.slot,r.id,!1),t.finished.then(()=>{d===t&&(d=void 0,a.set(!1),t.cancel())},()=>{})):(a.set(s.value),n.shell.setSectionOpen(e.slot,r.id,a.value))},children:[i(`span`,{class:X.title,children:r.heading??r.title}),i(ue,{name:`chevron-down`,size:14,class:X.chevron})]}),i(`div`,{class:X.body,ref:e=>{l=e},children:ae(a.asReadonly,()=>i(_,{renderer:r.render,ctx:n}))})]});return t([s,a,c],()=>{I(u,`aria-expanded`,String(s.value)),I(l,`hidden`,!a.value),I(l,`data-reveal`,c.value)}),e.focused&&(n.shell.setSectionOpen(e.slot,r.id,!0),queueMicrotask(()=>f.scrollIntoView({block:`nearest`}))),f}function Q(){return(Q=e((()=>{k(),O(),l(),D(),Z(),S(),h(),s()})))()}function $(){return($=e((()=>{O(),F(),l(),g(),a(),B(),p(),T(),D(),se(),le(),te(),ce(),f(),re(),ne(),me(),U(),W(),he(),z(),fe(),ge(),k(),pe(),_e(),ve(),L(),R(),M(),V(),H(),N(),v(),Y(),ye(),P(),ee(),x(),C(),b(),Q(),S(),y(),w()})))()}export{Y as a,xe as i,Se as n,Q as r,$ as t};