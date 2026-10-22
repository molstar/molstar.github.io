import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./jsx-runtime-Dut-27nP.js";import{a as r,i,n as a,r as o,t as s}from"./real-viewer-8wWdKEGJ.js";import{n as c}from"./story-root-DtvPaZZ6.js";import{d as l}from"./scene-tree-BvZ8cYEi.js";function u(e){return t=>{r(t,f),o(t.views.scene.roots.value,f)?.menu?.find(t=>t.id===e)?.run?.()}}var d,f,p,m,h,g,_;function v(){return(v=e((()=>{l(),i(),n(),d={title:`Viewer/Command menu/Own forms`,parameters:{layout:`fullscreen`}},f=e=>e.kind===`component`&&e.label.value===`Polymer`,p={render:()=>c(()=>t(a,{load:[s.cbs],setup:u(`add-repr`)}))},m={render:()=>c(()=>t(a,{load:[s.cbs],setup:u(`coloring`)}))},h={render:()=>c(()=>t(a,{load:[s.cbs],setup:e=>{u(`coloring`)(e);let t=e.managers.commands.active.value;t?.set(`theme`,`uniform`,{stay:!0}),t?.setParam(`color`,`#e15759`)}}))},g={render:()=>c(()=>t(a,{load:[s.cbs],setup:e=>void e.managers.commands.open(`representation.set`)}))},_=[`ShowAs`,`ColorByTheme`,`ColorByThemeUniform`,`ShowAsFromCommandMenu`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <RealViewerStory load={[ExampleFiles.cbs]} setup={fromInspector('add-repr')} />)
}`,...p.parameters?.docs?.source},description:{story:`Add representation… from the inspector: the types Polymer supports (Cartoon marked shown), one it does not show picked, its options under them.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <RealViewerStory load={[ExampleFiles.cbs]} setup={fromInspector('coloring')} />)
}`,...m.parameters?.docs?.source},description:{story:`Set coloring… from the inspector: the themes that apply, painted with their colors on 1CBS.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <RealViewerStory load={[ExampleFiles.cbs]} setup={v => {
    fromInspector('coloring')(v);
    const form = v.managers.commands.active.value;
    form?.set('theme', 'uniform', {
      stay: true
    });
    form?.setParam('color', '#e15759');
  }} />)
}`,...h.parameters?.docs?.source},description:{story:`The uniform theme picked: its color's swatches (the whole picker behind the chevron).`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <RealViewerStory load={[ExampleFiles.cbs]} setup={v => void v.managers.commands.open('representation.set')} />)
}`,...g.parameters?.docs?.source},description:{story:`Show as… from the command menu, nothing named: the types the structure supports, the component to name in the sentence.`,...g.parameters?.docs?.description}}}})))()}v();export{m as ColorByTheme,h as ColorByThemeUniform,p as ShowAs,g as ShowAsFromCommandMenu,_ as __namedExportsOrder,d as default};