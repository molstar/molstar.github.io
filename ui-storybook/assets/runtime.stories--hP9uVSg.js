import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,i as n,m as r,n as i,p as a,r as o,t as s}from"./jsx-runtime-pJJ4pzd1.js";import{n as c,t as l}from"./map-BLVP9Oyc.js";import{n as u,r as d}from"./observable-state-U0Aegh1x.js";import{i as f,n as p,r as m}from"./control-flow-D80wAH1n.js";var h,g,_,v,y,b;function x(){return(x=e((()=>{l(),f(),a(),u(),n(),s(),h={title:`Internals/Runtime`},g=`font: 14px system-ui, sans-serif; padding: var(--msp-space-5); display: grid; gap: var(--msp-space-4); max-width: 420px;`,_={render:()=>t(()=>{let e=d(0),t=d(`Mol*`);return o(`div`,{style:g,children:[o(`label`,{children:[`Name `,i(`input`,{value:t,onInput:e=>t.set(e.currentTarget.value)})]}),o(`p`,{children:[`Hello, `,i(`b`,{children:t}),`! Clicked `,e,` `,e.asReadonly.pipe(c(e=>e===1?`time`:`times`)),`.`]}),o(`div`,{style:`display: flex; gap: var(--msp-space-3)`,children:[i(`button`,{onClick:()=>e.set(e.value+1),children:`Increment`}),i(`button`,{onClick:()=>e.set(0),disabled:e.asReadonly.pipe(c(e=>e===0)),children:`Reset`})]})]})})},v={render:()=>t(()=>{let e=4,t=d([1,2,3].map(e=>({id:e,label:`Item ${e}`}))),n=d([]),a=e=>n.set([e,...n.value].slice(0,6));return o(`div`,{style:g,children:[o(`div`,{style:`display: flex; gap: var(--msp-space-3)`,children:[i(`button`,{onClick:()=>t.set([...t.value,{id:e,label:`Item ${e++}`}]),children:`Add`}),i(`button`,{onClick:()=>t.set([...t.value].sort(()=>Math.random()-.5)),children:`Shuffle`}),i(`button`,{onClick:()=>t.set(t.value.slice(1)),children:`Remove first`})]}),i(`ol`,{"data-testid":`list`,children:i(p,{each:t,fallback:()=>i(`i`,{children:`No items.`}),children:(e,t)=>(a(`created ${e.label}`),r(()=>a(`disposed ${e.label}`)),o(`li`,{children:[e.label,` `,o(`small`,{children:[`(position `,t,`)`]})]}))})}),i(`pre`,{style:`margin: 0; color: #666`,children:n.asReadonly.pipe(c(e=>e.join(`
`)))})]})})},y={render:()=>t(()=>{let e=d(!1);return o(`div`,{style:g,children:[i(`button`,{onClick:()=>e.set(!e.value),children:e.asReadonly.pipe(c(e=>e?`Hide details`:`Show details`))}),i(m,{when:e,fallback:()=>i(`i`,{children:`Details are hidden.`}),children:()=>i(`p`,{children:`Details: rendered in their own scope.`})})]})})},b=[`Bindings`,`KeyedList`,`Conditional`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => story(() => {
    const count = observableState(0);
    const name = observableState('Mol*');
    return <div style={box}>
          <label>
            Name <input value={name} onInput={e => name.set(e.currentTarget.value)} />
          </label>
          <p>
            Hello, <b>{name}</b>! Clicked {count} {count.asReadonly.pipe(map(c => c === 1 ? 'time' : 'times'))}.
          </p>
          <div style="display: flex; gap: var(--msp-space-3)">
            <button onClick={() => count.set(count.value + 1)}>Increment</button>
            <button onClick={() => count.set(0)} disabled={count.asReadonly.pipe(map(c => c === 0))}>
              Reset
            </button>
          </div>
        </div>;
  })
}`,..._.parameters?.docs?.source},description:{story:`Text, attributes and classes bound to states; nothing re-renders, bindings update the DOM.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => story(() => {
    let next = 4;
    const items = observableState<readonly Item[]>([1, 2, 3].map(id => ({
      id,
      label: \`Item \${id}\`
    })));
    const log = observableState<readonly string[]>([]);
    const note = (line: string) => log.set([line, ...log.value].slice(0, 6));
    const shuffle = () => items.set([...items.value].sort(() => Math.random() - 0.5));
    return <div style={box}>
          <div style="display: flex; gap: var(--msp-space-3)">
            <button onClick={() => items.set([...items.value, {
          id: next,
          label: \`Item \${next++}\`
        }])}>Add</button>
            <button onClick={shuffle}>Shuffle</button>
            <button onClick={() => items.set(items.value.slice(1))}>Remove first</button>
          </div>
          <ol data-testid="list">
            <For each={items} fallback={() => <i>No items.</i>}>
              {(item, index) => {
            note(\`created \${item.label}\`);
            onCleanup(() => note(\`disposed \${item.label}\`));
            return <li>
                    {item.label} <small>(position {index})</small>
                  </li>;
          }}
            </For>
          </ol>
          <pre style="margin: 0; color: #666">{log.asReadonly.pipe(map(l => l.join('\\n')))}</pre>
        </div>;
  })
}`,...v.parameters?.docs?.source},description:{story:`A keyed list: each row keeps its DOM node and scope while its item stays; rows log their own creation.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => story(() => {
    const open = observableState(false);
    return <div style={box}>
          <button onClick={() => open.set(!open.value)}>
            {open.asReadonly.pipe(map(o => o ? 'Hide details' : 'Show details'))}
          </button>
          <Show when={open} fallback={() => <i>Details are hidden.</i>}>
            {() => <p>Details: rendered in their own scope.</p>}
          </Show>
        </div>;
  })
}`,...y.parameters?.docs?.source},description:{story:`A branch rendered while a flag holds, disposed when it flips.`,...y.parameters?.docs?.description}}}})))()}x();export{_ as Bindings,y as Conditional,v as KeyedList,b as __namedExportsOrder,h as default};