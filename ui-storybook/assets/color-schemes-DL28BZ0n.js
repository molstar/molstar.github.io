import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t,u as n}from"./blocks-DB-FaXqI.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{i,r as a}from"./react-Dyi61YEg.js";import{Et as o,Tt as s,_n as c,an as l,ct as u,dn as d,on as f,st as p,vn as m,wt as h}from"./builder-a-gDtGqV.js";import{m as g,t as _}from"./live-B1TANyMy.js";import{d as v,o as y,s as b,u as x}from"./seqstar-prism-C8YUN_JZ.js";var S,C,w;function T(){return(T=e((()=>{S=`_swatches_1e4rq_11`,C=`_swatch_1e4rq_11`,w={swatches:S,swatch:C}})))()}function E(e,t){let n=d(A,{name:e.name},{dark:t}),r=n?A.get(`themes`,n.theme)?.expand:void 0,i=n&&r?r(n.params??{},`color`):n,a=i?.params??{};if(i?.theme===`letter`)return[...new Set(Object.values(a.colors))].slice(0,12);if(i?.theme===`field_palette`){let e=a.palette.colors,t=Math.max(1,Math.floor(e.length/8));return e.filter((e,n)=>n%t===0).slice(0,10)}return[...new Set((a.rules??[]).flatMap(e=>e.color?[e.color]:[]))]}function D({colors:e}){return(0,k.jsx)(`span`,{className:w.swatches,children:e.map(e=>(0,k.jsx)(`span`,{className:w.swatch,style:{background:c.toHex(c.decodePrimary(e))}},e))})}function O(){return b(`tokens`),(0,k.jsxs)(`table`,{className:v.table,children:[(0,k.jsx)(`thead`,{children:(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`th`,{children:`Scheme`}),(0,k.jsx)(`th`,{children:`Fits`}),(0,k.jsx)(`th`,{children:`Colorblind-safe`}),(0,k.jsx)(`th`,{children:`Light`}),(0,k.jsx)(`th`,{children:`Dark`}),(0,k.jsx)(`th`,{children:`Provenance`})]})}),(0,k.jsx)(`tbody`,{children:l.map(e=>(0,k.jsxs)(`tr`,{children:[(0,k.jsxs)(`td`,{children:[(0,k.jsx)(`code`,{children:e.name}),` `,e.label,`: `,e.description]}),(0,k.jsx)(`td`,{children:j(e)}),(0,k.jsx)(`td`,{children:e.colorblind?`yes`:``}),(0,k.jsx)(`td`,{children:(0,k.jsx)(D,{colors:E(e,!1)})}),(0,k.jsx)(`td`,{children:(0,k.jsx)(D,{colors:E(e,!0)})}),(0,k.jsx)(`td`,{children:e.provenance})]},e.name))})]})}var k,A,j,M;function N(){return(N=e((()=>{m(),s(),f(),u(),x(),T(),y(),k=r(),A=h(),o(A,p),j=e=>e.scheme.kind===`letters`||e.scheme.kind===`theme`?`${e.scheme.alphabets.join(`, `)} letters${e.scheme.kind===`theme`&&e.scheme.columns?` (alignment)`:``}`:e.scheme.kind===`categorical`?`categories`:`values (${e.scheme.kind})`,M=`{ "kind": "layer", "ref": "family.rows",
  "params": { "type": "rows", "color": { "theme": "scheme", "params": { "name": "clustal_x" } } } }

{ "kind": "layer", "ref": "plddt",
  "params": { "type": "color", "data": "plddt-values",
    "color": { "theme": "scheme", "params": { "name": "viridis", "domain": [0, 100] } } } }`})))()}function P(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,...i(),...e.components};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(t,{title:`Seq*/Docs/Color schemes`}),`
