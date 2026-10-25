import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{E as t,g as n,m as r,n as i,r as a,t as o,x as s}from"./jsx-runtime-DbCUSNU3.js";import{n as c,r as l}from"./registry-D35yV2Tb.js";import{S as u,b as d,x as f}from"./work-queue-DoxU-HjK.js";import{n as p,t as m}from"./observable-state-eRUcDuAs.js";import{i as h,n as g}from"./control-flow-BQuMY04w.js";import{n as _,t as v}from"./icon-1ydjt1pd.js";import{i as y,n as b,o as x,s as S}from"./scoped-Dk1HMUKj.js";import{n as C,t as w}from"./scroll-area-ukLK_GOt.js";import{a as T,n as E,t as D}from"./events-5qSA8--5.js";var O;function k(){return(k=e((()=>{l(),O={button:`msp-select-button`,check:`msp-select-check`,chevron:`msp-select-chevron`,floating:`msp-select-floating`,group:`msp-select-group`,groupBody:`msp-select-groupBody`,groupChevron:`msp-select-groupChevron`,groupHead:`msp-select-groupHead`,label:`msp-select-label`,list:`msp-select-list`,"list-in":`msp-select-list-in`,listContent:`msp-select-listContent`,menuPopover:`msp-select-menuPopover`,option:`msp-select-option`,select:`msp-select-select`},c(`components/select/select.module.css`,`@layer msp.components {
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
`)})))()}function A(e){let t=p(!1),n=N(e.value),r;return a(`span`,{class:`${O.select} ${e.class??``}`,ref:e=>{r=e},children:[i(j,{label:d(n,t=>e.options.find(e=>e[0]===t)?.[1]??``),open:t,size:e.size,title:e.title,"aria-label":e[`aria-label`]}),i(g,{when:t,children:()=>{let a=i(M,{options:e.options,value:n,onPick:n=>{t.set(!1),e.onChange?.(n)},onClose:()=>t.set(!1),floating:e.over,"aria-label":e[`aria-label`]??e.title});return e.over?i(F,{anchor:r,children:a}):a}})]})}function j(e){return a(`button`,{type:`button`,class:O.button,"data-size":e.size??`md`,"aria-haspopup":`listbox`,"aria-expanded":e.open,"aria-label":e[`aria-label`],title:e.title,onClick:()=>e.open.set(!e.open.value),children:[i(`span`,{class:O.label,children:e.label}),i(v,{name:`chevron-down`,size:14,class:O.chevron})]})}function M(e){let t;r(e.value,e=>{t=e});let n=new Map,o=()=>[...m.querySelectorAll(`[role="option"], [data-group-head]`)].filter(e=>!e.closest(`[hidden]`)),s=e=>{let t=o();t[Math.max(0,Math.min(t.length-1,e))]?.focus()},c=([t,r])=>{let o=a(`button`,{type:`button`,role:`option`,class:O.option,"aria-selected":d(e.value,e=>e===t),onClick:()=>e.onPick(t),children:[i(`span`,{children:r}),i(v,{name:`check`,size:14,class:O.check})]});return n.set(t,o),o},l=new Map,u=[];for(let t of e.options)t[2]?l.has(t[2])?l.get(t[2]).push(t):l.set(t[2],[t]):u.push(t);let f=(e,n)=>{let r=p(n.some(e=>e[0]===t));return a(`div`,{class:O.group,role:`group`,"aria-label":e,children:[a(`button`,{type:`button`,class:O.groupHead,"data-group-head":``,"aria-expanded":r,onClick:()=>r.set(!r.value),children:[i(v,{name:`chevron-right`,size:13,class:O.groupChevron}),i(`span`,{children:e})]}),i(`div`,{class:O.groupBody,hidden:d(r.asReadonly,e=>!e),children:n.map(c)})]})},m=a(w,{class:O.list,contentClass:O.listContent,chain:!e.floating,role:`listbox`,"aria-label":e[`aria-label`],onKeyDown:t=>{let n=o(),r=n.indexOf(D(m));if(t.key===`ArrowDown`)s(r+1);else if(t.key===`ArrowUp`)s(r-1);else if(t.key===`Home`)s(0);else if(t.key===`End`)s(n.length-1);else if(t.key===`Escape`)e.onClose();else return;t.preventDefault(),t.stopPropagation()},children:[u.map(c),[...l].map(([e,t])=>f(e,t))]});return queueMicrotask(()=>{let e=t===void 0?void 0:n.get(t);e&&!e.closest(`[hidden]`)?e.focus():s(0)}),S(document,`pointerdown`,t=>{let n=E(t);T(t,m)||n.closest?.(`[aria-haspopup="listbox"][aria-expanded="true"]`)||e.onClose()},{capture:!0}),m}function N(e){if(u(e))return e;let r=t(e),i=p(r?void 0:e);return r&&n(r,e=>i.set(e)),i.asReadonly}function P(e){let t;return S(document,`keydown`,t=>{t.key!==`Escape`||t.defaultPrevented||(t.preventDefault(),e.onClose(!0))},{capture:!0}),S(document,`pointerdown`,n=>{T(n,t)||T(n,e.anchor)||e.onClose()},{capture:!0}),i(F,{anchor:e.anchor,align:`end`,children:i(`div`,{class:O.menuPopover,role:`menu`,"aria-label":e[`aria-label`],ref:e=>{t=e,b(()=>e.querySelector(`button:not(:disabled)`)?.focus())},children:e.children})})}function F(e){let t=i(`div`,{class:O.floating,"attr:popover":`manual`,children:e.children}),n=-1,r=()=>{let r=e.anchor.getBoundingClientRect();r.width!==n&&(n=r.width,t.style.minWidth=`${r.width}px`);let i=t.offsetHeight,a=t.offsetWidth,o=window.innerHeight-r.bottom,s=o>=i+8||o>=r.top?r.bottom+2:r.top-i-2,c=e.align===`end`?r.right-a:r.left;t.style.left=`${Math.max(8,Math.min(c,window.innerWidth-8-a))}px`,t.style.top=`${Math.max(4,Math.min(s,window.innerHeight-8-i))}px`};return queueMicrotask(()=>{t.isConnected&&(t.showPopover?.(),r(),(t.querySelector(`[aria-selected="true"]`)??t.querySelector(`[role=option]`))?.focus())}),S(window,`scroll`,e=>{T(e,t)||r()},{capture:!0}),S(window,`resize`,r),x(t,()=>{t.isConnected&&r()}),t}function I(){return(I=e((()=>{h(),s(),y(),m(),_(),C(),k(),f(),o()})))()}export{j as a,A as i,P as n,I as o,M as r,F as t};