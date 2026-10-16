import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n,t as r}from"./jsx-runtime-DzTO5r4L.js";import{n as i,r as a}from"./registry-D35yV2Tb.js";import{S as o,_ as s}from"./params-form-BiSG3JZ9.js";import{i as c,n as l,t as u}from"./control-flow-2XcFB3wB.js";import{n as d,t as f}from"./map-COHPbqb4.js";import{n as p,t as m}from"./combineLatest-nINHdI9G.js";import{n as h,t as g}from"./distinctUntilChanged-Bi0nDGSG.js";import{n as _,r as v}from"./observable-state-8hMFvtS9.js";import{n as y,t as b}from"./icon-Fyk1xIJy.js";import{t as x}from"./scroll-area-O9ZFxK58.js";import{t as S}from"./src-CNHrM0KV.js";import{i as C,t as w}from"./home-tab-C3Gj-KZM.js";import{a as T,i as E,n as D,r as O,t as k}from"./tree-keys-CJ0gkmQ9.js";import{n as A,t as j}from"./scene-tree.module.css-BalDDs1s.js";var M;function N(){return(N=e((()=>{a(),M={blocks:`msp-viewer-state-tree-tab-blocks`,caption:`msp-viewer-state-tree-tab-caption`,error:`msp-viewer-state-tree-tab-error`,transform:`msp-viewer-state-tree-tab-transform`,tree:`msp-viewer-state-tree-tab-tree`},i(`viewer/views/state-tree/state-tree-tab.module.css`,`@layer msp.components {
.msp-viewer-state-tree-tab-error {
  color: var(--msp-color-danger);
}

.msp-viewer-state-tree-tab-transform {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  flex: none;
}

.msp-viewer-state-tree-tab-blocks {
  gap: var(--msp-space-1);
  margin: 0 calc(-1 * var(--msp-space-2));
  display: grid;
}

.msp-viewer-state-tree-tab-caption {
  margin: var(--msp-space-2) 0 0;
  padding: 0 var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-weight: 500;
}

.msp-viewer-state-tree-tab-tree {
  --msp-tree-indent: 8px;
}
}
`)})))()}function P(e){let{model:r}=e,i=v(new Set),a=v(`update`),o=(e,t)=>{a.set(t),r.select(e)},s=m([r.selected,a.asReadonly]).pipe(d(([e,t])=>e?`${t}\n${e}`:void 0),g());return n(`div`,{class:E.tab,children:[t(x,{edge:!0,class:E.tree,children:t(`div`,{class:`${j.tree} ${M.tree}`,role:`tree`,"aria-label":`State tree`,tabIndex:0,onKeyDown:O,onFocusIn:D,children:t(u,{each:r.roots,fallback:()=>t(`p`,{class:j.empty,children:`Nothing in the state yet.`}),children:e=>t(F,{model:r,node:e,depth:0,collapsed:i,open:o})},e=>e.ref)})}),t(x,{edge:!0,class:E.inspector,contentClass:E.inspectorContent,role:`region`,"aria-label":`Cell`,children:t(l,{when:s,fallback:()=>t(`p`,{class:E.inspectorEmpty,children:`Select a cell to update it or apply an action to it.`}),children:e=>{let[n,i]=e.split(`
`),a=r.inspect(i);return a?t(L,{inspection:a,focus:n}):null}})})]})}function F(e){let{model:r,node:i,depth:a,collapsed:s}=e,c=!!i.children?.length,f=s.asReadonly.pipe(d(e=>c&&!e.has(i.ref)),g()),p=r.selected.pipe(d(e=>e===i.ref),g()),m=v(!1),h=i.visible===!1,_=()=>{let e=new Set(s.value);e.has(i.ref)?e.delete(i.ref):e.add(i.ref),s.set(e)},y=o(`msp-tree-label`);return n(`div`,{role:`treeitem`,"aria-expanded":f,"aria-selected":p,"aria-labelledby":`${y} ${y}-d`,tabIndex:-1,class:j.item,children:[n(`div`,{"data-tip-row":``,"data-tree-row":``,class:j.row,classList:{[j.hidden]:h,[j.picked]:p},style:{"--msp-tree-depth":a},onClick:()=>r.select(i.ref),children:[t(`button`,{type:`button`,class:j.expander,classList:{[j.leaf]:!c},"data-tree-toggle":``,tabIndex:-1,"aria-label":`Expand`,onClick:e=>{e.stopPropagation(),_()},children:t(b,{name:`chevron-right`,size:14})}),a===0?t(b,{name:i.icon,size:15,class:j.kind}):null,t(`span`,{class:j.label,id:y,"data-tip-part":``,children:i.label}),t(`span`,{class:j.description,id:`${y}-d`,"data-tip-part":``,children:i.status===`error`?t(`span`,{class:M.error,children:i.error??`Error`}):i.description}),n(`span`,{class:j.actions,children:[i.visible===void 0?null:t(`button`,{type:`button`,class:j.action,classList:{[j.keep]:h},title:h?`Show`:`Hide`,onClick:e=>{e.stopPropagation(),r.toggleVisible(i.ref)},children:t(b,{name:h?`eye-off`:`eye`,size:14})}),t(`button`,{type:`button`,class:j.action,classList:{[j.keep]:m},title:`More`,"aria-expanded":m,onClick:e=>{e.stopPropagation(),m.set(!m.value)},children:t(b,{name:`ellipsis`,size:14})})]})]}),t(l,{when:m,children:()=>t(I,{model:r,node:i,depth:a,onPick:t=>{m.set(!1),e.open(i.ref,t)},onRemove:()=>{m.set(!1),r.remove(i.ref)}})}),t(l,{when:f,reveal:!0,children:()=>t(`div`,{role:`group`,children:t(u,{each:i.children??[],children:n=>t(F,{...e,node:n,depth:a+1})},e=>e.ref)})})]})}function I(e){let r=e.model.inspect(e.node.ref),i=(r,i,a)=>n(`button`,{type:`button`,role:`menuitem`,class:j.menuItem,onClick:()=>e.onPick(r),children:[t(`span`,{}),t(`span`,{children:i})]});return n(`div`,{class:j.menu,role:`menu`,style:{"--msp-tree-depth":e.depth},children:[r?.updates.map(e=>i(e.id,`${e.title}…`,`pencil`)),r?.actions.map(e=>i(e.id,`${e.title}…`,e.icon)),n(`button`,{type:`button`,role:`menuitem`,class:j.menuItem,"data-danger":``,onClick:e.onRemove,children:[t(`span`,{}),t(`span`,{children:`Remove`})]})]})}function L(e){let{node:r,updates:i,actions:a}=e.inspection;return n(`div`,{class:E.inspection,children:[n(`header`,{class:E.inspectorHeader,children:[t(`span`,{class:E.inspectorTitle,children:r.label}),t(`span`,{class:M.transform,children:r.transform})]}),n(`div`,{class:M.blocks,children:[i.map((n,r)=>t(w,{action:n,open:e.focus===n.id||r===0&&e.focus===`update`})),a.length?t(`p`,{class:M.caption,children:`Actions`}):null,a.map(n=>t(w,{action:n,open:e.focus===n.id}))]})]})}function R(){return(R=e((()=>{p(),h(),f(),y(),s(),S(),c(),_(),C(),A(),T(),N(),k(),r()})))()}export{R as n,P as t};