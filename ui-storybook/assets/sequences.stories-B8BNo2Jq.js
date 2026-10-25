import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./jsx-runtime-DbCUSNU3.js";import{a as r,i,n as a,r as o,t as s}from"./real-viewer-Bej2U4vD.js";import{n as c}from"./story-root-DfeAHAKA.js";import{d as l}from"./scene-tree-B-CrD89j.js";import{Xt as u,t as d}from"./structure-CJPaXI_Y.js";async function f(e,t,n=1e4){let r=performance.now();for(;;){let i=o(e.views.scene.roots.value,t);if(i||performance.now()-r>n)return i;await new Promise(e=>setTimeout(e,50))}}async function p(e,t){let n=await f(e,v(e,t));n&&(r(e,e=>e===n),n.isExpanded.value||n.toggleExpanded())}function m(e){return{render:()=>c(()=>t(a,{spec:t=>e.extensions?{...t,extensions:[...t.extensions??[],...e.extensions]}:t,setup:async t=>{for(let[n,r]of e.files)await y(t,n,r);await t.api.camera.reset({animate:!1}),await t.views.sequence?.load(),await e.steps?.(t),await p(t,e.open??0)}}))}}function h(e,t){let n={target:[],pos:[],value:[]},r=new Set;for(let i of e.units){if(!u.isAtomic(i))continue;let e=i.model.atomicHierarchy,a=i.conformation.operator,o=-1;for(let s=0;s<i.elements.length;s++){let c=i.elements[s],l=e.residueAtomSegments.index[c];if(l===o)continue;o=l;let u=T[e.atoms.label_comp_id.value(c)];if(u===void 0)continue;let d=e.chains.label_asym_id.value(e.chainAtomSegments.index[c]),f=a.isIdentity?d:`${d}@${a.instanceId}`,p=e.residues.label_seq_id.value(l);r.has(`${f}:${p}`)||(r.add(`${f}:${p}`),n.target.push(`${t}/${f}`),n.pos.push(`${p}`),n.value.push(u))}}return n}var g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{l(),d(),i(),n(),g={title:`Viewer/Sequences`,parameters:{layout:`fullscreen`}},_=e=>{if(!e.ok)throw Error(e.message)},v=(e,t)=>n=>n.kind===`sequence`&&n.id.startsWith(e.plugin.managers.structure.hierarchy.current.structures[t]?.cell.transform.ref??`#`),y=async(e,t,n)=>_(await e.api.load.url({url:t,format:n})),b=m({files:[[s.cbs,`mmcif`],[s.crambin,`mmcif`]]}),x=m({files:[[s.cbs,`mmcif`],[s.crambin,`mmcif`]],open:1,steps:async e=>{let t=e.plugin.managers.structure.hierarchy.current.structures[1].cell.transform.ref;_(await e.api.sequence.follow({structure:t}))}}),S=m({files:[[s.cbs,`mmcif`]],steps:async e=>{_(await e.api.sequence.removeTrack({track:`Ruler`})),_(await e.api.sequence.hideTrack({track:`Secondary structure`}))}}),C=m({files:[[s.tup,`bcif`]],steps:async e=>_(await e.api.sequence.chains({chains:`A, B, C`}))}),w=m({files:[[s.tup,`bcif`]],steps:async e=>_(await e.api.sequence.chains({polymer:!0}))}),T={ILE:4.5,VAL:4.2,LEU:3.8,PHE:2.8,CYS:2.5,MET:1.9,ALA:1.8,GLY:-.4,THR:-.7,SER:-.8,TRP:-.9,TYR:-1.3,PRO:-1.6,HIS:-3.2,GLU:-3.5,GLN:-3.5,ASP:-3.5,ASN:-3.5,LYS:-3.9,ARG:-4.5},E={id:`story`,title:`Story tracks`,sequence:{tracks:[{id:`story.sequence.hydropathy`,label:`Hydropathy`,order:15,track:`story.hydropathy`,shown:!1,applies:e=>e.polymerResidueCount>0,describe:()=>`Bars · Kyte–Doolittle`,build:e=>({data:[{kind:`annotation`,ref:`story.hydropathy.data`,params:{geometry:`values`,numbering:`label`,label:`Hydropathy`,value:h(e.structure,e.complex)}}],track:{kind:`track`,ref:`story.hydropathy`,params:{label:``,height:2},children:[{kind:`layer`,ref:`story.hydropathy.values`,params:{type:`values`,data:`story.hydropathy.data`,encoding:`bars`,domain:[-4.5,4.5],color:{theme:`uniform`,params:{color:`#5b8bd0`}}}}]}})}]}},D=m({files:[[s.cbs,`mmcif`]],extensions:[E]}),O=m({files:[[s.cbs,`mmcif`]],extensions:[E],steps:async e=>_(await e.api.sequence.addTrack({track:`Hydropathy`}))}),k=[`TwoStructures`,`PickedByItsEye`,`TracksEdited`,`ChosenChains`,`PolymersOnly`,`ExtensionTrackOffered`,`ExtensionTrackAdded`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`sequenceStory({
  files: [[ExampleFiles.cbs, 'mmcif'], [ExampleFiles.crambin, 'mmcif']]
})`,...b.parameters?.docs?.source},description:{story:`Two structures: each has its Sequence node, last under it. The band follows the first by the rule (Auto, said on
its row); the second's eye is off. Click the second's eye to show its sequence.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`sequenceStory({
  files: [[ExampleFiles.cbs, 'mmcif'], [ExampleFiles.crambin, 'mmcif']],
  open: 1,
  steps: async v => {
    const second = v.plugin.managers.structure.hierarchy.current.structures[1].cell.transform.ref;
    ok(await v.api.sequence!.follow({
      structure: second
    }));
  }
})`,...x.parameters?.docs?.source},description:{story:"The second structure picked by its eye (`sequence.follow`): the band shows crambin; Follow automatically in its menu",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`sequenceStory({
  files: [[ExampleFiles.cbs, 'mmcif']],
  steps: async v => {
    ok(await v.api.sequence!.removeTrack!({
      track: 'Ruler'
    }));
    ok(await v.api.sequence!.hideTrack!({
      track: 'Secondary structure'
    }));
  }
})`,...S.parameters?.docs?.source},description:{story:`Tracks as children: the ruler removed (Add track brings it back), secondary structure hidden by its eye`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`sequenceStory({
  files: [[ExampleFiles.tup, 'bcif']],
  steps: async v => ok(await v.api.sequence!.chains!({
    chains: 'A, B, C'
  }))
})`,...C.parameters?.docs?.source},description:{story:"The chain filter in the inspector: 1TUP (p53 bound to DNA), the two DNA strands (A, B) and one of the three p53\ncopies (C; its author's A), named as `sequence.get` lists them",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`sequenceStory({
  files: [[ExampleFiles.tup, 'bcif']],
  steps: async v => ok(await v.api.sequence!.chains!({
    polymer: true
  }))
})`,...w.parameters?.docs?.source},description:{story:`Chains › Polymers only: 1TUP without its zinc ions`,...w.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`sequenceStory({
  files: [[ExampleFiles.cbs, 'mmcif']],
  extensions: [StoryExtension]
})`,...D.parameters?.docs?.source},description:{story:`The extension's track offered: open the Sequence node's menu (…) › Add track › Hydropathy`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`sequenceStory({
  files: [[ExampleFiles.cbs, 'mmcif']],
  extensions: [StoryExtension],
  steps: async v => ok(await v.api.sequence!.addTrack!({
    track: 'Hydropathy'
  }))
})`,...O.parameters?.docs?.source},description:{story:"The extension's track added (`sequence.track.add`): bars under the letters, its value in the hover; a row of its own",...O.parameters?.docs?.description}}}})))()}A();export{C as ChosenChains,O as ExtensionTrackAdded,D as ExtensionTrackOffered,x as PickedByItsEye,w as PolymersOnly,S as TracksEdited,b as TwoStructures,k as __namedExportsOrder,g as default};