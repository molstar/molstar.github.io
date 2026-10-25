import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{D as t,g as n,i as r,m as i,n as a,r as o,t as s,x as c,y as l}from"./jsx-runtime-DbCUSNU3.js";import{n as u,r as d}from"./registry-D35yV2Tb.js";import{S as f,b as p,x as m}from"./work-queue-DoxU-HjK.js";import{n as h,t as g}from"./observable-state-eRUcDuAs.js";import{i as _,n as v,t as ee}from"./control-flow-BQuMY04w.js";import{n as y,t as b}from"./icon-1ydjt1pd.js";import{i as te,s as x,t as ne}from"./scoped-Dk1HMUKj.js";import{n as re,t as ie}from"./scroll-area-ukLK_GOt.js";import{a as ae,u as oe}from"./focus-DbrNPVyh.js";import{D as se,n as ce,t as le,w as ue}from"./param-definition-D-iX28-z.js";import{A as de,E as fe,h as pe,p as me}from"./utf8-CBShbtHH.js";import{t as he}from"./events-5qSA8--5.js";import{a as ge,o as _e,r as ve,t as ye}from"./select-DO80BU7g.js";import{n as be,t as xe}from"./names--7LjNzfx.js";function S(e,t){e.data!==t&&(e.data=t)}function C(e,t,n){if(n==null||n===!1){e.hasAttribute(t)&&e.removeAttribute(t);return}let r=n===!0?``:String(n);e.getAttribute(t)!==r&&e.setAttribute(t,r)}function Se(e,t,n){e.classList.toggle(t,n)}function w(e,t,n){let r=e.style;n?r.getPropertyValue(t)!==n&&r.setProperty(t,n):r.getPropertyValue(t)&&r.removeProperty(t)}function Ce(e,t){let n=t?``:`none`;e.style.display!==n&&(e.style.display=n)}function we(){return(we=e((()=>{})))()}function Te(e){let t=t=>{let n={names:[]},r=new Map;for(let i of Object.keys(e)){let a=e[i];if(a.isHidden||a.type===`value`||!!a.isEssential!==t)continue;if(!a.category){n.names.push(i);continue}let o=r.get(a.category);o||(o={category:a.category,names:[]},r.set(a.category,o)),o.names.push(i)}let i=[...r.values()].sort((e,t)=>e.category<t.category?-1:1);return n.names.length?[n,...i]:i};return{essentials:t(!0),advanced:t(!1)}}var T;function E(){return(E=e((()=>{ce(),g(),m(),T=class{#e;#t;#n=new Map;#r=new Map;constructor(e,t=le.getDefaultValues(e),n={}){this.params=e,this.options=n,this.#t=le.getDefaultValues(e),this.#e=h({...this.#t,...t},{compare:Object.is})}get values(){return this.#e.asReadonly}field(e){let t=this.#n.get(e);return t||(t=p(this.#e.asReadonly,t=>t[e]),this.#n.set(e,t)),t}visible(e){let t=this.params[e];return t.hideIf?p(this.#e.asReadonly,e=>!t.hideIf(e)):p(this.#e.asReadonly,()=>!0)}set(e,t){let n=this.#e.value;if(Object.is(n[e],t))return;let r={...n,[e]:t};this.#e.set(r),this.options.onChange?.(r,e)}load(e){this.#e.set({...this.#t,...e})}reset(){let e=this.#e.value,t={...this.#t};this.#e.set(t);for(let n of Object.keys(this.params))le.isParamEqual(this.params[n],e[n],t[n])||this.options.onChange?.(t,n)}layout(){let e=[],t=[];for(let n of Object.keys(this.params)){let r=this.params[n];r.isHidden||(r.isEssential?e.push(n):t.push(n))}return e.length?{essentials:e,advanced:t}:{essentials:t,advanced:[]}}fold(e,t=!1){let n=this.#r.get(e);return n||(n=h(t),this.#r.set(e,n)),n}}})))()}var D;function Ee(){return(Ee=e((()=>{d(),D={custom:`msp-color-color-picker-custom`,field:`msp-color-color-picker-field`,greys:`msp-color-color-picker-greys`,marker:`msp-color-color-picker-marker`,palette:`msp-color-color-picker-palette`,picker:`msp-color-color-picker-picker`,preview:`msp-color-color-picker-preview`,swatch:`msp-color-color-picker-swatch`,text:`msp-color-color-picker-text`},u(`components/color/color-picker.module.css`,`@layer msp.components {
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
`)})))()}function De(e){let t=e>>16&255,n=e>>8&255,r=e&255,i=(Math.max(t,n,r)+Math.min(t,n,r))/510,a=Math.round(7*(1-i)),o=7-a,s=[];for(let t=a;t>0;t--)s.push(A(e,.9*t/a));s.push(e);for(let t=1;t<=o;t++)s.push(A(e,-.85*t/o));return s}function O(e){return`#${(e>>>0&16777215).toString(16).padStart(6,`0`)}`}function k(e){return`${e>>16&255}, ${e>>8&255}, ${e&255}`}function Oe(e){let t=e.trim().toLowerCase();if(!t)return;let n=/^(?:#|0x)?([0-9a-f]{3}|[0-9a-f]{6})$/.exec(t);if(n){let e=n[1].length===3?n[1].replace(/./g,e=>e+e):n[1];return Number.parseInt(e,16)}let r=/^(rgba?|hsla?)?\s*\(?\s*([^()]*?)\s*\)?$/.exec(t);if(r){let e=r[2].split(/\s*[,;/\s]\s*/).filter(Boolean);if(e.length===3||e.length===4){let t=e.slice(0,3);if(t.every(e=>/^[+]?(\d+\.?\d*|\.\d+)%?$/.test(e))){if(r[1]?.startsWith(`hsl`))return ke(t);let e=t.some(e=>e.endsWith(`%`)),n=t.map(e=>Number.parseFloat(e)),i=!e&&n.every(e=>e<=1)&&t.some(e=>e.includes(`.`)),a=t=>e?t*255/100:i?t*255:t;return!e&&!i&&n.some(e=>e>255)?void 0:j(M(a(n[0])),M(a(n[1])),M(a(n[2])))}}}let i=t.replace(/[\s_-]/g,``);return Object.hasOwn(xe,i)?xe[i]:void 0}function ke(e){let t=(Number.parseFloat(e[0])%360+360)%360/60,n=Math.min(1,Number.parseFloat(e[1])/100),r=Math.min(1,Number.parseFloat(e[2])/100),i=(1-Math.abs(2*r-1))*n,a=i*(1-Math.abs(t%2-1)),o=r-i/2,[s,c,l]=t<1?[i,a,0]:t<2?[a,i,0]:t<3?[0,i,a]:t<4?[0,a,i]:t<5?[a,0,i]:[i,0,a];return j(M((s+o)*255),M((c+o)*255),M((l+o)*255))}function A(e,t){let n=t>0?255:0,r=Math.abs(t),i=t=>{let i=e>>t&255;return Math.round(i+(n-i)*r)<<t};return i(16)|i(8)|i(0)}function Ae(e){let t=e*6%6,n=t-Math.floor(t),r=M(n*255),i=255-r;switch(Math.floor(t)){case 0:return j(255,r,0);case 1:return j(i,255,0);case 2:return j(0,255,r);case 3:return j(0,i,255);case 4:return j(r,0,255);default:return j(255,0,i)}}function je(e,t){let n=Ae(Math.max(0,Math.min(1,e))),r=Math.max(0,Math.min(1,t));return r<.5?A(n,N*(1-r/.5)):A(n,-.9*((r-.5)/.5))}function Me(e){let t=e>>16&255,n=e>>8&255,r=e&255,i=Math.max(t,n,r),a=Math.min(t,n,r);if(i-a<16)return{greys:!0,x:(t+n+r)/765,y:.5};let o=i-a,s=i===t?((n-r)/o+6)%6:i===n?(r-t)/o+2:(t-n)/o+4,c=(i+a)/510,l=c>=.5?.5*(1-(2*c-1)/N):.5+.5*(1-2*c)/N;return{greys:!1,x:s/6,y:Math.max(0,Math.min(1,l))}}function Ne(e){let t=Pe(e.value),n=p(t,Me),r=0,s,c=h(0),l=!1,u=p(c.asReadonly,De);i(t,e=>{r=e,l||c.set(e),s&&he(s)!==s&&(s.value=k(e))});let d=t=>n=>{let r=r=>{let i=n.getBoundingClientRect();e.onChange(t((r.clientX-i.left)/i.width,(r.clientY-i.top)/i.height))};ne(n,{start(e){if(e.button===0)return r(e),!0},move:r})},f=e=>{let t=e<.03?0:e>.97?255:M(e*255);return j(t,t,t)};return o(`div`,{class:D.picker,children:[a(`div`,{class:D.field,"aria-hidden":`true`,ref:d(je),children:a(`span`,{class:D.marker,hidden:p(n,e=>e.greys),style:{left:p(n,e=>`${e.x*100}%`),top:p(n,e=>`${e.y*100}%`)}})}),a(`div`,{class:D.greys,"aria-hidden":`true`,ref:d(e=>f(e)),children:a(`span`,{class:D.marker,hidden:p(n,e=>!e.greys),style:{left:p(n,e=>`${e.x*100}%`),top:`50%`}})}),a(`div`,{class:D.palette,role:`listbox`,"aria-label":`Palette`,children:Fe.map(n=>a(`button`,{type:`button`,role:`option`,class:D.swatch,style:{background:O(n)},"aria-label":k(n),"aria-selected":p(t,e=>e===n),onClick:()=>e.onChange(n)}))}),a(`div`,{class:D.palette,role:`listbox`,"aria-label":`Weights`,children:[0,1,2,3,4,5,6,7].map(n=>{let r=p(u,e=>e[n]);return a(`button`,{type:`button`,role:`option`,class:D.swatch,style:{background:p(r,O)},"aria-label":p(r,k),"aria-selected":p([r,t],(e,t)=>e===t),onClick:()=>{l=!0,e.onChange(De(c.value)[n]),l=!1}})})}),o(`div`,{class:D.custom,children:[a(`span`,{class:D.preview,style:{background:p(t,O)}}),a(`input`,{ref:e=>{s=e,e.value=k(r)},type:`text`,class:D.text,"aria-label":`Color`,placeholder:`r, g, b · #hex · rgb() · name`,"data-tip":`r, g, b; hex, rgb(), hsl() or a name`,spellcheck:!1,onInput:t=>{let n=Oe(t.currentTarget.value);n!==void 0&&e.onChange(n)},onKeyDown:e=>{e.key===`Enter`&&(e.currentTarget.value=k(r))},onBlur:e=>{e.currentTarget.value=k(r)}})]})]})}function Pe(e){if(f(e))return e;let t=h(0);return n(e,e=>t.set(e)),t.asReadonly}var Fe,j,M,N;function P(){return(P=e((()=>{be(),c(),te(),g(),m(),Ee(),s(),Fe=[15026253,16214805,16762173,4630360,1222036,37119,7231183,14041247],j=(e,t,n)=>e<<16|t<<8|n,M=e=>Math.max(0,Math.min(255,Math.round(e))),N=.9})))()}var F;function I(){return(I=e((()=>{d(),F={afterSelect:`msp-params-params-form-afterSelect`,channels:`msp-params-params-form-channels`,chevron:`msp-params-params-form-chevron`,collapsible:`msp-params-params-form-collapsible`,collapsibleBar:`msp-params-params-form-collapsibleBar`,collapsibleHeader:`msp-params-params-form-collapsibleHeader`,collapsibleMeta:`msp-params-params-form-collapsibleMeta`,color:`msp-params-params-form-color`,control:`msp-params-params-form-control`,count:`msp-params-params-form-count`,fields:`msp-params-params-form-fields`,file:`msp-params-params-form-file`,fileClear:`msp-params-params-form-fileClear`,fileNames:`msp-params-params-form-fileNames`,filePick:`msp-params-params-form-filePick`,form:`msp-params-params-form-form`,input:`msp-params-params-form-input`,item:`msp-params-params-form-item`,itemActions:`msp-params-params-form-itemActions`,itemAdd:`msp-params-params-form-itemAdd`,itemForm:`msp-params-params-form-itemForm`,itemLabel:`msp-params-params-form-itemLabel`,itemRow:`msp-params-params-form-itemRow`,items:`msp-params-params-form-items`,knob:`msp-params-params-form-knob`,label:`msp-params-params-form-label`,mapped:`msp-params-params-form-mapped`,nested:`msp-params-params-form-nested`,number:`msp-params-params-form-number`,presets:`msp-params-params-form-presets`,presetsList:`msp-params-params-form-presetsList`,range:`msp-params-params-form-range`,row:`msp-params-params-form-row`,select:`msp-params-params-form-select`,settings:`msp-params-params-form-settings`,slider:`msp-params-params-form-slider`,subSettings:`msp-params-params-form-subSettings`,swatch:`msp-params-params-form-swatch`,switch:`msp-params-params-form-switch`,textarea:`msp-params-params-form-textarea`,unsupported:`msp-params-params-form-unsupported`},u(`components/params/params-form.module.css`,`@layer msp.components {
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
`)})))()}var L;function Ie(){return(Ie=e((()=>{d(),L={check:`msp-params-extra-controls-check`,chevron:`msp-params-extra-controls-chevron`,curve:`msp-params-extra-controls-curve`,field:`msp-params-extra-controls-field`,fieldContent:`msp-params-extra-controls-fieldContent`,graph:`msp-params-extra-controls-graph`,graphArea:`msp-params-extra-controls-graphArea`,graphAt:`msp-params-extra-controls-graphAt`,graphEditor:`msp-params-extra-controls-graphEditor`,graphFoot:`msp-params-extra-controls-graphFoot`,graphHint:`msp-params-extra-controls-graphHint`,grid:`msp-params-extra-controls-grid`,interval:`msp-params-extra-controls-interval`,intervalRange:`msp-params-extra-controls-intervalRange`,intervalTrack:`msp-params-extra-controls-intervalTrack`,intervalValue:`msp-params-extra-controls-intervalValue`,matrix:`msp-params-extra-controls-matrix`,option:`msp-params-extra-controls-option`,options:`msp-params-extra-controls-options`,optionsContent:`msp-params-extra-controls-optionsContent`,point:`msp-params-extra-controls-point`,spark:`msp-params-extra-controls-spark`,strip:`msp-params-extra-controls-strip`,stripName:`msp-params-extra-controls-stripName`,under:`msp-params-extra-controls-under`,vec:`msp-params-extra-controls-vec`},u(`components/params/extra-controls.module.css`,`@layer msp.components {
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
`)})))()}function R(e){let{open:n}=e,r=o(`button`,{type:`button`,class:F.presets,ref:e=>Re.set(n,e),"aria-label":`${e.label} presets`,"aria-haspopup":`listbox`,onClick:e=>{e.stopPropagation(),n.set(!n.value)},children:[a(b,{name:`swatch-book`,size:12}),`Presets`]});return t([n],()=>C(r,`aria-expanded`,String(n.value))),r}function z(e){let{open:t}=e;return a(v,{when:t,children:()=>{let n=e.presets(),r=e.anchor?.()??Re.get(t),i=a(ve,{"aria-label":r?.getAttribute(`aria-label`)??`Presets`,options:n.map(([,e],t)=>[String(t),e]),value:p(e.current,e=>e===void 0?void 0:String(e)),onPick:r=>{t.set(!1);let i=n[Number(r)];i&&e.onPick(i[0])},onClose:()=>t.set(!1),floating:!0});return r?a(ye,{anchor:r,children:i}):a(`div`,{class:F.presetsList,children:i})}})}function Le(e,t,n=!1){let r=e.findIndex(([e])=>n&&e&&typeof e==`object`&&t&&typeof t==`object`?Object.entries(e).every(([e,n])=>ze(t[e],n)):ze(e,t));return r<0?void 0:r}var Re,ze;function B(){return(B=e((()=>{_(),c(),m(),y(),_e(),I(),s(),Re=new WeakMap,ze=(e,t)=>JSON.stringify(e)===JSON.stringify(t)})))()}function V(e){let t=h(!1);return o(r,{children:[o(`div`,{class:F.row,children:[a(`span`,{class:F.label,children:e.head}),a(`div`,{class:F.control,children:e.field(t)})]}),a(v,{when:t,reveal:!0,children:()=>a(`div`,{class:L.under,children:e.body(()=>t.set(!1))})})]})}function H(e){let n=o(`button`,{type:`button`,class:L.field,"aria-label":e.label,onClick:()=>e.open.set(!e.open.value),children:[a(`span`,{class:L.fieldContent,children:e.children}),a(b,{name:`chevron-down`,size:14,class:L.chevron})]});return t([e.open],()=>C(n,`aria-expanded`,String(e.open.value))),n}function Be(e){let{param:n,binding:r}=e,i=document.createTextNode(``);return t([r.value],()=>{let e=r.get(),t=n.options.filter(([t])=>e?.includes(t)).map(([,e])=>e);S(i,t.length?t.join(`, `):n.emptyValue??`None`)}),a(V,{head:e.head,field:t=>a(H,{open:t,label:e.label,children:i}),body:()=>{let i=[],s=a(ie,{class:L.options,contentClass:L.optionsContent,role:`listbox`,"aria-multiselectable":`true`,"aria-label":e.label,children:n.options.map(([e,t])=>o(`button`,{type:`button`,role:`option`,class:L.option,ref:e=>i.push(e),onClick:()=>{let t=r.get()??[];r.set(t.includes(e)?t.filter(t=>t!==e):[...t,e])},children:[a(`span`,{children:t}),a(b,{name:`check`,size:14,class:L.check})]}))});return t([r.value],()=>{let e=r.get();for(let t=0;t<i.length;t++)C(i[t],`aria-selected`,String(!!e?.includes(n.options[t][0])))}),s}})}function Ve(e){let{binding:n}=e,r=[],i=a(`div`,{class:L.vec,children:[`x`,`y`,`z`].map((t,i)=>a(`input`,{class:F.number,"aria-label":e.label?`${e.label} ${t}`:t,"data-tip":t,ref:e=>r.push(e),onChange:e=>{let t=e.currentTarget,r=Number(t.value),a=[...n.get()??[0,0,0]];Number.isFinite(r)&&(a[i]=r,n.set(a)),t.value=W(a[i])}}))});return t([n.value],()=>{let e=n.get();for(let t=0;t<r.length;t++)U(r[t],W(e?.[t]))}),i}function U(e,t){e.value!==t&&(e.value=t)}function W(e){return e===void 0||!Number.isFinite(e)?``:String(Math.round(e*1e4)/1e4)}function He(e){let{binding:n}=e,r=e=>{for(let t=0;t<16;t++)if(e[t]!==+(t%5==0))return!1;return!0},i=document.createTextNode(``);return t([n.value],()=>{let e=n.get();S(i,e&&r(e)?`Identity`:`4 × 4 matrix`)}),a(V,{head:e.head,field:t=>a(H,{open:t,label:e.label,children:i}),body:()=>{let r=[],i=a(`div`,{class:L.matrix,children:Array.from({length:16},(t,i)=>{let o=i%4*4+Math.floor(i/4);return a(`input`,{class:F.number,"aria-label":`${e.label}, row ${Math.floor(i/4)+1}, column ${i%4+1}`,ref:e=>r.push(e),onChange:e=>{let t=e.currentTarget,r=Number(t.value),i=Array.from(n.get());Number.isFinite(r)&&(i[o]=r,n.set(i)),t.value=W(i[o])}})})});return t([n.value],()=>{let e=n.get();for(let t=0;t<16;t++)U(r[t],W(e?.[t%4*4+Math.floor(t/4)]))}),i}})}function Ue(e){let{param:n,binding:r}=e,i=n.min??0,s=n.max??1,c=n.step??(s-i)/100,l=e=>`${100*(e-i)/(s-i||1)}%`,u=c<1?Math.min(4,Math.ceil(-Math.log10(c))):0,d=[],f,p=document.createTextNode(``),m=t=>a(`input`,{class:L.intervalRange,type:`range`,min:String(i),max:String(s),step:String(c),"aria-label":`${e.label?`${e.label} `:``}${t===0?`from`:`to`}`,ref:e=>d[t]=e,onInput:e=>{let n=Number(e.currentTarget.value),a=[...r.get()??[i,s]];a[t]=t===0?Math.min(n,a[1]):Math.max(n,a[0]),r.set(a),e.currentTarget.value=String(a[t])}}),h=o(`div`,{class:L.interval,children:[o(`div`,{class:L.intervalTrack,ref:e=>f=e,children:[m(0),m(1)]}),a(`span`,{class:L.intervalValue,children:p})]});return t([r.value],()=>{let e=r.get(),t=e?.[0]??i,n=e?.[1]??s;U(d[0],String(e?.[0]??i)),U(d[1],String(e?.[1]??s)),w(f,`--msp-from`,l(t)),w(f,`--msp-to`,l(n)),S(p,`${t.toFixed(u)}–${n.toFixed(u)}`)}),h}function We(e){let t=e?.colors??[];if(!t.length)return`none`;let n=t.map((e,n)=>Array.isArray(e)?{color:O(e[0]),at:e[1]}:{color:O(e),at:t.length===1?0:n/(t.length-1)});if(e?.kind===`set`){let e=n.length;return`linear-gradient(90deg, ${n.map((t,n)=>`${t.color} ${100*n/e}% ${100*(n+1)/e}%`).join(`, `)})`}return`linear-gradient(90deg, ${n.map(e=>`${e.color} ${100*e.at}%`).join(`, `)})`}function Ge(e){let{param:n,binding:r}=e,i=n.presetKind??`all`,s=Ye.filter(([,e])=>i===`all`?!0:i===`set`?e.type===`qualitative`:e.type!==`qualitative`),c=e=>s.find(([,t])=>JSON.stringify(t.list)===JSON.stringify(e?.colors))?.[1].label??`Custom`,l,u=document.createTextNode(``),d=p(r.value,c),f=a(V,{head:e.head,field:t=>o(H,{open:t,label:e.label,children:[a(`span`,{class:L.strip,ref:e=>l=e}),a(`span`,{class:L.stripName,children:u})]}),body:n=>{let i=[],c=a(ie,{class:L.options,contentClass:L.optionsContent,role:`listbox`,"aria-label":e.label,children:s.map(([,e])=>{let t={kind:e.type===`qualitative`?`set`:`interpolate`,colors:e.list};return o(`button`,{type:`button`,role:`option`,class:L.option,ref:e=>i.push(e),onClick:()=>{r.set({kind:t.kind,colors:[...t.colors]}),n()},children:[a(`span`,{class:L.strip,style:{background:We(t)}}),a(`span`,{class:L.stripName,children:e.label}),a(b,{name:`check`,size:14,class:L.check})]})})});return t([d],()=>{for(let e=0;e<i.length;e++)C(i[e],`aria-selected`,String(d.value===s[e][1].label))}),c}});return t([r.value],()=>{w(l,`background`,We(r.get())),S(u,c(r.get()))}),f}function Ke(e){let{binding:n}=e,r=a(`input`,{class:F.input,"aria-labelledby":e.labelId,placeholder:`https://…`,onChange:e=>n.set(ue.Url(e.currentTarget.value))});return t([n.value],()=>U(r,n.get()?.url??``)),r}function qe(e){let{binding:n}=e,r=(e,t,n)=>(e??[]).map(([e,r],i)=>`${i?`L`:`M`}${(e*t).toFixed(1)} ${((1-r)*n).toFixed(1)}`).join(` `),i,s=document.createTextNode(``),c=a(V,{head:e.head,field:t=>o(H,{open:t,label:e.label,children:[a(`svg`,{class:L.spark,viewBox:`0 0 56 14`,preserveAspectRatio:`none`,"aria-hidden":`true`,children:a(`path`,{ref:e=>i=e})}),a(`span`,{class:L.stripName,children:s})]}),body:()=>a(Je,{param:e.param,binding:n,pathOf:r})});return t([n.value],()=>{let e=n.get();C(i,`d`,r(e,56,14)),S(s,`${e?.length??0} points`)}),c}function Je(e){let{binding:n}=e,r=l(``),i=document.createTextNode(``),s=n.value,c=e.param.getPresets,u=h(!1),d,f=o(`svg`,{class:L.graph,viewBox:`0 0 240 96`,preserveAspectRatio:`none`,children:[[.25,.5,.75].map(e=>a(`line`,{class:L.grid,x1:String(e*240),x2:String(e*240),y1:`0`,y2:`96`})),[.25,.5,.75].map(e=>a(`line`,{class:L.grid,y1:String(e*96),y2:String(e*96),x1:`0`,x2:`240`})),a(`path`,{class:L.curve,ref:e=>d=e}),a(ee,{each:p(s,e=>(e??[]).map((e,t)=>t)),children:e=>{let n=p(s,t=>t?.[e]),r=a(`circle`,{class:L.point,r:`4`,"data-index":String(e)});return t([n],()=>{C(r,`cx`,String((n.value?.[0]??0)*240)),C(r,`cy`,String((1-(n.value?.[1]??0))*96))}),r}})]});t([n.value],()=>C(d,`d`,e.pathOf(n.get(),240,96))),t([r],()=>S(i,r.value));let m=e=>{let t=f.getBoundingClientRect(),n=Math.min(1,Math.max(0,(e.clientX-t.left)/t.width)),r=Math.min(1,Math.max(0,1-(e.clientY-t.top)/t.height));return[Math.round(n*1e3)/1e3,Math.round(r*1e3)/1e3]};return ne(f,{start(e){let t=e.target;if(t.tagName===`circle`)return Number(t.dataset.index);let r=[...n.get()??[]],i=m(e),a=r.findIndex(([e])=>e>i[0]);r.splice(a<0?r.length:a,0,i),n.set(r)},move(e,t){let r=m(e),i=[...n.get()??[]],a=t>0?i[t-1][0]:0,o=t<i.length-1?i[t+1][0]:1;i[t]=[Math.min(o,Math.max(a,r[0])),r[1]],n.set(i)}}),x(f,`pointermove`,e=>{let t=m(e);r.offer(`${t[0].toFixed(2)}, ${t[1].toFixed(2)}`)}),x(f,`dblclick`,e=>{let t=e.target;if(t.tagName!==`circle`)return;let r=Number(t.dataset.index),i=[...n.get()??[]];i.length<=2||(i.splice(r,1),n.set(i))}),x(f,`pointerleave`,()=>r.offer(``)),o(`div`,{class:L.graphEditor,children:[o(`div`,{class:L.graphArea,children:[f,a(`span`,{class:L.graphAt,children:i})]}),o(`div`,{class:L.graphFoot,children:[a(`p`,{class:L.graphHint,children:`Drag a point · click to add · double-click to remove`}),c?a(R,{open:u,label:`Curve`}):null]}),c?a(z,{open:u,presets:c,current:p(n.value,e=>Le(c(),e)),onPick:e=>n.set(e)}):null]})}var Ye;function Xe(){return(Xe=e((()=>{se(),pe(),_(),c(),te(),g(),m(),P(),y(),re(),Ie(),I(),B(),s(),Ye=Object.entries(me)})))()}var G;function Ze(){return(Ze=e((()=>{d(),G={bar:`msp-params-help-bar`,description:`msp-params-help-description`,ends:`msp-params-help-ends`,entry:`msp-params-help-entry`,help:`msp-params-help-help`,name:`msp-params-help-name`,scale:`msp-params-help-scale`,swatch:`msp-params-help-swatch`,table:`msp-params-help-table`,text:`msp-params-help-text`,toggle:`msp-params-help-toggle`},u(`components/params/help.module.css`,`@layer msp.components {
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
`)})))()}function Qe(e,t){let n=e=>e&&(e.description||e.legend)?e:void 0;if(e.help){let r=e.help;return p(t,e=>{try{return n(r(e))}catch{return}},(e,t)=>e?.description===t?.description&&e?.legend===t?.legend)}let r=n({description:e.description,legend:e.legend});return r?h(r).asReadonly:void 0}function $e(e,n,i){if(!n)return{head:a(`span`,{class:G.text,id:i,"data-tip-overflow":``,children:e}),block:null};let s=h(!1),c=p(n,e=>!!e),l,u=o(r,{children:[a(`span`,{class:G.text,id:i,"data-tip-overflow":``,ref:e=>l=e,onClick:e=>{e.currentTarget.hasAttribute(`data-help`)&&(e.stopPropagation(),s.set(!s.value))},children:e}),a(v,{when:c,children:()=>{let n=a(`button`,{type:`button`,class:G.toggle,"aria-label":`About ${e}`,title:`About ${e}`,onClick:e=>{e.stopPropagation(),s.set(!s.value)},children:a(b,{name:`circle-help`,size:12})});return t([s],()=>C(n,`aria-expanded`,String(s.value))),n}})]});return t([c],()=>C(l,`data-help`,c.value)),{head:u,block:a(et,{help:n,open:s})}}function et(e){return a(v,{when:e.open,reveal:!0,children:()=>a(v,{when:e.help,children:e=>o(`div`,{class:G.help,children:[e.description?a(`p`,{class:G.description,children:tt(e.description)}):null,e.legend?a(nt,{legend:e.legend}):null]})})})}function tt(e){return e.split(/(`[^`]+`)/).map(e=>e.startsWith("`")&&e.endsWith("`")&&e.length>1?a(`code`,{children:e.slice(1,-1)}):e)}function nt(e){let{legend:t}=e;return t.kind===`table-legend`?a(`ul`,{class:G.table,children:t.table.map(([e,t])=>o(`li`,{class:G.entry,children:[a(`span`,{class:G.swatch,style:{background:O(t)}}),a(`span`,{class:G.name,children:e})]}))}):o(`div`,{class:G.scale,children:[a(`span`,{class:G.bar,style:{background:We({kind:`interpolate`,colors:t.colors})}}),o(`span`,{class:G.ends,children:[a(`span`,{children:t.minLabel}),a(`span`,{children:t.maxLabel})]})]})}function rt(){return(rt=e((()=>{_(),c(),g(),m(),P(),y(),Xe(),Ze(),s()})))()}function it(e){let{form:t}=e;return a(`div`,{class:F.form,children:a(at,{params:t.params,field:e=>({value:t.field(e),get:()=>t.values.value[e],set:n=>t.set(e,n)}),visible:e=>t.params[e].hideIf?t.visible(e):void 0,filter:ot(e.filter),place:{form:t,path:``}})})}function K(e){return Object.keys(e).some(t=>!e[t].isHidden&&e[t].type!==`value`)}function at(e){let{params:n,filter:i,place:s}=e,{essentials:c,advanced:l}=Te(n),u=st(i),d=new Map,f=t=>(d.has(t)||d.set(t,e.visible(t)),d.get(t)),p=(e,r)=>{if(!i&&r.some(e=>!f(e)))return e;let a=[];for(let e of r){let t=f(e);t&&a.push(t)}return i&&a.push(i),t(a,()=>{let t=i?.value??``;C(e,`hidden`,!r.some(e=>f(e)?.value!==!1&&q(e,n[e],t)))}),e},m=t=>a(J,{name:t,param:n[t],binding:e.field(t),visible:f(t),filter:i,place:{form:s.form,path:`${s.path}/${t}`}}),h=(e,t)=>e.flatMap(e=>e.category?[p(a(`div`,{children:a($,{title:e.category,state:s.form.fold(`${s.path}#${t}${e.category}`),force:u,children:()=>e.names.map(m)})}),e.names)]:e.names.map(m));return!c.length||!l.length?a(r,{children:h(c.length?c:l,``)}):o(r,{children:[h(c,``),p(a(`div`,{children:a($,{title:`Advanced`,state:s.form.fold(`${s.path}#advanced`),force:u,children:()=>h(l,`advanced/`)})}),l.flatMap(e=>e.names))]})}function ot(e){return e&&p(e,e=>e.trim().toLowerCase())}function st(e){return e&&p(e,e=>e.length>0)}function ct(e,t){return t.label||fe(e)}function lt(e,t){let n=t.trim().toLowerCase();return Object.keys(e).some(t=>!e[t].isHidden&&q(t,e[t],n))}function q(e,t,n){return!n||ct(e,t).toLowerCase().includes(n)||t.description?.toLowerCase().includes(n)?!0:t.type===`group`?Object.keys(t.params).some(e=>q(e,t.params[e],n)):t.type===`mapped`&&t.select.options.some(([e])=>{let r=t.map(e);return r.type===`group`?Object.keys(r.params).some(e=>q(e,r.params[e],n)):q(e,r,n)})}function J(e){let{name:n,param:r,binding:i,filter:s,place:c}=e,l=ct(n,r),u=e.visible,d=[];u&&d.push(u),s&&d.push(s);let f=(...e)=>{let i=a(`div`,{children:e});return d.length&&t(d,()=>C(i,`hidden`,!((u?.value??!0)&&q(n,r,s?.value??``)))),i},m=s&&p(s,e=>l.toLowerCase().includes(e)?``:e);if(r.type===`group`)return f(a(_t,{label:l,param:r,binding:i,filter:m,force:st(s),place:c}));let h=oe(`msp-field`),{head:g,block:_}=$e(l,Qe(r,i.value),h),v=e=>f(e,_);if(r.type===`mapped`)return v(yt(r)?a(bt,{label:l,labelId:h,head:g,description:r.description,param:r,binding:i,place:c}):a(xt,{label:l,head:g,param:r,binding:i,filter:m,force:st(s),place:c}));if(r.type===`select`)return v(a(Z,{label:l,head:g,description:r.description,options:r.options,binding:i}));if(r.type===`color`)return v(a(ut,{label:l,labelId:h,head:g,description:r.description,binding:i}));if(r.type===`multi-select`)return v(a(Be,{head:g,label:l,param:r,binding:i}));if(r.type===`mat4`)return v(a(He,{head:g,label:l,param:r,binding:i}));if(r.type===`line-graph`)return v(a(qe,{head:g,label:l,param:r,binding:i}));if(r.type===`color-list`)return v(a(Ge,{head:g,label:l,param:r,binding:i}));if(r.type===`object-list`)return v(a(wt,{head:g,label:l,param:r,binding:i}));if(r.type===`conditioned`)return v(a(St,{head:g,label:l,param:r,binding:i,place:c}));if(r.type===`script`)return v(a(Ct,{head:g,label:l,binding:i}));if(r.type===`converted`){let t={value:p(i.value,e=>r.fromValue(e)),get:()=>r.fromValue(i.get()),set:e=>i.set(r.toValue(e))},o={...r.converted,label:r.converted.label??l};return a(J,{name:n,param:o,binding:t,visible:e.visible,filter:s,place:c})}return r.type===`value`?null:v(o(`div`,{class:F.row,children:[a(`span`,{class:F.label,children:g}),a(`div`,{class:F.control,children:ft(r,i,h,l)})]}))}function ut(e){let{binding:n,labelId:i}=e,s=h(!1),c,l,u=document.createTextNode(``),d=o(r,{children:[o(`div`,{class:F.row,children:[a(`span`,{class:F.label,children:e.head??a(`span`,{id:i,children:e.label})}),a(`div`,{class:F.control,children:o(`button`,{type:`button`,class:F.color,"aria-labelledby":`${i} ${i}-value`,ref:e=>l=e,onClick:()=>s.set(!s.value),children:[a(`span`,{class:F.swatch,ref:e=>c=e}),a(`span`,{class:F.channels,id:`${i}-value`,"data-tip-overflow":``,children:u})]})})]}),a(v,{when:s,reveal:!0,children:()=>a(Ne,{value:n.value,onChange:e=>n.set(e)})})]});return t([n.value,s],()=>{let e=n.get();w(c,`background`,O(e)),S(u,k(e)),C(l,`aria-expanded`,String(s.value))}),d}function dt(e){let{param:n,binding:r,labelId:i}=e,s=n.type===`file-list`,c=h(!1),l=e=>{e.length&&r.set(s?e.map(e=>ue.File(e)):ue.File(e[0]))},u=a(`input`,{type:`file`,hidden:!0,multiple:s,accept:n.accept,onChange:e=>{l([...e.currentTarget.files??[]]),e.currentTarget.value=``}}),d=p(r.value,e=>(e?Array.isArray(e)?e:[e]:[]).map(e=>e.name)),f,m,g=document.createTextNode(``),_=o(`div`,{class:F.file,ref:e=>f=e,children:[a(`button`,{type:`button`,class:F.filePick,"aria-labelledby":i?`${i} ${i}-value`:void 0,onClick:()=>u.click(),onDragOver:e=>{e.preventDefault(),c.set(!0)},onDragLeave:()=>c.set(!1),onDrop:e=>{e.preventDefault(),e.stopPropagation(),c.set(!1),l([...e.dataTransfer?.files??[]])},children:a(`span`,{class:F.fileNames,id:i?`${i}-value`:void 0,ref:e=>m=e,children:g})}),a(v,{when:p(d,e=>e.length>0),children:()=>a(`button`,{type:`button`,class:F.fileClear,"aria-label":`Clear`,title:`Clear`,onClick:()=>r.set(null),children:a(b,{name:`x`,size:13})})}),u]});return t([d,c],()=>{let e=d.value;C(f,`data-dragging`,c.value),C(m,`data-empty`,e.length===0),S(g,e.length===0?s?`Select files…`:`Select a file…`:e.length===1?e[0]:`${e.length} files · ${e.join(`, `)}`)}),_}function ft(e,t,n,r){switch(e.type){case`boolean`:return a(mt,{binding:t,labelId:n});case`number`:return a(ht,{param:e,binding:t,labelId:n});case`text`:return a(pt,{binding:t,labelId:n,placeholder:e.placeholder,multiline:e.multiline});case`file`:case`file-list`:return a(dt,{param:e,binding:t,labelId:n});case`vec3`:return a(Ve,{param:e,binding:t,label:r});case`interval`:return a(Ue,{param:e,binding:t,label:r});case`url`:return a(Ke,{binding:t,labelId:n});default:return a(`span`,{class:F.unsupported,children:e.type})}}function pt(e){let{binding:n}=e,r=e.multiline?a(`textarea`,{class:F.textarea,rows:3,"aria-labelledby":e.labelId,placeholder:e.placeholder,onChange:e=>n.set(e.currentTarget.value)}):a(`input`,{class:F.input,"aria-labelledby":e.labelId,placeholder:e.placeholder,onChange:e=>n.set(e.currentTarget.value)});return t([n.value],()=>Y(r,n.get())),r}function Y(e,t){let n=t==null?``:String(t);e.value!==n&&(e.value=n)}function mt(e){let{binding:n}=e,r=a(`button`,{type:`button`,role:`switch`,class:F.switch,"aria-labelledby":e.labelId,onClick:()=>n.set(!n.get()),children:a(`span`,{class:F.knob})});return t([n.value],()=>C(r,`aria-checked`,String(!!n.get()))),r}function ht(e){let{param:r,binding:i,labelId:s}=e;if(r.min===void 0||r.max===void 0){let e=a(`input`,{class:F.input,type:`text`,inputMode:`decimal`,"aria-labelledby":s,onChange:e=>{let t=gt(e.currentTarget.value);Number.isFinite(t)&&i.set(t),e.currentTarget.value=X(Number.isFinite(t)?t:i.get(),r.step)}});return t([i.value],()=>Y(e,X(i.get(),r.step))),e}let c=r.min,u=r.max,d=l(NaN,(e,t)=>Object.is(e,t));n(d,e=>{Number.isNaN(e)||i.set(e)});let f,p,m=o(`div`,{class:F.slider,children:[a(`input`,{class:F.range,type:`range`,"aria-labelledby":s,min:String(c),max:String(u),step:String(r.step??(u-c)/100),ref:e=>f=e,onInput:e=>d.offer(Number(e.currentTarget.value))}),a(`input`,{class:F.number,"aria-labelledby":s,ref:e=>p=e,onChange:e=>{let t=gt(e.currentTarget.value),n=Number.isFinite(t)?Math.min(u,Math.max(c,t)):i.get();Number.isFinite(t)&&i.set(n),e.currentTarget.value=X(n,r.step)}})]});return t([i.value],()=>{let e=i.get();Y(f,e),w(f,`--msp-progress`,`${100*(e-c)/(u-c||1)}%`),Y(p,X(e,r.step))}),m}function X(e,t){if(!Number.isFinite(e))return``;if(t===void 0)return String(Number(e.toFixed(4)));let n=t<1?Math.min(4,Math.ceil(-Math.log10(t))):0;return e.toFixed(n)}function gt(e){let t=e.trim().replace(`,`,`.`);return t===``?NaN:Number(t)}function Z(e){let{options:n,binding:i}=e,s=h(!1),c=p(i.value,e=>String(n.findIndex(t=>t[0]===e))),l=n.map(([,e,t],n)=>[String(n),e,t]),u,d=document.createTextNode(``),f=o(r,{children:[o(`div`,{class:F.row,children:[a(`span`,{class:F.label,children:e.head??e.label}),o(`div`,{class:F.control,ref:e=>u=e,children:[a(ge,{size:`sm`,open:s,"aria-label":e.label,label:d}),e.after]})]}),a(v,{when:s,children:()=>{let t=a(ve,{options:l,value:c,onPick:e=>{s.set(!1),i.set(n[Number(e)][0])},onClose:()=>s.set(!1),floating:!0,"aria-label":e.label});return u?a(ye,{anchor:u,children:t}):t}})]});return t([c],()=>S(d,l[Number(c.value)]?.[1]??``)),f}function _t(e){let{param:t,binding:n,filter:i,place:s}=e;if(!K(t.params))return null;let c=t.presets,l=e=>a(Q,{params:e,binding:n,filter:i,place:s}),u=s.form.fold(`${s.path}#open`,!!t.isExpanded),d=e=>n.set({...n.get()??{},...e}),f=c?p(n.value,e=>Le(c,e,!0)):void 0;if(t.isFlat)return o(r,{children:[c&&f?a(vt,{label:e.label,presets:c,current:f,onPick:d}):null,l(t.params)]});let m=typeof t.pivot==`string`&&t.params[t.pivot]?t.pivot:void 0;if(m&&(!c||!f)){let{[m]:n,...i}=t.params;return o(r,{children:[l({[m]:n}),K(i)?a($,{title:e.label,state:u,force:e.force,children:()=>l(i)}):null]})}if(!c||!f)return a($,{title:e.label,state:u,force:e.force,children:()=>l(t.params)});let g=h(!1),_=h(!1);return a($,{title:e.label,state:u,force:e.force,openWhen:_.asReadonly,meta:p(f,e=>e===void 0?``:c[e][1]),action:a(R,{open:g,label:e.label}),below:()=>a(z,{open:g,presets:()=>c,current:f,onPick:e=>{d(e),_.set(!0)}}),children:()=>l(t.params)})}function vt(e){let n=h(!1),i,s=document.createTextNode(``),c=o(r,{children:[o(`div`,{class:F.row,children:[a(`span`,{class:F.label,children:`Presets`}),a(`div`,{class:F.control,ref:e=>i=e,children:a(ge,{size:`sm`,open:n,"aria-label":`${e.label} presets`,label:s})})]}),a(z,{open:n,presets:()=>e.presets,current:e.current,onPick:e.onPick,anchor:()=>i})]});return t([e.current],()=>{let t=e.current.value;S(s,t===void 0?`Custom`:e.presets[t][1])}),c}function yt(e){let t=e.select.options.map(e=>e[0]).sort();return t.length===2&&t[0]===`off`&&t[1]===`on`}function bt(e){let{param:t,binding:n,place:i}=e,s=p(n.value,e=>e?.name===`on`),c=i.form.fold(`${i.path}#params`),l=e=>n.set({name:e,params:Dt(t.map(e))}),u={value:s,get:()=>n.get()?.name===`on`,set:e=>{l(e?`on`:`off`),e||c.set(!1)}},d=t.map(`on`),f=d.type===`group`&&K(d.params),m={value:p(n.value,e=>e?.params),get:()=>n.get()?.params,set:e=>n.set({name:`on`,params:e})};return o(r,{children:[o(`div`,{class:F.row,children:[a(`span`,{class:F.label,children:e.head??a(`span`,{id:e.labelId,children:e.label})}),o(`div`,{class:F.control,children:[a(mt,{binding:u,labelId:e.labelId}),f?a(v,{when:s,children:()=>a(Et,{open:c.asReadonly,label:`${e.label} settings`,onClick:()=>c.set(!c.value)})}):null]})]}),f?a(v,{when:p([s,c.asReadonly],(e,t)=>e&&t),children:()=>a(`div`,{class:F.subSettings,children:a(Q,{params:d.params,binding:m,place:{form:i.form,path:`${i.path}:on`}})})}):null]})}function xt(e){let{param:t,binding:n,place:r}=e,i=p(n.value,e=>e?.name),s={value:i,get:()=>n.get()?.name,set:e=>{let r=t.map(e);n.set({name:e,params:Dt(r)})}},c=p(i,e=>{if(e===void 0)return!1;let n=t.map(e);return n.type===`group`&&!n.isFlat&&K(n.params)}),l=r.form.fold(`${r.path}#params`),u=e.force?p([l.asReadonly,e.force],(e,t)=>e||t):l.asReadonly,d=a(v,{when:c,children:()=>a(Et,{open:u,label:`${e.label} settings`,extraClass:F.afterSelect,onClick:()=>l.set(!l.value)})});return o(`div`,{class:F.mapped,children:[a(Z,{label:e.label,head:e.head,options:t.select.options,binding:s,after:d}),a(v,{when:i,children:i=>{let o=t.map(i),s={value:p(n.value,e=>e?.params),get:()=>n.get()?.params,set:e=>n.set({name:i,params:e})},c={form:r.form,path:`${r.path}:${i}`};return o.type===`group`?o.isFlat?a(Q,{params:o.params,binding:s,filter:e.filter,place:c}):K(o.params)?a(v,{when:u,reveal:!0,children:()=>a(Q,{params:o.params,binding:s,filter:e.filter,place:c,nested:!0})}):null:a(J,{name:i,param:o,binding:s,filter:e.filter,place:c})}})]})}function Q(e){let{params:t,binding:n}=e;return a(`div`,{class:e.nested?F.nested:F.fields,children:a(at,{params:t,field:e=>({value:p(n.value,t=>t?.[e]),get:()=>n.get()?.[e],set:t=>n.set({...n.get(),[e]:t})}),visible:e=>{let r=t[e].hideIf;if(r)return p(n.value,e=>!r(e??{}))},filter:e.filter,place:e.place})})}function St(e){let{param:t,binding:n,place:r}=e,i=p(n.value,e=>String(t.conditionForValue(e))),s={value:i,get:()=>String(t.conditionForValue(n.get())),set:e=>n.set(t.conditionedValue(n.get(),e))};return o(`div`,{class:F.mapped,children:[a(Z,{label:e.label,head:e.head,options:t.select.options,binding:s}),a(v,{when:i,children:e=>a(`div`,{class:F.nested,children:a(J,{name:e,param:t.conditionParams[e],binding:n,place:{form:r.form,path:`${r.path}:${e}`}})})})]})}function Ct(e){let{binding:n}=e,r=e=>({value:p(n.value,t=>t?.[e]??``),get:()=>n.get()?.[e],set:t=>n.set({...n.get(),[e]:t})}),i=r(`expression`),s=oe(`msp-field`),c,l=o(`div`,{class:F.mapped,children:[a(Z,{label:e.label,head:e.head,options:Ot,binding:r(`language`)}),a(`div`,{class:F.nested,children:o(`div`,{class:F.row,children:[a(`span`,{class:F.label,id:s,children:`Expression`}),a(`div`,{class:F.control,children:a(`textarea`,{class:F.textarea,"aria-labelledby":s,rows:3,spellcheck:!1,ref:e=>c=e,onChange:e=>i.set(e.currentTarget.value)})})]})})]});return t([i.value],()=>Y(c,i.get())),l}function wt(e){let{param:n,binding:i}=e,s=n.presets,c=h(!1),l=p(i.value,e=>e??[]),u=(e,t)=>{let n=[...i.get()??[]];n[e]=t,i.set(n)},d=document.createTextNode(``),f=o(r,{children:[o(`div`,{class:F.row,children:[a(`span`,{class:F.label,children:e.head}),a(`div`,{class:F.control,children:a(`span`,{class:F.count,children:d})})]}),o(`div`,{class:F.items,children:[a(ee,{each:p(l,e=>e.map((e,t)=>t)),children:e=>a(Tt,{param:n,binding:i,index:e,replace:u})}),o(`div`,{class:F.itemActions,children:[o(`button`,{type:`button`,class:F.itemAdd,"aria-label":`Add to ${e.label}`,onClick:()=>i.set([...i.get()??[],n.ctor()]),children:[a(b,{name:`plus`,size:13}),`Add`]}),s?a(R,{open:c,label:e.label}):null]}),s?a(z,{open:c,presets:()=>s,current:p(i.value,e=>Le(s,e)),onPick:e=>i.set(e)}):null]})]});return t([l],()=>{let e=l.value.length;S(d,e===1?`1 item`:`${e} items`)}),f}function Tt(e){let{param:n,binding:r,index:i}=e,s=h(!1),c,l,u=document.createTextNode(``),d=o(`div`,{class:F.item,ref:e=>c=e,children:[o(`div`,{class:F.itemRow,onClick:()=>s.set(!s.value),children:[a(`span`,{class:F.itemLabel,children:u}),a(`button`,{type:`button`,class:F.settings,title:`Edit`,"aria-label":`Edit`,ref:e=>l=e,onClick:e=>{e.stopPropagation(),s.set(!s.value)},children:a(b,{name:`sliders-horizontal`,size:14})}),a(`button`,{type:`button`,class:F.settings,title:`Remove`,"aria-label":`Remove`,onClick:e=>{e.stopPropagation(),r.set((r.get()??[]).filter((e,t)=>t!==i))},children:a(b,{name:`x`,size:13})})]}),a(v,{when:s,reveal:!0,children:()=>{let t=new T(n.element,r.get()?.[i],{onChange:t=>e.replace(i,t)});return a(`div`,{class:F.itemForm,children:a(it,{form:t})})}})]}),f=p(r.value,e=>e?.[i]===void 0?``:n.getLabel(e[i]));return t([f,s],()=>{S(u,f.value),C(c,`data-open`,s.value),C(l,`aria-expanded`,String(s.value))}),d}function Et(e){let n=a(`button`,{type:`button`,class:e.extraClass?`${F.settings} ${e.extraClass}`:F.settings,title:e.label,"aria-label":e.label,onClick:e.onClick,children:a(b,{name:`sliders-horizontal`,size:14})});return t([e.open],()=>C(n,`aria-expanded`,String(e.open.value))),n}function Dt(e){if(e.type===`group`){let t={};for(let n of Object.keys(e.params))t[n]=e.params[n].defaultValue;return t}return e.defaultValue}function $(e){let r=e.state??h(!!e.open),i=e.openWhen;if(i){let e=i.value;n(i,t=>{t&&!e&&r.set(!0),e=t})}let s=e.force?p([r.asReadonly,e.force],(e,t)=>e||t):r.asReadonly,c=e.meta,l,u=document.createTextNode(``),d=o(`div`,{class:F.collapsible,children:[o(`div`,{class:F.collapsibleBar,children:[o(`button`,{type:`button`,class:F.collapsibleHeader,ref:e=>l=e,onClick:()=>r.set(!r.value),children:[e.title,a(b,{name:`chevron-right`,size:12,class:F.chevron}),c?a(`span`,{class:F.collapsibleMeta,children:u}):null]}),e.action]}),e.below?.(),a(v,{when:s,reveal:!0,children:()=>a(`div`,{class:F.nested,children:e.children()})})]});return t(c?[s,c]:[s],()=>{C(l,`aria-expanded`,String(s.value)),c&&S(u,c.value)}),d}var Ot;function kt(){return(kt=e((()=>{se(),de(),_(),ae(),c(),E(),g(),_e(),P(),y(),I(),Xe(),rt(),B(),m(),s(),Ot=[[`mol-script`,`MolScript`],[`pymol`,`PyMOL`],[`vmd`,`VMD`],[`jmol`,`Jmol`]]})))()}export{w as _,z as a,Ne as c,T as d,E as f,Ce as g,Se as h,R as i,O as l,C as m,kt as n,B as o,we as p,lt as r,Fe as s,it as t,P as u,S as v};