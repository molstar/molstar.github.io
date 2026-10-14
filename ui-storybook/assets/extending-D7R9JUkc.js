import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t,u as n}from"./blocks-DB-FaXqI.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{i,r as a}from"./react-Dyi61YEg.js";import{m as o,t as s}from"./live-DycFt76R.js";import{i as c,r as l}from"./snippets-CSCVEwd_.js";function u(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t,{title:`Seq*/Docs/Extending`}),`
`,(0,f.jsx)(n.h1,{id:`extending-seq`,children:`Extending Seq*`}),`
`,(0,f.jsxs)(n.p,{children:[`Everything a viewer draws or knows comes from registry entries: plain objects grouped by kind, as a
Mol* v6 plugin spec is. An extension ships entries and nothing else; the built-ins are entries
too, with no private access. The terms (renderer, theme, preset, field, layer) are explained in
`,(0,f.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs`,children:`Concepts`}),`. A host passes the entries in the viewer spec's `,(0,f.jsx)(n.code,{children:`registry`}),` (the spec is what a
viewer is made of: entries, behaviors, config), and its I/O in `,(0,f.jsx)(n.code,{children:`ports`}),`: take `,(0,f.jsx)(n.code,{children:`DefaultSeqViewerSpec()`}),` from `,(0,f.jsx)(n.code,{children:`@molstar/seq-viewer`}),`, append an entry (`,(0,f.jsx)(n.code,{children:`{ svs, renderers, themes, … }`}),`, a
`,(0,f.jsx)(n.code,{children:`SeqViewerRegistryEntry`}),`) to its `,(0,f.jsx)(n.code,{children:`registry`}),`, and pass the spec to `,(0,f.jsx)(n.code,{children:`<SeqViewer spec={spec} />`}),`, set it as
`,(0,f.jsx)(n.code,{children:`element.spec`}),`, or give it to `,(0,f.jsx)(n.code,{children:`createSeqViewer(spec, ports)`}),`.`]}),`
`,(0,f.jsxs)(n.p,{children:[`A `,(0,f.jsx)(n.code,{children:`SeqViewerRegistryEntry`}),` has the viewer's kinds (`,(0,f.jsx)(n.code,{children:`nodeKinds`}),`, `,(0,f.jsx)(n.code,{children:`renderers`}),`, `,(0,f.jsx)(n.code,{children:`columns`}),`, `,(0,f.jsx)(n.code,{children:`themes`}),`,
`,(0,f.jsx)(n.code,{children:`navigators`}),`, `,(0,f.jsx)(n.code,{children:`presets`}),`, `,(0,f.jsx)(n.code,{children:`labels`}),`, `,(0,f.jsx)(n.code,{children:`commands`}),`, `,(0,f.jsx)(n.code,{children:`actions`}),`) and, under `,(0,f.jsx)(n.code,{children:`svs`}),`, the format's half (an
`,(0,f.jsx)(n.code,{children:`SvsRegistryEntry`}),`: `,(0,f.jsx)(n.code,{children:`formats`}),`, `,(0,f.jsx)(n.code,{children:`services`}),`, `,(0,f.jsx)(n.code,{children:`complexProviders`}),`, `,(0,f.jsx)(n.code,{children:`providers`}),`, `,(0,f.jsx)(n.code,{children:`nodeProviders`}),`, `,(0,f.jsx)(n.code,{children:`fields`}),`, `,(0,f.jsx)(n.code,{children:`aligners`}),`,
`,(0,f.jsx)(n.code,{children:`layerTypes`}),`, `,(0,f.jsx)(n.code,{children:`themes`}),`, `,(0,f.jsx)(n.code,{children:`letterMaps`}),`, `,(0,f.jsx)(n.code,{children:`colorSchemes`}),`, `,(0,f.jsx)(n.code,{children:`custom`}),`, `,(0,f.jsx)(n.code,{children:`issueCodes`}),`). Names outside the kernel are namespaced,
`,(0,f.jsx)(n.code,{children:`<ns>:<name>`}),`, outside the reserved `,(0,f.jsx)(n.code,{children:`svs`}),`, `,(0,f.jsx)(n.code,{children:`seqv`}),` and `,(0,f.jsx)(n.code,{children:`mvs`}),`. A conflict throws one error listing
every conflict, and nothing is registered.`]}),`
`,(0,f.jsxs)(n.p,{children:[`The worked example is `,(0,f.jsx)(n.strong,{children:(0,f.jsx)(n.code,{children:`org.example:stars`})}),` (`,(0,f.jsx)(n.code,{children:`@molstar/seq-viewer/testing`}),`,
`,(0,f.jsx)(n.code,{children:`src/testing/examples/stars.ts`}),`, about 130 lines): a layer type, its renderer and a field provider.
The interactions extension is the full-size one: `,(0,f.jsx)(n.code,{children:`InteractionsViewerRegistry`}),` from
`,(0,f.jsx)(n.code,{children:`@molstar/seq-viewer/interactions/viewer`}),`, the fingerprint renderer and the `,(0,f.jsx)(n.code,{children:`interactions:kind`}),` theme
(`,(0,f.jsx)(n.a,{href:`?path=/story/seq-cases-viewer--case-6`,children:`case 6`}),`).`]}),`
`,(0,f.jsx)(n.h2,{id:`a-renderer`,children:`A renderer`}),`
`,(0,f.jsxs)(n.p,{children:[`A `,(0,f.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#track-layer-and-renderer`,children:`renderer`}),` draws one layer type, as a Mol* representation draws one kind of geometry. It has two
halves in one module: `,(0,f.jsx)(n.code,{children:`prepare`}),`, `,(0,f.jsx)(n.code,{children:`hit`}),`, `,(0,f.jsx)(n.code,{children:`legend`}),` and `,(0,f.jsx)(n.code,{children:`label`}),` are headless (the root entry's API);
`,(0,f.jsx)(n.code,{children:`draw`}),`, `,(0,f.jsx)(n.code,{children:`tiny`}),`, `,(0,f.jsx)(n.code,{children:`overlay`}),` and the rest use the renderer API from `,(0,f.jsx)(n.code,{children:`@molstar/seq-viewer/draw`}),`, which is
DOM-free, so a renderer prepares, hits and draws in Node.`]}),`
`,(0,f.jsxs)(n.ol,{children:[`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`The format half`}),`, a `,(0,f.jsx)(n.code,{children:`LayerTypeEntry`}),` under `,(0,f.jsx)(n.code,{children:`svs.layerTypes`}),`: its `,(0,f.jsx)(n.code,{children:`options`}),` (a params table),
the data it `,(0,f.jsx)(n.code,{children:`accepts`}),`, its `,(0,f.jsx)(n.code,{children:`layouts`}),` and `,(0,f.jsx)(n.code,{children:`axes`}),`, its `,(0,f.jsx)(n.code,{children:`sizing`}),`, its `,(0,f.jsx)(n.code,{children:`channels`}),`, and a kernel
`,(0,f.jsx)(n.code,{children:`fallback`}),` that a viewer without the renderer draws (`,(0,f.jsx)(n.code,{children:`svs.render.fallback`}),`).`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`The renderer`}),`, a `,(0,f.jsx)(n.code,{children:`LayerRenderer`}),` of the same name: `,(0,f.jsx)(n.code,{children:`geometries`}),` (`,(0,f.jsx)(n.code,{children:`circular`}),` too when its batches hold on rings:
the engine maps a linear draw onto the circle; one that draws images leaves it out and is drawn as bars there),
`,(0,f.jsx)(n.code,{children:`stable`}),`, `,(0,f.jsx)(n.code,{children:`minHeight`}),`, then
`,(0,f.jsx)(n.code,{children:`prepare(input, rc)`}),` (once per input change: typed arrays over the data and block coordinate
systems, never over pixels), `,(0,f.jsx)(n.code,{children:`draw(v, s, p)`}),` through batches (lists of rectangles, glyphs, paths or text handed to a
backend: Canvas2D, SVG or a recorder) and the placement helpers
(`,(0,f.jsx)(n.code,{children:`placeRun`}),`, `,(0,f.jsx)(n.code,{children:`band`}),`, `,(0,f.jsx)(n.code,{children:`mark`}),`), which make a draw geometry-neutral and direction-proof, `,(0,f.jsx)(n.code,{children:`hit`}),`
(fills locations, never renderer-local numbers; with `,(0,f.jsx)(n.code,{children:`hitsPastEnd`}),`, also asked just past a block's end, with no
position, for a glyph that overhangs it), `,(0,f.jsx)(n.code,{children:`legend`}),`, `,(0,f.jsx)(n.code,{children:`label`}),`. What batches cannot express
is drawn as pixels (`,(0,f.jsx)(n.code,{children:`images.fromPixels`}),`); there is no raw Canvas2D entry.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Conformance.`}),` `,(0,f.jsx)(n.code,{children:`rendererConformance(entry, fixtures)`}),` from `,(0,f.jsx)(n.code,{children:`@molstar/seq-viewer/testing`}),` draws the
layer at three zooms in each declared geometry (on rings, once, through the ring map; without `,(0,f.jsx)(n.code,{children:`circular`}),`, the bars
and their one warning) and checks that the recording and SVG backends get
the same batches, that a frame allocates nothing after warm-up, that every drawn element hits
back to itself (an item that covers the position hit), that the legend lists what the data has, that a context without the entry draws
the fallback with one issue, that each zoom draws something (unless the fixtures name it in `,(0,f.jsx)(n.code,{children:`empty`}),`) and each
layer at one zoom at least, with reversed fixtures that a reversed draw mirrors the forward one, and with `,(0,f.jsx)(n.code,{children:`edges`}),`
that every layer draws and hits back in the edge geometries (`,(0,f.jsx)(n.code,{children:`edgeDocument`}),`: reversed, from a cyclic origin,
stacked, filtered, as copies; reversed, the forward draw mirrored), each of which must apply to the fixture's
document unless `,(0,f.jsx)(n.code,{children:`edgesSkipped`}),` names it with a reason. Every built-in
runs it, and so do the fingerprint and the stars.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Hover emphasis.`}),` An `,(0,f.jsx)(n.code,{children:`overlay(v, s, p)`}),` draws on the overlay pass, from what the channels light (`,(0,f.jsx)(n.code,{children:`v.marks`}),`). To
emphasize the element under the pointer as the built-ins do, find it (`,(0,f.jsx)(n.code,{children:`v.marks.item(v.layer)`}),` with
`,(0,f.jsx)(n.code,{children:`itemAnnotation`}),` for an item, `,(0,f.jsx)(n.code,{children:`v.marks.element(v.layer, out)`}),` for a position or a cell) and call `,(0,f.jsx)(n.code,{children:`outlineItem(v, color, x, y, w, h)`}),` for a box or `,(0,f.jsx)(n.code,{children:`ringItem(v, color, glyph, cx, cy, r, half)`}),` for a glyph: the outline is drawn
inside the item's own pixels in an ink derived from its color for the current skin (darker on light, lighter on
dark), and nothing is drawn where the section sets `,(0,f.jsx)(n.code,{children:`hover_emphasis: false`}),`.
A `,(0,f.jsx)(n.code,{children:`rowHover(v, s, p, h, out)`}),` gives the row band a hover on its track's data lights (device rows into `,(0,f.jsx)(n.code,{children:`out`}),`, or
false for none), as the matrix lights its hovered band; without it, the track's box.
`,(0,f.jsx)(n.a,{href:`?path=/story/seq-interaction-hover--emphasis`,children:`Hover`}),`.`]}),`
`]}),`
`,(0,f.jsx)(s,{code:l}),`
`,(0,f.jsx)(n.h2,{id:`a-field-provider`,children:`A field provider`}),`
`,(0,f.jsxs)(n.p,{children:[`Often a `,(0,f.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#fields`,children:`field`}),` makes a renderer unneeded: a `,(0,f.jsx)(n.code,{children:`FieldProviderEntry`}),` (under `,(0,f.jsx)(n.code,{children:`svs.fields`}),`) computes a
value per row of an annotation it `,(0,f.jsx)(n.code,{children:`applies`}),` to, and any layer colors or sizes by it through a theme
(`,(0,f.jsx)(n.code,{children:`field_palette`}),`, `,(0,f.jsx)(n.code,{children:`field_scale`}),` with `,(0,f.jsx)(n.code,{children:`field: "org.example:affinity"`}),`). The stars' `,(0,f.jsx)(n.code,{children:`AffinityField`}),`
reads a `,(0,f.jsx)(n.code,{children:`kd_nm`}),` column as pKd on annotations that carry `,(0,f.jsx)(n.code,{children:`custom["org.example"]`}),`.`]}),`
`,(0,f.jsx)(n.h2,{id:`a-theme`,children:`A theme`}),`
`,(0,f.jsxs)(n.p,{children:[`A `,(0,f.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#theme-preset-and-style`,children:`theme`}),` maps the data under a layer to one channel's values: `,(0,f.jsx)(n.code,{children:`color`}),`, `,(0,f.jsx)(n.code,{children:`size`}),` or `,(0,f.jsx)(n.code,{children:`glyph`}),`; one
provider serves every kind it lists. Two halves of one name:`]}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`The format's`}),` `,(0,f.jsx)(n.code,{children:`ThemeEntry`}),` (under `,(0,f.jsx)(n.code,{children:`svs.themes`}),`): its params per channel kind and a `,(0,f.jsx)(n.code,{children:`fallback`}),`,
a kernel theme a viewer without it uses.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`The viewer's`}),` `,(0,f.jsx)(n.code,{children:`ThemeProvider`}),` (under `,(0,f.jsx)(n.code,{children:`themes`}),`): `,(0,f.jsx)(n.code,{children:`name`}),`, `,(0,f.jsx)(n.code,{children:`label`}),`, `,(0,f.jsx)(n.code,{children:`category`}),`, `,(0,f.jsx)(n.code,{children:`kinds`}),`,
`,(0,f.jsx)(n.code,{children:`granularity`}),`, `,(0,f.jsx)(n.code,{children:`isApplicable(tc, kind, params)`}),` and `,(0,f.jsx)(n.code,{children:`create(tc, params, channel)`}),`, which builds
tables once in the graph's theme stage and returns a `,(0,f.jsx)(n.code,{children:`Theme`}),` whose `,(0,f.jsx)(n.code,{children:`value(loc)`}),` reads them,
allocating nothing; `,(0,f.jsx)(n.code,{children:`reduction`}),` says how zoomed-out cells reduce it (`,(0,f.jsx)(n.code,{children:`classes`}),` or `,(0,f.jsx)(n.code,{children:`mean`}),`).`]}),`
`]}),`
`,(0,f.jsxs)(n.p,{children:[`The example is `,(0,f.jsx)(n.code,{children:`interactions:kind`}),`: an interaction's kind through one vocabulary's colors and
glyph shapes (`,(0,f.jsx)(n.code,{children:`@molstar/seq-viewer/interactions`}),`, `,(0,f.jsx)(n.code,{children:`src/interactions/viewer/themes.ts`}),`).`]}),`
`,(0,f.jsx)(n.h2,{id:`a-color-scheme`,children:`A color scheme`}),`
`,(0,f.jsxs)(n.p,{children:[`Often a theme is not needed: a `,(0,f.jsx)(n.strong,{children:`color scheme`}),` is data a kernel theme already draws. A
`,(0,f.jsx)(n.code,{children:`ColorSchemeEntry`}),` under `,(0,f.jsx)(n.code,{children:`svs.colorSchemes`}),` has a `,(0,f.jsx)(n.code,{children:`name`}),` (`,(0,f.jsx)(n.code,{children:`<ns>:<name>`}),`), a `,(0,f.jsx)(n.code,{children:`label`}),`, a
`,(0,f.jsx)(n.code,{children:`description`}),`, its `,(0,f.jsx)(n.code,{children:`provenance`}),`, a `,(0,f.jsx)(n.code,{children:`colorblind`}),` flag and the `,(0,f.jsx)(n.code,{children:`scheme`}),`: letters (a dict or labeled
groups over its `,(0,f.jsx)(n.code,{children:`alphabets`}),`, a `,(0,f.jsx)(n.code,{children:`default`}),`), a `,(0,f.jsx)(n.code,{children:`sequential`}),` or `,(0,f.jsx)(n.code,{children:`diverging`}),` ramp, `,(0,f.jsx)(n.code,{children:`categorical`}),` colors,
or (registered only) a `,(0,f.jsx)(n.code,{children:`theme`}),` such as a `,(0,f.jsx)(n.code,{children:`rules`}),` table; each with an optional `,(0,f.jsx)(n.code,{children:`dark`}),` variant. The
legend's picker lists it where it fits and documents name it
(`,(0,f.jsx)(n.code,{children:`{"theme": "scheme", "params": {"name": "org.example:brand"}}`}),`). Page and examples: `,(0,f.jsx)(n.a,{href:`?path=/docs/seq-docs-color-schemes--docs`,children:`Color schemes`}),`.`]}),`
`,(0,f.jsx)(n.h2,{id:`a-host-preset`,children:`A host preset`}),`
`,(0,f.jsxs)(n.p,{children:[`A `,(0,f.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#theme-preset-and-style`,children:`preset`}),` is how a section is drawn: a geometry, render props over `,(0,f.jsx)(n.code,{children:`ctx.renderProps`}),`, a navigator,
and behaviors switched off or given params. Register a `,(0,f.jsx)(n.code,{children:`PresetEntry`}),` under `,(0,f.jsx)(n.code,{children:`presets`}),`, and a
document names it in a section's `,(0,f.jsx)(n.code,{children:`style`}),` (`,(0,f.jsx)(n.code,{children:`"style": "org.example:dense"`}),`, or inline,
`,(0,f.jsx)(n.code,{children:`{ "preset": "org.example:dense", "row_height": 14 }`}),`). The config item `,(0,f.jsx)(n.code,{children:`Presets.Alias`}),` maps a style
name to a preset, and `,(0,f.jsx)(n.code,{children:`Presets.Default`}),` picks one by layout and axis when the document names none.
The built-ins are `,(0,f.jsx)(n.code,{children:`DefaultPresets`}),` (`,(0,f.jsx)(n.code,{children:`tracks`}),`, `,(0,f.jsx)(n.code,{children:`msa`}),`, `,(0,f.jsx)(n.code,{children:`strip`}),`, `,(0,f.jsx)(n.code,{children:`wrapped`}),`, `,(0,f.jsx)(n.code,{children:`compact`}),`; `,(0,f.jsx)(n.code,{children:`presets.ts`}),`). A preset's navigator is a
name registered under `,(0,f.jsx)(n.code,{children:`navigators`}),`, such as `,(0,f.jsx)(n.code,{children:`ideogramNavigator(bands)`}),`: a chromosome's cytobands drawn as its strip
under the window, from the host's bands (`,(0,f.jsx)(n.code,{children:`CytoBands`}),`, UCSC's cytoBandIdeo rows;
`,(0,f.jsx)(n.a,{href:`?path=/story/seq-views-and-layouts-navigators--karyotype`,children:`the ideogram story`}),`).
Stories: `,(0,f.jsx)(n.a,{href:`?path=/story/seq-views-and-layouts-section-style--column-heads`,children:`Section style`}),`. A `,(0,f.jsx)(n.code,{children:`PresetEntry`}),` is a few
fields (`,(0,f.jsx)(n.code,{children:`name`}),`, `,(0,f.jsx)(n.code,{children:`geometry`}),`, `,(0,f.jsx)(n.code,{children:`render`}),`, `,(0,f.jsx)(n.code,{children:`navigator`}),`, `,(0,f.jsx)(n.code,{children:`behaviors`}),`), registered as `,(0,f.jsx)(n.code,{children:`{ presets: [Dense] }`}),`.`]}),`
`,(0,f.jsx)(n.h2,{id:`a-seqql-symbol`,children:`A SeqQL symbol`}),`
`,(0,f.jsxs)(n.p,{children:[(0,f.jsx)(n.a,{href:`?path=/docs/seq-docs-query-language--docs`,children:`SeqQL`}),` is the query language. A host's language is the base table plus its extensions' symbols, assembled per call with no module
state. A symbol is `,(0,f.jsx)(n.code,{children:`defineSymbol(spec)`}),`: a full name under the extension's namespace, an optional
short name (`,(0,f.jsx)(n.code,{children:`alias`}),`; `,(0,f.jsx)(n.code,{children:`null`}),` for the full name only), its kind, typed arguments, result, signature,
one-line doc, examples and error hints. `,(0,f.jsx)(n.code,{children:`createLanguage([{ symbols }])`}),` returns the language and
the registration issues (`,(0,f.jsx)(n.code,{children:`seqql.symbol.namespace`}),`, `,(0,f.jsx)(n.code,{children:`.duplicate`}),`, `,(0,f.jsx)(n.code,{children:`seqql.alias.reserved`}),`,
`,(0,f.jsx)(n.code,{children:`.collision`}),`: a refused alias leaves the symbol reachable by its full name). A `,(0,f.jsx)(n.strong,{children:`macro`}),` has
`,(0,f.jsx)(n.code,{children:`expand`}),`, replaced at bind time; it needs no runtime, and the JSON keeps it as written. Stories'
`,(0,f.jsx)(n.code,{children:`chain`}),` is one, in `,(0,f.jsx)(n.code,{children:`core/_test/query/bind.test.ts`}),` (a macro whose `,(0,f.jsx)(n.code,{children:`expand`}),` returns a `,(0,f.jsx)(n.code,{children:`Q`}),` expression; see the
`,(0,f.jsx)(n.a,{href:`?path=/docs/seq-docs-query-language--docs`,children:`Query language`}),` page for `,(0,f.jsx)(n.code,{children:`Q`}),`).`]}),`
`,(0,f.jsxs)(n.p,{children:[`A symbol that evaluates also needs a runtime: a `,(0,f.jsx)(n.code,{children:`QueryExtension`}),` (`,(0,f.jsx)(n.code,{children:`namespace`}),`, `,(0,f.jsx)(n.code,{children:`symbols`}),`,
`,(0,f.jsx)(n.code,{children:`runtimes`}),`, letter-class tables) for `,(0,f.jsx)(n.code,{children:`@molstar/seq-core/model/query`}),`. The viewer has no registry kind for query
extensions yet: a host passes its own `,(0,f.jsx)(n.code,{children:`QueryExtension`}),` to the query environment it runs queries with.
`,(0,f.jsx)(n.code,{children:`@molstar/seq-molstar-poc`}),`'s `,(0,f.jsx)(n.code,{children:`molstarQueryExtension`}),` is one: `,(0,f.jsx)(n.code,{children:`(molql "resn ZN around 3")`}),` runs a Mol*
selection on the linked structure, and the host passes Mol*'s own selection as `,(0,f.jsx)(n.code,{children:`(input structure)`}),`
(the Mol* story's query panel).`]}),`
`,(0,f.jsx)(n.h2,{id:`a-stream-provider`,children:`A stream provider`}),`
`,(0,f.jsxs)(n.p,{children:[`Streamed data (a genome, a lazy alignment, BigWig-like values) comes by region through the host's
loaders: `,(0,f.jsx)(n.code,{children:`loaders.stream(source)`}),` returns a `,(0,f.jsx)(n.code,{children:`StreamProvider`}),` for a source by its `,(0,f.jsx)(n.code,{children:`stream`}),` id or its
`,(0,f.jsx)(n.code,{children:`protocol`}),`, or `,(0,f.jsx)(n.code,{children:`null`}),` (`,(0,f.jsx)(n.code,{children:`svs.provider.unavailable`}),`). Its one method, `,(0,f.jsx)(n.code,{children:`fetch(request, signal)`}),`,
answers each `,(0,f.jsx)(n.code,{children:`StreamRequest`}),` (the manifest first: the coordinate systems, the levels, the shape)
with a `,(0,f.jsx)(n.code,{children:`DataPatch`}),` (`,(0,f.jsx)(n.code,{children:`manifest`}),`, `,(0,f.jsx)(n.code,{children:`items`}),`, `,(0,f.jsx)(n.code,{children:`bins`}),`, `,(0,f.jsx)(n.code,{children:`letters`}),` or `,(0,f.jsx)(n.code,{children:`rows`}),`); a resource it does not serve
rejects with `,(0,f.jsx)(n.code,{children:`StreamNotServed`}),`, reported once and never retried. Which regions to ask for, in what
order, and the cache under `,(0,f.jsx)(n.code,{children:`Stream.CacheBytes`}),` are the viewer's. The host's `,(0,f.jsx)(n.code,{children:`Loaders`}),` carry it as
`,(0,f.jsx)(n.code,{children:`stream: (source) => provider | null`}),`; the `,(0,f.jsx)(n.a,{href:`?path=/docs/seq-docs-streaming--docs#the-provider`,children:`Streaming`}),` page shows the
contract.`]}),`
`,(0,f.jsxs)(n.p,{children:[`The examples: the scripted provider behind the hg38 bench (`,(0,f.jsx)(n.code,{children:`core/_test/format/stream-provider.ts`}),`),
and `,(0,f.jsx)(n.code,{children:`@molstar/seq-core/stream/tiles`}),`' `,(0,f.jsx)(n.code,{children:`tilesStream()`}),`, which maps every `,(0,f.jsx)(n.code,{children:`seqstar-tiles/1`}),` source (a
`,(0,f.jsx)(n.code,{children:`protocol`}),` and a `,(0,f.jsx)(n.code,{children:`uri`}),`) to a provider over the tile client. The `,(0,f.jsx)(n.a,{href:`?path=/docs/seq-docs-streaming--docs`,children:`Streaming`}),` page covers the
protocol, what the viewer does with it, and a provider written and run live.`]}),`
`,(0,f.jsx)(n.h2,{id:`the-chrome`,children:`The chrome`}),`
`,(0,f.jsxs)(n.p,{children:[`The viewer's chrome (the view tabs, a section's header and its switches, the legend, the player, export,
the issue badge, search, the states) is a set of components, the same names in `,(0,f.jsx)(n.code,{children:`@molstar/seq-viewer/react`}),`
and `,(0,f.jsx)(n.code,{children:`@molstar/seq-viewer/dom`}),`. A host places any of them itself, against the viewer's context, and sets its
slot to `,(0,f.jsx)(n.code,{children:`"none"`}),` (or picks `,(0,f.jsx)(n.code,{children:`chrome: "clean"`}),`) so the viewer does not place it too:`]}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`<SeqViewerProvider context={ctx} ui={{ chrome: "clean" }}>
  <header>
    <ViewTabs context={ctx} />
    <SectionSwitches context={ctx} section="main" />
    <Export context={ctx} />
  </header>
  <SeqViewerLayout />
  <Legend context={ctx} />
</SeqViewerProvider>
`})}),`
`,(0,f.jsxs)(n.p,{children:[(0,f.jsx)(n.code,{children:`Export`}),` shows only when the context registers the SVG export (`,(0,f.jsx)(n.code,{children:`SeqViewer`}),` and the element do it for the
context they make; a host's own context registers `,(0,f.jsx)(n.code,{children:`browserExportAction`}),` from `,(0,f.jsx)(n.code,{children:`@molstar/seq-viewer/dom`}),`).`]}),`
`,(0,f.jsxs)(n.p,{children:[`In the DOM a part is a function that mounts into an element and returns its `,(0,f.jsx)(n.code,{children:`dispose`}),`:
`,(0,f.jsx)(n.code,{children:`const tabs = ViewTabs(header, ctx, { ui })`}),`, with `,(0,f.jsx)(n.code,{children:`ui`}),` the mounted UI (`,(0,f.jsx)(n.code,{children:`mountSeqViewer(...).ui`}),`, the
element's `,(0,f.jsx)(n.code,{children:`mountedUI`}),`, or `,(0,f.jsx)(n.code,{children:`createDomUI(ctx)`}),`) or none (the default hints and menus). The element replaces
its `,(0,f.jsx)(n.code,{children:`mountedUI`}),` when it remounts (a new `,(0,f.jsx)(n.code,{children:`chrome`}),`, `,(0,f.jsx)(n.code,{children:`ui`}),`, `,(0,f.jsx)(n.code,{children:`slots`}),` or `,(0,f.jsx)(n.code,{children:`spec`}),`) and says so with `,(0,f.jsx)(n.code,{children:`seq-ui`}),`: a host
mounts its parts again on it. A host's own composition starts from the root: `,(0,f.jsx)(n.code,{children:`SeqViewerRoot`}),` with
`,(0,f.jsx)(n.code,{children:`ViewSurface`}),` (React), `,(0,f.jsx)(n.code,{children:`mountSeqViewerRoot`}),` with `,(0,f.jsx)(n.code,{children:`createDomUI`}),` and `,(0,f.jsx)(n.code,{children:`ViewSurface`}),` (DOM); `,(0,f.jsx)(n.code,{children:`chrome: "clean"`}),`
(the default) and `,(0,f.jsx)(n.code,{children:`"full"`}),` are the viewer's two (`,(0,f.jsx)(n.code,{children:`ChromeCompositions`}),`). The look is
`,(0,f.jsx)(n.code,{children:`@molstar/seq-viewer/skin.css`}),`: map the `,(0,f.jsx)(n.code,{children:`--seq-*`}),` tokens (and the chrome's optional ones, `,(0,f.jsx)(n.code,{children:`--seq-chrome`}),`,
`,(0,f.jsx)(n.code,{children:`--seq-radius`}),`, …) on any ancestor, and call `,(0,f.jsx)(n.code,{children:`refreshSkin(ctx)`}),` (`,(0,f.jsx)(n.code,{children:`@molstar/seq-viewer/canvas`}),`) after changing
them inline; `,(0,f.jsx)(n.a,{href:`?path=/story/seq-cases-default-uis--composed`,children:`the chrome placed by the host`}),` maps them
onto Mol* Prism's.`]})]})}function d(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=r(),a(),n(),c(),o()})))()}p();export{d as default};