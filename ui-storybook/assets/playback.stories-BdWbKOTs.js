import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./jsx-runtime-Dut-27nP.js";import{n as r,r as i,t as a}from"./real-viewer-Ke13Ygzq.js";import{n as o}from"./story-root-DtvPaZZ6.js";import{l as s}from"./scene-tree-9px2uzKM.js";import{c,l}from"./state-DSZRYwAh.js";import{a as u,t as d}from"./model-BB7pZiv2.js";var f,p,m,h;function g(){return(g=e((()=>{l(),s(),i(),u(),n(),f={title:`Viewer/Playback`,parameters:{layout:`fullscreen`}},p={render:()=>o(()=>t(r,{setup:async e=>{await e.api.load.trajectory?.({model:a.trajectoryModel,modelFormat:`pdb`,modelBinary:!1,coordinates:a.trajectoryCoordinates,coordinatesFormat:`dcd`,coordinatesBinary:!0}),await e.api.snapshot?.add({name:`The whole protein`}),await e.api.snapshot?.add({name:`Again, for the playback`});let t=e.plugin.state.getSnapshot({camera:!1,canvas3d:!1}),n=[0,1,2,3].map(()=>({durationInMs:500,data:t.data})),r=c.Entry({...t,transition:{frames:n}},{name:`In motion`});e.plugin.managers.snapshot.add(r),await e.api.snapshot?.apply({entry:r.snapshot.id})}}))},m={render:()=>o(()=>t(r,{load:[a.cbs],setup:async e=>{await e.api.snapshot?.add({name:`CRABP II`,key:`overview`,description:`Cellular retinoic acid-binding protein II holds **retinoic acid** inside its β-barrel.

See [the ligand](#ligand).`}),await e.api.focus.set({target:`ligand`}),await e.api.snapshot?.add({name:`The ligand`,key:`ligand`,description:`### Retinoic acid
- Buried in the barrel
- Its carboxylate toward Arg111

Back to [the overview](#overview).`}),await e.api.snapshot?.apply({entry:`overview`}),await e.api.view.open({card:d})}}))},h=[`Controls`,`Story`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <RealViewerStory setup={async v => {
    await v.api.load.trajectory?.({
      model: ExampleFiles.trajectoryModel,
      modelFormat: 'pdb',
      modelBinary: false,
      coordinates: ExampleFiles.trajectoryCoordinates,
      coordinatesFormat: 'dcd',
      coordinatesBinary: true
    });
    await v.api.snapshot?.add({
      name: 'The whole protein'
    });
    await v.api.snapshot?.add({
      name: 'Again, for the playback'
    });
    // A transition of four frames over the same state (an MVS animation makes these).
    const base = v.plugin.state.getSnapshot({
      camera: false,
      canvas3d: false
    });
    const frames = [0, 1, 2, 3].map(() => ({
      durationInMs: 500,
      data: base.data!
    }));
    const entry = PluginStateSnapshotManager.Entry({
      ...base,
      transition: {
        frames
      }
    }, {
      name: 'In motion'
    });
    v.plugin.managers.snapshot.add(entry);
    await v.api.snapshot?.apply({
      entry: entry.snapshot.id
    });
  }} />)
}`,...p.parameters?.docs?.source},description:{story:`A trajectory's models, three snapshots, the last with a transition: the playback card has a row each (the snapshots,
the transition's scrubber, the models).`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <RealViewerStory load={[ExampleFiles.cbs]} setup={async v => {
    await v.api.snapshot?.add({
      name: 'CRABP II',
      key: 'overview',
      description: 'Cellular retinoic acid-binding protein II holds **retinoic acid** inside its β-barrel.\\n\\nSee [the ligand](#ligand).'
    });
    await v.api.focus.set({
      target: 'ligand'
    });
    await v.api.snapshot?.add({
      name: 'The ligand',
      key: 'ligand',
      description: '### Retinoic acid\\n- Buried in the barrel\\n- Its carboxylate toward Arg111\\n\\nBack to [the overview](#overview).'
    });
    await v.api.snapshot?.apply({
      entry: 'overview'
    });
    await v.api.view.open({
      card: PlaybackCard
    });
  }} />)
}`,...m.parameters?.docs?.source},description:{story:`A short story on 1CBS: the Story card open on its first snapshot, its description with a link to the next.`,...m.parameters?.docs?.description}}}})))()}g();export{p as Controls,m as Story,h as __namedExportsOrder,f as default};