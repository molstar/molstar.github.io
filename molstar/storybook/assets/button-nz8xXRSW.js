import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{X as t,Z as n,n as r,r as i,t as a}from"./jsx-runtime-pJJ4pzd1.js";var o;function s(){return(s=e((()=>{n(),o={block:`msp-button-block`,button:`msp-button-button`,danger:`msp-button-danger`,ghost:`msp-button-ghost`,icon:`msp-button-icon`,iconOnly:`msp-button-iconOnly`,primary:`msp-button-primary`,small:`msp-button-small`,tiny:`msp-button-tiny`},t(`components/button/button.module.css`,`@layer msp.components {
.msp-button-button {
  justify-content: center;
  align-items: center;
  gap: var(--msp-space-2);
  height: var(--msp-control-height);
  padding: 0 var(--msp-space-4);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-md);
  white-space: nowrap;
  transition: background-color var(--msp-motion-fast) var(--msp-ease),
    color var(--msp-motion-fast) var(--msp-ease);
  display: inline-flex;

  &:hover:not(:disabled) {
    background: var(--msp-color-hover);
  }

  &:active:not(:disabled), &[aria-pressed="true"] {
    background: var(--msp-color-pressed);
  }

  &:disabled {
    color: var(--msp-color-text-subtle);
  }
}

.msp-button-primary {
  background: color-mix(in oklab, var(--msp-color-accent), transparent 84%);
  color: var(--msp-color-accent-strong);
  font-weight: 600;

  &:hover:not(:disabled) {
    background: color-mix(in oklab, var(--msp-color-accent), transparent 76%);
  }

  &:active:not(:disabled), &[aria-pressed="true"] {
    background: color-mix(in oklab, var(--msp-color-accent), transparent 70%);
  }

  &:disabled {
    background: color-mix(in oklab, var(--msp-color-accent), transparent 92%);
    color: var(--msp-color-text-subtle);
  }
}

.msp-button-block {
  width: 100%;
}

.msp-button-ghost {
  background: none;
}

.msp-button-danger:hover:not(:disabled) {
  background: var(--msp-color-danger);
  color: #fff;
}

.msp-button-small {
  height: 24px;
  padding: 0 var(--msp-inset);
  font-size: var(--msp-font-size-sm);
}

.msp-button-tiny {
  gap: var(--msp-space-1);
  height: 20px;
  padding: 0 var(--msp-space-2);
  font-size: var(--msp-font-size-xs);

  & .msp-button-icon {
    width: 14px;
    height: 14px;
  }
}

.msp-button-iconOnly {
  width: var(--msp-control-height);
  padding: 0;

  &.msp-button-small {
    width: 24px;
  }

  &.msp-button-tiny {
    width: 20px;
  }
}

.msp-button-icon {
  width: 18px;
  height: 18px;
  display: inline-flex;

  & > svg {
    width: 100%;
    height: 100%;
  }
}
}
`)})))()}function c(e){let t=e.variant??`default`,n=e.icon!==void 0&&e.children===void 0,a=[o.button,t==="default"?``:o[t],e.size===`sm`?o.small:e.size===`xs`?o.tiny:``,n?o.iconOnly:``,e.block?o.block:``,e.class??``].filter(Boolean).join(` `);return i(`button`,{type:`button`,class:a,title:e.title,"aria-label":n?e.title:void 0,disabled:e.disabled,"aria-pressed":e.pressed,onClick:e.onClick,children:[e.icon===void 0?null:r(`span`,{class:o.icon,children:e.icon}),e.children]})}function l(){return(l=e((()=>{s(),a()})))()}export{l as n,c as t};