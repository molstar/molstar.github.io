import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,n}from"./real-viewer-Bej2U4vD.js";import{n as r}from"./story-root-DfeAHAKA.js";import{d as i}from"./scene-tree-B-CrD89j.js";var a;function o(){return(o=e((()=>{a=`{
 "metadata": {
  "title": "Example MolViewSpec - 1cbs with labelled and zoomed ligand",
  "version": "1",
  "timestamp": "2023-11-24T10:45:49.873Z"
 },
 "root": {
  "kind": "root",
  "children": [
   {
    "kind": "download",
    "params": {
     "url": "https://www.ebi.ac.uk/pdbe/entry-files/1cbs.bcif"
    },
    "children": [
     {
      "kind": "parse",
      "params": {
       "format": "bcif"
      },
      "children": [
       {
        "kind": "structure",
        "params": {
         "type": "model"
        },
        "children": [
         {
          "kind": "component",
          "params": {
           "selector": "polymer"
          },
          "children": [
           {
            "kind": "representation",
            "params": {
             "type": "cartoon"
            },
            "children": [
             {
              "kind": "color",
              "params": {
               "color": "green"
              }
             },
             {
              "kind": "color",
              "params": {
               "selector": {
                "label_asym_id": "A",
                "end_label_seq_id": 50
               },
               "color": "#6688ff"
              }
             }
            ]
           },
           {
            "kind": "label",
            "params": {
             "text": "Protein"
            }
           }
          ]
         },
         {
          "kind": "component",
          "params": {
           "selector": "ligand"
          },
          "children": [
           {
            "kind": "focus",
            "params": {
             "direction": [0.5, 0, -1],
             "up": [0.365, 0.913, 0.183]
            }
           },
           {
            "kind": "representation",
            "params": {
             "type": "ball_and_stick"
            },
            "children": [
             {
              "kind": "color",
              "params": {
               "color": "#cc3399"
              }
             }
            ]
           },
           {
            "kind": "label",
            "params": {
             "text": "Retinoic Acid"
            }
           }
          ]
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "kind": "canvas",
    "params": {
     "background_color": "#ffffee"
    }
   }
  ]
 }
}`})))()}async function s(e,t,n){await h(e).load.files({files:[new File([t],n)]})}async function c(e,t,n){let r=await fetch(t);if(!r.ok)throw Error(`${t}: ${r.status}`);await s(e,await r.blob(),n)}async function l(e){let t=await e;if(!t.ok)throw Error(`Story step failed: ${t.message}`)}function u(e){return r(()=>{let t=document.createElement(`div`);t.style.cssText=`position: relative; height: 100vh`;let r=document.createElement(`div`);r.style.cssText=`position: absolute; left: 8px; bottom: 8px; z-index: 10; padding: 4px 8px; border-radius: 4px; font: 12px/1.4 ui-monospace, monospace; background: rgba(0, 0, 0, 0.6); color: white; pointer-events: none`;let i=e=>{r.textContent=e,console.info(`[story] ${e}`)};i(`Fetching ${x.length} files…`);let a=n({style:`height: 100%`,setup:async t=>{let n=await Promise.all(x.map(async e=>{let t=await fetch(e);if(!t.ok)throw Error(`${e}: ${t.status}`);return t.arrayBuffer()})),r=Array.from({length:e},(e,t)=>{let r=x[t%x.length],i=r.slice(r.lastIndexOf(`/`)+1);return new File([n[t%n.length]],`${String(t+1).padStart(3,`0`)}-${i}`)});i(`Loading ${e} structures…`);let a=performance.now();await l(h(t).load.files({files:r}));let o=performance.now()-a;i(`${e} structures loaded in ${(o/1e3).toFixed(1)} s; arranging…`);let s=performance.now(),c=t.api.structure.loaded.value,u=Math.ceil(Math.sqrt(c.length));await l(h(t).group(`Arrange on a grid`,e=>t.plugin.dataTransaction(async()=>{for(let n=0;n<c.length;n++){let r=t.plugin.state.data.cells.get(c[n].ref)?.obj?.data;if(!r)continue;let i=r.boundary.sphere.center,a=[n%u*80-i[0],80*Math.floor(n/u)-i[1],-i[2]];await l(e.structure.transform({structure:c[n].ref,translation:a}))}},{rethrowErrors:!0}))),await l(h(t).camera.reset({animate:!1}));let d=performance.now()-s,f=c.reduce((e,t)=>e+t.atoms,0);i(`${c.length} structures, ${f.toLocaleString(`en`)} atoms: loaded in ${(o/1e3).toFixed(1)} s, arranged in ${(d/1e3).toFixed(1)} s`)}});return t.append(a,r),t})}function d(e,t){let n=[],r=Math.PI*(3-Math.sqrt(5));for(let i=0;i<e;i++){let a=1-2*(i+.5)/e,o=Math.sqrt(1-a*a),s=i*r,c=Math.cos(s)*o,l=Math.sin(s)*o,u=Math.atan2(l,c)*180/Math.PI,d=Math.acos(a)*180/Math.PI;n.push([c*t,a*t,l*t,u,d,0,1+i%2].map(e=>Number.isInteger(e)?e:e.toFixed(3)).join(` `))}return[`data_particles`,``,`loop_`,`_rlnCenteredCoordinateXAngst #1`,`_rlnCenteredCoordinateYAngst #2`,`_rlnCenteredCoordinateZAngst #3`,`_rlnAngleRot #4`,`_rlnAngleTilt #5`,`_rlnAnglePsi #6`,`_rlnClassNumber #7`,...n,``].join(`
`)}function f(e,t,n=20,r=7){let i=[],a=[];for(let o=0;o<e;o++){let s=2*Math.PI*o/e;for(let c=0;c<t;c++){let l=2*Math.PI*c/t,u=(n+r*Math.cos(l))*Math.cos(s),d=(n+r*Math.cos(l))*Math.sin(s),f=r*Math.sin(l),p=Math.round(127+127*Math.cos(s)),m=Math.round(127+127*Math.cos(s+2.094)),h=Math.round(127+127*Math.cos(s+4.189));i.push(`${u.toFixed(3)} ${d.toFixed(3)} ${f.toFixed(3)} ${p} ${m} ${h}`);let g=o*t+c,_=(o+1)%e*t+c,v=o*t+(c+1)%t,y=(o+1)%e*t+(c+1)%t;a.push(`3 ${g} ${_} ${y}`,`3 ${g} ${y} ${v}`)}}return[`ply`,`format ascii 1.0`,`comment Torus`,`element vertex ${i.length}`,`property float x`,`property float y`,`property float z`,`property uchar red`,`property uchar green`,`property uchar blue`,`element face ${a.length}`,`property list uchar int vertex_index`,`end_header`,...i,...a,``].join(`
`)}var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{i(),o(),t(),p={title:`Viewer/Data`,parameters:{layout:`fullscreen`}},m=e=>r(()=>n({setup:e})),h=e=>e.api.as({kind:`person`}),g=(e,t)=>c(e,`https://models.rcsb.org/${t.toUpperCase()}.bcif`,`${t.toLowerCase()}.bcif`),_={render:()=>m(e=>g(e,`1CRN`))},v={render:()=>m(async e=>{await g(e,`1CBS`),await l(h(e).focus.set({target:`ligand`}))})},y={render:()=>m(async e=>{await g(e,`1BNA`),await l(h(e).structure.preset({preset:`polymer-and-ligand`}))})},b={render:()=>m(async e=>{await g(e,`1AON`),await h(e).structure.assembly({id:`1`})})},x=[new URL(new URL(`1cbs_full-C2ULqnOK.bcif`,import.meta.url).href,``+import.meta.url).href,new URL(new URL(`1tup-n7u1fbVS.bcif`,import.meta.url).href,``+import.meta.url).href,new URL(new URL(`2ocj-CHrmBlAb.bcif`,import.meta.url).href,``+import.meta.url).href,new URL(new URL(`2xwr-1gVohgpU.bcif`,import.meta.url).href,``+import.meta.url).href,new URL(new URL(`AF-P04637-F1-model_v6-CxeJ4z6j.bcif`,import.meta.url).href,``+import.meta.url).href,new URL(new URL(`7qpd.fw2-CU_t_O7n.cif`,import.meta.url).href,``+import.meta.url).href],S={render:()=>u(50)},C={render:()=>m(async e=>{await g(e,`1D3Z`),await l(h(e).trajectory.frame({index:3}))})},w={render:()=>m(async e=>{await c(e,`https://files.rcsb.org/download/2L22.pdb`,`2l22.pdb`),await l(h(e).trajectory.frame({index:19}))})},T={render:()=>m(async e=>{await g(e,`1A34`),await h(e).structure.assembly({id:``})})},E={render:()=>m(async e=>{await g(e,`1A34`),await l(h(e).structure.assembly({id:`1`}))})},D={render:()=>m(e=>l(h(e).load.action({action:`download-density`,params:{source:{name:`pdb-emd-ds`,params:{provider:{id:`emd-8004`,server:`pdbe`},detail:3}}}})))},O={render:()=>m(async e=>{await g(e,`1TQN`),await l(h(e).load.action({action:`download-density`,params:{source:{name:`pdb-xray-ds`,params:{provider:{id:`1tqn`,server:`pdbe`},detail:3}}}})),await l(h(e).focus.set({target:`ligand`}))})},k={render:()=>m(async e=>{await s(e,d(400,200),`particles.star`),await l(h(e).particles.representation({type:`spacefill`,params:{sizeFactor:4}})),await l(h(e).camera.reset({animate:!1}))})},A={render:()=>m(async e=>{await s(e,f(48,24),`torus.ply`),await l(h(e).camera.reset({animate:!1}))})},j={render:()=>m(e=>s(e,a,`1cbs-focus.mvsj`))},M=[`SmallProtein1CRN`,`ProteinWithLigand1CBS`,`NucleicAcid1BNA`,`LargeComplex1AON`,`ManyStructures50`,`NmrEnsemble1D3Z`,`MultiModelPdb2L22`,`AsymmetricUnit1A34`,`Assembly1A34`,`EmdbMap`,`XrayDensityDownload1TQN`,`ParticlesStar`,`ShapePly`,`MolViewSpec1CBS`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => viewerStory(v => loadRcsb(v, '1CRN'))
}`,..._.parameters?.docs?.source},description:{story:`A small protein, crambin (1CRN, 46 residues), in the default cartoon.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => viewerStory(async v => {
    await loadRcsb(v, '1CBS');
    await must(person(v).focus.set({
      target: 'ligand'
    }));
  })
}`,...v.parameters?.docs?.source},description:{story:`A protein with a ligand: 1CBS (retinoic acid in CRABP II), the ligand focused in the canvas.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => viewerStory(async v => {
    await loadRcsb(v, '1BNA');
    await must(person(v).structure.preset({
      preset: 'polymer-and-ligand'
    }));
  })
}`,...y.parameters?.docs?.source},description:{story:`A nucleic acid: the Dickerson dodecamer (1BNA), the DNA in the polymer-and-ligand preset.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => viewerStory(async v => {
    await loadRcsb(v, '1AON');
    await person(v).structure.assembly({
      id: '1'
    });
  })
}`,...b.parameters?.docs?.source},description:{story:`A large complex: GroEL-GroES (1AON, 58,000 atoms, 21 chains), its assembly 1 made explicit.`,...b.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => manyStructures(50)
}`,...S.parameters?.docs?.source},description:{story:`50 separate structures (1.2k–11.5k atoms each, about 200k in their default assemblies) in one scene, local files.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => viewerStory(async v => {
    await loadRcsb(v, '1D3Z');
    await must(person(v).trajectory.frame({
      index: 3
    }));
  })
}`,...C.parameters?.docs?.source},description:{story:"An NMR ensemble (ubiquitin, 1D3Z, 10 models) opened on its first model, then `trajectory.frame` shows the fourth.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => viewerStory(async v => {
    await loadUrl(v, 'https://files.rcsb.org/download/2L22.pdb', '2l22.pdb');
    await must(person(v).trajectory.frame({
      index: 19
    }));
  })
}`,...w.parameters?.docs?.source},description:{story:`A multi-model file in the PDB format (2L22, 20 models from files.rcsb.org), the last model shown.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => viewerStory(async v => {
    await loadRcsb(v, '1A34');
    await person(v).structure.assembly({
      id: ''
    });
  })
}`,...T.parameters?.docs?.source},description:{story:`The asymmetric unit of 1A34 (satellite tobacco mosaic virus): one protein chain and its RNA, the deposited model.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => viewerStory(async v => {
    await loadRcsb(v, '1A34');
    await must(person(v).structure.assembly({
      id: '1'
    }));
  })
}`,...E.parameters?.docs?.source},description:{story:`The same entry as its biological assembly 1: sixty copies make the icosahedral capsid.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => viewerStory(v => must(person(v).load.action({
    action: 'download-density',
    params: {
      source: {
        name: 'pdb-emd-ds',
        params: {
          provider: {
            id: 'emd-8004',
            server: 'pdbe'
          },
          detail: 3
        }
      }
    }
  })))
}`,...D.parameters?.docs?.source},description:{story:"An EMDB map (EMD-8004) from PDBe's density server, by Home's `download-density` action: an isosurface, no model.",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => viewerStory(async v => {
    await loadRcsb(v, '1TQN');
    await must(person(v).load.action({
      action: 'download-density',
      params: {
        source: {
          name: 'pdb-xray-ds',
          params: {
            provider: {
              id: '1tqn',
              server: 'pdbe'
            },
            detail: 3
          }
        }
      }
    }));
    await must(person(v).focus.set({
      target: 'ligand'
    }));
  })
}`,...O.parameters?.docs?.source},description:{story:"An X-ray structure (1TQN) with its cell's 2Fo-Fc and Fo-Fc maps from the density server (`download-density`).",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => viewerStory(async v => {
    await loadFile(v, relionStar(400, 200), 'particles.star');
    await must(person(v).particles!.representation({
      type: 'spacefill',
      params: {
        sizeFactor: 4
      }
    }));
    // Data that is not a structure does not frame the camera on its own.
    await must(person(v).camera.reset({
      animate: false
    }));
  })
}`,...k.parameters?.docs?.source},description:{story:"Particles: a RELION STAR file made here (no particle data ships in the repository): 400 picks on a sphere, each with\nits angles. The list opens at 1 Å radius, so the story makes them larger (`particles.representation`).",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => viewerStory(async v => {
    await loadFile(v, plyTorus(48, 24), 'torus.ply');
    await must(person(v).camera.reset({
      animate: false
    }));
  })
}`,...A.parameters?.docs?.source},description:{story:"A shape: a PLY mesh made here (a torus with vertex colors), as a dropped `.ply` opens in the canvas.",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => viewerStory(v => loadFile(v, mvsFocus1cbs, '1cbs-focus.mvsj'))
}`,...j.parameters?.docs?.source},description:{story:"A MolViewSpec file (`data/examples/mvs/1cbs-focus.mvsj`: 1CBS with a labelled, zoomed ligand) opened as a file.",...j.parameters?.docs?.description}}}})))()}N();export{E as Assembly1A34,T as AsymmetricUnit1A34,D as EmdbMap,b as LargeComplex1AON,S as ManyStructures50,j as MolViewSpec1CBS,w as MultiModelPdb2L22,C as NmrEnsemble1D3Z,y as NucleicAcid1BNA,k as ParticlesStar,v as ProteinWithLigand1CBS,A as ShapePly,_ as SmallProtein1CRN,O as XrayDensityDownload1TQN,M as __namedExportsOrder,p as default};