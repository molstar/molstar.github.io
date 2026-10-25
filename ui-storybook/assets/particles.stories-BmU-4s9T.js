import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./jsx-runtime-DbCUSNU3.js";import{a as r,i,n as a,t as o}from"./real-viewer-Bej2U4vD.js";import{n as s}from"./story-root-DfeAHAKA.js";import{d as c}from"./scene-tree-B-CrD89j.js";async function l(e){await e.api.camera.reset({animate:!1})}async function u(e,t){let n=await e.api.load.url({url:t});n.ok||console.error(`[story] ${t}: ${n.message}`),await l(e)}var d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{c(),i(),n(),d={title:`Viewer/Particles`,parameters:{layout:`fullscreen`}},f=e=>r(e,e=>e.kind===`particles`),p={render:()=>s(()=>t(a,{setup:async e=>{await u(e,o.cryoetRibosomes),await e.api.particles.source({params:{pixelSize:6.802}}),await e.api.particles.representation({type:`orientation`}),await l(e),f(e)}}))},m={render:()=>s(()=>t(a,{setup:async e=>{await u(e,o.relionSubtomo),await e.api.particles.color({theme:`particle-index`}),await l(e),f(e)}}))},h={render:()=>s(()=>t(a,{setup:async e=>{await u(e,o.dynamo),await e.api.particles.source({params:{tomos:[`2`],pixelSize:10}}),await l(e),f(e)}}))},g={render:()=>s(()=>t(a,{setup:async e=>{await u(e,o.artiatomi),await e.api.particles.source({params:{pixelSize:13}}),await l(e),f(e)}}))},_={render:()=>s(()=>t(a,{setup:async e=>{await u(e,o.cryoetRibosomes),await e.api.particles.source({params:{pixelSize:6.802}});let t=new File([await(await fetch(o.crambin)).blob()],`1crn.cif`);await e.api.particles.targets({file:t}),await e.api.particles.visibility({visible:!1,representation:`spacefill`}),await l(e),await e.api.camera.zoom({factor:10,animate:!1}),await e.api.camera.zoom({factor:10,animate:!1}),f(e)}}))},v=[`CryoEtRibosomes`,`RelionStar`,`DynamoOneTomogram`,`ArtiatomiMotivelist`,`TargetsAtPicks`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <RealViewerStory setup={async v => {
    await load(v, ExampleFiles.cryoetRibosomes);
    await v.api.particles!.source({
      params: {
        pixelSize: 6.802
      }
    });
    await v.api.particles!.representation({
      type: 'orientation'
    });
    await frameAll(v);
    pickList(v);
  }} />)
}`,...p.parameters?.docs?.source},description:{story:`CryoET Data Portal: 200 ribosomes, oriented points; the portal's 6.802 Å voxels set in the list's Source.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <RealViewerStory setup={async v => {
    await load(v, ExampleFiles.relionSubtomo);
    await v.api.particles!.color({
      theme: 'particle-index'
    });
    await frameAll(v);
    pickList(v);
  }} />)
}`,...m.parameters?.docs?.source},description:{story:`RELION STAR: 300 HIV capsid picks with their poses (10 Å pixels from the optics block), colored by index.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <RealViewerStory setup={async v => {
    await load(v, ExampleFiles.dynamo);
    await v.api.particles!.source({
      params: {
        tomos: ['2'],
        pixelSize: 10
      }
    });
    await frameAll(v);
    pickList(v);
  }} />)
}`,...h.parameters?.docs?.source},description:{story:"Dynamo table, two tomograms: the second only, chosen in the list's Source (`particles.source`), 10 Å pixels.",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <RealViewerStory setup={async v => {
    await load(v, ExampleFiles.artiatomi);
    await v.api.particles!.source({
      params: {
        pixelSize: 13
      }
    });
    await frameAll(v);
    pickList(v);
  }} />)
}`,...g.parameters?.docs?.source},description:{story:`Artiatomi motivelist (EM): 225 ribosomes at the demo's 13 Å pixel size.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <RealViewerStory setup={async v => {
    await load(v, ExampleFiles.cryoetRibosomes);
    await v.api.particles!.source({
      params: {
        pixelSize: 6.802
      }
    });
    const file = new File([await (await fetch(ExampleFiles.crambin)).blob()], '1crn.cif');
    await v.api.particles!.targets({
      file
    });
    await v.api.particles!.visibility({
      visible: false,
      representation: 'spacefill'
    });
    await frameAll(v);
    // 100×: a few picks across the view, each crambin as it sits
    await v.api.camera.zoom({
      factor: 10,
      animate: false
    });
    await v.api.camera.zoom({
      factor: 10,
      animate: false
    });
    pickList(v);
  }} />)
}`,..._.parameters?.docs?.source},description:{story:"What the particles stand for: crambin (1CRN) at each of the 200 ribosome picks (`particles.targets`), the picks'\nspheres hidden. The picks span thousands of Å and crambin is 30 Å across: the camera zooms in on a part of the field.",..._.parameters?.docs?.description}}}})))()}y();export{g as ArtiatomiMotivelist,p as CryoEtRibosomes,h as DynamoOneTomogram,m as RelionStar,_ as TargetsAtPicks,v as __namedExportsOrder,d as default};