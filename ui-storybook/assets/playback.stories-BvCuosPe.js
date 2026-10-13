import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,i as n,n as r,r as i,t as a}from"./jsx-runtime-pJJ4pzd1.js";import{n as o,r as s,t as c}from"./playback-C5VHT9Rs.js";import{n as l,r as u,t as d}from"./playback-Clf1CcTQ.js";var f,p,m,h,g,_,v;function y(){return(y=e((()=>{c(),n(),u(),a(),f={title:`Canvas/Playback`},p=`width: 320px; padding: var(--msp-space-6); background: var(--msp-color-bg);`,m=e=>console.info(e),h={render:()=>t(()=>i(`div`,{style:`${p} display: grid; gap: var(--msp-space-3);`,children:[r(d,{model:o(m)}),r(l,{model:s()})]}))},g={render:()=>t(()=>r(`div`,{style:p,children:r(d,{model:o(m,32)})}))},_={render:()=>t(()=>r(`div`,{style:p,children:r(l,{model:s(50,`6M0J`)})}))},v=[`SnapshotsAndTrajectory`,`ManySnapshots`,`Trajectory`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style={\`\${frame} display: grid; gap: var(--msp-space-3);\`}>
        <SnapshotCard model={mockSnapshots(post)} />
        <TrajectoryBar model={mockTrajectory()} />
      </div>)
}`,...h.parameters?.docs?.source},description:{story:`Two different things, two surfaces: the session's snapshots, and one structure's models.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style={frame}>
        <SnapshotCard model={mockSnapshots(post, 32)} />
      </div>)
}`,...g.parameters?.docs?.source},description:{story:`Many snapshots: the position is "n / N", opening a filterable list of titles.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style={frame}>
        <TrajectoryBar model={mockTrajectory(50, '6M0J')} />
      </div>)
}`,..._.parameters?.docs?.source},description:{story:`A trajectory: the bar names its structure.`,..._.parameters?.docs?.description}}}})))()}y();export{g as ManySnapshots,h as SnapshotsAndTrajectory,_ as Trajectory,v as __namedExportsOrder,f as default};