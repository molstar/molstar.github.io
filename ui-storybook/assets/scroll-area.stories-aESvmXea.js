import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,i as n,n as r,r as i,t as a}from"./jsx-runtime-DiBZWcxb.js";import{n as o,t as s}from"./scroll-area-XzYIuKyv.js";var c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),o(),a(),c={title:`Components/Scroll area`},l=`display: grid; grid-template-columns: repeat(auto-fill, 260px); gap: var(--msp-space-4); padding: var(--msp-space-4); background: var(--msp-color-panel); color: var(--msp-color-text); font-size: var(--msp-font-size-sm);`,u=`color: var(--msp-color-text-muted); font-size: var(--msp-font-size-xs); margin: 0 0 var(--msp-space-2);`,d=`display: flex; justify-content: space-between; height: 26px; align-items: center; padding: 0 var(--msp-space-3);`,f=e=>Array.from({length:e},(e,t)=>i(`div`,{style:d,children:[i(`span`,{children:[`Snapshot `,t+1]}),i(`span`,{style:`color: var(--msp-color-text-subtle)`,children:[`#`,t+1]})]})),p={render:()=>t(()=>i(`div`,{style:l,children:[i(`section`,{children:[r(`p`,{style:u,children:`A long list, at a fixed height`}),r(`div`,{style:`display: grid; height: 240px`,children:r(s,{"aria-label":`Long list`,children:f(40)})})]}),i(`section`,{children:[r(`p`,{style:u,children:`Short: nothing overflows, no bar, no fade`}),r(s,{"aria-label":`Short list`,children:f(4)})]}),i(`section`,{children:[r(`p`,{style:u,children:`On its own surface (the surface does not fade, its content does)`}),r(`div`,{style:`display: flex; flex-direction: column; max-height: 200px; border-radius: var(--msp-radius-md); background: var(--msp-color-well); box-shadow: inset 0 0 0 1px var(--msp-glass-edge);`,children:r(s,{"aria-label":`On a surface`,children:f(20)})})]}),i(`section`,{children:[r(`p`,{style:u,children:`Across (wide content)`}),r(s,{axis:`x`,"aria-label":`Wide`,children:r(`div`,{style:`display: flex; gap: var(--msp-space-2); padding: var(--msp-space-2)`,children:Array.from({length:30},(e,t)=>r(`span`,{style:`flex: none; width: 48px; height: 48px; display: grid; place-items: center; border-radius: var(--msp-radius-md); background: var(--msp-color-control)`,children:t+1}))})})]})]}))},m=[`Areas`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style={panel}>
        <section>
          <p style={caption}>A long list, at a fixed height</p>
          <div style="display: grid; height: 240px">
            <ScrollArea aria-label="Long list">{rows(40)}</ScrollArea>
          </div>
        </section>
        <section>
          <p style={caption}>Short: nothing overflows, no bar, no fade</p>
          <ScrollArea aria-label="Short list">{rows(4)}</ScrollArea>
        </section>
        <section>
          <p style={caption}>On its own surface (the surface does not fade, its content does)</p>
          <div style="display: flex; flex-direction: column; max-height: 200px; border-radius: var(--msp-radius-md); background: var(--msp-color-well); box-shadow: inset 0 0 0 1px var(--msp-glass-edge);">
            <ScrollArea aria-label="On a surface">{rows(20)}</ScrollArea>
          </div>
        </section>
        <section>
          <p style={caption}>Across (wide content)</p>
          <ScrollArea axis="x" aria-label="Wide">
            <div style="display: flex; gap: var(--msp-space-2); padding: var(--msp-space-2)">
              {Array.from({
            length: 30
          }, (_, i) => <span style="flex: none; width: 48px; height: 48px; display: grid; place-items: center; border-radius: var(--msp-radius-md); background: var(--msp-color-control)">
                  {i + 1}
                </span>)}
            </div>
          </ScrollArea>
        </section>
      </div>)
}`,...p.parameters?.docs?.source},description:{story:`Scrolling areas: overlay bars (shown on hover and while scrolling, hidden when nothing overflows; drag the thumb or
press the track), and edges that fade where there is more to scroll.`,...p.parameters?.docs?.description}}}})))()}h();export{p as Areas,m as __namedExportsOrder,c as default};