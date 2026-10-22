import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n,t as r}from"./jsx-runtime-Dut-27nP.js";import{n as i,r as a}from"./registry-D35yV2Tb.js";import{b as o,x as s}from"./work-queue-DoxU-HjK.js";import{n as c,t as l}from"./icon-CrwnZGU9.js";var u;function d(){return(d=e((()=>{a(),u={choice:`msp-choices-choice`,group:`msp-choices-group`,label:`msp-choices-label`,row:`msp-choices-row`,text:`msp-choices-text`},i(`components/choices/choices.module.css`,`@layer msp.components {
.msp-choices-group {
  gap: var(--msp-space-1);
  grid-template-columns: minmax(0, 1fr);
  min-width: 0;
  display: grid;
}

.msp-choices-label {
  padding: 0 var(--msp-space-1);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
}

.msp-choices-row {
  gap: var(--msp-space-1);
  grid-template-columns: repeat(auto-fit, minmax(min(64px, 100%), 1fr));
  display: grid;
}

.msp-choices-choice {
  justify-content: center;
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  height: 28px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  white-space: nowrap;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  &[aria-pressed="true"] {
    background: color-mix(in oklab, var(--msp-color-accent), transparent 82%);
    color: var(--msp-color-accent);
  }

  & > svg {
    flex: none;
  }
}

.msp-choices-text {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}
}
`)})))()}function f(e){let{active:r}=e;return n(`div`,{class:u.group,children:[e.label?t(`span`,{class:u.label,children:e.label}):null,t(`div`,{class:u.row,role:`group`,"aria-label":e.label,children:e.choices.map(i=>n(`button`,{type:`button`,class:u.choice,title:i.title,"aria-pressed":r&&o(r,e=>e===i.id),onClick:()=>e.onPick(i.id),children:[i.icon?t(l,{name:i.icon,size:15}):null,t(`span`,{class:u.text,"data-tip-overflow":``,children:i.label})]}))})]})}function p(){return(p=e((()=>{s(),c(),d(),r()})))()}export{p as n,f as t};