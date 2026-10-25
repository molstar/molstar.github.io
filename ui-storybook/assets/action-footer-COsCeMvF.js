import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{T as t,g as n,n as r,r as i,t as a,w as o,x as s}from"./jsx-runtime-DbCUSNU3.js";import{n as c,r as l}from"./registry-D35yV2Tb.js";import{S as u,b as d,x as f}from"./work-queue-DoxU-HjK.js";import{n as p,t as m}from"./observable-state-eRUcDuAs.js";import{i as h,n as g}from"./control-flow-BQuMY04w.js";import{n as _,t as v}from"./icon-1ydjt1pd.js";import{i as y,s as b}from"./scoped-Dk1HMUKj.js";var x;function S(){return(S=e((()=>{l(),x={apply:`msp-action-footer-apply`,footer:`msp-action-footer-footer`,info:`msp-action-footer-info`,reset:`msp-action-footer-reset`,secondary:`msp-action-footer-secondary`,spin:`msp-action-footer-spin`},c(`components/action-footer/action-footer.module.css`,`@layer msp.components {
.msp-action-footer-footer {
  height: 30px;
  margin: var(--msp-space-1) calc(-1 * var(--msp-space-3)) calc(-1 * var(--msp-space-3));
  display: flex;
}

.msp-action-footer-reset {
  width: 32px;
  color: var(--msp-color-text-subtle);
  flex: none;
  place-items: center;
  display: grid;

  &:hover {
    color: var(--msp-color-text);
  }

  &:focus-visible {
    color: var(--msp-color-text);
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }
}

.msp-action-footer-apply {
  align-items: center;
  gap: var(--msp-space-2);
  padding: 0 var(--msp-space-4);
  color: var(--msp-color-accent);
  font-size: var(--msp-font-size-sm);
  flex: none;
  margin-left: auto;
  font-weight: 600;
  display: flex;

  &:hover:not(:disabled) {
    color: var(--msp-color-accent-strong);

    & > span {
      text-underline-offset: 3px;
      text-decoration: underline 1.5px;
    }
  }

  &:focus-visible {
    color: var(--msp-color-accent-strong);
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }

  &:disabled {
    color: var(--msp-color-text-subtle);
  }
}

.msp-action-footer-info {
  min-width: 0;
  padding-left: var(--msp-space-3);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  align-self: center;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-action-footer-reset + .msp-action-footer-info {
  padding-left: 0;
}

.msp-action-footer-secondary {
  align-items: center;
  gap: var(--msp-space-2);
  padding: 0 var(--msp-space-2) 0 var(--msp-space-4);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  flex: none;
  display: flex;

  &:hover:not(:disabled) {
    color: var(--msp-color-text);

    & > span {
      text-underline-offset: 3px;
      text-decoration: underline 1.5px;
    }
  }

  &:focus-visible {
    color: var(--msp-color-text);
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }

  &:disabled {
    color: var(--msp-color-text-subtle);
  }
}

.msp-action-footer-footer:not(:has(.msp-action-footer-info)) .msp-action-footer-secondary {
  margin-left: auto;
}

.msp-action-footer-secondary ~ .msp-action-footer-apply {
  margin-left: 0;
}

.msp-action-footer-spin {
  animation: .9s linear infinite msp-action-footer-spin;
}

@keyframes msp-action-footer-spin {
  to {
    transform: rotate(360deg);
  }
}
}
`)})))()}function C(e){let n=T(e.busy),a=d([n,T(e.disabled)],(e,t)=>e||t),s=o(`ActionFooter`),c=t=>{if(t.key!==`Enter`||t.defaultPrevented||t.isComposing||t.altKey||t.ctrlKey||t.metaKey)return;let n=t.target;w(n)&&!a.value&&(t.preventDefault(),n.dispatchEvent(new Event(`change`,{bubbles:!0})),queueMicrotask(()=>{a.value||e.onApply()}))},l=e=>queueMicrotask(()=>{let n=e.parentElement;n&&!s.disposed&&t(s,()=>b(n,`keydown`,c))});return i(`div`,{class:x.footer,ref:e=>l(e),children:[e.onReset?r(`button`,{type:`button`,class:x.reset,"data-tip":`Set defaults`,"aria-label":`Set defaults`,onClick:()=>e.onReset?.(),children:r(v,{name:`list-restart`,size:15})}):null,e.info===void 0?null:r(`span`,{class:x.info,children:e.info}),e.secondary?r(`button`,{type:`button`,class:x.secondary,disabled:n,onClick:()=>e.secondary?.onClick(),children:r(`span`,{children:e.secondary.label})}):null,i(`button`,{type:`button`,class:x.apply,disabled:a,onClick:()=>e.onApply(),children:[r(g,{when:n,children:()=>r(v,{name:`loader-circle`,size:15,class:x.spin})}),r(`span`,{children:e.label})]})]})}function w(e){return!(e instanceof HTMLInputElement)||e.getAttribute(`role`)===`combobox`||e.getAttribute(`aria-expanded`)===`true`?!1:[`text`,`number`,`search`,`url`,`email`,`tel`,``].includes(e.type)}function T(e){if(u(e))return e;let t=p(!1);return n(e??!1,e=>t.set(e)),t.asReadonly}function E(){return(E=e((()=>{h(),s(),y(),m(),f(),_(),S(),a()})))()}export{E as n,C as t};