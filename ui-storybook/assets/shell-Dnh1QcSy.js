import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,d as n,f as r,g as i,h as a,m as o,n as s,o as c,r as l,s as u,t as d,y as f}from"./jsx-runtime-DiBZWcxb.js";import{i as p,r as m}from"./base-Cal5NIfy.js";import{h,m as g}from"./Observable-CzLAfIvT.js";import{i as _,n as v,r as y,t as b}from"./OperatorSubscriber-C8tumhdd.js";import{i as ee,r as te}from"./BehaviorSubject-CLldIS24.js";import{a as x,c as S,n as ne,o as re,r as ie,s as ae,t as oe}from"./params-form-MNGzvbPp.js";import{i as se,n as ce,r as le,t as ue}from"./timer-Dj9-mLci.js";import{c as de,f as fe,i as pe,l as me,n as C,r as he,s as ge,t as w}from"./distinctUntilChanged-BHDujrwf.js";import{a as T,i as _e,l as ve,n as E,r as D,t as ye,u as O}from"./control-flow-HAEcegil.js";import{n as k,t as A}from"./map-CsR1ibWS.js";import{n as j,t as M}from"./combineLatest-Cmmnh-lC.js";import{n as N,r as P,s as be}from"./observable-state-D-XGaosJ.js";import{n as F,t as I}from"./icon-Dqu8cMU0.js";import{n as xe,t as L}from"./scroll-area-XzYIuKyv.js";import{n as Se,t as Ce}from"./keyed-selector-CKIJWWFN.js";import{n as we,t as Te}from"./wordmark-FS1EQ9jB.js";import{Z as Ee,et as De,n as Oe,t as R}from"./param-definition-Dm5QwBCI.js";import{n as ke,t as Ae}from"./text-input-CQilzVcE.js";import{n as je,t as Me}from"./button-DEZz5joq.js";import{n as Ne,t as Pe}from"./tooltip-ziYyf9zK.js";function Fe(){return se(1)}function Ie(){return(Ie=e((()=>{le()})))()}function Le(){var e=[...arguments];return Fe()(he(e,fe(e)))}function Re(){return(Re=e((()=>{Ie(),me(),pe()})))()}function ze(e,t,n,r,i){return function(a,o){var s=n,c=t,l=0;a.subscribe(b(o,function(t){var n=l++;c=s?e(c,t,n):(s=!0,t),r&&o.next(c)},i&&(function(){s&&o.next(c),o.complete()})))}}function Be(){return(Be=e((()=>{v()})))()}function Ve(e,t){return _(ze(e,t,arguments.length>=2,!0))}function He(){return(He=e((()=>{y(),Be()})))()}function Ue(){var e=[...arguments],t=fe(e);return _(function(n,r){(t?Le(e,n,t):Le(e,n)).subscribe(r)})}function We(){return(We=e((()=>{Re(),me(),y()})))()}function Ge(e,t){return _(function(n,r){var i=null,a=0,o=!1,s=function(){return o&&!i&&r.complete()};n.subscribe(b(r,function(n){i?.unsubscribe();var o=0,c=a++;de(e(n,c)).subscribe(i=b(r,function(e){return r.next(t?t(n,e,c,o++):e)},function(){i=null,s()}))},function(){o=!0,s()}))})}function Ke(){return(Ke=e((()=>{ge(),y(),v()})))()}function qe(e){let t=e.background??`radial-gradient(circle at 50% 45%, #ffffff 0%, #eef0f3 70%, #dfe3e8 100%)`;if(e.empty)return s(`div`,{style:{position:`absolute`,inset:0,background:t}});let n=[];for(let e=0;e<90;e++){let t=e/90,r=120+t*560+40*Math.sin(t*19),i=300+150*Math.sin(t*7.3)+30*Math.cos(t*23),a=200+160*t;n.push(s(`circle`,{cx:r,cy:i,r:14+4*Math.sin(t*31),fill:`hsl(${a} 55% 60%)`,"data-index":e}))}return s(`div`,{style:{position:`absolute`,inset:0,background:t},onPointerOver:t=>{let n=t.target.getAttribute?.(`data-index`);e.onHover?.(n==null?void 0:Number(n))},onPointerLeave:()=>e.onHover?.(void 0),children:l(`svg`,{viewBox:`0 0 800 600`,preserveAspectRatio:`xMidYMid meet`,style:`width: 100%; height: 100%`,children:[s(`defs`,{children:l(`radialGradient`,{id:`msp-placeholder-shade`,cx:`35%`,cy:`35%`,r:`65%`,children:[s(`stop`,{offset:`0%`,"stop-color":`#fff`,"stop-opacity":`0.55`}),s(`stop`,{offset:`100%`,"stop-color":`#000`,"stop-opacity":`0.2`})]})}),s(`g`,{children:n}),s(`g`,{style:`mix-blend-mode: soft-light; pointer-events: none`,children:n.map(e=>s(`circle`,{cx:e.getAttribute(`cx`),cy:e.getAttribute(`cy`),r:e.getAttribute(`r`),fill:`url(#msp-placeholder-shade)`}))})]})})}function Je(){return(Je=e((()=>{d()})))()}function z(){if(typeof navigator>`u`)return!1;let e=navigator.userAgentData?.platform??navigator.platform;return/mac|iphone|ipad|ipod/i.test(e??``)}function Ye(e,t=z()){let n=t?Ze:Qe,r=[];t?(e.alt&&r.push(n.alt),e.shift&&r.push(n.shift),e.mod&&r.push(n.mod)):(e.mod&&r.push(n.mod),e.alt&&r.push(n.alt),e.shift&&r.push(n.shift));let i=e.key.toLowerCase();return r.push($e[i]??(i.length===1?i.toUpperCase():e.key)),r}function Xe(e,t=z()){return Ye(e,t).join(t?``:`+`)}var Ze,Qe,$e;function B(){return(B=e((()=>{Ze={mod:`⌘`,alt:`⌥`,shift:`⇧`},Qe={mod:`Ctrl`,alt:`Alt`,shift:`Shift`},$e={arrowup:`↑`,arrowdown:`↓`,arrowleft:`←`,arrowright:`→`,escape:`Esc`,enter:`↵`," ":`Space`}})))()}function et(e){return{mount:(t,r,i)=>n(()=>e({ctx:r}),t,i)}}function tt(){return(tt=e((()=>{u()})))()}function nt(e){let t=Object.entries(e.sources),n=t.map(([,e])=>e);function r(e){let n={};for(let r=0;r<t.length;r+=1){let i=t[r]?.[0];i!==void 0&&(n[i]=e===void 0?t[r]?.[1].value:e[r])}return n}let i=P(e.project(r()),{compare:be}),a=M(n).subscribe(t=>{let n;try{n=e.project(r(t))}catch(e){g.onUnhandledError?g.onUnhandledError(e):console.error(e);return}i.set(n)}),o=i.asReadonly;return Object.assign(o,{dispose(){a.unsubscribe()}})}function rt(){return(rt=e((()=>{j(),h(),N()})))()}function it(e){let t=e=>{let t=e/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4};return .2126*t(e>>16&255)+.7152*t(e>>8&255)+.0722*t(e&255)}function at(e){return e<ht?`dark`:`light`}function ot(e){return at(it(e))}function st(e){if(e.transparentBackground)return;let t=it(e.renderer.backgroundColor),n=e.postprocessing?.background?.variant;if(!n||n.name===`off`||n.name===`image`||n.name===`skybox`)return t;let[r,i]=n.name===`horizontalGradient`?[n.params.topColor,n.params.bottomColor]:[n.params.centerColor,n.params.edgeColor],a=n.params.opacity??1;return a*((it(r)+it(i))/2)+(1-a)*t}function ct(e,t=`light`){let n=st(e);return n===void 0?t:at(n)}function lt(e){let t=e.trim(),n=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(t)?.[1];if(n)return Number.parseInt(n.length===3?[...n].map(e=>e+e).join(``):n,16);let r=/^rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)/i.exec(t);if(r)return Number(r[1])<<16|Number(r[2])<<8|Number(r[3])}function ut(e){return`#${(e&16777215).toString(16).padStart(6,`0`)}`}function dt(e){let t=lt(e);return{theme:ot(t??16777215),color:t===void 0?`#ffffff`:e}}function ft(e){return P(dt(e)).asReadonly}function pt(e,t={theme:`light`,color:`#ffffff`}){return st(e)===void 0?t:{theme:ct(e),color:ut(e.renderer.backgroundColor)}}function mt(e,t){return nt({sources:{props:e},project:({props:e})=>({...pt(e,t)})})}var ht;function gt(){return(gt=e((()=>{rt(),N(),ht=.179})))()}var _t;function vt(){return(vt=e((()=>{N(),_t=class{#e=P(!1);#t=()=>this.#e.set(document.fullscreenElement===this.target());constructor(e){this.target=e,this.available=typeof document<`u`&&!!document.fullscreenEnabled,this.embedded=typeof window<`u`&&window.self!==window.top,typeof document<`u`&&document.addEventListener(`fullscreenchange`,this.#t)}get mode(){return this.embedded&&this.available?`fullscreen`:`expand`}get active(){return this.#e.asReadonly}get unavailableReason(){return this.available?void 0:`Not allowed by the page Mol* is embedded in`}async toggle(){if(this.available)try{document.fullscreenElement?await document.exitFullscreen():await this.target()?.requestFullscreen()}catch(e){console.error(e)}}dispose(){typeof document<`u`&&document.removeEventListener(`fullscreenchange`,this.#t)}}})))()}var yt,bt,xt,St,Ct;function wt(){return(wt=e((()=>{N(),t(),yt=[`left`,`right`,`top`,`bottom`],bt={left:300,right:340,top:88,bottom:220},xt={left:180,right:180,top:40,bottom:40},St=class{#e;#t;#n;constructor(e,t){this.id=e,this.#e=P(t),this.#t=P([]),this.#n=P(void 0)}get state(){return this.#e.asReadonly}get tabs(){return this.#t.asReadonly}get active(){return this.#n.asReadonly}update(e,t){this.#e.update(e);let n=this.#e.value,r=n.tabs.map(e=>t.get(e)).filter(e=>!!e);this.#t.set(r),this.#n.set(n.collapsed?void 0:r.find(e=>e.id===n.active))}},Ct=class extends f{#e=new Map;#t=new Map;#n=new Map;#r=P(void 0);#i;#a=P(`auto`);#o=P(!1);#s=P(!1);#c=P(!0);#l=P(0);#u=P(`desktop`);#d=P(void 0);#f=P(void 0);#p=P([]);#m=P([]);#h;#g=P([]);#_=new Map;#v;constructor(e={}){super(),this.#v=e.compactWidth??720,this.#h=e.buttons??{},this.#i={};for(let t of yt)this.#i[t]=new St(t,{tabs:[],active:void 0,size:bt[t],collapsed:!1,floating:t===`right`||t===`top`,pinned:!1,...e.docks?.[t]});this.#a.set(e.mode??`auto`),this.#S(),this.setCompactRail(!!e.compactRail)}get compactRail(){return this.#o.asReadonly}get railOpen(){return this.#s.asReadonly}get railShown(){return this.#c.asReadonly}setCompactRail(e){this.#o.set(e),this.setRailOpen(!1)}setRailOpen(e){if(this.#s.set(e),this.#c.set(!this.#o.value||e),!this.#c.value){this.closeOverlay();let e=this.#i.right;e.state.value.collapsed||e.update({collapsed:!0},this.#e)}}toggleRail(){this.#o.value&&this.setRailOpen(!this.#s.value)}dock(e){return this.#i[e]}get mode(){return this.#u.asReadonly}#y=new Map;sectionOpen(e,t){return this.#y.get(`${e}\n${t}`)}setSectionOpen(e,t,n){this.#y.set(`${e}\n${t}`,n)}get tabFocus(){return this.#f.asReadonly}get overlay(){return this.#d.asReadonly}get page(){return this.#r.asReadonly}get toolbar(){return this.#m.asReadonly}sections(e){let t=this.#_.get(e);if(!t){let n=P([]),r=t=>n.set(t.filter(t=>t.slot===e).sort((e,t)=>(e.order??0)-(t.order??0)));r(this.#g.value),this.subscribePermanently(this.#g.asReadonly,r),t=n.asReadonly,this.#_.set(e,t)}return t}registerSections(e){return this.#g.set([...this.#g.value,...e]),()=>this.#g.set(this.#g.value.filter(t=>!e.includes(t)))}registerToolbar(e){return this.#p.set((e=>[...e].sort((e,t)=>(e.order??0)-(t.order??0)))([...this.#p.value,...e])),this.#b(),()=>{this.#p.set(this.#p.value.filter(t=>!e.includes(t))),this.#b()}}setButtons(e){this.#h={...this.#h,...e},this.#b()}#b(){this.#m.set(this.#p.value.filter(e=>this.#h[e.id]!==!1))}get layout(){let e={};for(let t of yt)e[t]=this.#i[t].state.value;return{docks:e,mode:this.#a.value}}registerTabs(e){let t=[...e].sort((e,t)=>(e.order??0)-(t.order??0));for(let e of t){this.#e.set(e.id,e);let t=this.#x(e.id)??this.#i[e.dock??`right`],n=t.state.value,r=n.tabs;if(!r.includes(e.id)){let t=e.order??0,n=r.findIndex(e=>(this.#e.get(e)?.order??0)>t);r=n<0?[...r,e.id]:[...r.slice(0,n),e.id,...r.slice(n)]}t.update({tabs:r,active:n.active??e.id},this.#e)}return()=>{for(let e of t){if(this.#e.get(e.id)!==e)continue;this.#e.delete(e.id);let t=this.#x(e.id);if(!t)continue;let n=t.state.value,r=n.tabs.filter(t=>t!==e.id);t.update({tabs:r,active:n.active===e.id?r[0]:n.active},this.#e)}}}registerOverlays(e){for(let t of e)this.#t.set(t.id,t);return()=>{for(let t of e)this.#t.get(t.id)===t&&(this.#t.delete(t.id),this.#d.value?.overlay===t&&this.closeOverlay())}}registerPages(e){for(let t of e)this.#n.set(t.id,t);return()=>{for(let t of e)this.#n.get(t.id)===t&&(this.#n.delete(t.id),this.#r.value?.page===t&&this.closePage())}}openPage(e,t){let n=this.#n.get(e);n&&(this.closeOverlay(),this.#r.set({page:n,...t?{focus:t}:{}}))}closePage(){this.#r.set(void 0)}show(e,t){let n=this.#x(e);n&&(t?this.#f.set({tab:e,section:t}):this.#f.value?.tab===e&&this.#f.set(void 0),n.update({active:e,collapsed:!1},this.#e))}select(e){let t=this.#x(e);if(!t)return;this.#f.value?.tab===e&&this.#f.set(void 0);let n=t.state.value;n.active===e&&!n.collapsed?t.update({collapsed:!0},this.#e):t.update({active:e,collapsed:!1},this.#e)}toggle(e){let t=this.#i[e];t.update({collapsed:!t.state.value.collapsed},this.#e)}move(e,t,n){let r=this.#x(e);if(!r||!this.#e.has(e))return;let i=r.state.value,a=i.tabs.filter(t=>t!==e);r.update({tabs:a,active:i.active===e?a[0]:i.active},this.#e);let o=this.#i[t],s=[...o.state.value.tabs.filter(t=>t!==e)];s.splice(n??s.length,0,e),o.update({tabs:s,active:e,collapsed:!1},this.#e)}setSize(e,t){this.#i[e].update({size:Math.max(xt[e],Math.round(t))},this.#e)}setFloating(e,t){this.#i[e].update({floating:t},this.#e)}setPinned(e,t){this.#i[e].update({pinned:t},this.#e)}setMode(e){this.#a.set(e),this.#S()}setWidth(e){this.#l.set(e),this.#S()}openOverlay(e,t,n){let r=this.#t.get(e);r&&this.#d.set({overlay:r,...t?{anchor:t}:{},...n?{focus:n}:{}})}toggleOverlay(e,t){this.#d.value?.overlay.id===e?this.closeOverlay():this.openOverlay(e,t)}closeOverlay(){this.#d.set(void 0)}#x(e){for(let t of yt)if(this.#i[t].state.value.tabs.includes(e))return this.#i[t]}#S(){let e=this.#a.value,t=this.#l.value;this.#u.set(e===`auto`?t>0&&t<this.#v?`compact`:`desktop`:e)}}})))()}var Tt;function Et(){return(Et=e((()=>{N(),t(),Tt=class extends f{#e=P(void 0);#t=P([]);#n=P([]);#r=P([]);#i=0;#a;constructor(e={}){super(),this.options=e}get current(){return this.#e.asReadonly}get history(){return this.#t.asReadonly}get tasks(){return this.#n.asReadonly}get chips(){return this.#r.asReadonly}post(e,t=`info`){let n={id:++this.#i,kind:t,text:e,time:new Date};this.#t.set([n,...this.#t.value].slice(0,this.options.historySize??200)),this.#e.set(n),clearTimeout(this.#a),t!==`error`&&(this.#a=setTimeout(()=>this.dismiss(n.id),this.options.fadeMs??4e3))}dismiss(e){(e===void 0||this.#e.value?.id===e)&&(clearTimeout(this.#a),this.#e.set(void 0))}setTasks(e){this.#n.set(e)}setChips(e){this.#r.set(e)}onRetire(){clearTimeout(this.#a)}}})))()}var Dt,Ot;function kt(){return(kt=e((()=>{N(),Dt=[{id:`light`,title:`Light`,icon:`sun`},{id:`dark`,title:`Dark`,icon:`moon`},{id:`blue`,title:`Blue`,icon:`palette`},{id:`auto`,title:`Auto (system)`,icon:`sun-moon`}],Ot=class{#e;constructor(e=`light`){this.#e=P(e)}get theme(){return this.#e.asReadonly}get value(){return this.#e.value}set(e){this.#e.set(e)}next(){let e=Dt.findIndex(e=>e.id===this.#e.value);this.#e.set(Dt[(e+1)%Dt.length].id)}applyTo(e){let t=this.#e.asReadonly.subscribe(t=>{e.dataset.mspTheme=t});return()=>t.unsubscribe()}}})))()}function At(e,t){let n=e.toLowerCase(),r=t.toLowerCase().trim();if(!r)return 0;let i=0,a=0,o=-2;for(let e=0;e<n.length&&a<r.length;e++)n[e]===r[a]&&(i+=e===o+1?3:1,e===0?i+=4:/[\s._:-]/.test(n[e-1])&&(i+=2),o=e,a++);return a===r.length?i-n.length*.01:void 0}function jt(e,t,n){return t.trim()?e.map(e=>({item:e,s:At(n(e),t)})).filter(e=>e.s!==void 0).sort((e,t)=>t.s-e.s).map(e=>e.item):[...e]}function Mt(e,t){let n=e.toLowerCase(),r=t.toLowerCase().trim(),i=[],a=0;for(let e=0;e<n.length&&a<r.length;e++)n[e]===r[a]&&(i.push(e),a++);return a===r.length?i:[]}function Nt(){return(Nt=e((()=>{})))()}var V;function Pt(){return(Pt=e((()=>{p(),V={ask:`msp-command-menu-ask`,askIcon:`msp-command-menu-askIcon`,askKeys:`msp-command-menu-askKeys`,askLabel:`msp-command-menu-askLabel`,askText:`msp-command-menu-askText`,before:`msp-command-menu-before`,caption:`msp-command-menu-caption`,command:`msp-command-menu-command`,crumb:`msp-command-menu-crumb`,empty:`msp-command-menu-empty`,error:`msp-command-menu-error`,footer:`msp-command-menu-footer`,head:`msp-command-menu-head`,headIcon:`msp-command-menu-headIcon`,hint:`msp-command-menu-hint`,input:`msp-command-menu-input`,keys:`msp-command-menu-keys`,list:`msp-command-menu-list`,listContent:`msp-command-menu-listContent`,menu:`msp-command-menu-menu`,"menu-fade":`msp-command-menu-menu-fade`,"menu-in":`msp-command-menu-menu-in`,message:`msp-command-menu-message`,more:`msp-command-menu-more`,proposed:`msp-command-menu-proposed`,row:`msp-command-menu-row`,rowChevron:`msp-command-menu-rowChevron`,rowIcon:`msp-command-menu-rowIcon`,rowMeta:`msp-command-menu-rowMeta`,rowTitle:`msp-command-menu-rowTitle`,run:`msp-command-menu-run`,scrim:`msp-command-menu-scrim`,sentence:`msp-command-menu-sentence`,spacer:`msp-command-menu-spacer`,tail:`msp-command-menu-tail`,token:`msp-command-menu-token`,value:`msp-command-menu-value`},m(`views/command-menu/command-menu.module.css`,`@layer msp.components {
.msp-command-menu-scrim {
  z-index: var(--msp-z-dialog);
  padding: 12vh var(--msp-space-4) var(--msp-space-4);
  background: color-mix(in oklab, var(--msp-color-bg), transparent 75%);
  animation: msp-command-menu-menu-fade var(--msp-motion-fast) var(--msp-ease);
  justify-content: center;
  align-items: flex-start;
  display: flex;
  position: absolute;
  inset: 0;
}

@keyframes msp-command-menu-menu-fade {
  from {
    opacity: 0;
  }
}

.msp-command-menu-menu {
  border-radius: var(--msp-radius-lg);
  background: var(--msp-color-panel);
  width: min(560px, 100%);
  max-height: min(480px, 76vh);
  box-shadow: var(--msp-glass-shadow),
    0 12px 32px #0000001f;
  font-size: var(--msp-font-size-sm);
  animation: msp-command-menu-menu-in var(--msp-motion-base) var(--msp-ease);
  flex-direction: column;
  display: flex;
  overflow: hidden;
}

@keyframes msp-command-menu-menu-in {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
}

.msp-command-menu-head {
  align-items: center;
  gap: var(--msp-space-3);
  height: 40px;
  padding: 0 var(--msp-space-4);
  border-bottom: 1px solid var(--msp-glass-edge);
  flex: none;
  display: flex;
}

.msp-command-menu-headIcon {
  color: var(--msp-color-text-subtle);
  flex: none;
}

.msp-command-menu-input {
  min-width: 0;
  height: 100%;
  color: var(--msp-color-text);
  font: inherit;
  font-size: var(--msp-font-size-md);
  background: none;
  border: 0;
  outline: none;
  flex: 1;

  &::placeholder {
    color: var(--msp-color-text-subtle);
  }
}

.msp-command-menu-command {
  align-items: center;
  gap: var(--msp-space-2);
  height: 26px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-accent), transparent 85%);
  color: var(--msp-color-accent);
  font-size: var(--msp-font-size-sm);
  flex: none;
  font-weight: 600;
  display: flex;
}

.msp-command-menu-message, .msp-command-menu-error {
  padding: var(--msp-space-2) var(--msp-space-4);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  margin: 0;
}

.msp-command-menu-error {
  color: var(--msp-color-danger);
}

.msp-command-menu-hint {
  color: var(--msp-color-text-muted);
}

.msp-command-menu-list {
  flex: 1;
  min-height: 0;

  &:has(.msp-command-menu-listContent:empty) {
    display: none;
  }
}

.msp-command-menu-listContent {
  padding: var(--msp-space-2);
}

.msp-command-menu-empty {
  padding: var(--msp-space-5) var(--msp-space-4);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-sm);
  text-align: center;
  margin: 0;
}

.msp-command-menu-caption {
  padding: var(--msp-space-3) var(--msp-space-3) var(--msp-space-1);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-command-menu-row {
  align-items: center;
  gap: var(--msp-space-3);
  height: 28px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text);
  cursor: default;
  grid-template-columns: 16px minmax(0, 1fr) auto auto;
  grid-auto-flow: column;
  display: grid;

  &[aria-selected="true"] {
    background: var(--msp-color-hover);
  }

  &[aria-disabled="true"] {
    color: var(--msp-color-text-subtle);
  }
}

.msp-command-menu-rowIcon {
  color: var(--msp-color-text-muted);
  place-items: center;
  display: grid;
}

.msp-command-menu-rowTitle {
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;

  & mark {
    color: var(--msp-color-accent);
    background: none;
    font-weight: 600;
  }
}

.msp-command-menu-tail {
  margin-left: var(--msp-space-2);
  color: var(--msp-color-text-muted);
}

.msp-command-menu-rowMeta {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-command-menu-sentence {
  align-items: center;
  gap: var(--msp-space-2);
  padding: var(--msp-space-3) var(--msp-space-4);
  border-bottom: 1px solid var(--msp-glass-edge);
  flex-wrap: wrap;
  flex: none;
  display: flex;
}

.msp-command-menu-token {
  align-items: center;
  gap: var(--msp-space-2);
  display: inline-flex;
}

.msp-command-menu-before {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-sm);
}

.msp-command-menu-value {
  height: 26px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);

  &:hover {
    background: var(--msp-color-hover);
  }

  &[data-empty] {
    color: var(--msp-color-text-subtle);
  }

  &[data-missing] {
    box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-danger), transparent 50%);
  }

  &[data-active] {
    box-shadow: inset 0 0 0 1.5px var(--msp-color-accent);
  }
}

