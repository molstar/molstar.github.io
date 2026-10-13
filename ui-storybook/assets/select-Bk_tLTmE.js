import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{X as t,Z as n,_ as r,f as i,m as a,n as o,p as s,r as c,t as l}from"./jsx-runtime-pJJ4pzd1.js";import{n as u,t as d}from"./map-BLVP9Oyc.js";import{n as f,r as p}from"./observable-state-U0Aegh1x.js";import{d as m,i as h,r as g,u as _}from"./control-flow-D80wAH1n.js";import{n as v,t as y}from"./icon-Cd9kBD44.js";import{n as b,t as x}from"./scroll-area-W5mfuQm0.js";var S;function C(){return(C=e((()=>{n(),S={button:`msp-select-button`,check:`msp-select-check`,chevron:`msp-select-chevron`,floating:`msp-select-floating`,label:`msp-select-label`,list:`msp-select-list`,"list-in":`msp-select-list-in`,listContent:`msp-select-listContent`,option:`msp-select-option`,select:`msp-select-select`},t(`components/select/select.module.css`,`@layer msp.components {
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
`)})))()}function w(e){let t=p(!1),n=D(e.value),r;return c(`span`,{class:`${S.select} ${e.class??``}`,ref:e=>{r=e},children:[o(T,{label:n.pipe(u(t=>e.options.find(e=>e[0]===t)?.[1]??``)),open:t,size:e.size,title:e.title,"aria-label":e[`aria-label`]}),o(g,{when:t,children:()=>{let i=o(E,{options:e.options,value:n,onPick:n=>{t.set(!1),e.onChange?.(n)},onClose:()=>t.set(!1)});return e.over?o(O,{anchor:r,children:i}):i}})]})}function T(e){return c(`button`,{type:`button`,class:S.button,"data-size":e.size??`md`,"aria-haspopup":`listbox`,"aria-expanded":e.open,"aria-label":e[`aria-label`],title:e.title,onClick:()=>e.open.set(!e.open.value),children:[o(`span`,{class:S.label,children:e.label}),o(y,{name:`chevron-down`,size:14,class:S.chevron})]})}function E(e){let t=[],n=e=>t[Math.max(0,Math.min(t.length-1,e))]?.focus(),r=o(x,{class:S.list,contentClass:S.listContent,role:`listbox`,onKeyDown:r=>{let i=t.indexOf(document.activeElement);if(r.key===`ArrowDown`)n(i+1);else if(r.key===`ArrowUp`)n(i-1);else if(r.key===`Home`)n(0);else if(r.key===`End`)n(t.length-1);else if(r.key===`Escape`)e.onClose();else return;r.preventDefault(),r.stopPropagation()},children:e.options.map(([n,r])=>{let i=c(`button`,{type:`button`,role:`option`,class:S.option,"aria-selected":e.value.pipe(u(e=>e===n),_()),onClick:()=>e.onPick(n),children:[o(`span`,{children:r}),o(y,{name:`check`,size:14,class:S.check})]});return t.push(i),i})}),s;i(e.value,e=>{s=e}),queueMicrotask(()=>n(Math.max(0,e.options.findIndex(e=>e[0]===s))));let l=t=>{let n=t.target;r.contains(n)||n.closest?.(`[aria-haspopup="listbox"][aria-expanded="true"]`)||e.onClose()};return document.addEventListener(`pointerdown`,l,!0),a(()=>document.removeEventListener(`pointerdown`,l,!0)),r}function D(e){return r(e)||p(e).asReadonly}function O(e){let t=o(`div`,{class:S.floating,"attr:popover":`manual`,children:e.children}),n=()=>{let n=e.anchor.getBoundingClientRect(),r=t.offsetHeight,i=window.innerHeight-n.bottom,a=i>=r+8||i>=n.top?n.bottom+2:n.top-r-2;t.style.minWidth=`${n.width}px`,t.style.left=`${Math.max(8,Math.min(n.left,window.innerWidth-8-t.offsetWidth))}px`,t.style.top=`${Math.max(4,a)}px`};return queueMicrotask(()=>{t.isConnected&&(t.showPopover?.(),n(),(t.querySelector(`[aria-selected="true"]`)??t.querySelector(`[role=option]`))?.focus())}),window.addEventListener(`scroll`,n,!0),window.addEventListener(`resize`,n),a(()=>{window.removeEventListener(`scroll`,n,!0),window.removeEventListener(`resize`,n)}),t}function k(){return(k=e((()=>{m(),d(),h(),s(),f(),v(),b(),C(),l()})))()}export{k as i,w as n,T as r,E as t};