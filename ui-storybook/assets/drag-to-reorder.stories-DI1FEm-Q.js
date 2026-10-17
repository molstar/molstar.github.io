import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n,t as r}from"./jsx-runtime-Dut-27nP.js";import{i,t as a}from"./control-flow-BLsZc6z1.js";import{b as o,x as s}from"./work-queue-DoxU-HjK.js";import{n as c,t as l}from"./story-root-DtvPaZZ6.js";import{n as u,t as d}from"./observable-state-C67cgDrf.js";import{n as f,t as p}from"./icon-Fyk1xIJy.js";import{n as m,t as h}from"./drag-to-reorder-11M_XZD8.js";var g,_,v,y,b,x;function S(){return(S=e((()=>{l(),i(),d(),f(),m(),s(),r(),g={title:`Components/Drag to reorder`},_=`display: grid; gap: var(--msp-space-3); width: 300px; padding: var(--msp-space-4); background: var(--msp-color-panel); color: var(--msp-color-text); font-size: var(--msp-font-size-sm);`,v=`color: var(--msp-color-text-muted);`,y=`
.story-reorder-item { display: flex; align-items: center; gap: var(--msp-space-3); height: 30px; padding: 0 var(--msp-space-3); border-radius: var(--msp-radius-md); background: var(--msp-color-control); }
.story-reorder-item[data-dragging] { opacity: 0.5; }
.story-reorder-item[data-drop="before"] { box-shadow: 0 -2px 0 var(--msp-color-text-muted); }
.story-reorder-item[data-drop="after"] { box-shadow: 0 2px 0 var(--msp-color-text-muted); }
.story-reorder-grip { display: grid; place-items: center; width: 14px; height: 22px; color: var(--msp-color-text-subtle); cursor: grab; touch-action: none; }
`,b={render:()=>c(()=>{let e=u([`Overview`,`Binding site`,`Ligand`,`Surface`,`Final`]),r,i=(t,n)=>{let r=e.value.filter(e=>e!==t);r.splice(n,0,t),e.set(r)};return n(`div`,{style:_,children:[t(`style`,{children:y}),t(`div`,{style:`display: grid; gap: var(--msp-space-2)`,ref:e=>{r=e},children:t(a,{each:e.asReadonly,children:e=>n(`div`,{class:`story-reorder-item`,"data-id":e,children:[t(`span`,{class:`story-reorder-grip`,"aria-hidden":`true`,onPointerDown:t=>h(t,r,e,t=>i(e,t)),children:t(p,{name:`grip-vertical`,size:14})}),t(`span`,{children:e})]})},e=>e)}),n(`span`,{style:v,children:[`order: `,o(e.asReadonly,e=>e.join(`, `))]})]})})},x=[`Rows`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
          <span style={readout}>order: {derive(rows.asReadonly, r => r.join(', '))}</span>
        </div>;
  })
}`,...b.parameters?.docs?.source},description:{story:`Five rows moved by their grip: the row being moved fades and a line shows where it lands.`,...b.parameters?.docs?.description}}}})))()}S();export{b as Rows,x as __namedExportsOrder,g as default};