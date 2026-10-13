import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,i as n,n as r,r as i,t as a}from"./jsx-runtime-pJJ4pzd1.js";import{n as o,r as s}from"./observable-state-U0Aegh1x.js";import{n as c,t as l}from"./text-input-BVt-QcfS.js";var u,d,f,p,m,h;function g(){return(g=e((()=>{n(),o(),c(),a(),u={title:`Components/Text input`},d=`display: grid; gap: var(--msp-space-3); width: 300px; padding: var(--msp-space-4); background: var(--msp-color-panel); color: var(--msp-color-text); font-size: var(--msp-font-size-sm);`,f=`color: var(--msp-color-text-muted);`,p={render:()=>t(()=>{let e=s(``),t=s(`1tqn`);return i(`div`,{style:d,children:[r(l,{size:`sm`,placeholder:`Small`,"aria-label":`Small`,value:e.asReadonly,onInput:t=>e.set(t)}),i(`span`,{style:f,children:[`value: `,e.asReadonly]}),r(l,{size:`md`,placeholder:`Medium`,"aria-label":`Medium`,value:t.asReadonly,onInput:e=>t.set(e)}),i(`span`,{style:f,children:[`value: `,t.asReadonly]})]})})},m={render:()=>t(()=>{let e=s(``);return i(`div`,{style:d,children:[r(l,{placeholder:`PDB ID, then Enter`,"aria-label":`PDB ID`,onSubmit:t=>e.set(t)}),i(`span`,{style:f,children:[`submitted: `,e.asReadonly]})]})})},h=[`Sizes`,`Submit`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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