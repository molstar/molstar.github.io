import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./registry-D35yV2Tb.js";import{i as r,o as i,s as a}from"./scoped-CYrGtqEo.js";var o;function s(){return(s=e((()=>{n(),o={muted:`msp-tooltip-muted`,tooltip:`msp-tooltip-tooltip`,"tooltip-in":`msp-tooltip-tooltip-in`},t(`components/tooltip/tooltip.module.css`,`@layer msp.components {
.msp-tooltip-tooltip {
  z-index: var(--msp-z-tooltip);
  max-width: 240px;
  padding: var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-text);
  color: var(--msp-color-bg);
  font-size: var(--msp-font-size-xs);
  white-space: nowrap;
  text-overflow: ellipsis;
  pointer-events: none;
  animation: msp-tooltip-tooltip-in var(--msp-motion-fast) var(--msp-ease);
  line-height: 1.3;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;

  &[hidden] {
    display: none;
  }
}

.msp-tooltip-tooltip[data-kind="row"] {
  max-width: 320px;
  padding: var(--msp-space-2) var(--msp-inset);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-color-raised);
  color: var(--msp-color-text);
  box-shadow: 0 0 0 1px var(--msp-glass-edge),
    var(--msp-shadow-float);
  font-size: var(--msp-font-size-sm);
  white-space: normal;
  overflow-wrap: anywhere;
  line-height: 1.4;
}

.msp-tooltip-muted {
  color: var(--msp-color-text-muted);
}

@keyframes msp-tooltip-tooltip-in {
  from {
    opacity: 0;
  }
}
}
`)})))()}function c(e){let t=document.createElement(`div`);t.className=o.tooltip,t.setAttribute(`role`,`tooltip`),t.hidden=!0,e.append(t);let n,r=!1,s,c=i(void 0,()=>!l(n)&&m()),p=e=>{let n=e.dataset.tipRow!==void 0;n?d(t,e):t.textContent=e.dataset.tip??e.textContent??``,t.dataset.kind=n?`row`:``,t.hidden=!1;let r=n?`beside`:e.dataset.tipSide??`bottom`,i=e.getBoundingClientRect(),a=t.getBoundingClientRect(),o,s,c;if(r===`beside`){let t=e.closest(`[data-tip-edge], [role="tabpanel"]`)?.getBoundingClientRect()??i;c=t,o=t.left-8-a.width,o<4&&(o=t.right+8),s=i.top+(i.height-a.height)/2}else r===`left`?(o=i.left-8-a.width,s=i.top+(i.height-a.height)/2):r===`top`?(o=i.left+(i.width-a.width)/2,s=i.top-8-a.height):(o=i.left+(i.width-a.width)/2,s=i.bottom+8);if(o=Math.max(4,Math.min(o,window.innerWidth-a.width-4)),s=Math.max(4,Math.min(s,window.innerHeight-a.height-4)),c&&o<c.right&&o+a.width>c.left&&c!==i)return m();t.style.transform=`translate(${Math.round(o)}px, ${Math.round(s)}px)`,t.dataset.side=r},m=()=>{s!==void 0&&clearTimeout(s),s=void 0,c?.disconnect(),n=void 0,t.hidden=!0},h=(e,i,a)=>{if(s!==void 0&&clearTimeout(s),r=a,e.dataset.tip===void 0&&!u(e)){n=void 0,t.hidden=!0;return}n=e;let o=()=>{if(n!==e||!l(e))return m();p(e),!t.hidden&&(c?.disconnect(),c?.observe(e))};i?o():s=setTimeout(o,f)},g=e=>{let t=e.target,n=t?.closest?.(`[data-tip], [data-tip-overflow], [data-tip-row]`)??void 0;if(!n?.closest(`[inert]`)&&(n?.dataset.tipRow===void 0||t?.closest(`[data-tip-part]`)))return n},_=[a(e,`pointerover`,e=>{n&&!n.isConnected&&m();let r=g(e);r&&r!==n&&h(r,!t.hidden,!0)}),a(e,`pointermove`,e=>{n&&(!n.isConnected||r&&!n.contains(e.target))&&m()},{passive:!0}),a(e,`pointerout`,e=>{let t=g(e);t&&!t.contains(e.relatedTarget)&&m()}),a(e,`focusin`,e=>{let t=g(e);t?.matches(`:focus-visible`)&&h(t,!0,!1)}),a(e,`focusout`,m),a(e,`pointerdown`,m),a(window,`keydown`,m),a(window,`scroll`,m,{capture:!0})];return()=>{m(),t.remove(),c?.disconnect();for(let e of _)e()}}function l(e){return!!e&&e.isConnected&&(e.checkVisibility?.()??!0)&&!e.closest(`[inert]`)}function u(e){if(e.dataset.tipRow===void 0)return e.scrollWidth-e.clientWidth>1;for(let t of e.querySelectorAll(`[data-tip-part]`))if(t.scrollWidth-t.clientWidth>1)return!0;return!1}function d(e,t){e.textContent=``;let n=!0;for(let r of t.querySelectorAll(`[data-tip-part]`)){let t=r.textContent?.trim();if(!t)continue;let i=document.createElement(`span`);i.textContent=t,n||(i.className=o.muted),n||e.append(` `),e.append(i),n=!1}}var f;function p(){return(p=e((()=>{r(),s(),f=350})))()}export{c as n,p as t};