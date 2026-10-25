import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,S as n,g as r,i,n as a,r as o,t as s,x as c}from"./jsx-runtime-DbCUSNU3.js";import{n as l,r as u}from"./registry-D35yV2Tb.js";import{b as d,x as f}from"./work-queue-DoxU-HjK.js";import{E as p}from"./shell-view-DFCAxQCV.js";import{n as m,t as h}from"./observable-state-eRUcDuAs.js";import{i as g,n as _,t as v}from"./control-flow-BQuMY04w.js";import{t as y}from"./icon-1ydjt1pd.js";import{d as b,f as x,t as S}from"./params-form-D0fEgQzm.js";import{et as C,n as w,t as T}from"./param-definition-D-iX28-z.js";import{t as ee}from"./text-input-j_8_8M_A.js";import{t as E}from"./button-B7k80QJA.js";import{La as te}from"./structure-CJPaXI_Y.js";import{t as ne}from"./src-BO5PfBJ6.js";import{a as D,c as O,d as k,i as re,l as ie,n as A,o as ae,r as j,s as M,u as oe}from"./clipping-Do8VpjIp.js";var N;function P(){return(P=e((()=>{u(),N={caption:`msp-viewer-clipping-caption`,cutIcon:`msp-viewer-clipping-cutIcon`,cutLabel:`msp-viewer-clipping-cutLabel`,cutRow:`msp-viewer-clipping-cutRow`,cutText:`msp-viewer-clipping-cutText`,fade:`msp-viewer-clipping-fade`,fold:`msp-viewer-clipping-fold`,foldChevron:`msp-viewer-clipping-foldChevron`,foldTitle:`msp-viewer-clipping-foldTitle`},l(`viewer/features/clipping/clipping.module.css`,`@layer msp.components {
.msp-viewer-clipping-cutRow {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  display: flex;
}

.msp-viewer-clipping-cutIcon {
  margin-right: var(--msp-space-1);
  color: var(--msp-color-text-muted);
  flex: none;
  display: flex;
}

.msp-viewer-clipping-cutText {
  flex: 1;
  min-width: 0;
  display: grid;
}

.msp-viewer-clipping-fade {
  white-space: nowrap;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-clipping-caption {
  font-size: var(--msp-font-size-xs);
  color: var(--msp-color-text-muted);
  margin: 0;
}

.msp-viewer-clipping-fold {
  align-items: center;
  gap: var(--msp-space-2);
  width: 100%;
  min-width: 0;
  padding: var(--msp-space-1) 0;
  color: var(--msp-color-text-muted);
  font: inherit;
  font-size: var(--msp-font-size-xs);
  text-align: start;
  cursor: pointer;
  background: none;
  border: none;
  display: flex;

  &:hover {
    color: var(--msp-color-text);
  }
}

.msp-viewer-clipping-foldTitle {
  flex: 1;
  min-width: 0;
}

.msp-viewer-clipping-foldChevron {
  transition: transform var(--msp-motion-fast, .12s) ease;
  flex: none;

  [aria-expanded="true"] > & {
    transform: rotate(90deg);
  }
}

.msp-viewer-clipping-cutLabel {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  color: inherit;
  font: inherit;
  text-align: start;
  cursor: pointer;
  border-radius: var(--msp-radius-sm);
  background: none;
  border: none;
  flex: 1;
  padding: 0;
  display: flex;

  &:hover .msp-viewer-clipping-cutText > :first-child {
    text-underline-offset: 2px;
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus, currentColor);
    outline-offset: 2px;
  }
}
}
`)})))()}function se(e){return{sections:[{id:A,slot:`selection`,title:`Clipping`,icon:`scissors`,order:.5,keywords:[`clip`,`cut`,`slice`,`cross section`,`plane`,`inside`],render:p(()=>{let t=e.api.clipping;return t?a(ce,{ctx:e,clipping:t}):a(i,{})})}],nodeActions:[{id:`clipping.node-action.clip-this`,title:`Clip this…`,icon:`scissors`,order:10,kinds:[`component`,`representation`,`volume`,`volume-representation`,`particles`,`particles-representation`],when:t=>e.api.clipping.canClipThis(t.id),run:t=>{let n=e.api.clipping;n.clipThis(e.api,t.id).then(t=>{t&&(t.cut&&n.gizmos.handleOnly(t.cut.index),e.api.view.open({tab:`selection`,section:A}))})}}],selectionActions:[{id:`clipping.selection-action.clip`,title:`Clip…`,hint:`Cut through what it is drawn as`,icon:`scissors`,order:10,run:()=>void e.api.view.open({tab:`selection`,section:A})}]}}function ce(e){let{ctx:r,clipping:i}=e,s=d(r.sources.interaction.selection,e=>e!==void 0),c=i.selectionTypes,l=i.filter,u=d([c,l.asReadonly],(e,t)=>e.filter(e=>t.only?t.only.includes(e):!t.excluded.includes(e))),f=e=>l.set({excluded:e}),p=e=>{let t=u.value.includes(e);f(c.value.filter(n=>n===e?t:!u.value.includes(n)))},m=i.gizmos.handled,h=(e,t)=>i.gizmos.handleOnly(t?e:void 0),g=()=>{let e=u.value.length===c.value.length?[]:u.value,t=s.value?{shape:`plane`,types:e,...i.keepNew.value?{keepWhole:!0}:{}}:{shape:`plane`,everything:!0};r.api.run(`clipping.add`,t).then(e=>{let t=e.value;e.ok&&t&&i.gizmos.handleOnly(t.index)})};n(e=>e?i.showGizmos(r.api):i.gizmos.hide()),t(()=>i.gizmos.hide());let b=d([s,u],(e,t)=>!e||t.length>0),x=d(i.cuts,e=>e.map(e=>e.index),le),S=d(x,e=>e.length>0);return o(`div`,{style:`display: grid; gap: var(--msp-space-2); min-width: 0`,children:[o(`div`,{style:K,children:[a(`p`,{style:`${q}; flex: 1`,children:`Cuts`}),a(E,{size:`xs`,variant:`ghost`,icon:a(y,{name:`plus`}),title:d(s,e=>e?`A cut through what the selection is drawn as (pick its shape on it)`:`A cut through everything drawn (narrow it on the cut)`),disabled:d(b,e=>!e),onClick:g,children:`Add`})]}),a(_,{when:d([S,s],(e,t)=>!e&&!t),children:()=>a(`p`,{style:q,children:`Add cuts what the selection is drawn as; with nothing selected, everything drawn.`})}),a(_,{when:d(c,e=>e.length>1),children:()=>o(`div`,{style:`display: flex; flex-wrap: wrap; align-items: center; gap: var(--msp-space-1); min-width: 0`,children:[a(`span`,{style:`${q}; margin-right: var(--msp-space-1)`,children:`Through`}),a(`div`,{style:`display: contents`,role:`group`,"aria-label":`New cuts through these representation types`,children:a(v,{each:c,children:e=>{let t=d(u,t=>t.includes(e));return a(E,{size:`xs`,variant:`ghost`,pressed:t,icon:a(F,{on:t}),title:d(t,t=>t?`Leave the ${e} whole`:`Cut through the ${e} too`),onClick:()=>p(e),children:a(I,{on:t,children:e})})}})}),a(`span`,{style:`flex: 1`}),a(E,{size:`xs`,variant:`ghost`,title:`Cut through every type`,onClick:()=>f([]),children:`All`}),a(E,{size:`xs`,variant:`ghost`,title:`Uncheck every type`,onClick:()=>f(c.value),children:`None`})]})}),a(_,{when:s,children:()=>{let e=i.keepNew.asReadonly;return a(E,{size:`xs`,variant:`ghost`,block:!0,pressed:e,icon:a(F,{on:e}),title:`A cut added keeps the selected atoms whole: it goes around them`,onClick:()=>i.keepNew.set(!e.value),children:a(I,{on:e,children:`Keep the selection whole`})})}}),a(v,{each:x,children:e=>a(z,{ctx:r,clipping:i,cut:d(i.cuts,t=>t.find(t=>t.index===e)),open:d(m,t=>t.includes(e)),setOpen:t=>h(e,t)})})]})}function le(e,t){return e.length===t.length&&e.every((e,n)=>e===t[n])}function F(e){let t=e.partly;return a(`span`,{style:d(e.on,e=>e?`display: flex`:`display: flex; visibility: hidden`),children:t?a(_,{when:t,fallback:()=>a(y,{name:`check`,size:14}),children:()=>a(y,{name:`minus`,size:14})}):a(y,{name:`check`,size:14})})}function I(e){return a(`span`,{class:N.fade,style:d(e.on,e=>`flex: 1; text-align: start; min-width: 0${e?``:`; color: var(--msp-color-text-muted)`}`),children:e.children})}function L(e){let t=m(!1);return o(`div`,{style:`display: grid; gap: 2px; min-width: 0`,children:[o(`button`,{type:`button`,class:N.fold,"aria-expanded":d(t.asReadonly,e=>String(e)),onClick:()=>t.set(!t.value),children:[o(`span`,{class:`${N.foldTitle} ${N.fade}`,children:[e.title,e.meta?o(i,{children:[` `,e.meta]}):null]}),a(y,{name:`chevron-right`,size:14,class:N.foldChevron})]}),a(_,{when:t.asReadonly,children:()=>e.children()})]})}function R(e){return a(`div`,{style:`display: flex; padding: 2px; border-radius: var(--msp-radius-md); background: var(--msp-color-control); min-width: 0`,role:`radiogroup`,"aria-label":`Shape`,children:ae.map(t=>a(`span`,{style:`flex: 1 1 0; min-width: 0; display: grid`,children:a(E,{size:`sm`,variant:`ghost`,block:!0,pressed:t===e.current,title:t===e.current?`A ${D[t].toLowerCase()}`:`Make it a ${D[t].toLowerCase()}`,onClick:()=>t!==e.current&&e.pick(t),children:a(y,{name:G[t],label:D[t]})})}))})}function z(e){let{ctx:t,clipping:n,cut:r}=e,s=(e,n)=>{let i=r.value;return i?t.api.run(e,{...i.object.tag?{tag:i.object.tag}:{cut:i.index},...n}):void 0};return a(_,{when:d(r,e=>e?.object.type),children:c=>{let l=c;return o(`div`,{style:`display: grid; gap: var(--msp-space-2); min-width: 0`,children:[o(`div`,{class:N.cutRow,children:[o(`button`,{type:`button`,class:N.cutLabel,"aria-expanded":d(e.open,e=>String(e)),title:d(e.open,e=>e?`Close its editor`:`Its shape, what it cuts, where, how drawn`),onClick:()=>e.setOpen(!e.open.value),children:[a(`span`,{class:N.cutIcon,children:a(y,{name:G[l],size:18})}),o(`span`,{class:N.cutText,children:[a(`span`,{class:N.fade,children:d(r,e=>e?`${D[l]} ${e.index}`:``)}),a(`span`,{class:`${N.caption} ${N.fade}`,children:d(r,e=>e?B(e):``)})]})]}),a(E,{size:`xs`,variant:`ghost`,icon:a(y,{name:`scan`}),title:d(r,e=>e?.drawing?`Drawn in the scene (saved with it): hide it`:`Draw it in the scene (saved with it)`),pressed:d(r,e=>!!e?.drawing),onClick:()=>s(`clipping.show`,{on:!r.value?.drawing})}),a(E,{size:`xs`,variant:`ghost`,icon:a(y,{name:`trash-2`}),title:`Remove the cut`,onClick:()=>s(`clipping.remove`,{})})]}),a(_,{when:e.open,children:()=>o(i,{children:[a(R,{current:l,pick:e=>s(`clipping.update`,{shape:e})}),a(E,{size:`xs`,variant:`ghost`,block:!0,pressed:d(r,e=>!!e?.object.invert),icon:a(y,{name:`flip-vertical-2`}),title:l===`plane`?`Which side it cuts away`:`Its inside cut away, or its outside`,onClick:()=>s(`clipping.update`,{invert:!r.value?.object.invert}),children:a(`span`,{style:`flex: 1; text-align: start`,children:l===`plane`?`Cut away the other side`:`Cut away the outside instead`})}),a(V,{clipping:n,cut:r,run:s}),a(L,{title:`Kept whole`,meta:d(r,e=>e?.kept?`(${e.kept.label})`:`(nothing)`),children:()=>a(ue,{ctx:t,cut:r,run:s})}),a(L,{title:`Position and size`,children:()=>a(fe,{cut:r,shape:l,run:s})}),a(_,{when:d(r,e=>!!e?.drawing),children:()=>a(L,{title:`In the scene`,children:()=>a(de,{clipping:n,cut:r,run:s})})})]})})]})}})}function B(e){return e.targets.length>3?`${e.targets.length} representations`:e.targets.map(e=>e.label).join(`, `)}function V(e){let t=d(e.cut,t=>t?e.clipping.candidates(t):[],H),n=d(e.cut,e=>new Set(e?.targets.map(e=>e.ref))),r=d([t,n],(e,t)=>{let n=new Map;for(let r of e){let e=n.get(r.type)??{refs:[],on:0};e.refs.push(r.ref),t.has(r.ref)&&e.on++,n.set(r.type,e)}return[...n].map(([e,t])=>({type:e,...t}))}),i=m(``),s=m(!1),c=d(t,e=>e.length>J),l=d([t,n,i.asReadonly,s.asReadonly],(e,t,n,r)=>{let i=n.trim().toLowerCase(),a=[...e].filter(e=>!i||e.label.toLowerCase().includes(i)).sort((e,n)=>Number(t.has(n.ref))-Number(t.has(e.ref)));return r||i?a:a.slice(0,J)},H),u=(t,n)=>e.run(`clipping.apply`,{representations:t,on:n}),f=d([t,n],(e,t)=>`(${e.filter(e=>t.has(e.ref)).length}/${e.length})`);return a(L,{title:`Cuts through`,meta:f,children:()=>o(`div`,{style:`display: grid; gap: 2px; min-width: 0`,role:`group`,"aria-label":`The representations it cuts`,children:[a(_,{when:d([r,t],(e,t)=>e.length>1&&t.length>e.length),children:()=>a(`div`,{style:`display: flex; flex-wrap: wrap; gap: var(--msp-space-1); min-width: 0`,"aria-label":`By type`,children:a(v,{each:d(r,e=>e.map(e=>e.type),U),children:e=>{let t=d(r,t=>t.find(t=>t.type===e)),n=d(t,e=>!!e&&e.on>0),i=d(t,e=>!!e&&e.on>0&&e.on<e.refs.length);return a(E,{size:`xs`,variant:`ghost`,pressed:n,icon:a(F,{on:n,partly:i}),title:d(t,t=>t&&t.on===t.refs.length?`Leave every ${e} whole`:`Cut every ${e}`),onClick:()=>{let e=t.value;e&&u(e.refs,e.on<e.refs.length)},children:a(I,{on:n,children:d(t,t=>t?`${e} ${t.on}/${t.refs.length}`:e)})})}})})}),a(_,{when:c,children:()=>a(ee,{size:`sm`,search:!0,placeholder:`Find a representation`,"aria-label":`Find a representation`,value:i,onInput:e=>i.set(e)})}),a(v,{each:l,by:e=>e.ref,children:e=>{let t=d(n,t=>t.has(e.ref));return a(E,{size:`xs`,variant:`ghost`,block:!0,pressed:t,icon:a(F,{on:t}),title:d(t,t=>t?`Leave ${e.label} whole`:`Cut ${e.label} too`),onClick:()=>u([e.ref],!t.value),children:a(I,{on:t,children:e.label})})}}),a(_,{when:d([c,i.asReadonly],(e,t)=>e&&!t.trim()),children:()=>a(E,{size:`xs`,variant:`ghost`,onClick:()=>s.set(!s.value),children:d([s.asReadonly,t],(e,t)=>e?`Show fewer`:`Show all ${t.length}`)})})]})})}function H(e,t){return e.length===t.length&&e.every((e,n)=>e.ref===t[n].ref)}function U(e,t){return e.length===t.length&&e.every((e,n)=>e===t[n])}function ue(e){let{cut:t}=e,n=d(e.ctx.sources.interaction.selection,e=>e!==void 0);return o(`div`,{style:`display: grid; gap: 2px; min-width: 0`,children:[a(_,{when:d(t,e=>e?.kept?.label),children:n=>o(`div`,{class:N.cutRow,children:[o(`span`,{class:`${N.fade}`,style:`flex: 1; min-width: 0`,children:[n,o(`span`,{class:N.caption,children:[` `,d(t,e=>e?.kept?`· ${e.kept.count} atoms`:``)]})]}),a(E,{size:`xs`,variant:`ghost`,title:`Cut these atoms again`,onClick:()=>e.run(`clipping.release`,{}),children:`Release`})]})}),a(E,{size:`xs`,variant:`ghost`,block:!0,icon:a(y,{name:`plus`}),disabled:d(n,e=>!e),title:d(n,e=>e?`The selected atoms left whole by this cut`:`Select the atoms to keep whole`),onClick:()=>e.run(`clipping.keep`,{}),children:a(`span`,{style:`flex: 1; text-align: start`,children:`Keep the selection whole`})})]})}function de(e){let{clipping:t,cut:n}=e,i=!1,o,s=async()=>{for(i=!0;o;){let t=o;o=void 0,await e.run(`clipping.show`,{on:!0,options:t})}i=!1;let r=n.value;r&&c.load(t.drawingValues(r))},c=new b(t.drawingParams,n.value?t.drawingValues(n.value):void 0,{onChange:e=>{o=e,i||s()}});return r(n,e=>{e&&!i&&c.load(t.drawingValues(e))}),a(S,{form:c})}function fe(e){let{cut:t,shape:n}=e,i=pe(n),o=!1,s,c=new Set,l=async()=>{for(o=!0;s;){let t=s,r=new Set(c);s=void 0,c.clear(),await e.run(`clipping.update`,me(n,t,r))}o=!1;let r=t.value;r&&u.load(W(r))},u=new b(i,t.value?W(t.value):void 0,{onChange:(e,t)=>{s=e,c.add(t),o||l()}});return r(t,e=>{e&&!o&&u.load(W(e))}),a(S,{form:u})}function pe(e){switch(e){case`plane`:return{position:Y,normal:X(`It cuts away the side this points to`)};case`sphere`:return{position:Y,diameter:Z(`Diameter (Å)`)};case`cube`:return{position:Y,up:X(`Its height axis`),size:T.Vec3(C.create(10,10,10))};case`cylinder`:return{position:Y,axis:X(`Its axis`),diameter:Z(`Diameter (Å)`),height:Z(`Height (Å)`)};case`infiniteCone`:return{position:Y,axis:X(`Which way it opens`),angle:T.Numeric(25,{min:1,max:89,step:1},{label:`Half-angle (°)`})}}}function W(e){let t=e.object,n={...t,position:Q(t.position,2),scale:Q(t.scale,2)},r=Q(k(t.rotation,M),3);switch(n.type){case`plane`:return{position:n.position,normal:r};case`sphere`:return{position:n.position,diameter:n.scale[0]};case`cube`:return{position:n.position,up:r,size:n.scale};case`cylinder`:return{position:n.position,axis:r,diameter:n.scale[0],height:n.scale[1]};case`infiniteCone`:return{position:n.position,axis:Q(k(t.rotation,re),3),angle:+O(t.scale).toFixed(1)}}return{}}function me(e,t,n){let r={};n.has(`position`)&&(r.position=[...t.position]);let i={plane:`normal`,cube:`up`,cylinder:`axis`,infiniteCone:`axis`,sphere:``}[e];switch(i&&n.has(i)&&(r.normal=[...t[i]]),e){case`sphere`:n.has(`diameter`)&&(r.scale=[t.diameter,t.diameter,t.diameter]);break;case`cube`:n.has(`size`)&&(r.scale=[...t.size]);break;case`cylinder`:(n.has(`diameter`)||n.has(`height`))&&(r.scale=[t.diameter,t.height,t.diameter]);break;case`infiniteCone`:n.has(`angle`)&&(r.scale=[...ie(t.angle)])}return r}var G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{te(),w(),ne(),g(),c(),x(),h(),f(),oe(),P(),j(),s(),G={plane:`square`,sphere:`circle`,cube:`box`,cylinder:`cylinder`,infiniteCone:`cone`},K=`display: flex; align-items: center; gap: var(--msp-space-2); min-width: 0`,q=`margin: 0; font-size: var(--msp-font-size-xs); color: var(--msp-color-text-muted)`,J=8,Y=T.Vec3(C(),{},{description:`Its center (Å); a plane goes through it, a cone starts at it`}),X=e=>T.Vec3(C.create(0,1,0),{},{description:e}),Z=e=>T.Numeric(10,{min:.1,max:2e3,step:.1},{label:e}),Q=(e,t)=>C.create(...[0,1,2].map(n=>+e[n].toFixed(t)))})))()}$();export{se as clippingUI};