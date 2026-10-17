import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{E as t,S as n,_ as r,b as i,d as a,g as o,i as s,m as c,n as l,o as u,r as d,t as f,v as p}from"./jsx-runtime-Dut-27nP.js";import{n as m,r as h}from"./registry-D35yV2Tb.js";import{i as g,n as _,t as v}from"./control-flow-BLsZc6z1.js";import{b as y,u as b,x}from"./work-queue-DoxU-HjK.js";import{n as S,t as C}from"./observable-state-C67cgDrf.js";import{a as w,c as T,l as E,r as D,u as O}from"./manager-BFhJYk0n.js";import{n as k,t as A}from"./icon-Fyk1xIJy.js";import{c as ee,i as j,o as M,s as N}from"./scoped-CYrGtqEo.js";import{n as P,t as F}from"./scroll-area-C3WxaIdw.js";import{C as te,D as I,O as ne,T as L,m as R,v as z}from"./params-form-DodHex4Z.js";import{n as re,t as ie}from"./keyed-selector-MU49iODI.js";var B;function V(){return(V=e((()=>{h(),B={content:`msp-virtual-list-content`,enter:`msp-virtual-list-enter`,glide:`msp-virtual-list-glide`,list:`msp-virtual-list-list`,row:`msp-virtual-list-row`,window:`msp-virtual-list-window`},m(`components/virtual-list/virtual-list.module.css`,`@layer msp.components {
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
`)})))()}function H(e,t,n,r){let i=Math.ceil(2*e/t);return Math.max(r,Math.min(i,3*Math.max(1,n)))}function U(e,t,n){let r=t.length-e.length;if(r<=0||e.length===0)return;let i=0;for(;i<e.length&&n(e[i])===n(t[i]);)i++;for(let a=i;a<e.length;a++)if(n(e[a])!==n(t[a+r]))return;return{at:i,count:r}}function W(){return(W=e((()=>{})))()}function G(e){let t=e.overscan??8,i=p(0),a=S(0),o=S(e.rowHeight),s,u=()=>{if(!s)return;let e=s.scrollTop,t=s.clientHeight;i.offer(e),t!==a.value&&a.set(t)},d=e=>e||800,f=S({first:0,last:0}),m=[],h=0,g=-1/0,_=()=>{g=performance.now()},x,C=e=>{let n=m.length,r=o.value,s=i.value,c=Math.min(n,Math.floor(s/r)),l=Math.min(n,Math.ceil((s+d(a.value))/r)),u=l-c,p=s>=h,_=performance.now()-g<200?Math.abs(s-h):0;h=s;let{first:v,last:y}=f.value,b=H(_,r,u,Math.max(t,Math.ceil(u/2))),x=v<=Math.max(0,c-(p?t:b))&&y>=Math.min(n,l+(p?b:t))&&y<=n,S,C;if(e)S=c-u,C=l+u;else if(x)return;else if(l<=v||c>=y){let e=H(_,r,u,2);S=c-(p?2:e),C=l+(p?e:2)}else{let e=H(_,r,u,Math.max(t,u));S=c-(p?t:e),C=l+(p?e:t)}S=Math.max(0,S),C=Math.min(n,C),(S!==v||C!==y)&&f.set({first:S,last:C})},w=()=>{O(),C(!1),x!==void 0&&clearTimeout(x),x=setTimeout(()=>{x=void 0,C(!0)},120)},T=new Set,E=[],D;function O(){if(D!==void 0){clearTimeout(D),D=void 0,T.clear();for(let e of E)e.removeAttribute(`data-reveal`);E.length=0}}let k=t=>e.itemKey(t),A=[],ee=t=>{if(!e.reveal||t===A)return;let n=U(A,t,k);if(A=t,n){O();for(let e=n.at;e<n.at+n.count;e++)T.add(k(t[e]));D=setTimeout(O,240)}};n(()=>{x!==void 0&&clearTimeout(x),O()}),c(y([e.items,a.asReadonly,o.asReadonly],(e,t,n)=>({list:e,h:t,rh:n})),({list:e})=>{m=e,C(!0)}),c(i,w);let j=y([e.items,f.asReadonly,o.asReadonly],(e,t,n)=>(ee(e),{items:e,first:Math.min(t.first,e.length),last:Math.min(t.last,e.length),rh:n}),(e,t)=>e.items===t.items&&e.first===t.first&&e.last===t.last&&e.rh===t.rh),P=y(j,e=>e.items.slice(e.first,e.last));return e.ref?.({scrollToIndex(e){let t=o.value,n=d(a.value),c=e*t,l=i.value;c<l?l=c:c+t>l+n&&(l=c+t-n),l!==i.value&&(h=l,s&&(s.scrollTop=l),i.offer(l)),b(),r()}}),l(F,{class:`${B.list} ${e.class??``}`,contentClass:B.content,edge:e.edge,fade:!1,viewportRef:e=>{s=e,N(e,`scroll`,u,{passive:!0}),N(e,`wheel`,_,{passive:!0}),N(e,`touchmove`,_,{passive:!0}),M(e,u),queueMicrotask(u)},role:e.role,"aria-label":e[`aria-label`],ref:t=>e.contentRef?.(t),style:{height:y([e.items,o.asReadonly],(e,t)=>`${e.length*t}px`),"--msp-virtual-row":y(o.asReadonly,e=>`${e}px`)},children:l(`div`,{class:B.window,style:{transform:y(j,e=>`translateY(${e.first*e.rh}px)`)},ref:e=>{M(e,t=>{let n=t[t.length-1].contentRect.height,r=e.childElementCount;if(r<=0||n<=0||D!==void 0)return;let i=n/r;Math.abs(i-o.value)>.5&&o.set(i)})},children:l(v,{each:P,by:e.itemKey,children:t=>{let n=e.children(t);return T.size&&n instanceof Element&&T.has(k(t))&&(n.setAttribute(`data-reveal`,``),E.push(n)),n}})})})}function K(e,t,n){let r=[],i=(e,a)=>{for(let o=0;o<e.length;o++){let s=e[o];r.push({node:s,depth:a,posinset:o+1,setsize:e.length});let c=t(s);c?.length&&n(s)&&i(c,a+1)}};return i(e,0),r}function ae(e,t){let n=new Map;return r=>{let i=new Map,a=r.map(r=>{let a=e(r),o=n.get(a),s=o!==void 0&&t(o,r)?o:r;return i.set(a,s),s});return n=i,a}}function q(){return(q=e((()=>{g(),i(),C(),x(),j(),P(),V(),W(),f()})))()}var J;function Y(){return(Y=e((()=>{h(),J={ask:`msp-command-menu-ask`,askIcon:`msp-command-menu-askIcon`,askKeys:`msp-command-menu-askKeys`,askLabel:`msp-command-menu-askLabel`,askText:`msp-command-menu-askText`,before:`msp-command-menu-before`,caption:`msp-command-menu-caption`,command:`msp-command-menu-command`,crumb:`msp-command-menu-crumb`,empty:`msp-command-menu-empty`,error:`msp-command-menu-error`,footer:`msp-command-menu-footer`,head:`msp-command-menu-head`,headIcon:`msp-command-menu-headIcon`,hint:`msp-command-menu-hint`,input:`msp-command-menu-input`,keys:`msp-command-menu-keys`,list:`msp-command-menu-list`,listContent:`msp-command-menu-listContent`,menu:`msp-command-menu-menu`,"menu-fade":`msp-command-menu-menu-fade`,"menu-in":`msp-command-menu-menu-in`,message:`msp-command-menu-message`,more:`msp-command-menu-more`,proposed:`msp-command-menu-proposed`,rest:`msp-command-menu-rest`,row:`msp-command-menu-row`,rowChevron:`msp-command-menu-rowChevron`,rowIcon:`msp-command-menu-rowIcon`,rowMeta:`msp-command-menu-rowMeta`,rowTitle:`msp-command-menu-rowTitle`,run:`msp-command-menu-run`,scrim:`msp-command-menu-scrim`,sentence:`msp-command-menu-sentence`,shared:`msp-command-menu-shared`,sharedOption:`msp-command-menu-sharedOption`,sharedTitle:`msp-command-menu-sharedTitle`,spacer:`msp-command-menu-spacer`,srOnly:`msp-command-menu-srOnly`,tail:`msp-command-menu-tail`,token:`msp-command-menu-token`,value:`msp-command-menu-value`,view:`msp-command-menu-view`},m(`views/command-menu/command-menu.module.css`,`@layer msp.components {
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
`)})))()}function oe(e,t,n,r){let i=e.assistant,a=n.trim();return i.ready()?{id:`assistant-ask`,label:`Ask AI assistant`,detail:`“${a}”`,icon:`sparkles`,run:()=>{let e=i.propose(a);if(e)return r(a),t.open(e.command,e.tail).kind===`form`;i.ask(a)}}:{id:`assistant-setup`,label:`Set up the assistant to ask`,detail:`“${a}”`,icon:`sparkles`,run:()=>i.setup()}}function X(e){let{manager:t}=e,r=S(void 0);c(t.active,e=>{e||r.set(void 0)}),c(t.outcomes,t=>{t.kind===`done`&&e.onClose()}),n(()=>t.close());let i=L(),a;return n(()=>i(a)),l(`div`,{class:J.scrim,"data-keeps-card":``,onPointerDown:t=>{t.target===t.currentTarget&&e.onClose()},children:l(`div`,{class:J.menu,role:`dialog`,"aria-modal":`true`,"aria-label":`Commands`,ref:e=>{a=e},onKeyDown:t=>{I(t,t.currentTarget),!(t.key!==`Escape`||t.defaultPrevented)&&(t.preventDefault(),t.stopPropagation(),e.onClose())},children:l(_,{when:t.active,fallback:()=>l(se,{...e,onPropose:e=>r.set(e)}),children:n=>l(ge,{manager:t,invocation:n,proposed:r.asReadonly,onClose:e.onClose,...e.direct?{direct:!0}:{}})})})})}function se(e){let{manager:t}=e,r=S(e.initial??``),i=p(r.value),a=()=>{i.latest!==i.value&&b()},u=S(e.group),f=S(0),m=S(void 0),h=ne(`msp-command-list`),g=e=>`${h}-${e}`,x=[...e.prefixes??[],de(e,e=>W(e))],C=e=>x.find(t=>e.startsWith(t.char)),w=ae(e=>`${u.value??``}|${ye(e)}`,be),T,E=y([i,u.asReadonly,t.commands,t.groups],(e,t,n,r)=>{if(T&&T.t===e&&T.g===t&&T.c===n&&T.gs===r)return T.rows;let i=w(k(e,t));return T?(T.t=e,T.g=t,T.c=n,T.gs=r,T.rows=i):T={t:e,g:t,c:n,gs:r,rows:i},i});function k(e,n){let r=[],i=0,a=e=>{e.kind!==`caption`&&(e.index=i++),r.push(e)},o=C(e);if(o){for(let t of o.items(e.slice(o.char.length).trimStart()))a({kind:`item`,item:t,index:0});return r}if(!e.trim()){let{groups:e,commands:i}=t.children(n);if(n===void 0){let n=t.query(``);if(n.recent.length){a({kind:`caption`,label:`Recent`});for(let e of n.recent)a({kind:`match`,match:e,index:0})}e.length&&a({kind:`caption`,label:`Browse`})}for(let t of e)a({kind:`group`,group:t,index:0});if(n!==void 0){let e=new Set(i.map(e=>e.command.category)),t;for(let n of i)e.size>1&&n.command.category!==t&&(t=n.command.category,a({kind:`caption`,label:t})),a({kind:`match`,match:n,index:0});return r}let o=new Set(t.query(``).recent.map(e=>e.command)),s=new Map;for(let e of i){if(o.has(e.command))continue;let t=s.get(e.command.category);t?t.push(e):s.set(e.command.category,[e])}for(let[e,t]of s){a({kind:`caption`,label:e});for(let e of t)a({kind:`match`,match:e,index:0})}return r}let s=t.query(e),c=e=>n===void 0||t.inGroup(e.command,n);s.direct&&c(s.direct)&&a({kind:`match`,match:s.direct,tail:s.direct.tail,index:0});let l=t.groups.value.filter(r=>(n===void 0||t.groupPath(r.id).some(e=>e.id===n))&&r.id!==n&&(D(r.title,e)??-1)>=0);for(let e of l)a({kind:`group`,group:e,index:0});for(let e of s.matches)e.command!==s.direct?.command&&c(e)&&a({kind:`match`,match:e,index:0});return r}let j=[],M=()=>j.filter(e=>e.kind!==`caption`),P=()=>{e.assistant&&(e.assistant.ready()?r.value.trim()&&!C(r.value)&&!oe(e,t,r.value,e.onPropose).run()&&!t.active.value&&e.onClose():(e.assistant.setup(),e.onClose()))},te=y([i,E],(e,t)=>!!e.trim()&&!C(e)&&!t.some(e=>e.kind!==`caption`));c(E,e=>{j=e,f.value>=M().length&&f.set(0)});let I=S({n:Q}),L=y([E,I.asReadonly],(e,t)=>e.length<=(t.of===e?t.n:Q)?e:e.slice(0,t.of===e?t.n:Q),(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n])),R=y([E,L],(e,t)=>(e.length-t.length)*$),z=e=>{let t=I.value,n=t.of===j?t.n:Q;e>n&&n<j.length&&I.set({of:j,n:Math.max(e,n+Q)})};c(f.asReadonly,e=>{let t=j.findIndex(t=>t.kind!==`caption`&&t.index===e);t>=0&&z(t+1)});let ie=re(f.asReadonly);o(y([f.asReadonly,E],(e,t)=>{let n=t.find(t=>t.kind===`match`&&t.index===e);return n?.kind===`match`&&!n.match.preset&&!n.tail&&!n.match.blocked?n.match.command.id:void 0}),e=>t.browse(e)),n(()=>t.browse(void 0));let B=y([u.asReadonly,t.groups],e=>[...t.groupPath(e)].reverse().find(e=>e.shared)),V=y([f.asReadonly,E],(e,t)=>t.some(e=>e.kind!==`caption`)?g(e):void 0),H=S(``),U=ee(()=>{if(!i.value.trim())return H.set(``);let t=0;for(let e of E.value)e.kind!==`caption`&&t++;if(t)return H.set(t===1?`1 result`:`${t} results`);H.set(e.assistant?`No command matches: ask AI assistant.`:`Nothing matches.`)});o(E,()=>U.start(400));let W=e=>{r.set(e),i.offer(e),a(),X.value=e,f.set(0),m.set(void 0)},G=e=>{u.set(e),W(``)},K=n=>{if(a(),n.kind===`group`)return G(n.group.id);if(n.kind===`item`){!n.item.run()&&!t.active.value&&e.onClose();return}if(n.match.blocked)return m.set(n.match.blocked);let r=t.open(n.match.command.id,n.tail,n.match.preset?.id);r.kind===`blocked`?m.set(r.reason):r.kind===`ran`&&e.onClose()},q=()=>{let e=t.groupPath(u.value);return e.length?(G(e[e.length-2]?.id),!0):!1},Y=y([r.asReadonly,u.asReadonly],(e,n)=>{let r=C(e);return r?r.placeholder??r.title:n===void 0?`Search commands, or type ? for help`:`Search in ${t.groupPath(n).pop()?.title}`}),X=l(`input`,{class:J.input,type:`text`,role:`combobox`,"aria-expanded":`true`,"aria-controls":h,"aria-autocomplete":`list`,"aria-activedescendant":V,"aria-label":`Command`,placeholder:Y,spellcheck:!1,value:r,onInput:e=>{r.set(e.currentTarget.value),i.offer(e.currentTarget.value),f.set(0),m.set(void 0)},onKeyDown:t=>{a();let n=M().length,r=!t.currentTarget.value;if(t.key===`ArrowDown`||t.key===`ArrowUp`)t.preventDefault(),n&&f.set((f.value+(t.key===`ArrowDown`?1:n-1))%n);else if(t.key===`Enter`){t.preventDefault();let e=M()[f.value];t.metaKey||t.ctrlKey?P():e?K(e):P()}else if(t.key===`ArrowRight`&&r){let e=M()[f.value];e?.kind===`group`&&(t.preventDefault(),G(e.group.id))}else(t.key===`Backspace`||t.key===`ArrowLeft`)&&r?q()&&t.preventDefault():t.key===`Escape`&&(t.preventDefault(),t.stopPropagation(),e.onClose())}});return queueMicrotask(()=>X.focus()),d(s,{children:[d(`div`,{class:J.head,children:[l(A,{name:`search`,size:15,class:J.headIcon}),l(v,{each:y(u.asReadonly,e=>t.groupPath(e)),children:e=>d(`button`,{type:`button`,class:J.crumb,onClick:()=>G(e.id),children:[e.title,l(A,{name:`chevron-right`,size:12})]})}),X]}),l(_,{when:B,children:e=>l(le,{manager:t,group:e})}),l(_,{when:m,children:e=>l(`p`,{class:J.message,role:`alert`,children:e})}),l(`span`,{class:J.srOnly,role:`status`,"aria-live":`polite`,children:H.asReadonly}),d(F,{class:J.list,contentClass:J.listContent,id:h,role:`listbox`,"aria-label":`Commands`,viewportRef:e=>{N(e,`scroll`,()=>z(Math.ceil((e.scrollTop+2*e.clientHeight)/$)),{passive:!0})},children:[l(v,{each:L,fallback:()=>l(`p`,{class:J.empty,children:e.assistant?`No command matches: ask AI assistant.`:`Nothing matches.`}),children:e=>{if(e.kind===`caption`)return l(`div`,{class:J.caption,role:`presentation`,children:e.label});let n=e.index,r={id:g(n),index:n,highlight:f.asReadonly,selected:ie.key(n),onPick:()=>K(e),onHover:()=>f.set(n)};return e.kind===`group`?l(fe,{...r,manager:t,group:e.group}):e.kind===`item`?l(pe,{...r,item:e.item}):l(me,{...r,manager:t,row:e,path:ue(t,e.match.command.group,u.value),inGroup:u.value!==void 0,query:i})}}),l(_,{when:y(R,e=>e>0),children:()=>l(`div`,{class:J.rest,role:`presentation`,style:{height:y(R,e=>`${e}px`)}})})]}),e.assistant?l(ce,{ready:e.assistant.ready(),text:y(r.asReadonly,e=>C(e)?``:e.trim()),unmatched:te,onAsk:()=>{e.assistant?.ready()?r.value.trim()?P():X.focus():(e.assistant?.setup(),e.onClose())}}):null,l(ve,{hints:[[`↑↓`,`move`],[`↵`,`run`],...e.assistant?.ready()?[[O()?`⌘↵`:`Ctrl+↵`,`ask`]]:[],[`→`,`open group`],[`?`,`help`],[`esc`,`close`]]})]})}function ce(e){return e.ready?d(`button`,{type:`button`,class:J.ask,"data-default":y(e.unmatched,e=>e?``:void 0),onClick:()=>e.onAsk(),children:[l(A,{name:`sparkles`,size:15,class:J.askIcon}),l(`span`,{class:J.askLabel,children:`Ask AI assistant`}),l(`span`,{class:J.askText,children:y(e.text,e=>e?`“${e}”`:`describe what you want, in your words`)}),l(`kbd`,{class:J.askKeys,children:y(e.unmatched,e=>e?`↵`:O()?`⌘↵`:`Ctrl+↵`)})]}):d(`button`,{type:`button`,class:J.ask,"data-setup":``,onClick:()=>e.onAsk(),children:[l(A,{name:`sparkles`,size:15,class:J.askIcon}),l(`span`,{class:J.askText,children:`Set up an AI assistant`})]})}function le(e){let{manager:t,group:n}=e,r=n.shared,i=y(t.shared,()=>t.sharedValue(n.id));return d(`div`,{class:J.shared,role:`group`,"aria-label":`${n.title}: ${r.title}`,children:[l(`span`,{class:J.sharedTitle,children:r.title}),r.options.map(([e,r])=>l(`button`,{type:`button`,class:J.sharedOption,"aria-pressed":y(i,t=>t===e?`true`:`false`),onClick:()=>t.setShared(n.id,e),children:r}))]})}function ue(e,t,n){let r=e.groupPath(t),i=n===void 0?-1:r.findIndex(e=>e.id===n);return r.slice(i+1).map(e=>e.title)}function de(e,t){return{char:`?`,title:`Help`,placeholder:`Prefixes and shortcuts`,items:n=>{let r=n.toLowerCase(),i=(e.prefixes??[]).map(e=>({id:`prefix:${e.char}`,label:`${e.char}  ${e.title}`,detail:e.placeholder,icon:`command`,run:()=>(t(e.char),!0)})),a=e.manager.commands.value.flatMap(t=>{let n=e.manager.shortcut(t);return n?[{c:t,chord:n}]:[]}).map(({c:t,chord:n})=>({id:`keys:${t.id}`,label:t.title,detail:T(n),icon:t.icon??`keyboard`,run:()=>{e.manager.open(t.id)}}));return[...e.manager.get(`help.show`)?[{id:`help:card`,label:`Keyboard and mouse`,detail:`The Help card`,icon:`circle-help`,run:()=>{e.manager.open(`help.show`)}}]:[],...i,...a].filter(e=>!r||e.label.toLowerCase().includes(r))}}}function Z(e,t,n){return R(e,`aria-selected`,String(t)),t&&!n&&queueMicrotask(()=>e.scrollIntoView?.({block:`nearest`})),t}function fe(e){let n=e.manager.groupPath(e.group.parent).map(e=>e.title),r=d(`div`,{id:e.id,class:J.row,role:`option`,onClick:()=>e.onPick(),onPointerMove:()=>e.onHover(),children:[l(`span`,{class:J.rowIcon,children:l(A,{name:e.group.icon??`list-tree`,size:15})}),l(`span`,{class:J.rowTitle,children:e.group.title}),l(`span`,{class:J.rowMeta,children:n.join(` › `)}),l(A,{name:`chevron-right`,size:14,class:J.rowChevron})]}),i=!1;return t([e.selected],()=>{i=Z(r,e.highlight.value===e.index,i)}),r}function pe(e){let{item:n}=e,r=d(`div`,{id:e.id,class:J.row,role:`option`,onClick:()=>e.onPick(),onPointerMove:()=>e.onHover(),children:[l(`span`,{class:J.rowIcon,children:n.icon?l(A,{name:n.icon,size:15}):null}),l(`span`,{class:J.rowTitle,children:n.label}),l(`span`,{class:J.rowMeta,children:n.detail})]}),i=!1;return t([e.selected],()=>{i=Z(r,e.highlight.value===e.index,i)}),r}function me(e){let{manager:n,query:r}=e,{match:i,tail:o}=e.row,s=i.command,c=i.preset?`${s.title.replace(/…$/,``)} ${i.preset.title}`:s.title,u=n.shortcut(s),f=i.blocked??(e.path.length?e.path.join(` › `):e.inGroup?``:s.category),p=document.createElement(`span`),m=document.createTextNode(f),h=d(`div`,{id:e.id,class:J.row,role:`option`,"aria-disabled":i.blocked?`true`:void 0,onClick:()=>e.onPick(),onPointerMove:()=>e.onHover(),children:[l(`span`,{class:J.rowIcon,children:s.icon?l(A,{name:s.icon,size:15}):null}),d(`span`,{class:J.rowTitle,children:[p,o?l(`span`,{class:J.tail,children:o}):null]}),l(`span`,{class:J.rowMeta,children:m}),u?l(`kbd`,{class:J.keys,children:T(u)}):null]}),g=!1,_=[e.selected];s.count&&!i.preset&&_.push(n.browsing),t(_,()=>{if(g=Z(h,e.highlight.value===e.index,g),s.count&&!i.preset){let e=n.browsing.value;z(m,(e?.id===s.id?e.count:void 0)??f)}});let v,y=e=>{if(e===v)return;v=e;let t=he(c,e);typeof t==`string`?p.textContent=t:p.replaceChildren(a(t))};return o?y(``):t([r],()=>y(r.value)),h}function he(e,t){let n=new Set(w(e,t));if(!n.size)return e;let r=[],i=``,a=!1,o=()=>{i&&=(r.push(a?l(`mark`,{children:i}):i),``)};for(let t=0;t<e.length;t++){let r=n.has(t);r!==a&&(o(),a=r),i+=e[t]}return o(),l(s,{children:r})}function ge(e){let{manager:t,invocation:n}=e,r=n.state,i=n.command,a=y(r,e=>e.fields.find(t=>t.id===e.field)),o=ne(`msp-command-options`),c=e=>`${o}-${e}`,u=l(`input`,{class:J.input,type:`text`,role:`combobox`,"aria-expanded":y(r,e=>e.completions.length>0),"aria-controls":o,"aria-autocomplete":`list`,"aria-activedescendant":y(r,e=>e.pick>=0&&e.pick<e.completions.length?c(e.pick):void 0),"aria-label":y(a,e=>e?.label??i.title),placeholder:y(a,e=>e?e.label:`Enter to run`),spellcheck:!1,value:y(r,e=>e.text),onInput:e=>n.type(e.currentTarget.value),onKeyDown:e=>{e.key===`Enter`&&e.altKey&&i.view?(e.preventDefault(),p()):e.key===`Enter`?(e.preventDefault(),n.enter()):e.key===`Tab`?(e.preventDefault(),n.tab(e.shiftKey?-1:1)):e.key===`ArrowDown`||e.key===`ArrowUp`?(e.preventDefault(),n.move(e.key===`ArrowDown`?1:-1)):e.key===`Backspace`&&!e.currentTarget.value?(e.preventDefault(),n.back()||f()):e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),f())}});queueMicrotask(()=>u.focus());let f=()=>{t.close(),e.direct&&e.onClose()},p=()=>{let n=i.view;n&&(t.close(),e.onClose(),n.open(t.context.value))};return d(s,{children:[l(_,{when:e.proposed,children:e=>d(`p`,{class:J.proposed,children:[l(A,{name:`sparkles`,size:13,class:J.askIcon}),`Proposed by the assistant from “`,e,`”: check it, then Enter to run`]})}),d(`div`,{class:J.head,children:[d(`span`,{class:J.command,children:[i.icon?l(A,{name:i.icon,size:15}):null,i.title.replace(/…$/,``)]}),u]}),d(`div`,{class:J.sentence,"aria-label":`Arguments`,children:[l(v,{each:y(r,e=>e.fields),children:e=>l(_e,{field:e,state:r,onFocus:()=>{n.focus(e.id),u.focus()}})},e=>e.id),l(`span`,{class:J.spacer}),i.view?d(`button`,{type:`button`,class:J.view,title:`Open ${i.view.title} (⌥↵)`,onClick:p,children:[i.view.title,l(A,{name:`chevron-right`,size:13})]}):null,d(`button`,{type:`button`,class:J.run,onClick:()=>void n.enter(),children:[y(r,e=>e.action),l(`kbd`,{children:`↵`})]})]}),l(_,{when:y(r,e=>e.error),children:e=>d(`p`,{class:J.error,role:`alert`,children:[e.message,e.hint?d(`span`,{class:J.hint,children:[` `,e.hint]}):null]})}),l(F,{class:J.list,contentClass:J.listContent,id:o,role:`listbox`,"aria-label":`Options`,children:l(v,{each:y(r,e=>e.completions),children:(e,t)=>d(`div`,{id:y(t,c),class:J.row,role:`option`,"aria-selected":y([r,t],(e,t)=>e.pick===t),onClick:()=>n.accept(t.value),onPointerMove:()=>n.point(t.value),children:[l(`span`,{class:J.rowIcon}),l(`span`,{class:J.rowTitle,children:e.label}),l(`span`,{class:J.rowMeta,children:e.detail??(e.value===e.label?``:e.value)})]})})}),l(_,{when:y(r,e=>e.formOnly.length>0),children:()=>l(`p`,{class:J.more,children:y(r,e=>`+ ${e.formOnly.length} more option${e.formOnly.length>1?`s`:``} at their defaults`)})}),l(ve,{hints:[[`tab`,`next field`],[`↵`,`run`],...i.view?[[`⌥↵`,`open in the UI`]]:[],[`⌫`,`back`],e.direct?[`esc`,`close`]:[`esc`,`commands`]]})]})}function _e(e){let{field:t}=e,n=y(e.state,e=>{let n=e.values[t.id];if(n!==void 0&&n!==``)return t.options?.find(e=>e.value===String(n))?.label??String(n)});return d(`span`,{class:J.token,children:[t.before?l(`span`,{class:J.before,children:t.before}):null,l(`button`,{type:`button`,class:J.value,"data-active":y(e.state,e=>e.field===t.id?``:void 0),"data-missing":y(e.state,e=>e.missing.includes(t.id)?``:void 0),"data-empty":y(n,e=>e===void 0?``:void 0),onClick:()=>e.onFocus(),children:y(n,e=>e??t.label)})]})}function ve(e){return l(`div`,{class:J.footer,children:e.hints.map(([e,t])=>d(`span`,{children:[l(`kbd`,{children:e}),` `,t]}))})}var ye,be,Q,$;function xe(){return(xe=e((()=>{E(),k(),P(),q(),g(),te(),u(),i(),j(),ie(),C(),x(),Y(),f(),ye=e=>e.kind===`caption`?`caption:${e.label}`:e.kind===`group`?`group:${e.group.id}:${e.index}`:e.kind===`item`?`item:${e.item.label}:${e.index}`:`match:${e.match.command.id}:${e.match.preset?.id??``}:${e.index}:${e.tail??``}`,be=(e,t)=>{if(e.kind!==t.kind)return!1;if(e.kind===`caption`)return e.label===t.label;if(e.kind===`group`)return e.group===t.group&&e.index===t.index;if(e.kind===`item`)return e.item===t.item&&e.index===t.index;let n=t;return e.match.command===n.match.command&&e.match.preset===n.match.preset&&e.match.blocked===n.match.blocked&&e.index===n.index&&e.tail===n.tail},Q=24,$=28})))()}export{q as a,U as c,V as d,K as i,H as l,xe as n,ae as o,G as r,W as s,X as t,B as u};