import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./jsx-runtime-DbCUSNU3.js";import{i as r,n as i}from"./real-viewer-Bej2U4vD.js";import{n as a}from"./story-root-DfeAHAKA.js";import{d as o}from"./scene-tree-B-CrD89j.js";import{n as s,t as c}from"./prism-viewer-BZM-04Hg.js";function l(e){return{render:()=>a(()=>t(i,{spec:f,setup:async t=>{let n=await(await fetch(d)).text(),r=await t.api.load.files({files:[new File([n],`1crn.kin`)]});if(!r.ok)throw Error(r.message);await e?.(t)}}))}}var u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{s(),o(),r(),n(),u={title:`Viewer/With extensions/Kinemage`,parameters:{layout:`fullscreen`}},d=new URL(new URL(`1crn-DQOqUX37.kin`,import.meta.url).href,``+import.meta.url).href,f=e=>({...e,extensions:[...e.extensions??[],c]}),p=e=>{if(!e.ok)throw Error(e.message)},m=l(),h=l(async e=>{p(await e.api.view.open({tab:`kinemage.tab.kinemage`})),p(await e.api.kinemage.visibility({kind:`master`,name:`dots`,visible:!1}))}),g=l(async e=>{e.managers.commands.open(`kinemage.visibility`)}),_=l(async e=>{p(await e.api.kinemage.visibility({kind:`master`,name:`sidechain`,visible:!1})),p(await e.api.kinemage.visibility({kind:`master`,name:`dots`,visible:!1}))}),v=l(async e=>{p(await e.api.kinemage.view({view:`Disulfide Cys3-Cys40`}))}),y=l(async e=>{p(await e.api.kinemage.animate({sequence:`animate`}))}),b=[`Loaded`,`Panel`,`Commands`,`Masters`,`View`,`Animate`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`kinemageStory()`,...m.parameters?.docs?.source},description:{story:`Crambin as a kinemage, as it opens: mainchain (white) and sidechain (cyan) vectors, the three disulfides (yellow
vectors and balls) with dot shells on their sulfurs, on Kinemage's black background, and the Kinemage panel open on the rail beside Structure.
The Structure panel lists it as shapes, not as a structure.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`kinemageStory(async v => {
  ok(await v.api.view.open({
    tab: 'kinemage.tab.kinemage'
  }));
  ok(await v.api.kinemage!.visibility({
    kind: 'master',
    name: 'dots',
    visible: false
  }));
})`,...h.parameters?.docs?.source},description:{story:"The Kinemage panel, drawn as the Structure panel: Next frame in its header, then a tree of its views (a click applies\none), its animate frames (the row says which is shown), its masters and its groups (with their subgroups), with eyes. Each control calls a `kinemage` operation as the person: an eye is a step in the\nhistory, Undo puts it back. Here the `dots` master is off. Its tab (the kinemage glyph, after Structure) is on the rail\nonly while a kinemage is loaded.",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`kinemageStory(async v => {
  v.managers.commands.open('kinemage.visibility');
})`,...g.parameters?.docs?.source},description:{story:`The Kinemage commands: the command menu open on "Show or hide a kinemage group, subgroup or master" (kind, name,
shown). Where the v5 right panel's buttons went; ⌘K and "kin" (or "master", "group") lists the three commands.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`kinemageStory(async v => {
  ok(await v.api.kinemage!.visibility({
    kind: 'master',
    name: 'sidechain',
    visible: false
  }));
  ok(await v.api.kinemage!.visibility({
    kind: 'master',
    name: 'dots',
    visible: false
  }));
})`,..._.parameters?.docs?.source},description:{story:"Masters: the `sidechain` and `dots` masters off (`kinemage.visibility`), so only the mainchain and the disulfides\nremain. A master switches the lists that name it, in whichever groups they are.",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`kinemageStory(async v => {
  ok(await v.api.kinemage!.view({
    view: 'Disulfide Cys3-Cys40'
  }));
})`,...v.parameters?.docs?.source},description:{story:'A view: the kinemage\'s "Disulfide Cys3-Cys40" (`kinemage.view`), the camera on that bond, orthographic.',...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`kinemageStory(async v => {
  ok(await v.api.kinemage!.animate({
    sequence: 'animate'
  }));
})`,...y.parameters?.docs?.source},description:{story:"Animate: the `1crn` and `CA trace` groups are the kinemage's animate frames, shown one at a time; one step\n(`kinemage.animate`) shows the next, the CA trace (pink).",...y.parameters?.docs?.description}}}})))()}x();export{y as Animate,g as Commands,m as Loaded,_ as Masters,h as Panel,v as View,b as __namedExportsOrder,u as default};