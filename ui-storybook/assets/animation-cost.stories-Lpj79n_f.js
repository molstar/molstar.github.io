import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{S as t,b as n,f as r,n as i,o as a,r as o,t as s,u as c}from"./jsx-runtime-Dut-27nP.js";import{i as l,m as u,o as d,p as f,s as p,t as m}from"./real-viewer-8wWdKEGJ.js";import{i as h,t as g}from"./control-flow-BGkEkAG8.js";import{b as _,x as v}from"./work-queue-DoxU-HjK.js";import{n as y}from"./story-root-DtvPaZZ6.js";import{n as b,t as x}from"./observable-state-C67cgDrf.js";import{d as S}from"./scene-tree-BvZ8cYEi.js";async function C(e,t,n){let r=e.views.shell;t.querySelector(`[role=dialog]`)?.dispatchEvent(new KeyboardEvent(`keydown`,{key:`Escape`,bubbles:!0,composed:!0})),r.closeOverlay();for(let t of O)e.managers.navigation.setDock(t,{collapsed:!0});await N(300),n===`structure`?r.show(`structure`):n===`state-tree`?r.show(`state-tree.tab.tree`):n===`sequence`?r.show(`sequence`):n===`menu`&&t.querySelector(`button[title="Command menu"], [aria-label="Command menu"]`)?.click(),await N(600)}async function w(e,t,n){let r=[],i=0,a=0,o=0,s={};for(let[e]of k)s[e]=0;s.other=0;let c=new MutationObserver(e=>{for(let t of e){let e=t.target.nodeType===Node.ELEMENT_NODE?t.target:t.target.parentElement,n=e?k.find(([,t])=>e.closest(t)):void 0;s[n?n[0]:`other`]++}});c.observe(e,{subtree:!0,childList:!0,attributes:!0,characterData:!0});let l=PerformanceObserver.supportedEntryTypes?.includes(`long-animation-frame`)?new PerformanceObserver(e=>{for(let t of e.getEntries()){o++;for(let e of t.scripts??[])A(e.sourceURL??``)?i+=e.duration:a+=e.duration}}):void 0;l?.observe({type:`long-animation-frame`}),j.write=j.render=0;let u=performance.now()+n*1e3,d=performance.now();for(await M(),d=performance.now();performance.now()<u;){await M();let e=performance.now();r.push(e-d),d=e}let f=j.write,p=j.render;c.disconnect(),l?.disconnect();let m=Math.max(1,r.length),h=r.slice().sort((e,t)=>e-t),g=(e,t=2)=>+e.toFixed(t),_={};for(let[e,t]of Object.entries(s))t&&(_[e]=g(t/m,1));return{setup:t,frames:r.length,frameMs:g(r.reduce((e,t)=>e+t,0)/m),p95FrameMs:g(h[Math.floor(m*.95)]??0),longFrames:o,uiScriptMsPerFrame:g(i/m,3),molstarScriptMsPerFrame:g(a/m,3),writesPerFrame:g(f/m,1),rendersPerFrame:g(p/m,1),mutationsPerFrame:_}}var T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{h(),a(),n(),x(),v(),S(),u(),p(),l(),s(),T={title:`Internals/Performance/Animation`},E=5,D=[`closed`,`structure`,`state-tree`,`sequence`,`menu`],O=[`left`,`right`,`top`,`bottom`],k=[[`scene tree`,`[role=tree][aria-label="Scene"]`],[`state tree`,`[role=tree][aria-label="State tree"]`],[`inspector`,`[aria-label="Inspector"], [aria-label="Cell"]`],[`sequence band`,`[role=tabpanel][aria-label="Sequence"], [data-msp-hover-source]`],[`trajectory bar`,`section[aria-label="Playback"]`],[`command menu`,`[role=dialog]`]],A=e=>/\/packages\/(prism|sequences)\//.test(e)&&!/\/_stories\//.test(e),j={write:0,render:0},M=()=>new Promise(e=>requestAnimationFrame(()=>e())),N=e=>new Promise(t=>setTimeout(t,e)),P={name:`UI cost while animating`,parameters:{a11y:{disable:!0,test:`off`},layout:`fullscreen`},render:()=>y(()=>{r.on=e=>{j[e]++};let e=document.createElement(`div`);e.className=`msp-root`,e.style.cssText=`position: fixed; inset: 0; display: grid; grid-template-columns: 1fr 380px;`;let n=document.createElement(`div`);n.style.cssText=`position: relative; min-width: 0; height: 100vh;`;let a=document.createElement(`div`);a.style.cssText=`overflow: auto; padding: var(--msp-space-4); font-size: var(--msp-font-size-sm); color: var(--msp-color-text); background: var(--msp-color-surface);`,e.append(n,a),document.body.append(e);let s,l=!1,u=b(`Loading 1GRM…`),p=b([]),h=b(!1),v=(async()=>{await M();let e=await d({target:n,spec:f()});if(l){await e.dispose();return}s=e;let t=await e.api.load.url({url:m.grm,format:`mmcif`});t.ok||u.set(t.message);let r=await e.api.trajectory.get({}),i=r.ok&&r.value?.structures?.[0]?.count||1,a=await e.api.trajectory.play({mode:`loop`,seconds:Math.max(1,i/E)});return u.set(a.ok?`1GRM, ${i} models, playing at ${E} models/s.`:`1GRM, ${i} models; play: ${a.message}`),e})(),y=async(e,t=5)=>{let r=await v;if(!r||!n.shadowRoot)return[];h.set(!0);let i=[];for(let a of e??D)u.set(`Measuring: ${a}…`),await C(r,n.shadowRoot,a),i.push(await w(n.shadowRoot,a,t)),p.set(i.slice());return u.set(`Done.`),h.set(!1),i};window.__mspAnim={ready:()=>v.then(e=>!!e),viewer:()=>s,run:y,arrange:async e=>{let t=await v;t&&n.shadowRoot&&await C(t,n.shadowRoot,e)},measure:async(e,t=5)=>n.shadowRoot&&w(n.shadowRoot,e,t)};let x=c(()=>o(`div`,{style:`display: grid; gap: var(--msp-space-3);`,children:[i(`strong`,{children:`UI cost while animating`}),i(`span`,{children:u}),i(`button`,{type:`button`,style:`justify-self: start; height: 28px; padding: 0 var(--msp-space-4); border-radius: 6px; background: var(--msp-color-control);`,disabled:h,onClick:()=>void y(),children:_(h.asReadonly,e=>e?`Running…`:`Run (5 s a setup)`)}),o(`table`,{style:`border-collapse: collapse; font-variant-numeric: tabular-nums;`,children:[i(`thead`,{children:o(`tr`,{children:[i(`th`,{style:`text-align: left`,children:`setup`}),i(`th`,{children:`frame ms`}),i(`th`,{children:`UI script`}),i(`th`,{children:`Mol* script`}),i(`th`,{children:`writes`}),i(`th`,{children:`renders`})]})}),i(`tbody`,{children:i(g,{each:p,children:e=>o(`tr`,{title:JSON.stringify(e.mutationsPerFrame),children:[i(`td`,{children:e.setup}),i(`td`,{style:`text-align: right`,children:`${e.frameMs} (p95 ${e.p95FrameMs})`}),i(`td`,{style:`text-align: right`,children:e.uiScriptMsPerFrame}),i(`td`,{style:`text-align: right`,children:e.molstarScriptMsPerFrame}),i(`td`,{style:`text-align: right`,children:e.writesPerFrame}),i(`td`,{style:`text-align: right`,children:e.rendersPerFrame})]})})})]}),i(`span`,{style:`color: var(--msp-color-text-subtle)`,children:`Per frame. Script: long animation frames' attribution (frames over 50 ms only); hover a row for its DOM mutations by area.`})]}),a);return t(()=>{l=!0,r.on=void 0,x(),s?.dispose(),e.remove(),window.__mspAnim=void 0}),i(`p`,{style:`padding: var(--msp-space-4)`,children:`The viewer and its readout are mounted outside Storybook's root.`})})},F=[`UiCostWhileAnimating`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'UI cost while animating',
  parameters: {
    a11y: {
      disable: true,
      test: 'off'
    },
    layout: 'fullscreen'
  },
  render: () => story(() => {
    // Counted from the first binding the viewer makes (the probe is read when a binding is made).
    RuntimeProbe.on = kind => {
      counts[kind]++;
    };
    const container = document.createElement('div');
    container.className = 'msp-root';
    container.style.cssText = 'position: fixed; inset: 0; display: grid; grid-template-columns: 1fr 380px;';
    const host = document.createElement('div');
    host.style.cssText = 'position: relative; min-width: 0; height: 100vh;';
    const panel = document.createElement('div');
    panel.style.cssText = 'overflow: auto; padding: var(--msp-space-4); font-size: var(--msp-font-size-sm); color: var(--msp-color-text); background: var(--msp-color-surface);';
    container.append(host, panel);
    document.body.append(container);
    let viewer: PrismViewer | undefined;
    let gone = false;
    const status = observableState('Loading 1GRM…');
    const results = observableState<readonly AnimationResult[]>([]);
    const running = observableState(false);
    const ready = (async () => {
      await frame();
      const made = await createPrismViewer({
        target: host,
        spec: DefaultPrismViewerSpec()
      });
      if (gone) {
        await made.dispose();
        return undefined;
      }
      viewer = made;
      const r = await made.api.load.url!({
        url: ExampleFiles.grm,
        format: 'mmcif'
      });
      if (!r.ok) status.set(r.message);
      const t = await made.api.trajectory.get!({});
      const count = t.ok && (t.value as any)?.structures?.[0]?.count || 1;
      const played = await made.api.trajectory.play!({
        mode: 'loop',
        seconds: Math.max(1, count / ModelsPerSecond)
      });
      status.set(played.ok ? \`1GRM, \${count} models, playing at \${ModelsPerSecond} models/s.\` : \`1GRM, \${count} models; play: \${played.message}\`);
      return made;
    })();
    const run = async (only?: readonly AnimationSetup[], seconds = 5) => {
      const v = await ready;
      if (!v || !host.shadowRoot) return [];
      running.set(true);
      const out: AnimationResult[] = [];
      for (const setup of only ?? Setups) {
        status.set(\`Measuring: \${setup}…\`);
        await arrange(v, host.shadowRoot, setup);
        out.push(await measure(host.shadowRoot, setup, seconds));
        results.set(out.slice());
      }
      status.set('Done.');
      running.set(false);
      return out;
    };
    (window as any).__mspAnim = {
      ready: () => ready.then(v => !!v),
      viewer: () => viewer,
      run,
      arrange: async (setup: AnimationSetup) => {
        const v = await ready;
        if (v && host.shadowRoot) await arrange(v, host.shadowRoot, setup);
      },
      measure: async (setup: AnimationSetup, seconds = 5) => host.shadowRoot && measure(host.shadowRoot, setup, seconds)
    };
    const disposeReadout = render(() => <div style="display: grid; gap: var(--msp-space-3);">
            <strong>UI cost while animating</strong>
            <span>{status}</span>
            <button type="button" style="justify-self: start; height: 28px; padding: 0 var(--msp-space-4); border-radius: 6px; background: var(--msp-color-control);" disabled={running} onClick={() => void run()}>
              {derive(running.asReadonly, r => r ? 'Running…' : 'Run (5 s a setup)')}
            </button>
            <table style="border-collapse: collapse; font-variant-numeric: tabular-nums;">
              <thead>
                <tr>
                  <th style="text-align: left">setup</th>
                  <th>frame ms</th>
                  <th>UI script</th>
                  <th>Mol* script</th>
                  <th>writes</th>
                  <th>renders</th>
                </tr>
              </thead>
              <tbody>
                <For each={results}>
                  {r => <tr title={JSON.stringify(r.mutationsPerFrame)}>
                      <td>{r.setup}</td>
                      <td style="text-align: right">{\`\${r.frameMs} (p95 \${r.p95FrameMs})\`}</td>
                      <td style="text-align: right">{r.uiScriptMsPerFrame}</td>
                      <td style="text-align: right">{r.molstarScriptMsPerFrame}</td>
                      <td style="text-align: right">{r.writesPerFrame}</td>
                      <td style="text-align: right">{r.rendersPerFrame}</td>
                    </tr>}
                </For>
              </tbody>
            </table>
            <span style="color: var(--msp-color-text-subtle)">
              Per frame. Script: long animation frames' attribution (frames over 50 ms only); hover a row for its DOM
              mutations by area.
            </span>
          </div>, panel);
    onCleanup(() => {
      gone = true;
      RuntimeProbe.on = undefined;
      disposeReadout();
      void viewer?.dispose();
      container.remove();
      (window as any).__mspAnim = undefined;
    });
    return <p style="padding: var(--msp-space-4)">The viewer and its readout are mounted outside Storybook's root.</p>;
  })
}`,...P.parameters?.docs?.source},description:{story:"The real viewer with 1GRM, its models playing at `ModelsPerSecond`, five setups to measure; a readout beside it.",...P.parameters?.docs?.description}}}})))()}I();export{P as UiCostWhileAnimating,F as __namedExportsOrder,T as default};