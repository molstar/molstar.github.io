import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./jsx-runtime-DbCUSNU3.js";import{n as r,r as i}from"./registry-D35yV2Tb.js";var a;function o(){return(o=e((()=>{i(),a={input:`msp-text-input-input`},r(`components/text-input/text-input.module.css`,`@layer msp.components {
.msp-text-input-input {
  min-width: 0;
  height: var(--msp-control-height);
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  box-shadow: inset 0 0 0 1px var(--msp-field-edge);
  color: var(--msp-color-text);
  font: inherit;
  font-size: var(--msp-font-size-sm);
  border: 0;
  margin: 0;

  &[data-size="sm"] {
    height: 24px;
  }

  &:hover {
    background: var(--msp-color-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }

  &::placeholder {
    color: var(--msp-color-text-subtle);
  }
}
}
`)})))()}function s(e){return t(`input`,{type:e.type??`text`,class:`${a.input} ${e.class??``}`,"data-size":e.size??`md`,value:e.value,placeholder:e.placeholder,"aria-label":e[`aria-label`],onInput:t=>e.onInput?.(t.currentTarget.value),onKeyDown:t=>{let n=t.currentTarget;t.key===`Enter`?e.onSubmit?.(n.value):t.key===`Escape`&&e.search&&n.value&&(n.value=``,e.onInput?.(``),t.preventDefault(),t.stopPropagation())}})}function c(){return(c=e((()=>{o(),n()})))()}export{c as n,s as t};