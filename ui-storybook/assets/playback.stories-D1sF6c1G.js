import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n,t as r}from"./jsx-runtime-DbCUSNU3.js";import{n as i,t as a}from"./story-root-DfeAHAKA.js";import{n as o,t as s}from"./observable-state-eRUcDuAs.js";import{a as c,c as l,i as u,o as d,r as f,s as p}from"./playback-C6fSP8EU.js";function m(e,t){let n=t===void 0?v:Array.from({length:t},(e,t)=>({title:[`Overview`,`Active site`,`Heme pocket`,`Substrate channel`,`Surface`,`Ligand contacts`][t%6]+(t>=6?` ${Math.floor(t/6)+1}`:``),description:t%3==2?void 0:`Step ${t+1} of the tour.`})),r=o(0),i=o(!1),a=o(n[0].title),s=o(n[0].description),c,l=e=>{let t=(e+n.length)%n.length;r.set(t),a.set(n[t].title),s.set(n[t].description)};return{count:o(n.length).asReadonly,index:r.asReadonly,title:a.asReadonly,titles:o(n.map(e=>e.title)).asReadonly,description:s.asReadonly,isPlaying:i.asReadonly,previous:()=>l(r.value-1),next:()=>l(r.value+1),goTo:l,togglePlay:()=>{i.set(!i.value),clearInterval(c),i.value&&(c=setInterval(()=>l(r.value+1),2500))},openLink:t=>{let r=n.findIndex(e=>`#${e.title.toLowerCase().replace(/ /g,`-`)}`===t);r>=0?l(r):e(`Link: ${t}`)}}}function h(e=20,t=`1TQN`){let n=o(0),r=o(!1),i;return{label:o(t).asReadonly,count:o(e).asReadonly,index:n.asReadonly,isPlaying:r.asReadonly,seek:t=>n.set(Math.max(0,Math.min(e-1,t))),togglePlay:()=>{r.set(!r.value),clearInterval(i),r.value&&(i=setInterval(()=>n.set((n.value+1)%e),150))}}}function g(e=100,t=`AdK in water`){let n=o(`whole`),r=o(!1);return{...h(e,t),unit:o(`frames`).asReadonly,periodic:{mode:n.asReadonly,set:e=>n.set(e),images:{shown:r.asReadonly,set:e=>r.set(e)}}}}function _(e=2e3,t=100){let n=o(0),r=o(!1),i,a=()=>{clearInterval(i),r.set(!1)};return{duration:o(e).asReadonly,step:o(t).asReadonly,time:n.asReadonly,isPlaying:r.asReadonly,seek:t=>{a(),n.set(Math.max(0,Math.min(e,t)))},togglePlay:()=>{if(r.value)return a();n.set(0),r.set(!0),i=setInterval(()=>{let r=n.value+t;n.set(Math.min(e,r)),r>=e&&a()},t)}}}var v;function y(){return(y=e((()=>{s(),v=[{title:`Overview`,description:`Cytochrome **P450 3A4** with its heme cofactor.

See the [active site](#active-site).`},{title:`Active site`,description:`### Active site
- Heme iron coordinated by \`Cys442\`
- Substrate channel above the heme

Back to the [overview](#overview).`},{title:`Surface`,description:void 0}]})))()}var b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{y(),a(),l(),r(),b={title:`Components/Playback`},x=`width: 320px; padding: var(--msp-space-6); background: var(--msp-color-bg);`,S=e=>console.info(e),C={render:()=>i(()=>t(`div`,{style:x,children:n(f,{children:[t(c,{model:m(S)}),t(p,{model:_()}),t(d,{model:h(50,`6M0J`)})]})}))},w={render:()=>i(()=>t(`div`,{style:x,children:t(f,{children:t(d,{model:g()})})}))},T={render:()=>i(()=>t(`div`,{style:x,children:t(f,{children:t(c,{model:m(S,32)})})}))},E={render:()=>i(()=>t(`div`,{style:x,children:t(u,{model:m(S)})}))},D=[`Card`,`PeriodicBox`,`ManySnapshots`,`Snapshot`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style={frame}>
        <PlaybackDeck>
          <SnapshotRow model={mockSnapshots(post)} />
          <TransitionRow model={mockTransition()} />
          <TrajectoryRow model={mockTrajectory(50, '6M0J')} />
        </PlaybackDeck>
      </div>)
}`,...C.parameters?.docs?.source},description:{story:`The playback card: a row each for the snapshots, the current one's transition and a trajectory's models.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style={frame}>
        <PlaybackDeck>
          <TrajectoryRow model={mockPeriodicTrajectory()} />
        </PlaybackDeck>
      </div>)
}`,...w.parameters?.docs?.source},description:{story:`A simulation in a periodic box: its frames, and the box menu (molecules whole, in the box, no jumps, as read).`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style={frame}>
        <PlaybackDeck>
          <SnapshotRow model={mockSnapshots(post, 32)} />
        </PlaybackDeck>
      </div>)
}`,...T.parameters?.docs?.source},description:{story:`Many snapshots: the position is "n / N", opening a filterable list of titles.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style={frame}>
        <SnapshotCard model={mockSnapshots(post)} />
      </div>)
}`,...E.parameters?.docs?.source},description:{story:`The Story card's snapshot: its title, its position as dots, its description (markdown, links to others).`,...E.parameters?.docs?.description}}}})))()}O();export{C as Card,T as ManySnapshots,w as PeriodicBox,E as Snapshot,D as __namedExportsOrder,b as default};