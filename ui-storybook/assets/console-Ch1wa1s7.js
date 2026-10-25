import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{g as t,n,r,t as i}from"./jsx-runtime-DbCUSNU3.js";import{n as a,r as o}from"./registry-D35yV2Tb.js";import{b as s,x as c}from"./work-queue-DoxU-HjK.js";import{E as l}from"./shell-view-DFCAxQCV.js";import{n as u,t as d}from"./observable-state-eRUcDuAs.js";import{l as f,o as ee,s as p,u as m}from"./manager-CrN3WzFc.js";import{n as h,t as g}from"./control-flow-BQuMY04w.js";import{t as _}from"./icon-1ydjt1pd.js";import{i as v,o as y,r as b}from"./scoped-Dk1HMUKj.js";import{t as x}from"./button-B7k80QJA.js";import{t as S}from"./src-BO5PfBJ6.js";import{C,S as w,_ as T,a as E,b as D,c as O,d as k,f as A,g as j,h as te,i as M,l as N,m as P,n as F,p as ne,t as re,u as ie,v as ae,x as I,y as L}from"./parts-yWU3uFwa.js";var R;function z(){return(z=e((()=>{o(),R={action:`msp-command-language-console-action`,bar:`msp-command-language-console-bar`,card:`msp-command-language-console-card`,chip:`msp-command-language-console-chip`,code:`msp-command-language-console-code`,command:`msp-command-language-console-command`,completion:`msp-command-language-console-completion`,completions:`msp-command-language-console-completions`,composer:`msp-command-language-console-composer`,console:`msp-command-language-console-console`,detail:`msp-command-language-console-detail`,does:`msp-command-language-console-does`,drop:`msp-command-language-console-drop`,empty:`msp-command-language-console-empty`,emptyText:`msp-command-language-console-emptyText`,emptyTitle:`msp-command-language-console-emptyTitle`,entry:`msp-command-language-console-entry`,example:`msp-command-language-console-example`,examples:`msp-command-language-console-examples`,field:`msp-command-language-console-field`,hint:`msp-command-language-console-hint`,input:`msp-command-language-console-input`,keys:`msp-command-language-console-keys`,kind:`msp-command-language-console-kind`,label:`msp-command-language-console-label`,line:`msp-command-language-console-line`,lines:`msp-command-language-console-lines`,mark:`msp-command-language-console-mark`,notice:`msp-command-language-console-notice`,noticeIcon:`msp-command-language-console-noticeIcon`,output:`msp-command-language-console-output`,picker:`msp-command-language-console-picker`,segments:`msp-command-language-console-segments`,send:`msp-command-language-console-send`,side:`msp-command-language-console-side`,sigActive:`msp-command-language-console-sigActive`,sigName:`msp-command-language-console-sigName`,signature:`msp-command-language-console-signature`,spacer:`msp-command-language-console-spacer`,spin:`msp-command-language-console-spin`,status:`msp-command-language-console-status`,summary:`msp-command-language-console-summary`,swatch:`msp-command-language-console-swatch`,time:`msp-command-language-console-time`,typed:`msp-command-language-console-typed`,usage:`msp-command-language-console-usage`,value:`msp-command-language-console-value`},a(`command-language/prism-viewer/console.module.css`,`@layer msp.components {
.msp-command-language-console-console {
  flex-direction: column;
  flex: 1 1 0;
  height: 100%;
  min-height: 0;
  display: flex;
  position: relative;
}

.msp-command-language-console-bar {
  align-items: center;
  gap: var(--msp-space-2);
  padding: var(--msp-space-1) var(--msp-space-2) var(--msp-space-2);
  display: flex;
}

.msp-command-language-console-segments {
  gap: var(--msp-space-1);
  display: inline-flex;
}

.msp-command-language-console-spacer {
  flex: 1;
}

.msp-command-language-console-picker {
  display: none;
}

.msp-command-language-console-output {
  gap: var(--msp-space-1);
  min-height: 0;
  padding: 0 var(--msp-space-2) var(--msp-space-2);
  scrollbar-gutter: stable;
  flex-direction: column;
  flex: 1;
  display: flex;
  overflow: auto;
}

.msp-command-language-console-entry {
  align-items: start;
  column-gap: var(--msp-space-2);
  row-gap: var(--msp-space-1);
  padding: var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  grid-template-columns: 14px minmax(0, 1fr) auto;
  display: grid;

  &:hover {
    background: var(--msp-color-hover);
  }
}

.msp-command-language-console-mark {
  margin-top: calc(var(--msp-space-1) / 2);
  color: var(--msp-color-success);
  display: inline-flex;

  .msp-command-language-console-entry[data-state="running"] & {
    color: var(--msp-color-text-subtle);
    animation: .9s linear infinite msp-command-language-console-spin;
  }

  .msp-command-language-console-entry[data-state="failed"] & {
    color: var(--msp-color-danger);
  }
}

@keyframes msp-command-language-console-spin {
  to {
    rotate: 360deg;
  }
}

.msp-command-language-console-command {
  align-items: baseline;
  gap: var(--msp-space-2);
  min-width: 0;
  display: flex;
}

.msp-command-language-console-chip {
  padding: 0 var(--msp-space-1);
  border-radius: var(--msp-radius-sm);
  background: var(--msp-color-well);
  color: var(--msp-color-text-subtle);
  letter-spacing: .02em;
  text-transform: uppercase;
  flex: none;
  font-size: 10px;
  font-weight: 600;
  line-height: 16px;
}

.msp-command-language-console-code {
  min-width: 0;
  color: var(--msp-color-text);
  font-family: var(--msp-font-mono);
  font-size: var(--msp-font-size-sm);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  line-height: 1.45;
}

.msp-command-language-console-side {
  align-items: center;
  gap: var(--msp-space-1);
  min-height: 20px;
  display: flex;
}

.msp-command-language-console-time {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
}

.msp-command-language-console-action {
  border-radius: var(--msp-radius-sm);
  width: 20px;
  height: 20px;
  color: var(--msp-color-text-muted);
  opacity: 0;
  cursor: pointer;
  transition: opacity var(--msp-motion-fast) var(--msp-ease);
  background: none;
  border: 0;
  justify-content: center;
  align-items: center;
  display: inline-flex;

  .msp-command-language-console-entry:hover &, &:focus-visible {
    opacity: 1;
  }

  @media (hover: none) {
    opacity: 1;
  }

  &:hover {
    background: var(--msp-color-pressed);
    color: var(--msp-color-text);
  }
}

.msp-command-language-console-lines {
  gap: calc(var(--msp-space-1) / 2);
  grid-column: 2 / -1;
  min-width: 0;
  display: grid;
}

.msp-command-language-console-line {
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  overflow-wrap: anywhere;
  line-height: 1.45;
}

.msp-command-language-console-value {
  max-width: 100%;
  padding: var(--msp-space-1) var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-well);
  color: var(--msp-color-text);
  font-family: var(--msp-font-mono);
  font-size: var(--msp-font-size-sm);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  justify-self: start;
}

.msp-command-language-console-notice {
  column-gap: var(--msp-space-1);
  font-size: var(--msp-font-size-sm);
  overflow-wrap: anywhere;
  grid-template-columns: 14px minmax(0, 1fr);
  align-items: start;
  line-height: 1.45;
  display: grid;

  &[data-kind="warning"] {
    color: var(--msp-color-warning);
  }

  &[data-kind="note"] {
    color: var(--msp-color-text-subtle);
  }

  &[data-kind="error"] {
    color: var(--msp-color-danger);
  }
}

.msp-command-language-console-noticeIcon {
  margin-top: calc(var(--msp-space-1) / 2);
  display: inline-flex;
}

.msp-command-language-console-hint {
  color: var(--msp-color-text-muted);
  grid-column: 2;
}

.msp-command-language-console-empty {
  gap: var(--msp-space-2);
  padding: var(--msp-space-3) var(--msp-space-2);
  display: grid;
}

.msp-command-language-console-emptyTitle {
  color: var(--msp-color-text);
  font-weight: 600;
}

.msp-command-language-console-emptyText {
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  line-height: 1.5;
}

.msp-command-language-console-examples {
  gap: var(--msp-space-1);
  flex-wrap: wrap;
  display: flex;
}

.msp-command-language-console-example {
  max-width: 100%;
  padding: calc(var(--msp-space-1) / 2) var(--msp-space-2);
  border-radius: var(--msp-radius-sm);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font-family: var(--msp-font-mono);
  font-size: var(--msp-font-size-xs);
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  border: 0;
  line-height: 18px;
  overflow: hidden;

  &:hover {
    background: var(--msp-color-pressed);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: 1px;
  }
}

.msp-command-language-console-composer {
  gap: var(--msp-space-1);
  margin: 0 var(--msp-space-2) var(--msp-space-2);
  padding: var(--msp-space-2);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-color-control);
  box-shadow: inset 0 0 0 1px var(--msp-field-edge);
  transition: box-shadow var(--msp-motion-fast) var(--msp-ease);
  grid-template-columns: minmax(0, 1fr);
  display: grid;
  position: relative;

  &:focus-within {
    box-shadow: inset 0 0 0 1px var(--msp-field-edge),
      0 0 0 2px var(--msp-color-focus-ring);
  }
}

.msp-command-language-console-card {
  right: 0;
  bottom: calc(100% + var(--msp-space-3));
  z-index: var(--msp-z-overlay);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-color-panel);
  max-height: 280px;
  box-shadow: inset 0 0 0 1px var(--msp-field-edge),
    var(--msp-shadow-float);
  flex-direction: column;
  display: flex;
  position: absolute;
  left: 0;
}

.msp-command-language-console-signature {
  gap: var(--msp-space-1);
  padding: var(--msp-space-2);
  font-size: var(--msp-font-size-xs);
  flex: none;
  line-height: 1.4;
  display: grid;

  &:not(:last-child) {
    box-shadow: inset 0 -1px 0 var(--msp-field-edge);
  }
}

.msp-command-language-console-usage {
  color: var(--msp-color-text-muted);
  font-family: var(--msp-font-mono);
  overflow-wrap: anywhere;
}

.msp-command-language-console-summary {
  color: var(--msp-color-text-subtle);
}

.msp-command-language-console-completions {
  min-height: 0;
  padding: var(--msp-space-1);
  overflow-y: auto;
}

.msp-command-language-console-completion {
  align-items: center;
  gap: var(--msp-space-2);
  padding: var(--msp-space-1) var(--msp-space-2);
  border-radius: var(--msp-radius-sm);
  font-size: var(--msp-font-size-xs);
  cursor: pointer;
  grid-template-columns: 36px auto minmax(0, 1fr);
  line-height: 18px;
  display: grid;

  &[aria-selected="true"] {
    background: var(--msp-color-hover);
  }
}

.msp-command-language-console-kind {
  color: var(--msp-color-text-subtle);
  font-family: var(--msp-font-mono);
  align-items: center;
  display: flex;
}

.msp-command-language-console-swatch {
  border-radius: var(--msp-radius-sm);
  width: 12px;
  height: 12px;
  box-shadow: inset 0 0 0 1px var(--msp-field-edge);
}

.msp-command-language-console-label {
  color: var(--msp-color-text);
  font-family: var(--msp-font-mono);
  white-space: nowrap;
}

.msp-command-language-console-typed {
  color: var(--msp-color-accent);
  background: none;
  font-weight: 600;
}

.msp-command-language-console-detail {
  color: var(--msp-color-text-muted);
  text-align: right;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.msp-command-language-console-field {
  align-items: flex-end;
  gap: var(--msp-space-2);
  display: flex;
}

.msp-command-language-console-input {
  min-width: 0;
  max-height: 160px;
  padding: calc(var(--msp-space-1) / 2) 0;
  color: var(--msp-color-text);
  font-family: var(--msp-font-mono);
  font-size: var(--msp-font-size-sm);
  field-sizing: content;
  resize: none;
  background: none;
  border: 0;
  outline: 0;
  flex: 1;
  line-height: 1.45;

  &::placeholder {
    color: var(--msp-color-text-subtle);
  }
}

.msp-command-language-console-send {
  background: var(--msp-color-accent);
  width: 24px;
  height: 24px;
  color: var(--msp-color-on-accent);
  cursor: pointer;
  transition: opacity var(--msp-motion-fast) var(--msp-ease);
  border: 0;
  border-radius: 50%;
  flex: none;
  justify-content: center;
  align-items: center;
  display: inline-flex;

  &:disabled {
    background: var(--msp-color-well);
    color: var(--msp-color-text-subtle);
    cursor: default;
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: 1px;
  }
}

.msp-command-language-console-status {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  height: 20px;
  font-size: var(--msp-font-size-xs);
  display: flex;
}

.msp-command-language-console-does {
  min-width: 0;
  color: var(--msp-color-text-muted);
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  overflow: hidden;

  &[data-kind="error"] {
    color: var(--msp-color-danger);
  }
}

.msp-command-language-console-hint {
  color: var(--msp-color-text-muted);
}

.msp-command-language-console-sigName {
  color: var(--msp-color-text);
}

.msp-command-language-console-sigActive {
  color: var(--msp-color-text);
  font-weight: 600;
}

.msp-command-language-console-keys {
  color: var(--msp-color-text-subtle);
  white-space: nowrap;
  flex: none;
}

.msp-command-language-console-drop {
  inset: var(--msp-space-2);
  padding: var(--msp-space-4);
  border: 1.5px dashed var(--msp-color-accent);
  border-radius: var(--msp-radius-lg);
  background: color-mix(in oklab, var(--msp-color-panel), transparent 8%);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  text-align: center;
  pointer-events: none;
  justify-content: center;
  align-items: center;
  display: none;
  position: absolute;

  .msp-command-language-console-console[data-dropping] & {
    display: flex;
  }
}
}
`)})))()}function oe(e){try{let t=e?.get(B);return Array.isArray(t)?t.filter(e=>typeof e==`string`).slice(-200):[]}catch{return[]}}var B,V,H,U,W;function G(){return(G=e((()=>{d(),I(),ae(),C(),A(),N(),M(),B=`command-language.history`,V=200,H={pymol:[`fetch 1cbs`,`as cartoon`,`show sticks, resn REA`,`util.cbag resn REA`,`color slate, chain A`,`spectrum b, blue_white_red`,`zoom resn REA, 5`,`help`],vmd:[`mol pdbload 1cbs`,`mol delrep 0 top`,`mol representation NewCartoon`,`mol color Structure`,`mol addrep top`,`set sel [atomselect top "resname REA"]`,`$sel num`,`help`]},U=[`pml`,`tcl`,`vmd`],W=class{#e=u(`pymol`);#t=u([]);#n=u(``);#r;#i;#a=``;#o=0;#s=Promise.resolve();constructor(e,t){this.api=e,this.preferences=t,this.#r=oe(t),this.#i=this.#r.length;let n=e.script,r=n?O(t,n):void 0;r&&this.#e.set(r)}get dialect(){return this.#e.asReadonly}get entries(){return this.#t.asReadonly}get draft(){return this.#n.asReadonly}get history(){return this.#r}setDialect(e){this.#e.set(e)}setDraft(e){this.#n.set(e),this.#i=this.#r.length}previous(){this.#i!==0&&(this.#i===this.#r.length&&(this.#a=this.#n.value),this.#i--,this.#n.set(this.#r[this.#i]))}next(){this.#i>=this.#r.length||(this.#i++,this.#n.set(this.#i===this.#r.length?this.#a:this.#r[this.#i]))}clear(){this.#t.set([])}async submit(e=this.#n.value,t=[]){if(!e.trim())return;this.#p(e),this.#n.set(``),this.#i=this.#r.length;let n=k(e),r=n?.dialect??this.#e.value;return this.#c(()=>this.#l(r,n?n.rest:e,e,t))}#c(e){let t=this.#s.then(e,e);return this.#s=t.catch(()=>void 0),t}async openFiles(e){let t=await E(e),n=new Set(ne(t)),r=e.filter(e=>n.size?n.has(e.name):t.has(e.name));if(r.length)for(let n of r)await this.#c(()=>this.#l(ie(n.name),t.get(n.name)??``,n.name,e,!0));else{let t=this.#e.value,n=e=>/[\s,;"'{}]/.test(e)?`"${e.replace(/"/g,``)}"`:e,r=e.map(e=>t===`pymol`?`load ${n(e.name)}`:`mol new ${n(e.name)}`).join(`
`);await this.#c(()=>this.#l(t,r,r,e))}}async#l(e,t,n,r,i=!1){let a=this.api.script,o=this.#u({dialect:e,input:n,state:`running`,lines:[],...i?{files:!0}:{}});if(!a)return this.#f(o,`failed`,[{kind:`error`,text:`This viewer has no command language.`}]);let s=a.preview(t,e,r.map(e=>e.name),await E(r)),c=s.diagnostics.filter(e=>e.severity===`error`);if(c.length)return this.#f(o,`failed`,c.map(e=>({kind:`error`,text:w(t,{...e,hint:void 0}),...e.hint?{hint:e.hint}:{}})));let l=s.commands.length===1?s.commands[0]:void 0;if(l?.kind===`history`){let e=await(l.action===`undo`?this.api.history.undo():this.api.history.redo());return this.#f(o,e.ok?`done`:`failed`,[{kind:e.ok?`did`:`error`,text:e.ok?e.did:e.message}])}let u=await a.run({dialect:e,text:t,files:[...r]});if(!u.ok)return this.#f(o,`failed`,[{kind:`error`,text:u.message,...u.hint?{hint:u.hint}:{}}]);let d=(u.value?.outputs??[]).map(e=>({kind:e.kind,text:e.text}));return this.#f(o,`done`,d.length?d:[{kind:`did`,text:u.did}])}#u(e){let t=this.#o++;return this.#t.set([...this.#t.value,{...e,id:t}]),this.#d.set(t,performance.now()),t}#d=new Map;#f(e,t,n){let r,i=this.#d.get(e);this.#d.delete(e);let a=i===void 0?void 0:Math.round(performance.now()-i);return this.#t.set(this.#t.value.map(i=>i.id===e?(r={...i,state:t,lines:n,...a===void 0?{}:{ms:a}},r):i)),r}inspect(e){let t=this.api.script;if(!e.trim()||!t)return{kind:`empty`};let n=k(e),r=n?.dialect??this.#e.value,i=n?n.rest:e;if(!i.trim())return{kind:`empty`};let a=t.preview(i,r),o=a.diagnostics.find(e=>e.severity===`error`);if(o)return{kind:`error`,dialect:r,message:w(i,{...o,hint:void 0}),...o.hint?{hint:o.hint}:{}};let s=a.commands.map(T).filter(Boolean);return{kind:`ready`,dialect:r,does:s.length>3?`${s.slice(0,3).join(`; `)}; and ${s.length-3} more`:s.join(`; `),warnings:a.diagnostics.filter(e=>e.severity!==`error`).map(e=>e.message)}}completions(e,t=6){return this.assist(e,t).items.slice()}assist(e,t=12,n=!1){let r=this.api.script;if(!r||!e.trim()&&!n)return{items:[],typed:``};let i=k(e),a=i?.dialect??this.#e.value,o=i?e.slice(0,i.offset):``,s=i?i.rest:e,c=D(s,a,r.env()),l=s.slice(c.from,c.to);return{items:c.items.filter(e=>e.label.toLowerCase()!==l.toLowerCase()).slice(0,t).map(e=>({label:e.label,kind:e.kind,...e.detail?{detail:e.detail}:{},...e.rgb===void 0?{}:{rgb:e.rgb},text:o+L(s,c,e)})),typed:l,...c.signature?{signature:c.signature}:{}}}edit(e){this.editable(e)&&(this.setDialect(e.dialect),this.setDraft(e.input))}editable(e){return!e.files}#p(e){this.#r[this.#r.length-1]!==e&&this.#r.push(e),this.#r.length>V&&this.#r.splice(0,this.#r.length-V);try{this.preferences?.set(B,this.#r)}catch{}}placeholder(e){return e===`pymol`?`A PyMOL command: show sticks, resn REA`:`A VMD command: mol addrep top`}}})))()}function K(e){let{line:t}=e;if(t.kind===`value`)return n(`div`,{class:R.value,children:t.text});if(t.kind===`did`)return n(`div`,{class:R.line,children:t.text});let i=t.kind===`error`?`circle-alert`:t.kind===`warning`?`triangle-alert`:`info`;return r(`div`,{class:R.notice,"data-kind":t.kind,children:[n(`span`,{class:R.noticeIcon,children:n(_,{name:i,size:13})}),n(`span`,{children:t.text}),t.hint?n(`span`,{class:R.hint,children:t.hint}):null]})}function se(e){let{entry:t,model:i}=e,a=t.state===`running`?`Running`:t.state===`failed`?`Failed`:`Done`,o=r(`div`,{class:R.entry,"data-state":t.state,children:[n(`span`,{class:R.mark,role:`img`,"aria-label":a,children:n(_,{name:J[t.state],size:14})}),r(`div`,{class:R.command,children:[n(`span`,{class:R.chip,children:P[t.dialect]}),n(`span`,{class:R.code,children:t.input})]}),r(`div`,{class:R.side,children:[n(`span`,{class:R.time,children:Y(t.ms)}),i.editable(t)?n(`button`,{type:`button`,class:R.action,"aria-label":`Edit and run again`,"data-tip":`Edit and run again`,onClick:()=>i.edit(t),children:n(_,{name:`pencil`,size:13})}):null]}),t.lines.length?n(`div`,{class:R.lines,children:t.lines.map(e=>n(K,{line:e}))}):null]});return y(o,e.onSize),o}function ce(e){return r(`div`,{class:R.empty,children:[n(`div`,{class:R.emptyTitle,children:`PyMOL and VMD commands`}),n(`div`,{class:R.emptyText,children:`Type the commands you know. Enter runs them as one step, which Undo takes back; the line under the input says what they will do first. Open or drop a .pml, .tcl or .vmd script with the files it loads.`}),n(`div`,{class:R.examples,children:n(g,{each:s(e.model.dialect,e=>H[e]),children:t=>n(`button`,{type:`button`,class:R.example,onClick:()=>e.onPick(t),children:t})})})]})}function le(e){let t=e.inspection;if(t.kind===`empty`)return n(`span`,{class:R.does});if(t.kind===`error`){let n=t.hint?`${t.message} ${t.hint}`:t.message;return r(`span`,{class:R.does,"data-kind":`error`,"data-tip":n,children:[t.message,t.hint&&!e.usageShown?r(`span`,{class:R.hint,children:[` `,t.hint]}):null]})}let i=[t.does,...t.warnings].filter(Boolean).join(` · `);return r(`span`,{class:R.does,"data-tip":i,children:[P[t.dialect],` · `,i]})}function ue(e){let{signature:t,dialect:i}=e,a=i===`pymol`?`, `:` `,o=[n(`span`,{class:R.sigName,children:t.name}),` `];return t.params.forEach((e,r)=>{r&&o.push(a);let i=e.optional?`[${e.name}]`:e.name;o.push(r===t.active?n(`strong`,{class:R.sigActive,children:i}):i)}),r(`div`,{class:R.signature,children:[n(`div`,{class:R.usage,children:o}),n(`div`,{class:R.summary,children:t.summary})]})}function de(e,t){let r=t?e.toLowerCase().indexOf(t.toLowerCase()):-1;return r<0?e:[e.slice(0,r),n(`mark`,{class:R.typed,children:e.slice(r,r+t.length)}),e.slice(r+t.length)]}function fe(e){let{model:i}=e,a=u(!1),o=n(`div`,{class:R.output,role:`log`,"aria-live":`off`,"aria-label":`Console output`,children:n(g,{each:i.entries,fallback:()=>n(ce,{model:i,onPick:e=>d(e)}),children:e=>n(se,{entry:e,model:i,onSize:()=>c()})})}),c=b(()=>{o.scrollTop=o.scrollHeight}).request;y(o,c);let l=n(`textarea`,{class:R.input,rows:2,spellcheck:!1,"aria-label":`Command`,"aria-autocomplete":`list`,onInput:e=>i.setDraft(e.currentTarget.value),onKeyDown:e=>{if(e.isComposing||e.keyCode===229)return;let t=e.currentTarget,n=ee(e);if(n&&p(n)===p(Z)){e.preventDefault(),T.set(!1),C.set(!0);return}let r=O.value;if(D.value&&e.key===`Escape`)e.preventDefault(),e.stopPropagation(),T.set(!0);else{if(r.length&&t.selectionStart===t.value.length){let t=E.value;if(e.key===`ArrowDown`||e.key===`ArrowUp`){e.preventDefault();let n=r.length;E.set(e.key===`ArrowDown`?(t+1)%n:t<=0?n-1:t-1);return}if(e.key===`Tab`&&!e.shiftKey){e.preventDefault(),m(r[Math.max(0,t)]);return}if(e.key===`Enter`&&!e.shiftKey&&t>=0){e.preventDefault(),m(r[t]);return}}if(e.key===`Enter`&&!e.shiftKey)e.preventDefault(),S();else if(e.key===`ArrowUp`&&!t.value.slice(0,t.selectionStart).includes(`
`))e.preventDefault(),v(()=>i.previous());else if(e.key===`ArrowDown`&&!t.value.slice(t.selectionEnd).includes(`
`))e.preventDefault(),v(()=>i.next());else if(e.key===`Tab`&&!e.shiftKey&&t.value.trim()&&t.selectionStart===t.value.length){let n=pe(i,t.value);n!==void 0&&(e.preventDefault(),i.setDraft(n))}}}}),d=e=>{i.setDraft(e),l.focus()},m=e=>d(e.text),v=e=>{e(),T.set(!0)},S=()=>{l.value.trim()&&i.submit(l.value)};t(i.draft,e=>{l.value!==e&&(l.value=e,l.setSelectionRange(e.length,e.length))}),t(i.dialect,e=>{l.placeholder=i.placeholder(e)});let C=u(!1),w=s([i.draft,i.dialect,i.entries,C.asReadonly],(e,t,n,r)=>({assist:r&&!e.trim()?i.assist(e,1/0,!0):i.assist(e),inspection:i.inspect(e),dialect:k(e)?.dialect??i.dialect.value})),T=u(!1),E=u(-1);t(i.draft,()=>{C.set(!1),T.set(!1)});let D=s([w,T.asReadonly],(e,t)=>t||!e.assist.signature&&!e.assist.items.length?void 0:{items:e.assist.items,signature:e.assist.signature,dialect:e.dialect,typed:e.assist.typed}),O=s(D,e=>e?.items??[]);t(O,()=>E.set(-1));let A=`msp-console-completions-${Q+=1}`;t(s([O,E.asReadonly],(e,t)=>e.length?t:void 0),e=>{e===void 0?l.removeAttribute(`aria-controls`):l.setAttribute(`aria-controls`,A),e!==void 0&&e>=0?(l.setAttribute(`aria-activedescendant`,`${A}-${e}`),N.querySelector(`#${A}-${e}`)?.scrollIntoView?.({block:`nearest`})):l.removeAttribute(`aria-activedescendant`)});let j=s(i.draft,e=>!e.trim()),M=n(`input`,{class:R.picker,type:`file`,multiple:!0,onChange:e=>{let t=e.currentTarget,n=[...t.files??[]];t.value=``,n.length&&i.openFiles(n)}});M.accept=[...U.map(e=>`.${e}`),`*/*`].join(`,`);let N=r(`div`,{class:R.console,onDragEnter:e=>{e.dataTransfer?.types.includes(`Files`)&&a.set(!0)},onDragOver:e=>e.preventDefault(),onDragLeave:e=>{N.contains(e.relatedTarget)||a.set(!1)},onDrop:e=>{a.set(!1);let t=[...e.dataTransfer?.files??[]];t.length&&(e.preventDefault(),e.stopPropagation(),i.openFiles(t))},children:[r(`div`,{class:R.bar,children:[n(`div`,{class:R.segments,role:`group`,"aria-label":`Dialect`,children:te.map(e=>n(x,{size:`sm`,variant:`ghost`,pressed:s(i.dialect,t=>t===e),onClick:()=>i.setDialect(e),children:P[e]}))}),n(`span`,{class:R.spacer}),n(x,{size:`sm`,variant:`ghost`,icon:n(_,{name:`upload`,size:15}),title:`Import a .pml, .tcl or .vmd script with the files it loads, or structure files (or drop them here)`,onClick:()=>M.click(),children:`Import`}),n(x,{size:`sm`,variant:`ghost`,icon:n(_,{name:`trash-2`,size:15}),title:`Clear the output`,onClick:()=>i.clear()}),M]}),o,r(`div`,{class:R.composer,children:[n(h,{when:D,children:e=>{let{items:t}=e,i=t.some(e=>e.detail!==t[0].detail);return r(`div`,{class:R.card,children:[e.signature?n(ue,{signature:e.signature,dialect:e.dialect}):null,t.length?n(`div`,{class:R.completions,id:A,role:`listbox`,"aria-label":`Completions`,children:t.map((t,a)=>r(`div`,{id:`${A}-${a}`,class:R.completion,role:`option`,"aria-selected":s(E.asReadonly,e=>String(e===a)),onPointerMove:()=>E.set(a),onMouseDown:e=>{e.preventDefault(),m(t)},children:[n(`span`,{class:R.kind,children:t.rgb===void 0?X[t.kind]??``:n(`span`,{class:R.swatch,style:`background: #${t.rgb.toString(16).padStart(6,`0`)}`})}),n(`span`,{class:R.label,children:de(t.label,e.typed)}),n(`span`,{class:R.detail,children:i?t.detail??``:``})]}))}):null]})}}),r(`div`,{class:R.field,children:[l,n(`button`,{type:`button`,class:R.send,"aria-label":`Run`,"data-tip":`Run (Enter)`,disabled:j,onClick:S,children:n(_,{name:`arrow-up`,size:14})})]}),r(`div`,{class:R.status,children:[n(h,{when:s([w,D],(e,t)=>({inspection:e.inspection,usageShown:!!t?.signature})),children:e=>n(le,{inspection:e.inspection,usageShown:e.usageShown})}),n(`span`,{class:R.keys,"data-tip":`Enter runs · Shift+Enter a new line · Tab completes · ${f(Z)} lists the completions · ↑ ↓ the list or the history · Esc closes the help and the list`,children:`↵ run · ⇥ complete`})]})]}),n(`div`,{class:R.drop,children:`Drop a .pml, .tcl or .vmd script with the files it loads`})]});return t(a.asReadonly,e=>{e?N.setAttribute(`data-dropping`,``):N.removeAttribute(`data-dropping`)}),N}function pe(e,t){let n=e.api.script;if(!n)return;let r=k(t),i=r?.dialect??e.dialect.value,a=r?r.rest:t,o=D(a,i,n.env()),s=o.items.find(e=>e.insert!==a.slice(o.from,o.to));if(s)return`${r?t.slice(0,r.offset):``}${L(a,o,s)}`}function q(e){let t=new W(e.api,e.preferences);return{tabs:[{id:re,title:`PyMOL / VMD console`,heading:`Console`,icon:`terminal`,place:`foot`,order:2.6,render:l(()=>n(fe,{model:t}))}]}}var J,Y,X,Z,Q;function $(){return($=e((()=>{S(),m(),v(),d(),c(),I(),j(),A(),z(),G(),F(),i(),J={running:`loader-circle`,done:`check`,failed:`circle-alert`},Y=e=>e===void 0?``:e<1e3?`${e} ms`:`${(e/1e3).toFixed(+(e<1e4))} s`,X={command:`cmd`,keyword:`sel`,selection:`sel`,rep:`rep`,color:`color`,setting:`set`,value:`val`,object:`obj`,name:`name`,molecule:`mol`,file:`file`,enum:`opt`,bool:`opt`},Z={key:`i`,mod:!0},Q=0})))()}$();export{q as consoleUI};