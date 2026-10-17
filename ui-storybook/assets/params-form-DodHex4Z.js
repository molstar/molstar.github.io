import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{E as t,b as n,g as r,i,m as a,n as o,r as s,t as c,v as l}from"./jsx-runtime-Dut-27nP.js";import{n as u,r as d}from"./registry-D35yV2Tb.js";import{i as f,n as p,t as m}from"./control-flow-BLsZc6z1.js";import{S as h,b as g,x as _}from"./work-queue-DoxU-HjK.js";import{n as v,t as y}from"./observable-state-C67cgDrf.js";import{n as b,t as x}from"./icon-Fyk1xIJy.js";import{i as S,s as C,t as ee}from"./scoped-CYrGtqEo.js";import{n as te,t as ne}from"./scroll-area-C3WxaIdw.js";import{D as re,H as ie,W as ae,it as oe,k as se,n as ce,t as le,tt as ue}from"./param-definition-OHPHmB1q.js";import{a as de,o as fe,r as pe,s as me,t as he}from"./select-Cc49vJOg.js";import{n as ge,t as _e}from"./names-DbgGgpWr.js";function w(e=document){let t=e.activeElement;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;if(t&&t!==e.body&&t!==e.documentElement&&!(t.shadowRoot&&!t.shadowRoot.activeElement&&t.tabIndex<0))return t}function ve(e){return[...e.querySelectorAll(Ee)].filter(e=>!e.closest(`[hidden], [inert]`))}function ye(e,t){if(e.key!==`Tab`||e.defaultPrevented)return;let n=ve(t);if(!n.length)return;let r=w(t.ownerDocument),i=!!r&&t.contains(r);e.shiftKey&&(!i||r===n[0])?(e.preventDefault(),n[n.length-1].focus()):!e.shiftKey&&(!i||r===n[n.length-1])&&(e.preventDefault(),n[0].focus())}function be(e){let t=w();return n=>{let r=w();if(r&&!(n&&n.contains(r)))return;let i=t?.isConnected?t:e?.();i?.isConnected&&i.focus({preventScroll:!0})}}function xe(e){if(!e)return!1;try{return e.matches(`:focus-visible`)}catch{return w(e.ownerDocument)===e}}function Se(e){return[...e.querySelectorAll(De)].filter(e=>!e.hasAttribute(`disabled`)&&e.getAttribute(`aria-disabled`)!==`true`&&!e.closest(`[hidden]`))}function Ce(e,t=!1){let n=Se(e),r=(t?n.find(e=>e.getAttribute(`aria-checked`)===`true`):void 0)??n[0];return r?.focus(),!!r}function we(e){if(e.defaultPrevented)return;let t=e.currentTarget,n=Se(t);if(!n.length)return;let r=n.indexOf(w(t.ownerDocument)),i=n.length,a;switch(e.key){case`ArrowDown`:a=n[r<0?0:(r+1)%i];break;case`ArrowUp`:a=n[r<0?i-1:(r-1+i)%i];break;case`Home`:a=n[0];break;case`End`:a=n[i-1];break;default:return}e.preventDefault(),a.focus()}function Te(e){let t=()=>[...e.querySelectorAll(`[role="tab"]`)].filter(e=>!e.closest(`[hidden]`)),n=()=>{let n=t(),r=w(e.ownerDocument),i=n.find(e=>e===r)??n.find(e=>e.getAttribute(`aria-selected`)===`true`)??n[0];for(let e of n){let t=e===i?0:-1;e.tabIndex!==t&&(e.tabIndex=t)}},r=C(e,`keydown`,e=>{if(e.defaultPrevented)return;let n=t(),r=n.indexOf(e.target);if(r<0)return;let i;switch(e.key){case`ArrowDown`:case`ArrowRight`:i=n[(r+1)%n.length];break;case`ArrowUp`:case`ArrowLeft`:i=n[(r-1+n.length)%n.length];break;case`Home`:i=n[0];break;case`End`:i=n[n.length-1];break;default:return}e.preventDefault(),i.focus()}),i=C(e,`focusin`,n),a=new MutationObserver(n);return a.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`aria-selected`]}),n(),()=>{r(),i(),a.disconnect()}}function T(e=`msp`){return`${e}-${++Oe}`}var Ee,De,Oe;function E(){return(E=e((()=>{S(),Ee=`a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]), [contenteditable="true"]`,De=`[role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"]`,Oe=0})))()}function ke(e,t){e.data!==t&&(e.data=t)}function Ae(e,t,n){if(n==null||n===!1){e.hasAttribute(t)&&e.removeAttribute(t);return}let r=n===!0?``:String(n);e.getAttribute(t)!==r&&e.setAttribute(t,r)}function je(e,t,n){e.classList.toggle(t,n)}function D(e,t,n){let r=e.style;n?r.getPropertyValue(t)!==n&&r.setProperty(t,n):r.getPropertyValue(t)&&r.removeProperty(t)}function Me(e,t){let n=t?``:`none`;e.style.display!==n&&(e.style.display=n)}function Ne(){return(Ne=e((()=>{})))()}function Pe(e){let t=t=>{let n={names:[]},r=new Map;for(let i of Object.keys(e)){let a=e[i];if(a.isHidden||a.type===`value`||!!a.isEssential!==t)continue;if(!a.category){n.names.push(i);continue}let o=r.get(a.category);o||(o={category:a.category,names:[]},r.set(a.category,o)),o.names.push(i)}let i=[...r.values()].sort((e,t)=>e.category<t.category?-1:1);return n.names.length?[n,...i]:i};return{essentials:t(!0),advanced:t(!1)}}var Fe;function Ie(){return(Ie=e((()=>{ce(),y(),_(),Fe=class{#e;#t;#n=new Map;#r=new Map;constructor(e,t=le.getDefaultValues(e),n={}){this.params=e,this.options=n,this.#t=le.getDefaultValues(e),this.#e=v({...this.#t,...t},{compare:Object.is})}get values(){return this.#e.asReadonly}field(e){let t=this.#n.get(e);return t||(t=g(this.#e.asReadonly,t=>t[e]),this.#n.set(e,t)),t}visible(e){let t=this.params[e];return t.hideIf?g(this.#e.asReadonly,e=>!t.hideIf(e)):g(this.#e.asReadonly,()=>!0)}set(e,t){let n=this.#e.value;if(Object.is(n[e],t))return;let r={...n,[e]:t};this.#e.set(r),this.options.onChange?.(r,e)}load(e){this.#e.set({...this.#t,...e})}reset(){let e=this.#e.value,t={...this.#t};this.#e.set(t);for(let n of Object.keys(this.params))le.isParamEqual(this.params[n],e[n],t[n])||this.options.onChange?.(t,n)}layout(){let e=[],t=[];for(let n of Object.keys(this.params)){let r=this.params[n];r.isHidden||(r.isEssential?e.push(n):t.push(n))}return e.length?{essentials:e,advanced:t}:{essentials:t,advanced:[]}}fold(e,t=!1){let n=this.#r.get(e);return n||(n=v(t),this.#r.set(e,n)),n}}})))()}var O;function Le(){return(Le=e((()=>{d(),O={custom:`msp-color-color-picker-custom`,field:`msp-color-color-picker-field`,greys:`msp-color-color-picker-greys`,marker:`msp-color-color-picker-marker`,palette:`msp-color-color-picker-palette`,picker:`msp-color-color-picker-picker`,preview:`msp-color-color-picker-preview`,swatch:`msp-color-color-picker-swatch`,text:`msp-color-color-picker-text`},u(`components/color/color-picker.module.css`,`@layer msp.components {
.msp-color-color-picker-picker {
  gap: var(--msp-space-3);
  margin-block: var(--msp-space-1) var(--msp-space-2);
  padding: var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  display: grid;
}

.msp-color-color-picker-field, .msp-color-color-picker-greys {
  border-radius: var(--msp-radius-sm);
  box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-text), transparent 88%);
  cursor: crosshair;
  touch-action: none;
  position: relative;
}

.msp-color-color-picker-field {
  background: linear-gradient(#ffffffe6, #fff0 50%, #0000 50%, #000000e6), linear-gradient(to right, red, #ff0, #0f0, #0ff, #00f, #f0f, red);
  height: 96px;
}

.msp-color-color-picker-greys {
  background: linear-gradient(to right, #000, #fff);
  height: 12px;
}

.msp-color-color-picker-marker {
  pointer-events: none;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  position: absolute;
  translate: -50% -50%;
  box-shadow: 0 0 0 1.5px #fff, 0 0 0 2.5px #00000080;
}

.msp-color-color-picker-palette {
  gap: var(--msp-space-2);
  grid-template-columns: repeat(8, minmax(0, 1fr));
  display: grid;
}

.msp-color-color-picker-swatch {
  border-radius: var(--msp-radius-sm);
  min-width: 0;
  height: 16px;
  box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-text), transparent 88%);
  transition: transform var(--msp-motion-fast) var(--msp-ease);

  &:hover {
    transform: scale(1.08);
  }

  &[aria-selected="true"] {
    box-shadow: 0 0 0 1.5px var(--msp-color-bg),
      0 0 0 3px var(--msp-color-text-muted);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: 2px;
  }
}

.msp-color-color-picker-custom {
  align-items: center;
  gap: var(--msp-space-2);
  display: flex;
}

.msp-color-color-picker-preview {
  border-radius: var(--msp-radius-sm);
  width: 22px;
  height: 22px;
  box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-text), transparent 88%);
  flex: none;
}

.msp-color-color-picker-text {
  min-width: 0;
  height: 24px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  font-variant-numeric: tabular-nums;
  border: 0;
  flex: 1;

  &::placeholder {
    color: var(--msp-color-text-subtle);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }
}
}
`)})))()}function Re(e){let t=e>>16&255,n=e>>8&255,r=e&255,i=(Math.max(t,n,r)+Math.min(t,n,r))/510,a=Math.round(7*(1-i)),o=7-a,s=[];for(let t=a;t>0;t--)s.push(j(e,.9*t/a));s.push(e);for(let t=1;t<=o;t++)s.push(j(e,-.85*t/o));return s}function k(e){return`#${(e>>>0&16777215).toString(16).padStart(6,`0`)}`}function A(e){return`${e>>16&255}, ${e>>8&255}, ${e&255}`}function ze(e){let t=e.trim().toLowerCase();if(!t)return;let n=/^(?:#|0x)?([0-9a-f]{3}|[0-9a-f]{6})$/.exec(t);if(n){let e=n[1].length===3?n[1].replace(/./g,e=>e+e):n[1];return Number.parseInt(e,16)}let r=/^(rgba?|hsla?)?\s*\(?\s*([^()]*?)\s*\)?$/.exec(t);if(r){let e=r[2].split(/\s*[,;/\s]\s*/).filter(Boolean);if(e.length===3||e.length===4){let t=e.slice(0,3);if(t.every(e=>/^[+]?(\d+\.?\d*|\.\d+)%?$/.test(e))){if(r[1]?.startsWith(`hsl`))return Be(t);let e=t.some(e=>e.endsWith(`%`)),n=t.map(e=>Number.parseFloat(e)),i=!e&&n.every(e=>e<=1)&&t.some(e=>e.includes(`.`)),a=t=>e?t*255/100:i?t*255:t;return!e&&!i&&n.some(e=>e>255)?void 0:M(N(a(n[0])),N(a(n[1])),N(a(n[2])))}}}let i=t.replace(/[\s_-]/g,``);return Object.hasOwn(_e,i)?_e[i]:void 0}function Be(e){let t=(Number.parseFloat(e[0])%360+360)%360/60,n=Math.min(1,Number.parseFloat(e[1])/100),r=Math.min(1,Number.parseFloat(e[2])/100),i=(1-Math.abs(2*r-1))*n,a=i*(1-Math.abs(t%2-1)),o=r-i/2,[s,c,l]=t<1?[i,a,0]:t<2?[a,i,0]:t<3?[0,i,a]:t<4?[0,a,i]:t<5?[a,0,i]:[i,0,a];return M(N((s+o)*255),N((c+o)*255),N((l+o)*255))}function j(e,t){let n=t>0?255:0,r=Math.abs(t),i=t=>{let i=e>>t&255;return Math.round(i+(n-i)*r)<<t};return i(16)|i(8)|i(0)}function Ve(e){let t=e*6%6,n=t-Math.floor(t),r=N(n*255),i=255-r;switch(Math.floor(t)){case 0:return M(255,r,0);case 1:return M(i,255,0);case 2:return M(0,255,r);case 3:return M(0,i,255);case 4:return M(r,0,255);default:return M(255,0,i)}}function He(e,t){let n=Ve(Math.max(0,Math.min(1,e))),r=Math.max(0,Math.min(1,t));return r<.5?j(n,P*(1-r/.5)):j(n,-.9*((r-.5)/.5))}function Ue(e){let t=e>>16&255,n=e>>8&255,r=e&255,i=Math.max(t,n,r),a=Math.min(t,n,r);if(i-a<16)return{greys:!0,x:(t+n+r)/765,y:.5};let o=i-a,s=i===t?((n-r)/o+6)%6:i===n?(r-t)/o+2:(t-n)/o+4,c=(i+a)/510,l=c>=.5?.5*(1-(2*c-1)/P):.5+.5*(1-2*c)/P;return{greys:!1,x:s/6,y:Math.max(0,Math.min(1,l))}}function We(e){let t=Ge(e.value),n=g(t,Ue),r=0,i,c=v(0),l=!1,u=g(c.asReadonly,Re);a(t,e=>{r=e,l||c.set(e),i&&me(i)!==i&&(i.value=A(e))});let d=t=>n=>{let r=r=>{let i=n.getBoundingClientRect();e.onChange(t((r.clientX-i.left)/i.width,(r.clientY-i.top)/i.height))};ee(n,{start(e){if(e.button===0)return r(e),!0},move:r})},f=e=>{let t=e<.03?0:e>.97?255:N(e*255);return M(t,t,t)};return s(`div`,{class:O.picker,children:[o(`div`,{class:O.field,"aria-hidden":`true`,ref:d(He),children:o(`span`,{class:O.marker,hidden:g(n,e=>e.greys),style:{left:g(n,e=>`${e.x*100}%`),top:g(n,e=>`${e.y*100}%`)}})}),o(`div`,{class:O.greys,"aria-hidden":`true`,ref:d(e=>f(e)),children:o(`span`,{class:O.marker,hidden:g(n,e=>!e.greys),style:{left:g(n,e=>`${e.x*100}%`),top:`50%`}})}),o(`div`,{class:O.palette,role:`listbox`,"aria-label":`Palette`,children:Ke.map(n=>o(`button`,{type:`button`,role:`option`,class:O.swatch,style:{background:k(n)},"aria-label":A(n),"aria-selected":g(t,e=>e===n),onClick:()=>e.onChange(n)}))}),o(`div`,{class:O.palette,role:`listbox`,"aria-label":`Weights`,children:[0,1,2,3,4,5,6,7].map(n=>{let r=g(u,e=>e[n]);return o(`button`,{type:`button`,role:`option`,class:O.swatch,style:{background:g(r,k)},"aria-label":g(r,A),"aria-selected":g([r,t],(e,t)=>e===t),onClick:()=>{l=!0,e.onChange(Re(c.value)[n]),l=!1}})})}),s(`div`,{class:O.custom,children:[o(`span`,{class:O.preview,style:{background:g(t,k)}}),o(`input`,{ref:e=>{i=e,e.value=A(r)},type:`text`,class:O.text,"aria-label":`Color`,placeholder:`r, g, b · #hex · rgb() · name`,"data-tip":`r, g, b; hex, rgb(), hsl() or a name`,spellcheck:!1,onInput:t=>{let n=ze(t.currentTarget.value);n!==void 0&&e.onChange(n)},onKeyDown:e=>{e.key===`Enter`&&(e.currentTarget.value=A(r))},onBlur:e=>{e.currentTarget.value=A(r)}})]})]})}function Ge(e){if(h(e))return e;let t=v(0);return r(e,e=>t.set(e)),t.asReadonly}var Ke,M,N,P;function F(){return(F=e((()=>{ge(),n(),S(),y(),_(),Le(),c(),Ke=[15026253,16214805,16762173,4630360,1222036,37119,7231183,14041247],M=(e,t,n)=>e<<16|t<<8|n,N=e=>Math.max(0,Math.min(255,Math.round(e))),P=.9})))()}var I;function L(){return(L=e((()=>{d(),I={afterSelect:`msp-params-params-form-afterSelect`,channels:`msp-params-params-form-channels`,chevron:`msp-params-params-form-chevron`,collapsible:`msp-params-params-form-collapsible`,collapsibleBar:`msp-params-params-form-collapsibleBar`,collapsibleHeader:`msp-params-params-form-collapsibleHeader`,collapsibleMeta:`msp-params-params-form-collapsibleMeta`,color:`msp-params-params-form-color`,control:`msp-params-params-form-control`,count:`msp-params-params-form-count`,fields:`msp-params-params-form-fields`,file:`msp-params-params-form-file`,fileClear:`msp-params-params-form-fileClear`,fileNames:`msp-params-params-form-fileNames`,filePick:`msp-params-params-form-filePick`,form:`msp-params-params-form-form`,input:`msp-params-params-form-input`,item:`msp-params-params-form-item`,itemActions:`msp-params-params-form-itemActions`,itemAdd:`msp-params-params-form-itemAdd`,itemForm:`msp-params-params-form-itemForm`,itemLabel:`msp-params-params-form-itemLabel`,itemRow:`msp-params-params-form-itemRow`,items:`msp-params-params-form-items`,knob:`msp-params-params-form-knob`,label:`msp-params-params-form-label`,mapped:`msp-params-params-form-mapped`,nested:`msp-params-params-form-nested`,number:`msp-params-params-form-number`,presets:`msp-params-params-form-presets`,presetsList:`msp-params-params-form-presetsList`,range:`msp-params-params-form-range`,row:`msp-params-params-form-row`,select:`msp-params-params-form-select`,settings:`msp-params-params-form-settings`,slider:`msp-params-params-form-slider`,subSettings:`msp-params-params-form-subSettings`,swatch:`msp-params-params-form-swatch`,switch:`msp-params-params-form-switch`,textarea:`msp-params-params-form-textarea`,unsupported:`msp-params-params-form-unsupported`},u(`components/params/params-form.module.css`,`@layer msp.components {
.msp-params-params-form-form {
  gap: var(--msp-space-1);
  display: grid;
}

.msp-params-params-form-row {
  grid-template-columns: var(--msp-label-width) minmax(0, 1fr);
  align-items: center;
  gap: var(--msp-space-3);
  min-height: 24px;
  display: grid;

  &[hidden] {
    display: none;
  }
}

.msp-params-params-form-label {
  align-items: center;
  gap: var(--msp-space-1);
  min-width: 0;
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  white-space: nowrap;
  display: flex;
  overflow: hidden;
}

.msp-params-params-form-control {
  align-items: center;
  min-width: 0;
  display: flex;
}

.msp-params-params-form-input, .msp-params-params-form-number, .msp-params-params-form-textarea {
  width: 100%;
  height: 24px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  box-shadow: inset 0 0 0 1px var(--msp-field-edge);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  border: 0;

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

.msp-params-params-form-textarea {
  height: auto;
  min-height: 56px;
  padding: var(--msp-space-2) var(--msp-space-3);
  resize: vertical;
  font-family: inherit;
  line-height: 1.45;
}

.msp-params-params-form-row:has(.msp-params-params-form-textarea) {
  align-items: start;

  & .msp-params-params-form-label {
    padding-top: var(--msp-space-2);
  }
}

.msp-params-params-form-select {
  width: 100%;
}

.msp-params-params-form-slider {
  align-items: center;
  gap: var(--msp-space-2);
  grid-template-columns: minmax(0, 1fr) 52px;
  width: 100%;
  display: grid;
}

.msp-params-params-form-range {
  --msp-range-fill: color-mix(in oklab, var(--msp-color-text-muted), transparent 45%);
  width: calc(100% - var(--msp-space-3));
  height: 16px;
  margin: 0 0 0 var(--msp-space-3);
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  background: none;

  &::-webkit-slider-runnable-track {
    background: linear-gradient(to right,
      var(--msp-range-fill) var(--msp-progress, 0%),
      var(--msp-color-pressed) var(--msp-progress, 0%));
    border-radius: 1.5px;
    height: 3px;
  }

  &::-webkit-slider-thumb {
    background: var(--msp-color-text-muted);
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 10px;
    transition: transform var(--msp-motion-fast) var(--msp-ease);
    border-radius: 50%;
    margin-top: -3.5px;
  }

  &:hover::-webkit-slider-thumb, &:active::-webkit-slider-thumb {
    transform: scale(1.25);
  }

  &::-moz-range-track {
    background: var(--msp-color-pressed);
    border-radius: 1.5px;
    height: 3px;
  }

  &::-moz-range-progress {
    background: var(--msp-range-fill);
    border-radius: 1.5px;
    height: 3px;
  }

  &::-moz-range-thumb {
    background: var(--msp-color-text-muted);
    border: 0;
    border-radius: 50%;
    width: 10px;
    height: 10px;
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: 2px;
    border-radius: var(--msp-radius-sm);
  }
}

.msp-params-params-form-number {
  padding: 0 var(--msp-space-2);
  font-variant-numeric: tabular-nums;
  text-align: right;
}

.msp-params-params-form-switch {
  width: 24px;
  height: 14px;
  margin-left: var(--msp-space-3);
  background: var(--msp-color-pressed);
  box-shadow: inset 0 0 0 1px var(--msp-field-edge);
  border-radius: 7px;
  flex: none;
  position: relative;

  &[aria-checked="true"] {
    background: var(--msp-color-text-muted);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: 2px;
  }
}

.msp-params-params-form-knob {
  background: var(--msp-color-bg);
  width: 10px;
  height: 10px;
  transition: transform var(--msp-motion-fast) var(--msp-ease);
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  box-shadow: 0 1px 1px #0000001f;

  [aria-checked="true"] > & {
    transform: translateX(10px);
  }
}

.msp-params-params-form-color {
  align-items: center;
  gap: var(--msp-space-3);
  width: 100%;
  min-width: 0;
  height: 24px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  box-shadow: inset 0 0 0 1px var(--msp-field-edge);
  display: flex;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
  }
}

.msp-params-params-form-swatch {
  border-radius: var(--msp-radius-sm);
  width: 12px;
  height: 12px;
  box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-text), transparent 88%);
  flex: none;
}

