import{a as K,b as N}from"./chunk-P76OUHLK.js";import{a as n}from"./chunk-W45A2M6R.js";import"./chunk-7WGN4GFB.js";import"./chunk-CDZOOEU5.js";import"./chunk-IPP74EKH.js";import"./chunk-RSWD7PUN.js";import"./chunk-7FB7CLKZ.js";import"./chunk-UNZHM6YE.js";import"./chunk-ODFQQHJA.js";import"./chunk-JJ2UHWUI.js";import"./chunk-QGELU2U3.js";import"./chunk-NAIF4VHO.js";import{e as T}from"./chunk-KZA3GHXT.js";import"./chunk-3TYFZ464.js";import"./chunk-JW7EHGPK.js";import"./chunk-3S2WR44W.js";import"./chunk-CKMV573R.js";import"./chunk-43U4M42R.js";import"./chunk-GTJGSYB3.js";import"./chunk-C4U525HF.js";import"./chunk-AS72LCXT.js";import"./chunk-TJ2EFOCC.js";import"./chunk-W654BLJ2.js";import"./chunk-UY7KAHXS.js";import"./chunk-UASFW2HM.js";import{B as U,D as q,G as x,H as t,I as f,J as j,Z as D,_ as L,ea as B,f as O,h as V,o as b,p as w}from"./chunk-ERZC3ZPS.js";import"./chunk-KHBNYRDQ.js";import"./chunk-FAVIDOJH.js";import{f as d,i as h,w as P}from"./chunk-TKVQ3IRU.js";import{j as R}from"./chunk-FY6Y25VJ.js";import{wb as y}from"./chunk-LBPJNYCX.js";import"./chunk-DCANE7XH.js";function G(e){let s=d(e.made,o=>o.length);return t(b,{when:d(s,o=>o>0),children:()=>f("div",{class:n.block,children:[f("div",{class:n.head,children:[f("span",{class:n.caption,children:["Superposed ",t("span",{class:n.count,children:s})]}),t(b,{when:d(s,o=>o>1&&!!e.clear),children:()=>t("button",{type:"button",class:n.clear,onClick:()=>e.clear?.(),children:"Clear all"})})]}),t(L,{class:n.list,contentClass:n.listContent,children:t(w,{each:e.made,by:o=>o.id,children:o=>f("div",{class:n.row,title:o.line,children:[t("span",{class:n.lead,children:t(x,{name:"superpose",size:13})}),t("span",{class:n.name,children:o.label}),t("span",{class:n.detail,children:o.detail}),t("span",{class:n.actions,children:t("button",{type:"button",class:n.action,title:"Remove the superposition","aria-label":`Remove the superposition of ${o.label}`,onClick:()=>e.remove(o.id),children:t(x,{name:"x",size:13})})})]})})})]})})}var l={entries:"msp-viewer-superpose-entries",entry:"msp-viewer-superpose-entry",hint:"msp-viewer-superpose-hint",index:"msp-viewer-superpose-index",label:"msp-viewer-superpose-label",problem:"msp-viewer-superpose-problem",role:"msp-viewer-superpose-role",superpose:"msp-viewer-superpose-superpose"};q("viewer/views/structure/superpose.module.css",`@layer msp.components {
.msp-viewer-superpose-superpose {
  font-size: var(--msp-font-size-sm);
  gap: var(--msp-space-2);
  display: grid;
}

.msp-viewer-superpose-entries {
  padding: var(--msp-space-1);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-panel);
  display: grid;
}

.msp-viewer-superpose-hint {
  padding: var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
  line-height: 1.45;
}

.msp-viewer-superpose-entry {
  align-items: center;
  gap: var(--msp-space-2);
  height: 26px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-sm);
  text-align: left;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }
}

.msp-viewer-superpose-index {
  min-width: 1.5ch;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  flex: none;
}

.msp-viewer-superpose-label {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  font-weight: 500;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-superpose-role {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  flex: none;
}

.msp-viewer-superpose-problem {
  max-width: 55%;
  color: var(--msp-color-warning);
  font-size: var(--msp-font-size-xs);
  text-overflow: clip;
  white-space: nowrap;
  flex: none;
  overflow: hidden;
}
}
`);function H(e){let{model:s}=e;return f("div",{class:l.superpose,children:[t(B,{form:s.form}),t("div",{class:l.entries,children:t(w,{each:s.entries,by:o=>o.id,fallback:()=>t("p",{class:l.hint,children:s.hint}),children:(o,m)=>f("button",{type:"button",class:l.entry,title:o.problem?`${o.label}: ${o.problem}`:"Focus",onClick:()=>s.focus(o.id),children:[t("span",{class:l.index,children:d(m,v=>`${v+1}`)}),t("span",{class:l.label,children:o.label}),o.problem?t("span",{class:l.problem,children:o.problem}):null,!o.problem&&m.value===0?t("span",{class:l.role,children:"reference"}):null]})})}),t(j,{icon:"superpose",label:"Superpose",disabled:d(s.ready,o=>!o),info:s.blocked?d(s.blocked,o=>o??""):void 0,onReset:()=>s.form.reset(),onApply:()=>s.superpose()}),s.made&&s.remove?t(G,{made:s.made,remove:o=>s.remove?.(o),clear:s.clear}):null]})}var Z={method:y.Select("chains",[["chains","Chains"],["tm-align","TM-align"],["db","UniProt (SIFTS)"],["ligands","Ligands"],["atoms","Atoms"]],{isEssential:!0,description:"What the structures are superposed by."}),alignSequences:y.Boolean(!0,{label:"Align sequences",isEssential:!0,description:"Guide the superposition by a sequence alignment of the chains.",hideIf:e=>e.method!=="chains"}),traceOnly:y.Boolean(!0,{label:"Trace only",isEssential:!0,description:"Use only CA (and equivalent) atoms.",hideIf:e=>e.method!=="chains"&&e.method!=="tm-align"&&e.method!=="db"})},W={chains:"Select one chain (or residues within it) in each of two or more structures.","tm-align":"Select one chain in each of two or more structures; best when sequence identity is low.",ligands:"Select one ligand in each of two or more structures.",atoms:"Select the same atoms, in the same order, in each structure.",db:"Superposes every structure by the residues they share in UniProt."},J=3,k=(e,s)=>`${e} ${s}${e===1?"":"s"}`;function _(e){let s=[e.reference?`onto ${e.reference.label}`:"superposed",e.method?K[e.method]:"",e.rmsd!==void 0&&Number.isFinite(e.rmsd)?`${e.rmsd.toFixed(2)} \xC5`:""].filter(Boolean).join(" \xB7 ");return{id:e.structure.ref,label:e.structure.label,detail:s,line:N(e)}}var ee=(e,s)=>e.id===s.id&&e.label===s.label&&e.detail===s.detail&&e.line===s.line;function se(e,s,o){switch(e){case"chains":case"tm-align":return s.polymerAtoms===0?"no polymer in it: select a chain":s.polymerChains>1?`its polymer is in ${k(s.polymerChains,"chain")}: select one`:void 0;case"ligands":return s.ligand?void 0:"not one ligand residue";case"atoms":return s.atoms<J?`${k(s.atoms,"atom")}: ${J} are needed`:o&&s!==o&&s.atoms!==o.atoms?`${k(s.atoms,"atom")}, the reference has ${o.atoms}`:void 0;default:return}}function Q(e){let s=new D(Z),o=h(!1),m=h([]),v=h(!1),$=h(""),M=h(void 0),g,S=!1,X=()=>s.values.value.method,A=()=>{let r=e.sources.structures.value,c=X();o.set(r.length>1);let a;if(c==="db")a=r.map(i=>({id:i.ref,label:`${i.label} \xB7 all chains`}));else{let i=e.sources.interaction.picked.value;a=i.map(u=>{let I=se(c,u,i[0]);return{id:u.ref,label:`${u.label} \xB7 ${u.line}`,...I?{problem:I}:{}}})}let p=a.find(i=>i.problem);m.set(a),M.set(p?`${p.label.split(" \xB7 ")[0]}: ${p.problem}.`:void 0),v.set(a.length>=2&&!p),$.set(a.length===1?`${W[c]} One so far.`:W[c])};A();let E=r=>{if(r!==!!g){if(!r){g?.unsubscribe(),g=void 0;return}g=R([s.values,e.sources.structures,e.sources.interaction.picked]).subscribe(A)}},z=e.api.superpose,C=z?P(z.made,r=>r.map(_),(r,c)=>T(r,c,ee)):void 0,F=r=>{r.ok||e.notify(r.hint?`${r.message} ${r.hint}`:r.message??"","error")},Y=async()=>{if(!(S||!v.value)){S=!0;try{let r=s.values.value,c=m.value.map(u=>u.id),a=e.api.superpose;if(!a)return;let p=c.map(u=>({target:"selection",structure:u})),i=r.method==="chains"?await a.chains({targets:p,alignSequences:r.alignSequences,traceOnly:r.traceOnly}):r.method==="tm-align"?await a.tmAlign({targets:p,traceOnly:r.traceOnly}):r.method==="ligands"?await a.ligands({targets:p}):r.method==="atoms"?await a.atoms({targets:p}):await a.db({traceOnly:r.traceOnly});e.notify(i.ok?i.did:i.hint?`${i.message} ${i.hint}`:i.message,i.ok?"success":"error")}finally{S=!1}}};return{available:o.asReadonly,form:s,entries:m.asReadonly,ready:v.asReadonly,hint:$.asReadonly,blocked:M.asReadonly,focus:r=>{e.api.focus.set({target:"selection",structure:r})},superpose:()=>{Y()},...C?{made:C,remove:r=>{e.api.superpose?.remove({structure:r}).then(F)},clear:()=>{e.api.superpose?.remove({structure:""}).then(F)}}:{},setActive:E,dispose(){E(!1)}}}function Fe(e){return{sections:[{id:"superposition.section.superpose",slot:"selection",title:"Superpose",icon:"layers",order:3,keywords:["superposition","align","tm-align","rmsd","uniprot","sifts","ligands","atoms"],render:U(()=>{let s=Q({api:e.api,sources:e.sources,notify:(o,m)=>e.managers.notifications.post(o,m)});return V(o=>s.setActive(o)),O(()=>s.dispose()),t(b,{when:s.available,fallback:()=>t("p",{style:"margin: 0; padding: var(--msp-space-2); color: var(--msp-color-text-subtle); font-size: var(--msp-font-size-xs)",children:"Load two or more structures to superpose them."}),children:()=>t(H,{model:s})})})}]}}export{Fe as superpositionUI};
