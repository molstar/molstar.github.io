import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{S as t,b as n,n as r,r as i,t as a}from"./jsx-runtime-Dut-27nP.js";import{i as o,n as s,t as c}from"./control-flow-BGkEkAG8.js";import{b as l,x as u}from"./work-queue-DoxU-HjK.js";import{n as d,t as f}from"./story-root-DtvPaZZ6.js";import{n as p,t as m}from"./observable-state-C67cgDrf.js";var h,g,_,v,y,b;function x(){return(x=e((()=>{o(),n(),m(),f(),u(),a(),h={title:`Internals/Runtime`},g=`font: 14px system-ui, sans-serif; padding: var(--msp-space-5); display: grid; gap: var(--msp-space-4); max-width: 420px;`,_={render:()=>d(()=>{let e=p(0),t=p(`Mol*`);return i(`div`,{style:g,children:[i(`label`,{children:[`Name `,r(`input`,{value:t,onInput:e=>t.set(e.currentTarget.value)})]}),i(`p`,{children:[`Hello, `,r(`b`,{children:t}),`! Clicked `,e,` `,l(e.asReadonly,e=>e===1?`time`:`times`),`.`]}),i(`div`,{style:`display: flex; gap: var(--msp-space-3)`,children:[r(`button`,{onClick:()=>e.set(e.value+1),children:`Increment`}),r(`button`,{onClick:()=>e.set(0),disabled:l(e.asReadonly,e=>e===0),children:`Reset`})]})]})})},v={render:()=>d(()=>{let e=4,n=p([1,2,3].map(e=>({id:e,label:`Item ${e}`}))),a=p([]),o=e=>a.set([e,...a.value].slice(0,6));return i(`div`,{style:g,children:[i(`div`,{style:`display: flex; gap: var(--msp-space-3)`,children:[r(`button`,{onClick:()=>n.set([...n.value,{id:e,label:`Item ${e++}`}]),children:`Add`}),r(`button`,{onClick:()=>n.set([...n.value].sort(()=>Math.random()-.5)),children:`Shuffle`}),r(`button`,{onClick:()=>n.set(n.value.slice(1)),children:`Remove first`})]}),r(`ol`,{"data-testid":`list`,children:r(c,{each:n,fallback:()=>r(`i`,{children:`No items.`}),children:(e,n)=>(o(`created ${e.label}`),t(()=>o(`disposed ${e.label}`)),i(`li`,{children:[e.label,` `,i(`small`,{children:[`(position `,n,`)`]})]}))})}),r(`pre`,{style:`margin: 0; color: #666`,children:l(a.asReadonly,e=>e.join(`
`))})]})})},y={render:()=>d(()=>{let e=p(!1);return i(`div`,{style:g,children:[r(`button`,{onClick:()=>e.set(!e.value),children:l(e.asReadonly,e=>e?`Hide details`:`Show details`)}),r(s,{when:e,fallback:()=>r(`i`,{children:`Details are hidden.`}),children:()=>r(`p`,{children:`Details: rendered in their own scope.`})})]})})},b=[`Bindings`,`KeyedList`,`Conditional`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => story(() => {
    const count = observableState(0);
    const name = observableState('Mol*');
    return <div style={box}>
          <label>
            Name <input value={name} onInput={e => name.set(e.currentTarget.value)} />
          </label>
          <p>
            Hello, <b>{name}</b>! Clicked {count} {derive(count.asReadonly, c => c === 1 ? 'time' : 'times')}.
          </p>
          <div style="display: flex; gap: var(--msp-space-3)">
            <button onClick={() => count.set(count.value + 1)}>Increment</button>
            <button onClick={() => count.set(0)} disabled={derive(count.asReadonly, c => c === 0)}>
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
          <pre style="margin: 0; color: #666">{derive(log.asReadonly, l => l.join('\\n'))}</pre>
        </div>;
  })
}`,...v.parameters?.docs?.source},description:{story:`A keyed list: each row keeps its DOM node and scope while its item stays; rows log their own creation.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => story(() => {
    const open = observableState(false);
    return <div style={box}>
          <button onClick={() => open.set(!open.value)}>
            {derive(open.asReadonly, o => o ? 'Hide details' : 'Show details')}
          </button>
          <Show when={open} fallback={() => <i>Details are hidden.</i>}>
            {() => <p>Details: rendered in their own scope.</p>}
          </Show>
        </div>;
  })
}`,...y.parameters?.docs?.source},description:{story:`A branch rendered while a flag holds, disposed when it flips.`,...y.parameters?.docs?.description}}}})))()}x();export{_ as Bindings,y as Conditional,v as KeyedList,b as __namedExportsOrder,h as default};