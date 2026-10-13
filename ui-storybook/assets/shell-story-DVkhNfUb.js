import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{X as t,Z as n,m as r,n as i,o as a,p as o,r as s,t as c}from"./jsx-runtime-pJJ4pzd1.js";import{n as l,t as u}from"./map-BLVP9Oyc.js";import{n as d,r as f}from"./observable-state-U0Aegh1x.js";import{a as p,c as m,o as h,s as g,t as _}from"./params-form-Cr0vP-Xz.js";import{C as v,E as ee,S as y,m as b,n as x,p as te,y as S}from"./shell-CzI7wQ_f.js";import{d as C,f as w,i as T,n as E,p as ne,r as D,u as O}from"./control-flow-D80wAH1n.js";import{n as k,t as A}from"./combineLatest-BuVl0X9y.js";import{n as re,r as ie}from"./playback-C5VHT9Rs.js";import{n as j,t as M}from"./icon-Cd9kBD44.js";import{t as N}from"./scroll-area-W5mfuQm0.js";import{t as ae}from"./wordmark-D5tvrxoo.js";import{t as P}from"./select-Bk_tLTmE.js";import{t as oe}from"./text-input-BVt-QcfS.js";import{t as F}from"./button-nz8xXRSW.js";import{i as se,l as ce,n as I,t as L}from"./src-C9Ks2Bfq.js";import{a as le,i as ue,n as de,o as fe,r as pe,s as me,t as he}from"./structure-tab-Da_kqVoy.js";import{t as R}from"./action-footer-CgjzDWO2.js";import{n as ge,t as _e}from"./playback-Clf1CcTQ.js";import{n as ve,r as ye,t as be}from"./home-tab-Dd7aiD7K.js";import{t as xe}from"./drag-to-reorder-BIcwE7OS.js";import{n as Se,t as Ce}from"./state-tree-tab-B1sYoBjp.js";import{n as we,t as Te}from"./home-D1QJitGf.js";function Ee(e,t){let n=t.trim();if(!n)return{ok:!1,message:`Type a ${e.title} expression.`};let r=0;for(let e of n)if(r+=e===`(`?1:e===`)`?-1:0,r<0)return{ok:!1,message:`A ")" without its "(".`};return r>0?{ok:!1,message:`A "(" is not closed.`,hint:`For example: ${e.examples[2].value}`}:/\b(and|or|not)\s*$/.test(n)?{ok:!1,message:`The expression ends in "${n.split(/\s+/).pop()}".`}:{ok:!0,value:n}}function De(e,t=()=>1){let n=new te({context:f({}).asReadonly,formats:je}),r=(t,n)=>()=>(e.openOverlay(t,void 0,n),B(`Opened ${t}`)),i=(t,n)=>()=>(e.show(t,n),B(`Showing ${n??t}`)),a=[{id:`camera.reset`,group:`camera`,title:`Reset camera`,alias:[`reset view`,`center`,`home view`],category:`View`,icon:`focus`,run:()=>B(`Camera reset`)},{id:`camera.reset-zoom`,group:`camera`,title:`Reset zoom`,alias:[`zoom to fit`,`fit`],category:`View`,icon:`zoom-out`,run:()=>B(`Zoom reset`)},{id:`camera.orient-axes`,group:`camera`,title:`Orient axes`,alias:[`orient`,`align axes`,`principal axes`],category:`View`,icon:`axis-3d`,run:()=>B(`Axes oriented`)},{id:`view.expand`,title:`Expand viewport`,category:`View`,icon:`maximize-2`,run:()=>B(`Expanded`)},{id:`view.illumination`,title:`Toggle illumination`,alias:[`ray tracing`,`path tracing`,`global illumination`,`lighting`],category:`View`,icon:`lightbulb`,shortcut:{key:`i`,alt:!0},run:()=>B(`Illumination toggled`)},{id:`view.xr`,title:`Enter XR`,alias:[`vr`,`ar`,`webxr`,`headset`],category:`View`,icon:`glasses`,when:()=>`XR is not available in this browser`,run:()=>B(``)},{id:`view.sequence`,title:`Show or hide sequence`,alias:[`sequence`,`sequence viewer`],category:`View`,icon:`sequence`,run:()=>(e.toggle(`top`),B(`Sequence toggled`))},{id:`panel.structure`,title:`Show Structure`,category:`Panels`,icon:`structure`,run:i(`structure`)},{id:`panel.home`,title:`Show Home`,category:`Panels`,icon:`prism`,run:i(`home`)},{id:`panel.log`,title:`Show Log`,category:`Panels`,icon:`scroll-text`,run:i(`log`)},{id:`panel.settings`,title:`Open settings`,category:`Panels`,icon:`settings`,run:i(`settings`)},{id:`canvas.settings`,title:`Canvas settings…`,alias:[`viewport settings`,`rendering`,`quality`],category:`View`,icon:`monitor-cog`,run:r(`canvas-settings`)},{id:`canvas.background`,title:`Canvas background…`,alias:[`background`,`bg color`],category:`View`,icon:`palette`,run:r(`canvas-settings`,`background`)},{id:`animation.open`,title:`Animation…`,category:`Animation`,icon:`clapperboard`,run:r(`animation`)},{id:`animation.wiggle`,title:`Wiggle by dynamics`,alias:[`wiggle`,`b-factor`,`dynamics`],category:`Animation`,icon:`orbit`,run:()=>B(`Wiggle: dynamics`)},{id:`export.image`,group:`export`,title:`Export image…`,alias:[`screenshot`,`save image`,`png`,`picture`],category:`Export`,icon:`image`,run:r(`export`,`image`)},{id:`export.animation`,group:`export`,title:`Export animation…`,alias:[`video`,`movie`,`mp4`,`record`],category:`Export`,icon:`film`,run:r(`export`,`animation`)},{id:`export.geometry`,group:`export`,title:`Export geometry…`,alias:[`glb`,`stl`,`obj`,`usdz`,`3d print`,`mesh`],category:`Export`,icon:`box`,run:r(`export`,`geometry`)},{id:`snapshots.show`,title:`Snapshots`,alias:[`states`,`scenes`,`save state`,`bookmarks`],category:`Snapshots`,icon:`images`,shortcut:{key:`s`,mod:!0},run:i(`snapshots`)},{id:`snapshot.next`,title:`Next snapshot`,alias:[`next scene`,`forward`],category:`Snapshots`,icon:`chevron-right`,run:()=>B(`Next snapshot`)},{id:`snapshot.previous`,title:`Previous snapshot`,alias:[`previous scene`,`prev`,`back`],category:`Snapshots`,icon:`chevron-left`,run:()=>B(`Previous snapshot`)},{id:`data.download-structure`,title:`Download structure…`,category:`Data`,icon:`download`,alias:[`download`,`fetch`,`load`,`open pdb`],params:()=>({id:g.Text(``,{label:`ID`}),source:g.Select(`pdb`,[[`pdb`,`PDB`],[`alphafold`,`AlphaFold DB`],[`pdb-ihm`,`PDB-IHM`]],{label:`source`})}),fields:{source:{before:`from`}},defaults:()=>({source:`pdb`}),action:`Download`,presets:()=>[{id:`alphafold`,title:`from AlphaFold DB`,values:{source:`alphafold`},keywords:[`afdb`,`uniprot`]},{id:`pdb-ihm`,title:`from PDB-IHM`,values:{source:`pdb-ihm`},keywords:[`integrative`]}],run:e=>B(`Downloading ${e.id} from ${e.source}`)},{id:`selection.color`,group:`selection`,title:`Color selection…`,category:`Selection`,icon:`palette`,alias:[`color`,`colour`],params:()=>({color:g.Text(``,{label:`color`}),on:g.Select(`all`,[[`all`,`all representations`],[`cartoon`,`cartoon`],[`ball-and-stick`,`ball & stick`]],{label:`representations`})}),fields:{color:{format:`color`},on:{before:`on`}},defaults:()=>({on:`all`}),action:`Color`,run:e=>B(`Colored the selection ${e.color} on ${e.on}`)},{id:`selection.transparency`,group:`selection`,title:`Set transparency…`,category:`Selection`,icon:`paintbrush`,alias:`transparency`,params:()=>({value:g.Numeric(.5,{min:0,max:1,step:.05},{label:`value`})}),fields:{value:{before:`to`}},defaults:()=>({value:.5}),action:`Apply`,run:e=>B(`Transparency ${e.value} on the selection`)},{id:`focus.target`,title:`Focus on…`,category:`Focus`,icon:`locate`,alias:`focus`,params:()=>({target:g.Text(``,{label:`ligand`})}),fields:{target:{format:`ligand`}},action:`Focus`,run:e=>B(`Focused on ${e.target}`)},...Object.entries(z).map(([e,t])=>({id:`select.${e}`,group:`select.expression`,title:`Select with ${t.title}…`,category:`Select`,icon:`text-cursor-input`,alias:e,params:()=>({expression:g.Text(``,{label:`${t.title} expression`}),mode:Me}),fields:{expression:{format:`expression.${e}`},mode:{before:`and`}},defaults:()=>({mode:`add`}),action:`Select`,run:e=>B(`${Ne(e.mode)}: ${t.title} "${e.expression}"`)})),{id:`select.residues`,group:`select`,title:`Select residues…`,category:`Select`,icon:`text-cursor-input`,alias:`residues`,params:()=>({residues:g.Text(``,{label:`residues`}),mode:Me}),fields:{residues:{format:`residues`},mode:{before:`and`}},defaults:()=>({mode:`add`}),action:`Select`,run:e=>B(`${Ne(e.mode)}: residues ${e.residues}`)},{id:`select.ligands`,group:`select.query`,title:`Select ligands`,alias:[`ligands`,`het`,`hetero`],category:`Select`,icon:`mouse-pointer-click`,run:()=>B(`Selected 3 ligands`)},{id:`select.helices`,group:`select.query`,title:`Select helices`,alias:[`helix`,`alpha helices`],category:`Select`,icon:`mouse-pointer-click`,run:()=>B(`Selected 412 residues`)},{id:`select.water`,group:`select.query`,title:`Select water`,alias:[`waters`,`solvent`,`hoh`],category:`Select`,icon:`mouse-pointer-click`,run:()=>B(`Selected 186 waters`)},{id:`selection.clear`,group:`selection`,title:`Clear selection`,alias:[`deselect`,`select none`,`unselect`],category:`Selection`,icon:`x`,run:()=>B(`Selection cleared`)},{id:`measure.open`,title:`Measure…`,alias:[`measure`,`distance`,`angle`,`dihedral`,`ruler`],category:`Measure`,icon:`ruler`,run:i(`selection`,`measure`)},{id:`superpose.open`,title:`Superpose…`,alias:[`align`,`superimpose`,`rmsd`,`tm-align`,`fit structures`],category:`Structure`,icon:`superpose`,when:()=>t()>1||`Load two or more structures`,run:i(`selection`,`superpose`)},{id:`measure.distance`,title:`Measure distance`,category:`Measure`,icon:`ruler`,when:()=>`Select two atoms first`,run:()=>B(``)}],o=(e,t,n)=>({id:`preset.${e}`,title:t,category:n,group:`preset`,icon:`layers`,run:()=>B(`Preset: ${t}`)});a.push(o(`empty`,`Empty`,`Presets`),o(`auto`,`Automatic`,`Presets`),o(`atomic-detail`,`Atomic detail`,`Basic`),o(`polymer-cartoon`,`Polymer cartoon`,`Basic`),o(`polymer-and-ligand`,`Polymer & ligand`,`Basic`),o(`protein-and-nucleic`,`Protein & nucleic`,`Basic`),o(`coarse-surface`,`Coarse surface`,`Basic`),o(`illustrative`,`Illustrative`,`Miscellaneous`),o(`molecular-surface`,`Molecular surface`,`Miscellaneous`),o(`auto-detail`,`Automatic detail`,`Miscellaneous`));let s=(e,t,n,r)=>({id:`styles.${e}`,title:t,category:n,group:`styles`,icon:r,run:()=>B(`${n}: ${t}`)});a.push(s(`repr-default`,`Default representation`,`Representation`,`layers`),s(`cartoon`,`Cartoon`,`Representation`,`cartoon`),s(`spacefill`,`Spacefill`,`Representation`,`spacefill`),s(`surface`,`Surface`,`Representation`,`surface`),s(`style-default`,`Default style`,`Style`,`paintbrush`),s(`illustrative`,`Illustrative style`,`Style`,`paintbrush`));let c=[`Data`,`Structure`,`Select`,`Selection`,`Focus`,`Measure`,`View`,`Animation`,`Snapshots`,`Export`,`Panels`];return a.sort((e,t)=>c.indexOf(e.category)-c.indexOf(t.category)),n.register(a),n.registerGroups([{id:`preset`,title:`Preset`,icon:`shapes`,order:-2},{id:`styles`,title:`Styles`,icon:`paintbrush`,order:-1},{id:`select`,title:`Select`,icon:`mouse-pointer-click`,order:0},{id:`select.query`,title:`By query`,icon:`list-tree`,parent:`select`,order:0},{id:`select.expression`,title:`Expression`,icon:`text-cursor-input`,parent:`select`,order:1},{id:`selection`,title:`Selection`,icon:`palette`,order:1},{id:`camera`,title:`Camera`,icon:`focus`,order:2},{id:`export`,title:`Export`,icon:`download`,order:3}]),n}function Oe(e){let{manager:t,shell:n,scene:r,snapshots:i}=e,a=(e,t=[])=>e.flatMap(e=>[{node:e,path:t},...a(e.children.value,[...t,e.label.value])]);return[{char:`@`,title:`Go to`,placeholder:`A structure, component, volume…`,items:e=>S(a(r.roots.value),e,e=>`${e.node.label.value} ${e.path.join(` `)}`).map(e=>({id:e.node.id,label:e.node.label.value,detail:e.path.join(` › `)||e.node.kind,icon:e.node.icon,run:()=>{n.show(`structure`),r.picked.value!==e.node&&r.pick(e.node)}}))},{char:`#`,title:`Snapshots`,placeholder:`A snapshot by title`,items:e=>S(i.titles.value.map((e,t)=>({title:e,index:t})),e,e=>e.title).map(e=>({id:`snapshot:${e.index}`,label:e.title,detail:`${e.index+1} / ${i.count.value}`,icon:`image`,run:()=>i.goTo(e.index)}))},{char:`:`,title:`Select`,placeholder:`Residues (A 10-20) or an expression (pymol resn HEM)`,items:e=>{let n=/^(pymol|vmd|jmol)\b\s*(.*)$/i.exec(e),r=(e,n)=>()=>(t.open(e,n||void 0),!0);if(n){let e=n[1].toLowerCase();return[{id:`select.${e}`,label:`Select with ${z[e].title}${n[2]?`: ${n[2]}`:`…`}`,icon:`text-cursor-input`,run:r(`select.${e}`,n[2])}]}return[{id:`select.residues`,label:e?`Select residues ${e}`:`Select residues…`,detail:`A 10-20, B 5`,icon:`text-cursor-input`,run:r(`select.residues`,e)},...Object.entries(z).map(([e,t])=>({id:`select.${e}`,label:`Select with ${t.title}…`,detail:`:${e} …`,icon:`text-cursor-input`,run:r(`select.${e}`,``)}))]}}]}var ke,Ae,z,je,B,Me,Ne;function Pe(){return(Pe=e((()=>{m(),b(),d(),ke=[`red`,`orange`,`yellow`,`green`,`teal`,`blue`,`violet`,`magenta`,`white`,`grey`,`black`],Ae=[{value:`HEM 508`,label:`HEM 508`,detail:`Protoporphyrin IX containing Fe`},{value:`SO4 1`,label:`SO4 1`,detail:`Sulfate ion`},{value:`SO4 2`,label:`SO4 2`,detail:`Sulfate ion`}],z={pymol:{title:`PyMOL`,examples:[{value:`resn HEM`,label:`resn HEM`},{value:`chain A and resi 100-120`,label:`chain A and resi 100-120`},{value:`byres (resn HEM around 5)`,label:`byres (resn HEM around 5)`},{value:`polymer and not hydro`,label:`polymer and not hydro`},{value:`organic`,label:`organic`}]},vmd:{title:`VMD`,examples:[{value:`resname HEM`,label:`resname HEM`},{value:`chain A and resid 100 to 120`,label:`chain A and resid 100 to 120`},{value:`same residue as within 5 of resname HEM`,label:`same residue as within 5 of resname HEM`},{value:`protein and backbone`,label:`protein and backbone`},{value:`water`,label:`water`}]},jmol:{title:`Jmol`,examples:[{value:`HEM`,label:`HEM`},{value:`:A and 100-120`,label:`:A and 100-120`},{value:`within(5.0, HEM)`,label:`within(5.0, HEM)`},{value:`protein and backbone`,label:`protein and backbone`},{value:`water`,label:`water`}]}},je={get:e=>{let t=e.startsWith(`expression.`)?z[e.slice(11)]:void 0;if(t)return{hint:()=>`a ${t.title} expression`,check:e=>Ee(t,e),complete:e=>{let n=e.trim().toLowerCase();return t.examples.filter(e=>e.value.toLowerCase().startsWith(n)&&e.value.toLowerCase()!==n).map(e=>({...e,detail:`example`,fill:!0}))}};if(e===`residues`)return{hint:()=>`chains and residue ranges: A 10-20, B 5`,check:e=>/^\s*[A-Za-z0-9]+(\s+\d+(-\d+)?)?(\s*,\s*[A-Za-z0-9]+(\s+\d+(-\d+)?)?)*\s*$/.test(e)?{ok:!0,value:e.trim()}:{ok:!1,message:`"${e}" is not a residue list.`,hint:`Chain, then residues: A 10-20, B 5`},complete:()=>[{value:`A 100-120`,label:`A 100-120`,detail:`a range in chain A`},{value:`A 442, A 508`,label:`A 442, A 508`,detail:`Cys442 and the heme`}]};if(e===`color`)return{hint:()=>`a color name or #hex`,check:e=>ke.includes(e.toLowerCase())||/^#?[0-9a-f]{6}$/i.test(e)?{ok:!0,value:e.toLowerCase()}:{ok:!1,message:`"${e}" is not a color.`,hint:`Try a name (red, teal) or #hex.`},complete:e=>S(ke,e,e=>e).map(e=>({value:e,label:e}))};if(e===`ligand`)return{hint:()=>`a ligand of the loaded structures`,check:e=>{let t=Ae.find(t=>t.value.toLowerCase()===e.toLowerCase().trim());return t?{ok:!0,value:t.value}:{ok:!1,message:`No ligand "${e}".`}},complete:e=>S(Ae,e,e=>`${e.label} ${e.detail}`)}}},B=e=>({message:e}),Me=g.Select(`add`,[[`add`,`add to the selection`],[`remove`,`remove from the selection`],[`intersect`,`intersect with the selection`],[`set`,`replace the selection`]],{label:`mode`}),Ne=e=>({add:`Added to the selection`,remove:`Removed from the selection`,intersect:`Intersected`,set:`Selected`})[e]??`Selected`})))()}var V;function Fe(){return(Fe=e((()=>{n(),V={badge:`msp-viewer-mode-switch-badge`,chevron:`msp-viewer-mode-switch-chevron`,group:`msp-viewer-mode-switch-group`,level:`msp-viewer-mode-switch-level`,"level-in":`msp-viewer-mode-switch-level-in`,levelButton:`msp-viewer-mode-switch-levelButton`,levelCaption:`msp-viewer-mode-switch-levelCaption`,levelRow:`msp-viewer-mode-switch-levelRow`,levels:`msp-viewer-mode-switch-levels`,segment:`msp-viewer-mode-switch-segment`,select:`msp-viewer-mode-switch-select`,switch:`msp-viewer-mode-switch-switch`},t(`viewer/views/canvas/mode-switch.module.css`,`@layer msp.components {
.msp-viewer-mode-switch-levelButton, .msp-viewer-mode-switch-levels {
  border-radius: var(--msp-radius-lg);
  background: var(--msp-glass-bg);
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
}

.msp-viewer-mode-switch-switch {
  flex-direction: column;
  display: flex;
}

.msp-viewer-mode-switch-segment {
  width: 100%;
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
  top: var(--msp-stack-row, 40px);
  padding-right: var(--msp-space-3);
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--msp-motion-fast) var(--msp-ease),
    transform var(--msp-motion-fast) var(--msp-ease),
    visibility 0s linear .16s;
  flex-direction: column;
  align-items: flex-end;
  display: flex;
  position: absolute;
  right: 100%;
  transform: translateX(4px);
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

.msp-viewer-mode-switch-levelButton {
  align-items: center;
  gap: var(--msp-space-2);
  height: var(--msp-stack-row, 40px);
  padding: 0 var(--msp-inset);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  white-space: nowrap;
  display: flex;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-glass-panel-bg);
  }
}

.msp-viewer-mode-switch-levelCaption {
  color: var(--msp-color-text-subtle);
}

.msp-viewer-mode-switch-chevron {
  color: var(--msp-color-text-subtle);
  transition: transform var(--msp-motion-fast) var(--msp-ease);

  [aria-expanded="true"] > & {
    transform: rotate(180deg);
  }
}

.msp-viewer-mode-switch-levels {
  top: calc(100% + var(--msp-space-2));
  right: var(--msp-space-3);
  z-index: var(--msp-z-overlay);
  min-width: 168px;
  padding: var(--msp-space-2);
  background: var(--msp-glass-panel-bg);
  animation: msp-viewer-mode-switch-level-in var(--msp-motion-fast) var(--msp-ease);
  display: grid;
  position: absolute;
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
`)})))()}function Ie(e){let t=e.mode.pipe(l(e=>e===`select`),O()),n=e.granularities,r=n&&e.granularity?e.granularity.pipe(l(e=>n.find(t=>t.value===e)??n[0])):void 0;return s(`div`,{class:V.switch,role:`group`,"aria-label":`Canvas mode`,"data-canvas-mode":e.mode,children:[i(`button`,{type:`button`,class:V.segment,"aria-pressed":t.pipe(l(e=>!e)),"data-tip":`Interact: drag to rotate, click to focus`,"data-tip-side":`left`,"aria-label":`Interact`,onClick:()=>e.setMode(`interact`),children:i(M,{name:`rotate-3d`,size:20})}),s(`button`,{type:`button`,class:`${V.segment} ${V.select}`,"aria-pressed":t,"data-tip":r?void 0:`Select: click to select, Shift+click to extend`,"data-tip-side":`left`,"aria-label":`Select`,onClick:()=>e.setMode(`select`),children:[i(M,{name:`mouse-pointer-click`,size:20}),r?i(D,{when:r,children:e=>i(M,{name:e.icon,size:10,class:V.badge})}):null]})]})}function Le(e){if(!e.granularities||!e.granularity)return null;let t=e.mode.pipe(l(e=>e===`select`),O());return i(D,{when:t,children:()=>i(Re,{...e})})}function Re(e){let t=e.granularities,n=e.granularity.pipe(l(e=>t.find(t=>t.value===e)??t[0])),o=f(!1),c=s(`div`,{class:V.level,children:[s(`button`,{type:`button`,class:V.levelButton,"aria-haspopup":`true`,"aria-expanded":o,title:`What a click selects`,onClick:()=>o.set(!o.value),children:[i(`span`,{class:V.levelCaption,children:`Picks`}),i(D,{when:n,children:e=>i(M,{name:e.icon,size:15})}),i(`span`,{children:n.pipe(l(e=>e.label))}),i(M,{name:`chevron-down`,size:13,class:V.chevron})]}),i(D,{when:o,children:()=>i(`div`,{class:V.levels,role:`menu`,"aria-label":`Picking level`,children:t.map((n,r)=>s(a,{children:[n.group&&n.group!==t[r-1]?.group?i(`div`,{class:V.group,children:n.group}):null,s(`button`,{type:`button`,role:`menuitemradio`,class:V.levelRow,"aria-checked":e.granularity.pipe(l(e=>e===n.value)),onClick:()=>{e.setGranularity?.(n.value),o.set(!1)},children:[i(M,{name:n.icon,size:15}),n.label]})]}))})})]}),u=e=>{o.value&&!c.contains(e.target)&&o.set(!1)},d=e=>{o.value&&e.key===`Escape`&&!e.defaultPrevented&&(o.set(!1),e.preventDefault())};return document.addEventListener(`pointerdown`,u),document.addEventListener(`keydown`,d),r(()=>{document.removeEventListener(`pointerdown`,u),document.removeEventListener(`keydown`,d)}),c}function ze(){return(ze=e((()=>{C(),u(),j(),T(),o(),d(),Fe(),c()})))()}var H;function Be(){return(Be=e((()=>{n(),H={action:`msp-viewer-selection-bar-action`,bar:`msp-viewer-selection-bar-bar`,"bar-in":`msp-viewer-selection-bar-bar-in`,summary:`msp-viewer-selection-bar-summary`},t(`viewer/views/canvas/selection-bar.module.css`,`@layer msp.components {
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
`)})))()}function Ve(e){let{selection:t}=e;return i(D,{when:t.summary,children:e=>s(`div`,{class:H.bar,role:`toolbar`,"aria-label":`Selection`,children:[i(`span`,{class:H.summary,children:e}),t.actions.map(e=>i(`button`,{type:`button`,class:H.action,"aria-label":e.label,"data-tip":e.label,"data-tip-side":`top`,onClick:()=>e.run(),children:i(M,{name:e.icon,size:16})})),i(`button`,{type:`button`,class:H.action,"aria-label":`Clear selection`,"data-tip":`Clear selection`,"data-tip-side":`top`,onClick:()=>t.clear(),children:i(M,{name:`x`,size:16})})]})})}function He(){return(He=e((()=>{j(),T(),Be(),c()})))()}var U;function Ue(){return(Ue=e((()=>{n(),U={autoCrop:`msp-viewer-image-export-autoCrop`,crop:`msp-viewer-image-export-crop`,export:`msp-viewer-image-export-export`,preview:`msp-viewer-image-export-preview`,stage:`msp-viewer-image-export-stage`},t(`viewer/views/export/image-export.module.css`,`@layer msp.components {
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
`)})))()}function We(e){let{model:t}=e,n=e=>`${(e*100).toFixed(2)}%`;return s(`div`,{class:U.export,children:[i(`div`,{class:U.stage,children:s(`div`,{class:U.preview,style:{"aspect-ratio":t.aspect.pipe(l(e=>`${e}`)),background:t.preview.pipe(l(e=>e??`var(--msp-color-control)`))},children:[i(`div`,{class:U.crop,"data-auto":t.autoCrop.asReadonly.pipe(l(e=>e?``:void 0)),style:{left:t.crop.pipe(l(e=>n(e.x))),top:t.crop.pipe(l(e=>n(e.y))),width:t.crop.pipe(l(e=>n(e.width))),height:t.crop.pipe(l(e=>n(e.height)))}}),i(`button`,{type:`button`,class:U.autoCrop,"aria-pressed":t.autoCrop.asReadonly,title:`Crop to the visible content`,onClick:()=>t.autoCrop.set(!t.autoCrop.value),children:i(`span`,{children:`Auto-crop`})})]})}),i(_,{form:t.form}),i(R,{icon:`download`,label:`Download`,info:t.size,busy:t.busy,secondary:{icon:`copy`,label:`Copy`,onClick:()=>t.copy()},onReset:()=>t.form.reset(),onApply:()=>t.download()})]})}function Ge(){return(Ge=e((()=>{u(),L(),Ue(),c()})))()}var W;function Ke(){return(Ke=e((()=>{n(),W={chevron:`msp-viewer-sequence-strip-chevron`,choice:`msp-viewer-sequence-strip-choice`,gap:`msp-viewer-sequence-strip-gap`,header:`msp-viewer-sequence-strip-header`,info:`msp-viewer-sequence-strip-info`,popover:`msp-viewer-sequence-strip-popover`,residue:`msp-viewer-sequence-strip-residue`,residues:`msp-viewer-sequence-strip-residues`,residuesContent:`msp-viewer-sequence-strip-residuesContent`,selected:`msp-viewer-sequence-strip-selected`,selector:`msp-viewer-sequence-strip-selector`,spacer:`msp-viewer-sequence-strip-spacer`,strip:`msp-viewer-sequence-strip-strip`,value:`msp-viewer-sequence-strip-value`},t(`viewer/views/sequence/sequence-strip.module.css`,`@layer msp.components {
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
`)})))()}function qe(e){let{chain:t}=e,n=document.createDocumentFragment();for(let e=0;e<t.sequence.length;e++){let r=document.createElement(`span`);r.className=W.residue,r.textContent=t.sequence[e];let i=t.start+e;r.dataset.seq=String(i),i%10==0&&(r.dataset.number=String(i)),n.appendChild(r)}let r=i(N,{class:W.residues,contentClass:W.residuesContent,onPointerOver:t=>{let n=t.target.dataset?.seq;e.onHover?.(n===void 0?void 0:Number(n))},onPointerLeave:()=>e.onHover?.(void 0),onClick:t=>{let n=t.target;if(n.dataset?.seq===void 0)return;let r=n.classList.toggle(W.selected);e.onToggle?.(Number(n.dataset.seq),r)},children:n});return s(`div`,{class:W.strip,children:[s(`div`,{class:W.header,children:[e.selectors?e.selectors.map(e=>e.visible?i(D,{when:e.visible,children:()=>i(Je,{selector:e})}):i(Je,{selector:e})):s(a,{children:[s(`button`,{type:`button`,class:W.selector,title:`Structure`,children:[t.structure,` `,i(M,{name:`chevron-down`,size:12})]}),s(`button`,{type:`button`,class:W.selector,title:`Chain`,children:[t.name,t.info?i(`span`,{class:W.info,children:t.info}):null,i(M,{name:`chevron-down`,size:12})]})]}),i(`span`,{class:W.spacer}),e.onCollapse?i(F,{variant:`ghost`,size:`sm`,icon:i(M,{name:`chevron-up`}),title:`Hide the sequence`,onClick:()=>e.onCollapse?.()}):null]}),r]})}function Je(e){let{selector:t}=e,n=f(!1),r=f({top:0,left:0}),a=t.value.pipe(l(e=>t.display?.(e)??t.options.find(t=>t[0]===e)?.[1]??e)),o=t.value.pipe(l(e=>`${t.title}: ${t.options.find(t=>t[0]===e)?.[1]??e}`));return s(`span`,{class:W.choice,children:[s(`button`,{type:`button`,class:W.selector,"data-strong":t.strong?``:void 0,title:o,"aria-label":t.title,"aria-haspopup":`listbox`,"aria-expanded":n,onClick:e=>{let t=e.currentTarget.getBoundingClientRect();r.set({top:t.bottom+2,left:t.left}),n.set(!n.value)},children:[i(`span`,{class:W.value,children:a}),i(M,{name:`chevron-down`,size:12,class:W.chevron})]}),i(D,{when:n,children:()=>i(`div`,{class:W.popover,style:{top:r.asReadonly.pipe(l(e=>`${e.top}px`)),left:r.asReadonly.pipe(l(e=>`${e.left}px`))},children:i(P,{options:t.options,value:t.value,onPick:e=>{n.set(!1),t.set(e)},onClose:()=>n.set(!1)})})})]})}function Ye(){return(Ye=e((()=>{u(),L(),j(),T(),d(),Ke(),c()})))()}var G;function Xe(){return(Xe=e((()=>{n(),G={action:`msp-viewer-remote-states-panel-action`,caption:`msp-viewer-remote-states-panel-caption`,captionRow:`msp-viewer-remote-states-panel-captionRow`,date:`msp-viewer-remote-states-panel-date`,empty:`msp-viewer-remote-states-panel-empty`,item:`msp-viewer-remote-states-panel-item`,list:`msp-viewer-remote-states-panel-list`,listContent:`msp-viewer-remote-states-panel-listContent`,menu:`msp-viewer-remote-states-panel-menu`,menuItem:`msp-viewer-remote-states-panel-menuItem`,name:`msp-viewer-remote-states-panel-name`,open:`msp-viewer-remote-states-panel-open`,panel:`msp-viewer-remote-states-panel-panel`,row:`msp-viewer-remote-states-panel-row`,server:`msp-viewer-remote-states-panel-server`,spin:`msp-viewer-remote-states-panel-spin`,states:`msp-viewer-remote-states-panel-states`,upload:`msp-viewer-remote-states-panel-upload`},t(`viewer/views/state/remote-states-panel.module.css`,`@layer msp.components {
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
`)})))()}function Ze(e){let{model:t}=e,n=new p({name:g.Text(``,{label:`Name`,placeholder:`Untitled`})}),r=t.upload?{id:`upload`,title:`Upload the current state`,icon:`cloud-upload`,form:n,applyLabel:`Upload`,apply:()=>{t.upload?.(n.values.value.name.trim()||`Untitled`),n.reset()}}:void 0;return s(`div`,{class:G.panel,children:[r?i(`section`,{class:G.upload,"aria-label":`Upload`,children:i(be,{action:r,open:!0})}):null,s(`section`,{class:G.states,"aria-label":`On the server`,children:[s(`div`,{class:G.captionRow,children:[i(`p`,{class:G.caption,children:`On the server`}),i(F,{size:`xs`,variant:`ghost`,title:`Refresh`,icon:i(D,{when:t.loading,fallback:()=>i(M,{name:`refresh-cw`}),children:()=>i(M,{name:`loader-circle`,class:G.spin})}),onClick:()=>t.refresh()})]}),i(N,{class:G.list,contentClass:G.listContent,children:i(E,{each:t.states,fallback:()=>i(`p`,{class:G.empty,children:`No states yet.`}),children:e=>i(Qe,{model:t,state:e})},e=>e.id)})]}),s(`label`,{class:G.server,children:[i(`span`,{children:`Server`}),i(oe,{size:`sm`,"aria-label":`State server URL`,value:t.serverUrl,onSubmit:e=>t.setServerUrl(e)})]})]})}function Qe(e){let{model:t,state:n}=e,r=f(!1),a=!!(t.download||t.remove);return s(`div`,{class:G.item,children:[s(`div`,{class:G.row,children:[s(`button`,{type:`button`,class:G.open,onClick:()=>t.open(n.id),children:[i(`span`,{class:G.name,children:n.label}),i(`span`,{class:G.date,children:n.date})]}),a?i(`button`,{type:`button`,class:G.action,"aria-label":`More`,"aria-expanded":r,onClick:()=>r.set(!r.value),children:i(M,{name:`ellipsis`,size:15})}):null]}),i(D,{when:r,children:()=>s(`div`,{class:G.menu,role:`menu`,children:[t.download?i(`button`,{type:`button`,role:`menuitem`,class:G.menuItem,onClick:()=>{r.set(!1),t.download?.(n.id)},children:i(`span`,{children:`Download`})}):null,t.remove?i(`button`,{type:`button`,role:`menuitem`,class:G.menuItem,"data-danger":``,onClick:()=>{r.set(!1),t.remove?.(n.id)},children:i(`span`,{children:`Remove`})}):null]})})]})}function $e(){return($e=e((()=>{m(),L(),j(),T(),h(),d(),ye(),Xe(),c()})))()}var K;function et(){return(et=e((()=>{n(),K={action:`msp-viewer-snapshots-panel-action`,actionLabel:`msp-viewer-snapshots-panel-actionLabel`,actions:`msp-viewer-snapshots-panel-actions`,block:`msp-viewer-snapshots-panel-block`,blockCaption:`msp-viewer-snapshots-panel-blockCaption`,blockContent:`msp-viewer-snapshots-panel-blockContent`,choice:`msp-viewer-snapshots-panel-choice`,choiceHint:`msp-viewer-snapshots-panel-choiceHint`,choiceTitle:`msp-viewer-snapshots-panel-choiceTitle`,description:`msp-viewer-snapshots-panel-description`,descriptionField:`msp-viewer-snapshots-panel-descriptionField`,empty:`msp-viewer-snapshots-panel-empty`,field:`msp-viewer-snapshots-panel-field`,fields:`msp-viewer-snapshots-panel-fields`,grip:`msp-viewer-snapshots-panel-grip`,index:`msp-viewer-snapshots-panel-index`,inspection:`msp-viewer-snapshots-panel-inspection`,inspector:`msp-viewer-snapshots-panel-inspector`,inspectorContent:`msp-viewer-snapshots-panel-inspectorContent`,inspectorEmpty:`msp-viewer-snapshots-panel-inspectorEmpty`,inspectorHeader:`msp-viewer-snapshots-panel-inspectorHeader`,inspectorKind:`msp-viewer-snapshots-panel-inspectorKind`,inspectorTitle:`msp-viewer-snapshots-panel-inspectorTitle`,item:`msp-viewer-snapshots-panel-item`,key:`msp-viewer-snapshots-panel-key`,label:`msp-viewer-snapshots-panel-label`,list:`msp-viewer-snapshots-panel-list`,listContent:`msp-viewer-snapshots-panel-listContent`,menu:`msp-viewer-snapshots-panel-menu`,menuItem:`msp-viewer-snapshots-panel-menuItem`,name:`msp-viewer-snapshots-panel-name`,optionsButton:`msp-viewer-snapshots-panel-optionsButton`,panel:`msp-viewer-snapshots-panel-panel`,row:`msp-viewer-snapshots-panel-row`,rowActions:`msp-viewer-snapshots-panel-rowActions`,slot:`msp-viewer-snapshots-panel-slot`,textarea:`msp-viewer-snapshots-panel-textarea`,thumb:`msp-viewer-snapshots-panel-thumb`},t(`viewer/views/state/snapshots-panel.module.css`,`@layer msp.components {
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
`)})))()}function tt(e){let{model:t}=e,n=f(void 0),r=e=>n.set(n.value===e?void 0:e),a=i(`input`,{type:`file`,accept:`.molx,.molj,.zip,.json`,hidden:!0,onChange:e=>{let n=e.currentTarget.files;n?.length&&t.open([...n]),e.currentTarget.value=``}}),o=t.current.pipe(O()),c,u=e=>n=>xe(n,c,e,n=>t.moveTo(e,n));return s(`div`,{class:K.panel,children:[s(`div`,{class:K.actions,children:[i(F,{size:`sm`,variant:`ghost`,icon:i(M,{name:`plus`}),onClick:()=>t.add(),children:i(`span`,{class:K.actionLabel,children:`Add`})}),i(F,{size:`sm`,variant:`ghost`,icon:i(M,{name:`download`}),pressed:n.asReadonly.pipe(l(e=>e===`save`)),onClick:()=>r(`save`),children:i(`span`,{class:K.actionLabel,children:`Save`})}),i(F,{size:`sm`,variant:`ghost`,icon:i(M,{name:`folder-open`}),onClick:()=>a.click(),children:i(`span`,{class:K.actionLabel,children:`Open`})}),a,i(F,{size:`sm`,variant:`ghost`,class:K.optionsButton,icon:i(M,{name:`settings`}),title:`Save options`,pressed:n.asReadonly.pipe(l(e=>e===`options`)),onClick:()=>r(`options`)})]}),i(D,{when:n,reveal:!0,children:e=>e===`save`?s(N,{class:K.block,contentClass:K.blockContent,role:`region`,"aria-label":`Save to a file`,children:[i(nt,{icon:`download`,title:`Session`,hint:`.molx · the state with its data`,onClick:()=>{n.set(void 0),t.download(`session`)}}),i(nt,{icon:`download`,title:`State`,hint:`.molj · the description; data loads from its sources`,onClick:()=>{n.set(void 0),t.download(`state`)}})]}):s(N,{class:K.block,contentClass:K.blockContent,role:`region`,"aria-label":`Save options`,children:[i(`p`,{class:K.blockCaption,children:`What a new snapshot includes`}),i(_,{form:t.saveOptions})]})}),i(N,{class:K.list,contentClass:K.listContent,role:`listbox`,"aria-label":`Snapshots`,ref:e=>c=e,children:i(E,{each:t.entries,fallback:()=>s(`p`,{class:K.empty,children:[`No snapshots yet. `,i(`strong`,{children:`Add`}),` saves the current view; saved ones play back in order.`]}),children:(e,n)=>i(rt,{model:t,entry:e,index:n,onGrab:u(e.id),current:o.pipe(l(t=>t===e.id),O())})},e=>e.id)}),i(N,{class:K.inspector,contentClass:K.inspectorContent,role:`region`,"aria-label":`Snapshot`,children:i(D,{when:t.entries.pipe(l(e=>e.find(e=>e.id===t.current.value)),O()),fallback:()=>i(`p`,{class:K.inspectorEmpty,children:`Apply a snapshot to edit its name, key and description.`}),children:e=>i(at,{model:t,entry:e})})})]})}function nt(e){return s(`button`,{type:`button`,class:K.choice,onClick:e.onClick,children:[i(`span`,{class:K.choiceTitle,children:e.title}),i(`span`,{class:K.choiceHint,children:e.hint})]})}function rt(e){let{model:t,entry:n}=e,r=f(!1),a=n.description?.split(`
`).map(e=>e.replace(/[#*`>-]/g,``).trim()).find(e=>e);return s(`div`,{class:K.item,"data-id":n.id,children:[s(`div`,{class:K.row,role:`option`,tabIndex:0,"aria-selected":e.current,onClick:()=>t.apply(n.id),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),t.apply(n.id))},children:[s(`span`,{class:K.slot,children:[i(`span`,{class:K.index,children:e.index.pipe(l(e=>`${e+1}`))}),i(`span`,{class:K.grip,"aria-hidden":`true`,"data-tip":`Drag to reorder`,onPointerDown:e.onGrab,onClick:e=>e.stopPropagation(),children:i(M,{name:`grip-vertical`,size:14})})]}),n.image?i(`span`,{class:K.thumb,style:{background:n.image}}):null,i(`span`,{class:K.name,children:n.name}),n.key?s(`span`,{class:K.key,children:[`#`,n.key]}):null,i(`span`,{class:K.description,children:a??``}),s(`span`,{class:K.rowActions,children:[i(`button`,{type:`button`,class:K.action,"data-tip":`Retake from the current view`,"aria-label":`Retake from the current view`,onClick:e=>{e.stopPropagation(),t.replace(n.id)},children:i(M,{name:`camera`,size:14})}),i(`button`,{type:`button`,class:K.action,"aria-label":`More`,"aria-expanded":r,onClick:e=>{e.stopPropagation(),r.set(!r.value)},children:i(M,{name:`ellipsis`,size:15})})]})]}),i(D,{when:r,children:()=>s(`div`,{class:K.menu,role:`menu`,children:[i(it,{icon:`arrow-up`,label:`Move up`,run:()=>t.move(n.id,-1)}),i(it,{icon:`arrow-down`,label:`Move down`,run:()=>t.move(n.id,1)}),i(it,{icon:`trash-2`,label:`Remove`,danger:!0,run:()=>{r.set(!1),t.remove(n.id)}})]})})]})}function it(e){return i(`button`,{type:`button`,role:`menuitem`,class:K.menuItem,"data-danger":e.danger?``:void 0,onClick:e.run,children:i(`span`,{children:e.label})})}function at(e){let{model:t,entry:n}=e,r=t.entryOptions(n.id);return s(`div`,{class:K.inspection,children:[s(`header`,{class:K.inspectorHeader,children:[i(`span`,{class:K.inspectorTitle,children:n.name}),i(`span`,{class:K.inspectorKind,children:n.timestamp??`snapshot`})]}),s(`div`,{class:K.fields,children:[s(`label`,{class:K.field,children:[i(`span`,{class:K.label,children:`Name`}),i(oe,{size:`sm`,value:n.name,onSubmit:e=>t.update(n.id,{name:e})})]}),s(`label`,{class:K.field,children:[i(`span`,{class:K.label,children:`Key`}),i(oe,{size:`sm`,value:n.key??``,placeholder:`Optional, for #links`,onSubmit:e=>t.update(n.id,{key:e||void 0})})]}),s(`label`,{class:K.descriptionField,children:[i(`span`,{class:K.label,children:`Description`}),i(`textarea`,{class:K.textarea,rows:4,placeholder:`Markdown · [title](#key) links to a snapshot`,value:n.description??``,onChange:e=>t.update(n.id,{description:e.currentTarget.value||void 0})})]})]}),r?i(_,{form:r}):null]})}function ot(){return(ot=e((()=>{C(),u(),L(),j(),T(),d(),et(),c()})))()}function st(e,t){let n=new p(lt),r=f(!1),a=()=>{let e=n.values.value.animation.name;return ct.find(([t])=>t===e)?.[1]??e};e.registerOverlays([{id:`animation`,title:`Animation`,render:y(({ctx:e})=>i(I,{shell:e.shell,slot:`animation`,focus:e.focus}))}]);let o=f(void 0),c=new p({by:g.Select(`dynamics`,[[`dynamics`,`Dynamics (B-factor)`],[`uncertainty`,`Model uncertainty`]])});return e.registerSections([{id:`play`,slot:`animation`,title:`Play`,icon:`play`,order:0,render:y(()=>s(`div`,{style:`display: grid; gap: var(--msp-space-3)`,children:[i(_,{form:n}),i(D,{when:r,fallback:()=>i(R,{icon:`play`,label:`Play`,onReset:()=>n.reset(),onApply:()=>{r.set(!0),t(`Playing: ${a()}`)}}),children:()=>i(R,{icon:`square`,label:`Stop`,onReset:()=>n.reset(),onApply:()=>{r.set(!1),t(`Animation stopped`)}})})]}))},{id:`procedural`,slot:`animation`,title:`Procedural animation`,icon:`orbit`,keywords:[`wiggle`,`dynamics`,`uncertainty`],order:1,render:y(()=>s(`div`,{style:`display: grid; gap: var(--msp-space-3)`,children:[i(_,{form:c}),i(R,{icon:`orbit`,label:`Apply`,info:o.asReadonly.pipe(l(e=>e?`Wiggling by ${e}`:``)),secondary:{icon:`x`,label:`Clear`,onClick:()=>{o.set(void 0),t(`Wiggle cleared`)}},onApply:()=>{let e=c.values.value.by;o.set(e),t(`Wiggle: ${e}`)}})]}))}]),{playing:r.asReadonly}}var ct,lt;function ut(){return(ut=e((()=>{m(),u(),L(),T(),v(),h(),d(),c(),ct=[[`trajectory`,`Animate trajectory`],[`spin`,`Camera spin`],[`rock`,`Camera rock`],[`snapshots`,`State snapshots`],[`unwind`,`Assembly unwind`]],lt={animation:g.MappedStatic(`trajectory`,{trajectory:g.Group({mode:g.Select(`loop`,[[`loop`,`Loop`],[`palindrome`,`Palindrome`],[`once`,`Once`]]),duration:g.Numeric(5,{min:1,max:60,step:.5},{label:`Duration (s)`})}),spin:g.Group({speed:g.Numeric(1,{min:.1,max:5,step:.1},{label:`Speed`}),direction:g.Select(`cw`,[[`cw`,`Clockwise`],[`ccw`,`Counter-clockwise`]])}),rock:g.Group({angle:g.Numeric(15,{min:1,max:90,step:1},{label:`Angle (°)`}),speed:g.Numeric(.3,{min:.05,max:2,step:.05},{label:`Speed`})}),snapshots:g.Group({duration:g.Numeric(2,{min:.5,max:10,step:.5},{label:`Per snapshot (s)`})}),unwind:g.Group({duration:g.Numeric(3,{min:.5,max:10,step:.5},{label:`Duration (s)`})})},{label:`Animation`,isEssential:!0,options:[...ct]})}})))()}function dt(e){e.registerOverlays([{id:`canvas-settings`,title:`Canvas`,render:y(({ctx:e})=>i(I,{shell:e.shell,slot:`canvas-settings`,focus:e.focus}))}]);let t=(e,t,n,r,a)=>{let o=new p(r);return{id:e,slot:`canvas-settings`,title:t,icon:n,order:a,render:y(()=>i(_,{form:o}))}};e.registerSections([t(`background`,`Background`,`palette`,ft,0),t(`lighting`,`Lighting & effects`,`lightbulb`,pt,1),t(`camera`,`Camera`,`camera`,mt,2),t(`clipping`,`Clipping & fog`,`scan`,ht,3)])}var ft,pt,mt,ht;function gt(){return(gt=e((()=>{m(),L(),v(),h(),c(),ft={color:g.Color(16777215,{isEssential:!0}),transparent:g.Boolean(!1,{label:`Transparent`,isEssential:!0})},pt={style:g.Select(`default`,[[`default`,`Default`],[`plastic`,`Plastic`],[`flat`,`Flat`],[`celshaded`,`Cel-shaded`],[`illustrative`,`Illustrative`]],g.Essential),occlusion:g.MappedStatic(`on`,{on:g.Group({samples:g.Numeric(32,{min:1,max:256,step:1}),multiScale:g.Boolean(!1,{label:`Multi scale`}),radius:g.Numeric(5,{min:0,max:20,step:.1}),bias:g.Numeric(.8,{min:0,max:3,step:.1}),blurKernelSize:g.Numeric(15,{min:1,max:25,step:2},{label:`Blur kernel size`}),blurDepthBias:g.Numeric(.5,{min:0,max:1,step:.01},{label:`Blur depth bias`})}),off:g.EmptyGroup()},{label:`Ambient occlusion`,isEssential:!0}),shadow:g.MappedStatic(`off`,{on:g.Group({steps:g.Numeric(1,{min:1,max:64,step:1}),maxDistance:g.Numeric(3,{min:0,max:256,step:1},{label:`Max distance`}),tolerance:g.Numeric(1,{min:0,max:10,step:.1})}),off:g.EmptyGroup()},{label:`Shadows`,isEssential:!0}),outline:g.MappedStatic(`off`,{on:g.Group({scale:g.Numeric(1,{min:1,max:5,step:1}),threshold:g.Numeric(.33,{min:.01,max:1,step:.01}),color:g.Color(0),includeTransparent:g.Boolean(!0,{label:`Include transparent`})}),off:g.EmptyGroup()},{label:`Outline`,isEssential:!0}),exposure:g.Numeric(1,{min:0,max:3,step:.01})},mt={mode:g.Select(`perspective`,[[`perspective`,`Perspective`],[`orthographic`,`Orthographic`]],g.Essential),fov:g.Numeric(45,{min:10,max:130,step:1},{label:`Field of view`,isEssential:!0}),stereo:g.Boolean(!1,{label:`Stereo`}),helper:g.Boolean(!1,{label:`Axes helper`})},ht={fog:g.Numeric(50,{min:0,max:100,step:1},{label:`Fog intensity`,isEssential:!0}),radius:g.Numeric(100,{min:0,max:99,step:1},{label:`Clip radius`,isEssential:!0}),far:g.Boolean(!0,{label:`Clip far plane`})}})))()}function q(e){let t=f(void 0);return e.subscribe(e=>t.set(e)),t.asReadonly}function _t(e){let t=new p(vt),n=f(!0),r=f({x:.05,y:.05,width:.9,height:.9}),i=f(!1),a=t.values.pipe(l(e=>e.resolution.name===`custom`?[e.resolution.params.width,e.resolution.params.height]:yt[e.resolution.name])),o=A([n.asReadonly,r.asReadonly]).pipe(l(([e,t])=>e?bt:t));return{preview:q(t.values.pipe(l(e=>e.transparent?`repeating-conic-gradient(#d8d8de 0 25%, #f2f2f5 0 50%) 0 0 / 12px 12px`:`radial-gradient(ellipse at 50% 45%, #fff 0, #eef0f4 70%)`)).pipe(l(e=>`radial-gradient(circle at 34% 62%, #6aa6d8 0 6%, transparent 6.5%), radial-gradient(circle at 46% 54%, #7a6fd6 0 7%, transparent 7.5%), radial-gradient(circle at 58% 40%, #b46ad0 0 8%, transparent 8.5%), radial-gradient(circle at 68% 52%, #d06a8c 0 6%, transparent 6.5%), ${e}`))),aspect:q(a.pipe(l(([e,t])=>e/t),O())),autoCrop:n,crop:q(o),setCrop:e=>{n.set(!1),r.set(e)},size:q(A([a,o,t.values]).pipe(l(([[e,t],n,r])=>`${Math.round(e*n.width)} × ${Math.round(t*n.height)} px · ${String(r.format.name).toUpperCase()}`))),form:t,busy:i.asReadonly,copy:()=>e(`Copied the image`,`success`),download:()=>{i.set(!0),setTimeout(()=>{i.set(!1),e(`Saved molstar-image.${t.values.value.format.name}`,`success`)},700)}}}var vt,yt,bt;function xt(){return(xt=e((()=>{m(),k(),C(),u(),h(),d(),vt={resolution:g.MappedStatic(`viewport`,{viewport:g.Group({},{isFlat:!0}),hd:g.Group({},{isFlat:!0}),"full-hd":g.Group({},{isFlat:!0}),"ultra-hd":g.Group({},{isFlat:!0}),"8k-ultra-hd":g.Group({},{isFlat:!0}),custom:g.Group({width:g.Numeric(1920,{min:128,max:8192,step:1}),height:g.Numeric(1080,{min:128,max:8192,step:1})},{isFlat:!0})},{options:[[`viewport`,`Viewport`],[`hd`,`HD (1280 × 720)`],[`full-hd`,`Full HD (1920 × 1080)`],[`ultra-hd`,`Ultra HD (3840 × 2160)`],[`8k-ultra-hd`,`8K (7680 × 4320)`],[`custom`,`Custom`]]}),format:g.MappedStatic(`png`,{png:g.Group({},{isFlat:!0}),jpeg:g.Group({quality:g.Numeric(.9,{min:0,max:1,step:.01})},{isFlat:!0}),webp:g.Group({quality:g.Numeric(.9,{min:0,max:1,step:.01})},{isFlat:!0})},{options:[[`png`,`PNG`],[`jpeg`,`JPEG`],[`webp`,`WebP`]]}),transparent:g.Boolean(!1),axes:g.MappedStatic(`off`,{on:g.Group({location:g.Select(`bottom-left`,[[`bottom-left`,`Bottom left`],[`bottom-right`,`Bottom right`],[`top-left`,`Top left`],[`top-right`,`Top right`]]),scale:g.Numeric(.33,{min:.1,max:2,step:.01}),labels:g.Boolean(!0)},{isFlat:!0}),off:g.Group({},{isFlat:!0})},{cycle:!0,label:`Axes`}),illumination:g.Group({extraIterations:g.Numeric(1,{min:0,max:5,step:1},{label:`Extra iterations`}),targetIterationTimeMs:g.Numeric(300,{min:100,max:3e3,step:10},{label:`Iteration time (ms)`})},{label:`Illumination`})},yt={viewport:[1366,812],hd:[1280,720],"full-hd":[1920,1080],"ultra-hd":[3840,2160],"8k-ultra-hd":[7680,4320]},bt={x:.17,y:.1,width:.66,height:.8}})))()}var J;function St(){return(St=e((()=>{n(),J={action:`msp-viewer-measurements-add-action`,add:`msp-viewer-measurements-add-add`,added:`msp-viewer-measurements-add-added`,addedAction:`msp-viewer-measurements-add-addedAction`,addedIcon:`msp-viewer-measurements-add-addedIcon`,addedItem:`msp-viewer-measurements-add-addedItem`,addedRow:`msp-viewer-measurements-add-addedRow`,addedValue:`msp-viewer-measurements-add-addedValue`,caption:`msp-viewer-measurements-add-caption`,chevron:`msp-viewer-measurements-add-chevron`,grip:`msp-viewer-measurements-add-grip`,hint:`msp-viewer-measurements-add-hint`,index:`msp-viewer-measurements-add-index`,kind:`msp-viewer-measurements-add-kind`,kindHint:`msp-viewer-measurements-add-kindHint`,kindTitle:`msp-viewer-measurements-add-kindTitle`,kinds:`msp-viewer-measurements-add-kinds`,more:`msp-viewer-measurements-add-more`,optionsToggle:`msp-viewer-measurements-add-optionsToggle`,point:`msp-viewer-measurements-add-point`,pointActions:`msp-viewer-measurements-add-pointActions`,pointLabel:`msp-viewer-measurements-add-pointLabel`,points:`msp-viewer-measurements-add-points`,slot:`msp-viewer-measurements-add-slot`,style:`msp-viewer-measurements-add-style`},t(`viewer/views/structure/measurements-add.module.css`,`@layer msp.components {
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
`)})))()}function Ct(e){let{model:t}=e,n=t.points.pipe(l(e=>e.slice(0,Dt))),r=t.points.pipe(l(e=>Math.max(0,e.length-Dt)),O()),o=f(!1),c;return s(`div`,{class:J.add,children:[i(`p`,{class:J.caption,children:`Points · the latest selections`}),s(`div`,{class:J.points,ref:e=>c=e,children:[i(E,{each:n,fallback:()=>i(`p`,{class:J.hint,children:`Select atoms or residues (Select mode, Shift adds): the latest ones become the points to measure.`}),children:(e,n)=>i(wt,{model:t,point:e,index:n,onGrab:n=>xe(n,c,e.id,n=>t.movePointTo(e.id,n))})},e=>e.id),i(D,{when:r.pipe(l(e=>e>0)),children:()=>i(`p`,{class:J.more,children:r.pipe(l(e=>`+${e} older, not used`))})})]}),i(`p`,{class:J.caption,children:`Measure`}),i(`div`,{class:J.kinds,children:t.kinds.map(e=>i(Tt,{model:t,kind:e}))}),i(D,{when:t.added.pipe(l(e=>e.length>0)),children:()=>s(a,{children:[i(`p`,{class:J.caption,children:`Added`}),i(`div`,{class:J.added,children:i(E,{each:t.added,children:e=>i(Et,{model:t,node:e})},e=>e.id)})]})}),s(`button`,{type:`button`,class:J.optionsToggle,"aria-expanded":o,onClick:()=>o.set(!o.value),children:[i(M,{name:`chevron-right`,size:14,class:J.chevron}),`Options`]}),i(D,{when:o,children:()=>i(_,{form:t.options})})]})}function wt(e){let{model:t,point:n}=e;return s(`div`,{class:J.point,"data-id":n.id,onPointerEnter:()=>t.highlightPoint?.(n.id),onPointerLeave:()=>t.highlightPoint?.(void 0),children:[s(`span`,{class:J.slot,children:[i(`span`,{class:J.index,children:e.index.pipe(l(e=>`${e+1}`))}),i(`span`,{class:J.grip,"aria-hidden":`true`,"data-tip":`Drag to reorder`,onPointerDown:e.onGrab,children:i(M,{name:`grip-vertical`,size:13})})]}),i(`button`,{type:`button`,class:J.pointLabel,title:`Focus`,onClick:()=>t.focusPoint(n.id),children:n.label}),s(`span`,{class:J.pointActions,children:[i(`button`,{type:`button`,class:J.action,"aria-label":`Move up`,title:`Move up`,onClick:()=>t.movePoint(n.id,-1),children:i(M,{name:`arrow-up`,size:13})}),i(`button`,{type:`button`,class:J.action,"aria-label":`Move down`,title:`Move down`,onClick:()=>t.movePoint(n.id,1),children:i(M,{name:`arrow-down`,size:13})}),i(`button`,{type:`button`,class:J.action,"aria-label":`Remove`,title:`Remove`,onClick:()=>t.removePoint(n.id),children:i(M,{name:`x`,size:13})})]})]})}function Tt(e){let{model:t,kind:n}=e,r=t.points.pipe(l(e=>n.points===0?e.length>0:e.length>=n.points),O()),a=n.points===0?r.pipe(l(e=>e?`of the selection`:`needs a selection`)):r.pipe(l(e=>e?n.points===1?`point 1`:`points 1–${n.points}`:`needs ${n.points} points`));return s(`button`,{type:`button`,class:J.kind,disabled:r.pipe(l(e=>!e)),onClick:()=>t.add(n.id),children:[i(`span`,{class:J.kindTitle,children:n.title}),i(`span`,{class:J.kindHint,children:a})]})}function Et(e){let{model:t,node:n}=e,r=f(!1),a=t.styleOf(n);return s(`div`,{class:J.addedItem,children:[s(`div`,{class:J.addedRow,"data-hidden":n.isHidden.pipe(l(e=>e?``:void 0)),children:[i(`span`,{class:J.pointLabel,children:n.label}),i(`span`,{class:J.addedValue,children:n.description}),s(`span`,{class:J.pointActions,children:[i(`button`,{type:`button`,class:J.addedAction,title:n.isHidden.pipe(l(e=>e?`Show`:`Hide`)),onClick:()=>n.toggleVisibility(),children:i(D,{when:n.isHidden,fallback:()=>i(M,{name:`eye`,size:14}),children:()=>i(M,{name:`eye-off`,size:14})})}),a?i(`button`,{type:`button`,class:J.addedAction,title:`Style`,"aria-label":`Style`,"aria-expanded":r,onClick:()=>r.set(!r.value),children:i(M,{name:`sliders-horizontal`,size:14})}):null,i(`button`,{type:`button`,class:J.addedAction,title:`Remove`,"aria-label":`Remove`,onClick:()=>n.remove(),children:i(M,{name:`x`,size:13})})]})]}),a?i(D,{when:r,reveal:!0,children:()=>i(`div`,{class:J.style,children:i(_,{form:a})})}):null]})}var Dt;function Ot(){return(Ot=e((()=>{C(),u(),j(),L(),T(),d(),St(),c(),Dt=4})))()}function kt(e,t){let n=f([{id:`p1`,label:`CYS 442 SG`},{id:`p2`,label:`HEM 508 FE`},{id:`p3`,label:`ARG 105 NH1`}]),r=(e,t)=>e.slice(0,t).map(e=>e.label).join(` – `);return{points:n.asReadonly,movePoint:(e,t)=>{let r=[...n.value],i=r.findIndex(t=>t.id===e),a=i+t;i<0||a<0||a>=r.length||([r[i],r[a]]=[r[a],r[i]],n.set(r))},movePointTo:(e,t)=>{let r=n.value.find(t=>t.id===e);if(!r)return;let i=n.value.filter(t=>t.id!==e);i.splice(Math.max(0,Math.min(i.length,t)),0,r),n.set(i)},removePoint:e=>n.set(n.value.filter(t=>t.id!==e)),focusPoint:e=>t(`Focused on ${n.value.find(t=>t.id===e)?.label}`),kinds:jt,add:i=>{let a=jt.find(e=>e.id===i),o=n.value,s=a.points===0?`Selection`:r(o,a.points);e.addMeasurement(a.points===0?`${a.title} · selection`:s,a.points===0?Y[i]:`${a.title}${Y[i]?` · ${Y[i]}`:``}`,a.icon),t(`Added ${a.title.toLowerCase()}: ${s}`)},added:e.measurements,styleOf:t=>e.measurementStyle(t),options:new p({distanceUnitLabel:g.Text(`Å`,{label:`Distance unit`}),textColor:g.Color(0,{label:`Text color`}),textSize:g.Numeric(.5,{min:.1,max:5,step:.1},{label:`Text size`})})}}function At(e,t){e.registerSections([{id:`measure`,slot:`selection`,title:`Measure`,icon:`ruler`,keywords:[`distance`,`angle`,`dihedral`,`label`,`orientation`,`plane`],order:2,render:y(()=>i(Ct,{model:t}))}])}var jt,Y;function Mt(){return(Mt=e((()=>{m(),v(),h(),d(),Ot(),c(),jt=[{id:`distance`,title:`Distance`,icon:`measure-distance`,points:2},{id:`angle`,title:`Angle`,icon:`measure-angle`,points:3},{id:`dihedral`,title:`Dihedral`,icon:`measure-angle`,points:4},{id:`label`,title:`Label`,icon:`tag`,points:1},{id:`orientation`,title:`Orientation`,icon:`move-3d`,points:0},{id:`plane`,title:`Plane`,icon:`square`,points:0}],Y={distance:`2.31 Å`,angle:`104.2°`,dihedral:`−62.8°`,label:``,orientation:`principal axes`,plane:`best fit`}})))()}function Nt(e,t){let n=f(`12 residues`),r=new p(Pt),a=new p({label:g.Text(`Selection`,{label:`Label`,isEssential:!0}),representation:g.Select(`ball-and-stick`,[[`cartoon`,`Cartoon`],[`ball-and-stick`,`Ball & Stick`],[`spacefill`,`Spacefill`],[`molecular-surface`,`Molecular Surface`]],{label:`Representation`,isEssential:!0})});return e.registerTabs([{id:`selection`,title:`Selection`,icon:`mouse-pointer-click`,order:1.2,render:y(({ctx:e})=>i(I,{shell:e.shell,slot:`selection`,focus:e.focus,collapsed:!0}))}]),e.registerSections([{id:`theme`,slot:`selection`,title:`Color, transparency, material…`,icon:`palette`,order:0,render:y(()=>s(`div`,{style:`display: grid; gap: var(--msp-space-3)`,children:[i(_,{form:r}),i(R,{icon:`paintbrush`,label:`Apply`,onReset:()=>r.reset(),onApply:()=>{let e=r.values.value;t(`Applied ${e.action.name} to ${n.value} (${e.representation})`)}})]}))},{id:`component`,slot:`selection`,title:`Create component`,icon:`layers`,order:1,render:y(()=>s(`div`,{style:`display: grid; gap: var(--msp-space-3)`,children:[i(_,{form:a}),i(R,{icon:`plus`,label:`Create`,onReset:()=>a.reset(),onApply:()=>t(`Component "${a.values.value.label}" from ${n.value}`)})]}))}]),{summary:n.asReadonly,actions:[{id:`edit`,label:`Color, theme, component…`,icon:`paintbrush`,run:()=>e.show(`selection`)},{id:`measure`,label:`Measure…`,icon:`ruler`,run:()=>e.show(`selection`,`measure`)},{id:`focus`,label:`Focus`,icon:`focus`,run:()=>t(`Focused on ${n.value}`)}],clear:()=>n.set(void 0)}}var Pt;function Ft(){return(Ft=e((()=>{m(),L(),v(),h(),d(),c(),Pt={action:g.MappedStatic(`color`,{color:g.Group({color:g.Color(37119,{isEssential:!0})}),"reset-color":g.EmptyGroup(),transparency:g.Group({value:g.Numeric(.5,{min:0,max:1,step:.01},{isEssential:!0})}),emissive:g.Group({value:g.Numeric(.5,{min:0,max:1,step:.01},{isEssential:!0})}),material:g.Group({metalness:g.Numeric(0,{min:0,max:1,step:.01},{isEssential:!0}),roughness:g.Numeric(1,{min:0,max:1,step:.01},{isEssential:!0})}),"reset-material":g.EmptyGroup(),clipping:g.Group({groups:g.Select(`1`,[[`1`,`Group 1`],[`2`,`Group 2`],[`3`,`Group 3`]])}),wiggle:g.Group({amplitude:g.Numeric(1,{min:0,max:5,step:.1},{isEssential:!0})})},{label:`Action`,isEssential:!0,options:[[`color`,`Color`],[`reset-color`,`Reset color`],[`transparency`,`Transparency`],[`emissive`,`Emissive`],[`material`,`Material`],[`reset-material`,`Reset material`],[`clipping`,`Clipping`],[`wiggle`,`Wiggle`]]}),representation:g.Select(`all`,[[`all`,`All`],[`cartoon`,`Cartoon`],[`ball-and-stick`,`Ball & Stick`],[`molecular-surface`,`Molecular Surface`]],{label:`Representations`,isEssential:!0})}})))()}function It(e,t={}){let n=1,r=(e,r={})=>{let i=`s${n}`,a=t.images?Bt[(n-1)%Bt.length]:void 0;return n++,{id:i,name:e,image:a,timestamp:`today`,...r}},i=t.empty?[]:t.count?Array.from({length:t.count},(e,t)=>r([`Overview`,`Active site`,`Heme pocket`,`Substrate channel`,`Surface`][t%5]+` ${t+1}`,{description:t%2?`Step ${t+1} of the tour.`:void 0})):[r(`Overview`,{key:`overview`,description:`Cytochrome **P450 3A4** with its heme cofactor.

See the [active site](#active-site).`,timestamp:`9:05`}),r(`Active site`,{key:`active-site`,description:"### Active site\n- Heme iron coordinated by `Cys442`",timestamp:`9:07`}),r(`Surface`,{timestamp:`9:12`})],a=f(i),o=f(i[1]?.id),s=new Map,c=(e,t)=>a.set(a.value.map(n=>n.id===e?{...n,...t}:n)),l=e=>a.value.find(t=>t.id===e)?.name;return{entries:a.asReadonly,current:o.asReadonly,saveOptions:new p(Rt),entryOptions:e=>{if(!a.value.some(t=>t.id===e))return;let t=s.get(e);return t||s.set(e,t=new p(zt)),t},add:t=>{let n=r(t??`Snapshot ${a.value.length+1}`,{timestamp:`just now`});a.set([...a.value,n]),o.set(n.id),e(`Saved snapshot “${n.name}”`,`success`)},apply:t=>{o.set(t),e(`Applied “${l(t)}”`)},update:(e,t)=>c(e,t),replace:t=>{c(t,{timestamp:`just now`}),e(`Replaced “${l(t)}” with the current view`,`success`)},move:(e,t)=>{let n=[...a.value],r=n.findIndex(t=>t.id===e),i=r+t;r<0||i<0||i>=n.length||([n[r],n[i]]=[n[i],n[r]],a.set(n))},moveTo:(e,t)=>{let n=a.value.filter(t=>t.id!==e),r=a.value.find(t=>t.id===e);r&&(n.splice(Math.max(0,Math.min(n.length,t)),0,r),a.set(n))},remove:t=>{e(`Removed “${l(t)}”`),a.set(a.value.filter(e=>e.id!==t)),o.value===t&&o.set(void 0)},clear:()=>{a.set([]),o.set(void 0)},download:t=>e(t===`session`?`Saved state.molx`:`Saved state.molj`,`success`),open:t=>e(`Opening ${t.map(e=>e.name).join(`, `)}…`)}}var Lt,Rt,zt,Bt;function Vt(){return(Vt=e((()=>{m(),h(),d(),Lt=g.MappedStatic(`animate`,{animate:g.Group({durationInMs:g.Numeric(250,{min:100,max:5e3,step:50},{label:`Duration (ms)`}),easing:g.Select(`linear`,[[`linear`,`Linear`],[`ease-in-out`,`Ease in-out`],[`ease-out`,`Ease out`]])},{isFlat:!0}),instant:g.Group({},{isFlat:!0})},{label:`Camera`,options:[[`animate`,`Animate`],[`instant`,`Instant`]]}),Rt={durationInMs:g.Numeric(1500,{min:100,max:15e3,step:100},{label:`Show for (ms)`}),data:g.Boolean(!0,{label:`Data`}),camera:g.Boolean(!0,{label:`Camera`}),cameraTransition:Lt,canvas3d:g.Boolean(!0,{label:`Canvas settings`}),componentManager:g.Boolean(!0,{label:`Component options`}),structureSelection:g.Boolean(!1,{label:`Selection`}),animation:g.Boolean(!0,{label:`Animation`}),startAnimation:g.Boolean(!1,{label:`Start animation`}),behavior:g.Boolean(!1,{label:`Behaviors`}),interactivity:g.Boolean(!0,{label:`Interactivity`}),image:g.Boolean(!1,{label:`Thumbnail`,description:`Save a small image with each snapshot.`})},zt={durationInMs:g.Numeric(1500,{min:100,max:15e3,step:100},{label:`Show for (ms)`}),cameraTransition:Lt},Bt=[`radial-gradient(circle at 40% 55%, #8f6fd6 0 22%, #cfd4e6 23%)`,`radial-gradient(circle at 55% 45%, #d06a8c 0 18%, #6c7ad6 19% 30%, #d9dbe6 31%)`,`radial-gradient(circle at 50% 50%, #5ea3d6 0 30%, #e1e3ea 31%)`]})))()}function Ht(e,t,n,r,i){return{id:e,title:`Update ${t}`,icon:`pencil`,form:new p(n),applyLabel:`Update`,apply:()=>i(`Updated ${r}`)}}function X(e,t,n,r,i,a){return{id:e,title:t,icon:n,form:new p(r),applyLabel:i,apply:()=>a(`${t}: applied`)}}function Ut(e){let t=f(new Set([`water`,`water-bs`])),n=f(new Set),r=e=>e.filter(e=>!n.value.has(e.ref)).map(e=>({...e,visible:e.visible===void 0?void 0:!t.value.has(e.ref),children:e.children?r(e.children):void 0})),i=f(r(Wt)),a=()=>i.set(r(Wt)),o=f(`structure`),s=(e,t=i.value)=>{for(let n of t){if(n.ref===e)return n;let t=n.children&&s(e,n.children);if(t)return t}},c=new Map;return{roots:i.asReadonly,selected:o.asReadonly,select:e=>o.set(e),inspect:t=>{let n=s(t);if(!n)return;let r=c.get(t);if(!r){let i=Gt[n.transform]?.();r={node:n,updates:[...i?[Ht(`update`,n.transform,i,n.label,e)]:[],...(n.decorators??[]).flatMap(t=>{let r=Kt[t]?.();return r?[Ht(`update:${t}`,t,r,`${n.label} · ${t}`,e)]:[]})],actions:qt[n.transform]?.(e)??[]},c.set(t,r)}return{...r,node:n}},toggleVisible:e=>{let n=new Set(t.value);n.has(e)?n.delete(e):n.add(e),t.set(n),a()},remove:t=>{e(`Removed ${s(t)?.label}`),n.set(new Set([...n.value,t])),o.value===t&&o.set(void 0),a()}}}var Wt,Gt,Kt,qt;function Jt(){return(Jt=e((()=>{m(),h(),d(),Wt=[{ref:`download`,label:`1tqn.bcif`,description:`PDBe · BinaryCIF`,icon:`download`,transform:`Download`,children:[{ref:`cif`,label:`CIF File`,description:`1 block`,icon:`file-code`,transform:`Parse CIF`,children:[{ref:`trajectory`,label:`Trajectory`,description:`1 model`,icon:`trajectory`,transform:`Trajectory from mmCIF`,children:[{ref:`model`,label:`Model 1`,description:`3,999 atoms`,icon:`box`,transform:`Model from Trajectory`,decorators:[`Custom Model Properties`],children:[{ref:`structure`,label:`Assembly 1`,description:`3,999 elements`,icon:`structure`,transform:`Structure from Model`,decorators:[`Custom Structure Properties`],visible:!0,children:[{ref:`polymer`,label:`Polymer`,description:`3,766 elements`,icon:`layers`,transform:`Structure Component`,visible:!0,children:[{ref:`polymer-cartoon`,label:`Cartoon`,description:`Chain ID`,icon:`cartoon`,transform:`3D Representation`,visible:!0}]},{ref:`ligand`,label:`Ligand`,description:`43 elements`,icon:`layers`,transform:`Structure Component`,visible:!0,children:[{ref:`ligand-bs`,label:`Ball & Stick`,description:`Element`,icon:`ball-and-stick`,transform:`3D Representation`,visible:!0}]},{ref:`water`,label:`Water`,description:`186 elements`,icon:`layers`,transform:`Structure Component`,visible:!1,children:[{ref:`water-bs`,label:`Ball & Stick`,description:`Element`,icon:`ball-and-stick`,transform:`3D Representation`,visible:!1}]}]}]}]}]}]},{ref:`density`,label:`emd_2984.map`,icon:`download`,transform:`Download`,status:`error`,error:`Not found (404)`}],Gt={Download:()=>({url:g.Text(`https://www.ebi.ac.uk/pdbe/entry-files/download/1tqn.bcif`,{label:`URL`}),isBinary:g.Boolean(!0,{label:`Binary`}),label:g.Text(`1tqn.bcif`)}),"Model from Trajectory":()=>({modelIndex:g.Numeric(0,{min:0,max:0,step:1},{label:`Model index`})}),"Structure from Model":()=>({type:g.MappedStatic(`assembly`,{auto:g.Group({},{isFlat:!0}),model:g.Group({},{isFlat:!0}),assembly:g.Group({id:g.Select(`1`,[[`1`,`Assembly 1`]])},{isFlat:!0}),symmetry:g.Group({ijkMin:g.Numeric(-1),ijkMax:g.Numeric(1)},{isFlat:!0})},{label:`Type`,options:[[`auto`,`Auto`],[`model`,`Model`],[`assembly`,`Assembly`],[`symmetry`,`Symmetry`]]})}),"Structure Component":()=>({label:g.Text(`Polymer`),type:g.Select(`static`,[[`static`,`Static`],[`expression`,`Expression`],[`bundle`,`Bundle`]]),nullIfEmpty:g.Boolean(!0,{label:`Empty is none`})}),"3D Representation":()=>({type:g.Select(`cartoon`,[[`cartoon`,`Cartoon`],[`ball-and-stick`,`Ball & Stick`],[`spacefill`,`Spacefill`],[`molecular-surface`,`Molecular Surface`]]),colorTheme:g.Select(`chain-id`,[[`chain-id`,`Chain ID`],[`element-symbol`,`Element`],[`uniform`,`Uniform`],[`secondary-structure`,`Secondary structure`]]),sizeTheme:g.Select(`uniform`,[[`uniform`,`Uniform`],[`physical`,`Physical`]]),alpha:g.Numeric(1,{min:0,max:1,step:.01},{label:`Opacity`})})},Kt={"Custom Model Properties":()=>({autoAttach:g.Boolean(!0,{label:`Auto attach`}),validation:g.Boolean(!1,{label:`wwPDB validation`}),sifts:g.Boolean(!0,{label:`SIFTS mapping`})}),"Custom Structure Properties":()=>({accessibleSurfaceArea:g.Boolean(!1,{label:`Accessible surface area`}),interactions:g.Boolean(!1,{label:`Interactions`}),secondaryStructure:g.Boolean(!0,{label:`Secondary structure`})})},qt={"Structure from Model":e=>[X(`add-component`,`Add Component`,`layers`,{label:g.Text(`Component`),selection:g.Text(`ligand`)},`Add`,e),X(`download-density`,`Volume Streaming`,`volume`,{method:g.Select(`em`,[[`em`,`EM`],[`x-ray`,`X-ray`]])},`Enable`,e)],"Structure Component":e=>[X(`add-representation`,`Add Representation`,`plus`,{type:g.Select(`ball-and-stick`,[[`cartoon`,`Cartoon`],[`ball-and-stick`,`Ball & Stick`],[`spacefill`,`Spacefill`]])},`Add`,e)],"Trajectory from mmCIF":e=>[X(`load-coords`,`Load Coordinates`,`trajectory`,{url:g.Text(``,{label:`URL`})},`Load`,e)]}})))()}var Z;function Yt(){return(Yt=e((()=>{n(),Z={entries:`msp-viewer-superpose-entries`,entry:`msp-viewer-superpose-entry`,hint:`msp-viewer-superpose-hint`,index:`msp-viewer-superpose-index`,label:`msp-viewer-superpose-label`,role:`msp-viewer-superpose-role`,superpose:`msp-viewer-superpose-superpose`},t(`viewer/views/structure/superpose.module.css`,`@layer msp.components {
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
`)})))()}function Xt(e){let{model:t}=e;return s(`div`,{class:Z.superpose,children:[i(_,{form:t.form}),i(`div`,{class:Z.entries,children:i(E,{each:t.entries,fallback:()=>i(`p`,{class:Z.hint,children:t.hint}),children:(e,n)=>s(`button`,{type:`button`,class:Z.entry,title:`Focus`,onClick:()=>t.focus(e.id),children:[i(`span`,{class:Z.index,children:n.pipe(l(e=>`${e+1}`))}),i(`span`,{class:Z.label,children:e.label}),n.value===0?i(`span`,{class:Z.role,children:`reference`}):null]})},e=>e.id)}),i(R,{icon:`superpose`,label:`Superpose`,disabled:t.ready.pipe(l(e=>!e)),onReset:()=>t.form.reset(),onApply:()=>t.superpose()})]})}function Zt(){return(Zt=e((()=>{u(),L(),T(),Yt(),c()})))()}function Q(e,t){let n=f(t);return e.subscribe(e=>n.set(e)),n.asReadonly}function Qt(e,t){let n=new p(tn),r=e.roots.pipe(l(e=>e.filter(e=>e.kind===`structure`))),i=n.values.pipe(l(e=>e.method)),a={chains:[{id:`c1`,label:`1TQN · Chain A`},{id:`c2`,label:`1W0E · Chain A`}],"tm-align":[{id:`t1`,label:`1TQN · Chain A`},{id:`t2`,label:`1W0E · Chain A`}],ligands:[{id:`l1`,label:`1TQN · HEM 508`}],atoms:[]},o=A([i,r]).pipe(l(([e,t])=>e===`uniprot`?t.map(e=>({id:e.id,label:`${e.label.value} · all chains`})):a[e]??[])),s=A([i,o]).pipe(l(([e,t])=>e===`atoms`?t.length>=1:t.length>=2)),c=A([i,o]).pipe(l(([e,t])=>t.length===1?`${nn[e]??``} One so far.`:nn[e]??``));return{available:Q(r.pipe(l(e=>e.length)).pipe(l(e=>e>1)),!1),form:n,entries:Q(o,[]),ready:Q(s,!1),hint:Q(c,``),focus:e=>t(`Focused on ${Object.values(a).flat().find(t=>t.id===e)?.label??e}`),superpose:()=>t(`Superposed by ${n.values.value.method} · RMSD 0.38 Å`)}}function $t(e,t){e.registerSections([{id:`superpose`,slot:`selection`,title:`Superpose`,icon:`superpose`,keywords:[`superposition`,`align`,`tm-align`,`rmsd`,`uniprot`,`sifts`],order:3,when:()=>t.available.value,render:y(()=>i(Xt,{model:t}))}])}var en,tn,nn;function rn(){return(rn=e((()=>{m(),k(),u(),v(),h(),d(),Zt(),c(),en=e=>e.method!==`chains`&&e.method!==`uniprot`,tn={method:g.Select(`chains`,[[`chains`,`Chains`],[`tm-align`,`TM-align`],[`uniprot`,`UniProt (SIFTS)`],[`ligands`,`Ligands`],[`atoms`,`Atoms`]],{isEssential:!0,description:`What the structures are superposed by.`}),alignSequences:g.Boolean(!0,{label:`Align sequences`,isEssential:!0,description:`Guide the superposition by a sequence alignment of the chains.`,hideIf:e=>e.method!==`chains`}),traceOnly:g.Boolean(!0,{label:`Trace only`,isEssential:!0,description:`Use only CA (and equivalent) atoms.`,hideIf:en})},nn={chains:`Select one chain (or residues within it) in each of two or more structures.`,"tm-align":`Select one chain in each of two or more structures; best when sequence identity is low.`,ligands:`Select one ligand in each of two or more structures.`,atoms:`Select the same atoms, in the same order, in each structure.`}})))()}function an(e,t){let n=_t((e,n)=>t.post(e,n)),r=f(void 0),a=`display: grid; gap: var(--msp-space-3)`,o=new p({kind:g.Select(`session`,[[`session`,`Session (.molx) · with data`],[`state`,`State (.molj) · description only`]])}),c=new p({animation:g.Select(`spin`,[[`spin`,`Camera spin`],[`rock`,`Camera rock`],[`snapshots`,`State snapshots`]]),resolution:g.Select(`full-hd`,[[`hd`,`HD (1280 × 720)`],[`full-hd`,`Full HD (1920 × 1080)`],[`ultra-hd`,`Ultra HD (3840 × 2160)`]]),transparent:g.Boolean(!1)}),u=new p({format:g.Select(`glb`,[[`glb`,`GLB (glTF binary)`],[`stl`,`STL`],[`obj`,`OBJ`],[`usdz`,`USDZ (AR)`]])}),d=new p({format:g.Select(`cif`,[[`cif`,`mmCIF`],[`bcif`,`BinaryCIF`]])});e.registerOverlays([{id:`export`,title:`Export`,render:y(({ctx:e})=>i(I,{shell:e.shell,slot:`export`,focus:e.focus}))}]),e.registerSections([{id:`image`,slot:`export`,title:`Image`,icon:`camera`,order:0,render:y(()=>i(We,{model:n}))},{id:`session`,slot:`export`,title:`Session & state`,icon:`save`,order:1,render:y(()=>s(`div`,{style:a,children:[i(_,{form:o}),i(R,{icon:`download`,label:`Download`,onApply:()=>t.post(o.values.value.kind===`session`?`Saved state.molx`:`Saved state.molj`,`success`)})]}))},{id:`animation`,slot:`export`,title:`Animation`,icon:`film`,keywords:[`mp4`,`video`,`movie`],order:10,render:y(()=>s(`div`,{style:a,children:[i(_,{form:c}),i(R,{icon:`film`,label:r.asReadonly.pipe(l(e=>e===void 0?`Render`:`Rendering ${Math.round(e*100)}%`)),busy:r.asReadonly.pipe(l(e=>e!==void 0)),onReset:()=>c.reset(),onApply:()=>{let e=0;r.set(0);let n=e=>{clearInterval(o),r.set(void 0),t.setTasks(t.tasks.value.filter(e=>e.id!==`mp4`)),t.post(e,`success`)},i=()=>({id:`mp4`,label:`Rendering animation.mp4`,progress:e,overlay:!0,abort:()=>n(`Rendering cancelled`)}),a=()=>t.setTasks([...t.tasks.value.filter(e=>e.id!==`mp4`),i()]);a();let o=setInterval(()=>{e=Math.min(1,e+.04),r.set(e),a(),e>=1&&n(`Rendered animation.mp4 (6 s)`)},120)}})]}))},{id:`geometry`,slot:`export`,title:`Geometry`,icon:`box`,keywords:[`glb`,`stl`,`obj`,`usdz`,`mesh`,`3d print`,`ar`],order:11,render:y(()=>s(`div`,{style:a,children:[i(_,{form:u}),i(R,{icon:`download`,label:`Download`,onApply:()=>t.post(`Exported scene.${u.values.value.format}`,`success`)})]}))},{id:`models`,slot:`export`,title:`Models`,icon:`file`,keywords:[`mmcif`,`bcif`,`cif`,`coordinates`],order:12,render:y(()=>s(`div`,{style:a,children:[i(_,{form:d}),i(R,{icon:`download`,label:`Download`,onApply:()=>t.post(`Saved 1tqn.${d.values.value.format}`,`success`)})]}))}])}function on(e){let t=(t,n,r,i,a={})=>{let o=f(r);return{id:t,title:n,options:i,value:o.asReadonly,set:t=>{o.set(t),e(`Sequence: ${n.toLowerCase()} ${i.find(e=>e[0]===t)?.[1]??t}`)},...a}},n=t(`mode`,`Mode`,`single`,[[`single`,`Chain`],[`polymers`,`Polymers`],[`all`,`Everything`]]),r=n.value.pipe(l(e=>e===`single`));return[t(`structure`,`Structure`,`1tqn`,[[`1tqn`,`1TQN | Crystal structure of human microsomal P450 3A4`]],{display:()=>`1TQN`,strong:!0}),n,t(`entity`,`Entity`,`1`,[[`1`,`1: Cytochrome P450 3A4`],[`2`,`2: Protoporphyrin IX containing Fe`],[`3`,`3: Sulfate ion`],[`4`,`4: Water`]],{display:e=>[`Cytochrome P450 3A4`,`Protoporphyrin IX containing Fe`,`Sulfate ion`,`Water`][Number(e)-1],visible:r}),t(`chain`,`Chain`,`A`,[[`A`,`A`]],{display:e=>`Chain ${e}`,visible:r})]}function sn(e={}){return{id:`viewer`,title:`Viewer mode`,icon:`molstar`,description:`Load structures and data, explore and analyze them`,activate:({shell:t,status:n,loaded:r,background:o,openCommandMenu:c,modes:u,mode:d,switchMode:p})=>{let m=f(`interact`),h=f(`residue`),g=f(!1),_=f([]),v=f(!r),b=v.asReadonly.pipe(l(e=>!e)),x=me({preset:e.preset,onHighlight:e=>_.set(e?[e]:[]),onAction:e=>n.post(e),onMeasure:()=>t.show(`selection`,`measure`)});$t(t,Qt(x,e=>n.post(e))),At(t,kt(x,e=>n.post(e)));let te={lines:_.asReadonly},S,C={isEmpty:v.asReadonly,summary:f(e.preset===`many`?`4 structures · CYP3A4, superposed on 1TQN`:e.preset===`em`?`EMD-2984 and 5A1A`:`1TQN · Assembly 1 · 3,624 atoms`).asReadonly,clear:()=>{x.clear(),S?.(),S=void 0,n.setTasks([]),v.set(!0),n.post(`Cleared: nothing loaded`)}},w={...we((e,t)=>n.post(e,t),{remoteStates:e.remoteStates}),session:C},T=It((e,t)=>n.post(e,t)),E=Ut(e=>n.post(e)),O=re(e=>n.post(e)),k=ie(),j=De(t,()=>x.roots.value.filter(e=>e.kind===`structure`).length);if(j.register([{id:`session.clear`,title:`Clear session`,alias:[`clear`,`reset`,`remove everything`,`new session`],category:`Data`,icon:`trash-2`,when:()=>!v.value||`Nothing is loaded`,run:()=>(C.clear(),{message:``})}]),t.registerTabs([{id:`home`,compactBar:!0,title:`Home`,heading:()=>i(ae,{live:!0}),icon:`prism`,order:0,place:`head`,render:y(()=>i(ve,{home:w,onOpenCommandMenu:()=>c(),modes:{list:u,active:ne(d),choose:e=>e!==d&&p(e)}}))},{id:`structure`,compactBar:!0,title:`Structure`,icon:`structure`,order:1,render:y(({ctx:e})=>i(he,{shell:e.shell,scene:x,presets:le(e=>n.post(e)),options:ue(),quickStyles:fe(e=>n.post(e)),openCommands:e=>c(e),onAction:e=>n.post(`${e===`preset`?`Apply preset`:e===`styles`?`Styles`:`Add component`}… opens in the command menu`)}))},{id:`snapshots`,title:`Snapshots`,icon:`images`,order:1.5,render:y(()=>i(tt,{model:T}))},{id:`state-tree`,title:`State tree`,icon:`list-tree`,order:2,render:y(()=>i(Ce,{model:E}))}]),r&&(S=t.registerTabs([{id:`sequence`,title:`Sequence`,icon:`sequence`,dock:`top`,render:y(({ctx:e})=>i(qe,{chain:{structure:`1TQN`,name:`Chain A`,info:`Cytochrome P450 3A4`,sequence:$,start:1},selectors:on(e=>n.post(e)),onCollapse:()=>e.shell.toggle(e.dock??`top`),onHover:e=>_.set(e===void 0?[]:[`${cn[$[e-1]]??`?`} ${e}`,`Chain A · 1TQN`]),onToggle:(e,t)=>n.post(`${t?`Selected`:`Deselected`} residue ${e}`)}))}])),w.remoteStates){let e=w.remoteStates;t.registerOverlays([{id:`remote-states`,title:`Remote states`,render:y(()=>i(Ze,{model:e}))}])}t.registerToolbar([{id:`reset`,place:`canvas`,group:`canvas`,visible:b,icon:`focus`,title:`Reset camera`,run:()=>n.post(`Camera reset`),menu:[{id:`reset-zoom`,label:`Reset zoom`,icon:`zoom-out`,hint:`Fit everything, keep the orientation`,run:()=>n.post(`Zoom reset`)},{id:`orient-axes`,label:`Orient axes`,icon:`axis-3d`,hint:`Principal axes along the screen`,run:()=>n.post(`Oriented along the principal axes`)},{id:`reset-axes`,label:`Reset axes`,icon:`rotate-ccw`,hint:`Back to the default orientation`,run:()=>n.post(`Axes reset`)}]},{id:`animation`,group:`scene`,icon:`clapperboard`,title:`Animation`,overlay:`animation`},{id:`canvas-settings`,group:`scene`,icon:`monitor-cog`,title:`Canvas settings`,overlay:`canvas-settings`},{id:`export`,group:`export`,icon:`download`,title:`Export…`,overlay:`export`},...w.remoteStates?[{id:`remote-states`,group:`export`,icon:`cloud-upload`,title:`Remote states`,overlay:`remote-states`}]:[],{id:`rendering`,place:`canvas`,group:`canvas`,visible:b,icon:`lightbulb`,title:`Illumination & XR`,pressed:g.asReadonly,menu:[{id:`illumination`,label:`Illumination`,icon:`lightbulb`,hint:`Path-traced global illumination`,pressed:g.asReadonly,run:()=>g.set(!g.value)},{id:`xr`,label:`Enter XR`,icon:`glasses`,hint:`View on a headset`,run:()=>n.post(`XR is not available in this browser.`,`warning`)}]},{id:`sequence`,place:`canvas`,group:`view`,icon:`sequence`,title:`Sequence`,visible:A([t.dock(`top`).tabs,t.dock(`top`).active]).pipe(l(([e,t])=>e.length>0&&!t)),run:()=>t.toggle(`top`)}]),an(t,n),dt(t),st(t,e=>n.post(e));let M=Nt(t,e=>n.post(e));if(r){n.post(`Loaded 1TQN (3,624 atoms) in 0.4 s`,`success`);let e=e=>()=>n.setTasks(n.tasks.value.filter(t=>t.id!==e));n.setTasks([{id:`density`,label:`Downloading density`,progress:.7,abort:e(`density`)},{id:`surface`,label:`Computing surface`,progress:.4,abort:e(`surface`)}])}let N={mode:m.asReadonly,setMode:e=>{e!==m.value&&(m.set(e),n.post(e===`select`?`Select: click to select, Shift+click to extend`:`Interact: click to focus`))},granularity:h.asReadonly,granularities:ln,setGranularity:e=>h.set(e)},P=e.playback;return{start:r?`structure`:`home`,commands:j,prefixes:Oe({manager:j,shell:t,scene:x,snapshots:O}),canvas:()=>i(D,{when:b,fallback:()=>i(ee,{empty:!0,background:o}),children:()=>i(ee,{empty:!1,background:o,onHover:e=>_.set(e===void 0?[]:[`${cn[$[e*4]]??`GLY`} ${e*4+1}`,`Chain A · 1TQN`])})}),overlays:()=>i(D,{when:b,children:()=>i(se,{model:te,area:()=>document.querySelector(`[data-msp-canvas]`)})}),playback:()=>P?.snapshots||P?.trajectory?i(D,{when:b,children:()=>s(a,{children:[P.snapshots?i(_e,{model:O}):null,P.trajectory?i(ge,{model:k}):null]})}):null,context:()=>i(D,{when:b,children:()=>i(Ve,{selection:M})}),canvasLead:()=>i(D,{when:b,children:()=>i(Ie,{...N})}),canvasAside:()=>i(D,{when:b,children:()=>i(Le,{...N})}),empty:v.asReadonly,bindings:[{title:`Camera`,bindings:[{action:`Rotate`,input:[`Drag`],or:[`One-finger drag`]},{action:`Move`,input:[`Right drag`],or:[`⌃`,`Drag`]},{action:`Zoom`,input:[`Scroll`],or:[`Pinch`]},{action:`Clip (move the slab)`,input:[`⇧`,`Scroll`]},{action:`Roll`,input:[`⇧`,`Drag`]},{action:`Reset the camera`,input:[`Double-click`,`empty space`]}]},{title:`Picking`,bindings:[{action:`Focus what is clicked (Interact)`,input:[`Click`]},{action:`Select what is clicked (Select)`,input:[`Click`]},{action:`Add to the selection`,input:[`⇧`,`Click`]},{action:`Select everything between`,input:[`⇧`,`Click`,`a second residue`]},{action:`Clear the selection`,input:[`Click`,`empty space`]},{action:`Show what is under the pointer`,input:[`Hover`]}]}],onDropFiles:e=>w.openFiles(e),dropFormats:w.formats}}}}var $,cn,ln;function un(){return(un=e((()=>{m(),k(),u(),w(),L(),v(),h(),d(),ze(),He(),Ge(),ye(),T(),Ye(),$e(),ot(),Se(),de(),ut(),gt(),Pe(),Te(),xt(),Mt(),ce(),pe(),Ft(),Vt(),Jt(),rn(),c(),$=`MALYGTHSHGLFKKLGIPGPTPLPFLGNILSYHKGFCMFDMECHKKYGKVWGFYDGQQPVLAITDPDMIKTVLVKECYSVFTNRRPFGPVGFMKSAISIAEDEEWKRLRSLLSPTFTSGKLKEMVPIIAQYGDVLVRNLRREAETGKPVTLKDVFGAYSMDVITSTSFGVNIDSLNNPQDPFVENTKKLLRFDFLDPFFLSITVFPFLIPILEVLNICVFPREVTNFLRKSVKRMKESRLEDTQKHRVDFLQLMIDSQNSKETESHKALSDLELVAQSIIFIFAGYETTSSVLSFIMYELATHPDVQQKLQEEIDAVLPNKAPPTYDTVLQMEYLDMVVNETLRLFPIAMRLERVCKKDVEINGMFIPKGVVVMIPSYALHRDPKYWTEPEKFLPERFSKKNKDNIDPYIYTPFGSGPRNCIGMRFALMNMKLALIRVLQNFSFKPCKETQIPLKLSLGGLLQPEKPVVLKVESRDGTVSGA`,cn={A:`ALA`,R:`ARG`,N:`ASN`,D:`ASP`,C:`CYS`,Q:`GLN`,E:`GLU`,G:`GLY`,H:`HIS`,I:`ILE`,L:`LEU`,K:`LYS`,M:`MET`,F:`PHE`,P:`PRO`,S:`SER`,T:`THR`,W:`TRP`,Y:`TYR`,V:`VAL`},ln=[{value:`element`,label:`Atom`,icon:`pick-atom`},{value:`residue`,label:`Residue`,icon:`pick-residue`},{value:`chain`,label:`Chain`,icon:`pick-chain`},{value:`entity`,label:`Entity`,icon:`pick-entity`},{value:`model`,label:`Model`,icon:`pick-model`},{value:`operator`,label:`Operator`,icon:`copy`},{value:`structure`,label:`Structure`,icon:`structure`},{value:`elementInstances`,label:`Atom`,icon:`pick-atom`,group:`All instances`},{value:`residueInstances`,label:`Residue`,icon:`pick-residue`,group:`All instances`},{value:`chainInstances`,label:`Chain`,icon:`pick-chain`,group:`All instances`}]})))()}function dn(e){return i(x,{...e,mode:sn(e)})}function fn(){return(fn=e((()=>{ce(),un(),c()})))()}export{Pe as a,sn as i,fn as n,un as r,dn as t};