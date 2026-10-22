import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n,t as r}from"./jsx-runtime-Dut-27nP.js";import{b as i,x as a}from"./work-queue-DoxU-HjK.js";import{n as o,t as s}from"./story-root-DtvPaZZ6.js";import{n as c,t as l}from"./observable-state-C67cgDrf.js";import{n as u,t as d}from"./icon-CrwnZGU9.js";import{n as f,t as p}from"./button-C9pAumBZ.js";var m,h,g,_;function v(){return(v=e((()=>{s(),l(),u(),f(),a(),r(),m={title:`Components/Button`},h=`display: flex; gap: var(--msp-space-3); align-items: center; flex-wrap: wrap;`,g={render:()=>o(()=>{let e=c(!1);return n(`div`,{style:`display: grid; gap: var(--msp-space-4); padding: var(--msp-space-5)`,children:[n(`div`,{style:h,children:[t(p,{children:`Default`}),t(p,{variant:`primary`,children:`Apply`}),t(p,{variant:`ghost`,children:`Ghost`}),t(p,{variant:`danger`,children:`Remove`}),t(p,{disabled:!0,children:`Disabled`})]}),n(`div`,{style:h,children:[t(p,{size:`sm`,children:`Small`}),t(p,{size:`sm`,variant:`primary`,children:`Small primary`}),t(p,{size:`xs`,children:`Extra small`}),t(p,{icon:t(d,{name:`refresh-cw`}),children:`With icon`}),t(p,{icon:t(d,{name:`plus`}),title:`Icon only`}),t(p,{icon:t(d,{name:`trash-2`}),size:`sm`,title:`Small icon only`,variant:`ghost`}),t(p,{icon:t(d,{name:`refresh-cw`}),size:`xs`,title:`Extra small icon only`,variant:`ghost`})]}),t(`div`,{style:`width: 300px`,children:t(p,{block:!0,variant:`primary`,children:`Block`})}),n(`div`,{style:h,children:[t(p,{pressed:e,onClick:()=>e.set(!e.value),children:`Toggle`}),n(`span`,{children:[`pressed: `,i(e.asReadonly,String)]})]})]})})},_=[`Variants`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
            <span>pressed: {derive(pressed.asReadonly, String)}</span>
          </div>
        </div>;
  })
}`,...g.parameters?.docs?.source}}}})))()}v();export{g as Variants,_ as __namedExportsOrder,m as default};