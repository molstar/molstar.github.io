import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{S as t,_ as n,f as r,h as i,i as a,n as o,o as s,r as c,t as l,u,v as d,x as f}from"./jsx-runtime-DzTO5r4L.js";import{n as p,r as m}from"./registry-D35yV2Tb.js";import{E as h,n as g,p as _,r as ee,t as v}from"./Observable-BU2k-uIj.js";import{i as y,n as b,r as x,t as S}from"./OperatorSubscriber-ClXQ1A6p.js";import{C as te,S as ne,_ as re,b as C,g as ie,h as w,m as T,n as ae,p as oe,r as E,t as se,v as ce,w as le,x as ue,y as de}from"./params-form-BiSG3JZ9.js";import{n as fe,t as pe}from"./debounceTime-D_qV2Azt.js";import{a as me,n as he,o as ge,s as _e,t as ve,u as ye}from"./from-C2oaWhAF.js";import{c as be,i as D,l as O,n as k,r as xe,t as A}from"./control-flow-2XcFB3wB.js";import{n as Se,t as Ce}from"./timer-CZ89iRAv.js";import{n as j,t as M}from"./map-COHPbqb4.js";import{n as N,t as P}from"./combineLatest-nINHdI9G.js";import{n as we,t as Te}from"./mergeAll-CTsqGr9I.js";import{n as F,t as I}from"./distinctUntilChanged-Bi0nDGSG.js";import{a as Ee,i as De,n as L,r as R}from"./observable-state-8hMFvtS9.js";import{a as Oe,r as ke}from"./manager-2gFskg8V.js";import{n as z,t as B}from"./icon-Fyk1xIJy.js";import{n as Ae,t as V}from"./scroll-area-O9ZFxK58.js";import{n as je,t as Me}from"./keyed-selector-CYjlVwf5.js";import{c as Ne,d as Pe,f as Fe,s as Ie,u as Le}from"./select-qi6jJ7y0.js";import{n as Re,t as ze}from"./text-input-WVcFJO0h.js";import{n as Be,t as Ve}from"./button-oplfrRqY.js";import{n as He,t as Ue}from"./tooltip-BFlYMfwW.js";import{r as We,t as Ge}from"./wordmark-CwEe8Xhb.js";import{n as Ke,t as qe}from"./prism-splash-iWrOsFPd.js";function Je(){return we(1)}function Ye(){return(Ye=e((()=>{Te()})))()}function Xe(){var e=[...arguments];return Je()(ve(e,ye(e)))}function Ze(){return(Ze=e((()=>{Ye(),_e(),he()})))()}var Qe;function $e(){return($e=e((()=>{g(),Qe=new v(_)})))()}function et(e,t,n,r,i){return function(a,o){var s=n,c=t,l=0;a.subscribe(S(o,function(t){var n=l++;c=s?e(c,t,n):(s=!0,t),r&&o.next(c)},i&&(function(){s&&o.next(c),o.complete()})))}}function tt(){return(tt=e((()=>{b()})))()}function nt(e,t){return y(et(e,t,arguments.length>=2,!0))}function rt(){return(rt=e((()=>{x(),tt()})))()}function it(){var e=[...arguments],t=ye(e);return y(function(n,r){(t?Xe(e,n,t):Xe(e,n)).subscribe(r)})}function at(){return(at=e((()=>{Ze(),_e(),x()})))()}function ot(e,t){return y(function(n,r){var i=null,a=0,o=!1,s=function(){return o&&!i&&r.complete()};n.subscribe(S(r,function(n){i?.unsubscribe();var o=0,c=a++;ge(e(n,c)).subscribe(i=S(r,function(e){return r.next(t?t(n,e,c,o++):e)},function(){i=null,s()}))},function(){o=!0,s()}))})}function st(){return(st=e((()=>{me(),x(),b()})))()}function ct(e,t,n){var r=h(e)||t||n?{next:e,error:t,complete:n}:e;return r?y(function(e,t){var n;(n=r.subscribe)==null||n.call(r);var i=!0;e.subscribe(S(t,function(e){var n;(n=r.next)==null||n.call(r,e),t.next(e)},function(){var e;i=!1,(e=r.complete)==null||e.call(r),t.complete()},function(e){var n;i=!1,(n=r.error)==null||n.call(r,e),t.error(e)},function(){var e,t;i&&((e=r.unsubscribe)==null||e.call(r)),(t=r.finalize)==null||t.call(r)}))}):ee}function lt(){return(lt=e((()=>{x(),b()})))()}function ut(){if(typeof navigator>`u`)return!1;let e=navigator.userAgentData?.platform??navigator.platform;return/mac|iphone|ipad|ipod/i.test(e??``)}function H(e,t=ut()){let n=t?ft:pt,r=[];t?(e.alt&&r.push(n.alt),e.shift&&r.push(n.shift),e.mod&&r.push(n.mod)):(e.mod&&r.push(n.mod),e.alt&&r.push(n.alt),e.shift&&r.push(n.shift));let i=e.key.toLowerCase();return r.push(mt[i]??(i.length===1?i.toUpperCase():e.key)),r}function dt(e,t=ut()){return H(e,t).join(t?``:`+`)}var ft,pt,mt;function ht(){return(ht=e((()=>{ft={mod:`⌘`,alt:`⌥`,shift:`⇧`},pt={mod:`Ctrl`,alt:`Alt`,shift:`Shift`},mt={arrowup:`↑`,arrowdown:`↓`,arrowleft:`←`,arrowright:`→`,escape:`Esc`,enter:`↵`," ":`Space`}})))()}function gt(e){return{mount:(t,n,r)=>u(()=>e({ctx:n}),t,r)}}function _t(){return(_t=e((()=>{s()})))()}function vt(e,t,n=Ee){let r=e.pipe(j(t),I(n));return Object.defineProperty(r,"value",{get:()=>t(e.value),enumerable:!0}),r}function yt(){return(yt=e((()=>{F(),M(),De()})))()}function bt(){let e={};for(let t of U)e[t]={tabs:[],size:Tt[t],floating:t===`right`||t===`top`,pinned:!1};return{docks:e,mode:`auto`,compactRail:!1,buttons:{}}}function xt(e,t){for(let n of Object.keys(t))if(!Object.is(e[n],t[n]))return!0;return!1}function St(e,t){let n={...e.docks};for(let e of U){let r=t.docks?.[e];r&&(n[e]={...n[e],...r})}return{docks:n,mode:t.mode??e.mode,compactRail:t.compactRail??e.compactRail,buttons:{...e.buttons,...t.buttons}}}function Ct(e){if(!e||typeof e!=`object`)return!1;let t=e;if(t.version!==1||!t.layout||typeof t.layout!=`object`)return!1;let n=t.layout.docks;if(!n||typeof n!=`object`)return!1;let{mode:r,compactRail:i,buttons:a}=t.layout;return r!==void 0&&!(r===`auto`||wt.includes(r))||i!==void 0&&typeof i!=`boolean`||a!==void 0&&(!a||typeof a!=`object`)?!1:U.every(e=>{let t=n[e];if(!t)return!0;let r=e=>e===void 0||typeof e==`boolean`;return Array.isArray(t.tabs)&&(t.size===void 0||typeof t.size==`number`&&Number.isFinite(t.size))&&r(t.floating)&&r(t.pinned)})}var U,wt,Tt,Et,Dt;function Ot(){return(Ot=e((()=>{L(),U=[`left`,`right`,`top`,`bottom`],wt=[`desktop`,`compact`,`embedded`],Tt={left:300,right:340,top:88,bottom:220},Et={left:180,right:180,top:40,bottom:40},Dt=class{#e=R(bt());constructor(e){e&&this.#e.set(St(this.#e.value,e))}get layout(){return this.#e.asReadonly}setDock(e,t){let n=this.#e.value,r=n.docks[e];if(!xt(r,t))return;let i={...r,...t};i.size!==r.size&&(i.size=Math.max(Et[e],Math.round(i.size))),this.#e.set({...n,docks:{...n.docks,[e]:i}})}setMode(e){this.#e.value.mode!==e&&this.#e.set({...this.#e.value,mode:e})}setCompactRail(e){this.#e.value.compactRail!==e&&this.#e.set({...this.#e.value,compactRail:e})}setButtons(e){let t=this.#e.value;xt(t.buttons,e)&&this.#e.set({...t,buttons:{...t.buttons,...e}})}save(){return{version:1,layout:this.#e.value}}restore(e){if(!Ct(e))return!1;let t={};for(let n of U){let r=e.layout.docks?.[n];r&&(t[n]={...r,...r.size===void 0?{}:{size:Math.max(Et[n],Math.round(r.size))}})}return this.#e.set(St(this.#e.value,{...e.layout,docks:t})),!0}}})))()}function kt(){let e={};for(let t of U)e[t]={active:void 0,collapsed:!1};return{docks:e,card:void 0,page:void 0,focus:void 0,railOpen:!1,expanded:!1,fullscreen:!1}}function At(e,t){let n=e.docks[t];return n.collapsed?void 0:n.active}function W(e,t){return vt(e,t,Object.is)}function jt(e){if(!e||typeof e!=`object`)return!1;let t=e;return t.version===1&&!!t.navigation&&typeof t.navigation.docks==`object`&&!!t.navigation.docks}var Mt,Nt;function Pt(){return(Pt=e((()=>{yt(),L(),Ot(),Mt=`right`,Nt=class{#e=R(kt());#t;#n;#r;#i;#a;#o;constructor(e){if(e){let t=this.#e.value,n={...t.docks};for(let t of U)e.docks?.[t]&&(n[t]={...n[t],...e.docks[t]});this.#e.set({...t,docks:n,railOpen:e.railOpen??t.railOpen})}this.#t=W(this.#e.asReadonly,e=>At(e,Mt)),this.#n=W(this.#e.asReadonly,e=>e.card?.id),this.#r=W(this.#e.asReadonly,e=>e.card?.section??e.focus?.section),this.#i=W(this.#e.asReadonly,e=>e.page?.id),this.#a=W(this.#e.asReadonly,e=>e.expanded),this.#o=W(this.#e.asReadonly,e=>e.fullscreen)}get state(){return this.#e.asReadonly}get tab(){return this.#t}get card(){return this.#n}get section(){return this.#r}get page(){return this.#i}get expanded(){return this.#a}get fullscreen(){return this.#o}openTab(e){return At(this.#e.value,e)}setDock(e,t){let n=this.#e.value,r=n.docks[e],i=(!(`active`in t)||t.active===r.active)&&(t.collapsed===void 0||t.collapsed===r.collapsed),a=n.expanded&&t.collapsed!==!1;i&&a===n.expanded||this.#e.set({...n,expanded:a,docks:{...n.docks,[e]:{...r,...t}}})}setExpanded(e){this.#e.value.expanded!==e&&this.#e.set({...this.#e.value,expanded:e})}setFullscreen(e){this.#e.value.fullscreen!==e&&this.#e.set({...this.#e.value,fullscreen:e})}setCard(e){let t=this.#e.value;(t.card?.id!==e?.id||t.card?.section!==e?.section||e?.section)&&this.#e.set({...t,card:e})}setPage(e){let t=this.#e.value;(t.page?.id!==e?.id||t.page?.focus!==e?.focus)&&this.#e.set({...t,page:e})}setFocus(e){let t=this.#e.value;t.focus!==e&&this.#e.set({...t,focus:e})}setRailOpen(e){this.#e.value.railOpen!==e&&this.#e.set({...this.#e.value,railOpen:e})}save(){let{docks:e,card:t,page:n}=this.#e.value;return{version:1,navigation:{docks:e,card:t,page:n}}}restore(e){if(!jt(e))return!1;let t=this.#e.value,n={...t.docks};for(let t of U){let r=e.navigation.docks[t];r&&(n[t]={active:r.active,collapsed:!!r.collapsed})}return this.#e.set({...t,docks:n,card:e.navigation.card,page:e.navigation.page}),!0}}})))()}function Ft(e){let t={};for(let n of U){let r=e.docks?.[n];if(!r)continue;let i={};for(let e of Rt)e in r&&(i[e]=r[e]);t[n]=i}return{docks:t,...e.mode?{mode:e.mode}:{},compactRail:!!e.compactRail,buttons:e.buttons??{}}}function It(e){let t={};for(let n of U){let r=e.docks?.[n];r&&(t[n]={...`active`in r?{active:r.active}:{},...r.collapsed===void 0?{}:{collapsed:r.collapsed}})}return{docks:t}}var Lt,Rt,zt;function Bt(){return(Bt=e((()=>{Pt(),Ot(),L(),t(),Lt=class{#e;#t;#n;constructor(e,t){this.id=e,this.#e=R(t),this.#t=R([]),this.#n=R(void 0)}get state(){return this.#e.asReadonly}get tabs(){return this.#t.asReadonly}get active(){return this.#n.asReadonly}sync(e,t){this.#e.set(e);let n=e.tabs.map(e=>t.get(e)).filter(e=>!!e);this.#t.set(n),this.#n.set(e.collapsed?void 0:n.find(t=>t.id===e.active))}},Rt=[`tabs`,`size`,`floating`,`pinned`],zt=class extends f{#e=new Map;#t=new Map;#n=new Map;#r;#i;#a=R(void 0);#o;#s=R(!0);#c=R(0);#l=R(`desktop`);#u=R(void 0,{compare:Object.is});#d;#f=R(void 0,{compare:Object.is});#p=R(!1);#m=R(!1);#h=R([]);#g=R([]);#_=R([]);#v=new Map;#y;constructor(e={}){super(),this.#y=e.compactWidth??720,this.#r=e.viewState??new Dt(Ft(e)),this.#i=e.navigation??new Nt(It(e)),this.#o={};for(let e of U)this.#o[e]=new Lt(e,this.#S(e));this.subscribePermanently(this.#r.layout,()=>this.#w()),this.subscribePermanently(this.#i.state,()=>this.#w())}get viewState(){return this.#r}get navigation(){return this.#i}get compactRail(){return this.#p.asReadonly}get railOpen(){return this.#m.asReadonly}get railShown(){return this.#s.asReadonly}setCompactRail(e){this.#r.setCompactRail(e),this.setRailOpen(!1)}setRailOpen(e){this.#r.layout.value.compactRail&&!e&&(this.closeOverlay(),this.#i.setDock(`right`,{collapsed:!0})),this.#i.setRailOpen(e)}toggleRail(){this.#r.layout.value.compactRail&&this.setRailOpen(!this.#i.state.value.railOpen)}get expanded(){return this.#i.expanded}setExpanded(e){e&&this.closeOverlay(),this.#i.setExpanded(e)}dock(e){return this.#o[e]}get mode(){return this.#l.asReadonly}#b=new Map;sectionOpen(e,t){return this.#b.get(`${e}\n${t}`)}setSectionOpen(e,t,n){this.#b.set(`${e}\n${t}`,n)}get tabFocus(){return this.#f.asReadonly}get overlay(){return this.#u.asReadonly}get page(){return this.#a.asReadonly}get toolbar(){return this.#g.asReadonly}sections(e){let t=this.#v.get(e);if(!t){let n=R([]),r=t=>n.set(t.filter(t=>t.slot===e).sort((e,t)=>(e.order??0)-(t.order??0)));r(this.#_.value),this.subscribePermanently(this.#_.asReadonly,r),t=n.asReadonly,this.#v.set(e,t)}return t}registerSections(e){return this.#_.set([...this.#_.value,...e]),()=>this.#_.set(this.#_.value.filter(t=>!e.includes(t)))}registerToolbar(e){return this.#h.set((e=>[...e].sort((e,t)=>(e.order??0)-(t.order??0)))([...this.#h.value,...e])),this.#E(),()=>{this.#h.set(this.#h.value.filter(t=>!e.includes(t))),this.#E()}}setButtons(e){this.#r.setButtons(e)}get layout(){let e={};for(let t of U)e[t]=this.#S(t);return{docks:e,mode:this.#r.layout.value.mode}}registerTabs(e){let t=[...e].sort((e,t)=>(e.order??0)-(t.order??0));for(let e of t){this.#e.set(e.id,e);let t=this.#x(e.id)??e.dock??`right`,n=this.#S(t),r=n.tabs;if(!r.includes(e.id)){let t=e.order??0,n=r.findIndex(e=>(this.#e.get(e)?.order??0)>t);r=n<0?[...r,e.id]:[...r.slice(0,n),e.id,...r.slice(n)]}this.#C(t,{tabs:r,active:n.active??e.id})}return this.#w(),()=>{for(let e of t){if(this.#e.get(e.id)!==e)continue;this.#e.delete(e.id);let t=this.#x(e.id);if(!t)continue;let n=this.#S(t),r=n.tabs.filter(t=>t!==e.id);this.#C(t,{tabs:r,active:n.active===e.id?r[0]:n.active})}this.#w()}}registerOverlays(e){for(let t of e)this.#t.set(t.id,t);return this.#w(),()=>{for(let t of e)this.#t.get(t.id)===t&&(this.#t.delete(t.id),this.#i.state.value.card?.id===t.id&&this.closeOverlay());this.#w()}}registerPages(e){for(let t of e)this.#n.set(t.id,t);return this.#w(),()=>{for(let t of e)this.#n.get(t.id)===t&&(this.#n.delete(t.id),this.#i.state.value.page?.id===t.id&&this.closePage());this.#w()}}openPage(e,t){this.#n.has(e)&&(this.closeOverlay(),this.#i.setPage({id:e,...t?{focus:t}:{}}))}closePage(){this.#i.setPage(void 0)}show(e,t){let n=this.#x(e);n&&(t?this.#i.setFocus({tab:e,section:t}):this.#i.state.value.focus?.tab===e&&this.#i.setFocus(void 0),this.#C(n,{active:e,collapsed:!1}))}select(e){let t=this.#x(e);if(!t)return;this.#i.state.value.focus?.tab===e&&this.#i.setFocus(void 0);let n=this.#S(t);n.active===e&&!n.collapsed?this.#C(t,{collapsed:!0}):this.#C(t,{active:e,collapsed:!1})}toggle(e){this.#C(e,{collapsed:!this.#S(e).collapsed})}move(e,t,n){let r=this.#x(e);if(!r||!this.#e.has(e))return;let i=this.#S(r),a=i.tabs.filter(t=>t!==e);this.#C(r,{tabs:a,active:i.active===e?a[0]:i.active});let o=[...this.#S(t).tabs.filter(t=>t!==e)];o.splice(n??o.length,0,e),this.#C(t,{tabs:o,active:e,collapsed:!1})}setSize(e,t){this.#r.setDock(e,{size:t})}setFloating(e,t){this.#r.setDock(e,{floating:t})}setPinned(e,t){this.#r.setDock(e,{pinned:t})}setMode(e){this.#r.setMode(e)}setWidth(e){this.#c.set(e),this.#D()}openOverlay(e,t,n){if(!this.#t.has(e))return;this.#d=t?{id:e,element:t}:this.#d?.id===e?this.#d:void 0;let r=this.#u.value;this.#i.setCard({id:e,...n?{section:n}:{}}),this.#u.value===r&&this.#T(!0)}toggleOverlay(e,t){this.#i.state.value.card?.id===e?this.closeOverlay():this.openOverlay(e,t)}closeOverlay(){this.#d=void 0,this.#i.setCard(void 0)}#x(e){let t=this.#r.layout.value.docks;for(let n of U)if(t[n].tabs.includes(e))return n}#S(e){let t=this.#r.layout.value.docks[e],n=this.#i.state.value.docks[e];return{...t,active:n.active,collapsed:n.collapsed}}#C(e,t){let n={};for(let e of Rt)e in t&&(n[e]=t[e]);Object.keys(n).length&&this.#r.setDock(e,n);let r={};`active`in t&&(r.active=t.active),`collapsed`in t&&(r.collapsed=t.collapsed),Object.keys(r).length&&this.#i.setDock(e,r)}#w(){if(!this.#o)return;for(let e of U)this.#o[e].sync(this.#S(e),this.#e);let e=this.#r.layout.value,t=this.#i.state.value;this.#p.set(e.compactRail),this.#m.set(t.railOpen),this.#s.set(!e.compactRail||t.railOpen),this.#f.set(t.focus);let n=t.page?this.#n.get(t.page.id):void 0,r=this.#a.value;n?(r?.page!==n||r.focus!==t.page?.focus)&&this.#a.set({page:n,...t.page?.focus?{focus:t.page.focus}:{}}):this.#a.set(void 0),this.#T(!1),this.#E(),this.#D()}#T(e){let t=this.#i.state.value.card,n=t?this.#t.get(t.id):void 0;if(!n||!t){this.#u.set(void 0);return}let r=this.#u.value,i=this.#d?.id===t.id?this.#d.element:void 0;(e||r?.overlay!==n||r.anchor!==i||r.focus!==t.section)&&this.#u.set({overlay:n,...i?{anchor:i}:{},...t.section?{focus:t.section}:{}})}#E(){let e=this.#r.layout.value.buttons;this.#g.set(this.#h.value.filter(t=>e[t.id]!==!1))}#D(){let e=this.#r.layout.value.mode,t=this.#c.value;this.#l.set(e===`auto`?t>0&&t<this.#y?`compact`:`desktop`:e)}}})))()}var G;function Vt(){return(Vt=e((()=>{m(),G={ask:`msp-command-menu-ask`,askIcon:`msp-command-menu-askIcon`,askKeys:`msp-command-menu-askKeys`,askLabel:`msp-command-menu-askLabel`,askText:`msp-command-menu-askText`,before:`msp-command-menu-before`,caption:`msp-command-menu-caption`,command:`msp-command-menu-command`,crumb:`msp-command-menu-crumb`,empty:`msp-command-menu-empty`,error:`msp-command-menu-error`,footer:`msp-command-menu-footer`,head:`msp-command-menu-head`,headIcon:`msp-command-menu-headIcon`,hint:`msp-command-menu-hint`,input:`msp-command-menu-input`,keys:`msp-command-menu-keys`,list:`msp-command-menu-list`,listContent:`msp-command-menu-listContent`,menu:`msp-command-menu-menu`,"menu-fade":`msp-command-menu-menu-fade`,"menu-in":`msp-command-menu-menu-in`,message:`msp-command-menu-message`,more:`msp-command-menu-more`,proposed:`msp-command-menu-proposed`,rest:`msp-command-menu-rest`,row:`msp-command-menu-row`,rowChevron:`msp-command-menu-rowChevron`,rowIcon:`msp-command-menu-rowIcon`,rowMeta:`msp-command-menu-rowMeta`,rowTitle:`msp-command-menu-rowTitle`,run:`msp-command-menu-run`,scrim:`msp-command-menu-scrim`,sentence:`msp-command-menu-sentence`,spacer:`msp-command-menu-spacer`,srOnly:`msp-command-menu-srOnly`,tail:`msp-command-menu-tail`,token:`msp-command-menu-token`,value:`msp-command-menu-value`,view:`msp-command-menu-view`},p(`views/command-menu/command-menu.module.css`,`@layer msp.components {
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

.msp-command-menu-rest {
  pointer-events: none;
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

  &[aria-selected="true"] .msp-command-menu-rowMeta {
    color: var(--msp-color-text-muted);
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
    color: var(--msp-color-accent-strong);
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

.msp-command-menu-view {
  align-items: center;
  gap: var(--msp-space-1);
  height: 28px;
  padding: 0 var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  white-space: nowrap;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-command-menu-run {
  align-items: center;
  gap: var(--msp-space-2);
  height: 28px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-accent);
  color: var(--msp-color-on-accent);
  font-size: var(--msp-font-size-sm);
  font-weight: 600;
  display: flex;

  & kbd {
    box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-on-accent), transparent 50%);
    color: inherit;
    background: none;
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
  gap: var(--msp-space-3);
  min-height: 32px;
  margin: 0 var(--msp-space-2) var(--msp-space-2);
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  flex: none;
  grid-template-columns: 16px auto minmax(0, 1fr) auto;
  display: grid;

  &:hover, &[data-default] {
    background: var(--msp-color-hover);
  }

  &[data-setup] {
    color: var(--msp-color-text-muted);
    grid-template-columns: 16px minmax(0, 1fr);

    & .msp-command-menu-askIcon {
      color: var(--msp-color-text-subtle);
    }
  }
}

.msp-command-menu-askIcon {
  color: var(--msp-color-accent);
  justify-self: center;
}

.msp-command-menu-askLabel {
  color: var(--msp-color-text);
  font-weight: 500;
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

.msp-command-menu-srOnly {
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
}
}
`)})))()}function Ht(e,t,n,r){let i=e.assistant,a=n.trim();return i.ready()?{id:`assistant-ask`,label:`Ask AI assistant`,detail:`“${a}”`,icon:`sparkles`,run:()=>{let e=i.propose(a);if(e)return r(a),t.open(e.command,e.tail).kind===`form`;i.ask(a)}}:{id:`assistant-setup`,label:`Set up the assistant to ask`,detail:`“${a}”`,icon:`sparkles`,run:()=>i.setup()}}function Ut(e){let{manager:t}=e,i=R(void 0);r(t.active,e=>{e||i.set(void 0)}),r(t.outcomes,t=>{t.kind===`done`&&e.onClose()}),n(()=>t.close());let a=de(),s;return n(()=>a(s)),o(`div`,{class:G.scrim,"data-keeps-card":``,onPointerDown:t=>{t.target===t.currentTarget&&e.onClose()},children:o(`div`,{class:G.menu,role:`dialog`,"aria-modal":`true`,"aria-label":`Commands`,ref:e=>{s=e},onKeyDown:t=>{ue(t,t.currentTarget),!(t.key!==`Escape`||t.defaultPrevented)&&(t.preventDefault(),t.stopPropagation(),e.onClose())},children:o(k,{when:t.active,fallback:()=>o(Wt,{...e,onPropose:e=>i.set(e)}),children:n=>o(Qt,{manager:t,invocation:n,proposed:i.asReadonly,onClose:e.onClose,...e.direct?{direct:!0}:{}})})})})}function Wt(e){let{manager:t}=e,i=R(e.initial??``),s=R(e.group),l=R(0),u=R(void 0),d=ne(`msp-command-list`),f=e=>`${d}-${e}`,p=[...e.prefixes??[],qt(e,e=>ie(e))],m=e=>p.find(t=>e.startsWith(t.char)),h=P([i.asReadonly,s.asReadonly,t.commands,t.groups]).pipe(j(([e,n])=>{let r=[],i=0,a=e=>{e.kind!==`caption`&&(e.index=i++),r.push(e)},o=m(e);if(o){for(let t of o.items(e.slice(o.char.length).trimStart()))a({kind:`item`,item:t,index:0});return r}if(!e.trim()){let{groups:e,commands:i}=t.children(n);if(n===void 0){let n=t.query(``);if(n.recent.length){a({kind:`caption`,label:`Recent`});for(let e of n.recent)a({kind:`match`,match:e,index:0})}e.length&&a({kind:`caption`,label:`Browse`})}for(let t of e)a({kind:`group`,group:t,index:0});if(n!==void 0){let e=new Set(i.map(e=>e.command.category)),t;for(let n of i)e.size>1&&n.command.category!==t&&(t=n.command.category,a({kind:`caption`,label:t})),a({kind:`match`,match:n,index:0});return r}let o=new Set(t.query(``).recent.map(e=>e.command)),s=new Map;for(let e of i){if(o.has(e.command))continue;let t=s.get(e.command.category);t?t.push(e):s.set(e.command.category,[e])}for(let[e,t]of s){a({kind:`caption`,label:e});for(let e of t)a({kind:`match`,match:e,index:0})}return r}let s=t.query(e),c=e=>n===void 0||t.inGroup(e.command,n);s.direct&&c(s.direct)&&a({kind:`match`,match:s.direct,tail:s.direct.tail,index:0});let l=t.groups.value.filter(r=>(n===void 0||t.groupPath(r.id).some(e=>e.id===n))&&r.id!==n&&(ke(r.title,e)??-1)>=0);for(let e of l)a({kind:`group`,group:e,index:0});for(let e of s.matches)e.command!==s.direct?.command&&c(e)&&a({kind:`match`,match:e,index:0});return r}),le({bufferSize:1,refCount:!0})),g=[],_=()=>g.filter(e=>e.kind!==`caption`),ee=()=>{e.assistant&&(e.assistant.ready()?i.value.trim()&&!m(i.value)&&!Ht(e,t,i.value,e.onPropose).run()&&!t.active.value&&e.onClose():(e.assistant.setup(),e.onClose()))},v=P([i.asReadonly,h]).pipe(j(([e,t])=>!!e.trim()&&!m(e)&&!t.some(e=>e.kind!==`caption`)),I());r(h,e=>{g=e,l.value>=_().length&&l.set(0)});let y=R({n:tn}),b=P([h,y.asReadonly]).pipe(j(([e,t])=>e.length<=(t.of===e?t.n:tn)?e:e.slice(0,t.of===e?t.n:tn)),I((e,t)=>e.length===t.length&&e[0]===t[0]&&e[e.length-1]===t[t.length-1])),x=P([h,b]).pipe(j(([e,t])=>(e.length-t.length)*nn),I()),S=e=>{let t=y.value,n=t.of===g?t.n:tn;e>n&&n<g.length&&y.set({of:g,n:Math.max(e,n+tn)})};r(l.asReadonly,e=>{let t=g.findIndex(t=>t.kind!==`caption`&&t.index===e);t>=0&&S(t+1)});let te=je(l.asReadonly),re=P([l.asReadonly,h]).pipe(j(([e,t])=>t.some(e=>e.kind!==`caption`)?f(e):void 0),I()),C=P([i.asReadonly,h]).pipe(pe(400),j(([t,n])=>{if(!t.trim())return``;let r=n.filter(e=>e.kind!==`caption`).length;return r?r===1?`1 result`:`${r} results`:e.assistant?`No command matches: ask AI assistant.`:`Nothing matches.`}),I()),ie=e=>{i.set(e),E.value=e,l.set(0),u.set(void 0)},w=e=>{s.set(e),ie(``)},T=n=>{if(n.kind===`group`)return w(n.group.id);if(n.kind===`item`){!n.item.run()&&!t.active.value&&e.onClose();return}if(n.match.blocked)return u.set(n.match.blocked);let r=t.open(n.match.command.id,n.tail,n.match.preset?.id);r.kind===`blocked`?u.set(r.reason):r.kind===`ran`&&e.onClose()},ae=()=>{let e=t.groupPath(s.value);return e.length?(w(e[e.length-2]?.id),!0):!1},oe=P([i.asReadonly,s.asReadonly]).pipe(j(([e,n])=>{let r=m(e);return r?r.placeholder??r.title:n===void 0?`Search commands, or type ? for help`:`Search in ${t.groupPath(n).pop()?.title}`})),E=o(`input`,{class:G.input,type:`text`,role:`combobox`,"aria-expanded":`true`,"aria-controls":d,"aria-autocomplete":`list`,"aria-activedescendant":re,"aria-label":`Command`,placeholder:oe,spellcheck:!1,value:i,onInput:e=>{i.set(e.currentTarget.value),l.set(0),u.set(void 0)},onKeyDown:t=>{let n=_().length,r=!t.currentTarget.value;if(t.key===`ArrowDown`||t.key===`ArrowUp`)t.preventDefault(),n&&l.set((l.value+(t.key===`ArrowDown`?1:n-1))%n);else if(t.key===`Enter`){t.preventDefault();let e=_()[l.value];t.metaKey||t.ctrlKey?ee():e?T(e):ee()}else if(t.key===`ArrowRight`&&r){let e=_()[l.value];e?.kind===`group`&&(t.preventDefault(),w(e.group.id))}else(t.key===`Backspace`||t.key===`ArrowLeft`)&&r?ae()&&t.preventDefault():t.key===`Escape`&&(t.preventDefault(),t.stopPropagation(),e.onClose())}});return queueMicrotask(()=>E.focus()),c(a,{children:[c(`div`,{class:G.head,children:[o(B,{name:`search`,size:15,class:G.headIcon}),o(A,{each:s.asReadonly.pipe(j(e=>t.groupPath(e))),children:e=>c(`button`,{type:`button`,class:G.crumb,onClick:()=>w(e.id),children:[e.title,o(B,{name:`chevron-right`,size:12})]})}),E]}),o(k,{when:u,children:e=>o(`p`,{class:G.message,role:`alert`,children:e})}),o(`span`,{class:G.srOnly,role:`status`,"aria-live":`polite`,children:C}),c(V,{class:G.list,contentClass:G.listContent,id:d,role:`listbox`,"aria-label":`Commands`,viewportRef:e=>{let t=()=>S(Math.ceil((e.scrollTop+2*e.clientHeight)/nn));e.addEventListener(`scroll`,t,{passive:!0}),n(()=>e.removeEventListener(`scroll`,t))},children:[o(A,{each:b,fallback:()=>o(`p`,{class:G.empty,children:e.assistant?`No command matches: ask AI assistant.`:`Nothing matches.`}),children:e=>{if(e.kind===`caption`)return o(`div`,{class:G.caption,role:`presentation`,children:e.label});let n=e.index,r=f(n),a=te.is(n),c=()=>l.set(n);return e.kind===`group`?o(Jt,{id:r,manager:t,group:e.group,selected:a,onPick:()=>T(e),onHover:c}):e.kind===`item`?o(Yt,{id:r,item:e.item,selected:a,onPick:()=>T(e),onHover:c}):o(Xt,{id:r,row:e,path:Kt(t,e.match.command.group,s.value),inGroup:s.value!==void 0,query:i.asReadonly,selected:a,onPick:()=>T(e),onHover:c})}}),o(k,{when:x.pipe(j(e=>e>0)),children:()=>o(`div`,{class:G.rest,role:`presentation`,style:{height:x.pipe(j(e=>`${e}px`))}})})]}),e.assistant?o(Gt,{ready:e.assistant.ready(),text:i.asReadonly.pipe(j(e=>m(e)?``:e.trim())),unmatched:v,onAsk:()=>{e.assistant?.ready()?i.value.trim()?ee():E.focus():(e.assistant?.setup(),e.onClose())}}):null,o(en,{hints:[[`↑↓`,`move`],[`↵`,`run`],...e.assistant?.ready()?[[ut()?`⌘↵`:`Ctrl+↵`,`ask`]]:[],[`→`,`open group`],[`?`,`help`],[`esc`,`close`]]})]})}function Gt(e){return e.ready?c(`button`,{type:`button`,class:G.ask,"data-default":e.unmatched.pipe(j(e=>e?``:void 0)),onClick:()=>e.onAsk(),children:[o(B,{name:`sparkles`,size:15,class:G.askIcon}),o(`span`,{class:G.askLabel,children:`Ask AI assistant`}),o(`span`,{class:G.askText,children:e.text.pipe(j(e=>e?`“${e}”`:`describe what you want, in your words`))}),o(`kbd`,{class:G.askKeys,children:e.unmatched.pipe(j(e=>e?`↵`:ut()?`⌘↵`:`Ctrl+↵`))})]}):c(`button`,{type:`button`,class:G.ask,"data-setup":``,onClick:()=>e.onAsk(),children:[o(B,{name:`sparkles`,size:15,class:G.askIcon}),o(`span`,{class:G.askText,children:`Set up an AI assistant`})]})}function Kt(e,t,n){let r=e.groupPath(t),i=n===void 0?-1:r.findIndex(e=>e.id===n);return r.slice(i+1).map(e=>e.title)}function qt(e,t){return{char:`?`,title:`Help`,placeholder:`Prefixes and shortcuts`,items:n=>{let r=n.toLowerCase(),i=(e.prefixes??[]).map(e=>({id:`prefix:${e.char}`,label:`${e.char}  ${e.title}`,detail:e.placeholder,icon:`command`,run:()=>(t(e.char),!0)})),a=e.manager.commands.value.filter(e=>e.shortcut).map(t=>({id:`keys:${t.id}`,label:t.title,detail:dt(t.shortcut),icon:t.icon??`keyboard`,run:()=>{e.manager.open(t.id)}}));return[...e.manager.get(`help.show`)?[{id:`help:card`,label:`Keyboard and mouse`,detail:`The Help card`,icon:`circle-help`,run:()=>{e.manager.open(`help.show`)}}]:[],...i,...a].filter(e=>!r||e.label.toLowerCase().includes(r))}}}function Jt(e){let t=e.manager.groupPath(e.group.parent).map(e=>e.title),n=c(`div`,{id:e.id,class:G.row,role:`option`,"aria-selected":e.selected,onClick:()=>e.onPick(),onPointerMove:()=>e.onHover(),children:[o(`span`,{class:G.rowIcon,children:o(B,{name:e.group.icon??`list-tree`,size:15})}),o(`span`,{class:G.rowTitle,children:e.group.title}),o(`span`,{class:G.rowMeta,children:t.join(` › `)}),o(B,{name:`chevron-right`,size:14,class:G.rowChevron})]});return r(e.selected,e=>e&&queueMicrotask(()=>n.scrollIntoView?.({block:`nearest`}))),n}function Yt(e){let{item:t}=e,n=c(`div`,{id:e.id,class:G.row,role:`option`,"aria-selected":e.selected,onClick:()=>e.onPick(),onPointerMove:()=>e.onHover(),children:[o(`span`,{class:G.rowIcon,children:t.icon?o(B,{name:t.icon,size:15}):null}),o(`span`,{class:G.rowTitle,children:t.label}),o(`span`,{class:G.rowMeta,children:t.detail})]});return r(e.selected,e=>e&&queueMicrotask(()=>n.scrollIntoView?.({block:`nearest`}))),n}function Xt(e){let{match:t,tail:n}=e.row,i=t.command,a=t.preset?`${i.title.replace(/…$/,``)} ${t.preset.title}`:i.title,s=c(`div`,{id:e.id,class:G.row,role:`option`,"aria-selected":e.selected,"aria-disabled":t.blocked?`true`:void 0,onClick:()=>e.onPick(),onPointerMove:()=>e.onHover(),children:[o(`span`,{class:G.rowIcon,children:i.icon?o(B,{name:i.icon,size:15}):null}),c(`span`,{class:G.rowTitle,children:[e.query.pipe(j(e=>Zt(a,n?``:e))),n?o(`span`,{class:G.tail,children:n}):null]}),o(`span`,{class:G.rowMeta,children:t.blocked??(e.path.length?e.path.join(` › `):e.inGroup?``:i.category)}),i.shortcut?o(`kbd`,{class:G.keys,children:dt(i.shortcut)}):null]});return r(e.selected,e=>{e&&queueMicrotask(()=>s.scrollIntoView?.({block:`nearest`}))}),s}function Zt(e,t){let n=new Set(Oe(e,t));if(!n.size)return e;let r=[],i=``,s=!1,c=()=>{i&&=(r.push(s?o(`mark`,{children:i}):i),``)};for(let t=0;t<e.length;t++){let r=n.has(t);r!==s&&(c(),s=r),i+=e[t]}return c(),o(a,{children:r})}function Qt(e){let{manager:t,invocation:n}=e,r=n.state,i=n.command,s=r.pipe(j(e=>e.fields.find(t=>t.id===e.field)),I()),l=ne(`msp-command-options`),u=e=>`${l}-${e}`,d=o(`input`,{class:G.input,type:`text`,role:`combobox`,"aria-expanded":r.pipe(j(e=>e.completions.length>0)),"aria-controls":l,"aria-autocomplete":`list`,"aria-activedescendant":r.pipe(j(e=>e.pick>=0&&e.pick<e.completions.length?u(e.pick):void 0),I()),"aria-label":s.pipe(j(e=>e?.label??i.title)),placeholder:s.pipe(j(e=>e?e.label:`Enter to run`)),spellcheck:!1,value:r.pipe(j(e=>e.text)),onInput:e=>n.type(e.currentTarget.value),onKeyDown:e=>{e.key===`Enter`&&e.altKey&&i.view?(e.preventDefault(),p()):e.key===`Enter`?(e.preventDefault(),n.enter()):e.key===`Tab`?(e.preventDefault(),n.tab(e.shiftKey?-1:1)):e.key===`ArrowDown`||e.key===`ArrowUp`?(e.preventDefault(),n.move(e.key===`ArrowDown`?1:-1)):e.key===`Backspace`&&!e.currentTarget.value?(e.preventDefault(),n.back()||f()):e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),f())}});queueMicrotask(()=>d.focus());let f=()=>{t.close(),e.direct&&e.onClose()},p=()=>{let n=i.view;n&&(t.close(),e.onClose(),n.open(t.context.value))};return c(a,{children:[o(k,{when:e.proposed,children:e=>c(`p`,{class:G.proposed,children:[o(B,{name:`sparkles`,size:13,class:G.askIcon}),`Proposed by the assistant from “`,e,`”: check it, then Enter to run`]})}),c(`div`,{class:G.head,children:[c(`span`,{class:G.command,children:[i.icon?o(B,{name:i.icon,size:15}):null,i.title.replace(/…$/,``)]}),d]}),c(`div`,{class:G.sentence,"aria-label":`Arguments`,children:[o(A,{each:r.pipe(j(e=>e.fields)),children:e=>o($t,{field:e,state:r,onFocus:()=>{n.focus(e.id),d.focus()}})},e=>e.id),o(`span`,{class:G.spacer}),i.view?c(`button`,{type:`button`,class:G.view,title:`Open ${i.view.title} (⌥↵)`,onClick:p,children:[i.view.title,o(B,{name:`chevron-right`,size:13})]}):null,c(`button`,{type:`button`,class:G.run,onClick:()=>void n.enter(),children:[r.pipe(j(e=>e.action)),o(`kbd`,{children:`↵`})]})]}),o(k,{when:r.pipe(j(e=>e.error)),children:e=>c(`p`,{class:G.error,role:`alert`,children:[e.message,e.hint?c(`span`,{class:G.hint,children:[` `,e.hint]}):null]})}),o(V,{class:G.list,contentClass:G.listContent,id:l,role:`listbox`,"aria-label":`Options`,children:o(A,{each:r.pipe(j(e=>e.completions)),children:(e,t)=>c(`div`,{id:t.pipe(j(u)),class:G.row,role:`option`,"aria-selected":P([r,t]).pipe(j(([e,t])=>e.pick===t)),onClick:()=>n.accept(t.value),onPointerMove:()=>n.point(t.value),children:[o(`span`,{class:G.rowIcon}),o(`span`,{class:G.rowTitle,children:e.label}),o(`span`,{class:G.rowMeta,children:e.detail??(e.value===e.label?``:e.value)})]})})}),o(k,{when:r.pipe(j(e=>e.formOnly.length>0)),children:()=>o(`p`,{class:G.more,children:r.pipe(j(e=>`+ ${e.formOnly.length} more option${e.formOnly.length>1?`s`:``} at their defaults`))})}),o(en,{hints:[[`tab`,`next field`],[`↵`,`run`],...i.view?[[`⌥↵`,`open in the UI`]]:[],[`⌫`,`back`],e.direct?[`esc`,`close`]:[`esc`,`commands`]]})]})}function $t(e){let{field:t}=e,n=e.state.pipe(j(e=>{let n=e.values[t.id];if(n!==void 0&&n!==``)return t.options?.find(e=>e.value===String(n))?.label??String(n)}));return c(`span`,{class:G.token,children:[t.before?o(`span`,{class:G.before,children:t.before}):null,o(`button`,{type:`button`,class:G.value,"data-active":e.state.pipe(j(e=>e.field===t.id?``:void 0)),"data-missing":e.state.pipe(j(e=>e.missing.includes(t.id)?``:void 0)),"data-empty":n.pipe(j(e=>e===void 0?``:void 0)),onClick:()=>e.onFocus(),children:n.pipe(j(e=>e??t.label))})]})}function en(e){return o(`div`,{class:G.footer,children:e.hints.map(([e,t])=>c(`span`,{children:[o(`kbd`,{children:e}),` `,t]}))})}var tn,nn;function rn(){return(rn=e((()=>{N(),fe(),F(),M(),te(),ht(),z(),Ae(),D(),re(),i(),Me(),L(),Vt(),l(),tn=24,nn=28})))()}var K;function an(){return(an=e((()=>{m(),K={body:`msp-settings-settings-tab-body`,chevron:`msp-settings-settings-tab-chevron`,group:`msp-settings-settings-tab-group`,groups:`msp-settings-settings-tab-groups`,groupsContent:`msp-settings-settings-tab-groupsContent`,header:`msp-settings-settings-tab-header`,none:`msp-settings-settings-tab-none`,search:`msp-settings-settings-tab-search`,searchIcon:`msp-settings-settings-tab-searchIcon`,searchInput:`msp-settings-settings-tab-searchInput`,tab:`msp-settings-settings-tab-tab`,title:`msp-settings-settings-tab-title`,toggle:`msp-settings-settings-tab-toggle`},p(`views/settings/settings-tab.module.css`,`@layer msp.components {
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
  grid-template-columns: minmax(0, 1fr);
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
`)})))()}function on(e){let{model:t}=e,n=R(``),r=n.asReadonly,i=r.pipe(j(e=>e.trim().length>0&&!t.groups.some(t=>E(t.form.params,e))),I());return c(`div`,{class:K.tab,children:[c(`div`,{class:K.search,children:[o(B,{name:`search`,size:14,class:K.searchIcon}),o(ze,{search:!0,size:`sm`,class:K.searchInput,"aria-label":`Search settings`,placeholder:`Search settings`,value:r,onInput:e=>n.set(e)})]}),c(V,{class:K.groups,contentClass:K.groupsContent,children:[t.groups.map((e,t)=>o(sn,{group:e,query:r,open:t===0})),o(k,{when:i,children:()=>c(`p`,{class:K.none,children:[`No setting matches “`,r,`”.`]})}),e.more?.()]})]})}function sn(e){let{group:t,query:n}=e,r=R(e.open),i=n.pipe(j(e=>e.trim().length>0),I()),a=P([r.asReadonly,i]).pipe(j(([e,t])=>e||t),I()),s=n.pipe(j(e=>!E(t.form.params,e)),I());return c(`section`,{class:K.group,hidden:s,"aria-label":t.title,children:[o(`div`,{class:K.header,children:c(`button`,{type:`button`,class:K.toggle,"aria-expanded":a,onClick:()=>r.set(!r.value),children:[o(`span`,{class:K.title,children:t.title}),o(B,{name:`chevron-down`,size:14,class:K.chevron})]})}),o(k,{when:a,reveal:!0,children:()=>o(`div`,{class:K.body,"data-wide-labels":t.wideLabels?``:void 0,children:o(se,{form:t.form,filter:n})})})]})}function cn(){return(cn=e((()=>{N(),F(),M(),z(),ae(),Ae(),Re(),D(),L(),an(),l()})))()}var q;function ln(){return(ln=e((()=>{m(),q={action:`msp-shell-help-panel-action`,conflict:`msp-shell-help-panel-conflict`,conflicts:`msp-shell-help-panel-conflicts`,content:`msp-shell-help-panel-content`,group:`msp-shell-help-panel-group`,heading:`msp-shell-help-panel-heading`,help:`msp-shell-help-panel-help`,input:`msp-shell-help-panel-input`,key:`msp-shell-help-panel-key`,keys:`msp-shell-help-panel-keys`,list:`msp-shell-help-panel-list`,or:`msp-shell-help-panel-or`,row:`msp-shell-help-panel-row`},p(`views/shell/help-panel.module.css`,`@layer msp.components {
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
`)})))()}function un(e){let t=e.commands.commands.pipe(j(e=>e.filter(e=>e.shortcut))),n=t.pipe(j(pn));return c(V,{edge:!0,class:q.help,contentClass:q.content,"aria-label":`Help`,children:[e.intro?.(),o(k,{when:n.pipe(j(e=>e.length?e:void 0)),children:e=>c(`section`,{class:q.conflicts,"aria-label":`Shortcut conflicts`,children:[o(B,{name:`triangle-alert`,size:14}),o(`div`,{children:e.map(([e,t])=>c(`p`,{class:q.conflict,children:[o(fn,{input:e}),` is used by `,t.join(` and `),`: only the first runs.`]}))})]})}),o(A,{each:e.bindings,children:e=>o(dn,{title:e.title,bindings:e.bindings})}),o(dn,{title:`Everywhere`,bindings:mn()}),o(k,{when:t.pipe(j(e=>e.length?e:void 0)),children:e=>o(dn,{title:`Commands`,bindings:e.map(e=>({action:e.title,input:H(e.shortcut)}))})})]})}function dn(e){return c(`section`,{class:q.group,"aria-label":e.title,children:[o(`h3`,{class:q.heading,children:e.title}),o(`dl`,{class:q.list,children:e.bindings.map(e=>c(`div`,{class:q.row,children:[o(`dt`,{class:q.action,children:e.action}),c(`dd`,{class:q.input,children:[o(fn,{input:e.input}),e.or?c(a,{children:[o(`span`,{class:q.or,children:`or`}),o(fn,{input:e.or})]}):null]})]}))})]})}function fn(e){return o(`span`,{class:q.keys,children:e.input.map(e=>o(`kbd`,{class:q.key,children:e}))})}function pn(e){let t=new Map;for(let n of e){let e=H(n.shortcut).join(`+`);t.set(e,[...t.get(e)??[],n])}return[...t.values()].filter(e=>e.length>1).map(e=>[H(e[0].shortcut),e.map(e=>e.title)])}var mn;function hn(){return(hn=e((()=>{M(),ht(),z(),Ae(),D(),ln(),l(),mn=()=>[{action:`Command menu`,input:H({key:`k`,mod:!0}),or:H({key:`p`,mod:!0,shift:!0})},{action:`Help (this card)`,input:[`?`]},{action:`Close a menu, a card or the command menu`,input:[`Esc`]}]})))()}var J;function gn(){return(gn=e((()=>{m(),J={empty:`msp-shell-log-view-empty`,entry:`msp-shell-log-view-entry`,kind:`msp-shell-log-view-kind`,log:`msp-shell-log-view-log`,text:`msp-shell-log-view-text`,time:`msp-shell-log-view-time`},p(`views/shell/log-view.module.css`,`@layer msp.components {
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
`)})))()}var Y;function _n(){return(_n=e((()=>{m(),Y={announce:`msp-shell-canvas-announce`,bottom:`msp-shell-canvas-bottom`,bottomGrid:`msp-shell-canvas-bottomGrid`,busy:`msp-shell-canvas-busy`,"busy-in":`msp-shell-canvas-busy-in`,"busy-slide":`msp-shell-canvas-busy-slide`,"busy-spin":`msp-shell-canvas-busy-spin`,busyActions:`msp-shell-canvas-busyActions`,busyBar:`msp-shell-canvas-busyBar`,busyCard:`msp-shell-canvas-busyCard`,busyHead:`msp-shell-canvas-busyHead`,busyLabel:`msp-shell-canvas-busyLabel`,busyPercent:`msp-shell-canvas-busyPercent`,busySpin:`msp-shell-canvas-busySpin`,busyTrack:`msp-shell-canvas-busyTrack`,caption:`msp-shell-canvas-caption`,card:`msp-shell-canvas-card`,"card-in":`msp-shell-canvas-card-in`,cardBody:`msp-shell-canvas-cardBody`,cardBodyContent:`msp-shell-canvas-cardBodyContent`,cardBodyFill:`msp-shell-canvas-cardBodyFill`,cardHeader:`msp-shell-canvas-cardHeader`,cardTitle:`msp-shell-canvas-cardTitle`,chip:`msp-shell-canvas-chip`,compactStatus:`msp-shell-canvas-compactStatus`,context:`msp-shell-canvas-context`,corner:`msp-shell-canvas-corner`,countdown:`msp-shell-canvas-countdown`,face:`msp-shell-canvas-face`,frame:`msp-shell-canvas-frame`,lead:`msp-shell-canvas-lead`,menuMark:`msp-shell-canvas-menuMark`,message:`msp-shell-canvas-message`,pill:`msp-shell-canvas-pill`,"pill-in":`msp-shell-canvas-pill-in`,pillButton:`msp-shell-canvas-pillButton`,pillMain:`msp-shell-canvas-pillMain`,progress:`msp-shell-canvas-progress`,railMenu:`msp-shell-canvas-railMenu`,railMenuAnchor:`msp-shell-canvas-railMenuAnchor`,railMenuButton:`msp-shell-canvas-railMenuButton`,railMenuDivider:`msp-shell-canvas-railMenuDivider`,railMenuList:`msp-shell-canvas-railMenuList`,railToggle:`msp-shell-canvas-railToggle`,sections:`msp-shell-canvas-sections`,spin:`msp-shell-canvas-spin`,stack:`msp-shell-canvas-stack`,stackTools:`msp-shell-canvas-stackTools`,status:`msp-shell-canvas-status`,text:`msp-shell-canvas-text`,tool:`msp-shell-canvas-tool`,"tool-menu-in":`msp-shell-canvas-tool-menu-in`,toolMenu:`msp-shell-canvas-toolMenu`,toolMenuCard:`msp-shell-canvas-toolMenuCard`,toolMenuCheck:`msp-shell-canvas-toolMenuCheck`,toolMenuDivider:`msp-shell-canvas-toolMenuDivider`,toolMenuHint:`msp-shell-canvas-toolMenuHint`,toolMenuLabel:`msp-shell-canvas-toolMenuLabel`,toolMenuRow:`msp-shell-canvas-toolMenuRow`,toolbar:`msp-shell-canvas-toolbar`,toolbarSlot:`msp-shell-canvas-toolbarSlot`},p(`views/shell/canvas.module.css`,`@layer msp.components {
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
  height: max(var(--msp-rail-button, 40px), var(--msp-touch-target, 0px));
  color: var(--msp-color-text-muted);
  place-items: center;
  display: grid;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[aria-pressed="true"] {
    background: var(--msp-color-control);
    box-shadow: inset 0 0 0 1px var(--msp-selected-edge);
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
  contain: content;
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
  font-size: inherit;
  font-weight: inherit;
  flex: 1;
}

.msp-shell-canvas-cardBody {
  flex: 1 1 0;
  min-height: 0;
}

.msp-shell-canvas-cardBodyFill {
  flex-direction: column;
  flex: 1 1 0;
  min-height: 0;
  display: flex;
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
  --msp-stack-row: max(34px, min(var(--msp-touch-target, 0px), 38px));
  transition: opacity var(--msp-motion-fade) var(--msp-ease-reveal);
  position: relative;

  @starting-style {
    opacity: 0;
  }

  &[data-quiet] {
    opacity: 0;
    pointer-events: none;
  }
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

  [data-mode="compact"] & svg {
    width: 18px;
    height: 18px;
  }

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
  height: max(34px, var(--msp-touch-target, 0px));
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
  width: max(34px, var(--msp-touch-target, 0px));
  height: 100%;
  color: var(--msp-color-text-muted);
  flex: none;
  place-items: center;
  display: grid;
  position: relative;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-shell-canvas-countdown {
  pointer-events: none;
  width: 22px;
  height: 22px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);

  & circle {
    fill: none;
    stroke: currentColor;
    stroke-width: 1.5px;
    stroke-dasharray: 100;
    stroke-dashoffset: 0;
    opacity: .6;
    animation: msp-shell-canvas-countdown var(--msp-countdown, 8s) linear forwards;
  }

  .msp-shell-canvas-pill:hover &, .msp-shell-canvas-pill:focus-within & {
    & circle {
      animation-play-state: paused;
    }
  }
}

@keyframes msp-shell-canvas-countdown {
  to {
    stroke-dashoffset: 100px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .msp-shell-canvas-countdown {
    display: none;
  }
}

.msp-shell-canvas-status .msp-shell-canvas-announce {
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
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
}

.msp-shell-canvas-railMenuAnchor {
  display: grid;
  position: relative;
}

.msp-shell-canvas-railMenuButton {
  width: 44px;
  height: max(40px, var(--msp-touch-target, 0px));
  border-radius: var(--msp-radius-md);
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
    height: max(34px, var(--msp-touch-target, 0px));
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
  transform-origin: 0;
  width: 100%;
  height: 100%;
  transition: scale var(--msp-motion-fast) linear;
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
`)})))()}var X;function vn(){return(vn=e((()=>{m(),X={band:`msp-shell-dock-band`,barTab:`msp-shell-dock-barTab`,body:`msp-shell-dock-body`,bodyContent:`msp-shell-dock-bodyContent`,bottom:`msp-shell-dock-bottom`,collapsedBar:`msp-shell-dock-collapsedBar`,compact:`msp-shell-dock-compact`,content:`msp-shell-dock-content`,dock:`msp-shell-dock-dock`,floating:`msp-shell-dock-floating`,floatingBottom:`msp-shell-dock-floatingBottom`,floatingLeft:`msp-shell-dock-floatingLeft`,floatingRight:`msp-shell-dock-floatingRight`,floatingTop:`msp-shell-dock-floatingTop`,frameless:`msp-shell-dock-frameless`,header:`msp-shell-dock-header`,left:`msp-shell-dock-left`,pin:`msp-shell-dock-pin`,rail:`msp-shell-dock-rail`,"rail-menu-in":`msp-shell-dock-rail-menu-in`,railFoot:`msp-shell-dock-railFoot`,railMenu:`msp-shell-dock-railMenu`,railMenuRows:`msp-shell-dock-railMenuRows`,railMenuScroll:`msp-shell-dock-railMenuScroll`,right:`msp-shell-dock-right`,splitter:`msp-shell-dock-splitter`,strip:`msp-shell-dock-strip`,tab:`msp-shell-dock-tab`,title:`msp-shell-dock-title`,top:`msp-shell-dock-top`},p(`views/shell/dock.module.css`,`@layer msp.components {
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
  contain: layout style;
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
  font-size: inherit;
  font-weight: inherit;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-shell-dock-body {
  contain: layout paint;
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
  width: max(36px, var(--msp-touch-target, 0px));
  height: max(36px, var(--msp-touch-target, 0px));
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  place-items: center;
  display: grid;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[aria-selected="true"] {
    background: var(--msp-color-control);
    box-shadow: inset 0 0 0 1px var(--msp-selected-edge);
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
    height: max(var(--msp-rail-button, 40px), var(--msp-touch-target, 0px));
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
    grid-template-rows: minmax(0, 1fr);
    min-height: 0;
  }
}

.msp-shell-dock-railMenuScroll {
  min-height: 0;
}

.msp-shell-dock-railMenuRows {
  display: grid;
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
`)})))()}function yn(e){return Cn.find(t=>e>=t.min)??Cn[Cn.length-1]}function bn(e,t){let n=yn(t);if(t<=0)return{step:n,hidden:wn};let r=(e,t)=>{let r=new Set(e.map(e=>e.section)),i=0;for(let t of e)i+=t.captioned?n.captioned:n.button;return t&&(i+=n.button,r.add(`more`)),i+Math.max(0,r.size-1)};if(r(e,!1)<=t)return{step:n,hidden:wn};let i=e.map((e,t)=>({e,i:t})).sort((e,t)=>t.e.priority-e.e.priority||t.i-e.i).map(e=>e.e),a=new Set,o=e;for(let e of i)if(a.add(e.id),o=o.filter(t=>t!==e),r(o,!0)<=t)break;return{step:n,hidden:a}}function xn(e){let t=[];for(let n of e){let e=n.group,r=t.find(t=>t.group===e);r?r.items.push(n):t.push({group:e,items:[n]})}return t.sort((e,t)=>e.group===void 0?-1:+(t.group===void 0))}function Sn(e,t){let n=(e,t)=>({id:`tab:${e.id}`,section:t,priority:e.priority,captioned:!1,kind:`tab`,tab:e}),r=(e,t)=>({id:`tool:${e.id}`,section:t,priority:e.priority,captioned:!!e.caption,kind:`tool`,item:e}),i=[];for(let t of e.filter(e=>e.place===`head`))i.push(n(t,`head`));for(let t of e.filter(e=>!e.place||e.place===`strip`))i.push(n(t,`strip`));let a=xn(t);for(let e of a)if(e.group!==void 0)for(let t of e.items)i.push(r(t,`group:${e.group}`));for(let t of e.filter(e=>e.place===`foot`))i.push(n(t,`foot`));for(let e of a)if(e.group===void 0)for(let t of e.items)i.push(r(t,`lead`));return i.map((e,t)=>e.priority===void 0?{...e,priority:t}:e)}var Cn,wn,Tn;function En(){return(En=e((()=>{N(),F(),M(),be(),st(),L(),Cn=[{name:`normal`,min:620,button:40,captioned:46},{name:`compact`,min:530,button:34,captioned:40},{name:`small`,min:0,button:30,captioned:36}],wn=new Set,Tn=class{constructor(e,t){this.height=R(0),this.menu=R(void 0);let n=e.toolbar.pipe(j(e=>e.filter(e=>e.place!==`canvas`)),ot(e=>e.length===0?O([]):P(e.map(e=>e.visible??O(!0))).pipe(j(t=>e.filter((e,n)=>t[n])))));this.entries=P([t.tabs,n]).pipe(j(([e,t])=>Sn(e,t)));let r=P([this.entries,this.height.asReadonly]).pipe(j(([e,t])=>({entries:e,fit:bn(e,t)})));this.hidden=r.pipe(j(e=>e.fit.hidden),I((e,t)=>e.size===t.size&&[...e].every(e=>t.has(e)))),this.overflow=r.pipe(j(e=>e.entries.filter(t=>e.fit.hidden.has(t.id))),I((e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n])))}toggleMenu(e,t){let n=this.menu.value;if(n&&n.anchor===e)return this.menu.set(void 0);let r=this.#e?.parentElement,i=r?r.getBoundingClientRect().bottom-e.getBoundingClientRect().bottom:0;this.menu.set({bottom:i,anchor:e,...t?{item:t}:{}})}#e;observe(e){this.#e=e;let t=new ResizeObserver(e=>{let t=Math.round(e[e.length-1].contentRect.height);t!==this.height.value&&this.height.set(t)});return t.observe(e),()=>t.disconnect()}}})))()}function Dn(e){let t=o(`div`,{class:e.class,style:`display: contents`}),r=e.renderer.mount(t,e.ctx,d(`ViewHost`));return n(r),t}function On(){return(On=e((()=>{i(),l()})))()}function kn(e){let{shell:t,dock:r}=e,i=r.id===`top`||r.id===`bottom`,a=r.tabs.pipe(j(e=>e.length>0)),s=t.mode.pipe(j(e=>e===`compact`&&r.id===`right`)),l=P([r.tabs,s]).pipe(j(([e,t])=>t&&e.some(e=>e.compactBar)?e.filter(e=>e.compactBar):e)),u=i?P([r.tabs,r.active]).pipe(j(([e,t])=>e.length>1&&!!t)):O(!0),d=ne(`msp-panel`),f;return o(k,{when:a,children:()=>c(`div`,{class:`${X.dock} ${X[r.id]}`,classList:{[X.compact]:s},style:{"--msp-dock-size":r.state.pipe(j(e=>`${e.size}px`))},ref:e=>{f=e},children:[o(k,{when:r.active,reveal:!0,swap:()=>f,fallback:i?()=>o(Pn,{shell:t,dock:r}):void 0,children:e=>o(Ln,{shell:t,dock:r,tab:e,id:d})}),o(k,{when:u,children:()=>c(`div`,{class:X.strip,role:`tablist`,"aria-label":`Panels`,"aria-orientation":s.pipe(j(e=>e||i?`horizontal`:`vertical`)),ref:e=>n(C(e)),children:[o(A,{each:l,children:e=>o(Fn,{shell:t,dock:r,tab:e,panel:d})}),e.stripEnd]})})]})})}function An(e){let{shell:t,dock:r}=e,i={"--msp-dock-size":r.state.pipe(j(e=>`${e.size}px`))},a=new Tn(t,r),s=P([r.tabs,a.hidden]).pipe(j(([e,t])=>t.size?e.filter(e=>!t.has(`tab:${e.id}`)):e)),l=s.pipe(j(e=>e.filter(e=>e.place===`head`))),u=s.pipe(j(e=>e.filter(e=>!e.place||e.place===`strip`))),d=s.pipe(j(e=>e.filter(e=>e.place===`foot`))),f=ne(`msp-panel`);if(r.id===`top`||r.id===`bottom`)return o(`div`,{class:`${X.floating} ${r.id===`top`?X.floatingTop:X.floatingBottom}`,classList:{[X.band]:r.active.pipe(j(e=>e?.frame===`none`))},style:i,children:o(k,{when:r.active,reveal:`fade`,children:e=>o(Ln,{shell:t,dock:r,tab:e,id:f})})});let p=c(`div`,{class:`${X.floating} ${r.id===`left`?X.floatingLeft:X.floatingRight}`,style:i,children:[c(`div`,{class:`${X.rail} ${Y.frame}`,ref:e=>{n(a.observe(e))},children:[e.railLead,o(k,{when:l.pipe(j(e=>e.length>0)),children:()=>o(`div`,{class:X.strip,role:`tablist`,"aria-orientation":`vertical`,"aria-label":`Home`,ref:e=>n(C(e)),children:o(A,{each:l,children:e=>o(Fn,{shell:t,dock:r,tab:e,panel:f})})})}),o(k,{when:u.pipe(j(e=>e.length>0)),children:()=>o(`div`,{class:X.strip,role:`tablist`,"aria-orientation":`vertical`,"aria-label":`Panels`,ref:e=>n(C(e)),children:o(A,{each:u,children:e=>o(Fn,{shell:t,dock:r,tab:e,panel:f})})})}),e.railItems?.(a),o(Mn,{shell:t,dock:r,rail:a,root:()=>p}),c(`div`,{class:X.railFoot,children:[o(k,{when:d.pipe(j(e=>e.length>0)),children:()=>o(`div`,{class:X.strip,role:`tablist`,"aria-orientation":`vertical`,"aria-label":`More panels`,ref:e=>n(C(e)),children:o(A,{each:d,children:e=>o(Fn,{shell:t,dock:r,tab:e,panel:f})})})}),e.railFoot?.(a)]})]}),o(k,{when:r.active,reveal:`side`,swap:()=>p,children:e=>o(Ln,{shell:t,dock:r,tab:e,id:f,pinnable:!0,coveredBy:t.overlay})}),o(Nn,{shell:t,dock:r,rail:a})]});return p}function jn(e,t,n){t.id===`right`&&e.overlay.value?(e.closeOverlay(),e.show(n.id)):e.select(n.id)}function Mn(e){let{rail:t}=e,r=t.menu;return o(k,{when:t.overflow.pipe(j(e=>e.length>0)),children:()=>(n(()=>r.set(void 0)),o(`nav`,{class:X.strip,"aria-label":`More buttons`,children:o(`button`,{type:`button`,class:X.tab,"data-tip":`More`,"data-tip-side":`left`,"aria-label":`More`,"aria-haspopup":`menu`,"aria-expanded":r.asReadonly.pipe(j(e=>!!e)),onClick:e=>t.toggleMenu(e.currentTarget),onKeyDown:e=>{e.key!==`ArrowDown`&&e.key!==`ArrowUp`||r.value||(e.preventDefault(),e.currentTarget.click())},children:o(B,{name:`ellipsis`,size:20})})}))})}function Nn(e){let{shell:t,dock:r,rail:i}=e,a=i.menu,s=P([a.asReadonly,i.overflow]).pipe(j(([e,t])=>e&&(e.item?e.item.menu?.length:t.length>0)?e:void 0)),l=(e,n)=>{if(a.set(void 0),e.tab)return jn(t,r,e.tab);let i=e.item;i.overlay?t.toggleOverlay(i.overlay,n):i.run?.(n)},u=e=>{if(e.key!==`Escape`||!a.value||!Fe(a.value.anchor,e))return;let t=a.value.anchor;a.set(void 0),t.focus(),e.preventDefault()},d=e=>{let t=a.value;if(!t)return;let n=Ne(e);Pe(e,t.anchor)||n.closest?.(`.${X.railMenu}`)||a.set(void 0)};return document.addEventListener(`keydown`,u),document.addEventListener(`pointerdown`,d),n(()=>{document.removeEventListener(`keydown`,u),document.removeEventListener(`pointerdown`,d)}),o(k,{when:s,children:e=>{let t=de(()=>e.anchor),r;return n(()=>t(r)),o(`div`,{class:X.railMenu,style:{bottom:`${e.bottom}px`},children:o(`div`,{class:Y.toolMenuCard,role:`menu`,"aria-label":e.item?Z(e.item):`More`,onKeyDown:ce,ref:e=>{r=e,queueMicrotask(()=>T(e))},children:o(V,{class:X.railMenuScroll,contentClass:X.railMenuRows,children:e.item?o(Wn,{items:e.item.menu,onRun:()=>a.set(void 0)}):o(A,{each:i.overflow,children:t=>c(`button`,{type:`button`,role:`menuitem`,class:Y.toolMenuRow,onClick:n=>l(t,e.anchor),children:[t.tab?o(B,{name:t.tab.icon,size:16}):o(Bn,{item:t.item,size:16}),o(`span`,{class:Y.toolMenuLabel,children:t.tab?t.tab.title:Z(t.item)}),o(`span`,{})]})},e=>e.id)})})})}})}function Pn(e){let{shell:t,dock:n}=e;return o(`div`,{class:X.collapsedBar,children:o(A,{each:n.tabs,children:e=>c(`button`,{type:`button`,class:X.barTab,onClick:()=>t.show(e.id),title:`Show ${e.title}`,children:[o(B,{name:n.id===`top`?`chevron-down`:`chevron-up`,size:14}),e.title]})})})}function Fn(e){let{shell:t,dock:n,tab:r}=e,i=n.id===`right`?t.overlay.pipe(j(e=>!!e)):O(!1),a=P([n.state,i]).pipe(j(([e,t])=>!t&&!e.collapsed&&e.active===r.id),I());return o(`button`,{type:`button`,role:`tab`,class:X.tab,"data-tip":r.title,"data-tip-side":`left`,"aria-label":r.title,"aria-selected":a,"aria-controls":e.panel,"data-tab":r.id,onClick:()=>jn(t,n,r),children:o(B,{name:r.icon,size:20})})}function In(e){let{shell:t}=e,n=t.dock(e.dock);return o(Ve,{variant:`ghost`,size:`sm`,class:X.pin,icon:o(B,{name:`pin`}),title:`Pin beside the canvas`,pressed:n.state.pipe(j(e=>e.pinned),I()),onClick:()=>t.setPinned(e.dock,!n.state.value.pinned)})}function Ln(e){let{shell:t,dock:r,tab:i}=e,a=!e.coveredBy||e.coveredBy.pipe(j(e=>!e)),s,l=!1,u=e=>{let t=e.relatedTarget;if(t){l=!!s?.contains(t);return}let n=Ne(e);queueMicrotask(()=>{let e=oe();e&&s?.contains(e)||n.isConnected&&!n.closest(`[inert]`)&&(l=!1)})};return n(()=>{if(!l)return;let e=oe();if(e&&!s?.contains(e))return;let t=s?.closest(`.msp-root`)??s?.getRootNode();(t?[...t.querySelectorAll(`[role="tab"]`)]:[]).find(e=>e.dataset.tab===i.id)?.focus({preventScroll:!0})}),xe(a,()=>c(`section`,{class:i.frame===`none`?`${X.content} ${X.frameless}`:X.content,role:`tabpanel`,id:e.id,"aria-label":i.title,ref:e=>{s=e},onFocusIn:()=>{l=!0},onFocusOut:u,children:[o(Rn,{shell:t,dock:r}),c(`header`,{class:X.header,children:[o(`h2`,{class:X.title,children:typeof i.heading==`function`?i.heading():i.heading??i.title}),e.pinnable?o(In,{shell:t,dock:r.id}):null,o(Ve,{variant:`ghost`,size:`sm`,icon:o(B,{name:`x`}),title:`Close panel`,onClick:()=>t.toggle(r.id)})]}),o(V,{class:X.body,contentClass:X.bodyContent,children:o(k,{when:t.tabFocus.pipe(j(e=>({section:e?.tab===i.id?e.section:void 0})),I((e,t)=>e.section===t.section&&!t.section)),children:e=>o(Dn,{renderer:i.render,ctx:{shell:t,dock:r.id,...e.section?{focus:e.section}:{}}})})})]}))}function Rn(e){let{shell:t,dock:n}=e,r=n.id===`left`?1:-1,i=0,a=0,s=!1,c=e=>t.setSize(n.id,a+r*(e.clientX-i));return o(`div`,{class:X.splitter,role:`separator`,"aria-orientation":`vertical`,tabIndex:0,"aria-label":`Panel width`,"aria-valuenow":n.state.pipe(j(e=>Math.round(e.size))),onKeyDown:e=>{if(e.key!==`ArrowLeft`&&e.key!==`ArrowRight`)return;e.preventDefault();let i=(e.shiftKey?64:16)*(e.key===`ArrowRight`?1:-1);t.setSize(n.id,n.state.value.size+r*i)},onPointerEnter:e=>e.currentTarget.setAttribute(`data-active`,``),onPointerLeave:e=>{s||e.currentTarget.removeAttribute(`data-active`)},onPointerDown:e=>{let t=e.currentTarget;i=e.clientX,a=n.state.value.size,s=!0,t.setPointerCapture(e.pointerId),t.setAttribute(`data-active`,``),t.addEventListener(`pointermove`,c);let r=e=>{if(!s)return;s=!1,t.removeEventListener(`pointermove`,c),t.removeEventListener(`pointerup`,r),t.removeEventListener(`pointercancel`,r),t.removeEventListener(`lostpointercapture`,r),t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId);let n=t.getBoundingClientRect();(!(e.clientX>=n.left&&e.clientX<=n.right&&e.clientY>=n.top&&e.clientY<=n.bottom)||e.type!==`pointerup`)&&t.removeAttribute(`data-active`)};t.addEventListener(`pointerup`,r),t.addEventListener(`pointercancel`,r),t.addEventListener(`lostpointercapture`,r)},onDblClick:()=>t.setSize(n.id,n.id===`left`?300:340)})}function zn(){return(zn=e((()=>{N(),F(),M(),be(),Be(),z(),Ae(),D(),re(),i(),_n(),vn(),ar(),En(),On(),l()})))()}function Z(e){return e.face?e.face.pipe(j(e=>e.title)):e.caption?`${e.title} (${e.caption})`:e.title}function Bn(e){let{item:t}=e;return t.face?o(`span`,{class:e.class,ref:n=>r(t.face,t=>n.replaceChildren(B({name:t.icon,size:e.size})))}):o(B,{name:t.icon,size:e.size})}function Vn(e){let{shell:t}=e,n=e.part??`all`,r=n===`canvas`,i=(e.hidden?P([t.toolbar,e.hidden]).pipe(j(([e,t])=>t.size?e.filter(e=>!t.has(`tool:${e.id}`)):e)):t.toolbar).pipe(j(e=>xn(e.filter(e=>e.place===`canvas`===r))),j(e=>n===`all`||r?e:e.filter(e=>n===`lead`?e.group===void 0:e.group!==void 0)));return o(`div`,{class:Y.sections,children:o(A,{each:i,children:n=>o(`div`,{class:Y.toolbar,role:`toolbar`,"aria-orientation":e.menus?`horizontal`:`vertical`,"aria-label":n.group??`commands`,children:n.items.map(n=>n.visible?o(k,{when:n.visible,children:()=>o(Hn,{shell:t,item:n,menus:e.menus,railMenu:e.railMenu})}):o(Hn,{shell:t,item:n,menus:e.menus,railMenu:e.railMenu}))})},e=>e.group??``)})}function Hn(e){let{shell:t,item:n,menus:r}=e,i=!r&&n.menu?.length?e.railMenu:void 0,a=r&&n.menu?.length?r:void 0,s=n.overlay?t.overlay.pipe(j(e=>e?.overlay.id===n.overlay)):O(!1),l=P([s,n.pressed??O(!1)]).pipe(j(([e,t])=>e||t),I()),u=a?.open.asReadonly.pipe(j(e=>e?.item===n),I());return c(`button`,{type:`button`,class:Y.tool,"data-captioned":n.caption?``:void 0,"data-tip":a?void 0:Z(n),"data-tip-side":n.place===`canvas`?`top`:`left`,"aria-label":Z(n),"aria-pressed":n.pressed||n.overlay?l:void 0,"aria-haspopup":a||i?`menu`:void 0,"aria-expanded":u,"data-overlay-trigger":n.overlay?``:void 0,"data-keeps-card":n.keepsCard?``:void 0,onClick:e=>{if(a&&!n.overlay&&!n.run)return a.show(n,e.currentTarget,e.detail===0);if(a&&nr())return a.open.value?.item===n?a.hide():a.show(n,e.currentTarget,e.detail===0);if(i)return i(n,e.currentTarget);a?.hide(),n.overlay?t.toggleOverlay(n.overlay,e.currentTarget):n.run?.(e.currentTarget)},onKeyDown:a?e=>{(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),a.show(n,e.currentTarget,!0))}:void 0,onPointerEnter:a?e=>e.pointerType===`mouse`&&a.show(n,e.currentTarget):void 0,onPointerLeave:a?()=>a.hideSoon():void 0,onBlur:a?()=>a.hideSoon():void 0,children:[o(Bn,{item:n,size:n.caption?16:20,class:Y.face}),n.caption?o(`span`,{class:Y.caption,children:n.caption}):null,a?o(`span`,{class:Y.menuMark,"aria-hidden":`true`}):null]})}function Un(e,t){let n=e.menu??[];return!e.run||!nr()?n:[{id:`${e.id}:self`,label:e.title,icon:e.icon,group:``,run:()=>e.run?.(t)},...n]}function Wn(e){return o(a,{children:e.items.map((t,n,r)=>c(a,{children:[n>0&&t.group!==r[n-1].group?o(`div`,{class:Y.toolMenuDivider,role:`separator`}):null,c(`button`,{type:`button`,role:t.pressed?t.choice?`menuitemradio`:`menuitemcheckbox`:`menuitem`,"aria-checked":t.pressed,class:Y.toolMenuRow,disabled:!!t.disabled,onClick:()=>{e.onRun(),t.run()},children:[t.icon?o(B,{name:t.icon,size:16}):o(`span`,{}),c(`span`,{class:Y.toolMenuLabel,children:[t.label,t.disabled||t.hint?o(`span`,{class:Y.toolMenuHint,children:t.disabled??t.hint}):null]}),t.pressed?o(k,{when:t.pressed,children:()=>o(B,{name:`check`,size:14,class:Y.toolMenuCheck})}):null]})]}))})}function Gn(e){let t=new rr,r=c(`div`,{class:Y.stack,"data-quiet":e.quiet?.pipe(j(e=>e?``:void 0)),children:[o(`div`,{class:Y.frame,children:c(V,{axis:`x`,contentClass:Y.stackTools,children:[e.lead,o(Vn,{shell:e.shell,part:`canvas`,menus:t})]})}),e.aside,o(Kn,{menus:t})]});return t.stack=r,n(()=>t.dispose()),r}function Kn(e){let{menus:t}=e,r=e=>{e.key===`Escape`&&!e.defaultPrevented&&t.open.value&&(!t.stack||Fe(t.stack,e))&&(t.hide(),e.preventDefault())},i=e=>{let n=t.open.value;if(!n)return;let r=e.composedPath();t.menu&&r.includes(t.menu)||r.includes(n.button)||t.hide()};return document.addEventListener(`keydown`,r),document.addEventListener(`pointerdown`,i,!0),n(()=>{document.removeEventListener(`keydown`,r),document.removeEventListener(`pointerdown`,i,!0)}),o(k,{when:t.open,children:e=>{let r=!1,i;return n(()=>{if(t.menu===i&&(t.menu=void 0),!r)return;let n=oe();(!n||i?.contains(n))&&e.button.focus({preventScroll:!0})}),o(`div`,{class:Y.toolMenu,style:{right:`${e.right}px`},role:`menu`,"aria-label":e.item.title,ref:e=>{i=e,t.menu=e},onKeyDown:ce,onPointerEnter:()=>t.keep(),onPointerLeave:()=>t.hideSoon(),onFocusIn:()=>{r=!0,t.keep()},onFocusOut:()=>t.hideSoon(),children:o(`div`,{class:Y.toolMenuCard,children:o(Wn,{items:Un(e.item,e.button),onRun:()=>t.hide()})})})}})}function qn(e){let{shell:t}=e,r=R(!1),i=t.dock(`right`),a=t.toolbar.pipe(j(e=>e.filter(e=>e.place!==`canvas`&&!e.group))),s=t.toolbar.pipe(j(e=>e.filter(e=>e.place!==`canvas`&&e.group))),l=i.tabs.pipe(j(e=>e.some(e=>e.compactBar)?e.filter(e=>!e.compactBar):[])),u,d=(e,n)=>{r.set(!1),e.overlay?t.toggleOverlay(e.overlay,n):e.run?.(n)},f=c(`div`,{class:Y.railMenu,children:[o(A,{each:a,children:e=>o(`button`,{type:`button`,class:Y.railMenuButton,"aria-label":Z(e),"data-tip":Z(e),onClick:t=>d(e,t.currentTarget),children:o(Bn,{item:e,size:20,class:Y.face})})},e=>e.id),c(`div`,{class:Y.railMenuAnchor,children:[o(`button`,{type:`button`,class:Y.railMenuButton,"aria-label":`More`,"aria-haspopup":`menu`,"aria-expanded":r,"data-tip":`More`,onClick:e=>{r.set(!r.value),r.value&&e.detail===0&&queueMicrotask(()=>u&&T(u))},onKeyDown:e=>{(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),r.set(!0),queueMicrotask(()=>u&&T(u)))},children:o(B,{name:`ellipsis`,size:20})}),o(k,{when:r,children:()=>{let e=de();return n(()=>e(u)),c(`div`,{class:Y.railMenuList,role:`menu`,"aria-label":`More`,ref:e=>{u=e},onKeyDown:e=>{ce(e),e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),r.set(!1))},children:[o(A,{each:l,children:e=>c(`button`,{type:`button`,role:`menuitem`,class:Y.toolMenuRow,onClick:()=>{r.set(!1),t.show(e.id)},children:[o(B,{name:e.icon,size:16}),o(`span`,{class:Y.toolMenuLabel,children:e.title}),o(`span`,{})]})},e=>e.id),o(k,{when:P([l,s]).pipe(j(([e,t])=>e.length>0&&t.length>0)),children:()=>o(`div`,{class:Y.railMenuDivider})}),o(A,{each:s,children:e=>c(`button`,{type:`button`,role:`menuitem`,class:Y.toolMenuRow,hidden:e.visible?e.visible.pipe(j(e=>!e)):!1,onClick:t=>d(e,t.currentTarget),children:[o(Bn,{item:e,size:16,class:Y.face}),o(`span`,{class:Y.toolMenuLabel,children:Z(e)}),o(`span`,{})]})},e=>e.id)]})}})]})]}),p=e=>{r.value&&!Pe(e,f)&&r.set(!1)};return document.addEventListener(`pointerdown`,p),n(()=>document.removeEventListener(`pointerdown`,p)),f}function Jn(e){let t=e.status.tasks.pipe(j(e=>e.find(e=>e.overlay)),I((e,t)=>e?.id===t?.id));return o(k,{when:t,children:t=>{let n=e.status.tasks.pipe(j(e=>e.find(e=>e.id===t.id)??t)),r=n.pipe(j(e=>e.progress===void 0?void 0:Math.round(e.progress*100)));return o(`div`,{class:Y.busy,role:`alertdialog`,"aria-modal":`true`,"aria-label":t.label,children:c(`div`,{class:Y.busyCard,children:[c(`div`,{class:Y.busyHead,children:[o(B,{name:`loader-circle`,size:18,class:Y.busySpin}),o(`span`,{class:Y.busyLabel,children:n.pipe(j(e=>e.label))}),o(`span`,{class:Y.busyPercent,children:r.pipe(j(e=>e===void 0?``:`${e}%`))})]}),o(`div`,{class:Y.busyTrack,role:`progressbar`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":r,children:o(`span`,{class:Y.busyBar,"data-indeterminate":r.pipe(j(e=>e===void 0?``:void 0)),style:{scale:r.pipe(j(e=>`${(e??30)/100} 1`))}})}),t.abort?o(`div`,{class:Y.busyActions,children:o(Ve,{size:`sm`,onClick:()=>t.abort?.(),children:`Cancel`})}):null]})})}})}function Yn(e){let{shell:t}=e,n=t.overlay.pipe(j(e=>!!e),I());return o(k,{when:n,children:()=>o(Xn,{shell:t})})}function Xn(e){let{shell:t}=e,r=t.overlay.value.anchor,i=de(()=>r),a=ne(`msp-card-title`),s=t.dock(`right`).state.pipe(j(e=>e.pinned),I()),l=0,u=c(`section`,{class:Y.card,role:`dialog`,"aria-modal":s.pipe(j(e=>!e)),"aria-labelledby":a,onKeyDown:e=>{d()||ue(e,e.currentTarget)},children:[c(`header`,{class:Y.cardHeader,children:[o(`h2`,{class:Y.cardTitle,id:a,children:t.overlay.pipe(j(e=>e?.overlay.title??``))}),o(In,{shell:t,dock:`right`}),o(Ve,{variant:`ghost`,size:`sm`,icon:o(B,{name:`x`}),title:`Close`,onClick:()=>t.closeOverlay()})]}),o(k,{when:t.overlay,children:e=>{r=e.anchor,ie(e.anchor)&&(l&&cancelAnimationFrame(l),l=requestAnimationFrame(()=>{l=0;let e=u.querySelector(`.${Y.cardBody}, .${Y.cardBodyFill}`),t=w(u);(t.find(t=>e?.contains(t))??t[t.length-1])?.focus()}));let n={shell:t,...e.focus?{focus:e.focus}:{}};return e.overlay.fill?o(`div`,{class:Y.cardBodyFill,children:o(Dn,{renderer:e.overlay.render,ctx:n})}):o(V,{class:Y.cardBody,contentClass:Y.cardBodyContent,children:o(Dn,{renderer:e.overlay.render,ctx:n})})}})]}),d=()=>t.dock(`right`).state.value.pinned,f=document,p=e=>{e.key!==`Escape`||e.defaultPrevented||d()||!Fe(u,e)||(t.closeOverlay(),e.preventDefault())},m=e=>{let n=t.overlay.value;if(!n)return;let r=Ne(e);d()||n.overlay.persistent||Pe(e,u)||Pe(e,n.anchor)||r.closest?.(`[data-overlay-trigger], [role=tab]`)||r.closest?.(`[data-keeps-card], [data-msp-canvas]`)||t.closeOverlay()};return f.addEventListener(`keydown`,p),f.addEventListener(`pointerdown`,m,!0),n(()=>{l&&cancelAnimationFrame(l),f.removeEventListener(`keydown`,p),f.removeEventListener(`pointerdown`,m,!0),i(u)}),u}function Zn(e){let{status:t}=e;return c(`div`,{class:Y.status,children:[o(`div`,{class:Y.announce,role:`status`,"aria-live":`polite`,children:t.spoken}),o(k,{when:t.current,children:n=>n.kind===`error`?c(`span`,{class:`${Y.pill} ${Y.message}`,"data-kind":n.kind,children:[c(`button`,{type:`button`,class:Y.pillMain,title:`Show the log`,onClick:()=>e.onOpenLog?.(),children:[o(B,{name:ir[n.kind],size:14}),o(`span`,{class:Y.text,children:n.text})]}),o(`button`,{type:`button`,class:Y.pillButton,"aria-label":`Dismiss`,"data-tip":`Dismiss`,onClick:()=>t.dismiss(n.id),children:o(B,{name:`x`,size:14})})]}):c(`button`,{type:`button`,class:`${Y.pill} ${Y.message}`,"data-kind":n.kind,title:`Show the log`,onClick:()=>e.onOpenLog?.(),children:[o(B,{name:ir[n.kind],size:14}),o(`span`,{class:Y.text,children:n.text})]})}),o(A,{each:t.tasks.pipe(j(e=>e.filter(e=>!e.overlay))),children:e=>o(er,{task:e})}),e.after]})}function Qn(e){let t,i=0,s=0,l=!1,u=R(void 0),d=()=>{t&&clearTimeout(t),t=void 0},f=()=>{d(),!(l||i<=0)&&(s=performance.now(),t=setTimeout(()=>e.onDismiss?.(),i))},p=e=>{e!==l&&(l=e,e&&t&&(i-=performance.now()-s),e?d():f())};e.autoDismiss&&e.onDismiss&&(r(e.autoDismiss,e=>{d(),i=e??0,u.set(e),f()}),n(d));let m=c(a,{children:[e.icon,o(`span`,{class:Y.text,children:e.text}),e.after]});return c(`span`,{class:Y.pill,onPointerEnter:()=>p(!0),onPointerLeave:()=>p(!1),onFocusIn:()=>p(!0),onFocusOut:e=>{e.currentTarget.contains(e.relatedTarget)||p(!1)},children:[e.onClick?o(`button`,{type:`button`,class:Y.pillMain,"aria-label":e.label,onClick:()=>e.onClick?.(),children:m}):m,e.onDismiss?c(`button`,{type:`button`,class:Y.pillButton,"aria-label":e.dismissLabel??`Dismiss`,"data-tip":e.dismissLabel??`Dismiss`,onClick:()=>e.onDismiss?.(),children:[o(B,{name:`x`,size:14}),o(k,{when:u.asReadonly,children:e=>o(`svg`,{class:Y.countdown,viewBox:`0 0 20 20`,"aria-hidden":`true`,style:{"--msp-countdown":`${e}ms`},children:o(`circle`,{cx:`10`,cy:`10`,r:`9`,pathLength:`100`})})})]}):null]})}function $n(e){return c(`div`,{class:Y.context,children:[e.lead,o(A,{each:e.status.chips,children:e=>c(`span`,{class:`${Y.pill} ${Y.chip}`,children:[o(`button`,{type:`button`,class:Y.text,onClick:()=>e.activate?.(),children:e.label}),e.dismiss?o(`button`,{type:`button`,class:Y.pillButton,title:`Clear`,onClick:()=>e.dismiss?.(),children:o(B,{name:`x`,size:14})}):null]})})]})}function er(e){let{task:t}=e;return c(`span`,{class:Y.pill,children:[o(B,{name:`loader-circle`,size:14,class:Y.spin}),o(`span`,{class:Y.text,children:t.label}),t.progress===void 0?null:o(`span`,{class:Y.progress,children:o(`div`,{style:{width:`${Math.round(t.progress*100)}%`}})}),t.abort?o(`button`,{type:`button`,class:Y.pillButton,title:`Cancel`,onClick:()=>t.abort?.(),children:o(B,{name:`x`,size:14})}):null]})}function tr(e){let{shell:t}=e,n=t.dock(`right`).tabs.pipe(j(e=>e.find(e=>e.place===`head`)?.icon??`prism`),I()),i=t.railOpen.pipe(j(e=>e?`Hide the panel rail`:`Show the panel rail`));return o(`div`,{class:`${Y.stack} ${Y.railToggle}`,children:o(`div`,{class:Y.frame,children:o(`button`,{type:`button`,class:Y.tool,"data-tip":i,"data-tip-side":`top`,"aria-label":i,"aria-pressed":t.railOpen,onClick:()=>t.toggleRail(),children:o(`span`,{class:Y.face,ref:e=>r(n,t=>e.replaceChildren(B({name:t,size:18})))})})})})}var nr,rr,ir;function ar(){return(ar=e((()=>{N(),F(),M(),be(),Be(),z(),Ae(),D(),re(),i(),L(),_n(),zn(),En(),On(),l(),nr=()=>typeof matchMedia==`function`&&matchMedia(`(hover: none)`).matches,rr=class{constructor(){this.open=R(void 0)}#e;show(e,t,n=!1){this.keep();let r=this.stack?this.stack.getBoundingClientRect().right-t.getBoundingClientRect().right:0,i=this.open.value;(i?.item!==e||i.right!==r)&&this.open.set({item:e,right:r,button:t}),n&&queueMicrotask(()=>this.menu&&T(this.menu))}keep(){this.#e!==void 0&&clearTimeout(this.#e),this.#e=void 0}hideSoon(){this.keep(),this.#e=setTimeout(()=>this.hide(),160)}hide(){this.keep(),this.open.value&&this.open.set(void 0)}dispose(){this.keep()}},ir={info:`info`,success:`circle-check`,warning:`triangle-alert`,error:`circle-alert`}})))()}function or(e){return o(`div`,{class:J.log,role:`log`,"aria-live":`off`,"aria-label":`Log`,children:o(A,{each:e.status.history,fallback:()=>o(`p`,{class:J.empty,children:`No messages yet.`}),children:e=>c(`div`,{class:J.entry,"data-kind":e.kind,children:[o(B,{name:ir[e.kind],size:14,class:J.kind}),o(`span`,{class:J.text,children:e.text}),o(`time`,{class:J.time,dateTime:e.time.toISOString(),children:sr.format(e.time)})]})},e=>e.id)})}var sr;function cr(){return(cr=e((()=>{z(),D(),gn(),ar(),l(),sr=new Intl.DateTimeFormat(void 0,{hour:`2-digit`,minute:`2-digit`,second:`2-digit`})})))()}var Q;function lr(){return(lr=e((()=>{m(),Q={canvas:`msp-shell-canvas`,canvasLayer:`msp-shell-canvasLayer`,layer:`msp-shell-layer`,shell:`msp-shell-shell`,viewport:`msp-shell-viewport`},p(`views/shell/shell.module.css`,`@layer msp.components {
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
    --msp-row-height: 44px;
    --msp-control-height: 40px;
    --msp-touch-target: 44px;
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
  transition: opacity var(--msp-motion-reveal) var(--msp-ease);
  position: absolute;

  &[data-quiet] {
    opacity: 0;
  }
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
`)})))()}var ur;function dr(){return(dr=e((()=>{m(),ur={empty:`msp-shell-empty-canvas-empty`,"fade-in":`msp-shell-empty-canvas-fade-in`,"fade-out":`msp-shell-empty-canvas-fade-out`,mark:`msp-shell-empty-canvas-mark`,splash:`msp-shell-empty-canvas-splash`},p(`views/shell/empty-canvas.module.css`,`@layer msp.components {
.msp-shell-empty-canvas-empty {
  inset: 0 var(--msp-canvas-right-inset, 0) 0 0;
  pointer-events: none;
  animation: msp-shell-empty-canvas-fade-in .9s var(--msp-ease) both;
  position: absolute;

  &[data-phase="out"] {
    animation: msp-shell-empty-canvas-fade-out .25s var(--msp-ease) forwards;
  }
}

.msp-shell-empty-canvas-splash {
  animation: msp-shell-empty-canvas-fade-in 1.2s var(--msp-ease) both;
  position: absolute;
  inset: 0;
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
`)})))()}function fr(e){let t=P([e.empty.pipe(I()),e.busy??O(!1)]).pipe(ot(([e,t])=>e?t?Qe:Se(pr).pipe(j(()=>`in`)):Xe(O(`out`),Se(hr).pipe(j(()=>`gone`)))),it(`gone`),nt((e,t)=>t===`out`&&e!==`in`?`gone`:t),I(),ct(t=>{t===`in`?e.onCanvasShown?.(!1):t===`out`&&e.onCanvasShown?.(!0)}),le({bufferSize:1,refCount:!0}));e.onCanvasShown&&r(e.empty,t=>!t&&e.onCanvasShown?.(!0));let n=e.splash??!0,i=()=>{if(typeof n==`object`)return`light`;let t=e.field??`random`;return t===`random`?Math.random()<mr?`quantum`:`light`:t};return o(k,{when:t.pipe(j(e=>e!==`gone`)),children:()=>{let e=o(Ge,{scale:3,flash:`reveal`,live:!n,prism:!n,class:ur.mark});return c(`div`,{class:ur.empty,"data-phase":t,children:[n?o(`div`,{class:ur.splash,children:o(qe,{field:i(),mark:()=>e,pointer:()=>e.closest(`[data-msp-viewport]`)??e.parentElement,options:n===!0?{}:n})}):null,e]})}})}var pr,mr,hr;function gr(){return(gr=e((()=>{N(),Ze(),F(),M(),$e(),be(),rt(),te(),at(),st(),lt(),Ce(),We(),D(),i(),dr(),Ke(),l(),pr=700,mr=2/3,hr=250})))()}var _r;function vr(){return(vr=e((()=>{m(),_r={"drop-in":`msp-shell-file-drop-drop-in`,hint:`msp-shell-file-drop-hint`,overlay:`msp-shell-file-drop-overlay`,target:`msp-shell-file-drop-target`,title:`msp-shell-file-drop-title`},p(`views/shell/file-drop.module.css`,`@layer msp.components {
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
`)})))()}function yr(e){let t=R(!1),r=e=>{br(e)&&t.set(!0)};e.target.addEventListener(`dragenter`,r),n(()=>e.target.removeEventListener(`dragenter`,r));let i=e=>{e.preventDefault(),e.stopPropagation(),e.dataTransfer&&(e.dataTransfer.dropEffect=`copy`)};return o(`div`,{class:_r.overlay,hidden:t.asReadonly.pipe(j(e=>!e)),onDragEnter:i,onDragOver:i,onDragLeave:()=>t.set(!1),onDrop:n=>{i(n),t.set(!1);let r=[...n.dataTransfer?.files??[]];r.length&&e.onDrop(r)},children:c(`div`,{class:_r.target,children:[o(B,{name:`folder-open`,size:24}),o(`span`,{class:_r.title,children:`Drop to open`}),e.formats?.length?o(`span`,{class:_r.hint,children:e.formats.join(`, `)}):null]})})}function br(e){let t=e.dataTransfer?.types;if(!t)return!1;for(let e=0;e<t.length;e++)if(t[e]===`Files`)return!0;return!1}function xr(){return(xr=e((()=>{M(),z(),i(),L(),vr(),l()})))()}var Sr;function Cr(){return(Cr=e((()=>{m(),Sr={body:`msp-shell-page-body`,header:`msp-shell-page-header`,headerContent:`msp-shell-page-headerContent`,page:`msp-shell-page-page`,"page-in":`msp-shell-page-page-in`,title:`msp-shell-page-title`},p(`views/shell/page.module.css`,`@layer msp.components {
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
`)})))()}function wr(e){let{shell:t}=e,n=t.page.pipe(j(e=>e?.page),I());return o(k,{when:n,children:e=>o(Tr,{shell:t,page:e})})}function Tr(e){let{shell:t}=e,r={page:e.page,focus:t.page.value?.focus},i={shell:t,...r.focus?{focus:r.focus}:{}},a=c(`section`,{class:Sr.page,role:`region`,"aria-label":r.page.title,tabIndex:-1,"data-msp-page":``,children:[c(`header`,{class:Sr.header,children:[c(`span`,{class:Sr.title,children:[r.page.icon?o(B,{name:r.page.icon}):null,r.page.title]}),o(`div`,{class:Sr.headerContent,children:r.page.header?o(Dn,{renderer:r.page.header,ctx:i}):null}),o(Ve,{variant:`ghost`,size:`sm`,icon:o(B,{name:`x`}),title:`Close (Esc)`,onClick:()=>t.closePage()})]}),o(`div`,{class:Sr.body,children:o(Dn,{renderer:r.page.render,ctx:i})})]}),s=Ie(document),l=e=>{if(e.key!==`Escape`||e.defaultPrevented||!Fe(a,e))return;let n=Ie(a);(!n||n===document.body||a.contains(n))&&(t.closePage(),e.preventDefault())};return document.addEventListener(`keydown`,l),queueMicrotask(()=>{a.contains(Ie(a))||a.focus({preventScroll:!0})}),n(()=>{document.removeEventListener(`keydown`,l),s?.isConnected&&s.focus({preventScroll:!0})}),a}function Er(){return(Er=e((()=>{Be(),z(),F(),M(),D(),i(),Cr(),On(),l()})))()}function Dr(e){let{shell:t,status:i}=e,a=t.dock(`right`),s=t.mode.pipe(j(e=>e===`compact`),I()),l=t.dock(`top`),u=t.expanded,d=u.pipe(j(e=>!e)),f=P([a.state,t.mode]).pipe(j(([e,t])=>e.floating&&t!==`compact`),I()),p=l.state.pipe(j(e=>e.floating),I()),m=P([l.state,l.active,p,u]).pipe(j(([e,t,n,r])=>n&&t&&!r?t.frame===`none`?e.size-28+$:$+e.size+$:$),I(),j(e=>`${e}px`)),h=P([f,t.railShown,u]).pipe(j(([e,t,n])=>e&&!t||n),I()).pipe(j(e=>e?0:Or)),g=P([f,t.compactRail,u]).pipe(j(([e,t,n])=>e&&t&&!n),I()),_=P([h,g]).pipe(j(([e,t])=>t?0:e),I()),ee=P([f,t.compactRail,u]).pipe(j(([e,t,n])=>e&&t&&!n),I()),v=P([a.state,f,u]).pipe(j(([e,t,n])=>t&&e.pinned&&!n),I()),y=P([a.state,a.active,t.overlay,v,h]).pipe(j(([e,t,n,r,i])=>r?i+(t||n?e.size:0):0),I()),b=P([y,f,_]).pipe(j(([e,t,n])=>e>0?e:t?n:0),I()),x=P([a.state,a.active,f,v,h,u]).pipe(j(([e,t,n,r,i,a])=>r||a?$:i+$+(n&&t?e.size+$:0)),I(),j(e=>`${e}px`)),S=P([v,s,_,g,u]).pipe(j(([e,t,n,r,i])=>e||t||i?$:(r?Or:n)+$),I(),j(e=>`${e}px`)),te=P([a.active,f,u]).pipe(j(([e,t,n])=>t&&e&&!n?`open`:void 0),I()),ne=a.state.pipe(j(e=>`${e.size}px`)),re=o(`div`,{class:Q.canvas,"data-msp-canvas":``,"data-quiet":e.empty?``:void 0,children:e.canvas}),C=c(`div`,{class:Q.shell,"data-mode":t.mode,"data-expanded":u.pipe(j(e=>e?``:void 0)),children:[o(k,{when:P([p,u]).pipe(j(([e,t])=>!e&&!t)),children:()=>o(kn,{shell:t,dock:l})}),o(k,{when:d,children:()=>o(kn,{shell:t,dock:t.dock(`left`)})}),c(`main`,{class:Q.viewport,"data-msp-viewport":``,style:{"--msp-canvas-edge":`${$}px`,"--msp-canvas-right-inset":x,"--msp-canvas-corner-inset":S,"--msp-corner-room":`${kr}px`,"--msp-canvas-top-inset":m,"--msp-canvas-end":b.pipe(j(e=>`${e}px`)),"--msp-band-fade":`28px`,"--msp-band-dissolve":`36px`,"--msp-canvas-rail-inset":h.pipe(j(e=>`${e+$}px`)),"--msp-right-panel-width":ne,"--msp-canvas-panel-right":h.pipe(j(e=>`${e+$}px`)),"--msp-canvas-pinned":y.pipe(j(e=>`${e}px`)),background:e.ink?e.ink.pipe(j(e=>e.color)):void 0},children:[re,c(`div`,{class:`${Q.layer} ${Q.canvasLayer}`,"data-msp-theme":e.ink?e.ink.pipe(j(e=>e.theme)):`light`,style:{"--msp-color-bg":e.ink?e.ink.pipe(j(e=>e.color)):void 0},children:[o(k,{when:P([p,u]).pipe(j(([e,t])=>e&&!t)),children:()=>o(An,{shell:t,dock:l})}),e.empty?o(fr,{empty:e.empty,splash:e.splash??!0,field:e.splashField??`random`,onCanvasShown:e=>re.toggleAttribute(`data-quiet`,!e),...e.busy?{busy:e.busy}:{}}):null,o(`div`,{class:Y.lead,children:e.playback}),e.overlays,o(k,{when:ee,children:()=>o(tr,{shell:t})}),o(`div`,{class:Y.bottom,children:c(`div`,{class:Y.bottomGrid,children:[o(k,{when:s.pipe(j(e=>!e)),children:()=>o(Zn,{status:i,onOpenLog:e.onOpenLog,after:e.agent})}),c(`div`,{class:Y.corner,children:[o(Gn,{shell:t,lead:e.canvasLead,aside:e.canvasAside,quiet:e.empty}),o(k,{when:s.pipe(j(e=>!e)),children:()=>o($n,{status:i,lead:e.context?.()})})]})]})})]}),c(`div`,{class:Q.layer,"data-right-panel":te,"data-pinned":v.pipe(j(e=>e?``:void 0)),"data-overlay":t.overlay.pipe(j(e=>e?`open`:void 0)),children:[o(Yn,{shell:t}),o(wr,{shell:t}),o(k,{when:d,children:()=>o(k,{when:f,fallback:()=>o(k,{when:s.pipe(j(e=>!e)),children:()=>o(`div`,{class:`${Y.toolbarSlot} ${Y.frame}`,children:o(Vn,{shell:t})})}),children:()=>{let e=xe(t.railShown,()=>o(An,{shell:t,dock:a,railItems:e=>o(Vn,{shell:t,part:`rest`,hidden:e.hidden,railMenu:(t,n)=>e.toggleMenu(n,t)}),railFoot:e=>o(Vn,{shell:t,part:`lead`,hidden:e.hidden,railMenu:(t,n)=>e.toggleMenu(n,t)})}));return r(t.railShown,t=>e.toggleAttribute(`data-rail-hidden`,!t)),r(t.compactRail,t=>e.toggleAttribute(`data-rail-overlay`,t)),e}})})]})]}),o(k,{when:s,children:()=>c(`div`,{class:Y.compactStatus,"data-docked":``,children:[o(Zn,{status:i,onOpenLog:e.onOpenLog}),o($n,{status:i,lead:e.context?.()})]})}),o(k,{when:P([f,u]).pipe(j(([e,t])=>!e&&!t)),children:()=>o(kn,{shell:t,dock:a,stripEnd:o(k,{when:s,children:()=>o(qn,{shell:t})})})}),o(k,{when:d,children:()=>o(kn,{shell:t,dock:t.dock(`bottom`)})}),e.commandMenu,o(Jn,{status:i})]});e.onDropFiles&&C.appendChild(o(yr,{target:C,onDrop:e.onDropFiles,formats:e.dropFormats}));let ie=e=>{e.key!==`Escape`||e.defaultPrevented||t.overlay.value||Le(Ne(e))||Fe(C,e)&&(u.value?(t.setExpanded(!1),e.preventDefault()):a.state.value.pinned||!a.state.value.collapsed&&a.active.value!==void 0&&(t.toggle(`right`),e.preventDefault()))};document.addEventListener(`keydown`,ie),n(()=>document.removeEventListener(`keydown`,ie)),n(He(C));let w=new ResizeObserver(e=>t.setWidth(e[0].contentRect.width));return w.observe(C),n(()=>w.disconnect()),C}var Or,$,kr;function Ar(){return(Ar=e((()=>{N(),F(),M(),D(),i(),Bt(),_n(),lr(),Ue(),ar(),zn(),gr(),xr(),Er(),l(),Or=44,$=8,kr=42})))()}export{ct as A,vt as C,ht as D,dt as E,ot as M,at as N,ut as O,it as P,yt as S,_t as T,Nt as _,Qn as a,Dt as b,On as c,on as d,cn as f,Bt as g,zt as h,cr as i,st as j,lt as k,un as l,rn as m,Ar as n,ar as o,Ut as p,or as r,Dn as s,Dr as t,hn as u,Pt as v,gt as w,Ot as x,U as y};