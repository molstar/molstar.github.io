import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./jsx-runtime-Dut-27nP.js";import{i as r,n as i,t as a}from"./real-viewer-8wWdKEGJ.js";import{n as o}from"./story-root-DtvPaZZ6.js";import{d as s}from"./scene-tree-BvZ8cYEi.js";import{n as c,r as l,t as u}from"./structure-move-BJkJ73ma.js";var d,f,p,m;function h(){return(h=e((()=>{s(),r(),l(),n(),d={title:`Viewer/Move structures`,parameters:{layout:`fullscreen`}},f=e=>({...e,extensions:[...e.extensions??[],c]}),p={render:()=>o(()=>t(i,{spec:f,load:[a.cbs],setup:async e=>{await e.api.view.open({tab:`selection`,section:u})}}))},m=[`MoveSection`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <RealViewerStory spec={withMove} load={[ExampleFiles.cbs]} setup={async v => {
    await v.api.view.open({
      tab: 'selection',
      section: MoveSectionId
    });
  }} />)
}`,...p.parameters?.docs?.source},description:{story:`1CBS with the Move section open: the handles on it`,...p.parameters?.docs?.description}}}})))()}h();export{p as MoveSection,m as __namedExportsOrder,d as default};