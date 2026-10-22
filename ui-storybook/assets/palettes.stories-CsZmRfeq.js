import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n,t as r}from"./jsx-runtime-Dut-27nP.js";import{i,n as a}from"./real-viewer-8wWdKEGJ.js";import{n as o}from"./story-root-DtvPaZZ6.js";import{U as s,V as c}from"./param-definition-xUqfTrAa.js";import{d as l}from"./scene-tree-BvZ8cYEi.js";function u(e){return n(`div`,{style:`display: grid; justify-items: center; gap: 3px`,title:`${m(e.index)}: ${p(e.color)}`,children:[t(`div`,{style:`width: 30px; height: 30px; border-radius: var(--msp-radius-md); background: ${p(e.color)}`}),t(`span`,{style:`font-size: var(--msp-font-size-xs); font-family: var(--msp-font-mono); color: var(--msp-color-text-subtle)`,children:m(e.index)})]})}function d(e){let r=e.palette;return n(`section`,{style:`display: grid; gap: var(--msp-space-3)`,children:[n(`div`,{style:`display: flex; align-items: baseline; gap: var(--msp-space-3); flex-wrap: wrap`,children:[t(`h3`,{style:`margin: 0; font-size: var(--msp-font-size-md); font-weight: 600`,children:r.title}),t(`code`,{style:`font-size: var(--msp-font-size-xs); font-family: var(--msp-font-mono); color: var(--msp-color-text-subtle)`,children:`representation.defaultPalette: '${r.id}'`}),t(`span`,{style:`font-size: var(--msp-font-size-xs); color: var(--msp-color-text-subtle)`,children:`${r.colors.length} colors`})]}),t(`p`,{style:`margin: 0; max-width: 62ch; font-size: var(--msp-font-size-sm); color: var(--msp-color-text-muted)`,children:r.about}),t(`div`,{style:`display: flex; gap: 6px; flex-wrap: wrap`,children:r.colors.map((e,n)=>t(u,{color:e,index:n}))})]})}var f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{s(),l(),i(),r(),f=[{id:`prism`,title:`Prism`,about:`The default. Many-Distinct redrawn in OKLCH: Mol*’s green and orange first, even weight, every pair apart (min ΔE 0.10).`,colors:c[`many-distinct-prism`].list},{id:`classic`,title:`Classic`,about:`Mol*’s own Many-Distinct (Dark2, Set1, Set2): the themes as they are.`,colors:c[`many-distinct`].list},{id:`colorblind`,title:`Colorblind-safe`,about:`Okabe–Ito: told apart with any color vision.`,colors:c[`okabe-ito`].list}],p=e=>`#${e.toString(16).padStart(6,`0`)}`,m=e=>String.fromCharCode(65+e%26),h={title:`Viewer/Palettes`,parameters:{layout:`fullscreen`}},g={render:()=>o(()=>t(`div`,{style:`display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 420px), 1fr)); gap: var(--msp-space-4); padding: var(--msp-space-5)`,children:[`light`,`dark`].map(e=>t(`div`,{"data-msp-theme":e,style:`display: grid; align-content: start; gap: var(--msp-space-6); padding: var(--msp-space-6); border-radius: var(--msp-radius-lg); background: var(--msp-color-bg); color: var(--msp-color-text)`,children:f.map(e=>t(d,{palette:e}))}))}))},_={name:`On a structure`,args:{palette:`prism`,colors:``,entry:`1AON`,theme:`chain-id`,background:`light`},argTypes:{palette:{control:`inline-radio`,options:f.map(e=>e.id)},colors:{control:`text`},entry:{control:`select`,options:[`1TQN`,`1AON`,`4HHB`,`1KX5`]},theme:{control:`inline-radio`,options:[`chain-id`,`entity-id`]},background:{control:`inline-radio`,options:[`light`,`dark`]}},render:e=>o(()=>{let t=e.colors.split(/[\s,]+/).filter(e=>/^#?[0-9a-f]{6}$/i.test(e)).map(e=>e.startsWith(`#`)?e:`#${e}`);return a({spec:n=>({...n,options:{...n.options,canvas:{...n.options?.canvas,palette:e.palette}},...t.length?{palettes:{prism:t}}:{}}),setup:async t=>{let n=t.api.as({kind:`person`}),r=await fetch(`https://models.rcsb.org/${e.entry}.bcif`);if(!r.ok)throw Error(`${e.entry}: ${r.status}`);let i=new File([await r.blob()],`${e.entry.toLowerCase()}.bcif`);await n.load.files({files:[i]}),await n.representation.color({target:`polymer`,theme:e.theme}),e.background===`dark`&&await n.canvas.background({color:`#101114`})}})})},v={..._,name:`On 1TQN`,args:{..._.args,entry:`1TQN`,theme:`entity-id`}},y=[`Swatches`,`OnAStructure`,`On1TQN`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 420px), 1fr)); gap: var(--msp-space-4); padding: var(--msp-space-5)">
        {(['light', 'dark'] as const).map(theme => <div data-msp-theme={theme} style="display: grid; align-content: start; gap: var(--msp-space-6); padding: var(--msp-space-6); border-radius: var(--msp-radius-lg); background: var(--msp-color-bg); color: var(--msp-color-text)">
            {Palettes.map(p => <PaletteRow palette={p} />)}
          </div>)}
      </div>)
}`,...g.parameters?.docs?.source},description:{story:`The three palettes, each color with the category it goes to (A, B, …), on the light and the dark surface.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'On a structure',
  args: {
    palette: 'prism',
    colors: '',
    entry: '1AON',
    theme: 'chain-id',
    background: 'light'
  },
  argTypes: {
    palette: {
      control: 'inline-radio',
      options: Palettes.map(p => p.id)
    },
    colors: {
      control: 'text'
    },
    entry: {
      control: 'select',
      options: ['1TQN', '1AON', '4HHB', '1KX5']
    },
    theme: {
      control: 'inline-radio',
      options: ['chain-id', 'entity-id']
    },
    background: {
      control: 'inline-radio',
      options: ['light', 'dark']
    }
  },
  render: args => story(() => {
    const own = args.colors.split(/[\\s,]+/).filter(c => /^#?[0-9a-f]{6}$/i.test(c)).map(c => c.startsWith('#') ? c : \`#\${c}\`);
    return RealViewerStory({
      spec: base => ({
        ...base,
        options: {
          ...base.options,
          canvas: {
            ...base.options?.canvas,
            palette: args.palette
          }
        },
        ...(own.length ? {
          palettes: {
            prism: own
          }
        } : {})
      }),
      setup: async viewer => {
        const person = viewer.api.as({
          kind: 'person'
        });
        const response = await fetch(\`https://models.rcsb.org/\${args.entry}.bcif\`);
        if (!response.ok) throw new Error(\`\${args.entry}: \${response.status}\`);
        const file = new File([await response.blob()], \`\${args.entry.toLowerCase()}.bcif\`);
        await person.load.files({
          files: [file] as never
        });
        await person.representation.color({
          target: 'polymer',
          theme: args.theme
        });
        if (args.background === 'dark') await person.canvas.background({
          color: '#101114'
        });
      }
    });
  })
}`,..._.parameters?.docs?.source},description:{story:`A structure from RCSB in the viewer, colored by chain or entity with the palette the options pick (and the list the
spec gives, if any): cytochrome P450 3A4 (1TQN: a chain, its heme and ligand), GroEL–GroES (1AON, 21 chains),
hemoglobin (4HHB, 4), a nucleosome (1KX5, 10: protein and DNA).`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...OnAStructure,
  name: 'On 1TQN',
  args: {
    ...OnAStructure.args,
    entry: '1TQN',
    theme: 'entity-id'
  }
}`,...v.parameters?.docs?.source},description:{story:`Cytochrome P450 3A4 (1TQN) by entity: the protein, its heme and its ligand.`,...v.parameters?.docs?.description}}}})))()}b();export{v as On1TQN,_ as OnAStructure,g as Swatches,y as __namedExportsOrder,h as default};