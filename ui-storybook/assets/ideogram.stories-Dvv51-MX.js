import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{a as r,i,n as a,o,r as s,t as c}from"./seqstar-ideogram-ChDadUeA.js";import{_ as l,p as u}from"./skin-D1kpd6q3.js";import{d,i as f,r as p,u as m}from"./seqstar-prism-DWOjPmkV.js";import{a as h,s as g}from"./seqstar-viewer-D05VES_C.js";import{i as _,t as v}from"./ui-5oW1_QIl.js";function y(){let{context:e}=l();return(0,x.jsxs)(`div`,{className:d.row,children:[(0,x.jsx)(_,{onClick:()=>e.viewports.get(s)?.fit(),children:`Whole genome`}),c.map(([t,n,r,i])=>(0,x.jsx)(_,{onClick:()=>e.viewports.get(s)?.zoomTo(n,r,i),children:t},t))]})}var b,x,S,C,w;function T(){return(T=e((()=>{u(),b=t(),m(),o(),f(),g(),v(),x=n(),S={title:`Seq*/Views and layouts/Navigators`,parameters:{layout:`fullscreen`,docs:{description:{component:`The ideogram navigator: each block's chromosome drawn as its karyotype strip from hg38's committed cytobands (UCSC's
cytoBandIdeo, 862 bands recorded once), the view's window over it. The data is the story's (a registry entry,
\`ideogramNavigator(bands)\`); the navigator knows no biology but the stains. Offline: the sequence is synthetic.`}}}},C={name:`hg38 karyotype`,render:()=>{let e=(0,b.useMemo)(i,[]),t=(0,b.useMemo)(()=>({loaders:r(),maxHeight:420,navigator:`ideogram`,registry:a}),[]);return(0,x.jsx)(p,{title:`The ideogram navigator: hg38's chromosomes as their bands`,caption:(0,x.jsx)(x.Fragment,{children:`The row above the tracks is the navigator: a chromosome a block, each drawn as its cytobands, Giemsa stains as grays from light (negative) to dark (positive 100), variable and stalk bands lighter, the centromere's two bands as red triangles meeting in the middle. The window is the view's: a press jumps it, dragging pans it, an end zooms, a double click zooms in on the pointer and back out. Zoom to a chromosome and its strip fills the row; the other chromosomes keep their share of it. The cytobands are a committed fixture of UCSC's cytoBandIdeo; the sequence, genes and variants are synthetic. It is a navigator registered as an entry (the same one the streaming genome browser case uses), so any document can name it.`}),children:(0,x.jsx)(h,{doc:e,options:t,label:`24 chromosomes, one block each`,children:(0,x.jsx)(y,{})})})}},w=[`Karyotype`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'hg38 karyotype',
  render: () => {
    const doc = useMemo(ideogramDoc, []);
    const options = useMemo(() => ({
      loaders: ideogramLoaders(),
      maxHeight: 420,
      navigator: 'ideogram',
      registry: IDEOGRAM_REGISTRY
    }), []);
    return <PrismPage title="The ideogram navigator: hg38's chromosomes as their bands" caption={<>
            The row above the tracks is the navigator: a chromosome a block, each drawn as its cytobands, Giemsa stains
            as grays from light (negative) to dark (positive 100), variable and stalk bands lighter, the centromere's
            two bands as red triangles meeting in the middle. The window is the view's: a press jumps it, dragging pans
            it, an end zooms, a double click zooms in on the pointer and back out. Zoom to a chromosome and its strip
            fills the row; the other chromosomes keep their share of it. The cytobands are a committed fixture of UCSC's
            cytoBandIdeo; the sequence, genes and variants are synthetic. It is a navigator registered as an entry (the
            same one the streaming genome browser case uses), so any document can name it.
          </>}>
        <ViewerCard doc={doc} options={options} label="24 chromosomes, one block each">
          <Panel />
        </ViewerCard>
      </PrismPage>;
  }
}`,...C.parameters?.docs?.source}}}})))()}T();export{C as Karyotype,w as __namedExportsOrder,S as default};