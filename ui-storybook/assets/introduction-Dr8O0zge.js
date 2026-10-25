import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t,u as n}from"./blocks-DB-FaXqI.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{i,r as a}from"./react-Dyi61YEg.js";import{a as o,i as s,m as c,r as l,s as u,t as d}from"./live-C6UdM-1L.js";var f;function p(){return(p=e((()=>{f=`/**
 * Copyright (c) 2026 mol* contributors, licensed under MIT, See LICENSE file for more info.
 *
 * Developed in collaboration with Anyfold <https://anyfold.ai/>
 *
 * @author David Sehnal <david.sehnal@gmail.com>
 */

// The Introduction's example, shown on the page as written (imported raw) and run beside it: one document, mounted by
// the React UI, by the DOM UI, rendered by Nightingale, and drawn headless as SVG.
import { createSeqViewSpec } from '@molstar/seq-core/builder';
import { compile, createRegistries, KernelRegistry, register, resolveView } from '@molstar/seq-core/format';
import { materialize, NightingaleSupported } from '@molstar/seq-nightingale';
import { mount } from '@molstar/seq-nightingale/mount';
import { defineSeqViewer } from '@molstar/seq-viewer/dom';
import { SeqViewer } from '@molstar/seq-viewer/react';
import { renderSvg } from '@molstar/seq-viewer/svg';
import '@molstar/seq-viewer/skin.css';

// A document: data (a sequence and an annotation over it) and a view of tracks. Synthetic data.
const b = createSeqViewSpec({ title: 'A synthetic protein' });
const protein = b.data.sequence({
  ref: 'protein',
  label: 'Protein',
  value: 'MSDNELKQLAEEGRKLVTALSPEDAIRWLHQNGFDVSKAIELLKGGDPSTVYYAVKIGNTEEAKQFLRDHGF',
});
const domains = b.data.annotation({
  ref: 'domains',
  geometry: 'ranges',
  target: protein,
  value: { start: [4, 40], stop: [30, 68], label: ['Helical bundle', 'Binding loop'] },
});
const view = b.view({ ref: 'tracks', label: 'Tracks' }).block({ sequence: protein });
view.track({ label: '' }).ruler();
view.track({ label: 'Residues' }).letters();
view.track({ label: 'Domains' }).ranges({ data: domains, labels: true });
export const doc = b.getDocument();

// React: the default UI as a component, \`clean\` by default (the canvas, hover and the tooltip); \`ui={{ chrome: "full" }}\`
// adds the tabs, section headers, track menus and the legend.
export const ReactExample = () => <SeqViewer document={doc} />;

// DOM: the <seq-viewer> element, no framework.
export function mountDomExample(host: HTMLElement) {
  defineSeqViewer();
  const element = document.createElement('seq-viewer');
  element.document = doc;
  host.append(element);
  return () => element.remove();
}

// Nightingale, the format's second renderer: the same document compiled (all by value: nothing to load), its view
// resolved for what Nightingale draws, materialized as Nightingale's components and mounted. \`issues\`: what it cannot draw.
const registries = createRegistries();
register(registries, [KernelRegistry]);
export async function mountNightingaleExample(host: HTMLElement) {
  const { set } = await compile(doc, registries, { load: () => Promise.reject(new Error('all by value')) });
  const resolved = resolveView(doc, set, 'tracks', registries, NightingaleSupported);
  const { root, issues } = materialize(resolved.view, set);
  const mounted = mount(root, host, { view: resolved.view, set });
  return { mounted, issues: [...resolved.issues, ...issues] };
}

