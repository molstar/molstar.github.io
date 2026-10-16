import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,n,r,t as i}from"./jsx-runtime-DzTO5r4L.js";import{i as a,n as o}from"./control-flow-2XcFB3wB.js";import{n as s,t as c}from"./map-COHPbqb4.js";import{n as l,t as u}from"./story-root-Czb4fkLv.js";import{n as d,r as f}from"./observable-state-8hMFvtS9.js";import{n as p,t as m}from"./icon-Fyk1xIJy.js";import{i as h,o as g}from"./select-qi6jJ7y0.js";import{n as _,t as v}from"./button-oplfrRqY.js";function y(e){return r(`div`,{style:`display: grid; gap: var(--msp-space-2); font-size: var(--msp-font-size-xs)`,children:[n(`div`,{style:{height:`36px`,borderRadius:`var(--msp-radius-md)`,background:`var(${e.token})`,boxShadow:`inset 0 0 0 1px var(--msp-glass-edge)`}}),n(`code`,{style:`color: var(--msp-color-text-muted)`,children:e.token})]})}function b(e){return r(`div`,{style:`display: grid; grid-template-columns: 180px 48px 32px 1fr; gap: var(--msp-space-4); align-items: center; min-height: var(--msp-row-height)`,children:[n(`code`,{style:`font-size: var(--msp-font-size-xs); color: var(--msp-color-text)`,children:e.token}),n(`span`,{style:`color: var(--msp-color-text-muted); font-variant-numeric: tabular-nums`}),n(`div`,{style:{width:e.bar?`var(${e.token})`:`0`,height:`12px`,borderRadius:`var(--msp-radius-sm)`,background:`var(--msp-color-accent)`}}),n(`span`,{style:j,children:e.use})]})}function x(e){let t=document.createElement(`div`);t.style.width=`var(${e})`,document.body.append(t);let n=`${Math.round(t.getBoundingClientRect().width*10)/10}px`;return t.remove(),n}function S(e){return n(`div`,{style:`display: grid`,children:e.rows.map(([t,r])=>{let i=n(b,{token:t,use:r,bar:e.bars});return i.children[1].textContent=x(t),i})})}function C(e){let t=f(!1);return r(`div`,{children:[r(`button`,{type:`button`,style:`display: flex; align-items: center; gap: 6px; width: 100%; height: 26px; padding: 0 var(--msp-space-2); border-radius: var(--msp-radius-md); color: var(--msp-color-text); font-size: var(--msp-font-size-sm);`,"aria-expanded":t.asReadonly,onClick:()=>t.set(!t.value),children:[n(`span`,{style:{display:`inline-flex`,transition:`transform var(--msp-motion-fast) var(--msp-ease)`,transform:t.asReadonly.pipe(s(e=>e?`rotate(90deg)`:`none`))},children:n(m,{name:`chevron-right`,size:14})}),e.label]}),n(o,{when:t.asReadonly,reveal:!0,children:()=>n(`div`,{style:`display: grid; padding-left: var(--msp-space-6);`,children:e.children.map(e=>n(`div`,{style:`height: 26px; display: flex; align-items: center; color: var(--msp-color-text-muted); font-size: var(--msp-font-size-sm);`,children:e}))})})]})}var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{c(),_(),p(),g(),a(),d(),u(),i(),w={title:`Overview/Foundations`},T=[[`Surfaces`,`From the base to the strongest: a panel, a control, hover, pressed; a well is a block inside a panel (an open action, a section), a step the other way.`,[`bg`,`panel`,`raised`,`control`,`hover`,`pressed`,`well`]],[`Text`,`Body, labels and secondary text, hints and placeholders.`,[`text`,`text-muted`,`text-subtle`]],[`States`,`The accent only for actions and the picked item; the rest for messages.`,[`accent`,`accent-strong`,`danger`,`success`,`warning`,`info`,`focus-ring`]],[`Brand`,`The logo's colors (the wordmark's flash): lighter on dark themes.`,[`brand-1`,`brand-2`,`brand-3`,`brand-4`]]],E=[`--msp-glass-bg`,`--msp-glass-panel-bg`],D=[`cyan`,`red`,`gray`,`green`,`purple`,`blue`,`orange`],O=`display: grid; grid-template-columns: repeat(auto-fill, minmax(132px, 1fr)); gap: var(--msp-space-4);`,k=`display: grid; gap: var(--msp-space-4); padding: var(--msp-space-5); max-width: 960px;`,A=`margin: var(--msp-space-3) 0 0; font-size: var(--msp-font-size-md);`,j=`margin: 0; color: var(--msp-color-text-muted); font-size: var(--msp-font-size-sm);`,M={render:()=>l(()=>r(`div`,{style:k,children:[T.map(([e,i,a])=>r(t,{children:[n(`h2`,{style:A,children:e}),n(`p`,{style:j,children:i}),n(`div`,{style:O,children:a.map(e=>n(y,{token:`--msp-color-${e}`}))})]})),n(`h2`,{style:A,children:`Glass`}),n(`p`,{style:j,children:`Over the canvas: translucent, blurred; the panel's is more opaque, for reading.`}),n(`div`,{style:O,children:E.map(e=>n(y,{token:e}))}),n(`h2`,{style:A,children:`Node kinds`}),n(`p`,{style:j,children:`For extensions' and node kinds' brands (the classic card accents).`}),n(`div`,{style:O,children:D.map(e=>n(y,{token:`--msp-accent-${e}`}))})]}))},N={render:()=>l(()=>n(`div`,{style:`padding: var(--msp-space-5); display: grid; gap: var(--msp-space-3); max-width: 360px; font-size: var(--msp-font-size-sm)`,children:r(`div`,{style:`padding: var(--msp-space-4); border-radius: var(--msp-radius-lg); background: var(--msp-color-panel); display: grid; gap: var(--msp-space-3)`,children:[n(`b`,{children:`Panel`}),n(`span`,{style:`color: var(--msp-color-text-muted)`,children:`A label, muted · a hint, subtle`}),r(`div`,{style:`padding: var(--msp-space-3); border-radius: var(--msp-radius-md); background: var(--msp-color-well); display: grid; gap: var(--msp-space-2)`,children:[n(`b`,{children:`Well (an open action)`}),n(`div`,{style:`height: 24px; border-radius: var(--msp-radius-md); background: var(--msp-color-control); padding: 0 var(--msp-space-3); display: flex; align-items: center`,children:`Control`}),n(`div`,{style:`height: 24px; border-radius: var(--msp-radius-md); background: var(--msp-color-hover); padding: 0 var(--msp-space-3); display: flex; align-items: center`,children:`Hover`}),n(`div`,{style:`height: 24px; border-radius: var(--msp-radius-md); background: var(--msp-color-pressed); padding: 0 var(--msp-space-3); display: flex; align-items: center`,children:`Pressed`}),n(`span`,{style:`justify-self: end; color: var(--msp-color-accent); font-weight: 600`,children:`Download`})]}),n(`span`,{style:`color: var(--msp-color-text-subtle)`,children:`Subtle: placeholders, counts, dates`})]})}))},P={render:()=>l(()=>n(`div`,{style:`display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));`,children:[`light`,`dark`,`blue`,`contrast`].map(e=>r(`div`,{"data-msp-theme":e,style:`background: var(--msp-color-bg); color: var(--msp-color-text); padding: var(--msp-space-5); display: grid; gap: var(--msp-space-3); font-size: var(--msp-font-size-sm)`,children:[n(`b`,{style:`text-transform: capitalize`,children:e}),r(`div`,{style:`background: var(--msp-color-panel); padding: var(--msp-space-3); border-radius: var(--msp-radius-md); display: grid; gap: 6px`,children:[r(`span`,{children:[`Panel `,n(`span`,{style:`color: var(--msp-color-text-muted)`,children:`muted`}),` `,n(`span`,{style:`color: var(--msp-color-text-subtle)`,children:`subtle`})]}),r(`div`,{style:`background: var(--msp-color-well); padding: 6px var(--msp-space-3); border-radius: var(--msp-radius-md); display: flex; justify-content: space-between`,children:[n(`span`,{style:`background: var(--msp-color-control); padding: 0 var(--msp-space-3); border-radius: var(--msp-radius-md)`,children:`Field`}),n(`span`,{style:`color: var(--msp-color-accent); font-weight: 600`,children:`Apply`})]})]})]}))}))},F={render:()=>l(()=>r(`div`,{style:k,children:[[`xs`,`sm`,`md`,`lg`].map(e=>r(`div`,{style:{fontSize:`var(--msp-font-size-${e})`},children:[`--msp-font-size-`,e,`: The quick brown fox jumps over the lazy dog`]})),n(`code`,{style:`font-family: var(--msp-font-mono)`,children:`--msp-font-mono: MALYGTHSHGLFKKLGIPGPTPLP`})]}))},I=[[`--msp-space-1`,`Between rows of a list; between a label and its hint`],[`--msp-space-2`,`Inside a row (icon to text); between controls in a group; a panel's inset`],[`--msp-space-3`,`Between groups in a form; a card's inner gap; where text starts in a control`],[`--msp-space-4`,`A card's padding; between sections`],[`--msp-space-5`,`Between blocks of a page`],[`--msp-space-6`,`Empty states; large separations`]],L=[[`--msp-inset`,`Where text starts inside a control or a row: fields, selects, buttons and tree rows line up`],[`--msp-panel-inset`,`A panel's content inset at its sides and bottom (rows inside pad to --msp-inset)`],[`--msp-canvas-edge`,`The margin of everything floating over the canvas`]],R=[[`--msp-row-height`,`A list or tree row`],[`--msp-control-height`,`Fields, selects, buttons`],[`--msp-label-width`,`A form's label column`],[`--msp-icon-sm`,`Small icons (a chevron), for indents after them`],[`--msp-icon-md`,`A row's kind icon`]],z={render:()=>l(()=>r(`div`,{style:k,children:[n(`h3`,{style:A,children:`Scale`}),n(S,{rows:I,bars:!0}),n(`h3`,{style:A,children:`Rules`}),n(S,{rows:L,bars:!0}),n(`h3`,{style:A,children:`Sizes`}),n(S,{rows:R}),n(`h3`,{style:A,children:`In a panel`}),r(`div`,{style:`display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--msp-space-5); align-items: start`,children:[r(`div`,{style:`display: grid; gap: var(--msp-space-1); padding: 0 var(--msp-panel-inset) var(--msp-panel-inset); border-radius: var(--msp-radius-lg); background: var(--msp-color-panel); box-shadow: inset 0 0 0 1px var(--msp-glass-edge); font-size: var(--msp-font-size-sm)`,children:[n(`div`,{style:`display: flex; align-items: center; height: 40px; padding: 0 var(--msp-space-4); font-weight: 600`,children:`Panel`}),[`Polymer`,`Ligand`,`Water`].map((e,t)=>r(`div`,{style:{display:`flex`,alignItems:`center`,gap:`var(--msp-space-2)`,height:`var(--msp-row-height)`,padding:`0 var(--msp-inset)`,borderRadius:`var(--msp-radius-md)`,background:t===1?`var(--msp-color-hover)`:`transparent`},children:[e,n(`span`,{style:`color: var(--msp-color-text-muted)`,children:`a description`})]})),n(`div`,{style:`display: flex; align-items: center; height: var(--msp-control-height); padding: 0 var(--msp-inset); border-radius: var(--msp-radius-md); background: var(--msp-color-control)`,children:`A field: its text at the same inset`})]}),n(`p`,{style:j,children:`The panel insets its content by --msp-panel-inset (4px); rows and controls start their text at --msp-inset (8px), so it lines up with the header's 12px; rows are --msp-space-1 apart.`})]})]}))},B=[[`Pick the move by what must not change`,`Grow (to its height) for content in a flow: folds, sections. Slide for panels. Fade, opacity only, for what must keep its size: a band drawn on a canvas, the 3D canvas itself (growing would lay it out again every frame, and it jitters).`],[`Replace by a scoped view transition`,"One view replacing another (a right panel by another) swaps as a view transition scoped to its container where the browser has them (`Show` `swap`, `swapIn`). Never the document's: it snapshots the page and the 3D canvas stands still. Elsewhere, at once."],[`Calm before the content`,`The canvas starts quiet and is quiet while the empty canvas's mark and splash are up (no axes, nothing half drawn); what loads comes in gradually over the canvas's own color.`],[`Guard against flashes`,`Only a settled state animates in: the mark waits for the canvas to be empty and the viewer idle (work restarts the wait), so a scene cleared to load the next never flashes it, and a load it never showed for appears at once.`],[`Cheap to run`,`transform and opacity only, never layout in a frame; nothing animates on the first render, on a tab switch inside a panel, for rows of a list; nothing at all under reduced motion.`]],V={render:()=>l(()=>{let e=f(!1),t=f(!1),i=f(`chain-id`),a=f(!0),c=f(`home`),l=f(!0),u,d=`display: grid; gap: var(--msp-space-3); align-content: start; padding: var(--msp-space-4); border-radius: var(--msp-radius-lg); background: var(--msp-color-panel); box-shadow: inset 0 0 0 1px var(--msp-glass-edge);`;return r(`div`,{style:{display:`grid`,gap:`var(--msp-space-4)`,padding:`var(--msp-space-5)`,maxWidth:`960px`,"--msp-motion-fast":e.asReadonly.pipe(s(e=>e?`500ms`:``)),"--msp-motion-base":e.asReadonly.pipe(s(e=>e?`900ms`:``)),"--msp-motion-fade":e.asReadonly.pipe(s(e=>e?`1800ms`:``)),"--msp-motion-reveal":e.asReadonly.pipe(s(e=>e?`4500ms`:``))},children:[r(`section`,{style:`display: grid; gap: var(--msp-space-3);`,children:[n(`h3`,{style:A,children:`Principles`}),n(`dl`,{style:`display: grid; grid-template-columns: minmax(180px, max-content) 1fr; gap: var(--msp-space-2) var(--msp-space-4); margin: 0;`,children:B.map(([e,t])=>[n(`dt`,{style:`font-size: var(--msp-font-size-sm); font-weight: 600;`,children:e}),n(`dd`,{style:`${j}; margin: 0;`,children:t})])})]}),r(`div`,{style:`display: flex; gap: var(--msp-space-5); align-items: center;`,children:[r(`label`,{style:`display: flex; gap: 6px; align-items: center; font-size: var(--msp-font-size-sm);`,children:[n(`input`,{type:`checkbox`,checked:e.asReadonly,onChange:t=>e.set(t.currentTarget.checked)}),`Slow motion (×5)`]}),n(`p`,{style:j,children:`--msp-motion-fast 100 ms · --msp-motion-base 220 ms · --msp-motion-fade 360 ms · --msp-motion-reveal 900 ms · --msp-ease (0.2, 0, 0, 1) · --msp-ease-reveal (0.4, 0, 0.2, 1)`})]}),r(`div`,{style:`display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: var(--msp-space-4);`,children:[r(`section`,{style:d,children:[n(`h3`,{style:A,children:`Fold (trees, groups, sections)`}),n(`p`,{style:j,children:`The chevron turns (fast); the content grows in (base) and collapses back.`}),n(C,{label:`1TQN`,children:[`Polymer`,`Ligand`,`Water`]}),n(C,{label:`Advanced`,children:[`Quality`,`Smoothness`,`Ignore light`]})]}),r(`section`,{style:d,children:[n(`h3`,{style:A,children:`Panel (the right dock, cards)`}),n(`p`,{style:j,children:`Slides in from the side and back; a tab switch inside does not move.`}),n(v,{size:`sm`,onClick:()=>t.set(!t.value),children:t.asReadonly.pipe(s(e=>e?`Close`:`Open`))}),n(`div`,{style:`min-height: 120px;`,children:n(o,{when:t.asReadonly,reveal:`side`,children:()=>n(`div`,{style:`height: 110px; padding: var(--msp-space-4); border-radius: var(--msp-radius-md); background: var(--msp-color-raised); font-size: var(--msp-font-size-sm);`,children:`A panel`})})})]}),r(`section`,{style:d,children:[n(`h3`,{style:A,children:`State (hover, press, lists)`}),n(`p`,{style:j,children:`Colors change (fast); an option list drops in.`}),r(`div`,{style:`display: flex; gap: var(--msp-space-3);`,children:[n(v,{size:`sm`,children:`Hover me`}),n(v,{size:`sm`,variant:`primary`,children:`Press me`})]}),n(h,{size:`sm`,"aria-label":`Color theme`,options:[[`chain-id`,`Chain ID`],[`element-symbol`,`Element symbol`],[`uniform`,`Uniform`]],value:i.asReadonly,onChange:e=>i.set(e)})]}),r(`section`,{style:d,children:[n(`h3`,{style:A,children:`Fade (a band on the canvas)`}),n(`p`,{style:j,children:`Only its opacity moves: drawn on a canvas, it keeps its size (fade).`}),n(v,{size:`sm`,onClick:()=>a.set(!a.value),children:a.asReadonly.pipe(s(e=>e?`Hide the band`:`Show the band`))}),n(`div`,{style:`height: 48px;`,children:n(o,{when:a.asReadonly,reveal:`fade`,children:()=>n(`div`,{style:`height: 48px; border-radius: var(--msp-radius-md); background: repeating-linear-gradient(90deg, var(--msp-color-raised) 0 10px, var(--msp-color-panel) 10px 14px); font: var(--msp-font-size-xs) var(--msp-font-mono); display: flex; align-items: center; padding-inline: var(--msp-space-3);`,children:`MKTAYIAKQRQISFVKSHFSRQ`})})})]}),r(`section`,{style:d,children:[n(`h3`,{style:A,children:`Swap (one panel for another)`}),n(`p`,{style:j,children:`A scoped view transition where the browser has one; elsewhere at once.`}),n(`div`,{style:`display: flex; gap: var(--msp-space-2);`,children:[`home`,`structure`,`selection`].map(e=>n(v,{size:`sm`,onClick:()=>c.set(e),children:e[0].toUpperCase()+e.slice(1)}))}),n(`div`,{ref:e=>{u=e},style:`min-height: 90px;`,children:n(o,{when:c.asReadonly,swap:()=>u,children:e=>n(`div`,{style:`padding: var(--msp-space-4); border-radius: var(--msp-radius-md); background: var(--msp-color-raised); font-size: var(--msp-font-size-sm);`,children:`The ${e} panel`})})})]}),r(`section`,{style:d,children:[n(`h3`,{style:A,children:`Reveal (the canvas)`}),n(`p`,{style:j,children:`Quiet under the empty mark; what loads comes in over the canvas's own color.`}),n(v,{size:`sm`,onClick:()=>l.set(!l.value),children:l.asReadonly.pipe(s(e=>e?`Load`:`Clear`))}),n(`div`,{style:`height: 90px; border-radius: var(--msp-radius-md); background: var(--msp-color-bg); overflow: hidden;`,children:n(`div`,{style:{height:`100%`,display:`grid`,placeItems:`center`,transition:`opacity var(--msp-motion-reveal) var(--msp-ease)`,opacity:l.asReadonly.pipe(s(e=>e?`0`:`1`))},children:n(m,{name:`cartoon`})})})]})]})]})})},H=[`ColorTokens`,`Surfaces`,`Themes`,`Type`,`Spacing`,`Motion`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style={section}>
        {Groups.map(([title, text, tokens]) => <>
            <h2 style={heading}>{title}</h2>
            <p style={note}>{text}</p>
            <div style={grid}>
              {tokens.map(t => <Swatch token={\`--msp-color-\${t}\`} />)}
            </div>
          </>)}
        <h2 style={heading}>Glass</h2>
        <p style={note}>Over the canvas: translucent, blurred; the panel's is more opaque, for reading.</p>
        <div style={grid}>
          {Glass.map(t => <Swatch token={t} />)}
        </div>
        <h2 style={heading}>Node kinds</h2>
        <p style={note}>For extensions' and node kinds' brands (the classic card accents).</p>
        <div style={grid}>
          {Accents.map(c => <Swatch token={\`--msp-accent-\${c}\`} />)}
        </div>
      </div>)
}`,...M.parameters?.docs?.source},description:{story:`The color tokens of the current theme, by role (switch themes in the toolbar).`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style="padding: var(--msp-space-5); display: grid; gap: var(--msp-space-3); max-width: 360px; font-size: var(--msp-font-size-sm)">
        <div style="padding: var(--msp-space-4); border-radius: var(--msp-radius-lg); background: var(--msp-color-panel); display: grid; gap: var(--msp-space-3)">
          <b>Panel</b>
          <span style="color: var(--msp-color-text-muted)">A label, muted · a hint, subtle</span>
          <div style="padding: var(--msp-space-3); border-radius: var(--msp-radius-md); background: var(--msp-color-well); display: grid; gap: var(--msp-space-2)">
            <b>Well (an open action)</b>
            <div style="height: 24px; border-radius: var(--msp-radius-md); background: var(--msp-color-control); padding: 0 var(--msp-space-3); display: flex; align-items: center">
              Control
            </div>
            <div style="height: 24px; border-radius: var(--msp-radius-md); background: var(--msp-color-hover); padding: 0 var(--msp-space-3); display: flex; align-items: center">
              Hover
            </div>
            <div style="height: 24px; border-radius: var(--msp-radius-md); background: var(--msp-color-pressed); padding: 0 var(--msp-space-3); display: flex; align-items: center">
              Pressed
            </div>
            <span style="justify-self: end; color: var(--msp-color-accent); font-weight: 600">Download</span>
          </div>
          <span style="color: var(--msp-color-text-subtle)">Subtle: placeholders, counts, dates</span>
        </div>
      </div>)
}`,...N.parameters?.docs?.source},description:{story:`How the surfaces layer: a panel on the base, a well inside it (an open action), its fields at the control tone,
hover and pressed above; text in its three tones; the accent only on the action.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
        {['light', 'dark', 'blue', 'contrast'].map(theme => <div data-msp-theme={theme} style="background: var(--msp-color-bg); color: var(--msp-color-text); padding: var(--msp-space-5); display: grid; gap: var(--msp-space-3); font-size: var(--msp-font-size-sm)">
            <b style="text-transform: capitalize">{theme}</b>
            <div style="background: var(--msp-color-panel); padding: var(--msp-space-3); border-radius: var(--msp-radius-md); display: grid; gap: 6px">
              <span>
                Panel <span style="color: var(--msp-color-text-muted)">muted</span>{' '}
                <span style="color: var(--msp-color-text-subtle)">subtle</span>
              </span>
              <div style="background: var(--msp-color-well); padding: 6px var(--msp-space-3); border-radius: var(--msp-radius-md); display: flex; justify-content: space-between">
                <span style="background: var(--msp-color-control); padding: 0 var(--msp-space-3); border-radius: var(--msp-radius-md)">
                  Field
                </span>
                <span style="color: var(--msp-color-accent); font-weight: 600">Apply</span>
              </div>
            </div>
          </div>)}
      </div>)
}`,...P.parameters?.docs?.source},description:{story:"The same panel in every theme: `data-msp-theme` on any element recomputes every derived token below it.",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style={section}>
        {['xs', 'sm', 'md', 'lg'].map(s => <div style={{
      fontSize: \`var(--msp-font-size-\${s})\`
    }}>
            --msp-font-size-{s}: The quick brown fox jumps over the lazy dog
          </div>)}
        <code style="font-family: var(--msp-font-mono)">--msp-font-mono: MALYGTHSHGLFKKLGIPGPTPLP</code>
      </div>)
}`,...F.parameters?.docs?.source},description:{story:`Type: the sizes (11, 12, 14, 16 px; panels read at 12) and the monospace face (sequences, code).`,...F.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style={section}>
        <h3 style={heading}>Scale</h3>
        <TokenTable rows={Scale} bars />
        <h3 style={heading}>Rules</h3>
        <TokenTable rows={Rules} bars />
        <h3 style={heading}>Sizes</h3>
        <TokenTable rows={Sizes} />
        <h3 style={heading}>In a panel</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--msp-space-5); align-items: start">
          <div style="display: grid; gap: var(--msp-space-1); padding: 0 var(--msp-panel-inset) var(--msp-panel-inset); border-radius: var(--msp-radius-lg); background: var(--msp-color-panel); box-shadow: inset 0 0 0 1px var(--msp-glass-edge); font-size: var(--msp-font-size-sm)">
            <div style="display: flex; align-items: center; height: 40px; padding: 0 var(--msp-space-4); font-weight: 600">
              Panel
            </div>
            {['Polymer', 'Ligand', 'Water'].map((label, i) => <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--msp-space-2)',
          height: 'var(--msp-row-height)',
          padding: '0 var(--msp-inset)',
          borderRadius: 'var(--msp-radius-md)',
          background: i === 1 ? 'var(--msp-color-hover)' : 'transparent'
        }}>
                {label}
                <span style="color: var(--msp-color-text-muted)">a description</span>
              </div>)}
            <div style="display: flex; align-items: center; height: var(--msp-control-height); padding: 0 var(--msp-inset); border-radius: var(--msp-radius-md); background: var(--msp-color-control)">
              A field: its text at the same inset
            </div>
          </div>
          <p style={note}>
            The panel insets its content by --msp-panel-inset (4px); rows and controls start their text at --msp-inset
            (8px), so it lines up with the header's 12px; rows are --msp-space-1 apart.
          </p>
        </div>
      </div>)
}`,...z.parameters?.docs?.source},description:{story:`Spacing: every padding, margin and gap is a step of the scale or a rule named after it (styles:check rejects other
px there, but 1px hairlines and values marked \`off-scale\` with their reason). The panel below is laid out with them:
the panel's inset, rows' text at the inset, rows a step apart.`,...z.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => story(() => {
    const slow = observableState(false);
    const panel = observableState(false);
    const theme = observableState('chain-id');
    const band = observableState(true);
    const tab = observableState<'home' | 'structure' | 'selection'>('home');
    const quiet = observableState(true);
    let swapScope: HTMLElement | undefined;
    const card = 'display: grid; gap: var(--msp-space-3); align-content: start; padding: var(--msp-space-4); border-radius: var(--msp-radius-lg); background: var(--msp-color-panel); box-shadow: inset 0 0 0 1px var(--msp-glass-edge);';
    return <div style={{
      display: 'grid',
      gap: 'var(--msp-space-4)',
      padding: 'var(--msp-space-5)',
      maxWidth: '960px',
      '--msp-motion-fast': slow.asReadonly.pipe(map(s => s ? '500ms' : '')),
      '--msp-motion-base': slow.asReadonly.pipe(map(s => s ? '900ms' : '')),
      '--msp-motion-fade': slow.asReadonly.pipe(map(s => s ? '1800ms' : '')),
      '--msp-motion-reveal': slow.asReadonly.pipe(map(s => s ? '4500ms' : ''))
    }}>
          <section style="display: grid; gap: var(--msp-space-3);">
            <h3 style={heading}>Principles</h3>
            <dl style="display: grid; grid-template-columns: minmax(180px, max-content) 1fr; gap: var(--msp-space-2) var(--msp-space-4); margin: 0;">
              {MotionPrinciples.map(([rule, why]) => [<dt style="font-size: var(--msp-font-size-sm); font-weight: 600;">{rule}</dt>, <dd style={\`\${note}; margin: 0;\`}>{why}</dd>])}
            </dl>
          </section>
          <div style="display: flex; gap: var(--msp-space-5); align-items: center;">
            <label style="display: flex; gap: 6px; align-items: center; font-size: var(--msp-font-size-sm);">
              <input type="checkbox" checked={slow.asReadonly} onChange={e => slow.set(e.currentTarget.checked)} />
              Slow motion (×5)
            </label>
            <p style={note}>
              --msp-motion-fast 100 ms · --msp-motion-base 220 ms · --msp-motion-fade 360 ms · --msp-motion-reveal 900
              ms · --msp-ease (0.2, 0, 0, 1) · --msp-ease-reveal (0.4, 0, 0.2, 1)
            </p>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: var(--msp-space-4);">
            <section style={card}>
              <h3 style={heading}>Fold (trees, groups, sections)</h3>
              <p style={note}>The chevron turns (fast); the content grows in (base) and collapses back.</p>
              <FoldRow label="1TQN" children={['Polymer', 'Ligand', 'Water']} />
              <FoldRow label="Advanced" children={['Quality', 'Smoothness', 'Ignore light']} />
            </section>
            <section style={card}>
              <h3 style={heading}>Panel (the right dock, cards)</h3>
              <p style={note}>Slides in from the side and back; a tab switch inside does not move.</p>
              <Button size="sm" onClick={() => panel.set(!panel.value)}>
                {panel.asReadonly.pipe(map(p => p ? 'Close' : 'Open'))}
              </Button>
              <div style="min-height: 120px;">
                <Show when={panel.asReadonly} reveal="side">
                  {() => <div style="height: 110px; padding: var(--msp-space-4); border-radius: var(--msp-radius-md); background: var(--msp-color-raised); font-size: var(--msp-font-size-sm);">
                      A panel
                    </div>}
                </Show>
              </div>
            </section>
            <section style={card}>
              <h3 style={heading}>State (hover, press, lists)</h3>
              <p style={note}>Colors change (fast); an option list drops in.</p>
              <div style="display: flex; gap: var(--msp-space-3);">
                <Button size="sm">Hover me</Button>
                <Button size="sm" variant="primary">
                  Press me
                </Button>
              </div>
              <Select size="sm" aria-label="Color theme" options={[['chain-id', 'Chain ID'], ['element-symbol', 'Element symbol'], ['uniform', 'Uniform']]} value={theme.asReadonly} onChange={v => theme.set(v)} />
            </section>
            <section style={card}>
              <h3 style={heading}>Fade (a band on the canvas)</h3>
              <p style={note}>Only its opacity moves: drawn on a canvas, it keeps its size (fade).</p>
              <Button size="sm" onClick={() => band.set(!band.value)}>
                {band.asReadonly.pipe(map(b => b ? 'Hide the band' : 'Show the band'))}
              </Button>
              <div style="height: 48px;">
                <Show when={band.asReadonly} reveal="fade">
                  {() => <div style="height: 48px; border-radius: var(--msp-radius-md); background: repeating-linear-gradient(90deg, var(--msp-color-raised) 0 10px, var(--msp-color-panel) 10px 14px); font: var(--msp-font-size-xs) var(--msp-font-mono); display: flex; align-items: center; padding-inline: var(--msp-space-3);">
                      MKTAYIAKQRQISFVKSHFSRQ
                    </div>}
                </Show>
              </div>
            </section>
            <section style={card}>
              <h3 style={heading}>Swap (one panel for another)</h3>
              <p style={note}>A scoped view transition where the browser has one; elsewhere at once.</p>
              <div style="display: flex; gap: var(--msp-space-2);">
                {(['home', 'structure', 'selection'] as const).map(t => <Button size="sm" onClick={() => tab.set(t)}>
                    {t[0].toUpperCase() + t.slice(1)}
                  </Button>)}
              </div>
              <div ref={el => {
            swapScope = el;
          }} style="min-height: 90px;">
                <Show when={tab.asReadonly} swap={() => swapScope}>
                  {t => <div style="padding: var(--msp-space-4); border-radius: var(--msp-radius-md); background: var(--msp-color-raised); font-size: var(--msp-font-size-sm);">
                      {\`The \${t} panel\`}
                    </div>}
                </Show>
              </div>
            </section>
            <section style={card}>
              <h3 style={heading}>Reveal (the canvas)</h3>
              <p style={note}>Quiet under the empty mark; what loads comes in over the canvas's own color.</p>
              <Button size="sm" onClick={() => quiet.set(!quiet.value)}>
                {quiet.asReadonly.pipe(map(q => q ? 'Load' : 'Clear'))}
              </Button>
              <div style="height: 90px; border-radius: var(--msp-radius-md); background: var(--msp-color-bg); overflow: hidden;">
                <div style={{
              height: '100%',
              display: 'grid',
              placeItems: 'center',
              transition: 'opacity var(--msp-motion-reveal) var(--msp-ease)',
              opacity: quiet.asReadonly.pipe(map(q => q ? '0' : '1'))
            }}>
                  <Icon name="cartoon" />
                </div>
              </div>
            </section>
          </div>
        </div>;
  })
}`,...V.parameters?.docs?.source},description:{story:'Motion: what moves, and how (`--msp-motion-fast` for state changes, `--msp-motion-base` for content that opens,\n`--msp-motion-fade` for what only fades, `--msp-motion-reveal` for the canvas coming in, `--msp-ease`, and\n`--msp-ease-reveal` for opening and closing). Content that opens grows to its height and fades in, and closing plays\nit back (Show\'s `reveal`; `dom/motion.ts` for code that hides content itself, as section lists do); panels slide in\nfrom the side; a band only fades (`reveal="fade"`); one panel replacing another swaps by a scoped view transition\n(`swap`); the canvas is quiet under the empty mark and comes in on a load; chevrons turn; hover and press change\ncolor; option lists and popovers drop in. Nothing animates on the first render, on a tab switch inside a panel, for\nrows of a list, or with reduced motion. Slow motion (×5) to look at them.',...V.parameters?.docs?.description}}}})))()}U();export{M as ColorTokens,V as Motion,z as Spacing,N as Surfaces,P as Themes,F as Type,H as __namedExportsOrder,w as default};