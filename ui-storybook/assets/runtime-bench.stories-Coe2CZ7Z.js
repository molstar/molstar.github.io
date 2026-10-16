import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,o as n,r,t as i,u as a}from"./jsx-runtime-DzTO5r4L.js";import{a as o,i as s,t as c}from"./control-flow-2XcFB3wB.js";import{n as l,t as u}from"./map-COHPbqb4.js";import{n as d,t as f}from"./story-root-Czb4fkLv.js";import{n as p,r as m,t as h}from"./observable-state-8hMFvtS9.js";import{n as g,t as _}from"./keyed-selector-CYjlVwf5.js";function v(e){let t=Array(e);for(let n=0;n<e;n++)t[n]={id:k++,label:m(`${j(E)} ${j(D)} ${j(O)}`)};return t}function y(e){return r(`tr`,{children:[t(`td`,{class:`col-md-1`,children:e.row.id}),t(`td`,{class:`col-md-4`,children:t(`a`,{children:e.row.label.value})}),t(`td`,{class:`col-md-1`,children:t(`a`,{children:`×`})}),t(`td`,{class:`col-md-6`})]})}function b(e){let{row:n}=e;return r(`tr`,{classList:{danger:e.selected.is(n.id)},children:[t(`td`,{class:`col-md-1`,children:n.id}),t(`td`,{class:`col-md-4`,children:t(`a`,{onClick:()=>e.select(n.id),children:n.label.asReadonly})}),t(`td`,{class:`col-md-1`,children:t(`a`,{onClick:()=>e.remove(n.id),children:`×`})}),t(`td`,{class:`col-md-6`})]})}function x(e){let n=m([]),r=m(void 0),i=g(r.asReadonly),o=document.createElement(`div`);return o.style.cssText=`height: 100%; overflow: auto; font-size: 12px;`,e.replaceChildren(o),{rows:n,selected:r,table:o,dispose:a(()=>t(`table`,{children:t(`tbody`,{children:t(c,{each:n.asReadonly,children:e=>window.__mspStaticRows?t(y,{row:e}):t(b,{row:e,selected:i,select:e=>r.set(e),remove:e=>n.set(n.value.filter(t=>t.id!==e))})},e=>e.id)})}),o)}}function S(e){for(let t=0;t<10;t++)for(let n of e)n.label.set(`${n.id} step ${t}`)}async function C(e,t){o(!1);let n=[];try{for(let r of P){if(t&&!r.name.includes(t))continue;let i=[],a=[];for(let t=0;t<=T;t++){let n=x(e);r.setup(n),e.offsetHeight,await M();let o=performance.now();r.run(n);let s=performance.now();e.offsetHeight,await M();let c=performance.now();t>0&&(i.push(s-o),a.push(c-o)),n.dispose()}n.push({op:r.name,script:+N(i).toFixed(1),total:+N(a).toFixed(1)}),window.__mspBench={results:n.slice()}}}finally{o(`auto`)}return n}var w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{u(),s(),n(),_(),p(),f(),i(),w={title:`Internals/Runtime performance`},T=5,E=[`pretty`,`large`,`big`,`small`,`tall`,`short`,`long`,`handsome`,`plain`,`quaint`,`clean`],D=[`red`,`yellow`,`blue`,`green`,`pink`,`brown`,`purple`,`orange`,`white`,`black`,`grey`],O=[`table`,`chair`,`house`,`bbq`,`desk`,`car`,`pony`,`cookie`,`sandwich`,`burger`,`pizza`],k=1,A=1,j=e=>(A=A*16807%2147483647,e[A%e.length]),M=()=>document.hidden?Promise.resolve():new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(()=>e()))),N=e=>{let t=e.slice().sort((e,t)=>e-t);return t[Math.floor(t.length/2)]},P=[{name:`create 1,000 rows`,setup:e=>e.rows.set([]),run:e=>e.rows.set(v(1e3))},{name:`replace all 1,000 rows`,setup:e=>e.rows.set(v(1e3)),run:e=>e.rows.set(v(1e3))},{name:`update every 10th row (of 1,000)`,setup:e=>e.rows.set(v(1e3)),run:e=>{let t=e.rows.value;for(let e=0;e<t.length;e+=10)t[e].label.set(`${t[e].label.value} !!!`)}},{name:`select a row (of 1,000)`,setup:e=>{e.rows.set(v(1e3)),e.selected.set(void 0)},run:e=>e.selected.set(e.rows.value[500].id)},{name:`swap rows 2 and 999`,setup:e=>e.rows.set(v(1e3)),run:e=>{let t=e.rows.value.slice(),n=t[1];t[1]=t[998],t[998]=n,e.rows.set(t)}},{name:`remove a row (of 1,000)`,setup:e=>e.rows.set(v(1e3)),run:e=>e.rows.set(e.rows.value.filter((e,t)=>t!==500))},{name:`create 10,000 rows`,setup:e=>e.rows.set([]),run:e=>e.rows.set(v(1e4))},{name:`append 1,000 rows (to 10,000)`,setup:e=>e.rows.set(v(1e4)),run:e=>e.rows.set([...e.rows.value,...v(1e3)])},{name:`clear 10,000 rows`,setup:e=>e.rows.set(v(1e4)),run:e=>e.rows.set([])},{name:`relabel all 1,000 rows 10 times`,setup:e=>e.rows.set(v(1e3)),run:e=>S(e.rows.value)},{name:`relabel all 1,000 rows 10 times, batched`,setup:e=>e.rows.set(v(1e3)),run:e=>h(()=>S(e.rows.value))}],F={parameters:{a11y:{disable:!0,test:`off`}},render:()=>d(()=>{let e=m([]),n=m(!1),i=document.createElement(`div`);return i.className=`msp-root`,i.style.cssText=`position: fixed; right: 16px; top: 16px; width: 480px; height: 600px; contain: strict;`,window.__mspBenchRun=async e=>{document.body.append(i);let t=await C(i,e);return i.remove(),t},r(`div`,{style:`display: grid; gap: var(--msp-space-4); padding: var(--msp-space-5); font-size: var(--msp-font-size-sm); color: var(--msp-color-text);`,children:[t(`button`,{type:`button`,style:`justify-self: start; height: 28px; padding: 0 var(--msp-space-4); border-radius: 6px; background: var(--msp-color-control);`,disabled:n.asReadonly,onClick:async()=>{n.set(!0),document.body.append(i);let t=await C(i);i.remove(),e.set(t),n.set(!1),window.__mspBench={results:t,done:!0}},children:n.asReadonly.pipe(l(e=>e?`Running…`:`Run`))}),t(`table`,{style:`border-collapse: collapse;`,children:t(c,{each:e.asReadonly,children:e=>r(`tr`,{children:[t(`td`,{style:`padding: var(--msp-space-1) var(--msp-space-4) var(--msp-space-1) 0`,children:e.op}),r(`td`,{style:`padding: var(--msp-space-1) var(--msp-space-4); text-align: right; font-variant-numeric: tabular-nums`,children:[`script `,e.script,` ms`]}),r(`td`,{style:`padding: var(--msp-space-1) 0; text-align: right; font-variant-numeric: tabular-nums`,children:[`total `,e.total,` ms`]})]})})})]})})},I=[`Runtime`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      disable: true,
      test: 'off'
    }
  },
  render: () => story(() => {
    const results = observableState<readonly Result[]>([]);
    const running = observableState(false);
    // Outside Storybook's root (its addons watch every change there), a fixed, contained area.
    const host = document.createElement('div');
    host.className = 'msp-root';
    host.style.cssText = 'position: fixed; right: 16px; top: 16px; width: 480px; height: 600px; contain: strict;';
    const run = async () => {
      running.set(true);
      document.body.append(host);
      const out = await runBench(host);
      host.remove();
      results.set(out);
      running.set(false);
      (window as any).__mspBench = {
        results: out,
        done: true
      };
    };
    (window as any).__mspBenchRun = async (only?: string) => {
      document.body.append(host);
      const out = await runBench(host, only);
      host.remove();
      return out;
    };
    return <div style="display: grid; gap: var(--msp-space-4); padding: var(--msp-space-5); font-size: var(--msp-font-size-sm); color: var(--msp-color-text);">
          <button type="button" style="justify-self: start; height: 28px; padding: 0 var(--msp-space-4); border-radius: 6px; background: var(--msp-color-control);" disabled={running.asReadonly} onClick={run}>
            {running.asReadonly.pipe(map(r => r ? 'Running…' : 'Run'))}
          </button>
          <table style="border-collapse: collapse;">
            <For each={results.asReadonly}>
              {r => <tr>
                  <td style="padding: var(--msp-space-1) var(--msp-space-4) var(--msp-space-1) 0">{r.op}</td>
                  <td style="padding: var(--msp-space-1) var(--msp-space-4); text-align: right; font-variant-numeric: tabular-nums">
                    script {r.script} ms
                  </td>
                  <td style="padding: var(--msp-space-1) 0; text-align: right; font-variant-numeric: tabular-nums">
                    total {r.total} ms
                  </td>
                </tr>}
            </For>
          </table>
        </div>;
  })
}`,...F.parameters?.docs?.source},description:{story:"The renderer bench: the js-framework-benchmark operations on the `dom` runtime (Run, then read the table). Script is\nthe operation's own time; total adds layout and a frame (two frames are ~33 ms of it).",...F.parameters?.docs?.description}}}})))()}L();export{F as Runtime,I as __namedExportsOrder,w as default};