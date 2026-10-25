import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n,t as r}from"./jsx-runtime-DbCUSNU3.js";import{b as i,x as a}from"./work-queue-DoxU-HjK.js";import{n as o,t as s}from"./story-root-DfeAHAKA.js";import{n as c,t as l}from"./observable-state-eRUcDuAs.js";import{i as u,t as d}from"./control-flow-BQuMY04w.js";import{n as f,t as p}from"./icon-1ydjt1pd.js";import{n as m,t as h}from"./drag-to-reorder-DYUT-DYW.js";var g,_,v,y,b,x;function S(){return(S=e((()=>{s(),u(),l(),f(),m(),a(),r(),g={title:`Components/Drag to reorder`},_=`display: grid; gap: var(--msp-space-3); width: 300px; padding: var(--msp-space-4); background: var(--msp-color-panel); color: var(--msp-color-text); font-size: var(--msp-font-size-sm);`,v=`color: var(--msp-color-text-muted);`,y=`
.story-reorder-item { display: flex; align-items: center; gap: var(--msp-space-3); height: 30px; padding: 0 var(--msp-space-3); border-radius: var(--msp-radius-md); background: var(--msp-color-control); }
.story-reorder-item[data-dragging] { opacity: 0.5; }
.story-reorder-item[data-drop="before"] { box-shadow: 0 -2px 0 var(--msp-color-text-muted); }
.story-reorder-item[data-drop="after"] { box-shadow: 0 2px 0 var(--msp-color-text-muted); }
.story-reorder-grip { display: grid; place-items: center; width: 14px; height: 22px; color: var(--msp-color-text-subtle); cursor: grab; touch-action: none; }
`,b={render:()=>o(()=>{let e=c([`Overview`,`Binding site`,`Ligand`,`Surface`,`Final`]),r,a=(t,n)=>{let r=e.value.filter(e=>e!==t);r.splice(n,0,t),e.set(r)};return n(`div`,{style:_,children:[t(`style`,{children:y}),t(`div`,{style:`display: grid; gap: var(--msp-space-2)`,ref:e=>{r=e},children:t(d,{each:e.asReadonly,by:e=>e,children:e=>n(`div`,{class:`story-reorder-item`,"data-id":e,children:[t(`span`,{class:`story-reorder-grip`,"aria-hidden":`true`,onPointerDown:t=>h(t,r,e,t=>a(e,t)),children:t(p,{name:`grip-vertical`,size:14})}),t(`span`,{children:e})]})})}),n(`span`,{style:v,children:[`order: `,i(e.asReadonly,e=>e.join(`, `))]})]})})},x=[`Rows`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => story(() => {
    const rows = observableState(['Overview', 'Binding site', 'Ligand', 'Surface', 'Final']);
    let list: HTMLElement | undefined;
    const moveTo = (id: string, index: number) => {
      const next = rows.value.filter(r => r !== id);
      next.splice(index, 0, id);
      rows.set(next);
    };
    return <div style={panel}>
          <style>{css}</style>
          <div style="display: grid; gap: var(--msp-space-2)" ref={(el: HTMLElement) => {
        list = el;
      }}>
            <For each={rows.asReadonly} by={r => r}>
              {label => <div class="story-reorder-item" data-id={label}>
                  <span class="story-reorder-grip" aria-hidden="true" onPointerDown={e => dragToReorder(e, list, label, index => moveTo(label, index))}>
                    <Icon name="grip-vertical" size={14} />
                  </span>
                  <span>{label}</span>
                </div>}
            </For>
          </div>
          <span style={readout}>order: {derive(rows.asReadonly, r => r.join(', '))}</span>
        </div>;
  })
}`,...b.parameters?.docs?.source},description:{story:`Five rows moved by their grip: the row being moved fades and a line shows where it lands.`,...b.parameters?.docs?.description}}}})))()}S();export{b as Rows,x as __namedExportsOrder,g as default};