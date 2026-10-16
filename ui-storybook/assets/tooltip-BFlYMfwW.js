import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./registry-D35yV2Tb.js";var r;function i(){return(i=e((()=>{n(),r={muted:`msp-tooltip-muted`,tooltip:`msp-tooltip-tooltip`,"tooltip-in":`msp-tooltip-tooltip-in`},t(`components/tooltip/tooltip.module.css`,`@layer msp.components {
.msp-tooltip-tooltip {
  z-index: var(--msp-z-tooltip);
  max-width: 240px;
  padding: var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-text);
  color: var(--msp-color-bg);
  font-size: var(--msp-font-size-xs);
  white-space: nowrap;
  pointer-events: none;
  animation: msp-tooltip-tooltip-in var(--msp-motion-fast) var(--msp-ease);
  line-height: 1.3;
  position: fixed;
  top: 0;
  left: 0;

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
`)})))()}function a(e){let t=document.createElement(`div`);t.className=r.tooltip,t.setAttribute(`role`,`tooltip`),t.hidden=!0,e.append(t);let n,i=!1,a,u=typeof ResizeObserver>`u`?void 0:new ResizeObserver(()=>!o(n)&&f()),d=e=>{let n=e.dataset.tipRow!==void 0;n?c(t,e):t.textContent=e.dataset.tip??e.textContent??``,t.dataset.kind=n?`row`:``,t.hidden=!1;let r=n?`beside`:e.dataset.tipSide??`bottom`,i=e.getBoundingClientRect(),a=t.getBoundingClientRect(),o,s,l;if(r===`beside`){let t=e.closest(`[data-tip-edge], [role="tabpanel"]`)?.getBoundingClientRect()??i;l=t,o=t.left-8-a.width,o<4&&(o=t.right+8),s=i.top+(i.height-a.height)/2}else r===`left`?(o=i.left-8-a.width,s=i.top+(i.height-a.height)/2):r===`top`?(o=i.left+(i.width-a.width)/2,s=i.top-8-a.height):(o=i.left+(i.width-a.width)/2,s=i.bottom+8);if(o=Math.max(4,Math.min(o,window.innerWidth-a.width-4)),s=Math.max(4,Math.min(s,window.innerHeight-a.height-4)),l&&o<l.right&&o+a.width>l.left&&l!==i)return f();t.style.transform=`translate(${Math.round(o)}px, ${Math.round(s)}px)`,t.dataset.side=r},f=()=>{a!==void 0&&clearTimeout(a),a=void 0,u?.disconnect(),n=void 0,t.hidden=!0},p=(e,r,c)=>{if(a!==void 0&&clearTimeout(a),i=c,e.dataset.tip===void 0&&!s(e)){n=void 0,t.hidden=!0;return}n=e;let p=()=>{if(n!==e||!o(e))return f();d(e),!t.hidden&&(u?.disconnect(),u?.observe(e))};r?p():a=setTimeout(p,l)},m=e=>{let t=e.target,n=t?.closest?.(`[data-tip], [data-tip-overflow], [data-tip-row]`)??void 0;if(!n?.closest(`[inert]`)&&(n?.dataset.tipRow===void 0||t?.closest(`[data-tip-part]`)))return n},h=e=>{n&&!n.isConnected&&f();let r=m(e);r&&r!==n&&p(r,!t.hidden,!0)},g=e=>{let t=m(e);t&&!t.contains(e.relatedTarget)&&f()},_=e=>{let t=m(e);t?.matches(`:focus-visible`)&&p(t,!0,!1)},v=e=>{n&&(!n.isConnected||i&&!n.contains(e.target))&&f()};return e.addEventListener(`pointerover`,h),e.addEventListener(`pointermove`,v,{passive:!0}),e.addEventListener(`pointerout`,g),e.addEventListener(`focusin`,_),e.addEventListener(`focusout`,f),e.addEventListener(`pointerdown`,f),window.addEventListener(`keydown`,f),window.addEventListener(`scroll`,f,!0),()=>{f(),t.remove(),u?.disconnect(),e.removeEventListener(`pointerover`,h),e.removeEventListener(`pointermove`,v),e.removeEventListener(`pointerout`,g),e.removeEventListener(`focusin`,_),e.removeEventListener(`focusout`,f),e.removeEventListener(`pointerdown`,f),window.removeEventListener(`keydown`,f),window.removeEventListener(`scroll`,f,!0)}}function o(e){return!!e&&e.isConnected&&(e.checkVisibility?.()??!0)&&!e.closest(`[inert]`)}function s(e){if(e.dataset.tipRow===void 0)return e.scrollWidth-e.clientWidth>1;for(let t of e.querySelectorAll(`[data-tip-part]`))if(t.scrollWidth-t.clientWidth>1)return!0;return!1}function c(e,t){e.textContent=``;let n=!0;for(let i of t.querySelectorAll(`[data-tip-part]`)){let t=i.textContent?.trim();if(!t)continue;let a=document.createElement(`span`);a.textContent=t,n||(a.className=r.muted),n||e.append(` `),e.append(a),n=!1}}var l;function u(){return(u=e((()=>{i(),l=350})))()}export{a as n,u as t};