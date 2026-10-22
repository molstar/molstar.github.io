import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n,t as r}from"./jsx-runtime-Dut-27nP.js";import{b as i,x as a}from"./work-queue-DoxU-HjK.js";import{n as o,t as s}from"./story-root-DtvPaZZ6.js";import{n as c,t as l}from"./observable-state-C67cgDrf.js";import{d as u,f as d,n as f,t as p}from"./params-form-BQ9MddDI.js";import{Ct as m,Et as h,Tt as g,Xt as _,Yt as v,n as y,t as b,wt as x}from"./param-definition-xUqfTrAa.js";import{n as S,t as ee}from"./text-input-6-TvZsXK.js";import{n as C,t as w}from"./tooltip-B_MLonmP.js";import{n as T,t as E}from"./material-Tp9Qf8eJ.js";function D(e){return JSON.stringify(e,(e,t)=>t&&typeof t==`object`&&`kind`in t&&t.kind===`file`?`<file ${t.name}>`:t,1)}function O(e){let r=e.width??320,a=(a,o,s)=>{let l=new u(e.params),d=c(``);return n(`div`,{style:`width: ${r}px`,children:[t(`p`,{style:j,children:a}),n(`div`,{style:`padding: ${s}; border-radius: 4px; background: ${o}; font-size: var(--msp-font-size-sm)`,children:[e.filter?t(`div`,{style:`margin-bottom: var(--msp-space-3)`,children:t(ee,{search:!0,size:`sm`,placeholder:`Search`,value:d.asReadonly,onInput:e=>d.set(e)})}):null,t(p,{form:l,filter:e.filter?d.asReadonly:void 0})]}),t(`pre`,{style:M,children:i(l.values,D)})]})};return n(`div`,{style:A,ref:e=>C(e),children:[a(`On a panel`,`var(--msp-color-panel)`,`8px 8px`),a(`In a well (an open action, a section)`,`var(--msp-color-well)`,`4px 8px 8px`)]})}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{h(),_(),x(),T(),y(),s(),d(),l(),S(),w(),f(),a(),r(),k={title:`Components/Params form`,parameters:{docs:{description:{component:`Every PD control, alone, in each state: on a panel and in a well (an open action block), at the panel's width, with
the values it produces below. For checking spacing and alignment in isolation, not inside whichever panel uses it.`}}}},A=`display: grid; grid-template-columns: repeat(auto-fill, 320px); gap: var(--msp-space-6); padding: var(--msp-space-5);`,j=`margin: 0 0 var(--msp-space-3); color: var(--msp-color-text-subtle); font: 500 var(--msp-font-size-xs)/1.4 var(--msp-font-sans, inherit);`,M=`margin: var(--msp-space-3) 0 0; padding: var(--msp-space-3); border-radius: 4px; background: var(--msp-color-control); color: var(--msp-color-text-muted); font: 11px/1.4 var(--msp-font-mono); white-space: pre-wrap; word-break: break-all;`,N=(e,n={})=>({render:()=>o(()=>t(O,{params:e,width:n.width,filter:n.filter}))}),P=e=>e.map(([e,t])=>v.create(e,t)),F=(e,t={},n={})=>b.MappedStatic(e?`on`:`off`,{on:b.Group(t),off:b.Group({})},n),I=N({boolean:b.Boolean(!0),number:b.Numeric(5,{min:0,max:20,step:.5}),integer:b.Numeric(3),text:b.Text(`1tqn`,{placeholder:`PDB ID`}),select:b.Select(`cartoon`,[[`cartoon`,`Cartoon`],[`ball-and-stick`,`Ball & Stick`],[`spacefill`,`Spacefill`]]),color:b.Color(3367602),file:b.File({accept:`.cif,.pdb`}),files:b.FileList({multiple:!0}),outline:F(!0,{scale:b.Numeric(1,{min:1,max:5,step:1})},{label:`Outline`}),mode:b.MappedStatic(`auto`,{auto:b.Group({},{isFlat:!0}),custom:b.Group({width:b.Numeric(1920),height:b.Numeric(1080)},{isFlat:!0})},{options:[[`auto`,`Auto`],[`custom`,`Custom`]]}),group:b.Group({samples:b.Numeric(32,{min:1,max:256,step:1}),bias:b.Numeric(.8)},{label:`Group`})}),L=N({visuals:b.Boolean(!0),transparent:b.Boolean(!1,{description:`Render the background transparent.`}),occlusion:F(!0,{samples:b.Numeric(32,{min:1,max:256,step:1}),radius:b.Numeric(5,{min:0,max:20,step:.1})},{label:`Ambient occlusion`}),shadows:F(!1,{steps:b.Numeric(1,{min:1,max:64,step:1})},{label:`Shadows`}),handle:F(!1,{},{label:`Handle (no settings)`})}),R=N({samples:b.Numeric(32,{min:1,max:256,step:1}),opacity:b.Numeric(.35,{min:0,max:1,step:.01}),isoValue:b.Numeric(-3,{min:-5,max:5,step:.1},{label:`Iso value (σ)`}),durationMs:b.Numeric(1500,{min:100,max:15e3,step:100},{label:`Duration (ms)`}),modelIndex:b.Numeric(0,void 0,{label:`Model index (no range)`}),width:b.Numeric(1920,void 0,{label:`Width (px)`})}),z=N({id:b.Text(`1tqn`,{label:`PDB ID`}),url:b.Text(``,{label:`URL`,placeholder:`https://…`}),label:b.Text(`Cytochrome P450 3A4 with the heme cofactor and a long name`,{label:`Label`}),description:b.Text(`A note
on two lines`,{multiline:!0,label:`Description (multiline)`})}),B=N({representation:b.Select(`cartoon`,[[`cartoon`,`Cartoon`],[`ball-and-stick`,`Ball & Stick`],[`spacefill`,`Spacefill`],[`molecular-surface`,`Molecular Surface`]]),colorTheme:b.Select(`chain-id`,[`atom-id`,`carbohydrate-symbol`,`chain-id`,`element-index`,`element-symbol`,`entity-id`,`entity-source`,`hydrophobicity`,`illumination`,`model-index`,`molecule-type`,`occupancy`,`operator-name`,`partial-charge`,`polymer-id`,`residue-name`,`secondary-structure`,`sequence-id`,`shape-group`,`uncertainty`,`uniform`].map(e=>[e,e.replace(/-/g,` `).replace(/^./,e=>e.toUpperCase())]),{label:`Color theme (many)`}),server:b.Select(`pdbe`,[[`pdbe`,`PDBe · Protein Data Bank in Europe (EMBL-EBI)`],[`rcsb`,`RCSB PDB · Research Collaboratory for Structural Bioinformatics`]],{label:`Server (long labels)`})}),V=N({color:b.Color(3367602),background:b.Color(16777215,{label:`Background (white)`}),edge:b.Color(0,{label:`Edge (black)`})}),H=N({file:b.File({label:`Map file`,accept:`.ccp4,.mrc,.map`}),files:b.FileList({label:`Files`,multiple:!0})}),U=N({flat:b.Group({id:b.Text(`1tqn`,{label:`PDB ID`}),assembly:b.Text(`1`)},{isFlat:!0}),folded:b.Group({samples:b.Numeric(32,{min:1,max:256,step:1}),bias:b.Numeric(.8)},{label:`Folded`}),expanded:b.Group({exposure:b.Numeric(1,{min:0,max:3,step:.01})},{label:`Open`,isExpanded:!0}),nested:b.Group({inner:b.Group({depth:b.Numeric(2,{min:1,max:5,step:1})},{label:`Inner`,isExpanded:!0}),after:b.Boolean(!0)},{label:`Group in a group`,isExpanded:!0})}),W=N({material:E.getParam(),materialOpen:{...E.getParam({isExpanded:!0}),label:`Material (open)`},size:b.Group({width:b.Numeric(1920,{min:1,max:8192,step:1}),height:b.Numeric(1080,{min:1,max:8192,step:1})},{isFlat:!0,presets:[[{width:1920,height:1080},`Full HD`],[{width:3840,height:2160},`4K`],[{width:1080,height:1080},`Square`]]}),channels:b.ObjectList({name:b.Text(`channel`),level:b.Numeric(1.5,{min:0,max:5,step:.1})},e=>`${e.name} at ${e.level}σ`,{defaultValue:[{name:`2fo-fc`,level:1.5}],presets:[[[{name:`2fo-fc`,level:1.5}],`Electron density`],[[{name:`fo-fc(+)`,level:3},{name:`fo-fc(-)`,level:3}],`Difference map`]]}),transfer:b.LineGraph(P([[0,0],[.5,.2],[1,1]]),{label:`Transfer curve`,getPresets:()=>[[P([[0,0],[1,1]]),`Linear`],[P([[0,0],[.5,.2],[1,1]]),`Soft`],[P([[0,0],[.4,0],[.6,1],[1,1]]),`Step`]]})}),G=N({source:b.MappedStatic(`pdb`,{pdb:b.Group({id:b.Text(`1tqn`,{label:`PDB ID`})},{isFlat:!0}),url:b.Group({url:b.Text(``,{label:`URL`}),binary:b.Boolean(!1)},{isFlat:!0})},{label:`Source (flat)`,options:[[`pdb`,`PDB`],[`url`,`URL`]]}),isoValue:b.MappedStatic(`relative`,{relative:b.Group({value:b.Numeric(1.5,{min:-5,max:5,step:.1},{label:`σ`})}),absolute:b.Group({value:b.Numeric(.035,{min:0,max:1,step:.001})})},{label:`Iso value (nested)`,options:[[`relative`,`Relative`],[`absolute`,`Absolute`]]}),quality:b.MappedStatic(`auto`,{auto:b.Group({}),custom:b.Numeric(3,{min:0,max:6,step:1},{label:`Detail`})},{label:`Quality (single value)`,options:[[`auto`,`Auto`],[`custom`,`Custom`]]})}),K=N({mode:b.Select(`perspective`,[[`perspective`,`Perspective`],[`orthographic`,`Orthographic`]],{isEssential:!0}),fov:b.Numeric(45,{min:10,max:130,step:1},{label:`Field of view (perspective only)`,isEssential:!0,hideIf:e=>e.mode!==`perspective`}),internal:b.Numeric(1,void 0,{isHidden:!0}),resetDuration:b.Numeric(250,{min:0,max:1e3,step:1},{label:`Reset duration (ms)`}),manualReset:b.Boolean(!1,{label:`Manual reset`})}),q=N({pickPadding:b.Numeric(3,{min:0,max:10,step:1}),trackball:b.Group({rotateSpeed:b.Numeric(5,{min:1,max:10,step:1}),zoomSpeed:b.Numeric(7,{min:1,max:15,step:1})},{label:`Trackball`}),tooltips:b.Boolean(!0)},{filter:!0}),J=N({checkeredTransparentBackground:b.Boolean(!0),userInteractionReleaseMs:b.Numeric(250,{min:0,max:1e3,step:1}),sceneRadiusFactor:b.Numeric(1,{min:1,max:10,step:.1}),highlightEdgeColor:b.Color(10066329),transparencyMode:b.Select(`blended`,[[`blended`,`Weighted, blended`],[`wboit`,`Weighted, order-independent`]]),backgroundOcclusionRadiusScale:b.Numeric(.5,{min:0,max:2,step:.05},{description:`How far around each point occlusion is sampled, relative to the scene radius.`})},{width:240}),Y=N({chains:b.MultiSelect([`A`,`C`],[[`A`,`Chain A`],[`B`,`Chain B`],[`C`,`Chain C`],[`D`,`Chain D`]],{label:`Chains (multi-select)`}),axis:b.Vec3(m.create(0,0,1),void 0,{label:`Axis (vec3)`}),transform:b.Mat4(g.identity(),{label:`Transform (mat4)`}),range:b.Interval([2,7.5],{min:0,max:10,step:.5},{label:`Range (interval)`}),transfer:b.LineGraph([[0,0],[.3,.05],[.55,.7],[.8,.9],[1,1]],{label:`Transfer (line graph)`}),colors:b.ColorList(`viridis`,{label:`Colors (color list)`}),channels:b.ObjectList({name:b.Text(`Channel`),isoValue:b.Numeric(1.5,{min:-5,max:5,step:.1}),color:b.Color(3367602)},e=>`${e.name} · ${e.isoValue}σ`,{label:`Channels (object list)`,defaultValue:[{name:`2Fo-Fc`,isoValue:1.5,color:3367602},{name:`Fo-Fc`,isoValue:3,color:3390259}],ctor:()=>({name:`Channel`,isoValue:1,color:8421504})}),source:b.Url(`https://www.ebi.ac.uk/pdbe/entry-files/download/1tqn.bcif`,{label:`Source (url)`}),opacity:b.Converted(e=>e*100,e=>e/100,b.Numeric(35,{min:0,max:100,step:1},{label:`Opacity % (converted)`})),level:b.Conditioned(1.5,{relative:b.Numeric(1.5,{min:-5,max:5,step:.1},{label:`σ`}),absolute:b.Numeric(.035,{min:0,max:1,step:.001},{label:`Value`})},e=>Math.abs(e)>=.5?`relative`:`absolute`,(e,t)=>t===`relative`?1.5:.035,{label:`Level (conditioned)`}),query:b.Script({language:`pymol`,expression:`resn HEM`},{label:`Query (script)`}),data:b.Value({a:1})}),X=[[`A`,1810039],[`B`,14245634],[`C`,7696563],[`D`,15149450]],Z=N({quality:b.Select(`auto`,[[`auto`,`Auto`],[`high`,`High`],[`low`,`Low`]],{description:"How finely surfaces and cartoons are tessellated; `auto` follows the structure size."}),chainColors:b.Boolean(!0,{label:`Chain colors`,description:"Gives every chain a color based on its `asym_id` value.",legend:{kind:`table-legend`,table:X}}),bFactor:b.Boolean(!1,{label:`B-factor`,description:`Colors by the atoms’ B-factor, low to high.`,legend:{kind:`scale-legend`,minLabel:`12.4`,maxLabel:`86.1`,colors:[255,16777215,16711680]}}),colorTheme:b.MappedStatic(`chain-id`,{"chain-id":b.Group({}),"element-symbol":b.Group({carbonColor:b.Color(8421504,{label:`Carbon color`})}),uncertainty:b.Group({})},{label:`Color theme`,options:[[`chain-id`,`Chain ID`],[`element-symbol`,`Element`],[`uncertainty`,`Uncertainty`]],help:e=>e.name===`chain-id`?{description:"Gives every chain a color based on its `asym_id` value.",legend:{kind:`table-legend`,table:X}}:e.name===`element-symbol`?{description:`Colors atoms by their element; carbons in the chosen carbon color.`,legend:{kind:`table-legend`,table:[[`C`,8421504],[`N`,3166456],[`O`,16715021],[`S`,16777008],[`Fe`,14706227]]}}:{description:`Colors by the atoms’ uncertainty (B-factor or pLDDT).`,legend:{kind:`scale-legend`,minLabel:`certain`,maxLabel:`uncertain`,colors:[21462,6671347,16767763,16743749]}}})}),Q=[`AllTypes`,`Booleans`,`Numbers`,`Text`,`Selects`,`Colors`,`Files`,`Groups`,`Presets`,`Mapped`,`Visibility`,`Search`,`LongLabels`,`MoreTypes`,`HelpAndLegends`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`render({
  boolean: PD.Boolean(true),
  number: PD.Numeric(5, {
    min: 0,
    max: 20,
    step: 0.5
  }),
  integer: PD.Numeric(3),
  text: PD.Text('1tqn', {
    placeholder: 'PDB ID'
  }),
  select: PD.Select('cartoon', [['cartoon', 'Cartoon'], ['ball-and-stick', 'Ball & Stick'], ['spacefill', 'Spacefill']]),
  color: PD.Color(0x3362b2 as any),
  file: PD.File({
    accept: '.cif,.pdb'
  }),
  files: PD.FileList({
    multiple: true
  }),
  outline: onOff(true, {
    scale: PD.Numeric(1, {
      min: 1,
      max: 5,
      step: 1
    })
  }, {
    label: 'Outline'
  }),
  mode: PD.MappedStatic('auto', {
    auto: PD.Group({}, {
      isFlat: true
    }),
    custom: PD.Group({
      width: PD.Numeric(1920),
      height: PD.Numeric(1080)
    }, {
      isFlat: true
    })
  }, {
    options: [['auto', 'Auto'], ['custom', 'Custom']]
  }),
  group: PD.Group({
    samples: PD.Numeric(32, {
      min: 1,
      max: 256,
      step: 1
    }),
    bias: PD.Numeric(0.8)
  }, {
    label: 'Group'
  })
})`,...I.parameters?.docs?.source},description:{story:`One of each type the renderer draws, as a panel would show them.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`render({
  visuals: PD.Boolean(true),
  transparent: PD.Boolean(false, {
    description: 'Render the background transparent.'
  }),
  occlusion: onOff(true, {
    samples: PD.Numeric(32, {
      min: 1,
      max: 256,
      step: 1
    }),
    radius: PD.Numeric(5, {
      min: 0,
      max: 20,
      step: 0.1
    })
  }, {
    label: 'Ambient occlusion'
  }),
  shadows: onOff(false, {
    steps: PD.Numeric(1, {
      min: 1,
      max: 64,
      step: 1
    })
  }, {
    label: 'Shadows'
  }),
  handle: onOff(false, {}, {
    label: 'Handle (no settings)'
  })
})`,...L.parameters?.docs?.source},description:{story:`Switches: plain, described (hover the row), and on/off mapped params with and without their own settings.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`render({
  samples: PD.Numeric(32, {
    min: 1,
    max: 256,
    step: 1
  }),
  opacity: PD.Numeric(0.35, {
    min: 0,
    max: 1,
    step: 0.01
  }),
  isoValue: PD.Numeric(-3, {
    min: -5,
    max: 5,
    step: 0.1
  }, {
    label: 'Iso value (σ)'
  }),
  durationMs: PD.Numeric(1500, {
    min: 100,
    max: 15000,
    step: 100
  }, {
    label: 'Duration (ms)'
  }),
  modelIndex: PD.Numeric(0, undefined, {
    label: 'Model index (no range)'
  }),
  width: PD.Numeric(1920, undefined, {
    label: 'Width (px)'
  })
})`,...R.parameters?.docs?.source},description:{story:`Numbers: a slider with a range (integer, fractional, negative), and a plain field without one.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`render({
  id: PD.Text('1tqn', {
    label: 'PDB ID'
  }),
  url: PD.Text('', {
    label: 'URL',
    placeholder: 'https://…'
  }),
  label: PD.Text('Cytochrome P450 3A4 with the heme cofactor and a long name', {
    label: 'Label'
  }),
  description: PD.Text('A note\\non two lines', {
    multiline: true,
    label: 'Description (multiline)'
  })
})`,...z.parameters?.docs?.source},description:{story:`Text: a value, empty with a placeholder, a long value, multiline.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`render({
  representation: PD.Select('cartoon', [['cartoon', 'Cartoon'], ['ball-and-stick', 'Ball & Stick'], ['spacefill', 'Spacefill'], ['molecular-surface', 'Molecular Surface']]),
  colorTheme: PD.Select('chain-id', ['atom-id', 'carbohydrate-symbol', 'chain-id', 'element-index', 'element-symbol', 'entity-id', 'entity-source', 'hydrophobicity', 'illumination', 'model-index', 'molecule-type', 'occupancy', 'operator-name', 'partial-charge', 'polymer-id', 'residue-name', 'secondary-structure', 'sequence-id', 'shape-group', 'uncertainty', 'uniform'].map(v => [v, v.replace(/-/g, ' ').replace(/^./, c => c.toUpperCase())] as [string, string]), {
    label: 'Color theme (many)'
  }),
  server: PD.Select('pdbe', [['pdbe', 'PDBe · Protein Data Bank in Europe (EMBL-EBI)'], ['rcsb', 'RCSB PDB · Research Collaboratory for Structural Bioinformatics']], {
    label: 'Server (long labels)'
  })
})`,...B.parameters?.docs?.source},description:{story:`Selects: a few options, many (the list scrolls), long labels.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`render({
  color: PD.Color(0x3362b2 as any),
  background: PD.Color(0xffffff as any, {
    label: 'Background (white)'
  }),
  edge: PD.Color(0x000000 as any, {
    label: 'Edge (black)'
  })
})`,...V.parameters?.docs?.source},description:{story:`Colors: the field, and the picker inline under it when opened.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`render({
  file: PD.File({
    label: 'Map file',
    accept: '.ccp4,.mrc,.map'
  }),
  files: PD.FileList({
    label: 'Files',
    multiple: true
  })
})`,...H.parameters?.docs?.source},description:{story:`Files: one, many (drop files on the field, or pick); cleared with ✕.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`render({
  flat: PD.Group({
    id: PD.Text('1tqn', {
      label: 'PDB ID'
    }),
    assembly: PD.Text('1')
  }, {
    isFlat: true
  }),
  folded: PD.Group({
    samples: PD.Numeric(32, {
      min: 1,
      max: 256,
      step: 1
    }),
    bias: PD.Numeric(0.8)
  }, {
    label: 'Folded'
  }),
  expanded: PD.Group({
    exposure: PD.Numeric(1, {
      min: 0,
      max: 3,
      step: 0.01
    })
  }, {
    label: 'Open',
    isExpanded: true
  }),
  nested: PD.Group({
    inner: PD.Group({
      depth: PD.Numeric(2, {
        min: 1,
        max: 5,
        step: 1
      })
    }, {
      label: 'Inner',
      isExpanded: true
    }),
    after: PD.Boolean(true)
  }, {
    label: 'Group in a group',
    isExpanded: true
  })
})`,...U.parameters?.docs?.source},description:{story:`Groups: flat (more rows at the same level), folded, open by default, and a group in a group.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`render({
  material: Material.getParam(),
  materialOpen: {
    ...Material.getParam({
      isExpanded: true
    }),
    label: 'Material (open)'
  },
  size: PD.Group({
    width: PD.Numeric(1920, {
      min: 1,
      max: 8192,
      step: 1
    }),
    height: PD.Numeric(1080, {
      min: 1,
      max: 8192,
      step: 1
    })
  }, {
    isFlat: true,
    presets: [[{
      width: 1920,
      height: 1080
    }, 'Full HD'], [{
      width: 3840,
      height: 2160
    }, '4K'], [{
      width: 1080,
      height: 1080
    }, 'Square']]
  }),
  channels: PD.ObjectList({
    name: PD.Text('channel'),
    level: PD.Numeric(1.5, {
      min: 0,
      max: 5,
      step: 0.1
    })
  }, e => \`\${e.name} at \${e.level}σ\`, {
    defaultValue: [{
      name: '2fo-fc',
      level: 1.5
    }],
    presets: [[[{
      name: '2fo-fc',
      level: 1.5
    }], 'Electron density'], [[{
      name: 'fo-fc(+)',
      level: 3
    }, {
      name: 'fo-fc(-)',
      level: 3
    }], 'Difference map']]
  }),
  transfer: PD.LineGraph(curve([[0, 0], [0.5, 0.2], [1, 1]]), {
    label: 'Transfer curve',
    getPresets: () => [[curve([[0, 0], [1, 1]]), 'Linear'], [curve([[0, 0], [0.5, 0.2], [1, 1]]), 'Soft'], [curve([[0, 0], [0.4, 0], [0.6, 1], [1, 1]]), 'Step']]
  })
})`,...W.parameters?.docs?.source},description:{story:`Presets (PD's): named values to start from. A group's in its header (Mol*'s Material Style: Matte, Plastic, Glossy,
Metallic), the matching one named after the title and marked in the list (none: the values are custom); a flat
group's as a row before its fields; an object list's beside Add; a curve's, asked for when opened (from the data).`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`render({
  source: PD.MappedStatic('pdb', {
    pdb: PD.Group({
      id: PD.Text('1tqn', {
        label: 'PDB ID'
      })
    }, {
      isFlat: true
    }),
    url: PD.Group({
      url: PD.Text('', {
        label: 'URL'
      }),
      binary: PD.Boolean(false)
    }, {
      isFlat: true
    })
  }, {
    label: 'Source (flat)',
    options: [['pdb', 'PDB'], ['url', 'URL']]
  }),
  isoValue: PD.MappedStatic('relative', {
    relative: PD.Group({
      value: PD.Numeric(1.5, {
        min: -5,
        max: 5,
        step: 0.1
      }, {
        label: 'σ'
      })
    }),
    absolute: PD.Group({
      value: PD.Numeric(0.035, {
        min: 0,
        max: 1,
        step: 0.001
      })
    })
  }, {
    label: 'Iso value (nested)',
    options: [['relative', 'Relative'], ['absolute', 'Absolute']]
  }),
  quality: PD.MappedStatic('auto', {
    auto: PD.Group({}),
    custom: PD.Numeric(3, {
      min: 0,
      max: 6,
      step: 1
    }, {
      label: 'Detail'
    })
  }, {
    label: 'Quality (single value)',
    options: [['auto', 'Auto'], ['custom', 'Custom']]
  })
})`,...G.parameters?.docs?.source},description:{story:`Mapped: a choice with its own params under it, flat or nested, or a single value.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`render({
  mode: PD.Select('perspective', [['perspective', 'Perspective'], ['orthographic', 'Orthographic']], {
    isEssential: true
  }),
  fov: PD.Numeric(45, {
    min: 10,
    max: 130,
    step: 1
  }, {
    label: 'Field of view (perspective only)',
    isEssential: true,
    hideIf: (p: any) => p.mode !== 'perspective'
  }),
  internal: PD.Numeric(1, undefined, {
    isHidden: true
  }),
  resetDuration: PD.Numeric(250, {
    min: 0,
    max: 1000,
    step: 1
  }, {
    label: 'Reset duration (ms)'
  }),
  manualReset: PD.Boolean(false, {
    label: 'Manual reset'
  })
})`,...K.parameters?.docs?.source},description:{story:`Visibility: rows hidden by another's value (hideIf), hidden params, and essentials first with the rest under Advanced.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`render({
  pickPadding: PD.Numeric(3, {
    min: 0,
    max: 10,
    step: 1
  }),
  trackball: PD.Group({
    rotateSpeed: PD.Numeric(5, {
      min: 1,
      max: 10,
      step: 1
    }),
    zoomSpeed: PD.Numeric(7, {
      min: 1,
      max: 15,
      step: 1
    })
  }, {
    label: 'Trackball'
  }),
  tooltips: PD.Boolean(true)
}, {
  filter: true
})`,...q.parameters?.docs?.source},description:{story:`Search (Settings): only matching rows; groups open; a group whose name matches shows all its rows. Try "zoom", "trackball".`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`render({
  checkeredTransparentBackground: PD.Boolean(true),
  userInteractionReleaseMs: PD.Numeric(250, {
    min: 0,
    max: 1000,
    step: 1
  }),
  sceneRadiusFactor: PD.Numeric(1, {
    min: 1,
    max: 10,
    step: 0.1
  }),
  highlightEdgeColor: PD.Color(0x999999 as any),
  transparencyMode: PD.Select('blended', [['blended', 'Weighted, blended'], ['wboit', 'Weighted, order-independent']]),
  // With help: the ? stays after the cut-off text.
  backgroundOcclusionRadiusScale: PD.Numeric(0.5, {
    min: 0,
    max: 2,
    step: 0.05
  }, {
    description: 'How far around each point occlusion is sampled, relative to the scene radius.'
  })
}, {
  width: 240
})`,...J.parameters?.docs?.source},description:{story:`Long labels at a narrow width: labels give way (fading out, full on hover), controls keep their column.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`render({
  chains: PD.MultiSelect(['A', 'C'], [['A', 'Chain A'], ['B', 'Chain B'], ['C', 'Chain C'], ['D', 'Chain D']], {
    label: 'Chains (multi-select)'
  }),
  axis: PD.Vec3(Vec3.create(0, 0, 1), undefined, {
    label: 'Axis (vec3)'
  }),
  transform: PD.Mat4(Mat4.identity(), {
    label: 'Transform (mat4)'
  }),
  range: PD.Interval([2, 7.5], {
    min: 0,
    max: 10,
    step: 0.5
  }, {
    label: 'Range (interval)'
  }),
  transfer: PD.LineGraph([[0, 0], [0.3, 0.05], [0.55, 0.7], [0.8, 0.9], [1, 1]] as any, {
    label: 'Transfer (line graph)'
  }),
  colors: PD.ColorList('viridis' as any, {
    label: 'Colors (color list)'
  }),
  channels: PD.ObjectList({
    name: PD.Text('Channel'),
    isoValue: PD.Numeric(1.5, {
      min: -5,
      max: 5,
      step: 0.1
    }),
    color: PD.Color(0x3362b2 as any)
  }, (e: any) => \`\${e.name} · \${e.isoValue}σ\`, {
    label: 'Channels (object list)',
    defaultValue: [{
      name: '2Fo-Fc',
      isoValue: 1.5,
      color: 0x3362b2
    }, {
      name: 'Fo-Fc',
      isoValue: 3,
      color: 0x33bb33
    }] as any,
    ctor: () => ({
      name: 'Channel',
      isoValue: 1,
      color: 0x808080
    })
  }),
  source: PD.Url('https://www.ebi.ac.uk/pdbe/entry-files/download/1tqn.bcif', {
    label: 'Source (url)'
  }),
  opacity: PD.Converted((v: number) => v * 100, (v: number) => v / 100, PD.Numeric(35, {
    min: 0,
    max: 100,
    step: 1
  }, {
    label: 'Opacity % (converted)'
  })),
  level: PD.Conditioned(1.5, {
    relative: PD.Numeric(1.5, {
      min: -5,
      max: 5,
      step: 0.1
    }, {
      label: 'σ'
    }),
    absolute: PD.Numeric(0.035, {
      min: 0,
      max: 1,
      step: 0.001
    }, {
      label: 'Value'
    })
  }, (v: number) => Math.abs(v) >= 0.5 ? 'relative' : 'absolute', (_v: number, c: string) => c === 'relative' ? 1.5 : 0.035, {
    label: 'Level (conditioned)'
  }) as any,
  query: PD.Script({
    language: 'pymol',
    expression: 'resn HEM'
  } as any, {
    label: 'Query (script)'
  }),
  data: PD.Value({
    a: 1
  })
})`,...Y.parameters?.docs?.source},description:{story:`The less common types: multi-select, vec3, mat4 (opens a grid), interval, a line graph (opens an editor), a color
list (opens its presets), an object list (items with their own forms), url, converted, conditioned, script; a plain
value has no row (as in the classic UI).`,...Y.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`render({
  quality: PD.Select('auto', [['auto', 'Auto'], ['high', 'High'], ['low', 'Low']], {
    description: 'How finely surfaces and cartoons are tessellated; \`auto\` follows the structure size.'
  }),
  chainColors: PD.Boolean(true, {
    label: 'Chain colors',
    description: 'Gives every chain a color based on its \`asym_id\` value.',
    legend: {
      kind: 'table-legend',
      table: ChainColors as any
    }
  }),
  bFactor: PD.Boolean(false, {
    label: 'B-factor',
    description: 'Colors by the atoms’ B-factor, low to high.',
    legend: {
      kind: 'scale-legend',
      minLabel: '12.4',
      maxLabel: '86.1',
      colors: [0x0000ff, 0xffffff, 0xff0000] as any
    }
  }),
  colorTheme: PD.MappedStatic('chain-id', {
    'chain-id': PD.Group({}),
    'element-symbol': PD.Group({
      carbonColor: PD.Color(0x808080 as any, {
        label: 'Carbon color'
      })
    }),
    uncertainty: PD.Group({})
  }, {
    label: 'Color theme',
    options: [['chain-id', 'Chain ID'], ['element-symbol', 'Element'], ['uncertainty', 'Uncertainty']],
    help: (v: {
      name: string;
    }) => v.name === 'chain-id' ? {
      description: 'Gives every chain a color based on its \`asym_id\` value.',
      legend: {
        kind: 'table-legend',
        table: ChainColors as any
      }
    } : v.name === 'element-symbol' ? {
      description: 'Colors atoms by their element; carbons in the chosen carbon color.',
      legend: {
        kind: 'table-legend',
        table: [['C', 0x808080], ['N', 0x3050f8], ['O', 0xff0d0d], ['S', 0xffff30], ['Fe', 0xe06633]] as any
      }
    } : {
      description: 'Colors by the atoms’ uncertainty (B-factor or pLDDT).',
      legend: {
        kind: 'scale-legend',
        minLabel: 'certain',
        maxLabel: 'uncertain',
        colors: [0x0053d6, 0x65cbf3, 0xffdb13, 0xff7d45] as any
      }
    }
  })
})`,...Z.parameters?.docs?.source},description:{story:"Help: a ? by a label (on hover, or while open) opens the param's description and legend under its row: a table of\ncolors, a scale; a theme choice shows the chosen theme's (`help(value)`), as representation themes do.",...Z.parameters?.docs?.description}}}})))()}$();export{I as AllTypes,L as Booleans,V as Colors,H as Files,U as Groups,Z as HelpAndLegends,J as LongLabels,G as Mapped,Y as MoreTypes,R as Numbers,W as Presets,q as Search,B as Selects,z as Text,K as Visibility,Q as __namedExportsOrder,k as default};