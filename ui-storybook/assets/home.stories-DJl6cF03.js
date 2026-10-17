import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./jsx-runtime-Dut-27nP.js";import{n as r,r as i}from"./real-viewer-Ke13Ygzq.js";import{n as a}from"./story-root-DtvPaZZ6.js";import{l as o}from"./scene-tree-9px2uzKM.js";var s,c,l,u;function d(){return(d=e((()=>{o(),i(),n(),s={title:`Viewer/Home`,parameters:{layout:`fullscreen`}},c={render:()=>a(()=>t(r,{spec:e=>({...e,options:{...e.options,ui:{homeWhenEmpty:!0}}})}))},l={render:()=>a(()=>t(r,{spec:e=>({...e,options:{...e.options,ui:{homeWhenEmpty:!0,showRemoteStates:!0}}})}))},u=[`Default`,`WithRemoteStates`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <RealViewerStory spec={base => ({
    ...base,
    options: {
      ...base.options,
      ui: {
        homeWhenEmpty: true
      }
    }
  })} />)
}`,...c.parameters?.docs?.source},description:{story:`The root's actions as forms (the first open, Open files among them), and the command menu hint.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <RealViewerStory spec={base => ({
    ...base,
    options: {
      ...base.options,
      ui: {
        homeWhenEmpty: true,
        showRemoteStates: true
      }
    }
  })} />)
}`,...l.parameters?.docs?.source},description:{story:`With remote states (on in the spec, off by default): sessions on a state server. Network.`,...l.parameters?.docs?.description}}}})))()}d();export{c as Default,l as WithRemoteStates,u as __namedExportsOrder,s as default};