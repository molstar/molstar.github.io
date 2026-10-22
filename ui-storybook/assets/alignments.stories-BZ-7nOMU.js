import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{M as r,N as i,P as a}from"./skin-BNVBtwuB.js";import{A as o,M as s,T as c,d as l,g as u,j as d}from"./seqstar-docs-views-BGEFLQKn.js";import{d as f,i as p,r as m,u as h}from"./seqstar-prism-C8YUN_JZ.js";import{a as g,f as _,p as v,s as y}from"./seqstar-viewer-Bgs4ivXs.js";import{h as b,t as x}from"./ui-5oW1_QIl.js";import{n as S,t as C}from"./seqstar-viewer-args-hTFTrVdi.js";function w({dataRow:e}){let[t,n]=(0,T.useState)(!1);return(0,E.jsx)(b,{content:`Show row ${e+1} in 3D`,children:(0,E.jsx)(`button`,{type:`button`,className:v.rowToggle,"aria-pressed":t,"aria-label":`Show row ${e+1} in 3D`,onClick:()=>n(!t),children:`3D`})})}var T,E,D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{i(),T=t(),d(),u(),h(),p(),y(),_(),C(),x(),E=n(),D={title:`Seq*/Views and layouts/Alignments`,...S,parameters:{...S.parameters,layout:`fullscreen`,docs:{description:{component:`Alignments: the rows' vertical navigation, a tree beside the rows, guide trees computed at load and a realigned family,
and a control beside each row.`}}}},O=[[`scrollbar (the default)`,{verticalNav:`scrollbar`}],[`scrollbar, verticalZoom: its thumb's ends zoom rows`,{verticalNav:`scrollbar`,verticalZoom:!0}],[`overview`,{verticalNav:`overview`}],["both (the `msa` preset's default)",{verticalNav:`both`}],[`both, verticalZoom: handles on the window's top and bottom`,{verticalNav:`both`,verticalZoom:!0}],[`none (Alt-wheel and the keyboard still zoom rows)`,{verticalNav:`none`}]],k=s(160,10),A={name:`Vertical navigation (160 rows)`,render:e=>(0,E.jsx)(m,{title:`Vertical navigation on a synthetic family of 160 rows`,caption:(0,E.jsx)(E.Fragment,{children:"Synthetic: case 3's SH2 rows with deterministic substitutions and gaps (not real sequences); a box section of 10 rows. The `msa` preset's choice per card; Alt-wheel and the keyboard zoom rows in each."}),children:O.map(([t,n])=>(0,E.jsx)(g,{doc:k,label:`verticalNav: ${t}`,options:{...n,navigator:e.navigator,ui:e.ui}},t))})},j=o(160,16,{columns:!0,sites:!0}),M={name:`A tree beside the rows`,render:e=>(0,E.jsx)(m,{title:`A synthetic family of 160 rows with a synthetic tree`,caption:(0,E.jsx)(E.Fragment,{children:`Synthetic: case 3's SH2 rows mutated and a generated tree (a clade per seed, balanced; not a real phylogeny), synthetic data columns and two sites on rows (lanes). Rows in tree order; click a clade's branch or connector to collapse it, the wedge to open it; hover a node to see its rows; Alt-wheel zooms rows (below 4 px they draw as one band).`}),children:(0,E.jsx)(g,{doc:j,label:`A family of 160 rows with a tree`,options:{navigator:e.navigator,rowsColor:e.rowsColor,ui:e.ui}})})},N={name:`Guide trees and realignment`,render:e=>(0,E.jsxs)(m,{title:`A guide tree computed from the alignment`,caption:(0,E.jsxs)(E.Fragment,{children:[`One synthetic alignment of 13 rows (evolved down a known tree with unequal rates, in a fixed shuffle, so the data order is not the tree's), no tree in the document: `,(0,E.jsxs)(`code`,{children:[`tree `,`{ provider: "nj" }`]}),` and`,` `,(0,E.jsx)(`code`,{children:`upgma`}),` compute theirs from p-distances at load, and the rows follow their leaf order. Both find the distant outgroup O1 and the B clade; they differ on the fast-evolving A5. NJ is rooted at the midpoint of its longest path and keeps A5's long branch of its own (about 0.21 against 0.01 to 0.06 for the rest of its clade); UPGMA assumes a clock, so every leaf ends at one height and A5 is pulled to a sister of its clade. Click a branch to collapse a clade.`]}),children:[[`nj`,`upgma`].map(t=>(0,E.jsx)(g,{doc:l(t),label:t===`nj`?`Neighbor joining`:`UPGMA`,options:{navigator:e.navigator,rowsColor:e.rowsColor,ui:e.ui}},t)),(0,E.jsxs)(`div`,{className:f.kicker,children:[`Realigning: a second family, 12 rows from four clades with insertions and deletions (B lost 5 residues, C gained GSGS, D lost 4), its rows given as just their residues padded at the end (first card: the indels shift everything after them), and as `,(0,E.jsxs)(`code`,{children:[`alignment `,`{ provider: "realign", inputs: "given" }`]}),`(second): biomsa's progressive alignment of the rows' own residues at load, each new row bound to its input row, labels and order kept, an NJ tree computed over the result, rows in tree order. The columns line up again after each indel.`]}),[!1,!0].map(t=>(0,E.jsx)(g,{doc:c(t),label:t?`Realigned`:`As given`,options:{navigator:e.navigator,rowsColor:e.rowsColor,ui:e.ui}},String(t)))]})},P={components:{RowControl:w}},F=(e,t,{dataRow:n})=>{let i=`Show row ${n+1} in 3D`,o=r({class:`seqv-choice`,"aria-pressed":!1,"aria-label":i},()=>{a(o,`aria-pressed`,o.getAttribute(`aria-pressed`)!==`true`)},`3D`);return e.append(o),{dispose:()=>o.remove()}},I={RowControl:F},L={name:`Row controls`,render:e=>(0,E.jsx)(m,{title:`A control beside each row`,caption:(0,E.jsx)(E.Fragment,{children:"The host's component in the `RowControl` slot, in the header's last 40 px (render prop `controlWidth`); only the rows in view get one, and they follow the rows' scroll by a transform (no React render per scroll)."}),children:(0,E.jsx)(g,{doc:j,label:`A family of 160 rows, a control beside each`,ui:P,domSlots:I,options:{navigator:e.navigator,rowsColor:e.rowsColor,ui:e.ui,render:{controlWidth:40,headerWidth:230}}})})},R=[`FamilyVertical`,`FamilyTree`,`ComputedTrees`,`RowControls`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Vertical navigation (160 rows)',
  render: a => <PrismPage title="Vertical navigation on a synthetic family of 160 rows" caption={<>
          Synthetic: case 3's SH2 rows with deterministic substitutions and gaps (not real sequences); a box section of
          10 rows. The \`msa\` preset's choice per card; Alt-wheel and the keyboard zoom rows in each.
        </>}>
      {VERTICAL.map(([label, o]) => <ViewerCard key={label} doc={FAMILY} label={\`verticalNav: \${label}\`} options={{
      ...o,
      navigator: a.navigator,
      ui: a.ui
    }} />)}
    </PrismPage>
}`,...A.parameters?.docs?.source},description:{story:"The rows' vertical navigation choices (render props `verticalNav`, `verticalZoom`) on 160 rows, 10 in view.",...A.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'A tree beside the rows',
  render: a => <PrismPage title="A synthetic family of 160 rows with a synthetic tree" caption={<>
          Synthetic: case 3's SH2 rows mutated and a generated tree (a clade per seed, balanced; not a real phylogeny),
          synthetic data columns and two sites on rows (lanes). Rows in tree order; click a clade's branch or connector
          to collapse it, the wedge to open it; hover a node to see its rows; Alt-wheel zooms rows (below 4 px they draw
          as one band).
        </>}>
      <ViewerCard doc={TREE_FAMILY} label="A family of 160 rows with a tree" options={{
      navigator: a.navigator,
      rowsColor: a.rowsColor,
      ui: a.ui
    }} />
    </PrismPage>
}`,...M.parameters?.docs?.source},description:{story:`The tree beside the rows: click a clade's branch to collapse it into a wedge, again to open.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Guide trees and realignment',
  render: a => <PrismPage title="A guide tree computed from the alignment" caption={<>
          One synthetic alignment of 13 rows (evolved down a known tree with unequal rates, in a fixed shuffle, so the
          data order is not the tree's), no tree in the document: <code>tree {'{ provider: "nj" }'}</code> and{' '}
          <code>upgma</code> compute theirs from p-distances at load, and the rows follow their leaf order. Both find
          the distant outgroup O1 and the B clade; they differ on the fast-evolving A5. NJ is rooted at the midpoint of
          its longest path and keeps A5's long branch of its own (about 0.21 against 0.01 to 0.06 for the rest of its
          clade); UPGMA assumes a clock, so every leaf ends at one height and A5 is pulled to a sister of its clade.
          Click a branch to collapse a clade.
        </>}>
      {(['nj', 'upgma'] as const).map(provider => <ViewerCard key={provider} doc={computedTreeDoc(provider)} label={provider === 'nj' ? 'Neighbor joining' : 'UPGMA'} options={{
      navigator: a.navigator,
      rowsColor: a.rowsColor,
      ui: a.ui
    }} />)}
      <div className={f.kicker}>
        Realigning: a second family, 12 rows from four clades with insertions and deletions (B lost 5 residues, C gained
        GSGS, D lost 4), its rows given as just their residues padded at the end (first card: the indels shift
        everything after them), and as <code>alignment {'{ provider: "realign", inputs: "given" }'}</code>
        (second): biomsa's progressive alignment of the rows' own residues at load, each new row bound to its input row,
        labels and order kept, an NJ tree computed over the result, rows in tree order. The columns line up again after
        each indel.
      </div>
      {[false, true].map(realigned => <ViewerCard key={String(realigned)} doc={realignedDoc(realigned)} label={realigned ? 'Realigned' : 'As given'} options={{
      navigator: a.navigator,
      rowsColor: a.rowsColor,
      ui: a.ui
    }} />)}
    </PrismPage>
}`,...N.parameters?.docs?.source},description:{story:"Guide trees: `nj` and `upgma` node providers on a committed alignment, computed at load from its distances.",...N.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Row controls',
  render: a => <PrismPage title="A control beside each row" caption={<>
          The host's component in the \`RowControl\` slot, in the header's last 40 px (render prop \`controlWidth\`); only
          the rows in view get one, and they follow the rows' scroll by a transform (no React render per scroll).
        </>}>
      <ViewerCard doc={TREE_FAMILY} label="A family of 160 rows, a control beside each" ui={ROW_UI} domSlots={ROW_DOM} options={{
      navigator: a.navigator,
      rowsColor: a.rowsColor,
      ui: a.ui,
      render: {
        controlWidth: 40,
        headerWidth: 230
      }
    }} />
    </PrismPage>
}`,...L.parameters?.docs?.source},description:{story:"A control beside each visible row, through the `RowControl` slot.",...L.parameters?.docs?.description}}}})))()}z();export{N as ComputedTrees,M as FamilyTree,A as FamilyVertical,L as RowControls,R as __namedExportsOrder,D as default};