.msp-params-params-form-channels {
  min-width: 0;
  color: var(--msp-color-text);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  font-size: var(--msp-font-size-sm);
  font-variant-numeric: tabular-nums;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-params-params-form-unsupported {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-params-params-form-mapped, .msp-params-params-form-fields, .msp-params-params-form-nested {
  gap: var(--msp-space-1);
  display: grid;
}

.msp-params-params-form-nested :is(.msp-params-params-form-label, .msp-params-params-form-collapsibleHeader) {
  padding-left: var(--msp-space-3);
}

.msp-params-params-form-nested .msp-params-params-form-nested :is(.msp-params-params-form-label, .msp-params-params-form-collapsibleHeader) {
  padding-left: calc(2 * var(--msp-space-3));
}

.msp-params-params-form-nested .msp-params-params-form-nested .msp-params-params-form-nested :is(.msp-params-params-form-label, .msp-params-params-form-collapsibleHeader) {
  padding-left: calc(3 * var(--msp-space-3));
}

.msp-params-params-form-collapsible {
  display: grid;
}

.msp-params-params-form-collapsibleBar {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  display: flex;
}

.msp-params-params-form-collapsibleHeader {
  align-items: center;
  gap: var(--msp-space-1);
  min-width: 0;
  height: 24px;
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  flex: auto;
  display: flex;

  &:hover {
    color: var(--msp-color-text);
  }
}

.msp-params-params-form-chevron {
  color: var(--msp-color-text-subtle);
  transition: transform var(--msp-motion-fast) var(--msp-ease);
  flex: none;

  [aria-expanded="true"] > & {
    transform: rotate(90deg);
  }
}

.msp-params-params-form-collapsibleMeta {
  min-width: 0;
  margin-left: var(--msp-space-1);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  white-space: nowrap;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-params-params-form-presets {
  align-items: center;
  gap: var(--msp-space-1);
  height: 20px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  flex: none;
  display: flex;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }
}

.msp-params-params-form-presetsList {
  margin: var(--msp-space-1) 0;
  display: block;

  & > * {
    animation: none;
  }
}

.msp-params-params-form-settings {
  border-radius: var(--msp-radius-md);
  width: 24px;
  height: 24px;
  color: var(--msp-color-text-muted);
  place-items: center;
  margin-left: auto;
  display: grid;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-params-params-form-afterSelect {
  margin-left: var(--msp-space-1);
  flex: none;
}

.msp-params-params-form-subSettings {
  margin: var(--msp-space-1) calc(-1 * var(--msp-space-2)) var(--msp-space-1);
  padding: var(--msp-space-1) var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);

  & .msp-params-params-form-label {
    padding-left: var(--msp-space-3);
  }
}

.msp-params-params-form-file {
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  width: 100%;
  min-width: 0;
  height: 24px;
  box-shadow: inset 0 0 0 1px var(--msp-field-edge);
  align-items: center;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  &[data-dragging] {
    background: var(--msp-color-hover);
    outline: 1.5px dashed var(--msp-color-border-strong);
    outline-offset: -1.5px;
  }
}

.msp-params-params-form-filePick {
  align-items: center;
  gap: var(--msp-space-3);
  min-width: 0;
  height: 100%;
  padding: 0 var(--msp-inset);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  flex: 1;
  display: flex;

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
    border-radius: var(--msp-radius-md);
  }
}

.msp-params-params-form-fileNames {
  min-width: 0;
  color: var(--msp-color-text);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;

  &[data-empty] {
    color: var(--msp-color-text-muted);
  }
}

.msp-params-params-form-fileClear {
  width: 20px;
  height: 20px;
  margin-right: var(--msp-space-1);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-muted);
  flex: none;
  place-items: center;
  display: grid;

  &:hover {
    background: var(--msp-color-pressed);
    color: var(--msp-color-text);
  }
}

