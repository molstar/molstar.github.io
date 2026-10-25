import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,S as n,n as r,r as i,t as a}from"./jsx-runtime-DbCUSNU3.js";import{n as o,r as s}from"./registry-D35yV2Tb.js";import{b as c,x as l}from"./work-queue-DoxU-HjK.js";import{n as u,t as d}from"./observable-state-eRUcDuAs.js";import{l as f,u as p}from"./manager-CrN3WzFc.js";import{i as m,n as h,t as g}from"./control-flow-BQuMY04w.js";import{n as _,t as v}from"./icon-1ydjt1pd.js";import{t as y}from"./scroll-area-ukLK_GOt.js";import{t as b}from"./params-form-D0fEgQzm.js";import{n as x,t as S}from"./keyed-selector-MU49iODI.js";import{t as C}from"./text-input-j_8_8M_A.js";import{t as w}from"./button-B7k80QJA.js";import{t as T}from"./action-footer-COsCeMvF.js";import{t as E}from"./src-BO5PfBJ6.js";var D;function O(){return(O=e((()=>{s(),D={action:`msp-viewer-home-tab-action`,actionBody:`msp-viewer-home-tab-actionBody`,actionDescription:`msp-viewer-home-tab-actionDescription`,actionHeader:`msp-viewer-home-tab-actionHeader`,actionTitle:`msp-viewer-home-tab-actionTitle`,caption:`msp-viewer-home-tab-caption`,captionActions:`msp-viewer-home-tab-captionActions`,captionRow:`msp-viewer-home-tab-captionRow`,chevron:`msp-viewer-home-tab-chevron`,confirm:`msp-viewer-home-tab-confirm`,confirmText:`msp-viewer-home-tab-confirmText`,content:`msp-viewer-home-tab-content`,contentInner:`msp-viewer-home-tab-contentInner`,drop:`msp-viewer-home-tab-drop`,dropLink:`msp-viewer-home-tab-dropLink`,dropText:`msp-viewer-home-tab-dropText`,group:`msp-viewer-home-tab-group`,hint:`msp-viewer-home-tab-hint`,home:`msp-viewer-home-tab-home`,none:`msp-viewer-home-tab-none`,offer:`msp-viewer-home-tab-offer`,offerIcon:`msp-viewer-home-tab-offerIcon`,offerText:`msp-viewer-home-tab-offerText`,server:`msp-viewer-home-tab-server`,serverHost:`msp-viewer-home-tab-serverHost`,session:`msp-viewer-home-tab-session`,sessionSummary:`msp-viewer-home-tab-sessionSummary`,spin:`msp-viewer-home-tab-spin`,state:`msp-viewer-home-tab-state`,stateDate:`msp-viewer-home-tab-stateDate`,stateLabel:`msp-viewer-home-tab-stateLabel`,states:`msp-viewer-home-tab-states`,statesContent:`msp-viewer-home-tab-statesContent`},o(`viewer/views/home/home-tab.module.css`,`@layer msp.components {
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
`)})))()}function j(e){let t=new Date(e.first),n=new Date(e.last);if(t.toDateString()!==n.toDateString())return`${N.format(t)} – ${N.format(n)}`;let r=P.format(t),i=P.format(n);return r===i?`${N.format(t)}, ${r}`:`${N.format(t)}, ${r}–${i}`}function M(e){let{model:a}=e,o;n(e=>{e?o??=a.watch():(o?.(),o=void 0)}),t(()=>o?.());let s=u(void 0),l=x(s.asReadonly);return r(h,{when:c(a.list,e=>e.length>0),children:()=>i(`section`,{class:k.group,"aria-label":`Kept records`,children:[r(`h3`,{class:k.caption,children:`Kept records`}),r(`div`,{class:k.listContent,role:`list`,children:r(g,{each:a.list,by:e=>e.id,children:e=>{let t=l.key(e.id);return i(`div`,{class:k.record,role:`listitem`,children:[i(`button`,{type:`button`,class:k.open,title:`Open in History (read-only)`,onClick:()=>a.open(e.id),children:[r(`span`,{class:k.title,"data-tip-overflow":``,children:e.title}),r(`span`,{class:k.when,children:j(e)})]}),r(h,{when:t,fallback:()=>r(w,{size:`xs`,variant:`ghost`,class:k.forget,icon:r(v,{name:`trash-2`}),title:`Forget this record`,onClick:()=>s.set(e.id)}),children:()=>r(w,{size:`xs`,variant:`ghost`,class:`${k.forget} ${k.asking}`,title:`Forget it: it is removed from this browser`,onClick:()=>{s.set(void 0),a.forget(e.id)},children:`Forget?`})})]})}})})]})})}var N,P;function F(){return(F=e((()=>{E(),_(),m(),d(),A(),l(),S(),a(),N=new Intl.DateTimeFormat(void 0,{month:`short`,day:`numeric`}),P=new Intl.DateTimeFormat(void 0,{hour:`2-digit`,minute:`2-digit`})})))()}function I(e){let{home:t}=e;return i(`div`,{class:D.home,children:[i(y,{class:D.content,contentClass:D.contentInner,children:[t.session?r(z,{session:t.session}):null,t.annotationOffer?r(B,{model:t.annotationOffer}):null,i(`section`,{class:D.group,"aria-label":`Actions`,children:[r(g,{each:c(t.actions,e=>e.slice(0,1)),by:e=>e.id,children:e=>r(R,{action:e,open:!0})}),r(L,{home:t}),r(g,{each:c(t.actions,e=>e.slice(1)),by:e=>e.id,children:e=>r(R,{action:e,open:!1})}),e.more?.()]}),t.remoteStates?r(H,{model:t.remoteStates,caption:!0}):null,t.keptRecords?r(M,{model:t.keptRecords}):null]}),i(`button`,{type:`button`,class:D.hint,onClick:()=>e.onOpenCommandMenu?.(),children:[r(`kbd`,{children:f({key:`k`,mod:!0})}),r(`span`,{children:`Search every command`})]})]})}function L(e){let{home:t}=e,n=u(!1),a=u(!1),o=e=>{e.length&&t.openFiles(e)},s=r(`input`,{type:`file`,multiple:!0,hidden:!0,onChange:e=>{let t=e.currentTarget,n=[...t.files??[]];t.value=``,o(n)}}),l=e=>!!e.dataTransfer?.types.includes(`Files`);return i(`div`,{class:D.action,"data-open":c(n.asReadonly,e=>e?``:void 0),children:[i(`button`,{type:`button`,class:D.actionHeader,"aria-expanded":n,onClick:()=>n.set(!n.value),children:[r(`span`,{class:D.actionTitle,children:`Open Files`}),r(`span`,{class:D.actionDescription,children:`Structures, maps, trajectories and sessions from your computer`}),r(v,{name:`chevron-down`,size:14,class:D.chevron})]}),r(h,{when:n,reveal:!0,children:()=>i(`div`,{class:D.actionBody,children:[i(`button`,{type:`button`,class:D.drop,"data-over":c(a.asReadonly,e=>e?``:void 0),title:t.formats.length?`Reads ${t.formats.join(`, `)}`:void 0,onClick:()=>s.click(),onDragEnter:e=>{l(e)&&(e.preventDefault(),a.set(!0))},onDragOver:e=>{l(e)&&e.preventDefault()},onDragLeave:()=>a.set(!1),onDrop:e=>{e.preventDefault(),a.set(!1),o([...e.dataTransfer?.files??[]])},children:[r(v,{name:`folder-open`,size:20}),i(`span`,{class:D.dropText,children:[`Drop files here, or `,r(`span`,{class:D.dropLink,children:`browse`})]})]}),s]})})]})}function R(e){let{action:t}=e,n=u(e.open);return i(`div`,{class:D.action,"data-open":c(n.asReadonly,e=>e?``:void 0),children:[i(`button`,{type:`button`,class:D.actionHeader,"aria-expanded":n,onClick:()=>n.set(!n.value),children:[r(`span`,{class:D.actionTitle,children:t.title}),r(`span`,{class:D.actionDescription,children:t.description}),r(v,{name:`chevron-down`,size:14,class:D.chevron})]}),r(h,{when:n,reveal:!0,children:()=>i(`div`,{class:D.actionBody,children:[t.form?r(b,{form:t.form}):null,r(T,{icon:t.icon,label:t.applyLabel??`Apply`,busy:t.busy,onApply:()=>t.apply(),onReset:t.form?()=>t.form?.reset():void 0})]})})]})}function z(e){let{session:t}=e,n=u(!1);return r(h,{when:c(t.isEmpty,e=>!e),children:()=>i(`section`,{class:D.group,"aria-label":`Current session`,children:[r(`div`,{class:D.captionRow,children:r(`h3`,{class:D.caption,children:`Current session`})}),i(`div`,{class:D.session,children:[r(`span`,{class:D.sessionSummary,"data-tip-overflow":``,children:t.summary}),r(h,{when:n,fallback:()=>r(w,{size:`sm`,variant:`ghost`,icon:r(v,{name:`trash-2`}),onClick:()=>n.set(!0),children:`Clear`}),children:()=>i(`span`,{class:D.confirm,role:`group`,"aria-label":`Clear everything loaded?`,children:[r(`span`,{class:D.confirmText,children:`Clear everything?`}),r(w,{size:`sm`,variant:`ghost`,onClick:()=>n.set(!1),children:`Cancel`}),r(w,{size:`sm`,variant:`danger`,onClick:()=>{n.set(!1),t.clear()},children:`Clear`})]})})]})]})})}function B(e){let{model:t}=e;return r(h,{when:t.offer,children:e=>i(`section`,{class:D.offer,"aria-label":`Loaded`,children:[r(v,{name:`sparkles`,size:14,class:D.offerIcon}),i(`span`,{class:D.offerText,"data-tip-overflow":``,title:e.description,children:[e.label,` has `,e.title]}),r(w,{size:`sm`,variant:`ghost`,onClick:()=>t.accept(),children:`Show`}),r(w,{size:`xs`,variant:`ghost`,icon:r(v,{name:`x`}),title:`Dismiss`,onClick:()=>t.dismiss()})]})})}function V(e){try{return new URL(e).host}catch{return e}}function H(e){let{model:t}=e,n=u(!1);return i(`section`,{class:D.group,"aria-label":`Remote states`,children:[i(`div`,{class:D.captionRow,children:[e.caption?r(`h3`,{class:D.caption,children:`Remote states`}):r(`span`,{class:D.serverHost,"data-tip-overflow":``,children:c(t.serverUrl,V)}),i(`span`,{class:D.captionActions,children:[r(w,{size:`xs`,variant:`ghost`,icon:r(v,{name:`settings`}),title:`Server`,pressed:n.asReadonly,onClick:()=>n.set(!n.value)}),r(w,{size:`xs`,variant:`ghost`,icon:r(h,{when:t.loading,fallback:()=>r(v,{name:`refresh-cw`}),children:()=>r(v,{name:`loader-circle`,class:D.spin})}),title:`Refresh`,onClick:()=>t.refresh()})]})]}),r(h,{when:n,children:()=>i(`label`,{class:D.server,children:[r(`span`,{children:`Server`}),r(C,{size:`sm`,"aria-label":`State server URL`,value:t.serverUrl,onSubmit:e=>{t.setServerUrl(e),n.set(!1)}})]})}),r(y,{class:D.states,contentClass:D.statesContent,children:r(g,{each:t.states,by:e=>e.id,fallback:()=>r(`p`,{class:D.none,children:`No states on this server.`}),children:e=>i(`button`,{type:`button`,class:D.state,onClick:()=>t.open(e.id),children:[r(`span`,{class:D.stateLabel,"data-tip-overflow":``,children:e.label}),r(`span`,{class:D.stateDate,children:e.date})]})})})]})}function U(){return(U=e((()=>{p(),E(),_(),m(),d(),O(),F(),l(),a()})))()}export{F as a,U as i,I as n,j as o,H as r,R as t};