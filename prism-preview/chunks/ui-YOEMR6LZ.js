import{a as N,b as G}from"./chunk-CTXARJUP.js";import{a as n}from"./chunk-HCL2FEFP.js";import"./chunk-C7GW6GWK.js";import"./chunk-BA6TQJDB.js";import"./chunk-FLMIVNCI.js";import"./chunk-ZF6SICLJ.js";import"./chunk-OMHO4Z3C.js";import{e as K}from"./chunk-CXQXVHSX.js";import"./chunk-5UC6IVNI.js";import"./chunk-OV2OLKVV.js";import"./chunk-73TVMDCL.js";import"./chunk-LQMXUF2W.js";import"./chunk-WPXA4PJ2.js";import"./chunk-R2KXRVPS.js";import"./chunk-3EGK4OQW.js";import"./chunk-CXZDK4AO.js";import"./chunk-IW73EPPS.js";import"./chunk-55INLPL2.js";import"./chunk-ZHHE2XG3.js";import"./chunk-CUCRPSNM.js";import"./chunk-VIA7CHLF.js";import{E as L,F as B,L as T,b as U,c as V,g as b,h as w,m as q,o as j,r as x,s as t,t as f,u as D}from"./chunk-ITOM7TT7.js";import"./chunk-KHBNYRDQ.js";import"./chunk-2IJB6S74.js";import{b as h,d as O}from"./chunk-4XDSNK62.js";import{i as d,j as R,s as P}from"./chunk-QZGD7T6O.js";import{pb as y}from"./chunk-CZB3H7J7.js";import"./chunk-DCANE7XH.js";function H(e){let s=e.made.pipe(d(o=>o.length),P());return t(b,{when:s.pipe(d(o=>o>0)),children:()=>f("div",{class:n.block,children:[f("div",{class:n.head,children:[f("span",{class:n.caption,children:["Superposed ",t("span",{class:n.count,children:s})]}),t(b,{when:s.pipe(d(o=>o>1&&!!e.clear)),children:()=>t("button",{type:"button",class:n.clear,onClick:()=>e.clear?.(),children:"Clear all"})})]}),t(B,{class:n.list,contentClass:n.listContent,children:t(w,{each:e.made,children:o=>f("div",{class:n.row,title:o.line,children:[t("span",{class:n.lead,children:t(x,{name:"superpose",size:13})}),t("span",{class:n.name,children:o.label}),t("span",{class:n.detail,children:o.detail}),t("span",{class:n.actions,children:t("button",{type:"button",class:n.action,title:"Remove the superposition","aria-label":`Remove the superposition of ${o.label}`,onClick:()=>e.remove(o.id),children:t(x,{name:"x",size:13})})})]})},o=>o.id)})]})})}var l={entries:"msp-viewer-superpose-entries",entry:"msp-viewer-superpose-entry",hint:"msp-viewer-superpose-hint",index:"msp-viewer-superpose-index",label:"msp-viewer-superpose-label",problem:"msp-viewer-superpose-problem",role:"msp-viewer-superpose-role",superpose:"msp-viewer-superpose-superpose"};j("viewer/views/structure/superpose.module.css",`@layer msp.components {
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
`);function W(e){let{model:s}=e;return f("div",{class:l.superpose,children:[t(T,{form:s.form}),t("div",{class:l.entries,children:t(w,{each:s.entries,fallback:()=>t("p",{class:l.hint,children:s.hint}),children:(o,m)=>f("button",{type:"button",class:l.entry,title:o.problem?`${o.label}: ${o.problem}`:"Focus",onClick:()=>s.focus(o.id),children:[t("span",{class:l.index,children:m.pipe(d(v=>`${v+1}`))}),t("span",{class:l.label,children:o.label}),o.problem?t("span",{class:l.problem,children:o.problem}):null,!o.problem&&m.value===0?t("span",{class:l.role,children:"reference"}):null]})},o=>o.id)}),t(D,{icon:"superpose",label:"Superpose",disabled:s.ready.pipe(d(o=>!o)),info:s.blocked?.pipe(d(o=>o??"")),onReset:()=>s.form.reset(),onApply:()=>s.superpose()}),s.made&&s.remove?t(H,{made:s.made,remove:o=>s.remove?.(o),clear:s.clear}):null]})}var _={method:y.Select("chains",[["chains","Chains"],["tm-align","TM-align"],["db","UniProt (SIFTS)"],["ligands","Ligands"],["atoms","Atoms"]],{isEssential:!0,description:"What the structures are superposed by."}),alignSequences:y.Boolean(!0,{label:"Align sequences",isEssential:!0,description:"Guide the superposition by a sequence alignment of the chains.",hideIf:e=>e.method!=="chains"}),traceOnly:y.Boolean(!0,{label:"Trace only",isEssential:!0,description:"Use only CA (and equivalent) atoms.",hideIf:e=>e.method!=="chains"&&e.method!=="tm-align"&&e.method!=="db"})},J={chains:"Select one chain (or residues within it) in each of two or more structures.","tm-align":"Select one chain in each of two or more structures; best when sequence identity is low.",ligands:"Select one ligand in each of two or more structures.",atoms:"Select the same atoms, in the same order, in each structure.",db:"Superposes every structure by the residues they share in UniProt."},Q=3,k=(e,s)=>`${e} ${s}${e===1?"":"s"}`;function ee(e){let s=[e.reference?`onto ${e.reference.label}`:"superposed",e.method?N[e.method]:"",e.rmsd!==void 0&&Number.isFinite(e.rmsd)?`${e.rmsd.toFixed(2)} \xC5`:""].filter(Boolean).join(" \xB7 ");return{id:e.structure.ref,label:e.structure.label,detail:s,line:G(e)}}var se=(e,s)=>e.id===s.id&&e.label===s.label&&e.detail===s.detail&&e.line===s.line;function oe(e,s,o){switch(e){case"chains":case"tm-align":return s.polymerAtoms===0?"no polymer in it: select a chain":s.polymerChains>1?`its polymer is in ${k(s.polymerChains,"chain")}: select one`:void 0;case"ligands":return s.ligand?void 0:"not one ligand residue";case"atoms":return s.atoms<Q?`${k(s.atoms,"atom")}: ${Q} are needed`:o&&s!==o&&s.atoms!==o.atoms?`${k(s.atoms,"atom")}, the reference has ${o.atoms}`:void 0;default:return}}function X(e){let s=new L(_),o=h(!1),m=h([]),v=h(!1),$=h(""),M=h(void 0),g,S=!1,Y=()=>s.values.value.method,A=()=>{let r=e.sources.structures.value,c=Y();o.set(r.length>1);let a;if(c==="db")a=r.map(i=>({id:i.ref,label:`${i.label} \xB7 all chains`}));else{let i=e.sources.interaction.picked.value;a=i.map(u=>{let I=oe(c,u,i[0]);return{id:u.ref,label:`${u.label} \xB7 ${u.line}`,...I?{problem:I}:{}}})}let p=a.find(i=>i.problem);m.set(a),M.set(p?`${p.label.split(" \xB7 ")[0]}: ${p.problem}.`:void 0),v.set(a.length>=2&&!p),$.set(a.length===1?`${J[c]} One so far.`:J[c])};A();let E=r=>{if(r!==!!g){if(!r){g?.unsubscribe(),g=void 0;return}g=R([s.values,e.sources.structures,e.sources.interaction.picked]).subscribe(A)}},z=e.api.superpose,C=z?O(z.made,r=>r.map(ee),(r,c)=>K(r,c,se)):void 0,F=r=>{r.ok||e.notify(r.hint?`${r.message} ${r.hint}`:r.message??"","error")},Z=async()=>{if(!(S||!v.value)){S=!0;try{let r=s.values.value,c=m.value.map(u=>u.id),a=e.api.superpose;if(!a)return;let p=c.map(u=>({target:"selection",structure:u})),i=r.method==="chains"?await a.chains({targets:p,alignSequences:r.alignSequences,traceOnly:r.traceOnly}):r.method==="tm-align"?await a.tmAlign({targets:p,traceOnly:r.traceOnly}):r.method==="ligands"?await a.ligands({targets:p}):r.method==="atoms"?await a.atoms({targets:p}):await a.db({traceOnly:r.traceOnly});e.notify(i.ok?i.did:i.hint?`${i.message} ${i.hint}`:i.message,i.ok?"success":"error")}finally{S=!1}}};return{available:o.asReadonly,form:s,entries:m.asReadonly,ready:v.asReadonly,hint:$.asReadonly,blocked:M.asReadonly,focus:r=>{e.api.focus.set({target:"selection",structure:r})},superpose:()=>{Z()},...C?{made:C,remove:r=>{e.api.superpose?.remove({structure:r}).then(F)},clear:()=>{e.api.superpose?.remove({structure:""}).then(F)}}:{},setActive:E,dispose(){E(!1)}}}function Ie(e){return{sections:[{id:"superposition.section.superpose",slot:"selection",title:"Superpose",icon:"layers",order:3,keywords:["superposition","align","tm-align","rmsd","uniprot","sifts","ligands","atoms"],render:q(()=>{let s=X({api:e.api,sources:e.sources,notify:(o,m)=>e.managers.notifications.post(o,m)});return V(o=>s.setActive(o)),U(()=>s.dispose()),t(b,{when:s.available,fallback:()=>t("p",{style:"margin: 0; padding: var(--msp-space-2); color: var(--msp-color-text-subtle); font-size: var(--msp-font-size-xs)",children:"Load two or more structures to superpose them."}),children:()=>t(W,{model:s})})})}]}}export{Ie as superpositionUI};
