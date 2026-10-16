import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{_ as t,g as n,n as r,r as i,t as a}from"./jsx-runtime-DzTO5r4L.js";import{n as o,r as s}from"./registry-D35yV2Tb.js";import{d as c,f as l,t as u}from"./params-form-BiSG3JZ9.js";import{i as d,n as f,t as p}from"./control-flow-2XcFB3wB.js";import{n as m,t as h}from"./map-COHPbqb4.js";import{n as g,t as _}from"./combineLatest-nINHdI9G.js";import{C as v,S as y,w as b}from"./shell-view--7tL82cI.js";import{n as x,t as S}from"./distinctUntilChanged-Bi0nDGSG.js";import{n as C,r as w}from"./observable-state-8hMFvtS9.js";import{n as T,t as E}from"./icon-Fyk1xIJy.js";import{t as D}from"./scroll-area-O9ZFxK58.js";import{n as O,t as k}from"./param-definition-OHPHmB1q.js";import{t as A}from"./action-footer-CNxDsTvQ.js";import{t as j}from"./src-CNHrM0KV.js";import{a as M,i as N}from"./state-C0CgYlse.js";import{n as ee,t as P}from"./selection-lists.module.css-NRz81vry.js";import{i as F,n as I,r as L}from"./operations-BzeyZPIc.js";function R(e){let t=e.made.pipe(m(e=>e.length),S());return r(f,{when:t.pipe(m(e=>e>0)),children:()=>i(`div`,{class:P.block,children:[i(`div`,{class:P.head,children:[i(`span`,{class:P.caption,children:[`Superposed `,r(`span`,{class:P.count,children:t})]}),r(f,{when:t.pipe(m(t=>t>1&&!!e.clear)),children:()=>r(`button`,{type:`button`,class:P.clear,onClick:()=>e.clear?.(),children:`Clear all`})})]}),r(D,{class:P.list,contentClass:P.listContent,children:r(p,{each:e.made,children:t=>i(`div`,{class:P.row,title:t.line,children:[r(`span`,{class:P.lead,children:r(E,{name:`superpose`,size:13})}),r(`span`,{class:P.name,children:t.label}),r(`span`,{class:P.detail,children:t.detail}),r(`span`,{class:P.actions,children:r(`button`,{type:`button`,class:P.action,title:`Remove the superposition`,"aria-label":`Remove the superposition of ${t.label}`,onClick:()=>e.remove(t.id),children:r(E,{name:`x`,size:13})})})]})},e=>e.id)})]})})}function z(){return(z=e((()=>{j(),T(),d(),x(),h(),ee(),a()})))()}var B;function V(){return(V=e((()=>{s(),B={entries:`msp-viewer-superpose-entries`,entry:`msp-viewer-superpose-entry`,hint:`msp-viewer-superpose-hint`,index:`msp-viewer-superpose-index`,label:`msp-viewer-superpose-label`,problem:`msp-viewer-superpose-problem`,role:`msp-viewer-superpose-role`,superpose:`msp-viewer-superpose-superpose`},o(`viewer/views/structure/superpose.module.css`,`@layer msp.components {
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
`)})))()}function H(e){let{model:t}=e;return i(`div`,{class:B.superpose,children:[r(u,{form:t.form}),r(`div`,{class:B.entries,children:r(p,{each:t.entries,fallback:()=>r(`p`,{class:B.hint,children:t.hint}),children:(e,n)=>i(`button`,{type:`button`,class:B.entry,title:e.problem?`${e.label}: ${e.problem}`:`Focus`,onClick:()=>t.focus(e.id),children:[r(`span`,{class:B.index,children:n.pipe(m(e=>`${e+1}`))}),r(`span`,{class:B.label,children:e.label}),e.problem?r(`span`,{class:B.problem,children:e.problem}):null,!e.problem&&n.value===0?r(`span`,{class:B.role,children:`reference`}):null]})},e=>e.id)}),r(A,{icon:`superpose`,label:`Superpose`,disabled:t.ready.pipe(m(e=>!e)),info:t.blocked?.pipe(m(e=>e??``)),onReset:()=>t.form.reset(),onApply:()=>t.superpose()}),t.made&&t.remove?r(R,{made:t.made,remove:e=>t.remove?.(e),clear:t.clear}):null]})}function U(){return(U=e((()=>{h(),j(),d(),z(),V(),a()})))()}function W(e){let t=[e.reference?`onto ${e.reference.label}`:`superposed`,e.method?I[e.method]:``,e.rmsd!==void 0&&Number.isFinite(e.rmsd)?`${e.rmsd.toFixed(2)} Å`:``].filter(Boolean).join(` · `);return{id:e.structure.ref,label:e.structure.label,detail:t,line:F(e)}}function G(e,t,n){switch(e){case`chains`:case`tm-align`:return t.polymerAtoms===0?`no polymer in it: select a chain`:t.polymerChains>1?`its polymer is in ${X(t.polymerChains,`chain`)}: select one`:void 0;case`ligands`:return t.ligand?void 0:`not one ligand residue`;case`atoms`:return t.atoms<Y?`${X(t.atoms,`atom`)}: ${Y} are needed`:n&&t!==n&&t.atoms!==n.atoms?`${X(t.atoms,`atom`)}, the reference has ${n.atoms}`:void 0;default:return}}function K(e){let t=new c(q),n=w(!1),r=w([]),i=w(!1),a=w(``),o=w(void 0),s,l=!1,u=()=>t.values.value.method,d=()=>{let t=e.sources.structures.value,s=u();n.set(t.length>1);let c;if(s===`db`)c=t.map(e=>({id:e.ref,label:`${e.label} · all chains`}));else{let t=e.sources.interaction.picked.value;c=t.map(e=>{let n=G(s,e,t[0]);return{id:e.ref,label:`${e.label} · ${e.line}`,...n?{problem:n}:{}}})}let l=c.find(e=>e.problem);r.set(c),o.set(l?`${l.label.split(` · `)[0]}: ${l.problem}.`:void 0),i.set(c.length>=2&&!l),a.set(c.length===1?`${J[s]} One so far.`:J[s])};d();let f=n=>{n!==!!s&&(n?s=_([t.values,e.sources.structures,e.sources.interaction.picked]).subscribe(d):(s?.unsubscribe(),s=void 0))},p=e.api.superpose,m=p?v(p.made,e=>e.map(W),(e,t)=>M(e,t,Z)):void 0,h=t=>{t.ok||e.notify(t.hint?`${t.message} ${t.hint}`:t.message??``,`error`)},g=async()=>{if(!l&&i.value){l=!0;try{let n=t.values.value,i=r.value.map(e=>e.id),a=e.api.superpose;if(!a)return;let o=i.map(e=>({target:`selection`,structure:e})),s=n.method===`chains`?await a.chains({targets:o,alignSequences:n.alignSequences,traceOnly:n.traceOnly}):n.method===`tm-align`?await a.tmAlign({targets:o,traceOnly:n.traceOnly}):n.method===`ligands`?await a.ligands({targets:o}):n.method===`atoms`?await a.atoms({targets:o}):await a.db({traceOnly:n.traceOnly});e.notify(s.ok?s.did:s.hint?`${s.message} ${s.hint}`:s.message,s.ok?`success`:`error`)}finally{l=!1}}};return{available:n.asReadonly,form:t,entries:r.asReadonly,ready:i.asReadonly,hint:a.asReadonly,blocked:o.asReadonly,focus:t=>void e.api.focus.set({target:`selection`,structure:t}),superpose:()=>void g(),...m?{made:m,remove:t=>void e.api.superpose?.remove({structure:t}).then(h),clear:()=>void e.api.superpose?.remove({structure:``}).then(h)}:{},setActive:f,dispose(){f(!1)}}}var q,J,Y,X,Z;function Q(){return(Q=e((()=>{O(),l(),y(),C(),g(),N(),L(),q={method:k.Select(`chains`,[[`chains`,`Chains`],[`tm-align`,`TM-align`],[`db`,`UniProt (SIFTS)`],[`ligands`,`Ligands`],[`atoms`,`Atoms`]],{isEssential:!0,description:`What the structures are superposed by.`}),alignSequences:k.Boolean(!0,{label:`Align sequences`,isEssential:!0,description:`Guide the superposition by a sequence alignment of the chains.`,hideIf:e=>e.method!==`chains`}),traceOnly:k.Boolean(!0,{label:`Trace only`,isEssential:!0,description:`Use only CA (and equivalent) atoms.`,hideIf:e=>e.method!==`chains`&&e.method!==`tm-align`&&e.method!==`db`})},J={chains:`Select one chain (or residues within it) in each of two or more structures.`,"tm-align":`Select one chain in each of two or more structures; best when sequence identity is low.`,ligands:`Select one ligand in each of two or more structures.`,atoms:`Select the same atoms, in the same order, in each structure.`,db:`Superposes every structure by the residues they share in UniProt.`},Y=3,X=(e,t)=>`${e} ${t}${e===1?``:`s`}`,Z=(e,t)=>e.id===t.id&&e.label===t.label&&e.detail===t.detail&&e.line===t.line})))()}function te(e){return{sections:[{id:`superposition.section.superpose`,slot:`selection`,title:`Superpose`,icon:`layers`,order:3,keywords:[`superposition`,`align`,`tm-align`,`rmsd`,`uniprot`,`sifts`,`ligands`,`atoms`],render:b(()=>{let i=K({api:e.api,sources:e.sources,notify:(t,n)=>e.managers.notifications.post(t,n)});return n(e=>i.setActive(e)),t(()=>i.dispose()),r(f,{when:i.available,fallback:()=>r(`p`,{style:`margin: 0; padding: var(--msp-space-2); color: var(--msp-color-text-subtle); font-size: var(--msp-font-size-xs)`,children:`Load two or more structures to superpose them.`}),children:()=>r(H,{model:i})})})}]}}function $(){return($=e((()=>{j(),U(),Q(),a()})))()}$();export{te as superpositionUI};