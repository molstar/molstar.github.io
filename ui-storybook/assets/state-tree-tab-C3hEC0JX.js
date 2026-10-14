import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n,t as r}from"./jsx-runtime-DiBZWcxb.js";import{i,r as a}from"./base-Cal5NIfy.js";import{n as o,t as s}from"./distinctUntilChanged-BHDujrwf.js";import{a as c,n as l,r as u}from"./control-flow-HAEcegil.js";import{n as d,t as f}from"./map-CsR1ibWS.js";import{n as p,t as m}from"./combineLatest-Cmmnh-lC.js";import{n as h,r as g}from"./observable-state-D-XGaosJ.js";import{n as _,t as v}from"./icon-Dqu8cMU0.js";import{t as y}from"./scroll-area-XzYIuKyv.js";import{t as b}from"./src-C_tJCfFc.js";import{r as x,t as S}from"./home-tab-CGpToPZJ.js";import{i as C,n as w,r as T,t as E}from"./structure-tab.module.css-lV2vAWDb.js";var D;function O(){return(O=e((()=>{i(),D={blocks:`msp-viewer-state-tree-tab-blocks`,caption:`msp-viewer-state-tree-tab-caption`,error:`msp-viewer-state-tree-tab-error`,transform:`msp-viewer-state-tree-tab-transform`,tree:`msp-viewer-state-tree-tab-tree`},a(`viewer/views/state-tree/state-tree-tab.module.css`,`@layer msp.components {
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
`)})))()}function k(e){let{model:r}=e,i=g(new Set),a=g(`update`),o=(e,t)=>{a.set(t),r.select(e)},c=m([r.selected,a.asReadonly]).pipe(d(([e,t])=>e?`${t}\n${e}`:void 0),s());return n(`div`,{class:E.tab,children:[t(y,{edge:!0,class:E.tree,children:t(`div`,{class:`${T.tree} ${D.tree}`,role:`tree`,"aria-label":`State tree`,children:t(l,{each:r.roots,fallback:()=>t(`p`,{class:T.empty,children:`Nothing in the state yet.`}),children:e=>t(A,{model:r,node:e,depth:0,collapsed:i,open:o})},e=>e.ref)})}),t(y,{edge:!0,class:E.inspector,contentClass:E.inspectorContent,role:`region`,"aria-label":`Cell`,children:t(u,{when:c,fallback:()=>t(`p`,{class:E.inspectorEmpty,children:`Select a cell to update it or apply an action to it.`}),children:e=>{let[n,i]=e.split(`
`),a=r.inspect(i);return a?t(M,{inspection:a,focus:n}):null}})})]})}function A(e){let{model:r,node:i,depth:a,collapsed:o}=e,c=!!i.children?.length,f=o.asReadonly.pipe(d(e=>c&&!e.has(i.ref)),s()),p=r.selected.pipe(d(e=>e===i.ref),s()),m=g(!1),h=i.visible===!1,_=()=>{let e=new Set(o.value);e.has(i.ref)?e.delete(i.ref):e.add(i.ref),o.set(e)};return n(`div`,{role:`treeitem`,"aria-expanded":f,"aria-selected":p,children:[n(`div`,{"data-tip-row":``,class:T.row,classList:{[T.hidden]:h,[T.picked]:p},style:{"--msp-tree-depth":a},onClick:()=>r.select(i.ref),children:[t(`button`,{type:`button`,class:T.expander,classList:{[T.leaf]:!c},"aria-label":`Expand`,onClick:e=>{e.stopPropagation(),_()},children:t(v,{name:`chevron-right`,size:14})}),a===0?t(v,{name:i.icon,size:15,class:T.kind}):null,t(`span`,{class:T.label,"data-tip-part":``,children:i.label}),t(`span`,{class:T.description,"data-tip-part":``,children:i.status===`error`?t(`span`,{class:D.error,children:i.error??`Error`}):i.description}),n(`span`,{class:T.actions,children:[i.visible===void 0?null:t(`button`,{type:`button`,class:T.action,classList:{[T.keep]:h},title:h?`Show`:`Hide`,onClick:e=>{e.stopPropagation(),r.toggleVisible(i.ref)},children:t(v,{name:h?`eye-off`:`eye`,size:14})}),t(`button`,{type:`button`,class:T.action,classList:{[T.keep]:m},title:`More`,"aria-expanded":m,onClick:e=>{e.stopPropagation(),m.set(!m.value)},children:t(v,{name:`ellipsis`,size:14})})]})]}),t(u,{when:m,children:()=>t(j,{model:r,node:i,depth:a,onPick:t=>{m.set(!1),e.open(i.ref,t)},onRemove:()=>{m.set(!1),r.remove(i.ref)}})}),t(u,{when:f,reveal:!0,children:()=>t(`div`,{role:`group`,children:t(l,{each:i.children??[],children:n=>t(A,{...e,node:n,depth:a+1})},e=>e.ref)})})]})}function j(e){let r=e.model.inspect(e.node.ref),i=(r,i,a)=>n(`button`,{type:`button`,role:`menuitem`,class:T.menuItem,onClick:()=>e.onPick(r),children:[t(`span`,{}),t(`span`,{children:i})]});return n(`div`,{class:T.menu,role:`menu`,style:{"--msp-tree-depth":e.depth},children:[r?.updates.map(e=>i(e.id,`${e.title}…`,`pencil`)),r?.actions.map(e=>i(e.id,`${e.title}…`,e.icon)),n(`button`,{type:`button`,role:`menuitem`,class:T.menuItem,"data-danger":``,onClick:e.onRemove,children:[t(`span`,{}),t(`span`,{children:`Remove`})]})]})}function M(e){let{node:r,updates:i,actions:a}=e.inspection;return n(`div`,{class:E.inspection,children:[n(`header`,{class:E.inspectorHeader,children:[t(`span`,{class:E.inspectorTitle,children:r.label}),t(`span`,{class:D.transform,children:r.transform})]}),n(`div`,{class:D.blocks,children:[i.map((n,r)=>t(S,{action:n,open:e.focus===n.id||r===0&&e.focus===`update`})),a.length?t(`p`,{class:D.caption,children:`Actions`}):null,a.map(n=>t(S,{action:n,open:e.focus===n.id}))]})]})}function N(){return(N=e((()=>{p(),o(),f(),_(),b(),c(),h(),x(),C(),w(),O(),r()})))()}export{N as n,k as t};