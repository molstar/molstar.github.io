import{n as e}from"./rolldown-runtime-DkW27tQK.js";function t(){let e=[],t=!1;return{registerDispose(n){if(t)return n(),()=>{};let r={active:!0,dispose:n};return e.push(r),()=>{if(!r.active)return;r.active=!1;let t=e.indexOf(r);t>=0&&e.splice(t,1),n()}},dispose(){if(t)return;t=!0;let n=!1,r;try{for(let t of[...e].reverse())if(t.active){t.active=!1;try{t.dispose()}catch(e){n||(n=!0,r=e)}}}finally{e.length=0}if(n)throw r}}}var n;function r(){return(r=e((()=>{n=class e{#e=t();#t;#n=!1;#r=!1;#i=!1;#a=!1;#o=!1;constructor(){if(this.mount!==e.prototype.mount||this.unmount!==e.prototype.unmount||this.retire!==e.prototype.retire)throw Error(`ReactiveModel lifecycle methods cannot be overridden; use the protected lifecycle hooks`);Object.defineProperties(this,{mount:{configurable:!1,enumerable:!1,value:()=>this.#s(),writable:!1},unmount:{configurable:!1,enumerable:!1,value:()=>this.#c(),writable:!1},retire:{configurable:!1,enumerable:!1,value:()=>this.#l(),writable:!1}})}mount(){this.#s()}#s(){if(this.#i)return;if(this.#r){this.#o||(this.#o=!0,console.warn(`${this.constructor.name}: mounted again while mounted. A model has one owner: the first unmount will tear it down under the other.`));return}let e=t();this.#r=!0,this.#t=e,this.#n=!0;try{this.onMount()}catch(t){this.#r=!1,this.#t===e&&(this.#t=void 0);try{e.dispose()}catch{}throw t}finally{this.#n=!1}this.#a&&(this.#a=!1,this.#c())}unmount(){this.#c()}#c(){if(!this.#r)return;if(this.#n){this.#a=!0;return}this.#r=!1;let e=this.#t;this.#t=void 0;let t=!1,n;try{this.onUnmount()}catch(e){t=!0,n=e}try{e?.dispose()}catch(e){t||(t=!0,n=e)}if(t)throw n}retire(){this.#l()}#l(){if(this.#i)return;this.#i=!0;let e=!1,t;try{this.#c()}catch(n){e=!0,t=n}try{this.onRetire()}catch(n){e||(e=!0,t=n)}try{this.#e.dispose()}catch(n){e||(e=!0,t=n)}if(e)throw t}registerDispose(e){if(!this.#n||this.#t===void 0)throw Error(`Cannot register dispose outside onMount`);return this.#t.registerDispose(e)}registerPermanentDispose(e){if(this.#i)throw Error(`Cannot register permanent dispose after retirement`);return this.#e.registerDispose(e)}subscribe(e,t){this.#u(e=>this.registerDispose(e),e,t)}subscribePermanently(e,t){if(this.#i)throw Error(`Cannot subscribe permanently after retirement`);this.#u(e=>this.registerPermanentDispose(e),e,t)}#u(e,t,n){let r,i=!1,a=e(()=>{i=!0,r?.unsubscribe()});try{r=t.subscribe(n)}catch(e){throw a(),e}i&&r.unsubscribe()}onMount(){}onUnmount(){}onRetire(){}}})))()}function i(e,t){if(c.get(e)!==t){c.set(e,t);for(let e of l.values())e()}}function a(){return[s,...c.values()].join(`
`)}function o(e=document){if(l.has(e))return;let t=e.defaultView,n;if(t&&`adoptedStyleSheets`in e&&typeof t.CSSStyleSheet?.prototype.replaceSync==`function`){let r=new t.CSSStyleSheet;e.adoptedStyleSheets=[...e.adoptedStyleSheets,r],n=()=>r.replaceSync(a())}else{let t=e.createElement(`style`);t.setAttribute(`data-msp-styles`,``),e.head.appendChild(t),n=()=>{t.textContent=a()}}let r=!1;l.set(e,()=>{r||(r=!0,queueMicrotask(()=>{r=!1,n()}))}),n()}var s,c,l;function u(){return(u=e((()=>{s=`@layer msp.reset, msp.theme, msp.components, msp.overrides;`,c=new Map,l=new Map})))()}function d(){return(d=e((()=>{u(),i(`styles/reset.css`,`@property --msp-fade {
  syntax: "<length>";
  inherits: false;
  initial-value: 0;
}

@keyframes msp-fade-overflow {
  from, to {
    --msp-fade: 20px;
  }
}

@property --msp-fade-top {
  syntax: "<length>";
  inherits: false;
  initial-value: 0;
}

@property --msp-fade-bottom {
  syntax: "<length>";
  inherits: false;
  initial-value: 0;
}

@keyframes msp-fade-scroll-top {
  from {
    --msp-fade-top: 0px;
  }

  to {
    --msp-fade-top: 16px;
  }
}

@keyframes msp-fade-scroll-bottom {
  from {
    --msp-fade-bottom: 16px;
  }

  to {
    --msp-fade-bottom: 0px;
  }
}

@keyframes msp-reveal {
  from {
    opacity: 0;
    height: 0;
    margin-block: 0;
    padding-block: 0;
    overflow: clip;
  }

  to {
    overflow: clip;
  }
}

@keyframes msp-reveal-side {
  from {
    opacity: 0;
    translate: 12px;
  }
}

@layer msp.reset {
  :where(.msp-root) {
    interpolate-size: allow-keywords;
    font-family: var(--msp-font-sans);
    font-size: var(--msp-font-size-md);
    line-height: var(--msp-line-height);
    color: var(--msp-color-text);
    -webkit-font-smoothing: antialiased;
    text-size-adjust: none;
    cursor: default;
  }

  :where(.msp-root) :where(input:not([type="range"], [type="checkbox"], [type="radio"]), textarea, [contenteditable]) {
    cursor: text;
  }

  :where(.msp-root), :where(.msp-root) *, :where(.msp-root) :before, :where(.msp-root) :after {
    box-sizing: border-box;
  }

  :where(.msp-root) :where(h1, h2, h3, h4, h5, h6, p, ul, ol, dl, dd, figure, blockquote, pre) {
    margin: 0;
  }

  :where(.msp-root) :where(ul, ol) {
    padding: 0;
    list-style: none;
  }

  :where(.msp-root) :where(button, input, select, textarea) {
    font: inherit;
    color: inherit;
    letter-spacing: inherit;
  }

  :where(.msp-root) :where(button) {
    cursor: pointer;
    background: none;
    border: 0;
    margin: 0;
    padding: 0;
  }

  :where(.msp-root) :where(button:disabled) {
    cursor: default;
  }

  :where(.msp-root) :where(svg) {
    flex-shrink: 0;
    display: block;
  }

  :where(.msp-root) :where(:focus-visible) {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: 1px;
  }

  :where(.msp-root) :where([data-reveal]) {
    animation: msp-reveal var(--msp-motion-base) var(--msp-ease-reveal);
  }

  :where(.msp-root) :where([data-reveal="side"]) {
    animation-name: msp-reveal-side;
  }

  :where(.msp-root) :where([hidden]) {
    display: none !important;
  }

  @media (prefers-reduced-motion: reduce) {
    :where(.msp-root), :where(.msp-root) *, :where(.msp-root) :before, :where(.msp-root) :after {
      transition-duration: .01ms !important;
      animation-duration: .01ms !important;
      animation-iteration-count: 1 !important;
    }
  }
}
`)})))()}function f(){return(f=e((()=>{u(),i(`styles/theme.css`,`@layer msp.theme {
  :root, [data-msp-theme="light"] {
    color-scheme: light;
    --msp-color-bg: #eeece7;
    --msp-color-text: #332b1f;
    --msp-color-accent: #ae5d04;
    --msp-color-accent-strong: #974102;
    --msp-color-danger: #c4091f;
    --msp-color-success: #078a40;
    --msp-color-warning: #b7860b;
    --msp-color-info: #5e3673;
    --msp-shade: #000;
    --msp-color-brand-1: #7a4f2f;
    --msp-color-brand-2: #e0ae2c;
    --msp-color-brand-3: #6f9a80;
    --msp-color-brand-4: #3f86ad;
  }

  [data-msp-theme="dark"] {
    color-scheme: dark;
    --msp-color-bg: #111318;
    --msp-color-text: #ccd4e0;
    --msp-color-accent: #51a2fb;
    --msp-color-accent-strong: #68befd;
    --msp-color-danger: #fd354b;
    --msp-color-success: #0cca5d;
    --msp-color-warning: #fcc937;
    --msp-color-info: #b18ac6;
    --msp-shade: #fff;
    --msp-step-control: 10%;
    --msp-step-hover: 15%;
    --msp-step-pressed: 20%;
    --msp-color-brand-1: #d29a68;
    --msp-color-brand-2: #f5d36b;
    --msp-color-brand-3: #a8d8bc;
    --msp-color-brand-4: #79bfe6;
  }

  [data-msp-theme="blue"] {
    color-scheme: dark;
    --msp-color-bg: #2d3e50;
    --msp-color-text: #edf1f2;
    --msp-color-accent: #3b9ad9;
    --msp-color-accent-strong: #fff;
    --msp-color-danger: #ff5a4f;
    --msp-color-success: #0cca5d;
    --msp-color-warning: #fcc937;
    --msp-color-info: #b18ac6;
    --msp-shade: #fff;
    --msp-step-control: 10%;
    --msp-step-hover: 15%;
    --msp-step-pressed: 20%;
    --msp-color-brand-1: #d29a68;
    --msp-color-brand-2: #f5d36b;
    --msp-color-brand-3: #a8d8bc;
    --msp-color-brand-4: #79bfe6;
  }

  @media (prefers-color-scheme: dark) {
    [data-msp-theme="auto"] {
      color-scheme: dark;
      --msp-color-bg: #111318;
      --msp-color-text: #ccd4e0;
      --msp-color-accent: #51a2fb;
      --msp-color-accent-strong: #68befd;
      --msp-color-danger: #fd354b;
      --msp-color-success: #0cca5d;
      --msp-color-warning: #fcc937;
      --msp-color-info: #b18ac6;
      --msp-shade: #fff;
      --msp-step-control: 10%;
      --msp-step-hover: 15%;
      --msp-step-pressed: 20%;
      --msp-color-brand-1: #d29a68;
      --msp-color-brand-2: #f5d36b;
      --msp-color-brand-3: #a8d8bc;
      --msp-color-brand-4: #79bfe6;
    }
  }

  :root, [data-msp-theme] {
    --msp-color-panel: color-mix(in oklab, var(--msp-color-bg), var(--msp-shade) 3%);
    --msp-color-raised: color-mix(in oklab, var(--msp-color-bg), var(--msp-shade) 5%);
    --msp-color-well: var(--msp-color-bg);
    --msp-color-control: color-mix(in oklab, var(--msp-color-bg), var(--msp-shade) var(--msp-step-control, 6.5%));
    --msp-color-hover: color-mix(in oklab, var(--msp-color-bg), var(--msp-shade) var(--msp-step-hover, 9%));
    --msp-color-pressed: color-mix(in oklab, var(--msp-color-bg), var(--msp-shade) var(--msp-step-pressed, 13%));
    --msp-color-border: color-mix(in oklab, var(--msp-color-bg), var(--msp-shade) 15%);
    --msp-color-border-strong: color-mix(in oklab, var(--msp-color-bg), var(--msp-shade) 28%);
    --msp-color-text-muted: color-mix(in oklab, var(--msp-color-text), var(--msp-color-bg) 33%);
    --msp-color-text-subtle: color-mix(in oklab, var(--msp-color-text), var(--msp-color-bg) 55%);
    --msp-color-accent-muted: color-mix(in oklab, var(--msp-color-accent), var(--msp-color-bg) 80%);
    --msp-color-focus-ring: var(--msp-color-accent);
    --msp-color-scrim: #00000059;
    --msp-glass-bg: color-mix(in oklab, var(--msp-color-panel), transparent 30%);
    --msp-glass-panel-bg: color-mix(in oklab, var(--msp-color-panel), transparent 5%);
    --msp-glass-filter: blur(20px) saturate(1.4);
    --msp-glass-edge: color-mix(in oklab, var(--msp-color-text), transparent 88%);
    --msp-glass-shadow: 0 0 0 1px var(--msp-glass-edge);
    --msp-accent-cyan: #7f8c8d;
    --msp-accent-red: #e74c3c;
    --msp-accent-gray: #34495e;
    --msp-accent-green: #27ae60;
    --msp-accent-purple: #8e44ad;
    --msp-accent-blue: #2e86c1;
    --msp-accent-orange: #d35400;
    --msp-font-sans: "Helvetica Neue", "Segoe UI", Helvetica, "Source Sans Pro", Arial, sans-serif;
    --msp-font-mono: ui-monospace, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
    --msp-font-size-xs: 11px;
    --msp-font-size-sm: 12px;
    --msp-font-size-md: 14px;
    --msp-font-size-lg: 16px;
    --msp-line-height: 1.4;
    --msp-row-height: 32px;
    --msp-control-height: 28px;
    --msp-label-width: 110px;
    --msp-space-1: 2px;
    --msp-space-2: 4px;
    --msp-space-3: 8px;
    --msp-space-4: 12px;
    --msp-space-5: 16px;
    --msp-space-6: 24px;
    --msp-inset: var(--msp-space-3);
    --msp-panel-inset: var(--msp-space-2);
    --msp-canvas-edge: var(--msp-space-3);
    --msp-icon-sm: 14px;
    --msp-icon-md: 15px;
    --msp-radius-sm: 2px;
    --msp-radius-md: 4px;
    --msp-radius-lg: 8px;
    --msp-shadow-float: 0 2px 8px #0000002e;
    --msp-shadow-overlay: 0 8px 28px #00000047;
    --msp-z-overlay: 10;
    --msp-z-dialog: 20;
    --msp-z-toast: 30;
    --msp-z-tooltip: 40;
    --msp-motion-fast: .1s;
    --msp-motion-base: .22s;
    --msp-ease: cubic-bezier(.2, 0, 0, 1);
    --msp-ease-reveal: cubic-bezier(.4, 0, .2, 1);
  }

  [data-msp-ink="light"] {
    --msp-ink: #f5f5f5;
    --msp-ink-muted: #f5f5f5b3;
    --msp-ink-shadow: 0 0 3px #000c;
  }

  [data-msp-ink="dark"] {
    --msp-ink: #1a1a1a;
    --msp-ink-muted: #1a1a1ab3;
    --msp-ink-shadow: 0 0 3px #fffc;
  }
}
`)})))()}function ee(){return(ee=e((()=>{d(),f()})))()}function te(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Class extends value `+String(t)+` is not a constructor or null`);_(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}function ne(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})}function re(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o=Object.create((typeof Iterator==`function`?Iterator:Object).prototype);return o.next=s(0),o.throw=s(1),o.return=s(2),typeof Symbol==`function`&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(s){if(r)throw TypeError(`Generator is already executing.`);for(;o&&(o=0,s[0]&&(n=0)),n;)try{if(r=1,i&&(a=s[0]&2?i.return:s[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;switch(i=0,a&&(s=[s[0]&2,a.value]),s[0]){case 0:case 1:a=s;break;case 4:return n.label++,{value:s[1],done:!1};case 5:n.label++,i=s[1],s=[0];continue;case 7:s=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){n.label=s[1];break}if(s[0]===6&&n.label<a[1]){n.label=a[1],a=s;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(s);break}a[2]&&n.ops.pop(),n.trys.pop();continue}s=t.call(e,n)}catch(e){s=[6,e],i=0}finally{r=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}function p(e){var t=typeof Symbol==`function`&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length==`number`)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw TypeError(t?`Object is not iterable.`:`Symbol.iterator is not defined.`)}function m(e,t){var n=typeof Symbol==`function`&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,a=[],o;try{for(;(t===void 0||t-->0)&&!(i=r.next()).done;)a.push(i.value)}catch(e){o={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return a}function h(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||=Array.prototype.slice.call(t,0,r),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}function g(e){return this instanceof g?(this.v=e,this):new g(e)}function ie(e,t,n){if(!Symbol.asyncIterator)throw TypeError(`Symbol.asyncIterator is not defined.`);var r=n.apply(e,t||[]),i,a=[];return i=Object.create((typeof AsyncIterator==`function`?AsyncIterator:Object).prototype),s(`next`),s(`throw`),s(`return`,o),i[Symbol.asyncIterator]=function(){return this},i;function o(e){return function(t){return Promise.resolve(t).then(e,d)}}function s(e,t){r[e]&&(i[e]=function(t){return new Promise(function(n,r){a.push([e,t,n,r])>1||c(e,t)})},t&&(i[e]=t(i[e])))}function c(e,t){try{l(r[e](t))}catch(e){f(a[0][3],e)}}function l(e){e.value instanceof g?Promise.resolve(e.value.v).then(u,d):f(a[0][2],e)}function u(e){c(`next`,e)}function d(e){c(`throw`,e)}function f(e,t){e(t),a.shift(),a.length&&c(a[0][0],a[0][1])}}function ae(e){if(!Symbol.asyncIterator)throw TypeError(`Symbol.asyncIterator is not defined.`);var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof p==`function`?p(e):e[Symbol.iterator](),n={},r(`next`),r(`throw`),r(`return`),n[Symbol.asyncIterator]=function(){return this},n);function r(t){n[t]=e[t]&&function(n){return new Promise(function(r,a){n=e[t](n),i(r,a,n.done,n.value)})}}function i(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)}}var _;function v(){return(v=e((()=>{_=function(e,t){return _=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},_(e,t)}})))()}function y(e){return typeof e==`function`}function oe(){return(oe=e((()=>{})))()}function se(e){var t=e(function(e){Error.call(e),e.stack=Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}function ce(){return(ce=e((()=>{})))()}var b;function le(){return(le=e((()=>{b=se(function(e){return function(t){e(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(e,t){return t+1+`) `+e.toString()}).join(`
  `):``,this.name=`UnsubscriptionError`,this.errors=t}})})))()}function x(e,t){if(e){var n=e.indexOf(t);0<=n&&e.splice(n,1)}}function ue(){return(ue=e((()=>{})))()}function de(e){return e instanceof S||e&&`closed`in e&&y(e.remove)&&y(e.add)&&y(e.unsubscribe)}function fe(e){y(e)?e():e.unsubscribe()}var S,pe;function C(){return(C=e((()=>{v(),le(),S=function(){function e(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var e,t,n,r,i;if(!this.closed){this.closed=!0;var a=this._parentage;if(a){if(this._parentage=null,Array.isArray(a))try{for(var o=p(a),s=o.next();!s.done;s=o.next())s.value.remove(this)}catch(t){e={error:t}}finally{try{s&&!s.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}else a.remove(this)}var c=this.initialTeardown;if(y(c))try{c()}catch(e){i=e instanceof b?e.errors:[e]}var l=this._finalizers;if(l){this._finalizers=null;try{for(var u=p(l),d=u.next();!d.done;d=u.next()){var f=d.value;try{fe(f)}catch(e){i??=[],e instanceof b?i=h(h([],m(i)),m(e.errors)):i.push(e)}}}catch(e){n={error:e}}finally{try{d&&!d.done&&(r=u.return)&&r.call(u)}finally{if(n)throw n.error}}}if(i)throw new b(i)}},e.prototype.add=function(t){if(t&&t!==this){if(this.closed)fe(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=this._finalizers??[]).push(t)}}},e.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},e.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},e.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&x(t,e)},e.prototype.remove=function(t){var n=this._finalizers;n&&x(n,t),t instanceof e&&t._removeParent(this)},e.EMPTY=(function(){var t=new e;return t.closed=!0,t})(),e}(),pe=S.EMPTY})))()}var w;function T(){return(T=e((()=>{w={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}})))()}var E;function me(){return(me=e((()=>{v(),E={setTimeout:function(e,t){var n=[...arguments].slice(2),r=E.delegate;return r?.setTimeout?r.setTimeout.apply(r,h([e,t],m(n))):setTimeout.apply(void 0,h([e,t],m(n)))},clearTimeout:function(e){return(E.delegate?.clearTimeout||clearTimeout)(e)},delegate:void 0}})))()}function he(e){E.setTimeout(function(){var t=w.onUnhandledError;if(t)t(e);else throw e})}function ge(){return(ge=e((()=>{T(),me()})))()}function _e(){}function ve(e){return D(`E`,void 0,e)}function ye(e){return D(`N`,e,void 0)}function D(e,t,n){return{kind:e,value:t,error:n}}var be;function xe(){return(xe=e((()=>{be=(function(){return D(`C`,void 0,void 0)})()})))()}function Se(e){if(w.useDeprecatedSynchronousErrorHandling){var t=!O;if(t&&(O={errorThrown:!1,error:null}),e(),t){var n=O,r=n.errorThrown,i=n.error;if(O=null,r)throw i}}else e()}function Ce(e){w.useDeprecatedSynchronousErrorHandling&&O&&(O.errorThrown=!0,O.error=e)}var O;function k(){return(k=e((()=>{T(),O=null})))()}function A(e,t){return Te.call(e,t)}function j(e){w.useDeprecatedSynchronousErrorHandling?Ce(e):he(e)}function we(e){throw e}function M(e,t){var n=w.onStoppedNotification;n&&E.setTimeout(function(){return n(e,t)})}var N,Te,Ee,P,De;function F(){return(F=e((()=>{v(),C(),T(),ge(),xe(),me(),k(),N=function(e){te(t,e);function t(t){var n=e.call(this)||this;return n.isStopped=!1,t?(n.destination=t,de(t)&&t.add(n)):n.destination=De,n}return t.create=function(e,t,n){return new P(e,t,n)},t.prototype.next=function(e){this.isStopped?M(ye(e),this):this._next(e)},t.prototype.error=function(e){this.isStopped?M(ve(e),this):(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped?M(be,this):(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(S),Te=Function.prototype.bind,Ee=function(){function e(e){this.partialObserver=e}return e.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(e){j(e)}},e.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(e){j(e)}else j(e)},e.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(e){j(e)}},e}(),P=function(e){te(t,e);function t(t,n,r){var i=e.call(this)||this,a;if(y(t)||!t)a={next:t??void 0,error:n??void 0,complete:r??void 0};else{var o;i&&w.useDeprecatedNextContext?(o=Object.create(t),o.unsubscribe=function(){return i.unsubscribe()},a={next:t.next&&A(t.next,o),error:t.error&&A(t.error,o),complete:t.complete&&A(t.complete,o)}):a=t}return i.destination=new Ee(a),i}return t}(N),De={closed:!0,next:_e,error:we,complete:_e}})))()}var I;function L(){return(L=e((()=>{I=(function(){return typeof Symbol==`function`&&Symbol.observable||`@@observable`})()})))()}function Oe(e){return e}function ke(){return(ke=e((()=>{})))()}function Ae(e){return e.length===0?Oe:e.length===1?e[0]:function(t){return e.reduce(function(e,t){return t(e)},t)}}function je(){return(je=e((()=>{})))()}function Me(e){return e??w.Promise??Promise}function Ne(e){return e&&y(e.next)&&y(e.error)&&y(e.complete)}function Pe(e){return e&&e instanceof N||Ne(e)&&de(e)}var R;function z(){return(z=e((()=>{F(),C(),L(),je(),T(),k(),R=function(){function e(e){e&&(this._subscribe=e)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(e,t,n){var r=this,i=Pe(e)?e:new P(e,t,n);return Se(function(){var e=r,t=e.operator,n=e.source;i.add(t?t.call(i,n):n?r._subscribe(i):r._trySubscribe(i))}),i},e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},e.prototype.forEach=function(e,t){var n=this;return t=Me(t),new t(function(t,r){var i=new P({next:function(t){try{e(t)}catch(e){r(e),i.unsubscribe()}},error:r,complete:t});n.subscribe(i)})},e.prototype._subscribe=function(e){return this.source?.subscribe(e)},e.prototype[I]=function(){return this},e.prototype.pipe=function(){return Ae([...arguments])(this)},e.prototype.toPromise=function(e){var t=this;return e=Me(e),new e(function(e,n){var r;t.subscribe(function(e){return r=e},function(e){return n(e)},function(){return e(r)})})},e.create=function(t){return new e(t)},e}()})))()}function Fe(e){return!!e&&(e instanceof R||y(e.lift)&&y(e.subscribe))}function Ie(){return(Ie=e((()=>{z()})))()}function Le(e){try{e()}catch(e){console.error(e)}}function B(e=`A binding`){if(!W)throw Error(`${e} was created outside a render scope; render with \`render\` or in an element.`);return W}function V(e,t){let n=W;W=e;try{return t()}finally{W=n}}function Re(e){B(`onCleanup`).onCleanup(e)}function H(e){if(Fe(e))return e;if(e&&typeof e==`object`&&`asReadonly`in e&&Fe(e.asReadonly))return e.asReadonly}function U(e,t){let n=H(e);n?B().own(n.subscribe(t)):t(e)}var ze,W;function G(){return(G=e((()=>{Ie(),ze=class e{#e;#t;#n;#r=!1;#i=!1;constructor(e){this.#e=e}get disposed(){return this.#r}child(){let t=new e(this);return this.#r?t.dispose():(this.#t??=new Set).add(t),t}onCleanup(e){this.#r?Le(e):(this.#n??=[]).push(e)}own(e){this.#r?e.unsubscribe():(this.#n??=[]).push(e)}dispose(){if(this.#r)return;this.#r=!0,this.#i=!0;let e=this.#t;if(e){let t=[...e];for(let e=t.length-1;e>=0;e--)t[e].dispose();this.#t=void 0}let t=this.#n;if(this.#n=void 0,t)for(let e=t.length-1;e>=0;e--){let n=t[e];typeof n==`function`?Le(n):n.unsubscribe()}let n=this.#e;n&&!n.#i&&n.#t?.delete(this)}}})))()}function Be(e,t){if(typeof e==`function`){let n=e(t??{});return n&&typeof n==`object`&&rt in n?n:He(n)}let n=tt.has(e),r=n?document.createElementNS(et,e):document.createElement(e);if(t){let i=e===`select`&&`value`in t;Xe(r,t,n,e.includes(`-`),i);let a=t.children;typeof a==`string`||typeof a==`number`?r.textContent=String(a):a!==void 0&&K(r,a,null),i&&Xe(r,{value:t.value},n,!1),typeof t.ref==`function`&&t.ref(r)}return r}function Ve(e){let t=document.createDocumentFragment();return K(t,e.children,null),t}function He(e){if(e instanceof Node)return e;let t=document.createDocumentFragment();return K(t,e,null),t}function K(e,t,n){if(t!=null&&typeof t!=`boolean`){if(t instanceof Node)e.insertBefore(t,n);else if(Array.isArray(t))for(let r of t)K(e,r,n);else if(typeof t==`function`)K(e,t(),n);else if(typeof t==`object`){let r=H(t);r?We(e,r,n):console.warn(`Cannot render`,t)}else e.insertBefore(document.createTextNode(String(t)),n)}}function Ue(e){let t=typeof e;return e===null||t===`undefined`||t===`string`||t===`number`||t===`bigint`||t===`boolean`}function We(e,t,n){let r=B(`A reactive child`),i=document.createTextNode(``);e.insertBefore(i,n);let a,o,s;U(t,e=>{if(Ue(e)){let t=e==null||typeof e==`boolean`?``:String(e);if(i){i.data!==t&&(i.data=t);return}c(),i=document.createTextNode(t),o.parentNode.insertBefore(i,o);return}if(!a){a=document.createComment(``),o=document.createComment(``);let e=i;e.parentNode.insertBefore(a,e),e.parentNode.insertBefore(o,e.nextSibling)}i&&=(i.remove(),void 0),c();let t=r.child();s=t;let n=document.createDocumentFragment();V(t,()=>K(n,e,null)),o.parentNode.insertBefore(n,o)});function c(){s?.dispose(),s=void 0,a&&o&&Ge(a,o)}}function Ge(e,t){let n=e.parentNode;if(!n)return;let r=e.nextSibling;for(;r&&r!==t;){let e=r.nextSibling;n.removeChild(r),r=e}}function Ke(e){if(!X.has(e)){X.add(e);for(let t of it)e.addEventListener(t,Je),e.addEventListener(t,qe,!0)}}function qe(e){if(e.bubbles||e[Y])return;e[Y]=e.currentTarget;let t=e.target,n=t[J]?.[e.type];if(n){Object.defineProperty(e,"currentTarget",{configurable:!0,value:t});try{n.call(t,e)}finally{delete e.currentTarget}}}function Je(e){if(!e.bubbles)return;let t=e.currentTarget,n=e.composedPath(),r=n.indexOf(t);if(r<0)return;let i=e[Y],a=i?n.indexOf(i):-1,o=!1;try{for(let t=i?a<0?r+1:a+1:0;t<=r;t++){let r=n[t],i=r[J]?.[e.type];if(i&&(Object.defineProperty(e,"currentTarget",{configurable:!0,value:r}),o=!0,i.call(r,e),e.cancelBubble))break}}finally{e[Y]=t,o&&delete e.currentTarget}}function Ye(e,t,n){it.has(t)?((e[J]??={})[t]=n,typeof document<`u`&&Ke(document)):e.addEventListener(t,n)}function Xe(e,t,n,r,i=!1){let a;for(let o in t){let s=t[o];if(!(o===`children`||o===`ref`||s===void 0||i&&o===`value`)){if(o===`class`&&typeof s==`string`&&t.classList===void 0)s&&e.setAttribute(`class`,s);else if(o.startsWith(`on:`))e.addEventListener(o.slice(3),s);else if(o.length>2&&o.startsWith(`on`)&&o.charCodeAt(2)<91&&typeof s==`function`){let t=at.get(o);t===void 0&&at.set(o,t=o.slice(2).toLowerCase()),Ye(e,t,s)}else if(o===`class`||o===`className`)a??=new ot(e),U(s,e=>a.setBase(e));else if(o===`classList`){a??=new ot(e);for(let e of Object.keys(s))U(s[e],t=>a.setFlag(e,!!t))}else if(o===`style`)Ze(e,s);else if(o.startsWith(`attr:`)){let t=o.slice(5);U(s,n=>q(e,t,n))}else if(o.startsWith(`prop:`)){let t=o.slice(5);U(s,n=>{e[t]=n})}else if(n||o.includes(`-`))Z(s)?q(e,o,s):U(s,t=>q(e,o,t));else if(r)U(s,t=>{e[o]=t});else if(o in e&&!nt.has(o)){if(Z(s)){e[o]=s===null?``:s,(s===null||s===!1)&&e.removeAttribute(o);continue}U(s,t=>{e[o]=t??``,(t==null||t===!1)&&e.removeAttribute(o)})}else Z(s)?q(e,o,s):U(s,t=>q(e,o,t))}}}function q(e,t,n){typeof n==`boolean`&&t.startsWith(`aria-`)?e.setAttribute(t,String(n)):n==null||n===!1?e.removeAttribute(t):e.setAttribute(t,n===!0?``:String(n))}function Ze(e,t){if(typeof t==`string`||H(t)){U(t,t=>{t?e.setAttribute(`style`,t):e.removeAttribute(`style`)});return}let n=t;for(let t of Object.keys(n)){let r=t.startsWith(`--`)||t.includes(`-`)?t:Qe(t),i=!r.startsWith(`--`)&&!st.has(r);U(n[t],t=>{t==null||t===``?e.style.removeProperty(r):e.style.setProperty(r,typeof t==`number`&&i&&t!==0?`${t}px`:String(t))})}}function Qe(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function $e(e,t){Ke(t);let n=new ze,r=document.createComment(``),i=document.createComment(``),a=document.createDocumentFragment();return a.append(r),V(n,()=>K(a,e(),null)),a.append(i),t.appendChild(a),()=>{n.dispose(),Ge(r,i),r.remove(),i.remove()}}var et,tt,nt,rt,it,J,Y,X,at,Z,ot,st;function Q(){return(Q=e((()=>{G(),et=`http://www.w3.org/2000/svg`,tt=new Set(`svg.animate.animateMotion.animateTransform.circle.clipPath.defs.desc.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.metadata.mpath.path.pattern.polygon.polyline.radialGradient.rect.set.stop.switch.symbol.text.textPath.tspan.use.view`.split(`.`)),nt=new Set([`list`,`form`,`download`,`role`,`width`,`height`]),rt=Symbol(`Passthrough`),it=new Set([`click`,`dblclick`,`contextmenu`,`input`,`change`,`beforeinput`,`keydown`,`keyup`,`pointerdown`,`pointerup`,`pointermove`,`pointerover`,`pointerout`,`pointercancel`,`mousedown`,`mouseup`,`mousemove`,`mouseover`,`mouseout`,`focusin`,`focusout`]),J=Symbol(`handlers`),Y=Symbol(`walked`),X=new WeakSet,at=new Map,Z=e=>e===null||typeof e!=`object`&&typeof e!=`function`,ot=class{#e=``;#t=new Map;constructor(e){this.el=e}setBase(e){this.#e=e??``,this.#n()}setFlag(e,t){this.#t.set(e,t),this.#n()}#n(){let e=this.#e;for(let[t,n]of this.#t)n&&(e=e?`${e} ${t}`:t);e?this.el.setAttribute(`class`,e):this.el.removeAttribute(`class`)}},st=new Set([`opacity`,`z-index`,`flex`,`flex-grow`,`flex-shrink`,`order`,`line-height`,`font-weight`,`zoom`,`aspect-ratio`,`scale`,`fill-opacity`,`stroke-opacity`,`stroke-width`,`grid-row`,`grid-column`,`tab-size`,`orphans`,`widows`,`columns`,`column-count`])})))()}function ct(e){for(let t of e)customElements.get(t.tag)||customElements.define(t.tag,t)}var lt,ut;function dt(){return(dt=e((()=>{r(),ee(),u(),Q(),G(),lt=typeof HTMLElement>`u`?class{}:HTMLElement,ut=class extends lt{#e;#t=!1;#n;#r=!1;constructor(){if(super(),Object.hasOwn(this,`model`)){let e=this.model;delete this.model,this.model=e}}get model(){return this.#e}set model(e){e!==this.#e&&(this.#a(),this.#e=e,this.#t=!1,this.isConnected&&this.#i())}connectedCallback(){o(this.ownerDocument),this.parentElement?.closest(`.msp-root`)||this.classList.add(`msp-root`),this.#r?this.#r=!1:this.#i()}disconnectedCallback(){this.#n&&(this.#r=!0,queueMicrotask(()=>{this.#r&&(this.#r=!1,this.#a())}))}#i(){if(this.#n)return;this.#e===void 0&&this.createModel&&(this.#e=this.createModel(),this.#t=!0);let e=this.#e;if(e===void 0)return;let t=new ze;this.#n=t,this.#t&&e instanceof n&&(e.mount(),t.onCleanup(()=>e.unmount())),Ke(this);let r=document.createDocumentFragment();V(t,()=>K(r,this.render(e),null)),this.replaceChildren(r)}#a(){this.#r=!1;let e=this.#n;e&&(this.#n=void 0,e.dispose(),this.replaceChildren())}}})))()}function ft(e){let t=document.createElement($.tag);return t.model=e,t}var $;function pt(){return(pt=e((()=>{dt(),$=class extends ut{static{this.tag=`msp-story-root`}render(e){return e()}},ct([$])})))()}function mt(e,t,n){return Be(e,t)}var ht;function gt(){return(gt=e((()=>{Q(),ht=mt})))()}export{r as $,he as A,ie as B,I as C,Se as D,F as E,ue as F,re as G,g as H,se as I,p as J,m as K,ce as L,S as M,C as N,k as O,x as P,n as Q,oe as R,L as S,N as T,ne as U,ae as V,te as W,i as X,v as Y,u as Z,H as _,ft as a,Oe as b,K as c,$e as d,U as f,V as g,B as h,pt as i,pe as j,ge as k,We as l,Re as m,mt as n,Ve as o,G as p,h as q,ht as r,Q as s,gt as t,Ge as u,R as v,P as w,ke as x,z as y,y as z};