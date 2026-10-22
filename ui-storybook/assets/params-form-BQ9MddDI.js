import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{E as t,b as n,g as r,i,m as a,n as o,r as s,t as c,v as l}from"./jsx-runtime-Dut-27nP.js";import{n as u,r as d}from"./registry-D35yV2Tb.js";import{i as f,n as p,t as m}from"./control-flow-BGkEkAG8.js";import{S as h,b as g,x as _}from"./work-queue-DoxU-HjK.js";import{n as v,t as y}from"./observable-state-C67cgDrf.js";import{n as b,t as x}from"./icon-CrwnZGU9.js";import{i as ee,s as S,t as te}from"./scoped-CYrGtqEo.js";import{n as ne,t as re}from"./scroll-area-C3WxaIdw.js";import{E as ie,O as ae,U as oe,V as se,et as ce,it as le,n as ue,t as de}from"./param-definition-xUqfTrAa.js";import{a as fe,o as pe,r as me,s as he,t as ge}from"./select-iIBCxyFA.js";import{n as _e,t as ve}from"./names-Nov7jsHm.js";function C(e=document){let t=e.activeElement;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;if(t&&t!==e.body&&t!==e.documentElement&&!(t.shadowRoot&&!t.shadowRoot.activeElement&&t.tabIndex<0))return t}function ye(e){return[...e.querySelectorAll(Oe)].filter(e=>!e.closest(`[hidden], [inert]`))}function be(e,t){if(e.key!==`Tab`||e.defaultPrevented)return;let n=ye(t);if(!n.length)return;let r=C(t.ownerDocument),i=!!r&&t.contains(r);e.shiftKey&&(!i||r===n[0])?(e.preventDefault(),n[n.length-1].focus()):!e.shiftKey&&(!i||r===n[n.length-1])&&(e.preventDefault(),n[0].focus())}function xe(e){let t=C();return n=>{let r=C();if(r&&!(n&&n.contains(r)))return;let i=t?.isConnected?t:e?.();i?.isConnected&&i.focus({preventScroll:!0})}}function Se(e){if(!e)return!1;try{return e.matches(`:focus-visible`)}catch{return C(e.ownerDocument)===e}}function Ce(e){return[...e.querySelectorAll(ke)].filter(e=>!e.hasAttribute(`disabled`)&&e.getAttribute(`aria-disabled`)!==`true`&&!e.closest(`[hidden]`))}function we(e,t=!1){let n=Ce(e),r=(t?n.find(e=>e.getAttribute(`aria-checked`)===`true`):void 0)??n[0];return r?.focus(),!!r}function Te(e){if(e.defaultPrevented)return;let t=e.currentTarget,n=Ce(t);if(!n.length)return;let r=n.indexOf(C(t.ownerDocument)),i=n.length,a;switch(e.key){case`ArrowDown`:a=n[r<0?0:(r+1)%i];break;case`ArrowUp`:a=n[r<0?i-1:(r-1+i)%i];break;case`Home`:a=n[0];break;case`End`:a=n[i-1];break;default:return}e.preventDefault(),a.focus()}function Ee(e){let t=()=>[...e.querySelectorAll(`[role="tab"]`)].filter(e=>!e.closest(`[hidden]`)),n=()=>{let n=t(),r=C(e.ownerDocument),i=n.find(e=>e===r)??n.find(e=>e.getAttribute(`aria-selected`)===`true`)??n[0];for(let e of n){let t=e===i?0:-1;e.tabIndex!==t&&(e.tabIndex=t)}},r=S(e,`keydown`,e=>{if(e.defaultPrevented)return;let n=t(),r=n.indexOf(e.target);if(r<0)return;let i;switch(e.key){case`ArrowDown`:case`ArrowRight`:i=n[(r+1)%n.length];break;case`ArrowUp`:case`ArrowLeft`:i=n[(r-1+n.length)%n.length];break;case`Home`:i=n[0];break;case`End`:i=n[n.length-1];break;default:return}e.preventDefault(),i.focus()}),i=S(e,`focusin`,n),a=new MutationObserver(n);return a.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`aria-selected`]}),n(),()=>{r(),i(),a.disconnect()}}function De(e=`msp`){return`${e}-${++Ae}`}var Oe,ke,Ae;function je(){return(je=e((()=>{ee(),Oe=`a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]), [contenteditable="true"]`,ke=`[role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"]`,Ae=0})))()}function w(e,t){e.data!==t&&(e.data=t)}function T(e,t,n){if(n==null||n===!1){e.hasAttribute(t)&&e.removeAttribute(t);return}let r=n===!0?``:String(n);e.getAttribute(t)!==r&&e.setAttribute(t,r)}function Me(e,t,n){e.classList.toggle(t,n)}function E(e,t,n){let r=e.style;n?r.getPropertyValue(t)!==n&&r.setProperty(t,n):r.getPropertyValue(t)&&r.removeProperty(t)}function Ne(e,t){let n=t?``:`none`;e.style.display!==n&&(e.style.display=n)}function Pe(){return(Pe=e((()=>{})))()}function Fe(e){let t=t=>{let n={names:[]},r=new Map;for(let i of Object.keys(e)){let a=e[i];if(a.isHidden||a.type===`value`||!!a.isEssential!==t)continue;if(!a.category){n.names.push(i);continue}let o=r.get(a.category);o||(o={category:a.category,names:[]},r.set(a.category,o)),o.names.push(i)}let i=[...r.values()].sort((e,t)=>e.category<t.category?-1:1);return n.names.length?[n,...i]:i};return{essentials:t(!0),advanced:t(!1)}}var Ie;function Le(){return(Le=e((()=>{ue(),y(),_(),Ie=class{#e;#t;#n=new Map;#r=new Map;constructor(e,t=de.getDefaultValues(e),n={}){this.params=e,this.options=n,this.#t=de.getDefaultValues(e),this.#e=v({...this.#t,...t},{compare:Object.is})}get values(){return this.#e.asReadonly}field(e){let t=this.#n.get(e);return t||(t=g(this.#e.asReadonly,t=>t[e]),this.#n.set(e,t)),t}visible(e){let t=this.params[e];return t.hideIf?g(this.#e.asReadonly,e=>!t.hideIf(e)):g(this.#e.asReadonly,()=>!0)}set(e,t){let n=this.#e.value;if(Object.is(n[e],t))return;let r={...n,[e]:t};this.#e.set(r),this.options.onChange?.(r,e)}load(e){this.#e.set({...this.#t,...e})}reset(){let e=this.#e.value,t={...this.#t};this.#e.set(t);for(let n of Object.keys(this.params))de.isParamEqual(this.params[n],e[n],t[n])||this.options.onChange?.(t,n)}layout(){let e=[],t=[];for(let n of Object.keys(this.params)){let r=this.params[n];r.isHidden||(r.isEssential?e.push(n):t.push(n))}return e.length?{essentials:e,advanced:t}:{essentials:t,advanced:[]}}fold(e,t=!1){let n=this.#r.get(e);return n||(n=v(t),this.#r.set(e,n)),n}}})))()}var D;function Re(){return(Re=e((()=>{d(),D={custom:`msp-color-color-picker-custom`,field:`msp-color-color-picker-field`,greys:`msp-color-color-picker-greys`,marker:`msp-color-color-picker-marker`,palette:`msp-color-color-picker-palette`,picker:`msp-color-color-picker-picker`,preview:`msp-color-color-picker-preview`,swatch:`msp-color-color-picker-swatch`,text:`msp-color-color-picker-text`},u(`components/color/color-picker.module.css`,`@layer msp.components {
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
`)})))()}function ze(e){let t=e>>16&255,n=e>>8&255,r=e&255,i=(Math.max(t,n,r)+Math.min(t,n,r))/510,a=Math.round(7*(1-i)),o=7-a,s=[];for(let t=a;t>0;t--)s.push(A(e,.9*t/a));s.push(e);for(let t=1;t<=o;t++)s.push(A(e,-.85*t/o));return s}function O(e){return`#${(e>>>0&16777215).toString(16).padStart(6,`0`)}`}function k(e){return`${e>>16&255}, ${e>>8&255}, ${e&255}`}function Be(e){let t=e.trim().toLowerCase();if(!t)return;let n=/^(?:#|0x)?([0-9a-f]{3}|[0-9a-f]{6})$/.exec(t);if(n){let e=n[1].length===3?n[1].replace(/./g,e=>e+e):n[1];return Number.parseInt(e,16)}let r=/^(rgba?|hsla?)?\s*\(?\s*([^()]*?)\s*\)?$/.exec(t);if(r){let e=r[2].split(/\s*[,;/\s]\s*/).filter(Boolean);if(e.length===3||e.length===4){let t=e.slice(0,3);if(t.every(e=>/^[+]?(\d+\.?\d*|\.\d+)%?$/.test(e))){if(r[1]?.startsWith(`hsl`))return Ve(t);let e=t.some(e=>e.endsWith(`%`)),n=t.map(e=>Number.parseFloat(e)),i=!e&&n.every(e=>e<=1)&&t.some(e=>e.includes(`.`)),a=t=>e?t*255/100:i?t*255:t;return!e&&!i&&n.some(e=>e>255)?void 0:j(M(a(n[0])),M(a(n[1])),M(a(n[2])))}}}let i=t.replace(/[\s_-]/g,``);return Object.hasOwn(ve,i)?ve[i]:void 0}function Ve(e){let t=(Number.parseFloat(e[0])%360+360)%360/60,n=Math.min(1,Number.parseFloat(e[1])/100),r=Math.min(1,Number.parseFloat(e[2])/100),i=(1-Math.abs(2*r-1))*n,a=i*(1-Math.abs(t%2-1)),o=r-i/2,[s,c,l]=t<1?[i,a,0]:t<2?[a,i,0]:t<3?[0,i,a]:t<4?[0,a,i]:t<5?[a,0,i]:[i,0,a];return j(M((s+o)*255),M((c+o)*255),M((l+o)*255))}function A(e,t){let n=t>0?255:0,r=Math.abs(t),i=t=>{let i=e>>t&255;return Math.round(i+(n-i)*r)<<t};return i(16)|i(8)|i(0)}function He(e){let t=e*6%6,n=t-Math.floor(t),r=M(n*255),i=255-r;switch(Math.floor(t)){case 0:return j(255,r,0);case 1:return j(i,255,0);case 2:return j(0,255,r);case 3:return j(0,i,255);case 4:return j(r,0,255);default:return j(255,0,i)}}function Ue(e,t){let n=He(Math.max(0,Math.min(1,e))),r=Math.max(0,Math.min(1,t));return r<.5?A(n,N*(1-r/.5)):A(n,-.9*((r-.5)/.5))}function We(e){let t=e>>16&255,n=e>>8&255,r=e&255,i=Math.max(t,n,r),a=Math.min(t,n,r);if(i-a<16)return{greys:!0,x:(t+n+r)/765,y:.5};let o=i-a,s=i===t?((n-r)/o+6)%6:i===n?(r-t)/o+2:(t-n)/o+4,c=(i+a)/510,l=c>=.5?.5*(1-(2*c-1)/N):.5+.5*(1-2*c)/N;return{greys:!1,x:s/6,y:Math.max(0,Math.min(1,l))}}function Ge(e){let t=Ke(e.value),n=g(t,We),r=0,i,c=v(0),l=!1,u=g(c.asReadonly,ze);a(t,e=>{r=e,l||c.set(e),i&&he(i)!==i&&(i.value=k(e))});let d=t=>n=>{let r=r=>{let i=n.getBoundingClientRect();e.onChange(t((r.clientX-i.left)/i.width,(r.clientY-i.top)/i.height))};te(n,{start(e){if(e.button===0)return r(e),!0},move:r})},f=e=>{let t=e<.03?0:e>.97?255:M(e*255);return j(t,t,t)};return s(`div`,{class:D.picker,children:[o(`div`,{class:D.field,"aria-hidden":`true`,ref:d(Ue),children:o(`span`,{class:D.marker,hidden:g(n,e=>e.greys),style:{left:g(n,e=>`${e.x*100}%`),top:g(n,e=>`${e.y*100}%`)}})}),o(`div`,{class:D.greys,"aria-hidden":`true`,ref:d(e=>f(e)),children:o(`span`,{class:D.marker,hidden:g(n,e=>!e.greys),style:{left:g(n,e=>`${e.x*100}%`),top:`50%`}})}),o(`div`,{class:D.palette,role:`listbox`,"aria-label":`Palette`,children:qe.map(n=>o(`button`,{type:`button`,role:`option`,class:D.swatch,style:{background:O(n)},"aria-label":k(n),"aria-selected":g(t,e=>e===n),onClick:()=>e.onChange(n)}))}),o(`div`,{class:D.palette,role:`listbox`,"aria-label":`Weights`,children:[0,1,2,3,4,5,6,7].map(n=>{let r=g(u,e=>e[n]);return o(`button`,{type:`button`,role:`option`,class:D.swatch,style:{background:g(r,O)},"aria-label":g(r,k),"aria-selected":g([r,t],(e,t)=>e===t),onClick:()=>{l=!0,e.onChange(ze(c.value)[n]),l=!1}})})}),s(`div`,{class:D.custom,children:[o(`span`,{class:D.preview,style:{background:g(t,O)}}),o(`input`,{ref:e=>{i=e,e.value=k(r)},type:`text`,class:D.text,"aria-label":`Color`,placeholder:`r, g, b · #hex · rgb() · name`,"data-tip":`r, g, b; hex, rgb(), hsl() or a name`,spellcheck:!1,onInput:t=>{let n=Be(t.currentTarget.value);n!==void 0&&e.onChange(n)},onKeyDown:e=>{e.key===`Enter`&&(e.currentTarget.value=k(r))},onBlur:e=>{e.currentTarget.value=k(r)}})]})]})}function Ke(e){if(h(e))return e;let t=v(0);return r(e,e=>t.set(e)),t.asReadonly}var qe,j,M,N;function P(){return(P=e((()=>{_e(),n(),ee(),y(),_(),Re(),c(),qe=[15026253,16214805,16762173,4630360,1222036,37119,7231183,14041247],j=(e,t,n)=>e<<16|t<<8|n,M=e=>Math.max(0,Math.min(255,Math.round(e))),N=.9})))()}var F;function I(){return(I=e((()=>{d(),F={afterSelect:`msp-params-params-form-afterSelect`,channels:`msp-params-params-form-channels`,chevron:`msp-params-params-form-chevron`,collapsible:`msp-params-params-form-collapsible`,collapsibleBar:`msp-params-params-form-collapsibleBar`,collapsibleHeader:`msp-params-params-form-collapsibleHeader`,collapsibleMeta:`msp-params-params-form-collapsibleMeta`,color:`msp-params-params-form-color`,control:`msp-params-params-form-control`,count:`msp-params-params-form-count`,fields:`msp-params-params-form-fields`,file:`msp-params-params-form-file`,fileClear:`msp-params-params-form-fileClear`,fileNames:`msp-params-params-form-fileNames`,filePick:`msp-params-params-form-filePick`,form:`msp-params-params-form-form`,input:`msp-params-params-form-input`,item:`msp-params-params-form-item`,itemActions:`msp-params-params-form-itemActions`,itemAdd:`msp-params-params-form-itemAdd`,itemForm:`msp-params-params-form-itemForm`,itemLabel:`msp-params-params-form-itemLabel`,itemRow:`msp-params-params-form-itemRow`,items:`msp-params-params-form-items`,knob:`msp-params-params-form-knob`,label:`msp-params-params-form-label`,mapped:`msp-params-params-form-mapped`,nested:`msp-params-params-form-nested`,number:`msp-params-params-form-number`,presets:`msp-params-params-form-presets`,presetsList:`msp-params-params-form-presetsList`,range:`msp-params-params-form-range`,row:`msp-params-params-form-row`,select:`msp-params-params-form-select`,settings:`msp-params-params-form-settings`,slider:`msp-params-params-form-slider`,subSettings:`msp-params-params-form-subSettings`,swatch:`msp-params-params-form-swatch`,switch:`msp-params-params-form-switch`,textarea:`msp-params-params-form-textarea`,unsupported:`msp-params-params-form-unsupported`},u(`components/params/params-form.module.css`,`@layer msp.components {
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
`)})))()}var L;function Je(){return(Je=e((()=>{d(),L={check:`msp-params-extra-controls-check`,chevron:`msp-params-extra-controls-chevron`,curve:`msp-params-extra-controls-curve`,field:`msp-params-extra-controls-field`,fieldContent:`msp-params-extra-controls-fieldContent`,graph:`msp-params-extra-controls-graph`,graphArea:`msp-params-extra-controls-graphArea`,graphAt:`msp-params-extra-controls-graphAt`,graphEditor:`msp-params-extra-controls-graphEditor`,graphFoot:`msp-params-extra-controls-graphFoot`,graphHint:`msp-params-extra-controls-graphHint`,grid:`msp-params-extra-controls-grid`,interval:`msp-params-extra-controls-interval`,intervalRange:`msp-params-extra-controls-intervalRange`,intervalTrack:`msp-params-extra-controls-intervalTrack`,intervalValue:`msp-params-extra-controls-intervalValue`,matrix:`msp-params-extra-controls-matrix`,option:`msp-params-extra-controls-option`,options:`msp-params-extra-controls-options`,optionsContent:`msp-params-extra-controls-optionsContent`,point:`msp-params-extra-controls-point`,spark:`msp-params-extra-controls-spark`,strip:`msp-params-extra-controls-strip`,stripName:`msp-params-extra-controls-stripName`,under:`msp-params-extra-controls-under`,vec:`msp-params-extra-controls-vec`},u(`components/params/extra-controls.module.css`,`@layer msp.components {
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
`)})))()}function R(e){let{open:n}=e,r=s(`button`,{type:`button`,class:F.presets,ref:e=>Xe.set(n,e),"aria-label":`${e.label} presets`,"aria-haspopup":`listbox`,onClick:e=>{e.stopPropagation(),n.set(!n.value)},children:[o(x,{name:`swatch-book`,size:12}),`Presets`]});return t([n],()=>T(r,`aria-expanded`,String(n.value))),r}function z(e){let{open:t}=e;return o(p,{when:t,children:()=>{let n=e.presets(),r=e.anchor?.()??Xe.get(t),i=o(me,{"aria-label":r?.getAttribute(`aria-label`)??`Presets`,options:n.map(([,e],t)=>[String(t),e]),value:g(e.current,e=>e===void 0?void 0:String(e)),onPick:r=>{t.set(!1);let i=n[Number(r)];i&&e.onPick(i[0])},onClose:()=>t.set(!1),floating:!0});return r?o(ge,{anchor:r,children:i}):o(`div`,{class:F.presetsList,children:i})}})}function Ye(e,t,n=!1){let r=e.findIndex(([e])=>n&&e&&typeof e==`object`&&t&&typeof t==`object`?Object.entries(e).every(([e,n])=>Ze(t[e],n)):Ze(e,t));return r<0?void 0:r}var Xe,Ze;function B(){return(B=e((()=>{f(),n(),_(),b(),pe(),I(),c(),Xe=new WeakMap,Ze=(e,t)=>JSON.stringify(e)===JSON.stringify(t)})))()}function V(e){let t=v(!1);return s(i,{children:[s(`div`,{class:F.row,children:[o(`span`,{class:F.label,children:e.head}),o(`div`,{class:F.control,children:e.field(t)})]}),o(p,{when:t,reveal:!0,children:()=>o(`div`,{class:L.under,children:e.body(()=>t.set(!1))})})]})}function H(e){let n=s(`button`,{type:`button`,class:L.field,"aria-label":e.label,onClick:()=>e.open.set(!e.open.value),children:[o(`span`,{class:L.fieldContent,children:e.children}),o(x,{name:`chevron-down`,size:14,class:L.chevron})]});return t([e.open],()=>T(n,`aria-expanded`,String(e.open.value))),n}function Qe(e){let{param:n,binding:r}=e,i=document.createTextNode(``);return t([r.value],()=>{let e=r.get(),t=n.options.filter(([t])=>e?.includes(t)).map(([,e])=>e);w(i,t.length?t.join(`, `):n.emptyValue??`None`)}),o(V,{head:e.head,field:t=>o(H,{open:t,label:e.label,children:i}),body:()=>{let i=[],a=o(re,{class:L.options,contentClass:L.optionsContent,role:`listbox`,"aria-multiselectable":`true`,"aria-label":e.label,children:n.options.map(([e,t])=>s(`button`,{type:`button`,role:`option`,class:L.option,ref:e=>i.push(e),onClick:()=>{let t=r.get()??[];r.set(t.includes(e)?t.filter(t=>t!==e):[...t,e])},children:[o(`span`,{children:t}),o(x,{name:`check`,size:14,class:L.check})]}))});return t([r.value],()=>{let e=r.get();for(let t=0;t<i.length;t++)T(i[t],`aria-selected`,String(!!e?.includes(n.options[t][0])))}),a}})}function $e(e){let{binding:n}=e,r=[],i=o(`div`,{class:L.vec,children:[`x`,`y`,`z`].map((t,i)=>o(`input`,{class:F.number,"aria-label":e.label?`${e.label} ${t}`:t,"data-tip":t,ref:e=>r.push(e),onChange:e=>{let t=e.currentTarget,r=Number(t.value),a=[...n.get()??[0,0,0]];Number.isFinite(r)&&(a[i]=r,n.set(a)),t.value=W(a[i])}}))});return t([n.value],()=>{let e=n.get();for(let t=0;t<r.length;t++)U(r[t],W(e?.[t]))}),i}function U(e,t){e.value!==t&&(e.value=t)}function W(e){return e===void 0||!Number.isFinite(e)?``:String(Math.round(e*1e4)/1e4)}function et(e){let{binding:n}=e,r=e=>{for(let t=0;t<16;t++)if(e[t]!==+(t%5==0))return!1;return!0},i=document.createTextNode(``);return t([n.value],()=>{let e=n.get();w(i,e&&r(e)?`Identity`:`4 × 4 matrix`)}),o(V,{head:e.head,field:t=>o(H,{open:t,label:e.label,children:i}),body:()=>{let r=[],i=o(`div`,{class:L.matrix,children:Array.from({length:16},(t,i)=>{let a=i%4*4+Math.floor(i/4);return o(`input`,{class:F.number,"aria-label":`${e.label}, row ${Math.floor(i/4)+1}, column ${i%4+1}`,ref:e=>r.push(e),onChange:e=>{let t=e.currentTarget,r=Number(t.value),i=Array.from(n.get());Number.isFinite(r)&&(i[a]=r,n.set(i)),t.value=W(i[a])}})})});return t([n.value],()=>{let e=n.get();for(let t=0;t<16;t++)U(r[t],W(e?.[t%4*4+Math.floor(t/4)]))}),i}})}function tt(e){let{param:n,binding:r}=e,i=n.min??0,a=n.max??1,c=n.step??(a-i)/100,l=e=>`${100*(e-i)/(a-i||1)}%`,u=c<1?Math.min(4,Math.ceil(-Math.log10(c))):0,d=[],f,p=document.createTextNode(``),m=t=>o(`input`,{class:L.intervalRange,type:`range`,min:String(i),max:String(a),step:String(c),"aria-label":`${e.label?`${e.label} `:``}${t===0?`from`:`to`}`,ref:e=>d[t]=e,onInput:e=>{let n=Number(e.currentTarget.value),o=[...r.get()??[i,a]];o[t]=t===0?Math.min(n,o[1]):Math.max(n,o[0]),r.set(o),e.currentTarget.value=String(o[t])}}),h=s(`div`,{class:L.interval,children:[s(`div`,{class:L.intervalTrack,ref:e=>f=e,children:[m(0),m(1)]}),o(`span`,{class:L.intervalValue,children:p})]});return t([r.value],()=>{let e=r.get(),t=e?.[0]??i,n=e?.[1]??a;U(d[0],String(e?.[0]??i)),U(d[1],String(e?.[1]??a)),E(f,`--msp-from`,l(t)),E(f,`--msp-to`,l(n)),w(p,`${t.toFixed(u)}–${n.toFixed(u)}`)}),h}function nt(e){let t=e?.colors??[];if(!t.length)return`none`;let n=t.map((e,n)=>Array.isArray(e)?{color:O(e[0]),at:e[1]}:{color:O(e),at:t.length===1?0:n/(t.length-1)});if(e?.kind===`set`){let e=n.length;return`linear-gradient(90deg, ${n.map((t,n)=>`${t.color} ${100*n/e}% ${100*(n+1)/e}%`).join(`, `)})`}return`linear-gradient(90deg, ${n.map(e=>`${e.color} ${100*e.at}%`).join(`, `)})`}function rt(e){let{param:n,binding:r}=e,i=n.presetKind??`all`,a=st.filter(([,e])=>i===`all`?!0:i===`set`?e.type===`qualitative`:e.type!==`qualitative`),c=e=>a.find(([,t])=>JSON.stringify(t.list)===JSON.stringify(e?.colors))?.[1].label??`Custom`,l,u=document.createTextNode(``),d=g(r.value,c),f=o(V,{head:e.head,field:t=>s(H,{open:t,label:e.label,children:[o(`span`,{class:L.strip,ref:e=>l=e}),o(`span`,{class:L.stripName,children:u})]}),body:n=>{let i=[],c=o(re,{class:L.options,contentClass:L.optionsContent,role:`listbox`,"aria-label":e.label,children:a.map(([,e])=>{let t={kind:e.type===`qualitative`?`set`:`interpolate`,colors:e.list};return s(`button`,{type:`button`,role:`option`,class:L.option,ref:e=>i.push(e),onClick:()=>{r.set({kind:t.kind,colors:[...t.colors]}),n()},children:[o(`span`,{class:L.strip,style:{background:nt(t)}}),o(`span`,{class:L.stripName,children:e.label}),o(x,{name:`check`,size:14,class:L.check})]})})});return t([d],()=>{for(let e=0;e<i.length;e++)T(i[e],`aria-selected`,String(d.value===a[e][1].label))}),c}});return t([r.value],()=>{E(l,`background`,nt(r.get())),w(u,c(r.get()))}),f}function it(e){let{binding:n}=e,r=o(`input`,{class:F.input,"aria-labelledby":e.labelId,placeholder:`https://…`,onChange:e=>n.set(ie.Url(e.currentTarget.value))});return t([n.value],()=>U(r,n.get()?.url??``)),r}function at(e){let{binding:n}=e,r=(e,t,n)=>(e??[]).map(([e,r],i)=>`${i?`L`:`M`}${(e*t).toFixed(1)} ${((1-r)*n).toFixed(1)}`).join(` `),i,a=document.createTextNode(``),c=o(V,{head:e.head,field:t=>s(H,{open:t,label:e.label,children:[o(`svg`,{class:L.spark,viewBox:`0 0 56 14`,preserveAspectRatio:`none`,"aria-hidden":`true`,children:o(`path`,{ref:e=>i=e})}),o(`span`,{class:L.stripName,children:a})]}),body:()=>o(ot,{param:e.param,binding:n,pathOf:r})});return t([n.value],()=>{let e=n.get();T(i,`d`,r(e,56,14)),w(a,`${e?.length??0} points`)}),c}function ot(e){let{binding:n}=e,r=l(``),i=document.createTextNode(``),a=n.value,c=e.param.getPresets,u=v(!1),d,f=s(`svg`,{class:L.graph,viewBox:`0 0 240 96`,preserveAspectRatio:`none`,children:[[.25,.5,.75].map(e=>o(`line`,{class:L.grid,x1:String(e*240),x2:String(e*240),y1:`0`,y2:`96`})),[.25,.5,.75].map(e=>o(`line`,{class:L.grid,y1:String(e*96),y2:String(e*96),x1:`0`,x2:`240`})),o(`path`,{class:L.curve,ref:e=>d=e}),o(m,{each:g(a,e=>(e??[]).map((e,t)=>t)),children:e=>{let n=g(a,t=>t?.[e]),r=o(`circle`,{class:L.point,r:`4`,"data-index":String(e)});return t([n],()=>{T(r,`cx`,String((n.value?.[0]??0)*240)),T(r,`cy`,String((1-(n.value?.[1]??0))*96))}),r}})]});t([n.value],()=>T(d,`d`,e.pathOf(n.get(),240,96))),t([r],()=>w(i,r.value));let p=e=>{let t=f.getBoundingClientRect(),n=Math.min(1,Math.max(0,(e.clientX-t.left)/t.width)),r=Math.min(1,Math.max(0,1-(e.clientY-t.top)/t.height));return[Math.round(n*1e3)/1e3,Math.round(r*1e3)/1e3]};return te(f,{start(e){let t=e.target;if(t.tagName===`circle`)return Number(t.dataset.index);let r=[...n.get()??[]],i=p(e),a=r.findIndex(([e])=>e>i[0]);r.splice(a<0?r.length:a,0,i),n.set(r)},move(e,t){let r=p(e),i=[...n.get()??[]],a=t>0?i[t-1][0]:0,o=t<i.length-1?i[t+1][0]:1;i[t]=[Math.min(o,Math.max(a,r[0])),r[1]],n.set(i)}}),S(f,`pointermove`,e=>{let t=p(e);r.offer(`${t[0].toFixed(2)}, ${t[1].toFixed(2)}`)}),S(f,`dblclick`,e=>{let t=e.target;if(t.tagName!==`circle`)return;let r=Number(t.dataset.index),i=[...n.get()??[]];i.length<=2||(i.splice(r,1),n.set(i))}),S(f,`pointerleave`,()=>r.offer(``)),s(`div`,{class:L.graphEditor,children:[s(`div`,{class:L.graphArea,children:[f,o(`span`,{class:L.graphAt,children:i})]}),s(`div`,{class:L.graphFoot,children:[o(`p`,{class:L.graphHint,children:`Drag a point · click to add · double-click to remove`}),c?o(R,{open:u,label:`Curve`}):null]}),c?o(z,{open:u,presets:c,current:g(n.value,e=>Ye(c(),e)),onPick:e=>n.set(e)}):null]})}var st;function ct(){return(ct=e((()=>{ae(),oe(),f(),n(),ee(),y(),_(),P(),b(),ne(),Je(),I(),B(),c(),st=Object.entries(se)})))()}var G;function lt(){return(lt=e((()=>{d(),G={bar:`msp-params-help-bar`,description:`msp-params-help-description`,ends:`msp-params-help-ends`,entry:`msp-params-help-entry`,help:`msp-params-help-help`,name:`msp-params-help-name`,scale:`msp-params-help-scale`,swatch:`msp-params-help-swatch`,table:`msp-params-help-table`,text:`msp-params-help-text`,toggle:`msp-params-help-toggle`},u(`components/params/help.module.css`,`@layer msp.components {
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
`)})))()}function ut(e,t){let n=e=>e&&(e.description||e.legend)?e:void 0;if(e.help){let r=e.help;return g(t,e=>{try{return n(r(e))}catch{return}},(e,t)=>e?.description===t?.description&&e?.legend===t?.legend)}let r=n({description:e.description,legend:e.legend});return r?v(r).asReadonly:void 0}function dt(e,n,r){if(!n)return{head:o(`span`,{class:G.text,id:r,"data-tip-overflow":``,children:e}),block:null};let a=v(!1),c=g(n,e=>!!e),l,u=s(i,{children:[o(`span`,{class:G.text,id:r,"data-tip-overflow":``,ref:e=>l=e,onClick:e=>{e.currentTarget.hasAttribute(`data-help`)&&(e.stopPropagation(),a.set(!a.value))},children:e}),o(p,{when:c,children:()=>{let n=o(`button`,{type:`button`,class:G.toggle,"aria-label":`About ${e}`,title:`About ${e}`,onClick:e=>{e.stopPropagation(),a.set(!a.value)},children:o(x,{name:`circle-help`,size:12})});return t([a],()=>T(n,`aria-expanded`,String(a.value))),n}})]});return t([c],()=>T(l,`data-help`,c.value)),{head:u,block:o(ft,{help:n,open:a})}}function ft(e){return o(p,{when:e.open,reveal:!0,children:()=>o(p,{when:e.help,children:e=>s(`div`,{class:G.help,children:[e.description?o(`p`,{class:G.description,children:pt(e.description)}):null,e.legend?o(mt,{legend:e.legend}):null]})})})}function pt(e){return e.split(/(`[^`]+`)/).map(e=>e.startsWith("`")&&e.endsWith("`")&&e.length>1?o(`code`,{children:e.slice(1,-1)}):e)}function mt(e){let{legend:t}=e;return t.kind===`table-legend`?o(`ul`,{class:G.table,children:t.table.map(([e,t])=>s(`li`,{class:G.entry,children:[o(`span`,{class:G.swatch,style:{background:O(t)}}),o(`span`,{class:G.name,children:e})]}))}):s(`div`,{class:G.scale,children:[o(`span`,{class:G.bar,style:{background:nt({kind:`interpolate`,colors:t.colors})}}),s(`span`,{class:G.ends,children:[o(`span`,{children:t.minLabel}),o(`span`,{children:t.maxLabel})]})]})}function ht(){return(ht=e((()=>{f(),n(),y(),_(),P(),b(),ct(),lt(),c()})))()}function gt(e){let{form:t}=e;return o(`div`,{class:F.form,children:o(_t,{params:t.params,field:e=>({value:t.field(e),get:()=>t.values.value[e],set:n=>t.set(e,n)}),visible:e=>t.params[e].hideIf?t.visible(e):void 0,filter:vt(e.filter),place:{form:t,path:``}})})}function K(e){return Object.keys(e).some(t=>!e[t].isHidden&&e[t].type!==`value`)}function _t(e){let{params:n,filter:r,place:a}=e,{essentials:c,advanced:l}=Fe(n),u=yt(r),d=new Map,f=t=>(d.has(t)||d.set(t,e.visible(t)),d.get(t)),p=(e,i)=>{if(!r&&i.some(e=>!f(e)))return e;let a=[];for(let e of i){let t=f(e);t&&a.push(t)}return r&&a.push(r),t(a,()=>{let t=r?.value??``;T(e,`hidden`,!i.some(e=>f(e)?.value!==!1&&q(e,n[e],t)))}),e},m=t=>o(J,{name:t,param:n[t],binding:e.field(t),visible:f(t),filter:r,place:{form:a.form,path:`${a.path}/${t}`}}),h=(e,t)=>e.flatMap(e=>e.category?[p(o(`div`,{children:o($,{title:e.category,state:a.form.fold(`${a.path}#${t}${e.category}`),force:u,children:()=>e.names.map(m)})}),e.names)]:e.names.map(m));return!c.length||!l.length?o(i,{children:h(c.length?c:l,``)}):s(i,{children:[h(c,``),p(o(`div`,{children:o($,{title:`Advanced`,state:a.form.fold(`${a.path}#advanced`),force:u,children:()=>h(l,`advanced/`)})}),l.flatMap(e=>e.names))]})}function vt(e){return e&&g(e,e=>e.trim().toLowerCase())}function yt(e){return e&&g(e,e=>e.length>0)}function bt(e,t){return t.label||ce(e)}function xt(e,t){let n=t.trim().toLowerCase();return Object.keys(e).some(t=>!e[t].isHidden&&q(t,e[t],n))}function q(e,t,n){return!n||bt(e,t).toLowerCase().includes(n)||t.description?.toLowerCase().includes(n)?!0:t.type===`group`?Object.keys(t.params).some(e=>q(e,t.params[e],n)):t.type===`mapped`&&t.select.options.some(([e])=>{let r=t.map(e);return r.type===`group`?Object.keys(r.params).some(e=>q(e,r.params[e],n)):q(e,r,n)})}function J(e){let{name:n,param:r,binding:i,filter:a,place:c}=e,l=bt(n,r),u=e.visible,d=[];u&&d.push(u),a&&d.push(a);let f=(...e)=>{let i=o(`div`,{children:e});return d.length&&t(d,()=>T(i,`hidden`,!((u?.value??!0)&&q(n,r,a?.value??``)))),i},p=a&&g(a,e=>l.toLowerCase().includes(e)?``:e);if(r.type===`group`)return f(o(kt,{label:l,param:r,binding:i,filter:p,force:yt(a),place:c}));let m=De(`msp-field`),{head:h,block:_}=dt(l,ut(r,i.value),m),v=e=>f(e,_);if(r.type===`mapped`)return v(jt(r)?o(Mt,{label:l,labelId:m,head:h,description:r.description,param:r,binding:i,place:c}):o(Nt,{label:l,head:h,param:r,binding:i,filter:p,force:yt(a),place:c}));if(r.type===`select`)return v(o(Z,{label:l,head:h,description:r.description,options:r.options,binding:i}));if(r.type===`color`)return v(o(St,{label:l,labelId:m,head:h,description:r.description,binding:i}));if(r.type===`multi-select`)return v(o(Qe,{head:h,label:l,param:r,binding:i}));if(r.type===`mat4`)return v(o(et,{head:h,label:l,param:r,binding:i}));if(r.type===`line-graph`)return v(o(at,{head:h,label:l,param:r,binding:i}));if(r.type===`color-list`)return v(o(rt,{head:h,label:l,param:r,binding:i}));if(r.type===`object-list`)return v(o(It,{head:h,label:l,param:r,binding:i}));if(r.type===`conditioned`)return v(o(Pt,{head:h,label:l,param:r,binding:i,place:c}));if(r.type===`script`)return v(o(Ft,{head:h,label:l,binding:i}));if(r.type===`converted`){let t={value:g(i.value,e=>r.fromValue(e)),get:()=>r.fromValue(i.get()),set:e=>i.set(r.toValue(e))},s={...r.converted,label:r.converted.label??l};return o(J,{name:n,param:s,binding:t,visible:e.visible,filter:a,place:c})}return r.type===`value`?null:v(s(`div`,{class:F.row,children:[o(`span`,{class:F.label,children:h}),o(`div`,{class:F.control,children:wt(r,i,m,l)})]}))}function St(e){let{binding:n,labelId:r}=e,a=v(!1),c,l,u=document.createTextNode(``),d=s(i,{children:[s(`div`,{class:F.row,children:[o(`span`,{class:F.label,children:e.head??o(`span`,{id:r,children:e.label})}),o(`div`,{class:F.control,children:s(`button`,{type:`button`,class:F.color,"aria-labelledby":`${r} ${r}-value`,ref:e=>l=e,onClick:()=>a.set(!a.value),children:[o(`span`,{class:F.swatch,ref:e=>c=e}),o(`span`,{class:F.channels,id:`${r}-value`,"data-tip-overflow":``,children:u})]})})]}),o(p,{when:a,reveal:!0,children:()=>o(Ge,{value:n.value,onChange:e=>n.set(e)})})]});return t([n.value,a],()=>{let e=n.get();E(c,`background`,O(e)),w(u,k(e)),T(l,`aria-expanded`,String(a.value))}),d}function Ct(e){let{param:n,binding:r,labelId:i}=e,a=n.type===`file-list`,c=v(!1),l=e=>{e.length&&r.set(a?e.map(e=>ie.File(e)):ie.File(e[0]))},u=o(`input`,{type:`file`,hidden:!0,multiple:a,accept:n.accept,onChange:e=>{l([...e.currentTarget.files??[]]),e.currentTarget.value=``}}),d=g(r.value,e=>(e?Array.isArray(e)?e:[e]:[]).map(e=>e.name)),f,m,h=document.createTextNode(``),_=s(`div`,{class:F.file,ref:e=>f=e,children:[o(`button`,{type:`button`,class:F.filePick,"aria-labelledby":i?`${i} ${i}-value`:void 0,onClick:()=>u.click(),onDragOver:e=>{e.preventDefault(),c.set(!0)},onDragLeave:()=>c.set(!1),onDrop:e=>{e.preventDefault(),e.stopPropagation(),c.set(!1),l([...e.dataTransfer?.files??[]])},children:o(`span`,{class:F.fileNames,id:i?`${i}-value`:void 0,ref:e=>m=e,children:h})}),o(p,{when:g(d,e=>e.length>0),children:()=>o(`button`,{type:`button`,class:F.fileClear,"aria-label":`Clear`,title:`Clear`,onClick:()=>r.set(null),children:o(x,{name:`x`,size:13})})}),u]});return t([d,c],()=>{let e=d.value;T(f,`data-dragging`,c.value),T(m,`data-empty`,e.length===0),w(h,e.length===0?a?`Select files…`:`Select a file…`:e.length===1?e[0]:`${e.length} files · ${e.join(`, `)}`)}),_}function wt(e,t,n,r){switch(e.type){case`boolean`:return o(Et,{binding:t,labelId:n});case`number`:return o(Dt,{param:e,binding:t,labelId:n});case`text`:return o(Tt,{binding:t,labelId:n,placeholder:e.placeholder,multiline:e.multiline});case`file`:case`file-list`:return o(Ct,{param:e,binding:t,labelId:n});case`vec3`:return o($e,{param:e,binding:t,label:r});case`interval`:return o(tt,{param:e,binding:t,label:r});case`url`:return o(it,{binding:t,labelId:n});default:return o(`span`,{class:F.unsupported,children:e.type})}}function Tt(e){let{binding:n}=e,r=e.multiline?o(`textarea`,{class:F.textarea,rows:3,"aria-labelledby":e.labelId,placeholder:e.placeholder,onChange:e=>n.set(e.currentTarget.value)}):o(`input`,{class:F.input,"aria-labelledby":e.labelId,placeholder:e.placeholder,onChange:e=>n.set(e.currentTarget.value)});return t([n.value],()=>Y(r,n.get())),r}function Y(e,t){let n=t==null?``:String(t);e.value!==n&&(e.value=n)}function Et(e){let{binding:n}=e,r=o(`button`,{type:`button`,role:`switch`,class:F.switch,"aria-labelledby":e.labelId,onClick:()=>n.set(!n.get()),children:o(`span`,{class:F.knob})});return t([n.value],()=>T(r,`aria-checked`,String(!!n.get()))),r}function Dt(e){let{param:n,binding:i,labelId:a}=e;if(n.min===void 0||n.max===void 0){let e=o(`input`,{class:F.input,type:`text`,inputMode:`decimal`,"aria-labelledby":a,onChange:e=>{let t=Ot(e.currentTarget.value);Number.isFinite(t)&&i.set(t),e.currentTarget.value=X(Number.isFinite(t)?t:i.get(),n.step)}});return t([i.value],()=>Y(e,X(i.get(),n.step))),e}let c=n.min,u=n.max,d=l(NaN,(e,t)=>Object.is(e,t));r(d,e=>{Number.isNaN(e)||i.set(e)});let f,p,m=s(`div`,{class:F.slider,children:[o(`input`,{class:F.range,type:`range`,"aria-labelledby":a,min:String(c),max:String(u),step:String(n.step??(u-c)/100),ref:e=>f=e,onInput:e=>d.offer(Number(e.currentTarget.value))}),o(`input`,{class:F.number,"aria-labelledby":a,ref:e=>p=e,onChange:e=>{let t=Ot(e.currentTarget.value),r=Number.isFinite(t)?Math.min(u,Math.max(c,t)):i.get();Number.isFinite(t)&&i.set(r),e.currentTarget.value=X(r,n.step)}})]});return t([i.value],()=>{let e=i.get();Y(f,e),E(f,`--msp-progress`,`${100*(e-c)/(u-c||1)}%`),Y(p,X(e,n.step))}),m}function X(e,t){if(!Number.isFinite(e))return``;if(t===void 0)return String(Number(e.toFixed(4)));let n=t<1?Math.min(4,Math.ceil(-Math.log10(t))):0;return e.toFixed(n)}function Ot(e){let t=e.trim().replace(`,`,`.`);return t===``?NaN:Number(t)}function Z(e){let{options:n,binding:r}=e,a=v(!1),c=g(r.value,e=>String(n.findIndex(t=>t[0]===e))),l=n.map(([,e,t],n)=>[String(n),e,t]),u,d=document.createTextNode(``),f=s(i,{children:[s(`div`,{class:F.row,children:[o(`span`,{class:F.label,children:e.head??e.label}),s(`div`,{class:F.control,ref:e=>u=e,children:[o(fe,{size:`sm`,open:a,"aria-label":e.label,label:d}),e.after]})]}),o(p,{when:a,children:()=>{let t=o(me,{options:l,value:c,onPick:e=>{a.set(!1),r.set(n[Number(e)][0])},onClose:()=>a.set(!1),floating:!0,"aria-label":e.label});return u?o(ge,{anchor:u,children:t}):t}})]});return t([c],()=>w(d,l[Number(c.value)]?.[1]??``)),f}function kt(e){let{param:t,binding:n,filter:r,place:a}=e;if(!K(t.params))return null;let c=t.presets,l=e=>o(Q,{params:e,binding:n,filter:r,place:a}),u=a.form.fold(`${a.path}#open`,!!t.isExpanded),d=e=>n.set({...n.get()??{},...e}),f=c?g(n.value,e=>Ye(c,e,!0)):void 0;if(t.isFlat)return s(i,{children:[c&&f?o(At,{label:e.label,presets:c,current:f,onPick:d}):null,l(t.params)]});let p=typeof t.pivot==`string`&&t.params[t.pivot]?t.pivot:void 0;if(p&&(!c||!f)){let{[p]:n,...r}=t.params;return s(i,{children:[l({[p]:n}),K(r)?o($,{title:e.label,state:u,force:e.force,children:()=>l(r)}):null]})}if(!c||!f)return o($,{title:e.label,state:u,force:e.force,children:()=>l(t.params)});let m=v(!1),h=v(!1);return o($,{title:e.label,state:u,force:e.force,openWhen:h.asReadonly,meta:g(f,e=>e===void 0?``:c[e][1]),action:o(R,{open:m,label:e.label}),below:()=>o(z,{open:m,presets:()=>c,current:f,onPick:e=>{d(e),h.set(!0)}}),children:()=>l(t.params)})}function At(e){let n=v(!1),r,a=document.createTextNode(``),c=s(i,{children:[s(`div`,{class:F.row,children:[o(`span`,{class:F.label,children:`Presets`}),o(`div`,{class:F.control,ref:e=>r=e,children:o(fe,{size:`sm`,open:n,"aria-label":`${e.label} presets`,label:a})})]}),o(z,{open:n,presets:()=>e.presets,current:e.current,onPick:e.onPick,anchor:()=>r})]});return t([e.current],()=>{let t=e.current.value;w(a,t===void 0?`Custom`:e.presets[t][1])}),c}function jt(e){let t=e.select.options.map(e=>e[0]).sort();return t.length===2&&t[0]===`off`&&t[1]===`on`}function Mt(e){let{param:t,binding:n,place:r}=e,a=g(n.value,e=>e?.name===`on`),c=r.form.fold(`${r.path}#params`),l=e=>n.set({name:e,params:zt(t.map(e))}),u={value:a,get:()=>n.get()?.name===`on`,set:e=>{l(e?`on`:`off`),e||c.set(!1)}},d=t.map(`on`),f=d.type===`group`&&K(d.params),m={value:g(n.value,e=>e?.params),get:()=>n.get()?.params,set:e=>n.set({name:`on`,params:e})};return s(i,{children:[s(`div`,{class:F.row,children:[o(`span`,{class:F.label,children:e.head??o(`span`,{id:e.labelId,children:e.label})}),s(`div`,{class:F.control,children:[o(Et,{binding:u,labelId:e.labelId}),f?o(p,{when:a,children:()=>o(Rt,{open:c.asReadonly,label:`${e.label} settings`,onClick:()=>c.set(!c.value)})}):null]})]}),f?o(p,{when:g([a,c.asReadonly],(e,t)=>e&&t),children:()=>o(`div`,{class:F.subSettings,children:o(Q,{params:d.params,binding:m,place:{form:r.form,path:`${r.path}:on`}})})}):null]})}function Nt(e){let{param:t,binding:n,place:r}=e,i=g(n.value,e=>e?.name),a={value:i,get:()=>n.get()?.name,set:e=>{let r=t.map(e);n.set({name:e,params:zt(r)})}},c=g(i,e=>{if(e===void 0)return!1;let n=t.map(e);return n.type===`group`&&!n.isFlat&&K(n.params)}),l=r.form.fold(`${r.path}#params`),u=e.force?g([l.asReadonly,e.force],(e,t)=>e||t):l.asReadonly,d=o(p,{when:c,children:()=>o(Rt,{open:u,label:`${e.label} settings`,extraClass:F.afterSelect,onClick:()=>l.set(!l.value)})});return s(`div`,{class:F.mapped,children:[o(Z,{label:e.label,head:e.head,options:t.select.options,binding:a,after:d}),o(p,{when:i,children:i=>{let a=t.map(i),s={value:g(n.value,e=>e?.params),get:()=>n.get()?.params,set:e=>n.set({name:i,params:e})},c={form:r.form,path:`${r.path}:${i}`};return a.type===`group`?a.isFlat?o(Q,{params:a.params,binding:s,filter:e.filter,place:c}):K(a.params)?o(p,{when:u,reveal:!0,children:()=>o(Q,{params:a.params,binding:s,filter:e.filter,place:c,nested:!0})}):null:o(J,{name:i,param:a,binding:s,filter:e.filter,place:c})}})]})}function Q(e){let{params:t,binding:n}=e;return o(`div`,{class:e.nested?F.nested:F.fields,children:o(_t,{params:t,field:e=>({value:g(n.value,t=>t?.[e]),get:()=>n.get()?.[e],set:t=>n.set({...n.get(),[e]:t})}),visible:e=>{let r=t[e].hideIf;if(r)return g(n.value,e=>!r(e??{}))},filter:e.filter,place:e.place})})}function Pt(e){let{param:t,binding:n,place:r}=e,i=g(n.value,e=>String(t.conditionForValue(e))),a={value:i,get:()=>String(t.conditionForValue(n.get())),set:e=>n.set(t.conditionedValue(n.get(),e))};return s(`div`,{class:F.mapped,children:[o(Z,{label:e.label,head:e.head,options:t.select.options,binding:a}),o(p,{when:i,children:e=>o(`div`,{class:F.nested,children:o(J,{name:e,param:t.conditionParams[e],binding:n,place:{form:r.form,path:`${r.path}:${e}`}})})})]})}function Ft(e){let{binding:n}=e,r=e=>({value:g(n.value,t=>t?.[e]??``),get:()=>n.get()?.[e],set:t=>n.set({...n.get(),[e]:t})}),i=r(`expression`),a=De(`msp-field`),c,l=s(`div`,{class:F.mapped,children:[o(Z,{label:e.label,head:e.head,options:Bt,binding:r(`language`)}),o(`div`,{class:F.nested,children:s(`div`,{class:F.row,children:[o(`span`,{class:F.label,id:a,children:`Expression`}),o(`div`,{class:F.control,children:o(`textarea`,{class:F.textarea,"aria-labelledby":a,rows:3,spellcheck:!1,ref:e=>c=e,onChange:e=>i.set(e.currentTarget.value)})})]})})]});return t([i.value],()=>Y(c,i.get())),l}function It(e){let{param:n,binding:r}=e,a=n.presets,c=v(!1),l=g(r.value,e=>e??[]),u=(e,t)=>{let n=[...r.get()??[]];n[e]=t,r.set(n)},d=document.createTextNode(``),f=s(i,{children:[s(`div`,{class:F.row,children:[o(`span`,{class:F.label,children:e.head}),o(`div`,{class:F.control,children:o(`span`,{class:F.count,children:d})})]}),s(`div`,{class:F.items,children:[o(m,{each:g(l,e=>e.map((e,t)=>t)),children:e=>o(Lt,{param:n,binding:r,index:e,replace:u})}),s(`div`,{class:F.itemActions,children:[s(`button`,{type:`button`,class:F.itemAdd,"aria-label":`Add to ${e.label}`,onClick:()=>r.set([...r.get()??[],n.ctor()]),children:[o(x,{name:`plus`,size:13}),`Add`]}),a?o(R,{open:c,label:e.label}):null]}),a?o(z,{open:c,presets:()=>a,current:g(r.value,e=>Ye(a,e)),onPick:e=>r.set(e)}):null]})]});return t([l],()=>{let e=l.value.length;w(d,e===1?`1 item`:`${e} items`)}),f}function Lt(e){let{param:n,binding:r,index:i}=e,a=v(!1),c,l,u=document.createTextNode(``),d=s(`div`,{class:F.item,ref:e=>c=e,children:[s(`div`,{class:F.itemRow,onClick:()=>a.set(!a.value),children:[o(`span`,{class:F.itemLabel,children:u}),o(`button`,{type:`button`,class:F.settings,title:`Edit`,"aria-label":`Edit`,ref:e=>l=e,onClick:e=>{e.stopPropagation(),a.set(!a.value)},children:o(x,{name:`sliders-horizontal`,size:14})}),o(`button`,{type:`button`,class:F.settings,title:`Remove`,"aria-label":`Remove`,onClick:e=>{e.stopPropagation(),r.set((r.get()??[]).filter((e,t)=>t!==i))},children:o(x,{name:`x`,size:13})})]}),o(p,{when:a,reveal:!0,children:()=>{let t=new Ie(n.element,r.get()?.[i],{onChange:t=>e.replace(i,t)});return o(`div`,{class:F.itemForm,children:o(gt,{form:t})})}})]}),f=g(r.value,e=>e?.[i]===void 0?``:n.getLabel(e[i]));return t([f,a],()=>{w(u,f.value),T(c,`data-open`,a.value),T(l,`aria-expanded`,String(a.value))}),d}function Rt(e){let n=o(`button`,{type:`button`,class:e.extraClass?`${F.settings} ${e.extraClass}`:F.settings,title:e.label,"aria-label":e.label,onClick:e.onClick,children:o(x,{name:`sliders-horizontal`,size:14})});return t([e.open],()=>T(n,`aria-expanded`,String(e.open.value))),n}function zt(e){if(e.type===`group`){let t={};for(let n of Object.keys(e.params))t[n]=e.params[n].defaultValue;return t}return e.defaultValue}function $(e){let n=e.state??v(!!e.open),i=e.openWhen;if(i){let e=i.value;r(i,t=>{t&&!e&&n.set(!0),e=t})}let a=e.force?g([n.asReadonly,e.force],(e,t)=>e||t):n.asReadonly,c=e.meta,l,u=document.createTextNode(``),d=s(`div`,{class:F.collapsible,children:[s(`div`,{class:F.collapsibleBar,children:[s(`button`,{type:`button`,class:F.collapsibleHeader,ref:e=>l=e,onClick:()=>n.set(!n.value),children:[e.title,o(x,{name:`chevron-right`,size:12,class:F.chevron}),c?o(`span`,{class:F.collapsibleMeta,children:u}):null]}),e.action]}),e.below?.(),o(p,{when:a,reveal:!0,children:()=>o(`div`,{class:F.nested,children:e.children()})})]});return t(c?[a,c]:[a],()=>{T(l,`aria-expanded`,String(a.value)),c&&w(u,c.value)}),d}var Bt;function Vt(){return(Vt=e((()=>{ae(),le(),f(),je(),n(),Le(),y(),pe(),P(),b(),I(),ct(),ht(),B(),_(),c(),Bt=[[`mol-script`,`MolScript`],[`pymol`,`PyMOL`],[`vmd`,`VMD`],[`jmol`,`Jmol`]]})))()}export{je as C,be as D,Ee as E,De as O,Se as S,xe as T,E as _,z as a,we as b,Ge as c,Ie as d,Le as f,Ne as g,Me as h,R as i,O as l,T as m,Vt as n,B as o,Pe as p,xt as r,qe as s,gt as t,P as u,w as v,Te as w,ye as x,C as y};