.msp-params-params-form-count {
  padding-left: var(--msp-space-3);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-sm);
  flex: 1;
}

.msp-params-params-form-items {
  margin: var(--msp-space-1) calc(-1 * var(--msp-space-2)) var(--msp-space-1);
  padding: var(--msp-space-1) var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  display: grid;
}

.msp-params-params-form-item {
  display: grid;
}

.msp-params-params-form-itemRow {
  cursor: pointer;
  align-items: center;
  gap: var(--msp-space-1);
  height: 26px;
  margin: 0 calc(-1 * var(--msp-space-1));
  padding: 0 var(--msp-space-1) 0 calc(var(--msp-space-1) + var(--msp-space-3));
  border-radius: var(--msp-radius-sm);
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  & .msp-params-params-form-settings {
    opacity: 0;
    width: 22px;
    height: 22px;
  }

  &:hover .msp-params-params-form-settings, & .msp-params-params-form-settings:focus-visible, [data-open] > & .msp-params-params-form-settings {
    opacity: 1;
  }
}

.msp-params-params-form-itemLabel {
  min-width: 0;
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-params-params-form-itemForm {
  padding: var(--msp-space-1) 0 var(--msp-space-2);

  & .msp-params-params-form-label {
    padding-left: calc(2 * var(--msp-space-3));
  }
}

.msp-params-params-form-itemActions {
  justify-content: space-between;
  align-items: center;
  gap: var(--msp-space-2);
  display: flex;
}

.msp-params-params-form-itemAdd {
  align-items: center;
  gap: var(--msp-space-2);
  height: 26px;
  margin: 0 calc(-1 * var(--msp-space-1));
  padding: 0 var(--msp-space-1) 0 calc(var(--msp-space-1) + var(--msp-space-3));
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}
}
`)})))()}var R;function qe(){return(qe=e((()=>{d(),R={check:`msp-params-extra-controls-check`,chevron:`msp-params-extra-controls-chevron`,curve:`msp-params-extra-controls-curve`,field:`msp-params-extra-controls-field`,fieldContent:`msp-params-extra-controls-fieldContent`,graph:`msp-params-extra-controls-graph`,graphArea:`msp-params-extra-controls-graphArea`,graphAt:`msp-params-extra-controls-graphAt`,graphEditor:`msp-params-extra-controls-graphEditor`,graphFoot:`msp-params-extra-controls-graphFoot`,graphHint:`msp-params-extra-controls-graphHint`,grid:`msp-params-extra-controls-grid`,interval:`msp-params-extra-controls-interval`,intervalRange:`msp-params-extra-controls-intervalRange`,intervalTrack:`msp-params-extra-controls-intervalTrack`,intervalValue:`msp-params-extra-controls-intervalValue`,matrix:`msp-params-extra-controls-matrix`,option:`msp-params-extra-controls-option`,options:`msp-params-extra-controls-options`,optionsContent:`msp-params-extra-controls-optionsContent`,point:`msp-params-extra-controls-point`,spark:`msp-params-extra-controls-spark`,strip:`msp-params-extra-controls-strip`,stripName:`msp-params-extra-controls-stripName`,under:`msp-params-extra-controls-under`,vec:`msp-params-extra-controls-vec`},u(`components/params/extra-controls.module.css`,`@layer msp.components {
.msp-params-extra-controls-field {
  align-items: center;
  gap: var(--msp-space-2);
  width: 100%;
  min-width: 0;
  height: 24px;
  padding: 0 var(--msp-space-2) 0 var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  box-shadow: inset 0 0 0 1px var(--msp-field-edge);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  display: flex;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }
}

