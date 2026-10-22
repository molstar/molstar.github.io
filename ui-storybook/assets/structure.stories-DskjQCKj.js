import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./jsx-runtime-Dut-27nP.js";import{a as r,i,n as a,t as o}from"./real-viewer-8wWdKEGJ.js";import{n as s}from"./story-root-DtvPaZZ6.js";import{d as c}from"./scene-tree-BvZ8cYEi.js";var l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{c(),i(),n(),l={title:`Viewer/Structure panel`,parameters:{layout:`fullscreen`}},u={render:()=>s(()=>t(a,{load:[o.cbs],setup:e=>r(e)}))},d={render:()=>s(()=>t(a,{load:[o.cbs],setup:e=>r(e,e=>e.kind===`structure`)}))},f={render:()=>s(()=>t(a,{load:[o.cbs],setup:e=>r(e,e=>e.kind===`component`)}))},p={render:()=>s(()=>t(a,{load:[o.cbs],setup:e=>r(e,e=>e.kind===`representation`)}))},m={render:()=>s(()=>t(a,{load:[o.cbs,o.crambin,o.grm],setup:e=>r(e)}))},h={render:()=>s(()=>t(a,{setup:async e=>{await e.api.load.entry?.({source:`pdb`,id:`1TQN`}),await e.api.volume.streaming?.({enabled:!0}),await e.api.focus.set({target:`ligand`}),r(e,e=>e.kind===`extension`&&e.label.value===`Volume streaming`)}}))},g=[`Tree`,`Structure`,`Component`,`Representation`,`ManyStructures`,`StreamingDensity`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <RealViewerStory load={[ExampleFiles.cbs]} setup={v => openAt(v)} />)
}`,...u.parameters?.docs?.source},description:{story:`Nothing picked: the tree, the inspector's hint.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <RealViewerStory load={[ExampleFiles.cbs]} setup={v => openAt(v, n => n.kind === 'structure')} />)
}`,...d.parameters?.docs?.source},description:{story:`The structure picked: its contents (counts, entities), its parameters, then the extensions' sections.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <RealViewerStory load={[ExampleFiles.cbs]} setup={v => openAt(v, n => n.kind === 'component')} />)
}`,...f.parameters?.docs?.source},description:{story:`A component picked: its actions and its representations, each to open.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <RealViewerStory load={[ExampleFiles.cbs]} setup={v => openAt(v, n => n.kind === 'representation')} />)
}`,...p.parameters?.docs?.source},description:{story:`A representation picked (the cartoon): its quick settings (type, color, opacity, size) above its whole form.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <RealViewerStory load={[ExampleFiles.cbs, ExampleFiles.crambin, ExampleFiles.grm]} setup={v => openAt(v)} />)
}`,...m.parameters?.docs?.source},description:{story:`Several structures (1CBS, crambin, gramicidin), each its row in the tree.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <RealViewerStory setup={async v => {
    await v.api.load.entry?.({
      source: 'pdb',
      id: '1TQN'
    });
    await v.api.volume.streaming?.({
      enabled: true
    } as never);
    await v.api.focus.set({
      target: 'ligand'
    });
    openAt(v, n => n.kind === 'extension' && n.label.value === 'Volume streaming');
  }} />)
}`,...h.parameters?.docs?.source},description:{story:`Density streaming turned on (1TQN from the PDB, its maps from PDBe), the ligand focused: the streaming's row picked,
its maps' levels in the inspector. Network.`,...h.parameters?.docs?.description}}}})))()}_();export{f as Component,m as ManyStructures,p as Representation,h as StreamingDensity,d as Structure,u as Tree,g as __namedExportsOrder,l as default};