.msp-command-menu-spacer {
  flex: 1;
}

.msp-command-menu-run {
  align-items: center;
  gap: var(--msp-space-2);
  height: 28px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-accent);
  color: #fff;
  font-size: var(--msp-font-size-sm);
  font-weight: 600;
  display: flex;

  & kbd {
    color: inherit;
    background: none;
    box-shadow: inset 0 0 0 1px #ffffff80;
  }
}

.msp-command-menu-more {
  padding: var(--msp-space-2) var(--msp-space-4);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
}

.msp-command-menu-footer {
  gap: var(--msp-space-2) var(--msp-space-4);
  padding: var(--msp-space-2) var(--msp-space-4);
  border-top: 1px solid var(--msp-glass-edge);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  flex-wrap: wrap;
  flex: none;
  display: flex;

  & > span {
    align-items: center;
    gap: var(--msp-space-1);
    display: inline-flex;
  }
}

.msp-command-menu-footer kbd, .msp-command-menu-keys, .msp-command-menu-run kbd {
  min-width: 18px;
  height: 18px;
  padding: 0 var(--msp-space-1);
  border-radius: var(--msp-radius-sm);
  background: var(--msp-color-bg);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge),
    inset 0 -1px 0 var(--msp-glass-edge);
  color: var(--msp-color-text-muted);
  font: inherit;
  font-family: var(--msp-font-mono);
  place-items: center;
  font-size: 10px;
  line-height: 1;
  display: inline-grid;
}

.msp-command-menu-crumb {
  align-items: center;
  gap: var(--msp-space-1);
  height: 24px;
  padding: 0 var(--msp-space-1) 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  flex: none;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-command-menu-rowChevron {
  color: var(--msp-color-text-subtle);
}

.msp-command-menu-ask {
  align-items: center;
  gap: var(--msp-space-2);
  min-height: 40px;
  margin: 0 var(--msp-space-2) var(--msp-space-2);
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-accent), transparent 90%);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  flex: none;
  display: flex;

  &:hover, &[data-default] {
    background: color-mix(in oklab, var(--msp-color-accent), transparent 80%);
  }

  &[data-default] {
    box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-accent), transparent 60%);
  }

  &[data-setup] {
    min-height: 32px;
    color: var(--msp-color-text-muted);
    background: none;

    &:hover {
      background: var(--msp-color-hover);
    }

    & .msp-command-menu-askIcon {
      color: var(--msp-color-text-subtle);
    }
  }
}

.msp-command-menu-askIcon {
  color: var(--msp-color-accent);
  flex: none;
}

.msp-command-menu-askLabel {
  color: var(--msp-color-accent-strong);
  flex: none;
  font-weight: 600;
}

.msp-command-menu-askText {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  color: var(--msp-color-text-muted);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-command-menu-askKeys {
  color: var(--msp-color-text-subtle);
  font-family: inherit;
  font-size: var(--msp-font-size-xs);
  flex: none;
}

.msp-command-menu-proposed {
  align-items: center;
  gap: var(--msp-space-2);
  margin: var(--msp-space-2) var(--msp-space-2) 0;
  padding: var(--msp-space-1) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-accent), transparent 90%);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
  display: flex;
}
}
`)})))()}function Ft(e,t,n,r){let i=e.assistant,a=n.trim();return i.ready()?{id:`assistant-ask`,label:`Ask AI assistant`,detail:`“${a}”`,icon:`sparkles`,run:()=>{let e=i.propose(a);if(e)return r(a),t.open(e.command,e.tail).kind===`form`;i.ask(a)}}:{id:`assistant-setup`,label:`Set up the assistant to ask`,detail:`“${a}”`,icon:`sparkles`,run:()=>i.setup()}}function It(e){let{manager:t}=e,n=P(void 0);return r(t.active,e=>{e||n.set(void 0)}),r(t.outcomes,t=>{t.kind===`done`&&e.onClose()}),a(()=>t.close()),s(`div`,{class:V.scrim,onPointerDown:t=>{t.target===t.currentTarget&&e.onClose()},children:s(`div`,{class:V.menu,role:`dialog`,"aria-label":`Commands`,children:s(D,{when:t.active,fallback:()=>s(Lt,{...e,onPropose:e=>n.set(e)}),children:r=>s(Gt,{manager:t,invocation:r,proposed:n.asReadonly,onClose:e.onClose})})})})}function Lt(e){let{manager:t}=e,n=P(e.initial??``),i=P(e.group),a=P(0),o=P(void 0),u=[...e.prefixes??[],Bt(e,e=>v(e))],d=e=>u.find(t=>e.startsWith(t.char)),f=M([n.asReadonly,i.asReadonly,t.commands,t.groups]).pipe(k(([e,n])=>{let r=[],i=0,a=e=>{e.kind!==`caption`&&(e.index=i++),r.push(e)},o=d(e);if(o){for(let t of o.items(e.slice(o.char.length).trimStart()))a({kind:`item`,item:t,index:0});return r}if(!e.trim()){let{groups:e,commands:i}=t.children(n);if(n===void 0){let n=t.query(``);if(n.recent.length){a({kind:`caption`,label:`Recent`});for(let e of n.recent)a({kind:`match`,match:e,index:0})}e.length&&a({kind:`caption`,label:`Browse`})}for(let t of e)a({kind:`group`,group:t,index:0});if(n!==void 0){let e=new Set(i.map(e=>e.command.category)),t;for(let n of i)e.size>1&&n.command.category!==t&&(t=n.command.category,a({kind:`caption`,label:t})),a({kind:`match`,match:n,index:0});return r}let o=new Set(t.query(``).recent.map(e=>e.command)),s=new Map;for(let e of i){if(o.has(e.command))continue;let t=s.get(e.command.category);t?t.push(e):s.set(e.command.category,[e])}for(let[e,t]of s){a({kind:`caption`,label:e});for(let e of t)a({kind:`match`,match:e,index:0})}return r}let s=t.query(e),c=e=>n===void 0||t.inGroup(e.command,n);s.direct&&c(s.direct)&&a({kind:`match`,match:s.direct,tail:s.direct.tail,index:0});let l=t.groups.value.filter(r=>(n===void 0||t.groupPath(r.id).some(e=>e.id===n))&&r.id!==n&&(At(r.title,e)??-1)>=0);for(let e of l)a({kind:`group`,group:e,index:0});for(let e of s.matches)e.command!==s.direct?.command&&c(e)&&a({kind:`match`,match:e,index:0});return r}),S({bufferSize:1,refCount:!0})),p=[],m=()=>p.filter(e=>e.kind!==`caption`),h=()=>{e.assistant&&(e.assistant.ready()?n.value.trim()&&!d(n.value)&&!Ft(e,t,n.value,e.onPropose).run()&&!t.active.value&&e.onClose():(e.assistant.setup(),e.onClose()))},g=M([n.asReadonly,f]).pipe(k(([e,t])=>!!e.trim()&&!d(e)&&!t.some(e=>e.kind!==`caption`)),w());r(f,e=>{p=e,a.value>=m().length&&a.set(0)});let _=Se(a.asReadonly),v=e=>{n.set(e),x.value=e,a.set(0),o.set(void 0)},y=e=>{i.set(e),v(``)},b=n=>{if(n.kind===`group`)return y(n.group.id);if(n.kind===`item`){!n.item.run()&&!t.active.value&&e.onClose();return}if(n.match.blocked)return o.set(n.match.blocked);let r=t.open(n.match.command.id,n.tail,n.match.preset?.id);r.kind===`blocked`?o.set(r.reason):r.kind===`ran`&&e.onClose()},ee=()=>{let e=t.groupPath(i.value);return e.length?(y(e[e.length-2]?.id),!0):!1},te=M([n.asReadonly,i.asReadonly]).pipe(k(([e,n])=>{let r=d(e);return r?r.placeholder??r.title:n===void 0?`Search commands, or type ? for help`:`Search in ${t.groupPath(n).pop()?.title}`})),x=s(`input`,{class:V.input,type:`text`,role:`combobox`,"aria-expanded":`true`,"aria-controls":`msp-command-menu-list`,"aria-label":`Command`,placeholder:te,spellcheck:!1,value:n,onInput:e=>{n.set(e.currentTarget.value),a.set(0),o.set(void 0)},onKeyDown:t=>{let n=m().length,r=!t.currentTarget.value;if(t.key===`ArrowDown`||t.key===`ArrowUp`)t.preventDefault(),n&&a.set((a.value+(t.key===`ArrowDown`?1:n-1))%n);else if(t.key===`Enter`){t.preventDefault();let e=m()[a.value];t.metaKey||t.ctrlKey?h():e?b(e):h()}else if(t.key===`ArrowRight`&&r){let e=m()[a.value];e?.kind===`group`&&(t.preventDefault(),y(e.group.id))}else(t.key===`Backspace`||t.key===`ArrowLeft`)&&r?ee()&&t.preventDefault():t.key===`Escape`&&(t.preventDefault(),t.stopPropagation(),e.onClose())}});return queueMicrotask(()=>x.focus()),l(c,{children:[l(`div`,{class:V.head,children:[s(I,{name:`search`,size:15,class:V.headIcon}),s(E,{each:i.asReadonly.pipe(k(e=>t.groupPath(e))),children:e=>l(`button`,{type:`button`,class:V.crumb,onClick:()=>y(e.id),children:[e.title,s(I,{name:`chevron-right`,size:12})]})}),x]}),s(D,{when:o,children:e=>s(`p`,{class:V.message,children:e})}),s(L,{class:V.list,contentClass:V.listContent,id:`msp-command-menu-list`,role:`listbox`,"aria-label":`Commands`,children:s(E,{each:f,fallback:()=>s(`p`,{class:V.empty,children:e.assistant?`No command matches: ask AI assistant.`:`Nothing matches.`}),children:e=>{if(e.kind===`caption`)return s(`div`,{class:V.caption,children:e.label});let r=e.index,o=_.is(r),c=()=>a.set(r);return e.kind===`group`?s(Vt,{manager:t,group:e.group,selected:o,onPick:()=>b(e),onHover:c}):e.kind===`item`?s(Ht,{item:e.item,selected:o,onPick:()=>b(e),onHover:c}):s(Ut,{row:e,path:zt(t,e.match.command.group,i.value),inGroup:i.value!==void 0,query:n.asReadonly,selected:o,onPick:()=>b(e),onHover:c})}})}),e.assistant?s(Rt,{ready:e.assistant.ready(),text:n.asReadonly.pipe(k(e=>d(e)?``:e.trim())),unmatched:g,onAsk:()=>{e.assistant?.ready()?n.value.trim()?h():x.focus():(e.assistant?.setup(),e.onClose())}}):null,s(qt,{hints:[[`↑↓`,`move`],[`↵`,`run`],...e.assistant?.ready()?[[z()?`⌘↵`:`Ctrl+↵`,`ask`]]:[],[`→`,`open group`],[`?`,`help`],[`esc`,`close`]]})]})}function Rt(e){return e.ready?l(`button`,{type:`button`,class:V.ask,"data-default":e.unmatched.pipe(k(e=>e?``:void 0)),onClick:()=>e.onAsk(),children:[s(I,{name:`sparkles`,size:15,class:V.askIcon}),s(`span`,{class:V.askLabel,children:`Ask AI assistant`}),s(`span`,{class:V.askText,children:e.text.pipe(k(e=>e?`“${e}”`:`describe what you want, in your words`))}),s(`kbd`,{class:V.askKeys,children:e.unmatched.pipe(k(e=>e?`↵`:z()?`⌘↵`:`Ctrl+↵`))})]}):l(`button`,{type:`button`,class:V.ask,"data-setup":``,onClick:()=>e.onAsk(),children:[s(I,{name:`sparkles`,size:15,class:V.askIcon}),s(`span`,{class:V.askText,children:`Set up an AI assistant`})]})}function zt(e,t,n){let r=e.groupPath(t),i=n===void 0?-1:r.findIndex(e=>e.id===n);return r.slice(i+1).map(e=>e.title)}function Bt(e,t){return{char:`?`,title:`Help`,placeholder:`Prefixes and shortcuts`,items:n=>{let r=n.toLowerCase(),i=(e.prefixes??[]).map(e=>({id:`prefix:${e.char}`,label:`${e.char}  ${e.title}`,detail:e.placeholder,icon:`command`,run:()=>(t(e.char),!0)})),a=e.manager.commands.value.filter(e=>e.shortcut).map(t=>({id:`keys:${t.id}`,label:t.title,detail:Xe(t.shortcut),icon:t.icon??`keyboard`,run:()=>{e.manager.open(t.id)}}));return[...e.manager.get(`help.show`)?[{id:`help:card`,label:`Keyboard and mouse`,detail:`The Help card`,icon:`circle-help`,run:()=>{e.manager.open(`help.show`)}}]:[],...i,...a].filter(e=>!r||e.label.toLowerCase().includes(r))}}}function Vt(e){let t=e.manager.groupPath(e.group.parent).map(e=>e.title),n=l(`div`,{class:V.row,role:`option`,"aria-selected":e.selected,onClick:()=>e.onPick(),onPointerMove:()=>e.onHover(),children:[s(`span`,{class:V.rowIcon,children:s(I,{name:e.group.icon??`list-tree`,size:15})}),s(`span`,{class:V.rowTitle,children:e.group.title}),s(`span`,{class:V.rowMeta,children:t.join(` › `)}),s(I,{name:`chevron-right`,size:14,class:V.rowChevron})]});return r(e.selected,e=>e&&queueMicrotask(()=>n.scrollIntoView?.({block:`nearest`}))),n}function Ht(e){let{item:t}=e,n=l(`div`,{class:V.row,role:`option`,"aria-selected":e.selected,onClick:()=>e.onPick(),onPointerMove:()=>e.onHover(),children:[s(`span`,{class:V.rowIcon,children:t.icon?s(I,{name:t.icon,size:15}):null}),s(`span`,{class:V.rowTitle,children:t.label}),s(`span`,{class:V.rowMeta,children:t.detail})]});return r(e.selected,e=>e&&queueMicrotask(()=>n.scrollIntoView?.({block:`nearest`}))),n}function Ut(e){let{match:t,tail:n}=e.row,i=t.command,a=t.preset?`${i.title.replace(/…$/,``)} ${t.preset.title}`:i.title,o=l(`div`,{class:V.row,role:`option`,"aria-selected":e.selected,"aria-disabled":t.blocked?`true`:void 0,onClick:()=>e.onPick(),onPointerMove:()=>e.onHover(),children:[s(`span`,{class:V.rowIcon,children:i.icon?s(I,{name:i.icon,size:15}):null}),l(`span`,{class:V.rowTitle,children:[e.query.pipe(k(e=>Wt(a,n?``:e))),n?s(`span`,{class:V.tail,children:n}):null]}),s(`span`,{class:V.rowMeta,children:t.blocked??(e.path.length?e.path.join(` › `):e.inGroup?``:i.category)}),i.shortcut?s(`kbd`,{class:V.keys,children:Xe(i.shortcut)}):null]});return r(e.selected,e=>{e&&queueMicrotask(()=>o.scrollIntoView?.({block:`nearest`}))}),o}function Wt(e,t){let n=new Set(Mt(e,t));if(!n.size)return e;let r=[],i=``,a=!1,o=()=>{i&&=(r.push(a?s(`mark`,{children:i}):i),``)};for(let t=0;t<e.length;t++){let r=n.has(t);r!==a&&(o(),a=r),i+=e[t]}return o(),s(c,{children:r})}function Gt(e){let{manager:t,invocation:n}=e,r=n.state,i=n.command,a=r.pipe(k(e=>e.fields.find(t=>t.id===e.field)),w()),o=s(`input`,{class:V.input,type:`text`,role:`combobox`,"aria-expanded":`true`,"aria-controls":`msp-command-menu-completions`,"aria-label":a.pipe(k(e=>e?.label??i.title)),placeholder:a.pipe(k(e=>e?e.label:`Enter to run`)),spellcheck:!1,value:r.pipe(k(e=>e.text)),onInput:e=>n.type(e.currentTarget.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),n.enter()):e.key===`Tab`?(e.preventDefault(),n.tab(e.shiftKey?-1:1)):e.key===`ArrowDown`||e.key===`ArrowUp`?(e.preventDefault(),n.move(e.key===`ArrowDown`?1:-1)):e.key===`Backspace`&&!e.currentTarget.value?(e.preventDefault(),n.back()||t.close()):e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),t.close())}});return queueMicrotask(()=>o.focus()),l(c,{children:[s(D,{when:e.proposed,children:e=>l(`p`,{class:V.proposed,children:[s(I,{name:`sparkles`,size:13,class:V.askIcon}),`Proposed by the assistant from “`,e,`”: check it, then Enter to run`]})}),l(`div`,{class:V.head,children:[l(`span`,{class:V.command,children:[i.icon?s(I,{name:i.icon,size:15}):null,i.title.replace(/…$/,``)]}),o]}),l(`div`,{class:V.sentence,"aria-label":`Arguments`,children:[s(E,{each:r.pipe(k(e=>e.fields)),children:e=>s(Kt,{field:e,state:r,onFocus:()=>{n.focus(e.id),o.focus()}})},e=>e.id),s(`span`,{class:V.spacer}),l(`button`,{type:`button`,class:V.run,onClick:()=>void n.enter(),children:[r.pipe(k(e=>e.action)),s(`kbd`,{children:`↵`})]})]}),s(D,{when:r.pipe(k(e=>e.error)),children:e=>l(`p`,{class:V.error,role:`alert`,children:[e.message,e.hint?l(`span`,{class:V.hint,children:[` `,e.hint]}):null]})}),s(L,{class:V.list,contentClass:V.listContent,id:`msp-command-menu-completions`,role:`listbox`,"aria-label":`Options`,children:s(E,{each:r.pipe(k(e=>e.completions)),children:(e,t)=>l(`div`,{class:V.row,role:`option`,"aria-selected":M([r,t]).pipe(k(([e,t])=>e.pick===t)),onClick:()=>n.accept(t.value),onPointerMove:()=>n.point(t.value),children:[s(`span`,{class:V.rowIcon}),s(`span`,{class:V.rowTitle,children:e.label}),s(`span`,{class:V.rowMeta,children:e.detail??(e.value===e.label?``:e.value)})]})})}),s(D,{when:r.pipe(k(e=>e.formOnly.length>0)),children:()=>s(`p`,{class:V.more,children:r.pipe(k(e=>`+ ${e.formOnly.length} more option${e.formOnly.length>1?`s`:``} at their defaults`))})}),s(qt,{hints:[[`tab`,`next field`],[`↵`,`run`],[`⌫`,`back`],[`esc`,`commands`]]})]})}function Kt(e){let{field:t}=e,n=e.state.pipe(k(e=>{let n=e.values[t.id];if(n!==void 0&&n!==``)return t.options?.find(e=>e.value===String(n))?.label??String(n)}));return l(`span`,{class:V.token,children:[t.before?s(`span`,{class:V.before,children:t.before}):null,s(`button`,{type:`button`,class:V.value,"data-active":e.state.pipe(k(e=>e.field===t.id?``:void 0)),"data-missing":e.state.pipe(k(e=>e.missing.includes(t.id)?``:void 0)),"data-empty":n.pipe(k(e=>e===void 0?``:void 0)),onClick:()=>e.onFocus(),children:n.pipe(k(e=>e??t.label))})]})}function qt(e){return s(`div`,{class:V.footer,children:e.hints.map(([e,t])=>l(`span`,{children:[s(`kbd`,{children:e}),` `,t]}))})}function Jt(){return(Jt=e((()=>{j(),C(),A(),ae(),B(),F(),xe(),T(),o(),Ce(),N(),Pt(),d()})))()}var H;function Yt(){return(Yt=e((()=>{p(),H={cancel:`msp-shell-mode-chooser-cancel`,card:`msp-shell-mode-chooser-card`,description:`msp-shell-mode-chooser-description`,heading:`msp-shell-mode-chooser-heading`,icon:`msp-shell-mode-chooser-icon`,note:`msp-shell-mode-chooser-note`,option:`msp-shell-mode-chooser-option`,options:`msp-shell-mode-chooser-options`,rows:`msp-shell-mode-chooser-rows`,splash:`msp-shell-mode-chooser-splash`,title:`msp-shell-mode-chooser-title`,welcome:`msp-shell-mode-chooser-welcome`},m(`views/shell/mode-chooser.module.css`,`@layer msp.components {
.msp-shell-mode-chooser-splash {
  place-content: center;
  justify-items: center;
  gap: var(--msp-space-6);
  height: 100%;
  padding: var(--msp-space-5);
  background: var(--msp-color-bg);
  color: var(--msp-color-text);
  display: grid;

  & .msp-shell-mode-chooser-card {
    background: var(--msp-color-panel);
    backdrop-filter: none;
  }
}

.msp-shell-mode-chooser-welcome {
  z-index: var(--msp-z-overlay);
  padding: var(--msp-space-5);
  background: var(--msp-color-scrim);
  pointer-events: auto;
  place-items: center;
  display: grid;
  position: absolute;
  inset: 0;
}

.msp-shell-mode-chooser-cancel {
  height: var(--msp-control-height);
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text);
  justify-self: end;

  &:hover {
    background: var(--msp-color-hover);
  }
}

