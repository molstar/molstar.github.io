import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./jsx-runtime-Dut-27nP.js";import{a as r,i,n as a}from"./real-viewer-8wWdKEGJ.js";import{n as o}from"./story-root-DtvPaZZ6.js";import{d as s}from"./scene-tree-BvZ8cYEi.js";var c,l,u,d;function f(){return(f=e((()=>{s(),i(),n(),c={title:`Viewer/Volumes`,parameters:{layout:`fullscreen`}},l={render:()=>o(()=>t(a,{setup:async e=>{await e.api.load.entry?.({source:`pdb`,id:`5A1A`}),await e.api.load.entry?.({source:`emdb`,id:`EMD-2984`}),r(e,e=>e.kind===`volume`)}}))},u={render:()=>o(()=>t(a,{setup:async e=>{await e.api.load.entry?.({source:`emdb`,id:`EMD-2984`}),await e.api.volume.representation({type:`direct-volume`}),r(e,e=>e.kind===`volume-representation`&&/direct/i.test(e.label.value))}}))},d=[`Isosurface`,`DirectVolume`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <RealViewerStory setup={async v => {
    await v.api.load.entry?.({
      source: 'pdb',
      id: '5A1A'
    });
    await v.api.load.entry?.({
      source: 'emdb',
      id: 'EMD-2984'
    });
    openAt(v, n => n.kind === 'volume');
  }} />)
}`,...l.parameters?.docs?.source},description:{story:`The map picked: its levels (the histogram with the iso value to drag, the color, the opacity).`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <RealViewerStory setup={async v => {
    await v.api.load.entry?.({
      source: 'emdb',
      id: 'EMD-2984'
    });
    await v.api.volume.representation({
      type: 'direct-volume'
    });
    openAt(v, n => n.kind === 'volume-representation' && /direct/i.test(n.label.value));
  }} />)
}`,...u.parameters?.docs?.source},description:{story:`The map as a direct volume, its representation picked: the transfer function (the opacity curve over the map's
histogram, the colors under it, the color stops).`,...u.parameters?.docs?.description}}}})))()}f();export{u as DirectVolume,l as Isosurface,d as __namedExportsOrder,c as default};