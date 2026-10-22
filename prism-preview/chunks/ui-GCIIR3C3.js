import{a as le}from"./chunk-MTEDW5ZI.js";import{b as G,c as W,d as q}from"./chunk-2D324FKA.js";import{a as pe}from"./chunk-B4OPEUZD.js";import{$ as se,A as I,C as O,F as x,G as o,H as g,J as P,Y as F,Z as L,da as V,ea as $,f as J,h as Q,k as Y,ka as ne,l as Z,m as D,na as oe,o as y,oa as ae,p as ee,pa as ie,qa as re,u as te}from"./chunk-BGEN4R46.js";import"./chunk-KHBNYRDQ.js";import"./chunk-FAVIDOJH.js";import{f as h,i as M,j as _,w as S}from"./chunk-GF5XNTCX.js";import"./chunk-FY6Y25VJ.js";import{qb as b,ra as X}from"./chunk-IAG3P5FE.js";import"./chunk-DCANE7XH.js";var d={action:"msp-viewer-snapshots-panel-action",actionLabel:"msp-viewer-snapshots-panel-actionLabel",actions:"msp-viewer-snapshots-panel-actions",block:"msp-viewer-snapshots-panel-block",blockCaption:"msp-viewer-snapshots-panel-blockCaption",blockContent:"msp-viewer-snapshots-panel-blockContent",description:"msp-viewer-snapshots-panel-description",descriptionField:"msp-viewer-snapshots-panel-descriptionField",empty:"msp-viewer-snapshots-panel-empty",field:"msp-viewer-snapshots-panel-field",fields:"msp-viewer-snapshots-panel-fields",grip:"msp-viewer-snapshots-panel-grip",index:"msp-viewer-snapshots-panel-index",inspection:"msp-viewer-snapshots-panel-inspection",inspector:"msp-viewer-snapshots-panel-inspector",inspectorContent:"msp-viewer-snapshots-panel-inspectorContent",inspectorEmpty:"msp-viewer-snapshots-panel-inspectorEmpty",inspectorHeader:"msp-viewer-snapshots-panel-inspectorHeader",inspectorKind:"msp-viewer-snapshots-panel-inspectorKind",inspectorTitle:"msp-viewer-snapshots-panel-inspectorTitle",item:"msp-viewer-snapshots-panel-item",key:"msp-viewer-snapshots-panel-key",label:"msp-viewer-snapshots-panel-label",list:"msp-viewer-snapshots-panel-list",listContent:"msp-viewer-snapshots-panel-listContent",menuItem:"msp-viewer-snapshots-panel-menuItem",name:"msp-viewer-snapshots-panel-name",optionsButton:"msp-viewer-snapshots-panel-optionsButton",panel:"msp-viewer-snapshots-panel-panel",row:"msp-viewer-snapshots-panel-row",rowActions:"msp-viewer-snapshots-panel-rowActions",slot:"msp-viewer-snapshots-panel-slot",textarea:"msp-viewer-snapshots-panel-textarea",thumb:"msp-viewer-snapshots-panel-thumb",trailing:"msp-viewer-snapshots-panel-trailing"};O("viewer/views/state/snapshots-panel.module.css",`@layer msp.components {
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
`);function de(t){let{model:s}=t,n=M(!1),a=_(s.current),i,c=h(s.entries,r=>r.length>0),e=g("div",{class:d.panel,children:[g("div",{class:d.actions,children:[o(P,{size:"sm",variant:"ghost",icon:o(x,{name:"plus"}),onClick:()=>s.add(),children:o("span",{class:d.actionLabel,children:"Add"})}),o("span",{class:d.trailing,children:t.actions?.()}),o(P,{size:"sm",variant:"ghost",class:d.optionsButton,icon:o(x,{name:"settings"}),title:"Snapshot options",pressed:n.asReadonly,onClick:()=>n.set(!n.value)})]}),o(y,{when:n.asReadonly,reveal:!0,children:()=>g(L,{class:d.block,contentClass:d.blockContent,role:"region","aria-label":"Snapshot options",children:[o("p",{class:d.blockCaption,children:"What a new snapshot includes"}),o(V,{form:s.saveOptions})]})}),o(L,{class:d.list,contentClass:d.listContent,role:h(c,r=>r?"list":void 0),"aria-label":h(c,r=>r?"Snapshots":void 0),ref:r=>i=r,children:o(ee,{each:s.entries,fallback:()=>g("p",{class:d.empty,children:["No snapshots yet. ",o("strong",{children:"Add"})," saves the current view; saved ones play back in order."]}),children:(r,u)=>o(ye,{model:s,entry:r,index:u,current:a.key(r.id)})},r=>r.id)}),o(L,{class:d.inspector,contentClass:d.inspectorContent,role:"region","aria-label":"Snapshot",children:o(y,{when:h([s.entries,s.current],(r,u)=>r.find(p=>p.id===u)),fallback:()=>o("p",{class:d.inspectorEmpty,children:"Apply a snapshot to edit its name, key and description."}),children:r=>o(ke,{model:s,entry:r})})})]});return i&&le(i,`.${d.grip}`,(r,u)=>s.moveTo(r,u)),e}function ye(t){let{model:s,entry:n}=t,a=M(!1),i,c=n.description?.split(`
`).map(e=>e.replace(/[#*`>-]/g,"").trim()).find(e=>e);return g("div",{class:d.item,role:"listitem","data-id":n.id,"data-current":h(t.current,e=>e?"":void 0),children:[g("div",{class:d.row,role:"button",tabIndex:0,"aria-current":h(t.current,e=>e?"true":void 0),"aria-label":`Apply ${n.name}`,"aria-keyshortcuts":"Alt+ArrowUp Alt+ArrowDown",onClick:()=>s.apply(n.id),onKeyDown:e=>{if(e.key==="Enter"||e.key===" ")e.preventDefault(),s.apply(n.id);else if(e.altKey&&(e.key==="ArrowUp"||e.key==="ArrowDown")&&e.target===e.currentTarget){e.preventDefault();let r=e.currentTarget;s.move(n.id,e.key==="ArrowUp"?-1:1),queueMicrotask(()=>{r.isConnected&&document.activeElement!==r&&r.focus()})}},children:[g("span",{class:d.slot,children:[o("span",{class:d.index,children:h(t.index,e=>`${e+1}`)}),o("span",{class:d.grip,"aria-hidden":"true","data-tip":"Drag to reorder (Alt+Up or Down on the row)",onClick:e=>e.stopPropagation(),children:o(x,{name:"grip-vertical",size:14})})]}),n.image?o("span",{class:d.thumb,style:{background:n.image}}):null,o("span",{class:d.name,children:n.name}),n.key?g("span",{class:d.key,children:["#",n.key]}):null,o("span",{class:d.description,children:c??""})]}),g("span",{class:d.rowActions,children:[o("button",{type:"button",class:d.action,"data-tip":"Retake from the current view","aria-label":"Retake from the current view",onClick:e=>{e.stopPropagation(),s.replace(n.id)},children:o(x,{name:"camera",size:14})}),o("button",{type:"button",class:d.action,"aria-label":"More","aria-haspopup":"menu","aria-expanded":a,ref:e=>i=e,onClick:e=>{e.stopPropagation(),a.set(!a.value)},children:o(x,{name:"ellipsis",size:15})})]}),o(y,{when:a,children:()=>o(se,{anchor:i,"aria-label":`${n.name}: actions`,onClose:e=>{a.set(!1),e&&i?.focus()},children:o(xe,{icon:"trash-2",label:"Remove",danger:!0,run:()=>{a.set(!1),s.remove(n.id)}})})})]})}function xe(t){return g("button",{type:"button",role:"menuitem",class:d.menuItem,"data-danger":t.danger?"":void 0,onClick:t.run,children:[o("span",{}),o("span",{children:t.label})]})}function ke(t){let{model:s,entry:n}=t,a=s.entryOptions(n.id);return g("div",{class:d.inspection,children:[g("header",{class:d.inspectorHeader,children:[o("span",{class:d.inspectorTitle,children:n.name}),o("span",{class:d.inspectorKind,children:n.timestamp??"snapshot"})]}),g("div",{class:d.fields,children:[g("label",{class:d.field,children:[o("span",{class:d.label,children:"Name"}),o($,{size:"sm",value:n.name,onSubmit:i=>s.update(n.id,{name:i})})]}),g("label",{class:d.field,children:[o("span",{class:d.label,children:"Key"}),o($,{size:"sm",value:n.key??"",placeholder:"Optional, for #links",onSubmit:i=>s.update(n.id,{key:i||void 0})})]}),g("label",{class:d.descriptionField,children:[o("span",{class:d.label,children:"Description"}),o("textarea",{class:d.textarea,rows:4,placeholder:"Markdown \xB7 [title](#key) links to a snapshot",value:n.description??"",onChange:i=>s.update(n.id,{description:i.currentTarget.value||void 0})})]})]}),a?o(V,{form:a}):null]})}function me(t){let s=M(!1),n=M(!1),a=M(0),i=M(0),c=M(!1),e=null,r=()=>{},u=(m,k)=>{m.value!==k&&m.set(k)},p=m=>{if(r(),e=m,u(s,!!m),!m){u(n,!1),u(a,0),u(i,0);return}c.value&&(m.muted=!0);let k=()=>{u(c,m.muted),u(n,!m.paused&&!m.ended),u(a,m.currentTime||0),u(i,Number.isFinite(m.duration)?m.duration:0)},R=["play","pause","ended","timeupdate","durationchange","loadedmetadata","seeked","emptied","volumechange"];for(let T of R)m.addEventListener(T,k);r=()=>{for(let T of R)m.removeEventListener(T,k)},k()},f=t.audio.subscribe(p);return{present:s.asReadonly,playing:n.asReadonly,time:a.asReadonly,duration:i.asReadonly,muted:c.asReadonly,toggleMute(){let m=!c.value;c.set(m),e&&(e.muted=m)},toggle(){e&&(e.paused||e.ended?e.play().catch(()=>{}):e.pause())},stop:()=>t.stopAudio(),seek(m){!e||!(e.duration>0)||(e.currentTime=Math.max(0,Math.min(1,m))*e.duration)},close:()=>t.closeAudio(),dispose(){f.unsubscribe(),r()}}}function E(t){let s=Math.max(0,Math.floor(t));return`${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}`}var C={action:"msp-viewer-audio-bar-action",bar:"msp-viewer-audio-bar-bar",fill:"msp-viewer-audio-bar-fill",knob:"msp-viewer-audio-bar-knob",knobTrack:"msp-viewer-audio-bar-knobTrack",play:"msp-viewer-audio-bar-play",time:"msp-viewer-audio-bar-time",track:"msp-viewer-audio-bar-track"};O("viewer/views/state/audio-bar.module.css",`@layer msp.components {
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
`);function ce(t){let{model:s}=t,n=h([s.time,s.duration],(p,f)=>f>0?Math.min(1,p/f):0),a,i=0,c=()=>{a&&s.seek((i-a.left)/(a.width||1))},e=Z(0),r=0;Y(e,c);let u=g("div",{class:C.track,role:"slider",tabIndex:0,"aria-label":"Position","aria-valuemin":"0","aria-valuemax":h(s.duration,p=>String(Math.round(p))),"aria-valuenow":h(s.time,p=>String(Math.round(p))),"aria-valuetext":h([s.time,s.duration],(p,f)=>`${E(p)} of ${E(f)}`),onKeyDown:p=>{let f=s.duration.value;if(!(f>0))return;let m=p.shiftKey?10:5;if(p.key==="ArrowRight")s.seek((s.time.value+m)/f);else if(p.key==="ArrowLeft")s.seek((s.time.value-m)/f);else if(p.key===" ")s.toggle();else return;p.preventDefault()},children:[o("span",{class:C.fill,style:{transform:h(n,p=>`scaleX(${p})`)}}),o("span",{class:C.knobTrack,style:{transform:h(n,p=>`translateX(${p*100}%)`)},children:o("span",{class:C.knob})})]});return te(u,{start:p=>{if(p.button===0)return a=u.getBoundingClientRect(),i=p.clientX,c(),a},move:p=>{i=p.clientX,e.offer(++r)},end:(p,f,m)=>{f==="up"&&m&&(i=m.clientX,c()),a=void 0}}),g("div",{class:C.bar,role:"group","aria-label":"Audio",children:[o("button",{type:"button",class:C.play,title:h(s.playing,p=>p?"Pause":"Play"),"aria-label":h(s.playing,p=>p?"Pause audio":"Play audio"),onClick:()=>s.toggle(),children:o(y,{when:s.playing,fallback:()=>o(x,{name:"play",size:13}),children:()=>o(x,{name:"pause",size:13})})}),o("span",{class:C.time,children:h(s.time,E)}),u,o("span",{class:C.time,children:h(s.duration,p=>p>0?E(p):"\u2013:\u2013\u2013")}),o("button",{type:"button",class:C.action,title:"Stop","aria-label":"Stop audio",onClick:()=>s.stop(),children:o(x,{name:"square",size:11})}),o("button",{type:"button",class:C.action,title:"Close","aria-label":"Close audio",onClick:()=>s.close(),children:o(x,{name:"x",size:13})})]})}function he(t,s){return{link(n){if(s.command(n))return a=>{t.snapshot?.link({href:n,event:a})}},image(n,a){let i=s.command(n);return i?Se(i)??document.createTextNode(a):s.resolve(n)}}}function Se(t){let s=t["color-swatch"];if(s)return ue({display:"inline-block",width:"0.75em",height:"0.75em",borderRadius:"25%",backgroundColor:s});let n=t["color-palette-name"],a=t["color-palette-colors"];if(!n&&!a)return;let i=a?q(a):X[n.toLowerCase()]?.list;if(i?.length)return ue({display:"inline-block",minWidth:t["color-palette-width"]??"150px",height:t["color-palette-height"]??"0.5em",borderRadius:"2px",background:("color-palette-discrete"in t?G:W)(i)})}function ue(t){let s=document.createElement("span");return Object.assign(s.style,t),s}var Me=b.MappedStatic("animate",{animate:b.Group({durationInMs:b.Numeric(250,{min:100,max:5e3,step:50},{label:"Duration (ms)"}),easing:b.Select("linear",[["linear","Linear"],["ease-in-out","Ease in-out"],["ease-out","Ease out"]])},{isFlat:!0}),instant:b.Group({},{isFlat:!0})},{label:"Camera",options:[["animate","Animate"],["instant","Instant"]]}),Ce={durationInMs:b.Numeric(1500,{min:100,max:15e3,step:100},{label:"Show for (ms)"}),data:b.Boolean(!0,{label:"Data"}),camera:b.Boolean(!0,{label:"Camera"}),cameraTransition:Me,canvas3d:b.Boolean(!0,{label:"Canvas settings"}),componentManager:b.Boolean(!0,{label:"Component options"}),structureSelection:b.Boolean(!1,{label:"Selection"}),animation:b.Boolean(!0,{label:"Animation"}),startAnimation:b.Boolean(!1,{label:"Start animation"}),behavior:b.Boolean(!1,{label:"Behaviors"}),interactivity:b.Boolean(!0,{label:"Interactivity"}),image:b.Boolean(!1,{label:"Thumbnail",description:"Save a small image with each snapshot."})},fe={durationInMs:b.Numeric(1500,{min:100,max:15e3,step:100},{label:"Show for (ms)"})},ve=fe.durationInMs.defaultValue,N=(t,s)=>t.name||`Snapshot ${s+1}`,Ae=t=>new Date(t).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),Te=(t,s)=>({id:t.id,name:N(t,s),...t.key?{key:t.key}:{},...t.description?{description:t.description}:{},timestamp:Ae(t.timestamp),...t.image?{image:t.image}:{}}),Pe=(t,s)=>t.length===s.length&&t.every((n,a)=>{let i=s[a];return n.id===i.id&&n.name===i.name&&n.key===i.key&&n.description===i.description&&n.timestamp===i.timestamp&&n.image===i.image});function ge(t,s,n){let a=s.state,i=S(a,l=>l.entries.map(Te),Pe),c=S(a,l=>l.current,Object.is),e=new Map,r=new Map,u=l=>a.value.entries.find(v=>v.id===l),p=new F(Ce),f=l=>{e.delete(l);let v=r.get(l);v&&clearTimeout(v),r.delete(l)},m,k=!0,R=()=>{m||!k||!e.size||(m=a.subscribe(l=>{for(let[v,w]of[...e]){let A=l.entries.find(H=>H.id===v);A?r.has(v)||w.load({durationInMs:A.showFor??ve}):f(v)}e.size||T()}))},T=()=>{m?.unsubscribe(),m=void 0};return{entries:i,current:c,saveOptions:p,entryOptions(l){if(!u(l))return;let v=e.get(l);if(!v){for(let w of[...e.keys()])u(w)||f(w);v=new F(fe,{durationInMs:u(l)?.showFor??ve},{onChange:w=>{let A=r.get(l);A&&clearTimeout(A),r.set(l,setTimeout(()=>{r.delete(l),t.snapshot?.update({entry:l,showFor:w.durationInMs})},150))}}),e.set(l,v),R()}return v},add:l=>{t.snapshot?.add({...l?{name:l}:{},options:{...p.values.value}})},apply:l=>{t.snapshot?.apply({entry:l})},update:(l,v)=>{u(l)&&t.snapshot?.update({entry:l,...v.name!==void 0?{name:v.name}:{},...v.description!==void 0?{description:v.description}:{},...v.key!==void 0?{key:v.key}:{}})},replace:l=>{t.snapshot?.replace({entry:l,options:{...p.values.value}})},move:(l,v)=>{let w=a.value.entries.findIndex(H=>H.id===l),A=w+v;w<0||A<0||A>=a.value.entries.length||t.snapshot?.move({entry:l,position:A+1})},moveTo:(l,v)=>{let w=a.value.entries.length;t.snapshot?.move({entry:l,position:Math.max(0,Math.min(w-1,v))+1})},remove:l=>{t.snapshot?.remove({entry:l})},clear:()=>{t.snapshot?.clear()},download(l){t.describe("session.save")&&t.run("session.save",{kind:l}).then(v=>{let w=v.ok?v.value:void 0;w&&n(w.blob,w.filename)})},open(l){l[0]&&t.session.open({file:l[0]})},setActive(l){k=l,l?R():T()},dispose(){k=!1,T();for(let l of r.values())clearTimeout(l);r.clear(),e.clear()}}}function j(t,s,n){let a=s.state,i=e=>e.entries.findIndex(r=>r.id===e.current),c=(e,r)=>e.length===r.length&&e.every((u,p)=>u===r[p]);return{count:S(a,e=>e.entries.length,Object.is),index:S(a,i,Object.is),title:S(a,e=>{let r=i(e);return r<0?void 0:N(e.entries[r],r)},Object.is),titles:S(a,e=>e.entries.map(N),c),description:S(a,e=>e.entries[i(e)]?.description,Object.is),plainText:S(a,e=>!!e.entries[i(e)]?.plainText,Object.is),...n?{markdown:n}:{},isPlaying:S(a,e=>e.playing,Object.is),previous:()=>{t.snapshot?.previous()},next:()=>{t.snapshot?.next()},goTo(e){let r=a.value.entries[e];r&&t.snapshot?.apply({entry:r.id})},togglePlay:()=>{a.value.playing?t.snapshot?.stop():t.snapshot?.play()},openLink(e){if(e.startsWith("#")){let r=a.value.entries.find(u=>u.key===e.slice(1));r&&t.snapshot?.apply({entry:r.id})}else/^https?:\/\//i.test(e)&&globalThis.open?.(e,"_blank","noopener,noreferrer")}}}function be(t,s){let n=s.transitionState,a=!1,i,c=async()=>{if(!a){a=!0;try{for(;i!==void 0;){let e=i;i=void 0,await t.snapshot?.seek({time:e})}}finally{a=!1}}};return{duration:S(n,e=>e.duration,Object.is),step:S(n,e=>e.step,Object.is),time:S(n,e=>e.time,Object.is),isPlaying:S(n,e=>e.playing,Object.is),seek(e){i=e,c()},togglePlay:()=>{t.snapshot?.transition({play:!n.value.playing})}}}var z="snapshots.overlay.playback",B=t=>t.entries.length>=2||!!t.entries.find(s=>s.id===t.current)?.description?.trim(),K=t=>t.startsWith("load.")||t==="session.open"||t==="session.remote.open",U=t=>t.entries.map(s=>s.id).join(" ");function we(t,s){let n=new Map,a=!!t.running?.value.some(p=>K(p.operation)),i=a?"":U(s.state.value),c="",e=t.events.started.subscribe(p=>{K(p.operation)&&n.set(p.id,U(s.state.value))}),r=t.events.finished.subscribe(p=>{if(!K(p.operation))return;let f=n.get(p.id)??i;n.delete(p.id);let m=s.state.value,k=U(m);!p.result?.ok||k===f||k===c||!B(m)||(c=k,t.view.open({card:z}))}),u=s.state.value;return!a&&i&&B(u)&&(c=i,t.view.open({card:z})),()=>{e.unsubscribe(),r.unsubscribe()}}function bt(t){let s=t.api.snapshot;if(!s)return{};we(t.api,s);let n=me(s.markdown);return{tabs:[{id:"snapshots.tab.snapshots",title:"Snapshots",icon:"snapshots",order:1.5,render:I(()=>{let a=ge(t.api,s,pe),i=j(t.api,s);return Q(c=>a.setActive(c)),J(()=>a.dispose()),o(de,{model:a,actions:()=>o(y,{when:h(i.count,c=>c>=2),children:()=>o(P,{size:"sm",variant:"ghost",icon:o(y,{when:i.isPlaying,fallback:()=>o(x,{name:"play"}),children:()=>o(x,{name:"pause"})}),title:h(i.isPlaying,c=>c?"Stop the slideshow":"Play the snapshots"),onClick:()=>i.togglePlay()})})})})}],sections:[{id:"snapshots.section.playback",slot:"playback",title:"Snapshots",render:I(()=>{let a=j(t.api,s),i=be(t.api,s),c=M(!1),e=h(i.duration,f=>f>0),r=()=>g(D,{children:[o(y,{when:e,children:()=>o(P,{variant:"ghost",size:"sm",icon:o(x,{name:"film"}),title:h(c.asReadonly,f=>f?"Hide the snapshot's transition":"The snapshot's transition"),pressed:c.asReadonly,onClick:()=>c.set(!c.value)})}),o(y,{when:n.present,children:()=>o(ae,{muted:n.muted,onClick:()=>n.toggleMute()})})]}),u=h([n.present,a.count],(f,m)=>f&&m<=1),p=h([c.asReadonly,a.count],(f,m)=>f||m<=1);return g(D,{children:[o(oe,{model:a,actions:r}),o(y,{when:u,children:()=>o(ie,{muted:n.muted,onToggleMute:()=>n.toggleMute()})}),o(y,{when:p,children:()=>o(re,{model:i})})]})})}],overlays:[{id:z,title:"Story",persistent:!0,fill:!0,render:I(()=>{let a=j(t.api,s,he(t.api,s.markdown));return g("div",{style:"display: flex; flex: 1 1 0; flex-direction: column; gap: var(--msp-space-2); min-height: 0",children:[o(y,{when:n.present,children:()=>o(ce,{model:n})}),o(y,{when:h(a.count,i=>i>=1),fallback:()=>o("p",{style:"margin: 0",children:"There are no snapshots: add some in the Snapshots tab."}),children:()=>o(ne,{model:a,bare:!0})})]})})}],toolbar:[{id:"snapshots.toolbar.playback",icon:"book-open",title:"Story",group:"scene",overlay:z,visible:h(s.state,B)},{id:"snapshots.toolbar.audio",icon:"play",title:"Play audio",group:"view",place:"canvas",visible:n.present,face:h(n.playing,a=>a?{icon:"pause",title:"Pause audio"}:{icon:"play",title:"Play audio"}),run:()=>n.toggle(),menu:[{id:"stop",label:"Stop",icon:"square",run:()=>n.stop()},{id:"close",label:"Close the audio",icon:"x",run:()=>n.close()}]}]}}export{bt as snapshotsUI};
