import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{_ as t,g as n,n as r,r as i,t as a}from"./jsx-runtime-DzTO5r4L.js";import{n as o,r as s}from"./registry-D35yV2Tb.js";import{t as c}from"./params-form-BiSG3JZ9.js";import{i as l,n as u,t as d}from"./control-flow-2XcFB3wB.js";import{n as f,t as p}from"./map-COHPbqb4.js";import{D as m,E as h}from"./shell-view-BtIJvWs2.js";import{n as g,r as _}from"./observable-state-8hMFvtS9.js";import{n as v,t as y}from"./icon-Fyk1xIJy.js";import{t as b}from"./scroll-area-O9ZFxK58.js";import{t as x}from"./text-input-WVcFJO0h.js";import{t as S}from"./button-oplfrRqY.js";import{t as C}from"./action-footer-CNxDsTvQ.js";import{t as w}from"./src-Bg_TYe3U.js";var T;function E(){return(E=e((()=>{s(),T={action:`msp-viewer-home-tab-action`,actionBody:`msp-viewer-home-tab-actionBody`,actionDescription:`msp-viewer-home-tab-actionDescription`,actionHeader:`msp-viewer-home-tab-actionHeader`,actionTitle:`msp-viewer-home-tab-actionTitle`,caption:`msp-viewer-home-tab-caption`,captionActions:`msp-viewer-home-tab-captionActions`,captionRow:`msp-viewer-home-tab-captionRow`,chevron:`msp-viewer-home-tab-chevron`,confirm:`msp-viewer-home-tab-confirm`,confirmText:`msp-viewer-home-tab-confirmText`,content:`msp-viewer-home-tab-content`,contentInner:`msp-viewer-home-tab-contentInner`,drop:`msp-viewer-home-tab-drop`,dropLink:`msp-viewer-home-tab-dropLink`,dropText:`msp-viewer-home-tab-dropText`,group:`msp-viewer-home-tab-group`,hint:`msp-viewer-home-tab-hint`,home:`msp-viewer-home-tab-home`,none:`msp-viewer-home-tab-none`,offer:`msp-viewer-home-tab-offer`,offerIcon:`msp-viewer-home-tab-offerIcon`,offerText:`msp-viewer-home-tab-offerText`,server:`msp-viewer-home-tab-server`,serverHost:`msp-viewer-home-tab-serverHost`,session:`msp-viewer-home-tab-session`,sessionSummary:`msp-viewer-home-tab-sessionSummary`,spin:`msp-viewer-home-tab-spin`,state:`msp-viewer-home-tab-state`,stateDate:`msp-viewer-home-tab-stateDate`,stateLabel:`msp-viewer-home-tab-stateLabel`,states:`msp-viewer-home-tab-states`,statesContent:`msp-viewer-home-tab-statesContent`},o(`viewer/views/home/home-tab.module.css`,`@layer msp.components {
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
  grid-template-columns: minmax(0, 1fr);
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

.msp-viewer-home-tab-action[data-open] > .msp-viewer-home-tab-actionHeader {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
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
  grid-template-columns: minmax(0, 1fr);
  display: grid;
}

.msp-viewer-home-tab-drop {
  justify-items: center;
  gap: var(--msp-space-2);
  width: 100%;
  padding: var(--msp-space-5) var(--msp-space-3);
  border: 1px dashed var(--msp-color-border-strong);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-subtle);
  transition: background-color var(--msp-motion-fast) var(--msp-ease),
    border-color var(--msp-motion-fast) var(--msp-ease);
  display: grid;

  &:hover {
    border-color: var(--msp-color-text-subtle);
    background: var(--msp-color-hover);
    color: var(--msp-color-text-muted);
  }

  &[data-over] {
    border-color: var(--msp-color-accent);
    background: var(--msp-color-hover);
    color: var(--msp-color-text-muted);
  }
}

.msp-viewer-home-tab-dropText {
  font-size: var(--msp-font-size-sm);
}

.msp-viewer-home-tab-dropLink {
  color: var(--msp-color-accent);
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
  justify-content: space-between;
  align-items: center;
  gap: var(--msp-space-3);
  padding: 0 var(--msp-space-1) 0 var(--msp-inset);
  display: flex;
}

.msp-viewer-home-tab-captionRow > .msp-viewer-home-tab-caption {
  padding-left: 0;
}

.msp-viewer-home-tab-serverHost {
  min-width: 0;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  white-space: nowrap;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
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

.msp-viewer-home-tab-offer {
  align-items: center;
  gap: var(--msp-space-2);
  min-height: var(--msp-control-height);
  padding-left: var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-well);
  display: flex;
}

.msp-viewer-home-tab-offerIcon {
  color: var(--msp-color-accent);
  flex: none;
}

.msp-viewer-home-tab-offerText {
  white-space: nowrap;
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}
}
`)})))()}var D;function O(){return(O=e((()=>{s(),D={asking:`msp-viewer-kept-records-asking`,caption:`msp-viewer-kept-records-caption`,forget:`msp-viewer-kept-records-forget`,group:`msp-viewer-kept-records-group`,listContent:`msp-viewer-kept-records-listContent`,open:`msp-viewer-kept-records-open`,record:`msp-viewer-kept-records-record`,title:`msp-viewer-kept-records-title`,when:`msp-viewer-kept-records-when`},o(`viewer/views/home/kept-records.module.css`,`@layer msp.components {
.msp-viewer-kept-records-group {
  gap: var(--msp-space-1);
  display: grid;
}

.msp-viewer-kept-records-caption {
  padding: 0 var(--msp-space-3) var(--msp-space-1);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
  font-weight: 500;
}

.msp-viewer-kept-records-listContent {
  grid-template-columns: minmax(0, 1fr);
  display: grid;
}

.msp-viewer-kept-records-record {
  border-radius: var(--msp-radius-md);
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  display: grid;

  &:hover, &:focus-within {
    background: var(--msp-color-hover);
  }
}

.msp-viewer-kept-records-open {
  align-items: center;
  gap: var(--msp-space-3);
  min-width: 0;
  height: 26px;
  padding: 0 var(--msp-space-2) 0 var(--msp-inset);
  color: var(--msp-color-text);
  text-align: left;
  grid-template-columns: minmax(0, 1fr) auto;
  display: grid;
}

.msp-viewer-kept-records-title {
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-kept-records-when {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.msp-viewer-kept-records-forget {
  visibility: hidden;
  margin-right: var(--msp-space-1);

  .msp-viewer-kept-records-record:is(:hover, :focus-within) & {
    visibility: visible;
  }
}

.msp-viewer-kept-records-asking {
  visibility: visible;
}
}
`)})))()}function k(e){let t=new Date(e.first),n=new Date(e.last);if(t.toDateString()!==n.toDateString())return`${j.format(t)} – ${j.format(n)}`;let r=M.format(t),i=M.format(n);return r===i?`${j.format(t)}, ${r}`:`${j.format(t)}, ${r}–${i}`}function A(e){let{model:a}=e,o;n(e=>{e?o??=a.watch():(o?.(),o=void 0)}),t(()=>o?.());let s=_(void 0);return r(u,{when:a.list.pipe(f(e=>e.length>0)),children:()=>i(`section`,{class:D.group,"aria-label":`Kept records`,children:[r(`h3`,{class:D.caption,children:`Kept records`}),r(`div`,{class:D.listContent,role:`list`,children:r(d,{each:a.list,children:e=>{let t=s.asReadonly.pipe(f(t=>t===e.id));return i(`div`,{class:D.record,role:`listitem`,children:[i(`button`,{type:`button`,class:D.open,title:`Open in History (read-only)`,onClick:()=>a.open(e.id),children:[r(`span`,{class:D.title,"data-tip-overflow":``,children:e.title}),r(`span`,{class:D.when,children:k(e)})]}),r(u,{when:t,fallback:()=>r(S,{size:`xs`,variant:`ghost`,class:D.forget,icon:r(y,{name:`trash-2`}),title:`Forget this record`,onClick:()=>s.set(e.id)}),children:()=>r(S,{size:`xs`,variant:`ghost`,class:`${D.forget} ${D.asking}`,title:`Forget it: it is removed from this browser`,onClick:()=>{s.set(void 0),a.forget(e.id)},children:`Forget?`})})]})}},e=>e.id)})]})})}var j,M;function N(){return(N=e((()=>{w(),v(),l(),g(),p(),O(),a(),j=new Intl.DateTimeFormat(void 0,{month:`short`,day:`numeric`}),M=new Intl.DateTimeFormat(void 0,{hour:`2-digit`,minute:`2-digit`})})))()}function P(e){let{home:t}=e;return i(`div`,{class:T.home,children:[i(b,{class:T.content,contentClass:T.contentInner,children:[t.session?r(L,{session:t.session}):null,t.annotationOffer?r(R,{model:t.annotationOffer}):null,i(`section`,{class:T.group,"aria-label":`Actions`,children:[r(d,{each:t.actions.pipe(f(e=>e.slice(0,1))),children:e=>r(I,{action:e,open:!0})},e=>e.id),r(F,{home:t}),r(d,{each:t.actions.pipe(f(e=>e.slice(1))),children:e=>r(I,{action:e,open:!1})},e=>e.id),e.more?.()]}),t.remoteStates?r(B,{model:t.remoteStates,caption:!0}):null,t.keptRecords?r(A,{model:t.keptRecords}):null]}),i(`button`,{type:`button`,class:T.hint,onClick:()=>e.onOpenCommandMenu?.(),children:[r(`kbd`,{children:h({key:`k`,mod:!0})}),r(`span`,{children:`Search every command`})]})]})}function F(e){let{home:t}=e,n=_(!1),a=_(!1),o=e=>{e.length&&t.openFiles(e)},s=r(`input`,{type:`file`,multiple:!0,hidden:!0,onChange:e=>{let t=e.currentTarget,n=[...t.files??[]];t.value=``,o(n)}}),c=e=>!!e.dataTransfer?.types.includes(`Files`);return i(`div`,{class:T.action,"data-open":n.asReadonly.pipe(f(e=>e?``:void 0)),children:[i(`button`,{type:`button`,class:T.actionHeader,"aria-expanded":n,onClick:()=>n.set(!n.value),children:[r(`span`,{class:T.actionTitle,children:`Open Files`}),r(`span`,{class:T.actionDescription,children:`Structures, maps, trajectories and sessions from your computer`}),r(y,{name:`chevron-down`,size:14,class:T.chevron})]}),r(u,{when:n,reveal:!0,children:()=>i(`div`,{class:T.actionBody,children:[i(`button`,{type:`button`,class:T.drop,"data-over":a.asReadonly.pipe(f(e=>e?``:void 0)),title:t.formats.length?`Reads ${t.formats.join(`, `)}`:void 0,onClick:()=>s.click(),onDragEnter:e=>{c(e)&&(e.preventDefault(),a.set(!0))},onDragOver:e=>{c(e)&&e.preventDefault()},onDragLeave:()=>a.set(!1),onDrop:e=>{e.preventDefault(),a.set(!1),o([...e.dataTransfer?.files??[]])},children:[r(y,{name:`folder-open`,size:20}),i(`span`,{class:T.dropText,children:[`Drop files here, or `,r(`span`,{class:T.dropLink,children:`browse`})]})]}),s]})})]})}function I(e){let{action:t}=e,n=_(e.open);return i(`div`,{class:T.action,"data-open":n.asReadonly.pipe(f(e=>e?``:void 0)),children:[i(`button`,{type:`button`,class:T.actionHeader,"aria-expanded":n,onClick:()=>n.set(!n.value),children:[r(`span`,{class:T.actionTitle,children:t.title}),r(`span`,{class:T.actionDescription,children:t.description}),r(y,{name:`chevron-down`,size:14,class:T.chevron})]}),r(u,{when:n,reveal:!0,children:()=>i(`div`,{class:T.actionBody,children:[t.form?r(c,{form:t.form}):null,r(C,{icon:t.icon,label:t.applyLabel??`Apply`,busy:t.busy,onApply:()=>t.apply(),onReset:t.form?()=>t.form?.reset():void 0})]})})]})}function L(e){let{session:t}=e,n=_(!1);return r(u,{when:t.isEmpty.pipe(f(e=>!e)),children:()=>i(`section`,{class:T.group,"aria-label":`Current session`,children:[r(`div`,{class:T.captionRow,children:r(`h3`,{class:T.caption,children:`Current session`})}),i(`div`,{class:T.session,children:[r(`span`,{class:T.sessionSummary,"data-tip-overflow":``,children:t.summary}),r(u,{when:n,fallback:()=>r(S,{size:`sm`,variant:`ghost`,icon:r(y,{name:`trash-2`}),onClick:()=>n.set(!0),children:`Clear`}),children:()=>i(`span`,{class:T.confirm,role:`group`,"aria-label":`Clear everything loaded?`,children:[r(`span`,{class:T.confirmText,children:`Clear everything?`}),r(S,{size:`sm`,variant:`ghost`,onClick:()=>n.set(!1),children:`Cancel`}),r(S,{size:`sm`,variant:`danger`,onClick:()=>{n.set(!1),t.clear()},children:`Clear`})]})})]})]})})}function R(e){let{model:t}=e;return r(u,{when:t.offer,children:e=>i(`section`,{class:T.offer,"aria-label":`Loaded`,children:[r(y,{name:`sparkles`,size:14,class:T.offerIcon}),i(`span`,{class:T.offerText,"data-tip-overflow":``,title:e.description,children:[e.label,` has `,e.title]}),r(S,{size:`sm`,variant:`ghost`,onClick:()=>t.accept(),children:`Show`}),r(S,{size:`xs`,variant:`ghost`,icon:r(y,{name:`x`}),title:`Dismiss`,onClick:()=>t.dismiss()})]})})}function z(e){try{return new URL(e).host}catch{return e}}function B(e){let{model:t}=e,n=_(!1);return i(`section`,{class:T.group,"aria-label":`Remote states`,children:[i(`div`,{class:T.captionRow,children:[e.caption?r(`h3`,{class:T.caption,children:`Remote states`}):r(`span`,{class:T.serverHost,"data-tip-overflow":``,children:t.serverUrl.pipe(f(z))}),i(`span`,{class:T.captionActions,children:[r(S,{size:`xs`,variant:`ghost`,icon:r(y,{name:`settings`}),title:`Server`,pressed:n.asReadonly,onClick:()=>n.set(!n.value)}),r(S,{size:`xs`,variant:`ghost`,icon:r(u,{when:t.loading,fallback:()=>r(y,{name:`refresh-cw`}),children:()=>r(y,{name:`loader-circle`,class:T.spin})}),title:`Refresh`,onClick:()=>t.refresh()})]})]}),r(u,{when:n,children:()=>i(`label`,{class:T.server,children:[r(`span`,{children:`Server`}),r(x,{size:`sm`,"aria-label":`State server URL`,value:t.serverUrl,onSubmit:e=>{t.setServerUrl(e),n.set(!1)}})]})}),r(b,{class:T.states,contentClass:T.statesContent,children:r(d,{each:t.states,fallback:()=>r(`p`,{class:T.none,children:`No states on this server.`}),children:e=>i(`button`,{type:`button`,class:T.state,onClick:()=>t.open(e.id),children:[r(`span`,{class:T.stateLabel,"data-tip-overflow":``,children:e.label}),r(`span`,{class:T.stateDate,children:e.date})]})},e=>e.id)})]})}function V(){return(V=e((()=>{p(),m(),w(),v(),l(),g(),E(),N(),a()})))()}export{N as a,V as i,P as n,k as o,B as r,I as t};