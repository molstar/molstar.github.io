import{a as y}from"./chunk-5STYHZIV.js";import{L as g,d as f,e as v,g as c,h,m as b,o as x,r as l,s as e,t as m}from"./chunk-ITOM7TT7.js";import"./chunk-KHBNYRDQ.js";import{b as w}from"./chunk-4XDSNK62.js";import{i as r,s as u}from"./chunk-QZGD7T6O.js";import"./chunk-CZB3H7J7.js";import"./chunk-DCANE7XH.js";var s={action:"msp-viewer-measurements-add-action",add:"msp-viewer-measurements-add-add",added:"msp-viewer-measurements-add-added",addedAction:"msp-viewer-measurements-add-addedAction",addedIcon:"msp-viewer-measurements-add-addedIcon",addedItem:"msp-viewer-measurements-add-addedItem",addedRow:"msp-viewer-measurements-add-addedRow",addedValue:"msp-viewer-measurements-add-addedValue",caption:"msp-viewer-measurements-add-caption",chevron:"msp-viewer-measurements-add-chevron",grip:"msp-viewer-measurements-add-grip",hint:"msp-viewer-measurements-add-hint",index:"msp-viewer-measurements-add-index",kind:"msp-viewer-measurements-add-kind",kindHint:"msp-viewer-measurements-add-kindHint",kindTitle:"msp-viewer-measurements-add-kindTitle",kinds:"msp-viewer-measurements-add-kinds",more:"msp-viewer-measurements-add-more",optionsToggle:"msp-viewer-measurements-add-optionsToggle",point:"msp-viewer-measurements-add-point",pointActions:"msp-viewer-measurements-add-pointActions",pointLabel:"msp-viewer-measurements-add-pointLabel",points:"msp-viewer-measurements-add-points",slot:"msp-viewer-measurements-add-slot",style:"msp-viewer-measurements-add-style"};x("viewer/views/structure/measurements-add.module.css",`@layer msp.components {
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
`);var k=4;function M(d){let{model:t}=d,a=t.points.pipe(r(i=>i.slice(0,k))),n=t.points.pipe(r(i=>Math.max(0,i.length-k)),u()),p=w(!1),o;return m("div",{class:s.add,children:[e("p",{class:s.caption,children:"Points \xB7 the latest selections"}),m("div",{class:s.points,ref:i=>o=i,children:[e(h,{each:a,fallback:()=>e("p",{class:s.hint,children:"Select atoms or residues (Select mode, Shift adds): the latest ones become the points to measure."}),children:(i,z)=>e(A,{model:t,point:i,index:z,onGrab:S=>y(S,o,i.id,P=>t.movePointTo(i.id,P))})},i=>i.id),e(c,{when:n.pipe(r(i=>i>0)),children:()=>e("p",{class:s.more,children:n.pipe(r(i=>`+${i} older, not used`))})})]}),e("p",{class:s.caption,children:"Measure"}),e("div",{class:s.kinds,children:t.kinds.map(i=>e(R,{model:t,kind:i}))}),e(c,{when:t.added.pipe(r(i=>i.length>0)),children:()=>m(v,{children:[e("p",{class:s.caption,children:"Added"}),e("div",{class:s.added,children:e(h,{each:t.added,children:i=>e(I,{model:t,node:i})},i=>i.id)})]})}),m("button",{type:"button",class:s.optionsToggle,"aria-expanded":p,onClick:()=>p.set(!p.value),children:[e(l,{name:"chevron-right",size:14,class:s.chevron}),"Options"]}),e(c,{when:p,children:()=>(t.optionValues&&f(t.optionValues,i=>t.loadOptions?.(i)),e(g,{form:t.options}))})]})}function A(d){let{model:t,point:a}=d;return m("div",{class:s.point,"data-id":a.id,onPointerEnter:()=>t.highlightPoint?.(a.id),onPointerLeave:()=>t.highlightPoint?.(void 0),children:[m("span",{class:s.slot,children:[e("span",{class:s.index,children:d.index.pipe(r(n=>`${n+1}`))}),e("span",{class:s.grip,"aria-hidden":"true","data-tip":"Drag to reorder",onPointerDown:d.onGrab,children:e(l,{name:"grip-vertical",size:13})})]}),e("button",{type:"button",class:s.pointLabel,title:a.label,"aria-label":`Focus ${a.label}`,onClick:()=>t.focusPoint(a.id),children:a.short??a.label}),m("span",{class:s.pointActions,children:[e("button",{type:"button",class:s.action,"aria-label":"Move up",title:"Move up",onClick:()=>t.movePoint(a.id,-1),children:e(l,{name:"arrow-up",size:13})}),e("button",{type:"button",class:s.action,"aria-label":"Move down",title:"Move down",onClick:()=>t.movePoint(a.id,1),children:e(l,{name:"arrow-down",size:13})}),e("button",{type:"button",class:s.action,"aria-label":"Remove",title:"Remove",onClick:()=>t.removePoint(a.id),children:e(l,{name:"x",size:13})})]})]})}function R(d){let{model:t,kind:a}=d,n=t.points.pipe(r(o=>a.points===0?o.length>0:o.length>=a.points),u()),p=a.points===0?n.pipe(r(o=>o?"of the selection":"needs a selection")):n.pipe(r(o=>o?a.points===1?"point 1":`points 1\u2013${a.points}`:`needs ${a.points} points`));return m("button",{type:"button",class:s.kind,disabled:n.pipe(r(o=>!o)),onClick:()=>t.add(a.id),children:[e("span",{class:s.kindTitle,children:a.title}),e("span",{class:s.kindHint,children:p})]})}function I(d){let{model:t,node:a}=d,n=w(!1),p=t.styleOf(a);return m("div",{class:s.addedItem,children:[m("div",{class:s.addedRow,"data-hidden":a.isHidden.pipe(r(o=>o?"":void 0)),children:[e("span",{class:s.pointLabel,children:a.label}),e("span",{class:s.addedValue,children:a.description}),m("span",{class:s.pointActions,children:[e("button",{type:"button",class:s.addedAction,title:a.isHidden.pipe(r(o=>o?"Show":"Hide")),onClick:()=>a.toggleVisibility(),children:e(c,{when:a.isHidden,fallback:()=>e(l,{name:"eye",size:14}),children:()=>e(l,{name:"eye-off",size:14})})}),p?e("button",{type:"button",class:s.addedAction,title:"Style","aria-label":"Style","aria-expanded":n,onClick:()=>n.set(!n.value),children:e(l,{name:"sliders-horizontal",size:14})}):null,e("button",{type:"button",class:s.addedAction,title:"Remove","aria-label":"Remove",onClick:()=>a.remove(),children:e(l,{name:"x",size:13})})]})]}),p?e(c,{when:n,reveal:!0,children:()=>e("div",{class:s.style,children:e(g,{form:p})})}):null]})}function N(d){return{sections:[{id:"measurements.section.measure",slot:"selection",title:"Measure",icon:"ruler",keywords:["distance","angle","dihedral","label","orientation","plane"],order:2,render:b(()=>{let t=d.api.measure;return t?e(M,{model:t.model(d.api)}):e(v,{})})}]}}export{N as measurementsUI};