`,(0,I.jsx)(n.h1,{id:`color-schemes`,children:`Color schemes`}),`
`,(0,I.jsxs)(n.p,{children:[`People are particular about colors, so Seq* makes them easy to switch. A `,(0,I.jsx)(n.strong,{children:`color scheme`}),` is a
named, curated way to color one kind of thing: residue letters (Clustal X, Zappo), numbers
(Viridis) or categories (Okabe–Ito). It is data, registered by name, and it stands for one of the
`,(0,I.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#theme-preset-and-style`,children:`themes`}),` a layer already has (`,(0,I.jsx)(n.code,{children:`letter`}),`,
`,(0,I.jsx)(n.code,{children:`field_palette`}),` or a `,(0,I.jsx)(n.code,{children:`rules`}),` table), so it adds nothing to drawing: a letter costs what it cost.
See them all, light and dark, in the `,(0,I.jsx)(n.a,{href:`?path=/story/seq-themes-color-schemes--gallery`,children:`gallery`}),`; switch
them live in the `,(0,I.jsx)(n.a,{href:`?path=/story/seq-themes-color-schemes--picker`,children:`picker`}),`.`]}),`
`,(0,I.jsx)(n.h2,{id:`what-a-scheme-fits`,children:`What a scheme fits`}),`
`,(0,I.jsxs)(n.p,{children:[`A `,(0,I.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#track-layer-and-renderer`,children:`layer`}),`'s color is about one of
three things: `,(0,I.jsx)(n.strong,{children:`letters`}),` of an `,(0,I.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#molecule`,children:`alphabet`}),` (a
`,(0,I.jsx)(n.code,{children:`letters`}),`, `,(0,I.jsx)(n.code,{children:`rows`}),` or `,(0,I.jsx)(n.code,{children:`logo`}),` layer), `,(0,I.jsx)(n.strong,{children:`values`}),` (a layer whose data are numbers), or `,(0,I.jsx)(n.strong,{children:`categories`}),`
(ranges, points, pairs colored by a field). Each scheme says what it fits: its alphabets, and for
Percent identity, which reads each column's consensus, an
`,(0,I.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#alignment-rows-and-columns`,children:`alignment`}),` whose columns are held
(Clustal X reads the column's composition too, and colors a lone protein as a column of its own).
A scheme of another kind (Viridis on letters) is drawn as the layer's default and reported
(`,(0,I.jsx)(n.code,{children:`svs.render.theme`}),`).`]}),`
`,(0,I.jsx)(n.h2,{id:`four-ways-to-pick-one`,children:`Four ways to pick one`}),`
`,(0,I.jsxs)(n.p,{children:[(0,I.jsx)(n.strong,{children:`In the document`}),`, a layer's `,(0,I.jsx)(n.code,{children:`color`}),` names the scheme through the `,(0,I.jsx)(n.code,{children:`scheme`}),` theme; value
schemes take a `,(0,I.jsx)(n.code,{children:`domain`}),`, a `,(0,I.jsx)(n.code,{children:`field`}),` and `,(0,I.jsx)(n.code,{children:`reverse`}),`:`]}),`
`,(0,I.jsx)(_,{code:M,language:`json`}),`
`,(0,I.jsxs)(n.p,{children:[(0,I.jsx)(n.strong,{children:`In the builder`}),`, `,(0,I.jsx)(n.code,{children:`b.colors`}),` has each scheme as a typed constant (value schemes as functions of
their options), `,(0,I.jsx)(n.code,{children:`auto`}),` for a sensible default per subject (Clustal X on a protein alignment, Zappo on
a protein, Nucleotide on DNA and RNA, Viridis on values, Okabe–Ito on categories), and `,(0,I.jsx)(n.code,{children:`list`}),` for the
schemes that fit. The `,(0,I.jsx)(n.a,{href:`?path=/story/seq-themes-color-schemes--gallery`,children:`Gallery`}),` story builds its layers this way.`]}),`
`,(0,I.jsxs)(n.p,{children:[(0,I.jsx)(n.strong,{children:`At runtime`}),`, click a legend group's title: where more than one scheme fits its layer, the title
has a quiet dotted underline (a palette icon shows on hover, its label naming the scheme shown) and
opens a menu of "document" (the document's own color) and the schemes that fit, colorblind-safe ones
marked. Tracks whose legends are identical share one group ("Transcripts (10)"), and a pick there
recolors all of them. A track with nothing to list has no legend row; its `,(0,I.jsx)(n.strong,{children:`⋯`}),` menu has
`,(0,I.jsx)(n.strong,{children:`Colors ▸`}),`, the same list, which also gives one track of a group its own scheme. A pick is UI
state per layer, as the section header's Style switch overrides a section's preset: it is never
written into the document unless the host asks, it survives patches, and a new document clears it.
`,(0,I.jsx)(n.code,{children:`UI.ColorSchemes`}),` turns the pickers off; `,(0,I.jsx)(n.code,{children:`UI.ColorSchemeWrites`}),` makes them write. The legend is
collapsed by default (a track header's tooltip shows that track's legend): open it with its toggle,
a UI's `,(0,I.jsx)(n.code,{children:`legend: "expanded"`}),` option, or `,(0,I.jsx)(n.code,{children:`{"command": "seqv:legend", "params": {"open": true}}`}),`.`]}),`
`,(0,I.jsxs)(n.p,{children:[`The host's side is the `,(0,I.jsx)(n.code,{children:`layer.colorScheme`}),` action (`,(0,I.jsx)(n.code,{children:`ctx.actions.run("layer.colorScheme", { layer, scheme })`}),`; `,(0,I.jsx)(n.code,{children:`write: true`}),`
writes the pick into the document, `,(0,I.jsx)(n.code,{children:`scheme: null`}),` returns to the document's own color) and `,(0,I.jsx)(n.code,{children:`ctx.ui.colorSchemes`}),`, the
picks held. The `,(0,I.jsx)(n.a,{href:`?path=/story/seq-themes-color-schemes--picker`,children:`Picker`}),` and
`,(0,I.jsx)(n.a,{href:`?path=/story/seq-themes-color-schemes--many-tracks`,children:`Many tracks`}),` stories show it running.`]}),`
`,(0,I.jsxs)(n.p,{children:[(0,I.jsx)(n.strong,{children:`By command`}),`, `,(0,I.jsx)(n.code,{children:`seqv:colorScheme`}),` does the same from a description's command link or the Stories
agent; a scheme that does not fit the layer is refused. The command is
`,(0,I.jsx)(n.code,{children:`{"command": "seqv:colorScheme", "params": {"layer": "family.rows", "scheme": "zappo"}}`}),`.`]}),`
`,(0,I.jsxs)(n.p,{children:[(0,I.jsx)(n.strong,{children:`Dark mode`}),` needs nothing: on a dark skin a scheme's dark variant draws by itself. A scheme gives
one, says `,(0,I.jsx)(n.code,{children:`"same"`}),`, or gets one derived by a single rule: letters and categories keep their colors
(they are identities, and each cell's letter ink follows its fill), a sequential ramp lighter at its
low end is reversed (the more, the brighter), and a diverging ramp has each half reversed, so its
center is dark and each hue stays on its side.`]}),`
`,(0,I.jsx)(n.h2,{id:`changing-a-color-range`,children:`Changing a color range`}),`
`,(0,I.jsxs)(n.p,{children:[`A legend ramp over a scheme or a continuous palette has its two ends as number fields. Type a new end
and the layer recolors; the range may be wider than the data (the colors then use part of the ramp) or
narrower (values beyond an end take its color). A thin bar under the ramp marks where the data sits, and
"reset" returns to the document's range. The pick is UI state, as a scheme pick is. The same from a
command, `,(0,I.jsx)(n.code,{children:`{"command": "seqv:colorRange", "params": {"layer": "family.conservation", "range": [0, 20]}}`}),`
(`,(0,I.jsx)(n.code,{children:`range: null`}),` resets). The `,(0,I.jsx)(n.a,{href:`?path=/story/seq-themes-color-schemes--color-range`,children:`Color range`}),` story has a
strip over the data's range, a wider one and a narrower one.`]}),`
`,(0,I.jsx)(n.h2,{id:`one-scale-across-layers`,children:`One scale across layers`}),`
`,(0,I.jsxs)(n.p,{children:[`Layers that name the same `,(0,I.jsx)(n.code,{children:`domain_group`}),` (`,(0,I.jsx)(n.code,{children:`"domain_group": "signal"`}),` on each) share every normalized domain they resolve: the union of
their data's, per field. Two values tracks (or a values track and a matrix) then color the same
number the same way, bars share a y scale, and the legend lists the ramp once. A layer's own
`,(0,I.jsx)(n.code,{children:`domain`}),` (on `,(0,I.jsx)(n.code,{children:`values`}),` and `,(0,I.jsx)(n.code,{children:`matrix`}),`) or a palette's `,(0,I.jsx)(n.code,{children:`value_domain`}),` end that is not `,(0,I.jsx)(n.code,{children:`null`}),` wins in
its layer; when a layer gives a `,(0,I.jsx)(n.code,{children:`domain`}),`, the group's is the union of the given ones, for all of
its members. A palette over another field takes that field's range over the members' data the same
way. Layers of a track template are not shared (their instances are not nodes).`]}),`
`,(0,I.jsxs)(n.p,{children:[`The `,(0,I.jsx)(n.a,{href:`?path=/story/seq-themes-color-schemes--shared-scales`,children:`Shared scales`}),` story shows two signals with
different ranges, first with a domain each, then in a group, then with one explicit domain.`]}),`
`,(0,I.jsx)(n.h2,{id:`sizes`,children:`Sizes`}),`
`,(0,I.jsxs)(n.p,{children:[`Color is one channel a layer draws through a theme; its size channels are the others: a pair's `,(0,I.jsx)(n.code,{children:`width`}),`, its apex
`,(0,I.jsx)(n.code,{children:`height`}),` (a share of the band) and its ends' `,(0,I.jsx)(n.code,{children:`radius`}),`, a feature's `,(0,I.jsx)(n.code,{children:`thickness`}),` (a share of its lane), a point's
`,(0,I.jsx)(n.code,{children:`radius`}),`, a variant's and a secondary structure's `,(0,I.jsx)(n.code,{children:`thickness`}),` (a share of its mark or shape), a bar's `,(0,I.jsx)(n.code,{children:`thickness`}),`.
They take `,(0,I.jsx)(n.code,{children:`uniform`}),`, `,(0,I.jsx)(n.code,{children:`rules`}),`, or `,(0,I.jsx)(n.code,{children:`field_scale`}),`: a field through a linear, sqrt or log scale into a range, clamped, or
a string field through a `,(0,I.jsx)(n.code,{children:`map`}),`. A size changes how much of its slot an element fills, never the slot. A matrix's
`,(0,I.jsx)(n.code,{children:`height`}),` is reported and not drawn: its bands are image tiles. See
`,(0,I.jsx)(n.a,{href:`?path=/story/seq-themes-size-themes--by-size`,children:`Size themes`}),`.`]}),`
`,(0,I.jsxs)(n.p,{children:[(0,I.jsx)(n.strong,{children:`The legend`}),` lists a `,(0,I.jsx)(n.code,{children:`field_scale`}),` as its field's name and three samples, the domain's ends and middle, each drawn
as its channel draws it (a stroke for a width, a bar for a share of a band, a dot for a radius) at its size through
the scale; a string field's map lists its entries. Where a ramp in the same layer colors by the same field, the
samples take the ramp's color at their value, so "thick and dark" reads as one scale. A labeled `,(0,I.jsx)(n.code,{children:`rules`}),` size lists its
labels; a `,(0,I.jsx)(n.code,{children:`uniform`}),` size lists nothing (one size names nothing).`]}),`
`,(0,I.jsxs)(n.p,{children:[(0,I.jsx)(n.strong,{children:`Sashimi.`}),` `,(0,I.jsx)(n.code,{children:`b.preset.sashimi(section, junctions)`}),` draws splice junctions as `,(0,I.jsx)(n.code,{children:`pairs`}),` stroked by read count and
labeled with it (`,(0,I.jsx)(n.code,{children:`labels: true`}),`: an arc's `,(0,I.jsx)(n.code,{children:`label`}),`, else its width's field, under its apex where it fits), a track per
strand, the `,(0,I.jsx)(n.code,{children:`+`}),` strand's rising from the line between them and the `,(0,I.jsx)(n.code,{children:`-`}),` strand's hanging below it. See
`,(0,I.jsx)(n.a,{href:`?path=/story/seq-themes-size-themes--sashimi`,children:`Sashimi`}),`.`]}),`
`,(0,I.jsx)(n.h2,{id:`colorblind-safe-choices`,children:`Colorblind-safe choices`}),`
`,(0,I.jsxs)(n.p,{children:[`Eight of the sixteen are designed or rated for the common color vision deficiencies: `,(0,I.jsx)(n.strong,{children:`Viridis`}),`,
`,(0,I.jsx)(n.strong,{children:`Cividis`}),` (built for them) and `,(0,I.jsx)(n.strong,{children:`Magma`}),` for values; `,(0,I.jsx)(n.strong,{children:`Blues`}),` and `,(0,I.jsx)(n.strong,{children:`Red–blue`}),` (ColorBrewer's
rating) for sequential and diverging values; `,(0,I.jsx)(n.strong,{children:`Okabe–Ito`}),` for categories; `,(0,I.jsx)(n.strong,{children:`Nucleotide
(colorblind-safe)`}),`, the Okabe–Ito colors on A, C, G and T or U; and `,(0,I.jsx)(n.strong,{children:`Percent identity`}),`, one hue in
three steps. Clustal X, Zappo and Taylor lean on red against green, so for readers with a red–green
deficiency pair them with a second cue (the legend's labels, Percent identity, a conservation
track). Category 10 and Tableau 10 do not separate all their colors for everyone; prefer Okabe–Ito
for up to seven categories.`]}),`
`,(0,I.jsx)(n.h2,{id:`your-own-palette`,children:`Your own palette`}),`
`,(0,I.jsxs)(n.p,{children:[(0,I.jsx)(n.strong,{children:`In a document`}),`, an inline scheme: letters as a dict and as labeled groups (the legend lists the
labels), a `,(0,I.jsx)(n.code,{children:`default`}),` for the alphabet's other letters, and an optional `,(0,I.jsx)(n.code,{children:`dark`}),` variant (derived when
absent); a named scheme with a few letters recolored by `,(0,I.jsx)(n.code,{children:`overrides`}),`; or a ramp of stops.
Validation names what is wrong and what to write: a bad color is `,(0,I.jsx)(n.code,{children:`svs.color.invalid`}),`, a letter the
alphabets lack is `,(0,I.jsx)(n.code,{children:`svs.scheme.letter`}),` (with the alphabet's letters), an unknown name is
`,(0,I.jsx)(n.code,{children:`svs.scheme.unknown`}),` (with the registered ones), and `,(0,I.jsx)(n.code,{children:`overrides`}),` on a value scheme says to write a
custom one.`]}),`
`,(0,I.jsxs)(n.p,{children:[(0,I.jsx)(n.strong,{children:`In the builder`}),`, `,(0,I.jsx)(n.code,{children:`b.colors.custom`}),` writes the same, and `,(0,I.jsx)(n.code,{children:`b.colors.from`}),` derives from a scheme.`]}),`
`,(0,I.jsxs)(n.p,{children:[(0,I.jsx)(n.strong,{children:`At runtime`}),`, a host registers a named scheme, a `,(0,I.jsx)(n.code,{children:`ColorSchemeEntry`}),` under `,(0,I.jsx)(n.code,{children:`svs.colorSchemes`}),`
(namespaced, as every extension's name). The picker lists it after the built-ins and documents can
name it; a document naming an extension's scheme that a viewer has not registered is drawn as the
layer's default with a warning. There is no in-picker editor: a palette someone cares about is
worth a name, and a settings page that registers one is the host's.
See `,(0,I.jsx)(n.a,{href:`?path=/docs/seq-docs-extending--docs#a-color-scheme`,children:`Extending`}),`.`]}),`
`,(0,I.jsxs)(n.p,{children:[`The `,(0,I.jsx)(n.a,{href:`?path=/story/seq-themes-color-schemes--custom-palette`,children:`Your own palette`}),` story shows each of the three, light and
dark.`]}),`
`,(0,I.jsx)(n.h2,{id:`the-schemes-and-where-they-come-from`,children:`The schemes and where they come from`}),`
`,(0,I.jsxs)(n.p,{children:[`Each is written from its published definition and cited; no GPL code is copied. Jalview's residue
schemes are GPL software, so Clustal X and Percent identity are written from Jalview's published
rules and thresholds, and the letter colors come through Nightingale (MIT), which publishes
Jalview's values. The value and categorical palettes are MolViewSpec's lists (copied from Mol*,
MIT), so a value gets the same color here and in a Mol* scene. Not in the set: Jalview's helix,
strand and turn propensity and buried index are `,(0,I.jsx)(n.code,{children:`letter`}),` dictionaries
(`,(0,I.jsx)(n.code,{children:`{"theme": "letter", "params": {"colors": "HelixPropensity"}}`}),`); BLOSUM62 coloring scores a letter
against its column's consensus, a measure the `,(0,I.jsx)(n.code,{children:`rules`}),` theme does not have.`]}),`
`,(0,I.jsx)(O,{})]})}function F(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,I.jsx)(t,{...e,children:(0,I.jsx)(P,{...e})}):P(e)}var I;function L(){return(L=e((()=>{I=r(),a(),n(),g(),N()})))()}L();export{F as default};