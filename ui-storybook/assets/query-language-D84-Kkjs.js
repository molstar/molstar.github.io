import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t,u as n}from"./blocks-DB-FaXqI.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{i,r as a}from"./react-Dyi61YEg.js";import{c as o,d as s,f as c,l,m as u,u as d}from"./live-B1TANyMy.js";function f(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t,{title:`Seq*/Docs/Query language`}),`
`,(0,m.jsx)(n.h1,{id:`the-query-language-seqql`,children:`The query language: SeqQL`}),`
`,(0,m.jsxs)(n.p,{children:[`SeqQL selects `,(0,m.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#position-and-index-label-and-numbering`,children:`positions`}),` and annotation
`,(0,m.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#annotation-and-item`,children:`items`}),` in the data a document loads: "the kinase domains", "chain A's
residues 10 to 20, on the alignment", "residues of barnase in contact with barstar". It is MolQL's
design applied to sequences. A query is built from base symbols: `,(0,m.jsx)(n.strong,{children:`generators`}),` make a selection
from the data (`,(0,m.jsx)(n.code,{children:`items`}),`, `,(0,m.jsx)(n.code,{children:`values`}),`), `,(0,m.jsx)(n.strong,{children:`modifiers`}),` turn one selection into another (`,(0,m.jsx)(n.code,{children:`onto`}),`, `,(0,m.jsx)(n.code,{children:`expand`}),`),
`,(0,m.jsx)(n.strong,{children:`filters`}),` keep some of its groups (`,(0,m.jsx)(n.code,{children:`pick`}),`), `,(0,m.jsx)(n.strong,{children:`combinators`}),` join selections (`,(0,m.jsx)(n.code,{children:`and`}),`, `,(0,m.jsx)(n.code,{children:`or`}),`), and
`,(0,m.jsx)(n.strong,{children:`properties`}),` are what a test reads (`,(0,m.jsx)(n.code,{children:`label`}),`, `,(0,m.jsx)(n.code,{children:`length`}),`). The result is a `,(0,m.jsx)(n.strong,{children:`sequence selection`}),`:
groups of runs in `,(0,m.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#coordinate-system`,children:`coordinate systems`}),`, which converts to the model's
`,(0,m.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#loci-and-mol`,children:`loci`}),`, so the viewer's `,(0,m.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#selection-highlight-and-focus`,children:`selection and highlights`}),`
take it as they take any other.`]}),`
`,(0,m.jsx)(n.h2,{id:`the-split`,children:`The split`}),`
`,(0,m.jsxs)(n.p,{children:[`As Mol* has `,(0,m.jsx)(n.code,{children:`mol-script`}),` and `,(0,m.jsx)(n.code,{children:`mol-model/structure/query`}),`, SeqQL has two halves:`]}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.strong,{children:`The language`}),`, `,(0,m.jsx)(n.code,{children:`@molstar/seq-core/query`}),`, a leaf that imports nothing: types, the symbol table, the
registry (`,(0,m.jsx)(n.code,{children:`createLanguage`}),`), the reader, binder, checker and canonical printer, `,(0,m.jsx)(n.code,{children:`sel`}),`, the
builder `,(0,m.jsx)(n.code,{children:`Q`}),`, and the generated reference and skill (`,(0,m.jsx)(n.code,{children:`referenceText`}),`, `,(0,m.jsx)(n.code,{children:`skillText`}),`).`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.strong,{children:`The runtime`}),`, `,(0,m.jsx)(n.code,{children:`@molstar/seq-core/model/query`}),`: the sequence selection, its kernels, `,(0,m.jsx)(n.code,{children:`compileQuery`}),`, and
the symbols' runtimes. Every base symbol runs: the selection with `,(0,m.jsx)(n.code,{children:`toLoci`}),`, `,(0,m.jsx)(n.code,{children:`toExtents`}),` and `,(0,m.jsx)(n.code,{children:`summary`}),`, refs and the
generators, `,(0,m.jsx)(n.code,{children:`and`}),`, `,(0,m.jsx)(n.code,{children:`or`}),`, `,(0,m.jsx)(n.code,{children:`not`}),`, `,(0,m.jsx)(n.code,{children:`range`}),` and `,(0,m.jsx)(n.code,{children:`slice`}),`; `,(0,m.jsx)(n.code,{children:`expand`}),`, `,(0,m.jsx)(n.code,{children:`onto`}),` (across alignment rows
and columns, row bindings, codons and mapping paths, by overlap), `,(0,m.jsx)(n.code,{children:`group`}),`, `,(0,m.jsx)(n.code,{children:`each`}),` with `,(0,m.jsx)(n.code,{children:`current`}),`,
`,(0,m.jsx)(n.code,{children:`partners`}),`, `,(0,m.jsx)(n.code,{children:`pick`}),`, `,(0,m.jsx)(n.code,{children:`first`}),`, `,(0,m.jsx)(n.code,{children:`ids`}),` and the item's properties; the position, sequence and
group properties, `,(0,m.jsx)(n.code,{children:`positions`}),`, `,(0,m.jsx)(n.code,{children:`letters`}),` and `,(0,m.jsx)(n.code,{children:`search`}),` (each matcher of `,(0,m.jsx)(n.code,{children:`@molstar/seq-core/algorithms/search`}),`,
with an app's letter-class tables, or `,(0,m.jsx)(n.code,{children:`:regex true`}),` with the pattern quoted: `,(0,m.jsx)(n.code,{children:`(search "N[^P][ST]" :regex true)`}),`), and an empty result's diagnosis.
The `,(0,m.jsx)(n.a,{href:`?path=/story/seq-query-and-search-seqql--gallery`,children:`runtime gallery`}),` runs them on the cases, steps through a result's groups, and its "Show me"
switches to the view that holds the result (the viewer's `,(0,m.jsx)(n.code,{children:`showExtents`}),`).`]}),`
`]}),`
`,(0,m.jsxs)(n.p,{children:[(0,m.jsx)(n.strong,{children:`Scans read their context.`}),` `,(0,m.jsx)(n.code,{children:`letters`}),`, `,(0,m.jsx)(n.code,{children:`positions`}),` and `,(0,m.jsx)(n.code,{children:`search`}),` with no `,(0,m.jsx)(n.code,{children:`:in`}),` of their own, as a
direct operand of `,(0,m.jsx)(n.code,{children:`and`}),`, read only what the `,(0,m.jsx)(n.code,{children:`and`}),` has so far: `,(0,m.jsx)(n.code,{children:`(and 1brs/A (letters C))`}),` reads one
chain, not the set (and a molecule with no unit, which `,(0,m.jsx)(n.code,{children:`(all)`}),` leaves out, when the `,(0,m.jsx)(n.code,{children:`and`}),` names it).`]}),`
`,(0,m.jsxs)(n.p,{children:[(0,m.jsx)(n.strong,{children:`An empty result says why.`}),` When a query selects nothing, the first part of it that gave nothing
from something is named in a note with what it knows (`,(0,m.jsx)(n.code,{children:`seqql.empty`}),`): `,(0,m.jsx)(n.code,{children:`(values :of cons :above 1) selected nothing: cons runs 0.545 to 1`}),` (case 3); `,(0,m.jsx)(n.code,{children:`none of 43 items passed :where; (category) was missing 43 times`}),`;
`,(0,m.jsx)(n.code,{children:`no pair of contacts touches it`}),`. A part whose own warning already says why (an unknown label, an
unmapped `,(0,m.jsx)(n.code,{children:`onto`}),`) is left to that warning.`]}),`
`,(0,m.jsx)(n.h2,{id:`how-it-is-written`,children:`How it is written`}),`
`,(0,m.jsxs)(n.p,{children:[`An S-expression with short names, the surface for people, the agent, command links and tests. A
list is `,(0,m.jsx)(n.code,{children:`(head arg…)`}),`: positionals in signature order, then `,(0,m.jsx)(n.code,{children:`:keyword value`}),` pairs. Refs (the names of
a document's nodes, as `,(0,m.jsx)(n.code,{children:`domains`}),`, or derived ones, as chain `,(0,m.jsx)(n.code,{children:`1brs/A`}),`) are words, so `,(0,m.jsx)(n.code,{children:`1brs/A`}),` and
`,(0,m.jsx)(n.code,{children:`ctx.site.hinge`}),` need no quotes; `,(0,m.jsx)(n.code,{children:`(input selection)`}),` is a selection the host passes in. Comments run from `,(0,m.jsx)(n.code,{children:`;`}),` to the end of the line.`]}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-lisp`,children:`(sel "1brs/A[10-20]")                                       ; chain A residues 10-20 (labels)
(sel "p53@0:50")                                            ; indices 0 to 49, as a tool returned them
(pick (items :of domains) :where (matches (label) kinase))  ; all kinase domains
(values :of cons :above 0.8)                                ; positions where conservation > 0.8
(onto (input selection) msa)                                ; the alignment columns of these residues
(and 1brs/A (partners 1brs/D :via contacts))                ; residues of A in contact with D
`})}),`
`,(0,m.jsxs)(n.p,{children:[(0,m.jsx)(n.strong,{children:`Two names per symbol.`}),` The full name (`,(0,m.jsx)(n.code,{children:`seq.item.label`}),`) is in the table, the JSON and the
builder; the short name (`,(0,m.jsx)(n.code,{children:`label`}),`) is what people and the agent write, and a full name is always
accepted. The binder resolves a short name by its operands' kind (`,(0,m.jsx)(n.code,{children:`and`}),`, `,(0,m.jsx)(n.code,{children:`or`}),`, `,(0,m.jsx)(n.code,{children:`not`}),` over
selections are the combinators, over tests the logic) and, for a property, by its `,(0,m.jsx)(n.strong,{children:`slot`}),`, the kind of thing a
`,(0,m.jsx)(n.code,{children:`:where`}),` test is applied to (a position, a coordinate system, an item or a group), looked up
from the innermost `,(0,m.jsx)(n.code,{children:`:where`}),` outward. The base table has `,(0,m.jsx)(o,{}),`.`]}),`
`,(0,m.jsxs)(n.p,{children:[(0,m.jsxs)(n.strong,{children:[(0,m.jsx)(n.a,{href:`?path=/docs/seq-docs-concepts--docs#position-and-index-label-and-numbering`,children:`Labels against indices`}),`.`]}),` A label is what a person and a ruler say, inclusive, in a numbering:
`,(0,m.jsx)(n.code,{children:`(range 1brs/A 10-20)`}),`, `,(0,m.jsx)(n.code,{children:`[10-20]`}),`. An index is what a tool returned, 0-based and half-open:
`,(0,m.jsx)(n.code,{children:`(slice p53 0 50)`}),`, `,(0,m.jsx)(n.code,{children:`@0:50`}),`. There is no third form.`]}),`
`,(0,m.jsxs)(n.p,{children:[(0,m.jsx)(n.strong,{children:(0,m.jsx)(n.code,{children:`sel`})}),` is a shorthand for refs with ranges, usable anywhere a selection is: labels in brackets,
item ids after `,(0,m.jsx)(n.code,{children:`#`}),`, index slices after `,(0,m.jsx)(n.code,{children:`@`}),`, a comma for a union, `,(0,m.jsx)(n.code,{children:`$name`}),` for an input. It is a macro:
it expands for checking and compiling (`,(0,m.jsx)(n.code,{children:`R[10-20]`}),` to `,(0,m.jsx)(n.code,{children:`(range R 10-20)`}),`), and the JSON keeps it as
written, normalized.`]}),`
`,(0,m.jsxs)(n.p,{children:[(0,m.jsx)(n.strong,{children:`Stored form.`}),` Documents store the JSON with full names and the canonical text beside it,
`,(0,m.jsx)(n.code,{children:`{ seqql: "1.0", expr, text }`}),`. Printing a bound query gives the canonical text back: short names
where they resolve to the same symbol, keywords in signature order, defaults left out, one line
when it fits in 80 columns. The examples above, read, bound, checked and printed live, and the first
one's JSON:`]}),`
`,(0,m.jsx)(d,{json:!0,texts:[`(pick (items :of domains) :where (matches (label) kinase))`,`(sel "1brs/A[10-20]")`,`(sel "p53@0:50")`,`(values :of cons :above 0.8)`,`(onto (input selection) msa)`,`(and 1brs/A (partners 1brs/D :via contacts))`]}),`
`,(0,m.jsxs)(n.p,{children:[`In code, the builder `,(0,m.jsx)(n.code,{children:`Q`}),` (from `,(0,m.jsx)(n.code,{children:`@molstar/seq-core/query`}),`) writes the same JSON, one function per full symbol name
(`,(0,m.jsx)(n.code,{children:`Q.seq.filter.pick`}),`, `,(0,m.jsx)(n.code,{children:`Q.seq.generator.items`}),`), and `,(0,m.jsx)(n.code,{children:`Q.query(expr)`}),` gives the stored form. The
`,(0,m.jsxs)(n.a,{href:`?path=/story/seq-query-and-search-seqql--read-bind-print`,children:[(0,m.jsx)(n.code,{children:`Query language`}),` story`]}),` shows the JSON each query becomes.`]}),`
`,(0,m.jsx)(n.h2,{id:`errors`,children:`Errors`}),`
`,(0,m.jsx)(n.p,{children:`Every issue has a code, a JSON path into the expression, a 1-based line and column, and a message
that says what to write instead; binder errors add the symbol's signature, and an unknown name the
nearest names in scope. The checker adds types, slots and arity. Rendered as a person or the agent sees them, live:`}),`
`,(0,m.jsx)(l,{texts:[`(item :of domains)`,`(range 1brs/A[10-20])`,`(and 1brs/A (> (length) 3))`,`(pick (items :of domains :where (> (length) 30))`,`(slice p53 9)`,`(sel "1brs/A[10-20")`]}),`
`,(0,m.jsxs)(n.p,{children:[`The `,(0,m.jsxs)(n.a,{href:`?path=/story/seq-query-and-search-seqql--read-bind-print`,children:[(0,m.jsx)(n.code,{children:`Query language`}),` story`]}),` has a box to try
queries, with the canonical print, the JSON, `,(0,m.jsx)(n.code,{children:`sel`}),`'s expansion and how each short name was bound;
`,(0,m.jsx)(n.a,{href:`?path=/story/seq-query-and-search-seqql--skill`,children:`Skill and reference`}),` shows the skill for a host with inputs.`]}),`
`,(0,m.jsx)(n.h2,{id:`the-reference`,children:`The reference`}),`
`,(0,m.jsxs)(n.p,{children:[`Generated from the symbol table, so it never drifts: per symbol, its short and full names, the
signature with argument types and defaults, the result, the slot it reads, its description, its
examples and its error hints. Rendered live from `,(0,m.jsx)(n.code,{children:`referenceText(createLanguage().language)`}),`:`]}),`
`,(0,m.jsx)(s,{}),`
`,(0,m.jsx)(n.h2,{id:`the-agents-skill`,children:`The agent's skill`}),`
`,(0,m.jsxs)(n.p,{children:[`The skill is generated too, not hand-written: fixed guidance (how the S-expression reads, refs,
short names and slots, labels against indices, `,(0,m.jsx)(n.code,{children:`sel`}),`, errors) and the compact table, one line per
symbol, then the examples marked for it. A host with extensions gets a skill that says exactly what
its checker accepts. Below, `,(0,m.jsx)(n.code,{children:`skillText(createLanguage().language)`}),` as generated live, with no
host options (a host adds its refs line and its inputs):`]}),`
`,(0,m.jsx)(c,{})]})}function p(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=r(),a(),n(),u()})))()}h();export{p as default};