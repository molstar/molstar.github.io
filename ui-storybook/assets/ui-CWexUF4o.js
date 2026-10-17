import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n,t as r,x as i}from"./jsx-runtime-Dut-27nP.js";import{n as a,r as o}from"./registry-D35yV2Tb.js";import{i as s,n as c,t as l}from"./control-flow-BLsZc6z1.js";import{w as u}from"./shell-view-BEqtIwth.js";import{n as d,t as f}from"./observable-state-C67cgDrf.js";import{n as p,t as m}from"./icon-Fyk1xIJy.js";import{t as h}from"./scroll-area-C3WxaIdw.js";import{d as g,f as _}from"./params-form-DodHex4Z.js";import{n as v,t as y}from"./param-definition-OHPHmB1q.js";import{t as b}from"./text-input-6-TvZsXK.js";import{t as x}from"./button-C9pAumBZ.js";import{t as S}from"./src-DNTTijDB.js";import{i as C,r as w,t as T}from"./home-tab-vDGxRON0.js";var E;function D(){return(D=e((()=>{o(),E={action:`msp-viewer-remote-states-panel-action`,caption:`msp-viewer-remote-states-panel-caption`,captionRow:`msp-viewer-remote-states-panel-captionRow`,date:`msp-viewer-remote-states-panel-date`,empty:`msp-viewer-remote-states-panel-empty`,item:`msp-viewer-remote-states-panel-item`,list:`msp-viewer-remote-states-panel-list`,listContent:`msp-viewer-remote-states-panel-listContent`,menu:`msp-viewer-remote-states-panel-menu`,menuItem:`msp-viewer-remote-states-panel-menuItem`,name:`msp-viewer-remote-states-panel-name`,open:`msp-viewer-remote-states-panel-open`,panel:`msp-viewer-remote-states-panel-panel`,row:`msp-viewer-remote-states-panel-row`,server:`msp-viewer-remote-states-panel-server`,spin:`msp-viewer-remote-states-panel-spin`,states:`msp-viewer-remote-states-panel-states`,upload:`msp-viewer-remote-states-panel-upload`},a(`viewer/views/state/remote-states-panel.module.css`,`@layer msp.components {
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
`)})))()}function O(e){let{model:n}=e;if(!n.upload)return null;let r=new g({name:y.Text(``,{label:`Name`,placeholder:`Untitled`})}),i={id:`upload`,title:`Upload the current state`,icon:`cloud-upload`,form:r,applyLabel:`Upload`,apply:()=>{n.upload?.(r.values.value.name.trim()||`Untitled`),r.reset()}};return t(`section`,{class:E.upload,"aria-label":`Upload`,children:t(T,{action:i,open:!0})})}function k(e){let{model:r}=e;return n(`div`,{class:E.panel,children:[n(`section`,{class:E.states,"aria-label":`On the server`,children:[n(`div`,{class:E.captionRow,children:[t(`p`,{class:E.caption,children:`On the server`}),t(x,{size:`xs`,variant:`ghost`,title:`Refresh`,icon:t(c,{when:r.loading,fallback:()=>t(m,{name:`refresh-cw`}),children:()=>t(m,{name:`loader-circle`,class:E.spin})}),onClick:()=>r.refresh()})]}),t(h,{class:E.list,contentClass:E.listContent,children:t(l,{each:r.states,fallback:()=>t(`p`,{class:E.empty,children:`No states yet.`}),children:e=>t(A,{model:r,state:e})},e=>e.id)})]}),n(`label`,{class:E.server,children:[t(`span`,{children:`Server`}),t(b,{size:`sm`,"aria-label":`State server URL`,value:r.serverUrl,onSubmit:e=>r.setServerUrl(e)})]})]})}function A(e){let{model:r,state:i}=e,a=d(!1),o=!!(r.download||r.remove);return n(`div`,{class:E.item,children:[n(`div`,{class:E.row,children:[n(`button`,{type:`button`,class:E.open,onClick:()=>r.open(i.id),children:[t(`span`,{class:E.name,children:i.label}),t(`span`,{class:E.date,children:i.date})]}),o?t(`button`,{type:`button`,class:E.action,"aria-label":`More`,"aria-expanded":a,onClick:()=>a.set(!a.value),children:t(m,{name:`ellipsis`,size:15})}):null]}),t(c,{when:a,children:()=>n(`div`,{class:E.menu,role:`menu`,children:[r.download?t(`button`,{type:`button`,role:`menuitem`,class:E.menuItem,onClick:()=>{a.set(!1),r.download?.(i.id)},children:t(`span`,{children:`Download`})}):null,r.remove?t(`button`,{type:`button`,role:`menuitem`,class:E.menuItem,"data-danger":``,onClick:()=>{a.set(!1),r.remove?.(i.id)},children:t(`span`,{children:`Remove`})}):null]})})]})}function j(){return(j=e((()=>{v(),S(),p(),s(),_(),f(),C(),D(),r()})))()}function M(e){let t=d(``),n=d([]),r=d(!1),i=[],a=0,o=async e=>{r.set(!0);try{await e()}finally{r.set(!1)}},s=()=>t.value.trim(),c=t=>e.notify(t.ok?t.did:t.hint?`${t.message} ${t.hint}`:t.message,t.ok?`success`:`error`),l=async()=>{let o=++a;r.set(!0);try{let r=await e.api.session.remoteList?.({server:s()});if(o!==a||!r)return;if(!r.ok){i=[],n.set([]),c(r);return}i=r.value?.entries??[],n.set(i.map(P)),!s()&&r.value&&t.set(r.value.server)}finally{o===a&&r.set(!1)}},u=e=>i.find(t=>t.id===e)?.id??e;return{serverUrl:t.asReadonly,setServerUrl(e){t.set(e.trim()),l()},states:n.asReadonly,loading:r.asReadonly,refresh:()=>void l(),open(t){o(async()=>{let n=await e.api.session.remoteOpen({entry:u(t),server:s()});return c(n),n})},upload(t){o(async()=>{let n=await e.api.session.remoteUpload({name:t,server:s()});return c(n),n.ok&&await l(),n})},remove(t){o(async()=>{let n=await e.api.session.remoteRemove({entry:u(t),server:s()});return c(n),n.ok&&await l(),n})}}}var N,P;function F(){return(F=e((()=>{f(),N=e=>e?new Date(e).toUTCString().slice(0,22):void 0,P=e=>({id:e.id,label:e.name||N(e.timestamp)||e.id,date:e.name?N(e.timestamp):void 0})})))()}function I(e){if(!e.api.session.remoteList)return{};let n=M({api:e.api,notify:(t,n)=>e.managers.notifications.post(t,n)});return{sections:[{id:`remote-states.section.home`,slot:`home.import`,title:`Remote states`,icon:`cloud`,order:10,keywords:[`remote states`,`state server`,`sessions`],render:u(()=>(i(e=>e&&n.refresh()),t(w,{model:n})))},{id:`remote-states.section.export`,slot:`export`,title:`Upload to the state server`,icon:`cloud-upload`,order:2,keywords:[`upload`,`remote states`,`state server`,`share`],render:u(()=>t(O,{model:n}))}],overlays:[{id:`remote-states.overlay.states`,title:`Remote states`,render:u(()=>(i(e=>e&&n.refresh()),t(k,{model:n})))}]}}function L(){return(L=e((()=>{S(),C(),j(),F(),r()})))()}L();export{I as remoteStatesUI};