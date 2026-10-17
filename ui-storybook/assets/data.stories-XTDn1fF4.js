import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./real-viewer-Ke13Ygzq.js";import{n as r}from"./story-root-DtvPaZZ6.js";import{l as i}from"./scene-tree-9px2uzKM.js";var a;function o(){return(o=e((()=>{a=`{
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
}`})))()}async function s(e,t,n){await m(e).load.files({files:[new File([t],n)]})}async function c(e,t,n){let r=await fetch(t);if(!r.ok)throw Error(`${t}: ${r.status}`);await s(e,await r.blob(),n)}async function l(e){let t=await e;if(!t.ok)throw Error(`Story step failed: ${t.message}`)}function u(e,t){let n=[],r=Math.PI*(3-Math.sqrt(5));for(let i=0;i<e;i++){let a=1-2*(i+.5)/e,o=Math.sqrt(1-a*a),s=i*r,c=Math.cos(s)*o,l=Math.sin(s)*o,u=Math.atan2(l,c)*180/Math.PI,d=Math.acos(a)*180/Math.PI;n.push([c*t,a*t,l*t,u,d,0,1+i%2].map(e=>Number.isInteger(e)?e:e.toFixed(3)).join(` `))}return[`data_particles`,``,`loop_`,`_rlnCenteredCoordinateXAngst #1`,`_rlnCenteredCoordinateYAngst #2`,`_rlnCenteredCoordinateZAngst #3`,`_rlnAngleRot #4`,`_rlnAngleTilt #5`,`_rlnAnglePsi #6`,`_rlnClassNumber #7`,...n,``].join(`
`)}function d(e,t,n=20,r=7){let i=[],a=[];for(let o=0;o<e;o++){let s=2*Math.PI*o/e;for(let c=0;c<t;c++){let l=2*Math.PI*c/t,u=(n+r*Math.cos(l))*Math.cos(s),d=(n+r*Math.cos(l))*Math.sin(s),f=r*Math.sin(l),p=Math.round(127+127*Math.cos(s)),m=Math.round(127+127*Math.cos(s+2.094)),h=Math.round(127+127*Math.cos(s+4.189));i.push(`${u.toFixed(3)} ${d.toFixed(3)} ${f.toFixed(3)} ${p} ${m} ${h}`);let g=o*t+c,_=(o+1)%e*t+c,v=o*t+(c+1)%t,y=(o+1)%e*t+(c+1)%t;a.push(`3 ${g} ${_} ${y}`,`3 ${g} ${y} ${v}`)}}return[`ply`,`format ascii 1.0`,`comment Torus`,`element vertex ${i.length}`,`property float x`,`property float y`,`property float z`,`property uchar red`,`property uchar green`,`property uchar blue`,`element face ${a.length}`,`property list uchar int vertex_index`,`end_header`,...i,...a,``].join(`
`)}var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{i(),o(),n(),f={title:`Viewer/Data`,parameters:{layout:`fullscreen`}},p=e=>r(()=>t({setup:e})),m=e=>e.api.as({kind:`person`}),h=(e,t)=>c(e,`https://models.rcsb.org/${t.toUpperCase()}.bcif`,`${t.toLowerCase()}.bcif`),g={render:()=>p(e=>h(e,`1CRN`))},_={render:()=>p(async e=>{await h(e,`1CBS`),await l(m(e).focus.set({target:`ligand`}))})},v={render:()=>p(async e=>{await h(e,`1BNA`),await l(m(e).structure.preset({preset:`polymer-and-ligand`}))})},y={render:()=>p(async e=>{await h(e,`1AON`),await m(e).structure.assembly({id:`1`})})},b={render:()=>p(async e=>{await h(e,`1D3Z`),await l(m(e).trajectory.frame({index:3}))})},x={render:()=>p(async e=>{await c(e,`https://files.rcsb.org/download/2L22.pdb`,`2l22.pdb`),await l(m(e).trajectory.frame({index:19}))})},S={render:()=>p(async e=>{await h(e,`1A34`),await m(e).structure.assembly({id:``})})},C={render:()=>p(async e=>{await h(e,`1A34`),await l(m(e).structure.assembly({id:`1`}))})},w={render:()=>p(e=>l(m(e).load.action({action:`download-density`,params:{source:{name:`pdb-emd-ds`,params:{provider:{id:`emd-8004`,server:`pdbe`},detail:3}}}})))},T={render:()=>p(async e=>{await h(e,`1TQN`),await l(m(e).load.action({action:`download-density`,params:{source:{name:`pdb-xray-ds`,params:{provider:{id:`1tqn`,server:`pdbe`},detail:3}}}})),await l(m(e).focus.set({target:`ligand`}))})},E={render:()=>p(async e=>{await s(e,u(400,200),`particles.star`),await l(m(e).particles.representation({type:`spacefill`,params:{sizeFactor:4}})),await l(m(e).camera.reset({animate:!1}))})},D={render:()=>p(async e=>{await s(e,d(48,24),`torus.ply`),await l(m(e).camera.reset({animate:!1}))})},O={render:()=>p(e=>s(e,a,`1cbs-focus.mvsj`))},k=[`SmallProtein1CRN`,`ProteinWithLigand1CBS`,`NucleicAcid1BNA`,`LargeComplex1AON`,`NmrEnsemble1D3Z`,`MultiModelPdb2L22`,`AsymmetricUnit1A34`,`Assembly1A34`,`EmdbMap`,`XrayDensityDownload1TQN`,`ParticlesStar`,`ShapePly`,`MolViewSpec1CBS`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => viewerStory(v => loadRcsb(v, '1CRN'))
}`,...g.parameters?.docs?.source},description:{story:`A small protein, crambin (1CRN, 46 residues), in the default cartoon.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => viewerStory(async v => {
    await loadRcsb(v, '1CBS');
    await must(person(v).focus.set({
      target: 'ligand'
    }));
  })
}`,..._.parameters?.docs?.source},description:{story:`A protein with a ligand: 1CBS (retinoic acid in CRABP II), the ligand focused in the canvas.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => viewerStory(async v => {
    await loadRcsb(v, '1BNA');
    await must(person(v).structure.preset({
      preset: 'polymer-and-ligand'
    }));
  })
}`,...v.parameters?.docs?.source},description:{story:`A nucleic acid: the Dickerson dodecamer (1BNA), the DNA in the polymer-and-ligand preset.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => viewerStory(async v => {
    await loadRcsb(v, '1AON');
    await person(v).structure.assembly({
      id: '1'
    });
  })
}`,...y.parameters?.docs?.source},description:{story:`A large complex: GroEL-GroES (1AON, 58,000 atoms, 21 chains), its assembly 1 made explicit.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => viewerStory(async v => {
    await loadRcsb(v, '1D3Z');
    await must(person(v).trajectory.frame({
      index: 3
    }));
  })
}`,...b.parameters?.docs?.source},description:{story:"An NMR ensemble (ubiquitin, 1D3Z, 10 models) opened on its first model, then `trajectory.frame` shows the fourth.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => viewerStory(async v => {
    await loadUrl(v, 'https://files.rcsb.org/download/2L22.pdb', '2l22.pdb');
    await must(person(v).trajectory.frame({
      index: 19
    }));
  })
}`,...x.parameters?.docs?.source},description:{story:`A multi-model file in the PDB format (2L22, 20 models from files.rcsb.org), the last model shown.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => viewerStory(async v => {
    await loadRcsb(v, '1A34');
    await person(v).structure.assembly({
      id: ''
    });
  })
}`,...S.parameters?.docs?.source},description:{story:`The asymmetric unit of 1A34 (satellite tobacco mosaic virus): one protein chain and its RNA, the deposited model.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => viewerStory(async v => {
    await loadRcsb(v, '1A34');
    await must(person(v).structure.assembly({
      id: '1'
    }));
  })
}`,...C.parameters?.docs?.source},description:{story:`The same entry as its biological assembly 1: sixty copies make the icosahedral capsid.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:"An EMDB map (EMD-8004) from PDBe's density server, by Home's `download-density` action: an isosurface, no model.",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:"An X-ray structure (1TQN) with its cell's 2Fo-Fc and Fo-Fc maps from the density server (`download-density`).",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => viewerStory(async v => {
    await loadFile(v, relionStar(400, 200), 'particles.star');
    await must(person(v).particles.representation({
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
}`,...E.parameters?.docs?.source},description:{story:"Particles: a RELION STAR file made here (no particle data ships in the repository): 400 picks on a sphere, each with\nits angles. The list opens at 1 Å radius, so the story makes them larger (`particles.representation`).",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => viewerStory(async v => {
    await loadFile(v, plyTorus(48, 24), 'torus.ply');
    await must(person(v).camera.reset({
      animate: false
    }));
  })
}`,...D.parameters?.docs?.source},description:{story:"A shape: a PLY mesh made here (a torus with vertex colors), as a dropped `.ply` opens in the canvas.",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => viewerStory(v => loadFile(v, mvsFocus1cbs, '1cbs-focus.mvsj'))
}`,...O.parameters?.docs?.source},description:{story:"A MolViewSpec file (`data/examples/mvs/1cbs-focus.mvsj`: 1CBS with a labelled, zoomed ligand) opened as a file.",...O.parameters?.docs?.description}}}})))()}A();export{C as Assembly1A34,S as AsymmetricUnit1A34,w as EmdbMap,y as LargeComplex1AON,O as MolViewSpec1CBS,x as MultiModelPdb2L22,b as NmrEnsemble1D3Z,v as NucleicAcid1BNA,E as ParticlesStar,_ as ProteinWithLigand1CBS,D as ShapePly,g as SmallProtein1CRN,T as XrayDensityDownload1TQN,k as __namedExportsOrder,f as default};