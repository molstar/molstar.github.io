import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{dn as r,fn as i}from"./surface-Cl60Scjx.js";import{_ as a,p as o,v as s}from"./skin-BOwnI78S.js";import{d as c,i as l,r as u,u as d}from"./seqstar-prism-C8YUN_JZ.js";import{a as f,s as p}from"./seqstar-viewer-De3tpdmL.js";import{i as m,t as h}from"./ui-5oW1_QIl.js";import{_ as g,d as _,f as v,g as y,h as b,i as x,m as S,p as C}from"./seqstar-docs-streamed-B2dH92u4.js";var w;function T(){return(T=e((()=>{w=e=>e.streams})))()}function E({cacheKb:e}){let{context:t}=s(),n=a(t.graph.assembled);(0,A.useEffect)(()=>t.config.set(r.Stream.CacheBytes,e*1024),[t,e]);let i=[];for(let e of n?.set.annotations??[])e&&i.push(n?.set.strings.get(e.key)??``);let o=i.filter(e=>e.startsWith(`sig/`)),l=e=>{let n=t.viewports.get(`dyn.main`);e===null?n?.fit():n?.zoomTo(0,e-4e3,e+4e3)};return(0,j.jsxs)(`div`,{className:c.stack,children:[(0,j.jsxs)(`div`,{className:c.row,children:[(0,j.jsx)(m,{onClick:()=>l(null),children:`Whole chromosome`}),Object.entries(x).map(([e,t])=>(0,j.jsx)(m,{onClick:()=>l(t),children:`Zoom to peak ${e}`},e))]}),(0,j.jsxs)(`div`,{className:c.code,children:[`Held from the stream: `,o.length,` node`,o.length===1?``:`s`,` (`,o.slice(0,8).join(`, `),o.length>8?`, …`:``,`)`]})]})}function D({latency:e,cacheKb:t}){v.latency=e;let n=(0,A.useMemo)(_,[]),r=(0,A.useMemo)(()=>({loaders:C()}),[]);return(0,j.jsx)(f,{doc:n,options:r,label:`A 2 Mb chromosome; peaks arrive as you zoom in and pan`,children:(0,j.jsx)(E,{cacheKb:t})})}function O({asked:e}){let{context:t}=s(),n=a(t.graph.assembled),r=a(t.issues.current),i=n?.view?.resolved,o=0;for(let e=0;i&&e<i.layers.count;e++)i.layers.node[e]!==null&&o++;let l=r.filter(e=>e.code===`svs.stream.depth`).length;return(0,j.jsxs)(`div`,{className:c.stack,children:[(0,j.jsx)(`div`,{className:c.row,children:(0,j.jsx)(m,{onClick:()=>{let e=w(t).nodes,n=e.entries.size+1;e.add(`genes`,[b(`X${n}`,`Gene X${n} (a patch's)`,5e4+n*137e3%18e5,6e4)])},children:`Add a gene, as a patch would`})}),(0,j.jsxs)(`div`,{className:c.code,children:[`Instance tracks: `,o,`. Manifests asked for: `,e.length,` (`,e.slice(-6).join(`, `),e.length>6?`, …`:``,`). Sources deeper than max_depth: `,l,`.`]})]})}function k({latency:e,maxDepth:t}){v.latency=e;let n=(0,A.useMemo)(()=>y(t),[t]),r=(0,A.useMemo)(()=>[],[]),i=(0,A.useMemo)(()=>({loaders:g(r)}),[r]);return(0,j.jsx)(f,{doc:n,options:i,label:`Genes, their transcripts and their domains, by template`,children:(0,j.jsx)(O,{asked:r})})}var A,j,M,N,P,F;function I(){return(I=e((()=>{i(),o(),T(),A=t(),S(),d(),l(),p(),h(),j=n(),M={title:`Seq*/Streaming/Streamed data`,parameters:{layout:`fullscreen`,docs:{description:{component:`Dynamic nodes: a streamed source's manifest and patches add data nodes to the set,
never to the document. A fixture provider over one 2 Mb chromosome serves a signal; its manifest brings the genes, and
each region of data (at base resolution, zoomed in past 10 positions a pixel) brings a peak annotation. Three tracks
name peaks A, B and C and stay hidden until their node arrives; nodes no track shows leave with their regions once
the cache is full. Latency and the cache are knobs.`}}}},N={name:`Dynamic nodes: manifest, patch and eviction`,args:{latency:300,cacheKb:256},argTypes:{latency:{control:{type:`range`,min:0,max:2e3,step:50},description:`ms before each region's answer`},cacheKb:{control:{type:`range`,min:64,max:4096,step:64},description:`Stream.CacheBytes, KiB`}},render:e=>(0,j.jsx)(u,{title:`Dynamic nodes: from a manifest, with a patch, and out again`,caption:(0,j.jsx)(j.Fragment,{children:`The genes come with the source's manifest, before any data. Zoom in past about 10 positions a pixel (or press a button): each region of data brings a peak, and a track that names one (Peak A, B, C) appears when it arrives. Pan on at that zoom and the regions behind you leave under the cache's bound, taking the peaks no track shows with them; the shown ones stay, and one that returns keeps its id. The document never changes.`}),children:(0,j.jsx)(D,{latency:e.latency,cacheKb:e.cacheKb})})},P={name:`Dynamic nodes: templates and nested sources`,args:{latency:400,maxDepth:4},argTypes:{latency:{control:{type:`range`,min:0,max:2e3,step:50},description:`ms before a nested source's manifest`},maxDepth:{control:{type:`range`,min:1,max:4,step:1},description:`the genes source's max_depth`}},render:e=>(0,j.jsx)(u,{title:`Dynamic nodes: rows templated from a keyed source, sources nested two deep`,caption:(0,j.jsx)(j.Fragment,{children:`One track template per level: a track for every gene the genes source's manifest keys, for every transcript of the source each gene nests, and for every domain of the source each transcript nests. A nested source is asked for only because a template reaches its nodes; at max_depth 2 the domains' sources are too deep, reported and never asked. A gene added as a patch would add it gets its track at once, in key order.`}),children:(0,j.jsx)(k,{latency:e.latency,maxDepth:e.maxDepth},e.maxDepth)})},F=[`FirstPart`,`SecondPart`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Dynamic nodes: manifest, patch and eviction',
  args: {
    latency: 300,
    cacheKb: 256
  },
  argTypes: {
    latency: {
      control: {
        type: 'range',
        min: 0,
        max: 2000,
        step: 50
      },
      description: "ms before each region's answer"
    },
    cacheKb: {
      control: {
        type: 'range',
        min: 64,
        max: 4096,
        step: 64
      },
      description: 'Stream.CacheBytes, KiB'
    }
  },
  render: args => <PrismPage title="Dynamic nodes: from a manifest, with a patch, and out again" caption={<>
          The genes come with the source's manifest, before any data. Zoom in past about 10 positions a pixel (or press
          a button): each region of data brings a peak, and a track that names one (Peak A, B, C) appears when it
          arrives. Pan on at that zoom and the regions behind you leave under the cache's bound, taking the peaks no
          track shows with them; the shown ones stay, and one that returns keeps its id. The document never changes.
        </>}>
      <Card latency={args.latency} cacheKb={args.cacheKb} />
    </PrismPage>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Dynamic nodes: templates and nested sources',
  args: {
    latency: 400,
    maxDepth: 4
  },
  argTypes: {
    latency: {
      control: {
        type: 'range',
        min: 0,
        max: 2000,
        step: 50
      },
      description: "ms before a nested source's manifest"
    },
    maxDepth: {
      control: {
        type: 'range',
        min: 1,
        max: 4,
        step: 1
      },
      description: "the genes source's max_depth"
    }
  },
  render: args => <PrismPage title="Dynamic nodes: rows templated from a keyed source, sources nested two deep" caption={<>
          One track template per level: a track for every gene the genes source's manifest keys, for every transcript of
          the source each gene nests, and for every domain of the source each transcript nests. A nested source is asked
          for only because a template reaches its nodes; at max_depth 2 the domains' sources are too deep, reported and
          never asked. A gene added as a patch would add it gets its track at once, in key order.
        </>}>
      <TemplateCard key={args.maxDepth} latency={args.latency} maxDepth={args.maxDepth} />
    </PrismPage>
}`,...P.parameters?.docs?.source}}}})))()}I();export{N as FirstPart,P as SecondPart,F as __namedExportsOrder,M as default};