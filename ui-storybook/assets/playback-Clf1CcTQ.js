import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{X as t,Z as n,n as r,r as i,t as a}from"./jsx-runtime-pJJ4pzd1.js";import{n as o,t as s}from"./map-BLVP9Oyc.js";import{n as c,r as l}from"./observable-state-U0Aegh1x.js";import{d as u,i as d,n as f,r as p,u as m}from"./control-flow-D80wAH1n.js";import{n as h,t as g}from"./combineLatest-BuVl0X9y.js";import{n as _,t as v}from"./icon-Cd9kBD44.js";import{n as y,t as b}from"./scroll-area-W5mfuQm0.js";import{n as x,t as S}from"./text-input-BVt-QcfS.js";import{n as C,t as w}from"./button-nz8xXRSW.js";import{n as T,t as E}from"./markdown-De--vheY.js";var D;function O(){return(O=e((()=>{n(),D={bar:`msp-canvas-playback-bar`,card:`msp-canvas-playback-card`,counter:`msp-canvas-playback-counter`,description:`msp-canvas-playback-description`,descriptionContent:`msp-canvas-playback-descriptionContent`,dot:`msp-canvas-playback-dot`,dots:`msp-canvas-playback-dots`,lead:`msp-canvas-playback-lead`,list:`msp-canvas-playback-list`,listIndex:`msp-canvas-playback-listIndex`,listRow:`msp-canvas-playback-listRow`,listRows:`msp-canvas-playback-listRows`,listRowsContent:`msp-canvas-playback-listRowsContent`,position:`msp-canvas-playback-position`,scrubber:`msp-canvas-playback-scrubber`,title:`msp-canvas-playback-title`,trajectoryLabel:`msp-canvas-playback-trajectoryLabel`},t(`views/canvas/playback.module.css`,`@layer msp.components {
.msp-canvas-playback-card {
  font-size: var(--msp-font-size-sm);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-glass-bg);
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
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
  padding: 0 var(--msp-space-4) var(--msp-space-4);
  font-size: var(--msp-font-size-sm);
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
    width: 6px;
    height: 6px;
    transition: background-color var(--msp-motion-fast) var(--msp-ease);
    border-radius: 50%;
  }

  &:hover:before {
    background: var(--msp-color-text-muted);
  }

  &[aria-selected="true"]:before {
    background: var(--msp-color-text);
  }
}

.msp-canvas-playback-position {
  height: 24px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  font-variant-numeric: tabular-nums;

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
`)})))()}function k(e){return r(p,{when:e.model.count.pipe(o(e=>e>0)),children:()=>r(`section`,{class:D.card,"aria-label":`Snapshots`,children:r(j,{model:e.model})})})}function A(e){return r(p,{when:e.model.count.pipe(o(e=>e>1)),children:()=>r(`section`,{class:D.card,"aria-label":`Trajectory`,children:r(P,{model:e.model})})})}function j(e){let{model:t}=e,n=l(!1),a=t.count.pipe(o(e=>e>I),m());return i(`div`,{children:[i(`div`,{class:D.bar,children:[r(`span`,{class:D.title,children:t.title}),r(p,{when:a,fallback:()=>r(M,{model:t}),children:()=>r(`button`,{type:`button`,class:D.position,"aria-expanded":n,"aria-label":`Snapshots`,onClick:()=>n.set(!n.value),children:g([t.index,t.count]).pipe(o(([e,t])=>`${e+1} / ${t}`))})}),r(w,{variant:`ghost`,size:`sm`,icon:r(v,{name:`chevron-left`}),title:`Previous snapshot`,onClick:()=>t.previous()}),r(w,{variant:`ghost`,size:`sm`,icon:r(v,{name:`chevron-right`}),title:`Next snapshot`,onClick:()=>t.next()}),r(F,{playing:t.isPlaying,title:`Play snapshots`,onClick:()=>t.togglePlay()})]}),r(p,{when:n,children:()=>r(N,{model:t,onClose:()=>n.set(!1)})}),r(p,{when:t.description,children:e=>r(b,{class:D.description,contentClass:D.descriptionContent,children:r(E,{source:e,onLink:e=>t.openLink(e)})})})]})}function M(e){let{model:t}=e;return r(`span`,{class:D.dots,role:`tablist`,"aria-label":`Snapshots`,children:r(f,{each:t.titles,children:(e,n)=>r(`button`,{type:`button`,role:`tab`,class:D.dot,"data-tip":e,"aria-label":e,"aria-selected":g([t.index,n]).pipe(o(([e,t])=>e===t)),onClick:()=>t.goTo(n.value)})})})}function N(e){let{model:t}=e,n=l(``),a=g([t.titles,n.asReadonly]).pipe(o(([e,t])=>{let n=t.trim().toLowerCase();return e.map((e,t)=>({title:e,index:t})).filter(e=>!n||e.title.toLowerCase().includes(n))}));return i(`div`,{class:D.list,children:[r(p,{when:t.count.pipe(o(e=>e>12)),children:()=>r(S,{search:!0,size:`sm`,"aria-label":`Filter snapshots`,placeholder:`Filter`,value:n,onInput:e=>n.set(e)})}),r(b,{class:D.listRows,contentClass:D.listRowsContent,role:`listbox`,"aria-label":`Snapshots`,children:r(f,{each:a,children:n=>i(`button`,{type:`button`,role:`option`,class:D.listRow,"aria-selected":t.index.pipe(o(e=>e===n.index)),onClick:()=>{t.goTo(n.index),e.onClose()},children:[r(`span`,{class:D.listIndex,children:String(n.index+1)}),r(`span`,{children:n.title})]})},e=>e.index)})]})}function P(e){let{model:t}=e,n=g([t.index,t.count]).pipe(o(([e,t])=>`${t>1?100*e/(t-1):0}%`));return i(`div`,{class:D.bar,role:`group`,"aria-label":`Models`,children:[r(`span`,{class:D.lead,children:r(v,{name:`trajectory`,size:16})}),r(`span`,{class:D.trajectoryLabel,children:t.label}),r(`span`,{class:D.counter,children:g([t.index,t.count]).pipe(o(([e,t])=>`${e+1} / ${t}`))}),r(`input`,{class:D.scrubber,type:`range`,min:`0`,max:t.count.pipe(o(e=>String(e-1))),value:t.index.pipe(o(String)),style:{"--msp-progress":n},"aria-label":`Model`,onInput:e=>t.seek(Number(e.currentTarget.value))}),r(F,{playing:t.isPlaying,title:`Play models`,onClick:()=>t.togglePlay()})]})}function F(e){return r(w,{variant:`ghost`,size:`sm`,icon:r(p,{when:e.playing,fallback:()=>r(v,{name:`play`}),children:()=>r(v,{name:`pause`})}),title:e.playing.pipe(o(t=>t?`Pause`:e.title)),pressed:e.playing,onClick:()=>e.onClick()})}var I;function L(){return(L=e((()=>{h(),u(),s(),C(),_(),T(),y(),x(),d(),c(),O(),a(),I=7})))()}export{A as n,L as r,k as t};