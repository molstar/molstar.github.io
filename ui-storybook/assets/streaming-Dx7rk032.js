import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t,u as n}from"./blocks-DB-FaXqI.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{i,r as a}from"./react-Dyi61YEg.js";import{m as o,t as s}from"./live-DycFt76R.js";import{i as c,n as l}from"./snippets-CSCVEwd_.js";function u(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...i(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t,{title:`Seq*/Docs/Streaming`}),`
`,(0,f.jsx)(n.h1,{id:`streaming`,children:`Streaming`}),`
`,(0,f.jsxs)(n.p,{children:[`For a developer serving data too large to send whole. A `,(0,f.jsx)(n.strong,{children:`streamed source`}),` is fetched by region and level as the
view moves: the document says what is streamed and in which shape, the host's `,(0,f.jsx)(n.strong,{children:`stream provider`}),` answers requests,
and the viewer decides what to ask for, in what order, and what to keep. The format names no protocol, URL or server.
The terms are explained in `,(0,f.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs`,children:`Concepts`}),`.`]}),`
`,(0,f.jsx)(n.h2,{id:`when-to-stream`,children:`When to stream`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Genomes.`}),` GRCh38 is 3.1 billion positions over 24 chromosomes, with tracks over them: scores, coverage,
variants, transcripts.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Huge alignments.`}),` A Pfam "full" family, an MSA of a million rows: more cells than a tab should hold.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Anything too big to send whole.`}),` Data by value or a file by `,(0,f.jsx)(n.code,{children:`uri`}),` is read whole at load; past tens of megabytes,
stream it.`]}),`
`]}),`
`,(0,f.jsxs)(n.p,{children:[`Below that, send it whole: the viewer's density draws hold 3M nucleotides and a 10,000 × 300 alignment in memory
(`,(0,f.jsx)(n.a,{href:`?path=/story/seq-performance-large-documents--genome-scale`,children:`Genome-scale`}),`, `,(0,f.jsx)(n.a,{href:`?path=/story/seq-performance-large-documents--large-alignment`,children:`Large alignment`}),`),
and an alignment in memory is already drawn by tiles, computed in place (the same cache, no provider).`]}),`
`,(0,f.jsxs)(n.p,{children:[(0,f.jsx)(n.strong,{children:`The bench`}),` (`,(0,f.jsx)(n.code,{children:`viewer/_test/canvas/hg38.test.ts`}),`): GRCh38's 24
chromosomes at their real lengths as a letters stream's manifest (a `,(0,f.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#complex`,children:`complex`}),`
of 24 lazy `,(0,f.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#unit`,children:`units`}),`: nothing per position anywhere), and a values stream over
them, six BigWig-like levels of 32 to 1,048,576 positions a bin, sampled on demand by a provider that holds nothing.
A ruler and a values track in Chromium, 1,320 × 300 CSS px, at a device pixel ratio (DPR) of 1 (a standard display,
one device pixel per CSS pixel) and 2 (a high-density display such as Retina, four device pixels per CSS pixel):`]}),`
`,(0,f.jsxs)(n.table,{children:[(0,f.jsx)(n.thead,{children:(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.th,{}),(0,f.jsx)(n.th,{children:`DPR 1 (standard)`}),(0,f.jsx)(n.th,{children:`DPR 2 (high density)`})]})}),(0,f.jsxs)(n.tbody,{children:[(0,f.jsxs)(n.tr,{children:[(0,f.jsxs)(n.td,{children:[`Load: `,(0,f.jsx)(n.code,{children:`setDocument`}),` (both manifests) to the first settled whole frame`]}),(0,f.jsx)(n.td,{children:`44 ms`}),(0,f.jsx)(n.td,{children:`31 ms`})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:`A full frame at the whole genome (24 coarse regions, one a chromosome)`}),(0,f.jsx)(n.td,{children:`1.4 ms`}),(0,f.jsx)(n.td,{children:`1.6 ms`})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:`A full frame at 1 Mb, at 10 kb`}),(0,f.jsx)(n.td,{children:`1.2, 1.3 ms`}),(0,f.jsx)(n.td,{children:`1.5, 1.9 ms`})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:`Settled after a jump to 1 Mb, then to 10 kb`}),(0,f.jsx)(n.td,{children:`4, 2 frames`}),(0,f.jsx)(n.td,{children:`the same`})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsxs)(n.td,{children:[`A tour of 96 windows of 10 kb over every chromosome under an 8 MiB `,(0,f.jsx)(n.code,{children:`Stream.CacheBytes`})]}),(0,f.jsx)(n.td,{children:`858 requests, at most 7.97 MiB held`}),(0,f.jsx)(n.td,{children:`the same`})]})]})]}),`
`,(0,f.jsx)(n.p,{children:`A frame costs O(device columns), never O(positions in view), and a pan over held regions allocates nothing.`}),`
`,(0,f.jsx)(n.h2,{id:`the-pieces`,children:`The pieces`}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{children:` DOCUMENT              HOST'S PROVIDER                      VIEWER (ctx.streams)
 ─────────             ───────────────                      ────────────────────
 source  ──compile──►  fetch(system: null)  ──► manifest ──► systems, levels, domain: the layout is fixed
 stream: "signal"                                                │
 data_kind: "values"                                             ▼ per frame, from the viewport
                       fetch(request, signal) ◄──────────────  requests: (source, system, [start, stop), level)
                             │                                   coarse first, the view center out, the margin
                             └──► data patch ──────────────────► cache: regions by (system, level), under CacheBytes
                                  items | bins | letters | rows      │
                                                                     ▼
                                                                   draw: the view's level, else a coarser one
`})}),`
`,(0,f.jsx)(n.h3,{id:`a-streamed-source`,children:`A streamed source`}),`
`,(0,f.jsxs)(n.p,{children:[`A `,(0,f.jsx)(n.code,{children:`source`}),` node with `,(0,f.jsx)(n.code,{children:`stream`}),`, an id the host's provider resolves, or with `,(0,f.jsx)(n.code,{children:`protocol`}),` and `,(0,f.jsx)(n.code,{children:`uri`}),`, the address of a
provider the host registered for that protocol (`,(0,f.jsx)(n.code,{children:`seqstar-tiles/1`}),`, below). Exactly one of `,(0,f.jsx)(n.code,{children:`uri`}),`, `,(0,f.jsx)(n.code,{children:`service`}),`,
`,(0,f.jsx)(n.code,{children:`host_file`}),`, `,(0,f.jsx)(n.code,{children:`value`}),` and `,(0,f.jsx)(n.code,{children:`stream`}),`; a streamed source has no `,(0,f.jsx)(n.code,{children:`format`}),`.`]}),`
`,(0,f.jsxs)(n.table,{children:[(0,f.jsx)(n.thead,{children:(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.th,{children:`Param`}),(0,f.jsx)(n.th,{})]})}),(0,f.jsxs)(n.tbody,{children:[(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`stream`})}),(0,f.jsxs)(n.td,{children:[`the id the host's `,(0,f.jsx)(n.code,{children:`loaders.stream`}),` maps to a provider`]})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsxs)(n.td,{children:[(0,f.jsx)(n.code,{children:`protocol`}),`, `,(0,f.jsx)(n.code,{children:`uri`})]}),(0,f.jsxs)(n.td,{children:[`a provider registered for the protocol, at this address (instead of `,(0,f.jsx)(n.code,{children:`stream`}),`)`]})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`data_kind`})}),(0,f.jsxs)(n.td,{children:[(0,f.jsx)(n.code,{children:`letters`}),`, `,(0,f.jsx)(n.code,{children:`items`}),`, `,(0,f.jsx)(n.code,{children:`values`}),` or `,(0,f.jsx)(n.code,{children:`alignment`}),`; required with `,(0,f.jsx)(n.code,{children:`stream`}),`; with `,(0,f.jsx)(n.code,{children:`protocol`}),`, `,(0,f.jsx)(n.code,{children:`null`}),`: each reader's own`]})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`coordinate_system`})}),(0,f.jsxs)(n.td,{children:[`an `,(0,f.jsx)(n.code,{children:`items`}),` or `,(0,f.jsx)(n.code,{children:`values`}),` source's `,(0,f.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#coordinate-system`,children:`coordinate system`}),`: a `,(0,f.jsx)(n.code,{children:`sequence`}),`, `,(0,f.jsx)(n.code,{children:`unit`}),`, `,(0,f.jsx)(n.code,{children:`complex`}),`, `,(0,f.jsx)(n.code,{children:`alignment`}),` or row ref; `,(0,f.jsx)(n.code,{children:`null`}),`: the reading annotation's `,(0,f.jsx)(n.code,{children:`target`}),`. A `,(0,f.jsx)(n.code,{children:`letters`}),` or `,(0,f.jsx)(n.code,{children:`alignment`}),` source takes none`]})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`max_depth`})}),(0,f.jsxs)(n.td,{children:[`how deeply its patches may nest streamed sources (default 4; the document's source is level 1): a nested source deeper than that is `,(0,f.jsx)(n.code,{children:`svs.stream.depth`}),` and never asked for`]})]})]})]}),`
`,(0,f.jsx)(n.p,{children:`Its readers:`}),`
`,(0,f.jsxs)(n.table,{children:[(0,f.jsx)(n.thead,{children:(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.th,{children:(0,f.jsx)(n.code,{children:`data_kind`})}),(0,f.jsx)(n.th,{children:`Read by`}),(0,f.jsx)(n.th,{children:`Its coordinate systems`})]})}),(0,f.jsxs)(n.tbody,{children:[(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`letters`})}),(0,f.jsxs)(n.td,{children:[`a `,(0,f.jsx)(n.code,{children:`sequence`}),` (`,(0,f.jsx)(n.code,{children:`record`}),`: a manifest key); or a `,(0,f.jsx)(n.code,{children:`complex`}),` with `,(0,f.jsx)(n.code,{children:`source_ref`}),` and no `,(0,f.jsx)(n.code,{children:`provider`}),`: a unit `,(0,f.jsx)(n.code,{children:`R/<key>`}),` over a sequence `,(0,f.jsx)(n.code,{children:`R/<key>/sequence`}),` per system of the manifest`]}),(0,f.jsxs)(n.td,{children:[`the reader's: `,(0,f.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#molecule`,children:`molecules`}),` whose letters are pending, their lengths and numberings the manifest's`]})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`alignment`})}),(0,f.jsxs)(n.td,{children:[`an `,(0,f.jsx)(n.code,{children:`alignment`})]}),(0,f.jsx)(n.td,{children:`its columns and rows`})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`items`})}),(0,f.jsxs)(n.td,{children:[`an `,(0,f.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#annotation-and-item`,children:`annotation`}),` of geometry `,(0,f.jsx)(n.code,{children:`ranges`})]}),(0,f.jsxs)(n.td,{children:[(0,f.jsx)(n.code,{children:`coordinate_system`}),`; over a complex, each manifest key is a member (`,(0,f.jsx)(n.code,{children:`chr17`}),` is `,(0,f.jsx)(n.code,{children:`hg38/chr17`}),`)`]})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`values`})}),(0,f.jsxs)(n.td,{children:[`an annotation of geometry `,(0,f.jsx)(n.code,{children:`values`})]}),(0,f.jsxs)(n.td,{children:[`as `,(0,f.jsx)(n.code,{children:`items`})]})]})]})]}),`
`,(0,f.jsxs)(n.p,{children:[`A key that names no member is `,(0,f.jsx)(n.code,{children:`svs.stream.ref`}),`; a reader of another kind is `,(0,f.jsx)(n.code,{children:`svs.source.format`}),`. A streamed
`,(0,f.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#alignment-rows-and-columns`,children:`alignment`}),`'s tree needs `,(0,f.jsx)(n.code,{children:`leaves: "order"`}),`
(`,(0,f.jsx)(n.code,{children:`svs.tree.streamed`}),`), its rows are fetched whole only for the reference row and rows that data targets, and
`,(0,f.jsx)(n.code,{children:`column_stats`}),` with the default params is the provider's (a source of its own, `,(0,f.jsx)(n.code,{children:`<ref>#stats`}),`).`]}),`
`,(0,f.jsx)(n.h3,{id:`the-manifest`,children:`The manifest`}),`
`,(0,f.jsxs)(n.p,{children:[`The answer to a source's first request (`,(0,f.jsx)(n.code,{children:`system: null`}),`), and all that compile reads of it: layout, palettes, legends
and split rows read the manifest, so they are fixed before any data arrives and nothing moves when it does.`]}),`
`,(0,f.jsxs)(n.table,{children:[(0,f.jsx)(n.thead,{children:(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.th,{children:`Field`}),(0,f.jsx)(n.th,{})]})}),(0,f.jsxs)(n.tbody,{children:[(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`systems`})}),(0,f.jsxs)(n.td,{children:[`required: per coordinate system its `,(0,f.jsx)(n.code,{children:`key`}),`, `,(0,f.jsx)(n.code,{children:`extent`}),` (half-open), `,(0,f.jsx)(n.code,{children:`numbering`}),` (a numbering node's params, or `,(0,f.jsx)(n.code,{children:`null`}),`) and `,(0,f.jsx)(n.code,{children:`label`})]})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`levels`})}),(0,f.jsxs)(n.td,{children:[`required: the summary levels served, finest first: positions per bin, or an alignment's `,(0,f.jsx)(n.code,{children:`[rows, columns]`}),` per bin; `,(0,f.jsx)(n.code,{children:`[]`}),`: data only`]})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`domain`})}),(0,f.jsxs)(n.td,{children:[(0,f.jsx)(n.code,{children:`values`}),`: the range of its values over the whole source (the layer's scale)`]})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`vocabulary`})}),(0,f.jsxs)(n.td,{children:[(0,f.jsx)(n.code,{children:`items`}),`: per categorical field, the values it may take, in order (palette order)`]})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsxs)(n.td,{children:[(0,f.jsx)(n.code,{children:`rows`}),`, `,(0,f.jsx)(n.code,{children:`columns`}),`, `,(0,f.jsx)(n.code,{children:`inserts`}),`, `,(0,f.jsx)(n.code,{children:`labels`})]}),(0,f.jsxs)(n.td,{children:[(0,f.jsx)(n.code,{children:`alignment`}),`: its shape, its insert columns, whether row labels are served`]})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`alphabet`})}),(0,f.jsxs)(n.td,{children:[(0,f.jsx)(n.code,{children:`letters`}),`, `,(0,f.jsx)(n.code,{children:`alignment`})]})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`nodes`})}),(0,f.jsx)(n.td,{children:`dynamic nodes known up front (below)`})]})]})]}),`
`,(0,f.jsxs)(n.p,{children:[`A missing provider is `,(0,f.jsx)(n.code,{children:`svs.provider.unavailable`}),` (a warning: the nodes reading it are left out, nothing else fails); a
failed manifest is `,(0,f.jsx)(n.code,{children:`svs.source.load`}),`, one without `,(0,f.jsx)(n.code,{children:`systems`}),` and `,(0,f.jsx)(n.code,{children:`levels`}),` `,(0,f.jsx)(n.code,{children:`svs.source.format`}),`. Declared shapes
(`,(0,f.jsx)(n.code,{children:`row_count`}),`, `,(0,f.jsx)(n.code,{children:`column_count`}),`, `,(0,f.jsx)(n.code,{children:`length`}),`) are checked against it.`]}),`
`,(0,f.jsx)(n.h3,{id:`requests`,children:`Requests`}),`
`,(0,f.jsxs)(n.p,{children:[`A `,(0,f.jsx)(n.code,{children:`StreamRequest`}),` names the `,(0,f.jsx)(n.code,{children:`source`}),`, the `,(0,f.jsx)(n.code,{children:`system`}),` (`,(0,f.jsx)(n.code,{children:`null`}),` for the manifest), the half-open `,(0,f.jsx)(n.code,{children:`start`}),` and `,(0,f.jsx)(n.code,{children:`stop`}),` (and
`,(0,f.jsx)(n.code,{children:`row_start`}),`, `,(0,f.jsx)(n.code,{children:`row_stop`}),` for an alignment), the `,(0,f.jsx)(n.code,{children:`level`}),` (`,(0,f.jsx)(n.code,{children:`-1`}),`: the data itself), `,(0,f.jsx)(n.code,{children:`labels`}),` (row labels only) and the
`,(0,f.jsx)(n.code,{children:`priority`}),` (`,(0,f.jsx)(n.code,{children:`view`}),`, `,(0,f.jsx)(n.code,{children:`margin`}),`, `,(0,f.jsx)(n.code,{children:`prefetch`}),`). Its exact shape is in the spec's sources part
(`,(0,f.jsx)(n.code,{children:`packages/sequences/_spec/sources.md`}),`, "Requests").`]}),`
`,(0,f.jsxs)(n.p,{children:[`Always in the source's coordinate system, quantized by the viewer: a region is 256 bins of a level, or 4,096
positions of the data (level -1), in one system; an alignment's, one 256 × 256 tile of a `,(0,f.jsx)(n.code,{children:`[2^ly, 2^lx]`}),` level the
manifest lists. `,(0,f.jsx)(n.code,{children:`priority`}),` lets a provider order or skip what it is sent.`]}),`
`,(0,f.jsxs)(n.p,{children:[(0,f.jsx)(n.strong,{children:`Through a path.`}),` Streamed `,(0,f.jsx)(n.code,{children:`items`}),` and `,(0,f.jsx)(n.code,{children:`values`}),` reach a block their system reaches only through a path: a genome's
genes, variants and scores on a protein's block, by its `,(0,f.jsx)(n.code,{children:`codon`}),` mapping; a column statistic on a chain, by its row. The
view's residues are taken back through the path to the runs of the source's system that code them (its exons), and
only the regions those reach are asked, never the introns between them. Read back, an item is drawn as its parts on
the block (an exon's coding part, a variant on its residue), hovered and selected as their hull; a value over a
residue covers its codon's three positions (a codon split by an intron, both parts). The path holds only its
stretches, so a protein's path through a 250 Mb chromosome is the size of its CDS. `,(0,f.jsx)(n.a,{href:`?path=/story/seq-streaming-streamed-data--through-a-path`,children:`A protein on its
genome`}),` shows it beside the gene's own section. A genome's
letters are not drawn on a protein's axis (a residue's three bases in its cell is a planned codon track); the copies
of a merged block reached each by its own path are not placed (`,(0,f.jsx)(n.code,{children:`svs.layer.streamed_merged`}),`).`]}),`
`,(0,f.jsx)(n.h3,{id:`data-patches`,children:`Data patches`}),`
`,(0,f.jsxs)(n.p,{children:[`A patch names what it fills (`,(0,f.jsx)(n.code,{children:`source`}),`, `,(0,f.jsx)(n.code,{children:`system`}),`, `,(0,f.jsx)(n.code,{children:`start`}),`, `,(0,f.jsx)(n.code,{children:`stop`}),`, `,(0,f.jsx)(n.code,{children:`row_start`}),`, `,(0,f.jsx)(n.code,{children:`row_stop`}),`, `,(0,f.jsx)(n.code,{children:`level`}),`) and a `,(0,f.jsx)(n.code,{children:`kind`}),`:`]}),`
`,(0,f.jsxs)(n.table,{children:[(0,f.jsx)(n.thead,{children:(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.th,{children:(0,f.jsx)(n.code,{children:`kind`})}),(0,f.jsx)(n.th,{children:`Answers`}),(0,f.jsx)(n.th,{children:`Holds`})]})}),(0,f.jsxs)(n.tbody,{children:[(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`manifest`})}),(0,f.jsx)(n.td,{children:`the first request`}),(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`manifest`})})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`items`})}),(0,f.jsxs)(n.td,{children:[`level -1 of `,(0,f.jsx)(n.code,{children:`items`}),` and `,(0,f.jsx)(n.code,{children:`values`})]}),(0,f.jsxs)(n.td,{children:[(0,f.jsx)(n.code,{children:`items`}),`, a table in the columns form: a `,(0,f.jsx)(n.code,{children:`ranges`}),` table's columns (`,(0,f.jsx)(n.code,{children:`start`}),`, `,(0,f.jsx)(n.code,{children:`stop`}),`, `,(0,f.jsx)(n.code,{children:`id`}),`, `,(0,f.jsx)(n.code,{children:`category`}),`, `,(0,f.jsx)(n.code,{children:`label`}),`, fields); for `,(0,f.jsx)(n.code,{children:`values`}),`, a dense `,(0,f.jsx)(n.code,{children:`value`}),` column, one per position`]})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`bins`})}),(0,f.jsx)(n.td,{children:`a level`}),(0,f.jsxs)(n.td,{children:[`one row per bin: `,(0,f.jsx)(n.code,{children:`values`}),` `,(0,f.jsx)(n.code,{children:`min`}),`, `,(0,f.jsx)(n.code,{children:`max`}),`, `,(0,f.jsx)(n.code,{children:`mean`}),`; `,(0,f.jsx)(n.code,{children:`items`}),` `,(0,f.jsx)(n.code,{children:`count`}),` (and optionally `,(0,f.jsx)(n.code,{children:`counts`}),` per vocabulary value); `,(0,f.jsx)(n.code,{children:`letters`}),` and `,(0,f.jsx)(n.code,{children:`alignment`}),` `,(0,f.jsx)(n.code,{children:`class`}),` and `,(0,f.jsx)(n.code,{children:`share`})]})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`letters`})}),(0,f.jsxs)(n.td,{children:[`level -1 of `,(0,f.jsx)(n.code,{children:`letters`})]}),(0,f.jsxs)(n.td,{children:[`the region's one-letter codes, a string of `,(0,f.jsx)(n.code,{children:`stop − start`})]})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`rows`})}),(0,f.jsxs)(n.td,{children:[`level -1 of `,(0,f.jsx)(n.code,{children:`alignment`})]}),(0,f.jsxs)(n.td,{children:[(0,f.jsx)(n.code,{children:`labels`}),`, one per row; `,(0,f.jsx)(n.code,{children:`rows`}),`, each row whole as a gapped string, or `,(0,f.jsx)(n.code,{children:`null`}),` for labels only`]})]})]})]}),`
`,(0,f.jsxs)(n.p,{children:[`Patches are data in JSON base types (typed columns allowed: `,(0,f.jsx)(n.code,{children:`share`}),` as a `,(0,f.jsx)(n.code,{children:`Uint8Array`}),`), idempotent (a patch for a
region held changes nothing), and may arrive in any order. A region is `,(0,f.jsx)(n.strong,{children:`pending`}),` until its patch fills it, then
`,(0,f.jsx)(n.strong,{children:`loaded`}),`, `,(0,f.jsx)(n.strong,{children:`empty`}),` (loaded, no rows) or `,(0,f.jsx)(n.strong,{children:`failed`}),`; a pending region is never drawn or hit as empty. Patches are
never document: they reach no patch, snapshot, history or download.`]}),`
`,(0,f.jsx)(n.h3,{id:`the-provider`,children:`The provider`}),`
`,(0,f.jsxs)(n.p,{children:[`The host's port: `,(0,f.jsx)(n.code,{children:`loaders.stream(source)`}),` returns a provider for a source, or `,(0,f.jsx)(n.code,{children:`null`}),`. One method answers every
request, the manifest first:`]}),`
`,(0,f.jsx)(s,{code:l}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:(0,f.jsx)(n.code,{children:`StreamNotServed`})}),`: the provider does not serve this resource (a chromosome it lacks, a statistic its server has
not computed). Reported once, never retried; for a manifest, the source is unavailable rather than failed.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Any other rejection`}),` is a failure: reported once per outage (`,(0,f.jsx)(n.code,{children:`svs.stream.load`}),`, a warning, naming the source and the
region), retried at 1, 2 and 4 s, then after a 30 s cooldown when next needed.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Aborts.`}),` The viewer aborts what an older view asked for and no view has needed for `,(0,f.jsx)(n.code,{children:`Stream.CancelGraceMs`}),` (a
jump, a fast pan; at once when its slot is wanted, the longest unneeded first), so a pan jittering across a region's
edge keeps it in flight; and everything when the layer leaves or the context is disposed. Stop the work and reject with `,(0,f.jsx)(n.code,{children:`signal.reason`}),`: an abort
is neither reported nor retried.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Its own caches, batching, auth and endpoints are the provider's.`}),` The viewer holds only what drawing needs.`]}),`
`]}),`
`,(0,f.jsx)(n.h2,{id:`what-the-viewer-does-for-you`,children:`What the viewer does for you`}),`
`,(0,f.jsxs)(n.p,{children:[`The stream manager, `,(0,f.jsx)(n.code,{children:`ctx.streams`}),`, runs once a frame from the viewport and layout versions, never from draws, so it
loads headlessly too. Its passes run on animation frames: in a hidden tab (or a hidden pane) no frame fires, and
nothing more is asked until one does.`]}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`The order.`}),` Per block in view: the coarsest level wherever the view is not at it, so the first frame is fast;
then the view's level, from the center out; then a margin of `,(0,f.jsx)(n.code,{children:`Stream.Margin`}),` view widths each side
(`,(0,f.jsx)(n.code,{children:`priority: "margin"`}),`). An alignment adds its vertical overview and the row labels in view; a miniature (the
`,(0,f.jsx)(n.code,{children:`strip`}),` or `,(0,f.jsx)(n.code,{children:`band`}),` navigator, a `,(0,f.jsx)(n.code,{children:`seqv:map`}),` layer) adds each block whole at about a map pixel's level, before the
margin. A region held or in
flight is never asked twice; at most `,(0,f.jsx)(n.code,{children:`Stream.MaxInFlight`}),` are in flight.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Levels.`}),` A `,(0,f.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#view-section-and-block`,children:`block`}),`'s level is the coarsest listed
whose bin is at most the positions a device pixel holds; finer than every level, the data (an alignment whose
manifest lists some levels: the coarsest listed no wider on either axis, else the nearest coarser). A draw reads the
view's level, else the next coarser one loaded, per device column: a region keeps its coarser data drawn while the
finer loads.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Letters.`}),` A `,(0,f.jsx)(n.code,{children:`letters`}),` stream's data is asked only where a device pixel holds at most `,(0,f.jsx)(n.code,{children:`Stream.LettersPerPx`}),`
(16) positions: a whole chromosome asks nothing, its `,(0,f.jsx)(n.code,{children:`state`}),` is `,(0,f.jsx)(n.code,{children:`empty`}),` there, and the track shows a hatched band
saying to zoom in. Inside, the regions of 4,096 letters
arrive like any data and are held as upper-case codes (a 2bit file's soft-masked lower case drawn upper case); the
`,(0,f.jsx)(n.code,{children:`letters`}),` layer draws them as cells, thinner than a pixel read per device column, and as letters once a position
is wide enough. A position not yet held draws nothing; hovering one names its letter once it is held. See
`,(0,f.jsx)(n.a,{href:`?path=/story/seq-streaming-streamed-data--letters`,children:`Streamed data`}),`. A manifest's levels for letters (`,(0,f.jsx)(n.code,{children:`class`}),` bins) are not
asked yet.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Items.`}),` An `,(0,f.jsx)(n.code,{children:`items`}),` stream feeds a `,(0,f.jsx)(n.code,{children:`ranges`}),`, `,(0,f.jsx)(n.code,{children:`points`}),` or `,(0,f.jsx)(n.code,{children:`variants`}),` layer: below its first level, regions of 65,536
positions of data, each patch turned into a feature table when it arrives (rows of one `,(0,f.jsx)(n.code,{children:`id`}),` are one item's
fragments, joined across their gaps; `,(0,f.jsx)(n.code,{children:`label`}),` and, for variants, `,(0,f.jsx)(n.code,{children:`alt`}),` read); above it, each region's `,(0,f.jsx)(n.code,{children:`count`}),` per bin,
drawn as density. An item keeps its lane across regions (while a held region holds it) and is drawn once, by the
first region in view that holds it. Items or density is one decision a frame, as for data in memory. A streamed item
is hovered like any (outlined, its label and fields in the tooltip), and a field theme reaches it: a `,(0,f.jsx)(n.code,{children:`field_palette`}),`
over `,(0,f.jsx)(n.code,{children:`category`}),` colors it in the order of the manifest's `,(0,f.jsx)(n.code,{children:`vocabulary`}),`. A value the vocabulary lacks, or a stream
that sends none, takes a list color by its hash (FNV-1a), the same in every region and reload; an item with no value
of the field (a stream without the column) has the missing color. The legend cannot list those, and the layer says
so once (`,(0,f.jsx)(n.code,{children:`svs.legend.unlisted`}),`).`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Prefetch`}),` (`,(0,f.jsx)(n.code,{children:`Stream.Prefetch`}),`, on by default). After the view's regions and the margin's, the viewer asks for what
the view is heading to, marked `,(0,f.jsx)(n.code,{children:`priority: "prefetch"`}),` so a provider may treat the request as a hint: a view width
past the margin on the side the view last panned toward (kept while it rests, moved when it pans back), the next
finer or coarser level where it zoomed, and the regions the snapshots next to the one shown focus on, so entering one
draws from the cache. A prefetch is never waited for; a view's region takes the slot of one when the in-flight bound
is full. The `,(0,f.jsx)(n.a,{href:`?path=/story/seq-streaming-prefetch--ahead`,children:`Prefetch story`}),` shows the request log beside the view.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Placeholders.`}),` A letters or items region asked and not yet arrived draws a quiet band in the pending
shade over its extent, replaced by the data in the frame it arrives (only its columns are redrawn).`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Progressive loading`}),`, on the overlay, so the cells are never redrawn for it. A region with nothing drawn in
its place (values and rows: no coarser level loaded either) is a `,(0,f.jsx)(n.strong,{children:`skeleton`}),`: the pending shade with a slow
shimmer, one sweep a second. A failed one is an `,(0,f.jsx)(n.strong,{children:`error band`}),`: tinted red, hatched, "failed to load" where it fits.
A region that just arrived `,(0,f.jsx)(n.strong,{children:`fades in`}),` over 150 ms, regions arriving together alike. Under reduced motion
(`,(0,f.jsx)(n.code,{children:`Viewport.ReducedMotion`}),`, or the page's `,(0,f.jsx)(n.code,{children:`prefers-reduced-motion`}),`) the shade holds still and nothing fades; an
export draws no motion either. The hover label says "loading…" over a pending region (and updates when it lands)
and "failed" over a failed one. Lazy rows take the same per tile.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Eviction.`}),` Past `,(0,f.jsx)(n.code,{children:`Stream.CacheBytes`}),` the least recently needed regions go, down to 7/8 of the bound in one sorted
sweep; the regions the current view needs are pinned. A lazy alignment's row labels count too, by their chunks of
rows (a label out of view reads none until a view asks its chunk again). A provider holds nothing on the viewer's
behalf.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:(0,f.jsx)(n.code,{children:`state(layer, block, index[, lane])`})}),` is the region's state there at the view's level: `,(0,f.jsx)(n.code,{children:`RegionState.pending`}),`,
`,(0,f.jsx)(n.code,{children:`loaded`}),`, `,(0,f.jsx)(n.code,{children:`empty`}),` or `,(0,f.jsx)(n.code,{children:`failed`}),` (outside the source: empty; on a block out of view: pending); a rows layer's at `,(0,f.jsx)(n.code,{children:`lane`}),`
(its own lane, from 0; by default the first in view).`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:(0,f.jsx)(n.code,{children:`settled()`})}),` resolves at the first pass that finds every region in view loaded, empty or failed at the level the
view needs (the margin aside); at once when no pass can run. Tests and exports await it.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:(0,f.jsx)(n.code,{children:`ctx.streams.stats`})}),`, a live record: `,(0,f.jsx)(n.code,{children:`requests`}),`, `,(0,f.jsx)(n.code,{children:`hits`}),`, `,(0,f.jsx)(n.code,{children:`inFlight`}),`, `,(0,f.jsx)(n.code,{children:`cancelled`}),`, `,(0,f.jsx)(n.code,{children:`coarse`}),` and `,(0,f.jsx)(n.code,{children:`fine`}),` arrivals,
`,(0,f.jsx)(n.code,{children:`bytes`}),` held, `,(0,f.jsx)(n.code,{children:`errors`}),`, and `,(0,f.jsx)(n.code,{children:`computed`}),` (an in-memory alignment's tiles). Read `,(0,f.jsx)(n.code,{children:`stats.current`}),` on
`,(0,f.jsx)(n.code,{children:`stats.version`}),`, as the example below does (`,(0,f.jsx)(n.code,{children:`useLiveVersion`}),` in React).`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Retry and Busy.`}),` A layer with a failed region (not `,(0,f.jsx)(n.code,{children:`StreamNotServed`}),`) gets `,(0,f.jsx)(n.strong,{children:`Retry`}),` in its track's "…" menu
(`,(0,f.jsx)(n.code,{children:`stream.retry`}),`: `,(0,f.jsx)(n.code,{children:`ctx.streams.retry(layer)`}),` ends the cooldown and asks again; `,(0,f.jsx)(n.code,{children:`hasFailed(layer)`}),` is its `,(0,f.jsx)(n.code,{children:`when`}),`);
the command `,(0,f.jsx)(n.code,{children:`seqv:retry`}),` does the same for a track (`,(0,f.jsx)(n.code,{children:`{"track": ref}`}),`), or for every track without one.
The `,(0,f.jsx)(n.strong,{children:`Busy`}),` part shows while requests are in flight, held 250 ms after the last so a pan does not flicker it, or
after 750 ms of graph work (`,(0,f.jsx)(n.code,{children:`Tasks.BusyDelayMs`}),`).`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Export.`}),` `,(0,f.jsx)(n.code,{children:`renderSvg(doc, …)`}),` sizes the sections at the export's width, runs its clock until `,(0,f.jsx)(n.code,{children:`settled()`}),`, then
draws. A live context passed in draws its regions as they stand: await `,(0,f.jsx)(n.code,{children:`ctx.streams.settled()`}),` first.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Per-region redraws.`}),` Each arrival, failure or eviction bumps the layer's `,(0,f.jsx)(n.code,{children:`StreamView.version`}),`; the composer
redraws only that layer's entries, and for an alignment only the columns of the tiles that changed
(`,(0,f.jsx)(n.code,{children:`StreamView.changed`}),`). A 1-D region redraws its layer's entries whole.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Never document.`}),` Regions live in a data layer under the document: `,(0,f.jsx)(n.code,{children:`base`}),`, `,(0,f.jsx)(n.code,{children:`shown`}),`, patches, undo and snapshots
never see them, and a theme or skin change keeps every region.`]}),`
`]}),`
`,(0,f.jsxs)(n.p,{children:[`The config items (`,(0,f.jsx)(n.code,{children:`SeqViewerConfig.Stream`}),`):`]}),`
`,(0,f.jsxs)(n.table,{children:[(0,f.jsx)(n.thead,{children:(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.th,{children:`Item`}),(0,f.jsx)(n.th,{children:`Default`}),(0,f.jsx)(n.th,{})]})}),(0,f.jsxs)(n.tbody,{children:[(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`Stream.CacheBytes`})}),(0,f.jsx)(n.td,{children:`128 MiB`}),(0,f.jsx)(n.td,{children:`the cache's bound`})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`Stream.MaxInFlight`})}),(0,f.jsx)(n.td,{children:`6`}),(0,f.jsx)(n.td,{children:`requests at once`})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`Stream.CancelGraceMs`})}),(0,f.jsx)(n.td,{children:`250`}),(0,f.jsx)(n.td,{children:`ms a request no view needs stays in flight; 0: aborted at once`})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`Stream.Margin`})}),(0,f.jsx)(n.td,{children:`1`}),(0,f.jsx)(n.td,{children:`view widths asked beyond each side; 0: none`})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`Stream.SampleBudget`})}),(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`null`})}),(0,f.jsxs)(n.td,{children:[`an alignment's samples a view at most, where its source lists a level that coarse; `,(0,f.jsx)(n.code,{children:`null`}),`: one a device pixel`]})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`Stream.LettersPerPx`})}),(0,f.jsx)(n.td,{children:`16`}),(0,f.jsx)(n.td,{children:`a letters stream is asked only where a device pixel holds at most this many positions`})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`Stream.RegionBytes`})}),(0,f.jsx)(n.td,{children:`1 MiB`}),(0,f.jsxs)(n.td,{children:[`a data request's bound on what its provider reads (`,(0,f.jsx)(n.code,{children:`max_bytes`}),`); past it the provider answers with counts`]})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`Stream.ShimmerFps`})}),(0,f.jsx)(n.td,{children:`30`}),(0,f.jsx)(n.td,{children:`frames a second of a pending region's shimmer; 0: a still band`})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`Stream.Prefetch`})}),(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`true`})}),(0,f.jsx)(n.td,{children:`request ahead: a view width past the margin on the side last panned toward, a zoom's next level, the regions of the neighboring snapshots`})]})]})]}),`
`,(0,f.jsx)(n.h2,{id:`writing-a-provider`,children:`Writing a provider`}),`
`,(0,f.jsxs)(n.p,{children:[`A minimal one is a values source made up on demand (the bench's kind): a provider that holds nothing, answers after a
delay and stops on an abort, the host's loaders, and a document that streams through them. The
`,(0,f.jsx)(n.a,{href:`?path=/story/seq-streaming-streamed-data--letters`,children:`Streamed data`}),` stories run providers live
(`,(0,f.jsx)(n.a,{href:`?path=/story/seq-streaming-streamed-data--lazy-alignment`,children:`Lazy alignment`}),` is a streamed alignment), and the
`,(0,f.jsx)(n.a,{href:`?path=/story/seq-streaming-prefetch--ahead`,children:`Prefetch`}),` story logs the requests.`]}),`
`,(0,f.jsxs)(n.p,{children:[(0,f.jsx)(n.strong,{children:(0,f.jsx)(n.code,{children:`@molstar/seq-core/stream/tiles`})}),` is the reference provider, for alignments: the `,(0,f.jsx)(n.code,{children:`seqstar-tiles/1`}),` protocol the first
viewer spoke, outside the core (nothing in the format, the model or the viewer names it). A source is
`,(0,f.jsx)(n.code,{children:`{ protocol: "seqstar-tiles/1", uri }`}),`, and the host's `,(0,f.jsx)(n.code,{children:`loaders.stream`}),` is `,(0,f.jsx)(n.code,{children:`tilesStream(open)`}),`: a provider over the
transport `,(0,f.jsx)(n.code,{children:`open(uri)`}),` gives (HTTP GET under the `,(0,f.jsx)(n.code,{children:`uri`}),` by default; `,(0,f.jsx)(n.code,{children:`null`}),`: not served here), and `,(0,f.jsx)(n.code,{children:`null`}),` for any other
source. With no manifest of its own, it builds one from what the readers declare (`,(0,f.jsx)(n.code,{children:`StreamSource.declared`}),`: an
alignment's `,(0,f.jsx)(n.code,{children:`row_count`}),` and `,(0,f.jsx)(n.code,{children:`column_count`}),`, an annotation's `,(0,f.jsx)(n.code,{children:`length`}),` and `,(0,f.jsx)(n.code,{children:`target`}),`). It serves an alignment's tiles
(`,(0,f.jsx)(n.code,{children:`class`}),` and `,(0,f.jsx)(n.code,{children:`share`}),` bins at every `,(0,f.jsx)(n.code,{children:`[2^ly, 2^lx]`}),`), its rows and labels, `,(0,f.jsx)(n.code,{children:`values`}),` and `,(0,f.jsx)(n.code,{children:`items`}),` annotations over its
columns, and column statistics (`,(0,f.jsx)(n.code,{children:`stats/<measure>`}),`; a server without one makes the statistic unavailable). The host
passes `,(0,f.jsx)(n.code,{children:`tilesStream()`}),` (HTTP GET under each source's `,(0,f.jsx)(n.code,{children:`uri`}),`) or `,(0,f.jsx)(n.code,{children:`tilesStream((uri) => transport | null)`}),` as
`,(0,f.jsx)(n.code,{children:`loaders.stream`}),`, and declares the alignment's shape in the document (`,(0,f.jsx)(n.code,{children:`row_count`}),`, `,(0,f.jsx)(n.code,{children:`column_count`}),`, and a
`,(0,f.jsx)(n.code,{children:`{ protocol: "seqstar-tiles/1", uri }`}),` source).`]}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`The client`}),` (`,(0,f.jsx)(n.code,{children:`tileClient`}),`, `,(0,f.jsx)(n.code,{children:`fetchTransport`}),`, `,(0,f.jsx)(n.code,{children:`NotServed`}),`, which extends `,(0,f.jsx)(n.code,{children:`StreamNotServed`}),`): each call asks the
transport once; 404 and 410 are not served, anything else a failure.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`The reference server`}),` (`,(0,f.jsx)(n.code,{children:`@molstar/seq-core/stream/tiles/server`}),`, `,(0,f.jsx)(n.code,{children:`tileServer`}),`): in process, every request in `,(0,f.jsx)(n.code,{children:`calls`}),`. A
cell is a hash of its place and a tile is made when asked, so it holds nothing: a million rows by 320 columns cost
what a tile costs.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Case 9`}),` loads through it (`,(0,f.jsx)(n.a,{href:`?path=/story/seq-cases-viewer--case-9`,children:`the viewer`}),`,
`,(0,f.jsx)(n.a,{href:`?path=/story/seq-cases-nightingale--case-9`,children:`Nightingale`}),`), its conservation track from the server's `,(0,f.jsx)(n.code,{children:`stats`}),`.`]}),`
`]}),`
`,(0,f.jsxs)(n.p,{children:[(0,f.jsx)(n.strong,{children:(0,f.jsx)(n.code,{children:`@molstar/seq-core/stream/gmod`})}),` serves indexed genome files over byte-range reads, a reader to a format: `,(0,f.jsx)(n.code,{children:`twoBitProvider`}),`
(`,(0,f.jsx)(n.code,{children:`letters`}),`: a system per sequence, N blocks and soft masking handled, a sequence's block lists searched on disk),
`,(0,f.jsx)(n.code,{children:`bigWigProvider`}),` (`,(0,f.jsx)(n.code,{children:`values`}),`: the file's zoom reductions are the manifest's `,(0,f.jsx)(n.code,{children:`levels`}),`, the zoom records resampled onto the
request's bins, level -1 the data), `,(0,f.jsx)(n.code,{children:`bigBedProvider`}),` and `,(0,f.jsx)(n.code,{children:`vcfProvider`}),` (`,(0,f.jsx)(n.code,{children:`items`}),`: a row per BED item, per block of a BED12,
per ALT allele). A transport is `,(0,f.jsx)(n.code,{children:`read(offset, length, signal)`}),`: `,(0,f.jsx)(n.code,{children:`fetchRanges(url)`}),` over HTTP `,(0,f.jsx)(n.code,{children:`Range`}),`, or recorded bytes
in the tests; `,(0,f.jsx)(n.code,{children:`gmodStream(open)`}),` is a host's `,(0,f.jsx)(n.code,{children:`loaders.stream`}),`. The package's README keeps the format gotchas (byte order,
zoom-level choice, BGZF blocks, tabix bins, 0- and 1-based coordinates).`]}),`
`,(0,f.jsxs)(n.p,{children:[(0,f.jsx)(n.strong,{children:`Never a whole chromosome of items.`}),` Zoomed out, a BigBed's counts come from its zoom records and a VCF's are
estimated from its tabix index (`,(0,f.jsx)(n.code,{children:`estimate: true`}),`): neither reads an item. A data request carries `,(0,f.jsx)(n.code,{children:`max_bytes`}),`
(`,(0,f.jsx)(n.code,{children:`Stream.RegionBytes`}),`, 1 MB); past it, or past 2,000 items (a VCF decides from its index, before reading), the provider
answers with counts (the zoom gate): the track draws them as density and says "zoom in to see variants, or click to
load them", a click loading what is in view of that region (`,(0,f.jsx)(n.code,{children:`force`}),`, in regions of 4,096); once a device pixel holds 64
positions or fewer, the region's part in view is asked in regions of 4,096 anyway. A VCF's estimate of its items counts
a record at the compressed bytes the file's own first data blocks show. Letters are asked only inside the letters gate. A file's chromosome names
become the document's through `,(0,f.jsx)(n.code,{children:`renamed`}),` (`,(0,f.jsx)(n.code,{children:`chrNames`}),`: ClinVar's `,(0,f.jsx)(n.code,{children:`1`}),` and `,(0,f.jsx)(n.code,{children:`MT`}),` as `,(0,f.jsx)(n.code,{children:`chr1`}),` and `,(0,f.jsx)(n.code,{children:`chrM`}),`). See
`,(0,f.jsx)(n.a,{href:`?path=/story/seq-cases-genome-browser--live`,children:`the genome browser demo`}),`: hg38 read live from UCSC's and NCBI's files.`]}),`
`,(0,f.jsx)(n.h2,{id:`dynamic-nodes-nested-sources-and-templates`,children:`Dynamic nodes, nested sources and templates`}),`
`,(0,f.jsxs)(n.p,{children:[(0,f.jsx)(n.strong,{children:`Dynamic nodes.`}),` A manifest or a patch may carry `,(0,f.jsx)(n.code,{children:`nodes`}),`
(`,(0,f.jsx)(n.code,{children:`{ kind, key, params }`}),`: sequences, ligands, units, mappings, annotations, and nested sources), which join the data
set, never the document, its patches, history or downloads. `,(0,f.jsx)(n.a,{href:`?path=/story/seq-streaming-streamed-data--first-part`,children:`Dynamic nodes: manifest, patch and eviction`}),`
shows a manifest's genes, peaks arriving with their regions as you zoom in, and eviction under a small cache. A patch
carries its nodes as `,(0,f.jsx)(n.code,{children:`{ kind, key, params }`}),` entries beside its data; the spec's sources part
(`,(0,f.jsx)(n.code,{children:`packages/sequences/_spec/sources.md`}),`) has the shapes.`]}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Their ref`}),` is derived, `,(0,f.jsx)(n.code,{children:`<source>/<key>`}),`; a node is keyed by (source, key). The same key again with equal params is
a no-op; with other params `,(0,f.jsx)(n.code,{children:`svs.stream.conflict`}),` (a warning), the held one kept.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Checked as document nodes`}),` of their kind: the same param checks, the key a ref suffix; their refs name the
document's nodes, the set's keys, held dynamic nodes or the same patch's. A bad node is left out with its issue
(`,(0,f.jsx)(n.code,{children:`svs.params.*`}),`, `,(0,f.jsx)(n.code,{children:`svs.stream.ref`}),`), at `,(0,f.jsx)(n.code,{children:`/nodes/<key>`}),`, its message naming the source.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Named before they arrive.`}),` A derived ref of a streamed source is valid in a document (and in a data-mode view
over data that reads one). A layer whose data names only nodes not held is pending, never `,(0,f.jsx)(n.code,{children:`svs.layer.unplaced`}),`, and
a track whose every layer is pending is hidden until one arrives.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Held, then evicted.`}),` A patch's nodes are carried by its region; a shown track's data, the blocks' units, the
selection, a highlight and a held node that names one hold them too. They count in `,(0,f.jsx)(n.code,{children:`Stream.CacheBytes`}),`, and when the
region that brought a node leaves and nothing else holds it, it is evicted, quietly, with the nodes it named that
nothing else holds. A manifest's nodes stay while their source does. A template's instances and the hover hold
nothing (below); a snapshot holds through the document it applies.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Stable ids.`}),` A node evicted and back (its region asked again) gets its old id, so a selection or a location
naming it rebinds.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`At stream rate.`}),` Node changes reach the set once a frame (`,(0,f.jsx)(n.code,{children:`#assemble.stream`}),`), never once a patch, and an update
costs its changes, not the set's size: a node no section, layer or template reads reruns only `,(0,f.jsx)(n.code,{children:`#assemble.stream`}),`
(about 2 ms over 10,000 held).`]}),`
`]}),`
`,(0,f.jsxs)(n.p,{children:[(0,f.jsx)(n.strong,{children:`Nested sources.`}),` A `,(0,f.jsx)(n.code,{children:`source`}),` node in a manifest or a patch is a streamed source of its own, under its
parent's ref (`,(0,f.jsx)(n.code,{children:`genes/G1/tx`}),`; its `,(0,f.jsx)(n.code,{children:`StreamSource.parent`}),` names the parent), with a manifest that may add nodes the same
way. It streams (`,(0,f.jsx)(n.code,{children:`stream`}),` or `,(0,f.jsx)(n.code,{children:`protocol`}),`, and `,(0,f.jsx)(n.code,{children:`data_kind`}),`, since nothing in the patch is read to infer it), and is
asked for only when something needs its data: a template whose nodes it holds, a document ref under it, or a held node
that reads it (`,(0,f.jsx)(n.code,{children:`source_ref`}),`: a dynamic annotation over a nested `,(0,f.jsx)(n.code,{children:`items`}),` or `,(0,f.jsx)(n.code,{children:`values`}),` source is streamed like any). A
source deeper than its chain's `,(0,f.jsx)(n.code,{children:`max_depth`}),` (the document's source is level 1) is `,(0,f.jsx)(n.code,{children:`svs.stream.depth`}),` and never asked.`]}),`
`,(0,f.jsxs)(n.p,{children:[(0,f.jsx)(n.strong,{children:`Track templates.`}),` A track with `,(0,f.jsx)(n.code,{children:`for_each`}),` stands for one track per dynamic node it
selects: `,(0,f.jsx)(n.code,{children:`kind`}),`, the `,(0,f.jsx)(n.code,{children:`source`}),` they come from (a nested one's ref too), `,(0,f.jsx)(n.code,{children:`depth`}),` (0 its own nodes, 1 those of the
sources it nests, …; `,(0,f.jsx)(n.code,{children:`null`}),` any), and `,(0,f.jsx)(n.code,{children:`reaching`}),` (`,(0,f.jsx)(n.code,{children:`true`}),`: an instance that places nothing on the section's blocks is
left out). Its layers are written once, `,(0,f.jsx)(n.code,{children:`"$node"`}),` standing for the node (`,(0,f.jsx)(n.code,{children:`svs.ref.syntax`}),` anywhere else). Instances
are at the template's place, in key order, each labeled by its node unless the track gives a label; an instance's ref
is `,(0,f.jsx)(n.code,{children:`<track>/<node>`}),`, its layers' `,(0,f.jsx)(n.code,{children:`<layer>/<node>`}),`. `,(0,f.jsx)(n.a,{href:`?path=/story/seq-streaming-streamed-data--second-part`,children:`Dynamic nodes: templates and nested
sources`}),` shows a track per gene, per transcript and per domain, two
sources deep. A template is a track with `,(0,f.jsx)(n.code,{children:`for_each: { kind, source, depth }`}),` whose layers name `,(0,f.jsx)(n.code,{children:`"$node"`}),` as their data.`]}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`An arrival reruns what the template covers`}),`: its `,(0,f.jsx)(n.code,{children:`#template`}),` node and the view, nothing else; every other
instance keeps its resolved layer and prepared state. About 6 ms an arrival at 1,000 instances over 10,000 held.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Instances hold nothing.`}),` They show what manifests and regions carry, so a template over a streamed source stays
under `,(0,f.jsx)(n.code,{children:`Stream.CacheBytes`}),`: an instance leaves with its region. A document track naming the same node holds it.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Order`}),` is key order by default; `,(0,f.jsx)(n.code,{children:`order`}),` and `,(0,f.jsx)(n.code,{children:`filter`}),` over a `,(0,f.jsx)(n.code,{children:`rows`}),` annotation keyed by `,(0,f.jsx)(n.code,{children:`node`}),` (keyed sets) sort and
drop instances the same way a `,(0,f.jsx)(n.code,{children:`rows`}),` layer's do.`]}),`
`]}),`
`,(0,f.jsx)(n.h2,{id:`limits-and-gotchas`,children:`Limits and gotchas`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Nightingale does not stream.`}),` Its fallback fetches a streamed `,(0,f.jsx)(n.code,{children:`values`}),` layer once, at the finest level whose bins
are at least a pixel wide, and reports `,(0,f.jsx)(n.code,{children:`svs.stream.fallback`}),`; streamed items, letters, rows beyond the reference
row and values placed through a path are reported and left empty. It holds no dynamic nodes either: a template there shows the instances its set
holds, which is none unless the host put them in.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`The margin applies to streamed alignments too`}),`: a ring of the view's level around the view's tiles, in both
axes, never counted by `,(0,f.jsx)(n.code,{children:`settled()`}),`. An alignment in memory takes none (its tiles are computed when a view needs
them). `,(0,f.jsx)(n.code,{children:`Stream.Margin`}),` 0 turns it off for both.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Letters are placed directly`}),`: a lazy molecule's letters are its own blocks'. Streamed `,(0,f.jsx)(n.code,{children:`items`}),` and `,(0,f.jsx)(n.code,{children:`values`}),` reach
any block their system reaches through a path (above, "Through a path").`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsxs)(n.strong,{children:[`Values and items from `,(0,f.jsx)(n.code,{children:`seqstar-tiles/1`}),` are bins only`]}),`: a data request is answered with level 0's bins, one per
position.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`A streamed item is a range on its unit`}),` for the hover, the selection and highlights: hovering one lights its
extent across the section, a click selects it; it has no row in the set, so a locus naming the item (its id) does not
reach it. Color and glyph themes over a field reach it.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Lanes are capped`}),` at the track's height (12 px a lane at least): a gene with dozens of transcripts leaves the
lanes past it undrawn and says "more lanes than fit: raise the track's height". A `,(0,f.jsx)(n.code,{children:`ranges`}),` layer with `,(0,f.jsx)(n.code,{children:`collapse: "<field>"`}),` (the genome browser's genes: `,(0,f.jsx)(n.code,{children:`collapse: "label"`}),`) draws one lane a gene instead, its transcripts folded,
while its lanes would not fit; the track menu's "Expand rows" shows every transcript.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`A value outside the manifest's vocabulary`}),` takes the palette's missing color: a streamed item has no row to read
before it arrives.`]}),`
`]})]})}function d(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=r(),a(),n(),o(),c()})))()}p();export{d as default};