.msp-shell-mode-chooser-card {
  gap: var(--msp-space-4);
  width: min(560px, 100%);
  padding: var(--msp-space-5);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-glass-panel-bg);
  backdrop-filter: blur(16px);
  box-shadow: 0 0 0 1px var(--msp-glass-edge),
    var(--msp-shadow-overlay);
  color: var(--msp-color-text);
  display: grid;
}

.msp-shell-mode-chooser-heading {
  font-size: var(--msp-font-size-lg);
  margin: 0;
  font-weight: 600;
}

.msp-shell-mode-chooser-note {
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  margin: 0;
}

.msp-shell-mode-chooser-options {
  gap: var(--msp-space-3);
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  display: grid;
}

.msp-shell-mode-chooser-option {
  align-items: center;
  column-gap: var(--msp-space-3);
  row-gap: var(--msp-space-1);
  padding: var(--msp-space-4);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  text-align: left;
  transition: background-color var(--msp-motion-fast) var(--msp-ease);
  grid-template-columns: auto minmax(0, 1fr);
  display: grid;

  &:hover {
    background: var(--msp-color-hover);
  }

  &[aria-checked="true"] {
    color: var(--msp-color-accent);
  }
}

.msp-shell-mode-chooser-icon {
  grid-row: span 2;
}

.msp-shell-mode-chooser-title {
  font-weight: 600;
  font-size: var(--msp-font-size-md);
}

.msp-shell-mode-chooser-description {
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  grid-column: 2;
}

.msp-shell-mode-chooser-rows .msp-shell-mode-chooser-options {
  gap: var(--msp-space-1);
  grid-template-columns: minmax(0, 1fr);
}

.msp-shell-mode-chooser-rows .msp-shell-mode-chooser-option {
  padding: var(--msp-space-2) var(--msp-inset);
  background: none;

  &:hover {
    background: var(--msp-color-hover);
  }
}

.msp-shell-mode-chooser-rows .msp-shell-mode-chooser-title {
  font-size: var(--msp-font-size-sm);
}

.msp-shell-mode-chooser-rows .msp-shell-mode-chooser-description {
  font-size: var(--msp-font-size-xs);
}
}
`)})))()}function Xt(e){let t=s(`div`,{class:H.options,role:`radiogroup`,"aria-label":`Mode`,children:s(E,{each:e.modes,children:t=>l(`button`,{type:`button`,role:`radio`,class:H.option,"aria-checked":e.active?.pipe(k(e=>e===t.id))??!1,onClick:()=>e.onChoose(t.id),children:[s(I,{name:t.icon,size:e.variant===`rows`?16:24,class:H.icon}),s(`span`,{class:H.title,children:t.title}),t.description?s(`span`,{class:H.description,children:t.description}):null]})})});if(e.variant===`rows`)return s(`div`,{class:H.rows,children:t});let n=e.variant===`splash`;return l(`div`,{class:n?H.splash:H.welcome,children:[n?s(Te,{scale:3,flash:`reveal`}):null,l(`div`,{class:H.card,role:`dialog`,"aria-label":n?`Choose how to start`:`Switch mode`,children:[s(`h2`,{class:H.heading,children:n?`How do you want to start?`:`Switch mode`}),t,s(`p`,{class:H.note,children:e.notice??`You can switch later, from the command menu or from Home.`}),e.onCancel?s(`button`,{type:`button`,class:H.cancel,onClick:()=>e.onCancel?.(),children:`Cancel`}):null]})]})}function Zt(){return(Zt=e((()=>{A(),F(),we(),T(),Yt(),d()})))()}function Qt(e,t){let n=[];for(let r of Object.keys(e)){let i=e[r];if(i.isHidden)continue;let a=$t(r,i);if(!a)continue;let o=t?.[r];o?.before&&(a.before=o.before),o?.format&&(a.format=o.format),n.push(a)}return n}function $t(e,t){let n={id:e,label:t.label||Ee(e),required:!t.isOptional};switch(t.type){case`text`:return{...n,kind:`text`};case`boolean`:return{...n,kind:`boolean`,options:sn};case`select`:return t.options.every(e=>typeof e[0]==`string`)?{...n,kind:`select`,options:t.options.map(([e,t])=>({value:e,label:t}))}:void 0;case`number`:{let e=t.min!==void 0&&t.max!==void 0;return{...n,kind:e?`slider`:`number`,...t.min===void 0?{}:{min:t.min},...t.max===void 0?{}:{max:t.max},...t.step===void 0?{}:{step:t.step}}}default:return}}function en(e,t){let n=new Set(t.map(e=>e.id));return Object.keys(e).filter(e=>!n.has(e))}function tn(e){return e.kind===`text`||e.kind===`select`||e.kind===`boolean`}function nn(e,t){if(t!==void 0)switch(e.kind){case`text`:return typeof t==`string`&&(!e.required||t.length>0)?t:void 0;case`select`:return typeof t==`string`&&e.options?.some(e=>e.value===t)?t:void 0;case`boolean`:return typeof t==`boolean`?t:t===`true`||t!==`false`&&void 0;case`number`:case`slider`:return typeof t!=`number`||!Number.isFinite(t)||e.min!==void 0&&t<e.min||e.max!==void 0&&t>e.max?void 0:t}}function rn(e,t){return nn(e,t)!==void 0}function an(e,t){let n={};for(let[r,i]of Object.entries(t)){let t=e.find(e=>e.id===r),a=t?nn(t,i):void 0;a!==void 0&&(n[r]=a)}return n}function on(e,t){let n={...R.getDefaultValues(e)};for(let[e,r]of Object.entries(t))r!==void 0&&(n[e]=r);for(let r of Object.keys(e))t[r]===void 0&&e[r].isOptional&&delete n[r];return n}var sn;function cn(){return(cn=e((()=>{Oe(),De(),sn=[{value:`true`,label:`on`},{value:`false`,label:`off`}]})))()}function ln(e){let{fields:t,initial:n,formats:r,ctx:i}=e,a=new Set(e.defaulted),o={},s=e=>(n[e.id]===void 0||a.has(e.id))&&o[e.id]===void 0,c=(e,t,n)=>{let a=t.toLowerCase(),o=e.options?.find(e=>e.value.toLowerCase()===a||e.label.toLowerCase()===a);if(o||!n||!e.format)return o?.value;let s=r.get(e.format),c=(s?.complete(t,i)??[]).find(e=>e.value.toLowerCase()===a||e.label.toLowerCase()===a);if(c)return c.value;let l=s?.check(t,i),u=l?.ok?s?.complete(``,i)??[]:[];return l?.ok&&u.some(e=>e.value===l.value)?l.value:void 0},l=(e,t)=>{let n=t.toLowerCase(),a=e.options?.find(e=>e.value.toLowerCase()===n||e.label.toLowerCase()===n);if(a)return a.value;if(e.options)return;let o=e.format?r.get(e.format)?.check(t,i):void 0;return o?.ok?String(o.value):e.format?void 0:t},u=(e,n)=>{let r={},i=[],a=[];for(let o=0;o<e.length;){let l=0;for(let i=Math.min(4,e.length-o);i>=1&&!l;i--){let a=e.slice(o,o+i).join(` `);for(let e of t){if(!s(e)||r[e.id]!==void 0||!tn(e))continue;let t=c(e,a,n);if(t!==void 0&&rn(e,t)){r[e.id]=t,l=i;break}}}l?o+=l:(a.push(o),i.push(e[o++]))}return{taken:r,left:i,at:a}},d=new Map;for(let e of t)e.before&&!/\s/.test(e.before)&&tn(e)&&d.set(e.before.toLowerCase(),e);let f=e.tail.split(/\s+/).filter(Boolean),p=[];for(let e=0;e<f.length;){let t=d.get(f[e].toLowerCase()),n=e+1;for(;n<f.length&&!d.has(f[n].toLowerCase());)n++;let r=f.slice(e+1,n).join(` `),i=t&&s(t)&&r?l(t,r):void 0;t&&i!==void 0&&rn(t,i)?(o[t.id]=i,a.delete(t.id),e=n):p.push(f[e++])}let m=u(p,!0),h=m.at.every((e,t)=>t===0||e===m.at[t-1]+1),g=m.left.join(` `),_=!1;if(m.left.length&&h)for(let e of t){if(!e.format||m.taken[e.id]!==void 0||!s(e))continue;let t=r.get(e.format)?.check(g,i);if(t?.ok&&rn(e,t.value)){m.taken[e.id]=t.value,_=!0;break}}let{taken:v,left:y}=!m.left.length||_?{...m,left:[]}:u(p,!1);Object.assign(o,v);for(let e of t)o[e.id]!==void 0&&(o[e.id]=nn(e,o[e.id]));return{values:o,rest:y}}function un(){return(un=e((()=>{cn()})))()}function dn(e,t,n){let r=n.trim().toLowerCase();if(!r)return t;let i=e.find(e=>e.value.toLowerCase()===r||e.label.toLowerCase()===r);return i?[i,...t.filter(e=>e.value!==i.value)]:t}function fn(e,t,n){let r=e.params?.(t,n);if(!r)throw Error(`Command "${e.id}" has no params.`);let i=Qt(r,e.fields);return{params:r,fields:i,key:JSON.stringify([i,en(r,i)])}}function pn(e){return e.kind===`number`||e.kind===`slider`}var mn;function hn(){return(hn=e((()=>{cn(),N(),un(),mn=class{#e;#t;#n={};#r;#i=[];#a=new AbortController;#o;#s;#c=[];constructor(e){let{command:t,context:n}=e,r={...t.defaults?.(n.value),...e.preset},i=fn(t,n.value,r);this.command=t,this.#e=e;let a=an(i.fields,r),o=ln({fields:i.fields,tail:e.tail??``,initial:a,defaulted:new Set(Object.keys(a)),formats:e.formats,ctx:n.value});if(Object.assign(a,o.values),t.reshapes?.some(e=>o.values[e]!==void 0)){i=fn(t,n.value,a);let e=an(i.fields,a);for(let t of Object.keys(a))t in e||delete a[t]}let s=o.rest;this.#t=i,this.#n=a;let c=this.values(),l=i.fields,u=this.#v(),d=this.#_(c),f=d??l[l.length-1]?.id;if(this.#r=P({status:`editing`,fields:l,formOnly:en(i.params,l),action:t.action??`Run`,values:c,...d?{field:d}:l.length?{field:l[l.length-1].id}:{},text:``,completions:this.#f(f,c),pick:-1,proposed:[],missing:this.#g(c),canAssist:!1,...u?{blocked:u}:{}}),s.length){this.type(s.join(` `));let e=this.#r.asReadonly.value,t=l.find(t=>t.id===e.field);t?.format&&this.#d(t)?.check(e.text,n.value).ok&&this.accept()}this.#i.push(n.subscribe(()=>{let e=this.#v();e===this.#r.asReadonly.value.blocked?this.#C():this.#S({blocked:e})})),this.#C()}get params(){return this.#t.params}get state(){return this.#r.asReadonly}values(){return{...this.#n}}args(){return on(this.#t.params,this.#n)}focus(e){this.#u(e)&&this.#y()&&this.#S({field:e,text:``,completions:this.#f(e,this.values()),pick:-1,canAssist:!1,error:void 0})}type(e){let t=this.#r.asReadonly.value,n=this.#u(t.field);if(!n||!this.#y())return;let r=this.#p(n,e),i=this.#m(n,e);this.#S({text:e,completions:r,pick:e.trim()&&r.length?0:-1,canAssist:!!e.trim()&&!r.length&&!i&&this.#h(),error:void 0,escalated:void 0,proposed:t.proposed.filter(e=>e!==n.id)})}move(e){let t=this.#r.asReadonly.value,n=this.#u(t.field);if(!t.completions.length&&n&&t.status===`editing`){let r=this.#p(n,t.text);r.length&&this.#S({completions:r,pick:e>0?0:r.length-1});return}let r=t.completions.length;if(!r)return;let i=t.pick<0?e>0?0:r-1:((t.pick+e)%r+r)%r;this.#S({pick:i})}point(e){let t=this.#r.asReadonly.value;e>=-1&&e<t.completions.length&&e!==t.pick&&this.#S({pick:e})}accept(e){let t=this.#r.asReadonly.value,n=this.#u(t.field);if(!n||!this.#y())return!1;let r=t.completions[e??t.pick];if(r?.fill)return this.type(r.value),!1;if(r)return this.set(n.id,pn(n)?Number(r.value):r.value);let i=t.text.trim();if(!i)return!1;if(pn(n)){let e=Number(i.replace(/\s*%$/,``)),t=/%$/.test(i)?e/100:e;return Number.isFinite(t)?this.set(n.id,t):this.#b(n.id,`"${i}" is not a number.`)}if(n.options){let e=n.options.find(e=>e.value.toLowerCase()===i.toLowerCase()||e.label.toLowerCase()===i.toLowerCase());return e?this.set(n.id,e.value):this.#b(n.id,`"${i}" is not one of the choices.`,`Choose: ${n.options.map(e=>e.label).join(`, `)}.`)}let a=this.#d(n);if(a){let e=a.check(i,this.#e.context.value);return e.ok?this.set(n.id,e.value):(this.#S({error:{field:n.id,message:e.message,...e.hint?{hint:e.hint}:{}},canAssist:!!e.unreadable&&this.#h()}),!1)}return this.set(n.id,i)}set(e,t,n={}){let r=this.#u(e);if(!r||!this.#y())return!1;let i=nn(r,t);if(i===void 0)return this.#b(e,`Not a valid ${r.label}.`);this.#n={...this.#n,[e]:i};let a=this.#r.asReadonly.value,o=this.values(),s=n.stay||a.field!==e?a.field:this.#_(o,e)??e;return this.#S({values:o,field:s,text:a.field===e?``:a.text,completions:a.field===e?this.#f(s,o):a.completions,pick:a.field===e?-1:a.pick,canAssist:!1,error:void 0,proposed:n.proposed?[...new Set([...a.proposed,e])]:a.proposed.filter(t=>t!==e)}),this.#l(e),!0}clear(e){if(!this.#u(e)||!this.#y())return;let{[e]:t,...n}=this.#n;this.#n=n;let r=this.#r.asReadonly.value,i=this.values();this.#S({values:i,proposed:r.proposed.filter(t=>t!==e),...r.field===e&&!r.text?{completions:this.#f(e,i),pick:-1}:{}}),this.#l(e,!0)}step(e){if(!this.#y())return;let t=this.#r.asReadonly.value,n=t.fields.findIndex(e=>e.id===t.field),r=t.fields[(n+e+t.fields.length)%t.fields.length];r&&this.focus(r.id)}back(){let e=this.#r.asReadonly.value;if(!this.#y()||e.text)return!0;if(e.field&&e.values[e.field]!==void 0)return this.clear(e.field),!0;let t=e.fields.findIndex(t=>t.id===e.field);return t>0&&(this.focus(e.fields[t-1].id),!0)}async enter(){let e=this.#r.asReadonly.value;if(e.status===`editing`){if(e.text.trim()||e.pick>=0){if(!this.accept())return;let e=this.values();if(!this.#t.fields.every(t=>e[t.id]!==void 0))return}return this.confirm()}}async tab(e=1){let t=this.#r.asReadonly.value;if(t.canAssist)return this.assist();t.text.trim()&&t.completions.length||t.pick>=0?this.accept():this.step(e)}async confirm(){let e=this.#r.asReadonly.value;if(e.status!==`editing`)return;if(e.blocked){this.#S({error:{message:e.blocked}});return}if(e.missing.length){this.#S({field:e.missing[0],text:``,completions:this.#f(e.missing[0],e.values),pick:-1});return}this.#S({status:`running`,error:void 0});let t=new AbortController;this.#o=t;let n=this.#e.context.value,r=this.#x(n);if(r){this.#o=void 0,this.#S({status:`editing`,error:r});return}let i,a,o=!1;try{this.#e.onRun?.(),i=await this.command.run(this.args(),n,t.signal)??{}}catch(e){o=!0,a=e}if(this.#o=void 0,this.#r.asReadonly.value.status===`closed`)return;if(!o){let e=i;return this.#S({status:`done`,result:e}),this.#e.preview?.clear(),this.#s=void 0,this.#e.onSettled?.({kind:`done`,command:this.command,result:e}),e}if(t.signal.aborted){this.#e.onSettled?.({kind:`cancelled`,command:this.command});return}let s=a instanceof Error?a.message:String(a);this.#S({status:`editing`,error:{message:s}}),this.#e.onSettled?.({kind:`failed`,command:this.command,message:s,open:!0})}cancel(){return this.#r.asReadonly.value.status!==`running`||!this.#o?!1:(this.#o.abort(),this.#S({status:`cancelling`}),!0)}async assist(){let e=this.#r.asReadonly.value,t=this.#e.assistant;if(!t||!this.command.assist||e.status!==`editing`)return;this.#S({status:`resolving`,canAssist:!1,error:void 0,note:void 0,escalated:void 0});let n=this.#a.signal;try{let r=await t.propose({command:this.command,params:this.params,values:this.values(),text:e.text,...e.field?{field:e.field}:{},ctx:this.#e.context.value},n);if(n.aborted||this.#r.asReadonly.value.status===`closed`)return;if(r.kind===`answer`){let e={detail:r.text};this.#S({status:`done`,result:e}),this.#e.onSettled?.({kind:`done`,command:this.command,result:e});return}if(r.kind===`escalate`){this.#S({status:`editing`,escalated:e.text,error:{message:r.reason}});return}this.#S({status:`editing`,text:``,completions:[],pick:-1});let i=[];for(let[e,t]of Object.entries(r.values)){if(t===void 0)continue;let n=this.#u(e),r=n?.format&&typeof t==`string`?this.#d(n)?.check(t,this.#e.context.value):void 0;r&&!r.ok?i.push(`${e}: ${r.message}`):this.set(e,r?.ok?r.value:t,{proposed:!0})||i.push(e)}let a=this.values();this.#S({...r.note?{note:r.note}:{},field:this.#_(a)??this.#r.asReadonly.value.field,...i.length?{error:{message:`The proposal did not fit: ${i.join(`; `)}.`}}:{}})}catch(e){if(n.aborted)return;this.#S({status:`editing`,error:{message:e instanceof Error?e.message:String(e)}})}}close(){if(this.#r.asReadonly.value.status!==`closed`){this.#a.abort(),this.#o?.abort(),this.#S({status:`closed`}),this.#s!==void 0&&this.#e.preview?.clear(),this.#s=void 0;for(let e of this.#i)e.unsubscribe()}}#l(e,t=!1){if(!this.command.reshapes?.includes(e))return;let n;try{n=fn(this.command,this.#e.context.value,this.values())}catch(t){this.#b(e,t instanceof Error?t.message:String(t));return}if(n.key===this.#t.key)return;this.#t=n,this.#n=an(n.fields,this.#n);let r=this.values(),i=t?e:this.#_(r,e)??e,a=n.fields.find(e=>e.id===i);this.#S({fields:n.fields,formOnly:en(n.params,n.fields),values:r,field:i,text:``,completions:a&&r[a.id]===void 0?this.#p(a,``):[],pick:-1})}#u(e){return e===void 0?void 0:this.#t.fields.find(t=>t.id===e)}#d(e){return e.format?this.#e.formats.get(e.format):void 0}#f(e,t){let n=this.#u(e);return n&&t[n.id]===void 0?this.#p(n,``):[]}#p(e,t){if(e.options){let n=e.options.map(e=>({value:e.value,label:e.label}));return dn(n,jt(n,t,e=>e.label),t)}let n=this.#d(e);if(!n)return[];let r=this.#e.context.value,i=n.complete(t,r),a=dn(i,i,t),o=t.trim()?n.check(t,r):void 0;return o?.ok&&!a.some(e=>e.value===o.value)?[{value:o.value,label:o.value,detail:`as typed`},...a]:a}#m(e,t){if(!t.trim())return!0;if(pn(e))return Number.isFinite(Number(t.replace(/\s*%$/,``)));if(e.options)return!1;let n=this.#d(e);if(!n)return!0;let r=n.check(t,this.#e.context.value);return r.ok||!r.unreadable}#h(){return!!this.command.assist&&!!this.#e.assistant}#g(e){return this.#t.fields.filter(t=>t.required&&e[t.id]===void 0).map(e=>e.id)}#_(e,t){let n=this.#t.fields,r=t?n.findIndex(e=>e.id===t):-1,i=[...n.slice(r+1),...n.slice(0,r+1)];return i.find(t=>t.required&&e[t.id]===void 0)?.id??i.find(n=>e[n.id]===void 0&&n.id!==t)?.id}#v(){try{let e=this.command.when?.(this.#e.context.value);return typeof e==`string`?e:void 0}catch(e){return e instanceof Error?e.message:String(e)}}#y(){return this.#r.asReadonly.value.status===`editing`}#b(e,t,n){return this.#S({error:{field:e,message:t,...n?{hint:n}:{}}}),!1}#x(e){let t=this.command.when?.(e);if(typeof t==`string`)return{message:t};for(let t of this.#t.fields){let n=this.#n[t.id],r=this.#d(t);if(r&&typeof n==`string`){let t=r.check(n,e);if(!t.ok)return{message:t.message,...t.hint?{hint:t.hint}:{}}}if(n!==void 0&&!rn(t,n))return{field:t.id,message:`Not a valid ${t.label}.`}}let n=this.command.check?.(this.args(),e);return n?{message:n}:void 0}#S(e){let t=this.#r.asReadonly.value;if(t.status===`closed`&&e.status!==`closed`)return;let n={...t,...e};for(let t of Object.keys(e))e[t]===void 0&&delete n[t];`values`in e&&(n.missing=this.#g(n.values)),this.#r.set(n),this.#C()}#C(){let e=this.#e.preview,t=this.#r?.asReadonly.value;if(!e||!this.command.preview||!t||t.status===`closed`||t.status===`done`||t.status===`running`||t.status===`cancelling`)return;let n={...t.values},r=t.completions[t.pick],i=this.#u(t.field);r&&i&&(n[i.id]=nn(i,pn(i)?Number(r.value):r.value));let a=this.#t.fields.every(e=>!e.required||n[e.id]!==void 0)&&!t.blocked?JSON.stringify(n):void 0,o=this.#e.context.value,s=this.#e.previewDeps?.(o)??[o];if(a===this.#s&&s.length===this.#c.length&&s.every((e,t)=>Object.is(e,this.#c[t])))return;let c=this.#s!==void 0;this.#s=a,this.#c=s,a===void 0?c&&e.clear():e.set(this.command.preview(on(this.#t.params,n),o))}}})))()}function gn(e){return e.alias===void 0?[]:typeof e.alias==`string`?[e.alias]:e.alias}function _n(e){if(!e||typeof e!=`object`)return!1;let t=e;if(t.isContentEditable)return!0;let n=typeof t.getAttribute==`function`?t.getAttribute(`contenteditable`):null;if(n!==null&&n!==`false`)return!0;let r=t.tagName?.toUpperCase();return r===`TEXTAREA`||r===`SELECT`||r===`INPUT`&&!Sn.has((t.type??`text`).toLowerCase())}function vn(e){return!!e.mod&&!e.alt}function yn(e,t,n){let r=n?!!t.metaKey:!!t.ctrlKey,i=n?!!t.ctrlKey:!!t.metaKey;if(!!e.mod!==r||i||!!e.alt!=!!t.altKey||!!e.shift!=!!t.shiftKey)return!1;let a=e.key.toLowerCase(),o=t.key.toLowerCase();if(o===a)return!0;if(/^[a-z0-9]$/.test(o)||!t.code)return!1;let s=/^(?:Key([A-Z])|Digit([0-9]))$/.exec(t.code);return!!s&&(s[1]??s[2]??``).toLowerCase()===a}var bn,xn,Sn;function Cn(){return(Cn=e((()=>{ee(),N(),hn(),bn=e=>e instanceof Error?e.message:String(e),xn=class{#e;#t=P([]);#n=P([]);#r=new Map;#i=P(void 0);#a=P(void 0);#o;#s;#c=new te;constructor(e){this.#e=e;let t=[];try{t=e.recents?.load()??[]}catch{t=[]}this.#s=P(t)}get context(){return this.#e.context}get commands(){return this.#t.asReadonly}get active(){return this.#i.asReadonly}get recents(){return this.#s.asReadonly}get running(){return this.#a.asReadonly}get outcomes(){return this.#c.asObservable()}register(e){let t={},n=new Set(e.map(e=>e.id));for(let n of e)this.#r.set(n,t);return this.#t.set([...this.#t.asReadonly.value.filter(e=>!n.has(e.id)),...e]),()=>{let n=n=>e.includes(n)&&this.#r.get(n)===t,r=this.#o;r&&n(r.command)&&(r.cancel(),this.#m(r));let i=this.#i.asReadonly.value;i&&n(i.command)&&(i.close(),this.#i.set(void 0));for(let n of e)this.#r.get(n)===t&&this.#r.delete(n);this.#t.set(this.#t.asReadonly.value.filter(t=>!e.includes(t)))}}get groups(){return this.#n.asReadonly}registerGroups(e){let t=new Set(e.map(e=>e.id));return this.#n.set([...this.#n.asReadonly.value.filter(e=>!t.has(e.id)),...e]),()=>this.#n.set(this.#n.asReadonly.value.filter(t=>!e.includes(t)))}groupPath(e){let t=this.#n.asReadonly.value,n=[],r=e===void 0?void 0:t.find(t=>t.id===e);for(;r&&!n.includes(r);)n.unshift(r),r=r.parent===void 0?void 0:t.find(e=>e.id===r.parent);return n}children(e){let t=new Set(this.#n.asReadonly.value.map(e=>e.id));return{groups:this.#n.asReadonly.value.filter(n=>(n.parent&&t.has(n.parent)?n.parent:void 0)===e).sort((e,t)=>(e.order??0)-(t.order??0)),commands:this.#t.asReadonly.value.filter(n=>(n.group&&t.has(n.group)?n.group:void 0)===e).map(e=>this.#l(e))}}inGroup(e,t){return this.groupPath(e.group).some(e=>e.id===t)}get(e){return this.#t.asReadonly.value.find(t=>t.id===e)}blocked(e){try{let t=e.when?.(this.#e.context.value);return typeof t==`string`?t:void 0}catch(e){return bn(e)}}#l(e){let t=this.blocked(e);return{command:e,...t?{blocked:t}:{}}}query(e){let t=this.#t.asReadonly.value,n=e.trim(),r=e.toLowerCase().trimStart().replace(/\s+/g,` `),i=r.trimEnd(),a=t.some(e=>e.title.toLowerCase().replace(/…$/,``).startsWith(i)||gn(e).some(e=>e.toLowerCase().startsWith(i)))?[]:t.flatMap(e=>e.params?gn(e).map(t=>({c:e,a:t.toLowerCase()})):[]).filter(({a:e})=>r.startsWith(`${e} `)&&r.trim().length>e.length).sort((e,t)=>t.a.length-e.a.length),o=a.filter(e=>e.a.length===a[0]?.a.length),s=o.find(e=>!this.blocked(e.c))??o[0];if(s){let r=e.trimStart().replace(/\s+/g,` `).slice(s.a.length+1).trim(),i=this.#l(s.c);return{recent:[],matches:[i,...i.blocked?this.#u(t,n).filter(e=>e.command!==s.c):[]],direct:{...i,tail:r}}}if(!n){let e=this.#s.asReadonly.value.map(e=>t.find(t=>t.id===e)).filter(e=>!!e).map(e=>this.#l(e)),n=new Set(e.map(e=>e.command.id));return{recent:e,matches:t.filter(e=>!n.has(e.id)).map(e=>this.#l(e))}}return{recent:[],matches:this.#u(t,n)}}#u(e,t){let n=(e,n=0)=>(At(e,t)??-1)-n,r=e.flatMap(e=>{let t=Math.max(n(e.title),...gn(e).map(e=>n(e,.5))),r=this.#d(e).flatMap(r=>{let i=Math.max(n(r.title),...(r.keywords??[]).map(e=>n(e,.5))),a=n(`${e.title} ${r.title}`);return i>=0||t<0&&a>=0?[{c:e,p:r,s:Math.max(i,a)}]:[]});return[...t>=0?[{c:e,p:void 0,s:t}]:[],...r]}),i=new Map;for(let t of e)i.has(t.category)||i.set(t.category,i.size);let a=e=>e.p?`${e.c.title} ${e.p.title}`:e.c.title;return r.sort((e,t)=>Math.floor(t.s)-Math.floor(e.s)||(i.get(e.c.category)??0)-(i.get(t.c.category)??0)||a(e).localeCompare(a(t))).map(e=>({...this.#l(e.c),...e.p?{preset:e.p}:{}}))}#d(e){try{return e.presets?.(this.#e.context.value)??[]}catch{return[]}}open(e,t,n){let r=this.get(e);if(!r)return{kind:`blocked`,reason:`No command "${e}".`};let i=n===void 0?void 0:this.#d(r).find(e=>e.id===n)?.values;if(n!==void 0&&!i)return{kind:`blocked`,reason:`${r.title} has no "${n}".`};if(this.#o)return{kind:`blocked`,reason:`${this.#o.command.title.replace(/…$/,``)} is still running.`};let a=this.blocked(r);if(a)return{kind:`blocked`,reason:a};if(this.close(),!r.params)return{kind:`ran`,result:this.#f(r)};let o;try{o=new mn({command:r,context:this.#e.context,formats:this.#e.formats,...this.#e.preview?{preview:this.#e.preview}:{},...this.#e.assistant?{assistant:this.#e.assistant}:{},...this.#e.previewDeps?{previewDeps:this.#e.previewDeps}:{},...t?{tail:t}:{},...i?{preset:i}:{},onRun:()=>this.#p({command:r,owner:this.#r.get(r),invocation:o,cancel:()=>o.cancel()}),onSettled:e=>this.#h(o,e)})}catch(e){return{kind:`blocked`,reason:bn(e)}}return this.#i.set(o),{kind:`form`,invocation:o}}close(){let e=this.#i.asReadonly.value;return!e||this.#o?.invocation!==e&&(e.close(),this.#i.set(void 0),!0)}cancel(){let e=this.#o;return e?(this.#a.asReadonly.value?.cancelling||this.#a.set({command:e.command,cancelling:!0}),e.cancel(),!0):!1}handleKey(e,t=!0){if(e.defaultPrevented||e.repeat||e.isComposing||e.key===`Process`)return!1;let n=_n(e.target),r=this.#t.asReadonly.value.filter(r=>r.shortcut&&(!n||vn(r.shortcut))&&yn(r.shortcut,e,t)),i=r.find(e=>!this.blocked(e))??r[0];if(!i)return!1;let a=this.open(i.id);return a.kind===`blocked`&&this.#c.next({kind:`blocked`,command:i,message:a.reason}),!0}async#f(e){let t=this.#e.context.value,n=new AbortController,r={command:e,owner:this.#r.get(e),cancel:()=>n.abort()};this.#p(r);try{let i=e.defaults?.(t)??{},a=e.check?.(i,t);if(a){this.#m(r),this.#g(r,{kind:`failed`,command:e,message:a});return}let o=await e.run(i,t,n.signal);return this.#m(r),this.#g(r,{kind:`done`,command:e,result:o}),o}catch(t){this.#m(r),this.#g(r,n.signal.aborted?{kind:`cancelled`,command:e}:{kind:`failed`,command:e,message:bn(t)});return}}#p(e){this.#o=e,this.#a.set({command:e.command,cancelling:!1})}#m(e){this.#o===e&&(this.#o=void 0,this.#a.set(void 0))}#h(e,t){let n=this.#o?.invocation===e?this.#o:void 0;n&&this.#m(n),t.kind!==`failed`&&this.#i.asReadonly.value===e&&(e.close(),this.#i.set(void 0)),this.#g(n??{command:t.command,owner:this.#r.get(t.command),cancel:()=>{}},t)}#g(e,t){t.kind===`done`&&this.#_(t.command),e.owner&&this.#r.get(e.command)===e.owner&&this.#c.next(t)}#_(e){let t=[e.id,...this.#s.asReadonly.value.filter(t=>t!==e.id)].slice(0,this.#e.maxRecents??5);this.#s.set(t);try{this.#e.recents?.save(t)}catch{}}},Sn=new Set([`button`,`checkbox`,`radio`,`range`,`color`,`file`,`image`,`reset`,`submit`])})))()}var U;function wn(){return(wn=e((()=>{p(),U={body:`msp-settings-settings-tab-body`,chevron:`msp-settings-settings-tab-chevron`,group:`msp-settings-settings-tab-group`,groups:`msp-settings-settings-tab-groups`,groupsContent:`msp-settings-settings-tab-groupsContent`,header:`msp-settings-settings-tab-header`,none:`msp-settings-settings-tab-none`,search:`msp-settings-settings-tab-search`,searchIcon:`msp-settings-settings-tab-searchIcon`,searchInput:`msp-settings-settings-tab-searchInput`,tab:`msp-settings-settings-tab-tab`,title:`msp-settings-settings-tab-title`,toggle:`msp-settings-settings-tab-toggle`},m(`views/settings/settings-tab.module.css`,`@layer msp.components {
.msp-settings-settings-tab-tab {
  height: 100%;
  min-height: 0;
  font-size: var(--msp-font-size-sm);
  flex-direction: column;
  flex: 1 1 0;
  display: flex;
}

.msp-settings-settings-tab-search {
  align-items: center;
  gap: var(--msp-space-2);
  padding: 0 var(--msp-panel-inset) var(--msp-panel-inset);
  flex: none;
  display: flex;
  position: relative;
}

.msp-settings-settings-tab-searchIcon {
  left: calc(var(--msp-space-2) + var(--msp-space-3));
  color: var(--msp-color-text-subtle);
  pointer-events: none;
  position: absolute;
}

.msp-settings-settings-tab-searchInput {
  min-width: 0;
  padding-left: calc(var(--msp-space-3) + var(--msp-icon-sm) + var(--msp-space-2));
  flex: 1;
}

.msp-settings-settings-tab-groups {
  flex: 1 1 0;
  min-height: 0;
}

.msp-settings-settings-tab-groupsContent {
  align-content: start;
  gap: var(--msp-space-1);
  padding: 0 var(--msp-panel-inset) var(--msp-panel-inset);
  display: grid;
}

.msp-settings-settings-tab-group {
  border-radius: var(--msp-radius-md);

  &:has(.msp-settings-settings-tab-toggle[aria-expanded="true"]) {
    background: var(--msp-color-well);
  }
}

.msp-settings-settings-tab-header {
  border-radius: var(--msp-radius-md);
  align-items: center;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }
}

