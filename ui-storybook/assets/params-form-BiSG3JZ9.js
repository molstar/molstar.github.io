import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{_ as t,f as n,h as r,i,n as a,r as o,t as s}from"./jsx-runtime-DzTO5r4L.js";import{n as c,r as l}from"./registry-D35yV2Tb.js";import{I as u,N as d,P as f,j as p,l as m,s as h}from"./Observable-BU2k-uIj.js";import{i as g,r as ee}from"./OperatorSubscriber-ClXQ1A6p.js";import{n as te,t as ne}from"./Subject-DEROcNsU.js";import{n as re,t as ie}from"./dateTimestampProvider-BTqAwBHu.js";import{a as ae,o as oe}from"./from-C2oaWhAF.js";import{c as se,i as _,l as v,n as y,t as ce}from"./control-flow-2XcFB3wB.js";import{n as b,t as x}from"./map-COHPbqb4.js";import{n as le,t as S}from"./combineLatest-nINHdI9G.js";import{n as C,t as w}from"./distinctUntilChanged-Bi0nDGSG.js";import{n as T,r as E}from"./observable-state-8hMFvtS9.js";import{n as D,t as O}from"./icon-Fyk1xIJy.js";import{n as ue,t as de}from"./scroll-area-O9ZFxK58.js";import{D as fe,H as pe,W as me,it as he,k as ge,n as _e,t as ve,tt as ye}from"./param-definition-OHPHmB1q.js";import{a as be,o as xe,r as Se,s as Ce,t as we}from"./select-qi6jJ7y0.js";import{n as Te,t as Ee}from"./names-DbgGgpWr.js";var De;function Oe(){return(Oe=e((()=>{u(),te(),re(),De=function(e){p(t,e);function t(t,n,r){t===void 0&&(t=1/0),n===void 0&&(n=1/0),r===void 0&&(r=ie);var i=e.call(this)||this;return i._bufferSize=t,i._windowTime=n,i._timestampProvider=r,i._buffer=[],i._infiniteTimeWindow=!0,i._infiniteTimeWindow=n===1/0,i._bufferSize=Math.max(1,t),i._windowTime=Math.max(1,n),i}return t.prototype.next=function(t){var n=this,r=n.isStopped,i=n._buffer,a=n._infiniteTimeWindow,o=n._timestampProvider,s=n._windowTime;r||(i.push(t),!a&&i.push(o.now()+s)),this._trimBuffer(),e.prototype.next.call(this,t)},t.prototype._subscribe=function(e){this._throwIfClosed(),this._trimBuffer();for(var t=this._innerSubscribe(e),n=this,r=n._infiniteTimeWindow,i=n._buffer.slice(),a=0;a<i.length&&!e.closed;a+=r?1:2)e.next(i[a]);return this._checkFinalizedStatuses(e),t},t.prototype._trimBuffer=function(){var e=this,t=e._bufferSize,n=e._timestampProvider,r=e._buffer,i=e._infiniteTimeWindow,a=(i?1:2)*t;if(t<1/0&&a<r.length&&r.splice(0,r.length-a),!i){for(var o=n.now(),s=0,c=1;c<r.length&&r[c]<=o;c+=2)s=c;s&&r.splice(0,s+1)}},t}(ne)})))()}function ke(e){e===void 0&&(e={});var t=e.connector,n=t===void 0?function(){return new ne}:t,r=e.resetOnError,i=r===void 0||r,a=e.resetOnComplete,o=a===void 0||a,s=e.resetOnRefCountZero,c=s===void 0||s;return function(e){var t,r,a,s=0,l=!1,u=!1,d=function(){r?.unsubscribe(),r=void 0},f=function(){d(),t=a=void 0,l=u=!1},p=function(){var e=t;f(),e?.unsubscribe()};return g(function(e,m){s++,!u&&!l&&d();var g=a??=n();m.add(function(){s--,s===0&&!u&&!l&&(r=Ae(p,c))}),g.subscribe(m),!t&&s>0&&(t=new h({next:function(e){return g.next(e)},error:function(e){u=!0,d(),r=Ae(f,i,e),g.error(e)},complete:function(){l=!0,d(),r=Ae(f,o),g.complete()}}),oe(e).subscribe(t))})(e)}}function Ae(e,t){var n=[...arguments].slice(2);if(t===!0)e();else if(t!==!1){var r=new h({next:function(){r.unsubscribe(),e()}});return oe(t.apply(void 0,f([],d(n)))).subscribe(r)}}function je(){return(je=e((()=>{u(),ae(),te(),m(),ee()})))()}function Me(e,t,n){var r,i,a,o,s=!1;return e&&typeof e==`object`?(r=e.bufferSize,o=r===void 0?1/0:r,i=e.windowTime,t=i===void 0?1/0:i,a=e.refCount,s=a!==void 0&&a,n=e.scheduler):o=e??1/0,ke({connector:function(){return new De(o,t,n)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:s})}function Ne(){return(Ne=e((()=>{Oe(),je()})))()}function k(e=document){let t=e.activeElement;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;if(t&&t!==e.body&&t!==e.documentElement&&!(t.shadowRoot&&!t.shadowRoot.activeElement&&t.tabIndex<0))return t}function Pe(e){return[...e.querySelectorAll(Ue)].filter(e=>!e.closest(`[hidden], [inert]`))}function Fe(e,t){if(e.key!==`Tab`||e.defaultPrevented)return;let n=Pe(t);if(!n.length)return;let r=k(t.ownerDocument),i=!!r&&t.contains(r);e.shiftKey&&(!i||r===n[0])?(e.preventDefault(),n[n.length-1].focus()):!e.shiftKey&&(!i||r===n[n.length-1])&&(e.preventDefault(),n[0].focus())}function Ie(e){let t=k();return n=>{let r=k();if(r&&!(n&&n.contains(r)))return;let i=t?.isConnected?t:e?.();i?.isConnected&&i.focus({preventScroll:!0})}}function Le(e){if(!e)return!1;try{return e.matches(`:focus-visible`)}catch{return k(e.ownerDocument)===e}}function Re(e){return[...e.querySelectorAll(We)].filter(e=>!e.hasAttribute(`disabled`)&&e.getAttribute(`aria-disabled`)!==`true`&&!e.closest(`[hidden]`))}function ze(e,t=!1){let n=Re(e),r=(t?n.find(e=>e.getAttribute(`aria-checked`)===`true`):void 0)??n[0];return r?.focus(),!!r}function Be(e){if(e.defaultPrevented)return;let t=e.currentTarget,n=Re(t);if(!n.length)return;let r=n.indexOf(k(t.ownerDocument)),i=n.length,a;switch(e.key){case`ArrowDown`:a=n[r<0?0:(r+1)%i];break;case`ArrowUp`:a=n[r<0?i-1:(r-1+i)%i];break;case`Home`:a=n[0];break;case`End`:a=n[i-1];break;default:return}e.preventDefault(),a.focus()}function Ve(e){let t=()=>[...e.querySelectorAll(`[role="tab"]`)].filter(e=>!e.closest(`[hidden]`)),n=()=>{let n=t(),r=k(e.ownerDocument),i=n.find(e=>e===r)??n.find(e=>e.getAttribute(`aria-selected`)===`true`)??n[0];for(let e of n){let t=e===i?0:-1;e.tabIndex!==t&&(e.tabIndex=t)}},r=e=>{if(e.defaultPrevented)return;let n=t(),r=n.indexOf(e.target);if(r<0)return;let i;switch(e.key){case`ArrowDown`:case`ArrowRight`:i=n[(r+1)%n.length];break;case`ArrowUp`:case`ArrowLeft`:i=n[(r-1+n.length)%n.length];break;case`Home`:i=n[0];break;case`End`:i=n[n.length-1];break;default:return}e.preventDefault(),i.focus()};e.addEventListener(`keydown`,r),e.addEventListener(`focusin`,n);let i=new MutationObserver(n);return i.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`aria-selected`]}),n(),()=>{e.removeEventListener(`keydown`,r),e.removeEventListener(`focusin`,n),i.disconnect()}}function He(e=`msp`){return`${e}-${++Ge}`}var Ue,We,Ge;function A(){return(A=e((()=>{Ue=`a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]), [contenteditable="true"]`,We=`[role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"]`,Ge=0})))()}function Ke(e){let t=t=>{let n={names:[]},r=new Map;for(let i of Object.keys(e)){let a=e[i];if(a.isHidden||a.type===`value`||!!a.isEssential!==t)continue;if(!a.category){n.names.push(i);continue}let o=r.get(a.category);o||(o={category:a.category,names:[]},r.set(a.category,o)),o.names.push(i)}let i=[...r.values()].sort((e,t)=>e.category<t.category?-1:1);return n.names.length?[n,...i]:i};return{essentials:t(!0),advanced:t(!1)}}var qe;function Je(){return(Je=e((()=>{_e(),C(),x(),T(),qe=class{#e;#t;#n=new Map;#r=new Map;constructor(e,t=ve.getDefaultValues(e),n={}){this.params=e,this.options=n,this.#t=ve.getDefaultValues(e),this.#e=E({...this.#t,...t},{compare:Object.is})}get values(){return this.#e.asReadonly}field(e){let t=this.#n.get(e);return t||(t=this.#e.asReadonly.pipe(b(t=>t[e]),w()),this.#n.set(e,t)),t}visible(e){let t=this.params[e];return t.hideIf?this.#e.asReadonly.pipe(b(e=>!t.hideIf(e)),w()):this.#e.asReadonly.pipe(b(()=>!0),w())}set(e,t){let n=this.#e.value;if(Object.is(n[e],t))return;let r={...n,[e]:t};this.#e.set(r),this.options.onChange?.(r,e)}load(e){this.#e.set({...this.#t,...e})}reset(){let e=this.#e.value,t={...this.#t};this.#e.set(t);for(let n of Object.keys(this.params))ve.isParamEqual(this.params[n],e[n],t[n])||this.options.onChange?.(t,n)}layout(){let e=[],t=[];for(let n of Object.keys(this.params)){let r=this.params[n];r.isHidden||(r.isEssential?e.push(n):t.push(n))}return e.length?{essentials:e,advanced:t}:{essentials:t,advanced:[]}}fold(e,t=!1){let n=this.#r.get(e);return n||(n=E(t),this.#r.set(e,n)),n}}})))()}var j;function Ye(){return(Ye=e((()=>{l(),j={custom:`msp-color-color-picker-custom`,field:`msp-color-color-picker-field`,greys:`msp-color-color-picker-greys`,marker:`msp-color-color-picker-marker`,palette:`msp-color-color-picker-palette`,picker:`msp-color-color-picker-picker`,preview:`msp-color-color-picker-preview`,swatch:`msp-color-color-picker-swatch`,text:`msp-color-color-picker-text`},c(`components/color/color-picker.module.css`,`@layer msp.components {
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
`)})))()}function Xe(e){let t=e>>16&255,n=e>>8&255,r=e&255,i=(Math.max(t,n,r)+Math.min(t,n,r))/510,a=Math.round(7*(1-i)),o=7-a,s=[];for(let t=a;t>0;t--)s.push(P(e,.9*t/a));s.push(e);for(let t=1;t<=o;t++)s.push(P(e,-.85*t/o));return s}function M(e){return`#${(e>>>0&16777215).toString(16).padStart(6,`0`)}`}function N(e){return`${e>>16&255}, ${e>>8&255}, ${e&255}`}function Ze(e){let t=e.trim().toLowerCase();if(!t)return;let n=/^(?:#|0x)?([0-9a-f]{3}|[0-9a-f]{6})$/.exec(t);if(n){let e=n[1].length===3?n[1].replace(/./g,e=>e+e):n[1];return Number.parseInt(e,16)}let r=/^(rgba?|hsla?)?\s*\(?\s*([^()]*?)\s*\)?$/.exec(t);if(r){let e=r[2].split(/\s*[,;/\s]\s*/).filter(Boolean);if(e.length===3||e.length===4){let t=e.slice(0,3);if(t.every(e=>/^[+]?(\d+\.?\d*|\.\d+)%?$/.test(e))){if(r[1]?.startsWith(`hsl`))return Qe(t);let e=t.some(e=>e.endsWith(`%`)),n=t.map(e=>Number.parseFloat(e)),i=!e&&n.every(e=>e<=1)&&t.some(e=>e.includes(`.`)),a=t=>e?t*255/100:i?t*255:t;return!e&&!i&&n.some(e=>e>255)?void 0:F(I(a(n[0])),I(a(n[1])),I(a(n[2])))}}}let i=t.replace(/[\s_-]/g,``);return Object.hasOwn(Ee,i)?Ee[i]:void 0}function Qe(e){let t=(Number.parseFloat(e[0])%360+360)%360/60,n=Math.min(1,Number.parseFloat(e[1])/100),r=Math.min(1,Number.parseFloat(e[2])/100),i=(1-Math.abs(2*r-1))*n,a=i*(1-Math.abs(t%2-1)),o=r-i/2,[s,c,l]=t<1?[i,a,0]:t<2?[a,i,0]:t<3?[0,i,a]:t<4?[0,a,i]:t<5?[a,0,i]:[i,0,a];return F(I((s+o)*255),I((c+o)*255),I((l+o)*255))}function P(e,t){let n=t>0?255:0,r=Math.abs(t),i=t=>{let i=e>>t&255;return Math.round(i+(n-i)*r)<<t};return i(16)|i(8)|i(0)}function $e(e){let t=e*6%6,n=t-Math.floor(t),r=I(n*255),i=255-r;switch(Math.floor(t)){case 0:return F(255,r,0);case 1:return F(i,255,0);case 2:return F(0,255,r);case 3:return F(0,i,255);case 4:return F(r,0,255);default:return F(255,0,i)}}function et(e,t){let n=$e(Math.max(0,Math.min(1,e))),r=Math.max(0,Math.min(1,t));return r<.5?P(n,L*(1-r/.5)):P(n,-.9*((r-.5)/.5))}function tt(e){let t=e>>16&255,n=e>>8&255,r=e&255,i=Math.max(t,n,r),a=Math.min(t,n,r);if(i-a<16)return{greys:!0,x:(t+n+r)/765,y:.5};let o=i-a,s=i===t?((n-r)/o+6)%6:i===n?(r-t)/o+2:(t-n)/o+4,c=(i+a)/510,l=c>=.5?.5*(1-(2*c-1)/L):.5+.5*(1-2*c)/L;return{greys:!1,x:s/6,y:Math.max(0,Math.min(1,l))}}function nt(e){let t=e.value.pipe(w()),r=t.pipe(b(tt)),i=0,s,c=E(0),l=!1,u=c.asReadonly.pipe(b(Xe),Me({bufferSize:1,refCount:!0}));n(t,e=>{i=e,l||c.set(e),s&&Ce(s)!==s&&(s.value=N(e))});let d=t=>n=>{if(n.button!==0)return;let r=n.currentTarget;r.setPointerCapture(n.pointerId);let i=n=>{let i=r.getBoundingClientRect();e.onChange(t((n.clientX-i.left)/i.width,(n.clientY-i.top)/i.height))},a=()=>{r.removeEventListener(`pointermove`,i),r.removeEventListener(`pointerup`,a),r.removeEventListener(`pointercancel`,a)};r.addEventListener(`pointermove`,i),r.addEventListener(`pointerup`,a),r.addEventListener(`pointercancel`,a),i(n)},f=e=>{let t=e<.03?0:e>.97?255:I(e*255);return F(t,t,t)};return o(`div`,{class:j.picker,children:[a(`div`,{class:j.field,"aria-hidden":`true`,onPointerDown:d(et),children:a(`span`,{class:j.marker,hidden:r.pipe(b(e=>e.greys)),style:{left:r.pipe(b(e=>`${e.x*100}%`)),top:r.pipe(b(e=>`${e.y*100}%`))}})}),a(`div`,{class:j.greys,"aria-hidden":`true`,onPointerDown:d(e=>f(e)),children:a(`span`,{class:j.marker,hidden:r.pipe(b(e=>!e.greys)),style:{left:r.pipe(b(e=>`${e.x*100}%`)),top:`50%`}})}),a(`div`,{class:j.palette,role:`listbox`,"aria-label":`Palette`,children:rt.map(n=>a(`button`,{type:`button`,role:`option`,class:j.swatch,style:{background:M(n)},"aria-label":N(n),"aria-selected":t.pipe(b(e=>e===n)),onClick:()=>e.onChange(n)}))}),a(`div`,{class:j.palette,role:`listbox`,"aria-label":`Weights`,children:[0,1,2,3,4,5,6,7].map(n=>{let r=u.pipe(b(e=>e[n]));return a(`button`,{type:`button`,role:`option`,class:j.swatch,style:{background:r.pipe(b(M))},"aria-label":r.pipe(b(N)),"aria-selected":S([r,t]).pipe(b(([e,t])=>e===t)),onClick:()=>{l=!0,e.onChange(Xe(c.value)[n]),l=!1}})})}),o(`div`,{class:j.custom,children:[a(`span`,{class:j.preview,style:{background:t.pipe(b(M))}}),a(`input`,{ref:e=>{s=e,e.value=N(i)},type:`text`,class:j.text,"aria-label":`Color`,placeholder:`r, g, b · #hex · rgb() · name`,"data-tip":`r, g, b; hex, rgb(), hsl() or a name`,spellcheck:!1,onInput:t=>{let n=Ze(t.currentTarget.value);n!==void 0&&e.onChange(n)},onKeyDown:e=>{e.key===`Enter`&&(e.currentTarget.value=N(i))},onBlur:e=>{e.currentTarget.value=N(i)}})]})]})}var rt,F,I,L;function R(){return(R=e((()=>{Te(),le(),C(),x(),Ne(),r(),T(),Ye(),s(),rt=[15026253,16214805,16762173,4630360,1222036,37119,7231183,14041247],F=(e,t,n)=>e<<16|t<<8|n,I=e=>Math.max(0,Math.min(255,Math.round(e))),L=.9})))()}var z;function B(){return(B=e((()=>{l(),z={afterSelect:`msp-params-params-form-afterSelect`,channels:`msp-params-params-form-channels`,chevron:`msp-params-params-form-chevron`,collapsible:`msp-params-params-form-collapsible`,collapsibleBar:`msp-params-params-form-collapsibleBar`,collapsibleHeader:`msp-params-params-form-collapsibleHeader`,collapsibleMeta:`msp-params-params-form-collapsibleMeta`,color:`msp-params-params-form-color`,control:`msp-params-params-form-control`,count:`msp-params-params-form-count`,fields:`msp-params-params-form-fields`,file:`msp-params-params-form-file`,fileClear:`msp-params-params-form-fileClear`,fileNames:`msp-params-params-form-fileNames`,filePick:`msp-params-params-form-filePick`,form:`msp-params-params-form-form`,input:`msp-params-params-form-input`,item:`msp-params-params-form-item`,itemActions:`msp-params-params-form-itemActions`,itemAdd:`msp-params-params-form-itemAdd`,itemForm:`msp-params-params-form-itemForm`,itemLabel:`msp-params-params-form-itemLabel`,itemRow:`msp-params-params-form-itemRow`,items:`msp-params-params-form-items`,knob:`msp-params-params-form-knob`,label:`msp-params-params-form-label`,mapped:`msp-params-params-form-mapped`,nested:`msp-params-params-form-nested`,number:`msp-params-params-form-number`,presets:`msp-params-params-form-presets`,presetsList:`msp-params-params-form-presetsList`,range:`msp-params-params-form-range`,row:`msp-params-params-form-row`,select:`msp-params-params-form-select`,settings:`msp-params-params-form-settings`,slider:`msp-params-params-form-slider`,subSettings:`msp-params-params-form-subSettings`,swatch:`msp-params-params-form-swatch`,switch:`msp-params-params-form-switch`,textarea:`msp-params-params-form-textarea`,unsupported:`msp-params-params-form-unsupported`},c(`components/params/params-form.module.css`,`@layer msp.components {
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
`)})))()}var V;function it(){return(it=e((()=>{l(),V={check:`msp-params-extra-controls-check`,chevron:`msp-params-extra-controls-chevron`,curve:`msp-params-extra-controls-curve`,field:`msp-params-extra-controls-field`,fieldContent:`msp-params-extra-controls-fieldContent`,graph:`msp-params-extra-controls-graph`,graphArea:`msp-params-extra-controls-graphArea`,graphAt:`msp-params-extra-controls-graphAt`,graphEditor:`msp-params-extra-controls-graphEditor`,graphFoot:`msp-params-extra-controls-graphFoot`,graphHint:`msp-params-extra-controls-graphHint`,grid:`msp-params-extra-controls-grid`,interval:`msp-params-extra-controls-interval`,intervalRange:`msp-params-extra-controls-intervalRange`,intervalTrack:`msp-params-extra-controls-intervalTrack`,intervalValue:`msp-params-extra-controls-intervalValue`,matrix:`msp-params-extra-controls-matrix`,option:`msp-params-extra-controls-option`,options:`msp-params-extra-controls-options`,optionsContent:`msp-params-extra-controls-optionsContent`,point:`msp-params-extra-controls-point`,spark:`msp-params-extra-controls-spark`,strip:`msp-params-extra-controls-strip`,stripName:`msp-params-extra-controls-stripName`,under:`msp-params-extra-controls-under`,vec:`msp-params-extra-controls-vec`},c(`components/params/extra-controls.module.css`,`@layer msp.components {
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
`)})))()}function H(e){let{open:t}=e;return o(`button`,{type:`button`,class:z.presets,ref:e=>ot.set(t,e),"aria-label":`${e.label} presets`,"aria-haspopup":`listbox`,"aria-expanded":t,onClick:e=>{e.stopPropagation(),t.set(!t.value)},children:[a(O,{name:`swatch-book`,size:12}),`Presets`]})}function U(e){let{open:t}=e;return a(y,{when:t,children:()=>{let n=e.presets(),r=a(Se,{options:n.map(([,e],t)=>[String(t),e]),value:e.current.pipe(b(e=>e===void 0?void 0:String(e))),onPick:r=>{t.set(!1);let i=n[Number(r)];i&&e.onPick(i[0])},onClose:()=>t.set(!1),floating:!0}),i=e.anchor?.()??ot.get(t);return i?a(we,{anchor:i,children:r}):a(`div`,{class:z.presetsList,children:r})}})}function at(e,t,n=!1){let r=e.findIndex(([e])=>n&&e&&typeof e==`object`&&t&&typeof t==`object`?Object.entries(e).every(([e,n])=>st(t[e],n)):st(e,t));return r<0?void 0:r}var ot,st;function W(){return(W=e((()=>{x(),_(),D(),xe(),B(),s(),ot=new WeakMap,st=(e,t)=>JSON.stringify(e)===JSON.stringify(t)})))()}function G(e){let t=E(!1);return o(i,{children:[o(`div`,{class:z.row,children:[a(`span`,{class:z.label,children:e.head}),a(`div`,{class:z.control,children:e.field(t)})]}),a(y,{when:t,reveal:!0,children:()=>a(`div`,{class:V.under,children:e.body(()=>t.set(!1))})})]})}function K(e){return o(`button`,{type:`button`,class:V.field,"aria-expanded":e.open,"aria-label":e.label,onClick:()=>e.open.set(!e.open.value),children:[a(`span`,{class:V.fieldContent,children:e.children}),a(O,{name:`chevron-down`,size:14,class:V.chevron})]})}function ct(e){let{param:t,binding:n}=e,r=n.value.pipe(b(e=>{let n=t.options.filter(([t])=>e?.includes(t)).map(([,e])=>e);return n.length?n.join(`, `):t.emptyValue??`None`}));return a(G,{head:e.head,field:t=>a(K,{open:t,label:e.label,children:r}),body:()=>a(de,{class:V.options,contentClass:V.optionsContent,role:`listbox`,"aria-multiselectable":`true`,"aria-label":e.label,children:t.options.map(([e,t])=>o(`button`,{type:`button`,role:`option`,class:V.option,"aria-selected":n.value.pipe(b(t=>!!t?.includes(e)),w()),onClick:()=>{let t=n.get()??[];n.set(t.includes(e)?t.filter(t=>t!==e):[...t,e])},children:[a(`span`,{children:t}),a(O,{name:`check`,size:14,class:V.check})]}))})})}function lt(e){let{binding:t}=e;return a(`div`,{class:V.vec,children:[`x`,`y`,`z`].map((n,r)=>a(`input`,{class:z.number,"aria-label":e.label?`${e.label} ${n}`:n,"data-tip":n,value:t.value.pipe(b(e=>ut(e?.[r]))),onChange:e=>{let n=Number(e.currentTarget.value);if(!Number.isFinite(n))return;let i=[...t.get()??[0,0,0]];i[r]=n,t.set(i)}}))})}function ut(e){return e===void 0||!Number.isFinite(e)?``:String(Math.round(e*1e4)/1e4)}function dt(e){let{binding:t}=e,n=e=>{for(let t=0;t<16;t++)if(e[t]!==+(t%5==0))return!1;return!0};return a(G,{head:e.head,field:r=>a(K,{open:r,label:e.label,children:t.value.pipe(b(e=>e&&n(e)?`Identity`:`4 × 4 matrix`))}),body:()=>a(`div`,{class:V.matrix,children:Array.from({length:16},(n,r)=>{let i=r%4*4+Math.floor(r/4);return a(`input`,{class:z.number,"aria-label":`${e.label}, row ${Math.floor(r/4)+1}, column ${r%4+1}`,value:t.value.pipe(b(e=>ut(e?.[i]))),onChange:e=>{let n=Number(e.currentTarget.value);if(!Number.isFinite(n))return;let r=Array.from(t.get());r[i]=n,t.set(r)}})})})})}function ft(e){let{param:t,binding:n}=e,r=t.min??0,i=t.max??1,s=t.step??(i-r)/100,c=e=>`${100*(e-r)/(i-r||1)}%`,l=s<1?Math.min(4,Math.ceil(-Math.log10(s))):0,u=t=>a(`input`,{class:V.intervalRange,type:`range`,min:String(r),max:String(i),step:String(s),"aria-label":`${e.label?`${e.label} `:``}${t===0?`from`:`to`}`,value:n.value.pipe(b(e=>String(e?.[t]??(t?i:r)))),onInput:e=>{let a=Number(e.currentTarget.value),o=[...n.get()??[r,i]];o[t]=t===0?Math.min(a,o[1]):Math.max(a,o[0]),n.set(o),e.currentTarget.value=String(o[t])}});return o(`div`,{class:V.interval,children:[o(`div`,{class:V.intervalTrack,style:{"--msp-from":n.value.pipe(b(e=>c(e?.[0]??r))),"--msp-to":n.value.pipe(b(e=>c(e?.[1]??i)))},children:[u(0),u(1)]}),a(`span`,{class:V.intervalValue,children:n.value.pipe(b(e=>`${(e?.[0]??r).toFixed(l)}–${(e?.[1]??i).toFixed(l)}`))})]})}function pt(e){let t=e?.colors??[];if(!t.length)return`none`;let n=t.map((e,n)=>Array.isArray(e)?{color:M(e[0]),at:e[1]}:{color:M(e),at:t.length===1?0:n/(t.length-1)});if(e?.kind===`set`){let e=n.length;return`linear-gradient(90deg, ${n.map((t,n)=>`${t.color} ${100*n/e}% ${100*(n+1)/e}%`).join(`, `)})`}return`linear-gradient(90deg, ${n.map(e=>`${e.color} ${100*e.at}%`).join(`, `)})`}function mt(e){let{param:t,binding:n}=e,r=t.presetKind??`all`,i=vt.filter(([,e])=>r===`all`?!0:r===`set`?e.type===`qualitative`:e.type!==`qualitative`),s=e=>i.find(([,t])=>JSON.stringify(t.list)===JSON.stringify(e?.colors))?.[1].label??`Custom`;return a(G,{head:e.head,field:t=>o(K,{open:t,label:e.label,children:[a(`span`,{class:V.strip,style:{background:n.value.pipe(b(pt))}}),a(`span`,{class:V.stripName,children:n.value.pipe(b(s))})]}),body:t=>a(de,{class:V.options,contentClass:V.optionsContent,role:`listbox`,"aria-label":e.label,children:i.map(([,e])=>{let r={kind:e.type===`qualitative`?`set`:`interpolate`,colors:e.list};return o(`button`,{type:`button`,role:`option`,class:V.option,"aria-selected":n.value.pipe(b(t=>s(t)===e.label)),onClick:()=>{n.set({kind:r.kind,colors:[...r.colors]}),t()},children:[a(`span`,{class:V.strip,style:{background:pt(r)}}),a(`span`,{class:V.stripName,children:e.label}),a(O,{name:`check`,size:14,class:V.check})]})})})})}function ht(e){let{binding:t}=e;return a(`input`,{class:z.input,"aria-labelledby":e.labelId,placeholder:`https://…`,value:t.value.pipe(b(e=>e?.url??``)),onChange:e=>t.set(fe.Url(e.currentTarget.value))})}function gt(e){let{binding:t}=e,n=(e,t,n)=>(e??[]).map(([e,r],i)=>`${i?`L`:`M`}${(e*t).toFixed(1)} ${((1-r)*n).toFixed(1)}`).join(` `);return a(G,{head:e.head,field:r=>o(K,{open:r,label:e.label,children:[a(`svg`,{class:V.spark,viewBox:`0 0 56 14`,preserveAspectRatio:`none`,"aria-hidden":`true`,children:a(`path`,{d:t.value.pipe(b(e=>n(e,56,14)))})}),a(`span`,{class:V.stripName,children:t.value.pipe(b(e=>`${e?.length??0} points`))})]}),body:()=>a(_t,{param:e.param,binding:t,pathOf:n})})}function _t(e){let{binding:n}=e,r=E(``),i=n.value,s=e.param.getPresets,c=E(!1),l=o(`svg`,{class:V.graph,viewBox:`0 0 240 96`,preserveAspectRatio:`none`,children:[[.25,.5,.75].map(e=>a(`line`,{class:V.grid,x1:String(e*240),x2:String(e*240),y1:`0`,y2:`96`})),[.25,.5,.75].map(e=>a(`line`,{class:V.grid,y1:String(e*96),y2:String(e*96),x1:`0`,x2:`240`})),a(`path`,{class:V.curve,d:n.value.pipe(b(t=>e.pathOf(t,240,96)))}),a(ce,{each:i.pipe(b(e=>(e??[]).map((e,t)=>t))),children:e=>a(`circle`,{class:V.point,r:`4`,cx:i.pipe(b(t=>String((t?.[e]?.[0]??0)*240))),cy:i.pipe(b(t=>String((1-(t?.[e]?.[1]??0))*96))),"data-index":String(e)})})]}),u=e=>{let t=l.getBoundingClientRect(),n=Math.min(1,Math.max(0,(e.clientX-t.left)/t.width)),r=Math.min(1,Math.max(0,1-(e.clientY-t.top)/t.height));return[Math.round(n*1e3)/1e3,Math.round(r*1e3)/1e3]},d=-1,f=e=>{let t=e.target,r=[...n.get()??[]];if(t.tagName===`circle`){d=Number(t.dataset.index),l.setPointerCapture(e.pointerId);return}let i=u(e),a=r.findIndex(([e])=>e>i[0]);r.splice(a<0?r.length:a,0,i),n.set(r)},p=e=>{let t=u(e);if(r.set(`${t[0].toFixed(2)}, ${t[1].toFixed(2)}`),d<0)return;let i=[...n.get()??[]],a=d>0?i[d-1][0]:0,o=d<i.length-1?i[d+1][0]:1;i[d]=[Math.min(o,Math.max(a,t[0])),t[1]],n.set(i)},m=()=>{d=-1};return l.addEventListener(`pointerdown`,f),l.addEventListener(`pointermove`,p),l.addEventListener(`pointerup`,m),l.addEventListener(`pointercancel`,m),l.addEventListener(`dblclick`,e=>{let t=e.target;if(t.tagName!==`circle`)return;let r=Number(t.dataset.index),i=[...n.get()??[]];i.length<=2||(i.splice(r,1),n.set(i))}),l.addEventListener(`pointerleave`,()=>r.set(``)),t(()=>{d=-1}),o(`div`,{class:V.graphEditor,children:[o(`div`,{class:V.graphArea,children:[l,a(`span`,{class:V.graphAt,children:r.asReadonly})]}),o(`div`,{class:V.graphFoot,children:[a(`p`,{class:V.graphHint,children:`Drag a point · click to add · double-click to remove`}),s?a(H,{open:c,label:`Curve`}):null]}),s?a(U,{open:c,presets:s,current:n.value.pipe(b(e=>at(s(),e))),onPick:e=>n.set(e)}):null]})}var vt;function yt(){return(yt=e((()=>{ge(),me(),C(),x(),_(),r(),T(),R(),D(),ue(),it(),B(),W(),s(),vt=Object.entries(pe)})))()}var q;function bt(){return(bt=e((()=>{l(),q={bar:`msp-params-help-bar`,description:`msp-params-help-description`,ends:`msp-params-help-ends`,entry:`msp-params-help-entry`,help:`msp-params-help-help`,name:`msp-params-help-name`,scale:`msp-params-help-scale`,swatch:`msp-params-help-swatch`,table:`msp-params-help-table`,text:`msp-params-help-text`,toggle:`msp-params-help-toggle`},c(`components/params/help.module.css`,`@layer msp.components {
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
`)})))()}function xt(e,t){let n=e=>e&&(e.description||e.legend)?e:void 0;if(e.help){let r=e.help;return t.pipe(b(e=>{try{return n(r(e))}catch{return}}),w((e,t)=>e?.description===t?.description&&e?.legend===t?.legend))}let r=n({description:e.description,legend:e.legend});return r?v(r):void 0}function St(e,t,n){if(!t)return{head:a(`span`,{class:q.text,id:n,"data-tip-overflow":``,children:e}),block:null};let r=E(!1),s=t.pipe(b(e=>!!e));return{head:o(i,{children:[a(`span`,{class:q.text,id:n,"data-tip-overflow":``,"data-help":s.pipe(b(e=>e?``:void 0)),onClick:e=>{e.currentTarget.hasAttribute(`data-help`)&&(e.stopPropagation(),r.set(!r.value))},children:e}),a(y,{when:s,children:()=>a(`button`,{type:`button`,class:q.toggle,"aria-label":`About ${e}`,title:`About ${e}`,"aria-expanded":r,onClick:e=>{e.stopPropagation(),r.set(!r.value)},children:a(O,{name:`circle-help`,size:12})})})]}),block:a(Ct,{help:t,open:r})}}function Ct(e){return a(y,{when:e.open,reveal:!0,children:()=>a(y,{when:e.help,children:e=>o(`div`,{class:q.help,children:[e.description?a(`p`,{class:q.description,children:wt(e.description)}):null,e.legend?a(Tt,{legend:e.legend}):null]})})})}function wt(e){return e.split(/(`[^`]+`)/).map(e=>e.startsWith("`")&&e.endsWith("`")&&e.length>1?a(`code`,{children:e.slice(1,-1)}):e)}function Tt(e){let{legend:t}=e;return t.kind===`table-legend`?a(`ul`,{class:q.table,children:t.table.map(([e,t])=>o(`li`,{class:q.entry,children:[a(`span`,{class:q.swatch,style:{background:M(t)}}),a(`span`,{class:q.name,children:e})]}))}):o(`div`,{class:q.scale,children:[a(`span`,{class:q.bar,style:{background:pt({kind:`interpolate`,colors:t.colors})}}),o(`span`,{class:q.ends,children:[a(`span`,{children:t.minLabel}),a(`span`,{children:t.maxLabel})]})]})}function Et(){return(Et=e((()=>{C(),x(),se(),_(),T(),R(),D(),yt(),bt(),s()})))()}function Dt(e){let{form:t}=e;return a(`div`,{class:z.form,children:a(Ot,{params:t.params,field:e=>({value:t.field(e),get:()=>t.values.value[e],set:n=>t.set(e,n)}),visible:e=>t.params[e].hideIf?t.visible(e):void 0,filter:kt(e.filter),place:{form:t,path:``}})})}function J(e){return Object.keys(e).some(t=>!e[t].isHidden&&e[t].type!==`value`)}function Ot(e){let{params:t,filter:n,place:r}=e,{essentials:s,advanced:c}=Ke(t),l=At(n),u=new Map,d=t=>(u.has(t)||u.set(t,e.visible(t)),u.get(t)),f=e=>{let r=d(e);return n?S([r??v(!0),n]).pipe(b(([n,r])=>n&&Y(e,t[e],r))):r},p=e=>{let t=e.map(f);if(!t.every(e=>!e))return S(t.map(e=>e??v(!0))).pipe(b(e=>!e.some(Boolean)),w())},m=i=>a(X,{name:i,param:t[i],binding:e.field(i),visible:d(i),filter:n,place:{form:r.form,path:`${r.path}/${i}`}}),h=(e,t)=>e.flatMap(e=>e.category?[a(`div`,{hidden:p(e.names),children:a($,{title:e.category,state:r.form.fold(`${r.path}#${t}${e.category}`),force:l,children:()=>e.names.map(m)})})]:e.names.map(m));return!s.length||!c.length?a(i,{children:h(s.length?s:c,``)}):o(i,{children:[h(s,``),a(`div`,{hidden:p(c.flatMap(e=>e.names)),children:a($,{title:`Advanced`,state:r.form.fold(`${r.path}#advanced`),force:l,children:()=>h(c,`advanced/`)})})]})}function kt(e){return e?.pipe(b(e=>e.trim().toLowerCase()),w())}function At(e){return e?.pipe(b(e=>e.length>0),w())}function jt(e,t){return t.label||ye(e)}function Mt(e,t){let n=t.trim().toLowerCase();return Object.keys(e).some(t=>!e[t].isHidden&&Y(t,e[t],n))}function Y(e,t,n){return!n||jt(e,t).toLowerCase().includes(n)||t.description?.toLowerCase().includes(n)?!0:t.type===`group`?Object.keys(t.params).some(e=>Y(e,t.params[e],n)):t.type===`mapped`&&t.select.options.some(([e])=>{let r=t.map(e);return r.type===`group`?Object.keys(r.params).some(e=>Y(e,r.params[e],n)):Y(e,r,n)})}function X(e){let{name:t,param:n,binding:r,filter:i,place:s}=e,c=jt(t,n),l=(i?S([e.visible??v(!0),i]).pipe(b(([e,r])=>e&&Y(t,n,r))):e.visible)?.pipe(b(e=>!e),w()),u=i?.pipe(b(e=>c.toLowerCase().includes(e)?``:e));if(n.type===`group`)return a(`div`,{hidden:l,children:a(Bt,{label:c,param:n,binding:r,filter:u,force:At(i),place:s})});let d=He(`msp-field`),{head:f,block:p}=St(c,xt(n,r.value),d),m=e=>o(`div`,{hidden:l,children:[e,p]});if(n.type===`mapped`)return m(Ht(n)?a(Ut,{label:c,labelId:d,head:f,description:n.description,param:n,binding:r,place:s}):a(Wt,{label:c,head:f,param:n,binding:r,filter:u,force:At(i),place:s}));if(n.type===`select`)return m(a(Z,{label:c,head:f,description:n.description,options:n.options,binding:r}));if(n.type===`color`)return m(a(Nt,{label:c,labelId:d,head:f,description:n.description,binding:r}));if(n.type===`multi-select`)return m(a(ct,{head:f,label:c,param:n,binding:r}));if(n.type===`mat4`)return m(a(dt,{head:f,label:c,param:n,binding:r}));if(n.type===`line-graph`)return m(a(gt,{head:f,label:c,param:n,binding:r}));if(n.type===`color-list`)return m(a(mt,{head:f,label:c,param:n,binding:r}));if(n.type===`object-list`)return m(a(qt,{head:f,label:c,param:n,binding:r}));if(n.type===`conditioned`)return m(a(Gt,{head:f,label:c,param:n,binding:r,place:s}));if(n.type===`script`)return m(a(Kt,{head:f,label:c,binding:r}));if(n.type===`converted`){let o={value:r.value.pipe(b(e=>n.fromValue(e))),get:()=>n.fromValue(r.get()),set:e=>r.set(n.toValue(e))},l={...n.converted,label:n.converted.label??c};return a(X,{name:t,param:l,binding:o,visible:e.visible,filter:i,place:s})}return n.type===`value`?null:m(o(`div`,{class:z.row,children:[a(`span`,{class:z.label,children:f}),a(`div`,{class:z.control,children:Ft(n,r,d,c)})]}))}function Nt(e){let{binding:t,labelId:n}=e,r=E(!1),s=t.value.pipe(b(e=>M(e))),c=t.value.pipe(b(e=>N(e)));return o(i,{children:[o(`div`,{class:z.row,children:[a(`span`,{class:z.label,children:e.head??a(`span`,{id:n,children:e.label})}),a(`div`,{class:z.control,children:o(`button`,{type:`button`,class:z.color,"aria-labelledby":`${n} ${n}-value`,"aria-expanded":r,onClick:()=>r.set(!r.value),children:[a(`span`,{class:z.swatch,style:{background:s}}),a(`span`,{class:z.channels,id:`${n}-value`,"data-tip-overflow":``,children:c})]})})]}),a(y,{when:r,reveal:!0,children:()=>a(nt,{value:t.value,onChange:e=>t.set(e)})})]})}function Pt(e){let{param:t,binding:n,labelId:r}=e,i=t.type===`file-list`,s=E(!1),c=e=>{e.length&&n.set(i?e.map(e=>fe.File(e)):fe.File(e[0]))},l=a(`input`,{type:`file`,hidden:!0,multiple:i,accept:t.accept,onChange:e=>{c([...e.currentTarget.files??[]]),e.currentTarget.value=``}}),u=n.value.pipe(b(e=>(e?Array.isArray(e)?e:[e]:[]).map(e=>e.name)));return o(`div`,{class:z.file,"data-dragging":s.asReadonly.pipe(b(e=>e?``:void 0)),children:[a(`button`,{type:`button`,class:z.filePick,"aria-labelledby":r?`${r} ${r}-value`:void 0,onClick:()=>l.click(),onDragOver:e=>{e.preventDefault(),s.set(!0)},onDragLeave:()=>s.set(!1),onDrop:e=>{e.preventDefault(),e.stopPropagation(),s.set(!1),c([...e.dataTransfer?.files??[]])},children:a(`span`,{class:z.fileNames,id:r?`${r}-value`:void 0,"data-empty":u.pipe(b(e=>e.length?void 0:``)),children:u.pipe(b(e=>e.length===0?i?`Select files…`:`Select a file…`:e.length===1?e[0]:`${e.length} files · ${e.join(`, `)}`))})}),a(y,{when:u.pipe(b(e=>e.length>0)),children:()=>a(`button`,{type:`button`,class:z.fileClear,"aria-label":`Clear`,title:`Clear`,onClick:()=>n.set(null),children:a(O,{name:`x`,size:13})})}),l]})}function Ft(e,t,n,r){switch(e.type){case`boolean`:return a(It,{binding:t,labelId:n});case`number`:return a(Lt,{param:e,binding:t,labelId:n});case`text`:return e.multiline?a(`textarea`,{class:z.textarea,rows:3,"aria-labelledby":n,value:t.value,placeholder:e.placeholder,onChange:e=>t.set(e.currentTarget.value)}):a(`input`,{class:z.input,"aria-labelledby":n,value:t.value,placeholder:e.placeholder,onChange:e=>t.set(e.currentTarget.value)});case`file`:case`file-list`:return a(Pt,{param:e,binding:t,labelId:n});case`vec3`:return a(lt,{param:e,binding:t,label:r});case`interval`:return a(ft,{param:e,binding:t,label:r});case`url`:return a(ht,{binding:t,labelId:n});default:return a(`span`,{class:z.unsupported,children:e.type})}}function It(e){let{binding:t}=e;return a(`button`,{type:`button`,role:`switch`,class:z.switch,"aria-labelledby":e.labelId,"aria-checked":t.value.pipe(b(e=>!!e)),onClick:()=>t.set(!t.get()),children:a(`span`,{class:z.knob})})}function Lt(e){let{param:t,binding:n,labelId:r}=e,i=n.value.pipe(b(e=>Rt(e,t.step)));return t.min===void 0||t.max===void 0?a(`input`,{class:z.input,type:`text`,inputMode:`decimal`,"aria-labelledby":r,value:i,onChange:e=>{let r=zt(e.currentTarget.value);Number.isFinite(r)?n.set(r):e.currentTarget.value=Rt(n.get(),t.step)}}):o(`div`,{class:z.slider,children:[a(`input`,{class:z.range,type:`range`,"aria-labelledby":r,min:String(t.min),max:String(t.max),step:String(t.step??(t.max-t.min)/100),value:n.value.pipe(b(String)),style:{"--msp-progress":n.value.pipe(b(e=>`${100*(e-t.min)/(t.max-t.min||1)}%`))},onInput:e=>n.set(Number(e.currentTarget.value))}),a(`input`,{class:z.number,"aria-labelledby":r,value:i,onChange:e=>{let r=zt(e.currentTarget.value);Number.isFinite(r)&&n.set(Math.min(t.max,Math.max(t.min,r)))}})]})}function Rt(e,t){if(!Number.isFinite(e))return``;if(t===void 0)return String(Number(e.toFixed(4)));let n=t<1?Math.min(4,Math.ceil(-Math.log10(t))):0;return e.toFixed(n)}function zt(e){let t=e.trim().replace(`,`,`.`);return t===``?NaN:Number(t)}function Z(e){let{options:t,binding:n}=e,r=E(!1),s=n.value.pipe(b(e=>String(t.findIndex(t=>t[0]===e)))),c=t.map(([,e,t],n)=>[String(n),e,t]),l;return o(i,{children:[o(`div`,{class:z.row,children:[a(`span`,{class:z.label,children:e.head??e.label}),o(`div`,{class:z.control,ref:e=>l=e,children:[a(be,{size:`sm`,open:r,"aria-label":e.label,label:s.pipe(b(e=>c[Number(e)]?.[1]??``))}),e.after]})]}),a(y,{when:r,children:()=>{let e=a(Se,{options:c,value:s,onPick:e=>{r.set(!1),n.set(t[Number(e)][0])},onClose:()=>r.set(!1),floating:!0});return l?a(we,{anchor:l,children:e}):e}})]})}function Bt(e){let{param:t,binding:n,filter:r,place:s}=e;if(!J(t.params))return null;let c=t.presets,l=e=>a(Q,{params:e,binding:n,filter:r,place:s}),u=s.form.fold(`${s.path}#open`,!!t.isExpanded),d=e=>n.set({...n.get()??{},...e}),f=c?n.value.pipe(b(e=>at(c,e,!0)),w()):void 0;if(t.isFlat)return o(i,{children:[c&&f?a(Vt,{label:e.label,presets:c,current:f,onPick:d}):null,l(t.params)]});let p=typeof t.pivot==`string`&&t.params[t.pivot]?t.pivot:void 0;if(p&&(!c||!f)){let{[p]:n,...r}=t.params;return o(i,{children:[l({[p]:n}),J(r)?a($,{title:e.label,state:u,force:e.force,children:()=>l(r)}):null]})}if(!c||!f)return a($,{title:e.label,state:u,force:e.force,children:()=>l(t.params)});let m=E(!1),h=E(!1);return a($,{title:e.label,state:u,force:e.force,openWhen:h.asReadonly,meta:f.pipe(b(e=>e===void 0?``:c[e][1])),action:a(H,{open:m,label:e.label}),below:()=>a(U,{open:m,presets:()=>c,current:f,onPick:e=>{d(e),h.set(!0)}}),children:()=>l(t.params)})}function Vt(e){let t=E(!1),n;return o(i,{children:[o(`div`,{class:z.row,children:[a(`span`,{class:z.label,children:`Presets`}),a(`div`,{class:z.control,ref:e=>n=e,children:a(be,{size:`sm`,open:t,"aria-label":`${e.label} presets`,label:e.current.pipe(b(t=>t===void 0?`Custom`:e.presets[t][1]))})})]}),a(U,{open:t,presets:()=>e.presets,current:e.current,onPick:e.onPick,anchor:()=>n})]})}function Ht(e){let t=e.select.options.map(e=>e[0]).sort();return t.length===2&&t[0]===`off`&&t[1]===`on`}function Ut(e){let{param:t,binding:n,place:r}=e,s=n.value.pipe(b(e=>e?.name===`on`),w()),c=r.form.fold(`${r.path}#params`),l=e=>n.set({name:e,params:Yt(t.map(e))}),u={value:s,get:()=>n.get()?.name===`on`,set:e=>{l(e?`on`:`off`),e||c.set(!1)}},d=t.map(`on`),f=d.type===`group`&&J(d.params),p={value:n.value.pipe(b(e=>e?.params),w()),get:()=>n.get()?.params,set:e=>n.set({name:`on`,params:e})};return o(i,{children:[o(`div`,{class:z.row,children:[a(`span`,{class:z.label,children:e.head??a(`span`,{id:e.labelId,children:e.label})}),o(`div`,{class:z.control,children:[a(It,{binding:u,labelId:e.labelId}),f?a(y,{when:s,children:()=>a(`button`,{type:`button`,class:z.settings,title:`${e.label} settings`,"aria-label":`${e.label} settings`,"aria-expanded":c,onClick:()=>c.set(!c.value),children:a(O,{name:`sliders-horizontal`,size:14})})}):null]})]}),f?a(y,{when:S([s,c.asReadonly]).pipe(b(([e,t])=>e&&t)),children:()=>a(`div`,{class:z.subSettings,children:a(Q,{params:d.params,binding:p,place:{form:r.form,path:`${r.path}:on`}})})}):null]})}function Wt(e){let{param:t,binding:n,place:r}=e,i=n.value.pipe(b(e=>e?.name),w()),s={value:i,get:()=>n.get()?.name,set:e=>{let r=t.map(e);n.set({name:e,params:Yt(r)})}},c=i.pipe(b(e=>{if(e===void 0)return!1;let n=t.map(e);return n.type===`group`&&!n.isFlat&&J(n.params)}),w()),l=r.form.fold(`${r.path}#params`),u=e.force?S([l.asReadonly,e.force]).pipe(b(([e,t])=>e||t)):l.asReadonly,d=a(y,{when:c,children:()=>a(`button`,{type:`button`,class:`${z.settings} ${z.afterSelect}`,title:`${e.label} settings`,"aria-label":`${e.label} settings`,"aria-expanded":u,onClick:()=>l.set(!l.value),children:a(O,{name:`sliders-horizontal`,size:14})})});return o(`div`,{class:z.mapped,children:[a(Z,{label:e.label,head:e.head,options:t.select.options,binding:s,after:d}),a(y,{when:i,children:i=>{let o=t.map(i),s={value:n.value.pipe(b(e=>e?.params),w()),get:()=>n.get()?.params,set:e=>n.set({name:i,params:e})},c={form:r.form,path:`${r.path}:${i}`};return o.type===`group`?o.isFlat?a(Q,{params:o.params,binding:s,filter:e.filter,place:c}):J(o.params)?a(y,{when:u,reveal:!0,children:()=>a(Q,{params:o.params,binding:s,filter:e.filter,place:c,nested:!0})}):null:a(X,{name:i,param:o,binding:s,filter:e.filter,place:c})}})]})}function Q(e){let{params:t,binding:n}=e;return a(`div`,{class:e.nested?z.nested:z.fields,children:a(Ot,{params:t,field:e=>({value:n.value.pipe(b(t=>t?.[e]),w()),get:()=>n.get()?.[e],set:t=>n.set({...n.get(),[e]:t})}),visible:e=>{let r=t[e].hideIf;if(r)return n.value.pipe(b(e=>!r(e??{})),w())},filter:e.filter,place:e.place})})}function Gt(e){let{param:t,binding:n,place:r}=e,i=n.value.pipe(b(e=>String(t.conditionForValue(e))),w()),s={value:i,get:()=>String(t.conditionForValue(n.get())),set:e=>n.set(t.conditionedValue(n.get(),e))};return o(`div`,{class:z.mapped,children:[a(Z,{label:e.label,head:e.head,options:t.select.options,binding:s}),a(y,{when:i,children:e=>a(`div`,{class:z.nested,children:a(X,{name:e,param:t.conditionParams[e],binding:n,place:{form:r.form,path:`${r.path}:${e}`}})})})]})}function Kt(e){let{binding:t}=e,n=e=>({value:t.value.pipe(b(t=>t?.[e]??``),w()),get:()=>t.get()?.[e],set:n=>t.set({...t.get(),[e]:n})}),r=n(`expression`),i=He(`msp-field`);return o(`div`,{class:z.mapped,children:[a(Z,{label:e.label,head:e.head,options:Xt,binding:n(`language`)}),a(`div`,{class:z.nested,children:o(`div`,{class:z.row,children:[a(`span`,{class:z.label,id:i,children:`Expression`}),a(`div`,{class:z.control,children:a(`textarea`,{class:z.textarea,"aria-labelledby":i,rows:3,spellcheck:!1,value:r.value,onChange:e=>r.set(e.currentTarget.value)})})]})})]})}function qt(e){let{param:t,binding:n}=e,r=t.presets,s=E(!1),c=n.value.pipe(b(e=>e??[])),l=(e,t)=>{let r=[...n.get()??[]];r[e]=t,n.set(r)};return o(i,{children:[o(`div`,{class:z.row,children:[a(`span`,{class:z.label,children:e.head}),a(`div`,{class:z.control,children:a(`span`,{class:z.count,children:c.pipe(b(e=>e.length===1?`1 item`:`${e.length} items`))})})]}),o(`div`,{class:z.items,children:[a(ce,{each:c.pipe(b(e=>e.map((e,t)=>t))),children:e=>a(Jt,{param:t,binding:n,index:e,replace:l})}),o(`div`,{class:z.itemActions,children:[o(`button`,{type:`button`,class:z.itemAdd,"aria-label":`Add to ${e.label}`,onClick:()=>n.set([...n.get()??[],t.ctor()]),children:[a(O,{name:`plus`,size:13}),`Add`]}),r?a(H,{open:s,label:e.label}):null]}),r?a(U,{open:s,presets:()=>r,current:n.value.pipe(b(e=>at(r,e)),w()),onPick:e=>n.set(e)}):null]})]})}function Jt(e){let{param:t,binding:n,index:r}=e,i=E(!1);return o(`div`,{class:z.item,"data-open":i.asReadonly.pipe(b(e=>e?``:void 0)),children:[o(`div`,{class:z.itemRow,onClick:()=>i.set(!i.value),children:[a(`span`,{class:z.itemLabel,children:n.value.pipe(b(e=>e?.[r]===void 0?``:t.getLabel(e[r])))}),a(`button`,{type:`button`,class:z.settings,title:`Edit`,"aria-label":`Edit`,"aria-expanded":i,onClick:e=>{e.stopPropagation(),i.set(!i.value)},children:a(O,{name:`sliders-horizontal`,size:14})}),a(`button`,{type:`button`,class:z.settings,title:`Remove`,"aria-label":`Remove`,onClick:e=>{e.stopPropagation(),n.set((n.get()??[]).filter((e,t)=>t!==r))},children:a(O,{name:`x`,size:13})})]}),a(y,{when:i,reveal:!0,children:()=>{let i=new qe(t.element,n.get()?.[r],{onChange:t=>e.replace(r,t)});return a(`div`,{class:z.itemForm,children:a(Dt,{form:i})})}})]})}function Yt(e){if(e.type===`group`){let t={};for(let n of Object.keys(e.params))t[n]=e.params[n].defaultValue;return t}return e.defaultValue}function $(e){let n=e.state??E(!!e.open);if(e.openWhen){let r=e.openWhen.subscribe(e=>{e&&n.set(!0)});t(()=>r.unsubscribe())}let r=e.force?S([n.asReadonly,e.force]).pipe(b(([e,t])=>e||t)):n.asReadonly;return o(`div`,{class:z.collapsible,children:[o(`div`,{class:z.collapsibleBar,children:[o(`button`,{type:`button`,class:z.collapsibleHeader,"aria-expanded":r,onClick:()=>n.set(!n.value),children:[e.title,a(O,{name:`chevron-right`,size:12,class:z.chevron}),e.meta?a(`span`,{class:z.collapsibleMeta,children:e.meta}):null]}),e.action]}),e.below?.(),a(y,{when:r,reveal:!0,children:()=>a(`div`,{class:z.nested,children:e.children()})})]})}var Xt;function Zt(){return(Zt=e((()=>{ge(),he(),le(),C(),x(),se(),_(),A(),r(),Je(),T(),xe(),R(),D(),B(),yt(),Et(),W(),s(),Xt=[[`mol-script`,`MolScript`],[`pymol`,`PyMOL`],[`vmd`,`VMD`],[`jmol`,`Jmol`]]})))()}export{Ne as C,ke as E,He as S,je as T,A as _,U as a,Ve as b,nt as c,qe as d,Je as f,Le as g,Pe as h,H as i,M as l,ze as m,Zt as n,W as o,k as p,Mt as r,rt as s,Dt as t,R as u,Be as v,Me as w,Fe as x,Ie as y};