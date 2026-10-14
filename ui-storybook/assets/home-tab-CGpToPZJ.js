import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n,t as r}from"./jsx-runtime-DiBZWcxb.js";import{i,r as a}from"./base-Cal5NIfy.js";import{t as o}from"./params-form-MNGzvbPp.js";import{a as s,n as c,r as l}from"./control-flow-HAEcegil.js";import{n as u,t as d}from"./map-CsR1ibWS.js";import{D as f,O as p,h as m}from"./shell-Dnh1QcSy.js";import{n as h,r as g}from"./observable-state-D-XGaosJ.js";import{n as _,t as v}from"./icon-Dqu8cMU0.js";import{t as y}from"./scroll-area-XzYIuKyv.js";import{t as b}from"./text-input-CQilzVcE.js";import{t as x}from"./button-DEZz5joq.js";import{t as S}from"./src-C_tJCfFc.js";import{t as C}from"./action-footer-D3SDSK1q.js";var w;function T(){return(T=e((()=>{i(),w={action:`msp-viewer-home-tab-action`,actionBody:`msp-viewer-home-tab-actionBody`,actionDescription:`msp-viewer-home-tab-actionDescription`,actionHeader:`msp-viewer-home-tab-actionHeader`,actionTitle:`msp-viewer-home-tab-actionTitle`,caption:`msp-viewer-home-tab-caption`,captionActions:`msp-viewer-home-tab-captionActions`,captionRow:`msp-viewer-home-tab-captionRow`,chevron:`msp-viewer-home-tab-chevron`,confirm:`msp-viewer-home-tab-confirm`,confirmText:`msp-viewer-home-tab-confirmText`,content:`msp-viewer-home-tab-content`,contentInner:`msp-viewer-home-tab-contentInner`,group:`msp-viewer-home-tab-group`,hint:`msp-viewer-home-tab-hint`,home:`msp-viewer-home-tab-home`,none:`msp-viewer-home-tab-none`,server:`msp-viewer-home-tab-server`,session:`msp-viewer-home-tab-session`,sessionSummary:`msp-viewer-home-tab-sessionSummary`,spin:`msp-viewer-home-tab-spin`,state:`msp-viewer-home-tab-state`,stateDate:`msp-viewer-home-tab-stateDate`,stateLabel:`msp-viewer-home-tab-stateLabel`,states:`msp-viewer-home-tab-states`,statesContent:`msp-viewer-home-tab-statesContent`},a(`viewer/views/home/home-tab.module.css`,`@layer msp.components {
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
`)})))()}function E(e){let{home:r}=e;return n(`div`,{class:w.home,children:[n(y,{class:w.content,contentClass:w.contentInner,children:[r.session?t(O,{session:r.session}):null,e.modes&&e.modes.list.length>1?t(l,{when:r.session?.isEmpty??!0,children:()=>n(`section`,{class:w.group,"aria-label":`Mode`,children:[t(`h3`,{class:w.caption,children:`Mode`}),t(m,{variant:`rows`,modes:e.modes.list,active:e.modes.active,onChoose:t=>e.modes.choose(t)})]})}):null,t(`section`,{class:w.group,"aria-label":`Actions`,children:t(c,{each:r.actions,children:(e,n)=>t(D,{action:e,open:n.value===0})},e=>e.id)}),r.remoteStates?t(k,{model:r.remoteStates}):null]}),n(`button`,{type:`button`,class:w.hint,onClick:()=>e.onOpenCommandMenu?.(),children:[t(`kbd`,{children:f({key:`k`,mod:!0})}),t(`span`,{children:`Search every command`})]})]})}function D(e){let{action:r}=e,i=g(e.open);return n(`div`,{class:w.action,"data-open":i.asReadonly.pipe(u(e=>e?``:void 0)),children:[n(`button`,{type:`button`,class:w.actionHeader,"aria-expanded":i,onClick:()=>i.set(!i.value),children:[t(`span`,{class:w.actionTitle,children:r.title}),t(`span`,{class:w.actionDescription,children:r.description}),t(v,{name:`chevron-down`,size:14,class:w.chevron})]}),t(l,{when:i,reveal:!0,children:()=>n(`div`,{class:w.actionBody,children:[r.form?t(o,{form:r.form}):null,t(C,{icon:r.icon,label:r.applyLabel??`Apply`,busy:r.busy,onApply:()=>r.apply(),onReset:r.form?()=>r.form?.reset():void 0})]})})]})}function O(e){let{session:r}=e,i=g(!1);return t(l,{when:r.isEmpty.pipe(u(e=>!e)),children:()=>n(`section`,{class:w.group,"aria-label":`Current session`,children:[t(`div`,{class:w.captionRow,children:t(`h3`,{class:w.caption,children:`Current session`})}),n(`div`,{class:w.session,children:[t(`span`,{class:w.sessionSummary,"data-tip-overflow":``,children:r.summary}),t(l,{when:i,fallback:()=>t(x,{size:`sm`,variant:`ghost`,icon:t(v,{name:`trash-2`}),onClick:()=>i.set(!0),children:`Clear`}),children:()=>n(`span`,{class:w.confirm,role:`group`,"aria-label":`Clear everything loaded?`,children:[t(`span`,{class:w.confirmText,children:`Clear everything?`}),t(x,{size:`sm`,variant:`ghost`,onClick:()=>i.set(!1),children:`Cancel`}),t(x,{size:`sm`,variant:`danger`,onClick:()=>{i.set(!1),r.clear()},children:`Clear`})]})})]})]})})}function k(e){let{model:r}=e,i=g(!1);return n(`section`,{class:w.group,"aria-label":`Remote states`,children:[n(`div`,{class:w.captionRow,children:[t(`h3`,{class:w.caption,children:`Remote states`}),n(`span`,{class:w.captionActions,children:[t(x,{size:`xs`,variant:`ghost`,icon:t(v,{name:`settings`}),title:`Server`,pressed:i.asReadonly,onClick:()=>i.set(!i.value)}),t(x,{size:`xs`,variant:`ghost`,icon:t(l,{when:r.loading,fallback:()=>t(v,{name:`refresh-cw`}),children:()=>t(v,{name:`loader-circle`,class:w.spin})}),title:`Refresh`,onClick:()=>r.refresh()})]})]}),t(l,{when:i,children:()=>n(`label`,{class:w.server,children:[t(`span`,{children:`Server`}),t(b,{size:`sm`,"aria-label":`State server URL`,value:r.serverUrl,onSubmit:e=>{r.setServerUrl(e),i.set(!1)}})]})}),t(y,{class:w.states,contentClass:w.statesContent,children:t(c,{each:r.states,fallback:()=>t(`p`,{class:w.none,children:`No states on this server.`}),children:e=>n(`button`,{type:`button`,class:w.state,onClick:()=>r.open(e.id),children:[t(`span`,{class:w.stateLabel,"data-tip-overflow":``,children:e.label}),t(`span`,{class:w.stateDate,children:e.date})]})},e=>e.id)})]})}function A(){return(A=e((()=>{d(),p(),S(),_(),s(),h(),T(),r()})))()}export{E as n,A as r,D as t};