.msp-params-extra-controls-fieldContent {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  display: flex;
  overflow: hidden;
}

.msp-params-extra-controls-chevron {
  color: var(--msp-color-text-muted);
  transition: transform var(--msp-motion-fast) var(--msp-ease);
  flex: none;

  [aria-expanded="true"] > & {
    transform: rotate(180deg);
  }
}

.msp-params-extra-controls-under {
  margin: var(--msp-space-1) 0 var(--msp-space-1);
  padding: var(--msp-space-1);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
}

.msp-params-extra-controls-options {
  max-height: 240px;
}

.msp-params-extra-controls-optionsContent {
  display: grid;
}

.msp-params-extra-controls-option {
  align-items: center;
  gap: var(--msp-space-2);
  min-height: 26px;
  padding: 0 var(--msp-space-2) 0 var(--msp-space-3);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  display: flex;

  & > span:first-child:not(.msp-params-extra-controls-strip) {
    flex: 1;
  }

  &:hover, &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
    outline: none;
  }

  &[aria-selected="true"] {
    color: var(--msp-color-accent);
    font-weight: 600;
  }
}

.msp-params-extra-controls-check {
  visibility: hidden;
  flex: none;
  margin-left: auto;

  [aria-selected="true"] > & {
    visibility: visible;
  }
}

.msp-params-extra-controls-vec {
  gap: var(--msp-space-1);
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: 100%;
  display: grid;
}

.msp-params-extra-controls-matrix {
  gap: var(--msp-space-1);
  padding: var(--msp-space-1);
  grid-template-columns: repeat(4, minmax(0, 1fr));
  display: grid;
}

.msp-params-extra-controls-interval {
  align-items: center;
  gap: var(--msp-space-2);
  grid-template-columns: minmax(0, 1fr) 72px;
  width: 100%;
  display: grid;
}

.msp-params-extra-controls-intervalTrack {
  height: 16px;
  margin-left: var(--msp-space-3);
  position: relative;

  &:before {
    content: "";
    background: linear-gradient(90deg,
      var(--msp-color-pressed) var(--msp-from),
      color-mix(in oklab, var(--msp-color-text-muted), transparent 45%) var(--msp-from) var(--msp-to),
      var(--msp-color-pressed) var(--msp-to));
    border-radius: 1.5px;
    height: 3px;
    margin-top: -1.5px;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
  }
}

.msp-params-extra-controls-intervalRange {
  -webkit-appearance: none;
  appearance: none;
  pointer-events: none;
  background: none;
  width: 100%;
  margin: 0;
  position: absolute;
  inset: 0;

  &::-webkit-slider-runnable-track {
    background: none;
    height: 3px;
  }

  &::-webkit-slider-thumb {
    background: var(--msp-color-text-muted);
    -webkit-appearance: none;
    appearance: none;
    pointer-events: auto;
    cursor: pointer;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin-top: -3.5px;
  }

  &::-moz-range-track {
    background: none;
  }

  &::-moz-range-thumb {
    background: var(--msp-color-text-muted);
    pointer-events: auto;
    cursor: pointer;
    border: 0;
    border-radius: 50%;
    width: 10px;
    height: 10px;
  }

  &:focus-visible {
    outline: none;
  }
}

.msp-params-extra-controls-intervalValue {
  height: 24px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  font-variant-numeric: tabular-nums;
  text-align: right;
  line-height: 24px;
}

.msp-params-extra-controls-strip {
  width: 56px;
  height: 10px;
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  border-radius: 2px;
  flex: none;
}

