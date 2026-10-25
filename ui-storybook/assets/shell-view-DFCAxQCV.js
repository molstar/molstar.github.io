import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{A as t,C as n,D as r,E as i,S as a,T as o,_ as s,g as c,i as l,j as u,m as d,n as f,o as p,r as m,s as h,t as g,u as _,w as v,x as y,y as b}from"./jsx-runtime-DbCUSNU3.js";import{n as x,r as S}from"./registry-D35yV2Tb.js";import{C,S as ee,b as w,u as te,x as T,y as E}from"./work-queue-DoxU-HjK.js";import{i as D,n as O,r as k,t as A}from"./observable-state-eRUcDuAs.js";import{c as j,d as M,l as N,o as ne,u as P}from"./manager-CrN3WzFc.js";import{a as re,i as F,n as I,o as ie,r as ae,t as L}from"./control-flow-BQuMY04w.js";import{n as oe,t as R}from"./icon-1ydjt1pd.js";import{c as se,i as z,n as ce,o as le,s as B,t as ue}from"./scoped-Dk1HMUKj.js";import{n as V,t as H}from"./scroll-area-ukLK_GOt.js";import{c as de,d as fe,l as pe,s as me,u as he}from"./command-menu-Coh3Bcln.js";import{a as ge,c as _e,i as ve,l as ye,n as be,o as xe,r as Se,s as Ce,t as we,u as Te}from"./focus-DbrNPVyh.js";import{_ as U,g as Ee,h as De,m as W,n as Oe,r as ke,t as Ae,v as G}from"./params-form-D0fEgQzm.js";import{n as je,t as Me}from"./keyed-selector-MU49iODI.js";import{a as Ne,i as Pe,n as Fe,o as Ie,t as Le}from"./events-5qSA8--5.js";import{i as Re,o as ze}from"./select-DO80BU7g.js";import{n as Be,t as Ve}from"./text-input-j_8_8M_A.js";import{n as He,t as K}from"./button-B7k80QJA.js";import{n as Ue,t as We}from"./context-menu-CJgQIgte.js";import{n as Ge,t as Ke}from"./tooltip-D9O-2aTX.js";import{r as qe,t as Je}from"./wordmark-zN2ZvaUG.js";import{n as Ye,t as Xe}from"./prism-splash-CSFY9y0L.js";function Ze(e){let t=e.background??`radial-gradient(circle at 50% 45%, #ffffff 0%, #eef0f3 70%, #dfe3e8 100%)`;if(e.empty)return f(`div`,{style:{position:`absolute`,inset:0,background:t}});let n=[];for(let e=0;e<90;e++){let t=e/90,r=120+t*560+40*Math.sin(t*19),i=300+150*Math.sin(t*7.3)+30*Math.cos(t*23),a=200+160*t;n.push(f(`circle`,{cx:r,cy:i,r:14+4*Math.sin(t*31),fill:`hsl(${a} 55% 60%)`,"data-index":e}))}return f(`div`,{style:{position:`absolute`,inset:0,background:t},onPointerOver:t=>{let n=t.target.getAttribute?.(`data-index`);e.onHover?.(n==null?void 0:Number(n))},onPointerLeave:()=>e.onHover?.(void 0),children:m(`svg`,{viewBox:`0 0 800 600`,preserveAspectRatio:`xMidYMid meet`,style:`width: 100%; height: 100%`,children:[f(`defs`,{children:m(`radialGradient`,{id:`msp-placeholder-shade`,cx:`35%`,cy:`35%`,r:`65%`,children:[f(`stop`,{offset:`0%`,"stop-color":`#fff`,"stop-opacity":`0.55`}),f(`stop`,{offset:`100%`,"stop-color":`#000`,"stop-opacity":`0.2`})]})}),f(`g`,{children:n}),f(`g`,{style:`mix-blend-mode: soft-light; pointer-events: none`,children:n.map(e=>f(`circle`,{cx:e.getAttribute(`cx`),cy:e.getAttribute(`cy`),r:e.getAttribute(`r`),fill:`url(#msp-placeholder-shade)`}))})]})})}function Qe(){return(Qe=e((()=>{g()})))()}function $e(e){return{mount:(t,n,r)=>_(()=>e({ctx:n}),t,r)}}function et(){return(et=e((()=>{p()})))()}function tt(e,t,n=D){return w(e,t,n)}function nt(){return(nt=e((()=>{k(),T()})))()}function rt(){let e={};for(let t of q)e[t]={tabs:[],size:ct[t],floating:t===`right`||t===`top`,pinned:t===`right`};return{docks:e,mode:`auto`,compactRail:!1,buttons:{},hiddenTabs:[]}}function it(e,t){for(let n of Object.keys(t))if(!Object.is(e[n],t[n]))return!0;return!1}function at(e,t){let n={...e.docks};for(let e of q){let r=t.docks?.[e];r&&(n[e]={...n[e],...r})}return{docks:n,mode:t.mode??e.mode,compactRail:t.compactRail??e.compactRail,buttons:{...e.buttons,...t.buttons},hiddenTabs:t.hiddenTabs?[...new Set(t.hiddenTabs)]:e.hiddenTabs}}function ot(e){if(!e||typeof e!=`object`)return!1;let t=e;if(t.version!==1||!t.layout||typeof t.layout!=`object`)return!1;let n=t.layout.docks;if(!n||typeof n!=`object`)return!1;let{mode:r,compactRail:i,buttons:a,hiddenTabs:o}=t.layout;return r!==void 0&&!(r===`auto`||st.includes(r))||i!==void 0&&typeof i!=`boolean`||a!==void 0&&(!a||typeof a!=`object`)||o!==void 0&&!(Array.isArray(o)&&o.every(e=>typeof e==`string`))?!1:q.every(e=>{let t=n[e];if(!t)return!0;let r=e=>e===void 0||typeof e==`boolean`;return Array.isArray(t.tabs)&&t.tabs.every(e=>typeof e==`string`)&&(t.size===void 0||typeof t.size==`number`&&Number.isFinite(t.size))&&r(t.floating)&&r(t.pinned)})}var q,st,ct,lt,ut;function dt(){return(dt=e((()=>{A(),q=[`left`,`right`,`top`,`bottom`],st=[`desktop`,`compact`,`embedded`],ct={left:300,right:340,top:88,bottom:220},lt={left:180,right:180,top:40,bottom:40},ut=class{#e;#t;constructor(e){this.#e=e?at(rt(),e):rt(),this.#t=O(this.#e)}get layout(){return this.#t.asReadonly}get initial(){return this.#e}reset(){this.#t.set(this.#e)}setTabHidden(e,t){let n=this.#t.value;if(n.hiddenTabs.includes(e)===t)return;let r=t?[...n.hiddenTabs,e]:n.hiddenTabs.filter(t=>t!==e);this.#t.set({...n,hiddenTabs:r})}showAllTabs(){this.#t.value.hiddenTabs.length&&this.#t.set({...this.#t.value,hiddenTabs:[]})}setDock(e,t){let n=this.#t.value,r=n.docks[e];if(!it(r,t))return;let i={...r,...t};i.size!==r.size&&(i.size=Math.max(lt[e],Math.round(i.size))),this.#t.set({...n,docks:{...n.docks,[e]:i}})}setMode(e){this.#t.value.mode!==e&&this.#t.set({...this.#t.value,mode:e})}setCompactRail(e){this.#t.value.compactRail!==e&&this.#t.set({...this.#t.value,compactRail:e})}setButtons(e){let t=this.#t.value;it(t.buttons,e)&&this.#t.set({...t,buttons:{...t.buttons,...e}})}save(){return{version:1,layout:this.#t.value}}restore(e){if(!ot(e))return!1;let t={};for(let n of q){let r=e.layout.docks?.[n];r&&(t[n]={...r,...r.size===void 0?{}:{size:Math.max(lt[n],Math.round(r.size))}})}return this.#t.set(at(this.#t.value,{...e.layout,docks:t})),!0}}})))()}function ft(){let e={};for(let t of q)e[t]={active:void 0,collapsed:!1};return{docks:e,card:void 0,page:void 0,focus:void 0,railOpen:!1,expanded:!1,fullscreen:!1}}function pt(e,t){let n=e.docks[t];return n.collapsed?void 0:n.active}function mt(e,t){return tt(e,t,Object.is)}function ht(e){if(!e||typeof e!=`object`)return!1;let t=e;return t.version===1&&!!t.navigation&&typeof t.navigation.docks==`object`&&!!t.navigation.docks}var gt,_t;function vt(){return(vt=e((()=>{nt(),A(),dt(),gt=`right`,_t=class{#e=O(ft());#t;#n;#r;#i;#a;#o;constructor(e){if(e){let t=this.#e.value,n={...t.docks};for(let t of q)e.docks?.[t]&&(n[t]={...n[t],...e.docks[t]});this.#e.set({...t,docks:n,railOpen:e.railOpen??t.railOpen})}this.#t=mt(this.#e.asReadonly,e=>pt(e,gt)),this.#n=mt(this.#e.asReadonly,e=>e.card?.id),this.#r=mt(this.#e.asReadonly,e=>e.card?.section??e.focus?.section),this.#i=mt(this.#e.asReadonly,e=>e.page?.id),this.#a=mt(this.#e.asReadonly,e=>e.expanded),this.#o=mt(this.#e.asReadonly,e=>e.fullscreen)}get state(){return this.#e.asReadonly}get tab(){return this.#t}get card(){return this.#n}get section(){return this.#r}get page(){return this.#i}get expanded(){return this.#a}get fullscreen(){return this.#o}openTab(e){return pt(this.#e.value,e)}setDock(e,t){let n=this.#e.value,r=n.docks[e],i=(!(`active`in t)||t.active===r.active)&&(t.collapsed===void 0||t.collapsed===r.collapsed),a=n.expanded&&t.collapsed!==!1;i&&a===n.expanded||this.#e.set({...n,expanded:a,docks:{...n.docks,[e]:{...r,...t}}})}setExpanded(e){this.#e.value.expanded!==e&&this.#e.set({...this.#e.value,expanded:e})}setFullscreen(e){this.#e.value.fullscreen!==e&&this.#e.set({...this.#e.value,fullscreen:e})}setCard(e){let t=this.#e.value;(t.card?.id!==e?.id||t.card?.section!==e?.section||e?.section)&&this.#e.set({...t,card:e})}setPage(e){let t=this.#e.value;(t.page?.id!==e?.id||t.page?.focus!==e?.focus)&&this.#e.set({...t,page:e})}setFocus(e){let t=this.#e.value;t.focus!==e&&this.#e.set({...t,focus:e})}setRailOpen(e){this.#e.value.railOpen!==e&&this.#e.set({...this.#e.value,railOpen:e})}save(){let{docks:e,card:t,page:n}=this.#e.value;return{version:1,navigation:{docks:e,card:t,page:n}}}restore(e){if(!ht(e))return!1;let t=this.#e.value,n={...t.docks};for(let t of q){let r=e.navigation.docks[t];r&&(n[t]={active:r.active,collapsed:!!r.collapsed})}return this.#e.set({...t,docks:n,card:e.navigation.card,page:e.navigation.page}),!0}}})))()}function yt(e){let t={};for(let n of q){let r=e.docks?.[n];if(!r)continue;let i={};for(let e of St)e in r&&(i[e]=r[e]);t[n]=i}return{docks:t,...e.mode?{mode:e.mode}:{},compactRail:!!e.compactRail,buttons:e.buttons??{}}}function bt(e){let t={};for(let n of q){let r=e.docks?.[n];r&&(t[n]={...`active`in r?{active:r.active}:{},...r.collapsed===void 0?{}:{collapsed:r.collapsed}})}return{docks:t}}var xt,St,Ct;function wt(){return(wt=e((()=>{vt(),dt(),A(),u(),xt=class{#e;#t;#n;constructor(e,t){this.id=e,this.#e=O(t),this.#t=O([]),this.#n=O(void 0)}get state(){return this.#e.asReadonly}get tabs(){return this.#t.asReadonly}get active(){return this.#n.asReadonly}sync(e,t,n){this.#e.set(e);let r=e.tabs.filter(e=>!n.includes(e)).map(e=>t.get(e)).filter(e=>!!e);this.#t.set(r),this.#n.set(e.collapsed?void 0:r.find(t=>t.id===e.active))}},St=[`tabs`,`size`,`floating`,`pinned`],Ct=class extends t{#e=new Map;#t=new Map;#n=new Map;#r;#i;#a=O(void 0);#o;#s=O(!0);#c=O(0);#l=O(`desktop`);#u=O(void 0,{compare:Object.is});#d;#f=O(void 0,{compare:Object.is});#p=O(!1);#m=O(!1);#h=O([]);#g=O([]);#_=O([]);#v=O([]);#y=new Map;#b;#x;#S=O(!1);constructor(e={}){super(),this.#b=e.compactWidth??720,this.#x=e.toolbar??`auto`,this.#r=e.viewState??new ut(yt(e)),this.#i=e.navigation??new _t(bt(e)),this.#o={};for(let e of q)this.#o[e]=new xt(e,this.#E(e));this.subscribePermanently(this.#r.layout,()=>this.#O()),this.subscribePermanently(this.#i.state,()=>this.#O())}get viewState(){return this.#r}get navigation(){return this.#i}get compactRail(){return this.#p.asReadonly}get railOpen(){return this.#m.asReadonly}get railShown(){return this.#s.asReadonly}get toolbarCollapsed(){return this.#S.asReadonly}setCompactRail(e){this.#r.setCompactRail(e),this.setRailOpen(!1)}setRailOpen(e){this.#p.value&&!e&&(this.closeOverlay(),this.#i.setDock(`right`,{collapsed:!0})),this.#i.setRailOpen(e)}toggleRail(){this.#p.value&&this.setRailOpen(!this.#i.state.value.railOpen)}get expanded(){return this.#i.expanded}setExpanded(e){e&&this.closeOverlay(),this.#i.setExpanded(e)}dock(e){return this.#o[e]}get mode(){return this.#l.asReadonly}#C=new Map;sectionOpen(e,t){return this.#C.get(`${e}\n${t}`)}setSectionOpen(e,t,n){this.#C.set(`${e}\n${t}`,n)}get tabFocus(){return this.#f.asReadonly}get overlay(){return this.#u.asReadonly}get page(){return this.#a.asReadonly}get toolbar(){return this.#_.asReadonly}sections(e){let t=this.#y.get(e);if(!t){let n=O([]),r=t=>n.set(t.filter(t=>t.slot===e).sort((e,t)=>(e.order??0)-(t.order??0)));r(this.#v.value),this.subscribePermanently(this.#v.asReadonly,r),t=n.asReadonly,this.#y.set(e,t)}return t}registerSections(e){return this.#v.set([...this.#v.value,...e]),()=>this.#v.set(this.#v.value.filter(t=>!e.includes(t)))}registerToolbar(e){return this.#g.set((e=>[...e].sort((e,t)=>(e.order??0)-(t.order??0)))([...this.#g.value,...e])),this.#A(),()=>{this.#g.set(this.#g.value.filter(t=>!e.includes(t))),this.#A()}}setButtons(e){this.#r.setButtons(e)}registerTabs(e){let t=[...e].sort((e,t)=>(e.order??0)-(t.order??0));for(let e of t)this.#e.set(e.id,e),this.#w(e);return this.#O(),()=>{for(let e of t){if(this.#e.get(e.id)!==e)continue;this.#e.delete(e.id);let t=this.#T(e.id);if(!t)continue;let n=this.#E(t),r=n.tabs.filter(t=>t!==e.id);this.#D(t,{tabs:r,active:n.active===e.id?r[0]:n.active})}this.#O()}}#w(e){let t=this.#T(e.id)??e.dock??`right`,n=this.#E(t),r=n.tabs;if(!r.includes(e.id)){let t=e.order??0,n=r.findIndex(e=>(this.#e.get(e)?.order??0)>t);r=n<0?[...r,e.id]:[...r.slice(0,n),e.id,...r.slice(n)]}let i=this.#r.layout.value.hiddenTabs.includes(e.id);this.#D(t,{tabs:r,active:n.active??(i?void 0:e.id)})}get hiddenTabs(){return this.#h.asReadonly}hideTab(e){let t=this.#T(e);E(()=>{if(this.#r.setTabHidden(e,!0),!t)return;let n=this.#E(t);if(n.active!==e)return;let r=this.#r.layout.value.hiddenTabs,i=n.tabs.find(t=>t!==e&&!r.includes(t)&&this.#e.has(t));this.#D(t,{active:i,collapsed:!0})})}showTab(e){this.#r.setTabHidden(e,!1)}showAllTabs(){this.#r.showAllTabs()}resetLayout(){E(()=>{this.#r.reset();let e=[...this.#e.values()].sort((e,t)=>(e.order??0)-(t.order??0));for(let t of e)this.#w(t);for(let e of q){let t=this.#E(e);t.active!==void 0&&!t.tabs.includes(t.active)&&this.#i.setDock(e,{active:t.tabs.find(e=>this.#e.has(e))})}})}registerOverlays(e){for(let t of e)this.#t.set(t.id,t);return this.#O(),()=>{for(let t of e)this.#t.get(t.id)===t&&(this.#t.delete(t.id),this.#i.state.value.card?.id===t.id&&this.closeOverlay());this.#O()}}registerPages(e){for(let t of e)this.#n.set(t.id,t);return this.#O(),()=>{for(let t of e)this.#n.get(t.id)===t&&(this.#n.delete(t.id),this.#i.state.value.page?.id===t.id&&this.closePage());this.#O()}}openPage(e,t){this.#n.has(e)&&(this.closeOverlay(),this.#i.setPage({id:e,...t?{focus:t}:{}}))}closePage(){this.#i.setPage(void 0)}show(e,t){let n=this.#T(e);n&&(this.showTab(e),t?this.#i.setFocus({tab:e,section:t}):this.#i.state.value.focus?.tab===e&&this.#i.setFocus(void 0),this.#D(n,{active:e,collapsed:!1}))}select(e){let t=this.#T(e);if(!t)return;this.#i.state.value.focus?.tab===e&&this.#i.setFocus(void 0);let n=this.#E(t);n.active===e&&!n.collapsed?this.#D(t,{collapsed:!0}):this.#D(t,{active:e,collapsed:!1})}toggle(e){this.#D(e,{collapsed:!this.#E(e).collapsed})}move(e,t,n){let r=this.#T(e);if(!r||!this.#e.has(e))return;let i=this.#E(r),a=i.tabs.filter(t=>t!==e);this.#D(r,{tabs:a,active:i.active===e?a[0]:i.active});let o=[...this.#E(t).tabs.filter(t=>t!==e)];o.splice(n??o.length,0,e),this.#D(t,{tabs:o,active:e,collapsed:!1})}setSize(e,t){this.#r.setDock(e,{size:t})}setFloating(e,t){this.#r.setDock(e,{floating:t})}setPinned(e,t){this.#r.setDock(e,{pinned:t})}setMode(e){this.#r.setMode(e),e===`embedded`&&this.setRailOpen(!1)}setWidth(e){this.#c.set(e),this.#j()&&this.#O()}openOverlay(e,t,n){if(!this.#t.has(e))return;this.#d=t?{id:e,element:t}:this.#d?.id===e?this.#d:void 0;let r=this.#u.value;this.#i.setCard({id:e,...n?{section:n}:{}}),this.#u.value===r&&this.#k(!0)}toggleOverlay(e,t){this.#i.state.value.card?.id===e?this.closeOverlay():this.openOverlay(e,t)}closeOverlay(){this.#d=void 0,this.#i.setCard(void 0)}#T(e){let t=this.#r.layout.value.docks;for(let n of q)if(t[n].tabs.includes(e))return n}#E(e){let t=this.#r.layout.value.docks[e],n=this.#i.state.value.docks[e],r={...t,active:n.active,collapsed:n.collapsed};return this.#l.value===`embedded`?{...r,floating:e===`right`||r.floating,pinned:!1}:this.#r.layout.value.compactRail&&r.floating&&r.pinned||this.#l.value===`compact`&&r.pinned?{...r,pinned:!1}:r}#D(e,t){let n={};for(let e of St)e in t&&(n[e]=t[e]);Object.keys(n).length&&this.#r.setDock(e,n);let r={};`active`in t&&(r.active=t.active),`collapsed`in t&&(r.collapsed=t.collapsed),Object.keys(r).length&&this.#i.setDock(e,r)}#O(){if(!this.#o)return;this.#j();let e=this.#r.layout.value;for(let t of q)this.#o[t].sync(this.#E(t),this.#e,e.hiddenTabs);let t=e.hiddenTabs.map(e=>this.#e.get(e)).filter(e=>!!e),n=this.#h.value;(t.length!==n.length||t.some((e,t)=>e!==n[t]))&&this.#h.set(t);let r=this.#i.state.value,i=e.compactRail||this.#l.value===`embedded`;this.#p.set(i),this.#m.set(r.railOpen),this.#s.set(!i||r.railOpen),this.#f.set(r.focus);let a=r.page?this.#n.get(r.page.id):void 0,o=this.#a.value;a?(o?.page!==a||o.focus!==r.page?.focus)&&this.#a.set({page:a,...r.page?.focus?{focus:r.page.focus}:{}}):this.#a.set(void 0),this.#k(!1),this.#A()}#k(e){let t=this.#i.state.value.card,n=t?this.#t.get(t.id):void 0;if(!n||!t){this.#u.set(void 0);return}let r=this.#u.value,i=this.#d?.id===t.id?this.#d.element:void 0;(e||r?.overlay!==n||r.anchor!==i||r.focus!==t.section)&&this.#u.set({overlay:n,...i?{anchor:i}:{},...t.section?{focus:t.section}:{}})}#A(){let e=this.#r.layout.value.buttons;this.#_.set(this.#g.value.filter(t=>e[t.id]!==!1))}#j(){let e=this.#r.layout.value.mode,t=this.#c.value,n=t>0&&t<this.#b,r=e===`auto`?n?`compact`:`desktop`:e===`embedded`&&n?`compact`:e,i=this.#x;return this.#S.set(i===`auto`?r===`compact`:i===`collapsed`),this.#l.value!==r&&(this.#l.set(r),!0)}}})))()}var J;function Tt(){return(Tt=e((()=>{S(),J={body:`msp-settings-settings-tab-body`,chevron:`msp-settings-settings-tab-chevron`,group:`msp-settings-settings-tab-group`,groups:`msp-settings-settings-tab-groups`,groupsContent:`msp-settings-settings-tab-groupsContent`,header:`msp-settings-settings-tab-header`,none:`msp-settings-settings-tab-none`,search:`msp-settings-settings-tab-search`,searchIcon:`msp-settings-settings-tab-searchIcon`,searchInput:`msp-settings-settings-tab-searchInput`,tab:`msp-settings-settings-tab-tab`,title:`msp-settings-settings-tab-title`,toggle:`msp-settings-settings-tab-toggle`},x(`views/settings/settings-tab.module.css`,`@layer msp.components {
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

  &:has(.msp-settings-settings-tab-toggle[aria-expanded="true"]) {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
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
`)})))()}function Et(e){let{model:t}=e,n=O(``),r=n.asReadonly,i=w(r,e=>e.trim().length>0&&!t.groups.some(t=>ke(t.form.params,e)));return m(`div`,{class:J.tab,children:[m(`div`,{class:J.search,children:[f(R,{name:`search`,size:14,class:J.searchIcon}),f(Ve,{search:!0,size:`sm`,class:J.searchInput,"aria-label":`Search settings`,placeholder:`Search settings`,value:r,onInput:e=>n.set(e)})]}),m(H,{class:J.groups,contentClass:J.groupsContent,children:[t.groups.map((e,t)=>f(Dt,{group:e,query:r,open:t===0})),f(I,{when:i,children:()=>m(`p`,{class:J.none,children:[`No setting matches “`,r,`”.`]})}),e.more?.()]})]})}function Dt(e){let{group:t,query:n}=e,r=O(e.open),i=w(n,e=>e.trim().length>0),a=w([r.asReadonly,i],(e,t)=>e||t),o=w(n,e=>!ke(t.form.params,e));return m(`section`,{class:J.group,hidden:o,"aria-label":t.title,children:[f(`div`,{class:J.header,children:m(`button`,{type:`button`,class:J.toggle,"aria-expanded":a,onClick:()=>r.set(!r.value),children:[f(`span`,{class:J.title,children:t.title}),f(R,{name:`chevron-down`,size:14,class:J.chevron})]})}),f(I,{when:a,reveal:!0,children:()=>f(`div`,{class:J.body,"data-wide-labels":t.wideLabels?``:void 0,children:f(Ae,{form:t.form,filter:n})})})]})}function Ot(){return(Ot=e((()=>{oe(),Oe(),V(),Be(),F(),A(),T(),Tt(),g()})))()}var Y;function kt(){return(kt=e((()=>{S(),Y={action:`msp-shell-help-panel-action`,conflict:`msp-shell-help-panel-conflict`,conflicts:`msp-shell-help-panel-conflicts`,content:`msp-shell-help-panel-content`,edit:`msp-shell-help-panel-edit`,editBar:`msp-shell-help-panel-editBar`,group:`msp-shell-help-panel-group`,heading:`msp-shell-help-panel-heading`,headingRow:`msp-shell-help-panel-headingRow`,help:`msp-shell-help-panel-help`,input:`msp-shell-help-panel-input`,key:`msp-shell-help-panel-key`,keys:`msp-shell-help-panel-keys`,list:`msp-shell-help-panel-list`,or:`msp-shell-help-panel-or`,recorder:`msp-shell-help-panel-recorder`,row:`msp-shell-help-panel-row`,srOnly:`msp-shell-help-panel-srOnly`},x(`views/shell/help-panel.module.css`,`@layer msp.components {
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

.msp-shell-help-panel-headingRow {
  padding-right: var(--msp-space-1);
  justify-content: space-between;
  align-items: center;
  display: flex;

  & .msp-shell-help-panel-heading {
    padding-bottom: 0;
  }
}

.msp-shell-help-panel-edit {
  gap: var(--msp-space-1);
  display: flex;
}

.msp-shell-help-panel-recorder {
  padding: 1px var(--msp-space-2);
  border-radius: var(--msp-radius-sm);
  outline: 1px solid var(--msp-color-accent);
  color: var(--msp-color-accent);
  font-size: var(--msp-font-size-xs);
  white-space: nowrap;
}

.msp-shell-help-panel-editBar {
  justify-content: space-between;
  align-items: center;
  gap: var(--msp-space-2);
  padding: var(--msp-space-1) var(--msp-inset) 0;
  display: flex;
}

.msp-shell-help-panel-srOnly {
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
}
}
`)})))()}function At(e){let t=e.commands,n=t.keymap,i=O(!1),a=O(void 0),o=je(a.asReadonly),s=O(``),c=w([t.commands,n.layers,a.asReadonly],(e,r,i)=>e.filter(e=>t.shortcut(e)||n.isRemapped(e.id)||e.id===i)),l=w([t.commands,n.layers],e=>{let t=n.conflicts(e);return t.length?t:void 0}),u=(e,r)=>{n.remap(e.id,r),a.set(void 0);let i=n.sharing(e.id,r,t.commands.value);s.set(`${e.title}: ${N(r)}${i.length?`, also used by ${i.map(e=>e.title).join(` and `)}`:``}.`)},d=document.createTextNode(``);return r([s.asReadonly],()=>G(d,s.value)),m(H,{edge:!0,class:Y.help,contentClass:Y.content,"aria-label":`Help`,children:[e.intro?.(),f(I,{when:l,children:e=>m(`section`,{class:Y.conflicts,"aria-label":`Shortcut conflicts`,children:[f(R,{name:`triangle-alert`,size:14}),f(`div`,{children:e.map(e=>m(`p`,{class:Y.conflict,children:[f(Nt,{input:j(e.chord)}),` is used by `,e.commands.map(e=>e.title).join(` and `),e.scope===`global`?``:` (in ${e.scope})`,`: only the first that can run takes it.`]}))})]})}),f(L,{each:e.bindings,children:e=>f(Mt,{title:e.title,bindings:e.bindings})}),f(Mt,{title:`Everywhere`,bindings:Pt()}),m(`section`,{class:Y.group,"aria-label":`Commands`,children:[m(`div`,{class:Y.headingRow,children:[f(`h3`,{class:Y.heading,children:`Commands`}),f(K,{size:`xs`,variant:`ghost`,pressed:i.asReadonly,onClick:()=>{i.set(!i.value),a.set(void 0)},children:`Change keys`})]}),f(`dl`,{class:Y.list,children:f(L,{each:c,by:e=>e.id,children:e=>f(jt,{manager:t,command:e,editing:i.asReadonly,recording:o.key(e.id),onRecord:()=>a.set(e.id),onRecorded:t=>t?u(e,t):a.set(void 0),onChanged:e=>s.set(e)})})}),f(I,{when:w(i.asReadonly,e=>e?!0:void 0),children:()=>m(`div`,{class:Y.editBar,children:[f(Re,{size:`sm`,"aria-label":`Give a key to a command`,options:[[``,`Give a key to…`],...t.commands.value.filter(e=>!t.shortcut(e)).map(e=>[e.id,e.title]).sort((e,t)=>e[1].localeCompare(t[1]))],value:``,onChange:e=>e&&a.set(e)}),f(K,{size:`xs`,variant:`ghost`,onClick:()=>(n.resetAll(),s.set(`Every key is back to its default.`)),children:`Reset all`})]})}),f(`span`,{class:Y.srOnly,role:`status`,"aria-live":`polite`,children:d})]})]})}function jt(e){let{manager:t,command:n}=e,r=t.keymap,i=w(r.layers,()=>({chord:t.shortcut(n),remapped:r.isRemapped(n.id)})),a=M();return m(`div`,{class:Y.row,children:[f(`dt`,{class:Y.action,children:n.title}),m(`dd`,{class:Y.input,children:[f(I,{when:w(e.recording,e=>e?!0:void 0),fallback:()=>f(I,{when:w(i,e=>e.chord),fallback:()=>f(`span`,{class:Y.or,children:`no key`}),children:e=>f(Nt,{input:j(e,a)})}),children:()=>f(`span`,{class:Y.recorder,tabIndex:0,role:`button`,"aria-label":`Press the new keys for ${n.title}; Escape cancels`,ref:e=>setTimeout(()=>e.isConnected&&e.focus()),onBlur:()=>e.onRecorded(void 0),onKeyDown:t=>{if(t.preventDefault(),t.stopPropagation(),t.key===`Escape`)return e.onRecorded(void 0);let n=ne(t,a);n&&e.onRecorded(n)},children:`Press keys…`})}),f(I,{when:w(e.editing,e=>e?!0:void 0),children:()=>m(`span`,{class:Y.edit,children:[f(K,{size:`xs`,variant:`ghost`,title:`Change the key of ${n.title}`,onClick:()=>e.onRecord(),children:`Change`}),f(I,{when:w(i,e=>e.chord?!0:void 0),children:()=>f(K,{size:`xs`,variant:`ghost`,title:`Remove the key of ${n.title}`,onClick:()=>{r.remap(n.id,null),e.onChanged(`${n.title}: no key.`)},children:`Clear`})}),f(I,{when:w(i,e=>e.remapped?!0:void 0),children:()=>f(K,{size:`xs`,variant:`ghost`,title:`Back to the default key of ${n.title}`,onClick:()=>{r.reset(n.id);let t=r.defaultShortcut(n);e.onChanged(`${n.title}: ${t?N(t,a):`no key`} again.`)},children:`Reset`})})]})})]})]})}function Mt(e){return m(`section`,{class:Y.group,"aria-label":e.title,children:[f(`h3`,{class:Y.heading,children:e.title}),f(`dl`,{class:Y.list,children:e.bindings.map(e=>m(`div`,{class:Y.row,children:[f(`dt`,{class:Y.action,children:e.action}),m(`dd`,{class:Y.input,children:[f(Nt,{input:e.input}),e.or?m(l,{children:[f(`span`,{class:Y.or,children:`or`}),f(Nt,{input:e.or})]}):null]})]}))})]})}function Nt(e){return f(`span`,{class:Y.keys,children:e.input.map(e=>f(`kbd`,{class:Y.key,children:e}))})}var Pt;function Ft(){return(Ft=e((()=>{P(),He(),oe(),V(),ze(),F(),y(),Me(),A(),T(),kt(),g(),Pt=()=>[{action:`Command menu`,input:j({key:`k`,mod:!0}),or:j({key:`p`,mod:!0,shift:!0})},{action:`Help (this card)`,input:[`?`]},{action:`Close a menu, a card or the command menu`,input:[`Esc`]}]})))()}function It(e){let t=v(`RecycledList`),r=e.overscan??8,i=b(0),a=O(0),c=O(e.rowHeight),l,u=()=>{if(!l)return;let e=l.scrollTop,t=l.clientHeight;i.offer(e),t!==a.value&&a.set(t)},p=e=>e||800,m=O({first:0,last:0}),g=[],_=0,y=-1/0,x=()=>{y=performance.now()},S,C=e=>{let t=g.length,n=c.value,o=i.value,s=Math.min(t,Math.floor(o/n)),l=Math.min(t,Math.ceil((o+p(a.value))/n)),u=l-s,d=o>=_,f=performance.now()-y<200?Math.abs(o-_):0;_=o;let{first:h,last:v}=m.value,b=pe(f,n,u,Math.max(r,Math.ceil(u/2))),x=h<=Math.max(0,s-(d?r:b))&&v>=Math.min(t,l+(d?b:r))&&v<=t,S,C;if(e)S=s-u,C=l+u;else if(x)return;else if(l<=h||s>=v){let e=pe(f,n,u,2);S=s-(d?2:e),C=l+(d?e:2)}else{let e=pe(f,n,u,Math.max(r,u));S=s-(d?r:e),C=l+(d?e:r)}S=Math.max(0,S),C=Math.min(t,C),(S!==h||C!==v)&&m.set({first:S,last:C})},ee=()=>{D(),C(!1),S!==void 0&&clearTimeout(S),S=setTimeout(()=>{S=void 0,C(!0),ge()},120)},T=[],E;function D(){if(E!==void 0){clearTimeout(E),E=void 0;for(let e of T)e.classList.remove(he.glide,he.enter);T.length=0,A?.removeAttribute(`data-revealing`)}}let k=!1;n(()=>{S!==void 0&&clearTimeout(S),D()}),d(w([e.items,a.asReadonly,c.asReadonly],(e,t,n)=>({list:e,h:t,rh:n})),({list:e})=>{g=e,C(!0)}),d(i,ee);let A,j=new Map,M=[],N=t=>!!e.slot&&(!e.recycle||e.recycle(t)),ne,P=le(void 0,e=>{let t=e[e.length-1].contentRect.height;t>0&&Math.abs(t-c.value)>.5&&c.set(t)}),F=e=>{!ne&&P&&(ne=e,P.observe(e))},I=()=>{let e=document.createElement(`div`);return e.className=he.row,e},ae=()=>{let n=t.child(),r=o(n,()=>e.slot()),i=I();return i.append(r.el),A.append(i),F(i),{el:i,view:r,shown:!0}},L=(n,r)=>{let i=t.child(),a=I();return o(i,()=>h(a,e.children?.(r),null)),A.append(a),F(a),{key:n,item:r,el:a,y:NaN,scope:i}},oe=e=>{e.scope.dispose(),e.el.remove(),ne===e.el&&(P?.unobserve(e.el),ne=void 0)},R=(e,t,n)=>{let r=t*n;e.y!==r&&(k&&(e.el.classList.add(Number.isNaN(e.y)?he.enter:he.glide),T.push(e.el)),e.y=r,e.el.style.transform=`translateY(${r}px)`)},se=(t,n,r)=>{let i=g[n],a=e.itemKey(i);if(t.has(a))return!0;let o;if(N(i)){let e=M.pop();if(e)e.shown||(e.shown=!0,e.el.hidden=!1);else{if(!ie())return!1;e=ae()}e.view.show(i),o={key:a,item:i,el:e.el,y:NaN,slot:e}}else{if(!ie())return!1;o=L(a,i)}return t.set(a,o),R(o,n,r),!0},z=!1,ce=!1,ue=(n,r,o)=>{if(!A)return;let s=new Map;for(let t=n;t<r;t++){let n=g[t],r=e.itemKey(n);if(s.has(r)){ce||(ce=!0,console.warn(`VirtualList: duplicate key; later items with the same key are not rendered.`,r));continue}let i=j.get(r);if(i){if(i.item!==n){if(i.slot&&N(n))i.item=n,i.slot.view.show(n);else continue}s.set(r,i),R(i,t,o)}}let c=M.length;for(let[e,t]of j)s.get(e)!==t&&(t.slot?M.push(t.slot):oe(t));j=s;let l=i.value,u=Math.max(n,Math.min(r,Math.floor(l/o))),d=Math.max(u,Math.min(r,Math.ceil((l+p(a.value))/o))),f=!1;for(let e=u;e<d&&!f;e++)se(s,e,o)||(f=!0);for(let e=n;e<u&&!f;e++)se(s,e,o)||(f=!0);for(let e=d;e<r&&!f;e++)se(s,e,o)||(f=!0);for(let e=M.length-1;e>=c;e--){let t=M[e];t.shown&&(t.shown=!1,t.view.show(void 0),t.el.hidden=!0)}f&&!z&&(z=!0,re(()=>{z=!1,!t.disposed&&t.active&&ue(V.first,V.last,V.rh)}))},V={first:0,last:0,rh:e.rowHeight},fe=[],me=w([e.items,m.asReadonly,c.asReadonly],(e,t,n)=>({list:e,first:Math.min(t.first,e.length),last:Math.min(t.last,e.length),rh:n}),(e,t)=>e.list===t.list&&e.first===t.first&&e.last===t.last&&e.rh===t.rh);n(()=>{for(let e of j.values())e.slot||e.scope.dispose();j.clear()});let ge=()=>{if(!A)return;let e=performance.now(),t=[...j.values()].sort((e,t)=>e.y-t.y),n=new Set;for(let e of t)n.add(e.el);let r=A.getRootNode().activeElement,i,a=A.firstChild,o=0;for(let e of t){for(;a&&!n.has(a);)a=a.nextSibling;e.el===a?a=a.nextSibling:(r&&!i&&e.el.contains(r)&&(i=r),A.insertBefore(e.el,a),o++)}i?.focus({preventScroll:!0}),Lt.settles++,Lt.moved+=o,Lt.lastMs=performance.now()-e};return e.ref?.({scrollToIndex(e){let t=c.value,n=p(a.value),r=e*t,o=i.value;r<o?o=r:r+t>o+n&&(o=r+t-n),o!==i.value&&(_=o,l&&(l.scrollTop=o),i.offer(o)),te(),s()}}),f(H,{class:`${he.list} ${e.class??``}`,contentClass:he.content,edge:e.edge,fade:!1,viewportRef:e=>{l=e,B(e,`scroll`,u,{passive:!0}),B(e,`wheel`,x,{passive:!0}),B(e,`touchmove`,x,{passive:!0}),le(e,u),queueMicrotask(u)},role:e.role,"aria-label":e[`aria-label`],ref:t=>{A=t,e.contentRef?.(t),d(me,t=>{let n=e.reveal&&t.list!==fe?de(fe,t.list,e.itemKey):void 0;fe=t.list,g=t.list,V=t,n&&(D(),k=!0,A?.setAttribute(`data-revealing`,``),E=setTimeout(D,240)),ue(t.first,t.last,t.rh),k=!1})},style:{height:w([e.items,c.asReadonly],(e,t)=>`${e.length*t}px`),"--msp-virtual-row":w(c.asReadonly,e=>`${e}px`)}})}var Lt;function Rt(){return(Rt=e((()=>{F(),p(),y(),A(),T(),z(),V(),fe(),me(),g(),Lt={settles:0,moved:0,lastMs:0}})))()}var X;function zt(){return(zt=e((()=>{S(),X={detail:`msp-shell-log-view-detail`,empty:`msp-shell-log-view-empty`,entries:`msp-shell-log-view-entries`,entry:`msp-shell-log-view-entry`,filters:`msp-shell-log-view-filters`,kind:`msp-shell-log-view-kind`,kinds:`msp-shell-log-view-kinds`,log:`msp-shell-log-view-log`,search:`msp-shell-log-view-search`,text:`msp-shell-log-view-text`,time:`msp-shell-log-view-time`},x(`views/shell/log-view.module.css`,`@layer msp.components {
.msp-shell-log-view-log {
  --msp-scroll-edge: var(--msp-panel-inset);
  gap: var(--msp-space-2);
  min-height: 0;
  padding: 0 var(--msp-panel-inset);
  font-size: var(--msp-font-size-sm);
  flex-direction: column;
  flex: 1 1 0;
  display: flex;
}

.msp-shell-log-view-filters {
  align-items: center;
  gap: var(--msp-space-2);
  padding: var(--msp-space-2) var(--msp-space-3);
  background: var(--msp-color-panel);
  flex: none;
  display: flex;
}

.msp-shell-log-view-kinds {
  gap: var(--msp-space-1);
  flex: none;
  display: flex;
}

.msp-shell-log-view-search {
  flex: auto;
  min-width: 0;
}

.msp-shell-log-view-entries {
  min-height: 0;
}

.msp-shell-log-view-empty {
  padding: var(--msp-space-4);
  color: var(--msp-color-text-muted);
  flex: none;
  margin: 0;
}

.msp-shell-log-view-entry {
  white-space: nowrap;
  align-items: baseline;
  gap: var(--msp-space-3);
  padding: var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  grid-template-columns: auto minmax(0, 1fr) auto auto;
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
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-shell-log-view-detail {
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.msp-shell-log-view-time {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
}
}
`)})))()}var Z;function Bt(){return(Bt=e((()=>{S(),Z={announce:`msp-shell-canvas-announce`,bar:`msp-shell-canvas-bar`,bottom:`msp-shell-canvas-bottom`,bottomGrid:`msp-shell-canvas-bottomGrid`,busy:`msp-shell-canvas-busy`,"busy-in":`msp-shell-canvas-busy-in`,"busy-slide":`msp-shell-canvas-busy-slide`,"busy-spin":`msp-shell-canvas-busy-spin`,busyActions:`msp-shell-canvas-busyActions`,busyBar:`msp-shell-canvas-busyBar`,busyCard:`msp-shell-canvas-busyCard`,busyHead:`msp-shell-canvas-busyHead`,busyLabel:`msp-shell-canvas-busyLabel`,busyPercent:`msp-shell-canvas-busyPercent`,busySpin:`msp-shell-canvas-busySpin`,busyTrack:`msp-shell-canvas-busyTrack`,caption:`msp-shell-canvas-caption`,card:`msp-shell-canvas-card`,"card-in":`msp-shell-canvas-card-in`,cardBody:`msp-shell-canvas-cardBody`,cardBodyContent:`msp-shell-canvas-cardBodyContent`,cardBodyFill:`msp-shell-canvas-cardBodyFill`,cardDocked:`msp-shell-canvas-cardDocked`,cardHeader:`msp-shell-canvas-cardHeader`,cardSlot:`msp-shell-canvas-cardSlot`,cardTitle:`msp-shell-canvas-cardTitle`,chip:`msp-shell-canvas-chip`,context:`msp-shell-canvas-context`,corner:`msp-shell-canvas-corner`,countdown:`msp-shell-canvas-countdown`,face:`msp-shell-canvas-face`,folded:`msp-shell-canvas-folded`,frame:`msp-shell-canvas-frame`,lead:`msp-shell-canvas-lead`,menuMark:`msp-shell-canvas-menuMark`,message:`msp-shell-canvas-message`,pill:`msp-shell-canvas-pill`,"pill-in":`msp-shell-canvas-pill-in`,pillButton:`msp-shell-canvas-pillButton`,pillMain:`msp-shell-canvas-pillMain`,progress:`msp-shell-canvas-progress`,railMenu:`msp-shell-canvas-railMenu`,railMenuAnchor:`msp-shell-canvas-railMenuAnchor`,railMenuButton:`msp-shell-canvas-railMenuButton`,railMenuDivider:`msp-shell-canvas-railMenuDivider`,railMenuList:`msp-shell-canvas-railMenuList`,railToggle:`msp-shell-canvas-railToggle`,sections:`msp-shell-canvas-sections`,spin:`msp-shell-canvas-spin`,stack:`msp-shell-canvas-stack`,stackTools:`msp-shell-canvas-stackTools`,status:`msp-shell-canvas-status`,text:`msp-shell-canvas-text`,tool:`msp-shell-canvas-tool`,"tool-menu-in":`msp-shell-canvas-tool-menu-in`,toolMenu:`msp-shell-canvas-toolMenu`,toolMenuCard:`msp-shell-canvas-toolMenuCard`,toolMenuCheck:`msp-shell-canvas-toolMenuCheck`,toolMenuChevron:`msp-shell-canvas-toolMenuChevron`,toolMenuDivider:`msp-shell-canvas-toolMenuDivider`,toolMenuHeading:`msp-shell-canvas-toolMenuHeading`,toolMenuHint:`msp-shell-canvas-toolMenuHint`,toolMenuLabel:`msp-shell-canvas-toolMenuLabel`,toolMenuRow:`msp-shell-canvas-toolMenuRow`,toolMenuScroll:`msp-shell-canvas-toolMenuScroll`,toolMenuScrollContent:`msp-shell-canvas-toolMenuScrollContent`,toolSubmenu:`msp-shell-canvas-toolSubmenu`,toolbar:`msp-shell-canvas-toolbar`,toolbarSlot:`msp-shell-canvas-toolbarSlot`},x(`views/shell/canvas.module.css`,`@layer msp.components {
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

  [data-right-panel="open"] & {
    animation: none;
  }

  [data-pinned] & {
    top: 0;
    right: calc(var(--msp-canvas-rail-inset, 52px) - var(--msp-canvas-edge));
    background: var(--msp-pinned-bg);
    --msp-surface: var(--msp-pinned-bg);
    -webkit-backdrop-filter: none;
    box-shadow: var(--msp-pinned-edge);
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
  max-height: calc(var(--msp-menu-room) - var(--msp-space-3));
  padding: var(--msp-space-2);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-glass-panel-bg);
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  flex-direction: column;
  display: flex;
}

.msp-shell-canvas-toolMenuScroll {
  flex: auto;
  min-height: 0;
}

.msp-shell-canvas-toolMenuScrollContent {
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

.msp-shell-canvas-toolMenuChevron {
  color: var(--msp-color-text-subtle);
}

.msp-shell-canvas-toolSubmenu {
  margin-right: var(--msp-space-2);
  animation: msp-shell-canvas-tool-menu-in var(--msp-motion-fast) var(--msp-ease);
  position: absolute;
  right: 100%;
}

.msp-shell-canvas-toolMenuHeading {
  padding: var(--msp-space-2) var(--msp-space-3) 0;
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
    grid-template-areas: "corner";
    position: relative;
  }

  .msp-shell-canvas-bottomGrid > .msp-shell-canvas-status {
    left: 0;
    right: 0;
    bottom: calc(100% + var(--msp-space-2));
    position: absolute;
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

.msp-shell-canvas-pill:not(:has(.msp-shell-canvas-pillButton:not([hidden]))) {
  padding-right: var(--msp-space-3);
}

.msp-shell-canvas-pillButton[hidden] {
  display: none;
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

:where([data-mode="compact"]) .msp-shell-canvas-card {
  left: var(--msp-canvas-edge);
  right: var(--msp-canvas-edge);
  width: auto;
}

.msp-shell-canvas-cardSlot {
  display: contents;
}

.msp-shell-canvas-cardDocked {
  contain: content;
  flex-direction: column;
  height: min(45cqh, 420px);
  min-height: 0;
  display: flex;
  overflow: hidden;
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

.msp-shell-canvas-bar, .msp-shell-canvas-folded {
  min-width: 0;
}
}
`)})))()}var Q;function Vt(){return(Vt=e((()=>{S(),Q={band:`msp-shell-dock-band`,barTab:`msp-shell-dock-barTab`,body:`msp-shell-dock-body`,bodyContent:`msp-shell-dock-bodyContent`,bottom:`msp-shell-dock-bottom`,collapsedBar:`msp-shell-dock-collapsedBar`,compact:`msp-shell-dock-compact`,content:`msp-shell-dock-content`,dock:`msp-shell-dock-dock`,floating:`msp-shell-dock-floating`,floatingBottom:`msp-shell-dock-floatingBottom`,floatingLeft:`msp-shell-dock-floatingLeft`,floatingRight:`msp-shell-dock-floatingRight`,floatingTop:`msp-shell-dock-floatingTop`,frameless:`msp-shell-dock-frameless`,header:`msp-shell-dock-header`,left:`msp-shell-dock-left`,pin:`msp-shell-dock-pin`,rail:`msp-shell-dock-rail`,"rail-menu-in":`msp-shell-dock-rail-menu-in`,railFoot:`msp-shell-dock-railFoot`,railMenu:`msp-shell-dock-railMenu`,railMenuRows:`msp-shell-dock-railMenuRows`,railMenuScroll:`msp-shell-dock-railMenuScroll`,right:`msp-shell-dock-right`,splitter:`msp-shell-dock-splitter`,strip:`msp-shell-dock-strip`,tab:`msp-shell-dock-tab`,title:`msp-shell-dock-title`,top:`msp-shell-dock-top`},x(`views/shell/dock.module.css`,`@layer msp.components {
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

  & .msp-shell-dock-splitter, &[data-covered] > .msp-shell-dock-content {
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
    --msp-surface: var(--msp-glass-panel-bg);
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
    box-shadow: none;
  }

  & .msp-shell-dock-header {
    height: max(var(--msp-rail-head, 40px), var(--msp-touch-target, 0px));
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
    box-shadow: none;
    border-radius: 0;
    position: relative;

    &:before {
      content: "";
      z-index: 1;
      background: var(--msp-glass-edge);
      pointer-events: none;
      width: 1px;
      position: absolute;
      inset: 0 auto 0 0;
    }
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

[data-pinned] {
  --msp-pinned-bg: var(--msp-color-panel);
  --msp-pinned-edge: -1px 0 0 var(--msp-glass-edge);
}

[data-pinned] > .msp-shell-dock-floatingRight {
  gap: 0;

  & .msp-shell-dock-content {
    background: var(--msp-pinned-bg);
    --msp-surface: var(--msp-pinned-bg);
    -webkit-backdrop-filter: none;
    box-shadow: var(--msp-pinned-edge);
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

.msp-shell-dock-floatingTop.msp-shell-dock-band, .msp-shell-dock-floatingBottom.msp-shell-dock-band {
  transition: opacity var(--msp-motion-base) var(--msp-ease);

  &[data-hidden] {
    opacity: 0;
  }
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
`)})))()}function Ht(e){return qt.find(t=>e>=t.min)??qt[qt.length-1]}function Ut(e,t){let n=Ht(t);if(t<=0)return{step:n,hidden:Jt};let r=(e,t)=>{let r=new Set(e.map(e=>e.section)),i=0;for(let t of e)i+=t.captioned?n.captioned:n.button;return t&&(i+=n.button,r.add(`more`)),i+Math.max(0,r.size-1)};if(r(e,!1)<=t)return{step:n,hidden:Jt};let i=e.map((e,t)=>({e,i:t})).sort((e,t)=>t.e.priority-e.e.priority||t.i-e.i).map(e=>e.e),a=new Set,o=e;for(let e of i)if(a.add(e.id),o=o.filter(t=>t!==e),r(o,!0)<=t)break;return{step:n,hidden:a}}function Wt(e){let t=[];for(let n of e){let e=n.group,r=t.find(t=>t.group===e);r?r.items.push(n):t.push({group:e,items:[n]})}return t.sort((e,t)=>e.group===void 0?-1:+(t.group===void 0))}function Gt(e,t){let n=(e,t)=>({id:`tab:${e.id}`,section:t,priority:e.priority,captioned:!1,kind:`tab`,tab:e}),r=(e,t)=>({id:`tool:${e.id}`,section:t,priority:e.priority,captioned:!!e.caption,kind:`tool`,item:e}),i=[];for(let t of e.filter(e=>e.place===`head`))i.push(n(t,`head`));for(let t of e.filter(e=>!e.place||e.place===`strip`))i.push(n(t,`strip`));let a=Wt(t);for(let e of a)if(e.group!==void 0)for(let t of e.items)i.push(r(t,`group:${e.group}`));for(let t of e.filter(e=>e.place===`foot`))i.push(n(t,`foot`));for(let e of a)if(e.group===void 0)for(let t of e.items)i.push(r(t,`lead`));return i.map((e,t)=>e.priority===void 0?{...e,priority:t}:e)}function Kt(e){let t=O([]),r=new Map,i=[],o=()=>t.set(i.filter(e=>!e.visible||r.get(e.visible)?.on===!0)),s=()=>{for(let e of r.values())e.stop();r.clear()};return c(e,e=>{i=e;let t=new Set;for(let n of e){let e=n.visible;if(!e||(t.add(e),r.has(e)))continue;let i={on:void 0,stop:()=>{}};r.set(e,i);let a=!0,s=e.subscribe(e=>{i.on=e,a||o()});a=!1,i.stop=()=>s.unsubscribe()}for(let[e,n]of r)t.has(e)||(n.stop(),r.delete(e));o()}),a(e=>{e||s()}),n(s),t.asReadonly}var qt,Jt,Yt,Xt,Zt;function Qt(){return(Qt=e((()=>{y(),z(),A(),T(),qt=[{name:`normal`,min:620,button:40,captioned:46},{name:`compact`,min:530,button:34,captioned:40},{name:`small`,min:0,button:30,captioned:36}],Jt=new Set,Yt=(e,t)=>e.size===t.size&&[...e].every(e=>t.has(e)),Xt=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]),Zt=class{constructor(e,t){this.height=O(0),this.menu=O(void 0);let n=Kt(w(e.toolbar,e=>e.filter(e=>e.place!==`canvas`)));this.entries=w([t.tabs,n],(e,t)=>Gt(e,t));let r=w([this.entries,this.height.asReadonly],(e,t)=>({entries:e,fit:Ut(e,t)}));this.hidden=w(r,e=>e.fit.hidden,Yt),this.overflow=w(r,e=>e.entries.filter(t=>e.fit.hidden.has(t.id)),Xt)}toggleMenu(e,t){let n=this.menu.value;if(n&&n.anchor===e)return this.menu.set(void 0);let r=this.#e?.parentElement,i=r?r.getBoundingClientRect().bottom-e.getBoundingClientRect().bottom:0;this.menu.set({bottom:i,anchor:e,...t?{item:t}:{}})}#e;observe(e){this.#e=e;let t=le(e,e=>{let t=Math.round(e[e.length-1].contentRect.height);t!==this.height.value&&this.height.set(t)});return()=>t?.disconnect()}}})))()}function $t(e){let t=f(`div`,{class:e.class,style:`display: contents`}),r=e.renderer.mount(t,e.ctx,v(`ViewHost`));return n(r),t}function en(){return(en=e((()=>{y(),g()})))()}function tn(e,t){let n=gn.get(t);if(n)return n;let r=w(t.state,e=>e,(e,t)=>e.size===t.size&&e.pinned===t.pinned&&e.floating===t.floating),i=w(r,e=>e.size),a=t.id===`right`?w([t.state,e.overlay],(e,t)=>t||e.collapsed?void 0:e.active):w(t.state,e=>e.collapsed?void 0:e.active);return n={size:i,sizePx:w(i,e=>`${e}px`),pinned:w(r,e=>e.pinned),floating:w(r,e=>e.floating),selected:je(a)},gn.set(t,n),n}function nn(e){let{shell:t,dock:i}=e,a=i.id===`top`||i.id===`bottom`,o=w(i.tabs,e=>e.length>0),s=w(t.mode,e=>e===`compact`&&i.id===`right`),c=w([t.overlay,s],(e,t)=>t?e:void 0),l=w([i.tabs,s],(e,t)=>t&&e.some(e=>e.compactBar)?e.filter(e=>e.compactBar):e),u=!a||w([i.tabs,i.active],(e,t)=>e.length>1&&!!t),d=Te(`msp-panel`),p;return f(I,{when:o,children:()=>{let o=tn(t,i).sizePx,h=m(`div`,{class:`${Q.dock} ${Q[i.id]}`,ref:e=>{p=e},children:[f(I,{when:i.active,reveal:!0,swap:()=>p,fallback:a?()=>f(ln,{shell:t,dock:i}):void 0,children:e=>f(mn,{shell:t,dock:i,tab:e,id:d,...i.id===`right`?{coveredBy:c}:{}})}),f(I,{when:s,children:()=>f(Fn,{shell:t})}),f(I,{when:u,children:()=>{let o,c=m(`div`,{class:Q.strip,children:[f(`div`,{role:`tablist`,"aria-label":`Panels`,style:`display: contents`,ref:e=>{o=e,n(_e(e))},children:f(L,{each:l,children:e=>f(fn,{shell:t,dock:i,tab:e,panel:d})})}),e.stripEnd]});return r([s],()=>W(o,`aria-orientation`,s.value||a?`horizontal`:`vertical`)),c}})]});return r([o,s,c],()=>{De(h,Q.compact,s.value),W(h,`data-covered`,!!c.value),U(h,`--msp-dock-size`,o.value)}),h}})}function rn(e){let{shell:t,dock:i}=e,a=tn(t,i).sizePx,o=new Zt(t,i),s=w([i.tabs,o.hidden],(e,t)=>t.size?e.filter(e=>!t.has(`tab:${e.id}`)):e),c=w(s,e=>e.filter(e=>e.place===`head`),D),l=w(s,e=>e.filter(e=>!e.place||e.place===`strip`),D),u=w(s,e=>e.filter(e=>e.place===`foot`),D),d=Te(`msp-panel`);if(i.id===`top`||i.id===`bottom`){let e=!1,n=w(i.active,t=>e=t?t.frame===`none`:e),o=f(`div`,{class:`${Q.floating} ${i.id===`top`?Q.floatingTop:Q.floatingBottom}`,children:f(I,{when:i.active,reveal:`fade`,children:e=>f(mn,{shell:t,dock:i,tab:e,id:d})})}),s=w(i.active,e=>!e);return r([n,a,s],()=>{De(o,Q.band,n.value),W(o,`data-hidden`,s.value),U(o,`--msp-dock-size`,a.value)}),o}let p=w(o.height.asReadonly,e=>`${(e>0?Ht(e):qt[0]).button}px`),h=m(`div`,{class:`${Q.floating} ${i.id===`left`?Q.floatingLeft:Q.floatingRight}`,children:[m(`div`,{class:`${Q.rail} ${Z.frame}`,ref:e=>{n(o.observe(e))},children:[e.railLead,f(I,{when:w(c,e=>e.length>0),children:()=>f(`div`,{class:Q.strip,role:`tablist`,"aria-orientation":`vertical`,"aria-label":`Home`,ref:e=>n(_e(e)),children:f(L,{each:c,children:e=>f(fn,{shell:t,dock:i,tab:e,panel:d})})})}),f(I,{when:w(l,e=>e.length>0),children:()=>f(`div`,{class:Q.strip,role:`tablist`,"aria-orientation":`vertical`,"aria-label":`Panels`,ref:e=>n(_e(e)),children:f(L,{each:l,children:e=>f(fn,{shell:t,dock:i,tab:e,panel:d})})})}),e.railItems?.(o),f(on,{shell:t,dock:i,rail:o,root:()=>h}),m(`div`,{class:Q.railFoot,children:[f(I,{when:w(u,e=>e.length>0),children:()=>f(`div`,{class:Q.strip,role:`tablist`,"aria-orientation":`vertical`,"aria-label":`More panels`,ref:e=>n(_e(e)),children:f(L,{each:u,children:e=>f(fn,{shell:t,dock:i,tab:e,panel:d})})})}),e.railFoot?.(o)]})]}),f(I,{when:i.active,reveal:`side`,swap:()=>h,children:e=>f(mn,{shell:t,dock:i,tab:e,id:d,pinnable:!0,coveredBy:t.overlay})}),f(sn,{shell:t,dock:i,rail:o})]});return r([a,p],()=>{U(h,`--msp-dock-size`,a.value),U(h,`--msp-rail-head`,p.value)}),h}function an(e,t,n){t.id===`right`&&e.overlay.value?(e.closeOverlay(),e.show(n.id)):e.select(n.id)}function on(e){let{rail:t}=e,i=t.menu,a=w(i.asReadonly,e=>!!e);return f(I,{when:w(t.overflow,e=>e.length>0),children:()=>{n(()=>i.set(void 0));let e=f(`button`,{type:`button`,class:Q.tab,"data-tip":`More`,"data-tip-side":`left`,"aria-label":`More`,"aria-haspopup":`menu`,onClick:e=>t.toggleMenu(e.currentTarget),onKeyDown:e=>{e.key!==`ArrowDown`&&e.key!==`ArrowUp`||i.value||(e.preventDefault(),e.currentTarget.click())},children:f(R,{name:`ellipsis`,size:20})});return r([a],()=>W(e,`aria-expanded`,String(a.value))),f(`nav`,{class:Q.strip,"aria-label":`More buttons`,children:e})}})}function sn(e){let{shell:t,dock:i,rail:a}=e,o=a.menu,s=w([o.asReadonly,a.overflow],(e,t)=>e&&(e.item?e.item.menu?.length:t.length>0)?e:void 0),c=(e,n)=>{if(o.set(void 0),e.tab)return an(t,i,e.tab);let r=e.item;r.overlay?t.toggleOverlay(r.overlay,n):r.run?.(n)};return B(document,`keydown`,e=>{if(e.key!==`Escape`||!o.value||!Ie(o.value.anchor,e))return;let t=o.value.anchor;o.set(void 0),t.focus(),e.preventDefault()}),B(document,`pointerdown`,e=>{let t=o.value;if(!t)return;let n=Fe(e);Ne(e,t.anchor)||n.closest?.(`.${Q.railMenu}`)||o.set(void 0)}),f(I,{when:s,children:e=>{let t=Ce(()=>e.anchor),i;n(()=>t(i));let s=e.item?yn(e.item):void 0,l=f(`div`,{class:Z.toolMenuCard,role:`menu`,"aria-label":e.item?bn(e.item):`More`,onKeyDown:xe,ref:e=>{i=e,queueMicrotask(()=>be(e))},children:f(H,{class:Q.railMenuScroll,contentClass:Q.railMenuRows,children:e.item?f(En,{items:e.item.menu,onRun:()=>o.set(void 0)}):f(L,{each:a.overflow,by:e=>e.id,children:t=>f(cn,{entry:t,onRun:()=>c(t,e.anchor)})})})});return s&&r([s],()=>W(l,`aria-label`,s.value.title)),f(`div`,{class:Q.railMenu,style:{bottom:`${e.bottom}px`},children:l})}})}function cn(e){let{entry:t}=e,n=t.item?yn(t.item):void 0,i=document.createTextNode(t.tab?t.tab.title:n?n.value.title:bn(t.item));return n&&r([n],()=>G(i,n.value.title)),m(`button`,{type:`button`,role:`menuitem`,class:Z.toolMenuRow,onClick:()=>e.onRun(),children:[t.tab?f(R,{name:t.tab.icon,size:16}):f(xn,{item:t.item,size:16,...n?{face:n}:{}}),f(`span`,{class:Z.toolMenuLabel,children:i}),f(`span`,{})]})}function ln(e){let{shell:t,dock:n}=e;return f(`div`,{class:Q.collapsedBar,children:f(L,{each:n.tabs,children:e=>m(`button`,{type:`button`,class:Q.barTab,onClick:()=>t.show(e.id),title:`Show ${e.title}`,children:[f(R,{name:n.id===`top`?`chevron-down`:`chevron-up`,size:14}),e.title]})})})}function un(e,t){return[{id:`hide`,label:`Hide ${t.title}`,icon:`eye-off`,run:()=>e.hideTab(t.id)},...e.hiddenTabs.value.map(t=>({id:`show:${t.id}`,label:`Show ${t.title}`,icon:`eye`,run:()=>e.showTab(t.id)})),{id:`reset`,label:`Reset layout`,icon:`rotate-ccw`,run:()=>e.resetLayout()}]}function dn(e,t,n,r){let i=n.closest(`.msp-root`)??document.body,a=n.getBoundingClientRect();Ue(i,r??{x:a.left,y:a.bottom},un(e,t))}function fn(e){let{shell:t,dock:n,tab:i}=e,a=tn(t,n).selected.key(i.id),o=f(`button`,{type:`button`,role:`tab`,class:Q.tab,"data-tip":i.title,"data-tip-side":`left`,"aria-label":i.title,"aria-controls":e.panel,"data-tab":i.id,onClick:()=>an(t,n,i),onContextMenu:e=>{e.preventDefault(),dn(t,i,e.currentTarget,{x:e.clientX,y:e.clientY})},onKeyDown:e=>{(e.key===`ContextMenu`||e.shiftKey&&e.key===`F10`)&&(e.preventDefault(),dn(t,i,e.currentTarget))},children:f(R,{name:i.icon,size:20})});return r([a],()=>W(o,`aria-selected`,String(a.value))),o}function pn(e){let{shell:t}=e,n=t.dock(e.dock),r=w([t.mode,t.compactRail],(e,t)=>!t&&e!==`embedded`&&e!==`compact`);return f(I,{when:r,children:()=>f(K,{variant:`ghost`,size:`sm`,class:Q.pin,icon:f(R,{name:`pin`}),title:`Pin beside the canvas`,pressed:tn(t,n).pinned,onClick:()=>t.setPinned(e.dock,!n.state.value.pinned)})})}function mn(e){let{shell:t,dock:r,tab:i}=e,a=!e.coveredBy||w(e.coveredBy,e=>!e),o,s=!1,c=e=>{let t=e.relatedTarget;if(t){s=!!o?.contains(t);return}let n=Fe(e);queueMicrotask(()=>{let e=we();e&&o?.contains(e)||n.isConnected&&!n.closest(`[inert]`)&&(s=!1)})};return n(()=>{if(!s)return;let e=we();if(e&&!o?.contains(e))return;let t=o?.closest(`.msp-root`)??o?.getRootNode();(t?[...t.querySelectorAll(`[role="tab"]`)]:[]).find(e=>e.dataset.tab===i.id)?.focus({preventScroll:!0})}),ae(a,()=>m(`section`,{class:i.frame===`none`?`${Q.content} ${Q.frameless}`:Q.content,role:`tabpanel`,id:e.id,"aria-label":i.title,"data-msp-scope":`panel:${i.id}`,ref:e=>{o=e},onFocusIn:()=>{s=!0},onFocusOut:c,children:[f(hn,{shell:t,dock:r}),m(`header`,{class:Q.header,children:[f(`h2`,{class:Q.title,children:typeof i.heading==`function`?i.heading():i.heading??i.title}),e.pinnable?f(pn,{shell:t,dock:r.id}):null,f(K,{variant:`ghost`,size:`sm`,icon:f(R,{name:`x`}),title:`Close panel`,onClick:()=>t.toggle(r.id)})]}),f(H,{class:Q.body,contentClass:Q.bodyContent,children:f(I,{when:w(t.tabFocus,e=>({section:e?.tab===i.id?e.section:void 0}),(e,t)=>e.section===t.section&&!t.section),children:e=>f($t,{renderer:i.render,ctx:{shell:t,dock:r.id,...e.section?{focus:e.section}:{}}})})})]}))}function hn(e){let{shell:t,dock:n}=e,i=n.id===`left`?1:-1,a=b(-1);c(a,e=>{e>=0&&t.setSize(n.id,e)});let o,s=tn(t,n).size,l=f(`div`,{class:Q.splitter,role:`separator`,"aria-orientation":`vertical`,tabIndex:0,"aria-label":`Panel width`,onKeyDown:e=>{if(e.key!==`ArrowLeft`&&e.key!==`ArrowRight`)return;e.preventDefault();let r=(e.shiftKey?64:16)*(e.key===`ArrowRight`?1:-1);t.setSize(n.id,n.state.value.size+i*r)},onPointerEnter:e=>e.currentTarget.setAttribute(`data-active`,``),onPointerLeave:e=>{o?.active||e.currentTarget.removeAttribute(`data-active`)},ref:e=>{o=ue(e,{start:t=>(e.setAttribute(`data-active`,``),{x:t.clientX,size:n.state.value.size}),move:(e,t)=>a.offer(t.size+i*(e.clientX-t.x)),end:(t,n,r)=>{if(n===`up`&&r){let t=e.getBoundingClientRect();if(r.clientX>=t.left&&r.clientX<=t.right&&r.clientY>=t.top&&r.clientY<=t.bottom)return}e.removeAttribute(`data-active`)}})},onDblClick:()=>t.setSize(n.id,n.id===`left`?300:340)});return r([s],()=>W(l,`aria-valuenow`,Math.round(s.value))),l}var gn;function _n(){return(_n=e((()=>{He(),We(),oe(),V(),F(),ge(),y(),z(),Me(),k(),T(),Bt(),Vt(),Xn(),Qt(),en(),g(),gn=new WeakMap})))()}function vn(e,t){let r=i(e);if(!r)return O(e).asReadonly;if(ee(r))return r;let a=C(r,t);return n(()=>a.dispose()),a}function yn(e){return e.face?vn(e.face,{icon:e.icon,title:e.title}):void 0}function bn(e){return e.caption?`${e.title} (${e.caption})`:e.title}function xn(e){let{item:t}=e,n=e.face??yn(t);if(!n)return f(R,{name:t.icon,size:e.size});let i,a=f(`span`,{class:e.class});return r([n],()=>{let t=n.value.icon;t!==i&&(i=t,a.replaceChildren(R({name:t,size:e.size})))}),a}function Sn(e){let{shell:t}=e,n=e.part??`all`,r=n===`canvas`,i=e.hidden?w([t.toolbar,e.hidden],(e,t)=>t.size?e.filter(e=>!t.has(`tool:${e.id}`)):e):t.toolbar,a=w(i,e=>{let t=Wt(e.filter(e=>e.place===`canvas`===r));return n===`all`||r?t:t.filter(e=>n===`lead`?e.group===void 0:e.group!==void 0)});return f(`div`,{class:Z.sections,children:f(L,{each:a,by:e=>e.group,children:n=>f(`div`,{class:Z.toolbar,role:`toolbar`,"aria-orientation":e.menus?`horizontal`:`vertical`,"aria-label":n.group??`commands`,children:n.items.map(n=>n.visible?f(I,{when:n.visible,children:()=>f(wn,{shell:t,item:n,menus:e.menus,railMenu:e.railMenu})}):f(wn,{shell:t,item:n,menus:e.menus,railMenu:e.railMenu}))})})})}function Cn(e,t){let n=vn(t.pressed??!1,!1),r=t.overlay;return r?w([e.overlay,n],(e,t)=>e?.overlay.id===r||t):n}function wn(e){let{shell:t,item:n,menus:i}=e,a=!i&&n.menu?.length?e.railMenu:void 0,o=i&&n.menu?.length?i:void 0,s=n.pressed||n.overlay?Cn(t,n):void 0,c=yn(n),l=c?void 0:bn(n),u=o?.shown.key(n),d=m(`button`,{type:`button`,class:Z.tool,"data-captioned":n.caption?``:void 0,"data-tip":o?void 0:l,"data-tip-side":n.place===`canvas`?`top`:`left`,"aria-label":l,"aria-haspopup":o||a?`menu`:void 0,"data-overlay-trigger":n.overlay?``:void 0,"data-keeps-card":n.keepsCard?``:void 0,onClick:e=>{if(o&&!n.overlay&&!n.run)return o.show(n,e.currentTarget,e.detail===0);if(o&&Wn())return o.open.value?.item===n?o.hide():o.show(n,e.currentTarget,e.detail===0);if(a)return a(n,e.currentTarget);o?.hide(),n.overlay?t.toggleOverlay(n.overlay,e.currentTarget):n.run?.(e.currentTarget)},onKeyDown:o?e=>{(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),o.show(n,e.currentTarget,!0))}:void 0,onPointerEnter:o?e=>e.pointerType===`mouse`&&o.show(n,e.currentTarget):void 0,onPointerLeave:o?()=>o.hideSoon():void 0,onBlur:o?()=>o.hideSoon():void 0,children:[f(xn,{item:n,size:n.caption?16:20,class:Z.face,...c?{face:c}:{}}),n.caption?f(`span`,{class:Z.caption,children:n.caption}):null,o?f(`span`,{class:Z.menuMark,"aria-hidden":`true`}):null]}),p=[];return c&&p.push(c),s&&p.push(s),u&&p.push(u),p.length&&r(p,()=>{c&&(W(d,`aria-label`,c.value.title),o||W(d,`data-tip`,c.value.title)),s&&W(d,`aria-pressed`,String(s.value)),u&&W(d,`aria-expanded`,String(u.value))}),d}function Tn(e,t){let n=e.menu??[];return!e.run||!Wn()?n:[{id:`${e.id}:self`,label:e.title,icon:e.icon,group:``,run:()=>e.run?.(t)},...n]}function En(e){let{onSubmenu:t}=e;return f(l,{children:e.items.map((n,r,i)=>m(l,{children:[r>0&&n.group!==i[r-1].group?f(`div`,{class:Z.toolMenuDivider,role:`separator`}):null,n.items&&!t?m(l,{children:[f(`div`,{class:Z.toolMenuHeading,role:`presentation`,children:n.label}),f(I,{when:n.items,children:t=>f(En,{items:t,onRun:e.onRun})})]}):n.items&&t?m(`button`,{type:`button`,role:`menuitem`,"aria-haspopup":`menu`,class:Z.toolMenuRow,disabled:!!n.disabled,onPointerEnter:e=>t(n,e.currentTarget),onClick:e=>t(n,e.currentTarget,!0),onKeyDown:e=>{e.key===`ArrowRight`&&(e.preventDefault(),t(n,e.currentTarget,!0))},children:[n.icon?f(R,{name:n.icon,size:16}):f(`span`,{}),m(`span`,{class:Z.toolMenuLabel,children:[n.label,n.disabled||n.hint?f(`span`,{class:Z.toolMenuHint,children:n.disabled??n.hint}):null]}),f(R,{name:`chevron-right`,size:14,class:Z.toolMenuChevron})]}):m(`button`,{type:`button`,role:n.pressed?n.choice?`menuitemradio`:`menuitemcheckbox`:`menuitem`,"aria-checked":n.pressed,class:Z.toolMenuRow,disabled:!!n.disabled,onPointerEnter:t?()=>t(void 0):void 0,onClick:()=>{e.onRun(),n.run()},children:[n.icon?f(R,{name:n.icon,size:16}):f(`span`,{}),m(`span`,{class:Z.toolMenuLabel,children:[n.label,n.disabled||n.hint?f(`span`,{class:Z.toolMenuHint,children:n.disabled??n.hint}):null]}),n.pressed?f(I,{when:n.pressed,children:()=>f(R,{name:`check`,size:14,class:Z.toolMenuCheck})}):null]})]}))})}function Dn(e,t,n){let r=t.pressed||t.overlay?Cn(e,t):void 0,i=()=>{t.overlay?e.toggleOverlay(t.overlay,n()):t.run?.(n())},a={id:t.id,label:t.title,icon:t.icon,group:t.group??``},o=t.menu??[];if(!o.length)return{...a,...r?{pressed:r}:{},run:i};let s=(t.run||t.overlay)&&!o.some(e=>e.label===t.title)?[{id:`${t.id}:self`,label:t.title,icon:t.icon,group:``,...r?{pressed:r}:{},run:i}]:[];return{...a,run:()=>{},items:O([...s,...o]).asReadonly}}function On(e,t,n){let r=v(`collapsedRows`),i=new Map,a=t=>{let a=i.get(t);if(!a){let s=r.child();i.set(t,a={row:o(s,()=>Dn(e,t,n)),scope:s})}return a.row},s=Kt(w(e.toolbar,e=>Wt(e.filter(e=>e.place===`canvas`)).flatMap(e=>e.items)));return w([vn(t??[],[]),s],(e,t)=>{let n=[...e.map(e=>({...e,group:e.group??`lead`})),...t.map(a)];if(i.size>t.length){let e=new Set(t);for(let[t,n]of i)e.has(t)||(n.scope.dispose(),i.delete(t))}return n})}function kn(e){let{shell:t}=e,i=new qn,a,o,s={rows:On(t,e.leadMenu,()=>o??a)},l=t.toolbarCollapsed,u=ae(w(l,e=>!e),()=>m(`div`,{class:Z.bar,children:[f(`div`,{class:Z.frame,children:m(H,{axis:`x`,contentClass:Z.stackTools,children:[e.lead,f(Sn,{shell:t,part:`canvas`,menus:i})]})}),e.aside]})),d=w(s.rows,e=>e.length>0),p=e.quiet===void 0?void 0:vn(e.quiet,!1),h=m(`div`,{class:Z.stack,children:[u,f(I,{when:l,children:()=>f(I,{when:d,children:()=>f(`div`,{class:`${Z.frame} ${Z.folded}`,children:f(An,{menus:i,popup:s,ref:e=>{o=e}})})})}),f(jn,{menus:i})]});return a=h,r(p?[l,p]:[l],()=>{W(u,`hidden`,l.value),p&&W(h,`data-quiet`,p.value)}),c(l,()=>i.hide()),i.stack=h,n(()=>i.dispose()),h}function An(e){let{menus:t,popup:n}=e,i=t.shown.key(Gn),a=m(`button`,{type:`button`,class:Z.tool,"data-stack-collapsed":``,"aria-label":`Toolbar`,"aria-haspopup":`menu`,ref:e.ref,onClick:e=>{if(Wn()&&t.open.value?.item===Gn)return t.hide();t.show(Gn,e.currentTarget,e.detail===0,n)},onKeyDown:e=>{(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),t.show(Gn,e.currentTarget,!0,n))},onPointerEnter:e=>e.pointerType===`mouse`&&t.show(Gn,e.currentTarget,!1,n),onPointerLeave:()=>t.hideSoon(),onBlur:()=>t.hideSoon(),children:[f(R,{name:`wrench`,size:18}),f(`span`,{class:Z.menuMark,"aria-hidden":`true`})]});return r([i],()=>W(a,`aria-expanded`,String(i.value))),a}function jn(e){let{menus:t}=e;return B(document,`keydown`,e=>{e.key===`Escape`&&!e.defaultPrevented&&t.open.value&&(!t.stack||Ie(t.stack,e))&&(t.hide(),e.preventDefault())}),B(document,`pointerdown`,e=>{let n=t.open.value;if(!n)return;let r=e.composedPath();t.menu&&r.includes(t.menu)||r.includes(n.button)||t.hide()},{capture:!0}),f(I,{when:t.open,children:e=>{let r=!1,i;n(()=>{if(t.menu===i&&(t.menu=void 0),!r)return;let n=we();(!n||i?.contains(n))&&e.button.focus({preventScroll:!0})});let a=O(void 0),o,s=(e,n,r=!1)=>{if(!e||!n||!i){a.value&&a.set(void 0);return}let s=n.getBoundingClientRect().bottom,c=Math.round(i.getBoundingClientRect().bottom-s),l=t.roomAbove(t.stack,s);(a.value?.item!==e||a.value.bottom!==c||a.value.room!==l)&&a.set({item:e,row:n,bottom:c,room:l}),r&&queueMicrotask(()=>o&&be(o))},c=e=>{if(e.key===`ArrowLeft`||e.key===`Escape`){e.preventDefault();let t=a.value?.row;a.set(void 0),t?.focus({preventScroll:!0})}else xe(e)};return m(`div`,{class:Z.toolMenu,style:{right:`${e.right}px`,...e.room?{"--msp-menu-room":`${e.room}px`}:{}},role:`menu`,"aria-label":e.item.title,ref:e=>{i=e,t.menu=e},onPointerEnter:()=>t.keep(),onPointerLeave:()=>t.hideSoon(),onFocusIn:()=>{r=!0,t.keep()},onFocusOut:()=>t.hideSoon(),children:[f(`div`,{class:Z.toolMenuCard,onKeyDown:xe,children:e.popup?f(l,{children:f(I,{when:e.popup.rows,children:e=>f(H,{class:Z.toolMenuScroll,contentClass:Z.toolMenuScrollContent,children:f(En,{items:e,onRun:()=>t.hide(),onSubmenu:s})})})}):f(H,{class:Z.toolMenuScroll,contentClass:Z.toolMenuScrollContent,children:f(En,{items:Tn(e.item,e.button),onRun:()=>t.hide(),onSubmenu:s})})}),f(I,{when:a,children:e=>f(`div`,{class:Z.toolSubmenu,style:{bottom:`${e.bottom}px`,...e.room?{"--msp-menu-room":`${e.room}px`}:{}},role:`menu`,"aria-label":e.item.label,ref:e=>{o=e},onKeyDown:c,children:f(`div`,{class:Z.toolMenuCard,children:f(H,{class:Z.toolMenuScroll,contentClass:Z.toolMenuScrollContent,children:f(I,{when:e.item.items,children:e=>f(En,{items:e,onRun:()=>t.hide()})})})})})})]})}})}function Mn(e){let{shell:t}=e,i=O(!1),a=t.dock(`right`),o=w(t.toolbar,e=>e.filter(e=>e.place!==`canvas`&&!e.group)),s=w(t.toolbar,e=>e.filter(e=>e.place!==`canvas`&&e.group)),c=w(a.tabs,e=>e.some(e=>e.compactBar)?e.filter(e=>!e.compactBar):[]),l,u=(e,n)=>{i.set(!1),e.overlay?t.toggleOverlay(e.overlay,n):e.run?.(n)},d,p=m(`div`,{class:Z.railMenu,children:[f(L,{each:o,by:e=>e.id,children:e=>{let t=yn(e),n=t?void 0:bn(e),i=f(`button`,{type:`button`,class:Z.railMenuButton,"aria-label":n,"data-tip":n,onClick:t=>u(e,t.currentTarget),children:f(xn,{item:e,size:20,class:Z.face,...t?{face:t}:{}})});return t&&r([t],()=>{W(i,`aria-label`,t.value.title),W(i,`data-tip`,t.value.title)}),i}}),m(`div`,{class:Z.railMenuAnchor,children:[f(`button`,{type:`button`,class:Z.railMenuButton,"aria-label":`More`,"aria-haspopup":`menu`,"data-tip":`More`,ref:e=>d=e,onClick:e=>{i.set(!i.value),i.value&&e.detail===0&&queueMicrotask(()=>l&&be(l))},onKeyDown:e=>{(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),i.set(!0),queueMicrotask(()=>l&&be(l)))},children:f(R,{name:`ellipsis`,size:20})}),f(I,{when:i,children:()=>{let e=Ce();return n(()=>e(l)),m(`div`,{class:Z.railMenuList,role:`menu`,"aria-label":`More`,ref:e=>{l=e},onKeyDown:e=>{xe(e),e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),i.set(!1))},children:[f(L,{each:c,by:e=>e.id,children:e=>m(`button`,{type:`button`,role:`menuitem`,class:Z.toolMenuRow,onClick:()=>{i.set(!1),t.show(e.id)},children:[f(R,{name:e.icon,size:16}),f(`span`,{class:Z.toolMenuLabel,children:e.title}),f(`span`,{})]})}),f(I,{when:w([c,s],(e,t)=>e.length>0&&t.length>0),children:()=>f(`div`,{class:Z.railMenuDivider})}),f(L,{each:s,by:e=>e.id,children:e=>{let t=yn(e),n=e.visible?vn(e.visible,!0):void 0,i=document.createTextNode(t?t.value.title:bn(e)),a=m(`button`,{type:`button`,role:`menuitem`,class:Z.toolMenuRow,onClick:t=>u(e,t.currentTarget),children:[f(xn,{item:e,size:16,class:Z.face,...t?{face:t}:{}}),f(`span`,{class:Z.toolMenuLabel,children:i}),f(`span`,{})]}),o=[];return t&&o.push(t),n&&o.push(n),o.length&&r(o,()=>{t&&G(i,t.value.title),n&&W(a,`hidden`,!n.value)}),a}})]})}})]})]});return r([i.asReadonly],()=>W(d,`aria-expanded`,String(i.value))),B(document,`pointerdown`,e=>{i.value&&!Ne(e,p)&&i.set(!1)}),p}function Nn(e){let t=w(e.status.tasks,e=>e.find(e=>e.overlay),(e,t)=>e?.id===t?.id);return f(I,{when:t,children:t=>{let n=w(e.status.tasks,e=>e.find(e=>e.id===t.id)??t),i=w(n,e=>e.progress===void 0?void 0:Math.round(e.progress*100)),a=document.createTextNode(``),o=document.createTextNode(``),s,c,l=f(`div`,{class:Z.busy,role:`alertdialog`,"aria-modal":`true`,"aria-label":t.label,children:m(`div`,{class:Z.busyCard,children:[m(`div`,{class:Z.busyHead,children:[f(R,{name:`loader-circle`,size:18,class:Z.busySpin}),f(`span`,{class:Z.busyLabel,children:a}),f(`span`,{class:Z.busyPercent,children:o})]}),f(`div`,{class:Z.busyTrack,role:`progressbar`,"aria-valuemin":0,"aria-valuemax":100,ref:e=>s=e,children:f(`span`,{class:Z.busyBar,ref:e=>c=e})}),t.abort?f(`div`,{class:Z.busyActions,children:f(K,{size:`sm`,onClick:()=>t.abort?.(),children:`Cancel`})}):null]})});return r([n,i],()=>{let e=i.value;G(a,n.value.label),G(o,e===void 0?``:`${e}%`),W(s,`aria-valuenow`,e),W(c,`data-indeterminate`,e===void 0),U(c,`scale`,`${(e??30)/100} 1`)}),l}})}function Pn(e){let t=Jn.get(e);return t||Jn.set(e,t=O(void 0,{compare:Object.is})),t}function Fn(e){let t=Pn(e.shell),r=f(`div`,{class:Z.cardSlot});return t.set(r),n(()=>{t.value===r&&t.set(void 0)}),r}function In(e){let{shell:t}=e,n=w(t.overlay,e=>!!e);return f(I,{when:n,children:()=>f(Ln,{shell:t})})}function Ln(e){let{shell:t}=e,i=t.overlay.value.anchor,a=Ce(()=>i),o=Te(`msp-card-title`),s=w(t.dock(`right`).state,e=>e.pinned),c=document.createTextNode(``),l,u=Pn(t),d=()=>!!u.value,p=m(`section`,{class:Z.card,role:`dialog`,"aria-labelledby":o,onKeyDown:e=>{_()||ye(e,e.currentTarget)},children:[m(`header`,{class:Z.cardHeader,children:[f(`h2`,{class:Z.cardTitle,id:o,children:c}),f(pn,{shell:t,dock:`right`}),f(K,{variant:`ghost`,size:`sm`,icon:f(R,{name:`x`}),title:`Close`,onClick:()=>t.closeOverlay()})]}),f(I,{when:t.overlay,children:e=>{i=e.anchor,ve(e.anchor)&&(l?.(),l=ce(()=>{l=void 0;let e=p.querySelector(`.${Z.cardBody}, .${Z.cardBodyFill}`),t=Se(p);(t.find(t=>e?.contains(t))??t[t.length-1])?.focus()}));let n={shell:t,...e.focus?{focus:e.focus}:{}};return e.overlay.fill?f(`div`,{class:Z.cardBodyFill,children:f($t,{renderer:e.overlay.render,ctx:n})}):f(H,{class:Z.cardBody,contentClass:Z.cardBodyContent,children:f($t,{renderer:e.overlay.render,ctx:n})})}})]}),h=f(`div`,{style:`display: contents`,children:p});r([u.asReadonly],()=>{let e=u.value??h;if(p.parentElement===e)return;let t=we(),n=t&&p.contains(t)?t:void 0;e.append(p),De(p,Z.card,!u.value),De(p,Z.cardDocked,!!u.value),n?.focus({preventScroll:!0})}),n(()=>p.remove()),r([s,u.asReadonly,t.overlay],()=>{W(p,`aria-modal`,String(!u.value&&!s.value)),G(c,t.overlay.value?.overlay.title??``)});let g=()=>t.dock(`right`).state.value.pinned,_=()=>d()||g(),v=document;return B(v,`keydown`,e=>{e.key!==`Escape`||e.defaultPrevented||g()||!Ie(p,e)||(t.closeOverlay(),e.preventDefault())}),B(v,`pointerdown`,e=>{let n=t.overlay.value;if(!n)return;let r=Fe(e);g()||n.overlay.persistent||Ne(e,p)||Ne(e,n.anchor)||r.closest?.(`[data-overlay-trigger], [role=tab]`)||r.closest?.(`[data-keeps-card], [data-msp-canvas]`)||t.closeOverlay()},{capture:!0}),n(()=>a(p)),h}function Rn(e){let{status:t}=e,n=n=>{t.setLogFilter(n===`error`?`problems`:`all`),e.onOpenLog?.()},i=document.createTextNode(``);return r([t.spoken],()=>G(i,t.spoken.value)),m(`div`,{class:Z.status,children:[f(`div`,{class:Z.announce,role:`status`,"aria-live":`polite`,children:i}),f(I,{when:t.current,children:e=>e.kind===`error`?m(`span`,{class:`${Z.pill} ${Z.message}`,"data-kind":e.kind,children:[m(`button`,{type:`button`,class:Z.pillMain,title:`Show the problems in the log`,onClick:()=>n(e.kind),children:[f(R,{name:Yn[e.kind],size:14}),f(`span`,{class:Z.text,children:e.text})]}),f(`button`,{type:`button`,class:Z.pillButton,"aria-label":`Dismiss`,"data-tip":`Dismiss`,onClick:()=>t.dismiss(e.id),children:f(R,{name:`x`,size:14})})]}):m(`button`,{type:`button`,class:`${Z.pill} ${Z.message}`,"data-kind":e.kind,title:`Show the log`,onClick:()=>n(e.kind),children:[f(R,{name:Yn[e.kind],size:14}),f(`span`,{class:Z.text,children:e.text})]})}),f(Vn,{status:t}),e.after]})}function zn(e){let t,r=0,i=0,a=!1,o=O(void 0),s=()=>{t&&clearTimeout(t),t=void 0},u=()=>{s(),!(a||r<=0)&&(i=performance.now(),t=setTimeout(()=>e.onDismiss?.(),r))},d=e=>{e!==a&&(a=e,e&&t&&(r-=performance.now()-i),e?s():u())};e.autoDismiss&&e.onDismiss&&(c(e.autoDismiss,e=>{s(),r=e??0,o.set(e),u()}),n(s));let p=m(l,{children:[e.icon,f(`span`,{class:Z.text,children:e.text}),e.after]});return m(`span`,{class:Z.pill,onPointerEnter:()=>d(!0),onPointerLeave:()=>d(!1),onFocusIn:()=>d(!0),onFocusOut:e=>{e.currentTarget.contains(e.relatedTarget)||d(!1)},children:[e.onClick?f(`button`,{type:`button`,class:Z.pillMain,"aria-label":e.label,onClick:()=>e.onClick?.(),children:p}):p,e.onDismiss?m(`button`,{type:`button`,class:Z.pillButton,"aria-label":e.dismissLabel??`Dismiss`,"data-tip":e.dismissLabel??`Dismiss`,onClick:()=>e.onDismiss?.(),children:[f(R,{name:`x`,size:14}),f(I,{when:o.asReadonly,children:e=>f(`svg`,{class:Z.countdown,viewBox:`0 0 20 20`,"aria-hidden":`true`,style:{"--msp-countdown":`${e}ms`},children:f(`circle`,{cx:`10`,cy:`10`,r:`9`,pathLength:`100`})})})]}):null]})}function Bn(e){return m(`div`,{class:Z.context,children:[e.lead,f(L,{each:e.status.chips,children:e=>m(`span`,{class:`${Z.pill} ${Z.chip}`,children:[f(`button`,{type:`button`,class:Z.text,onClick:()=>e.activate?.(),children:e.label}),e.dismiss?f(`button`,{type:`button`,class:Z.pillButton,title:`Clear`,onClick:()=>e.dismiss?.(),children:f(R,{name:`x`,size:14})}):null]})})]})}function Vn(e){let{status:t}=e;return f(L,{each:t.lineTaskIds,children:e=>f(Hn,{task:t.lineTask(e)})})}function Hn(e){let{task:t}=e,n=document.createTextNode(``),i=f(`div`,{}),a=f(`span`,{class:Z.progress,children:i}),o=f(`button`,{type:`button`,class:Z.pillButton,title:`Cancel`,onClick:()=>t.value?.abort?.(),children:f(R,{name:`x`,size:14})}),s=m(`span`,{class:Z.pill,children:[f(R,{name:`loader-circle`,size:14,class:Z.spin}),f(`span`,{class:Z.text,children:n}),a,o]});return r([t],()=>{let e=t.value;e&&(G(n,e.label),Ee(a,e.progress!==void 0),U(i,`width`,`${Math.round((e.progress??0)*100)}%`),W(o,`hidden`,!e.abort))}),s}function Un(e){let{shell:t}=e,n=w(t.dock(`right`).tabs,e=>e.find(e=>e.place===`head`)?.icon??`prism`),i,a,o=f(`div`,{class:`${Z.stack} ${Z.railToggle}`,children:f(`div`,{class:Z.frame,children:f(`button`,{type:`button`,class:Z.tool,"data-tip-side":`top`,ref:e=>i=e,onClick:()=>t.toggleRail(),children:f(`span`,{class:Z.face,ref:e=>a=e})})})}),s;return r([n,t.railOpen],()=>{let e=t.railOpen.value,r=e?`Hide the panel rail`:`Show the panel rail`;W(i,`data-tip`,r),W(i,`aria-label`,r),W(i,`aria-pressed`,String(e)),n.value!==s&&(s=n.value,a.replaceChildren(R({name:s,size:18})))}),o}var Wn,Gn,Kn,qn,Jn,Yn;function Xn(){return(Xn=e((()=>{He(),oe(),V(),F(),ge(),y(),z(),Me(),A(),T(),Bt(),_n(),Qt(),en(),g(),Wn=()=>typeof matchMedia==`function`&&matchMedia(`(hover: none)`).matches,Gn={id:`toolbar`,place:`canvas`,icon:`wrench`,title:`Toolbar`},Kn=8,qn=class{constructor(){this.open=O(void 0),this.shown=je(w(this.open.asReadonly,e=>e?.item))}#e;show(e,t,n=!1,r){this.keep();let i=this.stack?this.stack.getBoundingClientRect().right-t.getBoundingClientRect().right:0,a=this.roomAbove(this.stack),o=this.open.value;(o?.item!==e||o.right!==i||o.room!==a)&&this.open.set({item:e,right:i,room:a,button:t,...r?{popup:r}:{}}),n&&queueMicrotask(()=>this.menu&&be(this.menu))}roomAbove(e,t){if(!e)return 0;let n=e.closest(`[data-msp-viewport]`),r=(t??e.getBoundingClientRect().top)-(n?.getBoundingClientRect().top??0)-Kn;return r>0?Math.round(r):0}keep(){this.#e!==void 0&&clearTimeout(this.#e),this.#e=void 0}hideSoon(){this.keep(),this.#e=setTimeout(()=>this.hide(),160)}hide(){this.keep(),this.open.value&&this.open.set(void 0)}dispose(){this.keep()}},Jn=new WeakMap,Yn={info:`info`,success:`circle-check`,warning:`triangle-alert`,error:`circle-alert`}})))()}function Zn(e){let t=e.status.logFilter,n=O(``),r=w(e.status.logSources,e=>[{id:`all`,label:`All`,icon:`list`},{id:`messages`,label:`Messages`,icon:`info`},...e.map(e=>({id:`source:${e}`,label:e,icon:er[e]??`tag`})),{id:`problems`,label:`Problems`,icon:`triangle-alert`}]),i=w([e.status.logged,t,n.asReadonly],(e,t,n)=>{let r=n.trim().toLowerCase();return t===`all`&&!r?e:e.filter(e=>tr(e,t,r))}),a=w([i,e.status.logged],(e,t)=>e.length?void 0:t.length?`Nothing matches.`:`No messages yet.`);return m(`div`,{class:X.log,children:[m(`div`,{class:X.filters,children:[f(`div`,{class:X.kinds,role:`group`,"aria-label":`Show`,children:f(L,{each:r,by:e=>e.id,children:n=>f(K,{variant:`ghost`,size:`sm`,icon:f(R,{name:n.icon,size:15}),title:n.label,pressed:w(t,e=>e===n.id),onClick:()=>e.status.setLogFilter(n.id)})})}),f(Ve,{search:!0,size:`sm`,class:X.search,placeholder:`Filter`,"aria-label":`Filter the log`,value:n.asReadonly,onInput:e=>n.set(e)})]}),f(I,{when:a,children:e=>f(`p`,{class:X.empty,children:e})}),f(It,{items:i,itemKey:e=>e.id,rowHeight:30,class:X.entries,edge:!0,role:`log`,"aria-label":`Log`,contentRef:e=>e.setAttribute(`aria-live`,`off`),slot:Qn})]})}function Qn(){let e=new Map,t=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`),n=document.createTextNode(``),r=document.createTextNode(``),i=document.createTextNode(``),a=f(`time`,{class:X.time,children:i}),o=m(`div`,{class:X.entry,children:[t,f(`span`,{class:X.text,"data-tip-overflow":``,children:n}),f(`span`,{class:X.detail,children:r}),a]}),s;return{el:o,show(c){if(!c||c===s)return;s=c,W(o,`data-kind`,c.kind),W(o,`data-source`,c.source);let l=e.get(c.kind);l||e.set(c.kind,l=R({name:Yn[c.kind],size:14,class:X.kind})),l!==t&&(t.replaceWith(l),t=l),G(n,c.text),G(r,c.detail??``),W(a,`dateTime`,c.time.toISOString()),G(i,$n.format(c.time))}}}var $n,er,tr;function nr(){return(nr=e((()=>{He(),oe(),Be(),Rt(),F(),A(),T(),zt(),Xn(),g(),$n=new Intl.DateTimeFormat(void 0,{hour:`2-digit`,minute:`2-digit`,second:`2-digit`}),er={Transforms:`layers`,Plugin:`wrench`},tr=(e,t,n)=>t===`messages`&&e.source!==void 0||t===`problems`&&e.kind!==`warning`&&e.kind!==`error`||t.startsWith(`source:`)&&e.source!==t.slice(7)?!1:!n||e.text.toLowerCase().includes(n)||!!e.detail?.toLowerCase().includes(n)})))()}var rr;function ir(){return(ir=e((()=>{S(),rr={canvas:`msp-shell-canvas`,canvasLayer:`msp-shell-canvasLayer`,layer:`msp-shell-layer`,shell:`msp-shell-shell`,viewport:`msp-shell-viewport`},x(`views/shell/shell.module.css`,`@layer msp.components {
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
}

:where(.msp-shell-layer) > * {
  pointer-events: auto;
}

.msp-shell-canvasLayer {
  right: var(--msp-canvas-pinned, 0px);
}
}
`)})))()}var ar;function or(){return(or=e((()=>{S(),ar={empty:`msp-shell-empty-canvas-empty`,"fade-in":`msp-shell-empty-canvas-fade-in`,"fade-out":`msp-shell-empty-canvas-fade-out`,mark:`msp-shell-empty-canvas-mark`,splash:`msp-shell-empty-canvas-splash`},x(`views/shell/empty-canvas.module.css`,`@layer msp.components {
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
  inset: 0 calc(-1 * var(--msp-canvas-right-inset, 0px)) 0 0;
  animation: msp-shell-empty-canvas-fade-in 1.2s var(--msp-ease) both;
  position: absolute;
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
`)})))()}function sr(e){let t=O(`gone`),n=n=>{let r=t.value,i=n===`out`&&r!==`in`?`gone`:n;i!==r&&(t.set(i),i===`in`?e.onCanvasShown?.(!1):i===`out`&&e.onCanvasShown?.(!0))},r=`gone`,i=se(()=>n(r)),a=(e,t)=>{r=t,i.start(e)},o,s=!1,l=()=>{i.cancel(),o!==void 0&&(o?s||a(cr,`in`):(n(`out`),a(ur,`gone`)))};c(e.empty,e=>{e!==o&&(o=e,l())}),e.busy!==void 0&&c(e.busy,e=>{s=e,l()}),e.onCanvasShown&&d(e.empty,t=>!t&&e.onCanvasShown?.(!0));let u=e.splash??!0,p=()=>{if(typeof u==`object`)return`light`;let t=e.field??`random`;return t===`random`?Math.random()<lr?`quantum`:`light`:t};return f(I,{when:w(t.asReadonly,e=>e!==`gone`),children:()=>{let e=f(Je,{scale:3,flash:`reveal`,live:!u,prism:!u,class:ar.mark});return m(`div`,{class:ar.empty,"data-phase":t.asReadonly,children:[u?f(`div`,{class:ar.splash,children:f(Xe,{field:p(),mark:()=>e,pointer:()=>e.closest(`[data-msp-viewport]`)??e.parentElement,options:u===!0?{}:u})}):null,e]})}})}var cr,lr,ur;function dr(){return(dr=e((()=>{qe(),F(),y(),z(),A(),T(),or(),Ye(),g(),cr=700,lr=2/3,ur=250})))()}var fr;function pr(){return(pr=e((()=>{S(),fr={"drop-in":`msp-shell-file-drop-drop-in`,hint:`msp-shell-file-drop-hint`,overlay:`msp-shell-file-drop-overlay`,target:`msp-shell-file-drop-target`,title:`msp-shell-file-drop-title`},x(`views/shell/file-drop.module.css`,`@layer msp.components {
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
`)})))()}function mr(e){let t=O(!1);B(e.target,`dragenter`,e=>{hr(e)&&t.set(!0)});let n=e=>{e.preventDefault(),e.stopPropagation(),e.dataTransfer&&(e.dataTransfer.dropEffect=`copy`)},i=f(`div`,{class:fr.overlay,onDragEnter:n,onDragOver:n,onDragLeave:()=>t.set(!1),onDrop:r=>{n(r),t.set(!1);let i=[...r.dataTransfer?.files??[]];i.length&&e.onDrop(i)},children:m(`div`,{class:fr.target,children:[f(R,{name:`folder-open`,size:24}),f(`span`,{class:fr.title,children:`Drop to open`}),e.formats?.length?f(`span`,{class:fr.hint,children:e.formats.join(`, `)}):null]})});return r([t],()=>W(i,`hidden`,!t.value)),i}function hr(e){let t=e.dataTransfer?.types;if(!t)return!1;for(let e=0;e<t.length;e++)if(t[e]===`Files`)return!0;return!1}function gr(){return(gr=e((()=>{oe(),y(),z(),A(),pr(),g()})))()}var _r;function vr(){return(vr=e((()=>{S(),_r={body:`msp-shell-page-body`,header:`msp-shell-page-header`,headerContent:`msp-shell-page-headerContent`,page:`msp-shell-page-page`,"page-in":`msp-shell-page-page-in`,title:`msp-shell-page-title`},x(`views/shell/page.module.css`,`@layer msp.components {
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
`)})))()}function yr(e){let{shell:t}=e,n=w(t.page,e=>e?.page);return f(I,{when:n,children:e=>f(br,{shell:t,page:e})})}function br(e){let{shell:t}=e,r={page:e.page,focus:t.page.value?.focus},i={shell:t,...r.focus?{focus:r.focus}:{}},a=m(`section`,{class:_r.page,role:`region`,"aria-label":r.page.title,tabIndex:-1,"data-msp-page":``,children:[m(`header`,{class:_r.header,children:[m(`span`,{class:_r.title,children:[r.page.icon?f(R,{name:r.page.icon}):null,r.page.title]}),f(`div`,{class:_r.headerContent,children:r.page.header?f($t,{renderer:r.page.header,ctx:i}):null}),f(K,{variant:`ghost`,size:`sm`,icon:f(R,{name:`x`}),title:`Close (Esc)`,onClick:()=>t.closePage()})]}),f(`div`,{class:_r.body,children:f($t,{renderer:r.page.render,ctx:i})})]}),o=Le(document);return B(document,`keydown`,e=>{if(e.key!==`Escape`||e.defaultPrevented||!Ie(a,e))return;let n=Le(a);(!n||n===document.body||a.contains(n))&&(t.closePage(),e.preventDefault())}),queueMicrotask(()=>{a.contains(Le(a))||a.focus({preventScroll:!0})}),n(()=>{o?.isConnected&&o.focus({preventScroll:!0})}),a}function xr(){return(xr=e((()=>{He(),oe(),F(),y(),z(),vr(),en(),T(),g()})))()}function Sr(e){let{shell:t,status:i}=e,a=t.dock(`right`),o=w(t.mode,e=>e===`compact`),s=t.dock(`top`),c=t.expanded,l=w(c,e=>!e),u=tn(t,a),d=w([u.floating,t.mode],(e,t)=>e&&t!==`compact`),p=tn(t,s).floating,h=w([tn(t,s).size,s.active,p,c],(e,t,n,r)=>`${n&&t&&!r?t.frame===`none`?e-28+$:$+e+$:$}px`),g=w([d,t.railShown,c],(e,t,n)=>e&&!t||n?0:Cr),_=w([d,t.compactRail,c],(e,t,n)=>e&&t&&!n),v=w([g,_],(e,t)=>t?0:e),y=_,b=w([u.pinned,d,c],(e,t,n)=>t&&e&&!n),x=w([u.size,a.active,t.overlay,b,g],(e,t,n,r,i)=>r?i+(t||n?e:0):0),S=w([x,d,v],(e,t,n)=>e>0?e:t?n:0),C=w([u.size,a.active,t.overlay,d,b,g,c,o],(e,t,n,r,i,a,o,s)=>`${i||o?$:(s?0:a)+$+(r&&(t||n)?e+$:0)}px`),ee=w([b,o,v,_,c],(e,t,n,r,i)=>`${e||t||i?$:(r?Cr:n)+$}px`),te=w([a.active,d,c],(e,t,n)=>t&&e&&!n?`open`:void 0),T=u.sizePx,E=w(g,e=>`${e+$}px`),D=f(`div`,{class:rr.canvas,"data-msp-canvas":``,"data-msp-scope":`canvas`,"data-quiet":e.empty?``:void 0,children:e.canvas}),O=e=>D.toggleAttribute(`data-quiet`,!e),k,A,j,M,N=m(`div`,{class:rr.shell,children:[f(I,{when:w([p,c],(e,t)=>!e&&!t),children:()=>f(nn,{shell:t,dock:s})}),f(I,{when:l,children:()=>f(nn,{shell:t,dock:t.dock(`left`)})}),m(`main`,{class:rr.viewport,"data-msp-viewport":``,style:{"--msp-canvas-edge":`${$}px`,"--msp-corner-room":`${wr}px`,"--msp-band-fade":`28px`,"--msp-band-dissolve":`36px`},ref:e=>k=e,children:[D,m(`div`,{class:`${rr.layer} ${rr.canvasLayer}`,"data-msp-theme":e.ink?void 0:`light`,ref:e=>A=e,children:[f(I,{when:w([p,c],(e,t)=>e&&!t),children:()=>f(rn,{shell:t,dock:s})}),e.empty?f(sr,{empty:e.empty,splash:e.splash??!0,field:e.splashField??`random`,onCanvasShown:O,...e.busy?{busy:e.busy}:{}}):null,f(`div`,{class:Z.lead,children:e.playback}),e.overlays,f(I,{when:y,children:()=>f(Un,{shell:t})}),f(`div`,{class:Z.bottom,"data-keeps-card":``,ref:e=>j=e,children:m(`div`,{class:Z.bottomGrid,children:[f(Rn,{status:i,onOpenLog:e.onOpenLog,after:e.agent}),m(`div`,{class:Z.corner,children:[f(kn,{shell:t,lead:e.canvasLead,aside:e.canvasAside,...e.canvasLeadMenu?{leadMenu:e.canvasLeadMenu}:{},quiet:e.empty}),f(Bn,{status:i,lead:e.context?.()})]})]})})]}),m(`div`,{class:rr.layer,ref:e=>M=e,children:[f(In,{shell:t}),f(yr,{shell:t}),f(I,{when:l,children:()=>f(I,{when:d,fallback:()=>f(I,{when:w(o,e=>!e),children:()=>f(`div`,{class:`${Z.toolbarSlot} ${Z.frame}`,children:f(Sn,{shell:t})})}),children:()=>{let e=ae(t.railShown,()=>f(rn,{shell:t,dock:a,railItems:e=>f(Sn,{shell:t,part:`rest`,hidden:e.hidden,railMenu:(t,n)=>e.toggleMenu(n,t)}),railFoot:e=>f(Sn,{shell:t,part:`lead`,hidden:e.hidden,railMenu:(t,n)=>e.toggleMenu(n,t)})}));return r([t.railShown,t.compactRail],()=>{W(e,`data-rail-hidden`,!t.railShown.value),W(e,`data-rail-overlay`,t.compactRail.value)}),e}})})]})]}),f(I,{when:w([d,c],(e,t)=>!e&&!t),children:()=>f(nn,{shell:t,dock:a,stripEnd:f(I,{when:o,children:()=>f(Mn,{shell:t})})})}),f(I,{when:l,children:()=>f(nn,{shell:t,dock:t.dock(`bottom`)})}),e.commandMenu,f(Nn,{status:i})]});r([t.mode,c],()=>{W(N,`data-mode`,t.mode.value),W(N,`data-expanded`,c.value)});let ne=[C,ee,h,S,E,T,x];if(e.ink&&ne.push(e.ink),r(ne,()=>{U(k,`--msp-canvas-right-inset`,C.value),U(k,`--msp-canvas-corner-inset`,ee.value),U(k,`--msp-canvas-top-inset`,h.value),U(k,`--msp-canvas-end`,`${S.value}px`),U(k,`--msp-canvas-rail-inset`,E.value),U(k,`--msp-canvas-panel-right`,E.value),U(k,`--msp-right-panel-width`,T.value),U(k,`--msp-canvas-pinned`,`${x.value}px`),U(k,`background`,e.ink?.value.color)}),e.ink){let t=e.ink;r([t],()=>{W(A,`data-msp-theme`,t.value.theme),U(A,`--msp-color-bg`,t.value.color)})}r([te,b,t.overlay],()=>{W(M,`data-right-panel`,te.value),W(M,`data-pinned`,b.value),W(M,`data-overlay`,t.overlay.value?`open`:null)}),e.onDropFiles&&N.appendChild(f(mr,{target:N,onDrop:e.onDropFiles,formats:e.dropFormats})),B(document,`keydown`,e=>{e.key!==`Escape`||e.defaultPrevented||t.overlay.value||Pe(Fe(e))||Ie(N,e)&&(c.value?(t.setExpanded(!1),e.preventDefault()):a.state.value.pinned||!a.state.value.collapsed&&a.active.value!==void 0&&(t.toggle(`right`),e.preventDefault()))});let P=e=>{(e.type!==`wheel`||e.ctrlKey)&&e.preventDefault()};return B(D,`wheel`,P,{passive:!1}),B(j,`wheel`,P,{passive:!1}),B(N,`gesturestart`,P),B(N,`gesturechange`,P),n(Ge(N)),le(N,e=>t.setWidth(e[0].contentRect.width)),N}var Cr,$,wr;function Tr(){return(Tr=e((()=>{F(),y(),z(),T(),wt(),Bt(),ir(),Ke(),Xn(),_n(),dr(),gr(),xr(),g(),Cr=44,$=8,wr=42})))()}export{dt as C,et as D,$e as E,Ze as O,ut as S,tt as T,Ct as _,zn as a,vt as b,$t as c,Lt as d,Rt as f,Ot as g,Et as h,nr as i,Qe as k,en as l,Ft as m,Tr as n,En as o,At as p,Zn as r,Xn as s,Sr as t,It as u,wt as v,nt as w,q as x,_t as y};