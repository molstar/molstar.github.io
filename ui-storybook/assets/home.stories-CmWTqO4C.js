import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,n,t as r}from"./jsx-runtime-pJJ4pzd1.js";import{l as i}from"./src-C9Ks2Bfq.js";import{n as a,r as o}from"./home-tab-Dd7aiD7K.js";import{n as s,t as c}from"./home-D1QJitGf.js";var l,u,d,f,p;function m(){return(m=e((()=>{c(),i(),o(),r(),l={title:`Views/Home tab`},u=`width: 360px; height: 100vh; overflow: auto; background: var(--msp-color-panel); margin-left: auto;`,d={render:()=>t(()=>n(`div`,{style:u,children:n(a,{home:s(e=>console.info(e))})}))},f={render:()=>t(()=>n(`div`,{style:u,children:n(a,{home:s(e=>console.info(e),{remoteStates:!0})})}))},p=[`Default`,`WithRemoteStates`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style={frame}>
        <HomeTab home={mockHome(text => console.info(text))} />
      </div>)
}`,...d.parameters?.docs?.source},description:{story:`The root's actions as forms (the first open, Open Files among them), and the command menu hint.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => story(() => <div style={frame}>
        <HomeTab home={mockHome(text => console.info(text), {
      remoteStates: true
    })} />
      </div>)
}`,...f.parameters?.docs?.source},description:{story:`With remote states (a feature flag in the spec, off by default): sessions on a state server.`,...f.parameters?.docs?.description}}}})))()}m();export{d as Default,f as WithRemoteStates,p as __namedExportsOrder,l as default};