import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{A as t,C as n,E as r,S as i,T as a,b as o,g as s,h as c,i as l,k as u,m as d,n as f,o as p,r as m,t as h,u as g,v as _,w as ee,x as te}from"./jsx-runtime-Dut-27nP.js";import{n as v,r as y}from"./registry-D35yV2Tb.js";import{i as b,n as x,r as ne,t as S}from"./control-flow-BGkEkAG8.js";import{C as re,S as ie,b as C,x as w,y as ae}from"./work-queue-DoxU-HjK.js";import{i as T,n as E,r as D,t as O}from"./observable-state-C67cgDrf.js";import{c as k,l as A,o as oe,s as j,u as se}from"./manager-DdxqI_fE.js";import{n as M,t as N}from"./icon-CrwnZGU9.js";import{c as ce,i as P,n as le,o as ue,s as F,t as de}from"./scoped-CYrGtqEo.js";import{n as fe,t as I}from"./scroll-area-C3WxaIdw.js";import{C as pe,D as me,E as he,O as ge,S as _e,T as ve,_ as L,b as ye,h as be,m as R,n as xe,r as Se,t as Ce,v as z,w as we,x as Te,y as Ee}from"./params-form-BQ9MddDI.js";import{n as De,t as Oe}from"./keyed-selector-MU49iODI.js";import{c as ke,d as B,f as V,i as Ae,o as je,s as Me,u as Ne}from"./select-iIBCxyFA.js";import{n as Pe,t as Fe}from"./text-input-6-TvZsXK.js";import{n as Ie,t as H}from"./button-C9pAumBZ.js";import{n as Le,t as Re}from"./tooltip-B_MLonmP.js";import{r as ze,t as Be}from"./wordmark-ClMxGUTX.js";import{n as Ve,t as He}from"./prism-splash-C07-cdfM.js";function Ue(e){let t=e.background??`radial-gradient(circle at 50% 45%, #ffffff 0%, #eef0f3 70%, #dfe3e8 100%)`;if(e.empty)return f(`div`,{style:{position:`absolute`,inset:0,background:t}});let n=[];for(let e=0;e<90;e++){let t=e/90,r=120+t*560+40*Math.sin(t*19),i=300+150*Math.sin(t*7.3)+30*Math.cos(t*23),a=200+160*t;n.push(f(`circle`,{cx:r,cy:i,r:14+4*Math.sin(t*31),fill:`hsl(${a} 55% 60%)`,"data-index":e}))}return f(`div`,{style:{position:`absolute`,inset:0,background:t},onPointerOver:t=>{let n=t.target.getAttribute?.(`data-index`);e.onHover?.(n==null?void 0:Number(n))},onPointerLeave:()=>e.onHover?.(void 0),children:m(`svg`,{viewBox:`0 0 800 600`,preserveAspectRatio:`xMidYMid meet`,style:`width: 100%; height: 100%`,children:[f(`defs`,{children:m(`radialGradient`,{id:`msp-placeholder-shade`,cx:`35%`,cy:`35%`,r:`65%`,children:[f(`stop`,{offset:`0%`,"stop-color":`#fff`,"stop-opacity":`0.55`}),f(`stop`,{offset:`100%`,"stop-color":`#000`,"stop-opacity":`0.2`})]})}),f(`g`,{children:n}),f(`g`,{style:`mix-blend-mode: soft-light; pointer-events: none`,children:n.map(e=>f(`circle`,{cx:e.getAttribute(`cx`),cy:e.getAttribute(`cy`),r:e.getAttribute(`r`),fill:`url(#msp-placeholder-shade)`}))})]})})}function We(){return(We=e((()=>{h()})))()}function Ge(e){return{mount:(t,n,r)=>g(()=>e({ctx:n}),t,r)}}function Ke(){return(Ke=e((()=>{p()})))()}function qe(e,t,n=T){return C(e,t,n)}function Je(){return(Je=e((()=>{D(),w()})))()}function Ye(){let e={};for(let t of U)e[t]={tabs:[],size:et[t],floating:t===`right`||t===`top`,pinned:t===`right`};return{docks:e,mode:`auto`,compactRail:!1,buttons:{},hiddenTabs:[]}}function Xe(e,t){for(let n of Object.keys(t))if(!Object.is(e[n],t[n]))return!0;return!1}function Ze(e,t){let n={...e.docks};for(let e of U){let r=t.docks?.[e];r&&(n[e]={...n[e],...r})}return{docks:n,mode:t.mode??e.mode,compactRail:t.compactRail??e.compactRail,buttons:{...e.buttons,...t.buttons},hiddenTabs:t.hiddenTabs?[...new Set(t.hiddenTabs)]:e.hiddenTabs}}function Qe(e){if(!e||typeof e!=`object`)return!1;let t=e;if(t.version!==1||!t.layout||typeof t.layout!=`object`)return!1;let n=t.layout.docks;if(!n||typeof n!=`object`)return!1;let{mode:r,compactRail:i,buttons:a,hiddenTabs:o}=t.layout;return r!==void 0&&!(r===`auto`||$e.includes(r))||i!==void 0&&typeof i!=`boolean`||a!==void 0&&(!a||typeof a!=`object`)||o!==void 0&&!(Array.isArray(o)&&o.every(e=>typeof e==`string`))?!1:U.every(e=>{let t=n[e];if(!t)return!0;let r=e=>e===void 0||typeof e==`boolean`;return Array.isArray(t.tabs)&&t.tabs.every(e=>typeof e==`string`)&&(t.size===void 0||typeof t.size==`number`&&Number.isFinite(t.size))&&r(t.floating)&&r(t.pinned)})}var U,$e,et,tt,nt;function rt(){return(rt=e((()=>{O(),U=[`left`,`right`,`top`,`bottom`],$e=[`desktop`,`compact`,`embedded`],et={left:300,right:340,top:88,bottom:220},tt={left:180,right:180,top:40,bottom:40},nt=class{#e;#t;constructor(e){this.#e=e?Ze(Ye(),e):Ye(),this.#t=E(this.#e)}get layout(){return this.#t.asReadonly}get initial(){return this.#e}reset(){this.#t.set(this.#e)}setTabHidden(e,t){let n=this.#t.value;if(n.hiddenTabs.includes(e)===t)return;let r=t?[...n.hiddenTabs,e]:n.hiddenTabs.filter(t=>t!==e);this.#t.set({...n,hiddenTabs:r})}showAllTabs(){this.#t.value.hiddenTabs.length&&this.#t.set({...this.#t.value,hiddenTabs:[]})}setDock(e,t){let n=this.#t.value,r=n.docks[e];if(!Xe(r,t))return;let i={...r,...t};i.size!==r.size&&(i.size=Math.max(tt[e],Math.round(i.size))),this.#t.set({...n,docks:{...n.docks,[e]:i}})}setMode(e){this.#t.value.mode!==e&&this.#t.set({...this.#t.value,mode:e})}setCompactRail(e){this.#t.value.compactRail!==e&&this.#t.set({...this.#t.value,compactRail:e})}setButtons(e){let t=this.#t.value;Xe(t.buttons,e)&&this.#t.set({...t,buttons:{...t.buttons,...e}})}save(){return{version:1,layout:this.#t.value}}restore(e){if(!Qe(e))return!1;let t={};for(let n of U){let r=e.layout.docks?.[n];r&&(t[n]={...r,...r.size===void 0?{}:{size:Math.max(tt[n],Math.round(r.size))}})}return this.#t.set(Ze(this.#t.value,{...e.layout,docks:t})),!0}}})))()}function it(){let e={};for(let t of U)e[t]={active:void 0,collapsed:!1};return{docks:e,card:void 0,page:void 0,focus:void 0,railOpen:!1,expanded:!1,fullscreen:!1}}function at(e,t){let n=e.docks[t];return n.collapsed?void 0:n.active}function W(e,t){return qe(e,t,Object.is)}function ot(e){if(!e||typeof e!=`object`)return!1;let t=e;return t.version===1&&!!t.navigation&&typeof t.navigation.docks==`object`&&!!t.navigation.docks}var st,ct;function lt(){return(lt=e((()=>{Je(),O(),rt(),st=`right`,ct=class{#e=E(it());#t;#n;#r;#i;#a;#o;constructor(e){if(e){let t=this.#e.value,n={...t.docks};for(let t of U)e.docks?.[t]&&(n[t]={...n[t],...e.docks[t]});this.#e.set({...t,docks:n,railOpen:e.railOpen??t.railOpen})}this.#t=W(this.#e.asReadonly,e=>at(e,st)),this.#n=W(this.#e.asReadonly,e=>e.card?.id),this.#r=W(this.#e.asReadonly,e=>e.card?.section??e.focus?.section),this.#i=W(this.#e.asReadonly,e=>e.page?.id),this.#a=W(this.#e.asReadonly,e=>e.expanded),this.#o=W(this.#e.asReadonly,e=>e.fullscreen)}get state(){return this.#e.asReadonly}get tab(){return this.#t}get card(){return this.#n}get section(){return this.#r}get page(){return this.#i}get expanded(){return this.#a}get fullscreen(){return this.#o}openTab(e){return at(this.#e.value,e)}setDock(e,t){let n=this.#e.value,r=n.docks[e],i=(!(`active`in t)||t.active===r.active)&&(t.collapsed===void 0||t.collapsed===r.collapsed),a=n.expanded&&t.collapsed!==!1;i&&a===n.expanded||this.#e.set({...n,expanded:a,docks:{...n.docks,[e]:{...r,...t}}})}setExpanded(e){this.#e.value.expanded!==e&&this.#e.set({...this.#e.value,expanded:e})}setFullscreen(e){this.#e.value.fullscreen!==e&&this.#e.set({...this.#e.value,fullscreen:e})}setCard(e){let t=this.#e.value;(t.card?.id!==e?.id||t.card?.section!==e?.section||e?.section)&&this.#e.set({...t,card:e})}setPage(e){let t=this.#e.value;(t.page?.id!==e?.id||t.page?.focus!==e?.focus)&&this.#e.set({...t,page:e})}setFocus(e){let t=this.#e.value;t.focus!==e&&this.#e.set({...t,focus:e})}setRailOpen(e){this.#e.value.railOpen!==e&&this.#e.set({...this.#e.value,railOpen:e})}save(){let{docks:e,card:t,page:n}=this.#e.value;return{version:1,navigation:{docks:e,card:t,page:n}}}restore(e){if(!ot(e))return!1;let t=this.#e.value,n={...t.docks};for(let t of U){let r=e.navigation.docks[t];r&&(n[t]={active:r.active,collapsed:!!r.collapsed})}return this.#e.set({...t,docks:n,card:e.navigation.card,page:e.navigation.page}),!0}}})))()}function ut(e){let t={};for(let n of U){let r=e.docks?.[n];if(!r)continue;let i={};for(let e of pt)e in r&&(i[e]=r[e]);t[n]=i}return{docks:t,...e.mode?{mode:e.mode}:{},compactRail:!!e.compactRail,buttons:e.buttons??{}}}function dt(e){let t={};for(let n of U){let r=e.docks?.[n];r&&(t[n]={...`active`in r?{active:r.active}:{},...r.collapsed===void 0?{}:{collapsed:r.collapsed}})}return{docks:t}}var ft,pt,mt;function ht(){return(ht=e((()=>{lt(),rt(),O(),t(),ft=class{#e;#t;#n;constructor(e,t){this.id=e,this.#e=E(t),this.#t=E([]),this.#n=E(void 0)}get state(){return this.#e.asReadonly}get tabs(){return this.#t.asReadonly}get active(){return this.#n.asReadonly}sync(e,t,n){this.#e.set(e);let r=e.tabs.filter(e=>!n.includes(e)).map(e=>t.get(e)).filter(e=>!!e);this.#t.set(r),this.#n.set(e.collapsed?void 0:r.find(t=>t.id===e.active))}},pt=[`tabs`,`size`,`floating`,`pinned`],mt=class extends u{#e=new Map;#t=new Map;#n=new Map;#r;#i;#a=E(void 0);#o;#s=E(!0);#c=E(0);#l=E(`desktop`);#u=E(void 0,{compare:Object.is});#d;#f=E(void 0,{compare:Object.is});#p=E(!1);#m=E(!1);#h=E([]);#g=E([]);#_=E([]);#v=E([]);#y=new Map;#b;#x;#S=E(!1);constructor(e={}){super(),this.#b=e.compactWidth??720,this.#x=e.toolbar??`auto`,this.#r=e.viewState??new nt(ut(e)),this.#i=e.navigation??new ct(dt(e)),this.#o={};for(let e of U)this.#o[e]=new ft(e,this.#E(e));this.subscribePermanently(this.#r.layout,()=>this.#O()),this.subscribePermanently(this.#i.state,()=>this.#O())}get viewState(){return this.#r}get navigation(){return this.#i}get compactRail(){return this.#p.asReadonly}get railOpen(){return this.#m.asReadonly}get railShown(){return this.#s.asReadonly}get toolbarCollapsed(){return this.#S.asReadonly}setCompactRail(e){this.#r.setCompactRail(e),this.setRailOpen(!1)}setRailOpen(e){this.#p.value&&!e&&(this.closeOverlay(),this.#i.setDock(`right`,{collapsed:!0})),this.#i.setRailOpen(e)}toggleRail(){this.#p.value&&this.setRailOpen(!this.#i.state.value.railOpen)}get expanded(){return this.#i.expanded}setExpanded(e){e&&this.closeOverlay(),this.#i.setExpanded(e)}dock(e){return this.#o[e]}get mode(){return this.#l.asReadonly}#C=new Map;sectionOpen(e,t){return this.#C.get(`${e}\n${t}`)}setSectionOpen(e,t,n){this.#C.set(`${e}\n${t}`,n)}get tabFocus(){return this.#f.asReadonly}get overlay(){return this.#u.asReadonly}get page(){return this.#a.asReadonly}get toolbar(){return this.#_.asReadonly}sections(e){let t=this.#y.get(e);if(!t){let n=E([]),r=t=>n.set(t.filter(t=>t.slot===e).sort((e,t)=>(e.order??0)-(t.order??0)));r(this.#v.value),this.subscribePermanently(this.#v.asReadonly,r),t=n.asReadonly,this.#y.set(e,t)}return t}registerSections(e){return this.#v.set([...this.#v.value,...e]),()=>this.#v.set(this.#v.value.filter(t=>!e.includes(t)))}registerToolbar(e){return this.#g.set((e=>[...e].sort((e,t)=>(e.order??0)-(t.order??0)))([...this.#g.value,...e])),this.#A(),()=>{this.#g.set(this.#g.value.filter(t=>!e.includes(t))),this.#A()}}setButtons(e){this.#r.setButtons(e)}registerTabs(e){let t=[...e].sort((e,t)=>(e.order??0)-(t.order??0));for(let e of t)this.#e.set(e.id,e),this.#w(e);return this.#O(),()=>{for(let e of t){if(this.#e.get(e.id)!==e)continue;this.#e.delete(e.id);let t=this.#T(e.id);if(!t)continue;let n=this.#E(t),r=n.tabs.filter(t=>t!==e.id);this.#D(t,{tabs:r,active:n.active===e.id?r[0]:n.active})}this.#O()}}#w(e){let t=this.#T(e.id)??e.dock??`right`,n=this.#E(t),r=n.tabs;if(!r.includes(e.id)){let t=e.order??0,n=r.findIndex(e=>(this.#e.get(e)?.order??0)>t);r=n<0?[...r,e.id]:[...r.slice(0,n),e.id,...r.slice(n)]}let i=this.#r.layout.value.hiddenTabs.includes(e.id);this.#D(t,{tabs:r,active:n.active??(i?void 0:e.id)})}get hiddenTabs(){return this.#h.asReadonly}hideTab(e){let t=this.#T(e);ae(()=>{if(this.#r.setTabHidden(e,!0),!t)return;let n=this.#E(t);if(n.active!==e)return;let r=this.#r.layout.value.hiddenTabs,i=n.tabs.find(t=>t!==e&&!r.includes(t)&&this.#e.has(t));this.#D(t,{active:i,collapsed:!0})})}showTab(e){this.#r.setTabHidden(e,!1)}showAllTabs(){this.#r.showAllTabs()}resetLayout(){ae(()=>{this.#r.reset();let e=[...this.#e.values()].sort((e,t)=>(e.order??0)-(t.order??0));for(let t of e)this.#w(t);for(let e of U){let t=this.#E(e);t.active!==void 0&&!t.tabs.includes(t.active)&&this.#i.setDock(e,{active:t.tabs.find(e=>this.#e.has(e))})}})}registerOverlays(e){for(let t of e)this.#t.set(t.id,t);return this.#O(),()=>{for(let t of e)this.#t.get(t.id)===t&&(this.#t.delete(t.id),this.#i.state.value.card?.id===t.id&&this.closeOverlay());this.#O()}}registerPages(e){for(let t of e)this.#n.set(t.id,t);return this.#O(),()=>{for(let t of e)this.#n.get(t.id)===t&&(this.#n.delete(t.id),this.#i.state.value.page?.id===t.id&&this.closePage());this.#O()}}openPage(e,t){this.#n.has(e)&&(this.closeOverlay(),this.#i.setPage({id:e,...t?{focus:t}:{}}))}closePage(){this.#i.setPage(void 0)}show(e,t){let n=this.#T(e);n&&(this.showTab(e),t?this.#i.setFocus({tab:e,section:t}):this.#i.state.value.focus?.tab===e&&this.#i.setFocus(void 0),this.#D(n,{active:e,collapsed:!1}))}select(e){let t=this.#T(e);if(!t)return;this.#i.state.value.focus?.tab===e&&this.#i.setFocus(void 0);let n=this.#E(t);n.active===e&&!n.collapsed?this.#D(t,{collapsed:!0}):this.#D(t,{active:e,collapsed:!1})}toggle(e){this.#D(e,{collapsed:!this.#E(e).collapsed})}move(e,t,n){let r=this.#T(e);if(!r||!this.#e.has(e))return;let i=this.#E(r),a=i.tabs.filter(t=>t!==e);this.#D(r,{tabs:a,active:i.active===e?a[0]:i.active});let o=[...this.#E(t).tabs.filter(t=>t!==e)];o.splice(n??o.length,0,e),this.#D(t,{tabs:o,active:e,collapsed:!1})}setSize(e,t){this.#r.setDock(e,{size:t})}setFloating(e,t){this.#r.setDock(e,{floating:t})}setPinned(e,t){this.#r.setDock(e,{pinned:t})}setMode(e){this.#r.setMode(e),e===`embedded`&&this.setRailOpen(!1)}setWidth(e){this.#c.set(e),this.#j()&&this.#O()}openOverlay(e,t,n){if(!this.#t.has(e))return;this.#d=t?{id:e,element:t}:this.#d?.id===e?this.#d:void 0;let r=this.#u.value;this.#i.setCard({id:e,...n?{section:n}:{}}),this.#u.value===r&&this.#k(!0)}toggleOverlay(e,t){this.#i.state.value.card?.id===e?this.closeOverlay():this.openOverlay(e,t)}closeOverlay(){this.#d=void 0,this.#i.setCard(void 0)}#T(e){let t=this.#r.layout.value.docks;for(let n of U)if(t[n].tabs.includes(e))return n}#E(e){let t=this.#r.layout.value.docks[e],n=this.#i.state.value.docks[e],r={...t,active:n.active,collapsed:n.collapsed};return this.#l.value===`embedded`?{...r,floating:e===`right`||r.floating,pinned:!1}:this.#r.layout.value.compactRail&&r.floating&&r.pinned||this.#l.value===`compact`&&r.pinned?{...r,pinned:!1}:r}#D(e,t){let n={};for(let e of pt)e in t&&(n[e]=t[e]);Object.keys(n).length&&this.#r.setDock(e,n);let r={};`active`in t&&(r.active=t.active),`collapsed`in t&&(r.collapsed=t.collapsed),Object.keys(r).length&&this.#i.setDock(e,r)}#O(){if(!this.#o)return;this.#j();let e=this.#r.layout.value;for(let t of U)this.#o[t].sync(this.#E(t),this.#e,e.hiddenTabs);let t=e.hiddenTabs.map(e=>this.#e.get(e)).filter(e=>!!e),n=this.#h.value;(t.length!==n.length||t.some((e,t)=>e!==n[t]))&&this.#h.set(t);let r=this.#i.state.value,i=e.compactRail||this.#l.value===`embedded`;this.#p.set(i),this.#m.set(r.railOpen),this.#s.set(!i||r.railOpen),this.#f.set(r.focus);let a=r.page?this.#n.get(r.page.id):void 0,o=this.#a.value;a?(o?.page!==a||o.focus!==r.page?.focus)&&this.#a.set({page:a,...r.page?.focus?{focus:r.page.focus}:{}}):this.#a.set(void 0),this.#k(!1),this.#A()}#k(e){let t=this.#i.state.value.card,n=t?this.#t.get(t.id):void 0;if(!n||!t){this.#u.set(void 0);return}let r=this.#u.value,i=this.#d?.id===t.id?this.#d.element:void 0;(e||r?.overlay!==n||r.anchor!==i||r.focus!==t.section)&&this.#u.set({overlay:n,...i?{anchor:i}:{},...t.section?{focus:t.section}:{}})}#A(){let e=this.#r.layout.value.buttons;this.#_.set(this.#g.value.filter(t=>e[t.id]!==!1))}#j(){let e=this.#r.layout.value.mode,t=this.#c.value,n=t>0&&t<this.#b,r=e===`auto`?n?`compact`:`desktop`:e===`embedded`&&n?`compact`:e,i=this.#x;return this.#S.set(i===`auto`?r===`compact`:i===`collapsed`),this.#l.value!==r&&(this.#l.set(r),!0)}}})))()}var G;function gt(){return(gt=e((()=>{y(),G={body:`msp-settings-settings-tab-body`,chevron:`msp-settings-settings-tab-chevron`,group:`msp-settings-settings-tab-group`,groups:`msp-settings-settings-tab-groups`,groupsContent:`msp-settings-settings-tab-groupsContent`,header:`msp-settings-settings-tab-header`,none:`msp-settings-settings-tab-none`,search:`msp-settings-settings-tab-search`,searchIcon:`msp-settings-settings-tab-searchIcon`,searchInput:`msp-settings-settings-tab-searchInput`,tab:`msp-settings-settings-tab-tab`,title:`msp-settings-settings-tab-title`,toggle:`msp-settings-settings-tab-toggle`},v(`views/settings/settings-tab.module.css`,`@layer msp.components {
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
`)})))()}function _t(e){let{model:t}=e,n=E(``),r=n.asReadonly,i=C(r,e=>e.trim().length>0&&!t.groups.some(t=>Se(t.form.params,e)));return m(`div`,{class:G.tab,children:[m(`div`,{class:G.search,children:[f(N,{name:`search`,size:14,class:G.searchIcon}),f(Fe,{search:!0,size:`sm`,class:G.searchInput,"aria-label":`Search settings`,placeholder:`Search settings`,value:r,onInput:e=>n.set(e)})]}),m(I,{class:G.groups,contentClass:G.groupsContent,children:[t.groups.map((e,t)=>f(vt,{group:e,query:r,open:t===0})),f(x,{when:i,children:()=>m(`p`,{class:G.none,children:[`No setting matches “`,r,`”.`]})}),e.more?.()]})]})}function vt(e){let{group:t,query:n}=e,r=E(e.open),i=C(n,e=>e.trim().length>0),a=C([r.asReadonly,i],(e,t)=>e||t),o=C(n,e=>!Se(t.form.params,e));return m(`section`,{class:G.group,hidden:o,"aria-label":t.title,children:[f(`div`,{class:G.header,children:m(`button`,{type:`button`,class:G.toggle,"aria-expanded":a,onClick:()=>r.set(!r.value),children:[f(`span`,{class:G.title,children:t.title}),f(N,{name:`chevron-down`,size:14,class:G.chevron})]})}),f(x,{when:a,reveal:!0,children:()=>f(`div`,{class:G.body,"data-wide-labels":t.wideLabels?``:void 0,children:f(Ce,{form:t.form,filter:n})})})]})}function yt(){return(yt=e((()=>{M(),xe(),fe(),Pe(),b(),O(),w(),gt(),h()})))()}var K;function bt(){return(bt=e((()=>{y(),K={action:`msp-shell-help-panel-action`,conflict:`msp-shell-help-panel-conflict`,conflicts:`msp-shell-help-panel-conflicts`,content:`msp-shell-help-panel-content`,edit:`msp-shell-help-panel-edit`,editBar:`msp-shell-help-panel-editBar`,group:`msp-shell-help-panel-group`,heading:`msp-shell-help-panel-heading`,headingRow:`msp-shell-help-panel-headingRow`,help:`msp-shell-help-panel-help`,input:`msp-shell-help-panel-input`,key:`msp-shell-help-panel-key`,keys:`msp-shell-help-panel-keys`,list:`msp-shell-help-panel-list`,or:`msp-shell-help-panel-or`,recorder:`msp-shell-help-panel-recorder`,row:`msp-shell-help-panel-row`,srOnly:`msp-shell-help-panel-srOnly`},v(`views/shell/help-panel.module.css`,`@layer msp.components {
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
`)})))()}function xt(e){let t=e.commands,n=t.keymap,i=E(!1),a=E(void 0),o=De(a.asReadonly),s=E(``),c=C([t.commands,n.layers,a.asReadonly],(e,r,i)=>e.filter(e=>t.shortcut(e)||n.isRemapped(e.id)||e.id===i)),l=C([t.commands,n.layers],e=>{let t=n.conflicts(e);return t.length?t:void 0}),u=(e,r)=>{n.remap(e.id,r),a.set(void 0);let i=n.sharing(e.id,r,t.commands.value);s.set(`${e.title}: ${k(r)}${i.length?`, also used by ${i.map(e=>e.title).join(` and `)}`:``}.`)},d=document.createTextNode(``);return r([s.asReadonly],()=>z(d,s.value)),m(I,{edge:!0,class:K.help,contentClass:K.content,"aria-label":`Help`,children:[e.intro?.(),f(x,{when:l,children:e=>m(`section`,{class:K.conflicts,"aria-label":`Shortcut conflicts`,children:[f(N,{name:`triangle-alert`,size:14}),f(`div`,{children:e.map(e=>m(`p`,{class:K.conflict,children:[f(wt,{input:j(e.chord)}),` is used by `,e.commands.map(e=>e.title).join(` and `),e.scope===`global`?``:` (in ${e.scope})`,`: only the first that can run takes it.`]}))})]})}),f(S,{each:e.bindings,children:e=>f(Ct,{title:e.title,bindings:e.bindings})}),f(Ct,{title:`Everywhere`,bindings:Tt()}),m(`section`,{class:K.group,"aria-label":`Commands`,children:[m(`div`,{class:K.headingRow,children:[f(`h3`,{class:K.heading,children:`Commands`}),f(H,{size:`xs`,variant:`ghost`,pressed:i.asReadonly,onClick:()=>{i.set(!i.value),a.set(void 0)},children:`Change keys`})]}),f(`dl`,{class:K.list,children:f(S,{each:c,children:e=>f(St,{manager:t,command:e,editing:i.asReadonly,recording:o.key(e.id),onRecord:()=>a.set(e.id),onRecorded:t=>t?u(e,t):a.set(void 0),onChanged:e=>s.set(e)})},e=>e.id)}),f(x,{when:C(i.asReadonly,e=>e?!0:void 0),children:()=>m(`div`,{class:K.editBar,children:[f(Ae,{size:`sm`,"aria-label":`Give a key to a command`,options:[[``,`Give a key to…`],...t.commands.value.filter(e=>!t.shortcut(e)).map(e=>[e.id,e.title]).sort((e,t)=>e[1].localeCompare(t[1]))],value:``,onChange:e=>e&&a.set(e)}),f(H,{size:`xs`,variant:`ghost`,onClick:()=>(n.resetAll(),s.set(`Every key is back to its default.`)),children:`Reset all`})]})}),f(`span`,{class:K.srOnly,role:`status`,"aria-live":`polite`,children:d})]})]})}function St(e){let{manager:t,command:n}=e,r=t.keymap,i=C(r.layers,()=>({chord:t.shortcut(n),remapped:r.isRemapped(n.id)})),a=se();return m(`div`,{class:K.row,children:[f(`dt`,{class:K.action,children:n.title}),m(`dd`,{class:K.input,children:[f(x,{when:C(e.recording,e=>e?!0:void 0),fallback:()=>f(x,{when:C(i,e=>e.chord),fallback:()=>f(`span`,{class:K.or,children:`no key`}),children:e=>f(wt,{input:j(e,a)})}),children:()=>f(`span`,{class:K.recorder,tabIndex:0,role:`button`,"aria-label":`Press the new keys for ${n.title}; Escape cancels`,ref:e=>setTimeout(()=>e.isConnected&&e.focus()),onBlur:()=>e.onRecorded(void 0),onKeyDown:t=>{if(t.preventDefault(),t.stopPropagation(),t.key===`Escape`)return e.onRecorded(void 0);let n=oe(t,a);n&&e.onRecorded(n)},children:`Press keys…`})}),f(x,{when:C(e.editing,e=>e?!0:void 0),children:()=>m(`span`,{class:K.edit,children:[f(H,{size:`xs`,variant:`ghost`,title:`Change the key of ${n.title}`,onClick:()=>e.onRecord(),children:`Change`}),f(x,{when:C(i,e=>e.chord?!0:void 0),children:()=>f(H,{size:`xs`,variant:`ghost`,title:`Remove the key of ${n.title}`,onClick:()=>{r.remap(n.id,null),e.onChanged(`${n.title}: no key.`)},children:`Clear`})}),f(x,{when:C(i,e=>e.remapped?!0:void 0),children:()=>f(H,{size:`xs`,variant:`ghost`,title:`Back to the default key of ${n.title}`,onClick:()=>{r.reset(n.id);let t=r.defaultShortcut(n);e.onChanged(`${n.title}: ${t?k(t,a):`no key`} again.`)},children:`Reset`})})]})})]})]})}function Ct(e){return m(`section`,{class:K.group,"aria-label":e.title,children:[f(`h3`,{class:K.heading,children:e.title}),f(`dl`,{class:K.list,children:e.bindings.map(e=>m(`div`,{class:K.row,children:[f(`dt`,{class:K.action,children:e.action}),m(`dd`,{class:K.input,children:[f(wt,{input:e.input}),e.or?m(l,{children:[f(`span`,{class:K.or,children:`or`}),f(wt,{input:e.or})]}):null]})]}))})]})}function wt(e){return f(`span`,{class:K.keys,children:e.input.map(e=>f(`kbd`,{class:K.key,children:e}))})}var Tt;function Et(){return(Et=e((()=>{A(),Ie(),M(),fe(),je(),b(),o(),Oe(),O(),w(),bt(),h(),Tt=()=>[{action:`Command menu`,input:j({key:`k`,mod:!0}),or:j({key:`p`,mod:!0,shift:!0})},{action:`Help (this card)`,input:[`?`]},{action:`Close a menu, a card or the command menu`,input:[`Esc`]}]})))()}var q;function Dt(){return(Dt=e((()=>{y(),q={detail:`msp-shell-log-view-detail`,empty:`msp-shell-log-view-empty`,entries:`msp-shell-log-view-entries`,entry:`msp-shell-log-view-entry`,filters:`msp-shell-log-view-filters`,kind:`msp-shell-log-view-kind`,kinds:`msp-shell-log-view-kinds`,log:`msp-shell-log-view-log`,search:`msp-shell-log-view-search`,text:`msp-shell-log-view-text`,time:`msp-shell-log-view-time`},v(`views/shell/log-view.module.css`,`@layer msp.components {
.msp-shell-log-view-log {
  gap: var(--msp-space-2);
  padding: 0 var(--msp-panel-inset) var(--msp-panel-inset);
  font-size: var(--msp-font-size-sm);
  display: grid;
}

.msp-shell-log-view-filters {
  z-index: 1;
  align-items: center;
  gap: var(--msp-space-2);
  padding: var(--msp-space-2) var(--msp-space-3);
  background: var(--msp-color-panel);
  display: flex;
  position: sticky;
  top: 0;
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
  overflow-wrap: anywhere;
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
`)})))()}var J;function Ot(){return(Ot=e((()=>{y(),J={announce:`msp-shell-canvas-announce`,bar:`msp-shell-canvas-bar`,bottom:`msp-shell-canvas-bottom`,bottomGrid:`msp-shell-canvas-bottomGrid`,busy:`msp-shell-canvas-busy`,"busy-in":`msp-shell-canvas-busy-in`,"busy-slide":`msp-shell-canvas-busy-slide`,"busy-spin":`msp-shell-canvas-busy-spin`,busyActions:`msp-shell-canvas-busyActions`,busyBar:`msp-shell-canvas-busyBar`,busyCard:`msp-shell-canvas-busyCard`,busyHead:`msp-shell-canvas-busyHead`,busyLabel:`msp-shell-canvas-busyLabel`,busyPercent:`msp-shell-canvas-busyPercent`,busySpin:`msp-shell-canvas-busySpin`,busyTrack:`msp-shell-canvas-busyTrack`,caption:`msp-shell-canvas-caption`,card:`msp-shell-canvas-card`,"card-in":`msp-shell-canvas-card-in`,cardBody:`msp-shell-canvas-cardBody`,cardBodyContent:`msp-shell-canvas-cardBodyContent`,cardBodyFill:`msp-shell-canvas-cardBodyFill`,cardDocked:`msp-shell-canvas-cardDocked`,cardHeader:`msp-shell-canvas-cardHeader`,cardSlot:`msp-shell-canvas-cardSlot`,cardTitle:`msp-shell-canvas-cardTitle`,chip:`msp-shell-canvas-chip`,context:`msp-shell-canvas-context`,corner:`msp-shell-canvas-corner`,countdown:`msp-shell-canvas-countdown`,face:`msp-shell-canvas-face`,folded:`msp-shell-canvas-folded`,frame:`msp-shell-canvas-frame`,lead:`msp-shell-canvas-lead`,menuMark:`msp-shell-canvas-menuMark`,message:`msp-shell-canvas-message`,pill:`msp-shell-canvas-pill`,"pill-in":`msp-shell-canvas-pill-in`,pillButton:`msp-shell-canvas-pillButton`,pillMain:`msp-shell-canvas-pillMain`,progress:`msp-shell-canvas-progress`,railMenu:`msp-shell-canvas-railMenu`,railMenuAnchor:`msp-shell-canvas-railMenuAnchor`,railMenuButton:`msp-shell-canvas-railMenuButton`,railMenuDivider:`msp-shell-canvas-railMenuDivider`,railMenuList:`msp-shell-canvas-railMenuList`,railToggle:`msp-shell-canvas-railToggle`,sections:`msp-shell-canvas-sections`,spin:`msp-shell-canvas-spin`,stack:`msp-shell-canvas-stack`,stackTools:`msp-shell-canvas-stackTools`,status:`msp-shell-canvas-status`,text:`msp-shell-canvas-text`,tool:`msp-shell-canvas-tool`,"tool-menu-in":`msp-shell-canvas-tool-menu-in`,toolMenu:`msp-shell-canvas-toolMenu`,toolMenuCard:`msp-shell-canvas-toolMenuCard`,toolMenuCheck:`msp-shell-canvas-toolMenuCheck`,toolMenuChevron:`msp-shell-canvas-toolMenuChevron`,toolMenuDivider:`msp-shell-canvas-toolMenuDivider`,toolMenuHeading:`msp-shell-canvas-toolMenuHeading`,toolMenuHint:`msp-shell-canvas-toolMenuHint`,toolMenuLabel:`msp-shell-canvas-toolMenuLabel`,toolMenuRow:`msp-shell-canvas-toolMenuRow`,toolMenuScroll:`msp-shell-canvas-toolMenuScroll`,toolMenuScrollContent:`msp-shell-canvas-toolMenuScrollContent`,toolSubmenu:`msp-shell-canvas-toolSubmenu`,toolbar:`msp-shell-canvas-toolbar`,toolbarSlot:`msp-shell-canvas-toolbarSlot`},v(`views/shell/canvas.module.css`,`@layer msp.components {
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
`)})))()}var kt;function At(){return(At=e((()=>{y(),kt={keys:`msp-context-menu-keys`,menu:`msp-context-menu-menu`,row:`msp-context-menu-row`},v(`components/context-menu/context-menu.module.css`,`@layer msp.components {
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
`)})))()}function jt(e,t,n,r){let i=!1,a=()=>{},o=ve(),s=()=>{i||(i=!0,a(),o(d),d.remove(),r?.())},l=e=>{B(e,d)||s()},u=t=>{t.key===`Escape`&&(B(t,d)||V(e,t))&&(t.preventDefault(),t.stopPropagation(),s())},d;c(e=>{a=e,d=f(`div`,{class:kt.menu,role:`menu`,onKeyDown:we,onContextMenu:e=>e.preventDefault(),children:n.map(e=>m(`button`,{type:`button`,role:`menuitem`,class:kt.row,disabled:!!e.disabled,title:e.disabled,onClick:()=>{s(),e.run()},children:[e.icon?f(N,{name:e.icon,size:15}):f(`span`,{}),f(`span`,{children:e.label}),e.shortcut?f(`kbd`,{class:kt.keys,children:e.shortcut}):f(`span`,{})]}))}),F(document,`pointerdown`,l,{capture:!0}),F(document,`keydown`,u,{capture:!0}),F(window,`resize`,s),F(window,`scroll`,s,{capture:!0})}),e.append(d);let p=d.offsetWidth,h=d.offsetHeight,g=t.x+p>window.innerWidth-4?Math.max(4,t.x-p):t.x,_=t.y+h>window.innerHeight-4?Math.max(4,t.y-h):t.y;return d.style.transform=`translate(${Math.round(g)}px, ${Math.round(_)}px)`,d.querySelector(`button:not(:disabled)`)?.focus({preventScroll:!0}),s}function Mt(){return(Mt=e((()=>{pe(),o(),P(),M(),At(),h()})))()}var Y;function Nt(){return(Nt=e((()=>{y(),Y={band:`msp-shell-dock-band`,barTab:`msp-shell-dock-barTab`,body:`msp-shell-dock-body`,bodyContent:`msp-shell-dock-bodyContent`,bottom:`msp-shell-dock-bottom`,collapsedBar:`msp-shell-dock-collapsedBar`,compact:`msp-shell-dock-compact`,content:`msp-shell-dock-content`,dock:`msp-shell-dock-dock`,floating:`msp-shell-dock-floating`,floatingBottom:`msp-shell-dock-floatingBottom`,floatingLeft:`msp-shell-dock-floatingLeft`,floatingRight:`msp-shell-dock-floatingRight`,floatingTop:`msp-shell-dock-floatingTop`,frameless:`msp-shell-dock-frameless`,header:`msp-shell-dock-header`,left:`msp-shell-dock-left`,pin:`msp-shell-dock-pin`,rail:`msp-shell-dock-rail`,"rail-menu-in":`msp-shell-dock-rail-menu-in`,railFoot:`msp-shell-dock-railFoot`,railMenu:`msp-shell-dock-railMenu`,railMenuRows:`msp-shell-dock-railMenuRows`,railMenuScroll:`msp-shell-dock-railMenuScroll`,right:`msp-shell-dock-right`,splitter:`msp-shell-dock-splitter`,strip:`msp-shell-dock-strip`,tab:`msp-shell-dock-tab`,title:`msp-shell-dock-title`,top:`msp-shell-dock-top`},v(`views/shell/dock.module.css`,`@layer msp.components {
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
`)})))()}function Pt(e){return zt.find(t=>e>=t.min)??zt[zt.length-1]}function Ft(e,t){let n=Pt(t);if(t<=0)return{step:n,hidden:Bt};let r=(e,t)=>{let r=new Set(e.map(e=>e.section)),i=0;for(let t of e)i+=t.captioned?n.captioned:n.button;return t&&(i+=n.button,r.add(`more`)),i+Math.max(0,r.size-1)};if(r(e,!1)<=t)return{step:n,hidden:Bt};let i=e.map((e,t)=>({e,i:t})).sort((e,t)=>t.e.priority-e.e.priority||t.i-e.i).map(e=>e.e),a=new Set,o=e;for(let e of i)if(a.add(e.id),o=o.filter(t=>t!==e),r(o,!0)<=t)break;return{step:n,hidden:a}}function It(e){let t=[];for(let n of e){let e=n.group,r=t.find(t=>t.group===e);r?r.items.push(n):t.push({group:e,items:[n]})}return t.sort((e,t)=>e.group===void 0?-1:+(t.group===void 0))}function Lt(e,t){let n=(e,t)=>({id:`tab:${e.id}`,section:t,priority:e.priority,captioned:!1,kind:`tab`,tab:e}),r=(e,t)=>({id:`tool:${e.id}`,section:t,priority:e.priority,captioned:!!e.caption,kind:`tool`,item:e}),i=[];for(let t of e.filter(e=>e.place===`head`))i.push(n(t,`head`));for(let t of e.filter(e=>!e.place||e.place===`strip`))i.push(n(t,`strip`));let a=It(t);for(let e of a)if(e.group!==void 0)for(let t of e.items)i.push(r(t,`group:${e.group}`));for(let t of e.filter(e=>e.place===`foot`))i.push(n(t,`foot`));for(let e of a)if(e.group===void 0)for(let t of e.items)i.push(r(t,`lead`));return i.map((e,t)=>e.priority===void 0?{...e,priority:t}:e)}function Rt(e){let t=E([]),n=new Map,r=[],a=()=>t.set(r.filter(e=>!e.visible||n.get(e.visible)?.on===!0)),o=()=>{for(let e of n.values())e.stop();n.clear()};return s(e,e=>{r=e;let t=new Set;for(let r of e){let e=r.visible;if(!e||(t.add(e),n.has(e)))continue;let i={on:void 0,stop:()=>{}};n.set(e,i);let o=!0,s=e.subscribe(e=>{i.on=e,o||a()});o=!1,i.stop=()=>s.unsubscribe()}for(let[e,r]of n)t.has(e)||(r.stop(),n.delete(e));a()}),te(e=>{e||o()}),i(o),t.asReadonly}var zt,Bt,Vt,Ht,Ut;function Wt(){return(Wt=e((()=>{o(),P(),O(),w(),zt=[{name:`normal`,min:620,button:40,captioned:46},{name:`compact`,min:530,button:34,captioned:40},{name:`small`,min:0,button:30,captioned:36}],Bt=new Set,Vt=(e,t)=>e.size===t.size&&[...e].every(e=>t.has(e)),Ht=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]),Ut=class{constructor(e,t){this.height=E(0),this.menu=E(void 0);let n=Rt(C(e.toolbar,e=>e.filter(e=>e.place!==`canvas`)));this.entries=C([t.tabs,n],(e,t)=>Lt(e,t));let r=C([this.entries,this.height.asReadonly],(e,t)=>({entries:e,fit:Ft(e,t)}));this.hidden=C(r,e=>e.fit.hidden,Vt),this.overflow=C(r,e=>e.entries.filter(t=>e.fit.hidden.has(t.id)),Ht)}toggleMenu(e,t){let n=this.menu.value;if(n&&n.anchor===e)return this.menu.set(void 0);let r=this.#e?.parentElement,i=r?r.getBoundingClientRect().bottom-e.getBoundingClientRect().bottom:0;this.menu.set({bottom:i,anchor:e,...t?{item:t}:{}})}#e;observe(e){this.#e=e;let t=ue(e,e=>{let t=Math.round(e[e.length-1].contentRect.height);t!==this.height.value&&this.height.set(t)});return()=>t?.disconnect()}}})))()}function X(e){let t=f(`div`,{class:e.class,style:`display: contents`}),r=e.renderer.mount(t,e.ctx,n(`ViewHost`));return i(r),t}function Gt(){return(Gt=e((()=>{o(),h()})))()}function Z(e,t){let n=on.get(t);if(n)return n;let r=C(t.state,e=>e,(e,t)=>e.size===t.size&&e.pinned===t.pinned&&e.floating===t.floating),i=C(r,e=>e.size),a=t.id===`right`?C([t.state,e.overlay],(e,t)=>t||e.collapsed?void 0:e.active):C(t.state,e=>e.collapsed?void 0:e.active);return n={size:i,sizePx:C(i,e=>`${e}px`),pinned:C(r,e=>e.pinned),floating:C(r,e=>e.floating),selected:De(a)},on.set(t,n),n}function Kt(e){let{shell:t,dock:n}=e,a=n.id===`top`||n.id===`bottom`,o=C(n.tabs,e=>e.length>0),s=C(t.mode,e=>e===`compact`&&n.id===`right`),c=C([t.overlay,s],(e,t)=>t?e:void 0),l=C([n.tabs,s],(e,t)=>t&&e.some(e=>e.compactBar)?e.filter(e=>e.compactBar):e),u=!a||C([n.tabs,n.active],(e,t)=>e.length>1&&!!t),d=ge(`msp-panel`),p;return f(x,{when:o,children:()=>{let o=Z(t,n).sizePx,h=m(`div`,{class:`${Y.dock} ${Y[n.id]}`,ref:e=>{p=e},children:[f(x,{when:n.active,reveal:!0,swap:()=>p,fallback:a?()=>f(Qt,{shell:t,dock:n}):void 0,children:e=>f(rn,{shell:t,dock:n,tab:e,id:d,...n.id===`right`?{coveredBy:c}:{}})}),f(x,{when:s,children:()=>f(Tn,{shell:t})}),f(x,{when:u,children:()=>{let o,c=m(`div`,{class:Y.strip,children:[f(`div`,{role:`tablist`,"aria-label":`Panels`,style:`display: contents`,ref:e=>{o=e,i(he(e))},children:f(S,{each:l,children:e=>f(tn,{shell:t,dock:n,tab:e,panel:d})})}),e.stripEnd]});return r([s],()=>R(o,`aria-orientation`,s.value||a?`horizontal`:`vertical`)),c}})]});return r([o,s,c],()=>{be(h,Y.compact,s.value),R(h,`data-covered`,!!c.value),L(h,`--msp-dock-size`,o.value)}),h}})}function qt(e){let{shell:t,dock:n}=e,a=Z(t,n).sizePx,o=new Ut(t,n),s=C([n.tabs,o.hidden],(e,t)=>t.size?e.filter(e=>!t.has(`tab:${e.id}`)):e),c=C(s,e=>e.filter(e=>e.place===`head`),T),l=C(s,e=>e.filter(e=>!e.place||e.place===`strip`),T),u=C(s,e=>e.filter(e=>e.place===`foot`),T),d=ge(`msp-panel`);if(n.id===`top`||n.id===`bottom`){let e=C(n.active,e=>e?.frame===`none`),i=f(`div`,{class:`${Y.floating} ${n.id===`top`?Y.floatingTop:Y.floatingBottom}`,children:f(x,{when:n.active,reveal:`fade`,children:e=>f(rn,{shell:t,dock:n,tab:e,id:d})})});return r([e,a],()=>{be(i,Y.band,e.value),L(i,`--msp-dock-size`,a.value)}),i}let p=C(o.height.asReadonly,e=>`${(e>0?Pt(e):zt[0]).button}px`),h=m(`div`,{class:`${Y.floating} ${n.id===`left`?Y.floatingLeft:Y.floatingRight}`,children:[m(`div`,{class:`${Y.rail} ${J.frame}`,ref:e=>{i(o.observe(e))},children:[e.railLead,f(x,{when:C(c,e=>e.length>0),children:()=>f(`div`,{class:Y.strip,role:`tablist`,"aria-orientation":`vertical`,"aria-label":`Home`,ref:e=>i(he(e)),children:f(S,{each:c,children:e=>f(tn,{shell:t,dock:n,tab:e,panel:d})})})}),f(x,{when:C(l,e=>e.length>0),children:()=>f(`div`,{class:Y.strip,role:`tablist`,"aria-orientation":`vertical`,"aria-label":`Panels`,ref:e=>i(he(e)),children:f(S,{each:l,children:e=>f(tn,{shell:t,dock:n,tab:e,panel:d})})})}),e.railItems?.(o),f(Yt,{shell:t,dock:n,rail:o,root:()=>h}),m(`div`,{class:Y.railFoot,children:[f(x,{when:C(u,e=>e.length>0),children:()=>f(`div`,{class:Y.strip,role:`tablist`,"aria-orientation":`vertical`,"aria-label":`More panels`,ref:e=>i(he(e)),children:f(S,{each:u,children:e=>f(tn,{shell:t,dock:n,tab:e,panel:d})})})}),e.railFoot?.(o)]})]}),f(x,{when:n.active,reveal:`side`,swap:()=>h,children:e=>f(rn,{shell:t,dock:n,tab:e,id:d,pinnable:!0,coveredBy:t.overlay})}),f(Xt,{shell:t,dock:n,rail:o})]});return r([a,p],()=>{L(h,`--msp-dock-size`,a.value),L(h,`--msp-rail-head`,p.value)}),h}function Jt(e,t,n){t.id===`right`&&e.overlay.value?(e.closeOverlay(),e.show(n.id)):e.select(n.id)}function Yt(e){let{rail:t}=e,n=t.menu,a=C(n.asReadonly,e=>!!e);return f(x,{when:C(t.overflow,e=>e.length>0),children:()=>{i(()=>n.set(void 0));let e=f(`button`,{type:`button`,class:Y.tab,"data-tip":`More`,"data-tip-side":`left`,"aria-label":`More`,"aria-haspopup":`menu`,onClick:e=>t.toggleMenu(e.currentTarget),onKeyDown:e=>{e.key!==`ArrowDown`&&e.key!==`ArrowUp`||n.value||(e.preventDefault(),e.currentTarget.click())},children:f(N,{name:`ellipsis`,size:20})});return r([a],()=>R(e,`aria-expanded`,String(a.value))),f(`nav`,{class:Y.strip,"aria-label":`More buttons`,children:e})}})}function Xt(e){let{shell:t,dock:n,rail:a}=e,o=a.menu,s=C([o.asReadonly,a.overflow],(e,t)=>e&&(e.item?e.item.menu?.length:t.length>0)?e:void 0),c=(e,r)=>{if(o.set(void 0),e.tab)return Jt(t,n,e.tab);let i=e.item;i.overlay?t.toggleOverlay(i.overlay,r):i.run?.(r)};return F(document,`keydown`,e=>{if(e.key!==`Escape`||!o.value||!V(o.value.anchor,e))return;let t=o.value.anchor;o.set(void 0),t.focus(),e.preventDefault()}),F(document,`pointerdown`,e=>{let t=o.value;if(!t)return;let n=ke(e);B(e,t.anchor)||n.closest?.(`.${Y.railMenu}`)||o.set(void 0)}),f(x,{when:s,children:e=>{let t=ve(()=>e.anchor),n;i(()=>t(n));let s=e.item?ln(e.item):void 0,l=f(`div`,{class:J.toolMenuCard,role:`menu`,"aria-label":e.item?un(e.item):`More`,onKeyDown:we,ref:e=>{n=e,queueMicrotask(()=>ye(e))},children:f(I,{class:Y.railMenuScroll,contentClass:Y.railMenuRows,children:e.item?f(gn,{items:e.item.menu,onRun:()=>o.set(void 0)}):f(S,{each:a.overflow,children:t=>f(Zt,{entry:t,onRun:()=>c(t,e.anchor)})},e=>e.id)})});return s&&r([s],()=>R(l,`aria-label`,s.value.title)),f(`div`,{class:Y.railMenu,style:{bottom:`${e.bottom}px`},children:l})}})}function Zt(e){let{entry:t}=e,n=t.item?ln(t.item):void 0,i=document.createTextNode(t.tab?t.tab.title:n?n.value.title:un(t.item));return n&&r([n],()=>z(i,n.value.title)),m(`button`,{type:`button`,role:`menuitem`,class:J.toolMenuRow,onClick:()=>e.onRun(),children:[t.tab?f(N,{name:t.tab.icon,size:16}):f(dn,{item:t.item,size:16,...n?{face:n}:{}}),f(`span`,{class:J.toolMenuLabel,children:i}),f(`span`,{})]})}function Qt(e){let{shell:t,dock:n}=e;return f(`div`,{class:Y.collapsedBar,children:f(S,{each:n.tabs,children:e=>m(`button`,{type:`button`,class:Y.barTab,onClick:()=>t.show(e.id),title:`Show ${e.title}`,children:[f(N,{name:n.id===`top`?`chevron-down`:`chevron-up`,size:14}),e.title]})})})}function $t(e,t){return[{id:`hide`,label:`Hide ${t.title}`,icon:`eye-off`,run:()=>e.hideTab(t.id)},...e.hiddenTabs.value.map(t=>({id:`show:${t.id}`,label:`Show ${t.title}`,icon:`eye`,run:()=>e.showTab(t.id)})),{id:`reset`,label:`Reset layout`,icon:`rotate-ccw`,run:()=>e.resetLayout()}]}function en(e,t,n,r){let i=n.closest(`.msp-root`)??document.body,a=n.getBoundingClientRect();jt(i,r??{x:a.left,y:a.bottom},$t(e,t))}function tn(e){let{shell:t,dock:n,tab:i}=e,a=Z(t,n).selected.key(i.id),o=f(`button`,{type:`button`,role:`tab`,class:Y.tab,"data-tip":i.title,"data-tip-side":`left`,"aria-label":i.title,"aria-controls":e.panel,"data-tab":i.id,onClick:()=>Jt(t,n,i),onContextMenu:e=>{e.preventDefault(),en(t,i,e.currentTarget,{x:e.clientX,y:e.clientY})},onKeyDown:e=>{(e.key===`ContextMenu`||e.shiftKey&&e.key===`F10`)&&(e.preventDefault(),en(t,i,e.currentTarget))},children:f(N,{name:i.icon,size:20})});return r([a],()=>R(o,`aria-selected`,String(a.value))),o}function nn(e){let{shell:t}=e,n=t.dock(e.dock),r=C([t.mode,t.compactRail],(e,t)=>!t&&e!==`embedded`&&e!==`compact`);return f(x,{when:r,children:()=>f(H,{variant:`ghost`,size:`sm`,class:Y.pin,icon:f(N,{name:`pin`}),title:`Pin beside the canvas`,pressed:Z(t,n).pinned,onClick:()=>t.setPinned(e.dock,!n.state.value.pinned)})})}function rn(e){let{shell:t,dock:n,tab:r}=e,a=!e.coveredBy||C(e.coveredBy,e=>!e),o,s=!1,c=e=>{let t=e.relatedTarget;if(t){s=!!o?.contains(t);return}let n=ke(e);queueMicrotask(()=>{let e=Ee();e&&o?.contains(e)||n.isConnected&&!n.closest(`[inert]`)&&(s=!1)})};return i(()=>{if(!s)return;let e=Ee();if(e&&!o?.contains(e))return;let t=o?.closest(`.msp-root`)??o?.getRootNode();(t?[...t.querySelectorAll(`[role="tab"]`)]:[]).find(e=>e.dataset.tab===r.id)?.focus({preventScroll:!0})}),ne(a,()=>m(`section`,{class:r.frame===`none`?`${Y.content} ${Y.frameless}`:Y.content,role:`tabpanel`,id:e.id,"aria-label":r.title,"data-msp-scope":`panel:${r.id}`,ref:e=>{o=e},onFocusIn:()=>{s=!0},onFocusOut:c,children:[f(an,{shell:t,dock:n}),m(`header`,{class:Y.header,children:[f(`h2`,{class:Y.title,children:typeof r.heading==`function`?r.heading():r.heading??r.title}),e.pinnable?f(nn,{shell:t,dock:n.id}):null,f(H,{variant:`ghost`,size:`sm`,icon:f(N,{name:`x`}),title:`Close panel`,onClick:()=>t.toggle(n.id)})]}),f(I,{class:Y.body,contentClass:Y.bodyContent,children:f(x,{when:C(t.tabFocus,e=>({section:e?.tab===r.id?e.section:void 0}),(e,t)=>e.section===t.section&&!t.section),children:e=>f(X,{renderer:r.render,ctx:{shell:t,dock:n.id,...e.section?{focus:e.section}:{}}})})})]}))}function an(e){let{shell:t,dock:n}=e,i=n.id===`left`?1:-1,a=_(-1);s(a,e=>{e>=0&&t.setSize(n.id,e)});let o,c=Z(t,n).size,l=f(`div`,{class:Y.splitter,role:`separator`,"aria-orientation":`vertical`,tabIndex:0,"aria-label":`Panel width`,onKeyDown:e=>{if(e.key!==`ArrowLeft`&&e.key!==`ArrowRight`)return;e.preventDefault();let r=(e.shiftKey?64:16)*(e.key===`ArrowRight`?1:-1);t.setSize(n.id,n.state.value.size+i*r)},onPointerEnter:e=>e.currentTarget.setAttribute(`data-active`,``),onPointerLeave:e=>{o?.active||e.currentTarget.removeAttribute(`data-active`)},ref:e=>{o=de(e,{start:t=>(e.setAttribute(`data-active`,``),{x:t.clientX,size:n.state.value.size}),move:(e,t)=>a.offer(t.size+i*(e.clientX-t.x)),end:(t,n,r)=>{if(n===`up`&&r){let t=e.getBoundingClientRect();if(r.clientX>=t.left&&r.clientX<=t.right&&r.clientY>=t.top&&r.clientY<=t.bottom)return}e.removeAttribute(`data-active`)}})},onDblClick:()=>t.setSize(n.id,n.id===`left`?300:340)});return r([c],()=>R(l,`aria-valuenow`,Math.round(c.value))),l}var on;function sn(){return(sn=e((()=>{Ie(),Mt(),M(),fe(),b(),pe(),o(),P(),Oe(),D(),w(),Ot(),Nt(),zn(),Wt(),Gt(),h(),on=new WeakMap})))()}function cn(e,t){let n=a(e);if(!n)return E(e).asReadonly;if(ie(n))return n;let r=re(n,t);return i(()=>r.dispose()),r}function ln(e){return e.face?cn(e.face,{icon:e.icon,title:e.title}):void 0}function un(e){return e.caption?`${e.title} (${e.caption})`:e.title}function dn(e){let{item:t}=e,n=e.face??ln(t);if(!n)return f(N,{name:t.icon,size:e.size});let i,a=f(`span`,{class:e.class});return r([n],()=>{let t=n.value.icon;t!==i&&(i=t,a.replaceChildren(N({name:t,size:e.size})))}),a}function fn(e){let{shell:t}=e,n=e.part??`all`,r=n===`canvas`,i=e.hidden?C([t.toolbar,e.hidden],(e,t)=>t.size?e.filter(e=>!t.has(`tool:${e.id}`)):e):t.toolbar,a=C(i,e=>{let t=It(e.filter(e=>e.place===`canvas`===r));return n===`all`||r?t:t.filter(e=>n===`lead`?e.group===void 0:e.group!==void 0)});return f(`div`,{class:J.sections,children:f(S,{each:a,children:n=>f(`div`,{class:J.toolbar,role:`toolbar`,"aria-orientation":e.menus?`horizontal`:`vertical`,"aria-label":n.group??`commands`,children:n.items.map(n=>n.visible?f(x,{when:n.visible,children:()=>f(mn,{shell:t,item:n,menus:e.menus,railMenu:e.railMenu})}):f(mn,{shell:t,item:n,menus:e.menus,railMenu:e.railMenu}))})},e=>e.group??``)})}function pn(e,t){let n=cn(t.pressed??!1,!1),r=t.overlay;return r?C([e.overlay,n],(e,t)=>e?.overlay.id===r||t):n}function mn(e){let{shell:t,item:n,menus:i}=e,a=!i&&n.menu?.length?e.railMenu:void 0,o=i&&n.menu?.length?i:void 0,s=n.pressed||n.overlay?pn(t,n):void 0,c=ln(n),l=c?void 0:un(n),u=o?.shown.key(n),d=m(`button`,{type:`button`,class:J.tool,"data-captioned":n.caption?``:void 0,"data-tip":o?void 0:l,"data-tip-side":n.place===`canvas`?`top`:`left`,"aria-label":l,"aria-haspopup":o||a?`menu`:void 0,"data-overlay-trigger":n.overlay?``:void 0,"data-keeps-card":n.keepsCard?``:void 0,onClick:e=>{if(o&&!n.overlay&&!n.run)return o.show(n,e.currentTarget,e.detail===0);if(o&&Nn())return o.open.value?.item===n?o.hide():o.show(n,e.currentTarget,e.detail===0);if(a)return a(n,e.currentTarget);o?.hide(),n.overlay?t.toggleOverlay(n.overlay,e.currentTarget):n.run?.(e.currentTarget)},onKeyDown:o?e=>{(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),o.show(n,e.currentTarget,!0))}:void 0,onPointerEnter:o?e=>e.pointerType===`mouse`&&o.show(n,e.currentTarget):void 0,onPointerLeave:o?()=>o.hideSoon():void 0,onBlur:o?()=>o.hideSoon():void 0,children:[f(dn,{item:n,size:n.caption?16:20,class:J.face,...c?{face:c}:{}}),n.caption?f(`span`,{class:J.caption,children:n.caption}):null,o?f(`span`,{class:J.menuMark,"aria-hidden":`true`}):null]}),p=[];return c&&p.push(c),s&&p.push(s),u&&p.push(u),p.length&&r(p,()=>{c&&(R(d,`aria-label`,c.value.title),o||R(d,`data-tip`,c.value.title)),s&&R(d,`aria-pressed`,String(s.value)),u&&R(d,`aria-expanded`,String(u.value))}),d}function hn(e,t){let n=e.menu??[];return!e.run||!Nn()?n:[{id:`${e.id}:self`,label:e.title,icon:e.icon,group:``,run:()=>e.run?.(t)},...n]}function gn(e){let{onSubmenu:t}=e;return f(l,{children:e.items.map((n,r,i)=>m(l,{children:[r>0&&n.group!==i[r-1].group?f(`div`,{class:J.toolMenuDivider,role:`separator`}):null,n.items&&!t?m(l,{children:[f(`div`,{class:J.toolMenuHeading,role:`presentation`,children:n.label}),f(x,{when:n.items,children:t=>f(gn,{items:t,onRun:e.onRun})})]}):n.items&&t?m(`button`,{type:`button`,role:`menuitem`,"aria-haspopup":`menu`,class:J.toolMenuRow,disabled:!!n.disabled,onPointerEnter:e=>t(n,e.currentTarget),onClick:e=>t(n,e.currentTarget,!0),onKeyDown:e=>{e.key===`ArrowRight`&&(e.preventDefault(),t(n,e.currentTarget,!0))},children:[n.icon?f(N,{name:n.icon,size:16}):f(`span`,{}),m(`span`,{class:J.toolMenuLabel,children:[n.label,n.disabled||n.hint?f(`span`,{class:J.toolMenuHint,children:n.disabled??n.hint}):null]}),f(N,{name:`chevron-right`,size:14,class:J.toolMenuChevron})]}):m(`button`,{type:`button`,role:n.pressed?n.choice?`menuitemradio`:`menuitemcheckbox`:`menuitem`,"aria-checked":n.pressed,class:J.toolMenuRow,disabled:!!n.disabled,onPointerEnter:t?()=>t(void 0):void 0,onClick:()=>{e.onRun(),n.run()},children:[n.icon?f(N,{name:n.icon,size:16}):f(`span`,{}),m(`span`,{class:J.toolMenuLabel,children:[n.label,n.disabled||n.hint?f(`span`,{class:J.toolMenuHint,children:n.disabled??n.hint}):null]}),n.pressed?f(x,{when:n.pressed,children:()=>f(N,{name:`check`,size:14,class:J.toolMenuCheck})}):null]})]}))})}function _n(e,t,n){let r=t.pressed||t.overlay?pn(e,t):void 0,i=()=>{t.overlay?e.toggleOverlay(t.overlay,n()):t.run?.(n())},a={id:t.id,label:t.title,icon:t.icon,group:t.group??``},o=t.menu??[];if(!o.length)return{...a,...r?{pressed:r}:{},run:i};let s=(t.run||t.overlay)&&!o.some(e=>e.label===t.title)?[{id:`${t.id}:self`,label:t.title,icon:t.icon,group:``,...r?{pressed:r}:{},run:i}]:[];return{...a,run:()=>{},items:E([...s,...o]).asReadonly}}function vn(e,t,r){let i=n(`collapsedRows`),a=new Map,o=t=>{let n=a.get(t);if(!n){let o=i.child();a.set(t,n={row:ee(o,()=>_n(e,t,r)),scope:o})}return n.row},s=Rt(C(e.toolbar,e=>It(e.filter(e=>e.place===`canvas`)).flatMap(e=>e.items)));return C([cn(t??[],[]),s],(e,t)=>{let n=[...e.map(e=>({...e,group:e.group??`lead`})),...t.map(o)];if(a.size>t.length){let e=new Set(t);for(let[t,n]of a)e.has(t)||(n.scope.dispose(),a.delete(t))}return n})}function yn(e){let{shell:t}=e,n=new In,a,o,c={rows:vn(t,e.leadMenu,()=>o??a)},l=t.toolbarCollapsed,u=ne(C(l,e=>!e),()=>m(`div`,{class:J.bar,children:[f(`div`,{class:J.frame,children:m(I,{axis:`x`,contentClass:J.stackTools,children:[e.lead,f(fn,{shell:t,part:`canvas`,menus:n})]})}),e.aside]})),d=C(c.rows,e=>e.length>0),p=e.quiet===void 0?void 0:cn(e.quiet,!1),h=m(`div`,{class:J.stack,children:[u,f(x,{when:l,children:()=>f(x,{when:d,children:()=>f(`div`,{class:`${J.frame} ${J.folded}`,children:f(bn,{menus:n,popup:c,ref:e=>{o=e}})})})}),f(xn,{menus:n})]});return a=h,r(p?[l,p]:[l],()=>{R(u,`hidden`,l.value),p&&R(h,`data-quiet`,p.value)}),s(l,()=>n.hide()),n.stack=h,i(()=>n.dispose()),h}function bn(e){let{menus:t,popup:n}=e,i=t.shown.key(Pn),a=m(`button`,{type:`button`,class:J.tool,"data-stack-collapsed":``,"aria-label":`Toolbar`,"aria-haspopup":`menu`,ref:e.ref,onClick:e=>{if(Nn()&&t.open.value?.item===Pn)return t.hide();t.show(Pn,e.currentTarget,e.detail===0,n)},onKeyDown:e=>{(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),t.show(Pn,e.currentTarget,!0,n))},onPointerEnter:e=>e.pointerType===`mouse`&&t.show(Pn,e.currentTarget,!1,n),onPointerLeave:()=>t.hideSoon(),onBlur:()=>t.hideSoon(),children:[f(N,{name:`wrench`,size:18}),f(`span`,{class:J.menuMark,"aria-hidden":`true`})]});return r([i],()=>R(a,`aria-expanded`,String(i.value))),a}function xn(e){let{menus:t}=e;return F(document,`keydown`,e=>{e.key===`Escape`&&!e.defaultPrevented&&t.open.value&&(!t.stack||V(t.stack,e))&&(t.hide(),e.preventDefault())}),F(document,`pointerdown`,e=>{let n=t.open.value;if(!n)return;let r=e.composedPath();t.menu&&r.includes(t.menu)||r.includes(n.button)||t.hide()},{capture:!0}),f(x,{when:t.open,children:e=>{let n=!1,r;i(()=>{if(t.menu===r&&(t.menu=void 0),!n)return;let i=Ee();(!i||r?.contains(i))&&e.button.focus({preventScroll:!0})});let a=E(void 0),o,s=(e,n,i=!1)=>{if(!e||!n||!r){a.value&&a.set(void 0);return}let s=n.getBoundingClientRect().bottom,c=Math.round(r.getBoundingClientRect().bottom-s),l=t.roomAbove(t.stack,s);(a.value?.item!==e||a.value.bottom!==c||a.value.room!==l)&&a.set({item:e,row:n,bottom:c,room:l}),i&&queueMicrotask(()=>o&&ye(o))},c=e=>{if(e.key===`ArrowLeft`||e.key===`Escape`){e.preventDefault();let t=a.value?.row;a.set(void 0),t?.focus({preventScroll:!0})}else we(e)};return m(`div`,{class:J.toolMenu,style:{right:`${e.right}px`,...e.room?{"--msp-menu-room":`${e.room}px`}:{}},role:`menu`,"aria-label":e.item.title,ref:e=>{r=e,t.menu=e},onPointerEnter:()=>t.keep(),onPointerLeave:()=>t.hideSoon(),onFocusIn:()=>{n=!0,t.keep()},onFocusOut:()=>t.hideSoon(),children:[f(`div`,{class:J.toolMenuCard,onKeyDown:we,children:e.popup?f(l,{children:f(x,{when:e.popup.rows,children:e=>f(I,{class:J.toolMenuScroll,contentClass:J.toolMenuScrollContent,children:f(gn,{items:e,onRun:()=>t.hide(),onSubmenu:s})})})}):f(I,{class:J.toolMenuScroll,contentClass:J.toolMenuScrollContent,children:f(gn,{items:hn(e.item,e.button),onRun:()=>t.hide(),onSubmenu:s})})}),f(x,{when:a,children:e=>f(`div`,{class:J.toolSubmenu,style:{bottom:`${e.bottom}px`,...e.room?{"--msp-menu-room":`${e.room}px`}:{}},role:`menu`,"aria-label":e.item.label,ref:e=>{o=e},onKeyDown:c,children:f(`div`,{class:J.toolMenuCard,children:f(I,{class:J.toolMenuScroll,contentClass:J.toolMenuScrollContent,children:f(x,{when:e.item.items,children:e=>f(gn,{items:e,onRun:()=>t.hide()})})})})})})]})}})}function Sn(e){let{shell:t}=e,n=E(!1),a=t.dock(`right`),o=C(t.toolbar,e=>e.filter(e=>e.place!==`canvas`&&!e.group)),s=C(t.toolbar,e=>e.filter(e=>e.place!==`canvas`&&e.group)),c=C(a.tabs,e=>e.some(e=>e.compactBar)?e.filter(e=>!e.compactBar):[]),l,u=(e,r)=>{n.set(!1),e.overlay?t.toggleOverlay(e.overlay,r):e.run?.(r)},d,p=m(`div`,{class:J.railMenu,children:[f(S,{each:o,children:e=>{let t=ln(e),n=t?void 0:un(e),i=f(`button`,{type:`button`,class:J.railMenuButton,"aria-label":n,"data-tip":n,onClick:t=>u(e,t.currentTarget),children:f(dn,{item:e,size:20,class:J.face,...t?{face:t}:{}})});return t&&r([t],()=>{R(i,`aria-label`,t.value.title),R(i,`data-tip`,t.value.title)}),i}},e=>e.id),m(`div`,{class:J.railMenuAnchor,children:[f(`button`,{type:`button`,class:J.railMenuButton,"aria-label":`More`,"aria-haspopup":`menu`,"data-tip":`More`,ref:e=>d=e,onClick:e=>{n.set(!n.value),n.value&&e.detail===0&&queueMicrotask(()=>l&&ye(l))},onKeyDown:e=>{(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),n.set(!0),queueMicrotask(()=>l&&ye(l)))},children:f(N,{name:`ellipsis`,size:20})}),f(x,{when:n,children:()=>{let e=ve();return i(()=>e(l)),m(`div`,{class:J.railMenuList,role:`menu`,"aria-label":`More`,ref:e=>{l=e},onKeyDown:e=>{we(e),e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),n.set(!1))},children:[f(S,{each:c,children:e=>m(`button`,{type:`button`,role:`menuitem`,class:J.toolMenuRow,onClick:()=>{n.set(!1),t.show(e.id)},children:[f(N,{name:e.icon,size:16}),f(`span`,{class:J.toolMenuLabel,children:e.title}),f(`span`,{})]})},e=>e.id),f(x,{when:C([c,s],(e,t)=>e.length>0&&t.length>0),children:()=>f(`div`,{class:J.railMenuDivider})}),f(S,{each:s,children:e=>{let t=ln(e),n=e.visible?cn(e.visible,!0):void 0,i=document.createTextNode(t?t.value.title:un(e)),a=m(`button`,{type:`button`,role:`menuitem`,class:J.toolMenuRow,onClick:t=>u(e,t.currentTarget),children:[f(dn,{item:e,size:16,class:J.face,...t?{face:t}:{}}),f(`span`,{class:J.toolMenuLabel,children:i}),f(`span`,{})]}),o=[];return t&&o.push(t),n&&o.push(n),o.length&&r(o,()=>{t&&z(i,t.value.title),n&&R(a,`hidden`,!n.value)}),a}},e=>e.id)]})}})]})]});return r([n.asReadonly],()=>R(d,`aria-expanded`,String(n.value))),F(document,`pointerdown`,e=>{n.value&&!B(e,p)&&n.set(!1)}),p}function Cn(e){let t=C(e.status.tasks,e=>e.find(e=>e.overlay),(e,t)=>e?.id===t?.id);return f(x,{when:t,children:t=>{let n=C(e.status.tasks,e=>e.find(e=>e.id===t.id)??t),i=C(n,e=>e.progress===void 0?void 0:Math.round(e.progress*100)),a=document.createTextNode(``),o=document.createTextNode(``),s,c,l=f(`div`,{class:J.busy,role:`alertdialog`,"aria-modal":`true`,"aria-label":t.label,children:m(`div`,{class:J.busyCard,children:[m(`div`,{class:J.busyHead,children:[f(N,{name:`loader-circle`,size:18,class:J.busySpin}),f(`span`,{class:J.busyLabel,children:a}),f(`span`,{class:J.busyPercent,children:o})]}),f(`div`,{class:J.busyTrack,role:`progressbar`,"aria-valuemin":0,"aria-valuemax":100,ref:e=>s=e,children:f(`span`,{class:J.busyBar,ref:e=>c=e})}),t.abort?f(`div`,{class:J.busyActions,children:f(H,{size:`sm`,onClick:()=>t.abort?.(),children:`Cancel`})}):null]})});return r([n,i],()=>{let e=i.value;z(a,n.value.label),z(o,e===void 0?``:`${e}%`),R(s,`aria-valuenow`,e),R(c,`data-indeterminate`,e===void 0),L(c,`scale`,`${(e??30)/100} 1`)}),l}})}function wn(e){let t=Ln.get(e);return t||Ln.set(e,t=E(void 0,{compare:Object.is})),t}function Tn(e){let t=wn(e.shell),n=f(`div`,{class:J.cardSlot});return t.set(n),i(()=>{t.value===n&&t.set(void 0)}),n}function En(e){let{shell:t}=e,n=C(t.overlay,e=>!!e);return f(x,{when:n,children:()=>f(Dn,{shell:t})})}function Dn(e){let{shell:t}=e,n=t.overlay.value.anchor,a=ve(()=>n),o=ge(`msp-card-title`),s=C(t.dock(`right`).state,e=>e.pinned),c=document.createTextNode(``),l,u=wn(t),d=()=>!!u.value,p=m(`section`,{class:J.card,role:`dialog`,"aria-labelledby":o,onKeyDown:e=>{_()||me(e,e.currentTarget)},children:[m(`header`,{class:J.cardHeader,children:[f(`h2`,{class:J.cardTitle,id:o,children:c}),f(nn,{shell:t,dock:`right`}),f(H,{variant:`ghost`,size:`sm`,icon:f(N,{name:`x`}),title:`Close`,onClick:()=>t.closeOverlay()})]}),f(x,{when:t.overlay,children:e=>{n=e.anchor,_e(e.anchor)&&(l?.(),l=le(()=>{l=void 0;let e=p.querySelector(`.${J.cardBody}, .${J.cardBodyFill}`),t=Te(p);(t.find(t=>e?.contains(t))??t[t.length-1])?.focus()}));let r={shell:t,...e.focus?{focus:e.focus}:{}};return e.overlay.fill?f(`div`,{class:J.cardBodyFill,children:f(X,{renderer:e.overlay.render,ctx:r})}):f(I,{class:J.cardBody,contentClass:J.cardBodyContent,children:f(X,{renderer:e.overlay.render,ctx:r})})}})]}),h=f(`div`,{style:`display: contents`,children:p});r([u.asReadonly],()=>{let e=u.value??h;if(p.parentElement===e)return;let t=Ee(),n=t&&p.contains(t)?t:void 0;e.append(p),be(p,J.card,!u.value),be(p,J.cardDocked,!!u.value),n?.focus({preventScroll:!0})}),i(()=>p.remove()),r([s,u.asReadonly,t.overlay],()=>{R(p,`aria-modal`,String(!u.value&&!s.value)),z(c,t.overlay.value?.overlay.title??``)});let g=()=>t.dock(`right`).state.value.pinned,_=()=>d()||g(),ee=document;return F(ee,`keydown`,e=>{e.key!==`Escape`||e.defaultPrevented||g()||!V(p,e)||(t.closeOverlay(),e.preventDefault())}),F(ee,`pointerdown`,e=>{let n=t.overlay.value;if(!n)return;let r=ke(e);g()||n.overlay.persistent||B(e,p)||B(e,n.anchor)||r.closest?.(`[data-overlay-trigger], [role=tab]`)||r.closest?.(`[data-keeps-card], [data-msp-canvas]`)||t.closeOverlay()},{capture:!0}),i(()=>a(p)),h}function On(e){let{status:t}=e,n=n=>{t.setLogFilter(n===`error`?`problems`:`all`),e.onOpenLog?.()},i=document.createTextNode(``);return r([t.spoken],()=>z(i,t.spoken.value)),m(`div`,{class:J.status,children:[f(`div`,{class:J.announce,role:`status`,"aria-live":`polite`,children:i}),f(x,{when:t.current,children:e=>e.kind===`error`?m(`span`,{class:`${J.pill} ${J.message}`,"data-kind":e.kind,children:[m(`button`,{type:`button`,class:J.pillMain,title:`Show the problems in the log`,onClick:()=>n(e.kind),children:[f(N,{name:Rn[e.kind],size:14}),f(`span`,{class:J.text,children:e.text})]}),f(`button`,{type:`button`,class:J.pillButton,"aria-label":`Dismiss`,"data-tip":`Dismiss`,onClick:()=>t.dismiss(e.id),children:f(N,{name:`x`,size:14})})]}):m(`button`,{type:`button`,class:`${J.pill} ${J.message}`,"data-kind":e.kind,title:`Show the log`,onClick:()=>n(e.kind),children:[f(N,{name:Rn[e.kind],size:14}),f(`span`,{class:J.text,children:e.text})]})}),f(S,{each:C(t.tasks,e=>e.filter(e=>!e.overlay)),children:e=>f(jn,{task:e})}),e.after]})}function kn(e){let t,n=0,r=0,a=!1,o=E(void 0),c=()=>{t&&clearTimeout(t),t=void 0},u=()=>{c(),!(a||n<=0)&&(r=performance.now(),t=setTimeout(()=>e.onDismiss?.(),n))},d=e=>{e!==a&&(a=e,e&&t&&(n-=performance.now()-r),e?c():u())};e.autoDismiss&&e.onDismiss&&(s(e.autoDismiss,e=>{c(),n=e??0,o.set(e),u()}),i(c));let p=m(l,{children:[e.icon,f(`span`,{class:J.text,children:e.text}),e.after]});return m(`span`,{class:J.pill,onPointerEnter:()=>d(!0),onPointerLeave:()=>d(!1),onFocusIn:()=>d(!0),onFocusOut:e=>{e.currentTarget.contains(e.relatedTarget)||d(!1)},children:[e.onClick?f(`button`,{type:`button`,class:J.pillMain,"aria-label":e.label,onClick:()=>e.onClick?.(),children:p}):p,e.onDismiss?m(`button`,{type:`button`,class:J.pillButton,"aria-label":e.dismissLabel??`Dismiss`,"data-tip":e.dismissLabel??`Dismiss`,onClick:()=>e.onDismiss?.(),children:[f(N,{name:`x`,size:14}),f(x,{when:o.asReadonly,children:e=>f(`svg`,{class:J.countdown,viewBox:`0 0 20 20`,"aria-hidden":`true`,style:{"--msp-countdown":`${e}ms`},children:f(`circle`,{cx:`10`,cy:`10`,r:`9`,pathLength:`100`})})})]}):null]})}function An(e){return m(`div`,{class:J.context,children:[e.lead,f(S,{each:e.status.chips,children:e=>m(`span`,{class:`${J.pill} ${J.chip}`,children:[f(`button`,{type:`button`,class:J.text,onClick:()=>e.activate?.(),children:e.label}),e.dismiss?f(`button`,{type:`button`,class:J.pillButton,title:`Clear`,onClick:()=>e.dismiss?.(),children:f(N,{name:`x`,size:14})}):null]})})]})}function jn(e){let{task:t}=e;return m(`span`,{class:J.pill,children:[f(N,{name:`loader-circle`,size:14,class:J.spin}),f(`span`,{class:J.text,children:t.label}),t.progress===void 0?null:f(`span`,{class:J.progress,children:f(`div`,{style:{width:`${Math.round(t.progress*100)}%`}})}),t.abort?f(`button`,{type:`button`,class:J.pillButton,title:`Cancel`,onClick:()=>t.abort?.(),children:f(N,{name:`x`,size:14})}):null]})}function Mn(e){let{shell:t}=e,n=C(t.dock(`right`).tabs,e=>e.find(e=>e.place===`head`)?.icon??`prism`),i,a,o=f(`div`,{class:`${J.stack} ${J.railToggle}`,children:f(`div`,{class:J.frame,children:f(`button`,{type:`button`,class:J.tool,"data-tip-side":`top`,ref:e=>i=e,onClick:()=>t.toggleRail(),children:f(`span`,{class:J.face,ref:e=>a=e})})})}),s;return r([n,t.railOpen],()=>{let e=t.railOpen.value,r=e?`Hide the panel rail`:`Show the panel rail`;R(i,`data-tip`,r),R(i,`aria-label`,r),R(i,`aria-pressed`,String(e)),n.value!==s&&(s=n.value,a.replaceChildren(N({name:s,size:18})))}),o}var Nn,Pn,Fn,In,Ln,Rn;function zn(){return(zn=e((()=>{Ie(),M(),fe(),b(),pe(),o(),P(),Oe(),O(),w(),Ot(),sn(),Wt(),Gt(),h(),Nn=()=>typeof matchMedia==`function`&&matchMedia(`(hover: none)`).matches,Pn={id:`toolbar`,place:`canvas`,icon:`wrench`,title:`Toolbar`},Fn=8,In=class{constructor(){this.open=E(void 0),this.shown=De(C(this.open.asReadonly,e=>e?.item))}#e;show(e,t,n=!1,r){this.keep();let i=this.stack?this.stack.getBoundingClientRect().right-t.getBoundingClientRect().right:0,a=this.roomAbove(this.stack),o=this.open.value;(o?.item!==e||o.right!==i||o.room!==a)&&this.open.set({item:e,right:i,room:a,button:t,...r?{popup:r}:{}}),n&&queueMicrotask(()=>this.menu&&ye(this.menu))}roomAbove(e,t){if(!e)return 0;let n=e.closest(`[data-msp-viewport]`),r=(t??e.getBoundingClientRect().top)-(n?.getBoundingClientRect().top??0)-Fn;return r>0?Math.round(r):0}keep(){this.#e!==void 0&&clearTimeout(this.#e),this.#e=void 0}hideSoon(){this.keep(),this.#e=setTimeout(()=>this.hide(),160)}hide(){this.keep(),this.open.value&&this.open.set(void 0)}dispose(){this.keep()}},Ln=new WeakMap,Rn={info:`info`,success:`circle-check`,warning:`triangle-alert`,error:`circle-alert`}})))()}function Bn(e){let t=e.status.logFilter,n=E(``),r=C(e.status.logged,e=>{let t=new Set;for(let n of e)n.source!==void 0&&t.add(n.source);return[...t].sort()},(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n])),i=C(r,e=>[{id:`all`,label:`All`,icon:`list`},{id:`messages`,label:`Messages`,icon:`info`},...e.map(e=>({id:`source:${e}`,label:e,icon:Hn[e]??`tag`})),{id:`problems`,label:`Problems`,icon:`triangle-alert`}]),a=C([e.status.logged,t,n.asReadonly],(e,t,n)=>{let r=n.trim().toLowerCase();return t===`all`&&!r?e:e.filter(e=>Un(e,t,r))});return m(`div`,{class:q.log,children:[m(`div`,{class:q.filters,children:[f(`div`,{class:q.kinds,role:`group`,"aria-label":`Show`,children:f(S,{each:i,children:n=>f(H,{variant:`ghost`,size:`sm`,icon:f(N,{name:n.icon,size:15}),title:n.label,pressed:C(t,e=>e===n.id),onClick:()=>e.status.setLogFilter(n.id)})},e=>e.id)}),f(Fe,{search:!0,size:`sm`,class:q.search,placeholder:`Filter`,"aria-label":`Filter the log`,value:n.asReadonly,onInput:e=>n.set(e)})]}),f(`div`,{class:q.entries,role:`log`,"aria-live":`off`,"aria-label":`Log`,children:f(S,{each:a,fallback:()=>f(`p`,{class:q.empty,children:C(e.status.logged,e=>e.length?`Nothing matches.`:`No messages yet.`)}),children:e=>m(`div`,{class:q.entry,"data-kind":e.kind,"data-source":e.source,children:[f(N,{name:Rn[e.kind],size:14,class:q.kind}),f(`span`,{class:q.text,children:e.text}),e.detail?f(`span`,{class:q.detail,children:e.detail}):f(`span`,{}),f(`time`,{class:q.time,dateTime:e.time.toISOString(),children:Vn.format(e.time)})]})},e=>e.id)})]})}var Vn,Hn,Un;function Wn(){return(Wn=e((()=>{Ie(),M(),Pe(),b(),O(),w(),Dt(),zn(),h(),Vn=new Intl.DateTimeFormat(void 0,{hour:`2-digit`,minute:`2-digit`,second:`2-digit`}),Hn={Transforms:`layers`,Plugin:`wrench`},Un=(e,t,n)=>t===`messages`&&e.source!==void 0||t===`problems`&&e.kind!==`warning`&&e.kind!==`error`||t.startsWith(`source:`)&&e.source!==t.slice(7)?!1:!n||e.text.toLowerCase().includes(n)||!!e.detail?.toLowerCase().includes(n)})))()}var Q;function Gn(){return(Gn=e((()=>{y(),Q={canvas:`msp-shell-canvas`,canvasLayer:`msp-shell-canvasLayer`,layer:`msp-shell-layer`,shell:`msp-shell-shell`,viewport:`msp-shell-viewport`},v(`views/shell/shell.module.css`,`@layer msp.components {
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
`)})))()}var Kn;function qn(){return(qn=e((()=>{y(),Kn={empty:`msp-shell-empty-canvas-empty`,"fade-in":`msp-shell-empty-canvas-fade-in`,"fade-out":`msp-shell-empty-canvas-fade-out`,mark:`msp-shell-empty-canvas-mark`,splash:`msp-shell-empty-canvas-splash`},v(`views/shell/empty-canvas.module.css`,`@layer msp.components {
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
`)})))()}function Jn(e){let t=E(`gone`),n=n=>{let r=t.value,i=n===`out`&&r!==`in`?`gone`:n;i!==r&&(t.set(i),i===`in`?e.onCanvasShown?.(!1):i===`out`&&e.onCanvasShown?.(!0))},r=`gone`,i=ce(()=>n(r)),a=(e,t)=>{r=t,i.start(e)},o,c=!1,l=()=>{i.cancel(),o!==void 0&&(o?c||a(Yn,`in`):(n(`out`),a(Zn,`gone`)))};s(e.empty,e=>{e!==o&&(o=e,l())}),e.busy!==void 0&&s(e.busy,e=>{c=e,l()}),e.onCanvasShown&&d(e.empty,t=>!t&&e.onCanvasShown?.(!0));let u=e.splash??!0,p=()=>{if(typeof u==`object`)return`light`;let t=e.field??`random`;return t===`random`?Math.random()<Xn?`quantum`:`light`:t};return f(x,{when:C(t.asReadonly,e=>e!==`gone`),children:()=>{let e=f(Be,{scale:3,flash:`reveal`,live:!u,prism:!u,class:Kn.mark});return m(`div`,{class:Kn.empty,"data-phase":t.asReadonly,children:[u?f(`div`,{class:Kn.splash,children:f(He,{field:p(),mark:()=>e,pointer:()=>e.closest(`[data-msp-viewport]`)??e.parentElement,options:u===!0?{}:u})}):null,e]})}})}var Yn,Xn,Zn;function Qn(){return(Qn=e((()=>{ze(),b(),o(),P(),O(),w(),qn(),Ve(),h(),Yn=700,Xn=2/3,Zn=250})))()}var $n;function er(){return(er=e((()=>{y(),$n={"drop-in":`msp-shell-file-drop-drop-in`,hint:`msp-shell-file-drop-hint`,overlay:`msp-shell-file-drop-overlay`,target:`msp-shell-file-drop-target`,title:`msp-shell-file-drop-title`},v(`views/shell/file-drop.module.css`,`@layer msp.components {
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
`)})))()}function tr(e){let t=E(!1);F(e.target,`dragenter`,e=>{nr(e)&&t.set(!0)});let n=e=>{e.preventDefault(),e.stopPropagation(),e.dataTransfer&&(e.dataTransfer.dropEffect=`copy`)},i=f(`div`,{class:$n.overlay,onDragEnter:n,onDragOver:n,onDragLeave:()=>t.set(!1),onDrop:r=>{n(r),t.set(!1);let i=[...r.dataTransfer?.files??[]];i.length&&e.onDrop(i)},children:m(`div`,{class:$n.target,children:[f(N,{name:`folder-open`,size:24}),f(`span`,{class:$n.title,children:`Drop to open`}),e.formats?.length?f(`span`,{class:$n.hint,children:e.formats.join(`, `)}):null]})});return r([t],()=>R(i,`hidden`,!t.value)),i}function nr(e){let t=e.dataTransfer?.types;if(!t)return!1;for(let e=0;e<t.length;e++)if(t[e]===`Files`)return!0;return!1}function rr(){return(rr=e((()=>{M(),o(),P(),O(),er(),h()})))()}var ir;function ar(){return(ar=e((()=>{y(),ir={body:`msp-shell-page-body`,header:`msp-shell-page-header`,headerContent:`msp-shell-page-headerContent`,page:`msp-shell-page-page`,"page-in":`msp-shell-page-page-in`,title:`msp-shell-page-title`},v(`views/shell/page.module.css`,`@layer msp.components {
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
`)})))()}function or(e){let{shell:t}=e,n=C(t.page,e=>e?.page);return f(x,{when:n,children:e=>f(sr,{shell:t,page:e})})}function sr(e){let{shell:t}=e,n={page:e.page,focus:t.page.value?.focus},r={shell:t,...n.focus?{focus:n.focus}:{}},a=m(`section`,{class:ir.page,role:`region`,"aria-label":n.page.title,tabIndex:-1,"data-msp-page":``,children:[m(`header`,{class:ir.header,children:[m(`span`,{class:ir.title,children:[n.page.icon?f(N,{name:n.page.icon}):null,n.page.title]}),f(`div`,{class:ir.headerContent,children:n.page.header?f(X,{renderer:n.page.header,ctx:r}):null}),f(H,{variant:`ghost`,size:`sm`,icon:f(N,{name:`x`}),title:`Close (Esc)`,onClick:()=>t.closePage()})]}),f(`div`,{class:ir.body,children:f(X,{renderer:n.page.render,ctx:r})})]}),o=Me(document);return F(document,`keydown`,e=>{if(e.key!==`Escape`||e.defaultPrevented||!V(a,e))return;let n=Me(a);(!n||n===document.body||a.contains(n))&&(t.closePage(),e.preventDefault())}),queueMicrotask(()=>{a.contains(Me(a))||a.focus({preventScroll:!0})}),i(()=>{o?.isConnected&&o.focus({preventScroll:!0})}),a}function cr(){return(cr=e((()=>{Ie(),M(),b(),o(),P(),ar(),Gt(),w(),h()})))()}function lr(e){let{shell:t,status:n}=e,a=t.dock(`right`),o=C(t.mode,e=>e===`compact`),s=t.dock(`top`),c=t.expanded,l=C(c,e=>!e),u=Z(t,a),d=C([u.floating,t.mode],(e,t)=>e&&t!==`compact`),p=Z(t,s).floating,h=C([Z(t,s).size,s.active,p,c],(e,t,n,r)=>`${n&&t&&!r?t.frame===`none`?e-28+$:$+e+$:$}px`),g=C([d,t.railShown,c],(e,t,n)=>e&&!t||n?0:ur),_=C([d,t.compactRail,c],(e,t,n)=>e&&t&&!n),ee=C([g,_],(e,t)=>t?0:e),te=_,v=C([u.pinned,d,c],(e,t,n)=>t&&e&&!n),y=C([u.size,a.active,t.overlay,v,g],(e,t,n,r,i)=>r?i+(t||n?e:0):0),b=C([y,d,ee],(e,t,n)=>e>0?e:t?n:0),S=C([u.size,a.active,t.overlay,d,v,g,c,o],(e,t,n,r,i,a,o,s)=>`${i||o?$:(s?0:a)+$+(r&&(t||n)?e+$:0)}px`),re=C([v,o,ee,_,c],(e,t,n,r,i)=>`${e||t||i?$:(r?ur:n)+$}px`),ie=C([a.active,d,c],(e,t,n)=>t&&e&&!n?`open`:void 0),w=u.sizePx,ae=C(g,e=>`${e+$}px`),T=f(`div`,{class:Q.canvas,"data-msp-canvas":``,"data-msp-scope":`canvas`,"data-quiet":e.empty?``:void 0,children:e.canvas}),E=e=>T.toggleAttribute(`data-quiet`,!e),D,O,k,A=m(`div`,{class:Q.shell,children:[f(x,{when:C([p,c],(e,t)=>!e&&!t),children:()=>f(Kt,{shell:t,dock:s})}),f(x,{when:l,children:()=>f(Kt,{shell:t,dock:t.dock(`left`)})}),m(`main`,{class:Q.viewport,"data-msp-viewport":``,style:{"--msp-canvas-edge":`${$}px`,"--msp-corner-room":`${dr}px`,"--msp-band-fade":`28px`,"--msp-band-dissolve":`36px`},ref:e=>D=e,children:[T,m(`div`,{class:`${Q.layer} ${Q.canvasLayer}`,"data-msp-theme":e.ink?void 0:`light`,ref:e=>O=e,children:[f(x,{when:C([p,c],(e,t)=>e&&!t),children:()=>f(qt,{shell:t,dock:s})}),e.empty?f(Jn,{empty:e.empty,splash:e.splash??!0,field:e.splashField??`random`,onCanvasShown:E,...e.busy?{busy:e.busy}:{}}):null,f(`div`,{class:J.lead,children:e.playback}),e.overlays,f(x,{when:te,children:()=>f(Mn,{shell:t})}),f(`div`,{class:J.bottom,"data-keeps-card":``,children:m(`div`,{class:J.bottomGrid,children:[f(On,{status:n,onOpenLog:e.onOpenLog,after:e.agent}),m(`div`,{class:J.corner,children:[f(yn,{shell:t,lead:e.canvasLead,aside:e.canvasAside,...e.canvasLeadMenu?{leadMenu:e.canvasLeadMenu}:{},quiet:e.empty}),f(An,{status:n,lead:e.context?.()})]})]})})]}),m(`div`,{class:Q.layer,ref:e=>k=e,children:[f(En,{shell:t}),f(or,{shell:t}),f(x,{when:l,children:()=>f(x,{when:d,fallback:()=>f(x,{when:C(o,e=>!e),children:()=>f(`div`,{class:`${J.toolbarSlot} ${J.frame}`,children:f(fn,{shell:t})})}),children:()=>{let e=ne(t.railShown,()=>f(qt,{shell:t,dock:a,railItems:e=>f(fn,{shell:t,part:`rest`,hidden:e.hidden,railMenu:(t,n)=>e.toggleMenu(n,t)}),railFoot:e=>f(fn,{shell:t,part:`lead`,hidden:e.hidden,railMenu:(t,n)=>e.toggleMenu(n,t)})}));return r([t.railShown,t.compactRail],()=>{R(e,`data-rail-hidden`,!t.railShown.value),R(e,`data-rail-overlay`,t.compactRail.value)}),e}})})]})]}),f(x,{when:C([d,c],(e,t)=>!e&&!t),children:()=>f(Kt,{shell:t,dock:a,stripEnd:f(x,{when:o,children:()=>f(Sn,{shell:t})})})}),f(x,{when:l,children:()=>f(Kt,{shell:t,dock:t.dock(`bottom`)})}),e.commandMenu,f(Cn,{status:n})]});r([t.mode,c],()=>{R(A,`data-mode`,t.mode.value),R(A,`data-expanded`,c.value)});let oe=[S,re,h,b,ae,w,y];if(e.ink&&oe.push(e.ink),r(oe,()=>{L(D,`--msp-canvas-right-inset`,S.value),L(D,`--msp-canvas-corner-inset`,re.value),L(D,`--msp-canvas-top-inset`,h.value),L(D,`--msp-canvas-end`,`${b.value}px`),L(D,`--msp-canvas-rail-inset`,ae.value),L(D,`--msp-canvas-panel-right`,ae.value),L(D,`--msp-right-panel-width`,w.value),L(D,`--msp-canvas-pinned`,`${y.value}px`),L(D,`background`,e.ink?.value.color)}),e.ink){let t=e.ink;r([t],()=>{R(O,`data-msp-theme`,t.value.theme),L(O,`--msp-color-bg`,t.value.color)})}r([ie,v,t.overlay],()=>{R(k,`data-right-panel`,ie.value),R(k,`data-pinned`,v.value),R(k,`data-overlay`,t.overlay.value?`open`:null)}),e.onDropFiles&&A.appendChild(f(tr,{target:A,onDrop:e.onDropFiles,formats:e.dropFormats})),F(document,`keydown`,e=>{e.key!==`Escape`||e.defaultPrevented||t.overlay.value||Ne(ke(e))||V(A,e)&&(c.value?(t.setExpanded(!1),e.preventDefault()):a.state.value.pinned||!a.state.value.collapsed&&a.active.value!==void 0&&(t.toggle(`right`),e.preventDefault()))});let j=e=>{(e.type!==`wheel`||e.ctrlKey)&&e.preventDefault()};return F(A,`wheel`,j,{passive:!1}),F(A,`gesturestart`,j),F(A,`gesturechange`,j),i(Le(A)),ue(A,e=>t.setWidth(e[0].contentRect.width)),A}var ur,$,dr;function fr(){return(fr=e((()=>{b(),o(),P(),w(),ht(),Ot(),Gn(),Re(),zn(),sn(),Qn(),rr(),cr(),h(),ur=44,$=8,dr=42})))()}export{Je as C,Ue as D,Ke as E,We as O,rt as S,Ge as T,ht as _,kn as a,U as b,X as c,jt as d,xt as f,mt as g,yt as h,Wn as i,Gt as l,_t as m,fr as n,gn as o,Et as p,Bn as r,zn as s,lr as t,Mt as u,ct as v,qe as w,nt as x,lt as y};