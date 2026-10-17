import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{S as t,n,r,t as i,x as a}from"./jsx-runtime-Dut-27nP.js";import{n as o,r as s}from"./registry-D35yV2Tb.js";import{i as c,n as l,t as u}from"./control-flow-BLsZc6z1.js";import{n as d,t as f}from"./combineLatest-DhE-IiGd.js";import{b as p,x as m}from"./work-queue-DoxU-HjK.js";import{C as h,S as g,w as _}from"./shell-view-BEqtIwth.js";import{n as v,t as y}from"./observable-state-C67cgDrf.js";import{n as b,t as x}from"./icon-Fyk1xIJy.js";import{t as S}from"./scroll-area-C3WxaIdw.js";import{d as C,f as w,t as T}from"./params-form-DodHex4Z.js";import{n as E,t as D}from"./param-definition-OHPHmB1q.js";import{t as O}from"./action-footer-Yw468haW.js";import{t as k}from"./src-DNTTijDB.js";import{i as A,o as j}from"./state-CXEOzpCZ.js";import{n as M,t as N}from"./selection-lists.module.css-NRz81vry.js";import{i as P,n as F,r as I}from"./operations-CqKFBmNy.js";function L(e){let t=p(e.made,e=>e.length);return n(l,{when:p(t,e=>e>0),children:()=>r(`div`,{class:N.block,children:[r(`div`,{class:N.head,children:[r(`span`,{class:N.caption,children:[`Superposed `,n(`span`,{class:N.count,children:t})]}),n(l,{when:p(t,t=>t>1&&!!e.clear),children:()=>n(`button`,{type:`button`,class:N.clear,onClick:()=>e.clear?.(),children:`Clear all`})})]}),n(S,{class:N.list,contentClass:N.listContent,children:n(u,{each:e.made,children:t=>r(`div`,{class:N.row,title:t.line,children:[n(`span`,{class:N.lead,children:n(x,{name:`superpose`,size:13})}),n(`span`,{class:N.name,children:t.label}),n(`span`,{class:N.detail,children:t.detail}),n(`span`,{class:N.actions,children:n(`button`,{type:`button`,class:N.action,title:`Remove the superposition`,"aria-label":`Remove the superposition of ${t.label}`,onClick:()=>e.remove(t.id),children:n(x,{name:`x`,size:13})})})]})},e=>e.id)})]})})}function R(){return(R=e((()=>{k(),b(),c(),m(),M(),i()})))()}var z;function B(){return(B=e((()=>{s(),z={entries:`msp-viewer-superpose-entries`,entry:`msp-viewer-superpose-entry`,hint:`msp-viewer-superpose-hint`,index:`msp-viewer-superpose-index`,label:`msp-viewer-superpose-label`,problem:`msp-viewer-superpose-problem`,role:`msp-viewer-superpose-role`,superpose:`msp-viewer-superpose-superpose`},o(`viewer/views/structure/superpose.module.css`,`@layer msp.components {
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
`)})))()}function V(e){let{model:t}=e;return r(`div`,{class:z.superpose,children:[n(T,{form:t.form}),n(`div`,{class:z.entries,children:n(u,{each:t.entries,fallback:()=>n(`p`,{class:z.hint,children:t.hint}),children:(e,i)=>r(`button`,{type:`button`,class:z.entry,title:e.problem?`${e.label}: ${e.problem}`:`Focus`,onClick:()=>t.focus(e.id),children:[n(`span`,{class:z.index,children:p(i,e=>`${e+1}`)}),n(`span`,{class:z.label,children:e.label}),e.problem?n(`span`,{class:z.problem,children:e.problem}):null,!e.problem&&i.value===0?n(`span`,{class:z.role,children:`reference`}):null]})},e=>e.id)}),n(O,{icon:`superpose`,label:`Superpose`,disabled:p(t.ready,e=>!e),info:t.blocked?p(t.blocked,e=>e??``):void 0,onReset:()=>t.form.reset(),onApply:()=>t.superpose()}),t.made&&t.remove?n(L,{made:t.made,remove:e=>t.remove?.(e),clear:t.clear}):null]})}function H(){return(H=e((()=>{k(),c(),m(),R(),B(),i()})))()}function U(e){let t=[e.reference?`onto ${e.reference.label}`:`superposed`,e.method?F[e.method]:``,e.rmsd!==void 0&&Number.isFinite(e.rmsd)?`${e.rmsd.toFixed(2)} Å`:``].filter(Boolean).join(` · `);return{id:e.structure.ref,label:e.structure.label,detail:t,line:P(e)}}function W(e,t,n){switch(e){case`chains`:case`tm-align`:return t.polymerAtoms===0?`no polymer in it: select a chain`:t.polymerChains>1?`its polymer is in ${Y(t.polymerChains,`chain`)}: select one`:void 0;case`ligands`:return t.ligand?void 0:`not one ligand residue`;case`atoms`:return t.atoms<J?`${Y(t.atoms,`atom`)}: ${J} are needed`:n&&t!==n&&t.atoms!==n.atoms?`${Y(t.atoms,`atom`)}, the reference has ${n.atoms}`:void 0;default:return}}function G(e){let t=new C(K),n=v(!1),r=v([]),i=v(!1),a=v(``),o=v(void 0),s,c=!1,l=()=>t.values.value.method,u=()=>{let t=e.sources.structures.value,s=l();n.set(t.length>1);let c;if(s===`db`)c=t.map(e=>({id:e.ref,label:`${e.label} · all chains`}));else{let t=e.sources.interaction.picked.value;c=t.map(e=>{let n=W(s,e,t[0]);return{id:e.ref,label:`${e.label} · ${e.line}`,...n?{problem:n}:{}}})}let u=c.find(e=>e.problem);r.set(c),o.set(u?`${u.label.split(` · `)[0]}: ${u.problem}.`:void 0),i.set(c.length>=2&&!u),a.set(c.length===1?`${q[s]} One so far.`:q[s])};u();let d=n=>{n!==!!s&&(n?s=f([t.values,e.sources.structures,e.sources.interaction.picked]).subscribe(u):(s?.unsubscribe(),s=void 0))},p=e.api.superpose,m=p?h(p.made,e=>e.map(U),(e,t)=>j(e,t,X)):void 0,g=t=>{t.ok||e.notify(t.hint?`${t.message} ${t.hint}`:t.message??``,`error`)},_=async()=>{if(!c&&i.value){c=!0;try{let n=t.values.value,i=r.value.map(e=>e.id),a=e.api.superpose;if(!a)return;let o=i.map(e=>({target:`selection`,structure:e})),s=n.method===`chains`?await a.chains({targets:o,alignSequences:n.alignSequences,traceOnly:n.traceOnly}):n.method===`tm-align`?await a.tmAlign({targets:o,traceOnly:n.traceOnly}):n.method===`ligands`?await a.ligands({targets:o}):n.method===`atoms`?await a.atoms({targets:o}):await a.db({traceOnly:n.traceOnly});e.notify(s.ok?s.did:s.hint?`${s.message} ${s.hint}`:s.message,s.ok?`success`:`error`)}finally{c=!1}}};return{available:n.asReadonly,form:t,entries:r.asReadonly,ready:i.asReadonly,hint:a.asReadonly,blocked:o.asReadonly,focus:t=>void e.api.focus.set({target:`selection`,structure:t}),superpose:()=>void _(),...m?{made:m,remove:t=>void e.api.superpose?.remove({structure:t}).then(g),clear:()=>void e.api.superpose?.remove({structure:``}).then(g)}:{},setActive:d,dispose(){d(!1)}}}var K,q,J,Y,X;function Z(){return(Z=e((()=>{E(),w(),g(),y(),d(),A(),I(),K={method:D.Select(`chains`,[[`chains`,`Chains`],[`tm-align`,`TM-align`],[`db`,`UniProt (SIFTS)`],[`ligands`,`Ligands`],[`atoms`,`Atoms`]],{isEssential:!0,description:`What the structures are superposed by.`}),alignSequences:D.Boolean(!0,{label:`Align sequences`,isEssential:!0,description:`Guide the superposition by a sequence alignment of the chains.`,hideIf:e=>e.method!==`chains`}),traceOnly:D.Boolean(!0,{label:`Trace only`,isEssential:!0,description:`Use only CA (and equivalent) atoms.`,hideIf:e=>e.method!==`chains`&&e.method!==`tm-align`&&e.method!==`db`})},q={chains:`Select one chain (or residues within it) in each of two or more structures.`,"tm-align":`Select one chain in each of two or more structures; best when sequence identity is low.`,ligands:`Select one ligand in each of two or more structures.`,atoms:`Select the same atoms, in the same order, in each structure.`,db:`Superposes every structure by the residues they share in UniProt.`},J=3,Y=(e,t)=>`${e} ${t}${e===1?``:`s`}`,X=(e,t)=>e.id===t.id&&e.label===t.label&&e.detail===t.detail&&e.line===t.line})))()}function Q(e){return{sections:[{id:`superposition.section.superpose`,slot:`selection`,title:`Superpose`,icon:`layers`,order:3,keywords:[`superposition`,`align`,`tm-align`,`rmsd`,`uniprot`,`sifts`,`ligands`,`atoms`],render:_(()=>{let r=G({api:e.api,sources:e.sources,notify:(t,n)=>e.managers.notifications.post(t,n)});return a(e=>r.setActive(e)),t(()=>r.dispose()),n(l,{when:r.available,fallback:()=>n(`p`,{style:`margin: 0; padding: var(--msp-space-2); color: var(--msp-color-text-subtle); font-size: var(--msp-font-size-xs)`,children:`Load two or more structures to superpose them.`}),children:()=>n(V,{model:r})})})}]}}function $(){return($=e((()=>{k(),H(),Z(),i()})))()}$();export{Q as superpositionUI};