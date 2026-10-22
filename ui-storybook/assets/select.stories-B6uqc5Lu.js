import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n,t as r}from"./jsx-runtime-Dut-27nP.js";import{n as i,t as a}from"./story-root-DtvPaZZ6.js";import{n as o,t as s}from"./observable-state-C67cgDrf.js";import{i as c,o as l}from"./select-iIBCxyFA.js";var u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{a(),s(),l(),r(),u={title:`Components/Select`},d=`display: grid; gap: var(--msp-space-3); width: 300px; padding: var(--msp-space-4); background: var(--msp-color-panel); color: var(--msp-color-text); font-size: var(--msp-font-size-sm);`,f=`color: var(--msp-color-text-muted);`,p=[[`cartoon`,`Cartoon`],[`ball-and-stick`,`Ball & Stick`],[`spacefill`,`Spacefill`],[`molecular-surface`,`Molecular Surface`]],m=[`atom-id`,`carbohydrate-symbol`,`chain-id`,`element-index`,`element-symbol`,`entity-id`,`entity-source`,`hydrophobicity`,`illumination`,`model-index`,`molecule-type`,`occupancy`,`operator-name`,`partial-charge`,`polymer-id`,`residue-name`,`secondary-structure`,`sequence-id`,`shape-group`,`uncertainty`,`uniform`].map(e=>[e,e.replace(/-/g,` `).replace(/^./,e=>e.toUpperCase())]),h={render:()=>i(()=>{let e=o(`cartoon`),r=o(`spacefill`);return n(`div`,{style:d,children:[t(c,{size:`sm`,"aria-label":`Small`,options:p,value:e.asReadonly,onChange:t=>e.set(t)}),n(`span`,{style:f,children:[`value: `,e.asReadonly]}),t(c,{size:`md`,"aria-label":`Medium`,options:p,value:r.asReadonly,onChange:e=>r.set(e)}),n(`span`,{style:f,children:[`value: `,r.asReadonly]})]})})},g={render:()=>i(()=>{let e=o(`chain-id`);return n(`div`,{style:d,children:[t(c,{"aria-label":`Color theme`,options:m,value:e.asReadonly,onChange:t=>e.set(t)}),n(`span`,{style:f,children:[`value: `,e.asReadonly]})]})})},_={render:()=>i(()=>{let e=o(`chain-id`);return n(`div`,{style:d,children:[n(`div`,{style:`display: grid; grid-template-columns: 96px minmax(0, 1fr); align-items: center; gap: var(--msp-space-3);`,children:[t(`span`,{style:f,children:`Color`}),t(c,{over:!0,size:`sm`,"aria-label":`Color theme`,options:m,value:e.asReadonly,onChange:t=>e.set(t)})]}),t(`p`,{style:`${f} margin: 0`,children:`This line stays where it is while the options are open.`}),n(`span`,{style:f,children:[`value: `,e.asReadonly]})]})})},v=[`Sizes`,`LongList`,`Over`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => story(() => {
    const sm = observableState('cartoon');
    const md = observableState('spacefill');
    return <div style={panel}>
          <Select size="sm" aria-label="Small" options={representations} value={sm.asReadonly} onChange={v => sm.set(v)} />
          <span style={readout}>value: {sm.asReadonly}</span>
          <Select size="md" aria-label="Medium" options={representations} value={md.asReadonly} onChange={v => md.set(v)} />
          <span style={readout}>value: {md.asReadonly}</span>
        </div>;
  })
}`,...h.parameters?.docs?.source},description:{story:`The small and the medium select side by side, each with its value below.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => story(() => {
    const value = observableState('chain-id');
    return <div style={panel}>
          <Select aria-label="Color theme" options={colorThemes} value={value.asReadonly} onChange={v => value.set(v)} />
          <span style={readout}>value: {value.asReadonly}</span>
        </div>;
  })
}`,...g.parameters?.docs?.source},description:{story:`A long option list: opened, it scrolls, with the current option marked; arrows, Home and End move.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => story(() => {
    const value = observableState('chain-id');
    const row = 'display: grid; grid-template-columns: 96px minmax(0, 1fr); align-items: center; gap: var(--msp-space-3);';
    return <div style={panel}>
          <div style={row}>
            <span style={readout}>Color</span>
            <Select over size="sm" aria-label="Color theme" options={colorThemes} value={value.asReadonly} onChange={v => value.set(v)} />
          </div>
          <p style={\`\${readout} margin: 0\`}>This line stays where it is while the options are open.</p>
          <span style={readout}>value: {value.asReadonly}</span>
        </div>;
  })
}`,..._.parameters?.docs?.source},description:{story:"Floating (`over`): the options open over what is below instead of pushing it down, for a short settings row; flips\nabove when there is no room below.",..._.parameters?.docs?.description}}}})))()}y();export{g as LongList,_ as Over,h as Sizes,v as __namedExportsOrder,u as default};