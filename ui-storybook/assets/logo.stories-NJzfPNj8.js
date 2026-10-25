import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n,t as r}from"./jsx-runtime-DbCUSNU3.js";import{n as i,t as a}from"./story-root-DfeAHAKA.js";import{n as o,t as s}from"./icon-1ydjt1pd.js";import{r as c,t as l}from"./wordmark-zN2ZvaUG.js";function u(e){return n(`div`,{style:m,children:[e.children,t(`span`,{style:h,children:e.label})]})}function d(e){return n(`div`,{"data-msp-theme":e.theme,style:`display: grid; gap: 20px; padding: 20px; border-radius: var(--msp-radius-lg); background: var(--msp-color-panel); color: var(--msp-color-text);`,children:[n(`div`,{style:`display: grid; gap: var(--msp-space-3)`,children:[t(`span`,{style:h,children:`The wordmark (Home's heading; the empty canvas at 3×): hover it for the logo's colors`}),n(`div`,{style:`display: flex; gap: var(--msp-space-6); align-items: end; flex-wrap: wrap`,children:[t(l,{}),t(l,{scale:2}),t(l,{scale:3,live:!0})]})]}),n(`div`,{style:`display: grid; gap: var(--msp-space-3)`,children:[t(`span`,{style:h,children:`The Home icon (16, 20, 24, 48 px)`}),t(`div`,{style:`display: flex; gap: var(--msp-space-5); align-items: center`,children:[16,20,24,48].map(e=>t(s,{name:`prism`,size:e}))})]})]})}var f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{a(),o(),c(),r(),f={title:`Components/Logo`},p=`display: flex; gap: var(--msp-space-6); align-items: center; flex-wrap: wrap; padding: var(--msp-space-6); background: var(--msp-color-bg); color: var(--msp-color-text);`,m=`display: grid; gap: var(--msp-space-3); justify-items: start;`,h=`color: var(--msp-color-text-muted); font-size: var(--msp-font-size-sm);`,g={render:()=>i(()=>n(`div`,{style:`display: grid; grid-template-columns: repeat(auto-fit, minmax(420px, 1fr)); gap: var(--msp-space-5); padding: var(--msp-space-5)`,children:[t(d,{theme:`light`}),t(d,{theme:`dark`})]}))},_={render:()=>i(()=>n(`div`,{style:p,children:[t(u,{label:`rare`,children:t(l,{flash:`rare`})}),t(u,{label:`often`,children:t(l,{flash:`often`})}),t(u,{label:`reveal`,children:t(l,{flash:`reveal`})})]}))},v={render:()=>i(()=>n(`div`,{children:[t(`div`,{style:p,children:t(u,{label:`on the background`,children:t(l,{scale:3,flash:`reveal`,live:!0})})}),t(`div`,{style:p,"data-msp-theme":`dark`,children:t(u,{label:`on a dark surface`,children:t(l,{scale:3,flash:`reveal`,live:!0})})})]}))},y=[`Logo`,`Flash`,`Live`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(420px, 1fr)); gap: var(--msp-space-5); padding: var(--msp-space-5)">
        <LogoPanel theme="light" />
        <LogoPanel theme="dark" />
      </div>)
}`,...g.parameters?.docs?.source},description:{story:`The logo: the Mol* wordmark with Prism's mark after it, a triangle as tall as the asterisk pointing away from it (a
prism, a play button) with a thicker core inside (a tetrahedron from above); Home's icon is the mark as a delta.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style={surface}>
        <Labelled label="rare">
          <MolstarWordmark flash="rare" />
        </Labelled>
        <Labelled label="often">
          <MolstarWordmark flash="often" />
        </Labelled>
        <Labelled label="reveal">
          <MolstarWordmark flash="reveal" />
        </Labelled>
      </div>)
}`,..._.parameters?.docs?.source},description:{story:`The flash of the logo's colors: now and then (rare, a heading), often, or wiped in once and kept (reveal).`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div>
        <div style={surface}>
          <Labelled label="on the background">
            <MolstarWordmark scale={3} flash="reveal" live />
          </Labelled>
        </div>
        <div style={surface} data-msp-theme="dark">
          <Labelled label="on a dark surface">
            <MolstarWordmark scale={3} flash="reveal" live />
          </Labelled>
        </div>
      </div>)
}`,...v.parameters?.docs?.source},description:{story:`Alive under the pointer (the empty canvas): move across it, on the background and on a dark surface.`,...v.parameters?.docs?.description}}}})))()}b();export{_ as Flash,v as Live,g as Logo,y as __namedExportsOrder,f as default};