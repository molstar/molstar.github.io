import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{_ as t,g as n,h as r,i,n as a,r as o,t as s}from"./jsx-runtime-DzTO5r4L.js";import{n as c,r as l}from"./registry-D35yV2Tb.js";import{t as u}from"./params-form-BiSG3JZ9.js";import{i as d,n as f,t as p}from"./control-flow-2XcFB3wB.js";import{n as m,t as h}from"./map-COHPbqb4.js";import{n as g,t as _}from"./combineLatest-nINHdI9G.js";import{w as v}from"./shell-view--7tL82cI.js";import{n as y,t as b}from"./distinctUntilChanged-Bi0nDGSG.js";import{n as x,r as S}from"./observable-state-8hMFvtS9.js";import{n as C,t as w}from"./icon-Fyk1xIJy.js";import{t as T}from"./scroll-area-O9ZFxK58.js";import{H as E,W as ee}from"./param-definition-OHPHmB1q.js";import{n as D}from"./select-qi6jJ7y0.js";import{t as O}from"./text-input-WVcFJO0h.js";import{t as k}from"./button-oplfrRqY.js";import{t as A}from"./core-BTVVvYEu.js";import{t as j}from"./src-CNHrM0KV.js";import{a as te,i as ne,n as re,s as ie,t as ae}from"./playback-iaax4IEb.js";import{a as oe,i as se,n as ce,r as le}from"./utils-D2pLJM4s.js";import{t as M}from"./download-DeieNi94.js";import{t as N}from"./drag-to-reorder-BIcwE7OS.js";import{a as P,i as F,n as I,o as L,r as R,s as z,t as B}from"./model-CcXIC9Sq.js";var V;function H(){return(H=e((()=>{l(),V={action:`msp-viewer-snapshots-panel-action`,actionLabel:`msp-viewer-snapshots-panel-actionLabel`,actions:`msp-viewer-snapshots-panel-actions`,block:`msp-viewer-snapshots-panel-block`,blockCaption:`msp-viewer-snapshots-panel-blockCaption`,blockContent:`msp-viewer-snapshots-panel-blockContent`,description:`msp-viewer-snapshots-panel-description`,descriptionField:`msp-viewer-snapshots-panel-descriptionField`,empty:`msp-viewer-snapshots-panel-empty`,field:`msp-viewer-snapshots-panel-field`,fields:`msp-viewer-snapshots-panel-fields`,grip:`msp-viewer-snapshots-panel-grip`,index:`msp-viewer-snapshots-panel-index`,inspection:`msp-viewer-snapshots-panel-inspection`,inspector:`msp-viewer-snapshots-panel-inspector`,inspectorContent:`msp-viewer-snapshots-panel-inspectorContent`,inspectorEmpty:`msp-viewer-snapshots-panel-inspectorEmpty`,inspectorHeader:`msp-viewer-snapshots-panel-inspectorHeader`,inspectorKind:`msp-viewer-snapshots-panel-inspectorKind`,inspectorTitle:`msp-viewer-snapshots-panel-inspectorTitle`,item:`msp-viewer-snapshots-panel-item`,key:`msp-viewer-snapshots-panel-key`,label:`msp-viewer-snapshots-panel-label`,list:`msp-viewer-snapshots-panel-list`,listContent:`msp-viewer-snapshots-panel-listContent`,menuItem:`msp-viewer-snapshots-panel-menuItem`,name:`msp-viewer-snapshots-panel-name`,optionsButton:`msp-viewer-snapshots-panel-optionsButton`,panel:`msp-viewer-snapshots-panel-panel`,row:`msp-viewer-snapshots-panel-row`,rowActions:`msp-viewer-snapshots-panel-rowActions`,slot:`msp-viewer-snapshots-panel-slot`,textarea:`msp-viewer-snapshots-panel-textarea`,thumb:`msp-viewer-snapshots-panel-thumb`,trailing:`msp-viewer-snapshots-panel-trailing`},c(`viewer/views/state/snapshots-panel.module.css`,`@layer msp.components {
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
  min-width: 0;
  display: grid;
}

.msp-viewer-snapshots-panel-row {
  align-items: center;
  gap: var(--msp-space-3);
  min-width: 0;
  height: 28px;
  padding: 0 var(--msp-space-1) 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  cursor: default;
  user-select: none;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }

  &[aria-selected="true"] {
    background: var(--msp-color-control);

    & .msp-viewer-snapshots-panel-name {
      color: var(--msp-color-accent);
    }
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

  .msp-viewer-snapshots-panel-row:hover &, [data-dragging] & {
    opacity: 1;
  }
}

.msp-viewer-snapshots-panel-row:hover .msp-viewer-snapshots-panel-index, [data-dragging] .msp-viewer-snapshots-panel-index {
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
  border-radius: var(--msp-radius-sm);
  width: 22px;
  height: 22px;
  color: var(--msp-color-text-muted);
  opacity: 0;
  place-items: center;
  display: grid;

  @media (hover: none) {
    opacity: 1;
  }

  .msp-viewer-snapshots-panel-row:hover &, .msp-viewer-snapshots-panel-row:focus-within &, &[aria-expanded="true"] {
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
`)})))()}function U(e){let{model:t}=e,n=S(!1),r=t.current.pipe(b()),i,s=e=>n=>N(n,i,e,n=>t.moveTo(e,n));return o(`div`,{class:V.panel,children:[o(`div`,{class:V.actions,children:[a(k,{size:`sm`,variant:`ghost`,icon:a(w,{name:`plus`}),onClick:()=>t.add(),children:a(`span`,{class:V.actionLabel,children:`Add`})}),a(`span`,{class:V.trailing,children:e.actions?.()}),a(k,{size:`sm`,variant:`ghost`,class:V.optionsButton,icon:a(w,{name:`settings`}),title:`Snapshot options`,pressed:n.asReadonly,onClick:()=>n.set(!n.value)})]}),a(f,{when:n.asReadonly,reveal:!0,children:()=>o(T,{class:V.block,contentClass:V.blockContent,role:`region`,"aria-label":`Snapshot options`,children:[a(`p`,{class:V.blockCaption,children:`What a new snapshot includes`}),a(u,{form:t.saveOptions})]})}),a(T,{class:V.list,contentClass:V.listContent,role:`listbox`,"aria-label":`Snapshots`,ref:e=>i=e,children:a(p,{each:t.entries,fallback:()=>o(`p`,{class:V.empty,children:[`No snapshots yet. `,a(`strong`,{children:`Add`}),` saves the current view; saved ones play back in order.`]}),children:(e,n)=>a(ue,{model:t,entry:e,index:n,onGrab:s(e.id),current:r.pipe(m(t=>t===e.id),b())})},e=>e.id)}),a(T,{class:V.inspector,contentClass:V.inspectorContent,role:`region`,"aria-label":`Snapshot`,children:a(f,{when:t.entries.pipe(m(e=>e.find(e=>e.id===t.current.value)),b()),fallback:()=>a(`p`,{class:V.inspectorEmpty,children:`Apply a snapshot to edit its name, key and description.`}),children:e=>a(fe,{model:t,entry:e})})})]})}function ue(e){let{model:t,entry:n}=e,r=S(!1),i,s=n.description?.split(`
`).map(e=>e.replace(/[#*`>-]/g,``).trim()).find(e=>e);return o(`div`,{class:V.item,"data-id":n.id,children:[o(`div`,{class:V.row,role:`option`,tabIndex:0,"aria-selected":e.current,"aria-keyshortcuts":`Alt+ArrowUp Alt+ArrowDown`,onClick:()=>t.apply(n.id),onKeyDown:e=>{if(e.key===`Enter`||e.key===` `)e.preventDefault(),t.apply(n.id);else if(e.altKey&&(e.key===`ArrowUp`||e.key===`ArrowDown`)&&e.target===e.currentTarget){e.preventDefault();let r=e.currentTarget;t.move(n.id,e.key===`ArrowUp`?-1:1),queueMicrotask(()=>{r.isConnected&&document.activeElement!==r&&r.focus()})}},children:[o(`span`,{class:V.slot,children:[a(`span`,{class:V.index,children:e.index.pipe(m(e=>`${e+1}`))}),a(`span`,{class:V.grip,"aria-hidden":`true`,"data-tip":`Drag to reorder (Alt+Up or Down on the row)`,onPointerDown:e.onGrab,onClick:e=>e.stopPropagation(),children:a(w,{name:`grip-vertical`,size:14})})]}),n.image?a(`span`,{class:V.thumb,style:{background:n.image}}):null,a(`span`,{class:V.name,children:n.name}),n.key?o(`span`,{class:V.key,children:[`#`,n.key]}):null,a(`span`,{class:V.description,children:s??``}),o(`span`,{class:V.rowActions,children:[a(`button`,{type:`button`,class:V.action,"data-tip":`Retake from the current view`,"aria-label":`Retake from the current view`,onClick:e=>{e.stopPropagation(),t.replace(n.id)},children:a(w,{name:`camera`,size:14})}),a(`button`,{type:`button`,class:V.action,"aria-label":`More`,"aria-haspopup":`menu`,"aria-expanded":r,ref:e=>i=e,onClick:e=>{e.stopPropagation(),r.set(!r.value)},children:a(w,{name:`ellipsis`,size:15})})]})]}),a(f,{when:r,children:()=>a(D,{anchor:i,"aria-label":`${n.name}: actions`,onClose:e=>{r.set(!1),e&&i?.focus()},children:a(de,{icon:`trash-2`,label:`Remove`,danger:!0,run:()=>{r.set(!1),t.remove(n.id)}})})})]})}function de(e){return o(`button`,{type:`button`,role:`menuitem`,class:V.menuItem,"data-danger":e.danger?``:void 0,onClick:e.run,children:[a(`span`,{}),a(`span`,{children:e.label})]})}function fe(e){let{model:t,entry:n}=e,r=t.entryOptions(n.id);return o(`div`,{class:V.inspection,children:[o(`header`,{class:V.inspectorHeader,children:[a(`span`,{class:V.inspectorTitle,children:n.name}),a(`span`,{class:V.inspectorKind,children:n.timestamp??`snapshot`})]}),o(`div`,{class:V.fields,children:[o(`label`,{class:V.field,children:[a(`span`,{class:V.label,children:`Name`}),a(O,{size:`sm`,value:n.name,onSubmit:e=>t.update(n.id,{name:e})})]}),o(`label`,{class:V.field,children:[a(`span`,{class:V.label,children:`Key`}),a(O,{size:`sm`,value:n.key??``,placeholder:`Optional, for #links`,onSubmit:e=>t.update(n.id,{key:e||void 0})})]}),o(`label`,{class:V.descriptionField,children:[a(`span`,{class:V.label,children:`Description`}),a(`textarea`,{class:V.textarea,rows:4,placeholder:`Markdown · [title](#key) links to a snapshot`,value:n.description??``,onChange:e=>t.update(n.id,{description:e.currentTarget.value||void 0})})]})]}),r?a(u,{form:r}):null]})}function W(){return(W=e((()=>{y(),h(),j(),C(),d(),x(),H(),s()})))()}function pe(e){let t=S(!1),n=S(!1),r=S(0),i=S(0),a=S(!1),o=null,s=()=>{},c=(e,t)=>{e.value!==t&&e.set(t)},l=e.audio.subscribe(e=>{if(s(),o=e,c(t,!!e),!e){c(n,!1),c(r,0),c(i,0);return}a.value&&(e.muted=!0);let l=()=>{c(a,e.muted),c(n,!e.paused&&!e.ended),c(r,e.currentTime||0),c(i,Number.isFinite(e.duration)?e.duration:0)},u=[`play`,`pause`,`ended`,`timeupdate`,`durationchange`,`loadedmetadata`,`seeked`,`emptied`,`volumechange`];for(let t of u)e.addEventListener(t,l);s=()=>{for(let t of u)e.removeEventListener(t,l)},l()});return{present:t.asReadonly,playing:n.asReadonly,time:r.asReadonly,duration:i.asReadonly,muted:a.asReadonly,toggleMute(){let e=!a.value;a.set(e),o&&(o.muted=e)},toggle(){o&&(o.paused||o.ended?o.play().catch(()=>{}):o.pause())},stop:()=>e.stopAudio(),seek(e){o&&o.duration>0&&(o.currentTime=Math.max(0,Math.min(1,e))*o.duration)},close:()=>e.closeAudio(),dispose(){l.unsubscribe(),s()}}}function G(e){let t=Math.max(0,Math.floor(e));return`${Math.floor(t/60)}:${String(t%60).padStart(2,`0`)}`}function K(){return(K=e((()=>{A()})))()}var q;function J(){return(J=e((()=>{l(),q={action:`msp-viewer-audio-bar-action`,bar:`msp-viewer-audio-bar-bar`,fill:`msp-viewer-audio-bar-fill`,knob:`msp-viewer-audio-bar-knob`,knobTrack:`msp-viewer-audio-bar-knobTrack`,play:`msp-viewer-audio-bar-play`,time:`msp-viewer-audio-bar-time`,track:`msp-viewer-audio-bar-track`},c(`viewer/views/state/audio-bar.module.css`,`@layer msp.components {
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
`)})))()}function Y(e){let{model:n}=e,r=_([n.time,n.duration]).pipe(m(([e,t])=>t>0?Math.min(1,e/t):0)),i,s=0,c=0,l=()=>{s&&cancelAnimationFrame(s),s=0,i&&n.seek((c-i.left)/(i.width||1))},u=()=>{l(),i=void 0};return t(()=>{s&&cancelAnimationFrame(s),s=0}),o(`div`,{class:q.bar,role:`group`,"aria-label":`Audio`,children:[a(`button`,{type:`button`,class:q.play,title:n.playing.pipe(m(e=>e?`Pause`:`Play`)),"aria-label":n.playing.pipe(m(e=>e?`Pause audio`:`Play audio`)),onClick:()=>n.toggle(),children:a(f,{when:n.playing,fallback:()=>a(w,{name:`play`,size:13}),children:()=>a(w,{name:`pause`,size:13})})}),a(`span`,{class:q.time,children:n.time.pipe(m(G))}),o(`div`,{class:q.track,role:`slider`,tabIndex:0,"aria-label":`Position`,"aria-valuemin":`0`,"aria-valuemax":n.duration.pipe(m(e=>String(Math.round(e)))),"aria-valuenow":n.time.pipe(m(e=>String(Math.round(e)))),"aria-valuetext":_([n.time,n.duration]).pipe(m(([e,t])=>`${G(e)} of ${G(t)}`)),onPointerDown:e=>{if(e.button!==0)return;let t=e.currentTarget;i=t.getBoundingClientRect(),t.setPointerCapture(e.pointerId),c=e.clientX,l()},onPointerMove:e=>{i&&(c=e.clientX,s||=requestAnimationFrame(l))},onPointerUp:e=>{c=e.clientX,u()},onPointerCancel:()=>{s&&cancelAnimationFrame(s),s=0,i=void 0},onKeyDown:e=>{let t=n.duration.value;if(!(t>0))return;let r=e.shiftKey?10:5;if(e.key===`ArrowRight`)n.seek((n.time.value+r)/t);else if(e.key===`ArrowLeft`)n.seek((n.time.value-r)/t);else if(e.key===` `)n.toggle();else return;e.preventDefault()},children:[a(`span`,{class:q.fill,style:{transform:r.pipe(m(e=>`scaleX(${e})`))}}),a(`span`,{class:q.knobTrack,style:{transform:r.pipe(m(e=>`translateX(${e*100}%)`))},children:a(`span`,{class:q.knob})})]}),a(`span`,{class:q.time,children:n.duration.pipe(m(e=>e>0?G(e):`–:––`))}),a(`button`,{type:`button`,class:q.action,title:`Stop`,"aria-label":`Stop audio`,onClick:()=>n.stop(),children:a(w,{name:`square`,size:11})}),a(`button`,{type:`button`,class:q.action,title:`Close`,"aria-label":`Close audio`,onClick:()=>n.close(),children:a(w,{name:`x`,size:13})})]})}function X(){return(X=e((()=>{C(),d(),r(),g(),h(),K(),J(),s()})))()}function me(e,t){return{link(n){if(t.command(n))return t=>void e.snapshot?.link({href:n,event:t})},image(e,n){let r=t.command(e);return r?he(r)??document.createTextNode(n):t.resolve(e)}}}function he(e){let t=e[`color-swatch`];if(t)return Z({display:`inline-block`,width:`0.75em`,height:`0.75em`,borderRadius:`25%`,backgroundColor:t});let n=e[`color-palette-name`],r=e[`color-palette-colors`];if(!n&&!r)return;let i=r?oe(r):E[n.toLowerCase()]?.list;if(i?.length)return Z({display:`inline-block`,minWidth:e[`color-palette-width`]??`150px`,height:e[`color-palette-height`]??`0.5em`,borderRadius:`2px`,background:(`color-palette-discrete`in e?le:ce)(i)})}function Z(e){let t=document.createElement(`span`);return Object.assign(t.style,e),t}function Q(){return(Q=e((()=>{ee(),se()})))()}function ge(e){let r=e.api.snapshot;if(!r)return{};L(e.api,r);let s=pe(r.markdown);return{tabs:[{id:`snapshots.tab.snapshots`,title:`Snapshots`,icon:`snapshots`,order:1.5,render:v(()=>{let i=F(e.api,r,M),o=I(e.api,r);return n(e=>i.setActive(e)),t(()=>i.dispose()),a(U,{model:i,actions:()=>a(f,{when:o.count.pipe(m(e=>e>=2)),children:()=>a(k,{size:`sm`,variant:`ghost`,icon:a(f,{when:o.isPlaying,fallback:()=>a(w,{name:`play`}),children:()=>a(w,{name:`pause`})}),title:o.isPlaying.pipe(m(e=>e?`Stop the slideshow`:`Play the snapshots`)),onClick:()=>o.togglePlay()})})})})}],sections:[{id:`snapshots.section.playback`,slot:`playback`,title:`Snapshots`,render:v(()=>{let t=I(e.api,r),n=R(e.api,r),c=S(!1),l=n.duration.pipe(m(e=>e>0),b()),u=()=>o(i,{children:[a(f,{when:l,children:()=>a(k,{variant:`ghost`,size:`sm`,icon:a(w,{name:`film`}),title:c.asReadonly.pipe(m(e=>e?`Hide the snapshot's transition`:`The snapshot's transition`)),pressed:c.asReadonly,onClick:()=>c.set(!c.value)})}),a(f,{when:s.present,children:()=>a(re,{muted:s.muted,onClick:()=>s.toggleMute()})})]}),d=_([s.present,t.count]).pipe(m(([e,t])=>e&&t<=1)),p=_([c.asReadonly,t.count]).pipe(m(([e,t])=>e||t<=1),b());return o(i,{children:[a(te,{model:t,actions:u}),a(f,{when:d,children:()=>a(ae,{muted:s.muted,onToggleMute:()=>s.toggleMute()})}),a(f,{when:p,children:()=>a(ie,{model:n})})]})})}],overlays:[{id:B,title:`Story`,persistent:!0,fill:!0,render:v(()=>{let t=I(e.api,r,me(e.api,r.markdown));return o(`div`,{style:`display: flex; flex: 1 1 0; flex-direction: column; gap: var(--msp-space-2); min-height: 0`,children:[a(f,{when:s.present,children:()=>a(Y,{model:s})}),a(f,{when:t.count.pipe(m(e=>e>=1)),fallback:()=>a(`p`,{style:`margin: 0`,children:`There are no snapshots: add some in the Snapshots tab.`}),children:()=>a(ne,{model:t,bare:!0})})]})})}],toolbar:[{id:`snapshots.toolbar.playback`,icon:`book-open`,title:`Story`,group:`scene`,overlay:B,visible:r.state.pipe(m(z),b())},{id:`snapshots.toolbar.audio`,icon:`play`,title:`Play audio`,group:`view`,place:`canvas`,visible:s.present,face:s.playing.pipe(m(e=>e?{icon:`pause`,title:`Pause audio`}:{icon:`play`,title:`Play audio`})),run:()=>s.toggle(),menu:[{id:`stop`,label:`Stop`,icon:`square`,run:()=>s.stop()},{id:`close`,label:`Close the audio`,icon:`x`,run:()=>s.close()}]}]}}function $(){return($=e((()=>{j(),g(),y(),h(),W(),X(),K(),Q(),P(),s()})))()}$();export{ge as snapshotsUI};