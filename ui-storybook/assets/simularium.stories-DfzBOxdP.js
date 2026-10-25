import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./jsx-runtime-DbCUSNU3.js";import{a as r,i,n as a,t as o}from"./real-viewer-Bej2U4vD.js";import{n as s}from"./story-root-DfeAHAKA.js";import{d as c}from"./scene-tree-B-CrD89j.js";async function l(e,t){let n=await e.api.load.url({url:t});n.ok||console.error(`[story] ${t}: ${n.message}`),await e.api.camera.reset({animate:!1})}var u,d,f,p,m;function h(){return(h=e((()=>{c(),i(),n(),u={title:`Viewer/Simulations/Simularium`,parameters:{layout:`fullscreen`}},d=e=>r(e,e=>e.kind===`particles`),f={render:()=>s(()=>t(a,{setup:async e=>{await l(e,o.simularium),await e.api.particles.unitCell({}),await e.api.particles.frame({index:2}),d(e)}}))},p={render:()=>s(()=>t(a,{setup:async e=>{await l(e,o.simularium),await e.api.particles.play({mode:`loop`,seconds:3}),d(e)}}))},m=[`Frames`,`Playing`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <RealViewerStory setup={async v => {
    await load(v, ExampleFiles.simularium);
    await v.api.particles!.unitCell({});
    await v.api.particles!.frame({
      index: 2
    });
    pickList(v);
  }} />)
}`,...f.parameters?.docs?.source},description:{story:`Its frames' row under the list (seek, step, play) and its unit cell as a row.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <RealViewerStory setup={async v => {
    await load(v, ExampleFiles.simularium);
    await v.api.particles!.play({
      mode: 'loop',
      seconds: 3
    });
    pickList(v);
  }} />)
}`,...p.parameters?.docs?.source},description:{story:"Playing it (`particles.play`), looping.",...p.parameters?.docs?.description}}}})))()}h();export{f as Frames,p as Playing,m as __namedExportsOrder,u as default};