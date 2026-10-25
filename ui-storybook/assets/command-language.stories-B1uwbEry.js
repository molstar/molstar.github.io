import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./jsx-runtime-DbCUSNU3.js";import{i as r,n as i,t as a}from"./real-viewer-Bej2U4vD.js";import{n as o}from"./story-root-DfeAHAKA.js";import{d as s}from"./scene-tree-B-CrD89j.js";import{n as c}from"./parts-yWU3uFwa.js";import{n as l,t as u}from"./prism-viewer-BiH3N8F7.js";var d,f,p,m;function h(){return(h=e((()=>{d={title:`A binding-site figure (PyMOL)`,dialect:`pymol`,scripts:[{name:`binding-site.pml`,text:`# Retinoic acid in CRABP-II (1CBS): the pocket around the ligand
load 1cbs.cif, cbs
hide everything
show cartoon
color grey80, cbs
set cartoon_transparency, 0.5

select lig, resn REA
select pocket, byres (polymer within 5 of lig)
show sticks, lig or pocket
hide sticks, hydro
util.cbag lig
util.cbac pocket

# The carboxylate's polar contacts: every pair within 4 Å
distance polar, lig and elem O, pocket and (elem N or elem O), 4.0
label pocket and name CA, resn

deselect
orient lig
bg_color white
count_atoms pocket
`}],structures:[{name:`1cbs.cif`,example:`1cbs_updated.cif`}],warns:[`transparent in every representation`,`orients along the structure`]},f={title:`Protein and DNA (PyMOL)`,dialect:`pymol`,scripts:[{name:`p53-dna.pml`,text:`# p53 core domain bound to DNA (1TUP)
load 1tup.bcif, p53
as cartoon
util.cbc p53
show sticks, resn DA+DC+DG+DT
util.cnc resn DA+DC+DG+DT
spectrum b, blue_white_red, chain A
show spheres, resn ZN
set sphere_scale, 0.6
zoom chain A
get_names
`}],structures:[{name:`1tup.bcif`,example:`1tup.bcif`}],warns:[`colors whole components by a theme`,`sizes the atoms in every representation`]},p={title:`A script and the one it includes (PyMOL)`,dialect:`pymol`,scripts:[{name:`crambin.pml`,text:`load 1crn.cif, crn
@style.pml
count_atoms resn CYS
`},{name:`style.pml`,text:`# The house style: secondary structure, cysteines as sticks, sulfurs yellow
as cartoon
util.ss
show sticks, resn CYS and not name N+C+O
color yellow, resn CYS and elem S
`}],structures:[{name:`1crn.cif`,example:`1crn.cif`}]},m={title:`Representations (VMD)`,dialect:`vmd`,scripts:[{name:`reps.tcl`,text:`# 1CBS in VMD: cartoon, the ligand as licorice, a transparent surface around it
mol new 1cbs.cif
mol delrep 0 top

mol representation NewCartoon
mol color Structure
mol selection {protein}
mol addrep top

mol representation Licorice
mol color Name
mol selection {resname REA}
mol addrep top

mol representation QuickSurf
mol color ColorID 6
mol material Transparent
mol selection {protein and same residue as within 5 of resname REA}
mol addrep top

