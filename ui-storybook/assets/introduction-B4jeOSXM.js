import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t,u as n}from"./blocks-DB-FaXqI.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{i,r as a}from"./react-Dyi61YEg.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`Overview/Introduction`}),`
`,(0,c.jsx)(n.h1,{id:`prism`,children:`Prism`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Prism is the new user interface of Mol* v6`}),`: a molecular viewer app, and the library it is built from. It runs on
the same Mol* engine as the classic UI (the plugin with its state tree, the readers, the representations and the
canvas); what is new is everything between that engine and the person using it.`]}),`
`,(0,c.jsx)(n.p,{children:`The classic UI is a React layer over the plugin, with the logic spread across its components. Prism moves the logic out
of the views: one API that every surface calls, state sources the views read, a history that records what was done. The
views on top of that are thin, so the same viewer can be driven by a person, a page script, a URL or an AI assistant,
and the result is the same.`}),`
`,(0,c.jsx)(n.h2,{id:`what-it-gives-you`,children:`What it gives you`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Canvas first.`}),` The structure fills the window; a panel floats over it on the right, with a rail of tabs (Home,
Structure, Selection, the history, settings) and cards for the scene's tools (animation, export, canvas settings, the
PAE plot). The chrome is quiet and follows the canvas: light, dark or a colored background.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`One API.`}),` Every action is an operation: `,(0,c.jsx)(n.code,{children:`viewer.api.select.set({ target: 'A:120-130' })`}),`,
`,(0,c.jsx)(n.code,{children:`viewer.api.representation.color({ target: 'ligand', color: 'orange' })`}),`. The panels, the command menu, URL options,
page scripts and the assistant all call the same operations. Each run knows who asked for it, says what it did in a
sentence, and lands in the history as one step that undoes as one.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Targets as people say them.`}),` What an operation acts on is written the way you would say it: a keyword (`,(0,c.jsx)(n.code,{children:`ligand`}),`,
`,(0,c.jsx)(n.code,{children:`water`}),`, `,(0,c.jsx)(n.code,{children:`polymer`}),`), an address list (`,(0,c.jsx)(n.code,{children:`A:120-130, B:45`}),`), a PyMOL, VMD or Jmol selection, or MolScript. They become
MolQL underneath, and a target that cannot be read fails with a hint.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`The command menu.`}),` Every operation is a command with the names people would type (`,(0,c.jsx)(n.code,{children:`⌘K`}),`); it teaches the rest of the
UI.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Sequence.`}),` Seq*, the sequence viewer, is linked to the 3D view: hover and selection travel both ways, tracks show
annotations (pLDDT, secondary structure), and what another view marks (the PAE plot's ranges) lights both.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Composable.`}),` A viewer is a `,(0,c.jsx)(n.code,{children:`PrismViewerSpec`}),`: the engine's registry and behaviors, the features (loaders,
snapshots, animation, export, measurements, …), Mol*'s extensions, the sequence viewer and the assistant. Leave out
what you do not need and it is not in the bundle (`,(0,c.jsx)(n.code,{children:`examples/minimal-prism-viewer`}),` is the smallest one).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`An optional assistant.`}),` `,(0,c.jsx)(n.code,{children:`@molstar/prism-assistant`}),` adds an AI agent whose tools are the same operations, so what it
does is attributed, shown and undone like anything else. Nothing of it is loaded unless the spec asks for it.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Headless too.`}),` The viewer runs without a canvas in Node (`,(0,c.jsx)(n.code,{children:`createPrismViewerHeadless`}),`), for tests and for scripts.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`using-it`,children:`Using it`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-ts`,children:`import { createPrismViewer, DefaultPrismViewerSpec } from '@molstar/prism-viewer';

