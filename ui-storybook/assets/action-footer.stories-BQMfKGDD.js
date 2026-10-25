import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n,t as r}from"./jsx-runtime-DbCUSNU3.js";import{n as i,t as a}from"./of-BcFofpnZ.js";import{n as o,t as s}from"./story-root-DfeAHAKA.js";import{n as c,t as l}from"./observable-state-eRUcDuAs.js";import{n as u,t as d}from"./action-footer-COsCeMvF.js";function f(e){return n(`div`,{children:[t(`p`,{style:g,children:e.title}),t(`div`,{style:h,children:e.children})]})}var p,m,h,g,_,v,y;function b(){return(b=e((()=>{a(),s(),l(),u(),r(),p={title:`Components/Action footer`},m=`display: grid; gap: var(--msp-space-4); width: 300px; padding: var(--msp-space-4); background: var(--msp-color-panel); color: var(--msp-color-text); font-size: var(--msp-font-size-sm);`,h=`padding: var(--msp-space-3); border-radius: var(--msp-radius-md); background: var(--msp-color-raised);`,g=`margin: 0 0 var(--msp-space-2); color: var(--msp-color-text-muted);`,_={render:()=>o(()=>{let e=c(`none`),r=t=>()=>e.set(t);return n(`div`,{style:m,children:[t(f,{title:`Plain`,children:t(d,{icon:`download`,label:`Download`,onApply:r(`download`)})}),t(f,{title:`Reset and info`,children:t(d,{icon:`camera`,label:`Save`,info:`1920 × 1080 px`,onReset:r(`reset`),onApply:r(`save`)})}),t(f,{title:`Secondary action`,children:t(d,{icon:`download`,label:`Download`,secondary:{icon:`copy`,label:`Copy`,onClick:r(`copy`)},onApply:r(`download`)})}),n(`span`,{style:`color: var(--msp-color-text-muted)`,children:[`last: `,e.asReadonly]})]})})},v={render:()=>o(()=>{let e=c(!1);return n(`div`,{style:m,children:[t(f,{title:`Busy (press Apply)`,children:t(d,{icon:`download`,label:`Apply`,busy:e.asReadonly,secondary:{icon:`copy`,label:`Copy`,onClick:()=>{}},onReset:()=>{},onApply:()=>{e.set(!0),setTimeout(()=>e.set(!1),1500)}})}),t(f,{title:`Disabled`,children:t(d,{icon:`download`,label:`Apply`,disabled:i(!0),onApply:()=>{}})})]})})},y=[`Layouts`,`States`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => story(() => {
    const last = observableState('none');
    const did = (what: string) => () => last.set(what);
    return <div style={panel}>
          <Block title="Plain">
            <ActionFooter icon="download" label="Download" onApply={did('download')} />
          </Block>
          <Block title="Reset and info">
            <ActionFooter icon="camera" label="Save" info="1920 × 1080 px" onReset={did('reset')} onApply={did('save')} />
          </Block>
          <Block title="Secondary action">
            <ActionFooter icon="download" label="Download" secondary={{
          icon: 'copy',
          label: 'Copy',
          onClick: did('copy')
        }} onApply={did('download')} />
          </Block>
          <span style="color: var(--msp-color-text-muted)">last: {last.asReadonly}</span>
        </div>;
  })
}`,..._.parameters?.docs?.source},description:{story:`A plain footer, one with reset and an info line, and one with a secondary action; each echoes what it did.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => story(() => {
    const busy = observableState(false);
    const apply = () => {
      busy.set(true);
      setTimeout(() => busy.set(false), 1500);
    };
    return <div style={panel}>
          <Block title="Busy (press Apply)">
            <ActionFooter icon="download" label="Apply" busy={busy.asReadonly} secondary={{
          icon: 'copy',
          label: 'Copy',
          onClick: () => {}
        }} onReset={() => {}} onApply={apply} />
          </Block>
          <Block title="Disabled">
            <ActionFooter icon="download" label="Apply" disabled={of(true)} onApply={() => {}} />
          </Block>
        </div>;
  })
}`,...v.parameters?.docs?.source},description:{story:`Busy: applying shows a spinner and disables the action for 1.5 s; disabled: not possible yet, no spinner.`,...v.parameters?.docs?.description}}}})))()}b();export{_ as Layouts,v as States,y as __namedExportsOrder,p as default};