import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t,u as n}from"./blocks-DB-FaXqI.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{i,r as a}from"./react-Dyi61YEg.js";import{m as o,n as s,o as c,p as l,t as u}from"./live-CdcxjiL9.js";import{i as d,t as f}from"./snippets-CSCVEwd_.js";function p(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(t,{title:`Seq*/Docs/Format`}),`
`,(0,h.jsx)(n.h1,{id:`the-format-seqviewspec`,children:`The format: SeqViewSpec`}),`
`,(0,h.jsxs)(n.p,{children:[`A SeqViewSpec document says what a sequence view shows, as data: a viewer-independent format, read
by our viewer and checked by a second one (Nightingale). It keeps MolViewSpec's node shape,
palettes, field remapping and description format, and differs where sequences need it: every node
has a `,(0,h.jsx)(n.code,{children:`ref`}),`, positions are 0-based indices beside labels, data may be held in place, snapshots are
patches over one tree. Each term below is explained in `,(0,h.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs`,children:`Concepts`}),`.`]}),`
`,(0,h.jsx)(n.h2,{id:`its-shape`,children:`Its shape`}),`
`,(0,h.jsxs)(n.p,{children:[`A document is an envelope (`,(0,h.jsx)(n.code,{children:`format: "seq_view_spec"`}),`, `,(0,h.jsx)(n.code,{children:`version`}),`, an optional `,(0,h.jsx)(n.code,{children:`revision`}),`,
`,(0,h.jsx)(n.code,{children:`metadata`}),`, `,(0,h.jsx)(n.code,{children:`requires`}),`, `,(0,h.jsx)(n.code,{children:`snapshots`}),`) around a tree of nodes, each `,(0,h.jsx)(n.code,{children:`{ kind, ref, params?, custom?, children? }`}),`; a `,(0,h.jsx)(n.code,{children:`ref`}),` is the node's name, unique in the document. Under `,(0,h.jsx)(n.code,{children:`root`}),`:`]}),`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.strong,{children:`Data`}),` (`,(0,h.jsx)(n.code,{children:`data`}),`), exactly one: what views show. `,(0,h.jsx)(n.code,{children:`sequence`}),` and `,(0,h.jsx)(n.code,{children:`ligand`}),` (`,(0,h.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#molecule`,children:`molecules`}),`, with their
`,(0,h.jsxs)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#position-and-index-label-and-numbering`,children:[(0,h.jsx)(n.code,{children:`numbering`}),`s`]}),`), `,(0,h.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#unit`,children:(0,h.jsx)(n.code,{children:`unit`})}),` and
`,(0,h.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#complex`,children:(0,h.jsx)(n.code,{children:`complex`})}),`, `,(0,h.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#alignment-rows-and-columns`,children:(0,h.jsx)(n.code,{children:`alignment`})}),` (with at most one
`,(0,h.jsx)(n.code,{children:`tree`}),`), `,(0,h.jsx)(n.code,{children:`mapping`}),` (a `,(0,h.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#coordinate-map-and-route`,children:`coordinate map`}),` between two
systems, by `,(0,h.jsx)(n.code,{children:`method`}),`: `,(0,h.jsx)(n.code,{children:`identity`}),`, `,(0,h.jsx)(n.code,{children:`segments`}),`, `,(0,h.jsx)(n.code,{children:`pairwise`}),`, `,(0,h.jsx)(n.code,{children:`align`}),`, `,(0,h.jsx)(n.code,{children:`by_numbering`}),`, `,(0,h.jsx)(n.code,{children:`codon`}),`,
`,(0,h.jsx)(n.code,{children:`provider`}),`), `,(0,h.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#annotation-and-item`,children:(0,h.jsx)(n.strong,{children:(0,h.jsx)(n.code,{children:`annotation`})})}),` (a table of items with a `,(0,h.jsx)(n.code,{children:`geometry`}),`:
`,(0,h.jsx)(n.code,{children:`ranges`}),`, `,(0,h.jsx)(n.code,{children:`values`}),`, `,(0,h.jsx)(n.code,{children:`pairs`}),`, `,(0,h.jsx)(n.code,{children:`matrix`}),` or `,(0,h.jsx)(n.code,{children:`rows`}),`), `,(0,h.jsx)(n.code,{children:`computed`}),` (an annotation a registered provider
computes, as `,(0,h.jsx)(n.code,{children:`column_stats`}),`), and `,(0,h.jsx)(n.code,{children:`source`}),` (where data comes from: a URI, a host file, a service,
a stream). Each data node holds its content in `,(0,h.jsx)(n.code,{children:`value`}),` or reads it from a source.`]}),`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.strong,{children:(0,h.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#view-section-and-block`,children:`Views`})}),` (`,(0,h.jsx)(n.code,{children:`view`}),`), one or more, each with `,(0,h.jsx)(n.strong,{children:`sections`}),` (`,(0,h.jsx)(n.code,{children:`section`}),`): one axis each, shown one under
another. A section's axis is `,(0,h.jsx)(n.strong,{children:`blocks`}),` (`,(0,h.jsx)(n.code,{children:`block`}),`: units side by side or stacked; a block may show a `,(0,h.jsx)(n.code,{children:`range`}),` of its
coordinate system in a `,(0,h.jsx)(n.code,{children:`direction`}),`, a `,(0,h.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#piece`,children:`piece`}),`) or one alignment's columns. Its tracks (`,(0,h.jsx)(n.code,{children:`track`}),`, in `,(0,h.jsx)(n.code,{children:`group`}),`s
or not) each hold `,(0,h.jsx)(n.strong,{children:`layers`}),` (`,(0,h.jsx)(n.code,{children:`layer`}),`), composited in order.`]}),`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.strong,{children:(0,h.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#track-layer-and-renderer`,children:`Layers`})}),` are typed by what they show: `,(0,h.jsx)(n.code,{children:`letters`}),`, `,(0,h.jsx)(n.code,{children:`rows`}),`, `,(0,h.jsx)(n.code,{children:`ranges`}),`, `,(0,h.jsx)(n.code,{children:`points`}),`, `,(0,h.jsx)(n.code,{children:`emphasis`}),`,
`,(0,h.jsx)(n.code,{children:`variants`}),`, `,(0,h.jsx)(n.code,{children:`secondary`}),`, `,(0,h.jsx)(n.code,{children:`values`}),`, `,(0,h.jsx)(n.code,{children:`color`}),`, `,(0,h.jsx)(n.code,{children:`ruler`}),`, `,(0,h.jsx)(n.code,{children:`pairs`}),`, `,(0,h.jsx)(n.code,{children:`logo`}),`, `,(0,h.jsx)(n.code,{children:`matrix`}),`, or an extension's
`,(0,h.jsx)(n.code,{children:`<ns>:<name>`}),`. Each type declares the data it accepts and a `,(0,h.jsx)(n.strong,{children:`fallback`}),`; every chain ends at
`,(0,h.jsx)(n.code,{children:`letters`}),`, `,(0,h.jsx)(n.code,{children:`ranges`}),` or omitted, so any viewer draws something and reports the rest.`]}),`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.strong,{children:(0,h.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#theme-preset-and-style`,children:`Themes`})}),` map the data under a layer to a `,(0,h.jsx)(n.strong,{children:`channel`}),`'s values, as Mol*'s color and size themes
do: `,(0,h.jsx)(n.code,{children:`color`}),`, `,(0,h.jsx)(n.code,{children:`size`}),` or `,(0,h.jsx)(n.code,{children:`glyph`}),`. A channel's param holds a `,(0,h.jsx)(n.code,{children:`ThemeRef`}),`, `,(0,h.jsx)(n.code,{children:`{ theme, params, fallback }`}),`: `,(0,h.jsx)(n.code,{children:`uniform`}),`, `,(0,h.jsx)(n.code,{children:`rules`}),`, `,(0,h.jsx)(n.code,{children:`field_palette`}),`, `,(0,h.jsx)(n.code,{children:`field_scale`}),` and the rest, or an extension's
with a kernel fallback. The viewer's skin (ink, fonts, light and dark) is never in the document.`]}),`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsxs)(n.strong,{children:[`Presets and `,(0,h.jsx)(n.code,{children:`style`}),`.`]}),` A preset is how the viewer draws a section (geometry, row
heights, header, navigator, behaviors). A section's `,(0,h.jsx)(n.code,{children:`style`}),` names the viewer's preset for it (`,(0,h.jsx)(n.code,{children:`tracks`}),`, `,(0,h.jsx)(n.code,{children:`msa`}),`,
`,(0,h.jsx)(n.code,{children:`strip`}),`, `,(0,h.jsx)(n.code,{children:`compact`}),`, `,(0,h.jsx)(n.code,{children:`wrapped`}),`, or `,(0,h.jsx)(n.code,{children:`<ns>:<name>`}),`; `,(0,h.jsx)(n.code,{children:`null`}),` lets the viewer pick by layout and
axis), or is an inline preset: `,(0,h.jsx)(n.code,{children:`{ "preset": "msa", "column_heads": "own_row", "data_floor": 0 }`}),`.
The keys are a curated snake_case list mapped onto the viewer's render props; the document's key
beats the preset's, which beats the host's (`,(0,h.jsxs)(n.a,{href:`?path=/story/seq-views-and-layouts-section-style--column-heads`,children:[`the `,(0,h.jsx)(n.code,{children:`style`}),` stories`]}),`).`]}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`an-example`,children:`An example`}),`
`,(0,h.jsx)(n.p,{children:`The Introduction's document, as the builder writes it (the JSON below is generated live):`}),`
`,(0,h.jsx)(s,{}),`
`,(0,h.jsx)(n.h2,{id:`the-builder`,children:`The builder`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`@molstar/seq-core/builder`}),` writes documents with types from the parameter tables. Data methods
return handles; a param that takes a `,(0,h.jsx)(n.code,{children:`ref<kind>`}),` takes a handle or a ref; `,(0,h.jsx)(n.code,{children:`getDocument()`}),` generates
the refs nobody gave. Sugar writes ordinary nodes, so a document built in code reads the same as
one written by hand:`]}),`
`,(0,h.jsx)(u,{code:f}),`
`,(0,h.jsxs)(n.p,{children:[`Presets compose generic params at application level: `,(0,h.jsx)(n.code,{children:`b.preset.multiRegion(section, regions)`}),` (a
block per region) and `,(0,h.jsx)(n.code,{children:`b.preset.codingPair(view, protein, cdna)`}),` (a protein alignment over its
coding DNA's, one section following the other).`]}),`
`,(0,h.jsx)(n.h2,{id:`validation`,children:`Validation`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`validate(doc, registries)`}),` gives every static issue: `,(0,h.jsx)(n.code,{children:`{ code, severity, path, message }`}),`, a stable
code, `,(0,h.jsx)(n.code,{children:`error`}),` or `,(0,h.jsx)(n.code,{children:`warning`}),`, a JSON Pointer, and a message that says what would be valid. Nothing is
repaired silently. Codes are grouped by stage: static (`,(0,h.jsx)(n.code,{children:`svs.node.*`}),`, `,(0,h.jsx)(n.code,{children:`svs.params.*`}),`, `,(0,h.jsx)(n.code,{children:`svs.ref.*`}),`,
`,(0,h.jsx)(n.code,{children:`svs.layer.*`}),`, …), then load, resolve, stream and render, each reported in the same shape; an
extension reports its own under its namespace. The example above with a misspelled param and a ref
that names nothing, validated live:`]}),`
`,(0,h.jsx)(l,{}),`
`,(0,h.jsxs)(n.p,{children:[`From the command line: `,(0,h.jsx)(n.code,{children:`svs-validate doc.svsj [--strict]`}),` (exit 1 on errors), `,(0,h.jsx)(n.code,{children:`svs-convert`}),`
between JSON and MessagePack, `,(0,h.jsx)(n.code,{children:`svs-print-schema`}),` for the reference below.`]}),`
`,(0,h.jsxs)(n.h2,{id:`one-file-with-its-data-svsx`,children:[`One file with its data: `,(0,h.jsx)(n.code,{children:`.svsx`})]}),`
`,(0,h.jsxs)(n.p,{children:[`An `,(0,h.jsx)(n.code,{children:`.svsx`}),` is a zip with the document as `,(0,h.jsx)(n.code,{children:`index.svsm`}),` (or `,(0,h.jsx)(n.code,{children:`index.svsj`}),`) and the files it reads, so it opens with
no network. Inside it a source's `,(0,h.jsx)(n.code,{children:`uri`}),` may be a relative path (`,(0,h.jsx)(n.code,{children:`data/abl1.fa`}),`) that resolves against the main file's
directory; `,(0,h.jsx)(n.code,{children:`..`}),` past the archive's root is refused. `,(0,h.jsx)(n.code,{children:`readSvsx(bytes)`}),` gives the document, validated for the archive,
and its files; `,(0,h.jsx)(n.code,{children:`archiveLoaders(files, fallback, base)`}),` answers the relative URIs and passes the rest on, and a viewer
given those loaders opens the archive's document (`,(0,h.jsx)(n.a,{href:`?path=/story/seq-file-formats--documents`,children:`Seq* documents`}),`). From a document
with absolute URIs, `,(0,h.jsx)(n.code,{children:`@molstar/seq-core/builder/svsx`}),` makes one: `,(0,h.jsx)(n.code,{children:`bundleUris`}),` fetches each file once and rewrites
its URI, and `,(0,h.jsx)(n.code,{children:`writeSvsx`}),` writes the zip (MessagePack unless asked for JSON). The `,(0,h.jsx)(n.a,{href:`?path=/story/seq-cases-format--svsx`,children:`.svsx story`}),` opens a
committed archive and bundles a document offline.`]}),`
`,(0,h.jsx)(n.h2,{id:`versioning`,children:`Versioning`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`version`}),` is semver; the format is `,(0,h.jsx)(n.strong,{children:`1.0.0`}),`. A patch is wording and fixes; a minor version adds
only (optional params whose default keeps the old meaning, new kinds, new types and themes whose
fallback ends at an earlier one); anything else is major. A reader of 1.0 given a newer minor reads
leniently: each unknown is a warning (`,(0,h.jsx)(n.code,{children:`svs.version.newer_minor`}),`) and an unknown type or theme draws
by its fallback; another major is rejected. `,(0,h.jsx)(n.code,{children:`upgrade(doc)`}),` runs one step per older version. There
is no JSON Schema: the reference is generated from the parameter tables, per minor version.`]}),`
`,(0,h.jsx)(c,{})]})}function m(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=r(),a(),n(),d(),o()})))()}g();export{m as default};