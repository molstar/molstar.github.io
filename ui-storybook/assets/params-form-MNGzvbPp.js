import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t,h as n,m as r,n as i,o as a,r as o,t as s}from"./jsx-runtime-DiBZWcxb.js";import{i as c,r as l}from"./base-Cal5NIfy.js";import{M as u,P as d,j as f,k as p,l as m,s as ee}from"./Observable-CzLAfIvT.js";import{i as h,r as te}from"./OperatorSubscriber-C8tumhdd.js";import{i as ne,r as re}from"./BehaviorSubject-CLldIS24.js";import{i as ie,n as ae,r as oe,t as se}from"./names-BbD3eezm.js";import{c as ce,n as g,s as le,t as _}from"./distinctUntilChanged-BHDujrwf.js";import{a as v,l as ue,n as de,r as y,u as fe}from"./control-flow-HAEcegil.js";import{n as b,t as x}from"./map-CsR1ibWS.js";import{n as pe,t as S}from"./combineLatest-Cmmnh-lC.js";import{n as C,r as w}from"./observable-state-D-XGaosJ.js";import{n as T,t as E}from"./icon-Dqu8cMU0.js";import{n as me,t as he}from"./scroll-area-XzYIuKyv.js";import{B as ge,D as _e,H as ve,T as ye,Z as be,et as xe,n as Se,t as Ce}from"./param-definition-Dm5QwBCI.js";import{i as we,r as Te,t as Ee}from"./select-CsL-iypk.js";var De;function Oe(){return(Oe=e((()=>{d(),ne(),ie(),De=function(e){p(t,e);function t(t,n,r){t===void 0&&(t=1/0),n===void 0&&(n=1/0),r===void 0&&(r=oe);var i=e.call(this)||this;return i._bufferSize=t,i._windowTime=n,i._timestampProvider=r,i._buffer=[],i._infiniteTimeWindow=!0,i._infiniteTimeWindow=n===1/0,i._bufferSize=Math.max(1,t),i._windowTime=Math.max(1,n),i}return t.prototype.next=function(t){var n=this,r=n.isStopped,i=n._buffer,a=n._infiniteTimeWindow,o=n._timestampProvider,s=n._windowTime;r||(i.push(t),!a&&i.push(o.now()+s)),this._trimBuffer(),e.prototype.next.call(this,t)},t.prototype._subscribe=function(e){this._throwIfClosed(),this._trimBuffer();for(var t=this._innerSubscribe(e),n=this,r=n._infiniteTimeWindow,i=n._buffer.slice(),a=0;a<i.length&&!e.closed;a+=r?1:2)e.next(i[a]);return this._checkFinalizedStatuses(e),t},t.prototype._trimBuffer=function(){var e=this,t=e._bufferSize,n=e._timestampProvider,r=e._buffer,i=e._infiniteTimeWindow,a=(i?1:2)*t;if(t<1/0&&a<r.length&&r.splice(0,r.length-a),!i){for(var o=n.now(),s=0,c=1;c<r.length&&r[c]<=o;c+=2)s=c;s&&r.splice(0,s+1)}},t}(re)})))()}function ke(e){e===void 0&&(e={});var t=e.connector,n=t===void 0?function(){return new re}:t,r=e.resetOnError,i=r===void 0||r,a=e.resetOnComplete,o=a===void 0||a,s=e.resetOnRefCountZero,c=s===void 0||s;return function(e){var t,r,a,s=0,l=!1,u=!1,d=function(){r?.unsubscribe(),r=void 0},f=function(){d(),t=a=void 0,l=u=!1},p=function(){var e=t;f(),e?.unsubscribe()};return h(function(e,m){s++,!u&&!l&&d();var h=a??=n();m.add(function(){s--,s===0&&!u&&!l&&(r=D(p,c))}),h.subscribe(m),!t&&s>0&&(t=new ee({next:function(e){return h.next(e)},error:function(e){u=!0,d(),r=D(f,i,e),h.error(e)},complete:function(){l=!0,d(),r=D(f,o),h.complete()}}),ce(e).subscribe(t))})(e)}}function D(e,t){var n=[...arguments].slice(2);if(t===!0)e();else if(t!==!1){var r=new ee({next:function(){r.unsubscribe(),e()}});return ce(t.apply(void 0,u([],f(n)))).subscribe(r)}}function Ae(){return(Ae=e((()=>{d(),le(),ne(),m(),te()})))()}function je(e,t,n){var r,i,a,o,s=!1;return e&&typeof e==`object`?(r=e.bufferSize,o=r===void 0?1/0:r,i=e.windowTime,t=i===void 0?1/0:i,a=e.refCount,s=a!==void 0&&a,n=e.scheduler):o=e??1/0,ke({connector:function(){return new De(o,t,n)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:s})}function O(){return(O=e((()=>{Oe(),Ae()})))()}var k;function A(){return(A=e((()=>{Se(),g(),x(),C(),k=class{#e;#t;#n=new Map;constructor(e,t=Ce.getDefaultValues(e),n={}){this.params=e,this.options=n,this.#t=Ce.getDefaultValues(e),this.#e=w({...this.#t,...t},{compare:Object.is})}get values(){return this.#e.asReadonly}field(e){let t=this.#n.get(e);return t||(t=this.#e.asReadonly.pipe(b(t=>t[e]),_()),this.#n.set(e,t)),t}visible(e){let t=this.params[e];return t.hideIf?this.#e.asReadonly.pipe(b(e=>!t.hideIf(e)),_()):this.#e.asReadonly.pipe(b(()=>!0),_())}set(e,t){let n=this.#e.value;if(Object.is(n[e],t))return;let r={...n,[e]:t};this.#e.set(r),this.options.onChange?.(r,e)}load(e){this.#e.set({...this.#t,...e})}reset(){let e=this.#e.value,t={...this.#t};this.#e.set(t);for(let n of Object.keys(this.params))Ce.isParamEqual(this.params[n],e[n],t[n])||this.options.onChange?.(t,n)}layout(){let e=[],t=[];for(let n of Object.keys(this.params)){let r=this.params[n];r.isHidden||(r.isEssential?e.push(n):t.push(n))}return e.length?{essentials:e,advanced:t}:{essentials:t,advanced:[]}}}})))()}var j;function Me(){return(Me=e((()=>{c(),j={custom:`msp-color-color-picker-custom`,field:`msp-color-color-picker-field`,greys:`msp-color-color-picker-greys`,marker:`msp-color-color-picker-marker`,palette:`msp-color-color-picker-palette`,picker:`msp-color-color-picker-picker`,preview:`msp-color-color-picker-preview`,swatch:`msp-color-color-picker-swatch`,text:`msp-color-color-picker-text`},l(`components/color/color-picker.module.css`,`@layer msp.components {
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
`)})))()}function Ne(e){let t=e>>16&255,n=e>>8&255,r=e&255,i=(Math.max(t,n,r)+Math.min(t,n,r))/510,a=Math.round(7*(1-i)),o=7-a,s=[];for(let t=a;t>0;t--)s.push(P(e,.9*t/a));s.push(e);for(let t=1;t<=o;t++)s.push(P(e,-.85*t/o));return s}function M(e){return`#${(e>>>0&16777215).toString(16).padStart(6,`0`)}`}function N(e){return`${e>>16&255}, ${e>>8&255}, ${e&255}`}function Pe(e){let t=e.trim().toLowerCase();if(!t)return;let n=/^(?:#|0x)?([0-9a-f]{3}|[0-9a-f]{6})$/.exec(t);if(n){let e=n[1].length===3?n[1].replace(/./g,e=>e+e):n[1];return Number.parseInt(e,16)}let r=/^(rgba?|hsla?)?\s*\(?\s*([^()]*?)\s*\)?$/.exec(t);if(r){let e=r[2].split(/\s*[,;/\s]\s*/).filter(Boolean);if(e.length===3||e.length===4){let t=e.slice(0,3);if(t.every(e=>/^[+]?(\d+\.?\d*|\.\d+)%?$/.test(e))){if(r[1]?.startsWith(`hsl`))return Fe(t);let e=t.some(e=>e.endsWith(`%`)),n=t.map(e=>Number.parseFloat(e)),i=!e&&n.every(e=>e<=1)&&t.some(e=>e.includes(`.`)),a=t=>e?t*255/100:i?t*255:t;return!e&&!i&&n.some(e=>e>255)?void 0:F(I(a(n[0])),I(a(n[1])),I(a(n[2])))}}}let i=t.replace(/[\s_-]/g,``);return Object.hasOwn(se,i)?se[i]:void 0}function Fe(e){let t=(Number.parseFloat(e[0])%360+360)%360/60,n=Math.min(1,Number.parseFloat(e[1])/100),r=Math.min(1,Number.parseFloat(e[2])/100),i=(1-Math.abs(2*r-1))*n,a=i*(1-Math.abs(t%2-1)),o=r-i/2,[s,c,l]=t<1?[i,a,0]:t<2?[a,i,0]:t<3?[0,i,a]:t<4?[0,a,i]:t<5?[a,0,i]:[i,0,a];return F(I((s+o)*255),I((c+o)*255),I((l+o)*255))}function P(e,t){let n=t>0?255:0,r=Math.abs(t),i=t=>{let i=e>>t&255;return Math.round(i+(n-i)*r)<<t};return i(16)|i(8)|i(0)}function Ie(e){let t=e*6%6,n=t-Math.floor(t),r=I(n*255),i=255-r;switch(Math.floor(t)){case 0:return F(255,r,0);case 1:return F(i,255,0);case 2:return F(0,255,r);case 3:return F(0,i,255);case 4:return F(r,0,255);default:return F(255,0,i)}}function Le(e,t){let n=Ie(Math.max(0,Math.min(1,e))),r=Math.max(0,Math.min(1,t));return r<.5?P(n,L*(1-r/.5)):P(n,-.9*((r-.5)/.5))}function Re(e){let t=e>>16&255,n=e>>8&255,r=e&255,i=Math.max(t,n,r),a=Math.min(t,n,r);if(i-a<16)return{greys:!0,x:(t+n+r)/765,y:.5};let o=i-a,s=i===t?((n-r)/o+6)%6:i===n?(r-t)/o+2:(t-n)/o+4,c=(i+a)/510,l=c>=.5?.5*(1-(2*c-1)/L):.5+.5*(1-2*c)/L;return{greys:!1,x:s/6,y:Math.max(0,Math.min(1,l))}}function ze(e){let n=e.value.pipe(_()),r=n.pipe(b(Re)),a=0,s,c=w(0),l=!1,u=c.asReadonly.pipe(b(Ne),je({bufferSize:1,refCount:!0}));t(n,e=>{a=e,l||c.set(e),s&&document.activeElement!==s&&(s.value=N(e))});let d=t=>n=>{if(n.button!==0)return;let r=n.currentTarget;r.setPointerCapture(n.pointerId);let i=n=>{let i=r.getBoundingClientRect();e.onChange(t((n.clientX-i.left)/i.width,(n.clientY-i.top)/i.height))},a=()=>{r.removeEventListener(`pointermove`,i),r.removeEventListener(`pointerup`,a),r.removeEventListener(`pointercancel`,a)};r.addEventListener(`pointermove`,i),r.addEventListener(`pointerup`,a),r.addEventListener(`pointercancel`,a),i(n)},f=e=>{let t=e<.03?0:e>.97?255:I(e*255);return F(t,t,t)};return o(`div`,{class:j.picker,children:[i(`div`,{class:j.field,"aria-hidden":`true`,onPointerDown:d(Le),children:i(`span`,{class:j.marker,hidden:r.pipe(b(e=>e.greys)),style:{left:r.pipe(b(e=>`${e.x*100}%`)),top:r.pipe(b(e=>`${e.y*100}%`))}})}),i(`div`,{class:j.greys,"aria-hidden":`true`,onPointerDown:d(e=>f(e)),children:i(`span`,{class:j.marker,hidden:r.pipe(b(e=>!e.greys)),style:{left:r.pipe(b(e=>`${e.x*100}%`)),top:`50%`}})}),i(`div`,{class:j.palette,role:`listbox`,"aria-label":`Palette`,children:Be.map(t=>i(`button`,{type:`button`,role:`option`,class:j.swatch,style:{background:M(t)},"aria-label":N(t),"aria-selected":n.pipe(b(e=>e===t)),onClick:()=>e.onChange(t)}))}),i(`div`,{class:j.palette,role:`listbox`,"aria-label":`Weights`,children:[0,1,2,3,4,5,6,7].map(t=>{let r=u.pipe(b(e=>e[t]));return i(`button`,{type:`button`,role:`option`,class:j.swatch,style:{background:r.pipe(b(M))},"aria-label":r.pipe(b(N)),"aria-selected":S([r,n]).pipe(b(([e,t])=>e===t)),onClick:()=>{l=!0,e.onChange(Ne(c.value)[t]),l=!1}})})}),o(`div`,{class:j.custom,children:[i(`span`,{class:j.preview,style:{background:n.pipe(b(M))}}),i(`input`,{ref:e=>{s=e,e.value=N(a)},type:`text`,class:j.text,"aria-label":`Color`,placeholder:`r, g, b · #hex · rgb() · name`,"data-tip":`r, g, b; hex, rgb(), hsl() or a name`,spellcheck:!1,onInput:t=>{let n=Pe(t.currentTarget.value);n!==void 0&&e.onChange(n)},onKeyDown:e=>{e.key===`Enter`&&(e.currentTarget.value=N(a))},onBlur:e=>{e.currentTarget.value=N(a)}})]})]})}var Be,F,I,L;function R(){return(R=e((()=>{ae(),pe(),g(),x(),O(),r(),C(),Me(),s(),Be=[15026253,16214805,16762173,4630360,1222036,37119,7231183,14041247],F=(e,t,n)=>e<<16|t<<8|n,I=e=>Math.max(0,Math.min(255,Math.round(e))),L=.9})))()}var z;function B(){return(B=e((()=>{c(),z={channels:`msp-params-params-form-channels`,chevron:`msp-params-params-form-chevron`,collapsible:`msp-params-params-form-collapsible`,collapsibleBar:`msp-params-params-form-collapsibleBar`,collapsibleHeader:`msp-params-params-form-collapsibleHeader`,collapsibleMeta:`msp-params-params-form-collapsibleMeta`,color:`msp-params-params-form-color`,control:`msp-params-params-form-control`,count:`msp-params-params-form-count`,fields:`msp-params-params-form-fields`,file:`msp-params-params-form-file`,fileClear:`msp-params-params-form-fileClear`,fileNames:`msp-params-params-form-fileNames`,filePick:`msp-params-params-form-filePick`,form:`msp-params-params-form-form`,input:`msp-params-params-form-input`,item:`msp-params-params-form-item`,itemActions:`msp-params-params-form-itemActions`,itemAdd:`msp-params-params-form-itemAdd`,itemForm:`msp-params-params-form-itemForm`,itemLabel:`msp-params-params-form-itemLabel`,itemRow:`msp-params-params-form-itemRow`,items:`msp-params-params-form-items`,knob:`msp-params-params-form-knob`,label:`msp-params-params-form-label`,mapped:`msp-params-params-form-mapped`,nested:`msp-params-params-form-nested`,number:`msp-params-params-form-number`,presets:`msp-params-params-form-presets`,presetsList:`msp-params-params-form-presetsList`,range:`msp-params-params-form-range`,row:`msp-params-params-form-row`,select:`msp-params-params-form-select`,settings:`msp-params-params-form-settings`,slider:`msp-params-params-form-slider`,subSettings:`msp-params-params-form-subSettings`,swatch:`msp-params-params-form-swatch`,switch:`msp-params-params-form-switch`,textarea:`msp-params-params-form-textarea`,unsupported:`msp-params-params-form-unsupported`},l(`components/params/params-form.module.css`,`@layer msp.components {
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
  transition: background-color var(--msp-motion-fast) var(--msp-ease);
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
  align-items: center;
  width: 100%;
  min-width: 0;
  height: 24px;
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
`)})))()}var V;function Ve(){return(Ve=e((()=>{c(),V={check:`msp-params-extra-controls-check`,chevron:`msp-params-extra-controls-chevron`,curve:`msp-params-extra-controls-curve`,field:`msp-params-extra-controls-field`,fieldContent:`msp-params-extra-controls-fieldContent`,graph:`msp-params-extra-controls-graph`,graphArea:`msp-params-extra-controls-graphArea`,graphAt:`msp-params-extra-controls-graphAt`,graphEditor:`msp-params-extra-controls-graphEditor`,graphFoot:`msp-params-extra-controls-graphFoot`,graphHint:`msp-params-extra-controls-graphHint`,grid:`msp-params-extra-controls-grid`,interval:`msp-params-extra-controls-interval`,intervalRange:`msp-params-extra-controls-intervalRange`,intervalTrack:`msp-params-extra-controls-intervalTrack`,intervalValue:`msp-params-extra-controls-intervalValue`,matrix:`msp-params-extra-controls-matrix`,option:`msp-params-extra-controls-option`,options:`msp-params-extra-controls-options`,optionsContent:`msp-params-extra-controls-optionsContent`,point:`msp-params-extra-controls-point`,spark:`msp-params-extra-controls-spark`,strip:`msp-params-extra-controls-strip`,stripName:`msp-params-extra-controls-stripName`,under:`msp-params-extra-controls-under`,vec:`msp-params-extra-controls-vec`},l(`components/params/extra-controls.module.css`,`@layer msp.components {
.msp-params-extra-controls-field {
  align-items: center;
  gap: var(--msp-space-2);
  width: 100%;
  min-width: 0;
  height: 24px;
  padding: 0 var(--msp-space-2) 0 var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
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
`)})))()}function H(e){let{open:t}=e;return o(`button`,{type:`button`,class:z.presets,"aria-label":`${e.label} presets`,"aria-haspopup":`listbox`,"aria-expanded":t,onClick:e=>{e.stopPropagation(),t.set(!t.value)},children:[i(E,{name:`swatch-book`,size:12}),`Presets`]})}function U(e){let{open:t}=e;return i(y,{when:t,reveal:!0,children:()=>{let n=e.presets();return i(`div`,{class:z.presetsList,children:i(Ee,{options:n.map(([,e],t)=>[String(t),e]),value:e.current.pipe(b(e=>e===void 0?void 0:String(e))),onPick:r=>{t.set(!1);let i=n[Number(r)];i&&e.onPick(i[0])},onClose:()=>t.set(!1)})})}})}function W(e,t,n=!1){let r=e.findIndex(([e])=>n&&e&&typeof e==`object`&&t&&typeof t==`object`?Object.entries(e).every(([e,n])=>G(t[e],n)):G(e,t));return r<0?void 0:r}var G;function He(){return(He=e((()=>{x(),v(),T(),we(),B(),s(),G=(e,t)=>JSON.stringify(e)===JSON.stringify(t)})))()}function K(e){let t=w(!1);return o(a,{children:[o(`div`,{class:z.row,children:[i(`span`,{class:z.label,children:e.head}),i(`div`,{class:z.control,children:e.field(t)})]}),i(y,{when:t,reveal:!0,children:()=>i(`div`,{class:V.under,children:e.body(()=>t.set(!1))})})]})}function q(e){return o(`button`,{type:`button`,class:V.field,"aria-expanded":e.open,"aria-label":e.label,onClick:()=>e.open.set(!e.open.value),children:[i(`span`,{class:V.fieldContent,children:e.children}),i(E,{name:`chevron-down`,size:14,class:V.chevron})]})}function Ue(e){let{param:t,binding:n}=e,r=n.value.pipe(b(e=>{let n=t.options.filter(([t])=>e?.includes(t)).map(([,e])=>e);return n.length?n.join(`, `):t.emptyValue??`None`}));return i(K,{head:e.head,field:t=>i(q,{open:t,label:e.label,children:r}),body:()=>i(he,{class:V.options,contentClass:V.optionsContent,role:`listbox`,"aria-multiselectable":`true`,"aria-label":e.label,children:t.options.map(([e,t])=>o(`button`,{type:`button`,role:`option`,class:V.option,"aria-selected":n.value.pipe(b(t=>!!t?.includes(e)),_()),onClick:()=>{let t=n.get()??[];n.set(t.includes(e)?t.filter(t=>t!==e):[...t,e])},children:[i(`span`,{children:t}),i(E,{name:`check`,size:14,class:V.check})]}))})})}function We(e){let{binding:t}=e;return i(`div`,{class:V.vec,children:[`x`,`y`,`z`].map((e,n)=>i(`input`,{class:z.number,"aria-label":e,"data-tip":e,value:t.value.pipe(b(e=>Ge(e?.[n]))),onChange:e=>{let r=Number(e.currentTarget.value);if(!Number.isFinite(r))return;let i=[...t.get()??[0,0,0]];i[n]=r,t.set(i)}}))})}function Ge(e){return e===void 0||!Number.isFinite(e)?``:String(Math.round(e*1e4)/1e4)}function Ke(e){let{binding:t}=e,n=e=>{for(let t=0;t<16;t++)if(e[t]!==+(t%5==0))return!1;return!0};return i(K,{head:e.head,field:r=>i(q,{open:r,label:e.label,children:t.value.pipe(b(e=>e&&n(e)?`Identity`:`4 × 4 matrix`))}),body:()=>i(`div`,{class:V.matrix,children:Array.from({length:16},(e,n)=>{let r=n%4*4+Math.floor(n/4);return i(`input`,{class:z.number,value:t.value.pipe(b(e=>Ge(e?.[r]))),onChange:e=>{let n=Number(e.currentTarget.value);if(!Number.isFinite(n))return;let i=Array.from(t.get());i[r]=n,t.set(i)}})})})})}function qe(e){let{param:t,binding:n}=e,r=t.min??0,a=t.max??1,s=t.step??(a-r)/100,c=e=>`${100*(e-r)/(a-r||1)}%`,l=s<1?Math.min(4,Math.ceil(-Math.log10(s))):0,u=e=>i(`input`,{class:V.intervalRange,type:`range`,min:String(r),max:String(a),step:String(s),"aria-label":e===0?`From`:`To`,value:n.value.pipe(b(t=>String(t?.[e]??(e?a:r)))),onInput:t=>{let i=Number(t.currentTarget.value),o=[...n.get()??[r,a]];o[e]=e===0?Math.min(i,o[1]):Math.max(i,o[0]),n.set(o),t.currentTarget.value=String(o[e])}});return o(`div`,{class:V.interval,children:[o(`div`,{class:V.intervalTrack,style:{"--msp-from":n.value.pipe(b(e=>c(e?.[0]??r))),"--msp-to":n.value.pipe(b(e=>c(e?.[1]??a)))},children:[u(0),u(1)]}),i(`span`,{class:V.intervalValue,children:n.value.pipe(b(e=>`${(e?.[0]??r).toFixed(l)}–${(e?.[1]??a).toFixed(l)}`))})]})}function Je(e){let t=e?.colors??[];if(!t.length)return`none`;let n=t.map((e,n)=>Array.isArray(e)?{color:M(e[0]),at:e[1]}:{color:M(e),at:t.length===1?0:n/(t.length-1)});if(e?.kind===`set`){let e=n.length;return`linear-gradient(90deg, ${n.map((t,n)=>`${t.color} ${100*n/e}% ${100*(n+1)/e}%`).join(`, `)})`}return`linear-gradient(90deg, ${n.map(e=>`${e.color} ${100*e.at}%`).join(`, `)})`}function Ye(e){let{param:t,binding:n}=e,r=t.presetKind??`all`,a=$e.filter(([,e])=>r===`all`?!0:r===`set`?e.type===`qualitative`:e.type!==`qualitative`),s=e=>a.find(([,t])=>JSON.stringify(t.list)===JSON.stringify(e?.colors))?.[1].label??`Custom`;return i(K,{head:e.head,field:t=>o(q,{open:t,label:e.label,children:[i(`span`,{class:V.strip,style:{background:n.value.pipe(b(Je))}}),i(`span`,{class:V.stripName,children:n.value.pipe(b(s))})]}),body:t=>i(he,{class:V.options,contentClass:V.optionsContent,role:`listbox`,"aria-label":e.label,children:a.map(([,e])=>{let r={kind:e.type===`qualitative`?`set`:`interpolate`,colors:e.list};return o(`button`,{type:`button`,role:`option`,class:V.option,"aria-selected":n.value.pipe(b(t=>s(t)===e.label)),onClick:()=>{n.set({kind:r.kind,colors:[...r.colors]}),t()},children:[i(`span`,{class:V.strip,style:{background:Je(r)}}),i(`span`,{class:V.stripName,children:e.label}),i(E,{name:`check`,size:14,class:V.check})]})})})})}function Xe(e){let{binding:t}=e;return i(`input`,{class:z.input,placeholder:`https://…`,value:t.value.pipe(b(e=>e?.url??``)),onChange:e=>t.set(ye.Url(e.currentTarget.value))})}function Ze(e){let{binding:t}=e,n=(e,t,n)=>(e??[]).map(([e,r],i)=>`${i?`L`:`M`}${(e*t).toFixed(1)} ${((1-r)*n).toFixed(1)}`).join(` `);return i(K,{head:e.head,field:r=>o(q,{open:r,label:e.label,children:[i(`svg`,{class:V.spark,viewBox:`0 0 56 14`,preserveAspectRatio:`none`,"aria-hidden":`true`,children:i(`path`,{d:t.value.pipe(b(e=>n(e,56,14)))})}),i(`span`,{class:V.stripName,children:t.value.pipe(b(e=>`${e?.length??0} points`))})]}),body:()=>i(Qe,{param:e.param,binding:t,pathOf:n})})}function Qe(e){let{binding:t}=e,r=w(``),a=t.value,s=e.param.getPresets,c=w(!1),l=o(`svg`,{class:V.graph,viewBox:`0 0 240 96`,preserveAspectRatio:`none`,children:[[.25,.5,.75].map(e=>i(`line`,{class:V.grid,x1:String(e*240),x2:String(e*240),y1:`0`,y2:`96`})),[.25,.5,.75].map(e=>i(`line`,{class:V.grid,y1:String(e*96),y2:String(e*96),x1:`0`,x2:`240`})),i(`path`,{class:V.curve,d:t.value.pipe(b(t=>e.pathOf(t,240,96)))}),i(de,{each:a.pipe(b(e=>(e??[]).map((e,t)=>t))),children:e=>i(`circle`,{class:V.point,r:`4`,cx:a.pipe(b(t=>String((t?.[e]?.[0]??0)*240))),cy:a.pipe(b(t=>String((1-(t?.[e]?.[1]??0))*96))),"data-index":String(e)})})]}),u=e=>{let t=l.getBoundingClientRect(),n=Math.min(1,Math.max(0,(e.clientX-t.left)/t.width)),r=Math.min(1,Math.max(0,1-(e.clientY-t.top)/t.height));return[Math.round(n*1e3)/1e3,Math.round(r*1e3)/1e3]},d=-1,f=e=>{let n=e.target,r=[...t.get()??[]];if(n.tagName===`circle`){d=Number(n.dataset.index),l.setPointerCapture(e.pointerId);return}let i=u(e),a=r.findIndex(([e])=>e>i[0]);r.splice(a<0?r.length:a,0,i),t.set(r)},p=e=>{let n=u(e);if(r.set(`${n[0].toFixed(2)}, ${n[1].toFixed(2)}`),d<0)return;let i=[...t.get()??[]],a=d>0?i[d-1][0]:0,o=d<i.length-1?i[d+1][0]:1;i[d]=[Math.min(o,Math.max(a,n[0])),n[1]],t.set(i)},m=()=>{d=-1};return l.addEventListener(`pointerdown`,f),l.addEventListener(`pointermove`,p),l.addEventListener(`pointerup`,m),l.addEventListener(`pointercancel`,m),l.addEventListener(`dblclick`,e=>{let n=e.target;if(n.tagName!==`circle`)return;let r=Number(n.dataset.index),i=[...t.get()??[]];i.length<=2||(i.splice(r,1),t.set(i))}),l.addEventListener(`pointerleave`,()=>r.set(``)),n(()=>{d=-1}),o(`div`,{class:V.graphEditor,children:[o(`div`,{class:V.graphArea,children:[l,i(`span`,{class:V.graphAt,children:r.asReadonly})]}),o(`div`,{class:V.graphFoot,children:[i(`p`,{class:V.graphHint,children:`Drag a point · click to add · double-click to remove`}),s?i(H,{open:c,label:`Curve`}):null]}),s?i(U,{open:c,presets:s,current:t.value.pipe(b(e=>W(s(),e))),onPick:e=>t.set(e)}):null]})}var $e;function et(){return(et=e((()=>{_e(),ve(),g(),x(),v(),r(),C(),R(),T(),me(),Ve(),B(),He(),s(),$e=Object.entries(ge)})))()}var J;function tt(){return(tt=e((()=>{c(),J={bar:`msp-params-help-bar`,description:`msp-params-help-description`,ends:`msp-params-help-ends`,entry:`msp-params-help-entry`,help:`msp-params-help-help`,name:`msp-params-help-name`,scale:`msp-params-help-scale`,swatch:`msp-params-help-swatch`,table:`msp-params-help-table`,text:`msp-params-help-text`,toggle:`msp-params-help-toggle`},l(`components/params/help.module.css`,`@layer msp.components {
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
`)})))()}function nt(e,t){let n=e=>e&&(e.description||e.legend)?e:void 0;if(e.help){let r=e.help;return t.pipe(b(e=>{try{return n(r(e))}catch{return}}),_((e,t)=>e?.description===t?.description&&e?.legend===t?.legend))}let r=n({description:e.description,legend:e.legend});return r?fe(r):void 0}function rt(e,t){if(!t)return{head:i(`span`,{class:J.text,"data-tip-overflow":``,children:e}),block:null};let n=w(!1),r=t.pipe(b(e=>!!e));return{head:o(a,{children:[i(`span`,{class:J.text,"data-tip-overflow":``,"data-help":r.pipe(b(e=>e?``:void 0)),onClick:e=>{e.currentTarget.hasAttribute(`data-help`)&&(e.stopPropagation(),n.set(!n.value))},children:e}),i(y,{when:r,children:()=>i(`button`,{type:`button`,class:J.toggle,"aria-label":`About ${e}`,title:`About ${e}`,"aria-expanded":n,onClick:e=>{e.stopPropagation(),n.set(!n.value)},children:i(E,{name:`circle-help`,size:12})})})]}),block:i(it,{help:t,open:n})}}function it(e){return i(y,{when:e.open,reveal:!0,children:()=>i(y,{when:e.help,children:e=>o(`div`,{class:J.help,children:[e.description?i(`p`,{class:J.description,children:at(e.description)}):null,e.legend?i(ot,{legend:e.legend}):null]})})})}function at(e){return e.split(/(`[^`]+`)/).map(e=>e.startsWith("`")&&e.endsWith("`")&&e.length>1?i(`code`,{children:e.slice(1,-1)}):e)}function ot(e){let{legend:t}=e;return t.kind===`table-legend`?i(`ul`,{class:J.table,children:t.table.map(([e,t])=>o(`li`,{class:J.entry,children:[i(`span`,{class:J.swatch,style:{background:M(t)}}),i(`span`,{class:J.name,children:e})]}))}):o(`div`,{class:J.scale,children:[i(`span`,{class:J.bar,style:{background:Je({kind:`interpolate`,colors:t.colors})}}),o(`span`,{class:J.ends,children:[i(`span`,{children:t.minLabel}),i(`span`,{children:t.maxLabel})]})]})}function st(){return(st=e((()=>{g(),x(),ue(),v(),C(),R(),T(),et(),tt(),s()})))()}function ct(e){let{form:t}=e,n=lt(e.filter),{essentials:r,advanced:a}=t.layout(),s=e=>i(X,{name:e,param:t.params[e],visible:t.visible(e),filter:n,binding:{value:t.field(e),get:()=>t.values.value[e],set:n=>t.set(e,n)}}),c=n?.pipe(b(e=>a.some(n=>Y(n,t.params[n],e))),_());return o(`div`,{class:z.form,children:[r.map(s),a.length?i(`div`,{hidden:c?.pipe(b(e=>!e)),children:i($,{title:`Advanced`,force:ut(n),children:()=>a.map(s)})}):null]})}function lt(e){return e?.pipe(b(e=>e.trim().toLowerCase()),_())}function ut(e){return e?.pipe(b(e=>e.length>0),_())}function dt(e,t){return t.label||be(e)}function ft(e,t){let n=t.trim().toLowerCase();return Object.keys(e).some(t=>!e[t].isHidden&&Y(t,e[t],n))}function Y(e,t,n){return!n||dt(e,t).toLowerCase().includes(n)||t.description?.toLowerCase().includes(n)?!0:t.type===`group`?Object.keys(t.params).some(e=>Y(e,t.params[e],n)):t.type===`mapped`&&t.select.options.some(([e])=>{let r=t.map(e);return r.type===`group`?Object.keys(r.params).some(e=>Y(e,r.params[e],n)):Y(e,r,n)})}function X(e){let{name:t,param:n,binding:r,filter:a}=e,s=dt(t,n),c=(a?S([e.visible??fe(!0),a]).pipe(b(([e,r])=>e&&Y(t,n,r))):e.visible)?.pipe(b(e=>!e),_());if(n.type===`group`){let e=a?.pipe(b(e=>s.toLowerCase().includes(e)?``:e));return i(`div`,{hidden:c,children:i(yt,{label:s,param:n,binding:r,filter:e,force:ut(a)})})}let{head:l,block:u}=rt(s,nt(n,r.value)),d=e=>o(`div`,{hidden:c,children:[e,u]});if(n.type===`mapped`)return d(xt(n)?i(St,{label:s,head:l,description:n.description,param:n,binding:r}):i(Ct,{label:s,head:l,param:n,binding:r}));if(n.type===`select`)return d(i(Z,{label:s,head:l,description:n.description,options:n.options,binding:r}));if(n.type===`color`)return d(i(pt,{label:s,head:l,description:n.description,binding:r}));if(n.type===`multi-select`)return d(i(Ue,{head:l,label:s,param:n,binding:r}));if(n.type===`mat4`)return d(i(Ke,{head:l,label:s,param:n,binding:r}));if(n.type===`line-graph`)return d(i(Ze,{head:l,label:s,param:n,binding:r}));if(n.type===`color-list`)return d(i(Ye,{head:l,label:s,param:n,binding:r}));if(n.type===`object-list`)return d(i(Et,{head:l,label:s,param:n,binding:r}));if(n.type===`conditioned`)return d(i(wt,{head:l,label:s,param:n,binding:r}));if(n.type===`script`)return d(i(Tt,{head:l,label:s,binding:r}));if(n.type===`converted`){let o={value:r.value.pipe(b(e=>n.fromValue(e))),get:()=>n.fromValue(r.get()),set:e=>r.set(n.toValue(e))},c={...n.converted,label:n.converted.label??s};return i(X,{name:t,param:c,binding:o,visible:e.visible,filter:a})}return n.type===`value`?null:d(o(`div`,{class:z.row,children:[i(`span`,{class:z.label,children:l}),i(`div`,{class:z.control,children:ht(n,r)})]}))}function pt(e){let{binding:t}=e,n=w(!1),r=t.value.pipe(b(e=>M(e))),s=t.value.pipe(b(e=>N(e)));return o(a,{children:[o(`div`,{class:z.row,children:[i(`span`,{class:z.label,children:e.head??e.label}),i(`div`,{class:z.control,children:o(`button`,{type:`button`,class:z.color,"aria-expanded":n,onClick:()=>n.set(!n.value),children:[i(`span`,{class:z.swatch,style:{background:r}}),i(`span`,{class:z.channels,"data-tip-overflow":``,children:s})]})})]}),i(y,{when:n,reveal:!0,children:()=>i(ze,{value:t.value,onChange:e=>t.set(e)})})]})}function mt(e){let{param:t,binding:n}=e,r=t.type===`file-list`,a=w(!1),s=e=>{e.length&&n.set(r?e.map(e=>ye.File(e)):ye.File(e[0]))},c=i(`input`,{type:`file`,hidden:!0,multiple:r,accept:t.accept,onChange:e=>{s([...e.currentTarget.files??[]]),e.currentTarget.value=``}}),l=n.value.pipe(b(e=>(e?Array.isArray(e)?e:[e]:[]).map(e=>e.name)));return o(`div`,{class:z.file,"data-dragging":a.asReadonly.pipe(b(e=>e?``:void 0)),children:[i(`button`,{type:`button`,class:z.filePick,onClick:()=>c.click(),onDragOver:e=>{e.preventDefault(),a.set(!0)},onDragLeave:()=>a.set(!1),onDrop:e=>{e.preventDefault(),e.stopPropagation(),a.set(!1),s([...e.dataTransfer?.files??[]])},children:i(`span`,{class:z.fileNames,"data-empty":l.pipe(b(e=>e.length?void 0:``)),children:l.pipe(b(e=>e.length===0?r?`Select files…`:`Select a file…`:e.length===1?e[0]:`${e.length} files · ${e.join(`, `)}`))})}),i(y,{when:l.pipe(b(e=>e.length>0)),children:()=>i(`button`,{type:`button`,class:z.fileClear,"aria-label":`Clear`,title:`Clear`,onClick:()=>n.set(null),children:i(E,{name:`x`,size:13})})}),c]})}function ht(e,t){switch(e.type){case`boolean`:return i(gt,{binding:t});case`number`:return i(_t,{param:e,binding:t});case`text`:return e.multiline?i(`textarea`,{class:z.textarea,rows:3,value:t.value,placeholder:e.placeholder,onChange:e=>t.set(e.currentTarget.value)}):i(`input`,{class:z.input,value:t.value,placeholder:e.placeholder,onChange:e=>t.set(e.currentTarget.value)});case`file`:case`file-list`:return i(mt,{param:e,binding:t});case`vec3`:return i(We,{param:e,binding:t});case`interval`:return i(qe,{param:e,binding:t});case`url`:return i(Xe,{binding:t});default:return i(`span`,{class:z.unsupported,children:e.type})}}function gt(e){let{binding:t}=e;return i(`button`,{type:`button`,role:`switch`,class:z.switch,"aria-checked":t.value.pipe(b(e=>!!e)),onClick:()=>t.set(!t.get()),children:i(`span`,{class:z.knob})})}function _t(e){let{param:t,binding:n}=e,r=n.value.pipe(b(e=>vt(e,t.step)));return t.min===void 0||t.max===void 0?i(`input`,{class:z.input,type:`number`,step:String(t.step??`any`),value:r,onChange:e=>{let t=Number(e.currentTarget.value);Number.isFinite(t)&&n.set(t)}}):o(`div`,{class:z.slider,children:[i(`input`,{class:z.range,type:`range`,min:String(t.min),max:String(t.max),step:String(t.step??(t.max-t.min)/100),value:n.value.pipe(b(String)),style:{"--msp-progress":n.value.pipe(b(e=>`${100*(e-t.min)/(t.max-t.min||1)}%`))},onInput:e=>n.set(Number(e.currentTarget.value))}),i(`input`,{class:z.number,value:r,onChange:e=>{let r=Number(e.currentTarget.value);Number.isFinite(r)&&n.set(Math.min(t.max,Math.max(t.min,r)))}})]})}function vt(e,t){if(!Number.isFinite(e))return``;let n=t&&t<1?Math.min(4,Math.ceil(-Math.log10(t))):0;return e.toFixed(n)}function Z(e){let{options:t,binding:n}=e,r=w(!1),s=n.value.pipe(b(e=>String(t.findIndex(t=>t[0]===e)))),c=t.map(([,e],t)=>[String(t),e]);return o(a,{children:[o(`div`,{class:z.row,children:[i(`span`,{class:z.label,children:e.head??e.label}),i(`div`,{class:z.control,children:i(Te,{size:`sm`,open:r,"aria-label":e.label,label:s.pipe(b(e=>c[Number(e)]?.[1]??``))})})]}),i(y,{when:r,children:()=>i(Ee,{options:c,value:s,onPick:e=>{r.set(!1),n.set(t[Number(e)][0])},onClose:()=>r.set(!1)})})]})}function yt(e){let{param:t,binding:n,filter:r}=e,s=t.presets,c=e=>n.set({...n.get()??{},...e}),l=s?n.value.pipe(b(e=>W(s,e,!0)),_()):void 0;if(t.isFlat)return o(a,{children:[s&&l?i(bt,{label:e.label,presets:s,current:l,onPick:c}):null,i(Q,{params:t.params,binding:n,filter:r})]});if(!s||!l)return i($,{title:e.label,open:!!t.isExpanded,force:e.force,children:()=>i(Q,{params:t.params,binding:n,filter:r})});let u=w(!1),d=w(!1);return i($,{title:e.label,open:!!t.isExpanded,force:e.force,openWhen:d.asReadonly,meta:l.pipe(b(e=>e===void 0?``:s[e][1])),action:i(H,{open:u,label:e.label}),below:()=>i(U,{open:u,presets:()=>s,current:l,onPick:e=>{c(e),d.set(!0)}}),children:()=>i(Q,{params:t.params,binding:n,filter:r})})}function bt(e){let t=w(!1);return o(a,{children:[o(`div`,{class:z.row,children:[i(`span`,{class:z.label,children:`Presets`}),i(`div`,{class:z.control,children:i(Te,{size:`sm`,open:t,"aria-label":`${e.label} presets`,label:e.current.pipe(b(t=>t===void 0?`Custom`:e.presets[t][1]))})})]}),i(U,{open:t,presets:()=>e.presets,current:e.current,onPick:e.onPick})]})}function xt(e){let t=e.select.options.map(e=>e[0]).sort();return t.length===2&&t[0]===`off`&&t[1]===`on`}function St(e){let{param:t,binding:n}=e,r=n.value.pipe(b(e=>e?.name===`on`),_()),s=w(!1),c=e=>n.set({name:e,params:Ot(t.map(e))}),l={value:r,get:()=>n.get()?.name===`on`,set:e=>{c(e?`on`:`off`),e||s.set(!1)}},u=t.map(`on`),d=u.type===`group`&&Object.keys(u.params).length>0,f={value:n.value.pipe(b(e=>e?.params),_()),get:()=>n.get()?.params,set:e=>n.set({name:`on`,params:e})};return o(a,{children:[o(`div`,{class:z.row,children:[i(`span`,{class:z.label,children:e.head??e.label}),o(`div`,{class:z.control,children:[i(gt,{binding:l}),d?i(y,{when:r,children:()=>i(`button`,{type:`button`,class:z.settings,title:`${e.label} settings`,"aria-label":`${e.label} settings`,"aria-expanded":s,onClick:()=>s.set(!s.value),children:i(E,{name:`sliders-horizontal`,size:14})})}):null]})]}),d?i(y,{when:S([r,s.asReadonly]).pipe(b(([e,t])=>e&&t)),children:()=>i(`div`,{class:z.subSettings,children:i(Q,{params:u.params,binding:f})})}):null]})}function Ct(e){let{param:t,binding:n}=e,r=n.value.pipe(b(e=>e?.name),_()),a={value:r,get:()=>n.get()?.name,set:e=>{let r=t.map(e);n.set({name:e,params:Ot(r)})}};return o(`div`,{class:z.mapped,children:[i(Z,{label:e.label,head:e.head,options:t.select.options,binding:a}),i(y,{when:r,children:e=>{let r=t.map(e),a={value:n.value.pipe(b(e=>e?.params),_()),get:()=>n.get()?.params,set:t=>n.set({name:e,params:t})};return r.type===`group`?i(Q,{params:r.params,binding:a,nested:!r.isFlat}):i(X,{name:`value`,param:r,binding:a})}})]})}function Q(e){let{params:t,binding:n}=e;return i(`div`,{class:e.nested?z.nested:z.fields,children:Object.keys(t).filter(e=>!t[e].isHidden).map(r=>{let a=t[r],o=a.hideIf?n.value.pipe(b(e=>!a.hideIf(e??{}))):void 0;return i(X,{name:r,param:a,visible:o,filter:e.filter,binding:{value:n.value.pipe(b(e=>e?.[r]),_()),get:()=>n.get()?.[r],set:e=>n.set({...n.get(),[r]:e})}})})})}function wt(e){let{param:t,binding:n}=e,r=n.value.pipe(b(e=>String(t.conditionForValue(e))),_()),a={value:r,get:()=>String(t.conditionForValue(n.get())),set:e=>n.set(t.conditionedValue(n.get(),e))};return o(`div`,{class:z.mapped,children:[i(Z,{label:e.label,head:e.head,options:t.select.options,binding:a}),i(y,{when:r,children:e=>i(`div`,{class:z.nested,children:i(X,{name:e,param:t.conditionParams[e],binding:n})})})]})}function Tt(e){let{binding:t}=e,n=e=>({value:t.value.pipe(b(t=>t?.[e]??``),_()),get:()=>t.get()?.[e],set:n=>t.set({...t.get(),[e]:n})}),r=n(`expression`);return o(`div`,{class:z.mapped,children:[i(Z,{label:e.label,head:e.head,options:kt,binding:n(`language`)}),i(`div`,{class:z.nested,children:o(`div`,{class:z.row,children:[i(`span`,{class:z.label,children:`Expression`}),i(`div`,{class:z.control,children:i(`textarea`,{class:z.textarea,rows:3,spellcheck:!1,value:r.value,onChange:e=>r.set(e.currentTarget.value)})})]})})]})}function Et(e){let{param:t,binding:n}=e,r=t.presets,s=w(!1),c=n.value.pipe(b(e=>e??[])),l=(e,t)=>{let r=[...n.get()??[]];r[e]=t,n.set(r)};return o(a,{children:[o(`div`,{class:z.row,children:[i(`span`,{class:z.label,children:e.head}),i(`div`,{class:z.control,children:i(`span`,{class:z.count,children:c.pipe(b(e=>e.length===1?`1 item`:`${e.length} items`))})})]}),o(`div`,{class:z.items,children:[i(de,{each:c.pipe(b(e=>e.map((e,t)=>t))),children:e=>i(Dt,{param:t,binding:n,index:e,replace:l})}),o(`div`,{class:z.itemActions,children:[o(`button`,{type:`button`,class:z.itemAdd,"aria-label":`Add to ${e.label}`,onClick:()=>n.set([...n.get()??[],t.ctor()]),children:[i(E,{name:`plus`,size:13}),`Add`]}),r?i(H,{open:s,label:e.label}):null]}),r?i(U,{open:s,presets:()=>r,current:n.value.pipe(b(e=>W(r,e)),_()),onPick:e=>n.set(e)}):null]})]})}function Dt(e){let{param:t,binding:n,index:r}=e,a=w(!1);return o(`div`,{class:z.item,"data-open":a.asReadonly.pipe(b(e=>e?``:void 0)),children:[o(`div`,{class:z.itemRow,onClick:()=>a.set(!a.value),children:[i(`span`,{class:z.itemLabel,children:n.value.pipe(b(e=>e?.[r]===void 0?``:t.getLabel(e[r])))}),i(`button`,{type:`button`,class:z.settings,title:`Edit`,"aria-label":`Edit`,"aria-expanded":a,onClick:e=>{e.stopPropagation(),a.set(!a.value)},children:i(E,{name:`sliders-horizontal`,size:14})}),i(`button`,{type:`button`,class:z.settings,title:`Remove`,"aria-label":`Remove`,onClick:e=>{e.stopPropagation(),n.set((n.get()??[]).filter((e,t)=>t!==r))},children:i(E,{name:`x`,size:13})})]}),i(y,{when:a,reveal:!0,children:()=>{let a=new k(t.element,n.get()?.[r],{onChange:t=>e.replace(r,t)});return i(`div`,{class:z.itemForm,children:i(ct,{form:a})})}})]})}function Ot(e){if(e.type===`group`){let t={};for(let n of Object.keys(e.params))t[n]=e.params[n].defaultValue;return t}return e.defaultValue}function $(e){let t=w(!!e.open);if(e.openWhen){let r=e.openWhen.subscribe(e=>{e&&t.set(!0)});n(()=>r.unsubscribe())}let r=e.force?S([t.asReadonly,e.force]).pipe(b(([e,t])=>e||t)):t.asReadonly;return o(`div`,{class:z.collapsible,children:[o(`div`,{class:z.collapsibleBar,children:[o(`button`,{type:`button`,class:z.collapsibleHeader,"aria-expanded":r,onClick:()=>t.set(!t.value),children:[e.title,i(E,{name:`chevron-right`,size:12,class:z.chevron}),e.meta?i(`span`,{class:z.collapsibleMeta,children:e.meta}):null]}),e.action]}),e.below?.(),i(y,{when:r,reveal:!0,children:()=>i(`div`,{class:z.nested,children:e.children()})})]})}var kt;function At(){return(At=e((()=>{_e(),xe(),pe(),g(),x(),ue(),v(),r(),A(),C(),we(),R(),T(),B(),et(),st(),He(),s(),kt=[[`mol-script`,`MolScript`],[`pymol`,`PyMOL`],[`vmd`,`VMD`],[`jmol`,`Jmol`]]})))()}export{k as a,je as c,R as i,At as n,A as o,ft as r,O as s,ct as t};