const viewer = await createPrismViewer({ target: document.getElementById('app')!, spec: DefaultPrismViewerSpec() });
await viewer.api.load.entry({ source: 'pdb', id: '1cbs' });
await viewer.api.select.set({ target: 'ligand' });
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`apps/prism-viewer`}),` is the app as it ships: the default spec plus Mol*'s extensions (`,(0,c.jsx)(n.code,{children:`FullPrismViewerSpec`}),`), with URL
options (`,(0,c.jsx)(n.code,{children:`?pdb=1cbs`}),`) and a single-file build (`,(0,c.jsx)(n.code,{children:`prism-viewer.js`}),`).`]}),`
`,(0,c.jsx)(n.h2,{id:`the-packages`,children:`The packages`}),`
`,(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:`Package`}),(0,c.jsx)(n.th,{children:`What it holds`})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`@molstar/prism-ui`})}),(0,c.jsx)(n.td,{children:`the parts: the shell (panel, rail, cards, canvas chrome), components, the command menu, the tokens and themes, and a small DOM runtime`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`@molstar/prism-viewer`})}),(0,c.jsx)(n.td,{children:`the viewer on a Mol* plugin: the API and its operations, the state sources, the views, the history, the sequence link, the spec`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`@molstar/prism-assistant`})}),(0,c.jsx)(n.td,{children:`the optional assistant: the agent's UI on the viewer's operations`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`apps/prism-viewer`})}),(0,c.jsx)(n.td,{children:`the app: the full spec, URL options, the builds`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`examples/minimal-prism-viewer`})}),(0,c.jsx)(n.td,{children:`the smallest composition, a Vite app: cartoon and ball-and-stick, nothing else`})]})]})]}),`
`,(0,c.jsxs)(n.p,{children:[`The views are written in TSX on Prism's own runtime (`,(0,c.jsx)(n.code,{children:`@molstar/prism-ui/dom`}),`): fine-grained bindings from state to the
DOM, no virtual DOM, no framework in the bundle. A contribution can still be written in React or Preact through a
framework-neutral view contract.`]}),`
`,(0,c.jsx)(n.h2,{id:`where-to-look`,children:`Where to look`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Overview`}),`: this page; `,(0,c.jsx)(n.strong,{children:`Foundations`}),`: the tokens (surfaces, text, states, brand colors), how surfaces layer, the
themes, type and spacing.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Viewer`}),`: the real viewer over the repository's example files or the network (each story says which):`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Shell`}),`: the whole app: loaded, the command menu, the canvas background, the pinned panel, the compact layout,
expand and fullscreen, Help, a card opened at a section.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Home`}),`, `,(0,c.jsx)(n.strong,{children:`Structure panel`}),`, `,(0,c.jsx)(n.strong,{children:`Volumes`}),`, `,(0,c.jsx)(n.strong,{children:`Playback`}),`, `,(0,c.jsx)(n.strong,{children:`Assistant`}),`: a panel or a card at what it shows (the
tree and the inspector, a map's levels and transfer function, the playback card and the Story, the agent).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Data`}),`: one story per kind of data (structures, models, assemblies, maps, particles, shapes, MolViewSpec).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`MVS stories`}),`: the MolViewSpec stories example, played in the viewer.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`With extensions`}),`: the viewer as the app composes it, with Mol*'s extensions: a predicted structure colored by
pLDDT, and the PAE plot of a single chain and of a complex.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Components`}),`: the parts over stand-in models, state by state: buttons, icons, selects, the `,(0,c.jsx)(n.strong,{children:`Params form`}),` (every
parameter control in its states), the playback card's rows, tooltips.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Internals`}),`: the DOM runtime (bindings, keyed lists, conditionals), React and Preact views, and performance checks,
for working on Prism itself.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`Switch the theme (light, dark, blue, system) in Storybook's toolbar; the chrome over the canvas follows the canvas
background on its own.`}),`
`,(0,c.jsx)(n.h2,{id:`principles`,children:`Principles`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Canvas first, quiet chrome.`}),` Flat surfaces separated by tone and spacing, few lines; glass over the canvas.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`One accent, for actions and the picked item.`}),` Settings, switches and sliders are neutral.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Icons where they say something words do not`}),`: icon-only controls, state, top-level tree rows, the command menu; not
next to labels.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`One text size in panels`}),` (12 px), every control in one column, at the same text inset.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`The command menu teaches the rest`}),`: every action is a command, with the names people would type.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Mol*'s ideas, restyled`}),`: its interaction patterns stay (action footers, presets, the state tree); the look is new.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`read-more`,children:`Read more`}),`
`,(0,c.jsxs)(n.p,{children:[`The specs live beside the code, in each package's `,(0,c.jsx)(n.code,{children:`_spec/`}),`. The viewer's (`,(0,c.jsx)(n.code,{children:`packages/prism/viewer/_spec/`}),`, start with its
`,(0,c.jsx)(n.code,{children:`README.md`}),` and its decisions): `,(0,c.jsx)(n.code,{children:`viewer-spec.md`}),` (composing a viewer), `,(0,c.jsx)(n.code,{children:`api.md`}),` and `,(0,c.jsx)(n.code,{children:`operations.md`}),` (the API and every
operation), `,(0,c.jsx)(n.code,{children:`targets.md`}),` (how targets are read), `,(0,c.jsx)(n.code,{children:`state.md`}),` and `,(0,c.jsx)(n.code,{children:`journal.md`}),` (the history and the record),
`,(0,c.jsx)(n.code,{children:`sequence.md`}),`, `,(0,c.jsx)(n.code,{children:`agent.md`}),`, `,(0,c.jsx)(n.code,{children:`marks.md`}),`, and `,(0,c.jsx)(n.code,{children:`parity.md`}),` (against the classic UI). prism-ui's
(`,(0,c.jsx)(n.code,{children:`packages/prism/ui/_spec/`}),`): `,(0,c.jsx)(n.code,{children:`styling.md`}),`, `,(0,c.jsx)(n.code,{children:`shell.md`}),`, `,(0,c.jsx)(n.code,{children:`commands.md`}),`, `,(0,c.jsx)(n.code,{children:`rendering.md`}),`, `,(0,c.jsx)(n.code,{children:`accessibility.md`}),`.`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),n()})))()}l();export{s as default};