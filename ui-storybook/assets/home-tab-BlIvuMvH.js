import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{S as t,n,r,t as i,x as a}from"./jsx-runtime-Dut-27nP.js";import{n as o,r as s}from"./registry-D35yV2Tb.js";import{i as c,n as l,t as u}from"./control-flow-BGkEkAG8.js";import{b as d,x as f}from"./work-queue-DoxU-HjK.js";import{n as p,t as m}from"./observable-state-C67cgDrf.js";import{c as h,l as g}from"./manager-DdxqI_fE.js";import{n as _,t as v}from"./icon-CrwnZGU9.js";import{t as y}from"./scroll-area-C3WxaIdw.js";import{t as b}from"./params-form-BQ9MddDI.js";import{n as x,t as S}from"./keyed-selector-MU49iODI.js";import{t as C}from"./text-input-6-TvZsXK.js";import{t as w}from"./button-C9pAumBZ.js";import{t as T}from"./action-footer-H5OADnJ2.js";import{t as E}from"./src-2NOkYUjT.js";var D;function O(){return(O=e((()=>{s(),D={action:`msp-viewer-home-tab-action`,actionBody:`msp-viewer-home-tab-actionBody`,actionDescription:`msp-viewer-home-tab-actionDescription`,actionHeader:`msp-viewer-home-tab-actionHeader`,actionTitle:`msp-viewer-home-tab-actionTitle`,caption:`msp-viewer-home-tab-caption`,captionActions:`msp-viewer-home-tab-captionActions`,captionRow:`msp-viewer-home-tab-captionRow`,chevron:`msp-viewer-home-tab-chevron`,confirm:`msp-viewer-home-tab-confirm`,confirmText:`msp-viewer-home-tab-confirmText`,content:`msp-viewer-home-tab-content`,contentInner:`msp-viewer-home-tab-contentInner`,drop:`msp-viewer-home-tab-drop`,dropLink:`msp-viewer-home-tab-dropLink`,dropText:`msp-viewer-home-tab-dropText`,group:`msp-viewer-home-tab-group`,hint:`msp-viewer-home-tab-hint`,home:`msp-viewer-home-tab-home`,none:`msp-viewer-home-tab-none`,offer:`msp-viewer-home-tab-offer`,offerIcon:`msp-viewer-home-tab-offerIcon`,offerText:`msp-viewer-home-tab-offerText`,server:`msp-viewer-home-tab-server`,serverHost:`msp-viewer-home-tab-serverHost`,session:`msp-viewer-home-tab-session`,sessionSummary:`msp-viewer-home-tab-sessionSummary`,spin:`msp-viewer-home-tab-spin`,state:`msp-viewer-home-tab-state`,stateDate:`msp-viewer-home-tab-stateDate`,stateLabel:`msp-viewer-home-tab-stateLabel`,states:`msp-viewer-home-tab-states`,statesContent:`msp-viewer-home-tab-statesContent`},o(`viewer/views/home/home-tab.module.css`,`@layer msp.components {
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
`)})))()}var k;function A(){return(A=e((()=>{s(),k={asking:`msp-viewer-kept-records-asking`,caption:`msp-viewer-kept-records-caption`,forget:`msp-viewer-kept-records-forget`,group:`msp-viewer-kept-records-group`,listContent:`msp-viewer-kept-records-listContent`,open:`msp-viewer-kept-records-open`,record:`msp-viewer-kept-records-record`,title:`msp-viewer-kept-records-title`,when:`msp-viewer-kept-records-when`},o(`viewer/views/home/kept-records.module.css`,`@layer msp.components {
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
`)})))()}function j(e){let t=new Date(e.first),n=new Date(e.last);if(t.toDateString()!==n.toDateString())return`${N.format(t)} – ${N.format(n)}`;let r=P.format(t),i=P.format(n);return r===i?`${N.format(t)}, ${r}`:`${N.format(t)}, ${r}–${i}`}function M(e){let{model:i}=e,o;a(e=>{e?o??=i.watch():(o?.(),o=void 0)}),t(()=>o?.());let s=p(void 0),c=x(s.asReadonly);return n(l,{when:d(i.list,e=>e.length>0),children:()=>r(`section`,{class:k.group,"aria-label":`Kept records`,children:[n(`h3`,{class:k.caption,children:`Kept records`}),n(`div`,{class:k.listContent,role:`list`,children:n(u,{each:i.list,children:e=>{let t=c.key(e.id);return r(`div`,{class:k.record,role:`listitem`,children:[r(`button`,{type:`button`,class:k.open,title:`Open in History (read-only)`,onClick:()=>i.open(e.id),children:[n(`span`,{class:k.title,"data-tip-overflow":``,children:e.title}),n(`span`,{class:k.when,children:j(e)})]}),n(l,{when:t,fallback:()=>n(w,{size:`xs`,variant:`ghost`,class:k.forget,icon:n(v,{name:`trash-2`}),title:`Forget this record`,onClick:()=>s.set(e.id)}),children:()=>n(w,{size:`xs`,variant:`ghost`,class:`${k.forget} ${k.asking}`,title:`Forget it: it is removed from this browser`,onClick:()=>{s.set(void 0),i.forget(e.id)},children:`Forget?`})})]})}},e=>e.id)})]})})}var N,P;function F(){return(F=e((()=>{E(),_(),c(),m(),A(),f(),S(),i(),N=new Intl.DateTimeFormat(void 0,{month:`short`,day:`numeric`}),P=new Intl.DateTimeFormat(void 0,{hour:`2-digit`,minute:`2-digit`})})))()}function I(e){let{home:t}=e;return r(`div`,{class:D.home,children:[r(y,{class:D.content,contentClass:D.contentInner,children:[t.session?n(z,{session:t.session}):null,t.annotationOffer?n(B,{model:t.annotationOffer}):null,r(`section`,{class:D.group,"aria-label":`Actions`,children:[n(u,{each:d(t.actions,e=>e.slice(0,1)),children:e=>n(R,{action:e,open:!0})},e=>e.id),n(L,{home:t}),n(u,{each:d(t.actions,e=>e.slice(1)),children:e=>n(R,{action:e,open:!1})},e=>e.id),e.more?.()]}),t.remoteStates?n(H,{model:t.remoteStates,caption:!0}):null,t.keptRecords?n(M,{model:t.keptRecords}):null]}),r(`button`,{type:`button`,class:D.hint,onClick:()=>e.onOpenCommandMenu?.(),children:[n(`kbd`,{children:h({key:`k`,mod:!0})}),n(`span`,{children:`Search every command`})]})]})}function L(e){let{home:t}=e,i=p(!1),a=p(!1),o=e=>{e.length&&t.openFiles(e)},s=n(`input`,{type:`file`,multiple:!0,hidden:!0,onChange:e=>{let t=e.currentTarget,n=[...t.files??[]];t.value=``,o(n)}}),c=e=>!!e.dataTransfer?.types.includes(`Files`);return r(`div`,{class:D.action,"data-open":d(i.asReadonly,e=>e?``:void 0),children:[r(`button`,{type:`button`,class:D.actionHeader,"aria-expanded":i,onClick:()=>i.set(!i.value),children:[n(`span`,{class:D.actionTitle,children:`Open Files`}),n(`span`,{class:D.actionDescription,children:`Structures, maps, trajectories and sessions from your computer`}),n(v,{name:`chevron-down`,size:14,class:D.chevron})]}),n(l,{when:i,reveal:!0,children:()=>r(`div`,{class:D.actionBody,children:[r(`button`,{type:`button`,class:D.drop,"data-over":d(a.asReadonly,e=>e?``:void 0),title:t.formats.length?`Reads ${t.formats.join(`, `)}`:void 0,onClick:()=>s.click(),onDragEnter:e=>{c(e)&&(e.preventDefault(),a.set(!0))},onDragOver:e=>{c(e)&&e.preventDefault()},onDragLeave:()=>a.set(!1),onDrop:e=>{e.preventDefault(),a.set(!1),o([...e.dataTransfer?.files??[]])},children:[n(v,{name:`folder-open`,size:20}),r(`span`,{class:D.dropText,children:[`Drop files here, or `,n(`span`,{class:D.dropLink,children:`browse`})]})]}),s]})})]})}function R(e){let{action:t}=e,i=p(e.open);return r(`div`,{class:D.action,"data-open":d(i.asReadonly,e=>e?``:void 0),children:[r(`button`,{type:`button`,class:D.actionHeader,"aria-expanded":i,onClick:()=>i.set(!i.value),children:[n(`span`,{class:D.actionTitle,children:t.title}),n(`span`,{class:D.actionDescription,children:t.description}),n(v,{name:`chevron-down`,size:14,class:D.chevron})]}),n(l,{when:i,reveal:!0,children:()=>r(`div`,{class:D.actionBody,children:[t.form?n(b,{form:t.form}):null,n(T,{icon:t.icon,label:t.applyLabel??`Apply`,busy:t.busy,onApply:()=>t.apply(),onReset:t.form?()=>t.form?.reset():void 0})]})})]})}function z(e){let{session:t}=e,i=p(!1);return n(l,{when:d(t.isEmpty,e=>!e),children:()=>r(`section`,{class:D.group,"aria-label":`Current session`,children:[n(`div`,{class:D.captionRow,children:n(`h3`,{class:D.caption,children:`Current session`})}),r(`div`,{class:D.session,children:[n(`span`,{class:D.sessionSummary,"data-tip-overflow":``,children:t.summary}),n(l,{when:i,fallback:()=>n(w,{size:`sm`,variant:`ghost`,icon:n(v,{name:`trash-2`}),onClick:()=>i.set(!0),children:`Clear`}),children:()=>r(`span`,{class:D.confirm,role:`group`,"aria-label":`Clear everything loaded?`,children:[n(`span`,{class:D.confirmText,children:`Clear everything?`}),n(w,{size:`sm`,variant:`ghost`,onClick:()=>i.set(!1),children:`Cancel`}),n(w,{size:`sm`,variant:`danger`,onClick:()=>{i.set(!1),t.clear()},children:`Clear`})]})})]})]})})}function B(e){let{model:t}=e;return n(l,{when:t.offer,children:e=>r(`section`,{class:D.offer,"aria-label":`Loaded`,children:[n(v,{name:`sparkles`,size:14,class:D.offerIcon}),r(`span`,{class:D.offerText,"data-tip-overflow":``,title:e.description,children:[e.label,` has `,e.title]}),n(w,{size:`sm`,variant:`ghost`,onClick:()=>t.accept(),children:`Show`}),n(w,{size:`xs`,variant:`ghost`,icon:n(v,{name:`x`}),title:`Dismiss`,onClick:()=>t.dismiss()})]})})}function V(e){try{return new URL(e).host}catch{return e}}function H(e){let{model:t}=e,i=p(!1);return r(`section`,{class:D.group,"aria-label":`Remote states`,children:[r(`div`,{class:D.captionRow,children:[e.caption?n(`h3`,{class:D.caption,children:`Remote states`}):n(`span`,{class:D.serverHost,"data-tip-overflow":``,children:d(t.serverUrl,V)}),r(`span`,{class:D.captionActions,children:[n(w,{size:`xs`,variant:`ghost`,icon:n(v,{name:`settings`}),title:`Server`,pressed:i.asReadonly,onClick:()=>i.set(!i.value)}),n(w,{size:`xs`,variant:`ghost`,icon:n(l,{when:t.loading,fallback:()=>n(v,{name:`refresh-cw`}),children:()=>n(v,{name:`loader-circle`,class:D.spin})}),title:`Refresh`,onClick:()=>t.refresh()})]})]}),n(l,{when:i,children:()=>r(`label`,{class:D.server,children:[n(`span`,{children:`Server`}),n(C,{size:`sm`,"aria-label":`State server URL`,value:t.serverUrl,onSubmit:e=>{t.setServerUrl(e),i.set(!1)}})]})}),n(y,{class:D.states,contentClass:D.statesContent,children:n(u,{each:t.states,fallback:()=>n(`p`,{class:D.none,children:`No states on this server.`}),children:e=>r(`button`,{type:`button`,class:D.state,onClick:()=>t.open(e.id),children:[n(`span`,{class:D.stateLabel,"data-tip-overflow":``,children:e.label}),n(`span`,{class:D.stateDate,children:e.date})]})},e=>e.id)})]})}function U(){return(U=e((()=>{g(),E(),_(),c(),m(),O(),F(),f(),i()})))()}export{F as a,U as i,I as n,j as o,H as r,R as t};