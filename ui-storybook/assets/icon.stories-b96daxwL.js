import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,i as n,n as r,r as i,t as a}from"./jsx-runtime-pJJ4pzd1.js";import{a as o,i as s,n as c,o as l,r as u,t as d}from"./icon-Cd9kBD44.js";function f(e){return r(`div`,{style:m,children:e.names.map(e=>i(`div`,{style:h,title:e,children:[i(`div`,{style:g,children:[r(d,{name:e,size:16}),r(d,{name:e,size:24})]}),r(`span`,{style:_,children:e})]}))})}var p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{n(),l(),c(),s(),a(),p={title:`Components/Icon`},m=`display: grid; grid-template-columns: repeat(auto-fill, minmax(112px, 1fr)); gap: var(--msp-space-2); padding: var(--msp-space-4);`,h=`display: flex; flex-direction: column; align-items: center; gap: var(--msp-space-2); padding: var(--msp-space-3); border: 1px solid var(--msp-color-border); border-radius: var(--msp-radius-md); color: var(--msp-color-text); background: var(--msp-color-panel);`,g=`display: flex; align-items: center; gap: var(--msp-space-3);`,_=`font-size: var(--msp-font-size-xs); color: var(--msp-color-text-muted); text-align: center; word-break: break-all;`,v=`margin: 0; padding: var(--msp-space-4) var(--msp-space-4) 0; color: var(--msp-color-text); font-size: var(--msp-font-size-md);`,y={render:()=>t(()=>i(`div`,{children:[i(`h3`,{style:v,children:[`Molecular (`,Object.keys(u).length,`)`]}),r(f,{names:Object.keys(u)}),i(`h3`,{style:v,children:[`Lucide (`,Object.keys(o).length,`)`]}),r(f,{names:Object.keys(o)})]}))},b={render:()=>t(()=>i(`div`,{style:`${g} padding: var(--msp-space-4); color: var(--msp-color-accent);`,children:[r(d,{name:`eye`,label:`Visible`}),r(d,{name:`cartoon`,size:32,label:`Cartoon representation`}),r(`span`,{style:`color: var(--msp-color-danger)`,children:r(d,{name:`triangle-alert`,size:20})})]}))},x=[`All`,`Labelled`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div>
        <h3 style={heading}>Molecular ({Object.keys(MolecularIcons).length})</h3>
        <Gallery names={Object.keys(MolecularIcons) as IconName[]} />
        <h3 style={heading}>Lucide ({Object.keys(LucideIcons).length})</h3>
        <Gallery names={Object.keys(LucideIcons) as IconName[]} />
      </div>)
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style={\`\${sizes} padding: var(--msp-space-4); color: var(--msp-color-accent);\`}>
        <Icon name="eye" label="Visible" />
        <Icon name="cartoon" size={32} label="Cartoon representation" />
        <span style="color: var(--msp-color-danger)">
          <Icon name="triangle-alert" size={20} />
        </span>
      </div>)
}`,...b.parameters?.docs?.source}}}})))()}S();export{y as All,b as Labelled,x as __namedExportsOrder,p as default};