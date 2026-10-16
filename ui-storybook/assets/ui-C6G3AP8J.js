import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t,i as n,n as r,r as i,t as a}from"./jsx-runtime-DzTO5r4L.js";import{n as o,r as s}from"./registry-D35yV2Tb.js";import{t as c}from"./params-form-BiSG3JZ9.js";import{i as l,n as u,t as d}from"./control-flow-2XcFB3wB.js";import{n as f,t as p}from"./map-COHPbqb4.js";import{w as m}from"./shell-view--7tL82cI.js";import{n as h,t as g}from"./distinctUntilChanged-Bi0nDGSG.js";import{n as _,r as v}from"./observable-state-8hMFvtS9.js";import{n as y,t as b}from"./icon-Fyk1xIJy.js";import{t as x}from"./src-CNHrM0KV.js";import{t as S}from"./drag-to-reorder-BIcwE7OS.js";var C;function w(){return(w=e((()=>{s(),C={action:`msp-viewer-measurements-add-action`,add:`msp-viewer-measurements-add-add`,added:`msp-viewer-measurements-add-added`,addedAction:`msp-viewer-measurements-add-addedAction`,addedIcon:`msp-viewer-measurements-add-addedIcon`,addedItem:`msp-viewer-measurements-add-addedItem`,addedRow:`msp-viewer-measurements-add-addedRow`,addedValue:`msp-viewer-measurements-add-addedValue`,caption:`msp-viewer-measurements-add-caption`,chevron:`msp-viewer-measurements-add-chevron`,grip:`msp-viewer-measurements-add-grip`,hint:`msp-viewer-measurements-add-hint`,index:`msp-viewer-measurements-add-index`,kind:`msp-viewer-measurements-add-kind`,kindHint:`msp-viewer-measurements-add-kindHint`,kindTitle:`msp-viewer-measurements-add-kindTitle`,kinds:`msp-viewer-measurements-add-kinds`,more:`msp-viewer-measurements-add-more`,optionsToggle:`msp-viewer-measurements-add-optionsToggle`,point:`msp-viewer-measurements-add-point`,pointActions:`msp-viewer-measurements-add-pointActions`,pointLabel:`msp-viewer-measurements-add-pointLabel`,points:`msp-viewer-measurements-add-points`,slot:`msp-viewer-measurements-add-slot`,style:`msp-viewer-measurements-add-style`},o(`viewer/views/structure/measurements-add.module.css`,`@layer msp.components {
.msp-viewer-measurements-add-add {
  font-size: var(--msp-font-size-sm);
  gap: var(--msp-space-2);
  grid-template-columns: minmax(0, 1fr);
  display: grid;
}

.msp-viewer-measurements-add-caption {
  margin: var(--msp-space-1) 0 0;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-weight: 500;
}

.msp-viewer-measurements-add-points {
  padding: var(--msp-space-1);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-panel);
  grid-template-columns: minmax(0, 1fr);
  display: grid;
}

.msp-viewer-measurements-add-hint, .msp-viewer-measurements-add-more {
  padding: var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
  line-height: 1.45;
}

.msp-viewer-measurements-add-more {
  padding: var(--msp-space-1) var(--msp-space-2);
}

.msp-viewer-measurements-add-point {
  align-items: center;
  gap: var(--msp-space-2);
  height: 26px;
  padding: 0 var(--msp-space-1) 0 var(--msp-space-2);
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }
}

.msp-viewer-measurements-add-slot {
  flex: none;
  place-items: center start;
  min-width: 1.5ch;
  display: grid;

  & > * {
    grid-area: 1 / 1;
  }
}

.msp-viewer-measurements-add-grip {
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

  .msp-viewer-measurements-add-point:hover &, [data-dragging] & {
    opacity: 1;
  }
}

.msp-viewer-measurements-add-point:hover .msp-viewer-measurements-add-index, .msp-viewer-measurements-add-point[data-dragging] .msp-viewer-measurements-add-index {
  visibility: hidden;
}

.msp-viewer-measurements-add-point[data-dragging] {
  opacity: .5;
}

.msp-viewer-measurements-add-point[data-drop="before"] {
  box-shadow: 0 -2px 0 var(--msp-color-text-muted);
}

.msp-viewer-measurements-add-point[data-drop="after"] {
  box-shadow: 0 2px 0 var(--msp-color-text-muted);
}

.msp-viewer-measurements-add-index {
  min-width: 1.5ch;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  flex: none;
}

.msp-viewer-measurements-add-pointLabel {
  min-width: 0;
  color: var(--msp-color-text);
  text-align: left;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  font-weight: 500;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-measurements-add-pointActions {
  flex: none;
  gap: 1px;
  display: flex;
}

.msp-viewer-measurements-add-action {
  border-radius: var(--msp-radius-sm);
  width: 20px;
  height: 20px;
  color: var(--msp-color-text-muted);
  opacity: 0;
  place-items: center;
  display: grid;

  @media (hover: none) {
    opacity: 1;
  }

  .msp-viewer-measurements-add-point:hover &, &:focus-visible {
    opacity: 1;
  }

  &:hover {
    background: var(--msp-color-pressed);
    color: var(--msp-color-text);
  }
}

.msp-viewer-measurements-add-kinds {
  grid-template-columns: minmax(0, 1fr);
  display: grid;
}

.msp-viewer-measurements-add-kind {
  align-items: center;
  gap: var(--msp-space-3);
  height: 28px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  text-align: left;
  display: flex;

  &:hover:not(:disabled) {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &:disabled {
    color: var(--msp-color-text-subtle);
    cursor: default;

    & .msp-viewer-measurements-add-kindTitle {
      color: var(--msp-color-text-subtle);
    }
  }
}

.msp-viewer-measurements-add-kindTitle {
  color: var(--msp-color-text);
  flex: none;
  font-weight: 500;
}

.msp-viewer-measurements-add-kindHint {
  min-width: 0;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  text-align: right;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-measurements-add-optionsToggle {
  align-items: center;
  gap: var(--msp-space-1);
  height: 28px;
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  font-weight: 600;
  display: flex;
}

.msp-viewer-measurements-add-chevron {
  transition: transform var(--msp-motion-fast) var(--msp-ease);

  [aria-expanded="true"] > & {
    transform: rotate(90deg);
  }
}

.msp-viewer-measurements-add-added {
  padding: var(--msp-space-1);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-panel);
  grid-template-columns: minmax(0, 1fr);
  display: grid;
}

.msp-viewer-measurements-add-addedItem {
  grid-template-columns: minmax(0, 1fr);
  display: grid;
}

.msp-viewer-measurements-add-addedRow {
  align-items: center;
  gap: var(--msp-space-2);
  height: 26px;
  padding: 0 var(--msp-space-1) 0 var(--msp-space-2);
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  &[data-hidden] .msp-viewer-measurements-add-pointLabel, &[data-hidden] .msp-viewer-measurements-add-addedIcon {
    color: var(--msp-color-text-subtle);
  }
}

.msp-viewer-measurements-add-addedIcon {
  color: var(--msp-color-text-muted);
  flex: none;
}

.msp-viewer-measurements-add-addedValue {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  flex: none;
}

.msp-viewer-measurements-add-addedAction {
  border-radius: var(--msp-radius-sm);
  width: 20px;
  height: 20px;
  color: var(--msp-color-text-muted);
  opacity: 0;
  place-items: center;
  display: grid;

  @media (hover: none) {
    opacity: 1;
  }

  .msp-viewer-measurements-add-addedRow:hover &, [data-hidden] > .msp-viewer-measurements-add-pointActions > &:first-child, &[aria-expanded="true"], &:focus-visible {
    opacity: 1;
  }

  &:hover {
    background: var(--msp-color-pressed);
    color: var(--msp-color-text);
  }
}

.msp-viewer-measurements-add-style {
  margin: var(--msp-space-1) 0 var(--msp-space-1) calc(var(--msp-space-2) + var(--msp-icon-md) + var(--msp-space-2));
  padding: var(--msp-space-1) var(--msp-space-2) var(--msp-space-1) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-well);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
}
}
`)})))()}function T(e){let{model:a}=e,o=a.points.pipe(f(e=>e.slice(0,k))),s=a.points.pipe(f(e=>Math.max(0,e.length-k)),g()),l=v(!1),p;return i(`div`,{class:C.add,children:[r(`p`,{class:C.caption,children:`Points · the latest selections`}),i(`div`,{class:C.points,ref:e=>p=e,children:[r(d,{each:o,fallback:()=>r(`p`,{class:C.hint,children:`Select atoms or residues (Select mode, Shift adds): the latest ones become the points to measure.`}),children:(e,t)=>r(E,{model:a,point:e,index:t,onGrab:t=>S(t,p,e.id,t=>a.movePointTo(e.id,t))})},e=>e.id),r(u,{when:s.pipe(f(e=>e>0)),children:()=>r(`p`,{class:C.more,children:s.pipe(f(e=>`+${e} older, not used`))})})]}),r(`p`,{class:C.caption,children:`Measure`}),r(`div`,{class:C.kinds,children:a.kinds.map(e=>r(D,{model:a,kind:e}))}),r(u,{when:a.added.pipe(f(e=>e.length>0)),children:()=>i(n,{children:[r(`p`,{class:C.caption,children:`Added`}),r(`div`,{class:C.added,children:r(d,{each:a.added,children:e=>r(O,{model:a,node:e})},e=>e.id)})]})}),i(`button`,{type:`button`,class:C.optionsToggle,"aria-expanded":l,onClick:()=>l.set(!l.value),children:[r(b,{name:`chevron-right`,size:14,class:C.chevron}),`Options`]}),r(u,{when:l,children:()=>(a.optionValues&&t(a.optionValues,e=>a.loadOptions?.(e)),r(c,{form:a.options}))})]})}function E(e){let{model:t,point:n}=e;return i(`div`,{class:C.point,"data-id":n.id,onPointerEnter:()=>t.highlightPoint?.(n.id),onPointerLeave:()=>t.highlightPoint?.(void 0),children:[i(`span`,{class:C.slot,children:[r(`span`,{class:C.index,children:e.index.pipe(f(e=>`${e+1}`))}),r(`span`,{class:C.grip,"aria-hidden":`true`,"data-tip":`Drag to reorder`,onPointerDown:e.onGrab,children:r(b,{name:`grip-vertical`,size:13})})]}),r(`button`,{type:`button`,class:C.pointLabel,title:n.label,"aria-label":`Focus ${n.label}`,onClick:()=>t.focusPoint(n.id),children:n.short??n.label}),i(`span`,{class:C.pointActions,children:[r(`button`,{type:`button`,class:C.action,"aria-label":`Move up`,title:`Move up`,onClick:()=>t.movePoint(n.id,-1),children:r(b,{name:`arrow-up`,size:13})}),r(`button`,{type:`button`,class:C.action,"aria-label":`Move down`,title:`Move down`,onClick:()=>t.movePoint(n.id,1),children:r(b,{name:`arrow-down`,size:13})}),r(`button`,{type:`button`,class:C.action,"aria-label":`Remove`,title:`Remove`,onClick:()=>t.removePoint(n.id),children:r(b,{name:`x`,size:13})})]})]})}function D(e){let{model:t,kind:n}=e,a=t.points.pipe(f(e=>n.points===0?e.length>0:e.length>=n.points),g()),o=n.points===0?a.pipe(f(e=>e?`of the selection`:`needs a selection`)):a.pipe(f(e=>e?n.points===1?`point 1`:`points 1–${n.points}`:`needs ${n.points} points`));return i(`button`,{type:`button`,class:C.kind,disabled:a.pipe(f(e=>!e)),onClick:()=>t.add(n.id),children:[r(`span`,{class:C.kindTitle,children:n.title}),r(`span`,{class:C.kindHint,children:o})]})}function O(e){let{model:t,node:n}=e,a=v(!1),o=t.styleOf(n);return i(`div`,{class:C.addedItem,children:[i(`div`,{class:C.addedRow,"data-hidden":n.isHidden.pipe(f(e=>e?``:void 0)),children:[r(`span`,{class:C.pointLabel,children:n.label}),r(`span`,{class:C.addedValue,children:n.description}),i(`span`,{class:C.pointActions,children:[r(`button`,{type:`button`,class:C.addedAction,title:n.isHidden.pipe(f(e=>e?`Show`:`Hide`)),onClick:()=>n.toggleVisibility(),children:r(u,{when:n.isHidden,fallback:()=>r(b,{name:`eye`,size:14}),children:()=>r(b,{name:`eye-off`,size:14})})}),o?r(`button`,{type:`button`,class:C.addedAction,title:`Style`,"aria-label":`Style`,"aria-expanded":a,onClick:()=>a.set(!a.value),children:r(b,{name:`sliders-horizontal`,size:14})}):null,r(`button`,{type:`button`,class:C.addedAction,title:`Remove`,"aria-label":`Remove`,onClick:()=>n.remove(),children:r(b,{name:`x`,size:13})})]})]}),o?r(u,{when:a,reveal:!0,children:()=>r(`div`,{class:C.style,children:r(c,{form:o})})}):null]})}var k;function A(){return(A=e((()=>{h(),p(),y(),x(),l(),_(),w(),a(),k=4})))()}function j(e){return{sections:[{id:`measurements.section.measure`,slot:`selection`,title:`Measure`,icon:`ruler`,keywords:[`distance`,`angle`,`dihedral`,`label`,`orientation`,`plane`],order:2,render:m(()=>{let t=e.api.measure;return t?r(T,{model:t.model(e.api)}):r(n,{})})}]}}function M(){return(M=e((()=>{x(),A(),a()})))()}M();export{j as measurementsUI};