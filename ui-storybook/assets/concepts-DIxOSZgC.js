import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t,u as n}from"./blocks-DB-FaXqI.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{i,r as a}from"./react-Dyi61YEg.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`Seq*/Docs/Concepts`}),`
`,(0,c.jsx)(n.h1,{id:`concepts`,children:`Concepts`}),`
`,(0,c.jsxs)(n.p,{children:[`The words the other pages use, in plain language, from the data up to what is drawn. One example
runs through the page: `,(0,c.jsx)(n.strong,{children:`barnase–barstar`}),`, the PDB entry 1BRS (`,(0,c.jsx)(n.a,{href:`?path=/story/seq-cases-viewer--case-7`,children:`case 7`}),`).
Barnase is a ribonuclease; barstar is its inhibitor; the crystal holds three barnase–barstar pairs,
barnase as chains A, B and C and barstar as chains D, E and F.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:` DATA: what is true             COORDINATE SYSTEMS: how it is numbered        VIEW: what is shown
 ─────────────────────          ──────────────────────────────────────        ──────────────────────────
 molecule  barnase (P00648) ──► molecule system  0 … 156                      view "Complex"
                                      │ coordinate map: [47,157) → [0,110)      section: one axis
 molecule  1brs entity 1    ──► molecule system  0 … 109                          block A (+ B, C as copies)
 units     chains A, B, C   ──► unit systems     0 … 109, one each   ──────►      block D (+ E, F)
 complex   1brs             ──► complex system: A … F, in order        layout     track "Residues"
 alignment barnase family   ──► a row system per row ──► columns       map          layer letters
 annotation features, contacts, effects: items in their target systems              track "Contacts"
                                                                                      layer pairs
`})}),`
`,(0,c.jsx)(n.h2,{id:`the-data`,children:`The data`}),`
`,(0,c.jsx)(n.h3,{id:`molecule`,children:`Molecule`}),`
`,(0,c.jsxs)(n.p,{children:[`A sequence of letters with an identity: barnase, the 157 residues of UniProt P00648 (with its
signal peptide and propeptide), or the 110 residues of entity 1 in the 1BRS file (the mature
enzyme). In a document a molecule is a `,(0,c.jsx)(n.code,{children:`sequence`}),` node (or a `,(0,c.jsx)(n.code,{children:`ligand`}),`, whose positions are its heavy
atoms); its letters are given by value or read from a source.`]}),`
`,(0,c.jsx)(n.h3,{id:`unit`,children:`Unit`}),`
`,(0,c.jsxs)(n.p,{children:[`One occurrence of a molecule: a chain in a structure, a pose of a ligand, a construct's insert.
Chains A, B and C are three units over the same molecule, barnase's entity 1. Units and molecules
differ because data belongs to one or the other: a sequence and its UniProt features are the
molecule's, while what a structure observed (the residues it resolved, contacts, secondary
structure) belongs to one chain. A unit may cover a `,(0,c.jsx)(n.code,{children:`range`}),` of its molecule. Units over one molecule
with an equal range are `,(0,c.jsx)(n.strong,{children:`copies`}),` of each other; a section may show one block per copy group
(`,(0,c.jsx)(n.code,{children:`copies: "one"`}),`) or one per unit (`,(0,c.jsx)(n.code,{children:`"each"`}),`). Chain A's data never lands on chain B. Every
`,(0,c.jsx)(n.code,{children:`sequence`}),` node also has its own unit, `,(0,c.jsx)(n.code,{children:`<ref>/unit`}),`, so a molecule shown on its own behaves as any
unit.`]}),`
`,(0,c.jsx)(n.h3,{id:`complex`,children:`Complex`}),`
`,(0,c.jsxs)(n.p,{children:[`A set of units shown together: `,(0,c.jsx)(n.code,{children:`1brs`}),` holds A to F, in order. It is written by value, or comes from
a registered complex provider (case 7's `,(0,c.jsx)(n.code,{children:`molstar:structure`}),` reads the PDB file). A Mol* structure
corresponds to a complex, its chains to units.`]}),`
`,(0,c.jsx)(n.h3,{id:`alignment-rows-and-columns`,children:`Alignment, rows and columns`}),`
`,(0,c.jsxs)(n.p,{children:[`An alignment is a table of gapped rows. A `,(0,c.jsx)(n.strong,{children:`row`}),` is one aligned sequence; its own residues are
numbered without the gaps. A `,(0,c.jsx)(n.strong,{children:`column`}),` is one position across all rows. A family alignment of
barnase homologs would put barnase in one row; then barnase's residue 0 is in some column, and a
column holds a residue of each row or a gap. Cases `,(0,c.jsx)(n.a,{href:`?path=/story/seq-cases-viewer--case-3`,children:`3`}),` and
`,(0,c.jsx)(n.a,{href:`?path=/story/seq-cases-viewer--case-9`,children:`9`}),` show real families. An alignment may carry a `,(0,c.jsx)(n.strong,{children:`tree`}),` over
its rows: given as Newick, or computed from the alignment's distances by a `,(0,c.jsx)(n.strong,{children:`node provider`}),` (`,(0,c.jsx)(n.code,{children:`nj`}),` or `,(0,c.jsx)(n.code,{children:`upgma`}),`); an alignment or a set of row mappings can be computed by one too (`,(0,c.jsx)(n.code,{children:`realign`}),`, `,(0,c.jsx)(n.code,{children:`codon_rows`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`position-and-index-label-and-numbering`,children:`Position and index, label and numbering`}),`
`,(0,c.jsxs)(n.p,{children:[`A `,(0,c.jsx)(n.strong,{children:`position`}),` is one element of a molecule, a unit, a row or the columns: a residue, a nucleotide,
an atom, a column. Its `,(0,c.jsx)(n.strong,{children:`index`}),` is its number from 0, and a range of indices is half-open: `,(0,c.jsx)(n.code,{children:`start: 4, stop: 9`}),` is indices 4 to 8. Indices are what the format, the API and tools use.`]}),`
`,(0,c.jsxs)(n.p,{children:[`A `,(0,c.jsx)(n.strong,{children:`label`}),` is what a person and a ruler say, in a `,(0,c.jsx)(n.strong,{children:`numbering`}),`. In 1BRS, barnase's index 0 is
label 1 in the structure's author numbering and label 48 in UniProt's, since the mature enzyme
starts at UniProt residue 48. UniProt's active site His149 is index 101 of entity 1 and His102 in
the structure's numbering. Labels may carry insertion codes: Kabat's `,(0,c.jsx)(n.code,{children:`35A`}),` and `,(0,c.jsx)(n.code,{children:`35B`}),` sit between 35
and 36 (`,(0,c.jsx)(n.a,{href:`?path=/story/seq-cases-viewer--case-2`,children:`case 2`}),`). A table may give the code in a column of its own
(`,(0,c.jsx)(n.code,{children:`ins_code`}),` beside `,(0,c.jsx)(n.code,{children:`pos`}),` or `,(0,c.jsx)(n.code,{children:`beg`}),`, as a CIF category's `,(0,c.jsx)(n.code,{children:`pdbx_PDB_ins_code`}),` beside `,(0,c.jsx)(n.code,{children:`auth_seq_id`}),`). Label ranges
are inclusive (`,(0,c.jsx)(n.code,{children:`beg`}),`, `,(0,c.jsx)(n.code,{children:`end`}),`); a document converts labels to indices once, at load.`]}),`
`,(0,c.jsx)(n.h3,{id:`annotation-and-item`,children:`Annotation and item`}),`
`,(0,c.jsxs)(n.p,{children:[`An `,(0,c.jsx)(n.strong,{children:`annotation`}),` is a table of `,(0,c.jsx)(n.strong,{children:`items`}),` over a target. Its `,(0,c.jsx)(n.code,{children:`geometry`}),` says what an item is:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`ranges`}),`: features over runs of positions, such as UniProt's signal peptide or a helix, and
`,(0,c.jsx)(n.strong,{children:`points`}),` when a range is one position (the active sites);`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`pairs`}),`: two positions, such as the contacts between chain A and chain D;`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`values`}),`: a number per position, such as hydropathy;`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`matrix`}),`: a value per position and state, such as the effect of each of 20 amino acids at
each barnase position;`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`rows`}),`: a value per alignment row, such as each member's species, shown as a data column.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`An item may have several fragments (a transcript's exons) and an `,(0,c.jsx)(n.code,{children:`id`}),` that names it to events and
queries.`]}),`
`,(0,c.jsx)(n.h3,{id:`fields`,children:`Fields`}),`
`,(0,c.jsxs)(n.p,{children:[`The columns of an annotation's table. Some place an item (`,(0,c.jsx)(n.code,{children:`target`}),`, `,(0,c.jsx)(n.code,{children:`start`}),`, `,(0,c.jsx)(n.code,{children:`stop`}),`, `,(0,c.jsx)(n.code,{children:`beg`}),`, `,(0,c.jsx)(n.code,{children:`end`}),`,
`,(0,c.jsx)(n.code,{children:`index`}),`, `,(0,c.jsx)(n.code,{children:`row`}),`); some describe it (`,(0,c.jsx)(n.code,{children:`id`}),`, `,(0,c.jsx)(n.code,{children:`label`}),`, `,(0,c.jsx)(n.code,{children:`category`}),`, `,(0,c.jsx)(n.code,{children:`value`}),`, `,(0,c.jsx)(n.code,{children:`tooltip`}),`); any others are
the data's own. 1BRS's contacts carry a `,(0,c.jsx)(n.code,{children:`distance`}),`
field; a theme can color or size by a field, and a `,(0,c.jsx)(n.strong,{children:`field provider`}),` can compute one.`]}),`
`,(0,c.jsx)(n.h2,{id:`the-coordinates`,children:`The coordinates`}),`
`,(0,c.jsx)(n.h3,{id:`coordinate-system`,children:`Coordinate system`}),`
`,(0,c.jsxs)(n.p,{children:[`Each thing that numbers positions is a `,(0,c.jsx)(n.strong,{children:`coordinate system`}),`, and every location lives in exactly
one. Its kinds:`]}),`
`,(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:`Kind`}),(0,c.jsx)(n.th,{children:`Its elements`}),(0,c.jsx)(n.th,{children:`In 1BRS`})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`molecule`})}),(0,c.jsx)(n.td,{children:`a molecule's positions`}),(0,c.jsx)(n.td,{children:`barnase P00648 (157), entity 1 (110)`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`unit`})}),(0,c.jsx)(n.td,{children:`a unit's positions, its molecule's indices within its range`}),(0,c.jsx)(n.td,{children:`chains A to F`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`row`})}),(0,c.jsx)(n.td,{children:`one alignment row's own residues`}),(0,c.jsx)(n.td,{children:`barnase's row in a family alignment`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`columns`})}),(0,c.jsx)(n.td,{children:`an alignment's columns`}),(0,c.jsx)(n.td,{children:`the family alignment's columns`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`complex`})}),(0,c.jsx)(n.td,{children:`its units' systems, in order`}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:`1brs`}),`: A to F`]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`external`})}),(0,c.jsx)(n.td,{children:`a host's own system`}),(0,c.jsxs)(n.td,{children:[`Mol*'s residues of chain A, through `,(0,c.jsx)(n.code,{children:`@molstar/seq-core/translate`})]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`item`})}),(0,c.jsx)(n.td,{children:`one streamed item's own positions`}),(0,c.jsx)(n.td,{children:`reserved for streaming`})]})]})]}),`
`,(0,c.jsxs)(n.p,{children:[`The viewer adds one more, per section: the `,(0,c.jsx)(n.strong,{children:`layout`}),` coordinate system, the positions as shown,
block by block. Only the screen lives in it, never data.`]}),`
`,(0,c.jsx)(n.h3,{id:`coordinate-map-and-route`,children:`Coordinate map and route`}),`
`,(0,c.jsxs)(n.p,{children:[`A `,(0,c.jsx)(n.strong,{children:`coordinate map`}),` relates the positions of one system to another's. UniProt's barnase maps onto
entity 1 by one segment, indices 47 to 156 onto 0 to 109. A row maps onto the columns, skipping
gaps. A protein maps onto its coding DNA with a span of 3: each residue covers a codon
(`,(0,c.jsx)(n.a,{href:`?path=/story/seq-cases-viewer--case-14`,children:`case 14`}),`). A `,(0,c.jsx)(n.strong,{children:`route`}),` is maps composed along a path: a
residue of chain A reaches the alignment's columns as unit A → entity 1 → barnase → the row → the
columns. Projecting a location along a route is how hover and selection reach every section that
shows the same thing.`]}),`
`,(0,c.jsx)(n.h3,{id:`closure-and-granularity`,children:`Closure and granularity`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Closure`}),` adds, to a position, the positions of other systems that contain it: hover a
nucleotide in case 14, and the residue whose codon holds it lights too. In 1BRS there are no
codons, so closure changes nothing. `,(0,c.jsx)(n.strong,{children:`Granularity`}),` widens a selection within its own system: a
position to its range, its unit, its copy group, its column or its row. Closure crosses systems;
granularity stays in one.`]}),`
`,(0,c.jsx)(n.h3,{id:`cyclic-systems`,children:`Cyclic systems`}),`
`,(0,c.jsxs)(n.p,{children:[`A plasmid or a circular genome has no ends: a range may cross the origin. A `,(0,c.jsx)(n.code,{children:`sequence`}),` marked
`,(0,c.jsx)(n.code,{children:`cyclic`}),` takes its positions modulo its length; a range on it written with `,(0,c.jsx)(n.code,{children:`start > stop`}),` runs
across the origin and is held as its two runs, one item. A block shows a piece across the origin
(`,(0,c.jsx)(n.code,{children:`range: [180, 60]`}),`) or the whole from another `,(0,c.jsx)(n.code,{children:`origin`}),`, and a focus on a feature across the origin
opens on its shortest arc (`,(0,c.jsx)(n.a,{href:`?path=/story/seq-views-and-layouts-axes-and-strands--linear`,children:`A plasmid, linear`}),`). A link's range may
cross the origin too (`,(0,c.jsx)(n.code,{children:`!seq-select=pDemo&start=200&stop=30`}),`). A section styled `,(0,c.jsx)(n.code,{children:`circular`}),` draws it as
rings (`,(0,c.jsx)(n.a,{href:`?path=/story/seq-views-and-layouts-axes-and-strands--ring`,children:`A plasmid, ring`}),`): any axis may be drawn so, and a selection or
highlight across the origin is one sector over every ring.`]}),`
`,(0,c.jsx)(n.h2,{id:`the-view`,children:`The view`}),`
`,(0,c.jsx)(n.h3,{id:`view-section-and-block`,children:`View, section and block`}),`
`,(0,c.jsxs)(n.p,{children:[`A document holds one or more `,(0,c.jsx)(n.strong,{children:`views`}),`, which a reader switches between ("Complex" and "Each
chain" in case 7). A view has `,(0,c.jsx)(n.strong,{children:`sections`}),`, one under another; each is one horizontal axis. A
section's axis is made of `,(0,c.jsx)(n.strong,{children:`blocks`}),`, each showing one unit (or a copy group), or it is one
alignment's columns.`]}),`
`,(0,c.jsx)(n.h3,{id:`piece`,children:`Piece`}),`
`,(0,c.jsxs)(n.p,{children:[`What a block shows of its coordinate system: a `,(0,c.jsx)(n.code,{children:`range`}),` of it, laid out in a `,(0,c.jsx)(n.code,{children:`direction`}),`. A block
showing barnase's residues 40 to 90, right to left, is a piece; reversing only changes how the block's positions are laid out on screen,
never the data (`,(0,c.jsx)(n.a,{href:`?path=/story/seq-views-and-layouts-axes-and-strands--direction`,children:`Direction`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`track-layer-and-renderer`,children:`Track, layer and renderer`}),`
`,(0,c.jsxs)(n.p,{children:[`A `,(0,c.jsx)(n.strong,{children:`track`}),` is one row of a section ("Residues", "Contacts"); a track holds `,(0,c.jsx)(n.strong,{children:`layers`}),`, drawn one
over another, each of a `,(0,c.jsx)(n.strong,{children:`layer type`}),` (`,(0,c.jsx)(n.code,{children:`letters`}),`, `,(0,c.jsx)(n.code,{children:`ranges`}),`, `,(0,c.jsx)(n.code,{children:`pairs`}),`, `,(0,c.jsx)(n.code,{children:`matrix`}),`, …). A
`,(0,c.jsx)(n.strong,{children:`renderer`}),` draws one layer type; built-in or an extension's, it is a registry entry, a plug-in
the viewer is assembled from (`,(0,c.jsx)(n.a,{href:`?path=/docs/seq-docs-extending--docs`,children:`Extending`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`theme-preset-and-style`,children:`Theme, preset and style`}),`
`,(0,c.jsxs)(n.p,{children:[`A `,(0,c.jsx)(n.strong,{children:`theme`}),` maps the data under a layer to a `,(0,c.jsx)(n.strong,{children:`channel`}),`'s values: its color, size or glyph (case
7 colors the contacts with one `,(0,c.jsx)(n.code,{children:`uniform`}),` color). A `,(0,c.jsx)(n.strong,{children:`preset`}),` is how a section is drawn: geometry,
row heights, header width, navigator, which behaviors are on (`,(0,c.jsx)(n.code,{children:`tracks`}),`, `,(0,c.jsx)(n.code,{children:`msa`}),`, `,(0,c.jsx)(n.code,{children:`strip`}),`, `,(0,c.jsx)(n.code,{children:`wrapped`}),`,
`,(0,c.jsx)(n.code,{children:`compact`}),`). A section's `,(0,c.jsx)(n.strong,{children:`style`}),` names a preset, or overrides a few of its keys inline. A `,(0,c.jsx)(n.strong,{children:`color
scheme`}),` is a named theme as data (Clustal X, Viridis, Okabe–Ito) a layer's color names, or that a
legend group's title (or a track's menu) switches at runtime (`,(0,c.jsx)(n.a,{href:`?path=/docs/seq-docs-color-schemes--docs`,children:`Color schemes`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`selection-highlight-and-focus`,children:`Selection, highlight and focus`}),`
`,(0,c.jsxs)(n.p,{children:[`The viewer's state, never in the document. The `,(0,c.jsx)(n.strong,{children:`selection`}),` is what the person picked; a
`,(0,c.jsx)(n.strong,{children:`highlight`}),` lights a target on a named channel (the host's, a link's, search results), and
channels add up; `,(0,c.jsx)(n.strong,{children:`focus`}),` brings a range into a section's window. Each takes loci, and lights
every section that shows the same positions, through routes and closure. (Stories Untold's own
Focus, the UI state sent with a prompt, is a different thing.)`]}),`
`,(0,c.jsx)(n.h3,{id:`loci-and-mol`,children:`Loci, and Mol*`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Loci`}),` are many locations of one kind, held compactly: positions of a unit, cells of an
alignment, rows, columns, items. Seq*'s loci are the model's, as Mol*'s are its structures'. To
reach Mol*, an event's positions go out with their coordinate system named; `,(0,c.jsx)(n.code,{children:`@molstar/seq-core/translate`}),`
maps them to the host's own system (chain A's residues in the loaded structure), and the planned
`,(0,c.jsx)(n.code,{children:`@molstar/seq-molstar-poc`}),` adapter turns them into a Mol* `,(0,c.jsx)(n.code,{children:`StructureElement.Loci`}),`; a Mol* hover comes back
the same way. The interface between A and D, selected once, is one set of runs on chains A and D of
the `,(0,c.jsx)(n.code,{children:`1brs`}),` complex, and one loci on the Mol* side.`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),n()})))()}l();export{s as default};