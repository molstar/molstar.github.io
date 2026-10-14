import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t,u as n}from"./blocks-DB-FaXqI.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{i,r as a}from"./react-Dyi61YEg.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`Seq*/Docs/Principles`}),`
`,(0,c.jsx)(n.h1,{id:`principles`,children:`Principles`}),`
`,(0,c.jsxs)(n.p,{children:[`What holds in every Seq* package. The page uses the words of `,(0,c.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs`,children:`Concepts`}),`; read that first.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`In short.`}),` Everything is numbered: every position lives in one `,(0,c.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#coordinate-system`,children:`coordinate
system`}),`, and `,(0,c.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#coordinate-map-and-route`,children:`coordinate maps`}),` carry
positions between systems, so a residue hovered in a chain lights its alignment column and its
codon. The core knows numbers, tables and maps, never biology; the biology comes in as data and
plug-ins. A document is plain data saying what to show, never how. Everything the viewer draws or
knows is a registry entry, the built-ins included, as in Mol*. The state lives in one headless
context that runs in Node; drawing is a thin layer over it. Speed is a contract, checked by tests
that fail when a frame allocates. And every name, schema and error is shaped so that a small model
can use it.`]}),`
`,(0,c.jsx)(n.p,{children:`Each principle below says what holds and why.`}),`
`,(0,c.jsx)(n.h2,{id:`coordinate-systems-are-the-backbone`,children:`Coordinate systems are the backbone`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Every location lives in one coordinate system.`}),` A `,(0,c.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#unit`,children:`unit`}),`'s residues, a
`,(0,c.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#molecule`,children:`molecule`}),`'s positions, an `,(0,c.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#alignment-rows-and-columns`,children:`alignment`}),`'s
columns, each row's own residues: each is a coordinate system whose elements are numbered by
`,(0,c.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#position-and-index-label-and-numbering`,children:`index`}),`. A `,(0,c.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#view-section-and-block`,children:`section`}),`
lays its axis out in one layout system; every `,(0,c.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#track-layer-and-renderer`,children:`layer`}),` reads its
data in its own system and is placed through a coordinate map.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Alignments and codons are one model.`}),` Both are coordinate maps, one with gaps, one with a span
of 3. `,(0,c.jsx)(n.strong,{children:`Projection`}),` carries positions along a route as a plain union of runs;
`,(0,c.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#closure-and-granularity`,children:(0,c.jsx)(n.strong,{children:`closure`})}),` adds the positions of other systems that contain
one. Hover, selection and highlights all use this one mechanism, and each chooses whether to
close.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Indices are canonical, labels are for people.`}),` Positions are 0-based and half-open
(`,(0,c.jsx)(n.code,{children:`start`}),`, `,(0,c.jsx)(n.code,{children:`stop`}),`); `,(0,c.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#position-and-index-label-and-numbering`,children:`labels in a numbering`}),`
(`,(0,c.jsx)(n.code,{children:`beg`}),`, `,(0,c.jsx)(n.code,{children:`end`}),`, inclusive) are converted once, at load. SeqQL keeps the split: labels with `,(0,c.jsx)(n.code,{children:`range`}),`
and `,(0,c.jsx)(n.code,{children:`[10-20]`}),`, indices with `,(0,c.jsx)(n.code,{children:`slice`}),` and `,(0,c.jsx)(n.code,{children:`@9:20`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`the-core-is-domain-free`,children:`The core is domain-free`}),`
`,(0,c.jsxs)(n.ol,{start:`4`,children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`The core holds abstractions, the biology lives at application level.`}),` The model, the format and the viewer hold
coordinate systems, runs, maps, tables, keys, measures and drawing batches; providers (code that
computes data), named data (letter classes, color rule tables), builder presets, an app's search
and Stories hold the biology. The test: an abstraction can be stated without a biological word. Reversing a `,(0,c.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#piece`,children:`piece`}),` does not complement its letters;
complementing is a letter map, a code-to-code table given as named data.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`A sequence viewer first.`}),` Nothing in the kernel reads a structure. A
`,(0,c.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#complex`,children:`complex`}),` is written by value or comes from a registered complex provider.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`documents-are-data`,children:`Documents are data`}),`
`,(0,c.jsxs)(n.ol,{start:`6`,children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`A document says what, never how.`}),` Navigators, skins, sizes, draw functions and performance
settings are the viewer's; a parameter that is only a drawing preference is a hint. Interaction
state is never in the document.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Data only, in JSON's base types.`}),` Every value is `,(0,c.jsx)(n.code,{children:`null`}),`, a boolean, a number, a string, an
array or an object; typed arrays only as table columns, where they are lossless. A document may
be JSON (`,(0,c.jsx)(n.code,{children:`.svsj`}),`) or MessagePack (`,(0,c.jsx)(n.code,{children:`.svsm`}),`) with the same data model.
No functions, no code: a story or an export carries data only.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Refs are identity.`}),` Every node has a `,(0,c.jsx)(n.code,{children:`ref`}),`, a name unique in the document. Patches (small
changes to a document), snapshots (an ordered story of patches over one document), links and
commands address nodes by it, and a viewer redraws only what a change touched.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Never silent.`}),` Every issue has a stable code (`,(0,c.jsx)(n.code,{children:`svs.*`}),`, `,(0,c.jsx)(n.code,{children:`seqv.*`}),`, `,(0,c.jsx)(n.code,{children:`seqql.*`}),`), a severity, a
path and a message that says what would be valid. Fallbacks and omissions are reported.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`everything-is-an-extension`,children:`Everything is an extension`}),`
`,(0,c.jsxs)(n.ol,{start:`10`,children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`A viewer is registry entries, as a Mol* v6 plugin is.`}),` A registry entry is a plain object
grouped by kind. Node kinds, layer `,(0,c.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#track-layer-and-renderer`,children:`renderers`}),`, data columns,
`,(0,c.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#theme-preset-and-style`,children:`themes`}),`, navigators, label providers, presets, commands and actions are
`,(0,c.jsx)(n.code,{children:`SeqViewerRegistryEntry`}),` kinds; the format's half (formats, services, complex and field
providers, aligners, layer types, theme tables, issue codes) is `,(0,c.jsx)(n.code,{children:`SvsRegistryEntry`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Built-ins have no private access.`}),` `,(0,c.jsx)(n.code,{children:`letters`}),`, `,(0,c.jsx)(n.code,{children:`ranges`}),`, `,(0,c.jsx)(n.code,{children:`rows`}),` and the rest are registry
entries on the same renderer API an extension gets, as Mol*'s representations are; a host
replaces one by registering a copy of `,(0,c.jsx)(n.code,{children:`DefaultRegistry`}),`. Extensions name their entries
`,(0,c.jsx)(n.code,{children:`<ns>:<name>`}),` and ship nothing else.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.a,{href:`?path=/docs/seq-docs-query-language--docs`,children:`SeqQL`}),`, the query language, is extended the same
way.`]}),` A host's language is the base table plus its extensions'
symbols, assembled per call with no module state (`,(0,c.jsx)(n.code,{children:`createLanguage(extensions)`}),`); macros (symbols that
stand for a longer query, as `,(0,c.jsx)(n.code,{children:`sel`}),` or Stories' `,(0,c.jsx)(n.code,{children:`chain`}),`) expand before checking and need no
runtime.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`mols-principles-carried-over`,children:`Mol*'s principles, carried over`}),`
`,(0,c.jsxs)(n.ol,{start:`13`,children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Headless first.`}),` All state lives in one `,(0,c.jsx)(n.code,{children:`SeqViewerContext`}),`, the analog of Mol*'s
`,(0,c.jsx)(n.code,{children:`PluginContext`}),`; the engine reads it and draws, owning pixels and caches, never state. The root
entry, `,(0,c.jsx)(n.code,{children:`/draw`}),` and `,(0,c.jsx)(n.code,{children:`/svg`}),` touch no DOM global: every behavior test runs in Node, and `,(0,c.jsx)(n.code,{children:`renderSvg`}),`
and the `,(0,c.jsx)(n.code,{children:`seqv-render`}),` CLI draw a figure there.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Mechanism in the context, policy in behaviors.`}),` The context gives base events and managers
with verbs (viewport, hover, highlight, selection, focus); what a hover or a drag does is a
behavior's decision, with params, added and removed at runtime.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`A language over base symbols, selections to loci.`}),` SeqQL is MolQL's design on sequences:
base symbols with full and short names, queries as functions of a context, the result a
sequence selection that converts to the model's `,(0,c.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#loci-and-mol`,children:`loci`}),`, which the viewer's
`,(0,c.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#selection-highlight-and-focus`,children:`selection and highlights`}),` close and project as they
already do.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Everything is subscribable.`}),` Every piece of state is an rxjs `,(0,c.jsx)(n.code,{children:`Observable`}),` with a synchronous
`,(0,c.jsx)(n.code,{children:`value`}),`, or a `,(0,c.jsx)(n.code,{children:`Live`}),` record with a version for pointer-rate values.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`performance-is-a-contract`,children:`Performance is a contract`}),`
`,(0,c.jsxs)(n.ol,{start:`17`,children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`No allocation per frame, per pointer move or per lookup.`}),` Typed
arrays, numbers as fake pointers, reused records and out-parameters, emission without
allocation; objects only at the edges. The APIs are shaped for it, not only the code.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Heap guards test it.`}),` The `,(0,c.jsx)(n.code,{children:`*.heap.ts`}),` suites run a frame, a gesture or a lookup `,(0,c.jsx)(n.code,{children:`n`}),` and `,(0,c.jsx)(n.code,{children:`4n`}),`
times after a warm-up (`,(0,c.jsx)(n.code,{children:`heapScaling`}),`) and fail when the heap grows with the run's length;
`,(0,c.jsx)(n.code,{children:`rendererConformance`}),` puts every renderer, an extension's included, through the same guard.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`A frame costs O(device columns + items drawn),`}),` never O(positions in view). Reductions, never
sampling: segment tables and power-of-two pyramids built once when a layer's data is prepared, density
per device pixel column, the most common color class or the mean per column, one image draw per shown run.
A letter is one `,(0,c.jsx)(n.code,{children:`drawImage`}),` from the `,(0,c.jsx)(n.strong,{children:`glyph atlas`}),`, a cell rasterized once, not a `,(0,c.jsx)(n.code,{children:`fillText`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Measured targets.`}),` On the 3M-nucleotide genome story: a load under 1.5 s, a whole frame
under 16 ms, a hover step under 2 ms, no Ctrl+wheel frame over 33 ms, the heap under 400 MB;
all met. The streamed hg38 bench (GRCh38's 24 chromosomes at their real lengths) loads in 44 ms and
draws a whole frame in 1.4 ms.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`designed-for-a-small-agent`,children:`Designed for a small agent`}),`
`,(0,c.jsxs)(n.ol,{start:`21`,children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ids, not expressions.`}),` Commands, links and invocations (a command written as data, in a
description's link) name nodes by ref and `,(0,c.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#annotation-and-item`,children:`items`}),` by id;
the agent writes refs it was given.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Flat schemas.`}),` A command's params, a link's arguments and a SeqQL call are flat; SeqQL's
S-expression replaces a deep JSON schema in a tool definition, and its skill text is generated
from the symbol table, so it says exactly what the checker accepts.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Instructive errors.`}),` Every issue says what is wrong and what to write instead: SeqQL's carry
a line and column, the symbol's signature and "did you mean"; the format's name the valid values.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),n()})))()}l();export{s as default};