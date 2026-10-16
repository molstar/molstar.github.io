import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{n as r,r as i,z as a}from"./builder-DcT68JdP.js";import{Dt as ee,Et as o,qt as s}from"./surface-Cl60Scjx.js";import{it as c,rt as l}from"./seqstar-cases-BolrmDeD.js";import{g as u,p as d,v as f}from"./skin-BOwnI78S.js";import{d as p,i as m,r as h,u as g}from"./seqstar-prism-C8YUN_JZ.js";import{a as _,s as v}from"./seqstar-viewer-De3tpdmL.js";import{i as y,t as b}from"./ui-5oW1_QIl.js";import{C as x,S,a as C,b as w,l as T,m as E,o as te,r as ne,u as D,v as re,x as ie,y as ae}from"./seqstar-docs-streamed-B2dH92u4.js";function oe(e=e=>e()){return{load:()=>Promise.reject(Error(`no files`)),stream:c(t=>t===`https://example.org/streamed-lazy`?t=>t.startsWith(`tiles/`)?e(()=>P(t)):P(t):null)}}function O(){let e=r({title:`A lazy alignment`}),t=e.data.alignment({ref:`lazy`,row_count:A,column_count:j,source:{uri:k,protocol:`seqstar-tiles/1`}}),n=e.view({ref:`rows`,label:`Lazy`,height:`box`});return n.block({alignment:t}),n.track({label:``}).ruler(),n.track({label:`Rows`}).rows(),e.getDocument()}var k,A,j,M,N,P;function F(){return(F=e((()=>{i(),a(),l(),k=`https://example.org/streamed-lazy`,A=2e4,j=1200,M=`ACDEFGHIKLMNPQRSTVWY`,N=new TextEncoder,P=async e=>{let[t,...n]=e.split(`/`),r=n.map(Number);if(t===`tiles`){let e=new Uint8Array(131072);for(let t=0;t<65536;t++){let n=Math.imul(t*2654435761+r[2]*97+r[3]*31+r[0],40503)>>>0;e[t]=n%7==0?45:M.charCodeAt(n%20),e[65536+t]=110+n%140}return e}if(t===`labels`)return N.encode(JSON.stringify(Array.from({length:r[1]-r[0]},(e,t)=>`SEQ${r[0]+t}`)));if(t===`rows`){let e=``;for(let t=0;t<j;t++){let n=Math.imul((r[0]+1)*73856093+t*19349663,2654435761)>>>0;e+=n%7==0?`-`:M[(n>>>8)%20]}return N.encode(JSON.stringify({label:`SEQ${r[0]}`,row:e}))}throw Error(`404 ${e}`)}})))()}function I({zooms:e=!0}){let{context:t}=f();u(t.streams.stats);let n=t.streams.stats.current,r=()=>void t.commands.run({command:o.Retry.id,params:{}},`api`),i=e=>{let n=t.viewports.get(te);e===0?n?.fit():n?.zoomTo(0,C,C+e)};return(0,U.jsxs)(`div`,{className:p.stack,children:[(0,U.jsxs)(`div`,{className:p.row,children:[e&&(0,U.jsx)(y,{onClick:()=>i(0),children:`Whole chromosome`}),e&&G.map(([e,t])=>(0,U.jsx)(y,{onClick:()=>i(t),children:e},e)),(0,U.jsx)(y,{onClick:r,children:`Retry failed regions (seqv:retry)`})]}),(0,U.jsxs)(`div`,{className:p.code,children:[n.requests,` regions asked, `,n.inFlight,` in flight, `,n.cancelled,` cancelled, `,n.errors,` failed;`,` `,(n.bytes/1024).toFixed(0),` KiB held`]})]})}function L({latency:e,failure:t}){w.latency=e,w.failure=t;let n=(0,H.useMemo)(ae,[]),r=(0,H.useMemo)(()=>({loaders:ie(),parts:[`TrackActions`]}),[]);return(0,U.jsx)(_,{doc:n,options:r,label:`A 20 Mb chromosome, everything streamed by region`,children:(0,U.jsx)(I,{})})}function R({latency:e,failure:t}){w.latency=e,w.failure=t;let n=(0,H.useMemo)(D,[]),r=(0,H.useMemo)(()=>({loaders:T(),parts:[`TrackActions`]}),[]);return(0,U.jsx)(_,{doc:n,options:r,label:`P1, 1,334 residues coded by three exons over 220 kb of chr2`,children:(0,U.jsx)(z,{})})}function z(){let{context:e}=f();u(e.streams.stats);let t=e.streams.stats.current,n=(t,n)=>e.viewports.get(ne)?.zoomTo(0,t,n);return(0,U.jsxs)(`div`,{className:p.stack,children:[(0,U.jsxs)(`div`,{className:p.row,children:[(0,U.jsx)(y,{onClick:()=>n(0,1334),children:`Whole protein`}),(0,U.jsx)(y,{onClick:()=>n(450,550),children:`Residues 450–550 (a codon split at 500)`}),(0,U.jsx)(y,{onClick:()=>n(880,920),children:`Residues 880–920`})]}),(0,U.jsxs)(`div`,{className:p.code,children:[t.requests,` regions asked, `,t.inFlight,` in flight; `,(t.bytes/1024).toFixed(0),` KiB held`]})]})}function B({latency:e,failure:t}){w.latency=e,w.failure=t;let n=(0,H.useMemo)(x,[]),r=(0,H.useMemo)(()=>({loaders:S(),parts:[`TrackActions`]}),[]);return(0,U.jsx)(_,{doc:n,options:r,label:`T1, a streamed transcript on chr2, and P1 mapped onto it`})}function V({latency:e,failure:t}){w.latency=e,w.failure=t;let n=(0,H.useMemo)(O,[]),r=(0,H.useMemo)(()=>({loaders:X,maxHeight:460,parts:[`TrackActions`]}),[]);return(0,U.jsx)(_,{doc:n,options:r,label:`20,000 rows × 1,200 columns, tiles loaded by view`,children:(0,U.jsx)(I,{zooms:!1})})}var H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{ee(),s(),d(),H=t(),F(),E(),g(),m(),v(),b(),U=n(),W={title:`Seq*/Streaming/Streamed data`,parameters:{layout:`fullscreen`,docs:{description:{component:`Streamed data: a chromosome whose letters a stream serves by region,
as a 2bit file would, from a committed fixture provider (offline: synthetic letters, N runs, soft-masked stretches).
Nothing is asked until a device pixel holds at most \`LETTERS_PER_PX\` positions; then the regions in view arrive (4,096
letters each, the view's first, then a view width each side) and are drawn as cells, and as letters once they fit.
Genes (exons of one id joined, a lane each kept across regions), variants (by alternative) and a values track
from the same provider; zoomed out, genes and variants as density from \`count\` bins. A region asked and not yet
arrived shows a quiet placeholder band (the latency knob makes it last); past the letters gate, a hatched band and a
hint. Progressive loading, on the overlay: skeletons that shimmer, error bands (the failure knob) with Retry, a
fade as regions arrive; genes colored by category (the manifest's vocabulary); and a lazy alignment loaded by view.`}}}},G=[[`2 Mb`,2e6],[`100 kb`,1e5],[`10 kb`,1e4],[`1 kb`,1e3],[`100 positions`,100]],K={latency:{control:{type:`range`,min:0,max:3e3,step:50},description:`ms before each region's answer`},failure:{control:{type:`range`,min:0,max:1,step:.05},description:`the share of region requests that fail (Retry asks them again)`}},q={name:`Letters, genes, variants and a signal`,args:{latency:250,failure:0},argTypes:K,render:e=>(0,U.jsxs)(h,{title:`Streamed data: a chromosome's letters, genes, variants and signal, by region`,caption:(0,U.jsxs)(U.Fragment,{children:[`The letters come from a stream, as from a 2bit file: the manifest gives the chromosome's length, and nothing else is asked until you zoom in to `,16,` positions a device pixel or fewer. Then the regions in view arrive (4,096 letters each, the view's first, then a view width on each side), drawn as cells colored by nucleotide, and as letters once a position is wide enough to read one. Pan: the margin's regions are already there. Every 100 kb starts with a run of N; soft-masked stretches arrive in lower case and are drawn as upper case. Zoomed out, the Sequence track is hatched and says to zoom in.`]}),children:[(0,U.jsx)(`div`,{className:p.kicker,children:`Genes and variants come from items streams: zoomed out (2 Mb and wider), as density from each region's counts per bin; closer, as items, 65,536 positions a region. A gene's exons are joined, and it keeps its lane and is drawn once though it crosses regions, colored by its category (protein coding, lncRNA, pseudogene: the manifest's vocabulary gives the palette its order); hover one for its label and fields. Variants are colored by their alternative, a second one at a position stacked above.`}),(0,U.jsx)(`div`,{className:p.kicker,children:'Progressive loading: a region asked and not yet arrived is a skeleton, the pending shade with a slow shimmer (one sweep a second); the signal keeps its coarser level drawn instead. Raise the latency and pan or jump: regions fade in over 150 ms as they arrive, those arriving together together. Raise the failure share: failed regions are hatched red bands saying so, the hover label says "failed", and the track\'s "…" menu (or the button, `seqv:retry`) asks them again. With reduced motion the shade holds still.'}),(0,U.jsx)(L,{latency:e.latency,failure:e.failure})]})},J={name:`A protein on its genome`,args:{latency:250,failure:0},argTypes:K,render:e=>(0,U.jsx)(h,{title:`Streamed data through a path: a genome's tracks on a protein's axis`,caption:(0,U.jsx)(U.Fragment,{children:`P1 is a protein whose gene sits on chr2 of a streamed genome: three exons over 220 kb, joined to the protein by a codon mapping. Its section shows chr2's streamed genes, variants and phyloP on the protein's own axis, through that mapping: only the regions its exons reach are asked (three regions of genes, never the introns between them), a variant lands on the residue its position codes, a gene's exon on its coding part, and phyloP over a residue is read over its codon (both parts where an intron splits one, as at residues 500 and 900). Hover a variant or a gene: its range is lit on the protein. Hover any residue: its label shows the codon that codes it, read from the genome's streamed letters (asked when first hovered), with its positions on chr2 and its strand; a codon an intron splits shows both parts (residue 500's T|CA, 900's A|TG). The second section is chr2 at the gene, the same tracks shown directly.`}),children:(0,U.jsx)(R,{latency:e.latency,failure:e.failure})})},Y={name:`A protein on its streamed transcript`,args:{latency:250,failure:0},argTypes:K,render:e=>(0,U.jsx)(h,{title:`Item coordinate systems: a protein's domains on the streamed transcript that codes it`,caption:(0,U.jsx)(U.Fragment,{children:`The genes stream serves transcript T1 with a map, its residues over its CDS on chr2 (a codon mapping's params). When a region holding it arrives, T1 becomes a coordinate system of its own, genes_src/T1, mapped onto chr2. The document maps protein P1 onto it, base for base, before it exists: P1's domains appear along T1's exons in the genome section as soon as T1 does, a domain across an intron in two parts. The second section is T1's own residues (its block names genes_src/T1): P1's domains, and the genome's variants and phyloP through T1's map. Hover a residue there: it is numbered in T1's own positions, and its codon is read from the genome's letters.`}),children:(0,U.jsx)(B,{latency:e.latency,failure:e.failure})})},X=oe(e=>re(e)),Z={name:`A lazy alignment by view`,args:{latency:600,failure:0},argTypes:K,render:e=>(0,U.jsx)(h,{title:`Streamed data: a lazy alignment, tile by tile`,caption:(0,U.jsx)(U.Fragment,{children:'A family alignment too large to hold, served in 256 × 256 tiles at the level the view needs (the reference protocol, `seqstar-tiles/1`, over a sampled transport: letters from a hash of the cell). The coarsest level comes first and stays drawn under a finer tile until it arrives; a tile with nothing in its place is a skeleton that shimmers, and arriving tiles fade in. Raise the latency and scroll or zoom to watch; raise the failure share for hatched red error bands, then Retry from the Rows track\'s "…" menu or the button.'}),children:(0,U.jsx)(V,{latency:e.latency,failure:e.failure})})},Q=[`Letters`,`ThroughAPath`,`OnItsTranscript`,`LazyAlignment`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Letters, genes, variants and a signal',
  args: {
    latency: 250,
    failure: 0
  },
  argTypes,
  render: args => <PrismPage title="Streamed data: a chromosome's letters, genes, variants and signal, by region" caption={<>
          The letters come from a stream, as from a 2bit file: the manifest gives the chromosome's length, and nothing
          else is asked until you zoom in to {LETTERS_PER_PX} positions a device pixel or fewer. Then the regions in
          view arrive (4,096 letters each, the view's first, then a view width on each side), drawn as cells colored by
          nucleotide, and as letters once a position is wide enough to read one. Pan: the margin's regions are already
          there. Every 100 kb starts with a run of N; soft-masked stretches arrive in lower case and are drawn as upper
          case. Zoomed out, the Sequence track is hatched and says to zoom in.
        </>}>
      <div className={f.kicker}>
        Genes and variants come from items streams: zoomed out (2 Mb and wider), as density from each region's counts
        per bin; closer, as items, 65,536 positions a region. A gene's exons are joined, and it keeps its lane and is
        drawn once though it crosses regions, colored by its category (protein coding, lncRNA, pseudogene: the
        manifest's vocabulary gives the palette its order); hover one for its label and fields. Variants are colored by
        their alternative, a second one at a position stacked above.
      </div>
      <div className={f.kicker}>
        Progressive loading: a region asked and not yet arrived is a skeleton, the pending shade with a slow shimmer
        (one sweep a second); the signal keeps its coarser level drawn instead. Raise the latency and pan or jump:
        regions fade in over 150 ms as they arrive, those arriving together together. Raise the failure share: failed
        regions are hatched red bands saying so, the hover label says "failed", and the track's "…" menu (or the button,
        \`seqv:retry\`) asks them again. With reduced motion the shade holds still.
      </div>
      <Card latency={args.latency} failure={args.failure} />
    </PrismPage>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'A protein on its genome',
  args: {
    latency: 250,
    failure: 0
  },
  argTypes,
  render: args => <PrismPage title="Streamed data through a path: a genome's tracks on a protein's axis" caption={<>
          P1 is a protein whose gene sits on chr2 of a streamed genome: three exons over 220 kb, joined to the protein
          by a codon mapping. Its section shows chr2's streamed genes, variants and phyloP on the protein's own axis,
          through that mapping: only the regions its exons reach are asked (three regions of genes, never the introns
          between them), a variant lands on the residue its position codes, a gene's exon on its coding part, and phyloP
          over a residue is read over its codon (both parts where an intron splits one, as at residues 500 and 900).
          Hover a variant or a gene: its range is lit on the protein. Hover any residue: its label shows the codon that
          codes it, read from the genome's streamed letters (asked when first hovered), with its positions on chr2 and
          its strand; a codon an intron splits shows both parts (residue 500's T|CA, 900's A|TG). The second section is
          chr2 at the gene, the same tracks shown directly.
        </>}>
      <CodingCard latency={args.latency} failure={args.failure} />
    </PrismPage>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'A protein on its streamed transcript',
  args: {
    latency: 250,
    failure: 0
  },
  argTypes,
  render: args => <PrismPage title="Item coordinate systems: a protein's domains on the streamed transcript that codes it" caption={<>
          The genes stream serves transcript T1 with a map, its residues over its CDS on chr2 (a codon mapping's
          params). When a region holding it arrives, T1 becomes a coordinate system of its own, genes_src/T1, mapped
          onto chr2. The document maps protein P1 onto it, base for base, before it exists: P1's domains appear along
          T1's exons in the genome section as soon as T1 does, a domain across an intron in two parts. The second
          section is T1's own residues (its block names genes_src/T1): P1's domains, and the genome's variants and
          phyloP through T1's map. Hover a residue there: it is numbered in T1's own positions, and its codon is read
          from the genome's letters.
        </>}>
      <TranscriptCard latency={args.latency} failure={args.failure} />
    </PrismPage>
}`,...Y.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'A lazy alignment by view',
  args: {
    latency: 600,
    failure: 0
  },
  argTypes,
  render: args => <PrismPage title="Streamed data: a lazy alignment, tile by tile" caption={<>
          A family alignment too large to hold, served in 256 × 256 tiles at the level the view needs (the reference
          protocol, \`seqstar-tiles/1\`, over a sampled transport: letters from a hash of the cell). The coarsest level
          comes first and stays drawn under a finer tile until it arrives; a tile with nothing in its place is a
          skeleton that shimmers, and arriving tiles fade in. Raise the latency and scroll or zoom to watch; raise the
          failure share for hatched red error bands, then Retry from the Rows track's "…" menu or the button.
        </>}>
      <LazyCard latency={args.latency} failure={args.failure} />
    </PrismPage>
}`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as LazyAlignment,q as Letters,Y as OnItsTranscript,J as ThroughAPath,Q as __namedExportsOrder,W as default};