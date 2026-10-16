import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{i as r,r as i}from"./seqstar-prism-C8YUN_JZ.js";import{a,s as o}from"./seqstar-viewer-De3tpdmL.js";import{i as s,r as c}from"./seqstar-docs-circular-DgSBvDOW.js";var l,u,d,f,p,m;function h(){return(h=e((()=>{l=t(),s(),r(),o(),u=n(),d={title:`Seq*/Views and layouts/Axes and strands`,parameters:{layout:`fullscreen`,docs:{description:{component:`Circular maps (CG2, CG3): a circular genome through the builder's preset, rings with their linear detail and its
window (the plasmid map is case 16, in the Viewer cases).`}}}},f={chrome:`clean`},p={name:`A circular genome`,render:()=>{let e=(0,l.useMemo)(c,[]);return(0,u.jsx)(i,{title:`A circular genome: strands on rings, a values ring, its linear detail`,caption:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(`code`,{children:[`b.preset.circularGenome(view, chr, `,`{ features, values }`,`)`]}),`: 160 synthetic genes on 120,000 nt, the forward strand's on the outer ring and the reverse strand's inside it (each with arrowheads where a gene is long enough to carry one), a GC skew as bars on the inner ring, and the linear detail following, its view a window on the ring: wheel-zoom the detail, then drag the window or its grips.`]}),children:(0,u.jsx)(a,{doc:e,label:`chr, ring and detail`,options:f})})}},m=[`CircularGenome`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'A circular genome',
  render: () => {
    const doc = useMemo(circularGenomeDoc, []);
    return <PrismPage title="A circular genome: strands on rings, a values ring, its linear detail" caption={<>
            <code>b.preset.circularGenome(view, chr, {'{ features, values }'})</code>: 160 synthetic genes on 120,000
            nt, the forward strand&apos;s on the outer ring and the reverse strand&apos;s inside it (each with
            arrowheads where a gene is long enough to carry one), a GC skew as bars on the inner ring, and the linear
            detail following, its view a window on the ring: wheel-zoom the detail, then drag the window or its grips.
          </>}>
        <ViewerCard doc={doc} label="chr, ring and detail" options={CLEAN} />
      </PrismPage>;
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as CircularGenome,m as __namedExportsOrder,d as default};