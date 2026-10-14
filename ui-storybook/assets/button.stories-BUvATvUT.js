import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,i as n,n as r,r as i,t as a}from"./jsx-runtime-DiBZWcxb.js";import{n as o,t as s}from"./map-CsR1ibWS.js";import{n as c,r as l}from"./observable-state-D-XGaosJ.js";import{n as u,t as d}from"./icon-Dqu8cMU0.js";import{n as f,t as p}from"./button-DEZz5joq.js";var m,h,g,_;function v(){return(v=e((()=>{s(),n(),c(),u(),f(),a(),m={title:`Components/Button`},h=`display: flex; gap: var(--msp-space-3); align-items: center; flex-wrap: wrap;`,g={render:()=>t(()=>{let e=l(!1);return i(`div`,{style:`display: grid; gap: var(--msp-space-4); padding: var(--msp-space-5)`,children:[i(`div`,{style:h,children:[r(p,{children:`Default`}),r(p,{variant:`primary`,children:`Apply`}),r(p,{variant:`ghost`,children:`Ghost`}),r(p,{variant:`danger`,children:`Remove`}),r(p,{disabled:!0,children:`Disabled`})]}),i(`div`,{style:h,children:[r(p,{size:`sm`,children:`Small`}),r(p,{size:`sm`,variant:`primary`,children:`Small primary`}),r(p,{size:`xs`,children:`Extra small`}),r(p,{icon:r(d,{name:`refresh-cw`}),children:`With icon`}),r(p,{icon:r(d,{name:`plus`}),title:`Icon only`}),r(p,{icon:r(d,{name:`trash-2`}),size:`sm`,title:`Small icon only`,variant:`ghost`}),r(p,{icon:r(d,{name:`refresh-cw`}),size:`xs`,title:`Extra small icon only`,variant:`ghost`})]}),r(`div`,{style:`width: 300px`,children:r(p,{block:!0,variant:`primary`,children:`Block`})}),i(`div`,{style:h,children:[r(p,{pressed:e,onClick:()=>e.set(!e.value),children:`Toggle`}),i(`span`,{children:[`pressed: `,e.asReadonly.pipe(o(String))]})]})]})})},_=[`Variants`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => story(() => {
    const pressed = observableState(false);
    return <div style="display: grid; gap: var(--msp-space-4); padding: var(--msp-space-5)">
          <div style={row}>
            <Button>Default</Button>
            <Button variant="primary">Apply</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Remove</Button>
            <Button disabled>Disabled</Button>
          </div>
          <div style={row}>
            <Button size="sm">Small</Button>
            <Button size="sm" variant="primary">
              Small primary
            </Button>
            <Button size="xs">Extra small</Button>
            <Button icon={<Icon name="refresh-cw" />}>With icon</Button>
            <Button icon={<Icon name="plus" />} title="Icon only" />
            <Button icon={<Icon name="trash-2" />} size="sm" title="Small icon only" variant="ghost" />
            <Button icon={<Icon name="refresh-cw" />} size="xs" title="Extra small icon only" variant="ghost" />
          </div>
          <div style="width: 300px">
            <Button block variant="primary">
              Block
            </Button>
          </div>
          <div style={row}>
            <Button pressed={pressed} onClick={() => pressed.set(!pressed.value)}>
              Toggle
            </Button>
            <span>pressed: {pressed.asReadonly.pipe(map(String))}</span>
          </div>
        </div>;
  })
}`,...g.parameters?.docs?.source}}}})))()}v();export{g as Variants,_ as __namedExportsOrder,m as default};