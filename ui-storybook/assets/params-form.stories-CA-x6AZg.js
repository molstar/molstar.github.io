import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,i as n,n as r,r as i,t as a}from"./jsx-runtime-pJJ4pzd1.js";import{n as ee,t as o}from"./map-BLVP9Oyc.js";import{n as s,r as c}from"./observable-state-U0Aegh1x.js";import{a as l,c as u,d,f,g as p,h as m,m as h,n as g,o as _,p as v,s as y,t as b}from"./params-form-Cr0vP-Xz.js";import{n as x,t as S}from"./text-input-BVt-QcfS.js";import{n as C,t as w}from"./tooltip-DyNTZac4.js";function T(e){return{...T.Zero,...e}}function E(){return(E=e((()=>{u(),(function(e){e.Zero={metalness:0,roughness:0,bumpiness:0};function t(e,t,n){return t[n]=e.metalness*255,t[n+1]=e.roughness*255,t[n+2]=e.bumpiness*255,t}e.toArray=t;function n(e,t,n){return t[n]=e.metalness,t[n+1]=e.roughness,t[n+2]=e.bumpiness,t}e.toArrayNormalized=n;function r(e,t){return e.metalness===t.metalness&&e.roughness===t.roughness&&e.bumpiness===t.bumpiness}e.areEqual=r;function i({metalness:e,roughness:t,bumpiness:n}){return`M ${e.toFixed(2)} | R ${t.toFixed(2)} | B ${n.toFixed(2)}`}e.toString=i;function a(e){return y.Group({metalness:y.Numeric(0,{min:0,max:1,step:.01}),roughness:y.Numeric(1,{min:0,max:1,step:.01}),bumpiness:y.Numeric(0,{min:0,max:1,step:.01})},{...e,presets:[[{metalness:0,roughness:1,bumpiness:0},`Matte`],[{metalness:0,roughness:.2,bumpiness:0},`Plastic`],[{metalness:0,roughness:.6,bumpiness:0},`Glossy`],[{metalness:1,roughness:.6,bumpiness:0},`Metallic`]]})}e.getParam=a})(T||={})})))()}function D(e){return JSON.stringify(e,(e,t)=>t&&typeof t==`object`&&`kind`in t&&t.kind===`file`?`<file ${t.name}>`:t,1)}function O(e){let t=e.width??320,n=(n,a,o)=>{let s=new l(e.params),u=c(``);return i(`div`,{style:`width: ${t}px`,children:[r(`p`,{style:j,children:n}),i(`div`,{style:`padding: ${o}; border-radius: 4px; background: ${a}; font-size: var(--msp-font-size-sm)`,children:[e.filter?r(`div`,{style:`margin-bottom: var(--msp-space-3)`,children:r(S,{search:!0,size:`sm`,placeholder:`Search`,value:u.asReadonly,onInput:e=>u.set(e)})}):null,r(b,{form:s,filter:e.filter?u.asReadonly:void 0})]}),r(`pre`,{style:M,children:s.values.pipe(ee(D))})]})};return i(`div`,{style:A,ref:e=>C(e),children:[n(`On a panel`,`var(--msp-color-panel)`,`8px 8px`),n(`In a well (an open action, a section)`,`var(--msp-color-well)`,`4px 8px 8px`)]})}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{h(),p(),f(),E(),u(),o(),n(),_(),s(),x(),w(),g(),a(),k={title:`Components/Params form`,parameters:{docs:{description:{component:`Every PD control, alone, in each state: on a panel and in a well (an open action block), at the panel's width, with
the values it produces below. For checking spacing and alignment in isolation, not inside whichever panel uses it.`}}}},A=`display: grid; grid-template-columns: repeat(auto-fill, 320px); gap: var(--msp-space-6); padding: var(--msp-space-5);`,j=`margin: 0 0 var(--msp-space-3); color: var(--msp-color-text-subtle); font: 500 var(--msp-font-size-xs)/1.4 var(--msp-font-sans, inherit);`,M=`margin: var(--msp-space-3) 0 0; padding: var(--msp-space-3); border-radius: 4px; background: var(--msp-color-control); color: var(--msp-color-text-muted); font: 11px/1.4 var(--msp-font-mono); white-space: pre-wrap; word-break: break-all;`,N=(e,n={})=>({render:()=>t(()=>r(O,{params:e,width:n.width,filter:n.filter}))}),P=e=>e.map(([e,t])=>m.create(e,t)),F=(e,t={},n={})=>y.MappedStatic(e?`on`:`off`,{on:y.Group(t),off:y.Group({})},n),I=N({boolean:y.Boolean(!0),number:y.Numeric(5,{min:0,max:20,step:.5}),integer:y.Numeric(3),text:y.Text(`1tqn`,{placeholder:`PDB ID`}),select:y.Select(`cartoon`,[[`cartoon`,`Cartoon`],[`ball-and-stick`,`Ball & Stick`],[`spacefill`,`Spacefill`]]),color:y.Color(3367602),file:y.File({accept:`.cif,.pdb`}),files:y.FileList({multiple:!0}),outline:F(!0,{scale:y.Numeric(1,{min:1,max:5,step:1})},{label:`Outline`}),mode:y.MappedStatic(`auto`,{auto:y.Group({},{isFlat:!0}),custom:y.Group({width:y.Numeric(1920),height:y.Numeric(1080)},{isFlat:!0})},{options:[[`auto`,`Auto`],[`custom`,`Custom`]]}),group:y.Group({samples:y.Numeric(32,{min:1,max:256,step:1}),bias:y.Numeric(.8)},{label:`Group`})}),L=N({visuals:y.Boolean(!0),transparent:y.Boolean(!1,{description:`Render the background transparent.`}),occlusion:F(!0,{samples:y.Numeric(32,{min:1,max:256,step:1}),radius:y.Numeric(5,{min:0,max:20,step:.1})},{label:`Ambient occlusion`}),shadows:F(!1,{steps:y.Numeric(1,{min:1,max:64,step:1})},{label:`Shadows`}),handle:F(!1,{},{label:`Handle (no settings)`})}),R=N({samples:y.Numeric(32,{min:1,max:256,step:1}),opacity:y.Numeric(.35,{min:0,max:1,step:.01}),isoValue:y.Numeric(-3,{min:-5,max:5,step:.1},{label:`Iso value (σ)`}),durationMs:y.Numeric(1500,{min:100,max:15e3,step:100},{label:`Duration (ms)`}),modelIndex:y.Numeric(0,void 0,{label:`Model index (no range)`}),width:y.Numeric(1920,void 0,{label:`Width (px)`})}),z=N({id:y.Text(`1tqn`,{label:`PDB ID`}),url:y.Text(``,{label:`URL`,placeholder:`https://…`}),label:y.Text(`Cytochrome P450 3A4 with the heme cofactor and a long name`,{label:`Label`}),description:y.Text(`A note
on two lines`,{multiline:!0,label:`Description (multiline)`})}),B=N({representation:y.Select(`cartoon`,[[`cartoon`,`Cartoon`],[`ball-and-stick`,`Ball & Stick`],[`spacefill`,`Spacefill`],[`molecular-surface`,`Molecular Surface`]]),colorTheme:y.Select(`chain-id`,[`atom-id`,`carbohydrate-symbol`,`chain-id`,`element-index`,`element-symbol`,`entity-id`,`entity-source`,`hydrophobicity`,`illumination`,`model-index`,`molecule-type`,`occupancy`,`operator-name`,`partial-charge`,`polymer-id`,`residue-name`,`secondary-structure`,`sequence-id`,`shape-group`,`uncertainty`,`uniform`].map(e=>[e,e.replace(/-/g,` `).replace(/^./,e=>e.toUpperCase())]),{label:`Color theme (many)`}),server:y.Select(`pdbe`,[[`pdbe`,`PDBe · Protein Data Bank in Europe (EMBL-EBI)`],[`rcsb`,`RCSB PDB · Research Collaboratory for Structural Bioinformatics`]],{label:`Server (long labels)`})}),V=N({color:y.Color(3367602),background:y.Color(16777215,{label:`Background (white)`}),edge:y.Color(0,{label:`Edge (black)`})}),H=N({file:y.File({label:`Map file`,accept:`.ccp4,.mrc,.map`}),files:y.FileList({label:`Files`,multiple:!0})}),U=N({flat:y.Group({id:y.Text(`1tqn`,{label:`PDB ID`}),assembly:y.Text(`1`)},{isFlat:!0}),folded:y.Group({samples:y.Numeric(32,{min:1,max:256,step:1}),bias:y.Numeric(.8)},{label:`Folded`}),expanded:y.Group({exposure:y.Numeric(1,{min:0,max:3,step:.01})},{label:`Open`,isExpanded:!0}),nested:y.Group({inner:y.Group({depth:y.Numeric(2,{min:1,max:5,step:1})},{label:`Inner`,isExpanded:!0}),after:y.Boolean(!0)},{label:`Group in a group`,isExpanded:!0})}),W=N({material:T.getParam(),materialOpen:{...T.getParam({isExpanded:!0}),label:`Material (open)`},size:y.Group({width:y.Numeric(1920,{min:1,max:8192,step:1}),height:y.Numeric(1080,{min:1,max:8192,step:1})},{isFlat:!0,presets:[[{width:1920,height:1080},`Full HD`],[{width:3840,height:2160},`4K`],[{width:1080,height:1080},`Square`]]}),channels:y.ObjectList({name:y.Text(`channel`),level:y.Numeric(1.5,{min:0,max:5,step:.1})},e=>`${e.name} at ${e.level}σ`,{defaultValue:[{name:`2fo-fc`,level:1.5}],presets:[[[{name:`2fo-fc`,level:1.5}],`Electron density`],[[{name:`fo-fc(+)`,level:3},{name:`fo-fc(-)`,level:3}],`Difference map`]]}),transfer:y.LineGraph(P([[0,0],[.5,.2],[1,1]]),{label:`Transfer curve`,getPresets:()=>[[P([[0,0],[1,1]]),`Linear`],[P([[0,0],[.5,.2],[1,1]]),`Soft`],[P([[0,0],[.4,0],[.6,1],[1,1]]),`Step`]]})}),G=N({source:y.MappedStatic(`pdb`,{pdb:y.Group({id:y.Text(`1tqn`,{label:`PDB ID`})},{isFlat:!0}),url:y.Group({url:y.Text(``,{label:`URL`}),binary:y.Boolean(!1)},{isFlat:!0})},{label:`Source (flat)`,options:[[`pdb`,`PDB`],[`url`,`URL`]]}),isoValue:y.MappedStatic(`relative`,{relative:y.Group({value:y.Numeric(1.5,{min:-5,max:5,step:.1},{label:`σ`})}),absolute:y.Group({value:y.Numeric(.035,{min:0,max:1,step:.001})})},{label:`Iso value (nested)`,options:[[`relative`,`Relative`],[`absolute`,`Absolute`]]}),quality:y.MappedStatic(`auto`,{auto:y.Group({}),custom:y.Numeric(3,{min:0,max:6,step:1},{label:`Detail`})},{label:`Quality (single value)`,options:[[`auto`,`Auto`],[`custom`,`Custom`]]})}),K=N({mode:y.Select(`perspective`,[[`perspective`,`Perspective`],[`orthographic`,`Orthographic`]],{isEssential:!0}),fov:y.Numeric(45,{min:10,max:130,step:1},{label:`Field of view (perspective only)`,isEssential:!0,hideIf:e=>e.mode!==`perspective`}),internal:y.Numeric(1,void 0,{isHidden:!0}),resetDuration:y.Numeric(250,{min:0,max:1e3,step:1},{label:`Reset duration (ms)`}),manualReset:y.Boolean(!1,{label:`Manual reset`})}),q=N({pickPadding:y.Numeric(3,{min:0,max:10,step:1}),trackball:y.Group({rotateSpeed:y.Numeric(5,{min:1,max:10,step:1}),zoomSpeed:y.Numeric(7,{min:1,max:15,step:1})},{label:`Trackball`}),tooltips:y.Boolean(!0)},{filter:!0}),J=N({checkeredTransparentBackground:y.Boolean(!0),userInteractionReleaseMs:y.Numeric(250,{min:0,max:1e3,step:1}),sceneRadiusFactor:y.Numeric(1,{min:1,max:10,step:.1}),highlightEdgeColor:y.Color(10066329),transparencyMode:y.Select(`blended`,[[`blended`,`Weighted, blended`],[`wboit`,`Weighted, order-independent`]]),backgroundOcclusionRadiusScale:y.Numeric(.5,{min:0,max:2,step:.05},{description:`How far around each point occlusion is sampled, relative to the scene radius.`})},{width:240}),Y=N({chains:y.MultiSelect([`A`,`C`],[[`A`,`Chain A`],[`B`,`Chain B`],[`C`,`Chain C`],[`D`,`Chain D`]],{label:`Chains (multi-select)`}),axis:y.Vec3(d.create(0,0,1),void 0,{label:`Axis (vec3)`}),transform:y.Mat4(v.identity(),{label:`Transform (mat4)`}),range:y.Interval([2,7.5],{min:0,max:10,step:.5},{label:`Range (interval)`}),transfer:y.LineGraph([[0,0],[.3,.05],[.55,.7],[.8,.9],[1,1]],{label:`Transfer (line graph)`}),colors:y.ColorList(`viridis`,{label:`Colors (color list)`}),channels:y.ObjectList({name:y.Text(`Channel`),isoValue:y.Numeric(1.5,{min:-5,max:5,step:.1}),color:y.Color(3367602)},e=>`${e.name} · ${e.isoValue}σ`,{label:`Channels (object list)`,defaultValue:[{name:`2Fo-Fc`,isoValue:1.5,color:3367602},{name:`Fo-Fc`,isoValue:3,color:3390259}],ctor:()=>({name:`Channel`,isoValue:1,color:8421504})}),source:y.Url(`https://www.ebi.ac.uk/pdbe/entry-files/download/1tqn.bcif`,{label:`Source (url)`}),opacity:y.Converted(e=>e*100,e=>e/100,y.Numeric(35,{min:0,max:100,step:1},{label:`Opacity % (converted)`})),level:y.Conditioned(1.5,{relative:y.Numeric(1.5,{min:-5,max:5,step:.1},{label:`σ`}),absolute:y.Numeric(.035,{min:0,max:1,step:.001},{label:`Value`})},e=>Math.abs(e)>=.5?`relative`:`absolute`,(e,t)=>t===`relative`?1.5:.035,{label:`Level (conditioned)`}),query:y.Script({language:`pymol`,expression:`resn HEM`},{label:`Query (script)`}),data:y.Value({a:1})}),X=[[`A`,1810039],[`B`,14245634],[`C`,7696563],[`D`,15149450]],Z=N({quality:y.Select(`auto`,[[`auto`,`Auto`],[`high`,`High`],[`low`,`Low`]],{description:"How finely surfaces and cartoons are tessellated; `auto` follows the structure size."}),chainColors:y.Boolean(!0,{label:`Chain colors`,description:"Gives every chain a color based on its `asym_id` value.",legend:{kind:`table-legend`,table:X}}),bFactor:y.Boolean(!1,{label:`B-factor`,description:`Colors by the atoms’ B-factor, low to high.`,legend:{kind:`scale-legend`,minLabel:`12.4`,maxLabel:`86.1`,colors:[255,16777215,16711680]}}),colorTheme:y.MappedStatic(`chain-id`,{"chain-id":y.Group({}),"element-symbol":y.Group({carbonColor:y.Color(8421504,{label:`Carbon color`})}),uncertainty:y.Group({})},{label:`Color theme`,options:[[`chain-id`,`Chain ID`],[`element-symbol`,`Element`],[`uncertainty`,`Uncertainty`]],help:e=>e.name===`chain-id`?{description:"Gives every chain a color based on its `asym_id` value.",legend:{kind:`table-legend`,table:X}}:e.name===`element-symbol`?{description:`Colors atoms by their element; carbons in the chosen carbon color.`,legend:{kind:`table-legend`,table:[[`C`,8421504],[`N`,3166456],[`O`,16715021],[`S`,16777008],[`Fe`,14706227]]}}:{description:`Colors by the atoms’ uncertainty (B-factor or pLDDT).`,legend:{kind:`scale-legend`,minLabel:`certain`,maxLabel:`uncertain`,colors:[21462,6671347,16767763,16743749]}}})}),Q=[`AllTypes`,`Booleans`,`Numbers`,`Text`,`Selects`,`Colors`,`Files`,`Groups`,`Presets`,`Mapped`,`Visibility`,`Search`,`LongLabels`,`MoreTypes`,`HelpAndLegends`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`render({
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