import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,n}from"./real-viewer-8wWdKEGJ.js";import{n as r}from"./story-root-DtvPaZZ6.js";import{d as i}from"./scene-tree-BvZ8cYEi.js";import{i as a,n as o,r as s,s as c,t as l}from"./extension-CZOwo-Sp.js";var u,d,f,p;function m(){return(m=e((()=>{i(),t(),c(),s(),u={title:`Viewer/Dynamic PDB`,parameters:{layout:`fullscreen`}},d={args:{card:!0,pinned:!0,density:!1},render:e=>r(()=>n({spec:e=>({...e,extensions:[...e.extensions??[],o(a)]}),setup:async t=>{e.pinned&&t.views.shell?.setPinned(`right`,!0);let n=t.api.as({kind:`person`}),r=await n.run(`dynamic-pdb.load`,{entry:`dpdb_gijqn2no`});if(!r.ok)throw Error(r.message);let i=n[`dynamic-pdb`]?.loaded.value?.models??[];for(let e of i)e.ref&&await n.run(`component.remove`,{component:`Water`,structure:e.ref});e.card&&await n.view.open({card:l});let a=i[0]?.ref;e.density&&a&&await n.run(`volume.streaming`,{structure:a,on:!0})}}))},f={...d,name:`With density`,args:{...d.args,density:!0}},p=[`Entry`,`WithDensity`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    card: true,
    pinned: true,
    density: false
  },
  render: args => story(() => RealViewerStory({
    spec: base => ({
      ...base,
      extensions: [...(base.extensions ?? []), dynamicPdbExtension(DpdbFixtures)]
    }),
    setup: async viewer => {
      if (args.pinned) viewer.views.shell?.setPinned('right', true);
      const person = viewer.api.as({
        kind: 'person'
      });
      const r = await person.run('dynamic-pdb.load', {
        entry: 'dpdb_gijqn2no'
      });
      if (!r.ok) throw new Error(r.message);
      // Without the waters: the protein, its ligand and the density read better (the deposited model has 1,100).
      const models = person['dynamic-pdb']?.loaded.value?.models ?? [];
      for (const m of models) if (m.ref) await person.run('component.remove', {
        component: 'Water',
        structure: m.ref
      });
      if (args.card) await person.view.open({
        card: DpdbCard
      });
      const deposited = models[0]?.ref;
      if (args.density && deposited) await person.run('volume.streaming', {
        structure: deposited,
        on: true
      });
    }
  }))
}`,...d.parameters?.docs?.source},description:{story:`Entry dpdb_gijqn2no: FAAH (3K7F) as deposited and as qFit's multiconformer model.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  ...Entry,
  name: 'With density',
  args: {
    ...Entry.args,
    density: true
  }
}`,...f.parameters?.docs?.source},description:{story:`With the deposited model's density streamed from the volume server (2Fo-Fc and Fo-Fc).`,...f.parameters?.docs?.description}}}})))()}m();export{d as Entry,f as WithDensity,p as __namedExportsOrder,u as default};