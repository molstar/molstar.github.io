import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./jsx-runtime-DbCUSNU3.js";import{i as r,n as i,t as a}from"./real-viewer-Bej2U4vD.js";import{n as o}from"./story-root-DfeAHAKA.js";import{d as s}from"./scene-tree-B-CrD89j.js";import{n as c,r as l}from"./clipping-Do8VpjIp.js";function u(e){return{render:()=>o(()=>t(i,{load:[a.cbs],setup:async t=>{let n=t.plugin.managers.structure.hierarchy.current.structures[0].components.find(e=>e.cell.obj?.label===`Polymer`);n&&f(await t.api.representation.set({component:n.cell.transform.ref,type:`molecular-surface`})),f(await t.api.select.set({target:`polymer`})),await t.api.view.open({tab:`selection`,section:c}),await e?.(t)}}))}}var d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{l(),s(),r(),n(),d={title:`Viewer/Clipping`,parameters:{layout:`fullscreen`}},f=e=>{if(!e.ok)throw Error(e.message)},p=u(),m=u(async e=>{f(await e.api.clipping.add({shape:`plane`,types:[`molecular-surface`]}))}),h=u(async e=>{f(await e.api.clipping.add({shape:`sphere`,types:[`molecular-surface`]}))}),g=u(async e=>{for(let t of[`plane`,`sphere`,`cube`,`cylinder`,`infiniteCone`])f(await e.api.clipping.add({shape:t,types:[`molecular-surface`]}))}),_=u(async e=>{f(await e.api.clipping.add({shape:`plane`,types:[`molecular-surface`]})),e.api.clipping.gizmos.handleOnly(1)}),v=u(async e=>{f(await e.api.clipping.add({shape:`cube`,types:[`molecular-surface`]})),e.api.clipping.gizmos.handleOnly(1)}),y=u(async e=>{let t=e.plugin.managers.structure.hierarchy.current.structures[0].components.find(e=>e.cell.obj?.label===`Polymer`)?.representations.find(e=>e.cell.transform.params.type?.name===`molecular-surface`);if(!t)throw Error(`No surface`);let n=await e.api.clipping.clipThis(e.api.as({kind:`person`}),t.cell.transform.ref);n&&n.cut&&e.api.clipping.gizmos.handleOnly(n.cut.index)}),b=u(async e=>{f(await e.api.select.set({target:`ligand`}));let t=e.plugin.managers.structure.hierarchy.current.structures[0].components.find(e=>e.cell.obj?.label===`Polymer`)?.representations.find(e=>e.cell.transform.params.type?.name===`molecular-surface`);if(!t)throw Error(`No surface`);f(await e.api.clipping.add({shape:`sphere`,node:`#${t.cell.transform.ref}`,target:`ligand`})),e.api.clipping.gizmos.handleOnly(1)}),x=u(async e=>{for(let t of[`plane`,`sphere`,`cube`,`cylinder`,`infiniteCone`])f(await e.api.clipping.add({shape:t,types:[`molecular-surface`]}));for(let t=1;t<=5;t++)f(await e.api.clipping.show({cut:t,on:!0}))}),S=[`Section`,`PlaneThroughTheSurface`,`SphereWindow`,`EveryShape`,`PlaneHandles`,`BoxHandles`,`ClipThisFromTheTree`,`AroundTheLigand`,`DrawnInTheScene`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`clippingStory()`,...p.parameters?.docs?.source},description:{story:`The section, nothing cut yet: a cut by shape, narrowed to the types the selection is drawn as`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`clippingStory(async v => {
  ok(await v.api.clipping.add({
    shape: 'plane',
    types: ['molecular-surface']
  }));
})`,...m.parameters?.docs?.source},description:{story:`A plane through the surface only: the cartoon and the ligand inside show where the surface is cut away`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`clippingStory(async v => {
  ok(await v.api.clipping.add({
    shape: 'sphere',
    types: ['molecular-surface']
  }));
})`,...h.parameters?.docs?.source},description:{story:`A sphere window into the surface, and its numbers open`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`clippingStory(async v => {
  for (const shape of ['plane', 'sphere', 'cube', 'cylinder', 'infiniteCone'] as const) {
    ok(await v.api.clipping.add({
      shape,
      types: ['molecular-surface']
    }));
  }
})`,...g.parameters?.docs?.source},description:{story:`Every shape, one cut each on the surface`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`clippingStory(async v => {
  ok(await v.api.clipping.add({
    shape: 'plane',
    types: ['molecular-surface']
  }));
  v.api.clipping.gizmos.handleOnly(1);
})`,..._.parameters?.docs?.source},description:{story:`A plane with its handles in 3D: drag the orange knob to move it, the blue arrow to slide it, the green ring to turn it`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`clippingStory(async v => {
  ok(await v.api.clipping.add({
    shape: 'cube',
    types: ['molecular-surface']
  }));
  v.api.clipping.gizmos.handleOnly(1);
})`,...v.parameters?.docs?.source},description:{story:`A box with its handles: the purple corner knob sizes it`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`clippingStory(async v => {
  const polymer = v.plugin.managers.structure.hierarchy.current.structures[0].components.find(c => c.cell.obj?.label === 'Polymer');
  const surface = polymer?.representations.find(r => (r.cell.transform.params as {
    type?: {
      name: string;
    };
  }).type?.name === 'molecular-surface');
  if (!surface) throw new Error('No surface');
  const done = await v.api.clipping.clipThis(v.api.as({
    kind: 'person'
  }), surface.cell.transform.ref);
  if (done && done.cut) v.api.clipping.gizmos.handleOnly(done.cut.index);
})`,...y.parameters?.docs?.source},description:{story:`Clip this… from the structure tree's row menu, on the polymer's surface: a plane through it, active`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`clippingStory(async v => {
  ok(await v.api.select.set({
    target: 'ligand'
  }));
  const polymer = v.plugin.managers.structure.hierarchy.current.structures[0].components.find(c => c.cell.obj?.label === 'Polymer');
  const surface = polymer?.representations.find(r => (r.cell.transform.params as {
    type?: {
      name: string;
    };
  }).type?.name === 'molecular-surface');
  if (!surface) throw new Error('No surface');
  ok(await v.api.clipping.add({
    shape: 'sphere',
    node: \`#\${surface.cell.transform.ref}\`,
    target: 'ligand'
  }));
  v.api.clipping.gizmos.handleOnly(1);
})`,...b.parameters?.docs?.source},description:{story:`A sphere around the ligand inside the surface (centered on what it targets, with room)`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`clippingStory(async v => {
  for (const shape of ['plane', 'sphere', 'cube', 'cylinder', 'infiniteCone'] as const) {
    ok(await v.api.clipping.add({
      shape,
      types: ['molecular-surface']
    }));
  }
  for (let i = 1; i <= 5; i++) ok(await v.api.clipping.show({
    cut: i,
    on: true
  }));
})`,...x.parameters?.docs?.source},description:{story:`Every shape drawn in the scene (clip volumes, saved with it): translucent walls, solid edges, no handles`,...x.parameters?.docs?.description}}}})))()}C();export{b as AroundTheLigand,v as BoxHandles,y as ClipThisFromTheTree,x as DrawnInTheScene,g as EveryShape,_ as PlaneHandles,m as PlaneThroughTheSurface,p as Section,h as SphereWindow,S as __namedExportsOrder,d as default};