.msp-settings-settings-tab-toggle {
  align-items: center;
  gap: var(--msp-space-3);
  min-width: 0;
  height: 32px;
  padding: 0 var(--msp-space-2);
  color: var(--msp-color-text-muted);
  text-align: left;
  flex: 1;
  display: flex;

  &:hover {
    color: var(--msp-color-text);
  }
}

.msp-settings-settings-tab-title {
  color: var(--msp-color-text);
  flex: 1;
  font-weight: 600;
}

.msp-settings-settings-tab-chevron {
  color: var(--msp-color-text-subtle);
  transition: transform var(--msp-motion-fast) var(--msp-ease);

  [aria-expanded="false"] > & {
    transform: rotate(-90deg);
  }
}

.msp-settings-settings-tab-body {
  --msp-label-width: 46%;
  padding: var(--msp-space-1) var(--msp-space-3) var(--msp-space-3);

  &[data-wide-labels] {
    --msp-label-width: calc(100% - 64px);
  }
}

.msp-settings-settings-tab-none {
  padding: var(--msp-space-4) var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  text-align: center;
  margin: 0;
}
}
`)})))()}function Tn(e){let{model:t}=e,n=P(``),r=n.asReadonly,i=r.pipe(k(e=>e.trim().length>0&&!t.groups.some(t=>ie(t.form.params,e))),w());return l(`div`,{class:U.tab,children:[l(`div`,{class:U.search,children:[s(I,{name:`search`,size:14,class:U.searchIcon}),s(Ae,{search:!0,size:`sm`,class:U.searchInput,"aria-label":`Search settings`,placeholder:`Search settings`,value:r,onInput:e=>n.set(e)})]}),l(L,{class:U.groups,contentClass:U.groupsContent,children:[t.groups.map((e,t)=>s(En,{group:e,query:r,open:t===0})),s(D,{when:i,children:()=>l(`p`,{class:U.none,children:[`No setting matches “`,r,`”.`]})})]})]})}function En(e){let{group:t,query:n}=e,r=P(e.open),i=n.pipe(k(e=>e.trim().length>0),w()),a=M([r.asReadonly,i]).pipe(k(([e,t])=>e||t),w()),o=n.pipe(k(e=>!ie(t.form.params,e)),w());return l(`section`,{class:U.group,hidden:o,"aria-label":t.title,children:[s(`div`,{class:U.header,children:l(`button`,{type:`button`,class:U.toggle,"aria-expanded":a,onClick:()=>r.set(!r.value),children:[s(`span`,{class:U.title,children:t.title}),s(I,{name:`chevron-down`,size:14,class:U.chevron})]})}),s(D,{when:a,reveal:!0,children:()=>s(`div`,{class:U.body,"data-wide-labels":t.wideLabels?``:void 0,children:s(oe,{form:t.form,filter:n})})})]})}function Dn(){return(Dn=e((()=>{j(),C(),A(),F(),ne(),xe(),ke(),T(),N(),wn(),d()})))()}var W;function On(){return(On=e((()=>{p(),W={action:`msp-shell-help-panel-action`,conflict:`msp-shell-help-panel-conflict`,conflicts:`msp-shell-help-panel-conflicts`,content:`msp-shell-help-panel-content`,group:`msp-shell-help-panel-group`,heading:`msp-shell-help-panel-heading`,help:`msp-shell-help-panel-help`,input:`msp-shell-help-panel-input`,key:`msp-shell-help-panel-key`,keys:`msp-shell-help-panel-keys`,list:`msp-shell-help-panel-list`,or:`msp-shell-help-panel-or`,row:`msp-shell-help-panel-row`},m(`views/shell/help-panel.module.css`,`@layer msp.components {
.msp-shell-help-panel-help {
  flex: 1 1 0;
  min-height: 0;
}

.msp-shell-help-panel-content {
  gap: var(--msp-space-4);
  padding: 0 var(--msp-panel-inset) var(--msp-space-4);
  font-size: var(--msp-font-size-sm);
  display: grid;
}

.msp-shell-help-panel-group {
  gap: var(--msp-space-1);
  display: grid;
}

.msp-shell-help-panel-heading {
  padding: 0 var(--msp-inset) var(--msp-space-1);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
  font-weight: 500;
}

.msp-shell-help-panel-list {
  margin: 0;
  display: grid;
}

.msp-shell-help-panel-row {
  align-items: center;
  gap: var(--msp-space-3);
  min-height: var(--msp-control-height);
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }
}

.msp-shell-help-panel-action {
  flex: 1;
  min-width: 0;
}

.msp-shell-help-panel-input {
  justify-content: flex-end;
  align-items: center;
  gap: var(--msp-space-2);
  flex-wrap: wrap;
  margin: 0;
  display: flex;
}

.msp-shell-help-panel-keys {
  gap: var(--msp-space-1);
  display: flex;
}

.msp-shell-help-panel-key {
  min-width: 18px;
  padding: 1px var(--msp-space-2);
  border-radius: var(--msp-radius-sm);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font: inherit;
  font-size: var(--msp-font-size-xs);
  text-align: center;
  white-space: nowrap;
}

.msp-shell-help-panel-or {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-shell-help-panel-conflicts {
  gap: var(--msp-space-3);
  margin: 0 var(--msp-space-1);
  padding: var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-warning), transparent 85%);
  color: var(--msp-color-text);
  display: flex;
}