color Display Background white
axes location off
display projection Orthographic
puts "reps added"
`}],structures:[{name:`1cbs.cif`,example:`1cbs_updated.cif`}]}})))()}async function g(e,t,n){e.focus(),e.value=t,e.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),await O(),n&&e.dispatchEvent(new KeyboardEvent(`keydown`,{key:`Enter`,bubbles:!0,composed:!0}))}function _(e,n=!1){return{render:()=>o(()=>t(i,{spec:T,load:n?[a.cbs]:[],setup:t=>e?.(t)}))}}async function v(){return new File([await(await fetch(a.cbs)).text()],`1cbs.cif`)}async function y(e){let t=D()?.querySelector(`[aria-label="Console output"]`),n=new DataTransfer;for(let t of e)n.items.add(t);t?.dispatchEvent(new DragEvent(`drop`,{dataTransfer:n,bubbles:!0,composed:!0,cancelable:!0})),await new Promise(e=>setTimeout(e,1500))}async function b(e){let t=D(),n=t?.querySelector(`canvas`)??t?.firstElementChild,r=/Mac|iPhone|iPad/.test(navigator.platform);n?.dispatchEvent(new KeyboardEvent(`keydown`,{key:`k`,metaKey:r,ctrlKey:!r,bubbles:!0,composed:!0})),await O();let i=D()?.querySelector(`input[role=combobox]`);i&&await g(i,e,!1)}async function x(e){for(let t=0;t<50&&!(await e.api.view.open({tab:`command-language.tab.console`})).ok;t++)await new Promise(e=>setTimeout(e,100));await O()}async function S(e){let t=await Promise.all(e.structures.map(async e=>new File([await(await fetch(P[e.example])).blob()],e.name)));return[...e.scripts.map(e=>new File([e.text],e.name)),...t]}function C(e){return _(async t=>{await x(t),await y(await S(e))})}var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{h(),l(),c(),s(),r(),n(),w={title:`Viewer/With extensions/PyMOL and VMD commands`,parameters:{layout:`fullscreen`}},T=e=>({...e,extensions:[...e.extensions??[],u]}),E=e=>{if(!e.ok)throw Error(e.message)},D=()=>[...document.querySelectorAll(`*`)].find(e=>e.shadowRoot)?.shadowRoot??void 0,O=()=>new Promise(e=>requestAnimationFrame(()=>e(void 0))),k=_(x),A=_(async e=>{await x(e),await y([await v()]);let t=D()?.querySelector(`textarea`);if(t)for(let e of[`hide everything; show cartoon; show sticks, resn REA; util.cbag resn REA`,`count_atoms resn REA`,`shw sticks`,`vmd mol representation VDW; mol selection {resname REA}; mol color ColorID 4; mol addrep top`])await g(t,e,!0),await new Promise(e=>setTimeout(e,300))}),j=_(async()=>{await b(`pymol show sticks, chain `)},!0),M=_(async()=>{await b(`pymol color slaet, resn REA`)},!0),N=_(async e=>{E(await e.api.script.run({dialect:`vmd`,files:[await v()],text:[`mol new 1cbs.cif`,`mol delrep 0 top`,`mol representation NewCartoon`,`mol color Chain`,`mol selection {protein}`,`mol addrep top`,`mol representation Licorice`,`mol color Name`,`mol selection {resname REA}`,`mol addrep top`].join(`
`)}))}),P={"1cbs_updated.cif":a.cbs,"1tup.bcif":a.tup,"1crn.cif":a.crambin},F=C(d),I=C(f),L=C(p),R=C(m),z=[`ConsoleEmpty`,`Console`,`MenuPrefix`,`MenuError`,`VmdReps`,`ImportedBindingSite`,`ImportedProteinDna`,`ImportedInclude`,`ImportedVmdReps`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`commandsStory(openConsole)`,...k.parameters?.docs?.source},description:{story:`The Console as it opens, on an empty viewer: what it is, and example lines of the dialect (a click puts one in the
input). The composer at its foot: the input, the Run button, the line that will say what Enter does.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`commandsStory(async v => {
  await openConsole(v);
  // 1CBS dropped on the console: the line that loads it runs, and shows in the transcript.
  await dropOnConsole([await cbsFile()]);
  const field = shell()?.querySelector<HTMLTextAreaElement>('textarea');
  if (!field) return;
  for (const line of ['hide everything; show cartoon; show sticks, resn REA; util.cbag resn REA', 'count_atoms resn REA', 'shw sticks', 'vmd mol representation VDW; mol selection {resname REA}; mol color ColorID 4; mol addrep top']) {
    await typeInto(field, line, true);
    await new Promise(r => setTimeout(r, 300));
  }
})`,...A.parameters?.docs?.source},description:{story:`The Console tab (the rail's foot, beside the Assistant), starting empty: 1CBS dropped on it (the line that loads it runs),
then four submissions: a PyMOL style (hide everything, cartoon,
the ligand as sticks colored by element with green carbons: \`util.cbag\`), a read (\`count_atoms\`), a typo the console
explains before anything runs, and VMD lines (a VDW rep of the ligand in ColorID 4, yellow). Each submission is one
step in History.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`commandsStory(async () => {
  await menuWith('pymol show sticks, chain ');
}, true)`,...j.parameters?.docs?.source},description:{story:"The command menu after `pymol `: the line's Run row says what it will do (Enter runs it as one step), then the\ncompletions for the word being typed: here the structure's chains after `chain`.",...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`commandsStory(async () => {
  await menuWith('pymol color slaet, resn REA');
}, true)`,...M.parameters?.docs?.source},description:{story:`A line that does not read: the row says why and what was meant, and keeps the menu open to fix it.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`commandsStory(async v => {
  ok(await v.api.script!.run({
    dialect: 'vmd',
    files: [await cbsFile()],
    text: [
    // Loaded with VMD's look (one rep: Lines), which the next line removes.
    'mol new 1cbs.cif', 'mol delrep 0 top', 'mol representation NewCartoon', 'mol color Chain', 'mol selection {protein}', 'mol addrep top', 'mol representation Licorice', 'mol color Name', 'mol selection {resname REA}', 'mol addrep top'].join('\\n')
  }));
})`,...N.parameters?.docs?.source},description:{story:`VMD's way, run as one step on an empty viewer: 1CBS loaded with VMD's look, its Lines rep removed, then a NewCartoon of the protein colored by chain and the
ligand as Licorice by Name (VMD's element colors: carbon cyan), each a rep of its own.`,...N.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`importedStory(BindingSitePml)`,...F.parameters?.docs?.source},description:{story:`A binding-site figure (binding-site.pml, with 1cbs.cif): a quiet grey cartoon, the ligand and the residues within
5 Å as sticks colored by element, a distance to Arg111, the pocket's residue names, oriented on the ligand on white.
Its known warning: Mol* makes the atoms transparent in every representation, not only the cartoon.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`importedStory(ProteinDnaPml)`,...I.parameters?.docs?.source},description:{story:`Protein and DNA (p53-dna.pml, with 1tup.bcif): chains colored, the DNA as sticks by element, the B-factor spectrum on
chain A, the zinc as small spheres. Its known warnings: the spectrum colors the whole component (a theme), and the
sphere scale sizes every representation.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`importedStory(IncludePml)`,...L.parameters?.docs?.source},description:{story:"A script and the one it includes (crambin.pml with `@style.pml`, and 1crn.cif): one entry, both run in order.",...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`importedStory(RepsTcl)`,...R.parameters?.docs?.source},description:{story:`VMD, from a .tcl (reps.tcl, with 1cbs.cif): Lines removed, then a NewCartoon by structure, the ligand as Licorice by
name, a transparent QuickSurf of the residues around it; the background white, the axes off, orthographic.`,...R.parameters?.docs?.description}}}})))()}B();export{A as Console,k as ConsoleEmpty,F as ImportedBindingSite,L as ImportedInclude,I as ImportedProteinDna,R as ImportedVmdReps,M as MenuError,j as MenuPrefix,N as VmdReps,z as __namedExportsOrder,w as default};