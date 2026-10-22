import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n,t as r}from"./jsx-runtime-Dut-27nP.js";import{n as i,t as a}from"./story-root-DtvPaZZ6.js";import{n as o,t as s}from"./observable-state-C67cgDrf.js";import{a as c,c as l,i as u,o as d,r as f,s as p}from"./playback-_bPz9Jn5.js";function m(e,t){let n=t===void 0?_:Array.from({length:t},(e,t)=>({title:[`Overview`,`Active site`,`Heme pocket`,`Substrate channel`,`Surface`,`Ligand contacts`][t%6]+(t>=6?` ${Math.floor(t/6)+1}`:``),description:t%3==2?void 0:`Step ${t+1} of the tour.`})),r=o(0),i=o(!1),a=o(n[0].title),s=o(n[0].description),c,l=e=>{let t=(e+n.length)%n.length;r.set(t),a.set(n[t].title),s.set(n[t].description)};return{count:o(n.length).asReadonly,index:r.asReadonly,title:a.asReadonly,titles:o(n.map(e=>e.title)).asReadonly,description:s.asReadonly,isPlaying:i.asReadonly,previous:()=>l(r.value-1),next:()=>l(r.value+1),goTo:l,togglePlay:()=>{i.set(!i.value),clearInterval(c),i.value&&(c=setInterval(()=>l(r.value+1),2500))},openLink:t=>{let r=n.findIndex(e=>`#${e.title.toLowerCase().replace(/ /g,`-`)}`===t);r>=0?l(r):e(`Link: ${t}`)}}}function h(e=20,t=`1TQN`){let n=o(0),r=o(!1),i;return{label:o(t).asReadonly,count:o(e).asReadonly,index:n.asReadonly,isPlaying:r.asReadonly,seek:t=>n.set(Math.max(0,Math.min(e-1,t))),togglePlay:()=>{r.set(!r.value),clearInterval(i),r.value&&(i=setInterval(()=>n.set((n.value+1)%e),150))}}}function g(e=2e3,t=100){let n=o(0),r=o(!1),i,a=()=>{clearInterval(i),r.set(!1)};return{duration:o(e).asReadonly,step:o(t).asReadonly,time:n.asReadonly,isPlaying:r.asReadonly,seek:t=>{a(),n.set(Math.max(0,Math.min(e,t)))},togglePlay:()=>{if(r.value)return a();n.set(0),r.set(!0),i=setInterval(()=>{let r=n.value+t;n.set(Math.min(e,r)),r>=e&&a()},t)}}}var _;function v(){return(v=e((()=>{s(),_=[{title:`Overview`,description:`Cytochrome **P450 3A4** with its heme cofactor.

See the [active site](#active-site).`},{title:`Active site`,description:`### Active site
- Heme iron coordinated by \`Cys442\`
- Substrate channel above the heme

Back to the [overview](#overview).`},{title:`Surface`,description:void 0}]})))()}var y,b,x,S,C,w,T;function E(){return(E=e((()=>{v(),a(),l(),r(),y={title:`Components/Playback`},b=`width: 320px; padding: var(--msp-space-6); background: var(--msp-color-bg);`,x=e=>console.info(e),S={render:()=>i(()=>t(`div`,{style:b,children:n(f,{children:[t(c,{model:m(x)}),t(p,{model:g()}),t(d,{model:h(50,`6M0J`)})]})}))},C={render:()=>i(()=>t(`div`,{style:b,children:t(f,{children:t(c,{model:m(x,32)})})}))},w={render:()=>i(()=>t(`div`,{style:b,children:t(u,{model:m(x)})}))},T=[`Card`,`ManySnapshots`,`Snapshot`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style={frame}>
        <PlaybackDeck>
          <SnapshotRow model={mockSnapshots(post)} />
          <TransitionRow model={mockTransition()} />
          <TrajectoryRow model={mockTrajectory(50, '6M0J')} />
        </PlaybackDeck>
      </div>)
}`,...S.parameters?.docs?.source},description:{story:`The playback card: a row each for the snapshots, the current one's transition and a trajectory's models.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style={frame}>
        <PlaybackDeck>
          <SnapshotRow model={mockSnapshots(post, 32)} />
        </PlaybackDeck>
      </div>)
}`,...C.parameters?.docs?.source},description:{story:`Many snapshots: the position is "n / N", opening a filterable list of titles.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style={frame}>
        <SnapshotCard model={mockSnapshots(post)} />
      </div>)
}`,...w.parameters?.docs?.source},description:{story:`The Story card's snapshot: its title, its position as dots, its description (markdown, links to others).`,...w.parameters?.docs?.description}}}})))()}E();export{S as Card,C as ManySnapshots,w as Snapshot,T as __namedExportsOrder,y as default};