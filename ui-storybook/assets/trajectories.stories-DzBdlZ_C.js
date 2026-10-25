import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./jsx-runtime-DbCUSNU3.js";import{a as r,i,n as a,t as o}from"./real-viewer-Bej2U4vD.js";import{n as s}from"./story-root-DfeAHAKA.js";import{d as c}from"./scene-tree-B-CrD89j.js";async function l(e,t,n){let i=t.coordinates?await e.api.load.trajectory({model:t.model,modelFormat:t.modelFormat,coordinates:t.coordinates,coordinatesFormat:t.coordinatesFormat}):await e.api.load.url({url:t.model,format:t.modelFormat});i.ok||console.error(`[story] ${t.coordinates??t.model}: ${i.message}`),await e.api.camera.reset({animate:!1}),n&&await e.api.trajectory.play({mode:`loop`,seconds:5}),r(e,e=>e.kind===`structure`)}var u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{c(),i(),n(),u={title:`Viewer/Simulations/Trajectories`,parameters:{layout:`fullscreen`},args:{play:!1}},d=e=>`https://raw.githubusercontent.com/mdtraj/mdtraj/master/tests/data/${e}`,f=e=>({render:({play:n})=>s(()=>t(a,{setup:t=>l(t,e,n)}))}),p={...f({model:o.trajectoryModel,modelFormat:`pdb`,coordinates:o.trajectoryCoordinates,coordinatesFormat:`dcd`}),name:`PDB + DCD`},m={...f({model:o.trajectoryTopology,modelFormat:`prmtop`,coordinates:o.trajectoryNetcdf,coordinatesFormat:`nctraj`}),name:`PRMTOP + NetCDF`},h={...f({model:d(`native.pdb`),modelFormat:`pdb`,coordinates:d(`frame0.xtc`),coordinatesFormat:`xtc`}),name:`PDB + XTC`},g={...f({model:d(`native.pdb`),modelFormat:`pdb`,coordinates:d(`frame0.trr`),coordinatesFormat:`trr`}),name:`PDB + TRR`},_={...f({model:d(`native.pdb`),modelFormat:`pdb`,coordinates:d(`frame0.lammpstrj`),coordinatesFormat:`lammpstrj`}),name:`PDB + LAMMPS dump`},v={...f({model:d(`frame0.gro`),modelFormat:`gro`}),name:`GRO frames`},y=[`PdbDcd`,`PrmtopNetcdf`,`PdbXtc`,`PdbTrr`,`PdbLammpstrj`,`MultiFrameGro`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...trajectory({
    model: ExampleFiles.trajectoryModel,
    modelFormat: 'pdb',
    coordinates: ExampleFiles.trajectoryCoordinates,
    coordinatesFormat: 'dcd'
  }),
  name: 'PDB + DCD'
}`,...p.parameters?.docs?.source},description:{story:`CHARMM/NAMD DCD over a PDB model: a small protein (the repository's).`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...trajectory({
    model: ExampleFiles.trajectoryTopology,
    modelFormat: 'prmtop',
    coordinates: ExampleFiles.trajectoryNetcdf,
    coordinatesFormat: 'nctraj'
  }),
  name: 'PRMTOP + NetCDF'
}`,...m.parameters?.docs?.source},description:{story:`Amber NetCDF over its PRMTOP topology: the same protein (the repository's).`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...trajectory({
    model: Mdtraj('native.pdb'),
    modelFormat: 'pdb',
    coordinates: Mdtraj('frame0.xtc'),
    coordinatesFormat: 'xtc'
  }),
  name: 'PDB + XTC'
}`,...h.parameters?.docs?.source},description:{story:`GROMACS XTC (compressed) over a PDB model: alanine dipeptide, 501 frames (mdtraj, network).`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...trajectory({
    model: Mdtraj('native.pdb'),
    modelFormat: 'pdb',
    coordinates: Mdtraj('frame0.trr'),
    coordinatesFormat: 'trr'
  }),
  name: 'PDB + TRR'
}`,...g.parameters?.docs?.source},description:{story:`GROMACS TRR (full precision) over a PDB model: the same run (mdtraj, network).`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...trajectory({
    model: Mdtraj('native.pdb'),
    modelFormat: 'pdb',
    coordinates: Mdtraj('frame0.lammpstrj'),
    coordinatesFormat: 'lammpstrj'
  }),
  name: 'PDB + LAMMPS dump'
}`,..._.parameters?.docs?.source},description:{story:`LAMMPS dump (unwrapped coordinates) over a PDB model: the same run (mdtraj, network).`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...trajectory({
    model: Mdtraj('frame0.gro'),
    modelFormat: 'gro'
  }),
  name: 'GRO frames'
}`,...v.parameters?.docs?.source},description:{story:`A multi-frame GRO: the frames are the file's models, no coordinates file (mdtraj, network).`,...v.parameters?.docs?.description}}}})))()}b();export{v as MultiFrameGro,p as PdbDcd,_ as PdbLammpstrj,g as PdbTrr,h as PdbXtc,m as PrmtopNetcdf,y as __namedExportsOrder,u as default};