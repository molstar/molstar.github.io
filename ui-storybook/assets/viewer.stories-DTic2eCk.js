import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{Gn as r,Ir as i,Qn as a,Rr as o,Wn as s,Xn as c,Zn as l,_r as u,pr as ee,vr as te,yr as d}from"./builder-ByqTVzYP.js";import{Tt as ne,cn as f,ln as re,un as ie,wt as ae}from"./surface-BLRiux73.js";import{E as oe,T as se,a as ce,b as le,i as ue,l as de,o as fe,r as p,t as m,x as pe}from"./seqstar-cases-BtNCAgHZ.js";import{n as me,o as he}from"./seqstar-ideogram-otiqKRMX.js";import{M as ge,N as _e,O as ve,P as ye,a as be,f as xe,g as Se,i as Ce,k as we,l as Te,p as Ee,r as De,v as h}from"./skin-CzQuWorh.js";import{a as g,d as _,i as Oe,n as ke,r as v,u as Ae}from"./seqstar-prism-C8YUN_JZ.js";import{_ as je,a as y,d as Me,f as Ne,g as Pe,i as Fe,o as Ie,p as Le,s as Re,t as b,u as ze}from"./seqstar-viewer-CTBrsUUZ.js";import{f as x,h as Be,i as S,t as Ve}from"./ui-5oW1_QIl.js";import{n as He,t as Ue}from"./seqstar-viewer-args-BYkWoWp4.js";import{a as We,i as Ge,n as Ke,o as qe,t as Je}from"./seqstar-docs-circular-qL3JLQBY.js";import{m as Ye,r as Xe}from"./seqstar-docs-streamed-R5o3_-og.js";import{n as C,t as Ze}from"./seqstar-read-cJpSZCRE.js";import{n as w,t as Qe}from"./seqstar-search.module-CumfeNIO.js";function $e(e){return new nt(e?.normalize??tt)}var et,tt,nt;function rt(){return(rt=e((()=>{et=(e,t)=>e<t?-1:+(e>t),tt=e=>e.normalize(`NFKC`).toLowerCase(),nt=class{normalize;keys=[];ids=new Int32Array;pendingKeys=[];pendingIds=[];constructor(e){this.normalize=e}get size(){return this.merge(),this.keys.length}add(e,t,n,r){for(let i=n;i<n+r;i++)this.pendingKeys.push(this.normalize(t[i])),this.pendingIds.push(e[i])}remove(e,t){if(t===0||this.size===0)return;let n=new Set;for(let r=0;r<t;r++)n.add(e[r]);this.merge();let r=[],i=[];for(let e=0;e<this.keys.length;e++)n.has(this.ids[e])||(r.push(this.keys[e]),i.push(this.ids[e]));this.keys=r,this.ids=Int32Array.from(i)}exact(e,t){this.merge();let n=this.normalize(e),r=0;for(let e=this.lowerBound(n);e<this.keys.length&&this.keys[e]===n;e++,r++)t(this.ids[e]);return r}prefix(e,t){this.merge();let n=this.normalize(e),r=this.lowerBound(n),i=r,a=this.keys.length;for(;i<a;){let e=i+a>>>1;this.keys[e].startsWith(n)?i=e+1:a=e}for(let e=r;e<i;e++)t(this.ids[e]);return i-r}matches(e,t){this.merge();let n=e.global||e.sticky,r=0;for(let i=0;i<this.keys.length;i++)n&&(e.lastIndex=0),e.test(this.keys[i])&&(t(this.ids[i]),r++);return r}lowerBound(e){let t=0,n=this.keys.length;for(;t<n;){let r=t+n>>>1;this.keys[r]<e?t=r+1:n=r}return t}merge(){let e=this.pendingKeys.length;if(e===0)return;let t=Array.from({length:e},(e,t)=>t).sort((e,t)=>et(this.pendingKeys[e],this.pendingKeys[t])||this.pendingIds[e]-this.pendingIds[t]),n=this.keys.length+e,r=Array(n),i=new Int32Array(n),a=0,o=0,s=0;for(let c=0;c<n;c++){let n=s>=e||o<this.keys.length&&(et(this.keys[o],this.pendingKeys[t[s]])||this.ids[o]-this.pendingIds[t[s]])<=0,c,l;n?(c=this.keys[o],l=this.ids[o++]):(c=this.pendingKeys[t[s]],l=this.pendingIds[t[s++]]),!(a>0&&r[a-1]===c&&i[a-1]===l)&&(r[a]=c,i[a++]=l)}r.length=a,this.keys=r,this.ids=a===n?i:i.slice(0,a),this.pendingKeys=[],this.pendingIds=[]}}})))()}function it(){return[...se().alleles].sort((e,t)=>t-e)[23]}var at,T,ot,st,ct,lt,ut;function dt(){return(dt=e((()=>{oe(),at=`genotypes.matrix`,T={data:`samples`,field:`population`},ot={data:`samples`,field:`alt_alleles`,direction:`desc`},st=[{key:`data`,label:`Data order`,order:`data`,filter:[]},{key:`population`,label:`By population`,order:T,filter:[]},{key:`alleles`,label:`By population, then alternative alleles`,order:[T,ot],filter:[]},{key:`eas`,label:`EAS and EUR only`,order:[T,ot],filter:[{data:`samples`,field:`population`,values:[`EAS`,`EUR`]}]},{key:`carriers`,label:`Samples with the most alternative alleles (cells)`,order:[T,ot],filter:[{data:`samples`,field:`alt_alleles`,min:it()}]}],ct=[{key:`majority`,label:`The most common color`},{key:`maximum`,label:`The strongest genotype`}],lt=e=>({format:`seq_view_spec_patch`,ops:[{op:`set`,ref:at,params:{density:e}}]}),ut=e=>({format:`seq_view_spec_patch`,ops:[{op:`set`,ref:at,params:{order:e.order,filter:e.filter}}]})})))()}var E,ft,pt;function mt(){return(mt=e((()=>{E={wt:`wt_frame`,aligned:`aligned`,own:`own_axes`},ft=[{id:`h102`,label:`H102 (wild type)`,ref:`wt`,start:101,stop:102},{id:`graft`,label:`D3's graft`,ref:`d3`,start:91,stop:97},{id:`tag`,label:`D4's tag`,ref:`d4`,start:108,stop:116}],pt=e=>({command:`seqv:select`,params:{target:{refs:[e.ref],args:{start:e.start,stop:e.stop}}}}),E.own,E.aligned,E.wt})))()}function ht(e){let t=$e(),n=[],r=[];return e.annotations.forEach((t,i)=>{if(!t||vt(e.strings.get(t.key)))return;let a=ee.itemRows(t);for(let o=0;o<t.itemCount;o++){if(a.start[o]===a.start[o+1])continue;let s=ee.rowValue(t,e,a.rows[a.start[o]],`label`);typeof s==`string`&&(n.push({annotation:i,item:o,name:`${s} (${e.strings.get(t.label)||e.strings.get(t.key)})`}),r.push(s))}}),t.add(Int32Array.from(r,(e,t)=>t),r,0,r.length),{index:t,items:n}}function gt(e){let t=null;return async n=>{let o=n.trim(),s=e.graph.assembled.value?.set;if(!s||o.length===0)return{results:[]};t?.set!==s&&(t={set:s,...ht(s)});let l=[],u=[],{items:ee}=t,d=()=>l.length>=_t;o.length>=2&&t.index.matches(new RegExp(xt(o.toLowerCase())),e=>{if(d())return;let t=ee[e],n=[{annotation:t.annotation,items:i.ofSingleton(t.item)}];l.push({kind:`item-loci`,set:s,elements:n}),u.push(t.name)});let ne={kind:-1,id:-1,row:-1},f=s.byName(`p53`,ne)&&ne.kind===te.molecule?s.molecules[ne.id]?.code:null;if(f&&/^[A-Za-z]+$/.test(o))c(a(o.toUpperCase())).find(f,0,f.length,!1,(t,n)=>{if(d())return;let r=e.refs.toLoci(`p53`,{start:t,stop:n});r&&(l.push(r),u.push(`${o.toUpperCase()} at ${t+1}`))});else if(f&&yt.test(o)){let t=null;try{t=r(new RegExp(o,`i`),bt)}catch{t=null}t?.find(f,0,f.length,!1,(t,n)=>{if(d())return;let r=e.refs.toLoci(`p53`,{start:t,stop:n});r&&(l.push(r),u.push(`${String.fromCharCode(...f.subarray(t,n))} at ${t+1}`))})}return{results:l,labels:u,more:d()}}}var _t,vt,yt,bt,xt;function St(){return(St=e((()=>{l(),s(),rt(),u(),d(),o(),_t=2e3,vt=e=>e.includes(`.keep.`),yt=/^[A-Za-z0-9[\]^{},.()|?*+-]+$/,bt=64,xt=e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)})))()}function Ct(e,t){let n=e?.querySelector(`.seqv-search-input`);n&&(Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,`value`)?.set?.call(n,t),n.dispatchEvent(new Event(`input`,{bubbles:!0})),n.focus())}function wt({root:e}){return(0,O.jsxs)(`div`,{className:w.chips,children:[(0,O.jsx)(`span`,{className:w.caption,children:`Try`}),Et.map(t=>(0,O.jsxs)(`button`,{type:`button`,className:w.chip,onClick:()=>Ct(e.current,t.text),children:[t.text,(0,O.jsx)(`span`,{className:w.at,children:t.hint})]},t.text))]})}function Tt({options:e}){let t=C(p(`case18`)),n=(0,D.useMemo)(()=>ue(`case18`,t.doc),[t]),[r,i]=(0,D.useState)(`bar`),a=ze(n,{...e,view:`tracks`,navigator:`strip`,parts:[`Legend`]}),o=(0,D.useMemo)(()=>a?gt(a.ctx):void 0,[a]),s=(0,D.useMemo)(()=>r===`bar`?{search:o}:{},[r,o]),c=Me(a,s),l=(0,D.useRef)(null);return(0,O.jsxs)(`section`,{className:_.card,ref:l,children:[(0,O.jsx)(`h2`,{className:_.heading,children:`p53, its tracks and location sets`}),(0,O.jsx)(`div`,{className:g.controls,children:(0,O.jsx)(`div`,{className:g.wide,children:(0,O.jsx)(x,{label:`The Search part`,choices:Dt,active:r,onPick:i})})}),(0,O.jsx)(wt,{root:l}),a&&o?(0,O.jsxs)(Ce,{context:a.ctx,ui:c,children:[r===`app`?(0,O.jsx)(`div`,{className:w.outside,children:(0,O.jsx)(Te,{context:a.ctx,search:o})}):null,(0,O.jsx)(ke,{children:(0,O.jsx)(De,{})})]}):(0,O.jsx)(`div`,{className:_.status,children:`Loading…`})]})}var D,O,Et,Dt;function Ot(){return(Ot=e((()=>{xe(),be(),D=t(),Ve(),fe(),Ae(),Oe(),Ze(),Qe(),St(),Re(),O=n(),Et=[{text:`zinc`,hint:`the four zinc ligands`},{text:`DNA`,hint:`the DNA-binding domain and the DNA-contact residues`},{text:`RHSVV`,hint:`letters: where p53 reads RHSVV`},{text:`tetra`,hint:`the tetramerization domain`},{text:`[KR]{2}.{10,12}[KR]{3,}`,hint:`a regular expression: the bipartite nuclear localization signal`}],Dt=[{id:`bar`,label:`In the viewer's bar`},{id:`app`,label:`Placed by the app, above the viewer`}]})))()}function kt(e,t){let[n,r]=(0,jt.useState)(`wrapped`),i=(0,jt.useMemo)(()=>t&&n!==`wrapped`?de(e,n):e,[e,t,n]);return t?[i,(0,Mt.jsx)(x,{label:`Text`,choices:Nt,active:n,onPick:r},`text-style`)]:[e,null]}function At(){let{context:e}=h(),[t,n]=(0,jt.useState)(`toggle`);return(0,Mt.jsx)(x,{label:`Shift-click or Shift-drag on residues`,choices:Pt,active:t,onPick:t=>{n(t),e.behaviors.get(`select`)?.setParams({shiftPositions:t})}})}var jt,Mt,Nt,Pt;function Ft(){return(Ft=e((()=>{Ee(),jt=t(),Ve(),fe(),Mt=n(),Nt=[{id:`wrapped`,label:`Wrapped`,title:"The `wrapped` preset: spaced to read, the group numbers above each line"},{id:`compact`,label:`Compact`,title:"The `compact` preset: half the group gap, lines and lanes touching, still groups of 10"}],Pt=[{id:`toggle`,label:`Adds or removes`,title:'The default (`shiftPositions: "toggle"`): Shift-click adds or removes a position'},{id:`extend`,label:`Extends`,title:'`shiftPositions: "extend"`: Shift-click extends a range of positions from its far end'}]})))()}var It,Lt,Rt;function zt(){return(zt=e((()=>{oe(),It={data:`stats`,field:`identity`,direction:`desc`},Lt=[{key:`tree`,label:`Tree order`,order:`tree`,filter:[]},{key:`reviewed`,label:`Reviewed first, then by identity`,order:[{data:`review`,field:`status`},It],filter:[]},{key:`reviewedOnly`,label:`Reviewed only`,order:It,filter:[{data:`review`,field:`status`,values:[`reviewed`]}]},{key:`covering`,label:`Covering 80% or more`,order:It,filter:[{data:`stats`,field:`coverage`,min:.8}]},{key:`representatives`,label:`One per cluster at 50%`,order:It,filter:[{data:`nr50`,field:`representative`,values:[!0]}]}],Rt=e=>({format:`seq_view_spec_patch`,ops:[{op:`set`,ref:le,params:{order:e.order,filter:e.filter}}]})})))()}function k(e,t){let n=rn.get(e)??ue(e,t.doc);return rn.set(e,n),n}function Bt({name:e,options:t}){let n=C(p(e)),r={...t,parts:t?.parts??on(e,n)},[i,a]=kt(k(e,n),sn.has(e));return(0,M.jsxs)(M.Fragment,{children:[a,(0,M.jsx)(y,{doc:i,label:n.views.map(e=>e.label).join(` · `),options:r,children:sn.has(e)?(0,M.jsx)(At,{}):null})]})}function A({name:e,options:t}){return(0,M.jsxs)(v,{title:m[e],caption:(0,M.jsxs)(M.Fragment,{children:[`@molstar/seq-viewer, its canvas engine and the default UI (`,t?.ui===`DOM`?`the <seq-viewer> element, @molstar/seq-viewer/dom`:`React, @molstar/seq-viewer/react`,`); fixtures, no network.`]}),children:[cn[e]?(0,M.jsx)(`div`,{className:_.kicker,children:cn[e]}):null,(0,M.jsx)(b,{name:e}),(0,M.jsx)(j.Suspense,{fallback:(0,M.jsx)(`div`,{className:_.status,children:`Compiling…`}),children:(0,M.jsx)(Bt,{name:e,options:t})})]})}function Vt({options:e}){let t=C(p(`case13`)),[n,r]=(0,j.useState)(`all`),i=(0,j.useMemo)(()=>n===`all`?k(`case13`,t):{...k(`case13`,t),root:ce(t.doc.root)},[t,n]);return(0,M.jsx)(y,{doc:i,label:t.views.map(e=>e.label).join(` · `),options:{...e,parts:on(`case13`,t)},children:(0,M.jsx)(`div`,{className:g.controls,children:(0,M.jsx)(`div`,{className:g.wide,children:(0,M.jsx)(x,{label:`Variant rows (split.empty)`,choices:dn,active:n,onPick:r})})})},n)}function Ht(){let{context:e}=h(),[t,n]=(0,j.useState)(E.wt),[r,i]=(0,j.useState)(`none`),a=[{id:E.wt,label:`On the wild type`},{id:E.aligned,label:`Aligned`},{id:E.own,label:`Own axes`}],o=[...ft.map(e=>({id:e.id,label:e.label})),{id:`none`,label:`Nothing`}];return(0,M.jsxs)(`div`,{className:g.controls,children:[(0,M.jsx)(`div`,{className:g.wide,children:(0,M.jsx)(x,{label:`View`,choices:a,active:t,onPick:t=>{n(t),e.views.setCurrent(t)}})}),(0,M.jsx)(`div`,{className:g.wide,children:(0,M.jsx)(x,{label:`Select`,choices:o,active:r,onPick:t=>{i(t);let n=ft.find(e=>e.id===t);n?e.commands.run(pt(n),`host:story`):e.selection.clear(`host:story`)}})})]})}function Ut({options:e}){let t=C(p(`case15`));return(0,M.jsx)(y,{doc:k(`case15`,t),label:`WT barnase and four designs`,options:{...e,maxHeight:720},children:(0,M.jsx)(Ht,{})})}function Wt(){let{context:e}=h(),[t,n]=(0,j.useState)(0),[r,i]=(0,j.useState)(null),a=(0,j.useCallback)(()=>{let r=(t+450)%Ke;n(r),je(e,We(r),`rotate the origin`)},[e,t]),o=(0,j.useCallback)(()=>{we(e,{width:640,background:!0,overlay:!0,sections:[Je]}).then(i)},[e]);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(`div`,{className:_.row,children:[(0,M.jsxs)(S,{tone:`quiet`,onClick:a,children:[`Rotate the origin (now `,t+1,`)`]}),(0,M.jsx)(S,{tone:`quiet`,onClick:()=>qe(e),children:`Zoom the detail to the cloning site`}),(0,M.jsx)(S,{tone:`quiet`,onClick:o,children:`Export the ring as SVG`})]}),r&&(0,M.jsx)(`div`,{className:Le.figure,dangerouslySetInnerHTML:{__html:r}})]})}function Gt({options:e}){let t=C(p(`case16`));return(0,M.jsx)(y,{doc:k(`case16`,t),label:`pSyn, 2,686 nt`,options:e,children:(0,M.jsx)(Wt,{})})}function Kt(){let{context:e}=h(),[t,n]=(0,j.useState)(`data`);return(0,M.jsx)(`div`,{className:g.wide,children:(0,M.jsx)(x,{label:`Order and filter`,choices:st.map(e=>({id:e.key,label:e.label})),active:t,onPick:t=>{let r=st.find(e=>e.key===t);n(r.key),je(e,ut(r),r.label)}})})}function qt(){let{context:e}=h(),[t,n]=(0,j.useState)(`majority`);return(0,M.jsx)(`div`,{className:g.wide,children:(0,M.jsx)(x,{label:`A pixel row's color (density)`,choices:ct.map(e=>({id:e.key,label:e.label})),active:t,onPick:t=>{let r=ct.find(e=>e.key===t);n(r.key),je(e,lt(r.key),r.label)}})})}function Jt({options:e}){let t=C(p(`case17`));return(0,M.jsx)(y,{doc:k(`case17`,t),label:`${pe.toLocaleString(`en-US`)} samples × 300 sites`,options:e,children:(0,M.jsxs)(`div`,{className:g.controls,children:[(0,M.jsx)(Kt,{}),(0,M.jsx)(qt,{})]})})}function Yt(){let{context:e}=h();Se(e.streams.stats);let t=e.streams.stats.current;return(0,M.jsxs)(`div`,{className:_.code,children:[t.requests,` regions asked, `,t.inFlight,` in flight, `,t.errors,` failed; `,(t.bytes/1024).toFixed(0),` KiB held`]})}function Xt({options:e}){let t=C(p(`case19`));return(0,M.jsx)(y,{doc:k(`case19`,t),label:`chr17 of GRCh38, 83 Mb, streamed by region`,options:{...e,navigator:`ideogram`,registry:me},children:(0,M.jsx)(Yt,{})})}function Zt(){let{context:e}=h(),t=(t,n)=>e.viewports.get(Xe)?.zoomTo(0,t,n);return(0,M.jsxs)(`div`,{className:_.row,children:[(0,M.jsx)(S,{tone:`quiet`,onClick:()=>t(0,1334),children:`Whole protein`}),(0,M.jsx)(S,{tone:`quiet`,onClick:()=>t(450,550),children:`Residues 450–550 (a codon split at 500)`}),(0,M.jsx)(S,{tone:`quiet`,onClick:()=>t(880,920),children:`Residues 880–920`})]})}function Qt({options:e}){let t=C(p(`case20`));return(0,M.jsxs)(y,{doc:k(`case20`,t),label:`P1, 1,334 residues coded by three exons over 220 kb of chr2`,options:{...e,maxHeight:720},children:[(0,M.jsx)(Zt,{}),(0,M.jsx)(Yt,{})]})}function $t({dataRow:e}){let{kept:t,toggle:n}=(0,j.useContext)(fn),r=t.has(e),i=r?`Row ${e+1} kept: click to drop it`:`Keep row ${e+1}`;return(0,M.jsx)(Be,{content:i,children:(0,M.jsx)(`button`,{type:`button`,className:Le.rowToggle,"aria-pressed":r,"aria-label":i,onClick:()=>n(e),children:`Keep`})})}function en({kept:e}){let{context:t}=h(),[n,r]=(0,j.useState)(`tree`);return(0,M.jsxs)(`div`,{className:g.controls,children:[(0,M.jsx)(`div`,{className:g.wide,children:(0,M.jsx)(x,{label:`Triage (order and filter)`,choices:Lt.map(e=>({id:e.key,label:e.label})),active:n,onPick:e=>{let n=Lt.find(t=>t.key===e);r(n.key),je(t,Rt(n),n.label)}})}),(0,M.jsxs)(`div`,{className:_.code,children:[e,` rows kept`]})]})}function tn({options:e}){let t=C(p(`case22`)),[n,r]=(0,j.useState)(new Set),i=(0,j.useMemo)(()=>({kept:n,toggle:e=>r(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})}),[n]);return(0,M.jsx)(fn.Provider,{value:i,children:(0,M.jsx)(y,{doc:k(`case22`,t),label:`PF00042, 32 globins`,ui:pn,domSlots:hn,options:{...e,verticalNav:`both`,maxHeight:480,render:{controlWidth:44,headerWidth:380}},children:(0,M.jsx)(en,{kept:n.size})})})}var j,M,nn,rn,an,on,sn,cn,N,P,F,I,L,R,z,B,V,ln,un,H,U,dn,W,G,K,q,J,Y,X,Z,Q,fn,pn,mn,hn,$,gn;function _n(){return(_n=e((()=>{f(),ne(),_e(),Ee(),ve(),Ze(),j=t(),fe(),Ge(),Ye(),Ae(),dt(),he(),mt(),Pe(),Oe(),Ot(),Ft(),zt(),Re(),Ne(),Ue(),Ve(),M=n(),nn={title:`Seq*/Cases/Viewer`,...He,parameters:{...He.parameters,layout:`fullscreen`,docs:{description:{component:`The format's acceptance cases in our viewer: each case's document on the test fixtures, shown by the default React UI
(or the \`<seq-viewer>\` element) in Stories' clean chrome (the canvas, tooltip, snapshot player and descriptions with
command links; a case with several views gets its tabs, and the cases about a section's switches their section
headers: numbering, copies, the ligand's form). "The Stories drafts" has a
\`chrome\` control that adds the headers, track menu, legend and export.`}}}},rn=new Map,an={case2:[`SectionHeader`],case6:[`SectionHeader`],case7:[`SectionHeader`],case8:[`SectionHeader`],case9:[`SectionHeader`],case12:[`SectionHeader`],case15:[`SectionHeader`],case21:[`SectionHeader`]},on=(e,t)=>Ie(t,an[e]),sn=new Set([`case1`]),cn={case1:"Select in the text as in an editor: click a residue (again, it clears), drag across lines (out of the canvas too), Shift-click or Shift-drag to add or remove, click an underline for its region; Enter and Escape from the keyboard. The Text choice switches the text's presets: Wrapped spaces it to read (a group gap of about a cell, lines apart, the underlines a little under the letters); Compact packs it (half the group gap, lines and lanes touching), still in groups of 10. Both are render props (`wrappedGroupGap`, `wrappedGap`, `wrappedTrackGap`, `wrappedLaneHeight`) a host sets. The Shift-click choice sets the select behavior's `shiftPositions` (`toggle`, the default, or `extend` from the anchor), as a host's viewer spec would.",case8:`Open the Aligned error (PAE) group: AlphaFold DB's PAE as a dot plot, the scored residues across and the residues aligned on down, over the same window as the tracks (zoom or pan them, the plot follows), with the interface's contacts as red dots. Hover a cell: both residues light, with a crosshair; drag to select a rectangle, its two ranges.`},N={name:`p53: text and tracks`,render:e=>(0,M.jsx)(A,{name:`case1`,options:{navigator:e.navigator,rowsColor:e.rowsColor,ui:e.ui}})},P={name:`Antibody Fv, Kabat and IMGT`,render:e=>(0,M.jsx)(A,{name:`case2`,options:{navigator:e.navigator,rowsColor:e.rowsColor,ui:e.ui}})},F={name:`SH2 family`,render:e=>(0,M.jsx)(A,{name:`case3`,options:{navigator:e.navigator,rowsColor:e.rowsColor,ui:e.ui}})},I={name:`tRNA family, base pairs`,render:e=>(0,M.jsx)(A,{name:`case4`,options:{navigator:e.navigator,rowsColor:e.rowsColor,ui:e.ui}})},L={name:`DNA construct`,render:e=>(0,M.jsx)(A,{name:`case5`,options:{navigator:e.navigator,rowsColor:e.rowsColor,ui:e.ui}})},R={name:`Imatinib in ABL`,render:e=>(0,M.jsx)(A,{name:`case6`,options:{navigator:e.navigator,rowsColor:e.rowsColor,ui:e.ui}})},z={name:`Barnase–barstar`,render:e=>(0,M.jsx)(A,{name:`case7`,options:{navigator:e.navigator,rowsColor:e.rowsColor,ui:e.ui}})},B={name:`AlphaFold DB complex`,render:e=>(0,M.jsx)(A,{name:`case8`,options:{navigator:e.navigator,rowsColor:e.rowsColor,ui:e.ui}})},V={name:`PF00042 by view`,render:e=>(0,M.jsx)(A,{name:`case9`,options:{navigator:e.navigator,rowsColor:e.rowsColor,ui:e.ui}})},ln=(e,t)=>{let n=re(e,t)?.at(-1);return n?ie(n):[]},un=[`rows`,`filter`,`focus`,`hide`,`remove`,{id:`select-covered`,label:`Select what it covers`,when:(e,t,n)=>ln(e.document.shown.value,n).length>0,run:(e,t,n)=>{let r=ln(e.document.shown.value,n);e.commands.dispatch(ae.Select,{target:{refs:r},origin:`api`}).catch(()=>{})}}],H={name:`The Stories drafts`,parameters:{docs:{description:{story:'The track menu here is the host\'s own list (`UI.TrackActions`): the built-ins, "Remove track" among them, and "Select what it covers". "Remove track" is built in but not in the default menu; this story enables it.'}}},args:{chrome:Fe},argTypes:{chrome:{control:`inline-radio`,options:[`full`,`clean`],description:"The viewer's `UI.Chrome`"}},render:e=>(0,M.jsx)(A,{name:`case10`,options:{navigator:e.navigator,rowsColor:e.rowsColor,ui:e.ui,chrome:e.chrome,parts:[],trackActions:un}})},U={name:`Designed dimer`,render:e=>(0,M.jsx)(A,{name:`case12`,options:{navigator:e.navigator,rowsColor:e.rowsColor,ui:e.ui}})},dn=[{id:`all`,label:`All`},{id:`variants`,label:`With variants`}],W={name:`p53 features, UniProt-style`,render:e=>(0,M.jsxs)(v,{title:m.case13,caption:(0,M.jsxs)(M.Fragment,{children:[`@molstar/seq-viewer, its canvas engine and the default UI; fixtures, no network. The variants grid has a row per residue a variant may change to; with variants, `,(0,M.jsx)(`code`,{children:`split.empty: "hide"`}),` keeps only the rows a variant has.`]}),children:[(0,M.jsx)(b,{name:`case13`}),(0,M.jsx)(j.Suspense,{fallback:(0,M.jsx)(`div`,{className:_.status,children:`Compiling…`}),children:(0,M.jsx)(Vt,{options:{navigator:e.navigator,rowsColor:e.rowsColor,ui:e.ui}})})]})},G={name:`Protein over its coding DNA`,render:e=>(0,M.jsx)(A,{name:`case14`,options:{navigator:e.navigator,rowsColor:e.rowsColor,ui:e.ui}})},K={name:`Indels in protein designs`,render:e=>(0,M.jsxs)(v,{title:m.case15,caption:(0,M.jsxs)(M.Fragment,{children:[`Barnase's mature chain (UniProt P00648, numbered 1–110; its secondary structure, active site and the residues touching barstar in 1BRS) and four synthetic designs, each written as edits on the wild type and named as HGVS names protein changes: D1 substitutions only; D2 a loop shortened (P64_S67del); D3 two N-terminal residues removed and a loop grafted (D93_W94insGNGKDG); D4 an N-terminal Met, His102 and its neighbors deleted (catalytically dead) and a C-terminal His tag. Each design is a `,(0,M.jsx)(`code`,{children:`sequence`}),` with a gapped `,(0,M.jsx)(`code`,{children:`pairwise`}),` mapping onto the wild type and a `,(0,M.jsx)(`code`,{children:`wt`}),` numbering that names its residues in the wild type's terms, inserts with letters (93A–93F), as Kabat names an antibody's; nothing in the format is specific to indels (frameshifts belong to the DNA, not here). `,(0,M.jsx)(`b`,{children:`On the wild type`}),`: a row per design placed through its mapping (`,(0,M.jsx)(`code`,{children:`letters`}),` with `,(0,M.jsx)(`code`,{children:`of`}),`), substitutions on a blue cell, deletions as a red bar, insertions as a green mark on their boundary (hover it for the letters); below, the same edits as `,(0,M.jsx)(`code`,{children:`variants`}),`, a deletion one marker on a line over its residues, an insertion its length where it fits. `,(0,M.jsx)(`b`,{children:`Aligned`}),`: the inserts in columns of their own, lower case on a veiled cell and marked on the ruler; the wild type's numbering skips them. `,(0,M.jsx)(`b`,{children:`Own axes`}),`: each design on its own residues, numbered in the wild type's terms, with the wild type's features placed through its mapping: D4's H102 lands on the junction its deletion leaves, and the β-sheet spans the graft (a range takes its first to last paired residue); each design's deletions show as the junctions they leave. On the wild type, the designs' inserted stretches, data on their own residues, land on the boundaries they sit at. Select H102: it lights in every design that keeps it, at its own index there, and in D4, which deleted it, as a caret (a bar between two cells) at the junction the deletion leaves. Select D3's graft: it lights in D3 (in Aligned, its insert columns), and as a caret where it sits on the wild type and the other designs; hover an insertion's mark and it lights a caret too. D4's tag, beyond what the mappings pair, lights only in D4.`]}),children:[(0,M.jsx)(b,{name:`case15`}),(0,M.jsx)(j.Suspense,{fallback:(0,M.jsx)(`div`,{className:_.status,children:`Compiling…`}),children:(0,M.jsx)(Ut,{options:{navigator:e.navigator,rowsColor:e.rowsColor,ui:e.ui}})})]})},q={name:`A plasmid map`,render:e=>(0,M.jsxs)(v,{title:m.case16,caption:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(`code`,{children:[`b.preset.plasmidMap(view, pSyn, `,`{ features, sites, pairs }`,`)`]}),` writes a circular section and a linear one following it, with generic params only. pSyn is synthetic (2,686 nt, a pUC19-like layout over random letters). Each feature has an arrowhead by its `,(0,M.jsx)(`code`,{children:`strand`}),` (`,(0,M.jsx)(`code`,{children:`direction_field`}),`), on the ring and in the detail; the f1 region crosses the origin. Labels sit outside the ring, past the ruler's numbers, each with a leader from its feature: sorted by angle and spread a line apart per side, the nine cut sites of the cloning site fanned out; hover a label and its feature is hovered, as on the ring (the tooltip, the detail), click it to select it. The cut sites are ticks on the features' ring, in the skin's faint ink. Three repeat pairs are chords through the hub. The ring shows the detail's view as a window: a sector with a grip at each end on the ruler's baseline. Zoom the detail (or wheel in it, or focus the ring and press `,(0,M.jsx)(`kbd`,{children:`+`}),`), then drag the window round the ring to pan the detail, or a grip to zoom it, the other end held. Rotate the origin: the ring starts elsewhere, the labels follow, and a window across the new origin wraps. Export the ring as SVG: the figure below the viewer, with its window.`]}),children:[(0,M.jsx)(b,{name:`case16`}),(0,M.jsx)(j.Suspense,{fallback:(0,M.jsx)(`div`,{className:_.status,children:`Compiling…`}),children:(0,M.jsx)(Gt,{options:{navigator:e.navigator,rowsColor:e.rowsColor,ui:e.ui}})})]})},J={name:`A genotype matrix`,render:e=>(0,M.jsxs)(v,{title:m.case17,caption:(0,M.jsxs)(M.Fragment,{children:[pe.toLocaleString(`en-US`),` synthetic samples as the states of a `,(0,M.jsx)(`code`,{children:`matrix`}),` over`,` `,300,` variant sites, heterozygous amber and homozygous for the alternative allele red (a`,` `,(0,M.jsx)(`code`,{children:`field_palette`}),`; the reference genotype is not colored). The alternative allele's frequency varies by population and in blocks of 20 sites. The samples are thinner than a pixel, so each device row shows one color for its samples, by the layer's `,(0,M.jsx)(`code`,{children:`density`}),`: the most common color of its colored samples, faded by the share of its samples with the reference genotype (`,(0,M.jsx)(`code`,{children:`majority`}),`), or the strongest genotype among them, so a rare homozygote shows (`,(0,M.jsx)(`code`,{children:`maximum`}),`). Alt and the wheel zoom the samples vertically. A sample table keyed by `,(0,M.jsx)(`code`,{children:`state`}),` gives each its `,(0,M.jsx)(`code`,{children:`population`}),` and its`,` `,(0,M.jsx)(`code`,{children:`alt_alleles`}),`; the choices patch the layer's `,(0,M.jsx)(`code`,{children:`order`}),`, `,(0,M.jsx)(`code`,{children:`filter`}),` and`,` `,(0,M.jsx)(`code`,{children:`density`}),`. By population, the blocks line up; the last order keeps about 24 samples, which draw as cells (a band each; labels only from 9 px a band).`]}),children:[(0,M.jsx)(b,{name:`case17`}),(0,M.jsx)(j.Suspense,{fallback:(0,M.jsx)(`div`,{className:_.status,children:`Compiling…`}),children:(0,M.jsx)(Jt,{options:{navigator:e.navigator,rowsColor:e.rowsColor,ui:e.ui}})})]})},Y={name:`Finding things in p53`,render:e=>(0,M.jsxs)(v,{title:m.case18,caption:(0,M.jsxs)(M.Fragment,{children:[`p53's Tracks view: the letters and three feature tracks (domains, zinc ligands, DNA-contact residues), each item with a name to search by. Two SeqQL queries run at load as `,(0,M.jsx)(`code`,{children:`computed`}),` nodes: the cysteines, and the domains holding four or more of them (a query naming the other). The section's`,` `,(0,M.jsx)(`code`,{children:`highlights`}),` show them, as any annotation: the rich domain as a band behind the tracks, the cysteines lit, the zinc ligands accented, and the bookmarks (an inline `,(0,M.jsx)(`code`,{children:`ranges`}),` table the bookmark actions edit and step). The Search part is the viewer's; the search is the story's own: item names from two characters, anywhere in the name, then the letters from one, or a regular-expression motif such as`,` `,(0,M.jsx)(`code`,{children:`[KR]{2}.{10,12}[KR]{3,}`}),` (the bipartite nuclear localization signal). Every result lights and ticks in the navigator; Enter, Shift+Enter and ‹ › step through them; Keep holds them as a location set the legend lists under Highlights. Place the part in the viewer's bar (the UI spec gives `,(0,M.jsx)(`code`,{children:`search`}),`) or above the viewer, as an app would (`,(0,M.jsx)(`code`,{children:`<Search context={ctx} search={fn} />`}),`).`]}),children:[(0,M.jsx)(b,{name:`case18`}),(0,M.jsx)(j.Suspense,{fallback:(0,M.jsx)(`div`,{className:_.status,children:`Compiling…`}),children:(0,M.jsx)(Tt,{options:{navigator:e.navigator,rowsColor:e.rowsColor,ui:e.ui}})})]})},X={name:`A chromosome by region`,render:e=>(0,M.jsxs)(v,{title:m.case19,caption:(0,M.jsx)(M.Fragment,{children:`chr17 of GRCh38 as one block of a streamed genome: a letters stream's manifest names the chromosomes and their lengths, and nothing more is asked until the view needs it. The navigator is the ideogram (a registered entry, from hg38's committed cytobands): the chromosome's bands, its centromere in red, the view's window over them; press to jump, drag to pan, drag an end to zoom. The view opens on 17p13.1; the snapshots go to the whole chromosome, 200 kb of 17p13.1 and 50 positions in a gene's exon. Zoomed out, genes and variants are density from each region's counts and the Sequence track is hatched; at 200 kb the genes arrive as items (exons joined, colored by category) and the variants by their alternative; at 50 positions the letters, colored by nucleotide. phyloP is binned at every zoom. Every track is streamed by region from the fixtures (synthetic letters, genes, variants and scores; no network); the line under the viewer counts the regions asked.`}),children:[(0,M.jsx)(b,{name:`case19`}),(0,M.jsx)(j.Suspense,{fallback:(0,M.jsx)(`div`,{className:_.status,children:`Compiling…`}),children:(0,M.jsx)(Xt,{options:{rowsColor:e.rowsColor,ui:e.ui}})})]})},Z={name:`A protein on its genome`,render:e=>(0,M.jsxs)(v,{title:m.case20,caption:(0,M.jsxs)(M.Fragment,{children:[`P1 (synthetic, 1,334 residues) is coded by three exons over 220 kb of chr2 of a streamed genome, joined to it by a `,(0,M.jsx)(`code`,{children:`codon`}),` mapping. Its section shows its domains and chr2's streamed genes, variants and phyloP on its own axis, through that mapping: only the regions its exons reach are asked, a variant lands on the residue its position codes, and phyloP over a residue is read over its codon. The second section is chr2 at the gene: P1's residues over their codons (`,(0,M.jsx)(`code`,{children:`letters`}),` with `,(0,M.jsx)(`code`,{children:`of`}),`) and its domains along the exons, a domain across an intron in two parts. The genes stream also serves T1, the transcript that codes P1, with its map (a codon map's params): when its region arrives T1 becomes an item coordinate system, `,(0,M.jsx)(`code`,{children:`genes_src/T1`}),`, and the third section shows its own residues, the genome's genes, variants and phyloP placed through its map. Hover a residue of P1 or T1: its label shows the codon that codes it, read from the genome's streamed letters (asked when first hovered), with its positions on chr2; a codon an intron splits shows both parts (residue 500's T|CA, 900's A|TG). Hover a domain or a variant: it lights in every section that places it.`]}),children:[(0,M.jsx)(b,{name:`case20`}),(0,M.jsx)(j.Suspense,{fallback:(0,M.jsx)(`div`,{className:_.status,children:`Compiling…`}),children:(0,M.jsx)(Qt,{options:{navigator:e.navigator,rowsColor:e.rowsColor,ui:e.ui}})})]})},Q={name:`A gene on its reverse strand`,render:e=>(0,M.jsxs)(v,{title:m.case21,caption:(0,M.jsxs)(M.Fragment,{children:[`GENE2 is synthetic: four exons on the reverse strand of a 1,400-nucleotide region, its protein translated by a minus-strand `,(0,M.jsx)(`code`,{children:`codon`}),` mapping (the CDS's ranges read downward, complemented). The first section is the gene as a piece of the region in its own direction (`,(0,M.jsx)(`code`,{children:`range`}),` and `,(0,M.jsx)(`code`,{children:`direction: -1`}),`on its block): read 5′ → 3′, the ruler counting down, its letters complemented by a letter map (the data stays the + strand's). Its transcript is one item (four rows of one `,(0,M.jsx)(`code`,{children:`id`}),`, joined), arrowheads by its`,` `,(0,M.jsx)(`code`,{children:`strand`}),`; the protein's residues over their codons; an RNA-seq-like coverage; and its splice junctions as a sashimi plot (`,(0,M.jsx)(`code`,{children:`b.preset.sashimi`}),`): arcs stroked and labeled by read count, the gene's (−) hanging below their line, an exon-skipping one thin, and two weak junctions of an antisense transcript (+) rising above theirs. The second section is the mRNA as its own track: the same piece showing only the exons (`,(0,M.jsx)(`code`,{children:`b.preset.exonsOnly`}),`, the introns breaks), its letters as RNA (the`,` `,(0,M.jsx)(`code`,{children:`complement_rna`}),` letter map). The third is the region as written, the + strand: the gene's arrowheads point left. The sections follow the first; hover or select anywhere and the same nucleotides light in all three.`]}),children:[(0,M.jsx)(b,{name:`case21`}),(0,M.jsx)(j.Suspense,{fallback:(0,M.jsx)(`div`,{className:_.status,children:`Compiling…`}),children:(0,M.jsx)(Bt,{name:`case21`,options:{navigator:e.navigator,rowsColor:e.rowsColor,ui:e.ui}})})]})},fn=(0,j.createContext)({kept:new Set,toggle:()=>{}}),pn={components:{RowControl:$t}},mn=(e,t,{dataRow:n})=>{let r=`Keep row ${n+1}`,i=ge({class:`seqv-choice`,"aria-pressed":!1,"aria-label":r},()=>ye(i,`aria-pressed`,i.getAttribute(`aria-pressed`)!==`true`),`Keep`);return e.append(i),{dispose:()=>i.remove()}},hn={RowControl:mn},$={name:`A family triaged`,render:e=>(0,M.jsxs)(v,{title:m.case22,caption:(0,M.jsxs)(M.Fragment,{children:[`Pfam's PF00042 seed (32 globins, committed as a fixture) in an `,(0,M.jsx)(`code`,{children:`msa`}),` section of 16 rows. A guide tree is computed at load (`,(0,M.jsxs)(`code`,{children:[`tree `,`{ provider: "nj" }`]}),`, neighbor joining on p-distances) and the rows follow it; click a branch to fold a clade. Three key tables give the rows fields, shown as data columns: the review status (the document's own `,(0,M.jsx)(`code`,{children:`rows`}),` table: three Swiss-Prot entries, HBA_HUMAN, MYG_CHICK and YNX4_YEAST, the rest TrEMBL's, read from the entry names),`,` `,(0,M.jsx)(`code`,{children:`row_stats`}),`' identity to HBA_HUMAN and coverage, and `,(0,M.jsx)(`code`,{children:`redundancy`}),`'s clusters at 50%. The triage choices patch the rows layer's `,(0,M.jsx)(`code`,{children:`order`}),` and `,(0,M.jsx)(`code`,{children:`filter`}),`: the reviewed first, the reviewed only, the rows covering 80% of the columns, one per cluster; the tree is drawn only in tree order. Beside the scrollbar, the vertical overview: every row in miniature, the rows in view a window to drag (Alt-wheel zooms rows). Each row has the host's control (the `,(0,M.jsx)(`code`,{children:`RowControl`}),` `,`slot): Keep, the curator's mark, held by the story and counted under the viewer.`]}),children:[(0,M.jsx)(b,{name:`case22`}),(0,M.jsx)(j.Suspense,{fallback:(0,M.jsx)(`div`,{className:_.status,children:`Compiling…`}),children:(0,M.jsx)(tn,{options:{navigator:e.navigator,rowsColor:e.rowsColor,ui:e.ui}})})]})},gn=[`Case1`,`Case2`,`Case3`,`Case4`,`Case5`,`Case6`,`Case7`,`Case8`,`Case9`,`Case10`,`Case12`,`Case13`,`Case14`,`Case15`,`Case16`,`Case17`,`Case18`,`Case19`,`Case20`,`Case21`,`Case22`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'p53: text and tracks',
  render: a => <Case name="case1" options={{
    navigator: a.navigator,
    rowsColor: a.rowsColor,
    ui: a.ui
  }} />
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Antibody Fv, Kabat and IMGT',
  render: a => <Case name="case2" options={{
    navigator: a.navigator,
    rowsColor: a.rowsColor,
    ui: a.ui
  }} />
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'SH2 family',
  render: a => <Case name="case3" options={{
    navigator: a.navigator,
    rowsColor: a.rowsColor,
    ui: a.ui
  }} />
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'tRNA family, base pairs',
  render: a => <Case name="case4" options={{
    navigator: a.navigator,
    rowsColor: a.rowsColor,
    ui: a.ui
  }} />
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'DNA construct',
  render: a => <Case name="case5" options={{
    navigator: a.navigator,
    rowsColor: a.rowsColor,
    ui: a.ui
  }} />
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Imatinib in ABL',
  render: a => <Case name="case6" options={{
    navigator: a.navigator,
    rowsColor: a.rowsColor,
    ui: a.ui
  }} />
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Barnase–barstar',
  render: a => <Case name="case7" options={{
    navigator: a.navigator,
    rowsColor: a.rowsColor,
    ui: a.ui
  }} />
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'AlphaFold DB complex',
  render: a => <Case name="case8" options={{
    navigator: a.navigator,
    rowsColor: a.rowsColor,
    ui: a.ui
  }} />
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'PF00042 by view',
  render: a => <Case name="case9" options={{
    navigator: a.navigator,
    rowsColor: a.rowsColor,
    ui: a.ui
  }} />
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'The Stories drafts',
  parameters: {
    docs: {
      description: {
        story: 'The track menu here is the host\\'s own list (\`UI.TrackActions\`): the built-ins, "Remove track" among them, and "Select what it covers". "Remove track" is built in but not in the default menu; this story enables it.'
      }
    }
  },
  args: {
    chrome: STORY_CHROME
  },
  argTypes: {
    chrome: {
      control: 'inline-radio',
      options: ['full', 'clean'],
      description: "The viewer's \`UI.Chrome\`"
    }
  },
  render: a => <Case name="case10" options={{
    navigator: a.navigator,
    rowsColor: a.rowsColor,
    ui: a.ui,
    chrome: a.chrome,
    parts: [],
    // the toggle shows the difference: clean is clean
    trackActions: CASE10_ACTIONS
  }} />
}`,...H.parameters?.docs?.source},description:{story:"With `chrome`: `full`, or `clean` as Stories shows it: the canvas, hover, selection, tooltip, navigator.",...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Designed dimer',
  render: a => <Case name="case12" options={{
    navigator: a.navigator,
    rowsColor: a.rowsColor,
    ui: a.ui
  }} />
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'p53 features, UniProt-style',
  render: a => <PrismPage title={CASE_TITLES.case13} caption={<>
          @molstar/seq-viewer, its canvas engine and the default UI; fixtures, no network. The variants grid has a row
          per residue a variant may change to; with variants, <code>split.empty: "hide"</code> keeps only the rows a
          variant has.
        </>}>
      <BuilderCode name="case13" />
      <Suspense fallback={<div className={f.status}>Compiling…</div>}>
        <Case13Viewer options={{
        navigator: a.navigator,
        rowsColor: a.rowsColor,
        ui: a.ui
      }} />
      </Suspense>
    </PrismPage>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Protein over its coding DNA',
  render: a => <Case name="case14" options={{
    navigator: a.navigator,
    rowsColor: a.rowsColor,
    ui: a.ui
  }} />
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Indels in protein designs',
  render: a => <PrismPage title={CASE_TITLES.case15} caption={<>
          Barnase&apos;s mature chain (UniProt P00648, numbered 1–110; its secondary structure, active site and the
          residues touching barstar in 1BRS) and four synthetic designs, each written as edits on the wild type and
          named as HGVS names protein changes: D1 substitutions only; D2 a loop shortened (P64_S67del); D3 two
          N-terminal residues removed and a loop grafted (D93_W94insGNGKDG); D4 an N-terminal Met, His102 and its
          neighbors deleted (catalytically dead) and a C-terminal His tag. Each design is a <code>sequence</code> with a
          gapped <code>pairwise</code> mapping onto the wild type and a <code>wt</code> numbering that names its
          residues in the wild type&apos;s terms, inserts with letters (93A–93F), as Kabat names an antibody&apos;s;
          nothing in the format is specific to indels (frameshifts belong to the DNA, not here). <b>On the wild type</b>
          : a row per design placed through its mapping (<code>letters</code> with <code>of</code>), substitutions on a
          blue cell, deletions as a red bar, insertions as a green mark on their boundary (hover it for the letters);
          below, the same edits as <code>variants</code>, a deletion one marker on a line over its residues, an
          insertion its length where it fits. <b>Aligned</b>: the inserts in columns of their own, lower case on a
          veiled cell and marked on the ruler; the wild type&apos;s numbering skips them. <b>Own axes</b>: each design
          on its own residues, numbered in the wild type&apos;s terms, with the wild type&apos;s features placed through
          its mapping: D4&apos;s H102 lands on the junction its deletion leaves, and the β-sheet spans the graft (a
          range takes its first to last paired residue); each design&apos;s deletions show as the junctions they leave.
          On the wild type, the designs&apos; inserted stretches, data on their own residues, land on the boundaries
          they sit at. Select H102: it lights in every design that keeps it, at its own index there, and in D4, which
          deleted it, as a caret (a bar between two cells) at the junction the deletion leaves. Select D3&apos;s graft:
          it lights in D3 (in Aligned, its insert columns), and as a caret where it sits on the wild type and the other
          designs; hover an insertion&apos;s mark and it lights a caret too. D4&apos;s tag, beyond what the mappings
          pair, lights only in D4.
        </>}>
      <BuilderCode name="case15" />
      <Suspense fallback={<div className={f.status}>Compiling…</div>}>
        <Case15Viewer options={{
        navigator: a.navigator,
        rowsColor: a.rowsColor,
        ui: a.ui
      }} />
      </Suspense>
    </PrismPage>
}`,...K.parameters?.docs?.source},description:{story:`Case 15: insertions and deletions with the format's own primitives (mappings, an alignment, boundaries).`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'A plasmid map',
  render: a => <PrismPage title={CASE_TITLES.case16} caption={<>
          <code>b.preset.plasmidMap(view, pSyn, {'{ features, sites, pairs }'})</code> writes a circular section and a
          linear one following it, with generic params only. pSyn is synthetic (2,686 nt, a pUC19-like layout over
          random letters). Each feature has an arrowhead by its <code>strand</code> (<code>direction_field</code>), on
          the ring and in the detail; the f1 region crosses the origin. Labels sit outside the ring, past the
          ruler&apos;s numbers, each with a leader from its feature: sorted by angle and spread a line apart per side,
          the nine cut sites of the cloning site fanned out; hover a label and its feature is hovered, as on the ring
          (the tooltip, the detail), click it to select it. The cut sites are ticks on the features&apos; ring, in the
          skin&apos;s faint ink. Three repeat pairs are chords through the hub. The ring shows the detail&apos;s view as
          a window: a sector with a grip at each end on the ruler&apos;s baseline. Zoom the detail (or wheel in it, or
          focus the ring and press <kbd>+</kbd>), then drag the window round the ring to pan the detail, or a grip to
          zoom it, the other end held. Rotate the origin: the ring starts elsewhere, the labels follow, and a window
          across the new origin wraps. Export the ring as SVG: the figure below the viewer, with its window.
        </>}>
      <BuilderCode name="case16" />
      <Suspense fallback={<div className={f.status}>Compiling…</div>}>
        <Case16Viewer options={{
        navigator: a.navigator,
        rowsColor: a.rowsColor,
        ui: a.ui
      }} />
      </Suspense>
    </PrismPage>
}`,...q.parameters?.docs?.source},description:{story:"Case 16: a plasmid map through `b.preset.plasmidMap`, a ring with its linear detail and the window between them.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'A genotype matrix',
  render: a => <PrismPage title={CASE_TITLES.case17} caption={<>
          {GENOTYPE_SAMPLES.toLocaleString('en-US')} synthetic samples as the states of a <code>matrix</code> over{' '}
          {GENOTYPE_SITES} variant sites, heterozygous amber and homozygous for the alternative allele red (a{' '}
          <code>field_palette</code>; the reference genotype is not colored). The alternative allele&apos;s frequency
          varies by population and in blocks of 20 sites. The samples are thinner than a pixel, so each device row shows
          one color for its samples, by the layer&apos;s <code>density</code>: the most common color of its colored
          samples, faded by the share of its samples with the reference genotype (<code>majority</code>), or the
          strongest genotype among them, so a rare homozygote shows (<code>maximum</code>). Alt and the wheel zoom the
          samples vertically. A sample table keyed by <code>state</code> gives each its <code>population</code> and its{' '}
          <code>alt_alleles</code>; the choices patch the layer&apos;s <code>order</code>, <code>filter</code> and{' '}
          <code>density</code>. By population, the blocks line up; the last order keeps about 24 samples, which draw as
          cells (a band each; labels only from 9 px a band).
        </>}>
      <BuilderCode name="case17" />
      <Suspense fallback={<div className={f.status}>Compiling…</div>}>
        <Case17Viewer options={{
        navigator: a.navigator,
        rowsColor: a.rowsColor,
        ui: a.ui
      }} />
      </Suspense>
    </PrismPage>
}`,...J.parameters?.docs?.source},description:{story:`Case 17: dense matrix states (KS2), a matrix's keyed states ordered and filtered by a key table.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Finding things in p53',
  render: a => <PrismPage title={CASE_TITLES.case18} caption={<>
          p53&apos;s Tracks view: the letters and three feature tracks (domains, zinc ligands, DNA-contact residues),
          each item with a name to search by. Two SeqQL queries run at load as <code>computed</code> nodes: the
          cysteines, and the domains holding four or more of them (a query naming the other). The section&apos;s{' '}
          <code>highlights</code> show them, as any annotation: the rich domain as a band behind the tracks, the
          cysteines lit, the zinc ligands accented, and the bookmarks (an inline <code>ranges</code> table the bookmark
          actions edit and step). The Search part is the viewer&apos;s; the search is the story&apos;s own: item names
          from two characters, anywhere in the name, then the letters from one, or a regular-expression motif such as{' '}
          <code>{'[KR]{2}.{10,12}[KR]{3,}'}</code> (the bipartite nuclear localization signal). Every result lights and
          ticks in the navigator; Enter, Shift+Enter and ‹ › step through them; Keep holds them as a location set the
          legend lists under Highlights. Place the part in the viewer&apos;s bar (the UI spec gives <code>search</code>)
          or above the viewer, as an app would (<code>{'<Search context={ctx} search={fn} />'}</code>).
        </>}>
      <BuilderCode name="case18" />
      <Suspense fallback={<div className={f.status}>Compiling…</div>}>
        <Case18Viewer options={{
        navigator: a.navigator,
        rowsColor: a.rowsColor,
        ui: a.ui
      }} />
      </Suspense>
    </PrismPage>
}`,...Y.parameters?.docs?.source},description:{story:`Case 18: finding things in p53: SeqQL queries run at load, the Search part, location sets and bookmarks.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'A chromosome by region',
  render: a => <PrismPage title={CASE_TITLES.case19} caption={<>
          chr17 of GRCh38 as one block of a streamed genome: a letters stream&apos;s manifest names the chromosomes and
          their lengths, and nothing more is asked until the view needs it. The navigator is the ideogram (a registered
          entry, from hg38&apos;s committed cytobands): the chromosome&apos;s bands, its centromere in red, the
          view&apos;s window over them; press to jump, drag to pan, drag an end to zoom. The view opens on 17p13.1; the
          snapshots go to the whole chromosome, 200 kb of 17p13.1 and 50 positions in a gene&apos;s exon. Zoomed out,
          genes and variants are density from each region&apos;s counts and the Sequence track is hatched; at 200 kb the
          genes arrive as items (exons joined, colored by category) and the variants by their alternative; at 50
          positions the letters, colored by nucleotide. phyloP is binned at every zoom. Every track is streamed by
          region from the fixtures (synthetic letters, genes, variants and scores; no network); the line under the
          viewer counts the regions asked.
        </>}>
      <BuilderCode name="case19" />
      <Suspense fallback={<div className={f.status}>Compiling…</div>}>
        <Case19Viewer options={{
        rowsColor: a.rowsColor,
        ui: a.ui
      }} />
      </Suspense>
    </PrismPage>
}`,...X.parameters?.docs?.source},description:{story:`Case 19: a chromosome by region, streamed, with the ideogram as its navigator.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'A protein on its genome',
  render: a => <PrismPage title={CASE_TITLES.case20} caption={<>
          P1 (synthetic, 1,334 residues) is coded by three exons over 220 kb of chr2 of a streamed genome, joined to it
          by a <code>codon</code> mapping. Its section shows its domains and chr2&apos;s streamed genes, variants and
          phyloP on its own axis, through that mapping: only the regions its exons reach are asked, a variant lands on
          the residue its position codes, and phyloP over a residue is read over its codon. The second section is chr2
          at the gene: P1&apos;s residues over their codons (<code>letters</code> with <code>of</code>) and its domains
          along the exons, a domain across an intron in two parts. The genes stream also serves T1, the transcript that
          codes P1, with its map (a codon map&apos;s params): when its region arrives T1 becomes an item coordinate
          system, <code>genes_src/T1</code>, and the third section shows its own residues, the genome&apos;s genes,
          variants and phyloP placed through its map. Hover a residue of P1 or T1: its label shows the codon that codes
          it, read from the genome&apos;s streamed letters (asked when first hovered), with its positions on chr2; a
          codon an intron splits shows both parts (residue 500&apos;s T|CA, 900&apos;s A|TG). Hover a domain or a
          variant: it lights in every section that places it.
        </>}>
      <BuilderCode name="case20" />
      <Suspense fallback={<div className={f.status}>Compiling…</div>}>
        <Case20Viewer options={{
        navigator: a.navigator,
        rowsColor: a.rowsColor,
        ui: a.ui
      }} />
      </Suspense>
    </PrismPage>
}`,...Z.parameters?.docs?.source},description:{story:`Case 20: a protein on its genome, streamed through a codon map, and the transcript's item coordinate system.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'A gene on its reverse strand',
  render: a => <PrismPage title={CASE_TITLES.case21} caption={<>
          GENE2 is synthetic: four exons on the reverse strand of a 1,400-nucleotide region, its protein translated by a
          minus-strand <code>codon</code> mapping (the CDS&apos;s ranges read downward, complemented). The first section
          is the gene as a piece of the region in its own direction (<code>range</code> and <code>direction: -1</code>
          on its block): read 5′ → 3′, the ruler counting down, its letters complemented by a letter map (the data stays
          the + strand&apos;s). Its transcript is one item (four rows of one <code>id</code>, joined), arrowheads by its{' '}
          <code>strand</code>; the protein&apos;s residues over their codons; an RNA-seq-like coverage; and its splice
          junctions as a sashimi plot (<code>b.preset.sashimi</code>): arcs stroked and labeled by read count, the
          gene&apos;s (−) hanging below their line, an exon-skipping one thin, and two weak junctions of an antisense
          transcript (+) rising above theirs. The second section is the mRNA as its own track: the same piece showing
          only the exons (<code>b.preset.exonsOnly</code>, the introns breaks), its letters as RNA (the{' '}
          <code>complement_rna</code> letter map). The third is the region as written, the + strand: the gene&apos;s
          arrowheads point left. The sections follow the first; hover or select anywhere and the same nucleotides light
          in all three.
        </>}>
      <BuilderCode name="case21" />
      <Suspense fallback={<div className={f.status}>Compiling…</div>}>
        <CaseViewer name="case21" options={{
        navigator: a.navigator,
        rowsColor: a.rowsColor,
        ui: a.ui
      }} />
      </Suspense>
    </PrismPage>
}`,...Q.parameters?.docs?.source},description:{story:`Case 21: a gene on the reverse strand, read in its own direction, with its splice junctions and its mRNA.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'A family triaged',
  render: a => <PrismPage title={CASE_TITLES.case22} caption={<>
          Pfam&apos;s PF00042 seed (32 globins, committed as a fixture) in an <code>msa</code> section of 16 rows. A
          guide tree is computed at load (<code>tree {'{ provider: "nj" }'}</code>, neighbor joining on p-distances) and
          the rows follow it; click a branch to fold a clade. Three key tables give the rows fields, shown as data
          columns: the review status (the document&apos;s own <code>rows</code> table: three Swiss-Prot entries,
          HBA_HUMAN, MYG_CHICK and YNX4_YEAST, the rest TrEMBL&apos;s, read from the entry names),{' '}
          <code>row_stats</code>&apos; identity to HBA_HUMAN and coverage, and <code>redundancy</code>&apos;s clusters
          at 50%. The triage choices patch the rows layer&apos;s <code>order</code> and <code>filter</code>: the
          reviewed first, the reviewed only, the rows covering 80% of the columns, one per cluster; the tree is drawn
          only in tree order. Beside the scrollbar, the vertical overview: every row in miniature, the rows in view a
          window to drag (Alt-wheel zooms rows). Each row has the host&apos;s control (the <code>RowControl</code>{' '}
          slot): Keep, the curator&apos;s mark, held by the story and counted under the viewer.
        </>}>
      <BuilderCode name="case22" />
      <Suspense fallback={<div className={f.status}>Compiling…</div>}>
        <Case22Viewer options={{
        navigator: a.navigator,
        rowsColor: a.rowsColor,
        ui: a.ui
      }} />
      </Suspense>
    </PrismPage>
}`,...$.parameters?.docs?.source},description:{story:`Case 22: a family triaged: a guide tree, key tables on its rows, the vertical overview and a control per row.`,...$.parameters?.docs?.description}}}})))()}_n();export{N as Case1,H as Case10,U as Case12,W as Case13,G as Case14,K as Case15,q as Case16,J as Case17,Y as Case18,X as Case19,P as Case2,Z as Case20,Q as Case21,$ as Case22,F as Case3,I as Case4,L as Case5,R as Case6,z as Case7,B as Case8,V as Case9,gn as __namedExportsOrder,nn as default};