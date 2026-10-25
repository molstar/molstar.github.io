import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{h as t,n,r,t as i,x as a}from"./jsx-runtime-DbCUSNU3.js";import{n as o,r as s}from"./registry-D35yV2Tb.js";import{n as c,t as l}from"./icon-1ydjt1pd.js";import{i as u,s as d}from"./scoped-Dk1HMUKj.js";import{a as f,o as p,s as m}from"./focus-DbrNPVyh.js";import{a as h,o as g}from"./events-5qSA8--5.js";var _;function v(){return(v=e((()=>{s(),_={keys:`msp-context-menu-keys`,menu:`msp-context-menu-menu`,row:`msp-context-menu-row`},o(`components/context-menu/context-menu.module.css`,`@layer msp.components {
.msp-context-menu-menu {
  z-index: var(--msp-z-overlay);
  min-width: 180px;
  padding: var(--msp-space-2);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-glass-panel-bg);
  box-shadow: var(--msp-glass-shadow);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  display: grid;
  position: fixed;
  top: 0;
  left: 0;
}

.msp-context-menu-row {
  align-items: center;
  gap: var(--msp-space-3);
  height: 28px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  text-align: left;
  grid-template-columns: 15px 1fr auto;
  display: grid;

  &:hover, &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &:disabled {
    opacity: .55;
  }
}

.msp-context-menu-keys {
  color: var(--msp-color-text-subtle);
  font-family: inherit;
  font-size: var(--msp-font-size-xs);
}
}
`)})))()}function y(e,i,a,o){let s=!1,c=()=>{},u=m(),f=()=>{s||(s=!0,c(),u(b),b.remove(),o?.())},v=e=>{h(e,b)||f()},y=t=>{t.key===`Escape`&&(h(t,b)||g(e,t))&&(t.preventDefault(),t.stopPropagation(),f())},b;t(e=>{c=e,b=n(`div`,{class:_.menu,role:`menu`,onKeyDown:p,onContextMenu:e=>e.preventDefault(),children:a.map(e=>r(`button`,{type:`button`,role:`menuitem`,class:_.row,disabled:!!e.disabled,title:e.disabled,onClick:()=>{f(),e.run()},children:[e.icon?n(l,{name:e.icon,size:15}):n(`span`,{}),n(`span`,{children:e.label}),e.shortcut?n(`kbd`,{class:_.keys,children:e.shortcut}):n(`span`,{})]}))}),d(document,`pointerdown`,v,{capture:!0}),d(document,`keydown`,y,{capture:!0}),d(window,`resize`,f),d(window,`scroll`,f,{capture:!0})}),e.append(b);let x=b.offsetWidth,S=b.offsetHeight,C=i.x+x>window.innerWidth-4?Math.max(4,i.x-x):i.x,w=i.y+S>window.innerHeight-4?Math.max(4,i.y-S):i.y;return b.style.transform=`translate(${Math.round(C)}px, ${Math.round(w)}px)`,b.querySelector(`button:not(:disabled)`)?.focus({preventScroll:!0}),f}function b(){return(b=e((()=>{f(),a(),u(),c(),v(),i()})))()}export{y as n,b as t};