import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{n,r}from"./builder-DcT68JdP.js";import{D as i,g as a,x as o}from"./seqstar-docs-views-6L-p3-tz.js";import{d as s,i as c,r as l,u}from"./seqstar-prism-C8YUN_JZ.js";import{a as d,s as f}from"./seqstar-viewer-De3tpdmL.js";function p(e={}){let t=n({title:e.title??`Per-row marks`}),r=t.data.sequence({ref:`ref`,alphabet:`protein`,value:m,label:`Reference`});t.data.sequence({ref:`chain`,alphabet:`protein`,value:h});for(let e of g)t.data.unit({ref:e.ref,sequence:`chain`,observed:e.observed,label:`chain ${e.ref}`});t.data.mapping({ref:`chain-ref`,from:`chain`,to:`ref`,method:`segments`,segments:[[0,10,h.length]]});let i=g.flatMap(e=>e.observed.map(([t,n])=>({unit:e.ref,s:t,t:n}))),a=t.data.annotation({ref:`chains`,geometry:`ranges`,label:`Observed`,value:{target:i.map(e=>e.unit),start:i.map(e=>e.s),stop:i.map(e=>e.t),id:i.map(e=>`chain ${e.unit}`),chain:i.map(e=>e.unit)}}),o=[t.data.annotation({ref:`on-b`,geometry:`ranges`,target:`B`,value:{start:[4],stop:[8]}}),t.data.annotation({ref:`on-ref`,geometry:`ranges`,target:r,value:{start:[30],stop:[34]}})],s=t.view({ref:`v`,label:`V`}).section({ref:`v.main`,...e.highlights?{highlights:[{data:o[0],style:`highlight`},{data:o[1],style:`accent`}]}:{}}).block({sequence:r,label:`Reference`});return s.track({ref:`t-letters`,label:`Reference`}).letters(),s.track({ref:`t-chains`,label:`Chains`,expanded:!0}).ranges({data:a,display:`union`,split:`chain`}),t.getDocument()}var m,h,g;function _(){return(_=e((()=>{r(),m=`MSTEQKLISEEDLNGAVKRLHEFAVPWQDTRYCMNPGSTEELKVAAQYIDGRLHHPSEK`,h=m.slice(10,50),g=[{ref:`A`,observed:[[0,40]]},{ref:`B`,observed:[[2,18],[24,38]]},{ref:`C`,observed:[[5,35]]}]})))()}function v({doc:e,title:t}){return(0,b.jsx)(d,{doc:e,label:t})}function y({title:e,kicker:t,children:n}){return(0,b.jsx)(l,{title:e,caption:t,children:(0,b.jsx)(`div`,{className:s.stack,children:n})})}var b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{_(),a(),u(),c(),f(),b=t(),x={title:`Seq*/Interaction/Hover`,parameters:{layout:`fullscreen`,docs:{description:{component:`Hover emphasis: the element under the pointer, and only it, outlined inside its own pixels in an
ink derived from its color, darker on a light skin and lighter on a dark one. Ranges (a transcript's every exon),
points, stacked variants, secondary structure, values and a matrix's cell, in the toolbar's theme (a logo gets none: a frame
over its stretched letters read as wrong, and the hover band marks the column); the
keyboard cursor's item too (click the viewer, then the arrow keys); and a section with \`hover_emphasis: false\`.`}}}},S=i(`p53, every emphasized type`),C=o(),w=i(`p53, hover emphasis off`,{hover_emphasis:!1}),T={name:`Hover emphasis`,render:()=>(0,b.jsxs)(y,{title:`Hover emphasis`,kicker:(0,b.jsxs)(b.Fragment,{children:[`Hover a range, a site, a variant, a strand, a score bar or a contact cell: the element under the pointer, and only it, is outlined inside its own pixels in an ink derived from its color (darker on light, lighter on dark; 3:1 against the surface). A region in two parts (TAD) outlines both; a narrow item is filled in the ink; a glyph is ringed only where the ring fits its cell. The keyboard cursor's item too: click a viewer, then use the arrow keys. The fingerprint's stripes: `,(0,b.jsx)(`a`,{href:`?path=/story/seq-cases-viewer--case-6`,children:`case 6`}),`.`]}),children:[(0,b.jsx)(v,{doc:S,title:`Tracks`}),(0,b.jsx)(v,{doc:C,title:`A profile's cells (its logo: the band alone)`})]})},E={name:`Hover emphasis off`,render:()=>(0,b.jsx)(y,{title:`Hover emphasis off`,kicker:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(`span`,{className:s.code,children:[`"style": `,`{`,`"hover_emphasis": false`,`}`]}),` `,`on the section (or the render prop `,(0,b.jsx)(`span`,{className:s.code,children:`hoverEmphasis`}),`): the hover band alone, with no outline.`]}),children:(0,b.jsx)(v,{doc:w,title:`Off`})})},D=p({highlights:!0}),O={name:`Per-row marks`,render:()=>(0,b.jsx)(y,{title:`Per-row marks`,kicker:(0,b.jsx)(b.Fragment,{children:`A split track whose rows sit on units of their own: three copies of a chain (A, B, C), each observed in part, drawn on the reference's axis through a mapping, a row each. A mark on one copy lights its own row alone (and the reference's tracks): here a highlight on chain B's residues 4–7. A mark on the reference lights every row: the accent at 30–33. Hover a row: off its bars the position is that copy's residue, on a bar the bar's, and only that row lights; hover the reference's letters and every row lights. Rows split by any other field (one unit for all of them, or rows on the block's own sequence) light together, as before.`}),children:(0,b.jsx)(v,{doc:D,title:`Chains on the reference`})})},k=[`Emphasis`,`Off`,`RowMarks`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Hover emphasis',
  render: () => <Frame title="Hover emphasis" kicker={<>
          Hover a range, a site, a variant, a strand, a score bar or a contact cell: the element under the pointer, and
          only it, is outlined inside its own pixels in an ink derived from its color (darker on light, lighter on dark;
          3:1 against the surface). A region in two parts (TAD) outlines both; a narrow item is filled in the ink; a
          glyph is ringed only where the ring fits its cell. The keyboard cursor's item too: click a viewer, then use
          the arrow keys. The fingerprint's stripes: <a href="?path=/story/seq-cases-viewer--case-6">case 6</a>.
        </>}>
      <One doc={TRACKS} title="Tracks" />
      <One doc={LOGO} title="A profile's cells (its logo: the band alone)" />
    </Frame>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Hover emphasis off',
  render: () => <Frame title="Hover emphasis off" kicker={<>
          <span className={f.code}>
            "style": {'{'}"hover_emphasis": false{'}'}
          </span>{' '}
          on the section (or the render prop <span className={f.code}>hoverEmphasis</span>): the hover band alone, with
          no outline.
        </>}>
      <One doc={OFF} title="Off" />
    </Frame>
}`,...E.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Per-row marks',
  render: () => <Frame title="Per-row marks" kicker={<>
          A split track whose rows sit on units of their own: three copies of a chain (A, B, C), each observed in part,
          drawn on the reference's axis through a mapping, a row each. A mark on one copy lights its own row alone (and
          the reference's tracks): here a highlight on chain B's residues 4–7. A mark on the reference lights every row:
          the accent at 30–33. Hover a row: off its bars the position is that copy's residue, on a bar the bar's, and
          only that row lights; hover the reference's letters and every row lights. Rows split by any other field (one
          unit for all of them, or rows on the block's own sequence) light together, as before.
        </>}>
      <One doc={SPLIT} title="Chains on the reference" />
    </Frame>
}`,...O.parameters?.docs?.source}}}})))()}A();export{T as Emphasis,E as Off,O as RowMarks,k as __namedExportsOrder,x as default};