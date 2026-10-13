import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{X as t,Z as n,n as r,r as i,t as a}from"./jsx-runtime-pJJ4pzd1.js";import{n as o,t as s}from"./map-BLVP9Oyc.js";import{n as c,r as l}from"./observable-state-U0Aegh1x.js";import{t as u}from"./params-form-Cr0vP-Xz.js";import{T as d,h as f,w as p}from"./shell-CzI7wQ_f.js";import{i as m,n as h,r as g}from"./control-flow-D80wAH1n.js";import{n as _,t as v}from"./icon-Cd9kBD44.js";import{t as y}from"./scroll-area-W5mfuQm0.js";import{t as b}from"./text-input-BVt-QcfS.js";import{t as x}from"./button-nz8xXRSW.js";import{t as S}from"./src-C9Ks2Bfq.js";import{t as C}from"./action-footer-CgjzDWO2.js";var w;function T(){return(T=e((()=>{n(),w={action:`msp-viewer-home-tab-action`,actionBody:`msp-viewer-home-tab-actionBody`,actionDescription:`msp-viewer-home-tab-actionDescription`,actionHeader:`msp-viewer-home-tab-actionHeader`,actionTitle:`msp-viewer-home-tab-actionTitle`,caption:`msp-viewer-home-tab-caption`,captionActions:`msp-viewer-home-tab-captionActions`,captionRow:`msp-viewer-home-tab-captionRow`,chevron:`msp-viewer-home-tab-chevron`,confirm:`msp-viewer-home-tab-confirm`,confirmText:`msp-viewer-home-tab-confirmText`,content:`msp-viewer-home-tab-content`,contentInner:`msp-viewer-home-tab-contentInner`,group:`msp-viewer-home-tab-group`,hint:`msp-viewer-home-tab-hint`,home:`msp-viewer-home-tab-home`,none:`msp-viewer-home-tab-none`,server:`msp-viewer-home-tab-server`,session:`msp-viewer-home-tab-session`,sessionSummary:`msp-viewer-home-tab-sessionSummary`,spin:`msp-viewer-home-tab-spin`,state:`msp-viewer-home-tab-state`,stateDate:`msp-viewer-home-tab-stateDate`,stateLabel:`msp-viewer-home-tab-stateLabel`,states:`msp-viewer-home-tab-states`,statesContent:`msp-viewer-home-tab-statesContent`},t(`viewer/views/home/home-tab.module.css`,`@layer msp.components {
.msp-viewer-home-tab-home {
  height: 100%;
  min-height: 0;
  font-size: var(--msp-font-size-sm);
  flex-direction: column;
  flex: 1 1 0;
  display: flex;
}

.msp-viewer-home-tab-content {
  flex: 1 1 0;
  min-height: 0;
}

.msp-viewer-home-tab-contentInner {
  align-content: start;
  gap: var(--msp-space-4);
  padding: 0 var(--msp-panel-inset) var(--msp-panel-inset);
  display: grid;
}

.msp-viewer-home-tab-states {
  max-height: 264px;
}

.msp-viewer-home-tab-statesContent {
  grid-template-columns: minmax(0, 1fr);
  display: grid;
}

.msp-viewer-home-tab-group {
  gap: var(--msp-space-1);
  display: grid;
}

.msp-viewer-home-tab-caption {
  padding: 0 var(--msp-space-3) var(--msp-space-1);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
  font-weight: 500;
}

.msp-viewer-home-tab-action {
  border-radius: var(--msp-radius-md);
  overflow: hidden;

  &[data-open] {
    background: var(--msp-color-well);
  }
}

.msp-viewer-home-tab-actionHeader {
  align-items: center;
  gap: var(--msp-space-3);
  width: 100%;
  height: 32px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  text-align: left;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-viewer-home-tab-actionTitle {
  color: var(--msp-color-text);
  flex: none;
  font-weight: 600;
}

.msp-viewer-home-tab-actionDescription {
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

.msp-viewer-home-tab-chevron {
  color: var(--msp-color-text-subtle);
  transition: transform var(--msp-motion-fast) var(--msp-ease);

  [aria-expanded="false"] > & {
    transform: rotate(-90deg);
  }
}

.msp-viewer-home-tab-actionBody {
  gap: var(--msp-space-2);
  padding: var(--msp-space-1) var(--msp-space-3) var(--msp-space-3);
  display: grid;
}

.msp-viewer-home-tab-state {
  align-items: center;
  gap: var(--msp-space-3);
  height: 26px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text);
  text-align: left;
  grid-template-columns: minmax(0, 1fr) auto;
  display: grid;

  &:hover {
    background: var(--msp-color-hover);
  }
}

.msp-viewer-home-tab-stateLabel {
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-home-tab-stateDate {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.msp-viewer-home-tab-hint {
  margin: 0 var(--msp-space-2) var(--msp-space-2);
  align-items: center;
  gap: var(--msp-space-3);
  padding: var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  flex: none;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  & kbd {
    padding: 1px var(--msp-space-2);
    border-radius: var(--msp-radius-sm);
    background: var(--msp-color-control);
    color: var(--msp-color-text-muted);
    font: inherit;
  }
}

.msp-viewer-home-tab-spin {
  animation: .9s linear infinite msp-viewer-home-tab-spin;
}

@keyframes msp-viewer-home-tab-spin {
  to {
    transform: rotate(360deg);
  }
}

.msp-viewer-home-tab-captionRow {
  padding-right: var(--msp-space-1);
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.msp-viewer-home-tab-none {
  padding: var(--msp-space-2) var(--msp-space-3);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
}

.msp-viewer-home-tab-captionActions {
  gap: var(--msp-space-1);
  display: flex;
}

.msp-viewer-home-tab-server {
  align-items: center;
  gap: var(--msp-space-3);
  padding: var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-well);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  grid-template-columns: auto minmax(0, 1fr);
  display: grid;
}

.msp-viewer-home-tab-session {
  align-items: center;
  gap: var(--msp-space-1) var(--msp-space-2);
  min-height: var(--msp-control-height);
  padding-left: var(--msp-inset);
  flex-wrap: wrap;
  display: flex;
}

.msp-viewer-home-tab-sessionSummary {
  white-space: nowrap;
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-home-tab-confirm {
  justify-content: flex-end;
  align-items: center;
  gap: var(--msp-space-1);
  flex: 1 0 100%;
  display: flex;
}

.msp-viewer-home-tab-confirmText {
  min-width: 0;
  color: var(--msp-color-text-muted);
  flex: 1;
}
}
`)})))()}function E(e){let{home:t}=e;return i(`div`,{class:w.home,children:[i(y,{class:w.content,contentClass:w.contentInner,children:[t.session?r(O,{session:t.session}):null,e.modes&&e.modes.list.length>1?r(g,{when:t.session?.isEmpty??!0,children:()=>i(`section`,{class:w.group,"aria-label":`Mode`,children:[r(`h3`,{class:w.caption,children:`Mode`}),r(f,{variant:`rows`,modes:e.modes.list,active:e.modes.active,onChoose:t=>e.modes.choose(t)})]})}):null,r(`section`,{class:w.group,"aria-label":`Actions`,children:r(h,{each:t.actions,children:(e,t)=>r(D,{action:e,open:t.value===0})},e=>e.id)}),t.remoteStates?r(k,{model:t.remoteStates}):null]}),i(`button`,{type:`button`,class:w.hint,onClick:()=>e.onOpenCommandMenu?.(),children:[r(`kbd`,{children:p({key:`k`,mod:!0})}),r(`span`,{children:`Search every command`})]})]})}function D(e){let{action:t}=e,n=l(e.open);return i(`div`,{class:w.action,"data-open":n.asReadonly.pipe(o(e=>e?``:void 0)),children:[i(`button`,{type:`button`,class:w.actionHeader,"aria-expanded":n,onClick:()=>n.set(!n.value),children:[r(`span`,{class:w.actionTitle,children:t.title}),r(`span`,{class:w.actionDescription,children:t.description}),r(v,{name:`chevron-down`,size:14,class:w.chevron})]}),r(g,{when:n,reveal:!0,children:()=>i(`div`,{class:w.actionBody,children:[t.form?r(u,{form:t.form}):null,r(C,{icon:t.icon,label:t.applyLabel??`Apply`,busy:t.busy,onApply:()=>t.apply(),onReset:t.form?()=>t.form?.reset():void 0})]})})]})}function O(e){let{session:t}=e,n=l(!1);return r(g,{when:t.isEmpty.pipe(o(e=>!e)),children:()=>i(`section`,{class:w.group,"aria-label":`Current session`,children:[r(`div`,{class:w.captionRow,children:r(`h3`,{class:w.caption,children:`Current session`})}),i(`div`,{class:w.session,children:[r(`span`,{class:w.sessionSummary,"data-tip-overflow":``,children:t.summary}),r(g,{when:n,fallback:()=>r(x,{size:`sm`,variant:`ghost`,icon:r(v,{name:`trash-2`}),onClick:()=>n.set(!0),children:`Clear`}),children:()=>i(`span`,{class:w.confirm,role:`group`,"aria-label":`Clear everything loaded?`,children:[r(`span`,{class:w.confirmText,children:`Clear everything?`}),r(x,{size:`sm`,variant:`ghost`,onClick:()=>n.set(!1),children:`Cancel`}),r(x,{size:`sm`,variant:`danger`,onClick:()=>{n.set(!1),t.clear()},children:`Clear`})]})})]})]})})}function k(e){let{model:t}=e,n=l(!1);return i(`section`,{class:w.group,"aria-label":`Remote states`,children:[i(`div`,{class:w.captionRow,children:[r(`h3`,{class:w.caption,children:`Remote states`}),i(`span`,{class:w.captionActions,children:[r(x,{size:`xs`,variant:`ghost`,icon:r(v,{name:`settings`}),title:`Server`,pressed:n.asReadonly,onClick:()=>n.set(!n.value)}),r(x,{size:`xs`,variant:`ghost`,icon:r(g,{when:t.loading,fallback:()=>r(v,{name:`refresh-cw`}),children:()=>r(v,{name:`loader-circle`,class:w.spin})}),title:`Refresh`,onClick:()=>t.refresh()})]})]}),r(g,{when:n,children:()=>i(`label`,{class:w.server,children:[r(`span`,{children:`Server`}),r(b,{size:`sm`,"aria-label":`State server URL`,value:t.serverUrl,onSubmit:e=>{t.setServerUrl(e),n.set(!1)}})]})}),r(y,{class:w.states,contentClass:w.statesContent,children:r(h,{each:t.states,fallback:()=>r(`p`,{class:w.none,children:`No states on this server.`}),children:e=>i(`button`,{type:`button`,class:w.state,onClick:()=>t.open(e.id),children:[r(`span`,{class:w.stateLabel,"data-tip-overflow":``,children:e.label}),r(`span`,{class:w.stateDate,children:e.date})]})},e=>e.id)})]})}function A(){return(A=e((()=>{s(),d(),S(),_(),m(),c(),T(),a()})))()}export{E as n,A as r,D as t};