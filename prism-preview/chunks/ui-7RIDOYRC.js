import{b as Y,c as I,d as M,e as Z,f as _,g as ee,h as ne,i as V}from"./chunk-UYUODIMC.js";import"./chunk-YDL3UIVP.js";import"./chunk-L4AOKZPT.js";import"./chunk-BLKGSWIC.js";import"./chunk-RGJMAKN5.js";import"./chunk-QRKEIN3N.js";import"./chunk-MUM5FAI2.js";import"./chunk-VEIANH2B.js";import"./chunk-DWZ3CCN5.js";import"./chunk-QY6JJYIY.js";import"./chunk-PGIZOE4W.js";import"./chunk-2EUDWDXO.js";import"./chunk-TQI7BHRW.js";import"./chunk-S5H7XRDG.js";import"./chunk-YPLTXMCR.js";import"./chunk-6RGOI2EE.js";import"./chunk-QQKAILTS.js";import"./chunk-JY64XCWB.js";import"./chunk-XQ72NLTO.js";import"./chunk-6GTCY24C.js";import"./chunk-WHIGMVYP.js";import"./chunk-ERWA4FT4.js";import"./chunk-5ZY3LDQI.js";import"./chunk-JT2JQXWV.js";import"./chunk-UY7KAHXS.js";import"./chunk-UASFW2HM.js";import{A as J,C as Q,F as b,G as n,H as m,J as y,Y as D,da as j,ea as X,f as H,h as G,k as U,m as F,o as C,p as $}from"./chunk-BGEN4R46.js";import"./chunk-KHBNYRDQ.js";import"./chunk-FAVIDOJH.js";import{f as s,i as A}from"./chunk-GF5XNTCX.js";import"./chunk-FY6Y25VJ.js";import{S as z,qb as R}from"./chunk-IAG3P5FE.js";import"./chunk-DCANE7XH.js";var v={caption:"msp-viewer-clipping-caption",cutIcon:"msp-viewer-clipping-cutIcon",cutLabel:"msp-viewer-clipping-cutLabel",cutRow:"msp-viewer-clipping-cutRow",cutText:"msp-viewer-clipping-cutText",fade:"msp-viewer-clipping-fade",fold:"msp-viewer-clipping-fold",foldChevron:"msp-viewer-clipping-foldChevron",foldTitle:"msp-viewer-clipping-foldTitle"};Q("viewer/features/clipping/clipping.module.css",`@layer msp.components {
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
`);var oe={plane:"square",sphere:"circle",cube:"box",cylinder:"cylinder",infiniteCone:"cone"};function Fe(t){return{sections:[{id:V,slot:"selection",title:"Clipping",icon:"scissors",order:.5,keywords:["clip","cut","slice","cross section","plane","inside"],render:J(()=>{let e=t.api.clipping;return e?n(ae,{ctx:t,clipping:e}):n(F,{})})}],nodeActions:[{id:"clipping.node-action.clip-this",title:"Clip this\u2026",icon:"scissors",order:10,kinds:["component","representation","volume","volume-representation","particles","particles-representation"],when:e=>t.api.clipping.canClipThis(e.id),run:e=>{let i=t.api.clipping;i.clipThis(t.api,e.id).then(o=>{o&&(o.cut&&i.gizmos.handleOnly(o.cut.index),t.api.view.open({tab:"selection",section:V}))})}}],selectionActions:[{id:"clipping.selection-action.clip",title:"Clip\u2026",hint:"Cut through what it is drawn as",icon:"scissors",order:10,run:()=>{t.api.view.open({tab:"selection",section:V})}}]}}var se="display: flex; align-items: center; gap: var(--msp-space-2); min-width: 0",K="margin: 0; font-size: var(--msp-font-size-xs); color: var(--msp-color-text-muted)";function ae(t){let{ctx:e,clipping:i}=t,o=s(e.sources.interaction.selection,a=>a!==void 0),c=i.selectionTypes,g=i.filter,h=s([c,g.asReadonly],(a,u)=>a.filter(w=>u.only?u.only.includes(w):!u.excluded.includes(w))),l=a=>g.set({excluded:a}),S=a=>{let u=h.value.includes(a);l(c.value.filter(w=>w===a?u:!h.value.includes(w)))},k=i.gizmos.handled,r=(a,u)=>i.gizmos.handleOnly(u?a:void 0),p=()=>{let a=h.value.length===c.value.length?[]:h.value,u=o.value?{shape:"plane",types:a,...i.keepNew.value?{keepWhole:!0}:{}}:{shape:"plane",everything:!0};e.api.run("clipping.add",u).then(w=>{let E=w.value;!w.ok||!E||i.gizmos.handleOnly(E.index)})};G(a=>a?i.showGizmos(e.api):i.gizmos.hide()),H(()=>i.gizmos.hide());let f=s([o,h],(a,u)=>!a||u.length>0),x=s(i.cuts,a=>a.map(u=>u.index),re),d=s(x,a=>a.length>0);return m("div",{style:"display: grid; gap: var(--msp-space-2); min-width: 0",children:[m("div",{style:se,children:[n("p",{style:`${K}; flex: 1`,children:"Cuts"}),n(y,{size:"xs",variant:"ghost",icon:n(b,{name:"plus"}),title:s(o,a=>a?"A cut through what the selection is drawn as (pick its shape on it)":"A cut through everything drawn (narrow it on the cut)"),disabled:s(f,a=>!a),onClick:p,children:"Add"})]}),n(C,{when:s([d,o],(a,u)=>!a&&!u),children:()=>n("p",{style:K,children:"Add cuts what the selection is drawn as; with nothing selected, everything drawn."})}),n(C,{when:s(c,a=>a.length>1),children:()=>m("div",{style:"display: flex; flex-wrap: wrap; align-items: center; gap: var(--msp-space-1); min-width: 0",children:[n("span",{style:`${K}; margin-right: var(--msp-space-1)`,children:"Through"}),n("div",{style:"display: contents",role:"group","aria-label":"New cuts through these representation types",children:n($,{each:c,children:a=>{let u=s(h,w=>w.includes(a));return n(y,{size:"xs",variant:"ghost",pressed:u,icon:n(N,{on:u}),title:s(u,w=>w?`Leave the ${a} whole`:`Cut through the ${a} too`),onClick:()=>S(a),children:n(O,{on:u,children:a})})}})}),n("span",{style:"flex: 1"}),n(y,{size:"xs",variant:"ghost",title:"Cut through every type",onClick:()=>l([]),children:"All"}),n(y,{size:"xs",variant:"ghost",title:"Uncheck every type",onClick:()=>l(c.value),children:"None"})]})}),n(C,{when:o,children:()=>{let a=i.keepNew.asReadonly;return n(y,{size:"xs",variant:"ghost",block:!0,pressed:a,icon:n(N,{on:a}),title:"A cut added keeps the selected atoms whole: it goes around them",onClick:()=>i.keepNew.set(!a.value),children:n(O,{on:a,children:"Keep the selection whole"})})}}),n($,{each:x,children:a=>n(ce,{ctx:e,clipping:i,cut:s(i.cuts,u=>u.find(w=>w.index===a)),open:s(k,u=>u.includes(a)),setOpen:u=>r(a,u)})})]})}function re(t,e){return t.length===e.length&&t.every((i,o)=>i===e[o])}function N(t){let e=t.partly;return n("span",{style:s(t.on,i=>i?"display: flex":"display: flex; visibility: hidden"),children:e?n(C,{when:e,fallback:()=>n(b,{name:"check",size:14}),children:()=>n(b,{name:"minus",size:14})}):n(b,{name:"check",size:14})})}function O(t){return n("span",{class:v.fade,style:s(t.on,e=>`flex: 1; text-align: start; min-width: 0${e?"":"; color: var(--msp-color-text-muted)"}`),children:t.children})}function P(t){let e=A(!1);return m("div",{style:"display: grid; gap: 2px; min-width: 0",children:[m("button",{type:"button",class:v.fold,"aria-expanded":s(e.asReadonly,i=>String(i)),onClick:()=>e.set(!e.value),children:[m("span",{class:`${v.foldTitle} ${v.fade}`,children:[t.title,t.meta?m(F,{children:[" ",t.meta]}):null]}),n(b,{name:"chevron-right",size:14,class:v.foldChevron})]}),n(C,{when:e.asReadonly,children:()=>t.children()})]})}function le(t){return n("div",{style:"display: flex; padding: 2px; border-radius: var(--msp-radius-md); background: var(--msp-color-control); min-width: 0",role:"radiogroup","aria-label":"Shape",children:Y.map(e=>n("span",{style:"flex: 1 1 0; min-width: 0; display: grid",children:n(y,{size:"sm",variant:"ghost",block:!0,pressed:e===t.current,title:e===t.current?`A ${I[e].toLowerCase()}`:`Make it a ${I[e].toLowerCase()}`,onClick:()=>e!==t.current&&t.pick(e),children:n(b,{name:oe[e],label:I[e]})})}))})}function ce(t){let{ctx:e,clipping:i,cut:o}=t,c=(g,h)=>{let l=o.value;return l?e.api.run(g,{...l.object.tag?{tag:l.object.tag}:{cut:l.index},...h}):void 0};return n(C,{when:s(o,g=>g?.object.type),children:g=>{let h=g;return m("div",{style:"display: grid; gap: var(--msp-space-2); min-width: 0",children:[m("div",{class:v.cutRow,children:[m("button",{type:"button",class:v.cutLabel,"aria-expanded":s(t.open,l=>String(l)),title:s(t.open,l=>l?"Close its editor":"Its shape, what it cuts, where, how drawn"),onClick:()=>t.setOpen(!t.open.value),children:[n("span",{class:v.cutIcon,children:n(b,{name:oe[h],size:18})}),m("span",{class:v.cutText,children:[n("span",{class:v.fade,children:s(o,l=>l?`${I[h]} ${l.index}`:"")}),n("span",{class:`${v.caption} ${v.fade}`,children:s(o,l=>l?pe(l):"")})]})]}),n(y,{size:"xs",variant:"ghost",icon:n(b,{name:"scan"}),title:s(o,l=>l?.drawing?"Drawn in the scene (saved with it): hide it":"Draw it in the scene (saved with it)"),pressed:s(o,l=>!!l?.drawing),onClick:()=>c("clipping.show",{on:!o.value?.drawing})}),n(y,{size:"xs",variant:"ghost",icon:n(b,{name:"trash-2"}),title:"Remove the cut",onClick:()=>c("clipping.remove",{})})]}),n(C,{when:t.open,children:()=>m(F,{children:[n(le,{current:h,pick:l=>c("clipping.update",{shape:l})}),n(y,{size:"xs",variant:"ghost",block:!0,pressed:s(o,l=>!!l?.object.invert),icon:n(b,{name:"flip-vertical-2"}),title:h==="plane"?"Which side it cuts away":"Its inside cut away, or its outside",onClick:()=>c("clipping.update",{invert:!o.value?.object.invert}),children:n("span",{style:"flex: 1; text-align: start",children:h==="plane"?"Cut away the other side":"Cut away the outside instead"})}),n(de,{clipping:i,cut:o,run:c}),n(P,{title:"Kept whole",meta:s(o,l=>l?.kept?`(${l.kept.label})`:"(nothing)"),children:()=>n(he,{ctx:e,cut:o,run:c})}),n(P,{title:"Position and size",children:()=>n(me,{cut:o,shape:h,run:c})}),n(C,{when:s(o,l=>!!l?.drawing),children:()=>n(P,{title:"In the scene",children:()=>n(ge,{clipping:i,cut:o,run:c})})})]})})]})}})}function pe(t){return t.targets.length>3?`${t.targets.length} representations`:t.targets.map(e=>e.label).join(", ")}var te=8;function de(t){let e=s(t.cut,r=>r?t.clipping.candidates(r):[],ie),i=s(t.cut,r=>new Set(r?.targets.map(p=>p.ref))),o=s([e,i],(r,p)=>{let f=new Map;for(let x of r){let d=f.get(x.type)??{refs:[],on:0};d.refs.push(x.ref),p.has(x.ref)&&d.on++,f.set(x.type,d)}return[...f].map(([x,d])=>({type:x,...d}))}),c=A(""),g=A(!1),h=s(e,r=>r.length>te),l=s([e,i,c.asReadonly,g.asReadonly],(r,p,f,x)=>{let d=f.trim().toLowerCase(),a=[...r].filter(u=>!d||u.label.toLowerCase().includes(d)).sort((u,w)=>Number(p.has(w.ref))-Number(p.has(u.ref)));return x||d?a:a.slice(0,te)},ie),S=(r,p)=>t.run("clipping.apply",{representations:r,on:p}),k=s([e,i],(r,p)=>`(${r.filter(f=>p.has(f.ref)).length}/${r.length})`);return n(P,{title:"Cuts through",meta:k,children:()=>m("div",{style:"display: grid; gap: 2px; min-width: 0",role:"group","aria-label":"The representations it cuts",children:[n(C,{when:s([o,e],(r,p)=>r.length>1&&p.length>r.length),children:()=>n("div",{style:"display: flex; flex-wrap: wrap; gap: var(--msp-space-1); min-width: 0","aria-label":"By type",children:n($,{each:s(o,r=>r.map(p=>p.type),ue),children:r=>{let p=s(o,d=>d.find(a=>a.type===r)),f=s(p,d=>!!d&&d.on>0),x=s(p,d=>!!d&&d.on>0&&d.on<d.refs.length);return n(y,{size:"xs",variant:"ghost",pressed:f,icon:n(N,{on:f,partly:x}),title:s(p,d=>d&&d.on===d.refs.length?`Leave every ${r} whole`:`Cut every ${r}`),onClick:()=>{let d=p.value;d&&S(d.refs,d.on<d.refs.length)},children:n(O,{on:f,children:s(p,d=>d?`${r} ${d.on}/${d.refs.length}`:r)})})}})})}),n(C,{when:h,children:()=>n(X,{size:"sm",search:!0,placeholder:"Find a representation","aria-label":"Find a representation",value:c,onInput:r=>c.set(r)})}),n($,{each:l,children:r=>{let p=s(i,f=>f.has(r.ref));return n(y,{size:"xs",variant:"ghost",block:!0,pressed:p,icon:n(N,{on:p}),title:s(p,f=>f?`Leave ${r.label} whole`:`Cut ${r.label} too`),onClick:()=>S([r.ref],!p.value),children:n(O,{on:p,children:r.label})})}},r=>r.ref),n(C,{when:s([h,c.asReadonly],(r,p)=>r&&!p.trim()),children:()=>n(y,{size:"xs",variant:"ghost",onClick:()=>g.set(!g.value),children:s([g.asReadonly,e],(r,p)=>r?"Show fewer":`Show all ${p.length}`)})})]})})}function ie(t,e){return t.length===e.length&&t.every((i,o)=>i.ref===e[o].ref)}function ue(t,e){return t.length===e.length&&t.every((i,o)=>i===e[o])}function he(t){let{cut:e}=t,i=s(t.ctx.sources.interaction.selection,o=>o!==void 0);return m("div",{style:"display: grid; gap: 2px; min-width: 0",children:[n(C,{when:s(e,o=>o?.kept?.label),children:o=>m("div",{class:v.cutRow,children:[m("span",{class:`${v.fade}`,style:"flex: 1; min-width: 0",children:[o,m("span",{class:v.caption,children:[" ",s(e,c=>c?.kept?`\xB7 ${c.kept.count} atoms`:"")]})]}),n(y,{size:"xs",variant:"ghost",title:"Cut these atoms again",onClick:()=>t.run("clipping.release",{}),children:"Release"})]})}),n(y,{size:"xs",variant:"ghost",block:!0,icon:n(b,{name:"plus"}),disabled:s(i,o=>!o),title:s(i,o=>o?"The selected atoms left whole by this cut":"Select the atoms to keep whole"),onClick:()=>t.run("clipping.keep",{}),children:n("span",{style:"flex: 1; text-align: start",children:"Keep the selection whole"})})]})}function ge(t){let{clipping:e,cut:i}=t,o=!1,c,g=async()=>{for(o=!0;c;){let S=c;c=void 0,await t.run("clipping.show",{on:!0,options:S})}o=!1;let l=i.value;l&&h.load(e.drawingValues(l))},h=new D(e.drawingParams,i.value?e.drawingValues(i.value):void 0,{onChange:l=>{c=l,o||g()}});return U(i,l=>{l&&!o&&h.load(e.drawingValues(l))}),n(j,{form:h})}function me(t){let{cut:e,shape:i}=t,o=fe(i),c=!1,g,h=new Set,l=async()=>{for(c=!0;g;){let r=g,p=new Set(h);g=void 0,h.clear(),await t.run("clipping.update",we(i,r,p))}c=!1;let k=e.value;k&&S.load(q(k))},S=new D(o,e.value?q(e.value):void 0,{onChange:(k,r)=>{g=k,h.add(r),c||l()}});return U(e,k=>{k&&!c&&S.load(q(k))}),n(j,{form:S})}var T=R.Vec3(z(),{},{description:"Its center (\xC5); a plane goes through it, a cone starts at it"}),L=t=>R.Vec3(z.create(0,1,0),{},{description:t}),W=t=>R.Numeric(10,{min:.1,max:2e3,step:.1},{label:t});function fe(t){switch(t){case"plane":return{position:T,normal:L("It cuts away the side this points to")};case"sphere":return{position:T,diameter:W("Diameter (\xC5)")};case"cube":return{position:T,up:L("Its height axis"),size:R.Vec3(z.create(10,10,10))};case"cylinder":return{position:T,axis:L("Its axis"),diameter:W("Diameter (\xC5)"),height:W("Height (\xC5)")};case"infiniteCone":return{position:T,axis:L("Which way it opens"),angle:R.Numeric(25,{min:1,max:89,step:1},{label:"Half-angle (\xB0)"})}}}var B=(t,e)=>z.create(...[0,1,2].map(i=>+t[i].toFixed(e)));function q(t){let e=t.object,i={...e,position:B(e.position,2),scale:B(e.scale,2)},o=B(M(e.rotation,Z),3);switch(i.type){case"plane":return{position:i.position,normal:o};case"sphere":return{position:i.position,diameter:i.scale[0]};case"cube":return{position:i.position,up:o,size:i.scale};case"cylinder":return{position:i.position,axis:o,diameter:i.scale[0],height:i.scale[1]};case"infiniteCone":return{position:i.position,axis:B(M(e.rotation,_),3),angle:+ee(e.scale).toFixed(1)}}return{}}function we(t,e,i){let o={};i.has("position")&&(o.position=[...e.position]);let c={plane:"normal",cube:"up",cylinder:"axis",infiniteCone:"axis",sphere:""}[t];switch(c&&i.has(c)&&(o.normal=[...e[c]]),t){case"sphere":i.has("diameter")&&(o.scale=[e.diameter,e.diameter,e.diameter]);break;case"cube":i.has("size")&&(o.scale=[...e.size]);break;case"cylinder":(i.has("diameter")||i.has("height"))&&(o.scale=[e.diameter,e.height,e.diameter]);break;case"infiniteCone":i.has("angle")&&(o.scale=[...ne(e.angle)]);break}return o}export{oe as ShapeIcons,Fe as clippingUI};
