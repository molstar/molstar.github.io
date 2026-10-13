import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{X as t,Z as n}from"./jsx-runtime-pJJ4pzd1.js";var r;function i(){return(i=e((()=>{n(),r={muted:`msp-tooltip-muted`,tooltip:`msp-tooltip-tooltip`,"tooltip-in":`msp-tooltip-tooltip-in`},t(`components/tooltip/tooltip.module.css`,`@layer msp.components {
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
`)})))()}function a(e){let t=document.createElement(`div`);t.className=r.tooltip,t.setAttribute(`role`,`tooltip`),t.hidden=!0,e.append(t);let n,i,a=e=>{let n=e.dataset.tipRow!==void 0;n?s(t,e):t.textContent=e.dataset.tip??e.textContent??``,t.dataset.kind=n?`row`:``,t.hidden=!1;let r=n?`beside`:e.dataset.tipSide??`bottom`,i=e.getBoundingClientRect(),a=t.getBoundingClientRect(),o,c;if(r===`beside`){let t=e.closest(`[data-tip-edge], [role="tabpanel"]`)?.getBoundingClientRect()??i;o=t.left-8-a.width,o<4&&(o=t.right+8),c=i.top+(i.height-a.height)/2}else r===`left`?(o=i.left-8-a.width,c=i.top+(i.height-a.height)/2):r===`top`?(o=i.left+(i.width-a.width)/2,c=i.top-8-a.height):(o=i.left+(i.width-a.width)/2,c=i.bottom+8);o=Math.max(4,Math.min(o,window.innerWidth-a.width-4)),c=Math.max(4,Math.min(c,window.innerHeight-a.height-4)),t.style.transform=`translate(${Math.round(o)}px, ${Math.round(c)}px)`,t.dataset.side=r},l=()=>{i!==void 0&&clearTimeout(i),i=void 0,n=void 0,t.hidden=!0},u=(e,r)=>{i!==void 0&&clearTimeout(i),e.dataset.tip===void 0&&!o(e)?(n=void 0,t.hidden=!0):(n=e,r?a(e):i=setTimeout(()=>n===e&&a(e),c))},d=e=>{let t=e.target,n=t?.closest?.(`[data-tip], [data-tip-overflow], [data-tip-row]`)??void 0;if(n?.dataset.tipRow===void 0||t?.closest(`[data-tip-part]`))return n},f=e=>{let r=d(e);r&&r!==n&&u(r,!t.hidden)},p=e=>{let t=d(e);t&&!t.contains(e.relatedTarget)&&l()},m=e=>{let t=d(e);t?.matches(`:focus-visible`)&&u(t,!0)};return e.addEventListener(`pointerover`,f),e.addEventListener(`pointerout`,p),e.addEventListener(`focusin`,m),e.addEventListener(`focusout`,l),e.addEventListener(`pointerdown`,l),window.addEventListener(`keydown`,l),window.addEventListener(`scroll`,l,!0),()=>{l(),t.remove(),e.removeEventListener(`pointerover`,f),e.removeEventListener(`pointerout`,p),e.removeEventListener(`focusin`,m),e.removeEventListener(`focusout`,l),e.removeEventListener(`pointerdown`,l),window.removeEventListener(`keydown`,l),window.removeEventListener(`scroll`,l,!0)}}function o(e){if(e.dataset.tipRow===void 0)return e.scrollWidth-e.clientWidth>1;for(let t of e.querySelectorAll(`[data-tip-part]`))if(t.scrollWidth-t.clientWidth>1)return!0;return!1}function s(e,t){e.textContent=``;let n=!0;for(let i of t.querySelectorAll(`[data-tip-part]`)){let t=i.textContent?.trim();if(!t)continue;let a=document.createElement(`span`);a.textContent=t,n||(a.className=r.muted),n||e.append(` `),e.append(a),n=!1}}var c;function l(){return(l=e((()=>{i(),c=350})))()}export{a as n,l as t};