import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n,t as r}from"./jsx-runtime-DbCUSNU3.js";import{n as i,t as a}from"./story-root-DfeAHAKA.js";import{n as o,t as s}from"./observable-state-eRUcDuAs.js";import{n as c,t as l}from"./markdown-ArrLLmxo.js";var u,d,f,p,m,h;function g(){return(g=e((()=>{a(),s(),c(),r(),u={title:`Components/Markdown`},d=`display: grid; gap: var(--msp-space-3); width: 300px; padding: var(--msp-space-4); background: var(--msp-color-panel); color: var(--msp-color-text); font-size: var(--msp-font-size-sm);`,f=`color: var(--msp-color-text-muted);`,p=`## Binding site

This snapshot shows the **heme** pocket of *CYP3A4*, colored by \`element-symbol\`.

- Select the ligand
- Focus it with [the camera](#focus-ligand)
- Compare with [the apo state](#snapshot-2)

1. Load the structure
2. Apply the style

See the [PDB entry](https://www.rcsb.org/structure/1TQN) for details.`,m={render:()=>i(()=>{let e=o(`none`);return n(`div`,{style:d,children:[t(l,{source:p,onLink:t=>e.set(t)}),n(`span`,{style:f,children:[`link: `,e.asReadonly]})]})})},h=[`HelpText`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => story(() => {
    const link = observableState('none');
    return <div style={panel}>
          <Markdown source={source} onLink={href => link.set(href)} />
          <span style={readout}>link: {link.asReadonly}</span>
        </div>;
  })
}`,...m.parameters?.docs?.source},description:{story:"A help text with a heading, a list, code and links: `#` links go to `onLink`, web links open in a new tab.",...m.parameters?.docs?.description}}}})))()}g();export{m as HelpText,h as __namedExportsOrder,u as default};