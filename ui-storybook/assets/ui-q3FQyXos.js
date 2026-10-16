import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{_ as t,f as n,g as r,i,n as a,r as o,t as s}from"./jsx-runtime-DzTO5r4L.js";import{n as c,r as l}from"./registry-D35yV2Tb.js";import{d as u,f as d,t as f}from"./params-form-BiSG3JZ9.js";import{n as p,t as m}from"./debounceTime-D_qV2Azt.js";import{c as h,i as g,l as _,n as v}from"./control-flow-2XcFB3wB.js";import{n as y,t as b}from"./map-COHPbqb4.js";import{n as x,t as S}from"./combineLatest-nINHdI9G.js";import{A as C,k as w,s as T,w as E}from"./shell-view--7tL82cI.js";import{c as ee,i as te,l as ne,n as re}from"./operations-C6WdD1po.js";import{n as D,t as O}from"./distinctUntilChanged-Bi0nDGSG.js";import{n as ie,r as k}from"./observable-state-8hMFvtS9.js";import{t as ae}from"./icon-Fyk1xIJy.js";import{Ct as A,n as oe,t as j}from"./param-definition-OHPHmB1q.js";import{t as se}from"./button-oplfrRqY.js";import{et as ce}from"./geometry-BlnjcNLD.js";import{t as le}from"./action-footer-CNxDsTvQ.js";import{t as ue}from"./choices-DzH98RgC.js";import{t as M}from"./src-CNHrM0KV.js";import{t as de}from"./download-DeieNi94.js";import{n as fe,r as pe}from"./camera-tygnDbyZ.js";var N;function P(){return(P=e((()=>{l(),N={autoCrop:`msp-viewer-image-export-autoCrop`,crop:`msp-viewer-image-export-crop`,export:`msp-viewer-image-export-export`,handle:`msp-viewer-image-export-handle`,preview:`msp-viewer-image-export-preview`,stage:`msp-viewer-image-export-stage`},c(`viewer/views/export/image-export.module.css`,`@layer msp.components {
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
`)})))()}function me(e){let{model:t}=e,n=t.settled??_(!0),r=t.form.values.pipe(y(e=>e.mode||`image`),O()),i=e.kinds??_([]);return o(`div`,{class:N.export,children:[a(v,{when:i.pipe(y(e=>e.length?e:void 0)),children:e=>a(ue,{choices:[{id:`image`,label:`Image`,icon:`image`},...e.map(e=>({id:e.id,label:e.title,...e.icon?{icon:e.icon}:{}}))],active:r,onPick:e=>t.form.set(`mode`,e)})}),a(`div`,{class:N.stage,children:o(`div`,{class:N.preview,style:{"aspect-ratio":t.aspect.pipe(y(e=>`${e}`)),background:t.preview.pipe(y(e=>e??`var(--msp-color-control)`))},children:[a(he,{model:t,settled:n}),a(`button`,{type:`button`,class:N.autoCrop,"aria-pressed":S([t.autoCrop.asReadonly,n]).pipe(y(([e,t])=>e&&t)),title:`Crop to the visible content`,onClick:()=>t.autoCrop.set(!t.autoCrop.value),children:a(`span`,{children:`Auto-crop`})})]})}),a(f,{form:t.form}),a(v,{when:r,children:n=>n===`image`||!e.kind?a(le,{icon:`download`,label:`Download`,info:t.size,busy:t.busy,secondary:{icon:`copy`,label:`Copy`,onClick:()=>t.copy()},onReset:()=>{t.form.reset(),t.form.set(`mode`,n)},onApply:()=>t.download()}):e.kind(n)})]})}function F(e,t,n,r){if(t===`move`)return{x:B(e.x+n,0,1-e.width),y:B(e.y+r,0,1-e.height),width:e.width,height:e.height};let i=e.x,a=e.y,o=e.x+e.width,s=e.y+e.height;return t.includes(`w`)&&(i=B(i+n,0,o-I)),t.includes(`e`)&&(o=B(o+n,i+I,1)),t.includes(`n`)&&(a=B(a+r,0,s-I)),t.includes(`s`)&&(s=B(s+r,a+I,1)),{x:i,y:a,width:o-i,height:s-a}}function he(e){let{model:n}=e,r,i=0,o=0,s=0,c=()=>{s=0,r&&n.setCrop(F(r.start,r.edge,(i-r.x0)/r.width,(o-r.y0)/r.height))},l=e=>{if(!r)return;s&&cancelAnimationFrame(s),c(),r=void 0;let t=e.currentTarget;delete t.dataset.dragging,t.hasPointerCapture?.(e.pointerId)&&t.releasePointerCapture(e.pointerId)};return t(()=>{s&&cancelAnimationFrame(s),r=void 0}),a(`div`,{class:N.crop,tabIndex:0,role:`group`,"aria-label":`Crop: drag to move, drag an edge or a corner to resize; arrow keys move it, ⇧ arrow keys resize it`,hidden:S([e.settled,n.autoCrop.asReadonly]).pipe(y(([e,t])=>t&&!e)),"data-auto":n.autoCrop.asReadonly.pipe(y(e=>e?``:void 0)),style:{left:n.crop.pipe(y(e=>z(e.x))),top:n.crop.pipe(y(e=>z(e.y))),width:n.crop.pipe(y(e=>z(e.width))),height:n.crop.pipe(y(e=>z(e.height)))},onPointerDown:e=>{if(e.button!==0||r)return;let t=e.currentTarget,a=t.parentElement?.getBoundingClientRect();a?.width&&a.height&&(r={edge:e.target.dataset.edge??`move`,width:a.width,height:a.height,start:{...n.crop.value},x0:e.clientX,y0:e.clientY},i=e.clientX,o=e.clientY,t.dataset.dragging=``,t.setPointerCapture?.(e.pointerId),e.preventDefault())},onPointerMove:e=>{r&&(i=e.clientX,o=e.clientY,s||=requestAnimationFrame(c))},onPointerUp:l,onPointerCancel:l,onKeyDown:e=>{let t={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[e.key];t&&(e.preventDefault(),n.setCrop(F(n.crop.value,e.shiftKey?`se`:`move`,t[0]*L,t[1]*L)))},children:R.map(e=>a(`span`,{class:N.handle,"data-edge":e,"aria-hidden":`true`}))})}var I,L,R,z,B;function V(){return(V=e((()=>{x(),D(),b(),h(),M(),g(),P(),s(),I=.05,L=.01,R=[`n`,`s`,`e`,`w`,`ne`,`nw`,`se`,`sw`],z=e=>`${(e*100).toFixed(2)}%`,B=(e,t,n)=>Math.min(n,Math.max(t,e))})))()}function H(e){return{size:e.resolution,format:e.format.name,quality:e.format.name===`png`?.9:e.format.params.quality,transparent:W(e)&&e.transparent,axes:e.axes}}function ge(e,t){let n=e.resolution,r={...t};if(n.name===`viewport`)return{size:{name:`viewport`},axes:e.axes,box:r};let{width:i,height:a}=U(e,void 0);return{size:{name:`custom`,params:{width:i,height:a}},axes:e.axes,box:r}}function U(e,t){let n=e.resolution;if(n.name===`viewport`)return t;if(n.name===`custom`)return n.params;let[r,i]=K[n.name];return{width:r,height:i}}function _e(e){let t=new u(G),n=k(!0),r=k({...q}),i=k({...q}),a=k({...q}),o=k(void 0),s=k(void 0),c=k(X),l=k(``),d=k(!1),f=k(!1),p=!1,h=0,g,_=e.api.as({kind:`script`}),v=()=>{let e=t.values.value,o=U(e,s.value),u=W(e),d=n.value?i.value:r.value;a.set(d),c.set(o?o.width/o.height:X);let f=o?`${Math.round(o.width*d.width)} × ${Math.round(o.height*d.height)} px`:``;l.set(o&&u?`${f} · ${e.format.name.toUpperCase()}`:f)},y=async()=>{if(p||!e.sources.canvas.value||!_.export)return;let r=++h;g?.abort();let a=g=new AbortController,c=await _.export.preview({...H(t.values.value),crop:n.value?`auto`:`none`},{signal:a.signal});if(p||r!==h||!c.ok||!c.value)return;let{dataUri:l,width:u,height:d,crop:m}=c.value;o.set(`center / 100% 100% no-repeat url("${l}")`),s.set({width:u,height:d}),n.value&&i.set(m),f.set(!0)},b=n.value,x=[],w=()=>{if(p||x.length)return;x=[n.asReadonly.subscribe(e=>{!e&&b&&r.set({...q}),b=e}),S([t.values,n.asReadonly,r.asReadonly,i.asReadonly,s.asReadonly]).subscribe(v),S([t.values,n.asReadonly,e.sources.canvas,e.sources.structures]).pipe(C(()=>f.set(!1)),m(J)).subscribe(()=>void y())];let a=e.api.export?.sceneChanges;a&&x.push(a.pipe(C(()=>f.set(!1)),ee(Y)).subscribe(()=>void y()))},T=()=>{h++,g?.abort(),g=void 0;for(let e of x.splice(0))e.unsubscribe()},E=async(i,a)=>{let o=e.api.export?.[i];if(o&&!d.value){d.set(!0);try{let e=n.value?{crop:`auto`}:{crop:`none`,box:{...r.value}},i=await o({...H(t.values.value),...e});i.ok&&a(i.value,i.did)}finally{d.set(!1)}}};return v(),w(),{preview:o.asReadonly,aspect:c.asReadonly,autoCrop:n,settled:f.asReadonly,crop:a.asReadonly,setCrop:e=>{n.set(!1),r.set(e)},size:l.asReadonly,form:t,busy:d.asReadonly,copy:()=>void E(`imageCopy`,()=>e.notify(`Copied the image.`,`success`)),download:()=>void E(`image`,t=>{t&&(e.save(t.blob,t.filename),e.notify(`Saved ${t.filename} (${t.width} × ${t.height}).`,`success`))}),setActive:e=>e?w():T(),dispose(){p=!0,T()}}}var W,G,K,q,J,Y,X;function ve(){return(ve=e((()=>{oe(),d(),ie(),ne(),x(),p(),w(),te(),W=e=>!e.mode||e.mode===`image`,G={mode:j.Text(`image`,{isHidden:!0}),resolution:re(),format:j.MappedStatic(`png`,{png:j.Group({},{isFlat:!0}),jpeg:j.Group({quality:j.Numeric(.9,{min:0,max:1,step:.01})},{isFlat:!0}),webp:j.Group({quality:j.Numeric(.9,{min:0,max:1,step:.01})},{isFlat:!0})},{options:[[`png`,`PNG`],[`jpeg`,`JPEG`],[`webp`,`WebP`]],hideIf:e=>!W(e)}),transparent:j.Boolean(!1,{hideIf:e=>!W(e)}),axes:j.Boolean(!1,{label:`Axes`})},K={hd:[1280,720],"full-hd":[1920,1080],"ultra-hd":[3840,2160],"8k-ultra-hd":[7680,4320]},q={x:0,y:0,width:1,height:1},J=250,Y=500,X=16/9})))()}function ye(e){return fe(A.ofArray(e.target),A.ofArray(e.position),e.mode,e.fov*Math.PI/180)}function be(e){return A.normalize(A(),A.sub(A(),A.ofArray(e.target),A.ofArray(e.position)))}function xe(e){let t=e=>`[${Q(e)}]`;return`{\n  "position": ${t(ye(e))},\n  "target": ${t(e.target)},\n  "up": ${t(e.up)}\n}`}function Se(e){let t=k(void 0);return e.api.export&&n(e.api.export.camera,e=>t.set(e)),o(`div`,{style:`display: grid; gap: var(--msp-space-3); min-width: 0`,children:[a(`div`,{style:`display: grid; grid-template-columns: auto 1fr; gap: var(--msp-space-1) var(--msp-space-3); font-size: var(--msp-font-size-sm); min-width: 0`,children:we.map(([e,r])=>o(i,{children:[a(`span`,{style:`color: var(--msp-color-text-muted)`,children:e}),a(`span`,{style:`font-family: var(--msp-font-mono); white-space: nowrap; overflow: hidden`,ref:e=>n(t.asReadonly,t=>e.textContent=t?r(t):`—`)})]}))}),a(`div`,{style:`display: flex; flex-wrap: wrap; gap: var(--msp-space-2)`,children:a(se,{size:`sm`,icon:a(ae,{name:`copy`}),title:`Copy the camera as MolViewSpec JSON`,onClick:()=>{let n=t.value;n&&typeof navigator<`u`&&navigator.clipboard&&navigator.clipboard.writeText(xe(n)).then(()=>e.managers.notifications.post(`Copied the camera as MolViewSpec JSON.`,`success`),()=>e.managers.notifications.post(`Could not copy to the clipboard.`,`error`))},children:`Copy MVS camera`})})]})}function Ce(e){return{sections:[{id:`export-image.section.image`,slot:`export`,title:`Image`,heading:e=>e.sections(`export.picture`).pipe(y(e=>e.length?`Image & animation`:`Image`),O()),icon:`camera`,order:0,keywords:[`screenshot`,`png`,`picture`,`copy`,`animation`,`video`,`movie`],open:!0,render:E(({ctx:n})=>{let i=_e({api:e.api,sources:e.sources,notify:(t,n)=>e.managers.notifications.post(t,n),save:de});r(e=>i.setActive(e)),t(()=>i.dispose()),n.focus&&i.form.set(`mode`,n.focus);let o=n.shell.sections(`export.picture`),s={get:()=>ge(i.form.values.value,i.crop.value)};return a(me,{model:i,kinds:o.pipe(y(e=>e.map(e=>({id:e.id,title:e.title,icon:e.icon})))),kind:e=>a(v,{when:o.pipe(y(t=>t.find(t=>t.id===e)),O()),children:e=>a(T,{renderer:e.render,ctx:{shell:n.shell,subject:s}})})})})},{id:`export-image.section.camera`,slot:`export`,title:`Camera`,icon:`move-3d`,order:.5,keywords:[`camera`,`position`,`target`,`direction`,`mvs`,`molviewspec`],render:E(()=>Se(e))}]}}var Z,Q,we;function $(){return($=e((()=>{M(),D(),b(),ce(),pe(),V(),ve(),s(),Z=e=>Math.round(e*100)/100,Q=e=>Array.from(e,Z).join(`, `),we=[[`Position`,e=>Q(e.position)],[`FoV norm. position`,e=>Q(ye(e))],[`Target`,e=>Q(e.target)],[`Direction`,e=>Q(be(e))],[`Up`,e=>Q(e.up)],[`Distance`,e=>`${e.distance} Å`],[`Radius`,e=>`${Z(e.radius)} Å`],[`Field of view`,e=>`${e.fov}° (${e.mode})`]]})))()}$();export{Ce as exportImageUI};