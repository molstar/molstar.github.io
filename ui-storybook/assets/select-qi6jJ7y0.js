import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{_ as t,b as n,f as r,h as i,n as a,r as o,t as s}from"./jsx-runtime-DzTO5r4L.js";import{n as c,r as l}from"./registry-D35yV2Tb.js";import{i as u,n as d}from"./control-flow-2XcFB3wB.js";import{n as f,t as p}from"./map-COHPbqb4.js";import{n as m,t as h}from"./distinctUntilChanged-Bi0nDGSG.js";import{n as g,r as _}from"./observable-state-8hMFvtS9.js";import{n as v,t as y}from"./icon-Fyk1xIJy.js";import{n as b,t as x}from"./scroll-area-O9ZFxK58.js";function S(e){return(typeof e.composedPath==`function`?e.composedPath():[])[0]??e.target}function C(e,t){if(!t)return!1;let n=typeof e.composedPath==`function`?e.composedPath():[];return n.length?n.includes(t):t.contains(e.target)}function w(e){let t=e.getRootNode().activeElement??null;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t}function T(e){let t=e.getRootNode();return typeof ShadowRoot<`u`&&t instanceof ShadowRoot?t.host:e.closest?.(`.msp-root`)??e.parentElement?.closest(`.msp-root`)??void 0}function E(e,t){let n=T(e);if(!n||C(t,n))return!0;let r=n.ownerDocument,i=r.activeElement;return i&&i!==r.body&&i!==r.documentElement?!1:n.matches(`:hover`)}function D(e){return typeof HTMLElement>`u`||!(e instanceof HTMLElement)?!1:e.isContentEditable||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement?!0:e instanceof HTMLInputElement&&![`checkbox`,`radio`,`range`,`button`,`color`].includes(e.type)}function O(){return(O=e((()=>{})))()}var k;function A(){return(A=e((()=>{l(),k={button:`msp-select-button`,check:`msp-select-check`,chevron:`msp-select-chevron`,floating:`msp-select-floating`,group:`msp-select-group`,groupBody:`msp-select-groupBody`,groupChevron:`msp-select-groupChevron`,groupHead:`msp-select-groupHead`,label:`msp-select-label`,list:`msp-select-list`,"list-in":`msp-select-list-in`,listContent:`msp-select-listContent`,menuPopover:`msp-select-menuPopover`,option:`msp-select-option`,select:`msp-select-select`},c(`components/select/select.module.css`,`@layer msp.components {
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
`)})))()}function j(e){let t=_(!1),n=P(e.value),r;return o(`span`,{class:`${k.select} ${e.class??``}`,ref:e=>{r=e},children:[a(M,{label:n.pipe(f(t=>e.options.find(e=>e[0]===t)?.[1]??``)),open:t,size:e.size,title:e.title,"aria-label":e[`aria-label`]}),a(d,{when:t,children:()=>{let i=a(N,{options:e.options,value:n,onPick:n=>{t.set(!1),e.onChange?.(n)},onClose:()=>t.set(!1),floating:e.over});return e.over?a(I,{anchor:r,children:i}):i}})]})}function M(e){return o(`button`,{type:`button`,class:k.button,"data-size":e.size??`md`,"aria-haspopup":`listbox`,"aria-expanded":e.open,"aria-label":e[`aria-label`],title:e.title,onClick:()=>e.open.set(!e.open.value),children:[a(`span`,{class:k.label,children:e.label}),a(y,{name:`chevron-down`,size:14,class:k.chevron})]})}function N(e){let n;r(e.value,e=>{n=e});let i=new Map,s=()=>[...m.querySelectorAll(`[role="option"], [data-group-head]`)].filter(e=>!e.closest(`[hidden]`)),c=e=>{let t=s();t[Math.max(0,Math.min(t.length-1,e))]?.focus()},l=([t,n])=>{let r=o(`button`,{type:`button`,role:`option`,class:k.option,"aria-selected":e.value.pipe(f(e=>e===t),h()),onClick:()=>e.onPick(t),children:[a(`span`,{children:n}),a(y,{name:`check`,size:14,class:k.check})]});return i.set(t,r),r},u=new Map,d=[];for(let t of e.options)t[2]?u.has(t[2])?u.get(t[2]).push(t):u.set(t[2],[t]):d.push(t);let p=(e,t)=>{let r=_(t.some(e=>e[0]===n));return o(`div`,{class:k.group,role:`group`,"aria-label":e,children:[o(`button`,{type:`button`,class:k.groupHead,"data-group-head":``,"aria-expanded":r,onClick:()=>r.set(!r.value),children:[a(y,{name:`chevron-right`,size:13,class:k.groupChevron}),a(`span`,{children:e})]}),a(`div`,{class:k.groupBody,hidden:r.asReadonly.pipe(f(e=>!e)),children:t.map(l)})]})},m=o(x,{class:k.list,contentClass:k.listContent,chain:!e.floating,role:`listbox`,onKeyDown:t=>{let n=s(),r=n.indexOf(w(m));if(t.key===`ArrowDown`)c(r+1);else if(t.key===`ArrowUp`)c(r-1);else if(t.key===`Home`)c(0);else if(t.key===`End`)c(n.length-1);else if(t.key===`Escape`)e.onClose();else return;t.preventDefault(),t.stopPropagation()},children:[d.map(l),[...u].map(([e,t])=>p(e,t))]});queueMicrotask(()=>{let e=n===void 0?void 0:i.get(n);e&&!e.closest(`[hidden]`)?e.focus():c(0)});let g=t=>{let n=S(t);C(t,m)||n.closest?.(`[aria-haspopup="listbox"][aria-expanded="true"]`)||e.onClose()};return document.addEventListener(`pointerdown`,g,!0),t(()=>document.removeEventListener(`pointerdown`,g,!0)),m}function P(e){return n(e)||_(e).asReadonly}function F(e){let n,r=t=>{t.key!==`Escape`||t.defaultPrevented||(t.preventDefault(),e.onClose(!0))},i=t=>{C(t,n)||C(t,e.anchor)||e.onClose()};return document.addEventListener(`keydown`,r,!0),document.addEventListener(`pointerdown`,i,!0),t(()=>{document.removeEventListener(`keydown`,r,!0),document.removeEventListener(`pointerdown`,i,!0)}),a(I,{anchor:e.anchor,align:`end`,children:a(`div`,{class:k.menuPopover,role:`menu`,"aria-label":e[`aria-label`],ref:e=>{n=e,requestAnimationFrame(()=>e.querySelector(`button:not(:disabled)`)?.focus())},children:e.children})})}function I(e){let n=a(`div`,{class:k.floating,"attr:popover":`manual`,children:e.children}),r=-1,i=()=>{let t=e.anchor.getBoundingClientRect();t.width!==r&&(r=t.width,n.style.minWidth=`${t.width}px`);let i=n.offsetHeight,a=n.offsetWidth,o=window.innerHeight-t.bottom,s=o>=i+8||o>=t.top?t.bottom+2:t.top-i-2,c=e.align===`end`?t.right-a:t.left;n.style.left=`${Math.max(8,Math.min(c,window.innerWidth-8-a))}px`,n.style.top=`${Math.max(4,s)}px`},o=e=>{C(e,n)||i()};return queueMicrotask(()=>{n.isConnected&&(n.showPopover?.(),i(),(n.querySelector(`[aria-selected="true"]`)??n.querySelector(`[role=option]`))?.focus())}),window.addEventListener(`scroll`,o,!0),window.addEventListener(`resize`,i),t(()=>{window.removeEventListener(`scroll`,o,!0),window.removeEventListener(`resize`,i)}),n}function L(){return(L=e((()=>{m(),p(),u(),i(),g(),v(),b(),A(),s()})))()}export{M as a,S as c,C as d,E as f,j as i,O as l,F as n,L as o,N as r,w as s,I as t,D as u};