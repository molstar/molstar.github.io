import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{X as t,Z as n,a as r,n as i,r as a,t as o}from"./jsx-runtime-pJJ4pzd1.js";import{n as s,t as c}from"./map-BLVP9Oyc.js";import{r as l}from"./observable-state-U0Aegh1x.js";import{E as u,S as d,m as f,p,t as m}from"./shell-CzI7wQ_f.js";import{f as h,n as g,p as _,r as v}from"./control-flow-D80wAH1n.js";import{n as y,t as b}from"./combineLatest-BuVl0X9y.js";import{t as x}from"./icon-Cd9kBD44.js";import{t as S}from"./scroll-area-W5mfuQm0.js";import{t as C}from"./button-nz8xXRSW.js";import{l as w,t as T}from"./src-C9Ks2Bfq.js";import{i as E}from"./shell-story-DVkhNfUb.js";import{t as D}from"./markdown-De--vheY.js";import{t as O}from"./playback-Clf1CcTQ.js";import{t as k}from"./testing-Da1XjxlU.js";var A;function j(){return(j=e((()=>{n(),A={caption:`msp-stories-story-tab-caption`,empty:`msp-stories-story-tab-empty`,header:`msp-stories-story-tab-header`,number:`msp-stories-story-tab-number`,scene:`msp-stories-story-tab-scene`,sceneTitle:`msp-stories-story-tab-sceneTitle`,scenes:`msp-stories-story-tab-scenes`,tab:`msp-stories-story-tab-tab`,title:`msp-stories-story-tab-title`},t(`stories/views/story-tab.module.css`,`@layer msp.components {
.msp-stories-story-tab-tab {
  gap: var(--msp-space-2);
  height: 100%;
  min-height: 0;
  padding: 0 var(--msp-panel-inset) var(--msp-panel-inset);
  font-size: var(--msp-font-size-sm);
  flex-direction: column;
  flex: 1 1 0;
  display: flex;
}

.msp-stories-story-tab-header {
  align-items: center;
  gap: var(--msp-space-2);
  min-height: 28px;
  padding-left: var(--msp-space-3);
  display: flex;
}

.msp-stories-story-tab-title {
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  font-weight: 600;
  overflow: hidden;
}

.msp-stories-story-tab-scenes {
  flex: 1 1 0;
  min-height: 80px;
}

.msp-stories-story-tab-scene {
  align-items: center;
  gap: var(--msp-space-3);
  height: 28px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  transition: background-color var(--msp-motion-fast) var(--msp-ease);
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  &[aria-selected="true"] {
    background: var(--msp-color-accent-muted);
  }
}

.msp-stories-story-tab-number {
  min-width: 16px;
  color: var(--msp-color-text-subtle);
  font-variant-numeric: tabular-nums;
  flex: none;
}

.msp-stories-story-tab-sceneTitle {
  white-space: nowrap;
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-timing-function: linear;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-stories-story-tab-caption {
  max-height: 40%;
  padding: var(--msp-space-3);
  border-top: 1px solid var(--msp-glass-edge);
  flex: none;
  overflow: auto;
}

.msp-stories-story-tab-empty {
  color: var(--msp-color-text-subtle);
  margin: 0;
}
}
`)})))()}function M(e){let{story:t}=e,n=b([t.scenes,t.current]).pipe(s(([e,t])=>e.find(e=>e.id===t)));return a(`div`,{class:A.tab,children:[a(`header`,{class:A.header,children:[i(`span`,{class:A.title,children:t.title}),i(C,{size:`sm`,variant:`ghost`,icon:i(x,{name:`plus`,size:14}),onClick:()=>t.addScene(),children:`Add scene`})]}),i(S,{edge:!0,class:A.scenes,role:`listbox`,"aria-label":`Scenes`,children:i(g,{each:t.scenes,children:(e,n)=>a(`div`,{role:`option`,class:A.scene,"aria-selected":t.current.pipe(s(t=>t===e.id)),onClick:()=>t.select(e.id),children:[i(`span`,{class:A.number,children:n.pipe(s(e=>e+1))}),i(`span`,{class:A.sceneTitle,"data-tip-overflow":``,children:e.title})]})},e=>e.id)}),i(v,{when:n,children:e=>i(`section`,{class:A.caption,"aria-label":`Caption`,children:e.caption?i(D,{source:e.caption}):i(`p`,{class:A.empty,children:`No caption yet.`})})})]})}function N(){return(N=e((()=>{T(),y(),c(),j(),o()})))()}function P(e){let t=l(I),n=l(I[0].id),r=l(!1),i,a=0,o=()=>t.value.findIndex(e=>e.id===n.value),s=e=>{let r=t.value;r.length&&n.set(r[(e+r.length)%r.length].id)},c=l(I.length),u=l(0),d=l(I[0].title),f=l(I.map(e=>e.title)),p=l(I[0].caption),m=()=>{let e=o(),n=t.value[e];c.set(t.value.length),u.set(e),d.set(n?.title),f.set(t.value.map(e=>e.title)),p.set(n?.caption)};t.asReadonly.subscribe(m),n.asReadonly.subscribe(m);let h={count:c.asReadonly,index:u.asReadonly,title:d.asReadonly,titles:f.asReadonly,description:p.asReadonly,isPlaying:r.asReadonly,previous:()=>s(o()-1),next:()=>s(o()+1),goTo:s,togglePlay:()=>{r.set(!r.value),clearInterval(i),r.value&&(i=setInterval(()=>s(o()+1),2500))},openLink:t=>e(`Link: ${t}`)};return{title:l(`How the liver clears drugs`).asReadonly,scenes:t.asReadonly,current:n.asReadonly,select:e=>n.set(e),addScene:()=>{let r={id:`scene-${++a}`,title:`New scene ${a}`},i=t.value.slice();i.splice(o()+1,0,r),t.set(i),n.set(r.id),e(`Added “${r.title}” from the current view`)},removeScene:e=>t.set(t.value.filter(t=>t.id!==e)),player:h}}function F(){return{id:`story`,title:`Story mode`,icon:`play`,description:`Build a story scene by scene, and play it`,activate:({shell:e,status:t,background:n})=>{let r=P(e=>t.post(e));e.registerTabs([{id:`story`,compactBar:!0,title:`Story`,icon:`play`,order:0,place:`head`,render:d(()=>i(M,{story:r}))}]);let a=e=>({message:e}),o=new p({context:l({}).asReadonly,formats:{get:()=>void 0}});return o.register([{id:`story.add-scene`,title:`Add scene`,alias:[`new scene`,`capture`],category:`Story`,icon:`plus`,run:()=>(r.addScene(),a(``))},{id:`story.play`,title:`Play story`,alias:[`present`,`run`],category:`Story`,icon:`play`,run:()=>(r.player.togglePlay(),a(`Playing the story`))},{id:`story.next`,title:`Next scene`,category:`Story`,icon:`step-forward`,shortcut:{key:`ArrowRight`,alt:!0},run:()=>(r.player.next(),a(``))},{id:`story.previous`,title:`Previous scene`,category:`Story`,icon:`step-back`,shortcut:{key:`ArrowLeft`,alt:!0},run:()=>(r.player.previous(),a(``))},{id:`story.export`,title:`Export story`,alias:[`mvsx`,`download`,`publish`],category:`Story`,icon:`download`,run:()=>a(`Saved story.mvsx`)}]),{start:`story`,commands:o,canvas:()=>i(u,{empty:!1,background:n}),playback:()=>i(O,{model:r.player}),bindings:[{title:`Camera`,bindings:[{action:`Rotate`,input:[`Drag`],or:[`One-finger drag`]},{action:`Zoom`,input:[`Scroll`],or:[`Pinch`]}]},{title:`Playing`,bindings:[{action:`Next scene`,input:[`⌥`,`→`]},{action:`Previous scene`,input:[`⌥`,`←`]}]}],empty:_(!1)}}}}var I;function L(){return(L=e((()=>{T(),f(),w(),h(),N(),o(),I=[{id:`overview`,title:`Cytochrome P450 3A4`,caption:`The enzyme that clears **half of all drugs** from the body.`},{id:`heme`,title:`The heme`,caption:"Iron at the centre of a porphyrin ring, held by `Cys442`."},{id:`pocket`,title:`A large, flexible pocket`,caption:`Room for many different drugs, and sometimes two at once.`},{id:`channel`,title:`Substrate channel`,caption:`How a drug gets in from the membrane side.`}]})))()}var R,z,B,V,H;function U(){return(U=e((()=>{w(),k(),L(),o(),R={title:`Shell/Story mode`,parameters:{layout:`fullscreen`}},z={render:()=>r(()=>i(`div`,{style:`height: 100vh`,children:i(m,{loaded:!0,modes:[F(),E()],start:`story`})}))},B={render:()=>r(()=>i(`div`,{style:`height: 100vh`,children:i(m,{loaded:!0,modes:[E(),F()],start:`viewer`})}))},V={render:()=>r(()=>i(`div`,{style:`height: 100vh`,children:i(m,{loaded:!1,modes:[E(),F()]})}))},H=[`StartInStory`,`StartInViewer`,`FirstOpen`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style="height: 100vh">
        <PrismAppStory loaded={true} modes={[mockStoryMode(), mockViewerMode()]} start="story" />
      </div>)
}`,...z.parameters?.docs?.source},description:{story:`An app with two modes, started in the story mode (a first sketch: the Story tab with the scenes and the caption, the
scenes playing on the canvas, story commands in ⌘K). "Switch mode…" in the command menu shows the choice over the
app, saying what goes; choosing the viewer starts a new app in it, Cancel goes back.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style="height: 100vh">
        <PrismAppStory loaded={true} modes={[mockViewerMode(), mockStoryMode()]} start="viewer" />
      </div>)
}`,...B.parameters?.docs?.source},description:{story:`The viewer mode first, the story mode a switch away.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style="height: 100vh">
        <PrismAppStory loaded={false} modes={[mockViewerMode(), mockStoryMode()]} />
      </div>)
}`,...V.parameters?.docs?.source},description:{story:`The first open: the splash asks which mode before any app exists; choosing one creates the app in it. With nothing
loaded, Home offers the modes again (no loss: it starts the other at once); later, "Switch mode…" asks first.`,...V.parameters?.docs?.description}}}})))()}U();export{V as FirstOpen,z as StartInStory,B as StartInViewer,H as __namedExportsOrder,R as default};