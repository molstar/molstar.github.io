import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{S as t,b as n,g as r,i,n as a,r as o,t as s,v as c,x as l}from"./jsx-runtime-Dut-27nP.js";import{n as u,r as d}from"./registry-D35yV2Tb.js";import{i as f,n as p,t as m}from"./control-flow-BGkEkAG8.js";import{b as h,x as g}from"./work-queue-DoxU-HjK.js";import{T as _}from"./shell-view-4fMpWl4I.js";import{n as v,t as ee}from"./observable-state-C67cgDrf.js";import{n as y,t as b}from"./icon-CrwnZGU9.js";import{i as x,t as te}from"./scoped-CYrGtqEo.js";import{t as S}from"./scroll-area-C3WxaIdw.js";import{t as C}from"./params-form-BQ9MddDI.js";import{n as ne,t as w}from"./keyed-selector-MU49iODI.js";import{U as re,V as ie}from"./param-definition-xUqfTrAa.js";import{n as T}from"./select-iIBCxyFA.js";import{t as E}from"./text-input-6-TvZsXK.js";import{t as D}from"./button-C9pAumBZ.js";import{t as ae}from"./core-JnFnIdVh.js";import{t as O}from"./src-2NOkYUjT.js";import{a as oe,i as se,n as ce,s as le,t as ue}from"./playback-_bPz9Jn5.js";import{a as k,i as A,n as j,r as M}from"./utils-BabZ8haK.js";import{t as N}from"./download-DeieNi94.js";import{n as P,r as F}from"./drag-to-reorder-WGBtWFJZ.js";import{a as I,i as L,n as R,o as z,r as B,s as V,t as H}from"./model-BFwQ1zKp.js";var U;function W(){return(W=e((()=>{d(),U={action:`msp-viewer-snapshots-panel-action`,actionLabel:`msp-viewer-snapshots-panel-actionLabel`,actions:`msp-viewer-snapshots-panel-actions`,block:`msp-viewer-snapshots-panel-block`,blockCaption:`msp-viewer-snapshots-panel-blockCaption`,blockContent:`msp-viewer-snapshots-panel-blockContent`,description:`msp-viewer-snapshots-panel-description`,descriptionField:`msp-viewer-snapshots-panel-descriptionField`,empty:`msp-viewer-snapshots-panel-empty`,field:`msp-viewer-snapshots-panel-field`,fields:`msp-viewer-snapshots-panel-fields`,grip:`msp-viewer-snapshots-panel-grip`,index:`msp-viewer-snapshots-panel-index`,inspection:`msp-viewer-snapshots-panel-inspection`,inspector:`msp-viewer-snapshots-panel-inspector`,inspectorContent:`msp-viewer-snapshots-panel-inspectorContent`,inspectorEmpty:`msp-viewer-snapshots-panel-inspectorEmpty`,inspectorHeader:`msp-viewer-snapshots-panel-inspectorHeader`,inspectorKind:`msp-viewer-snapshots-panel-inspectorKind`,inspectorTitle:`msp-viewer-snapshots-panel-inspectorTitle`,item:`msp-viewer-snapshots-panel-item`,key:`msp-viewer-snapshots-panel-key`,label:`msp-viewer-snapshots-panel-label`,list:`msp-viewer-snapshots-panel-list`,listContent:`msp-viewer-snapshots-panel-listContent`,menuItem:`msp-viewer-snapshots-panel-menuItem`,name:`msp-viewer-snapshots-panel-name`,optionsButton:`msp-viewer-snapshots-panel-optionsButton`,panel:`msp-viewer-snapshots-panel-panel`,row:`msp-viewer-snapshots-panel-row`,rowActions:`msp-viewer-snapshots-panel-rowActions`,slot:`msp-viewer-snapshots-panel-slot`,textarea:`msp-viewer-snapshots-panel-textarea`,thumb:`msp-viewer-snapshots-panel-thumb`,trailing:`msp-viewer-snapshots-panel-trailing`},u(`viewer/views/state/snapshots-panel.module.css`,`@layer msp.components {
.msp-viewer-snapshots-panel-panel {
  gap: var(--msp-space-2);
  height: 100%;
  min-height: 0;
  padding: 0 var(--msp-panel-inset) var(--msp-panel-inset);
  font-size: var(--msp-font-size-sm);
  flex-direction: column;
  flex: 1 1 0;
  display: flex;
  container-type: inline-size;
}

.msp-viewer-snapshots-panel-actions {
  gap: var(--msp-space-1);
  flex: none;
  min-width: 0;
  display: flex;
}

@container (width < 280px) {
  .msp-viewer-snapshots-panel-actions > button:has(.msp-viewer-snapshots-panel-actionLabel) {
    width: 24px;
    padding: 0;
  }

  .msp-viewer-snapshots-panel-actionLabel {
    clip-path: inset(50%);
    white-space: nowrap;
    width: 1px;
    height: 1px;
    position: absolute;
    overflow: hidden;
  }
}

.msp-viewer-snapshots-panel-trailing {
  margin-left: auto;
  display: flex;
}

.msp-viewer-snapshots-panel-optionsButton {
  margin-right: var(--msp-space-2);
}

.msp-viewer-snapshots-panel-block {
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-well);
  flex: none;
  max-height: 50%;
}

.msp-viewer-snapshots-panel-blockContent {
  padding: var(--msp-space-2) var(--msp-space-3);
  grid-template-columns: minmax(0, 1fr);
  display: grid;
}

.msp-viewer-snapshots-panel-blockCaption {
  padding: var(--msp-space-1) 0 var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
}

.msp-viewer-snapshots-panel-list {
  flex: 1 1 0;
  min-height: 80px;
}

.msp-viewer-snapshots-panel-listContent {
  grid-template-columns: minmax(0, 1fr);
  align-content: start;
  display: grid;
}

.msp-viewer-snapshots-panel-empty {
  padding: var(--msp-space-3) var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
  line-height: 1.5;

  & strong {
    color: var(--msp-color-text-muted);
    font-weight: 600;
  }
}

.msp-viewer-snapshots-panel-item {
  align-items: center;
  gap: var(--msp-space-3);
  min-width: 0;
  height: max(28px, var(--msp-touch-target, 0px));
  padding: 0 var(--msp-space-1) 0 0;
  border-radius: var(--msp-radius-md);
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  &[data-current] {
    background: var(--msp-color-control);

    & .msp-viewer-snapshots-panel-name {
      color: var(--msp-color-accent);
    }
  }
}

.msp-viewer-snapshots-panel-row {
  align-items: center;
  gap: var(--msp-space-3);
  min-width: 0;
  height: 100%;
  padding: 0 0 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  cursor: default;
  user-select: none;
  flex: 1;
  display: flex;

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }
}

.msp-viewer-snapshots-panel-slot {
  flex: none;
  place-items: center end;
  min-width: 2ch;
  display: grid;

  & > * {
    grid-area: 1 / 1;
  }
}

.msp-viewer-snapshots-panel-grip {
  width: 14px;
  height: 22px;
  color: var(--msp-color-text-subtle);
  cursor: grab;
  touch-action: none;
  opacity: 0;
  place-items: center;
  display: grid;

  @media (hover: none) {
    opacity: 1;
  }

  &:hover {
    color: var(--msp-color-text);
  }

  .msp-viewer-snapshots-panel-item:hover &, [data-dragging] & {
    opacity: 1;
  }
}

.msp-viewer-snapshots-panel-item:hover .msp-viewer-snapshots-panel-index, [data-dragging] .msp-viewer-snapshots-panel-index {
  visibility: hidden;
}

.msp-viewer-snapshots-panel-item {
  &[data-dragging] {
    opacity: .5;
  }

  &[data-drop="before"] {
    box-shadow: 0 -2px 0 var(--msp-color-text-muted);
  }

  &[data-drop="after"] {
    box-shadow: 0 2px 0 var(--msp-color-text-muted);
  }
}

.msp-viewer-snapshots-panel-index {
  min-width: 2ch;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  text-align: right;
  flex: none;
}

.msp-viewer-snapshots-panel-thumb {
  border-radius: var(--msp-radius-sm);
  width: 22px;
  height: 16px;
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  flex: none;
}

.msp-viewer-snapshots-panel-name {
  min-width: 3ch;
  max-width: 60%;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 0 auto;
  font-weight: 500;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-snapshots-panel-key {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  flex: none;
}

.msp-viewer-snapshots-panel-description {
  min-width: 0;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-snapshots-panel-rowActions {
  flex: none;
  gap: 1px;
  display: flex;
}

.msp-viewer-snapshots-panel-action {
  width: max(24px, var(--msp-touch-target, 0px));
  height: max(24px, var(--msp-touch-target, 0px));
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-muted);
  opacity: 0;
  place-items: center;
  display: grid;

  @media (hover: none) {
    opacity: 1;
  }

  .msp-viewer-snapshots-panel-item:hover &, .msp-viewer-snapshots-panel-item:focus-within &, &[aria-expanded="true"] {
    opacity: 1;
  }

  &:hover {
    background: var(--msp-color-pressed);
    color: var(--msp-color-text);
  }
}

.msp-viewer-snapshots-panel-menuItem {
  align-items: center;
  gap: var(--msp-space-3);
  height: 26px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-muted);
  text-align: left;
  grid-template-columns: 14px 1fr;
  display: grid;

  &:hover, &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[data-danger] {
    color: var(--msp-color-danger);
  }

  &[data-danger]:not(:first-child) {
    margin-top: var(--msp-space-1);
    border-radius: 0 0 var(--msp-radius-sm) var(--msp-radius-sm);
    box-shadow: 0 -1px 0 var(--msp-glass-edge);
  }

  &[data-danger] {
    &:hover, &:focus-visible {
      background: color-mix(in oklab, var(--msp-color-danger), transparent 88%);
      color: var(--msp-color-danger);
    }
  }
}

.msp-viewer-snapshots-panel-inspector {
  height: clamp(200px, 45%, 440px);
  margin: 0 calc(-1 * var(--msp-space-2));
  border-top: 1px solid var(--msp-glass-edge);
  flex: none;
}

.msp-viewer-snapshots-panel-inspectorContent {
  grid-template-columns: minmax(0, 1fr);
  min-height: 100%;
  display: grid;
}

.msp-viewer-snapshots-panel-inspectorEmpty {
  padding: var(--msp-space-4);
  color: var(--msp-color-text-subtle);
  text-align: center;
  place-items: center;
  margin: 0;
  display: grid;
}

.msp-viewer-snapshots-panel-inspection {
  align-content: start;
  gap: var(--msp-space-3);
  padding: var(--msp-space-3) var(--msp-space-4);
  display: grid;
}

.msp-viewer-snapshots-panel-inspectorHeader {
  align-items: center;
  gap: var(--msp-space-2);
  min-height: 26px;
  display: flex;
}

.msp-viewer-snapshots-panel-inspectorTitle {
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

.msp-viewer-snapshots-panel-inspectorKind {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-viewer-snapshots-panel-fields {
  gap: var(--msp-space-1);
  display: grid;
}

.msp-viewer-snapshots-panel-field {
  grid-template-columns: var(--msp-label-width) minmax(0, 1fr);
  align-items: center;
  gap: var(--msp-space-3);
  min-height: 24px;
  display: grid;
}

.msp-viewer-snapshots-panel-label {
  color: var(--msp-color-text-muted);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-snapshots-panel-descriptionField {
  gap: var(--msp-space-1);
  padding-top: var(--msp-space-1);
  display: grid;
}

.msp-viewer-snapshots-panel-textarea {
  min-height: 72px;
  padding: var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font: inherit;
  resize: vertical;
  border: 0;
  line-height: 1.45;

  &::placeholder {
    color: var(--msp-color-text-subtle);
  }

  &:hover {
    background: var(--msp-color-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: 1px;
  }
}
}
`)})))()}function de(e){let{model:t}=e,n=v(!1),r=ne(t.current),i,s=h(t.entries,e=>e.length>0),c=o(`div`,{class:U.panel,children:[o(`div`,{class:U.actions,children:[a(D,{size:`sm`,variant:`ghost`,icon:a(b,{name:`plus`}),onClick:()=>t.add(),children:a(`span`,{class:U.actionLabel,children:`Add`})}),a(`span`,{class:U.trailing,children:e.actions?.()}),a(D,{size:`sm`,variant:`ghost`,class:U.optionsButton,icon:a(b,{name:`settings`}),title:`Snapshot options`,pressed:n.asReadonly,onClick:()=>n.set(!n.value)})]}),a(p,{when:n.asReadonly,reveal:!0,children:()=>o(S,{class:U.block,contentClass:U.blockContent,role:`region`,"aria-label":`Snapshot options`,children:[a(`p`,{class:U.blockCaption,children:`What a new snapshot includes`}),a(C,{form:t.saveOptions})]})}),a(S,{class:U.list,contentClass:U.listContent,role:h(s,e=>e?`list`:void 0),"aria-label":h(s,e=>e?`Snapshots`:void 0),ref:e=>i=e,children:a(m,{each:t.entries,fallback:()=>o(`p`,{class:U.empty,children:[`No snapshots yet. `,a(`strong`,{children:`Add`}),` saves the current view; saved ones play back in order.`]}),children:(e,n)=>a(fe,{model:t,entry:e,index:n,current:r.key(e.id)})},e=>e.id)}),a(S,{class:U.inspector,contentClass:U.inspectorContent,role:`region`,"aria-label":`Snapshot`,children:a(p,{when:h([t.entries,t.current],(e,t)=>e.find(e=>e.id===t)),fallback:()=>a(`p`,{class:U.inspectorEmpty,children:`Apply a snapshot to edit its name, key and description.`}),children:e=>a(me,{model:t,entry:e})})})]});return i&&F(i,`.${U.grip}`,(e,n)=>t.moveTo(e,n)),c}function fe(e){let{model:t,entry:n}=e,r=v(!1),i,s=n.description?.split(`
`).map(e=>e.replace(/[#*`>-]/g,``).trim()).find(e=>e);return o(`div`,{class:U.item,role:`listitem`,"data-id":n.id,"data-current":h(e.current,e=>e?``:void 0),children:[o(`div`,{class:U.row,role:`button`,tabIndex:0,"aria-current":h(e.current,e=>e?`true`:void 0),"aria-label":`Apply ${n.name}`,"aria-keyshortcuts":`Alt+ArrowUp Alt+ArrowDown`,onClick:()=>t.apply(n.id),onKeyDown:e=>{if(e.key===`Enter`||e.key===` `)e.preventDefault(),t.apply(n.id);else if(e.altKey&&(e.key===`ArrowUp`||e.key===`ArrowDown`)&&e.target===e.currentTarget){e.preventDefault();let r=e.currentTarget;t.move(n.id,e.key===`ArrowUp`?-1:1),queueMicrotask(()=>{r.isConnected&&document.activeElement!==r&&r.focus()})}},children:[o(`span`,{class:U.slot,children:[a(`span`,{class:U.index,children:h(e.index,e=>`${e+1}`)}),a(`span`,{class:U.grip,"aria-hidden":`true`,"data-tip":`Drag to reorder (Alt+Up or Down on the row)`,onClick:e=>e.stopPropagation(),children:a(b,{name:`grip-vertical`,size:14})})]}),n.image?a(`span`,{class:U.thumb,style:{background:n.image}}):null,a(`span`,{class:U.name,children:n.name}),n.key?o(`span`,{class:U.key,children:[`#`,n.key]}):null,a(`span`,{class:U.description,children:s??``})]}),o(`span`,{class:U.rowActions,children:[a(`button`,{type:`button`,class:U.action,"data-tip":`Retake from the current view`,"aria-label":`Retake from the current view`,onClick:e=>{e.stopPropagation(),t.replace(n.id)},children:a(b,{name:`camera`,size:14})}),a(`button`,{type:`button`,class:U.action,"aria-label":`More`,"aria-haspopup":`menu`,"aria-expanded":r,ref:e=>i=e,onClick:e=>{e.stopPropagation(),r.set(!r.value)},children:a(b,{name:`ellipsis`,size:15})})]}),a(p,{when:r,children:()=>a(T,{anchor:i,"aria-label":`${n.name}: actions`,onClose:e=>{r.set(!1),e&&i?.focus()},children:a(pe,{icon:`trash-2`,label:`Remove`,danger:!0,run:()=>{r.set(!1),t.remove(n.id)}})})})]})}function pe(e){return o(`button`,{type:`button`,role:`menuitem`,class:U.menuItem,"data-danger":e.danger?``:void 0,onClick:e.run,children:[a(`span`,{}),a(`span`,{children:e.label})]})}function me(e){let{model:t,entry:n}=e,r=t.entryOptions(n.id);return o(`div`,{class:U.inspection,children:[o(`header`,{class:U.inspectorHeader,children:[a(`span`,{class:U.inspectorTitle,children:n.name}),a(`span`,{class:U.inspectorKind,children:n.timestamp??`snapshot`})]}),o(`div`,{class:U.fields,children:[o(`label`,{class:U.field,children:[a(`span`,{class:U.label,children:`Name`}),a(E,{size:`sm`,value:n.name,onSubmit:e=>t.update(n.id,{name:e})})]}),o(`label`,{class:U.field,children:[a(`span`,{class:U.label,children:`Key`}),a(E,{size:`sm`,value:n.key??``,placeholder:`Optional, for #links`,onSubmit:e=>t.update(n.id,{key:e||void 0})})]}),o(`label`,{class:U.descriptionField,children:[a(`span`,{class:U.label,children:`Description`}),a(`textarea`,{class:U.textarea,rows:4,placeholder:`Markdown · [title](#key) links to a snapshot`,value:n.description??``,onChange:e=>t.update(n.id,{description:e.currentTarget.value||void 0})})]})]}),r?a(C,{form:r}):null]})}function G(){return(G=e((()=>{O(),y(),f(),w(),ee(),g(),W(),P(),s()})))()}function he(e){let t=v(!1),n=v(!1),r=v(0),i=v(0),a=v(!1),o=null,s=()=>{},c=(e,t)=>{e.value!==t&&e.set(t)},l=e.audio.subscribe(e=>{if(s(),o=e,c(t,!!e),!e){c(n,!1),c(r,0),c(i,0);return}a.value&&(e.muted=!0);let l=()=>{c(a,e.muted),c(n,!e.paused&&!e.ended),c(r,e.currentTime||0),c(i,Number.isFinite(e.duration)?e.duration:0)},u=[`play`,`pause`,`ended`,`timeupdate`,`durationchange`,`loadedmetadata`,`seeked`,`emptied`,`volumechange`];for(let t of u)e.addEventListener(t,l);s=()=>{for(let t of u)e.removeEventListener(t,l)},l()});return{present:t.asReadonly,playing:n.asReadonly,time:r.asReadonly,duration:i.asReadonly,muted:a.asReadonly,toggleMute(){let e=!a.value;a.set(e),o&&(o.muted=e)},toggle(){o&&(o.paused||o.ended?o.play().catch(()=>{}):o.pause())},stop:()=>e.stopAudio(),seek(e){o&&o.duration>0&&(o.currentTime=Math.max(0,Math.min(1,e))*o.duration)},close:()=>e.closeAudio(),dispose(){l.unsubscribe(),s()}}}function K(e){let t=Math.max(0,Math.floor(e));return`${Math.floor(t/60)}:${String(t%60).padStart(2,`0`)}`}function q(){return(q=e((()=>{ae()})))()}var J;function Y(){return(Y=e((()=>{d(),J={action:`msp-viewer-audio-bar-action`,bar:`msp-viewer-audio-bar-bar`,fill:`msp-viewer-audio-bar-fill`,knob:`msp-viewer-audio-bar-knob`,knobTrack:`msp-viewer-audio-bar-knobTrack`,play:`msp-viewer-audio-bar-play`,time:`msp-viewer-audio-bar-time`,track:`msp-viewer-audio-bar-track`},u(`viewer/views/state/audio-bar.module.css`,`@layer msp.components {
.msp-viewer-audio-bar-bar {
  align-items: center;
  gap: var(--msp-space-2);
  height: 32px;
  padding: 0 var(--msp-space-1);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-well);
  font-size: var(--msp-font-size-xs);
  display: flex;
}

.msp-viewer-audio-bar-play {
  background: var(--msp-color-accent);
  width: 24px;
  height: 24px;
  color: var(--msp-color-on-accent);
  transition: transform var(--msp-motion-fast) var(--msp-ease);
  border-radius: 50%;
  flex: none;
  place-items: center;
  display: grid;

  &:hover {
    transform: scale(1.06);
  }
}

.msp-viewer-audio-bar-time {
  min-width: 4ch;
  color: var(--msp-color-text-subtle);
  font-variant-numeric: tabular-nums;
  text-align: center;
  flex: none;
}

.msp-viewer-audio-bar-track {
  cursor: pointer;
  touch-action: none;
  outline: none;
  flex: 1;
  min-width: 0;
  height: 16px;
  position: relative;

  &:before {
    content: "";
    background: var(--msp-color-pressed);
    border-radius: 1.5px;
    height: 3px;
    margin-top: -1.5px;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
  }

  &:focus-visible {
    box-shadow: 0 0 0 1px var(--msp-color-focus-ring);
    border-radius: var(--msp-radius-sm);
  }
}

.msp-viewer-audio-bar-fill {
  background: var(--msp-color-accent);
  transform-origin: 0;
  will-change: transform;
  border-radius: 1.5px;
  width: 100%;
  height: 3px;
  margin-top: -1.5px;
  position: absolute;
  top: 50%;
  left: 0;
}

.msp-viewer-audio-bar-knobTrack {
  pointer-events: none;
  will-change: transform;
  position: absolute;
  inset: 0;
}

.msp-viewer-audio-bar-knob {
  background: var(--msp-color-accent);
  width: 10px;
  height: 10px;
  box-shadow: 0 0 0 2px var(--msp-color-well);
  border-radius: 50%;
  margin-top: -5px;
  position: absolute;
  top: 50%;
  left: -5px;
}

.msp-viewer-audio-bar-action {
  border-radius: var(--msp-radius-sm);
  width: 22px;
  height: 22px;
  color: var(--msp-color-text-muted);
  flex: none;
  place-items: center;
  display: grid;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}
}
`)})))()}function ge(e){let{model:t}=e,n=h([t.time,t.duration],(e,t)=>t>0?Math.min(1,e/t):0),i,s=0,l=()=>{i&&t.seek((s-i.left)/(i.width||1))},u=c(0),d=0;r(u,l);let f=o(`div`,{class:J.track,role:`slider`,tabIndex:0,"aria-label":`Position`,"aria-valuemin":`0`,"aria-valuemax":h(t.duration,e=>String(Math.round(e))),"aria-valuenow":h(t.time,e=>String(Math.round(e))),"aria-valuetext":h([t.time,t.duration],(e,t)=>`${K(e)} of ${K(t)}`),onKeyDown:e=>{let n=t.duration.value;if(!(n>0))return;let r=e.shiftKey?10:5;if(e.key===`ArrowRight`)t.seek((t.time.value+r)/n);else if(e.key===`ArrowLeft`)t.seek((t.time.value-r)/n);else if(e.key===` `)t.toggle();else return;e.preventDefault()},children:[a(`span`,{class:J.fill,style:{transform:h(n,e=>`scaleX(${e})`)}}),a(`span`,{class:J.knobTrack,style:{transform:h(n,e=>`translateX(${e*100}%)`)},children:a(`span`,{class:J.knob})})]});return te(f,{start:e=>{if(e.button===0)return i=f.getBoundingClientRect(),s=e.clientX,l(),i},move:e=>{s=e.clientX,u.offer(++d)},end:(e,t,n)=>{t===`up`&&n&&(s=n.clientX,l()),i=void 0}}),o(`div`,{class:J.bar,role:`group`,"aria-label":`Audio`,children:[a(`button`,{type:`button`,class:J.play,title:h(t.playing,e=>e?`Pause`:`Play`),"aria-label":h(t.playing,e=>e?`Pause audio`:`Play audio`),onClick:()=>t.toggle(),children:a(p,{when:t.playing,fallback:()=>a(b,{name:`play`,size:13}),children:()=>a(b,{name:`pause`,size:13})})}),a(`span`,{class:J.time,children:h(t.time,K)}),f,a(`span`,{class:J.time,children:h(t.duration,e=>e>0?K(e):`–:––`)}),a(`button`,{type:`button`,class:J.action,title:`Stop`,"aria-label":`Stop audio`,onClick:()=>t.stop(),children:a(b,{name:`square`,size:11})}),a(`button`,{type:`button`,class:J.action,title:`Close`,"aria-label":`Close audio`,onClick:()=>t.close(),children:a(b,{name:`x`,size:13})})]})}function X(){return(X=e((()=>{y(),f(),n(),x(),g(),q(),Y(),s()})))()}function _e(e,t){return{link(n){if(t.command(n))return t=>void e.snapshot?.link({href:n,event:t})},image(e,n){let r=t.command(e);return r?ve(r)??document.createTextNode(n):t.resolve(e)}}}function ve(e){let t=e[`color-swatch`];if(t)return Z({display:`inline-block`,width:`0.75em`,height:`0.75em`,borderRadius:`25%`,backgroundColor:t});let n=e[`color-palette-name`],r=e[`color-palette-colors`];if(!n&&!r)return;let i=r?k(r):ie[n.toLowerCase()]?.list;if(i?.length)return Z({display:`inline-block`,minWidth:e[`color-palette-width`]??`150px`,height:e[`color-palette-height`]??`0.5em`,borderRadius:`2px`,background:(`color-palette-discrete`in e?M:j)(i)})}function Z(e){let t=document.createElement(`span`);return Object.assign(t.style,e),t}function Q(){return(Q=e((()=>{re(),A()})))()}function ye(e){let n=e.api.snapshot;if(!n)return{};z(e.api,n);let r=he(n.markdown);return{tabs:[{id:`snapshots.tab.snapshots`,title:`Snapshots`,icon:`snapshots`,order:1.5,render:_(()=>{let r=L(e.api,n,N),i=R(e.api,n);return l(e=>r.setActive(e)),t(()=>r.dispose()),a(de,{model:r,actions:()=>a(p,{when:h(i.count,e=>e>=2),children:()=>a(D,{size:`sm`,variant:`ghost`,icon:a(p,{when:i.isPlaying,fallback:()=>a(b,{name:`play`}),children:()=>a(b,{name:`pause`})}),title:h(i.isPlaying,e=>e?`Stop the slideshow`:`Play the snapshots`),onClick:()=>i.togglePlay()})})})})}],sections:[{id:`snapshots.section.playback`,slot:`playback`,title:`Snapshots`,render:_(()=>{let t=R(e.api,n),s=B(e.api,n),c=v(!1),l=h(s.duration,e=>e>0),u=()=>o(i,{children:[a(p,{when:l,children:()=>a(D,{variant:`ghost`,size:`sm`,icon:a(b,{name:`film`}),title:h(c.asReadonly,e=>e?`Hide the snapshot's transition`:`The snapshot's transition`),pressed:c.asReadonly,onClick:()=>c.set(!c.value)})}),a(p,{when:r.present,children:()=>a(ce,{muted:r.muted,onClick:()=>r.toggleMute()})})]}),d=h([r.present,t.count],(e,t)=>e&&t<=1),f=h([c.asReadonly,t.count],(e,t)=>e||t<=1);return o(i,{children:[a(oe,{model:t,actions:u}),a(p,{when:d,children:()=>a(ue,{muted:r.muted,onToggleMute:()=>r.toggleMute()})}),a(p,{when:f,children:()=>a(le,{model:s})})]})})}],overlays:[{id:H,title:`Story`,persistent:!0,fill:!0,render:_(()=>{let t=R(e.api,n,_e(e.api,n.markdown));return o(`div`,{style:`display: flex; flex: 1 1 0; flex-direction: column; gap: var(--msp-space-2); min-height: 0`,children:[a(p,{when:r.present,children:()=>a(ge,{model:r})}),a(p,{when:h(t.count,e=>e>=1),fallback:()=>a(`p`,{style:`margin: 0`,children:`There are no snapshots: add some in the Snapshots tab.`}),children:()=>a(se,{model:t,bare:!0})})]})})}],toolbar:[{id:`snapshots.toolbar.playback`,icon:`book-open`,title:`Story`,group:`scene`,overlay:H,visible:h(n.state,V)},{id:`snapshots.toolbar.audio`,icon:`play`,title:`Play audio`,group:`view`,place:`canvas`,visible:r.present,face:h(r.playing,e=>e?{icon:`pause`,title:`Pause audio`}:{icon:`play`,title:`Play audio`}),run:()=>r.toggle(),menu:[{id:`stop`,label:`Stop`,icon:`square`,run:()=>r.stop()},{id:`close`,label:`Close the audio`,icon:`x`,run:()=>r.close()}]}]}}function $(){return($=e((()=>{O(),G(),X(),q(),Q(),I(),g(),s()})))()}$();export{ye as snapshotsUI};