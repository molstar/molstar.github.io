import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n,t as r}from"./jsx-runtime-DiBZWcxb.js";import{i,r as a}from"./base-Cal5NIfy.js";import{n as o,t as s}from"./distinctUntilChanged-BHDujrwf.js";import{a as c,n as l,r as u}from"./control-flow-HAEcegil.js";import{n as d,t as f}from"./map-CsR1ibWS.js";import{n as p,t as m}from"./combineLatest-Cmmnh-lC.js";import{n as h,r as g}from"./observable-state-D-XGaosJ.js";import{n as _,t as v}from"./icon-Dqu8cMU0.js";import{n as y,t as b}from"./scroll-area-XzYIuKyv.js";import{n as x,t as S}from"./text-input-CQilzVcE.js";import{n as C,t as w}from"./button-DEZz5joq.js";import{n as T,t as E}from"./markdown-CW7HDWTS.js";var D;function O(){return(O=e((()=>{i(),D={bar:`msp-canvas-playback-bar`,card:`msp-canvas-playback-card`,counter:`msp-canvas-playback-counter`,description:`msp-canvas-playback-description`,descriptionContent:`msp-canvas-playback-descriptionContent`,dot:`msp-canvas-playback-dot`,dots:`msp-canvas-playback-dots`,lead:`msp-canvas-playback-lead`,list:`msp-canvas-playback-list`,listIndex:`msp-canvas-playback-listIndex`,listRow:`msp-canvas-playback-listRow`,listRows:`msp-canvas-playback-listRows`,listRowsContent:`msp-canvas-playback-listRowsContent`,position:`msp-canvas-playback-position`,scrubber:`msp-canvas-playback-scrubber`,title:`msp-canvas-playback-title`,trajectoryLabel:`msp-canvas-playback-trajectoryLabel`},a(`views/canvas/playback.module.css`,`@layer msp.components {
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
`)})))()}function k(e){return t(u,{when:e.model.count.pipe(d(e=>e>0)),children:()=>t(`section`,{class:D.card,"aria-label":`Snapshots`,children:t(j,{model:e.model})})})}function A(e){return t(u,{when:e.model.count.pipe(d(e=>e>1)),children:()=>t(`section`,{class:D.card,"aria-label":`Trajectory`,children:t(P,{model:e.model})})})}function j(e){let{model:r}=e,i=g(!1),a=r.count.pipe(d(e=>e>I),s());return n(`div`,{children:[n(`div`,{class:D.bar,children:[t(`span`,{class:D.title,children:r.title}),t(u,{when:a,fallback:()=>t(M,{model:r}),children:()=>t(`button`,{type:`button`,class:D.position,"aria-expanded":i,"aria-label":`Snapshots`,onClick:()=>i.set(!i.value),children:m([r.index,r.count]).pipe(d(([e,t])=>`${e+1} / ${t}`))})}),t(w,{variant:`ghost`,size:`sm`,icon:t(v,{name:`chevron-left`}),title:`Previous snapshot`,onClick:()=>r.previous()}),t(w,{variant:`ghost`,size:`sm`,icon:t(v,{name:`chevron-right`}),title:`Next snapshot`,onClick:()=>r.next()}),t(F,{playing:r.isPlaying,title:`Play snapshots`,onClick:()=>r.togglePlay()})]}),t(u,{when:i,children:()=>t(N,{model:r,onClose:()=>i.set(!1)})}),t(u,{when:r.description,children:e=>t(b,{class:D.description,contentClass:D.descriptionContent,children:t(E,{source:e,onLink:e=>r.openLink(e)})})})]})}function M(e){let{model:n}=e;return t(`span`,{class:D.dots,role:`tablist`,"aria-label":`Snapshots`,children:t(l,{each:n.titles,children:(e,r)=>t(`button`,{type:`button`,role:`tab`,class:D.dot,"data-tip":e,"aria-label":e,"aria-selected":m([n.index,r]).pipe(d(([e,t])=>e===t)),onClick:()=>n.goTo(r.value)})})})}function N(e){let{model:r}=e,i=g(``),a=m([r.titles,i.asReadonly]).pipe(d(([e,t])=>{let n=t.trim().toLowerCase();return e.map((e,t)=>({title:e,index:t})).filter(e=>!n||e.title.toLowerCase().includes(n))}));return n(`div`,{class:D.list,children:[t(u,{when:r.count.pipe(d(e=>e>12)),children:()=>t(S,{search:!0,size:`sm`,"aria-label":`Filter snapshots`,placeholder:`Filter`,value:i,onInput:e=>i.set(e)})}),t(b,{class:D.listRows,contentClass:D.listRowsContent,role:`listbox`,"aria-label":`Snapshots`,children:t(l,{each:a,children:i=>n(`button`,{type:`button`,role:`option`,class:D.listRow,"aria-selected":r.index.pipe(d(e=>e===i.index)),onClick:()=>{r.goTo(i.index),e.onClose()},children:[t(`span`,{class:D.listIndex,children:String(i.index+1)}),t(`span`,{children:i.title})]})},e=>e.index)})]})}function P(e){let{model:r}=e,i=m([r.index,r.count]).pipe(d(([e,t])=>`${t>1?100*e/(t-1):0}%`));return n(`div`,{class:D.bar,role:`group`,"aria-label":`Models`,children:[t(`span`,{class:D.lead,children:t(v,{name:`trajectory`,size:16})}),t(`span`,{class:D.trajectoryLabel,children:r.label}),t(`span`,{class:D.counter,children:m([r.index,r.count]).pipe(d(([e,t])=>`${e+1} / ${t}`))}),t(`input`,{class:D.scrubber,type:`range`,min:`0`,max:r.count.pipe(d(e=>String(e-1))),value:r.index.pipe(d(String)),style:{"--msp-progress":i},"aria-label":`Model`,onInput:e=>r.seek(Number(e.currentTarget.value))}),t(F,{playing:r.isPlaying,title:`Play models`,onClick:()=>r.togglePlay()})]})}function F(e){return t(w,{variant:`ghost`,size:`sm`,icon:t(u,{when:e.playing,fallback:()=>t(v,{name:`play`}),children:()=>t(v,{name:`pause`})}),title:e.playing.pipe(d(t=>t?`Pause`:e.title)),pressed:e.playing,onClick:()=>e.onClick()})}var I;function L(){return(L=e((()=>{p(),o(),f(),C(),_(),T(),y(),x(),c(),h(),O(),r(),I=7})))()}export{A as n,L as r,k as t};