import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,i as n,n as r,r as i,t as a}from"./jsx-runtime-pJJ4pzd1.js";import{n as o,t as s}from"./wordmark-D5tvrxoo.js";function c(e){return i(`div`,{style:d,children:[e.children,r(`span`,{style:f,children:e.label})]})}var l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{n(),o(),a(),l={title:`Components/Wordmark`},u=`display: flex; gap: var(--msp-space-6); align-items: center; flex-wrap: wrap; padding: var(--msp-space-6); background: var(--msp-color-bg); color: var(--msp-color-text);`,d=`display: grid; gap: var(--msp-space-3); justify-items: start;`,f=`color: var(--msp-color-text-muted); font-size: var(--msp-font-size-sm);`,p={render:()=>t(()=>i(`div`,{style:u,children:[r(c,{label:`rare`,children:r(s,{flash:`rare`})}),r(c,{label:`often`,children:r(s,{flash:`often`})}),r(c,{label:`reveal`,children:r(s,{flash:`reveal`})})]}))},m={render:()=>t(()=>i(`div`,{style:u,children:[r(c,{label:`scale 1`,children:r(s,{scale:1})}),r(c,{label:`scale 3`,children:r(s,{scale:3})})]}))},h={render:()=>t(()=>i(`div`,{children:[r(`div`,{style:u,children:r(c,{label:`on the background`,children:r(s,{scale:3,flash:`reveal`,live:!0})})}),r(`div`,{style:u,"data-msp-theme":`dark`,children:r(c,{label:`on a dark surface`,children:r(s,{scale:3,flash:`reveal`,live:!0})})})]}))},g=[`Flash`,`Scale`,`Live`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`The flash of the logo's colors: now and then (rare, a heading), often, or wiped in once and kept (reveal).`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style={surface}>
        <Labelled label="scale 1">
          <MolstarWordmark scale={1} />
        </Labelled>
        <Labelled label="scale 3">
          <MolstarWordmark scale={3} />
        </Labelled>
      </div>)
}`,...m.parameters?.docs?.source},description:{story:`Whole multiples of its drawn size keep the lines on the pixel grid.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`Alive under the pointer (the empty canvas): move across it, on the background and on a dark surface.`,...h.parameters?.docs?.description}}}})))()}_();export{p as Flash,h as Live,m as Scale,g as __namedExportsOrder,l as default};