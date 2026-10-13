import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{X as t,Z as n,n as r,r as i,t as a}from"./jsx-runtime-pJJ4pzd1.js";import{n as o,t as s}from"./map-BLVP9Oyc.js";import{n as c,r as l}from"./observable-state-U0Aegh1x.js";import{d as u,i as d,n as f,r as p,u as m}from"./control-flow-D80wAH1n.js";import{n as h,t as g}from"./combineLatest-BuVl0X9y.js";import{n as _,t as v}from"./icon-Cd9kBD44.js";import{t as y}from"./scroll-area-W5mfuQm0.js";import{t as b}from"./src-C9Ks2Bfq.js";import{r as x,t as S}from"./home-tab-Dd7aiD7K.js";import{i as C,n as w,r as T,t as E}from"./structure-tab.module.css-BK4plch1.js";var D;function O(){return(O=e((()=>{n(),D={blocks:`msp-viewer-state-tree-tab-blocks`,caption:`msp-viewer-state-tree-tab-caption`,error:`msp-viewer-state-tree-tab-error`,transform:`msp-viewer-state-tree-tab-transform`,tree:`msp-viewer-state-tree-tab-tree`},t(`viewer/views/state-tree/state-tree-tab.module.css`,`@layer msp.components {
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
`)})))()}function k(e){let{model:t}=e,n=l(new Set),a=l(`update`),s=(e,n)=>{a.set(n),t.select(e)},c=g([t.selected,a.asReadonly]).pipe(o(([e,t])=>e?`${t}\n${e}`:void 0),m());return i(`div`,{class:E.tab,children:[r(y,{edge:!0,class:E.tree,children:r(`div`,{class:`${T.tree} ${D.tree}`,role:`tree`,"aria-label":`State tree`,children:r(f,{each:t.roots,fallback:()=>r(`p`,{class:T.empty,children:`Nothing in the state yet.`}),children:e=>r(A,{model:t,node:e,depth:0,collapsed:n,open:s})},e=>e.ref)})}),r(y,{edge:!0,class:E.inspector,contentClass:E.inspectorContent,role:`region`,"aria-label":`Cell`,children:r(p,{when:c,fallback:()=>r(`p`,{class:E.inspectorEmpty,children:`Select a cell to update it or apply an action to it.`}),children:e=>{let[n,i]=e.split(`
`),a=t.inspect(i);return a?r(M,{inspection:a,focus:n}):null}})})]})}function A(e){let{model:t,node:n,depth:a,collapsed:s}=e,c=!!n.children?.length,u=s.asReadonly.pipe(o(e=>c&&!e.has(n.ref)),m()),d=t.selected.pipe(o(e=>e===n.ref),m()),h=l(!1),g=n.visible===!1,_=()=>{let e=new Set(s.value);e.has(n.ref)?e.delete(n.ref):e.add(n.ref),s.set(e)};return i(`div`,{role:`treeitem`,"aria-expanded":u,"aria-selected":d,children:[i(`div`,{"data-tip-row":``,class:T.row,classList:{[T.hidden]:g,[T.picked]:d},style:{"--msp-tree-depth":a},onClick:()=>t.select(n.ref),children:[r(`button`,{type:`button`,class:T.expander,classList:{[T.leaf]:!c},"aria-label":`Expand`,onClick:e=>{e.stopPropagation(),_()},children:r(v,{name:`chevron-right`,size:14})}),a===0?r(v,{name:n.icon,size:15,class:T.kind}):null,r(`span`,{class:T.label,"data-tip-part":``,children:n.label}),r(`span`,{class:T.description,"data-tip-part":``,children:n.status===`error`?r(`span`,{class:D.error,children:n.error??`Error`}):n.description}),i(`span`,{class:T.actions,children:[n.visible===void 0?null:r(`button`,{type:`button`,class:T.action,classList:{[T.keep]:g},title:g?`Show`:`Hide`,onClick:e=>{e.stopPropagation(),t.toggleVisible(n.ref)},children:r(v,{name:g?`eye-off`:`eye`,size:14})}),r(`button`,{type:`button`,class:T.action,classList:{[T.keep]:h},title:`More`,"aria-expanded":h,onClick:e=>{e.stopPropagation(),h.set(!h.value)},children:r(v,{name:`ellipsis`,size:14})})]})]}),r(p,{when:h,children:()=>r(j,{model:t,node:n,depth:a,onPick:t=>{h.set(!1),e.open(n.ref,t)},onRemove:()=>{h.set(!1),t.remove(n.ref)}})}),r(p,{when:u,reveal:!0,children:()=>r(`div`,{role:`group`,children:r(f,{each:n.children??[],children:t=>r(A,{...e,node:t,depth:a+1})},e=>e.ref)})})]})}function j(e){let t=e.model.inspect(e.node.ref),n=(t,n,a)=>i(`button`,{type:`button`,role:`menuitem`,class:T.menuItem,onClick:()=>e.onPick(t),children:[r(`span`,{}),r(`span`,{children:n})]});return i(`div`,{class:T.menu,role:`menu`,style:{"--msp-tree-depth":e.depth},children:[t?.updates.map(e=>n(e.id,`${e.title}…`,`pencil`)),t?.actions.map(e=>n(e.id,`${e.title}…`,e.icon)),i(`button`,{type:`button`,role:`menuitem`,class:T.menuItem,"data-danger":``,onClick:e.onRemove,children:[r(`span`,{}),r(`span`,{children:`Remove`})]})]})}function M(e){let{node:t,updates:n,actions:a}=e.inspection;return i(`div`,{class:E.inspection,children:[i(`header`,{class:E.inspectorHeader,children:[r(`span`,{class:E.inspectorTitle,children:t.label}),r(`span`,{class:D.transform,children:t.transform})]}),i(`div`,{class:D.blocks,children:[n.map((t,n)=>r(S,{action:t,open:e.focus===t.id||n===0&&e.focus===`update`})),a.length?r(`p`,{class:D.caption,children:`Actions`}):null,a.map(t=>r(S,{action:t,open:e.focus===t.id}))]})]})}function N(){return(N=e((()=>{h(),u(),s(),_(),b(),d(),c(),x(),C(),w(),O(),a()})))()}export{N as n,k as t};