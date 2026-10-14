import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t,h as n,n as r,o as i,r as a,t as o}from"./jsx-runtime-DiBZWcxb.js";import{i as s,r as c}from"./base-Cal5NIfy.js";import{a as l,o as u,t as d}from"./params-form-MNGzvbPp.js";import{n as f,t as p}from"./distinctUntilChanged-BHDujrwf.js";import{a as m,l as h,n as g,r as _,u as ee}from"./control-flow-HAEcegil.js";import{n as v,t as y}from"./map-CsR1ibWS.js";import{n as b,t as x}from"./combineLatest-Cmmnh-lC.js";import{E as S,M as C,T as w,j as te,k as ne,m as re,n as ie,p as ae,w as oe,y as T}from"./shell-Dnh1QcSy.js";import{n as E,r as D}from"./observable-state-D-XGaosJ.js";import{n as se,r as ce}from"./playback-D2Zhf7mj.js";import{n as O,t as k}from"./icon-Dqu8cMU0.js";import{t as A}from"./scroll-area-XzYIuKyv.js";import{t as le}from"./wordmark-FS1EQ9jB.js";import{n as j,t as M}from"./param-definition-Dm5QwBCI.js";import{t as N}from"./select-CsL-iypk.js";import{t as ue}from"./text-input-CQilzVcE.js";import{t as P}from"./button-DEZz5joq.js";import{d as de,i as fe,n as F,t as I,u as pe}from"./src-C_tJCfFc.js";import{a as me,i as he,n as ge,o as _e,r as L,s as ve,t as ye}from"./structure-tab-BkpJZLSR.js";import{t as R}from"./action-footer-D3SDSK1q.js";import{t as be}from"./legend-CptIp6-Q.js";import{n as xe,t as Se}from"./playback-Dftv5awz.js";import{n as Ce,r as we,t as Te}from"./home-tab-CGpToPZJ.js";import{in as Ee,n as De,on as Oe,r as ke,rn as Ae}from"./builder-CBzbOs1n.js";import{C as je,Dt as Me,E as Ne,It as Pe,Lt as Fe,Mt as Ie,Ot as Le,Pt as Re,Rt as ze,S as Be,T as Ve,_ as He,b as Ue,g as We,h as Ge,jt as Ke,m as qe,n as Je,t as Ye,w as Xe,x as Ze,zt as Qe}from"./surface-DLjGn-c4.js";import{g as $e,t as et,u as tt}from"./src-Bv2t7c59.js";import{a as nt,i as rt}from"./viewer-BzN8fYdD.js";import{t as it}from"./drag-to-reorder-BIcwE7OS.js";import{n as at,t as ot}from"./state-tree-tab-C3hEC0JX.js";import{n as st,t as ct}from"./home-B8zlmysu.js";function lt(e,t){let n=t.trim();if(!n)return{ok:!1,message:`Type a ${e.title} expression.`};let r=0;for(let e of n)if(r+=e===`(`?1:e===`)`?-1:0,r<0)return{ok:!1,message:`A ")" without its "(".`};return r>0?{ok:!1,message:`A "(" is not closed.`,hint:`For example: ${e.examples[2].value}`}:/\b(and|or|not)\s*$/.test(n)?{ok:!1,message:`The expression ends in "${n.split(/\s+/).pop()}".`}:{ok:!0,value:n}}function ut(e,t=()=>1){let n=new ae({context:D({}).asReadonly,formats:mt}),r=(t,n)=>()=>(e.openOverlay(t,void 0,n),B(`Opened ${t}`)),i=(t,n)=>()=>(e.show(t,n),B(`Showing ${n??t}`)),a=[{id:`camera.reset`,group:`camera`,title:`Reset camera`,alias:[`reset view`,`center`,`home view`],category:`View`,icon:`focus`,run:()=>B(`Camera reset`)},{id:`camera.reset-zoom`,group:`camera`,title:`Reset zoom`,alias:[`zoom to fit`,`fit`],category:`View`,icon:`zoom-out`,run:()=>B(`Zoom reset`)},{id:`camera.orient-axes`,group:`camera`,title:`Orient axes`,alias:[`orient`,`align axes`,`principal axes`],category:`View`,icon:`axis-3d`,run:()=>B(`Axes oriented`)},{id:`view.expand`,title:`Expand viewport`,category:`View`,icon:`maximize-2`,run:()=>B(`Expanded`)},{id:`view.illumination`,title:`Toggle illumination`,alias:[`ray tracing`,`path tracing`,`global illumination`,`lighting`],category:`View`,icon:`lightbulb`,shortcut:{key:`i`,alt:!0},run:()=>B(`Illumination toggled`)},{id:`view.xr`,title:`Enter XR`,alias:[`vr`,`ar`,`webxr`,`headset`],category:`View`,icon:`glasses`,when:()=>`XR is not available in this browser`,run:()=>B(``)},{id:`view.sequence`,title:`Show or hide sequence`,alias:[`sequence`,`sequence viewer`],category:`View`,icon:`sequence`,run:()=>(e.toggle(`top`),B(`Sequence toggled`))},{id:`panel.structure`,title:`Show Structure`,category:`Panels`,icon:`structure`,run:i(`structure`)},{id:`panel.home`,title:`Show Home`,category:`Panels`,icon:`prism`,run:i(`home`)},{id:`panel.log`,title:`Show Log`,category:`Panels`,icon:`scroll-text`,run:i(`log`)},{id:`panel.settings`,title:`Open settings`,category:`Panels`,icon:`settings`,run:i(`settings`)},{id:`canvas.settings`,title:`Canvas settings…`,alias:[`viewport settings`,`rendering`,`quality`],category:`View`,icon:`monitor-cog`,run:r(`canvas-settings`)},{id:`canvas.background`,title:`Canvas background…`,alias:[`background`,`bg color`],category:`View`,icon:`palette`,run:r(`canvas-settings`,`background`)},{id:`animation.open`,title:`Animation…`,category:`Animation`,icon:`clapperboard`,run:r(`animation`)},{id:`animation.wiggle`,title:`Wiggle by dynamics`,alias:[`wiggle`,`b-factor`,`dynamics`],category:`Animation`,icon:`orbit`,run:()=>B(`Wiggle: dynamics`)},{id:`export.image`,group:`export`,title:`Export image…`,alias:[`screenshot`,`save image`,`png`,`picture`],category:`Export`,icon:`image`,run:r(`export`,`image`)},{id:`export.animation`,group:`export`,title:`Export animation…`,alias:[`video`,`movie`,`mp4`,`record`],category:`Export`,icon:`film`,run:r(`export`,`animation`)},{id:`export.geometry`,group:`export`,title:`Export geometry…`,alias:[`glb`,`stl`,`obj`,`usdz`,`3d print`,`mesh`],category:`Export`,icon:`box`,run:r(`export`,`geometry`)},{id:`snapshots.show`,title:`Snapshots`,alias:[`states`,`scenes`,`save state`,`bookmarks`],category:`Snapshots`,icon:`images`,shortcut:{key:`s`,mod:!0},run:i(`snapshots`)},{id:`snapshot.next`,title:`Next snapshot`,alias:[`next scene`,`forward`],category:`Snapshots`,icon:`chevron-right`,run:()=>B(`Next snapshot`)},{id:`snapshot.previous`,title:`Previous snapshot`,alias:[`previous scene`,`prev`,`back`],category:`Snapshots`,icon:`chevron-left`,run:()=>B(`Previous snapshot`)},{id:`data.download-structure`,title:`Download structure…`,category:`Data`,icon:`download`,alias:[`download`,`fetch`,`load`,`open pdb`],params:()=>({id:M.Text(``,{label:`ID`}),source:M.Select(`pdb`,[[`pdb`,`PDB`],[`alphafold`,`AlphaFold DB`],[`pdb-ihm`,`PDB-IHM`]],{label:`source`})}),fields:{source:{before:`from`}},defaults:()=>({source:`pdb`}),action:`Download`,presets:()=>[{id:`alphafold`,title:`from AlphaFold DB`,values:{source:`alphafold`},keywords:[`afdb`,`uniprot`]},{id:`pdb-ihm`,title:`from PDB-IHM`,values:{source:`pdb-ihm`},keywords:[`integrative`]}],run:e=>B(`Downloading ${e.id} from ${e.source}`)},{id:`selection.color`,group:`selection`,title:`Color selection…`,category:`Selection`,icon:`palette`,alias:[`color`,`colour`],params:()=>({color:M.Text(``,{label:`color`}),on:M.Select(`all`,[[`all`,`all representations`],[`cartoon`,`cartoon`],[`ball-and-stick`,`ball & stick`]],{label:`representations`})}),fields:{color:{format:`color`},on:{before:`on`}},defaults:()=>({on:`all`}),action:`Color`,run:e=>B(`Colored the selection ${e.color} on ${e.on}`)},{id:`selection.transparency`,group:`selection`,title:`Set transparency…`,category:`Selection`,icon:`paintbrush`,alias:`transparency`,params:()=>({value:M.Numeric(.5,{min:0,max:1,step:.05},{label:`value`})}),fields:{value:{before:`to`}},defaults:()=>({value:.5}),action:`Apply`,run:e=>B(`Transparency ${e.value} on the selection`)},{id:`focus.target`,title:`Focus on…`,category:`Focus`,icon:`locate`,alias:`focus`,params:()=>({target:M.Text(``,{label:`ligand`})}),fields:{target:{format:`ligand`}},action:`Focus`,run:e=>B(`Focused on ${e.target}`)},...Object.entries(z).map(([e,t])=>({id:`select.${e}`,group:`select.expression`,title:`Select with ${t.title}…`,category:`Select`,icon:`text-cursor-input`,alias:e,params:()=>({expression:M.Text(``,{label:`${t.title} expression`}),mode:ht}),fields:{expression:{format:`expression.${e}`},mode:{before:`and`}},defaults:()=>({mode:`add`}),action:`Select`,run:e=>B(`${gt(e.mode)}: ${t.title} "${e.expression}"`)})),{id:`select.residues`,group:`select`,title:`Select residues…`,category:`Select`,icon:`text-cursor-input`,alias:`residues`,params:()=>({residues:M.Text(``,{label:`residues`}),mode:ht}),fields:{residues:{format:`residues`},mode:{before:`and`}},defaults:()=>({mode:`add`}),action:`Select`,run:e=>B(`${gt(e.mode)}: residues ${e.residues}`)},{id:`select.ligands`,group:`select.query`,title:`Select ligands`,alias:[`ligands`,`het`,`hetero`],category:`Select`,icon:`mouse-pointer-click`,run:()=>B(`Selected 3 ligands`)},{id:`select.helices`,group:`select.query`,title:`Select helices`,alias:[`helix`,`alpha helices`],category:`Select`,icon:`mouse-pointer-click`,run:()=>B(`Selected 412 residues`)},{id:`select.water`,group:`select.query`,title:`Select water`,alias:[`waters`,`solvent`,`hoh`],category:`Select`,icon:`mouse-pointer-click`,run:()=>B(`Selected 186 waters`)},{id:`selection.clear`,group:`selection`,title:`Clear selection`,alias:[`deselect`,`select none`,`unselect`],category:`Selection`,icon:`x`,run:()=>B(`Selection cleared`)},{id:`measure.open`,title:`Measure…`,alias:[`measure`,`distance`,`angle`,`dihedral`,`ruler`],category:`Measure`,icon:`ruler`,run:i(`selection`,`measure`)},{id:`superpose.open`,title:`Superpose…`,alias:[`align`,`superimpose`,`rmsd`,`tm-align`,`fit structures`],category:`Structure`,icon:`superpose`,when:()=>t()>1||`Load two or more structures`,run:i(`selection`,`superpose`)},{id:`measure.distance`,title:`Measure distance`,category:`Measure`,icon:`ruler`,when:()=>`Select two atoms first`,run:()=>B(``)}],o=(e,t,n)=>({id:`preset.${e}`,title:t,category:n,group:`preset`,icon:`layers`,run:()=>B(`Preset: ${t}`)});a.push(o(`empty`,`Empty`,`Presets`),o(`auto`,`Automatic`,`Presets`),o(`atomic-detail`,`Atomic detail`,`Basic`),o(`polymer-cartoon`,`Polymer cartoon`,`Basic`),o(`polymer-and-ligand`,`Polymer & ligand`,`Basic`),o(`protein-and-nucleic`,`Protein & nucleic`,`Basic`),o(`coarse-surface`,`Coarse surface`,`Basic`),o(`illustrative`,`Illustrative`,`Miscellaneous`),o(`molecular-surface`,`Molecular surface`,`Miscellaneous`),o(`auto-detail`,`Automatic detail`,`Miscellaneous`));let s=(e,t,n,r)=>({id:`styles.${e}`,title:t,category:n,group:`styles`,icon:r,run:()=>B(`${n}: ${t}`)});a.push(s(`repr-default`,`Default representation`,`Representation`,`layers`),s(`cartoon`,`Cartoon`,`Representation`,`cartoon`),s(`spacefill`,`Spacefill`,`Representation`,`spacefill`),s(`surface`,`Surface`,`Representation`,`surface`),s(`style-default`,`Default style`,`Style`,`paintbrush`),s(`illustrative`,`Illustrative style`,`Style`,`paintbrush`));let c=[`Data`,`Structure`,`Select`,`Selection`,`Focus`,`Measure`,`View`,`Animation`,`Snapshots`,`Export`,`Panels`];return a.sort((e,t)=>c.indexOf(e.category)-c.indexOf(t.category)),n.register(a),n.registerGroups([{id:`preset`,title:`Preset`,icon:`shapes`,order:-2},{id:`styles`,title:`Styles`,icon:`paintbrush`,order:-1},{id:`select`,title:`Select`,icon:`mouse-pointer-click`,order:0},{id:`select.query`,title:`By query`,icon:`list-tree`,parent:`select`,order:0},{id:`select.expression`,title:`Expression`,icon:`text-cursor-input`,parent:`select`,order:1},{id:`selection`,title:`Selection`,icon:`palette`,order:1},{id:`camera`,title:`Camera`,icon:`focus`,order:2},{id:`export`,title:`Export`,icon:`download`,order:3}]),n}function dt(e){let{manager:t,shell:n,scene:r,snapshots:i}=e,a=(e,t=[])=>e.flatMap(e=>[{node:e,path:t},...a(e.children.value,[...t,e.label.value])]);return[{char:`@`,title:`Go to`,placeholder:`A structure, component, volume…`,items:e=>T(a(r.roots.value),e,e=>`${e.node.label.value} ${e.path.join(` `)}`).map(e=>({id:e.node.id,label:e.node.label.value,detail:e.path.join(` › `)||e.node.kind,icon:e.node.icon,run:()=>{n.show(`structure`),r.picked.value!==e.node&&r.pick(e.node)}}))},{char:`#`,title:`Snapshots`,placeholder:`A snapshot by title`,items:e=>T(i.titles.value.map((e,t)=>({title:e,index:t})),e,e=>e.title).map(e=>({id:`snapshot:${e.index}`,label:e.title,detail:`${e.index+1} / ${i.count.value}`,icon:`image`,run:()=>i.goTo(e.index)}))},{char:`:`,title:`Select`,placeholder:`Residues (A 10-20) or an expression (pymol resn HEM)`,items:e=>{let n=/^(pymol|vmd|jmol)\b\s*(.*)$/i.exec(e),r=(e,n)=>()=>(t.open(e,n||void 0),!0);if(n){let e=n[1].toLowerCase();return[{id:`select.${e}`,label:`Select with ${z[e].title}${n[2]?`: ${n[2]}`:`…`}`,icon:`text-cursor-input`,run:r(`select.${e}`,n[2])}]}return[{id:`select.residues`,label:e?`Select residues ${e}`:`Select residues…`,detail:`A 10-20, B 5`,icon:`text-cursor-input`,run:r(`select.residues`,e)},...Object.entries(z).map(([e,t])=>({id:`select.${e}`,label:`Select with ${t.title}…`,detail:`:${e} …`,icon:`text-cursor-input`,run:r(`select.${e}`,``)}))]}}]}var ft,pt,z,mt,B,ht,gt;function _t(){return(_t=e((()=>{j(),re(),E(),ft=[`red`,`orange`,`yellow`,`green`,`teal`,`blue`,`violet`,`magenta`,`white`,`grey`,`black`],pt=[{value:`HEM 508`,label:`HEM 508`,detail:`Protoporphyrin IX containing Fe`},{value:`SO4 1`,label:`SO4 1`,detail:`Sulfate ion`},{value:`SO4 2`,label:`SO4 2`,detail:`Sulfate ion`}],z={pymol:{title:`PyMOL`,examples:[{value:`resn HEM`,label:`resn HEM`},{value:`chain A and resi 100-120`,label:`chain A and resi 100-120`},{value:`byres (resn HEM around 5)`,label:`byres (resn HEM around 5)`},{value:`polymer and not hydro`,label:`polymer and not hydro`},{value:`organic`,label:`organic`}]},vmd:{title:`VMD`,examples:[{value:`resname HEM`,label:`resname HEM`},{value:`chain A and resid 100 to 120`,label:`chain A and resid 100 to 120`},{value:`same residue as within 5 of resname HEM`,label:`same residue as within 5 of resname HEM`},{value:`protein and backbone`,label:`protein and backbone`},{value:`water`,label:`water`}]},jmol:{title:`Jmol`,examples:[{value:`HEM`,label:`HEM`},{value:`:A and 100-120`,label:`:A and 100-120`},{value:`within(5.0, HEM)`,label:`within(5.0, HEM)`},{value:`protein and backbone`,label:`protein and backbone`},{value:`water`,label:`water`}]}},mt={get:e=>{let t=e.startsWith(`expression.`)?z[e.slice(11)]:void 0;if(t)return{hint:()=>`a ${t.title} expression`,check:e=>lt(t,e),complete:e=>{let n=e.trim().toLowerCase();return t.examples.filter(e=>e.value.toLowerCase().startsWith(n)&&e.value.toLowerCase()!==n).map(e=>({...e,detail:`example`,fill:!0}))}};if(e===`residues`)return{hint:()=>`chains and residue ranges: A 10-20, B 5`,check:e=>/^\s*[A-Za-z0-9]+(\s+\d+(-\d+)?)?(\s*,\s*[A-Za-z0-9]+(\s+\d+(-\d+)?)?)*\s*$/.test(e)?{ok:!0,value:e.trim()}:{ok:!1,message:`"${e}" is not a residue list.`,hint:`Chain, then residues: A 10-20, B 5`},complete:()=>[{value:`A 100-120`,label:`A 100-120`,detail:`a range in chain A`},{value:`A 442, A 508`,label:`A 442, A 508`,detail:`Cys442 and the heme`}]};if(e===`color`)return{hint:()=>`a color name or #hex`,check:e=>ft.includes(e.toLowerCase())||/^#?[0-9a-f]{6}$/i.test(e)?{ok:!0,value:e.toLowerCase()}:{ok:!1,message:`"${e}" is not a color.`,hint:`Try a name (red, teal) or #hex.`},complete:e=>T(ft,e,e=>e).map(e=>({value:e,label:e}))};if(e===`ligand`)return{hint:()=>`a ligand of the loaded structures`,check:e=>{let t=pt.find(t=>t.value.toLowerCase()===e.toLowerCase().trim());return t?{ok:!0,value:t.value}:{ok:!1,message:`No ligand "${e}".`}},complete:e=>T(pt,e,e=>`${e.label} ${e.detail}`)}}},B=e=>({message:e}),ht=M.Select(`add`,[[`add`,`add to the selection`],[`remove`,`remove from the selection`],[`intersect`,`intersect with the selection`],[`set`,`replace the selection`]],{label:`mode`}),gt=e=>({add:`Added to the selection`,remove:`Removed from the selection`,intersect:`Intersected`,set:`Selected`})[e]??`Selected`})))()}var V;function vt(){return(vt=e((()=>{s(),V={badge:`msp-viewer-mode-switch-badge`,group:`msp-viewer-mode-switch-group`,level:`msp-viewer-mode-switch-level`,"level-in":`msp-viewer-mode-switch-level-in`,levelCaption:`msp-viewer-mode-switch-levelCaption`,levelRow:`msp-viewer-mode-switch-levelRow`,levels:`msp-viewer-mode-switch-levels`,segment:`msp-viewer-mode-switch-segment`,select:`msp-viewer-mode-switch-select`,switch:`msp-viewer-mode-switch-switch`},c(`viewer/views/canvas/mode-switch.module.css`,`@layer msp.components {
.msp-viewer-mode-switch-levels {
  border-radius: var(--msp-radius-lg);
  background: var(--msp-glass-bg);
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
}

.msp-viewer-mode-switch-switch {
  flex-direction: row;
  display: flex;
}

.msp-viewer-mode-switch-segment {
  width: var(--msp-stack-row, 40px);
  height: var(--msp-stack-row, 40px);
  color: var(--msp-color-text-muted);
  transition: background-color var(--msp-motion-fast) var(--msp-ease),
    color var(--msp-motion-fast) var(--msp-ease);
  place-items: center;
  display: grid;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[aria-pressed="true"] {
    background: var(--msp-color-control);
    color: var(--msp-color-text);
  }
}

.msp-viewer-mode-switch-switch[data-canvas-mode="select"] .msp-viewer-mode-switch-segment[aria-pressed="true"] {
  background: color-mix(in oklab, var(--msp-color-accent), transparent 82%);
  color: var(--msp-color-accent);
}

.msp-viewer-mode-switch-level {
  bottom: 100%;
  left: var(--msp-stack-row, 40px);
  padding-bottom: var(--msp-space-3);
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--msp-motion-fast) var(--msp-ease),
    transform var(--msp-motion-fast) var(--msp-ease),
    visibility 0s linear .16s;
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  position: absolute;
  transform: translateY(4px);
}

:where(:has( > * .msp-viewer-mode-switch-select:hover,  > * .msp-viewer-mode-switch-select:focus-visible)) > .msp-viewer-mode-switch-level, .msp-viewer-mode-switch-level:hover, .msp-viewer-mode-switch-level:focus-within, .msp-viewer-mode-switch-level:has([aria-expanded="true"]) {
  opacity: 1;
  visibility: visible;
  transition-delay: 0s;
  transform: none;
}

@media (hover: none) {
  .msp-viewer-mode-switch-level {
    opacity: 1;
    visibility: visible;
    transform: none;
  }
}

.msp-viewer-mode-switch-select {
  position: relative;
}

.msp-viewer-mode-switch-badge {
  opacity: .8;
  position: absolute;
  bottom: 4px;
  right: 4px;
}

.msp-viewer-mode-switch-levels {
  z-index: var(--msp-z-overlay);
  min-width: 168px;
  padding: var(--msp-space-2);
  background: var(--msp-glass-panel-bg);
  animation: msp-viewer-mode-switch-level-in var(--msp-motion-fast) var(--msp-ease);
  display: grid;
}

.msp-viewer-mode-switch-group {
  padding: var(--msp-space-3) var(--msp-space-3) var(--msp-space-1);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-viewer-mode-switch-levelRow {
  align-items: center;
  gap: var(--msp-space-3);
  height: 28px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  grid-template-columns: auto 1fr;
  display: grid;

  &:hover, &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[aria-checked="true"] {
    color: var(--msp-color-accent);
    font-weight: 600;
  }
}

:where([data-mode="compact"]) .msp-viewer-mode-switch-levelCaption {
  display: none;
}
}
`)})))()}function yt(e){let t=e.mode.pipe(v(e=>e===`select`),p()),n=e.granularities,i=n&&e.granularity?e.granularity.pipe(v(e=>n.find(t=>t.value===e)??n[0])):void 0;return a(`div`,{class:V.switch,role:`group`,"aria-label":`Canvas mode`,"data-canvas-mode":e.mode,children:[r(`button`,{type:`button`,class:V.segment,"aria-pressed":t.pipe(v(e=>!e)),"data-tip":`Interact: drag to rotate, click to focus`,"data-tip-side":`top`,"aria-label":`Interact`,onClick:()=>e.setMode(`interact`),children:r(k,{name:`rotate-3d`,size:20})}),a(`button`,{type:`button`,class:`${V.segment} ${V.select}`,"aria-pressed":t,"data-tip":i?void 0:`Select: click to select, Shift+click to extend`,"data-tip-side":`top`,"aria-label":`Select`,onClick:()=>e.setMode(`select`),children:[r(k,{name:`mouse-pointer-click`,size:20}),i?r(_,{when:i,children:e=>r(k,{name:e.icon,size:10,class:V.badge})}):null]})]})}function bt(e){let t=e.granularities,n=e.granularity;return!t||!n?null:r(`div`,{class:V.level,children:r(`div`,{class:V.levels,role:`menu`,"aria-label":`What a click selects`,children:t.map((o,s)=>a(i,{children:[o.group&&o.group!==t[s-1]?.group?r(`div`,{class:V.group,children:o.group}):null,a(`button`,{type:`button`,role:`menuitemradio`,class:V.levelRow,"aria-checked":n.pipe(v(e=>e===o.value)),onClick:()=>{e.setGranularity?.(o.value),e.setMode(`select`)},children:[r(k,{name:o.icon,size:15}),o.label]})]}))})})}function xt(){return(xt=e((()=>{f(),y(),O(),m(),vt(),o()})))()}var H;function St(){return(St=e((()=>{s(),H={action:`msp-viewer-selection-bar-action`,bar:`msp-viewer-selection-bar-bar`,"bar-in":`msp-viewer-selection-bar-bar-in`,summary:`msp-viewer-selection-bar-summary`},c(`viewer/views/canvas/selection-bar.module.css`,`@layer msp.components {
.msp-viewer-selection-bar-bar {
  height: 34px;
  padding: 0 0 0 var(--msp-space-4);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-glass-bg);
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  animation: msp-viewer-selection-bar-bar-in var(--msp-motion-base) var(--msp-ease);
  align-items: center;
  display: flex;
  overflow: hidden;
}

@keyframes msp-viewer-selection-bar-bar-in {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
}

.msp-viewer-selection-bar-summary {
  align-items: center;
  gap: var(--msp-space-2);
  margin-right: var(--msp-space-3);
  font-size: var(--msp-font-size-sm);
  white-space: nowrap;
  display: flex;
}

.msp-viewer-selection-bar-action {
  width: 34px;
  height: 100%;
  color: var(--msp-color-text-muted);
  flex: none;
  place-items: center;
  display: grid;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

:where([data-docked]) .msp-viewer-selection-bar-bar {
  width: 100%;
  box-shadow: none;
  -webkit-backdrop-filter: none;
  border-top: 1px solid var(--msp-glass-edge);
  background: none;
  border-radius: 0;
  animation: none;
}

:where([data-docked]) .msp-viewer-selection-bar-summary {
  flex: 1;
}
}
`)})))()}function Ct(e){let{selection:t}=e;return r(_,{when:t.summary,children:e=>a(`div`,{class:H.bar,role:`toolbar`,"aria-label":`Selection`,children:[r(`span`,{class:H.summary,children:e}),t.actions.map(e=>r(`button`,{type:`button`,class:H.action,"aria-label":e.label,"data-tip":e.label,"data-tip-side":`top`,onClick:()=>e.run(),children:r(k,{name:e.icon,size:16})})),r(`button`,{type:`button`,class:H.action,"aria-label":`Clear selection`,"data-tip":`Clear selection`,"data-tip-side":`top`,onClick:()=>t.clear(),children:r(k,{name:`x`,size:16})})]})})}function wt(){return(wt=e((()=>{O(),m(),St(),o()})))()}var U;function Tt(){return(Tt=e((()=>{s(),U={autoCrop:`msp-viewer-image-export-autoCrop`,crop:`msp-viewer-image-export-crop`,export:`msp-viewer-image-export-export`,preview:`msp-viewer-image-export-preview`,stage:`msp-viewer-image-export-stage`},c(`viewer/views/export/image-export.module.css`,`@layer msp.components {
.msp-viewer-image-export-export {
  gap: var(--msp-space-3);
  min-width: 0;
  display: grid;
}

.msp-viewer-image-export-stage {
  height: 168px;
  padding: var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-well);
  place-items: center;
  display: grid;
}

.msp-viewer-image-export-preview {
  border-radius: var(--msp-radius-sm);
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  box-shadow: 0 0 0 1px var(--msp-glass-edge);
  position: relative;
  overflow: hidden;
}

.msp-viewer-image-export-crop {
  border: 1px solid color-mix(in oklab, var(--msp-color-text), transparent 30%);
  box-shadow: 0 0 0 999px color-mix(in oklab, var(--msp-color-bg), transparent 45%);
  transition: left var(--msp-motion-base) var(--msp-ease),
    top var(--msp-motion-base) var(--msp-ease),
    width var(--msp-motion-base) var(--msp-ease),
    height var(--msp-motion-base) var(--msp-ease);
  border-radius: 1px;
  position: absolute;

  &[data-auto] {
    border-style: dashed;
  }
}

.msp-viewer-image-export-autoCrop {
  left: var(--msp-space-2);
  bottom: var(--msp-space-2);
  align-items: center;
  gap: var(--msp-space-1);
  height: 20px;
  padding: 0 var(--msp-space-2);
  background: var(--msp-glass-bg);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  box-shadow: var(--msp-glass-shadow);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
  border-radius: 10px;
  display: inline-flex;
  position: absolute;

  &:hover {
    color: var(--msp-color-text);
  }

  &[aria-pressed="true"] {
    color: var(--msp-color-text);
    font-weight: 600;
  }
}
}
`)})))()}function Et(e){let{model:t}=e,n=e=>`${(e*100).toFixed(2)}%`;return a(`div`,{class:U.export,children:[r(`div`,{class:U.stage,children:a(`div`,{class:U.preview,style:{"aspect-ratio":t.aspect.pipe(v(e=>`${e}`)),background:t.preview.pipe(v(e=>e??`var(--msp-color-control)`))},children:[r(`div`,{class:U.crop,"data-auto":t.autoCrop.asReadonly.pipe(v(e=>e?``:void 0)),style:{left:t.crop.pipe(v(e=>n(e.x))),top:t.crop.pipe(v(e=>n(e.y))),width:t.crop.pipe(v(e=>n(e.width))),height:t.crop.pipe(v(e=>n(e.height)))}}),r(`button`,{type:`button`,class:U.autoCrop,"aria-pressed":t.autoCrop.asReadonly,title:`Crop to the visible content`,onClick:()=>t.autoCrop.set(!t.autoCrop.value),children:r(`span`,{children:`Auto-crop`})})]})}),r(d,{form:t.form}),r(R,{icon:`download`,label:`Download`,info:t.size,busy:t.busy,secondary:{icon:`copy`,label:`Copy`,onClick:()=>t.copy()},onReset:()=>t.form.reset(),onApply:()=>t.download()})]})}function Dt(){return(Dt=e((()=>{y(),I(),Tt(),o()})))()}var Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt;function W(){return(W=e((()=>{Ot=e=>[{letters:`AILMV`,color:e.aliphatic,label:`Aliphatic`},{letters:`FWY`,color:e.aromatic,label:`Aromatic`},{letters:`KRH`,color:e.positive,label:`Positive`},{letters:`DE`,color:e.negative,label:`Negative`},{letters:`STNQ`,color:e.polar,label:`Polar`},{letters:`PG`,color:e.special,label:`Proline, glycine`},{letters:`C`,color:e.cysteine,label:`Cysteine`}],kt={name:`prism:residues`,label:`Prism residues`,description:`residues by class (aliphatic, aromatic, charged, polar, special) in Prism’s cool, soft hues`,provenance:`Zappo’s classes (Jalview’s published grouping); the hues are Prism’s own`,colorblind:!1,scheme:{kind:`letters`,alphabets:[`protein`,`dna`,`rna`],groups:Ot({aliphatic:`#6f879f`,aromatic:`#7a6cc2`,positive:`#3d7cc0`,negative:`#c25d7b`,polar:`#2f9a8d`,special:`#b98a45`,cysteine:`#a99a2e`}),dark:{groups:Ot({aliphatic:`#9db0c6`,aromatic:`#a99be4`,positive:`#6aa9ea`,negative:`#ea8fa8`,polar:`#62c5b6`,special:`#e0b56d`,cysteine:`#d9c866`})}}},At={colorSchemes:[kt]},jt=[`prism:residues`,`zappo`,`taylor`,`hydrophobicity`,null],Mt=[{label:`Very high (pLDDT > 90)`,from:90,color:`#3f6fc4`},{label:`Confident (70–90)`,from:70,color:`#7ec1e3`},{label:`Low (50–70)`,from:50,color:`#e8cc5a`},{label:`Very low (< 50)`,from:0,color:`#e89468`}],Nt={theme:`field_palette`,params:{field:`value`,palette:{kind:`discrete`,mode:`absolute`,colors:[...Mt].reverse().map(e=>[e.color,e.from])}}},Pt=Mt.map(e=>({label:e.label,color:e.color})),Ft=[{kind:`helix`,label:`Helix`,color:`#d1708a`},{kind:`strand`,label:`Strand`,color:`#e0a73f`},{kind:`turn`,label:`Turn`,color:`#4fa3a5`}],It={theme:`field_palette`,params:{field:`category`,palette:{kind:`categorical`,colors:Object.fromEntries(Ft.map(e=>[e.kind,e.color]))}}},Lt=Ft.map(e=>({label:e.label,color:e.color}))})))()}function Rt(e,t){let n=[{title:`Secondary structure`,items:Lt},...t?[{title:`Model confidence`,items:Pt}]:[]];return{...e,sections:[...e.sections??[],...n]}}function zt(e){return e===kt.name?kt:Ae.find(t=>t.name===e)}function Bt(e,t){let n=e===null?void 0:zt(e);if(!n)return Vt;let r=n.scheme,i=n.label;if(r.kind===`letters`||r.kind===`theme`)return{title:i,items:Oe(void 0,{custom:r},t).map(e=>({label:e.label,color:e.color})),ramps:[]};if(r.kind===`categorical`){let e=t&&r.dark&&r.dark!==`same`?r.dark:r.colors;return{title:i,items:Array.isArray(e)?e.map((e,t)=>({label:`${t+1}`,color:e})):Object.entries(e).map(([e,t])=>({label:e,color:t})),ramps:[]}}let a=t&&r.dark&&r.dark!==`same`?r.dark:r.colors;return{title:i,items:[],ramps:[{stops:Ht(a),lo:`Low`,hi:`High`}]}}var Vt,Ht;function Ut(){return(Ut=e((()=>{Ee(),W(),Vt={items:[],ramps:[]},Ht=e=>e.map((t,n)=>({t:typeof t==`string`?e.length===1?0:n/(e.length-1):t[1],color:typeof t==`string`?t:t[0]}))})))()}function Wt(e,t){let n=()=>{t.dock(`top`).active.value&&t.toggle(`top`)},r=n=>{e.setStyle(n),t.show(`sequence`)};return[{id:`sequence.none`,title:`No sequence`,alias:[`hide sequence`,`sequence off`],category:`Sequence`,icon:`ban`,run:()=>(n(),G(`Sequence hidden`))},{id:`sequence.text`,title:`Sequence: text`,alias:[`sequence compact`,`sequence letters`],category:`Sequence`,icon:`align-left`,run:()=>(r(`compact`),G(`Sequence as text`))},{id:`sequence.tracks`,title:`Sequence: tracks`,alias:[`sequence zoom`,`sequence track`],category:`Sequence`,icon:`chart-gantt`,run:()=>(r(`tracks`),G(`Sequence as tracks`))},...qt.map(t=>({id:`sequence.rail.${t.id}`,title:`Sequence tracks rail: ${t.label.toLowerCase()}`,category:`Sequence`,icon:`ruler`,run:()=>(e.setRail(t.rail),r(`tracks`),G(`Sequence rail: ${t.label.toLowerCase()}`))})),...jt.map(t=>({id:Jt(t),title:t===null?`Sequence: no colors`:`Sequence colors: ${Yt(t)}`,category:`Sequence`,icon:`palette`,run:()=>(e.setTheme({letters:t}),G(`Sequence colors: ${Yt(t).toLowerCase()}`))})),{id:`sequence.legend`,title:`Sequence legend…`,alias:[`what the colors mean`,`sequence colors`],category:`Sequence`,icon:`palette`,run:()=>(t.openOverlay(Kt),G(``))}]}function Gt(e,t,n){let r=(e,t,r,i={})=>({id:e,label:t,run:()=>n(r),...i}),i=t.dock(`top`).active.pipe(v(e=>!!e)),a=t=>x([i,e.style]).pipe(v(([e,n])=>e&&n===t));return[r(`none`,`No sequence`,`sequence.none`,{icon:`ban`,choice:!0,group:`view`,pressed:i.pipe(v(e=>!e))}),r(`text`,`Text`,`sequence.text`,{icon:`align-left`,choice:!0,group:`view`,pressed:a(`compact`)}),r(`tracks`,`Tracks`,`sequence.tracks`,{icon:`chart-gantt`,choice:!0,group:`view`,pressed:a(`tracks`)}),...jt.map(t=>r(Jt(t),Yt(t),Jt(t),{choice:!0,group:`colors`,pressed:e.theme.pipe(v(e=>e.letters===t))})),r(`legend`,`Legend…`,`sequence.legend`,{icon:`palette`,group:`colors`})]}var Kt,G,qt,Jt,Yt;function Xt(){return(Xt=e((()=>{b(),y(),Ut(),W(),Kt=`sequence-legend`,G=e=>({message:e}),qt=[{id:`ruler`,label:`Ruler`,rail:{navigator:`ruler`}},{id:`strip`,label:`Strip`,rail:{navigator:`strip`}},{id:`band`,label:`Band`,rail:{navigator:`band`}},{id:`none`,label:`None`,rail:{navigator:`none`}}],Jt=e=>`sequence.colors.${e===null?`none`:e.replace(`:`,`-`)}`,Yt=e=>e===null?`No colors`:zt(e)?.label??e})))()}function Zt(e){let{legend:t}=e.viewer;return a(`div`,{style:`display: grid; gap: var(--msp-space-4); padding: var(--msp-space-3)`,children:[r(be,{title:t.pipe(v(e=>e.title)),items:t.pipe(v(e=>e.items)),ramps:t.pipe(v(e=>e.ramps))}),r(g,{each:t.pipe(v(e=>e.sections??[])),children:e=>r(be,{title:e.title,items:e.items})})]})}function Qt(){return(Qt=e((()=>{I(),y(),o()})))()}function $t(e){let t=De({title:e.title});t.data.complex({ref:en,provider:`molstar:structure`,source:{host_file:on(e.key),format:e.format},...e.ligands?{options:{ligand_comps:[...e.ligands]}}:{}});let n=t.view({ref:`sequence`,label:e.title}).section({ref:K,style:`compact`}),r=e.theme.letters===null?{}:{color:{theme:`scheme`,params:{name:e.theme.letters}}};if(n.track({ref:`ruler`,label:``}).ruler(),n.track({ref:tn,label:``}).letters(r),e.tracks===!1)return t.getDocument();let i=t.data.computed({ref:`ss`,provider:`molstar:secondary_structure`,options:{of:en}});if(n.track({ref:an,label:``}).secondary({data:i,color:It}),e.predicted){let e=t.data.computed({ref:nn,provider:`molstar:plddt`,options:{of:en}});n.track({ref:rn,label:``,height:2}).values({data:e,encoding:`line`,domain:[0,100],color:Nt})}return t.getDocument()}var en,K,tn,nn,rn,an,on,sn;function cn(){return(cn=e((()=>{ke(),W(),en=`structure`,K=`main`,tn=`letters`,nn=`plddt`,rn=`${nn}-track`,an=`ss-track`,on=e=>`structure:${e}`,sn={letters:`prism:residues`}})))()}function ln(e,t,n){let r=e.seq,i,a,o=()=>{i?.(),a?.detach(),i=a=void 0},s=e.structure.subscribe(e=>{o();let s=r.graph.assembled.value?.set,c=e&&t(e.structure);if(!e||!s||!c)return;a=tt.attach(r.systems,`3d`,e.structure,s,e.complex);let l=nt(r,c,a,n),u=!1,d=r.selection.current.subscribe(e=>{let t=[e.seq,e.aligned,e.columns,e.rows,e.items,e.boundaries].every(e=>{let t=Le(e);return!t||t.items===0&&t.length===0}),n=u&&t;u=!t,n&&un.has(e.origin)&&c.resetCamera?.()});i=()=>{d.unsubscribe(),l()}});return()=>{s.unsubscribe(),o()}}var un;function dn(){return(dn=e((()=>{et(),rt(),Me(),un=new Set([`pointer`,`keyboard`])})))()}function fn(e,t=!1){let n=gn[e.navigator],r=ze.find(e=>e.name===n),i=e.height!==void 0&&r&&!r.parts.onRuler?{...r.parts,height:e.height}:n;return{name:hn,geometry:`linear`,render:{headerWidth:0,gutterLeft:8+(t?28:0),gutterRight:8},navigator:i}}var pn,mn,hn,gn;function _n(){return(_n=e((()=>{Qe(),pn={navigator:`ruler`},mn=`compact`,hn=`prism_tracks`,gn={ruler:`rulerRail`,strip:`strip`,band:`band`,rail:`rail`,none:`none`}})))()}function vn(e,t,n){let r=r=>Math.round(q(e,r)+(q(t,r)-q(e,r))*n);return r(16)<<16|r(8)<<8|r(0)}function yn(e,t){let n=e.theme===`dark`,r=n?qe:Ge,{text:i,accent:a}=bn[e.theme],o=oe(e.color)??(n?1119e3:16777215),s=e=>vn(o,i,e);return{...r,dark:n,surface:J(o),surfaceAlt:J(s(.05)),ink:J(i),inkQuiet:J(vn(i,o,.33)),inkFaint:J(vn(i,o,.7)),grid:J(s(.12)),accent:J(a),hover:J(a,.2),selection:J(a,.25),selectionBorder:J(a,.7),unobserved:J(vn(i,o,.55)),pending:J(s(.1)),grip:J(vn(i,o,.45)),gripHover:J(i),window:J(i,.1),focusRing:J(a),...t?{fontMono:t.mono,fontUi:t.ui}:{}}}var bn,q,J;function xn(){return(xn=e((()=>{I(),He(),bn={light:{text:3353375,accent:11427076},dark:{text:13423840,accent:5350139}},q=(e,t)=>e>>t&255,J=(e,t)=>`rgb(${q(e,16)} ${q(e,8)} ${q(e,0)}${t===void 0?``:` / ${Math.round(t*100)/100}`})`})))()}function Sn(e){let t=new Map,n=D([]);return(r=>{let i=new Dn(r,e);return t.set(r,i),n.set([...t.keys()]),i})(`default`),{get(e=`default`){let n=t.get(e);if(!n)throw Error(`no sequence viewer "${e}"`);return n},ids:n.asReadonly,dispose(){for(let e of t.values())e.dispose();t.clear(),n.set([])}}}var Cn,wn,Tn,En,Dn;function On(){return(On=e((()=>{I(),et(),He(),Ne(),cn(),Ut(),W(),_n(),xn(),Cn={[tn]:[{id:`color-default`,label:`Apply default coloring`,icon:`paintbrush`,coloring:`default`}],[an]:[{id:`color-secondary`,label:`Color by secondary structure`,icon:`paintbrush`,coloring:`secondary`}],[rn]:[{id:`color-plddt`,label:`Color by pLDDT`,icon:`paintbrush`,coloring:`plddt`}]},wn=12,Tn=()=>Ue({requestAnimationFrame:e=>requestAnimationFrame(e),cancelAnimationFrame:e=>cancelAnimationFrame(e),setTimeout:(e,t)=>setTimeout(e,t),clearTimeout:e=>clearTimeout(e),now:()=>performance.now()}),En=e=>e===`tracks`?hn:mn,Dn=class{constructor(e,t){this.id=e,this.deps=t,this.styleState=D(`tracks`),this.themeState=D(sn),this.structureState=D(void 0),this.legendState=D(Bt(sn.letters,!1)),this.style=this.styleState.asReadonly,this.theme=this.themeState.asReadonly,this.structure=this.structureState.asReadonly,this.legend=this.legendState.asReadonly,this.railState=D(pn),this.rail=this.railState.asReadonly,this.builds=0,this.disposed=!1,this.subs=[];let n={load:e=>Promise.reject(Error(`the sequence view loads no files (${e.uri??e.hostFile??`a file`})`)),parsed:async e=>{let n=t.structure.value;return n&&e.hostFile===on(n.key)?{kind:`object`,value:n.source}:null}},r=Be(),i=r.behaviors.map(e=>e.behavior===je.Select?Ve.Behavior(je.Select,{shiftPositions:`toggle`}):e);i.push(Ve.Behavior(Xe.ContextMenu)),this.seq=We({...r,behaviors:i,registry:[Ze,{svs:$e},{svs:At}],render:{wrappedAlign:`center`,wrappedColors:!0,unobservedGray:!0,wrappedMaxWidth:t.textWidth??0,wrappedFontPx:wn,maxLetterPx:wn}},{loaders:n,scheduler:t.scheduler??Tn(),...t.text?{text:t.text}:{}}),this.dropPreset=this.seq.register({presets:[fn(pn,!!this.deps.actions)]}),this.applySkin(t.ink.value),this.subs.push(t.ink.subscribe(e=>{this.applySkin(e),this.refreshLegend()}),t.structure.subscribe(()=>void this.build()))}refreshLegend(){let e=this.deps.ink.value.theme===`dark`,t=Bt(this.themeState.value.letters,e),n=this.deps.structure.value;this.legendState.set(n?Rt(t,!!n.predicted):t)}applySkin(e){this.disposed||this.seq.setSkin(yn(e,this.fonts))}trackActions(e,t){let n=this.deps.actions;if(!n)return[];let r=t?.unapplied?n.coloring?.():void 0;return(Cn[e]??[]).filter(e=>e.coloring!==r).map(e=>({id:e.id,label:e.label,icon:e.icon,run:()=>void n.colorStructure(e.coloring)}))}trackColoring(e){let t=this.deps.actions,n=Cn[e]?.[0];if(!t||!n)return;let r=()=>t.coloring?.()===n.coloring;return{id:n.id,label:n.label,icon:n.icon,coloring:n.coloring,active:r,run:()=>r()||void t.colorStructure(n.coloring)}}setFonts(e){this.fonts=e,e.size&&this.seq.setRenderProps({wrappedFontPx:e.size,maxLetterPx:e.size}),this.applySkin(this.deps.ink.value)}setStyle(e){let t=this.styleState.value;this.styleState.set(e),t!==e&&this.build(),this.seq.ui.setStyle(K,En(e))}setRail(e){let t=this.railState.value;(t.navigator!==e.navigator||t.height!==e.height)&&(this.railState.set(e),this.dropPreset?.(),this.dropPreset=this.seq.register({presets:[fn(e,!!this.deps.actions)]}),this.seq.ui.setStyle(K,null),this.seq.ui.setStyle(K,En(this.styleState.value)))}setTheme(e){e.letters!==this.themeState.value.letters&&(this.themeState.set(e),this.refreshLegend(),this.build())}async build(){let e=this.deps.structure.value,t=++this.builds;if(this.refreshLegend(),!e){this.structureState.set(void 0);return}let n=$t({title:e.title,key:e.key,format:e.source.format,theme:this.themeState.value,predicted:e.predicted,ligands:e.ligands,tracks:this.styleState.value===`tracks`});this.structureState.value&&this.structureState.value.structure!==e.structure&&this.structureState.set(void 0),await this.seq.setDocument(n),!(this.disposed||t!==this.builds)&&(this.seq.ui.setStyle(K,En(this.styleState.value)),this.structureState.set({title:e.title,structure:e.structure,complex:en}))}dispose(){if(!this.disposed){this.disposed=!0,this.builds++,this.dropPreset?.();for(let e of this.subs)e.unsubscribe();this.subs.length=0,this.seq.dispose()}}}})))()}var kn;function An(){return(An=e((()=>{s(),kn={gutter:`msp-viewer-track-gutter-gutter`,icon:`msp-viewer-track-gutter-icon`},c(`viewer/sequence/track-gutter.module.css`,`@layer msp.components {
.msp-viewer-track-gutter-gutter {
  top: var(--msp-space-3);
  pointer-events: none;
  width: 28px;
  position: absolute;
  left: 0;
}

.msp-viewer-track-gutter-icon {
  width: 24px;
  margin-left: var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  opacity: 0;
  pointer-events: none;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;

  &[data-hover], &[data-active] {
    opacity: 1;
    pointer-events: auto;
  }

  &:hover, &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[data-active] {
    color: var(--msp-color-accent);
  }
}
}
`)})))()}function jn(e,t,n){let r=[];for(let i=0;i<e.entryCount;i++){if(e.entryKind[i]!==Pe.track)continue;let a=t(e.entryTrack[i]);if(a===void 0||!n(a))continue;let o=e.entryTop[i]+(i<e.pinnedCount?0:e.scrolledTop);r.push({track:a,top:o,height:e.entryHeight[i]})}return r}function Mn(e,t,n){let i=e.seq,a=r(`div`,{class:kn.gutter});n.append(a);let o=[],s=new Map,c,l,u=()=>{for(let{el:e,coloring:t}of s.values()){let n=t.active();n!==e.hasAttribute(`data-active`)&&e.toggleAttribute(`data-active`,n)}},d=e=>{e!==c&&(c!==void 0&&s.get(c)?.el.removeAttribute(`data-hover`),c=e,e!==void 0&&(s.get(e)?.el.setAttribute(`data-hover`,``),u()))},f=()=>{let t=i.graph.assembled.value,n=i.layout.get(K)?.current,d=t?.view;if(a.replaceChildren(),s.clear(),o=[],c=void 0,l=void 0,n&&d&&e.style.value===`tracks`){o=jn(n,e=>t.set.strings.get(d.resolved.tracks.ref[e]),t=>e.trackColoring(t)!==void 0);for(let t of o){let n=e.trackColoring(t.track),i=n?.icon;if(!n||!i)continue;let o=r(`button`,{type:`button`,class:kn.icon,"aria-label":n.label,"data-tip":n.label,"data-tip-side":`right`,style:`transform: translateY(${t.top}px); height: ${t.height}px`,onClick:()=>{n.run(),setTimeout(u,0),requestAnimationFrame(()=>u())},children:r(k,{name:i,size:16})});s.set(t.track,{el:o,coloring:n}),a.append(o)}u()}},p,m=()=>{p?.(),p=void 0;let e=i.layout.get(K);if(f(),!e)return;let t=e.version.subscribe(f);p=()=>t.unsubscribe()},h=i.viewports.sections.subscribe(m),g=e.style.subscribe(m),_=e.structure.subscribe(m),ee=e=>{for(let t of o)if(e>=t.top&&e<t.top+t.height)return t.track},v=e=>{l??=t.getBoundingClientRect(),d(ee(e.clientY-l.top))},y=()=>{l=void 0,d(void 0)},b=e=>{a.contains(e.relatedTarget)||y()},x=e=>{t.contains(e.relatedTarget)||y()};return t.addEventListener(`pointermove`,v),t.addEventListener(`pointerleave`,b),a.addEventListener(`pointerleave`,x),()=>{p?.(),h.unsubscribe(),g.unsubscribe(),_.unsubscribe(),t.removeEventListener(`pointermove`,v),t.removeEventListener(`pointerleave`,b),a.removeEventListener(`pointerleave`,x),a.remove()}}function Nn(){return(Nn=e((()=>{I(),Fe(),cn(),An(),o()})))()}var Pn;function Fn(){return(Fn=e((()=>{s(),Pn={root:`msp-viewer-sequence-control-root`,surface:`msp-viewer-sequence-control-surface`},c(`viewer/sequence/sequence-control.module.css`,`@layer msp.components {
.msp-viewer-sequence-control-root {
  width: 100%;
  height: var(--msp-dock-size, 100%);
  box-sizing: border-box;
  min-height: 0;
  padding-top: var(--msp-space-3);
  padding-bottom: var(--msp-band-fade, 0px);
  color: var(--msp-color-text);
  pointer-events: none;
  flex-direction: column;
  display: flex;
  position: relative;
}

.msp-viewer-sequence-control-surface {
  contain: layout paint;
  pointer-events: auto;
  flex: 1 1 0;
  min-height: 0;

  &[data-fade] {
    mask-image: linear-gradient(to bottom,
      transparent,
      #000 var(--seq-fade-top, 0px),
      #000 calc(100% - var(--seq-fade-bottom, 0px)),
      transparent);
  }
}

.msp-viewer-sequence-control-surface [data-pass^="vnav"] {
  opacity: 0;
  transition: opacity var(--msp-motion-base) var(--msp-ease);
}

.msp-viewer-sequence-control-surface[data-bars] [data-pass^="vnav"] {
  opacity: 1;
}
}
`)})))()}function In(e){if(!e)return Vn;let t=[e.title];for(let n of e.lines)t.push(n.value?`${n.key}: ${n.value}`:n.key);return t}function Ln(e){let{viewer:i}=e,a=i.seq,o=r(`div`,{class:Pn.surface}),s=Je(a,K,o);n(()=>s.dispose());let c=requestAnimationFrame(()=>{let e=getComputedStyle(o),t=e.getPropertyValue(`--msp-font-mono`).trim(),n=e.getPropertyValue(`--msp-font-sans`).trim(),r=Number.parseFloat(e.getPropertyValue(`--msp-font-size-sm`));t&&n&&i.setFonts({mono:t,ui:n,...r>0?{size:r}:{}})});n(()=>cancelAnimationFrame(c)),e.view3d&&n(ln(i,e.view3d));{let e=Ke.create(),t=new Set([Ie.data,Ie.header,Ie.gutter]),r=n=>{let r=o.getBoundingClientRect();if(!a.layout.hitTest(`main`,n.clientX-r.left,n.clientY-r.top,e)||e.track<0||!t.has(e.region))return;let i=a.graph.assembled.value;return i?.view?i.set.strings.get(i.view.resolved.tracks.ref[e.track]):void 0},s=e=>{let t=r(e);t!==void 0&&i.trackActions(t).length>0&&e.preventDefault()};o.addEventListener(`contextmenu`,s);let c,l=a.events.menu.subscribe(e=>{let t=i.trackActions(e.track);if(t.length===0)return;let n=o.getBoundingClientRect(),r=e.x!==void 0&&e.x>=0?{x:n.left+e.x,y:n.top+(e.y??0)}:{x:n.left+24,y:n.top+24};c?.();let a=o.closest(`.msp-root`)??document.body;c=pe(a,r,t.map(e=>({id:e.id,label:e.label,icon:e.icon,run:e.run})))});n(()=>{o.removeEventListener(`contextmenu`,s),l.unsubscribe(),c?.()})}if(e.onHover){let t=e.onHover,r=null,i=Vn,s=0,c=()=>{s=0;let e=In(r);Hn(e,i)||(i=e,t(e))},l=a.labels.current.subscribe(e=>{r=e,s||=requestAnimationFrame(c)}),u=()=>{r=null,s||=requestAnimationFrame(c)};o.addEventListener(`pointerleave`,u),n(()=>{l.unsubscribe(),o.removeEventListener(`pointerleave`,u),s&&cancelAnimationFrame(s),i.length>0&&t(Vn)})}{let e=!1,t=!1,r,s=(n,r)=>{(n!==e||r!==t)&&(n!==e&&o.style.setProperty(`--seq-fade-top`,n?`${Bn}px`:`0px`),r!==t&&o.style.setProperty(`--seq-fade-bottom`,r?`${Bn}px`:`0px`),[e,t]=[n,r],n||r?o.dataset.fade=``:delete o.dataset.fade)},c=()=>{r?.(),r=void 0;let e=a.viewports.get(K),t=a.layout.get(K);if(!e||!t)return s(!1,!1);let n=e.live.version.subscribe(()=>{let n=e.live.current,r=i.style.value===`compact`,a=n.contentHeight-n.scrollY-(n.height-t.current.scrolledTop);s(r&&n.scrollY>.5,r&&a>.5)});r=()=>n.unsubscribe()},l=a.viewports.sections.subscribe(c),u=i.style.subscribe(c);n(()=>{l.unsubscribe(),u.unsubscribe(),r?.()})}{let e=!1,t=!1,r=!1,i=0,s,c=()=>{let n=e||t||r;n!==o.hasAttribute(`data-bars`)&&o.toggleAttribute(`data-bars`,n)},l=()=>{s=void 0;let e=zn-(performance.now()-i);e>0?s=setTimeout(l,e):(r=!1,c())},u=()=>(e=!0,c()),d=()=>(e=!1,c());o.addEventListener(`pointerenter`,u),o.addEventListener(`pointerleave`,d);let f=a.ui.drag.subscribe(e=>(t=e!==null,c())),p=0,m,h=a.viewports.sections.subscribe(()=>{m?.(),m=void 0;let e=a.viewports.get(K);if(!e)return;let t=e.live.version.subscribe(()=>{let t=e.live.current.scrollY;t!==p&&(p=t,i=performance.now(),r||(r=!0,c()),s===void 0&&(s=setTimeout(l,zn)))});m=()=>t.unsubscribe()});n(()=>{o.removeEventListener(`pointerenter`,u),o.removeEventListener(`pointerleave`,d),f.unsubscribe(),h.unsubscribe(),m?.(),s!==void 0&&clearTimeout(s)})}if(e.shell){let{shell:r}=e,o=e.dock??`top`,s=r.dock(o).state.value.size,c=e.textHeight??80;n(()=>r.setSize(o,s));let l=x([i.style,i.structure]).pipe(C(([e])=>e===`tracks`?a.layout.contentHeight(`main`)??ee(0):ee(0)));t(x([i.style,l]),([e,t])=>{r.setSize(o,(e===`tracks`&&t>0?t:c)+Rn)})}let l=r(`div`,{class:Pn.root,children:o});return n(Mn(i,o,l)),l}var Rn,zn,Bn,Vn,Hn;function Un(){return(Un=e((()=>{I(),Re(),Ye(),b(),h(),te(),cn(),Nn(),dn(),Fn(),o(),Rn=36,zn=500,Bn=18,Vn=[],Hn=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n])})))()}function Wn(){return(Wn=e((()=>{Xt(),Qt(),cn(),dn(),Ut(),On(),W(),xn(),Un()})))()}var Y;function Gn(){return(Gn=e((()=>{s(),Y={chevron:`msp-viewer-sequence-strip-chevron`,choice:`msp-viewer-sequence-strip-choice`,gap:`msp-viewer-sequence-strip-gap`,header:`msp-viewer-sequence-strip-header`,info:`msp-viewer-sequence-strip-info`,popover:`msp-viewer-sequence-strip-popover`,residue:`msp-viewer-sequence-strip-residue`,residues:`msp-viewer-sequence-strip-residues`,residuesContent:`msp-viewer-sequence-strip-residuesContent`,selected:`msp-viewer-sequence-strip-selected`,selector:`msp-viewer-sequence-strip-selector`,spacer:`msp-viewer-sequence-strip-spacer`,strip:`msp-viewer-sequence-strip-strip`,value:`msp-viewer-sequence-strip-value`},c(`viewer/views/sequence/sequence-strip.module.css`,`@layer msp.components {
.msp-viewer-sequence-strip-strip {
  flex-direction: column;
  flex: 1 1 0;
  min-width: 0;
  height: 100%;
  min-height: 0;
  display: flex;
}

.msp-viewer-sequence-strip-header {
  align-items: center;
  gap: var(--msp-space-1);
  height: 26px;
  padding: 0 var(--msp-space-1) 0 var(--msp-space-2);
  display: flex;
}

.msp-viewer-sequence-strip-selector {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  height: 22px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  font-weight: 500;
  display: inline-flex;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[data-strong] {
    color: var(--msp-color-text);
    font-weight: 600;
  }
}

.msp-viewer-sequence-strip-choice {
  min-width: 0;
  display: inline-flex;
  position: relative;
}

.msp-viewer-sequence-strip-value {
  min-width: 0;
  max-width: 220px;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-sequence-strip-chevron {
  color: var(--msp-color-text-subtle);
  flex: none;
}

.msp-viewer-sequence-strip-popover {
  z-index: var(--msp-z-overlay);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-panel);
  min-width: 180px;
  max-width: 320px;
  box-shadow: var(--msp-glass-shadow),
    0 6px 16px #0000001f;
  position: fixed;
}

.msp-viewer-sequence-strip-info {
  color: var(--msp-color-text-muted);
  font-weight: 400;
}

.msp-viewer-sequence-strip-spacer {
  flex: 1;
}

.msp-viewer-sequence-strip-residues {
  flex: 1;
  min-width: 0;
  min-height: 0;
}

.msp-viewer-sequence-strip-residuesContent {
  padding: var(--msp-space-1) var(--msp-space-3);
  font-family: var(--msp-font-mono);
  flex-wrap: wrap;
  align-content: flex-start;
  font-size: 13px;
  line-height: 1;
  display: flex;
}

.msp-viewer-sequence-strip-residue {
  height: 28px;
  padding: 13px 0 var(--msp-space-1);
  text-align: center;
  cursor: pointer;
  user-select: none;
  width: 1ch;
  position: relative;

  &:hover {
    color: var(--msp-color-accent);
    background: var(--msp-color-hover);
  }

  &[data-number]:before {
    content: attr(data-number);
    font-family: var(--msp-font-sans);
    color: var(--msp-color-text-subtle);
    font-size: 9px;
    position: absolute;
    top: 2px;
    left: 0;
  }
}

.msp-viewer-sequence-strip-selected {
  background: color-mix(in oklab, var(--msp-color-accent), transparent 75%);
  color: var(--msp-color-accent-strong);
}

.msp-viewer-sequence-strip-gap {
  width: 1ch;
}
}
`)})))()}function Kn(e){let{chain:t}=e,n=document.createDocumentFragment();for(let e=0;e<t.sequence.length;e++){let r=document.createElement(`span`);r.className=Y.residue,r.textContent=t.sequence[e];let i=t.start+e;r.dataset.seq=String(i),i%10==0&&(r.dataset.number=String(i)),n.appendChild(r)}let o=r(A,{class:Y.residues,contentClass:Y.residuesContent,onPointerOver:t=>{let n=t.target.dataset?.seq;e.onHover?.(n===void 0?void 0:Number(n))},onPointerLeave:()=>e.onHover?.(void 0),onClick:t=>{let n=t.target;if(n.dataset?.seq===void 0)return;let r=n.classList.toggle(Y.selected);e.onToggle?.(Number(n.dataset.seq),r)},children:n});return a(`div`,{class:Y.strip,children:[a(`div`,{class:Y.header,children:[e.selectors?e.selectors.map(e=>e.visible?r(_,{when:e.visible,children:()=>r(qn,{selector:e})}):r(qn,{selector:e})):a(i,{children:[a(`button`,{type:`button`,class:Y.selector,title:`Structure`,children:[t.structure,` `,r(k,{name:`chevron-down`,size:12})]}),a(`button`,{type:`button`,class:Y.selector,title:`Chain`,children:[t.name,t.info?r(`span`,{class:Y.info,children:t.info}):null,r(k,{name:`chevron-down`,size:12})]})]}),r(`span`,{class:Y.spacer}),e.onCollapse?r(P,{variant:`ghost`,size:`sm`,icon:r(k,{name:`chevron-up`}),title:`Hide the sequence`,onClick:()=>e.onCollapse?.()}):null]}),o]})}function qn(e){let{selector:t}=e,n=D(!1),i=D({top:0,left:0}),o=t.value.pipe(v(e=>t.display?.(e)??t.options.find(t=>t[0]===e)?.[1]??e)),s=t.value.pipe(v(e=>`${t.title}: ${t.options.find(t=>t[0]===e)?.[1]??e}`));return a(`span`,{class:Y.choice,children:[a(`button`,{type:`button`,class:Y.selector,"data-strong":t.strong?``:void 0,title:s,"aria-label":t.title,"aria-haspopup":`listbox`,"aria-expanded":n,onClick:e=>{let t=e.currentTarget.getBoundingClientRect();i.set({top:t.bottom+2,left:t.left}),n.set(!n.value)},children:[r(`span`,{class:Y.value,children:o}),r(k,{name:`chevron-down`,size:12,class:Y.chevron})]}),r(_,{when:n,children:()=>r(`div`,{class:Y.popover,style:{top:i.asReadonly.pipe(v(e=>`${e.top}px`)),left:i.asReadonly.pipe(v(e=>`${e.left}px`))},children:r(N,{options:t.options,value:t.value,onPick:e=>{n.set(!1),t.set(e)},onClose:()=>n.set(!1)})})})]})}function Jn(){return(Jn=e((()=>{y(),I(),O(),m(),E(),Gn(),o()})))()}var X;function Yn(){return(Yn=e((()=>{s(),X={action:`msp-viewer-remote-states-panel-action`,caption:`msp-viewer-remote-states-panel-caption`,captionRow:`msp-viewer-remote-states-panel-captionRow`,date:`msp-viewer-remote-states-panel-date`,empty:`msp-viewer-remote-states-panel-empty`,item:`msp-viewer-remote-states-panel-item`,list:`msp-viewer-remote-states-panel-list`,listContent:`msp-viewer-remote-states-panel-listContent`,menu:`msp-viewer-remote-states-panel-menu`,menuItem:`msp-viewer-remote-states-panel-menuItem`,name:`msp-viewer-remote-states-panel-name`,open:`msp-viewer-remote-states-panel-open`,panel:`msp-viewer-remote-states-panel-panel`,row:`msp-viewer-remote-states-panel-row`,server:`msp-viewer-remote-states-panel-server`,spin:`msp-viewer-remote-states-panel-spin`,states:`msp-viewer-remote-states-panel-states`,upload:`msp-viewer-remote-states-panel-upload`},c(`viewer/views/state/remote-states-panel.module.css`,`@layer msp.components {
.msp-viewer-remote-states-panel-panel {
  gap: var(--msp-space-4);
  height: 100%;
  min-height: 0;
  padding: 0 var(--msp-panel-inset) var(--msp-panel-inset);
  font-size: var(--msp-font-size-sm);
  flex-direction: column;
  flex: 1 1 0;
  display: flex;
}

.msp-viewer-remote-states-panel-upload {
  flex: none;
}

.msp-viewer-remote-states-panel-caption {
  padding: var(--msp-space-1) 0;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
  font-weight: 500;
}

.msp-viewer-remote-states-panel-states {
  gap: var(--msp-space-1);
  flex-direction: column;
  flex: 1 1 0;
  min-height: 0;
  display: flex;
}

.msp-viewer-remote-states-panel-captionRow {
  padding: 0 var(--msp-space-1) 0 var(--msp-space-2);
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.msp-viewer-remote-states-panel-list {
  flex: 1 1 0;
  min-height: 0;
}

.msp-viewer-remote-states-panel-listContent {
  grid-template-columns: minmax(0, 1fr);
  align-content: start;
  display: grid;
}

.msp-viewer-remote-states-panel-empty {
  padding: var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
}

.msp-viewer-remote-states-panel-item {
  min-width: 0;
  display: grid;
}

.msp-viewer-remote-states-panel-row {
  border-radius: var(--msp-radius-md);
  align-items: center;
  min-width: 0;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }
}

.msp-viewer-remote-states-panel-open {
  align-items: center;
  gap: var(--msp-space-3);
  min-width: 0;
  height: 28px;
  padding: 0 var(--msp-space-2);
  color: var(--msp-color-text-muted);
  text-align: left;
  flex: 1;
  display: flex;

  &:hover {
    color: var(--msp-color-text);
  }
}

.msp-viewer-remote-states-panel-name {
  min-width: 3ch;
  color: var(--msp-color-text);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 0 auto;
  font-weight: 500;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-remote-states-panel-date {
  min-width: 0;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-remote-states-panel-action {
  width: 22px;
  height: 22px;
  margin-right: var(--msp-space-1);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-muted);
  opacity: 0;
  flex: none;
  place-items: center;
  display: grid;

  .msp-viewer-remote-states-panel-row:hover &, &:focus-visible, &[aria-expanded="true"] {
    opacity: 1;
  }

  &:hover {
    background: var(--msp-color-pressed);
    color: var(--msp-color-text);
  }
}

.msp-viewer-remote-states-panel-menu {
  margin: var(--msp-space-1) var(--msp-space-1) var(--msp-space-1)
    calc(var(--msp-space-2) + var(--msp-icon-md) + var(--msp-space-3));
  padding: var(--msp-space-1);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  display: grid;
}

.msp-viewer-remote-states-panel-menuItem {
  align-items: center;
  gap: var(--msp-space-3);
  height: 26px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-muted);
  text-align: left;
  grid-template-columns: 14px 1fr;
  display: grid;

  &:hover, &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[data-danger] {
    color: var(--msp-color-danger);

    &:hover, &:focus-visible {
      background: color-mix(in oklab, var(--msp-color-danger), transparent 88%);
      color: var(--msp-color-danger);
    }
  }
}

.msp-viewer-remote-states-panel-server {
  align-items: center;
  gap: var(--msp-space-3);
  padding: 0 var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  flex: none;
  grid-template-columns: auto minmax(0, 1fr);
  display: grid;
}

.msp-viewer-remote-states-panel-spin {
  animation: .9s linear infinite msp-viewer-remote-states-panel-spin;
}

@keyframes msp-viewer-remote-states-panel-spin {
  to {
    transform: rotate(360deg);
  }
}
}
`)})))()}function Xn(e){let{model:t}=e,n=new l({name:M.Text(``,{label:`Name`,placeholder:`Untitled`})}),i=t.upload?{id:`upload`,title:`Upload the current state`,icon:`cloud-upload`,form:n,applyLabel:`Upload`,apply:()=>{t.upload?.(n.values.value.name.trim()||`Untitled`),n.reset()}}:void 0;return a(`div`,{class:X.panel,children:[i?r(`section`,{class:X.upload,"aria-label":`Upload`,children:r(Te,{action:i,open:!0})}):null,a(`section`,{class:X.states,"aria-label":`On the server`,children:[a(`div`,{class:X.captionRow,children:[r(`p`,{class:X.caption,children:`On the server`}),r(P,{size:`xs`,variant:`ghost`,title:`Refresh`,icon:r(_,{when:t.loading,fallback:()=>r(k,{name:`refresh-cw`}),children:()=>r(k,{name:`loader-circle`,class:X.spin})}),onClick:()=>t.refresh()})]}),r(A,{class:X.list,contentClass:X.listContent,children:r(g,{each:t.states,fallback:()=>r(`p`,{class:X.empty,children:`No states yet.`}),children:e=>r(Zn,{model:t,state:e})},e=>e.id)})]}),a(`label`,{class:X.server,children:[r(`span`,{children:`Server`}),r(ue,{size:`sm`,"aria-label":`State server URL`,value:t.serverUrl,onSubmit:e=>t.setServerUrl(e)})]})]})}function Zn(e){let{model:t,state:n}=e,i=D(!1),o=!!(t.download||t.remove);return a(`div`,{class:X.item,children:[a(`div`,{class:X.row,children:[a(`button`,{type:`button`,class:X.open,onClick:()=>t.open(n.id),children:[r(`span`,{class:X.name,children:n.label}),r(`span`,{class:X.date,children:n.date})]}),o?r(`button`,{type:`button`,class:X.action,"aria-label":`More`,"aria-expanded":i,onClick:()=>i.set(!i.value),children:r(k,{name:`ellipsis`,size:15})}):null]}),r(_,{when:i,children:()=>a(`div`,{class:X.menu,role:`menu`,children:[t.download?r(`button`,{type:`button`,role:`menuitem`,class:X.menuItem,onClick:()=>{i.set(!1),t.download?.(n.id)},children:r(`span`,{children:`Download`})}):null,t.remove?r(`button`,{type:`button`,role:`menuitem`,class:X.menuItem,"data-danger":``,onClick:()=>{i.set(!1),t.remove?.(n.id)},children:r(`span`,{children:`Remove`})}):null]})})]})}function Qn(){return(Qn=e((()=>{j(),I(),O(),m(),u(),E(),we(),Yn(),o()})))()}var Z;function $n(){return($n=e((()=>{s(),Z={action:`msp-viewer-snapshots-panel-action`,actionLabel:`msp-viewer-snapshots-panel-actionLabel`,actions:`msp-viewer-snapshots-panel-actions`,block:`msp-viewer-snapshots-panel-block`,blockCaption:`msp-viewer-snapshots-panel-blockCaption`,blockContent:`msp-viewer-snapshots-panel-blockContent`,choice:`msp-viewer-snapshots-panel-choice`,choiceHint:`msp-viewer-snapshots-panel-choiceHint`,choiceTitle:`msp-viewer-snapshots-panel-choiceTitle`,description:`msp-viewer-snapshots-panel-description`,descriptionField:`msp-viewer-snapshots-panel-descriptionField`,empty:`msp-viewer-snapshots-panel-empty`,field:`msp-viewer-snapshots-panel-field`,fields:`msp-viewer-snapshots-panel-fields`,grip:`msp-viewer-snapshots-panel-grip`,index:`msp-viewer-snapshots-panel-index`,inspection:`msp-viewer-snapshots-panel-inspection`,inspector:`msp-viewer-snapshots-panel-inspector`,inspectorContent:`msp-viewer-snapshots-panel-inspectorContent`,inspectorEmpty:`msp-viewer-snapshots-panel-inspectorEmpty`,inspectorHeader:`msp-viewer-snapshots-panel-inspectorHeader`,inspectorKind:`msp-viewer-snapshots-panel-inspectorKind`,inspectorTitle:`msp-viewer-snapshots-panel-inspectorTitle`,item:`msp-viewer-snapshots-panel-item`,key:`msp-viewer-snapshots-panel-key`,label:`msp-viewer-snapshots-panel-label`,list:`msp-viewer-snapshots-panel-list`,listContent:`msp-viewer-snapshots-panel-listContent`,menu:`msp-viewer-snapshots-panel-menu`,menuItem:`msp-viewer-snapshots-panel-menuItem`,name:`msp-viewer-snapshots-panel-name`,optionsButton:`msp-viewer-snapshots-panel-optionsButton`,panel:`msp-viewer-snapshots-panel-panel`,row:`msp-viewer-snapshots-panel-row`,rowActions:`msp-viewer-snapshots-panel-rowActions`,slot:`msp-viewer-snapshots-panel-slot`,textarea:`msp-viewer-snapshots-panel-textarea`,thumb:`msp-viewer-snapshots-panel-thumb`},c(`viewer/views/state/snapshots-panel.module.css`,`@layer msp.components {
.msp-viewer-snapshots-panel-panel {
  gap: var(--msp-space-2);
  height: 100%;
  min-height: 0;
  padding: 0 var(--msp-panel-inset) var(--msp-panel-inset);
  font-size: var(--msp-font-size-sm);
  flex-direction: column;
  flex: 1 1 0;
  display: flex;
  container-type: inline-size;
}

.msp-viewer-snapshots-panel-actions {
  gap: var(--msp-space-1);
  flex: none;
  min-width: 0;
  display: flex;
}

@container (width < 280px) {
  .msp-viewer-snapshots-panel-actions > button:has(.msp-viewer-snapshots-panel-actionLabel) {
    width: 24px;
    padding: 0;
  }

  .msp-viewer-snapshots-panel-actionLabel {
    clip-path: inset(50%);
    white-space: nowrap;
    width: 1px;
    height: 1px;
    position: absolute;
    overflow: hidden;
  }
}

.msp-viewer-snapshots-panel-optionsButton {
  margin-left: auto;
  margin-right: var(--msp-space-2);
}

.msp-viewer-snapshots-panel-block {
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-well);
  flex: none;
  max-height: 50%;
}

.msp-viewer-snapshots-panel-blockContent {
  padding: var(--msp-space-2) var(--msp-space-3);
  display: grid;
}

.msp-viewer-snapshots-panel-blockCaption {
  padding: var(--msp-space-1) 0 var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
}

.msp-viewer-snapshots-panel-choice {
  align-items: center;
  gap: var(--msp-space-3);
  min-width: 0;
  height: 30px;
  margin: 0 calc(-1 * var(--msp-space-2));
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  text-align: left;
  display: flex;

  &:hover, &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
    outline: none;
  }
}

.msp-viewer-snapshots-panel-choiceTitle {
  color: var(--msp-color-text);
  flex: none;
  font-weight: 600;
}

.msp-viewer-snapshots-panel-choiceHint {
  min-width: 0;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-snapshots-panel-list {
  flex: 1 1 0;
  min-height: 80px;
}

.msp-viewer-snapshots-panel-listContent {
  grid-template-columns: minmax(0, 1fr);
  align-content: start;
  display: grid;
}

.msp-viewer-snapshots-panel-empty {
  padding: var(--msp-space-3) var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
  line-height: 1.5;

  & strong {
    color: var(--msp-color-text-muted);
    font-weight: 600;
  }
}

.msp-viewer-snapshots-panel-item {
  min-width: 0;
  display: grid;
}

.msp-viewer-snapshots-panel-row {
  align-items: center;
  gap: var(--msp-space-3);
  min-width: 0;
  height: 28px;
  padding: 0 var(--msp-space-1) 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  cursor: default;
  user-select: none;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }

  &[aria-selected="true"] {
    background: var(--msp-color-control);

    & .msp-viewer-snapshots-panel-name {
      color: var(--msp-color-accent);
    }
  }
}

.msp-viewer-snapshots-panel-slot {
  flex: none;
  place-items: center end;
  min-width: 2ch;
  display: grid;

  & > * {
    grid-area: 1 / 1;
  }
}

.msp-viewer-snapshots-panel-grip {
  width: 14px;
  height: 22px;
  color: var(--msp-color-text-subtle);
  cursor: grab;
  touch-action: none;
  opacity: 0;
  place-items: center;
  display: grid;

  &:hover {
    color: var(--msp-color-text);
  }

  .msp-viewer-snapshots-panel-row:hover &, [data-dragging] & {
    opacity: 1;
  }
}

.msp-viewer-snapshots-panel-row:hover .msp-viewer-snapshots-panel-index, [data-dragging] .msp-viewer-snapshots-panel-index {
  visibility: hidden;
}

.msp-viewer-snapshots-panel-item {
  &[data-dragging] {
    opacity: .5;
  }

  &[data-drop="before"] {
    box-shadow: 0 -2px 0 var(--msp-color-text-muted);
  }

  &[data-drop="after"] {
    box-shadow: 0 2px 0 var(--msp-color-text-muted);
  }
}

.msp-viewer-snapshots-panel-index {
  min-width: 2ch;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  text-align: right;
  flex: none;
}

.msp-viewer-snapshots-panel-thumb {
  border-radius: var(--msp-radius-sm);
  width: 22px;
  height: 16px;
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  flex: none;
}

.msp-viewer-snapshots-panel-name {
  min-width: 3ch;
  max-width: 60%;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 0 auto;
  font-weight: 500;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-snapshots-panel-key {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  flex: none;
}

.msp-viewer-snapshots-panel-description {
  min-width: 0;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-snapshots-panel-rowActions {
  flex: none;
  gap: 1px;
  display: flex;
}

.msp-viewer-snapshots-panel-action {
  border-radius: var(--msp-radius-sm);
  width: 22px;
  height: 22px;
  color: var(--msp-color-text-muted);
  opacity: 0;
  place-items: center;
  display: grid;

  .msp-viewer-snapshots-panel-row:hover &, .msp-viewer-snapshots-panel-row:focus-within &, &[aria-expanded="true"] {
    opacity: 1;
  }

  &:hover {
    background: var(--msp-color-pressed);
    color: var(--msp-color-text);
  }
}

.msp-viewer-snapshots-panel-menu {
  margin: var(--msp-space-1) var(--msp-space-1) var(--msp-space-1) calc(var(--msp-space-2) + 2ch + var(--msp-space-3));
  padding: var(--msp-space-1);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  display: grid;
}

.msp-viewer-snapshots-panel-menuItem {
  align-items: center;
  gap: var(--msp-space-3);
  height: 26px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-muted);
  text-align: left;
  grid-template-columns: 14px 1fr;
  display: grid;

  &:hover, &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[data-danger] {
    color: var(--msp-color-danger);
  }

  &[data-danger]:not(:first-child) {
    margin-top: var(--msp-space-1);
    border-radius: 0 0 var(--msp-radius-sm) var(--msp-radius-sm);
    box-shadow: 0 -1px 0 var(--msp-glass-edge);
  }

  &[data-danger] {
    &:hover, &:focus-visible {
      background: color-mix(in oklab, var(--msp-color-danger), transparent 88%);
      color: var(--msp-color-danger);
    }
  }
}

.msp-viewer-snapshots-panel-inspector {
  height: clamp(200px, 45%, 440px);
  margin: 0 calc(-1 * var(--msp-space-2));
  border-top: 1px solid var(--msp-glass-edge);
  flex: none;
}

.msp-viewer-snapshots-panel-inspectorContent {
  min-height: 100%;
  display: grid;
}

.msp-viewer-snapshots-panel-inspectorEmpty {
  padding: var(--msp-space-4);
  color: var(--msp-color-text-subtle);
  text-align: center;
  place-items: center;
  margin: 0;
  display: grid;
}

.msp-viewer-snapshots-panel-inspection {
  align-content: start;
  gap: var(--msp-space-3);
  padding: var(--msp-space-3) var(--msp-space-4);
  display: grid;
}

.msp-viewer-snapshots-panel-inspectorHeader {
  align-items: center;
  gap: var(--msp-space-2);
  min-height: 26px;
  display: flex;
}

.msp-viewer-snapshots-panel-inspectorTitle {
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

.msp-viewer-snapshots-panel-inspectorKind {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-viewer-snapshots-panel-fields {
  gap: var(--msp-space-1);
  display: grid;
}

.msp-viewer-snapshots-panel-field {
  grid-template-columns: var(--msp-label-width) minmax(0, 1fr);
  align-items: center;
  gap: var(--msp-space-3);
  min-height: 24px;
  display: grid;
}

.msp-viewer-snapshots-panel-label {
  color: var(--msp-color-text-muted);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-snapshots-panel-descriptionField {
  gap: var(--msp-space-1);
  padding-top: var(--msp-space-1);
  display: grid;
}

.msp-viewer-snapshots-panel-textarea {
  min-height: 72px;
  padding: var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font: inherit;
  resize: vertical;
  border: 0;
  line-height: 1.45;

  &::placeholder {
    color: var(--msp-color-text-subtle);
  }

  &:hover {
    background: var(--msp-color-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: 1px;
  }
}
}
`)})))()}function er(e){let{model:t}=e,n=D(void 0),i=e=>n.set(n.value===e?void 0:e),o=r(`input`,{type:`file`,accept:`.molx,.molj,.zip,.json`,hidden:!0,onChange:e=>{let n=e.currentTarget.files;n?.length&&t.open([...n]),e.currentTarget.value=``}}),s=t.current.pipe(p()),c,l=e=>n=>it(n,c,e,n=>t.moveTo(e,n));return a(`div`,{class:Z.panel,children:[a(`div`,{class:Z.actions,children:[r(P,{size:`sm`,variant:`ghost`,icon:r(k,{name:`plus`}),onClick:()=>t.add(),children:r(`span`,{class:Z.actionLabel,children:`Add`})}),r(P,{size:`sm`,variant:`ghost`,icon:r(k,{name:`download`}),pressed:n.asReadonly.pipe(v(e=>e===`save`)),onClick:()=>i(`save`),children:r(`span`,{class:Z.actionLabel,children:`Save`})}),r(P,{size:`sm`,variant:`ghost`,icon:r(k,{name:`folder-open`}),onClick:()=>o.click(),children:r(`span`,{class:Z.actionLabel,children:`Open`})}),o,r(P,{size:`sm`,variant:`ghost`,class:Z.optionsButton,icon:r(k,{name:`settings`}),title:`Save options`,pressed:n.asReadonly.pipe(v(e=>e===`options`)),onClick:()=>i(`options`)})]}),r(_,{when:n,reveal:!0,children:e=>e===`save`?a(A,{class:Z.block,contentClass:Z.blockContent,role:`region`,"aria-label":`Save to a file`,children:[r(tr,{icon:`download`,title:`Session`,hint:`.molx · the state with its data`,onClick:()=>{n.set(void 0),t.download(`session`)}}),r(tr,{icon:`download`,title:`State`,hint:`.molj · the description; data loads from its sources`,onClick:()=>{n.set(void 0),t.download(`state`)}})]}):a(A,{class:Z.block,contentClass:Z.blockContent,role:`region`,"aria-label":`Save options`,children:[r(`p`,{class:Z.blockCaption,children:`What a new snapshot includes`}),r(d,{form:t.saveOptions})]})}),r(A,{class:Z.list,contentClass:Z.listContent,role:`listbox`,"aria-label":`Snapshots`,ref:e=>c=e,children:r(g,{each:t.entries,fallback:()=>a(`p`,{class:Z.empty,children:[`No snapshots yet. `,r(`strong`,{children:`Add`}),` saves the current view; saved ones play back in order.`]}),children:(e,n)=>r(nr,{model:t,entry:e,index:n,onGrab:l(e.id),current:s.pipe(v(t=>t===e.id),p())})},e=>e.id)}),r(A,{class:Z.inspector,contentClass:Z.inspectorContent,role:`region`,"aria-label":`Snapshot`,children:r(_,{when:t.entries.pipe(v(e=>e.find(e=>e.id===t.current.value)),p()),fallback:()=>r(`p`,{class:Z.inspectorEmpty,children:`Apply a snapshot to edit its name, key and description.`}),children:e=>r(ir,{model:t,entry:e})})})]})}function tr(e){return a(`button`,{type:`button`,class:Z.choice,onClick:e.onClick,children:[r(`span`,{class:Z.choiceTitle,children:e.title}),r(`span`,{class:Z.choiceHint,children:e.hint})]})}function nr(e){let{model:t,entry:n}=e,i=D(!1),o=n.description?.split(`
`).map(e=>e.replace(/[#*`>-]/g,``).trim()).find(e=>e);return a(`div`,{class:Z.item,"data-id":n.id,children:[a(`div`,{class:Z.row,role:`option`,tabIndex:0,"aria-selected":e.current,onClick:()=>t.apply(n.id),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),t.apply(n.id))},children:[a(`span`,{class:Z.slot,children:[r(`span`,{class:Z.index,children:e.index.pipe(v(e=>`${e+1}`))}),r(`span`,{class:Z.grip,"aria-hidden":`true`,"data-tip":`Drag to reorder`,onPointerDown:e.onGrab,onClick:e=>e.stopPropagation(),children:r(k,{name:`grip-vertical`,size:14})})]}),n.image?r(`span`,{class:Z.thumb,style:{background:n.image}}):null,r(`span`,{class:Z.name,children:n.name}),n.key?a(`span`,{class:Z.key,children:[`#`,n.key]}):null,r(`span`,{class:Z.description,children:o??``}),a(`span`,{class:Z.rowActions,children:[r(`button`,{type:`button`,class:Z.action,"data-tip":`Retake from the current view`,"aria-label":`Retake from the current view`,onClick:e=>{e.stopPropagation(),t.replace(n.id)},children:r(k,{name:`camera`,size:14})}),r(`button`,{type:`button`,class:Z.action,"aria-label":`More`,"aria-expanded":i,onClick:e=>{e.stopPropagation(),i.set(!i.value)},children:r(k,{name:`ellipsis`,size:15})})]})]}),r(_,{when:i,children:()=>a(`div`,{class:Z.menu,role:`menu`,children:[r(rr,{icon:`arrow-up`,label:`Move up`,run:()=>t.move(n.id,-1)}),r(rr,{icon:`arrow-down`,label:`Move down`,run:()=>t.move(n.id,1)}),r(rr,{icon:`trash-2`,label:`Remove`,danger:!0,run:()=>{i.set(!1),t.remove(n.id)}})]})})]})}function rr(e){return r(`button`,{type:`button`,role:`menuitem`,class:Z.menuItem,"data-danger":e.danger?``:void 0,onClick:e.run,children:r(`span`,{children:e.label})})}function ir(e){let{model:t,entry:n}=e,i=t.entryOptions(n.id);return a(`div`,{class:Z.inspection,children:[a(`header`,{class:Z.inspectorHeader,children:[r(`span`,{class:Z.inspectorTitle,children:n.name}),r(`span`,{class:Z.inspectorKind,children:n.timestamp??`snapshot`})]}),a(`div`,{class:Z.fields,children:[a(`label`,{class:Z.field,children:[r(`span`,{class:Z.label,children:`Name`}),r(ue,{size:`sm`,value:n.name,onSubmit:e=>t.update(n.id,{name:e})})]}),a(`label`,{class:Z.field,children:[r(`span`,{class:Z.label,children:`Key`}),r(ue,{size:`sm`,value:n.key??``,placeholder:`Optional, for #links`,onSubmit:e=>t.update(n.id,{key:e||void 0})})]}),a(`label`,{class:Z.descriptionField,children:[r(`span`,{class:Z.label,children:`Description`}),r(`textarea`,{class:Z.textarea,rows:4,placeholder:`Markdown · [title](#key) links to a snapshot`,value:n.description??``,onChange:e=>t.update(n.id,{description:e.currentTarget.value||void 0})})]})]}),i?r(d,{form:i}):null]})}function ar(){return(ar=e((()=>{f(),y(),I(),O(),m(),E(),$n(),o()})))()}function or(e,t){let n=new l(cr),i=D(!1),o=()=>{let e=n.values.value.animation.name;return sr.find(([t])=>t===e)?.[1]??e};e.registerOverlays([{id:`animation`,title:`Animation`,render:w(({ctx:e})=>r(F,{shell:e.shell,slot:`animation`,focus:e.focus}))}]);let s=D(void 0),c=new l({by:M.Select(`dynamics`,[[`dynamics`,`Dynamics (B-factor)`],[`uncertainty`,`Model uncertainty`]])});return e.registerSections([{id:`play`,slot:`animation`,title:`Play`,icon:`play`,order:0,render:w(()=>a(`div`,{style:`display: grid; gap: var(--msp-space-3)`,children:[r(d,{form:n}),r(_,{when:i,fallback:()=>r(R,{icon:`play`,label:`Play`,onReset:()=>n.reset(),onApply:()=>{i.set(!0),t(`Playing: ${o()}`)}}),children:()=>r(R,{icon:`square`,label:`Stop`,onReset:()=>n.reset(),onApply:()=>{i.set(!1),t(`Animation stopped`)}})})]}))},{id:`procedural`,slot:`animation`,title:`Procedural animation`,icon:`orbit`,keywords:[`wiggle`,`dynamics`,`uncertainty`],order:1,render:w(()=>a(`div`,{style:`display: grid; gap: var(--msp-space-3)`,children:[r(d,{form:c}),r(R,{icon:`orbit`,label:`Apply`,info:s.asReadonly.pipe(v(e=>e?`Wiggling by ${e}`:``)),secondary:{icon:`x`,label:`Clear`,onClick:()=>{s.set(void 0),t(`Wiggle cleared`)}},onApply:()=>{let e=c.values.value.by;s.set(e),t(`Wiggle: ${e}`)}})]}))}]),{playing:i.asReadonly}}var sr,cr;function lr(){return(lr=e((()=>{j(),y(),I(),m(),S(),u(),E(),o(),sr=[[`trajectory`,`Animate trajectory`],[`spin`,`Camera spin`],[`rock`,`Camera rock`],[`snapshots`,`State snapshots`],[`unwind`,`Assembly unwind`]],cr={animation:M.MappedStatic(`trajectory`,{trajectory:M.Group({mode:M.Select(`loop`,[[`loop`,`Loop`],[`palindrome`,`Palindrome`],[`once`,`Once`]]),duration:M.Numeric(5,{min:1,max:60,step:.5},{label:`Duration (s)`})}),spin:M.Group({speed:M.Numeric(1,{min:.1,max:5,step:.1},{label:`Speed`}),direction:M.Select(`cw`,[[`cw`,`Clockwise`],[`ccw`,`Counter-clockwise`]])}),rock:M.Group({angle:M.Numeric(15,{min:1,max:90,step:1},{label:`Angle (°)`}),speed:M.Numeric(.3,{min:.05,max:2,step:.05},{label:`Speed`})}),snapshots:M.Group({duration:M.Numeric(2,{min:.5,max:10,step:.5},{label:`Per snapshot (s)`})}),unwind:M.Group({duration:M.Numeric(3,{min:.5,max:10,step:.5},{label:`Duration (s)`})})},{label:`Animation`,isEssential:!0,options:[...sr]})}})))()}function ur(e,t){e.registerOverlays([{id:`canvas-settings`,title:`Canvas`,render:w(({ctx:e})=>r(F,{shell:e.shell,slot:`canvas-settings`,focus:e.focus}))}]);let n=(e,t,n,i,a,o)=>{let s=o??new l(i);return{id:e,slot:`canvas-settings`,title:t,icon:n,order:a,render:w(()=>r(d,{form:s}))}},i=t?new l(fr,dr(t.props.value),{onChange:e=>{t.setBackground(gr(e.color)),t.setTransparent(!!e.transparent)}}):void 0,a=t?.props.subscribe(e=>i?.load(dr(e)));return e.registerSections([n(`background`,`Background`,`palette`,fr,0,i),n(`lighting`,`Lighting & effects`,`lightbulb`,pr,1),n(`camera`,`Camera`,`camera`,mr,2),n(`clipping`,`Clipping & fog`,`scan`,hr,3)]),()=>a?.unsubscribe()}function dr(e){return{color:e.renderer.backgroundColor,transparent:!!e.transparentBackground}}var fr,pr,mr,hr,gr;function _r(){return(_r=e((()=>{j(),I(),S(),u(),o(),fr={color:M.Color(16777215,{isEssential:!0}),transparent:M.Boolean(!1,{label:`Transparent`,isEssential:!0})},pr={style:M.Select(`default`,[[`default`,`Default`],[`plastic`,`Plastic`],[`flat`,`Flat`],[`celshaded`,`Cel-shaded`],[`illustrative`,`Illustrative`]],M.Essential),occlusion:M.MappedStatic(`on`,{on:M.Group({samples:M.Numeric(32,{min:1,max:256,step:1}),multiScale:M.Boolean(!1,{label:`Multi scale`}),radius:M.Numeric(5,{min:0,max:20,step:.1}),bias:M.Numeric(.8,{min:0,max:3,step:.1}),blurKernelSize:M.Numeric(15,{min:1,max:25,step:2},{label:`Blur kernel size`}),blurDepthBias:M.Numeric(.5,{min:0,max:1,step:.01},{label:`Blur depth bias`})}),off:M.EmptyGroup()},{label:`Ambient occlusion`,isEssential:!0}),shadow:M.MappedStatic(`off`,{on:M.Group({steps:M.Numeric(1,{min:1,max:64,step:1}),maxDistance:M.Numeric(3,{min:0,max:256,step:1},{label:`Max distance`}),tolerance:M.Numeric(1,{min:0,max:10,step:.1})}),off:M.EmptyGroup()},{label:`Shadows`,isEssential:!0}),outline:M.MappedStatic(`off`,{on:M.Group({scale:M.Numeric(1,{min:1,max:5,step:1}),threshold:M.Numeric(.33,{min:.01,max:1,step:.01}),color:M.Color(0),includeTransparent:M.Boolean(!0,{label:`Include transparent`})}),off:M.EmptyGroup()},{label:`Outline`,isEssential:!0}),exposure:M.Numeric(1,{min:0,max:3,step:.01})},mr={mode:M.Select(`perspective`,[[`perspective`,`Perspective`],[`orthographic`,`Orthographic`]],M.Essential),fov:M.Numeric(45,{min:10,max:130,step:1},{label:`Field of view`,isEssential:!0}),stereo:M.Boolean(!1,{label:`Stereo`}),helper:M.Boolean(!1,{label:`Axes helper`})},hr={fog:M.Numeric(50,{min:0,max:100,step:1},{label:`Fog intensity`,isEssential:!0}),radius:M.Numeric(100,{min:0,max:99,step:1},{label:`Clip radius`,isEssential:!0}),far:M.Boolean(!0,{label:`Clip far plane`})},gr=e=>`#${(e&16777215).toString(16).padStart(6,`0`)}`})))()}function vr(e){let t=D(void 0);return e.subscribe(e=>t.set(e)),t.asReadonly}function yr(e){let t=new l(br),n=D(!0),r=D({x:.05,y:.05,width:.9,height:.9}),i=D(!1),a=t.values.pipe(v(e=>e.resolution.name===`custom`?[e.resolution.params.width,e.resolution.params.height]:xr[e.resolution.name])),o=x([n.asReadonly,r.asReadonly]).pipe(v(([e,t])=>e?Sr:t));return{preview:vr(t.values.pipe(v(e=>e.transparent?`repeating-conic-gradient(#d8d8de 0 25%, #f2f2f5 0 50%) 0 0 / 12px 12px`:`radial-gradient(ellipse at 50% 45%, #fff 0, #eef0f4 70%)`)).pipe(v(e=>`radial-gradient(circle at 34% 62%, #6aa6d8 0 6%, transparent 6.5%), radial-gradient(circle at 46% 54%, #7a6fd6 0 7%, transparent 7.5%), radial-gradient(circle at 58% 40%, #b46ad0 0 8%, transparent 8.5%), radial-gradient(circle at 68% 52%, #d06a8c 0 6%, transparent 6.5%), ${e}`))),aspect:vr(a.pipe(v(([e,t])=>e/t),p())),autoCrop:n,crop:vr(o),setCrop:e=>{n.set(!1),r.set(e)},size:vr(x([a,o,t.values]).pipe(v(([[e,t],n,r])=>`${Math.round(e*n.width)} × ${Math.round(t*n.height)} px · ${String(r.format.name).toUpperCase()}`))),form:t,busy:i.asReadonly,copy:()=>e(`Copied the image`,`success`),download:()=>{i.set(!0),setTimeout(()=>{i.set(!1),e(`Saved molstar-image.${t.values.value.format.name}`,`success`)},700)}}}var br,xr,Sr;function Cr(){return(Cr=e((()=>{j(),b(),f(),y(),u(),E(),br={resolution:M.MappedStatic(`viewport`,{viewport:M.Group({},{isFlat:!0}),hd:M.Group({},{isFlat:!0}),"full-hd":M.Group({},{isFlat:!0}),"ultra-hd":M.Group({},{isFlat:!0}),"8k-ultra-hd":M.Group({},{isFlat:!0}),custom:M.Group({width:M.Numeric(1920,{min:128,max:8192,step:1}),height:M.Numeric(1080,{min:128,max:8192,step:1})},{isFlat:!0})},{options:[[`viewport`,`Viewport`],[`hd`,`HD (1280 × 720)`],[`full-hd`,`Full HD (1920 × 1080)`],[`ultra-hd`,`Ultra HD (3840 × 2160)`],[`8k-ultra-hd`,`8K (7680 × 4320)`],[`custom`,`Custom`]]}),format:M.MappedStatic(`png`,{png:M.Group({},{isFlat:!0}),jpeg:M.Group({quality:M.Numeric(.9,{min:0,max:1,step:.01})},{isFlat:!0}),webp:M.Group({quality:M.Numeric(.9,{min:0,max:1,step:.01})},{isFlat:!0})},{options:[[`png`,`PNG`],[`jpeg`,`JPEG`],[`webp`,`WebP`]]}),transparent:M.Boolean(!1),axes:M.MappedStatic(`off`,{on:M.Group({location:M.Select(`bottom-left`,[[`bottom-left`,`Bottom left`],[`bottom-right`,`Bottom right`],[`top-left`,`Top left`],[`top-right`,`Top right`]]),scale:M.Numeric(.33,{min:.1,max:2,step:.01}),labels:M.Boolean(!0)},{isFlat:!0}),off:M.Group({},{isFlat:!0})},{cycle:!0,label:`Axes`}),illumination:M.Group({extraIterations:M.Numeric(1,{min:0,max:5,step:1},{label:`Extra iterations`}),targetIterationTimeMs:M.Numeric(300,{min:100,max:3e3,step:10},{label:`Iteration time (ms)`})},{label:`Illumination`})},xr={viewport:[1366,812],hd:[1280,720],"full-hd":[1920,1080],"ultra-hd":[3840,2160],"8k-ultra-hd":[7680,4320]},Sr={x:.17,y:.1,width:.66,height:.8}})))()}var Q;function wr(){return(wr=e((()=>{s(),Q={action:`msp-viewer-measurements-add-action`,add:`msp-viewer-measurements-add-add`,added:`msp-viewer-measurements-add-added`,addedAction:`msp-viewer-measurements-add-addedAction`,addedIcon:`msp-viewer-measurements-add-addedIcon`,addedItem:`msp-viewer-measurements-add-addedItem`,addedRow:`msp-viewer-measurements-add-addedRow`,addedValue:`msp-viewer-measurements-add-addedValue`,caption:`msp-viewer-measurements-add-caption`,chevron:`msp-viewer-measurements-add-chevron`,grip:`msp-viewer-measurements-add-grip`,hint:`msp-viewer-measurements-add-hint`,index:`msp-viewer-measurements-add-index`,kind:`msp-viewer-measurements-add-kind`,kindHint:`msp-viewer-measurements-add-kindHint`,kindTitle:`msp-viewer-measurements-add-kindTitle`,kinds:`msp-viewer-measurements-add-kinds`,more:`msp-viewer-measurements-add-more`,optionsToggle:`msp-viewer-measurements-add-optionsToggle`,point:`msp-viewer-measurements-add-point`,pointActions:`msp-viewer-measurements-add-pointActions`,pointLabel:`msp-viewer-measurements-add-pointLabel`,points:`msp-viewer-measurements-add-points`,slot:`msp-viewer-measurements-add-slot`,style:`msp-viewer-measurements-add-style`},c(`viewer/views/structure/measurements-add.module.css`,`@layer msp.components {
.msp-viewer-measurements-add-add {
  font-size: var(--msp-font-size-sm);
  gap: var(--msp-space-2);
  display: grid;
}

.msp-viewer-measurements-add-caption {
  margin: var(--msp-space-1) 0 0;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-weight: 500;
}

.msp-viewer-measurements-add-points {
  padding: var(--msp-space-1);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-panel);
  display: grid;
}

.msp-viewer-measurements-add-hint, .msp-viewer-measurements-add-more {
  padding: var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
  line-height: 1.45;
}

.msp-viewer-measurements-add-more {
  padding: var(--msp-space-1) var(--msp-space-2);
}

.msp-viewer-measurements-add-point {
  align-items: center;
  gap: var(--msp-space-2);
  height: 26px;
  padding: 0 var(--msp-space-1) 0 var(--msp-space-2);
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }
}

.msp-viewer-measurements-add-slot {
  flex: none;
  place-items: center start;
  min-width: 1.5ch;
  display: grid;

  & > * {
    grid-area: 1 / 1;
  }
}

.msp-viewer-measurements-add-grip {
  height: 22px;
  color: var(--msp-color-text-subtle);
  cursor: grab;
  touch-action: none;
  opacity: 0;
  place-items: center;
  display: grid;

  &:hover {
    color: var(--msp-color-text);
  }

  .msp-viewer-measurements-add-point:hover &, [data-dragging] & {
    opacity: 1;
  }
}

.msp-viewer-measurements-add-point:hover .msp-viewer-measurements-add-index, .msp-viewer-measurements-add-point[data-dragging] .msp-viewer-measurements-add-index {
  visibility: hidden;
}

.msp-viewer-measurements-add-point[data-dragging] {
  opacity: .5;
}

.msp-viewer-measurements-add-point[data-drop="before"] {
  box-shadow: 0 -2px 0 var(--msp-color-text-muted);
}

.msp-viewer-measurements-add-point[data-drop="after"] {
  box-shadow: 0 2px 0 var(--msp-color-text-muted);
}

.msp-viewer-measurements-add-index {
  min-width: 1.5ch;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  flex: none;
}

.msp-viewer-measurements-add-pointLabel {
  min-width: 0;
  color: var(--msp-color-text);
  text-align: left;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  font-weight: 500;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-measurements-add-pointActions {
  flex: none;
  gap: 1px;
  display: flex;
}

.msp-viewer-measurements-add-action {
  border-radius: var(--msp-radius-sm);
  width: 20px;
  height: 20px;
  color: var(--msp-color-text-muted);
  opacity: 0;
  place-items: center;
  display: grid;

  .msp-viewer-measurements-add-point:hover &, &:focus-visible {
    opacity: 1;
  }

  &:hover {
    background: var(--msp-color-pressed);
    color: var(--msp-color-text);
  }
}

.msp-viewer-measurements-add-kinds {
  display: grid;
}

.msp-viewer-measurements-add-kind {
  align-items: center;
  gap: var(--msp-space-3);
  height: 28px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  text-align: left;
  display: flex;

  &:hover:not(:disabled) {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &:disabled {
    color: var(--msp-color-text-subtle);
    cursor: default;

    & .msp-viewer-measurements-add-kindTitle {
      color: var(--msp-color-text-subtle);
    }
  }
}

.msp-viewer-measurements-add-kindTitle {
  color: var(--msp-color-text);
  flex: none;
  font-weight: 500;
}

.msp-viewer-measurements-add-kindHint {
  min-width: 0;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  text-align: right;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-measurements-add-optionsToggle {
  align-items: center;
  gap: var(--msp-space-1);
  height: 28px;
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  font-weight: 600;
  display: flex;
}

.msp-viewer-measurements-add-chevron {
  transition: transform var(--msp-motion-fast) var(--msp-ease);

  [aria-expanded="true"] > & {
    transform: rotate(90deg);
  }
}

.msp-viewer-measurements-add-added {
  padding: var(--msp-space-1);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-panel);
  display: grid;
}

.msp-viewer-measurements-add-addedItem {
  display: grid;
}

.msp-viewer-measurements-add-addedRow {
  align-items: center;
  gap: var(--msp-space-2);
  height: 26px;
  padding: 0 var(--msp-space-1) 0 var(--msp-space-2);
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  &[data-hidden] .msp-viewer-measurements-add-pointLabel, &[data-hidden] .msp-viewer-measurements-add-addedIcon {
    color: var(--msp-color-text-subtle);
  }
}

.msp-viewer-measurements-add-addedIcon {
  color: var(--msp-color-text-muted);
  flex: none;
}

.msp-viewer-measurements-add-addedValue {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  flex: none;
}

.msp-viewer-measurements-add-addedAction {
  border-radius: var(--msp-radius-sm);
  width: 20px;
  height: 20px;
  color: var(--msp-color-text-muted);
  opacity: 0;
  place-items: center;
  display: grid;

  .msp-viewer-measurements-add-addedRow:hover &, [data-hidden] > .msp-viewer-measurements-add-pointActions > &:first-child, &[aria-expanded="true"], &:focus-visible {
    opacity: 1;
  }

  &:hover {
    background: var(--msp-color-pressed);
    color: var(--msp-color-text);
  }
}

.msp-viewer-measurements-add-style {
  margin: var(--msp-space-1) 0 var(--msp-space-1) calc(var(--msp-space-2) + var(--msp-icon-md) + var(--msp-space-2));
  padding: var(--msp-space-1) var(--msp-space-2) var(--msp-space-1) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-well);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
}
}
`)})))()}function Tr(e){let{model:t}=e,n=t.points.pipe(v(e=>e.slice(0,kr))),o=t.points.pipe(v(e=>Math.max(0,e.length-kr)),p()),s=D(!1),c;return a(`div`,{class:Q.add,children:[r(`p`,{class:Q.caption,children:`Points · the latest selections`}),a(`div`,{class:Q.points,ref:e=>c=e,children:[r(g,{each:n,fallback:()=>r(`p`,{class:Q.hint,children:`Select atoms or residues (Select mode, Shift adds): the latest ones become the points to measure.`}),children:(e,n)=>r(Er,{model:t,point:e,index:n,onGrab:n=>it(n,c,e.id,n=>t.movePointTo(e.id,n))})},e=>e.id),r(_,{when:o.pipe(v(e=>e>0)),children:()=>r(`p`,{class:Q.more,children:o.pipe(v(e=>`+${e} older, not used`))})})]}),r(`p`,{class:Q.caption,children:`Measure`}),r(`div`,{class:Q.kinds,children:t.kinds.map(e=>r(Dr,{model:t,kind:e}))}),r(_,{when:t.added.pipe(v(e=>e.length>0)),children:()=>a(i,{children:[r(`p`,{class:Q.caption,children:`Added`}),r(`div`,{class:Q.added,children:r(g,{each:t.added,children:e=>r(Or,{model:t,node:e})},e=>e.id)})]})}),a(`button`,{type:`button`,class:Q.optionsToggle,"aria-expanded":s,onClick:()=>s.set(!s.value),children:[r(k,{name:`chevron-right`,size:14,class:Q.chevron}),`Options`]}),r(_,{when:s,children:()=>r(d,{form:t.options})})]})}function Er(e){let{model:t,point:n}=e;return a(`div`,{class:Q.point,"data-id":n.id,onPointerEnter:()=>t.highlightPoint?.(n.id),onPointerLeave:()=>t.highlightPoint?.(void 0),children:[a(`span`,{class:Q.slot,children:[r(`span`,{class:Q.index,children:e.index.pipe(v(e=>`${e+1}`))}),r(`span`,{class:Q.grip,"aria-hidden":`true`,"data-tip":`Drag to reorder`,onPointerDown:e.onGrab,children:r(k,{name:`grip-vertical`,size:13})})]}),r(`button`,{type:`button`,class:Q.pointLabel,title:`Focus`,onClick:()=>t.focusPoint(n.id),children:n.label}),a(`span`,{class:Q.pointActions,children:[r(`button`,{type:`button`,class:Q.action,"aria-label":`Move up`,title:`Move up`,onClick:()=>t.movePoint(n.id,-1),children:r(k,{name:`arrow-up`,size:13})}),r(`button`,{type:`button`,class:Q.action,"aria-label":`Move down`,title:`Move down`,onClick:()=>t.movePoint(n.id,1),children:r(k,{name:`arrow-down`,size:13})}),r(`button`,{type:`button`,class:Q.action,"aria-label":`Remove`,title:`Remove`,onClick:()=>t.removePoint(n.id),children:r(k,{name:`x`,size:13})})]})]})}function Dr(e){let{model:t,kind:n}=e,i=t.points.pipe(v(e=>n.points===0?e.length>0:e.length>=n.points),p()),o=n.points===0?i.pipe(v(e=>e?`of the selection`:`needs a selection`)):i.pipe(v(e=>e?n.points===1?`point 1`:`points 1–${n.points}`:`needs ${n.points} points`));return a(`button`,{type:`button`,class:Q.kind,disabled:i.pipe(v(e=>!e)),onClick:()=>t.add(n.id),children:[r(`span`,{class:Q.kindTitle,children:n.title}),r(`span`,{class:Q.kindHint,children:o})]})}function Or(e){let{model:t,node:n}=e,i=D(!1),o=t.styleOf(n);return a(`div`,{class:Q.addedItem,children:[a(`div`,{class:Q.addedRow,"data-hidden":n.isHidden.pipe(v(e=>e?``:void 0)),children:[r(`span`,{class:Q.pointLabel,children:n.label}),r(`span`,{class:Q.addedValue,children:n.description}),a(`span`,{class:Q.pointActions,children:[r(`button`,{type:`button`,class:Q.addedAction,title:n.isHidden.pipe(v(e=>e?`Show`:`Hide`)),onClick:()=>n.toggleVisibility(),children:r(_,{when:n.isHidden,fallback:()=>r(k,{name:`eye`,size:14}),children:()=>r(k,{name:`eye-off`,size:14})})}),o?r(`button`,{type:`button`,class:Q.addedAction,title:`Style`,"aria-label":`Style`,"aria-expanded":i,onClick:()=>i.set(!i.value),children:r(k,{name:`sliders-horizontal`,size:14})}):null,r(`button`,{type:`button`,class:Q.addedAction,title:`Remove`,"aria-label":`Remove`,onClick:()=>n.remove(),children:r(k,{name:`x`,size:13})})]})]}),o?r(_,{when:i,reveal:!0,children:()=>r(`div`,{class:Q.style,children:r(d,{form:o})})}):null]})}var kr;function Ar(){return(Ar=e((()=>{f(),y(),O(),I(),m(),E(),wr(),o(),kr=4})))()}function jr(e,t){let n=D([{id:`p1`,label:`CYS 442 SG`},{id:`p2`,label:`HEM 508 FE`},{id:`p3`,label:`ARG 105 NH1`}]),r=(e,t)=>e.slice(0,t).map(e=>e.label).join(` – `);return{points:n.asReadonly,movePoint:(e,t)=>{let r=[...n.value],i=r.findIndex(t=>t.id===e),a=i+t;i<0||a<0||a>=r.length||([r[i],r[a]]=[r[a],r[i]],n.set(r))},movePointTo:(e,t)=>{let r=n.value.find(t=>t.id===e);if(!r)return;let i=n.value.filter(t=>t.id!==e);i.splice(Math.max(0,Math.min(i.length,t)),0,r),n.set(i)},removePoint:e=>n.set(n.value.filter(t=>t.id!==e)),focusPoint:e=>t(`Focused on ${n.value.find(t=>t.id===e)?.label}`),kinds:Nr,add:i=>{let a=Nr.find(e=>e.id===i),o=n.value,s=a.points===0?`Selection`:r(o,a.points);e.addMeasurement(a.points===0?`${a.title} · selection`:s,a.points===0?Pr[i]:`${a.title}${Pr[i]?` · ${Pr[i]}`:``}`,a.icon),t(`Added ${a.title.toLowerCase()}: ${s}`)},added:e.measurements,styleOf:t=>e.measurementStyle(t),options:new l({distanceUnitLabel:M.Text(`Å`,{label:`Distance unit`}),textColor:M.Color(0,{label:`Text color`}),textSize:M.Numeric(.5,{min:.1,max:5,step:.1},{label:`Text size`})})}}function Mr(e,t){e.registerSections([{id:`measure`,slot:`selection`,title:`Measure`,icon:`ruler`,keywords:[`distance`,`angle`,`dihedral`,`label`,`orientation`,`plane`],order:2,render:w(()=>r(Tr,{model:t}))}])}var Nr,Pr;function Fr(){return(Fr=e((()=>{j(),S(),u(),E(),Ar(),o(),Nr=[{id:`distance`,title:`Distance`,icon:`measure-distance`,points:2},{id:`angle`,title:`Angle`,icon:`measure-angle`,points:3},{id:`dihedral`,title:`Dihedral`,icon:`measure-angle`,points:4},{id:`label`,title:`Label`,icon:`tag`,points:1},{id:`orientation`,title:`Orientation`,icon:`move-3d`,points:0},{id:`plane`,title:`Plane`,icon:`square`,points:0}],Pr={distance:`2.31 Å`,angle:`104.2°`,dihedral:`−62.8°`,label:``,orientation:`principal axes`,plane:`best fit`}})))()}function Ir(e,t){let n=D(`12 residues`),i=new l(Lr),o=new l({label:M.Text(`Selection`,{label:`Label`,isEssential:!0}),representation:M.Select(`ball-and-stick`,[[`cartoon`,`Cartoon`],[`ball-and-stick`,`Ball & Stick`],[`spacefill`,`Spacefill`],[`molecular-surface`,`Molecular Surface`]],{label:`Representation`,isEssential:!0})});return e.registerTabs([{id:`selection`,title:`Selection`,icon:`mouse-pointer-click`,order:1.2,render:w(({ctx:e})=>r(F,{shell:e.shell,slot:`selection`,focus:e.focus,collapsed:!0}))}]),e.registerSections([{id:`theme`,slot:`selection`,title:`Color, transparency, material…`,icon:`palette`,order:0,render:w(()=>a(`div`,{style:`display: grid; gap: var(--msp-space-3)`,children:[r(d,{form:i}),r(R,{icon:`paintbrush`,label:`Apply`,onReset:()=>i.reset(),onApply:()=>{let e=i.values.value;t(`Applied ${e.action.name} to ${n.value} (${e.representation})`)}})]}))},{id:`component`,slot:`selection`,title:`Create component`,icon:`layers`,order:1,render:w(()=>a(`div`,{style:`display: grid; gap: var(--msp-space-3)`,children:[r(d,{form:o}),r(R,{icon:`plus`,label:`Create`,onReset:()=>o.reset(),onApply:()=>t(`Component "${o.values.value.label}" from ${n.value}`)})]}))}]),{summary:n.asReadonly,actions:[{id:`edit`,label:`Color, theme, component…`,icon:`paintbrush`,run:()=>e.show(`selection`)},{id:`measure`,label:`Measure…`,icon:`ruler`,run:()=>e.show(`selection`,`measure`)},{id:`focus`,label:`Focus`,icon:`focus`,run:()=>t(`Focused on ${n.value}`)}],clear:()=>n.set(void 0)}}var Lr;function Rr(){return(Rr=e((()=>{j(),I(),S(),u(),E(),o(),Lr={action:M.MappedStatic(`color`,{color:M.Group({color:M.Color(37119,{isEssential:!0})}),"reset-color":M.EmptyGroup(),transparency:M.Group({value:M.Numeric(.5,{min:0,max:1,step:.01},{isEssential:!0})}),emissive:M.Group({value:M.Numeric(.5,{min:0,max:1,step:.01},{isEssential:!0})}),material:M.Group({metalness:M.Numeric(0,{min:0,max:1,step:.01},{isEssential:!0}),roughness:M.Numeric(1,{min:0,max:1,step:.01},{isEssential:!0})}),"reset-material":M.EmptyGroup(),clipping:M.Group({groups:M.Select(`1`,[[`1`,`Group 1`],[`2`,`Group 2`],[`3`,`Group 3`]])}),wiggle:M.Group({amplitude:M.Numeric(1,{min:0,max:5,step:.1},{isEssential:!0})})},{label:`Action`,isEssential:!0,options:[[`color`,`Color`],[`reset-color`,`Reset color`],[`transparency`,`Transparency`],[`emissive`,`Emissive`],[`material`,`Material`],[`reset-material`,`Reset material`],[`clipping`,`Clipping`],[`wiggle`,`Wiggle`]]}),representation:M.Select(`all`,[[`all`,`All`],[`cartoon`,`Cartoon`],[`ball-and-stick`,`Ball & Stick`],[`molecular-surface`,`Molecular Surface`]],{label:`Representations`,isEssential:!0})}})))()}function zr(e,t={}){let n=1,r=(e,r={})=>{let i=`s${n}`,a=t.images?Ur[(n-1)%Ur.length]:void 0;return n++,{id:i,name:e,image:a,timestamp:`today`,...r}},i=t.empty?[]:t.count?Array.from({length:t.count},(e,t)=>r([`Overview`,`Active site`,`Heme pocket`,`Substrate channel`,`Surface`][t%5]+` ${t+1}`,{description:t%2?`Step ${t+1} of the tour.`:void 0})):[r(`Overview`,{key:`overview`,description:`Cytochrome **P450 3A4** with its heme cofactor.

See the [active site](#active-site).`,timestamp:`9:05`}),r(`Active site`,{key:`active-site`,description:"### Active site\n- Heme iron coordinated by `Cys442`",timestamp:`9:07`}),r(`Surface`,{timestamp:`9:12`})],a=D(i),o=D(i[1]?.id),s=new Map,c=(e,t)=>a.set(a.value.map(n=>n.id===e?{...n,...t}:n)),u=e=>a.value.find(t=>t.id===e)?.name;return{entries:a.asReadonly,current:o.asReadonly,saveOptions:new l(Vr),entryOptions:e=>{if(!a.value.some(t=>t.id===e))return;let t=s.get(e);return t||s.set(e,t=new l(Hr)),t},add:t=>{let n=r(t??`Snapshot ${a.value.length+1}`,{timestamp:`just now`});a.set([...a.value,n]),o.set(n.id),e(`Saved snapshot “${n.name}”`,`success`)},apply:t=>{o.set(t),e(`Applied “${u(t)}”`)},update:(e,t)=>c(e,t),replace:t=>{c(t,{timestamp:`just now`}),e(`Replaced “${u(t)}” with the current view`,`success`)},move:(e,t)=>{let n=[...a.value],r=n.findIndex(t=>t.id===e),i=r+t;r<0||i<0||i>=n.length||([n[r],n[i]]=[n[i],n[r]],a.set(n))},moveTo:(e,t)=>{let n=a.value.filter(t=>t.id!==e),r=a.value.find(t=>t.id===e);r&&(n.splice(Math.max(0,Math.min(n.length,t)),0,r),a.set(n))},remove:t=>{e(`Removed “${u(t)}”`),a.set(a.value.filter(e=>e.id!==t)),o.value===t&&o.set(void 0)},clear:()=>{a.set([]),o.set(void 0)},download:t=>e(t===`session`?`Saved state.molx`:`Saved state.molj`,`success`),open:t=>e(`Opening ${t.map(e=>e.name).join(`, `)}…`)}}var Br,Vr,Hr,Ur;function Wr(){return(Wr=e((()=>{j(),u(),E(),Br=M.MappedStatic(`animate`,{animate:M.Group({durationInMs:M.Numeric(250,{min:100,max:5e3,step:50},{label:`Duration (ms)`}),easing:M.Select(`linear`,[[`linear`,`Linear`],[`ease-in-out`,`Ease in-out`],[`ease-out`,`Ease out`]])},{isFlat:!0}),instant:M.Group({},{isFlat:!0})},{label:`Camera`,options:[[`animate`,`Animate`],[`instant`,`Instant`]]}),Vr={durationInMs:M.Numeric(1500,{min:100,max:15e3,step:100},{label:`Show for (ms)`}),data:M.Boolean(!0,{label:`Data`}),camera:M.Boolean(!0,{label:`Camera`}),cameraTransition:Br,canvas3d:M.Boolean(!0,{label:`Canvas settings`}),componentManager:M.Boolean(!0,{label:`Component options`}),structureSelection:M.Boolean(!1,{label:`Selection`}),animation:M.Boolean(!0,{label:`Animation`}),startAnimation:M.Boolean(!1,{label:`Start animation`}),behavior:M.Boolean(!1,{label:`Behaviors`}),interactivity:M.Boolean(!0,{label:`Interactivity`}),image:M.Boolean(!1,{label:`Thumbnail`,description:`Save a small image with each snapshot.`})},Hr={durationInMs:M.Numeric(1500,{min:100,max:15e3,step:100},{label:`Show for (ms)`}),cameraTransition:Br},Ur=[`radial-gradient(circle at 40% 55%, #8f6fd6 0 22%, #cfd4e6 23%)`,`radial-gradient(circle at 55% 45%, #d06a8c 0 18%, #6c7ad6 19% 30%, #d9dbe6 31%)`,`radial-gradient(circle at 50% 50%, #5ea3d6 0 30%, #e1e3ea 31%)`]})))()}function Gr(e,t,n,r,i){return{id:e,title:`Update ${t}`,icon:`pencil`,form:new l(n),applyLabel:`Update`,apply:()=>i(`Updated ${r}`)}}function Kr(e,t,n,r,i,a){return{id:e,title:t,icon:n,form:new l(r),applyLabel:i,apply:()=>a(`${t}: applied`)}}function qr(e){let t=D(new Set([`water`,`water-bs`])),n=D(new Set),r=e=>e.filter(e=>!n.value.has(e.ref)).map(e=>({...e,visible:e.visible===void 0?void 0:!t.value.has(e.ref),children:e.children?r(e.children):void 0})),i=D(r(Jr)),a=()=>i.set(r(Jr)),o=D(`structure`),s=(e,t=i.value)=>{for(let n of t){if(n.ref===e)return n;let t=n.children&&s(e,n.children);if(t)return t}},c=new Map;return{roots:i.asReadonly,selected:o.asReadonly,select:e=>o.set(e),inspect:t=>{let n=s(t);if(!n)return;let r=c.get(t);if(!r){let i=Yr[n.transform]?.();r={node:n,updates:[...i?[Gr(`update`,n.transform,i,n.label,e)]:[],...(n.decorators??[]).flatMap(t=>{let r=Xr[t]?.();return r?[Gr(`update:${t}`,t,r,`${n.label} · ${t}`,e)]:[]})],actions:Zr[n.transform]?.(e)??[]},c.set(t,r)}return{...r,node:n}},toggleVisible:e=>{let n=new Set(t.value);n.has(e)?n.delete(e):n.add(e),t.set(n),a()},remove:t=>{e(`Removed ${s(t)?.label}`),n.set(new Set([...n.value,t])),o.value===t&&o.set(void 0),a()}}}var Jr,Yr,Xr,Zr;function Qr(){return(Qr=e((()=>{j(),u(),E(),Jr=[{ref:`download`,label:`1tqn.bcif`,description:`PDBe · BinaryCIF`,icon:`download`,transform:`Download`,children:[{ref:`cif`,label:`CIF File`,description:`1 block`,icon:`file-code`,transform:`Parse CIF`,children:[{ref:`trajectory`,label:`Trajectory`,description:`1 model`,icon:`trajectory`,transform:`Trajectory from mmCIF`,children:[{ref:`model`,label:`Model 1`,description:`3,999 atoms`,icon:`box`,transform:`Model from Trajectory`,decorators:[`Custom Model Properties`],children:[{ref:`structure`,label:`Assembly 1`,description:`3,999 elements`,icon:`structure`,transform:`Structure from Model`,decorators:[`Custom Structure Properties`],visible:!0,children:[{ref:`polymer`,label:`Polymer`,description:`3,766 elements`,icon:`layers`,transform:`Structure Component`,visible:!0,children:[{ref:`polymer-cartoon`,label:`Cartoon`,description:`Chain ID`,icon:`cartoon`,transform:`3D Representation`,visible:!0}]},{ref:`ligand`,label:`Ligand`,description:`43 elements`,icon:`layers`,transform:`Structure Component`,visible:!0,children:[{ref:`ligand-bs`,label:`Ball & Stick`,description:`Element`,icon:`ball-and-stick`,transform:`3D Representation`,visible:!0}]},{ref:`water`,label:`Water`,description:`186 elements`,icon:`layers`,transform:`Structure Component`,visible:!1,children:[{ref:`water-bs`,label:`Ball & Stick`,description:`Element`,icon:`ball-and-stick`,transform:`3D Representation`,visible:!1}]}]}]}]}]}]},{ref:`density`,label:`emd_2984.map`,icon:`download`,transform:`Download`,status:`error`,error:`Not found (404)`}],Yr={Download:()=>({url:M.Text(`https://www.ebi.ac.uk/pdbe/entry-files/download/1tqn.bcif`,{label:`URL`}),isBinary:M.Boolean(!0,{label:`Binary`}),label:M.Text(`1tqn.bcif`)}),"Model from Trajectory":()=>({modelIndex:M.Numeric(0,{min:0,max:0,step:1},{label:`Model index`})}),"Structure from Model":()=>({type:M.MappedStatic(`assembly`,{auto:M.Group({},{isFlat:!0}),model:M.Group({},{isFlat:!0}),assembly:M.Group({id:M.Select(`1`,[[`1`,`Assembly 1`]])},{isFlat:!0}),symmetry:M.Group({ijkMin:M.Numeric(-1),ijkMax:M.Numeric(1)},{isFlat:!0})},{label:`Type`,options:[[`auto`,`Auto`],[`model`,`Model`],[`assembly`,`Assembly`],[`symmetry`,`Symmetry`]]})}),"Structure Component":()=>({label:M.Text(`Polymer`),type:M.Select(`static`,[[`static`,`Static`],[`expression`,`Expression`],[`bundle`,`Bundle`]]),nullIfEmpty:M.Boolean(!0,{label:`Empty is none`})}),"3D Representation":()=>({type:M.Select(`cartoon`,[[`cartoon`,`Cartoon`],[`ball-and-stick`,`Ball & Stick`],[`spacefill`,`Spacefill`],[`molecular-surface`,`Molecular Surface`]]),colorTheme:M.Select(`chain-id`,[[`chain-id`,`Chain ID`],[`element-symbol`,`Element`],[`uniform`,`Uniform`],[`secondary-structure`,`Secondary structure`]]),sizeTheme:M.Select(`uniform`,[[`uniform`,`Uniform`],[`physical`,`Physical`]]),alpha:M.Numeric(1,{min:0,max:1,step:.01},{label:`Opacity`})})},Xr={"Custom Model Properties":()=>({autoAttach:M.Boolean(!0,{label:`Auto attach`}),validation:M.Boolean(!1,{label:`wwPDB validation`}),sifts:M.Boolean(!0,{label:`SIFTS mapping`})}),"Custom Structure Properties":()=>({accessibleSurfaceArea:M.Boolean(!1,{label:`Accessible surface area`}),interactions:M.Boolean(!1,{label:`Interactions`}),secondaryStructure:M.Boolean(!0,{label:`Secondary structure`})})},Zr={"Structure from Model":e=>[Kr(`add-component`,`Add Component`,`layers`,{label:M.Text(`Component`),selection:M.Text(`ligand`)},`Add`,e),Kr(`download-density`,`Volume Streaming`,`volume`,{method:M.Select(`em`,[[`em`,`EM`],[`x-ray`,`X-ray`]])},`Enable`,e)],"Structure Component":e=>[Kr(`add-representation`,`Add Representation`,`plus`,{type:M.Select(`ball-and-stick`,[[`cartoon`,`Cartoon`],[`ball-and-stick`,`Ball & Stick`],[`spacefill`,`Spacefill`]])},`Add`,e)],"Trajectory from mmCIF":e=>[Kr(`load-coords`,`Load Coordinates`,`trajectory`,{url:M.Text(``,{label:`URL`})},`Load`,e)]}})))()}var $;function $r(){return($r=e((()=>{s(),$={entries:`msp-viewer-superpose-entries`,entry:`msp-viewer-superpose-entry`,hint:`msp-viewer-superpose-hint`,index:`msp-viewer-superpose-index`,label:`msp-viewer-superpose-label`,role:`msp-viewer-superpose-role`,superpose:`msp-viewer-superpose-superpose`},c(`viewer/views/structure/superpose.module.css`,`@layer msp.components {
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
}
`)})))()}function ei(e){let{model:t}=e;return a(`div`,{class:$.superpose,children:[r(d,{form:t.form}),r(`div`,{class:$.entries,children:r(g,{each:t.entries,fallback:()=>r(`p`,{class:$.hint,children:t.hint}),children:(e,n)=>a(`button`,{type:`button`,class:$.entry,title:`Focus`,onClick:()=>t.focus(e.id),children:[r(`span`,{class:$.index,children:n.pipe(v(e=>`${e+1}`))}),r(`span`,{class:$.label,children:e.label}),n.value===0?r(`span`,{class:$.role,children:`reference`}):null]})},e=>e.id)}),r(R,{icon:`superpose`,label:`Superpose`,disabled:t.ready.pipe(v(e=>!e)),onReset:()=>t.form.reset(),onApply:()=>t.superpose()})]})}function ti(){return(ti=e((()=>{y(),I(),m(),$r(),o()})))()}function ni(e,t){let n=D(t);return e.subscribe(e=>n.set(e)),n.asReadonly}function ri(e,t){let n=new l(oi),r=e.roots.pipe(v(e=>e.filter(e=>e.kind===`structure`))),i=n.values.pipe(v(e=>e.method)),a={chains:[{id:`c1`,label:`1TQN · Chain A`},{id:`c2`,label:`1W0E · Chain A`}],"tm-align":[{id:`t1`,label:`1TQN · Chain A`},{id:`t2`,label:`1W0E · Chain A`}],ligands:[{id:`l1`,label:`1TQN · HEM 508`}],atoms:[]},o=x([i,r]).pipe(v(([e,t])=>e===`uniprot`?t.map(e=>({id:e.id,label:`${e.label.value} · all chains`})):a[e]??[])),s=x([i,o]).pipe(v(([e,t])=>e===`atoms`?t.length>=1:t.length>=2)),c=x([i,o]).pipe(v(([e,t])=>t.length===1?`${si[e]??``} One so far.`:si[e]??``));return{available:ni(r.pipe(v(e=>e.length)).pipe(v(e=>e>1)),!1),form:n,entries:ni(o,[]),ready:ni(s,!1),hint:ni(c,``),focus:e=>t(`Focused on ${Object.values(a).flat().find(t=>t.id===e)?.label??e}`),superpose:()=>t(`Superposed by ${n.values.value.method} · RMSD 0.38 Å`)}}function ii(e,t){e.registerSections([{id:`superpose`,slot:`selection`,title:`Superpose`,icon:`superpose`,keywords:[`superposition`,`align`,`tm-align`,`rmsd`,`uniprot`,`sifts`],order:3,when:()=>t.available.value,render:w(()=>r(ei,{model:t}))}])}var ai,oi,si;function ci(){return(ci=e((()=>{j(),b(),y(),S(),u(),E(),ti(),o(),ai=e=>e.method!==`chains`&&e.method!==`uniprot`,oi={method:M.Select(`chains`,[[`chains`,`Chains`],[`tm-align`,`TM-align`],[`uniprot`,`UniProt (SIFTS)`],[`ligands`,`Ligands`],[`atoms`,`Atoms`]],{isEssential:!0,description:`What the structures are superposed by.`}),alignSequences:M.Boolean(!0,{label:`Align sequences`,isEssential:!0,description:`Guide the superposition by a sequence alignment of the chains.`,hideIf:e=>e.method!==`chains`}),traceOnly:M.Boolean(!0,{label:`Trace only`,isEssential:!0,description:`Use only CA (and equivalent) atoms.`,hideIf:ai})},si={chains:`Select one chain (or residues within it) in each of two or more structures.`,"tm-align":`Select one chain in each of two or more structures; best when sequence identity is low.`,ligands:`Select one ligand in each of two or more structures.`,atoms:`Select the same atoms, in the same order, in each structure.`}})))()}function li(e,t){let n=yr((e,n)=>t.post(e,n)),i=D(void 0),o=`display: grid; gap: var(--msp-space-3)`,s=new l({kind:M.Select(`session`,[[`session`,`Session (.molx) · with data`],[`state`,`State (.molj) · description only`]])}),c=new l({animation:M.Select(`spin`,[[`spin`,`Camera spin`],[`rock`,`Camera rock`],[`snapshots`,`State snapshots`]]),resolution:M.Select(`full-hd`,[[`hd`,`HD (1280 × 720)`],[`full-hd`,`Full HD (1920 × 1080)`],[`ultra-hd`,`Ultra HD (3840 × 2160)`]]),transparent:M.Boolean(!1)}),u=new l({format:M.Select(`glb`,[[`glb`,`GLB (glTF binary)`],[`stl`,`STL`],[`obj`,`OBJ`],[`usdz`,`USDZ (AR)`]])}),f=new l({format:M.Select(`cif`,[[`cif`,`mmCIF`],[`bcif`,`BinaryCIF`]])});e.registerOverlays([{id:`export`,title:`Export`,render:w(({ctx:e})=>r(F,{shell:e.shell,slot:`export`,focus:e.focus}))}]),e.registerSections([{id:`image`,slot:`export`,title:`Image`,icon:`camera`,order:0,render:w(()=>r(Et,{model:n}))},{id:`session`,slot:`export`,title:`Session & state`,icon:`save`,order:1,render:w(()=>a(`div`,{style:o,children:[r(d,{form:s}),r(R,{icon:`download`,label:`Download`,onApply:()=>t.post(s.values.value.kind===`session`?`Saved state.molx`:`Saved state.molj`,`success`)})]}))},{id:`animation`,slot:`export`,title:`Animation`,icon:`film`,keywords:[`mp4`,`video`,`movie`],order:10,render:w(()=>a(`div`,{style:o,children:[r(d,{form:c}),r(R,{icon:`film`,label:i.asReadonly.pipe(v(e=>e===void 0?`Render`:`Rendering ${Math.round(e*100)}%`)),busy:i.asReadonly.pipe(v(e=>e!==void 0)),onReset:()=>c.reset(),onApply:()=>{let e=0;i.set(0);let n=e=>{clearInterval(o),i.set(void 0),t.setTasks(t.tasks.value.filter(e=>e.id!==`mp4`)),t.post(e,`success`)},r=()=>({id:`mp4`,label:`Rendering animation.mp4`,progress:e,overlay:!0,abort:()=>n(`Rendering cancelled`)}),a=()=>t.setTasks([...t.tasks.value.filter(e=>e.id!==`mp4`),r()]);a();let o=setInterval(()=>{e=Math.min(1,e+.04),i.set(e),a(),e>=1&&n(`Rendered animation.mp4 (6 s)`)},120)}})]}))},{id:`geometry`,slot:`export`,title:`Geometry`,icon:`box`,keywords:[`glb`,`stl`,`obj`,`usdz`,`mesh`,`3d print`,`ar`],order:11,render:w(()=>a(`div`,{style:o,children:[r(d,{form:u}),r(R,{icon:`download`,label:`Download`,onApply:()=>t.post(`Exported scene.${u.values.value.format}`,`success`)})]}))},{id:`models`,slot:`export`,title:`Models`,icon:`file`,keywords:[`mmcif`,`bcif`,`cif`,`coordinates`],order:12,render:w(()=>a(`div`,{style:o,children:[r(d,{form:f}),r(R,{icon:`download`,label:`Download`,onApply:()=>t.post(`Saved 1tqn.${f.values.value.format}`,`success`)})]}))}])}function ui(e){let t=(t,n,r,i,a={})=>{let o=D(r);return{id:t,title:n,options:i,value:o.asReadonly,set:t=>{o.set(t),e(`Sequence: ${n.toLowerCase()} ${i.find(e=>e[0]===t)?.[1]??t}`)},...a}},n=t(`mode`,`Mode`,`single`,[[`single`,`Chain`],[`polymers`,`Polymers`],[`all`,`Everything`]]),r=n.value.pipe(v(e=>e===`single`));return[t(`structure`,`Structure`,`1tqn`,[[`1tqn`,`1TQN | Crystal structure of human microsomal P450 3A4`]],{display:()=>`1TQN`,strong:!0}),n,t(`entity`,`Entity`,`1`,[[`1`,`1: Cytochrome P450 3A4`],[`2`,`2: Protoporphyrin IX containing Fe`],[`3`,`3: Sulfate ion`],[`4`,`4: Water`]],{display:e=>[`Cytochrome P450 3A4`,`Protoporphyrin IX containing Fe`,`Sulfate ion`,`Water`][Number(e)-1],visible:r}),t(`chain`,`Chain`,`A`,[[`A`,`A`]],{display:e=>`Chain ${e}`,visible:r})]}function di(e={}){return{id:`viewer`,title:`Viewer mode`,icon:`molstar`,description:`Load structures and data, explore and analyze them`,activate:({shell:t,status:n,loaded:o,background:s,openCommandMenu:c,modes:l,mode:u,switchMode:d})=>{let f=D(`interact`),p=D(`residue`),m=D(!1),h=D([]),g=D(!o),y=g.asReadonly.pipe(v(e=>!e)),b=ve({preset:e.preset,onHighlight:e=>h.set(e?[e]:[]),onAction:e=>n.post(e),onMeasure:()=>t.show(`selection`,`measure`)});ii(t,ri(b,e=>n.post(e))),Mr(t,jr(b,e=>n.post(e)));let S=D([]),C=e.plugin,te=D([]),re=()=>{let e=[S.value,C?.plugin.hoverLines.value??[],h.value];te.set(e.find(e=>e.length>0)??[])},ie=C?.plugin.error.subscribe(e=>e&&n.post(`Could not load the structure: ${e}`,`error`)),ae=[S.asReadonly,h.asReadonly,...C?[C.plugin.hoverLines]:[]].map(e=>e.subscribe(re)),oe={lines:te.asReadonly},T,E={isEmpty:g.asReadonly,summary:D(e.preset===`many`?`4 structures · CYP3A4, superposed on 1TQN`:e.preset===`em`?`EMD-2984 and 5A1A`:`1TQN · Assembly 1 · 3,624 atoms`).asReadonly,clear:()=>{b.clear(),T?.(),T=void 0,n.setTasks([]),g.set(!0),n.post(`Cleared: nothing loaded`)}},O={...st((e,t)=>n.post(e,t),{remoteStates:e.remoteStates}),session:E},k=zr((e,t)=>n.post(e,t)),A=qr(e=>n.post(e)),j=se(e=>n.post(e)),M=ce(),N=ut(t,()=>b.roots.value.filter(e=>e.kind===`structure`).length);N.register([{id:`session.clear`,title:`Clear session`,alias:[`clear`,`reset`,`remove everything`,`new session`],category:`Data`,icon:`trash-2`,when:()=>!g.value||`Nothing is loaded`,run:()=>(E.clear(),{message:``})}]),t.registerTabs([{id:`home`,compactBar:!0,title:`Home`,heading:()=>r(le,{live:!0}),icon:`prism`,order:0,place:`head`,render:w(()=>r(Ce,{home:O,onOpenCommandMenu:()=>c(),modes:{list:l,active:ee(u),choose:e=>e!==u&&d(e)}}))},{id:`structure`,compactBar:!0,title:`Structure`,icon:`structure`,order:1,render:w(({ctx:e})=>r(ye,{shell:e.shell,scene:b,presets:me(e=>n.post(e)),options:he(),quickStyles:_e(e=>n.post(e)),openCommands:e=>c(e),onAction:e=>n.post(`${e===`preset`?`Apply preset`:e===`styles`?`Styles`:`Add component`}… opens in the command menu`)}))},{id:`snapshots`,title:`Snapshots`,icon:`images`,order:1.5,render:w(()=>r(er,{model:k}))},{id:`state-tree`,title:`State tree`,icon:`list-tree`,order:2,render:w(()=>r(ot,{model:A}))}]);let ue=()=>t.registerTabs([{id:`sequence`,title:`Sequence`,icon:`sequence`,dock:`top`,render:w(({ctx:e})=>r(Kn,{chain:{structure:`1TQN`,name:`Chain A`,info:`Cytochrome P450 3A4`,sequence:fi,start:1},selectors:ui(e=>n.post(e)),onCollapse:()=>e.shell.toggle(e.dock??`top`),onHover:e=>h.set(e===void 0?[]:[`${pi[fi[e-1]]??`?`} ${e}`,`Chain A · 1TQN`]),onToggle:(e,t)=>n.post(`${t?`Selected`:`Deselected`} residue ${e}`)}))}]),P=C?Sn({ink:C.ink,structure:C.plugin.structure,actions:C.plugin.actions}):void 0,de,F;if(C&&P){let e=P.get(),n=t.dock(`top`);F=x([n.state,n.active]).subscribe(([e,t])=>C.plugin.setTopPadding(t?.frame===`none`?e.size-28:0)),N.register(Wt(e,t)),t.registerOverlays([{id:Kt,title:`Sequence colors`,render:w(()=>r(Zt,{viewer:e}))}]);let i=!1;de=C.plugin.structure.subscribe(n=>{n?T||(T=t.registerTabs([{id:`sequence`,title:`Sequence`,icon:`sequence`,dock:`top`,frame:`none`,render:w(({ctx:t})=>r(Ln,{viewer:e,view3d:e=>C.plugin.view3d(e),shell:t.shell,dock:t.dock??`top`,onHover:e=>S.set(e)}))}]),i||t.show(`sequence`),i=!0):(T?.(),T=void 0,i=!1)})}else o&&(T=ue());if(O.remoteStates){let e=O.remoteStates;t.registerOverlays([{id:`remote-states`,title:`Remote states`,render:w(()=>r(Xn,{model:e}))}])}t.registerToolbar([{id:`reset`,place:`canvas`,group:`canvas`,visible:y,icon:`focus`,title:`Reset camera`,run:()=>n.post(`Camera reset`),menu:[{id:`reset-zoom`,label:`Reset zoom`,icon:`zoom-out`,hint:`Fit everything, keep the orientation`,run:()=>n.post(`Zoom reset`)},{id:`orient-axes`,label:`Orient axes`,icon:`axis-3d`,hint:`Principal axes along the screen`,run:()=>n.post(`Oriented along the principal axes`)},{id:`reset-axes`,label:`Reset axes`,icon:`rotate-ccw`,hint:`Back to the default orientation`,run:()=>n.post(`Axes reset`)}]},{id:`animation`,group:`scene`,icon:`clapperboard`,title:`Animation`,overlay:`animation`},{id:`canvas-settings`,group:`scene`,icon:`monitor-cog`,title:`Canvas settings`,overlay:`canvas-settings`},{id:`export`,group:`export`,icon:`download`,title:`Export…`,overlay:`export`},...O.remoteStates?[{id:`remote-states`,group:`export`,icon:`cloud-upload`,title:`Remote states`,overlay:`remote-states`}]:[],{id:`rendering`,place:`canvas`,group:`canvas`,visible:y,icon:`lightbulb`,title:`Illumination & XR`,pressed:m.asReadonly,menu:[{id:`illumination`,label:`Illumination`,icon:`lightbulb`,hint:`Path-traced global illumination`,pressed:m.asReadonly,run:()=>m.set(!m.value)},{id:`xr`,label:`Enter XR`,icon:`glasses`,hint:`View on a headset`,run:()=>n.post(`XR is not available in this browser.`,`warning`)}]},{id:`sequence`,place:`canvas`,group:`view`,icon:`sequence`,title:`Sequence`,...P&&C?{visible:C.plugin.structure.pipe(v(e=>e!==void 0)),menu:Gt(P.get(),t,e=>N.open(e))}:{visible:x([t.dock(`top`).tabs,t.dock(`top`).active]).pipe(v(([e,t])=>e.length>0&&!t)),run:()=>t.toggle(`top`)}}]),li(t,n);let I=ur(t,C?{props:C.plugin.canvasProps,setBackground:C.plugin.setBackground,setTransparent:C.plugin.setTransparent}:void 0);or(t,e=>n.post(e));let pe=Ir(t,e=>n.post(e));if(o&&!C){n.post(`Loaded 1TQN (3,624 atoms) in 0.4 s`,`success`);let e=e=>()=>n.setTasks(n.tasks.value.filter(t=>t.id!==e));n.setTasks([{id:`density`,label:`Downloading density`,progress:.7,abort:e(`density`)},{id:`surface`,label:`Computing surface`,progress:.4,abort:e(`surface`)}])}let ge={mode:f.asReadonly,setMode:e=>{e!==f.value&&(f.set(e),n.post(e===`select`?`Select: click to select, Shift+click to extend`:`Interact: click to focus`))},granularity:p.asReadonly,granularities:mi,setGranularity:e=>p.set(e)},L=e.playback;return{start:C?void 0:o?`structure`:`home`,commands:N,prefixes:dt({manager:N,shell:t,scene:b,snapshots:j}),canvas:()=>r(_,{when:y,fallback:()=>r(ne,{empty:!0,background:s}),children:()=>C?C.host:r(ne,{empty:!1,background:s,onHover:e=>h.set(e===void 0?[]:[`${pi[fi[e*4]]??`GLY`} ${e*4+1}`,`Chain A · 1TQN`])})}),overlays:()=>r(_,{when:y,children:()=>r(fe,{model:oe,area:()=>document.querySelector(`[data-msp-canvas]`)?.parentElement??null})}),playback:()=>L?.snapshots||L?.trajectory?r(_,{when:y,children:()=>a(i,{children:[L.snapshots?r(Se,{model:j}):null,L.trajectory?r(xe,{model:M}):null]})}):null,context:()=>C?r(Ct,{selection:{summary:C.plugin.selection.summary,clear:()=>C.plugin.selection.clear(),actions:[{id:`focus`,label:`Focus`,icon:`focus`,run:()=>C.plugin.selection.focus()}]}}):r(_,{when:y,children:()=>r(Ct,{selection:pe})}),canvasLead:()=>r(_,{when:y,children:()=>r(yt,{...ge})}),canvasAside:()=>r(_,{when:y,children:()=>r(bt,{...ge})}),empty:g.asReadonly,dispose:()=>{I(),ie?.unsubscribe();for(let e of ae)e.unsubscribe();de?.unsubscribe(),F?.unsubscribe(),P?.dispose()},bindings:[{title:`Camera`,bindings:[{action:`Rotate`,input:[`Drag`],or:[`One-finger drag`]},{action:`Move`,input:[`Right drag`],or:[`⌃`,`Drag`]},{action:`Zoom`,input:[`Scroll`],or:[`Pinch`]},{action:`Clip (move the slab)`,input:[`⇧`,`Scroll`]},{action:`Roll`,input:[`⇧`,`Drag`]},{action:`Reset the camera`,input:[`Double-click`,`empty space`]}]},{title:`Picking`,bindings:[{action:`Focus what is clicked (Interact)`,input:[`Click`]},{action:`Select what is clicked (Select)`,input:[`Click`]},{action:`Add to the selection`,input:[`⇧`,`Click`]},{action:`Select everything between`,input:[`⇧`,`Click`,`a second residue`]},{action:`Clear the selection`,input:[`Click`,`empty space`]},{action:`Show what is under the pointer`,input:[`Hover`]}]}],onDropFiles:e=>O.openFiles(e),dropFormats:O.formats}}}}var fi,pi,mi;function hi(){return(hi=e((()=>{j(),b(),y(),h(),I(),S(),u(),E(),xt(),wt(),Dt(),we(),m(),Wn(),Jn(),Qn(),ar(),at(),ge(),lr(),_r(),_t(),ct(),Cr(),Fr(),de(),L(),Rr(),Wr(),Qr(),ci(),o(),fi=`MALYGTHSHGLFKKLGIPGPTPLPFLGNILSYHKGFCMFDMECHKKYGKVWGFYDGQQPVLAITDPDMIKTVLVKECYSVFTNRRPFGPVGFMKSAISIAEDEEWKRLRSLLSPTFTSGKLKEMVPIIAQYGDVLVRNLRREAETGKPVTLKDVFGAYSMDVITSTSFGVNIDSLNNPQDPFVENTKKLLRFDFLDPFFLSITVFPFLIPILEVLNICVFPREVTNFLRKSVKRMKESRLEDTQKHRVDFLQLMIDSQNSKETESHKALSDLELVAQSIIFIFAGYETTSSVLSFIMYELATHPDVQQKLQEEIDAVLPNKAPPTYDTVLQMEYLDMVVNETLRLFPIAMRLERVCKKDVEINGMFIPKGVVVMIPSYALHRDPKYWTEPEKFLPERFSKKNKDNIDPYIYTPFGSGPRNCIGMRFALMNMKLALIRVLQNFSFKPCKETQIPLKLSLGGLLQPEKPVVLKVESRDGTVSGA`,pi={A:`ALA`,R:`ARG`,N:`ASN`,D:`ASP`,C:`CYS`,Q:`GLN`,E:`GLU`,G:`GLY`,H:`HIS`,I:`ILE`,L:`LEU`,K:`LYS`,M:`MET`,F:`PHE`,P:`PRO`,S:`SER`,T:`THR`,W:`TRP`,Y:`TYR`,V:`VAL`},mi=[{value:`element`,label:`Atom`,icon:`pick-atom`},{value:`residue`,label:`Residue`,icon:`pick-residue`},{value:`chain`,label:`Chain`,icon:`pick-chain`},{value:`entity`,label:`Entity`,icon:`pick-entity`},{value:`model`,label:`Model`,icon:`pick-model`},{value:`operator`,label:`Operator`,icon:`copy`},{value:`structure`,label:`Structure`,icon:`structure`},{value:`elementInstances`,label:`Atom`,icon:`pick-atom`,group:`All instances`},{value:`residueInstances`,label:`Residue`,icon:`pick-residue`,group:`All instances`},{value:`chainInstances`,label:`Chain`,icon:`pick-chain`,group:`All instances`}]})))()}function gi(e){return r(ie,{...e,mode:di(e)})}function _i(){return(_i=e((()=>{de(),hi(),o()})))()}export{_t as a,di as i,_i as n,hi as r,gi as t};