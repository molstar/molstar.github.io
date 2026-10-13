import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,K as n,M as r,N as i,P as a,Q as o,W as s,X as c,Y as l,Z as u,b as d,d as f,f as p,m,n as h,o as g,p as _,q as v,r as y,s as b,t as x,v as ee,y as te,z as ne}from"./jsx-runtime-pJJ4pzd1.js";import{a as re,i as ie,n as S,o as ae,r as oe,t as C}from"./map-BLVP9Oyc.js";import{n as w,o as se,r as T,s as ce}from"./observable-state-U0Aegh1x.js";import{_ as le,a as ue,b as de,c as fe,l as pe,n as me,o as he,r as ge,s as E,t as _e,u as ve,v as ye,y as be}from"./params-form-Cr0vP-Xz.js";import{C as xe,T as Se,b as Ce,d as D,f as we,g as Te,h as Ee,i as O,m as De,n as k,p as A,r as j,t as Oe,u as M,v as ke,w as Ae,y as je}from"./control-flow-D80wAH1n.js";import{n as Me,t as N}from"./combineLatest-BuVl0X9y.js";import{n as P,t as F}from"./icon-Cd9kBD44.js";import{n as I,t as L}from"./scroll-area-W5mfuQm0.js";import{n as Ne,t as Pe}from"./keyed-selector-Cr4ED1rO.js";import{n as Fe,t as Ie}from"./wordmark-D5tvrxoo.js";import{n as Le,t as Re}from"./text-input-BVt-QcfS.js";import{n as ze,t as R}from"./button-nz8xXRSW.js";import{n as Be,t as Ve}from"./tooltip-DyNTZac4.js";var He;function Ue(){return(Ue=e((()=>{l(),i(),He=function(e){s(t,e);function t(t,n){return e.call(this)||this}return t.prototype.schedule=function(e,t){return t===void 0&&(t=0),this},t}(r)})))()}var z;function We(){return(We=e((()=>{l(),z={setInterval:function(e,t){var r=[...arguments].slice(2),i=z.delegate;return i?.setInterval?i.setInterval.apply(i,v([e,t],n(r))):setInterval.apply(void 0,v([e,t],n(r)))},clearInterval:function(e){return(z.delegate?.clearInterval||clearInterval)(e)},delegate:void 0}})))()}var Ge;function Ke(){return(Ke=e((()=>{l(),Ue(),We(),Ge=function(e){s(t,e);function t(t,n){var r=e.call(this,t,n)||this;return r.scheduler=t,r.work=n,r.pending=!1,r}return t.prototype.schedule=function(e,t){if(t===void 0&&(t=0),this.closed)return this;this.state=e;var n=this.id,r=this.scheduler;return n!=null&&(this.id=this.recycleAsyncId(r,n,t)),this.pending=!0,this.delay=t,this.id=this.id??this.requestAsyncId(r,this.id,t),this},t.prototype.requestAsyncId=function(e,t,n){return n===void 0&&(n=0),z.setInterval(e.flush.bind(e,this),n)},t.prototype.recycleAsyncId=function(e,t,n){if(n===void 0&&(n=0),n!=null&&this.delay===n&&this.pending===!1)return t;t!=null&&z.clearInterval(t)},t.prototype.execute=function(e,t){if(this.closed)return Error(`executing a cancelled action`);this.pending=!1;var n=this._execute(e,t);if(n)return n;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(e,t){var n=!1,r;try{this.work(e)}catch(e){n=!0,r=e||Error(`Scheduled action threw falsy error`)}if(n)return this.unsubscribe(),r},t.prototype.unsubscribe=function(){if(!this.closed){var t=this,n=t.id,r=t.scheduler,i=r.actions;this.work=this.state=this.scheduler=null,this.pending=!1,a(i,this),n!=null&&(this.id=this.recycleAsyncId(r,n,null)),this.delay=null,e.prototype.unsubscribe.call(this)}},t}(He)})))()}var qe;function Je(){return(Je=e((()=>{de(),qe=function(){function e(t,n){n===void 0&&(n=e.now),this.schedulerActionCtor=t,this.now=n}return e.prototype.schedule=function(e,t,n){return t===void 0&&(t=0),new this.schedulerActionCtor(this,e).schedule(n,t)},e.now=be.now,e}()})))()}var Ye;function Xe(){return(Xe=e((()=>{l(),Je(),Ye=function(e){s(t,e);function t(t,n){n===void 0&&(n=qe.now);var r=e.call(this,t,n)||this;return r.actions=[],r._active=!1,r}return t.prototype.flush=function(e){var t=this.actions;if(this._active)t.push(e);else{var n;this._active=!0;do if(n=e.execute(e.state,e.delay))break;while(e=t.shift());if(this._active=!1,n){for(;e=t.shift();)e.unsubscribe();throw n}}},t}(qe)})))()}var Ze,Qe;function $e(){return($e=e((()=>{Ke(),Xe(),Ze=new Ye(Ge),Qe=Ze})))()}function et(e){return e instanceof Date&&!isNaN(e)}function tt(e,t,n,r,i,a,o,s){var c=[],l=0,u=0,d=!1,f=function(){d&&!c.length&&!l&&t.complete()},p=function(e){return l<r?m(e):c.push(e)},m=function(e){a&&t.next(e),l++;var s=!1;je(n(e,u++)).subscribe(oe(t,function(e){i?.(e),a?p(e):t.next(e)},function(){s=!0},void 0,function(){if(s)try{l--;for(var e=function(){var e=c.shift();o?Te(t,o,function(){return m(e)}):m(e)};c.length&&l<r;)e();f()}catch(e){t.error(e)}}))};return e.subscribe(oe(t,p,function(){d=!0,f()})),function(){s?.()}}function nt(){return(nt=e((()=>{ke(),ie()})))()}function rt(e,t,n){return n===void 0&&(n=1/0),ne(t)?rt(function(n,r){return S(function(e,i){return t(n,e,r,i)})(je(e(n,r)))},n):(typeof t==`number`&&(n=t),ae(function(t,r){return tt(t,r,e,n)}))}function it(){return(it=e((()=>{C(),ke(),re(),nt()})))()}function at(e){return e===void 0&&(e=1/0),rt(d,e)}function ot(){return(ot=e((()=>{it()})))()}function st(){return at(1)}function ct(){return(ct=e((()=>{ot()})))()}function lt(){var e=[...arguments];return st()(De(e,xe(e)))}function ut(){return(ut=e((()=>{ct(),Ce(),Ee()})))()}function dt(e,t,n){e===void 0&&(e=0),n===void 0&&(n=Qe);var r=-1;return t!=null&&(Se(t)?n=t:r=t),new ee(function(t){var i=et(e)?+e-n.now():e;i<0&&(i=0);var a=0;return n.schedule(function(){t.closed||(t.next(a++),0<=r?this.schedule(void 0,r):t.complete())},i)})}function ft(){return(ft=e((()=>{te(),$e(),Ae()})))()}function pt(e,t,n,r,i){return function(a,o){var s=n,c=t,l=0;a.subscribe(oe(o,function(t){var n=l++;c=s?e(c,t,n):(s=!0,t),r&&o.next(c)},i&&(function(){s&&o.next(c),o.complete()})))}}function mt(){return(mt=e((()=>{ie()})))()}function ht(e,t){return ae(pt(e,t,arguments.length>=2,!0))}function gt(){return(gt=e((()=>{re(),mt()})))()}function _t(){var e=[...arguments],t=xe(e);return ae(function(n,r){(t?lt(e,n,t):lt(e,n)).subscribe(r)})}function vt(){return(vt=e((()=>{ut(),Ce(),re()})))()}function yt(e,t){return ae(function(n,r){var i=null,a=0,o=!1,s=function(){return o&&!i&&r.complete()};n.subscribe(oe(r,function(n){i?.unsubscribe();var o=0,c=a++;je(e(n,c)).subscribe(i=oe(r,function(e){return r.next(t?t(n,e,c,o++):e)},function(){i=null,s()}))},function(){o=!0,s()}))})}function bt(){return(bt=e((()=>{ke(),re(),ie()})))()}function xt(e){let t=e.background??`radial-gradient(circle at 50% 45%, #ffffff 0%, #eef0f3 70%, #dfe3e8 100%)`;if(e.empty)return h(`div`,{style:{position:`absolute`,inset:0,background:t}});let n=[];for(let e=0;e<90;e++){let t=e/90,r=120+t*560+40*Math.sin(t*19),i=300+150*Math.sin(t*7.3)+30*Math.cos(t*23),a=200+160*t;n.push(h(`circle`,{cx:r,cy:i,r:14+4*Math.sin(t*31),fill:`hsl(${a} 55% 60%)`,"data-index":e}))}return h(`div`,{style:{position:`absolute`,inset:0,background:t},onPointerOver:t=>{let n=t.target.getAttribute?.(`data-index`);e.onHover?.(n==null?void 0:Number(n))},onPointerLeave:()=>e.onHover?.(void 0),children:y(`svg`,{viewBox:`0 0 800 600`,preserveAspectRatio:`xMidYMid meet`,style:`width: 100%; height: 100%`,children:[h(`defs`,{children:y(`radialGradient`,{id:`msp-placeholder-shade`,cx:`35%`,cy:`35%`,r:`65%`,children:[h(`stop`,{offset:`0%`,"stop-color":`#fff`,"stop-opacity":`0.55`}),h(`stop`,{offset:`100%`,"stop-color":`#000`,"stop-opacity":`0.2`})]})}),h(`g`,{children:n}),h(`g`,{style:`mix-blend-mode: soft-light; pointer-events: none`,children:n.map(e=>h(`circle`,{cx:e.getAttribute(`cx`),cy:e.getAttribute(`cy`),r:e.getAttribute(`r`),fill:`url(#msp-placeholder-shade)`}))})]})})}function St(){return(St=e((()=>{x()})))()}function B(){if(typeof navigator>`u`)return!1;let e=navigator.userAgentData?.platform??navigator.platform;return/mac|iphone|ipad|ipod/i.test(e??``)}function Ct(e,t=B()){let n=t?Tt:Et,r=[];t?(e.alt&&r.push(n.alt),e.shift&&r.push(n.shift),e.mod&&r.push(n.mod)):(e.mod&&r.push(n.mod),e.alt&&r.push(n.alt),e.shift&&r.push(n.shift));let i=e.key.toLowerCase();return r.push(Dt[i]??(i.length===1?i.toUpperCase():e.key)),r}function wt(e,t=B()){return Ct(e,t).join(t?``:`+`)}var Tt,Et,Dt;function V(){return(V=e((()=>{Tt={mod:`⌘`,alt:`⌥`,shift:`⇧`},Et={mod:`Ctrl`,alt:`Alt`,shift:`Shift`},Dt={arrowup:`↑`,arrowdown:`↓`,arrowleft:`←`,arrowright:`→`,escape:`Esc`,enter:`↵`," ":`Space`}})))()}function Ot(e){return{mount:(t,n)=>f(()=>e({ctx:n}),t)}}function kt(){return(kt=e((()=>{b()})))()}function At(e){let t=e=>{let t=e/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4};return .2126*t(e>>16&255)+.7152*t(e>>8&255)+.0722*t(e&255)}function jt(e){return e<Pt?`dark`:`light`}function Mt(e){return jt(At(e))}function Nt(e){let t=e.trim(),n=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(t)?.[1];if(n)return Number.parseInt(n.length===3?[...n].map(e=>e+e).join(``):n,16);let r=/^rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)/i.exec(t);if(r)return Number(r[1])<<16|Number(r[2])<<8|Number(r[3])}var Pt;function Ft(){return(Ft=e((()=>{Pt=.179})))()}var It;function Lt(){return(Lt=e((()=>{w(),It=class{#e=T(!1);#t=()=>this.#e.set(document.fullscreenElement===this.target());constructor(e){this.target=e,this.available=typeof document<`u`&&!!document.fullscreenEnabled,this.embedded=typeof window<`u`&&window.self!==window.top,typeof document<`u`&&document.addEventListener(`fullscreenchange`,this.#t)}get mode(){return this.embedded&&this.available?`fullscreen`:`expand`}get active(){return this.#e.asReadonly}get unavailableReason(){return this.available?void 0:`Not allowed by the page Mol* is embedded in`}async toggle(){if(this.available)try{document.fullscreenElement?await document.exitFullscreen():await this.target()?.requestFullscreen()}catch(e){console.error(e)}}dispose(){typeof document<`u`&&document.removeEventListener(`fullscreenchange`,this.#t)}}})))()}var Rt,zt,Bt,Vt,Ht;function Ut(){return(Ut=e((()=>{w(),t(),Rt=[`left`,`right`,`top`,`bottom`],zt={left:300,right:340,top:88,bottom:220},Bt=180,Vt=class{#e;#t;#n;constructor(e,t){this.id=e,this.#e=T(t),this.#t=T([]),this.#n=T(void 0)}get state(){return this.#e.asReadonly}get tabs(){return this.#t.asReadonly}get active(){return this.#n.asReadonly}update(e,t){this.#e.update(e);let n=this.#e.value,r=n.tabs.map(e=>t.get(e)).filter(e=>!!e);this.#t.set(r),this.#n.set(n.collapsed?void 0:r.find(e=>e.id===n.active))}},Ht=class extends o{#e=new Map;#t=new Map;#n=new Map;#r=T(void 0);#i;#a=T(`auto`);#o=T(0);#s=T(`desktop`);#c=T(void 0);#l=T(void 0);#u=T([]);#d=T([]);#f;#p=T([]);#m=new Map;#h;constructor(e={}){super(),this.#h=e.compactWidth??720,this.#f=e.buttons??{},this.#i={};for(let t of Rt)this.#i[t]=new Vt(t,{tabs:[],active:void 0,size:zt[t],collapsed:!1,floating:t===`right`||t===`top`,pinned:!1,...e.docks?.[t]});this.#a.set(e.mode??`auto`),this.#y()}dock(e){return this.#i[e]}get mode(){return this.#s.asReadonly}#g=new Map;sectionOpen(e,t){return this.#g.get(`${e}\n${t}`)}setSectionOpen(e,t,n){this.#g.set(`${e}\n${t}`,n)}get tabFocus(){return this.#l.asReadonly}get overlay(){return this.#c.asReadonly}get page(){return this.#r.asReadonly}get toolbar(){return this.#d.asReadonly}sections(e){let t=this.#m.get(e);if(!t){let n=T([]),r=t=>n.set(t.filter(t=>t.slot===e).sort((e,t)=>(e.order??0)-(t.order??0)));r(this.#p.value),this.subscribePermanently(this.#p.asReadonly,r),t=n.asReadonly,this.#m.set(e,t)}return t}registerSections(e){return this.#p.set([...this.#p.value,...e]),()=>this.#p.set(this.#p.value.filter(t=>!e.includes(t)))}registerToolbar(e){return this.#u.set((e=>[...e].sort((e,t)=>(e.order??0)-(t.order??0)))([...this.#u.value,...e])),this.#_(),()=>{this.#u.set(this.#u.value.filter(t=>!e.includes(t))),this.#_()}}setButtons(e){this.#f={...this.#f,...e},this.#_()}#_(){this.#d.set(this.#u.value.filter(e=>this.#f[e.id]!==!1))}get layout(){let e={};for(let t of Rt)e[t]=this.#i[t].state.value;return{docks:e,mode:this.#a.value}}registerTabs(e){let t=[...e].sort((e,t)=>(e.order??0)-(t.order??0));for(let e of t){this.#e.set(e.id,e);let t=this.#v(e.id)??this.#i[e.dock??`right`],n=t.state.value,r=n.tabs;if(!r.includes(e.id)){let t=e.order??0,n=r.findIndex(e=>(this.#e.get(e)?.order??0)>t);r=n<0?[...r,e.id]:[...r.slice(0,n),e.id,...r.slice(n)]}t.update({tabs:r,active:n.active??e.id},this.#e)}return()=>{for(let e of t){if(this.#e.get(e.id)!==e)continue;this.#e.delete(e.id);let t=this.#v(e.id);if(!t)continue;let n=t.state.value,r=n.tabs.filter(t=>t!==e.id);t.update({tabs:r,active:n.active===e.id?r[0]:n.active},this.#e)}}}registerOverlays(e){for(let t of e)this.#t.set(t.id,t);return()=>{for(let t of e)this.#t.get(t.id)===t&&(this.#t.delete(t.id),this.#c.value?.overlay===t&&this.closeOverlay())}}registerPages(e){for(let t of e)this.#n.set(t.id,t);return()=>{for(let t of e)this.#n.get(t.id)===t&&(this.#n.delete(t.id),this.#r.value?.page===t&&this.closePage())}}openPage(e,t){let n=this.#n.get(e);n&&(this.closeOverlay(),this.#r.set({page:n,...t?{focus:t}:{}}))}closePage(){this.#r.set(void 0)}show(e,t){let n=this.#v(e);n&&(t?this.#l.set({tab:e,section:t}):this.#l.value?.tab===e&&this.#l.set(void 0),n.update({active:e,collapsed:!1},this.#e))}select(e){let t=this.#v(e);if(!t)return;this.#l.value?.tab===e&&this.#l.set(void 0);let n=t.state.value;n.active===e&&!n.collapsed?t.update({collapsed:!0},this.#e):t.update({active:e,collapsed:!1},this.#e)}toggle(e){let t=this.#i[e];t.update({collapsed:!t.state.value.collapsed},this.#e)}move(e,t,n){let r=this.#v(e);if(!r||!this.#e.has(e))return;let i=r.state.value,a=i.tabs.filter(t=>t!==e);r.update({tabs:a,active:i.active===e?a[0]:i.active},this.#e);let o=this.#i[t],s=[...o.state.value.tabs.filter(t=>t!==e)];s.splice(n??s.length,0,e),o.update({tabs:s,active:e,collapsed:!1},this.#e)}setSize(e,t){this.#i[e].update({size:Math.max(Bt,Math.round(t))},this.#e)}setFloating(e,t){this.#i[e].update({floating:t},this.#e)}setPinned(e,t){this.#i[e].update({pinned:t},this.#e)}setMode(e){this.#a.set(e),this.#y()}setWidth(e){this.#o.set(e),this.#y()}openOverlay(e,t,n){let r=this.#t.get(e);r&&this.#c.set({overlay:r,...t?{anchor:t}:{},...n?{focus:n}:{}})}toggleOverlay(e,t){this.#c.value?.overlay.id===e?this.closeOverlay():this.openOverlay(e,t)}closeOverlay(){this.#c.set(void 0)}#v(e){for(let t of Rt)if(this.#i[t].state.value.tabs.includes(e))return this.#i[t]}#y(){let e=this.#a.value,t=this.#o.value;this.#s.set(e===`auto`?t>0&&t<this.#h?`compact`:`desktop`:e)}}})))()}var Wt;function Gt(){return(Gt=e((()=>{w(),t(),Wt=class extends o{#e=T(void 0);#t=T([]);#n=T([]);#r=T([]);#i=0;#a;constructor(e={}){super(),this.options=e}get current(){return this.#e.asReadonly}get history(){return this.#t.asReadonly}get tasks(){return this.#n.asReadonly}get chips(){return this.#r.asReadonly}post(e,t=`info`){let n={id:++this.#i,kind:t,text:e,time:new Date};this.#t.set([n,...this.#t.value].slice(0,this.options.historySize??200)),this.#e.set(n),clearTimeout(this.#a),t!==`error`&&(this.#a=setTimeout(()=>this.dismiss(n.id),this.options.fadeMs??4e3))}dismiss(e){(e===void 0||this.#e.value?.id===e)&&(clearTimeout(this.#a),this.#e.set(void 0))}setTasks(e){this.#n.set(e)}setChips(e){this.#r.set(e)}onRetire(){clearTimeout(this.#a)}}})))()}var H,Kt;function qt(){return(qt=e((()=>{w(),H=[{id:`light`,title:`Light`,icon:`sun`},{id:`dark`,title:`Dark`,icon:`moon`},{id:`blue`,title:`Blue`,icon:`palette`},{id:`auto`,title:`Auto (system)`,icon:`sun-moon`}],Kt=class{#e;constructor(e=`light`){this.#e=T(e)}get theme(){return this.#e.asReadonly}get value(){return this.#e.value}set(e){this.#e.set(e)}next(){let e=H.findIndex(e=>e.id===this.#e.value);this.#e.set(H[(e+1)%H.length].id)}applyTo(e){let t=this.#e.asReadonly.subscribe(t=>{e.dataset.mspTheme=t});return()=>t.unsubscribe()}}})))()}function Jt(e,t){let n=e.toLowerCase(),r=t.toLowerCase().trim();if(!r)return 0;let i=0,a=0,o=-2;for(let e=0;e<n.length&&a<r.length;e++)n[e]===r[a]&&(i+=e===o+1?3:1,e===0?i+=4:/[\s._:-]/.test(n[e-1])&&(i+=2),o=e,a++);return a===r.length?i-n.length*.01:void 0}function Yt(e,t,n){return t.trim()?e.map(e=>({item:e,s:Jt(n(e),t)})).filter(e=>e.s!==void 0).sort((e,t)=>t.s-e.s).map(e=>e.item):[...e]}function Xt(e,t){let n=e.toLowerCase(),r=t.toLowerCase().trim(),i=[],a=0;for(let e=0;e<n.length&&a<r.length;e++)n[e]===r[a]&&(i.push(e),a++);return a===r.length?i:[]}function Zt(){return(Zt=e((()=>{})))()}var U;function Qt(){return(Qt=e((()=>{u(),U={ask:`msp-command-menu-ask`,askIcon:`msp-command-menu-askIcon`,askKeys:`msp-command-menu-askKeys`,askLabel:`msp-command-menu-askLabel`,askText:`msp-command-menu-askText`,before:`msp-command-menu-before`,caption:`msp-command-menu-caption`,command:`msp-command-menu-command`,crumb:`msp-command-menu-crumb`,empty:`msp-command-menu-empty`,error:`msp-command-menu-error`,footer:`msp-command-menu-footer`,head:`msp-command-menu-head`,headIcon:`msp-command-menu-headIcon`,hint:`msp-command-menu-hint`,input:`msp-command-menu-input`,keys:`msp-command-menu-keys`,list:`msp-command-menu-list`,listContent:`msp-command-menu-listContent`,menu:`msp-command-menu-menu`,"menu-fade":`msp-command-menu-menu-fade`,"menu-in":`msp-command-menu-menu-in`,message:`msp-command-menu-message`,more:`msp-command-menu-more`,proposed:`msp-command-menu-proposed`,row:`msp-command-menu-row`,rowChevron:`msp-command-menu-rowChevron`,rowIcon:`msp-command-menu-rowIcon`,rowMeta:`msp-command-menu-rowMeta`,rowTitle:`msp-command-menu-rowTitle`,run:`msp-command-menu-run`,scrim:`msp-command-menu-scrim`,sentence:`msp-command-menu-sentence`,spacer:`msp-command-menu-spacer`,tail:`msp-command-menu-tail`,token:`msp-command-menu-token`,value:`msp-command-menu-value`},c(`views/command-menu/command-menu.module.css`,`@layer msp.components {
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
`)})))()}function $t(e,t,n,r){let i=e.assistant,a=n.trim();return i.ready()?{id:`assistant-ask`,label:`Ask AI assistant`,detail:`“${a}”`,icon:`sparkles`,run:()=>{let e=i.propose(a);if(e)return r(a),t.open(e.command,e.tail).kind===`form`;i.ask(a)}}:{id:`assistant-setup`,label:`Set up the assistant to ask`,detail:`“${a}”`,icon:`sparkles`,run:()=>i.setup()}}function en(e){let{manager:t}=e,n=T(void 0);return p(t.active,e=>{e||n.set(void 0)}),p(t.outcomes,t=>{t.kind===`done`&&e.onClose()}),m(()=>t.close()),h(`div`,{class:U.scrim,onPointerDown:t=>{t.target===t.currentTarget&&e.onClose()},children:h(`div`,{class:U.menu,role:`dialog`,"aria-label":`Commands`,children:h(j,{when:t.active,fallback:()=>h(tn,{...e,onPropose:e=>n.set(e)}),children:r=>h(un,{manager:t,invocation:r,proposed:n.asReadonly,onClose:e.onClose})})})})}function tn(e){let{manager:t}=e,n=T(e.initial??``),r=T(e.group),i=T(0),a=T(void 0),o=[...e.prefixes??[],an(e,e=>_(e))],s=e=>o.find(t=>e.startsWith(t.char)),c=N([n.asReadonly,r.asReadonly,t.commands,t.groups]).pipe(S(([e,n])=>{let r=[],i=0,a=e=>{e.kind!==`caption`&&(e.index=i++),r.push(e)},o=s(e);if(o){for(let t of o.items(e.slice(o.char.length).trimStart()))a({kind:`item`,item:t,index:0});return r}if(!e.trim()){let{groups:e,commands:i}=t.children(n);if(n===void 0){let n=t.query(``);if(n.recent.length){a({kind:`caption`,label:`Recent`});for(let e of n.recent)a({kind:`match`,match:e,index:0})}e.length&&a({kind:`caption`,label:`Browse`})}for(let t of e)a({kind:`group`,group:t,index:0});if(n!==void 0){let e=new Set(i.map(e=>e.command.category)),t;for(let n of i)e.size>1&&n.command.category!==t&&(t=n.command.category,a({kind:`caption`,label:t})),a({kind:`match`,match:n,index:0});return r}let o=new Set(t.query(``).recent.map(e=>e.command)),s=new Map;for(let e of i){if(o.has(e.command))continue;let t=s.get(e.command.category);t?t.push(e):s.set(e.command.category,[e])}for(let[e,t]of s){a({kind:`caption`,label:e});for(let e of t)a({kind:`match`,match:e,index:0})}return r}let c=t.query(e),l=e=>n===void 0||t.inGroup(e.command,n);c.direct&&l(c.direct)&&a({kind:`match`,match:c.direct,tail:c.direct.tail,index:0});let u=t.groups.value.filter(r=>(n===void 0||t.groupPath(r.id).some(e=>e.id===n))&&r.id!==n&&(Jt(r.title,e)??-1)>=0);for(let e of u)a({kind:`group`,group:e,index:0});for(let e of c.matches)e.command!==c.direct?.command&&l(e)&&a({kind:`match`,match:e,index:0});return r}),ye({bufferSize:1,refCount:!0})),l=[],u=()=>l.filter(e=>e.kind!==`caption`),d=()=>{e.assistant&&(e.assistant.ready()?n.value.trim()&&!s(n.value)&&!$t(e,t,n.value,e.onPropose).run()&&!t.active.value&&e.onClose():(e.assistant.setup(),e.onClose()))},f=N([n.asReadonly,c]).pipe(S(([e,t])=>!!e.trim()&&!s(e)&&!t.some(e=>e.kind!==`caption`)),M());p(c,e=>{l=e,i.value>=u().length&&i.set(0)});let m=Ne(i.asReadonly),_=e=>{n.set(e),te.value=e,i.set(0),a.set(void 0)},v=e=>{r.set(e),_(``)},b=n=>{if(n.kind===`group`)return v(n.group.id);if(n.kind===`item`){!n.item.run()&&!t.active.value&&e.onClose();return}if(n.match.blocked)return a.set(n.match.blocked);let r=t.open(n.match.command.id,n.tail,n.match.preset?.id);r.kind===`blocked`?a.set(r.reason):r.kind===`ran`&&e.onClose()},x=()=>{let e=t.groupPath(r.value);return e.length?(v(e[e.length-2]?.id),!0):!1},ee=N([n.asReadonly,r.asReadonly]).pipe(S(([e,n])=>{let r=s(e);return r?r.placeholder??r.title:n===void 0?`Search commands, or type ? for help`:`Search in ${t.groupPath(n).pop()?.title}`})),te=h(`input`,{class:U.input,type:`text`,role:`combobox`,"aria-expanded":`true`,"aria-controls":`msp-command-menu-list`,"aria-label":`Command`,placeholder:ee,spellcheck:!1,value:n,onInput:e=>{n.set(e.currentTarget.value),i.set(0),a.set(void 0)},onKeyDown:t=>{let n=u().length,r=!t.currentTarget.value;if(t.key===`ArrowDown`||t.key===`ArrowUp`)t.preventDefault(),n&&i.set((i.value+(t.key===`ArrowDown`?1:n-1))%n);else if(t.key===`Enter`){t.preventDefault();let e=u()[i.value];t.metaKey||t.ctrlKey?d():e?b(e):d()}else if(t.key===`ArrowRight`&&r){let e=u()[i.value];e?.kind===`group`&&(t.preventDefault(),v(e.group.id))}else(t.key===`Backspace`||t.key===`ArrowLeft`)&&r?x()&&t.preventDefault():t.key===`Escape`&&(t.preventDefault(),t.stopPropagation(),e.onClose())}});return queueMicrotask(()=>te.focus()),y(g,{children:[y(`div`,{class:U.head,children:[h(F,{name:`search`,size:15,class:U.headIcon}),h(k,{each:r.asReadonly.pipe(S(e=>t.groupPath(e))),children:e=>y(`button`,{type:`button`,class:U.crumb,onClick:()=>v(e.id),children:[e.title,h(F,{name:`chevron-right`,size:12})]})}),te]}),h(j,{when:a,children:e=>h(`p`,{class:U.message,children:e})}),h(L,{class:U.list,contentClass:U.listContent,id:`msp-command-menu-list`,role:`listbox`,"aria-label":`Commands`,children:h(k,{each:c,fallback:()=>h(`p`,{class:U.empty,children:e.assistant?`No command matches: ask AI assistant.`:`Nothing matches.`}),children:e=>{if(e.kind===`caption`)return h(`div`,{class:U.caption,children:e.label});let a=e.index,o=m.is(a),s=()=>i.set(a);return e.kind===`group`?h(on,{manager:t,group:e.group,selected:o,onPick:()=>b(e),onHover:s}):e.kind===`item`?h(sn,{item:e.item,selected:o,onPick:()=>b(e),onHover:s}):h(cn,{row:e,path:rn(t,e.match.command.group,r.value),inGroup:r.value!==void 0,query:n.asReadonly,selected:o,onPick:()=>b(e),onHover:s})}})}),e.assistant?h(nn,{ready:e.assistant.ready(),text:n.asReadonly.pipe(S(e=>s(e)?``:e.trim())),unmatched:f,onAsk:()=>{e.assistant?.ready()?n.value.trim()?d():te.focus():(e.assistant?.setup(),e.onClose())}}):null,h(fn,{hints:[[`↑↓`,`move`],[`↵`,`run`],...e.assistant?.ready()?[[B()?`⌘↵`:`Ctrl+↵`,`ask`]]:[],[`→`,`open group`],[`?`,`help`],[`esc`,`close`]]})]})}function nn(e){return e.ready?y(`button`,{type:`button`,class:U.ask,"data-default":e.unmatched.pipe(S(e=>e?``:void 0)),onClick:()=>e.onAsk(),children:[h(F,{name:`sparkles`,size:15,class:U.askIcon}),h(`span`,{class:U.askLabel,children:`Ask AI assistant`}),h(`span`,{class:U.askText,children:e.text.pipe(S(e=>e?`“${e}”`:`describe what you want, in your words`))}),h(`kbd`,{class:U.askKeys,children:e.unmatched.pipe(S(e=>e?`↵`:B()?`⌘↵`:`Ctrl+↵`))})]}):y(`button`,{type:`button`,class:U.ask,"data-setup":``,onClick:()=>e.onAsk(),children:[h(F,{name:`sparkles`,size:15,class:U.askIcon}),h(`span`,{class:U.askText,children:`Set up an AI assistant`})]})}function rn(e,t,n){let r=e.groupPath(t),i=n===void 0?-1:r.findIndex(e=>e.id===n);return r.slice(i+1).map(e=>e.title)}function an(e,t){return{char:`?`,title:`Help`,placeholder:`Prefixes and shortcuts`,items:n=>{let r=n.toLowerCase(),i=(e.prefixes??[]).map(e=>({id:`prefix:${e.char}`,label:`${e.char}  ${e.title}`,detail:e.placeholder,icon:`command`,run:()=>(t(e.char),!0)})),a=e.manager.commands.value.filter(e=>e.shortcut).map(t=>({id:`keys:${t.id}`,label:t.title,detail:wt(t.shortcut),icon:t.icon??`keyboard`,run:()=>{e.manager.open(t.id)}}));return[...e.manager.get(`help.show`)?[{id:`help:card`,label:`Keyboard and mouse`,detail:`The Help card`,icon:`circle-help`,run:()=>{e.manager.open(`help.show`)}}]:[],...i,...a].filter(e=>!r||e.label.toLowerCase().includes(r))}}}function on(e){let t=e.manager.groupPath(e.group.parent).map(e=>e.title),n=y(`div`,{class:U.row,role:`option`,"aria-selected":e.selected,onClick:()=>e.onPick(),onPointerMove:()=>e.onHover(),children:[h(`span`,{class:U.rowIcon,children:h(F,{name:e.group.icon??`list-tree`,size:15})}),h(`span`,{class:U.rowTitle,children:e.group.title}),h(`span`,{class:U.rowMeta,children:t.join(` › `)}),h(F,{name:`chevron-right`,size:14,class:U.rowChevron})]});return p(e.selected,e=>e&&queueMicrotask(()=>n.scrollIntoView?.({block:`nearest`}))),n}function sn(e){let{item:t}=e,n=y(`div`,{class:U.row,role:`option`,"aria-selected":e.selected,onClick:()=>e.onPick(),onPointerMove:()=>e.onHover(),children:[h(`span`,{class:U.rowIcon,children:t.icon?h(F,{name:t.icon,size:15}):null}),h(`span`,{class:U.rowTitle,children:t.label}),h(`span`,{class:U.rowMeta,children:t.detail})]});return p(e.selected,e=>e&&queueMicrotask(()=>n.scrollIntoView?.({block:`nearest`}))),n}function cn(e){let{match:t,tail:n}=e.row,r=t.command,i=t.preset?`${r.title.replace(/…$/,``)} ${t.preset.title}`:r.title,a=y(`div`,{class:U.row,role:`option`,"aria-selected":e.selected,"aria-disabled":t.blocked?`true`:void 0,onClick:()=>e.onPick(),onPointerMove:()=>e.onHover(),children:[h(`span`,{class:U.rowIcon,children:r.icon?h(F,{name:r.icon,size:15}):null}),y(`span`,{class:U.rowTitle,children:[e.query.pipe(S(e=>ln(i,n?``:e))),n?h(`span`,{class:U.tail,children:n}):null]}),h(`span`,{class:U.rowMeta,children:t.blocked??(e.path.length?e.path.join(` › `):e.inGroup?``:r.category)}),r.shortcut?h(`kbd`,{class:U.keys,children:wt(r.shortcut)}):null]});return p(e.selected,e=>{e&&queueMicrotask(()=>a.scrollIntoView?.({block:`nearest`}))}),a}function ln(e,t){let n=new Set(Xt(e,t));if(!n.size)return e;let r=[],i=``,a=!1,o=()=>{i&&=(r.push(a?h(`mark`,{children:i}):i),``)};for(let t=0;t<e.length;t++){let r=n.has(t);r!==a&&(o(),a=r),i+=e[t]}return o(),h(g,{children:r})}function un(e){let{manager:t,invocation:n}=e,r=n.state,i=n.command,a=r.pipe(S(e=>e.fields.find(t=>t.id===e.field)),M()),o=h(`input`,{class:U.input,type:`text`,role:`combobox`,"aria-expanded":`true`,"aria-controls":`msp-command-menu-completions`,"aria-label":a.pipe(S(e=>e?.label??i.title)),placeholder:a.pipe(S(e=>e?e.label:`Enter to run`)),spellcheck:!1,value:r.pipe(S(e=>e.text)),onInput:e=>n.type(e.currentTarget.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),n.enter()):e.key===`Tab`?(e.preventDefault(),n.tab(e.shiftKey?-1:1)):e.key===`ArrowDown`||e.key===`ArrowUp`?(e.preventDefault(),n.move(e.key===`ArrowDown`?1:-1)):e.key===`Backspace`&&!e.currentTarget.value?(e.preventDefault(),n.back()||t.close()):e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),t.close())}});return queueMicrotask(()=>o.focus()),y(g,{children:[h(j,{when:e.proposed,children:e=>y(`p`,{class:U.proposed,children:[h(F,{name:`sparkles`,size:13,class:U.askIcon}),`Proposed by the assistant from “`,e,`”: check it, then Enter to run`]})}),y(`div`,{class:U.head,children:[y(`span`,{class:U.command,children:[i.icon?h(F,{name:i.icon,size:15}):null,i.title.replace(/…$/,``)]}),o]}),y(`div`,{class:U.sentence,"aria-label":`Arguments`,children:[h(k,{each:r.pipe(S(e=>e.fields)),children:e=>h(dn,{field:e,state:r,onFocus:()=>{n.focus(e.id),o.focus()}})},e=>e.id),h(`span`,{class:U.spacer}),y(`button`,{type:`button`,class:U.run,onClick:()=>void n.enter(),children:[r.pipe(S(e=>e.action)),h(`kbd`,{children:`↵`})]})]}),h(j,{when:r.pipe(S(e=>e.error)),children:e=>y(`p`,{class:U.error,role:`alert`,children:[e.message,e.hint?y(`span`,{class:U.hint,children:[` `,e.hint]}):null]})}),h(L,{class:U.list,contentClass:U.listContent,id:`msp-command-menu-completions`,role:`listbox`,"aria-label":`Options`,children:h(k,{each:r.pipe(S(e=>e.completions)),children:(e,t)=>y(`div`,{class:U.row,role:`option`,"aria-selected":N([r,t]).pipe(S(([e,t])=>e.pick===t)),onClick:()=>n.accept(t.value),onPointerMove:()=>n.point(t.value),children:[h(`span`,{class:U.rowIcon}),h(`span`,{class:U.rowTitle,children:e.label}),h(`span`,{class:U.rowMeta,children:e.detail??(e.value===e.label?``:e.value)})]})})}),h(j,{when:r.pipe(S(e=>e.formOnly.length>0)),children:()=>h(`p`,{class:U.more,children:r.pipe(S(e=>`+ ${e.formOnly.length} more option${e.formOnly.length>1?`s`:``} at their defaults`))})}),h(fn,{hints:[[`tab`,`next field`],[`↵`,`run`],[`⌫`,`back`],[`esc`,`commands`]]})]})}function dn(e){let{field:t}=e,n=e.state.pipe(S(e=>{let n=e.values[t.id];if(n!==void 0&&n!==``)return t.options?.find(e=>e.value===String(n))?.label??String(n)}));return y(`span`,{class:U.token,children:[t.before?h(`span`,{class:U.before,children:t.before}):null,h(`button`,{type:`button`,class:U.value,"data-active":e.state.pipe(S(e=>e.field===t.id?``:void 0)),"data-missing":e.state.pipe(S(e=>e.missing.includes(t.id)?``:void 0)),"data-empty":n.pipe(S(e=>e===void 0?``:void 0)),onClick:()=>e.onFocus(),children:n.pipe(S(e=>e??t.label))})]})}function fn(e){return h(`div`,{class:U.footer,children:e.hints.map(([e,t])=>y(`span`,{children:[h(`kbd`,{children:e}),` `,t]}))})}function pn(){return(pn=e((()=>{Me(),D(),C(),le(),V(),P(),I(),O(),_(),Pe(),w(),Qt(),x()})))()}var W;function mn(){return(mn=e((()=>{u(),W={cancel:`msp-shell-mode-chooser-cancel`,card:`msp-shell-mode-chooser-card`,description:`msp-shell-mode-chooser-description`,heading:`msp-shell-mode-chooser-heading`,icon:`msp-shell-mode-chooser-icon`,note:`msp-shell-mode-chooser-note`,option:`msp-shell-mode-chooser-option`,options:`msp-shell-mode-chooser-options`,rows:`msp-shell-mode-chooser-rows`,splash:`msp-shell-mode-chooser-splash`,title:`msp-shell-mode-chooser-title`,welcome:`msp-shell-mode-chooser-welcome`},c(`views/shell/mode-chooser.module.css`,`@layer msp.components {
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
`)})))()}function hn(e){let t=h(`div`,{class:W.options,role:`radiogroup`,"aria-label":`Mode`,children:h(k,{each:e.modes,children:t=>y(`button`,{type:`button`,role:`radio`,class:W.option,"aria-checked":e.active?.pipe(S(e=>e===t.id))??!1,onClick:()=>e.onChoose(t.id),children:[h(F,{name:t.icon,size:e.variant===`rows`?16:24,class:W.icon}),h(`span`,{class:W.title,children:t.title}),t.description?h(`span`,{class:W.description,children:t.description}):null]})})});if(e.variant===`rows`)return h(`div`,{class:W.rows,children:t});let n=e.variant===`splash`;return y(`div`,{class:n?W.splash:W.welcome,children:[n?h(Ie,{scale:3,flash:`reveal`}):null,y(`div`,{class:W.card,role:`dialog`,"aria-label":n?`Choose how to start`:`Switch mode`,children:[h(`h2`,{class:W.heading,children:n?`How do you want to start?`:`Switch mode`}),t,h(`p`,{class:W.note,children:e.notice??`You can switch later, from the command menu or from Home.`}),e.onCancel?h(`button`,{type:`button`,class:W.cancel,onClick:()=>e.onCancel?.(),children:`Cancel`}):null]})]})}function gn(){return(gn=e((()=>{C(),P(),Fe(),O(),mn(),x()})))()}function _n(e,t){let n=[];for(let r of Object.keys(e)){let i=e[r];if(i.isHidden)continue;let a=vn(r,i);if(!a)continue;let o=t?.[r];o?.before&&(a.before=o.before),o?.format&&(a.format=o.format),n.push(a)}return n}function vn(e,t){let n={id:e,label:t.label||pe(e),required:!t.isOptional};switch(t.type){case`text`:return{...n,kind:`text`};case`boolean`:return{...n,kind:`boolean`,options:Tn};case`select`:return t.options.every(e=>typeof e[0]==`string`)?{...n,kind:`select`,options:t.options.map(([e,t])=>({value:e,label:t}))}:void 0;case`number`:{let e=t.min!==void 0&&t.max!==void 0;return{...n,kind:e?`slider`:`number`,...t.min===void 0?{}:{min:t.min},...t.max===void 0?{}:{max:t.max},...t.step===void 0?{}:{step:t.step}}}default:return}}function yn(e,t){let n=new Set(t.map(e=>e.id));return Object.keys(e).filter(e=>!n.has(e))}function bn(e){return e.kind===`text`||e.kind===`select`||e.kind===`boolean`}function xn(e,t){if(t!==void 0)switch(e.kind){case`text`:return typeof t==`string`&&(!e.required||t.length>0)?t:void 0;case`select`:return typeof t==`string`&&e.options?.some(e=>e.value===t)?t:void 0;case`boolean`:return typeof t==`boolean`?t:t===`true`||t!==`false`&&void 0;case`number`:case`slider`:return typeof t!=`number`||!Number.isFinite(t)||e.min!==void 0&&t<e.min||e.max!==void 0&&t>e.max?void 0:t}}function Sn(e,t){return xn(e,t)!==void 0}function Cn(e,t){let n={};for(let[r,i]of Object.entries(t)){let t=e.find(e=>e.id===r),a=t?xn(t,i):void 0;a!==void 0&&(n[r]=a)}return n}function wn(e,t){let n={...E.getDefaultValues(e)};for(let[e,r]of Object.entries(t))r!==void 0&&(n[e]=r);for(let r of Object.keys(e))t[r]===void 0&&e[r].isOptional&&delete n[r];return n}var Tn;function En(){return(En=e((()=>{fe(),ve(),Tn=[{value:`true`,label:`on`},{value:`false`,label:`off`}]})))()}function Dn(e){let{fields:t,initial:n,formats:r,ctx:i}=e,a=new Set(e.defaulted),o={},s=e=>(n[e.id]===void 0||a.has(e.id))&&o[e.id]===void 0,c=(e,t,n)=>{let a=t.toLowerCase(),o=e.options?.find(e=>e.value.toLowerCase()===a||e.label.toLowerCase()===a);if(o||!n||!e.format)return o?.value;let s=r.get(e.format),c=(s?.complete(t,i)??[]).find(e=>e.value.toLowerCase()===a||e.label.toLowerCase()===a);if(c)return c.value;let l=s?.check(t,i),u=l?.ok?s?.complete(``,i)??[]:[];return l?.ok&&u.some(e=>e.value===l.value)?l.value:void 0},l=(e,t)=>{let n=t.toLowerCase(),a=e.options?.find(e=>e.value.toLowerCase()===n||e.label.toLowerCase()===n);if(a)return a.value;if(e.options)return;let o=e.format?r.get(e.format)?.check(t,i):void 0;return o?.ok?String(o.value):e.format?void 0:t},u=(e,n)=>{let r={},i=[],a=[];for(let o=0;o<e.length;){let l=0;for(let i=Math.min(4,e.length-o);i>=1&&!l;i--){let a=e.slice(o,o+i).join(` `);for(let e of t){if(!s(e)||r[e.id]!==void 0||!bn(e))continue;let t=c(e,a,n);if(t!==void 0&&Sn(e,t)){r[e.id]=t,l=i;break}}}l?o+=l:(a.push(o),i.push(e[o++]))}return{taken:r,left:i,at:a}},d=new Map;for(let e of t)e.before&&!/\s/.test(e.before)&&bn(e)&&d.set(e.before.toLowerCase(),e);let f=e.tail.split(/\s+/).filter(Boolean),p=[];for(let e=0;e<f.length;){let t=d.get(f[e].toLowerCase()),n=e+1;for(;n<f.length&&!d.has(f[n].toLowerCase());)n++;let r=f.slice(e+1,n).join(` `),i=t&&s(t)&&r?l(t,r):void 0;t&&i!==void 0&&Sn(t,i)?(o[t.id]=i,a.delete(t.id),e=n):p.push(f[e++])}let m=u(p,!0),h=m.at.every((e,t)=>t===0||e===m.at[t-1]+1),g=m.left.join(` `),_=!1;if(m.left.length&&h)for(let e of t){if(!e.format||m.taken[e.id]!==void 0||!s(e))continue;let t=r.get(e.format)?.check(g,i);if(t?.ok&&Sn(e,t.value)){m.taken[e.id]=t.value,_=!0;break}}let{taken:v,left:y}=!m.left.length||_?{...m,left:[]}:u(p,!1);Object.assign(o,v);for(let e of t)o[e.id]!==void 0&&(o[e.id]=xn(e,o[e.id]));return{values:o,rest:y}}function On(){return(On=e((()=>{En()})))()}function kn(e,t,n){let r=n.trim().toLowerCase();if(!r)return t;let i=e.find(e=>e.value.toLowerCase()===r||e.label.toLowerCase()===r);return i?[i,...t.filter(e=>e.value!==i.value)]:t}function An(e,t,n){let r=e.params?.(t,n);if(!r)throw Error(`Command "${e.id}" has no params.`);let i=_n(r,e.fields);return{params:r,fields:i,key:JSON.stringify([i,yn(r,i)])}}function jn(e){return e.kind===`number`||e.kind===`slider`}var Mn;function Nn(){return(Nn=e((()=>{En(),w(),On(),Mn=class{#e;#t;#n={};#r;#i=[];#a=new AbortController;#o;#s;#c=[];constructor(e){let{command:t,context:n}=e,r={...t.defaults?.(n.value),...e.preset},i=An(t,n.value,r);this.command=t,this.#e=e;let a=Cn(i.fields,r),o=Dn({fields:i.fields,tail:e.tail??``,initial:a,defaulted:new Set(Object.keys(a)),formats:e.formats,ctx:n.value});if(Object.assign(a,o.values),t.reshapes?.some(e=>o.values[e]!==void 0)){i=An(t,n.value,a);let e=Cn(i.fields,a);for(let t of Object.keys(a))t in e||delete a[t]}let s=o.rest;this.#t=i,this.#n=a;let c=this.values(),l=i.fields,u=this.#v(),d=this.#_(c),f=d??l[l.length-1]?.id;if(this.#r=T({status:`editing`,fields:l,formOnly:yn(i.params,l),action:t.action??`Run`,values:c,...d?{field:d}:l.length?{field:l[l.length-1].id}:{},text:``,completions:this.#f(f,c),pick:-1,proposed:[],missing:this.#g(c),canAssist:!1,...u?{blocked:u}:{}}),s.length){this.type(s.join(` `));let e=this.#r.asReadonly.value,t=l.find(t=>t.id===e.field);t?.format&&this.#d(t)?.check(e.text,n.value).ok&&this.accept()}this.#i.push(n.subscribe(()=>{let e=this.#v();e===this.#r.asReadonly.value.blocked?this.#C():this.#S({blocked:e})})),this.#C()}get params(){return this.#t.params}get state(){return this.#r.asReadonly}values(){return{...this.#n}}args(){return wn(this.#t.params,this.#n)}focus(e){this.#u(e)&&this.#y()&&this.#S({field:e,text:``,completions:this.#f(e,this.values()),pick:-1,canAssist:!1,error:void 0})}type(e){let t=this.#r.asReadonly.value,n=this.#u(t.field);if(!n||!this.#y())return;let r=this.#p(n,e),i=this.#m(n,e);this.#S({text:e,completions:r,pick:e.trim()&&r.length?0:-1,canAssist:!!e.trim()&&!r.length&&!i&&this.#h(),error:void 0,escalated:void 0,proposed:t.proposed.filter(e=>e!==n.id)})}move(e){let t=this.#r.asReadonly.value,n=this.#u(t.field);if(!t.completions.length&&n&&t.status===`editing`){let r=this.#p(n,t.text);r.length&&this.#S({completions:r,pick:e>0?0:r.length-1});return}let r=t.completions.length;if(!r)return;let i=t.pick<0?e>0?0:r-1:((t.pick+e)%r+r)%r;this.#S({pick:i})}point(e){let t=this.#r.asReadonly.value;e>=-1&&e<t.completions.length&&e!==t.pick&&this.#S({pick:e})}accept(e){let t=this.#r.asReadonly.value,n=this.#u(t.field);if(!n||!this.#y())return!1;let r=t.completions[e??t.pick];if(r?.fill)return this.type(r.value),!1;if(r)return this.set(n.id,jn(n)?Number(r.value):r.value);let i=t.text.trim();if(!i)return!1;if(jn(n)){let e=Number(i.replace(/\s*%$/,``)),t=/%$/.test(i)?e/100:e;return Number.isFinite(t)?this.set(n.id,t):this.#b(n.id,`"${i}" is not a number.`)}if(n.options){let e=n.options.find(e=>e.value.toLowerCase()===i.toLowerCase()||e.label.toLowerCase()===i.toLowerCase());return e?this.set(n.id,e.value):this.#b(n.id,`"${i}" is not one of the choices.`,`Choose: ${n.options.map(e=>e.label).join(`, `)}.`)}let a=this.#d(n);if(a){let e=a.check(i,this.#e.context.value);return e.ok?this.set(n.id,e.value):(this.#S({error:{field:n.id,message:e.message,...e.hint?{hint:e.hint}:{}},canAssist:!!e.unreadable&&this.#h()}),!1)}return this.set(n.id,i)}set(e,t,n={}){let r=this.#u(e);if(!r||!this.#y())return!1;let i=xn(r,t);if(i===void 0)return this.#b(e,`Not a valid ${r.label}.`);this.#n={...this.#n,[e]:i};let a=this.#r.asReadonly.value,o=this.values(),s=n.stay||a.field!==e?a.field:this.#_(o,e)??e;return this.#S({values:o,field:s,text:a.field===e?``:a.text,completions:a.field===e?this.#f(s,o):a.completions,pick:a.field===e?-1:a.pick,canAssist:!1,error:void 0,proposed:n.proposed?[...new Set([...a.proposed,e])]:a.proposed.filter(t=>t!==e)}),this.#l(e),!0}clear(e){if(!this.#u(e)||!this.#y())return;let{[e]:t,...n}=this.#n;this.#n=n;let r=this.#r.asReadonly.value,i=this.values();this.#S({values:i,proposed:r.proposed.filter(t=>t!==e),...r.field===e&&!r.text?{completions:this.#f(e,i),pick:-1}:{}}),this.#l(e,!0)}step(e){if(!this.#y())return;let t=this.#r.asReadonly.value,n=t.fields.findIndex(e=>e.id===t.field),r=t.fields[(n+e+t.fields.length)%t.fields.length];r&&this.focus(r.id)}back(){let e=this.#r.asReadonly.value;if(!this.#y()||e.text)return!0;if(e.field&&e.values[e.field]!==void 0)return this.clear(e.field),!0;let t=e.fields.findIndex(t=>t.id===e.field);return t>0&&(this.focus(e.fields[t-1].id),!0)}async enter(){let e=this.#r.asReadonly.value;if(e.status===`editing`){if(e.text.trim()||e.pick>=0){if(!this.accept())return;let e=this.values();if(!this.#t.fields.every(t=>e[t.id]!==void 0))return}return this.confirm()}}async tab(e=1){let t=this.#r.asReadonly.value;if(t.canAssist)return this.assist();t.text.trim()&&t.completions.length||t.pick>=0?this.accept():this.step(e)}async confirm(){let e=this.#r.asReadonly.value;if(e.status!==`editing`)return;if(e.blocked){this.#S({error:{message:e.blocked}});return}if(e.missing.length){this.#S({field:e.missing[0],text:``,completions:this.#f(e.missing[0],e.values),pick:-1});return}this.#S({status:`running`,error:void 0});let t=new AbortController;this.#o=t;let n=this.#e.context.value,r=this.#x(n);if(r){this.#o=void 0,this.#S({status:`editing`,error:r});return}let i,a,o=!1;try{this.#e.onRun?.(),i=await this.command.run(this.args(),n,t.signal)??{}}catch(e){o=!0,a=e}if(this.#o=void 0,this.#r.asReadonly.value.status===`closed`)return;if(!o){let e=i;return this.#S({status:`done`,result:e}),this.#e.preview?.clear(),this.#s=void 0,this.#e.onSettled?.({kind:`done`,command:this.command,result:e}),e}if(t.signal.aborted){this.#e.onSettled?.({kind:`cancelled`,command:this.command});return}let s=a instanceof Error?a.message:String(a);this.#S({status:`editing`,error:{message:s}}),this.#e.onSettled?.({kind:`failed`,command:this.command,message:s,open:!0})}cancel(){return this.#r.asReadonly.value.status!==`running`||!this.#o?!1:(this.#o.abort(),this.#S({status:`cancelling`}),!0)}async assist(){let e=this.#r.asReadonly.value,t=this.#e.assistant;if(!t||!this.command.assist||e.status!==`editing`)return;this.#S({status:`resolving`,canAssist:!1,error:void 0,note:void 0,escalated:void 0});let n=this.#a.signal;try{let r=await t.propose({command:this.command,params:this.params,values:this.values(),text:e.text,...e.field?{field:e.field}:{},ctx:this.#e.context.value},n);if(n.aborted||this.#r.asReadonly.value.status===`closed`)return;if(r.kind===`answer`){let e={detail:r.text};this.#S({status:`done`,result:e}),this.#e.onSettled?.({kind:`done`,command:this.command,result:e});return}if(r.kind===`escalate`){this.#S({status:`editing`,escalated:e.text,error:{message:r.reason}});return}this.#S({status:`editing`,text:``,completions:[],pick:-1});let i=[];for(let[e,t]of Object.entries(r.values)){if(t===void 0)continue;let n=this.#u(e),r=n?.format&&typeof t==`string`?this.#d(n)?.check(t,this.#e.context.value):void 0;r&&!r.ok?i.push(`${e}: ${r.message}`):this.set(e,r?.ok?r.value:t,{proposed:!0})||i.push(e)}let a=this.values();this.#S({...r.note?{note:r.note}:{},field:this.#_(a)??this.#r.asReadonly.value.field,...i.length?{error:{message:`The proposal did not fit: ${i.join(`; `)}.`}}:{}})}catch(e){if(n.aborted)return;this.#S({status:`editing`,error:{message:e instanceof Error?e.message:String(e)}})}}close(){if(this.#r.asReadonly.value.status!==`closed`){this.#a.abort(),this.#o?.abort(),this.#S({status:`closed`}),this.#s!==void 0&&this.#e.preview?.clear(),this.#s=void 0;for(let e of this.#i)e.unsubscribe()}}#l(e,t=!1){if(!this.command.reshapes?.includes(e))return;let n;try{n=An(this.command,this.#e.context.value,this.values())}catch(t){this.#b(e,t instanceof Error?t.message:String(t));return}if(n.key===this.#t.key)return;this.#t=n,this.#n=Cn(n.fields,this.#n);let r=this.values(),i=t?e:this.#_(r,e)??e,a=n.fields.find(e=>e.id===i);this.#S({fields:n.fields,formOnly:yn(n.params,n.fields),values:r,field:i,text:``,completions:a&&r[a.id]===void 0?this.#p(a,``):[],pick:-1})}#u(e){return e===void 0?void 0:this.#t.fields.find(t=>t.id===e)}#d(e){return e.format?this.#e.formats.get(e.format):void 0}#f(e,t){let n=this.#u(e);return n&&t[n.id]===void 0?this.#p(n,``):[]}#p(e,t){if(e.options){let n=e.options.map(e=>({value:e.value,label:e.label}));return kn(n,Yt(n,t,e=>e.label),t)}let n=this.#d(e);if(!n)return[];let r=this.#e.context.value,i=n.complete(t,r),a=kn(i,i,t),o=t.trim()?n.check(t,r):void 0;return o?.ok&&!a.some(e=>e.value===o.value)?[{value:o.value,label:o.value,detail:`as typed`},...a]:a}#m(e,t){if(!t.trim())return!0;if(jn(e))return Number.isFinite(Number(t.replace(/\s*%$/,``)));if(e.options)return!1;let n=this.#d(e);if(!n)return!0;let r=n.check(t,this.#e.context.value);return r.ok||!r.unreadable}#h(){return!!this.command.assist&&!!this.#e.assistant}#g(e){return this.#t.fields.filter(t=>t.required&&e[t.id]===void 0).map(e=>e.id)}#_(e,t){let n=this.#t.fields,r=t?n.findIndex(e=>e.id===t):-1,i=[...n.slice(r+1),...n.slice(0,r+1)];return i.find(t=>t.required&&e[t.id]===void 0)?.id??i.find(n=>e[n.id]===void 0&&n.id!==t)?.id}#v(){try{let e=this.command.when?.(this.#e.context.value);return typeof e==`string`?e:void 0}catch(e){return e instanceof Error?e.message:String(e)}}#y(){return this.#r.asReadonly.value.status===`editing`}#b(e,t,n){return this.#S({error:{field:e,message:t,...n?{hint:n}:{}}}),!1}#x(e){let t=this.command.when?.(e);if(typeof t==`string`)return{message:t};for(let t of this.#t.fields){let n=this.#n[t.id],r=this.#d(t);if(r&&typeof n==`string`){let t=r.check(n,e);if(!t.ok)return{message:t.message,...t.hint?{hint:t.hint}:{}}}if(n!==void 0&&!Sn(t,n))return{field:t.id,message:`Not a valid ${t.label}.`}}let n=this.command.check?.(this.args(),e);return n?{message:n}:void 0}#S(e){let t=this.#r.asReadonly.value;if(t.status===`closed`&&e.status!==`closed`)return;let n={...t,...e};for(let t of Object.keys(e))e[t]===void 0&&delete n[t];`values`in e&&(n.missing=this.#g(n.values)),this.#r.set(n),this.#C()}#C(){let e=this.#e.preview,t=this.#r?.asReadonly.value;if(!e||!this.command.preview||!t||t.status===`closed`||t.status===`done`||t.status===`running`||t.status===`cancelling`)return;let n={...t.values},r=t.completions[t.pick],i=this.#u(t.field);r&&i&&(n[i.id]=xn(i,jn(i)?Number(r.value):r.value));let a=this.#t.fields.every(e=>!e.required||n[e.id]!==void 0)&&!t.blocked?JSON.stringify(n):void 0,o=this.#e.context.value,s=this.#e.previewDeps?.(o)??[o];if(a===this.#s&&s.length===this.#c.length&&s.every((e,t)=>Object.is(e,this.#c[t])))return;let c=this.#s!==void 0;this.#s=a,this.#c=s,a===void 0?c&&e.clear():e.set(this.command.preview(wn(this.#t.params,n),o))}}})))()}function Pn(e){return e.alias===void 0?[]:typeof e.alias==`string`?[e.alias]:e.alias}function Fn(e){if(!e||typeof e!=`object`)return!1;let t=e;if(t.isContentEditable)return!0;let n=typeof t.getAttribute==`function`?t.getAttribute(`contenteditable`):null;if(n!==null&&n!==`false`)return!0;let r=t.tagName?.toUpperCase();return r===`TEXTAREA`||r===`SELECT`||r===`INPUT`&&!Bn.has((t.type??`text`).toLowerCase())}function In(e){return!!e.mod&&!e.alt}function Ln(e,t,n){let r=n?!!t.metaKey:!!t.ctrlKey,i=n?!!t.ctrlKey:!!t.metaKey;if(!!e.mod!==r||i||!!e.alt!=!!t.altKey||!!e.shift!=!!t.shiftKey)return!1;let a=e.key.toLowerCase(),o=t.key.toLowerCase();if(o===a)return!0;if(/^[a-z0-9]$/.test(o)||!t.code)return!1;let s=/^(?:Key([A-Z])|Digit([0-9]))$/.exec(t.code);return!!s&&(s[1]??s[2]??``).toLowerCase()===a}var Rn,zn,Bn;function Vn(){return(Vn=e((()=>{ce(),w(),Nn(),Rn=e=>e instanceof Error?e.message:String(e),zn=class{#e;#t=T([]);#n=T([]);#r=new Map;#i=T(void 0);#a=T(void 0);#o;#s;#c=new se;constructor(e){this.#e=e;let t=[];try{t=e.recents?.load()??[]}catch{t=[]}this.#s=T(t)}get context(){return this.#e.context}get commands(){return this.#t.asReadonly}get active(){return this.#i.asReadonly}get recents(){return this.#s.asReadonly}get running(){return this.#a.asReadonly}get outcomes(){return this.#c.asObservable()}register(e){let t={},n=new Set(e.map(e=>e.id));for(let n of e)this.#r.set(n,t);return this.#t.set([...this.#t.asReadonly.value.filter(e=>!n.has(e.id)),...e]),()=>{let n=n=>e.includes(n)&&this.#r.get(n)===t,r=this.#o;r&&n(r.command)&&(r.cancel(),this.#m(r));let i=this.#i.asReadonly.value;i&&n(i.command)&&(i.close(),this.#i.set(void 0));for(let n of e)this.#r.get(n)===t&&this.#r.delete(n);this.#t.set(this.#t.asReadonly.value.filter(t=>!e.includes(t)))}}get groups(){return this.#n.asReadonly}registerGroups(e){let t=new Set(e.map(e=>e.id));return this.#n.set([...this.#n.asReadonly.value.filter(e=>!t.has(e.id)),...e]),()=>this.#n.set(this.#n.asReadonly.value.filter(t=>!e.includes(t)))}groupPath(e){let t=this.#n.asReadonly.value,n=[],r=e===void 0?void 0:t.find(t=>t.id===e);for(;r&&!n.includes(r);)n.unshift(r),r=r.parent===void 0?void 0:t.find(e=>e.id===r.parent);return n}children(e){let t=new Set(this.#n.asReadonly.value.map(e=>e.id));return{groups:this.#n.asReadonly.value.filter(n=>(n.parent&&t.has(n.parent)?n.parent:void 0)===e).sort((e,t)=>(e.order??0)-(t.order??0)),commands:this.#t.asReadonly.value.filter(n=>(n.group&&t.has(n.group)?n.group:void 0)===e).map(e=>this.#l(e))}}inGroup(e,t){return this.groupPath(e.group).some(e=>e.id===t)}get(e){return this.#t.asReadonly.value.find(t=>t.id===e)}blocked(e){try{let t=e.when?.(this.#e.context.value);return typeof t==`string`?t:void 0}catch(e){return Rn(e)}}#l(e){let t=this.blocked(e);return{command:e,...t?{blocked:t}:{}}}query(e){let t=this.#t.asReadonly.value,n=e.trim(),r=e.toLowerCase().trimStart().replace(/\s+/g,` `),i=r.trimEnd(),a=t.some(e=>e.title.toLowerCase().replace(/…$/,``).startsWith(i)||Pn(e).some(e=>e.toLowerCase().startsWith(i)))?[]:t.flatMap(e=>e.params?Pn(e).map(t=>({c:e,a:t.toLowerCase()})):[]).filter(({a:e})=>r.startsWith(`${e} `)&&r.trim().length>e.length).sort((e,t)=>t.a.length-e.a.length),o=a.filter(e=>e.a.length===a[0]?.a.length),s=o.find(e=>!this.blocked(e.c))??o[0];if(s){let r=e.trimStart().replace(/\s+/g,` `).slice(s.a.length+1).trim(),i=this.#l(s.c);return{recent:[],matches:[i,...i.blocked?this.#u(t,n).filter(e=>e.command!==s.c):[]],direct:{...i,tail:r}}}if(!n){let e=this.#s.asReadonly.value.map(e=>t.find(t=>t.id===e)).filter(e=>!!e).map(e=>this.#l(e)),n=new Set(e.map(e=>e.command.id));return{recent:e,matches:t.filter(e=>!n.has(e.id)).map(e=>this.#l(e))}}return{recent:[],matches:this.#u(t,n)}}#u(e,t){let n=(e,n=0)=>(Jt(e,t)??-1)-n,r=e.flatMap(e=>{let t=Math.max(n(e.title),...Pn(e).map(e=>n(e,.5))),r=this.#d(e).flatMap(r=>{let i=Math.max(n(r.title),...(r.keywords??[]).map(e=>n(e,.5))),a=n(`${e.title} ${r.title}`);return i>=0||t<0&&a>=0?[{c:e,p:r,s:Math.max(i,a)}]:[]});return[...t>=0?[{c:e,p:void 0,s:t}]:[],...r]}),i=new Map;for(let t of e)i.has(t.category)||i.set(t.category,i.size);let a=e=>e.p?`${e.c.title} ${e.p.title}`:e.c.title;return r.sort((e,t)=>Math.floor(t.s)-Math.floor(e.s)||(i.get(e.c.category)??0)-(i.get(t.c.category)??0)||a(e).localeCompare(a(t))).map(e=>({...this.#l(e.c),...e.p?{preset:e.p}:{}}))}#d(e){try{return e.presets?.(this.#e.context.value)??[]}catch{return[]}}open(e,t,n){let r=this.get(e);if(!r)return{kind:`blocked`,reason:`No command "${e}".`};let i=n===void 0?void 0:this.#d(r).find(e=>e.id===n)?.values;if(n!==void 0&&!i)return{kind:`blocked`,reason:`${r.title} has no "${n}".`};if(this.#o)return{kind:`blocked`,reason:`${this.#o.command.title.replace(/…$/,``)} is still running.`};let a=this.blocked(r);if(a)return{kind:`blocked`,reason:a};if(this.close(),!r.params)return{kind:`ran`,result:this.#f(r)};let o;try{o=new Mn({command:r,context:this.#e.context,formats:this.#e.formats,...this.#e.preview?{preview:this.#e.preview}:{},...this.#e.assistant?{assistant:this.#e.assistant}:{},...this.#e.previewDeps?{previewDeps:this.#e.previewDeps}:{},...t?{tail:t}:{},...i?{preset:i}:{},onRun:()=>this.#p({command:r,owner:this.#r.get(r),invocation:o,cancel:()=>o.cancel()}),onSettled:e=>this.#h(o,e)})}catch(e){return{kind:`blocked`,reason:Rn(e)}}return this.#i.set(o),{kind:`form`,invocation:o}}close(){let e=this.#i.asReadonly.value;return!e||this.#o?.invocation!==e&&(e.close(),this.#i.set(void 0),!0)}cancel(){let e=this.#o;return e?(this.#a.asReadonly.value?.cancelling||this.#a.set({command:e.command,cancelling:!0}),e.cancel(),!0):!1}handleKey(e,t=!0){if(e.defaultPrevented||e.repeat||e.isComposing||e.key===`Process`)return!1;let n=Fn(e.target),r=this.#t.asReadonly.value.filter(r=>r.shortcut&&(!n||In(r.shortcut))&&Ln(r.shortcut,e,t)),i=r.find(e=>!this.blocked(e))??r[0];if(!i)return!1;let a=this.open(i.id);return a.kind===`blocked`&&this.#c.next({kind:`blocked`,command:i,message:a.reason}),!0}async#f(e){let t=this.#e.context.value,n=new AbortController,r={command:e,owner:this.#r.get(e),cancel:()=>n.abort()};this.#p(r);try{let i=e.defaults?.(t)??{},a=e.check?.(i,t);if(a){this.#m(r),this.#g(r,{kind:`failed`,command:e,message:a});return}let o=await e.run(i,t,n.signal);return this.#m(r),this.#g(r,{kind:`done`,command:e,result:o}),o}catch(t){this.#m(r),this.#g(r,n.signal.aborted?{kind:`cancelled`,command:e}:{kind:`failed`,command:e,message:Rn(t)});return}}#p(e){this.#o=e,this.#a.set({command:e.command,cancelling:!1})}#m(e){this.#o===e&&(this.#o=void 0,this.#a.set(void 0))}#h(e,t){let n=this.#o?.invocation===e?this.#o:void 0;n&&this.#m(n),t.kind!==`failed`&&this.#i.asReadonly.value===e&&(e.close(),this.#i.set(void 0)),this.#g(n??{command:t.command,owner:this.#r.get(t.command),cancel:()=>{}},t)}#g(e,t){t.kind===`done`&&this.#_(t.command),e.owner&&this.#r.get(e.command)===e.owner&&this.#c.next(t)}#_(e){let t=[e.id,...this.#s.asReadonly.value.filter(t=>t!==e.id)].slice(0,this.#e.maxRecents??5);this.#s.set(t);try{this.#e.recents?.save(t)}catch{}}},Bn=new Set([`button`,`checkbox`,`radio`,`range`,`color`,`file`,`image`,`reset`,`submit`])})))()}var G;function Hn(){return(Hn=e((()=>{u(),G={body:`msp-settings-settings-tab-body`,chevron:`msp-settings-settings-tab-chevron`,group:`msp-settings-settings-tab-group`,groups:`msp-settings-settings-tab-groups`,groupsContent:`msp-settings-settings-tab-groupsContent`,header:`msp-settings-settings-tab-header`,none:`msp-settings-settings-tab-none`,search:`msp-settings-settings-tab-search`,searchIcon:`msp-settings-settings-tab-searchIcon`,searchInput:`msp-settings-settings-tab-searchInput`,tab:`msp-settings-settings-tab-tab`,title:`msp-settings-settings-tab-title`,toggle:`msp-settings-settings-tab-toggle`},c(`views/settings/settings-tab.module.css`,`@layer msp.components {
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
`)})))()}function Un(e){let{model:t}=e,n=T(``),r=n.asReadonly,i=r.pipe(S(e=>e.trim().length>0&&!t.groups.some(t=>ge(t.form.params,e))),M());return y(`div`,{class:G.tab,children:[y(`div`,{class:G.search,children:[h(F,{name:`search`,size:14,class:G.searchIcon}),h(Re,{search:!0,size:`sm`,class:G.searchInput,"aria-label":`Search settings`,placeholder:`Search settings`,value:r,onInput:e=>n.set(e)})]}),y(L,{class:G.groups,contentClass:G.groupsContent,children:[t.groups.map((e,t)=>h(Wn,{group:e,query:r,open:t===0})),h(j,{when:i,children:()=>y(`p`,{class:G.none,children:[`No setting matches “`,r,`”.`]})})]})]})}function Wn(e){let{group:t,query:n}=e,r=T(e.open),i=n.pipe(S(e=>e.trim().length>0),M()),a=N([r.asReadonly,i]).pipe(S(([e,t])=>e||t),M()),o=n.pipe(S(e=>!ge(t.form.params,e)),M());return y(`section`,{class:G.group,hidden:o,"aria-label":t.title,children:[h(`div`,{class:G.header,children:y(`button`,{type:`button`,class:G.toggle,"aria-expanded":a,onClick:()=>r.set(!r.value),children:[h(`span`,{class:G.title,children:t.title}),h(F,{name:`chevron-down`,size:14,class:G.chevron})]})}),h(j,{when:a,reveal:!0,children:()=>h(`div`,{class:G.body,"data-wide-labels":t.wideLabels?``:void 0,children:h(_e,{form:t.form,filter:n})})})]})}function Gn(){return(Gn=e((()=>{Me(),D(),C(),P(),me(),I(),Le(),O(),w(),Hn(),x()})))()}var K;function Kn(){return(Kn=e((()=>{u(),K={action:`msp-shell-help-panel-action`,conflict:`msp-shell-help-panel-conflict`,conflicts:`msp-shell-help-panel-conflicts`,content:`msp-shell-help-panel-content`,group:`msp-shell-help-panel-group`,heading:`msp-shell-help-panel-heading`,help:`msp-shell-help-panel-help`,input:`msp-shell-help-panel-input`,key:`msp-shell-help-panel-key`,keys:`msp-shell-help-panel-keys`,list:`msp-shell-help-panel-list`,or:`msp-shell-help-panel-or`,row:`msp-shell-help-panel-row`},c(`views/shell/help-panel.module.css`,`@layer msp.components {
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
`)})))()}function qn(e){let t=e.commands.commands.pipe(S(e=>e.filter(e=>e.shortcut))),n=t.pipe(S(Xn));return y(L,{edge:!0,class:K.help,contentClass:K.content,"aria-label":`Help`,children:[h(j,{when:n.pipe(S(e=>e.length?e:void 0)),children:e=>y(`section`,{class:K.conflicts,"aria-label":`Shortcut conflicts`,children:[h(F,{name:`triangle-alert`,size:14}),h(`div`,{children:e.map(([e,t])=>y(`p`,{class:K.conflict,children:[h(Yn,{input:e}),` is used by `,t.join(` and `),`: only the first runs.`]}))})]})}),h(k,{each:e.bindings,children:e=>h(Jn,{title:e.title,bindings:e.bindings})}),h(Jn,{title:`Everywhere`,bindings:Zn}),h(j,{when:t.pipe(S(e=>e.length?e:void 0)),children:e=>h(Jn,{title:`Commands`,bindings:e.map(e=>({action:e.title,input:Ct(e.shortcut)}))})})]})}function Jn(e){return y(`section`,{class:K.group,"aria-label":e.title,children:[h(`h3`,{class:K.heading,children:e.title}),h(`dl`,{class:K.list,children:e.bindings.map(e=>y(`div`,{class:K.row,children:[h(`dt`,{class:K.action,children:e.action}),y(`dd`,{class:K.input,children:[h(Yn,{input:e.input}),e.or?y(g,{children:[h(`span`,{class:K.or,children:`or`}),h(Yn,{input:e.or})]}):null]})]}))})]})}function Yn(e){return h(`span`,{class:K.keys,children:e.input.map(e=>h(`kbd`,{class:K.key,children:e}))})}function Xn(e){let t=new Map;for(let n of e){let e=Ct(n.shortcut).join(`+`);t.set(e,[...t.get(e)??[],n])}return[...t.values()].filter(e=>e.length>1).map(e=>[Ct(e[0].shortcut),e.map(e=>e.title)])}var Zn;function Qn(){return(Qn=e((()=>{C(),V(),P(),I(),O(),Kn(),x(),Zn=[{action:`Command menu`,input:[`⌘`,`K`],or:[`⇧`,`⌘`,`P`]},{action:`Help (this card)`,input:[`?`]},{action:`Close a menu, a card or the command menu`,input:[`Esc`]}]})))()}var q;function $n(){return($n=e((()=>{u(),q={empty:`msp-shell-log-view-empty`,entry:`msp-shell-log-view-entry`,kind:`msp-shell-log-view-kind`,log:`msp-shell-log-view-log`,text:`msp-shell-log-view-text`,time:`msp-shell-log-view-time`},c(`views/shell/log-view.module.css`,`@layer msp.components {
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
`)})))()}var J;function er(){return(er=e((()=>{u(),J={bottom:`msp-shell-canvas-bottom`,bottomGrid:`msp-shell-canvas-bottomGrid`,busy:`msp-shell-canvas-busy`,"busy-in":`msp-shell-canvas-busy-in`,"busy-slide":`msp-shell-canvas-busy-slide`,"busy-spin":`msp-shell-canvas-busy-spin`,busyActions:`msp-shell-canvas-busyActions`,busyBar:`msp-shell-canvas-busyBar`,busyCard:`msp-shell-canvas-busyCard`,busyHead:`msp-shell-canvas-busyHead`,busyLabel:`msp-shell-canvas-busyLabel`,busyPercent:`msp-shell-canvas-busyPercent`,busySpin:`msp-shell-canvas-busySpin`,busyTrack:`msp-shell-canvas-busyTrack`,caption:`msp-shell-canvas-caption`,card:`msp-shell-canvas-card`,"card-in":`msp-shell-canvas-card-in`,cardBody:`msp-shell-canvas-cardBody`,cardBodyContent:`msp-shell-canvas-cardBodyContent`,cardHeader:`msp-shell-canvas-cardHeader`,cardTitle:`msp-shell-canvas-cardTitle`,chip:`msp-shell-canvas-chip`,compactStatus:`msp-shell-canvas-compactStatus`,context:`msp-shell-canvas-context`,face:`msp-shell-canvas-face`,frame:`msp-shell-canvas-frame`,lead:`msp-shell-canvas-lead`,menuMark:`msp-shell-canvas-menuMark`,message:`msp-shell-canvas-message`,pill:`msp-shell-canvas-pill`,"pill-in":`msp-shell-canvas-pill-in`,pillButton:`msp-shell-canvas-pillButton`,pillMain:`msp-shell-canvas-pillMain`,progress:`msp-shell-canvas-progress`,railMenu:`msp-shell-canvas-railMenu`,railMenuButton:`msp-shell-canvas-railMenuButton`,railMenuDivider:`msp-shell-canvas-railMenuDivider`,railMenuList:`msp-shell-canvas-railMenuList`,sections:`msp-shell-canvas-sections`,spin:`msp-shell-canvas-spin`,stack:`msp-shell-canvas-stack`,stackTools:`msp-shell-canvas-stackTools`,status:`msp-shell-canvas-status`,text:`msp-shell-canvas-text`,tool:`msp-shell-canvas-tool`,"tool-menu-in":`msp-shell-canvas-tool-menu-in`,toolMenu:`msp-shell-canvas-toolMenu`,toolMenuCard:`msp-shell-canvas-toolMenuCard`,toolMenuCheck:`msp-shell-canvas-toolMenuCheck`,toolMenuHint:`msp-shell-canvas-toolMenuHint`,toolMenuLabel:`msp-shell-canvas-toolMenuLabel`,toolMenuRow:`msp-shell-canvas-toolMenuRow`,toolbar:`msp-shell-canvas-toolbar`,toolbarSlot:`msp-shell-canvas-toolbarSlot`},c(`views/shell/canvas.module.css`,`@layer msp.components {
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
  height: 40px;
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
  bottom: var(--msp-canvas-edge);
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
  top: var(--msp-canvas-top-inset, var(--msp-canvas-edge));
  right: var(--msp-canvas-right-inset, var(--msp-canvas-edge));
  position: absolute;
}

:where([data-mode="compact"]) .msp-shell-canvas-stack {
  right: var(--msp-canvas-edge);
  bottom: var(--msp-canvas-edge);
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }

  & .msp-shell-canvas-frame {
    max-height: 100%;
  }
}

.msp-shell-canvas-stack .msp-shell-canvas-frame {
  width: 36px;
}

.msp-shell-canvas-stackTools {
  flex-direction: column;
  display: flex;
}

.msp-shell-canvas-stack .msp-shell-canvas-tool {
  height: var(--msp-stack-row);
}

.msp-shell-canvas-stack :is(.msp-shell-canvas-tool, button) > svg:first-child {
  width: 18px;
  height: 18px;
}

.msp-shell-canvas-tool[data-captioned] {
  justify-content: center;
  gap: var(--msp-space-1);
  flex-direction: column;
  height: 46px;
  display: flex;
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
  padding-right: var(--msp-space-3);
  animation: msp-shell-canvas-tool-menu-in var(--msp-motion-fast) var(--msp-ease);
  position: absolute;
  right: 100%;
}

@keyframes msp-shell-canvas-tool-menu-in {
  from {
    opacity: 0;
    transform: translateX(4px);
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

  &:disabled {
    opacity: .55;
  }
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
  right: var(--msp-canvas-right-inset, var(--msp-canvas-edge));
  bottom: var(--msp-canvas-edge);
  pointer-events: none;
  position: absolute;
  container: bottom-bar / inline-size;
}

.msp-shell-canvas-bottomGrid {
  align-items: end;
  gap: var(--msp-space-3);
  grid-template-columns: minmax(0, 1fr) auto;
  grid-template-areas: "status context";
  display: grid;

  & > * {
    pointer-events: auto;
  }
}

@container bottom-bar (width < 480px) {
  .msp-shell-canvas-bottomGrid {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas: "context"
                         "status";
  }
}

.msp-shell-canvas-context {
  justify-content: flex-end;
  justify-self: end;
  gap: var(--msp-space-2);
  flex-wrap: wrap;
  grid-area: context;
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
  padding-bottom: 5px;
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
`)})))()}var Y;function tr(){return(tr=e((()=>{u(),Y={barTab:`msp-shell-dock-barTab`,body:`msp-shell-dock-body`,bodyContent:`msp-shell-dock-bodyContent`,bottom:`msp-shell-dock-bottom`,collapsedBar:`msp-shell-dock-collapsedBar`,compact:`msp-shell-dock-compact`,content:`msp-shell-dock-content`,dock:`msp-shell-dock-dock`,floating:`msp-shell-dock-floating`,floatingBottom:`msp-shell-dock-floatingBottom`,floatingLeft:`msp-shell-dock-floatingLeft`,floatingRight:`msp-shell-dock-floatingRight`,floatingTop:`msp-shell-dock-floatingTop`,header:`msp-shell-dock-header`,left:`msp-shell-dock-left`,pin:`msp-shell-dock-pin`,rail:`msp-shell-dock-rail`,railFoot:`msp-shell-dock-railFoot`,right:`msp-shell-dock-right`,splitter:`msp-shell-dock-splitter`,strip:`msp-shell-dock-strip`,tab:`msp-shell-dock-tab`,title:`msp-shell-dock-title`,top:`msp-shell-dock-top`},c(`views/shell/dock.module.css`,`@layer msp.components {
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

  & .msp-shell-dock-strip {
    background: none;
    gap: 0;
    padding: 0;
  }

  & .msp-shell-dock-tab {
    border-radius: 0;
    width: 100%;
    height: 40px;
  }

  & .msp-shell-dock-tab[aria-selected="true"] {
    background: var(--msp-color-control);
  }
}

.msp-shell-dock-floatingRight {
  gap: var(--msp-canvas-edge);
  flex-direction: row-reverse;
  top: 0;
  bottom: 0;
  right: 0;

  & .msp-shell-dock-rail {
    background: var(--msp-glass-panel-bg);
    box-shadow: -1px 0 0 var(--msp-glass-edge);
    border-radius: 0;
  }

  & .msp-shell-dock-content {
    margin: var(--msp-canvas-edge) 0;
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

.msp-shell-dock-floatingBottom {
  flex-direction: column-reverse;
  top: auto;
}

.msp-shell-dock-rail {
  flex: none;
  align-self: stretch;
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
`)})))()}function nr(e){let t=h(`div`,{class:e.class,style:`display: contents`}),n=e.renderer.mount(t,e.ctx);return m(n),t}function rr(){return(rr=e((()=>{_(),x()})))()}function ir(e){let{shell:t,dock:n}=e,r=n.id===`top`||n.id===`bottom`,i=n.tabs.pipe(S(e=>e.length>0)),a=t.mode.pipe(S(e=>e===`compact`&&n.id===`right`)),o=N([n.tabs,a]).pipe(S(([e,t])=>t&&e.some(e=>e.compactBar)?e.filter(e=>e.compactBar):e)),s=r?N([n.tabs,n.active]).pipe(S(([e,t])=>e.length>1&&!!t)):A(!0);return h(j,{when:i,children:()=>y(`div`,{class:`${Y.dock} ${Y[n.id]}`,classList:{[Y.compact]:a},style:{"--msp-dock-size":n.state.pipe(S(e=>`${e.size}px`))},children:[h(j,{when:n.active,reveal:!0,fallback:r?()=>h(or,{shell:t,dock:n}):void 0,children:e=>h(lr,{shell:t,dock:n,tab:e})}),h(j,{when:s,children:()=>y(`nav`,{class:Y.strip,role:`tablist`,"aria-orientation":a.pipe(S(e=>e||r?`horizontal`:`vertical`)),children:[h(k,{each:o,children:e=>h(sr,{shell:t,dock:n,tab:e})}),e.stripEnd]})})]})})}function ar(e){let{shell:t,dock:n}=e,r={"--msp-dock-size":n.state.pipe(S(e=>`${e.size}px`))},i=n.tabs.pipe(S(e=>e.filter(e=>e.place===`head`))),a=n.tabs.pipe(S(e=>e.filter(e=>!e.place||e.place===`strip`))),o=n.tabs.pipe(S(e=>e.filter(e=>e.place===`foot`)));return n.id===`top`||n.id===`bottom`?h(`div`,{class:`${Y.floating} ${n.id===`top`?Y.floatingTop:Y.floatingBottom}`,style:r,children:h(j,{when:n.active,reveal:!0,children:e=>h(lr,{shell:t,dock:n,tab:e})})}):y(`div`,{class:`${Y.floating} ${n.id===`left`?Y.floatingLeft:Y.floatingRight}`,style:r,children:[y(`div`,{class:`${Y.rail} ${J.frame}`,children:[e.railLead,h(j,{when:i.pipe(S(e=>e.length>0)),children:()=>h(`nav`,{class:Y.strip,role:`tablist`,"aria-orientation":`vertical`,"aria-label":`Home`,children:h(k,{each:i,children:e=>h(sr,{shell:t,dock:n,tab:e})})})}),h(j,{when:a.pipe(S(e=>e.length>0)),children:()=>h(`nav`,{class:Y.strip,role:`tablist`,"aria-orientation":`vertical`,"aria-label":`Panels`,children:h(k,{each:a,children:e=>h(sr,{shell:t,dock:n,tab:e})})})}),e.railItems,y(`div`,{class:Y.railFoot,children:[h(j,{when:o.pipe(S(e=>e.length>0)),children:()=>h(`nav`,{class:Y.strip,role:`tablist`,"aria-orientation":`vertical`,"aria-label":`More panels`,children:h(k,{each:o,children:e=>h(sr,{shell:t,dock:n,tab:e})})})}),e.railFoot]})]}),h(j,{when:n.active,reveal:`side`,children:e=>h(lr,{shell:t,dock:n,tab:e,pinnable:!0})})]})}function or(e){let{shell:t,dock:n}=e;return h(`div`,{class:Y.collapsedBar,children:h(k,{each:n.tabs,children:e=>y(`button`,{type:`button`,class:Y.barTab,onClick:()=>t.show(e.id),title:`Show ${e.title}`,children:[h(F,{name:n.id===`top`?`chevron-down`:`chevron-up`,size:14}),e.title]})})})}function sr(e){let{shell:t,dock:n,tab:r}=e,i=n.id===`right`?t.overlay.pipe(S(e=>!!e)):A(!1),a=N([n.state,i]).pipe(S(([e,t])=>!t&&!e.collapsed&&e.active===r.id),M());return h(`button`,{type:`button`,role:`tab`,class:Y.tab,"data-tip":r.title,"data-tip-side":`left`,"aria-label":r.title,"aria-selected":a,onClick:()=>{n.id===`right`&&t.overlay.value?(t.closeOverlay(),t.show(r.id)):t.select(r.id)},children:h(F,{name:r.icon,size:20})})}function cr(e){let{shell:t}=e,n=t.dock(e.dock);return h(R,{variant:`ghost`,size:`sm`,class:Y.pin,icon:h(F,{name:`pin`}),title:`Pin beside the canvas`,pressed:n.state.pipe(S(e=>e.pinned),M()),onClick:()=>t.setPinned(e.dock,!n.state.value.pinned)})}function lr(e){let{shell:t,dock:n,tab:r}=e;return y(`section`,{class:Y.content,role:`tabpanel`,"aria-label":r.title,children:[h(ur,{shell:t,dock:n}),y(`header`,{class:Y.header,children:[h(`span`,{class:Y.title,children:typeof r.heading==`function`?r.heading():r.heading??r.title}),e.pinnable?h(cr,{shell:t,dock:n.id}):null,h(R,{variant:`ghost`,size:`sm`,icon:h(F,{name:`x`}),title:`Close panel`,onClick:()=>t.toggle(n.id)})]}),h(L,{class:Y.body,contentClass:Y.bodyContent,children:h(j,{when:t.tabFocus.pipe(S(e=>({section:e?.tab===r.id?e.section:void 0})),M((e,t)=>e.section===t.section&&!t.section)),children:e=>h(nr,{renderer:r.render,ctx:{shell:t,dock:n.id,...e.section?{focus:e.section}:{}}})})})]})}function ur(e){let{shell:t,dock:n}=e,r=n.id===`left`?1:-1,i=0,a=0,o=!1,s=e=>t.setSize(n.id,a+r*(e.clientX-i));return h(`div`,{class:Y.splitter,role:`separator`,"aria-orientation":`vertical`,onPointerEnter:e=>e.currentTarget.setAttribute(`data-active`,``),onPointerLeave:e=>{o||e.currentTarget.removeAttribute(`data-active`)},onPointerDown:e=>{let t=e.currentTarget;i=e.clientX,a=n.state.value.size,o=!0,t.setPointerCapture(e.pointerId),t.setAttribute(`data-active`,``),t.addEventListener(`pointermove`,s);let r=e=>{if(!o)return;o=!1,t.removeEventListener(`pointermove`,s),t.removeEventListener(`pointerup`,r),t.removeEventListener(`pointercancel`,r),t.removeEventListener(`lostpointercapture`,r),t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId);let n=t.getBoundingClientRect();(!(e.clientX>=n.left&&e.clientX<=n.right&&e.clientY>=n.top&&e.clientY<=n.bottom)||e.type!==`pointerup`)&&t.removeAttribute(`data-active`)};t.addEventListener(`pointerup`,r),t.addEventListener(`pointercancel`,r),t.addEventListener(`lostpointercapture`,r)},onDblClick:()=>t.setSize(n.id,n.id===`left`?300:340)})}function dr(){return(dr=e((()=>{Me(),D(),C(),we(),ze(),P(),I(),O(),er(),tr(),rr(),x()})))()}function fr(e){let t=[];for(let n of e){let e=n.group,r=t.find(t=>t.group===e);r?r.items.push(n):t.push({group:e,items:[n]})}return t.sort((e,t)=>e.group===void 0?-1:+(t.group===void 0))}function pr(e){return e.face?e.face.pipe(S(e=>e.title)):e.caption?`${e.title} (${e.caption})`:e.title}function mr(e){let{item:t}=e;return t.face?h(`span`,{class:e.class,ref:n=>p(t.face,t=>n.replaceChildren(F({name:t.icon,size:e.size})))}):h(F,{name:t.icon,size:e.size})}function hr(e){let{shell:t}=e,n=e.part??`all`,r=n===`canvas`,i=t.toolbar.pipe(S(e=>fr(e.filter(e=>e.place===`canvas`===r))),S(e=>n===`all`||r?e:e.filter(e=>n===`lead`?e.group===void 0:e.group!==void 0)));return h(`div`,{class:J.sections,children:h(k,{each:i,children:n=>h(`div`,{class:J.toolbar,role:`toolbar`,"aria-orientation":`vertical`,"aria-label":n.group??`commands`,children:n.items.map(n=>n.visible?h(j,{when:n.visible,children:()=>h(gr,{shell:t,item:n,menus:e.menus})}):h(gr,{shell:t,item:n,menus:e.menus}))})},e=>e.group??``)})}function gr(e){let{shell:t,item:n,menus:r}=e,i=r&&n.menu?.length?r:void 0,a=n.overlay?t.overlay.pipe(S(e=>e?.overlay.id===n.overlay)):A(!1),o=N([a,n.pressed??A(!1)]).pipe(S(([e,t])=>e||t),M());return y(`button`,{type:`button`,class:J.tool,"data-captioned":n.caption?``:void 0,"data-tip":i?void 0:pr(n),"data-tip-side":`left`,"aria-label":pr(n),"aria-pressed":o,"aria-haspopup":i?`menu`:void 0,"data-overlay-trigger":n.overlay?``:void 0,onClick:e=>{if(i&&!n.overlay&&!n.run)return i.show(n,e.currentTarget);i?.hide(),n.overlay?t.toggleOverlay(n.overlay,e.currentTarget):n.run?.(e.currentTarget)},onPointerEnter:i?e=>i.show(n,e.currentTarget):void 0,onPointerLeave:i?()=>i.hideSoon():void 0,onFocus:i?e=>i.show(n,e.currentTarget):void 0,onBlur:i?()=>i.hideSoon():void 0,children:[h(mr,{item:n,size:n.caption?16:20,class:J.face}),n.caption?h(`span`,{class:J.caption,children:n.caption}):null,i?h(`span`,{class:J.menuMark,"aria-hidden":`true`}):null]})}function _r(e){let t=new Dr,n=y(`div`,{class:J.stack,children:[h(`div`,{class:J.frame,children:y(L,{contentClass:J.stackTools,children:[e.lead,h(hr,{shell:e.shell,part:`canvas`,menus:t})]})}),e.aside,h(vr,{menus:t})]});return t.stack=n,m(()=>t.dispose()),n}function vr(e){let{menus:t}=e,n=e=>{e.key===`Escape`&&!e.defaultPrevented&&t.open.value&&(t.hide(),e.preventDefault())};return document.addEventListener(`keydown`,n),m(()=>document.removeEventListener(`keydown`,n)),h(j,{when:t.open,children:e=>h(`div`,{class:J.toolMenu,style:{top:`${e.top}px`},role:`menu`,"aria-label":e.item.title,onPointerEnter:()=>t.keep(),onPointerLeave:()=>t.hideSoon(),onFocusIn:()=>t.keep(),onFocusOut:()=>t.hideSoon(),children:h(`div`,{class:J.toolMenuCard,children:e.item.menu.map(e=>y(`button`,{type:`button`,role:e.pressed?`menuitemcheckbox`:`menuitem`,"aria-checked":e.pressed,class:J.toolMenuRow,disabled:!!e.disabled,onClick:()=>{t.hide(),e.run()},children:[e.icon?h(F,{name:e.icon,size:16}):h(`span`,{}),y(`span`,{class:J.toolMenuLabel,children:[e.label,e.disabled||e.hint?h(`span`,{class:J.toolMenuHint,children:e.disabled??e.hint}):null]}),e.pressed?h(j,{when:e.pressed,children:()=>h(F,{name:`check`,size:14,class:J.toolMenuCheck})}):null]}))})})})}function yr(e){let{shell:t}=e,n=T(!1),r=t.dock(`right`),i=t.toolbar.pipe(S(e=>e.filter(e=>e.place!==`canvas`&&!e.group))),a=t.toolbar.pipe(S(e=>e.filter(e=>e.place!==`canvas`&&e.group))),o=r.tabs.pipe(S(e=>e.some(e=>e.compactBar)?e.filter(e=>!e.compactBar):[])),s=(e,r)=>{n.set(!1),e.overlay?t.toggleOverlay(e.overlay,r):e.run?.(r)},c=y(`div`,{class:J.railMenu,children:[h(k,{each:i,children:e=>h(`button`,{type:`button`,class:J.railMenuButton,"aria-label":pr(e),"data-tip":pr(e),onClick:t=>s(e,t.currentTarget),children:h(mr,{item:e,size:20,class:J.face})})},e=>e.id),h(`button`,{type:`button`,class:J.railMenuButton,"aria-label":`More`,"aria-expanded":n,"data-tip":`More`,onClick:()=>n.set(!n.value),children:h(F,{name:`ellipsis`,size:20})}),h(j,{when:n,children:()=>y(`div`,{class:J.railMenuList,role:`menu`,"aria-label":`More`,children:[h(k,{each:o,children:e=>y(`button`,{type:`button`,role:`menuitem`,class:J.toolMenuRow,onClick:()=>{n.set(!1),t.show(e.id)},children:[h(F,{name:e.icon,size:16}),h(`span`,{class:J.toolMenuLabel,children:e.title}),h(`span`,{})]})},e=>e.id),h(j,{when:N([o,a]).pipe(S(([e,t])=>e.length>0&&t.length>0)),children:()=>h(`div`,{class:J.railMenuDivider})}),h(k,{each:a,children:e=>y(`button`,{type:`button`,role:`menuitem`,class:J.toolMenuRow,onClick:t=>s(e,t.currentTarget),children:[h(mr,{item:e,size:16,class:J.face}),h(`span`,{class:J.toolMenuLabel,children:pr(e)}),h(`span`,{})]})},e=>e.id)]})})]}),l=e=>{n.value&&!c.contains(e.target)&&n.set(!1)};return document.addEventListener(`pointerdown`,l),m(()=>document.removeEventListener(`pointerdown`,l)),c}function br(e){let t=e.status.tasks.pipe(S(e=>e.find(e=>e.overlay)),M((e,t)=>e?.id===t?.id));return h(j,{when:t,children:t=>{let n=e.status.tasks.pipe(S(e=>e.find(e=>e.id===t.id)??t)),r=n.pipe(S(e=>e.progress===void 0?void 0:Math.round(e.progress*100)));return h(`div`,{class:J.busy,role:`alertdialog`,"aria-modal":`true`,"aria-label":t.label,children:y(`div`,{class:J.busyCard,children:[y(`div`,{class:J.busyHead,children:[h(F,{name:`loader-circle`,size:18,class:J.busySpin}),h(`span`,{class:J.busyLabel,children:n.pipe(S(e=>e.label))}),h(`span`,{class:J.busyPercent,children:r.pipe(S(e=>e===void 0?``:`${e}%`))})]}),h(`div`,{class:J.busyTrack,role:`progressbar`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":r,children:h(`span`,{class:J.busyBar,"data-indeterminate":r.pipe(S(e=>e===void 0?``:void 0)),style:{width:r.pipe(S(e=>`${e??30}%`))}})}),t.abort?h(`div`,{class:J.busyActions,children:h(R,{size:`sm`,onClick:()=>t.abort?.(),children:`Cancel`})}):null]})})}})}function xr(e){let{shell:t}=e;return h(j,{when:t.overlay,children:e=>h(Sr,{shell:t,open:e})})}function Sr(e){let{shell:t,open:n}=e,r=y(`section`,{class:J.card,role:`dialog`,"aria-label":n.overlay.title,children:[y(`header`,{class:J.cardHeader,children:[h(`span`,{class:J.cardTitle,children:n.overlay.title}),h(cr,{shell:t,dock:`right`}),h(R,{variant:`ghost`,size:`sm`,icon:h(F,{name:`x`}),title:`Close`,onClick:()=>t.closeOverlay()})]}),h(L,{class:J.cardBody,contentClass:J.cardBodyContent,children:h(nr,{renderer:n.overlay.render,ctx:{shell:t,...n.focus?{focus:n.focus}:{}}})})]}),i=()=>t.dock(`right`).state.value.pinned,a=document,o=e=>{e.key!==`Escape`||e.defaultPrevented||i()||(t.closeOverlay(),e.preventDefault())},s=e=>{let a=e.target;i()||r.contains(a)||n.anchor?.contains(a)||a.closest?.(`[data-overlay-trigger], [role=tab]`)||t.closeOverlay()};return a.addEventListener(`keydown`,o),a.addEventListener(`pointerdown`,s,!0),m(()=>{a.removeEventListener(`keydown`,o),a.removeEventListener(`pointerdown`,s,!0)}),r}function Cr(e){let{status:t}=e;return y(`div`,{class:J.status,"aria-live":`polite`,children:[h(j,{when:t.current,children:t=>y(`button`,{type:`button`,class:`${J.pill} ${J.message}`,"data-kind":t.kind,title:`Show the log`,onClick:()=>e.onOpenLog?.(),children:[h(F,{name:Or[t.kind],size:14}),h(`span`,{class:J.text,children:t.text})]})}),h(k,{each:t.tasks.pipe(S(e=>e.filter(e=>!e.overlay))),children:e=>h(Er,{task:e})}),e.after]})}function wr(e){let t=y(g,{children:[e.icon,h(`span`,{class:J.text,children:e.text}),e.after]});return y(`span`,{class:J.pill,children:[e.onClick?h(`button`,{type:`button`,class:J.pillMain,"aria-label":e.label,onClick:()=>e.onClick?.(),children:t}):t,e.onDismiss?h(`button`,{type:`button`,class:J.pillButton,"aria-label":e.dismissLabel??`Dismiss`,"data-tip":e.dismissLabel??`Dismiss`,onClick:()=>e.onDismiss?.(),children:h(F,{name:`x`,size:14})}):null]})}function Tr(e){return y(`div`,{class:J.context,children:[e.lead,h(k,{each:e.status.chips,children:e=>y(`span`,{class:`${J.pill} ${J.chip}`,children:[h(`button`,{type:`button`,class:J.text,onClick:()=>e.activate?.(),children:e.label}),e.dismiss?h(`button`,{type:`button`,class:J.pillButton,title:`Clear`,onClick:()=>e.dismiss?.(),children:h(F,{name:`x`,size:14})}):null]})})]})}function Er(e){let{task:t}=e;return y(`span`,{class:J.pill,children:[h(F,{name:`loader-circle`,size:14,class:J.spin}),h(`span`,{class:J.text,children:t.label}),t.progress===void 0?null:h(`span`,{class:J.progress,children:h(`div`,{style:{width:`${Math.round(t.progress*100)}%`}})}),t.abort?h(`button`,{type:`button`,class:J.pillButton,title:`Cancel`,onClick:()=>t.abort?.(),children:h(F,{name:`x`,size:14})}):null]})}var Dr,Or;function kr(){return(kr=e((()=>{Me(),D(),C(),we(),ze(),P(),I(),O(),_(),w(),er(),dr(),rr(),x(),Dr=class{constructor(){this.open=T(void 0)}#e;show(e,t){this.keep();let n=this.stack?t.getBoundingClientRect().top-this.stack.getBoundingClientRect().top:0,r=this.open.value;(r?.item!==e||r.top!==n)&&this.open.set({item:e,top:n})}keep(){this.#e!==void 0&&clearTimeout(this.#e),this.#e=void 0}hideSoon(){this.keep(),this.#e=setTimeout(()=>this.hide(),160)}hide(){this.keep(),this.open.value&&this.open.set(void 0)}dispose(){this.keep()}},Or={info:`info`,success:`circle-check`,warning:`triangle-alert`,error:`circle-alert`}})))()}function Ar(e){let t=e.status.history.pipe(S(e=>e.slice().reverse()));return h(`div`,{class:q.log,role:`log`,"aria-label":`Log`,children:h(k,{each:t,fallback:()=>h(`p`,{class:q.empty,children:`No messages yet.`}),children:e=>y(`div`,{class:q.entry,"data-kind":e.kind,children:[h(F,{name:Or[e.kind],size:14,class:q.kind}),h(`span`,{class:q.text,children:e.text}),h(`time`,{class:q.time,dateTime:e.time.toISOString(),children:jr.format(e.time)})]})},e=>e.id)})}var jr;function Mr(){return(Mr=e((()=>{C(),P(),O(),$n(),kr(),x(),jr=new Intl.DateTimeFormat(void 0,{hour:`2-digit`,minute:`2-digit`,second:`2-digit`})})))()}var X;function Nr(){return(Nr=e((()=>{u(),X={canvas:`msp-shell-canvas`,canvasLayer:`msp-shell-canvasLayer`,layer:`msp-shell-layer`,shell:`msp-shell-shell`,viewport:`msp-shell-viewport`},c(`views/shell/shell.module.css`,`@layer msp.components {
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
  inset: 0 var(--msp-canvas-pinned, 0px) 0 0;
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
`)})))()}var Pr;function Fr(){return(Fr=e((()=>{u(),Pr={empty:`msp-shell-empty-canvas-empty`,"fade-in":`msp-shell-empty-canvas-fade-in`,"fade-out":`msp-shell-empty-canvas-fade-out`,mark:`msp-shell-empty-canvas-mark`},c(`views/shell/empty-canvas.module.css`,`@layer msp.components {
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
`)})))()}function Ir(e){let t=e.empty.pipe(M(),yt(e=>e?dt(Lr).pipe(S(()=>`in`)):lt(A(`out`),dt(Rr).pipe(S(()=>`gone`)))),_t(`gone`),ht((e,t)=>t===`out`&&e!==`in`?`gone`:t),M(),ye({bufferSize:1,refCount:!0}));return h(j,{when:t.pipe(S(e=>e!==`gone`)),children:()=>h(`div`,{class:Pr.empty,"data-phase":t,children:h(Ie,{scale:3,flash:`reveal`,live:!0,class:Pr.mark})})})}var Lr,Rr;function zr(){return(zr=e((()=>{ut(),D(),C(),we(),gt(),le(),vt(),bt(),ft(),Fe(),O(),Fr(),x(),Lr=700,Rr=250})))()}var Br;function Vr(){return(Vr=e((()=>{u(),Br={"drop-in":`msp-shell-file-drop-drop-in`,hint:`msp-shell-file-drop-hint`,overlay:`msp-shell-file-drop-overlay`,target:`msp-shell-file-drop-target`,title:`msp-shell-file-drop-title`},c(`views/shell/file-drop.module.css`,`@layer msp.components {
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
`)})))()}function Hr(e){let t=T(!1),n=e=>{Ur(e)&&t.set(!0)};e.target.addEventListener(`dragenter`,n),m(()=>e.target.removeEventListener(`dragenter`,n));let r=e=>{e.preventDefault(),e.stopPropagation(),e.dataTransfer&&(e.dataTransfer.dropEffect=`copy`)};return h(`div`,{class:Br.overlay,hidden:t.asReadonly.pipe(S(e=>!e)),onDragEnter:r,onDragOver:r,onDragLeave:()=>t.set(!1),onDrop:n=>{r(n),t.set(!1);let i=[...n.dataTransfer?.files??[]];i.length&&e.onDrop(i)},children:y(`div`,{class:Br.target,children:[h(F,{name:`folder-open`,size:24}),h(`span`,{class:Br.title,children:`Drop to open`}),e.formats?.length?h(`span`,{class:Br.hint,children:e.formats.join(`, `)}):null]})})}function Ur(e){let t=e.dataTransfer?.types;if(!t)return!1;for(let e=0;e<t.length;e++)if(t[e]===`Files`)return!0;return!1}function Wr(){return(Wr=e((()=>{C(),P(),_(),w(),Vr(),x()})))()}var Z;function Gr(){return(Gr=e((()=>{u(),Z={body:`msp-shell-page-body`,header:`msp-shell-page-header`,headerContent:`msp-shell-page-headerContent`,page:`msp-shell-page-page`,"page-in":`msp-shell-page-page-in`,title:`msp-shell-page-title`},c(`views/shell/page.module.css`,`@layer msp.components {
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
`)})))()}function Kr(e){let{shell:t}=e,n=t.page.pipe(S(e=>e?.page),M());return h(j,{when:n,children:e=>h(qr,{shell:t,page:e})})}function qr(e){let{shell:t}=e,n={page:e.page,focus:t.page.value?.focus},r={shell:t,...n.focus?{focus:n.focus}:{}},i=y(`section`,{class:Z.page,role:`region`,"aria-label":n.page.title,tabIndex:-1,"data-msp-page":``,children:[y(`header`,{class:Z.header,children:[y(`span`,{class:Z.title,children:[n.page.icon?h(F,{name:n.page.icon}):null,n.page.title]}),h(`div`,{class:Z.headerContent,children:n.page.header?h(nr,{renderer:n.page.header,ctx:r}):null}),h(R,{variant:`ghost`,size:`sm`,icon:h(F,{name:`x`}),title:`Close (Esc)`,onClick:()=>t.closePage()})]}),h(`div`,{class:Z.body,children:h(nr,{renderer:n.page.render,ctx:r})})]}),a=document.activeElement,o=e=>{if(e.key!==`Escape`||e.defaultPrevented)return;let n=document.activeElement;(!n||n===document.body||i.contains(n))&&(t.closePage(),e.preventDefault())};return document.addEventListener(`keydown`,o),queueMicrotask(()=>{i.contains(document.activeElement)||i.focus({preventScroll:!0})}),m(()=>{document.removeEventListener(`keydown`,o),a?.isConnected&&a.focus({preventScroll:!0})}),i}function Jr(){return(Jr=e((()=>{ze(),P(),D(),C(),O(),_(),Gr(),rr(),x()})))()}function Yr(e){let{shell:t,status:n}=e,r=t.dock(`right`),i=t.mode.pipe(S(e=>e===`compact`),M()),a=t.dock(`top`),o=N([r.state,t.mode]).pipe(S(([e,t])=>e.floating&&t!==`compact`),M()),s=N([a.state,t.mode]).pipe(S(([e,t])=>e.floating&&t!==`compact`),M()),c=N([a.state,a.active,s]).pipe(S(([e,t,n])=>n&&t?Q+e.size+Q:Q),M(),S(e=>`${e}px`)),l=N([r.state,o]).pipe(S(([e,t])=>t&&e.pinned),M()),u=N([r.state,r.active,t.overlay,l]).pipe(S(([e,t,n,r])=>r?Zr+(t||n?e.size:0):0),M()),d=N([r.state,r.active,o,l]).pipe(S(([e,t,n,r])=>r?Q:52+(n&&t?e.size+Q:0)),M(),S(e=>`${e}px`)),f=N([r.active,o]).pipe(S(([e,t])=>t&&e?`open`:void 0),M()),p=r.state.pipe(S(e=>`${e.size}px`)),g=y(`div`,{class:X.shell,"data-mode":t.mode,children:[h(j,{when:s.pipe(S(e=>!e)),children:()=>h(ir,{shell:t,dock:a})}),h(ir,{shell:t,dock:t.dock(`left`)}),y(`main`,{class:X.viewport,style:{"--msp-canvas-edge":`${Q}px`,"--msp-canvas-right-inset":d,"--msp-canvas-top-inset":c,"--msp-canvas-rail-inset":`52px`,"--msp-right-panel-width":p,"--msp-canvas-panel-right":`52px`,"--msp-canvas-pinned":u.pipe(S(e=>`${e}px`))},children:[h(`div`,{class:X.canvas,"data-msp-canvas":``,children:e.canvas}),y(`div`,{class:`${X.layer} ${X.canvasLayer}`,"data-msp-theme":e.canvasTheme??`light`,style:{"--msp-color-bg":e.canvasColor},children:[h(j,{when:s,children:()=>h(ar,{shell:t,dock:a})}),e.empty?h(Ir,{empty:e.empty}):null,h(`div`,{class:J.lead,children:e.playback}),e.overlays,h(j,{when:i.pipe(S(e=>!e)),children:()=>h(`div`,{class:J.bottom,children:y(`div`,{class:J.bottomGrid,children:[h(Cr,{status:n,onOpenLog:e.onOpenLog,after:e.agent}),h(Tr,{status:n,lead:e.context?.()})]})})}),h(_r,{shell:t,lead:e.canvasLead,aside:e.canvasAside})]}),y(`div`,{class:X.layer,"data-right-panel":f,"data-pinned":l.pipe(S(e=>e?``:void 0)),"data-overlay":t.overlay.pipe(S(e=>e?`open`:void 0)),children:[h(xr,{shell:t}),h(Kr,{shell:t}),h(j,{when:o,fallback:()=>h(j,{when:i.pipe(S(e=>!e)),children:()=>h(`div`,{class:`${J.toolbarSlot} ${J.frame}`,children:h(hr,{shell:t})})}),children:()=>h(ar,{shell:t,dock:r,railItems:h(hr,{shell:t,part:`rest`}),railFoot:h(hr,{shell:t,part:`lead`})})})]})]}),h(j,{when:i,children:()=>y(`div`,{class:J.compactStatus,"data-docked":``,children:[h(Cr,{status:n,onOpenLog:e.onOpenLog}),h(Tr,{status:n,lead:e.context?.()})]})}),h(j,{when:o.pipe(S(e=>!e)),children:()=>h(ir,{shell:t,dock:r,stripEnd:h(j,{when:i,children:()=>h(yr,{shell:t})})})}),h(ir,{shell:t,dock:t.dock(`bottom`)}),e.commandMenu,h(br,{status:n})]});e.onDropFiles&&g.appendChild(h(Hr,{target:g,onDrop:e.onDropFiles,formats:e.dropFormats}));let _=e=>{e.key!==`Escape`||e.defaultPrevented||t.overlay.value||Xr(e.target)||r.state.value.pinned||!r.state.value.collapsed&&r.active.value!==void 0&&(t.toggle(`right`),e.preventDefault())};window.addEventListener(`keydown`,_),m(()=>window.removeEventListener(`keydown`,_)),m(Be(g));let v=new ResizeObserver(e=>t.setWidth(e[0].contentRect.width));return v.observe(g),m(()=>v.disconnect()),g}function Xr(e){return e instanceof HTMLElement?e.isContentEditable||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement?!0:e instanceof HTMLInputElement&&![`checkbox`,`radio`,`range`,`button`,`color`].includes(e.type):!1}var Zr,Q;function Qr(){return(Qr=e((()=>{Me(),D(),C(),O(),_(),er(),Nr(),Ve(),kr(),dr(),zr(),Wr(),Jr(),x(),Zr=44,Q=8})))()}function $r(){let e=(e,t,n,r,i)=>({id:e,title:t,icon:n,form:new ue(r),wideLabels:i});return{groups:[e(`appearance`,`Appearance`,`palette`,ei),e(`camera`,`Camera`,`camera`,ti),e(`interaction`,`Interaction`,`mouse-pointer-2`,ni),e(`performance`,`Performance`,`gauge`,ri),e(`interface`,`Interface`,`app-window`,ii),e(`behaviors`,`Behaviors`,`toggle-right`,ai,!0),e(`advanced`,`Advanced`,`wrench`,oi)]}}var $,ei,ti,ni,ri,ii,ai,oi;function si(){return(si=e((()=>{fe(),he(),$=(e,t={},n={})=>E.MappedStatic(e?`on`:`off`,{on:E.Group(t),off:E.Group({})},n),ei={backgroundColor:E.Color(16777215,{label:`Background`}),transparentBackground:E.Boolean(!1,{label:`Transparent background`}),checkeredTransparentBackground:E.Boolean(!0,{label:`Checkered when transparent`}),occlusion:$(!0,{samples:E.Numeric(32,{min:1,max:256,step:1}),radius:E.Numeric(5,{min:0,max:20,step:.1}),bias:E.Numeric(.8,{min:0,max:3,step:.1})},{label:`Ambient occlusion`}),shadow:$(!1,{steps:E.Numeric(1,{min:1,max:64,step:1})},{label:`Shadows`}),outline:$(!1,{scale:E.Numeric(1,{min:1,max:5,step:1})},{label:`Outline`}),cameraFog:$(!0,{intensity:E.Numeric(15,{min:1,max:100,step:1})},{label:`Fog`}),marking:E.Group({enabled:E.Boolean(!0),highlightEdgeColor:E.Color(10066329,{label:`Highlight edge`}),selectEdgeColor:E.Color(16776960,{label:`Select edge`}),ghostEdgeStrength:E.Numeric(.3,{min:0,max:1,step:.01})},{label:`Marking`})},ti={mode:E.Select(`perspective`,[[`perspective`,`Perspective`],[`orthographic`,`Orthographic`]]),fov:E.Numeric(45,{min:10,max:130,step:1},{label:`Field of view`}),clipping:E.Group({radius:E.Numeric(100,{min:0,max:100,step:1}),far:E.Boolean(!0),minNear:E.Numeric(5,{min:.1,max:100,step:.1},{label:`Min near`})},{label:`Clipping`}),cameraResetDurationMs:E.Numeric(250,{min:0,max:1e3,step:1},{label:`Reset duration (ms)`}),sceneRadiusFactor:E.Numeric(1,{min:1,max:10,step:.1},{label:`Scene radius factor`}),manualReset:E.Boolean(!1,{label:`Manual reset`,description:`Do not reset the camera when the scene changes.`})},ni={pickPadding:E.Numeric(3,{min:0,max:10,step:1},{label:`Pick padding (px)`}),userInteractionReleaseMs:E.Numeric(250,{min:0,max:1e3,step:1},{label:`Interaction release (ms)`}),trackball:E.Group({rotateSpeed:E.Numeric(5,{min:1,max:10,step:1}),zoomSpeed:E.Numeric(7,{min:1,max:15,step:1}),panSpeed:E.Numeric(1,{min:.1,max:5,step:.1}),staticMoving:E.Boolean(!0,{label:`No inertia`})},{label:`Trackball`}),pointer:E.Group({enabled:E.Boolean(!0)},{label:`Pointer`})},ri={resolutionMode:E.Select(`auto`,[[`auto`,`Auto`],[`scaled`,`Scaled`],[`native`,`Native`]]),pixelScale:E.Numeric(1,{min:.1,max:2,step:.05}),pickScale:E.Numeric(.25,{min:.1,max:1,step:.05}),transparency:E.Select(`blended`,[[`blended`,`Weighted, blended`],[`wboit`,`Weighted, order-independent`],[`dpoit`,`Depth peeling`]]),dpoitIterations:E.Numeric(2,{min:1,max:10,step:1},{label:`Depth peeling iterations`}),multiSample:$(!0,{sampleLevel:E.Numeric(2,{min:0,max:5,step:1})},{label:`Multi-sampling`}),hiZ:E.Boolean(!1,{label:`Hi-Z culling`})},ii={theme:E.Select(`auto`,[[`auto`,`Follow the system`],[`light`,`Light`],[`dark`,`Dark`],[`blue`,`Blue`]]),layout:E.Select(`auto`,[[`auto`,`Auto (compact when narrow)`],[`desktop`,`Desktop`],[`compact`,`Compact`]]),pinPanel:E.Boolean(!1,{label:`Pin the panel`,description:`Keep the panel beside the canvas.`}),sequence:E.Boolean(!0,{label:`Sequence`,description:`Show the sequence above the canvas.`}),tooltips:E.Boolean(!0,{label:`Tooltips`})},ai={representation:E.Group({chemicalComponentDictionary:$(!0,{},{label:`wwPDB Chemical Component Dictionary`})},{label:`Representation`,isExpanded:!0}),interaction:E.Group({highlightLoci:$(!0,{mark:E.Boolean(!0)},{label:`Highlight Loci on Canvas`}),selectLoci:$(!0,{mark:E.Boolean(!0)},{label:`Select Loci on Canvas`}),defaultLociLabel:$(!0,{},{label:`Provide Default Loci Label`}),focusLoci:$(!0,{},{label:`Representation Focus Loci`}),cameraFocusLoci:$(!0,{minRadius:E.Numeric(8,{min:1,max:50,step:1}),extraRadius:E.Numeric(4,{min:0,max:20,step:.5}),durationMs:E.Numeric(250,{min:0,max:1e3,step:1})},{label:`Camera Focus Loci on Canvas`}),axisHelper:$(!0,{},{label:`Camera Axis Helper`}),cameraControls:$(!0,{},{label:`Camera Controls on Canvas`}),snapshotControls:$(!0,{},{label:`Snapshot Controls`}),structureFocus:$(!0,{expandRadius:E.Numeric(5,{min:1,max:10,step:1})},{label:`Structure Focus Representation`})},{label:`Interaction`,isExpanded:!0}),customProperties:E.Group({structureInfo:$(!0,{},{label:`Structure Info`}),accessibleSurfaceArea:$(!0,{},{label:`Accessible Surface Area`}),sifts:$(!0,{},{label:`SIFTS Mapping`}),interactions:$(!0,{},{label:`Interactions`}),validation:$(!1,{},{label:`wwPDB Validation Report`})},{label:`Custom Properties`,isExpanded:!0})},oi={renderer:E.Group({exposure:E.Numeric(1,{min:0,max:3,step:.01}),ambientIntensity:E.Numeric(.4,{min:0,max:2,step:.01}),lightIntensity:E.Numeric(.6,{min:0,max:2,step:.01}),backgroundOpacity:E.Numeric(1,{min:0,max:1,step:.01})},{label:`Renderer`}),handle:$(!1,{},{label:`Handle`}),xr:E.Group({minTargetDistance:E.Numeric(.4,{min:0,max:1,step:.01}),disablePostprocessing:E.Boolean(!0)},{label:`XR`})}})))()}function ci(e,t){if(!t?.length)return e;let n=new Set(t.map(e=>e.id));return[...e.filter(e=>!n.has(e.id)),...t]}function li(){return{id:`blank`,title:`Blank`,icon:`square`,activate:({background:e})=>({commands:new zn({context:T({}).asReadonly,formats:{get:()=>void 0}}),canvas:()=>h(xt,{empty:!1,background:e}),empty:A(!1)})}}function ui(e){let{mode:t,app:n}=e,r=new Ht({docks:{right:{pinned:!!e.pinned}}}),i=new Wt,a=T(!1),o=T(void 0),s=e=>{o.set(e),a.set(!0)},c=new It(()=>document.documentElement),l=new Kt(document.documentElement.dataset.mspTheme??`light`);l.applyTo(document.documentElement);let u=e.addOn?.({shell:r,status:i,loaded:e.loaded}),d=$r();r.registerTabs(ci([{id:`log`,title:`Log`,icon:`scroll-text`,order:2.5,place:`foot`,render:Ot(()=>h(Ar,{status:i}))},{id:`settings`,title:`Settings`,icon:`settings`,order:3,place:`foot`,render:Ot(()=>h(Un,{model:d}))}],u?.tabs));let f=t.activate({shell:r,status:i,loaded:e.loaded,background:e.background,openCommandMenu:s,modes:n?.modes??[t],mode:t.id,switchMode:e=>n?.switchMode(e)}),p=f.empty??A(!e.loaded),g=p.pipe(S(e=>!e));r.registerToolbar([{id:`theme`,icon:`sun`,title:`Theme`,face:l.theme.pipe(S(e=>{let t=H.find(t=>t.id===e);return{icon:t.icon,title:`Theme: ${t.title}`}})),run:()=>l.next()},{id:`palette`,icon:`command`,title:`Command menu`,caption:wt({key:`k`,mod:!0}),run:()=>s()},c.mode===`fullscreen`?{id:`expand`,place:`canvas`,group:`canvas`,visible:g,icon:`fullscreen`,title:`Fullscreen`,pressed:c.active,run:()=>c.toggle()}:{id:`expand`,place:`canvas`,group:`canvas`,visible:g,icon:`maximize-2`,title:`Expand`,run:()=>i.post(`Expanded`),menu:[{id:`fullscreen`,label:`Fullscreen`,icon:`fullscreen`,hint:`The whole screen, not just the page`,disabled:c.unavailableReason,pressed:c.active,run:()=>c.toggle()}]}]),r.registerTabs([{id:`help`,title:`Help`,icon:`circle-help`,order:2.8,place:`foot`,render:Ot(()=>h(qn,{commands:f.commands,bindings:f.bindings??[]}))}]),f.commands.register([{id:`help.show`,title:`Keyboard and mouse`,alias:[`help`,`shortcuts`,`keys`,`bindings`,`controls`],category:`Help`,icon:`circle-help`,shortcut:{key:`?`},run:()=>(r.show(`help`),{message:``})}]);let _=n&&n.modes.length>1?[{id:`app.switch-mode`,title:`Switch mode…`,alias:[`mode`,`viewer`,`story`,`start over`],category:`View`,icon:`prism`,run:()=>(n.switchMode(),{message:``})}]:[];_.length&&f.commands.register(_),u?.pages?.length&&r.registerPages(u.pages),u?.commands?.length&&f.commands.register(u.commands);let v=f.commands.outcomes.subscribe(e=>{e.kind===`done`&&e.result.message&&i.post(e.result.message),e.kind===`done`?u?.commandDone?.(e.result.message??e.command.title,e.command.id):(e.kind===`failed`||e.kind===`blocked`)&&i.post(e.message,`warning`)}),y=e=>{(B()?e.metaKey:e.ctrlKey)&&(e.key.toLowerCase()===`k`||e.shiftKey&&e.key.toLowerCase()===`p`)?(e.preventDefault(),s()):!a.value&&f.commands.handleKey(e,B())&&e.preventDefault()};window.addEventListener(`keydown`,y),f.start&&r.show(f.start),r.mount(),i.mount(),e.openExportAt&&r.openOverlay(`export`,void 0,e.openExportAt),e.openCard&&r.openOverlay(e.openCard),e.openTab&&r.show(e.openTab),e.openPage&&r.openPage(e.openPage,e.openPageAt),e.commandMenu&&a.set(!0),m(()=>{window.removeEventListener(`keydown`,y),v.unsubscribe(),f.dispose?.(),r.unmount(),i.unmount()});let b=e.background??`#ffffff`;return h(Yr,{shell:r,status:i,canvas:f.canvas?.()??null,overlays:f.overlays?.()??null,playback:f.playback?.()??null,canvasColor:b,canvasTheme:Mt(Nt(b)??16777215),context:f.context,commandMenu:h(j,{when:a,children:()=>h(en,{manager:f.commands,prefixes:f.prefixes,group:o.value,assistant:u?.assistant,onClose:()=>{a.set(!1),o.set(void 0)}})}),agent:u?.agent,canvasLead:f.canvasLead?.()??null,canvasAside:f.canvasAside?.()??null,onOpenLog:()=>r.show(`log`),empty:p,onDropFiles:f.onDropFiles,dropFormats:f.dropFormats})}function di(e){let t=t=>e.modes.find(e=>e.id===t),n=0,r=e=>({mode:e,n:++n}),i=T(t(e.start)?r(t(e.start)):void 0),a=T(!1),o={modes:e.modes,switchMode:e=>{let n=t(e);n?queueMicrotask(()=>i.set(r(n))):a.set(!0)}},s=e=>{a.set(!1);let n=t(e);n&&n.id!==i.value?.mode.id&&queueMicrotask(()=>i.set(r(n)))};return y(`div`,{style:`position: relative; height: 100%`,children:[h(Oe,{component:i.asReadonly.pipe(S(n=>n?()=>h(ui,{...e,mode:n.mode,app:o}):()=>h(hn,{variant:`splash`,modes:e.modes,onChoose:e=>i.set(r(t(e)))})))}),h(j,{when:a,children:()=>h(hn,{variant:`welcome`,modes:e.modes,active:i.asReadonly.pipe(S(e=>e?.mode.id??``)),notice:`Switching starts a new session: what is loaded now goes. Stories are kept in this browser.`,onChoose:s,onCancel:()=>a.set(!1)})})]})}function fi(){return(fi=e((()=>{C(),we(),V(),O(),_(),kt(),Ft(),w(),Lt(),Ut(),Gt(),qt(),pn(),St(),gn(),Vn(),Gn(),Qn(),Mr(),Qr(),si(),x()})))()}export{Ze as A,kt as C,St as D,xt as E,ot as O,Ot as S,V as T,pn as _,Qr as a,Ht as b,wr as c,rr as d,Qn as f,gn as g,hn as h,li as i,$e as j,at as k,kr as l,Vn as m,ui as n,Ar as o,zn as p,fi as r,Mr as s,di as t,nr as u,Zt as v,wt as w,Ut as x,Yt as y};