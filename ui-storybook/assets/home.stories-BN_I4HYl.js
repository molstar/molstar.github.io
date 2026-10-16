import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./jsx-runtime-DzTO5r4L.js";import{n as r}from"./story-root-Czb4fkLv.js";import{t as i}from"./testing-DE5VTgdW.js";import{n as a,r as o}from"./real-viewer-tSLPxYT0.js";var s,c,l,u;function d(){return(d=e((()=>{i(),o(),n(),s={title:`Viewer/Home`,parameters:{layout:`fullscreen`}},c={render:()=>r(()=>t(a,{spec:e=>({...e,options:{...e.options,ui:{homeWhenEmpty:!0}}})}))},l={render:()=>r(()=>t(a,{spec:e=>({...e,options:{...e.options,ui:{homeWhenEmpty:!0,showRemoteStates:!0}}})}))},u=[`Default`,`WithRemoteStates`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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