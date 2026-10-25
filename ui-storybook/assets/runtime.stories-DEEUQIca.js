import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,n,r,t as i,x as a}from"./jsx-runtime-DbCUSNU3.js";import{b as o,x as s}from"./work-queue-DoxU-HjK.js";import{n as c,t as l}from"./story-root-DfeAHAKA.js";import{n as u,t as d}from"./observable-state-eRUcDuAs.js";import{i as f,n as p,t as m}from"./control-flow-BQuMY04w.js";var h,g,_,v,y,b;function x(){return(x=e((()=>{f(),a(),d(),l(),s(),i(),h={title:`Internals/Runtime`},g=`font: 14px system-ui, sans-serif; padding: var(--msp-space-5); display: grid; gap: var(--msp-space-4); max-width: 420px;`,_={render:()=>c(()=>{let e=u(0),t=u(`Mol*`);return r(`div`,{style:g,children:[r(`label`,{children:[`Name `,n(`input`,{value:t,onInput:e=>t.set(e.currentTarget.value)})]}),r(`p`,{children:[`Hello, `,n(`b`,{children:t}),`! Clicked `,e,` `,o(e.asReadonly,e=>e===1?`time`:`times`),`.`]}),r(`div`,{style:`display: flex; gap: var(--msp-space-3)`,children:[n(`button`,{onClick:()=>e.set(e.value+1),children:`Increment`}),n(`button`,{onClick:()=>e.set(0),disabled:o(e.asReadonly,e=>e===0),children:`Reset`})]})]})})},v={render:()=>c(()=>{let e=4,i=u([1,2,3].map(e=>({id:e,label:`Item ${e}`}))),a=u([]),s=e=>a.set([e,...a.value].slice(0,6));return r(`div`,{style:g,children:[r(`div`,{style:`display: flex; gap: var(--msp-space-3)`,children:[n(`button`,{onClick:()=>i.set([...i.value,{id:e,label:`Item ${e++}`}]),children:`Add`}),n(`button`,{onClick:()=>i.set([...i.value].sort(()=>Math.random()-.5)),children:`Shuffle`}),n(`button`,{onClick:()=>i.set(i.value.slice(1)),children:`Remove first`})]}),n(`ol`,{"data-testid":`list`,children:n(m,{each:i,fallback:()=>n(`i`,{children:`No items.`}),children:(e,n)=>(s(`created ${e.label}`),t(()=>s(`disposed ${e.label}`)),r(`li`,{children:[e.label,` `,r(`small`,{children:[`(position `,n,`)`]})]}))})}),n(`pre`,{style:`margin: 0; color: #666`,children:o(a.asReadonly,e=>e.join(`
`))})]})})},y={render:()=>c(()=>{let e=u(!1);return r(`div`,{style:g,children:[n(`button`,{onClick:()=>e.set(!e.value),children:o(e.asReadonly,e=>e?`Hide details`:`Show details`)}),n(p,{when:e,fallback:()=>n(`i`,{children:`Details are hidden.`}),children:()=>n(`p`,{children:`Details: rendered in their own scope.`})})]})})},b=[`Bindings`,`KeyedList`,`Conditional`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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