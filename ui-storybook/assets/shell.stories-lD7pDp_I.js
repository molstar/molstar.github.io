import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,n,r,t as i}from"./jsx-runtime-pJJ4pzd1.js";import{l as a}from"./src-C9Ks2Bfq.js";import{n as o,t as s}from"./shell-story-DVkhNfUb.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{a(),o(),i(),c={title:`Shell/Viewer mode`,parameters:{layout:`fullscreen`}},l={render:()=>t(()=>n(`div`,{style:`height: 100vh`,children:n(s,{loaded:!0,commandMenu:!0})}))},u={render:()=>t(()=>n(`div`,{style:`height: 100vh`,children:n(s,{loaded:!1})}))},d={render:()=>t(()=>n(`div`,{style:`height: 100vh`,children:n(s,{loaded:!0})}))},f={render:()=>t(()=>n(`div`,{style:`height: 100vh`,children:n(s,{loaded:!0,playback:{snapshots:!0,trajectory:!0}})}))},p={render:()=>t(()=>n(`div`,{style:`height: 100vh`,children:n(s,{loaded:!0,preset:`many`})}))},m={render:()=>t(()=>n(`div`,{style:`height: 100vh`,children:n(s,{loaded:!0,preset:`em`})}))},h={args:{background:`#14181f`},argTypes:{background:{control:`color`}},render:e=>t(()=>n(`div`,{style:`height: 100vh`,children:n(s,{loaded:!0,background:e.background})}))},g={render:()=>t(()=>n(`div`,{style:`height: 100vh`,children:n(s,{loaded:!0,openExportAt:`animation`})}))},_={render:()=>t(()=>n(`div`,{style:`height: 100vh`,children:n(s,{loaded:!0,pinned:!0})}))},v={render:()=>t(()=>n(`div`,{style:`height: 100vh`,children:n(s,{loaded:!0,remoteStates:!0})}))},y={render:()=>t(()=>n(`div`,{style:`height: 100vh`,children:n(s,{loaded:!1,remoteStates:50})}))},b={render:()=>t(()=>n(`div`,{style:`height: 100vh; display: grid; place-items: center; background: var(--msp-color-border)`,children:n(`div`,{style:`width: 390px; height: 760px; border-radius: 16px; overflow: hidden; box-shadow: var(--msp-shadow-overlay)`,children:n(s,{loaded:!0})})}))},x={parameters:{layout:`fullscreen`},render:()=>t(()=>{let e=`iframe.html?id=prism-shell-viewer-mode--loaded&viewMode=story`,t=`color: var(--msp-color-text-muted); font-size: var(--msp-font-size-sm);`,i=`width: 100%; height: 100%; border: 0; border-radius: var(--msp-radius-lg); box-shadow: inset 0 0 0 1px var(--msp-glass-edge);`;return r(`div`,{style:`display: grid; grid-template-rows: auto 1fr; gap: var(--msp-space-3); height: 100vh; padding: var(--msp-space-4); box-sizing: border-box; background: var(--msp-color-bg);`,children:[r(`div`,{style:`${t} display: flex; gap: var(--msp-space-4);`,children:[n(`span`,{children:`Hover Expand at the top right of each canvas.`}),n(`a`,{href:e,target:`_blank`,rel:`noopener`,style:`color: var(--msp-color-accent)`,children:`Open as a page (Expand, Fullscreen beside it)`})]}),r(`div`,{style:`display: grid; grid-template-columns: 1fr 1fr; gap: var(--msp-space-4); min-height: 0;`,children:[r(`figure`,{style:`display: grid; grid-template-rows: auto 1fr; gap: var(--msp-space-2); margin: 0; min-height: 0;`,children:[n(`figcaption`,{style:t,children:`In an iframe that allows fullscreen: the button is Fullscreen`}),n(`iframe`,{title:`Allows fullscreen`,src:e,allow:`fullscreen`,style:i})]}),r(`figure`,{style:`display: grid; grid-template-rows: auto 1fr; gap: var(--msp-space-2); margin: 0; min-height: 0;`,children:[n(`figcaption`,{style:t,children:`In an iframe that does not: Expand, Fullscreen not possible`}),n(`iframe`,{title:`Does not allow fullscreen`,src:e,allow:`fullscreen 'none'`,style:i})]})]})]})})},S={render:()=>t(()=>n(`div`,{style:`height: 100vh`,children:n(s,{loaded:!0,openTab:`help`})}))},C=[`CommandMenuOpen`,`Empty`,`Loaded`,`SessionWithPlayback`,`ManyStructures`,`EmdbMap`,`CanvasBackground`,`ExportAtSection`,`Pinned`,`RemoteStates`,`ManyRemoteStates`,`Compact`,`ExpandByContext`,`Help`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style="height: 100vh">{<ViewerShellStory loaded={true} commandMenu={true} />}</div>)
}`,...l.parameters?.docs?.source},description:{story:`The command menu open (⌘K / Ctrl+K anywhere, or the rail's ⌘): everything by name.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style="height: 100vh">{<ViewerShellStory loaded={false} />}</div>)
}`,...u.parameters?.docs?.source},description:{story:`Nothing loaded: Home is the open tab.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style="height: 100vh">{<ViewerShellStory loaded={true} />}</div>)
}`,...d.parameters?.docs?.source},description:{story:`A structure loaded: the Structure tab, a status message, a running task and the selection chip.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style="height: 100vh">
        <ViewerShellStory loaded={true} playback={{
      snapshots: true,
      trajectory: true
    }} />
      </div>)
}`,...f.parameters?.docs?.source},description:{story:`Several structures: four CYP3A4 structures superposed on 1TQN, collapsed but the first.
A session with snapshots and a multi-model trajectory: playback appears at the top left only because the data has
something to play (plain 1TQN has neither).`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style="height: 100vh">{<ViewerShellStory loaded={true} preset="many" />}</div>)
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style="height: 100vh">{<ViewerShellStory loaded={true} preset="em" />}</div>)
}`,...m.parameters?.docs?.source},description:{story:`An EMDB entry: the map is a top-level volume next to the fitted model (EMD-2984 and 5A1A).`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    background: '#14181f'
  },
  argTypes: {
    background: {
      control: 'color'
    }
  },
  render: args => story(() => <div style="height: 100vh">{<ViewerShellStory loaded={true} background={args.background} />}</div>)
}`,...h.parameters?.docs?.source},description:{story:`The chrome over the canvas follows the canvas background automatically (light glass on a light background, dark on
a dark one), whatever the UI theme. Pick a background color in the controls.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style="height: 100vh">
        <ViewerShellStory loaded={true} openExportAt="animation" />
      </div>)
}`,...g.parameters?.docs?.source},description:{story:`A command opened the Export panel at a section ("Export animation…" in the command menu).`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style="height: 100vh">{<ViewerShellStory loaded={true} pinned={true} />}</div>)
}`,..._.parameters?.docs?.source},description:{story:`The panel pinned (the pin in its header): it sits beside the canvas, which makes room, instead of floating over it;
for workflows that keep a panel open the whole time.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style="height: 100vh">{<ViewerShellStory loaded={true} remoteStates={true} />}</div>)
}`,...v.parameters?.docs?.source},description:{story:`Remote states turned on in the spec: a Remote states card next to Export, and the server's states on Home.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style="height: 100vh">{<ViewerShellStory loaded={false} remoteStates={50} />}</div>)
}`,...y.parameters?.docs?.source},description:{story:`A busy state server (50 states): the lists scroll on their own, on Home and in the Remote states card.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style="height: 100vh; display: grid; place-items: center; background: var(--msp-color-border)">
        <div style="width: 390px; height: 760px; border-radius: 16px; overflow: hidden; box-shadow: var(--msp-shadow-overlay)">
          <ViewerShellStory loaded={true} />
        </div>
      </div>)
}`,...b.parameters?.docs?.source},description:{story:`A narrow host: the panel becomes a bottom sheet with its tabs along the bottom.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => story(() => {
    const src = 'iframe.html?id=prism-shell-viewer-mode--loaded&viewMode=story';
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
}`,...x.parameters?.docs?.source},description:{story:`Expand by context, in real frames of the Loaded story (hover the canvas's Expand button, at the top right):
- an iframe that allows fullscreen (\`allow="fullscreen"\`): the button is Fullscreen, since expanding would only fill
  the frame; Escape leaves it;
- an iframe that does not: Expand fills the frame, and Fullscreen beside it says why it is not possible;
- a page (open it below): Expand fills the page, Fullscreen beside it.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style="height: 100vh">{<ViewerShellStory loaded={true} openTab="help" />}</div>)
}`,...S.parameters?.docs?.source},description:{story:`Help, a tab at the rail's foot that stays open while you try things on the canvas (the rail's ?, the "Keyboard and mouse" command on ?, the command menu's ?): the canvas's mouse and
touch bindings (the mode's), the keys that work everywhere, and every command with a shortcut, from the registry as
it is; two commands on one key would be flagged first.`,...S.parameters?.docs?.description}}}})))()}w();export{h as CanvasBackground,l as CommandMenuOpen,b as Compact,m as EmdbMap,u as Empty,x as ExpandByContext,g as ExportAtSection,S as Help,d as Loaded,y as ManyRemoteStates,p as ManyStructures,_ as Pinned,v as RemoteStates,f as SessionWithPlayback,C as __namedExportsOrder,c as default};