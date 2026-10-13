import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{X as t,Z as n,a as r,m as i,n as a,o,r as s,t as c,v as l,y as ee}from"./jsx-runtime-pJJ4pzd1.js";import{a as te,i as ne,n as u,o as re,r as ie,t as d}from"./map-BLVP9Oyc.js";import{r as f}from"./observable-state-U0Aegh1x.js";import{A as ae,O as oe,S as se,c as ce,j as le,k as ue,o as de}from"./shell-CzI7wQ_f.js";import{C as fe,b as pe,d as p,h as me,m as he,n as m,r as h,u as g,v as ge,x as _e,y as ve}from"./control-flow-D80wAH1n.js";import{n as ye,t as _}from"./combineLatest-BuVl0X9y.js";import{i as be,n as xe,r as v,t as Se}from"./skip-B-P3jgfT.js";import{t as y}from"./icon-Cd9kBD44.js";import{t as b}from"./scroll-area-W5mfuQm0.js";import{n as Ce}from"./keyed-selector-Cr4ED1rO.js";import{n as we}from"./select-Bk_tLTmE.js";import{t as Te}from"./text-input-BVt-QcfS.js";import{l as Ee,t as x}from"./src-C9Ks2Bfq.js";import{t as De}from"./shell-story-DVkhNfUb.js";import{t as Oe}from"./testing-Da1XjxlU.js";var ke;function Ae(){return(Ae=e((()=>{ee(),ke=new l(function(e){return e.complete()})})))()}function je(){var e=[...arguments],t=fe(e),n=_e(e,1/0),r=e;return r.length?r.length===1?ve(r[0]):ue(n)(he(r,t)):ke}function Me(){return(Me=e((()=>{oe(),ge(),Ae(),pe(),me()})))()}function Ne(e,t){return t===void 0&&(t=ae),re(function(n,r){var i=null,a=null,o=null,s=function(){if(i){i.unsubscribe(),i=null;var e=a;a=null,r.next(e)}};function c(){var n=o+e,a=t.now();a<n?(i=this.schedule(void 0,n-a),r.add(i)):s()}n.subscribe(ie(r,function(n){a=n,o=t.now(),i||(i=t.schedule(c,e),r.add(i))},function(){s(),r.complete()},void 0,function(){a=i=null}))})}function Pe(){return(Pe=e((()=>{le(),te(),ne()})))()}function Fe(e){return e<=0?function(){return ke}:re(function(t,n){var r=0;t.subscribe(ie(n,function(t){++r<=e&&(n.next(t),e<=r&&n.complete())}))})}function Ie(){return(Ie=e((()=>{Ae(),te(),ne()})))()}function Le(e){let t=(t,n,r,i={})=>({id:`assistant.${t}`,title:n,category:`Assistant`,alias:r,...i,run:()=>(e(t),{message:``})});return[t(`trace`,`Assistant trace`,[`trace`,`inspector`,`agent`,`steps`,`what the agent did`],{icon:`list-tree`,shortcut:{key:`t`,alt:!0}}),t(`tools`,`Assistant tools`,[`tools`,`skills`,`inspector`,`agent`],{icon:`wrench`}),t(`limits`,`Assistant limits`,[`limits`,`budget`,`context window`,`thinking`,`agent`],{icon:`gauge`})]}var Re;function ze(){return(ze=e((()=>{Re=`inspector`})))()}function S(e){return e>=999500?`${Number((e/1e6).toFixed(e>=995e4?0:1))}M`:e>=1e3?`${(e/1e3).toFixed(e>=9950?0:1)}k`:String(Math.round(e))}function C(e){return e<999.5?`${Math.round(e)} ms`:`${(e/1e3).toFixed(+(e<9950))} s`}function Be(e){let t=e<10?Math.round(e*10)/10:Math.round(e);return`${t} ${t===1?`credit`:`credits`}`}function Ve(e){return e.cached&&e.input>0?Math.round(e.cached/e.input*100):void 0}function He(e){let t=Ve(e),n=[t===void 0?``:`${t}% cached`,e.written?`${S(e.written)} written`:``].filter(Boolean).join(`, `),r=e.estimated?`~`:``;return[`${r}${S(e.input)} in${n?` (${n})`:``}`,`${r}${S(e.output)} out`,e.credits===void 0?``:Be(e.credits)].filter(Boolean).join(` · `)}var w;function Ue(){return(Ue=e((()=>{n(),w={choice:`msp-assistant-limits-choice`,content:`msp-assistant-limits-content`,default:`msp-assistant-limits-default`,group:`msp-assistant-limits-group`,input:`msp-assistant-limits-input`,label:`msp-assistant-limits-label`,limits:`msp-assistant-limits-limits`,row:`msp-assistant-limits-row`,rows:`msp-assistant-limits-rows`,title:`msp-assistant-limits-title`,unit:`msp-assistant-limits-unit`,used:`msp-assistant-limits-used`,usedBar:`msp-assistant-limits-usedBar`,value:`msp-assistant-limits-value`,what:`msp-assistant-limits-what`},t(`assistant/inspector/limits.module.css`,`@layer msp.components {
.msp-assistant-limits-limits {
  flex: 1 1 0;
  height: 100%;
  min-height: 0;
}

.msp-assistant-limits-content {
  align-content: start;
  gap: var(--msp-space-6);
  max-width: 760px;
  padding: var(--msp-space-5) var(--msp-space-5) var(--msp-space-6);
  display: grid;
}

.msp-assistant-limits-group {
  gap: var(--msp-space-2);
  display: grid;

  & > p {
    padding: 0 var(--msp-space-3);
  }
}

.msp-assistant-limits-title {
  padding: 0 var(--msp-space-3);
  font-size: var(--msp-font-size-md);
  margin: 0;
  font-weight: 600;
}

.msp-assistant-limits-rows {
  margin-top: var(--msp-space-3);
  grid-template-columns: minmax(0, 1fr) 120px 56px 160px;
  display: grid;
}

.msp-assistant-limits-row {
  grid-column: 1 / -1;
  grid-template-columns: subgrid;
  align-items: center;
  column-gap: var(--msp-space-4);
  padding: var(--msp-space-3) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  display: grid;

  &:hover {
    background: var(--msp-color-panel);
  }
}

.msp-assistant-limits-label {
  gap: var(--msp-space-1);
  min-width: 0;
  display: grid;
}

.msp-assistant-limits-what {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-assistant-limits-used {
  align-items: center;
  gap: var(--msp-space-3);
  margin-top: var(--msp-space-1);
  color: var(--msp-color-text-subtle);
  font-family: var(--msp-font-mono);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  display: flex;
}

.msp-assistant-limits-usedBar {
  flex: none;
  width: 96px;
}

.msp-assistant-limits-input, .msp-assistant-limits-value {
  width: 100%;
  height: 24px;
  padding: 0 var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  font-family: var(--msp-font-mono);
  font-size: var(--msp-font-size-sm);
  font-variant-numeric: tabular-nums;
  text-align: right;
  line-height: 24px;
}

.msp-assistant-limits-input {
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  border: 0;
  outline: none;

  &:hover {
    background: var(--msp-color-hover);
  }

  &:focus-visible {
    box-shadow: 0 0 0 1px var(--msp-color-focus-ring);
  }
}

.msp-assistant-limits-value {
  color: var(--msp-color-text-muted);
}

.msp-assistant-limits-choice {
  width: 100%;
}

.msp-assistant-limits-unit {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-assistant-limits-default {
  align-items: baseline;
  gap: var(--msp-space-3);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  display: flex;
}

@container inspector (width <= 560px) {
  .msp-assistant-limits-content {
    padding: var(--msp-space-4);
  }

  .msp-assistant-limits-rows {
    grid-template-columns: minmax(0, 1fr) 48px auto;
  }

  .msp-assistant-limits-label {
    margin-bottom: var(--msp-space-2);
    grid-column: 1 / -1;
  }
}
}
`)})))()}function We(e,t){return t>0?je(e.pipe(Fe(1)),e.pipe(xe(1),Ne(t))):e}function Ge(e,t,n,r){if(!e.length)return t;let i=e.findIndex(e=>e.key===t);return i<0&&(i=r===`first`?0:e.length-1),e[Math.max(0,Math.min(e.length-1,i+n))].key}function Ke(e,t){for(let n of e.groups){let e=n.rows.find(e=>e.key===t);if(e)return e}}function qe(e){let t=0;for(let n of e.groups)t+=n.tools.length;return{tools:t,skills:e.groups.filter(e=>e.kind===`skill`).length}}var Je,Ye;function Xe(){return(Xe=e((()=>{x(),ye(),Pe(),p(),d(),Me(),Se(),Ie(),Je=[],Ye=class{#e=f(`trace`);#t=f(`steps`);#n=f({model:`saw`,tool:`result`,definition:`input`});#r=f(void 0);#i=f(void 0);#a;constructor(e){this.trace=e.trace,this.tools=e.tools,this.limits=e.limits,this.#a=e.setLimit,this.editable=!!e.setLimit;let t=We(e.trace,e.settle??80);this.turns=t.pipe(u(e=>e?.turns??Je)),this.rows=t.pipe(u(e=>this.#c(e)));let n=(e,t,n)=>e.find(e=>e.key===t)??n,r=_([this.rows,this.#r.asReadonly]).pipe(u(([e,t])=>n(e,t,e.at(-1))),g());this.row=r,this.selected=r.pipe(u(e=>e?.key),g()),this.toolRows=e.tools.pipe(u(e=>this.#u(e)));let i=_([this.toolRows,this.#i.asReadonly]).pipe(u(([e,t])=>n(e,t,e[0])),g());this.toolRow=i,this.selectedTool=i.pipe(u(e=>e?.key),g());let a=Ce(this.selected),o=Ce(this.selectedTool);this.isSelected=e=>a.is(e),this.isSelectedTool=e=>o.is(e)}get view(){return this.#e.asReadonly}get scale(){return this.#t.asReadonly}get tabs(){return this.#n.asReadonly}setView(e){this.#e.set(e)}setScale(e){this.#t.set(e)}setTab(e,t){this.#n.set({...this.#n.value,[e]:t})}select(e){this.#r.set(e)}move(e){this.#r.set(Ge(this.#c(this.trace.value),this.#r.value,e,`last`))}selectTool(e){this.#i.set(e)}moveTool(e){let t=this.#u(this.tools.value);this.#i.set(Ge(t,this.#i.value,e,`first`))}openTool(e){this.#i.set(`tool:${e}`),this.#e.set(`tools`)}setLimit(e,t){let n=Ke(this.limits.value,e);if(!n||!n.editable||!this.#a)return!1;if(t===void 0)return this.#a(e,void 0),!0;if(!Number.isFinite(t))return!1;if(n.choices){if(!n.choices.some(e=>e.value===t))return!1}else if(n.step&&(t=Math.round(t/n.step)*n.step),t<=0||n.ceiling!==void 0&&t>n.ceiling)return!1;return this.#a(e,t===n.default?void 0:t),!0}focus(e){if(e===`trace`||e===`tools`||e===`limits`)return this.#e.set(e),!0;let t=e.indexOf(`:`),n=e.slice(0,t),r=e.slice(t+1);if(t<0||!r)return!1;switch(n){case`turn`:{let e=this.trace.value?.turns??[],t=e.find(e=>e.id===r)??e.at(-1);return t&&this.#r.set(`turn:${t.id}`),this.#e.set(`trace`),!0}case`step`:return this.#r.set(`step:${r}`),this.#e.set(`trace`),!0;case`tool`:return this.openTool(r),!0;case`group`:return this.#i.set(`group:${r}`),this.#e.set(`tools`),!0}return!1}#o=new WeakMap;#s=new Map;#c(e){if(!e)return Je;let t=this.#o.get(e);if(t)return t;let n=this.#s,r=new Map,i=e=>{let t=n.get(e.key),i=t&&t.kind===e.kind&&t.turn===e.turn&&t.index===e.index&&(t.kind!==`step`||e.kind===`step`&&t.step===e.step)?t:e;return r.set(e.key,i),i},a=e.turns.flatMap((e,t)=>[i({kind:`turn`,key:`turn:${e.id}`,turn:e,index:t}),i({kind:`request`,key:`req:${e.id}`,turn:e,index:t}),...e.steps.map(n=>i({kind:`step`,key:`step:${n.id}`,turn:e,index:t,step:n,nested:n.under!==void 0}))]);return this.#s=r,this.#o.set(e,a),a}#l=new WeakMap;#u(e){let t=this.#l.get(e);return t||(t=e.groups.flatMap(e=>[{kind:`group`,key:`group:${e.id}`,group:e},...e.tools.map(t=>({kind:`tool`,key:`tool:${t.name}`,group:e,tool:t}))]),this.#l.set(e,t)),t}}})))()}var T;function Ze(){return(Ze=e((()=>{n(),T={budget:`msp-assistant-parts-budget`,budgetBar:`msp-assistant-parts-budgetBar`,budgetText:`msp-assistant-parts-budgetText`,code:`msp-assistant-parts-code`,count:`msp-assistant-parts-count`,dim:`msp-assistant-parts-dim`,fact:`msp-assistant-parts-fact`,facts:`msp-assistant-parts-facts`,h:`msp-assistant-parts-h`,head:`msp-assistant-parts-head`,jKey:`msp-assistant-parts-jKey`,jLit:`msp-assistant-parts-jLit`,jStr:`msp-assistant-parts-jStr`,json:`msp-assistant-parts-json`,kind:`msp-assistant-parts-kind`,link:`msp-assistant-parts-link`,meter:`msp-assistant-parts-meter`,meterFill:`msp-assistant-parts-meterFill`,mono:`msp-assistant-parts-mono`,note:`msp-assistant-parts-note`,prose:`msp-assistant-parts-prose`,tab:`msp-assistant-parts-tab`,tabs:`msp-assistant-parts-tabs`,usage:`msp-assistant-parts-usage`,where:`msp-assistant-parts-where`},t(`assistant/inspector/parts.module.css`,`@layer msp.components {
.msp-assistant-parts-tabs {
  align-items: center;
  gap: var(--msp-space-1);
  flex: none;
  display: flex;
}

.msp-assistant-parts-tab {
  align-items: baseline;
  gap: var(--msp-space-2);
  height: 24px;
  padding: 0 var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  flex: none;
  line-height: 24px;
  display: inline-flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  &[aria-selected="true"] {
    background: var(--msp-color-control);
    color: var(--msp-color-text);
  }
}

.msp-assistant-parts-count {
  color: var(--msp-color-text-subtle);
  font-family: var(--msp-font-mono);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;

  &:empty {
    display: none;
  }
}

.msp-assistant-parts-head {
  align-items: baseline;
  gap: var(--msp-space-3);
  min-width: 0;
  display: flex;
}

.msp-assistant-parts-kind {
  color: var(--msp-color-text-muted);
  font-family: var(--msp-font-mono);
  font-size: var(--msp-font-size-xs);
  letter-spacing: .04em;
  text-transform: uppercase;
  flex: none;
}

.msp-assistant-parts-where {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  color: var(--msp-color-text-subtle);
  font-family: var(--msp-font-mono);
  font-size: var(--msp-font-size-xs);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-assistant-parts-facts {
  gap: var(--msp-space-1);
  margin: 0;
  display: grid;
}

.msp-assistant-parts-fact {
  gap: var(--msp-space-3);
  grid-template-columns: 96px minmax(0, 1fr);
  line-height: 1.45;
  display: grid;

  & dt {
    color: var(--msp-color-text-subtle);
  }

  & dd {
    overflow-wrap: anywhere;
    min-width: 0;
    margin: 0;
  }
}

.msp-assistant-parts-code {
  padding: var(--msp-space-3) var(--msp-space-4);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-panel);
  color: var(--msp-color-text);
  font-family: var(--msp-font-mono);
  font-size: var(--msp-font-size-xs);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  margin: 0;
  line-height: 1.55;

  &[data-failed] {
    color: var(--msp-color-danger);
  }
}

.msp-assistant-parts-json {
  tab-size: 2;
}

.msp-assistant-parts-jKey {
  color: var(--msp-color-text-muted);
}

.msp-assistant-parts-jStr {
  color: color-mix(in oklab, var(--msp-color-success), var(--msp-color-text) 35%);
}

.msp-assistant-parts-jLit {
  color: color-mix(in oklab, var(--msp-color-info), var(--msp-color-text) 25%);
}

.msp-assistant-parts-usage {
  color: var(--msp-color-text-subtle);
  font-family: var(--msp-font-mono);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.msp-assistant-parts-meter {
  background: var(--msp-color-control);
  border-radius: 2px;
  height: 3px;
  display: block;
  overflow: hidden;
}

.msp-assistant-parts-meterFill {
  border-radius: inherit;
  background: var(--msp-color-text-subtle);
  height: 100%;
  display: block;

  .msp-assistant-parts-meter[data-danger] & {
    background: var(--msp-color-danger);
  }
}

.msp-assistant-parts-budget {
  align-items: center;
  gap: var(--msp-space-3);
  min-width: 0;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  display: inline-flex;
}

.msp-assistant-parts-budgetBar {
  flex: none;
  width: 64px;

  @container (width <= 640px) {
    display: none;
  }
}

.msp-assistant-parts-budgetText {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-assistant-parts-note {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
  line-height: 1.5;
}

.msp-assistant-parts-h {
  margin: var(--msp-space-2) 0 0;
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
  font-weight: 600;
}

.msp-assistant-parts-prose {
  font-size: var(--msp-font-size-md);
  overflow-wrap: anywhere;
  margin: 0;
  line-height: 1.45;
}

.msp-assistant-parts-link {
  color: var(--msp-color-accent-strong);
  text-align: left;
  text-underline-offset: 2px;
  padding: 0;
  text-decoration: underline #0000;

  &:hover {
    text-decoration-color: currentColor;
  }
}

.msp-assistant-parts-mono {
  font-family: var(--msp-font-mono);
  font-size: var(--msp-font-size-xs);
}

.msp-assistant-parts-dim {
  color: var(--msp-color-text-subtle);
}
}
`)})))()}function Qe(e){return a(`div`,{class:`${T.tabs} ${e.class??``}`,role:`tablist`,"aria-label":e.label,children:e.tabs.map(t=>s(`button`,{type:`button`,role:`tab`,class:T.tab,"aria-selected":e.value.pipe(u(e=>e===t.id),g()),onClick:()=>e.onChange(t.id),children:[t.label,t.count===void 0?null:a(`span`,{class:T.count,children:t.count})]}))})}function E(e){return s(`div`,{class:T.head,children:[a(`span`,{class:T.kind,children:e.kind}),e.where?a(`span`,{class:T.where,children:e.where}):null,e.children]})}function D(e){return a(`dl`,{class:T.facts,children:e.items.map(([e,t])=>s(`div`,{class:T.fact,children:[a(`dt`,{children:e}),a(`dd`,{children:t})]}))})}function $e(e){let t=JSON.stringify(e.value,null,2)??`undefined`,n=a(`pre`,{class:`${T.code} ${T.json}`}),r=0;for(let e of t.matchAll(ot)){e.index>r&&n.append(t.slice(r,e.index));let i=document.createElement(`span`);i.className=e[1]?e[2]?T.jKey:T.jStr:T.jLit,i.textContent=e[1]??e[3],n.append(i),e[2]&&n.append(e[2]),r=e.index+e[0].length}return r<t.length&&n.append(t.slice(r)),n}function et(e){return a(`span`,{class:`${T.usage} ${e.class??``}`,children:He(e.tokens)})}function tt(e){let t=e=>`${Math.max(0,Math.min(1,e))*100}%`,n=e.share;return a(`span`,{class:`${T.meter} ${e.class??``}`,"data-danger":e.danger?``:void 0,children:a(`span`,{class:T.meterFill,style:{width:typeof n==`number`?t(n):n.pipe(u(e=>t(e)))}})})}function nt(e){return a(h,{when:e.budget,children:e=>s(`span`,{class:T.budget,"data-tip":`${e.scope?`The ${e.scope}: `:``}its budget is counted by kind; this is the kind nearest its ceiling.${e.credits===void 0?``:` Credits: what it cost, in the app’s credits.`}`,children:[e.ceiling>0?a(tt,{share:e.consumed/e.ceiling,class:T.budgetBar}):null,s(`span`,{class:T.budgetText,children:[e.ceiling>0?`${S(e.consumed)} / ${S(e.ceiling)}`:S(e.consumed),` `,e.dimension??`tokens`,e.credits===void 0?``:` · ${Be(e.credits)}`]})]})})}function rt(e){return(/^(.+?[.!?])(\s|$)/.exec(e)?.[1]??e).replace(/\s+/g,` `)}function it(e,t){let n=n=>{if(n.defaultPrevented||n.altKey||n.ctrlKey||n.metaKey)return;let r=n.key===`ArrowDown`||n.key===`j`?1:n.key===`ArrowUp`||n.key===`k`?-1:0,i=e();if(!r||!i?.isConnected)return;let a=n.target;if(!i.contains(a)&&(a?.isContentEditable||a?.closest?.(`input, textarea, select, [role=listbox], [role=menu], [popover]`)))return;let o=i.closest(`[data-msp-page]`)??i;(!a||a===document.body||o.contains(a))&&(n.preventDefault(),t(r))};document.addEventListener(`keydown`,n),i(()=>document.removeEventListener(`keydown`,n))}function at(e,t,n,r=0){if(!e||!t)return;let i;for(let n of e.querySelectorAll(`[data-row]`))if(n.dataset.row===t){i=n;break}if(!i)return;let a=e.getBoundingClientRect(),o=i.getBoundingClientRect(),s=o.top-a.top+e.scrollTop;n===`center`?e.scrollTop=s-e.clientHeight/2+o.height/2:s<e.scrollTop+r?e.scrollTop=s-r:s+o.height>e.scrollTop+e.clientHeight&&(e.scrollTop=s+o.height-e.clientHeight)}var ot,st;function O(){return(O=e((()=>{x(),p(),d(),Ze(),c(),ot=/("(?:[^"\\]|\\.)*")(\s*:)?|\b(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?|true|false|null)\b/g,st=e=>(e??``).split(`
`,1)[0]??``})))()}function ct(e){let t=/^([\d.]+)\s*([kKmM]?)$/.exec(e.replace(/[,\s_]/g,``));if(!t)return;let n=Number(t[1])*(t[2]===`k`||t[2]===`K`?1e3:t[2]?1e6:1);return Number.isFinite(n)?n:void 0}function lt(e){let{model:t}=e,n=t.limits.pipe(u(e=>e.groups.map(e=>e.id)),g(ft)),r=e=>t.limits.pipe(u(t=>t.groups.find(t=>t.id===e)),v(e=>!!e));return a(b,{class:w.limits,contentClass:w.content,children:a(m,{each:n,children:e=>{let n=r(e),i=n.pipe(u(e=>e.rows.map(e=>e.key)),g(ft));return s(`section`,{class:w.group,"aria-label":n.pipe(u(e=>e.title)),children:[a(`h3`,{class:w.title,children:n.pipe(u(e=>e.title))}),a(h,{when:n.pipe(u(e=>e.note??``)),children:e=>a(`p`,{class:T.note,children:e})}),a(`div`,{class:w.rows,children:a(m,{each:i,children:e=>a(ut,{model:t,rowKey:e})})})]})}})})}function ut(e){let{model:t}=e,n=t.limits.pipe(u(t=>Ke(t,e.rowKey)),v(e=>!!e),g()),r=Ke(t.limits.value,e.rowKey),i=t.editable&&r.editable,c=e=>n.pipe(u(t=>t[e]),g()),l=n.pipe(u(e=>e.value!==e.default),g());return s(`div`,{class:w.row,"data-changed":l.pipe(u(e=>e?``:void 0)),children:[s(`div`,{class:w.label,children:[a(`span`,{children:r.label}),r.note?a(`span`,{class:w.what,children:r.note}):null,r.used===void 0?null:s(`span`,{class:w.used,children:[a(tt,{class:w.usedBar,share:n.pipe(u(e=>e.value>0?(e.used??0)/e.value:0))}),s(`span`,{children:[n.pipe(u(e=>`${S(e.used??0)} of ${S(e.value)} used`)),r.ceiling===void 0?``:` · up to ${S(r.ceiling)}`]})]})]}),i?r.choices?a(we,{over:!0,size:`sm`,class:w.choice,"aria-label":r.label,options:r.choices.map(e=>[String(e.value),e.label]),value:c(`value`).pipe(u(String)),onChange:e=>t.setLimit(r.key,Number(e))}):a(dt,{model:t,row:n,shape:r}):a(`span`,{class:w.value,children:n.pipe(u(e=>e.choices?.find(t=>t.value===e.value)?.label??k(e.value)))}),a(`span`,{class:w.unit,children:r.unit}),a(`span`,{class:w.default,children:a(h,{when:l,fallback:()=>i||r.value!==r.default?a(`span`,{children:`default`}):null,children:()=>s(o,{children:[s(`span`,{children:[`default `,n.pipe(u(e=>e.choices?.find(t=>t.value===e.default)?.label??k(e.default)))]}),i?a(`button`,{type:`button`,class:T.link,"data-tip":`Back to the default`,onClick:()=>t.setLimit(r.key,void 0),children:`Reset`}):null]})})})]})}function dt(e){let{model:t,row:n,shape:r}=e,i=r.value,o=a(`input`,{class:w.input,inputMode:`decimal`,"aria-label":r.label,value:n.pipe(u(e=>(i=e.value,k(e.value)))),onKeyDown:e=>{e.key===`Enter`?(s(),e.preventDefault()):e.key===`Escape`&&o.value!==k(i)&&(o.value=k(i),e.preventDefault(),e.stopPropagation())},onBlur:()=>s()}),s=()=>{let e=ct(o.value);e!==void 0&&e!==i&&t.setLimit(r.key,e),o.value=k(i)};return o}var k,ft;function pt(){return(pt=e((()=>{x(),p(),be(),d(),Ue(),Xe(),O(),c(),k=e=>e.toLocaleString(`en-US`,{maximumFractionDigits:2}),ft=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n])})))()}var A;function mt(){return(mt=e((()=>{n(),A={args:`msp-assistant-inspector-args`,body:`msp-assistant-inspector-body`,chip:`msp-assistant-inspector-chip`,chips:`msp-assistant-inspector-chips`,detail:`msp-assistant-inspector-detail`,detailContent:`msp-assistant-inspector-detailContent`,dot:`msp-assistant-inspector-dot`,empty:`msp-assistant-inspector-empty`,flag:`msp-assistant-inspector-flag`,focus:`msp-assistant-inspector-focus`,head:`msp-assistant-inspector-head`,headMeta:`msp-assistant-inspector-headMeta`,headTitle:`msp-assistant-inspector-headTitle`,inspector:`msp-assistant-inspector-inspector`,list:`msp-assistant-inspector-list`,listContent:`msp-assistant-inspector-listContent`,meta:`msp-assistant-inspector-meta`,name:`msp-assistant-inspector-name`,nest:`msp-assistant-inspector-nest`,pulse:`msp-assistant-inspector-pulse`,result:`msp-assistant-inspector-result`,role:`msp-assistant-inspector-role`,row:`msp-assistant-inspector-row`,spacer:`msp-assistant-inspector-spacer`,split:`msp-assistant-inspector-split`,state:`msp-assistant-inspector-state`,status:`msp-assistant-inspector-status`,time:`msp-assistant-inspector-time`,tokens:`msp-assistant-inspector-tokens`,view:`msp-assistant-inspector-view`},t(`assistant/inspector/inspector.module.css`,`@layer msp.components {
.msp-assistant-inspector-inspector {
  min-height: 0;
  font-size: var(--msp-font-size-sm);
  flex-direction: column;
  flex: 1 1 0;
  display: flex;
  container: inspector / inline-size;
}

.msp-assistant-inspector-view {
  flex-direction: column;
  flex: 1 1 0;
  min-height: 0;
  display: flex;
}

.msp-assistant-inspector-split {
  flex: 1 1 0;
  grid-template-columns: minmax(0, 1fr) 380px;
  min-height: 0;
  display: grid;
}

.msp-assistant-inspector-list {
  height: 100%;
  min-height: 0;
}

.msp-assistant-inspector-listContent {
  padding-bottom: var(--msp-space-6);
}

.msp-assistant-inspector-detail {
  border-left: 1px solid var(--msp-color-border);
  height: 100%;
  min-height: 0;
}

.msp-assistant-inspector-detailContent {
  align-content: start;
  gap: var(--msp-space-4);
  min-width: 0;
  padding: var(--msp-space-5) var(--msp-space-5) var(--msp-space-6);
  display: grid;
}

.msp-assistant-inspector-head {
  z-index: 1;
  align-items: baseline;
  gap: var(--msp-space-3);
  width: 100%;
  min-width: 0;
  padding: var(--msp-space-4) var(--msp-space-5) var(--msp-space-2);
  background: var(--msp-color-bg);
  text-align: left;
  display: flex;
  position: sticky;
  top: 0;

  &:hover .msp-assistant-inspector-headTitle {
    text-decoration: underline;
    text-decoration-color: var(--msp-color-border-strong);
    text-underline-offset: 3px;
  }

  &[aria-selected="true"] {
    background: var(--msp-color-control);
  }
}

.msp-assistant-inspector-headTitle {
  flex: none;
  font-weight: 600;
}

.msp-assistant-inspector-headMeta {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  color: var(--msp-color-text-subtle);
  font-family: var(--msp-font-mono);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  text-align: right;
  white-space: nowrap;
  flex: auto;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-assistant-inspector-status {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  flex: none;

  &[data-status="failed"] {
    color: var(--msp-color-danger);
  }

  &[data-status="waiting"] {
    color: var(--msp-color-accent);
  }

  &:is([data-status="thinking"], [data-status="working"]) {
    color: var(--msp-color-text-muted);
    animation: msp-assistant-inspector-pulse 1.4s var(--msp-ease) infinite;
  }
}

@keyframes msp-assistant-inspector-pulse {
  50% {
    opacity: .4;
  }
}

.msp-assistant-inspector-row {
  align-items: baseline;
  gap: var(--msp-space-3);
  width: 100%;
  min-height: 28px;
  padding: var(--msp-space-2) var(--msp-space-5);
  text-align: left;
  grid-template-columns: 56px minmax(0, 1fr) auto;
  display: grid;

  &:hover {
    background: var(--msp-color-hover);
  }

  &[aria-selected="true"] {
    background: var(--msp-color-control);
  }

  &[data-off] {
    color: var(--msp-color-text-subtle);
  }
}

.msp-assistant-inspector-role {
  color: var(--msp-color-text-subtle);
  font-family: var(--msp-font-mono);
  letter-spacing: .04em;
  text-align: right;
  text-transform: uppercase;
  white-space: nowrap;
  font-size: 10px;
  overflow: hidden;

  .msp-assistant-inspector-row[data-failed] & {
    color: var(--msp-color-danger);
  }
}

.msp-assistant-inspector-body {
  align-items: baseline;
  gap: var(--msp-space-3);
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  display: flex;
  overflow: hidden;

  & > * {
    flex: none;
  }

  .msp-assistant-inspector-row[data-nested] & {
    padding-left: var(--msp-space-5);
  }
}

.msp-assistant-inspector-nest {
  color: var(--msp-color-text-subtle);
}

.msp-assistant-inspector-meta {
  align-items: baseline;
  gap: var(--msp-space-3);
  color: var(--msp-color-text-subtle);
  font-family: var(--msp-font-mono);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  display: inline-flex;
}

.msp-assistant-inspector-time {
  text-align: right;
  min-width: 52px;
}

.msp-assistant-inspector-tokens {
  text-align: right;
  min-width: 80px;
}

.msp-assistant-inspector-flag {
  color: var(--msp-color-text-muted);
}

.msp-assistant-inspector-name {
  font-family: var(--msp-font-mono);
  font-size: var(--msp-font-size-xs);
  font-weight: 600;
}

.msp-assistant-inspector-args {
  color: var(--msp-color-text-muted);
  font-family: var(--msp-font-mono);
  font-size: var(--msp-font-size-xs);
}

.msp-assistant-inspector-result {
  color: var(--msp-color-text-subtle);
  font-family: var(--msp-font-mono);
  font-size: var(--msp-font-size-xs);

  .msp-assistant-inspector-row[data-failed] & {
    color: var(--msp-color-danger);
  }
}

.msp-assistant-inspector-focus {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-assistant-inspector-chips {
  gap: var(--msp-space-2);
  flex-wrap: wrap;
  display: inline-flex;
}

.msp-assistant-inspector-chip {
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-sm);
  background: var(--msp-color-control);
  color: var(--msp-color-text-muted);
  font-family: var(--msp-font-mono);
  font-size: var(--msp-font-size-xs);
  white-space: nowrap;
}

.msp-assistant-inspector-empty {
  padding: var(--msp-space-6) var(--msp-space-5);
  color: var(--msp-color-text-subtle);
  margin: 0;
}

.msp-assistant-inspector-spacer {
  flex: 1 1 0;
  min-width: 0;
}

.msp-assistant-inspector-state {
  align-items: center;
  gap: var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  flex: none;
  display: inline-flex;
}

.msp-assistant-inspector-dot {
  background: var(--msp-color-border-strong);
  border-radius: 50%;
  width: 6px;
  height: 6px;

  .msp-assistant-inspector-state[data-state="working"] & {
    background: var(--msp-color-text-muted);
    animation: msp-assistant-inspector-pulse 1.4s var(--msp-ease) infinite;
  }

  .msp-assistant-inspector-state[data-state="waiting"] & {
    background: var(--msp-color-accent);
  }
}

@container (width <= 640px) {
  .msp-assistant-inspector-state {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .msp-assistant-inspector-status, .msp-assistant-inspector-dot {
    animation: none !important;
  }
}

@container inspector (width <= 760px) {
  .msp-assistant-inspector-split {
    grid-template-rows: minmax(0, 1fr) minmax(0, 46%);
    grid-template-columns: minmax(0, 1fr);
  }

  .msp-assistant-inspector-detail {
    border-left: none;
    border-top: 1px solid var(--msp-color-border);
  }

  .msp-assistant-inspector-row {
    padding-inline: var(--msp-space-4);
    grid-template-columns: 44px minmax(0, 1fr) auto;
  }

  .msp-assistant-inspector-head {
    padding-inline: var(--msp-space-4);
  }

  .msp-assistant-inspector-detailContent {
    padding: var(--msp-space-4);
  }
}
}
`)})))()}var ht;function gt(){return(gt=e((()=>{n(),ht={field:`msp-assistant-tools-field`,fields:`msp-assistant-tools-fields`,toolList:`msp-assistant-tools-toolList`},t(`assistant/inspector/tools.module.css`,`@layer msp.components {
.msp-assistant-tools-toolList {
  gap: var(--msp-space-2);
  font-size: var(--msp-font-size-xs);
  margin: 0;
  padding: 0;
  line-height: 1.45;
  list-style: none;
  display: grid;

  & li {
    align-items: baseline;
    gap: 0 var(--msp-space-3);
    flex-wrap: wrap;
    display: flex;
  }
}

.msp-assistant-tools-fields {
  gap: var(--msp-space-4);
  margin: 0;
  display: grid;
}

.msp-assistant-tools-field {
  gap: var(--msp-space-1);
  line-height: 1.45;
  display: grid;

  & dt {
    overflow-wrap: anywhere;
  }

  & dd {
    overflow-wrap: anywhere;
    margin: 0;
  }
}
}
`)})))()}function _t(e){let{model:t}=e,n,r=a(`div`,{class:A.view,children:s(`div`,{class:A.split,children:[a(b,{class:A.list,contentClass:A.listContent,viewportRef:e=>{n=e},role:`listbox`,"aria-label":`Tools`,children:a(m,{each:t.toolRows,children:e=>e.kind===`group`?a(yt,{model:t,row:e}):a(bt,{model:t,row:e})},e=>e.key)}),a(b,{class:A.detail,contentClass:A.detailContent,children:a(h,{when:t.toolRow,children:e=>e.kind===`group`?a(xt,{model:t,group:e.group}):a(St,{model:t,group:e.group,tool:e.tool})})})]})});it(()=>r,e=>t.moveTool(e));let o=t.selectedTool.pipe(Fe(1)).subscribe(e=>queueMicrotask(()=>at(n,e,`center`))),c=t.selectedTool.pipe(xe(1)).subscribe(e=>queueMicrotask(()=>at(n,e,`nearest`,Tt)));return i(()=>{o.unsubscribe(),c.unsubscribe()}),r}function vt(e){let t=e.tools.filter(e=>e.state===`loaded`).length;return t===0?`none`:t===e.tools.length?`all`:`some`}function yt(e){let{model:t,row:n}=e,r=n.group,i=r.tools.length;return s(`button`,{type:`button`,role:`option`,class:A.head,"data-row":n.key,"aria-selected":t.isSelectedTool(n.key),onClick:()=>t.selectTool(n.key),children:[a(`span`,{class:A.headTitle,children:r.title}),r.unavailable?a(`span`,{class:A.status,"data-tip":r.unavailable,children:`unavailable here`}):r.kind===`skill`&&vt(r)===`all`?a(`span`,{class:A.status,children:`loaded`}):null,s(`span`,{class:A.headMeta,children:[i,` `,i===1?`tool`:`tools`,` · ~`,S(Et(r.tools)),` tokens`]})]})}function bt(e){let{model:t,row:n}=e,r=n.tool;return s(`button`,{type:`button`,role:`option`,class:A.row,"data-row":n.key,"data-off":!r.enabled||r.unavailable?``:void 0,"aria-selected":t.isSelectedTool(n.key),onClick:()=>t.selectTool(n.key),children:[a(`span`,{class:A.role,children:r.read?`reads`:`tool`}),s(`span`,{class:A.body,children:[a(`span`,{class:A.name,children:r.name}),s(`span`,{class:A.focus,children:[r.extra?`By name. `:``,rt(r.description)]})]}),s(`span`,{class:A.meta,children:[r.approval?a(`span`,{class:A.flag,children:`asks`}):null,r.enabled?null:a(`span`,{class:A.flag,children:`disabled`}),r.state===`loaded`?a(`span`,{children:r.loadedAtTurn?`turn ${r.loadedAtTurn}`:`loaded`}):null,s(`span`,{children:[`~`,S(r.tokens)]})]})]})}function xt(e){let{model:t,group:n}=e,r=n.guidance?n.guidanceTokens??Math.round(n.guidance.length/4):0;return s(o,{children:[a(E,{kind:n.kind===`skill`?`skill`:n.kind===`core`?`core`:`by name`,where:n.kind===`skill`?n.id:void 0}),a(`p`,{class:T.prose,children:n.summary??n.title}),a(D,{items:[[`Tools`,String(n.tools.length)],[`Size`,`~${S(Et(n.tools))} tokens of definitions${r?`, ~${S(r)} of guidance`:``}`],[`Now`,Ot[vt(n)]],...n.unavailable?[[`Here`,n.unavailable]]:[]]}),a(`p`,{class:T.note,children:Dt[n.kind]}),n.guidance?s(o,{children:[a(`h4`,{class:T.h,children:`Guidance`}),a(`p`,{class:T.note,children:`Exactly as the model reads it when the skill loads.`}),a(`pre`,{class:T.code,children:n.guidance})]}):null,a(`h4`,{class:T.h,children:`Tools`}),a(`ul`,{class:ht.toolList,children:n.tools.map(e=>s(`li`,{children:[a(`button`,{type:`button`,class:`${T.link} ${A.name}`,onClick:()=>t.openTool(e.name),children:e.name}),a(`span`,{class:T.dim,children:rt(e.description)})]}))})]})}function St(e){let{model:t,group:n,tool:r}=e,i=Ct(r.input),c=t.tabs.pipe(u(e=>e.definition),g()),l=r.unavailable??n.unavailable;return s(o,{children:[a(E,{kind:`${r.read?`tool · reads`:`tool`}${r.extra?` · by name`:``}`,where:n.title,children:a(`span`,{class:A.name,children:r.name})}),a(`p`,{class:T.prose,children:r.description}),a(D,{items:[[`Placement`,Dt[n.kind]],[`Reads`,r.read?`only: no effect, no checkpoint`:`no: it changes something`],[`Approval`,r.approval?`asks the person first`:`not needed`],[`Enabled`,r.enabled?`yes`:`no: not in this turn’s tool set`],...r.modules?.length?[[`Modules`,r.modules.join(`, `)]]:[],[`Size`,`~${S(r.tokens)} tokens`],[`Now`,r.state===`loaded`?r.loadedAtTurn?`loaded at turn ${r.loadedAtTurn}`:`loaded from the start`:r.state===`deferred`?`declared by name; loads when called`:`not loaded`],...l?[[`Here`,l]]:[]]}),a(Qe,{label:`Definition`,tabs:[{id:`input`,label:`Input`,count:i.length},{id:`schema`,label:`JSON Schema`}],value:c,onChange:e=>t.setTab(`definition`,e)}),a(h,{when:c,children:e=>e===`schema`?a($e,{value:r.input}):i.length?a(`dl`,{class:ht.fields,children:i.map(e=>s(`div`,{class:ht.field,children:[s(`dt`,{children:[a(`span`,{class:A.name,children:e.path}),s(`span`,{class:T.dim,children:[` `,e.type,e.required?``:`, optional`]})]}),e.description?a(`dd`,{children:e.description}):null,e.values?s(`dd`,{class:T.dim,children:[`One of: `,e.values.join(`, `)]}):null]}))}):a(`p`,{class:T.note,children:`No arguments.`})})]})}function Ct(e,t=``){let n=e,r=new Set(n.required??[]);return Object.entries(n.properties??{}).flatMap(([e,n])=>{let i=`${t}${e}`,a=n.items,o=n.enum??a?.enum;return[{path:i,type:wt(n),required:r.has(e),...n.description?{description:n.description}:{},...o?{values:o.map(String)}:{}},...n.properties?Ct(n,`${i}.`):a?.properties?Ct(a,`${i}[].`):[]]})}function wt(e){let t=e.anyOf??e.oneOf;if(t)return t.map(wt).join(` or `);let n=Array.isArray(e.type)?e.type.join(` or `):e.type??(e.enum?`choice`:`any`);return n===`array`?`list of ${e.items?wt(e.items):`any`}`:n}var Tt,Et,Dt,Ot;function kt(){return(kt=e((()=>{x(),p(),d(),Se(),Ie(),mt(),gt(),O(),c(),Tt=40,Et=e=>e.reduce((e,t)=>e+t.tokens,0),Dt={core:`Core: offered from the first turn.`,skill:`Part of a skill: loaded with its guidance by disclose_skills.`,single:`Loaded by name when the model asks for it, several at once.`},Ot={all:`loaded`,some:`partly loaded`,none:`not loaded`}})))()}var j;function At(){return(At=e((()=>{n(),j={at:`msp-assistant-trace-at`,attempt:`msp-assistant-trace-attempt`,attemptText:`msp-assistant-trace-attemptText`,bar:`msp-assistant-trace-bar`,bars:`msp-assistant-trace-bars`,block:`msp-assistant-trace-block`,column:`msp-assistant-trace-column`,entries:`msp-assistant-trace-entries`,entry:`msp-assistant-trace-entry`,entryBody:`msp-assistant-trace-entryBody`,entryRole:`msp-assistant-trace-entryRole`,entryText:`msp-assistant-trace-entryText`,entryTitle:`msp-assistant-trace-entryTitle`,entryTokens:`msp-assistant-trace-entryTokens`,fresh:`msp-assistant-trace-fresh`,key:`msp-assistant-trace-key`,lane:`msp-assistant-trace-lane`,lanes:`msp-assistant-trace-lanes`,legend:`msp-assistant-trace-legend`,makeup:`msp-assistant-trace-makeup`,milestones:`msp-assistant-trace-milestones`,ordinal:`msp-assistant-trace-ordinal`,overview:`msp-assistant-trace-overview`,part:`msp-assistant-trace-part`,pulse:`msp-assistant-trace-pulse`,segment:`msp-assistant-trace-segment`,swatch:`msp-assistant-trace-swatch`,timing:`msp-assistant-trace-timing`,track:`msp-assistant-trace-track`,window:`msp-assistant-trace-window`},t(`assistant/inspector/trace.module.css`,`@layer msp.components {
.msp-assistant-trace-overview {
  align-items: center;
  gap: var(--msp-space-4);
  padding: var(--msp-space-4) var(--msp-space-5);
  flex: none;
  grid-template-columns: 40px minmax(0, 1fr) auto;
  display: grid;
}

.msp-assistant-trace-lanes {
  row-gap: var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  font-family: var(--msp-font-mono);
  text-align: right;
  grid-template-rows: 12px 8px;
  font-size: 10px;
  line-height: 1;
  display: grid;

  & span:last-child {
    align-self: end;
  }
}

.msp-assistant-trace-track {
  gap: var(--msp-space-4);
  min-width: 0;
  display: flex;
}

.msp-assistant-trace-column {
  align-items: stretch;
  gap: var(--msp-space-1);
  min-width: 0;
  height: 22px;
  padding: 0 var(--msp-space-1);
  border-radius: var(--msp-radius-sm);
  flex-basis: 0;
  display: flex;

  &[data-selected] {
    background: var(--msp-color-control);
  }
}

.msp-assistant-trace-block {
  border-radius: var(--msp-radius-sm);
  min-width: 3px;
  transition: opacity var(--msp-motion-fast) var(--msp-ease);
  flex-basis: 0;
  padding: 0;

  &:hover {
    opacity: .7;
  }

  &[data-kind="request"] {
    background: var(--msp-color-text-subtle);
    flex: 0 0 3px;
    height: 100%;
  }

  &[data-kind="model"] {
    background: var(--msp-color-text-muted);
    align-self: flex-start;
    height: 12px;
  }

  &[data-kind="tool"] {
    background: var(--msp-color-border-strong);
    border-radius: 4px;
    align-self: flex-end;
    height: 8px;
  }

  &[data-nested] {
    opacity: .55;
  }

  &[data-failed] {
    background: var(--msp-color-danger);
  }

  &[data-retried] {
    background-image: repeating-linear-gradient(135deg, transparent 0 2px, var(--msp-color-bg) 2px 4px);
  }

  &[data-running] {
    animation: msp-assistant-trace-pulse 1.2s var(--msp-ease) infinite;
  }

  &[aria-pressed="true"] {
    outline: 1.5px solid var(--msp-color-accent);
    outline-offset: 1.5px;
  }
}

@keyframes msp-assistant-trace-pulse {
  50% {
    opacity: .35;
  }
}

.msp-assistant-trace-bars {
  gap: var(--msp-space-2);
  display: grid;
}

.msp-assistant-trace-bar {
  align-items: center;
  gap: var(--msp-space-3);
  color: var(--msp-color-text-subtle);
  font-family: var(--msp-font-mono);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  grid-template-columns: 16px minmax(0, 1fr) 96px;
  display: grid;

  & > :last-child {
    text-align: right;
  }
}

.msp-assistant-trace-milestones {
  gap: var(--msp-space-1);
  font-size: var(--msp-font-size-xs);
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
}

.msp-assistant-trace-at {
  min-width: 56px;
  color: var(--msp-color-text-subtle);
  font-family: var(--msp-font-mono);
  font-variant-numeric: tabular-nums;
  display: inline-block;
}

.msp-assistant-trace-window {
  gap: var(--msp-space-3);
  display: grid;
}

.msp-assistant-trace-makeup {
  border-radius: var(--msp-radius-sm);
  gap: 1px;
  height: 8px;
  display: flex;
  overflow: hidden;
}

.msp-assistant-trace-part {
  flex-basis: 0;
  min-width: 2px;
}

.msp-assistant-trace-swatch {
  width: 8px;
  height: 8px;
  margin-right: var(--msp-space-2);
  border-radius: var(--msp-radius-sm);
  display: inline-block;
}

.msp-assistant-trace-part, .msp-assistant-trace-swatch {
  &[data-part="guidance"] {
    background: color-mix(in oklab, var(--msp-color-text), var(--msp-color-bg) 78%);
  }

  &[data-part="tools"] {
    background: color-mix(in oklab, var(--msp-color-text), var(--msp-color-bg) 64%);
  }

  &[data-part="state"] {
    background: color-mix(in oklab, var(--msp-color-text), var(--msp-color-bg) 48%);
  }

  &[data-part="conversation"] {
    background: color-mix(in oklab, var(--msp-color-text), var(--msp-color-bg) 28%);
  }
}

.msp-assistant-trace-legend {
  gap: var(--msp-space-2) var(--msp-space-4);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
  flex-wrap: wrap;
  display: flex;
}

.msp-assistant-trace-entries {
  gap: 1px;
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
}

.msp-assistant-trace-entry {
  align-items: baseline;
  gap: var(--msp-space-3);
  width: 100%;
  padding: var(--msp-space-2) var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  text-align: left;
  grid-template-columns: 10px 64px minmax(0, auto) minmax(0, 1fr) auto;
  display: grid;

  &:hover {
    background: var(--msp-color-hover);
  }

  &[aria-expanded="true"] {
    background: var(--msp-color-control);
  }
}

.msp-assistant-trace-fresh {
  border-radius: 50%;
  align-self: center;
  width: 5px;
  height: 5px;

  .msp-assistant-trace-entry[data-fresh] & {
    background: var(--msp-color-text-muted);
  }
}

.msp-assistant-trace-entryRole {
  color: var(--msp-color-text-subtle);
  font-family: var(--msp-font-mono);
  letter-spacing: .04em;
  text-transform: uppercase;
  font-size: 10px;

  .msp-assistant-trace-entry[data-failed] & {
    color: var(--msp-color-danger);
  }
}

.msp-assistant-trace-entryTitle {
  white-space: nowrap;
  min-width: 0;
  overflow: hidden;
}

.msp-assistant-trace-entryText {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-assistant-trace-entryTokens {
  color: var(--msp-color-text-subtle);
  font-family: var(--msp-font-mono);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
}

.msp-assistant-trace-entryBody {
  margin: var(--msp-space-1) 0 var(--msp-space-3);
}

.msp-assistant-trace-timing {
  gap: var(--msp-space-3);
  display: grid;
}

.msp-assistant-trace-attempt {
  align-items: center;
  gap: var(--msp-space-1) var(--msp-space-3);
  grid-template-columns: 24px minmax(0, 1fr);
  display: grid;
}

.msp-assistant-trace-ordinal {
  color: var(--msp-color-text-subtle);
  font-family: var(--msp-font-mono);
  font-size: var(--msp-font-size-xs);
}

.msp-assistant-trace-lane {
  border-radius: var(--msp-radius-sm);
  background: var(--msp-color-control);
  height: 10px;
  position: relative;
}

.msp-assistant-trace-segment {
  border-radius: var(--msp-radius-sm);
  min-width: 2px;
  position: absolute;
  top: 0;
  bottom: 0;
}

.msp-assistant-trace-segment, .msp-assistant-trace-key i {
  &[data-kind="wait"] {
    background: repeating-linear-gradient(135deg, var(--msp-color-border-strong) 0 2px, transparent 2px 5px);
  }

  &[data-kind="pre"] {
    background: color-mix(in oklab, var(--msp-color-text), var(--msp-color-bg) 64%);
  }

  &[data-kind="out"] {
    background: var(--msp-color-text-muted);
  }

  &[data-kind="failed"] {
    background: var(--msp-color-danger);
  }

  &[data-kind="running"] {
    background: color-mix(in oklab, var(--msp-color-text), var(--msp-color-bg) 64%);
    animation: msp-assistant-trace-pulse 1.2s var(--msp-ease) infinite;
  }
}

.msp-assistant-trace-attemptText {
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
  grid-column: 2;

  &[data-failed] {
    color: var(--msp-color-danger);
  }
}

.msp-assistant-trace-key {
  gap: var(--msp-space-2) var(--msp-space-4);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  flex-wrap: wrap;
  display: flex;

  & i {
    width: 14px;
    height: 8px;
    margin-right: var(--msp-space-2);
    border-radius: var(--msp-radius-sm);
    display: inline-block;
  }
}

@container inspector (width <= 760px) {
  .msp-assistant-trace-overview {
    padding-inline: var(--msp-space-4);
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .msp-assistant-trace-lanes {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .msp-assistant-trace-block, .msp-assistant-trace-segment {
    animation: none !important;
  }
}
}
`)})))()}function jt(e){let{model:t}=e,n=t.rows.pipe(u(e=>e.length>0),g());return a(h,{when:n,fallback:()=>a(`p`,{class:A.empty,children:`The agent has not run yet. Ask it something (⌘K, then Ask AI assistant): each turn shows here, step by step.`}),children:()=>a(Mt,{model:t})})}function Mt(e){let{model:t}=e,n,r=s(`div`,{class:A.view,children:[a(Ft,{model:t}),s(`div`,{class:A.split,children:[a(b,{class:A.list,contentClass:A.listContent,viewportRef:e=>{n=e},role:`listbox`,"aria-label":`Trace`,children:a(m,{each:t.rows,children:e=>a(Lt,{model:t,row:e})},e=>e.key)}),a(b,{class:A.detail,contentClass:A.detailContent,children:a(h,{when:t.row,children:e=>a(Ht,{model:t,row:e})})})]})]});it(()=>r,e=>t.move(e));let o=t.selected.pipe(Fe(1)).subscribe(e=>queueMicrotask(()=>at(n,e,`center`))),c=t.selected.pipe(xe(1)).subscribe(e=>queueMicrotask(()=>at(n,e,`nearest`,Zt)));return i(()=>{o.unsubscribe(),c.unsubscribe()}),r}function Nt(e){let t=e.attempts[0],n=e.attempts.at(-1);return!t||!n?0:(n.end??n.start+800)-t.start}function Pt(e){return e.kind===`tool`?e.title??e.name:e.reply?`model: reply`:`model: ${tn(e)||`…`}`}function Ft(e){let{model:t}=e;return s(`div`,{class:j.overview,children:[s(`div`,{class:j.lanes,"aria-hidden":`true`,children:[a(`span`,{children:`model`}),a(`span`,{children:`tools`})]}),a(`div`,{class:j.track,children:a(m,{each:t.turns,children:(e,n)=>a(It,{model:t,turn:e,index:n.value})},e=>e.id)}),a(Qe,{label:`Overview scale`,tabs:[{id:`steps`,label:`Steps`},{id:`time`,label:`Time`}],value:t.scale,onChange:e=>t.setScale(e)})]})}function It(e){let{model:t,turn:n}=e,r=e=>t.scale.pipe(u(e)),i=`req:${n.id}`;return s(`div`,{class:j.column,"data-selected":t.isSelected(`turn:${n.id}`).pipe(u(e=>e?``:void 0)),style:{flexGrow:r(e=>n.steps.reduce((t,n)=>t+nn(e,n),.6))},children:[a(`button`,{type:`button`,class:j.block,"data-kind":`request`,"aria-label":`Turn ${e.index+1}: ${n.prompt}`,"data-tip":`Turn ${e.index+1}: ${n.prompt}`,"aria-pressed":t.isSelected(i),onClick:()=>t.select(i)}),n.steps.map(e=>{let n=`step:${e.id}`,i=`${Pt(e)} · ${en(e)?`running`:C(Nt(e))}`;return a(`button`,{type:`button`,class:j.block,"data-kind":e.kind,"data-nested":e.under===void 0?void 0:``,"data-failed":$t(e)?``:void 0,"data-retried":e.attempts.length>1?``:void 0,"data-running":en(e)?``:void 0,"aria-label":i,"data-tip":i,"aria-pressed":t.isSelected(n),style:{flexGrow:r(t=>nn(t,e))},onClick:()=>t.select(n)})})]})}function Lt(e){let{model:t,row:n}=e,r=t.isSelected(n.key),i=()=>t.select(n.key);if(n.kind===`turn`){let e=n.turn,t=e.steps.filter(e=>e.kind===`tool`).length;return s(`button`,{type:`button`,role:`option`,class:A.head,"data-row":n.key,"aria-selected":r,onClick:i,children:[s(`span`,{class:A.headTitle,children:[`Turn `,n.index+1]}),a(`span`,{class:A.status,"data-status":e.status,children:Qt[e.status]}),a(`span`,{class:A.headMeta,children:[e.end===void 0?`running`:C(e.end-e.start),He(e.tokens),`${t} tool ${t===1?`call`:`calls`}`].join(` · `)})]})}if(n.kind===`request`)return s(Rt,{row:n.key,role:`request`,selected:r,onSelect:i,children:[a(`span`,{children:n.turn.prompt}),n.turn.focus?s(`span`,{class:A.focus,children:[`Focus: `,n.turn.focus]}):null]});let c=n.step;if(c.kind===`model`){let e=en(c);return a(Rt,{row:n.key,role:c.reply?`reply`:`model`,nested:n.nested,selected:r,onSelect:i,meta:s(o,{children:[c.attempts.length>1?a(`span`,{class:A.flag,"data-tip":Vt(c.attempts),children:`retried`}):null,c.prefixBreak?a(`span`,{class:A.flag,"data-tip":Bt(c.prefixBreak),children:`new prefix`}):null,a(`span`,{class:A.time,children:e?`thinking…`:C(Nt(c))}),a(`span`,{class:A.tokens,children:c.tokens?`${S(c.tokens.input)} → ${S(c.tokens.output)}`:``})]}),children:e?a(`span`,{class:T.dim,children:`waiting for the model`}):c.reply?a(`span`,{children:c.reply}):s(`span`,{children:[a(`span`,{class:T.dim,children:`asks for `}),a(`span`,{class:A.name,children:tn(c)})]})})}let l=rn(c);return s(Rt,{row:n.key,role:c.status===`failed`?`failed`:c.read?`reads`:`tool`,failed:c.status===`failed`,nested:n.nested,selected:r,onSelect:i,meta:s(o,{children:[l.map(e=>a(`span`,{class:A.chip,children:e.label})),a(`span`,{class:A.time,children:c.status===`running`?`running`:C(Nt(c))}),a(`span`,{class:A.tokens})]}),children:[c.title?a(`span`,{children:c.title}):a(`span`,{class:A.name,children:c.name}),a(`span`,{class:A.args,children:zt(c)}),c.result===void 0?null:s(`span`,{class:A.result,children:[`→ `,st(c.result)]})]})}function Rt(e){return s(`button`,{type:`button`,role:`option`,class:A.row,"data-row":e.row,"data-failed":e.failed?``:void 0,"data-nested":e.nested?``:void 0,"aria-selected":e.selected,onClick:()=>e.onSelect(),children:[a(`span`,{class:A.role,children:e.role}),s(`span`,{class:A.body,children:[e.nested?a(`span`,{class:A.nest,children:`↳`}):null,e.children]}),a(`span`,{class:A.meta,children:e.meta})]})}function zt(e){return Object.entries(e.args).map(([e,t])=>`${e}=${typeof t==`string`?t:JSON.stringify(t)}`).join(` `)}function Bt(e){return`It does not extend the previous request: ${e.reason}. It kept ${e.kept} of that request’s ${e.of} parts (tools, system, then each message), so the provider’s cache could serve at most those.`}function Vt(e){let t=e.filter(e=>e.status===`failed`);return`${e.length} attempts: ${t.map(e=>e.failure??`failed`).join(`; `)}`}function Ht(e){let{model:t,row:n}=e;return n.kind===`turn`?a(Ut,{turn:n.turn,index:n.index}):n.kind===`request`?a(Wt,{turn:n.turn}):n.step.kind===`model`?a(Kt,{model:t,step:n.step}):a(qt,{model:t,step:n.step})}function Ut(e){let{turn:t}=e,n=t.steps.filter(e=>e.kind===`model`&&e.under===void 0),r=Math.max(1,...n.map(e=>e.tokens?.input??0));return s(o,{children:[a(E,{kind:`turn`,where:`${e.index+1} · ${t.id}`}),a(`p`,{class:T.prose,children:t.prompt}),a(D,{items:[[`Status`,Qt[t.status]],[`Duration`,t.end===void 0?`running`:C(t.end-t.start)],[`Tokens`,He(t.tokens)],[`Model calls`,String(t.steps.filter(e=>e.kind===`model`).length)],[`Tool calls`,String(t.steps.filter(e=>e.kind===`tool`).length)],...t.failure?[[`Failure`,t.failure]]:[]]}),a(`h4`,{class:T.h,children:`Input size per model call`}),a(`p`,{class:T.note,children:`Each call carries the whole conversation so far: the growth is what a long turn costs.`}),a(`div`,{class:j.bars,children:n.map((e,t)=>{let n=e.tokens?Ve(e.tokens):void 0;return s(`div`,{class:j.bar,children:[a(`span`,{children:t+1}),a(tt,{share:(e.tokens?.input??0)/r}),a(`span`,{children:e.tokens?`${S(e.tokens.input)}${n===void 0?``:` · ${n}%`}`:`…`})]})})}),a(`p`,{class:T.note,children:`The share after the size is what the provider’s cache served.`}),a(`h4`,{class:T.h,children:`Milestones`}),a(`ul`,{class:j.milestones,children:t.milestones.map(e=>s(`li`,{children:[s(`span`,{class:j.at,children:[`+`,C(e.at-t.start)]}),` `,e.kind,e.detail?s(`span`,{class:T.dim,children:[` · `,e.detail]}):null]}))})]})}function Wt(e){let{turn:t}=e;return s(o,{children:[a(E,{kind:`request`,where:t.id}),a(`p`,{class:T.prose,children:t.prompt}),a(D,{items:[[`Focus`,t.focus??`none`]]}),a(`p`,{class:T.note,children:`Sent with the state (what is loaded, selected and shown) and the focus (what the person points at), so the model works from what is on the screen.`})]})}function Gt(e){let{model:t,kind:n}=e,r=t.tabs.pipe(u(e=>e[n]),g());return s(o,{children:[a(Qe,{label:`Detail`,tabs:e.tabs,value:r,onChange:e=>t.setTab(n,e)}),a(h,{when:r,children:t=>e.children(t)})]})}function Kt(e){let{model:t,step:n}=e,r=n.attempts.filter(e=>e.status===`failed`);return s(o,{children:[a(E,{kind:n.under===void 0?`model call`:`model call · nested`,where:n.callId,children:n.model?a(`span`,{class:T.dim,children:n.model}):null}),a(Gt,{model:t,kind:`model`,tabs:[{id:`saw`,label:`What it saw`},{id:`answer`,label:`Answer`},{id:`timing`,label:`Timing`,count:n.attempts.length>1?n.attempts.length:``}],children:e=>e===`saw`?n.window?a(Jt,{window:n.window,prefixBreak:n.prefixBreak}):a(`p`,{class:T.note,children:`Not captured.`}):e===`answer`?s(o,{children:[a(D,{items:[[`Finish`,n.finish??(en(n)?`running`:`—`)],[`Tokens`,n.tokens?a(et,{tokens:n.tokens}):`…`],...r.length?[[`Failed`,r.map(e=>e.failure??`failed`).join(`; `)]]:[]]}),n.reply?a(`p`,{class:T.prose,children:n.reply}):null,n.toolCalls?.length?a(`pre`,{class:T.code,children:n.toolCalls.join(`
`)}):null]}):a(Xt,{attempts:n.attempts})})]})}function qt(e){let{model:t,step:n}=e,r=n.status===`failed`,i=rn(n),c=t.tools.value.groups.flatMap(e=>e.tools).find(e=>e.name===n.name),l=c?.description??t.trace.value?.preamble.tools.find(e=>e.name===n.name)?.description;return s(o,{children:[a(E,{kind:r?`tool call · failed`:`tool call`,where:n.callId,children:a(`span`,{class:A.name,children:n.name})}),n.title?a(`p`,{class:T.prose,children:n.title}):null,a(Gt,{model:t,kind:`tool`,tabs:[{id:`result`,label:`Result`},{id:`args`,label:`Arguments`},{id:`definition`,label:`Definition`},{id:`timing`,label:`Timing`}],children:e=>e===`result`?s(o,{children:[i.length?a(D,{items:[[`Changed`,a(`span`,{class:A.chips,children:i.map(e=>a(`span`,{class:A.chip,"data-tip":e.id,children:e.label}))})]]}):null,a(`pre`,{class:T.code,"data-failed":r?``:void 0,children:n.result??`…`}),r?a(`p`,{class:T.note,children:`The failure went back to the model as the call’s result; the next call fixes it.`}):null]}):e===`args`?a($e,{value:n.args}):e===`definition`?s(o,{children:[a(`p`,{class:T.prose,children:l??`No definition captured.`}),c?a(D,{items:[[`Reads`,c.read?`only: no effect, no checkpoint`:`no: it changes something`],[`Approval`,c.approval?`asks the person first`:`not needed`]]}):null,a(`button`,{type:`button`,class:T.link,onClick:()=>t.openTool(n.name),children:`Its input, where it loads and its size, in Tools`})]}):a(Xt,{attempts:n.attempts})})]})}function Jt(e){let{window:t}=e,n=t.entries.reduce((e,t)=>e+t.tokens,0),r=t.entries.filter(e=>e.fresh).reduce((e,t)=>e+t.tokens,0),i=e=>t.entries.filter(t=>t.part===e).reduce((e,t)=>e+t.tokens,0),c=t.entries.findIndex(e=>e.part!==`guidance`&&e.part!==`tools`),l=t.entries.findIndex(e=>e.fresh),ee=c<0?t.entries.length:c,te=l<0?t.entries.length:Math.max(ee,l),ne=f(te-ee<2),u=t.entries.slice(ee,te);return s(o,{children:[s(`div`,{class:j.window,children:[a(`div`,{class:j.makeup,"data-tip":`≈${S(n)} tokens`,children:on.map(([e])=>{let t=i(e);return t?a(`span`,{class:j.part,"data-part":e,style:{flexGrow:t}}):null})}),a(`div`,{class:j.legend,children:on.map(([e,t])=>{let n=i(e);return n?s(`span`,{children:[a(`i`,{class:j.swatch,"data-part":e}),t,` `,S(n)]}):null})}),s(`p`,{class:T.note,children:[`≈`,S(n),` tokens`,t.limit?`, ${(n/t.limit*100).toFixed(1)}% of the model’s window`:``,`; `,S(r),` new since the previous call.`]}),e.prefixBreak?a(`p`,{class:T.note,children:Bt(e.prefixBreak)}):null]}),s(`ol`,{class:j.entries,children:[t.entries.slice(0,ee).map(e=>a(Yt,{entry:e})),u.length?a(h,{when:ne.asReadonly,fallback:()=>a(`li`,{children:s(`button`,{type:`button`,class:j.entry,onClick:()=>ne.set(!0),children:[a(`span`,{class:j.fresh}),a(`span`,{class:j.entryRole,children:`earlier`}),s(`span`,{class:j.entryTitle,children:[u.length,` `,u.length===1?`entry`:`entries`,` from before`]}),a(`span`,{class:j.entryText,children:`show`}),a(`span`,{class:j.entryTokens,children:S(u.reduce((e,t)=>e+t.tokens,0))})]})}),children:()=>u.map(e=>a(Yt,{entry:e}))}):null,t.entries.slice(te).map(e=>a(Yt,{entry:e}))]})]})}function Yt(e){let t=e.entry,n=f(!1);return s(`li`,{children:[s(`button`,{type:`button`,class:j.entry,"data-fresh":t.fresh?``:void 0,"data-failed":t.failed?``:void 0,"aria-expanded":n.asReadonly,onClick:()=>n.set(!n.value),children:[a(`span`,{class:j.fresh,"data-tip":t.fresh?`New since the previous call`:void 0}),a(`span`,{class:j.entryRole,children:an[t.role]}),a(`span`,{class:j.entryTitle,children:t.title}),a(`span`,{class:j.entryText,children:st(t.text)}),a(`span`,{class:j.entryTokens,children:S(t.tokens)})]}),a(h,{when:n.asReadonly,children:()=>a(`pre`,{class:`${T.code} ${j.entryBody}`,children:t.text})})]})}function Xt(e){let{attempts:t}=e,n=Math.min(...t.map(e=>e.start-(e.waitBefore?.ms??0))),r=Math.max(...t.map(e=>e.end??e.start+400)),i=Math.max(1,r-n),o=e=>`${(e-n)/i*100}%`,c=(e,t)=>`${Math.max(0,t-e)/i*100}%`;return s(`div`,{class:j.timing,children:[t.map(e=>{let t=e.firstOutput??e.end??r;return s(`div`,{class:j.attempt,children:[s(`span`,{class:j.ordinal,children:[`#`,e.ordinal]}),s(`span`,{class:j.lane,children:[e.waitBefore?a(`i`,{class:j.segment,"data-kind":`wait`,"data-tip":`${e.waitBefore.reason}, ${C(e.waitBefore.ms)}`,style:{left:o(e.start-e.waitBefore.ms),width:c(e.start-e.waitBefore.ms,e.start)}}):null,a(`i`,{class:j.segment,"data-kind":e.status===`failed`?`failed`:e.status===`running`?`running`:`pre`,style:{left:o(e.start),width:c(e.start,t)}}),e.firstOutput!==void 0&&e.end!==void 0?a(`i`,{class:j.segment,"data-kind":`out`,style:{left:o(e.firstOutput),width:c(e.firstOutput,e.end)}}):null]}),s(`span`,{class:j.attemptText,"data-failed":e.status===`failed`?``:void 0,children:[e.status===`failed`?e.failure??`failed`:e.status===`running`?`running`:`${C((e.end??e.start)-e.start)}${e.firstOutput===void 0?``:`, the first output after ${C(e.firstOutput-e.start)}`}`,e.waitBefore?s(`span`,{class:T.dim,children:[` `,`· after `,e.waitBefore.reason,`, `,C(e.waitBefore.ms)]}):null]})]})}),s(`div`,{class:j.key,children:[s(`span`,{children:[a(`i`,{"data-kind":`wait`}),`waiting`]}),s(`span`,{children:[a(`i`,{"data-kind":`pre`}),`until the first output`]}),s(`span`,{children:[a(`i`,{"data-kind":`out`}),`output`]})]})]})}var Zt,Qt,$t,en,tn,nn,rn,an,on;function sn(){return(sn=e((()=>{x(),p(),d(),Se(),Ie(),mt(),At(),O(),c(),Zt=40,Qt={thinking:`thinking…`,working:`working…`,waiting:`waiting for you`,done:`done`,stopped:`stopped`,failed:`failed`},$t=e=>e.kind===`tool`?e.status===`failed`:e.attempts.every(e=>e.status===`failed`),en=e=>e.attempts.some(e=>e.status===`running`),tn=e=>(e.toolCalls??[]).map(e=>e.split(`(`)[0]).join(`, `),nn=(e,t)=>e===`steps`?1:Math.max(.25,Nt(t)/700),rn=e=>[...new Map((e.changed??[]).map(e=>[e.id,e])).values()],an={system:`guidance`,tools:`tools`,user:`request`,assistant:`model`,tool:`tool`},on=[[`guidance`,`Guidance`],[`tools`,`Tool definitions`],[`state`,`State`],[`conversation`,`Conversation`]]})))()}function cn(e){return{id:Re,title:`Inspect assistant`,icon:`sparkles`,header:se(()=>a(un,{model:e})),render:se(({ctx:t})=>{t.focus&&e.focus(t.focus);let n=t.shell.page.subscribe(t=>{t?.page.id===`inspector`&&t.focus&&e.focus(t.focus)});return i(()=>n.unsubscribe()),a(dn,{model:e})})}}function ln(e){let t=e?.turns.at(-1)?.status;return t===`waiting`?`waiting`:t===`thinking`||t===`working`?`working`:`idle`}function un(e){let{model:t}=e,n=t.trace.pipe(u(ln),g()),r=t.trace.pipe(u(e=>e?.turns.length?e.turns.length:``)),i=t.tools.pipe(u(e=>qe(e).tools));return s(o,{children:[a(Qe,{label:`Inspector`,tabs:[{id:`trace`,label:`Trace`,count:r},{id:`tools`,label:`Tools`,count:i},{id:`limits`,label:`Limits`}],value:t.view,onChange:e=>t.setView(e)}),a(`span`,{class:A.spacer}),a(h,{when:t.trace.pipe(u(e=>!!e)),children:()=>s(`span`,{class:A.state,"data-state":n,children:[a(`i`,{class:A.dot}),n]})}),a(nt,{budget:t.trace.pipe(u(e=>e?.budget))})]})}function dn(e){let{model:t}=e;return a(`div`,{class:A.inspector,children:a(h,{when:t.view,children:e=>a(e===`trace`?jt:e===`tools`?_t:lt,{model:t})})})}function fn(){return(fn=e((()=>{x(),p(),d(),ze(),mt(),pt(),Xe(),O(),kt(),sn(),c()})))()}function pn(){return(pn=e((()=>{ze(),pt(),Xe(),fn(),O(),kt(),sn()})))()}var M;function mn(){return(mn=e((()=>{n(),M={allow:`msp-assistant-agent-turn-allow`,approval:`msp-assistant-agent-turn-approval`,approvalText:`msp-assistant-agent-turn-approvalText`,approvalWhy:`msp-assistant-agent-turn-approvalWhy`,bar:`msp-assistant-agent-turn-bar`,barFill:`msp-assistant-agent-turn-barFill`,body:`msp-assistant-agent-turn-body`,bodyContent:`msp-assistant-agent-turn-bodyContent`,card:`msp-assistant-agent-turn-card`,deny:`msp-assistant-agent-turn-deny`,footer:`msp-assistant-agent-turn-footer`,header:`msp-assistant-agent-turn-header`,icon:`msp-assistant-agent-turn-icon`,line:`msp-assistant-agent-turn-line`,mark:`msp-assistant-agent-turn-mark`,note:`msp-assistant-agent-turn-note`,prompt:`msp-assistant-agent-turn-prompt`,run:`msp-assistant-agent-turn-run`,runDetail:`msp-assistant-agent-turn-runDetail`,runTime:`msp-assistant-agent-turn-runTime`,runTitle:`msp-assistant-agent-turn-runTitle`,runs:`msp-assistant-agent-turn-runs`,spark:`msp-assistant-agent-turn-spark`,"spark-pulse":`msp-assistant-agent-turn-spark-pulse`,spin:`msp-assistant-agent-turn-spin`,state:`msp-assistant-agent-turn-state`,stop:`msp-assistant-agent-turn-stop`,summary:`msp-assistant-agent-turn-summary`,text:`msp-assistant-agent-turn-text`,trace:`msp-assistant-agent-turn-trace`,undo:`msp-assistant-agent-turn-undo`,undone:`msp-assistant-agent-turn-undone`},t(`assistant/views/agent-turn.module.css`,`@layer msp.components {
.msp-assistant-agent-turn-card {
  margin-top: var(--msp-space-1);
  width: min(380px, calc(100cqw - 2 * var(--msp-space-4)));
  border-radius: var(--msp-radius-lg);
  background: var(--msp-glass-bg);
  max-height: min(420px, 60cqh);
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  flex-direction: column;
  display: flex;
}

.msp-assistant-agent-turn-header {
  align-items: center;
  gap: var(--msp-space-2);
  min-height: 34px;
  padding: 0 var(--msp-space-2) 0 var(--msp-space-3);
  display: flex;
}

.msp-assistant-agent-turn-spark {
  color: var(--msp-color-accent);
  flex: none;

  .msp-assistant-agent-turn-card:is([data-status="thinking"], [data-status="working"]) & {
    animation: msp-assistant-agent-turn-spark-pulse 1.4s var(--msp-ease) infinite;
  }
}

@keyframes msp-assistant-agent-turn-spark-pulse {
  50% {
    opacity: .35;
  }
}

.msp-assistant-agent-turn-prompt {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  font-weight: 600;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-assistant-agent-turn-state {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  flex: none;

  .msp-assistant-agent-turn-card[data-status="waiting"] & {
    color: var(--msp-color-accent);
  }

  .msp-assistant-agent-turn-card[data-status="failed"] & {
    color: var(--msp-color-danger);
  }
}

.msp-assistant-agent-turn-icon, .msp-assistant-agent-turn-stop {
  justify-content: center;
  align-items: center;
  gap: var(--msp-space-1);
  border-radius: var(--msp-radius-md);
  height: 24px;
  color: var(--msp-color-text-muted);
  flex: none;
  display: inline-flex;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-assistant-agent-turn-icon {
  width: 24px;
}

.msp-assistant-agent-turn-stop {
  padding: 0 var(--msp-space-2);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-xs);
}

.msp-assistant-agent-turn-body {
  flex: 0 auto;
}

.msp-assistant-agent-turn-bodyContent {
  gap: var(--msp-space-2);
  padding: 0 var(--msp-space-3) var(--msp-space-2);
  display: grid;
}

.msp-assistant-agent-turn-text {
  margin: 0;
  line-height: 1.45;

  &[data-streaming] {
    color: var(--msp-color-text-muted);
  }
}

.msp-assistant-agent-turn-note {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
}

.msp-assistant-agent-turn-runs {
  display: grid;
}

.msp-assistant-agent-turn-run {
  align-items: center;
  column-gap: var(--msp-space-2);
  min-height: 24px;
  padding: var(--msp-space-1) 0;
  grid-template-columns: 14px minmax(0, 1fr) auto;
  display: grid;

  &[data-read] {
    color: var(--msp-color-text-muted);
  }
}

.msp-assistant-agent-turn-mark {
  color: var(--msp-color-text-subtle);

  .msp-assistant-agent-turn-run[data-status="running"] & {
    color: var(--msp-color-text);
    animation: .9s linear infinite msp-assistant-agent-turn-spin;
  }

  .msp-assistant-agent-turn-run[data-status="waiting"] & {
    color: var(--msp-color-accent);
  }

  .msp-assistant-agent-turn-run[data-status="failed"] & {
    color: var(--msp-color-danger);
  }
}

@keyframes msp-assistant-agent-turn-spin {
  to {
    rotate: 360deg;
  }
}

.msp-assistant-agent-turn-runTitle {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;

  .msp-assistant-agent-turn-run[data-status="stopped"] &, .msp-assistant-agent-turn-run[data-status="denied"] & {
    color: var(--msp-color-text-subtle);
    text-decoration: line-through;
  }
}

.msp-assistant-agent-turn-runTime {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
}

.msp-assistant-agent-turn-runDetail {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  grid-column: 2 / -1;

  .msp-assistant-agent-turn-run[data-status="failed"] & {
    color: var(--msp-color-danger);
  }
}

.msp-assistant-agent-turn-bar {
  height: 2px;
  margin-top: var(--msp-space-1);
  background: var(--msp-color-control);
  border-radius: 1px;
  grid-column: 2 / -1;
  overflow: hidden;
}

.msp-assistant-agent-turn-barFill {
  background: var(--msp-color-text-muted);
  height: 100%;
  transition: width var(--msp-motion-fast) var(--msp-ease);
  display: block;
}

.msp-assistant-agent-turn-approval {
  align-items: center;
  gap: var(--msp-space-2);
  margin: 0 var(--msp-space-2) var(--msp-space-2);
  padding: var(--msp-space-2) var(--msp-space-2) var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-accent), transparent 88%);
  display: flex;
}

.msp-assistant-agent-turn-approvalText {
  flex: 1;
  min-width: 0;
}

.msp-assistant-agent-turn-approvalWhy {
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
  display: block;
}

.msp-assistant-agent-turn-deny, .msp-assistant-agent-turn-allow {
  height: 24px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  flex: none;

  &:hover {
    background: var(--msp-color-hover);
  }
}

.msp-assistant-agent-turn-deny {
  color: var(--msp-color-text-muted);
}

.msp-assistant-agent-turn-allow {
  background: color-mix(in oklab, var(--msp-color-accent), transparent 80%);
  color: var(--msp-color-accent-strong);
  font-weight: 600;

  &:hover {
    background: color-mix(in oklab, var(--msp-color-accent), transparent 70%);
  }
}

.msp-assistant-agent-turn-footer {
  align-items: center;
  gap: var(--msp-space-2);
  min-height: 32px;
  padding: 0 var(--msp-space-2) 0 var(--msp-space-3);
  box-shadow: inset 0 1px 0 var(--msp-glass-edge);
  display: flex;
}

.msp-assistant-agent-turn-summary {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-assistant-agent-turn-undone {
  padding: 0 var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  flex: none;
}

.msp-assistant-agent-turn-trace {
  height: 24px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
  flex: none;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-assistant-agent-turn-undo {
  align-items: center;
  gap: var(--msp-space-1);
  height: 24px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-accent-strong);
  font-weight: 600;
  display: inline-flex;

  &:hover {
    background: var(--msp-color-hover);
  }
}

.msp-assistant-agent-turn-line {
  display: contents;

  &:is([data-status="thinking"], [data-status="working"]) .msp-assistant-agent-turn-spark {
    animation: msp-assistant-agent-turn-spark-pulse 1.4s var(--msp-ease) infinite;
  }

  &[data-status="waiting"] .msp-assistant-agent-turn-state {
    color: var(--msp-color-accent);
  }
}
}
`)})))()}function hn(e){return e===void 0?``:e<1e3?`${Math.max(.1,e/1e3).toFixed(1)} s`:`${(e/1e3).toFixed(1)} s`}function gn(e){let t=e.runs.filter(e=>!e.read),n=e.runs.filter(e=>e.status===`failed`).length,r=[`${t.length} command${t.length===1?``:`s`}`];return n&&r.push(`${n} failed`),e.durationMs!==void 0&&r.push(hn(e.durationMs)),e.usage&&r.push(`${En(e.usage.input)} in · ${En(e.usage.output)} out`),r.join(` · `)}function _n(e){return e.status===`thinking`||e.status===`working`||e.status===`waiting`}function vn(e){let t=e.run,n=e=>t.pipe(u(t=>t[e]),g()),r=n(`status`);return s(`div`,{class:M.run,"data-status":r,"data-read":n(`read`).pipe(u(e=>e?``:void 0)),children:[a(h,{when:r,children:e=>a(y,{name:wn[e],size:14,class:M.mark})}),a(`span`,{class:M.runTitle,"data-tip-overflow":``,children:n(`title`)}),a(`span`,{class:M.runTime,children:n(`durationMs`).pipe(u(hn))}),a(h,{when:n(`detail`),children:e=>a(`span`,{class:M.runDetail,children:e})}),a(h,{when:n(`progress`).pipe(u(e=>e!==void 0)),children:()=>a(`span`,{class:M.bar,children:a(`span`,{class:M.barFill,style:{width:n(`progress`).pipe(u(e=>`${Math.round((e??0)*100)}%`))}})})})]})}function yn(e){let t=e.turn.pipe(u(e=>e.runs)),n=t.pipe(u(e=>e.map(e=>e.id)),g((e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n])));return a(`div`,{class:e.class,children:a(m,{each:n,children:e=>a(vn,{run:t.pipe(u(t=>t.find(t=>t.id===e)),v(e=>!!e),g())})})})}function bn(e){return s(`button`,{type:`button`,class:M.undo,"data-tip":`Back to how it was before this request`,onClick:()=>e.agent.undo(e.id),children:[a(y,{name:`undo-2`,size:14}),`Undo turn`]})}function xn(e){let{agent:t}=e,n=e=>{if(e.key!==`Escape`||e.defaultPrevented||t.view.value!==`card`||!t.turn.value)return;let n=e.target;n?.isContentEditable||n?.closest?.(`input, textarea, select, [role=listbox], [role=menu], [role=dialog], [data-msp-page], [popover]`)||(e.preventDefault(),e.stopPropagation(),t.dismiss())};document.addEventListener(`keydown`,n,!0),i(()=>document.removeEventListener(`keydown`,n,!0));let r=e=>_([t.turn,t.view]).pipe(u(([t,n])=>n===e?t?.id:void 0),g());return s(o,{children:[a(h,{when:r(`line`),children:()=>a(Sn,{agent:t})}),a(h,{when:r(`card`),children:n=>a(Cn,{agent:t,id:n,onTrace:e.onTrace})})]})}function Sn(e){let t=e.agent.turn.pipe(v(e=>!!e)),n=t.pipe(u(e=>e.status),g());return a(`span`,{class:M.line,"data-status":n,children:a(ce,{icon:a(y,{name:`sparkles`,size:14,class:M.spark}),text:t.pipe(u(e=>e.prompt)),after:a(`span`,{class:M.state,children:n.pipe(u(e=>Tn[e]))}),label:`Show the assistant’s turn`,onClick:()=>e.agent.reopen(),dismissLabel:`Hide`,onDismiss:()=>e.agent.hide()})})}function Cn(e){let{agent:t,id:n}=e;return a(h,{when:n,children:()=>{let r=t.turn.pipe(v(e=>e?.id===n),g()),i=r.pipe(u(e=>e.status),g()),o=r.pipe(u(_n),g()),c=r.pipe(u(e=>e.runs.find(e=>e.status===`waiting`)),g());return s(`section`,{class:M.card,"data-status":i,"aria-label":`Assistant`,"aria-live":`polite`,children:[s(`header`,{class:M.header,children:[a(y,{name:`sparkles`,size:14,class:M.spark}),a(`span`,{class:M.prompt,"data-tip-overflow":``,children:r.pipe(u(e=>e.prompt))}),a(`span`,{class:M.state,children:i.pipe(u(e=>Tn[e]))}),a(h,{when:o,children:()=>s(`button`,{type:`button`,class:M.stop,onClick:()=>t.stop(),children:[a(y,{name:`square`,size:10}),`Stop`]})}),a(`button`,{type:`button`,class:M.icon,"aria-label":`Close`,"data-tip":`Close (Esc)`,onClick:()=>t.dismiss(),children:a(y,{name:`x`,size:14})})]}),s(b,{class:M.body,contentClass:M.bodyContent,children:[a(h,{when:r.pipe(u(e=>e.text)),children:e=>a(`p`,{class:M.text,"data-streaming":o.pipe(u(e=>e?``:void 0)),children:e})}),a(h,{when:r.pipe(u(e=>e.retries??0)),children:e=>s(`p`,{class:M.note,children:[`Retried the model `,e===1?`once`:`${e} times`,` (the provider was busy)`]})}),a(yn,{turn:r,class:M.runs})]}),a(h,{when:c,children:e=>s(`div`,{class:M.approval,role:`group`,"aria-label":`Approval`,children:[s(`span`,{class:M.approvalText,children:[`Allow “`,e.title,`”? `,a(`span`,{class:M.approvalWhy,children:e.detail})]}),a(`button`,{type:`button`,class:M.deny,onClick:()=>t.approve(e.id,!1),children:`Deny`}),a(`button`,{type:`button`,class:M.allow,onClick:()=>t.approve(e.id,!0),children:`Allow`})]})}),a(h,{when:o.pipe(u(e=>!e)),children:()=>s(`footer`,{class:M.footer,children:[a(`span`,{class:M.summary,children:r.pipe(u(gn))}),e.onTrace?a(`button`,{type:`button`,class:M.trace,"data-tip":`Each step of this turn, in the Inspector`,onClick:()=>e.onTrace?.(n),children:`Trace`}):null,a(h,{when:r.pipe(u(e=>e.checkpoint&&!e.undone)),fallback:()=>a(h,{when:r.pipe(u(e=>!!e.undone)),children:()=>a(`span`,{class:M.undone,children:`Undone`})}),children:()=>a(bn,{agent:t,id:n})})]})})]})}})}var wn,Tn,En;function Dn(){return(Dn=e((()=>{x(),ye(),p(),be(),d(),mn(),c(),wn={running:`loader-circle`,waiting:`hourglass`,done:`check`,failed:`x`,stopped:`ban`,denied:`ban`},Tn={thinking:`Thinking…`,working:`Working…`,waiting:`Waiting for you`,done:`Done`,stopped:`Stopped`,failed:`Failed`},En=e=>e>=1e3?`${(e/1e3).toFixed(1)}k`:`${e}`})))()}var N;function On(){return(On=e((()=>{n(),N={action:`msp-assistant-ai-setup-action`,caption:`msp-assistant-ai-setup-caption`,copy:`msp-assistant-ai-setup-copy`,error:`msp-assistant-ai-setup-error`,fold:`msp-assistant-ai-setup-fold`,grow:`msp-assistant-ai-setup-grow`,intro:`msp-assistant-ai-setup-intro`,keyForm:`msp-assistant-ai-setup-keyForm`,keyRow:`msp-assistant-ai-setup-keyRow`,label:`msp-assistant-ai-setup-label`,lead:`msp-assistant-ai-setup-lead`,link:`msp-assistant-ai-setup-link`,modelRow:`msp-assistant-ai-setup-modelRow`,note:`msp-assistant-ai-setup-note`,own:`msp-assistant-ai-setup-own`,ownFoot:`msp-assistant-ai-setup-ownFoot`,provider:`msp-assistant-ai-setup-provider`,providerHead:`msp-assistant-ai-setup-providerHead`,providerName:`msp-assistant-ai-setup-providerName`,providerState:`msp-assistant-ai-setup-providerState`,providers:`msp-assistant-ai-setup-providers`,refresh:`msp-assistant-ai-setup-refresh`,"refresh-spin":`msp-assistant-ai-setup-refresh-spin`,row:`msp-assistant-ai-setup-row`,scope:`msp-assistant-ai-setup-scope`,scopes:`msp-assistant-ai-setup-scopes`,scopesLabel:`msp-assistant-ai-setup-scopesLabel`,setup:`msp-assistant-ai-setup-setup`},t(`assistant/views/ai-setup.module.css`,`@layer msp.components {
.msp-assistant-ai-setup-setup, .msp-assistant-ai-setup-intro, .msp-assistant-ai-setup-own, .msp-assistant-ai-setup-keyForm {
  gap: var(--msp-space-2);
  display: grid;
}

.msp-assistant-ai-setup-setup {
  font-size: var(--msp-font-size-sm);
}

.msp-assistant-ai-setup-intro {
  gap: var(--msp-space-1);
}

.msp-assistant-ai-setup-scopes {
  align-items: center;
  gap: var(--msp-space-1);
  padding-left: var(--msp-space-3);
  display: flex;
}

.msp-assistant-ai-setup-scopesLabel {
  margin-right: var(--msp-space-1);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-assistant-ai-setup-scope {
  height: 22px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);

  &:hover {
    background: var(--msp-color-hover);
  }

  &[aria-checked="true"] {
    background: var(--msp-color-control);
    color: var(--msp-color-text);
  }
}

.msp-assistant-ai-setup-lead {
  padding: 0 var(--msp-inset);
  margin: 0;
  font-weight: 600;
}

.msp-assistant-ai-setup-copy {
  padding: 0 var(--msp-inset);
  color: var(--msp-color-text-muted);
  margin: 0;
  line-height: 1.45;
}

.msp-assistant-ai-setup-note {
  padding: 0 var(--msp-inset);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
}

.msp-assistant-ai-setup-caption {
  margin: var(--msp-space-1) 0 0;
  padding: 0 var(--msp-inset);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-weight: 500;
}

.msp-assistant-ai-setup-row {
  grid-template-columns: var(--msp-label-width, 96px) minmax(0, 1fr);
  align-items: start;
  gap: var(--msp-space-3);
  padding-left: var(--msp-space-3);
  display: grid;
}

.msp-assistant-ai-setup-label {
  color: var(--msp-color-text-muted);
  line-height: 24px;
}

.msp-assistant-ai-setup-grow {
  flex: 1;
  min-width: 0;
}

.msp-assistant-ai-setup-keyRow {
  gap: var(--msp-space-2);
  display: flex;
}

.msp-assistant-ai-setup-action {
  height: 24px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-accent), transparent 84%);
  color: var(--msp-color-accent-strong);
  flex: none;
  font-weight: 600;

  &:hover {
    background: color-mix(in oklab, var(--msp-color-accent), transparent 76%);
  }
}

.msp-assistant-ai-setup-providers {
  display: grid;
}

.msp-assistant-ai-setup-provider {
  gap: var(--msp-space-1);
  padding: var(--msp-space-1) 0;
  display: grid;

  & > .msp-assistant-ai-setup-keyForm {
    margin-bottom: var(--msp-space-2);
  }
}

.msp-assistant-ai-setup-providerHead {
  align-items: center;
  gap: var(--msp-space-2);
  min-height: 24px;
  padding-left: var(--msp-space-3);
  display: flex;
}

.msp-assistant-ai-setup-providerName {
  min-width: 0;
}

.msp-assistant-ai-setup-providerState {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  flex: 1;

  &[data-has] {
    color: var(--msp-color-text-muted);
  }
}

.msp-assistant-ai-setup-link {
  height: 22px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-assistant-ai-setup-fold {
  height: 24px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  justify-self: start;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &:before {
    content: "+ ";
  }

  &[aria-expanded="true"]:before {
    content: "− ";
  }
}

.msp-assistant-ai-setup-own {
  padding: var(--msp-space-2) var(--msp-space-2) var(--msp-space-2) 0;
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);

  & > .msp-assistant-ai-setup-keyForm {
    padding-left: var(--msp-space-2);
  }
}

.msp-assistant-ai-setup-ownFoot {
  padding: 0 var(--msp-space-2);
  justify-content: flex-end;
  display: flex;
}

.msp-assistant-ai-setup-modelRow {
  grid-template-columns: var(--msp-label-width, 96px) minmax(0, 1fr) auto;
}

.msp-assistant-ai-setup-refresh {
  border-radius: var(--msp-radius-md);
  width: 24px;
  height: 24px;
  color: var(--msp-color-text-muted);
  place-items: center;
  display: grid;

  &:hover:not(:disabled) {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[data-busy] > svg {
    animation: .9s linear infinite msp-assistant-ai-setup-refresh-spin;
  }
}

@keyframes msp-assistant-ai-setup-refresh-spin {
  to {
    rotate: 360deg;
  }
}

.msp-assistant-ai-setup-error {
  padding: 0 var(--msp-inset);
  color: var(--msp-color-danger);
  font-size: var(--msp-font-size-xs);
  margin: 0;
}
}
`)})))()}function kn(e){let{settings:t}=e,n=t.providers.pipe(u(e=>e.some(e=>e.key)),g()),r=t.providers.pipe(u(e=>e.filter(e=>e.key).flatMap(e=>e.models.map(t=>[`${e.id}|${t}`,`${e.label} · ${t}`])))),i=f(!1),o=f(Ln(t)?void 0:t.providers.value[0]?.id);return s(`section`,{class:N.setup,"aria-label":`AI assistant`,children:[a(h,{when:n.pipe(u(e=>!e)),children:()=>s(`div`,{class:N.intro,children:[a(`p`,{class:N.lead,children:`Add a model key to ask AI assistant`}),a(`p`,{class:N.copy,children:`It runs here with your own key for Claude, Gemini, GPT, or a server of your own; add as many as you like and pick the model. Everything else works without it.`})]})}),a(h,{when:n,children:()=>s(`div`,{class:`${N.row} ${N.modelRow}`,children:[a(`span`,{class:N.label,children:`Model`}),a(h,{when:r,children:e=>a(we,{over:!0,size:`sm`,class:N.grow,"aria-label":`Model`,options:e,value:t.setup.pipe(u(e=>e?`${e.provider}|${e.model}`:``)),onChange:e=>{let[n,r]=e.split(`|`);t.choose({provider:n,model:r})}})}),a(Nn,{settings:t})]})}),a(`p`,{class:N.caption,children:`Keys`}),a(`div`,{class:N.providers,children:a(m,{each:t.providers,children:e=>a(An,{settings:t,provider:e,editing:o})},e=>e.id)}),a(`button`,{type:`button`,class:N.fold,"aria-expanded":i.asReadonly,onClick:()=>i.set(!i.value),children:a(`span`,{children:`Your own endpoint`})}),a(h,{when:i.asReadonly,reveal:!0,children:()=>a(Pn,{settings:t,onDone:()=>i.set(!1)})}),a(`p`,{class:N.note,children:`Keys go only to their provider. Kept ones are stored scrambled, so reading the browser’s storage as it is gives no working key (it does not guard against code running in this page). The model applies from the next request.`})]})}function An(e){let{settings:t,provider:n}=e,r=t.providers.pipe(u(t=>t.find(t=>t.id===e.provider.id)),g()),i=e.editing.asReadonly.pipe(u(e=>e===n.id),g()),o=()=>e.editing.set(e.editing.value===n.id?void 0:n.id);return s(`div`,{class:N.provider,children:[s(`div`,{class:N.providerHead,children:[a(`span`,{class:N.providerName,children:e.provider.label}),a(`span`,{class:N.providerState,"data-has":r.pipe(u(e=>e.key?``:void 0)),children:r.pipe(u(e=>e.key?e.key.from===`server`?`key from the server`:In[e.key.scope]:`no key`))}),a(h,{when:r.pipe(u(e=>e.key?.from!==`server`)),children:()=>a(`button`,{type:`button`,class:N.link,onClick:o,children:_([r,i]).pipe(u(([e,t])=>t?`Cancel`:e.key?`Change`:`Add key`))})}),a(h,{when:r.pipe(u(e=>e.key?.from===`here`)),children:()=>a(`button`,{type:`button`,class:N.link,onClick:()=>t.removeKey(e.provider.id),children:`Remove`})})]}),a(h,{when:i,reveal:!0,children:()=>a(jn,{label:`${e.provider.label} API key`,onSave:(n,r)=>{t.setKey(e.provider.id,n,r),e.editing.set(void 0)}})})]})}function jn(e){let t=``,n=f(`browser`),r=()=>{(t.trim()||e.optional)&&e.onSave(t.trim(),n.value)};return s(`div`,{class:N.keyForm,children:[s(`div`,{class:N.keyRow,children:[a(Te,{size:`sm`,type:`password`,class:N.grow,"aria-label":e.label,placeholder:e.label,onInput:e=>{t=e},onSubmit:r}),a(`button`,{type:`button`,class:N.action,onClick:r,children:e.action??`Save`})]}),a(Mn,{scope:n})]})}function Mn(e){return s(`div`,{class:N.scopes,role:`radiogroup`,"aria-label":`Keep the key`,children:[a(`span`,{class:N.scopesLabel,children:`Keep`}),Fn.map(([t,n])=>a(`button`,{type:`button`,role:`radio`,class:N.scope,"aria-checked":e.scope.asReadonly.pipe(u(e=>e===t)),onClick:()=>e.scope.set(t),children:n}))]})}function Nn(e){let t=f(!1);return a(`button`,{type:`button`,class:N.refresh,"aria-label":`Ask the providers for their models`,"data-tip":`Ask the providers for their models`,disabled:t.asReadonly,"data-busy":t.asReadonly.pipe(u(e=>e?``:void 0)),onClick:async()=>{t.set(!0);try{await e.settings.refreshModels()}finally{t.set(!1)}},children:a(y,{name:`refresh-cw`,size:14})})}function Pn(e){let t={label:``,baseURL:``,key:``},n=f(`chat`),r=f(`browser`),i=f(``),o=f(`idle`),c=(e,n,r,i=`text`)=>s(`div`,{class:N.row,children:[a(`span`,{class:N.label,children:n}),a(Te,{size:`sm`,type:i,class:N.grow,"aria-label":n,placeholder:r,onInput:n=>{t[e]=n.trim()}})]});return s(`div`,{class:N.own,children:[c(`label`,`Name`,`e.g. Lab`),c(`baseURL`,`Endpoint`,`https://…/v1, or http://localhost:11434/v1`),s(`div`,{class:N.row,children:[a(`span`,{class:N.label,children:`API`}),a(we,{over:!0,size:`sm`,class:N.grow,"aria-label":`API`,options:[[`chat`,`OpenAI chat completions`],[`responses`,`OpenAI Responses`]],value:n.asReadonly,onChange:e=>n.set(e)})]}),c(`key`,`Key`,`Optional for a local server`,`password`),a(Mn,{scope:r}),s(`div`,{class:N.row,children:[a(`span`,{class:N.label,children:`Models`}),s(`div`,{class:N.keyRow,children:[a(Te,{size:`sm`,class:N.grow,"aria-label":`Models`,placeholder:`e.g. llama-4-scout, qwen3-coder`,value:i.asReadonly,onInput:e=>i.set(e)}),a(`button`,{type:`button`,class:N.link,disabled:o.asReadonly.pipe(u(e=>e===`busy`)),onClick:async()=>{o.set(`busy`);try{let n=await e.settings.listModels({baseURL:t.baseURL,key:t.key});i.set(n.join(`, `)),o.set(`idle`)}catch{o.set(`failed`)}},children:o.asReadonly.pipe(u(e=>e===`busy`?`Fetching…`:`Fetch`))})]})]}),a(h,{when:o.asReadonly.pipe(u(e=>e===`failed`)),children:()=>a(`p`,{class:N.error,children:`Could not list its models: check the endpoint, the key, and that it allows CORS.`})}),a(`p`,{class:N.note,children:`It must speak an OpenAI API, and allow this page to call it (CORS).`}),a(`div`,{class:N.ownFoot,children:a(`button`,{type:`button`,class:N.action,onClick:()=>{let a=i.value.split(/[,\s]+/).map(e=>e.trim()).filter(Boolean);t.label&&t.baseURL&&a.length&&(e.settings.addProvider({...t,scope:r.value,api:n.value,models:a}),e.onDone())},children:`Add`})})]})}var Fn,In,Ln;function Rn(){return(Rn=e((()=>{x(),ye(),p(),d(),On(),c(),Fn=[[`reload`,`Until reload`],[`session`,`This session`],[`browser`,`This browser`]],In={reload:`key until reload`,session:`key for this session`,browser:`key kept in this browser`},Ln=e=>e.providers.value.some(e=>e.key)})))()}var P;function zn(){return(zn=e((()=>{n(),P={caption:`msp-assistant-assistant-tab-caption`,content:`msp-assistant-assistant-tab-content`,detail:`msp-assistant-assistant-tab-detail`,hint:`msp-assistant-assistant-tab-hint`,inspect:`msp-assistant-assistant-tab-inspect`,link:`msp-assistant-assistant-tab-link`,tab:`msp-assistant-assistant-tab-tab`},t(`assistant/views/assistant-tab.module.css`,`@layer msp.components {
.msp-assistant-assistant-tab-tab {
  flex: 1 1 0;
  height: 100%;
  min-height: 0;
}

.msp-assistant-assistant-tab-content {
  align-content: start;
  gap: var(--msp-space-4);
  padding: 0 var(--msp-panel-inset) var(--msp-panel-inset);
  font-size: var(--msp-font-size-sm);
  display: grid;
}

.msp-assistant-assistant-tab-hint {
  padding: 0 var(--msp-inset);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
  line-height: 1.45;
}

.msp-assistant-assistant-tab-inspect {
  display: grid;
}

.msp-assistant-assistant-tab-caption {
  margin: var(--msp-space-1) 0 var(--msp-space-1);
  padding: 0 var(--msp-inset);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-weight: 500;
}

.msp-assistant-assistant-tab-link {
  align-items: center;
  gap: var(--msp-space-3);
  min-height: 28px;
  padding: var(--msp-space-1) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  text-align: left;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }
}

.msp-assistant-assistant-tab-detail {
  min-width: 0;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  flex: 1;
}
}
`)})))()}function Bn(e){let{inspect:t}=e;return s(b,{class:P.tab,contentClass:P.content,children:[a(kn,{settings:e.agent.settings}),t?s(`section`,{class:P.inspect,"aria-label":`Inspect`,children:[a(`p`,{class:P.caption,children:`Inspect`}),t.links.map(e=>s(`button`,{type:`button`,class:P.link,onClick:()=>t.open(e.id),children:[a(`span`,{children:e.label}),a(`span`,{class:P.detail,children:e.detail})]}))]}):null,s(`p`,{class:P.hint,children:[`Ask from the command menu (⌘K): type what you want, then `,a(`strong`,{children:`Ask AI assistant`}),`. Its work shows over the canvas and in History, and undoes in one step.`]})]})}function Vn(){return(Vn=e((()=>{x(),Rn(),zn(),c()})))()}var F;function Hn(){return(Hn=e((()=>{n(),F={answer:`msp-assistant-history-tab-answer`,checkpoint:`msp-assistant-history-tab-checkpoint`,checkpointMark:`msp-assistant-history-tab-checkpointMark`,checkpointText:`msp-assistant-history-tab-checkpointText`,chevron:`msp-assistant-history-tab-chevron`,empty:`msp-assistant-history-tab-empty`,fold:`msp-assistant-history-tab-fold`,item:`msp-assistant-history-tab-item`,list:`msp-assistant-history-tab-list`,listContent:`msp-assistant-history-tab-listContent`,prompt:`msp-assistant-history-tab-prompt`,runs:`msp-assistant-history-tab-runs`,spark:`msp-assistant-history-tab-spark`,switch:`msp-assistant-history-tab-switch`,switchButton:`msp-assistant-history-tab-switchButton`,tab:`msp-assistant-history-tab-tab`,turn:`msp-assistant-history-tab-turn`,turnHead:`msp-assistant-history-tab-turnHead`,undo:`msp-assistant-history-tab-undo`,when:`msp-assistant-history-tab-when`,who:`msp-assistant-history-tab-who`},t(`assistant/views/history-tab.module.css`,`@layer msp.components {
.msp-assistant-history-tab-tab {
  gap: var(--msp-space-2);
  height: 100%;
  min-height: 0;
  padding: 0 var(--msp-panel-inset) var(--msp-panel-inset);
  font-size: var(--msp-font-size-sm);
  flex-direction: column;
  flex: 1 1 0;
  display: flex;
}

.msp-assistant-history-tab-switch {
  gap: var(--msp-space-1);
  flex: none;
  display: flex;
}

.msp-assistant-history-tab-switchButton {
  height: 24px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);

  &:hover {
    background: var(--msp-color-hover);
  }

  &[aria-selected="true"] {
    background: var(--msp-color-control);
    color: var(--msp-color-text);
  }
}

.msp-assistant-history-tab-list {
  flex: 1 1 0;
}

.msp-assistant-history-tab-listContent {
  gap: var(--msp-space-1);
  display: grid;
}

.msp-assistant-history-tab-empty {
  padding: var(--msp-space-2) var(--msp-space-3);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
}

.msp-assistant-history-tab-item {
  align-items: start;
  column-gap: var(--msp-space-2);
  padding: 0 var(--msp-inset);
  grid-template-columns: minmax(0, 1fr) auto;
  display: grid;

  & > .msp-assistant-history-tab-when {
    padding-top: 6px;
  }
}

.msp-assistant-history-tab-when {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  white-space: nowrap;
}

.msp-assistant-history-tab-turn {
  gap: var(--msp-space-1);
  margin: var(--msp-space-1) 0;
  padding: var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  display: grid;

  &[data-undone] {
    opacity: .6;
  }
}

.msp-assistant-history-tab-turnHead {
  align-items: center;
  gap: var(--msp-space-2);
  display: flex;
}

.msp-assistant-history-tab-spark {
  color: var(--msp-color-accent);
  flex: none;
}

.msp-assistant-history-tab-who {
  min-width: 0;
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
  flex: 1;
}

.msp-assistant-history-tab-prompt {
  margin: 0;
  font-weight: 600;
}

.msp-assistant-history-tab-answer {
  color: var(--msp-color-text-muted);
  margin: 0;
  line-height: 1.45;
}

.msp-assistant-history-tab-fold {
  align-items: center;
  gap: var(--msp-space-1);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  justify-self: start;
  display: flex;

  &:hover {
    color: var(--msp-color-text);
  }
}

.msp-assistant-history-tab-chevron {
  transition: rotate var(--msp-motion-fast) var(--msp-ease);

  .msp-assistant-history-tab-fold[aria-expanded="true"] & {
    rotate: 180deg;
  }
}

.msp-assistant-history-tab-runs {
  display: grid;
}

.msp-assistant-history-tab-checkpoint {
  align-items: center;
  gap: var(--msp-space-2);
  min-height: 24px;
  margin-top: var(--msp-space-1);
  padding-top: var(--msp-space-1);
  box-shadow: inset 0 1px 0 var(--msp-glass-edge);
  display: flex;
}

.msp-assistant-history-tab-checkpointMark {
  color: var(--msp-color-text-subtle);
}

.msp-assistant-history-tab-checkpointText {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  flex: 1;
}

.msp-assistant-history-tab-undo {
  height: 22px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-accent-strong);
  font-size: var(--msp-font-size-xs);
  font-weight: 600;

  &:hover {
    background: var(--msp-color-hover);
  }
}
}
`)})))()}function Un(e){let t=Math.max(0,(Date.now()-e.getTime())/1e3);return t<45?`just now`:t<3600?`${Math.round(t/60)} min ago`:e.toLocaleTimeString(void 0,{hour:`2-digit`,minute:`2-digit`})}function Wn(e){let{agent:t}=e,n=f(`commands`),r=t.history.pipe(u(e=>e.map(Kn).reverse()),g((e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]))),i=e=>t.history.pipe(u(t=>t.find(t=>Kn(t)===e)),v(e=>!!e),g());return s(`div`,{class:F.tab,children:[a(`div`,{class:F.switch,role:`tablist`,"aria-label":`History`,children:[`commands`,`messages`].map(e=>a(`button`,{type:`button`,role:`tab`,class:F.switchButton,"aria-selected":n.asReadonly.pipe(u(t=>t===e)),onClick:()=>n.set(e),children:e===`commands`?`Commands`:`Messages`}))}),a(h,{when:n.asReadonly.pipe(u(e=>e===`commands`)),fallback:()=>a(de,{status:e.status}),children:()=>a(b,{class:F.list,contentClass:F.listContent,role:`log`,"aria-label":`Commands`,children:a(m,{each:r,fallback:()=>a(`p`,{class:F.empty,children:`Nothing run yet. Commands and the assistant’s work show here.`}),children:e=>{let n=t.history.value.find(t=>Kn(t)===e);return n.kind===`run`?s(`div`,{class:F.item,children:[a(vn,{run:i(e).pipe(u(e=>e.run))}),a(`span`,{class:F.when,children:Un(n.run.time)})]}):a(Gn,{agent:t,turn:i(e).pipe(u(e=>e.turn)),id:e,time:n.turn.time})}})})})]})}function Gn(e){let{agent:t,turn:n,id:r}=e,i=f(!1),o=n.pipe(u(_n),g()),c=n.pipe(u(e=>!!e.undone),g());return s(`section`,{class:F.turn,"data-undone":c.pipe(u(e=>e?``:void 0)),"aria-label":`Assistant turn`,children:[s(`div`,{class:F.turnHead,children:[a(y,{name:`sparkles`,size:14,class:F.spark}),a(`span`,{class:F.who,children:n.pipe(u(e=>e.source.kind===`agent`?e.source.name:`Assistant`))}),a(`span`,{class:F.when,children:Un(e.time)})]}),s(`p`,{class:F.prompt,children:[`“`,n.pipe(u(e=>e.prompt)),`”`]}),a(h,{when:n.pipe(u(e=>_n(e)?``:e.text)),children:e=>a(`p`,{class:F.answer,children:e})}),s(`button`,{type:`button`,class:F.fold,"aria-expanded":i.asReadonly,onClick:()=>i.set(!i.value),children:[a(`span`,{children:n.pipe(u(gn))}),a(y,{name:`chevron-down`,size:14,class:F.chevron})]}),a(h,{when:_([i.asReadonly,o]).pipe(u(([e,t])=>e||t)),reveal:!0,children:()=>a(yn,{turn:n,class:F.runs})}),a(h,{when:n.pipe(u(e=>!_n(e))),children:()=>s(`div`,{class:F.checkpoint,children:[a(y,{name:`undo-2`,size:12,class:F.checkpointMark}),a(`span`,{class:F.checkpointText,children:n.pipe(u(e=>e.undone?`Undone: back to how it was before`:e.checkpoint?`Checkpoint before it`:e.runs.some(e=>!e.read)?`No longer undoable: something came after it`:`Nothing to undo`))}),a(h,{when:n.pipe(u(e=>e.checkpoint&&!e.undone)),children:()=>a(bn,{agent:t,id:r})})]})})]})}var Kn;function qn(){return(qn=e((()=>{x(),ye(),p(),be(),d(),Dn(),Hn(),c(),Kn=e=>e.kind===`run`?e.run.id:e.turn.id})))()}function Jn(e){let t=e.toLowerCase();if(/superpose|align|load|download|fetch/.test(t))return{thinking:`I will fetch 1W0E and superpose it on 1TQN by their A chains.`,retries:1,steps:[{command:`scene.get`,title:`Read the scene`,ms:300,read:!0,detail:`1 structure: 1TQN`},{command:`data.download-structure`,title:`Download 1W0E from PDBe`,ms:1600,progress:!0,approval:`Fetches data from www.ebi.ac.uk`,detail:`1W0E: 1 model, 3,898 atoms`},{command:`superpose.chains`,title:`Superpose 1W0E on 1TQN (chain A)`,ms:900,detail:`RMSD 0.38 Å over 412 Cα`},{command:`camera.reset`,title:`Reset the camera`,ms:300}],answer:`Loaded 1W0E and superposed it on 1TQN by chain A (RMSD 0.38 Å over 412 Cα atoms).`};let n=/\b(red|blue|green|yellow|orange|purple|white|black|gr[ae]y)\b/.exec(t)?.[1];return/\b(colou?r|paint)\b/.test(t)&&n?{thinking:`Coloring every representation of every structure ${n}, uniformly.`,steps:[{command:`scene.get`,title:`Read the scene`,ms:300,read:!0,detail:`1TQN: 4 representations`},{command:`structure.set-color`,title:`Color all representations ${n} (uniform)`,ms:1200,progress:!0,detail:`4 representations in 1TQN`}],answer:`Colored all 4 representations of 1TQN ${n}. Undo turn brings the colors back.`}:/fail|broken|error/.test(t)?{thinking:`Trying to color by the custom property.`,steps:[{command:`scene.get`,title:`Read the scene`,ms:300,read:!0},{command:`structure.set-color`,title:`Color by B-factor (custom range)`,ms:600,fail:`No B-factor values in the selection`}],answer:`The selection has no B-factor values, so I could not color by them. Try a different theme?`}:{thinking:`Looking at the heme pocket: I will select the residues around HEM 508 and give them a component.`,steps:[{command:`scene.get`,title:`Read the scene`,ms:300,read:!0,detail:`1TQN: polymer, ligand, water`},{command:`select.residues`,title:`Select residues within 5 Å of HEM 508`,ms:500,detail:`23 residues in chain A`},{command:`structure.component.add`,title:`Add component “Active site” from the selection`,ms:700},{command:`structure.add-representation`,title:`Show “Active site” as ball & stick`,ms:900,progress:!0},{command:`camera.focus`,title:`Focus the view on “Active site”`,ms:400}],answer:`Made an “Active site” component (23 residues around HEM 508), shown as ball & stick, and focused the view on it.`}}function Yn(e,t){let n=/\b(red|blue|green|yellow|orange|purple|white|black|gr[ae]y)\b/;return{ready:()=>!!e.settings.setup.value,propose(e){let t=e.toLowerCase(),r=n.exec(t);if(/\b(colou?r|paint|make)\b/.test(t)&&r&&!/\b(and|everything|all|each|every)\b/.test(t))return{command:`selection.color`,tail:r[1]};let i=/\b(?:fetch|download|load|open)\s+(?:pdb\s+)?([0-9][a-z0-9]{3})\b/.exec(t);if(i&&!/\b(and|superpose|align)\b/.test(t))return{command:`data.download-structure`,tail:i[1]};let a=/^(?:focus|zoom)(?: in)?(?: on)?\s+(.+)$/.exec(t);if(a)return{command:`focus.target`,tail:a[1]}},ask:t=>e.ask(t),setup:t}}var I,Xn,Zn,Qn,L,$n;function er(){return(er=e((()=>{x(),I={kind:`agent`,name:`Mol* assistant`},Xn={kind:`person`},Zn=[{id:`anthropic`,label:`Anthropic`,family:`anthropic`,models:[`claude-sonnet-5-5`,`claude-opus-5-5`,`claude-haiku-5-5`]},{id:`google`,label:`Gemini`,family:`google`,models:[`gemini-3.8-flash`,`gemini-3.8-pro`]},{id:`openai`,label:`OpenAI`,family:`openai`,models:[`gpt-6-luna`,`gpt-6-luna-mini`]}],Qn=class{#e;#t;constructor(e,t){this.post=e,this.#e=f(Zn),this.#t=f(void 0),this.providers=this.#e.asReadonly,this.setup=this.#t.asReadonly,t&&(this.#n(`anthropic`,{key:{from:`here`,scope:`browser`}}),this.#t.set({provider:`anthropic`,model:`claude-sonnet-5-5`}))}setKey(e,t,n){if(!t.trim())return;this.#n(e,{key:{from:`here`,scope:n}});let r=this.#e.value.find(t=>t.id===e);this.#t.value||this.#t.set({provider:e,model:r.models[0]});let i={reload:`until the page reloads`,session:`for this session`,browser:`in this browser`}[n];this.post(`Key saved for ${r.label}, kept ${i}`,`success`)}removeKey(e){if(this.#n(e,{key:void 0}),this.#t.value?.provider===e){let e=this.#e.value.find(e=>e.key);this.#t.set(e?{provider:e.id,model:e.models[0]}:void 0)}}choose(e){this.#t.set(e)}async refreshModels(e){await new Promise(e=>setTimeout(e,700));let t={anthropic:[`claude-fable-5-1`],google:[`gemini-3.8-flash-lite`],openai:[`gpt-6-luna-nano`]};this.#e.set(this.#e.value.map(n=>n.key&&(!e||n.id===e)&&t[n.id]?{...n,models:[...new Set([...n.models,...t[n.id]])]}:n)),this.post(`Model lists updated from the providers`,`success`)}async listModels(e){if(await new Promise(e=>setTimeout(e,700)),!/^https?:\/\//.test(e.baseURL))throw Error(`Not a URL`);return[`llama-4-scout`,`qwen3-coder-next`,`mistral-large-3`]}addProvider(e){let t=`custom:${e.label.toLowerCase().replace(/[^a-z0-9]+/g,`-`)}`;this.#e.set([...this.#e.value,{id:t,label:e.label,family:`openai`,baseURL:e.baseURL,key:e.key?{from:`here`,scope:e.scope}:void 0,models:e.models}]),this.#t.set({provider:t,model:e.models[0]}),this.post(`Added ${e.label}`,`success`)}#n(e,t){this.#e.set(this.#e.value.map(n=>n.id===e?{...n,...t}:n))}},L=(e,t)=>new Promise((n,r)=>{let i=setTimeout(n,e);t.addEventListener(`abort`,()=>{clearTimeout(i),r(Error(`stopped`))})}),$n=class{#e;#t;#n;#r;#i;#a;constructor(e,t={}){this.post=e,this.#e=f(void 0),this.#t=f(`none`),this.#n=f([]),this.#r=0,this.turn=this.#e.asReadonly,this.view=this.#t.asReadonly,this.history=this.#n.asReadonly,this.settings=new Qn(e,t.configured),t.history&&this.#d()}record(e,t,n){this.#o();let r={id:`run-${++this.#r}`,command:t,title:e,source:Xn,status:`done`,detail:n,time:new Date};this.#n.set([...this.#n.value,{kind:`run`,run:r}])}ask(e){this.#i&&this.stop(),this.#o();let t=Jn(e),n={id:`turn-${++this.#r}`,prompt:e,source:I,status:`thinking`,text:``,runs:[],checkpoint:!1,time:new Date};this.#s(n),this.#u(n.id,t)}stop(){this.#i?.abort()}approve(e,t){this.#e.value?.runs.some(t=>t.id===e&&t.status===`waiting`)&&this.#a?.(t)}undo(e){let t=this.#n.value.find(t=>t.kind===`turn`&&t.turn.id===e);t&&t.kind===`turn`&&t.turn.checkpoint&&!t.turn.undone&&(this.#c(e,e=>({...e,undone:!0,checkpoint:!1})),this.post(`Undid “${t.turn.prompt}”`,`success`))}#o(){if(!this.#n.value.some(e=>e.kind===`turn`&&e.turn.checkpoint))return;this.#n.set(this.#n.value.map(e=>e.kind===`turn`&&e.turn.checkpoint?{kind:`turn`,turn:{...e.turn,checkpoint:!1}}:e));let e=this.#e.value;e?.checkpoint&&this.#e.set({...e,checkpoint:!1})}dismiss(){this.#t.value===`card`&&this.#t.set(`line`)}hide(){this.#t.set(`none`)}reopen(){this.#e.value&&this.#t.set(`card`)}#s(e){this.#e.set(e),this.#t.set(`card`),this.#n.set([...this.#n.value,{kind:`turn`,turn:e}])}#c(e,t){let n;this.#n.set(this.#n.value.map(r=>r.kind!==`turn`||r.turn.id!==e?r:(n=t(r.turn),{kind:`turn`,turn:n}))),n&&this.#e.value?.id===e&&this.#e.set(n)}#l(e,t,n){this.#c(e,e=>({...e,runs:e.runs.map(e=>e.id===t?{...e,...n}:e)}))}async#u(e,t){let n=new AbortController;this.#i=n;let r=Date.now(),i={input:2400,output:0};try{for(let r of t.thinking.split(` `))await L(45,n.signal),i={input:i.input,output:i.output+2},this.#c(e,e=>({...e,text:e.text?`${e.text} ${r}`:r,usage:i}));t.retries&&(await L(400,n.signal),this.#c(e,e=>({...e,retries:t.retries}))),this.#c(e,e=>({...e,status:`working`}));for(let a of t.steps){let t={id:`run-${++this.#r}`,command:a.command,title:a.title,source:I,status:`running`,read:a.read,approval:!!a.approval,time:new Date};if(this.#c(e,e=>({...e,checkpoint:e.checkpoint||!a.read,runs:[...e.runs,t]})),a.approval){this.#l(e,t.id,{status:`waiting`,detail:a.approval}),this.#c(e,e=>({...e,status:`waiting`}));let i=await new Promise((e,t)=>{this.#a=e,n.signal.addEventListener(`abort`,()=>t(Error(`stopped`)))});if(this.#a=void 0,!i){this.#l(e,t.id,{status:`denied`,detail:`Not allowed`}),this.#c(e,e=>({...e,status:`done`,text:`You did not allow the download, so I stopped there.`,durationMs:Date.now()-r})),this.#i=void 0;return}this.#l(e,t.id,{status:`running`,detail:void 0}),this.#c(e,e=>({...e,status:`working`}))}let o=Date.now();if(a.progress)for(let r=1;r<=10;r++)await L(a.ms/10,n.signal),this.#l(e,t.id,{progress:r/10});else await L(a.ms,n.signal);let s=a.fail?`failed`:`done`;if(this.#l(e,t.id,{status:s,detail:a.fail??a.detail,progress:void 0,durationMs:Date.now()-o}),i={input:i.input+900,output:i.output+60},this.#c(e,e=>({...e,usage:i})),a.fail)break}await L(200,n.signal),this.#c(e,e=>({...e,status:t.steps.some(e=>e.fail)?`failed`:`done`,text:t.answer,durationMs:Date.now()-r}))}catch{this.#c(e,e=>({...e,status:`stopped`,runs:e.runs.map(e=>e.status===`running`||e.status===`waiting`?{...e,status:`stopped`}:e),durationMs:Date.now()-r}))}finally{this.#i===n&&(this.#i=void 0)}}#d(){let e=e=>new Date(Date.now()-e*6e4),t=(t,n,r,i={})=>({id:`run-${++this.#r}`,command:n,title:t,source:Xn,status:`done`,time:e(r),...i}),n={id:`turn-${++this.#r}`,prompt:`show the active site around the heme`,source:I,status:`done`,text:`Made an “Active site” component (23 residues around HEM 508), shown as ball & stick, and focused the view on it.`,runs:[{...t(`Read the scene`,`scene.get`,6),source:I,read:!0,durationMs:120},{...t(`Select residues within 5 Å of HEM 508`,`select.residues`,6),source:I,detail:`23 residues`},{...t(`Add component “Active site” from the selection`,`structure.component.add`,6),source:I},{...t(`Show “Active site” as ball & stick`,`structure.add-representation`,6),source:I},{...t(`Focus the view on “Active site”`,`camera.focus`,6),source:I}],checkpoint:!1,usage:{input:6100,output:240},time:e(6),durationMs:4200};this.#n.set([{kind:`run`,run:t(`Download 1TQN from PDBe`,`data.download-structure`,9,{detail:`1 model`})},{kind:`run`,run:t(`Apply preset: Polymer & ligand`,`preset.polymer-and-ligand`,8)},{kind:`turn`,turn:n},{kind:`run`,run:t(`Color the selection red`,`selection.color`,3)},{kind:`run`,run:t(`Take snapshot “Overview”`,`snapshot.add`,1)}])}}})))()}function tr(){let e=0;return{model:(t,n,r,i)=>{e+=1;let a=r.tokens&&{input:r.tokens[0],output:r.tokens[1],...r.cached!==!1&&r.tokens[0]>3200?{cached:Math.round(r.tokens[0]*.82)}:{}};return{kind:`model`,id:`s${e}`,callId:`call-${e}`,model:r.model??lr,attempts:i??[{ordinal:1,start:t,...r.firstOutput?{firstOutput:r.firstOutput}:{},...n===void 0?{}:{end:n},status:n===void 0?`running`:`succeeded`}],...a?{tokens:{...a,credits:nr(a)}}:{},...r.reply?{reply:r.reply,finish:`complete`}:{},...r.toolCalls?{toolCalls:r.toolCalls,finish:`tool-calls`}:{},...r.under?{under:r.under}:{}}},tool:(t,n,r,i,a,o={})=>{e+=1;let s=n===void 0?`running`:o.failed?`failed`:`succeeded`;return{kind:`tool`,id:`s${e}`,callId:`call-${e}`,toolId:r,name:r,...o.title?{title:o.title}:{},...o.read?{read:!0}:{},args:i,status:s,...a===void 0?{}:{result:a},attempts:[{ordinal:1,start:t,...n===void 0?{}:{end:n},status:s,...o.failed&&a?{failure:a.split(`
`)[0]}:{}}],...o.changed?{changed:o.changed.map(([e,t])=>({id:e,label:t}))}:{}}}}}function nr(e){let t=e.cached??0;return((e.input-t)*1+t*.1+e.output*5)/1e3}function R(e,t,n,r={}){return{id:e,name:e,description:t,input:n,read:r.read??!1,approval:r.approval??!1,enabled:r.enabled??!0,state:r.state??`offered`,tokens:z(JSON.stringify({name:e,description:t,input:n})),...r.loadedAtTurn===void 0?{}:{loadedAtTurn:r.loadedAtTurn},...r.extra?{extra:!0}:{},...r.unavailable?{unavailable:r.unavailable}:{}}}function rr(e){let{model:t,tool:n}=tr(),r=[t(0,1650,{toolCalls:[`structure.load(source="pdb", id="1tqn")`],tokens:[3120,24],firstOutput:1300}),n(1660,2900,`structure.load`,{source:`pdb`,id:`1tqn`},`Loaded 1TQN: Cytochrome P450 3A4 with heme and metyrapone. 1 model, chain A (residues 27-499); ligand HEM 508.
Added: 1tqn, 1tqn.polymer, 1tqn.ligand.`,{title:`Load 1TQN from PDBe`,changed:[[`1tqn`,`1TQN`]]}),t(2910,4700,{toolCalls:[`selection.set(target={"ligand":"HEM"})`,`representation.set(target="selection", type="ball-and-stick")`],tokens:[3390,86],firstOutput:4100}),n(4710,4760,`selection.set`,{target:{ligand:`HEM`}},`Selected HEM 508 (A): 43 atoms.`,{title:`Select HEM 508`}),n(4761,5200,`representation.set`,{target:`selection`,type:`ball-and-stick`},`Ball-and-stick on HEM 508 (A).
Changed: 1tqn.ligand.`,{title:`Show HEM 508 as ball-and-stick`,changed:[[`1tqn.ligand`,`HEM 508`]]}),t(5210,6500,{toolCalls:[`camera.focus(target="selection")`],tokens:[3610,31],firstOutput:6e3}),n(6510,7300,`camera.focus`,{target:`selection`},`The camera is on HEM 508 (radius 9.2 Å).`,{title:`Focus the camera on HEM 508`}),t(7310,8400,{reply:`Loaded 1TQN and showed its heme (HEM 508) as ball-and-stick, with the camera on it.`,tokens:[3700,28],firstOutput:7900})],i=[t(6e4,63100,{toolCalls:[`disclose_skills(skills=["selections"])`],tokens:[3980,18]},[{ordinal:1,start:6e4,end:60380,status:`failed`,failure:`429 Too many requests: the rate limit for claude-sonnet-4-5`},{ordinal:2,start:61880,firstOutput:62600,end:63100,status:`succeeded`,waitBefore:{reason:`rate limited`,ms:1500}}]),n(63110,63130,`disclose_skills`,{skills:[`selections`]},`Loaded skill selections: its guidance and 2 tools (query_reference, bounds.get).`,{title:`Load the selections skill`}),{...t(63140,65600,{toolCalls:[`query_reference(symbols=["within"])`],tokens:[5240,22],firstOutput:64900,cached:!1}),prefixBreak:{reason:`the tool definitions changed (the selections skill loaded)`,kept:1,of:9}},n(65610,65640,`query_reference`,{symbols:[`within`]},`within D of S: atoms within D Å of selection S (D a number; S any selection). Example: within 5 of resname HEM.
See also: around, beyond, byres.`,{title:`Look up “within”`,read:!0}),t(65650,67700,{toolCalls:[`selection.set(expression="byres (within 5 of resn HEM) and polymer")`],tokens:[5520,44],firstOutput:67100}),n(67710,67760,`selection.set`,{expression:`byres (within 5 of resn HEM) and polymer`},`Could not read the expression: unknown keyword "resn" at 17.
Did you mean resname? Keywords: resname, resi, chain, name, elem.`,{title:`Select the residues near HEM`,failed:!0}),t(67770,69500,{toolCalls:[`selection.set(expression="byres (within 5 of resname HEM) and polymer")`,`representation.set(target="selection", type="ball-and-stick", color="by residue type")`],tokens:[5700,61],firstOutput:68900}),n(69510,69600,`selection.set`,{expression:`byres (within 5 of resname HEM) and polymer`},`Selected 24 residues in chain A: PHE 57, ARG 105, ILE 118, ALA 297, THR 309, CYS 442 and 18 more.`,{title:`Select the residues near HEM`})],a=n(69601,71900,`representation.set`,{target:`selection`,type:`ball-and-stick`,color:`by residue type`},`Colored 24 residues by residue name (theme residue-name), as ball-and-stick.
Changed: 1tqn.site.`,{title:`Color the selection by residue type`,changed:[[`1tqn.site`,`24 residues`]]});i.push(a,t(69700,71500,{reply:`{ "theme": "residue-name" }`,tokens:[640,12],firstOutput:71300,under:a.callId,model:ur}),t(71910,73300,{reply:`Selected the 24 residues within 5 Å of the heme and colored them by residue type.`,tokens:[5980,34],firstOutput:72800}));let o=[t(12e4,121900,{toolCalls:[`scene.get()`],tokens:[6200,9],firstOutput:121700}),n(121910,121950,`scene.get`,{},Sr,{title:`Read the scene`,read:!0}),...e?[t(121960,void 0,{})]:[t(121960,123800,{toolCalls:[`representation.set(target="1tqn.site", type="ball-and-stick", transparency=0)`,`camera.focus(target="1tqn.site", radius=4)`],tokens:[6950,70],firstOutput:123100}),n(123810,124300,`representation.set`,{target:`1tqn.site`,type:`ball-and-stick`,transparency:0},`Ball-and-stick on 1tqn.site (24 residues).
Changed: 1tqn.site.`,{title:`Show the site as ball-and-stick`,changed:[[`1tqn.site`,`24 residues`]]}),n(124310,125100,`camera.focus`,{target:`1tqn.site`,radius:4},`The camera is on 1tqn.site.`,{title:`Focus the camera on the site`}),t(125110,126400,{reply:`The active site: the heme with the 24 residues around it, the camera on them.`,tokens:[7180,26],firstOutput:126e3})]];return[ir(`turn-1`,`Load 1TQN and show the heme as ball-and-stick`,void 0,r),ir(`turn-2`,`Select the residues within 5 Å of the heme and color them by residue type`,`selection: HEM 508 (A), 43 atoms`,i),ir(`turn-3`,`Show the active site around the heme and focus on it`,`selection: 24 residues (A)`,o,e?`thinking`:`done`)]}function ir(e,t,n,r,i=`done`){let a=r.filter(e=>e.kind===`model`),o=r[0]?.attempts[0]?.start??0,s=r.at(-1)?.attempts.at(-1)?.end,c=e=>a.reduce((t,n)=>t+(n.tokens?e(n.tokens):0),0),l=i===`done`||i===`stopped`||i===`failed`;return{id:e,prompt:t,...n?{focus:n}:{},status:i,start:o,...l&&s!==void 0?{end:s}:{},tokens:{input:c(e=>e.input),output:c(e=>e.output),cached:c(e=>e.cached??0),credits:c(e=>e.credits??0)},steps:r,milestones:[{position:0,at:o,kind:`start`,detail:`request appended`},...r.filter(e=>e.under===void 0).flatMap((e,t)=>{let n=e.attempts.at(-1)?.end;return n===void 0?[]:[{position:t+1,at:n,kind:`${e.kind===`model`?`model`:`tools`} completed`}]}),...l&&s!==void 0?[{position:r.length+1,at:s,kind:`end`,detail:i}]:[]]}}function ar(e){let t=[],n=0,r=!1,i=[yr,br,xr],a=()=>{let e=r?[...U,...fr]:U;return[{role:`system`,part:`guidance`,title:`Guidance`,text:B,tokens:z(B)*4},...r?[{role:`system`,part:`guidance`,title:`Skill: selections`,text:V,tokens:z(V)}]:[],{role:`tools`,part:`tools`,title:`${e.length} tool definitions`,text:vr(e),tokens:e.reduce((e,t)=>e+t.tokens,0)}]};return e.map((e,o)=>{let s=i[o]??``;t.push({role:`user`,part:`state`,title:`State`,text:s,tokens:z(s)*3});let c=`${e.focus?`Focus: ${e.focus}\n\n`:``}Request: ${e.prompt}`;t.push({role:`user`,part:`conversation`,title:`Request`,text:c,tokens:z(c)});let l=e.steps.map(e=>{if(e.kind===`model`){if(e.under!==void 0){let t=`Which Mol* color theme do these words mean? "by residue type". Answer as JSON: { "theme": id }.`;return{...e,window:{entries:[{role:`user`,part:`conversation`,title:`Request`,text:t,tokens:z(t),fresh:!0}],limit:2e5}}}let r=[...a(),...t.map((e,t)=>t>=n?{...e,fresh:!0}:e)];n=t.length;let i=e.reply??(e.toolCalls??[]).join(`
`);return e.attempts.at(-1)?.end!==void 0&&t.push({role:`assistant`,part:`conversation`,title:e.reply?`Reply`:`Tool calls`,text:i,tokens:e.tokens?.output??z(i)}),{...e,window:{entries:r,limit:2e5}}}return e.status!==`running`&&t.push({role:`tool`,part:`conversation`,title:`${e.name} result`,text:e.result??``,tokens:z(e.result??``),...e.status===`failed`?{failed:!0}:{}}),e.name===`disclose_skills`&&(r=!0),e});return{...e,steps:l}})}function or(e={}){let t=!!e.running,n=ar(rr(t)),r=n.at(-1),i=r.tokens.input-(r.tokens.cached??0);return{harnessId:`h-viewer-7c1e2a`,execution:{seq:t?118:131,headId:t?`5dcdfe502d9e7e2f003fd34f12345509`:`a41f0c9e8b27d6e35f1c0a9b8e7d6c5b`,runner:t?`live`:`none`,...t?{lease:{worker:`tab-1`,renewsInMs:6200,leaseMs:1e4},pendingStep:`model`}:{}},budget:{consumed:i,ceiling:4e5,kind:`uncachedInput`,dimension:`uncached input`,scope:`latest turn`,...r.tokens.credits===void 0?{}:{credits:r.tokens.credits}},preamble:{guidance:B,guidanceTokens:z(B)*4,tools:_r(U),toolsTokens:U.reduce((e,t)=>e+t.tokens,0)},turns:n,loaded:[...U.map(e=>({id:e.id,name:e.name})),...fr.map(e=>({id:e.id,name:e.name,turn:2}))],declared:hr.map(e=>e.id)}}function sr(e){let t=e?.turns.at(-1),n=t?.steps??[],r=t?.tokens,i=e?.turns.reduce((e,t)=>e+(t.tokens.credits??0),0),a=e=>Math.round((e??0)*100)/100;return{groups:[{id:`budget`,title:`Turn budget`,note:`What one turn may use: it stops when one runs out. The bars are the latest turn; each limit goes up to its ceiling, from the next turn.`,rows:[{key:`modelCalls`,label:`Model calls`,note:`requests to the model in one turn`,unit:`calls`,value:24,default:24,used:n.filter(e=>e.kind===`model`).length,ceiling:100,editable:!0},{key:`toolCalls`,label:`Tool calls`,note:`commands the agent runs in one turn`,unit:`calls`,value:64,default:64,used:n.filter(e=>e.kind===`tool`).length,ceiling:256,editable:!0},{key:`uncachedInput`,label:`Uncached input`,note:`tokens the provider reads anew`,unit:`tokens`,value:4e5,default:4e5,used:r?r.input-(r.cached??0):0,ceiling:32e5,step:1e3,editable:!0},{key:`cacheRead`,label:`Cache reads`,note:`input served from the provider’s cache`,unit:`tokens`,value:4e6,default:4e6,used:r?.cached??0,ceiling:16e6,step:1e3,editable:!0},{key:`output`,label:`Output`,note:`what the model writes, reasoning included`,unit:`tokens`,value:32e3,default:32e3,used:r?.output??0,ceiling:128e3,step:1e3,editable:!0}]},{id:`model`,title:`Model`,note:`For ${lr}; applies from the next request.`,rows:[{key:`contextWindow`,label:`Context window`,note:`the most the model reads at once`,unit:`tokens`,value:2e5,default:2e5,ceiling:1e6,step:1e3,editable:!0},{key:`compaction`,label:`Compaction trigger`,note:`older turns are summarized past this share of the window`,unit:`%`,value:80,default:80,ceiling:95,editable:!0},{key:`thinking`,label:`Thinking`,note:`how long it may reason before it answers`,unit:``,value:1,default:1,choices:[{value:0,label:`Off`},{value:1,label:`Low`},{value:2,label:`Medium`},{value:3,label:`High`}],editable:!0}]},{id:`credits`,title:`Credits`,note:`What the agent costs, in the app’s credits (1 credit is 1,000 uncached input tokens on the default model). Shown, never a limit.`,rows:[{key:`credits.turn`,label:`Latest turn`,unit:`credits`,value:a(r?.credits),default:a(r?.credits),editable:!1},{key:`credits.session`,label:`This session`,unit:`credits`,value:a(i),default:a(i),editable:!1}]}]}}function cr(e={}){let t=e.empty?void 0:or(e),n=f(sr(t));return new Ye({trace:f(t).asReadonly,tools:f(gr).asReadonly,limits:n.asReadonly,setLimit:(e,t)=>n.set({groups:n.value.groups.map(n=>({...n,rows:n.rows.map(n=>n.key===e?{...n,value:t??n.default}:n)}))})})}var z,lr,ur,B,V,dr,H,U,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr;function Cr(){return(Cr=e((()=>{x(),Xe(),z=e=>Math.max(1,Math.round(e.length/4)),lr=`claude-sonnet-4-5`,ur=`claude-haiku-4-5`,B=`You work in Mol*, a molecular viewer, for the person at the screen. You act only through tools: the viewer's commands.

Each request starts with the state (what is loaded, selected and shown) and the focus (what the person points at).
Rules:
1. Refer to structures and components by the ids the state lists. Never invent ids.
2. Read before you change: scene.get when the state is not enough.
3. Make changes with tools; do not just describe them. Several small calls are fine.
4. "this", "here", "the selection" mean the focus.
5. Load a skill (disclose_skills) before you use its tools.
…`,V=`Skill selections: atoms, residues and chains by distance, neighborhood and logic.

1. selection.set takes an expression in PyMOL's syntax ("within 5 of resname HEM and polymer") or MolQL.
2. query_reference explains a keyword or symbol: its arguments, types and defaults.
3. bounds.get measures what a selection spans, before you frame it.`,dr=`Skill volumes: density maps drawn with the structure.

1. volume.load brings a map in: an EMDB entry, a PDB entry's X-ray density, or a file.
2. volume.set_look draws it: an isosurface at a level (relative or absolute), or a slice.`,H={description:`What it acts on: "selection", a structure id ("1tqn"), or a component id ("1tqn.ligand").`,anyOf:[{type:`string`},{type:`object`,properties:{ligand:{type:`string`}}}]},U=[R(`scene.get`,`The scene in detail: every structure with its components, representations and colors, the selection, the camera. Read-only.`,{type:`object`,properties:{structure:{type:`string`,description:`Only this structure (its id).`}}},{read:!0,state:`loaded`}),R(`structure.load`,`Load a structure: a PDB or AlphaFold DB entry by id, or a URL. Asks first: it fetches from a server.`,{type:`object`,properties:{source:{type:`string`,enum:[`pdb`,`afdb`,`url`],description:`Where it comes from.`},id:{type:`string`,description:`The entry id ("1tqn", "P69905"), or the URL.`},assembly:{type:`string`,description:`An assembly id; the first by default.`}},required:[`id`]},{approval:!0,state:`loaded`}),R(`selection.set`,`Set the selection: a component, a ligand, residues, or an expression. Replaces what is selected unless mode says otherwise.`,{type:`object`,properties:{target:H,expression:{type:`string`,description:`An expression, in PyMOL syntax or MolQL (with the selections skill).`},mode:{type:`string`,enum:[`set`,`add`,`remove`],description:`How it combines with the selection.`}}},{state:`loaded`}),R(`representation.set`,`Show a target as a representation, or restyle what is shown of it: its type, color and transparency.`,{type:`object`,properties:{target:H,type:{type:`string`,enum:[`cartoon`,`ball-and-stick`,`spacefill`,`surface`,`putty`],description:`The representation.`},color:{type:`string`,description:`A color ("red", "#d2491f") or a theme in words ("by residue type").`},transparency:{type:`number`,description:`0 (opaque) to 1.`}},required:[`target`]},{state:`loaded`}),R(`camera.focus`,`Turn the camera to a target and frame it, optionally with its surroundings.`,{type:`object`,properties:{target:H,radius:{type:`number`,description:`Extra room around it, in Å.`}},required:[`target`]},{state:`loaded`}),R(`disclose_skills`,`Load skills: their guidance and their tools, all a request needs in one call. Skills: "selections" (by distance and logic), "volumes" (density maps).`,{type:`object`,properties:{skills:{type:`array`,items:{type:`string`,enum:[`selections`,`volumes`]},description:`Skill names.`}},required:[`skills`]},{state:`loaded`})],fr=[R(`query_reference`,`Selection keywords and MolQL symbols in detail: arguments, types, defaults, an example. Read-only.`,{type:`object`,properties:{symbols:{type:`array`,items:{type:`string`},description:`Keywords or symbols.`}},required:[`symbols`]},{read:!0,state:`loaded`,loadedAtTurn:2}),R(`bounds.get`,`What a selection spans: its center, radius and bounding box, in Å. Read-only.`,{type:`object`,properties:{target:H}},{read:!0,state:`loaded`,loadedAtTurn:2})],pr=[R(`volume.load`,`Load a density map: an EMDB entry, the X-ray density of a PDB entry, or a URL. Asks first: it fetches from a server.`,{type:`object`,properties:{emdb:{type:`string`,description:`An EMDB id ("EMD-1181").`},pdb_density:{type:`string`,description:`A PDB id whose X-ray density to load.`},url:{type:`string`,description:`A map file (CCP4, MRC, DSN6).`}}},{approval:!0}),R(`volume.set_look`,`Draw a map: an isosurface at a level, or a slice; its color and transparency.`,{type:`object`,properties:{volume:{type:`string`,description:`The map's id.`},kind:{type:`string`,enum:[`isosurface`,`slice`]},level:{type:`number`,description:`The isovalue, relative (σ) unless absolute is set.`},absolute:{type:`boolean`}},required:[`volume`]})],mr=[R(`code.run`,`Run a short script against the viewer: for what no command does in one step.`,{type:`object`,properties:{source:{type:`string`,description:`TypeScript.`}},required:[`source`]},{unavailable:`Needs the code module, which this app does not include.`})],hr=[R(`snapshot.add`,`Save the view as a snapshot, with a title and a description.`,{type:`object`,properties:{title:{type:`string`},description:{type:`string`,description:`Markdown.`}},required:[`title`]},{state:`deferred`}),R(`structure.remove`,`Remove a structure and everything shown of it. Asks first: it cannot be undone after the next action.`,{type:`object`,properties:{structure:{type:`string`,description:`Its id.`}},required:[`structure`]},{approval:!0,state:`deferred`}),R(`export.image`,`Save an image of the canvas: its size and transparency.`,{type:`object`,properties:{width:{type:`integer`,description:`Pixels.`},height:{type:`integer`,description:`Pixels.`},transparent:{type:`boolean`,description:`No background.`}}},{enabled:!1,state:`deferred`})],gr={groups:[{id:`core`,kind:`core`,title:`Core tools`,tools:U},{id:`selections`,kind:`skill`,title:`Selections`,summary:`Select by distance, neighborhood and logic (PyMOL selection syntax, MolQL).`,guidance:V,guidanceTokens:z(V),tools:fr},{id:`volumes`,kind:`skill`,title:`Volumes`,summary:`Density maps: EMDB entries, X-ray density, map files; drawn as isosurfaces or slices.`,guidance:dr,guidanceTokens:z(dr),tools:pr},{id:`code`,kind:`skill`,title:`Code`,summary:`Scripts against the viewer, for what no command does in one step.`,guidance:`Skill code: write short TypeScript against the viewer’s API and run it with code.run.`,guidanceTokens:24,unavailable:`Needs the code module, which this app does not include.`,tools:mr},{id:`single`,kind:`single`,title:`Tools loaded by name`,tools:hr}]},_r=e=>e.map(e=>({id:e.id,name:e.name,description:e.description})),vr=e=>e.map(e=>`${e.name}: ${e.description}`).join(`
`),yr=`Structures: none loaded.
Selection: empty.`,br=`Structures:
- 1tqn "1TQN" Cytochrome P450 3A4, chain A (486 residues)
  - 1tqn.polymer: cartoon, colored by chain
  - 1tqn.ligand HEM 508: ball-and-stick, colored by element
Selection: HEM 508 (A), 43 atoms
Camera: on HEM 508`,xr=`Structures:
- 1tqn "1TQN" Cytochrome P450 3A4, chain A (486 residues)
  - 1tqn.polymer: cartoon, colored by chain
  - 1tqn.ligand HEM 508: ball-and-stick, colored by element
  - 1tqn.site: ball-and-stick, colored by residue name (24 residues)
Selection: 24 residues (A): PHE 57, ARG 105, ILE 118, ALA 297, THR 309, CYS 442 …
Camera: on HEM 508`,Sr=`1tqn "1TQN" Cytochrome P450 3A4 (PDB), 1 model, 3,898 atoms
  polymer: chain A, residues 27-499, cartoon, colored by chain
  ligand HEM 508: 43 atoms, ball-and-stick, colored by element
  site: 24 residues, ball-and-stick, colored by residue name
selection: 24 residues
camera: target HEM 508, radius 9.2 Å`})))()}function wr(e={}){return({shell:t,status:n,loaded:r})=>{let i=new $n((e,t)=>n.post(e,t),{configured:e.configured,history:r}),o=cr({running:e.running,empty:!e.configured}),s=e=>t.openPage(Re,e),c=o.tools.pipe(u(qe));return{tabs:[{id:`log`,title:`History`,icon:`scroll-text`,order:2.5,place:`foot`,render:se(()=>a(Wn,{agent:i,status:n}))},{id:`assistant`,title:`Set up assistant`,heading:`Assistant`,icon:`sparkles`,order:2.7,place:`foot`,render:se(()=>a(Bn,{agent:i,inspect:{links:[{id:`trace`,label:`Trace`,detail:o.trace.pipe(u(e=>e?.turns.length?`${e.turns.length} turns`:`nothing yet`))},{id:`tools`,label:`Tools`,detail:c.pipe(u(e=>`${e.tools} tools, ${e.skills} skills`))},{id:`limits`,label:`Limits`,detail:`turn budget, context window, thinking`}],open:s}}))}],pages:[cn(o)],commands:Le(s),assistant:Yn(i,()=>t.show(`assistant`)),agent:a(xn,{agent:i,onTrace:e=>s(`turn:${e}`)}),commandDone:(e,t)=>i.record(e,t)}}}function Tr(){return(Tr=e((()=>{x(),d(),pn(),Dn(),Vn(),qn(),er(),Cr(),c()})))()}function W(e){return r(()=>a(`div`,{style:`height: 100vh`,children:a(De,{loaded:!0,addOn:wr({configured:!0,running:e.running}),openPage:Re,openPageAt:e.focus})}))}var Er,G,K,q,J,Y,X,Z,Q,$,Dr;function Or(){return(Or=e((()=>{Ee(),Oe(),ze(),Tr(),c(),Er={title:`Shell/Assistant`,parameters:{layout:`fullscreen`}},G={render:()=>r(()=>a(`div`,{style:`height: 100vh`,children:a(De,{loaded:!0,addOn:wr({configured:!0})})}))},K={render:()=>r(()=>a(`div`,{style:`height: 100vh`,children:a(De,{loaded:!0,addOn:wr()})}))},q={render:()=>W({focus:`trace`})},J={render:()=>W({focus:`trace`,running:!0})},Y={render:()=>W({focus:`step:${or().turns.flatMap(e=>e.steps).find(e=>e.kind===`model`&&e.prefixBreak)?.id??``}`})},X={render:()=>W({focus:`tools`})},Z={render:()=>W({focus:`tool:bounds.get`})},Q={render:()=>W({focus:`limits`})},$={render:()=>r(()=>a(`div`,{style:`height: 100vh`,children:a(De,{loaded:!0,addOn:wr({configured:!0}),openTab:`assistant`})}))},Dr=[`SetUp`,`NotSetUp`,`Trace`,`TraceRunning`,`TraceWhatItSaw`,`Tools`,`ToolsAtTool`,`Limits`,`Inspect`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style="height: 100vh">
        <ViewerShellStory loaded={true} addOn={mockAgentAddOn({
      configured: true
    })} />
      </div>)
}`,...G.parameters?.docs?.source},description:{story:`The agent module included and set up (a mock agent stands in for any-harness): ask from the command menu (⌘K, type
a request, Ask AI assistant; “color it red” opens the filled sentence, “show the active site”, “load 1w0e and
superpose it”, “try something broken” run turns), watch the turn card, Allow or Deny a download, Stop, Undo turn;
History at the rail's foot; the Assistant tab with the model and keys.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style="height: 100vh">
        <ViewerShellStory loaded={true} addOn={mockAgentAddOn()} />
      </div>)
}`,...K.parameters?.docs?.source},description:{story:`The agent module included but no model yet: the Assistant tab asks for a key; the Ask row opens it.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => Inspector({
    focus: 'trace'
  })
}`,...q.parameters?.docs?.source},description:{story:`The agent trace (⌥T, Assistant trace in the command menu): the overview strip (a column per turn; model calls above,
tool calls below; the retry hatched, the failed call in the danger color), the rows (j/k or the arrows move), and the
selected row in detail. Turn 2 has a rate-limited retry, a skill loading (a new prefix), a failed tool call the model
fixes, and a tool that runs a helper model (indented under it).`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => Inspector({
    focus: 'trace',
    running: true
  })
}`,...J.parameters?.docs?.source},description:{story:`The last turn still running: its model call pulses, the header says working, the turn has no end yet.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const step = mockTrace().turns.flatMap(t => t.steps).find(s => s.kind === 'model' && s.prefixBreak);
    return Inspector({
      focus: \`step:\${step?.id ?? ''}\`
    });
  }
}`,...Y.parameters?.docs?.source},description:{story:`A model call's What it saw: the window's makeup (guidance, tool definitions, state, conversation), its share of the
model's window, what is new since the previous call, why the cache prefix broke (the selections skill loaded), and the
entries (earlier ones folded; a click shows one whole).`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => Inspector({
    focus: 'tools'
  })
}`,...X.parameters?.docs?.source},description:{story:`The agent's tools (Assistant tools): the core, each skill (loaded or not; one unavailable here, and why), the tools
loaded by name; reads, asks and disabled as quiet words; a group's guidance as the model reads it.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => Inspector({
    focus: 'tool:bounds.get'
  })
}`,...Z.parameters?.docs?.source},description:{story:`A tool in detail (as a tool call's Definition opens it): its facts, its input as fields, its JSON Schema.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => Inspector({
    focus: 'limits'
  })
}`,...Q.parameters?.docs?.source},description:{story:`What bounds the agent (Assistant limits): the turn budget per kind with what the latest turn used, the model's context
window, compaction trigger and thinking level, and credits as information. Type a value and Enter (Esc puts it
back); Reset goes back to the default.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style="height: 100vh">
        <ViewerShellStory loaded={true} addOn={mockAgentAddOn({
      configured: true
    })} openTab="assistant" />
      </div>)
}`,...$.parameters?.docs?.source},description:{story:`The Assistant tab with the Inspect block under the model and keys: Trace, Tools, Limits, each opening the page.`,...$.parameters?.docs?.description}}}})))()}Or();export{$ as Inspect,Q as Limits,K as NotSetUp,G as SetUp,X as Tools,Z as ToolsAtTool,q as Trace,J as TraceRunning,Y as TraceWhatItSaw,Dr as __namedExportsOrder,Er as default};