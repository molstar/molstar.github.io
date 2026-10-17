import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n,t as r}from"./jsx-runtime-Dut-27nP.js";import{n as i,t as a}from"./story-root-DtvPaZZ6.js";var o,s,c;function l(){return(l=e((()=>{a(),r(),o={title:`Internals/Performance/Input rate`},s={name:`Input rate`,parameters:{a11y:{disable:!0,test:`off`}},render:()=>i(()=>{let e={wheel:0,pointermove:0,scroll:0},r={wheel:[],pointermove:[],scroll:[]},i=document.createElement(`pre`);i.style.cssText=`margin: 0; font: 12px/1.5 var(--msp-font-mono); color: var(--msp-color-text);`;let a=!0,o=()=>{if(!a)return;for(let t of Object.keys(e))e[t]>0&&(r[t].push(e[t]),r[t].length>240&&r[t].shift()),e[t]=0;let t=Object.keys(r).map(e=>{let t=r[e];if(!t.length)return`${e.padEnd(12)} no events yet`;let n=t.reduce((e,t)=>e+t,0)/t.length,i=Math.max(...t),a=t.filter(e=>e>1).length;return`${e.padEnd(12)} ${n.toFixed(2)} a frame (most ${i}), ${a} of ${t.length} frames with more than one`});i.textContent=t.join(`
`),requestAnimationFrame(o)};requestAnimationFrame(o);let s=document.createElement(`div`);s.style.cssText=`height: 260px; width: 280px; overflow: auto; border: 1px solid var(--msp-color-border, #8884); font-size: 12px;`;for(let e=0;e<2e3;e++){let t=document.createElement(`div`);t.textContent=`Row ${e}`,t.style.cssText=`height: 22px; padding: 0 8px;`,s.append(t)}s.addEventListener(`wheel`,()=>e.wheel++,{passive:!0}),s.addEventListener(`scroll`,()=>e.scroll++,{passive:!0});let c=document.createElement(`div`);c.style.cssText=`height: 260px; width: 280px; border: 1px solid var(--msp-color-border, #8884); display: grid; place-items: center; color: var(--msp-color-text-subtle); touch-action: none;`,c.textContent=`Move or drag the pointer here`,c.addEventListener(`pointermove`,()=>e.pointermove++);let l=n(`div`,{style:`display: grid; gap: var(--msp-space-4); padding: var(--msp-space-5); color: var(--msp-color-text);`,children:[t(`p`,{style:`margin: 0; max-width: 60ch;`,children:`Scroll the list with the trackpad, move the pointer over the box. Each line: events of that kind a frame (the last 240 frames that had any).`}),i,n(`div`,{style:`display: flex; gap: var(--msp-space-5);`,children:[s,c]})]});return window.__mspInputRate=()=>({...r}),queueMicrotask(()=>{let e=new MutationObserver(()=>{l.isConnected||(a=!1,e.disconnect())});e.observe(document.body,{childList:!0,subtree:!0})}),l})},c=[`InputRate`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Input rate',
  parameters: {
    a11y: {
      disable: true,
      test: 'off'
    }
  },
  render: () => story(() => {
    const counts: Record<Kind, number> = {
      wheel: 0,
      pointermove: 0,
      scroll: 0
    };
    // Per kind: events in each frame (the last 2 s of frames with any), the time it was first seen.
    const frames: Record<Kind, number[]> = {
      wheel: [],
      pointermove: [],
      scroll: []
    };
    const readout = document.createElement('pre');
    readout.style.cssText = 'margin: 0; font: 12px/1.5 var(--msp-font-mono); color: var(--msp-color-text);';
    let on = true;
    const tick = () => {
      if (!on) return;
      for (const k of Object.keys(counts) as Kind[]) {
        if (counts[k] > 0) {
          frames[k].push(counts[k]);
          if (frames[k].length > 240) frames[k].shift();
        }
        counts[k] = 0;
      }
      const lines = (Object.keys(frames) as Kind[]).map(k => {
        const f = frames[k];
        if (!f.length) return \`\${k.padEnd(12)} no events yet\`;
        const mean = f.reduce((a, b) => a + b, 0) / f.length;
        const max = Math.max(...f);
        const several = f.filter(n => n > 1).length;
        return \`\${k.padEnd(12)} \${mean.toFixed(2)} a frame (most \${max}), \${several} of \${f.length} frames with more than one\`;
      });
      readout.textContent = lines.join('\\n');
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    const list = document.createElement('div');
    list.style.cssText = 'height: 260px; width: 280px; overflow: auto; border: 1px solid var(--msp-color-border, #8884); font-size: 12px;';
    for (let i = 0; i < 2000; i++) {
      const row = document.createElement('div');
      row.textContent = \`Row \${i}\`;
      row.style.cssText = 'height: 22px; padding: 0 8px;';
      list.append(row);
    }
    list.addEventListener('wheel', () => counts.wheel++, {
      passive: true
    });
    list.addEventListener('scroll', () => counts.scroll++, {
      passive: true
    });
    const box = document.createElement('div');
    box.style.cssText = 'height: 260px; width: 280px; border: 1px solid var(--msp-color-border, #8884); display: grid; place-items: center; color: var(--msp-color-text-subtle); touch-action: none;';
    box.textContent = 'Move or drag the pointer here';
    box.addEventListener('pointermove', () => counts.pointermove++);
    const root = <div style="display: grid; gap: var(--msp-space-4); padding: var(--msp-space-5); color: var(--msp-color-text);">
          <p style="margin: 0; max-width: 60ch;">
            Scroll the list with the trackpad, move the pointer over the box. Each line: events of that kind a frame
            (the last 240 frames that had any).
          </p>
          {readout}
          <div style="display: flex; gap: var(--msp-space-5);">
            {list}
            {box}
          </div>
        </div> as HTMLElement;
    (window as unknown as {
      __mspInputRate?: () => unknown;
    }).__mspInputRate = () => ({
      ...frames
    });
    queueMicrotask(() => {
      const stop = new MutationObserver(() => {
        if (!root.isConnected) {
          on = false;
          stop.disconnect();
        }
      });
      stop.observe(document.body, {
        childList: true,
        subtree: true
      });
    });
    return root;
  })
}`,...s.parameters?.docs?.source}}}})))()}l();export{s as InputRate,c as __namedExportsOrder,o as default};