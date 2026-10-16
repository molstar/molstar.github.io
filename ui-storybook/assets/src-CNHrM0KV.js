import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{_ as t,f as n,h as r,n as i,o as a,p as o,r as s,t as c}from"./jsx-runtime-DzTO5r4L.js";import{n as l,r as u}from"./registry-D35yV2Tb.js";import{_ as d,n as f,o as p,u as m,v as h,y as ee}from"./params-form-BiSG3JZ9.js";import{i as g,r as _,s as v,t as y}from"./control-flow-2XcFB3wB.js";import{n as b,t as x}from"./map-COHPbqb4.js";import{n as S,t as te}from"./combineLatest-nINHdI9G.js";import{D as C,S as ne,T as re,c as w,f as T,g as E,i as D,m as ie,n as ae,o as oe,s as se,u as ce}from"./shell-view--7tL82cI.js";import{n as le,t as ue}from"./distinctUntilChanged-Bi0nDGSG.js";import{o as de,u as fe}from"./shell-ChZMBsOH.js";import{n as O,r as k}from"./observable-state-8hMFvtS9.js";import{r as pe}from"./canvas-theme-DFSTGBcx.js";import{n as me}from"./manager-2gFskg8V.js";import{n as A,t as j}from"./icon-Fyk1xIJy.js";import{n as M,t as N}from"./scroll-area-O9ZFxK58.js";import{t as P}from"./keyed-selector-CYjlVwf5.js";import{d as F,f as I,o as L}from"./select-qi6jJ7y0.js";import{n as R}from"./text-input-WVcFJO0h.js";import{n as z}from"./button-oplfrRqY.js";import{r as he}from"./wordmark-CwEe8Xhb.js";import{n as ge}from"./action-footer-CNxDsTvQ.js";import{n as _e}from"./choices-DzH98RgC.js";import{n as ve}from"./legend-DmjT9UbG.js";import{n as ye}from"./glass-wordmark-ChWcj1ph.js";import{n as be}from"./markdown-9OgU-jyp.js";import{c as xe}from"./playback-iaax4IEb.js";var B;function V(){return(V=e((()=>{u(),B={menu:`msp-context-menu-menu`,row:`msp-context-menu-row`},l(`components/context-menu/context-menu.module.css`,`@layer msp.components {
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
`)})))()}function Se(e,t,n,r){let a=!1,c=()=>{},l=ee(),u=()=>{a||(a=!0,document.removeEventListener(`pointerdown`,d,!0),document.removeEventListener(`keydown`,f,!0),window.removeEventListener(`resize`,u),window.removeEventListener(`scroll`,u,!0),c(),l(p),p.remove(),r?.())},d=e=>{F(e,p)||u()},f=t=>{t.key===`Escape`&&(F(t,p)||I(e,t))&&(t.preventDefault(),t.stopPropagation(),u())},p;o(e=>{c=e,p=i(`div`,{class:B.menu,role:`menu`,onKeyDown:h,onContextMenu:e=>e.preventDefault(),children:n.map(e=>s(`button`,{type:`button`,role:`menuitem`,class:B.row,disabled:!!e.disabled,title:e.disabled,onClick:()=>{u(),e.run()},children:[e.icon?i(j,{name:e.icon,size:15}):i(`span`,{}),i(`span`,{children:e.label})]}))})}),e.append(p);let m=p.offsetWidth,g=p.offsetHeight,_=t.x+m>window.innerWidth-4?Math.max(4,t.x-m):t.x,v=t.y+g>window.innerHeight-4?Math.max(4,t.y-g):t.y;return p.style.transform=`translate(${Math.round(_)}px, ${Math.round(v)}px)`,document.addEventListener(`pointerdown`,d,!0),document.addEventListener(`keydown`,f,!0),window.addEventListener(`resize`,u),window.addEventListener(`scroll`,u,!0),p.querySelector(`button:not(:disabled)`)?.focus({preventScroll:!0}),u}function H(){return(H=e((()=>{d(),r(),A(),V(),c()})))()}var U;function W(){return(W=e((()=>{u(),U={content:`msp-virtual-list-content`,list:`msp-virtual-list-list`,window:`msp-virtual-list-window`},l(`components/virtual-list/virtual-list.module.css`,`@layer msp.components {
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
`)})))()}function Ce(e){let n=e.overscan??8,r=k(0),a=k(0),o,s=()=>{o&&(r.set(o.scrollTop),o.clientHeight!==a.value&&a.set(o.clientHeight))},c=te([e.items,r.asReadonly,a.asReadonly]).pipe(b(([t,r,i])=>{let a=Math.max(0,Math.floor(r/e.rowHeight)-n),o=Math.ceil((i||800)/e.rowHeight)+2*n;return{items:t,first:a,last:Math.min(t.length,a+o)}}),ue((e,t)=>e.items===t.items&&e.first===t.first&&e.last===t.last)),l=c.pipe(b(e=>e.items.slice(e.first,e.last)));return i(N,{class:`${U.list} ${e.class??``}`,contentClass:U.content,viewportRef:e=>{o=e,e.addEventListener(`scroll`,s,{passive:!0});let n=typeof ResizeObserver<`u`?new ResizeObserver(s):void 0;n?.observe(e),t(()=>{e.removeEventListener(`scroll`,s),n?.disconnect()}),queueMicrotask(s)},role:e.role,"aria-label":e[`aria-label`],style:{height:e.items.pipe(b(t=>`${t.length*e.rowHeight}px`))},children:i(`div`,{class:U.window,style:{transform:c.pipe(b(t=>`translateY(${t.first*e.rowHeight}px)`))},children:i(y,{each:l,children:t=>e.children(t)},e.key)})})}function we(e,t,n){let r=[],i=(e,a)=>{for(let o of e){r.push({node:o,depth:a});let e=t(o);e?.length&&n(o)&&i(e,a+1)}};return i(e,0),r}function G(){return(G=e((()=>{S(),le(),x(),g(),r(),O(),M(),W(),c()})))()}var K;function q(){return(q=e((()=>{u(),K={label:`msp-canvas-hover-label-label`,primary:`msp-canvas-hover-label-primary`,secondary:`msp-canvas-hover-label-secondary`},l(`views/canvas/hover-label.module.css`,`@layer msp.components {
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
`)})))()}function Te(e){let r=i(`div`,{class:K.label,hidden:!0,role:`tooltip`,children:i(y,{each:e.model.lines,children:(e,t)=>i(`span`,{class:t.pipe(b(e=>e===0?K.primary:K.secondary)),children:e})})}),a=0,o=0,s=!1,c=!1,l=!1,u=0,d=()=>{u=0;let e=s&&!c&&l;if(r.hidden===e&&(r.hidden=!e),!e)return;let t=r.offsetParent;if(!t)return;let n=t.getBoundingClientRect(),i=a-n.left,d=o-n.top,f=r.offsetWidth,p=r.offsetHeight,m=i+J+f>t.clientWidth?i-J-f:i+J,h=d+J+p>t.clientHeight?d-J-p:d+J;r.style.transform=`translate(${Math.max(0,m)}px, ${Math.max(0,h)}px)`},f=()=>{u||=requestAnimationFrame(d)};n(e.model.lines,e=>{l=e.length>0,f()}),queueMicrotask(()=>{let t=e.area();if(!t)return;let n=e.over,r=e=>{a=e.clientX,o=e.clientY,s=!n||n(e.target),c=e.buttons!==0,f()},i=()=>{s=!1,f()};t.addEventListener(`pointermove`,r),t.addEventListener(`pointerleave`,i),p=()=>{t.removeEventListener(`pointermove`,r),t.removeEventListener(`pointerleave`,i)}});let p=()=>{};return t(()=>{p(),u&&cancelAnimationFrame(u)}),r}var J;function Y(){return(Y=e((()=>{x(),g(),r(),q(),c(),J=14})))()}var X;function Z(){return(Z=e((()=>{u(),X={body:`msp-shell-section-list-body`,chevron:`msp-shell-section-list-chevron`,header:`msp-shell-section-list-header`,list:`msp-shell-section-list-list`,section:`msp-shell-section-list-section`,title:`msp-shell-section-list-title`},l(`views/shell/section-list.module.css`,`@layer msp.components {
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
`)})))()}function Ee(e){let{shell:t,subject:n}=e,r={shell:t,subject:n},a=t.sections(e.slot).pipe(b(e=>e.filter(e=>!e.when||e.when(r)))),o=e.focus,s=e=>!!o&&(o===e||o.startsWith(`${e}/`)),c=e=>o?.startsWith(`${e}/`)?o.slice(e.length+1):void 0;return i(`div`,{class:X.list,"data-flat":e.flat?``:void 0,"data-bare":e.bare?``:void 0,children:i(y,{each:a,children:n=>i(De,{ctx:c(n.id)?{...r,focus:c(n.id)}:r,slot:e.slot,section:n,open:o?s(n.id):t.sectionOpen(e.slot,n.id)??(!e.collapsed||!!n.open),focused:s(n.id)})},e=>e.id)})}function De(e){let{ctx:t,section:n}=e,r=k(e.open),a=k(e.open),o=k(!1),c,l,u=s(`section`,{class:X.section,"data-section":n.id,children:[s(`button`,{type:`button`,class:X.header,"aria-expanded":a,onClick:()=>{o.set(!0),l?.cancel(),l=void 0,a.set(!a.value);let i=!a.value&&r.value&&c?v(c,`grow`):void 0;i?(l=i,t.shell.setSectionOpen(e.slot,n.id,!1),i.finished.then(()=>{l===i&&(l=void 0,r.set(!1),i.cancel())},()=>{})):(r.set(a.value),t.shell.setSectionOpen(e.slot,n.id,r.value))},children:[i(`span`,{class:X.title,children:n.heading??n.title}),i(j,{name:`chevron-down`,size:14,class:X.chevron})]}),i(`div`,{class:X.body,ref:e=>{c=e},hidden:r.asReadonly.pipe(b(e=>!e)),"data-reveal":o.asReadonly.pipe(b(e=>e?``:void 0)),children:_(r.asReadonly,()=>i(se,{renderer:n.render,ctx:t}))})]});return e.focused&&(t.shell.setSectionOpen(e.slot,n.id,!0),queueMicrotask(()=>u.scrollIntoView({block:`nearest`}))),u}function Q(){return(Q=e((()=>{x(),A(),g(),O(),Z(),w(),c()})))()}function $(){return($=e((()=>{g(),r(),re(),a(),P(),ne(),O(),pe(),fe(),E(),de(),C(),me(),ge(),z(),_e(),m(),H(),ve(),A(),he(),ye(),be(),f(),p(),M(),L(),R(),G(),Y(),xe(),ie(),oe(),ce(),D(),Q(),w(),T(),ae()})))()}export{Y as a,G as c,Te as i,H as l,Ee as n,Ce as o,Q as r,we as s,$ as t,Se as u};