import{la as K,ma as L,na as M,oa as J,pa as Q,qa as P,ra as X,sa as S,ta as Z,ua as ee,xa as U,za as ne}from"./chunk-P62NAEZQ.js";import"./chunk-6OQMRTKE.js";import"./chunk-MOCP7DZC.js";import"./chunk-NAIF4VHO.js";import"./chunk-QWGKM5XL.js";import"./chunk-U32R3EZG.js";import"./chunk-JW7EHGPK.js";import"./chunk-CD3NLFHE.js";import"./chunk-I7C4T3GW.js";import"./chunk-JHYVNEAF.js";import"./chunk-IBDX6GMX.js";import"./chunk-3S2WR44W.js";import"./chunk-CKMV573R.js";import"./chunk-43U4M42R.js";import"./chunk-JWWE6CZA.js";import"./chunk-OYI73O2L.js";import"./chunk-JY64XCWB.js";import"./chunk-GKVRJDKS.js";import"./chunk-GTJGSYB3.js";import"./chunk-C4U525HF.js";import"./chunk-AS72LCXT.js";import"./chunk-TJ2EFOCC.js";import"./chunk-W654BLJ2.js";import"./chunk-UY7KAHXS.js";import"./chunk-UASFW2HM.js";import{B as Y,D as G,G as z,H as s,I as f,K as R,k as E,o as j,p as N,r as O,w as W}from"./chunk-ERZC3ZPS.js";import"./chunk-KHBNYRDQ.js";import"./chunk-FAVIDOJH.js";import{O as B,P as H,Q as _,f as w,i as C}from"./chunk-TKVQ3IRU.js";import"./chunk-FY6Y25VJ.js";import"./chunk-LBPJNYCX.js";import"./chunk-DCANE7XH.js";var a={action:"msp-command-language-console-action",bar:"msp-command-language-console-bar",card:"msp-command-language-console-card",chip:"msp-command-language-console-chip",code:"msp-command-language-console-code",command:"msp-command-language-console-command",completion:"msp-command-language-console-completion",completions:"msp-command-language-console-completions",composer:"msp-command-language-console-composer",console:"msp-command-language-console-console",detail:"msp-command-language-console-detail",does:"msp-command-language-console-does",drop:"msp-command-language-console-drop",empty:"msp-command-language-console-empty",emptyText:"msp-command-language-console-emptyText",emptyTitle:"msp-command-language-console-emptyTitle",entry:"msp-command-language-console-entry",example:"msp-command-language-console-example",examples:"msp-command-language-console-examples",field:"msp-command-language-console-field",hint:"msp-command-language-console-hint",input:"msp-command-language-console-input",keys:"msp-command-language-console-keys",kind:"msp-command-language-console-kind",label:"msp-command-language-console-label",line:"msp-command-language-console-line",lines:"msp-command-language-console-lines",mark:"msp-command-language-console-mark",notice:"msp-command-language-console-notice",noticeIcon:"msp-command-language-console-noticeIcon",output:"msp-command-language-console-output",picker:"msp-command-language-console-picker",segments:"msp-command-language-console-segments",send:"msp-command-language-console-send",side:"msp-command-language-console-side",sigActive:"msp-command-language-console-sigActive",sigName:"msp-command-language-console-sigName",signature:"msp-command-language-console-signature",spacer:"msp-command-language-console-spacer",spin:"msp-command-language-console-spin",status:"msp-command-language-console-status",summary:"msp-command-language-console-summary",swatch:"msp-command-language-console-swatch",time:"msp-command-language-console-time",typed:"msp-command-language-console-typed",usage:"msp-command-language-console-usage",value:"msp-command-language-console-value"};G("command-language/prism-viewer/console.module.css",`@layer msp.components {
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
`);var oe="command-language.history",q=200,se={pymol:["fetch 1cbs","as cartoon","show sticks, resn REA","util.cbag resn REA","color slate, chain A","spectrum b, blue_white_red","zoom resn REA, 5","help"],vmd:["mol pdbload 1cbs","mol delrep 0 top","mol representation NewCartoon","mol color Structure","mol addrep top",'set sel [atomselect top "resname REA"]',"$sel num","help"]},ae=["pml","tcl","vmd"],$=class{constructor(e,o){this.api=e;this.preferences=o;this.#e=re(o),this.#n=this.#e.length;let i=e.script,l=i?ee(o,i):void 0;l&&this.#o.set(l)}#o=C("pymol");#a=C([]);#s=C("");#e;#n;#c="";#d=0;#m=Promise.resolve();get dialect(){return this.#o.asReadonly}get entries(){return this.#a.asReadonly}get draft(){return this.#s.asReadonly}get history(){return this.#e}setDialect(e){this.#o.set(e)}setDraft(e){this.#s.set(e),this.#n=this.#e.length}previous(){this.#n!==0&&(this.#n===this.#e.length&&(this.#c=this.#s.value),this.#n--,this.#s.set(this.#e[this.#n]))}next(){this.#n>=this.#e.length||(this.#n++,this.#s.set(this.#n===this.#e.length?this.#c:this.#e[this.#n]))}clear(){this.#a.set([])}async submit(e=this.#s.value,o=[]){if(!e.trim())return;this.#u(e),this.#s.set(""),this.#n=this.#e.length;let i=S(e),l=i?.dialect??this.#o.value;return this.#i(()=>this.#r(l,i?i.rest:e,e,o))}#i(e){let o=this.#m.then(e,e);return this.#m=o.catch(()=>{}),o}async openFiles(e){let o=await U(e),i=new Set(X(o)),l=e.filter(t=>i.size?i.has(t.name):o.has(t.name));if(!l.length){let t=this.#o.value,d=p=>/[\s,;"'{}]/.test(p)?`"${p.replace(/"/g,"")}"`:p,m=e.map(p=>t==="pymol"?`load ${d(p.name)}`:`mol new ${d(p.name)}`).join(`
`);await this.#i(()=>this.#r(t,m,m,e));return}for(let t of l)await this.#i(()=>this.#r(Z(t.name),o.get(t.name)??"",t.name,e,!0))}async#r(e,o,i,l,t=!1){let d=this.api.script,m=this.#p({dialect:e,input:i,state:"running",lines:[],...t?{files:!0}:{}});if(!d)return this.#t(m,"failed",[{kind:"error",text:"This viewer has no command language."}]);let p=d.preview(o,e,l.map(u=>u.name),await U(l)),g=p.diagnostics.filter(u=>u.severity==="error");if(g.length)return this.#t(m,"failed",g.map(u=>({kind:"error",text:K(o,{...u,hint:void 0}),...u.hint?{hint:u.hint}:{}})));let b=p.commands.length===1?p.commands[0]:void 0;if(b?.kind==="history"){let u=await(b.action==="undo"?this.api.history.undo():this.api.history.redo());return this.#t(m,u.ok?"done":"failed",[{kind:u.ok?"did":"error",text:u.ok?u.did:u.message}])}let x=await d.run({dialect:e,text:o,files:[...l]});if(!x.ok)return this.#t(m,"failed",[{kind:"error",text:x.message,...x.hint?{hint:x.hint}:{}}]);let k=(x.value?.outputs??[]).map(u=>({kind:u.kind,text:u.text}));return this.#t(m,"done",k.length?k:[{kind:"did",text:x.did}])}#p(e){let o=this.#d++;return this.#a.set([...this.#a.value,{...e,id:o}]),this.#l.set(o,performance.now()),o}#l=new Map;#t(e,o,i){let l,t=this.#l.get(e);this.#l.delete(e);let d=t===void 0?void 0:Math.round(performance.now()-t);return this.#a.set(this.#a.value.map(m=>m.id!==e?m:(l={...m,state:o,lines:i,...d!==void 0?{ms:d}:{}},l))),l}inspect(e){let o=this.api.script;if(!e.trim()||!o)return{kind:"empty"};let i=S(e),l=i?.dialect??this.#o.value,t=i?i.rest:e;if(!t.trim())return{kind:"empty"};let d=o.preview(t,l),m=d.diagnostics.find(g=>g.severity==="error");if(m)return{kind:"error",dialect:l,message:K(t,{...m,hint:void 0}),...m.hint?{hint:m.hint}:{}};let p=d.commands.map(J).filter(Boolean);return{kind:"ready",dialect:l,does:p.length>3?`${p.slice(0,3).join("; ")}; and ${p.length-3} more`:p.join("; "),warnings:d.diagnostics.filter(g=>g.severity!=="error").map(g=>g.message)}}completions(e,o=6){return this.assist(e,o).items.slice()}assist(e,o=12,i=!1){let l=this.api.script;if(!l||!e.trim()&&!i)return{items:[],typed:""};let t=S(e),d=t?.dialect??this.#o.value,m=t?e.slice(0,t.offset):"",p=t?t.rest:e,g=L(p,d,l.env()),b=p.slice(g.from,g.to);return{items:g.items.filter(h=>h.label.toLowerCase()!==b.toLowerCase()).slice(0,o).map(h=>({label:h.label,kind:h.kind,...h.detail?{detail:h.detail}:{},...h.rgb!==void 0?{rgb:h.rgb}:{},text:m+M(p,g,h)})),typed:b,...g.signature?{signature:g.signature}:{}}}edit(e){this.editable(e)&&(this.setDialect(e.dialect),this.setDraft(e.input))}editable(e){return!e.files}#u(e){this.#e[this.#e.length-1]!==e&&this.#e.push(e),this.#e.length>q&&this.#e.splice(0,this.#e.length-q);try{this.preferences?.set(oe,this.#e)}catch{}}placeholder(e){return e==="pymol"?"A PyMOL command: show sticks, resn REA":"A VMD command: mol addrep top"}};function re(r){try{let e=r?.get(oe);return Array.isArray(e)?e.filter(o=>typeof o=="string").slice(-q):[]}catch{return[]}}var le={running:"loader-circle",done:"check",failed:"circle-alert"},ce=r=>r===void 0?"":r<1e3?`${r} ms`:`${(r/1e3).toFixed(r<1e4?1:0)} s`;function me(r){let{line:e}=r;if(e.kind==="value")return s("div",{class:a.value,children:e.text});if(e.kind==="did")return s("div",{class:a.line,children:e.text});let o=e.kind==="error"?"circle-alert":e.kind==="warning"?"triangle-alert":"info";return f("div",{class:a.notice,"data-kind":e.kind,children:[s("span",{class:a.noticeIcon,children:s(z,{name:o,size:13})}),s("span",{children:e.text}),e.hint?s("span",{class:a.hint,children:e.hint}):null]})}function de(r){let{entry:e,model:o}=r,i=e.state==="running"?"Running":e.state==="failed"?"Failed":"Done",l=f("div",{class:a.entry,"data-state":e.state,children:[s("span",{class:a.mark,role:"img","aria-label":i,children:s(z,{name:le[e.state],size:14})}),f("div",{class:a.command,children:[s("span",{class:a.chip,children:P[e.dialect]}),s("span",{class:a.code,children:e.input})]}),f("div",{class:a.side,children:[s("span",{class:a.time,children:ce(e.ms)}),o.editable(e)?s("button",{type:"button",class:a.action,"aria-label":"Edit and run again","data-tip":"Edit and run again",onClick:()=>o.edit(e),children:s(z,{name:"pencil",size:13})}):null]}),e.lines.length?s("div",{class:a.lines,children:e.lines.map(t=>s(me,{line:t}))}):null]});return O(l,r.onSize),l}function pe(r){return f("div",{class:a.empty,children:[s("div",{class:a.emptyTitle,children:"PyMOL and VMD commands"}),s("div",{class:a.emptyText,children:"Type the commands you know. Enter runs them as one step, which Undo takes back; the line under the input says what they will do first. Open or drop a .pml, .tcl or .vmd script with the files it loads."}),s("div",{class:a.examples,children:s(N,{each:w(r.model.dialect,e=>se[e]),children:e=>s("button",{type:"button",class:a.example,onClick:()=>r.onPick(e),children:e})})})]})}function ue(r){let e=r.inspection;if(e.kind==="empty")return s("span",{class:a.does});if(e.kind==="error"){let i=e.hint?`${e.message} ${e.hint}`:e.message;return f("span",{class:a.does,"data-kind":"error","data-tip":i,children:[e.message,e.hint&&!r.usageShown?f("span",{class:a.hint,children:[" ",e.hint]}):null]})}let o=[e.does,...e.warnings].filter(Boolean).join(" \xB7 ");return f("span",{class:a.does,"data-tip":o,children:[P[e.dialect]," \xB7 ",o]})}function ge(r){let{signature:e,dialect:o}=r,i=o==="pymol"?", ":" ",l=[s("span",{class:a.sigName,children:e.name})," "];return e.params.forEach((t,d)=>{d&&l.push(i);let m=t.optional?`[${t.name}]`:t.name;l.push(d===e.active?s("strong",{class:a.sigActive,children:m}):m)}),f("div",{class:a.signature,children:[s("div",{class:a.usage,children:l}),s("div",{class:a.summary,children:e.summary})]})}var fe={command:"cmd",keyword:"sel",selection:"sel",rep:"rep",color:"color",setting:"set",value:"val",object:"obj",name:"name",molecule:"mol",file:"file",enum:"opt",bool:"opt"};function he(r,e){let o=e?r.toLowerCase().indexOf(e.toLowerCase()):-1;return o<0?r:[r.slice(0,o),s("mark",{class:a.typed,children:r.slice(o,o+e.length)}),r.slice(o+e.length)]}var te={key:"i",mod:!0},ve=0;function ye(r){let{model:e}=r,o=C(!1),i=s("div",{class:a.output,role:"log","aria-live":"off","aria-label":"Console output",children:s(N,{each:e.entries,fallback:()=>s(pe,{model:e,onPick:n=>d(n)}),children:n=>s(de,{entry:n,model:e,onSize:()=>l()})})}),l=W(()=>{i.scrollTop=i.scrollHeight}).request;O(i,l);let t=s("textarea",{class:a.input,rows:2,spellcheck:!1,"aria-label":"Command","aria-autocomplete":"list",onInput:n=>e.setDraft(n.currentTarget.value),onKeyDown:n=>{if(n.isComposing||n.keyCode===229)return;let c=n.currentTarget,D=_(n);if(D&&H(D)===H(te)){n.preventDefault(),h.set(!1),b.set(!0);return}let v=V.value;if(u.value&&n.key==="Escape"){n.preventDefault(),n.stopPropagation(),h.set(!0);return}if(v.length&&c.selectionStart===c.value.length){let y=k.value;if(n.key==="ArrowDown"||n.key==="ArrowUp"){n.preventDefault();let T=v.length;k.set(n.key==="ArrowDown"?(y+1)%T:y<=0?T-1:y-1);return}if(n.key==="Tab"&&!n.shiftKey){n.preventDefault(),m(v[Math.max(0,y)]);return}if(n.key==="Enter"&&!n.shiftKey&&y>=0){n.preventDefault(),m(v[y]);return}}if(n.key==="Enter"&&!n.shiftKey)n.preventDefault(),g();else if(n.key==="ArrowUp"&&!c.value.slice(0,c.selectionStart).includes(`
`))n.preventDefault(),p(()=>e.previous());else if(n.key==="ArrowDown"&&!c.value.slice(c.selectionEnd).includes(`
`))n.preventDefault(),p(()=>e.next());else if(n.key==="Tab"&&!n.shiftKey&&c.value.trim()&&c.selectionStart===c.value.length){let y=xe(e,c.value);y!==void 0&&(n.preventDefault(),e.setDraft(y))}}}),d=n=>{e.setDraft(n),t.focus()},m=n=>d(n.text),p=n=>{n(),h.set(!0)},g=()=>{t.value.trim()&&e.submit(t.value)};E(e.draft,n=>{t.value!==n&&(t.value=n,t.setSelectionRange(n.length,n.length))}),E(e.dialect,n=>{t.placeholder=e.placeholder(n)});let b=C(!1),x=w([e.draft,e.dialect,e.entries,b.asReadonly],(n,c,D,v)=>({assist:v&&!n.trim()?e.assist(n,Number.POSITIVE_INFINITY,!0):e.assist(n),inspection:e.inspect(n),dialect:S(n)?.dialect??e.dialect.value})),h=C(!1),k=C(-1);E(e.draft,()=>{b.set(!1),h.set(!1)});let u=w([x,h.asReadonly],(n,c)=>c||!n.assist.signature&&!n.assist.items.length?void 0:{items:n.assist.items,signature:n.assist.signature,dialect:n.dialect,typed:n.assist.typed}),V=w(u,n=>n?.items??[]);E(V,()=>k.set(-1));let A=`msp-console-completions-${ve+=1}`;E(w([V,k.asReadonly],(n,c)=>n.length?c:void 0),n=>{n!==void 0?t.setAttribute("aria-controls",A):t.removeAttribute("aria-controls"),n!==void 0&&n>=0?(t.setAttribute("aria-activedescendant",`${A}-${n}`),I.querySelector(`#${A}-${n}`)?.scrollIntoView?.({block:"nearest"})):t.removeAttribute("aria-activedescendant")});let ie=w(e.draft,n=>!n.trim()),F=s("input",{class:a.picker,type:"file",multiple:!0,onChange:n=>{let c=n.currentTarget,D=[...c.files??[]];c.value="",D.length&&e.openFiles(D)}});F.accept=[...ae.map(n=>`.${n}`),"*/*"].join(",");let I=f("div",{class:a.console,onDragEnter:n=>{n.dataTransfer?.types.includes("Files")&&o.set(!0)},onDragOver:n=>n.preventDefault(),onDragLeave:n=>{I.contains(n.relatedTarget)||o.set(!1)},onDrop:n=>{o.set(!1);let c=[...n.dataTransfer?.files??[]];c.length&&(n.preventDefault(),n.stopPropagation(),e.openFiles(c))},children:[f("div",{class:a.bar,children:[s("div",{class:a.segments,role:"group","aria-label":"Dialect",children:Q.map(n=>s(R,{size:"sm",variant:"ghost",pressed:w(e.dialect,c=>c===n),onClick:()=>e.setDialect(n),children:P[n]}))}),s("span",{class:a.spacer}),s(R,{size:"sm",variant:"ghost",icon:s(z,{name:"upload",size:15}),title:"Import a .pml, .tcl or .vmd script with the files it loads, or structure files (or drop them here)",onClick:()=>F.click(),children:"Import"}),s(R,{size:"sm",variant:"ghost",icon:s(z,{name:"trash-2",size:15}),title:"Clear the output",onClick:()=>e.clear()}),F]}),i,f("div",{class:a.composer,children:[s(j,{when:u,children:n=>{let{items:c}=n,D=c.some(v=>v.detail!==c[0].detail);return f("div",{class:a.card,children:[n.signature?s(ge,{signature:n.signature,dialect:n.dialect}):null,c.length?s("div",{class:a.completions,id:A,role:"listbox","aria-label":"Completions",children:c.map((v,y)=>f("div",{id:`${A}-${y}`,class:a.completion,role:"option","aria-selected":w(k.asReadonly,T=>String(T===y)),onPointerMove:()=>k.set(y),onMouseDown:T=>{T.preventDefault(),m(v)},children:[s("span",{class:a.kind,children:v.rgb!==void 0?s("span",{class:a.swatch,style:`background: #${v.rgb.toString(16).padStart(6,"0")}`}):fe[v.kind]??""}),s("span",{class:a.label,children:he(v.label,n.typed)}),s("span",{class:a.detail,children:D?v.detail??"":""})]}))}):null]})}}),f("div",{class:a.field,children:[t,s("button",{type:"button",class:a.send,"aria-label":"Run","data-tip":"Run (Enter)",disabled:ie,onClick:g,children:s(z,{name:"arrow-up",size:14})})]}),f("div",{class:a.status,children:[s(j,{when:w([x,u],(n,c)=>({inspection:n.inspection,usageShown:!!c?.signature})),children:n=>s(ue,{inspection:n.inspection,usageShown:n.usageShown})}),s("span",{class:a.keys,"data-tip":`Enter runs \xB7 Shift+Enter a new line \xB7 Tab completes \xB7 ${B(te)} lists the completions \xB7 \u2191 \u2193 the list or the history \xB7 Esc closes the help and the list`,children:"\u21B5 run \xB7 \u21E5 complete"})]})]}),s("div",{class:a.drop,children:"Drop a .pml, .tcl or .vmd script with the files it loads"})]});return E(o.asReadonly,n=>{n?I.setAttribute("data-dropping",""):I.removeAttribute("data-dropping")}),I}function xe(r,e){let o=r.api.script;if(!o)return;let i=S(e),l=i?.dialect??r.dialect.value,t=i?i.rest:e,d=L(t,l,o.env()),m=d.items.find(p=>p.insert!==t.slice(d.from,d.to));if(m)return`${i?e.slice(0,i.offset):""}${M(t,d,m)}`}function Oe(r){let e=new $(r.api,r.preferences);return{tabs:[{id:ne,title:"PyMOL / VMD console",heading:"Console",icon:"terminal",place:"foot",order:2.6,render:Y(()=>s(ye,{model:e}))}]}}export{ye as ConsoleView,xe as completeLine,Oe as consoleUI};