.msp-params-extra-controls-stripName {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-params-extra-controls-spark {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.2px;
  vector-effect: non-scaling-stroke;
  flex: none;
  width: 56px;
  height: 14px;
}

.msp-params-extra-controls-graphEditor {
  gap: var(--msp-space-1);
  padding: var(--msp-space-1);
  display: grid;
}

.msp-params-extra-controls-graph {
  border-radius: var(--msp-radius-sm);
  background: var(--msp-color-panel);
  cursor: crosshair;
  touch-action: none;
  width: 100%;
  height: 96px;
  display: block;
}

.msp-params-extra-controls-grid {
  stroke: var(--msp-glass-edge);
  stroke-width: 1px;
  vector-effect: non-scaling-stroke;
}

.msp-params-extra-controls-curve {
  fill: none;
  stroke: var(--msp-color-text-muted);
  stroke-width: 1.5px;
  vector-effect: non-scaling-stroke;
}

.msp-params-extra-controls-point {
  fill: var(--msp-color-panel);
  stroke: var(--msp-color-text);
  stroke-width: 1.5px;
  vector-effect: non-scaling-stroke;
  cursor: grab;

  &:hover {
    fill: var(--msp-color-accent);
  }
}

.msp-params-extra-controls-graphArea {
  position: relative;
}

.msp-params-extra-controls-graphAt {
  top: var(--msp-space-1);
  right: var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  pointer-events: none;
  position: absolute;
}

.msp-params-extra-controls-graphFoot {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  display: flex;

  & > .msp-params-extra-controls-graphHint {
    flex: auto;
    min-width: 0;
  }
}

.msp-params-extra-controls-graphHint {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  margin: 0;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}
}
`)})))()}function z(e){let{open:t}=e;return s(`button`,{type:`button`,class:I.presets,ref:e=>Ye.set(t,e),"aria-label":`${e.label} presets`,"aria-haspopup":`listbox`,"aria-expanded":t,onClick:e=>{e.stopPropagation(),t.set(!t.value)},children:[o(x,{name:`swatch-book`,size:12}),`Presets`]})}function B(e){let{open:t}=e;return o(p,{when:t,children:()=>{let n=e.presets(),r=e.anchor?.()??Ye.get(t),i=o(pe,{"aria-label":r?.getAttribute(`aria-label`)??`Presets`,options:n.map(([,e],t)=>[String(t),e]),value:g(e.current,e=>e===void 0?void 0:String(e)),onPick:r=>{t.set(!1);let i=n[Number(r)];i&&e.onPick(i[0])},onClose:()=>t.set(!1),floating:!0});return r?o(he,{anchor:r,children:i}):o(`div`,{class:I.presetsList,children:i})}})}function Je(e,t,n=!1){let r=e.findIndex(([e])=>n&&e&&typeof e==`object`&&t&&typeof t==`object`?Object.entries(e).every(([e,n])=>Xe(t[e],n)):Xe(e,t));return r<0?void 0:r}var Ye,Xe;function V(){return(V=e((()=>{f(),_(),b(),fe(),L(),c(),Ye=new WeakMap,Xe=(e,t)=>JSON.stringify(e)===JSON.stringify(t)})))()}function H(e){let t=v(!1);return s(i,{children:[s(`div`,{class:I.row,children:[o(`span`,{class:I.label,children:e.head}),o(`div`,{class:I.control,children:e.field(t)})]}),o(p,{when:t,reveal:!0,children:()=>o(`div`,{class:R.under,children:e.body(()=>t.set(!1))})})]})}function U(e){return s(`button`,{type:`button`,class:R.field,"aria-expanded":e.open,"aria-label":e.label,onClick:()=>e.open.set(!e.open.value),children:[o(`span`,{class:R.fieldContent,children:e.children}),o(x,{name:`chevron-down`,size:14,class:R.chevron})]})}function Ze(e){let{param:t,binding:n}=e,r=g(n.value,e=>{let n=t.options.filter(([t])=>e?.includes(t)).map(([,e])=>e);return n.length?n.join(`, `):t.emptyValue??`None`});return o(H,{head:e.head,field:t=>o(U,{open:t,label:e.label,children:r}),body:()=>o(ne,{class:R.options,contentClass:R.optionsContent,role:`listbox`,"aria-multiselectable":`true`,"aria-label":e.label,children:t.options.map(([e,t])=>s(`button`,{type:`button`,role:`option`,class:R.option,"aria-selected":g(n.value,t=>!!t?.includes(e)),onClick:()=>{let t=n.get()??[];n.set(t.includes(e)?t.filter(t=>t!==e):[...t,e])},children:[o(`span`,{children:t}),o(x,{name:`check`,size:14,class:R.check})]}))})})}function Qe(e){let{binding:t}=e;return o(`div`,{class:R.vec,children:[`x`,`y`,`z`].map((n,r)=>o(`input`,{class:I.number,"aria-label":e.label?`${e.label} ${n}`:n,"data-tip":n,value:g(t.value,e=>W(e?.[r])),onChange:e=>{let n=e.currentTarget,i=Number(n.value),a=[...t.get()??[0,0,0]];Number.isFinite(i)&&(a[r]=i,t.set(a)),n.value=W(a[r])}}))})}function W(e){return e===void 0||!Number.isFinite(e)?``:String(Math.round(e*1e4)/1e4)}function $e(e){let{binding:t}=e,n=e=>{for(let t=0;t<16;t++)if(e[t]!==+(t%5==0))return!1;return!0};return o(H,{head:e.head,field:r=>o(U,{open:r,label:e.label,children:g(t.value,e=>e&&n(e)?`Identity`:`4 × 4 matrix`)}),body:()=>o(`div`,{class:R.matrix,children:Array.from({length:16},(n,r)=>{let i=r%4*4+Math.floor(r/4);return o(`input`,{class:I.number,"aria-label":`${e.label}, row ${Math.floor(r/4)+1}, column ${r%4+1}`,value:g(t.value,e=>W(e?.[i])),onChange:e=>{let n=e.currentTarget,r=Number(n.value),a=Array.from(t.get());Number.isFinite(r)&&(a[i]=r,t.set(a)),n.value=W(a[i])}})})})})}function et(e){let{param:t,binding:n}=e,r=t.min??0,i=t.max??1,a=t.step??(i-r)/100,c=e=>`${100*(e-r)/(i-r||1)}%`,l=a<1?Math.min(4,Math.ceil(-Math.log10(a))):0,u=t=>o(`input`,{class:R.intervalRange,type:`range`,min:String(r),max:String(i),step:String(a),"aria-label":`${e.label?`${e.label} `:``}${t===0?`from`:`to`}`,value:g(n.value,e=>String(e?.[t]??(t?i:r))),onInput:e=>{let a=Number(e.currentTarget.value),o=[...n.get()??[r,i]];o[t]=t===0?Math.min(a,o[1]):Math.max(a,o[0]),n.set(o),e.currentTarget.value=String(o[t])}});return s(`div`,{class:R.interval,children:[s(`div`,{class:R.intervalTrack,style:{"--msp-from":g(n.value,e=>c(e?.[0]??r)),"--msp-to":g(n.value,e=>c(e?.[1]??i))},children:[u(0),u(1)]}),o(`span`,{class:R.intervalValue,children:g(n.value,e=>`${(e?.[0]??r).toFixed(l)}–${(e?.[1]??i).toFixed(l)}`)})]})}function tt(e){let t=e?.colors??[];if(!t.length)return`none`;let n=t.map((e,n)=>Array.isArray(e)?{color:k(e[0]),at:e[1]}:{color:k(e),at:t.length===1?0:n/(t.length-1)});if(e?.kind===`set`){let e=n.length;return`linear-gradient(90deg, ${n.map((t,n)=>`${t.color} ${100*n/e}% ${100*(n+1)/e}%`).join(`, `)})`}return`linear-gradient(90deg, ${n.map(e=>`${e.color} ${100*e.at}%`).join(`, `)})`}function nt(e){let{param:t,binding:n}=e,r=t.presetKind??`all`,i=ot.filter(([,e])=>r===`all`?!0:r===`set`?e.type===`qualitative`:e.type!==`qualitative`),a=e=>i.find(([,t])=>JSON.stringify(t.list)===JSON.stringify(e?.colors))?.[1].label??`Custom`;return o(H,{head:e.head,field:t=>s(U,{open:t,label:e.label,children:[o(`span`,{class:R.strip,style:{background:g(n.value,tt)}}),o(`span`,{class:R.stripName,children:g(n.value,a)})]}),body:t=>o(ne,{class:R.options,contentClass:R.optionsContent,role:`listbox`,"aria-label":e.label,children:i.map(([,e])=>{let r={kind:e.type===`qualitative`?`set`:`interpolate`,colors:e.list};return s(`button`,{type:`button`,role:`option`,class:R.option,"aria-selected":g(n.value,t=>a(t)===e.label),onClick:()=>{n.set({kind:r.kind,colors:[...r.colors]}),t()},children:[o(`span`,{class:R.strip,style:{background:tt(r)}}),o(`span`,{class:R.stripName,children:e.label}),o(x,{name:`check`,size:14,class:R.check})]})})})})}function rt(e){let{binding:t}=e;return o(`input`,{class:I.input,"aria-labelledby":e.labelId,placeholder:`https://…`,value:g(t.value,e=>e?.url??``),onChange:e=>t.set(re.Url(e.currentTarget.value))})}function it(e){let{binding:t}=e,n=(e,t,n)=>(e??[]).map(([e,r],i)=>`${i?`L`:`M`}${(e*t).toFixed(1)} ${((1-r)*n).toFixed(1)}`).join(` `);return o(H,{head:e.head,field:r=>s(U,{open:r,label:e.label,children:[o(`svg`,{class:R.spark,viewBox:`0 0 56 14`,preserveAspectRatio:`none`,"aria-hidden":`true`,children:o(`path`,{d:g(t.value,e=>n(e,56,14))})}),o(`span`,{class:R.stripName,children:g(t.value,e=>`${e?.length??0} points`)})]}),body:()=>o(at,{param:e.param,binding:t,pathOf:n})})}function at(e){let{binding:t}=e,n=v(``),r=t.value,i=e.param.getPresets,a=v(!1),c=s(`svg`,{class:R.graph,viewBox:`0 0 240 96`,preserveAspectRatio:`none`,children:[[.25,.5,.75].map(e=>o(`line`,{class:R.grid,x1:String(e*240),x2:String(e*240),y1:`0`,y2:`96`})),[.25,.5,.75].map(e=>o(`line`,{class:R.grid,y1:String(e*96),y2:String(e*96),x1:`0`,x2:`240`})),o(`path`,{class:R.curve,d:g(t.value,t=>e.pathOf(t,240,96))}),o(m,{each:g(r,e=>(e??[]).map((e,t)=>t)),children:e=>o(`circle`,{class:R.point,r:`4`,cx:g(r,t=>String((t?.[e]?.[0]??0)*240)),cy:g(r,t=>String((1-(t?.[e]?.[1]??0))*96)),"data-index":String(e)})})]}),l=e=>{let t=c.getBoundingClientRect(),n=Math.min(1,Math.max(0,(e.clientX-t.left)/t.width)),r=Math.min(1,Math.max(0,1-(e.clientY-t.top)/t.height));return[Math.round(n*1e3)/1e3,Math.round(r*1e3)/1e3]};return ee(c,{start(e){let n=e.target;if(n.tagName===`circle`)return Number(n.dataset.index);let r=[...t.get()??[]],i=l(e),a=r.findIndex(([e])=>e>i[0]);r.splice(a<0?r.length:a,0,i),t.set(r)},move(e,n){let r=l(e),i=[...t.get()??[]],a=n>0?i[n-1][0]:0,o=n<i.length-1?i[n+1][0]:1;i[n]=[Math.min(o,Math.max(a,r[0])),r[1]],t.set(i)}}),C(c,`pointermove`,e=>{let t=l(e);n.set(`${t[0].toFixed(2)}, ${t[1].toFixed(2)}`)}),C(c,`dblclick`,e=>{let n=e.target;if(n.tagName!==`circle`)return;let r=Number(n.dataset.index),i=[...t.get()??[]];i.length<=2||(i.splice(r,1),t.set(i))}),C(c,`pointerleave`,()=>n.set(``)),s(`div`,{class:R.graphEditor,children:[s(`div`,{class:R.graphArea,children:[c,o(`span`,{class:R.graphAt,children:n.asReadonly})]}),s(`div`,{class:R.graphFoot,children:[o(`p`,{class:R.graphHint,children:`Drag a point · click to add · double-click to remove`}),i?o(z,{open:a,label:`Curve`}):null]}),i?o(B,{open:a,presets:i,current:g(t.value,e=>Je(i(),e)),onPick:e=>t.set(e)}):null]})}var ot;function st(){return(st=e((()=>{se(),ae(),f(),S(),y(),_(),F(),b(),te(),qe(),L(),V(),c(),ot=Object.entries(ie)})))()}var G;function ct(){return(ct=e((()=>{d(),G={bar:`msp-params-help-bar`,description:`msp-params-help-description`,ends:`msp-params-help-ends`,entry:`msp-params-help-entry`,help:`msp-params-help-help`,name:`msp-params-help-name`,scale:`msp-params-help-scale`,swatch:`msp-params-help-swatch`,table:`msp-params-help-table`,text:`msp-params-help-text`,toggle:`msp-params-help-toggle`},u(`components/params/help.module.css`,`@layer msp.components {
.msp-params-help-text {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;

  &[data-help] {
    text-decoration: underline dotted color-mix(in oklab, currentColor, transparent 45%);
    text-underline-offset: 3px;
    cursor: help;
    text-decoration-thickness: 1px;
  }
}

