import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n,t as r}from"./jsx-runtime-DzTO5r4L.js";import{n as i,r as a}from"./registry-D35yV2Tb.js";import{i as o,n as s,t as c}from"./control-flow-2XcFB3wB.js";var l;function u(){return(u=e((()=>{a(),l={bar:`msp-legend-bar`,caption:`msp-legend-caption`,dot:`msp-legend-dot`,ends:`msp-legend-ends`,item:`msp-legend-item`,label:`msp-legend-label`,legend:`msp-legend-legend`,line:`msp-legend-line`,mark:`msp-legend-mark`,none:`msp-legend-none`,ramp:`msp-legend-ramp`,swatch:`msp-legend-swatch`,title:`msp-legend-title`},i(`components/legend/legend.module.css`,`@layer msp.components {
.msp-legend-legend {
  gap: var(--msp-space-2);
  min-width: 0;
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  flex-direction: column;
  line-height: 1.3;
  display: flex;
}

.msp-legend-title {
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
}

.msp-legend-item {
  align-items: center;
  gap: var(--msp-space-3);
  min-width: 0;
  display: flex;
}

.msp-legend-label {
  white-space: nowrap;
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-legend-mark {
  background: var(--legend-color, transparent);
  flex: none;
}

.msp-legend-swatch {
  border-radius: var(--msp-radius-sm);
  width: 12px;
  height: 12px;
}

.msp-legend-dot {
  border-radius: 50%;
  width: 10px;
  height: 10px;
}

.msp-legend-line {
  border-radius: 2px;
  width: 14px;
  height: 3px;
}

.msp-legend-none {
  background: color-mix(in oklab, var(--msp-color-text), transparent 85%);
}

.msp-legend-ramp {
  gap: var(--msp-space-1);
  flex-direction: column;
  display: flex;
}

.msp-legend-caption {
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
}

.msp-legend-bar {
  border-radius: var(--msp-radius-sm);
  height: 8px;
  display: block;
}

.msp-legend-ends {
  justify-content: space-between;
  gap: var(--msp-space-3);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
  display: flex;
}
}
`)})))()}function d(e){return`linear-gradient(to right, ${(e.stops.length>0?e.stops:[{t:0,color:`transparent`}]).map(e=>`${e.color} ${(Math.min(1,Math.max(0,e.t))*100).toFixed(1)}%`).join(`, `)})`}function f(e){let r=e.items??[],i=e.ramps??[];return n(`div`,{class:e.class?`${l.legend} ${e.class}`:l.legend,role:`group`,"aria-label":`Legend`,children:[t(s,{when:e.title,children:e=>t(`span`,{class:l.title,children:e})}),t(c,{each:r,children:e=>n(`div`,{class:l.item,children:[t(`span`,{class:`${l.mark} ${l[e.glyph??`swatch`]}`,classList:{[l.none]:e.color===null},style:{"--legend-color":e.color??void 0},"aria-hidden":`true`}),t(`span`,{class:l.label,children:e.label})]})}),t(c,{each:i,children:e=>n(`div`,{class:l.ramp,children:[e.caption?t(`span`,{class:l.caption,children:e.caption}):null,t(`span`,{class:l.bar,style:{background:d(e)},role:`img`,"aria-label":`${e.lo} to ${e.hi}`}),n(`span`,{class:l.ends,children:[t(`span`,{children:e.lo}),t(`span`,{children:e.hi})]})]})})]})}function p(){return(p=e((()=>{o(),u(),r()})))()}export{p as n,f as t};