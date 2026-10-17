import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{A as t,C as n,S as r,T as i,b as a,g as o,h as s,i as c,k as l,m as u,n as d,o as f,r as p,t as m,u as ee,v as h,w as g,x as te}from"./jsx-runtime-Dut-27nP.js";import{n as _,r as v}from"./registry-D35yV2Tb.js";import{i as y,n as b,r as ne,t as x}from"./control-flow-BLsZc6z1.js";import{C as re,S as ie,b as S,x as C,y as ae}from"./work-queue-DoxU-HjK.js";import{i as w,n as T,r as E,t as D}from"./observable-state-C67cgDrf.js";import{c as oe,l as se,o as ce,s as le,u as ue}from"./manager-BFhJYk0n.js";import{n as O,t as k}from"./icon-Fyk1xIJy.js";import{c as de,i as A,n as fe,o as pe,s as j,t as me}from"./scoped-CYrGtqEo.js";import{n as he,t as M}from"./scroll-area-C3WxaIdw.js";import{C as ge,D as _e,E as ve,O as ye,S as be,T as xe,b as Se,n as Ce,r as we,t as Te,w as N,x as Ee,y as De}from"./params-form-DodHex4Z.js";import{n as Oe,t as ke}from"./keyed-selector-MU49iODI.js";import{c as Ae,d as P,f as F,i as je,o as Me,s as Ne,u as Pe}from"./select-Cc49vJOg.js";import{n as Fe,t as Ie}from"./text-input-6-TvZsXK.js";import{n as Le,t as I}from"./button-C9pAumBZ.js";import{n as Re,t as ze}from"./tooltip-BHLMAY43.js";import{r as Be,t as Ve}from"./wordmark-ClMxGUTX.js";import{n as He,t as Ue}from"./prism-splash-CuQxQmQd.js";function We(e){let t=e.background??`radial-gradient(circle at 50% 45%, #ffffff 0%, #eef0f3 70%, #dfe3e8 100%)`;if(e.empty)return d(`div`,{style:{position:`absolute`,inset:0,background:t}});let n=[];for(let e=0;e<90;e++){let t=e/90,r=120+t*560+40*Math.sin(t*19),i=300+150*Math.sin(t*7.3)+30*Math.cos(t*23),a=200+160*t;n.push(d(`circle`,{cx:r,cy:i,r:14+4*Math.sin(t*31),fill:`hsl(${a} 55% 60%)`,"data-index":e}))}return d(`div`,{style:{position:`absolute`,inset:0,background:t},onPointerOver:t=>{let n=t.target.getAttribute?.(`data-index`);e.onHover?.(n==null?void 0:Number(n))},onPointerLeave:()=>e.onHover?.(void 0),children:p(`svg`,{viewBox:`0 0 800 600`,preserveAspectRatio:`xMidYMid meet`,style:`width: 100%; height: 100%`,children:[d(`defs`,{children:p(`radialGradient`,{id:`msp-placeholder-shade`,cx:`35%`,cy:`35%`,r:`65%`,children:[d(`stop`,{offset:`0%`,"stop-color":`#fff`,"stop-opacity":`0.55`}),d(`stop`,{offset:`100%`,"stop-color":`#000`,"stop-opacity":`0.2`})]})}),d(`g`,{children:n}),d(`g`,{style:`mix-blend-mode: soft-light; pointer-events: none`,children:n.map(e=>d(`circle`,{cx:e.getAttribute(`cx`),cy:e.getAttribute(`cy`),r:e.getAttribute(`r`),fill:`url(#msp-placeholder-shade)`}))})]})})}function Ge(){return(Ge=e((()=>{m()})))()}function Ke(e){return{mount:(t,n,r)=>ee(()=>e({ctx:n}),t,r)}}function qe(){return(qe=e((()=>{f()})))()}function Je(e,t,n=w){return S(e,t,n)}function Ye(){return(Ye=e((()=>{E(),C()})))()}function Xe(){let e={};for(let t of L)e[t]={tabs:[],size:tt[t],floating:t===`right`||t===`top`,pinned:t===`right`};return{docks:e,mode:`auto`,compactRail:!1,buttons:{},hiddenTabs:[]}}function Ze(e,t){for(let n of Object.keys(t))if(!Object.is(e[n],t[n]))return!0;return!1}function Qe(e,t){let n={...e.docks};for(let e of L){let r=t.docks?.[e];r&&(n[e]={...n[e],...r})}return{docks:n,mode:t.mode??e.mode,compactRail:t.compactRail??e.compactRail,buttons:{...e.buttons,...t.buttons},hiddenTabs:t.hiddenTabs?[...new Set(t.hiddenTabs)]:e.hiddenTabs}}function $e(e){if(!e||typeof e!=`object`)return!1;let t=e;if(t.version!==1||!t.layout||typeof t.layout!=`object`)return!1;let n=t.layout.docks;if(!n||typeof n!=`object`)return!1;let{mode:r,compactRail:i,buttons:a,hiddenTabs:o}=t.layout;return r!==void 0&&!(r===`auto`||et.includes(r))||i!==void 0&&typeof i!=`boolean`||a!==void 0&&(!a||typeof a!=`object`)||o!==void 0&&!(Array.isArray(o)&&o.every(e=>typeof e==`string`))?!1:L.every(e=>{let t=n[e];if(!t)return!0;let r=e=>e===void 0||typeof e==`boolean`;return Array.isArray(t.tabs)&&t.tabs.every(e=>typeof e==`string`)&&(t.size===void 0||typeof t.size==`number`&&Number.isFinite(t.size))&&r(t.floating)&&r(t.pinned)})}var L,et,tt,nt,rt;function it(){return(it=e((()=>{D(),L=[`left`,`right`,`top`,`bottom`],et=[`desktop`,`compact`,`embedded`],tt={left:300,right:340,top:88,bottom:220},nt={left:180,right:180,top:40,bottom:40},rt=class{#e;#t;constructor(e){this.#e=e?Qe(Xe(),e):Xe(),this.#t=T(this.#e)}get layout(){return this.#t.asReadonly}get initial(){return this.#e}reset(){this.#t.set(this.#e)}setTabHidden(e,t){let n=this.#t.value;if(n.hiddenTabs.includes(e)===t)return;let r=t?[...n.hiddenTabs,e]:n.hiddenTabs.filter(t=>t!==e);this.#t.set({...n,hiddenTabs:r})}showAllTabs(){this.#t.value.hiddenTabs.length&&this.#t.set({...this.#t.value,hiddenTabs:[]})}setDock(e,t){let n=this.#t.value,r=n.docks[e];if(!Ze(r,t))return;let i={...r,...t};i.size!==r.size&&(i.size=Math.max(nt[e],Math.round(i.size))),this.#t.set({...n,docks:{...n.docks,[e]:i}})}setMode(e){this.#t.value.mode!==e&&this.#t.set({...this.#t.value,mode:e})}setCompactRail(e){this.#t.value.compactRail!==e&&this.#t.set({...this.#t.value,compactRail:e})}setButtons(e){let t=this.#t.value;Ze(t.buttons,e)&&this.#t.set({...t,buttons:{...t.buttons,...e}})}save(){return{version:1,layout:this.#t.value}}restore(e){if(!$e(e))return!1;let t={};for(let n of L){let r=e.layout.docks?.[n];r&&(t[n]={...r,...r.size===void 0?{}:{size:Math.max(nt[n],Math.round(r.size))}})}return this.#t.set(Qe(this.#t.value,{...e.layout,docks:t})),!0}}})))()}function at(){let e={};for(let t of L)e[t]={active:void 0,collapsed:!1};return{docks:e,card:void 0,page:void 0,focus:void 0,railOpen:!1,expanded:!1,fullscreen:!1}}function ot(e,t){let n=e.docks[t];return n.collapsed?void 0:n.active}function R(e,t){return Je(e,t,Object.is)}function st(e){if(!e||typeof e!=`object`)return!1;let t=e;return t.version===1&&!!t.navigation&&typeof t.navigation.docks==`object`&&!!t.navigation.docks}var ct,lt;function ut(){return(ut=e((()=>{Ye(),D(),it(),ct=`right`,lt=class{#e=T(at());#t;#n;#r;#i;#a;#o;constructor(e){if(e){let t=this.#e.value,n={...t.docks};for(let t of L)e.docks?.[t]&&(n[t]={...n[t],...e.docks[t]});this.#e.set({...t,docks:n,railOpen:e.railOpen??t.railOpen})}this.#t=R(this.#e.asReadonly,e=>ot(e,ct)),this.#n=R(this.#e.asReadonly,e=>e.card?.id),this.#r=R(this.#e.asReadonly,e=>e.card?.section??e.focus?.section),this.#i=R(this.#e.asReadonly,e=>e.page?.id),this.#a=R(this.#e.asReadonly,e=>e.expanded),this.#o=R(this.#e.asReadonly,e=>e.fullscreen)}get state(){return this.#e.asReadonly}get tab(){return this.#t}get card(){return this.#n}get section(){return this.#r}get page(){return this.#i}get expanded(){return this.#a}get fullscreen(){return this.#o}openTab(e){return ot(this.#e.value,e)}setDock(e,t){let n=this.#e.value,r=n.docks[e],i=(!(`active`in t)||t.active===r.active)&&(t.collapsed===void 0||t.collapsed===r.collapsed),a=n.expanded&&t.collapsed!==!1;i&&a===n.expanded||this.#e.set({...n,expanded:a,docks:{...n.docks,[e]:{...r,...t}}})}setExpanded(e){this.#e.value.expanded!==e&&this.#e.set({...this.#e.value,expanded:e})}setFullscreen(e){this.#e.value.fullscreen!==e&&this.#e.set({...this.#e.value,fullscreen:e})}setCard(e){let t=this.#e.value;(t.card?.id!==e?.id||t.card?.section!==e?.section||e?.section)&&this.#e.set({...t,card:e})}setPage(e){let t=this.#e.value;(t.page?.id!==e?.id||t.page?.focus!==e?.focus)&&this.#e.set({...t,page:e})}setFocus(e){let t=this.#e.value;t.focus!==e&&this.#e.set({...t,focus:e})}setRailOpen(e){this.#e.value.railOpen!==e&&this.#e.set({...this.#e.value,railOpen:e})}save(){let{docks:e,card:t,page:n}=this.#e.value;return{version:1,navigation:{docks:e,card:t,page:n}}}restore(e){if(!st(e))return!1;let t=this.#e.value,n={...t.docks};for(let t of L){let r=e.navigation.docks[t];r&&(n[t]={active:r.active,collapsed:!!r.collapsed})}return this.#e.set({...t,docks:n,card:e.navigation.card,page:e.navigation.page}),!0}}})))()}function dt(e){let t={};for(let n of L){let r=e.docks?.[n];if(!r)continue;let i={};for(let e of mt)e in r&&(i[e]=r[e]);t[n]=i}return{docks:t,...e.mode?{mode:e.mode}:{},compactRail:!!e.compactRail,buttons:e.buttons??{}}}function ft(e){let t={};for(let n of L){let r=e.docks?.[n];r&&(t[n]={...`active`in r?{active:r.active}:{},...r.collapsed===void 0?{}:{collapsed:r.collapsed}})}return{docks:t}}var pt,mt,ht;function gt(){return(gt=e((()=>{ut(),it(),D(),t(),pt=class{#e;#t;#n;constructor(e,t){this.id=e,this.#e=T(t),this.#t=T([]),this.#n=T(void 0)}get state(){return this.#e.asReadonly}get tabs(){return this.#t.asReadonly}get active(){return this.#n.asReadonly}sync(e,t,n){this.#e.set(e);let r=e.tabs.filter(e=>!n.includes(e)).map(e=>t.get(e)).filter(e=>!!e);this.#t.set(r),this.#n.set(e.collapsed?void 0:r.find(t=>t.id===e.active))}},mt=[`tabs`,`size`,`floating`,`pinned`],ht=class extends l{#e=new Map;#t=new Map;#n=new Map;#r;#i;#a=T(void 0);#o;#s=T(!0);#c=T(0);#l=T(`desktop`);#u=T(void 0,{compare:Object.is});#d;#f=T(void 0,{compare:Object.is});#p=T(!1);#m=T(!1);#h=T([]);#g=T([]);#_=T([]);#v=T([]);#y=new Map;#b;#x;#S=T(!1);constructor(e={}){super(),this.#b=e.compactWidth??720,this.#x=e.toolbar??`auto`,this.#r=e.viewState??new rt(dt(e)),this.#i=e.navigation??new lt(ft(e)),this.#o={};for(let e of L)this.#o[e]=new pt(e,this.#E(e));this.subscribePermanently(this.#r.layout,()=>this.#O()),this.subscribePermanently(this.#i.state,()=>this.#O())}get viewState(){return this.#r}get navigation(){return this.#i}get compactRail(){return this.#p.asReadonly}get railOpen(){return this.#m.asReadonly}get railShown(){return this.#s.asReadonly}get toolbarCollapsed(){return this.#S.asReadonly}setCompactRail(e){this.#r.setCompactRail(e),this.setRailOpen(!1)}setRailOpen(e){this.#p.value&&!e&&(this.closeOverlay(),this.#i.setDock(`right`,{collapsed:!0})),this.#i.setRailOpen(e)}toggleRail(){this.#p.value&&this.setRailOpen(!this.#i.state.value.railOpen)}get expanded(){return this.#i.expanded}setExpanded(e){e&&this.closeOverlay(),this.#i.setExpanded(e)}dock(e){return this.#o[e]}get mode(){return this.#l.asReadonly}#C=new Map;sectionOpen(e,t){return this.#C.get(`${e}\n${t}`)}setSectionOpen(e,t,n){this.#C.set(`${e}\n${t}`,n)}get tabFocus(){return this.#f.asReadonly}get overlay(){return this.#u.asReadonly}get page(){return this.#a.asReadonly}get toolbar(){return this.#_.asReadonly}sections(e){let t=this.#y.get(e);if(!t){let n=T([]),r=t=>n.set(t.filter(t=>t.slot===e).sort((e,t)=>(e.order??0)-(t.order??0)));r(this.#v.value),this.subscribePermanently(this.#v.asReadonly,r),t=n.asReadonly,this.#y.set(e,t)}return t}registerSections(e){return this.#v.set([...this.#v.value,...e]),()=>this.#v.set(this.#v.value.filter(t=>!e.includes(t)))}registerToolbar(e){return this.#g.set((e=>[...e].sort((e,t)=>(e.order??0)-(t.order??0)))([...this.#g.value,...e])),this.#A(),()=>{this.#g.set(this.#g.value.filter(t=>!e.includes(t))),this.#A()}}setButtons(e){this.#r.setButtons(e)}registerTabs(e){let t=[...e].sort((e,t)=>(e.order??0)-(t.order??0));for(let e of t)this.#e.set(e.id,e),this.#w(e);return this.#O(),()=>{for(let e of t){if(this.#e.get(e.id)!==e)continue;this.#e.delete(e.id);let t=this.#T(e.id);if(!t)continue;let n=this.#E(t),r=n.tabs.filter(t=>t!==e.id);this.#D(t,{tabs:r,active:n.active===e.id?r[0]:n.active})}this.#O()}}#w(e){let t=this.#T(e.id)??e.dock??`right`,n=this.#E(t),r=n.tabs;if(!r.includes(e.id)){let t=e.order??0,n=r.findIndex(e=>(this.#e.get(e)?.order??0)>t);r=n<0?[...r,e.id]:[...r.slice(0,n),e.id,...r.slice(n)]}let i=this.#r.layout.value.hiddenTabs.includes(e.id);this.#D(t,{tabs:r,active:n.active??(i?void 0:e.id)})}get hiddenTabs(){return this.#h.asReadonly}hideTab(e){let t=this.#T(e);ae(()=>{if(this.#r.setTabHidden(e,!0),!t)return;let n=this.#E(t);if(n.active!==e)return;let r=this.#r.layout.value.hiddenTabs,i=n.tabs.find(t=>t!==e&&!r.includes(t)&&this.#e.has(t));this.#D(t,{active:i,collapsed:!0})})}showTab(e){this.#r.setTabHidden(e,!1)}showAllTabs(){this.#r.showAllTabs()}resetLayout(){ae(()=>{this.#r.reset();let e=[...this.#e.values()].sort((e,t)=>(e.order??0)-(t.order??0));for(let t of e)this.#w(t);for(let e of L){let t=this.#E(e);t.active!==void 0&&!t.tabs.includes(t.active)&&this.#i.setDock(e,{active:t.tabs.find(e=>this.#e.has(e))})}})}registerOverlays(e){for(let t of e)this.#t.set(t.id,t);return this.#O(),()=>{for(let t of e)this.#t.get(t.id)===t&&(this.#t.delete(t.id),this.#i.state.value.card?.id===t.id&&this.closeOverlay());this.#O()}}registerPages(e){for(let t of e)this.#n.set(t.id,t);return this.#O(),()=>{for(let t of e)this.#n.get(t.id)===t&&(this.#n.delete(t.id),this.#i.state.value.page?.id===t.id&&this.closePage());this.#O()}}openPage(e,t){this.#n.has(e)&&(this.closeOverlay(),this.#i.setPage({id:e,...t?{focus:t}:{}}))}closePage(){this.#i.setPage(void 0)}show(e,t){let n=this.#T(e);n&&(this.showTab(e),t?this.#i.setFocus({tab:e,section:t}):this.#i.state.value.focus?.tab===e&&this.#i.setFocus(void 0),this.#D(n,{active:e,collapsed:!1}))}select(e){let t=this.#T(e);if(!t)return;this.#i.state.value.focus?.tab===e&&this.#i.setFocus(void 0);let n=this.#E(t);n.active===e&&!n.collapsed?this.#D(t,{collapsed:!0}):this.#D(t,{active:e,collapsed:!1})}toggle(e){this.#D(e,{collapsed:!this.#E(e).collapsed})}move(e,t,n){let r=this.#T(e);if(!r||!this.#e.has(e))return;let i=this.#E(r),a=i.tabs.filter(t=>t!==e);this.#D(r,{tabs:a,active:i.active===e?a[0]:i.active});let o=[...this.#E(t).tabs.filter(t=>t!==e)];o.splice(n??o.length,0,e),this.#D(t,{tabs:o,active:e,collapsed:!1})}setSize(e,t){this.#r.setDock(e,{size:t})}setFloating(e,t){this.#r.setDock(e,{floating:t})}setPinned(e,t){this.#r.setDock(e,{pinned:t})}setMode(e){this.#r.setMode(e),e===`embedded`&&this.setRailOpen(!1)}setWidth(e){this.#c.set(e),this.#j()&&this.#O()}openOverlay(e,t,n){if(!this.#t.has(e))return;this.#d=t?{id:e,element:t}:this.#d?.id===e?this.#d:void 0;let r=this.#u.value;this.#i.setCard({id:e,...n?{section:n}:{}}),this.#u.value===r&&this.#k(!0)}toggleOverlay(e,t){this.#i.state.value.card?.id===e?this.closeOverlay():this.openOverlay(e,t)}closeOverlay(){this.#d=void 0,this.#i.setCard(void 0)}#T(e){let t=this.#r.layout.value.docks;for(let n of L)if(t[n].tabs.includes(e))return n}#E(e){let t=this.#r.layout.value.docks[e],n=this.#i.state.value.docks[e],r={...t,active:n.active,collapsed:n.collapsed};return this.#l.value===`embedded`?{...r,floating:e===`right`||r.floating,pinned:!1}:this.#l.value===`compact`&&r.pinned?{...r,pinned:!1}:r}#D(e,t){let n={};for(let e of mt)e in t&&(n[e]=t[e]);Object.keys(n).length&&this.#r.setDock(e,n);let r={};`active`in t&&(r.active=t.active),`collapsed`in t&&(r.collapsed=t.collapsed),Object.keys(r).length&&this.#i.setDock(e,r)}#O(){if(!this.#o)return;this.#j();let e=this.#r.layout.value;for(let t of L)this.#o[t].sync(this.#E(t),this.#e,e.hiddenTabs);let t=e.hiddenTabs.map(e=>this.#e.get(e)).filter(e=>!!e),n=this.#h.value;(t.length!==n.length||t.some((e,t)=>e!==n[t]))&&this.#h.set(t);let r=this.#i.state.value,i=e.compactRail||this.#l.value===`embedded`;this.#p.set(i),this.#m.set(r.railOpen),this.#s.set(!i||r.railOpen),this.#f.set(r.focus);let a=r.page?this.#n.get(r.page.id):void 0,o=this.#a.value;a?(o?.page!==a||o.focus!==r.page?.focus)&&this.#a.set({page:a,...r.page?.focus?{focus:r.page.focus}:{}}):this.#a.set(void 0),this.#k(!1),this.#A()}#k(e){let t=this.#i.state.value.card,n=t?this.#t.get(t.id):void 0;if(!n||!t){this.#u.set(void 0);return}let r=this.#u.value,i=this.#d?.id===t.id?this.#d.element:void 0;(e||r?.overlay!==n||r.anchor!==i||r.focus!==t.section)&&this.#u.set({overlay:n,...i?{anchor:i}:{},...t.section?{focus:t.section}:{}})}#A(){let e=this.#r.layout.value.buttons;this.#_.set(this.#g.value.filter(t=>e[t.id]!==!1))}#j(){let e=this.#r.layout.value.mode,t=this.#c.value,n=t>0&&t<this.#b,r=e===`auto`?n?`compact`:`desktop`:e===`embedded`&&n?`compact`:e,i=this.#x;return this.#S.set(i===`auto`?r===`compact`:i===`collapsed`),this.#l.value!==r&&(this.#l.set(r),!0)}}})))()}var z;function _t(){return(_t=e((()=>{v(),z={body:`msp-settings-settings-tab-body`,chevron:`msp-settings-settings-tab-chevron`,group:`msp-settings-settings-tab-group`,groups:`msp-settings-settings-tab-groups`,groupsContent:`msp-settings-settings-tab-groupsContent`,header:`msp-settings-settings-tab-header`,none:`msp-settings-settings-tab-none`,search:`msp-settings-settings-tab-search`,searchIcon:`msp-settings-settings-tab-searchIcon`,searchInput:`msp-settings-settings-tab-searchInput`,tab:`msp-settings-settings-tab-tab`,title:`msp-settings-settings-tab-title`,toggle:`msp-settings-settings-tab-toggle`},_(`views/settings/settings-tab.module.css`,`@layer msp.components {
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
`)})))()}function vt(e){let{model:t}=e,n=T(``),r=n.asReadonly,i=S(r,e=>e.trim().length>0&&!t.groups.some(t=>we(t.form.params,e)));return p(`div`,{class:z.tab,children:[p(`div`,{class:z.search,children:[d(k,{name:`search`,size:14,class:z.searchIcon}),d(Ie,{search:!0,size:`sm`,class:z.searchInput,"aria-label":`Search settings`,placeholder:`Search settings`,value:r,onInput:e=>n.set(e)})]}),p(M,{class:z.groups,contentClass:z.groupsContent,children:[t.groups.map((e,t)=>d(yt,{group:e,query:r,open:t===0})),d(b,{when:i,children:()=>p(`p`,{class:z.none,children:[`No setting matches “`,r,`”.`]})}),e.more?.()]})]})}function yt(e){let{group:t,query:n}=e,r=T(e.open),i=S(n,e=>e.trim().length>0),a=S([r.asReadonly,i],(e,t)=>e||t),o=S(n,e=>!we(t.form.params,e));return p(`section`,{class:z.group,hidden:o,"aria-label":t.title,children:[d(`div`,{class:z.header,children:p(`button`,{type:`button`,class:z.toggle,"aria-expanded":a,onClick:()=>r.set(!r.value),children:[d(`span`,{class:z.title,children:t.title}),d(k,{name:`chevron-down`,size:14,class:z.chevron})]})}),d(b,{when:a,reveal:!0,children:()=>d(`div`,{class:z.body,"data-wide-labels":t.wideLabels?``:void 0,children:d(Te,{form:t.form,filter:n})})})]})}function bt(){return(bt=e((()=>{O(),Ce(),he(),Fe(),y(),D(),C(),_t(),m()})))()}var B;function xt(){return(xt=e((()=>{v(),B={action:`msp-shell-help-panel-action`,conflict:`msp-shell-help-panel-conflict`,conflicts:`msp-shell-help-panel-conflicts`,content:`msp-shell-help-panel-content`,edit:`msp-shell-help-panel-edit`,editBar:`msp-shell-help-panel-editBar`,group:`msp-shell-help-panel-group`,heading:`msp-shell-help-panel-heading`,headingRow:`msp-shell-help-panel-headingRow`,help:`msp-shell-help-panel-help`,input:`msp-shell-help-panel-input`,key:`msp-shell-help-panel-key`,keys:`msp-shell-help-panel-keys`,list:`msp-shell-help-panel-list`,or:`msp-shell-help-panel-or`,recorder:`msp-shell-help-panel-recorder`,row:`msp-shell-help-panel-row`,srOnly:`msp-shell-help-panel-srOnly`},_(`views/shell/help-panel.module.css`,`@layer msp.components {
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
`)})))()}function St(e){let t=e.commands,n=t.keymap,r=T(!1),i=T(void 0),a=Oe(i.asReadonly),o=T(``),s=S([t.commands,n.layers,i.asReadonly],(e,r,i)=>e.filter(e=>t.shortcut(e)||n.isRemapped(e.id)||e.id===i)),c=S([t.commands,n.layers],e=>{let t=n.conflicts(e);return t.length?t:void 0}),l=(e,r)=>{n.remap(e.id,r),i.set(void 0);let a=n.sharing(e.id,r,t.commands.value);o.set(`${e.title}: ${oe(r)}${a.length?`, also used by ${a.map(e=>e.title).join(` and `)}`:``}.`)};return p(M,{edge:!0,class:B.help,contentClass:B.content,"aria-label":`Help`,children:[e.intro?.(),d(b,{when:c,children:e=>p(`section`,{class:B.conflicts,"aria-label":`Shortcut conflicts`,children:[d(k,{name:`triangle-alert`,size:14}),d(`div`,{children:e.map(e=>p(`p`,{class:B.conflict,children:[d(Tt,{input:le(e.chord)}),` is used by `,e.commands.map(e=>e.title).join(` and `),e.scope===`global`?``:` (in ${e.scope})`,`: only the first that can run takes it.`]}))})]})}),d(x,{each:e.bindings,children:e=>d(wt,{title:e.title,bindings:e.bindings})}),d(wt,{title:`Everywhere`,bindings:Et()}),p(`section`,{class:B.group,"aria-label":`Commands`,children:[p(`div`,{class:B.headingRow,children:[d(`h3`,{class:B.heading,children:`Commands`}),d(I,{size:`xs`,variant:`ghost`,pressed:r.asReadonly,onClick:()=>{r.set(!r.value),i.set(void 0)},children:`Change keys`})]}),d(`dl`,{class:B.list,children:d(x,{each:s,children:e=>d(Ct,{manager:t,command:e,editing:r.asReadonly,recording:a.key(e.id),onRecord:()=>i.set(e.id),onRecorded:t=>t?l(e,t):i.set(void 0),onChanged:e=>o.set(e)})},e=>e.id)}),d(b,{when:S(r.asReadonly,e=>e?!0:void 0),children:()=>p(`div`,{class:B.editBar,children:[d(je,{size:`sm`,"aria-label":`Give a key to a command`,options:[[``,`Give a key to…`],...t.commands.value.filter(e=>!t.shortcut(e)).map(e=>[e.id,e.title]).sort((e,t)=>e[1].localeCompare(t[1]))],value:``,onChange:e=>e&&i.set(e)}),d(I,{size:`xs`,variant:`ghost`,onClick:()=>(n.resetAll(),o.set(`Every key is back to its default.`)),children:`Reset all`})]})}),d(`span`,{class:B.srOnly,role:`status`,"aria-live":`polite`,children:o.asReadonly})]})]})}function Ct(e){let{manager:t,command:n}=e,r=t.keymap,i=S(r.layers,()=>({chord:t.shortcut(n),remapped:r.isRemapped(n.id)})),a=ue();return p(`div`,{class:B.row,children:[d(`dt`,{class:B.action,children:n.title}),p(`dd`,{class:B.input,children:[d(b,{when:S(e.recording,e=>e?!0:void 0),fallback:()=>d(b,{when:S(i,e=>e.chord),fallback:()=>d(`span`,{class:B.or,children:`no key`}),children:e=>d(Tt,{input:le(e,a)})}),children:()=>d(`span`,{class:B.recorder,tabIndex:0,role:`button`,"aria-label":`Press the new keys for ${n.title}; Escape cancels`,ref:e=>setTimeout(()=>e.isConnected&&e.focus()),onBlur:()=>e.onRecorded(void 0),onKeyDown:t=>{if(t.preventDefault(),t.stopPropagation(),t.key===`Escape`)return e.onRecorded(void 0);let n=ce(t,a);n&&e.onRecorded(n)},children:`Press keys…`})}),d(b,{when:S(e.editing,e=>e?!0:void 0),children:()=>p(`span`,{class:B.edit,children:[d(I,{size:`xs`,variant:`ghost`,title:`Change the key of ${n.title}`,onClick:()=>e.onRecord(),children:`Change`}),d(b,{when:S(i,e=>e.chord?!0:void 0),children:()=>d(I,{size:`xs`,variant:`ghost`,title:`Remove the key of ${n.title}`,onClick:()=>{r.remap(n.id,null),e.onChanged(`${n.title}: no key.`)},children:`Clear`})}),d(b,{when:S(i,e=>e.remapped?!0:void 0),children:()=>d(I,{size:`xs`,variant:`ghost`,title:`Back to the default key of ${n.title}`,onClick:()=>{r.reset(n.id);let t=r.defaultShortcut(n);e.onChanged(`${n.title}: ${t?oe(t,a):`no key`} again.`)},children:`Reset`})})]})})]})]})}function wt(e){return p(`section`,{class:B.group,"aria-label":e.title,children:[d(`h3`,{class:B.heading,children:e.title}),d(`dl`,{class:B.list,children:e.bindings.map(e=>p(`div`,{class:B.row,children:[d(`dt`,{class:B.action,children:e.action}),p(`dd`,{class:B.input,children:[d(Tt,{input:e.input}),e.or?p(c,{children:[d(`span`,{class:B.or,children:`or`}),d(Tt,{input:e.or})]}):null]})]}))})]})}function Tt(e){return d(`span`,{class:B.keys,children:e.input.map(e=>d(`kbd`,{class:B.key,children:e}))})}var Et;function Dt(){return(Dt=e((()=>{se(),Le(),O(),he(),Me(),y(),ke(),D(),C(),xt(),m(),Et=()=>[{action:`Command menu`,input:le({key:`k`,mod:!0}),or:le({key:`p`,mod:!0,shift:!0})},{action:`Help (this card)`,input:[`?`]},{action:`Close a menu, a card or the command menu`,input:[`Esc`]}]})))()}var V;function Ot(){return(Ot=e((()=>{v(),V={empty:`msp-shell-log-view-empty`,entry:`msp-shell-log-view-entry`,kind:`msp-shell-log-view-kind`,log:`msp-shell-log-view-log`,text:`msp-shell-log-view-text`,time:`msp-shell-log-view-time`},_(`views/shell/log-view.module.css`,`@layer msp.components {
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
`)})))()}var H;function kt(){return(kt=e((()=>{v(),H={announce:`msp-shell-canvas-announce`,bar:`msp-shell-canvas-bar`,bottom:`msp-shell-canvas-bottom`,bottomGrid:`msp-shell-canvas-bottomGrid`,busy:`msp-shell-canvas-busy`,"busy-in":`msp-shell-canvas-busy-in`,"busy-slide":`msp-shell-canvas-busy-slide`,"busy-spin":`msp-shell-canvas-busy-spin`,busyActions:`msp-shell-canvas-busyActions`,busyBar:`msp-shell-canvas-busyBar`,busyCard:`msp-shell-canvas-busyCard`,busyHead:`msp-shell-canvas-busyHead`,busyLabel:`msp-shell-canvas-busyLabel`,busyPercent:`msp-shell-canvas-busyPercent`,busySpin:`msp-shell-canvas-busySpin`,busyTrack:`msp-shell-canvas-busyTrack`,caption:`msp-shell-canvas-caption`,card:`msp-shell-canvas-card`,"card-in":`msp-shell-canvas-card-in`,cardBody:`msp-shell-canvas-cardBody`,cardBodyContent:`msp-shell-canvas-cardBodyContent`,cardBodyFill:`msp-shell-canvas-cardBodyFill`,cardHeader:`msp-shell-canvas-cardHeader`,cardTitle:`msp-shell-canvas-cardTitle`,chip:`msp-shell-canvas-chip`,context:`msp-shell-canvas-context`,corner:`msp-shell-canvas-corner`,countdown:`msp-shell-canvas-countdown`,face:`msp-shell-canvas-face`,folded:`msp-shell-canvas-folded`,frame:`msp-shell-canvas-frame`,lead:`msp-shell-canvas-lead`,menuMark:`msp-shell-canvas-menuMark`,message:`msp-shell-canvas-message`,pill:`msp-shell-canvas-pill`,"pill-in":`msp-shell-canvas-pill-in`,pillButton:`msp-shell-canvas-pillButton`,pillMain:`msp-shell-canvas-pillMain`,progress:`msp-shell-canvas-progress`,railMenu:`msp-shell-canvas-railMenu`,railMenuAnchor:`msp-shell-canvas-railMenuAnchor`,railMenuButton:`msp-shell-canvas-railMenuButton`,railMenuDivider:`msp-shell-canvas-railMenuDivider`,railMenuList:`msp-shell-canvas-railMenuList`,railToggle:`msp-shell-canvas-railToggle`,sections:`msp-shell-canvas-sections`,spin:`msp-shell-canvas-spin`,stack:`msp-shell-canvas-stack`,stackTools:`msp-shell-canvas-stackTools`,status:`msp-shell-canvas-status`,text:`msp-shell-canvas-text`,tool:`msp-shell-canvas-tool`,"tool-menu-in":`msp-shell-canvas-tool-menu-in`,toolMenu:`msp-shell-canvas-toolMenu`,toolMenuCard:`msp-shell-canvas-toolMenuCard`,toolMenuCheck:`msp-shell-canvas-toolMenuCheck`,toolMenuChevron:`msp-shell-canvas-toolMenuChevron`,toolMenuDivider:`msp-shell-canvas-toolMenuDivider`,toolMenuHeading:`msp-shell-canvas-toolMenuHeading`,toolMenuHint:`msp-shell-canvas-toolMenuHint`,toolMenuLabel:`msp-shell-canvas-toolMenuLabel`,toolMenuRow:`msp-shell-canvas-toolMenuRow`,toolMenuScroll:`msp-shell-canvas-toolMenuScroll`,toolMenuScrollContent:`msp-shell-canvas-toolMenuScrollContent`,toolSubmenu:`msp-shell-canvas-toolSubmenu`,toolbar:`msp-shell-canvas-toolbar`,toolbarSlot:`msp-shell-canvas-toolbarSlot`},_(`views/shell/canvas.module.css`,`@layer msp.components {
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

.msp-shell-canvas-bar, .msp-shell-canvas-folded {
  min-width: 0;
}
}
`)})))()}var At;function jt(){return(jt=e((()=>{v(),At={keys:`msp-context-menu-keys`,menu:`msp-context-menu-menu`,row:`msp-context-menu-row`},_(`components/context-menu/context-menu.module.css`,`@layer msp.components {
.msp-context-menu-menu {
  z-index: var(--msp-z-overlay);
  min-width: 180px;
  padding: var(--msp-space-2);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-glass-panel-bg);
  box-shadow: var(--msp-glass-shadow);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  display: grid;
  position: fixed;
  top: 0;
  left: 0;
}

.msp-context-menu-row {
  align-items: center;
  gap: var(--msp-space-3);
  height: 28px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  text-align: left;
  grid-template-columns: 15px 1fr auto;
  display: grid;

  &:hover, &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &:disabled {
    opacity: .55;
  }
}

.msp-context-menu-keys {
  color: var(--msp-color-text-subtle);
  font-family: inherit;
  font-size: var(--msp-font-size-xs);
}
}
`)})))()}function Mt(e,t,n,r){let i=!1,a=()=>{},o=xe(),c=()=>{i||(i=!0,a(),o(f),f.remove(),r?.())},l=e=>{P(e,f)||c()},u=t=>{t.key===`Escape`&&(P(t,f)||F(e,t))&&(t.preventDefault(),t.stopPropagation(),c())},f;s(e=>{a=e,f=d(`div`,{class:At.menu,role:`menu`,onKeyDown:N,onContextMenu:e=>e.preventDefault(),children:n.map(e=>p(`button`,{type:`button`,role:`menuitem`,class:At.row,disabled:!!e.disabled,title:e.disabled,onClick:()=>{c(),e.run()},children:[e.icon?d(k,{name:e.icon,size:15}):d(`span`,{}),d(`span`,{children:e.label}),e.shortcut?d(`kbd`,{class:At.keys,children:e.shortcut}):d(`span`,{})]}))}),j(document,`pointerdown`,l,{capture:!0}),j(document,`keydown`,u,{capture:!0}),j(window,`resize`,c),j(window,`scroll`,c,{capture:!0})}),e.append(f);let m=f.offsetWidth,ee=f.offsetHeight,h=t.x+m>window.innerWidth-4?Math.max(4,t.x-m):t.x,g=t.y+ee>window.innerHeight-4?Math.max(4,t.y-ee):t.y;return f.style.transform=`translate(${Math.round(h)}px, ${Math.round(g)}px)`,f.querySelector(`button:not(:disabled)`)?.focus({preventScroll:!0}),c}function Nt(){return(Nt=e((()=>{ge(),a(),A(),O(),jt(),m()})))()}var U;function Pt(){return(Pt=e((()=>{v(),U={band:`msp-shell-dock-band`,barTab:`msp-shell-dock-barTab`,body:`msp-shell-dock-body`,bodyContent:`msp-shell-dock-bodyContent`,bottom:`msp-shell-dock-bottom`,collapsedBar:`msp-shell-dock-collapsedBar`,compact:`msp-shell-dock-compact`,content:`msp-shell-dock-content`,dock:`msp-shell-dock-dock`,floating:`msp-shell-dock-floating`,floatingBottom:`msp-shell-dock-floatingBottom`,floatingLeft:`msp-shell-dock-floatingLeft`,floatingRight:`msp-shell-dock-floatingRight`,floatingTop:`msp-shell-dock-floatingTop`,frameless:`msp-shell-dock-frameless`,header:`msp-shell-dock-header`,left:`msp-shell-dock-left`,pin:`msp-shell-dock-pin`,rail:`msp-shell-dock-rail`,"rail-menu-in":`msp-shell-dock-rail-menu-in`,railFoot:`msp-shell-dock-railFoot`,railMenu:`msp-shell-dock-railMenu`,railMenuRows:`msp-shell-dock-railMenuRows`,railMenuScroll:`msp-shell-dock-railMenuScroll`,right:`msp-shell-dock-right`,splitter:`msp-shell-dock-splitter`,strip:`msp-shell-dock-strip`,tab:`msp-shell-dock-tab`,title:`msp-shell-dock-title`,top:`msp-shell-dock-top`},_(`views/shell/dock.module.css`,`@layer msp.components {
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
`)})))()}function Ft(e){return W.find(t=>e>=t.min)??W[W.length-1]}function It(e,t){let n=Ft(t);if(t<=0)return{step:n,hidden:Bt};let r=(e,t)=>{let r=new Set(e.map(e=>e.section)),i=0;for(let t of e)i+=t.captioned?n.captioned:n.button;return t&&(i+=n.button,r.add(`more`)),i+Math.max(0,r.size-1)};if(r(e,!1)<=t)return{step:n,hidden:Bt};let i=e.map((e,t)=>({e,i:t})).sort((e,t)=>t.e.priority-e.e.priority||t.i-e.i).map(e=>e.e),a=new Set,o=e;for(let e of i)if(a.add(e.id),o=o.filter(t=>t!==e),r(o,!0)<=t)break;return{step:n,hidden:a}}function Lt(e){let t=[];for(let n of e){let e=n.group,r=t.find(t=>t.group===e);r?r.items.push(n):t.push({group:e,items:[n]})}return t.sort((e,t)=>e.group===void 0?-1:+(t.group===void 0))}function Rt(e,t){let n=(e,t)=>({id:`tab:${e.id}`,section:t,priority:e.priority,captioned:!1,kind:`tab`,tab:e}),r=(e,t)=>({id:`tool:${e.id}`,section:t,priority:e.priority,captioned:!!e.caption,kind:`tool`,item:e}),i=[];for(let t of e.filter(e=>e.place===`head`))i.push(n(t,`head`));for(let t of e.filter(e=>!e.place||e.place===`strip`))i.push(n(t,`strip`));let a=Lt(t);for(let e of a)if(e.group!==void 0)for(let t of e.items)i.push(r(t,`group:${e.group}`));for(let t of e.filter(e=>e.place===`foot`))i.push(n(t,`foot`));for(let e of a)if(e.group===void 0)for(let t of e.items)i.push(r(t,`lead`));return i.map((e,t)=>e.priority===void 0?{...e,priority:t}:e)}function zt(e){let t=T([]),n=new Map,i=[],a=()=>t.set(i.filter(e=>!e.visible||n.get(e.visible)?.on===!0)),s=()=>{for(let e of n.values())e.stop();n.clear()};return o(e,e=>{i=e;let t=new Set;for(let r of e){let e=r.visible;if(!e||(t.add(e),n.has(e)))continue;let i={on:void 0,stop:()=>{}};n.set(e,i);let o=!0,s=e.subscribe(e=>{i.on=e,o||a()});o=!1,i.stop=()=>s.unsubscribe()}for(let[e,r]of n)t.has(e)||(r.stop(),n.delete(e));a()}),te(e=>{e||s()}),r(s),t.asReadonly}var W,Bt,Vt,Ht,Ut;function Wt(){return(Wt=e((()=>{a(),A(),D(),C(),W=[{name:`normal`,min:620,button:40,captioned:46},{name:`compact`,min:530,button:34,captioned:40},{name:`small`,min:0,button:30,captioned:36}],Bt=new Set,Vt=(e,t)=>e.size===t.size&&[...e].every(e=>t.has(e)),Ht=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]),Ut=class{constructor(e,t){this.height=T(0),this.menu=T(void 0);let n=zt(S(e.toolbar,e=>e.filter(e=>e.place!==`canvas`)));this.entries=S([t.tabs,n],(e,t)=>Rt(e,t));let r=S([this.entries,this.height.asReadonly],(e,t)=>({entries:e,fit:It(e,t)}));this.hidden=S(r,e=>e.fit.hidden,Vt),this.overflow=S(r,e=>e.entries.filter(t=>e.fit.hidden.has(t.id)),Ht)}toggleMenu(e,t){let n=this.menu.value;if(n&&n.anchor===e)return this.menu.set(void 0);let r=this.#e?.parentElement,i=r?r.getBoundingClientRect().bottom-e.getBoundingClientRect().bottom:0;this.menu.set({bottom:i,anchor:e,...t?{item:t}:{}})}#e;observe(e){this.#e=e;let t=pe(e,e=>{let t=Math.round(e[e.length-1].contentRect.height);t!==this.height.value&&this.height.set(t)});return()=>t?.disconnect()}}})))()}function G(e){let t=d(`div`,{class:e.class,style:`display: contents`}),i=e.renderer.mount(t,e.ctx,n(`ViewHost`));return r(i),t}function Gt(){return(Gt=e((()=>{a(),m()})))()}function K(e,t){let n=an.get(t);if(n)return n;let r=S(t.state,e=>e,(e,t)=>e.size===t.size&&e.pinned===t.pinned&&e.floating===t.floating),i=S(r,e=>e.size),a=t.id===`right`?S([t.state,e.overlay],(e,t)=>t||e.collapsed?void 0:e.active):S(t.state,e=>e.collapsed?void 0:e.active);return n={size:i,sizePx:S(i,e=>`${e}px`),pinned:S(r,e=>e.pinned),floating:S(r,e=>e.floating),selected:Oe(a)},an.set(t,n),n}function Kt(e){let{shell:t,dock:n}=e,i=n.id===`top`||n.id===`bottom`,a=S(n.tabs,e=>e.length>0),o=S(t.mode,e=>e===`compact`&&n.id===`right`),s=S([n.tabs,o],(e,t)=>t&&e.some(e=>e.compactBar)?e.filter(e=>e.compactBar):e),c=!i||S([n.tabs,n.active],(e,t)=>e.length>1&&!!t),l=ye(`msp-panel`),u;return d(b,{when:a,children:()=>p(`div`,{class:`${U.dock} ${U[n.id]}`,classList:{[U.compact]:o},style:{"--msp-dock-size":K(t,n).sizePx},ref:e=>{u=e},children:[d(b,{when:n.active,reveal:!0,swap:()=>u,fallback:i?()=>d(Zt,{shell:t,dock:n}):void 0,children:e=>d(nn,{shell:t,dock:n,tab:e,id:l})}),d(b,{when:c,children:()=>p(`div`,{class:U.strip,children:[d(`div`,{role:`tablist`,"aria-label":`Panels`,"aria-orientation":S(o,e=>e||i?`horizontal`:`vertical`),style:`display: contents`,ref:e=>r(ve(e)),children:d(x,{each:s,children:e=>d(en,{shell:t,dock:n,tab:e,panel:l})})}),e.stripEnd]})})]})})}function qt(e){let{shell:t,dock:n}=e,i={"--msp-dock-size":K(t,n).sizePx},a=new Ut(t,n),o=S([n.tabs,a.hidden],(e,t)=>t.size?e.filter(e=>!t.has(`tab:${e.id}`)):e),s=S(o,e=>e.filter(e=>e.place===`head`),w),c=S(o,e=>e.filter(e=>!e.place||e.place===`strip`),w),l=S(o,e=>e.filter(e=>e.place===`foot`),w),u=ye(`msp-panel`);if(n.id===`top`||n.id===`bottom`)return d(`div`,{class:`${U.floating} ${n.id===`top`?U.floatingTop:U.floatingBottom}`,classList:{[U.band]:S(n.active,e=>e?.frame===`none`)},style:i,children:d(b,{when:n.active,reveal:`fade`,children:e=>d(nn,{shell:t,dock:n,tab:e,id:u})})});let f=S(a.height.asReadonly,e=>`${(e>0?Ft(e):W[0]).button}px`),m=p(`div`,{class:`${U.floating} ${n.id===`left`?U.floatingLeft:U.floatingRight}`,style:{...i,"--msp-rail-head":f},children:[p(`div`,{class:`${U.rail} ${H.frame}`,ref:e=>{r(a.observe(e))},children:[e.railLead,d(b,{when:S(s,e=>e.length>0),children:()=>d(`div`,{class:U.strip,role:`tablist`,"aria-orientation":`vertical`,"aria-label":`Home`,ref:e=>r(ve(e)),children:d(x,{each:s,children:e=>d(en,{shell:t,dock:n,tab:e,panel:u})})})}),d(b,{when:S(c,e=>e.length>0),children:()=>d(`div`,{class:U.strip,role:`tablist`,"aria-orientation":`vertical`,"aria-label":`Panels`,ref:e=>r(ve(e)),children:d(x,{each:c,children:e=>d(en,{shell:t,dock:n,tab:e,panel:u})})})}),e.railItems?.(a),d(Yt,{shell:t,dock:n,rail:a,root:()=>m}),p(`div`,{class:U.railFoot,children:[d(b,{when:S(l,e=>e.length>0),children:()=>d(`div`,{class:U.strip,role:`tablist`,"aria-orientation":`vertical`,"aria-label":`More panels`,ref:e=>r(ve(e)),children:d(x,{each:l,children:e=>d(en,{shell:t,dock:n,tab:e,panel:u})})})}),e.railFoot?.(a)]})]}),d(b,{when:n.active,reveal:`side`,swap:()=>m,children:e=>d(nn,{shell:t,dock:n,tab:e,id:u,pinnable:!0,coveredBy:t.overlay})}),d(Xt,{shell:t,dock:n,rail:a})]});return m}function Jt(e,t,n){t.id===`right`&&e.overlay.value?(e.closeOverlay(),e.show(n.id)):e.select(n.id)}function Yt(e){let{rail:t}=e,n=t.menu;return d(b,{when:S(t.overflow,e=>e.length>0),children:()=>(r(()=>n.set(void 0)),d(`nav`,{class:U.strip,"aria-label":`More buttons`,children:d(`button`,{type:`button`,class:U.tab,"data-tip":`More`,"data-tip-side":`left`,"aria-label":`More`,"aria-haspopup":`menu`,"aria-expanded":S(n.asReadonly,e=>!!e),onClick:e=>t.toggleMenu(e.currentTarget),onKeyDown:e=>{e.key!==`ArrowDown`&&e.key!==`ArrowUp`||n.value||(e.preventDefault(),e.currentTarget.click())},children:d(k,{name:`ellipsis`,size:20})})}))})}function Xt(e){let{shell:t,dock:n,rail:i}=e,a=i.menu,o=S([a.asReadonly,i.overflow],(e,t)=>e&&(e.item?e.item.menu?.length:t.length>0)?e:void 0),s=(e,r)=>{if(a.set(void 0),e.tab)return Jt(t,n,e.tab);let i=e.item;i.overlay?t.toggleOverlay(i.overlay,r):i.run?.(r)};return j(document,`keydown`,e=>{if(e.key!==`Escape`||!a.value||!F(a.value.anchor,e))return;let t=a.value.anchor;a.set(void 0),t.focus(),e.preventDefault()}),j(document,`pointerdown`,e=>{let t=a.value;if(!t)return;let n=Ae(e);P(e,t.anchor)||n.closest?.(`.${U.railMenu}`)||a.set(void 0)}),d(b,{when:o,children:e=>{let t=xe(()=>e.anchor),n;return r(()=>t(n)),d(`div`,{class:U.railMenu,style:{bottom:`${e.bottom}px`},children:d(`div`,{class:H.toolMenuCard,role:`menu`,"aria-label":e.item?q(e.item):`More`,onKeyDown:N,ref:e=>{n=e,queueMicrotask(()=>Se(e))},children:d(M,{class:U.railMenuScroll,contentClass:U.railMenuRows,children:e.item?d(pn,{items:e.item.menu,onRun:()=>a.set(void 0)}):d(x,{each:i.overflow,children:t=>p(`button`,{type:`button`,role:`menuitem`,class:H.toolMenuRow,onClick:n=>s(t,e.anchor),children:[t.tab?d(k,{name:t.tab.icon,size:16}):d(cn,{item:t.item,size:16}),d(`span`,{class:H.toolMenuLabel,children:t.tab?t.tab.title:q(t.item)}),d(`span`,{})]})},e=>e.id)})})})}})}function Zt(e){let{shell:t,dock:n}=e;return d(`div`,{class:U.collapsedBar,children:d(x,{each:n.tabs,children:e=>p(`button`,{type:`button`,class:U.barTab,onClick:()=>t.show(e.id),title:`Show ${e.title}`,children:[d(k,{name:n.id===`top`?`chevron-down`:`chevron-up`,size:14}),e.title]})})})}function Qt(e,t){return[{id:`hide`,label:`Hide ${t.title}`,icon:`eye-off`,run:()=>e.hideTab(t.id)},...e.hiddenTabs.value.map(t=>({id:`show:${t.id}`,label:`Show ${t.title}`,icon:`eye`,run:()=>e.showTab(t.id)})),{id:`reset`,label:`Reset layout`,icon:`rotate-ccw`,run:()=>e.resetLayout()}]}function $t(e,t,n,r){let i=n.closest(`.msp-root`)??document.body,a=n.getBoundingClientRect();Mt(i,r??{x:a.left,y:a.bottom},Qt(e,t))}function en(e){let{shell:t,dock:n,tab:r}=e,i=K(t,n).selected.key(r.id);return d(`button`,{type:`button`,role:`tab`,class:U.tab,"data-tip":r.title,"data-tip-side":`left`,"aria-label":r.title,"aria-selected":i,"aria-controls":e.panel,"data-tab":r.id,onClick:()=>Jt(t,n,r),onContextMenu:e=>{e.preventDefault(),$t(t,r,e.currentTarget,{x:e.clientX,y:e.clientY})},onKeyDown:e=>{(e.key===`ContextMenu`||e.shiftKey&&e.key===`F10`)&&(e.preventDefault(),$t(t,r,e.currentTarget))},children:d(k,{name:r.icon,size:20})})}function tn(e){let{shell:t}=e,n=t.dock(e.dock),r=S(t.mode,e=>e!==`embedded`&&e!==`compact`);return d(b,{when:r,children:()=>d(I,{variant:`ghost`,size:`sm`,class:U.pin,icon:d(k,{name:`pin`}),title:`Pin beside the canvas`,pressed:K(t,n).pinned,onClick:()=>t.setPinned(e.dock,!n.state.value.pinned)})})}function nn(e){let{shell:t,dock:n,tab:i}=e,a=!e.coveredBy||S(e.coveredBy,e=>!e),o,s=!1,c=e=>{let t=e.relatedTarget;if(t){s=!!o?.contains(t);return}let n=Ae(e);queueMicrotask(()=>{let e=De();e&&o?.contains(e)||n.isConnected&&!n.closest(`[inert]`)&&(s=!1)})};return r(()=>{if(!s)return;let e=De();if(e&&!o?.contains(e))return;let t=o?.closest(`.msp-root`)??o?.getRootNode();(t?[...t.querySelectorAll(`[role="tab"]`)]:[]).find(e=>e.dataset.tab===i.id)?.focus({preventScroll:!0})}),ne(a,()=>p(`section`,{class:i.frame===`none`?`${U.content} ${U.frameless}`:U.content,role:`tabpanel`,id:e.id,"aria-label":i.title,"data-msp-scope":`panel:${i.id}`,ref:e=>{o=e},onFocusIn:()=>{s=!0},onFocusOut:c,children:[d(rn,{shell:t,dock:n}),p(`header`,{class:U.header,children:[d(`h2`,{class:U.title,children:typeof i.heading==`function`?i.heading():i.heading??i.title}),e.pinnable?d(tn,{shell:t,dock:n.id}):null,d(I,{variant:`ghost`,size:`sm`,icon:d(k,{name:`x`}),title:`Close panel`,onClick:()=>t.toggle(n.id)})]}),d(M,{class:U.body,contentClass:U.bodyContent,children:d(b,{when:S(t.tabFocus,e=>({section:e?.tab===i.id?e.section:void 0}),(e,t)=>e.section===t.section&&!t.section),children:e=>d(G,{renderer:i.render,ctx:{shell:t,dock:n.id,...e.section?{focus:e.section}:{}}})})})]}))}function rn(e){let{shell:t,dock:n}=e,r=n.id===`left`?1:-1,i=h(-1);o(i,e=>{e>=0&&t.setSize(n.id,e)});let a;return d(`div`,{class:U.splitter,role:`separator`,"aria-orientation":`vertical`,tabIndex:0,"aria-label":`Panel width`,"aria-valuenow":S(K(t,n).size,Math.round),onKeyDown:e=>{if(e.key!==`ArrowLeft`&&e.key!==`ArrowRight`)return;e.preventDefault();let i=(e.shiftKey?64:16)*(e.key===`ArrowRight`?1:-1);t.setSize(n.id,n.state.value.size+r*i)},onPointerEnter:e=>e.currentTarget.setAttribute(`data-active`,``),onPointerLeave:e=>{a?.active||e.currentTarget.removeAttribute(`data-active`)},ref:e=>{a=me(e,{start:t=>(e.setAttribute(`data-active`,``),{x:t.clientX,size:n.state.value.size}),move:(e,t)=>i.offer(t.size+r*(e.clientX-t.x)),end:(t,n,r)=>{if(n===`up`&&r){let t=e.getBoundingClientRect();if(r.clientX>=t.left&&r.clientX<=t.right&&r.clientY>=t.top&&r.clientY<=t.bottom)return}e.removeAttribute(`data-active`)}})},onDblClick:()=>t.setSize(n.id,n.id===`left`?300:340)})}var an;function on(){return(on=e((()=>{Le(),Nt(),O(),he(),y(),ge(),a(),A(),ke(),E(),C(),kt(),Pt(),Y(),Wt(),Gt(),m(),an=new WeakMap})))()}function sn(e,t){let n=i(e);if(!n)return T(e).asReadonly;if(ie(n))return n;let a=re(n,t);return r(()=>a.dispose()),a}function q(e){return e.face?S(sn(e.face,{icon:e.icon,title:e.title}),e=>e.title):e.caption?`${e.title} (${e.caption})`:e.title}function cn(e){let{item:t}=e;return t.face?d(`span`,{class:e.class,ref:n=>u(t.face,t=>n.replaceChildren(k({name:t.icon,size:e.size})))}):d(k,{name:t.icon,size:e.size})}function ln(e){let{shell:t}=e,n=e.part??`all`,r=n===`canvas`,i=e.hidden?S([t.toolbar,e.hidden],(e,t)=>t.size?e.filter(e=>!t.has(`tool:${e.id}`)):e):t.toolbar,a=S(i,e=>{let t=Lt(e.filter(e=>e.place===`canvas`===r));return n===`all`||r?t:t.filter(e=>n===`lead`?e.group===void 0:e.group!==void 0)});return d(`div`,{class:H.sections,children:d(x,{each:a,children:n=>d(`div`,{class:H.toolbar,role:`toolbar`,"aria-orientation":e.menus?`horizontal`:`vertical`,"aria-label":n.group??`commands`,children:n.items.map(n=>n.visible?d(b,{when:n.visible,children:()=>d(dn,{shell:t,item:n,menus:e.menus,railMenu:e.railMenu})}):d(dn,{shell:t,item:n,menus:e.menus,railMenu:e.railMenu}))})},e=>e.group??``)})}function un(e,t){let n=sn(t.pressed??!1,!1),r=t.overlay;return r?S([e.overlay,n],(e,t)=>e?.overlay.id===r||t):n}function dn(e){let{shell:t,item:n,menus:r}=e,i=!r&&n.menu?.length?e.railMenu:void 0,a=r&&n.menu?.length?r:void 0,o=n.pressed||n.overlay?un(t,n):void 0,s=q(n),c=a?S(a.open.asReadonly,e=>e?.item===n):void 0;return p(`button`,{type:`button`,class:H.tool,"data-captioned":n.caption?``:void 0,"data-tip":a?void 0:s,"data-tip-side":n.place===`canvas`?`top`:`left`,"aria-label":s,"aria-pressed":o,"aria-haspopup":a||i?`menu`:void 0,"aria-expanded":c,"data-overlay-trigger":n.overlay?``:void 0,"data-keeps-card":n.keepsCard?``:void 0,onClick:e=>{if(a&&!n.overlay&&!n.run)return a.show(n,e.currentTarget,e.detail===0);if(a&&On())return a.open.value?.item===n?a.hide():a.show(n,e.currentTarget,e.detail===0);if(i)return i(n,e.currentTarget);a?.hide(),n.overlay?t.toggleOverlay(n.overlay,e.currentTarget):n.run?.(e.currentTarget)},onKeyDown:a?e=>{(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),a.show(n,e.currentTarget,!0))}:void 0,onPointerEnter:a?e=>e.pointerType===`mouse`&&a.show(n,e.currentTarget):void 0,onPointerLeave:a?()=>a.hideSoon():void 0,onBlur:a?()=>a.hideSoon():void 0,children:[d(cn,{item:n,size:n.caption?16:20,class:H.face}),n.caption?d(`span`,{class:H.caption,children:n.caption}):null,a?d(`span`,{class:H.menuMark,"aria-hidden":`true`}):null]})}function fn(e,t){let n=e.menu??[];return!e.run||!On()?n:[{id:`${e.id}:self`,label:e.title,icon:e.icon,group:``,run:()=>e.run?.(t)},...n]}function pn(e){let{onSubmenu:t}=e;return d(c,{children:e.items.map((n,r,i)=>p(c,{children:[r>0&&n.group!==i[r-1].group?d(`div`,{class:H.toolMenuDivider,role:`separator`}):null,n.items&&!t?p(c,{children:[d(`div`,{class:H.toolMenuHeading,role:`presentation`,children:n.label}),d(b,{when:n.items,children:t=>d(pn,{items:t,onRun:e.onRun})})]}):n.items&&t?p(`button`,{type:`button`,role:`menuitem`,"aria-haspopup":`menu`,class:H.toolMenuRow,disabled:!!n.disabled,onPointerEnter:e=>t(n,e.currentTarget),onClick:e=>t(n,e.currentTarget,!0),onKeyDown:e=>{e.key===`ArrowRight`&&(e.preventDefault(),t(n,e.currentTarget,!0))},children:[n.icon?d(k,{name:n.icon,size:16}):d(`span`,{}),p(`span`,{class:H.toolMenuLabel,children:[n.label,n.disabled||n.hint?d(`span`,{class:H.toolMenuHint,children:n.disabled??n.hint}):null]}),d(k,{name:`chevron-right`,size:14,class:H.toolMenuChevron})]}):p(`button`,{type:`button`,role:n.pressed?n.choice?`menuitemradio`:`menuitemcheckbox`:`menuitem`,"aria-checked":n.pressed,class:H.toolMenuRow,disabled:!!n.disabled,onPointerEnter:t?()=>t(void 0):void 0,onClick:()=>{e.onRun(),n.run()},children:[n.icon?d(k,{name:n.icon,size:16}):d(`span`,{}),p(`span`,{class:H.toolMenuLabel,children:[n.label,n.disabled||n.hint?d(`span`,{class:H.toolMenuHint,children:n.disabled??n.hint}):null]}),n.pressed?d(b,{when:n.pressed,children:()=>d(k,{name:`check`,size:14,class:H.toolMenuCheck})}):null]})]}))})}function mn(e,t,n){let r=t.pressed||t.overlay?un(e,t):void 0,i=()=>{t.overlay?e.toggleOverlay(t.overlay,n()):t.run?.(n())},a={id:t.id,label:t.title,icon:t.icon,group:t.group??``},o=t.menu??[];if(!o.length)return{...a,...r?{pressed:r}:{},run:i};let s=(t.run||t.overlay)&&!o.some(e=>e.label===t.title)?[{id:`${t.id}:self`,label:t.title,icon:t.icon,group:``,...r?{pressed:r}:{},run:i}]:[];return{...a,run:()=>{},items:T([...s,...o]).asReadonly}}function hn(e,t,r){let i=n(`collapsedRows`),a=new Map,o=t=>{let n=a.get(t);if(!n){let o=i.child();a.set(t,n={row:g(o,()=>mn(e,t,r)),scope:o})}return n.row},s=zt(S(e.toolbar,e=>Lt(e.filter(e=>e.place===`canvas`)).flatMap(e=>e.items)));return S([sn(t??[],[]),s],(e,t)=>{let n=[...e.map(e=>({...e,group:e.group??`lead`})),...t.map(o)];if(a.size>t.length){let e=new Set(t);for(let[t,n]of a)e.has(t)||(n.scope.dispose(),a.delete(t))}return n})}function gn(e){let{shell:t}=e,n=new An,i,a,o={rows:hn(t,e.leadMenu,()=>a??i)},s=t.toolbarCollapsed,c=ne(S(s,e=>!e),()=>p(`div`,{class:H.bar,children:[d(`div`,{class:H.frame,children:p(M,{axis:`x`,contentClass:H.stackTools,children:[e.lead,d(ln,{shell:t,part:`canvas`,menus:n})]})}),e.aside]})),l=S(o.rows,e=>e.length>0),f=p(`div`,{class:H.stack,"data-quiet":e.quiet===void 0?void 0:S(sn(e.quiet,!1),e=>e?``:void 0),children:[c,d(b,{when:s,children:()=>d(b,{when:l,children:()=>d(`div`,{class:`${H.frame} ${H.folded}`,children:d(_n,{menus:n,popup:o,ref:e=>{a=e}})})})}),d(vn,{menus:n})]});return i=f,u(s,e=>{c.toggleAttribute(`hidden`,e),n.hide()}),n.stack=f,r(()=>n.dispose()),f}function _n(e){let{menus:t,popup:n}=e,r=S(t.open.asReadonly,e=>e?.item===J);return p(`button`,{type:`button`,class:H.tool,"data-stack-collapsed":``,"aria-label":`Toolbar`,"aria-haspopup":`menu`,"aria-expanded":r,ref:e.ref,onClick:e=>{if(On()&&t.open.value?.item===J)return t.hide();t.show(J,e.currentTarget,e.detail===0,n)},onKeyDown:e=>{(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),t.show(J,e.currentTarget,!0,n))},onPointerEnter:e=>e.pointerType===`mouse`&&t.show(J,e.currentTarget,!1,n),onPointerLeave:()=>t.hideSoon(),onBlur:()=>t.hideSoon(),children:[d(k,{name:`wrench`,size:18}),d(`span`,{class:H.menuMark,"aria-hidden":`true`})]})}function vn(e){let{menus:t}=e;return j(document,`keydown`,e=>{e.key===`Escape`&&!e.defaultPrevented&&t.open.value&&(!t.stack||F(t.stack,e))&&(t.hide(),e.preventDefault())}),j(document,`pointerdown`,e=>{let n=t.open.value;if(!n)return;let r=e.composedPath();t.menu&&r.includes(t.menu)||r.includes(n.button)||t.hide()},{capture:!0}),d(b,{when:t.open,children:e=>{let n=!1,i;r(()=>{if(t.menu===i&&(t.menu=void 0),!n)return;let r=De();(!r||i?.contains(r))&&e.button.focus({preventScroll:!0})});let a=T(void 0),o,s=(e,n,r=!1)=>{if(!e||!n||!i){a.value&&a.set(void 0);return}let s=n.getBoundingClientRect().bottom,c=Math.round(i.getBoundingClientRect().bottom-s),l=t.roomAbove(t.stack,s);(a.value?.item!==e||a.value.bottom!==c||a.value.room!==l)&&a.set({item:e,row:n,bottom:c,room:l}),r&&queueMicrotask(()=>o&&Se(o))},l=e=>{if(e.key===`ArrowLeft`||e.key===`Escape`){e.preventDefault();let t=a.value?.row;a.set(void 0),t?.focus({preventScroll:!0})}else N(e)};return p(`div`,{class:H.toolMenu,style:{right:`${e.right}px`,...e.room?{"--msp-menu-room":`${e.room}px`}:{}},role:`menu`,"aria-label":e.item.title,ref:e=>{i=e,t.menu=e},onPointerEnter:()=>t.keep(),onPointerLeave:()=>t.hideSoon(),onFocusIn:()=>{n=!0,t.keep()},onFocusOut:()=>t.hideSoon(),children:[d(`div`,{class:H.toolMenuCard,onKeyDown:N,children:e.popup?d(c,{children:d(b,{when:e.popup.rows,children:e=>d(M,{class:H.toolMenuScroll,contentClass:H.toolMenuScrollContent,children:d(pn,{items:e,onRun:()=>t.hide(),onSubmenu:s})})})}):d(M,{class:H.toolMenuScroll,contentClass:H.toolMenuScrollContent,children:d(pn,{items:fn(e.item,e.button),onRun:()=>t.hide(),onSubmenu:s})})}),d(b,{when:a,children:e=>d(`div`,{class:H.toolSubmenu,style:{bottom:`${e.bottom}px`,...e.room?{"--msp-menu-room":`${e.room}px`}:{}},role:`menu`,"aria-label":e.item.label,ref:e=>{o=e},onKeyDown:l,children:d(`div`,{class:H.toolMenuCard,children:d(M,{class:H.toolMenuScroll,contentClass:H.toolMenuScrollContent,children:d(b,{when:e.item.items,children:e=>d(pn,{items:e,onRun:()=>t.hide()})})})})})})]})}})}function yn(e){let{shell:t}=e,n=T(!1),i=t.dock(`right`),a=S(t.toolbar,e=>e.filter(e=>e.place!==`canvas`&&!e.group)),o=S(t.toolbar,e=>e.filter(e=>e.place!==`canvas`&&e.group)),s=S(i.tabs,e=>e.some(e=>e.compactBar)?e.filter(e=>!e.compactBar):[]),c,l=(e,r)=>{n.set(!1),e.overlay?t.toggleOverlay(e.overlay,r):e.run?.(r)},u=p(`div`,{class:H.railMenu,children:[d(x,{each:a,children:e=>d(`button`,{type:`button`,class:H.railMenuButton,"aria-label":q(e),"data-tip":q(e),onClick:t=>l(e,t.currentTarget),children:d(cn,{item:e,size:20,class:H.face})})},e=>e.id),p(`div`,{class:H.railMenuAnchor,children:[d(`button`,{type:`button`,class:H.railMenuButton,"aria-label":`More`,"aria-haspopup":`menu`,"aria-expanded":n,"data-tip":`More`,onClick:e=>{n.set(!n.value),n.value&&e.detail===0&&queueMicrotask(()=>c&&Se(c))},onKeyDown:e=>{(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),n.set(!0),queueMicrotask(()=>c&&Se(c)))},children:d(k,{name:`ellipsis`,size:20})}),d(b,{when:n,children:()=>{let e=xe();return r(()=>e(c)),p(`div`,{class:H.railMenuList,role:`menu`,"aria-label":`More`,ref:e=>{c=e},onKeyDown:e=>{N(e),e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),n.set(!1))},children:[d(x,{each:s,children:e=>p(`button`,{type:`button`,role:`menuitem`,class:H.toolMenuRow,onClick:()=>{n.set(!1),t.show(e.id)},children:[d(k,{name:e.icon,size:16}),d(`span`,{class:H.toolMenuLabel,children:e.title}),d(`span`,{})]})},e=>e.id),d(b,{when:S([s,o],(e,t)=>e.length>0&&t.length>0),children:()=>d(`div`,{class:H.railMenuDivider})}),d(x,{each:o,children:e=>p(`button`,{type:`button`,role:`menuitem`,class:H.toolMenuRow,hidden:e.visible?S(sn(e.visible,!0),e=>!e):!1,onClick:t=>l(e,t.currentTarget),children:[d(cn,{item:e,size:16,class:H.face}),d(`span`,{class:H.toolMenuLabel,children:q(e)}),d(`span`,{})]})},e=>e.id)]})}})]})]});return j(document,`pointerdown`,e=>{n.value&&!P(e,u)&&n.set(!1)}),u}function bn(e){let t=S(e.status.tasks,e=>e.find(e=>e.overlay),(e,t)=>e?.id===t?.id);return d(b,{when:t,children:t=>{let n=S(e.status.tasks,e=>e.find(e=>e.id===t.id)??t),r=S(n,e=>e.progress===void 0?void 0:Math.round(e.progress*100));return d(`div`,{class:H.busy,role:`alertdialog`,"aria-modal":`true`,"aria-label":t.label,children:p(`div`,{class:H.busyCard,children:[p(`div`,{class:H.busyHead,children:[d(k,{name:`loader-circle`,size:18,class:H.busySpin}),d(`span`,{class:H.busyLabel,children:S(n,e=>e.label)}),d(`span`,{class:H.busyPercent,children:S(r,e=>e===void 0?``:`${e}%`)})]}),d(`div`,{class:H.busyTrack,role:`progressbar`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":r,children:d(`span`,{class:H.busyBar,"data-indeterminate":S(r,e=>e===void 0?``:void 0),style:{scale:S(r,e=>`${(e??30)/100} 1`)}})}),t.abort?d(`div`,{class:H.busyActions,children:d(I,{size:`sm`,onClick:()=>t.abort?.(),children:`Cancel`})}):null]})})}})}function xn(e){let{shell:t}=e,n=S(t.overlay,e=>!!e);return d(b,{when:n,children:()=>d(Sn,{shell:t})})}function Sn(e){let{shell:t}=e,n=t.overlay.value.anchor,i=xe(()=>n),a=ye(`msp-card-title`),o=S(t.dock(`right`).state,e=>e.pinned),s,c=p(`section`,{class:H.card,role:`dialog`,"aria-modal":S(o,e=>!e),"aria-labelledby":a,onKeyDown:e=>{l()||_e(e,e.currentTarget)},children:[p(`header`,{class:H.cardHeader,children:[d(`h2`,{class:H.cardTitle,id:a,children:S(t.overlay,e=>e?.overlay.title??``)}),d(tn,{shell:t,dock:`right`}),d(I,{variant:`ghost`,size:`sm`,icon:d(k,{name:`x`}),title:`Close`,onClick:()=>t.closeOverlay()})]}),d(b,{when:t.overlay,children:e=>{n=e.anchor,be(e.anchor)&&(s?.(),s=fe(()=>{s=void 0;let e=c.querySelector(`.${H.cardBody}, .${H.cardBodyFill}`),t=Ee(c);(t.find(t=>e?.contains(t))??t[t.length-1])?.focus()}));let r={shell:t,...e.focus?{focus:e.focus}:{}};return e.overlay.fill?d(`div`,{class:H.cardBodyFill,children:d(G,{renderer:e.overlay.render,ctx:r})}):d(M,{class:H.cardBody,contentClass:H.cardBodyContent,children:d(G,{renderer:e.overlay.render,ctx:r})})}})]}),l=()=>t.dock(`right`).state.value.pinned,u=document;return j(u,`keydown`,e=>{e.key!==`Escape`||e.defaultPrevented||l()||!F(c,e)||(t.closeOverlay(),e.preventDefault())}),j(u,`pointerdown`,e=>{let n=t.overlay.value;if(!n)return;let r=Ae(e);l()||n.overlay.persistent||P(e,c)||P(e,n.anchor)||r.closest?.(`[data-overlay-trigger], [role=tab]`)||r.closest?.(`[data-keeps-card], [data-msp-canvas]`)||t.closeOverlay()},{capture:!0}),r(()=>i(c)),c}function Cn(e){let{status:t}=e;return p(`div`,{class:H.status,children:[d(`div`,{class:H.announce,role:`status`,"aria-live":`polite`,children:t.spoken}),d(b,{when:t.current,children:n=>n.kind===`error`?p(`span`,{class:`${H.pill} ${H.message}`,"data-kind":n.kind,children:[p(`button`,{type:`button`,class:H.pillMain,title:`Show the log`,onClick:()=>e.onOpenLog?.(),children:[d(k,{name:jn[n.kind],size:14}),d(`span`,{class:H.text,children:n.text})]}),d(`button`,{type:`button`,class:H.pillButton,"aria-label":`Dismiss`,"data-tip":`Dismiss`,onClick:()=>t.dismiss(n.id),children:d(k,{name:`x`,size:14})})]}):p(`button`,{type:`button`,class:`${H.pill} ${H.message}`,"data-kind":n.kind,title:`Show the log`,onClick:()=>e.onOpenLog?.(),children:[d(k,{name:jn[n.kind],size:14}),d(`span`,{class:H.text,children:n.text})]})}),d(x,{each:S(t.tasks,e=>e.filter(e=>!e.overlay)),children:e=>d(En,{task:e})}),e.after]})}function wn(e){let t,n=0,i=0,a=!1,o=T(void 0),s=()=>{t&&clearTimeout(t),t=void 0},l=()=>{s(),!(a||n<=0)&&(i=performance.now(),t=setTimeout(()=>e.onDismiss?.(),n))},f=e=>{e!==a&&(a=e,e&&t&&(n-=performance.now()-i),e?s():l())};e.autoDismiss&&e.onDismiss&&(u(e.autoDismiss,e=>{s(),n=e??0,o.set(e),l()}),r(s));let m=p(c,{children:[e.icon,d(`span`,{class:H.text,children:e.text}),e.after]});return p(`span`,{class:H.pill,onPointerEnter:()=>f(!0),onPointerLeave:()=>f(!1),onFocusIn:()=>f(!0),onFocusOut:e=>{e.currentTarget.contains(e.relatedTarget)||f(!1)},children:[e.onClick?d(`button`,{type:`button`,class:H.pillMain,"aria-label":e.label,onClick:()=>e.onClick?.(),children:m}):m,e.onDismiss?p(`button`,{type:`button`,class:H.pillButton,"aria-label":e.dismissLabel??`Dismiss`,"data-tip":e.dismissLabel??`Dismiss`,onClick:()=>e.onDismiss?.(),children:[d(k,{name:`x`,size:14}),d(b,{when:o.asReadonly,children:e=>d(`svg`,{class:H.countdown,viewBox:`0 0 20 20`,"aria-hidden":`true`,style:{"--msp-countdown":`${e}ms`},children:d(`circle`,{cx:`10`,cy:`10`,r:`9`,pathLength:`100`})})})]}):null]})}function Tn(e){return p(`div`,{class:H.context,children:[e.lead,d(x,{each:e.status.chips,children:e=>p(`span`,{class:`${H.pill} ${H.chip}`,children:[d(`button`,{type:`button`,class:H.text,onClick:()=>e.activate?.(),children:e.label}),e.dismiss?d(`button`,{type:`button`,class:H.pillButton,title:`Clear`,onClick:()=>e.dismiss?.(),children:d(k,{name:`x`,size:14})}):null]})})]})}function En(e){let{task:t}=e;return p(`span`,{class:H.pill,children:[d(k,{name:`loader-circle`,size:14,class:H.spin}),d(`span`,{class:H.text,children:t.label}),t.progress===void 0?null:d(`span`,{class:H.progress,children:d(`div`,{style:{width:`${Math.round(t.progress*100)}%`}})}),t.abort?d(`button`,{type:`button`,class:H.pillButton,title:`Cancel`,onClick:()=>t.abort?.(),children:d(k,{name:`x`,size:14})}):null]})}function Dn(e){let{shell:t}=e,n=S(t.dock(`right`).tabs,e=>e.find(e=>e.place===`head`)?.icon??`prism`),r=S(t.railOpen,e=>e?`Hide the panel rail`:`Show the panel rail`);return d(`div`,{class:`${H.stack} ${H.railToggle}`,children:d(`div`,{class:H.frame,children:d(`button`,{type:`button`,class:H.tool,"data-tip":r,"data-tip-side":`top`,"aria-label":r,"aria-pressed":t.railOpen,onClick:()=>t.toggleRail(),children:d(`span`,{class:H.face,ref:e=>u(n,t=>e.replaceChildren(k({name:t,size:18})))})})})})}var On,J,kn,An,jn;function Y(){return(Y=e((()=>{Le(),O(),he(),y(),ge(),a(),A(),D(),C(),kt(),on(),Wt(),Gt(),m(),On=()=>typeof matchMedia==`function`&&matchMedia(`(hover: none)`).matches,J={id:`toolbar`,place:`canvas`,icon:`wrench`,title:`Toolbar`},kn=8,An=class{constructor(){this.open=T(void 0)}#e;show(e,t,n=!1,r){this.keep();let i=this.stack?this.stack.getBoundingClientRect().right-t.getBoundingClientRect().right:0,a=this.roomAbove(this.stack),o=this.open.value;(o?.item!==e||o.right!==i||o.room!==a)&&this.open.set({item:e,right:i,room:a,button:t,...r?{popup:r}:{}}),n&&queueMicrotask(()=>this.menu&&Se(this.menu))}roomAbove(e,t){if(!e)return 0;let n=e.closest(`[data-msp-viewport]`),r=(t??e.getBoundingClientRect().top)-(n?.getBoundingClientRect().top??0)-kn;return r>0?Math.round(r):0}keep(){this.#e!==void 0&&clearTimeout(this.#e),this.#e=void 0}hideSoon(){this.keep(),this.#e=setTimeout(()=>this.hide(),160)}hide(){this.keep(),this.open.value&&this.open.set(void 0)}dispose(){this.keep()}},jn={info:`info`,success:`circle-check`,warning:`triangle-alert`,error:`circle-alert`}})))()}function Mn(e){return d(`div`,{class:V.log,role:`log`,"aria-live":`off`,"aria-label":`Log`,children:d(x,{each:e.status.history,fallback:()=>d(`p`,{class:V.empty,children:`No messages yet.`}),children:e=>p(`div`,{class:V.entry,"data-kind":e.kind,children:[d(k,{name:jn[e.kind],size:14,class:V.kind}),d(`span`,{class:V.text,children:e.text}),d(`time`,{class:V.time,dateTime:e.time.toISOString(),children:Nn.format(e.time)})]})},e=>e.id)})}var Nn;function Pn(){return(Pn=e((()=>{O(),y(),Ot(),Y(),m(),Nn=new Intl.DateTimeFormat(void 0,{hour:`2-digit`,minute:`2-digit`,second:`2-digit`})})))()}var X;function Fn(){return(Fn=e((()=>{v(),X={canvas:`msp-shell-canvas`,canvasLayer:`msp-shell-canvasLayer`,layer:`msp-shell-layer`,shell:`msp-shell-shell`,viewport:`msp-shell-viewport`},_(`views/shell/shell.module.css`,`@layer msp.components {
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

  & > * {
    pointer-events: auto;
  }
}

.msp-shell-canvasLayer {
  right: var(--msp-canvas-pinned, 0px);
}
}
`)})))()}var In;function Ln(){return(Ln=e((()=>{v(),In={empty:`msp-shell-empty-canvas-empty`,"fade-in":`msp-shell-empty-canvas-fade-in`,"fade-out":`msp-shell-empty-canvas-fade-out`,mark:`msp-shell-empty-canvas-mark`,splash:`msp-shell-empty-canvas-splash`},_(`views/shell/empty-canvas.module.css`,`@layer msp.components {
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
`)})))()}function Rn(e){let t=T(`gone`),n=n=>{let r=t.value,i=n===`out`&&r!==`in`?`gone`:n;i!==r&&(t.set(i),i===`in`?e.onCanvasShown?.(!1):i===`out`&&e.onCanvasShown?.(!0))},r=`gone`,i=de(()=>n(r)),a=(e,t)=>{r=t,i.start(e)},s,c=!1,l=()=>{i.cancel(),s!==void 0&&(s?c||a(zn,`in`):(n(`out`),a(Vn,`gone`)))};o(e.empty,e=>{e!==s&&(s=e,l())}),e.busy!==void 0&&o(e.busy,e=>{c=e,l()}),e.onCanvasShown&&u(e.empty,t=>!t&&e.onCanvasShown?.(!0));let f=e.splash??!0,m=()=>{if(typeof f==`object`)return`light`;let t=e.field??`random`;return t===`random`?Math.random()<Bn?`quantum`:`light`:t};return d(b,{when:S(t.asReadonly,e=>e!==`gone`),children:()=>{let e=d(Ve,{scale:3,flash:`reveal`,live:!f,prism:!f,class:In.mark});return p(`div`,{class:In.empty,"data-phase":t.asReadonly,children:[f?d(`div`,{class:In.splash,children:d(Ue,{field:m(),mark:()=>e,pointer:()=>e.closest(`[data-msp-viewport]`)??e.parentElement,options:f===!0?{}:f})}):null,e]})}})}var zn,Bn,Vn;function Hn(){return(Hn=e((()=>{Be(),y(),a(),A(),D(),C(),Ln(),He(),m(),zn=700,Bn=2/3,Vn=250})))()}var Z;function Un(){return(Un=e((()=>{v(),Z={"drop-in":`msp-shell-file-drop-drop-in`,hint:`msp-shell-file-drop-hint`,overlay:`msp-shell-file-drop-overlay`,target:`msp-shell-file-drop-target`,title:`msp-shell-file-drop-title`},_(`views/shell/file-drop.module.css`,`@layer msp.components {
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
`)})))()}function Wn(e){let t=T(!1);j(e.target,`dragenter`,e=>{Gn(e)&&t.set(!0)});let n=e=>{e.preventDefault(),e.stopPropagation(),e.dataTransfer&&(e.dataTransfer.dropEffect=`copy`)};return d(`div`,{class:Z.overlay,hidden:S(t.asReadonly,e=>!e),onDragEnter:n,onDragOver:n,onDragLeave:()=>t.set(!1),onDrop:r=>{n(r),t.set(!1);let i=[...r.dataTransfer?.files??[]];i.length&&e.onDrop(i)},children:p(`div`,{class:Z.target,children:[d(k,{name:`folder-open`,size:24}),d(`span`,{class:Z.title,children:`Drop to open`}),e.formats?.length?d(`span`,{class:Z.hint,children:e.formats.join(`, `)}):null]})})}function Gn(e){let t=e.dataTransfer?.types;if(!t)return!1;for(let e=0;e<t.length;e++)if(t[e]===`Files`)return!0;return!1}function Kn(){return(Kn=e((()=>{O(),A(),D(),Un(),C(),m()})))()}var Q;function qn(){return(qn=e((()=>{v(),Q={body:`msp-shell-page-body`,header:`msp-shell-page-header`,headerContent:`msp-shell-page-headerContent`,page:`msp-shell-page-page`,"page-in":`msp-shell-page-page-in`,title:`msp-shell-page-title`},_(`views/shell/page.module.css`,`@layer msp.components {
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
`)})))()}function Jn(e){let{shell:t}=e,n=S(t.page,e=>e?.page);return d(b,{when:n,children:e=>d(Yn,{shell:t,page:e})})}function Yn(e){let{shell:t}=e,n={page:e.page,focus:t.page.value?.focus},i={shell:t,...n.focus?{focus:n.focus}:{}},a=p(`section`,{class:Q.page,role:`region`,"aria-label":n.page.title,tabIndex:-1,"data-msp-page":``,children:[p(`header`,{class:Q.header,children:[p(`span`,{class:Q.title,children:[n.page.icon?d(k,{name:n.page.icon}):null,n.page.title]}),d(`div`,{class:Q.headerContent,children:n.page.header?d(G,{renderer:n.page.header,ctx:i}):null}),d(I,{variant:`ghost`,size:`sm`,icon:d(k,{name:`x`}),title:`Close (Esc)`,onClick:()=>t.closePage()})]}),d(`div`,{class:Q.body,children:d(G,{renderer:n.page.render,ctx:i})})]}),o=Ne(document);return j(document,`keydown`,e=>{if(e.key!==`Escape`||e.defaultPrevented||!F(a,e))return;let n=Ne(a);(!n||n===document.body||a.contains(n))&&(t.closePage(),e.preventDefault())}),queueMicrotask(()=>{a.contains(Ne(a))||a.focus({preventScroll:!0})}),r(()=>{o?.isConnected&&o.focus({preventScroll:!0})}),a}function Xn(){return(Xn=e((()=>{Le(),O(),y(),a(),A(),qn(),Gt(),C(),m()})))()}function Zn(e){let{shell:t,status:n}=e,i=t.dock(`right`),a=S(t.mode,e=>e===`compact`),o=t.dock(`top`),s=t.expanded,c=S(s,e=>!e),l=K(t,i),f=S([l.floating,t.mode],(e,t)=>e&&t!==`compact`),m=K(t,o).floating,ee=S([K(t,o).size,o.active,m,s],(e,t,n,r)=>`${n&&t&&!r?t.frame===`none`?e-28+$:$+e+$:$}px`),h=S([f,t.railShown,s],(e,t,n)=>e&&!t||n?0:Qn),g=S([f,t.compactRail,s],(e,t,n)=>e&&t&&!n),te=S([h,g],(e,t)=>t?0:e),_=g,v=S([l.pinned,f,s],(e,t,n)=>t&&e&&!n),y=S([l.size,i.active,t.overlay,v,h],(e,t,n,r,i)=>r?i+(t||n?e:0):0),x=S([y,f,te],(e,t,n)=>e>0?e:t?n:0),re=S([l.size,i.active,t.overlay,f,v,h,s,a],(e,t,n,r,i,a,o,s)=>`${i||o?$:(s?0:a)+$+(r&&(t||n)?e+$:0)}px`),ie=S([v,a,te,g,s],(e,t,n,r,i)=>`${e||t||i?$:(r?Qn:n)+$}px`),C=S([i.active,f,s],(e,t,n)=>t&&e&&!n?`open`:void 0),ae=l.sizePx,w=S(h,e=>`${e+$}px`),T=d(`div`,{class:X.canvas,"data-msp-canvas":``,"data-msp-scope":`canvas`,"data-quiet":e.empty?``:void 0,children:e.canvas}),E=p(`div`,{class:X.shell,"data-mode":t.mode,"data-expanded":S(s,e=>e?``:void 0),children:[d(b,{when:S([m,s],(e,t)=>!e&&!t),children:()=>d(Kt,{shell:t,dock:o})}),d(b,{when:c,children:()=>d(Kt,{shell:t,dock:t.dock(`left`)})}),p(`main`,{class:X.viewport,"data-msp-viewport":``,style:{"--msp-canvas-edge":`${$}px`,"--msp-canvas-right-inset":re,"--msp-canvas-corner-inset":ie,"--msp-corner-room":`${$n}px`,"--msp-canvas-top-inset":ee,"--msp-canvas-end":S(x,e=>`${e}px`),"--msp-band-fade":`28px`,"--msp-band-dissolve":`36px`,"--msp-canvas-rail-inset":w,"--msp-right-panel-width":ae,"--msp-canvas-panel-right":w,"--msp-canvas-pinned":S(y,e=>`${e}px`),background:e.ink?S(e.ink,e=>e.color):void 0},children:[T,p(`div`,{class:`${X.layer} ${X.canvasLayer}`,"data-msp-theme":e.ink?S(e.ink,e=>e.theme):`light`,style:{"--msp-color-bg":e.ink?S(e.ink,e=>e.color):void 0},children:[d(b,{when:S([m,s],(e,t)=>e&&!t),children:()=>d(qt,{shell:t,dock:o})}),e.empty?d(Rn,{empty:e.empty,splash:e.splash??!0,field:e.splashField??`random`,onCanvasShown:e=>T.toggleAttribute(`data-quiet`,!e),...e.busy?{busy:e.busy}:{}}):null,d(`div`,{class:H.lead,children:e.playback}),e.overlays,d(b,{when:_,children:()=>d(Dn,{shell:t})}),d(`div`,{class:H.bottom,"data-keeps-card":``,children:p(`div`,{class:H.bottomGrid,children:[d(Cn,{status:n,onOpenLog:e.onOpenLog,after:e.agent}),p(`div`,{class:H.corner,children:[d(gn,{shell:t,lead:e.canvasLead,aside:e.canvasAside,...e.canvasLeadMenu?{leadMenu:e.canvasLeadMenu}:{},quiet:e.empty}),d(Tn,{status:n,lead:e.context?.()})]})]})})]}),p(`div`,{class:X.layer,"data-right-panel":C,"data-pinned":S(v,e=>e?``:void 0),"data-overlay":S(t.overlay,e=>e?`open`:void 0),children:[d(xn,{shell:t}),d(Jn,{shell:t}),d(b,{when:c,children:()=>d(b,{when:f,fallback:()=>d(b,{when:S(a,e=>!e),children:()=>d(`div`,{class:`${H.toolbarSlot} ${H.frame}`,children:d(ln,{shell:t})})}),children:()=>{let e=ne(t.railShown,()=>d(qt,{shell:t,dock:i,railItems:e=>d(ln,{shell:t,part:`rest`,hidden:e.hidden,railMenu:(t,n)=>e.toggleMenu(n,t)}),railFoot:e=>d(ln,{shell:t,part:`lead`,hidden:e.hidden,railMenu:(t,n)=>e.toggleMenu(n,t)})}));return u(t.railShown,t=>e.toggleAttribute(`data-rail-hidden`,!t)),u(t.compactRail,t=>e.toggleAttribute(`data-rail-overlay`,t)),e}})})]})]}),d(b,{when:S([f,s],(e,t)=>!e&&!t),children:()=>d(Kt,{shell:t,dock:i,stripEnd:d(b,{when:a,children:()=>d(yn,{shell:t})})})}),d(b,{when:c,children:()=>d(Kt,{shell:t,dock:t.dock(`bottom`)})}),e.commandMenu,d(bn,{status:n})]});return e.onDropFiles&&E.appendChild(d(Wn,{target:E,onDrop:e.onDropFiles,formats:e.dropFormats})),j(document,`keydown`,e=>{e.key!==`Escape`||e.defaultPrevented||t.overlay.value||Pe(Ae(e))||F(E,e)&&(s.value?(t.setExpanded(!1),e.preventDefault()):i.state.value.pinned||!i.state.value.collapsed&&i.active.value!==void 0&&(t.toggle(`right`),e.preventDefault()))}),r(Re(E)),pe(E,e=>t.setWidth(e[0].contentRect.width)),E}var Qn,$,$n;function er(){return(er=e((()=>{y(),a(),A(),C(),gt(),kt(),Fn(),ze(),Y(),on(),Hn(),Kn(),Xn(),m(),Qn=44,$=8,$n=42})))()}export{Je as C,Ge as D,We as E,Ye as S,qe as T,lt as _,wn as a,rt as b,Gt as c,St as d,Dt as f,gt as g,ht as h,Pn as i,Nt as l,bt as m,er as n,Y as o,vt as p,Mn as r,G as s,Zn as t,Mt as u,ut as v,Ke as w,it as x,L as y};