.msp-params-help-toggle {
  width: 16px;
  height: 16px;
  color: var(--msp-color-text-subtle);
  opacity: 0;
  border-radius: 50%;
  flex: none;
  place-items: center;
  display: grid;
  position: relative;

  &:after {
    content: "";
    width: max(24px, var(--msp-touch-target, 0px));
    height: max(24px, var(--msp-touch-target, 0px));
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  :hover > * > &, :hover > &, &[aria-expanded="true"], &:focus-visible {
    opacity: 1;
  }

  &:hover, &[aria-expanded="true"] {
    color: var(--msp-color-text);
  }
}

.msp-params-help-help {
  gap: var(--msp-space-2);
  margin: var(--msp-space-1) 0 var(--msp-space-1);
  padding: var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  font-size: var(--msp-font-size-xs);
  display: grid;
}

.msp-params-help-description {
  color: var(--msp-color-text-muted);
  margin: 0;
  line-height: 1.45;

  & code {
    padding: 0 var(--msp-space-1);
    background: var(--msp-color-control);
    font-family: var(--msp-font-mono);
    border-radius: 2px;
    font-size: .95em;
  }
}

.msp-params-help-table {
  gap: var(--msp-space-1) var(--msp-space-3);
  grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
}

.msp-params-help-entry {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  display: flex;
}

.msp-params-help-swatch {
  width: 12px;
  height: 12px;
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  border-radius: 2px;
  flex: none;
}

.msp-params-help-name {
  min-width: 0;
  color: var(--msp-color-text);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-params-help-scale {
  gap: var(--msp-space-1);
  display: grid;
}

.msp-params-help-bar {
  height: 10px;
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  border-radius: 2px;
}

.msp-params-help-ends {
  color: var(--msp-color-text-muted);
  font-variant-numeric: tabular-nums;
  justify-content: space-between;
  display: flex;
}
}
`)})))()}function lt(e,t){let n=e=>e&&(e.description||e.legend)?e:void 0;if(e.help){let r=e.help;return g(t,e=>{try{return n(r(e))}catch{return}},(e,t)=>e?.description===t?.description&&e?.legend===t?.legend)}let r=n({description:e.description,legend:e.legend});return r?v(r).asReadonly:void 0}function ut(e,t,n){if(!t)return{head:o(`span`,{class:G.text,id:n,"data-tip-overflow":``,children:e}),block:null};let r=v(!1),a=g(t,e=>!!e);return{head:s(i,{children:[o(`span`,{class:G.text,id:n,"data-tip-overflow":``,"data-help":g(a,e=>e?``:void 0),onClick:e=>{e.currentTarget.hasAttribute(`data-help`)&&(e.stopPropagation(),r.set(!r.value))},children:e}),o(p,{when:a,children:()=>o(`button`,{type:`button`,class:G.toggle,"aria-label":`About ${e}`,title:`About ${e}`,"aria-expanded":r,onClick:e=>{e.stopPropagation(),r.set(!r.value)},children:o(x,{name:`circle-help`,size:12})})})]}),block:o(dt,{help:t,open:r})}}function dt(e){return o(p,{when:e.open,reveal:!0,children:()=>o(p,{when:e.help,children:e=>s(`div`,{class:G.help,children:[e.description?o(`p`,{class:G.description,children:ft(e.description)}):null,e.legend?o(pt,{legend:e.legend}):null]})})})}function ft(e){return e.split(/(`[^`]+`)/).map(e=>e.startsWith("`")&&e.endsWith("`")&&e.length>1?o(`code`,{children:e.slice(1,-1)}):e)}function pt(e){let{legend:t}=e;return t.kind===`table-legend`?o(`ul`,{class:G.table,children:t.table.map(([e,t])=>s(`li`,{class:G.entry,children:[o(`span`,{class:G.swatch,style:{background:k(t)}}),o(`span`,{class:G.name,children:e})]}))}):s(`div`,{class:G.scale,children:[o(`span`,{class:G.bar,style:{background:tt({kind:`interpolate`,colors:t.colors})}}),s(`span`,{class:G.ends,children:[o(`span`,{children:t.minLabel}),o(`span`,{children:t.maxLabel})]})]})}function mt(){return(mt=e((()=>{f(),y(),_(),F(),b(),st(),ct(),c()})))()}function ht(e){let{form:t}=e;return o(`div`,{class:I.form,children:o(gt,{params:t.params,field:e=>({value:t.field(e),get:()=>t.values.value[e],set:n=>t.set(e,n)}),visible:e=>t.params[e].hideIf?t.visible(e):void 0,filter:_t(e.filter),place:{form:t,path:``}})})}function K(e){return Object.keys(e).some(t=>!e[t].isHidden&&e[t].type!==`value`)}function gt(e){let{params:t,filter:n,place:r}=e,{essentials:a,advanced:c}=Pe(t),l=vt(n),u=new Map,d=t=>(u.has(t)||u.set(t,e.visible(t)),u.get(t)),f=e=>{let r=d(e);return n?r?g([r,n],(n,r)=>n&&q(e,t[e],r)):g(n,n=>q(e,t[e],n)):r},p=e=>{let t=e.map(f);if(!t.some(e=>!e))return g(t,(...e)=>!e.some(Boolean))},m=i=>o(J,{name:i,param:t[i],binding:e.field(i),visible:d(i),filter:n,place:{form:r.form,path:`${r.path}/${i}`}}),h=(e,t)=>e.flatMap(e=>e.category?[o(`div`,{hidden:p(e.names),children:o($,{title:e.category,state:r.form.fold(`${r.path}#${t}${e.category}`),force:l,children:()=>e.names.map(m)})})]:e.names.map(m));return!a.length||!c.length?o(i,{children:h(a.length?a:c,``)}):s(i,{children:[h(a,``),o(`div`,{hidden:p(c.flatMap(e=>e.names)),children:o($,{title:`Advanced`,state:r.form.fold(`${r.path}#advanced`),force:l,children:()=>h(c,`advanced/`)})})]})}function _t(e){return e&&g(e,e=>e.trim().toLowerCase())}function vt(e){return e&&g(e,e=>e.length>0)}function yt(e,t){return t.label||ue(e)}function bt(e,t){let n=t.trim().toLowerCase();return Object.keys(e).some(t=>!e[t].isHidden&&q(t,e[t],n))}function q(e,t,n){return!n||yt(e,t).toLowerCase().includes(n)||t.description?.toLowerCase().includes(n)?!0:t.type===`group`?Object.keys(t.params).some(e=>q(e,t.params[e],n)):t.type===`mapped`&&t.select.options.some(([e])=>{let r=t.map(e);return r.type===`group`?Object.keys(r.params).some(e=>q(e,r.params[e],n)):q(e,r,n)})}function J(e){let{name:t,param:n,binding:r,filter:i,place:a}=e,c=yt(t,n),l=e.visible,u=i?l?g([l,i],(e,r)=>e&&q(t,n,r)):g(i,e=>q(t,n,e)):l,d=u&&g(u,e=>!e),f=i&&g(i,e=>c.toLowerCase().includes(e)?``:e);if(n.type===`group`)return o(`div`,{hidden:d,children:o(Ot,{label:c,param:n,binding:r,filter:f,force:vt(i),place:a})});let p=T(`msp-field`),{head:m,block:h}=ut(c,lt(n,r.value),p),_=e=>s(`div`,{hidden:d,children:[e,h]});if(n.type===`mapped`)return _(At(n)?o(jt,{label:c,labelId:p,head:m,description:n.description,param:n,binding:r,place:a}):o(Mt,{label:c,head:m,param:n,binding:r,filter:f,force:vt(i),place:a}));if(n.type===`select`)return _(o(Z,{label:c,head:m,description:n.description,options:n.options,binding:r}));if(n.type===`color`)return _(o(xt,{label:c,labelId:p,head:m,description:n.description,binding:r}));if(n.type===`multi-select`)return _(o(Ze,{head:m,label:c,param:n,binding:r}));if(n.type===`mat4`)return _(o($e,{head:m,label:c,param:n,binding:r}));if(n.type===`line-graph`)return _(o(it,{head:m,label:c,param:n,binding:r}));if(n.type===`color-list`)return _(o(nt,{head:m,label:c,param:n,binding:r}));if(n.type===`object-list`)return _(o(Ft,{head:m,label:c,param:n,binding:r}));if(n.type===`conditioned`)return _(o(Nt,{head:m,label:c,param:n,binding:r,place:a}));if(n.type===`script`)return _(o(Pt,{head:m,label:c,binding:r}));if(n.type===`converted`){let s={value:g(r.value,e=>n.fromValue(e)),get:()=>n.fromValue(r.get()),set:e=>r.set(n.toValue(e))},l={...n.converted,label:n.converted.label??c};return o(J,{name:t,param:l,binding:s,visible:e.visible,filter:i,place:a})}return n.type===`value`?null:_(s(`div`,{class:I.row,children:[o(`span`,{class:I.label,children:m}),o(`div`,{class:I.control,children:Ct(n,r,p,c)})]}))}function xt(e){let{binding:n,labelId:r}=e,a=v(!1),c,l=document.createTextNode(``),u=s(i,{children:[s(`div`,{class:I.row,children:[o(`span`,{class:I.label,children:e.head??o(`span`,{id:r,children:e.label})}),o(`div`,{class:I.control,children:s(`button`,{type:`button`,class:I.color,"aria-labelledby":`${r} ${r}-value`,"aria-expanded":a,onClick:()=>a.set(!a.value),children:[o(`span`,{class:I.swatch,ref:e=>c=e}),o(`span`,{class:I.channels,id:`${r}-value`,"data-tip-overflow":``,children:l})]})})]}),o(p,{when:a,reveal:!0,children:()=>o(We,{value:n.value,onChange:e=>n.set(e)})})]});return t([n.value],()=>{let e=n.get();D(c,`background`,k(e)),ke(l,A(e))}),u}function St(e){let{param:t,binding:n,labelId:r}=e,i=t.type===`file-list`,a=v(!1),c=e=>{e.length&&n.set(i?e.map(e=>re.File(e)):re.File(e[0]))},l=o(`input`,{type:`file`,hidden:!0,multiple:i,accept:t.accept,onChange:e=>{c([...e.currentTarget.files??[]]),e.currentTarget.value=``}}),u=g(n.value,e=>(e?Array.isArray(e)?e:[e]:[]).map(e=>e.name));return s(`div`,{class:I.file,"data-dragging":g(a.asReadonly,e=>e?``:void 0),children:[o(`button`,{type:`button`,class:I.filePick,"aria-labelledby":r?`${r} ${r}-value`:void 0,onClick:()=>l.click(),onDragOver:e=>{e.preventDefault(),a.set(!0)},onDragLeave:()=>a.set(!1),onDrop:e=>{e.preventDefault(),e.stopPropagation(),a.set(!1),c([...e.dataTransfer?.files??[]])},children:o(`span`,{class:I.fileNames,id:r?`${r}-value`:void 0,"data-empty":g(u,e=>e.length?void 0:``),children:g(u,e=>e.length===0?i?`Select files…`:`Select a file…`:e.length===1?e[0]:`${e.length} files · ${e.join(`, `)}`)})}),o(p,{when:g(u,e=>e.length>0),children:()=>o(`button`,{type:`button`,class:I.fileClear,"aria-label":`Clear`,title:`Clear`,onClick:()=>n.set(null),children:o(x,{name:`x`,size:13})})}),l]})}function Ct(e,t,n,r){switch(e.type){case`boolean`:return o(Tt,{binding:t,labelId:n});case`number`:return o(Et,{param:e,binding:t,labelId:n});case`text`:return o(wt,{binding:t,labelId:n,placeholder:e.placeholder,multiline:e.multiline});case`file`:case`file-list`:return o(St,{param:e,binding:t,labelId:n});case`vec3`:return o(Qe,{param:e,binding:t,label:r});case`interval`:return o(et,{param:e,binding:t,label:r});case`url`:return o(rt,{binding:t,labelId:n});default:return o(`span`,{class:I.unsupported,children:e.type})}}function wt(e){let{binding:n}=e,r=e.multiline?o(`textarea`,{class:I.textarea,rows:3,"aria-labelledby":e.labelId,placeholder:e.placeholder,onChange:e=>n.set(e.currentTarget.value)}):o(`input`,{class:I.input,"aria-labelledby":e.labelId,placeholder:e.placeholder,onChange:e=>n.set(e.currentTarget.value)});return t([n.value],()=>Y(r,n.get())),r}function Y(e,t){let n=t==null?``:String(t);e.value!==n&&(e.value=n)}function Tt(e){let{binding:n}=e,r=o(`button`,{type:`button`,role:`switch`,class:I.switch,"aria-labelledby":e.labelId,onClick:()=>n.set(!n.get()),children:o(`span`,{class:I.knob})});return t([n.value],()=>Ae(r,`aria-checked`,String(!!n.get()))),r}function Et(e){let{param:n,binding:i,labelId:a}=e;if(n.min===void 0||n.max===void 0){let e=o(`input`,{class:I.input,type:`text`,inputMode:`decimal`,"aria-labelledby":a,onChange:e=>{let t=Dt(e.currentTarget.value);Number.isFinite(t)&&i.set(t),e.currentTarget.value=X(Number.isFinite(t)?t:i.get(),n.step)}});return t([i.value],()=>Y(e,X(i.get(),n.step))),e}let c=n.min,u=n.max,d=l(NaN,(e,t)=>Object.is(e,t));r(d,e=>{Number.isNaN(e)||i.set(e)});let f,p,m=s(`div`,{class:I.slider,children:[o(`input`,{class:I.range,type:`range`,"aria-labelledby":a,min:String(c),max:String(u),step:String(n.step??(u-c)/100),ref:e=>f=e,onInput:e=>d.offer(Number(e.currentTarget.value))}),o(`input`,{class:I.number,"aria-labelledby":a,ref:e=>p=e,onChange:e=>{let t=Dt(e.currentTarget.value),r=Number.isFinite(t)?Math.min(u,Math.max(c,t)):i.get();Number.isFinite(t)&&i.set(r),e.currentTarget.value=X(r,n.step)}})]});return t([i.value],()=>{let e=i.get();Y(f,e),D(f,`--msp-progress`,`${100*(e-c)/(u-c||1)}%`),Y(p,X(e,n.step))}),m}function X(e,t){if(!Number.isFinite(e))return``;if(t===void 0)return String(Number(e.toFixed(4)));let n=t<1?Math.min(4,Math.ceil(-Math.log10(t))):0;return e.toFixed(n)}function Dt(e){let t=e.trim().replace(`,`,`.`);return t===``?NaN:Number(t)}function Z(e){let{options:t,binding:n}=e,r=v(!1),a=g(n.value,e=>String(t.findIndex(t=>t[0]===e))),c=t.map(([,e,t],n)=>[String(n),e,t]),l;return s(i,{children:[s(`div`,{class:I.row,children:[o(`span`,{class:I.label,children:e.head??e.label}),s(`div`,{class:I.control,ref:e=>l=e,children:[o(de,{size:`sm`,open:r,"aria-label":e.label,label:g(a,e=>c[Number(e)]?.[1]??``)}),e.after]})]}),o(p,{when:r,children:()=>{let i=o(pe,{options:c,value:a,onPick:e=>{r.set(!1),n.set(t[Number(e)][0])},onClose:()=>r.set(!1),floating:!0,"aria-label":e.label});return l?o(he,{anchor:l,children:i}):i}})]})}function Ot(e){let{param:t,binding:n,filter:r,place:a}=e;if(!K(t.params))return null;let c=t.presets,l=e=>o(Q,{params:e,binding:n,filter:r,place:a}),u=a.form.fold(`${a.path}#open`,!!t.isExpanded),d=e=>n.set({...n.get()??{},...e}),f=c?g(n.value,e=>Je(c,e,!0)):void 0;if(t.isFlat)return s(i,{children:[c&&f?o(kt,{label:e.label,presets:c,current:f,onPick:d}):null,l(t.params)]});let p=typeof t.pivot==`string`&&t.params[t.pivot]?t.pivot:void 0;if(p&&(!c||!f)){let{[p]:n,...r}=t.params;return s(i,{children:[l({[p]:n}),K(r)?o($,{title:e.label,state:u,force:e.force,children:()=>l(r)}):null]})}if(!c||!f)return o($,{title:e.label,state:u,force:e.force,children:()=>l(t.params)});let m=v(!1),h=v(!1);return o($,{title:e.label,state:u,force:e.force,openWhen:h.asReadonly,meta:g(f,e=>e===void 0?``:c[e][1]),action:o(z,{open:m,label:e.label}),below:()=>o(B,{open:m,presets:()=>c,current:f,onPick:e=>{d(e),h.set(!0)}}),children:()=>l(t.params)})}function kt(e){let t=v(!1),n;return s(i,{children:[s(`div`,{class:I.row,children:[o(`span`,{class:I.label,children:`Presets`}),o(`div`,{class:I.control,ref:e=>n=e,children:o(de,{size:`sm`,open:t,"aria-label":`${e.label} presets`,label:g(e.current,t=>t===void 0?`Custom`:e.presets[t][1])})})]}),o(B,{open:t,presets:()=>e.presets,current:e.current,onPick:e.onPick,anchor:()=>n})]})}function At(e){let t=e.select.options.map(e=>e[0]).sort();return t.length===2&&t[0]===`off`&&t[1]===`on`}function jt(e){let{param:t,binding:n,place:r}=e,a=g(n.value,e=>e?.name===`on`),c=r.form.fold(`${r.path}#params`),l=e=>n.set({name:e,params:Lt(t.map(e))}),u={value:a,get:()=>n.get()?.name===`on`,set:e=>{l(e?`on`:`off`),e||c.set(!1)}},d=t.map(`on`),f=d.type===`group`&&K(d.params),m={value:g(n.value,e=>e?.params),get:()=>n.get()?.params,set:e=>n.set({name:`on`,params:e})};return s(i,{children:[s(`div`,{class:I.row,children:[o(`span`,{class:I.label,children:e.head??o(`span`,{id:e.labelId,children:e.label})}),s(`div`,{class:I.control,children:[o(Tt,{binding:u,labelId:e.labelId}),f?o(p,{when:a,children:()=>o(`button`,{type:`button`,class:I.settings,title:`${e.label} settings`,"aria-label":`${e.label} settings`,"aria-expanded":c,onClick:()=>c.set(!c.value),children:o(x,{name:`sliders-horizontal`,size:14})})}):null]})]}),f?o(p,{when:g([a,c.asReadonly],(e,t)=>e&&t),children:()=>o(`div`,{class:I.subSettings,children:o(Q,{params:d.params,binding:m,place:{form:r.form,path:`${r.path}:on`}})})}):null]})}function Mt(e){let{param:t,binding:n,place:r}=e,i=g(n.value,e=>e?.name),a={value:i,get:()=>n.get()?.name,set:e=>{let r=t.map(e);n.set({name:e,params:Lt(r)})}},c=g(i,e=>{if(e===void 0)return!1;let n=t.map(e);return n.type===`group`&&!n.isFlat&&K(n.params)}),l=r.form.fold(`${r.path}#params`),u=e.force?g([l.asReadonly,e.force],(e,t)=>e||t):l.asReadonly,d=o(p,{when:c,children:()=>o(`button`,{type:`button`,class:`${I.settings} ${I.afterSelect}`,title:`${e.label} settings`,"aria-label":`${e.label} settings`,"aria-expanded":u,onClick:()=>l.set(!l.value),children:o(x,{name:`sliders-horizontal`,size:14})})});return s(`div`,{class:I.mapped,children:[o(Z,{label:e.label,head:e.head,options:t.select.options,binding:a,after:d}),o(p,{when:i,children:i=>{let a=t.map(i),s={value:g(n.value,e=>e?.params),get:()=>n.get()?.params,set:e=>n.set({name:i,params:e})},c={form:r.form,path:`${r.path}:${i}`};return a.type===`group`?a.isFlat?o(Q,{params:a.params,binding:s,filter:e.filter,place:c}):K(a.params)?o(p,{when:u,reveal:!0,children:()=>o(Q,{params:a.params,binding:s,filter:e.filter,place:c,nested:!0})}):null:o(J,{name:i,param:a,binding:s,filter:e.filter,place:c})}})]})}function Q(e){let{params:t,binding:n}=e;return o(`div`,{class:e.nested?I.nested:I.fields,children:o(gt,{params:t,field:e=>({value:g(n.value,t=>t?.[e]),get:()=>n.get()?.[e],set:t=>n.set({...n.get(),[e]:t})}),visible:e=>{let r=t[e].hideIf;if(r)return g(n.value,e=>!r(e??{}))},filter:e.filter,place:e.place})})}function Nt(e){let{param:t,binding:n,place:r}=e,i=g(n.value,e=>String(t.conditionForValue(e))),a={value:i,get:()=>String(t.conditionForValue(n.get())),set:e=>n.set(t.conditionedValue(n.get(),e))};return s(`div`,{class:I.mapped,children:[o(Z,{label:e.label,head:e.head,options:t.select.options,binding:a}),o(p,{when:i,children:e=>o(`div`,{class:I.nested,children:o(J,{name:e,param:t.conditionParams[e],binding:n,place:{form:r.form,path:`${r.path}:${e}`}})})})]})}function Pt(e){let{binding:t}=e,n=e=>({value:g(t.value,t=>t?.[e]??``),get:()=>t.get()?.[e],set:n=>t.set({...t.get(),[e]:n})}),r=n(`expression`),i=T(`msp-field`);return s(`div`,{class:I.mapped,children:[o(Z,{label:e.label,head:e.head,options:Rt,binding:n(`language`)}),o(`div`,{class:I.nested,children:s(`div`,{class:I.row,children:[o(`span`,{class:I.label,id:i,children:`Expression`}),o(`div`,{class:I.control,children:o(`textarea`,{class:I.textarea,"aria-labelledby":i,rows:3,spellcheck:!1,value:r.value,onChange:e=>r.set(e.currentTarget.value)})})]})})]})}function Ft(e){let{param:t,binding:n}=e,r=t.presets,a=v(!1),c=g(n.value,e=>e??[]),l=(e,t)=>{let r=[...n.get()??[]];r[e]=t,n.set(r)};return s(i,{children:[s(`div`,{class:I.row,children:[o(`span`,{class:I.label,children:e.head}),o(`div`,{class:I.control,children:o(`span`,{class:I.count,children:g(c,e=>e.length===1?`1 item`:`${e.length} items`)})})]}),s(`div`,{class:I.items,children:[o(m,{each:g(c,e=>e.map((e,t)=>t)),children:e=>o(It,{param:t,binding:n,index:e,replace:l})}),s(`div`,{class:I.itemActions,children:[s(`button`,{type:`button`,class:I.itemAdd,"aria-label":`Add to ${e.label}`,onClick:()=>n.set([...n.get()??[],t.ctor()]),children:[o(x,{name:`plus`,size:13}),`Add`]}),r?o(z,{open:a,label:e.label}):null]}),r?o(B,{open:a,presets:()=>r,current:g(n.value,e=>Je(r,e)),onPick:e=>n.set(e)}):null]})]})}function It(e){let{param:t,binding:n,index:r}=e,i=v(!1);return s(`div`,{class:I.item,"data-open":g(i.asReadonly,e=>e?``:void 0),children:[s(`div`,{class:I.itemRow,onClick:()=>i.set(!i.value),children:[o(`span`,{class:I.itemLabel,children:g(n.value,e=>e?.[r]===void 0?``:t.getLabel(e[r]))}),o(`button`,{type:`button`,class:I.settings,title:`Edit`,"aria-label":`Edit`,"aria-expanded":i,onClick:e=>{e.stopPropagation(),i.set(!i.value)},children:o(x,{name:`sliders-horizontal`,size:14})}),o(`button`,{type:`button`,class:I.settings,title:`Remove`,"aria-label":`Remove`,onClick:e=>{e.stopPropagation(),n.set((n.get()??[]).filter((e,t)=>t!==r))},children:o(x,{name:`x`,size:13})})]}),o(p,{when:i,reveal:!0,children:()=>{let i=new Fe(t.element,n.get()?.[r],{onChange:t=>e.replace(r,t)});return o(`div`,{class:I.itemForm,children:o(ht,{form:i})})}})]})}function Lt(e){if(e.type===`group`){let t={};for(let n of Object.keys(e.params))t[n]=e.params[n].defaultValue;return t}return e.defaultValue}function $(e){let t=e.state??v(!!e.open),n=e.openWhen;if(n){let e=n.value;r(n,n=>{n&&!e&&t.set(!0),e=n})}let i=e.force?g([t.asReadonly,e.force],(e,t)=>e||t):t.asReadonly;return s(`div`,{class:I.collapsible,children:[s(`div`,{class:I.collapsibleBar,children:[s(`button`,{type:`button`,class:I.collapsibleHeader,"aria-expanded":i,onClick:()=>t.set(!t.value),children:[e.title,o(x,{name:`chevron-right`,size:12,class:I.chevron}),e.meta?o(`span`,{class:I.collapsibleMeta,children:e.meta}):null]}),e.action]}),e.below?.(),o(p,{when:i,reveal:!0,children:()=>o(`div`,{class:I.nested,children:e.children()})})]})}var Rt;function zt(){return(zt=e((()=>{se(),oe(),f(),E(),n(),Ie(),y(),fe(),F(),b(),L(),st(),mt(),V(),_(),c(),Rt=[[`mol-script`,`MolScript`],[`pymol`,`PyMOL`],[`vmd`,`VMD`],[`jmol`,`Jmol`]]})))()}export{E as C,ye as D,Te as E,T as O,xe as S,be as T,D as _,B as a,Ce as b,We as c,Fe as d,Ie as f,Me as g,je as h,z as i,k as l,Ae as m,zt as n,V as o,Ne as p,bt as r,Ke as s,ht as t,F as u,ke as v,we as w,ve as x,w as y};