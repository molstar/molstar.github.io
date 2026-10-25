import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,D as n,_ as r,d as i,g as a,i as o,m as s,n as c,o as l,r as u,t as d,x as f,y as p}from"./jsx-runtime-DbCUSNU3.js";import{n as m,r as h}from"./registry-D35yV2Tb.js";import{b as g,u as _,x as v}from"./work-queue-DoxU-HjK.js";import{n as y,t as b}from"./observable-state-eRUcDuAs.js";import{a as x,d as S,l as C,r as w,u as T}from"./manager-CrN3WzFc.js";import{i as E,n as D,t as O}from"./control-flow-BQuMY04w.js";import{n as k,t as A}from"./icon-1ydjt1pd.js";import{c as ee,i as j,o as M,s as N}from"./scoped-Dk1HMUKj.js";import{n as P,t as F}from"./scroll-area-ukLK_GOt.js";import{a as te,l as I,r as L,s as R,t as z,u as ne}from"./focus-DbrNPVyh.js";import{_ as re,m as B,v as V}from"./params-form-D0fEgQzm.js";import{n as ie,t as ae}from"./keyed-selector-MU49iODI.js";var H;function U(){return(U=e((()=>{h(),H={content:`msp-virtual-list-content`,enter:`msp-virtual-list-enter`,glide:`msp-virtual-list-glide`,list:`msp-virtual-list-list`,row:`msp-virtual-list-row`,window:`msp-virtual-list-window`},m(`components/virtual-list/virtual-list.module.css`,`@layer msp.components {
.msp-virtual-list-list {
  flex: 1 1 0;
}

.msp-virtual-list-content {
  contain: strict;
  background-image: linear-gradient(to bottom,
    transparent 38%,
    color-mix(in srgb, var(--msp-color-text) 7%, transparent) 38%,
    color-mix(in srgb, var(--msp-color-text) 7%, transparent) 62%,
    transparent 62%);
  background-size: calc(100% - 2 * var(--msp-space-6)) var(--msp-virtual-row, 26px);
  background-repeat: repeat-y;
  background-position: var(--msp-space-6) 0;
  width: 100%;
  position: relative;
}

.msp-virtual-list-content[data-revealing] {
  background-image: none;
}

.msp-virtual-list-window {
  will-change: transform;
  background-color: var(--msp-surface, var(--msp-color-panel));
  position: absolute;
  inset: 0 0 auto;
}

.msp-virtual-list-row {
  contain: layout style;
  background-color: var(--msp-surface, var(--msp-color-panel));
  position: absolute;
  inset: 0 0 auto;
}

.msp-virtual-list-glide {
  z-index: 1;
  transition: transform var(--msp-motion-base) var(--msp-ease-reveal);
}

.msp-virtual-list-enter {
  animation: msp-reveal-fade var(--msp-motion-base) var(--msp-ease-reveal);
}

.msp-virtual-list-list[data-edge] .msp-virtual-list-window, .msp-virtual-list-list[data-edge] .msp-virtual-list-row {
  right: var(--msp-scroll-edge, var(--msp-space-2));
}
}
`)})))()}function W(e,t,n,r){let i=Math.ceil(2*e/t);return Math.max(r,Math.min(i,3*Math.max(1,n)))}function G(e,t,n){let r=t.length-e.length;if(r<=0||e.length===0)return;let i=0;for(;i<e.length&&n(e[i])===n(t[i]);)i++;for(let a=i;a<e.length;a++)if(n(e[a])!==n(t[a+r]))return;return{at:i,count:r}}function K(){return(K=e((()=>{})))()}function q(e){let n=e.overscan??8,i=p(0),a=y(0),o=y(e.rowHeight),l,u=()=>{if(!l)return;let e=l.scrollTop,t=l.clientHeight;i.offer(e),t!==a.value&&a.set(t)},d=e=>e||800,f=y({first:0,last:0}),m=[],h=0,v=-1/0,b=()=>{v=performance.now()},x,S=e=>{let t=m.length,r=o.value,s=i.value,c=Math.min(t,Math.floor(s/r)),l=Math.min(t,Math.ceil((s+d(a.value))/r)),u=l-c,p=s>=h,g=performance.now()-v<200?Math.abs(s-h):0;h=s;let{first:_,last:y}=f.value,b=W(g,r,u,Math.max(n,Math.ceil(u/2))),x=_<=Math.max(0,c-(p?n:b))&&y>=Math.min(t,l+(p?b:n))&&y<=t,S,C;if(e)S=c-u,C=l+u;else if(x)return;else if(l<=_||c>=y){let e=W(g,r,u,2);S=c-(p?2:e),C=l+(p?e:2)}else{let e=W(g,r,u,Math.max(n,u));S=c-(p?n:e),C=l+(p?e:n)}S=Math.max(0,S),C=Math.min(t,C),(S!==_||C!==y)&&f.set({first:S,last:C})},C=()=>{D(),S(!1),x!==void 0&&clearTimeout(x),x=setTimeout(()=>{x=void 0,S(!0)},120)},w=new Set,T=[],E;function D(){if(E!==void 0){clearTimeout(E),E=void 0,w.clear();for(let e of T)e.removeAttribute(`data-reveal`);T.length=0}}let k=t=>e.itemKey(t),A=[],ee=t=>{if(!e.reveal||t===A)return;let n=G(A,t,k);if(A=t,n){D();for(let e=n.at;e<n.at+n.count;e++)w.add(k(t[e]));E=setTimeout(D,240)}};t(()=>{x!==void 0&&clearTimeout(x),D()}),s(g([e.items,a.asReadonly,o.asReadonly],(e,t,n)=>({list:e,h:t,rh:n})),({list:e})=>{m=e,S(!0)}),s(i,C);let j=g([e.items,f.asReadonly,o.asReadonly],(e,t,n)=>(ee(e),{items:e,first:Math.min(t.first,e.length),last:Math.min(t.last,e.length),rh:n}),(e,t)=>e.items===t.items&&e.first===t.first&&e.last===t.last&&e.rh===t.rh),P=g(j,e=>e.items.slice(e.first,e.last));return e.ref?.({scrollToIndex(e){let t=o.value,n=d(a.value),s=e*t,c=i.value;s<c?c=s:s+t>c+n&&(c=s+t-n),c!==i.value&&(h=c,l&&(l.scrollTop=c),i.offer(c)),_(),r()}}),c(F,{class:`${H.list} ${e.class??``}`,contentClass:H.content,edge:e.edge,fade:!1,viewportRef:e=>{l=e,N(e,`scroll`,u,{passive:!0}),N(e,`wheel`,b,{passive:!0}),N(e,`touchmove`,b,{passive:!0}),M(e,u),queueMicrotask(u)},role:e.role,"aria-label":e[`aria-label`],ref:t=>e.contentRef?.(t),style:{height:g([e.items,o.asReadonly],(e,t)=>`${e.length*t}px`),"--msp-virtual-row":g(o.asReadonly,e=>`${e}px`)},children:c(`div`,{class:H.window,style:{transform:g(j,e=>`translateY(${e.first*e.rh}px)`)},ref:e=>{M(e,t=>{let n=t[t.length-1].contentRect.height,r=e.childElementCount;if(r<=0||n<=0||E!==void 0)return;let i=n/r;Math.abs(i-o.value)>.5&&o.set(i)})},children:c(O,{each:P,by:e.itemKey,children:t=>{let n=e.children(t);return w.size&&n instanceof Element&&w.has(k(t))&&(n.setAttribute(`data-reveal`,``),T.push(n)),n}})})})}function J(e,t,n){let r=[],i=(e,a)=>{for(let o=0;o<e.length;o++){let s=e[o];r.push({node:s,depth:a,posinset:o+1,setsize:e.length});let c=t(s);c?.length&&n(s)&&i(c,a+1)}};return i(e,0),r}function oe(e,t){let n=new Map;return r=>{let i=new Map,a=r.map(r=>{let a=e(r),o=n.get(a),s=o!==void 0&&t(o,r)?o:r;return i.set(a,s),s});return n=i,a}}function Y(){return(Y=e((()=>{E(),f(),b(),v(),j(),P(),U(),K(),d()})))()}var X;function Z(){return(Z=e((()=>{h(),X={ask:`msp-command-menu-ask`,askIcon:`msp-command-menu-askIcon`,askKeys:`msp-command-menu-askKeys`,askLabel:`msp-command-menu-askLabel`,askText:`msp-command-menu-askText`,before:`msp-command-menu-before`,caption:`msp-command-menu-caption`,command:`msp-command-menu-command`,crumb:`msp-command-menu-crumb`,empty:`msp-command-menu-empty`,error:`msp-command-menu-error`,footer:`msp-command-menu-footer`,form:`msp-command-menu-form`,head:`msp-command-menu-head`,headIcon:`msp-command-menu-headIcon`,hint:`msp-command-menu-hint`,input:`msp-command-menu-input`,keys:`msp-command-menu-keys`,list:`msp-command-menu-list`,listContent:`msp-command-menu-listContent`,menu:`msp-command-menu-menu`,"menu-fade":`msp-command-menu-menu-fade`,"menu-in":`msp-command-menu-menu-in`,message:`msp-command-menu-message`,more:`msp-command-menu-more`,proposed:`msp-command-menu-proposed`,rest:`msp-command-menu-rest`,row:`msp-command-menu-row`,rowChevron:`msp-command-menu-rowChevron`,rowIcon:`msp-command-menu-rowIcon`,rowMeta:`msp-command-menu-rowMeta`,rowTitle:`msp-command-menu-rowTitle`,run:`msp-command-menu-run`,scrim:`msp-command-menu-scrim`,sentence:`msp-command-menu-sentence`,shared:`msp-command-menu-shared`,sharedOption:`msp-command-menu-sharedOption`,sharedTitle:`msp-command-menu-sharedTitle`,spacer:`msp-command-menu-spacer`,srOnly:`msp-command-menu-srOnly`,tail:`msp-command-menu-tail`,token:`msp-command-menu-token`,value:`msp-command-menu-value`,view:`msp-command-menu-view`},m(`views/command-menu/command-menu.module.css`,`@layer msp.components {
.msp-command-menu-scrim {
  z-index: var(--msp-z-dialog);
  padding: 12vh var(--msp-space-4) var(--msp-space-4);
  background: color-mix(in oklab, var(--msp-color-bg), transparent 75%);
  animation: msp-command-menu-menu-fade var(--msp-motion-fast) var(--msp-ease);
  justify-content: center;
  align-items: flex-start;
  display: flex;
  position: absolute;
  inset: 0;
}

@keyframes msp-command-menu-menu-fade {
  from {
    opacity: 0;
  }
}

.msp-command-menu-menu {
  border-radius: var(--msp-radius-lg);
  background: var(--msp-color-panel);
  width: min(560px, 100%);
  max-height: min(480px, 76vh);
  box-shadow: var(--msp-glass-shadow),
    0 12px 32px #0000001f;
  font-size: var(--msp-font-size-sm);
  animation: msp-command-menu-menu-in var(--msp-motion-base) var(--msp-ease);
  flex-direction: column;
  display: flex;
  overflow: hidden;
}

@keyframes msp-command-menu-menu-in {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
}

.msp-command-menu-head {
  align-items: center;
  gap: var(--msp-space-3);
  height: 40px;
  padding: 0 var(--msp-space-4);
  border-bottom: 1px solid var(--msp-glass-edge);
  flex: none;
  display: flex;
}

.msp-command-menu-headIcon {
  color: var(--msp-color-text-subtle);
  flex: none;
}

.msp-command-menu-input {
  min-width: 0;
  height: 100%;
  color: var(--msp-color-text);
  font: inherit;
  font-size: var(--msp-font-size-md);
  background: none;
  border: 0;
  outline: none;
  flex: 1;

  &::placeholder {
    color: var(--msp-color-text-subtle);
  }
}

.msp-command-menu-command {
  align-items: center;
  gap: var(--msp-space-2);
  height: 26px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-accent), transparent 85%);
  color: var(--msp-color-accent);
  font-size: var(--msp-font-size-sm);
  flex: none;
  font-weight: 600;
  display: flex;
}

.msp-command-menu-message, .msp-command-menu-error {
  padding: var(--msp-space-2) var(--msp-space-4);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  margin: 0;
}

.msp-command-menu-error {
  color: var(--msp-color-danger);
}

.msp-command-menu-hint {
  color: var(--msp-color-text-muted);
}

.msp-command-menu-list {
  flex: 1;
  min-height: 0;

  &:has(.msp-command-menu-listContent:empty) {
    display: none;
  }
}

.msp-command-menu-listContent {
  padding: var(--msp-space-2);
}

.msp-command-menu-form {
  flex: auto;
  min-height: 0;
  overflow-y: auto;
}

.msp-command-menu-empty {
  padding: var(--msp-space-5) var(--msp-space-4);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-sm);
  text-align: center;
  margin: 0;
}

.msp-command-menu-rest {
  pointer-events: none;
}

.msp-command-menu-caption {
  padding: var(--msp-space-3) var(--msp-space-3) var(--msp-space-1);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-command-menu-row {
  align-items: center;
  gap: var(--msp-space-3);
  height: 28px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text);
  cursor: default;
  grid-template-columns: 16px minmax(0, 1fr) auto auto;
  grid-auto-flow: column;
  display: grid;

  &[aria-selected="true"] {
    background: var(--msp-color-hover);
  }

  &[aria-selected="true"] .msp-command-menu-rowMeta {
    color: var(--msp-color-text-muted);
  }

  &[aria-disabled="true"] {
    color: var(--msp-color-text-subtle);
  }
}

.msp-command-menu-rowIcon {
  color: var(--msp-color-text-muted);
  place-items: center;
  display: grid;
}

.msp-command-menu-rowTitle {
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;

  & mark {
    color: var(--msp-color-accent-strong);
    background: none;
    font-weight: 600;
  }
}

.msp-command-menu-tail {
  margin-left: var(--msp-space-2);
  color: var(--msp-color-text-muted);
}

.msp-command-menu-rowMeta {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-command-menu-sentence {
  align-items: center;
  gap: var(--msp-space-2);
  padding: var(--msp-space-3) var(--msp-space-4);
  border-bottom: 1px solid var(--msp-glass-edge);
  flex-wrap: wrap;
  flex: none;
  display: flex;
}

.msp-command-menu-token {
  align-items: center;
  gap: var(--msp-space-2);
  display: inline-flex;
}

.msp-command-menu-before {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-sm);
}

.msp-command-menu-value {
  height: 26px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);

  &:hover {
    background: var(--msp-color-hover);
  }

  &[data-empty] {
    color: var(--msp-color-text-subtle);
  }

  &[data-missing] {
    box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-danger), transparent 50%);
  }

  &[data-active] {
    box-shadow: inset 0 0 0 1.5px var(--msp-color-accent);
  }
}

.msp-command-menu-spacer {
  flex: 1;
}

.msp-command-menu-view {
  align-items: center;
  gap: var(--msp-space-1);
  height: 28px;
  padding: 0 var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  white-space: nowrap;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-command-menu-run {
  align-items: center;
  gap: var(--msp-space-2);
  height: 28px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-accent);
  color: var(--msp-color-on-accent);
  font-size: var(--msp-font-size-sm);
  font-weight: 600;
  display: flex;

  & kbd {
    box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-on-accent), transparent 50%);
    color: inherit;
    background: none;
  }
}

.msp-command-menu-more {
  padding: var(--msp-space-2) var(--msp-space-4);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
}

.msp-command-menu-footer {
  gap: var(--msp-space-2) var(--msp-space-4);
  padding: var(--msp-space-2) var(--msp-space-4);
  border-top: 1px solid var(--msp-glass-edge);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  flex-wrap: wrap;
  flex: none;
  display: flex;

  & > span {
    align-items: center;
    gap: var(--msp-space-1);
    display: inline-flex;
  }
}

.msp-command-menu-footer kbd, .msp-command-menu-keys, .msp-command-menu-run kbd {
  min-width: 18px;
  height: 18px;
  padding: 0 var(--msp-space-1);
  border-radius: var(--msp-radius-sm);
  background: var(--msp-color-bg);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge),
    inset 0 -1px 0 var(--msp-glass-edge);
  color: var(--msp-color-text-muted);
  font: inherit;
  font-family: var(--msp-font-mono);
  place-items: center;
  font-size: 10px;
  line-height: 1;
  display: inline-grid;
}

.msp-command-menu-crumb {
  align-items: center;
  gap: var(--msp-space-1);
  height: 24px;
  padding: 0 var(--msp-space-1) 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  flex: none;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-command-menu-rowChevron {
  color: var(--msp-color-text-subtle);
}

.msp-command-menu-ask {
  align-items: center;
  gap: var(--msp-space-3);
  min-height: 32px;
  margin: 0 var(--msp-space-2) var(--msp-space-2);
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  flex: none;
  grid-template-columns: 16px auto minmax(0, 1fr) auto;
  display: grid;

  &:hover, &[data-default] {
    background: var(--msp-color-hover);
  }

  &[data-setup] {
    color: var(--msp-color-text-muted);
    grid-template-columns: 16px minmax(0, 1fr);

    & .msp-command-menu-askIcon {
      color: var(--msp-color-text-subtle);
    }
  }
}

.msp-command-menu-askIcon {
  color: var(--msp-color-accent);
  justify-self: center;
}

.msp-command-menu-askLabel {
  color: var(--msp-color-text);
  font-weight: 500;
}

.msp-command-menu-askText {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  color: var(--msp-color-text-muted);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-command-menu-askKeys {
  color: var(--msp-color-text-subtle);
  font-family: inherit;
  font-size: var(--msp-font-size-xs);
  flex: none;
}

.msp-command-menu-proposed {
  align-items: center;
  gap: var(--msp-space-2);
  margin: var(--msp-space-2) var(--msp-space-2) 0;
  padding: var(--msp-space-1) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-accent), transparent 90%);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
  display: flex;
}

.msp-command-menu-srOnly {
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
}

.msp-command-menu-shared {
  align-items: center;
  gap: var(--msp-space-1);
  padding: var(--msp-space-2) var(--msp-space-4);
  border-bottom: 1px solid var(--msp-glass-edge);
  font-size: var(--msp-font-size-xs);
  flex: none;
  display: flex;
}

.msp-command-menu-sharedTitle {
  margin-right: var(--msp-space-2);
  color: var(--msp-color-text-subtle);
}

.msp-command-menu-sharedOption {
  height: 22px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[aria-pressed="true"] {
    background: var(--msp-color-hover);
    color: var(--msp-color-accent);
  }
}
}
`)})))()}function se(e,t,n,r){let i=e.assistant,a=n.trim();return i.ready()?{id:`assistant-ask`,label:`Ask AI assistant`,detail:`“${a}”`,icon:`sparkles`,run:()=>{let e=i.propose(a);if(e)return r(a),t.open(e.command,e.tail).kind===`form`;i.ask(a)}}:{id:`assistant-setup`,label:`Set up the assistant to ask`,detail:`“${a}”`,icon:`sparkles`,run:()=>i.setup()}}function Q(e){let{manager:n}=e;t(n.want());let r=y(void 0);a(n.active,e=>{e||r.set(void 0)}),a(n.outcomes,t=>{t.kind===`done`&&e.onClose()}),t(()=>n.close());let i=R(),o;return t(()=>i(o)),c(`div`,{class:X.scrim,"data-keeps-card":``,onPointerDown:t=>{t.target===t.currentTarget&&e.onClose()},children:c(`div`,{class:X.menu,role:`dialog`,"aria-modal":`true`,"aria-label":`Commands`,ref:e=>{o=e},onKeyDown:t=>{I(t,t.currentTarget),!(t.key!==`Escape`||t.defaultPrevented)&&(t.preventDefault(),t.stopPropagation(),e.onClose())},children:c(D,{when:n.active,fallback:()=>c(ce,{...e,onPropose:e=>r.set(e)}),children:t=>c(ye,{manager:n,invocation:t,proposed:r.asReadonly,onClose:e.onClose,...e.direct?{direct:!0}:{},...e.forms?.[t.command.id]?{form:e.forms[t.command.id]}:{}})})})})}function ce(e){let{manager:r}=e,i=y(e.initial??``),s=p(i.value),l=()=>{s.latest!==s.value&&_()},d=y(e.group),f=y(0),m=y(void 0),h=ne(`msp-command-list`),v=e=>`${h}-${e}`,b=[...e.prefixes??[],fe(e,e=>K(e))],x=e=>b.find(t=>e.startsWith(t.char)),C=oe(e=>`${d.value??``}|${Se(e)}`,Ce),T,E=g([s,d.asReadonly,r.commands,r.groups],(e,t,n,r)=>{if(T&&T.t===e&&T.g===t&&T.c===n&&T.gs===r)return T.rows;let i=C(k(e,t));return T?(T.t=e,T.g=t,T.c=n,T.gs=r,T.rows=i):T={t:e,g:t,c:n,gs:r,rows:i},i});function k(e,t){let n=[],i=0,a=e=>{e.kind!==`caption`&&(e.index=i++),n.push(e)},o=x(e);if(o){for(let t of o.items(e.slice(o.char.length).trimStart()))a({kind:`item`,item:t,index:0});return n}if(!e.trim()){let{groups:e,commands:i}=r.children(t);if(t===void 0){let t=r.query(``);if(t.recent.length){a({kind:`caption`,label:`Recent`});for(let e of t.recent)a({kind:`match`,match:e,index:0})}e.length&&a({kind:`caption`,label:`Browse`})}for(let t of e)a({kind:`group`,group:t,index:0});if(t!==void 0){let e=new Set(i.map(e=>e.command.category)),t;for(let n of i)e.size>1&&n.command.category!==t&&(t=n.command.category,a({kind:`caption`,label:t})),a({kind:`match`,match:n,index:0});return n}let o=new Set(r.query(``).recent.map(e=>e.command)),s=new Map;for(let e of i){if(o.has(e.command))continue;let t=s.get(e.command.category);t?t.push(e):s.set(e.command.category,[e])}for(let[e,t]of s){a({kind:`caption`,label:e});for(let e of t)a({kind:`match`,match:e,index:0})}return n}let s=r.query(e),c=e=>t===void 0||r.inGroup(e.command,t);s.direct&&c(s.direct)&&a({kind:`match`,match:s.direct,tail:s.direct.tail,index:0});let l=r.groups.value.filter(n=>(t===void 0||r.groupPath(n.id).some(e=>e.id===t))&&n.id!==t&&(w(n.title,e)??-1)>=0);for(let e of l)a({kind:`group`,group:e,index:0});for(let e of s.matches)e.command!==s.direct?.command&&c(e)&&a({kind:`match`,match:e,index:0});return n}let j=[],M=()=>j.filter(e=>e.kind!==`caption`),P=()=>{e.assistant&&(e.assistant.ready()?i.value.trim()&&!x(i.value)&&!se(e,r,i.value,e.onPropose).run()&&!r.active.value&&e.onClose():(e.assistant.setup(),e.onClose()))},te=g([s,E],(e,t)=>!!e.trim()&&!x(e)&&!t.some(e=>e.kind!==`caption`));a(E,e=>{j=e,f.value>=M().length&&f.set(0)});let I=y({n:$}),L=g([E,I.asReadonly],(e,t)=>e.length<=(t.of===e?t.n:$)?e:e.slice(0,t.of===e?t.n:$),(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n])),R=g([E,L],(e,t)=>(e.length-t.length)*we),z=e=>{let t=I.value,n=t.of===j?t.n:$;e>n&&n<j.length&&I.set({of:j,n:Math.max(e,n+$)})};a(f.asReadonly,e=>{let t=j.findIndex(t=>t.kind!==`caption`&&t.index===e);t>=0&&z(t+1)});let ae=ie(f.asReadonly);a(g([f.asReadonly,E],(e,t)=>{let n=t.find(t=>t.kind===`match`&&t.index===e);return n?.kind===`match`&&!n.match.preset&&!n.tail&&!n.match.blocked?n.match.command.id:void 0}),e=>r.browse(e)),t(()=>r.browse(void 0));let H=g([d.asReadonly,r.groups],e=>[...r.groupPath(e)].reverse().find(e=>e.shared)),U=g([f.asReadonly,E],(e,t)=>t.some(e=>e.kind!==`caption`)?v(e):void 0),W=y(``),G=ee(()=>{if(!s.value.trim())return W.set(``);let t=0;for(let e of E.value)e.kind!==`caption`&&t++;if(t)return W.set(t===1?`1 result`:`${t} results`);W.set(e.assistant?`No command matches: ask AI assistant.`:`Nothing matches.`)});a(E,()=>G.start(400));let K=e=>{i.set(e),s.offer(e),l(),Q.value=e,f.set(0),m.set(void 0)},q=e=>{d.set(e),K(``)},J=t=>{if(l(),t.kind===`group`)return q(t.group.id);if(t.kind===`item`){let n=t.item.run();if(n&&typeof n==`object`)return K(n.text);!n&&!r.active.value&&e.onClose();return}if(t.match.blocked)return m.set(t.match.blocked);let n=r.open(t.match.command.id,t.tail,t.match.preset?.id);n.kind===`blocked`?m.set(n.reason):n.kind===`ran`&&e.onClose()},Y=()=>{let e=r.groupPath(d.value);return e.length?(q(e[e.length-2]?.id),!0):!1},Z=g([i.asReadonly,d.asReadonly],(e,t)=>{let n=x(e);return n?n.placeholder??n.title:t===void 0?`Search commands, or type ? for help`:`Search in ${r.groupPath(t).pop()?.title}`}),Q=c(`input`,{class:X.input,type:`text`,role:`combobox`,"aria-expanded":`true`,"aria-controls":h,"aria-autocomplete":`list`,"aria-label":`Command`,spellcheck:!1,onInput:e=>{i.set(e.currentTarget.value),s.offer(e.currentTarget.value),f.set(0),m.set(void 0)},onKeyDown:t=>{l();let n=M().length,r=!t.currentTarget.value;if(t.key===`ArrowDown`||t.key===`ArrowUp`)t.preventDefault(),n&&f.set((f.value+(t.key===`ArrowDown`?1:n-1))%n);else if(t.key===`Enter`){t.preventDefault();let e=M()[f.value];t.metaKey||t.ctrlKey?P():e?J(e):P()}else if(t.key===`ArrowRight`&&r){let e=M()[f.value];e?.kind===`group`&&(t.preventDefault(),q(e.group.id))}else(t.key===`Backspace`||t.key===`ArrowLeft`)&&r?Y()&&t.preventDefault():t.key===`Escape`&&(t.preventDefault(),t.stopPropagation(),e.onClose())}});queueMicrotask(()=>Q.focus()),n([U,Z,i.asReadonly],()=>{B(Q,`aria-activedescendant`,U.value),B(Q,`placeholder`,Z.value),pe(Q,i.value)});let ce=document.createTextNode(``);return n([W.asReadonly],()=>V(ce,W.value)),u(o,{children:[u(`div`,{class:X.head,children:[c(A,{name:`search`,size:15,class:X.headIcon}),c(O,{each:g(d.asReadonly,e=>r.groupPath(e)),children:e=>u(`button`,{type:`button`,class:X.crumb,onClick:()=>q(e.id),children:[e.title,c(A,{name:`chevron-right`,size:12})]})}),Q]}),c(D,{when:H,children:e=>c(ue,{manager:r,group:e})}),c(D,{when:m,children:e=>c(`p`,{class:X.message,role:`alert`,children:e})}),c(`span`,{class:X.srOnly,role:`status`,"aria-live":`polite`,children:ce}),u(F,{class:X.list,contentClass:X.listContent,id:h,role:`listbox`,"aria-label":`Commands`,viewportRef:e=>{N(e,`scroll`,()=>z(Math.ceil((e.scrollTop+2*e.clientHeight)/we)),{passive:!0})},children:[c(O,{each:L,fallback:()=>c(`p`,{class:X.empty,children:e.assistant?`No command matches: ask AI assistant.`:`Nothing matches.`}),children:e=>{if(e.kind===`caption`)return c(`div`,{class:X.caption,role:`presentation`,children:e.label});let t=e.index,n={id:v(t),index:t,highlight:f.asReadonly,selected:ae.key(t),onPick:()=>J(e),onHover:()=>f.set(t)};return e.kind===`group`?c(he,{...n,manager:r,group:e.group}):e.kind===`item`?c(ge,{...n,item:e.item}):c(_e,{...n,manager:r,row:e,path:de(r,e.match.command.group,d.value),inGroup:d.value!==void 0,query:s})}}),c(D,{when:g(R,e=>e>0),children:()=>{let e=c(`div`,{class:X.rest,role:`presentation`});return n([R],()=>re(e,`height`,`${R.value}px`)),e}})]}),e.assistant?c(le,{ready:e.assistant.ready(),text:g(i.asReadonly,e=>x(e)?``:e.trim()),unmatched:te,onAsk:()=>{e.assistant?.ready()?i.value.trim()?P():Q.focus():(e.assistant?.setup(),e.onClose())}}):null,c(xe,{hints:[[`↑↓`,`move`],[`↵`,`run`],...e.assistant?.ready()?[[S()?`⌘↵`:`Ctrl+↵`,`ask`]]:[],[`→`,`open group`],[`?`,`help`],[`esc`,`close`]]})]})}function le(e){if(!e.ready)return u(`button`,{type:`button`,class:X.ask,"data-setup":``,onClick:()=>e.onAsk(),children:[c(A,{name:`sparkles`,size:15,class:X.askIcon}),c(`span`,{class:X.askText,children:`Set up an AI assistant`})]});let t=document.createTextNode(``),r=document.createTextNode(``),i=u(`button`,{type:`button`,class:X.ask,onClick:()=>e.onAsk(),children:[c(A,{name:`sparkles`,size:15,class:X.askIcon}),c(`span`,{class:X.askLabel,children:`Ask AI assistant`}),c(`span`,{class:X.askText,children:t}),c(`kbd`,{class:X.askKeys,children:r})]});return n([e.text,e.unmatched],()=>{let n=e.text.value,a=e.unmatched.value;B(i,`data-default`,a),V(t,n?`“${n}”`:`describe what you want, in your words`),V(r,a?`↵`:S()?`⌘↵`:`Ctrl+↵`)}),i}function ue(e){let{manager:t,group:r}=e,i=r.shared,a=g(t.shared,()=>t.sharedValue(r.id)),o=[],s=u(`div`,{class:X.shared,role:`group`,"aria-label":`${r.title}: ${i.title}`,children:[c(`span`,{class:X.sharedTitle,children:i.title}),i.options.map(([e,n])=>c(`button`,{type:`button`,class:X.sharedOption,ref:e=>o.push(e),onClick:()=>t.setShared(r.id,e),children:n}))]});return n([a],()=>{for(let e=0;e<o.length;e++)B(o[e],`aria-pressed`,a.value===i.options[e][0]?`true`:`false`)}),s}function de(e,t,n){let r=e.groupPath(t),i=n===void 0?-1:r.findIndex(e=>e.id===n);return r.slice(i+1).map(e=>e.title)}function fe(e,t){return{char:`?`,title:`Help`,placeholder:`Prefixes and shortcuts`,items:n=>{let r=n.toLowerCase(),i=(e.prefixes??[]).map(e=>({id:`prefix:${e.char}`,label:`${e.char}  ${e.title}`,detail:e.placeholder,icon:`command`,run:()=>(t(e.char),!0)})),a=e.manager.commands.value.flatMap(t=>{let n=e.manager.shortcut(t);return n?[{c:t,chord:n}]:[]}).map(({c:t,chord:n})=>({id:`keys:${t.id}`,label:t.title,detail:C(n),icon:t.icon??`keyboard`,run:()=>{e.manager.open(t.id)}}));return[...e.manager.get(`help.show`)?[{id:`help:card`,label:`Keyboard and mouse`,detail:`The Help card`,icon:`circle-help`,run:()=>{e.manager.open(`help.show`)}}]:[],...i,...a].filter(e=>!r||e.label.toLowerCase().includes(r))}}}function pe(e,t){e.value!==t&&(e.value=t)}function me(e,t,n){return B(e,`aria-selected`,String(t)),t&&!n&&queueMicrotask(()=>e.scrollIntoView?.({block:`nearest`})),t}function he(e){let t=e.manager.groupPath(e.group.parent).map(e=>e.title),r=u(`div`,{id:e.id,class:X.row,role:`option`,onClick:()=>e.onPick(),onPointerMove:()=>e.onHover(),children:[c(`span`,{class:X.rowIcon,children:c(A,{name:e.group.icon??`list-tree`,size:15})}),c(`span`,{class:X.rowTitle,children:e.group.title}),c(`span`,{class:X.rowMeta,children:t.join(` › `)}),c(A,{name:`chevron-right`,size:14,class:X.rowChevron})]}),i=!1;return n([e.selected],()=>{i=me(r,e.highlight.value===e.index,i)}),r}function ge(e){let{item:t}=e,r=u(`div`,{id:e.id,class:X.row,role:`option`,onClick:()=>e.onPick(),onPointerMove:()=>e.onHover(),children:[c(`span`,{class:X.rowIcon,children:t.icon?c(A,{name:t.icon,size:15}):null}),c(`span`,{class:X.rowTitle,children:t.label}),c(`span`,{class:X.rowMeta,children:t.detail})]}),i=!1;return n([e.selected],()=>{i=me(r,e.highlight.value===e.index,i)}),r}function _e(e){let{manager:t,query:r}=e,{match:a,tail:o}=e.row,s=a.command,l=a.preset?`${s.title.replace(/…$/,``)} ${a.preset.title}`:s.title,d=t.shortcut(s),f=a.blocked??(e.path.length?e.path.join(` › `):e.inGroup?``:s.category),p=document.createElement(`span`),m=document.createTextNode(f),h=u(`div`,{id:e.id,class:X.row,role:`option`,"aria-disabled":a.blocked?`true`:void 0,onClick:()=>e.onPick(),onPointerMove:()=>e.onHover(),children:[c(`span`,{class:X.rowIcon,children:s.icon?c(A,{name:s.icon,size:15}):null}),u(`span`,{class:X.rowTitle,children:[p,o?c(`span`,{class:X.tail,children:o}):null]}),c(`span`,{class:X.rowMeta,children:m}),d?c(`kbd`,{class:X.keys,children:C(d)}):null]}),g=!1,_=[e.selected];s.count&&!a.preset&&_.push(t.browsing),n(_,()=>{if(g=me(h,e.highlight.value===e.index,g),s.count&&!a.preset){let e=t.browsing.value;V(m,(e?.id===s.id?e.count:void 0)??f)}});let v,y=e=>{if(e===v)return;v=e;let t=ve(l,e);typeof t==`string`?p.textContent=t:p.replaceChildren(i(t))};return o?y(``):n([r],()=>y(r.value)),h}function ve(e,t){let n=new Set(x(e,t));if(!n.size)return e;let r=[],i=``,a=!1,s=()=>{i&&=(r.push(a?c(`mark`,{children:i}):i),``)};for(let t=0;t<e.length;t++){let r=n.has(t);r!==a&&(s(),a=r),i+=e[t]}return s(),c(o,{children:r})}function ye(e){let{manager:t,invocation:r}=e,i,a=t=>t.field!==void 0&&!!e.form?.fields?.includes(t.field),s=r.state,l=r.command,d=ne(`msp-command-options`),f=g(s,e=>e.pick),p=e=>`${d}-${e}`,m,h=()=>m?L(m).filter(e=>e.tabIndex>=0):[],_=e=>{if(!m)return!1;let t=s.value;if(t.canAssist||t.text.trim()&&t.completions.length||t.pick>=0)return!1;let n=t.fields.findIndex(e=>e.id===t.field);if(e?n>0:n<t.fields.length-1)return!1;let r=h(),i=e?r[r.length-1]:r[0];return i?(i.focus(),!0):!1},v=e=>{if(e.key!==`Tab`||e.defaultPrevented||!m||e.altKey||e.metaKey||e.ctrlKey)return;let t=h();if(z(m.ownerDocument)!==(e.shiftKey?t[0]:t[t.length-1]))return;e.preventDefault();let n=s.value.fields,i=e.shiftKey?n[n.length-1]:n[0];i&&r.focus(i.id),y.focus()},y=c(`input`,{class:X.input,type:`text`,role:`combobox`,"aria-controls":d,"aria-autocomplete":`list`,spellcheck:!1,onInput:e=>r.type(e.currentTarget.value),onKeyDown:e=>{i?.(e)?e.preventDefault():e.key===`Enter`&&e.altKey&&l.view?(e.preventDefault(),S()):e.key===`Enter`?(e.preventDefault(),r.enter()):e.key===`Tab`?(e.preventDefault(),_(e.shiftKey)||r.tab(e.shiftKey?-1:1)):e.key===`ArrowDown`||e.key===`ArrowUp`?(e.preventDefault(),r.move(e.key===`ArrowDown`?1:-1)):e.key===`Backspace`&&!e.currentTarget.value?(e.preventDefault(),r.back()||x()):e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),x())}});queueMicrotask(()=>y.focus());let b=document.createTextNode(``);n([s],()=>{let e=s.value;V(b,e.action);let t=e.fields.find(t=>t.id===e.field),n=!a(e)&&e.completions.length>0;B(y,`aria-expanded`,String(n)),B(y,`aria-activedescendant`,n&&e.pick>=0&&e.pick<e.completions.length?p(e.pick):void 0),B(y,`aria-label`,t?.label??l.title),B(y,`placeholder`,t?t.label:`Enter to run`),pe(y,e.text)});let x=()=>{t.close(),e.direct&&e.onClose()},S=()=>{let n=l.view;n&&(t.close(),e.onClose(),n.open(t.context.value))};return u(o,{children:[c(D,{when:e.proposed,children:e=>u(`p`,{class:X.proposed,children:[c(A,{name:`sparkles`,size:13,class:X.askIcon}),`Proposed by the assistant from “`,e,`”: check it, then Enter to run`]})}),u(`div`,{class:X.head,children:[u(`span`,{class:X.command,children:[l.icon?c(A,{name:l.icon,size:15}):null,l.title.replace(/…$/,``)]}),y]}),u(`div`,{class:X.sentence,"aria-label":`Arguments`,children:[c(O,{each:g(s,e=>e.fields),by:e=>e.id,children:e=>c(be,{field:e,state:s,onFocus:()=>{r.focus(e.id),y.focus()}})}),c(`span`,{class:X.spacer}),l.view?u(`button`,{type:`button`,class:X.view,title:`Open ${l.view.title} (⌥↵)`,onClick:S,children:[l.view.title,c(A,{name:`chevron-right`,size:13})]}):null,u(`button`,{type:`button`,class:X.run,onClick:()=>void r.enter(),children:[b,c(`kbd`,{children:`↵`})]})]}),c(D,{when:g(s,e=>e.error),children:e=>u(`p`,{class:X.error,role:`alert`,children:[e.message,e.hint?u(`span`,{class:X.hint,children:[` `,e.hint]}):null]})}),c(F,{class:X.list,contentClass:X.listContent,id:d,role:`listbox`,"aria-label":`Options`,children:c(O,{each:g(s,e=>a(e)?Te:e.completions),children:(e,t)=>{let i=u(`div`,{class:X.row,role:`option`,onClick:()=>r.accept(t.value),onPointerMove:()=>r.point(t.value),children:[c(`span`,{class:X.rowIcon}),c(`span`,{class:X.rowTitle,children:e.label}),c(`span`,{class:X.rowMeta,children:e.detail??(e.value===e.label?``:e.value)})]});return n([f,t],()=>{B(i,`id`,p(t.value)),B(i,`aria-selected`,String(f.value===t.value))}),i}})}),e.form?c(`div`,{class:X.form,ref:e=>{m=e},onKeyDown:v,children:e.form.render({manager:t,invocation:r,run:()=>void r.enter(),keys:e=>{i=e}})}):null,c(D,{when:g(s,t=>!e.form&&t.formOnly.length>0),children:()=>{let e=document.createTextNode(``);return n([s],()=>{let t=s.value.formOnly.length;V(e,`+ ${t} more option${t>1?`s`:``} at their defaults`)}),c(`p`,{class:X.more,children:e})}}),c(xe,{hints:[[`tab`,`next field`],[`↵`,`run`],...l.view?[[`⌥↵`,`open in the UI`]]:[],[`⌫`,`back`],e.direct?[`esc`,`close`]:[`esc`,`commands`]]})]})}function be(e){let{field:t}=e,r=g(e.state,e=>{let n=e.values[t.id];if(n!==void 0&&n!==``)return t.options?.find(e=>e.value===String(n))?.label??String(n)}),i=g(e.state,e=>e.field===t.id),a=g(e.state,e=>e.missing.includes(t.id)),o=document.createTextNode(``),s=c(`button`,{type:`button`,class:X.value,onClick:()=>e.onFocus(),children:o});return n([r,i,a],()=>{let e=r.value;B(s,`data-active`,i.value),B(s,`data-missing`,a.value),B(s,`data-empty`,e===void 0),V(o,e??t.label)}),u(`span`,{class:X.token,children:[t.before?c(`span`,{class:X.before,children:t.before}):null,s]})}function xe(e){return c(`div`,{class:X.footer,children:e.hints.map(([e,t])=>u(`span`,{children:[c(`kbd`,{children:e}),` `,t]}))})}var Se,Ce,$,we,Te;function Ee(){return(Ee=e((()=>{T(),k(),P(),Y(),E(),te(),l(),f(),j(),ae(),b(),v(),Z(),d(),Se=e=>e.kind===`caption`?`caption:${e.label}`:e.kind===`group`?`group:${e.group.id}:${e.index}`:e.kind===`item`?`item:${e.item.label}:${e.index}`:`match:${e.match.command.id}:${e.match.preset?.id??``}:${e.index}:${e.tail??``}`,Ce=(e,t)=>{if(e.kind!==t.kind)return!1;if(e.kind===`caption`)return e.label===t.label;if(e.kind===`group`)return e.group===t.group&&e.index===t.index;if(e.kind===`item`)return e.item===t.item&&e.index===t.index;let n=t;return e.match.command===n.match.command&&e.match.preset===n.match.preset&&e.match.blocked===n.match.blocked&&e.index===n.index&&e.tail===n.tail},$=24,we=28,Te=[]})))()}export{Y as a,G as c,U as d,J as i,W as l,Ee as n,oe as o,q as r,K as s,Q as t,H as u};