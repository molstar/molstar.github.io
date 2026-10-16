import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{c as r,s as i}from"./builder-DcT68JdP.js";import{c as a,n as o,o as s,r as c,s as l,t as u}from"./seqstar-cases-BolrmDeD.js";import{d,i as f,r as p,u as m}from"./seqstar-prism-C8YUN_JZ.js";import{c as h,i as g,m as ee,t as _,u as v}from"./ui-5oW1_QIl.js";import{n as te,t as y}from"./seqstar-issues-CFHKbCNz.js";import{h as b,s as x,t as S,u as C}from"./src-DZzW-pKC.js";import{n as w,t as T}from"./mount-C19ECc6u.js";import{n as E,t as ne}from"./seqstar-read-cJpSZCRE.js";function re({c:e,view:t}){let n=(0,O.useMemo)(()=>{let{view:n,issues:i}=r(e.doc,e.set,t.ref,a,C),o=e=>e.code.startsWith(`svs.render.`),s=i.filter(e=>!o(e)),c=x(n,e.set),l=[...i.filter(o),...c.issues];return{view:n,root:c.root,lost:l,other:s}},[e,t.ref]),i=(0,O.useRef)(null),[o,s]=(0,O.useState)(``),[c,u]=(0,O.useState)(!1),[f,p]=(0,O.useState)([]),[m,_]=(0,O.useState)(null);return(0,O.useEffect)(()=>{let t=i.current,r=n.root;if(!t||!r)return;let a=e.set,o=e=>e>=0?a.strings.get(n.view.blocks.label[e]):`–`,c=w(r,t,{view:n.view,set:a},e=>{let t=e.layer>=0?a.strings.get(n.view.layers.ref[e.layer]):`–`,r=e.extent.map(e=>`${o(e.block)} ${e.start}${e.stop-e.start>1?`–${e.stop-1}`:``}`),i=r.length?`, extent ${r.join(`, `)}`:``;s(`${e.kind}: block ${o(e.block)}, index ${e.index}, layer ${t}, item ${e.item}${i}`);let l=e.item<0?`containing`:`element`;c.highlight(e.kind===`leave`?null:b(n.view,a,e.extent),{closure:l}),e.kind===`hover`&&_(e.hint),e.kind===`leave`&&_(null)}),l=e=>{let t=e.target,n=t.closest?.(`[data-svs-hint]`),r=t.closest?.(`.svs-label-text`),i=r&&r.scrollWidth>r.clientWidth?r:null,a=n??i,o=n?.getAttribute(`data-svs-hint`)??i?.textContent??``;_(e=>e?.anchor===a?e:a?{anchor:a,text:o}:null)},u=()=>_(null);t.addEventListener(`pointerover`,l),t.addEventListener(`focusin`,l),t.addEventListener(`pointerleave`,u),t.addEventListener(`focusout`,u);let d=!0;return c.ready.then(e=>d&&p(e)),()=>{d=!1,p([]),t.removeEventListener(`pointerover`,l),t.removeEventListener(`focusin`,l),t.removeEventListener(`pointerleave`,u),t.removeEventListener(`focusout`,u),c.dispose()}},[n,e.set]),(0,k.jsxs)(`section`,{className:d.card,children:[(0,k.jsxs)(`h2`,{className:d.heading,children:[t.label,` `,(0,k.jsx)(`span`,{className:d.code,children:t.ref})]}),(0,k.jsx)(h,{orientation:`horizontal`,children:(0,k.jsx)(`div`,{ref:i,className:d.nightingale})}),(0,k.jsx)(ee,{anchor:m?.anchor??null,content:m?.text}),(0,k.jsx)(`div`,{className:d.status,children:o||`Hover a feature or a residue.`}),(0,k.jsx)(`h3`,{className:d.subheading,children:`What Nightingale cannot draw`}),(0,k.jsx)(y,{issues:f.length?[...n.lost,...f]:n.lost}),(0,k.jsx)(`h3`,{className:d.subheading,children:`Other issues of the resolution`}),(0,k.jsx)(y,{issues:n.other}),(0,k.jsx)(`div`,{className:d.row,children:(0,k.jsx)(g,{tone:`quiet`,onClick:()=>u(e=>!e),children:c?`Hide the element description`:`Show the element description`})}),(0,k.jsx)(v,{open:c,children:(0,k.jsx)(h,{className:d.box,orientation:`both`,children:(0,k.jsx)(`pre`,{className:d.pre,children:c?l(n.root):``})})})]})}function ie({name:e}){let t=E(c(e));return t.views.map(e=>(0,k.jsx)(re,{c:t,view:e},e.ref))}function ae({name:e}){let[t,n]=(0,O.useState)(!1),{code:r,helpers:i,fixtures:a}=(0,O.useMemo)(()=>o(e),[e]),s=[i.length>0&&`from cases.ts: ${i.join(`, `)}`,a.length>0&&`from the fixtures (load-fixtures.ts): ${a.join(`, `)}`].filter(Boolean);return(0,k.jsxs)(`div`,{className:d.stack,children:[(0,k.jsx)(`div`,{className:d.row,children:(0,k.jsx)(g,{tone:`quiet`,onClick:()=>n(e=>!e),children:t?`Hide the builder code`:`Builder code`})}),(0,k.jsx)(v,{open:t,children:(0,k.jsxs)(`div`,{className:d.stack,children:[(0,k.jsx)(`div`,{className:d.code,children:s.length>0?`Uses ${s.join(`; `)}.`:`Uses only the builder (@molstar/seq-core/builder).`}),(0,k.jsx)(h,{className:d.box,orientation:`both`,children:(0,k.jsx)(`pre`,{className:d.pre,children:t?r:``})})]})})]})}function D({name:e}){return(0,k.jsxs)(p,{title:u[e],caption:`Nightingale 5 (^5, from npm), through @molstar/seq-nightingale; fixtures, no network.`,children:[(0,k.jsx)(ae,{name:e}),(0,k.jsx)(O.Suspense,{fallback:(0,k.jsx)(`div`,{className:d.status,children:`Compiling…`}),children:(0,k.jsx)(ie,{name:e})})]})}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{i(),S(),T(),ne(),O=t(),s(),m(),te(),f(),_(),k=n(),A={title:`Seq*/Cases/Nightingale`,parameters:{layout:`fullscreen`,docs:{description:{component:`The second viewer that checks the format: each acceptance
case compiled on the test fixtures, each view resolved with Nightingale's supported set,
materialized as Nightingale's elements and mounted. Below each: what Nightingale cannot draw (the resolution's
fallbacks, materialize's losses and progressive tiles that failed) and the element description. Hover a feature
or residue: the event mapped back to block, index, layer, item and the item's extent (every fragment), lit in
every section through the host's loci. Block names and range labels are mount's layer over the tracks, following
zoom; one cut short or with no room is the hover's tooltip. Groups are header rows: click one to collapse or expand it in place; a
track's ⓘ (its data's provenance) and a label cut short say the rest in a tooltip.`}}}},j={name:`p53: text and tracks`,render:()=>(0,k.jsx)(D,{name:`case1`})},M={name:`Antibody Fv, Kabat and IMGT`,render:()=>(0,k.jsx)(D,{name:`case2`})},N={name:`SH2 family`,render:()=>(0,k.jsx)(D,{name:`case3`})},P={name:`tRNA family, base pairs`,render:()=>(0,k.jsx)(D,{name:`case4`})},F={name:`DNA construct`,render:()=>(0,k.jsx)(D,{name:`case5`})},I={name:`Imatinib in ABL`,render:()=>(0,k.jsx)(D,{name:`case6`})},L={name:`Barnase–barstar`,render:()=>(0,k.jsx)(D,{name:`case7`})},R={name:`AlphaFold DB complex`,render:()=>(0,k.jsx)(D,{name:`case8`})},z={name:`PF00042 by view`,render:()=>(0,k.jsx)(D,{name:`case9`})},B={name:`The Stories drafts`,render:()=>(0,k.jsx)(D,{name:`case10`})},V={name:`Designed dimer`,render:()=>(0,k.jsx)(D,{name:`case12`})},H={name:`p53 features, UniProt-style`,render:()=>(0,k.jsx)(D,{name:`case13`})},U={name:`Protein over its coding DNA`,render:()=>(0,k.jsx)(D,{name:`case14`})},W={name:`Indels in protein designs`,render:()=>(0,k.jsx)(D,{name:`case15`})},G={name:`A plasmid map`,render:()=>(0,k.jsx)(D,{name:`case16`})},K={name:`A genotype matrix`,render:()=>(0,k.jsx)(D,{name:`case17`})},q={name:`Finding things in p53`,render:()=>(0,k.jsx)(D,{name:`case18`})},J={name:`A chromosome by region`,render:()=>(0,k.jsx)(D,{name:`case19`})},Y={name:`A protein on its genome`,render:()=>(0,k.jsx)(D,{name:`case20`})},X={name:`A gene on its reverse strand`,render:()=>(0,k.jsx)(D,{name:`case21`})},Z={name:`A family triaged`,render:()=>(0,k.jsx)(D,{name:`case22`})},Q=[`Case1`,`Case2`,`Case3`,`Case4`,`Case5`,`Case6`,`Case7`,`Case8`,`Case9`,`Case10`,`Case12`,`Case13`,`Case14`,`Case15`,`Case16`,`Case17`,`Case18`,`Case19`,`Case20`,`Case21`,`Case22`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'p53: text and tracks',
  render: () => <Case name="case1" />
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Antibody Fv, Kabat and IMGT',
  render: () => <Case name="case2" />
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'SH2 family',
  render: () => <Case name="case3" />
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'tRNA family, base pairs',
  render: () => <Case name="case4" />
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'DNA construct',
  render: () => <Case name="case5" />
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Imatinib in ABL',
  render: () => <Case name="case6" />
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Barnase–barstar',
  render: () => <Case name="case7" />
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'AlphaFold DB complex',
  render: () => <Case name="case8" />
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'PF00042 by view',
  render: () => <Case name="case9" />
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'The Stories drafts',
  render: () => <Case name="case10" />
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Designed dimer',
  render: () => <Case name="case12" />
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'p53 features, UniProt-style',
  render: () => <Case name="case13" />
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Protein over its coding DNA',
  render: () => <Case name="case14" />
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Indels in protein designs',
  render: () => <Case name="case15" />
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'A plasmid map',
  render: () => <Case name="case16" />
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'A genotype matrix',
  render: () => <Case name="case17" />
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Finding things in p53',
  render: () => <Case name="case18" />
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'A chromosome by region',
  render: () => <Case name="case19" />
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'A protein on its genome',
  render: () => <Case name="case20" />
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'A gene on its reverse strand',
  render: () => <Case name="case21" />
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'A family triaged',
  render: () => <Case name="case22" />
}`,...Z.parameters?.docs?.source}}}})))()}$();export{j as Case1,B as Case10,V as Case12,H as Case13,U as Case14,W as Case15,G as Case16,K as Case17,q as Case18,J as Case19,M as Case2,Y as Case20,X as Case21,Z as Case22,N as Case3,P as Case4,F as Case5,I as Case6,L as Case7,R as Case8,z as Case9,Q as __namedExportsOrder,A as default};