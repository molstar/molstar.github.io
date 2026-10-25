import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n,t as r}from"./jsx-runtime-DbCUSNU3.js";import{n as i,t as a}from"./story-root-DfeAHAKA.js";import{n as o,t as s}from"./observable-state-eRUcDuAs.js";import{n as c,t as l}from"./text-input-j_8_8M_A.js";var u,d,f,p,m,h;function g(){return(g=e((()=>{a(),s(),c(),r(),u={title:`Components/Text input`},d=`display: grid; gap: var(--msp-space-3); width: 300px; padding: var(--msp-space-4); background: var(--msp-color-panel); color: var(--msp-color-text); font-size: var(--msp-font-size-sm);`,f=`color: var(--msp-color-text-muted);`,p={render:()=>i(()=>{let e=o(``),r=o(`1tqn`);return n(`div`,{style:d,children:[t(l,{size:`sm`,placeholder:`Small`,"aria-label":`Small`,value:e.asReadonly,onInput:t=>e.set(t)}),n(`span`,{style:f,children:[`value: `,e.asReadonly]}),t(l,{size:`md`,placeholder:`Medium`,"aria-label":`Medium`,value:r.asReadonly,onInput:e=>r.set(e)}),n(`span`,{style:f,children:[`value: `,r.asReadonly]})]})})},m={render:()=>i(()=>{let e=o(``);return n(`div`,{style:d,children:[t(l,{placeholder:`PDB ID, then Enter`,"aria-label":`PDB ID`,onSubmit:t=>e.set(t)}),n(`span`,{style:f,children:[`submitted: `,e.asReadonly]})]})})},h=[`Sizes`,`Submit`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => story(() => {
    const sm = observableState('');
    const md = observableState('1tqn');
    return <div style={panel}>
          <TextInput size="sm" placeholder="Small" aria-label="Small" value={sm.asReadonly} onInput={v => sm.set(v)} />
          <span style={readout}>value: {sm.asReadonly}</span>
          <TextInput size="md" placeholder="Medium" aria-label="Medium" value={md.asReadonly} onInput={v => md.set(v)} />
          <span style={readout}>value: {md.asReadonly}</span>
        </div>;
  })
}`,...p.parameters?.docs?.source},description:{story:`The small and the medium field, with a placeholder; the value follows the typing.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => story(() => {
    const submitted = observableState('');
    return <div style={panel}>
          <TextInput placeholder="PDB ID, then Enter" aria-label="PDB ID" onSubmit={v => submitted.set(v)} />
          <span style={readout}>submitted: {submitted.asReadonly}</span>
        </div>;
  })
}`,...m.parameters?.docs?.source},description:{story:`Enter submits: the submitted value is echoed below, apart from the live one.`,...m.parameters?.docs?.description}}}})))()}g();export{p as Sizes,m as Submit,h as __namedExportsOrder,u as default};