// Headless: the same document as an SVG string, on its skin's surface (Node or the browser; no DOM).
export const svgExample = () => renderSvg(doc, { width: 640, background: true });
`})))()}function m(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...i(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(t,{title:`Seq*/Docs/Introduction`}),`
`,(0,g.jsx)(n.h1,{id:`seq`,children:`Seq*`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.strong,{children:`Seq*`}),` is a library for viewing sequences in their biological context, from a single protein to a whole genome. It is built on
one coordinate model: positions, and the maps between them (a protein's residues onto its gene's codons across introns,
an alignment's rows onto its columns, a design onto its wild type, a chain onto its structure), so data placed on any of
these shows on the others. A view is a document in `,(0,g.jsx)(n.strong,{children:`SeqViewSpec`}),`, Seq*'s format, as MolViewSpec is for Mol*'s 3D
views; the Seq* viewer renders it, and so does Nightingale. Here is one document, rendered live by the Seq* viewer
(hover a residue or a domain):`]}),`
`,(0,g.jsx)(o,{}),`
`,(0,g.jsxs)(n.p,{children:[`The very same document rendered by Nightingale, EBI's components, the format's second renderer
(`,(0,g.jsx)(n.code,{children:`@molstar/seq-nightingale`}),`): the document is resolved for what Nightingale draws, materialized as its components and
mounted; what it cannot draw, it reports.`]}),`
`,(0,g.jsx)(l,{}),`
`,(0,g.jsx)(n.p,{children:`The two are linked, by this page's own code and the public APIs of both (Nightingale is a host of the viewer, as the
Mol* view is in the 3D stories): hover or select in one and the same positions light in the other, and zoom or pan
one and the other shows the same range (every position either touches; the viewer does not zoom in past its largest
cell).`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.strong,{children:`Linked to 3D.`}),` Prism, the next version of the Mol* viewer, shows AlphaFill's model of CYP3A4 with its ligands; the
sequence above the structure is a Seq* view of it. Hover or select residues in either and the other follows. Hover a
track and click the paintbrush at its left to color the structure by it (pLDDT, secondary structure; the residue track
restores the default coloring), or right-click the track. A preview, still under development; the model loads from
AlphaFill.`]}),`
`,(0,g.jsx)(s,{}),`
`,(0,g.jsx)(n.p,{children:`The document, built with the builder, and the ways it is shown (one file, run on this page):`}),`
`,(0,g.jsx)(d,{code:f}),`
`,(0,g.jsxs)(n.p,{children:[`Neither UI needs more than the document: the viewer spec (its registry entries, behaviors and config) defaults to
`,(0,g.jsx)(n.code,{children:`DefaultSeqViewerSpec()`}),`, and a document whose data is all by value needs no loaders (the host's I/O, passed in
`,(0,g.jsx)(n.code,{children:`ports`}),`). The same file also mounts the DOM UI and draws the document headless as an SVG string:`]}),`
`,(0,g.jsx)(u,{}),`
`,(0,g.jsxs)(n.p,{children:[`Hover a track's name: its tooltip shows the track's legend, and the full text where the name is cut.
The whole legend sits collapsed under the tracks ("Legend"): a UI's `,(0,g.jsx)(n.code,{children:`legend`}),` option (`,(0,g.jsx)(n.code,{children:`"collapsed"`}),`,
`,(0,g.jsx)(n.code,{children:`"expanded"`}),` or `,(0,g.jsx)(n.code,{children:`"hidden"`}),`, also the element's `,(0,g.jsx)(n.code,{children:`legend`}),` attribute), the `,(0,g.jsx)(n.code,{children:`view.legend`}),` action or the
`,(0,g.jsx)(n.code,{children:`seqv:legend`}),` command (`,(0,g.jsx)(n.code,{children:`{"open": true | false | "toggle"}`}),`) opens it.`]}),`
`,(0,g.jsxs)(n.p,{children:[`In a real host the spec adds registry entries (an extension's, `,(0,g.jsx)(n.code,{children:`{ svs: … }`}),` for the format's
providers) and the ports add loaders for sources by URI or host file; the
`,(0,g.jsx)(n.a,{href:`?path=/story/seq-cases-default-uis--description-links`,children:`DOM UI`}),` and
`,(0,g.jsx)(n.a,{href:`?path=/story/seq-cases-default-uis--case-10`,children:`React UI`}),` stories show both.`]}),`
`,(0,g.jsx)(n.h2,{id:`what-seq-is`,children:`What Seq* is`}),`
`,(0,g.jsxs)(n.p,{children:[`Seq* is the spec first, with a data model, a query language (SeqQL) and a typed builder around it. A
`,(0,g.jsx)(n.strong,{children:`SeqViewSpec`}),` document says what to show: sequences, alignments, trees, numberings and
annotations as data, and views of sections, tracks and layers over them
(`,(0,g.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs`,children:`Concepts`}),` defines each); it never says how a viewer draws it. The Seq* viewer,
the reference renderer, decides how: layouts, navigators, sizes, levels of detail, gestures and the skin; Nightingale
is a second renderer of the same documents. Stories Untold is its first host (a sequence panel beside each scene's 3D state); the Mol* adapter
(Mol*'s, in the Prism viewer: `,(0,g.jsx)(n.code,{children:`@molstar/prism-viewer/sequence/molstar`}),`) links a viewer to a Mol* canvas.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Seq* is a set of packages under `,(0,g.jsx)(n.code,{children:`packages/sequences/`}),`. These pages are for a developer who embeds it or
extends it: `,(0,g.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs`,children:(0,g.jsx)(n.strong,{children:`Concepts`})}),` explains the vocabulary (molecules, units, coordinate systems,
sections, layers and the rest), `,(0,g.jsx)(n.strong,{children:`Principles`}),` says what holds everywhere, `,(0,g.jsx)(n.strong,{children:`Features`}),` lists what is built with a
story for each, `,(0,g.jsx)(n.strong,{children:`Format`}),` and `,(0,g.jsx)(n.strong,{children:`Query language`}),` introduce the two languages, and `,(0,g.jsx)(n.strong,{children:`Extending`}),`
shows where new renderers, themes, presets, symbols and stream providers plug in.`]}),`
`,(0,g.jsx)(n.h2,{id:`the-packages`,children:`The packages`}),`
`,(0,g.jsxs)(n.p,{children:[`Two packages, `,(0,g.jsx)(n.code,{children:`@molstar/seq-core`}),` (platform-free; of other packages only Mol*'s MessagePack, zip and synchronous task context) and `,(0,g.jsx)(n.code,{children:`@molstar/seq-viewer`}),`, and two adapters. Each
folder is an entry; a bundle keeps only what it imports.`]}),`
`,(0,g.jsxs)(n.table,{children:[(0,g.jsx)(n.thead,{children:(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.th,{children:`Entry`}),(0,g.jsx)(n.th,{children:`What it holds`})]})}),(0,g.jsxs)(n.tbody,{children:[(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`@molstar/seq-core/model`})}),(0,g.jsx)(n.td,{children:`The data model: molecules, numberings, alignments, annotations as typed tables, coordinate systems and the maps between them, extents, loci, MessagePack. No DOM.`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`@molstar/seq-core/format`})}),(0,g.jsxs)(n.td,{children:[`SeqViewSpec 1.0: the parameter tables, `,(0,g.jsx)(n.code,{children:`validate`}),` and its issue codes, readers for the data formats, load and resolve, patches, the generated reference, MessagePack; the CLIs `,(0,g.jsx)(n.code,{children:`svs-validate`}),`, `,(0,g.jsx)(n.code,{children:`svs-convert`}),`, `,(0,g.jsx)(n.code,{children:`svs-print-schema`}),`.`]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`@molstar/seq-core/builder`})}),(0,g.jsxs)(n.td,{children:[`The typed builder (`,(0,g.jsx)(n.code,{children:`createSeqViewSpec`}),`) and its helpers (`,(0,g.jsx)(n.code,{children:`translate`}),`, `,(0,g.jsx)(n.code,{children:`basePairs`}),`, `,(0,g.jsx)(n.code,{children:`b.preset.*`}),`); imports the format by type only.`]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`@molstar/seq-viewer`})}),(0,g.jsxs)(n.td,{children:[`The headless context (`,(0,g.jsx)(n.code,{children:`createSeqViewer`}),`): the document graph, managers, layout, hit testing, input, behaviors, commands, the registry and `,(0,g.jsx)(n.code,{children:`DefaultRegistry`}),`.`]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`@molstar/seq-viewer/draw`})}),(0,g.jsx)(n.td,{children:`The composer and the renderer API: batches, placement helpers, density helpers. DOM-free.`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`@molstar/seq-viewer/canvas`})}),(0,g.jsxs)(n.td,{children:[`The Canvas2D surface (`,(0,g.jsx)(n.code,{children:`mountSection`}),`), DOM input, the glyph atlas, `,(0,g.jsx)(n.code,{children:`windowScheduler`}),`.`]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`@molstar/seq-viewer/svg`})}),(0,g.jsxs)(n.td,{children:[`The platform-free SVG backend, `,(0,g.jsx)(n.code,{children:`renderSvg`}),`, PNG, the committed text metrics; the `,(0,g.jsx)(n.code,{children:`seqv-render`}),` CLI.`]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`@molstar/seq-viewer/dom`})}),(0,g.jsxs)(n.td,{children:[`The default UI without a framework: the `,(0,g.jsx)(n.code,{children:`<seq-viewer>`}),` element (`,(0,g.jsx)(n.code,{children:`defineSeqViewer`}),`), `,(0,g.jsx)(n.code,{children:`mountSeqViewer`}),`, its parts and slots.`]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`@molstar/seq-viewer/react`})}),(0,g.jsxs)(n.td,{children:[`The same UI in React: `,(0,g.jsx)(n.code,{children:`SeqViewer`}),`, the provider, hooks, parts and slots. Both UIs share `,(0,g.jsx)(n.code,{children:`@molstar/seq-viewer/skin.css`}),`.`]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`@molstar/seq-nightingale`})}),(0,g.jsx)(n.td,{children:`A second viewer for the format: a resolved view materialized as EBI's Nightingale components, with what it cannot draw reported.`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`@molstar/seq-viewer/interactions`})}),(0,g.jsxs)(n.td,{children:[`An extension: interaction pairs and the fingerprint, a format half and a viewer half (`,(0,g.jsx)(n.code,{children:`/viewer`}),`).`]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`@molstar/seq-core/links`})}),(0,g.jsxs)(n.td,{children:[`Command links for a host's markdown: the codec, the runner and a remark adapter (`,(0,g.jsx)(n.code,{children:`/remark`}),`).`]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`@molstar/seq-core/translate`})}),(0,g.jsxs)(n.td,{children:[`Maps between coordinate systems, a host's own (Mol*'s chain residues) and Seq*'s (units, molecules, rows): the `,(0,g.jsx)(n.code,{children:`Translator`}),`, a registry of systems and the routes between them, and the `,(0,g.jsx)(n.code,{children:`SystemRegistry`}),` over a sequence set, which maps between a structure, the set and an alignment's columns with no viewer (`,(0,g.jsx)(n.code,{children:`map`}),`). The viewer's `,(0,g.jsx)(n.code,{children:`ctx.systems`}),` is one.`]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`@molstar/seq-core/algorithms`})}),(0,g.jsxs)(n.td,{children:[`Aligners behind one interface (biomsa, Needleman–Wunsch, Myers) and the search matchers (`,(0,g.jsx)(n.code,{children:`/search`}),`). No DOM.`]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`@molstar/seq-core/stream/gmod`})}),(0,g.jsx)(n.td,{children:`Stream providers for indexed genome files read by byte range: 2bit (letters), BigWig (values), BigBed and tabix VCF (items).`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`@molstar/prism-viewer/sequence/molstar`})}),(0,g.jsxs)(n.td,{children:[`The Mol* adapter (Mol*'s, in the Prism viewer): the `,(0,g.jsx)(n.code,{children:`molstar:structure`}),` complex provider, structure formats, and the maps between Mol* loci and Seq* runs.`]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`@molstar/seq-core/stream/tiles`})}),(0,g.jsxs)(n.td,{children:[`The reference stream provider, `,(0,g.jsx)(n.code,{children:`seqstar-tiles/1`}),`: the tile client, `,(0,g.jsx)(n.code,{children:`tilesStream`}),` (a provider for the host's `,(0,g.jsx)(n.code,{children:`loaders.stream`}),`) and the procedural tile server.`]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`@molstar/seq-core/query`})}),(0,g.jsxs)(n.td,{children:[`SeqQL, the query language: the symbol table, the reader, binder and printer, the builder `,(0,g.jsx)(n.code,{children:`Q`}),`. Imports nothing.`]})]})]})]}),`
`,(0,g.jsxs)(n.p,{children:[`The arrows point one way: `,(0,g.jsx)(n.code,{children:`model`}),` ← `,(0,g.jsx)(n.code,{children:`format`}),` ← `,(0,g.jsx)(n.code,{children:`viewer`}),` ← `,(0,g.jsx)(n.code,{children:`/draw`}),` ← `,(0,g.jsx)(n.code,{children:`/svg`}),`, `,(0,g.jsx)(n.code,{children:`/canvas`}),` ←
`,(0,g.jsx)(n.code,{children:`/react`}),`, `,(0,g.jsx)(n.code,{children:`/dom`}),`. The core (`,(0,g.jsx)(n.code,{children:`@molstar/seq-core`}),`) depends on nothing but Mol*'s MessagePack, zip and task context (`,(0,g.jsx)(n.code,{children:`@molstar/io`}),`, `,(0,g.jsx)(n.code,{children:`@molstar/core`}),`); the viewer's root, `,(0,g.jsx)(n.code,{children:`/draw`}),` and `,(0,g.jsx)(n.code,{children:`/svg`}),` touch
no DOM global, so they run in Node.`]})]})}function h(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=r(),a(),n(),c(),p()})))()}_();export{h as default};