import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{S as t,b as n,n as r,r as i,t as a}from"./jsx-runtime-Dut-27nP.js";import{n as o,t as s}from"./story-root-DtvPaZZ6.js";import{n as c,t as l}from"./icon-CrwnZGU9.js";import{n as u,t as d}from"./tooltip-B_MLonmP.js";var f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),s(),c(),d(),a(),f={title:`Components/Tooltip`},p=`display: grid; gap: var(--msp-space-4); width: 300px; padding: var(--msp-space-4) var(--msp-space-4) 48px; background: var(--msp-color-panel); color: var(--msp-color-text); font-size: var(--msp-font-size-sm);`,m=`display: flex; gap: var(--msp-space-3); align-items: center; justify-content: center; padding: var(--msp-space-6) 0;`,h=`color: var(--msp-color-text-muted);`,g=e=>t(u(e)),_=`display: grid; place-items: center; width: 28px; height: 28px; border-radius: var(--msp-radius-md); background: var(--msp-color-control); color: var(--msp-color-text);`,v={render:()=>o(()=>i(`div`,{style:p,ref:g,children:[i(`div`,{style:m,children:[r(`button`,{type:`button`,style:_,"aria-label":`Refresh`,"data-tip":`Bottom (default)`,children:r(l,{name:`refresh-cw`,size:16})}),r(`button`,{type:`button`,style:_,"aria-label":`Add`,"data-tip":`Left`,"data-tip-side":`left`,children:r(l,{name:`plus`,size:16})}),r(`button`,{type:`button`,style:_,"aria-label":`Remove`,"data-tip":`Top`,"data-tip-side":`top`,children:r(l,{name:`trash-2`,size:16})})]}),r(`span`,{style:h,children:`Shown after a short rest; moving to a neighbour switches at once.`})]}))},y={render:()=>o(()=>i(`div`,{style:p,ref:g,children:[r(`span`,{"data-tip-overflow":!0,style:`display: block; width: 120px; overflow: hidden; white-space: nowrap; mask-image: linear-gradient(to right, #000 calc(100% - 20px), transparent)`,children:`A long label that does not fit`}),r(`span`,{"data-tip-overflow":!0,style:`display: block; width: 120px; overflow: hidden; white-space: nowrap; mask-image: linear-gradient(to right, #000 calc(100% - 20px), transparent)`,children:`Fits`}),r(`span`,{style:h,children:`Only the first one is cut off, so only it has a tooltip.`})]}))},b=[`Sides`,`Overflow`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style={panel} ref={tips}>
        <div style={row}>
          <button type="button" style={iconButton} aria-label="Refresh" data-tip="Bottom (default)">
            <Icon name="refresh-cw" size={16} />
          </button>
          <button type="button" style={iconButton} aria-label="Add" data-tip="Left" data-tip-side="left">
            <Icon name="plus" size={16} />
          </button>
          <button type="button" style={iconButton} aria-label="Remove" data-tip="Top" data-tip-side="top">
            <Icon name="trash-2" size={16} />
          </button>
        </div>
        <span style={muted}>Shown after a short rest; moving to a neighbour switches at once.</span>
      </div>)
}`,...v.parameters?.docs?.source},description:{story:"Icon buttons with `data-tip`, placed by `data-tip-side`: bottom (the default), left and top. Hover or focus one.",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style={panel} ref={tips}>
        <span data-tip-overflow style="display: block; width: 120px; overflow: hidden; white-space: nowrap; mask-image: linear-gradient(to right, #000 calc(100% - 20px), transparent)">
          A long label that does not fit
        </span>
        <span data-tip-overflow style="display: block; width: 120px; overflow: hidden; white-space: nowrap; mask-image: linear-gradient(to right, #000 calc(100% - 20px), transparent)">
          Fits
        </span>
        <span style={muted}>Only the first one is cut off, so only it has a tooltip.</span>
      </div>)
}`,...y.parameters?.docs?.source},description:{story:"`data-tip-overflow`: a label shows its own text as a tooltip, only while it is cut off.",...y.parameters?.docs?.description}}}})))()}x();export{y as Overflow,v as Sides,b as __namedExportsOrder,f as default};