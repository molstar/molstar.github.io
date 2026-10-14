import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t,h as n,i as r,m as i,n as a,p as o,r as s,t as c}from"./jsx-runtime-DiBZWcxb.js";import{i as l,r as u}from"./base-Cal5NIfy.js";import{i as d,n as f}from"./params-form-MNGzvbPp.js";import{n as p,t as m}from"./distinctUntilChanged-BHDujrwf.js";import{a as h,c as g,i as ee,n as _}from"./control-flow-HAEcegil.js";import{n as v,t as y}from"./map-CsR1ibWS.js";import{n as te,t as ne}from"./combineLatest-Cmmnh-lC.js";import{A as b,C as x,E as re,_ as ie,a as ae,d as oe,f as S,g as se,l as ce,m as le,r as ue,s as de,u as fe}from"./shell-Dnh1QcSy.js";import{n as C,r as w}from"./observable-state-D-XGaosJ.js";import{t as pe}from"./playback-D2Zhf7mj.js";import{n as T,t as E}from"./icon-Dqu8cMU0.js";import{n as D,t as me}from"./scroll-area-XzYIuKyv.js";import{t as O}from"./keyed-selector-CKIJWWFN.js";import{n as k}from"./wordmark-FS1EQ9jB.js";import{i as A}from"./select-CsL-iypk.js";import{n as j}from"./text-input-CQilzVcE.js";import{n as M}from"./button-DEZz5joq.js";import{n as N}from"./action-footer-D3SDSK1q.js";import{n as P}from"./choices-Co3cCxf6.js";import{n as F}from"./legend-CptIp6-Q.js";import{n as I}from"./markdown-CW7HDWTS.js";import{r as L}from"./playback-Dftv5awz.js";function R(){return(R=e((()=>{r(),b(),pe(),ue()})))()}var z;function B(){return(B=e((()=>{l(),z={menu:`msp-context-menu-menu`,row:`msp-context-menu-row`},u(`components/context-menu/context-menu.module.css`,`@layer msp.components {
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
`)})))()}function he(e,t,n,r){let i=!1,c=()=>{},l=()=>{i||(i=!0,document.removeEventListener(`pointerdown`,u,!0),document.removeEventListener(`keydown`,d,!0),window.removeEventListener(`resize`,l),window.removeEventListener(`scroll`,l,!0),c(),f.remove(),r?.())},u=e=>{f.contains(e.target)||l()},d=e=>{e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),l())},f;o(e=>{c=e,f=a(`div`,{class:z.menu,role:`menu`,onContextMenu:e=>e.preventDefault(),children:n.map(e=>s(`button`,{type:`button`,role:`menuitem`,class:z.row,disabled:!!e.disabled,title:e.disabled,onClick:()=>{l(),e.run()},children:[e.icon?a(E,{name:e.icon,size:15}):a(`span`,{}),a(`span`,{children:e.label})]}))})}),e.append(f);let p=f.offsetWidth,m=f.offsetHeight,h=t.x+p>window.innerWidth-4?Math.max(4,t.x-p):t.x,g=t.y+m>window.innerHeight-4?Math.max(4,t.y-m):t.y;return f.style.transform=`translate(${Math.round(h)}px, ${Math.round(g)}px)`,document.addEventListener(`pointerdown`,u,!0),document.addEventListener(`keydown`,d,!0),window.addEventListener(`resize`,l),window.addEventListener(`scroll`,l,!0),f.querySelector(`button:not(:disabled)`)?.focus({preventScroll:!0}),l}function V(){return(V=e((()=>{i(),T(),B(),c()})))()}var H;function U(){return(U=e((()=>{l(),H={content:`msp-virtual-list-content`,list:`msp-virtual-list-list`,window:`msp-virtual-list-window`},u(`components/virtual-list/virtual-list.module.css`,`@layer msp.components {
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
`)})))()}function ge(e){let t=e.overscan??8,r=w(0),i=w(0),o,s=()=>{o&&(r.set(o.scrollTop),o.clientHeight!==i.value&&i.set(o.clientHeight))},c=ne([e.items,r.asReadonly,i.asReadonly]).pipe(v(([n,r,i])=>{let a=Math.max(0,Math.floor(r/e.rowHeight)-t),o=Math.ceil((i||800)/e.rowHeight)+2*t;return{items:n,first:a,last:Math.min(n.length,a+o)}}),m((e,t)=>e.items===t.items&&e.first===t.first&&e.last===t.last)),l=c.pipe(v(e=>e.items.slice(e.first,e.last)));return a(me,{class:`${H.list} ${e.class??``}`,contentClass:H.content,viewportRef:e=>{o=e,e.addEventListener(`scroll`,s,{passive:!0});let t=typeof ResizeObserver<`u`?new ResizeObserver(s):void 0;t?.observe(e),n(()=>{e.removeEventListener(`scroll`,s),t?.disconnect()}),queueMicrotask(s)},role:e.role,"aria-label":e[`aria-label`],style:{height:e.items.pipe(v(t=>`${t.length*e.rowHeight}px`))},children:a(`div`,{class:H.window,style:{transform:c.pipe(v(t=>`translateY(${t.first*e.rowHeight}px)`))},children:a(_,{each:l,children:t=>e.children(t)},e.key)})})}function _e(e,t,n){let r=[],i=(e,a)=>{for(let o of e){r.push({node:o,depth:a});let e=t(o);e?.length&&n(o)&&i(e,a+1)}};return i(e,0),r}function W(){return(W=e((()=>{te(),p(),y(),h(),i(),C(),D(),U(),c()})))()}var G;function K(){return(K=e((()=>{l(),G={label:`msp-canvas-hover-label-label`,primary:`msp-canvas-hover-label-primary`,secondary:`msp-canvas-hover-label-secondary`},u(`views/canvas/hover-label.module.css`,`@layer msp.components {
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
`)})))()}function q(e){let r=a(`div`,{class:G.label,hidden:!0,role:`tooltip`,children:a(_,{each:e.model.lines,children:(e,t)=>a(`span`,{class:t.pipe(v(e=>e===0?G.primary:G.secondary)),children:e})})}),i=0,o=0,s=!1,c=!1,l=!1,u=0,d=()=>{u=0;let e=s&&!c&&l;if(r.hidden===e&&(r.hidden=!e),!e)return;let t=r.offsetParent;if(!t)return;let n=t.getBoundingClientRect(),a=i-n.left,d=o-n.top,f=r.offsetWidth,p=r.offsetHeight,m=a+J+f>t.clientWidth?a-J-f:a+J,h=d+J+p>t.clientHeight?d-J-p:d+J;r.style.transform=`translate(${Math.max(0,m)}px, ${Math.max(0,h)}px)`},f=()=>{u||=requestAnimationFrame(d)};t(e.model.lines,e=>{l=e.length>0,f()}),queueMicrotask(()=>{let t=e.area();if(!t)return;let n=e=>{i=e.clientX,o=e.clientY,s=!0,c=e.buttons!==0,f()},r=()=>{s=!1,f()};t.addEventListener(`pointermove`,n),t.addEventListener(`pointerleave`,r),p=()=>{t.removeEventListener(`pointermove`,n),t.removeEventListener(`pointerleave`,r)}});let p=()=>{};return n(()=>{p(),u&&cancelAnimationFrame(u)}),r}var J;function Y(){return(Y=e((()=>{y(),h(),i(),K(),c(),J=14})))()}var X;function Z(){return(Z=e((()=>{l(),X={body:`msp-shell-section-list-body`,chevron:`msp-shell-section-list-chevron`,header:`msp-shell-section-list-header`,list:`msp-shell-section-list-list`,section:`msp-shell-section-list-section`,title:`msp-shell-section-list-title`},u(`views/shell/section-list.module.css`,`@layer msp.components {
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
`)})))()}function ve(e){let{shell:t,subject:n}=e,r={shell:t,subject:n},i=t.sections(e.slot).pipe(v(e=>e.filter(e=>!e.when||e.when(r))));return a(`div`,{class:X.list,"data-flat":e.flat?``:void 0,children:a(_,{each:i,children:n=>a(ye,{ctx:r,slot:e.slot,section:n,open:e.focus?e.focus===n.id:t.sectionOpen(e.slot,n.id)??!e.collapsed,focused:e.focus===n.id})},e=>e.id)})}function ye(e){let{ctx:t,section:n}=e,r=w(e.open),i=w(e.open),o=w(!1),c,l,u=s(`section`,{class:X.section,"data-section":n.id,children:[s(`button`,{type:`button`,class:X.header,"aria-expanded":i,onClick:()=>{o.set(!0),l?.cancel(),l=void 0,i.set(!i.value);let a=!i.value&&r.value&&c?g(c,!1):void 0;a?(l=a,t.shell.setSectionOpen(e.slot,n.id,!1),a.finished.then(()=>{l===a&&(l=void 0,r.set(!1),a.cancel())},()=>{})):(r.set(i.value),t.shell.setSectionOpen(e.slot,n.id,r.value))},children:[a(`span`,{class:X.title,children:n.title}),a(E,{name:`chevron-down`,size:14,class:X.chevron})]}),a(`div`,{class:X.body,ref:e=>{c=e},hidden:r.asReadonly.pipe(v(e=>!e)),"data-reveal":o.asReadonly.pipe(v(e=>e?``:void 0)),children:ee(r.asReadonly,()=>a(fe,{renderer:n.render,ctx:t}))})]});return e.focused&&(t.shell.setSectionOpen(e.slot,n.id,!0),queueMicrotask(()=>u.scrollIntoView({block:`nearest`}))),u}function Q(){return(Q=e((()=>{y(),T(),h(),C(),Z(),oe(),c()})))()}function $(){return($=e((()=>{h(),i(),re(),O(),C(),x(),le(),N(),M(),P(),d(),V(),F(),T(),k(),I(),f(),D(),A(),j(),W(),Y(),L(),ie(),ce(),b(),S(),de(),se(),Q(),ae()})))()}export{Y as a,W as c,R as d,q as i,V as l,ve as n,ge as o,Q as r,_e as s,$ as t,he as u};