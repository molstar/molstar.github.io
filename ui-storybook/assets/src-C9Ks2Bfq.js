import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{X as t,Z as n,f as r,i,m as a,n as o,p as s,r as c,t as l}from"./jsx-runtime-pJJ4pzd1.js";import{n as u,t as d}from"./map-BLVP9Oyc.js";import{n as f,r as p}from"./observable-state-U0Aegh1x.js";import{i as m,n as h}from"./params-form-Cr0vP-Xz.js";import{C as g,D as _,_ as ee,a as te,d as ne,f as re,g as ie,l as ae,m as oe,r as v,s as y,u as b}from"./shell-CzI7wQ_f.js";import{d as x,i as S,n as C,s as w,u as T}from"./control-flow-D80wAH1n.js";import{n as se,t as ce}from"./combineLatest-BuVl0X9y.js";import{t as E}from"./playback-C5VHT9Rs.js";import{n as D,t as O}from"./icon-Cd9kBD44.js";import{n as k,t as A}from"./scroll-area-W5mfuQm0.js";import{t as j}from"./keyed-selector-Cr4ED1rO.js";import{n as M}from"./wordmark-D5tvrxoo.js";import{i as N}from"./select-Bk_tLTmE.js";import{n as P}from"./text-input-BVt-QcfS.js";import{n as F}from"./button-nz8xXRSW.js";import{n as I}from"./action-footer-CgjzDWO2.js";import{n as L}from"./choices-Cff9y72r.js";import{n as R}from"./markdown-De--vheY.js";import{r as z}from"./playback-Clf1CcTQ.js";function B(){return(B=e((()=>{i(),_(),E(),v()})))()}var V;function H(){return(H=e((()=>{n(),V={content:`msp-virtual-list-content`,list:`msp-virtual-list-list`,window:`msp-virtual-list-window`},t(`components/virtual-list/virtual-list.module.css`,`@layer msp.components {
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
`)})))()}function U(e){let t=e.overscan??8,n=p(0),r=p(0),i,s=()=>{i&&(n.set(i.scrollTop),i.clientHeight!==r.value&&r.set(i.clientHeight))},c=ce([e.items,n.asReadonly,r.asReadonly]).pipe(u(([n,r,i])=>{let a=Math.max(0,Math.floor(r/e.rowHeight)-t),o=Math.ceil((i||800)/e.rowHeight)+2*t;return{items:n,first:a,last:Math.min(n.length,a+o)}}),T((e,t)=>e.items===t.items&&e.first===t.first&&e.last===t.last)),l=c.pipe(u(e=>e.items.slice(e.first,e.last)));return o(A,{class:`${V.list} ${e.class??``}`,contentClass:V.content,viewportRef:e=>{i=e,e.addEventListener(`scroll`,s,{passive:!0});let t=typeof ResizeObserver<`u`?new ResizeObserver(s):void 0;t?.observe(e),a(()=>{e.removeEventListener(`scroll`,s),t?.disconnect()}),queueMicrotask(s)},role:e.role,"aria-label":e[`aria-label`],style:{height:e.items.pipe(u(t=>`${t.length*e.rowHeight}px`))},children:o(`div`,{class:V.window,style:{transform:c.pipe(u(t=>`translateY(${t.first*e.rowHeight}px)`))},children:o(C,{each:l,children:t=>e.children(t)},e.key)})})}function W(e,t,n){let r=[],i=(e,a)=>{for(let o of e){r.push({node:o,depth:a});let e=t(o);e?.length&&n(o)&&i(e,a+1)}};return i(e,0),r}function G(){return(G=e((()=>{se(),x(),d(),S(),s(),f(),k(),H(),l()})))()}var K;function q(){return(q=e((()=>{n(),K={label:`msp-canvas-hover-label-label`,primary:`msp-canvas-hover-label-primary`,secondary:`msp-canvas-hover-label-secondary`},t(`views/canvas/hover-label.module.css`,`@layer msp.components {
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

  background: var(--msp-glass-bg);
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
}

.msp-canvas-hover-label-primary {
  font-weight: 600;
}

.msp-canvas-hover-label-secondary {
  color: var(--msp-color-text-muted);
}
}
`)})))()}function le(e){let t=o(`div`,{class:K.label,hidden:!0,role:`tooltip`,children:o(C,{each:e.model.lines,children:(e,t)=>o(`span`,{class:t.pipe(u(e=>e===0?K.primary:K.secondary)),children:e})})}),n=0,i=0,s=!1,c=!1,l=!1,d=0,f=()=>{d=0;let e=s&&!c&&l;if(t.hidden===e&&(t.hidden=!e),!e)return;let r=t.offsetParent;if(!r)return;let a=r.getBoundingClientRect(),o=n-a.left,u=i-a.top,f=t.offsetWidth,p=t.offsetHeight,m=o+J+f>r.clientWidth?o-J-f:o+J,h=u+J+p>r.clientHeight?u-J-p:u+J;t.style.transform=`translate(${Math.max(0,m)}px, ${Math.max(0,h)}px)`},p=()=>{d||=requestAnimationFrame(f)};r(e.model.lines,e=>{l=e.length>0,p()}),queueMicrotask(()=>{let t=e.area();if(!t)return;let r=e=>{n=e.clientX,i=e.clientY,s=!0,c=e.buttons!==0,p()},a=()=>{s=!1,p()};t.addEventListener(`pointermove`,r),t.addEventListener(`pointerleave`,a),m=()=>{t.removeEventListener(`pointermove`,r),t.removeEventListener(`pointerleave`,a)}});let m=()=>{};return a(()=>{m(),d&&cancelAnimationFrame(d)}),t}var J;function Y(){return(Y=e((()=>{d(),S(),s(),q(),l(),J=14})))()}var X;function Z(){return(Z=e((()=>{n(),X={body:`msp-shell-section-list-body`,chevron:`msp-shell-section-list-chevron`,header:`msp-shell-section-list-header`,list:`msp-shell-section-list-list`,section:`msp-shell-section-list-section`,title:`msp-shell-section-list-title`},t(`views/shell/section-list.module.css`,`@layer msp.components {
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
`)})))()}function ue(e){let{shell:t,subject:n}=e,r={shell:t,subject:n},i=t.sections(e.slot).pipe(u(e=>e.filter(e=>!e.when||e.when(r))));return o(`div`,{class:X.list,"data-flat":e.flat?``:void 0,children:o(C,{each:i,children:n=>o(de,{ctx:r,slot:e.slot,section:n,open:e.focus?e.focus===n.id:t.sectionOpen(e.slot,n.id)??!e.collapsed,focused:e.focus===n.id})},e=>e.id)})}function de(e){let{ctx:t,section:n}=e,r=p(e.open),i=p(e.open),a=p(!1),s,l,d=c(`section`,{class:X.section,"data-section":n.id,children:[c(`button`,{type:`button`,class:X.header,"aria-expanded":i,onClick:()=>{a.set(!0),l?.cancel(),l=void 0,i.set(!i.value);let o=!i.value&&r.value&&s?w(s,!1):void 0;o?(l=o,t.shell.setSectionOpen(e.slot,n.id,!1),o.finished.then(()=>{l===o&&(l=void 0,r.set(!1),o.cancel())},()=>{})):(r.set(i.value),t.shell.setSectionOpen(e.slot,n.id,r.value))},children:[o(`span`,{class:X.title,children:n.title}),o(O,{name:`chevron-down`,size:14,class:X.chevron})]}),o(`div`,{class:X.body,ref:e=>{s=e},hidden:r.asReadonly.pipe(u(e=>!e)),"data-reveal":a.asReadonly.pipe(u(e=>e?``:void 0)),children:o(b,{renderer:n.render,ctx:t})})]});return e.focused&&(t.shell.setSectionOpen(e.slot,n.id,!0),queueMicrotask(()=>d.scrollIntoView({block:`nearest`}))),d}function Q(){return(Q=e((()=>{d(),D(),S(),f(),Z(),ne(),l()})))()}function $(){return($=e((()=>{S(),s(),g(),j(),f(),oe(),I(),F(),L(),m(),D(),M(),R(),h(),k(),N(),P(),G(),Y(),z(),ee(),ae(),_(),re(),y(),ie(),Q(),te()})))()}export{Y as a,G as c,le as i,B as l,ue as n,U as o,Q as r,W as s,$ as t};