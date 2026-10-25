import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{S as t,n,r,t as i}from"./jsx-runtime-DbCUSNU3.js";import{n as a,r as o}from"./registry-D35yV2Tb.js";import{E as s}from"./shell-view-DFCAxQCV.js";import{n as c,t as l}from"./observable-state-eRUcDuAs.js";import{i as u,n as d,t as f}from"./control-flow-BQuMY04w.js";import{n as p,t as m}from"./icon-1ydjt1pd.js";import{t as h}from"./scroll-area-ukLK_GOt.js";import{d as g,f as _}from"./params-form-D0fEgQzm.js";import{n as v,t as y}from"./param-definition-D-iX28-z.js";import{t as b}from"./text-input-j_8_8M_A.js";import{t as x}from"./button-B7k80QJA.js";import{t as S}from"./src-BO5PfBJ6.js";import{i as C,r as w,t as T}from"./home-tab-CnBQWQDT.js";var E;function D(){return(D=e((()=>{o(),E={action:`msp-viewer-remote-states-panel-action`,caption:`msp-viewer-remote-states-panel-caption`,captionRow:`msp-viewer-remote-states-panel-captionRow`,date:`msp-viewer-remote-states-panel-date`,empty:`msp-viewer-remote-states-panel-empty`,item:`msp-viewer-remote-states-panel-item`,list:`msp-viewer-remote-states-panel-list`,listContent:`msp-viewer-remote-states-panel-listContent`,menu:`msp-viewer-remote-states-panel-menu`,menuItem:`msp-viewer-remote-states-panel-menuItem`,name:`msp-viewer-remote-states-panel-name`,open:`msp-viewer-remote-states-panel-open`,panel:`msp-viewer-remote-states-panel-panel`,row:`msp-viewer-remote-states-panel-row`,server:`msp-viewer-remote-states-panel-server`,spin:`msp-viewer-remote-states-panel-spin`,states:`msp-viewer-remote-states-panel-states`,upload:`msp-viewer-remote-states-panel-upload`},a(`viewer/views/state/remote-states-panel.module.css`,`@layer msp.components {
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
`)})))()}function O(e){let{model:t}=e;if(!t.upload)return null;let r=new g({name:y.Text(``,{label:`Name`,placeholder:`Untitled`})}),i={id:`upload`,title:`Upload the current state`,icon:`cloud-upload`,form:r,applyLabel:`Upload`,apply:()=>{t.upload?.(r.values.value.name.trim()||`Untitled`),r.reset()}};return n(`section`,{class:E.upload,"aria-label":`Upload`,children:n(T,{action:i,open:!0})})}function k(e){let{model:t}=e;return r(`div`,{class:E.panel,children:[r(`section`,{class:E.states,"aria-label":`On the server`,children:[r(`div`,{class:E.captionRow,children:[n(`p`,{class:E.caption,children:`On the server`}),n(x,{size:`xs`,variant:`ghost`,title:`Refresh`,icon:n(d,{when:t.loading,fallback:()=>n(m,{name:`refresh-cw`}),children:()=>n(m,{name:`loader-circle`,class:E.spin})}),onClick:()=>t.refresh()})]}),n(h,{class:E.list,contentClass:E.listContent,children:n(f,{each:t.states,by:e=>e.id,fallback:()=>n(`p`,{class:E.empty,children:`No states yet.`}),children:e=>n(A,{model:t,state:e})})})]}),r(`label`,{class:E.server,children:[n(`span`,{children:`Server`}),n(b,{size:`sm`,"aria-label":`State server URL`,value:t.serverUrl,onSubmit:e=>t.setServerUrl(e)})]})]})}function A(e){let{model:t,state:i}=e,a=c(!1),o=!!(t.download||t.remove);return r(`div`,{class:E.item,children:[r(`div`,{class:E.row,children:[r(`button`,{type:`button`,class:E.open,onClick:()=>t.open(i.id),children:[n(`span`,{class:E.name,children:i.label}),n(`span`,{class:E.date,children:i.date})]}),o?n(`button`,{type:`button`,class:E.action,"aria-label":`More`,"aria-expanded":a,onClick:()=>a.set(!a.value),children:n(m,{name:`ellipsis`,size:15})}):null]}),n(d,{when:a,children:()=>r(`div`,{class:E.menu,role:`menu`,children:[t.download?n(`button`,{type:`button`,role:`menuitem`,class:E.menuItem,onClick:()=>{a.set(!1),t.download?.(i.id)},children:n(`span`,{children:`Download`})}):null,t.remove?n(`button`,{type:`button`,role:`menuitem`,class:E.menuItem,"data-danger":``,onClick:()=>{a.set(!1),t.remove?.(i.id)},children:n(`span`,{children:`Remove`})}):null]})})]})}function j(){return(j=e((()=>{v(),S(),p(),u(),_(),l(),C(),D(),i()})))()}function M(e){let t=c(``),n=c([]),r=c(!1),i=[],a=0,o=async e=>{r.set(!0);try{await e()}finally{r.set(!1)}},s=()=>t.value.trim(),l=t=>e.notify(t.ok?t.did:t.hint?`${t.message} ${t.hint}`:t.message,t.ok?`success`:`error`),u=async()=>{let o=++a;r.set(!0);try{let r=await e.api.session.remoteList?.({server:s()});if(o!==a||!r)return;if(!r.ok){i=[],n.set([]),l(r);return}i=r.value?.entries??[],n.set(i.map(P)),!s()&&r.value&&t.set(r.value.server)}finally{o===a&&r.set(!1)}},d=e=>i.find(t=>t.id===e)?.id??e;return{serverUrl:t.asReadonly,setServerUrl(e){t.set(e.trim()),u()},states:n.asReadonly,loading:r.asReadonly,refresh:()=>void u(),open(t){o(async()=>{let n=await e.api.session.remoteOpen({entry:d(t),server:s()});return l(n),n})},upload(t){o(async()=>{let n=await e.api.session.remoteUpload({name:t,server:s()});return l(n),n.ok&&await u(),n})},remove(t){o(async()=>{let n=await e.api.session.remoteRemove({entry:d(t),server:s()});return l(n),n.ok&&await u(),n})}}}var N,P;function F(){return(F=e((()=>{l(),N=e=>e?new Date(e).toUTCString().slice(0,22):void 0,P=e=>({id:e.id,label:e.name||N(e.timestamp)||e.id,date:e.name?N(e.timestamp):void 0})})))()}function I(e){if(!e.api.session.remoteList)return{};let r=M({api:e.api,notify:(t,n)=>e.managers.notifications.post(t,n)});return{sections:[{id:`remote-states.section.home`,slot:`home.import`,title:`Remote states`,icon:`cloud`,order:10,keywords:[`remote states`,`state server`,`sessions`],render:s(()=>(t(e=>e&&r.refresh()),n(w,{model:r})))},{id:`remote-states.section.export`,slot:`export`,title:`Upload to the state server`,icon:`cloud-upload`,order:2,keywords:[`upload`,`remote states`,`state server`,`share`],render:s(()=>n(O,{model:r}))}],overlays:[{id:`remote-states.overlay.states`,title:`Remote states`,render:s(()=>(t(e=>e&&r.refresh()),n(k,{model:r})))}]}}function L(){return(L=e((()=>{S(),C(),j(),F(),i()})))()}L();export{I as remoteStatesUI};