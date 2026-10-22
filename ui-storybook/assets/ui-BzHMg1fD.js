import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{S as t,b as n,g as r,i,m as a,n as o,r as s,t as c,v as l,x as u}from"./jsx-runtime-Dut-27nP.js";import{n as d,r as f}from"./registry-D35yV2Tb.js";import{r as p,w as m}from"./Observable-CzLAfIvT.js";import{i as h,n as g,r as _,t as v}from"./OperatorSubscriber-C8tumhdd.js";import{i as y,n as b}from"./control-flow-BGkEkAG8.js";import{n as x,t as ee}from"./combineLatest-DhE-IiGd.js";import{c as te,i as S,l as ne,n as re}from"./operations-DUMO8ZMF.js";import{n as ie,t as ae}from"./debounceTime-extAbTNw.js";import{b as C,v as w,x as T}from"./work-queue-DoxU-HjK.js";import{T as E,c as oe}from"./shell-view-4fMpWl4I.js";import{n as D,t as se}from"./observable-state-C67cgDrf.js";import{t as ce}from"./icon-CrwnZGU9.js";import{i as le,t as ue}from"./scoped-CYrGtqEo.js";import{d as de,f as fe,t as pe}from"./params-form-BQ9MddDI.js";import{Ct as O,n as me,t as k}from"./param-definition-xUqfTrAa.js";import{t as he}from"./button-C9pAumBZ.js";import{ba as ge}from"./structure-xg41b0Vn.js";import{t as _e}from"./action-footer-H5OADnJ2.js";import{t as A}from"./src-2NOkYUjT.js";import{t as ve}from"./choices-4VYZA6Ze.js";import{t as ye}from"./download-DeieNi94.js";import{n as be,r as xe}from"./camera-BfTrzw7r.js";function j(e,t,n){var r=m(e)||t||n?{next:e,error:t,complete:n}:e;return r?h(function(e,t){var n;(n=r.subscribe)==null||n.call(r);var i=!0;e.subscribe(v(t,function(e){var n;(n=r.next)==null||n.call(r,e),t.next(e)},function(){var e;i=!1,(e=r.complete)==null||e.call(r),t.complete()},function(e){var n;i=!1,(n=r.error)==null||n.call(r,e),t.error(e)},function(){var e,t;i&&((e=r.unsubscribe)==null||e.call(r)),(t=r.finalize)==null||t.call(r)}))}):p}function M(){return(M=e((()=>{_(),g()})))()}var N;function P(){return(P=e((()=>{f(),N={autoCrop:`msp-viewer-image-export-autoCrop`,crop:`msp-viewer-image-export-crop`,export:`msp-viewer-image-export-export`,handle:`msp-viewer-image-export-handle`,preview:`msp-viewer-image-export-preview`,stage:`msp-viewer-image-export-stage`},d(`viewer/views/export/image-export.module.css`,`@layer msp.components {
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
`)})))()}function Se(e){let{model:t}=e,n=t.settled??I,r=C(t.form.values,e=>e.mode||`image`),i=e.kinds??L;return s(`div`,{class:N.export,children:[o(b,{when:C(i,e=>e.length?e:void 0),children:e=>o(ve,{choices:[{id:`image`,label:`Image`,icon:`image`},...e.map(e=>({id:e.id,label:e.title,...e.icon?{icon:e.icon}:{}}))],active:r,onPick:e=>t.form.set(`mode`,e)})}),o(`div`,{class:N.stage,children:s(`div`,{class:N.preview,style:{"aspect-ratio":C(t.aspect,e=>`${e}`),background:C(t.preview,e=>e??`var(--msp-color-control)`)},children:[o(Ce,{model:t,settled:n}),o(`button`,{type:`button`,class:N.autoCrop,"aria-pressed":C([t.autoCrop.asReadonly,n],(e,t)=>e&&t),title:`Crop to the visible content`,onClick:()=>t.autoCrop.set(!t.autoCrop.value),children:o(`span`,{children:`Auto-crop`})})]})}),o(pe,{form:t.form}),o(b,{when:r,children:n=>n===`image`||!e.kind?o(_e,{icon:`download`,label:`Download`,info:t.size,busy:t.busy,secondary:{icon:`copy`,label:`Copy`,onClick:()=>t.copy()},onReset:()=>{t.form.reset(),t.form.set(`mode`,n)},onApply:()=>t.download()}):e.kind(n)})]})}function F(e,t,n,r){if(t===`move`)return{x:H(e.x+n,0,1-e.width),y:H(e.y+r,0,1-e.height),width:e.width,height:e.height};let i=e.x,a=e.y,o=e.x+e.width,s=e.y+e.height;return t.includes(`w`)&&(i=H(i+n,0,o-R)),t.includes(`e`)&&(o=H(o+n,i+R,1)),t.includes(`n`)&&(a=H(a+r,0,s-R)),t.includes(`s`)&&(s=H(s+r,a+R,1)),{x:i,y:a,width:o-i,height:s-a}}function Ce(e){let{model:t}=e,n=0,i=0,a,s=l(0),c=0,u=()=>{a&&t.setCrop(F(a.start,a.edge,(n-a.x0)/a.width,(i-a.y0)/a.height))};r(s,u);let d=o(`div`,{class:N.crop,tabIndex:0,role:`group`,"aria-label":`Crop: drag to move, drag an edge or a corner to resize; arrow keys move it, ⇧ arrow keys resize it`,hidden:C([e.settled,t.autoCrop.asReadonly],(e,t)=>t&&!e),"data-auto":C(t.autoCrop.asReadonly,e=>e?``:void 0),style:{left:C(t.crop,e=>V(e.x)),top:C(t.crop,e=>V(e.y)),width:C(t.crop,e=>V(e.width)),height:C(t.crop,e=>V(e.height))},onKeyDown:e=>{let n={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[e.key];n&&(e.preventDefault(),t.setCrop(F(t.crop.value,e.shiftKey?`se`:`move`,n[0]*z,n[1]*z)))},children:B.map(e=>o(`span`,{class:N.handle,"data-edge":e,"aria-hidden":`true`}))});return ue(d,{start:e=>{if(e.button!==0)return;let r=d.parentElement?.getBoundingClientRect();if(r?.width&&r.height)return a={edge:e.target.dataset.edge??`move`,width:r.width,height:r.height,start:{...t.crop.value},x0:e.clientX,y0:e.clientY},n=e.clientX,i=e.clientY,d.dataset.dragging=``,e.preventDefault(),a},move:e=>{n=e.clientX,i=e.clientY,s.offer(++c)},end:(e,t,n)=>{n&&u(),a=void 0,delete d.dataset.dragging}}),d}var I,L,R,z,B,V,H;function U(){return(U=e((()=>{A(),y(),n(),le(),T(),P(),c(),I=new w(!0).asReadonly,L=new w([]).asReadonly,R=.05,z=.01,B=[`n`,`s`,`e`,`w`,`ne`,`nw`,`se`,`sw`],V=e=>`${(e*100).toFixed(2)}%`,H=(e,t,n)=>Math.min(n,Math.max(t,e))})))()}function W(e){return{size:e.resolution,format:e.format.name,quality:e.format.name===`png`?.9:e.format.params.quality,transparent:K(e)&&e.transparent,axes:e.axes}}function we(e,t){let n=e.resolution,r={...t};if(n.name===`viewport`)return{size:{name:`viewport`},axes:e.axes,box:r};let{width:i,height:a}=G(e,void 0);return{size:{name:`custom`,params:{width:i,height:a}},axes:e.axes,box:r}}function G(e,t){let n=e.resolution;if(n.name===`viewport`)return t;if(n.name===`custom`)return n.params;let[r,i]=J[n.name];return{width:r,height:i}}function Te(e){let t=new de(q),n=D(!0),r=D({...Y}),i=D({...Y}),a=D({...Y}),o=D(void 0),s=D(void 0),c=D(X),l=D(``),u=D(!1),d=D(!1),f=!1,p=0,m,h=e.api.as({kind:`script`}),g=()=>{let e=t.values.value,o=G(e,s.value),u=K(e),d=n.value?i.value:r.value;a.set(d),c.set(o?o.width/o.height:X);let f=o?`${Math.round(o.width*d.width)} × ${Math.round(o.height*d.height)} px`:``;l.set(o&&u?`${f} · ${e.format.name.toUpperCase()}`:f)},_=async()=>{if(f||!e.sources.canvas.value||!h.export)return;let r=++p;m?.abort();let a=m=new AbortController,c=await h.export.preview({...W(t.values.value),crop:n.value?`auto`:`none`},{signal:a.signal});if(f||r!==p||!c.ok||!c.value)return;let{dataUri:l,width:u,height:g,crop:_}=c.value;o.set(`center / 100% 100% no-repeat url("${l}")`),s.set({width:u,height:g}),n.value&&i.set(_),d.set(!0)},v=n.value,y=[],b=()=>{if(f||y.length)return;y=[n.asReadonly.subscribe(e=>{!e&&v&&r.set({...Y}),v=e}),ee([t.values,n.asReadonly,r.asReadonly,i.asReadonly,s.asReadonly]).subscribe(g),ee([t.values,n.asReadonly,e.sources.canvas,e.sources.structures]).pipe(j(()=>d.set(!1)),ae(Ee)).subscribe(()=>void _())];let a=e.api.export?.sceneChanges;a&&y.push(a.pipe(j(()=>d.set(!1)),te(De)).subscribe(()=>void _()))},x=()=>{p++,m?.abort(),m=void 0;for(let e of y.splice(0))e.unsubscribe()},S=async(i,a)=>{let o=e.api.export?.[i];if(o&&!u.value){u.set(!0);try{let e=n.value?{crop:`auto`}:{crop:`none`,box:{...r.value}},i=await o({...W(t.values.value),...e});i.ok&&a(i.value,i.did)}finally{u.set(!1)}}};return g(),b(),{preview:o.asReadonly,aspect:c.asReadonly,autoCrop:n,settled:d.asReadonly,crop:a.asReadonly,setCrop:e=>{n.set(!1),r.set(e)},size:l.asReadonly,form:t,busy:u.asReadonly,copy:()=>void S(`imageCopy`,()=>e.notify(`Copied the image.`,`success`)),download:()=>void S(`image`,t=>{t&&(e.save(t.blob,t.filename),e.notify(`Saved ${t.filename} (${t.width} × ${t.height}).`,`success`))}),setActive:e=>e?b():x(),dispose(){f=!0,x()}}}var K,q,J,Y,Ee,De,X;function Oe(){return(Oe=e((()=>{me(),fe(),se(),ne(),x(),ie(),M(),S(),K=e=>!e.mode||e.mode===`image`,q={mode:k.Text(`image`,{isHidden:!0}),resolution:re(),format:k.MappedStatic(`png`,{png:k.Group({},{isFlat:!0}),jpeg:k.Group({quality:k.Numeric(.9,{min:0,max:1,step:.01})},{isFlat:!0}),webp:k.Group({quality:k.Numeric(.9,{min:0,max:1,step:.01})},{isFlat:!0})},{options:[[`png`,`PNG`],[`jpeg`,`JPEG`],[`webp`,`WebP`]],hideIf:e=>!K(e)}),transparent:k.Boolean(!1,{hideIf:e=>!K(e)}),axes:k.Boolean(!1,{label:`Axes`})},J={hd:[1280,720],"full-hd":[1920,1080],"ultra-hd":[3840,2160],"8k-ultra-hd":[7680,4320]},Y={x:0,y:0,width:1,height:1},Ee=250,De=500,X=16/9})))()}function ke(e){return be(O.ofArray(e.target),O.ofArray(e.position),e.mode,e.fov*Math.PI/180)}function Ae(e){return O.normalize(O(),O.sub(O(),O.ofArray(e.target),O.ofArray(e.position)))}function je(e){let t=e=>`[${Q(e)}]`;return`{\n  "position": ${t(ke(e))},\n  "target": ${t(e.target)},\n  "up": ${t(e.up)}\n}`}function Me(e){let t=D(void 0);return e.api.export&&a(e.api.export.camera,e=>t.set(e)),s(`div`,{style:`display: grid; gap: var(--msp-space-3); min-width: 0`,children:[o(`div`,{style:`display: grid; grid-template-columns: auto 1fr; gap: var(--msp-space-1) var(--msp-space-3); font-size: var(--msp-font-size-sm); min-width: 0`,children:Pe.map(([e,n])=>s(i,{children:[o(`span`,{style:`color: var(--msp-color-text-muted)`,children:e}),o(`span`,{style:`font-family: var(--msp-font-mono); white-space: nowrap; overflow: hidden`,ref:e=>a(t.asReadonly,t=>e.textContent=t?n(t):`—`)})]}))}),o(`div`,{style:`display: flex; flex-wrap: wrap; gap: var(--msp-space-2)`,children:o(he,{size:`sm`,icon:o(ce,{name:`copy`}),title:`Copy the camera as MolViewSpec JSON`,onClick:()=>{let n=t.value;n&&typeof navigator<`u`&&navigator.clipboard&&navigator.clipboard.writeText(je(n)).then(()=>e.managers.notifications.post(`Copied the camera as MolViewSpec JSON.`,`success`),()=>e.managers.notifications.post(`Could not copy to the clipboard.`,`error`))},children:`Copy MVS camera`})})]})}function Ne(e){return{sections:[{id:`export-image.section.image`,slot:`export`,title:`Image`,heading:e=>C(e.sections(`export.picture`),e=>e.length?`Image & animation`:`Image`),icon:`camera`,order:0,keywords:[`screenshot`,`png`,`picture`,`copy`,`animation`,`video`,`movie`],open:!0,render:E(({ctx:n})=>{let r=Te({api:e.api,sources:e.sources,notify:(t,n)=>e.managers.notifications.post(t,n),save:ye});u(e=>r.setActive(e)),t(()=>r.dispose()),n.focus&&r.form.set(`mode`,n.focus);let i=n.shell.sections(`export.picture`),a={get:()=>we(r.form.values.value,r.crop.value)};return o(Se,{model:r,kinds:C(i,e=>e.map(e=>({id:e.id,title:e.title,icon:e.icon}))),kind:e=>o(b,{when:C(i,t=>t.find(t=>t.id===e)),children:e=>o(oe,{renderer:e.render,ctx:{shell:n.shell,subject:a}})})})})},{id:`export-image.section.camera`,slot:`export`,title:`Camera`,icon:`move-3d`,order:.5,keywords:[`camera`,`position`,`target`,`direction`,`mvs`,`molviewspec`],render:E(()=>Me(e))}]}}var Z,Q,Pe;function $(){return($=e((()=>{A(),ge(),xe(),U(),Oe(),T(),c(),Z=e=>Math.round(e*100)/100,Q=e=>Array.from(e,Z).join(`, `),Pe=[[`Position`,e=>Q(e.position)],[`FoV norm. position`,e=>Q(ke(e))],[`Target`,e=>Q(e.target)],[`Direction`,e=>Q(Ae(e))],[`Up`,e=>Q(e.up)],[`Distance`,e=>`${e.distance} Å`],[`Radius`,e=>`${Z(e.radius)} Å`],[`Field of view`,e=>`${e.fov}° (${e.mode})`]]})))()}$();export{Ne as exportImageUI};