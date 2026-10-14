import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,h as n,n as r,o as i,r as a,t as o}from"./jsx-runtime-DiBZWcxb.js";import{i as s,r as c}from"./base-Cal5NIfy.js";import{a as l,i as ee,n as u,o as te,r as d,t as ne}from"./take-BNPVUTCZ.js";import{n as f,t as p}from"./distinctUntilChanged-BHDujrwf.js";import{n as m,r as h}from"./control-flow-HAEcegil.js";import{n as g,t as _}from"./map-CsR1ibWS.js";import{n as re,t as ie}from"./combineLatest-Cmmnh-lC.js";import{T as ae,c as oe,o as se}from"./shell-Dnh1QcSy.js";import{n as ce,t as v}from"./filter-DUVrtjOA.js";import{n as le,t as ue}from"./skip-BhJZ98Z1.js";import{r as y}from"./observable-state-D-XGaosJ.js";import{t as b}from"./icon-Dqu8cMU0.js";import{t as x}from"./scroll-area-XzYIuKyv.js";import{n as de}from"./keyed-selector-CKIJWWFN.js";import{n as fe}from"./select-CsL-iypk.js";import{t as pe}from"./text-input-CQilzVcE.js";import{d as me,t as S}from"./src-C_tJCfFc.js";import{t as he}from"./shell-story-DSor2oTS.js";import{t as ge}from"./testing-CDhIe_d5.js";function _e(e){let t=(t,n,r,i={})=>({id:`assistant.${t}`,title:n,category:`Assistant`,alias:r,...i,run:()=>(e(t),{message:``})});return[t(`trace`,`Assistant trace`,[`trace`,`inspector`,`agent`,`steps`,`what the agent did`],{icon:`list-tree`,shortcut:{key:`t`,alt:!0}}),t(`tools`,`Assistant tools`,[`tools`,`skills`,`inspector`,`agent`],{icon:`wrench`}),t(`limits`,`Assistant limits`,[`limits`,`budget`,`context window`,`thinking`,`agent`],{icon:`gauge`})]}var ve;function ye(){return(ye=e((()=>{ve=`inspector`})))()}function C(e){return e>=999500?`${Number((e/1e6).toFixed(e>=995e4?0:1))}M`:e>=1e3?`${(e/1e3).toFixed(e>=9950?0:1)}k`:String(Math.round(e))}function w(e){return e<999.5?`${Math.round(e)} ms`:`${(e/1e3).toFixed(+(e<9950))} s`}function be(e){let t=e<10?Math.round(e*10)/10:Math.round(e);return`${t} ${t===1?`credit`:`credits`}`}function xe(e){return e.cached&&e.input>0?Math.round(e.cached/e.input*100):void 0}function Se(e){let t=xe(e),n=[t===void 0?``:`${t}% cached`,e.written?`${C(e.written)} written`:``].filter(Boolean).join(`, `),r=e.estimated?`~`:``;return[`${r}${C(e.input)} in${n?` (${n})`:``}`,`${r}${C(e.output)} out`,e.credits===void 0?``:be(e.credits)].filter(Boolean).join(` · `)}var T;function Ce(){return(Ce=e((()=>{s(),T={choice:`msp-assistant-limits-choice`,content:`msp-assistant-limits-content`,default:`msp-assistant-limits-default`,group:`msp-assistant-limits-group`,input:`msp-assistant-limits-input`,label:`msp-assistant-limits-label`,limits:`msp-assistant-limits-limits`,row:`msp-assistant-limits-row`,rows:`msp-assistant-limits-rows`,title:`msp-assistant-limits-title`,unit:`msp-assistant-limits-unit`,used:`msp-assistant-limits-used`,usedBar:`msp-assistant-limits-usedBar`,value:`msp-assistant-limits-value`,what:`msp-assistant-limits-what`},c(`assistant/inspector/limits.module.css`,`@layer msp.components {
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
`)})))()}function we(e,t){return t>0?te(e.pipe(u(1)),e.pipe(le(1),d(t))):e}function Te(e,t,n,r){if(!e.length)return t;let i=e.findIndex(e=>e.key===t);return i<0&&(i=r===`first`?0:e.length-1),e[Math.max(0,Math.min(e.length-1,i+n))].key}function Ee(e,t){for(let n of e.groups){let e=n.rows.find(e=>e.key===t);if(e)return e}}function De(e){let t=0;for(let n of e.groups)t+=n.tools.length;return{tools:t,skills:e.groups.filter(e=>e.kind===`skill`).length}}var Oe,ke;function Ae(){return(Ae=e((()=>{S(),re(),ee(),f(),_(),l(),ue(),ne(),Oe=[],ke=class{#e=y(`trace`);#t=y(`steps`);#n=y({model:`saw`,tool:`result`,definition:`input`});#r=y(void 0);#i=y(void 0);#a;constructor(e){this.trace=e.trace,this.tools=e.tools,this.limits=e.limits,this.#a=e.setLimit,this.editable=!!e.setLimit;let t=we(e.trace,e.settle??80);this.turns=t.pipe(g(e=>e?.turns??Oe)),this.rows=t.pipe(g(e=>this.#c(e)));let n=(e,t,n)=>e.find(e=>e.key===t)??n,r=ie([this.rows,this.#r.asReadonly]).pipe(g(([e,t])=>n(e,t,e.at(-1))),p());this.row=r,this.selected=r.pipe(g(e=>e?.key),p()),this.toolRows=e.tools.pipe(g(e=>this.#u(e)));let i=ie([this.toolRows,this.#i.asReadonly]).pipe(g(([e,t])=>n(e,t,e[0])),p());this.toolRow=i,this.selectedTool=i.pipe(g(e=>e?.key),p());let a=de(this.selected),o=de(this.selectedTool);this.isSelected=e=>a.is(e),this.isSelectedTool=e=>o.is(e)}get view(){return this.#e.asReadonly}get scale(){return this.#t.asReadonly}get tabs(){return this.#n.asReadonly}setView(e){this.#e.set(e)}setScale(e){this.#t.set(e)}setTab(e,t){this.#n.set({...this.#n.value,[e]:t})}select(e){this.#r.set(e)}move(e){this.#r.set(Te(this.#c(this.trace.value),this.#r.value,e,`last`))}selectTool(e){this.#i.set(e)}moveTool(e){let t=this.#u(this.tools.value);this.#i.set(Te(t,this.#i.value,e,`first`))}openTool(e){this.#i.set(`tool:${e}`),this.#e.set(`tools`)}setLimit(e,t){let n=Ee(this.limits.value,e);if(!n||!n.editable||!this.#a)return!1;if(t===void 0)return this.#a(e,void 0),!0;if(!Number.isFinite(t))return!1;if(n.choices){if(!n.choices.some(e=>e.value===t))return!1}else if(n.step&&(t=Math.round(t/n.step)*n.step),t<=0||n.ceiling!==void 0&&t>n.ceiling)return!1;return this.#a(e,t===n.default?void 0:t),!0}focus(e){if(e===`trace`||e===`tools`||e===`limits`)return this.#e.set(e),!0;let t=e.indexOf(`:`),n=e.slice(0,t),r=e.slice(t+1);if(t<0||!r)return!1;switch(n){case`turn`:{let e=this.trace.value?.turns??[],t=e.find(e=>e.id===r)??e.at(-1);return t&&this.#r.set(`turn:${t.id}`),this.#e.set(`trace`),!0}case`step`:return this.#r.set(`step:${r}`),this.#e.set(`trace`),!0;case`tool`:return this.openTool(r),!0;case`group`:return this.#i.set(`group:${r}`),this.#e.set(`tools`),!0}return!1}#o=new WeakMap;#s=new Map;#c(e){if(!e)return Oe;let t=this.#o.get(e);if(t)return t;let n=this.#s,r=new Map,i=e=>{let t=n.get(e.key),i=t&&t.kind===e.kind&&t.turn===e.turn&&t.index===e.index&&(t.kind!==`step`||e.kind===`step`&&t.step===e.step)?t:e;return r.set(e.key,i),i},a=e.turns.flatMap((e,t)=>[i({kind:`turn`,key:`turn:${e.id}`,turn:e,index:t}),i({kind:`request`,key:`req:${e.id}`,turn:e,index:t}),...e.steps.map(n=>i({kind:`step`,key:`step:${n.id}`,turn:e,index:t,step:n,nested:n.under!==void 0}))]);return this.#s=r,this.#o.set(e,a),a}#l=new WeakMap;#u(e){let t=this.#l.get(e);return t||(t=e.groups.flatMap(e=>[{kind:`group`,key:`group:${e.id}`,group:e},...e.tools.map(t=>({kind:`tool`,key:`tool:${t.name}`,group:e,tool:t}))]),this.#l.set(e,t)),t}}})))()}var E;function je(){return(je=e((()=>{s(),E={budget:`msp-assistant-parts-budget`,budgetBar:`msp-assistant-parts-budgetBar`,budgetText:`msp-assistant-parts-budgetText`,code:`msp-assistant-parts-code`,count:`msp-assistant-parts-count`,dim:`msp-assistant-parts-dim`,fact:`msp-assistant-parts-fact`,facts:`msp-assistant-parts-facts`,h:`msp-assistant-parts-h`,head:`msp-assistant-parts-head`,jKey:`msp-assistant-parts-jKey`,jLit:`msp-assistant-parts-jLit`,jStr:`msp-assistant-parts-jStr`,json:`msp-assistant-parts-json`,kind:`msp-assistant-parts-kind`,link:`msp-assistant-parts-link`,meter:`msp-assistant-parts-meter`,meterFill:`msp-assistant-parts-meterFill`,mono:`msp-assistant-parts-mono`,note:`msp-assistant-parts-note`,prose:`msp-assistant-parts-prose`,tab:`msp-assistant-parts-tab`,tabs:`msp-assistant-parts-tabs`,usage:`msp-assistant-parts-usage`,where:`msp-assistant-parts-where`},c(`assistant/inspector/parts.module.css`,`@layer msp.components {
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
`)})))()}function Me(e){return r(`div`,{class:`${E.tabs} ${e.class??``}`,role:`tablist`,"aria-label":e.label,children:e.tabs.map(t=>a(`button`,{type:`button`,role:`tab`,class:E.tab,"aria-selected":e.value.pipe(g(e=>e===t.id),p()),onClick:()=>e.onChange(t.id),children:[t.label,t.count===void 0?null:r(`span`,{class:E.count,children:t.count})]}))})}function D(e){return a(`div`,{class:E.head,children:[r(`span`,{class:E.kind,children:e.kind}),e.where?r(`span`,{class:E.where,children:e.where}):null,e.children]})}function O(e){return r(`dl`,{class:E.facts,children:e.items.map(([e,t])=>a(`div`,{class:E.fact,children:[r(`dt`,{children:e}),r(`dd`,{children:t})]}))})}function Ne(e){let t=JSON.stringify(e.value,null,2)??`undefined`,n=r(`pre`,{class:`${E.code} ${E.json}`}),i=0;for(let e of t.matchAll(Be)){e.index>i&&n.append(t.slice(i,e.index));let r=document.createElement(`span`);r.className=e[1]?e[2]?E.jKey:E.jStr:E.jLit,r.textContent=e[1]??e[3],n.append(r),e[2]&&n.append(e[2]),i=e.index+e[0].length}return i<t.length&&n.append(t.slice(i)),n}function Pe(e){return r(`span`,{class:`${E.usage} ${e.class??``}`,children:Se(e.tokens)})}function Fe(e){let t=e=>`${Math.max(0,Math.min(1,e))*100}%`,n=e.share;return r(`span`,{class:`${E.meter} ${e.class??``}`,"data-danger":e.danger?``:void 0,children:r(`span`,{class:E.meterFill,style:{width:typeof n==`number`?t(n):n.pipe(g(e=>t(e)))}})})}function Ie(e){return r(h,{when:e.budget,children:e=>a(`span`,{class:E.budget,"data-tip":`${e.scope?`The ${e.scope}: `:``}its budget is counted by kind; this is the kind nearest its ceiling.${e.credits===void 0?``:` Credits: what it cost, in the app’s credits.`}`,children:[e.ceiling>0?r(Fe,{share:e.consumed/e.ceiling,class:E.budgetBar}):null,a(`span`,{class:E.budgetText,children:[e.ceiling>0?`${C(e.consumed)} / ${C(e.ceiling)}`:C(e.consumed),` `,e.dimension??`tokens`,e.credits===void 0?``:` · ${be(e.credits)}`]})]})})}function Le(e){return(/^(.+?[.!?])(\s|$)/.exec(e)?.[1]??e).replace(/\s+/g,` `)}function Re(e,t){let r=n=>{if(n.defaultPrevented||n.altKey||n.ctrlKey||n.metaKey)return;let r=n.key===`ArrowDown`||n.key===`j`?1:n.key===`ArrowUp`||n.key===`k`?-1:0,i=e();if(!r||!i?.isConnected)return;let a=n.target;if(!i.contains(a)&&(a?.isContentEditable||a?.closest?.(`input, textarea, select, [role=listbox], [role=menu], [popover]`)))return;let o=i.closest(`[data-msp-page]`)??i;(!a||a===document.body||o.contains(a))&&(n.preventDefault(),t(r))};document.addEventListener(`keydown`,r),n(()=>document.removeEventListener(`keydown`,r))}function ze(e,t,n,r=0){if(!e||!t)return;let i;for(let n of e.querySelectorAll(`[data-row]`))if(n.dataset.row===t){i=n;break}if(!i)return;let a=e.getBoundingClientRect(),o=i.getBoundingClientRect(),s=o.top-a.top+e.scrollTop;n===`center`?e.scrollTop=s-e.clientHeight/2+o.height/2:s<e.scrollTop+r?e.scrollTop=s-r:s+o.height>e.scrollTop+e.clientHeight&&(e.scrollTop=s+o.height-e.clientHeight)}var Be,Ve;function k(){return(k=e((()=>{S(),f(),_(),je(),o(),Be=/("(?:[^"\\]|\\.)*")(\s*:)?|\b(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?|true|false|null)\b/g,Ve=e=>(e??``).split(`
`,1)[0]??``})))()}function He(e){let t=/^([\d.]+)\s*([kKmM]?)$/.exec(e.replace(/[,\s_]/g,``));if(!t)return;let n=Number(t[1])*(t[2]===`k`||t[2]===`K`?1e3:t[2]?1e6:1);return Number.isFinite(n)?n:void 0}function Ue(e){let{model:t}=e,n=t.limits.pipe(g(e=>e.groups.map(e=>e.id)),p(Ke)),i=e=>t.limits.pipe(g(t=>t.groups.find(t=>t.id===e)),v(e=>!!e));return r(x,{class:T.limits,contentClass:T.content,children:r(m,{each:n,children:e=>{let n=i(e),o=n.pipe(g(e=>e.rows.map(e=>e.key)),p(Ke));return a(`section`,{class:T.group,"aria-label":n.pipe(g(e=>e.title)),children:[r(`h3`,{class:T.title,children:n.pipe(g(e=>e.title))}),r(h,{when:n.pipe(g(e=>e.note??``)),children:e=>r(`p`,{class:E.note,children:e})}),r(`div`,{class:T.rows,children:r(m,{each:o,children:e=>r(We,{model:t,rowKey:e})})})]})}})})}function We(e){let{model:t}=e,n=t.limits.pipe(g(t=>Ee(t,e.rowKey)),v(e=>!!e),p()),o=Ee(t.limits.value,e.rowKey),s=t.editable&&o.editable,c=e=>n.pipe(g(t=>t[e]),p()),l=n.pipe(g(e=>e.value!==e.default),p());return a(`div`,{class:T.row,"data-changed":l.pipe(g(e=>e?``:void 0)),children:[a(`div`,{class:T.label,children:[r(`span`,{children:o.label}),o.note?r(`span`,{class:T.what,children:o.note}):null,o.used===void 0?null:a(`span`,{class:T.used,children:[r(Fe,{class:T.usedBar,share:n.pipe(g(e=>e.value>0?(e.used??0)/e.value:0))}),a(`span`,{children:[n.pipe(g(e=>`${C(e.used??0)} of ${C(e.value)} used`)),o.ceiling===void 0?``:` · up to ${C(o.ceiling)}`]})]})]}),s?o.choices?r(fe,{over:!0,size:`sm`,class:T.choice,"aria-label":o.label,options:o.choices.map(e=>[String(e.value),e.label]),value:c(`value`).pipe(g(String)),onChange:e=>t.setLimit(o.key,Number(e))}):r(Ge,{model:t,row:n,shape:o}):r(`span`,{class:T.value,children:n.pipe(g(e=>e.choices?.find(t=>t.value===e.value)?.label??A(e.value)))}),r(`span`,{class:T.unit,children:o.unit}),r(`span`,{class:T.default,children:r(h,{when:l,fallback:()=>s||o.value!==o.default?r(`span`,{children:`default`}):null,children:()=>a(i,{children:[a(`span`,{children:[`default `,n.pipe(g(e=>e.choices?.find(t=>t.value===e.default)?.label??A(e.default)))]}),s?r(`button`,{type:`button`,class:E.link,"data-tip":`Back to the default`,onClick:()=>t.setLimit(o.key,void 0),children:`Reset`}):null]})})})]})}function Ge(e){let{model:t,row:n,shape:i}=e,a=i.value,o=r(`input`,{class:T.input,inputMode:`decimal`,"aria-label":i.label,value:n.pipe(g(e=>(a=e.value,A(e.value)))),onKeyDown:e=>{e.key===`Enter`?(s(),e.preventDefault()):e.key===`Escape`&&o.value!==A(a)&&(o.value=A(a),e.preventDefault(),e.stopPropagation())},onBlur:()=>s()}),s=()=>{let e=He(o.value);e!==void 0&&e!==a&&t.setLimit(i.key,e),o.value=A(a)};return o}var A,Ke;function qe(){return(qe=e((()=>{S(),f(),ce(),_(),Ce(),Ae(),k(),o(),A=e=>e.toLocaleString(`en-US`,{maximumFractionDigits:2}),Ke=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n])})))()}var j;function Je(){return(Je=e((()=>{s(),j={args:`msp-assistant-inspector-args`,body:`msp-assistant-inspector-body`,chip:`msp-assistant-inspector-chip`,chips:`msp-assistant-inspector-chips`,detail:`msp-assistant-inspector-detail`,detailContent:`msp-assistant-inspector-detailContent`,dot:`msp-assistant-inspector-dot`,empty:`msp-assistant-inspector-empty`,flag:`msp-assistant-inspector-flag`,focus:`msp-assistant-inspector-focus`,head:`msp-assistant-inspector-head`,headMeta:`msp-assistant-inspector-headMeta`,headTitle:`msp-assistant-inspector-headTitle`,inspector:`msp-assistant-inspector-inspector`,list:`msp-assistant-inspector-list`,listContent:`msp-assistant-inspector-listContent`,meta:`msp-assistant-inspector-meta`,name:`msp-assistant-inspector-name`,nest:`msp-assistant-inspector-nest`,pulse:`msp-assistant-inspector-pulse`,result:`msp-assistant-inspector-result`,role:`msp-assistant-inspector-role`,row:`msp-assistant-inspector-row`,spacer:`msp-assistant-inspector-spacer`,split:`msp-assistant-inspector-split`,state:`msp-assistant-inspector-state`,status:`msp-assistant-inspector-status`,time:`msp-assistant-inspector-time`,tokens:`msp-assistant-inspector-tokens`,view:`msp-assistant-inspector-view`},c(`assistant/inspector/inspector.module.css`,`@layer msp.components {
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
`)})))()}var Ye;function Xe(){return(Xe=e((()=>{s(),Ye={field:`msp-assistant-tools-field`,fields:`msp-assistant-tools-fields`,toolList:`msp-assistant-tools-toolList`},c(`assistant/inspector/tools.module.css`,`@layer msp.components {
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
`)})))()}function Ze(e){let{model:t}=e,i,o=r(`div`,{class:j.view,children:a(`div`,{class:j.split,children:[r(x,{class:j.list,contentClass:j.listContent,viewportRef:e=>{i=e},role:`listbox`,"aria-label":`Tools`,children:r(m,{each:t.toolRows,children:e=>e.kind===`group`?r($e,{model:t,row:e}):r(et,{model:t,row:e})},e=>e.key)}),r(x,{class:j.detail,contentClass:j.detailContent,children:r(h,{when:t.toolRow,children:e=>e.kind===`group`?r(tt,{model:t,group:e.group}):r(nt,{model:t,group:e.group,tool:e.tool})})})]})});Re(()=>o,e=>t.moveTool(e));let s=t.selectedTool.pipe(u(1)).subscribe(e=>queueMicrotask(()=>ze(i,e,`center`))),c=t.selectedTool.pipe(le(1)).subscribe(e=>queueMicrotask(()=>ze(i,e,`nearest`,at)));return n(()=>{s.unsubscribe(),c.unsubscribe()}),o}function Qe(e){let t=e.tools.filter(e=>e.state===`loaded`).length;return t===0?`none`:t===e.tools.length?`all`:`some`}function $e(e){let{model:t,row:n}=e,i=n.group,o=i.tools.length;return a(`button`,{type:`button`,role:`option`,class:j.head,"data-row":n.key,"aria-selected":t.isSelectedTool(n.key),onClick:()=>t.selectTool(n.key),children:[r(`span`,{class:j.headTitle,children:i.title}),i.unavailable?r(`span`,{class:j.status,"data-tip":i.unavailable,children:`unavailable here`}):i.kind===`skill`&&Qe(i)===`all`?r(`span`,{class:j.status,children:`loaded`}):null,a(`span`,{class:j.headMeta,children:[o,` `,o===1?`tool`:`tools`,` · ~`,C(ot(i.tools)),` tokens`]})]})}function et(e){let{model:t,row:n}=e,i=n.tool;return a(`button`,{type:`button`,role:`option`,class:j.row,"data-row":n.key,"data-off":!i.enabled||i.unavailable?``:void 0,"aria-selected":t.isSelectedTool(n.key),onClick:()=>t.selectTool(n.key),children:[r(`span`,{class:j.role,children:i.read?`reads`:`tool`}),a(`span`,{class:j.body,children:[r(`span`,{class:j.name,children:i.name}),a(`span`,{class:j.focus,children:[i.extra?`By name. `:``,Le(i.description)]})]}),a(`span`,{class:j.meta,children:[i.approval?r(`span`,{class:j.flag,children:`asks`}):null,i.enabled?null:r(`span`,{class:j.flag,children:`disabled`}),i.state===`loaded`?r(`span`,{children:i.loadedAtTurn?`turn ${i.loadedAtTurn}`:`loaded`}):null,a(`span`,{children:[`~`,C(i.tokens)]})]})]})}function tt(e){let{model:t,group:n}=e,o=n.guidance?n.guidanceTokens??Math.round(n.guidance.length/4):0;return a(i,{children:[r(D,{kind:n.kind===`skill`?`skill`:n.kind===`core`?`core`:`by name`,where:n.kind===`skill`?n.id:void 0}),r(`p`,{class:E.prose,children:n.summary??n.title}),r(O,{items:[[`Tools`,String(n.tools.length)],[`Size`,`~${C(ot(n.tools))} tokens of definitions${o?`, ~${C(o)} of guidance`:``}`],[`Now`,ct[Qe(n)]],...n.unavailable?[[`Here`,n.unavailable]]:[]]}),r(`p`,{class:E.note,children:st[n.kind]}),n.guidance?a(i,{children:[r(`h4`,{class:E.h,children:`Guidance`}),r(`p`,{class:E.note,children:`Exactly as the model reads it when the skill loads.`}),r(`pre`,{class:E.code,children:n.guidance})]}):null,r(`h4`,{class:E.h,children:`Tools`}),r(`ul`,{class:Ye.toolList,children:n.tools.map(e=>a(`li`,{children:[r(`button`,{type:`button`,class:`${E.link} ${j.name}`,onClick:()=>t.openTool(e.name),children:e.name}),r(`span`,{class:E.dim,children:Le(e.description)})]}))})]})}function nt(e){let{model:t,group:n,tool:o}=e,s=rt(o.input),c=t.tabs.pipe(g(e=>e.definition),p()),l=o.unavailable??n.unavailable;return a(i,{children:[r(D,{kind:`${o.read?`tool · reads`:`tool`}${o.extra?` · by name`:``}`,where:n.title,children:r(`span`,{class:j.name,children:o.name})}),r(`p`,{class:E.prose,children:o.description}),r(O,{items:[[`Placement`,st[n.kind]],[`Reads`,o.read?`only: no effect, no checkpoint`:`no: it changes something`],[`Approval`,o.approval?`asks the person first`:`not needed`],[`Enabled`,o.enabled?`yes`:`no: not in this turn’s tool set`],...o.modules?.length?[[`Modules`,o.modules.join(`, `)]]:[],[`Size`,`~${C(o.tokens)} tokens`],[`Now`,o.state===`loaded`?o.loadedAtTurn?`loaded at turn ${o.loadedAtTurn}`:`loaded from the start`:o.state===`deferred`?`declared by name; loads when called`:`not loaded`],...l?[[`Here`,l]]:[]]}),r(Me,{label:`Definition`,tabs:[{id:`input`,label:`Input`,count:s.length},{id:`schema`,label:`JSON Schema`}],value:c,onChange:e=>t.setTab(`definition`,e)}),r(h,{when:c,children:e=>e===`schema`?r(Ne,{value:o.input}):s.length?r(`dl`,{class:Ye.fields,children:s.map(e=>a(`div`,{class:Ye.field,children:[a(`dt`,{children:[r(`span`,{class:j.name,children:e.path}),a(`span`,{class:E.dim,children:[` `,e.type,e.required?``:`, optional`]})]}),e.description?r(`dd`,{children:e.description}):null,e.values?a(`dd`,{class:E.dim,children:[`One of: `,e.values.join(`, `)]}):null]}))}):r(`p`,{class:E.note,children:`No arguments.`})})]})}function rt(e,t=``){let n=e,r=new Set(n.required??[]);return Object.entries(n.properties??{}).flatMap(([e,n])=>{let i=`${t}${e}`,a=n.items,o=n.enum??a?.enum;return[{path:i,type:it(n),required:r.has(e),...n.description?{description:n.description}:{},...o?{values:o.map(String)}:{}},...n.properties?rt(n,`${i}.`):a?.properties?rt(a,`${i}[].`):[]]})}function it(e){let t=e.anyOf??e.oneOf;if(t)return t.map(it).join(` or `);let n=Array.isArray(e.type)?e.type.join(` or `):e.type??(e.enum?`choice`:`any`);return n===`array`?`list of ${e.items?it(e.items):`any`}`:n}var at,ot,st,ct;function lt(){return(lt=e((()=>{S(),f(),_(),ue(),ne(),Je(),Xe(),k(),o(),at=40,ot=e=>e.reduce((e,t)=>e+t.tokens,0),st={core:`Core: offered from the first turn.`,skill:`Part of a skill: loaded with its guidance by disclose_skills.`,single:`Loaded by name when the model asks for it, several at once.`},ct={all:`loaded`,some:`partly loaded`,none:`not loaded`}})))()}var M;function ut(){return(ut=e((()=>{s(),M={at:`msp-assistant-trace-at`,attempt:`msp-assistant-trace-attempt`,attemptText:`msp-assistant-trace-attemptText`,bar:`msp-assistant-trace-bar`,bars:`msp-assistant-trace-bars`,block:`msp-assistant-trace-block`,column:`msp-assistant-trace-column`,entries:`msp-assistant-trace-entries`,entry:`msp-assistant-trace-entry`,entryBody:`msp-assistant-trace-entryBody`,entryRole:`msp-assistant-trace-entryRole`,entryText:`msp-assistant-trace-entryText`,entryTitle:`msp-assistant-trace-entryTitle`,entryTokens:`msp-assistant-trace-entryTokens`,fresh:`msp-assistant-trace-fresh`,key:`msp-assistant-trace-key`,lane:`msp-assistant-trace-lane`,lanes:`msp-assistant-trace-lanes`,legend:`msp-assistant-trace-legend`,makeup:`msp-assistant-trace-makeup`,milestones:`msp-assistant-trace-milestones`,ordinal:`msp-assistant-trace-ordinal`,overview:`msp-assistant-trace-overview`,part:`msp-assistant-trace-part`,pulse:`msp-assistant-trace-pulse`,segment:`msp-assistant-trace-segment`,swatch:`msp-assistant-trace-swatch`,timing:`msp-assistant-trace-timing`,track:`msp-assistant-trace-track`,window:`msp-assistant-trace-window`},c(`assistant/inspector/trace.module.css`,`@layer msp.components {
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
`)})))()}function dt(e){let{model:t}=e,n=t.rows.pipe(g(e=>e.length>0),p());return r(h,{when:n,fallback:()=>r(`p`,{class:j.empty,children:`The agent has not run yet. Ask it something (⌘K, then Ask AI assistant): each turn shows here, step by step.`}),children:()=>r(ft,{model:t})})}function ft(e){let{model:t}=e,i,o=a(`div`,{class:j.view,children:[r(ht,{model:t}),a(`div`,{class:j.split,children:[r(x,{class:j.list,contentClass:j.listContent,viewportRef:e=>{i=e},role:`listbox`,"aria-label":`Trace`,children:r(m,{each:t.rows,children:e=>r(_t,{model:t,row:e})},e=>e.key)}),r(x,{class:j.detail,contentClass:j.detailContent,children:r(h,{when:t.row,children:e=>r(St,{model:t,row:e})})})]})]});Re(()=>o,e=>t.move(e));let s=t.selected.pipe(u(1)).subscribe(e=>queueMicrotask(()=>ze(i,e,`center`))),c=t.selected.pipe(le(1)).subscribe(e=>queueMicrotask(()=>ze(i,e,`nearest`,jt)));return n(()=>{s.unsubscribe(),c.unsubscribe()}),o}function pt(e){let t=e.attempts[0],n=e.attempts.at(-1);return!t||!n?0:(n.end??n.start+800)-t.start}function mt(e){return e.kind===`tool`?e.title??e.name:e.reply?`model: reply`:`model: ${Ft(e)||`…`}`}function ht(e){let{model:t}=e;return a(`div`,{class:M.overview,children:[a(`div`,{class:M.lanes,"aria-hidden":`true`,children:[r(`span`,{children:`model`}),r(`span`,{children:`tools`})]}),r(`div`,{class:M.track,children:r(m,{each:t.turns,children:(e,n)=>r(gt,{model:t,turn:e,index:n.value})},e=>e.id)}),r(Me,{label:`Overview scale`,tabs:[{id:`steps`,label:`Steps`},{id:`time`,label:`Time`}],value:t.scale,onChange:e=>t.setScale(e)})]})}function gt(e){let{model:t,turn:n}=e,i=e=>t.scale.pipe(g(e)),o=`req:${n.id}`;return a(`div`,{class:M.column,"data-selected":t.isSelected(`turn:${n.id}`).pipe(g(e=>e?``:void 0)),style:{flexGrow:i(e=>n.steps.reduce((t,n)=>t+It(e,n),.6))},children:[r(`button`,{type:`button`,class:M.block,"data-kind":`request`,"aria-label":`Turn ${e.index+1}: ${n.prompt}`,"data-tip":`Turn ${e.index+1}: ${n.prompt}`,"aria-pressed":t.isSelected(o),onClick:()=>t.select(o)}),n.steps.map(e=>{let n=`step:${e.id}`,a=`${mt(e)} · ${Pt(e)?`running`:w(pt(e))}`;return r(`button`,{type:`button`,class:M.block,"data-kind":e.kind,"data-nested":e.under===void 0?void 0:``,"data-failed":Nt(e)?``:void 0,"data-retried":e.attempts.length>1?``:void 0,"data-running":Pt(e)?``:void 0,"aria-label":a,"data-tip":a,"aria-pressed":t.isSelected(n),style:{flexGrow:i(t=>It(t,e))},onClick:()=>t.select(n)})})]})}function _t(e){let{model:t,row:n}=e,o=t.isSelected(n.key),s=()=>t.select(n.key);if(n.kind===`turn`){let e=n.turn,t=e.steps.filter(e=>e.kind===`tool`).length;return a(`button`,{type:`button`,role:`option`,class:j.head,"data-row":n.key,"aria-selected":o,onClick:s,children:[a(`span`,{class:j.headTitle,children:[`Turn `,n.index+1]}),r(`span`,{class:j.status,"data-status":e.status,children:Mt[e.status]}),r(`span`,{class:j.headMeta,children:[e.end===void 0?`running`:w(e.end-e.start),Se(e.tokens),`${t} tool ${t===1?`call`:`calls`}`].join(` · `)})]})}if(n.kind===`request`)return a(vt,{row:n.key,role:`request`,selected:o,onSelect:s,children:[r(`span`,{children:n.turn.prompt}),n.turn.focus?a(`span`,{class:j.focus,children:[`Focus: `,n.turn.focus]}):null]});let c=n.step;if(c.kind===`model`){let e=Pt(c);return r(vt,{row:n.key,role:c.reply?`reply`:`model`,nested:n.nested,selected:o,onSelect:s,meta:a(i,{children:[c.attempts.length>1?r(`span`,{class:j.flag,"data-tip":xt(c.attempts),children:`retried`}):null,c.prefixBreak?r(`span`,{class:j.flag,"data-tip":bt(c.prefixBreak),children:`new prefix`}):null,r(`span`,{class:j.time,children:e?`thinking…`:w(pt(c))}),r(`span`,{class:j.tokens,children:c.tokens?`${C(c.tokens.input)} → ${C(c.tokens.output)}`:``})]}),children:e?r(`span`,{class:E.dim,children:`waiting for the model`}):c.reply?r(`span`,{children:c.reply}):a(`span`,{children:[r(`span`,{class:E.dim,children:`asks for `}),r(`span`,{class:j.name,children:Ft(c)})]})})}let l=Lt(c);return a(vt,{row:n.key,role:c.status===`failed`?`failed`:c.read?`reads`:`tool`,failed:c.status===`failed`,nested:n.nested,selected:o,onSelect:s,meta:a(i,{children:[l.map(e=>r(`span`,{class:j.chip,children:e.label})),r(`span`,{class:j.time,children:c.status===`running`?`running`:w(pt(c))}),r(`span`,{class:j.tokens})]}),children:[c.title?r(`span`,{children:c.title}):r(`span`,{class:j.name,children:c.name}),r(`span`,{class:j.args,children:yt(c)}),c.result===void 0?null:a(`span`,{class:j.result,children:[`→ `,Ve(c.result)]})]})}function vt(e){return a(`button`,{type:`button`,role:`option`,class:j.row,"data-row":e.row,"data-failed":e.failed?``:void 0,"data-nested":e.nested?``:void 0,"aria-selected":e.selected,onClick:()=>e.onSelect(),children:[r(`span`,{class:j.role,children:e.role}),a(`span`,{class:j.body,children:[e.nested?r(`span`,{class:j.nest,children:`↳`}):null,e.children]}),r(`span`,{class:j.meta,children:e.meta})]})}function yt(e){return Object.entries(e.args).map(([e,t])=>`${e}=${typeof t==`string`?t:JSON.stringify(t)}`).join(` `)}function bt(e){return`It does not extend the previous request: ${e.reason}. It kept ${e.kept} of that request’s ${e.of} parts (tools, system, then each message), so the provider’s cache could serve at most those.`}function xt(e){let t=e.filter(e=>e.status===`failed`);return`${e.length} attempts: ${t.map(e=>e.failure??`failed`).join(`; `)}`}function St(e){let{model:t,row:n}=e;return n.kind===`turn`?r(Ct,{turn:n.turn,index:n.index}):n.kind===`request`?r(wt,{turn:n.turn}):n.step.kind===`model`?r(Et,{model:t,step:n.step}):r(Dt,{model:t,step:n.step})}function Ct(e){let{turn:t}=e,n=t.steps.filter(e=>e.kind===`model`&&e.under===void 0),o=Math.max(1,...n.map(e=>e.tokens?.input??0));return a(i,{children:[r(D,{kind:`turn`,where:`${e.index+1} · ${t.id}`}),r(`p`,{class:E.prose,children:t.prompt}),r(O,{items:[[`Status`,Mt[t.status]],[`Duration`,t.end===void 0?`running`:w(t.end-t.start)],[`Tokens`,Se(t.tokens)],[`Model calls`,String(t.steps.filter(e=>e.kind===`model`).length)],[`Tool calls`,String(t.steps.filter(e=>e.kind===`tool`).length)],...t.failure?[[`Failure`,t.failure]]:[]]}),r(`h4`,{class:E.h,children:`Input size per model call`}),r(`p`,{class:E.note,children:`Each call carries the whole conversation so far: the growth is what a long turn costs.`}),r(`div`,{class:M.bars,children:n.map((e,t)=>{let n=e.tokens?xe(e.tokens):void 0;return a(`div`,{class:M.bar,children:[r(`span`,{children:t+1}),r(Fe,{share:(e.tokens?.input??0)/o}),r(`span`,{children:e.tokens?`${C(e.tokens.input)}${n===void 0?``:` · ${n}%`}`:`…`})]})})}),r(`p`,{class:E.note,children:`The share after the size is what the provider’s cache served.`}),r(`h4`,{class:E.h,children:`Milestones`}),r(`ul`,{class:M.milestones,children:t.milestones.map(e=>a(`li`,{children:[a(`span`,{class:M.at,children:[`+`,w(e.at-t.start)]}),` `,e.kind,e.detail?a(`span`,{class:E.dim,children:[` · `,e.detail]}):null]}))})]})}function wt(e){let{turn:t}=e;return a(i,{children:[r(D,{kind:`request`,where:t.id}),r(`p`,{class:E.prose,children:t.prompt}),r(O,{items:[[`Focus`,t.focus??`none`]]}),r(`p`,{class:E.note,children:`Sent with the state (what is loaded, selected and shown) and the focus (what the person points at), so the model works from what is on the screen.`})]})}function Tt(e){let{model:t,kind:n}=e,o=t.tabs.pipe(g(e=>e[n]),p());return a(i,{children:[r(Me,{label:`Detail`,tabs:e.tabs,value:o,onChange:e=>t.setTab(n,e)}),r(h,{when:o,children:t=>e.children(t)})]})}function Et(e){let{model:t,step:n}=e,o=n.attempts.filter(e=>e.status===`failed`);return a(i,{children:[r(D,{kind:n.under===void 0?`model call`:`model call · nested`,where:n.callId,children:n.model?r(`span`,{class:E.dim,children:n.model}):null}),r(Tt,{model:t,kind:`model`,tabs:[{id:`saw`,label:`What it saw`},{id:`answer`,label:`Answer`},{id:`timing`,label:`Timing`,count:n.attempts.length>1?n.attempts.length:``}],children:e=>e===`saw`?n.window?r(Ot,{window:n.window,prefixBreak:n.prefixBreak}):r(`p`,{class:E.note,children:`Not captured.`}):e===`answer`?a(i,{children:[r(O,{items:[[`Finish`,n.finish??(Pt(n)?`running`:`—`)],[`Tokens`,n.tokens?r(Pe,{tokens:n.tokens}):`…`],...o.length?[[`Failed`,o.map(e=>e.failure??`failed`).join(`; `)]]:[]]}),n.reply?r(`p`,{class:E.prose,children:n.reply}):null,n.toolCalls?.length?r(`pre`,{class:E.code,children:n.toolCalls.join(`
`)}):null]}):r(At,{attempts:n.attempts})})]})}function Dt(e){let{model:t,step:n}=e,o=n.status===`failed`,s=Lt(n),c=t.tools.value.groups.flatMap(e=>e.tools).find(e=>e.name===n.name),l=c?.description??t.trace.value?.preamble.tools.find(e=>e.name===n.name)?.description;return a(i,{children:[r(D,{kind:o?`tool call · failed`:`tool call`,where:n.callId,children:r(`span`,{class:j.name,children:n.name})}),n.title?r(`p`,{class:E.prose,children:n.title}):null,r(Tt,{model:t,kind:`tool`,tabs:[{id:`result`,label:`Result`},{id:`args`,label:`Arguments`},{id:`definition`,label:`Definition`},{id:`timing`,label:`Timing`}],children:e=>e===`result`?a(i,{children:[s.length?r(O,{items:[[`Changed`,r(`span`,{class:j.chips,children:s.map(e=>r(`span`,{class:j.chip,"data-tip":e.id,children:e.label}))})]]}):null,r(`pre`,{class:E.code,"data-failed":o?``:void 0,children:n.result??`…`}),o?r(`p`,{class:E.note,children:`The failure went back to the model as the call’s result; the next call fixes it.`}):null]}):e===`args`?r(Ne,{value:n.args}):e===`definition`?a(i,{children:[r(`p`,{class:E.prose,children:l??`No definition captured.`}),c?r(O,{items:[[`Reads`,c.read?`only: no effect, no checkpoint`:`no: it changes something`],[`Approval`,c.approval?`asks the person first`:`not needed`]]}):null,r(`button`,{type:`button`,class:E.link,onClick:()=>t.openTool(n.name),children:`Its input, where it loads and its size, in Tools`})]}):r(At,{attempts:n.attempts})})]})}function Ot(e){let{window:t}=e,n=t.entries.reduce((e,t)=>e+t.tokens,0),o=t.entries.filter(e=>e.fresh).reduce((e,t)=>e+t.tokens,0),s=e=>t.entries.filter(t=>t.part===e).reduce((e,t)=>e+t.tokens,0),c=t.entries.findIndex(e=>e.part!==`guidance`&&e.part!==`tools`),l=t.entries.findIndex(e=>e.fresh),ee=c<0?t.entries.length:c,u=l<0?t.entries.length:Math.max(ee,l),te=y(u-ee<2),d=t.entries.slice(ee,u);return a(i,{children:[a(`div`,{class:M.window,children:[r(`div`,{class:M.makeup,"data-tip":`≈${C(n)} tokens`,children:zt.map(([e])=>{let t=s(e);return t?r(`span`,{class:M.part,"data-part":e,style:{flexGrow:t}}):null})}),r(`div`,{class:M.legend,children:zt.map(([e,t])=>{let n=s(e);return n?a(`span`,{children:[r(`i`,{class:M.swatch,"data-part":e}),t,` `,C(n)]}):null})}),a(`p`,{class:E.note,children:[`≈`,C(n),` tokens`,t.limit?`, ${(n/t.limit*100).toFixed(1)}% of the model’s window`:``,`; `,C(o),` new since the previous call.`]}),e.prefixBreak?r(`p`,{class:E.note,children:bt(e.prefixBreak)}):null]}),a(`ol`,{class:M.entries,children:[t.entries.slice(0,ee).map(e=>r(kt,{entry:e})),d.length?r(h,{when:te.asReadonly,fallback:()=>r(`li`,{children:a(`button`,{type:`button`,class:M.entry,onClick:()=>te.set(!0),children:[r(`span`,{class:M.fresh}),r(`span`,{class:M.entryRole,children:`earlier`}),a(`span`,{class:M.entryTitle,children:[d.length,` `,d.length===1?`entry`:`entries`,` from before`]}),r(`span`,{class:M.entryText,children:`show`}),r(`span`,{class:M.entryTokens,children:C(d.reduce((e,t)=>e+t.tokens,0))})]})}),children:()=>d.map(e=>r(kt,{entry:e}))}):null,t.entries.slice(u).map(e=>r(kt,{entry:e}))]})]})}function kt(e){let t=e.entry,n=y(!1);return a(`li`,{children:[a(`button`,{type:`button`,class:M.entry,"data-fresh":t.fresh?``:void 0,"data-failed":t.failed?``:void 0,"aria-expanded":n.asReadonly,onClick:()=>n.set(!n.value),children:[r(`span`,{class:M.fresh,"data-tip":t.fresh?`New since the previous call`:void 0}),r(`span`,{class:M.entryRole,children:Rt[t.role]}),r(`span`,{class:M.entryTitle,children:t.title}),r(`span`,{class:M.entryText,children:Ve(t.text)}),r(`span`,{class:M.entryTokens,children:C(t.tokens)})]}),r(h,{when:n.asReadonly,children:()=>r(`pre`,{class:`${E.code} ${M.entryBody}`,children:t.text})})]})}function At(e){let{attempts:t}=e,n=Math.min(...t.map(e=>e.start-(e.waitBefore?.ms??0))),i=Math.max(...t.map(e=>e.end??e.start+400)),o=Math.max(1,i-n),s=e=>`${(e-n)/o*100}%`,c=(e,t)=>`${Math.max(0,t-e)/o*100}%`;return a(`div`,{class:M.timing,children:[t.map(e=>{let t=e.firstOutput??e.end??i;return a(`div`,{class:M.attempt,children:[a(`span`,{class:M.ordinal,children:[`#`,e.ordinal]}),a(`span`,{class:M.lane,children:[e.waitBefore?r(`i`,{class:M.segment,"data-kind":`wait`,"data-tip":`${e.waitBefore.reason}, ${w(e.waitBefore.ms)}`,style:{left:s(e.start-e.waitBefore.ms),width:c(e.start-e.waitBefore.ms,e.start)}}):null,r(`i`,{class:M.segment,"data-kind":e.status===`failed`?`failed`:e.status===`running`?`running`:`pre`,style:{left:s(e.start),width:c(e.start,t)}}),e.firstOutput!==void 0&&e.end!==void 0?r(`i`,{class:M.segment,"data-kind":`out`,style:{left:s(e.firstOutput),width:c(e.firstOutput,e.end)}}):null]}),a(`span`,{class:M.attemptText,"data-failed":e.status===`failed`?``:void 0,children:[e.status===`failed`?e.failure??`failed`:e.status===`running`?`running`:`${w((e.end??e.start)-e.start)}${e.firstOutput===void 0?``:`, the first output after ${w(e.firstOutput-e.start)}`}`,e.waitBefore?a(`span`,{class:E.dim,children:[` `,`· after `,e.waitBefore.reason,`, `,w(e.waitBefore.ms)]}):null]})]})}),a(`div`,{class:M.key,children:[a(`span`,{children:[r(`i`,{"data-kind":`wait`}),`waiting`]}),a(`span`,{children:[r(`i`,{"data-kind":`pre`}),`until the first output`]}),a(`span`,{children:[r(`i`,{"data-kind":`out`}),`output`]})]})]})}var jt,Mt,Nt,Pt,Ft,It,Lt,Rt,zt;function Bt(){return(Bt=e((()=>{S(),f(),_(),ue(),ne(),Je(),ut(),k(),o(),jt=40,Mt={thinking:`thinking…`,working:`working…`,waiting:`waiting for you`,done:`done`,stopped:`stopped`,failed:`failed`},Nt=e=>e.kind===`tool`?e.status===`failed`:e.attempts.every(e=>e.status===`failed`),Pt=e=>e.attempts.some(e=>e.status===`running`),Ft=e=>(e.toolCalls??[]).map(e=>e.split(`(`)[0]).join(`, `),It=(e,t)=>e===`steps`?1:Math.max(.25,pt(t)/700),Lt=e=>[...new Map((e.changed??[]).map(e=>[e.id,e])).values()],Rt={system:`guidance`,tools:`tools`,user:`request`,assistant:`model`,tool:`tool`},zt=[[`guidance`,`Guidance`],[`tools`,`Tool definitions`],[`state`,`State`],[`conversation`,`Conversation`]]})))()}function Vt(e){return{id:ve,title:`Inspect assistant`,icon:`sparkles`,header:ae(()=>r(Ut,{model:e})),render:ae(({ctx:t})=>{t.focus&&e.focus(t.focus);let i=t.shell.page.subscribe(t=>{t?.page.id===`inspector`&&t.focus&&e.focus(t.focus)});return n(()=>i.unsubscribe()),r(Wt,{model:e})})}}function Ht(e){let t=e?.turns.at(-1)?.status;return t===`waiting`?`waiting`:t===`thinking`||t===`working`?`working`:`idle`}function Ut(e){let{model:t}=e,n=t.trace.pipe(g(Ht),p()),o=t.trace.pipe(g(e=>e?.turns.length?e.turns.length:``)),s=t.tools.pipe(g(e=>De(e).tools));return a(i,{children:[r(Me,{label:`Inspector`,tabs:[{id:`trace`,label:`Trace`,count:o},{id:`tools`,label:`Tools`,count:s},{id:`limits`,label:`Limits`}],value:t.view,onChange:e=>t.setView(e)}),r(`span`,{class:j.spacer}),r(h,{when:t.trace.pipe(g(e=>!!e)),children:()=>a(`span`,{class:j.state,"data-state":n,children:[r(`i`,{class:j.dot}),n]})}),r(Ie,{budget:t.trace.pipe(g(e=>e?.budget))})]})}function Wt(e){let{model:t}=e;return r(`div`,{class:j.inspector,children:r(h,{when:t.view,children:e=>r(e===`trace`?dt:e===`tools`?Ze:Ue,{model:t})})})}function Gt(){return(Gt=e((()=>{S(),f(),_(),ye(),Je(),qe(),Ae(),k(),lt(),Bt(),o()})))()}function Kt(){return(Kt=e((()=>{ye(),qe(),Ae(),Gt(),k(),lt(),Bt()})))()}var N;function qt(){return(qt=e((()=>{s(),N={allow:`msp-assistant-agent-turn-allow`,approval:`msp-assistant-agent-turn-approval`,approvalText:`msp-assistant-agent-turn-approvalText`,approvalWhy:`msp-assistant-agent-turn-approvalWhy`,bar:`msp-assistant-agent-turn-bar`,barFill:`msp-assistant-agent-turn-barFill`,body:`msp-assistant-agent-turn-body`,bodyContent:`msp-assistant-agent-turn-bodyContent`,card:`msp-assistant-agent-turn-card`,deny:`msp-assistant-agent-turn-deny`,footer:`msp-assistant-agent-turn-footer`,header:`msp-assistant-agent-turn-header`,icon:`msp-assistant-agent-turn-icon`,line:`msp-assistant-agent-turn-line`,mark:`msp-assistant-agent-turn-mark`,note:`msp-assistant-agent-turn-note`,prompt:`msp-assistant-agent-turn-prompt`,run:`msp-assistant-agent-turn-run`,runDetail:`msp-assistant-agent-turn-runDetail`,runTime:`msp-assistant-agent-turn-runTime`,runTitle:`msp-assistant-agent-turn-runTitle`,runs:`msp-assistant-agent-turn-runs`,spark:`msp-assistant-agent-turn-spark`,"spark-pulse":`msp-assistant-agent-turn-spark-pulse`,spin:`msp-assistant-agent-turn-spin`,state:`msp-assistant-agent-turn-state`,stop:`msp-assistant-agent-turn-stop`,summary:`msp-assistant-agent-turn-summary`,text:`msp-assistant-agent-turn-text`,trace:`msp-assistant-agent-turn-trace`,undo:`msp-assistant-agent-turn-undo`,undone:`msp-assistant-agent-turn-undone`},c(`assistant/views/agent-turn.module.css`,`@layer msp.components {
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
`)})))()}function Jt(e){return e===void 0?``:e<1e3?`${Math.max(.1,e/1e3).toFixed(1)} s`:`${(e/1e3).toFixed(1)} s`}function Yt(e){let t=e.runs.filter(e=>!e.read),n=e.runs.filter(e=>e.status===`failed`).length,r=[`${t.length} command${t.length===1?``:`s`}`];return n&&r.push(`${n} failed`),e.durationMs!==void 0&&r.push(Jt(e.durationMs)),e.usage&&r.push(`${on(e.usage.input)} in · ${on(e.usage.output)} out`),r.join(` · `)}function Xt(e){return e.status===`thinking`||e.status===`working`||e.status===`waiting`}function Zt(e){let t=e.run,n=e=>t.pipe(g(t=>t[e]),p()),i=n(`status`);return a(`div`,{class:N.run,"data-status":i,"data-read":n(`read`).pipe(g(e=>e?``:void 0)),children:[r(h,{when:i,children:e=>r(b,{name:rn[e],size:14,class:N.mark})}),r(`span`,{class:N.runTitle,"data-tip-overflow":``,children:n(`title`)}),r(`span`,{class:N.runTime,children:n(`durationMs`).pipe(g(Jt))}),r(h,{when:n(`detail`),children:e=>r(`span`,{class:N.runDetail,children:e})}),r(h,{when:n(`progress`).pipe(g(e=>e!==void 0)),children:()=>r(`span`,{class:N.bar,children:r(`span`,{class:N.barFill,style:{width:n(`progress`).pipe(g(e=>`${Math.round((e??0)*100)}%`))}})})})]})}function Qt(e){let t=e.turn.pipe(g(e=>e.runs)),n=t.pipe(g(e=>e.map(e=>e.id)),p((e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n])));return r(`div`,{class:e.class,children:r(m,{each:n,children:e=>r(Zt,{run:t.pipe(g(t=>t.find(t=>t.id===e)),v(e=>!!e),p())})})})}function $t(e){return a(`button`,{type:`button`,class:N.undo,"data-tip":`Back to how it was before this request`,onClick:()=>e.agent.undo(e.id),children:[r(b,{name:`undo-2`,size:14}),`Undo turn`]})}function en(e){let{agent:t}=e,o=e=>{if(e.key!==`Escape`||e.defaultPrevented||t.view.value!==`card`||!t.turn.value)return;let n=e.target;n?.isContentEditable||n?.closest?.(`input, textarea, select, [role=listbox], [role=menu], [role=dialog], [data-msp-page], [popover]`)||(e.preventDefault(),e.stopPropagation(),t.dismiss())};document.addEventListener(`keydown`,o,!0),n(()=>document.removeEventListener(`keydown`,o,!0));let s=e=>ie([t.turn,t.view]).pipe(g(([t,n])=>n===e?t?.id:void 0),p());return a(i,{children:[r(h,{when:s(`line`),children:()=>r(tn,{agent:t})}),r(h,{when:s(`card`),children:n=>r(nn,{agent:t,id:n,onTrace:e.onTrace})})]})}function tn(e){let t=e.agent.turn.pipe(v(e=>!!e)),n=t.pipe(g(e=>e.status),p());return r(`span`,{class:N.line,"data-status":n,children:r(oe,{icon:r(b,{name:`sparkles`,size:14,class:N.spark}),text:t.pipe(g(e=>e.prompt)),after:r(`span`,{class:N.state,children:n.pipe(g(e=>an[e]))}),label:`Show the assistant’s turn`,onClick:()=>e.agent.reopen(),dismissLabel:`Hide`,onDismiss:()=>e.agent.hide()})})}function nn(e){let{agent:t,id:n}=e;return r(h,{when:n,children:()=>{let i=t.turn.pipe(v(e=>e?.id===n),p()),o=i.pipe(g(e=>e.status),p()),s=i.pipe(g(Xt),p()),c=i.pipe(g(e=>e.runs.find(e=>e.status===`waiting`)),p());return a(`section`,{class:N.card,"data-status":o,"aria-label":`Assistant`,"aria-live":`polite`,children:[a(`header`,{class:N.header,children:[r(b,{name:`sparkles`,size:14,class:N.spark}),r(`span`,{class:N.prompt,"data-tip-overflow":``,children:i.pipe(g(e=>e.prompt))}),r(`span`,{class:N.state,children:o.pipe(g(e=>an[e]))}),r(h,{when:s,children:()=>a(`button`,{type:`button`,class:N.stop,onClick:()=>t.stop(),children:[r(b,{name:`square`,size:10}),`Stop`]})}),r(`button`,{type:`button`,class:N.icon,"aria-label":`Close`,"data-tip":`Close (Esc)`,onClick:()=>t.dismiss(),children:r(b,{name:`x`,size:14})})]}),a(x,{class:N.body,contentClass:N.bodyContent,children:[r(h,{when:i.pipe(g(e=>e.text)),children:e=>r(`p`,{class:N.text,"data-streaming":s.pipe(g(e=>e?``:void 0)),children:e})}),r(h,{when:i.pipe(g(e=>e.retries??0)),children:e=>a(`p`,{class:N.note,children:[`Retried the model `,e===1?`once`:`${e} times`,` (the provider was busy)`]})}),r(Qt,{turn:i,class:N.runs})]}),r(h,{when:c,children:e=>a(`div`,{class:N.approval,role:`group`,"aria-label":`Approval`,children:[a(`span`,{class:N.approvalText,children:[`Allow “`,e.title,`”? `,r(`span`,{class:N.approvalWhy,children:e.detail})]}),r(`button`,{type:`button`,class:N.deny,onClick:()=>t.approve(e.id,!1),children:`Deny`}),r(`button`,{type:`button`,class:N.allow,onClick:()=>t.approve(e.id,!0),children:`Allow`})]})}),r(h,{when:s.pipe(g(e=>!e)),children:()=>a(`footer`,{class:N.footer,children:[r(`span`,{class:N.summary,children:i.pipe(g(Yt))}),e.onTrace?r(`button`,{type:`button`,class:N.trace,"data-tip":`Each step of this turn, in the Inspector`,onClick:()=>e.onTrace?.(n),children:`Trace`}):null,r(h,{when:i.pipe(g(e=>e.checkpoint&&!e.undone)),fallback:()=>r(h,{when:i.pipe(g(e=>!!e.undone)),children:()=>r(`span`,{class:N.undone,children:`Undone`})}),children:()=>r($t,{agent:t,id:n})})]})})]})}})}var rn,an,on;function sn(){return(sn=e((()=>{S(),re(),f(),ce(),_(),qt(),o(),rn={running:`loader-circle`,waiting:`hourglass`,done:`check`,failed:`x`,stopped:`ban`,denied:`ban`},an={thinking:`Thinking…`,working:`Working…`,waiting:`Waiting for you`,done:`Done`,stopped:`Stopped`,failed:`Failed`},on=e=>e>=1e3?`${(e/1e3).toFixed(1)}k`:`${e}`})))()}var P;function cn(){return(cn=e((()=>{s(),P={action:`msp-assistant-ai-setup-action`,caption:`msp-assistant-ai-setup-caption`,copy:`msp-assistant-ai-setup-copy`,error:`msp-assistant-ai-setup-error`,fold:`msp-assistant-ai-setup-fold`,grow:`msp-assistant-ai-setup-grow`,intro:`msp-assistant-ai-setup-intro`,keyForm:`msp-assistant-ai-setup-keyForm`,keyRow:`msp-assistant-ai-setup-keyRow`,label:`msp-assistant-ai-setup-label`,lead:`msp-assistant-ai-setup-lead`,link:`msp-assistant-ai-setup-link`,modelRow:`msp-assistant-ai-setup-modelRow`,note:`msp-assistant-ai-setup-note`,own:`msp-assistant-ai-setup-own`,ownFoot:`msp-assistant-ai-setup-ownFoot`,provider:`msp-assistant-ai-setup-provider`,providerHead:`msp-assistant-ai-setup-providerHead`,providerName:`msp-assistant-ai-setup-providerName`,providerState:`msp-assistant-ai-setup-providerState`,providers:`msp-assistant-ai-setup-providers`,refresh:`msp-assistant-ai-setup-refresh`,"refresh-spin":`msp-assistant-ai-setup-refresh-spin`,row:`msp-assistant-ai-setup-row`,scope:`msp-assistant-ai-setup-scope`,scopes:`msp-assistant-ai-setup-scopes`,scopesLabel:`msp-assistant-ai-setup-scopesLabel`,setup:`msp-assistant-ai-setup-setup`},c(`assistant/views/ai-setup.module.css`,`@layer msp.components {
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
`)})))()}function ln(e){let{settings:t}=e,n=t.providers.pipe(g(e=>e.some(e=>e.key)),p()),i=t.providers.pipe(g(e=>e.filter(e=>e.key).flatMap(e=>e.models.map(t=>[`${e.id}|${t}`,`${e.label} · ${t}`])))),o=y(!1),s=y(_n(t)?void 0:t.providers.value[0]?.id);return a(`section`,{class:P.setup,"aria-label":`AI assistant`,children:[r(h,{when:n.pipe(g(e=>!e)),children:()=>a(`div`,{class:P.intro,children:[r(`p`,{class:P.lead,children:`Add a model key to ask AI assistant`}),r(`p`,{class:P.copy,children:`It runs here with your own key for Claude, Gemini, GPT, or a server of your own; add as many as you like and pick the model. Everything else works without it.`})]})}),r(h,{when:n,children:()=>a(`div`,{class:`${P.row} ${P.modelRow}`,children:[r(`span`,{class:P.label,children:`Model`}),r(h,{when:i,children:e=>r(fe,{over:!0,size:`sm`,class:P.grow,"aria-label":`Model`,options:e,value:t.setup.pipe(g(e=>e?`${e.provider}|${e.model}`:``)),onChange:e=>{let[n,r]=e.split(`|`);t.choose({provider:n,model:r})}})}),r(pn,{settings:t})]})}),r(`p`,{class:P.caption,children:`Keys`}),r(`div`,{class:P.providers,children:r(m,{each:t.providers,children:e=>r(un,{settings:t,provider:e,editing:s})},e=>e.id)}),r(`button`,{type:`button`,class:P.fold,"aria-expanded":o.asReadonly,onClick:()=>o.set(!o.value),children:r(`span`,{children:`Your own endpoint`})}),r(h,{when:o.asReadonly,reveal:!0,children:()=>r(mn,{settings:t,onDone:()=>o.set(!1)})}),r(`p`,{class:P.note,children:`Keys go only to their provider. Kept ones are stored scrambled, so reading the browser’s storage as it is gives no working key (it does not guard against code running in this page). The model applies from the next request.`})]})}function un(e){let{settings:t,provider:n}=e,i=t.providers.pipe(g(t=>t.find(t=>t.id===e.provider.id)),p()),o=e.editing.asReadonly.pipe(g(e=>e===n.id),p()),s=()=>e.editing.set(e.editing.value===n.id?void 0:n.id);return a(`div`,{class:P.provider,children:[a(`div`,{class:P.providerHead,children:[r(`span`,{class:P.providerName,children:e.provider.label}),r(`span`,{class:P.providerState,"data-has":i.pipe(g(e=>e.key?``:void 0)),children:i.pipe(g(e=>e.key?e.key.from===`server`?`key from the server`:gn[e.key.scope]:`no key`))}),r(h,{when:i.pipe(g(e=>e.key?.from!==`server`)),children:()=>r(`button`,{type:`button`,class:P.link,onClick:s,children:ie([i,o]).pipe(g(([e,t])=>t?`Cancel`:e.key?`Change`:`Add key`))})}),r(h,{when:i.pipe(g(e=>e.key?.from===`here`)),children:()=>r(`button`,{type:`button`,class:P.link,onClick:()=>t.removeKey(e.provider.id),children:`Remove`})})]}),r(h,{when:o,reveal:!0,children:()=>r(dn,{label:`${e.provider.label} API key`,onSave:(n,r)=>{t.setKey(e.provider.id,n,r),e.editing.set(void 0)}})})]})}function dn(e){let t=``,n=y(`browser`),i=()=>{(t.trim()||e.optional)&&e.onSave(t.trim(),n.value)};return a(`div`,{class:P.keyForm,children:[a(`div`,{class:P.keyRow,children:[r(pe,{size:`sm`,type:`password`,class:P.grow,"aria-label":e.label,placeholder:e.label,onInput:e=>{t=e},onSubmit:i}),r(`button`,{type:`button`,class:P.action,onClick:i,children:e.action??`Save`})]}),r(fn,{scope:n})]})}function fn(e){return a(`div`,{class:P.scopes,role:`radiogroup`,"aria-label":`Keep the key`,children:[r(`span`,{class:P.scopesLabel,children:`Keep`}),hn.map(([t,n])=>r(`button`,{type:`button`,role:`radio`,class:P.scope,"aria-checked":e.scope.asReadonly.pipe(g(e=>e===t)),onClick:()=>e.scope.set(t),children:n}))]})}function pn(e){let t=y(!1);return r(`button`,{type:`button`,class:P.refresh,"aria-label":`Ask the providers for their models`,"data-tip":`Ask the providers for their models`,disabled:t.asReadonly,"data-busy":t.asReadonly.pipe(g(e=>e?``:void 0)),onClick:async()=>{t.set(!0);try{await e.settings.refreshModels()}finally{t.set(!1)}},children:r(b,{name:`refresh-cw`,size:14})})}function mn(e){let t={label:``,baseURL:``,key:``},n=y(`chat`),i=y(`browser`),o=y(``),s=y(`idle`),c=(e,n,i,o=`text`)=>a(`div`,{class:P.row,children:[r(`span`,{class:P.label,children:n}),r(pe,{size:`sm`,type:o,class:P.grow,"aria-label":n,placeholder:i,onInput:n=>{t[e]=n.trim()}})]});return a(`div`,{class:P.own,children:[c(`label`,`Name`,`e.g. Lab`),c(`baseURL`,`Endpoint`,`https://…/v1, or http://localhost:11434/v1`),a(`div`,{class:P.row,children:[r(`span`,{class:P.label,children:`API`}),r(fe,{over:!0,size:`sm`,class:P.grow,"aria-label":`API`,options:[[`chat`,`OpenAI chat completions`],[`responses`,`OpenAI Responses`]],value:n.asReadonly,onChange:e=>n.set(e)})]}),c(`key`,`Key`,`Optional for a local server`,`password`),r(fn,{scope:i}),a(`div`,{class:P.row,children:[r(`span`,{class:P.label,children:`Models`}),a(`div`,{class:P.keyRow,children:[r(pe,{size:`sm`,class:P.grow,"aria-label":`Models`,placeholder:`e.g. llama-4-scout, qwen3-coder`,value:o.asReadonly,onInput:e=>o.set(e)}),r(`button`,{type:`button`,class:P.link,disabled:s.asReadonly.pipe(g(e=>e===`busy`)),onClick:async()=>{s.set(`busy`);try{let n=await e.settings.listModels({baseURL:t.baseURL,key:t.key});o.set(n.join(`, `)),s.set(`idle`)}catch{s.set(`failed`)}},children:s.asReadonly.pipe(g(e=>e===`busy`?`Fetching…`:`Fetch`))})]})]}),r(h,{when:s.asReadonly.pipe(g(e=>e===`failed`)),children:()=>r(`p`,{class:P.error,children:`Could not list its models: check the endpoint, the key, and that it allows CORS.`})}),r(`p`,{class:P.note,children:`It must speak an OpenAI API, and allow this page to call it (CORS).`}),r(`div`,{class:P.ownFoot,children:r(`button`,{type:`button`,class:P.action,onClick:()=>{let r=o.value.split(/[,\s]+/).map(e=>e.trim()).filter(Boolean);t.label&&t.baseURL&&r.length&&(e.settings.addProvider({...t,scope:i.value,api:n.value,models:r}),e.onDone())},children:`Add`})})]})}var hn,gn,_n;function vn(){return(vn=e((()=>{S(),re(),f(),_(),cn(),o(),hn=[[`reload`,`Until reload`],[`session`,`This session`],[`browser`,`This browser`]],gn={reload:`key until reload`,session:`key for this session`,browser:`key kept in this browser`},_n=e=>e.providers.value.some(e=>e.key)})))()}var F;function yn(){return(yn=e((()=>{s(),F={caption:`msp-assistant-assistant-tab-caption`,content:`msp-assistant-assistant-tab-content`,detail:`msp-assistant-assistant-tab-detail`,hint:`msp-assistant-assistant-tab-hint`,inspect:`msp-assistant-assistant-tab-inspect`,link:`msp-assistant-assistant-tab-link`,tab:`msp-assistant-assistant-tab-tab`},c(`assistant/views/assistant-tab.module.css`,`@layer msp.components {
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
`)})))()}function bn(e){let{inspect:t}=e;return a(x,{class:F.tab,contentClass:F.content,children:[r(ln,{settings:e.agent.settings}),t?a(`section`,{class:F.inspect,"aria-label":`Inspect`,children:[r(`p`,{class:F.caption,children:`Inspect`}),t.links.map(e=>a(`button`,{type:`button`,class:F.link,onClick:()=>t.open(e.id),children:[r(`span`,{children:e.label}),r(`span`,{class:F.detail,children:e.detail})]}))]}):null,a(`p`,{class:F.hint,children:[`Ask from the command menu (⌘K): type what you want, then `,r(`strong`,{children:`Ask AI assistant`}),`. Its work shows over the canvas and in History, and undoes in one step.`]})]})}function xn(){return(xn=e((()=>{S(),vn(),yn(),o()})))()}var I;function Sn(){return(Sn=e((()=>{s(),I={answer:`msp-assistant-history-tab-answer`,checkpoint:`msp-assistant-history-tab-checkpoint`,checkpointMark:`msp-assistant-history-tab-checkpointMark`,checkpointText:`msp-assistant-history-tab-checkpointText`,chevron:`msp-assistant-history-tab-chevron`,empty:`msp-assistant-history-tab-empty`,fold:`msp-assistant-history-tab-fold`,item:`msp-assistant-history-tab-item`,list:`msp-assistant-history-tab-list`,listContent:`msp-assistant-history-tab-listContent`,prompt:`msp-assistant-history-tab-prompt`,runs:`msp-assistant-history-tab-runs`,spark:`msp-assistant-history-tab-spark`,switch:`msp-assistant-history-tab-switch`,switchButton:`msp-assistant-history-tab-switchButton`,tab:`msp-assistant-history-tab-tab`,turn:`msp-assistant-history-tab-turn`,turnHead:`msp-assistant-history-tab-turnHead`,undo:`msp-assistant-history-tab-undo`,when:`msp-assistant-history-tab-when`,who:`msp-assistant-history-tab-who`},c(`assistant/views/history-tab.module.css`,`@layer msp.components {
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
`)})))()}function Cn(e){let t=Math.max(0,(Date.now()-e.getTime())/1e3);return t<45?`just now`:t<3600?`${Math.round(t/60)} min ago`:e.toLocaleTimeString(void 0,{hour:`2-digit`,minute:`2-digit`})}function wn(e){let{agent:t}=e,n=y(`commands`),i=t.history.pipe(g(e=>e.map(En).reverse()),p((e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]))),o=e=>t.history.pipe(g(t=>t.find(t=>En(t)===e)),v(e=>!!e),p());return a(`div`,{class:I.tab,children:[r(`div`,{class:I.switch,role:`tablist`,"aria-label":`History`,children:[`commands`,`messages`].map(e=>r(`button`,{type:`button`,role:`tab`,class:I.switchButton,"aria-selected":n.asReadonly.pipe(g(t=>t===e)),onClick:()=>n.set(e),children:e===`commands`?`Commands`:`Messages`}))}),r(h,{when:n.asReadonly.pipe(g(e=>e===`commands`)),fallback:()=>r(se,{status:e.status}),children:()=>r(x,{class:I.list,contentClass:I.listContent,role:`log`,"aria-label":`Commands`,children:r(m,{each:i,fallback:()=>r(`p`,{class:I.empty,children:`Nothing run yet. Commands and the assistant’s work show here.`}),children:e=>{let n=t.history.value.find(t=>En(t)===e);return n.kind===`run`?a(`div`,{class:I.item,children:[r(Zt,{run:o(e).pipe(g(e=>e.run))}),r(`span`,{class:I.when,children:Cn(n.run.time)})]}):r(Tn,{agent:t,turn:o(e).pipe(g(e=>e.turn)),id:e,time:n.turn.time})}})})})]})}function Tn(e){let{agent:t,turn:n,id:i}=e,o=y(!1),s=n.pipe(g(Xt),p()),c=n.pipe(g(e=>!!e.undone),p());return a(`section`,{class:I.turn,"data-undone":c.pipe(g(e=>e?``:void 0)),"aria-label":`Assistant turn`,children:[a(`div`,{class:I.turnHead,children:[r(b,{name:`sparkles`,size:14,class:I.spark}),r(`span`,{class:I.who,children:n.pipe(g(e=>e.source.kind===`agent`?e.source.name:`Assistant`))}),r(`span`,{class:I.when,children:Cn(e.time)})]}),a(`p`,{class:I.prompt,children:[`“`,n.pipe(g(e=>e.prompt)),`”`]}),r(h,{when:n.pipe(g(e=>Xt(e)?``:e.text)),children:e=>r(`p`,{class:I.answer,children:e})}),a(`button`,{type:`button`,class:I.fold,"aria-expanded":o.asReadonly,onClick:()=>o.set(!o.value),children:[r(`span`,{children:n.pipe(g(Yt))}),r(b,{name:`chevron-down`,size:14,class:I.chevron})]}),r(h,{when:ie([o.asReadonly,s]).pipe(g(([e,t])=>e||t)),reveal:!0,children:()=>r(Qt,{turn:n,class:I.runs})}),r(h,{when:n.pipe(g(e=>!Xt(e))),children:()=>a(`div`,{class:I.checkpoint,children:[r(b,{name:`undo-2`,size:12,class:I.checkpointMark}),r(`span`,{class:I.checkpointText,children:n.pipe(g(e=>e.undone?`Undone: back to how it was before`:e.checkpoint?`Checkpoint before it`:e.runs.some(e=>!e.read)?`No longer undoable: something came after it`:`Nothing to undo`))}),r(h,{when:n.pipe(g(e=>e.checkpoint&&!e.undone)),children:()=>r($t,{agent:t,id:i})})]})})]})}var En;function Dn(){return(Dn=e((()=>{S(),re(),f(),ce(),_(),sn(),Sn(),o(),En=e=>e.kind===`run`?e.run.id:e.turn.id})))()}function On(e){let t=e.toLowerCase();if(/superpose|align|load|download|fetch/.test(t))return{thinking:`I will fetch 1W0E and superpose it on 1TQN by their A chains.`,retries:1,steps:[{command:`scene.get`,title:`Read the scene`,ms:300,read:!0,detail:`1 structure: 1TQN`},{command:`data.download-structure`,title:`Download 1W0E from PDBe`,ms:1600,progress:!0,approval:`Fetches data from www.ebi.ac.uk`,detail:`1W0E: 1 model, 3,898 atoms`},{command:`superpose.chains`,title:`Superpose 1W0E on 1TQN (chain A)`,ms:900,detail:`RMSD 0.38 Å over 412 Cα`},{command:`camera.reset`,title:`Reset the camera`,ms:300}],answer:`Loaded 1W0E and superposed it on 1TQN by chain A (RMSD 0.38 Å over 412 Cα atoms).`};let n=/\b(red|blue|green|yellow|orange|purple|white|black|gr[ae]y)\b/.exec(t)?.[1];return/\b(colou?r|paint)\b/.test(t)&&n?{thinking:`Coloring every representation of every structure ${n}, uniformly.`,steps:[{command:`scene.get`,title:`Read the scene`,ms:300,read:!0,detail:`1TQN: 4 representations`},{command:`structure.set-color`,title:`Color all representations ${n} (uniform)`,ms:1200,progress:!0,detail:`4 representations in 1TQN`}],answer:`Colored all 4 representations of 1TQN ${n}. Undo turn brings the colors back.`}:/fail|broken|error/.test(t)?{thinking:`Trying to color by the custom property.`,steps:[{command:`scene.get`,title:`Read the scene`,ms:300,read:!0},{command:`structure.set-color`,title:`Color by B-factor (custom range)`,ms:600,fail:`No B-factor values in the selection`}],answer:`The selection has no B-factor values, so I could not color by them. Try a different theme?`}:{thinking:`Looking at the heme pocket: I will select the residues around HEM 508 and give them a component.`,steps:[{command:`scene.get`,title:`Read the scene`,ms:300,read:!0,detail:`1TQN: polymer, ligand, water`},{command:`select.residues`,title:`Select residues within 5 Å of HEM 508`,ms:500,detail:`23 residues in chain A`},{command:`structure.component.add`,title:`Add component “Active site” from the selection`,ms:700},{command:`structure.add-representation`,title:`Show “Active site” as ball & stick`,ms:900,progress:!0},{command:`camera.focus`,title:`Focus the view on “Active site”`,ms:400}],answer:`Made an “Active site” component (23 residues around HEM 508), shown as ball & stick, and focused the view on it.`}}function kn(e,t){let n=/\b(red|blue|green|yellow|orange|purple|white|black|gr[ae]y)\b/;return{ready:()=>!!e.settings.setup.value,propose(e){let t=e.toLowerCase(),r=n.exec(t);if(/\b(colou?r|paint|make)\b/.test(t)&&r&&!/\b(and|everything|all|each|every)\b/.test(t))return{command:`selection.color`,tail:r[1]};let i=/\b(?:fetch|download|load|open)\s+(?:pdb\s+)?([0-9][a-z0-9]{3})\b/.exec(t);if(i&&!/\b(and|superpose|align)\b/.test(t))return{command:`data.download-structure`,tail:i[1]};let a=/^(?:focus|zoom)(?: in)?(?: on)?\s+(.+)$/.exec(t);if(a)return{command:`focus.target`,tail:a[1]}},ask:t=>e.ask(t),setup:t}}var L,An,jn,Mn,R,Nn;function Pn(){return(Pn=e((()=>{S(),L={kind:`agent`,name:`Mol* assistant`},An={kind:`person`},jn=[{id:`anthropic`,label:`Anthropic`,family:`anthropic`,models:[`claude-sonnet-5-5`,`claude-opus-5-5`,`claude-haiku-5-5`]},{id:`google`,label:`Gemini`,family:`google`,models:[`gemini-3.8-flash`,`gemini-3.8-pro`]},{id:`openai`,label:`OpenAI`,family:`openai`,models:[`gpt-6-luna`,`gpt-6-luna-mini`]}],Mn=class{#e;#t;constructor(e,t){this.post=e,this.#e=y(jn),this.#t=y(void 0),this.providers=this.#e.asReadonly,this.setup=this.#t.asReadonly,t&&(this.#n(`anthropic`,{key:{from:`here`,scope:`browser`}}),this.#t.set({provider:`anthropic`,model:`claude-sonnet-5-5`}))}setKey(e,t,n){if(!t.trim())return;this.#n(e,{key:{from:`here`,scope:n}});let r=this.#e.value.find(t=>t.id===e);this.#t.value||this.#t.set({provider:e,model:r.models[0]});let i={reload:`until the page reloads`,session:`for this session`,browser:`in this browser`}[n];this.post(`Key saved for ${r.label}, kept ${i}`,`success`)}removeKey(e){if(this.#n(e,{key:void 0}),this.#t.value?.provider===e){let e=this.#e.value.find(e=>e.key);this.#t.set(e?{provider:e.id,model:e.models[0]}:void 0)}}choose(e){this.#t.set(e)}async refreshModels(e){await new Promise(e=>setTimeout(e,700));let t={anthropic:[`claude-fable-5-1`],google:[`gemini-3.8-flash-lite`],openai:[`gpt-6-luna-nano`]};this.#e.set(this.#e.value.map(n=>n.key&&(!e||n.id===e)&&t[n.id]?{...n,models:[...new Set([...n.models,...t[n.id]])]}:n)),this.post(`Model lists updated from the providers`,`success`)}async listModels(e){if(await new Promise(e=>setTimeout(e,700)),!/^https?:\/\//.test(e.baseURL))throw Error(`Not a URL`);return[`llama-4-scout`,`qwen3-coder-next`,`mistral-large-3`]}addProvider(e){let t=`custom:${e.label.toLowerCase().replace(/[^a-z0-9]+/g,`-`)}`;this.#e.set([...this.#e.value,{id:t,label:e.label,family:`openai`,baseURL:e.baseURL,key:e.key?{from:`here`,scope:e.scope}:void 0,models:e.models}]),this.#t.set({provider:t,model:e.models[0]}),this.post(`Added ${e.label}`,`success`)}#n(e,t){this.#e.set(this.#e.value.map(n=>n.id===e?{...n,...t}:n))}},R=(e,t)=>new Promise((n,r)=>{let i=setTimeout(n,e);t.addEventListener(`abort`,()=>{clearTimeout(i),r(Error(`stopped`))})}),Nn=class{#e;#t;#n;#r;#i;#a;constructor(e,t={}){this.post=e,this.#e=y(void 0),this.#t=y(`none`),this.#n=y([]),this.#r=0,this.turn=this.#e.asReadonly,this.view=this.#t.asReadonly,this.history=this.#n.asReadonly,this.settings=new Mn(e,t.configured),t.history&&this.#d()}record(e,t,n){this.#o();let r={id:`run-${++this.#r}`,command:t,title:e,source:An,status:`done`,detail:n,time:new Date};this.#n.set([...this.#n.value,{kind:`run`,run:r}])}ask(e){this.#i&&this.stop(),this.#o();let t=On(e),n={id:`turn-${++this.#r}`,prompt:e,source:L,status:`thinking`,text:``,runs:[],checkpoint:!1,time:new Date};this.#s(n),this.#u(n.id,t)}stop(){this.#i?.abort()}approve(e,t){this.#e.value?.runs.some(t=>t.id===e&&t.status===`waiting`)&&this.#a?.(t)}undo(e){let t=this.#n.value.find(t=>t.kind===`turn`&&t.turn.id===e);t&&t.kind===`turn`&&t.turn.checkpoint&&!t.turn.undone&&(this.#c(e,e=>({...e,undone:!0,checkpoint:!1})),this.post(`Undid “${t.turn.prompt}”`,`success`))}#o(){if(!this.#n.value.some(e=>e.kind===`turn`&&e.turn.checkpoint))return;this.#n.set(this.#n.value.map(e=>e.kind===`turn`&&e.turn.checkpoint?{kind:`turn`,turn:{...e.turn,checkpoint:!1}}:e));let e=this.#e.value;e?.checkpoint&&this.#e.set({...e,checkpoint:!1})}dismiss(){this.#t.value===`card`&&this.#t.set(`line`)}hide(){this.#t.set(`none`)}reopen(){this.#e.value&&this.#t.set(`card`)}#s(e){this.#e.set(e),this.#t.set(`card`),this.#n.set([...this.#n.value,{kind:`turn`,turn:e}])}#c(e,t){let n;this.#n.set(this.#n.value.map(r=>r.kind!==`turn`||r.turn.id!==e?r:(n=t(r.turn),{kind:`turn`,turn:n}))),n&&this.#e.value?.id===e&&this.#e.set(n)}#l(e,t,n){this.#c(e,e=>({...e,runs:e.runs.map(e=>e.id===t?{...e,...n}:e)}))}async#u(e,t){let n=new AbortController;this.#i=n;let r=Date.now(),i={input:2400,output:0};try{for(let r of t.thinking.split(` `))await R(45,n.signal),i={input:i.input,output:i.output+2},this.#c(e,e=>({...e,text:e.text?`${e.text} ${r}`:r,usage:i}));t.retries&&(await R(400,n.signal),this.#c(e,e=>({...e,retries:t.retries}))),this.#c(e,e=>({...e,status:`working`}));for(let a of t.steps){let t={id:`run-${++this.#r}`,command:a.command,title:a.title,source:L,status:`running`,read:a.read,approval:!!a.approval,time:new Date};if(this.#c(e,e=>({...e,checkpoint:e.checkpoint||!a.read,runs:[...e.runs,t]})),a.approval){this.#l(e,t.id,{status:`waiting`,detail:a.approval}),this.#c(e,e=>({...e,status:`waiting`}));let i=await new Promise((e,t)=>{this.#a=e,n.signal.addEventListener(`abort`,()=>t(Error(`stopped`)))});if(this.#a=void 0,!i){this.#l(e,t.id,{status:`denied`,detail:`Not allowed`}),this.#c(e,e=>({...e,status:`done`,text:`You did not allow the download, so I stopped there.`,durationMs:Date.now()-r})),this.#i=void 0;return}this.#l(e,t.id,{status:`running`,detail:void 0}),this.#c(e,e=>({...e,status:`working`}))}let o=Date.now();if(a.progress)for(let r=1;r<=10;r++)await R(a.ms/10,n.signal),this.#l(e,t.id,{progress:r/10});else await R(a.ms,n.signal);let s=a.fail?`failed`:`done`;if(this.#l(e,t.id,{status:s,detail:a.fail??a.detail,progress:void 0,durationMs:Date.now()-o}),i={input:i.input+900,output:i.output+60},this.#c(e,e=>({...e,usage:i})),a.fail)break}await R(200,n.signal),this.#c(e,e=>({...e,status:t.steps.some(e=>e.fail)?`failed`:`done`,text:t.answer,durationMs:Date.now()-r}))}catch{this.#c(e,e=>({...e,status:`stopped`,runs:e.runs.map(e=>e.status===`running`||e.status===`waiting`?{...e,status:`stopped`}:e),durationMs:Date.now()-r}))}finally{this.#i===n&&(this.#i=void 0)}}#d(){let e=e=>new Date(Date.now()-e*6e4),t=(t,n,r,i={})=>({id:`run-${++this.#r}`,command:n,title:t,source:An,status:`done`,time:e(r),...i}),n={id:`turn-${++this.#r}`,prompt:`show the active site around the heme`,source:L,status:`done`,text:`Made an “Active site” component (23 residues around HEM 508), shown as ball & stick, and focused the view on it.`,runs:[{...t(`Read the scene`,`scene.get`,6),source:L,read:!0,durationMs:120},{...t(`Select residues within 5 Å of HEM 508`,`select.residues`,6),source:L,detail:`23 residues`},{...t(`Add component “Active site” from the selection`,`structure.component.add`,6),source:L},{...t(`Show “Active site” as ball & stick`,`structure.add-representation`,6),source:L},{...t(`Focus the view on “Active site”`,`camera.focus`,6),source:L}],checkpoint:!1,usage:{input:6100,output:240},time:e(6),durationMs:4200};this.#n.set([{kind:`run`,run:t(`Download 1TQN from PDBe`,`data.download-structure`,9,{detail:`1 model`})},{kind:`run`,run:t(`Apply preset: Polymer & ligand`,`preset.polymer-and-ligand`,8)},{kind:`turn`,turn:n},{kind:`run`,run:t(`Color the selection red`,`selection.color`,3)},{kind:`run`,run:t(`Take snapshot “Overview”`,`snapshot.add`,1)}])}}})))()}function Fn(){let e=0;return{model:(t,n,r,i)=>{e+=1;let a=r.tokens&&{input:r.tokens[0],output:r.tokens[1],...r.cached!==!1&&r.tokens[0]>3200?{cached:Math.round(r.tokens[0]*.82)}:{}};return{kind:`model`,id:`s${e}`,callId:`call-${e}`,model:r.model??Un,attempts:i??[{ordinal:1,start:t,...r.firstOutput?{firstOutput:r.firstOutput}:{},...n===void 0?{}:{end:n},status:n===void 0?`running`:`succeeded`}],...a?{tokens:{...a,credits:In(a)}}:{},...r.reply?{reply:r.reply,finish:`complete`}:{},...r.toolCalls?{toolCalls:r.toolCalls,finish:`tool-calls`}:{},...r.under?{under:r.under}:{}}},tool:(t,n,r,i,a,o={})=>{e+=1;let s=n===void 0?`running`:o.failed?`failed`:`succeeded`;return{kind:`tool`,id:`s${e}`,callId:`call-${e}`,toolId:r,name:r,...o.title?{title:o.title}:{},...o.read?{read:!0}:{},args:i,status:s,...a===void 0?{}:{result:a},attempts:[{ordinal:1,start:t,...n===void 0?{}:{end:n},status:s,...o.failed&&a?{failure:a.split(`
`)[0]}:{}}],...o.changed?{changed:o.changed.map(([e,t])=>({id:e,label:t}))}:{}}}}}function In(e){let t=e.cached??0;return((e.input-t)*1+t*.1+e.output*5)/1e3}function z(e,t,n,r={}){return{id:e,name:e,description:t,input:n,read:r.read??!1,approval:r.approval??!1,enabled:r.enabled??!0,state:r.state??`offered`,tokens:B(JSON.stringify({name:e,description:t,input:n})),...r.loadedAtTurn===void 0?{}:{loadedAtTurn:r.loadedAtTurn},...r.extra?{extra:!0}:{},...r.unavailable?{unavailable:r.unavailable}:{}}}function Ln(e){let{model:t,tool:n}=Fn(),r=[t(0,1650,{toolCalls:[`structure.load(source="pdb", id="1tqn")`],tokens:[3120,24],firstOutput:1300}),n(1660,2900,`structure.load`,{source:`pdb`,id:`1tqn`},`Loaded 1TQN: Cytochrome P450 3A4 with heme and metyrapone. 1 model, chain A (residues 27-499); ligand HEM 508.
Added: 1tqn, 1tqn.polymer, 1tqn.ligand.`,{title:`Load 1TQN from PDBe`,changed:[[`1tqn`,`1TQN`]]}),t(2910,4700,{toolCalls:[`selection.set(target={"ligand":"HEM"})`,`representation.set(target="selection", type="ball-and-stick")`],tokens:[3390,86],firstOutput:4100}),n(4710,4760,`selection.set`,{target:{ligand:`HEM`}},`Selected HEM 508 (A): 43 atoms.`,{title:`Select HEM 508`}),n(4761,5200,`representation.set`,{target:`selection`,type:`ball-and-stick`},`Ball-and-stick on HEM 508 (A).
Changed: 1tqn.ligand.`,{title:`Show HEM 508 as ball-and-stick`,changed:[[`1tqn.ligand`,`HEM 508`]]}),t(5210,6500,{toolCalls:[`camera.focus(target="selection")`],tokens:[3610,31],firstOutput:6e3}),n(6510,7300,`camera.focus`,{target:`selection`},`The camera is on HEM 508 (radius 9.2 Å).`,{title:`Focus the camera on HEM 508`}),t(7310,8400,{reply:`Loaded 1TQN and showed its heme (HEM 508) as ball-and-stick, with the camera on it.`,tokens:[3700,28],firstOutput:7900})],i=[t(6e4,63100,{toolCalls:[`disclose_skills(skills=["selections"])`],tokens:[3980,18]},[{ordinal:1,start:6e4,end:60380,status:`failed`,failure:`429 Too many requests: the rate limit for claude-sonnet-4-5`},{ordinal:2,start:61880,firstOutput:62600,end:63100,status:`succeeded`,waitBefore:{reason:`rate limited`,ms:1500}}]),n(63110,63130,`disclose_skills`,{skills:[`selections`]},`Loaded skill selections: its guidance and 2 tools (query_reference, bounds.get).`,{title:`Load the selections skill`}),{...t(63140,65600,{toolCalls:[`query_reference(symbols=["within"])`],tokens:[5240,22],firstOutput:64900,cached:!1}),prefixBreak:{reason:`the tool definitions changed (the selections skill loaded)`,kept:1,of:9}},n(65610,65640,`query_reference`,{symbols:[`within`]},`within D of S: atoms within D Å of selection S (D a number; S any selection). Example: within 5 of resname HEM.
See also: around, beyond, byres.`,{title:`Look up “within”`,read:!0}),t(65650,67700,{toolCalls:[`selection.set(expression="byres (within 5 of resn HEM) and polymer")`],tokens:[5520,44],firstOutput:67100}),n(67710,67760,`selection.set`,{expression:`byres (within 5 of resn HEM) and polymer`},`Could not read the expression: unknown keyword "resn" at 17.
Did you mean resname? Keywords: resname, resi, chain, name, elem.`,{title:`Select the residues near HEM`,failed:!0}),t(67770,69500,{toolCalls:[`selection.set(expression="byres (within 5 of resname HEM) and polymer")`,`representation.set(target="selection", type="ball-and-stick", color="by residue type")`],tokens:[5700,61],firstOutput:68900}),n(69510,69600,`selection.set`,{expression:`byres (within 5 of resname HEM) and polymer`},`Selected 24 residues in chain A: PHE 57, ARG 105, ILE 118, ALA 297, THR 309, CYS 442 and 18 more.`,{title:`Select the residues near HEM`})],a=n(69601,71900,`representation.set`,{target:`selection`,type:`ball-and-stick`,color:`by residue type`},`Colored 24 residues by residue name (theme residue-name), as ball-and-stick.
Changed: 1tqn.site.`,{title:`Color the selection by residue type`,changed:[[`1tqn.site`,`24 residues`]]});i.push(a,t(69700,71500,{reply:`{ "theme": "residue-name" }`,tokens:[640,12],firstOutput:71300,under:a.callId,model:Wn}),t(71910,73300,{reply:`Selected the 24 residues within 5 Å of the heme and colored them by residue type.`,tokens:[5980,34],firstOutput:72800}));let o=[t(12e4,121900,{toolCalls:[`scene.get()`],tokens:[6200,9],firstOutput:121700}),n(121910,121950,`scene.get`,{},rr,{title:`Read the scene`,read:!0}),...e?[t(121960,void 0,{})]:[t(121960,123800,{toolCalls:[`representation.set(target="1tqn.site", type="ball-and-stick", transparency=0)`,`camera.focus(target="1tqn.site", radius=4)`],tokens:[6950,70],firstOutput:123100}),n(123810,124300,`representation.set`,{target:`1tqn.site`,type:`ball-and-stick`,transparency:0},`Ball-and-stick on 1tqn.site (24 residues).
Changed: 1tqn.site.`,{title:`Show the site as ball-and-stick`,changed:[[`1tqn.site`,`24 residues`]]}),n(124310,125100,`camera.focus`,{target:`1tqn.site`,radius:4},`The camera is on 1tqn.site.`,{title:`Focus the camera on the site`}),t(125110,126400,{reply:`The active site: the heme with the 24 residues around it, the camera on them.`,tokens:[7180,26],firstOutput:126e3})]];return[Rn(`turn-1`,`Load 1TQN and show the heme as ball-and-stick`,void 0,r),Rn(`turn-2`,`Select the residues within 5 Å of the heme and color them by residue type`,`selection: HEM 508 (A), 43 atoms`,i),Rn(`turn-3`,`Show the active site around the heme and focus on it`,`selection: 24 residues (A)`,o,e?`thinking`:`done`)]}function Rn(e,t,n,r,i=`done`){let a=r.filter(e=>e.kind===`model`),o=r[0]?.attempts[0]?.start??0,s=r.at(-1)?.attempts.at(-1)?.end,c=e=>a.reduce((t,n)=>t+(n.tokens?e(n.tokens):0),0),l=i===`done`||i===`stopped`||i===`failed`;return{id:e,prompt:t,...n?{focus:n}:{},status:i,start:o,...l&&s!==void 0?{end:s}:{},tokens:{input:c(e=>e.input),output:c(e=>e.output),cached:c(e=>e.cached??0),credits:c(e=>e.credits??0)},steps:r,milestones:[{position:0,at:o,kind:`start`,detail:`request appended`},...r.filter(e=>e.under===void 0).flatMap((e,t)=>{let n=e.attempts.at(-1)?.end;return n===void 0?[]:[{position:t+1,at:n,kind:`${e.kind===`model`?`model`:`tools`} completed`}]}),...l&&s!==void 0?[{position:r.length+1,at:s,kind:`end`,detail:i}]:[]]}}function zn(e){let t=[],n=0,r=!1,i=[er,tr,nr],a=()=>{let e=r?[...U,...qn]:U;return[{role:`system`,part:`guidance`,title:`Guidance`,text:Gn,tokens:B(Gn)*4},...r?[{role:`system`,part:`guidance`,title:`Skill: selections`,text:V,tokens:B(V)}]:[],{role:`tools`,part:`tools`,title:`${e.length} tool definitions`,text:$n(e),tokens:e.reduce((e,t)=>e+t.tokens,0)}]};return e.map((e,o)=>{let s=i[o]??``;t.push({role:`user`,part:`state`,title:`State`,text:s,tokens:B(s)*3});let c=`${e.focus?`Focus: ${e.focus}\n\n`:``}Request: ${e.prompt}`;t.push({role:`user`,part:`conversation`,title:`Request`,text:c,tokens:B(c)});let l=e.steps.map(e=>{if(e.kind===`model`){if(e.under!==void 0){let t=`Which Mol* color theme do these words mean? "by residue type". Answer as JSON: { "theme": id }.`;return{...e,window:{entries:[{role:`user`,part:`conversation`,title:`Request`,text:t,tokens:B(t),fresh:!0}],limit:2e5}}}let r=[...a(),...t.map((e,t)=>t>=n?{...e,fresh:!0}:e)];n=t.length;let i=e.reply??(e.toolCalls??[]).join(`
`);return e.attempts.at(-1)?.end!==void 0&&t.push({role:`assistant`,part:`conversation`,title:e.reply?`Reply`:`Tool calls`,text:i,tokens:e.tokens?.output??B(i)}),{...e,window:{entries:r,limit:2e5}}}return e.status!==`running`&&t.push({role:`tool`,part:`conversation`,title:`${e.name} result`,text:e.result??``,tokens:B(e.result??``),...e.status===`failed`?{failed:!0}:{}}),e.name===`disclose_skills`&&(r=!0),e});return{...e,steps:l}})}function Bn(e={}){let t=!!e.running,n=zn(Ln(t)),r=n.at(-1),i=r.tokens.input-(r.tokens.cached??0);return{harnessId:`h-viewer-7c1e2a`,execution:{seq:t?118:131,headId:t?`5dcdfe502d9e7e2f003fd34f12345509`:`a41f0c9e8b27d6e35f1c0a9b8e7d6c5b`,runner:t?`live`:`none`,...t?{lease:{worker:`tab-1`,renewsInMs:6200,leaseMs:1e4},pendingStep:`model`}:{}},budget:{consumed:i,ceiling:4e5,kind:`uncachedInput`,dimension:`uncached input`,scope:`latest turn`,...r.tokens.credits===void 0?{}:{credits:r.tokens.credits}},preamble:{guidance:Gn,guidanceTokens:B(Gn)*4,tools:Qn(U),toolsTokens:U.reduce((e,t)=>e+t.tokens,0)},turns:n,loaded:[...U.map(e=>({id:e.id,name:e.name})),...qn.map(e=>({id:e.id,name:e.name,turn:2}))],declared:Xn.map(e=>e.id)}}function Vn(e){let t=e?.turns.at(-1),n=t?.steps??[],r=t?.tokens,i=e?.turns.reduce((e,t)=>e+(t.tokens.credits??0),0),a=e=>Math.round((e??0)*100)/100;return{groups:[{id:`budget`,title:`Turn budget`,note:`What one turn may use: it stops when one runs out. The bars are the latest turn; each limit goes up to its ceiling, from the next turn.`,rows:[{key:`modelCalls`,label:`Model calls`,note:`requests to the model in one turn`,unit:`calls`,value:24,default:24,used:n.filter(e=>e.kind===`model`).length,ceiling:100,editable:!0},{key:`toolCalls`,label:`Tool calls`,note:`commands the agent runs in one turn`,unit:`calls`,value:64,default:64,used:n.filter(e=>e.kind===`tool`).length,ceiling:256,editable:!0},{key:`uncachedInput`,label:`Uncached input`,note:`tokens the provider reads anew`,unit:`tokens`,value:4e5,default:4e5,used:r?r.input-(r.cached??0):0,ceiling:32e5,step:1e3,editable:!0},{key:`cacheRead`,label:`Cache reads`,note:`input served from the provider’s cache`,unit:`tokens`,value:4e6,default:4e6,used:r?.cached??0,ceiling:16e6,step:1e3,editable:!0},{key:`output`,label:`Output`,note:`what the model writes, reasoning included`,unit:`tokens`,value:32e3,default:32e3,used:r?.output??0,ceiling:128e3,step:1e3,editable:!0}]},{id:`model`,title:`Model`,note:`For ${Un}; applies from the next request.`,rows:[{key:`contextWindow`,label:`Context window`,note:`the most the model reads at once`,unit:`tokens`,value:2e5,default:2e5,ceiling:1e6,step:1e3,editable:!0},{key:`compaction`,label:`Compaction trigger`,note:`older turns are summarized past this share of the window`,unit:`%`,value:80,default:80,ceiling:95,editable:!0},{key:`thinking`,label:`Thinking`,note:`how long it may reason before it answers`,unit:``,value:1,default:1,choices:[{value:0,label:`Off`},{value:1,label:`Low`},{value:2,label:`Medium`},{value:3,label:`High`}],editable:!0}]},{id:`credits`,title:`Credits`,note:`What the agent costs, in the app’s credits (1 credit is 1,000 uncached input tokens on the default model). Shown, never a limit.`,rows:[{key:`credits.turn`,label:`Latest turn`,unit:`credits`,value:a(r?.credits),default:a(r?.credits),editable:!1},{key:`credits.session`,label:`This session`,unit:`credits`,value:a(i),default:a(i),editable:!1}]}]}}function Hn(e={}){let t=e.empty?void 0:Bn(e),n=y(Vn(t));return new ke({trace:y(t).asReadonly,tools:y(Zn).asReadonly,limits:n.asReadonly,setLimit:(e,t)=>n.set({groups:n.value.groups.map(n=>({...n,rows:n.rows.map(n=>n.key===e?{...n,value:t??n.default}:n)}))})})}var B,Un,Wn,Gn,V,Kn,H,U,qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr;function ir(){return(ir=e((()=>{S(),Ae(),B=e=>Math.max(1,Math.round(e.length/4)),Un=`claude-sonnet-4-5`,Wn=`claude-haiku-4-5`,Gn=`You work in Mol*, a molecular viewer, for the person at the screen. You act only through tools: the viewer's commands.

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
3. bounds.get measures what a selection spans, before you frame it.`,Kn=`Skill volumes: density maps drawn with the structure.

1. volume.load brings a map in: an EMDB entry, a PDB entry's X-ray density, or a file.
2. volume.set_look draws it: an isosurface at a level (relative or absolute), or a slice.`,H={description:`What it acts on: "selection", a structure id ("1tqn"), or a component id ("1tqn.ligand").`,anyOf:[{type:`string`},{type:`object`,properties:{ligand:{type:`string`}}}]},U=[z(`scene.get`,`The scene in detail: every structure with its components, representations and colors, the selection, the camera. Read-only.`,{type:`object`,properties:{structure:{type:`string`,description:`Only this structure (its id).`}}},{read:!0,state:`loaded`}),z(`structure.load`,`Load a structure: a PDB or AlphaFold DB entry by id, or a URL. Asks first: it fetches from a server.`,{type:`object`,properties:{source:{type:`string`,enum:[`pdb`,`afdb`,`url`],description:`Where it comes from.`},id:{type:`string`,description:`The entry id ("1tqn", "P69905"), or the URL.`},assembly:{type:`string`,description:`An assembly id; the first by default.`}},required:[`id`]},{approval:!0,state:`loaded`}),z(`selection.set`,`Set the selection: a component, a ligand, residues, or an expression. Replaces what is selected unless mode says otherwise.`,{type:`object`,properties:{target:H,expression:{type:`string`,description:`An expression, in PyMOL syntax or MolQL (with the selections skill).`},mode:{type:`string`,enum:[`set`,`add`,`remove`],description:`How it combines with the selection.`}}},{state:`loaded`}),z(`representation.set`,`Show a target as a representation, or restyle what is shown of it: its type, color and transparency.`,{type:`object`,properties:{target:H,type:{type:`string`,enum:[`cartoon`,`ball-and-stick`,`spacefill`,`surface`,`putty`],description:`The representation.`},color:{type:`string`,description:`A color ("red", "#d2491f") or a theme in words ("by residue type").`},transparency:{type:`number`,description:`0 (opaque) to 1.`}},required:[`target`]},{state:`loaded`}),z(`camera.focus`,`Turn the camera to a target and frame it, optionally with its surroundings.`,{type:`object`,properties:{target:H,radius:{type:`number`,description:`Extra room around it, in Å.`}},required:[`target`]},{state:`loaded`}),z(`disclose_skills`,`Load skills: their guidance and their tools, all a request needs in one call. Skills: "selections" (by distance and logic), "volumes" (density maps).`,{type:`object`,properties:{skills:{type:`array`,items:{type:`string`,enum:[`selections`,`volumes`]},description:`Skill names.`}},required:[`skills`]},{state:`loaded`})],qn=[z(`query_reference`,`Selection keywords and MolQL symbols in detail: arguments, types, defaults, an example. Read-only.`,{type:`object`,properties:{symbols:{type:`array`,items:{type:`string`},description:`Keywords or symbols.`}},required:[`symbols`]},{read:!0,state:`loaded`,loadedAtTurn:2}),z(`bounds.get`,`What a selection spans: its center, radius and bounding box, in Å. Read-only.`,{type:`object`,properties:{target:H}},{read:!0,state:`loaded`,loadedAtTurn:2})],Jn=[z(`volume.load`,`Load a density map: an EMDB entry, the X-ray density of a PDB entry, or a URL. Asks first: it fetches from a server.`,{type:`object`,properties:{emdb:{type:`string`,description:`An EMDB id ("EMD-1181").`},pdb_density:{type:`string`,description:`A PDB id whose X-ray density to load.`},url:{type:`string`,description:`A map file (CCP4, MRC, DSN6).`}}},{approval:!0}),z(`volume.set_look`,`Draw a map: an isosurface at a level, or a slice; its color and transparency.`,{type:`object`,properties:{volume:{type:`string`,description:`The map's id.`},kind:{type:`string`,enum:[`isosurface`,`slice`]},level:{type:`number`,description:`The isovalue, relative (σ) unless absolute is set.`},absolute:{type:`boolean`}},required:[`volume`]})],Yn=[z(`code.run`,`Run a short script against the viewer: for what no command does in one step.`,{type:`object`,properties:{source:{type:`string`,description:`TypeScript.`}},required:[`source`]},{unavailable:`Needs the code module, which this app does not include.`})],Xn=[z(`snapshot.add`,`Save the view as a snapshot, with a title and a description.`,{type:`object`,properties:{title:{type:`string`},description:{type:`string`,description:`Markdown.`}},required:[`title`]},{state:`deferred`}),z(`structure.remove`,`Remove a structure and everything shown of it. Asks first: it cannot be undone after the next action.`,{type:`object`,properties:{structure:{type:`string`,description:`Its id.`}},required:[`structure`]},{approval:!0,state:`deferred`}),z(`export.image`,`Save an image of the canvas: its size and transparency.`,{type:`object`,properties:{width:{type:`integer`,description:`Pixels.`},height:{type:`integer`,description:`Pixels.`},transparent:{type:`boolean`,description:`No background.`}}},{enabled:!1,state:`deferred`})],Zn={groups:[{id:`core`,kind:`core`,title:`Core tools`,tools:U},{id:`selections`,kind:`skill`,title:`Selections`,summary:`Select by distance, neighborhood and logic (PyMOL selection syntax, MolQL).`,guidance:V,guidanceTokens:B(V),tools:qn},{id:`volumes`,kind:`skill`,title:`Volumes`,summary:`Density maps: EMDB entries, X-ray density, map files; drawn as isosurfaces or slices.`,guidance:Kn,guidanceTokens:B(Kn),tools:Jn},{id:`code`,kind:`skill`,title:`Code`,summary:`Scripts against the viewer, for what no command does in one step.`,guidance:`Skill code: write short TypeScript against the viewer’s API and run it with code.run.`,guidanceTokens:24,unavailable:`Needs the code module, which this app does not include.`,tools:Yn},{id:`single`,kind:`single`,title:`Tools loaded by name`,tools:Xn}]},Qn=e=>e.map(e=>({id:e.id,name:e.name,description:e.description})),$n=e=>e.map(e=>`${e.name}: ${e.description}`).join(`
`),er=`Structures: none loaded.
Selection: empty.`,tr=`Structures:
- 1tqn "1TQN" Cytochrome P450 3A4, chain A (486 residues)
  - 1tqn.polymer: cartoon, colored by chain
  - 1tqn.ligand HEM 508: ball-and-stick, colored by element
Selection: HEM 508 (A), 43 atoms
Camera: on HEM 508`,nr=`Structures:
- 1tqn "1TQN" Cytochrome P450 3A4, chain A (486 residues)
  - 1tqn.polymer: cartoon, colored by chain
  - 1tqn.ligand HEM 508: ball-and-stick, colored by element
  - 1tqn.site: ball-and-stick, colored by residue name (24 residues)
Selection: 24 residues (A): PHE 57, ARG 105, ILE 118, ALA 297, THR 309, CYS 442 …
Camera: on HEM 508`,rr=`1tqn "1TQN" Cytochrome P450 3A4 (PDB), 1 model, 3,898 atoms
  polymer: chain A, residues 27-499, cartoon, colored by chain
  ligand HEM 508: 43 atoms, ball-and-stick, colored by element
  site: 24 residues, ball-and-stick, colored by residue name
selection: 24 residues
camera: target HEM 508, radius 9.2 Å`})))()}function ar(e={}){return({shell:t,status:n,loaded:i})=>{let a=new Nn((e,t)=>n.post(e,t),{configured:e.configured,history:i}),o=Hn({running:e.running,empty:!e.configured}),s=e=>t.openPage(ve,e),c=o.tools.pipe(g(De));return{tabs:[{id:`log`,title:`History`,icon:`scroll-text`,order:2.5,place:`foot`,render:ae(()=>r(wn,{agent:a,status:n}))},{id:`assistant`,title:`Set up assistant`,heading:`Assistant`,icon:`sparkles`,order:2.7,place:`foot`,render:ae(()=>r(bn,{agent:a,inspect:{links:[{id:`trace`,label:`Trace`,detail:o.trace.pipe(g(e=>e?.turns.length?`${e.turns.length} turns`:`nothing yet`))},{id:`tools`,label:`Tools`,detail:c.pipe(g(e=>`${e.tools} tools, ${e.skills} skills`))},{id:`limits`,label:`Limits`,detail:`turn budget, context window, thinking`}],open:s}}))}],pages:[Vt(o)],commands:_e(s),assistant:kn(a,()=>t.show(`assistant`)),agent:r(en,{agent:a,onTrace:e=>s(`turn:${e}`)}),commandDone:(e,t)=>a.record(e,t)}}}function or(){return(or=e((()=>{S(),_(),Kt(),sn(),xn(),Dn(),Pn(),ir(),o()})))()}function W(e){return t(()=>r(`div`,{style:`height: 100vh`,children:r(he,{loaded:!0,addOn:ar({configured:!0,running:e.running}),openPage:ve,openPageAt:e.focus})}))}var sr,G,K,q,J,Y,X,Z,Q,$,cr;function lr(){return(lr=e((()=>{me(),ge(),ye(),or(),o(),sr={title:`Shell/Assistant`,parameters:{layout:`fullscreen`}},G={render:()=>t(()=>r(`div`,{style:`height: 100vh`,children:r(he,{loaded:!0,addOn:ar({configured:!0})})}))},K={render:()=>t(()=>r(`div`,{style:`height: 100vh`,children:r(he,{loaded:!0,addOn:ar()})}))},q={render:()=>W({focus:`trace`})},J={render:()=>W({focus:`trace`,running:!0})},Y={render:()=>W({focus:`step:${Bn().turns.flatMap(e=>e.steps).find(e=>e.kind===`model`&&e.prefixBreak)?.id??``}`})},X={render:()=>W({focus:`tools`})},Z={render:()=>W({focus:`tool:bounds.get`})},Q={render:()=>W({focus:`limits`})},$={render:()=>t(()=>r(`div`,{style:`height: 100vh`,children:r(he,{loaded:!0,addOn:ar({configured:!0}),openTab:`assistant`})}))},cr=[`SetUp`,`NotSetUp`,`Trace`,`TraceRunning`,`TraceWhatItSaw`,`Tools`,`ToolsAtTool`,`Limits`,`Inspect`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`The Assistant tab with the Inspect block under the model and keys: Trace, Tools, Limits, each opening the page.`,...$.parameters?.docs?.description}}}})))()}lr();export{$ as Inspect,Q as Limits,K as NotSetUp,G as SetUp,X as Tools,Z as ToolsAtTool,q as Trace,J as TraceRunning,Y as TraceWhatItSaw,cr as __namedExportsOrder,sr as default};