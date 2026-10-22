import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{S as t,b as n,n as r,t as i}from"./jsx-runtime-Dut-27nP.js";import{c as a,d as o,f as s,i as c,l,m as u,o as d,p as f,s as p,t as m,u as h}from"./real-viewer-8wWdKEGJ.js";import{n as g}from"./story-root-DtvPaZZ6.js";import{d as _}from"./scene-tree-BvZ8cYEi.js";import{a as v,t as y}from"./canvas-presence-Bu6No3mZ.js";function b(e){let n=document.createElement(`div`);n.style.cssText=`height: 100vh; display: flex; flex-direction: column; gap: 4px; box-sizing: border-box; padding: 4px`;let r=document.createElement(`div`);if(r.style.cssText=`flex: 1; min-height: 0; display: grid; gap: 4px; grid-template-columns: repeat(auto-fit, minmax(${e.minWidth??420}px, 1fr)); grid-auto-rows: minmax(320px, 1fr); overflow: auto`,e.header!==void 0){let t=document.createElement(`div`);t.append(e.header),n.append(t)}n.append(r);let i=e.cells.map(e=>{let t=document.createElement(`div`);t.style.cssText=S,t.dataset.viewer=e.key;let n=document.createElement(`div`);n.style.cssText=C;let i=document.createElement(`strong`);i.textContent=e.title;let a=document.createElement(`code`);a.textContent=`persist.key: ${e.key}`,n.append(i,a);let o=document.createElement(`div`);return o.style.cssText=`flex: 1; min-height: 0; position: relative`,t.append(n,o),r.append(t),o}),a=[],o=!1,s;return t(()=>{o=!0,s?.();let e=a.splice(0);x=Promise.all([x,...e.map(e=>e.dispose())])}),queueMicrotask(async()=>{await x;for(let[t,n]of e.cells.entries()){if(o)return;let r=f(),s=await d({target:i[t],spec:{...r,...n.theme?{ui:{...r.ui,theme:n.theme}}:{},...e.options?{options:{...r.options,...e.options}}:{},persist:{key:n.key,preferences:e.keep?h(`local`,{prefix:n.key,version:`stories`,budget:65536}):l({version:`stories`,budget:65536})}}});if(o)return void s.dispose();a.push(s)}await Promise.all(e.cells.map(async(e,t)=>{try{await e.setup(a[t])}catch(t){console.error(`[story] ${e.key}:`,t)}})),o||(s=e.ready?.(a))}),n}var x,S,C;function w(){return(w=e((()=>{n(),u(),p(),a(),x=Promise.resolve(),S=`display: flex; flex-direction: column; min-width: 0; min-height: 0; border: 1px solid #8884`,C=`font: 12px/1.6 system-ui, sans-serif; padding: 2px 8px; display: flex; justify-content: space-between; gap: 8px`})))()}function T(e){return e.split(/^\$\$\$\$[ \t]*\r?\n?/m).map(e=>e.replace(/^(\r?\n)+/,``)).filter(e=>e.trim().length>0).map(e=>`${e.replace(/\s+$/,``)}\n$$$$\n`)}function E(e,t){let n=e.split(/\r?\n/,1)[0]?.trim();return n?`${n} (pose ${t+1})`:`Pose ${t+1}`}async function D(e,t){let n=await fetch(t);if(!n.ok)throw Error(`${t}: ${n.status}`);return{receptor:e,poses:T(await n.text())}}async function O(e,t,n){let r=await e.api.load.url({url:t.receptor,format:`pdb`});if(!r.ok)throw Error(r.message);let i=t.poses[n];if(i===void 0)throw Error(`There is no pose ${n+1}.`);let a=await e.api.load.data({data:i,format:`sdf`,label:E(i,n)});if(!a.ok)throw Error(a.message)}async function k(e,t){let n=await e.api.load.url({url:t,format:`mmcif`});if(!n.ok)throw Error(n.message)}function A(){let e,t=Array.from({length:N},(t,n)=>({key:`pose-${n+1}`,title:`Pose ${n+1}`,setup:async t=>{e??=D(m.dockingReceptor,m.dockingPoses);let r=await e;await O(t,r,n);let i=document.querySelector(`[data-viewer="pose-${n+1}"] strong`);i&&(i.textContent=E(r.poses[n],n))}})),n=!0,i=[],a=0,o,c=()=>{o?.(),o=void 0,n&&i.length&&(o=s(i,i[a]))},l=document.createElement(`button`);l.type=`button`;let u=()=>{l.textContent=n?`Cameras linked`:`Cameras unlinked`,l.setAttribute(`aria-pressed`,String(n))};u(),l.addEventListener(`click`,()=>{n=!n,u(),c()});let d=document.createElement(`button`);d.type=`button`,d.textContent=`Reset all`,d.addEventListener(`click`,()=>{for(let e of n?i.slice(0,1):i)e.api.camera.reset()});let f=document.createElement(`div`);return f.style.cssText=`display: flex; gap: 8px; padding: 2px 4px; font: 13px system-ui, sans-serif`,f.append(l,d),r(b,{minWidth:520,header:f,cells:t,ready:e=>{i=e;let t=e.map((e,t)=>e.camera.changed.subscribe(()=>void(a=t)));return(async()=>{await e[0].api.camera.frame({target:`ligand`,animate:!1}),c()})(),()=>{for(let e of t)e.unsubscribe();o?.()}}})}var j,M,N,P,F,I;function L(){return(L=e((()=>{_(),c(),o(),w(),v(),n(),i(),j={title:`Viewer/Several viewers`,parameters:{layout:`fullscreen`}},M={render:()=>g(()=>r(b,{keep:!0,minWidth:460,cells:[{key:`several-cbs`,title:`1CBS`,theme:`light`,setup:e=>k(e,m.cbs)},{key:`several-crambin`,title:`Crambin`,theme:`dark`,setup:e=>k(e,m.crambin)},{key:`several-grm`,title:`Gramicidin`,theme:`blue`,setup:e=>k(e,m.grm)}]}))},N=4,P={name:`Poses with a synced camera`,render:()=>g(()=>r(A,{}))},F={name:`Fifty viewers`,render:()=>g(()=>{let e=[m.crambin,m.grm,m.cbs],n=[`Crambin`,`Gramicidin`,`1CBS`],i=Array.from({length:50},(t,r)=>({key:`fifty-${r}`,title:`${r+1}. ${n[r%3]}`,setup:t=>k(t,e[r%3])})),a=document.createElement(`code`),o=()=>{let e=y.stats();a.textContent=`viewers ${e.viewers} · in view ${e.inView} · live graphics contexts ${e.live} (budget ${y.budget}) · in view without one ${e.dark}`},s=setInterval(o,500);return t(()=>clearInterval(s)),o(),r(b,{minWidth:260,cells:i,header:a,options:{ui:{pauseOutOfView:`always`}}})})},I=[`Independent`,`PosesWithSyncedCamera`,`Fifty`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <ViewerGrid keep minWidth={460} cells={[{
    key: 'several-cbs',
    title: '1CBS',
    theme: 'light',
    setup: v => load(v, ExampleFiles.cbs)
  }, {
    key: 'several-crambin',
    title: 'Crambin',
    theme: 'dark',
    setup: v => load(v, ExampleFiles.crambin)
  }, {
    key: 'several-grm',
    title: 'Gramicidin',
    theme: 'blue',
    setup: v => load(v, ExampleFiles.grm)
  }]} />)
}`,...M.parameters?.docs?.source},description:{story:`Three independent viewers, each its own structure and theme (1CBS, crambin, gramicidin). What to try: ⌘K opens the
command menu of the viewer with the focus only; selecting, hovering, the context menu, the panels, Expand and Fullscreen
are each viewer's own; the theme and the layout you change in one are kept under its key (\`persist.key\`, in
localStorage) and are not seen by the others; a command registered in one is not in the others.`,...M.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Poses with a synced camera',
  render: () => story(() => <Poses />)
}`,...P.parameters?.docs?.source},description:{story:'Docking poses side by side: the same receptor with each of four poses of the ligand (`data/examples/docking`, the poses\nsplit from one SDF), a viewer each, their cameras linked (`viewer.camera`, `syncCameras`): moving one moves the\nothers, with no echo. "Link cameras" turns it off, and the viewers move apart; on again, they come to the one moved\nlast.',...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Fifty viewers',
  render: () => story(() => {
    const files = [ExampleFiles.crambin, ExampleFiles.grm, ExampleFiles.cbs];
    const names = ['Crambin', 'Gramicidin', '1CBS'];
    const cells: ViewerCell[] = Array.from({
      length: 50
    }, (_, i) => ({
      key: \`fifty-\${i}\`,
      title: \`\${i + 1}. \${names[i % 3]}\`,
      setup: v => load(v, files[i % 3])
    }));
    const readout = document.createElement('code');
    const update = () => {
      const s = CanvasContexts.stats();
      readout.textContent = \`viewers \${s.viewers} · in view \${s.inView} · live graphics contexts \${s.live} (budget \${CanvasContexts.budget}) · in view without one \${s.dark}\`;
    };
    const timer = setInterval(update, 500);
    onCleanup(() => clearInterval(timer));
    update();
    // \`always\`: also in an automated browser (where \`auto\` leaves canvases running), so a test sees what a person does.
    return <ViewerGrid minWidth={260} cells={cells} header={readout} options={{
      ui: {
        pauseOutOfView: 'always'
      }
    } as PrismViewerSpec['options']} />;
  })
}`,...F.parameters?.docs?.source},description:{story:`Fifty viewers on one page, more than the browser keeps WebGL contexts for (Chrome 16). Only the viewers in view run
their canvas; past the page's budget, the contexts of viewers out of view are released, the longest unseen first, and
a viewer scrolled back into view gets its context back (canvas-presence.ts). Scroll the grid: the viewers in view
always draw, none stays black. The header counts the viewers, those in view and the live contexts.`,...F.parameters?.docs?.description}}}})))()}L();export{F as Fifty,M as Independent,P as PosesWithSyncedCamera,I as __namedExportsOrder,j as default};