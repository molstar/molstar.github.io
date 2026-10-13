import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,i as n,n as r,o as i,r as a,t as o}from"./jsx-runtime-pJJ4pzd1.js";import{n as s,t as c}from"./map-BLVP9Oyc.js";import{n as l,r as u}from"./observable-state-U0Aegh1x.js";import{i as d,r as f}from"./control-flow-D80wAH1n.js";import{n as p,t as m}from"./icon-Cd9kBD44.js";import{n as h,t as g}from"./wordmark-D5tvrxoo.js";import{i as _,n as v}from"./select-Bk_tLTmE.js";import{n as y,t as b}from"./button-nz8xXRSW.js";function x(e){return a(`div`,{style:`display: grid; gap: var(--msp-space-2); font-size: var(--msp-font-size-xs)`,children:[r(`div`,{style:{height:`36px`,borderRadius:`var(--msp-radius-md)`,background:`var(${e.token})`,boxShadow:`inset 0 0 0 1px var(--msp-glass-edge)`}}),r(`code`,{style:`color: var(--msp-color-text-muted)`,children:e.token})]})}function S(e){return a(`div`,{style:`display: grid; grid-template-columns: 180px 48px 32px 1fr; gap: var(--msp-space-4); align-items: center; min-height: var(--msp-row-height)`,children:[r(`code`,{style:`font-size: var(--msp-font-size-xs); color: var(--msp-color-text)`,children:e.token}),r(`span`,{style:`color: var(--msp-color-text-muted); font-variant-numeric: tabular-nums`}),r(`div`,{style:{width:e.bar?`var(${e.token})`:`0`,height:`12px`,borderRadius:`var(--msp-radius-sm)`,background:`var(--msp-color-accent)`}}),r(`span`,{style:P,children:e.use})]})}function C(e){let t=document.createElement(`div`);t.style.width=`var(${e})`,document.body.append(t);let n=`${Math.round(t.getBoundingClientRect().width*10)/10}px`;return t.remove(),n}function w(e){return r(`div`,{style:`display: grid`,children:e.rows.map(([t,n])=>{let i=r(S,{token:t,use:n,bar:e.bars});return i.children[1].textContent=C(t),i})})}function T(e){let t=u(!1);return a(`div`,{children:[a(`button`,{type:`button`,style:`display: flex; align-items: center; gap: 6px; width: 100%; height: 26px; padding: 0 var(--msp-space-2); border-radius: var(--msp-radius-md); color: var(--msp-color-text); font-size: var(--msp-font-size-sm);`,"aria-expanded":t.asReadonly,onClick:()=>t.set(!t.value),children:[r(`span`,{style:{display:`inline-flex`,transition:`transform var(--msp-motion-fast) var(--msp-ease)`,transform:t.asReadonly.pipe(s(e=>e?`rotate(90deg)`:`none`))},children:r(m,{name:`chevron-right`,size:14})}),e.label]}),r(f,{when:t.asReadonly,reveal:!0,children:()=>r(`div`,{style:`display: grid; padding-left: var(--msp-space-6);`,children:e.children.map(e=>r(`div`,{style:`height: 26px; display: flex; align-items: center; color: var(--msp-color-text-muted); font-size: var(--msp-font-size-sm);`,children:e}))})})]})}function E(e){return a(`div`,{"data-msp-theme":e.theme,style:`display: grid; gap: 20px; padding: 20px; border-radius: var(--msp-radius-lg); background: var(--msp-color-panel); color: var(--msp-color-text);`,children:[a(`div`,{style:`display: grid; gap: var(--msp-space-3)`,children:[r(`span`,{style:P,children:`The wordmark (Home's heading; the empty canvas at 3×): hover it for the logo's colors`}),a(`div`,{style:`display: flex; gap: var(--msp-space-6); align-items: end; flex-wrap: wrap`,children:[r(g,{}),r(g,{scale:2}),r(g,{scale:3,live:!0})]})]}),a(`div`,{style:`display: grid; gap: var(--msp-space-3)`,children:[r(`span`,{style:P,children:`The Home icon (16, 20, 24, 48 px)`}),r(`div`,{style:`display: flex; gap: var(--msp-space-5); align-items: center`,children:[16,20,24,48].map(e=>r(m,{name:`prism`,size:e}))})]})]})}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{c(),y(),p(),h(),_(),d(),l(),n(),o(),D={title:`Overview/Foundations`},O=[[`Surfaces`,`From the base to the strongest: a panel, a control, hover, pressed; a well is a block inside a panel (an open action, a section), a step the other way.`,[`bg`,`panel`,`raised`,`control`,`hover`,`pressed`,`well`]],[`Text`,`Body, labels and secondary text, hints and placeholders.`,[`text`,`text-muted`,`text-subtle`]],[`States`,`The accent only for actions and the picked item; the rest for messages.`,[`accent`,`accent-strong`,`danger`,`success`,`warning`,`info`,`focus-ring`]],[`Brand`,`The logo's colors (the wordmark's flash): lighter on dark themes.`,[`brand-1`,`brand-2`,`brand-3`,`brand-4`]]],k=[`--msp-glass-bg`,`--msp-glass-panel-bg`],A=[`cyan`,`red`,`gray`,`green`,`purple`,`blue`,`orange`],j=`display: grid; grid-template-columns: repeat(auto-fill, minmax(132px, 1fr)); gap: var(--msp-space-4);`,M=`display: grid; gap: var(--msp-space-4); padding: var(--msp-space-5); max-width: 960px;`,N=`margin: var(--msp-space-3) 0 0; font-size: var(--msp-font-size-md);`,P=`margin: 0; color: var(--msp-color-text-muted); font-size: var(--msp-font-size-sm);`,F={render:()=>t(()=>a(`div`,{style:M,children:[O.map(([e,t,n])=>a(i,{children:[r(`h2`,{style:N,children:e}),r(`p`,{style:P,children:t}),r(`div`,{style:j,children:n.map(e=>r(x,{token:`--msp-color-${e}`}))})]})),r(`h2`,{style:N,children:`Glass`}),r(`p`,{style:P,children:`Over the canvas: translucent, blurred; the panel's is more opaque, for reading.`}),r(`div`,{style:j,children:k.map(e=>r(x,{token:e}))}),r(`h2`,{style:N,children:`Node kinds`}),r(`p`,{style:P,children:`For extensions' and node kinds' brands (the classic card accents).`}),r(`div`,{style:j,children:A.map(e=>r(x,{token:`--msp-accent-${e}`}))})]}))},I={render:()=>t(()=>r(`div`,{style:`padding: var(--msp-space-5); display: grid; gap: var(--msp-space-3); max-width: 360px; font-size: var(--msp-font-size-sm)`,children:a(`div`,{style:`padding: var(--msp-space-4); border-radius: var(--msp-radius-lg); background: var(--msp-color-panel); display: grid; gap: var(--msp-space-3)`,children:[r(`b`,{children:`Panel`}),r(`span`,{style:`color: var(--msp-color-text-muted)`,children:`A label, muted · a hint, subtle`}),a(`div`,{style:`padding: var(--msp-space-3); border-radius: var(--msp-radius-md); background: var(--msp-color-well); display: grid; gap: var(--msp-space-2)`,children:[r(`b`,{children:`Well (an open action)`}),r(`div`,{style:`height: 24px; border-radius: var(--msp-radius-md); background: var(--msp-color-control); padding: 0 var(--msp-space-3); display: flex; align-items: center`,children:`Control`}),r(`div`,{style:`height: 24px; border-radius: var(--msp-radius-md); background: var(--msp-color-hover); padding: 0 var(--msp-space-3); display: flex; align-items: center`,children:`Hover`}),r(`div`,{style:`height: 24px; border-radius: var(--msp-radius-md); background: var(--msp-color-pressed); padding: 0 var(--msp-space-3); display: flex; align-items: center`,children:`Pressed`}),r(`span`,{style:`justify-self: end; color: var(--msp-color-accent); font-weight: 600`,children:`Download`})]}),r(`span`,{style:`color: var(--msp-color-text-subtle)`,children:`Subtle: placeholders, counts, dates`})]})}))},L={render:()=>t(()=>r(`div`,{style:`display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));`,children:[`light`,`dark`,`blue`].map(e=>a(`div`,{"data-msp-theme":e,style:`background: var(--msp-color-bg); color: var(--msp-color-text); padding: var(--msp-space-5); display: grid; gap: var(--msp-space-3); font-size: var(--msp-font-size-sm)`,children:[r(`b`,{style:`text-transform: capitalize`,children:e}),a(`div`,{style:`background: var(--msp-color-panel); padding: var(--msp-space-3); border-radius: var(--msp-radius-md); display: grid; gap: 6px`,children:[a(`span`,{children:[`Panel `,r(`span`,{style:`color: var(--msp-color-text-muted)`,children:`muted`}),` `,r(`span`,{style:`color: var(--msp-color-text-subtle)`,children:`subtle`})]}),a(`div`,{style:`background: var(--msp-color-well); padding: 6px var(--msp-space-3); border-radius: var(--msp-radius-md); display: flex; justify-content: space-between`,children:[r(`span`,{style:`background: var(--msp-color-control); padding: 0 var(--msp-space-3); border-radius: var(--msp-radius-md)`,children:`Field`}),r(`span`,{style:`color: var(--msp-color-accent); font-weight: 600`,children:`Apply`})]})]})]}))}))},R={render:()=>t(()=>a(`div`,{style:M,children:[[`xs`,`sm`,`md`,`lg`].map(e=>a(`div`,{style:{fontSize:`var(--msp-font-size-${e})`},children:[`--msp-font-size-`,e,`: The quick brown fox jumps over the lazy dog`]})),r(`code`,{style:`font-family: var(--msp-font-mono)`,children:`--msp-font-mono: MALYGTHSHGLFKKLGIPGPTPLP`})]}))},z=[[`--msp-space-1`,`Between rows of a list; between a label and its hint`],[`--msp-space-2`,`Inside a row (icon to text); between controls in a group; a panel's inset`],[`--msp-space-3`,`Between groups in a form; a card's inner gap; where text starts in a control`],[`--msp-space-4`,`A card's padding; between sections`],[`--msp-space-5`,`Between blocks of a page`],[`--msp-space-6`,`Empty states; large separations`]],B=[[`--msp-inset`,`Where text starts inside a control or a row: fields, selects, buttons and tree rows line up`],[`--msp-panel-inset`,`A panel's content inset at its sides and bottom (rows inside pad to --msp-inset)`],[`--msp-canvas-edge`,`The margin of everything floating over the canvas`]],V=[[`--msp-row-height`,`A list or tree row`],[`--msp-control-height`,`Fields, selects, buttons`],[`--msp-label-width`,`A form's label column`],[`--msp-icon-sm`,`Small icons (a chevron), for indents after them`],[`--msp-icon-md`,`A row's kind icon`]],H={render:()=>t(()=>a(`div`,{style:M,children:[r(`h3`,{style:N,children:`Scale`}),r(w,{rows:z,bars:!0}),r(`h3`,{style:N,children:`Rules`}),r(w,{rows:B,bars:!0}),r(`h3`,{style:N,children:`Sizes`}),r(w,{rows:V}),r(`h3`,{style:N,children:`In a panel`}),a(`div`,{style:`display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--msp-space-5); align-items: start`,children:[a(`div`,{style:`display: grid; gap: var(--msp-space-1); padding: 0 var(--msp-panel-inset) var(--msp-panel-inset); border-radius: var(--msp-radius-lg); background: var(--msp-color-panel); box-shadow: inset 0 0 0 1px var(--msp-glass-edge); font-size: var(--msp-font-size-sm)`,children:[r(`div`,{style:`display: flex; align-items: center; height: 40px; padding: 0 var(--msp-space-4); font-weight: 600`,children:`Panel`}),[`Polymer`,`Ligand`,`Water`].map((e,t)=>a(`div`,{style:{display:`flex`,alignItems:`center`,gap:`var(--msp-space-2)`,height:`var(--msp-row-height)`,padding:`0 var(--msp-inset)`,borderRadius:`var(--msp-radius-md)`,background:t===1?`var(--msp-color-hover)`:`transparent`},children:[e,r(`span`,{style:`color: var(--msp-color-text-muted)`,children:`a description`})]})),r(`div`,{style:`display: flex; align-items: center; height: var(--msp-control-height); padding: 0 var(--msp-inset); border-radius: var(--msp-radius-md); background: var(--msp-color-control)`,children:`A field: its text at the same inset`})]}),r(`p`,{style:P,children:`The panel insets its content by --msp-panel-inset (4px); rows and controls start their text at --msp-inset (8px), so it lines up with the header's 12px; rows are --msp-space-1 apart.`})]})]}))},U={render:()=>t(()=>{let e=u(!1),t=u(!1),n=u(`chain-id`),i=`display: grid; gap: var(--msp-space-3); align-content: start; padding: var(--msp-space-4); border-radius: var(--msp-radius-lg); background: var(--msp-color-panel); box-shadow: inset 0 0 0 1px var(--msp-glass-edge);`;return a(`div`,{style:{display:`grid`,gap:`var(--msp-space-4)`,padding:`var(--msp-space-5)`,maxWidth:`960px`,"--msp-motion-fast":e.asReadonly.pipe(s(e=>e?`500ms`:``)),"--msp-motion-base":e.asReadonly.pipe(s(e=>e?`900ms`:``))},children:[a(`div`,{style:`display: flex; gap: var(--msp-space-5); align-items: center;`,children:[a(`label`,{style:`display: flex; gap: 6px; align-items: center; font-size: var(--msp-font-size-sm);`,children:[r(`input`,{type:`checkbox`,checked:e.asReadonly,onChange:t=>e.set(t.currentTarget.checked)}),`Slow motion (×5)`]}),r(`p`,{style:P,children:`--msp-motion-fast 100 ms · --msp-motion-base 220 ms · --msp-ease (0.2, 0, 0, 1) · --msp-ease-reveal (0.4, 0, 0.2, 1)`})]}),a(`div`,{style:`display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: var(--msp-space-4);`,children:[a(`section`,{style:i,children:[r(`h3`,{style:N,children:`Fold (trees, groups, sections)`}),r(`p`,{style:P,children:`The chevron turns (fast); the content grows in (base) and collapses back.`}),r(T,{label:`1TQN`,children:[`Polymer`,`Ligand`,`Water`]}),r(T,{label:`Advanced`,children:[`Quality`,`Smoothness`,`Ignore light`]})]}),a(`section`,{style:i,children:[r(`h3`,{style:N,children:`Panel (the right dock, cards)`}),r(`p`,{style:P,children:`Slides in from the side and back; a tab switch inside does not move.`}),r(b,{size:`sm`,onClick:()=>t.set(!t.value),children:t.asReadonly.pipe(s(e=>e?`Close`:`Open`))}),r(`div`,{style:`min-height: 120px;`,children:r(f,{when:t.asReadonly,reveal:`side`,children:()=>r(`div`,{style:`height: 110px; padding: var(--msp-space-4); border-radius: var(--msp-radius-md); background: var(--msp-color-raised); font-size: var(--msp-font-size-sm);`,children:`A panel`})})})]}),a(`section`,{style:i,children:[r(`h3`,{style:N,children:`State (hover, press, lists)`}),r(`p`,{style:P,children:`Colors change (fast); an option list drops in.`}),a(`div`,{style:`display: flex; gap: var(--msp-space-3);`,children:[r(b,{size:`sm`,children:`Hover me`}),r(b,{size:`sm`,variant:`primary`,children:`Press me`})]}),r(v,{size:`sm`,"aria-label":`Color theme`,options:[[`chain-id`,`Chain ID`],[`element-symbol`,`Element symbol`],[`uniform`,`Uniform`]],value:n.asReadonly,onChange:e=>n.set(e)})]})]})]})})},W={render:()=>t(()=>a(`div`,{style:`display: grid; grid-template-columns: repeat(auto-fit, minmax(420px, 1fr)); gap: var(--msp-space-5); padding: var(--msp-space-5)`,children:[r(E,{theme:`light`}),r(E,{theme:`dark`})]}))},G=[`ColorTokens`,`Surfaces`,`Themes`,`Type`,`Spacing`,`Motion`,`Logo`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:`The color tokens of the current theme, by role (switch themes in the toolbar).`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:`How the surfaces layer: a panel on the base, a well inside it (an open action), its fields at the control tone,
hover and pressed above; text in its three tones; the accent only on the action.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
        {['light', 'dark', 'blue'].map(theme => <div data-msp-theme={theme} style="background: var(--msp-color-bg); color: var(--msp-color-text); padding: var(--msp-space-5); display: grid; gap: var(--msp-space-3); font-size: var(--msp-font-size-sm)">
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
}`,...L.parameters?.docs?.source},description:{story:"The same panel in every theme: `data-msp-theme` on any element recomputes every derived token below it.",...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style={section}>
        {['xs', 'sm', 'md', 'lg'].map(s => <div style={{
      fontSize: \`var(--msp-font-size-\${s})\`
    }}>
            --msp-font-size-{s}: The quick brown fox jumps over the lazy dog
          </div>)}
        <code style="font-family: var(--msp-font-mono)">--msp-font-mono: MALYGTHSHGLFKKLGIPGPTPLP</code>
      </div>)
}`,...R.parameters?.docs?.source},description:{story:`Type: the sizes (11, 12, 14, 16 px; panels read at 12) and the monospace face (sequences, code).`,...R.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source},description:{story:`Spacing: every padding, margin and gap is a step of the scale or a rule named after it (styles:check rejects other
px there, but 1px hairlines and values marked \`off-scale\` with their reason). The panel below is laid out with them:
the panel's inset, rows' text at the inset, rows a step apart.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => story(() => {
    const slow = observableState(false);
    const panel = observableState(false);
    const theme = observableState('chain-id');
    const card = 'display: grid; gap: var(--msp-space-3); align-content: start; padding: var(--msp-space-4); border-radius: var(--msp-radius-lg); background: var(--msp-color-panel); box-shadow: inset 0 0 0 1px var(--msp-glass-edge);';
    return <div style={{
      display: 'grid',
      gap: 'var(--msp-space-4)',
      padding: 'var(--msp-space-5)',
      maxWidth: '960px',
      '--msp-motion-fast': slow.asReadonly.pipe(map(s => s ? '500ms' : '')),
      '--msp-motion-base': slow.asReadonly.pipe(map(s => s ? '900ms' : ''))
    }}>
          <div style="display: flex; gap: var(--msp-space-5); align-items: center;">
            <label style="display: flex; gap: 6px; align-items: center; font-size: var(--msp-font-size-sm);">
              <input type="checkbox" checked={slow.asReadonly} onChange={e => slow.set(e.currentTarget.checked)} />
              Slow motion (×5)
            </label>
            <p style={note}>
              --msp-motion-fast 100 ms · --msp-motion-base 220 ms · --msp-ease (0.2, 0, 0, 1) · --msp-ease-reveal (0.4,
              0, 0.2, 1)
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
          </div>
        </div>;
  })
}`,...U.parameters?.docs?.source},description:{story:"Motion: what moves, and how (`--msp-motion-fast` for state changes, `--msp-motion-base` for content that opens,\n`--msp-ease`, and `--msp-ease-reveal` for opening and closing). Content that opens grows to its height and fades in, and closing plays it back (Show's `reveal`;\n`dom/motion.ts` for code that hides content itself, as section lists do); panels slide in from the side; chevrons\nturn; hover and press change color; option lists and popovers drop in. Nothing animates on the first render, on a\ntab switch, for rows of a list, or with reduced motion. Slow motion (×5) to look at them.",...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(420px, 1fr)); gap: var(--msp-space-5); padding: var(--msp-space-5)">
        <LogoPanel theme="light" />
        <LogoPanel theme="dark" />
      </div>)
}`,...W.parameters?.docs?.source},description:{story:`The logo: the Mol* wordmark with Prism's mark after it, a triangle as tall as the asterisk pointing away from it (a
prism, a play button) with a thicker core inside (a tetrahedron from above); Home's icon is the mark as a delta.`,...W.parameters?.docs?.description}}}})))()}K();export{F as ColorTokens,W as Logo,U as Motion,H as Spacing,I as Surfaces,L as Themes,R as Type,G as __namedExportsOrder,D as default};