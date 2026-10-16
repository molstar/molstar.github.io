import{F as x,L as R,M as T,b as S,c as C,g as c,h,o as b,r as p,s as e,t as a,u as z,v as d}from"./chunk-VAXRDBNC.js";import{b as f,v as y}from"./chunk-4XDSNK62.js";import{i as l}from"./chunk-QZGD7T6O.js";var s={action:"msp-viewer-home-tab-action",actionBody:"msp-viewer-home-tab-actionBody",actionDescription:"msp-viewer-home-tab-actionDescription",actionHeader:"msp-viewer-home-tab-actionHeader",actionTitle:"msp-viewer-home-tab-actionTitle",caption:"msp-viewer-home-tab-caption",captionActions:"msp-viewer-home-tab-captionActions",captionRow:"msp-viewer-home-tab-captionRow",chevron:"msp-viewer-home-tab-chevron",confirm:"msp-viewer-home-tab-confirm",confirmText:"msp-viewer-home-tab-confirmText",content:"msp-viewer-home-tab-content",contentInner:"msp-viewer-home-tab-contentInner",drop:"msp-viewer-home-tab-drop",dropLink:"msp-viewer-home-tab-dropLink",dropText:"msp-viewer-home-tab-dropText",group:"msp-viewer-home-tab-group",hint:"msp-viewer-home-tab-hint",home:"msp-viewer-home-tab-home",none:"msp-viewer-home-tab-none",offer:"msp-viewer-home-tab-offer",offerIcon:"msp-viewer-home-tab-offerIcon",offerText:"msp-viewer-home-tab-offerText",server:"msp-viewer-home-tab-server",serverHost:"msp-viewer-home-tab-serverHost",session:"msp-viewer-home-tab-session",sessionSummary:"msp-viewer-home-tab-sessionSummary",spin:"msp-viewer-home-tab-spin",state:"msp-viewer-home-tab-state",stateDate:"msp-viewer-home-tab-stateDate",stateLabel:"msp-viewer-home-tab-stateLabel",states:"msp-viewer-home-tab-states",statesContent:"msp-viewer-home-tab-statesContent"};b("viewer/views/home/home-tab.module.css",`@layer msp.components {
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
`);var v={asking:"msp-viewer-kept-records-asking",caption:"msp-viewer-kept-records-caption",forget:"msp-viewer-kept-records-forget",group:"msp-viewer-kept-records-group",listContent:"msp-viewer-kept-records-listContent",open:"msp-viewer-kept-records-open",record:"msp-viewer-kept-records-record",title:"msp-viewer-kept-records-title",when:"msp-viewer-kept-records-when"};b("viewer/views/home/kept-records.module.css",`@layer msp.components {
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
`);var g=new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric"}),D=new Intl.DateTimeFormat(void 0,{hour:"2-digit",minute:"2-digit"});function L(i){let o=new Date(i.first),t=new Date(i.last);if(o.toDateString()!==t.toDateString())return`${g.format(o)} \u2013 ${g.format(t)}`;let r=D.format(o),m=D.format(t);return r===m?`${g.format(o)}, ${r}`:`${g.format(o)}, ${r}\u2013${m}`}function H(i){let{model:o}=i,t;C(m=>{m?t??=o.watch():(t?.(),t=void 0)}),S(()=>t?.());let r=f(void 0);return e(c,{when:o.list.pipe(l(m=>m.length>0)),children:()=>a("section",{class:v.group,"aria-label":"Kept records",children:[e("h3",{class:v.caption,children:"Kept records"}),e("div",{class:v.listContent,role:"list",children:e(h,{each:o.list,children:m=>{let w=r.asReadonly.pipe(l(u=>u===m.id));return a("div",{class:v.record,role:"listitem",children:[a("button",{type:"button",class:v.open,title:"Open in History (read-only)",onClick:()=>o.open(m.id),children:[e("span",{class:v.title,"data-tip-overflow":"",children:m.title}),e("span",{class:v.when,children:L(m)})]}),e(c,{when:w,fallback:()=>e(d,{size:"xs",variant:"ghost",class:v.forget,icon:e(p,{name:"trash-2"}),title:"Forget this record",onClick:()=>r.set(m.id)}),children:()=>e(d,{size:"xs",variant:"ghost",class:`${v.forget} ${v.asking}`,title:"Forget it: it is removed from this browser",onClick:()=>{r.set(void 0),o.forget(m.id)},children:"Forget?"})})]})}},m=>m.id)})]})})}function me(i){let{home:o}=i;return a("div",{class:s.home,children:[a(x,{class:s.content,contentClass:s.contentInner,children:[o.session?e(M,{session:o.session}):null,o.annotationOffer?e(B,{model:o.annotationOffer}):null,a("section",{class:s.group,"aria-label":"Actions",children:[e(h,{each:o.actions.pipe(l(t=>t.slice(0,1))),children:t=>e(A,{action:t,open:!0})},t=>t.id),e(I,{home:o}),e(h,{each:o.actions.pipe(l(t=>t.slice(1))),children:t=>e(A,{action:t,open:!1})},t=>t.id),i.more?.()]}),o.remoteStates?e($,{model:o.remoteStates,caption:!0}):null,o.keptRecords?e(H,{model:o.keptRecords}):null]}),a("button",{type:"button",class:s.hint,onClick:()=>i.onOpenCommandMenu?.(),children:[e("kbd",{children:y({key:"k",mod:!0})}),e("span",{children:"Search every command"})]})]})}function I(i){let{home:o}=i,t=f(!1),r=f(!1),m=n=>{n.length&&o.openFiles(n)},w=e("input",{type:"file",multiple:!0,hidden:!0,onChange:n=>{let k=n.currentTarget,F=[...k.files??[]];k.value="",m(F)}}),u=n=>!!n.dataTransfer?.types.includes("Files");return a("div",{class:s.action,"data-open":t.asReadonly.pipe(l(n=>n?"":void 0)),children:[a("button",{type:"button",class:s.actionHeader,"aria-expanded":t,onClick:()=>t.set(!t.value),children:[e("span",{class:s.actionTitle,children:"Open Files"}),e("span",{class:s.actionDescription,children:"Structures, maps, trajectories and sessions from your computer"}),e(p,{name:"chevron-down",size:14,class:s.chevron})]}),e(c,{when:t,reveal:!0,children:()=>a("div",{class:s.actionBody,children:[a("button",{type:"button",class:s.drop,"data-over":r.asReadonly.pipe(l(n=>n?"":void 0)),title:o.formats.length?`Reads ${o.formats.join(", ")}`:void 0,onClick:()=>w.click(),onDragEnter:n=>{u(n)&&(n.preventDefault(),r.set(!0))},onDragOver:n=>{u(n)&&n.preventDefault()},onDragLeave:()=>r.set(!1),onDrop:n=>{n.preventDefault(),r.set(!1),m([...n.dataTransfer?.files??[]])},children:[e(p,{name:"folder-open",size:20}),a("span",{class:s.dropText,children:["Drop files here, or ",e("span",{class:s.dropLink,children:"browse"})]})]}),w]})})]})}function A(i){let{action:o}=i,t=f(i.open);return a("div",{class:s.action,"data-open":t.asReadonly.pipe(l(r=>r?"":void 0)),children:[a("button",{type:"button",class:s.actionHeader,"aria-expanded":t,onClick:()=>t.set(!t.value),children:[e("span",{class:s.actionTitle,children:o.title}),e("span",{class:s.actionDescription,children:o.description}),e(p,{name:"chevron-down",size:14,class:s.chevron})]}),e(c,{when:t,reveal:!0,children:()=>a("div",{class:s.actionBody,children:[o.form?e(R,{form:o.form}):null,e(z,{icon:o.icon,label:o.applyLabel??"Apply",busy:o.busy,onApply:()=>o.apply(),onReset:o.form?()=>o.form?.reset():void 0})]})})]})}function M(i){let{session:o}=i,t=f(!1);return e(c,{when:o.isEmpty.pipe(l(r=>!r)),children:()=>a("section",{class:s.group,"aria-label":"Current session",children:[e("div",{class:s.captionRow,children:e("h3",{class:s.caption,children:"Current session"})}),a("div",{class:s.session,children:[e("span",{class:s.sessionSummary,"data-tip-overflow":"",children:o.summary}),e(c,{when:t,fallback:()=>e(d,{size:"sm",variant:"ghost",icon:e(p,{name:"trash-2"}),onClick:()=>t.set(!0),children:"Clear"}),children:()=>a("span",{class:s.confirm,role:"group","aria-label":"Clear everything loaded?",children:[e("span",{class:s.confirmText,children:"Clear everything?"}),e(d,{size:"sm",variant:"ghost",onClick:()=>t.set(!1),children:"Cancel"}),e(d,{size:"sm",variant:"danger",onClick:()=>{t.set(!1),o.clear()},children:"Clear"})]})})]})]})})}function B(i){let{model:o}=i;return e(c,{when:o.offer,children:t=>a("section",{class:s.offer,"aria-label":"Loaded",children:[e(p,{name:"sparkles",size:14,class:s.offerIcon}),a("span",{class:s.offerText,"data-tip-overflow":"",title:t.description,children:[t.label," has ",t.title]}),e(d,{size:"sm",variant:"ghost",onClick:()=>o.accept(),children:"Show"}),e(d,{size:"xs",variant:"ghost",icon:e(p,{name:"x"}),title:"Dismiss",onClick:()=>o.dismiss()})]})})}function O(i){try{return new URL(i).host}catch{return i}}function $(i){let{model:o}=i,t=f(!1);return a("section",{class:s.group,"aria-label":"Remote states",children:[a("div",{class:s.captionRow,children:[i.caption?e("h3",{class:s.caption,children:"Remote states"}):e("span",{class:s.serverHost,"data-tip-overflow":"",children:o.serverUrl.pipe(l(O))}),a("span",{class:s.captionActions,children:[e(d,{size:"xs",variant:"ghost",icon:e(p,{name:"settings"}),title:"Server",pressed:t.asReadonly,onClick:()=>t.set(!t.value)}),e(d,{size:"xs",variant:"ghost",icon:e(c,{when:o.loading,fallback:()=>e(p,{name:"refresh-cw"}),children:()=>e(p,{name:"loader-circle",class:s.spin})}),title:"Refresh",onClick:()=>o.refresh()})]})]}),e(c,{when:t,children:()=>a("label",{class:s.server,children:[e("span",{children:"Server"}),e(T,{size:"sm","aria-label":"State server URL",value:o.serverUrl,onSubmit:r=>{o.setServerUrl(r),t.set(!1)}})]})}),e(x,{class:s.states,contentClass:s.statesContent,children:e(h,{each:o.states,fallback:()=>e("p",{class:s.none,children:"No states on this server."}),children:r=>a("button",{type:"button",class:s.state,onClick:()=>o.open(r.id),children:[e("span",{class:s.stateLabel,"data-tip-overflow":"",children:r.label}),e("span",{class:s.stateDate,children:r.date})]})},r=>r.id)})]})}export{L as a,me as b,A as c,$ as d};
