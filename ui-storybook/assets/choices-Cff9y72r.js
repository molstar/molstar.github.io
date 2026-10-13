import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{X as t,Z as n,n as r,r as i,t as a}from"./jsx-runtime-pJJ4pzd1.js";import{n as o,t as s}from"./map-BLVP9Oyc.js";import{n as c,t as l}from"./icon-Cd9kBD44.js";var u;function d(){return(d=e((()=>{n(),u={choice:`msp-choices-choice`,group:`msp-choices-group`,label:`msp-choices-label`,row:`msp-choices-row`,text:`msp-choices-text`},t(`components/choices/choices.module.css`,`@layer msp.components {
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
  transition: background-color var(--msp-motion-fast) var(--msp-ease);
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
`)})))()}function f(e){return i(`div`,{class:u.group,children:[e.label?r(`span`,{class:u.label,children:e.label}):null,r(`div`,{class:u.row,role:`group`,"aria-label":e.label,children:e.choices.map(t=>i(`button`,{type:`button`,class:u.choice,title:t.title,"aria-pressed":e.active?.pipe(o(e=>e===t.id)),onClick:()=>e.onPick(t.id),children:[t.icon?r(l,{name:t.icon,size:15}):null,r(`span`,{class:u.text,"data-tip-overflow":``,children:t.label})]}))})]})}function p(){return(p=e((()=>{s(),c(),d(),a()})))()}export{p as n,f as t};