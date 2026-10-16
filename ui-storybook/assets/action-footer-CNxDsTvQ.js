import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n,t as r}from"./jsx-runtime-DzTO5r4L.js";import{n as i,r as a}from"./registry-D35yV2Tb.js";import{c as o,i as s,l as c,n as l}from"./control-flow-2XcFB3wB.js";import{n as u,t as d}from"./map-COHPbqb4.js";import{n as f,t as p}from"./combineLatest-nINHdI9G.js";import{n as m,t as h}from"./icon-Fyk1xIJy.js";var g;function _(){return(_=e((()=>{a(),g={apply:`msp-action-footer-apply`,footer:`msp-action-footer-footer`,info:`msp-action-footer-info`,reset:`msp-action-footer-reset`,secondary:`msp-action-footer-secondary`,spin:`msp-action-footer-spin`},i(`components/action-footer/action-footer.module.css`,`@layer msp.components {
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
`)})))()}function v(e){let r=e.busy??c(!1),i=p([r,e.disabled??c(!1)]).pipe(u(([e,t])=>e||t));return n(`div`,{class:g.footer,children:[e.onReset?t(`button`,{type:`button`,class:g.reset,"data-tip":`Set defaults`,"aria-label":`Set defaults`,onClick:()=>e.onReset?.(),children:t(h,{name:`list-restart`,size:15})}):null,e.info===void 0?null:t(`span`,{class:g.info,children:e.info}),e.secondary?t(`button`,{type:`button`,class:g.secondary,disabled:r,onClick:()=>e.secondary?.onClick(),children:t(`span`,{children:e.secondary.label})}):null,n(`button`,{type:`button`,class:g.apply,disabled:i,onClick:()=>e.onApply(),children:[t(l,{when:r,children:()=>t(h,{name:`loader-circle`,size:15,class:g.spin})}),t(`span`,{children:e.label})]})]})}function y(){return(y=e((()=>{f(),d(),o(),s(),m(),_(),r()})))()}export{y as n,v as t};