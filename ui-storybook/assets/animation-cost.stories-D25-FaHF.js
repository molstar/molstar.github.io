import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,f as n,n as r,o as i,r as a,t as o,u as s,x as c}from"./jsx-runtime-DbCUSNU3.js";import{i as l,m as u,o as d,p as f,s as p,t as m}from"./real-viewer-Bej2U4vD.js";import{b as h,x as g}from"./work-queue-DoxU-HjK.js";import{n as _}from"./story-root-DfeAHAKA.js";import{n as v,t as y}from"./observable-state-eRUcDuAs.js";import{i as b,t as x}from"./control-flow-BQuMY04w.js";import{d as S}from"./scene-tree-B-CrD89j.js";async function C(e,t,n){let r=e.views.shell;t.querySelector(`[role=dialog]`)?.dispatchEvent(new KeyboardEvent(`keydown`,{key:`Escape`,bubbles:!0,composed:!0})),r.closeOverlay();for(let t of O)e.managers.navigation.setDock(t,{collapsed:!0});await N(300),n===`structure`?r.show(`structure`):n===`state-tree`?r.show(`state-tree.tab.tree`):n===`sequence`?r.show(`sequence`):n===`menu`&&t.querySelector(`button[title="Command menu"], [aria-label="Command menu"]`)?.click(),await N(600)}async function w(e,t,n){let r=[],i=0,a=0,o=0,s={};for(let[e]of k)s[e]=0;s.other=0;let c=new MutationObserver(e=>{for(let t of e){let e=t.target.nodeType===Node.ELEMENT_NODE?t.target:t.target.parentElement,n=e?k.find(([,t])=>e.closest(t)):void 0;s[n?n[0]:`other`]++}});c.observe(e,{subtree:!0,childList:!0,attributes:!0,characterData:!0});let l=PerformanceObserver.supportedEntryTypes?.includes(`long-animation-frame`)?new PerformanceObserver(e=>{for(let t of e.getEntries()){o++;for(let e of t.scripts??[])A(e.sourceURL??``)?i+=e.duration:a+=e.duration}}):void 0;l?.observe({type:`long-animation-frame`}),j.write=j.render=0;let u=performance.now()+n*1e3,d=performance.now();for(await M(),d=performance.now();performance.now()<u;){await M();let e=performance.now();r.push(e-d),d=e}let f=j.write,p=j.render;c.disconnect(),l?.disconnect();let m=Math.max(1,r.length),h=r.slice().sort((e,t)=>e-t),g=(e,t=2)=>+e.toFixed(t),_={};for(let[e,t]of Object.entries(s))t&&(_[e]=g(t/m,1));return{setup:t,frames:r.length,frameMs:g(r.reduce((e,t)=>e+t,0)/m),p95FrameMs:g(h[Math.floor(m*.95)]??0),longFrames:o,uiScriptMsPerFrame:g(i/m,3),molstarScriptMsPerFrame:g(a/m,3),writesPerFrame:g(f/m,1),rendersPerFrame:g(p/m,1),mutationsPerFrame:_}}var T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{b(),i(),c(),y(),g(),S(),u(),p(),l(),o(),T={title:`Internals/Performance/Animation`},E=5,D=[`closed`,`structure`,`state-tree`,`sequence`,`menu`],O=[`left`,`right`,`top`,`bottom`],k=[[`scene tree`,`[role=tree][aria-label="Scene"]`],[`state tree`,`[role=tree][aria-label="State tree"]`],[`inspector`,`[aria-label="Inspector"], [aria-label="Cell"]`],[`sequence band`,`[role=tabpanel][aria-label="Sequence"], [data-msp-hover-source]`],[`trajectory bar`,`section[aria-label="Playback"]`],[`command menu`,`[role=dialog]`]],A=e=>/\/packages\/(prism|sequences)\//.test(e)&&!/\/_stories\//.test(e),j={write:0,render:0},M=()=>new Promise(e=>requestAnimationFrame(()=>e())),N=e=>new Promise(t=>setTimeout(t,e)),P={name:`UI cost while animating`,parameters:{a11y:{disable:!0,test:`off`},layout:`fullscreen`},render:()=>_(()=>{n.on=e=>{j[e]++};let e=document.createElement(`div`);e.className=`msp-root`,e.style.cssText=`position: fixed; inset: 0; display: grid; grid-template-columns: 1fr 380px;`;let i=document.createElement(`div`);i.style.cssText=`position: relative; min-width: 0; height: 100vh;`;let o=document.createElement(`div`);o.style.cssText=`overflow: auto; padding: var(--msp-space-4); font-size: var(--msp-font-size-sm); color: var(--msp-color-text); background: var(--msp-color-surface);`,e.append(i,o),document.body.append(e);let c,l=!1,u=v(`Loading 1GRM…`),p=v([]),g=v(!1),_=(async()=>{await M();let e=await d({target:i,spec:f()});if(l){await e.dispose();return}c=e;let t=await e.api.load.url({url:m.grm,format:`mmcif`});t.ok||u.set(t.message);let n=await e.api.trajectory.get({}),r=n.ok&&n.value?.structures?.[0]?.count||1,a=await e.api.trajectory.play({mode:`loop`,seconds:Math.max(1,r/E)});return u.set(a.ok?`1GRM, ${r} models, playing at ${E} models/s.`:`1GRM, ${r} models; play: ${a.message}`),e})(),y=async(e,t=5)=>{let n=await _;if(!n||!i.shadowRoot)return[];g.set(!0);let r=[];for(let a of e??D)u.set(`Measuring: ${a}…`),await C(n,i.shadowRoot,a),r.push(await w(i.shadowRoot,a,t)),p.set(r.slice());return u.set(`Done.`),g.set(!1),r};window.__mspAnim={ready:()=>_.then(e=>!!e),viewer:()=>c,run:y,arrange:async e=>{let t=await _;t&&i.shadowRoot&&await C(t,i.shadowRoot,e)},measure:async(e,t=5)=>i.shadowRoot&&w(i.shadowRoot,e,t)};let b=s(()=>a(`div`,{style:`display: grid; gap: var(--msp-space-3);`,children:[r(`strong`,{children:`UI cost while animating`}),r(`span`,{children:u}),r(`button`,{type:`button`,style:`justify-self: start; height: 28px; padding: 0 var(--msp-space-4); border-radius: 6px; background: var(--msp-color-control);`,disabled:g,onClick:()=>void y(),children:h(g.asReadonly,e=>e?`Running…`:`Run (5 s a setup)`)}),a(`table`,{style:`border-collapse: collapse; font-variant-numeric: tabular-nums;`,children:[r(`thead`,{children:a(`tr`,{children:[r(`th`,{style:`text-align: left`,children:`setup`}),r(`th`,{children:`frame ms`}),r(`th`,{children:`UI script`}),r(`th`,{children:`Mol* script`}),r(`th`,{children:`writes`}),r(`th`,{children:`renders`})]})}),r(`tbody`,{children:r(x,{each:p,children:e=>a(`tr`,{title:JSON.stringify(e.mutationsPerFrame),children:[r(`td`,{children:e.setup}),r(`td`,{style:`text-align: right`,children:`${e.frameMs} (p95 ${e.p95FrameMs})`}),r(`td`,{style:`text-align: right`,children:e.uiScriptMsPerFrame}),r(`td`,{style:`text-align: right`,children:e.molstarScriptMsPerFrame}),r(`td`,{style:`text-align: right`,children:e.writesPerFrame}),r(`td`,{style:`text-align: right`,children:e.rendersPerFrame})]})})})]}),r(`span`,{style:`color: var(--msp-color-text-subtle)`,children:`Per frame. Script: long animation frames' attribution (frames over 50 ms only); hover a row for its DOM mutations by area.`})]}),o);return t(()=>{l=!0,n.on=void 0,b(),c?.dispose(),e.remove(),window.__mspAnim=void 0}),r(`p`,{style:`padding: var(--msp-space-4)`,children:`The viewer and its readout are mounted outside Storybook's root.`})})},F=[`UiCostWhileAnimating`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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