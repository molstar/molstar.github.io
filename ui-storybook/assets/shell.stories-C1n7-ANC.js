import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n,t as r}from"./jsx-runtime-DbCUSNU3.js";import{i,n as a,t as o}from"./real-viewer-Bej2U4vD.js";import{n as s}from"./story-root-DfeAHAKA.js";import{d as c}from"./scene-tree-B-CrD89j.js";function l(e,t){([...document.querySelectorAll(`*`)].find(e=>e.shadowRoot)?.shadowRoot)?.querySelector(`button[aria-label="${t}"]`)?.click()}var u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{c(),i(),r(),u={title:`Viewer/Shell`,parameters:{layout:`fullscreen`}},d={render:()=>s(()=>t(a,{load:[o.cbs],setup:e=>e.views.shell?.show(`structure`)}))},f={name:`Hover label at the cursor`,render:()=>s(()=>t(a,{load:[o.cbs],spec:e=>({...e,options:{...e.options,ui:{...e.options?.ui,hoverLabel:`cursor`}}})}))},p={render:()=>s(()=>t(a,{load:[o.cbs],setup:e=>l(e,`Command menu`)}))},m={args:{background:`#14181f`},argTypes:{background:{control:`color`}},render:e=>s(()=>t(a,{load:[o.cbs],setup:t=>void t.api.canvas.background({color:e.background})}))},h={render:()=>s(()=>t(a,{load:[o.cbs],setup:e=>void e.api.view.open({card:`core.overlay.export`,section:`export-session.section.session`})}))},g={render:()=>s(()=>t(a,{load:[o.cbs],setup:e=>{e.views.shell?.show(`structure`),e.views.shell?.setPinned(`right`,!0)}}))},_={render:()=>s(()=>t(`div`,{style:`height: 100vh; display: grid; place-items: center; background: var(--msp-color-border)`,children:t(`div`,{style:`width: 390px; height: 760px; border-radius: 16px; overflow: hidden; box-shadow: var(--msp-shadow-overlay)`,children:t(a,{load:[o.cbs],style:`height: 100%`})})}))},v={parameters:{layout:`fullscreen`},render:()=>s(()=>{let e=`iframe.html?id=prism-viewer-shell--loaded&viewMode=story`,r=`color: var(--msp-color-text-muted); font-size: var(--msp-font-size-sm);`,i=`width: 100%; height: 100%; border: 0; border-radius: var(--msp-radius-lg); box-shadow: inset 0 0 0 1px var(--msp-glass-edge);`;return n(`div`,{style:`display: grid; grid-template-rows: auto 1fr; gap: var(--msp-space-3); height: 100vh; padding: var(--msp-space-4); box-sizing: border-box; background: var(--msp-color-bg);`,children:[n(`div`,{style:`${r} display: flex; gap: var(--msp-space-4);`,children:[t(`span`,{children:`Hover Expand at the top right of each canvas.`}),t(`a`,{href:e,target:`_blank`,rel:`noopener`,style:`color: var(--msp-color-accent)`,children:`Open as a page (Expand, Fullscreen beside it)`})]}),n(`div`,{style:`display: grid; grid-template-columns: 1fr 1fr; gap: var(--msp-space-4); min-height: 0;`,children:[n(`figure`,{style:`display: grid; grid-template-rows: auto 1fr; gap: var(--msp-space-2); margin: 0; min-height: 0;`,children:[t(`figcaption`,{style:r,children:`In an iframe that allows fullscreen: the button is Fullscreen`}),t(`iframe`,{title:`Allows fullscreen`,src:e,allow:`fullscreen`,style:i})]}),n(`figure`,{style:`display: grid; grid-template-rows: auto 1fr; gap: var(--msp-space-2); margin: 0; min-height: 0;`,children:[t(`figcaption`,{style:r,children:`In an iframe that does not: Expand, Fullscreen not possible`}),t(`iframe`,{title:`Does not allow fullscreen`,src:e,allow:`fullscreen 'none'`,style:i})]})]})]})})},y={render:()=>s(()=>t(a,{load:[o.cbs],setup:e=>e.views.shell?.show(`help`)}))},b=[`Loaded`,`HoverLabelAtCursor`,`CommandMenuOpen`,`CanvasBackground`,`ExportAtSection`,`Pinned`,`Compact`,`ExpandByContext`,`Help`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <RealViewerStory load={[ExampleFiles.cbs]} setup={v => v.views.shell?.show('structure')} />)
}`,...d.parameters?.docs?.source},description:{story:`A structure loaded (1CBS): the sequence band, the canvas, the Structure panel.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Hover label at the cursor',
  render: () => story(() => <RealViewerStory load={[ExampleFiles.cbs]} spec={base => ({
    ...base,
    options: {
      ...base.options,
      ui: {
        ...base.options?.ui,
        hoverLabel: 'cursor'
      }
    }
  })} />)
}`,...f.parameters?.docs?.source},description:{story:"The command menu open (⌘K / Ctrl+K anywhere, or the rail's ⌘): everything by name.\nThe hover label beside the pointer (`options.ui.hoverLabel: 'cursor'`); the default is the canvas' bottom right.",...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <RealViewerStory load={[ExampleFiles.cbs]} setup={v => click(v, 'Command menu')} />)
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    background: '#14181f'
  },
  argTypes: {
    background: {
      control: 'color'
    }
  },
  render: args => story(() => <RealViewerStory load={[ExampleFiles.cbs]} setup={v => void v.api.canvas.background({
    color: args.background
  })} />)
}`,...m.parameters?.docs?.source},description:{story:`The canvas background: the canvas' chrome (the toolbar, the band, the status) follows its color.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <RealViewerStory load={[ExampleFiles.cbs]} setup={v => void v.api.view.open({
    card: 'core.overlay.export',
    section: 'export-session.section.session'
  })} />)
}`,...h.parameters?.docs?.source},description:{story:`A command opened the Export card at a section (Session & state).`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <RealViewerStory load={[ExampleFiles.cbs]} setup={v => {
    v.views.shell?.show('structure');
    v.views.shell?.setPinned('right', true);
  }} />)
}`,...g.parameters?.docs?.source},description:{story:`The panel pinned: the canvas gives it room instead of running under it.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style="height: 100vh; display: grid; place-items: center; background: var(--msp-color-border)">
        <div style="width: 390px; height: 760px; border-radius: 16px; overflow: hidden; box-shadow: var(--msp-shadow-overlay)">
          <RealViewerStory load={[ExampleFiles.cbs]} style="height: 100%" />
        </div>
      </div>)
}`,..._.parameters?.docs?.source},description:{story:`A narrow host: the panel becomes a bottom sheet with its tabs along the bottom.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => story(() => {
    const src = 'iframe.html?id=prism-viewer-shell--loaded&viewMode=story';
    const caption = 'color: var(--msp-color-text-muted); font-size: var(--msp-font-size-sm);';
    const frame = 'width: 100%; height: 100%; border: 0; border-radius: var(--msp-radius-lg); box-shadow: inset 0 0 0 1px var(--msp-glass-edge);';
    return <div style="display: grid; grid-template-rows: auto 1fr; gap: var(--msp-space-3); height: 100vh; padding: var(--msp-space-4); box-sizing: border-box; background: var(--msp-color-bg);">
          <div style={\`\${caption} display: flex; gap: var(--msp-space-4);\`}>
            <span>Hover Expand at the top right of each canvas.</span>
            <a href={src} target="_blank" rel="noopener" style="color: var(--msp-color-accent)">
              Open as a page (Expand, Fullscreen beside it)
            </a>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--msp-space-4); min-height: 0;">
            <figure style="display: grid; grid-template-rows: auto 1fr; gap: var(--msp-space-2); margin: 0; min-height: 0;">
              <figcaption style={caption}>In an iframe that allows fullscreen: the button is Fullscreen</figcaption>
              <iframe title="Allows fullscreen" src={src} allow="fullscreen" style={frame} />
            </figure>
            <figure style="display: grid; grid-template-rows: auto 1fr; gap: var(--msp-space-2); margin: 0; min-height: 0;">
              <figcaption style={caption}>In an iframe that does not: Expand, Fullscreen not possible</figcaption>
              {/* Same-origin frames may go fullscreen by default ('self'): forbidden explicitly, as a page on another origin is. */}
              <iframe title="Does not allow fullscreen" src={src} allow="fullscreen 'none'" style={frame} />
            </figure>
          </div>
        </div>;
  })
}`,...v.parameters?.docs?.source},description:{story:`Expand or fullscreen, by context: in a frame that allows fullscreen the button is Fullscreen; in one that does not,
Expand (the canvas fills the viewer).`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <RealViewerStory load={[ExampleFiles.cbs]} setup={v => v.views.shell?.show('help')} />)
}`,...y.parameters?.docs?.source},description:{story:`Help: the keys and the mouse, and the viewer's words.`,...y.parameters?.docs?.description}}}})))()}x();export{m as CanvasBackground,p as CommandMenuOpen,_ as Compact,v as ExpandByContext,h as ExportAtSection,y as Help,f as HoverLabelAtCursor,d as Loaded,g as Pinned,b as __namedExportsOrder,u as default};