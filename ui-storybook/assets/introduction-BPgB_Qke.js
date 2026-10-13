import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{A as t,a as n,k as r,o as i}from"./blocks-CVj2wWyo.js";import{t as a}from"./jsx-runtime-CvRsDzrl.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Overview/Introduction`}),`
`,(0,c.jsx)(r.h1,{id:`mol-prism-ui`,children:`Mol* prism-ui`}),`
`,(0,c.jsxs)(r.p,{children:[`The next Mol* plugin UI (`,(0,c.jsx)(r.code,{children:`@molstar/prism-ui`}),`), as mocks: the shell, its panels and the canvas chrome, built on their
view models with mocked data. They settle the UX before the build against a real plugin; nothing here talks to Mol*
yet.`]}),`
`,(0,c.jsx)(r.h2,{id:`where-to-look`,children:`Where to look`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Overview`}),`: this page; `,(0,c.jsx)(r.strong,{children:`Foundations`}),`: the tokens (surfaces, text, states, brand colors), how surfaces layer, the
themes, type and spacing.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Shell`}),`: the whole app. `,(0,c.jsx)(r.strong,{children:`Loaded`}),` is the usual state; `,(0,c.jsx)(r.strong,{children:`Empty`}),` the start (the wordmark on the canvas); others show
a session with playback, many structures, an EMDB map, a dark canvas, the compact layout, the command menu, the pinned
panel, remote states.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Views`}),`: single tabs at panel width (Home, Structure).`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Canvas`}),`: what floats over the canvas (playback).`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Components`}),`: the parts: buttons, icons, and the `,(0,c.jsx)(r.strong,{children:`Params form`}),`: every PD control in its states, on a panel and in
a well.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Internals`}),`: the DOM runtime (bindings, keyed lists, conditionals), for working on prism-ui itself.`]}),`
`]}),`
`,(0,c.jsx)(r.p,{children:`Switch the theme (light, dark, blue, system) in the toolbar; the chrome over the canvas follows the canvas background on
its own.`}),`
`,(0,c.jsx)(r.h2,{id:`principles`,children:`Principles`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Canvas first, quiet chrome.`}),` Flat surfaces separated by tone and spacing, few lines; glass over the canvas.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`One accent, for actions and the picked item.`}),` Settings, switches and sliders are neutral.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Icons where they say something words do not`}),`: icon-only controls, state, top-level tree rows, the command menu; not
next to labels.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`One text size in panels`}),` (12 px), every control in one column, at the same text inset.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`The command menu teaches the rest`}),`: every action is a command, with the names people would type.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Mol*'s ideas, restyled`}),`: its interaction patterns stay (action footers, presets, the state tree), the look is new.`]}),`
`]}),`
`,(0,c.jsx)(r.h2,{id:`the-design`,children:`The design`}),`
`,(0,c.jsxs)(r.p,{children:[`The designs live in `,(0,c.jsx)(r.code,{children:`.v6/prism-ui`}),`: `,(0,c.jsx)(r.code,{children:`design/shell.md`}),` (layout, panels, what each tab holds), `,(0,c.jsx)(r.code,{children:`design/commands.md`}),`,
`,(0,c.jsx)(r.code,{children:`design/styling.md`}),` (tokens and rules), `,(0,c.jsx)(r.code,{children:`design/architecture.md`}),`, and `,(0,c.jsx)(r.code,{children:`plan.md`}),` (the phases, then the review gate and
the build against a real plugin, with `,(0,c.jsx)(r.code,{children:`apps/prism`}),` to show it early).`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=a(),r(),i()})))()}l();export{s as default};