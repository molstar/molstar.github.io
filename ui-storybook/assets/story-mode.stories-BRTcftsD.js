import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,n,r,t as i}from"./jsx-runtime-DiBZWcxb.js";import{i as a,r as o}from"./base-Cal5NIfy.js";import{l as s,n as c,r as l,u}from"./control-flow-HAEcegil.js";import{n as d,t as f}from"./map-CsR1ibWS.js";import{n as p,t as m}from"./combineLatest-Cmmnh-lC.js";import{T as h,k as g,m as _,p as v,t as y}from"./shell-Dnh1QcSy.js";import{r as b}from"./observable-state-D-XGaosJ.js";import{t as x}from"./icon-Dqu8cMU0.js";import{t as S}from"./scroll-area-XzYIuKyv.js";import{t as C}from"./button-DEZz5joq.js";import{d as w,t as T}from"./src-C_tJCfFc.js";import{i as E}from"./shell-story-DSor2oTS.js";import{t as D}from"./markdown-CW7HDWTS.js";import{t as O}from"./playback-Dftv5awz.js";import{t as k}from"./testing-CDhIe_d5.js";var A;function j(){return(j=e((()=>{a(),A={caption:`msp-stories-story-tab-caption`,empty:`msp-stories-story-tab-empty`,header:`msp-stories-story-tab-header`,number:`msp-stories-story-tab-number`,scene:`msp-stories-story-tab-scene`,sceneTitle:`msp-stories-story-tab-sceneTitle`,scenes:`msp-stories-story-tab-scenes`,tab:`msp-stories-story-tab-tab`,title:`msp-stories-story-tab-title`},o(`stories/views/story-tab.module.css`,`@layer msp.components {
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
`)})))()}function M(e){let{story:t}=e,i=m([t.scenes,t.current]).pipe(d(([e,t])=>e.find(e=>e.id===t)));return r(`div`,{class:A.tab,children:[r(`header`,{class:A.header,children:[n(`span`,{class:A.title,children:t.title}),n(C,{size:`sm`,variant:`ghost`,icon:n(x,{name:`plus`,size:14}),onClick:()=>t.addScene(),children:`Add scene`})]}),n(S,{edge:!0,class:A.scenes,role:`listbox`,"aria-label":`Scenes`,children:n(c,{each:t.scenes,children:(e,i)=>r(`div`,{role:`option`,class:A.scene,"aria-selected":t.current.pipe(d(t=>t===e.id)),onClick:()=>t.select(e.id),children:[n(`span`,{class:A.number,children:i.pipe(d(e=>e+1))}),n(`span`,{class:A.sceneTitle,"data-tip-overflow":``,children:e.title})]})},e=>e.id)}),n(l,{when:i,children:e=>n(`section`,{class:A.caption,"aria-label":`Caption`,children:e.caption?n(D,{source:e.caption}):n(`p`,{class:A.empty,children:`No caption yet.`})})})]})}function N(){return(N=e((()=>{T(),p(),f(),j(),i()})))()}function P(e){let t=b(I),n=b(I[0].id),r=b(!1),i,a=0,o=()=>t.value.findIndex(e=>e.id===n.value),s=e=>{let r=t.value;r.length&&n.set(r[(e+r.length)%r.length].id)},c=b(I.length),l=b(0),u=b(I[0].title),d=b(I.map(e=>e.title)),f=b(I[0].caption),p=()=>{let e=o(),n=t.value[e];c.set(t.value.length),l.set(e),u.set(n?.title),d.set(t.value.map(e=>e.title)),f.set(n?.caption)};t.asReadonly.subscribe(p),n.asReadonly.subscribe(p);let m={count:c.asReadonly,index:l.asReadonly,title:u.asReadonly,titles:d.asReadonly,description:f.asReadonly,isPlaying:r.asReadonly,previous:()=>s(o()-1),next:()=>s(o()+1),goTo:s,togglePlay:()=>{r.set(!r.value),clearInterval(i),r.value&&(i=setInterval(()=>s(o()+1),2500))},openLink:t=>e(`Link: ${t}`)};return{title:b(`How the liver clears drugs`).asReadonly,scenes:t.asReadonly,current:n.asReadonly,select:e=>n.set(e),addScene:()=>{let r={id:`scene-${++a}`,title:`New scene ${a}`},i=t.value.slice();i.splice(o()+1,0,r),t.set(i),n.set(r.id),e(`Added “${r.title}” from the current view`)},removeScene:e=>t.set(t.value.filter(t=>t.id!==e)),player:m}}function F(){return{id:`story`,title:`Story mode`,icon:`play`,description:`Build a story scene by scene, and play it`,activate:({shell:e,status:t,background:r})=>{let i=P(e=>t.post(e));e.registerTabs([{id:`story`,compactBar:!0,title:`Story`,icon:`play`,order:0,place:`head`,render:h(()=>n(M,{story:i}))}]);let a=e=>({message:e}),o=new v({context:b({}).asReadonly,formats:{get:()=>void 0}});return o.register([{id:`story.add-scene`,title:`Add scene`,alias:[`new scene`,`capture`],category:`Story`,icon:`plus`,run:()=>(i.addScene(),a(``))},{id:`story.play`,title:`Play story`,alias:[`present`,`run`],category:`Story`,icon:`play`,run:()=>(i.player.togglePlay(),a(`Playing the story`))},{id:`story.next`,title:`Next scene`,category:`Story`,icon:`step-forward`,shortcut:{key:`ArrowRight`,alt:!0},run:()=>(i.player.next(),a(``))},{id:`story.previous`,title:`Previous scene`,category:`Story`,icon:`step-back`,shortcut:{key:`ArrowLeft`,alt:!0},run:()=>(i.player.previous(),a(``))},{id:`story.export`,title:`Export story`,alias:[`mvsx`,`download`,`publish`],category:`Story`,icon:`download`,run:()=>a(`Saved story.mvsx`)}]),{start:`story`,commands:o,canvas:()=>n(g,{empty:!1,background:r}),playback:()=>n(O,{model:i.player}),bindings:[{title:`Camera`,bindings:[{action:`Rotate`,input:[`Drag`],or:[`One-finger drag`]},{action:`Zoom`,input:[`Scroll`],or:[`Pinch`]}]},{title:`Playing`,bindings:[{action:`Next scene`,input:[`⌥`,`→`]},{action:`Previous scene`,input:[`⌥`,`←`]}]}],empty:u(!1)}}}}var I;function L(){return(L=e((()=>{T(),_(),w(),s(),N(),i(),I=[{id:`overview`,title:`Cytochrome P450 3A4`,caption:`The enzyme that clears **half of all drugs** from the body.`},{id:`heme`,title:`The heme`,caption:"Iron at the centre of a porphyrin ring, held by `Cys442`."},{id:`pocket`,title:`A large, flexible pocket`,caption:`Room for many different drugs, and sometimes two at once.`},{id:`channel`,title:`Substrate channel`,caption:`How a drug gets in from the membrane side.`}]})))()}var R,z,B,V,H;function U(){return(U=e((()=>{w(),k(),L(),i(),R={title:`Shell/Story mode`,parameters:{layout:`fullscreen`}},z={render:()=>t(()=>n(`div`,{style:`height: 100vh`,children:n(y,{loaded:!0,modes:[F(),E()],start:`story`})}))},B={render:()=>t(()=>n(`div`,{style:`height: 100vh`,children:n(y,{loaded:!0,modes:[E(),F()],start:`viewer`})}))},V={render:()=>t(()=>n(`div`,{style:`height: 100vh`,children:n(y,{loaded:!1,modes:[E(),F()]})}))},H=[`StartInStory`,`StartInViewer`,`FirstOpen`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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