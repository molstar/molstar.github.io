import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,s as n}from"./symbol-C1aQDpCV.js";import{c as r,u as i}from"./print-ClwEiNC7.js";function a(e,t){let n=[];for(let i of u){let a=e.filter(e=>e.kind===`property`&&e.reads===i);if(a.length===0)continue;let o=t.filter(e=>e.args.some(e=>e.binds===i)).map(h),s=a.filter(e=>!g(e)).map(e=>e.signature),c=r[i].slice(1).map(e=>`then its ${d[e]}`),l=c.length>0?`; ${c.join(`, `)}`:``;n.push(`${i} (${o.join(`, `)} :where): ${s.join(` `)}${l}`);for(let e of a.filter(g))n.push(`  ${e.signature}  ${e.doc}`)}let i=e.filter(e=>e.kind===`core`),a=e=>i.filter(t=>_(t)===e).map(e=>e.signature);n.push(`${a(`rel`).join(` `)}  a missing value fails every comparison`);for(let e of i.filter(e=>_(e)===``))n.push(`${e.signature}  ${e.doc}`);return n.push(a(`logic`).join(` `)),n}function o(e,t={}){let n=[...e.symbols.values()],r=n.flatMap(e=>e.examples.filter(e=>e.skill!==void 0)).sort((e,t)=>e.skill-t.skill).map(e=>`${e.text}  ${e.says}`),i=f.map(([e,t])=>{let r=n.filter(e=>t.includes(e.kind));return[e,...e===`TESTS`?a(r,n):r.map(e=>`${e.signature}  ${e.doc}`)].join(`
`)}),o=(t.inputs??[]).map(e=>`${e.name} (${e.says})`).join(`, `);return l.replace(`{refs}
`,()=>t.refs?`${v(t.refs)}\n`:``).replace(`{inputs}
`,()=>o?`${v(`Inputs: ${o}.`)}\n\n`:`
`).replace(`{table}`,()=>[...i,[`EXAMPLES`,m,...r].join(`
`)].join(`

`))}function s(e){let t=e.args.filter(e=>e.binds).map(e=>` · \`:${e.name}\` binds: ${e.binds}`),n=[`### ${h(e)}`,`\`${e.name}\` · ${e.kind} · result: ${b(e.result)}${e.reads?` · reads: ${e.reads}`:``}${t.join(``)}`,`\`${e.signature}\`: ${e.doc}.`];e.args.length>0&&n.push(``,`| Argument | Type | Default | |`,`|---|---|---|---|`);for(let t of e.args){let e=t.positional?`\`${t.name}${t.rest?`…`:``}\` (positional)`:`\`:${t.name}\``,r=t.default===void 0?t.optional?`none`:t.rest?`one or more`:`required`:`\`${t.default}\``;n.push(`| ${e} | ${b(t.type,t)} | ${r} | ${t.doc} |`)}e.examples.length>0&&n.push(``,`Examples:`);for(let t of e.examples)n.push(`- \`${t.text}\`: ${t.says}${t.fixture?` (${t.fixture})`:``}`);e.hints.length>0&&n.push(``,`Hints:`);for(let t of e.hints)n.push(`- \`${t.code}\`${t.value?` (${t.value})`:``}: ${t.text}`);return n.join(`
`)}function c(e){let t=[...e.symbols.values()],r=f.map(([e,n])=>{let r=t.filter(e=>n.includes(e.kind));return[`## ${e[0]}${e.slice(1).toLowerCase()}`,...r.map(s)].join(`

`)}),i=[`## Issue codes`,``,`| Code | Severity |`,`|---|---|`];for(let e of n)i.push(`| \`${e.code}\` | ${e.severity} |`);return`# SeqQL reference\n\n${r.join(`

`)}\n\n${i.join(`
`)}\n`}var l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{i(),t(),l=`SEQUENCE QUERIES (SeqQL)

A query selects positions and annotation items in the sequences. Write one S-expression:
(name positional... :keyword value ...). Words need no quotes; quote "..." text with spaces,
brackets, commas or parentheses, and refs that look like numbers ("123"). ; starts a comment.

Wrap each query in [SeqQL]...[/SeqQL] and send each query in its own block: several blocks are
several queries, and text around them is fine. A query passed as a tool's argument takes no tags.

A word where a selection goes is a ref and selects what it names: a unit's positions, a
molecule's or complex's units, an alignment's columns, a row's residues, an annotation's items.
{refs}
A selection is a list of groups: a sequence, a run of positions, an item, a hit. Filters test
groups; results step through them. Names are short, and a test's name reads what its :where
tests: (label) is an item's label in (items :where ...), a position's in (positions :where ...).

POSITIONS: labels for what a person says, indices for what a tool returned.
Labels are numbered as the ruler shows them (10-20, 45A), inclusive: (range Q 10-20), [10-20].
Indices count from 0 and exclude the end, as tool results give them: (slice Q 9 20), @9:20.

SHORTHAND, anywhere a selection goes: (sel "...")
  R[10-20,45]  labels; R[uniprot: 120-140] in another numbering
  R@9:20  indices 9 to 19
  A[#id1,#id2]  items by id, not label
  $name, $name[10-20]  an input, narrowed
  a, b  union
{inputs}
PATTERNS
Narrow by intersecting: (and Q (letters C)); remove with (and Q (not B)).
Keep groups with (pick Q :where T); test single elements with a generator's :where.
A selection inside a test is computed once: (pick Q :where (overlaps (sel "...")))
Carry positions to another sequence with onto, then narrow or widen there.
(and A B) intersects within one sequence: carry one side over with onto first.

{table}

RESULTS AND ERRORS
A result starts with a summary ("3 groups, 412 positions: 1brs/A 10-20 @9:20 ..."): labels, then
indices. Check it against the request. "Selects nothing" names the part that emptied it and why;
fix that part. An error gives line:column, what is wrong, the symbol's signature and a
suggestion; resend the corrected query.
`,u=[`position`,`system`,`item`,`group`],d={position:`position's`,system:`sequence's`,item:`item's`,group:`group's`},f=[[`SELECTIONS`,[`generator`,`macro`]],[`COMBINE`,[`combinator`,`modifier`,`filter`]],[`TESTS`,[`property`,`core`]]],p=96,m=`Refs in the examples are illustrative; use the refs you were given.`,h=e=>e.alias??e.name,g=e=>e.args.some(e=>e.positional),_=e=>/^core\.(rel|logic)\./.exec(e.name)?.[1]??``,v=e=>e.split(` `).reduce((e,t)=>{let n=e[e.length-1];return n!==void 0&&n.length+1+t.length<=p?e[e.length-1]=`${n} ${t}`:e.push(t),e},[]).join(`
`),y={num:`number`,int:`whole number`,str:`text`,bool:`boolean`,json:`value`,ref:`ref`,label:`label`,query:`selection`,test:`test`},b=(e,t)=>typeof e==`object`?e.enum.map(e=>`\`${e}\``).join(` \\| `):`${y[e]}${t?.binds?` of ${t.binds===`item`?`an`:`a`} ${t.binds}`:``}`})))()}export{c as n,o as r,x as t};