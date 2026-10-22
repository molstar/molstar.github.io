import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./jsx-runtime-Dut-27nP.js";import{i as r,n as i,t as a}from"./real-viewer-8wWdKEGJ.js";import{n as o}from"./story-root-DtvPaZZ6.js";import{d as s}from"./scene-tree-BvZ8cYEi.js";import{i as c,n as l,r as u,s as d,t as f}from"./extension-CZOwo-Sp.js";import{a as p,t as m}from"./model-BFwQ1zKp.js";function h(e){let{width:n,height:r}=y[e.size],o=t=>{let n=t;return e.layout&&(n={...n,ui:{...n.ui,layout:{...n.ui?.layout,...e.layout}}}),e.dpdb&&(n={...n,extensions:[...n.extensions??[],l(c)]}),n};return t(`div`,{style:`height: 100vh; display: grid; grid-template: minmax(0, 1fr) / minmax(0, 1fr); place-items: center; padding: var(--msp-space-4); box-sizing: border-box; overflow: hidden; background: var(--msp-color-border)`,children:t(`div`,{style:`width: min(${n}px, 100%); height: min(${r}px, 100%); border-radius: 12px; overflow: hidden; box-shadow: var(--msp-shadow-overlay)`,children:i({...e.dpdb?{}:{load:[a.cbs]},spec:o,style:`height: 100%`,...e.setup?{setup:e.setup}:{}})})})}async function g(e){let t=e.api.as({kind:`person`});for(let[e,n]of[[`The fold`,`Cellular retinoic acid-binding protein II (**1CBS**): a ten-stranded β-barrel with a helix-turn-helix lid.`],[`The ligand`,`Retinoic acid sits inside the barrel, its carboxylate toward the polar residues at the bottom.`],[`The lid`,`The two helices close the barrel; they move to let the ligand in.`]])await t.run(`snapshot.add`,{name:e,description:n});await t.view.open({card:m})}async function _(e){let t=e.api.as({kind:`person`}),n=await t.run(`dynamic-pdb.load`,{entry:`dpdb_gijqn2no`});if(!n.ok)throw Error(n.message);await t.view.open({card:f})}var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{s(),p(),r(),d(),u(),n(),v={title:`Viewer/Layouts`,parameters:{layout:`fullscreen`}},y={desktop:{width:1280,height:800},laptop:{width:980,height:640},tablet:{width:700,height:900},phone:{width:390,height:760}},b=e=>({render:()=>o(()=>h(e))}),x=e=>t=>void t.views.shell?.show(e),S=e=>e.views.shell?.setPinned(`right`,!1),C={...b({size:`desktop`}),name:`Desktop: rail, no panel`},w={...b({size:`desktop`,setup:x(`structure`)}),name:`Desktop: panel pinned`},T={...b({size:`desktop`,setup:e=>{S(e),x(`structure`)(e)}}),name:`Desktop: panel floating`},E={...b({size:`desktop`,layout:{docks:{right:{floating:!1}}},setup:x(`structure`)}),name:`Desktop: panel docked`},D={...b({size:`desktop`,setup:g}),name:`Desktop: Story card, pinned`},O={...b({size:`desktop`,setup:async e=>{S(e),await g(e)}}),name:`Desktop: Story card, floating`},k={...b({size:`desktop`,dpdb:!0,setup:_}),name:`Desktop: Dynamic PDB card`},A={...b({size:`desktop`,setup:e=>void e.views.shell?.setExpanded(!0)}),name:`Desktop: expanded`},j={...b({size:`laptop`,layout:{compactRail:!0}}),name:`Compact rail: hidden`},M={...b({size:`laptop`,layout:{compactRail:!0},setup:e=>e.views.shell?.toggleRail()}),name:`Compact rail: shown`},N={...b({size:`laptop`,layout:{compactRail:!0},setup:g}),name:`Compact rail: Story card`},P={...b({size:`laptop`,layout:{compactRail:!0},setup:async e=>{await g(e),e.views.shell?.toggleRail()}}),name:`Compact rail: Story card, rail shown`},F={...b({size:`laptop`,layout:{mode:`embedded`}}),name:`Embedded`},I={...b({size:`laptop`,layout:{mode:`embedded`},setup:g}),name:`Embedded: Story card`},L={...b({size:`tablet`}),name:`Tablet`},R={...b({size:`phone`}),name:`Phone`},z={...b({size:`phone`,setup:x(`structure`)}),name:`Phone: panel`},B={...b({size:`phone`,setup:g}),name:`Phone: Story card`},V={...b({size:`phone`,dpdb:!0,setup:_}),name:`Phone: Dynamic PDB card`},H=[`DesktopRail`,`DesktopPinned`,`DesktopFloating`,`DesktopDocked`,`DesktopStoryPinned`,`DesktopStoryFloating`,`DesktopDpdb`,`DesktopExpanded`,`CompactRailHidden`,`CompactRailShown`,`CompactRailStory`,`CompactRailStoryRailShown`,`Embedded`,`EmbeddedStory`,`Tablet`,`Phone`,`PhonePanel`,`PhoneStory`,`PhoneDpdb`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...frame({
    size: 'desktop'
  }),
  name: 'Desktop: rail, no panel'
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...frame({
    size: 'desktop',
    setup: showPanel('structure')
  }),
  name: 'Desktop: panel pinned'
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...frame({
    size: 'desktop',
    setup: v => {
      unpinned(v);
      showPanel('structure')(v);
    }
  }),
  name: 'Desktop: panel floating'
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  ...frame({
    size: 'desktop',
    layout: {
      docks: {
        right: {
          floating: false
        }
      }
    },
    setup: showPanel('structure')
  }),
  name: 'Desktop: panel docked'
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  ...frame({
    size: 'desktop',
    setup: withStory
  }),
  name: 'Desktop: Story card, pinned'
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  ...frame({
    size: 'desktop',
    setup: async v => {
      unpinned(v);
      await withStory(v);
    }
  }),
  name: 'Desktop: Story card, floating'
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  ...frame({
    size: 'desktop',
    dpdb: true,
    setup: loadDpdb
  }),
  name: 'Desktop: Dynamic PDB card'
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  ...frame({
    size: 'desktop',
    setup: v => void v.views.shell?.setExpanded(true)
  }),
  name: 'Desktop: expanded'
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  ...frame({
    size: 'laptop',
    layout: {
      compactRail: true
    }
  }),
  name: 'Compact rail: hidden'
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  ...frame({
    size: 'laptop',
    layout: {
      compactRail: true
    },
    setup: v => v.views.shell?.toggleRail()
  }),
  name: 'Compact rail: shown'
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  ...frame({
    size: 'laptop',
    layout: {
      compactRail: true
    },
    setup: withStory
  }),
  name: 'Compact rail: Story card'
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  ...frame({
    size: 'laptop',
    layout: {
      compactRail: true
    },
    setup: async v => {
      await withStory(v);
      v.views.shell?.toggleRail();
    }
  }),
  name: 'Compact rail: Story card, rail shown'
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  ...frame({
    size: 'laptop',
    layout: {
      mode: 'embedded'
    }
  }),
  name: 'Embedded'
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  ...frame({
    size: 'laptop',
    layout: {
      mode: 'embedded'
    },
    setup: withStory
  }),
  name: 'Embedded: Story card'
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  ...frame({
    size: 'tablet'
  }),
  name: 'Tablet'
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  ...frame({
    size: 'phone'
  }),
  name: 'Phone'
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  ...frame({
    size: 'phone',
    setup: showPanel('structure')
  }),
  name: 'Phone: panel'
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  ...frame({
    size: 'phone',
    setup: withStory
  }),
  name: 'Phone: Story card'
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  ...frame({
    size: 'phone',
    dpdb: true,
    setup: loadDpdb
  }),
  name: 'Phone: Dynamic PDB card'
}`,...V.parameters?.docs?.source}}}})))()}U();export{j as CompactRailHidden,M as CompactRailShown,N as CompactRailStory,P as CompactRailStoryRailShown,E as DesktopDocked,k as DesktopDpdb,A as DesktopExpanded,T as DesktopFloating,w as DesktopPinned,C as DesktopRail,O as DesktopStoryFloating,D as DesktopStoryPinned,F as Embedded,I as EmbeddedStory,R as Phone,V as PhoneDpdb,z as PhonePanel,B as PhoneStory,L as Tablet,H as __namedExportsOrder,v as default};