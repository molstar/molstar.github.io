import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{g as t,i as n,n as r,r as i,t as a,x as o}from"./jsx-runtime-DbCUSNU3.js";import{n as s,r as c}from"./registry-D35yV2Tb.js";import{b as l,v as u,x as d}from"./work-queue-DoxU-HjK.js";import{n as f,t as p}from"./observable-state-eRUcDuAs.js";import{i as m,n as h,t as g}from"./control-flow-BQuMY04w.js";import{n as _,t as v}from"./icon-1ydjt1pd.js";import{c as y,i as b}from"./scoped-Dk1HMUKj.js";import{n as x,t as S}from"./scroll-area-ukLK_GOt.js";import{n as C,t as w}from"./keyed-selector-MU49iODI.js";import{n as T,t as E}from"./text-input-j_8_8M_A.js";import{n as D,t as O}from"./button-B7k80QJA.js";import{n as ee,t as k}from"./context-menu-CJgQIgte.js";import{n as A,t as j}from"./markdown-ArrLLmxo.js";var M;function N(){return(N=e((()=>{c(),M={bar:`msp-canvas-playback-bar`,bare:`msp-canvas-playback-bare`,card:`msp-canvas-playback-card`,counter:`msp-canvas-playback-counter`,deck:`msp-canvas-playback-deck`,description:`msp-canvas-playback-description`,descriptionContent:`msp-canvas-playback-descriptionContent`,dot:`msp-canvas-playback-dot`,dots:`msp-canvas-playback-dots`,lead:`msp-canvas-playback-lead`,list:`msp-canvas-playback-list`,listIndex:`msp-canvas-playback-listIndex`,listRow:`msp-canvas-playback-listRow`,listRows:`msp-canvas-playback-listRows`,listRowsContent:`msp-canvas-playback-listRowsContent`,plain:`msp-canvas-playback-plain`,position:`msp-canvas-playback-position`,rowTitle:`msp-canvas-playback-rowTitle`,scrubber:`msp-canvas-playback-scrubber`,snapshots:`msp-canvas-playback-snapshots`,time:`msp-canvas-playback-time`,title:`msp-canvas-playback-title`,trajectoryLabel:`msp-canvas-playback-trajectoryLabel`},s(`views/canvas/playback.module.css`,`@layer msp.components {
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
`)})))()}function P(e){return r(h,{when:l(e.model.count,e=>e>0),children:()=>r(`section`,{class:e.bare?M.bare:M.card,"aria-label":`Snapshots`,children:r(V,{model:e.model})})})}function F(e){return r(`section`,{class:M.deck,"aria-label":`Playback`,children:e.children})}function I(e){return r(h,{when:l(e.model.count,e=>e>1),children:()=>r(K,{model:e.model,compact:e.compact})})}function L(e){let{model:t}=e;return r(h,{when:l(t.count,e=>e>1),children:()=>{let n=f(!1);return i(`div`,{"data-row":!0,children:[i(`div`,{class:M.bar,role:`group`,"aria-label":`Snapshots`,children:[r(`span`,{class:M.lead,children:r(v,{name:`snapshots`,size:16})}),r(`button`,{type:`button`,class:M.position,"aria-expanded":n,"aria-label":l(t.title,e=>e?`Snapshots: ${e}`:`Snapshots`),"data-tip":l(t.title,e=>e??`No snapshot applied`),onClick:()=>n.set(!n.value),children:l([t.index,t.count],(e,t)=>`${e<0?`–`:e+1} / ${t}`)}),r(O,{variant:`ghost`,size:`sm`,icon:r(v,{name:`chevron-left`}),title:`Previous snapshot`,onClick:()=>t.previous()}),r(J,{playing:t.isPlaying,title:`Play snapshots`,onClick:()=>t.togglePlay()}),r(O,{variant:`ghost`,size:`sm`,icon:r(v,{name:`chevron-right`}),title:`Next snapshot`,onClick:()=>t.next()}),e.actions?.()]}),r(h,{when:n,children:()=>r(G,{model:t,onClose:()=>n.set(!1)})})]})}})}function R(e){return r(O,{variant:`ghost`,size:`sm`,icon:r(h,{when:e.muted,fallback:()=>r(v,{name:`volume-2`}),children:()=>r(v,{name:`volume-x`})}),title:l(e.muted,e=>e?`Unmute`:`Mute`),pressed:e.muted,onClick:()=>e.onClick()})}function z(e){return i(`div`,{class:M.bar,role:`group`,"aria-label":`Audio`,"data-row":!0,children:[r(`span`,{class:M.lead,children:r(v,{name:`volume-2`,size:16})}),r(`span`,{class:M.rowTitle,children:`Audio`}),r(R,{muted:e.muted,onClick:e.onToggleMute})]})}function B(e){let{model:t}=e;return r(h,{when:l(t.duration,e=>e>0),children:()=>{let e=l([t.time,t.duration],(e,t)=>`${t>0?100*Math.min(e,t)/t:0}%`);return i(`div`,{class:M.bar,role:`group`,"aria-label":`Transition`,"data-row":!0,children:[r(`span`,{class:M.lead,children:r(v,{name:`film`,size:16})}),r(`input`,{class:M.scrubber,type:`range`,min:`0`,max:l(t.duration,String),step:l(t.step,e=>String(Math.max(1,Math.round(e)))),value:l(t.time,e=>String(Math.round(e))),style:{"--msp-progress":e},"aria-label":`Transition time`,onInput:e=>t.seek(Number(e.currentTarget.value))}),r(`span`,{class:M.time,children:l([t.time,t.duration],(e,t)=>`${X(e)} / ${X(t)} s`)}),r(O,{variant:`ghost`,size:`sm`,icon:r(h,{when:t.isPlaying,fallback:()=>r(v,{name:`play`}),children:()=>r(v,{name:`square`})}),title:l(t.isPlaying,e=>e?`Stop the transition`:`Play the transition`),onClick:()=>t.togglePlay()})]})}})}function V(e){let{model:a}=e,o=f(!1),s=l(a.count,e=>e>Y),c=f(void 0),u,d=y(()=>c.set(u));return t(l([a.description,a.title],(e,t)=>e&&H(e,t??``)),e=>{u=e,d.start(0)}),i(`div`,{class:M.snapshots,children:[i(`div`,{class:M.bar,children:[r(`span`,{class:M.title,children:a.title}),r(h,{when:l(a.count,e=>e>1),children:()=>i(n,{children:[r(h,{when:s,fallback:()=>r(W,{model:a}),children:()=>r(`button`,{type:`button`,class:M.position,"aria-expanded":o,"aria-label":`Snapshots`,onClick:()=>o.set(!o.value),children:l([a.index,a.count],(e,t)=>`${e+1} / ${t}`)})}),r(O,{variant:`ghost`,size:`sm`,icon:r(v,{name:`chevron-left`}),title:`Previous snapshot`,onClick:()=>a.previous()}),r(O,{variant:`ghost`,size:`sm`,icon:r(v,{name:`chevron-right`}),title:`Next snapshot`,onClick:()=>a.next()}),r(J,{playing:a.isPlaying,title:`Play snapshots`,onClick:()=>a.togglePlay()})]})})]}),r(h,{when:o,children:()=>r(G,{model:a,onClose:()=>o.set(!1)})}),r(h,{when:c.asReadonly,children:e=>r(S,{class:M.description,contentClass:M.descriptionContent,children:r(h,{when:a.plainText??!1,fallback:()=>r(j,{source:e,onLink:e=>a.openLink(e),host:a.markdown}),children:()=>r(`p`,{class:M.plain,children:e})})})})]})}function H(e,t){let n=/^\s*#{1,6}[ \t]+(.+?)[ \t]*#*[ \t]*(?:\r?\n|$)/.exec(e);if(!n)return e;let r=U(n[1]),i=U(t);return!r||!(i===r||i.startsWith(`${r} `)||i.includes(` ${r} `)||i.endsWith(` ${r}`))?e:e.slice(n[0].length).replace(/^\s+/,``)}function U(e){return e.replace(/[[(]\s*\d+\s*\/\s*\d+\s*[\])]/g,` `).replace(/[*_`~]/g,``).toLowerCase().replace(/[^\p{L}\p{N}]+/gu,` `).trim()}function W(e){let{model:t}=e;return r(`span`,{class:M.dots,role:`tablist`,"aria-label":`Snapshots`,children:r(g,{each:t.titles,children:(e,n)=>r(`button`,{type:`button`,role:`tab`,class:M.dot,"data-tip":e,"aria-label":e,"aria-selected":l([t.index,n],(e,t)=>e===t),onClick:()=>t.goTo(n.value)})})})}function G(e){let{model:t}=e,n=f(``),a=l([t.titles,n.asReadonly],(e,t)=>{let n=t.trim().toLowerCase();return e.map((e,t)=>({title:e,index:t})).filter(e=>!n||e.title.toLowerCase().includes(n))}),o=C(t.index);return i(`div`,{class:M.list,children:[r(h,{when:l(t.count,e=>e>12),children:()=>r(E,{search:!0,size:`sm`,"aria-label":`Filter snapshots`,placeholder:`Filter`,value:n,onInput:e=>n.set(e)})}),r(S,{class:M.listRows,contentClass:M.listRowsContent,role:`listbox`,"aria-label":`Snapshots`,children:r(g,{each:a,by:e=>e.index,children:n=>i(`button`,{type:`button`,role:`option`,class:M.listRow,"aria-selected":o.key(n.index),onClick:()=>{t.goTo(n.index),e.onClose()},children:[r(`span`,{class:M.listIndex,children:String(n.index+1)}),r(`span`,{children:n.title})]})})})]})}function K(e){let{model:t}=e,n=t.unit??Z,a=l(n,e=>e===`models`?`Models`:`Frames`),o=l(n,e=>e===`models`?`model`:`frame`),s=l(a,e=>`${e.slice(0,-1)} shown`);if(e.compact)return i(`div`,{class:M.bar,role:`group`,"aria-label":a,"data-row":!0,children:[r(`span`,{class:M.lead,children:r(v,{name:`trajectory`,size:16})}),r(`span`,{class:M.trajectoryLabel,children:t.label}),r(`span`,{class:M.counter,children:l([t.index,t.count],(e,t)=>`${e+1} / ${t}`)}),r(J,{playing:t.isPlaying,title:l(n,e=>`Play ${e}`),onClick:()=>t.togglePlay()})]});let c=e=>{let n=t.count.value;n>1&&t.seek(((t.index.value+e)%n+n)%n)},u=l([t.index,t.count],(e,t)=>`${t>1?100*e/(t-1):0}%`);return i(`div`,{class:M.bar,role:`group`,"aria-label":a,"data-row":!0,children:[r(`span`,{class:M.lead,children:r(v,{name:`trajectory`,size:16})}),r(`span`,{class:M.trajectoryLabel,children:t.label}),r(`span`,{class:M.counter,children:l([t.index,t.count],(e,t)=>`${e+1} / ${t}`)}),r(`input`,{class:M.scrubber,type:`range`,min:`0`,max:l(t.count,e=>String(e-1)),value:l(t.index,String),style:{"--msp-progress":u},"aria-label":s,"aria-valuetext":l([a,t.index,t.count],(e,t,n)=>`${e.slice(0,-1)} ${t+1} of ${n}`),onInput:e=>t.seek(Number(e.currentTarget.value))}),r(O,{variant:`ghost`,size:`sm`,icon:r(v,{name:`chevron-left`}),title:l(o,e=>`Previous ${e}`),onClick:()=>c(-1)}),r(J,{playing:t.isPlaying,title:l(n,e=>`Play ${e}`),onClick:()=>t.togglePlay()}),r(O,{variant:`ghost`,size:`sm`,icon:r(v,{name:`chevron-right`}),title:l(o,e=>`Next ${e}`),onClick:()=>c(1)}),t.periodic?r(q,{model:t.periodic}):null]})}function q(e){let{model:t}=e,n;return r(h,{when:l(t.mode,e=>e!==void 0),children:()=>r(O,{variant:`ghost`,size:`sm`,icon:r(v,{name:`periodic-box`}),title:l(t.mode,e=>`Periodic box: ${e?Q[e]:``}`),onClick:e=>{let r=e.currentTarget.getBoundingClientRect();n?.();let i=t.mode.value;n=ee(e.currentTarget.closest(`.msp-root`)??document.body,{x:r.left,y:r.bottom},[...Object.keys(Q).map(e=>({id:e,label:Q[e],icon:e===i?`check`:void 0,run:()=>t.set(e)})),...t.images?[{id:`images`,label:`Periodic images`,icon:t.images.shown.value?`check`:void 0,run:()=>t.images.set(!t.images.shown.value)}]:[]])}})})}function J(e){let t=typeof e.title==`string`?new u(e.title).asReadonly:e.title;return r(O,{variant:`ghost`,size:`sm`,icon:r(h,{when:e.playing,fallback:()=>r(v,{name:`play`}),children:()=>r(v,{name:`pause`})}),title:l([e.playing,t],(e,t)=>e?`Pause`:t),pressed:e.playing,onClick:()=>e.onClick()})}var Y,X,Z,Q;function $(){return($=e((()=>{D(),_(),A(),x(),T(),m(),o(),b(),w(),p(),d(),k(),N(),a(),Y=7,X=e=>(e/1e3).toFixed(1),Z=new u(`models`).asReadonly,Q={whole:`Molecules whole`,box:`Molecules in the box`,"box-centered":`In the box, polymers at the center`,nojump:`No jumps between frames`,off:`As in the file`}})))()}export{L as a,$ as c,P as i,R as n,I as o,F as r,B as s,z as t};