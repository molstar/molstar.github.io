import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,n,r,t as i}from"./jsx-runtime-DzTO5r4L.js";import{n as a,r as o}from"./registry-D35yV2Tb.js";import{n as s,t as c}from"./debounceTime-D_qV2Azt.js";import{i as l,n as u,t as d}from"./control-flow-2XcFB3wB.js";import{n as f,t as p}from"./map-COHPbqb4.js";import{n as m,t as h}from"./combineLatest-nINHdI9G.js";import{n as g,t as _}from"./distinctUntilChanged-Bi0nDGSG.js";import{n as v,r as y}from"./observable-state-8hMFvtS9.js";import{n as b,t as x}from"./icon-Fyk1xIJy.js";import{n as S,t as C}from"./scroll-area-O9ZFxK58.js";import{n as w,t as T}from"./text-input-WVcFJO0h.js";import{n as E,t as D}from"./button-oplfrRqY.js";import{n as O,t as k}from"./markdown-9OgU-jyp.js";var A;function j(){return(j=e((()=>{o(),A={bar:`msp-canvas-playback-bar`,bare:`msp-canvas-playback-bare`,card:`msp-canvas-playback-card`,counter:`msp-canvas-playback-counter`,deck:`msp-canvas-playback-deck`,description:`msp-canvas-playback-description`,descriptionContent:`msp-canvas-playback-descriptionContent`,dot:`msp-canvas-playback-dot`,dots:`msp-canvas-playback-dots`,lead:`msp-canvas-playback-lead`,list:`msp-canvas-playback-list`,listIndex:`msp-canvas-playback-listIndex`,listRow:`msp-canvas-playback-listRow`,listRows:`msp-canvas-playback-listRows`,listRowsContent:`msp-canvas-playback-listRowsContent`,plain:`msp-canvas-playback-plain`,position:`msp-canvas-playback-position`,rowTitle:`msp-canvas-playback-rowTitle`,scrubber:`msp-canvas-playback-scrubber`,snapshots:`msp-canvas-playback-snapshots`,time:`msp-canvas-playback-time`,title:`msp-canvas-playback-title`,trajectoryLabel:`msp-canvas-playback-trajectoryLabel`},a(`views/canvas/playback.module.css`,`@layer msp.components {
.msp-canvas-playback-card {
  font-size: var(--msp-font-size-sm);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-glass-bg);
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
}

.msp-canvas-playback-deck {
  width: fit-content;
  max-width: 100%;
  font-size: var(--msp-font-size-sm);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-glass-bg);
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  grid-template-columns: minmax(0, 1fr);
  justify-self: start;
  display: grid;
  overflow: clip;

  &:not(:has([data-row])) {
    display: none;
  }

  & [data-row] {
    box-shadow: 0 -1px 0 var(--msp-color-border);
  }

  & .msp-canvas-playback-bar {
    height: 32px;
    padding: 0 var(--msp-space-1);
    gap: 0;
  }

  & :is(.msp-canvas-playback-rowTitle, .msp-canvas-playback-trajectoryLabel) {
    max-width: 168px;
    padding: 0 var(--msp-space-2);
    flex: 0 auto;
    font-weight: 500;
  }

  & :is(.msp-canvas-playback-rowTitle, .msp-canvas-playback-position) {
    margin-right: auto;
  }

  & :is(.msp-canvas-playback-counter, .msp-canvas-playback-position, .msp-canvas-playback-time) {
    font-size: var(--msp-font-size-xs);
  }

  & .msp-canvas-playback-counter {
    min-width: 36px;
  }

  & .msp-canvas-playback-time {
    min-width: 56px;
    padding-right: var(--msp-space-1);
  }

  & .msp-canvas-playback-scrubber {
    flex: 1 0 96px;
  }
}

.msp-canvas-playback-bare {
  min-width: 0;
  min-height: 0;
  font-size: var(--msp-font-size-sm);
  flex-direction: column;
  flex: 1 1 0;
  display: flex;

  & > .msp-canvas-playback-snapshots {
    flex: 1 1 0;
  }

  & .msp-canvas-playback-description {
    flex: 1 1 0;
    max-height: none;
  }
}

.msp-canvas-playback-snapshots {
  flex-direction: column;
  min-height: 0;
  display: flex;
}

.msp-canvas-playback-bar {
  align-items: center;
  gap: var(--msp-space-1);
  height: 34px;
  padding: 0 var(--msp-space-2);
  display: flex;

  & button {
    color: var(--msp-color-text-muted);

    &:hover:not(:disabled) {
      color: var(--msp-color-text);
    }

    &[aria-pressed="true"] {
      color: var(--msp-color-accent);
    }
  }

  & svg {
    width: 16px;
    height: 16px;
  }
}

.msp-canvas-playback-lead {
  width: 24px;
  height: 24px;
  color: var(--msp-color-text-muted);
  flex: none;
  place-items: center;
  display: grid;
}

.msp-canvas-playback-counter {
  min-width: 44px;
  font-size: var(--msp-font-size-sm);
  font-variant-numeric: tabular-nums;
  text-align: center;
  color: var(--msp-color-text-muted);
}

.msp-canvas-playback-title {
  min-width: 0;
  padding: 0 var(--msp-space-2) 0 var(--msp-space-3);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  font-weight: 600;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-canvas-playback-description {
  max-height: 40cqh;
}

.msp-canvas-playback-descriptionContent {
  min-width: 0;
  padding: 0 var(--msp-space-4) var(--msp-space-4);
  font-size: var(--msp-font-size-sm);
  overflow-wrap: anywhere;
}

.msp-canvas-playback-plain {
  white-space: pre-wrap;
  margin: 0;
  line-height: 1.5;
}

.msp-canvas-playback-scrubber {
  min-width: 40px;
  height: 16px;
  margin: 0 var(--msp-space-2);
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  background: none;
  flex: 1;

  &::-webkit-slider-runnable-track {
    background: linear-gradient(to right,
      var(--msp-color-text-muted) var(--msp-progress, 0%),
      var(--msp-color-border-strong) var(--msp-progress, 0%));
    border-radius: 1px;
    height: 2px;
  }

  &::-webkit-slider-thumb {
    background: var(--msp-color-text);
    -webkit-appearance: none;
    appearance: none;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin-top: -4px;
  }

  &::-moz-range-track {
    background: var(--msp-color-border-strong);
    border-radius: 1px;
    height: 2px;
  }

  &::-moz-range-progress {
    background: var(--msp-color-text-muted);
    border-radius: 1px;
    height: 2px;
  }

  &::-moz-range-thumb {
    background: var(--msp-color-text);
    border: 0;
    border-radius: 50%;
    width: 10px;
    height: 10px;
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: 2px;
    border-radius: var(--msp-radius-sm);
  }
}

.msp-canvas-playback-rowTitle {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  font-weight: 600;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-canvas-playback-time {
  min-width: 64px;
  color: var(--msp-color-text-muted);
  font-variant-numeric: tabular-nums;
  text-align: right;
  flex: none;
}

.msp-canvas-playback-trajectoryLabel {
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  font-weight: 600;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-canvas-playback-dots {
  margin-right: var(--msp-space-2);
  align-items: center;
  display: flex;
}

.msp-canvas-playback-dot {
  place-items: center;
  width: 14px;
  height: 24px;
  display: grid;

  &:before {
    content: "";
    background: var(--msp-color-border-strong);
    border-radius: 50%;
    width: 6px;
    height: 6px;
  }

  &:hover:before {
    background: var(--msp-color-text-muted);
  }

  &[aria-selected="true"]:before {
    background: var(--msp-color-text);
  }
}

.msp-canvas-playback-position {
  white-space: nowrap;
  height: 24px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  font-variant-numeric: tabular-nums;
  flex: none;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-canvas-playback-list {
  gap: var(--msp-space-2);
  padding: 0 var(--msp-space-2) var(--msp-space-2);
  display: grid;
}

.msp-canvas-playback-listRows {
  max-height: 220px;
}

.msp-canvas-playback-listRowsContent {
  grid-template-columns: minmax(0, 1fr);
  display: grid;
}

.msp-canvas-playback-listRow {
  align-items: center;
  gap: var(--msp-space-2);
  height: 26px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  grid-template-columns: 24px 1fr;
  display: grid;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[aria-selected="true"] {
    color: var(--msp-color-text);
    font-weight: 600;
  }
}

.msp-canvas-playback-listIndex {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  text-align: right;
}
}
`)})))()}function M(e){return n(u,{when:e.model.count.pipe(f(e=>e>0)),children:()=>n(`section`,{class:e.bare?A.bare:A.card,"aria-label":`Snapshots`,children:n(z,{model:e.model})})})}function N(e){return n(`section`,{class:A.deck,"aria-label":`Playback`,children:e.children})}function P(e){return n(u,{when:e.model.count.pipe(f(e=>e>1)),children:()=>n(W,{model:e.model})})}function F(e){let{model:t}=e;return n(u,{when:t.count.pipe(f(e=>e>1)),children:()=>{let i=y(!1);return r(`div`,{"data-row":!0,children:[r(`div`,{class:A.bar,role:`group`,"aria-label":`Snapshots`,children:[n(`span`,{class:A.lead,children:n(x,{name:`snapshots`,size:16})}),n(`button`,{type:`button`,class:A.position,"aria-expanded":i,"aria-label":t.title.pipe(f(e=>e?`Snapshots: ${e}`:`Snapshots`)),"data-tip":t.title.pipe(f(e=>e??`No snapshot applied`)),onClick:()=>i.set(!i.value),children:h([t.index,t.count]).pipe(f(([e,t])=>`${e<0?`–`:e+1} / ${t}`))}),n(D,{variant:`ghost`,size:`sm`,icon:n(x,{name:`chevron-left`}),title:`Previous snapshot`,onClick:()=>t.previous()}),n(G,{playing:t.isPlaying,title:`Play snapshots`,onClick:()=>t.togglePlay()}),n(D,{variant:`ghost`,size:`sm`,icon:n(x,{name:`chevron-right`}),title:`Next snapshot`,onClick:()=>t.next()}),e.actions?.()]}),n(u,{when:i,children:()=>n(U,{model:t,onClose:()=>i.set(!1)})})]})}})}function I(e){return n(D,{variant:`ghost`,size:`sm`,icon:n(u,{when:e.muted,fallback:()=>n(x,{name:`volume-2`}),children:()=>n(x,{name:`volume-x`})}),title:e.muted.pipe(f(e=>e?`Unmute`:`Mute`)),pressed:e.muted,onClick:()=>e.onClick()})}function L(e){return r(`div`,{class:A.bar,role:`group`,"aria-label":`Audio`,"data-row":!0,children:[n(`span`,{class:A.lead,children:n(x,{name:`volume-2`,size:16})}),n(`span`,{class:A.rowTitle,children:`Audio`}),n(I,{muted:e.muted,onClick:e.onToggleMute})]})}function R(e){let{model:t}=e;return n(u,{when:t.duration.pipe(f(e=>e>0)),children:()=>{let e=h([t.time,t.duration]).pipe(f(([e,t])=>`${t>0?100*Math.min(e,t)/t:0}%`));return r(`div`,{class:A.bar,role:`group`,"aria-label":`Transition`,"data-row":!0,children:[n(`span`,{class:A.lead,children:n(x,{name:`film`,size:16})}),n(`input`,{class:A.scrubber,type:`range`,min:`0`,max:t.duration.pipe(f(String)),step:t.step.pipe(f(e=>String(Math.max(1,Math.round(e))))),value:t.time.pipe(f(e=>String(Math.round(e)))),style:{"--msp-progress":e},"aria-label":`Transition time`,onInput:e=>t.seek(Number(e.currentTarget.value))}),n(`span`,{class:A.time,children:h([t.time,t.duration]).pipe(f(([e,t])=>`${q(e)} / ${q(t)} s`))}),n(D,{variant:`ghost`,size:`sm`,icon:n(u,{when:t.isPlaying,fallback:()=>n(x,{name:`play`}),children:()=>n(x,{name:`square`})}),title:t.isPlaying.pipe(f(e=>e?`Stop the transition`:`Play the transition`)),onClick:()=>t.togglePlay()})]})}})}function z(e){let{model:i}=e,a=y(!1),o=i.count.pipe(f(e=>e>K),_());return r(`div`,{class:A.snapshots,children:[r(`div`,{class:A.bar,children:[n(`span`,{class:A.title,children:i.title}),n(u,{when:i.count.pipe(f(e=>e>1)),children:()=>r(t,{children:[n(u,{when:o,fallback:()=>n(H,{model:i}),children:()=>n(`button`,{type:`button`,class:A.position,"aria-expanded":a,"aria-label":`Snapshots`,onClick:()=>a.set(!a.value),children:h([i.index,i.count]).pipe(f(([e,t])=>`${e+1} / ${t}`))})}),n(D,{variant:`ghost`,size:`sm`,icon:n(x,{name:`chevron-left`}),title:`Previous snapshot`,onClick:()=>i.previous()}),n(D,{variant:`ghost`,size:`sm`,icon:n(x,{name:`chevron-right`}),title:`Next snapshot`,onClick:()=>i.next()}),n(G,{playing:i.isPlaying,title:`Play snapshots`,onClick:()=>i.togglePlay()})]})})]}),n(u,{when:a,children:()=>n(U,{model:i,onClose:()=>a.set(!1)})}),n(u,{when:h([i.description,i.title]).pipe(c(0),f(([e,t])=>e&&B(e,t??``)),_()),children:e=>n(C,{class:A.description,contentClass:A.descriptionContent,children:n(u,{when:i.plainText??!1,fallback:()=>n(k,{source:e,onLink:e=>i.openLink(e),host:i.markdown}),children:()=>n(`p`,{class:A.plain,children:e})})})})]})}function B(e,t){let n=/^\s*#{1,6}[ \t]+(.+?)[ \t]*#*[ \t]*(?:\r?\n|$)/.exec(e);if(!n)return e;let r=V(n[1]),i=V(t);return!r||!(i===r||i.startsWith(`${r} `)||i.includes(` ${r} `)||i.endsWith(` ${r}`))?e:e.slice(n[0].length).replace(/^\s+/,``)}function V(e){return e.replace(/[[(]\s*\d+\s*\/\s*\d+\s*[\])]/g,` `).replace(/[*_`~]/g,``).toLowerCase().replace(/[^\p{L}\p{N}]+/gu,` `).trim()}function H(e){let{model:t}=e;return n(`span`,{class:A.dots,role:`tablist`,"aria-label":`Snapshots`,children:n(d,{each:t.titles,children:(e,r)=>n(`button`,{type:`button`,role:`tab`,class:A.dot,"data-tip":e,"aria-label":e,"aria-selected":h([t.index,r]).pipe(f(([e,t])=>e===t)),onClick:()=>t.goTo(r.value)})})})}function U(e){let{model:t}=e,i=y(``),a=h([t.titles,i.asReadonly]).pipe(f(([e,t])=>{let n=t.trim().toLowerCase();return e.map((e,t)=>({title:e,index:t})).filter(e=>!n||e.title.toLowerCase().includes(n))}));return r(`div`,{class:A.list,children:[n(u,{when:t.count.pipe(f(e=>e>12)),children:()=>n(T,{search:!0,size:`sm`,"aria-label":`Filter snapshots`,placeholder:`Filter`,value:i,onInput:e=>i.set(e)})}),n(C,{class:A.listRows,contentClass:A.listRowsContent,role:`listbox`,"aria-label":`Snapshots`,children:n(d,{each:a,children:i=>r(`button`,{type:`button`,role:`option`,class:A.listRow,"aria-selected":t.index.pipe(f(e=>e===i.index)),onClick:()=>{t.goTo(i.index),e.onClose()},children:[n(`span`,{class:A.listIndex,children:String(i.index+1)}),n(`span`,{children:i.title})]})},e=>e.index)})]})}function W(e){let{model:t}=e,i=e=>{let n=t.count.value;n>1&&t.seek(((t.index.value+e)%n+n)%n)},a=h([t.index,t.count]).pipe(f(([e,t])=>`${t>1?100*e/(t-1):0}%`));return r(`div`,{class:A.bar,role:`group`,"aria-label":`Models`,"data-row":!0,children:[n(`span`,{class:A.lead,children:n(x,{name:`trajectory`,size:16})}),n(`span`,{class:A.trajectoryLabel,children:t.label}),n(`span`,{class:A.counter,children:h([t.index,t.count]).pipe(f(([e,t])=>`${e+1} / ${t}`))}),n(`input`,{class:A.scrubber,type:`range`,min:`0`,max:t.count.pipe(f(e=>String(e-1))),value:t.index.pipe(f(String)),style:{"--msp-progress":a},"aria-label":`Model`,onInput:e=>t.seek(Number(e.currentTarget.value))}),n(D,{variant:`ghost`,size:`sm`,icon:n(x,{name:`chevron-left`}),title:`Previous model`,onClick:()=>i(-1)}),n(G,{playing:t.isPlaying,title:`Play models`,onClick:()=>t.togglePlay()}),n(D,{variant:`ghost`,size:`sm`,icon:n(x,{name:`chevron-right`}),title:`Next model`,onClick:()=>i(1)})]})}function G(e){return n(D,{variant:`ghost`,size:`sm`,icon:n(u,{when:e.playing,fallback:()=>n(x,{name:`play`}),children:()=>n(x,{name:`pause`})}),title:e.playing.pipe(f(t=>t?`Pause`:e.title)),pressed:e.playing,onClick:()=>e.onClick()})}var K,q;function J(){return(J=e((()=>{m(),s(),g(),p(),E(),b(),O(),S(),w(),l(),v(),j(),i(),K=7,q=e=>(e/1e3).toFixed(1)})))()}export{F as a,J as c,M as i,I as n,P as o,N as r,R as s,L as t};