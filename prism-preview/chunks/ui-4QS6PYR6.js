import{b as Y,e as le}from"./chunk-NFGLAH7F.js";import"./chunk-7JYDBM73.js";import{a as me}from"./chunk-B4OPEUZD.js";import"./chunk-KE4W75UO.js";import"./chunk-NGWOHHNQ.js";import"./chunk-W4W5JYP3.js";import"./chunk-AOCCRDWK.js";import"./chunk-OV2OLKVV.js";import"./chunk-73TVMDCL.js";import"./chunk-KTUDDTFK.js";import"./chunk-WPXA4PJ2.js";import"./chunk-6IODVF5J.js";import"./chunk-3EGK4OQW.js";import"./chunk-CXZDK4AO.js";import"./chunk-IW73EPPS.js";import"./chunk-55INLPL2.js";import"./chunk-ZHHE2XG3.js";import"./chunk-CYUSGBGU.js";import"./chunk-VIA7CHLF.js";import{A as U,C as te,F as re,G as d,H as k,I as ae,J as ie,K as se,X as ne,ca as pe,f as _,h as W,i as K,k as Q,l as Z,m as ee,o as I,ra as de,u as oe}from"./chunk-O5O2345H.js";import"./chunk-KHBNYRDQ.js";import{e as j,f as c,i as g}from"./chunk-I5FRM7IT.js";import{j as B,n as O,o as X,w as D}from"./chunk-FY6Y25VJ.js";import{S as v,pb as f}from"./chunk-CZB3H7J7.js";import"./chunk-DCANE7XH.js";var C={autoCrop:"msp-viewer-image-export-autoCrop",crop:"msp-viewer-image-export-crop",export:"msp-viewer-image-export-export",handle:"msp-viewer-image-export-handle",preview:"msp-viewer-image-export-preview",stage:"msp-viewer-image-export-stage"};te("viewer/views/export/image-export.module.css",`@layer msp.components {
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
`);var Se=new j(!0).asReadonly,Ve=new j([]).asReadonly;function ge(e){let{model:o}=e,t=o.settled??Se,n=c(o.form.values,r=>r.mode||"image"),a=e.kinds??Ve;return k("div",{class:C.export,children:[d(I,{when:c(a,r=>r.length?r:void 0),children:r=>d(se,{choices:[{id:"image",label:"Image",icon:"image"},...r.map(s=>({id:s.id,label:s.title,...s.icon?{icon:s.icon}:{}}))],active:n,onPick:s=>o.form.set("mode",s)})}),d("div",{class:C.stage,children:k("div",{class:C.preview,style:{"aspect-ratio":c(o.aspect,r=>`${r}`),background:c(o.preview,r=>r??"var(--msp-color-control)")},children:[d(Re,{model:o,settled:t}),d("button",{type:"button",class:C.autoCrop,"aria-pressed":c([o.autoCrop.asReadonly,t],(r,s)=>r&&s),title:"Crop to the visible content",onClick:()=>o.autoCrop.set(!o.autoCrop.value),children:d("span",{children:"Auto-crop"})})]})}),d(pe,{form:o.form}),d(I,{when:n,children:r=>r==="image"||!e.kind?d(ae,{icon:"download",label:"Download",info:o.size,busy:o.busy,secondary:{icon:"copy",label:"Copy",onClick:()=>o.copy()},onReset:()=>{o.form.reset(),o.form.set("mode",r)},onApply:()=>o.download()}):e.kind(r)})]})}var M=.05,ce=.01,Ie=["n","s","e","w","ne","nw","se","sw"],z=e=>`${(e*100).toFixed(2)}%`,S=(e,o,t)=>Math.min(t,Math.max(o,e));function ue(e,o,t,n){if(o==="move")return{x:S(e.x+t,0,1-e.width),y:S(e.y+n,0,1-e.height),width:e.width,height:e.height};let a=e.x,r=e.y,s=e.x+e.width,m=e.y+e.height;return o.includes("w")&&(a=S(a+t,0,s-M)),o.includes("e")&&(s=S(s+t,a+M,1)),o.includes("n")&&(r=S(r+n,0,m-M)),o.includes("s")&&(m=S(m+n,r+M,1)),{x:a,y:r,width:s-a,height:m-r}}function Re(e){let{model:o}=e,t=0,n=0,a,r=Z(0),s=0,m=()=>{a&&o.setCrop(ue(a.start,a.edge,(t-a.x0)/a.width,(n-a.y0)/a.height))};Q(r,m);let h=d("div",{class:C.crop,tabIndex:0,role:"group","aria-label":"Crop: drag to move, drag an edge or a corner to resize; arrow keys move it, \u21E7 arrow keys resize it",hidden:c([e.settled,o.autoCrop.asReadonly],(i,l)=>l&&!i),"data-auto":c(o.autoCrop.asReadonly,i=>i?"":void 0),style:{left:c(o.crop,i=>z(i.x)),top:c(o.crop,i=>z(i.y)),width:c(o.crop,i=>z(i.width)),height:c(o.crop,i=>z(i.height))},onKeyDown:i=>{let l={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[i.key];l&&(i.preventDefault(),o.setCrop(ue(o.crop.value,i.shiftKey?"se":"move",l[0]*ce,l[1]*ce)))},children:Ie.map(i=>d("span",{class:C.handle,"data-edge":i,"aria-hidden":"true"}))});return oe(h,{start:i=>{if(i.button!==0)return;let l=h.parentElement?.getBoundingClientRect();return!l?.width||!l.height?void 0:(a={edge:i.target.dataset.edge??"move",width:l.width,height:l.height,start:{...o.crop.value},x0:i.clientX,y0:i.clientY},t=i.clientX,n=i.clientY,h.dataset.dragging="",i.preventDefault(),a)},move:i=>{t=i.clientX,n=i.clientY,r.offer(++s)},end:(i,l,y)=>{y&&m(),a=void 0,delete h.dataset.dragging}}),h}var F=e=>!e.mode||e.mode==="image",Ee={mode:f.Text("image",{isHidden:!0}),resolution:le(),format:f.MappedStatic("png",{png:f.Group({},{isFlat:!0}),jpeg:f.Group({quality:f.Numeric(.9,{min:0,max:1,step:.01})},{isFlat:!0}),webp:f.Group({quality:f.Numeric(.9,{min:0,max:1,step:.01})},{isFlat:!0})},{options:[["png","PNG"],["jpeg","JPEG"],["webp","WebP"]],hideIf:e=>!F(e)}),transparent:f.Boolean(!1,{hideIf:e=>!F(e)}),axes:f.Boolean(!1,{label:"Axes"})},Ae={hd:[1280,720],"full-hd":[1920,1080],"ultra-hd":[3840,2160],"8k-ultra-hd":[7680,4320]},P={x:0,y:0,width:1,height:1};function fe(e){return{size:e.resolution,format:e.format.name,quality:e.format.name==="png"?.9:e.format.params.quality,transparent:F(e)&&e.transparent,axes:e.axes}}function he(e,o){let t=e.resolution,n={...o};if(t.name==="viewport")return{size:{name:"viewport"},axes:e.axes,box:n};let{width:a,height:r}=we(e,void 0);return{size:{name:"custom",params:{width:a,height:r}},axes:e.axes,box:n}}function we(e,o){let t=e.resolution;if(t.name==="viewport")return o;if(t.name==="custom")return t.params;let[n,a]=Ae[t.name];return{width:n,height:a}}var Me=250,ze=500,ve=16/9;function xe(e){let o=new ne(Ee),t=g(!0),n=g({...P}),a=g({...P}),r=g({...P}),s=g(void 0),m=g(void 0),h=g(ve),i=g(""),l=g(!1),y=g(!1),R=!1,$=0,E,N=e.api.as({kind:"script"}),T=()=>{let p=o.values.value,u=we(p,m.value),w=F(p),b=t.value?a.value:n.value;r.set(b),h.set(u?u.width/u.height:ve);let x=u?`${Math.round(u.width*b.width)} \xD7 ${Math.round(u.height*b.height)} px`:"";i.set(u&&w?`${x} \xB7 ${p.format.name.toUpperCase()}`:x)},q=async()=>{if(R||!e.sources.canvas.value||!N.export)return;let p=++$;E?.abort();let u=E=new AbortController,w=await N.export.preview({...fe(o.values.value),crop:t.value?"auto":"none"},{signal:u.signal});if(R||p!==$||!w.ok||!w.value)return;let{dataUri:b,width:x,height:Ce,crop:ke}=w.value;s.set(`center / 100% 100% no-repeat url("${b}")`),m.set({width:x,height:Ce}),t.value&&a.set(ke),y.set(!0)},L=t.value,A=[],G=()=>{if(R||A.length)return;A=[t.asReadonly.subscribe(u=>{!u&&L&&n.set({...P}),L=u}),B([o.values,t.asReadonly,n.asReadonly,a.asReadonly,m.asReadonly]).subscribe(T),B([o.values,t.asReadonly,e.sources.canvas,e.sources.structures]).pipe(D(()=>y.set(!1)),X(Me)).subscribe(()=>{q()})];let p=e.api.export?.sceneChanges;p&&A.push(p.pipe(D(()=>y.set(!1)),O(ze)).subscribe(()=>{q()}))},H=()=>{$++,E?.abort(),E=void 0;for(let p of A.splice(0))p.unsubscribe()},J=async(p,u)=>{let w=e.api.export?.[p];if(!(!w||l.value)){l.set(!0);try{let b=t.value?{crop:"auto"}:{crop:"none",box:{...n.value}},x=await w({...fe(o.values.value),...b});x.ok&&u(x.value,x.did)}finally{l.set(!1)}}};return T(),G(),{preview:s.asReadonly,aspect:h.asReadonly,autoCrop:t,settled:y.asReadonly,crop:r.asReadonly,setCrop:p=>{t.set(!1),n.set(p)},size:i.asReadonly,form:o,busy:l.asReadonly,copy:()=>{J("imageCopy",()=>e.notify("Copied the image.","success"))},download:()=>{J("image",p=>{p&&(e.save(p.blob,p.filename),e.notify(`Saved ${p.filename} (${p.width} \xD7 ${p.height}).`,"success"))})},setActive:p=>p?G():H(),dispose(){R=!0,H()}}}var ye=e=>Math.round(e*100)/100,V=e=>Array.from(e,ye).join(", "),Pe=[["Position",e=>V(e.position)],["FoV norm. position",e=>V(be(e))],["Target",e=>V(e.target)],["Direction",e=>V(Fe(e))],["Up",e=>V(e.up)],["Distance",e=>`${e.distance} \xC5`],["Radius",e=>`${ye(e.radius)} \xC5`],["Field of view",e=>`${e.fov}\xB0 (${e.mode})`]];function be(e){return Y(v.ofArray(e.target),v.ofArray(e.position),e.mode,e.fov*Math.PI/180)}function Fe(e){return v.normalize(v(),v.sub(v(),v.ofArray(e.target),v.ofArray(e.position)))}function $e(e){let o=t=>`[${V(t)}]`;return`{
  "position": ${o(be(e))},
  "target": ${o(e.target)},
  "up": ${o(e.up)}
}`}function Be(e){let o=g(void 0),t=()=>{let a=o.value;!a||typeof navigator>"u"||!navigator.clipboard||navigator.clipboard.writeText($e(a)).then(()=>e.managers.notifications.post("Copied the camera as MolViewSpec JSON.","success"),()=>e.managers.notifications.post("Could not copy to the clipboard.","error"))};return e.api.export&&K(e.api.export.camera,a=>o.set(a)),k("div",{style:"display: grid; gap: var(--msp-space-3); min-width: 0",children:[d("div",{style:"display: grid; grid-template-columns: auto 1fr; gap: var(--msp-space-1) var(--msp-space-3); font-size: var(--msp-font-size-sm); min-width: 0",children:Pe.map(([a,r])=>k(ee,{children:[d("span",{style:"color: var(--msp-color-text-muted)",children:a}),d("span",{style:"font-family: var(--msp-font-mono); white-space: nowrap; overflow: hidden",ref:s=>K(o.asReadonly,m=>s.textContent=m?r(m):"\u2014")})]}))}),d("div",{style:"display: flex; flex-wrap: wrap; gap: var(--msp-space-2)",children:d(ie,{size:"sm",icon:d(re,{name:"copy"}),title:"Copy the camera as MolViewSpec JSON",onClick:t,children:"Copy MVS camera"})})]})}function so(e){return{sections:[{id:"export-image.section.image",slot:"export",title:"Image",heading:o=>c(o.sections("export.picture"),t=>t.length?"Image & animation":"Image"),icon:"camera",order:0,keywords:["screenshot","png","picture","copy","animation","video","movie"],open:!0,render:U(({ctx:o})=>{let t=xe({api:e.api,sources:e.sources,notify:(r,s)=>e.managers.notifications.post(r,s),save:me});W(r=>t.setActive(r)),_(()=>t.dispose()),o.focus&&t.form.set("mode",o.focus);let n=o.shell.sections("export.picture"),a={get:()=>he(t.form.values.value,t.crop.value)};return d(ge,{model:t,kinds:c(n,r=>r.map(s=>({id:s.id,title:s.title,icon:s.icon}))),kind:r=>d(I,{when:c(n,s=>s.find(m=>m.id===r)),children:s=>d(de,{renderer:s.render,ctx:{shell:o.shell,subject:a}})})})})},{id:"export-image.section.camera",slot:"export",title:"Camera",icon:"move-3d",order:.5,keywords:["camera","position","target","direction","mvs","molviewspec"],render:U(()=>Be(e))}]}}export{so as exportImageUI};
