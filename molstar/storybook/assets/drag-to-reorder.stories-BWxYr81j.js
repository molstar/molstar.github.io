import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,i as n,n as r,r as i,t as a}from"./jsx-runtime-pJJ4pzd1.js";import{n as o,t as s}from"./map-BLVP9Oyc.js";import{n as c,r as l}from"./observable-state-U0Aegh1x.js";import{i as u,n as d}from"./control-flow-D80wAH1n.js";import{n as f,t as p}from"./icon-Cd9kBD44.js";import{t as m}from"./drag-to-reorder-BIcwE7OS.js";var h,g,_,v,y,b;function x(){return(x=e((()=>{s(),n(),u(),c(),f(),a(),h={title:`Components/Drag to reorder`},g=`display: grid; gap: var(--msp-space-3); width: 300px; padding: var(--msp-space-4); background: var(--msp-color-panel); color: var(--msp-color-text); font-size: var(--msp-font-size-sm);`,_=`color: var(--msp-color-text-muted);`,v=`
.story-reorder-item { display: flex; align-items: center; gap: var(--msp-space-3); height: 30px; padding: 0 var(--msp-space-3); border-radius: var(--msp-radius-md); background: var(--msp-color-control); }
.story-reorder-item[data-dragging] { opacity: 0.5; }
.story-reorder-item[data-drop="before"] { box-shadow: 0 -2px 0 var(--msp-color-text-muted); }
.story-reorder-item[data-drop="after"] { box-shadow: 0 2px 0 var(--msp-color-text-muted); }
.story-reorder-grip { display: grid; place-items: center; width: 14px; height: 22px; color: var(--msp-color-text-subtle); cursor: grab; touch-action: none; }
`,y={render:()=>t(()=>{let e=l([`Overview`,`Binding site`,`Ligand`,`Surface`,`Final`]),t,n=(t,n)=>{let r=e.value.filter(e=>e!==t);r.splice(n,0,t),e.set(r)};return i(`div`,{style:g,children:[r(`style`,{children:v}),r(`div`,{style:`display: grid; gap: var(--msp-space-2)`,ref:e=>{t=e},children:r(d,{each:e.asReadonly,children:e=>i(`div`,{class:`story-reorder-item`,"data-id":e,children:[r(`span`,{class:`story-reorder-grip`,"aria-hidden":`true`,onPointerDown:r=>m(r,t,e,t=>n(e,t)),children:r(p,{name:`grip-vertical`,size:14})}),r(`span`,{children:e})]})},e=>e)}),i(`span`,{style:_,children:[`order: `,e.asReadonly.pipe(o(e=>e.join(`, `)))]})]})})},b=[`Rows`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
            <For each={rows.asReadonly} key={r => r}>
              {label => <div class="story-reorder-item" data-id={label}>
                  <span class="story-reorder-grip" aria-hidden="true" onPointerDown={e => dragToReorder(e, list, label, index => moveTo(label, index))}>
                    <Icon name="grip-vertical" size={14} />
                  </span>
                  <span>{label}</span>
                </div>}
            </For>
          </div>
          <span style={readout}>order: {rows.asReadonly.pipe(map(r => r.join(', ')))}</span>
        </div>;
  })
}`,...y.parameters?.docs?.source},description:{story:`Five rows moved by their grip: the row being moved fades and a line shows where it lands.`,...y.parameters?.docs?.description}}}})))()}x();export{y as Rows,b as __namedExportsOrder,h as default};