import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,n,r,t as i,x as a}from"./jsx-runtime-DbCUSNU3.js";import{n as o,t as s}from"./story-root-DfeAHAKA.js";import{n as c,t as l}from"./observable-state-eRUcDuAs.js";import{n as u,t as d}from"./tooltip-D9O-2aTX.js";import{n as f,t as p}from"./choices-BEfIKmcx.js";var m,h,g,_,v,y,b;function x(){return(x=e((()=>{s(),a(),l(),d(),f(),i(),m={title:`Components/Choices`},h=`display: grid; gap: var(--msp-space-3); width: 300px; padding: var(--msp-space-4); background: var(--msp-color-panel); color: var(--msp-color-text); font-size: var(--msp-font-size-sm);`,g=`color: var(--msp-color-text-muted);`,_={render:()=>o(()=>{let e=c(`cartoon`);return r(`div`,{style:h,children:[n(p,{label:`Quick styles`,choices:[{id:`default`,label:`Default`},{id:`cartoon`,label:`Cartoon`},{id:`spacefill`,label:`Spacefill`},{id:`surface`,label:`Surface`}],active:e.asReadonly,onPick:t=>e.set(t)}),r(`span`,{style:g,children:[`active: `,e.asReadonly]})]})})},v={render:()=>o(()=>{let e=c(``);return r(`div`,{style:h,children:[n(p,{choices:[{id:`dynamics`,label:`Dynamics`},{id:`uncertainty`,label:`Uncertainty`},{id:`clear`,label:`Clear`}],onPick:t=>e.set(t)}),r(`span`,{style:g,children:[`picked: `,e.asReadonly]})]})})},y={render:()=>o(()=>n(`div`,{ref:e=>t(u(e)),style:`${h} width: 180px;`,children:n(p,{label:`Representation`,choices:[{id:`default`,label:`Default`},{id:`cartoon`,label:`Cartoon`},{id:`spacefill`,label:`Spacefill`},{id:`surface`,label:`Molecular surface`}],onPick:()=>{}})}))},b=[`QuickStyles`,`Plain`,`Narrow`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => story(() => {
    const active = observableState<string | undefined>('cartoon');
    return <div style={panel}>
          <Choices label="Quick styles" choices={[{
        id: 'default',
        label: 'Default'
      }, {
        id: 'cartoon',
        label: 'Cartoon'
      }, {
        id: 'spacefill',
        label: 'Spacefill'
      }, {
        id: 'surface',
        label: 'Surface'
      }]} active={active.asReadonly} onPick={id => active.set(id)} />
          <span style={readout}>active: {active.asReadonly}</span>
        </div>;
  })
}`,..._.parameters?.docs?.source},description:{story:`Quick styles (as the Structure tab has them): picking one marks it as the one in effect.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => story(() => {
    const picked = observableState('');
    return <div style={panel}>
          <Choices choices={[{
        id: 'dynamics',
        label: 'Dynamics'
      }, {
        id: 'uncertainty',
        label: 'Uncertainty'
      }, {
        id: 'clear',
        label: 'Clear'
      }]} onPick={id => picked.set(id)} />
          <span style={readout}>picked: {picked.asReadonly}</span>
        </div>;
  })
}`,...v.parameters?.docs?.source},description:{story:`Without a label or an active state: plain one-click actions, the pick echoed below.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div ref={(el: HTMLElement) => onCleanup(installTooltips(el))} style={\`\${panel} width: 180px;\`}>
        <Choices label="Representation" choices={[{
      id: 'default',
      label: 'Default'
    }, {
      id: 'cartoon',
      label: 'Cartoon'
    }, {
      id: 'spacefill',
      label: 'Spacefill'
    }, {
      id: 'surface',
      label: 'Molecular surface'
    }]} onPick={() => {}} />
      </div>)
}`,...y.parameters?.docs?.source},description:{story:`Narrow: the choices wrap into rows of equal widths; a label that still does not fit gives way (full on hover).`,...y.parameters?.docs?.description}}}})))()}x();export{y as Narrow,v as Plain,_ as QuickStyles,b as __namedExportsOrder,m as default};