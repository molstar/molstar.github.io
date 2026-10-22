import{c as M,d as I}from"./chunk-YZTRRPFI.js";import{A as f,C as S,F as u,G as t,H as m,J as k,Y as U,Z as z,ea as C,h,o as y,p as R}from"./chunk-BGEN4R46.js";import"./chunk-KHBNYRDQ.js";import{i as p}from"./chunk-GF5XNTCX.js";import"./chunk-FY6Y25VJ.js";import{qb as b}from"./chunk-IAG3P5FE.js";import"./chunk-DCANE7XH.js";var r={action:"msp-viewer-remote-states-panel-action",caption:"msp-viewer-remote-states-panel-caption",captionRow:"msp-viewer-remote-states-panel-captionRow",date:"msp-viewer-remote-states-panel-date",empty:"msp-viewer-remote-states-panel-empty",item:"msp-viewer-remote-states-panel-item",list:"msp-viewer-remote-states-panel-list",listContent:"msp-viewer-remote-states-panel-listContent",menu:"msp-viewer-remote-states-panel-menu",menuItem:"msp-viewer-remote-states-panel-menuItem",name:"msp-viewer-remote-states-panel-name",open:"msp-viewer-remote-states-panel-open",panel:"msp-viewer-remote-states-panel-panel",row:"msp-viewer-remote-states-panel-row",server:"msp-viewer-remote-states-panel-server",spin:"msp-viewer-remote-states-panel-spin",states:"msp-viewer-remote-states-panel-states",upload:"msp-viewer-remote-states-panel-upload"};S("viewer/views/state/remote-states-panel.module.css",`@layer msp.components {
.msp-viewer-remote-states-panel-panel {
  gap: var(--msp-space-4);
  height: 100%;
  min-height: 0;
  padding: 0 var(--msp-panel-inset) var(--msp-panel-inset);
  font-size: var(--msp-font-size-sm);
  flex-direction: column;
  flex: 1 1 0;
  display: flex;
}

.msp-viewer-remote-states-panel-upload {
  flex: none;
}

.msp-viewer-remote-states-panel-caption {
  padding: var(--msp-space-1) 0;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
  font-weight: 500;
}

.msp-viewer-remote-states-panel-states {
  gap: var(--msp-space-1);
  flex-direction: column;
  flex: 1 1 0;
  min-height: 0;
  display: flex;
}

.msp-viewer-remote-states-panel-captionRow {
  padding: 0 var(--msp-space-1) 0 var(--msp-space-2);
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.msp-viewer-remote-states-panel-list {
  flex: 1 1 0;
  min-height: 0;
}

.msp-viewer-remote-states-panel-listContent {
  grid-template-columns: minmax(0, 1fr);
  align-content: start;
  display: grid;
}

.msp-viewer-remote-states-panel-empty {
  padding: var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
}

.msp-viewer-remote-states-panel-item {
  min-width: 0;
  display: grid;
}

.msp-viewer-remote-states-panel-row {
  border-radius: var(--msp-radius-md);
  align-items: center;
  min-width: 0;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }
}

.msp-viewer-remote-states-panel-open {
  align-items: center;
  gap: var(--msp-space-3);
  min-width: 0;
  height: 28px;
  padding: 0 var(--msp-space-2);
  color: var(--msp-color-text-muted);
  text-align: left;
  flex: 1;
  display: flex;

  &:hover {
    color: var(--msp-color-text);
  }
}

.msp-viewer-remote-states-panel-name {
  min-width: 3ch;
  color: var(--msp-color-text);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 0 auto;
  font-weight: 500;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-remote-states-panel-date {
  min-width: 0;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-remote-states-panel-action {
  width: 22px;
  height: 22px;
  margin-right: var(--msp-space-1);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-muted);
  opacity: 0;
  flex: none;
  place-items: center;
  display: grid;

  @media (hover: none) {
    opacity: 1;
  }

  .msp-viewer-remote-states-panel-row:hover &, &:focus-visible, &[aria-expanded="true"] {
    opacity: 1;
  }

  &:hover {
    background: var(--msp-color-pressed);
    color: var(--msp-color-text);
  }
}

.msp-viewer-remote-states-panel-menu {
  margin: var(--msp-space-1) var(--msp-space-1) var(--msp-space-1)
    calc(var(--msp-space-2) + var(--msp-icon-md) + var(--msp-space-3));
  padding: var(--msp-space-1);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  display: grid;
}

.msp-viewer-remote-states-panel-menuItem {
  align-items: center;
  gap: var(--msp-space-3);
  height: 26px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-muted);
  text-align: left;
  grid-template-columns: 14px 1fr;
  display: grid;

  &:hover, &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[data-danger] {
    color: var(--msp-color-danger);

    &:hover, &:focus-visible {
      background: color-mix(in oklab, var(--msp-color-danger), transparent 88%);
      color: var(--msp-color-danger);
    }
  }
}

.msp-viewer-remote-states-panel-server {
  align-items: center;
  gap: var(--msp-space-3);
  padding: 0 var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  flex: none;
  grid-template-columns: auto minmax(0, 1fr);
  display: grid;
}

.msp-viewer-remote-states-panel-spin {
  animation: .9s linear infinite msp-viewer-remote-states-panel-spin;
}

@keyframes msp-viewer-remote-states-panel-spin {
  to {
    transform: rotate(360deg);
  }
}
}
`);function A(s){let{model:e}=s;if(!e.upload)return null;let a=new U({name:b.Text("",{label:"Name",placeholder:"Untitled"})}),i={id:"upload",title:"Upload the current state",icon:"cloud-upload",form:a,applyLabel:"Upload",apply:()=>{e.upload?.(a.values.value.name.trim()||"Untitled"),a.reset()}};return t("section",{class:r.upload,"aria-label":"Upload",children:t(M,{action:i,open:!0})})}function D(s){let{model:e}=s;return m("div",{class:r.panel,children:[m("section",{class:r.states,"aria-label":"On the server",children:[m("div",{class:r.captionRow,children:[t("p",{class:r.caption,children:"On the server"}),t(k,{size:"xs",variant:"ghost",title:"Refresh",icon:t(y,{when:e.loading,fallback:()=>t(u,{name:"refresh-cw"}),children:()=>t(u,{name:"loader-circle",class:r.spin})}),onClick:()=>e.refresh()})]}),t(z,{class:r.list,contentClass:r.listContent,children:t(R,{each:e.states,fallback:()=>t("p",{class:r.empty,children:"No states yet."}),children:a=>t(E,{model:e,state:a})},a=>a.id)})]}),m("label",{class:r.server,children:[t("span",{children:"Server"}),t(C,{size:"sm","aria-label":"State server URL",value:e.serverUrl,onSubmit:a=>e.setServerUrl(a)})]})]})}function E(s){let{model:e,state:a}=s,i=p(!1),l=!!(e.download||e.remove);return m("div",{class:r.item,children:[m("div",{class:r.row,children:[m("button",{type:"button",class:r.open,onClick:()=>e.open(a.id),children:[t("span",{class:r.name,children:a.label}),t("span",{class:r.date,children:a.date})]}),l?t("button",{type:"button",class:r.action,"aria-label":"More","aria-expanded":i,onClick:()=>i.set(!i.value),children:t(u,{name:"ellipsis",size:15})}):null]}),t(y,{when:i,children:()=>m("div",{class:r.menu,role:"menu",children:[e.download?t("button",{type:"button",role:"menuitem",class:r.menuItem,onClick:()=>{i.set(!1),e.download?.(a.id)},children:t("span",{children:"Download"})}):null,e.remove?t("button",{type:"button",role:"menuitem",class:r.menuItem,"data-danger":"",onClick:()=>{i.set(!1),e.remove?.(a.id)},children:t("span",{children:"Remove"})}):null]})})]})}var V=s=>s?new Date(s).toUTCString().slice(0,22):void 0,L=s=>({id:s.id,label:s.name||V(s.timestamp)||s.id,date:s.name?V(s.timestamp):void 0});function P(s){let e=p(""),a=p([]),i=p(!1),l=[],w=0,g=async o=>{i.set(!0);try{await o()}finally{i.set(!1)}},c=()=>e.value.trim(),d=o=>s.notify(o.ok?o.did:o.hint?`${o.message} ${o.hint}`:o.message,o.ok?"success":"error"),v=async()=>{let o=++w;i.set(!0);try{let n=await s.api.session.remoteList?.({server:c()});if(o!==w||!n)return;if(!n.ok){l=[],a.set([]),d(n);return}l=n.value?.entries??[],a.set(l.map(L)),!c()&&n.value&&e.set(n.value.server)}finally{o===w&&i.set(!1)}},x=o=>l.find(n=>n.id===o)?.id??o;return{serverUrl:e.asReadonly,setServerUrl(o){e.set(o.trim()),v()},states:a.asReadonly,loading:i.asReadonly,refresh:()=>{v()},open(o){g(async()=>{let n=await s.api.session.remoteOpen({entry:x(o),server:c()});return d(n),n})},upload(o){g(async()=>{let n=await s.api.session.remoteUpload({name:o,server:c()});return d(n),n.ok&&await v(),n})},remove(o){g(async()=>{let n=await s.api.session.remoteRemove({entry:x(o),server:c()});return d(n),n.ok&&await v(),n})}}}function se(s){if(!s.api.session.remoteList)return{};let e=P({api:s.api,notify:(a,i)=>s.managers.notifications.post(a,i)});return{sections:[{id:"remote-states.section.home",slot:"home.import",title:"Remote states",icon:"cloud",order:10,keywords:["remote states","state server","sessions"],render:f(()=>(h(a=>a&&e.refresh()),t(I,{model:e})))},{id:"remote-states.section.export",slot:"export",title:"Upload to the state server",icon:"cloud-upload",order:2,keywords:["upload","remote states","state server","share"],render:f(()=>t(A,{model:e}))}],overlays:[{id:"remote-states.overlay.states",title:"Remote states",render:f(()=>(h(a=>a&&e.refresh()),t(D,{model:e})))}]}}export{se as remoteStatesUI};