.msp-shell-help-panel-conflict {
  margin: 0;
}
}
`)})))()}function kn(e){let t=e.commands.commands.pipe(k(e=>e.filter(e=>e.shortcut))),n=t.pipe(k(Mn));return l(L,{edge:!0,class:W.help,contentClass:W.content,"aria-label":`Help`,children:[s(D,{when:n.pipe(k(e=>e.length?e:void 0)),children:e=>l(`section`,{class:W.conflicts,"aria-label":`Shortcut conflicts`,children:[s(I,{name:`triangle-alert`,size:14}),s(`div`,{children:e.map(([e,t])=>l(`p`,{class:W.conflict,children:[s(jn,{input:e}),` is used by `,t.join(` and `),`: only the first runs.`]}))})]})}),s(E,{each:e.bindings,children:e=>s(An,{title:e.title,bindings:e.bindings})}),s(An,{title:`Everywhere`,bindings:Nn}),s(D,{when:t.pipe(k(e=>e.length?e:void 0)),children:e=>s(An,{title:`Commands`,bindings:e.map(e=>({action:e.title,input:Ye(e.shortcut)}))})})]})}function An(e){return l(`section`,{class:W.group,"aria-label":e.title,children:[s(`h3`,{class:W.heading,children:e.title}),s(`dl`,{class:W.list,children:e.bindings.map(e=>l(`div`,{class:W.row,children:[s(`dt`,{class:W.action,children:e.action}),l(`dd`,{class:W.input,children:[s(jn,{input:e.input}),e.or?l(c,{children:[s(`span`,{class:W.or,children:`or`}),s(jn,{input:e.or})]}):null]})]}))})]})}function jn(e){return s(`span`,{class:W.keys,children:e.input.map(e=>s(`kbd`,{class:W.key,children:e}))})}function Mn(e){let t=new Map;for(let n of e){let e=Ye(n.shortcut).join(`+`);t.set(e,[...t.get(e)??[],n])}return[...t.values()].filter(e=>e.length>1).map(e=>[Ye(e[0].shortcut),e.map(e=>e.title)])}var Nn;function Pn(){return(Pn=e((()=>{A(),B(),F(),xe(),T(),On(),d(),Nn=[{action:`Command menu`,input:[`⌘`,`K`],or:[`⇧`,`⌘`,`P`]},{action:`Help (this card)`,input:[`?`]},{action:`Close a menu, a card or the command menu`,input:[`Esc`]}]})))()}var G;function Fn(){return(Fn=e((()=>{p(),G={empty:`msp-shell-log-view-empty`,entry:`msp-shell-log-view-entry`,kind:`msp-shell-log-view-kind`,log:`msp-shell-log-view-log`,text:`msp-shell-log-view-text`,time:`msp-shell-log-view-time`},m(`views/shell/log-view.module.css`,`@layer msp.components {
.msp-shell-log-view-log {
  padding: 0 var(--msp-panel-inset) var(--msp-panel-inset);
  font-size: var(--msp-font-size-sm);
  display: grid;
}

.msp-shell-log-view-empty {
  padding: var(--msp-space-4);
  color: var(--msp-color-text-muted);
}

.msp-shell-log-view-entry {
  align-items: baseline;
  gap: var(--msp-space-3);
  padding: var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  grid-template-columns: auto minmax(0, 1fr) auto;
  display: grid;

  &:hover {
    background: var(--msp-color-hover);
  }

  &[data-kind="error"] .msp-shell-log-view-kind {
    color: var(--msp-color-danger);
  }

  &[data-kind="warning"] .msp-shell-log-view-kind {
    color: var(--msp-color-warning);
  }

  &[data-kind="success"] .msp-shell-log-view-kind {
    color: var(--msp-color-success);
  }
}

.msp-shell-log-view-kind {
  color: var(--msp-color-text-subtle);
  align-self: center;
}

.msp-shell-log-view-text {
  overflow-wrap: anywhere;
}

.msp-shell-log-view-time {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
}
}
`)})))()}var K;function In(){return(In=e((()=>{p(),K={bottom:`msp-shell-canvas-bottom`,bottomGrid:`msp-shell-canvas-bottomGrid`,busy:`msp-shell-canvas-busy`,"busy-in":`msp-shell-canvas-busy-in`,"busy-slide":`msp-shell-canvas-busy-slide`,"busy-spin":`msp-shell-canvas-busy-spin`,busyActions:`msp-shell-canvas-busyActions`,busyBar:`msp-shell-canvas-busyBar`,busyCard:`msp-shell-canvas-busyCard`,busyHead:`msp-shell-canvas-busyHead`,busyLabel:`msp-shell-canvas-busyLabel`,busyPercent:`msp-shell-canvas-busyPercent`,busySpin:`msp-shell-canvas-busySpin`,busyTrack:`msp-shell-canvas-busyTrack`,caption:`msp-shell-canvas-caption`,card:`msp-shell-canvas-card`,"card-in":`msp-shell-canvas-card-in`,cardBody:`msp-shell-canvas-cardBody`,cardBodyContent:`msp-shell-canvas-cardBodyContent`,cardHeader:`msp-shell-canvas-cardHeader`,cardTitle:`msp-shell-canvas-cardTitle`,chip:`msp-shell-canvas-chip`,compactStatus:`msp-shell-canvas-compactStatus`,context:`msp-shell-canvas-context`,corner:`msp-shell-canvas-corner`,face:`msp-shell-canvas-face`,frame:`msp-shell-canvas-frame`,lead:`msp-shell-canvas-lead`,menuMark:`msp-shell-canvas-menuMark`,message:`msp-shell-canvas-message`,pill:`msp-shell-canvas-pill`,"pill-in":`msp-shell-canvas-pill-in`,pillButton:`msp-shell-canvas-pillButton`,pillMain:`msp-shell-canvas-pillMain`,progress:`msp-shell-canvas-progress`,railMenu:`msp-shell-canvas-railMenu`,railMenuButton:`msp-shell-canvas-railMenuButton`,railMenuDivider:`msp-shell-canvas-railMenuDivider`,railMenuList:`msp-shell-canvas-railMenuList`,railToggle:`msp-shell-canvas-railToggle`,sections:`msp-shell-canvas-sections`,spin:`msp-shell-canvas-spin`,stack:`msp-shell-canvas-stack`,stackTools:`msp-shell-canvas-stackTools`,status:`msp-shell-canvas-status`,text:`msp-shell-canvas-text`,tool:`msp-shell-canvas-tool`,"tool-menu-in":`msp-shell-canvas-tool-menu-in`,toolMenu:`msp-shell-canvas-toolMenu`,toolMenuCard:`msp-shell-canvas-toolMenuCard`,toolMenuCheck:`msp-shell-canvas-toolMenuCheck`,toolMenuDivider:`msp-shell-canvas-toolMenuDivider`,toolMenuHint:`msp-shell-canvas-toolMenuHint`,toolMenuLabel:`msp-shell-canvas-toolMenuLabel`,toolMenuRow:`msp-shell-canvas-toolMenuRow`,toolbar:`msp-shell-canvas-toolbar`,toolbarSlot:`msp-shell-canvas-toolbarSlot`},m(`views/shell/canvas.module.css`,`@layer msp.components {
.msp-shell-canvas-frame {
  border-radius: var(--msp-radius-lg);
  background: var(--msp-glass-bg);
  width: 44px;
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  flex-direction: column;
  display: flex;
  overflow: hidden;

  & > * + *, & .msp-shell-canvas-stackTools > * + *, & .msp-shell-canvas-sections > * + * {
    border-top: 1px solid var(--msp-glass-edge);
  }

  & .msp-shell-canvas-sections:empty, & .msp-shell-canvas-toolbar:not(:has(button)) {
    display: none;
  }
}

.msp-shell-canvas-sections, .msp-shell-canvas-toolbar {
  flex-direction: column;
  display: flex;
}

.msp-shell-canvas-tool {
  width: 100%;
  height: var(--msp-rail-button, 40px);
  color: var(--msp-color-text-muted);
  transition: background-color var(--msp-motion-fast) var(--msp-ease),
    color var(--msp-motion-fast) var(--msp-ease);
  place-items: center;
  display: grid;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[aria-pressed="true"] {
    background: var(--msp-color-control);
    color: var(--msp-color-accent);
  }
}

.msp-shell-canvas-card {
  top: var(--msp-canvas-edge);
  right: var(--msp-canvas-panel-right, 64px);
  bottom: calc(var(--msp-canvas-edge) + var(--msp-corner-room, 0px));
  z-index: var(--msp-z-overlay);
  width: min(var(--msp-right-panel-width, 340px), calc(100% - 96px));
  border-radius: var(--msp-radius-lg);
  animation: msp-shell-canvas-card-in var(--msp-motion-base) var(--msp-ease);
  background: var(--msp-glass-panel-bg);
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  flex-direction: column;
  display: flex;
  position: absolute;
  overflow: hidden;

  [data-right-panel="open"] > & {
    animation: none;
  }

  [data-pinned] > & {
    top: 0;
    right: calc(var(--msp-canvas-rail-inset, 52px) - var(--msp-canvas-edge));
    box-shadow: -1px 0 0 var(--msp-glass-edge),
      inset -1px 0 0 var(--msp-glass-edge);
    border-radius: 0;
    bottom: 0;
  }
}

@keyframes msp-shell-canvas-card-in {
  from {
    opacity: 0;
    transform: translateX(8px);
  }
}

.msp-shell-canvas-cardHeader {
  align-items: center;
  gap: var(--msp-space-3);
  height: 40px;
  padding: 0 var(--msp-space-3) 0 var(--msp-space-4);
  font-weight: 600;
  display: flex;
}

.msp-shell-canvas-cardTitle {
  flex: 1;
}

.msp-shell-canvas-cardBody {
  flex: 1 1 0;
  min-height: 0;
}

.msp-shell-canvas-cardBodyContent {
  flex-direction: column;
  min-height: 100%;
  display: flex;
}

.msp-shell-canvas-stack:not(:has(button)) {
  display: none;
}

.msp-shell-canvas-stack {
  --msp-stack-row: 34px;
  position: relative;
}

.msp-shell-canvas-railToggle {
  right: calc((44px - var(--msp-stack-row)) / 2);
  bottom: var(--msp-canvas-edge);
  z-index: var(--msp-z-overlay);
  pointer-events: auto;
  position: absolute;
}

.msp-shell-canvas-corner {
  justify-self: end;
  align-items: flex-end;
  gap: var(--msp-space-3);
  flex-flow: row-reverse wrap-reverse;
  grid-area: corner;
  max-width: 100%;
  display: flex;
}

.msp-shell-canvas-stack .msp-shell-canvas-frame {
  width: auto;
  height: var(--msp-stack-row);
  flex-direction: row;
  max-width: 100%;

  & > * + *, & .msp-shell-canvas-stackTools > * + * {
    border-top: 0;
    border-left: 1px solid var(--msp-glass-edge);
  }
}

.msp-shell-canvas-stackTools, .msp-shell-canvas-stack .msp-shell-canvas-sections, .msp-shell-canvas-stack .msp-shell-canvas-toolbar {
  flex-direction: row;
  display: flex;
}

.msp-shell-canvas-stack .msp-shell-canvas-sections > * + * {
  border-top: 0;
  border-left: 1px solid var(--msp-glass-edge);
}

.msp-shell-canvas-stack .msp-shell-canvas-tool {
  width: var(--msp-stack-row);
  height: var(--msp-stack-row);
  flex: none;
}

.msp-shell-canvas-stack :is(.msp-shell-canvas-tool, button) > svg:first-child {
  width: 18px;
  height: 18px;
}

.msp-shell-canvas-tool[data-captioned] {
  justify-content: center;
  gap: var(--msp-space-1);
  height: var(--msp-rail-button-captioned, 46px);
  flex-direction: column;
  display: flex;
}

.msp-shell-canvas-tool > svg, .msp-shell-canvas-tool > .msp-shell-canvas-face > svg {
  width: var(--msp-rail-icon, 20px);
  height: var(--msp-rail-icon, 20px);
}

.msp-shell-canvas-tool[data-captioned] > svg, .msp-shell-canvas-tool[data-captioned] > .msp-shell-canvas-face > svg {
  width: var(--msp-rail-icon-captioned, 16px);
  height: var(--msp-rail-icon-captioned, 16px);
}

.msp-shell-canvas-caption {
  color: var(--msp-color-text-subtle);
  font-variant-numeric: tabular-nums;
  font-size: 10px;
  line-height: 1;
}

.msp-shell-canvas-tool {
  position: relative;
}

.msp-shell-canvas-face {
  display: contents;
}

.msp-shell-canvas-menuMark {
  opacity: .45;
  border-top: 4px solid #0000;
  border-right: 4px solid;
  position: absolute;
  bottom: 5px;
  right: 5px;
}

.msp-shell-canvas-toolMenu {
  z-index: var(--msp-z-overlay);
  padding-bottom: var(--msp-space-3);
  animation: msp-shell-canvas-tool-menu-in var(--msp-motion-fast) var(--msp-ease);
  position: absolute;
  bottom: 100%;
}

@keyframes msp-shell-canvas-tool-menu-in {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
}

.msp-shell-canvas-toolMenuCard {
  min-width: 200px;
  padding: var(--msp-space-2);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-glass-panel-bg);
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  display: grid;
}

.msp-shell-canvas-toolMenuRow {
  align-items: center;
  gap: var(--msp-space-3);
  min-height: 32px;
  padding: var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  grid-template-columns: 16px 1fr auto;
  display: grid;

  &:hover:not(:disabled), &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[data-choice][aria-checked="true"] {
    color: var(--msp-color-accent);
    font-weight: 600;

    & .msp-shell-canvas-toolMenuLabel {
      color: inherit;
    }
  }

  &:disabled {
    opacity: .55;
  }
}

.msp-shell-canvas-toolMenuDivider {
  height: 1px;
  margin: var(--msp-space-2) var(--msp-space-3);
  background: var(--msp-glass-edge);
}

.msp-shell-canvas-toolMenuLabel {
  color: var(--msp-color-text);
  display: grid;
}

.msp-shell-canvas-toolMenuCheck {
  color: var(--msp-color-accent);
}

