import{b as Q,e as de}from"./chunk-3B6YVSRO.js";import{a as pe}from"./chunk-B4OPEUZD.js";import"./chunk-ZF6SICLJ.js";import"./chunk-OMHO4Z3C.js";import"./chunk-LJ3CQVUO.js";import"./chunk-5HRLRLSE.js";import"./chunk-OV2OLKVV.js";import"./chunk-73TVMDCL.js";import"./chunk-KTUDDTFK.js";import"./chunk-WPXA4PJ2.js";import"./chunk-R2KXRVPS.js";import"./chunk-3EGK4OQW.js";import"./chunk-CXZDK4AO.js";import"./chunk-IW73EPPS.js";import"./chunk-55INLPL2.js";import"./chunk-ZHHE2XG3.js";import"./chunk-CUCRPSNM.js";import"./chunk-VIA7CHLF.js";import{E as ie,L as ne,W as se,b as F,c as Z,d as N,e as _,g as A,m as K,o as ee,r as oe,s as d,t as k,u as te,v as re,w as ae}from"./chunk-VAXRDBNC.js";import"./chunk-KHBNYRDQ.js";import{b as g}from"./chunk-4XDSNK62.js";import{g as j,i as c,j as C,p as Y,q as W,s as P,z as T}from"./chunk-QZGD7T6O.js";import{S as h,pb as f}from"./chunk-CZB3H7J7.js";import"./chunk-DCANE7XH.js";var y={autoCrop:"msp-viewer-image-export-autoCrop",crop:"msp-viewer-image-export-crop",export:"msp-viewer-image-export-export",handle:"msp-viewer-image-export-handle",preview:"msp-viewer-image-export-preview",stage:"msp-viewer-image-export-stage"};ee("viewer/views/export/image-export.module.css",`@layer msp.components {
.msp-viewer-image-export-export {
  gap: var(--msp-space-3);
  min-width: 0;
  display: grid;
}

.msp-viewer-image-export-stage {
  height: 168px;
  padding: var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-well);
  place-items: center;
  display: grid;
}

.msp-viewer-image-export-preview {
  border-radius: var(--msp-radius-sm);
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  box-shadow: 0 0 0 1px var(--msp-glass-edge);
  position: relative;
  overflow: hidden;
}

.msp-viewer-image-export-crop {
  cursor: move;
  touch-action: none;
  border: 1px solid color-mix(in oklab, var(--msp-color-text), transparent 30%);
  box-shadow: 0 0 0 999px color-mix(in oklab, var(--msp-color-bg), transparent 45%);
  transition: left var(--msp-motion-base) var(--msp-ease),
    top var(--msp-motion-base) var(--msp-ease),
    width var(--msp-motion-base) var(--msp-ease),
    height var(--msp-motion-base) var(--msp-ease);
  border-radius: 1px;
  position: absolute;

  &[data-auto] {
    border-style: dashed;
  }

  &[data-dragging] {
    transition: none;
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-accent);
    outline-offset: 1px;
  }
}

.msp-viewer-image-export-handle {
  background: var(--msp-color-text);
  opacity: 0;
  width: 8px;
  height: 8px;
  transition: opacity var(--msp-motion-fast) var(--msp-ease);
  border-radius: 1px;
  margin: -4px;
  position: absolute;

  .msp-viewer-image-export-crop:hover > &, .msp-viewer-image-export-crop:focus-visible > &, .msp-viewer-image-export-crop[data-dragging] > & {
    opacity: .8;
  }

  &[data-edge="n"], &[data-edge="s"] {
    cursor: ns-resize;
    left: 50%;
  }

  &[data-edge="e"], &[data-edge="w"] {
    cursor: ew-resize;
    top: 50%;
  }

  &[data-edge="n"], &[data-edge="ne"], &[data-edge="nw"] {
    top: 0;
  }

  &[data-edge="s"], &[data-edge="se"], &[data-edge="sw"] {
    top: 100%;
  }

  &[data-edge="w"], &[data-edge="nw"], &[data-edge="sw"] {
    left: 0;
  }

  &[data-edge="e"], &[data-edge="ne"], &[data-edge="se"] {
    left: 100%;
  }

  &[data-edge="nw"], &[data-edge="se"] {
    cursor: nwse-resize;
  }

  &[data-edge="ne"], &[data-edge="sw"] {
    cursor: nesw-resize;
  }
}

.msp-viewer-image-export-autoCrop {
  left: var(--msp-space-2);
  bottom: var(--msp-space-2);
  align-items: center;
  gap: var(--msp-space-1);
  height: 20px;
  padding: 0 var(--msp-space-2);
  background: var(--msp-glass-bg);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  box-shadow: var(--msp-glass-shadow);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
  border-radius: 10px;
  display: inline-flex;
  position: absolute;

  &:hover {
    color: var(--msp-color-text);
  }

  &[aria-pressed="true"] {
    color: var(--msp-color-text);
    font-weight: 600;
  }
}
}
`);function ce(e){let{model:o}=e,t=o.settled??j(!0),s=o.form.values.pipe(c(r=>r.mode||"image"),P()),n=e.kinds??j([]);return k("div",{class:y.export,children:[d(A,{when:n.pipe(c(r=>r.length?r:void 0)),children:r=>d(ae,{choices:[{id:"image",label:"Image",icon:"image"},...r.map(i=>({id:i.id,label:i.title,...i.icon?{icon:i.icon}:{}}))],active:s,onPick:i=>o.form.set("mode",i)})}),d("div",{class:y.stage,children:k("div",{class:y.preview,style:{"aspect-ratio":o.aspect.pipe(c(r=>`${r}`)),background:o.preview.pipe(c(r=>r??"var(--msp-color-control)"))},children:[d(ke,{model:o,settled:t}),d("button",{type:"button",class:y.autoCrop,"aria-pressed":C([o.autoCrop.asReadonly,t]).pipe(c(([r,i])=>r&&i)),title:"Crop to the visible content",onClick:()=>o.autoCrop.set(!o.autoCrop.value),children:d("span",{children:"Auto-crop"})})]})}),d(ne,{form:o.form}),d(A,{when:s,children:r=>r==="image"||!e.kind?d(te,{icon:"download",label:"Download",info:o.size,busy:o.busy,secondary:{icon:"copy",label:"Copy",onClick:()=>o.copy()},onReset:()=>{o.form.reset(),o.form.set("mode",r)},onApply:()=>o.download()}):e.kind(r)})]})}var z=.05,me=.01,Ce=["n","s","e","w","ne","nw","se","sw"],$=e=>`${(e*100).toFixed(2)}%`,I=(e,o,t)=>Math.min(t,Math.max(o,e));function le(e,o,t,s){if(o==="move")return{x:I(e.x+t,0,1-e.width),y:I(e.y+s,0,1-e.height),width:e.width,height:e.height};let n=e.x,r=e.y,i=e.x+e.width,m=e.y+e.height;return o.includes("w")&&(n=I(n+t,0,i-z)),o.includes("e")&&(i=I(i+t,n+z,1)),o.includes("n")&&(r=I(r+s,0,m-z)),o.includes("s")&&(m=I(m+s,r+z,1)),{x:n,y:r,width:i-n,height:m-r}}function ke(e){let{model:o}=e,t,s=0,n=0,r=0,i=()=>{r=0,t&&o.setCrop(le(t.start,t.edge,(s-t.x0)/t.width,(n-t.y0)/t.height))},m=a=>{if(!t)return;r&&cancelAnimationFrame(r),i(),t=void 0;let l=a.currentTarget;delete l.dataset.dragging,l.hasPointerCapture?.(a.pointerId)&&l.releasePointerCapture(a.pointerId)};return F(()=>{r&&cancelAnimationFrame(r),t=void 0}),d("div",{class:y.crop,tabIndex:0,role:"group","aria-label":"Crop: drag to move, drag an edge or a corner to resize; arrow keys move it, \u21E7 arrow keys resize it",hidden:C([e.settled,o.autoCrop.asReadonly]).pipe(c(([a,l])=>l&&!a)),"data-auto":o.autoCrop.asReadonly.pipe(c(a=>a?"":void 0)),style:{left:o.crop.pipe(c(a=>$(a.x))),top:o.crop.pipe(c(a=>$(a.y))),width:o.crop.pipe(c(a=>$(a.width))),height:o.crop.pipe(c(a=>$(a.height)))},onPointerDown:a=>{if(a.button!==0||t)return;let l=a.currentTarget,v=l.parentElement?.getBoundingClientRect();if(!v?.width||!v.height)return;t={edge:a.target.dataset.edge??"move",width:v.width,height:v.height,start:{...o.crop.value},x0:a.clientX,y0:a.clientY},s=a.clientX,n=a.clientY,l.dataset.dragging="",l.setPointerCapture?.(a.pointerId),a.preventDefault()},onPointerMove:a=>{t&&(s=a.clientX,n=a.clientY,r||(r=requestAnimationFrame(i)))},onPointerUp:m,onPointerCancel:m,onKeyDown:a=>{let l={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[a.key];l&&(a.preventDefault(),o.setCrop(le(o.crop.value,a.shiftKey?"se":"move",l[0]*me,l[1]*me)))},children:Ce.map(a=>d("span",{class:y.handle,"data-edge":a,"aria-hidden":"true"}))})}var D=e=>!e.mode||e.mode==="image",Ie={mode:f.Text("image",{isHidden:!0}),resolution:de(),format:f.MappedStatic("png",{png:f.Group({},{isFlat:!0}),jpeg:f.Group({quality:f.Numeric(.9,{min:0,max:1,step:.01})},{isFlat:!0}),webp:f.Group({quality:f.Numeric(.9,{min:0,max:1,step:.01})},{isFlat:!0})},{options:[["png","PNG"],["jpeg","JPEG"],["webp","WebP"]],hideIf:e=>!D(e)}),transparent:f.Boolean(!1,{hideIf:e=>!D(e)}),axes:f.Boolean(!1,{label:"Axes"})},Ee={hd:[1280,720],"full-hd":[1920,1080],"ultra-hd":[3840,2160],"8k-ultra-hd":[7680,4320]},B={x:0,y:0,width:1,height:1};function ue(e){return{size:e.resolution,format:e.format.name,quality:e.format.name==="png"?.9:e.format.params.quality,transparent:D(e)&&e.transparent,axes:e.axes}}function fe(e,o){let t=e.resolution,s={...o};if(t.name==="viewport")return{size:{name:"viewport"},axes:e.axes,box:s};let{width:n,height:r}=ve(e,void 0);return{size:{name:"custom",params:{width:n,height:r}},axes:e.axes,box:s}}function ve(e,o){let t=e.resolution;if(t.name==="viewport")return o;if(t.name==="custom")return t.params;let[s,n]=Ee[t.name];return{width:s,height:n}}var Ve=250,Pe=500,ge=16/9;function he(e){let o=new ie(Ie),t=g(!0),s=g({...B}),n=g({...B}),r=g({...B}),i=g(void 0),m=g(void 0),a=g(ge),l=g(""),v=g(!1),V=g(!1),S=!1,U=0,M,L=e.api.as({kind:"script"}),q=()=>{let p=o.values.value,u=ve(p,m.value),w=D(p),b=t.value?n.value:s.value;r.set(b),a.set(u?u.width/u.height:ge);let x=u?`${Math.round(u.width*b.width)} \xD7 ${Math.round(u.height*b.height)} px`:"";l.set(u&&w?`${x} \xB7 ${p.format.name.toUpperCase()}`:x)},O=async()=>{if(S||!e.sources.canvas.value||!L.export)return;let p=++U;M?.abort();let u=M=new AbortController,w=await L.export.preview({...ue(o.values.value),crop:t.value?"auto":"none"},{signal:u.signal});if(S||p!==U||!w.ok||!w.value)return;let{dataUri:b,width:x,height:be,crop:ye}=w.value;i.set(`center / 100% 100% no-repeat url("${b}")`),m.set({width:x,height:be}),t.value&&n.set(ye),V.set(!0)},G=t.value,R=[],H=()=>{if(S||R.length)return;R=[t.asReadonly.subscribe(u=>{!u&&G&&s.set({...B}),G=u}),C([o.values,t.asReadonly,s.asReadonly,n.asReadonly,m.asReadonly]).subscribe(q),C([o.values,t.asReadonly,e.sources.canvas,e.sources.structures]).pipe(T(()=>V.set(!1)),W(Ve)).subscribe(()=>{O()})];let p=e.api.export?.sceneChanges;p&&R.push(p.pipe(T(()=>V.set(!1)),Y(Pe)).subscribe(()=>{O()}))},J=()=>{U++,M?.abort(),M=void 0;for(let p of R.splice(0))p.unsubscribe()},X=async(p,u)=>{let w=e.api.export?.[p];if(!(!w||v.value)){v.set(!0);try{let b=t.value?{crop:"auto"}:{crop:"none",box:{...s.value}},x=await w({...ue(o.values.value),...b});x.ok&&u(x.value,x.did)}finally{v.set(!1)}}};return q(),H(),{preview:i.asReadonly,aspect:a.asReadonly,autoCrop:t,settled:V.asReadonly,crop:r.asReadonly,setCrop:p=>{t.set(!1),s.set(p)},size:l.asReadonly,form:o,busy:v.asReadonly,copy:()=>{X("imageCopy",()=>e.notify("Copied the image.","success"))},download:()=>{X("image",p=>{p&&(e.save(p.blob,p.filename),e.notify(`Saved ${p.filename} (${p.width} \xD7 ${p.height}).`,"success"))})},setActive:p=>p?H():J(),dispose(){S=!0,J()}}}var we=e=>Math.round(e*100)/100,E=e=>Array.from(e,we).join(", "),Ae=[["Position",e=>E(e.position)],["FoV norm. position",e=>E(xe(e))],["Target",e=>E(e.target)],["Direction",e=>E(Se(e))],["Up",e=>E(e.up)],["Distance",e=>`${e.distance} \xC5`],["Radius",e=>`${we(e.radius)} \xC5`],["Field of view",e=>`${e.fov}\xB0 (${e.mode})`]];function xe(e){return Q(h.ofArray(e.target),h.ofArray(e.position),e.mode,e.fov*Math.PI/180)}function Se(e){return h.normalize(h(),h.sub(h(),h.ofArray(e.target),h.ofArray(e.position)))}function Me(e){let o=t=>`[${E(t)}]`;return`{
  "position": ${o(xe(e))},
  "target": ${o(e.target)},
  "up": ${o(e.up)}
}`}function Re(e){let o=g(void 0),t=()=>{let n=o.value;!n||typeof navigator>"u"||!navigator.clipboard||navigator.clipboard.writeText(Me(n)).then(()=>e.managers.notifications.post("Copied the camera as MolViewSpec JSON.","success"),()=>e.managers.notifications.post("Could not copy to the clipboard.","error"))};return e.api.export&&N(e.api.export.camera,n=>o.set(n)),k("div",{style:"display: grid; gap: var(--msp-space-3); min-width: 0",children:[d("div",{style:"display: grid; grid-template-columns: auto 1fr; gap: var(--msp-space-1) var(--msp-space-3); font-size: var(--msp-font-size-sm); min-width: 0",children:Ae.map(([n,r])=>k(_,{children:[d("span",{style:"color: var(--msp-color-text-muted)",children:n}),d("span",{style:"font-family: var(--msp-font-mono); white-space: nowrap; overflow: hidden",ref:i=>N(o.asReadonly,m=>i.textContent=m?r(m):"\u2014")})]}))}),d("div",{style:"display: flex; flex-wrap: wrap; gap: var(--msp-space-2)",children:d(re,{size:"sm",icon:d(oe,{name:"copy"}),title:"Copy the camera as MolViewSpec JSON",onClick:t,children:"Copy MVS camera"})})]})}function eo(e){return{sections:[{id:"export-image.section.image",slot:"export",title:"Image",heading:o=>o.sections("export.picture").pipe(c(t=>t.length?"Image & animation":"Image"),P()),icon:"camera",order:0,keywords:["screenshot","png","picture","copy","animation","video","movie"],open:!0,render:K(({ctx:o})=>{let t=he({api:e.api,sources:e.sources,notify:(r,i)=>e.managers.notifications.post(r,i),save:pe});Z(r=>t.setActive(r)),F(()=>t.dispose()),o.focus&&t.form.set("mode",o.focus);let s=o.shell.sections("export.picture"),n={get:()=>fe(t.form.values.value,t.crop.value)};return d(ce,{model:t,kinds:s.pipe(c(r=>r.map(i=>({id:i.id,title:i.title,icon:i.icon})))),kind:r=>d(A,{when:s.pipe(c(i=>i.find(m=>m.id===r)),P()),children:i=>d(se,{renderer:i.render,ctx:{shell:o.shell,subject:n}})})})})},{id:"export-image.section.camera",slot:"export",title:"Camera",icon:"move-3d",order:.5,keywords:["camera","position","target","direction","mvs","molviewspec"],render:K(()=>Re(e))}]}}export{eo as exportImageUI};
