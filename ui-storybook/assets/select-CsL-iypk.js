import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t,h as n,m as r,n as i,r as a,t as o,v as s}from"./jsx-runtime-DiBZWcxb.js";import{i as c,r as l}from"./base-Cal5NIfy.js";import{n as u,t as d}from"./distinctUntilChanged-BHDujrwf.js";import{a as f,r as p}from"./control-flow-HAEcegil.js";import{n as m,t as h}from"./map-CsR1ibWS.js";import{n as g,r as _}from"./observable-state-D-XGaosJ.js";import{n as v,t as y}from"./icon-Dqu8cMU0.js";import{n as b,t as x}from"./scroll-area-XzYIuKyv.js";var S;function C(){return(C=e((()=>{c(),S={button:`msp-select-button`,check:`msp-select-check`,chevron:`msp-select-chevron`,floating:`msp-select-floating`,label:`msp-select-label`,list:`msp-select-list`,"list-in":`msp-select-list-in`,listContent:`msp-select-listContent`,option:`msp-select-option`,select:`msp-select-select`},l(`components/select/select.module.css`,`@layer msp.components {
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
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  transition: background-color var(--msp-motion-fast) var(--msp-ease);
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
  }

  & > .msp-select-list {
    background: var(--msp-color-raised);
    box-shadow: inset 0 0 0 1px var(--msp-glass-edge),
      var(--msp-shadow-overlay);
  }
}
}
`)})))()}function w(e){let t=_(!1),n=D(e.value),r;return a(`span`,{class:`${S.select} ${e.class??``}`,ref:e=>{r=e},children:[i(T,{label:n.pipe(m(t=>e.options.find(e=>e[0]===t)?.[1]??``)),open:t,size:e.size,title:e.title,"aria-label":e[`aria-label`]}),i(p,{when:t,children:()=>{let a=i(E,{options:e.options,value:n,onPick:n=>{t.set(!1),e.onChange?.(n)},onClose:()=>t.set(!1)});return e.over?i(O,{anchor:r,children:a}):a}})]})}function T(e){return a(`button`,{type:`button`,class:S.button,"data-size":e.size??`md`,"aria-haspopup":`listbox`,"aria-expanded":e.open,"aria-label":e[`aria-label`],title:e.title,onClick:()=>e.open.set(!e.open.value),children:[i(`span`,{class:S.label,children:e.label}),i(y,{name:`chevron-down`,size:14,class:S.chevron})]})}function E(e){let r=[],o=e=>r[Math.max(0,Math.min(r.length-1,e))]?.focus(),s=i(x,{class:S.list,contentClass:S.listContent,role:`listbox`,onKeyDown:t=>{let n=r.indexOf(document.activeElement);if(t.key===`ArrowDown`)o(n+1);else if(t.key===`ArrowUp`)o(n-1);else if(t.key===`Home`)o(0);else if(t.key===`End`)o(r.length-1);else if(t.key===`Escape`)e.onClose();else return;t.preventDefault(),t.stopPropagation()},children:e.options.map(([t,n])=>{let o=a(`button`,{type:`button`,role:`option`,class:S.option,"aria-selected":e.value.pipe(m(e=>e===t),d()),onClick:()=>e.onPick(t),children:[i(`span`,{children:n}),i(y,{name:`check`,size:14,class:S.check})]});return r.push(o),o})}),c;t(e.value,e=>{c=e}),queueMicrotask(()=>o(Math.max(0,e.options.findIndex(e=>e[0]===c))));let l=t=>{let n=t.target;s.contains(n)||n.closest?.(`[aria-haspopup="listbox"][aria-expanded="true"]`)||e.onClose()};return document.addEventListener(`pointerdown`,l,!0),n(()=>document.removeEventListener(`pointerdown`,l,!0)),s}function D(e){return s(e)||_(e).asReadonly}function O(e){let t=i(`div`,{class:S.floating,"attr:popover":`manual`,children:e.children}),r=()=>{let n=e.anchor.getBoundingClientRect(),r=t.offsetHeight,i=window.innerHeight-n.bottom,a=i>=r+8||i>=n.top?n.bottom+2:n.top-r-2;t.style.minWidth=`${n.width}px`,t.style.left=`${Math.max(8,Math.min(n.left,window.innerWidth-8-t.offsetWidth))}px`,t.style.top=`${Math.max(4,a)}px`};return queueMicrotask(()=>{t.isConnected&&(t.showPopover?.(),r(),(t.querySelector(`[aria-selected="true"]`)??t.querySelector(`[role=option]`))?.focus())}),window.addEventListener(`scroll`,r,!0),window.addEventListener(`resize`,r),n(()=>{window.removeEventListener(`scroll`,r,!0),window.removeEventListener(`resize`,r)}),t}function k(){return(k=e((()=>{u(),h(),f(),r(),g(),v(),b(),C(),o()})))()}export{k as i,w as n,T as r,E as t};