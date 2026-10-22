import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,g as n,i as r,n as i,r as a,t as o}from"./jsx-runtime-Dut-27nP.js";import{n as s,r as c}from"./registry-D35yV2Tb.js";import{i as l,n as u,t as d}from"./control-flow-BGkEkAG8.js";import{b as f,v as p,x as m}from"./work-queue-DoxU-HjK.js";import{n as h,t as g}from"./observable-state-C67cgDrf.js";import{n as _,t as v}from"./icon-CrwnZGU9.js";import{c as y,i as b}from"./scoped-CYrGtqEo.js";import{n as x,t as S}from"./scroll-area-C3WxaIdw.js";import{n as C,t as w}from"./keyed-selector-MU49iODI.js";import{n as T,t as E}from"./text-input-6-TvZsXK.js";import{n as D,t as O}from"./button-C9pAumBZ.js";import{n as k,t as A}from"./markdown-BK4pKdRH.js";var j;function M(){return(M=e((()=>{c(),j={bar:`msp-canvas-playback-bar`,bare:`msp-canvas-playback-bare`,card:`msp-canvas-playback-card`,counter:`msp-canvas-playback-counter`,deck:`msp-canvas-playback-deck`,description:`msp-canvas-playback-description`,descriptionContent:`msp-canvas-playback-descriptionContent`,dot:`msp-canvas-playback-dot`,dots:`msp-canvas-playback-dots`,lead:`msp-canvas-playback-lead`,list:`msp-canvas-playback-list`,listIndex:`msp-canvas-playback-listIndex`,listRow:`msp-canvas-playback-listRow`,listRows:`msp-canvas-playback-listRows`,listRowsContent:`msp-canvas-playback-listRowsContent`,plain:`msp-canvas-playback-plain`,position:`msp-canvas-playback-position`,rowTitle:`msp-canvas-playback-rowTitle`,scrubber:`msp-canvas-playback-scrubber`,snapshots:`msp-canvas-playback-snapshots`,time:`msp-canvas-playback-time`,title:`msp-canvas-playback-title`,trajectoryLabel:`msp-canvas-playback-trajectoryLabel`},s(`views/canvas/playback.module.css`,`@layer msp.components {
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
`)})))()}function N(e){return i(u,{when:f(e.model.count,e=>e>0),children:()=>i(`section`,{class:e.bare?j.bare:j.card,"aria-label":`Snapshots`,children:i(B,{model:e.model})})})}function P(e){return i(`section`,{class:j.deck,"aria-label":`Playback`,children:e.children})}function F(e){return i(u,{when:f(e.model.count,e=>e>1),children:()=>i(G,{model:e.model,compact:e.compact})})}function I(e){let{model:t}=e;return i(u,{when:f(t.count,e=>e>1),children:()=>{let n=h(!1);return a(`div`,{"data-row":!0,children:[a(`div`,{class:j.bar,role:`group`,"aria-label":`Snapshots`,children:[i(`span`,{class:j.lead,children:i(v,{name:`snapshots`,size:16})}),i(`button`,{type:`button`,class:j.position,"aria-expanded":n,"aria-label":f(t.title,e=>e?`Snapshots: ${e}`:`Snapshots`),"data-tip":f(t.title,e=>e??`No snapshot applied`),onClick:()=>n.set(!n.value),children:f([t.index,t.count],(e,t)=>`${e<0?`–`:e+1} / ${t}`)}),i(O,{variant:`ghost`,size:`sm`,icon:i(v,{name:`chevron-left`}),title:`Previous snapshot`,onClick:()=>t.previous()}),i(K,{playing:t.isPlaying,title:`Play snapshots`,onClick:()=>t.togglePlay()}),i(O,{variant:`ghost`,size:`sm`,icon:i(v,{name:`chevron-right`}),title:`Next snapshot`,onClick:()=>t.next()}),e.actions?.()]}),i(u,{when:n,children:()=>i(W,{model:t,onClose:()=>n.set(!1)})})]})}})}function L(e){return i(O,{variant:`ghost`,size:`sm`,icon:i(u,{when:e.muted,fallback:()=>i(v,{name:`volume-2`}),children:()=>i(v,{name:`volume-x`})}),title:f(e.muted,e=>e?`Unmute`:`Mute`),pressed:e.muted,onClick:()=>e.onClick()})}function R(e){return a(`div`,{class:j.bar,role:`group`,"aria-label":`Audio`,"data-row":!0,children:[i(`span`,{class:j.lead,children:i(v,{name:`volume-2`,size:16})}),i(`span`,{class:j.rowTitle,children:`Audio`}),i(L,{muted:e.muted,onClick:e.onToggleMute})]})}function z(e){let{model:t}=e;return i(u,{when:f(t.duration,e=>e>0),children:()=>{let e=f([t.time,t.duration],(e,t)=>`${t>0?100*Math.min(e,t)/t:0}%`);return a(`div`,{class:j.bar,role:`group`,"aria-label":`Transition`,"data-row":!0,children:[i(`span`,{class:j.lead,children:i(v,{name:`film`,size:16})}),i(`input`,{class:j.scrubber,type:`range`,min:`0`,max:f(t.duration,String),step:f(t.step,e=>String(Math.max(1,Math.round(e)))),value:f(t.time,e=>String(Math.round(e))),style:{"--msp-progress":e},"aria-label":`Transition time`,onInput:e=>t.seek(Number(e.currentTarget.value))}),i(`span`,{class:j.time,children:f([t.time,t.duration],(e,t)=>`${J(e)} / ${J(t)} s`)}),i(O,{variant:`ghost`,size:`sm`,icon:i(u,{when:t.isPlaying,fallback:()=>i(v,{name:`play`}),children:()=>i(v,{name:`square`})}),title:f(t.isPlaying,e=>e?`Stop the transition`:`Play the transition`),onClick:()=>t.togglePlay()})]})}})}function B(e){let{model:t}=e,o=h(!1),s=f(t.count,e=>e>q),c=h(void 0),l,d=y(()=>c.set(l));return n(f([t.description,t.title],(e,t)=>e&&V(e,t??``)),e=>{l=e,d.start(0)}),a(`div`,{class:j.snapshots,children:[a(`div`,{class:j.bar,children:[i(`span`,{class:j.title,children:t.title}),i(u,{when:f(t.count,e=>e>1),children:()=>a(r,{children:[i(u,{when:s,fallback:()=>i(U,{model:t}),children:()=>i(`button`,{type:`button`,class:j.position,"aria-expanded":o,"aria-label":`Snapshots`,onClick:()=>o.set(!o.value),children:f([t.index,t.count],(e,t)=>`${e+1} / ${t}`)})}),i(O,{variant:`ghost`,size:`sm`,icon:i(v,{name:`chevron-left`}),title:`Previous snapshot`,onClick:()=>t.previous()}),i(O,{variant:`ghost`,size:`sm`,icon:i(v,{name:`chevron-right`}),title:`Next snapshot`,onClick:()=>t.next()}),i(K,{playing:t.isPlaying,title:`Play snapshots`,onClick:()=>t.togglePlay()})]})})]}),i(u,{when:o,children:()=>i(W,{model:t,onClose:()=>o.set(!1)})}),i(u,{when:c.asReadonly,children:e=>i(S,{class:j.description,contentClass:j.descriptionContent,children:i(u,{when:t.plainText??!1,fallback:()=>i(A,{source:e,onLink:e=>t.openLink(e),host:t.markdown}),children:()=>i(`p`,{class:j.plain,children:e})})})})]})}function V(e,t){let n=/^\s*#{1,6}[ \t]+(.+?)[ \t]*#*[ \t]*(?:\r?\n|$)/.exec(e);if(!n)return e;let r=H(n[1]),i=H(t);return!r||!(i===r||i.startsWith(`${r} `)||i.includes(` ${r} `)||i.endsWith(` ${r}`))?e:e.slice(n[0].length).replace(/^\s+/,``)}function H(e){return e.replace(/[[(]\s*\d+\s*\/\s*\d+\s*[\])]/g,` `).replace(/[*_`~]/g,``).toLowerCase().replace(/[^\p{L}\p{N}]+/gu,` `).trim()}function U(e){let{model:t}=e;return i(`span`,{class:j.dots,role:`tablist`,"aria-label":`Snapshots`,children:i(d,{each:t.titles,children:(e,n)=>i(`button`,{type:`button`,role:`tab`,class:j.dot,"data-tip":e,"aria-label":e,"aria-selected":f([t.index,n],(e,t)=>e===t),onClick:()=>t.goTo(n.value)})})})}function W(e){let{model:t}=e,n=h(``),r=f([t.titles,n.asReadonly],(e,t)=>{let n=t.trim().toLowerCase();return e.map((e,t)=>({title:e,index:t})).filter(e=>!n||e.title.toLowerCase().includes(n))}),o=C(t.index);return a(`div`,{class:j.list,children:[i(u,{when:f(t.count,e=>e>12),children:()=>i(E,{search:!0,size:`sm`,"aria-label":`Filter snapshots`,placeholder:`Filter`,value:n,onInput:e=>n.set(e)})}),i(S,{class:j.listRows,contentClass:j.listRowsContent,role:`listbox`,"aria-label":`Snapshots`,children:i(d,{each:r,children:n=>a(`button`,{type:`button`,role:`option`,class:j.listRow,"aria-selected":o.key(n.index),onClick:()=>{t.goTo(n.index),e.onClose()},children:[i(`span`,{class:j.listIndex,children:String(n.index+1)}),i(`span`,{children:n.title})]})},e=>e.index)})]})}function G(e){let{model:t}=e,n=t.unit??Y,r=f(n,e=>e===`models`?`Models`:`Frames`),o=f(n,e=>e===`models`?`model`:`frame`),s=f(r,e=>`${e.slice(0,-1)} shown`);if(e.compact)return a(`div`,{class:j.bar,role:`group`,"aria-label":r,"data-row":!0,children:[i(`span`,{class:j.lead,children:i(v,{name:`trajectory`,size:16})}),i(`span`,{class:j.trajectoryLabel,children:t.label}),i(`span`,{class:j.counter,children:f([t.index,t.count],(e,t)=>`${e+1} / ${t}`)}),i(K,{playing:t.isPlaying,title:f(n,e=>`Play ${e}`),onClick:()=>t.togglePlay()})]});let c=e=>{let n=t.count.value;n>1&&t.seek(((t.index.value+e)%n+n)%n)},l=f([t.index,t.count],(e,t)=>`${t>1?100*e/(t-1):0}%`);return a(`div`,{class:j.bar,role:`group`,"aria-label":r,"data-row":!0,children:[i(`span`,{class:j.lead,children:i(v,{name:`trajectory`,size:16})}),i(`span`,{class:j.trajectoryLabel,children:t.label}),i(`span`,{class:j.counter,children:f([t.index,t.count],(e,t)=>`${e+1} / ${t}`)}),i(`input`,{class:j.scrubber,type:`range`,min:`0`,max:f(t.count,e=>String(e-1)),value:f(t.index,String),style:{"--msp-progress":l},"aria-label":s,"aria-valuetext":f([r,t.index,t.count],(e,t,n)=>`${e.slice(0,-1)} ${t+1} of ${n}`),onInput:e=>t.seek(Number(e.currentTarget.value))}),i(O,{variant:`ghost`,size:`sm`,icon:i(v,{name:`chevron-left`}),title:f(o,e=>`Previous ${e}`),onClick:()=>c(-1)}),i(K,{playing:t.isPlaying,title:f(n,e=>`Play ${e}`),onClick:()=>t.togglePlay()}),i(O,{variant:`ghost`,size:`sm`,icon:i(v,{name:`chevron-right`}),title:f(o,e=>`Next ${e}`),onClick:()=>c(1)})]})}function K(e){let t=typeof e.title==`string`?new p(e.title).asReadonly:e.title;return i(O,{variant:`ghost`,size:`sm`,icon:i(u,{when:e.playing,fallback:()=>i(v,{name:`play`}),children:()=>i(v,{name:`pause`})}),title:f([e.playing,t],(e,t)=>e?`Pause`:t),pressed:e.playing,onClick:()=>e.onClick()})}var q,J,Y;function X(){return(X=e((()=>{D(),_(),k(),x(),T(),l(),t(),b(),w(),g(),m(),M(),o(),q=7,J=e=>(e/1e3).toFixed(1),Y=new p(`models`).asReadonly})))()}export{I as a,X as c,N as i,L as n,F as o,P as r,z as s,R as t};