.msp-shell-canvas-toolMenuHint {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-shell-canvas-toolbarSlot {
  top: var(--msp-canvas-edge);
  right: var(--msp-canvas-edge);
  position: absolute;
}

.msp-shell-canvas-lead {
  top: var(--msp-canvas-top-inset, var(--msp-canvas-edge));
  left: var(--msp-canvas-edge);
  gap: var(--msp-space-3);
  width: min(320px, 100% - 96px);
  display: grid;
  position: absolute;
}

:where([data-mode="compact"]) .msp-shell-canvas-lead {
  width: min(320px, calc(100% - 36px - 3 * var(--msp-canvas-edge)));
}

.msp-shell-canvas-bottom {
  left: var(--msp-canvas-edge);
  right: var(--msp-canvas-corner-inset, var(--msp-canvas-edge));
  bottom: var(--msp-canvas-edge);
  pointer-events: none;
  position: absolute;
  container: bottom-bar / inline-size;
}

:where([data-mode="compact"]) .msp-shell-canvas-bottom {
  right: var(--msp-canvas-edge);
}

.msp-shell-canvas-bottomGrid {
  align-items: end;
  gap: var(--msp-space-3);
  grid-template-columns: minmax(0, 1fr) auto;
  grid-template-areas: "status corner";
  display: grid;

  & > * {
    pointer-events: auto;
  }
}

@container bottom-bar (width < 560px) {
  .msp-shell-canvas-bottomGrid {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas: "corner"
                         "status";
  }
}

.msp-shell-canvas-context {
  justify-content: flex-end;
  gap: var(--msp-space-2);
  flex-wrap: wrap;
  display: flex;
}

.msp-shell-canvas-chip {
  height: 30px;
  padding: 0 var(--msp-space-4);
  border-radius: var(--msp-radius-lg);
  font-size: var(--msp-font-size-md);
}

.msp-shell-canvas-status {
  pointer-events: none;
  flex-direction: column;
  grid-area: status;
  align-self: end;
  align-items: flex-start;
  display: flex;

  & > * {
    pointer-events: auto;
  }
}

.msp-shell-canvas-pill {
  align-items: center;
  gap: var(--msp-space-2);
  max-width: 100%;
  height: 34px;
  padding: 0 0 0 var(--msp-space-3);
  border-radius: var(--msp-radius-lg);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  white-space: nowrap;
  background: var(--msp-glass-bg);
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  display: inline-flex;
  overflow: hidden;
}

.msp-shell-canvas-message {
  animation: msp-shell-canvas-pill-in var(--msp-motion-base) var(--msp-ease);

  &[data-kind="error"] {
    color: var(--msp-color-danger);
  }

  &[data-kind="warning"] {
    color: var(--msp-color-warning);
  }

  &[data-kind="success"] {
    color: var(--msp-color-success);
  }
}

@keyframes msp-shell-canvas-pill-in {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
}

.msp-shell-canvas-text {
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-shell-canvas-progress {
  background: var(--msp-color-border);
  border-radius: 2px;
  width: 48px;
  height: 4px;
  overflow: hidden;

  & > div {
    background: var(--msp-color-accent);
    height: 100%;
  }
}

.msp-shell-canvas-spin {
  animation: 1s linear infinite msp-shell-canvas-spin;
}

@keyframes msp-shell-canvas-spin {
  to {
    transform: rotate(360deg);
  }
}

.msp-shell-canvas-pillMain {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  height: 100%;
  color: inherit;
  text-align: left;
  display: inline-flex;

  &:hover .msp-shell-canvas-text {
    text-underline-offset: 3px;
    text-decoration: underline;
  }
}

.msp-shell-canvas-pillButton {
  width: 34px;
  height: 100%;
  color: var(--msp-color-text-muted);
  flex: none;
  place-items: center;
  display: grid;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-shell-canvas-status .msp-shell-canvas-pill {
  height: auto;
  min-height: 24px;
  padding-left: var(--msp-space-3);
  box-shadow: none;
  -webkit-backdrop-filter: none;
  text-shadow: 0 0 2px var(--msp-color-bg),
    0 0 6px var(--msp-color-bg);
  background: none;
}

.msp-shell-canvas-status .msp-shell-canvas-pillButton {
  width: 24px;
  height: 24px;
  margin-left: var(--msp-space-1);
  border-radius: var(--msp-radius-md);
}

.msp-shell-canvas-pill:not(:has(.msp-shell-canvas-pillButton)) {
  padding-right: var(--msp-space-3);
}

.msp-shell-canvas-railMenu {
  display: contents;
  position: relative;
}

.msp-shell-canvas-railMenuButton {
  border-radius: var(--msp-radius-md);
  width: 44px;
  height: 40px;
  color: var(--msp-color-text-muted);
  place-items: center;
  display: grid;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-shell-canvas-railMenuList {
  right: 0;
  bottom: calc(100% + var(--msp-space-2));
  z-index: var(--msp-z-overlay);
  min-width: 220px;
  padding: var(--msp-space-2);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-color-panel);
  box-shadow: var(--msp-glass-shadow),
    0 8px 24px #0000001f;
  animation: msp-shell-canvas-tool-menu-in var(--msp-motion-fast) var(--msp-ease);
  display: grid;
  position: absolute;
}

.msp-shell-canvas-compactStatus {
  background: var(--msp-color-panel);
  grid-area: status;
  display: grid;

  &:empty {
    display: none;
  }

  & .msp-shell-canvas-status, & .msp-shell-canvas-context {
    grid-area: auto;
    justify-content: stretch;
    justify-self: stretch;
    gap: 0;
    padding-bottom: 0;
    display: grid;
  }

  & .msp-shell-canvas-progress {
    flex: 1;
  }

  & .msp-shell-canvas-status:empty, & .msp-shell-canvas-context:empty {
    display: none;
  }

  & .msp-shell-canvas-pill {
    width: 100%;
    max-width: none;
    height: 34px;
    padding-left: var(--msp-space-3);
    text-shadow: none;
    box-shadow: none;
    -webkit-backdrop-filter: none;
    border-top: 1px solid var(--msp-glass-edge);
    background: none;
    border-radius: 0;
  }
}

:where([data-mode="compact"]) .msp-shell-canvas-card {
  left: var(--msp-canvas-edge);
  right: var(--msp-canvas-edge);
  width: auto;
}

.msp-shell-canvas-busy {
  z-index: var(--msp-z-dialog);
  padding: var(--msp-space-4);
  background: color-mix(in oklab, var(--msp-color-bg), transparent 30%);
  -webkit-backdrop-filter: blur(2px);
  animation: msp-shell-canvas-busy-in var(--msp-motion-base) var(--msp-ease);
  place-items: center;
  display: grid;
  position: absolute;
  inset: 0;
}

@keyframes msp-shell-canvas-busy-in {
  from {
    opacity: 0;
  }
}

.msp-shell-canvas-busyCard {
  gap: var(--msp-space-3);
  width: min(360px, 100%);
  padding: var(--msp-space-4);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-color-panel);
  box-shadow: var(--msp-glass-shadow),
    0 12px 32px #0000001f;
  display: grid;
}

.msp-shell-canvas-busyHead {
  align-items: center;
  gap: var(--msp-space-3);
  display: flex;
}

.msp-shell-canvas-busySpin {
  color: var(--msp-color-accent);
  flex: none;
  animation: .9s linear infinite msp-shell-canvas-busy-spin;
}

@keyframes msp-shell-canvas-busy-spin {
  to {
    transform: rotate(360deg);
  }
}

.msp-shell-canvas-busyLabel {
  flex: 1;
  font-weight: 600;
}

.msp-shell-canvas-busyPercent {
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  font-variant-numeric: tabular-nums;
}

.msp-shell-canvas-busyTrack {
  background: var(--msp-color-control);
  border-radius: 2px;
  height: 4px;
  overflow: hidden;
}

.msp-shell-canvas-busyBar {
  background: var(--msp-color-accent);
  height: 100%;
  transition: width var(--msp-motion-fast) linear;
  border-radius: 2px;
  display: block;

  &[data-indeterminate] {
    animation: msp-shell-canvas-busy-slide 1.2s var(--msp-ease) infinite;
  }
}

@keyframes msp-shell-canvas-busy-slide {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(340%);
  }
}

.msp-shell-canvas-busyActions {
  justify-content: flex-end;
  display: flex;
}

.msp-shell-canvas-railMenuDivider {
  height: 1px;
  margin: var(--msp-space-1) var(--msp-space-2);
  background: var(--msp-glass-edge);
}
}
`)})))()}var q;function Ln(){return(Ln=e((()=>{p(),q={band:`msp-shell-dock-band`,barTab:`msp-shell-dock-barTab`,body:`msp-shell-dock-body`,bodyContent:`msp-shell-dock-bodyContent`,bottom:`msp-shell-dock-bottom`,collapsedBar:`msp-shell-dock-collapsedBar`,compact:`msp-shell-dock-compact`,content:`msp-shell-dock-content`,dock:`msp-shell-dock-dock`,floating:`msp-shell-dock-floating`,floatingBottom:`msp-shell-dock-floatingBottom`,floatingLeft:`msp-shell-dock-floatingLeft`,floatingRight:`msp-shell-dock-floatingRight`,floatingTop:`msp-shell-dock-floatingTop`,frameless:`msp-shell-dock-frameless`,header:`msp-shell-dock-header`,left:`msp-shell-dock-left`,pin:`msp-shell-dock-pin`,rail:`msp-shell-dock-rail`,"rail-menu-in":`msp-shell-dock-rail-menu-in`,railFoot:`msp-shell-dock-railFoot`,railMenu:`msp-shell-dock-railMenu`,right:`msp-shell-dock-right`,splitter:`msp-shell-dock-splitter`,strip:`msp-shell-dock-strip`,tab:`msp-shell-dock-tab`,title:`msp-shell-dock-title`,top:`msp-shell-dock-top`},m(`views/shell/dock.module.css`,`@layer msp.components {
.msp-shell-dock-dock {
  background: var(--msp-color-panel);
  min-width: 0;
  min-height: 0;
  display: flex;
}

.msp-shell-dock-right {
  flex-direction: row;
  grid-area: right;
}

.msp-shell-dock-left {
  flex-direction: row-reverse;
  grid-area: left;
}

.msp-shell-dock-top, .msp-shell-dock-bottom {
  flex-direction: row-reverse;

  & .msp-shell-dock-content {
    width: auto;
    height: var(--msp-dock-size);
    flex: 1;
  }

  & .msp-shell-dock-header, & .msp-shell-dock-splitter {
    display: none;
  }

  & .msp-shell-dock-tab {
    width: 28px;
    height: 28px;
  }
}

.msp-shell-dock-top {
  grid-area: top;
}

.msp-shell-dock-bottom {
  grid-area: bottom;
}

.msp-shell-dock-content {
  width: var(--msp-dock-size);
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  display: flex;
  position: relative;
}

.msp-shell-dock-header {
  align-items: center;
  gap: var(--msp-space-3);
  height: 40px;
  padding: 0 var(--msp-space-3) 0 var(--msp-space-4);
  font-weight: 600;
  display: flex;
}

.msp-shell-dock-title {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-shell-dock-body {
  flex: 1;
  min-height: 0;
}

.msp-shell-dock-bodyContent {
  flex-direction: column;
  min-height: 100%;
  display: flex;
}

.msp-shell-dock-strip {
  gap: var(--msp-space-1);
  padding: var(--msp-space-2);
  background: var(--msp-color-bg);
  flex-direction: column;
  display: flex;
}

.msp-shell-dock-tab {
  border-radius: var(--msp-radius-md);
  width: 36px;
  height: 36px;
  color: var(--msp-color-text-muted);
  transition: background-color var(--msp-motion-fast) var(--msp-ease),
    color var(--msp-motion-fast) var(--msp-ease);
  place-items: center;
  display: grid;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[aria-selected="true"] {
    background: var(--msp-color-control);
    color: var(--msp-color-accent);
  }
}

.msp-shell-dock-splitter {
  z-index: 1;
  cursor: col-resize;
  touch-action: none;
  width: 6px;
  position: absolute;
  top: 0;
  bottom: 0;

  &[data-active] {
    background: color-mix(in oklab, var(--msp-color-accent), transparent 60%);
  }
}

.msp-shell-dock-right .msp-shell-dock-splitter {
  left: -3px;
}

.msp-shell-dock-left .msp-shell-dock-splitter {
  right: -3px;
}

.msp-shell-dock-collapsedBar {
  align-items: center;
  gap: var(--msp-space-3);
  height: 24px;
  padding: 0 var(--msp-inset);
  flex: 1;
  display: flex;
}

.msp-shell-dock-barTab {
  align-items: center;
  gap: var(--msp-space-1);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  display: inline-flex;

  &:hover {
    color: var(--msp-color-text);
  }
}

.msp-shell-dock-compact {
  flex-direction: column;

  & .msp-shell-dock-content {
    width: auto;
    height: min(45cqh, 420px);
  }

  & .msp-shell-dock-strip {
    flex-direction: row;
    justify-content: space-around;
  }

  & .msp-shell-dock-splitter {
    display: none;
  }
}

.msp-shell-dock-floating {
  top: var(--msp-canvas-edge);
  bottom: var(--msp-canvas-edge);
  align-items: flex-start;
  gap: var(--msp-space-3);
  pointer-events: none;
  display: flex;
  position: absolute;

  & > * {
    pointer-events: auto;
  }

  & .msp-shell-dock-content {
    border-radius: var(--msp-radius-lg);
    background: var(--msp-glass-panel-bg);
    box-shadow: var(--msp-glass-shadow);
    -webkit-backdrop-filter: var(--msp-glass-filter);
    align-self: stretch;
    overflow: hidden;
  }

  & .msp-shell-dock-frameless {
    box-shadow: none;
    -webkit-backdrop-filter: none;
    background: none;
    border-radius: 0;
    overflow: visible;
  }

  & .msp-shell-dock-strip {
    background: none;
    gap: 0;
    padding: 0;
  }

  & .msp-shell-dock-tab {
    width: 100%;
    height: var(--msp-rail-button, 40px);
    border-radius: 0;
  }

  & .msp-shell-dock-tab > svg {
    width: var(--msp-rail-icon, 20px);
    height: var(--msp-rail-icon, 20px);
  }

  & .msp-shell-dock-tab[aria-selected="true"] {
    background: var(--msp-color-control);
  }
}

.msp-shell-dock-floatingRight {
  gap: var(--msp-canvas-edge);
  transition: transform var(--msp-motion-base) var(--msp-ease),
    opacity var(--msp-motion-base) var(--msp-ease);
  flex-direction: row-reverse;
  top: 0;
  bottom: 0;
  right: 0;

  &[data-rail-hidden] {
    opacity: 0;
    transform: translateX(100%);
  }

  & .msp-shell-dock-rail {
    background: var(--msp-glass-panel-bg);
    box-shadow: -1px 0 0 var(--msp-glass-edge);
    border-radius: 0;
  }

  &[data-rail-overlay] {
    bottom: calc(var(--msp-canvas-edge) + var(--msp-corner-room, 0px));

    & .msp-shell-dock-rail {
      border-bottom-left-radius: var(--msp-radius-lg);
    }

    & .msp-shell-dock-content {
      margin-bottom: var(--msp-canvas-edge);
    }
  }

  & .msp-shell-dock-content {
    margin: var(--msp-canvas-edge) 0 calc(var(--msp-canvas-edge) + var(--msp-corner-room, 0px));
  }

  [data-overlay="open"] > & .msp-shell-dock-content {
    visibility: hidden;
  }
}

[data-pinned] > .msp-shell-dock-floatingRight {
  gap: 0;

  & .msp-shell-dock-content {
    box-shadow: -1px 0 0 var(--msp-glass-edge),
      inset -1px 0 0 var(--msp-glass-edge);
    border-radius: 0;
    margin: 0;
  }
}

.msp-shell-dock-floatingLeft {
  left: var(--msp-canvas-edge);
  flex-direction: row;
}

.msp-shell-dock-floatingTop, .msp-shell-dock-floatingBottom {
  left: var(--msp-canvas-edge);
  right: var(--msp-canvas-right-inset, var(--msp-canvas-edge));
  flex-direction: column;
  align-items: stretch;

  & .msp-shell-dock-content {
    width: auto;
    height: var(--msp-dock-size);
    flex: none;
  }

  & .msp-shell-dock-header, & .msp-shell-dock-splitter {
    display: none;
  }

  & .msp-shell-dock-collapsedBar {
    border-radius: var(--msp-radius-lg);
    background: var(--msp-glass-bg);
    height: 28px;
    box-shadow: var(--msp-glass-shadow);
    -webkit-backdrop-filter: var(--msp-glass-filter);
    flex: none;
    align-self: flex-start;
  }
}

.msp-shell-dock-floatingTop {
  bottom: auto;
}

.msp-shell-dock-floating:is(.msp-shell-dock-floatingRight, .msp-shell-dock-floatingLeft, .msp-shell-dock-floatingTop, .msp-shell-dock-floatingBottom) {
  pointer-events: none;
}

.msp-shell-dock-floatingTop.msp-shell-dock-band, .msp-shell-dock-floatingBottom.msp-shell-dock-band {
  left: 0;
  right: calc(var(--msp-canvas-end, 0px) - var(--msp-canvas-pinned, 0px));
  background: linear-gradient(to bottom,
    var(--msp-color-bg) calc(100% - var(--msp-band-fade, 0px) - var(--msp-band-dissolve, 0px)),
    color-mix(in srgb, var(--msp-color-bg) 60%, transparent) calc(100% - var(--msp-band-fade, 0px) * .6),
    transparent);
  pointer-events: none;

  & .msp-shell-dock-content {
    pointer-events: none;
  }
}

.msp-shell-dock-floatingTop.msp-shell-dock-band {
  top: 0;
}

.msp-shell-dock-floatingBottom.msp-shell-dock-band {
  background: linear-gradient(to top,
    var(--msp-color-bg) calc(100% - var(--msp-band-fade, 0px) - var(--msp-band-dissolve, 0px)),
    color-mix(in srgb, var(--msp-color-bg) 60%, transparent) calc(100% - var(--msp-band-fade, 0px) * .6),
    transparent);
  bottom: 0;
}

.msp-shell-dock-floatingBottom {
  flex-direction: column-reverse;
  top: auto;
}

.msp-shell-dock-rail {
  flex: none;
  align-self: stretch;
  container-type: size;
}

@container (height <= 619px) {
  .msp-shell-dock-rail > * {
    --msp-rail-button: 34px;
    --msp-rail-button-captioned: 40px;
    --msp-rail-icon: 18px;
    --msp-rail-icon-captioned: 15px;
  }
}

@container (height <= 529px) {
  .msp-shell-dock-rail > * {
    --msp-rail-button: 30px;
    --msp-rail-button-captioned: 36px;
    --msp-rail-icon: 16px;
    --msp-rail-icon-captioned: 14px;
  }
}

.msp-shell-dock-railMenu {
  right: calc(44px + var(--msp-space-2));
  z-index: var(--msp-z-overlay);
  max-height: 100%;
  animation: msp-shell-dock-rail-menu-in var(--msp-motion-fast) var(--msp-ease);
  display: flex;
  position: absolute;

  & > * {
    overflow-y: auto;
  }
}

@keyframes msp-shell-dock-rail-menu-in {
  from {
    opacity: 0;
    transform: translateX(4px);
  }
}

.msp-shell-dock-railFoot {
  flex-direction: column;
  margin-top: auto;
  display: flex;

  & > :last-child {
    background: color-mix(in oklab, var(--msp-color-control), transparent 30%);
  }

  & > * + * {
    border-top: 1px solid var(--msp-glass-edge);
  }
}

.msp-shell-dock-pin > span {
  justify-content: center;
  align-items: center;

  & > svg {
    width: 14px;
    height: 14px;
  }
}
}
`)})))()}function Rn(e){return Hn.find(t=>e>=t.min)??Hn[Hn.length-1]}function zn(e,t){let n=Rn(t);if(t<=0)return{step:n,hidden:Un};let r=(e,t)=>{let r=new Set(e.map(e=>e.section)),i=0;for(let t of e)i+=t.captioned?n.captioned:n.button;return t&&(i+=n.button,r.add(`more`)),i+Math.max(0,r.size-1)};if(r(e,!1)<=t)return{step:n,hidden:Un};let i=e.map((e,t)=>({e,i:t})).sort((e,t)=>t.e.priority-e.e.priority||t.i-e.i).map(e=>e.e),a=new Set,o=e;for(let e of i)if(a.add(e.id),o=o.filter(t=>t!==e),r(o,!0)<=t)break;return{step:n,hidden:a}}function Bn(e){let t=[];for(let n of e){let e=n.group,r=t.find(t=>t.group===e);r?r.items.push(n):t.push({group:e,items:[n]})}return t.sort((e,t)=>e.group===void 0?-1:+(t.group===void 0))}function Vn(e,t){let n=(e,t)=>({id:`tab:${e.id}`,section:t,priority:e.priority,captioned:!1,kind:`tab`,tab:e}),r=(e,t)=>({id:`tool:${e.id}`,section:t,priority:e.priority,captioned:!!e.caption,kind:`tool`,item:e}),i=[];for(let t of e.filter(e=>e.place===`head`))i.push(n(t,`head`));for(let t of e.filter(e=>!e.place||e.place===`strip`))i.push(n(t,`strip`));let a=Bn(t);for(let e of a)if(e.group!==void 0)for(let t of e.items)i.push(r(t,`group:${e.group}`));for(let t of e.filter(e=>e.place===`foot`))i.push(n(t,`foot`));for(let e of a)if(e.group===void 0)for(let t of e.items)i.push(r(t,`lead`));return i.map((e,t)=>e.priority===void 0?{...e,priority:t}:e)}var Hn,Un,Wn;function Gn(){return(Gn=e((()=>{j(),C(),A(),ve(),Ke(),N(),Hn=[{name:`normal`,min:620,button:40,captioned:46},{name:`compact`,min:530,button:34,captioned:40},{name:`small`,min:0,button:30,captioned:36}],Un=new Set,Wn=class{constructor(e,t){this.height=P(0),this.menu=P(void 0);let n=e.toolbar.pipe(k(e=>e.filter(e=>e.place!==`canvas`)),Ge(e=>e.length===0?O([]):M(e.map(e=>e.visible??O(!0))).pipe(k(t=>e.filter((e,n)=>t[n])))));this.entries=M([t.tabs,n]).pipe(k(([e,t])=>Vn(e,t)));let r=M([this.entries,this.height.asReadonly]).pipe(k(([e,t])=>({entries:e,fit:zn(e,t)})));this.hidden=r.pipe(k(e=>e.fit.hidden),w((e,t)=>e.size===t.size&&[...e].every(e=>t.has(e)))),this.overflow=r.pipe(k(e=>e.entries.filter(t=>e.fit.hidden.has(t.id))),w((e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n])))}observe(e){let t=new ResizeObserver(e=>{let t=Math.round(e[e.length-1].contentRect.height);t!==this.height.value&&this.height.set(t)});return t.observe(e),()=>t.disconnect()}}})))()}function Kn(e){let t=s(`div`,{class:e.class,style:`display: contents`}),n=e.renderer.mount(t,e.ctx,i(`ViewHost`));return a(n),t}function qn(){return(qn=e((()=>{o(),d()})))()}function Jn(e){let{shell:t,dock:n}=e,r=n.id===`top`||n.id===`bottom`,i=n.tabs.pipe(k(e=>e.length>0)),a=t.mode.pipe(k(e=>e===`compact`&&n.id===`right`)),o=M([n.tabs,a]).pipe(k(([e,t])=>t&&e.some(e=>e.compactBar)?e.filter(e=>e.compactBar):e)),c=r?M([n.tabs,n.active]).pipe(k(([e,t])=>e.length>1&&!!t)):O(!0);return s(D,{when:i,children:()=>l(`div`,{class:`${q.dock} ${q[n.id]}`,classList:{[q.compact]:a},style:{"--msp-dock-size":n.state.pipe(k(e=>`${e.size}px`))},children:[s(D,{when:n.active,reveal:!0,fallback:r?()=>s($n,{shell:t,dock:n}):void 0,children:e=>s(nr,{shell:t,dock:n,tab:e})}),s(D,{when:c,children:()=>l(`nav`,{class:q.strip,role:`tablist`,"aria-orientation":a.pipe(k(e=>e||r?`horizontal`:`vertical`)),children:[s(E,{each:o,children:e=>s(er,{shell:t,dock:n,tab:e})}),e.stripEnd]})})]})})}function Yn(e){let{shell:t,dock:n}=e,r={"--msp-dock-size":n.state.pipe(k(e=>`${e.size}px`))},i=new Wn(t,n),o=M([n.tabs,i.hidden]).pipe(k(([e,t])=>t.size?e.filter(e=>!t.has(`tab:${e.id}`)):e)),c=o.pipe(k(e=>e.filter(e=>e.place===`head`))),u=o.pipe(k(e=>e.filter(e=>!e.place||e.place===`strip`))),d=o.pipe(k(e=>e.filter(e=>e.place===`foot`)));if(n.id===`top`||n.id===`bottom`)return s(`div`,{class:`${q.floating} ${n.id===`top`?q.floatingTop:q.floatingBottom}`,classList:{[q.band]:n.active.pipe(k(e=>e?.frame===`none`))},style:r,children:s(D,{when:n.active,reveal:!0,children:e=>s(nr,{shell:t,dock:n,tab:e})})});let f=l(`div`,{class:`${q.floating} ${n.id===`left`?q.floatingLeft:q.floatingRight}`,style:r,children:[l(`div`,{class:`${q.rail} ${K.frame}`,ref:e=>{a(i.observe(e))},children:[e.railLead,s(D,{when:c.pipe(k(e=>e.length>0)),children:()=>s(`nav`,{class:q.strip,role:`tablist`,"aria-orientation":`vertical`,"aria-label":`Home`,children:s(E,{each:c,children:e=>s(er,{shell:t,dock:n,tab:e})})})}),s(D,{when:u.pipe(k(e=>e.length>0)),children:()=>s(`nav`,{class:q.strip,role:`tablist`,"aria-orientation":`vertical`,"aria-label":`Panels`,children:s(E,{each:u,children:e=>s(er,{shell:t,dock:n,tab:e})})})}),e.railItems?.(i),s(Zn,{shell:t,dock:n,rail:i,root:()=>f}),l(`div`,{class:q.railFoot,children:[s(D,{when:d.pipe(k(e=>e.length>0)),children:()=>s(`nav`,{class:q.strip,role:`tablist`,"aria-orientation":`vertical`,"aria-label":`More panels`,children:s(E,{each:d,children:e=>s(er,{shell:t,dock:n,tab:e})})})}),e.railFoot?.(i)]})]}),s(D,{when:n.active,reveal:`side`,children:e=>s(nr,{shell:t,dock:n,tab:e,pinnable:!0,coveredBy:t.overlay})}),s(Qn,{shell:t,dock:n,rail:i})]});return f}function Xn(e,t,n){t.id===`right`&&e.overlay.value?(e.closeOverlay(),e.show(n.id)):e.select(n.id)}function Zn(e){let{rail:t}=e,n=t.menu;return s(D,{when:t.overflow.pipe(k(e=>e.length>0)),children:()=>(a(()=>n.set(void 0)),s(`nav`,{class:q.strip,"aria-label":`More buttons`,children:s(`button`,{type:`button`,class:q.tab,"data-tip":`More`,"data-tip-side":`left`,"aria-label":`More`,"aria-haspopup":`menu`,"aria-expanded":n.asReadonly.pipe(k(e=>!!e)),onClick:t=>{if(n.value)return n.set(void 0);let r=t.currentTarget,i=e.root().getBoundingClientRect().bottom-r.getBoundingClientRect().bottom;n.set({bottom:i,anchor:r})},children:s(I,{name:`ellipsis`,size:20})})}))})}function Qn(e){let{shell:t,dock:n,rail:r}=e,i=r.menu,o=M([i.asReadonly,r.overflow]).pipe(k(([e,t])=>e&&t.length>0?e:void 0)),c=(e,r)=>{if(i.set(void 0),e.tab)return Xn(t,n,e.tab);let a=e.item;a.overlay?t.toggleOverlay(a.overlay,r):a.run?.(r)},u=e=>{if(e.key!==`Escape`||!i.value)return;let t=i.value.anchor;i.set(void 0),t.focus(),e.preventDefault()},d=e=>{let t=i.value;if(!t)return;let n=e.target;t.anchor.contains(n)||n.closest?.(`.${q.railMenu}`)||i.set(void 0)};return document.addEventListener(`keydown`,u),document.addEventListener(`pointerdown`,d),a(()=>{document.removeEventListener(`keydown`,u),document.removeEventListener(`pointerdown`,d)}),s(D,{when:o,children:e=>s(`div`,{class:q.railMenu,style:{bottom:`${e.bottom}px`},children:s(`div`,{class:K.toolMenuCard,role:`menu`,"aria-label":`More`,ref:e=>queueMicrotask(()=>e.querySelector(`button`)?.focus()),children:s(E,{each:r.overflow,children:t=>l(`button`,{type:`button`,role:`menuitem`,class:K.toolMenuRow,onClick:n=>c(t,e.anchor),children:[t.tab?s(I,{name:t.tab.icon,size:16}):s(ar,{item:t.item,size:16}),s(`span`,{class:K.toolMenuLabel,children:t.tab?t.tab.title:J(t.item)}),s(`span`,{})]})},e=>e.id)})})})}function $n(e){let{shell:t,dock:n}=e;return s(`div`,{class:q.collapsedBar,children:s(E,{each:n.tabs,children:e=>l(`button`,{type:`button`,class:q.barTab,onClick:()=>t.show(e.id),title:`Show ${e.title}`,children:[s(I,{name:n.id===`top`?`chevron-down`:`chevron-up`,size:14}),e.title]})})})}function er(e){let{shell:t,dock:n,tab:r}=e,i=n.id===`right`?t.overlay.pipe(k(e=>!!e)):O(!1),a=M([n.state,i]).pipe(k(([e,t])=>!t&&!e.collapsed&&e.active===r.id),w());return s(`button`,{type:`button`,role:`tab`,class:q.tab,"data-tip":r.title,"data-tip-side":`left`,"aria-label":r.title,"aria-selected":a,onClick:()=>Xn(t,n,r),children:s(I,{name:r.icon,size:20})})}function tr(e){let{shell:t}=e,n=t.dock(e.dock);return s(Me,{variant:`ghost`,size:`sm`,class:q.pin,icon:s(I,{name:`pin`}),title:`Pin beside the canvas`,pressed:n.state.pipe(k(e=>e.pinned),w()),onClick:()=>t.setPinned(e.dock,!n.state.value.pinned)})}function nr(e){let{shell:t,dock:n,tab:r}=e,i=!e.coveredBy||e.coveredBy.pipe(k(e=>!e));return _e(i,()=>l(`section`,{class:r.frame===`none`?`${q.content} ${q.frameless}`:q.content,role:`tabpanel`,"aria-label":r.title,children:[s(rr,{shell:t,dock:n}),l(`header`,{class:q.header,children:[s(`span`,{class:q.title,children:typeof r.heading==`function`?r.heading():r.heading??r.title}),e.pinnable?s(tr,{shell:t,dock:n.id}):null,s(Me,{variant:`ghost`,size:`sm`,icon:s(I,{name:`x`}),title:`Close panel`,onClick:()=>t.toggle(n.id)})]}),s(L,{class:q.body,contentClass:q.bodyContent,children:s(D,{when:t.tabFocus.pipe(k(e=>({section:e?.tab===r.id?e.section:void 0})),w((e,t)=>e.section===t.section&&!t.section)),children:e=>s(Kn,{renderer:r.render,ctx:{shell:t,dock:n.id,...e.section?{focus:e.section}:{}}})})})]}))}function rr(e){let{shell:t,dock:n}=e,r=n.id===`left`?1:-1,i=0,a=0,o=!1,c=e=>t.setSize(n.id,a+r*(e.clientX-i));return s(`div`,{class:q.splitter,role:`separator`,"aria-orientation":`vertical`,onPointerEnter:e=>e.currentTarget.setAttribute(`data-active`,``),onPointerLeave:e=>{o||e.currentTarget.removeAttribute(`data-active`)},onPointerDown:e=>{let t=e.currentTarget;i=e.clientX,a=n.state.value.size,o=!0,t.setPointerCapture(e.pointerId),t.setAttribute(`data-active`,``),t.addEventListener(`pointermove`,c);let r=e=>{if(!o)return;o=!1,t.removeEventListener(`pointermove`,c),t.removeEventListener(`pointerup`,r),t.removeEventListener(`pointercancel`,r),t.removeEventListener(`lostpointercapture`,r),t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId);let n=t.getBoundingClientRect();(!(e.clientX>=n.left&&e.clientX<=n.right&&e.clientY>=n.top&&e.clientY<=n.bottom)||e.type!==`pointerup`)&&t.removeAttribute(`data-active`)};t.addEventListener(`pointerup`,r),t.addEventListener(`pointercancel`,r),t.addEventListener(`lostpointercapture`,r)},onDblClick:()=>t.setSize(n.id,n.id===`left`?300:340)})}function ir(){return(ir=e((()=>{j(),C(),A(),ve(),je(),F(),xe(),T(),o(),In(),Ln(),Y(),Gn(),qn(),d()})))()}function J(e){return e.face?e.face.pipe(k(e=>e.title)):e.caption?`${e.title} (${e.caption})`:e.title}function ar(e){let{item:t}=e;return t.face?s(`span`,{class:e.class,ref:n=>r(t.face,t=>n.replaceChildren(I({name:t.icon,size:e.size})))}):s(I,{name:t.icon,size:e.size})}function or(e){let{shell:t}=e,n=e.part??`all`,r=n===`canvas`,i=(e.hidden?M([t.toolbar,e.hidden]).pipe(k(([e,t])=>t.size?e.filter(e=>!t.has(`tool:${e.id}`)):e)):t.toolbar).pipe(k(e=>Bn(e.filter(e=>e.place===`canvas`===r))),k(e=>n===`all`||r?e:e.filter(e=>n===`lead`?e.group===void 0:e.group!==void 0)));return s(`div`,{class:K.sections,children:s(E,{each:i,children:n=>s(`div`,{class:K.toolbar,role:`toolbar`,"aria-orientation":e.menus?`horizontal`:`vertical`,"aria-label":n.group??`commands`,children:n.items.map(n=>n.visible?s(D,{when:n.visible,children:()=>s(sr,{shell:t,item:n,menus:e.menus})}):s(sr,{shell:t,item:n,menus:e.menus}))})},e=>e.group??``)})}function sr(e){let{shell:t,item:n,menus:r}=e,i=r&&n.menu?.length?r:void 0,a=n.overlay?t.overlay.pipe(k(e=>e?.overlay.id===n.overlay)):O(!1),o=M([a,n.pressed??O(!1)]).pipe(k(([e,t])=>e||t),w());return l(`button`,{type:`button`,class:K.tool,"data-captioned":n.caption?``:void 0,"data-tip":i?void 0:J(n),"data-tip-side":n.place===`canvas`?`top`:`left`,"aria-label":J(n),"aria-pressed":o,"aria-haspopup":i?`menu`:void 0,"data-overlay-trigger":n.overlay?``:void 0,onClick:e=>{if(i&&!n.overlay&&!n.run)return i.show(n,e.currentTarget);i?.hide(),n.overlay?t.toggleOverlay(n.overlay,e.currentTarget):n.run?.(e.currentTarget)},onPointerEnter:i?e=>i.show(n,e.currentTarget):void 0,onPointerLeave:i?()=>i.hideSoon():void 0,onFocus:i?e=>i.show(n,e.currentTarget):void 0,onBlur:i?()=>i.hideSoon():void 0,children:[s(ar,{item:n,size:n.caption?16:20,class:K.face}),n.caption?s(`span`,{class:K.caption,children:n.caption}):null,i?s(`span`,{class:K.menuMark,"aria-hidden":`true`}):null]})}function cr(e){let t=new yr,n=l(`div`,{class:K.stack,children:[s(`div`,{class:K.frame,children:l(L,{axis:`x`,contentClass:K.stackTools,children:[e.lead,s(or,{shell:e.shell,part:`canvas`,menus:t})]})}),e.aside,s(lr,{menus:t})]});return t.stack=n,a(()=>t.dispose()),n}function lr(e){let{menus:t}=e,n=e=>{e.key===`Escape`&&!e.defaultPrevented&&t.open.value&&(t.hide(),e.preventDefault())};return document.addEventListener(`keydown`,n),a(()=>document.removeEventListener(`keydown`,n)),s(D,{when:t.open,children:e=>s(`div`,{class:K.toolMenu,style:{right:`${e.right}px`},role:`menu`,"aria-label":e.item.title,onPointerEnter:()=>t.keep(),onPointerLeave:()=>t.hideSoon(),onFocusIn:()=>t.keep(),onFocusOut:()=>t.hideSoon(),children:s(`div`,{class:K.toolMenuCard,children:e.item.menu.map((e,n,r)=>l(c,{children:[n>0&&e.group!==r[n-1].group?s(`div`,{class:K.toolMenuDivider,role:`separator`}):null,l(`button`,{type:`button`,role:e.pressed?`menuitemcheckbox`:`menuitem`,"aria-checked":e.pressed,class:K.toolMenuRow,disabled:!!e.disabled,onClick:()=>{t.hide(),e.run()},children:[e.icon?s(I,{name:e.icon,size:16}):s(`span`,{}),l(`span`,{class:K.toolMenuLabel,children:[e.label,e.disabled||e.hint?s(`span`,{class:K.toolMenuHint,children:e.disabled??e.hint}):null]}),e.pressed?s(D,{when:e.pressed,children:()=>s(I,{name:`check`,size:14,class:K.toolMenuCheck})}):null]})]}))})})})}function ur(e){let{shell:t}=e,n=P(!1),r=t.dock(`right`),i=t.toolbar.pipe(k(e=>e.filter(e=>e.place!==`canvas`&&!e.group))),o=t.toolbar.pipe(k(e=>e.filter(e=>e.place!==`canvas`&&e.group))),c=r.tabs.pipe(k(e=>e.some(e=>e.compactBar)?e.filter(e=>!e.compactBar):[])),u=(e,r)=>{n.set(!1),e.overlay?t.toggleOverlay(e.overlay,r):e.run?.(r)},d=l(`div`,{class:K.railMenu,children:[s(E,{each:i,children:e=>s(`button`,{type:`button`,class:K.railMenuButton,"aria-label":J(e),"data-tip":J(e),onClick:t=>u(e,t.currentTarget),children:s(ar,{item:e,size:20,class:K.face})})},e=>e.id),s(`button`,{type:`button`,class:K.railMenuButton,"aria-label":`More`,"aria-expanded":n,"data-tip":`More`,onClick:()=>n.set(!n.value),children:s(I,{name:`ellipsis`,size:20})}),s(D,{when:n,children:()=>l(`div`,{class:K.railMenuList,role:`menu`,"aria-label":`More`,children:[s(E,{each:c,children:e=>l(`button`,{type:`button`,role:`menuitem`,class:K.toolMenuRow,onClick:()=>{n.set(!1),t.show(e.id)},children:[s(I,{name:e.icon,size:16}),s(`span`,{class:K.toolMenuLabel,children:e.title}),s(`span`,{})]})},e=>e.id),s(D,{when:M([c,o]).pipe(k(([e,t])=>e.length>0&&t.length>0)),children:()=>s(`div`,{class:K.railMenuDivider})}),s(E,{each:o,children:e=>l(`button`,{type:`button`,role:`menuitem`,class:K.toolMenuRow,onClick:t=>u(e,t.currentTarget),children:[s(ar,{item:e,size:16,class:K.face}),s(`span`,{class:K.toolMenuLabel,children:J(e)}),s(`span`,{})]})},e=>e.id)]})})]}),f=e=>{n.value&&!d.contains(e.target)&&n.set(!1)};return document.addEventListener(`pointerdown`,f),a(()=>document.removeEventListener(`pointerdown`,f)),d}function dr(e){let t=e.status.tasks.pipe(k(e=>e.find(e=>e.overlay)),w((e,t)=>e?.id===t?.id));return s(D,{when:t,children:t=>{let n=e.status.tasks.pipe(k(e=>e.find(e=>e.id===t.id)??t)),r=n.pipe(k(e=>e.progress===void 0?void 0:Math.round(e.progress*100)));return s(`div`,{class:K.busy,role:`alertdialog`,"aria-modal":`true`,"aria-label":t.label,children:l(`div`,{class:K.busyCard,children:[l(`div`,{class:K.busyHead,children:[s(I,{name:`loader-circle`,size:18,class:K.busySpin}),s(`span`,{class:K.busyLabel,children:n.pipe(k(e=>e.label))}),s(`span`,{class:K.busyPercent,children:r.pipe(k(e=>e===void 0?``:`${e}%`))})]}),s(`div`,{class:K.busyTrack,role:`progressbar`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":r,children:s(`span`,{class:K.busyBar,"data-indeterminate":r.pipe(k(e=>e===void 0?``:void 0)),style:{width:r.pipe(k(e=>`${e??30}%`))}})}),t.abort?s(`div`,{class:K.busyActions,children:s(Me,{size:`sm`,onClick:()=>t.abort?.(),children:`Cancel`})}):null]})})}})}function fr(e){let{shell:t}=e;return s(D,{when:t.overlay,children:e=>s(pr,{shell:t,open:e})})}function pr(e){let{shell:t,open:n}=e,r=l(`section`,{class:K.card,role:`dialog`,"aria-label":n.overlay.title,children:[l(`header`,{class:K.cardHeader,children:[s(`span`,{class:K.cardTitle,children:n.overlay.title}),s(tr,{shell:t,dock:`right`}),s(Me,{variant:`ghost`,size:`sm`,icon:s(I,{name:`x`}),title:`Close`,onClick:()=>t.closeOverlay()})]}),s(L,{class:K.cardBody,contentClass:K.cardBodyContent,children:s(Kn,{renderer:n.overlay.render,ctx:{shell:t,...n.focus?{focus:n.focus}:{}}})})]}),i=()=>t.dock(`right`).state.value.pinned,o=document,c=e=>{e.key!==`Escape`||e.defaultPrevented||i()||(t.closeOverlay(),e.preventDefault())},u=e=>{let a=e.target;i()||r.contains(a)||n.anchor?.contains(a)||a.closest?.(`[data-overlay-trigger], [role=tab]`)||t.closeOverlay()};return o.addEventListener(`keydown`,c),o.addEventListener(`pointerdown`,u,!0),a(()=>{o.removeEventListener(`keydown`,c),o.removeEventListener(`pointerdown`,u,!0)}),r}function mr(e){let{status:t}=e;return l(`div`,{class:K.status,"aria-live":`polite`,children:[s(D,{when:t.current,children:t=>l(`button`,{type:`button`,class:`${K.pill} ${K.message}`,"data-kind":t.kind,title:`Show the log`,onClick:()=>e.onOpenLog?.(),children:[s(I,{name:br[t.kind],size:14}),s(`span`,{class:K.text,children:t.text})]})}),s(E,{each:t.tasks.pipe(k(e=>e.filter(e=>!e.overlay))),children:e=>s(_r,{task:e})}),e.after]})}function hr(e){let t=l(c,{children:[e.icon,s(`span`,{class:K.text,children:e.text}),e.after]});return l(`span`,{class:K.pill,children:[e.onClick?s(`button`,{type:`button`,class:K.pillMain,"aria-label":e.label,onClick:()=>e.onClick?.(),children:t}):t,e.onDismiss?s(`button`,{type:`button`,class:K.pillButton,"aria-label":e.dismissLabel??`Dismiss`,"data-tip":e.dismissLabel??`Dismiss`,onClick:()=>e.onDismiss?.(),children:s(I,{name:`x`,size:14})}):null]})}function gr(e){return l(`div`,{class:K.context,children:[e.lead,s(E,{each:e.status.chips,children:e=>l(`span`,{class:`${K.pill} ${K.chip}`,children:[s(`button`,{type:`button`,class:K.text,onClick:()=>e.activate?.(),children:e.label}),e.dismiss?s(`button`,{type:`button`,class:K.pillButton,title:`Clear`,onClick:()=>e.dismiss?.(),children:s(I,{name:`x`,size:14})}):null]})})]})}function _r(e){let{task:t}=e;return l(`span`,{class:K.pill,children:[s(I,{name:`loader-circle`,size:14,class:K.spin}),s(`span`,{class:K.text,children:t.label}),t.progress===void 0?null:s(`span`,{class:K.progress,children:s(`div`,{style:{width:`${Math.round(t.progress*100)}%`}})}),t.abort?s(`button`,{type:`button`,class:K.pillButton,title:`Cancel`,onClick:()=>t.abort?.(),children:s(I,{name:`x`,size:14})}):null]})}function vr(e){let{shell:t}=e,n=t.dock(`right`).tabs.pipe(k(e=>e.find(e=>e.place===`head`)?.icon??`prism`),w()),i=t.railOpen.pipe(k(e=>e?`Hide the panel rail`:`Show the panel rail`));return s(`div`,{class:`${K.stack} ${K.railToggle}`,children:s(`div`,{class:K.frame,children:s(`button`,{type:`button`,class:K.tool,"data-tip":i,"data-tip-side":`top`,"aria-label":i,"aria-pressed":t.railOpen,onClick:()=>t.toggleRail(),children:s(`span`,{class:K.face,ref:e=>r(n,t=>e.replaceChildren(I({name:t,size:18})))})})})})}var yr,br;function Y(){return(Y=e((()=>{j(),C(),A(),ve(),je(),F(),xe(),T(),o(),N(),In(),ir(),Gn(),qn(),d(),yr=class{constructor(){this.open=P(void 0)}#e;show(e,t){this.keep();let n=this.stack?this.stack.getBoundingClientRect().right-t.getBoundingClientRect().right:0,r=this.open.value;(r?.item!==e||r.right!==n)&&this.open.set({item:e,right:n})}keep(){this.#e!==void 0&&clearTimeout(this.#e),this.#e=void 0}hideSoon(){this.keep(),this.#e=setTimeout(()=>this.hide(),160)}hide(){this.keep(),this.open.value&&this.open.set(void 0)}dispose(){this.keep()}},br={info:`info`,success:`circle-check`,warning:`triangle-alert`,error:`circle-alert`}})))()}function xr(e){let t=e.status.history.pipe(k(e=>e.slice().reverse()));return s(`div`,{class:G.log,role:`log`,"aria-label":`Log`,children:s(E,{each:t,fallback:()=>s(`p`,{class:G.empty,children:`No messages yet.`}),children:e=>l(`div`,{class:G.entry,"data-kind":e.kind,children:[s(I,{name:br[e.kind],size:14,class:G.kind}),s(`span`,{class:G.text,children:e.text}),s(`time`,{class:G.time,dateTime:e.time.toISOString(),children:Sr.format(e.time)})]})},e=>e.id)})}var Sr;function Cr(){return(Cr=e((()=>{A(),F(),T(),Fn(),Y(),d(),Sr=new Intl.DateTimeFormat(void 0,{hour:`2-digit`,minute:`2-digit`,second:`2-digit`})})))()}var X;function wr(){return(wr=e((()=>{p(),X={canvas:`msp-shell-canvas`,canvasLayer:`msp-shell-canvasLayer`,layer:`msp-shell-layer`,shell:`msp-shell-shell`,viewport:`msp-shell-viewport`},m(`views/shell/shell.module.css`,`@layer msp.components {
.msp-shell-shell {
  background: var(--msp-color-bg);
  grid-template: "left top right"
                 "left viewport right" minmax(0, 1fr)
                 "left bottom right"
                 / auto minmax(0, 1fr) auto;
  width: 100%;
  height: 100%;
  display: grid;
  position: relative;
  overflow: hidden;
  container-type: size;

  &[data-mode="compact"] {
    grid-template: "top"
                   "viewport" minmax(0, 1fr)
                   "status"
                   "bottom"
                   "right"
                   / minmax(0, 1fr);
  }
}

.msp-shell-viewport {
  grid-area: viewport;
  min-width: 0;
  min-height: 0;
  position: relative;
  overflow: hidden;
  container: canvas / inline-size;
}

.msp-shell-canvas {
  inset: 0 var(--msp-canvas-end, var(--msp-canvas-pinned, 0px)) 0 0;
  position: absolute;
}

.msp-shell-layer {
  pointer-events: none;
  color: var(--msp-color-text);
  position: absolute;
  inset: 0;

  & > * {
    pointer-events: auto;
  }
}

.msp-shell-canvasLayer {
  right: var(--msp-canvas-pinned, 0px);
}
}
`)})))()}var Tr;function Er(){return(Er=e((()=>{p(),Tr={empty:`msp-shell-empty-canvas-empty`,"fade-in":`msp-shell-empty-canvas-fade-in`,"fade-out":`msp-shell-empty-canvas-fade-out`,mark:`msp-shell-empty-canvas-mark`},m(`views/shell/empty-canvas.module.css`,`@layer msp.components {
.msp-shell-empty-canvas-empty {
  inset: 0 var(--msp-canvas-right-inset, 0) 0 0;
  pointer-events: none;
  animation: msp-shell-empty-canvas-fade-in .9s var(--msp-ease) both;
  position: absolute;

  &[data-phase="out"] {
    animation: msp-shell-empty-canvas-fade-out .25s var(--msp-ease) forwards;
  }
}

.msp-shell-empty-canvas-mark {
  color: var(--msp-color-text-subtle);
  position: absolute;
  top: round(down, 50% - 33px, 1px);
  left: round(down, 50% - 85.5px, 1px);
}

@keyframes msp-shell-empty-canvas-fade-in {
  from {
    opacity: 0;
  }
}

@keyframes msp-shell-empty-canvas-fade-out {
  to {
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .msp-shell-empty-canvas-empty {
    animation: none;
  }
}
}
`)})))()}function Dr(e){let t=e.empty.pipe(w(),Ge(e=>e?ce(Or).pipe(k(()=>`in`)):Le(O(`out`),ce(kr).pipe(k(()=>`gone`)))),Ue(`gone`),Ve((e,t)=>t===`out`&&e!==`in`?`gone`:t),w(),S({bufferSize:1,refCount:!0}));return s(D,{when:t.pipe(k(e=>e!==`gone`)),children:()=>s(`div`,{class:Tr.empty,"data-phase":t,children:s(Te,{scale:3,flash:`reveal`,live:!0,class:Tr.mark})})})}var Or,kr;function Ar(){return(Ar=e((()=>{Re(),C(),A(),ve(),He(),ae(),We(),Ke(),ue(),we(),T(),Er(),d(),Or=700,kr=250})))()}var jr;function Mr(){return(Mr=e((()=>{p(),jr={"drop-in":`msp-shell-file-drop-drop-in`,hint:`msp-shell-file-drop-hint`,overlay:`msp-shell-file-drop-overlay`,target:`msp-shell-file-drop-target`,title:`msp-shell-file-drop-title`},m(`views/shell/file-drop.module.css`,`@layer msp.components {
.msp-shell-file-drop-overlay {
  z-index: var(--msp-z-overlay);
  padding: var(--msp-canvas-edge);
  background: color-mix(in oklab, var(--msp-color-bg), transparent 25%);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  animation: msp-shell-file-drop-drop-in var(--msp-motion-fast) var(--msp-ease);
  display: grid;
  position: absolute;
  inset: 0;

  &[hidden] {
    display: none;
  }
}

@keyframes msp-shell-file-drop-drop-in {
  from {
    opacity: 0;
  }
}

.msp-shell-file-drop-target {
  place-content: center;
  justify-items: center;
  gap: var(--msp-space-2);
  border: 1.5px dashed var(--msp-color-border-strong);
  border-radius: var(--msp-radius-lg);
  color: var(--msp-color-text-muted);
  pointer-events: none;
  display: grid;
}

.msp-shell-file-drop-title {
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-md);
  font-weight: 600;
}

.msp-shell-file-drop-hint {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}
}
`)})))()}function Nr(e){let t=P(!1),n=e=>{Pr(e)&&t.set(!0)};e.target.addEventListener(`dragenter`,n),a(()=>e.target.removeEventListener(`dragenter`,n));let r=e=>{e.preventDefault(),e.stopPropagation(),e.dataTransfer&&(e.dataTransfer.dropEffect=`copy`)};return s(`div`,{class:jr.overlay,hidden:t.asReadonly.pipe(k(e=>!e)),onDragEnter:r,onDragOver:r,onDragLeave:()=>t.set(!1),onDrop:n=>{r(n),t.set(!1);let i=[...n.dataTransfer?.files??[]];i.length&&e.onDrop(i)},children:l(`div`,{class:jr.target,children:[s(I,{name:`folder-open`,size:24}),s(`span`,{class:jr.title,children:`Drop to open`}),e.formats?.length?s(`span`,{class:jr.hint,children:e.formats.join(`, `)}):null]})})}function Pr(e){let t=e.dataTransfer?.types;if(!t)return!1;for(let e=0;e<t.length;e++)if(t[e]===`Files`)return!0;return!1}function Fr(){return(Fr=e((()=>{A(),F(),o(),N(),Mr(),d()})))()}var Z;function Ir(){return(Ir=e((()=>{p(),Z={body:`msp-shell-page-body`,header:`msp-shell-page-header`,headerContent:`msp-shell-page-headerContent`,page:`msp-shell-page-page`,"page-in":`msp-shell-page-page-in`,title:`msp-shell-page-title`},m(`views/shell/page.module.css`,`@layer msp.components {
.msp-shell-page-page {
  top: var(--msp-canvas-edge);
  right: var(--msp-canvas-right-inset, var(--msp-canvas-edge));
  bottom: var(--msp-canvas-edge);
  left: var(--msp-canvas-edge);
  z-index: var(--msp-z-dialog);
  border-radius: var(--msp-radius-lg);
  --msp-color-bg: var(--msp-color-panel);
  background: var(--msp-color-bg);
  min-width: 0;
  box-shadow: var(--msp-glass-shadow);
  color: var(--msp-color-text);
  animation: msp-shell-page-page-in var(--msp-motion-base) var(--msp-ease-reveal);
  flex-direction: column;
  display: flex;
  position: absolute;
  overflow: hidden;
}

.msp-shell-page-header {
  align-items: center;
  gap: var(--msp-space-4);
  min-width: 0;
  height: 44px;
  padding: 0 var(--msp-space-3) 0 var(--msp-space-5);
  display: flex;
}

.msp-shell-page-title {
  align-items: center;
  gap: var(--msp-space-3);
  flex: none;
  font-weight: 600;
  display: flex;
}

.msp-shell-page-headerContent {
  align-items: center;
  gap: var(--msp-space-4);
  flex: auto;
  min-width: 0;
  display: flex;
}

.msp-shell-page-body {
  flex-direction: column;
  flex: 1 1 0;
  min-height: 0;
  display: flex;
}

:where([data-mode="compact"]) .msp-shell-page-page {
  right: var(--msp-canvas-edge);
}

@keyframes msp-shell-page-page-in {
  from {
    opacity: 0;
    transform: scale(.99);
  }
}

@media (prefers-reduced-motion: reduce) {
  .msp-shell-page-page {
    animation: none;
  }
}
}
`)})))()}function Lr(e){let{shell:t}=e,n=t.page.pipe(k(e=>e?.page),w());return s(D,{when:n,children:e=>s(Rr,{shell:t,page:e})})}function Rr(e){let{shell:t}=e,n={page:e.page,focus:t.page.value?.focus},r={shell:t,...n.focus?{focus:n.focus}:{}},i=l(`section`,{class:Z.page,role:`region`,"aria-label":n.page.title,tabIndex:-1,"data-msp-page":``,children:[l(`header`,{class:Z.header,children:[l(`span`,{class:Z.title,children:[n.page.icon?s(I,{name:n.page.icon}):null,n.page.title]}),s(`div`,{class:Z.headerContent,children:n.page.header?s(Kn,{renderer:n.page.header,ctx:r}):null}),s(Me,{variant:`ghost`,size:`sm`,icon:s(I,{name:`x`}),title:`Close (Esc)`,onClick:()=>t.closePage()})]}),s(`div`,{class:Z.body,children:s(Kn,{renderer:n.page.render,ctx:r})})]}),o=document.activeElement,c=e=>{if(e.key!==`Escape`||e.defaultPrevented)return;let n=document.activeElement;(!n||n===document.body||i.contains(n))&&(t.closePage(),e.preventDefault())};return document.addEventListener(`keydown`,c),queueMicrotask(()=>{i.contains(document.activeElement)||i.focus({preventScroll:!0})}),a(()=>{document.removeEventListener(`keydown`,c),o?.isConnected&&o.focus({preventScroll:!0})}),i}function zr(){return(zr=e((()=>{je(),F(),C(),A(),T(),o(),Ir(),qn(),d()})))()}function Br(e){let{shell:t,status:n}=e,i=t.dock(`right`),o=t.mode.pipe(k(e=>e===`compact`),w()),c=t.dock(`top`),u=M([i.state,t.mode]).pipe(k(([e,t])=>e.floating&&t!==`compact`),w()),d=M([c.state,t.mode]).pipe(k(([e,t])=>e.floating&&t!==`compact`),w()),f=M([c.state,c.active,d]).pipe(k(([e,t,n])=>n&&t?t.frame===`none`?e.size-28+Q:Q+e.size+Q:Q),w(),k(e=>`${e}px`)),p=M([u,t.railShown]).pipe(k(([e,t])=>e&&!t),w()).pipe(k(e=>e?0:Hr)),m=M([u,t.compactRail]).pipe(k(([e,t])=>e&&t),w()),h=M([p,m]).pipe(k(([e,t])=>t?0:e),w()),g=M([u,t.compactRail]).pipe(k(([e,t])=>e&&t),w()),_=M([i.state,u]).pipe(k(([e,t])=>t&&e.pinned),w()),v=M([i.state,i.active,t.overlay,_,p]).pipe(k(([e,t,n,r,i])=>r?i+(t||n?e.size:0):0),w()),y=M([v,u,h]).pipe(k(([e,t,n])=>e>0?e:t?n:0),w()),b=M([i.state,i.active,u,_,p]).pipe(k(([e,t,n,r,i])=>r?Q:i+Q+(n&&t?e.size+Q:0)),w(),k(e=>`${e}px`)),ee=M([_,o,h,m]).pipe(k(([e,t,n,r])=>e||t?Q:(r?Hr:n)+Q),w(),k(e=>`${e}px`)),te=M([i.active,u]).pipe(k(([e,t])=>t&&e?`open`:void 0),w()),x=i.state.pipe(k(e=>`${e.size}px`)),S=l(`div`,{class:X.shell,"data-mode":t.mode,children:[s(D,{when:d.pipe(k(e=>!e)),children:()=>s(Jn,{shell:t,dock:c})}),s(Jn,{shell:t,dock:t.dock(`left`)}),l(`main`,{class:X.viewport,style:{"--msp-canvas-edge":`${Q}px`,"--msp-canvas-right-inset":b,"--msp-canvas-corner-inset":ee,"--msp-corner-room":`${Ur}px`,"--msp-canvas-top-inset":f,"--msp-canvas-end":y.pipe(k(e=>`${e}px`)),"--msp-band-fade":`28px`,"--msp-band-dissolve":`36px`,"--msp-canvas-rail-inset":p.pipe(k(e=>`${e+Q}px`)),"--msp-right-panel-width":x,"--msp-canvas-panel-right":p.pipe(k(e=>`${e+Q}px`)),"--msp-canvas-pinned":v.pipe(k(e=>`${e}px`))},children:[s(`div`,{class:X.canvas,"data-msp-canvas":``,children:e.canvas}),l(`div`,{class:`${X.layer} ${X.canvasLayer}`,"data-msp-theme":e.ink?e.ink.pipe(k(e=>e.theme)):`light`,style:{"--msp-color-bg":e.ink?e.ink.pipe(k(e=>e.color)):void 0},children:[s(D,{when:d,children:()=>s(Yn,{shell:t,dock:c})}),e.empty?s(Dr,{empty:e.empty}):null,s(`div`,{class:K.lead,children:e.playback}),e.overlays,s(D,{when:g,children:()=>s(vr,{shell:t})}),s(`div`,{class:K.bottom,children:l(`div`,{class:K.bottomGrid,children:[s(D,{when:o.pipe(k(e=>!e)),children:()=>s(mr,{status:n,onOpenLog:e.onOpenLog,after:e.agent})}),l(`div`,{class:K.corner,children:[s(cr,{shell:t,lead:e.canvasLead,aside:e.canvasAside}),s(D,{when:o.pipe(k(e=>!e)),children:()=>s(gr,{status:n,lead:e.context?.()})})]})]})})]}),l(`div`,{class:X.layer,"data-right-panel":te,"data-pinned":_.pipe(k(e=>e?``:void 0)),"data-overlay":t.overlay.pipe(k(e=>e?`open`:void 0)),children:[s(fr,{shell:t}),s(Lr,{shell:t}),s(D,{when:u,fallback:()=>s(D,{when:o.pipe(k(e=>!e)),children:()=>s(`div`,{class:`${K.toolbarSlot} ${K.frame}`,children:s(or,{shell:t})})}),children:()=>{let e=_e(t.railShown,()=>s(Yn,{shell:t,dock:i,railItems:e=>s(or,{shell:t,part:`rest`,hidden:e.hidden}),railFoot:e=>s(or,{shell:t,part:`lead`,hidden:e.hidden})}));return r(t.railShown,t=>e.toggleAttribute(`data-rail-hidden`,!t)),r(t.compactRail,t=>e.toggleAttribute(`data-rail-overlay`,t)),e}})]})]}),s(D,{when:o,children:()=>l(`div`,{class:K.compactStatus,"data-docked":``,children:[s(mr,{status:n,onOpenLog:e.onOpenLog}),s(gr,{status:n,lead:e.context?.()})]})}),s(D,{when:u.pipe(k(e=>!e)),children:()=>s(Jn,{shell:t,dock:i,stripEnd:s(D,{when:o,children:()=>s(ur,{shell:t})})})}),s(Jn,{shell:t,dock:t.dock(`bottom`)}),e.commandMenu,s(dr,{status:n})]});e.onDropFiles&&S.appendChild(s(Nr,{target:S,onDrop:e.onDropFiles,formats:e.dropFormats}));let ne=e=>{e.key!==`Escape`||e.defaultPrevented||t.overlay.value||Vr(e.target)||i.state.value.pinned||!i.state.value.collapsed&&i.active.value!==void 0&&(t.toggle(`right`),e.preventDefault())};window.addEventListener(`keydown`,ne),a(()=>window.removeEventListener(`keydown`,ne)),a(Ne(S));let re=new ResizeObserver(e=>t.setWidth(e[0].contentRect.width));return re.observe(S),a(()=>re.disconnect()),S}function Vr(e){return e instanceof HTMLElement?e.isContentEditable||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement?!0:e instanceof HTMLInputElement&&![`checkbox`,`radio`,`range`,`button`,`color`].includes(e.type):!1}var Hr,Q,Ur;function Wr(){return(Wr=e((()=>{j(),C(),A(),T(),o(),wt(),In(),wr(),Pe(),Y(),ir(),Ar(),Fr(),zr(),d(),Hr=44,Q=8,Ur=42})))()}function Gr(){let e=(e,t,n,r,i)=>({id:e,title:t,icon:n,form:new x(r),wideLabels:i});return{groups:[e(`appearance`,`Appearance`,`palette`,Kr),e(`camera`,`Camera`,`camera`,qr),e(`interaction`,`Interaction`,`mouse-pointer-2`,Jr),e(`performance`,`Performance`,`gauge`,Yr),e(`interface`,`Interface`,`app-window`,Xr),e(`behaviors`,`Behaviors`,`toggle-right`,Zr,!0),e(`advanced`,`Advanced`,`wrench`,Qr)]}}var $,Kr,qr,Jr,Yr,Xr,Zr,Qr;function $r(){return($r=e((()=>{Oe(),re(),$=(e,t={},n={})=>R.MappedStatic(e?`on`:`off`,{on:R.Group(t),off:R.Group({})},n),Kr={backgroundColor:R.Color(16777215,{label:`Background`}),transparentBackground:R.Boolean(!1,{label:`Transparent background`}),checkeredTransparentBackground:R.Boolean(!0,{label:`Checkered when transparent`}),occlusion:$(!0,{samples:R.Numeric(32,{min:1,max:256,step:1}),radius:R.Numeric(5,{min:0,max:20,step:.1}),bias:R.Numeric(.8,{min:0,max:3,step:.1})},{label:`Ambient occlusion`}),shadow:$(!1,{steps:R.Numeric(1,{min:1,max:64,step:1})},{label:`Shadows`}),outline:$(!1,{scale:R.Numeric(1,{min:1,max:5,step:1})},{label:`Outline`}),cameraFog:$(!0,{intensity:R.Numeric(15,{min:1,max:100,step:1})},{label:`Fog`}),marking:R.Group({enabled:R.Boolean(!0),highlightEdgeColor:R.Color(10066329,{label:`Highlight edge`}),selectEdgeColor:R.Color(16776960,{label:`Select edge`}),ghostEdgeStrength:R.Numeric(.3,{min:0,max:1,step:.01})},{label:`Marking`})},qr={mode:R.Select(`perspective`,[[`perspective`,`Perspective`],[`orthographic`,`Orthographic`]]),fov:R.Numeric(45,{min:10,max:130,step:1},{label:`Field of view`}),clipping:R.Group({radius:R.Numeric(100,{min:0,max:100,step:1}),far:R.Boolean(!0),minNear:R.Numeric(5,{min:.1,max:100,step:.1},{label:`Min near`})},{label:`Clipping`}),cameraResetDurationMs:R.Numeric(250,{min:0,max:1e3,step:1},{label:`Reset duration (ms)`}),sceneRadiusFactor:R.Numeric(1,{min:1,max:10,step:.1},{label:`Scene radius factor`}),manualReset:R.Boolean(!1,{label:`Manual reset`,description:`Do not reset the camera when the scene changes.`})},Jr={pickPadding:R.Numeric(3,{min:0,max:10,step:1},{label:`Pick padding (px)`}),userInteractionReleaseMs:R.Numeric(250,{min:0,max:1e3,step:1},{label:`Interaction release (ms)`}),trackball:R.Group({rotateSpeed:R.Numeric(5,{min:1,max:10,step:1}),zoomSpeed:R.Numeric(7,{min:1,max:15,step:1}),panSpeed:R.Numeric(1,{min:.1,max:5,step:.1}),staticMoving:R.Boolean(!0,{label:`No inertia`})},{label:`Trackball`}),pointer:R.Group({enabled:R.Boolean(!0)},{label:`Pointer`})},Yr={resolutionMode:R.Select(`auto`,[[`auto`,`Auto`],[`scaled`,`Scaled`],[`native`,`Native`]]),pixelScale:R.Numeric(1,{min:.1,max:2,step:.05}),pickScale:R.Numeric(.25,{min:.1,max:1,step:.05}),transparency:R.Select(`blended`,[[`blended`,`Weighted, blended`],[`wboit`,`Weighted, order-independent`],[`dpoit`,`Depth peeling`]]),dpoitIterations:R.Numeric(2,{min:1,max:10,step:1},{label:`Depth peeling iterations`}),multiSample:$(!0,{sampleLevel:R.Numeric(2,{min:0,max:5,step:1})},{label:`Multi-sampling`}),hiZ:R.Boolean(!1,{label:`Hi-Z culling`})},Xr={theme:R.Select(`auto`,[[`auto`,`Follow the system`],[`light`,`Light`],[`dark`,`Dark`],[`blue`,`Blue`]]),layout:R.Select(`auto`,[[`auto`,`Auto (compact when narrow)`],[`desktop`,`Desktop`],[`compact`,`Compact`]]),pinPanel:R.Boolean(!1,{label:`Pin the panel`,description:`Keep the panel beside the canvas.`}),sequence:R.Boolean(!0,{label:`Sequence`,description:`Show the sequence above the canvas.`}),tooltips:R.Boolean(!0,{label:`Tooltips`})},Zr={representation:R.Group({chemicalComponentDictionary:$(!0,{},{label:`wwPDB Chemical Component Dictionary`})},{label:`Representation`,isExpanded:!0}),interaction:R.Group({highlightLoci:$(!0,{mark:R.Boolean(!0)},{label:`Highlight Loci on Canvas`}),selectLoci:$(!0,{mark:R.Boolean(!0)},{label:`Select Loci on Canvas`}),defaultLociLabel:$(!0,{},{label:`Provide Default Loci Label`}),focusLoci:$(!0,{},{label:`Representation Focus Loci`}),cameraFocusLoci:$(!0,{minRadius:R.Numeric(8,{min:1,max:50,step:1}),extraRadius:R.Numeric(4,{min:0,max:20,step:.5}),durationMs:R.Numeric(250,{min:0,max:1e3,step:1})},{label:`Camera Focus Loci on Canvas`}),axisHelper:$(!0,{},{label:`Camera Axis Helper`}),cameraControls:$(!0,{},{label:`Camera Controls on Canvas`}),snapshotControls:$(!0,{},{label:`Snapshot Controls`}),structureFocus:$(!0,{expandRadius:R.Numeric(5,{min:1,max:10,step:1})},{label:`Structure Focus Representation`})},{label:`Interaction`,isExpanded:!0}),customProperties:R.Group({structureInfo:$(!0,{},{label:`Structure Info`}),accessibleSurfaceArea:$(!0,{},{label:`Accessible Surface Area`}),sifts:$(!0,{},{label:`SIFTS Mapping`}),interactions:$(!0,{},{label:`Interactions`}),validation:$(!1,{},{label:`wwPDB Validation Report`})},{label:`Custom Properties`,isExpanded:!0})},Qr={renderer:R.Group({exposure:R.Numeric(1,{min:0,max:3,step:.01}),ambientIntensity:R.Numeric(.4,{min:0,max:2,step:.01}),lightIntensity:R.Numeric(.6,{min:0,max:2,step:.01}),backgroundOpacity:R.Numeric(1,{min:0,max:1,step:.01})},{label:`Renderer`}),handle:$(!1,{},{label:`Handle`}),xr:R.Group({minTargetDistance:R.Numeric(.4,{min:0,max:1,step:.01}),disablePostprocessing:R.Boolean(!0)},{label:`XR`})}})))()}function ei(e,t){if(!t?.length)return e;let n=new Set(t.map(e=>e.id));return[...e.filter(e=>!n.has(e.id)),...t]}function ti(){return{id:`blank`,title:`Blank`,icon:`square`,activate:({background:e})=>({commands:new xn({context:P({}).asReadonly,formats:{get:()=>void 0}}),canvas:()=>s(qe,{empty:!1,background:e}),empty:O(!1)})}}function ni(e){let{mode:t,app:n}=e,r=new Ct({compactRail:!!e.compact,docks:{right:{pinned:!!e.pinned,collapsed:!!e.noPanel}}}),i=new Tt,o=P(!1),c=P(void 0),l=e=>{c.set(e),o.set(!0)},u=new _t(()=>document.documentElement),d=new Ot(document.documentElement.dataset.mspTheme??`light`);d.applyTo(document.documentElement);let f=e.addOn?.({shell:r,status:i,loaded:e.loaded}),p=Gr();r.registerTabs(ei([{id:`log`,title:`Log`,icon:`scroll-text`,order:2.5,place:`foot`,render:et(()=>s(xr,{status:i}))},{id:`settings`,title:`Settings`,icon:`settings`,order:3,place:`foot`,render:et(()=>s(Tn,{model:p}))}],f?.tabs));let m=t.activate({shell:r,status:i,loaded:e.loaded,background:e.background,openCommandMenu:l,modes:n?.modes??[t],mode:t.id,switchMode:e=>n?.switchMode(e)}),h=m.empty??O(!e.loaded),g=h.pipe(k(e=>!e));r.registerToolbar([{id:`theme`,priority:100,icon:`sun`,title:`Theme`,face:d.theme.pipe(k(e=>{let t=Dt.find(t=>t.id===e);return{icon:t.icon,title:`Theme: ${t.title}`}})),run:()=>d.next()},{id:`palette`,priority:-1,icon:`command`,title:`Command menu`,caption:Xe({key:`k`,mod:!0}),run:()=>l()},u.mode===`fullscreen`?{id:`expand`,place:`canvas`,group:`canvas`,visible:g,icon:`fullscreen`,title:`Fullscreen`,pressed:u.active,run:()=>u.toggle()}:{id:`expand`,place:`canvas`,group:`canvas`,visible:g,icon:`maximize-2`,title:`Expand`,run:()=>i.post(`Expanded`),menu:[{id:`fullscreen`,label:`Fullscreen`,icon:`fullscreen`,hint:`The whole screen, not just the page`,disabled:u.unavailableReason,pressed:u.active,run:()=>u.toggle()}]}]),r.registerTabs([{id:`help`,title:`Help`,icon:`circle-help`,order:2.8,place:`foot`,render:et(()=>s(kn,{commands:m.commands,bindings:m.bindings??[]}))}]),m.commands.register([{id:`help.show`,title:`Keyboard and mouse`,alias:[`help`,`shortcuts`,`keys`,`bindings`,`controls`],category:`Help`,icon:`circle-help`,shortcut:{key:`?`},run:()=>(r.show(`help`),{message:``})}]),m.commands.register([{id:`shell.toggle-rail`,title:`Show or hide the panel rail`,alias:[`rail`,`sidebar`,`panels`,`compact`],category:`View`,icon:`prism`,run:()=>(r.toggleRail(),{message:``})}]);let _=n&&n.modes.length>1?[{id:`app.switch-mode`,title:`Switch mode…`,alias:[`mode`,`viewer`,`story`,`start over`],category:`View`,icon:`prism`,run:()=>(n.switchMode(),{message:``})}]:[];_.length&&m.commands.register(_),f?.pages?.length&&r.registerPages(f.pages),f?.commands?.length&&m.commands.register(f.commands);let v=m.commands.outcomes.subscribe(e=>{e.kind===`done`&&e.result.message&&i.post(e.result.message),e.kind===`done`?f?.commandDone?.(e.result.message??e.command.title,e.command.id):(e.kind===`failed`||e.kind===`blocked`)&&i.post(e.message,`warning`)}),y=e=>{(z()?e.metaKey:e.ctrlKey)&&(e.key.toLowerCase()===`k`||e.shiftKey&&e.key.toLowerCase()===`p`)?(e.preventDefault(),l()):!o.value&&m.commands.handleKey(e,z())&&e.preventDefault()};window.addEventListener(`keydown`,y),m.start&&r.show(m.start),r.mount(),i.mount(),e.openExportAt&&r.openOverlay(`export`,void 0,e.openExportAt),e.openCard&&r.openOverlay(e.openCard),e.openTab&&r.show(e.openTab),e.openPage&&r.openPage(e.openPage,e.openPageAt),e.commandMenu&&o.set(!0),a(()=>{window.removeEventListener(`keydown`,y),v.unsubscribe(),m.dispose?.(),r.unmount(),i.unmount()});let b=e.background??`#ffffff`;return s(Br,{shell:r,status:i,canvas:m.canvas?.()??null,overlays:m.overlays?.()??null,playback:m.playback?.()??null,ink:e.ink??ft(b),context:m.context,commandMenu:s(D,{when:o,children:()=>s(It,{manager:m.commands,prefixes:m.prefixes,group:c.value,assistant:f?.assistant,onClose:()=>{o.set(!1),c.set(void 0)}})}),agent:f?.agent,canvasLead:m.canvasLead?.()??null,canvasAside:m.canvasAside?.()??null,onOpenLog:()=>r.show(`log`),empty:h,onDropFiles:m.onDropFiles,dropFormats:m.dropFormats})}function ri(e){let t=t=>e.modes.find(e=>e.id===t),n=0,r=e=>({mode:e,n:++n}),i=P(t(e.start)?r(t(e.start)):void 0),a=P(!1),o={modes:e.modes,switchMode:e=>{let n=t(e);n?queueMicrotask(()=>i.set(r(n))):a.set(!0)}},c=e=>{a.set(!1);let n=t(e);n&&n.id!==i.value?.mode.id&&queueMicrotask(()=>i.set(r(n)))};return l(`div`,{style:`position: relative; height: 100%`,children:[s(ye,{component:i.asReadonly.pipe(k(n=>n?()=>s(ni,{...e,mode:n.mode,app:o}):()=>s(Xt,{variant:`splash`,modes:e.modes,onChoose:e=>i.set(r(t(e)))})))}),s(D,{when:a,children:()=>s(Xt,{variant:`welcome`,modes:e.modes,active:i.asReadonly.pipe(k(e=>e?.mode.id??``)),notice:`Switching starts a new session: what is loaded now goes. Stories are kept in this browser.`,onChoose:c,onCancel:()=>a.set(!1)})})]})}function ii(){return(ii=e((()=>{A(),ve(),B(),T(),o(),tt(),gt(),N(),vt(),wt(),Et(),kt(),Jt(),Je(),Zt(),Cn(),Dn(),Pn(),Cr(),Wr(),$r(),d()})))()}export{Je as A,gt as C,Xe as D,tt as E,Ge as M,B as O,mt as S,et as T,Jt as _,Wr as a,Ct as b,hr as c,qn as d,Pn as f,Zt as g,Xt as h,ti as i,Ke as j,qe as k,Y as l,Cn as m,ni as n,xr as o,xn as p,ii as r,Cr as s,ri as t,Kn as u,Nt as v,lt as w,wt as x,jt as y};