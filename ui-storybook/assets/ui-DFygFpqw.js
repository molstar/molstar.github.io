import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,m as n,n as r,r as i,t as a}from"./jsx-runtime-Dut-27nP.js";import{n as o,r as s}from"./registry-D35yV2Tb.js";import{i as c,n as l,t as u}from"./control-flow-BLsZc6z1.js";import{b as d,x as f}from"./work-queue-DoxU-HjK.js";import{w as p}from"./shell-view-BEqtIwth.js";import{n as m,t as h}from"./observable-state-C67cgDrf.js";import{n as g,t as _}from"./icon-Fyk1xIJy.js";import{t as v}from"./params-form-DodHex4Z.js";import{t as y}from"./src-DNTTijDB.js";import{n as b,r as x}from"./drag-to-reorder-11M_XZD8.js";var S;function C(){return(C=e((()=>{s(),S={action:`msp-viewer-measurements-add-action`,add:`msp-viewer-measurements-add-add`,added:`msp-viewer-measurements-add-added`,addedAction:`msp-viewer-measurements-add-addedAction`,addedIcon:`msp-viewer-measurements-add-addedIcon`,addedItem:`msp-viewer-measurements-add-addedItem`,addedRow:`msp-viewer-measurements-add-addedRow`,addedValue:`msp-viewer-measurements-add-addedValue`,caption:`msp-viewer-measurements-add-caption`,chevron:`msp-viewer-measurements-add-chevron`,grip:`msp-viewer-measurements-add-grip`,hint:`msp-viewer-measurements-add-hint`,index:`msp-viewer-measurements-add-index`,kind:`msp-viewer-measurements-add-kind`,kindHint:`msp-viewer-measurements-add-kindHint`,kindTitle:`msp-viewer-measurements-add-kindTitle`,kinds:`msp-viewer-measurements-add-kinds`,more:`msp-viewer-measurements-add-more`,optionsToggle:`msp-viewer-measurements-add-optionsToggle`,point:`msp-viewer-measurements-add-point`,pointActions:`msp-viewer-measurements-add-pointActions`,pointLabel:`msp-viewer-measurements-add-pointLabel`,points:`msp-viewer-measurements-add-points`,slot:`msp-viewer-measurements-add-slot`,style:`msp-viewer-measurements-add-style`},o(`viewer/views/structure/measurements-add.module.css`,`@layer msp.components {
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
`)})))()}function w(e){let{model:a}=e,o=d(a.points,e=>e.slice(0,O)),s=d(a.points,e=>Math.max(0,e.length-O)),c=m(!1),f,p=i(`div`,{class:S.add,children:[r(`p`,{class:S.caption,children:`Points · the latest selections`}),i(`div`,{class:S.points,ref:e=>f=e,children:[r(u,{each:o,fallback:()=>r(`p`,{class:S.hint,children:`Select atoms or residues (Select mode, Shift adds): the latest ones become the points to measure.`}),children:(e,t)=>r(T,{model:a,point:e,index:t})},e=>e.id),r(l,{when:d(s,e=>e>0),children:()=>r(`p`,{class:S.more,children:d(s,e=>`+${e} older, not used`)})})]}),r(`p`,{class:S.caption,children:`Measure`}),r(`div`,{class:S.kinds,children:a.kinds.map(e=>r(E,{model:a,kind:e}))}),r(l,{when:d(a.added,e=>e.length>0),children:()=>i(t,{children:[r(`p`,{class:S.caption,children:`Added`}),r(`div`,{class:S.added,children:r(u,{each:a.added,children:e=>r(D,{model:a,node:e})},e=>e.id)})]})}),i(`button`,{type:`button`,class:S.optionsToggle,"aria-expanded":c,onClick:()=>c.set(!c.value),children:[r(_,{name:`chevron-right`,size:14,class:S.chevron}),`Options`]}),r(l,{when:c,children:()=>(a.optionValues&&n(a.optionValues,e=>a.loadOptions?.(e)),r(v,{form:a.options}))})]});return f&&x(f,`.${S.grip}`,(e,t)=>a.movePointTo(e,t)),p}function T(e){let{model:t,point:n}=e;return i(`div`,{class:S.point,"data-id":n.id,onPointerEnter:()=>t.highlightPoint?.(n.id),onPointerLeave:()=>t.highlightPoint?.(void 0),children:[i(`span`,{class:S.slot,children:[r(`span`,{class:S.index,children:d(e.index,e=>`${e+1}`)}),r(`span`,{class:S.grip,"aria-hidden":`true`,"data-tip":`Drag to reorder`,children:r(_,{name:`grip-vertical`,size:13})})]}),r(`button`,{type:`button`,class:S.pointLabel,title:n.label,"aria-label":`Focus ${n.label}`,onClick:()=>t.focusPoint(n.id),children:n.short??n.label}),i(`span`,{class:S.pointActions,children:[r(`button`,{type:`button`,class:S.action,"aria-label":`Move up`,title:`Move up`,onClick:()=>t.movePoint(n.id,-1),children:r(_,{name:`arrow-up`,size:13})}),r(`button`,{type:`button`,class:S.action,"aria-label":`Move down`,title:`Move down`,onClick:()=>t.movePoint(n.id,1),children:r(_,{name:`arrow-down`,size:13})}),r(`button`,{type:`button`,class:S.action,"aria-label":`Remove`,title:`Remove`,onClick:()=>t.removePoint(n.id),children:r(_,{name:`x`,size:13})})]})]})}function E(e){let{model:t,kind:n}=e,a=d(t.points,e=>n.points===0?e.length>0:e.length>=n.points),o=n.points===0?d(a,e=>e?`of the selection`:`needs a selection`):d(a,e=>e?n.points===1?`point 1`:`points 1–${n.points}`:`needs ${n.points} points`);return i(`button`,{type:`button`,class:S.kind,disabled:d(a,e=>!e),onClick:()=>t.add(n.id),children:[r(`span`,{class:S.kindTitle,children:n.title}),r(`span`,{class:S.kindHint,children:o})]})}function D(e){let{model:t,node:n}=e,a=m(!1),o=t.styleOf(n);return i(`div`,{class:S.addedItem,children:[i(`div`,{class:S.addedRow,"data-hidden":d(n.isHidden,e=>e?``:void 0),children:[r(`span`,{class:S.pointLabel,children:n.label}),r(`span`,{class:S.addedValue,children:n.description}),i(`span`,{class:S.pointActions,children:[r(`button`,{type:`button`,class:S.addedAction,title:d(n.isHidden,e=>e?`Show`:`Hide`),onClick:()=>n.toggleVisibility(),children:r(l,{when:n.isHidden,fallback:()=>r(_,{name:`eye`,size:14}),children:()=>r(_,{name:`eye-off`,size:14})})}),o?r(`button`,{type:`button`,class:S.addedAction,title:`Style`,"aria-label":`Style`,"aria-expanded":a,onClick:()=>a.set(!a.value),children:r(_,{name:`sliders-horizontal`,size:14})}):null,r(`button`,{type:`button`,class:S.addedAction,title:`Remove`,"aria-label":`Remove`,onClick:()=>n.remove(),children:r(_,{name:`x`,size:13})})]})]}),o?r(l,{when:a,reveal:!0,children:()=>r(`div`,{class:S.style,children:r(v,{form:o})})}):null]})}var O;function k(){return(k=e((()=>{g(),y(),c(),h(),f(),C(),b(),a(),O=4})))()}function A(e){return{sections:[{id:`measurements.section.measure`,slot:`selection`,title:`Measure`,icon:`ruler`,keywords:[`distance`,`angle`,`dihedral`,`label`,`orientation`,`plane`],order:2,render:p(()=>{let n=e.api.measure;return n?r(w,{model:n.model(e.api)}):r(t,{})})}]}}function j(){return(j=e((()=>{y(),k(),a()})))()}j();export{A as measurementsUI};