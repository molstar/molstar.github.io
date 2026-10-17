import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{T as t,b as n,g as r,m as i,n as a,r as o,t as s}from"./jsx-runtime-Dut-27nP.js";import{n as c,r as l}from"./registry-D35yV2Tb.js";import{i as u,n as d}from"./control-flow-BLsZc6z1.js";import{S as f,b as p,x as m}from"./work-queue-DoxU-HjK.js";import{n as h,t as g}from"./observable-state-C67cgDrf.js";import{n as _,t as v}from"./icon-Fyk1xIJy.js";import{i as y,n as b,s as x}from"./scoped-CYrGtqEo.js";import{n as S,t as C}from"./scroll-area-C3WxaIdw.js";function w(e){return(typeof e.composedPath==`function`?e.composedPath():[])[0]??e.target}function T(e,t){if(!t)return!1;let n=typeof e.composedPath==`function`?e.composedPath():[];return n.length?n.includes(t):t.contains(e.target)}function E(e){let t=e.getRootNode().activeElement??null;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t}function D(e){let t=e.getRootNode();return typeof ShadowRoot<`u`&&t instanceof ShadowRoot?t.host:e.closest?.(`.msp-root`)??e.parentElement?.closest(`.msp-root`)??void 0}function O(e,t){let n=D(e);if(!n||T(t,n))return!0;let r=n.ownerDocument,i=r.activeElement;return i&&i!==r.body&&i!==r.documentElement?!1:n.matches(`:hover`)}function k(e){return typeof HTMLElement>`u`||!(e instanceof HTMLElement)?!1:e.isContentEditable||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement?!0:e instanceof HTMLInputElement&&![`checkbox`,`radio`,`range`,`button`,`color`].includes(e.type)}function A(){return(A=e((()=>{})))()}var j;function M(){return(M=e((()=>{l(),j={button:`msp-select-button`,check:`msp-select-check`,chevron:`msp-select-chevron`,floating:`msp-select-floating`,group:`msp-select-group`,groupBody:`msp-select-groupBody`,groupChevron:`msp-select-groupChevron`,groupHead:`msp-select-groupHead`,label:`msp-select-label`,list:`msp-select-list`,"list-in":`msp-select-list-in`,listContent:`msp-select-listContent`,menuPopover:`msp-select-menuPopover`,option:`msp-select-option`,select:`msp-select-select`},c(`components/select/select.module.css`,`@layer msp.components {
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
`)})))()}function N(e){let t=h(!1),n=I(e.value),r;return o(`span`,{class:`${j.select} ${e.class??``}`,ref:e=>{r=e},children:[a(P,{label:p(n,t=>e.options.find(e=>e[0]===t)?.[1]??``),open:t,size:e.size,title:e.title,"aria-label":e[`aria-label`]}),a(d,{when:t,children:()=>{let i=a(F,{options:e.options,value:n,onPick:n=>{t.set(!1),e.onChange?.(n)},onClose:()=>t.set(!1),floating:e.over,"aria-label":e[`aria-label`]??e.title});return e.over?a(R,{anchor:r,children:i}):i}})]})}function P(e){return o(`button`,{type:`button`,class:j.button,"data-size":e.size??`md`,"aria-haspopup":`listbox`,"aria-expanded":e.open,"aria-label":e[`aria-label`],title:e.title,onClick:()=>e.open.set(!e.open.value),children:[a(`span`,{class:j.label,children:e.label}),a(v,{name:`chevron-down`,size:14,class:j.chevron})]})}function F(e){let t;i(e.value,e=>{t=e});let n=new Map,r=()=>[...f.querySelectorAll(`[role="option"], [data-group-head]`)].filter(e=>!e.closest(`[hidden]`)),s=e=>{let t=r();t[Math.max(0,Math.min(t.length-1,e))]?.focus()},c=([t,r])=>{let i=o(`button`,{type:`button`,role:`option`,class:j.option,"aria-selected":p(e.value,e=>e===t),onClick:()=>e.onPick(t),children:[a(`span`,{children:r}),a(v,{name:`check`,size:14,class:j.check})]});return n.set(t,i),i},l=new Map,u=[];for(let t of e.options)t[2]?l.has(t[2])?l.get(t[2]).push(t):l.set(t[2],[t]):u.push(t);let d=(e,n)=>{let r=h(n.some(e=>e[0]===t));return o(`div`,{class:j.group,role:`group`,"aria-label":e,children:[o(`button`,{type:`button`,class:j.groupHead,"data-group-head":``,"aria-expanded":r,onClick:()=>r.set(!r.value),children:[a(v,{name:`chevron-right`,size:13,class:j.groupChevron}),a(`span`,{children:e})]}),a(`div`,{class:j.groupBody,hidden:p(r.asReadonly,e=>!e),children:n.map(c)})]})},f=o(C,{class:j.list,contentClass:j.listContent,chain:!e.floating,role:`listbox`,"aria-label":e[`aria-label`],onKeyDown:t=>{let n=r(),i=n.indexOf(E(f));if(t.key===`ArrowDown`)s(i+1);else if(t.key===`ArrowUp`)s(i-1);else if(t.key===`Home`)s(0);else if(t.key===`End`)s(n.length-1);else if(t.key===`Escape`)e.onClose();else return;t.preventDefault(),t.stopPropagation()},children:[u.map(c),[...l].map(([e,t])=>d(e,t))]});return queueMicrotask(()=>{let e=t===void 0?void 0:n.get(t);e&&!e.closest(`[hidden]`)?e.focus():s(0)}),x(document,`pointerdown`,t=>{let n=w(t);T(t,f)||n.closest?.(`[aria-haspopup="listbox"][aria-expanded="true"]`)||e.onClose()},{capture:!0}),f}function I(e){if(f(e))return e;let n=t(e),i=h(n?void 0:e);return n&&r(n,e=>i.set(e)),i.asReadonly}function L(e){let t;return x(document,`keydown`,t=>{t.key!==`Escape`||t.defaultPrevented||(t.preventDefault(),e.onClose(!0))},{capture:!0}),x(document,`pointerdown`,n=>{T(n,t)||T(n,e.anchor)||e.onClose()},{capture:!0}),a(R,{anchor:e.anchor,align:`end`,children:a(`div`,{class:j.menuPopover,role:`menu`,"aria-label":e[`aria-label`],ref:e=>{t=e,b(()=>e.querySelector(`button:not(:disabled)`)?.focus())},children:e.children})})}function R(e){let t=a(`div`,{class:j.floating,"attr:popover":`manual`,children:e.children}),n=-1,r=()=>{let r=e.anchor.getBoundingClientRect();r.width!==n&&(n=r.width,t.style.minWidth=`${r.width}px`);let i=t.offsetHeight,a=t.offsetWidth,o=window.innerHeight-r.bottom,s=o>=i+8||o>=r.top?r.bottom+2:r.top-i-2,c=e.align===`end`?r.right-a:r.left;t.style.left=`${Math.max(8,Math.min(c,window.innerWidth-8-a))}px`,t.style.top=`${Math.max(4,s)}px`};return queueMicrotask(()=>{t.isConnected&&(t.showPopover?.(),r(),(t.querySelector(`[aria-selected="true"]`)??t.querySelector(`[role=option]`))?.focus())}),x(window,`scroll`,e=>{T(e,t)||r()},{capture:!0}),x(window,`resize`,r),t}function z(){return(z=e((()=>{u(),n(),y(),g(),_(),S(),M(),m(),s()})))()}export{P as a,w as c,T as d,O as f,N as i,A as l,L as n,z as o,F as r,E as s,R as t,k as u};