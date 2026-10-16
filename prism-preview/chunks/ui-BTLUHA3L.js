import{a as re}from"./chunk-5STYHZIV.js";import{b as _,c as J,d as Q}from"./chunk-TSC5JGYQ.js";import{a as ie}from"./chunk-B4OPEUZD.js";import{E as K,F as j,H as ee,L as $,M as N,O as te,R as ne,S as oe,T as se,U as ae,b as L,c as Y,e as U,g as y,h as Z,m as B,o as F,r as x,s,t as f,v as R}from"./chunk-ITOM7TT7.js";import"./chunk-KHBNYRDQ.js";import"./chunk-2IJB6S74.js";import{b as M,d as S}from"./chunk-4XDSNK62.js";import{i as v,j as E,s as T}from"./chunk-QZGD7T6O.js";import{pb as b,qa as W}from"./chunk-CZB3H7J7.js";import"./chunk-DCANE7XH.js";var d={action:"msp-viewer-snapshots-panel-action",actionLabel:"msp-viewer-snapshots-panel-actionLabel",actions:"msp-viewer-snapshots-panel-actions",block:"msp-viewer-snapshots-panel-block",blockCaption:"msp-viewer-snapshots-panel-blockCaption",blockContent:"msp-viewer-snapshots-panel-blockContent",description:"msp-viewer-snapshots-panel-description",descriptionField:"msp-viewer-snapshots-panel-descriptionField",empty:"msp-viewer-snapshots-panel-empty",field:"msp-viewer-snapshots-panel-field",fields:"msp-viewer-snapshots-panel-fields",grip:"msp-viewer-snapshots-panel-grip",index:"msp-viewer-snapshots-panel-index",inspection:"msp-viewer-snapshots-panel-inspection",inspector:"msp-viewer-snapshots-panel-inspector",inspectorContent:"msp-viewer-snapshots-panel-inspectorContent",inspectorEmpty:"msp-viewer-snapshots-panel-inspectorEmpty",inspectorHeader:"msp-viewer-snapshots-panel-inspectorHeader",inspectorKind:"msp-viewer-snapshots-panel-inspectorKind",inspectorTitle:"msp-viewer-snapshots-panel-inspectorTitle",item:"msp-viewer-snapshots-panel-item",key:"msp-viewer-snapshots-panel-key",label:"msp-viewer-snapshots-panel-label",list:"msp-viewer-snapshots-panel-list",listContent:"msp-viewer-snapshots-panel-listContent",menuItem:"msp-viewer-snapshots-panel-menuItem",name:"msp-viewer-snapshots-panel-name",optionsButton:"msp-viewer-snapshots-panel-optionsButton",panel:"msp-viewer-snapshots-panel-panel",row:"msp-viewer-snapshots-panel-row",rowActions:"msp-viewer-snapshots-panel-rowActions",slot:"msp-viewer-snapshots-panel-slot",textarea:"msp-viewer-snapshots-panel-textarea",thumb:"msp-viewer-snapshots-panel-thumb",trailing:"msp-viewer-snapshots-panel-trailing"};F("viewer/views/state/snapshots-panel.module.css",`@layer msp.components {
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
`);function pe(t){let{model:n}=t,o=M(!1),a=n.current.pipe(T()),i,c=e=>l=>re(l,i,e,r=>n.moveTo(e,r));return f("div",{class:d.panel,children:[f("div",{class:d.actions,children:[s(R,{size:"sm",variant:"ghost",icon:s(x,{name:"plus"}),onClick:()=>n.add(),children:s("span",{class:d.actionLabel,children:"Add"})}),s("span",{class:d.trailing,children:t.actions?.()}),s(R,{size:"sm",variant:"ghost",class:d.optionsButton,icon:s(x,{name:"settings"}),title:"Snapshot options",pressed:o.asReadonly,onClick:()=>o.set(!o.value)})]}),s(y,{when:o.asReadonly,reveal:!0,children:()=>f(j,{class:d.block,contentClass:d.blockContent,role:"region","aria-label":"Snapshot options",children:[s("p",{class:d.blockCaption,children:"What a new snapshot includes"}),s($,{form:n.saveOptions})]})}),s(j,{class:d.list,contentClass:d.listContent,role:"listbox","aria-label":"Snapshots",ref:e=>i=e,children:s(Z,{each:n.entries,fallback:()=>f("p",{class:d.empty,children:["No snapshots yet. ",s("strong",{children:"Add"})," saves the current view; saved ones play back in order."]}),children:(e,l)=>s(ge,{model:n,entry:e,index:l,onGrab:c(e.id),current:a.pipe(v(r=>r===e.id),T())})},e=>e.id)}),s(j,{class:d.inspector,contentClass:d.inspectorContent,role:"region","aria-label":"Snapshot",children:s(y,{when:n.entries.pipe(v(e=>e.find(l=>l.id===n.current.value)),T()),fallback:()=>s("p",{class:d.inspectorEmpty,children:"Apply a snapshot to edit its name, key and description."}),children:e=>s(ye,{model:n,entry:e})})})]})}function ge(t){let{model:n,entry:o}=t,a=M(!1),i,c=o.description?.split(`
`).map(e=>e.replace(/[#*`>-]/g,"").trim()).find(e=>e);return f("div",{class:d.item,"data-id":o.id,children:[f("div",{class:d.row,role:"option",tabIndex:0,"aria-selected":t.current,"aria-keyshortcuts":"Alt+ArrowUp Alt+ArrowDown",onClick:()=>n.apply(o.id),onKeyDown:e=>{if(e.key==="Enter"||e.key===" ")e.preventDefault(),n.apply(o.id);else if(e.altKey&&(e.key==="ArrowUp"||e.key==="ArrowDown")&&e.target===e.currentTarget){e.preventDefault();let l=e.currentTarget;n.move(o.id,e.key==="ArrowUp"?-1:1),queueMicrotask(()=>{l.isConnected&&document.activeElement!==l&&l.focus()})}},children:[f("span",{class:d.slot,children:[s("span",{class:d.index,children:t.index.pipe(v(e=>`${e+1}`))}),s("span",{class:d.grip,"aria-hidden":"true","data-tip":"Drag to reorder (Alt+Up or Down on the row)",onPointerDown:t.onGrab,onClick:e=>e.stopPropagation(),children:s(x,{name:"grip-vertical",size:14})})]}),o.image?s("span",{class:d.thumb,style:{background:o.image}}):null,s("span",{class:d.name,children:o.name}),o.key?f("span",{class:d.key,children:["#",o.key]}):null,s("span",{class:d.description,children:c??""}),f("span",{class:d.rowActions,children:[s("button",{type:"button",class:d.action,"data-tip":"Retake from the current view","aria-label":"Retake from the current view",onClick:e=>{e.stopPropagation(),n.replace(o.id)},children:s(x,{name:"camera",size:14})}),s("button",{type:"button",class:d.action,"aria-label":"More","aria-haspopup":"menu","aria-expanded":a,ref:e=>i=e,onClick:e=>{e.stopPropagation(),a.set(!a.value)},children:s(x,{name:"ellipsis",size:15})})]})]}),s(y,{when:a,children:()=>s(ee,{anchor:i,"aria-label":`${o.name}: actions`,onClose:e=>{a.set(!1),e&&i?.focus()},children:s(we,{icon:"trash-2",label:"Remove",danger:!0,run:()=>{a.set(!1),n.remove(o.id)}})})})]})}function we(t){return f("button",{type:"button",role:"menuitem",class:d.menuItem,"data-danger":t.danger?"":void 0,onClick:t.run,children:[s("span",{}),s("span",{children:t.label})]})}function ye(t){let{model:n,entry:o}=t,a=n.entryOptions(o.id);return f("div",{class:d.inspection,children:[f("header",{class:d.inspectorHeader,children:[s("span",{class:d.inspectorTitle,children:o.name}),s("span",{class:d.inspectorKind,children:o.timestamp??"snapshot"})]}),f("div",{class:d.fields,children:[f("label",{class:d.field,children:[s("span",{class:d.label,children:"Name"}),s(N,{size:"sm",value:o.name,onSubmit:i=>n.update(o.id,{name:i})})]}),f("label",{class:d.field,children:[s("span",{class:d.label,children:"Key"}),s(N,{size:"sm",value:o.key??"",placeholder:"Optional, for #links",onSubmit:i=>n.update(o.id,{key:i||void 0})})]}),f("label",{class:d.descriptionField,children:[s("span",{class:d.label,children:"Description"}),s("textarea",{class:d.textarea,rows:4,placeholder:"Markdown \xB7 [title](#key) links to a snapshot",value:o.description??"",onChange:i=>n.update(o.id,{description:i.currentTarget.value||void 0})})]})]}),a?s($,{form:a}):null]})}function le(t){let n=M(!1),o=M(!1),a=M(0),i=M(0),c=M(!1),e=null,l=()=>{},r=(m,k)=>{m.value!==k&&m.set(k)},u=m=>{if(l(),e=m,r(n,!!m),!m){r(o,!1),r(a,0),r(i,0);return}c.value&&(m.muted=!0);let k=()=>{r(c,m.muted),r(o,!m.paused&&!m.ended),r(a,m.currentTime||0),r(i,Number.isFinite(m.duration)?m.duration:0)},z=["play","pause","ended","timeupdate","durationchange","loadedmetadata","seeked","emptied","volumechange"];for(let P of z)m.addEventListener(P,k);l=()=>{for(let P of z)m.removeEventListener(P,k)},k()},g=t.audio.subscribe(u);return{present:n.asReadonly,playing:o.asReadonly,time:a.asReadonly,duration:i.asReadonly,muted:c.asReadonly,toggleMute(){let m=!c.value;c.set(m),e&&(e.muted=m)},toggle(){e&&(e.paused||e.ended?e.play().catch(()=>{}):e.pause())},stop:()=>t.stopAudio(),seek(m){!e||!(e.duration>0)||(e.currentTime=Math.max(0,Math.min(1,m))*e.duration)},close:()=>t.closeAudio(),dispose(){g.unsubscribe(),l()}}}function I(t){let n=Math.max(0,Math.floor(t));return`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`}var C={action:"msp-viewer-audio-bar-action",bar:"msp-viewer-audio-bar-bar",fill:"msp-viewer-audio-bar-fill",knob:"msp-viewer-audio-bar-knob",knobTrack:"msp-viewer-audio-bar-knobTrack",play:"msp-viewer-audio-bar-play",time:"msp-viewer-audio-bar-time",track:"msp-viewer-audio-bar-track"};F("viewer/views/state/audio-bar.module.css",`@layer msp.components {
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
`);function de(t){let{model:n}=t,o=E([n.time,n.duration]).pipe(v(([r,u])=>u>0?Math.min(1,r/u):0)),a,i=0,c=0,e=()=>{i&&cancelAnimationFrame(i),i=0,a&&n.seek((c-a.left)/(a.width||1))},l=()=>{e(),a=void 0};return L(()=>{i&&cancelAnimationFrame(i),i=0}),f("div",{class:C.bar,role:"group","aria-label":"Audio",children:[s("button",{type:"button",class:C.play,title:n.playing.pipe(v(r=>r?"Pause":"Play")),"aria-label":n.playing.pipe(v(r=>r?"Pause audio":"Play audio")),onClick:()=>n.toggle(),children:s(y,{when:n.playing,fallback:()=>s(x,{name:"play",size:13}),children:()=>s(x,{name:"pause",size:13})})}),s("span",{class:C.time,children:n.time.pipe(v(I))}),f("div",{class:C.track,role:"slider",tabIndex:0,"aria-label":"Position","aria-valuemin":"0","aria-valuemax":n.duration.pipe(v(r=>String(Math.round(r)))),"aria-valuenow":n.time.pipe(v(r=>String(Math.round(r)))),"aria-valuetext":E([n.time,n.duration]).pipe(v(([r,u])=>`${I(r)} of ${I(u)}`)),onPointerDown:r=>{if(r.button!==0)return;let u=r.currentTarget;a=u.getBoundingClientRect(),u.setPointerCapture(r.pointerId),c=r.clientX,e()},onPointerMove:r=>{a&&(c=r.clientX,i||(i=requestAnimationFrame(e)))},onPointerUp:r=>{c=r.clientX,l()},onPointerCancel:()=>{i&&cancelAnimationFrame(i),i=0,a=void 0},onKeyDown:r=>{let u=n.duration.value;if(!(u>0))return;let g=r.shiftKey?10:5;if(r.key==="ArrowRight")n.seek((n.time.value+g)/u);else if(r.key==="ArrowLeft")n.seek((n.time.value-g)/u);else if(r.key===" ")n.toggle();else return;r.preventDefault()},children:[s("span",{class:C.fill,style:{transform:o.pipe(v(r=>`scaleX(${r})`))}}),s("span",{class:C.knobTrack,style:{transform:o.pipe(v(r=>`translateX(${r*100}%)`))},children:s("span",{class:C.knob})})]}),s("span",{class:C.time,children:n.duration.pipe(v(r=>r>0?I(r):"\u2013:\u2013\u2013"))}),s("button",{type:"button",class:C.action,title:"Stop","aria-label":"Stop audio",onClick:()=>n.stop(),children:s(x,{name:"square",size:11})}),s("button",{type:"button",class:C.action,title:"Close","aria-label":"Close audio",onClick:()=>n.close(),children:s(x,{name:"x",size:13})})]})}function me(t,n){return{link(o){if(n.command(o))return a=>{t.snapshot?.link({href:o,event:a})}},image(o,a){let i=n.command(o);return i?xe(i)??document.createTextNode(a):n.resolve(o)}}}function xe(t){let n=t["color-swatch"];if(n)return ce({display:"inline-block",width:"0.75em",height:"0.75em",borderRadius:"25%",backgroundColor:n});let o=t["color-palette-name"],a=t["color-palette-colors"];if(!o&&!a)return;let i=a?Q(a):W[o.toLowerCase()]?.list;if(i?.length)return ce({display:"inline-block",minWidth:t["color-palette-width"]??"150px",height:t["color-palette-height"]??"0.5em",borderRadius:"2px",background:("color-palette-discrete"in t?_:J)(i)})}function ce(t){let n=document.createElement("span");return Object.assign(n.style,t),n}var ke=b.MappedStatic("animate",{animate:b.Group({durationInMs:b.Numeric(250,{min:100,max:5e3,step:50},{label:"Duration (ms)"}),easing:b.Select("linear",[["linear","Linear"],["ease-in-out","Ease in-out"],["ease-out","Ease out"]])},{isFlat:!0}),instant:b.Group({},{isFlat:!0})},{label:"Camera",options:[["animate","Animate"],["instant","Instant"]]}),Se={durationInMs:b.Numeric(1500,{min:100,max:15e3,step:100},{label:"Show for (ms)"}),data:b.Boolean(!0,{label:"Data"}),camera:b.Boolean(!0,{label:"Camera"}),cameraTransition:ke,canvas3d:b.Boolean(!0,{label:"Canvas settings"}),componentManager:b.Boolean(!0,{label:"Component options"}),structureSelection:b.Boolean(!1,{label:"Selection"}),animation:b.Boolean(!0,{label:"Animation"}),startAnimation:b.Boolean(!1,{label:"Start animation"}),behavior:b.Boolean(!1,{label:"Behaviors"}),interactivity:b.Boolean(!0,{label:"Interactivity"}),image:b.Boolean(!1,{label:"Thumbnail",description:"Save a small image with each snapshot."})},he={durationInMs:b.Numeric(1500,{min:100,max:15e3,step:100},{label:"Show for (ms)"})},ue=he.durationInMs.defaultValue,q=(t,n)=>t.name||`Snapshot ${n+1}`,Me=t=>new Date(t).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),Ce=(t,n)=>({id:t.id,name:q(t,n),...t.key?{key:t.key}:{},...t.description?{description:t.description}:{},timestamp:Me(t.timestamp),...t.image?{image:t.image}:{}}),Ae=(t,n)=>t.length===n.length&&t.every((o,a)=>{let i=n[a];return o.id===i.id&&o.name===i.name&&o.key===i.key&&o.description===i.description&&o.timestamp===i.timestamp&&o.image===i.image});function ve(t,n,o){let a=n.state,i=S(a,p=>p.entries.map(Ce),Ae),c=S(a,p=>p.current,Object.is),e=new Map,l=new Map,r=p=>a.value.entries.find(h=>h.id===p),u=new K(Se),g=p=>{e.delete(p);let h=l.get(p);h&&clearTimeout(h),l.delete(p)},m,k=!0,z=()=>{m||!k||!e.size||(m=a.subscribe(p=>{for(let[h,w]of[...e]){let A=p.entries.find(V=>V.id===h);A?l.has(h)||w.load({durationInMs:A.showFor??ue}):g(h)}e.size||P()}))},P=()=>{m?.unsubscribe(),m=void 0};return{entries:i,current:c,saveOptions:u,entryOptions(p){if(!r(p))return;let h=e.get(p);if(!h){for(let w of[...e.keys()])r(w)||g(w);h=new K(he,{durationInMs:r(p)?.showFor??ue},{onChange:w=>{let A=l.get(p);A&&clearTimeout(A),l.set(p,setTimeout(()=>{l.delete(p),t.snapshot?.update({entry:p,showFor:w.durationInMs})},150))}}),e.set(p,h),z()}return h},add:p=>{t.snapshot?.add({...p?{name:p}:{},options:{...u.values.value}})},apply:p=>{t.snapshot?.apply({entry:p})},update:(p,h)=>{r(p)&&t.snapshot?.update({entry:p,...h.name!==void 0?{name:h.name}:{},...h.description!==void 0?{description:h.description}:{},...h.key!==void 0?{key:h.key}:{}})},replace:p=>{t.snapshot?.replace({entry:p,options:{...u.values.value}})},move:(p,h)=>{let w=a.value.entries.findIndex(V=>V.id===p),A=w+h;w<0||A<0||A>=a.value.entries.length||t.snapshot?.move({entry:p,position:A+1})},moveTo:(p,h)=>{let w=a.value.entries.length;t.snapshot?.move({entry:p,position:Math.max(0,Math.min(w-1,h))+1})},remove:p=>{t.snapshot?.remove({entry:p})},clear:()=>{t.snapshot?.clear()},download(p){t.describe("session.save")&&t.run("session.save",{kind:p}).then(h=>{let w=h.ok?h.value:void 0;w&&o(w.blob,w.filename)})},open(p){p[0]&&t.session.open({file:p[0]})},setActive(p){k=p,p?z():P()},dispose(){k=!1,P();for(let p of l.values())clearTimeout(p);l.clear(),e.clear()}}}function H(t,n,o){let a=n.state,i=e=>e.entries.findIndex(l=>l.id===e.current),c=(e,l)=>e.length===l.length&&e.every((r,u)=>r===l[u]);return{count:S(a,e=>e.entries.length,Object.is),index:S(a,i,Object.is),title:S(a,e=>{let l=i(e);return l<0?void 0:q(e.entries[l],l)},Object.is),titles:S(a,e=>e.entries.map(q),c),description:S(a,e=>e.entries[i(e)]?.description,Object.is),plainText:S(a,e=>!!e.entries[i(e)]?.plainText,Object.is),...o?{markdown:o}:{},isPlaying:S(a,e=>e.playing,Object.is),previous:()=>{t.snapshot?.previous()},next:()=>{t.snapshot?.next()},goTo(e){let l=a.value.entries[e];l&&t.snapshot?.apply({entry:l.id})},togglePlay:()=>{a.value.playing?t.snapshot?.stop():t.snapshot?.play()},openLink(e){if(e.startsWith("#")){let l=a.value.entries.find(r=>r.key===e.slice(1));l&&t.snapshot?.apply({entry:l.id})}else/^https?:\/\//i.test(e)&&globalThis.open?.(e,"_blank","noopener,noreferrer")}}}function fe(t,n){let o=n.transitionState,a=!1,i,c=async()=>{if(!a){a=!0;try{for(;i!==void 0;){let e=i;i=void 0,await t.snapshot?.seek({time:e})}}finally{a=!1}}};return{duration:S(o,e=>e.duration,Object.is),step:S(o,e=>e.step,Object.is),time:S(o,e=>e.time,Object.is),isPlaying:S(o,e=>e.playing,Object.is),seek(e){i=e,c()},togglePlay:()=>{t.snapshot?.transition({play:!o.value.playing})}}}var O="snapshots.overlay.playback",D=t=>t.entries.length>=2||!!t.entries.find(n=>n.id===t.current)?.description?.trim(),G=t=>t.startsWith("load.")||t==="session.open"||t==="session.remote.open",X=t=>t.entries.map(n=>n.id).join(" ");function be(t,n){let o=new Map,a=!!t.running?.value.some(u=>G(u.operation)),i=a?"":X(n.state.value),c="",e=t.events.started.subscribe(u=>{G(u.operation)&&o.set(u.id,X(n.state.value))}),l=t.events.finished.subscribe(u=>{if(!G(u.operation))return;let g=o.get(u.id)??i;o.delete(u.id);let m=n.state.value,k=X(m);!u.result?.ok||k===g||k===c||!D(m)||(c=k,t.view.open({card:O}))}),r=n.state.value;return!a&&i&&D(r)&&(c=i,t.view.open({card:O})),()=>{e.unsubscribe(),l.unsubscribe()}}function ht(t){let n=t.api.snapshot;if(!n)return{};be(t.api,n);let o=le(n.markdown);return{tabs:[{id:"snapshots.tab.snapshots",title:"Snapshots",icon:"snapshots",order:1.5,render:B(()=>{let a=ve(t.api,n,ie),i=H(t.api,n);return Y(c=>a.setActive(c)),L(()=>a.dispose()),s(pe,{model:a,actions:()=>s(y,{when:i.count.pipe(v(c=>c>=2)),children:()=>s(R,{size:"sm",variant:"ghost",icon:s(y,{when:i.isPlaying,fallback:()=>s(x,{name:"play"}),children:()=>s(x,{name:"pause"})}),title:i.isPlaying.pipe(v(c=>c?"Stop the slideshow":"Play the snapshots")),onClick:()=>i.togglePlay()})})})})}],sections:[{id:"snapshots.section.playback",slot:"playback",title:"Snapshots",render:B(()=>{let a=H(t.api,n),i=fe(t.api,n),c=M(!1),e=i.duration.pipe(v(g=>g>0),T()),l=()=>f(U,{children:[s(y,{when:e,children:()=>s(R,{variant:"ghost",size:"sm",icon:s(x,{name:"film"}),title:c.asReadonly.pipe(v(g=>g?"Hide the snapshot's transition":"The snapshot's transition")),pressed:c.asReadonly,onClick:()=>c.set(!c.value)})}),s(y,{when:o.present,children:()=>s(oe,{muted:o.muted,onClick:()=>o.toggleMute()})})]}),r=E([o.present,a.count]).pipe(v(([g,m])=>g&&m<=1)),u=E([c.asReadonly,a.count]).pipe(v(([g,m])=>g||m<=1),T());return f(U,{children:[s(ne,{model:a,actions:l}),s(y,{when:r,children:()=>s(se,{muted:o.muted,onToggleMute:()=>o.toggleMute()})}),s(y,{when:u,children:()=>s(ae,{model:i})})]})})}],overlays:[{id:O,title:"Story",persistent:!0,fill:!0,render:B(()=>{let a=H(t.api,n,me(t.api,n.markdown));return f("div",{style:"display: flex; flex: 1 1 0; flex-direction: column; gap: var(--msp-space-2); min-height: 0",children:[s(y,{when:o.present,children:()=>s(de,{model:o})}),s(y,{when:a.count.pipe(v(i=>i>=1)),fallback:()=>s("p",{style:"margin: 0",children:"There are no snapshots: add some in the Snapshots tab."}),children:()=>s(te,{model:a,bare:!0})})]})})}],toolbar:[{id:"snapshots.toolbar.playback",icon:"book-open",title:"Story",group:"scene",overlay:O,visible:n.state.pipe(v(D),T())},{id:"snapshots.toolbar.audio",icon:"play",title:"Play audio",group:"view",place:"canvas",visible:o.present,face:o.playing.pipe(v(a=>a?{icon:"pause",title:"Pause audio"}:{icon:"play",title:"Play audio"})),run:()=>o.toggle(),menu:[{id:"stop",label:"Stop",icon:"square",run:()=>o.stop()},{id:"close",label:"Close the audio",icon:"x",run:()=>o.close()}]}]}}export{ht as snapshotsUI};
