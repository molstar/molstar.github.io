import{f as Xt}from"./chunk-MTD6HTBC.js";import{c as da}from"./chunk-EUNI4HDX.js";import{a as Ce,b as Zi,c as wr,d as Vr,f as $i,g as ea,j as mr,k as po,l as fo,m as We,s as pa,t as fa,v as Hr,w as ma}from"./chunk-LJ3CQVUO.js";import{Ba as Te,Ca as uo,Da as be,Db as gr,Ea as ve,Fa as Lt,Fb as Nr,Ga as co,Kb as ho,Lb as ha,P as no,W as si,_a as rr,a as wt,b as Jr,c as Ki,d as Wt,e as fe,f as he,g as ai,i as hr,j as Yi,ja as so,k as _i,ka as lo,l as Qi,m as Ut,n as Ji,o as C,p as j,q as ee,r as ii,s as me,zb as li}from"./chunk-5HRLRLSE.js";import{h as ni,j as ro,k as ur,l as $r,n as ao,o as st}from"./chunk-OV2OLKVV.js";import{f as Xi}from"./chunk-73TVMDCL.js";import{a as io,c as oo}from"./chunk-JY64XCWB.js";import{k as qi,l as ua}from"./chunk-R2KXRVPS.js";import{Fa as eo,pb as to,ua as oi,ub as X}from"./chunk-3EGK4OQW.js";import{l as lr,w as ca}from"./chunk-55INLPL2.js";import{G as Ui,H as sr,e as Wi,h as Oe,o as et,p as ri}from"./chunk-ZHHE2XG3.js";import{f as Ni,l as Hi}from"./chunk-VIA7CHLF.js";import{a as Pr}from"./chunk-KHBNYRDQ.js";import{d as Me,e as tr,m as ji,q as Gi}from"./chunk-QZGD7T6O.js";import{E as nr,Ea as la,G as Bi,J as qe,L as Pt,M as ei,N as ti,O as Mi,Q as sa,R as B,S as b,Ta as Cr,U as Ii,W as zr,b as Pe,c as k,ea as Ai,f as Ei,g as Li,h as Ar,ha as zi,ia as Vi,ib as Qr,j as qt,o as i,oa as le,p as Sr,pb as m,s as oa,t as Oi,v as fr,w as T,x as na,z as $a}from"./chunk-CZB3H7J7.js";function ga(u,e){return{kind:u,layers:e}}(p=>{p.Empty={kind:"empty-loci",layers:[]};function e(l,c){if(l.layers.length===0&&c.layers.length===0)return!0;if(l.layers.length!==c.layers.length)return!1;for(let d=0,g=l.layers.length;d<g;++d)if(l.layers[d].clear!==c.layers[d].clear||l.layers[d].color!==c.layers[d].color||!st.areEqual(l.layers[d].loci,c.layers[d].loci))return!1;return!0}p.areEqual=e;function t(l){return l.layers.length===0}p.isEmpty=t;function r(l,c){if(l.kind==="element-loci"){let d=[];for(let g of l.layers){let{loci:x,color:v,clear:S}=g;x=X.Loci.remap(x,c),X.Loci.isEmpty(x)||d.push({loci:x,color:v,clear:S})}return{kind:"element-loci",layers:d}}else return l}p.remap=r;function a(l){if(t(l))return l;if(l.kind==="element-loci"){let{structure:c}=l.layers[0].loci,d=new Map,g=X.Loci.none(c);for(let v=0,S=l.layers.length;v<S;++v){let{loci:P,color:D,clear:O}=l.layers[S-v-1];if(P=X.Loci.subtract(P,g),g=X.Loci.union(P,g),!X.Loci.isEmpty(P)){let z=O?-1:D;d.has(z)&&(P=X.Loci.union(P,d.get(z))),d.set(z,P)}}let x=[];return d.forEach((v,S)=>{let P=S===-1,D=P?0:S;x.push({loci:v,color:D,clear:P})}),{kind:"element-loci",layers:x}}else return l}p.merge=a;function o(l,c){if(t(l))return l;if(l.kind==="element-loci"){let{structure:d}=l.layers[0].loci,g=[];for(let x of l.layers){let{loci:v,color:S,clear:P}=x,D=X.Loci.remap(v,c);v=X.Loci.remap(D,d),X.Loci.isEmpty(v)||g.push({loci:v,color:S,clear:P})}return{kind:"element-loci",layers:g}}else return l}p.filter=o;function n(l,c){let d=[];for(let g=0,x=l.length;g<x;++g){let{script:v,color:S,clear:P}=l[g],D=Xt.toLoci(v,c);X.Loci.isEmpty(D)||d.push({loci:D,color:S,clear:P})}return{kind:"element-loci",layers:d}}p.ofScript=n;function s(l,c){let d=[];for(let g=0,x=l.length;g<x;++g){let{bundle:v,color:S,clear:P}=l[g],D=X.Bundle.toLoci(v,c.root);d.push({loci:D,color:S,clear:P})}return{kind:"element-loci",layers:d}}p.ofBundle=s;function f(l){let c=[];for(let d=0,g=l.layers.length;d<g;++d){let{loci:x,color:v,clear:S}=l.layers[d],P=X.Bundle.fromLoci(x);c.push({bundle:P,color:v,clear:S})}return{kind:"element-loci",layers:c}}p.toBundle=f})(ga||={});function ba(u,e){return{kind:u,layers:e}}(p=>{p.Empty={kind:"empty-loci",layers:[]};function e(l,c){if(l.layers.length===0&&c.layers.length===0)return!0;if(l.layers.length!==c.layers.length)return!1;for(let d=0,g=l.layers.length;d<g;++d)if(l.layers[d].value!==c.layers[d].value||!st.areEqual(l.layers[d].loci,c.layers[d].loci))return!1;return!0}p.areEqual=e;function t(l){return l.layers.length===0}p.isEmpty=t;function r(l,c){if(l.kind==="element-loci"){let d=[];for(let g of l.layers){let x=X.Loci.remap(g.loci,c);X.Loci.isEmpty(x)||d.push({loci:x,value:g.value})}return{kind:"element-loci",layers:d}}else return l}p.remap=r;function a(l){if(t(l))return l;if(l.kind==="element-loci"){let{structure:c}=l.layers[0].loci,d=new Map,g=X.Loci.none(c);for(let v=0,S=l.layers.length;v<S;++v){let{loci:P,value:D}=l.layers[S-v-1];P=X.Loci.subtract(P,g),g=X.Loci.union(P,g),X.Loci.isEmpty(P)||(d.has(D)&&(P=X.Loci.union(P,d.get(D))),d.set(D,P))}let x=[];return d.forEach((v,S)=>{x.push({loci:v,value:S})}),{kind:"element-loci",layers:x}}else return l}p.merge=a;function o(l,c){if(t(l))return l;if(l.kind==="element-loci"){let{structure:d}=l.layers[0].loci,g=[];for(let x of l.layers){let{loci:v,value:S}=x,P=X.Loci.remap(v,c);v=X.Loci.remap(P,d),X.Loci.isEmpty(v)||g.push({loci:v,value:S})}return{kind:"element-loci",layers:g}}else return l}p.filter=o;function n(l,c){let d=[];for(let g=0,x=l.length;g<x;++g){let{script:v,value:S}=l[g],P=Xt.toLoci(v,c);X.Loci.isEmpty(P)||d.push({loci:P,value:S})}return{kind:"element-loci",layers:d}}p.ofScript=n;function s(l,c){let d=[];for(let g=0,x=l.length;g<x;++g){let{bundle:v,value:S}=l[g],P=X.Bundle.toLoci(v,c.root);d.push({loci:P,value:S})}return{kind:"element-loci",layers:d}}p.ofBundle=s;function f(l){let c=[];for(let d=0,g=l.layers.length;d<g;++d){let{loci:x,value:v}=l.layers[d],S=X.Bundle.fromLoci(x);c.push({bundle:S,value:v})}return{kind:"element-loci",layers:c}}p.toBundle=f})(ba||={});var Xn;(t=>{function u(){return{updateTransform:!1,updateMatrix:!1,updateColor:!1,updateSize:!1,updateLocation:!1,createGeometry:!1,createNew:!1,info:{}}}t.create=u;function e(r){r.updateTransform=!1,r.updateMatrix=!1,r.updateColor=!1,r.updateSize=!1,r.updateLocation=!1,r.createGeometry=!1,r.createNew=!1}t.reset=e})(Xn||={});var mo={lowestElementCount:1e6,lowerElementCount:5e5,lowElementCount:1e5,mediumElementCount:2e4,highElementCount:2e3,coarseGrainedFactor:10,elementCountFactor:1};function Kn(u){switch(u){case"lowest":return 0;case"lower":return 1;case"low":return 2;case"medium":return 3;case"high":return 4;case"higher":return 5;case"highest":return 6}}function go(u,e){return u>e.lowestElementCount?"lowest":u>e.lowerElementCount?"lower":u>e.lowElementCount?"low":u>e.mediumElementCount?"medium":u>e.highElementCount?"high":"higher"}function Zn(u,e={}){let t={...mo,...e},r=u.elementCount*t.elementCountFactor;return(u.isCoarseGrained||u.isCoarse)&&(r*=t.coarseGrainedFactor),go(r,t)}function Yn(u,e={}){let t={...mo,...e},r=u.count*t.elementCountFactor;return go(r,t)}function _n(u){if(u.root.models.length===1){let e=eo.Provider.get(u.root.model)?.spacegroup.cell;if(e&&e.volume>0)return e.volume/e.order}return ri.volume(u.root.boundary.box)}function Qn(u){return u.cell?.volume??ri.volume(ni.getBoundary(u).box)}function ui(u,e){let t=fr(u.quality,"auto"),r=fr(u.detail,1),a=fr(u.radialSegments,12),o=fr(u.linearSegments,8),n=fr(u.resolution,2),s=fr(u.imageResolution,1),f=fr(u.probePositions,12),p=fr(u.doubleSided,!0),l=0;if(t==="auto")if(e instanceof to)t=Zn(e.root),l=_n(e);else if(Xi.is(e)){let[c,d,g]=e.grid.cells.space.dimensions;l=c*d*g,t=l<1e7?"medium":"low"}else ni.is(e)&&(t=Yn(e),l=Qn(e));if(t!=="custom"&&t!=="auto"){let c=Kn(t);switch(oo()&&(c=Math.max(c-1,0)),c){case 6:r=3,a=36,o=18,n=.1,s=.01,f=72,p=!0;break;case 5:r=3,a=28,o=14,n=.3,s=.05,f=48,p=!0;break;case 4:r=2,a=20,o=10,n=.5,s=.1,f=36,p=!0;break;case 3:r=1,a=12,o=8,n=.8,s=.2,f=24,p=!0;break;case 2:r=0,a=8,o=3,n=1.3,s=.4,f=24,p=!1;break;case 1:r=0,a=4,o=2,n=3,s=.7,f=12,p=!1;break;case 0:r=0,a=2,o=1,n=8,s=1,f=12,p=!1;break}}return l>0&&(n=Math.max(n,l/3e8),n=Math.min(n,20)),u.transparentBackfaces==="off"&&(u.alpha!==void 0&&u.alpha<1||u.xrayShaded)&&(p=!1),{detail:r,radialSegments:a,linearSegments:o,resolution:n,imageResolution:s,probePositions:f,doubleSided:p}}function va(u,e){return{kind:u,layers:e}}(l=>{l.Empty={kind:"empty-loci",layers:[]};let e;(O=>{O.is=Ar.has;let d;(W=>(W[W.None=0]="None",W[W.One=1]="One",W[W.Two=2]="Two",W[W.Three=4]="Three",W[W.Four=8]="Four",W[W.Five=16]="Five",W[W.Six=32]="Six"))(d=O.Flag||={});function g(z){return Ar.create(z)}O.create=g,O.Names={one:1,two:2,three:4,four:8,five:16,six:32};function v(z){return z in O.Names}O.isName=v;function S(z){switch(z){case"one":return 1;case"two":return 2;case"three":return 4;case"four":return 8;case"five":return 16;case"six":return 32}}O.fromName=S;function P(z){let G=0;for(let I=0,M=z.length;I<M;++I)G|=S(z[I]);return G}O.fromNames=P;function D(z){let G=[];return(0,O.is)(z,1)&&G.push("one"),(0,O.is)(z,2)&&G.push("two"),(0,O.is)(z,4)&&G.push("three"),(0,O.is)(z,8)&&G.push("four"),(0,O.is)(z,16)&&G.push("five"),(0,O.is)(z,32)&&G.push("six"),G}O.toNames=D})(e=l.Groups||={});function t(c,d){if(c.layers.length!==d.layers.length)return!1;for(let g=0,x=c.layers.length;g<x;++g)if(c.layers[g].groups!==d.layers[g].groups||!st.areEqual(c.layers[g].loci,d.layers[g].loci))return!1;return!0}l.areEqual=t;function r(c){return c.layers.length===0}l.isEmpty=r;function a(c,d){if(c.kind==="element-loci"){let g=[];for(let x of c.layers){let{loci:v,groups:S}=x;v=X.Loci.remap(v,d),X.Loci.isEmpty(v)||g.push({loci:v,groups:S})}return{kind:"element-loci",layers:g}}else return c}l.remap=a;function o(c){if(r(c))return c;if(c.kind==="element-loci"){let{structure:d}=c.layers[0].loci,g=new Map,x=X.Loci.none(d);for(let S=0,P=c.layers.length;S<P;++S){let{loci:D,groups:O}=c.layers[P-S-1];D=X.Loci.subtract(D,x),x=X.Loci.union(D,x),X.Loci.isEmpty(D)||(g.has(O)&&(D=X.Loci.union(D,g.get(O))),g.set(O,D))}let v=[];return g.forEach((S,P)=>{v.push({loci:S,groups:P})}),{kind:"element-loci",layers:v}}else return c}l.merge=o;function n(c,d){if(r(c))return c;if(c.kind==="element-loci"){let{structure:g}=c.layers[0].loci,x=[];for(let v of c.layers){let{loci:S,groups:P}=v,D=X.Loci.remap(S,d);S=X.Loci.remap(D,g),X.Loci.isEmpty(S)||x.push({loci:S,groups:P})}return{kind:"element-loci",layers:x}}else return c}l.filter=n;function s(c,d){let g=[];for(let x=0,v=c.length;x<v;++x){let{script:S,groups:P}=c[x],D=Xt.toLoci(S,d);X.Loci.isEmpty(D)||g.push({loci:D,groups:P})}return{kind:"element-loci",layers:g}}l.ofScript=s;function f(c,d){let g=[];for(let x=0,v=c.length;x<v;++x){let{bundle:S,groups:P}=c[x],D=X.Bundle.toLoci(S,d.root);g.push({loci:D,groups:P})}return{kind:"element-loci",layers:g}}l.ofBundle=f;function p(c){let d=[];for(let g=0,x=c.layers.length;g<x;++g){let{loci:v,groups:S}=c.layers[g],P=X.Bundle.fromLoci(v);d.push({bundle:P,groups:S})}return{kind:"element-loci",layers:d}}l.toBundle=p})(va||={});function ya(u,e){return{kind:u,layers:e}}(p=>{p.Empty={kind:"empty-loci",layers:[]};function e(l,c){if(l.layers.length===0&&c.layers.length===0)return!0;if(l.layers.length!==c.layers.length)return!1;for(let d=0,g=l.layers.length;d<g;++d)if(l.layers[d].clear!==c.layers[d].clear||!Ii(l.layers[d].material,c.layers[d].material)||!st.areEqual(l.layers[d].loci,c.layers[d].loci))return!1;return!0}p.areEqual=e;function t(l){return l.layers.length===0}p.isEmpty=t;function r(l,c){if(l.kind==="element-loci"){let d=[];for(let g of l.layers){let{loci:x,material:v,clear:S}=g;x=X.Loci.remap(x,c),X.Loci.isEmpty(x)||d.push({loci:x,material:v,clear:S})}return{kind:"element-loci",layers:d}}else return l}p.remap=r;function a(l){if(t(l))return l;if(l.kind==="element-loci"){let{structure:c}=l.layers[0].loci,d,g=new Map,x=X.Loci.none(c);for(let S=0,P=l.layers.length;S<P;++S){let{loci:D,material:O,clear:z}=l.layers[P-S-1];D=X.Loci.subtract(D,x),x=X.Loci.union(D,x),X.Loci.isEmpty(D)||(z?d=d?X.Loci.union(D,d):D:(g.has(O)&&(D=X.Loci.union(D,g.get(O))),g.set(O,D)))}let v=[];return d&&v.push({loci:d,material:no(),clear:!0}),g.forEach((S,P)=>{v.push({loci:S,material:P,clear:!1})}),{kind:"element-loci",layers:v}}else return l}p.merge=a;function o(l,c){if(t(l))return l;if(l.kind==="element-loci"){let{structure:d}=l.layers[0].loci,g=[];for(let x of l.layers){let{loci:v,material:S,clear:P}=x,D=X.Loci.remap(v,c);v=X.Loci.remap(D,d),X.Loci.isEmpty(v)||g.push({loci:v,material:S,clear:P})}return{kind:"element-loci",layers:g}}else return l}p.filter=o;function n(l,c){let d=[];for(let g=0,x=l.length;g<x;++g){let{script:v,material:S,clear:P}=l[g],D=Xt.toLoci(v,c);X.Loci.isEmpty(D)||d.push({loci:D,material:S,clear:P})}return{kind:"element-loci",layers:d}}p.ofScript=n;function s(l,c){let d=[];for(let g=0,x=l.length;g<x;++g){let{bundle:v,material:S,clear:P}=l[g],D=X.Bundle.toLoci(v,c.root);d.push({loci:D,material:S,clear:P})}return{kind:"element-loci",layers:d}}p.ofBundle=s;function f(l){let c=[];for(let d=0,g=l.layers.length;d<g;++d){let{loci:x,material:v,clear:S}=l.layers[d],P=X.Bundle.fromLoci(x);c.push({bundle:P,material:v,clear:S})}return{kind:"element-loci",layers:c}}p.toBundle=f})(ya||={});function xa(u,e){return{kind:u,layers:e}}(p=>{p.Empty={kind:"empty-loci",layers:[]};function e(l,c){if(l.layers.length===0&&c.layers.length===0)return!0;if(l.layers.length!==c.layers.length)return!1;for(let d=0,g=l.layers.length;d<g;++d)if(l.layers[d].value!==c.layers[d].value||!st.areEqual(l.layers[d].loci,c.layers[d].loci))return!1;return!0}p.areEqual=e;function t(l){return l.layers.length===0}p.isEmpty=t;function r(l,c){if(l.kind==="element-loci"){let d=[];for(let g of l.layers){let{loci:x,value:v}=g;x=X.Loci.remap(x,c),X.Loci.isEmpty(x)||d.push({loci:x,value:v})}return{kind:"element-loci",layers:d}}else return l}p.remap=r;function a(l){if(t(l))return l;if(l.kind==="element-loci"){let{structure:c}=l.layers[0].loci,d=new Map,g=X.Loci.none(c);for(let v=0,S=l.layers.length;v<S;++v){let{loci:P,value:D}=l.layers[S-v-1];P=X.Loci.subtract(P,g),g=X.Loci.union(P,g),X.Loci.isEmpty(P)||(d.has(D)&&(P=X.Loci.union(P,d.get(D))),d.set(D,P))}let x=[];return d.forEach((v,S)=>{x.push({loci:v,value:S})}),{kind:"element-loci",layers:x}}else return l}p.merge=a;function o(l,c){if(t(l))return l;if(l.kind==="element-loci"){let{structure:d}=l.layers[0].loci,g=[];for(let x of l.layers){let{loci:v,value:S}=x,P=X.Loci.remap(v,c);v=X.Loci.remap(P,d),X.Loci.isEmpty(v)||g.push({loci:v,value:S})}return{kind:"element-loci",layers:g}}else return l}p.filter=o;function n(l,c){let d=[];for(let g=0,x=l.length;g<x;++g){let{script:v,value:S}=l[g],P=Xt.toLoci(v,c);X.Loci.isEmpty(P)||d.push({loci:P,value:S})}return{kind:"element-loci",layers:d}}p.ofScript=n;function s(l,c){let d=[];for(let g=0,x=l.length;g<x;++g){let{bundle:v,value:S}=l[g],P=X.Bundle.toLoci(v,c.root);d.push({loci:P,value:S})}return{kind:"element-loci",layers:d}}p.ofBundle=s;function f(l){let c=[];for(let d=0,g=l.layers.length;d<g;++d){let{loci:x,value:v}=l.layers[d],S=X.Bundle.fromLoci(x);c.push({bundle:S,value:v})}return{kind:"element-loci",layers:c}}p.toBundle=f})(xa||={});function Ta(u,e){return{kind:u,layers:e}}(p=>{p.Empty={kind:"empty-loci",layers:[]};function e(l,c){if(l.layers.length===0&&c.layers.length===0)return!0;if(l.layers.length!==c.layers.length)return!1;for(let d=0,g=l.layers.length;d<g;++d)if(l.layers[d].value!==c.layers[d].value||!st.areEqual(l.layers[d].loci,c.layers[d].loci))return!1;return!0}p.areEqual=e;function t(l){return l.layers.length===0}p.isEmpty=t;function r(l,c){if(l.kind==="element-loci"){let d=[];for(let g of l.layers){let{loci:x,value:v}=g;x=X.Loci.remap(x,c),X.Loci.isEmpty(x)||d.push({loci:x,value:v})}return{kind:"element-loci",layers:d}}else return l}p.remap=r;function a(l){if(t(l))return l;if(l.kind==="element-loci"){let{structure:c}=l.layers[0].loci,d=new Map,g=X.Loci.none(c);for(let v=0,S=l.layers.length;v<S;++v){let{loci:P,value:D}=l.layers[S-v-1];P=X.Loci.subtract(P,g),g=X.Loci.union(P,g),X.Loci.isEmpty(P)||(d.has(D)&&(P=X.Loci.union(P,d.get(D))),d.set(D,P))}let x=[];return d.forEach((v,S)=>{x.push({loci:v,value:S})}),{kind:"element-loci",layers:x}}else return l}p.merge=a;function o(l,c){if(t(l))return l;if(l.kind==="element-loci"){let{structure:d}=l.layers[0].loci,g=[];for(let x of l.layers){let{loci:v,value:S}=x,P=X.Loci.remap(v,c);v=X.Loci.remap(P,d),X.Loci.isEmpty(v)||g.push({loci:v,value:S})}return{kind:"element-loci",layers:g}}else return l}p.filter=o;function n(l,c){let d=[];for(let g=0,x=l.length;g<x;++g){let{script:v,value:S}=l[g],P=Xt.toLoci(v,c);X.Loci.isEmpty(P)||d.push({loci:P,value:S})}return{kind:"element-loci",layers:d}}p.ofScript=n;function s(l,c){let d=[];for(let g=0,x=l.length;g<x;++g){let{bundle:v,value:S}=l[g],P=X.Bundle.toLoci(v,c.root);d.push({loci:P,value:S})}return{kind:"element-loci",layers:d}}p.ofBundle=s;function f(l){let c=[];for(let d=0,g=l.layers.length;d<g;++d){let{loci:x,value:v}=l.layers[d],S=X.Bundle.fromLoci(x);c.push({bundle:S,value:v})}return{kind:"element-loci",layers:c}}p.toBundle=f})(Ta||={});var Jn;(e=>{function u(t,r,a){return m.getDefaultValues(t.getParams(r,a))}e.getDefaultParams=u})(Jn||={});var $n={name:"",label:"",description:"",factory:()=>cr.Empty,getParams:()=>({}),defaultValues:{},defaultColorTheme:{name:""},defaultSizeTheme:{name:""},isApplicable:()=>!0};function bo(u){return u.map(e=>[e.name,e.provider.label])}var vo=class{constructor(){this._list=[];this._map=new Map;this._name=new Map;this._count=new Map}get default(){return this._list[0]}get types(){return bo(this._list)}findConflict(e){let t=this._map.get(e.name);if(t&&t!==e)return`Representation '${e.name}' is already registered with a different provider.`}add(e){let t=this.findConflict(e);if(t)throw new Error(t);let r=this._count.get(e);if(r!==void 0){this._count.set(e,r+1);return}this._list.push({name:e.name,provider:e}),this._map.set(e.name,e),this._name.set(e,e.name),this._count.set(e,1)}getName(e){if(!this._name.has(e))throw new Error(`'${e.label}' is not a registered represenatation provider.`);return this._name.get(e)}remove(e){let t=this._count.get(e);if(t===void 0)return;if(t>1){this._count.set(e,t-1);return}this._count.delete(e),this._map.delete(e.name),this._name.delete(e);let r=this._list.findIndex(a=>a.provider===e);r>=0&&this._list.splice(r,1)}has(e){return typeof e=="string"?this._map.has(e):this._count.has(e)}get(e){return this._map.get(e)||$n}get list(){return this._list}getApplicableList(e){return this._list.filter(t=>t.provider.isApplicable(e))}getApplicableTypes(e){return bo(this.getApplicableList(e))}clear(){this._list.length=0,this._map.clear(),this._name.clear(),this._count.clear()}};var cr;(p=>{let u;(g=>{function l(x,v){return x.repr===v.repr&&st.areEqual(x.loci,v.loci)}g.areEqual=l;function c(x){return st.isEmpty(x.loci)}g.isEmpty=c,g.Empty={loci:ur}})(u=p.Loci||={});function e(){return{visible:!0,alphaFactor:1,pickable:!0,colorOnly:!1,syncManually:!1,transform:B.identity(),overpaint:ga.Empty,transparency:ba.Empty,emissive:xa.Empty,substance:ya.Empty,wiggle:Ta.Empty,clipping:va.Empty,themeStrength:{overpaint:1,transparency:1,emissive:1,substance:1,wiggle:1},markerActions:ea.All}}p.createState=e;function t(l,c){c.visible!==void 0&&(l.visible=c.visible),c.alphaFactor!==void 0&&(l.alphaFactor=c.alphaFactor),c.pickable!==void 0&&(l.pickable=c.pickable),c.colorOnly!==void 0&&(l.colorOnly=c.colorOnly),c.overpaint!==void 0&&(l.overpaint=c.overpaint),c.transparency!==void 0&&(l.transparency=c.transparency),c.emissive!==void 0&&(l.emissive=c.emissive),c.substance!==void 0&&(l.substance=c.substance),c.wiggle!==void 0&&(l.wiggle=c.wiggle),c.clipping!==void 0&&(l.clipping=c.clipping),c.themeStrength!==void 0&&(l.themeStrength=c.themeStrength),c.syncManually!==void 0&&(l.syncManually=c.syncManually),c.transform!==void 0&&B.copy(l.transform,c.transform),c.markerActions!==void 0&&(l.markerActions=c.markerActions)}p.updateState=t,p.StateBuilder={create:e,update:t};function o(){return{label:"",groupCount:0,renderObjects:[],geometryVersion:-1,props:{},params:{},updated:new Me,state:e(),theme:da.createEmpty(),createOrUpdate:()=>la.constant("",void 0),setState:()=>{},setTheme:()=>{},getLoci:()=>ur,getAllLoci:()=>[],eachLocation:()=>{},mark:()=>!1,destroy:()=>{}}}p.createEmpty=o;class n{constructor(){this.curr=new Set;this.next=new Set;this._version=-1}get version(){return this._version}add(c,d){this.next.add(Ni(c,d))}snapshot(){ca.areEqual(this.curr,this.next)||(this._version+=1),[this.curr,this.next]=[this.next,this.curr],this.next.clear()}}p.GeometryState=n;function s(l,c,d,g,x){let v=0,S=new Me,P=new n,D=g.create(),O=da.createEmpty(),z,G,I,M={},K=Object.keys(x).map((A,re)=>{M[re]=A;let W=x[A](c,d);return W.setState(D),W});return{label:l,updated:S,get groupCount(){let A=0;if(G){let{visuals:re}=G;for(let W=0,ae=K.length;W<ae;++W)(!re||re.includes(M[W]))&&(A+=K[W].groupCount)}return A},get renderObjects(){let A=[];if(G){let{visuals:re}=G;for(let W=0,ae=K.length;W<ae;++W)(!re||re.includes(M[W]))&&A.push(...K[W].renderObjects)}return A},get geometryVersion(){return P.version},get props(){return G},get params(){return z},createOrUpdate:(A={},re)=>{re&&re!==I&&(z=d(c,re),I=re,G||(G=m.getDefaultValues(z)));let W=ui(Object.assign({},G,A),I);Object.assign(G,A,W);let{visuals:ae}=G;return la.create(`Creating or updating '${l}' representation`,async E=>{for(let te=0,Q=K.length;te<Q;++te)(!ae||ae.includes(M[te]))&&await K[te].createOrUpdate(G,I).runInContext(E),P.add(te,K[te].geometryVersion);P.snapshot(),S.next(v++)})},get state(){return D},get theme(){return O},getLoci:A=>{let{visuals:re}=G;for(let W=0,ae=K.length;W<ae;++W)if(!re||re.includes(M[W])){let E=K[W].getLoci(A);if(!$r(E))return E}return ur},getAllLoci:()=>{let A=[],{visuals:re}=G;for(let W=0,ae=K.length;W<ae;++W)(!re||re.includes(M[W]))&&A.push(...K[W].getAllLoci());return A},eachLocation:A=>{let{visuals:re}=G;for(let W=0,ae=K.length;W<ae;++W)(!re||re.includes(M[W]))&&K[W].eachLocation(A)},mark:(A,re)=>{let W=!1;for(let ae=0,E=K.length;ae<E;++ae)W=K[ae].mark(A,re)||W;return W},setState:A=>{g.update(D,A);for(let re=0,W=K.length;re<W;++re)K[re].setState(A)},setTheme:A=>{O=A;for(let re=0,W=K.length;re<W;++re)K[re].setTheme(A)},destroy(){for(let A=0,re=K.length;A<re;++A)K[A].destroy()}}}p.createMulti=s;function f(l,c){let d=0,g=new Me,x=new n,v=p.createState(),S=da.createEmpty(),P=m.clone(si.Params),D=m.getDefaultValues(si.Params);return{label:l,updated:g,get groupCount(){return c.values.uGroupCount.ref.value},get renderObjects(){return[c]},get geometryVersion(){return x.version},get props(){return D},get params(){return P},createOrUpdate:(O={})=>{let z=ui(Object.assign({},D,O));return Object.assign(D,O,z),la.create(`Updating '${l}' representation`,async G=>{x.add(0,c.id),x.snapshot(),g.next(d++)})},get state(){return v},get theme(){return S},getLoci:()=>ur,getAllLoci:()=>[],eachLocation:()=>{},mark:(O,z)=>!1,setState:O=>{O.visible!==void 0&&mr.setVisibility(c,O.visible),O.alphaFactor!==void 0&&mr.setAlphaFactor(c,O.alphaFactor),O.pickable!==void 0&&mr.setPickable(c,O.pickable),O.colorOnly!==void 0&&mr.setColorOnly(c,O.colorOnly),O.overpaint,O.transparency,O.emissive,O.substance,O.wiggle,O.clipping,O.themeStrength!==void 0&&mr.setThemeStrength(c,O.themeStrength),O.transform!==void 0&&mr.setTransform(c,O.transform),p.updateState(v,O)},setTheme:()=>{},destroy(){}}}p.fromRenderObject=f})(cr||={});var es;Object.defineProperty(cr,"Empty",{get:()=>es??=cr.createEmpty()});function ci(u){if(typeof u=="object"){if("buttons"in u)return u.buttons;if("which"in u){let e=u.which;if(e===2)return 4;if(e===3)return 2;if(e>0)return 1<<e-1}}return 0}function yo(u){if(typeof u=="object"&&"button"in u){let e=u.button;if(e===1)return 4;if(e===2)return 2;if(e>=0)return 1<<e}return 0}var xo={noScroll:!0,noMiddleClickScroll:!0,noContextMenu:!0,noPinchZoom:!0,noTextSelect:!0,preventGestures:!1,mask:(u,e)=>!0,pixelScale:1},Ot;(o=>{o.None=a();function e(n,s){return n.shift===s.shift&&n.alt===s.alt&&n.control===s.control&&n.meta===s.meta}o.areEqual=e;function t(n){return e(n,o.None)}o.areNone=t;function r(n){if(!n)return 0;let s=0;return n.shift&&s++,n.alt&&s++,n.control&&s++,n.meta&&s++,s}o.size=r;function a(n={}){return{shift:!!n.shift,alt:!!n.alt,control:!!n.control,meta:!!n.meta}}o.create=a})(Ot||={});var Ue;(r=>{r.has=Ar.has,r.create=Ar.create;let t;(d=>(d[d.None=0]="None",d[d.Primary=1]="Primary",d[d.Secondary=2]="Secondary",d[d.Auxilary=4]="Auxilary",d[d.Forth=8]="Forth",d[d.Five=16]="Five",d[d.Trigger=32]="Trigger",d[d.Squeeze=48]="Squeeze"))(t=r.Flag||={})})(Ue||={});var Yc={key:"",code:"",modifiers:Ot.None,x:-1,y:-1,pageX:-1,pageY:-1,preventDefault:Sr};function To(u){return u.composedPath?.()[0]??u.target}function So(){return{drag:new Me,interactionEnd:new Me,click:new Me,move:new Me,wheel:new Me,pinch:new Me,gesture:new Me,resize:new Me,leave:new Me,enter:new Me,modifiers:new Me,key:new Me,keyUp:new Me,keyDown:new Me,lock:new Me,trackedPointers:new Me}}var ts=["Backspace","Delete"],di;(t=>{function u(r={}){let{noScroll:a,noContextMenu:o}={...xo,...r};return{noScroll:a,noContextMenu:o,pointerLock:!1,width:0,height:0,pixelRatio:1,...So(),setPixelScale:Sr,updateTrackedPointers:Sr,updateScreenTouches:Sr,requestPointerLock:Sr,exitPointerLock:Sr,dispose:Sr}}t.create=u;function e(r,a={}){let{noScroll:o,noMiddleClickScroll:n,noContextMenu:s,noPinchZoom:f,noTextSelect:p,mask:l,pixelScale:c,preventGestures:d}={...xo,...a},g=r.clientWidth*K(),x=r.clientHeight*K(),v=!1,S=Ce(),P=T(),D=T(),O=T(),z=T(),G=T(),I={shift:!1,alt:!1,control:!1,meta:!1},M={x:-1,y:-1,pageX:-1,pageY:-1};function K(){return window.devicePixelRatio*c}function A(){return{...I}}function re(h){let w=To(h);return w===document.body||w===r}let W=0,ae=!1,E=Ue.create(0),te=0,Q=!1,ze=!1,ce;typeof window.ResizeObserver<"u"&&(ce=new window.ResizeObserver(pt));let ne=So(),{drag:xe,interactionEnd:ue,wheel:we,pinch:Xe,gesture:Re,click:U,move:Ke,leave:Ne,enter:bt,resize:Fe,modifiers:ke,key:kt,keyUp:Be,keyDown:Qe,lock:It,trackedPointers:Tt}=ne;Ee();function Ee(){r.addEventListener("contextmenu",St,!1),r.addEventListener("wheel",Nt,!1),r.addEventListener("mousedown",V,!1),window.addEventListener("mousemove",N,!1),window.addEventListener("mouseup",q,!1),r.addEventListener("touchstart",Qt,!1),r.addEventListener("touchmove",y,!1),r.addEventListener("touchend",Ct,!1),r.addEventListener("gesturechange",Ir,!1),r.addEventListener("gesturestart",Jt,!1),r.addEventListener("gestureend",Ft,!1),window.addEventListener("blur",Ie),window.addEventListener("keyup",Ae,!1),window.addEventListener("keydown",Zt,!1),window.addEventListener("keypress",at,!1),document.addEventListener("pointerlockchange",At,!1),document.addEventListener("pointerlockerror",Kt,!1),ce!=null?ce.observe(r.parentElement):window.addEventListener("resize",pt,!1)}function rt(){ae||(ae=!0,r.removeEventListener("contextmenu",St,!1),r.removeEventListener("wheel",Nt,!1),r.removeEventListener("mousedown",V,!1),window.removeEventListener("mousemove",N,!1),window.removeEventListener("mouseup",q,!1),r.removeEventListener("touchstart",Qt,!1),r.removeEventListener("touchmove",y,!1),r.removeEventListener("touchend",Ct,!1),r.removeEventListener("gesturechange",Ir,!1),r.removeEventListener("gesturestart",Jt,!1),r.removeEventListener("gestureend",Ft,!1),window.removeEventListener("blur",Ie),window.removeEventListener("keyup",Ae,!1),window.removeEventListener("keydown",Zt,!1),window.removeEventListener("keypress",at,!1),document.removeEventListener("pointerlockchange",At,!1),document.removeEventListener("pointerlockerror",Kt,!1),L.remove(),ce!=null?(ce.unobserve(r.parentElement),ce.disconnect()):window.removeEventListener("resize",pt,!1))}function At(){r.ownerDocument.pointerLockElement===r?v=!0:v=!1,Se(v),It.next(v)}function Kt(){console.error("Unable to use Pointer Lock API"),v=!1,Se(v),It.next(v)}function St(h){l(h.clientX,h.clientY)&&s&&h.preventDefault()}function ut(h){I.alt=h.altKey,I.shift=h.shiftKey,I.control=h.ctrlKey,I.meta=h.metaKey}function Ie(){(E||I.shift||I.alt||I.meta||I.control)&&(E=0,I.shift=I.alt=I.control=I.meta=!1)}function Zt(h){let w=!1;!I.alt&&h.altKey&&(w=!0,I.alt=!0),!I.shift&&h.shiftKey&&(w=!0,I.shift=!0),!I.control&&h.ctrlKey&&(w=!0,I.control=!0),!I.meta&&h.metaKey&&(w=!0,I.meta=!0),w&&Q&&ke.next(A()),re(h)&&Q&&Qe.next({key:h.key,code:h.code,modifiers:A(),...M,preventDefault:()=>h.preventDefault()})}function Ae(h){let w=!1;I.alt&&!h.altKey&&(w=!0,I.alt=!1),I.shift&&!h.shiftKey&&(w=!0,I.shift=!1),I.control&&!h.ctrlKey&&(w=!0,I.control=!1),I.meta&&!h.metaKey&&(w=!0,I.meta=!1),w&&Q&&ke.next(A()),ts.includes(h.key)&&at(h),re(h)&&Q&&Be.next({key:h.key,code:h.code,modifiers:A(),...M,preventDefault:()=>h.preventDefault()})}function at(h){!re(h)||!Q||kt.next({key:h.key,code:h.code,modifiers:A(),...M,preventDefault:()=>h.preventDefault()})}let Ze={primary:{prev:void 0,down:T(),end:T(),axes:[]},secondary:{prev:void 0,down:T(),end:T(),axes:[]},distance:-1};function zt(h,w,R){let H=Ue.has(w,h);return(R?Ue.has(R,h):!1)&&!H}function Rt(h,w){let{x:R,y:H,dx:ie,dy:ge,ray:se,buttons:pe,axes:Ve}=h,[ht,nt]=[R,H],xt=Ot.create(),$t=!0,tt=w?Ze.secondary:Ze.primary,{prev:jt}=tt;pe===2?Ke.next({x:R,y:H,pageX:ht,pageY:nt,buttons:0,button:0,modifiers:xt,inside:!0,onElement:!0,ray:se}):jt?.buttons===2&&Ne.next(void 0);let er=Ue.has(pe,1),Gt=jt?Ue.has(jt.buttons,1):!1;if(Gt&&!er&&(T.set(tt.end,R,H),T.distance(tt.end,tt.down)<20&&U.next({x:R,y:H,pageX:ht,pageY:nt,buttons:32,button:32,modifiers:xt,ray:se}),ue.next(void 0)),er){let Et=!Gt;xe.next({x:R,y:H,dx:ie,dy:ge,pageX:ht,pageY:nt,buttons:32,button:32,modifiers:xt,isStart:Et,useDelta:$t}),Et&&T.set(tt.down,R,H)}let Ye={x:0,y:0,pageX:0,pageY:0,modifiers:xt,preventDefault:()=>{}};if(zt(8,pe,jt?.buttons)){let Et=w?"GamepadX":"GamepadA";Be.next({...Ye,code:Et,key:Et})}if(zt(16,pe,jt?.buttons)){let Et=w?"GamepadY":"GamepadB";Be.next({...Ye,code:Et,key:Et})}Ve&&(Ve[2]<0?(Qe.next({...Ye,code:"GamepadLeft",key:"GamepadLeft"}),Be.next({...Ye,code:"GamepadRight",key:"GamepadRight"})):Ve[2]>0?(Qe.next({...Ye,code:"GamepadRight",key:"GamepadRight"}),Be.next({...Ye,code:"GamepadLeft",key:"GamepadLeft"})):Ve[2]!==tt.axes[2]&&(Be.next({...Ye,code:"GamepadLeft",key:"GamepadLeft"}),Be.next({...Ye,code:"GamepadRight",key:"GamepadRight"})),Ve[3]<0?(Qe.next({...Ye,code:"GamepadUp",key:"GamepadUp"}),Be.next({...Ye,code:"GamepadDown",key:"GamepadDown"})):Ve[3]>0?(Qe.next({...Ye,code:"GamepadDown",key:"GamepadDown"}),Be.next({...Ye,code:"GamepadUp",key:"GamepadUp"})):Ve[3]!==tt.axes[3]&&(Be.next({...Ye,code:"GamepadUp",key:"GamepadUp"}),Be.next({...Ye,code:"GamepadDown",key:"GamepadDown"}))),tt.axes=Ve||[],tt.prev=h}function lt(h,w,R){let H=b.distance(h.ray.origin,w.ray.origin);if(Ze.distance>0){let ie=H/Ze.distance;Re.next({scale:ie,rotation:0,deltaScale:0,deltaRotation:0,buttons:R,button:R,modifiers:A()})}Ze.distance=H}function Je(h){let w,R;for(let H of h)H.handedness==="right"?w=H:H.handedness==="left"&&(R=H);!w&&R&&(w=R,R=void 0),w?.buttons===1&&R?.buttons===1?lt(w,R,32):w?.buttons===2&&R?.buttons===2?lt(w,R,48):(Ze.distance===-1&&(w&&Rt(w,!1),R&&Rt(R,!0)),!w?.buttons&&!R?.buttons&&(Ze.distance=-1))}let He,je,it=-1;function Tr(h){if(h.length===2){let tt=T.fromObj(h[0]),jt=T.fromObj(h[1]),er=T.distance(tt,jt),Gt=32;if(it>0){let Ye=er/it;Re.next({scale:Ye,rotation:0,deltaScale:0,deltaRotation:0,buttons:Gt,button:Gt,modifiers:A()})}it=er,He=void 0;return}it=-1;let w=h[0];if(!w){if(je&&He){let tt=T.fromObj(je),jt=T.fromObj(He);if(T.distance(tt,jt)<10){let[er,Gt]=tt,[Ye,Et]=[er,Gt],aa=Ot.create(),ia=32,{ray:Un}=je;U.next({x:er,y:Gt,pageX:Ye,pageY:Et,buttons:ia,button:ia,modifiers:aa,ray:Un})}ue.next(void 0)}He=void 0,je=void 0;return}let R=T.fromObj(w),[H,ie]=R,[ge,se]=[H,ie],pe=Ot.create(),Ve=32,ht=!0,nt=He===void 0,xt=He?H-He.x:0,$t=He?ie-He.y:0;He=w,nt&&(je=w),xe.next({x:H,y:ie,dx:xt,dy:$t,pageX:ge,pageY:se,buttons:Ve,button:Ve,modifiers:pe,isStart:nt,useDelta:ht})}function vt(h){let w=h.touches[0],R=h.touches[1];return{clientX:(w.clientX+R.clientX)/2,clientY:(w.clientY+R.clientY)/2,pageX:(w.pageX+R.pageX)/2,pageY:(w.pageY+R.pageY)/2,target:h.target}}function ir(h){let w=h.touches[0].pageX-h.touches[1].pageX,R=h.touches[0].pageY-h.touches[1].pageY;return Math.sqrt(w*w+R*R)}let Ge=-1,yt,ct=T(),Yt=T();function Z(h){Ge<0||(T.set(Yt,h.touches[0].pageX,h.touches[0].pageY),Ge+=T.distance(ct,Yt),T.copy(ct,Yt))}let ye=T(),Le=!1,Vt=0,_t=1;function Qt(h){if(h.preventDefault(),yt=void 0,Ge=-1,h.touches.length===1)E=te=1,Ge=0,T.set(ct,h.touches[0].pageX,h.touches[0].pageY),yt=h.touches[0],$(h.touches[0]),T.copy(ye,D),Le=!0;else if(h.touches.length===2){E=6,te=2,ut(h),_t=1,Vt=ir(h);let{pageX:w,pageY:R}=F(vt(h));Le||($e(ye,vt(h)),Le=!0),Xe.next({isStart:!0,distance:Vt,delta:0,fraction:_t,fractionDelta:0,startX:ye[0],startY:ye[1],centerPageX:w,centerPageY:R,buttons:E,button:te,modifiers:A()})}else h.touches.length===3&&(E=te=8,$(vt(h)))}function Ct(h){if(_(),yt&&Ge<=4){let w=yt;if(!l(w.clientX,w.clientY))return;$e(Yt,w);let{pageX:R,pageY:H}=F(w),[ie,ge]=Yt;U.next({x:ie,y:ge,pageX:R,pageY:H,buttons:E,button:te,modifiers:A()})}yt=void 0,Le=!1}function y(h){if(te=0,f&&(h.preventDefault(),h.stopPropagation(),h.originalEvent&&(h.originalEvent.preventDefault(),h.originalEvent.stopPropagation())),yt=void 0,h.touches.length===1)E=1,yt=h.touches[0],Z(h),De(h.touches[0]);else if(h.touches.length===2){E=6,te=2,ut(h);let{pageX:w,pageY:R}=F(vt(h)),H=ir(h),ie=Vt-H,ge=Vt/H,se=ge-_t;_t=ge,Xe.next({isStart:!1,distance:H,delta:ie,fraction:ge,fractionDelta:se,startX:ye[0],startY:ye[1],centerPageX:w,centerPageY:R,buttons:E,button:te,modifiers:A()})}else h.touches.length===3&&(E=8,De(vt(h)))}function V(h){ut(h),E=ci(h),te=yo(h),n&&E===4&&h.preventDefault,$(h)}function N(h){ut(h),E=ci(h),te=0,De(h)}function q(h){ut(h),E=ci(h),te=yo(h),de(h),_()}function _(){ue.next(void 0)}function $(h){l(h.clientX,h.clientY)&&($e(D,h),T.copy(P,D),ft(D)&&(W=1))}function de(h){if(W=0,!!l(h.clientX,h.clientY)){if($e(O,h),!ze&&T.distance(O,P)<4){let{pageX:w,pageY:R}=F(h),[H,ie]=O;U.next({x:H,y:ie,pageX:w,pageY:R,buttons:E,button:te,modifiers:A()})}ze=!1}}function De(h){$e(O,h);let{pageX:w,pageY:R}=F(h),[H,ie]=O,{movementX:ge,movementY:se}=h,pe=ft(O)&&l(h.clientX,h.clientY);if(Q&&!pe?Ne.next(void 0):!Q&&pe&&bt.next(void 0),Q=pe,M.x=H,M.y=ie,M.pageX=w,M.pageY=R,Ke.next({x:H,y:ie,pageX:w,pageY:R,movementX:ge,movementY:se,buttons:E,button:te,modifiers:A(),inside:pe,onElement:To(h)===r}),W===0||(p&&h.preventDefault?.(),T.div(z,T.sub(z,O,D),ot(G)),T.magnitude(z)<1e-6))return;let Ve=W===1;if(Ve&&!l(h.clientX,h.clientY))return;T.distance(O,P)>=4&&(ze=!0);let[ht,nt]=z;xe.next({x:H,y:ie,dx:ht,dy:nt,pageX:w,pageY:R,buttons:E,button:te,modifiers:A(),isStart:Ve}),T.copy(D,O),W=2}function Nt(h){if(!l(h.clientX,h.clientY))return;$e(O,h);let{pageX:w,pageY:R}=F(h),[H,ie]=O;o&&h.preventDefault();let ge=rs(h);E=te=4,(ge.dx||ge.dy||ge.dz)&&we.next({x:H,y:ie,pageX:w,pageY:R,...ge,buttons:E,button:te,modifiers:A()})}function dt(h){d&&(h.preventDefault(),h.stopImmediatePropagation?.(),h.stopPropagation?.())}let or=0,Ht=0;function Jt(h){dt(h),or=h.scale,Ht=h.rotation,Re.next({scale:h.scale,rotation:h.rotation,deltaRotation:0,deltaScale:0,isStart:!0,buttons:E,button:te,modifiers:A()})}function Rr(h,w){Re.next({scale:h.scale,rotation:h.rotation,deltaRotation:Ht-h.rotation,deltaScale:or-h.scale,isEnd:w,buttons:E,button:te,modifiers:A()}),Ht=h.rotation,or=h.scale}function Ir(h){dt(h),Rr(h)}function Ft(h){dt(h),Rr(h,!0)}function pt(){g=r.clientWidth*K(),x=r.clientHeight*K(),Fe.next({})}function ft(h){if(r instanceof Window||r instanceof Document||r===document.body)return!0;{let w=r.getBoundingClientRect();return h[0]>=0&&h[1]>=0&&h[0]<w.width&&h[1]<w.height}}function ot(h){return h[0]=r.clientWidth,h[1]=r.clientHeight,h}function $e(h,w){if(g=r.clientWidth*K(),x=r.clientHeight*K(),v){let R=K();h[0]=(S.x+S.width/2)/R,h[1]=(x-(S.y+S.height/2))/R}else{let R=r.getBoundingClientRect();h[0]=(w.clientX||0)-R.left,h[1]=(w.clientY||0)-R.top}return h}function F(h){return v?{pageX:Math.round(window.innerWidth/2)+S.x,pageY:Math.round(window.innerHeight/2)+S.y}:{pageX:h.pageX,pageY:h.pageY}}let Y=30,L=oe();function oe(){let h=document.createElement("div"),w="30%",R="10%",H=`#000 ${w}, #0000 0 calc(100% - ${w}), #000 0`,ie=`linear-gradient(0deg, ${H}) 50%/${R} 100% no-repeat`,ge=`linear-gradient(90deg, ${H}) 50%/100% ${R} no-repeat`;return Object.assign(h.style,{width:`${Y}px`,aspectRatio:1,background:`${ie}, ${ge}, radial-gradient(circle at 50%, #000 5%, #0000 5%)`,display:"none",zIndex:1e3,position:"absolute",mixBlendMode:"difference",filter:"invert(1)"}),r.parentElement?.appendChild(h),h}function Se(h){if(L.style.display=h?"block":"none",h){let w=K(),R=(S.x+S.width/2)/w,H=(S.y+S.height/2)/w;L.style.width=`${Y}px`,L.style.left=`calc(${R}px - ${Y/2}px)`,L.style.bottom=`calc(${H}px - ${Y/2}px)`}}return{get noScroll(){return o},set noScroll(h){o=h},get noContextMenu(){return s},set noContextMenu(h){s=h},get width(){return g},get height(){return x},get pixelRatio(){return K()},get pointerLock(){return v},...ne,setPixelScale:h=>{c=h,g=r.clientWidth*K(),x=r.clientHeight*K()},updateTrackedPointers:h=>{Je(h),Tt.next(h)},updateScreenTouches:h=>{Tr(h)},requestPointerLock:h=>{S=h,v||r.requestPointerLock()},exitPointerLock:()=>{v&&r.ownerDocument.exitPointerLock()},dispose:rt}}t.fromElement=e})(di||={});function rs(u){let a=0,o=0,n=0,s=0,f=0;return"detail"in u&&(o=u.detail),"wheelDelta"in u&&(o=-u.wheelDelta/120),"wheelDeltaY"in u&&(o=-u.wheelDeltaY/120),"wheelDeltaX"in u&&(a=-u.wheelDeltaX/120),"axis"in u&&u.axis===u.HORIZONTAL_AXIS&&(a=o,o=0),n=a*10,s=o*10,"deltaY"in u&&(s=u.deltaY),"deltaX"in u&&(n=u.deltaX),"deltaZ"in u&&(f=u.deltaZ),(n||s||f)&&u.deltaMode&&(u.deltaMode===1?(n*=40,s*=40,f*=40):(n*=800,s*=800,f*=800)),n&&!a&&(a=n<0?-1:1),s&&!o&&(o=s<0?-1:1),{spinX:a,spinY:o,dx:n,dy:s,dz:f}}var Gr={backgroundColor:m.Color(0,{description:"Background color of the 3D canvas"}),pickingAlphaThreshold:m.Numeric(.5,{min:0,max:1,step:.01},{description:"The minimum opacity value needed for an object to be pickable."}),colorMarker:m.Boolean(!0,{description:"Tint marked and dim unmarked objects, by the marking pass when enabled, otherwise in the material color."}),highlightColor:m.Color(le.fromNormalizedRgb(1,.4,.6)),selectColor:m.Color(le.fromNormalizedRgb(.2,1,.1)),dimColor:m.Color(le.fromNormalizedRgb(1,1,1)),highlightStrength:m.Numeric(.3,{min:0,max:1,step:.1}),selectStrength:m.Numeric(.3,{min:0,max:1,step:.1}),dimStrength:m.Numeric(0,{min:0,max:1,step:.1}),markerPriority:m.Select(1,[[1,"Highlight"],[2,"Select"]]),xrayEdgeFalloff:m.Numeric(1,{min:0,max:3,step:.1}),celSteps:m.Numeric(5,{min:2,max:16,step:1}),exposure:m.Numeric(1,{min:0,max:3,step:.01}),light:m.ObjectList({inclination:m.Numeric(150,{min:0,max:180,step:1}),azimuth:m.Numeric(320,{min:0,max:360,step:1}),color:m.Color(le.fromNormalizedRgb(1,1,1)),intensity:m.Numeric(.6,{min:0,max:5,step:.01})},u=>le.toHexString(u.color),{defaultValue:[{inclination:150,azimuth:320,color:le.fromNormalizedRgb(1,1,1),intensity:.6}]}),ambientColor:m.Color(le.fromNormalizedRgb(1,1,1)),ambientIntensity:m.Numeric(.4,{min:0,max:2,step:.01}),enableAnimation:m.Boolean(!0,{description:"Enable time-based animations."})},jr=b(),pi=b();function Co(u,e){let t=u.length,{direction:r,color:a}=e||{direction:new Array(t*3).fill(0),color:new Array(t*3).fill(0)};for(let o=0;o<t;++o){let n=u[o];b.directionFromSpherical(jr,Pt(n.inclination),Pt(n.azimuth),1),b.toArray(jr,r,o*3),b.scale(pi,le.toVec3Normalized(pi,n.color),n.intensity),b.toArray(pi,a,o*3)}return{count:t,direction:r,color:a}}function fi(u,e){let t=new Array(u.count*3);for(let r=0,a=u.count;r<a;++r)b.fromArray(jr,u.direction,r*3),b.transformDirection(jr,jr,e),b.toArray(jr,t,r*3);return t}var hi;(r=>{let u;(l=>(l[l.None=0]="None",l[l.BlendedFront=1]="BlendedFront",l[l.BlendedBack=2]="BlendedBack",l[l.DepthBack=3]="DepthBack",l[l.SolidInteriorMark=4]="SolidInteriorMark",l[l.SolidInteriorFill=5]="SolidInteriorFill"))(u||={});let e;(s=>(s[s.All=0]="All",s[s.Opaque=1]="Opaque",s[s.Transparent=2]="Transparent"))(e||={});function t(a,o={}){let{gl:n,state:s,stats:f,extensions:p}=a,l=m.merge(Gr,m.getDefaultValues(Gr),o),c=Co(l.light),d=Ce(),g=T.create(n.drawingBufferWidth,n.drawingBufferHeight),x=le.toVec3Normalized(b(),l.backgroundColor),v=!1,S=null,P=a.resources.texture("image-uint8","rgba","ubyte","nearest");P.define(1,1),P.load({array:new Uint8Array([255,255,255,255]),width:1,height:1});let D=[["tDepth",P]],O=B(),z=B(),G=B(),I=B(),M=B(),K=B(),A=B(),re=B(),W=B(),ae=B(),E=B(),te=b(),Q=b(),ze=b(),ce=wt(),ne=T(),xe=Jr(),ue=1,we=et(),Xe=Wt(),Re=b();b.scale(Re,le.toArrayNormalized(l.ambientColor,Re,0),l.ambientIntensity);let U={uDrawId:i.create(0),uModel:i.create(B.identity()),uView:i.create(z),uInvView:i.create(G),uModelView:i.create(I),uInvModelView:i.create(M),uInvProjection:i.create(K),uProjection:i.create(B()),uModelViewProjection:i.create(A),uInvModelViewProjection:i.create(re),uHasHeadRotation:i.create(!1),uInvHeadRotation:i.create(W),uHasEyeCamera:i.create(!1),uModelViewEye:i.create(ae),uInvModelViewEye:i.create(E),uIsAsymmetricProjection:i.create(!1),uIsOrtho:i.create(1),uViewOffset:i.create(ne),uModelScale:i.create(1),uPixelRatio:i.create(a.pixelRatio),uViewport:i.create(Ce.toVec4(Oe(),d)),uDrawingBufferSize:i.create(g),uCameraPosition:i.create(Q),uCameraDir:i.create(te),uCameraPlane:i.create(wt.toArray(ce,Oe(),0)),uNear:i.create(1),uFar:i.create(1e4),uFog:i.create(!0),uFogNear:i.create(1),uFogFar:i.create(1e4),uFogColor:i.create(x),uRenderMask:i.create(0),uMarkingDepthTest:i.create(!1),uDepthBack:i.create(!1),uPickType:i.create(0),uMarkingType:i.create(0),uSolidInteriorPass:i.create(0),uSolidInteriorClip:i.create(-1),uTransparentBackground:i.create(!1),uLightDirection:i.create(c.direction),uLightColor:i.create(c.color),uAmbientColor:i.create(Re),uPickingAlphaThreshold:i.create(l.pickingAlphaThreshold),uHighlightColor:i.create(le.toVec3Normalized(b(),l.highlightColor)),uSelectColor:i.create(le.toVec3Normalized(b(),l.selectColor)),uDimColor:i.create(le.toVec3Normalized(b(),l.dimColor)),uHighlightStrength:i.create(l.highlightStrength),uSelectStrength:i.create(l.selectStrength),uDimStrength:i.create(l.dimStrength),uMarkerPriority:i.create(l.markerPriority),uMarkerAverage:i.create(0),uXrayEdgeFalloff:i.create(l.xrayEdgeFalloff),uCelSteps:i.create(l.celSteps),uExposure:i.create(l.exposure),uTime:i.create(0),uEnableAnimation:i.create(l.enableAnimation)},Ke=Object.entries(U),Ne=!0,bt=(y,V)=>{if(y.state.disposed||!y.state.visible||!y.state.pickable&&V==="pick"||!y.values.drawCount.ref.value||(et.scaleNX(we,y.values.boundingSphere.ref.value,ue),!Jr.intersectsSphere3D(xe,we)))return!1;let[N,q]=y.values.uLod.ref.value;if(N!==0||q!==0){let{center:_,radius:$}=we,de=wt.distanceToPoint(ce,_);if(de+$<N*ue||de-$>q*ue)return!1}return!(ue===1&&S!==null&&S(we))},Fe=(y,V,N)=>{if(ue===1){let $=y.values.instanceGrid.ref.value.cellSize>0,de=y.values.uInstanceCount.ref.value>1;$&&(de||y.values.lodLevels)?y.cull(ce,xe,S,a.stats,Xe):y.uncull()}else if(y.values.lodLevels){let{center:$,radius:de}=we,De=wt.distanceToPoint(ce,$);y.cullSimple(De,de,ue)}else y.uncull();let _=y.getProgram(V);if(s.currentProgramId!==_.id&&(Ne=!0,_.use()),Ne&&(_.setUniforms(Ke),_.bindTextures(D,0),Ne=!1),y.values.dGeometryType.ref.value==="directVolume"){if(V!=="color")return;s.disable(n.CULL_FACE),s.frontFace(n.CCW)}else N===1?(s.enable(n.CULL_FACE),y.values.dFlipSided?.ref.value?(s.frontFace(n.CW),s.cullFace(n.FRONT)):(s.frontFace(n.CCW),s.cullFace(n.BACK))):N===3?s.disable(n.CULL_FACE):N===4||N===5&&y.values.hasReflection.ref.value?(s.disable(n.CULL_FACE),s.frontFace(y.values.dFlipSided?.ref.value?n.CW:n.CCW)):N===2||N===5?(s.enable(n.CULL_FACE),y.values.dFlipSided?.ref.value?(s.frontFace(n.CW),s.cullFace(n.BACK)):(s.frontFace(n.CCW),s.cullFace(n.FRONT))):(y.values.uDoubleSided?y.values.uDoubleSided.ref.value||y.values.hasReflection.ref.value?s.disable(n.CULL_FACE):s.enable(n.CULL_FACE):s.disable(n.CULL_FACE),y.values.dFlipSided?.ref.value?(s.frontFace(n.CW),s.cullFace(n.FRONT)):(s.frontFace(n.CCW),s.cullFace(n.BACK)));y.render(V,D.length)},ke=(y,V,N)=>{bt(y,V)&&Fe(y,V,N)},kt=!!p.fragDepth,Be=!!n.getContextAttributes()?.stencil,Qe=()=>kt&&(Be||n.getParameter(n.FRAMEBUFFER_BINDING)!==null),It=y=>{let V=y.values.dGeometryType.ref.value;return kt&&(V==="mesh"||V==="textureMesh")&&!!y.values.dSolidInterior?.ref.value},Tt=(y,V,N,q)=>{i.updateIfChanged(U.uSolidInteriorPass,N),i.updateIfChanged(U.uSolidInteriorClip,q);let _=y.getProgram(V);s.currentProgramId===_.id&&!Ne&&(_.uniform("uSolidInteriorPass",N),_.uniform("uSolidInteriorClip",q))},Ee=(y,V,N)=>{n.clear(n.STENCIL_BUFFER_BIT),Tt(y,V,2,N),s.colorMask(!1,!1,!1,!1),s.depthMask(!1),s.disable(n.DEPTH_TEST),s.stencilFunc(n.ALWAYS,0,255),s.stencilOpSeparate(n.FRONT,n.KEEP,n.KEEP,n.INCR_WRAP),s.stencilOpSeparate(n.BACK,n.KEEP,n.KEEP,n.DECR_WRAP),Fe(y,V,4)},rt=(y,V,N,q)=>{let _=N==="opaque"||N==="back";Tt(y,V,1,q),s.stencilFunc(n.NOTEQUAL,0,255),N==="oit"?(s.enable(n.DEPTH_TEST),s.depthMask(!0),s.clearDepth(1),n.clear(n.DEPTH_BUFFER_BIT),s.depthFunc(n.LEQUAL),s.stencilOp(n.KEEP,n.KEEP,n.KEEP),Fe(y,V,5),s.depthFunc(n.EQUAL),s.depthMask(!1)):(s.enable(n.DEPTH_TEST),s.depthMask(_)),s.colorMask(!0,!0,!0,!0),s.stencilOp(n.KEEP,n.KEEP,_?n.KEEP:n.ZERO),Fe(y,V,5),N==="oit"&&s.disable(n.DEPTH_TEST)},At=b(),Kt=(y,V,N)=>{if(!bt(y,V))return;let q=N==="back",_=U.uNear.ref.value*1.0001;!q&&Math.abs(wt.distanceToPoint(ce,we.center)-_)<=we.radius&&(Ee(y,V,-1),rt(y,V,N,-1));let $=y.getClipInfo();if($&&$.capIndices.length>0){let{objects:de,planes:De,capIndices:Nt}=$;b.scale(At,Q,1/ue);for(let dt=0,or=Nt.length;dt<or;++dt){let Ht=Nt[dt];if(de.type[Ht]===Ki.Type.plane){let Jt=wt.distanceToPoint(De[Ht],At)*ue;if(q?Jt>=-1e-4:Jt<=1e-4)continue}Ee(y,V,Ht),rt(y,V,N,Ht)}}Tt(y,V,0,-1)},St=y=>{s.enable(n.STENCIL_TEST),s.stencilMask(255),s.clearStencil(0),y!=="oit"&&s.depthFunc(y==="back"?n.GEQUAL:n.LEQUAL)},ut=y=>{s.disable(n.STENCIL_TEST),s.stencilOp(n.KEEP,n.KEEP,n.KEEP),s.depthFunc(y==="back"?n.GREATER:n.LESS),s.frontFace(n.CCW),s.cullFace(n.BACK)},Ie=(y,V,N,q)=>{if(!kt)return;let _=!1;for(let $=0,de=y.length;$<de;++$){let De=y[$];if(!(!It(De)||!V(De))){if(!_){if(!Qe())return;k&&a.timer.mark("Renderer.renderSolidInteriorCaps"),St(q),_=!0}Kt(De,N,q)}}_&&(ut(q),k&&a.timer.markEnd("Renderer.renderSolidInteriorCaps"))},Zt=(y,V,N)=>{Xe=N,i.update(U.uView,y.view),i.update(U.uInvView,B.invert(G,y.view)),i.update(U.uProjection,y.projection),i.update(U.uInvProjection,B.invert(K,y.projection)),i.updateIfChanged(U.uIsOrtho,y.state.mode==="orthographic"?1:0),i.update(U.uViewOffset,y.viewOffset.enabled?T.set(ne,y.viewOffset.offsetX*16,y.viewOffset.offsetY*16):T.set(ne,0,0)),i.updateIfChanged(U.uModelScale,y.scale),i.update(U.uCameraPosition,B.getTranslation(Q,G)),b.scale(ze,y.state.target,y.scale),b.normalize(te,b.sub(te,ze,Q)),i.update(U.uCameraDir,te),i.updateIfChanged(U.uFar,y.far),i.updateIfChanged(U.uNear,y.near),i.updateIfChanged(U.uFog,y.state.fog>0),i.updateIfChanged(U.uFogFar,y.fogFar),i.updateIfChanged(U.uFogNear,y.fogNear),i.updateIfChanged(U.uTransparentBackground,v),Jr.fromProjectionMatrix(xe,y.projectionView),wt.copy(ce,xe[Jr.PlaneIndex.Near]),ce.constant-=wt.distanceToPoint(ce,Q),i.update(U.uCameraPlane,wt.toArray(ce,U.uCameraPlane.ref.value,0)),i.updateIfChanged(U.uMarkerAverage,V.markerAverage),!B.isZero(y.headRotation)?(i.updateIfChanged(U.uHasHeadRotation,!0),i.update(U.uInvHeadRotation,B.invert(W,y.headRotation)),i.update(U.uLightDirection,fi(c,W))):(i.updateIfChanged(U.uHasHeadRotation,!1),i.updateIfChanged(U.uInvHeadRotation,B.id),i.update(U.uLightDirection,c.direction)),i.update(U.uIsAsymmetricProjection,y.isAsymmetricProjection)},Ae=(y,V,N,q,_)=>{Qr(D,"tDepth",N||P),ue=V.scale,i.update(U.uModel,B.scaleUniformly(O,y.view,ue)),i.update(U.uModelView,B.mul(I,V.view,O)),i.update(U.uInvModelView,B.invert(M,I)),i.update(U.uModelViewProjection,B.mul(A,I,V.projection)),i.update(U.uInvModelViewProjection,B.invert(re,A)),i.updateIfChanged(U.uRenderMask,q),i.updateIfChanged(U.uMarkingDepthTest,_),!B.isZero(V.viewEye)?(i.updateIfChanged(U.uHasEyeCamera,!0),i.update(U.uModelViewEye,B.mul(ae,V.viewEye,O)),i.update(U.uInvModelViewEye,B.invert(E,ae))):(i.updateIfChanged(U.uHasEyeCamera,!1),i.updateIfChanged(U.uModelViewEye,B.id),i.updateIfChanged(U.uInvModelViewEye,B.id)),s.enable(n.SCISSOR_TEST),s.colorMask(!0,!0,!0,!0);let{x:de,y:De,width:Nt,height:dt}=d;s.viewport(de,De,Nt,dt),s.scissor(de,De,Nt,dt),Ne=!0,s.currentRenderItemId=-1},at=function(y){let V=nr(y.values.alpha.ref.value*y.state.alphaFactor,0,1),N=y.values.dXrayShaded?.ref.value==="on"||y.values.dXrayShaded?.ref.value==="inverted";return V===1&&y.values.transparencyAverage.ref.value!==1&&y.values.dGeometryType.ref.value!=="directVolume"&&y.values.dPointStyle?.ref.value!=="fuzzy"&&!N||y.values.dTransparentBackfaces?.ref.value==="opaque"},Ze=function(y){let V=nr(y.values.alpha.ref.value*y.state.alphaFactor,0,1),N=y.values.dXrayShaded?.ref.value==="on"||y.values.dXrayShaded?.ref.value==="inverted";return V!==0&&(V<1||y.values.transparencyAverage.ref.value>0||y.values.dGeometryType.ref.value==="directVolume"||y.values.dPointStyle?.ref.value==="fuzzy"||y.values.dGeometryType.ref.value==="text"||y.values.dGeometryType.ref.value==="image"||N)},zt=function(y){return!y.state.colorOnly},Rt=function(y){return nr(y.values.alpha.ref.value*y.state.alphaFactor,0,1)!==0&&y.values.transparencyAverage.ref.value!==1&&y.values.markerAverage.ref.value!==1},lt=function(y){return y.values.markerAverage.ref.value>0},Je=function(y){return y.values.emissiveAverage.ref.value+y.values.uEmissive.ref.value>0},He=function(y){return Ze(y)&&y.values.dTransparentBackfaces?.ref.value!=="off"},je=(y,V,N,q)=>{k&&a.timer.mark("Renderer.renderPick"),s.disable(n.BLEND),s.enable(n.DEPTH_TEST),s.depthMask(!0),Ae(y,V,null,0,!1),i.updateIfChanged(U.uPickType,q);let{renderables:_}=y;for(let $=0,de=_.length;$<de;++$){let De=_[$];zt(De)&&ke(De,N,0)}Ie(_,zt,N,"opaque"),k&&a.timer.markEnd("Renderer.renderPick")},it=(y,V)=>{k&&a.timer.mark("Renderer.renderDepth"),s.disable(n.BLEND),s.enable(n.DEPTH_TEST),s.depthMask(!0),Ae(y,V,null,0,!1);let{renderables:N}=y;for(let q=0,_=N.length;q<_;++q)ke(N[q],"depth",0);Ie(N,()=>!0,"depth","opaque"),k&&a.timer.markEnd("Renderer.renderDepth")},Tr=(y,V)=>{k&&a.timer.mark("Renderer.renderDepthOpaque"),s.disable(n.BLEND),s.enable(n.DEPTH_TEST),s.depthMask(!0),Ae(y,V,null,1,!1);let{renderables:N}=y;for(let q=0,_=N.length;q<_;++q){let $=N[q];at($)&&ke($,"depth",0)}Ie(N,at,"depth","opaque"),k&&a.timer.markEnd("Renderer.renderDepthOpaque")},vt=(y,V)=>{k&&a.timer.mark("Renderer.renderDepthOpaqueBack"),s.disable(n.BLEND),s.enable(n.DEPTH_TEST),s.depthMask(!0),s.depthFunc(n.GREATER),Ae(y,V,null,1,!1),i.updateIfChanged(U.uDepthBack,!0);let{renderables:N}=y;for(let q=0,_=N.length;q<_;++q){let $=N[q];at($)&&ke($,"depth",3)}Ie(N,at,"depth","back"),i.updateIfChanged(U.uDepthBack,!1),s.depthFunc(n.LESS),k&&a.timer.markEnd("Renderer.renderDepthOpaqueBack")},ir=(y,V,N)=>{k&&a.timer.mark("Renderer.renderDepthTransparent"),s.disable(n.BLEND),s.enable(n.DEPTH_TEST),s.depthMask(!0),Ae(y,V,N,2,!1);let{renderables:q}=y;for(let _=0,$=q.length;_<$;++_){let de=q[_];Ze(de)&&ke(de,"depth",0)}Ie(q,He,"depth","opaque"),k&&a.timer.markEnd("Renderer.renderDepthTransparent")},Ge=(y,V)=>{k&&a.timer.mark("Renderer.renderMarkingDepth"),s.disable(n.BLEND),s.enable(n.DEPTH_TEST),s.depthMask(!0),Ae(y,V,null,0,!1),i.updateIfChanged(U.uMarkingType,1);let{renderables:N}=y;for(let q=0,_=N.length;q<_;++q){let $=N[q];Rt($)&&ke($,"marking",0)}Ie(N,Rt,"marking","opaque"),k&&a.timer.markEnd("Renderer.renderMarkingDepth")},yt=(y,V,N)=>{k&&a.timer.mark("Renderer.renderMarkingMask"),s.disable(n.BLEND),s.enable(n.DEPTH_TEST),s.depthMask(!0),Ae(y,V,N,0,!!N),i.updateIfChanged(U.uMarkingType,2);let{renderables:q}=y;for(let _=0,$=q.length;_<$;++_){let de=q[_];lt(de)&&ke(de,"marking",0)}Ie(q,lt,"marking","opaque"),k&&a.timer.markEnd("Renderer.renderMarkingMask")},ct=(y,V,N,q)=>{k&&a.timer.mark("Renderer.renderEmissiveOpaque"),s.disable(n.BLEND),s.enable(n.DEPTH_TEST),q?(s.depthMask(!1),s.depthFunc(n.LEQUAL)):s.depthMask(!0),Ae(y,V,N,1,!1);let{renderables:_}=y;for(let $=0,de=_.length;$<de;++$){let De=_[$];at(De)&&(!q||Je(De))&&ke(De,"emissive",0)}Ie(_,$=>at($)&&(!q||Je($)),"emissive",q?"blended":"opaque"),q&&(s.depthFunc(n.LESS),s.depthMask(!0)),k&&a.timer.markEnd("Renderer.renderEmissiveOpaque")},Yt=(y,V,N)=>{k&&a.timer.mark("Renderer.renderEmissiveTransparent");let q=p.blendMinMax;s.enable(n.BLEND),s.blendFunc(n.ONE,n.ONE),q&&s.blendEquation(q.MAX),s.enable(n.DEPTH_TEST),s.depthMask(!1),Ae(y,V,N,2,!1);let{renderables:_}=y;for(let $=0,de=_.length;$<de;++$){let De=_[$];Ze(De)&&De.values.dGeometryType.ref.value!=="directVolume"&&Je(De)&&ke(De,"emissive",0)}Ie(_,$=>He($)&&Je($),"emissive","blended"),q&&s.blendEquation(n.FUNC_ADD),k&&a.timer.markEnd("Renderer.renderEmissiveTransparent")},Z=(y,V)=>{k&&a.timer.mark("Renderer.renderTracing"),s.disable(n.BLEND),s.enable(n.DEPTH_TEST),s.depthMask(!0),Ae(y,V,null,1,!1);let{renderables:N}=y;for(let q=0,_=N.length;q<_;++q){let $=N[q];at($)&&ke($,"tracing",0)}Ie(N,at,"tracing","opaque"),k&&a.timer.markEnd("Renderer.renderTracing")},ye=(y,V)=>{y.hasOpaque&&Le(y,V),y.opacityAverage<1&&Vt(y,V)},Le=(y,V)=>{k&&a.timer.mark("Renderer.renderOpaque"),s.disable(n.BLEND),s.enable(n.DEPTH_TEST),s.depthMask(!0),Ae(y,V,null,1,!1);let{renderables:N}=y;for(let q=0,_=N.length;q<_;++q){let $=N[q];at($)&&ke($,"color",0)}Ie(N,at,"color","opaque"),k&&a.timer.markEnd("Renderer.renderOpaque")},Vt=(y,V)=>{k&&a.timer.mark("Renderer.renderBlendedTransparent"),v?s.blendFunc(n.ONE,n.ONE_MINUS_SRC_ALPHA):s.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA),s.enable(n.BLEND),s.enable(n.DEPTH_TEST),s.depthMask(!1),Ae(y,V,null,2,!1);let N=Qe(),{renderables:q}=y;for(let _=0,$=q.length;_<$;++_){let de=q[_];Ze(de)&&(de.values.uDoubleSided?.ref.value?(de.values.dTransparentBackfaces?.ref.value!=="opaque"&&ke(de,"color",2),ke(de,"color",1)):ke(de,"color",0),N&&It(de)&&He(de)&&(St("blended"),Kt(de,"color","blended"),ut("blended")))}k&&a.timer.markEnd("Renderer.renderBlendedTransparent")};return{clear:(y,V,N)=>{s.enable(n.SCISSOR_TEST),s.enable(n.DEPTH_TEST),s.colorMask(!0,!0,!0,!0),s.depthMask(!0),N||v&&!V?s.clearColor(0,0,0,0):y?s.clearColor(x[0],x[1],x[2],1):s.clearColor(1,1,1,1),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT)},clearDepth:(y=!1)=>{s.enable(n.SCISSOR_TEST),s.enable(n.DEPTH_TEST),s.depthMask(!0),y?(s.colorMask(!0,!0,!0,!0),s.clearColor(1,1,1,1),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT)):n.clear(n.DEPTH_BUFFER_BIT)},update:Zt,renderPick:je,renderDepth:it,renderDepthOpaque:Tr,renderDepthOpaqueBack:vt,renderDepthTransparent:ir,renderMarkingDepth:Ge,renderMarkingMask:yt,renderEmissiveOpaque:ct,renderEmissiveTransparent:Yt,renderTracing:Z,renderBlended:ye,renderOpaque:Le,renderBlendedTransparent:Vt,renderVolume:(y,V,N)=>{k&&a.timer.mark("Renderer.renderVolume"),s.blendFunc(n.ONE,n.ONE_MINUS_SRC_ALPHA),s.enable(n.BLEND),s.disable(n.DEPTH_TEST),s.depthMask(!1),Ae(y,V,N,2,!1);let{renderables:q}=y;for(let _=0,$=q.length;_<$;++_){let de=q[_];de.values.dGeometryType.ref.value==="directVolume"&&ke(de,"color",0)}k&&a.timer.markEnd("Renderer.renderVolume")},renderWboitTransparent:(y,V,N)=>{k&&a.timer.mark("Renderer.renderWboitTransparent"),Ae(y,V,N,2,!1);let{renderables:q}=y;for(let _=0,$=q.length;_<$;++_){let de=q[_];Ze(de)&&ke(de,"color",0)}Ie(q,He,"color","oit"),k&&a.timer.markEnd("Renderer.renderWboitTransparent")},renderDpoitTransparent:(y,V,N,q)=>{k&&a.timer.mark("Renderer.renderDpoitTransparent"),s.enable(n.BLEND),Qr(D,"tDpoitDepth",q.depth),Qr(D,"tDpoitFrontColor",q.frontColor),Qr(D,"tDpoitBackColor",q.backColor),Ae(y,V,N,2,!1);let{renderables:_}=y;for(let $=0,de=_.length;$<de;++$){let De=_[$];Ze(De)&&ke(De,"color",0)}Ie(_,He,"color","oit"),k&&a.timer.markEnd("Renderer.renderDpoitTransparent")},setTime:y=>{i.updateIfChanged(U.uTime,y)},setProps:y=>{y.backgroundColor!==void 0&&y.backgroundColor!==l.backgroundColor&&(l.backgroundColor=y.backgroundColor,le.toVec3Normalized(x,l.backgroundColor),i.update(U.uFogColor,b.copy(U.uFogColor.ref.value,x))),y.pickingAlphaThreshold!==void 0&&y.pickingAlphaThreshold!==l.pickingAlphaThreshold&&(l.pickingAlphaThreshold=y.pickingAlphaThreshold,i.update(U.uPickingAlphaThreshold,l.pickingAlphaThreshold)),y.colorMarker!==void 0&&y.colorMarker!==l.colorMarker&&(l.colorMarker=y.colorMarker),y.highlightColor!==void 0&&y.highlightColor!==l.highlightColor&&(l.highlightColor=y.highlightColor,i.update(U.uHighlightColor,le.toVec3Normalized(U.uHighlightColor.ref.value,l.highlightColor))),y.selectColor!==void 0&&y.selectColor!==l.selectColor&&(l.selectColor=y.selectColor,i.update(U.uSelectColor,le.toVec3Normalized(U.uSelectColor.ref.value,l.selectColor))),y.dimColor!==void 0&&y.dimColor!==l.dimColor&&(l.dimColor=y.dimColor,i.update(U.uDimColor,le.toVec3Normalized(U.uDimColor.ref.value,l.dimColor))),y.highlightStrength!==void 0&&y.highlightStrength!==l.highlightStrength&&(l.highlightStrength=y.highlightStrength,i.update(U.uHighlightStrength,l.highlightStrength)),y.selectStrength!==void 0&&y.selectStrength!==l.selectStrength&&(l.selectStrength=y.selectStrength,i.update(U.uSelectStrength,l.selectStrength)),y.dimStrength!==void 0&&y.dimStrength!==l.dimStrength&&(l.dimStrength=y.dimStrength,i.update(U.uDimStrength,l.dimStrength)),y.markerPriority!==void 0&&y.markerPriority!==l.markerPriority&&(l.markerPriority=y.markerPriority,i.update(U.uMarkerPriority,l.markerPriority)),y.xrayEdgeFalloff!==void 0&&y.xrayEdgeFalloff!==l.xrayEdgeFalloff&&(l.xrayEdgeFalloff=y.xrayEdgeFalloff,i.update(U.uXrayEdgeFalloff,l.xrayEdgeFalloff)),y.celSteps!==void 0&&y.celSteps!==l.celSteps&&(l.celSteps=y.celSteps,i.update(U.uCelSteps,l.celSteps)),y.exposure!==void 0&&y.exposure!==l.exposure&&(l.exposure=y.exposure,i.update(U.uExposure,l.exposure)),y.light!==void 0&&!oa(y.light,l.light)&&(l.light=y.light,Object.assign(c,Co(y.light,c)),i.update(U.uLightDirection,c.direction),i.update(U.uLightColor,c.color)),y.ambientColor!==void 0&&y.ambientColor!==l.ambientColor&&(l.ambientColor=y.ambientColor,b.scale(Re,le.toArrayNormalized(l.ambientColor,Re,0),l.ambientIntensity),i.update(U.uAmbientColor,Re)),y.ambientIntensity!==void 0&&y.ambientIntensity!==l.ambientIntensity&&(l.ambientIntensity=y.ambientIntensity,b.scale(Re,le.toArrayNormalized(l.ambientColor,Re,0),l.ambientIntensity),i.update(U.uAmbientColor,Re)),y.enableAnimation!==void 0&&y.enableAnimation!==l.enableAnimation&&(l.enableAnimation=y.enableAnimation,i.update(U.uEnableAnimation,l.enableAnimation))},setViewport:(y,V,N,q)=>{s.viewport(y,V,N,q),s.scissor(y,V,N,q),(y!==d.x||V!==d.y||N!==d.width||q!==d.height)&&(Ce.set(d,y,V,N,q),i.update(U.uViewport,Oe.set(U.uViewport.ref.value,y,V,N,q)))},setTransparentBackground:y=>{v=y},setDrawingBufferSize:(y,V)=>{(y!==g[0]||V!==g[1])&&i.update(U.uDrawingBufferSize,T.set(g,y,V))},setPixelRatio:y=>{i.update(U.uPixelRatio,y)},setOcclusionTest:y=>{S=y},props:l,get stats(){return{programCount:a.stats.resourceCounts.program,shaderCount:a.stats.resourceCounts.shader,attributeCount:a.stats.resourceCounts.attribute,elementsCount:a.stats.resourceCounts.elements,framebufferCount:a.stats.resourceCounts.framebuffer,renderbufferCount:a.stats.resourceCounts.renderbuffer,textureCount:a.stats.resourceCounts.texture,vertexArrayCount:a.stats.resourceCounts.vertexArray,drawCount:f.drawCount,instanceCount:f.instanceCount,instancedDrawCount:f.instancedDrawCount}},get light(){return c},get ambientColor(){return U.uAmbientColor.ref.value},dispose:()=>{}}}r.create=t})(hi||={});var gi={eyeSeparation:m.Numeric(.062,{min:.02,max:.1,step:.001},{description:"Distance between left and right camera."}),focus:m.Numeric(10,{min:1,max:20,step:.1},{description:"Apparent object distance."})},as=m.getDefaultValues(gi);var mt=class{constructor(e,t={}){this.parent=e;this.left=new Sa;this.right=new Sa;this.props={...as,...t}}get viewport(){return this.parent.viewport}get viewOffset(){return this.parent.viewOffset}setProps(e){Object.assign(this.props,e)}update(e){this.parent.update(),e?os(this.parent,this.left,this.right,e):is(this.parent,this.props,this.left,this.right)}};(e=>{function u(t){return"left"in t&&"right"in t}e.is=u})(mt||={});var Sa=class{constructor(){this.viewport=Ce.create(0,0,0,0);this.view=B();this.projection=B();this.projectionView=B();this.inverseProjectionView=B();this.headRotation=B();this.viewEye=B();this.isAsymmetricProjection=!0;this.state=We.createDefaultSnapshot();this.viewOffset=We.ViewOffset();this.far=0;this.near=0;this.fogFar=0;this.fogNear=0;this.forceFull=!1;this.scale=0;this.minTargetDistance=0;this.disabled=!1}getRay(e,t,r){return B.getTranslation(e.origin,B.invert(B(),this.view)),b.set(e.direction,t,r,.5),wr(e.direction,e.direction,this.viewport,this.inverseProjectionView),b.normalize(e.direction,b.sub(e.direction,e.direction,e.origin)),e}},Po=B.identity(),wo=B.identity();function mi(u,e){Ce.copy(e.viewport,u.viewport),B.copy(e.view,u.view),B.copy(e.projection,u.projection),B.copy(e.headRotation,u.headRotation),We.copySnapshot(e.state,u.state),We.copyViewOffset(e.viewOffset,u.viewOffset),e.far=u.far,e.near=u.near,e.fogFar=u.fogFar,e.fogNear=u.fogNear,e.forceFull=u.forceFull,e.scale=u.scale,e.minTargetDistance=u.minTargetDistance}function is(u,e,t,r){mi(u,t),mi(u,r);let a=Math.floor(u.viewport.width/2),o=a/u.viewport.height;t.viewport.width=a,r.viewport.x+=a,r.viewport.width-=a;let n=e.eyeSeparation/2,s=n*u.near/e.focus,f=u.near*Math.tan(u.state.fov*.5),p,l;Po[12]=-n,wo[12]=n,p=-f*o+s,l=f*o+s,t.projection[0]=2*u.near/(l-p),t.projection[8]=(l+p)/(l-p),B.mul(t.view,t.view,Po),B.mul(t.projectionView,t.projection,t.view),B.invert(t.inverseProjectionView,t.projectionView),p=-f*o-s,l=f*o-s,r.projection[0]=2*u.near/(l-p),r.projection[8]=(l+p)/(l-p),B.mul(r.view,r.view,wo),B.mul(r.projectionView,r.projection,r.view),B.invert(r.inverseProjectionView,r.projectionView),t.disabled=!1,r.disabled=!1}function os(u,e,t,r){Do(u,e,r.pose.views[0],r.layer),r.pose.views.length===1?t.disabled=!0:Do(u,t,r.pose.views[1],r.layer)}function Do(u,e,t,r){mi(u,e);let a=r.getViewport(t);Ce.set(e.viewport,a.x,a.y,a.width,a.height),B.fromArray(e.projection,t.projectionMatrix,0),B.fromArray(e.view,t.transform.inverse.matrix,0),B.mul(e.projectionView,e.projection,e.view),B.invert(e.inverseProjectionView,e.projectionView),e.disabled=!1}function J(u,e="",t=""){return J.create(u,e,t)}(l=>{function u(c,d="",g=""){return{triggers:c,action:d,description:g}}l.create=u;function e(c){return!!c&&Array.isArray(c.triggers)&&typeof c.action=="string"}l.isBinding=e,l.Empty={triggers:[],action:"",description:""};function r(c){return c.triggers.length===0||c.triggers.every(d=>d.buttons===void 0&&d.modifiers===void 0&&!d.code)}l.isEmpty=r;function a(c,d,g){return c.triggers.some(x=>f.match(x,d,g))}l.match=a;function o(c,d,g,x){return c.triggers.some(v=>f.matchKey(v,d,g,x))}l.matchKey=o;function n(c){return c.triggers.map(f.format).join(" or ")}l.formatTriggers=n;function s(c,d=""){let g=c.description||zi(d);return Vi(g,{triggers:"<i>"+n(c)+"</i>"})}l.format=s;function f(c,d){return f.create(c,d)}l.Trigger=f;function p(c,d){return f.create(void 0,d,c)}l.TriggerKey=p,(S=>{function c(P,D,O){return{buttons:P,modifiers:D,code:O}}S.create=c,S.Empty={};function g(P,D,O){let{buttons:z,modifiers:G}=P;return z!==void 0&&(z===D||Ue.has(z,D))&&(!G||Ot.areEqual(G,O))}S.match=g;function x(P,D,O,z){let{modifiers:G,code:I}=P;return I!==void 0&&(I===D||I.length===1&&D.length===4&&D.startsWith("Key")&&!!z&&z.length===1&&z.toUpperCase()===I.toUpperCase())&&(!G||Ot.areEqual(G,O))}S.matchKey=x;function v(P){let D=[],O=ns(P.buttons,P.code);O&&D.push(O);let z=ls(P.code);z&&D.push(z);let G=ss(P.modifiers);return G&&D.push(G),D.join(" + ")}S.format=v})(f=l.Trigger||={})})(J||={});var Dr=Ue;function ns(u,e){let t=[];return u===void 0&&!e?t.push("any mouse button"):u===0?t.push("mouse hover"):u!==void 0&&(Dr.has(u,Dr.Flag.Primary)&&t.push("left mouse button"),Dr.has(u,Dr.Flag.Secondary)&&t.push("right mouse button"),Dr.has(u,Dr.Flag.Auxilary)&&t.push("wheel/middle mouse button"),Dr.has(u,Dr.Flag.Forth)&&t.push("three fingers")),t.join(" + ")}function ss(u,e){let t=[];return u?(u.alt&&t.push("alt key"),u.control&&t.push("control key"),u.meta&&t.push("meta/command key"),u.shift&&t.push("shift key"),e&&t.length===0&&t.push("no key")):e&&t.push("any key"),t.join(" + ")}function ls(u){return u?.startsWith("Key")&&(u=u.substring(3)),u&&Ai(u).toLowerCase()}var br=Ue,Bt=Ot,vr=J.Trigger,gt=J.TriggerKey,us={dragRotate:J([vr(br.Flag.Primary,Bt.create()),vr(br.Flag.Trigger)],"Rotate","Drag using ${triggers}"),dragRotateZ:J([vr(br.Flag.Primary,Bt.create({shift:!0,control:!0}))],"Rotate around z-axis (roll)","Drag using ${triggers}"),dragPan:J([vr(br.Flag.Secondary,Bt.create()),vr(br.Flag.Primary,Bt.create({control:!0}))],"Pan","Drag using ${triggers}"),dragZoom:J.Empty,dragFocus:J([vr(br.Flag.Forth,Bt.create())],"Focus","Drag using ${triggers}"),dragFocusZoom:J([vr(br.Flag.Auxilary,Bt.create())],"Focus and zoom","Drag using ${triggers}"),scrollZoom:J([vr(br.Flag.Auxilary,Bt.create())],"Zoom","Scroll using ${triggers}"),scrollFocus:J([vr(br.Flag.Auxilary,Bt.create({shift:!0}))],"Clip","Scroll using ${triggers}"),scrollFocusZoom:J.Empty,keyMoveForward:J([gt("KeyW"),gt("GamepadUp")],"Move forward","Press ${triggers}"),keyMoveBack:J([gt("KeyS"),gt("GamepadDown")],"Move back","Press ${triggers}"),keyMoveLeft:J([gt("KeyA")],"Move left","Press ${triggers}"),keyMoveRight:J([gt("KeyD")],"Move right","Press ${triggers}"),keyMoveUp:J([gt("KeyR")],"Move up","Press ${triggers}"),keyMoveDown:J([gt("KeyF")],"Move down","Press ${triggers}"),keyRollLeft:J([gt("KeyQ")],"Roll left","Press ${triggers}"),keyRollRight:J([gt("KeyE")],"Roll right","Press ${triggers}"),keyPitchUp:J([gt("ArrowUp",Bt.create({shift:!0}))],"Pitch up","Press ${triggers}"),keyPitchDown:J([gt("ArrowDown",Bt.create({shift:!0}))],"Pitch down","Press ${triggers}"),keyYawLeft:J([gt("ArrowLeft",Bt.create({shift:!0}))],"Yaw left","Press ${triggers}"),keyYawRight:J([gt("ArrowRight",Bt.create({shift:!0}))],"Yaw right","Press ${triggers}"),boostMove:J([gt("ShiftLeft")],"Boost move","Press ${triggers}"),enablePointerLock:J([gt("Space",Bt.create({control:!0}))],"Enable pointer lock","Press ${triggers}")},bi={rotateSpeed:m.Numeric(5,{min:1,max:10,step:1}),zoomSpeed:m.Numeric(7,{min:1,max:15,step:1}),panSpeed:m.Numeric(1,{min:.1,max:5,step:.1}),moveSpeed:m.Numeric(.75,{min:.1,max:3,step:.1}),boostMoveFactor:m.Numeric(5,{min:.1,max:10,step:.1}),flyMode:m.Boolean(!1),animate:m.MappedStatic("off",{off:m.EmptyGroup(),spin:m.Group({speed:m.Numeric(.1,{min:-2,max:2,step:.01},{description:"Number of rotations per second"}),axis:m.Vec3(b.create(0,-1,0),{},{description:"Axis of rotation in camera space"})},{description:"Spin the 3D scene around an axis in camera space"}),rock:m.Group({speed:m.Numeric(.3,{min:-5,max:5,step:.1},{description:"Number of oscilations per second"}),angle:m.Numeric(10,{min:0,max:90,step:1},{description:"How many degrees to rotate in each direction."}),axis:m.Vec3(b.create(0,-1,0),{},{description:"Axis of rotation in camera space"})},{description:"Rock the 3D scene around an axis in camera space"})}),staticMoving:m.Boolean(!0),dynamicDampingFactor:m.Numeric(.2,{min:0,max:1,step:.01}),minDistance:m.Numeric(.01,{},{isHidden:!0}),maxDistance:m.Numeric(1e150,{},{isHidden:!0}),gestureScaleFactor:m.Numeric(1,{},{isHidden:!0}),maxWheelDelta:m.Numeric(.02,{},{isHidden:!0}),autoAdjustMinMaxDistance:m.MappedStatic("on",{off:m.EmptyGroup(),on:m.Group({minDistanceFactor:m.Numeric(0),minDistancePadding:m.Numeric(5),maxDistanceFactor:m.Numeric(10),maxDistanceMin:m.Numeric(20)})},{isHidden:!0})},vi={bindings:us};var yi;(e=>{function u(t,r,a,o={},n={}){let s={...m.getDefaultValues(bi),...o},f={...vi,...n},p=f.bindings,l=Ce.clone(r.viewport),c=!1,d=t.drag.subscribe(N),g=t.interactionEnd.subscribe(q),x=t.wheel.subscribe(_),v=t.pinch.subscribe($),S=t.keyDown.subscribe(De),P=t.keyUp.subscribe(Nt),D=t.move.subscribe(de),O=t.lock.subscribe(Ht),z=t.leave.subscribe(Rr),G=!1,I=b(),M=b(),K=T(),A=T(),re=b(),W=0,ae=T(),E=T(),te=0,Q=0,ze=0,ce=T(),ne=T(),xe=T(),ue=T(),we=T(),Xe=T(),Re=b.clone(r.target),U=b.clone(r.position),Ke=b.clone(r.up),Ne=T();function bt(h,w){return T.set(Ne,(h-l.x)/l.width,(w-l.y)/l.height)}let Fe=T();function ke(h,w){return T.set(Fe,(h-l.width*.5-l.x)/(l.width*.5),(l.height+2*(l.y-w))/l.width)}function kt(){let h=t.width/t.height||1;return s.rotateSpeed*t.pixelRatio*h}let Be=b(),Qe=qe(),It=b(),Tt=b(),Ee=b(),rt=b(),At=1e3/60;function Kt(h,w){return Math.pow(h,w/At)}function St(h){return Kt(Math.sqrt(1-s.dynamicDampingFactor),h)}function ut(h){return 1-Kt(1-s.dynamicDampingFactor,h)}let Ie=1e-5,Zt=1e-5,Ae=Zt*Zt;function at(h){let w=A[0]-K[0],R=A[1]-K[1];b.set(rt,w,R,0);let H=b.magnitude(rt)*kt();H?(b.sub(M,r.position,r.target),b.normalize(It,M),b.normalize(Tt,r.up),b.normalize(Ee,b.cross(Ee,Tt,It)),b.setMagnitude(Tt,Tt,R),b.setMagnitude(Ee,Ee,w),b.add(rt,Tt,Ee),b.normalize(Be,b.cross(Be,rt,M)),qe.setAxisAngle(Qe,Be,H),b.transformQuat(M,M,Qe),b.transformQuat(r.up,r.up,Qe),b.copy(re,Be),W=H):!s.staticMoving&&W&&(W*=St(h),Math.abs(W)<Ie?W=0:(b.sub(M,r.position,r.target),qe.setAxisAngle(Qe,re,W),b.transformQuat(M,M,Qe),b.transformQuat(r.up,r.up,Qe))),T.copy(K,A)}let Ze=qe(),zt=b();function Rt(h){let w=(Z.rollRight-Z.rollLeft)/45,R=(E[0]-ae[0])*-Math.sign(E[1]),H=(E[1]-ae[1])*-Math.sign(E[0]),ie=-s.rotateSpeed*(-R+H)+w;ie?(b.normalize(zt,M),qe.setAxisAngle(Ze,zt,ie),b.transformQuat(r.up,r.up,Ze),te=ie):!s.staticMoving&&te&&(te*=St(h),Math.abs(te)<Ie?te=0:(b.normalize(zt,M),qe.setAxisAngle(Ze,zt,te),b.transformQuat(r.up,r.up,Ze))),T.copy(ae,E)}let lt=qe(),Je=b();function He(h){let w=(Z.pitchUp-Z.pitchDown)/(s.flyMode?360:90),R=-s.rotateSpeed*w;R?(b.cross(Je,M,r.up),b.normalize(Je,Je),qe.setAxisAngle(lt,Je,R),b.transformQuat(M,M,lt),b.transformQuat(r.up,r.up,lt),Q=R):!s.staticMoving&&Q&&(Q*=St(h),Math.abs(Q)<Ie?Q=0:(b.cross(Je,M,r.up),b.normalize(Je,Je),qe.setAxisAngle(lt,Je,Q),b.transformQuat(M,M,lt),b.transformQuat(r.up,r.up,lt)))}let je=qe(),it=b();function Tr(h){let w=(Z.yawRight-Z.yawLeft)/(s.flyMode?360:90),R=-s.rotateSpeed*w;R?(b.normalize(it,r.up),qe.setAxisAngle(je,it,R),b.transformQuat(M,M,je),b.transformQuat(r.up,r.up,je),ze=R):!s.staticMoving&&ze&&(ze*=St(h),Math.abs(ze)<Ie?ze=0:(b.normalize(it,r.up),qe.setAxisAngle(je,it,ze),b.transformQuat(M,M,je),b.transformQuat(r.up,r.up,je)))}function vt(h){if(!s.staticMoving&&Math.abs(ne[1]-ce[1])<Zt){T.copy(ce,ne);return}let w=1+(ne[1]-ce[1])*s.zoomSpeed;w!==1&&w>0&&b.scale(M,M,w),s.staticMoving?T.copy(ce,ne):ce[1]+=(ne[1]-ce[1])*ut(h)}function ir(h){if(!s.staticMoving&&Math.abs(ue[1]-xe[1])<Zt){T.copy(xe,ue);return}let w=(ue[1]-xe[1])*s.zoomSpeed;if(w!==0){let R=Math.max(1,r.state.radius+r.state.radius*w);r.setState({radius:R})}s.staticMoving?T.copy(xe,ue):xe[1]+=(ue[1]-xe[1])*ut(h)}let Ge=T(),yt=b(),ct=b();function Yt(h){if(T.sub(Ge,T.copy(Ge,Xe),we),!s.staticMoving&&T.squaredMagnitude(Ge)<Ae){T.copy(we,Xe);return}if(T.squaredMagnitude(Ge)){let w=t.pixelRatio*s.panSpeed;Ge[0]*=1/r.zoom*r.viewport.width*w,Ge[1]*=1/r.zoom*r.viewport.height*w,b.cross(ct,b.copy(ct,M),r.up),b.setMagnitude(ct,ct,Ge[0]),b.setMagnitude(yt,r.up,Ge[1]),b.add(ct,ct,yt),b.add(r.position,r.position,ct),b.add(r.target,r.target,ct),s.staticMoving?T.copy(we,Xe):(T.sub(Ge,Xe,we),T.scale(Ge,Ge,ut(h)),T.add(we,we,Ge))}}let Z={moveUp:0,moveDown:0,moveLeft:0,moveRight:0,moveForward:0,moveBack:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0,boostMove:0},ye=b(),Le=b();function Vt(h){b.sub(Le,r.position,r.target);let w=Math.max(r.state.minNear,s.minDistance);b.setMagnitude(Le,Le,w);let R=s.flyMode||t.pointerLock,H=h*(60/1e3)*s.moveSpeed*(Z.boostMove===1?s.boostMoveFactor:1);if(Z.moveForward===1&&(b.distance(r.position,a.boundingSphereVisible.center)<a.boundingSphereVisible.radius&&R?(b.normalize(ye,Le),b.scaleAndSub(r.position,r.position,ye,H)):(b.sub(ye,r.position,r.target),b.scale(ye,ye,1-H/100),b.add(r.position,r.target,ye)),R&&b.sub(r.target,r.position,Le)),Z.moveBack===1&&(b.distance(r.position,a.boundingSphereVisible.center)<a.boundingSphereVisible.radius&&R?(b.normalize(ye,Le),b.scaleAndAdd(r.position,r.position,ye,H)):(b.sub(ye,r.position,r.target),b.scale(ye,ye,1+H/100),b.add(r.position,r.target,ye)),R&&b.sub(r.target,r.position,Le)),Z.moveLeft===1&&(b.cross(ye,Le,r.up),b.normalize(ye,ye),R?(b.scaleAndAdd(r.position,r.position,ye,H),b.sub(r.target,r.position,Le)):(b.scaleAndSub(r.position,r.position,ye,H),b.sub(r.target,r.position,M))),Z.moveRight===1&&(b.cross(ye,Le,r.up),b.normalize(ye,ye),R?(b.scaleAndSub(r.position,r.position,ye,H),b.sub(r.target,r.position,Le)):(b.scaleAndAdd(r.position,r.position,ye,H),b.sub(r.target,r.position,M))),Z.moveUp===1&&(b.normalize(ye,r.up),R?(b.scaleAndAdd(r.position,r.position,ye,H),b.sub(r.target,r.position,Le)):(b.scaleAndSub(r.position,r.position,ye,H),b.sub(r.target,r.position,M))),Z.moveDown===1&&(b.normalize(ye,r.up),R?(b.scaleAndSub(r.position,r.position,ye,H),b.sub(r.target,r.position,Le)):(b.scaleAndAdd(r.position,r.position,ye,H),b.sub(r.target,r.position,M))),R){let ie=b.distance(r.position,a.boundingSphereVisible.center);r.setState({minFar:ie+a.boundingSphereVisible.radius})}}function _t(){let h=Math.min(Math.max(r.state.radiusMax*1e3,.01),s.maxDistance);b.squaredMagnitude(M)>h*h&&(b.setMagnitude(M,M,h),b.add(r.position,r.target,M),T.copy(ce,ne),T.copy(xe,ue)),b.squaredMagnitude(M)<s.minDistance*s.minDistance&&(b.setMagnitude(M,M,s.minDistance),b.add(r.position,r.target,M),T.copy(ce,ne),T.copy(xe,ue))}function Qt(h,w){return h*=t.pixelRatio,w*=t.pixelRatio,h>l.x+l.width||t.height-w>l.y+l.height||h<l.x||t.height-w<l.y}let Ct=-1;function y(h){if(Ct===h)return;let w=h-Ct;Ct>0&&(s.animate.name==="spin"?F(w):s.animate.name==="rock"&&L(w)),b.sub(M,r.position,r.target),at(w),Rt(w),He(w),Tr(w),vt(w),ir(w),Yt(w),b.add(r.position,r.target,M),_t(),Ct>0&&Vt(Math.min(w,15*1e3/60)),b.sub(M,r.position,r.target),_t(),b.squaredDistance(I,r.position)>1e-6&&b.copy(I,r.position),Ct=h}function V(){b.copy(r.target,Re),b.copy(r.position,U),b.copy(r.up,Ke),b.sub(M,r.position,r.target),b.copy(I,r.position)}function N({x:h,y:w,dx:R,dy:H,pageX:ie,pageY:ge,buttons:se,modifiers:pe,isStart:Ve,useDelta:ht}){let nt=!ht&&Qt(h,w);if(Ve&&nt||!Ve&&!G)return;G=!0,oe();let xt=J.match(p.dragRotate,se,pe),$t=J.match(p.dragRotateZ,se,pe),tt=J.match(p.dragPan,se,pe),jt=J.match(p.dragZoom,se,pe),er=J.match(p.dragFocus,se,pe),Gt=J.match(p.dragFocusZoom,se,pe);ht&&xt&&T.copy(K,ke(ie-R,ge-H)),ke(ie,ge),bt(ie,ge);let Ye=t.pixelRatio,Et=(h*Ye-l.width/2-l.x)/l.width,aa=-(t.height-w*Ye-l.height/2-l.y)/l.height;if(Ve&&(xt&&(T.copy(A,Fe),T.copy(K,A)),$t&&(T.set(E,Et,aa),T.copy(ae,E)),(jt||Gt)&&(T.copy(ce,Ne),T.copy(ne,ce)),er&&(T.copy(xe,Ne),T.copy(ue,xe)),tt&&(T.copy(we,Ne),T.copy(Xe,we))),xt&&T.copy(A,Fe),$t&&T.set(E,Et,aa),(jt||Gt)&&T.copy(ne,Ne),er&&T.copy(ue,Ne),Gt){let ia=b.distance(r.state.position,r.state.target);r.setState({radius:ia/5})}tt&&T.copy(Xe,Ne)}function q(){G=!1}function _({x:h,y:w,spinX:R,spinY:H,dz:ie,buttons:ge,modifiers:se}){if(Qt(h,w))return;let pe=Mi(R*.075,H*.075,ie*1e-4);pe<-s.maxWheelDelta?pe=-s.maxWheelDelta:pe>s.maxWheelDelta&&(pe=s.maxWheelDelta),J.match(p.scrollZoom,ge,se)&&(ne[1]+=pe),J.match(p.scrollFocus,ge,se)&&(ue[1]+=pe)}function $({isStart:h,startX:w,startY:R,centerPageX:H,centerPageY:ie,fractionDelta:ge,buttons:se,modifiers:pe}){if(Qt(w,R))return;let Ve=J.match(p.dragPan,se,pe),ht=J.match(p.scrollZoom,se,pe);G=Ve||ht,Ve&&(bt(H,ie),h?(T.copy(we,Ne),T.copy(Xe,we)):T.copy(Xe,Ne)),ht&&(ne[1]+=s.gestureScaleFactor*ge)}function de({movementX:h,movementY:w}){if(!t.pointerLock||h===void 0||w===void 0)return;let R=l.width*.5-l.x,H=l.height*.5-l.y;T.copy(K,ke(R,H)),T.copy(A,ke(h+R,w+H))}function De({modifiers:h,code:w,key:R,x:H,y:ie}){Qt(H,ie)||(J.matchKey(p.keyMoveForward,w,h,R)?Z.moveForward=1:J.matchKey(p.keyMoveBack,w,h,R)?Z.moveBack=1:J.matchKey(p.keyMoveLeft,w,h,R)?Z.moveLeft=1:J.matchKey(p.keyMoveRight,w,h,R)?Z.moveRight=1:J.matchKey(p.keyMoveUp,w,h,R)?Z.moveUp=1:J.matchKey(p.keyMoveDown,w,h,R)?Z.moveDown=1:J.matchKey(p.keyRollLeft,w,h,R)?Z.rollLeft=1:J.matchKey(p.keyRollRight,w,h,R)?Z.rollRight=1:J.matchKey(p.keyPitchUp,w,h,R)?Z.pitchUp=1:J.matchKey(p.keyPitchDown,w,h,R)?Z.pitchDown=1:J.matchKey(p.keyYawLeft,w,h,R)?Z.yawLeft=1:J.matchKey(p.keyYawRight,w,h,R)&&(Z.yawRight=1),J.matchKey(p.boostMove,w,h,R)&&(Z.boostMove=1),J.matchKey(p.enablePointerLock,w,h,R)&&t.requestPointerLock(l))}function Nt({modifiers:h,code:w,key:R,x:H,y:ie}){if(Qt(H,ie))return;let ge=!1;w.startsWith("Alt")?(ge=!0,h.alt=!0):w.startsWith("Shift")?(ge=!0,h.shift=!0):w.startsWith("Control")?(ge=!0,h.control=!0):w.startsWith("Meta")&&(ge=!0,h.meta=!0);let se=[];ge?(Z.moveForward&&se.push(p.keyMoveForward.triggers[0]?.code||""),Z.moveBack&&se.push(p.keyMoveBack.triggers[0]?.code||""),Z.moveLeft&&se.push(p.keyMoveLeft.triggers[0]?.code||""),Z.moveRight&&se.push(p.keyMoveRight.triggers[0]?.code||""),Z.moveUp&&se.push(p.keyMoveUp.triggers[0]?.code||""),Z.moveDown&&se.push(p.keyMoveDown.triggers[0]?.code||""),Z.rollLeft&&se.push(p.keyRollLeft.triggers[0]?.code||""),Z.rollRight&&se.push(p.keyRollRight.triggers[0]?.code||""),Z.pitchUp&&se.push(p.keyPitchUp.triggers[0]?.code||""),Z.pitchDown&&se.push(p.keyPitchDown.triggers[0]?.code||""),Z.yawLeft&&se.push(p.keyYawLeft.triggers[0]?.code||""),Z.yawRight&&se.push(p.keyYawRight.triggers[0]?.code||"")):se.push(w);for(let pe of se)J.matchKey(p.keyMoveForward,pe,h,R)?Z.moveForward=0:J.matchKey(p.keyMoveBack,pe,h,R)?Z.moveBack=0:J.matchKey(p.keyMoveLeft,pe,h,R)?Z.moveLeft=0:J.matchKey(p.keyMoveRight,pe,h,R)?Z.moveRight=0:J.matchKey(p.keyMoveUp,pe,h,R)?Z.moveUp=0:J.matchKey(p.keyMoveDown,pe,h,R)?Z.moveDown=0:J.matchKey(p.keyRollLeft,pe,h,R)?Z.rollLeft=0:J.matchKey(p.keyRollRight,pe,h,R)?Z.rollRight=0:J.matchKey(p.keyPitchUp,pe,h,R)?Z.pitchUp=0:J.matchKey(p.keyPitchDown,pe,h,R)?Z.pitchDown=0:J.matchKey(p.keyYawLeft,pe,h,R)?Z.yawLeft=0:J.matchKey(p.keyYawRight,pe,h,R)&&(Z.yawRight=0);J.matchKey(p.boostMove,w,h,R)&&(Z.boostMove=0)}function dt(){b.sub(Le,r.position,r.target);let h=Math.max(r.state.minNear,s.minDistance);b.setMagnitude(Le,Le,h),b.sub(r.target,r.position,Le);let w=b.distance(r.position,a.boundingSphereVisible.center);r.setState({minFar:w+a.boundingSphereVisible.radius})}function or(){let{center:h,radius:w}=a.boundingSphereVisible;if(b.distance(r.position,h)>w){let H=r.getFocus(h,w);r.setState({...H,minFar:0})}else r.setState({minFar:0,radius:a.boundingSphereVisible.radius})}function Ht(h){h?dt():or()}function Jt(){Z.moveForward=0,Z.moveBack=0,Z.moveLeft=0,Z.moveRight=0,Z.moveUp=0,Z.moveDown=0,Z.rollLeft=0,Z.rollRight=0,Z.pitchUp=0,Z.pitchDown=0,Z.yawLeft=0,Z.yawRight=0,Z.boostMove=0}function Rr(){Jt()}function Ir(){c||(c=!0,d.unsubscribe(),x.unsubscribe(),v.unsubscribe(),g.unsubscribe(),S.unsubscribe(),P.unsubscribe(),D.unsubscribe(),O.unsubscribe(),z.unsubscribe())}let Ft=qe(),pt=b(),ft=b(),ot=b(),$e=b();function F(h){if(s.animate.name!=="spin"||s.animate.params.speed===0||G)return;let w=2*Math.PI*s.animate.params.speed/1e3,R=h*w;b.sub(M,r.position,r.target),b.normalize($e,M),b.normalize(ft,r.up),b.cross(ot,ft,$e),b.normalize(ot,ot);let H=s.animate.params.axis;b.set(pt,H[0]*ot[0]+H[1]*ft[0]+H[2]*$e[0],H[0]*ot[1]+H[1]*ft[1]+H[2]*$e[1],H[0]*ot[2]+H[1]*ft[2]+H[2]*$e[2]),b.normalize(pt,pt),qe.setAxisAngle(Ft,pt,R),b.transformQuat(M,M,Ft),b.transformQuat(r.up,r.up,Ft),b.add(r.position,r.target,M)}let Y=0;function L(h){if(s.animate.name!=="rock"||s.animate.params.speed===0||G)return;let w=h/1e3*s.animate.params.speed,R=Pt(s.animate.params.angle),H=Math.sin(Y*Math.PI*2)*R,ge=Math.sin((Y+w)*Math.PI*2)*R-H;b.sub(M,r.position,r.target),b.normalize($e,M),b.normalize(ft,r.up),b.cross(ot,ft,$e),b.normalize(ot,ot);let se=s.animate.params.axis;b.set(pt,se[0]*ot[0]+se[1]*ft[0]+se[2]*$e[0],se[0]*ot[1]+se[1]*ft[1]+se[2]*$e[1],se[0]*ot[2]+se[1]*ft[2]+se[2]*$e[2]),b.normalize(pt,pt),qe.setAxisAngle(Ft,pt,ge),b.transformQuat(M,M,Ft),b.transformQuat(r.up,r.up,Ft),b.add(r.position,r.target,M),Y+=w,Y>=1&&(Y=0)}function oe(){Y=0}function Se(h){Ct=-1,y(h)}return{viewport:l,get isAnimating(){return s.animate.name!=="off"},get isMoving(){return Z.moveForward===1||Z.moveBack===1||Z.moveLeft===1||Z.moveRight===1||Z.moveUp===1||Z.moveDown===1||Z.rollLeft===1||Z.rollRight===1||Z.pitchUp===1||Z.pitchDown===1||Z.yawLeft===1||Z.yawRight===1},get props(){return s},setProps:h=>{h.animate?.name==="rock"&&s.animate.name!=="rock"&&oe(),h.flyMode!==void 0&&h.flyMode!==s.flyMode&&(h.flyMode?dt():or()),Object.assign(s,h)},get attribs(){return f},setAttribs:h=>{Object.assign(f,h),Object.assign(p,f.bindings)},start:Se,update:y,reset:V,dispose:Ir}}e.create=u})(yi||={});var ds={...rr.Params,alpha:{...rr.Params.alpha,defaultValue:1},ignoreLight:{...rr.Params.ignoreLight,defaultValue:!0},colorX:m.Color(Pr.red,{isEssential:!0}),colorY:m.Color(Pr.green,{isEssential:!0}),colorZ:m.Color(Pr.blue,{isEssential:!0}),scale:m.Numeric(.33,{min:.1,max:2,step:.1},{isEssential:!0})},Pa={handle:m.MappedStatic("off",{on:m.Group(ds),off:m.Group({})},{cycle:!0,description:"Show handle tool"})},Ca=class{constructor(e,t={}){this.webgl=e;this.props={handle:{name:"off",params:{}}};this.pixelRatio=1;this._transform=B();this.eachGroup=(e,t)=>{if(!this.renderObject||!ko(e))return!1;let r=!1,a=this.renderObject.values.uGroupCount.ref.value,{elements:o}=e;for(let{groupId:n,instanceId:s}of o){let f=s*a+n;t(Wi.ofSingleton(f))&&(r=!0)}return r};this.scene=Vr.create(e,"blended"),this.setProps(t)}getBoundingSphere(e,t){return this.renderObject&&(et.copy(e,this.renderObject.values.invariantBoundingSphere.ref.value),B.fromArray(this._transform,this.renderObject.values.aTransform.ref.value,t*16),et.transform(e,e,this._transform)),e}setProps(e){this.props=ua(this.props,t=>{if(e.handle!==void 0&&(t.handle.name=e.handle.name,e.handle.name==="on")){this.scene.clear(),this.pixelRatio=this.webgl.pixelRatio;let r={...e.handle.params,scale:e.handle.params.scale*this.webgl.pixelRatio,cellSize:0};this.renderObject=ms(r),this.scene.add(this.renderObject),this.scene.commit(),t.handle.params={...e.handle.params}}})}get isEnabled(){return this.props.handle.name==="on"}update(e,t,r){this.renderObject&&(this.pixelRatio!==this.webgl.pixelRatio&&this.setProps(this.props),B.setTranslation(this.renderObject.values.aTransform.ref.value,t),B.fromMat3(this.renderObject.values.aTransform.ref.value,r),i.update(this.renderObject.values.aTransform,this.renderObject.values.aTransform.ref.value),this.scene.update([this.renderObject],!0))}getLoci(e){let{objectId:t,groupId:r,instanceId:a}=e;return!this.renderObject||t!==this.renderObject.id?ur:fs(this,r,a)}mark(e,t){return!ea.is(ea.Highlighting,t)||!ro(e)&&(!ko(e)||e.data!==this)?!1:mr.mark(this.renderObject,e,t,this.eachGroup)}};function ps(u,e){let t=Nr.createState(512,256,e),r=.05*u,a=b.scale(b(),b.unitX,u),o=b.scale(b(),b.unitY,u),n=b.scale(b(),b.unitZ,u),s={radiusTop:r,radiusBottom:r,radialSegments:32};return t.currentGroup=Fr.TranslateScreenXY,gr(t,b.origin,r*3,2),t.currentGroup=Fr.TranslateObjectX,gr(t,a,r,2),ha(t,b.origin,a,1,s),t.currentGroup=Fr.TranslateObjectY,gr(t,o,r,2),ha(t,b.origin,o,1,s),t.currentGroup=Fr.TranslateObjectZ,gr(t,n,r,2),ha(t,b.origin,n,1,s),Nr.getMesh(t)}var Fr={None:0,TranslateScreenXY:1,TranslateObjectX:3,TranslateObjectY:4,TranslateObjectZ:5};function fs(u,e,t){return ao("handle",u,[{groupId:e,instanceId:t}],r=>u.getBoundingSphere(r,t),()=>`Handle Helper | Group Id ${e} | Instance Id ${t}`)}function ko(u){return u.kind==="data-loci"&&u.tag==="handle"}function hs(u,e){let t=10*u.scale,r=ps(t,e?.geometry);return r.setBoundingSphere(et.create(b.create(t/2,t/2,t/2),t+t/4)),fa("handle",{},r,o=>{switch(o){case Fr.TranslateObjectX:return u.colorX;case Fr.TranslateObjectY:return u.colorY;case Fr.TranslateObjectZ:return u.colorZ;default:return Pr.grey}},()=>1,()=>"")}function ms(u){let e=hs(u);return pa(e,u)}var wa=class{constructor(e,t){this.entries=new Map;this.ctx=e,this.parent=t}register(e,t){this.entries.has(e)&&(Pe&&console.warn(`Debug helper with name '${e}' already exists, replacing.`),this.entries.get(e).clear()),this.entries.set(e,t)}unregister(e){let t=this.entries.get(e);t&&(t.clear(),this.entries.delete(e))}get scenes(){return Array.from(this.entries.values()).map(e=>e.scene)}update(){this.entries.forEach(e=>{e.isEnabled&&e.update()})}syncVisibility(){this.entries.forEach(e=>{e.syncVisibility()})}clear(){this.entries.forEach(e=>{e.clear()})}get isEnabled(){let e=!1;return this.entries.forEach(t=>{t.isEnabled&&(e=!0)}),e}setProps(e){this.entries.forEach(t=>{t.setProps(e)})}};var ta={...rr.Params,enabled:m.Select("off",m.arrayToOptions(["on","off"]),{isEssential:!0}),ignoreLight:{...rr.Params.ignoreLight,defaultValue:!0},color:m.Color(Pr.grey,{isEssential:!0}),hitColor:m.Color(Pr.pink,{isEssential:!0})},Da=class{constructor(e,t={}){this.pixelScale=1;this.modelScale=1;this.pointers=[];this.points=[];this.hit=void 0;this.scene=Vr.create(e,"blended"),this.props={...m.getDefaultValues(ta),...t},this.camera=new We,this.shape=Ro(this.getData(),this.props),this.renderObject=vs(this.shape,this.props),this.scene.add(this.renderObject)}setProps(e){Object.assign(this.props,e),this.isEnabled&&this.update(this.pointers,this.points,this.hit)}ensureEnabled(){this.props.enabled!=="on"&&(this.props.enabled="on")}get isEnabled(){return this.props.enabled==="on"}setCamera(e){We.copySnapshot(this.camera.state,e.state),Ce.copy(this.camera.viewport,e.viewport),B.copy(this.camera.view,e.view),B.copy(this.camera.projection,e.projection),B.copy(this.camera.projectionView,e.projectionView),B.copy(this.camera.headRotation,e.headRotation),We.copyViewOffset(this.camera.viewOffset,e.viewOffset),this.camera.far=e.far,this.camera.near=e.near,this.camera.fogFar=e.fogFar,this.camera.fogNear=e.fogNear,this.camera.forceFull=e.forceFull,this.camera.scale=1,this.modelScale=e.scale}update(e,t,r){if(this.pointers=e,this.points=t,this.hit=r,this.props.enabled!=="on"){this.renderObject&&(this.renderObject.state.visible=!1);return}this.shape=Ro(this.getData(),this.props,this.shape),i.updateIfChanged(this.renderObject.values.drawCount,li.getDrawCount(this.shape.geometry)),i.updateIfChanged(this.renderObject.values.uVertexCount,li.getVertexCount(this.shape.geometry)),i.updateIfChanged(this.renderObject.values.uGroupCount,2),rr.Utils.updateBoundingSphere(this.renderObject.values,this.shape.geometry),rr.Utils.updateValues(this.renderObject.values,this.props),rr.Utils.updateRenderableState(this.renderObject.state,this.props),this.renderObject.state.visible=!0,this.scene.update(void 0,!1),this.scene.commit()}getData(){return{pointers:this.pointers,points:this.points,hit:this.hit,modelScale:this.modelScale,camera:this.camera,pixels:12}}};var gs=b();function xi(u,e,t,r){let a=b.scale(gs,t.state.position,r),o=b.distance(u,a);return 2*Math.tan(t.state.fov/2)*o/t.viewport.height*e}function bs(u,e){let t=Nr.createState(512,256,e),r=5e-4,a={radiusTop:r,radiusBottom:r,radialSegments:32},{modelScale:o,camera:n,pixels:s}=u;t.currentGroup=0;for(let f of u.pointers){ho(t,f,.2,a);let p=xi(f.origin,s,n,o);gr(t,f.origin,p,1)}for(let f of u.points){let p=xi(f,s,n,o);gr(t,f,p,1)}if(u.hit){t.currentGroup=1;let f=xi(u.hit,s,n,o);gr(t,u.hit,f,1)}return Nr.getMesh(t)}function Ro(u,e,t){let r=bs(u,t?.geometry);return fa("pointer-mesh",u,r,o=>o===1?e.hitColor:e.color,()=>1,()=>"",void 0,2)}function vs(u,e){return pa(u,{...m.getDefaultValues(rr.Params),...e,ignoreLight:e.ignoreLight,cellSize:0})}var ys={camera:m.Group({helper:m.Group(Hr)}),handle:m.Group(Pa),pointer:m.Group(ta)},xs=m.getDefaultValues(ys),ka=class{constructor(e,t,r={}){let a={...xs,...r};this.debug=new wa(e,t),this.camera=new ma(e,a.camera.helper),this.handle=new Ca(e,a.handle),this.pointer=new Da(e,a.pointer)}};var Ti=b(),Si=b(),Fo=b(),Ci={maxFps:m.Numeric(30,{min:10,max:60,step:10}),preferAtomPixelPadding:m.Numeric(3,{min:0,max:20,step:1},{description:"Number of extra pixels at which to prefer atoms over bonds."}),convertCoordsToRay:m.Boolean(!1,{description:"Convert screen coordinates to ray for picking."})},Ra=class{constructor(e,t,r,a,o,n,s={}){this.canvasIdentify=e;this.canvasAsyncIdentify=t;this.lociGetter=r;this.input=a;this.camera=o;this.controls=n;this.ev=qi.create();this.events={hover:this.ev(),drag:this.ev(),click:this.ev()};this.startX=-1;this.startY=-1;this.endX=-1;this.endY=-1;this.ray=void 0;this.pickData=void 0;this.position=void 0;this.isInteracting=!1;this.prevLoci=cr.Loci.Empty;this.prevT=0;this.inside=!1;this.buttons=Ue.create(0);this.button=Ue.create(0);this.modifiers=Ot.None;this.props={...m.getDefaultValues(Ci),...s},a.drag.subscribe(({x:f,y:p,buttons:l,button:c,modifiers:d})=>{this.isInteracting=!0,this.drag(f,p,l,c,d)}),a.move.subscribe(({x:f,y:p,inside:l,buttons:c,button:d,modifiers:g,onElement:x,ray:v})=>{if(!(!l||this.isInteracting)){if(!x){this.leave();return}this.move(f,p,c,d,g,v)}}),a.leave.subscribe(()=>{this.leave()}),a.click.subscribe(({x:f,y:p,buttons:l,button:c,modifiers:d,ray:g})=>{this.outsideViewport(f,p,g)||this.click(f,p,l,c,d,g)}),a.interactionEnd.subscribe(()=>{this.isInteracting=!1}),a.modifiers.subscribe(f=>{this.modify(f)})}setProps(e){Object.assign(this.props,e)}getTarget(){return this.ray?this.ray:this.props.convertCoordsToRay?this.camera.getRay(sr(),this.endX,this.input.height-this.endY):T.create(this.endX,this.endY)}handleMove(){(this.startX!==this.endX||this.startY!==this.endY||this.input.pointerLock&&!this.controls.isMoving)&&(this.pickData=this.canvasAsyncIdentify(this.getTarget()),this.startX=this.endX,this.startY=this.endY)}handleClick(){let e=this.canvasIdentify(this.getTarget()),t=this.getLoci(e?.id,e?.position);this.events.click.next({current:t,buttons:this.buttons,button:this.button,modifiers:this.modifiers,page:T.create(this.endX,this.endY),position:e?.position}),this.prevLoci=t}handleDrag(){(this.startX!==this.endX||this.startY!==this.endY||this.input.pointerLock&&!this.controls.isMoving)&&!this.outsideViewport(this.startX,this.startY,this.ray)&&(this.events.drag.next({current:this.prevLoci,buttons:this.buttons,button:this.button,modifiers:this.modifiers,pageStart:T.create(this.startX,this.startY),pageEnd:T.create(this.endX,this.endY)}),this.startX=this.endX,this.startY=this.endY)}tick(e){if(this.inside){if(this.pickData){let t=this.pickData.tryGet();if(t!=="pending"){if(this.position=t?.position,this.inside){let r=this.getLoci(t?.id,t?.position);this.events.hover.next({current:r,buttons:this.buttons,button:this.button,modifiers:this.modifiers,page:T.create(this.endX,this.endY),position:t?.position}),this.prevLoci=r}this.pickData=void 0}}e-this.prevT>1e3/this.props.maxFps&&(this.prevT=e,this.isInteracting?this.handleDrag():this.handleMove())}}leave(){this.inside=!1,cr.Loci.isEmpty(this.prevLoci)||(this.prevLoci=cr.Loci.Empty,this.events.hover.next({current:this.prevLoci,buttons:this.buttons,button:this.button,modifiers:this.modifiers}))}move(e,t,r,a,o,n){this.inside=!0,this.buttons=r,this.button=a,this.modifiers=o,this.ray=n,this.endX=e,this.endY=t}click(e,t,r,a,o,n){this.endX=e,this.endY=t,this.buttons=r,this.button=a,this.modifiers=o,this.ray=n,this.handleClick()}drag(e,t,r,a,o){this.endX=e,this.endY=t,this.buttons=r,this.button=a,this.modifiers=o,this.handleDrag()}modify(e){Ot.areEqual(e,this.modifiers)||(this.modifiers=e,this.events.hover.next({current:this.prevLoci,buttons:this.buttons,button:this.button,modifiers:this.modifiers,page:T.create(this.endX,this.endY),position:this.position}))}outsideViewport(e,t,r){if(r)return!1;let{input:a,camera:{viewport:o}}=this;return e*=a.pixelRatio,t*=a.pixelRatio,e>o.x+o.width||a.height-t>o.y+o.height||e<o.x||a.height-t<o.y}getLoci(e,t){let{repr:r,loci:a}=this.lociGetter(e);if(t&&r&&oi.isLoci(a)&&a.bonds.length===2){let{aUnit:o,aIndex:n}=a.bonds[0];o.conformation.position(o.elements[n],Ti),b.sub(Fo,this.camera.state.position,this.camera.state.target),b.projectPointOnPlane(Si,t,Fo,Ti);let s=this.camera.getPixelSize(Si),f=r.theme.size.size(a.bonds[0])*(r.props.sizeFactor??1);if(r.props.lineSizeAttenuation===!1&&(f*=s/2),f+=this.props.preferAtomPixelPadding*s,b.distance(Si,Ti)<f)return{repr:r,loci:oi.toFirstStructureElementLoci(a)}}return{repr:r,loci:a}}resetTime(e){this.prevT=e}dispose(){this.ev.dispose()}};var Fa;(t=>{t.Null=16777214;function e(r,a){return r.objectId===a.objectId&&r.instanceId===a.instanceId&&r.groupId===a.groupId}t.areSame=e})(Fa||={});var Lo={pickPadding:1,maxAsyncReadLag:5},qr=class{constructor(e,t,r,a){this.webgl=e;this.width=t;this.height=r;this.pickScale=a;let o=a/e.pixelRatio;this.pickWidth=Math.ceil(t*o),this.pickHeight=Math.ceil(r*o);let{resources:n,extensions:{drawBuffers:s},gl:f}=e;s?(this.objectPickTexture=n.texture("image-uint8","rgba","ubyte","nearest"),this.objectPickTexture.define(this.pickWidth,this.pickHeight),this.instancePickTexture=n.texture("image-uint8","rgba","ubyte","nearest"),this.instancePickTexture.define(this.pickWidth,this.pickHeight),this.groupPickTexture=n.texture("image-uint8","rgba","ubyte","nearest"),this.groupPickTexture.define(this.pickWidth,this.pickHeight),this.depthPickTexture=n.texture("image-uint8","rgba","ubyte","nearest"),this.depthPickTexture.define(this.pickWidth,this.pickHeight),this.framebuffer=n.framebuffer(),this.objectPickFramebuffer=n.framebuffer(),this.instancePickFramebuffer=n.framebuffer(),this.groupPickFramebuffer=n.framebuffer(),this.depthPickFramebuffer=n.framebuffer(),this.framebuffer.bind(),s.drawBuffers([s.COLOR_ATTACHMENT0,s.COLOR_ATTACHMENT1,s.COLOR_ATTACHMENT2,s.COLOR_ATTACHMENT3]),this.objectPickTexture.attachFramebuffer(this.framebuffer,"color0"),this.instancePickTexture.attachFramebuffer(this.framebuffer,"color1"),this.groupPickTexture.attachFramebuffer(this.framebuffer,"color2"),this.depthPickTexture.attachFramebuffer(this.framebuffer,"color3"),this.depthRenderbuffer=n.renderbuffer(Ut(f)?"depth32f-stencil8":"depth-stencil","depth-stencil",this.pickWidth,this.pickHeight),this.depthRenderbuffer.attachFramebuffer(this.framebuffer),this.objectPickTexture.attachFramebuffer(this.objectPickFramebuffer,"color0"),this.instancePickTexture.attachFramebuffer(this.instancePickFramebuffer,"color0"),this.groupPickTexture.attachFramebuffer(this.groupPickFramebuffer,"color0"),this.depthPickTexture.attachFramebuffer(this.depthPickFramebuffer,"color0")):(this.objectPickTarget=e.createRenderTarget(this.pickWidth,this.pickHeight,"depth-stencil"),this.instancePickTarget=e.createRenderTarget(this.pickWidth,this.pickHeight,"depth-stencil"),this.groupPickTarget=e.createRenderTarget(this.pickWidth,this.pickHeight,"depth-stencil"),this.depthPickTarget=e.createRenderTarget(this.pickWidth,this.pickHeight,"depth-stencil"))}getByteCount(){return this.webgl.extensions.drawBuffers?this.objectPickTexture.getByteCount()+this.instancePickTexture.getByteCount()+this.groupPickTexture.getByteCount()+this.depthPickTexture.getByteCount()+this.depthRenderbuffer.getByteCount():this.objectPickTarget.getByteCount()+this.instancePickTarget.getByteCount()+this.groupPickTarget.getByteCount()+this.depthPickTarget.getByteCount()}dispose(){this.webgl.extensions.drawBuffers?(this.framebuffer.destroy(),this.objectPickTexture.destroy(),this.instancePickTexture.destroy(),this.groupPickTexture.destroy(),this.depthPickTexture.destroy(),this.objectPickFramebuffer.destroy(),this.instancePickFramebuffer.destroy(),this.groupPickFramebuffer.destroy(),this.depthPickFramebuffer.destroy(),this.depthRenderbuffer.destroy()):(this.objectPickTarget.destroy(),this.instancePickTarget.destroy(),this.groupPickTarget.destroy(),this.depthPickTarget.destroy())}get pickRatio(){return this.pickScale/this.webgl.pixelRatio}setPickScale(e){this.pickScale=e,this.setSize(this.width,this.height)}bindObject(){this.webgl.extensions.drawBuffers?this.objectPickFramebuffer.bind():this.objectPickTarget.bind()}bindInstance(){this.webgl.extensions.drawBuffers?this.instancePickFramebuffer.bind():this.instancePickTarget.bind()}bindGroup(){this.webgl.extensions.drawBuffers?this.groupPickFramebuffer.bind():this.groupPickTarget.bind()}bindDepth(){this.webgl.extensions.drawBuffers?this.depthPickFramebuffer.bind():this.depthPickTarget.bind()}get drawingBufferHeight(){return this.height}setSize(e,t){this.width=e,this.height=t;let r=this.pickScale/this.webgl.pixelRatio,a=Math.ceil(this.width*r),o=Math.ceil(this.height*r);(a!==this.pickWidth||o!==this.pickHeight)&&(this.pickWidth=a,this.pickHeight=o,this.webgl.extensions.drawBuffers?(this.objectPickTexture.define(this.pickWidth,this.pickHeight),this.instancePickTexture.define(this.pickWidth,this.pickHeight),this.groupPickTexture.define(this.pickWidth,this.pickHeight),this.depthPickTexture.define(this.pickWidth,this.pickHeight),this.depthRenderbuffer.setSize(this.pickWidth,this.pickHeight)):(this.objectPickTarget.setSize(this.pickWidth,this.pickHeight),this.instancePickTarget.setSize(this.pickWidth,this.pickHeight),this.groupPickTarget.setSize(this.pickWidth,this.pickHeight),this.depthPickTarget.setSize(this.pickWidth,this.pickHeight)))}reset(){let{drawBuffers:e}=this.webgl.extensions;e&&(this.framebuffer.bind(),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1,e.COLOR_ATTACHMENT2,e.COLOR_ATTACHMENT3]),this.objectPickTexture.attachFramebuffer(this.framebuffer,"color0"),this.instancePickTexture.attachFramebuffer(this.framebuffer,"color1"),this.groupPickTexture.attachFramebuffer(this.framebuffer,"color2"),this.depthPickTexture.attachFramebuffer(this.framebuffer,"color3"),this.depthRenderbuffer.attachFramebuffer(this.framebuffer),this.objectPickTexture.attachFramebuffer(this.objectPickFramebuffer,"color0"),this.instancePickTexture.attachFramebuffer(this.instancePickFramebuffer,"color0"),this.groupPickTexture.attachFramebuffer(this.groupPickFramebuffer,"color0"),this.depthPickTexture.attachFramebuffer(this.depthPickFramebuffer,"color0"))}renderVariant(e,t,r,a,o,n,s){e.clear(!1),e.update(t,r,s),e.renderPick(r.primitives,t,o,n),a.handle.isEnabled&&e.renderPick(a.handle.scene,t,o,n),a.camera.isEnabled&&(a.camera.update(t),e.update(a.camera.camera,a.camera.scene,s),e.renderPick(a.camera.scene,a.camera.camera,o,n))}render(e,t,r,a,o){this.webgl.extensions.drawBuffers?(this.framebuffer.bind(),this.renderVariant(e,t,r,a,"pick",0,o)):(this.objectPickTarget.bind(),this.renderVariant(e,t,r,a,"pick",1,o),this.instancePickTarget.bind(),this.renderVariant(e,t,r,a,"pick",2,o),this.groupPickTarget.bind(),this.renderVariant(e,t,r,a,"pick",3,o),this.depthPickTarget.bind(),this.renderVariant(e,t,r,a,"depth",0,o))}},Eo=!1;function Ea(u){return u.isWebGL2?!0:(Pe&&!Eo&&(console.log("WebGL2 required for async picking. Falling back to synchronous picking."),Eo=!0),!1)}var Wr=class{constructor(e,t,r=5){this.webgl=e;this.pickPass=t;this.maxAsyncReadLag=r;this.viewport=Ce.create(0,0,0,0);this.fenceSync=null;this.fenceTimestamp=0;this.ready=!1;this.lag=0;e.isWebGL2&&(this.objectBuffer=e.resources.pixelPack("rgba","ubyte"),this.instanceBuffer=e.resources.pixelPack("rgba","ubyte"),this.groupBuffer=e.resources.pixelPack("rgba","ubyte"),this.depthBuffer=e.resources.pixelPack("rgba","ubyte")),this.setup()}setup(){let e=this.viewport.width*this.viewport.height*4;(!this.object||this.object.length!==e)&&(this.object=new Uint8Array(e),this.instance=new Uint8Array(e),this.group=new Uint8Array(e),this.depth=new Uint8Array(e))}setViewport(e,t,r,a){Ce.set(this.viewport,e,t,r,a),this.setup()}read(){k&&this.webgl.timer.mark("PickBuffers.read");let{x:e,y:t,width:r,height:a}=this.viewport;this.pickPass.bindObject(),this.webgl.readPixels(e,t,r,a,this.object),this.pickPass.bindInstance(),this.webgl.readPixels(e,t,r,a,this.instance),this.pickPass.bindGroup(),this.webgl.readPixels(e,t,r,a,this.group),this.pickPass.bindDepth(),this.webgl.readPixels(e,t,r,a,this.depth),this.ready=!0,k&&this.webgl.timer.markEnd("PickBuffers.read")}asyncRead(){let{gl:e}=this.webgl;if(!Ut(e))return;k&&this.webgl.timer.mark("PickBuffers.asyncRead"),this.fenceSync!==null&&e.deleteSync(this.fenceSync);let{x:t,y:r,width:a,height:o}=this.viewport;this.pickPass.bindObject(),this.objectBuffer.read(t,r,a,o),this.pickPass.bindInstance(),this.instanceBuffer.read(t,r,a,o),this.pickPass.bindGroup(),this.groupBuffer.read(t,r,a,o),this.pickPass.bindDepth(),this.depthBuffer.read(t,r,a,o),this.fenceTimestamp=qt(),this.fenceSync=e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0),e.flush(),this.ready=!1,k&&this.webgl.timer.markEnd("PickBuffers.asyncRead")}check(){if(this.ready)return 1;if(this.fenceSync===null)return 2;let{gl:e}=this.webgl;if(!Ut(e))return 2;let t=e.clientWaitSync(this.fenceSync,0,0);return t===e.WAIT_FAILED||this.lag>=this.maxAsyncReadLag?t!==e.WAIT_FAILED&&qt()-this.fenceTimestamp<1e3/60?(this.lag+=1,0):(e.deleteSync(this.fenceSync),this.fenceSync=null,this.lag=0,this.ready=!1,2):t===e.TIMEOUT_EXPIRED?(this.lag+=1,0):(this.objectBuffer.getSubData(this.object),this.instanceBuffer.getSubData(this.instance),this.groupBuffer.getSubData(this.group),this.depthBuffer.getSubData(this.depth),e.deleteSync(this.fenceSync),this.fenceSync=null,this.lag=0,this.ready=!0,1)}getIdx(e,t){return(t*this.viewport.width+e)*4}getDepth(e,t){if(!this.ready)return-1;let r=this.getIdx(e,t),a=this.depth;return lo(a[r],a[r+1],a[r+2],a[r+3])}getId(e,t,r){if(!this.ready)return-1;let a=this.getIdx(e,t);return so(r[a],r[a+1],r[a+2])}getObjectId(e,t){return this.getId(e,t,this.object)}getInstanceId(e,t){return this.getId(e,t,this.instance)}getGroupId(e,t){return this.getId(e,t,this.group)}getPickingId(e,t){let r=this.getObjectId(e,t);if(r===-1||r===Fa.Null)return;let a=this.getInstanceId(e,t);if(a===-1||a===Fa.Null)return;let o=this.getGroupId(e,t);if(o!==-1)return{objectId:r,instanceId:a,groupId:o}}reset(){this.fenceSync=null,this.ready=!1,this.lag=0,this.fenceTimestamp=0}dispose(){let{gl:e}=this.webgl;Ut(e)&&(this.objectBuffer.destroy(),this.instanceBuffer.destroy(),this.groupBuffer.destroy(),this.depthBuffer.destroy(),this.fenceSync!==null&&(e.deleteSync(this.fenceSync),this.fenceSync=null))}};var La=class{constructor(e,t,r,a,o,n,s){this.webgl=e;this.renderer=t;this.scene=r;this.helper=a;this.pickPass=o;this.dirty=!0;this.buffers=new Wr(this.webgl,this.pickPass);this.viewport=Ce();this.setViewport(n.x,n.y,n.width,n.height),this.pickPadding=s.pickPadding,Ea(e)||(this.asyncIdentify=(f,p,l,c)=>({tryGet:()=>this.identify(f,p,l,c)}))}setViewport(e,t,r,a){Ce.set(this.viewport,e,t,r,a),this.update()}setPickPadding(e){this.pickPadding!==e&&(this.pickPadding=e,this.update())}update(){let{x:e,y:t,width:r,height:a}=this.viewport;this.pickRatio=this.pickPass.pickRatio,this.pickX=Math.ceil(e*this.pickRatio),this.pickY=Math.ceil(t*this.pickRatio);let o=Math.floor(r*this.pickRatio),n=Math.floor(a*this.pickRatio);(o!==this.pickWidth||n!==this.pickHeight)&&(this.pickWidth=o,this.pickHeight=n,this.halfPickWidth=Math.floor(this.pickWidth/2),this.buffers.setViewport(this.pickX,this.pickY,this.pickWidth,this.pickHeight)),this.spiral=sa(Math.ceil(this.pickRatio*this.pickPadding)),this.dirty=!0}render(e,t){k&&this.webgl.timer.mark("PickHelper.render",{captureStats:!0});let{pickX:r,pickY:a,pickWidth:o,pickHeight:n,halfPickWidth:s}=this,{renderer:f,scene:p,helper:l}=this,c=t??Wt();f.setTransparentBackground(!1),f.setDrawingBufferSize(o,n),f.setPixelRatio(this.pickRatio),mt.is(e)?(f.setViewport(r,a,s,n),this.pickPass.render(f,e.left,p,l,c),f.setViewport(r+s,a,o-s,n),this.pickPass.render(f,e.right,p,l,c)):(f.setViewport(r,a,o,n),this.pickPass.render(f,e,p,l,c)),this.dirty=!1,k&&this.webgl.timer.markEnd("PickHelper.render")}identifyInternal(e,t,r){if(this.webgl.isContextLost)return;let{webgl:a,pickRatio:o}=this;if(a.isContextLost)return;e*=a.pixelRatio,t*=a.pixelRatio,t=this.pickPass.drawingBufferHeight-t;let{viewport:n}=this;if(e<n.x||t<n.y||e>n.x+n.width||t>n.y+n.height)return;let s=e-n.x,f=t-n.y,p=Math.floor(s*o),l=Math.floor(f*o),c=this.buffers.getPickingId(p,l);if(c===void 0)return;let d=this.buffers.getDepth(p,l),g=b.create(e,t,d);if(mt.is(r)){let x=Math.floor(n.width/2);e>n.x+x?(g[0]=n.x+(s-x)*2,wr(g,g,n,r.right.inverseProjectionView)):(g[0]=n.x+s*2,wr(g,g,n,r.left.inverseProjectionView))}else wr(g,g,n,r.inverseProjectionView);return{id:c,position:g}}prepare(){this.pickRatio!==this.pickPass.pickRatio&&this.update()}getPickData(e,t,r){for(let a of this.spiral){let o=this.identifyInternal(e+a[0],t+a[1],r);if(o)return o}}identify(e,t,r,a){return this.prepare(),this.dirty&&(k&&this.webgl.timer.mark("PickHelper.identify"),this.webgl.resources.finalizePrograms(["pick"],!0),this.render(r,a),this.buffers.read(),k&&this.webgl.timer.markEnd("PickHelper.identify")),this.getPickData(e,t,r)}asyncIdentify(e,t,r,a){return this.prepare(),this.dirty&&(k&&this.webgl.timer.mark("PickHelper.asyncIdentify"),this.render(r,a),this.buffers.asyncRead(),k&&this.webgl.timer.markEnd("PickHelper.asyncIdentify")),{tryGet:()=>{let o=this.buffers.check();if(o===1)return this.getPickData(e,t,r);if(o===0)return"pending";o===2&&(this.dirty=!0)}}}reset(){this.buffers.reset(),this.dirty=!0}dispose(){this.buffers.dispose()}};var Oa=class{constructor(e,t,r,a,o){this.webgl=e;this.renderer=t;this.scene=r;this.helper=a;this.viewport=Ce();this.sphere=et();let n=o.pickPadding*2+1;this.camera=new We,this.pickPass=new qr(e,n,n,1),this.buffers=new Wr(this.webgl,this.pickPass,o.maxAsyncReadLag),this.pickPadding=o.pickPadding,this.update(),Ea(e)||(this.asyncIdentify=(s,f)=>({tryGet:()=>this.identify(s,f)}))}setPickPadding(e){this.pickPadding!==e&&(this.pickPadding=e,this.update())}update(){let e=this.pickPadding*2+1;Ce.set(this.viewport,0,0,e,e),this.buffers.setViewport(0,0,e,e),this.spiral=sa(this.pickPadding),this.size=e,this.pickPass.setSize(e,e)}render(e){k&&this.webgl.timer.mark("RayHelper.render",{captureStats:!0});let{renderer:t,scene:r,helper:a}=this;t.setTransparentBackground(!1),t.setDrawingBufferSize(this.size,this.size),t.setPixelRatio(1),t.setViewport(0,0,this.size,this.size),this.pickPass.render(t,e,r,a,Wt()),k&&this.webgl.timer.markEnd("RayHelper.render")}identifyInternal(e,t){if(this.webgl.isContextLost)return;let{viewport:r}=this,a=this.buffers.getPickingId(e,t);if(a===void 0)return;let o=this.buffers.getDepth(e,t),n=b.create(e,t,o);return wr(n,n,r,this.camera.inverseProjectionView),{id:a,position:n}}prepare(e,t){this.camera.far=t.far,this.camera.near=t.near,this.camera.fogFar=t.fogFar,this.camera.fogNear=t.fogNear,this.camera.forceFull=t.forceFull,this.camera.scale=t.scale,Ce.copy(this.camera.viewport,this.viewport),We.copySnapshot(this.camera.state,{...t.state,mode:"orthographic"}),Ss(this.camera,e,t.up),B.mul(this.camera.projectionView,this.camera.projection,this.camera.view),B.tryInvert(this.camera.inverseProjectionView,this.camera.projectionView),B.copy(this.camera.viewEye,t.view)}getPickData(){let e=this.pickPadding;for(let t of this.spiral){let r=this.identifyInternal(e+t[0],e+t[1]);if(r)return r}}intersectsScene(e,t){return et.scaleNX(this.sphere,this.scene.boundingSphereVisible,t),sr.isInsideSphere3D(e,this.sphere)||sr.isIntersectingSphere3D(e,this.sphere)}identify(e,t){if(this.intersectsScene(e,t.scale))return this.prepare(e,t),k&&this.webgl.timer.mark("RayHelper.identify"),this.render(this.camera),this.buffers.read(),k&&this.webgl.timer.markEnd("RayHelper.identify"),this.getPickData()}asyncIdentify(e,t){if(this.intersectsScene(e,t.scale))return this.prepare(e,t),k&&this.webgl.timer.mark("RayHelper.asyncIdentify"),this.render(this.camera),this.buffers.asyncRead(),k&&this.webgl.timer.markEnd("RayHelper.asyncIdentify"),{tryGet:()=>{let r=this.buffers.check();if(r===1)return this.getPickData();if(r===0)return"pending"}}}reset(){this.buffers.reset(),this.pickPass.reset()}dispose(){this.buffers.dispose(),this.pickPass.dispose()}};function Ss(u,e,t){let{near:r,far:a,viewport:o}=u,n=2*Math.tan(Pt(.1)/2)*b.distance(u.position,u.target)*u.scale,s=o.height/n,f=-o.width/2,p=o.width/2,l=o.height/2,c=-o.height/2,d=(p-f)/(2*s),g=(l-c)/(2*s),x=(p+f)/2,v=(l+c)/2,S=x-d,P=x+d,D=v+g,O=v-g;B.ortho(u.projection,S,P,D,O,r,a);let z=b.normalize(b(),e.direction),G=qe.fromUnitVec3(qe(),z,b.negUnitZ);qe.invert(G,G);let I=b.clone(e.origin),M=b.add(b(),I,z);B.lookAt(u.view,I,M,t)}var Oo=`
precision highp float;
precision highp int;
precision highp sampler2D;

uniform vec2 uTexSizeInv;

uniform sampler2D tBlur1;
uniform sampler2D tBlur2;
uniform sampler2D tBlur3;
uniform sampler2D tBlur4;
uniform sampler2D tBlur5;
uniform float uBloomStrength;
uniform float uBloomRadius;
uniform float uBloomFactors[5];
uniform vec3 uBloomTints[5];

float lerpBloomFactor(const in float factor) {
    float mirrorFactor = 1.2 - factor;
    return mix(factor, mirrorFactor, uBloomRadius);
}

void main(void) {
    vec2 coords = gl_FragCoord.xy * uTexSizeInv;

    gl_FragColor = uBloomStrength * (
        lerpBloomFactor(uBloomFactors[0]) * vec4(uBloomTints[0], 1.0) * texture2D(tBlur1, coords) +
        lerpBloomFactor(uBloomFactors[1]) * vec4(uBloomTints[1], 1.0) * texture2D(tBlur2, coords) +
        lerpBloomFactor(uBloomFactors[2]) * vec4(uBloomTints[2], 1.0) * texture2D(tBlur3, coords) +
        lerpBloomFactor(uBloomFactors[3]) * vec4(uBloomTints[3], 1.0) * texture2D(tBlur4, coords) +
        lerpBloomFactor(uBloomFactors[4]) * vec4(uBloomTints[4], 1.0) * texture2D(tBlur5, coords)
    );
}
`;var Bo=`
precision highp float;
precision highp int;
precision highp sampler2D;

uniform sampler2D tColorOpaque;
uniform sampler2D tColorTransparent;
uniform sampler2D tEmissive;
uniform sampler2D tDepthOpaque;
uniform sampler2D tDepthTransparent;
uniform vec2 uTexSizeInv;

uniform vec3 uDefaultColor;
uniform float uDefaultOpacity;
uniform float uLuminosityThreshold;
uniform float uSmoothWidth;

uniform float uNear;
uniform float uFar;
uniform float uIsOrtho;
uniform float uFogNear;
uniform float uFogFar;
uniform bool uOpaqueFogged;

#include common

float getDepthOpaque(const in vec2 coords) {
    #ifdef depthTextureSupport
        return texture2D(tDepthOpaque, coords).r;
    #else
        return unpackRGBAToDepth(texture2D(tDepthOpaque, coords));
    #endif
}

float getDepthTransparent(const in vec2 coords) {
    return unpackRGBAToDepthWithAlpha(texture2D(tDepthTransparent, coords)).x;
}

float getDepth(const in vec2 coords) {
    return min(getDepthOpaque(coords), getDepthTransparent(coords));
}

bool isBackground(const in float depth) {
    // (2^24 - 1) / 2^24, max of 24-bit packed depth; also passes raw fp32.
    return depth >= 0.99999994;
}

void main(void) {
    vec2 coords = gl_FragCoord.xy * uTexSizeInv;
    vec4 opaqueTexel = texture2D(tColorOpaque, coords);
    vec4 transparentTexel = texture2D(tColorTransparent, coords);
    // fog illumination's un-fogged opaque seed by the opaque depth, matching standard's per-layer fog
    if (!uOpaqueFogged) {
        opaqueTexel.rgb *= 1.0 - smoothstep(uFogNear, uFogFar, abs(depthToViewZ(uIsOrtho, getDepthOpaque(coords), uNear, uFar)));
    }
    // PMA OVER composite, matches postprocessing's final transparency blend.
    vec4 texel = transparentTexel + opaqueTexel * (1.0 - transparentTexel.a);
    float emissive = texture2D(tEmissive, coords).a;
    float depth = getDepth(coords);

    if (isBackground(depth)) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        return;
    }

    vec4 outputColor = vec4(uDefaultColor.rgb, uDefaultOpacity);

    #if defined(dMode_luminosity)
        vec3 luma = vec3(0.299, 0.587, 0.114);
        float v = dot(texel.xyz, luma);
        float alpha = smoothstep(uLuminosityThreshold, uLuminosityThreshold + uSmoothWidth, v);

        gl_FragColor = mix(outputColor, texel, alpha);
    #elif defined(dMode_emissive)
        // the prepass already holds the fogged emissive color, free of lighting/exposure
        gl_FragColor = texture2D(tEmissive, coords);
    #endif
}
`;var Mo=`
precision highp float;
precision highp int;
precision highp sampler2D;

uniform sampler2D tInput;
uniform vec2 uTexSizeInv;

uniform vec2 uDirection;
uniform float uGaussianCoefficients[dKernelRadius];

void main(void) {
    vec2 coords = gl_FragCoord.xy * uTexSizeInv;
    float weightSum = uGaussianCoefficients[0];
    vec4 diffuseSum = texture2D(tInput, coords) * weightSum;

    for(int i = 1; i < dKernelRadius; ++i) {
        float x = float(i);
        float w = uGaussianCoefficients[i];
        vec2 offset = uDirection * uTexSizeInv * x;
        vec4 sample1 = texture2D(tInput, coords + offset);
        vec4 sample2 = texture2D(tInput, coords - offset);
        diffuseSum += (sample1 + sample2) * w;
        weightSum += 2.0 * w;
    }

    gl_FragColor = diffuseSum / weightSum;
}
`;var Pi=5,Io={strength:m.Numeric(1,{min:0,max:3,step:.1}),radius:m.Numeric(0,{min:0,max:1,step:.01}),threshold:m.Numeric(0,{min:0,max:1,step:.01},{description:"Luminosity threshold",hideIf:u=>u.mode==="emissive"}),mode:m.Select("emissive",[["luminosity","Luminosity"],["emissive","Emissive"]]),transparency:m.Boolean(!0,{description:"Include transparent objects in emissive bloom",hideIf:u=>u.mode!=="emissive"})},Dt=class{constructor(e,t,r){this.webgl=e;this.horizontalBlurTargets=[];this.verticalBlurTargets=[];this.emissiveTarget=e.createRenderTarget(t,r,"depth-stencil","uint8","linear"),this.luminosityTarget=e.createRenderTarget(t,r,"none","uint8","linear"),this.compositeTarget=e.createRenderTarget(t,r,"none","uint8","linear");let a=Math.round(t/2),o=Math.round(r/2);for(let s=0;s<Pi;++s)this.horizontalBlurTargets[s]=e.createRenderTarget(a,o,"none","uint8","linear"),this.verticalBlurTargets[s]=e.createRenderTarget(a,o,"none","uint8","linear"),a=Math.round(a/2),o=Math.round(o/2);let n=hr();this.luminosityRenderable=ws(e,n,n,n,n,n),this.blurRenderable=Os(e,n),this.compositeRenderable=Is(e,t,r,this.verticalBlurTargets[0].texture,this.verticalBlurTargets[1].texture,this.verticalBlurTargets[2].texture,this.verticalBlurTargets[3].texture,this.verticalBlurTargets[4].texture)}static isEnabled(e){return e.enabled&&e.bloom.name==="on"}getByteCount(){return this.emissiveTarget.getByteCount()+this.luminosityTarget.getByteCount()+this.compositeTarget.getByteCount()+this.horizontalBlurTargets.reduce((e,t)=>e+t.getByteCount(),0)+this.verticalBlurTargets.reduce((e,t)=>e+t.getByteCount(),0)}setSize(e,t){let r=this.luminosityTarget.getWidth(),a=this.luminosityTarget.getHeight();if(e!==r||t!==a){this.emissiveTarget.setSize(e,t),this.luminosityTarget.setSize(e,t),this.compositeTarget.setSize(e,t);let o=Math.round(e/2),n=Math.round(t/2);for(let s=0;s<Pi;++s)this.horizontalBlurTargets[s].setSize(o,n),this.verticalBlurTargets[s].setSize(o,n),o=Math.round(o/2),n=Math.round(n/2);i.update(this.luminosityRenderable.values.uTexSizeInv,T.set(this.luminosityRenderable.values.uTexSizeInv.ref.value,1/e,1/t)),i.update(this.compositeRenderable.values.uTexSizeInv,T.set(this.compositeRenderable.values.uTexSizeInv.ref.value,1/e,1/t))}}update(e,t,r,a,o,n,s,f){let p=!1;this.luminosityRenderable.values.tColorOpaque.ref.value!==e&&(i.update(this.luminosityRenderable.values.tColorOpaque,e),p=!0),this.luminosityRenderable.values.tColorTransparent.ref.value!==t&&(i.update(this.luminosityRenderable.values.tColorTransparent,t),p=!0),this.luminosityRenderable.values.tEmissive.ref.value!==r&&(i.update(this.luminosityRenderable.values.tEmissive,r),p=!0),this.luminosityRenderable.values.tDepthOpaque.ref.value!==a&&(i.update(this.luminosityRenderable.values.tDepthOpaque,a),p=!0),this.luminosityRenderable.values.tDepthTransparent.ref.value!==o&&(i.update(this.luminosityRenderable.values.tDepthTransparent,o),p=!0),this.luminosityRenderable.values.dMode.ref.value!==n.mode&&(i.update(this.luminosityRenderable.values.dMode,n.mode),p=!0),i.updateIfChanged(this.luminosityRenderable.values.uLuminosityThreshold,n.threshold),i.updateIfChanged(this.luminosityRenderable.values.uNear,s.near),i.updateIfChanged(this.luminosityRenderable.values.uFar,s.far),i.updateIfChanged(this.luminosityRenderable.values.uIsOrtho,s.state.mode==="orthographic"?1:0),i.updateIfChanged(this.luminosityRenderable.values.uFogNear,s.fogNear),i.updateIfChanged(this.luminosityRenderable.values.uFogFar,s.fogFar),i.updateIfChanged(this.luminosityRenderable.values.uOpaqueFogged,f),p&&this.luminosityRenderable.update(),i.updateIfChanged(this.compositeRenderable.values.uBloomRadius,n.radius),i.updateIfChanged(this.compositeRenderable.values.uBloomStrength,n.strength)}render(e){k&&this.webgl.timer.mark("BloomPass.render");let{gl:t,state:r}=this.webgl,{x:a,y:o,width:n,height:s}=e;r.viewport(a,o,n,s),r.scissor(a,o,n,s),r.enable(t.SCISSOR_TEST),r.disable(t.BLEND),r.disable(t.DEPTH_TEST),r.depthMask(!1),this.luminosityTarget.bind(),this.luminosityRenderable.render();for(let f=0;f<Pi;++f){let p=this.horizontalBlurTargets[f].getWidth(),l=this.horizontalBlurTargets[f].getHeight();r.viewport(0,0,p,l),r.scissor(0,0,p,l),i.update(this.blurRenderable.values.dKernelRadius,wi[f]),i.update(this.blurRenderable.values.uGaussianCoefficients,ks(wi[f])),i.update(this.blurRenderable.values.uTexSizeInv,T.set(this.blurRenderable.values.uTexSizeInv.ref.value,1/p,1/l)),this.horizontalBlurTargets[f].bind(),i.update(this.blurRenderable.values.tInput,f===0?this.luminosityTarget.texture:this.verticalBlurTargets[f-1].texture),i.update(this.blurRenderable.values.uDirection,Rs),this.blurRenderable.update(),this.blurRenderable.render(),this.verticalBlurTargets[f].bind(),i.update(this.blurRenderable.values.tInput,this.horizontalBlurTargets[f].texture),i.update(this.blurRenderable.values.uDirection,Fs),this.blurRenderable.update(),this.blurRenderable.render()}r.viewport(a,o,n,s),r.scissor(a,o,n,s),this.compositeTarget.bind(),this.compositeRenderable.update(),this.compositeRenderable.render(),k&&this.webgl.timer.markEnd("BloomPass.render")}},Cs={...be,tColorOpaque:j("texture","rgba","ubyte","linear"),tColorTransparent:j("texture","rgba","ubyte","linear"),tEmissive:j("texture","rgba","ubyte","linear"),tDepthOpaque:j("texture","rgba","ubyte","nearest"),tDepthTransparent:j("texture","rgba","ubyte","nearest"),uTexSizeInv:C("v2"),uDefaultColor:C("v3"),uDefaultOpacity:C("f"),uLuminosityThreshold:C("f"),uSmoothWidth:C("f"),uNear:C("f"),uFar:C("f"),uIsOrtho:C("f"),uFogNear:C("f"),uFogFar:C("f"),uOpaqueFogged:C("b"),dMode:ee("string",["luminosity","emissive"])},Ps=he("Bloom Luminosity",Te,Bo);function ws(u,e,t,r,a,o){let n=e.getWidth(),s=e.getHeight(),f={...ve,tColorOpaque:i.create(e),tColorTransparent:i.create(t),tEmissive:i.create(r),tDepthOpaque:i.create(a),tDepthTransparent:i.create(o),uTexSizeInv:i.create(T.create(1/n,1/s)),uDefaultColor:i.create(b()),uDefaultOpacity:i.create(0),uLuminosityThreshold:i.create(0),uSmoothWidth:i.create(1),uNear:i.create(1),uFar:i.create(1e4),uIsOrtho:i.create(0),uFogNear:i.create(1e4),uFogFar:i.create(1e4),uOpaqueFogged:i.create(!0),dMode:i.create("emissive")},p={...Cs},l=me(u,"triangles",Ps,p,f);return fe(l,f)}function Ds(u){let e=[];for(let t=0;t<u;++t)e.push(.39894*Math.exp(-.5*t*t/(u*u))/u);return e}var ks=Ui(Ds),wi=[3,5,7,9,11],Rs=T.create(1,0),Fs=T.create(0,1),Es={...be,tInput:j("texture","rgba","ubyte","linear"),uTexSizeInv:C("v2"),uDirection:C("v2"),uGaussianCoefficients:C("f[]"),dKernelRadius:ee("number")},Ls=he("Bloom Blur",Te,Mo);function Os(u,e){let t=e.getWidth(),r=e.getHeight(),a={...ve,tInput:i.create(e),uTexSizeInv:i.create(T.create(1/t,1/r)),uDirection:i.create(T()),uGaussianCoefficients:i.create([]),dKernelRadius:i.create(wi[0])},o={...Es},n=me(u,"triangles",Ls,o,a);return fe(n,a)}var Bs={...be,tBlur1:j("texture","rgba","ubyte","linear"),tBlur2:j("texture","rgba","ubyte","linear"),tBlur3:j("texture","rgba","ubyte","linear"),tBlur4:j("texture","rgba","ubyte","linear"),tBlur5:j("texture","rgba","ubyte","linear"),uTexSizeInv:C("v2"),uBloomStrength:C("f"),uBloomRadius:C("f"),uBloomFactors:C("f[]"),uBloomTints:C("v3[]")},Ms=he("Bloom Composite",Te,Oo);function Is(u,e,t,r,a,o,n,s){let f={...ve,uTexSizeInv:i.create(T.create(1/e,1/t)),tBlur1:i.create(r),tBlur2:i.create(a),tBlur3:i.create(o),tBlur4:i.create(n),tBlur5:i.create(s),uBloomStrength:i.create(1),uBloomRadius:i.create(0),uBloomFactors:i.create([1,.8,.6,.4,.2]),uBloomTints:i.create(new Array(15).fill(1))},p={...Bs},l=me(u,"triangles",Ms,p,f);return fe(l,f)}var Ao=`
precision highp float;
precision highp sampler2D;

uniform sampler2D tShaded;
uniform sampler2D tColor;
uniform sampler2D tNormal;
uniform sampler2D tTransparentColor;
uniform sampler2D tSsaoDepth;
uniform sampler2D tSsaoDepthTransparent;
uniform sampler2D tDepthOpaque;
uniform sampler2D tDepthTransparent;
uniform sampler2D tOutlines;
uniform sampler2D tBloom;
uniform vec2 uTexSize;

uniform float uNear;
uniform float uFar;
uniform float uFogNear;
uniform float uFogFar;
uniform vec3 uFogColor;
uniform vec3 uOutlineColor;
uniform vec3 uOcclusionColor;
uniform bool uTransparentBackground;

uniform float uDenoiseThreshold;

#include common

float getViewZ(const in float depth) {
    #if dOrthographic == 1
        return orthographicDepthToViewZ(depth, uNear, uFar);
    #else
        return perspectiveDepthToViewZ(depth, uNear, uFar);
    #endif
}

float getDepthOpaque(const in vec2 coords) {
    #ifdef depthTextureSupport
        return texture2D(tDepthOpaque, coords).r;
    #else
        return unpackRGBAToDepth(texture2D(tDepthOpaque, coords));
    #endif
}

float getDepthTransparent(const in vec2 coords) {
    #if defined(dTransparentOutline) || defined(dOcclusionEnable) || defined(dBloomEnable)
        return unpackRGBAToDepthWithAlpha(texture2D(tDepthTransparent, coords)).x;
    #else
        return 1.0;
    #endif
}

bool isBackground(const in float depth) {
    // (2^24 - 1) / 2^24, max of 24-bit packed depth; also passes raw fp32.
    return depth >= 0.99999994;
}

float getSsao(vec2 coords) {
    return unpackSsao(texture2D(tSsaoDepth, coords));
}

float getSsaoTransparent(vec2 coords) {
    return unpackSsao(texture2D(tSsaoDepthTransparent, coords));
}

//

// TODO: investigate
// https://interplayoflight.wordpress.com/2022/03/26/raytraced-global-illumination-denoising/

//

#define INV_SQRT_OF_2PI 0.39894228040143267793994605993439  // 1.0/SQRT_OF_2PI
#define INV_PI 0.31830988618379067153776752674503

// https://github.com/BrutPitt/glslSmartDeNoise
//
//  smartDeNoise - parameters
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//  sampler2D tex     - sampler image / texture
//  vec2 uv           - actual fragment coord
//  float sigma  >  0 - sigma Standard Deviation
//  float kSigma >= 0 - sigma coefficient
//      kSigma * sigma  -->  radius of the circular kernel
//  float threshold   - edge sharpening threshold

float NormalWeightStrength = 6.0;

vec4 smartDeNoise(sampler2D tex, vec2 uv) {
    float sigma = 3.0;
    float kSigma = 2.0;
    float threshold = uDenoiseThreshold;

    vec4 centrPx = texture2D(tex, uv);
    if (threshold == 0.0) return centrPx;

    float invSigmaQx2 = 0.5 / (sigma * sigma);      // 1.0 / (sigma^2 * 2.0)
    float invSigmaQx2PI = INV_PI * invSigmaQx2;    // 1.0 / (sqrt(PI) * sigma)

    float invThresholdSqx2 = 0.5 / (threshold * threshold);     // 1.0 / (sigma^2 * 2.0)
    float invThresholdSqrt2PI = INV_SQRT_OF_2PI / threshold;   // 1.0 / (sqrt(2*PI) * sigma)

    float zBuff = 0.0;
    vec4 aBuff = vec4(0.0);

    vec3 normal = texture2D(tNormal, uv).xyz;

    for (int x = -6; x <= 6; ++x) {
        for (int y = -6; y <= 6; ++y) {
            vec2 d = vec2(float(x), float(y));

            float blurFactor = exp(-dot(d , d) * invSigmaQx2) * invSigmaQx2PI;
            vec2 uvSample = uv + d / uTexSize;

            vec3 normalSample = texture2D(tNormal, uvSample).xyz;
            float normalW = saturate(dot(normal, normalSample));
            normalW = pow(normalW, NormalWeightStrength);
            blurFactor *= normalW;

            vec4 walkPx = texture2D(tex, uvSample);

            vec4 dC = walkPx - centrPx;
            float deltaFactor = exp(-dot(dC, dC) * invThresholdSqx2) * invThresholdSqrt2PI * blurFactor;

            zBuff += deltaFactor;
            aBuff += deltaFactor * walkPx;
        }
    }

    if (zBuff <= EPSILON) {
        return centrPx;
    }

    return aBuff / zBuff;
}

int squaredOutlineScale = dOutlineScale * dOutlineScale;
void getOutline(const in vec2 coords, out bool hasOpaque, out bool hasTransparent, out float opaqueDepth, out float transparentDepth, out float alpha) {
    vec2 invTexSize = 1.0 / uTexSize;

    hasOpaque = false;
    hasTransparent = false;
    opaqueDepth = 1.0;
    transparentDepth = 1.0;
    alpha = 0.0;
    for (int y = -dOutlineScale; y <= dOutlineScale; y++) {
        for (int x = -dOutlineScale; x <= dOutlineScale; x++) {
            if (x * x + y * y > squaredOutlineScale) {
                continue;
            }

            vec2 sampleCoords = coords + vec2(float(x), float(y)) * invTexSize;

            vec4 sampleOutlineCombined = texture2D(tOutlines, sampleCoords);
            float sampleOpaqueDepth = unpackRGToUnitInterval(sampleOutlineCombined.gb);
            float sampleTransparentDepth = sampleOutlineCombined.a;
            vec2 sampleFlagWithAlpha = unpack2x4(sampleOutlineCombined.r);

            float sampleFlag = sampleFlagWithAlpha.x;
            float sampleAlpha = clamp(sampleFlagWithAlpha.y * 0.5, 0.01, 1.0);

            if ((sampleFlag > 0.20 && sampleFlag < 0.30) || (sampleFlag > 0.70 && sampleFlag < 0.80)) { // transparent || both
                if (sampleOpaqueDepth < opaqueDepth) {
                    hasOpaque = true;
                    opaqueDepth = sampleOpaqueDepth;
                }
            }

            if ((((sampleFlag > 0.45 && sampleFlag < 0.55) || (sampleFlag > 0.70 && sampleFlag < 0.80))) && sampleTransparentDepth < transparentDepth) { // transparent || both
                hasTransparent = true;
                transparentDepth = sampleTransparentDepth;
                alpha = sampleAlpha;
            }
        }
    }
}

void main() {
    vec2 coords = gl_FragCoord.xy / uTexSize;

    #ifdef dDenoise
        vec4 color = smartDeNoise(tColor, coords);
    #else
        vec4 color = texture2D(tColor, coords);
    #endif

    float opaqueDepth = getDepthOpaque(coords);
    float backgroundViewZ = 2.0 * uFar;
    float opaqueSelfViewZ = isBackground(opaqueDepth) ? backgroundViewZ : getViewZ(opaqueDepth);
    float fogFactor = smoothstep(uFogNear, uFogFar, abs(opaqueSelfViewZ));
    float fogAlpha = 1.0 - fogFactor;

    float transparentDepth = 1.0;
    #ifdef dBlendTransparency
        bool blendTransparency = true;
        vec4 transparentColor = texture2D(tTransparentColor, coords);

        transparentDepth = getDepthTransparent(coords);
    #endif

    float alpha = 1.0;
    if (!uTransparentBackground) {
        // mix opaque objects with background color
        color.rgb = mix(color.rgb, uFogColor, fogFactor);
    } else {
        // pre-multiplied alpha expected for transparent background
        alpha = fogAlpha;
        color.rgb *= fogAlpha;
    }

    #if defined(dOcclusionEnable)
        if (!isBackground(opaqueDepth)) {
            float occlusionFactor = getSsao(coords);

            if (!uTransparentBackground) {
                color.rgb = mix(mix(uOcclusionColor, uFogColor, fogFactor), color.rgb, occlusionFactor);
            } else {
                color.rgb = mix(uOcclusionColor * (1.0 - fogFactor), color.rgb, occlusionFactor);
            }
        }
        #ifdef dBlendTransparency
            if (!isBackground(transparentDepth)) {
                float viewDist = abs(getViewZ(transparentDepth));
                float fogFactor = smoothstep(uFogNear, uFogFar, viewDist);
                float occlusionFactor = getSsaoTransparent(coords);
                transparentColor.rgb = mix(uOcclusionColor * (1.0 - fogFactor), transparentColor.rgb, occlusionFactor);
            }
        #endif
    #endif

    #ifdef dOutlineEnable
        bool hasOpaque;
        bool hasTransparent;
        float outlineOpaqueDepth;
        float outlineTransparentDepth;
        float outlineAlpha;
        getOutline(coords, hasOpaque, hasTransparent, outlineOpaqueDepth, outlineTransparentDepth, outlineAlpha);

        if (hasOpaque) {
            float viewDist = abs(getViewZ(outlineOpaqueDepth));
            float fogFactor = smoothstep(uFogNear, uFogFar, viewDist);
            if (!uTransparentBackground) {
                color.rgb = mix(uOutlineColor, uFogColor, fogFactor);
            } else {
                alpha = 1.0 - fogFactor;
                color.rgb = mix(uOutlineColor, vec3(0.0), fogFactor);
            }
        }

        #ifdef dBlendTransparency
            if (hasTransparent) {
                if (hasOpaque && outlineOpaqueDepth < outlineTransparentDepth) {
                    blendTransparency = false;
                } else {
                    float finalOutlineAlpha = clamp(outlineAlpha * 2.0, 0.0, 1.0);
                    float viewDist = abs(getViewZ(outlineTransparentDepth));
                    float fogFactor = smoothstep(uFogNear, uFogFar, viewDist);
                    float finalAlpha = max(transparentColor.a, finalOutlineAlpha * (1.0 - fogFactor));
                    transparentColor.a = finalAlpha;
                    transparentColor.rgb = uOutlineColor * finalAlpha;
                }
            }
        #endif
    #endif

    #ifdef dBlendTransparency
        if (blendTransparency) {
            if (transparentColor.a != 0.0) {
                // blending
                color = transparentColor + color * (1.0 - transparentColor.a);
                alpha = transparentColor.a + alpha * (1.0 - transparentColor.a);
            }
        }
    #endif

    #ifdef dBloomEnable
        vec4 bloom = texture2D(tBloom, coords);
        // additive glow over geometry and background alike; alpha just covers the premultiplied rgb
        color.rgb += bloom.rgb;
        alpha = min(max(alpha, max(color.r, max(color.g, color.b))), 1.0);
    #endif

    gl_FragColor = vec4(color.rgb, alpha);
}
`;var zo=`
precision highp float;
precision highp int;
precision highp sampler2D;

uniform sampler2D tSsaoDepth;
uniform sampler2D tSsaoDepthTransparent;
uniform sampler2D tColor;
uniform sampler2D tTransparentColor;
uniform sampler2D tDepthOpaque;
uniform sampler2D tDepthTransparent;
uniform sampler2D tShadows;
uniform sampler2D tOutlines;
uniform sampler2D tBloom;
uniform vec2 uTexSize;

uniform float uNear;
uniform float uFar;
uniform float uFogNear;
uniform float uFogFar;
uniform vec3 uFogColor;
uniform vec3 uOutlineColor;
uniform vec3 uOcclusionColor;
uniform bool uTransparentBackground;
uniform vec2 uOcclusionOffset;

#include common

float getViewZ(const in float depth) {
    #if dOrthographic == 1
        return orthographicDepthToViewZ(depth, uNear, uFar);
    #else
        return perspectiveDepthToViewZ(depth, uNear, uFar);
    #endif
}

float getDepthOpaque(const in vec2 coords) {
    #ifdef depthTextureSupport
        return texture2D(tDepthOpaque, coords).r;
    #else
        return unpackRGBAToDepth(texture2D(tDepthOpaque, coords));
    #endif
}

float getDepthTransparent(const in vec2 coords) {
    return unpackRGBAToDepthWithAlpha(texture2D(tDepthTransparent, coords)).x;
}

bool isBackground(const in float depth) {
    // (2^24 - 1) / 2^24, max of 24-bit packed depth; also passes raw fp32.
    return depth >= 0.99999994;
}

int squaredOutlineScale = dOutlineScale * dOutlineScale;
void getOutline(const in vec2 coords, out bool hasOpaque, out bool hasTransparent, out float opaqueDepth, out float transparentDepth, out float alpha) {
    vec2 invTexSize = 1.0 / uTexSize;

    hasOpaque = false;
    hasTransparent = false;
    opaqueDepth = 1.0;
    transparentDepth = 1.0;
    alpha = 0.0;
    for (int y = -dOutlineScale; y <= dOutlineScale; y++) {
        for (int x = -dOutlineScale; x <= dOutlineScale; x++) {
            if (x * x + y * y > squaredOutlineScale) {
                continue;
            }

            vec2 sampleCoords = coords + vec2(float(x), float(y)) * invTexSize;

            vec4 sampleOutlineCombined = texture2D(tOutlines, sampleCoords);
            float sampleOpaqueDepth = unpackRGToUnitInterval(sampleOutlineCombined.gb);
            float sampleTransparentDepth = sampleOutlineCombined.a;
            vec2 sampleFlagWithAlpha = unpack2x4(sampleOutlineCombined.r);

            float sampleFlag = sampleFlagWithAlpha.x;
            float sampleAlpha = clamp(sampleFlagWithAlpha.y * 0.5, 0.01, 1.0);

            if ((sampleFlag > 0.20 && sampleFlag < 0.30) || (sampleFlag > 0.70 && sampleFlag < 0.80)) { // transparent || both
                if (sampleOpaqueDepth < opaqueDepth) {
                    hasOpaque = true;
                    opaqueDepth = sampleOpaqueDepth;
                }
            }

            if ((((sampleFlag > 0.45 && sampleFlag < 0.55) || (sampleFlag > 0.70 && sampleFlag < 0.80))) && sampleTransparentDepth < transparentDepth) { // transparent || both
                hasTransparent = true;
                transparentDepth = sampleTransparentDepth;
                alpha = sampleAlpha;
            }
        }
    }
}

float getSsao(vec2 coords) {
    return unpackSsao(texture2D(tSsaoDepth, coords));
}

float getSsaoTransparent(vec2 coords) {
    return unpackSsao(texture2D(tSsaoDepthTransparent, coords));
}

void main(void) {
    vec2 coords = gl_FragCoord.xy / uTexSize;
    vec4 color = texture2D(tColor, coords);

    float opaqueDepth = getDepthOpaque(coords);
    float transparentDepth = 1.0;
    #ifdef dBlendTransparency
        bool blendTransparency = true;
        vec4 transparentColor = texture2D(tTransparentColor, coords);

        #if defined(dOutlineEnable) || defined(dOcclusionEnable) && defined(dOcclusionIncludeTransparency)
            transparentDepth = getDepthTransparent(coords);
        #endif
    #endif

    #if defined(dOcclusionEnable) || defined(dShadowEnable)
        bool isOpaqueBackground = isBackground(opaqueDepth);
        float viewDist = abs(getViewZ(opaqueDepth));
        float fogFactor = smoothstep(uFogNear, uFogFar, viewDist);
    #endif

    #if defined(dOcclusionEnable)
        if (!isOpaqueBackground) {
            float occlusionFactor = getSsao(coords + uOcclusionOffset);

            if (!uTransparentBackground) {
                color.rgb = mix(mix(uOcclusionColor, uFogColor, fogFactor), color.rgb, occlusionFactor);
            } else {
                color.rgb = mix(uOcclusionColor * (1.0 - fogFactor), color.rgb, occlusionFactor);
            }
        }
        #if defined(dBlendTransparency) && defined(dOcclusionIncludeTransparency)
            if (!isBackground(transparentDepth)) {
                float viewDist = abs(getViewZ(transparentDepth));
                float fogFactor = smoothstep(uFogNear, uFogFar, viewDist);
                float occlusionFactor = getSsaoTransparent(coords + uOcclusionOffset);
                transparentColor.rgb = mix(uOcclusionColor * (1.0 - fogFactor), transparentColor.rgb, occlusionFactor);
            }
        #endif
    #endif

    #ifdef dShadowEnable
        if (!isOpaqueBackground) {
            vec4 shadow = texture2D(tShadows, coords);
            if (!uTransparentBackground) {
                color.rgb = mix(mix(vec3(0), uFogColor, fogFactor), color.rgb, shadow.a);
            } else {
                color.rgb = mix(vec3(0) * (1.0 - fogFactor), color.rgb, shadow.a);
            }
        }
    #endif

    // outline needs to be handled after occlusion and shadow to keep them clean
    #ifdef dOutlineEnable
        bool hasOpaque;
        bool hasTransparent;
        float outlineOpaqueDepth;
        float outlineTransparentDepth;
        float outlineAlpha;
        getOutline(coords, hasOpaque, hasTransparent, outlineOpaqueDepth, outlineTransparentDepth, outlineAlpha);

        if (hasOpaque) {
            float viewDist = abs(getViewZ(outlineOpaqueDepth));
            float fogFactor = smoothstep(uFogNear, uFogFar, viewDist);
            if (!uTransparentBackground) {
                color.rgb = mix(uOutlineColor, uFogColor, fogFactor);
            } else {
                color.a = 1.0 - fogFactor;
                color.rgb = mix(uOutlineColor, vec3(0.0), fogFactor);
            }
        }

        #ifdef dBlendTransparency
            if (hasTransparent) {
                if (hasOpaque && outlineOpaqueDepth < outlineTransparentDepth) {
                    blendTransparency = false;
                } else {
                    float finalOutlineAlpha = clamp(outlineAlpha * 2.0, 0.0, 1.0);
                    float viewDist = abs(getViewZ(outlineTransparentDepth));
                    float fogFactor = smoothstep(uFogNear, uFogFar, viewDist);
                    float finalAlpha = max(transparentColor.a, finalOutlineAlpha * (1.0 - fogFactor));
                    transparentColor.a = finalAlpha;
                    transparentColor.rgb = uOutlineColor * finalAlpha;
                }
            }
        #endif
    #endif

    #ifdef dBlendTransparency
        if (blendTransparency) {
            float alpha = transparentColor.a;
            if (alpha != 0.0) {
                // blending
                color = transparentColor + color * (1.0 - alpha);
            }
        }
    #endif

    #ifdef dBloomEnable
        vec4 bloom = texture2D(tBloom, coords);
        // additive glow over geometry and background alike; alpha just covers the premultiplied rgb
        color.rgb += bloom.rgb;
        color.a = min(max(color.a, max(color.r, max(color.g, color.b))), 1.0);
    #endif

    gl_FragColor = color;
}
`;var Vo=`
precision highp float;
precision highp int;
precision highp sampler2D;

uniform sampler2D tColor;
uniform vec2 uTexSizeInv;

// adapted from https://github.com/kosua20/Rendu
// MIT License Copyright (c) 2017 Simon Rodriguez

#define QUALITY(q) ((q) < 5 ? 1.0 : ((q) > 5 ? ((q) < 10 ? 2.0 : ((q) < 11 ? 4.0 : 8.0)) : 1.5))

float rgb2luma(vec3 rgb){
    return sqrt(dot(rgb, vec3(0.299, 0.587, 0.114)));
}

float sampleLuma(vec2 uv) {
    return rgb2luma(texture2D(tColor, uv).rgb);
}

float sampleLuma(vec2 uv, float uOffset, float vOffset) {
    uv += uTexSizeInv * vec2(uOffset, vOffset);
    return sampleLuma(uv);
}

void main(void) {
    vec2 coords = gl_FragCoord.xy * uTexSizeInv;
    vec2 inverseScreenSize = uTexSizeInv;

    vec4 colorCenter = texture2D(tColor, coords);

    // Luma at the current fragment
    float lumaCenter = rgb2luma(colorCenter.rgb);

    // Luma at the four direct neighbours of the current fragment.
    float lumaDown = sampleLuma(coords, 0.0, -1.0);
    float lumaUp = sampleLuma(coords, 0.0, 1.0);
    float lumaLeft = sampleLuma(coords, -1.0, 0.0);
    float lumaRight = sampleLuma(coords, 1.0, 0.0);

    // Find the maximum and minimum luma around the current fragment.
    float lumaMin = min(lumaCenter, min(min(lumaDown, lumaUp), min(lumaLeft, lumaRight)));
    float lumaMax = max(lumaCenter, max(max(lumaDown, lumaUp), max(lumaLeft, lumaRight)));

    // Compute the delta.
    float lumaRange = lumaMax - lumaMin;

    // If the luma variation is lower that a threshold (or if we are in a really dark area),
    // we are not on an edge, don't perform any AA.
    if (lumaRange < max(dEdgeThresholdMin, lumaMax * dEdgeThresholdMax)) {
        gl_FragColor = colorCenter;
        return;
    }

    // Query the 4 remaining corners lumas.
    float lumaDownLeft = sampleLuma(coords, -1.0, -1.0);
    float lumaUpRight = sampleLuma(coords, 1.0, 1.0);
    float lumaUpLeft = sampleLuma(coords, -1.0, 1.0);
    float lumaDownRight = sampleLuma(coords, 1.0, -1.0);

    // Combine the four edges lumas (using intermediary variables for future computations
    // with the same values).
    float lumaDownUp = lumaDown + lumaUp;
    float lumaLeftRight = lumaLeft + lumaRight;

    // Same for corners
    float lumaLeftCorners = lumaDownLeft + lumaUpLeft;
    float lumaDownCorners = lumaDownLeft + lumaDownRight;
    float lumaRightCorners = lumaDownRight + lumaUpRight;
    float lumaUpCorners = lumaUpRight + lumaUpLeft;

    // Compute an estimation of the gradient along the horizontal and vertical axis.
    float edgeHorizontal = abs(-2.0 * lumaLeft + lumaLeftCorners) + abs(-2.0 * lumaCenter + lumaDownUp) * 2.0 + abs(-2.0 * lumaRight + lumaRightCorners);
    float edgeVertical = abs(-2.0 * lumaUp + lumaUpCorners) + abs(-2.0 * lumaCenter + lumaLeftRight) * 2.0 + abs(-2.0 * lumaDown + lumaDownCorners);

    // Is the local edge horizontal or vertical ?
    bool isHorizontal = (edgeHorizontal >= edgeVertical);

    // Choose the step size (one pixel) accordingly.
    float stepLength = isHorizontal ? inverseScreenSize.y : inverseScreenSize.x;

    // Select the two neighboring texels lumas in the opposite direction to the local edge.
    float luma1 = isHorizontal ? lumaDown : lumaLeft;
    float luma2 = isHorizontal ? lumaUp : lumaRight;
    // Compute gradients in this direction.
    float gradient1 = luma1 - lumaCenter;
    float gradient2 = luma2 - lumaCenter;

    // Which direction is the steepest ?
    bool is1Steepest = abs(gradient1) >= abs(gradient2);

    // Gradient in the corresponding direction, normalized.
    float gradientScaled = 0.25 * max(abs(gradient1), abs(gradient2));

    // Average luma in the correct direction.
    float lumaLocalAverage = 0.0;
    if(is1Steepest){
        // Switch the direction
        stepLength = -stepLength;
        lumaLocalAverage = 0.5 * (luma1 + lumaCenter);
    } else {
        lumaLocalAverage = 0.5 * (luma2 + lumaCenter);
    }

    // Shift UV in the correct direction by half a pixel.
    vec2 currentUv = coords;
    if(isHorizontal){
        currentUv.y += stepLength * 0.5;
    } else {
        currentUv.x += stepLength * 0.5;
    }

    // Compute offset (for each iteration step) in the right direction.
    vec2 offset = isHorizontal ? vec2(inverseScreenSize.x, 0.0) : vec2(0.0, inverseScreenSize.y);
    // Compute UVs to explore on each side of the edge, orthogonally.
    // The QUALITY allows us to step faster.
    vec2 uv1 = currentUv - offset * QUALITY(0);
    vec2 uv2 = currentUv + offset * QUALITY(0);

    // Read the lumas at both current extremities of the exploration segment,
    // and compute the delta wrt to the local average luma.
    float lumaEnd1 = sampleLuma(uv1);
    float lumaEnd2 = sampleLuma(uv2);
    lumaEnd1 -= lumaLocalAverage;
    lumaEnd2 -= lumaLocalAverage;

    // If the luma deltas at the current extremities is larger than the local gradient,
    // we have reached the side of the edge.
    bool reached1 = abs(lumaEnd1) >= gradientScaled;
    bool reached2 = abs(lumaEnd2) >= gradientScaled;
    bool reachedBoth = reached1 && reached2;

    // If the side is not reached, we continue to explore in this direction.
    if(!reached1){
        uv1 -= offset * QUALITY(1);
    }
    if(!reached2){
        uv2 += offset * QUALITY(1);
    }

    // If both sides have not been reached, continue to explore.
    if(!reachedBoth){
        for(int i = 2; i < dIterations; i++){
            // If needed, read luma in 1st direction, compute delta.
            if(!reached1){
                lumaEnd1 = sampleLuma(uv1);
                lumaEnd1 = lumaEnd1 - lumaLocalAverage;
            }
            // If needed, read luma in opposite direction, compute delta.
            if(!reached2){
                lumaEnd2 = sampleLuma(uv2);
                lumaEnd2 = lumaEnd2 - lumaLocalAverage;
            }
            // If the luma deltas at the current extremities is larger than the local gradient,
            // we have reached the side of the edge.
            reached1 = abs(lumaEnd1) >= gradientScaled;
            reached2 = abs(lumaEnd2) >= gradientScaled;
            reachedBoth = reached1 && reached2;

            // If the side is not reached, we continue to explore in this direction,
            // with a variable quality.
            if(!reached1){
                uv1 -= offset * QUALITY(i);
            }
            if(!reached2){
                uv2 += offset * QUALITY(i);
            }

            // If both sides have been reached, stop the exploration.
            if(reachedBoth){
                break;
            }
        }
    }

    // Compute the distances to each side edge of the edge (!).
    float distance1 = isHorizontal ? (coords.x - uv1.x) : (coords.y - uv1.y);
    float distance2 = isHorizontal ? (uv2.x - coords.x) : (uv2.y - coords.y);

    // In which direction is the side of the edge closer ?
    bool isDirection1 = distance1 < distance2;
    float distanceFinal = min(distance1, distance2);

    // Thickness of the edge.
    float edgeThickness = (distance1 + distance2);

    // Is the luma at center smaller than the local average ?
    bool isLumaCenterSmaller = lumaCenter < lumaLocalAverage;

    // If the luma at center is smaller than at its neighbour,
    // the delta luma at each end should be positive (same variation).
    bool correctVariation1 = (lumaEnd1 < 0.0) != isLumaCenterSmaller;
    bool correctVariation2 = (lumaEnd2 < 0.0) != isLumaCenterSmaller;

    // Only keep the result in the direction of the closer side of the edge.
    bool correctVariation = isDirection1 ? correctVariation1 : correctVariation2;

    // UV offset: read in the direction of the closest side of the edge.
    float pixelOffset = - distanceFinal / edgeThickness + 0.5;

    // If the luma variation is incorrect, do not offset.
    float finalOffset = correctVariation ? pixelOffset : 0.0;

    // Sub-pixel shifting
    // Full weighted average of the luma over the 3x3 neighborhood.
    float lumaAverage = (1.0 / 12.0) * (2.0 * (lumaDownUp + lumaLeftRight) + lumaLeftCorners + lumaRightCorners);
    // Ratio of the delta between the global average and the center luma,
    // over the luma range in the 3x3 neighborhood.
    float subPixelOffset1 = clamp(abs(lumaAverage - lumaCenter) / lumaRange, 0.0, 1.0);
    float subPixelOffset2 = (-2.0 * subPixelOffset1 + 3.0) * subPixelOffset1 * subPixelOffset1;
    // Compute a sub-pixel offset based on this delta.
    float subPixelOffsetFinal = subPixelOffset2 * subPixelOffset2 * float(dSubpixelQuality);

    // Pick the biggest of the two offsets.
    finalOffset = max(finalOffset, subPixelOffsetFinal);

    // Compute the final UV coordinates.
    vec2 finalUv = coords;
    if(isHorizontal){
        finalUv.y += finalOffset * stepLength;
    } else {
        finalUv.x += finalOffset * stepLength;
    }

    // Read the color at the new UV coordinates, and use it.
    gl_FragColor = texture2D(tColor, finalUv);
}
`;var No={edgeThresholdMin:m.Numeric(.0312,{min:.0312,max:.0833,step:1e-4},{description:"Trims the algorithm from processing darks."}),edgeThresholdMax:m.Numeric(.063,{min:.063,max:.333,step:.001},{description:"The minimum amount of local contrast required to apply algorithm."}),iterations:m.Numeric(12,{min:0,max:16,step:1},{description:"Number of edge exploration steps."}),subpixelQuality:m.Numeric(.3,{min:0,max:1,step:.01},{description:"Choose the amount of sub-pixel aliasing removal."})},Ba=class{constructor(e,t){this.webgl=e;this.renderable=Vs(e,t)}updateState(e){let{gl:t,state:r}=this.webgl;r.enable(t.SCISSOR_TEST),r.disable(t.BLEND),r.disable(t.DEPTH_TEST),r.depthMask(!1);let{x:a,y:o,width:n,height:s}=e;r.viewport(a,o,n,s),r.scissor(a,o,n,s),r.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT)}setSize(e,t){i.update(this.renderable.values.uTexSizeInv,T.set(this.renderable.values.uTexSizeInv.ref.value,1/e,1/t))}update(e,t){let{values:r}=this.renderable,{edgeThresholdMin:a,edgeThresholdMax:o,iterations:n,subpixelQuality:s}=t,f=!1;r.tColor.ref.value!==e&&(i.update(this.renderable.values.tColor,e),f=!0),r.dEdgeThresholdMin.ref.value!==a&&(f=!0),i.updateIfChanged(r.dEdgeThresholdMin,a),r.dEdgeThresholdMax.ref.value!==o&&(f=!0),i.updateIfChanged(r.dEdgeThresholdMax,o),r.dIterations.ref.value!==n&&(f=!0),i.updateIfChanged(r.dIterations,n),r.dSubpixelQuality.ref.value!==s&&(f=!0),i.updateIfChanged(r.dSubpixelQuality,s),f&&this.renderable.update()}render(e,t){k&&this.webgl.timer.mark("FxaaPass.render"),t?t.bind():this.webgl.bindDrawingBuffer(),this.updateState(e),this.renderable.render(),k&&this.webgl.timer.markEnd("FxaaPass.render")}},As={...be,tColor:j("texture","rgba","ubyte","linear"),uTexSizeInv:C("v2"),dEdgeThresholdMin:ee("number"),dEdgeThresholdMax:ee("number"),dIterations:ee("number"),dSubpixelQuality:ee("number")},zs=he("fxaa",Te,Vo);function Vs(u,e){let t=e.getWidth(),r=e.getHeight(),a={...ve,tColor:i.create(e),uTexSizeInv:i.create(T.create(1/t,1/r)),dEdgeThresholdMin:i.create(.0312),dEdgeThresholdMax:i.create(.125),dIterations:i.create(12),dSubpixelQuality:i.create(.3)},o={...As},n=me(u,"triangles",zs,o,a);return fe(n,a)}var Ho=`
precision highp float;

attribute vec2 aPosition;
uniform vec2 uQuadScale;

uniform vec2 uTexSizeInv;
uniform vec4 uViewport;

varying vec2 vUv;
varying vec4 vOffset[2];

void SMAANeighborhoodBlendingVS(vec2 texCoord) {
    vOffset[0] = texCoord.xyxy + uTexSizeInv.xyxy * vec4(-1.0, 0.0, 0.0, 1.0); // WebGL port note: Changed sign in W component
    vOffset[1] = texCoord.xyxy + uTexSizeInv.xyxy * vec4(1.0, 0.0, 0.0, -1.0); // WebGL port note: Changed sign in W component
}

void main() {
    vec2 scale = uViewport.zw * uTexSizeInv;
    vec2 shift = uViewport.xy * uTexSizeInv;
    vUv = (aPosition + 1.0) * 0.5 * scale + shift;
    SMAANeighborhoodBlendingVS(vUv);
    vec2 position = aPosition * uQuadScale - vec2(1.0, 1.0) + uQuadScale;
    gl_Position = vec4(position, 0.0, 1.0);
}
`;var jo=`
precision highp float;
precision highp int;
precision highp sampler2D;

uniform sampler2D tWeights;
uniform sampler2D tColor;
uniform vec2 uTexSizeInv;

varying vec2 vUv;
varying vec4 vOffset[2];

vec4 SMAANeighborhoodBlendingPS(vec2 texCoord, vec4 offset[2], sampler2D colorTex, sampler2D blendTex) {
    // Fetch the blending weights for current pixel:
    vec4 a;
    a.xz = texture2D(blendTex, texCoord).xz;
    a.y = texture2D(blendTex, offset[1].zw).g;
    a.w = texture2D(blendTex, offset[1].xy).a;

    // Is there any blending weight with a value greater than 0.0?
    if (dot(a, vec4(1.0, 1.0, 1.0, 1.0)) < 1e-5) {
        return texture2D(colorTex, texCoord, 0.0);
    } else {
        // Up to 4 lines can be crossing a pixel (one through each edge). We
        // favor blending by choosing the line with the maximum weight for each
        // direction:
        vec2 offset;
        offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
        offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

        // Then we go in the direction that has the maximum weight:
        if (abs(offset.x) > abs(offset.y)) { // horizontal vs. vertical
            offset.y = 0.0;
        } else {
            offset.x = 0.0;
        }

        // Fetch the opposite color and lerp by hand:
        vec4 C = texture2D(colorTex, texCoord, 0.0);
        texCoord += sign(offset) * uTexSizeInv;
        vec4 Cop = texture2D(colorTex, texCoord, 0.0);
        float s = abs(offset.x) > abs(offset.y) ? abs(offset.x) : abs(offset.y);

        // WebGL port note: Added gamma correction
        C.xyz = pow(C.xyz, vec3(2.2));
        Cop.xyz = pow(Cop.xyz, vec3(2.2));
        vec4 mixed = mix(C, Cop, s);
        mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

        return mixed;
    }
}

void main() {
    gl_FragColor = SMAANeighborhoodBlendingPS(vUv, vOffset, tColor, tWeights);
}
`;var Go=`
precision highp float;

attribute vec2 aPosition;
uniform vec2 uQuadScale;

uniform vec2 uTexSizeInv;
uniform vec4 uViewport;

varying vec2 vUv;
varying vec4 vOffset[3];
varying vec2 vPixCoord;

void SMAABlendingWeightCalculationVS(vec2 texCoord) {
    vPixCoord = texCoord / uTexSizeInv;

    // We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
    vOffset[0] = texCoord.xyxy + uTexSizeInv.xyxy * vec4(-0.25, 0.125, 1.25, 0.125); // WebGL port note: Changed sign in Y and W components
    vOffset[1] = texCoord.xyxy + uTexSizeInv.xyxy * vec4(-0.125, 0.25, -0.125, -1.25); // WebGL port note: Changed sign in Y and W components

    // And these for the searches, they indicate the ends of the loops:
    vOffset[2] = vec4(vOffset[0].xz, vOffset[1].yw) + vec4(-2.0, 2.0, -2.0, 2.0) * uTexSizeInv.xxyy * float(dMaxSearchSteps);
}

void main() {
    vec2 scale = uViewport.zw * uTexSizeInv;
    vec2 shift = uViewport.xy * uTexSizeInv;
    vUv = (aPosition + 1.0) * 0.5 * scale + shift;
    SMAABlendingWeightCalculationVS(vUv);
    vec2 position = aPosition * uQuadScale - vec2(1.0, 1.0) + uQuadScale;
    gl_Position = vec4(position, 0.0, 1.0);
}
`;var qo=`
precision highp float;
precision highp int;
precision highp sampler2D;

#define SMAASampleLevelZeroOffset(tex, coord, offset) texture2D(tex, coord + float(offset) * uTexSizeInv, 0.0)

#define SMAA_AREATEX_MAX_DISTANCE 16
#define SMAA_AREATEX_PIXEL_SIZE (1.0 / vec2(160.0, 560.0))
#define SMAA_AREATEX_SUBTEX_SIZE (1.0 / 7.0)

uniform sampler2D tEdges;
uniform sampler2D tArea;
uniform sampler2D tSearch;
uniform vec2 uTexSizeInv;

varying vec2 vUv;
varying vec4 vOffset[3];
varying vec2 vPixCoord;

#if __VERSION__ == 100
    vec2 round(vec2 x) {
        return sign(x) * floor(abs(x) + 0.5);
    }
#endif

float SMAASearchLength(sampler2D searchTex, vec2 e, float bias, float scale) {
    // Not required if searchTex accesses are set to point:
    // float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
    // e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
    //     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
    e.r = bias + e.r * scale;
    return 255.0 * texture2D(searchTex, e, 0.0).r;
}

float SMAASearchXLeft(sampler2D edgesTex, sampler2D searchTex, vec2 texCoord, float end) {
    /**
     * @PSEUDO_GATHER4
     * This texCoord has been offset by (-0.25, -0.125) in the vertex shader to
     * sample between edge, thus fetching four edges in a row.
     * Sampling with different offsets in each direction allows to disambiguate
     * which edges are active from the four fetched ones.
     */
    vec2 e = vec2(0.0, 1.0);

    for (int i = 0; i < dMaxSearchSteps; i++) { // WebGL port note: Changed while to for
        e = texture2D( edgesTex, texCoord, 0.0).rg;
        texCoord -= vec2(2.0, 0.0) * uTexSizeInv;
        if (!(texCoord.x > end && e.g > 0.8281 && e.r == 0.0)) break;
    }

    // We correct the previous (-0.25, -0.125) offset we applied:
    texCoord.x += 0.25 * uTexSizeInv.x;

    // The searches are bias by 1, so adjust the coords accordingly:
    texCoord.x += uTexSizeInv.x;

    // Disambiguate the length added by the last step:
    texCoord.x += 2.0 * uTexSizeInv.x; // Undo last step
    texCoord.x -= uTexSizeInv.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

    return texCoord.x;
}

float SMAASearchXRight(sampler2D edgesTex, sampler2D searchTex, vec2 texCoord, float end) {
    vec2 e = vec2( 0.0, 1.0 );

    for (int i = 0; i < dMaxSearchSteps; i++) { // WebGL port note: Changed while to for
        e = texture2D(edgesTex, texCoord, 0.0).rg;
        texCoord += vec2(2.0, 0.0) * uTexSizeInv;
        if (!(texCoord.x < end && e.g > 0.8281 && e.r == 0.0)) break;
    }

    texCoord.x -= 0.25 * uTexSizeInv.x;
    texCoord.x -= uTexSizeInv.x;
    texCoord.x -= 2.0 * uTexSizeInv.x;
    texCoord.x += uTexSizeInv.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

    return texCoord.x;
}

float SMAASearchYUp(sampler2D edgesTex, sampler2D searchTex, vec2 texCoord, float end) {
    vec2 e = vec2( 1.0, 0.0 );

    for (int i = 0; i < dMaxSearchSteps; i++) { // WebGL port note: Changed while to for
        e = texture2D(edgesTex, texCoord, 0.0).rg;
        texCoord += vec2(0.0, 2.0) * uTexSizeInv; // WebGL port note: Changed sign
        if (!(texCoord.y > end && e.r > 0.8281 && e.g == 0.0)) break;
    }

    texCoord.y -= 0.25 * uTexSizeInv.y; // WebGL port note: Changed sign
    texCoord.y -= uTexSizeInv.y; // WebGL port note: Changed sign
    texCoord.y -= 2.0 * uTexSizeInv.y; // WebGL port note: Changed sign
    texCoord.y += uTexSizeInv.y * SMAASearchLength(searchTex, e.gr, 0.0, 0.5); // WebGL port note: Changed sign

    return texCoord.y;
}

float SMAASearchYDown(sampler2D edgesTex, sampler2D searchTex, vec2 texCoord, float end) {
    vec2 e = vec2( 1.0, 0.0 );

    for (int i = 0; i < dMaxSearchSteps; i++) { // WebGL port note: Changed while to for
        e = texture2D(edgesTex, texCoord, 0.0).rg;
        texCoord -= vec2( 0.0, 2.0 ) * uTexSizeInv; // WebGL port note: Changed sign
        if (!(texCoord.y < end && e.r > 0.8281 && e.g == 0.0)) break;
    }

    texCoord.y += 0.25 * uTexSizeInv.y; // WebGL port note: Changed sign
    texCoord.y += uTexSizeInv.y; // WebGL port note: Changed sign
    texCoord.y += 2.0 * uTexSizeInv.y; // WebGL port note: Changed sign
    texCoord.y -= uTexSizeInv.y * SMAASearchLength(searchTex, e.gr, 0.5, 0.5); // WebGL port note: Changed sign

    return texCoord.y;
}

vec2 SMAAArea(sampler2D areaTex, vec2 dist, float e1, float e2, float offset) {
    // Rounding prevents precision errors of bilinear filtering:
    vec2 texCoord = float(SMAA_AREATEX_MAX_DISTANCE) * round(4.0 * vec2(e1, e2)) + dist;

    // We do a scale and bias for mapping to texel space:
    texCoord = SMAA_AREATEX_PIXEL_SIZE * texCoord + (0.5 * SMAA_AREATEX_PIXEL_SIZE);

    // Move to proper place, according to the subpixel offset:
    texCoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

    return texture2D(areaTex, texCoord, 0.0).rg;
}

vec4 SMAABlendingWeightCalculationPS(vec2 texCoord, vec2 pixCoord, vec4 offset[3], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices) {
    vec4 weights = vec4(0.0, 0.0, 0.0, 0.0);

    vec2 e = texture2D(edgesTex, texCoord).rg;

    if (e.g > 0.0) { // Edge at north
        vec2 d;

        // Find the distance to the left:
        vec2 coords;
        coords.x = SMAASearchXLeft(edgesTex, searchTex, offset[0].xy, offset[2].x );
        coords.y = offset[1].y; // offset[1].y = texCoord.y - 0.25 * uTexSizeInv.y (@CROSSING_OFFSET)
        d.x = coords.x;

        // Now fetch the left crossing edges, two at a time using bilinear
        // filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
        // discern what value each edge has:
        float e1 = texture2D(edgesTex, coords, 0.0).r;

        // Find the distance to the right:
        coords.x = SMAASearchXRight(edgesTex, searchTex, offset[0].zw, offset[2].y);
        d.y = coords.x;

        // We want the distances to be in pixel units (doing this here allow to
        // better interleave arithmetic and memory accesses):
        d = d / uTexSizeInv.x - pixCoord.x;

        // SMAAArea below needs a sqrt, as the areas texture is compressed
        // quadratically:
        vec2 sqrt_d = sqrt(abs(d));

        // Fetch the right crossing edges:
        coords.y -= 1.0 * uTexSizeInv.y; // WebGL port note: Added
        float e2 = SMAASampleLevelZeroOffset(edgesTex, coords, ivec2(1, 0)).r;

        // Ok, we know how this pattern looks like, now it is time for getting
        // the actual area:
        weights.rg = SMAAArea(areaTex, sqrt_d, e1, e2, float(subsampleIndices.y));
    }

    if (e.r > 0.0) { // Edge at west
        vec2 d;

        // Find the distance to the top:
        vec2 coords;

        coords.y = SMAASearchYUp(edgesTex, searchTex, offset[1].xy, offset[2].z );
        coords.x = offset[0].x; // offset[1].x = texCoord.x - 0.25 * uTexSizeInv.x;
        d.x = coords.y;

        // Fetch the top crossing edges:
        float e1 = texture2D(edgesTex, coords, 0.0).g;

        // Find the distance to the bottom:
        coords.y = SMAASearchYDown(edgesTex, searchTex, offset[1].zw, offset[2].w);
        d.y = coords.y;

        // We want the distances to be in pixel units:
        d = d / uTexSizeInv.y - pixCoord.y;

        // SMAAArea below needs a sqrt, as the areas texture is compressed
        // quadratically:
        vec2 sqrt_d = sqrt(abs(d));

        // Fetch the bottom crossing edges:
        coords.y -= 1.0 * uTexSizeInv.y; // WebGL port note: Added
        float e2 = SMAASampleLevelZeroOffset(edgesTex, coords, ivec2(0, 1)).g;

        // Get the area for this direction:
        weights.ba = SMAAArea(areaTex, sqrt_d, e1, e2, float(subsampleIndices.x));
    }

    return weights;
}

void main() {
    gl_FragColor = SMAABlendingWeightCalculationPS(vUv, vPixCoord, vOffset, tEdges, tArea, tSearch, ivec4(0.0));
}
`;var Wo=`
precision highp float;

attribute vec2 aPosition;
uniform vec2 uQuadScale;

uniform vec2 uTexSizeInv;
uniform vec4 uViewport;

varying vec2 vUv;
varying vec4 vOffset[3];

void SMAAEdgeDetectionVS(vec2 texCoord) {
    vOffset[0] = texCoord.xyxy + uTexSizeInv.xyxy * vec4(-1.0, 0.0, 0.0, 1.0); // WebGL port note: Changed sign in W component
    vOffset[1] = texCoord.xyxy + uTexSizeInv.xyxy * vec4(1.0, 0.0, 0.0, -1.0); // WebGL port note: Changed sign in W component
    vOffset[2] = texCoord.xyxy + uTexSizeInv.xyxy * vec4(-2.0, 0.0, 0.0, 2.0); // WebGL port note: Changed sign in W component
}

void main() {
    vec2 scale = uViewport.zw * uTexSizeInv;
    vec2 shift = uViewport.xy * uTexSizeInv;
    vUv = (aPosition + 1.0) * 0.5 * scale + shift;
    SMAAEdgeDetectionVS(vUv);
    vec2 position = aPosition * uQuadScale - vec2(1.0, 1.0) + uQuadScale;
    gl_Position = vec4(position, 0.0, 1.0);
}
`;var Uo=`
precision highp float;
precision highp int;
precision highp sampler2D;

uniform sampler2D tColor;
uniform vec2 uTexSizeInv;

varying vec2 vUv;
varying vec4 vOffset[3];

vec4 SMAAColorEdgeDetectionPS(vec2 texcoord, vec4 offset[3], sampler2D colorTex) {
    vec2 threshold = vec2(dEdgeThreshold, dEdgeThreshold);

    // Calculate color deltas:
    vec4 delta;
    vec3 C = texture2D(colorTex, texcoord).rgb;

    vec3 Cleft = texture2D(colorTex, offset[0].xy).rgb;
    vec3 t = abs(C - Cleft);
    delta.x = max(max(t.r, t.g), t.b);

    vec3 Ctop = texture2D(colorTex, offset[0].zw).rgb;
    t = abs(C - Ctop);
    delta.y = max(max(t.r, t.g), t.b);

    // We do the usual threshold:
    vec2 edges = step(threshold, delta.xy);

    // Then discard if there is no edge:
    if (dot(edges, vec2(1.0, 1.0 )) == 0.0)
        discard;

    // Calculate right and bottom deltas:
    vec3 Cright = texture2D(colorTex, offset[1].xy).rgb;
    t = abs( C - Cright );
    delta.z = max(max(t.r, t.g), t.b);

    vec3 Cbottom  = texture2D(colorTex, offset[1].zw).rgb;
    t = abs(C - Cbottom);
    delta.w = max(max(t.r, t.g), t.b);

    // Calculate the maximum delta in the direct neighborhood:
    float maxDelta = max(max(max(delta.x, delta.y), delta.z), delta.w );

    // Calculate left-left and top-top deltas:
    vec3 Cleftleft  = texture2D(colorTex, offset[2].xy).rgb;
    t = abs( C - Cleftleft );
    delta.z = max(max(t.r, t.g), t.b);

    vec3 Ctoptop = texture2D(colorTex, offset[2].zw).rgb;
    t = abs(C - Ctoptop);
    delta.w = max(max(t.r, t.g), t.b);

    // Calculate the final maximum delta:
    maxDelta = max(max(maxDelta, delta.z), delta.w);

    // Local contrast adaptation in action:
    edges.xy *= step(0.5 * maxDelta, delta.xy);

    return vec4(edges, 0.0, 0.0);
}

void main() {
    gl_FragColor = SMAAColorEdgeDetectionPS(vUv, vOffset, tColor);
}
`;var Xo={edgeThreshold:m.Numeric(.1,{min:.05,max:.15,step:.01}),maxSearchSteps:m.Numeric(16,{min:0,max:32,step:1})},Ma=class{constructor(e,t){this.webgl=e;this._supported=!1;if(typeof HTMLImageElement>"u"){Pe&&console.log('Missing "HTMLImageElement" required for "SMAA"');return}let r=t.getWidth(),a=t.getHeight();this.edgesTarget=e.createRenderTarget(r,a,"none","uint8","linear"),this.weightsTarget=e.createRenderTarget(r,a,"none","uint8","linear"),this.edgesRenderable=js(e,t),this.weightsRenderable=Ws(e,this.edgesTarget.texture),this.blendRenderable=Ks(e,t,this.weightsTarget.texture),this._supported=!0}get supported(){return this._supported}getByteCount(){return this.supported?this.edgesTarget.getByteCount()+this.weightsTarget.getByteCount():0}updateState(e){let{gl:t,state:r}=this.webgl;r.enable(t.SCISSOR_TEST),r.disable(t.BLEND),r.disable(t.DEPTH_TEST),r.depthMask(!1);let{x:a,y:o,width:n,height:s}=e;r.viewport(a,o,n,s),r.scissor(a,o,n,s),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT),i.update(this.edgesRenderable.values.uViewport,Ce.toVec4(this.edgesRenderable.values.uViewport.ref.value,e)),i.update(this.weightsRenderable.values.uViewport,Ce.toVec4(this.weightsRenderable.values.uViewport.ref.value,e)),i.update(this.blendRenderable.values.uViewport,Ce.toVec4(this.blendRenderable.values.uViewport.ref.value,e))}setSize(e,t){let r=this.edgesTarget.getWidth(),a=this.edgesTarget.getHeight();(e!==r||t!==a)&&(this.edgesTarget.setSize(e,t),this.weightsTarget.setSize(e,t),i.update(this.edgesRenderable.values.uTexSizeInv,T.set(this.edgesRenderable.values.uTexSizeInv.ref.value,1/e,1/t)),i.update(this.weightsRenderable.values.uTexSizeInv,T.set(this.weightsRenderable.values.uTexSizeInv.ref.value,1/e,1/t)),i.update(this.blendRenderable.values.uTexSizeInv,T.set(this.blendRenderable.values.uTexSizeInv.ref.value,1/e,1/t)))}update(e,t){let r=!1;this.edgesRenderable.values.tColor.ref.value!==e&&(i.update(this.edgesRenderable.values.tColor,e),r=!0),this.edgesRenderable.values.dEdgeThreshold.ref.value!==t.edgeThreshold&&(i.update(this.edgesRenderable.values.dEdgeThreshold,t.edgeThreshold),r=!0),r&&this.edgesRenderable.update(),this.weightsRenderable.values.dMaxSearchSteps.ref.value!==t.maxSearchSteps&&(i.update(this.weightsRenderable.values.dMaxSearchSteps,t.maxSearchSteps),this.weightsRenderable.update()),this.blendRenderable.values.tColor.ref.value!==e&&(i.update(this.blendRenderable.values.tColor,e),this.blendRenderable.update())}render(e,t){k&&this.webgl.timer.mark("SmaaPass.render"),this.edgesTarget.bind(),this.updateState(e),this.edgesRenderable.render(),this.weightsTarget.bind(),this.updateState(e),this.weightsRenderable.render(),t?t.bind():this.webgl.bindDrawingBuffer(),this.updateState(e),this.blendRenderable.render(),k&&this.webgl.timer.markEnd("SmaaPass.render")}},Ns={...be,tColor:j("texture","rgba","ubyte","linear"),uTexSizeInv:C("v2"),uViewport:C("v4"),dEdgeThreshold:ee("number")},Hs=he("smaa-edges",Wo,Uo);function js(u,e){let t=e.getWidth(),r=e.getHeight(),a={...ve,tColor:i.create(e),uTexSizeInv:i.create(T.create(1/t,1/r)),uViewport:i.create(Oe()),dEdgeThreshold:i.create(.1)},o={...Ns},n=me(u,"triangles",Hs,o,a);return fe(n,a)}var Gs={...be,tEdges:j("texture","rgba","ubyte","linear"),tArea:j("texture","rgb","ubyte","linear"),tSearch:j("texture","rgba","ubyte","nearest"),uTexSizeInv:C("v2"),uViewport:C("v4"),dMaxSearchSteps:ee("number")},qs=he("smaa-weights",Go,qo);function Ws(u,e){let t=e.getWidth(),r=e.getHeight(),a=u.resources.texture("image-uint8","rgb","ubyte","linear"),o=u.resources.texture("image-uint8","rgba","ubyte","nearest"),n={...ve,tEdges:i.create(e),tArea:i.create(a),tSearch:i.create(o),uTexSizeInv:i.create(T.create(1/t,1/r)),uViewport:i.create(Oe()),dMaxSearchSteps:i.create(16)};ai(Zs(),n.tArea,a),ai(Ys(),n.tSearch,o);let s={...Gs},f=me(u,"triangles",qs,s,n);return fe(f,n)}var Us={...be,tColor:j("texture","rgba","ubyte","linear"),tWeights:j("texture","rgba","ubyte","linear"),uTexSizeInv:C("v2"),uViewport:C("v4")},Xs=he("smaa-blend",Ho,jo);function Ks(u,e,t){let r=e.getWidth(),a=e.getHeight(),o={...ve,tColor:i.create(e),tWeights:i.create(t),uTexSizeInv:i.create(T.create(1/r,1/a)),uViewport:i.create(Oe())},n={...Us},s=me(u,"triangles",Xs,n,o);return fe(s,o)}function Zs(){return"data:image/png;base64,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"}function Ys(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}var Ko=`
precision mediump float;
precision mediump samplerCube;
precision mediump sampler2D;

#if defined(dVariant_skybox)
    uniform samplerCube tSkybox;
    uniform mat4 uViewDirectionProjectionInverse;
    uniform float uBlur;
    uniform float uOpacity;
    uniform float uSaturation;
    uniform float uLightness;
    uniform mat3 uRotation;
#elif defined(dVariant_image)
    uniform sampler2D tImage;
    uniform vec2 uImageScale;
    uniform vec2 uImageOffset;
    uniform float uBlur;
    uniform float uOpacity;
    uniform float uSaturation;
    uniform float uLightness;
#elif defined(dVariant_horizontalGradient) || defined(dVariant_radialGradient)
    uniform vec3 uGradientColorA;
    uniform vec3 uGradientColorB;
    uniform float uGradientRatio;
#endif

uniform vec2 uTexSize;
uniform vec4 uViewport;
uniform bool uViewportAdjusted;
varying vec4 vPosition;

// TODO: add as general pp option to remove banding?
// Iestyn's RGB dither from http://alex.vlachos.com/graphics/Alex_Vlachos_Advanced_VR_Rendering_GDC2015.pdf
vec3 ScreenSpaceDither(vec2 vScreenPos) {
    vec3 vDither = vec3(dot(vec2(171.0, 231.0), vScreenPos.xy));
    vDither.rgb = fract(vDither.rgb / vec3(103.0, 71.0, 97.0));
    return vDither.rgb / 255.0;
}

vec3 saturateColor(vec3 c, float amount) {
    // https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(c, W));
    return mix(intensity, c, 1.0 + amount);
}

vec3 lightenColor(vec3 c, float amount) {
    return c + amount;
}

void main() {
    #if defined(dVariant_skybox)
        vec4 t = uViewDirectionProjectionInverse * vPosition;
        #ifdef enabledShaderTextureLod
            gl_FragColor = textureCubeLodEXT(tSkybox, uRotation * normalize(t.xyz / t.w), uBlur * 8.0);
        #else
            gl_FragColor = textureCube(tSkybox, uRotation * normalize(t.xyz / t.w));
        #endif
        gl_FragColor.a = uOpacity;
        gl_FragColor.rgb = lightenColor(saturateColor(gl_FragColor.rgb, uSaturation), uLightness);
    #elif defined(dVariant_image)
        vec2 coords;
        if (uViewportAdjusted) {
            coords = ((gl_FragCoord.xy - uViewport.xy) * (uTexSize / uViewport.zw) / uImageScale) + uImageOffset;
        } else {
            coords = (gl_FragCoord.xy / uImageScale) + uImageOffset;
        }
        #ifdef enabledShaderTextureLod
            gl_FragColor = texture2DLodEXT(tImage, vec2(coords.x, 1.0 - coords.y), uBlur * 8.0);
        #else
            gl_FragColor = texture2D(tImage, vec2(coords.x, 1.0 - coords.y));
        #endif
        gl_FragColor.a = uOpacity;
        gl_FragColor.rgb = lightenColor(saturateColor(gl_FragColor.rgb, uSaturation), uLightness);
    #elif defined(dVariant_horizontalGradient)
        float d;
        if (uViewportAdjusted) {
            d = ((gl_FragCoord.y - uViewport.y) * (uTexSize.y / uViewport.w) / uTexSize.y) + 1.0 - (uGradientRatio * 2.0);
        } else {
            d = (gl_FragCoord.y / uTexSize.y) + 1.0 - (uGradientRatio * 2.0);
        }
        gl_FragColor = vec4(mix(uGradientColorB, uGradientColorA, clamp(d, 0.0, 1.0)), 1.0);
        gl_FragColor.rgb += ScreenSpaceDither(gl_FragCoord.xy);
    #elif defined(dVariant_radialGradient)
        float d;
        if (uViewportAdjusted) {
            d = distance(vec2(0.5), (gl_FragCoord.xy - uViewport.xy) * (uTexSize / uViewport.zw) / uTexSize) + uGradientRatio - 0.5;
        } else {
            d = distance(vec2(0.5), gl_FragCoord.xy / uTexSize) + uGradientRatio - 0.5;
        }
        gl_FragColor = vec4(mix(uGradientColorB, uGradientColorA, 1.0 - clamp(d, 0.0, 1.0)), 1.0);
        gl_FragColor.rgb += ScreenSpaceDither(gl_FragCoord.xy);
    #endif
}
`;var Zo=`
precision mediump float;

attribute vec2 aPosition;

varying vec4 vPosition;

void main() {
    vPosition = vec4(aPosition, 1.0, 1.0);
    gl_Position = vec4(aPosition, 1.0, 1.0);
}
`;var $o={opacity:m.Numeric(1,{min:0,max:1,step:.01}),saturation:m.Numeric(0,{min:-1,max:1,step:.01}),lightness:m.Numeric(0,{min:-1,max:1,step:.01})},_s={faces:m.MappedStatic("urls",{urls:m.Group({nx:m.Text("",{label:"Negative X / Left"}),ny:m.Text("",{label:"Negative Y / Bottom"}),nz:m.Text("",{label:"Negative Z / Back"}),px:m.Text("",{label:"Positive X / Right"}),py:m.Text("",{label:"Positive Y / Top"}),pz:m.Text("",{label:"Positive Z / Front"})},{isExpanded:!0,label:"URLs"}),files:m.Group({nx:m.File({label:"Negative X / Left",accept:"image/*"}),ny:m.File({label:"Negative Y / Bottom",accept:"image/*"}),nz:m.File({label:"Negative Z / Back",accept:"image/*"}),px:m.File({label:"Positive X / Right",accept:"image/*"}),py:m.File({label:"Positive Y / Top",accept:"image/*"}),pz:m.File({label:"Positive Z / Front",accept:"image/*"})},{isExpanded:!0,label:"Files"})}),blur:m.Numeric(0,{min:0,max:1,step:.01},{description:'Note, this only works in WebGL2 or when "EXT_shader_texture_lod" is available.'}),rotation:m.Group({x:m.Numeric(0,{min:0,max:360,step:1},{immediateUpdate:!0}),y:m.Numeric(0,{min:0,max:360,step:1},{immediateUpdate:!0}),z:m.Numeric(0,{min:0,max:360,step:1},{immediateUpdate:!0})}),...$o},Qs={source:m.MappedStatic("url",{url:m.Text(""),file:m.File({accept:"image/*"})}),blur:m.Numeric(0,{min:0,max:1,step:.01},{description:'Note, this only works in WebGL2 or with power-of-two images and when "EXT_shader_texture_lod" is available.'}),...$o,coverage:m.Select("viewport",m.arrayToOptions(["viewport","canvas"]))},Js={topColor:m.Color(14540253),bottomColor:m.Color(15658734),ratio:m.Numeric(.5,{min:0,max:1,step:.01}),coverage:m.Select("viewport",m.arrayToOptions(["viewport","canvas"]))},$s={centerColor:m.Color(14540253),edgeColor:m.Color(15658734),ratio:m.Numeric(.5,{min:0,max:1,step:.01}),coverage:m.Select("viewport",m.arrayToOptions(["viewport","canvas"]))},en={variant:m.MappedStatic("off",{off:m.EmptyGroup(),skybox:m.Group(_s,{isExpanded:!0}),image:m.Group(Qs,{isExpanded:!0}),horizontalGradient:m.Group(Js,{isExpanded:!0}),radialGradient:m.Group($s,{isExpanded:!0})},{label:"Environment"})},Ia=class{constructor(e,t,r,a){this.webgl=e;this.assetManager=t;this.camera=new We;this.target=b();this.position=b();this.dir=b();this.bgColor=b();this.renderable=ll(e,r,a)}setSize(e,t){let[r,a]=this.renderable.values.uTexSize.ref.value;(e!==r||t!==a)&&i.update(this.renderable.values.uTexSize,T.set(this.renderable.values.uTexSize.ref.value,e,t))}clearSkybox(){this.skybox!==void 0&&(this.skybox.texture.destroy(),this.skybox.assets.forEach(e=>this.assetManager.release(e)),this.skybox=void 0)}updateSkybox(e,t,r){let a=this.skybox?.props.faces,o=t.faces.params;if(!o.nx||!o.ny||!o.nz||!o.px||!o.py||!o.pz){this.clearSkybox(),r?.(!1);return}if(!this.skybox||!a||!rl(t.faces,this.skybox.props.faces)){this.clearSkybox();let{texture:p,assets:l}=al(this.webgl,this.assetManager,t.faces,c=>{this.skybox&&(this.skybox.loaded=!c),r?.(!0)});this.skybox={texture:p,props:{...t},assets:l,loaded:!1},i.update(this.renderable.values.tSkybox,p),this.renderable.update()}else r?.(!1);if(!this.skybox)return;let n=e;e.state.mode==="orthographic"&&(this.camera.setState({...e.state,mode:"perspective"}),this.camera.update(),n=this.camera);let s=this.renderable.values.uViewDirectionProjectionInverse.ref.value;B.isZero(e.headRotation)?(b.sub(this.dir,n.state.position,n.state.target),b.setMagnitude(this.dir,this.dir,.1),b.copy(this.position,this.dir),B.lookAt(s,this.position,this.target,n.state.up)):B.invert(s,e.headRotation),B.mul(s,n.projection,s),B.invert(s,s),i.update(this.renderable.values.uViewDirectionProjectionInverse,s);let f=this.renderable.values.uRotation.ref.value;$a.fromEuler(f,fo.create(Pt(t.rotation.x),Pt(t.rotation.y),Pt(t.rotation.z)),"XYZ"),i.update(this.renderable.values.uRotation,f),i.updateIfChanged(this.renderable.values.uBlur,t.blur),i.updateIfChanged(this.renderable.values.uOpacity,t.opacity),i.updateIfChanged(this.renderable.values.uSaturation,t.saturation),i.updateIfChanged(this.renderable.values.uLightness,t.lightness),i.updateIfChanged(this.renderable.values.dVariant,"skybox"),this.renderable.update()}clearImage(){this.image!==void 0&&(this.image.texture.destroy(),this.assetManager.release(this.image.asset),this.image=void 0)}updateImage(e,t){if(!e.source.params){this.clearImage(),t?.(!1);return}if(!this.image||!this.image.props.source.params||!il(e.source,this.image.props.source)){this.clearImage();let{texture:r,asset:a}=ol(this.webgl,this.assetManager,e.source,o=>{this.image&&(this.image.loaded=!o),t?.(!0)});this.image={texture:r,props:{...e},asset:a,loaded:!1},i.update(this.renderable.values.tImage,r),this.renderable.update()}else t?.(!1);this.image&&(i.updateIfChanged(this.renderable.values.uBlur,e.blur),i.updateIfChanged(this.renderable.values.uOpacity,e.opacity),i.updateIfChanged(this.renderable.values.uSaturation,e.saturation),i.updateIfChanged(this.renderable.values.uLightness,e.lightness),i.updateIfChanged(this.renderable.values.uViewportAdjusted,e.coverage==="viewport"),i.updateIfChanged(this.renderable.values.dVariant,"image"),this.renderable.update())}updateImageScaling(){let e=this.renderable.values,[t,r]=e.uTexSize.ref.value,a=this.image?.texture.getWidth()||0,o=this.image?.texture.getHeight()||0,n=t/r,s=a/o;n<s?i.update(e.uImageScale,T.set(e.uImageScale.ref.value,a*r/o,r)):i.update(e.uImageScale,T.set(e.uImageScale.ref.value,t,o*t/a));let[f,p]=e.uImageScale.ref.value,l=f/p;l>n?i.update(e.uImageOffset,T.set(e.uImageOffset.ref.value,(1-n/l)/2,0)):i.update(e.uImageOffset,T.set(e.uImageOffset.ref.value,0,(1-l/n)/2))}updateGradient(e,t,r,a,o){i.update(this.renderable.values.uGradientColorA,le.toVec3Normalized(this.renderable.values.uGradientColorA.ref.value,e)),i.update(this.renderable.values.uGradientColorB,le.toVec3Normalized(this.renderable.values.uGradientColorB.ref.value,t)),i.updateIfChanged(this.renderable.values.uGradientRatio,r),i.updateIfChanged(this.renderable.values.uViewportAdjusted,o),i.updateIfChanged(this.renderable.values.dVariant,a),this.renderable.update()}update(e,t,r){if(t.variant.name==="off"){this.clearSkybox(),this.clearImage(),r?.(!1);return}else t.variant.name==="skybox"?(this.clearImage(),this.updateSkybox(e,t.variant.params,r)):t.variant.name==="image"?(this.clearSkybox(),this.updateImage(t.variant.params,r)):t.variant.name==="horizontalGradient"?(this.clearSkybox(),this.clearImage(),this.updateGradient(t.variant.params.topColor,t.variant.params.bottomColor,t.variant.params.ratio,t.variant.name,t.variant.params.coverage==="viewport"),r?.(!1)):t.variant.name==="radialGradient"&&(this.clearSkybox(),this.clearImage(),this.updateGradient(t.variant.params.centerColor,t.variant.params.edgeColor,t.variant.params.ratio,t.variant.name,t.variant.params.coverage==="viewport"),r?.(!1));let{x:a,y:o,width:n,height:s}=e.viewport;i.update(this.renderable.values.uViewport,Oe.set(this.renderable.values.uViewport.ref.value,a,o,n,s))}_isEnabled(e){return!!(this.skybox&&this.skybox.loaded||this.image&&this.image.loaded||e.variant.name==="horizontalGradient"||e.variant.name==="radialGradient")}isEnabled(e){return e.enabled&&this._isEnabled(e.background)}isReady(){return!!(this.skybox&&this.skybox.loaded||this.image&&this.image.loaded||this.renderable.values.dVariant.ref.value==="horizontalGradient"||this.renderable.values.dVariant.ref.value==="radialGradient")}clear(e,t,r){let{gl:a,state:o}=this.webgl;this._isEnabled(e)?(t?o.clearColor(0,0,0,0):(le.toVec3Normalized(this.bgColor,r),o.clearColor(this.bgColor[0],this.bgColor[1],this.bgColor[2],1)),a.clear(a.COLOR_BUFFER_BIT),o.enable(a.BLEND),o.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA)):(le.toVec3Normalized(this.bgColor,r),o.clearColor(this.bgColor[0],this.bgColor[1],this.bgColor[2],1),a.clear(a.COLOR_BUFFER_BIT))}render(e){!this._isEnabled(e)||!this.isReady()||(this.renderable.values.dVariant.ref.value==="image"&&this.updateImageScaling(),k&&this.webgl.timer.mark("BackgroundPass.render"),this.renderable.render(),k&&this.webgl.timer.markEnd("BackgroundPass.render"))}dispose(){this.clearSkybox(),this.clearImage()}},Yo="background-skybox";function el(u,e){return e.name==="urls"?{nx:Cr.getUrlAsset(u,e.params.nx),ny:Cr.getUrlAsset(u,e.params.ny),nz:Cr.getUrlAsset(u,e.params.nz),px:Cr.getUrlAsset(u,e.params.px),py:Cr.getUrlAsset(u,e.params.py),pz:Cr.getUrlAsset(u,e.params.pz)}:{nx:e.params.nx,ny:e.params.ny,nz:e.params.nz,px:e.params.px,py:e.params.py,pz:e.params.pz}}function tl(u,e){let t=r=>u.resolve(r,"binary").run().then(a=>new Blob([a.data]));return{nx:t(e.nx),ny:t(e.ny),nz:t(e.nz),px:t(e.px),py:t(e.py),pz:t(e.pz)}}function _o(u){return u.name==="urls"?`${Yo}_${u.params.nx}|${u.params.ny}|${u.params.nz}|${u.params.px}|${u.params.py}|${u.params.pz}`:`${Yo}_${u.params.nx?.id}|${u.params.ny?.id}|${u.params.nz?.id}|${u.params.px?.id}|${u.params.py?.id}|${u.params.pz?.id}`}function rl(u,e){return _o(u)===_o(e)}function al(u,e,t,r){let a=el(e,t),o=tl(e,a),n=[a.nx,a.ny,a.nz,a.px,a.py,a.pz];return typeof HTMLImageElement>"u"?(console.error('Missing "HTMLImageElement" required for background skybox'),r?.(!0),{texture:hr(),assets:n}):{texture:u.resources.cubeTexture(o,!0,r),assets:n}}var Qo="background-image";function Jo(u){return u.name==="url"?`${Qo}_${u.params}`:`${Qo}_${u.params?.id}`}function il(u,e){return Jo(u)===Jo(e)}function ol(u,e,t,r){let a=t.name==="url"?e.tryFindFilename(t.params)??Cr.getUrlAsset(e,t.params):t.params;if(typeof HTMLImageElement>"u")return console.error('Missing "HTMLImageElement" required for background image'),r?.(!0),{texture:hr(),asset:a};let o=u.resources.texture("image-uint8","rgba","ubyte","linear"),n=new Image;return n.onload=()=>{o.load(n),(u.isWebGL2||ti(n.width)&&ti(n.height))&&o.mipmap(),r?.()},n.onerror=()=>{r?.(!0)},e.resolve(a,"binary").run().then(s=>{let f=new Blob([s.data]);n.src=URL.createObjectURL(f)}),{texture:o,asset:a}}var nl={drawCount:ii("number"),instanceCount:ii("number"),aPosition:Ji("float32",2,0),tSkybox:j("texture","rgba","ubyte","linear"),tImage:j("texture","rgba","ubyte","linear"),uImageScale:C("v2"),uImageOffset:C("v2"),uTexSize:C("v2"),uViewport:C("v4"),uViewportAdjusted:C("b"),uViewDirectionProjectionInverse:C("m4"),uGradientColorA:C("v3"),uGradientColorB:C("v3"),uGradientRatio:C("f"),uBlur:C("f"),uOpacity:C("f"),uSaturation:C("f"),uLightness:C("f"),uRotation:C("m3"),dVariant:ee("string",["skybox","image","verticalGradient","horizontalGradient","radialGradient"])},sl=he("background",Zo,Ko,{shaderTextureLod:"optional"});function ll(u,e,t){let r={drawCount:i.create(6),instanceCount:i.create(1),aPosition:i.create(uo),tSkybox:i.create(hr()),tImage:i.create(hr()),uImageScale:i.create(T()),uImageOffset:i.create(T()),uTexSize:i.create(T.create(e,t)),uViewport:i.create(Oe()),uViewportAdjusted:i.create(!0),uViewDirectionProjectionInverse:i.create(B()),uGradientColorA:i.create(b()),uGradientColorB:i.create(b()),uGradientRatio:i.create(.5),uBlur:i.create(0),uOpacity:i.create(1),uSaturation:i.create(0),uLightness:i.create(0),uRotation:i.create($a.identity()),dVariant:i.create("skybox")},a={...nl},o=me(u,"triangles",sl,a,r);return fe(o,r)}var tn=`
precision mediump float;
precision mediump sampler2D;

uniform sampler2D tColor;
uniform vec2 uTexSizeInv;

uniform float uSharpness;

// adapted from https://www.shadertoy.com/view/stXSWB

/*
* FidelityFX Super Resolution scales up a low resolution
* image, while adding fine detail.
*
* MIT Open License
*
* https://gpuopen.com/fsr
*
* Left: FSR processed
* Right: Original texture, bilinear interpolation
*
* Mouse at top: Sharpness 0 stops (maximum)
* Mouse at bottom: Sharpness 2 stops (minimum)
*
* It works in two passes-
*   EASU upsamples the image with a clamped Lanczos kernel.
*   RCAS sharpens the image at the target resolution.
*
* I needed to make a few changes to improve readability and
* WebGL compatibility in an algorithm I don't fully understand.
* Expect bugs.
*
* Shader not currently running for WebGL1 targets (eg. mobile Safari)
*
* There is kind of no point to using FSR in Shadertoy, as it renders buffers
* at full target resolution. But this might be useful for WebGL based demos
* running smaller-than-target render buffers.
*
* For sharpening with a full resolution render buffer,
* FidelityFX CAS is a better option.
* https://www.shadertoy.com/view/ftsXzM
*
* For readability and compatibility, these optimisations have been removed:
*   * Fast approximate inverse and inversesqrt
*   * textureGather fetches (not WebGL compatible)
*   * Multiplying by reciprocal instead of division
*
* Apologies to AMD for the numerous slowdowns and errors I have introduced.
*
*/

/***** RCAS *****/
#define FSR_RCAS_LIMIT (0.25-(1.0/16.0))

// Input callback prototypes that need to be implemented by calling shader
vec4 FsrRcasLoadF(vec2 p);
//------------------------------------------------------------------------------------------------------------------------------
void FsrRcasCon(
    out float con,
    // The scale is {0.0 := maximum, to N>0, where N is the number of stops (halving) of the reduction of sharpness}.
    float sharpness
) {
    // Transform from stops to linear value.
    con = exp2(-sharpness);
}

vec3 FsrRcasF(
    vec2 ip, // Integer pixel position in output.
    float con
) {
    // Constant generated by RcasSetup().
    // Algorithm uses minimal 3x3 pixel neighborhood.
    //    b
    //  d e f
    //    h
    vec2 sp = vec2(ip);
    vec3 b = FsrRcasLoadF(sp + vec2( 0,-1)).rgb;
    vec3 d = FsrRcasLoadF(sp + vec2(-1, 0)).rgb;
    vec3 e = FsrRcasLoadF(sp).rgb;
    vec3 f = FsrRcasLoadF(sp + vec2( 1, 0)).rgb;
    vec3 h = FsrRcasLoadF(sp + vec2( 0, 1)).rgb;

    // Luma times 2.
    float bL = b.g + .5 * (b.b + b.r);
    float dL = d.g + .5 * (d.b + d.r);
    float eL = e.g + .5 * (e.b + e.r);
    float fL = f.g + .5 * (f.b + f.r);
    float hL = h.g + .5 * (h.b + h.r);

    // Noise detection.
    #ifdef dDenoise
        float nz = .25 * (bL + dL + fL + hL) - eL;
        nz=clamp(
            abs(nz)
            /(
                max(max(bL,dL),max(eL,max(fL,hL)))
                -min(min(bL,dL),min(eL,min(fL,hL)))
            ),
            0., 1.
        );
        nz=1.-.5*nz;
    #endif

    // Min and max of ring.
    vec3 mn4 = min(b, min(f, h));
    vec3 mx4 = max(b, max(f, h));

    // Immediate constants for peak range.
    vec2 peakC = vec2(1., -4.);

    // Limiters, these need to be high precision RCPs.
    vec3 hitMin = mn4 / (4. * mx4);
    vec3 hitMax = (peakC.x - mx4) / (4.* mn4 + peakC.y);
    vec3 lobeRGB = max(-hitMin, hitMax);
    float lobe = max(
        -FSR_RCAS_LIMIT,
        min(max(lobeRGB.r, max(lobeRGB.g, lobeRGB.b)), 0.)
    )*con;

    // Apply noise removal.
    #ifdef dDenoise
        lobe *= nz;
    #endif

    // Resolve, which needs the medium precision rcp approximation to avoid visible tonality changes.
    return (lobe * (b + d + h + f) + e) / (4. * lobe + 1.);
}


vec4 FsrRcasLoadF(vec2 p) {
    return texture2D(tColor, p * uTexSizeInv);
}

void main() {
    // Set up constants
    float con;
    FsrRcasCon(con, uSharpness);

    // Perform RCAS pass
    vec3 col = FsrRcasF(gl_FragCoord.xy, con);

    gl_FragColor = vec4(col, FsrRcasLoadF(gl_FragCoord.xy).a);
}
`;var rn={sharpness:m.Numeric(.5,{min:0,max:1,step:.05}),denoise:m.Boolean(!0)},Aa=class{constructor(e,t){this.webgl=e;this.renderable=dl(e,t)}updateState(e){let{gl:t,state:r}=this.webgl;r.enable(t.SCISSOR_TEST),r.disable(t.BLEND),r.disable(t.DEPTH_TEST),r.depthMask(!1);let{x:a,y:o,width:n,height:s}=e;r.viewport(a,o,n,s),r.scissor(a,o,n,s),r.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT)}setSize(e,t){i.update(this.renderable.values.uTexSizeInv,T.set(this.renderable.values.uTexSizeInv.ref.value,1/e,1/t))}update(e,t){let{values:r}=this.renderable,{sharpness:a,denoise:o}=t,n=!1;r.tColor.ref.value!==e&&(i.update(this.renderable.values.tColor,e),n=!0),i.updateIfChanged(r.uSharpness,2-2*Math.pow(a,.25)),r.dDenoise.ref.value!==o&&(n=!0),i.updateIfChanged(r.dDenoise,o),n&&this.renderable.update()}render(e,t){k&&this.webgl.timer.mark("CasPass.render"),t?t.bind():this.webgl.bindDrawingBuffer(),this.updateState(e),this.renderable.render(),k&&this.webgl.timer.markEnd("CasPass.render")}},ul={...be,tColor:j("texture","rgba","ubyte","linear"),uTexSizeInv:C("v2"),uSharpness:C("f"),dDenoise:ee("boolean")},cl=he("cas",Te,tn);function dl(u,e){let t=e.getWidth(),r=e.getHeight(),a={...ve,tColor:i.create(e),uTexSizeInv:i.create(T.create(1/t,1/r)),uSharpness:i.create(.5),dDenoise:i.create(!0)},o={...ul},n=me(u,"triangles",cl,o,a);return fe(n,a)}var an=`
precision highp float;
precision highp int;
precision highp sampler2D;

#include common

uniform sampler2D tColor;
uniform sampler2D tDepthOpaque;
uniform sampler2D tDepthTransparent;

uniform vec2 uTexSize;
uniform vec4 uBounds;

uniform float uBlurSpread;
uniform float uInFocus;
uniform float uPPM;

uniform float uNear; // Near plane
uniform float uFar;  // Far plane

uniform mat4 uInvProjection; // Inverse projection
uniform mat4 uProjection; // projection

uniform int uMode; // 0-planar, 1-spherical
uniform vec3 uCenter; // Center of focus sphere in view space

// Function to convert depth value from depth buffer to view space Z
float getViewZ(const in float depth) {
    #if dOrthographic == 1
        return orthographicDepthToViewZ(depth, uNear, uFar);
    #else
        return perspectiveDepthToViewZ(depth, uNear, uFar);
    #endif
}

// Retrieve depth from opaque depth texture
float getDepthOpaque(const in vec2 coords) {
    #ifdef depthTextureSupport
        return texture2D(tDepthOpaque, coords).r;
    #else
        return unpackRGBAToDepth(texture2D(tDepthOpaque, coords));
    #endif
}

// Retrieve depth from transparent depth texture
float getDepthTransparent(const in vec2 coords) {
    return unpackRGBAToDepthWithAlpha(texture2D(tDepthTransparent, coords)).x;
}

bool isBackground(const in float depth) {
    return depth == 1.0;
}

float getDepth(const in vec2 coords) {
    return min(getDepthOpaque(coords), getDepthTransparent(coords));
}

float getCOC(vec2 uv) {
    float depth = getDepth(uv);
    float viewDist = getViewZ(depth);
    vec3 aposition = screenSpaceToViewSpace(vec3(uv.xy, depth), uInvProjection);
    float focusDist = length(aposition - uCenter);
    float coc = 0.0;  // Circle of Confusion
    if (uMode == 0) { // planar Depth of field
        coc = (abs(viewDist) - uInFocus) / uPPM;  //focus distance, focus range
    } else if(uMode == 1) { // spherical Depth of field
        coc = focusDist / uPPM ;
    }
    coc = clamp(coc, -1.0, 1.0);
    return coc;
}

// Simple box blur for blurring the image
vec3 getBlurredImage(vec2 coords) {
    vec4 blurColor = vec4(0);
    vec2 texelSize = vec2(1.0 / uTexSize.x, 1.0 / uTexSize.y);
    float count = 0.0;
    for (int x = 0; x < int(dBlurSize); x++) {
        for (int y = 0; y < int(dBlurSize); y++) {
            vec2 offset = vec2(float(x) - float(dBlurSize) / 2.0, float(y) - float(dBlurSize) / 2.0);
            vec2 uvPixel = coords.xy + offset * texelSize * uBlurSpread;
            float coc = getCOC(uvPixel);
            coc = smoothstep(0.0, 1.0, abs(coc));
            // mix blurColor with new color with weight coc
            blurColor.rgb = blurColor.rgb + texture2D(tColor, uvPixel).xyz * coc;
            count+=coc;
        }
    }
    blurColor = blurColor / count;
    return blurColor.rgb;
}

// simplification from https://catlikecoding.com/unity/tutorials/advanced-rendering/depth-of-field/
void main() {
    vec2 uv = gl_FragCoord.xy / uTexSize;
    vec4 color = texture2D(tColor, uv);
    float depth = getDepth(uv);

    float viewDist = getViewZ(depth);

    vec3 aposition = screenSpaceToViewSpace(vec3(uv.xy, depth), uInvProjection);
    float focusDist = length(aposition - uCenter);
    vec3 blurColor = getBlurredImage(uv);

    float coc = getCOC(uv); // Circle of Confusion

    // for debugging the coc
    // color.rgb = (coc < 0.0) ? (1.0 - abs(coc)) * vec3(1.0,0.0,0.0) : vec3(0.0, 1.0 - coc, 0.0) ;//mix(color.rgb, blurColor.rgb, abs(coc));
    color.rgb = mix(color.rgb, blurColor, smoothstep(0.0, 1.0, abs(coc))); // Smooth blending based on CoC
    gl_FragColor = color;
}
`;var on={blurSize:m.Numeric(9,{min:1,max:32,step:1}),blurSpread:m.Numeric(1,{min:0,max:10,step:.1}),inFocus:m.Numeric(0,{min:-5e3,max:5e3,step:1},{description:"Distance from the scene center that will be in focus"}),PPM:m.Numeric(20,{min:0,max:5e3,step:.1},{description:"Size of the area that will be in focus"}),center:m.Select("camera-target",m.arrayToOptions(["scene-center","camera-target"])),mode:m.Select("plane",m.arrayToOptions(["plane","sphere"]))},ar=class{constructor(e,t,r){this.webgl=e;this.target=e.createRenderTarget(t,r,"none");let a=hr();this.renderable=hl(e,a,a,a)}static isEnabled(e){return e.enabled&&e.dof.name!=="off"}getByteCount(){return this.target.getByteCount()}updateState(e){let{gl:t,state:r}=this.webgl;r.enable(t.SCISSOR_TEST),r.disable(t.BLEND),r.disable(t.DEPTH_TEST),r.depthMask(!1);let{x:a,y:o,width:n,height:s}=e;r.viewport(a,o,n,s),r.scissor(a,o,n,s),r.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT)}setSize(e,t){let r=this.target.texture.getWidth(),a=this.target.texture.getHeight();(e!==r||t!==a)&&(this.target.setSize(e,t),i.update(this.renderable.values.uTexSize,T.set(this.renderable.values.uTexSize.ref.value,e,t)))}update(e,t,r,a,o,n){let s=!1;this.renderable.values.tColor.ref.value!==t&&(i.update(this.renderable.values.tColor,t),s=!0),this.renderable.values.tDepthOpaque.ref.value!==r&&(i.update(this.renderable.values.tDepthOpaque,r),s=!0),this.renderable.values.tDepthTransparent.ref.value!==a&&(i.update(this.renderable.values.tDepthTransparent,a),s=!0);let f=e.state.mode==="orthographic"?1:0,p=this.renderable.values.uInvProjection.ref.value;B.invert(p,e.projection);let[l,c]=this.renderable.values.uTexSize.ref.value,d=e.viewport;i.update(this.renderable.values.uProjection,e.projection),i.update(this.renderable.values.uInvProjection,p),i.update(this.renderable.values.uMode,o.mode==="sphere"?1:0),Oe.set(this.renderable.values.uBounds.ref.value,d.x/l,d.y/c,(d.x+d.width)/l,(d.y+d.height)/c),i.update(this.renderable.values.uBounds,this.renderable.values.uBounds.ref.value),i.updateIfChanged(this.renderable.values.uNear,e.near),i.updateIfChanged(this.renderable.values.uFar,e.far),i.updateIfChanged(this.renderable.values.dOrthographic,f);let g=Math.round(o.blurSize*this.webgl.pixelRatio);this.renderable.values.dBlurSize.ref.value!==g&&(i.update(this.renderable.values.dBlurSize,g),s=!0);let x=o.center==="scene-center"?n.center:e.state.target,S=b.distance(e.state.position,x)+o.inFocus;i.updateIfChanged(this.renderable.values.uInFocus,S*e.scale);let P=this.renderable.values.uCenter.ref.value;b.transformMat4(P,x,e.view),i.update(this.renderable.values.uCenter,P),i.updateIfChanged(this.renderable.values.uBlurSpread,o.blurSpread),i.updateIfChanged(this.renderable.values.uPPM,o.PPM*e.scale),s&&this.renderable.update()}render(e,t){k&&this.webgl.timer.mark("DofPass.render"),t?t.bind():this.webgl.bindDrawingBuffer(),this.updateState(e),this.renderable.render(),k&&this.webgl.timer.markEnd("DofPass.render")}},pl={...be,tDepthOpaque:j("texture","rgba","ubyte","nearest"),tDepthTransparent:j("texture","rgba","ubyte","nearest"),tColor:j("texture","rgba","ubyte","nearest"),uTexSize:C("v2"),uProjection:C("m4"),uInvProjection:C("m4"),uBounds:C("v4"),uCenter:C("v3"),uMode:C("i"),dOrthographic:ee("number"),uNear:C("f"),uFar:C("f"),dBlurSize:ee("number"),uBlurSpread:C("f"),uInFocus:C("f"),uPPM:C("f")},fl=he("dof",Te,an);function hl(u,e,t,r){let a=e.getWidth(),o=e.getHeight(),n={...ve,tDepthOpaque:i.create(t),tDepthTransparent:i.create(r),tColor:i.create(e),uTexSize:i.create(T.create(a,o)),uProjection:i.create(B.identity()),uInvProjection:i.create(B.identity()),uBounds:i.create(Oe()),uCenter:i.create(b()),uMode:i.create(0),dOrthographic:i.create(0),uNear:i.create(1),uFar:i.create(1e4),dBlurSize:i.create(5),uBlurSpread:i.create(300),uInFocus:i.create(20),uPPM:i.create(20)},s={...pl},f=me(u,"triangles",fl,s,n);return fe(f,n)}var nn=`
precision highp float;
precision highp int;
precision highp sampler2D;

uniform sampler2D tDepthOpaque;
uniform sampler2D tDepthTransparent;
uniform vec2 uTexSize;

uniform float uNear;
uniform float uFar;
uniform mat4 uInvProjection;

uniform float uOutlineThreshold;

#include common

float getViewZ(const in float depth) {
    #if dOrthographic == 1
        return orthographicDepthToViewZ(depth, uNear, uFar);
    #else
        return perspectiveDepthToViewZ(depth, uNear, uFar);
    #endif
}

float getDepthOpaque(const in vec2 coords) {
    #ifdef depthTextureSupport
        return texture2D(tDepthOpaque, coords).r;
    #else
        return unpackRGBAToDepth(texture2D(tDepthOpaque, coords));
    #endif
}

vec2 getDepthTransparentWithAlpha(const in vec2 coords) {
    #ifdef dTransparentOutline
        return unpackRGBAToDepthWithAlpha(texture2D(tDepthTransparent, coords));
    #else
        return vec2(1.0, 0.0);
    #endif
}

bool isBackground(const in float depth) {
    return depth == 1.0;
}

float getPixelSize(const in vec2 coords, const in float depth) {
    vec3 viewPos0 = screenSpaceToViewSpace(vec3(coords, depth), uInvProjection);
    vec3 viewPos1 = screenSpaceToViewSpace(vec3(coords + vec2(1.0, 0.0) / uTexSize, depth), uInvProjection);
    return distance(viewPos0, viewPos1);
}

void main(void) {
    float backgroundViewZ = 2.0 * uFar;

    vec2 coords = gl_FragCoord.xy / uTexSize;
    vec2 invTexSize = 1.0 / uTexSize;

    float selfDepthOpaque = getDepthOpaque(coords);
    float selfViewZOpaque = isBackground(selfDepthOpaque) ? backgroundViewZ : getViewZ(selfDepthOpaque);
    float pixelSizeOpaque = getPixelSize(coords, selfDepthOpaque) * uOutlineThreshold;

    vec2 selfDepthTransparentWithAlpha = getDepthTransparentWithAlpha(coords);
    float selfDepthTransparent = selfDepthTransparentWithAlpha.x;
    float selfViewZTransparent = isBackground(selfDepthTransparent) ? backgroundViewZ : getViewZ(selfDepthTransparent);
    float pixelSizeTransparent = getPixelSize(coords, selfDepthTransparent) * uOutlineThreshold;

    float bestOpaqueDepth = 1.0;
    float bestTransparentDepth = 1.0;
    float bestTransparentAlpha = 0.0;

    float opaqueOutlineFlag = 0.0;
    float transparentOutlineFlag = 0.0;

    for (int y = -1; y <= 1; y++) {
        for (int x = -1; x <= 1; x++) {
            vec2 sampleCoords = coords + vec2(float(x), float(y)) * invTexSize;

            // Opaque
            float sampleDepthOpaque = getDepthOpaque(sampleCoords);
            float sampleViewZOpaque = isBackground(sampleDepthOpaque) ? backgroundViewZ : getViewZ(sampleDepthOpaque);
            if (abs(selfViewZOpaque - sampleViewZOpaque) > pixelSizeOpaque && selfDepthOpaque > sampleDepthOpaque && sampleDepthOpaque <= bestOpaqueDepth) {
                bestOpaqueDepth = sampleDepthOpaque;
                opaqueOutlineFlag = 1.0;
            }

            // Transparent
            vec2 sampleDepthTransparentWithAlpha = getDepthTransparentWithAlpha(sampleCoords);
            float sampleDepthTransparent = sampleDepthTransparentWithAlpha.x;
            float sampleAlphaTransparent = sampleDepthTransparentWithAlpha.y;
            float sampleViewZTransparent = isBackground(sampleDepthTransparent) ? backgroundViewZ : getViewZ(sampleDepthTransparent);
            if (abs(selfViewZTransparent - sampleViewZTransparent) > pixelSizeTransparent && selfDepthTransparent > sampleDepthTransparent && sampleDepthTransparent <= bestTransparentDepth) {
                bestTransparentDepth = sampleDepthTransparent;
                bestTransparentAlpha = sampleAlphaTransparent;
                transparentOutlineFlag = 1.0;
            }
        }
    }

    if (transparentOutlineFlag > 0.0 && abs(selfViewZOpaque - getViewZ(bestTransparentDepth)) < pixelSizeOpaque) { // Disable transparent outline close to opaque elements
        transparentOutlineFlag = 0.0;
    }

    // lazy curvature veto: only compute if an outline was found and center is not background
    const float kCurvatureGate = 0.75;
    vec2 dx = vec2(invTexSize.x, 0.0);
    vec2 dy = vec2(0.0, invTexSize.y);

    if (opaqueOutlineFlag > 0.0 && !isBackground(selfDepthOpaque)) {
        float dL = getDepthOpaque(coords - dx);
        float dR = getDepthOpaque(coords + dx);
        float dU = getDepthOpaque(coords + dy);
        float dD = getDepthOpaque(coords - dy);

        float vzL = isBackground(dL) ? backgroundViewZ : getViewZ(dL);
        float vzR = isBackground(dR) ? backgroundViewZ : getViewZ(dR);
        float vzU = isBackground(dU) ? backgroundViewZ : getViewZ(dU);
        float vzD = isBackground(dD) ? backgroundViewZ : getViewZ(dD);

        float ddx = abs(vzL + vzR - 2.0 * selfViewZOpaque);
        float ddy = abs(vzU + vzD - 2.0 * selfViewZOpaque);
        float curvOpaque = max(ddx, ddy);

        if (curvOpaque < pixelSizeOpaque * kCurvatureGate) {
            opaqueOutlineFlag = 0.0;
            bestOpaqueDepth = 1.0;
        }
    }

    if (transparentOutlineFlag > 0.0 && !isBackground(selfDepthTransparent)) {
        vec2 daL = getDepthTransparentWithAlpha(coords - dx);
        vec2 daR = getDepthTransparentWithAlpha(coords + dx);
        vec2 daU = getDepthTransparentWithAlpha(coords + dy);
        vec2 daD = getDepthTransparentWithAlpha(coords - dy);

        float dL = daL.x;
        float dR = daR.x;
        float dU = daU.x;
        float dD = daD.x;

        float vzL = isBackground(dL) ? backgroundViewZ : getViewZ(dL);
        float vzR = isBackground(dR) ? backgroundViewZ : getViewZ(dR);
        float vzU = isBackground(dU) ? backgroundViewZ : getViewZ(dU);
        float vzD = isBackground(dD) ? backgroundViewZ : getViewZ(dD);

        float ddx = abs(vzL + vzR - 2.0 * selfViewZTransparent);
        float ddy = abs(vzU + vzD - 2.0 * selfViewZTransparent);
        float curvTransparent = max(ddx, ddy);

        if (curvTransparent < pixelSizeTransparent * kCurvatureGate) {
            transparentOutlineFlag = 0.0;
            bestTransparentDepth = 1.0;
            bestTransparentAlpha = 0.0;
        }
    }

    vec2 depthPacked; // Pack depth in G/B channels
    float outlineTypeFlag = 0.0;
    if (opaqueOutlineFlag > 0.0 && transparentOutlineFlag > 0.0) {
        outlineTypeFlag = 0.75; // Both
        depthPacked = packUnitIntervalToRG(bestOpaqueDepth);
    } else if (transparentOutlineFlag > 0.0) {
        outlineTypeFlag = 0.5;  // Transparent only
        depthPacked = packUnitIntervalToRG(bestTransparentDepth);
    } else if (opaqueOutlineFlag > 0.0) {
        outlineTypeFlag = 0.25; // Opaque only
        depthPacked = packUnitIntervalToRG(bestOpaqueDepth);
    }

    float alpha = clamp(bestTransparentAlpha, 0.0, 0.5) * 2.0; // limiting to range [0.0, 0.5] to improve alpha precision since we don't need a wider range
    float packedFlagWithAlpha = pack2x4(vec2(outlineTypeFlag, alpha)); // pack outlineType with alpha
    gl_FragColor = vec4(packedFlagWithAlpha, depthPacked.x, depthPacked.y, bestTransparentDepth);
}
`;var sn={scale:m.Numeric(1,{min:1,max:5,step:1}),threshold:m.Numeric(.33,{min:.01,max:1,step:.01}),color:m.Color(0),includeTransparent:m.Boolean(!0,{description:"Whether to show outline for transparent objects"})},dr=class{constructor(e,t,r,a,o){this.webgl=e;this.target=e.createRenderTarget(t,r,"none"),this.renderable=gl(e,o,a,!0)}static isEnabled(e){return e.enabled&&e.outline.name!=="off"}getByteCount(){return this.target.getByteCount()}setSize(e,t){let[r,a]=this.renderable.values.uTexSize.ref.value;(e!==r||t!==a)&&(this.target.setSize(e,t),i.update(this.renderable.values.uTexSize,T.set(this.renderable.values.uTexSize.ref.value,e,t)))}update(e,t,r,a){let o=!1,n=e.state.mode==="orthographic"?1:0,s=this.renderable.values.uInvProjection.ref.value;B.invert(s,e.projection);let f=t.includeTransparent??!0,p=Math.max(1,Math.round(t.scale*this.webgl.pixelRatio))-1,l=50*t.threshold*this.webgl.pixelRatio;return i.updateIfChanged(this.renderable.values.uNear,e.near),i.updateIfChanged(this.renderable.values.uFar,e.far),i.update(this.renderable.values.uInvProjection,s),this.renderable.values.dTransparentOutline.ref.value!==f&&(o=!0,i.update(this.renderable.values.dTransparentOutline,f)),this.renderable.values.dOrthographic.ref.value!==n&&(o=!0,i.update(this.renderable.values.dOrthographic,n)),i.updateIfChanged(this.renderable.values.uOutlineThreshold,l),this.renderable.values.tDepthTransparent.ref.value!==r&&(o=!0,i.update(this.renderable.values.tDepthTransparent,r)),this.renderable.values.tDepthOpaque.ref.value!==a&&(o=!0,i.update(this.renderable.values.tDepthOpaque,a)),o&&this.renderable.update(),{transparentOutline:f,outlineScale:p}}render(){k&&this.webgl.timer.mark("OutlinePass.render"),this.target.bind(),this.renderable.render(),k&&this.webgl.timer.markEnd("OutlinePass.render")}},ml={...be,tDepthOpaque:j("texture","rgba","ubyte","nearest"),tDepthTransparent:j("texture","rgba","ubyte","nearest"),uTexSize:C("v2"),dOrthographic:ee("number"),uNear:C("f"),uFar:C("f"),uInvProjection:C("m4"),uOutlineThreshold:C("f"),dTransparentOutline:ee("boolean")};function gl(u,e,t,r){let a=e.getWidth(),o=e.getHeight(),n={...ve,tDepthOpaque:i.create(e),tDepthTransparent:i.create(t),uTexSize:i.create(T.create(a,o)),dOrthographic:i.create(0),uNear:i.create(1),uFar:i.create(1e4),uInvProjection:i.create(B.identity()),uOutlineThreshold:i.create(.33),dTransparentOutline:i.create(r)},s={...ml},f=he("outlines",Te,nn),p=me(u,"triangles",f,s,n);return fe(p,n)}var ln=`
precision highp float;
precision highp int;
precision highp sampler2D;

#include common

uniform sampler2D tDepth;
uniform vec2 uTexSize;
uniform vec4 uBounds;

uniform float uNear;
uniform float uFar;

#if dLightCount != 0
    uniform vec3 uLightDirection[dLightCount];
    uniform vec3 uLightColor[dLightCount];
#endif

uniform vec3 uAmbientColor;

uniform mat4 uProjection;
uniform mat4 uInvProjection;

uniform float uMaxDistance;
uniform float uTolerance;

// Map full [0,1] coords -> bounds [0,1] coords
vec2 fullCoordsToBoundsCoords(vec2 fullCoords) {
    return (fullCoords - uBounds.xy) / (uBounds.zw - uBounds.xy);
}

// Map bounds [0,1] coords -> full [0,1] coords
vec2 boundsCoordsToFullCoords(vec2 boundsCoords) {
    return uBounds.xy + (uBounds.zw - uBounds.xy) * boundsCoords;
}

bool isBackground(const in float depth) {
    return depth == 1.0;
}

bool outsideBounds(const in vec2 p) {
    return p.x < uBounds.x || p.y < uBounds.y || p.x > uBounds.z || p.y > uBounds.w;
}

float getViewZ(const in float depth) {
    #if dOrthographic == 1
        return orthographicDepthToViewZ(depth, uNear, uFar);
    #else
        return perspectiveDepthToViewZ(depth, uNear, uFar);
    #endif
}

float getDepth(const in vec2 coords) {
    #ifdef depthTextureSupport
        return texture2D(tDepth, coords).r;
    #else
        return unpackRGBAToDepth(texture2D(tDepth, coords));
    #endif
}

float screenFade(const in vec2 coords) {
    vec2 c = (coords - uBounds.xy) / (uBounds.zw - uBounds.xy);
    vec2 fade = max(12.0 * abs(c - 0.5) - 5.0, vec2(0.0));
    return saturate(1.0 - dot(fade, fade));
}

// based on https://panoskarabelas.com/posts/screen_space_shadows/
vec3 screenSpaceShadow(const in vec3 position, const in vec3 lightDirection, const in vec3 lightColor, const in float stepLength) {
    // Ray position and direction (in view-space)
    vec3 rayPos = position;
    vec3 rayDir = -lightDirection;

    // Compute ray step
    vec3 rayStep = rayDir * stepLength;

    // Ray march towards the light
    vec4 rayCoords = vec4(0.0);
    for (int i = 0; i < dSteps; ++i) {
        // Step the ray
        rayPos += rayStep;

        rayCoords = uProjection * vec4(rayPos, 1.0);
        rayCoords.xyz = (rayCoords.xyz / rayCoords.w) * 0.5 + 0.5;
        rayCoords.xy = boundsCoordsToFullCoords(rayCoords.xy);

        if (outsideBounds(rayCoords.xy)) {
            return lightColor;
        }

        // Compute the difference between the ray's and the camera's depth
        float depth = getDepth(rayCoords.xy);
        float viewZ = getViewZ(depth);
        float zDelta = rayPos.z - viewZ;

        if (zDelta < uTolerance) {
            // Fade out as we approach the edges of the screen
            return mix(vec3(0.0), lightColor, 1.0 - screenFade(rayCoords.xy));
        }
    }

    return lightColor;
}

void main(void) {
    vec2 invTexSize = 1.0 / uTexSize;
    vec2 selfCoords = gl_FragCoord.xy * invTexSize;
    float selfDepth = getDepth(selfCoords);

    if (isBackground(selfDepth)) {
        gl_FragColor = vec4(0.0);
        return;
    }

    vec2 selfBoundsCoords = fullCoordsToBoundsCoords(selfCoords);
    if (any(lessThan(selfBoundsCoords, vec2(0.0))) || any(greaterThan(selfBoundsCoords, vec2(1.0)))) {
        gl_FragColor = vec4(0.0);
        return;
    }

    vec3 selfViewPos = screenSpaceToViewSpace(vec3(selfBoundsCoords, selfDepth), uInvProjection);
    float stepLength = uMaxDistance / float(dSteps);

    float l = length(uAmbientColor);
    float a = l;
    #if dLightCount != 0
        vec3 s;
        #pragma unroll_loop_start
        for (int i = 0; i < dLightCount; ++i) {
            s = screenSpaceShadow(selfViewPos, uLightDirection[i], uLightColor[i], stepLength);
            l += length(s);
            a += length(uLightColor[i]);
        }
        #pragma unroll_loop_end
    #endif

    gl_FragColor = vec4(l / a);
}
`;var un={steps:m.Numeric(1,{min:1,max:64,step:1}),maxDistance:m.Numeric(3,{min:0,max:256,step:1}),tolerance:m.Numeric(1,{min:0,max:10,step:.1})},Ur=class{constructor(e,t,r,a){this.webgl=e;this.invProjection=B.identity();this.invHeadRotation=B.identity();this.target=e.createRenderTarget(t,r,"none"),this.renderable=vl(e,a)}static isEnabled(e){return e.enabled&&e.shadow.name!=="off"}getByteCount(){return this.target.getByteCount()}setSize(e,t){let[r,a]=this.renderable.values.uTexSize.ref.value;(e!==r||t!==a)&&(this.target.setSize(e,t),i.update(this.renderable.values.uTexSize,T.set(this.renderable.values.uTexSize.ref.value,e,t)))}update(e,t,r,a){let o=!1,n=e.state.mode==="orthographic"?1:0,[s,f]=this.renderable.values.uTexSize.ref.value,p=e.viewport;i.update(this.renderable.values.uProjection,e.projection),i.update(this.renderable.values.uInvProjection,B.invert(this.invProjection,e.projection)),Oe.set(this.renderable.values.uBounds.ref.value,p.x/s,p.y/f,(p.x+p.width)/s,(p.y+p.height)/f),i.update(this.renderable.values.uBounds,this.renderable.values.uBounds.ref.value),i.updateIfChanged(this.renderable.values.uNear,e.near),i.updateIfChanged(this.renderable.values.uFar,e.far),this.renderable.values.dOrthographic.ref.value!==n&&(i.update(this.renderable.values.dOrthographic,n),o=!0),i.updateIfChanged(this.renderable.values.uMaxDistance,a.maxDistance*e.scale),i.updateIfChanged(this.renderable.values.uTolerance,a.tolerance*e.scale),this.renderable.values.dSteps.ref.value!==a.steps&&(i.update(this.renderable.values.dSteps,a.steps),o=!0),!B.isZero(e.headRotation)?i.update(this.renderable.values.uLightDirection,fi(t,B.invert(this.invHeadRotation,e.headRotation))):i.update(this.renderable.values.uLightDirection,t.direction),i.update(this.renderable.values.uLightColor,t.color),this.renderable.values.dLightCount.ref.value!==t.count&&(i.update(this.renderable.values.dLightCount,t.count),o=!0),i.update(this.renderable.values.uAmbientColor,r),o&&this.renderable.update()}render(){k&&this.webgl.timer.mark("ShadowPass.render"),this.target.bind(),this.renderable.render(),k&&this.webgl.timer.markEnd("ShadowPass.render")}},bl={...be,tDepth:j("texture","rgba","ubyte","nearest"),uTexSize:C("v2"),uProjection:C("m4"),uInvProjection:C("m4"),uBounds:C("v4"),dOrthographic:ee("number"),uNear:C("f"),uFar:C("f"),dSteps:ee("number"),uMaxDistance:C("f"),uTolerance:C("f"),uLightDirection:C("v3[]"),uLightColor:C("v3[]"),dLightCount:ee("number"),uAmbientColor:C("v3")};function vl(u,e){let t=e.getWidth(),r=e.getHeight(),a={...ve,tDepth:i.create(e),uTexSize:i.create(T.create(t,r)),uProjection:i.create(B.identity()),uInvProjection:i.create(B.identity()),uBounds:i.create(Oe()),dOrthographic:i.create(0),uNear:i.create(1),uFar:i.create(1e4),dSteps:i.create(1),uMaxDistance:i.create(3),uTolerance:i.create(1),uLightDirection:i.create([]),uLightColor:i.create([]),dLightCount:i.create(0),uAmbientColor:i.create(b())},o={...bl},n=he("shadows",Te,ln),s=me(u,"triangles",n,o,a);return fe(s,a)}var cn=`
precision highp float;
precision highp int;
precision highp sampler2D;

#include common


uniform sampler2D tDepth;
uniform sampler2D tDepthHalf;
uniform sampler2D tDepthQuarter;

#if defined(dIncludeTransparent)
    uniform sampler2D tDepthTransparent;
    uniform sampler2D tDepthHalfTransparent;
    uniform sampler2D tDepthQuarterTransparent;
#endif

uniform int uTransparencyFlag;

uniform vec2 uTexSize;
uniform vec4 uBounds;

uniform vec3 uSamples[dNSamples];

uniform mat4 uProjection;
uniform mat4 uInvProjection;

#ifdef dMultiScale
    uniform float uLevelRadius[dLevels];
    uniform float uLevelBias[dLevels];
    uniform float uNearThreshold;
    uniform float uFarThreshold;
#else
    uniform float uRadius;
#endif
uniform float uBias;

float smootherstep(float edge0, float edge1, float x) {
    x = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
    return x * x * x * (x * (x * 6.0 - 15.0) + 10.0);
}

float noise(const in vec2 coords) {
    float a = 12.9898;
    float b = 78.233;
    float c = 43758.5453;
    float dt = dot(coords, vec2(a,b));
    float sn = mod(dt, PI);
    return abs(fract(sin(sn) * c)); // is abs necessary?
}

vec2 getNoiseVec2(const in vec2 coords) {
    return vec2(noise(coords), noise(coords + vec2(PI, 2.71828)));
}

bool isBackground(const in float depth) {
    return depth == 1.0;
}

// inset by half a texel to avoid sampling texels outside the viewport
vec2 clampToBounds(const in vec2 coords) {
    vec2 halfTexel = 0.5 / uTexSize;
    return clamp(coords, uBounds.xy + halfTexel, uBounds.zw - halfTexel);
}

float getDepth(const in vec2 coords, const in int transparentFlag) {
    if (transparentFlag == 1){
        #if defined(dIncludeTransparent)
            return unpackRGBAToDepthWithAlpha(texture2D(tDepthTransparent, coords)).x;
        #else
            return 1.0;
        #endif
    } else {
        #ifdef depthTextureSupport
            return texture2D(tDepth, coords).r;
        #else
            return unpackRGBAToDepth(texture2D(tDepth, coords));
        #endif
    }
}

#if defined(dIncludeTransparent)
    vec2 getDepthTransparentWithAlpha(const in vec2 coords){
        return unpackRGBAToDepthWithAlpha(texture2D(tDepthTransparent, coords));
    }
#endif

#define dQuarterThreshold 0.1
#define dHalfThreshold 0.05

float getMappedDepth(const in vec2 coords, const in vec2 selfCoords) {
    float d = distance(coords, selfCoords);
    #ifdef depthTextureSupport
        if (d > dQuarterThreshold) {
            return texture2D(tDepthQuarter, coords).r;
        } else if (d > dHalfThreshold) {
            return texture2D(tDepthHalf, coords).r;
        } else {
            return texture2D(tDepth, coords).r;
        }
    #else
        if (d > dQuarterThreshold) {
            return unpackRGBAToDepth(texture2D(tDepthQuarter, coords));
        } else if (d > dHalfThreshold) {
            return unpackRGBAToDepth(texture2D(tDepthHalf, coords));
        } else {
            return unpackRGBAToDepth(texture2D(tDepth, coords));
        }
    #endif
}

#if defined(dIncludeTransparent)
    vec2 getMappedDepthTransparentWithAlpha(const in vec2 coords, const in vec2 selfCoords) {
        float d = distance(coords, selfCoords);
        if (d > dQuarterThreshold) {
            return unpackRGBAToDepthWithAlpha(texture2D(tDepthQuarterTransparent, coords));
        } else if (d > dHalfThreshold) {
            return unpackRGBAToDepthWithAlpha(texture2D(tDepthHalfTransparent, coords));
        } else {
            return unpackRGBAToDepthWithAlpha(texture2D(tDepthTransparent, coords));
        }
    }
#endif

// adapted from https://gist.github.com/bgolus/a07ed65602c009d5e2f753826e8078a0
vec3 viewNormalAtPixelPositionAccurate(const in vec2 vpos, const in int transparentFlag) {
    // current pixel's depth
    float c = getDepth(vpos, transparentFlag);

    // get current pixel's view space position
    vec3 viewSpacePos_c = screenSpaceToViewSpace(vec3(vpos, c), uInvProjection);

    // get view space position at 1 pixel offsets in each major direction
    vec3 viewSpacePos_l = screenSpaceToViewSpace(vec3(vpos + vec2(-1.0, 0.0) / uTexSize, getDepth(vpos + vec2(-1.0, 0.0) / uTexSize, transparentFlag)), uInvProjection);
    vec3 viewSpacePos_r = screenSpaceToViewSpace(vec3(vpos + vec2( 1.0, 0.0) / uTexSize, getDepth(vpos + vec2( 1.0, 0.0) / uTexSize, transparentFlag)), uInvProjection);
    vec3 viewSpacePos_d = screenSpaceToViewSpace(vec3(vpos + vec2( 0.0,-1.0) / uTexSize, getDepth(vpos + vec2( 0.0,-1.0) / uTexSize, transparentFlag)), uInvProjection);
    vec3 viewSpacePos_u = screenSpaceToViewSpace(vec3(vpos + vec2( 0.0, 1.0) / uTexSize, getDepth(vpos + vec2( 0.0, 1.0) / uTexSize, transparentFlag)), uInvProjection);

    // get the difference between the current and each offset position
    vec3 l = viewSpacePos_c - viewSpacePos_l;
    vec3 r = viewSpacePos_r - viewSpacePos_c;
    vec3 d = viewSpacePos_c - viewSpacePos_d;
    vec3 u = viewSpacePos_u - viewSpacePos_c;

    // get depth values at 1 & 2 pixels offsets from current along the horizontal axis
    vec4 H = vec4(
        getDepth(vpos + vec2(-1.0, 0.0) / uTexSize, transparentFlag),
        getDepth(vpos + vec2( 1.0, 0.0) / uTexSize, transparentFlag),
        getDepth(vpos + vec2(-2.0, 0.0) / uTexSize, transparentFlag),
        getDepth(vpos + vec2( 2.0, 0.0) / uTexSize, transparentFlag)
    );

    // get depth values at 1 & 2 pixels offsets from current along the vertical axis
    vec4 V = vec4(
        getDepth(vpos + vec2(0.0,-1.0) / uTexSize, transparentFlag),
        getDepth(vpos + vec2(0.0, 1.0) / uTexSize, transparentFlag),
        getDepth(vpos + vec2(0.0,-2.0) / uTexSize, transparentFlag),
        getDepth(vpos + vec2(0.0, 2.0) / uTexSize, transparentFlag)
    );

    // current pixel's depth difference from slope of offset depth samples
    // differs from original article because we're using non-linear depth values
    // see article's comments
    vec2 he = abs((2.0 * H.xy - H.zw) - c);
    vec2 ve = abs((2.0 * V.xy - V.zw) - c);

    // pick horizontal and vertical diff with the smallest depth difference from slopes
    vec3 hDeriv = he.x < he.y ? l : r;
    vec3 vDeriv = ve.x < ve.y ? d : u;

    // get view space normal from the cross product of the best derivatives
    vec3 viewNormal = normalize(cross(hDeriv, vDeriv));

    return viewNormal;
}

float getPixelSize(const in vec2 coords, const in float depth) {
    vec3 viewPos0 = screenSpaceToViewSpace(vec3(coords, depth), uInvProjection);
    vec3 viewPos1 = screenSpaceToViewSpace(vec3(coords + vec2(1.0, 0.0) / uTexSize, depth), uInvProjection);
    return distance(viewPos0, viewPos1);
}

// StarCraft II Ambient Occlusion by [Filion and McNaughton 2008]
void main(void) {
    vec2 invTexSize = 1.0 / uTexSize;
    vec2 selfCoords = gl_FragCoord.xy * invTexSize;
    float selfDepth = getDepth(selfCoords, uTransparencyFlag);
    vec2 selfPackedDepth = packUnitIntervalToRG(selfDepth);

    if (isBackground(selfDepth)) {
        gl_FragColor = vec4(packUnitIntervalToRG(1.0), selfPackedDepth);
        return;
    }

    vec3 selfViewNormal = viewNormalAtPixelPositionAccurate(selfCoords, uTransparencyFlag);
    vec3 selfViewPos = screenSpaceToViewSpace(vec3(selfCoords, selfDepth), uInvProjection);

    vec3 randomVec = normalize(vec3(getNoiseVec2(selfCoords) * 2.0 - 1.0, 0.0));
    vec3 tangent = normalize(randomVec - selfViewNormal * dot(randomVec, selfViewNormal));
    vec3 bitangent = cross(selfViewNormal, tangent);
    mat3 TBN = mat3(tangent, bitangent, selfViewNormal);

    float occlusion = 0.0;
    #ifdef dMultiScale
        float pixelSize = getPixelSize(selfCoords, selfDepth);

        for(int l = 0; l < dLevels; l++) {
            // TODO: smooth transition
            if (pixelSize * uNearThreshold > uLevelRadius[l]) continue;
            if (pixelSize * uFarThreshold < uLevelRadius[l]) continue;

            float levelOcclusion = 0.0;
            for(int i = 0; i < dNSamples; i++) {
                // get sample position:
                vec3 sampleViewPos = TBN * uSamples[i];
                sampleViewPos = selfViewPos + sampleViewPos * uLevelRadius[l];

                // project sample position:
                vec4 offset = vec4(sampleViewPos, 1.0);
                offset = uProjection * offset;
                offset.xyz = (offset.xyz / offset.w) * 0.5 + 0.5;
                offset.xy = clampToBounds(offset.xy);

                // get sample depth:
                float sampleOcc = 0.0;
                #ifdef dIllumination
                    if (uTransparencyFlag == 1) {
                #endif
                        float sampleDepth = getMappedDepth(offset.xy, selfCoords);
                        if (!isBackground(sampleDepth)) {
                            float sampleViewZ = screenSpaceToViewSpace(vec3(offset.xy, sampleDepth), uInvProjection).z;
                            sampleOcc = step(sampleViewPos.z + 0.025, sampleViewZ) * smootherstep(0.0, 1.0, uLevelRadius[l] / abs(selfViewPos.z - sampleViewZ)) * uLevelBias[l];
                        }
                #ifdef dIllumination
                    }
                #endif
                #if defined(dIncludeTransparent)
                    vec2 sampleDepthWithAlpha = getMappedDepthTransparentWithAlpha(offset.xy, selfCoords);
                    if (!isBackground(sampleDepthWithAlpha.x))  {
                        float sampleViewZWithAlpha = screenSpaceToViewSpace(vec3(offset.xy, sampleDepthWithAlpha.x), uInvProjection).z;
                        sampleOcc = max(sampleOcc, step(sampleViewPos.z + 0.025, sampleViewZWithAlpha) * smootherstep(0.0, 1.0, uLevelRadius[l] / abs(selfViewPos.z - sampleViewZWithAlpha)) * uLevelBias[l] * sampleDepthWithAlpha.y);
                    }
                #endif

                levelOcclusion += sampleOcc;
            }
            levelOcclusion /= float(dNSamples);
            occlusion = max(occlusion, levelOcclusion);
        }
    #else
        for(int i = 0; i < dNSamples; i++) {
            vec3 sampleViewPos = TBN * uSamples[i];
            sampleViewPos = selfViewPos + sampleViewPos * uRadius;

            vec4 offset = vec4(sampleViewPos, 1.0);
            offset = uProjection * offset;
            offset.xyz = (offset.xyz / offset.w) * 0.5 + 0.5;
            offset.xy = clampToBounds(offset.xy);

            float sampleOcc = 0.0;
            #ifdef dIllumination
                if (uTransparencyFlag == 1) {
            #endif
                    // NOTE: using getMappedDepth here causes issues on some mobile devices
                    float sampleDepth = getDepth(offset.xy, 0);
                    if (!isBackground(sampleDepth)) {
                        float sampleViewZ = screenSpaceToViewSpace(vec3(offset.xy, sampleDepth), uInvProjection).z;
                        sampleOcc = step(sampleViewPos.z + 0.025, sampleViewZ) * smootherstep(0.0, 1.0, uRadius / abs(selfViewPos.z - sampleViewZ));
                    }
            #ifdef dIllumination
                }
            #endif
            #if defined(dIncludeTransparent)
                vec2 sampleDepthWithAlpha = getDepthTransparentWithAlpha(offset.xy);
                if (!isBackground(sampleDepthWithAlpha.x)) {
                    float sampleViewZWithAlpha = screenSpaceToViewSpace(vec3(offset.xy, sampleDepthWithAlpha.x), uInvProjection).z;
                    sampleOcc = max(sampleOcc, step(sampleViewPos.z + 0.025, sampleViewZWithAlpha) * smootherstep(0.0, 1.0, uRadius / abs(selfViewPos.z - sampleViewZWithAlpha)) * sampleDepthWithAlpha.y);
                }
            #endif

            occlusion += sampleOcc;
        }

        occlusion /= float(dNSamples);
    #endif
    occlusion = 1.0 - (uBias * occlusion);

    vec2 packedOcclusion = packUnitIntervalToRG(clamp(occlusion, 0.01, 1.0));

    gl_FragColor = vec4(packedOcclusion, selfPackedDepth);
}
`;var dn=`
precision highp float;
precision highp int;
precision highp sampler2D;

uniform sampler2D tSsaoDepth;
uniform vec2 uTexSize;
uniform vec4 uBounds;

uniform float uKernel[dOcclusionKernelSize];
uniform float uBlurDepthBias;

uniform float uBlurDirectionX;
uniform float uBlurDirectionY;

uniform mat4 uInvProjection;
uniform float uNear;
uniform float uFar;

#include common

float getViewZ(const in float depth) {
    #if dOrthographic == 1
        return orthographicDepthToViewZ(depth, uNear, uFar);
    #else
        return perspectiveDepthToViewZ(depth, uNear, uFar);
    #endif
}

// packUnitIntervalToRG(1.0) stores (0, 1) in the uint8 target and unpacks to 255/256,
// never 1.0, so the packed bytes have to be tested instead
bool isBackgroundPacked(const in vec2 packedDepth) {
    return packedDepth.x == 0.0 && packedDepth.y == 1.0;
}

bool isNearClip(const in float depth) {
    return depth == 0.0;
}

bool outsideBounds(const in vec2 p) {
    return p.x < uBounds.x || p.y < uBounds.y || p.x > uBounds.z || p.y > uBounds.w;
}

float getPixelSize(const in vec2 coords, const in float depth) {
    vec3 viewPos0 = screenSpaceToViewSpace(vec3(coords, depth), uInvProjection);
    vec3 viewPos1 = screenSpaceToViewSpace(vec3(coords + vec2(1.0, 0.0) / uTexSize, depth), uInvProjection);
    return distance(viewPos0, viewPos1);
}

void main(void) {
    vec2 coords = gl_FragCoord.xy / uTexSize;

    vec2 packedDepth = texture2D(tSsaoDepth, coords).zw;

    if (outsideBounds(coords)) {
        gl_FragColor = vec4(packUnitIntervalToRG(1.0), packedDepth);
        return;
    }

    float selfDepth = unpackRGToUnitInterval(packedDepth);
    // (if background and if second pass) or if near clip
    if ((isBackgroundPacked(packedDepth) && uBlurDirectionY != 0.0) || isNearClip(selfDepth)) {
        gl_FragColor = vec4(packUnitIntervalToRG(1.0), packedDepth);
        return;
    }

    float selfViewZ = getViewZ(selfDepth);
    float pixelSize = getPixelSize(coords, selfDepth);

    vec2 offset = vec2(uBlurDirectionX, uBlurDirectionY) / uTexSize;

    float sum = 0.0;
    float kernelSum = 0.0;
    const int halfKernelSize = dOcclusionKernelSize / 2;
    // only if kernelSize is odd
    for (int i = -halfKernelSize; i <= halfKernelSize; i++) {
        if (abs(float(i)) > 1.0 && abs(float(i)) * pixelSize > 0.8) continue;

        vec2 sampleCoords = coords + float(i) * offset;
        if (outsideBounds(sampleCoords)) {
            continue;
        }

        vec4 sampleSsaoDepth = texture2D(tSsaoDepth, sampleCoords);

        float sampleDepth = unpackRGToUnitInterval(sampleSsaoDepth.zw);
        if (isBackgroundPacked(sampleSsaoDepth.zw) || isNearClip(sampleDepth)) {
            continue;
        }

        float sampleViewZ = getViewZ(sampleDepth);
        if (abs(selfViewZ - sampleViewZ) >= uBlurDepthBias) {
            continue;
        }

        float kernel = uKernel[int(abs(float(i)))]; // abs is not defined for int in webgl1
        float sampleValue = unpackRGToUnitInterval(sampleSsaoDepth.xy);

        sum += kernel * sampleValue;
        kernelSum += kernel;
    }
    gl_FragColor = vec4(packUnitIntervalToRG(sum / kernelSum), packedDepth);
}
`;var hn={samples:m.Numeric(32,{min:1,max:256,step:1}),multiScale:m.MappedStatic("off",{on:m.Group({levels:m.ObjectList({radius:m.Numeric(5,{min:0,max:20,step:.1},{description:"Final occlusion radius is 2^x"}),bias:m.Numeric(1,{min:0,max:3,step:.1})},u=>`${u.radius}, ${u.bias}`,{defaultValue:[{radius:2,bias:1},{radius:5,bias:1},{radius:8,bias:1},{radius:11,bias:1}]}),nearThreshold:m.Numeric(10,{min:0,max:50,step:1}),farThreshold:m.Numeric(1500,{min:0,max:1e4,step:100})}),off:m.Group({})},{cycle:!0}),radius:m.Numeric(5,{min:0,max:20,step:.1},{description:"Final occlusion radius is 2^x",hideIf:u=>u?.multiScale.name==="on"}),bias:m.Numeric(.8,{min:0,max:3,step:.1}),blurKernelSize:m.Numeric(15,{min:1,max:25,step:2}),blurDepthBias:m.Numeric(.5,{min:0,max:1,step:.01}),resolutionScale:m.Numeric(1,{min:.1,max:1,step:.05},{description:"Adjust resolution of occlusion calculation"}),color:m.Color(0),transparentThreshold:m.Numeric(.4,{min:0,max:1,step:.05})};function yl(u,e,t){let r=u.length,{radius:a,bias:o}=t||{radius:new Array(r*3).fill(0),bias:new Array(r*3).fill(0)};u=u.slice().sort((n,s)=>n.radius-s.radius);for(let n=0;n<r;++n){let s=u[n];a[n]=Math.pow(2,s.radius)*e,o[n]=s.bias}return{count:r,radius:a,bias:o}}var Mt=class u{constructor(e,t,r,a,o,n){this.webgl=e;this.invProjection=B.identity();this.levelsCameraScale=-1;let{textureFloatLinear:s}=e.extensions;this.depthTextureOpaque=o,this.depthTextureTransparent=n,this.nSamples=1,this.blurKernelSize=1,this.ssaoScale=this.calcSsaoScale(1),this.texSize=[t,r],this.levels=[],this.framebuffer=e.resources.framebuffer(),this.blurFirstPassFramebuffer=e.resources.framebuffer(),this.blurSecondPassFramebuffer=e.resources.framebuffer();let f=Math.floor(t*this.ssaoScale),p=Math.floor(r*this.ssaoScale),l=Math.max(1,Math.floor(f*.5)),c=Math.max(1,Math.floor(p*.5)),d=Math.max(1,Math.floor(f*.25)),g=Math.max(1,Math.floor(p*.25)),x=s?"linear":"nearest";this.downsampledDepthTargetOpaque=a?e.createRenderTarget(f,p,"none","uint8","linear","rgba"):e.createRenderTarget(f,p,"none","float32",x,e.isWebGL2?"alpha":"rgba"),this.downsampleDepthRenderableOpaque=Lt(e,o);let v=this.getDepthTexture();this.depthHalfTargetOpaque=a?e.createRenderTarget(l,c,"none","uint8","linear","rgba"):e.createRenderTarget(l,c,"none","float32",x,e.isWebGL2?"alpha":"rgba"),this.depthHalfRenderableOpaque=Lt(e,v),this.depthQuarterTargetOpaque=a?e.createRenderTarget(d,g,"none","uint8","linear","rgba"):e.createRenderTarget(d,g,"none","float32",x,e.isWebGL2?"alpha":"rgba"),this.depthQuarterRenderableOpaque=Lt(e,this.depthHalfTargetOpaque.texture),this.downsampledDepthTargetTransparent=e.createRenderTarget(f,p,"none","uint8","linear","rgba"),this.downsampleDepthRenderableTransparent=Lt(e,n);let S=this.getTransparentDepthTexture();this.depthHalfTargetTransparent=e.createRenderTarget(l,c,"none","uint8","linear","rgba"),this.depthHalfRenderableTransparent=Lt(e,S),this.depthQuarterTargetTransparent=e.createRenderTarget(d,g,"none","uint8","linear","rgba"),this.depthQuarterRenderableTransparent=Lt(e,this.depthHalfTargetTransparent.texture),this.ssaoDepthTexture=e.resources.texture("image-uint8","rgba","ubyte","linear"),this.ssaoDepthTexture.define(f,p),this.ssaoDepthTexture.attachFramebuffer(this.framebuffer,"color0"),this.ssaoDepthTransparentTexture=e.resources.texture("image-uint8","rgba","ubyte","linear"),this.ssaoDepthTransparentTexture.define(f,p),this.depthBlurProxyTexture=e.resources.texture("image-uint8","rgba","ubyte","linear"),this.depthBlurProxyTexture.define(f,p),this.depthBlurProxyTexture.attachFramebuffer(this.blurFirstPassFramebuffer,"color0"),this.renderable=Tl(e,v,this.depthHalfTargetOpaque.texture,this.depthQuarterTargetOpaque.texture,S,this.depthHalfTargetTransparent.texture,this.depthQuarterTargetTransparent.texture),this.blurFirstPassRenderable=pn(e,this.ssaoDepthTransparentTexture,"horizontal"),this.blurSecondPassRenderable=pn(e,this.depthBlurProxyTexture,"vertical")}static isEnabled(e){return e.enabled&&e.occlusion.name!=="off"}static isTransparentEnabled(e,t){return e.opacityAverage<1&&e.transparencyMin<t.transparentThreshold}calcSsaoScale(e){return Math.min(1,1/this.webgl.pixelRatio)*e}getDepthTexture(){return this.ssaoScale===1?this.depthTextureOpaque:this.downsampledDepthTargetOpaque.texture}getTransparentDepthTexture(){return this.ssaoScale===1?this.depthTextureTransparent:this.downsampledDepthTargetTransparent.texture}getByteCount(){return this.downsampledDepthTargetOpaque.getByteCount()+this.depthHalfTargetOpaque.getByteCount()+this.depthQuarterTargetOpaque.getByteCount()+this.downsampledDepthTargetTransparent.getByteCount()+this.depthHalfTargetTransparent.getByteCount()+this.depthQuarterTargetTransparent.getByteCount()+this.ssaoDepthTexture.getByteCount()+this.ssaoDepthTransparentTexture.getByteCount()+this.depthBlurProxyTexture.getByteCount()}setSize(e,t){let[r,a]=this.texSize,o=this.calcSsaoScale(1);if(e!==r||t!==a||this.ssaoScale!==o){this.texSize.splice(0,2,e,t);let n=Math.floor(e*this.ssaoScale),s=Math.floor(t*this.ssaoScale);this.ssaoDepthTexture.define(n,s),this.ssaoDepthTransparentTexture.define(n,s),this.depthBlurProxyTexture.define(n,s);let f=Math.max(1,Math.floor(n*.5)),p=Math.max(1,Math.floor(s*.5)),l=Math.max(1,Math.floor(n*.25)),c=Math.max(1,Math.floor(s*.25));this.downsampledDepthTargetOpaque.setSize(n,s),this.depthHalfTargetOpaque.setSize(f,p),this.depthQuarterTargetOpaque.setSize(l,c),i.update(this.downsampleDepthRenderableOpaque.values.uTexSize,T.set(this.downsampleDepthRenderableOpaque.values.uTexSize.ref.value,n,s)),i.update(this.depthHalfRenderableOpaque.values.uTexSize,T.set(this.depthHalfRenderableOpaque.values.uTexSize.ref.value,f,p)),i.update(this.depthQuarterRenderableOpaque.values.uTexSize,T.set(this.depthQuarterRenderableOpaque.values.uTexSize.ref.value,l,c)),this.downsampledDepthTargetTransparent.setSize(n,s),this.depthHalfTargetTransparent.setSize(f,p),this.depthQuarterTargetTransparent.setSize(l,c),i.update(this.downsampleDepthRenderableTransparent.values.uTexSize,T.set(this.downsampleDepthRenderableTransparent.values.uTexSize.ref.value,n,s)),i.update(this.depthHalfRenderableTransparent.values.uTexSize,T.set(this.depthHalfRenderableTransparent.values.uTexSize.ref.value,f,p)),i.update(this.depthQuarterRenderableTransparent.values.uTexSize,T.set(this.depthQuarterRenderableTransparent.values.uTexSize.ref.value,l,c)),i.update(this.renderable.values.uTexSize,T.set(this.renderable.values.uTexSize.ref.value,n,s)),i.update(this.blurFirstPassRenderable.values.uTexSize,T.set(this.blurFirstPassRenderable.values.uTexSize.ref.value,n,s)),i.update(this.blurSecondPassRenderable.values.uTexSize,T.set(this.blurSecondPassRenderable.values.uTexSize.ref.value,n,s));let d=this.getDepthTexture(),g=this.getTransparentDepthTexture();i.update(this.depthHalfRenderableOpaque.values.tColor,d),i.update(this.depthHalfRenderableTransparent.values.tColor,g),i.update(this.renderable.values.tDepth,d),i.update(this.renderable.values.tDepthTransparent,g),this.depthHalfRenderableOpaque.update(),this.depthHalfRenderableTransparent.update(),this.renderable.update()}}reset(){this.ssaoDepthTexture.attachFramebuffer(this.framebuffer,"color0"),this.depthBlurProxyTexture.attachFramebuffer(this.blurFirstPassFramebuffer,"color0")}update(e,t,r,a=!1){let o=!1,n=!1,s=!1,f=e.state.mode==="orthographic"?1:0,p=B.invert(this.invProjection,e.projection),[l,c]=this.texSize,d=e.viewport;i.update(this.renderable.values.uProjection,e.projection),i.update(this.renderable.values.uInvProjection,p);let g=this.renderable.values.uBounds,x=this.ssaoScale;Oe.set(g.ref.value,Math.floor(d.x*x)/(l*x),Math.floor(d.y*x)/(c*x),Math.ceil((d.x+d.width)*x)/(l*x),Math.ceil((d.y+d.height)*x)/(c*x)),i.update(g,g.ref.value),i.update(this.blurFirstPassRenderable.values.uBounds,g.ref.value),i.update(this.blurSecondPassRenderable.values.uBounds,g.ref.value),i.updateIfChanged(this.blurFirstPassRenderable.values.uNear,e.near),i.updateIfChanged(this.blurSecondPassRenderable.values.uNear,e.near),i.updateIfChanged(this.blurFirstPassRenderable.values.uFar,e.far),i.updateIfChanged(this.blurSecondPassRenderable.values.uFar,e.far),i.update(this.blurFirstPassRenderable.values.uInvProjection,p),i.update(this.blurSecondPassRenderable.values.uInvProjection,p),i.update(this.blurFirstPassRenderable.values.uBlurDepthBias,r.blurDepthBias*e.scale),i.update(this.blurSecondPassRenderable.values.uBlurDepthBias,r.blurDepthBias*e.scale),this.blurFirstPassRenderable.values.dOrthographic.ref.value!==f&&(n=!0,i.update(this.blurFirstPassRenderable.values.dOrthographic,f),i.update(this.blurSecondPassRenderable.values.dOrthographic,f));let v=u.isTransparentEnabled(t,r);this.renderable.values.dIncludeTransparent.ref.value!==v&&(o=!0,i.update(this.renderable.values.dIncludeTransparent,v)),this.renderable.values.dIllumination.ref.value!==a&&(o=!0,i.update(this.renderable.values.dIllumination,a)),this.nSamples!==r.samples&&(o=!0,this.nSamples=r.samples,i.update(this.renderable.values.uSamples,gn(this.nSamples)),i.updateIfChanged(this.renderable.values.dNSamples,this.nSamples));let S=r.multiScale.name==="on";if(this.renderable.values.dMultiScale.ref.value!==S&&(o=!0,i.update(this.renderable.values.dMultiScale,S)),r.multiScale.name==="on"){let D=r.multiScale.params;if(this.levelsCameraScale!==e.scale||!oa(this.levels,D.levels)){o=!0,this.levelsCameraScale=e.scale,this.levels=D.levels;let O=yl(D.levels,e.scale);i.updateIfChanged(this.renderable.values.dLevels,O.count),i.update(this.renderable.values.uLevelRadius,O.radius),i.update(this.renderable.values.uLevelBias,O.bias)}i.updateIfChanged(this.renderable.values.uNearThreshold,D.nearThreshold),i.updateIfChanged(this.renderable.values.uFarThreshold,D.farThreshold)}else i.updateIfChanged(this.renderable.values.uRadius,Math.pow(2,r.radius)*e.scale);if(i.updateIfChanged(this.renderable.values.uBias,r.bias),this.blurKernelSize!==r.blurKernelSize){n=!0,this.blurKernelSize=r.blurKernelSize;let D=mn(this.blurKernelSize);i.update(this.blurFirstPassRenderable.values.uKernel,D),i.update(this.blurSecondPassRenderable.values.uKernel,D),i.update(this.blurFirstPassRenderable.values.dOcclusionKernelSize,this.blurKernelSize),i.update(this.blurSecondPassRenderable.values.dOcclusionKernelSize,this.blurKernelSize)}let P=this.calcSsaoScale(r.resolutionScale);if(this.ssaoScale!==P){o=!0,s=!0,this.ssaoScale=P;let D=Math.floor(l*this.ssaoScale),O=Math.floor(c*this.ssaoScale);this.ssaoDepthTexture.define(D,O),this.ssaoDepthTransparentTexture.define(D,O),this.depthBlurProxyTexture.define(D,O);let z=Math.floor(D*.5),G=Math.floor(O*.5),I=Math.floor(D*.25),M=Math.floor(O*.25);this.downsampledDepthTargetOpaque.setSize(D,O),this.depthHalfTargetOpaque.setSize(z,G),this.depthQuarterTargetOpaque.setSize(I,M);let K=this.getDepthTexture();i.update(this.depthHalfRenderableOpaque.values.tColor,K),i.update(this.renderable.values.tDepth,K),i.update(this.renderable.values.tDepthHalf,this.depthHalfTargetOpaque.texture),i.update(this.renderable.values.tDepthQuarter,this.depthQuarterTargetOpaque.texture),i.update(this.downsampleDepthRenderableOpaque.values.uTexSize,T.set(this.downsampleDepthRenderableOpaque.values.uTexSize.ref.value,D,O)),i.update(this.depthHalfRenderableOpaque.values.uTexSize,T.set(this.depthHalfRenderableOpaque.values.uTexSize.ref.value,z,G)),i.update(this.depthQuarterRenderableOpaque.values.uTexSize,T.set(this.depthQuarterRenderableOpaque.values.uTexSize.ref.value,I,M)),this.downsampledDepthTargetTransparent.setSize(D,O),this.depthHalfTargetTransparent.setSize(z,G),this.depthQuarterTargetTransparent.setSize(I,M);let A=this.getTransparentDepthTexture();i.update(this.depthHalfRenderableTransparent.values.tColor,A),i.update(this.renderable.values.tDepthTransparent,A),i.update(this.renderable.values.tDepthHalfTransparent,this.depthHalfTargetTransparent.texture),i.update(this.renderable.values.tDepthQuarterTransparent,this.depthQuarterTargetTransparent.texture),i.update(this.downsampleDepthRenderableTransparent.values.uTexSize,T.set(this.downsampleDepthRenderableTransparent.values.uTexSize.ref.value,D,O)),i.update(this.depthHalfRenderableTransparent.values.uTexSize,T.set(this.depthHalfRenderableTransparent.values.uTexSize.ref.value,z,G)),i.update(this.depthQuarterRenderableTransparent.values.uTexSize,T.set(this.depthQuarterRenderableTransparent.values.uTexSize.ref.value,I,M)),i.update(this.renderable.values.uTexSize,T.set(this.renderable.values.uTexSize.ref.value,D,O)),i.update(this.blurFirstPassRenderable.values.uTexSize,T.set(this.blurFirstPassRenderable.values.uTexSize.ref.value,D,O)),i.update(this.blurSecondPassRenderable.values.uTexSize,T.set(this.blurSecondPassRenderable.values.uTexSize.ref.value,D,O))}o&&this.renderable.update(),n&&(this.blurFirstPassRenderable.update(),this.blurSecondPassRenderable.update()),s&&(this.depthHalfRenderableOpaque.update(),this.depthHalfRenderableTransparent.update())}render(e){k&&this.webgl.timer.mark("SSAO.render");let{state:t}=this.webgl,{x:r,y:a,width:o,height:n}=e.viewport,s=this.renderable.values.dIncludeTransparent.ref.value,f=this.renderable.values.dMultiScale.ref.value,p=Math.floor(r*this.ssaoScale),l=Math.floor(a*this.ssaoScale),c=Math.ceil(o*this.ssaoScale),d=Math.ceil(n*this.ssaoScale);if(t.viewport(p,l,c,d),t.scissor(p,l,c,d),this.ssaoScale<1&&(k&&this.webgl.timer.mark("SSAO.downsample"),this.downsampledDepthTargetOpaque.bind(),this.downsampleDepthRenderableOpaque.render(),s&&(this.downsampledDepthTargetTransparent.bind(),this.downsampleDepthRenderableTransparent.render()),k&&this.webgl.timer.markEnd("SSAO.downsample")),f){let g=Math.floor(p*.5),x=Math.floor(l*.5),v=Math.ceil(c*.5),S=Math.ceil(d*.5);t.viewport(g,x,v,S),t.scissor(g,x,v,S),k&&this.webgl.timer.mark("SSAO.half"),this.depthHalfTargetOpaque.bind(),this.depthHalfRenderableOpaque.render(),s&&(this.depthHalfTargetTransparent.bind(),this.depthHalfRenderableTransparent.render()),k&&this.webgl.timer.markEnd("SSAO.half");let P=Math.floor(p*.25),D=Math.floor(l*.25),O=Math.ceil(c*.25),z=Math.ceil(d*.25);t.viewport(P,D,O,z),t.scissor(P,D,O,z),k&&this.webgl.timer.mark("SSAO.quarter"),this.depthQuarterTargetOpaque.bind(),this.depthQuarterRenderableOpaque.render(),s&&(this.depthQuarterTargetTransparent.bind(),this.depthQuarterRenderableTransparent.render()),k&&this.webgl.timer.markEnd("SSAO.quarter"),t.viewport(p,l,c,d),t.scissor(p,l,c,d)}k&&this.webgl.timer.mark("SSAO.opaque"),this.ssaoDepthTexture.attachFramebuffer(this.framebuffer,"color0"),i.update(this.renderable.values.uTransparencyFlag,0),this.framebuffer.bind(),this.renderable.render(),k&&this.webgl.timer.markEnd("SSAO.opaque"),k&&this.webgl.timer.mark("SSAO.blurOpaque"),i.update(this.blurFirstPassRenderable.values.tSsaoDepth,this.ssaoDepthTexture),this.blurFirstPassRenderable.update(),this.blurFirstPassFramebuffer.bind(),this.blurFirstPassRenderable.render(),this.ssaoDepthTexture.attachFramebuffer(this.blurSecondPassFramebuffer,"color0"),this.blurSecondPassFramebuffer.bind(),this.blurSecondPassRenderable.render(),k&&this.webgl.timer.markEnd("SSAO.blurOpaque"),s&&(k&&this.webgl.timer.mark("SSAO.transparent "),this.ssaoDepthTransparentTexture.attachFramebuffer(this.framebuffer,"color0"),i.update(this.renderable.values.uTransparencyFlag,1),this.framebuffer.bind(),this.renderable.render(),k&&this.webgl.timer.markEnd("SSAO.transparent "),k&&this.webgl.timer.mark("SSAO.blurTransparent "),i.update(this.blurFirstPassRenderable.values.tSsaoDepth,this.ssaoDepthTransparentTexture),this.blurFirstPassRenderable.update(),this.blurFirstPassFramebuffer.bind(),this.blurFirstPassRenderable.render(),this.ssaoDepthTransparentTexture.attachFramebuffer(this.blurSecondPassFramebuffer,"color0"),this.blurSecondPassFramebuffer.bind(),this.blurSecondPassRenderable.render(),k&&this.webgl.timer.markEnd("SSAO.blurTransparent ")),k&&this.webgl.timer.markEnd("SSAO.render")}},xl={...be,tDepth:j("texture","rgba","ubyte","linear"),tDepthHalf:j("texture","rgba","ubyte","linear"),tDepthQuarter:j("texture","rgba","ubyte","linear"),dIllumination:ee("boolean"),uTransparencyFlag:C("i"),dIncludeTransparent:ee("boolean"),tDepthTransparent:j("texture","rgba","ubyte","linear"),tDepthHalfTransparent:j("texture","rgba","ubyte","linear"),tDepthQuarterTransparent:j("texture","rgba","ubyte","linear"),uSamples:C("v3[]"),dNSamples:ee("number"),uProjection:C("m4"),uInvProjection:C("m4"),uBounds:C("v4"),uTexSize:C("v2"),uRadius:C("f"),uBias:C("f"),dMultiScale:ee("boolean"),dLevels:ee("number"),uLevelRadius:C("f[]"),uLevelBias:C("f[]"),uNearThreshold:C("f"),uFarThreshold:C("f")};function Tl(u,e,t,r,a,o,n){let s={...ve,tDepth:i.create(e),tDepthHalf:i.create(t),tDepthQuarter:i.create(r),dIllumination:i.create(!1),dIncludeTransparent:i.create(!0),uTransparencyFlag:i.create(0),tDepthTransparent:i.create(a),tDepthHalfTransparent:i.create(o),tDepthQuarterTransparent:i.create(n),uSamples:i.create(gn(32)),dNSamples:i.create(32),uProjection:i.create(B.identity()),uInvProjection:i.create(B.identity()),uBounds:i.create(Oe()),uTexSize:i.create(T.create(u.gl.drawingBufferWidth,u.gl.drawingBufferHeight)),uRadius:i.create(Math.pow(2,5)),uBias:i.create(.8),dMultiScale:i.create(!1),dLevels:i.create(3),uLevelRadius:i.create([Math.pow(2,2),Math.pow(2,5),Math.pow(2,8)]),uLevelBias:i.create([.8,.8,.8]),uNearThreshold:i.create(10),uFarThreshold:i.create(1500)},f={...xl},p=he("ssao",Te,cn),l=me(u,"triangles",p,f,s);return fe(l,s)}var Sl={...be,tSsaoDepth:j("texture","rgba","ubyte","nearest"),uTexSize:C("v2"),uKernel:C("f[]"),dOcclusionKernelSize:ee("number"),uBlurDepthBias:C("f"),uBlurDirectionX:C("f"),uBlurDirectionY:C("f"),uInvProjection:C("m4"),uNear:C("f"),uFar:C("f"),uBounds:C("v4"),dOrthographic:ee("number")};function pn(u,e,t){let r={...ve,tSsaoDepth:i.create(e),uTexSize:i.create(T.create(e.getWidth(),e.getHeight())),uKernel:i.create(mn(15)),dOcclusionKernelSize:i.create(15),uBlurDepthBias:i.create(.5),uBlurDirectionX:i.create(t==="horizontal"?1:0),uBlurDirectionY:i.create(t==="vertical"?1:0),uInvProjection:i.create(B.identity()),uNear:i.create(0),uFar:i.create(1e4),uBounds:i.create(Oe()),dOrthographic:i.create(0)},a={...Sl},o=he("ssao_blur",Te,dn),n=me(u,"triangles",o,a,r);return fe(n,r)}function mn(u){let e=u/3,t=Math.floor((u+1)/2),r=[];for(let a=0;a<t;a++)r.push(1/(Math.sqrt(2*Math.PI)*e)*Math.exp(-a*a/(2*e*e)));return r}var za=new Hi;function fn(){let u=b();for(;;){let e=za.float()*2-1,t=za.float()*2-1;if(e*e+t*t<1){let r=2*Math.sqrt(1-e*e-t*t)*(za.float()<.5?-1:1);b.set(u,e,t,r),b.normalize(u,u),b.scale(u,u,za.float());break}}return u[2]<0&&(u[2]=-u[2]),u}function Cl(u,e){if(e.length>=u)return e;e.length===0&&e.push(fn());let t=Math.max(10,Math.min(30,Math.floor(u/10)));for(let r=e.length;r<u;r++){let a,o=-1;for(let n=0;n<t;n++){let s=fn(),f=1/0;for(let p of e){let l=b.distance(s,p);f=Math.min(f,l)}f>o&&(o=f,a=s)}e.push(a)}return e}var Va=[];function Pl(u){return Va.length<u&&(Va=Cl(u,Va)),Va}function gn(u){let e=Pl(u),t=[];for(let r=0;r<u;r++){let a=(r*r+2*r+1)/(u*u);a=.1+a*(1-.1),t.push(e[r][0]*a),t.push(e[r][1]*a),t.push(e[r][2]*a)}return t}var wl={...be,tSsaoDepth:j("texture","rgba","ubyte","nearest"),tSsaoDepthTransparent:j("texture","rgba","ubyte","nearest"),tColor:j("texture","rgba","ubyte","nearest"),tTransparentColor:j("texture","rgba","ubyte","nearest"),dBlendTransparency:ee("boolean"),tDepthOpaque:j("texture","rgba","ubyte","nearest"),tDepthTransparent:j("texture","rgba","ubyte","nearest"),tShadows:j("texture","rgba","ubyte","nearest"),tOutlines:j("texture","rgba","ubyte","nearest"),tBloom:j("texture","rgba","ubyte","linear"),dBloomEnable:ee("boolean"),uTexSize:C("v2"),dOrthographic:ee("number"),uNear:C("f"),uFar:C("f"),uFogNear:C("f"),uFogFar:C("f"),uFogColor:C("v3"),uOutlineColor:C("v3"),uOcclusionColor:C("v3"),uTransparentBackground:C("b"),dOcclusionEnable:ee("boolean"),dOcclusionSingleDepth:ee("boolean"),dOcclusionIncludeOpacity:ee("boolean"),dOcclusionIncludeTransparency:ee("boolean"),uOcclusionOffset:C("v2"),dShadowEnable:ee("boolean"),dOutlineEnable:ee("boolean"),dOutlineScale:ee("number"),dTransparentOutline:ee("boolean")};function Dl(u,e,t,r,a,o,n,s,f,p,l){let c={...ve,tSsaoDepth:i.create(s),tSsaoDepthTransparent:i.create(f),tColor:i.create(e),tTransparentColor:i.create(t),dBlendTransparency:i.create(!0),tDepthOpaque:i.create(r),tDepthTransparent:i.create(a),tShadows:i.create(o),tOutlines:i.create(n),tBloom:i.create(p),dBloomEnable:i.create(!1),uTexSize:i.create(T.create(e.getWidth(),e.getHeight())),dOrthographic:i.create(0),uNear:i.create(1),uFar:i.create(1e4),uFogNear:i.create(1e4),uFogFar:i.create(1e4),uFogColor:i.create(b.create(1,1,1)),uOutlineColor:i.create(b.create(0,0,0)),uOcclusionColor:i.create(b.create(0,0,0)),uTransparentBackground:i.create(!1),dOcclusionEnable:i.create(!0),dOcclusionSingleDepth:i.create(!1),dOcclusionIncludeOpacity:i.create(!0),dOcclusionIncludeTransparency:i.create(!1),uOcclusionOffset:i.create(T.create(0,0)),dShadowEnable:i.create(!1),dOutlineEnable:i.create(!1),dOutlineScale:i.create(1),dTransparentOutline:i.create(l)},d={...wl},g=he("postprocessing",Te,zo),x=me(u,"triangles",g,d,c);return fe(x,c)}var Na={enabled:m.Boolean(!0),occlusion:m.MappedStatic("on",{on:m.Group(hn),off:m.Group({})},{cycle:!0,description:"Darken occluded crevices with the ambient occlusion effect",hideIf:u=>u.enabled===!1}),shadow:m.MappedStatic("off",{on:m.Group(un),off:m.Group({})},{cycle:!0,description:"Simplistic shadows",hideIf:u=>u.enabled===!1}),outline:m.MappedStatic("off",{on:m.Group(sn),off:m.Group({})},{cycle:!0,description:"Draw outline around 3D objects",hideIf:u=>u.enabled===!1}),dof:m.MappedStatic("off",{on:m.Group(on),off:m.Group({})},{cycle:!0,description:"DOF",hideIf:u=>u.enabled===!1}),antialiasing:m.MappedStatic("smaa",{fxaa:m.Group(No),smaa:m.Group(Xo),off:m.Group({})},{options:[["fxaa","FXAA"],["smaa","SMAA"],["off","Off"]],description:"Smooth pixel edges",hideIf:u=>u.enabled===!1}),sharpening:m.MappedStatic("off",{on:m.Group(rn),off:m.Group({})},{cycle:!0,description:"Contrast Adaptive Sharpening",hideIf:u=>u.enabled===!1}),background:m.Group(en,{isFlat:!0,hideIf:u=>u.enabled===!1}),bloom:m.MappedStatic("on",{on:m.Group(Io),off:m.Group({})},{cycle:!0,description:"Bloom",hideIf:u=>u.enabled===!1})},_e=class u{constructor(e,t,r){this.webgl=e;this.drawPass=r;this.occlusionOffset=[0,0];this.transparentBackground=!1;let{colorTarget:a,transparentColorTarget:o,depthTextureOpaque:n,depthTextureTransparent:s,packedDepth:f}=r,p=a.getWidth(),l=a.getHeight();this.target=e.createRenderTarget(p,l,"none","uint8","linear"),this.ssao=new Mt(e,p,l,f,n,s),this.shadow=new Ur(e,p,l,n),this.outline=new dr(e,p,l,s,n),this.bloom=new Dt(e,p,l),this.renderable=Dl(e,a.texture,o.texture,n,s,this.shadow.target.texture,this.outline.target.texture,this.ssao.ssaoDepthTexture,this.ssao.ssaoDepthTransparentTexture,this.bloom.compositeTarget.texture,!0),this.background=new Ia(e,t,p,l)}static isEnabled(e){return e.enabled&&(Mt.isEnabled(e)||Ur.isEnabled(e)||dr.isEnabled(e)||e.background.variant.name!=="off"||Dt.isEnabled(e))}static isTransparentDepthRequired(e,t){return t.enabled&&(ar.isEnabled(t)||dr.isEnabled(t)&&u.isTransparentOutlineEnabled(t)||Mt.isEnabled(t)&&u.isTransparentSsaoEnabled(e,t)||Dt.isEnabled(t))&&e.opacityAverage<1}static isTransparentOutlineEnabled(e){return e.enabled&&dr.isEnabled(e)&&(e.outline.params.includeTransparent??!0)}static isTransparentSsaoEnabled(e,t){return t.enabled&&Mt.isEnabled(t)&&Mt.isTransparentEnabled(e,t.occlusion.params)}static isSsaoEnabled(e){return e.enabled&&Mt.isEnabled(e)}getByteCount(){return this.target.getByteCount()+this.ssao.getByteCount()+this.shadow.getByteCount()+this.outline.getByteCount()+this.bloom.getByteCount()}setSize(e,t){let[r,a]=this.renderable.values.uTexSize.ref.value;(e!==r||t!==a)&&(this.target.setSize(e,t),i.update(this.renderable.values.uTexSize,T.set(this.renderable.values.uTexSize.ref.value,e,t))),this.ssao.setSize(e,t),this.shadow.setSize(e,t),this.outline.setSize(e,t),this.bloom.setSize(e,t),this.background.setSize(e,t)}reset(){this.ssao.reset()}updateState(e,t,r,a,o,n,s){let f=!1,p=e.state.mode==="orthographic"?1:0,l=dr.isEnabled(o),c=Ur.isEnabled(o),d=Mt.isEnabled(o);if(d){let S=o.occlusion.params;this.ssao.update(e,t,S);let P=Mt.isTransparentEnabled(t,S);this.renderable.values.dOcclusionIncludeTransparency.ref.value!==P&&(f=!0,i.update(this.renderable.values.dOcclusionIncludeTransparency,P)),i.update(this.renderable.values.uOcclusionColor,le.toVec3Normalized(this.renderable.values.uOcclusionColor.ref.value,S.color))}if(c&&this.shadow.update(e,n,s,o.shadow.params),l){let S=o.outline.params,{transparentOutline:P,outlineScale:D}=this.outline.update(e,S,this.drawPass.depthTextureTransparent,this.drawPass.depthTextureOpaque);i.update(this.renderable.values.uOutlineColor,le.toVec3Normalized(this.renderable.values.uOutlineColor.ref.value,S.color)),this.renderable.values.dOutlineScale.ref.value!==D&&(f=!0,i.update(this.renderable.values.dOutlineScale,D)),this.renderable.values.dTransparentOutline.ref.value!==P&&(f=!0,i.update(this.renderable.values.dTransparentOutline,P))}i.updateIfChanged(this.renderable.values.uFar,e.far),i.updateIfChanged(this.renderable.values.uNear,e.near),i.updateIfChanged(this.renderable.values.uFogFar,e.fogFar),i.updateIfChanged(this.renderable.values.uFogNear,e.fogNear),i.update(this.renderable.values.uFogColor,le.toVec3Normalized(this.renderable.values.uFogColor.ref.value,a)),i.updateIfChanged(this.renderable.values.uTransparentBackground,r),this.renderable.values.dOrthographic.ref.value!==p&&(f=!0,i.update(this.renderable.values.dOrthographic,p)),this.renderable.values.dOutlineEnable.ref.value!==l&&(f=!0,i.update(this.renderable.values.dOutlineEnable,l)),this.renderable.values.dShadowEnable.ref.value!==c&&(f=!0,i.update(this.renderable.values.dShadowEnable,c)),this.renderable.values.dOcclusionEnable.ref.value!==d&&(f=!0,i.update(this.renderable.values.dOcclusionEnable,d));let g=t.opacityAverage<1;this.renderable.values.dBlendTransparency.ref.value!==g&&(f=!0,i.update(this.renderable.values.dBlendTransparency,g)),f&&this.renderable.update();let{gl:x,state:v}=this.webgl;v.enable(x.SCISSOR_TEST),v.disable(x.BLEND),v.disable(x.DEPTH_TEST),v.depthMask(!1)}setOcclusionOffset(e,t){this.occlusionOffset[0]=e,this.occlusionOffset[1]=t,i.update(this.renderable.values.uOcclusionOffset,T.set(this.renderable.values.uOcclusionOffset.ref.value,e,t))}setTransparentBackground(e){this.transparentBackground=e}render(e,t,r,a,o,n,s,f,p=!1){k&&this.webgl.timer.mark("PostprocessingPass.render"),this.updateState(e,t,a,o,n,s,f),this.renderable.values.dBloomEnable.ref.value!==p&&(i.update(this.renderable.values.dBloomEnable,p),this.renderable.update());let l=this.background.isEnabled(n)||p&&!this.transparentBackground,{gl:c,state:d}=this.webgl,{x:g,y:x,width:v,height:S}=e.viewport;n.occlusion.name==="on"&&this.occlusionOffset[0]===0&&this.occlusionOffset[1]===0&&this.ssao.render(e),d.viewport(g,x,v,S),d.scissor(g,x,v,S),n.outline.name==="on"&&this.outline.render(),n.shadow.name==="on"&&this.shadow.render(),r?this.webgl.bindDrawingBuffer():this.target.bind(),this.background.update(e,n.background),this.background.clear(n.background,this.transparentBackground,o),this.background.render(n.background),l&&(d.enable(c.BLEND),d.blendFuncSeparate(c.ONE,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA)),this.renderable.render(),k&&this.webgl.timer.markEnd("PostprocessingPass.render")}},pr=class{static isEnabled(e){return e.enabled&&(e.antialiasing.name!=="off"||e.sharpening.name!=="off")}constructor(e,t,r,a="nearest"){this.target=e.createRenderTarget(t,r,"none","uint8",a),this.internalTarget=e.createRenderTarget(t,r,"none"),this.fxaa=new Ba(e,this.target.texture),this.smaa=new Ma(e,this.target.texture),this.cas=new Aa(e,this.target.texture)}getByteCount(){return this.target.getByteCount()+this.internalTarget.getByteCount()+this.smaa.getByteCount()}setSize(e,t){let r=this.target.texture.getWidth(),a=this.target.texture.getHeight();(e!==r||t!==a)&&(this.target.setSize(e,t),this.internalTarget.setSize(e,t),this.fxaa.setSize(e,t),this.smaa.supported&&this.smaa.setSize(e,t),this.cas.setSize(e,t))}_renderFxaa(e,t,r,a){a.antialiasing.name==="fxaa"&&(this.fxaa.update(t,a.antialiasing.params),this.fxaa.render(e.viewport,r))}_renderSmaa(e,t,r,a){a.antialiasing.name==="smaa"&&(this.smaa.update(t,a.antialiasing.params),this.smaa.render(e.viewport,r))}_renderAntialiasing(e,t,r,a){a.antialiasing.name==="fxaa"?this._renderFxaa(e,t,r,a):a.antialiasing.name==="smaa"&&this._renderSmaa(e,t,r,a)}_renderCas(e,t,r,a){a.sharpening.name==="on"&&(a.antialiasing.name!=="off"&&(t=this.internalTarget.texture),this.cas.update(t,a.sharpening.params),this.cas.render(e.viewport,r))}renderAntialiasingOnly(e,t,r,a){return a.antialiasing.name==="off"||a.antialiasing.name==="smaa"&&!this.smaa.supported?!1:(this._renderAntialiasing(e,t,r,a),!0)}render(e,t,r,a){if(a.antialiasing.name==="off"&&a.sharpening.name==="off")return;if(a.antialiasing.name==="smaa"&&!this.smaa.supported){console.error('SMAA not supported, missing "HTMLImageElement"');return}let o=r===!0?void 0:r===!1?this.target:r;a.sharpening.name==="off"?this._renderAntialiasing(e,t,o,a):a.antialiasing.name==="off"?this._renderCas(e,t,o,a):(this._renderAntialiasing(e,t,this.internalTarget,a),this._renderCas(e,t,o,a))}};var bn=`
precision highp float;
precision highp sampler2D;

uniform vec2 uTexSizeInv;
uniform sampler2D tEdgeTexture;
uniform sampler2D tMaskTexture;
uniform sampler2D tDimTexture;
uniform vec3 uHighlightEdgeColor;
uniform vec3 uSelectEdgeColor;
uniform float uHighlightEdgeStrength;
uniform float uSelectEdgeStrength;
uniform float uGhostEdgeStrength;
uniform bool uDepthTest;
uniform float uInnerEdgeFactor;
uniform vec3 uHighlightFillColor;
uniform vec3 uSelectFillColor;
uniform float uHighlightFillStrength;
uniform float uSelectFillStrength;
uniform vec3 uDimColor;
uniform float uDimStrength;

uniform sampler2D tSsaoDepth;
uniform vec3 uOcclusionColor;
uniform vec3 uFogColor;
uniform bool uTransparentBackground;
uniform vec2 uOcclusionOffset;

uniform sampler2D tBase;
uniform sampler2D tShaded;

#include common

// mixes toward the SSAO occlusion color, like the postprocessing pass
vec3 applyOcclusion(const in vec3 color, const in float occlusion, const in float fogAlpha) {
    vec3 occlusionColor = uTransparentBackground ? uOcclusionColor * fogAlpha : mix(uFogColor, uOcclusionColor, fogAlpha);
    return mix(occlusionColor, color, occlusion);
}

// the path traced occlusion and shadows, i.e. the base image relative to the direct shading
float getTracedShading(const in float baseLuminance, const in float shadedLuminance, const in float fogAlpha) {
    float a = max(fogAlpha, 0.001);
    // undo the fog of the base image
    float l = uTransparentBackground ? baseLuminance / a : (baseLuminance - luminance(uFogColor) * (1.0 - fogAlpha)) / a;
    return clamp(l / max(shadedLuminance, 0.001), 0.0, 1.0);
}

void main() {
    vec2 coords = gl_FragCoord.xy * uTexSizeInv;

    // coverage of the visible unmarked geometry, see dim.frag
    float dimAlpha = 0.0;
    float dimFogAlpha = 1.0;
    if (uDimStrength > 0.0) {
        vec4 d = texture2D(tDimTexture, coords);
        dimAlpha = d.r * uDimStrength;
        dimFogAlpha = d.r / max(d.g, 0.001);
    }

    // solid fill covering the interior of marked regions, sampled directly from the mask
    vec3 fillRgb = vec3(0.0);
    float fillAlpha = 0.0;
    float fillFogAlpha = 1.0;
    if (uHighlightFillStrength > 0.0 || uSelectFillStrength > 0.0) {
        vec4 m = texture2D(tMaskTexture, coords);
        float coverage = 1.0 - m.r;
        if (coverage > 0.0) {
            vec3 marked = clamp((m.gba - m.r) / max(coverage, 0.001), 0.0, 1.0);
            bool isHighlight = marked.y > 0.5;
            fillRgb = isHighlight ? uHighlightFillColor : uSelectFillColor;
            float fillStrength = isHighlight ? uHighlightFillStrength : uSelectFillStrength;
            fillFogAlpha = marked.z;
            // marked.x: 1.0 = hidden, 0.0 = visible; without depth test every marked texel reads as hidden
            float visibility = uDepthTest && marked.x > 0.5 ? 0.0 : 1.0;
            fillAlpha = coverage * fillStrength * visibility * fillFogAlpha * unpackMarkingOpacity(marked.x);
        }
    }

    // keep the shading of the image, so that blending toward the color does not wash it out
    vec3 dimRgb = uDimColor;
    if (dimAlpha > 0.0 || fillAlpha > 0.0) {
        #if defined(dMarkingShading_ssao)
            float occlusion = unpackSsao(texture2D(tSsaoDepth, coords + uOcclusionOffset));
            dimRgb = applyOcclusion(dimRgb, occlusion, dimFogAlpha);
            fillRgb = applyOcclusion(fillRgb, occlusion, fillFogAlpha);
        #elif defined(dMarkingShading_traced)
            float baseLuminance = luminance(texture2D(tBase, coords).rgb);
            float shadedLuminance = luminance(texture2D(tShaded, coords).rgb);
            dimRgb *= getTracedShading(baseLuminance, shadedLuminance, dimFogAlpha);
            fillRgb *= getTracedShading(baseLuminance, shadedLuminance, fillFogAlpha);
        #endif
    }

    vec4 e = texture2D(tEdgeTexture, coords);
    vec3 edgeRgb = vec3(0.0);
    float edgeAlpha = 0.0;
    if (e.a > 0.0) {
        // the edge is stored premultiplied, see edge.frag
        vec3 edgeValue = e.rgb / e.a;
        bool isHighlight = edgeValue.z > 0.5;
        edgeRgb = isHighlight ? uHighlightEdgeColor : uSelectEdgeColor;
        edgeRgb = edgeValue.y > 0.5 ? edgeRgb : edgeRgb * uInnerEdgeFactor;
        edgeAlpha = (edgeValue.x > 0.5 ? uGhostEdgeStrength : 1.0) * e.a;
        edgeAlpha *= isHighlight ? uHighlightEdgeStrength : uSelectEdgeStrength;
    }

    // premultiplied, so that partially covered pixels are not weighted by alpha twice; dim, fill, edge from bottom to top
    vec3 rgb = fillRgb * fillAlpha + dimRgb * dimAlpha * (1.0 - fillAlpha);
    float alpha = fillAlpha + dimAlpha * (1.0 - fillAlpha);
    gl_FragColor.rgb = edgeRgb * edgeAlpha + rgb * (1.0 - edgeAlpha);
    gl_FragColor.a = edgeAlpha + alpha * (1.0 - edgeAlpha);
}
`;var vn=`
precision highp float;
precision highp sampler2D;

uniform sampler2D tMaskTexture;
uniform vec2 uTexSizeInv;
uniform float uEdgeScale;

// the mask is antialiased, so the coverage can be taken from a single texel
vec4 getMask(vec2 coords) {
    return texture2D(tMaskTexture, coords);
}

void main() {
    vec2 coords = gl_FragCoord.xy * uTexSizeInv;
    vec4 offset = vec4(uEdgeScale, 0.0, 0.0, uEdgeScale) * vec4(uTexSizeInv, uTexSizeInv);

    vec4 m1 = getMask(coords + offset.xy);
    vec4 m2 = getMask(coords - offset.xy);
    vec4 m3 = getMask(coords + offset.yw);
    vec4 m4 = getMask(coords - offset.yw);

    float edge = max(abs(m1.r - m2.r), abs(m3.r - m4.r));
    if (edge <= 0.0)
        discard;

    // the sample covering the most of the marked region, mask values are 0.0 where marked
    vec4 mx = m1.r < m2.r ? m1 : m2;
    vec4 my = m3.r < m4.r ? m3 : m4;
    vec4 m = mx.r < my.r ? mx : my;

    // the samples average marked and unmarked texels and unmarked ones are 1.0 in every channel,
    // so the values of the marked texels can be recovered from how much they are covered
    vec3 marked = clamp((m.gba - m.r) / max(1.0 - m.r, 0.001), 0.0, 1.0);

    float visibility = marked.x > 0.5 ? 1.0 : 0.0;
    float mask = texture2D(tMaskTexture, coords).r;
    float marker = marked.y > 0.5 ? 1.0 : 0.0;
    float fogAlpha = marked.z;
    // premultiplied, so that a blurred sample of this can be decoded the same way
    gl_FragColor = vec4(visibility, mask, marker, 1.0) * (edge * fogAlpha);
}
`;var yn=`
precision highp float;
precision highp sampler2D;

uniform sampler2D tDepthTexture;
uniform sampler2D tMaskTexture;
uniform vec2 uTexSizeInv;
uniform float uIsOrtho;
uniform float uNear;
uniform float uFar;
uniform float uFogNear;
uniform float uFogFar;

#include common

void main() {
    vec2 coords = gl_FragCoord.xy * uTexSizeInv;

    // depth of the front-most unmarked fragment, cleared to 1.0 in every channel where there is none
    vec4 packedDepth = texture2D(tDepthTexture, coords);
    if (packedDepth == vec4(1.0))
        discard;

    // mask values are 0.0 where marked, green is 0.0 where the marked fragment is in front
    vec4 m = texture2D(tMaskTexture, coords);
    if (m.r < 0.5 && m.g < 0.5)
        discard;

    vec2 depthWithAlpha = unpackRGBAToDepthWithAlpha(packedDepth);
    float viewZ = depthToViewZ(uIsOrtho, depthWithAlpha.x, uNear, uFar);
    float fogAlpha = 1.0 - smoothstep(uFogNear, uFogFar, abs(viewZ));
    // after antialiasing: r = coverage * opacity * fogAlpha, g = coverage * opacity
    gl_FragColor = vec4(fogAlpha * depthWithAlpha.y, depthWithAlpha.y, 0.0, 1.0);
}
`;var xn=[[[0,0]],[[0,0],[-4,-4]],[[0,0],[6,-2],[-6,2],[2,6]],[[0,0],[-1,3],[5,1],[-3,-5],[-5,5],[-7,-1],[3,7],[7,-7]],[[0,0],[-1,-3],[-3,2],[4,-1],[-5,-2],[2,5],[5,3],[3,-5],[-2,6],[0,-7],[-4,-6],[-6,4],[-8,0],[7,-4],[6,7],[-7,-8]],[[0,0],[-7,-5],[-3,-5],[-5,-4],[-1,-4],[-2,-2],[-6,-1],[-4,0],[-7,1],[-1,2],[-6,3],[-3,3],[-7,6],[-3,6],[-5,7],[-1,7],[5,-7],[1,-6],[6,-5],[4,-4],[2,-3],[7,-2],[1,-1],[4,-1],[2,1],[6,2],[0,4],[4,4],[2,5],[7,5],[5,6],[3,7]]];xn.forEach(u=>{u.forEach(e=>{e[0]*=.0625,e[1]*=.0625})});function Er(u){return xn[Math.max(0,Math.min(u,5))]}function Ha(u){return Math.pow(2,Math.max(0,u-2))}function Lr(u,e){let{width:t,height:r}=u.viewport;u.viewOffset.enabled=!0,We.setViewOffset(u.viewOffset,t,r,e[0],e[1],t,r),u.update()}function Or(u){u.viewOffset.enabled=!1,u.update()}var ja={enabled:m.Boolean(!0),highlightEdgeColor:m.Color(le.darken(le.fromNormalizedRgb(1,.4,.6),1)),selectEdgeColor:m.Color(le.darken(le.fromNormalizedRgb(.2,1,.1),1)),edgeScale:m.Numeric(1,{min:1,max:3,step:.1},{description:"Thickness of the edge."}),highlightEdgeStrength:m.Numeric(1,{min:0,max:1,step:.1}),selectEdgeStrength:m.Numeric(1,{min:0,max:1,step:.1}),ghostEdgeStrength:m.Numeric(.3,{min:0,max:1,step:.1},{description:"Opacity of the hidden edges that are covered by other geometry. When set to 1 and not dimming, one less geometry render pass is done, but hidden parts are then also tinted."}),innerEdgeFactor:m.Numeric(1.5,{min:0,max:3,step:.1},{description:"Factor to multiply the inner edge color with - for added contrast."})},Mr=[[0,0]];function Xr(u,e){return u.colorMarker&&!e.enabled}var Br=class u{constructor(e,t,r){this.webgl=e;this.antialiasing=null;this.dim=null;this.offsets=Mr;this.sampleCount=0;this.base=void 0;this.baseShading=null;let{colorBufferFloat:a,textureFloat:o,colorBufferHalfFloat:n,textureHalfFloat:s}=e.extensions;this.depthTarget=e.createRenderTarget(t,r,"depth-stencil","uint8","nearest"),this.maskTarget=e.createRenderTarget(t,r,"depth-stencil","uint8","linear"),this.edgesTarget=e.createRenderTarget(t,r);let f=n&&s?"fp16":a&&o?"float32":"uint8";this.layerTarget=e.createRenderTarget(t,r,"none",f),this.edge=Fl(e,this.maskTarget.texture),this.overlay=Il(e,this.edgesTarget.texture,this.maskTarget.texture),this.composite=Lt(e,this.layerTarget.texture)}static isEnabled(e){return e.enabled}static hasMarking(e,t){return u.isEnabled(t.marking)&&e.markerAverage>0}getByteCount(){let e=this.dim?this.dim.target.getByteCount()+this.dim.aaTarget.getByteCount():0;return this.depthTarget.getByteCount()+this.maskTarget.getByteCount()+this.edgesTarget.getByteCount()+this.layerTarget.getByteCount()+(this.antialiasing?.getByteCount()??0)+e}setEdgeState(e){let{gl:t,state:r}=this.webgl;r.enable(t.SCISSOR_TEST),r.enable(t.BLEND),r.blendFunc(t.ONE,t.ONE),r.blendEquation(t.FUNC_ADD),r.disable(t.DEPTH_TEST),r.depthMask(!1);let{x:a,y:o,width:n,height:s}=e;r.viewport(a,o,n,s),r.scissor(a,o,n,s),r.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT)}setViewport(e){let{x:t,y:r,width:a,height:o}=e;this.webgl.state.viewport(t,r,a,o),this.webgl.state.scissor(t,r,a,o)}setSize(e,t){let r=this.depthTarget.getWidth(),a=this.depthTarget.getHeight();(e!==r||t!==a)&&(this.depthTarget.setSize(e,t),this.maskTarget.setSize(e,t),this.edgesTarget.setSize(e,t),this.layerTarget.setSize(e,t),this.antialiasing?.setSize(e,t),this.dim&&(this.dim.target.setSize(e,t),this.dim.aaTarget.setSize(e,t),i.update(this.dim.renderable.values.uTexSizeInv,T.set(this.dim.renderable.values.uTexSizeInv.ref.value,1/e,1/t))),this.sampleCount=0,this.invalidate(),i.update(this.edge.values.uTexSizeInv,T.set(this.edge.values.uTexSizeInv.ref.value,1/e,1/t)),i.update(this.overlay.values.uTexSizeInv,T.set(this.overlay.values.uTexSizeInv.ref.value,1/e,1/t)),i.update(this.composite.values.uTexSize,T.set(this.composite.values.uTexSize.ref.value,e,t)))}update(e,t,r,a,o,n){let{highlightEdgeColor:s,selectEdgeColor:f,edgeScale:p,innerEdgeFactor:l,ghostEdgeStrength:c,highlightEdgeStrength:d,selectEdgeStrength:g}=e.marking,{values:x}=this.edge;i.updateIfChanged(x.uEdgeScale,Math.max(1,p*this.webgl.pixelRatio));let{values:v}=this.overlay;i.update(v.uHighlightEdgeColor,le.toVec3Normalized(v.uHighlightEdgeColor.ref.value,s)),i.update(v.uSelectEdgeColor,le.toVec3Normalized(v.uSelectEdgeColor.ref.value,f)),i.updateIfChanged(v.uInnerEdgeFactor,l),i.updateIfChanged(v.uGhostEdgeStrength,c),i.updateIfChanged(v.uDepthTest,a),i.updateIfChanged(v.uHighlightEdgeStrength,d),i.updateIfChanged(v.uSelectEdgeStrength,g);let{colorMarker:S,highlightColor:P,selectColor:D,highlightStrength:O,selectStrength:z,dimColor:G,dimStrength:I,backgroundColor:M}=t,K=S&&!Xr(t,e.marking);i.update(v.uHighlightFillColor,le.toVec3Normalized(v.uHighlightFillColor.ref.value,P)),i.update(v.uSelectFillColor,le.toVec3Normalized(v.uSelectFillColor.ref.value,D)),i.updateIfChanged(v.uHighlightFillStrength,K?O:0),i.updateIfChanged(v.uSelectFillStrength,K?z:0),i.update(v.uDimColor,le.toVec3Normalized(v.uDimColor.ref.value,G)),i.updateIfChanged(v.uDimStrength,r?I:0);let A=e.postprocessing.occlusion,W=!(r||K&&(O>0||z>0))||!o?"off":o.name==="traced"?"traced":A.name==="on"?"ssao":"off",ae=!1;v.dMarkingShading.ref.value!==W&&(i.update(v.dMarkingShading,W),ae=!0),o?.name==="ssao"&&v.tSsaoDepth.ref.value!==o.ssao&&(i.update(v.tSsaoDepth,o.ssao),ae=!0),o?.name==="traced"&&(v.tBase.ref.value!==n||v.tShaded.ref.value!==o.shaded)&&(i.update(v.tBase,n),i.update(v.tShaded,o.shaded),ae=!0),ae&&this.overlay.update(),W==="ssao"&&A.name==="on"&&i.update(v.uOcclusionColor,le.toVec3Normalized(v.uOcclusionColor.ref.value,A.params.color)),W!=="off"&&(i.update(v.uFogColor,le.toVec3Normalized(v.uFogColor.ref.value,M)),i.updateIfChanged(v.uTransparentBackground,e.transparentBackground))}invalidate(){this.base=void 0,this.baseShading=null}get needsMoreSamples(){return!!this.base&&this.sampleCount>0&&this.sampleCount<this.offsets.length}present(e,t,r){let{base:a,toDrawingBuffer:o,shading:n}=r,{viewport:s}=e.camera,f=this.updateLayer(e,t,r);o?this.copyToDrawingBuffer(a,s):f&&a.bind(),f&&this.compositeLayer(s),o&&!(e.camera instanceof mt)?(this.base=a,this.baseShading=n):this.invalidate()}redraw(e,t,r,a,o){return this.base?(k&&this.webgl.timer.mark("MarkingPass.redraw"),this.present(e,t,{base:this.base,toDrawingBuffer:!0,offsets:r,restart:a,samples:o,shading:this.baseShading}),this.webgl.gl.flush(),k&&this.webgl.timer.markEnd("MarkingPass.redraw"),!0):!1}updateLayer(e,t,r){let{base:a,offsets:o,restart:n,samples:s,shading:f}=r,{renderer:p,camera:l,scene:c,frame:d}=e;if(l instanceof mt||l.disabled||!u.hasMarking(c,t))return this.sampleCount=0,!1;(n||o!==this.offsets)&&(this.offsets=o,this.sampleCount=0);let{colorMarker:g,dimStrength:x}=p.props,v=g&&x>0&&c.markerAverage<1,S=t.marking.ghostEdgeStrength<1||v,P=Math.min(this.sampleCount+s,o.length);if(this.sampleCount>=P)return f?.name==="traced"&&o.length===1&&(this.update(t,p.props,v,S,f,a.texture),this.renderOverlay(e.camera.viewport,1)),!0;k&&this.webgl.timer.mark("MarkingPass.updateLayer");let D=o.length>1&&l instanceof We,{x:O,y:z,width:G,height:I}=l.viewport;for(p.setDrawingBufferSize(this.maskTarget.getWidth(),this.maskTarget.getHeight()),p.setPixelRatio(this.webgl.pixelRatio),p.setViewport(O,z,G,I),this.update(t,p.props,v,S,f,a.texture);this.sampleCount<P;++this.sampleCount){let M=o[this.sampleCount];D&&Lr(l,M),p.update(l,c,d),S&&(this.depthTarget.bind(),p.clear(!1,!0),c.markerAverage!==1&&p.renderMarkingDepth(c.primitives,l)),this.maskTarget.bind(),p.clear(!1,!0),p.renderMarkingMask(c.primitives,l,S?this.depthTarget.texture:null),i.update(this.overlay.values.uOcclusionOffset,T.set(this.overlay.values.uOcclusionOffset.ref.value,D?M[0]/G:0,D?M[1]/I:0)),this.renderSample(l,t.postprocessing,1/(this.sampleCount+1),v)}return D&&Or(l),k&&this.webgl.timer.markEnd("MarkingPass.updateLayer"),!0}getAntialiasing(e){return!e.enabled||e.antialiasing.name==="off"?null:(this.antialiasing||(this.antialiasing=new pr(this.webgl,this.maskTarget.getWidth(),this.maskTarget.getHeight(),"linear")),this.antialiasing)}antialias(e,t,r,a){return this.getAntialiasing(t)?.renderAntialiasingOnly(e,r.texture,a,t)?a.texture:r.texture}getDim(){if(!this.dim){let e=this.maskTarget.getWidth(),t=this.maskTarget.getHeight();this.dim={target:this.webgl.createRenderTarget(e,t,"none","uint8","linear"),aaTarget:this.webgl.createRenderTarget(e,t,"none"),renderable:Ol(this.webgl,this.depthTarget.texture,this.maskTarget.texture)}}return this.dim}renderDim(e,t){let{gl:r,state:a}=this.webgl,{target:o,aaTarget:n,renderable:s}=this.getDim(),{values:f}=s;return i.updateIfChanged(f.uIsOrtho,e.state.mode==="orthographic"?1:0),i.updateIfChanged(f.uNear,e.near),i.updateIfChanged(f.uFar,e.far),i.updateIfChanged(f.uFogNear,e.fogNear),i.updateIfChanged(f.uFogFar,e.fogFar),o.bind(),this.setViewport(e.viewport),a.enable(r.SCISSOR_TEST),a.disable(r.BLEND),a.disable(r.DEPTH_TEST),a.depthMask(!1),a.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),s.render(),this.antialias(e,t,o,n)}renderSample(e,t,r,a){k&&this.webgl.timer.mark("MarkingPass.renderSample");let o=a?this.renderDim(e,t):this.maskTarget.texture,n=this.getAntialiasing(t),s=n?this.antialias(e,t,this.maskTarget,n.target):this.maskTarget.texture;this.edge.values.tMaskTexture.ref.value!==s&&(i.update(this.edge.values.tMaskTexture,s),this.edge.update(),i.update(this.overlay.values.tMaskTexture,s),this.overlay.update()),this.overlay.values.tDimTexture.ref.value!==o&&(i.update(this.overlay.values.tDimTexture,o),this.overlay.update());let f=e.viewport;this.edgesTarget.bind(),this.setEdgeState(f),this.edge.render(),this.renderOverlay(f,r),k&&this.webgl.timer.markEnd("MarkingPass.renderSample")}renderOverlay(e,t){let{gl:r,state:a}=this.webgl;this.layerTarget.bind(),this.setViewport(e),a.enable(r.SCISSOR_TEST),a.enable(r.BLEND),a.blendColor(0,0,0,t),a.blendFunc(r.CONSTANT_ALPHA,r.ONE_MINUS_CONSTANT_ALPHA),a.blendEquation(r.FUNC_ADD),this.overlay.render()}compositeLayer(e){let{gl:t,state:r}=this.webgl;r.enable(t.SCISSOR_TEST),r.enable(t.BLEND),r.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),r.blendEquation(t.FUNC_ADD),r.disable(t.DEPTH_TEST),r.depthMask(!1),this.setViewport(e),this.composite.render()}copyToDrawingBuffer(e,t){let{gl:r,state:a}=this.webgl,o=co(this.webgl,e.texture);this.webgl.bindDrawingBuffer(),a.enable(r.SCISSOR_TEST),a.disable(r.BLEND),a.disable(r.DEPTH_TEST),a.depthMask(!1),this.setViewport(t),o.render()}},kl={...be,tMaskTexture:j("texture","rgba","ubyte","linear"),uTexSizeInv:C("v2"),uEdgeScale:C("f")},Rl=he("edge",Te,vn);function Fl(u,e){let t=e.getWidth(),r=e.getHeight(),a={...ve,tMaskTexture:i.create(e),uTexSizeInv:i.create(T.create(1/t,1/r)),uEdgeScale:i.create(1)},o={...kl},n=me(u,"triangles",Rl,o,a);return fe(n,a)}var El={...be,tDepthTexture:j("texture","rgba","ubyte","nearest"),tMaskTexture:j("texture","rgba","ubyte","linear"),uTexSizeInv:C("v2"),uIsOrtho:C("f"),uNear:C("f"),uFar:C("f"),uFogNear:C("f"),uFogFar:C("f")},Ll=he("dim",Te,yn);function Ol(u,e,t){let r=t.getWidth(),a=t.getHeight(),o={...ve,tDepthTexture:i.create(e),tMaskTexture:i.create(t),uTexSizeInv:i.create(T.create(1/r,1/a)),uIsOrtho:i.create(0),uNear:i.create(1),uFar:i.create(1e4),uFogNear:i.create(1),uFogFar:i.create(1e4)},n={...El},s=me(u,"triangles",Ll,n,o);return fe(s,o)}var Bl={...be,tEdgeTexture:j("texture","rgba","ubyte","linear"),tMaskTexture:j("texture","rgba","ubyte","linear"),tDimTexture:j("texture","rgba","ubyte","linear"),uTexSizeInv:C("v2"),uHighlightEdgeColor:C("v3"),uSelectEdgeColor:C("v3"),uHighlightEdgeStrength:C("f"),uSelectEdgeStrength:C("f"),uGhostEdgeStrength:C("f"),uDepthTest:C("b"),uInnerEdgeFactor:C("f"),uHighlightFillColor:C("v3"),uSelectFillColor:C("v3"),uHighlightFillStrength:C("f"),uSelectFillStrength:C("f"),uDimColor:C("v3"),uDimStrength:C("f"),tSsaoDepth:j("texture","rgba","ubyte","linear"),uOcclusionColor:C("v3"),uFogColor:C("v3"),uTransparentBackground:C("b"),uOcclusionOffset:C("v2"),tBase:j("texture","rgba","ubyte","nearest"),tShaded:j("texture","rgba","ubyte","nearest"),dMarkingShading:ee("string",["off","ssao","traced"])},Ml=he("overlay",Te,bn);function Il(u,e,t){let r=e.getWidth(),a=e.getHeight(),o={...ve,tEdgeTexture:i.create(e),tMaskTexture:i.create(t),tDimTexture:i.create(t),uTexSizeInv:i.create(T.create(1/r,1/a)),uHighlightEdgeColor:i.create(b()),uSelectEdgeColor:i.create(b()),uHighlightEdgeStrength:i.create(1),uSelectEdgeStrength:i.create(1),uGhostEdgeStrength:i.create(0),uDepthTest:i.create(!1),uInnerEdgeFactor:i.create(0),uHighlightFillColor:i.create(b()),uSelectFillColor:i.create(b()),uHighlightFillStrength:i.create(0),uSelectFillStrength:i.create(0),uDimColor:i.create(b()),uDimStrength:i.create(0),tSsaoDepth:i.create(t),uOcclusionColor:i.create(b()),uFogColor:i.create(b()),uTransparentBackground:i.create(!1),uOcclusionOffset:i.create(T()),tBase:i.create(t),tShaded:i.create(t),dMarkingShading:i.create("off")},n={...Bl},s=me(u,"triangles",Ml,n,o);return fe(s,o)}var Tn=`
precision highp int;
precision highp float;
precision highp sampler2D;

uniform sampler2D tColor;
uniform sampler2D tNormal;
uniform sampler2D tShaded;
uniform sampler2D tThickness;
uniform sampler2D tAccumulate;
uniform sampler2D tDepth;
uniform vec2 uTexSize;
uniform vec4 uBounds;

uniform float uNear;
uniform float uFar;
uniform float uFogNear;
uniform float uFogFar;
uniform vec3 uFogColor;

#if dLightCount != 0
    uniform vec3 uLightDirection[dLightCount];
    uniform vec3 uLightColor[dLightCount];
#endif
uniform vec3 uAmbientColor;
uniform float uExposure;

uniform int uFrameNo;

uniform float uRayDistance;
uniform float uMinThickness;
uniform float uThicknessFactor;
uniform float uThickness;

uniform float uShadowSoftness;
uniform float uShadowThickness;

uniform mat4 uProjection;
uniform mat4 uInvProjection;

#include common

// parts adapted from
// - https://blog.demofox.org/2020/05/25/casual-shadertoy-path-tracing-1-basic-camera-diffuse-emissive/
// - https://github.com/0beqz/realism-effects/blob/v2-debug/src/ssgi/shader/ssgi.frag

//

// after a hit, it moves the ray this far along the normal away from a surface.
// Helps prevent incorrect intersections when rays bounce off of objects.
#define RayPosNormalNudge 0.0001

#if __VERSION__ == 100
    #define StateType float

    // from https://www.shadertoy.com/view/4djSRW
    float hash14(vec4 p4) {
        p4 = fract(p4  * vec4(0.1031, 0.1030, 0.0973, 0.1099));
        p4 += dot(p4, p4.wzxy + 33.33);
        return fract((p4.x + p4.y) * (p4.z + p4.w));
    }

    float randomFloat(inout float state) {
        state += 0.06711056;
        return 1.0 - hash14(vec4(gl_FragCoord.xy, float(uFrameNo), state));
    }
#else
    #define StateType uint

    // https://www.pcg-random.org/
    // https://jcgt.org/published/0009/03/02/
    uint pcg(inout uint seed) {
        seed = seed * 747796405u + 2891336453u;
        uint word = ((seed >> ((seed >> 28u) + 4u)) ^ seed) * 277803737u;
        return (word >> 22u) ^ word;
    }

    float randomFloat(inout uint state) {
        return float(pcg(state)) / 4294967296.0;
    }
#endif

vec3 randomUnitVector(inout StateType state) {
    float z = randomFloat(state) * 2.0 - 1.0;
    float a = randomFloat(state) * TWO_PI;
    float r = sqrt(1.0 - z * z);
    float x = r * cos(a);
    float y = r * sin(a);
    return vec3(x, y, z);
}

struct RayHitInfo {
    bool missed;
    vec3 position;
    vec3 normal;
    vec3 color;
    vec3 emissive;
};

//

// inset by half a texel to avoid sampling texels outside the viewport
vec2 clampToBounds(const in vec2 coords) {
    vec2 halfTexel = 0.5 / uTexSize;
    return clamp(coords, uBounds.xy + halfTexel, uBounds.zw - halfTexel);
}

float getDepth(const in vec2 coords) {
    return texture2D(tDepth, clampToBounds(coords)).r;
}

float getThickness(const in vec2 coords) {
    return unpackRGBAToDepth(texture2D(tThickness, clampToBounds(coords)));
}

bool isBackground(const in float depth) {
    return depth == 1.0;
}

float getViewZ(const in float depth) {
    #if dOrthographic == 1
        return orthographicDepthToViewZ(depth, uNear, uFar);
    #else
        return perspectiveDepthToViewZ(depth, uNear, uFar);
    #endif
}

vec2 viewSpaceToScreenSpace(const vec3 position) {
    vec4 projectedCoord = uProjection * vec4(position, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    // [-1, 1] --> [0, 1] (NDC to screen position)
    projectedCoord.xy = projectedCoord.xy * 0.5 + 0.5;
    return projectedCoord.xy;
}

float getRayOffset(const vec3 position) {
    vec4 projectedCoord = uProjection * vec4(position, 1.0);
    projectedCoord.xyz /= projectedCoord.w;
    projectedCoord.xyz = projectedCoord.xyz * 0.5 + 0.5;
    float viewportWidth = uTexSize.x * (uBounds.z - uBounds.x);
    vec3 adjacentPosition = screenSpaceToViewSpace(vec3(projectedCoord.xy + vec2(1.0 / viewportWidth, 0.0), projectedCoord.z), uInvProjection);
    return max(distance(position, adjacentPosition) * 0.1, 0.001);
}

vec2 binarySearch(inout vec3 dir, inout vec3 hitPos) {
    float rayHitDepthDifference;
    vec2 coords;

    dir *= 0.5;
    hitPos -= dir;

    for (int i = 0; i < dRefineSteps; i++) {
        coords = viewSpaceToScreenSpace(hitPos);
        float depth = getDepth(coords);
        float z = getViewZ(depth);
        rayHitDepthDifference = z - hitPos.z;

        dir *= 0.5;
        if (rayHitDepthDifference >= 0.0) {
            hitPos -= dir;
        } else {
            hitPos += dir;
        }
    }

    coords = clampToBounds(viewSpaceToScreenSpace(hitPos));

    return coords;
}

float calculateGrowthFactor(float begin, float end, float steps) {
    return pow(end / begin, 1.0 / steps);
}

vec2 rayMarch(in vec3 dir, in float thickness, inout vec3 hitPos, out bool missed) {
    float rayHitDepthDifference;
    vec2 coords;

    float begin = getRayOffset(hitPos);
    dir *= begin;
    missed = false;
    float gf = calculateGrowthFactor(begin, uRayDistance, float(dSteps));

    for (int i = 1; i < dSteps; i++) {
        hitPos += dir;
        float stepZ = abs(dir.z);
        dir *= gf;

        coords = clampToBounds(viewSpaceToScreenSpace(hitPos));
        float depth = getDepth(coords);
        float z = getViewZ(depth);
        rayHitDepthDifference = z - hitPos.z;

        if (rayHitDepthDifference >= 0.0) {
            float t = thickness;
            if (t == 0.0) {
                #ifdef dThicknessMode_auto
                    t = max(uMinThickness, (z - getViewZ(getThickness(coords))) * uThicknessFactor * texture2D(tColor, coords).a);
                #else
                    t = uThickness;
                #endif
            }

            if (rayHitDepthDifference < max(t, stepZ)) {
                if (dRefineSteps == 0) {
                    return coords;
                } else {
                    return binarySearch(dir, hitPos);
                }
            }
        }
    }

    missed = true;

    return coords;
}

//

void trace(in vec3 rayPos, in vec3 rayDir, inout RayHitInfo hitInfo) {
    vec3 hitPos = vec3(rayPos);
    bool missed;
    vec2 coords;
    coords = rayMarch(rayDir, 0.0, hitPos, missed);

    hitInfo.missed = missed;
    hitInfo.position = hitPos;
    hitInfo.normal = -texture2D(tNormal, coords).rgb;
    hitInfo.color = texture2D(tColor, coords).rgb;
    hitInfo.emissive = texture2D(tColor, coords).rgb * texture2D(tNormal, coords).a * 2.0;

    float depth = getDepth(coords);
    if (isBackground(depth)) {
        hitInfo.emissive = vec3(0.0);
    }
}

vec3 viewPos;

vec3 colorForRay(in vec3 startRayPos, in vec3 startRayDir, inout StateType rngState) {
    vec3 ret = vec3(0.0, 0.0, 0.0);

    vec3 throughput = vec3(1.0, 1.0, 1.0);
    vec3 rayPos = startRayPos;
    vec3 rayDir = startRayDir;

    RayHitInfo hitInfo;
    RayHitInfo prevHitInfo;

    for (int bounceIndex = 0; bounceIndex <= dBounces; ++bounceIndex) {
        // shoot a ray out into the world
        if (bounceIndex == 0) {
            vec2 coords = gl_FragCoord.xy / uTexSize;
            float depth = getDepth(coords);

            hitInfo.missed = false;
            hitInfo.position = screenSpaceToViewSpace(vec3(coords, depth), uInvProjection);
            hitInfo.normal = -texture2D(tNormal, coords).rgb;
            hitInfo.color = texture2D(tShaded, coords).rgb;
            hitInfo.emissive = texture2D(tColor, coords).rgb * texture2D(tNormal, coords).a;

            // shadow
            #ifdef dShadowEnable
                #if dLightCount != 0
                    // attenuate by the fraction of unoccluded irradiance, weighting each
                    // light by its actual contribution so back-facing lights don't darken
                    vec3 directLight = uAmbientColor;
                    vec3 fullLight = uAmbientColor;
                    vec3 irradiance;
                    float ndotl;
                    bool missed;
                    vec3 hitPos;
                    #pragma unroll_loop_start
                    for (int i = 0; i < dLightCount; ++i) {
                        ndotl = saturate(dot(hitInfo.normal, -uLightDirection[i]));
                        irradiance = ndotl * uLightColor[i];
                        fullLight += irradiance;
                        if (ndotl > 0.0) {
                            missed = false;
                            hitPos = viewPos + hitInfo.normal * RayPosNormalNudge;
                            hitPos += -uLightDirection[i] * (randomFloat(rngState));
                            rayMarch(-uLightDirection[i] + randomUnitVector(rngState) * uShadowSoftness, uShadowThickness, hitPos, missed);
                            if (missed) directLight += irradiance;
                        }
                    }
                    #pragma unroll_loop_end
                    hitInfo.color *= directLight / max(fullLight, vec3(0.0001));
                #endif
            #endif

            if (hitInfo.normal == vec3(0.0)) {
                hitInfo.missed = true;
            }
        } else {
            prevHitInfo = hitInfo;
            trace(rayPos, rayDir, hitInfo);
        }

        // if the ray missed, we are done
        if (hitInfo.missed) {
            vec3 escapeColor = prevHitInfo.color;
            if (bounceIndex > 1) {
                vec3 accIrradiance = uAmbientColor;
                #if dLightCount != 0
                    #pragma unroll_loop_start
                    for (int i = 0; i < dLightCount; ++i) {
                        accIrradiance += saturate(dot(prevHitInfo.normal, -uLightDirection[i])) * uLightColor[i];
                    }
                    #pragma unroll_loop_end
                #endif
                escapeColor = min(prevHitInfo.color * accIrradiance, 0.99) * uExposure;
            }
            ret += escapeColor * throughput;
            break;
        }

        // add emissive light
        ret += hitInfo.emissive * throughput;

        // update the ray position
        rayPos = hitInfo.position + hitInfo.normal * RayPosNormalNudge;

        // new ray direction from normal oriented cosine weighted hemisphere sample
        rayDir = normalize(hitInfo.normal + randomUnitVector(rngState));

        if (bounceIndex == 0) {
            continue;
        }

        // update the colorMultiplier.
        throughput *= hitInfo.color;

        // Russian Roulette
        // As the throughput gets smaller, the ray is more likely to get terminated early.
        // Survivors have their value boosted to make up for fewer samples being in the average.
        {
            float p = max(throughput.r, max(throughput.g, throughput.b));
            if (randomFloat(rngState) > p)
                break;

            // Add the energy we 'lose' by randomly terminating paths
            throughput *= 1.0 / p;
        }
    }

    // return pixel color
    return ret;
}

void main() {
    vec2 coords = gl_FragCoord.xy / uTexSize;
    float depth = getDepth(coords);

    if (isBackground(depth)) {
        gl_FragColor = texture2D(tColor, coords);
        return;
    }

    #if __VERSION__ == 100
        float rngState = 26699.0;
    #else
        // initialize a random number state based on gl_FragCoord and uFrameNo
        uint rngState = uint(uint(gl_FragCoord.x) * 1973u + uint(gl_FragCoord.y) * 9277u + uint(uFrameNo) * 26699u) | 1u;
    #endif

    vec3 cameraPos = vec3(0.0, 0.0, 0.0);
    viewPos = screenSpaceToViewSpace(vec3(coords, depth), uInvProjection);
    vec3 rayDir = normalize(viewPos);

    // raytrace for this pixel
    vec3 color = vec3(0.0, 0.0, 0.0);
    for (int index = 0; index < int(dRendersPerFrame); ++index) {
        color += colorForRay(cameraPos, rayDir, rngState) / float(dRendersPerFrame);
    }

    // average the frames together
    vec4 lastFrameColor = texture2D(tAccumulate, coords);
    float blend = (uFrameNo < 1 || lastFrameColor.a == 0.0) ? 1.0 : 1.0 / (1.0 + (1.0 / lastFrameColor.a));
    color = mix(lastFrameColor.rgb, color, blend);

    // show the result
    gl_FragColor = vec4(color, blend);
}
`;var Sn=`
precision highp float;
precision highp sampler2D;

uniform sampler2D tColor;
uniform vec2 uTexSize;
uniform float uWeight;

void main() {
    vec2 coords = gl_FragCoord.xy / uTexSize;
    gl_FragColor = texture2D(tColor, coords) * uWeight;
}
`;var Cn={rendersPerFrame:m.Interval([1,16],{min:1,max:64,step:1},{description:"Number of rays per pixel each frame. May be adjusted to reach targetFps but will stay within given interval."}),targetFps:m.Numeric(30,{min:0,max:120,step:.1},{description:"Target FPS per frame. If observed FPS is lower or higher, some parameters may get adjusted."}),steps:m.Numeric(32,{min:1,max:1024,step:1}),refineSteps:m.Numeric(4,{min:0,max:8,step:1},{description:"Number of refine steps per ray hit. May be lower to reach targetFps."}),rayDistance:m.Numeric(256,{min:1,max:8192,step:1},{description:"Maximum distance a ray can travel (in world units)."}),thicknessMode:m.Select("auto",m.arrayToOptions(["auto","fixed"])),minThickness:m.Numeric(.5,{min:.1,max:16,step:.1},{hideIf:u=>u.thicknessMode==="fixed"}),thicknessFactor:m.Numeric(1,{min:.1,max:2,step:.05},{hideIf:u=>u.thicknessMode==="fixed"}),thickness:m.Numeric(4,{min:.1,max:512,step:.1},{hideIf:u=>u.thicknessMode==="auto"}),bounces:m.Numeric(4,{min:1,max:32,step:1},{description:"Number of bounces for each ray."}),shadowEnable:m.Boolean(!1),shadowSoftness:m.Numeric(.1,{min:.01,max:1,step:.01}),shadowThickness:m.Numeric(.5,{min:0,max:32,step:.1},{description:"Thickness of the shadow casting geometry. Set to 0.0 for automatic estimation."})},Ga=class{constructor(e,t){this.webgl=e;this.drawPass=t;this.clearAdjustedProps=!0;this.prevTime=0;this.currTime=0;this.rendersPerFrame=1;this.refineSteps=1;this.steps=16;let{extensions:{drawBuffers:r,colorBufferHalfFloat:a,textureHalfFloat:o},resources:n,isWebGL2:s}=e,{depthTextureOpaque:f}=t,p=f.getWidth(),l=f.getHeight();s?(this.shadedTextureOpaque=n.texture("image-uint8","rgba","ubyte","nearest"),this.shadedTextureOpaque.define(p,l),this.normalTextureOpaque=a&&o?n.texture("image-float16","rgba","fp16","nearest"):n.texture("image-float32","rgba","float","nearest"),this.normalTextureOpaque.define(p,l),this.colorTextureOpaque=n.texture("image-uint8","rgba","ubyte","nearest"),this.colorTextureOpaque.define(p,l)):(this.shadedTextureOpaque=n.texture("image-float32","rgba","float","nearest"),this.shadedTextureOpaque.define(p,l),this.normalTextureOpaque=n.texture("image-float32","rgba","float","nearest"),this.normalTextureOpaque.define(p,l),this.colorTextureOpaque=n.texture("image-float32","rgba","float","nearest"),this.colorTextureOpaque.define(p,l)),this.framebuffer=n.framebuffer(),this.framebuffer.bind(),r.drawBuffers([r.COLOR_ATTACHMENT0,r.COLOR_ATTACHMENT1,r.COLOR_ATTACHMENT2]),this.shadedTextureOpaque.attachFramebuffer(this.framebuffer,"color0"),this.normalTextureOpaque.attachFramebuffer(this.framebuffer,"color1"),this.colorTextureOpaque.attachFramebuffer(this.framebuffer,"color2"),this.thicknessTarget=e.createRenderTarget(p,l,"depth-stencil","uint8","nearest"),this.holdTarget=e.createRenderTarget(p,l,"none","float32"),this.accumulateTarget=e.createRenderTarget(p,l,"none","float32"),this.composeTarget=e.createRenderTarget(p,l,"none","uint8","linear"),this.traceRenderable=Vl(e,this.colorTextureOpaque,this.normalTextureOpaque,this.shadedTextureOpaque,this.thicknessTarget.texture,this.accumulateTarget.texture,this.drawPass.depthTextureOpaque),this.accumulateRenderable=jl(e,this.holdTarget.texture)}getByteCount(){return this.thicknessTarget.getByteCount()+this.holdTarget.getByteCount()+this.accumulateTarget.getByteCount()+this.composeTarget.getByteCount()+this.colorTextureOpaque.getByteCount()+this.normalTextureOpaque.getByteCount()+this.shadedTextureOpaque.getByteCount()}renderInput(e,t,r,a){k&&this.webgl.timer.mark("TracePass.renderInput");let{gl:o,state:n}=this.webgl;this.framebuffer.bind(),this.drawPass.depthTextureOpaque.attachFramebuffer(this.framebuffer,"depth"),e.clear(!0),e.renderTracing(r.primitives,t),a.thicknessMode==="auto"&&(this.thicknessTarget.bind(),n.clearColor(0,0,0,0),n.clearDepth(0),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT),e.renderDepthOpaqueBack(r.primitives,t),n.clearDepth(1)),k&&this.webgl.timer.markEnd("TracePass.renderInput")}setSize(e,t){let r=this.composeTarget.getWidth(),a=this.composeTarget.getHeight();(e!==r||t!==a)&&(this.thicknessTarget.setSize(e,t),this.holdTarget.setSize(e,t),this.accumulateTarget.setSize(e,t),this.composeTarget.setSize(e,t),this.colorTextureOpaque.define(e,t),this.normalTextureOpaque.define(e,t),this.shadedTextureOpaque.define(e,t),i.update(this.traceRenderable.values.uTexSize,T.set(this.traceRenderable.values.uTexSize.ref.value,e,t)),i.update(this.accumulateRenderable.values.uTexSize,T.set(this.accumulateRenderable.values.uTexSize.ref.value,e,t)))}reset(){let{drawBuffers:e}=this.webgl.extensions;this.framebuffer.bind(),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1,e.COLOR_ATTACHMENT2]),this.shadedTextureOpaque.attachFramebuffer(this.framebuffer,"color0"),this.normalTextureOpaque.attachFramebuffer(this.framebuffer,"color1"),this.colorTextureOpaque.attachFramebuffer(this.framebuffer,"color2"),this.restart(!0)}restart(e=!1){let{gl:t,state:r}=this.webgl;this.accumulateTarget.bind(),r.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),this.composeTarget.bind(),r.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),e&&(this.prevTime=0,this.currTime=0,this.clearAdjustedProps=!0)}increaseAdjustedProps(e){this.steps+=1,this.steps>e.steps&&(this.refineSteps+=1),this.refineSteps>e.refineSteps&&(this.rendersPerFrame+=1)}decreaseAdjustedProps(e){let t=Math.min(1,e.refineSteps);this.rendersPerFrame-=1,this.rendersPerFrame<1&&(this.refineSteps-=1),this.refineSteps<t&&(this.steps-=1)}getAdjustedProps(e,t){this.currTime=qt();let r=Math.min(1,e.refineSteps),a=Math.round(e.steps/2);if(this.clearAdjustedProps&&(this.rendersPerFrame=e.rendersPerFrame[0],this.refineSteps=r,this.steps=a,this.clearAdjustedProps=!1),t>0){let o=1e3/e.targetFps,n=this.currTime-this.prevTime,s=Math.round(n/o);if(s>=2)for(;s>0;)this.decreaseAdjustedProps(e),s-=1;else n<o?this.increaseAdjustedProps(e):n>o+.5&&this.decreaseAdjustedProps(e)}return this.prevTime=this.currTime,this.rendersPerFrame=nr(this.rendersPerFrame,e.rendersPerFrame[0],e.rendersPerFrame[1]),this.refineSteps=nr(this.refineSteps,r,e.refineSteps),this.steps=nr(this.steps,a,e.steps),{rendersPerFrame:t===0?Math.ceil(this.rendersPerFrame/2):this.rendersPerFrame,refineSteps:t===0?r:this.refineSteps,steps:t===0?a:this.steps}}render(e,t,r,a,o){let{rendersPerFrame:n,refineSteps:s,steps:f}=this.getAdjustedProps(r,a);k&&this.webgl.timer.mark("TracePass.render",{note:`${n} rendersPerFrame, ${s} refineSteps, ${f} steps`});let{renderer:p,camera:l,scene:c,frame:d}=e,{gl:g,state:x}=this.webgl,{x:v,y:S,width:P,height:D}=l.viewport;(a===0||o)&&(p.setTransparentBackground(t),p.setDrawingBufferSize(this.composeTarget.getWidth(),this.composeTarget.getHeight()),p.setPixelRatio(this.webgl.pixelRatio),p.setViewport(v,S,P,D),p.update(l,c,d),this.renderInput(p,l,c,r)),x.disable(g.BLEND),x.disable(g.DEPTH_TEST),x.disable(g.CULL_FACE),x.depthMask(!1),x.viewport(v,S,P,D),x.scissor(v,S,P,D);let O=B.identity();B.invert(O,l.projection);let z=l.state.mode==="orthographic"?1:0,[G,I]=this.traceRenderable.values.uTexSize.ref.value,M=l.viewport,K=b();b.scale(K,le.toArrayNormalized(p.props.ambientColor,K,0),p.props.ambientIntensity),this.holdTarget.bind();let A=!1;i.update(this.traceRenderable.values.uFrameNo,a),this.traceRenderable.values.dRendersPerFrame.ref.value!==n&&(i.update(this.traceRenderable.values.dRendersPerFrame,n),A=!0),i.update(this.traceRenderable.values.uProjection,l.projection),i.update(this.traceRenderable.values.uInvProjection,O),Oe.set(this.traceRenderable.values.uBounds.ref.value,M.x/G,M.y/I,(M.x+M.width)/G,(M.y+M.height)/I),i.update(this.traceRenderable.values.uBounds,this.traceRenderable.values.uBounds.ref.value),i.updateIfChanged(this.traceRenderable.values.uNear,l.near),i.updateIfChanged(this.traceRenderable.values.uFar,l.far),i.updateIfChanged(this.traceRenderable.values.uFogFar,l.fogFar),i.updateIfChanged(this.traceRenderable.values.uFogNear,l.fogNear),i.update(this.traceRenderable.values.uFogColor,le.toVec3Normalized(this.traceRenderable.values.uFogColor.ref.value,p.props.backgroundColor)),this.traceRenderable.values.dOrthographic.ref.value!==z&&(i.update(this.traceRenderable.values.dOrthographic,z),A=!0),i.update(this.traceRenderable.values.uLightDirection,p.light.direction),i.update(this.traceRenderable.values.uLightColor,p.light.color),this.traceRenderable.values.dLightCount.ref.value!==p.light.count&&(i.update(this.traceRenderable.values.dLightCount,p.light.count),A=!0),i.update(this.traceRenderable.values.uAmbientColor,K),i.updateIfChanged(this.traceRenderable.values.uExposure,p.props.exposure),this.traceRenderable.values.dBounces.ref.value!==r.bounces&&(i.update(this.traceRenderable.values.dBounces,r.bounces),A=!0),this.traceRenderable.values.dSteps.ref.value!==f&&(i.update(this.traceRenderable.values.dSteps,f),A=!0),this.traceRenderable.values.dRefineSteps.ref.value!==s&&(i.update(this.traceRenderable.values.dRefineSteps,s),A=!0),i.updateIfChanged(this.traceRenderable.values.uRayDistance,r.rayDistance),this.traceRenderable.values.dThicknessMode.ref.value!==r.thicknessMode&&(i.update(this.traceRenderable.values.dThicknessMode,r.thicknessMode),A=!0),i.updateIfChanged(this.traceRenderable.values.uMinThickness,r.minThickness),i.updateIfChanged(this.traceRenderable.values.uThicknessFactor,r.thicknessFactor),i.updateIfChanged(this.traceRenderable.values.uThickness,r.thickness),this.traceRenderable.values.dShadowEnable.ref.value!==r.shadowEnable&&(i.update(this.traceRenderable.values.dShadowEnable,r.shadowEnable),A=!0),i.updateIfChanged(this.traceRenderable.values.uShadowSoftness,r.shadowSoftness),i.updateIfChanged(this.traceRenderable.values.uShadowThickness,r.shadowThickness),A&&this.traceRenderable.update(),k&&this.webgl.timer.mark("TracePass.renderTrace"),this.traceRenderable.render(),k&&this.webgl.timer.markEnd("TracePass.renderTrace"),this.accumulateTarget.bind(),this.accumulateRenderable.render(),k&&this.webgl.timer.markEnd("TracePass.render")}},Al={...be,tColor:j("texture","rgba","ubyte","nearest"),tNormal:j("texture","rgba","ubyte","nearest"),tShaded:j("texture","rgba","ubyte","nearest"),tThickness:j("texture","rgba","ubyte","nearest"),tAccumulate:j("texture","rgba","ubyte","nearest"),tDepth:j("texture","rgba","ubyte","nearest"),uTexSize:C("v2"),dOrthographic:ee("number"),uNear:C("f"),uFar:C("f"),uFogNear:C("f"),uFogFar:C("f"),uFogColor:C("v3"),uProjection:C("m4"),uInvProjection:C("m4"),uBounds:C("v4"),uLightDirection:C("v3[]"),uLightColor:C("v3[]"),dLightCount:ee("number"),uAmbientColor:C("v3"),uExposure:C("f"),uFrameNo:C("i"),dRendersPerFrame:ee("number"),dBounces:ee("number"),dSteps:ee("number"),dRefineSteps:ee("number"),uRayDistance:C("f"),dThicknessMode:ee("string"),uMinThickness:C("f"),uThicknessFactor:C("f"),uThickness:C("f"),dShadowEnable:ee("boolean"),uShadowSoftness:C("f"),uShadowThickness:C("f")},zl=he("trace",Te,Tn);function Vl(u,e,t,r,a,o,n){let s={...ve,tColor:i.create(e),tNormal:i.create(t),tShaded:i.create(r),tThickness:i.create(a),tAccumulate:i.create(o),tDepth:i.create(n),uTexSize:i.create(T.create(e.getWidth(),e.getHeight())),dOrthographic:i.create(0),uNear:i.create(1),uFar:i.create(1e4),uFogNear:i.create(1e4),uFogFar:i.create(1e4),uFogColor:i.create(b.create(1,1,1)),uProjection:i.create(B.identity()),uInvProjection:i.create(B.identity()),uBounds:i.create(Oe()),uLightDirection:i.create([]),uLightColor:i.create([]),dLightCount:i.create(0),uAmbientColor:i.create(b()),uExposure:i.create(1),uFrameNo:i.create(0),dRendersPerFrame:i.create(1),dBounces:i.create(4),dSteps:i.create(32),dRefineSteps:i.create(4),uRayDistance:i.create(256),dThicknessMode:i.create("auto"),uMinThickness:i.create(.5),uThicknessFactor:i.create(1),uThickness:i.create(4),dShadowEnable:i.create(!1),uShadowSoftness:i.create(.1),uShadowThickness:i.create(.1)},f={...Al},p=me(u,"triangles",zl,f,s);return fe(p,s)}var Nl={...be,tColor:j("texture","rgba","ubyte","nearest"),uTexSize:C("v2"),uWeight:C("f")},Hl=he("accumulate",Te,Sn);function jl(u,e){let t={...ve,tColor:i.create(e),uTexSize:i.create(T.create(e.getWidth(),e.getHeight())),uWeight:i.create(1)},r={...Nl},a=me(u,"triangles",Hl,r,t);return fe(a,t)}var qa=`
precision highp float;
precision highp sampler2D;

uniform sampler2D tColor;
uniform vec2 uTexSize;
uniform float uWeight;

void main() {
    vec2 coords = gl_FragCoord.xy / uTexSize;
    gl_FragColor = texture2D(tColor, coords) * uWeight;
}
`;var Pn=!1;function wn(u){let{drawBuffers:e,textureFloat:t,colorBufferFloat:r,depthTexture:a}=u.extensions;if(!t||!r||!a||!e){if(Pe&&!Pn){let o=[];t||o.push("textureFloat"),r||o.push("colorBufferFloat"),a||o.push("depthTexture"),e||o.push("drawBuffers"),console.log(`Missing "${o.join('", "')}" extensions required for "illumination"`),Pn=!0}return!1}else return!0}var Wa={enabled:m.Boolean(!1),maxIterations:m.Numeric(5,{min:0,max:16,step:1},{description:"Maximum number of tracing iterations. Final iteration count is 2^x."}),denoise:m.Boolean(!0),denoiseThreshold:m.Interval([.15,1],{min:0,max:4,step:.01},{description:"Threshold for denoising. Automatically adjusted within given interval based on current iteration."}),ignoreOutline:m.Boolean(!0,{description:"Ignore outline in illumination pass where it is generally not needed for visual clarity. Useful when illumination is often toggled on/off."}),...Cn},yr=class u{constructor(e,t){this.webgl=e;this.drawPass=t;this._iteration=0;this._supported=!1;this.prevSampleIndex=-1;if(!u.isSupported(e))return;let{colorTarget:r}=t,a=r.getWidth(),o=r.getHeight();this.tracing=new Ga(e,this.drawPass),this.markingShading={name:"traced",shaded:this.tracing.shadedTextureOpaque},this.transparentTarget=e.createRenderTarget(a,o,"none","uint8","nearest"),this.outputTarget=e.createRenderTarget(a,o,"none","uint8","linear"),this.copyRenderable=Lt(e,this.transparentTarget.texture),this.composeRenderable=Wl(e,this.tracing.accumulateTarget.texture,this.tracing.normalTextureOpaque,this.tracing.colorTextureOpaque,this.drawPass.depthTextureOpaque,this.drawPass.depthTargetTransparent.texture,this.drawPass.postprocessing.outline.target.texture,this.transparentTarget.texture,this.drawPass.postprocessing.ssao.ssaoDepthTexture,this.drawPass.postprocessing.ssao.ssaoDepthTransparentTexture,this.drawPass.postprocessing.bloom.compositeTarget.texture,!1),this.multiSampleComposeTarget=e.createRenderTarget(a,o,"none","float32"),this.multiSampleHoldTarget=e.createRenderTarget(a,o,"none"),this.multiSampleAccumulateTarget=e.createRenderTarget(a,o,"none","float32"),this.multiSampleCompose=Kl(e,this.outputTarget.texture),this._supported=!0}get iteration(){return this._iteration}get colorTarget(){return this._colorTarget}get supported(){return this._supported}getByteCount(){return this._supported?this.tracing.getByteCount()+this.transparentTarget.getByteCount()+this.outputTarget.getByteCount()+this.multiSampleComposeTarget.getByteCount()+this.multiSampleHoldTarget.getByteCount()+this.multiSampleAccumulateTarget.getByteCount():0}getMaxIterations(e){return Math.pow(2,e.maxIterations)}static isSupported(e){return wn(e)}static isEnabled(e,t){return t.enabled&&wn(e)}renderInput(e,t,r,a){k&&this.webgl.timer.mark("IlluminationPass.renderInput");let{gl:o,state:n}=this.webgl,s=r.opacityAverage<1||r.volumes.renderables.length>0;this.transparentTarget.bind(),n.clearColor(0,0,0,0),o.clear(o.COLOR_BUFFER_BIT);let f=_e.isTransparentOutlineEnabled(a.postprocessing)&&!a.illumination.ignoreOutline,p=ar.isEnabled(a.postprocessing),l=_e.isTransparentSsaoEnabled(r,a.postprocessing),c=Dt.isEnabled(a.postprocessing);if((f||p||l||c)&&(this.drawPass.depthTargetTransparent.bind(),e.clearDepth(!0)),s){if(this.drawPass.transparency==="wboit")this.drawPass.wboit.bind(),e.renderWboitTransparent(r.primitives,t,this.drawPass.depthTextureOpaque),r.volumes.renderables.length>0&&e.renderWboitTransparent(r.volumes,t,this.drawPass.depthTextureOpaque),this.transparentTarget.bind(),this.drawPass.wboit.render();else if(this.drawPass.transparency==="dpoit"){let d=this.drawPass.dpoit.bind();e.renderDpoitTransparent(r.primitives,t,this.drawPass.depthTextureOpaque,d);for(let g=0,x=a.dpoitIterations;g<x;g++){k&&this.webgl.timer.mark("DpoitPass.layer");let v=this.drawPass.dpoit.bindDualDepthPeeling();e.renderDpoitTransparent(r.primitives,t,this.drawPass.depthTextureOpaque,v),x>1&&(this.transparentTarget.bind(),this.drawPass.dpoit.renderBlendBack()),k&&this.webgl.timer.markEnd("DpoitPass.layer")}this.transparentTarget.bind(),this.drawPass.dpoit.render(),r.volumes.renderables.length>0&&e.renderVolume(r.volumes,t,this.drawPass.depthTextureOpaque)}else this.transparentTarget.bind(),this.drawPass.depthTextureOpaque.attachFramebuffer(this.transparentTarget.framebuffer,"depth"),e.renderBlendedTransparent(r.primitives,t),this.drawPass.depthTextureOpaque.detachFramebuffer(this.transparentTarget.framebuffer,"depth"),r.volumes.renderables.length>0&&e.renderVolume(r.volumes,t,this.drawPass.depthTextureOpaque);(f||p||l||c)&&(this.drawPass.depthTargetTransparent.bind(),r.opacityAverage<1&&e.renderDepthTransparent(r.primitives,t,this.drawPass.depthTextureOpaque)),l&&(this.drawPass.postprocessing.ssao.update(t,r,a.postprocessing.occlusion.params,!0),this.drawPass.postprocessing.ssao.render(t))}this.tracing.composeTarget.bind(),n.clearColor(0,0,0,0),o.clear(o.COLOR_BUFFER_BIT),k&&this.webgl.timer.markEnd("IlluminationPass.renderInput")}hasHelpers(e){return e.debug.isEnabled||e.pointer.isEnabled||e.handle.isEnabled||e.camera.isEnabled}renderHelpers(e){let{renderer:t,camera:r,helper:a,frame:o}=e;if(this.transparentTarget.bind(),a.debug.isEnabled||a.pointer.isEnabled){if(this.drawPass.depthTextureOpaque.attachFramebuffer(this.transparentTarget.framebuffer,"depth"),a.debug.isEnabled){a.debug.syncVisibility();for(let n of a.debug.scenes)t.renderBlended(n,r)}a.pointer.isEnabled&&(a.pointer.setCamera(r),t.update(a.pointer.camera,a.pointer.scene,o),t.renderBlended(a.pointer.scene,a.pointer.camera)),this.drawPass.depthTextureOpaque.detachFramebuffer(this.transparentTarget.framebuffer,"depth")}a.handle.isEnabled&&t.renderBlended(a.handle.scene,r),a.camera.isEnabled&&(a.camera.update(r),t.update(a.camera.camera,a.camera.scene,o),t.renderBlended(a.camera.scene,a.camera.camera))}shouldRender(e){return this._supported&&e.enabled&&this._iteration<this.getMaxIterations(e)}setSize(e,t){if(!this._supported)return;let r=this.outputTarget.getWidth(),a=this.outputTarget.getHeight();(e!==r||t!==a)&&(this.tracing.setSize(e,t),this.transparentTarget.setSize(e,t),this.outputTarget.setSize(e,t),i.update(this.copyRenderable.values.uTexSize,T.set(this.copyRenderable.values.uTexSize.ref.value,e,t)),i.update(this.composeRenderable.values.uTexSize,T.set(this.composeRenderable.values.uTexSize.ref.value,e,t)),this.multiSampleComposeTarget.setSize(e,t),this.multiSampleHoldTarget.setSize(e,t),this.multiSampleAccumulateTarget.setSize(e,t),i.update(this.multiSampleCompose.values.uTexSize,T.set(this.multiSampleCompose.values.uTexSize.ref.value,e,t))),this.drawPass.setSize(e,t)}reset(){this._supported&&(this.tracing.reset(),this._iteration=0,this.prevSampleIndex=-1)}restart(e=!1){this._supported&&(this.tracing.restart(e),this._iteration=0,this.prevSampleIndex=-1)}renderInternal(e,t,r,a){this.shouldRender(t.illumination)&&(k&&this.webgl.timer.mark("IlluminationPass.render",{note:`iteration ${this._iteration+1} of ${this.getMaxIterations(t.illumination)}`}),this.tracing.render(e,t.transparentBackground,t.illumination,this._iteration,a),this.compose(e,t,r,this._iteration===0||a),this._iteration+=1,k&&this.webgl.timer.markEnd("IlluminationPass.render"),this.webgl.gl.flush())}setupRenderer(e,t){let{renderer:r,camera:a,scene:o,frame:n}=e;r.setTransparentBackground(t.transparentBackground),r.setDrawingBufferSize(this.tracing.composeTarget.getWidth(),this.tracing.composeTarget.getHeight()),r.setPixelRatio(this.webgl.pixelRatio);let{x:s,y:f,width:p,height:l}=a.viewport;r.setViewport(s,f,p,l),r.update(a,o,n)}compose(e,t,r,a){let{renderer:o,camera:n,scene:s,frame:f}=e,{gl:p,state:l}=this.webgl,{x:c,y:d,width:g,height:x}=n.viewport;a&&(this.setupRenderer(e,t),this.renderInput(o,n,s,t),this.renderHelpers(e)),l.disable(p.BLEND),l.disable(p.DEPTH_TEST),l.disable(p.CULL_FACE),l.depthMask(!1),l.viewport(c,d,g,x),l.scissor(c,d,g,x);let v=n.state.mode==="orthographic"?1:0,S=pr.isEnabled(t.postprocessing),P=dr.isEnabled(t.postprocessing)&&!t.illumination.ignoreOutline,D=_e.isTransparentSsaoEnabled(s,t.postprocessing),O=Dt.isEnabled(t.postprocessing),z=ar.isEnabled(t.postprocessing),G=s.opacityAverage<1||s.volumes.renderables.length>0,I=!1;if(this.composeRenderable.values.dOutlineEnable.ref.value!==P&&(I=!0,i.update(this.composeRenderable.values.dOutlineEnable,P)),P&&t.postprocessing.outline.name==="on"){let{transparentOutline:E,outlineScale:te}=this.drawPass.postprocessing.outline.update(n,t.postprocessing.outline.params,this.drawPass.depthTargetTransparent.texture,this.drawPass.depthTextureOpaque);this.drawPass.postprocessing.outline.render(),i.update(this.composeRenderable.values.uOutlineColor,le.toVec3Normalized(this.composeRenderable.values.uOutlineColor.ref.value,t.postprocessing.outline.params.color)),this.composeRenderable.values.dOutlineScale.ref.value!==te&&(I=!0,i.update(this.composeRenderable.values.dOutlineScale,te)),this.composeRenderable.values.dTransparentOutline.ref.value!==E&&(I=!0,i.update(this.composeRenderable.values.dTransparentOutline,E))}this.composeRenderable.values.dOcclusionEnable.ref.value!==D&&(I=!0,i.update(this.composeRenderable.values.dOcclusionEnable,D)),D&&t.postprocessing.occlusion.name==="on"&&i.update(this.composeRenderable.values.uOcclusionColor,le.toVec3Normalized(this.composeRenderable.values.uOcclusionColor.ref.value,t.postprocessing.occlusion.params.color));let M=G||this.hasHelpers(e.helper);this.composeRenderable.values.dBlendTransparency.ref.value!==M&&(I=!0,i.update(this.composeRenderable.values.dBlendTransparency,M)),i.updateIfChanged(this.composeRenderable.values.uNear,n.near),i.updateIfChanged(this.composeRenderable.values.uFar,n.far),i.updateIfChanged(this.composeRenderable.values.uFogFar,n.fogFar),i.updateIfChanged(this.composeRenderable.values.uFogNear,n.fogNear),i.update(this.composeRenderable.values.uFogColor,le.toVec3Normalized(this.composeRenderable.values.uFogColor.ref.value,o.props.backgroundColor)),this.composeRenderable.values.dOrthographic.ref.value!==v&&(i.update(this.composeRenderable.values.dOrthographic,v),I=!0),o.setDrawingBufferSize(this.tracing.composeTarget.getWidth(),this.tracing.composeTarget.getHeight()),o.setPixelRatio(this.webgl.pixelRatio),o.setViewport(c,d,g,x),o.update(n,s,f);let K=!1;if(O&&t.postprocessing.bloom.name==="on"){let E=t.postprocessing.bloom.params,te=this.drawPass.postprocessing.bloom,Q=E.mode==="emissive";Q&&s.emissiveAverage===0||(Q&&this.drawPass.renderEmissiveBloom(o,n,s,E.transparency),s.opacityAverage>=1&&(this.drawPass.depthTargetTransparent.bind(),o.clearDepth(!0)),te.update(this.tracing.shadedTextureOpaque,this.transparentTarget.texture,te.emissiveTarget.texture,this.drawPass.depthTextureOpaque,this.drawPass.depthTextureTransparent,E,n,!1),te.render(n.viewport),K=!0)}this.composeRenderable.values.dBloomEnable.ref.value!==K&&(I=!0,i.update(this.composeRenderable.values.dBloomEnable,K)),this.tracing.composeTarget.bind(),this._colorTarget=this.tracing.composeTarget,this.drawPass.postprocessing.background.update(n,t.postprocessing.background),this.drawPass.postprocessing.background.clear(t.postprocessing.background,t.transparentBackground,o.props.backgroundColor),this.drawPass.postprocessing.background.render(t.postprocessing.background);let re=this.drawPass.postprocessing.background.isEnabled(t.postprocessing)||K&&!t.transparentBackground;i.updateIfChanged(this.composeRenderable.values.uTransparentBackground,t.transparentBackground||re),this.composeRenderable.values.dDenoise.ref.value!==t.illumination.denoise&&(i.update(this.composeRenderable.values.dDenoise,t.illumination.denoise),I=!0);let W=t.multiSample.mode==="on"?t.illumination.denoiseThreshold[0]:Bi(t.illumination.denoiseThreshold[1],t.illumination.denoiseThreshold[0],nr(this.iteration/(this.getMaxIterations(t.illumination)/2),0,1));i.updateIfChanged(this.composeRenderable.values.uDenoiseThreshold,W),I&&this.composeRenderable.update(),re&&(l.enable(p.BLEND),l.blendFuncSeparate(p.ONE,p.ONE_MINUS_SRC_ALPHA,p.ONE,p.ONE_MINUS_SRC_ALPHA)),this.composeRenderable.render();let ae=this.outputTarget;S&&(this.drawPass.antialiasing.render(n,this.tracing.composeTarget.texture,this.outputTarget,t.postprocessing),this._colorTarget=this.outputTarget,ae=this.tracing.composeTarget),z&&t.postprocessing.dof.name==="on"&&(this.drawPass.dof.update(n,this._colorTarget.texture,this.drawPass.depthTextureOpaque,this.drawPass.depthTargetTransparent.texture,t.postprocessing.dof.params,s.boundingSphereVisible),this.drawPass.dof.render(n.viewport,ae),this._colorTarget=ae),!(t.multiSample.mode==="on"&&!r)&&this.drawPass.marking.present(e,t,{base:this._colorTarget,toDrawingBuffer:r,offsets:Mr,restart:a,samples:1,shading:this.markingShading})}renderMultiSample(e,t,r){let{camera:a}=e,{multiSampleCompose:o,multiSampleComposeTarget:n,multiSampleHoldTarget:s,webgl:f}=this,{gl:p,state:l}=f,c=Er(t.multiSample.sampleLevel),d=this.getMaxIterations(t.illumination),g=Math.min(this._iteration,d),x=Math.floor(g/d*c.length);k&&f.timer.mark("IlluminationPass.renderMultiSample",{note:`sampleIndex ${x+1} of ${c.length}`});let{x:v,y:S,width:P,height:D}=a.viewport,O=1/d;g===0?(this.renderInternal(e,t,!1,!0),i.update(o.values.uWeight,1),i.update(o.values.tColor,this._colorTarget.texture),o.update(),s.bind(),l.disable(p.BLEND),l.disable(p.DEPTH_TEST),l.depthMask(!1),l.viewport(v,S,P,D),l.scissor(v,S,P,D),o.render()):(i.update(o.values.tColor,this._colorTarget.texture),i.update(o.values.uWeight,O),o.update(),Lr(a,c[x]),this.renderInternal(e,t,!1,this.prevSampleIndex!==x),n.bind(),l.enable(p.BLEND),l.blendEquationSeparate(p.FUNC_ADD,p.FUNC_ADD),l.blendFuncSeparate(p.ONE,p.ONE,p.ONE,p.ONE),l.disable(p.DEPTH_TEST),l.depthMask(!1),l.viewport(v,S,P,D),l.scissor(v,S,P,D),g===1&&(l.clearColor(0,0,0,0),p.clear(p.COLOR_BUFFER_BIT)),o.render()),this.prevSampleIndex=x,this.multiSampleAccumulateTarget.bind(),l.viewport(v,S,P,D),l.scissor(v,S,P,D);let z=g*O;z>0&&(i.update(o.values.uWeight,1),i.update(o.values.tColor,n.texture),o.update(),l.disable(p.BLEND),o.render()),z<1&&(i.update(o.values.uWeight,1-z),i.update(o.values.tColor,s.texture),o.update(),z===0?l.disable(p.BLEND):l.enable(p.BLEND),o.render()),r||(l.disable(p.BLEND),this.colorTarget.bind(),this.copyRenderable.values.tColor.ref.value!==this.multiSampleAccumulateTarget.texture&&(i.update(this.copyRenderable.values.tColor,this.multiSampleAccumulateTarget.texture),this.copyRenderable.update()),this.copyRenderable.render()),Or(a);let G=r?this.multiSampleAccumulateTarget:this._colorTarget,I=g===0?1:Math.ceil(c.length/d);this.drawPass.marking.present(e,t,{base:G,toDrawingBuffer:r,offsets:c,restart:g===0,samples:I,shading:this.markingShading}),k&&f.timer.markEnd("IlluminationPass.renderMultiSample")}render(e,t,r){this._supported&&(t.multiSample.mode==="on"?this.renderMultiSample(e,t,r):this.renderInternal(e,t,r,!1))}},Gl={...be,tColor:j("texture","rgba","ubyte","nearest"),tNormal:j("texture","rgba","ubyte","nearest"),tShaded:j("texture","rgba","ubyte","nearest"),tTransparentColor:j("texture","rgba","ubyte","nearest"),dBlendTransparency:ee("boolean"),tSsaoDepth:j("texture","rgba","ubyte","nearest"),tSsaoDepthTransparent:j("texture","rgba","ubyte","nearest"),tDepthOpaque:j("texture","rgba","ubyte","nearest"),tDepthTransparent:j("texture","rgba","ubyte","nearest"),tOutlines:j("texture","rgba","ubyte","nearest"),tBloom:j("texture","rgba","ubyte","linear"),dBloomEnable:ee("boolean"),uTexSize:C("v2"),dDenoise:ee("boolean"),uDenoiseThreshold:C("f"),dOrthographic:ee("number"),uNear:C("f"),uFar:C("f"),uFogNear:C("f"),uFogFar:C("f"),uFogColor:C("v3"),uOutlineColor:C("v3"),uOcclusionColor:C("v3"),uTransparentBackground:C("b"),dOcclusionEnable:ee("boolean"),dOutlineEnable:ee("boolean"),dOutlineScale:ee("number"),dTransparentOutline:ee("boolean")},ql=he("compose",Te,Ao);function Wl(u,e,t,r,a,o,n,s,f,p,l,c){let d={...ve,tColor:i.create(e),tNormal:i.create(t),tShaded:i.create(r),tTransparentColor:i.create(s),dBlendTransparency:i.create(!0),tSsaoDepth:i.create(f),tSsaoDepthTransparent:i.create(p),tDepthOpaque:i.create(a),tDepthTransparent:i.create(o),tOutlines:i.create(n),tBloom:i.create(l),dBloomEnable:i.create(!1),uTexSize:i.create(T.create(e.getWidth(),e.getHeight())),dDenoise:i.create(!0),uDenoiseThreshold:i.create(.1),dOrthographic:i.create(0),uNear:i.create(1),uFar:i.create(1e4),uFogNear:i.create(1e4),uFogFar:i.create(1e4),uFogColor:i.create(b.create(1,1,1)),uOutlineColor:i.create(b.create(0,0,0)),uOcclusionColor:i.create(b.create(0,0,0)),uTransparentBackground:i.create(!1),dOcclusionEnable:i.create(!1),dOutlineEnable:i.create(!1),dOutlineScale:i.create(1),dTransparentOutline:i.create(c)},g={...Gl},x=me(u,"triangles",ql,g,d);return fe(x,d)}var Ul={...be,tColor:j("texture","rgba","ubyte","nearest"),uTexSize:C("v2"),uWeight:C("f")},Xl=he("compose",Te,qa);function Kl(u,e){let t={...ve,tColor:i.create(e),uTexSize:i.create(T.create(e.getWidth(),e.getHeight())),uWeight:i.create(1)},r={...Ul},a=me(u,"triangles",Xl,r,t);return fe(a,t)}var Kr=class u{constructor(e,t){this.webgl=e;this.scene=t;this.required=[]}static ensureRequired(e,t,r){let a=new u(e,t);a.updateRequired(r),a.finalizeRequired(!0)}updateRequired(e){this.required.length=0,this.required.push("color"),yr.isEnabled(this.webgl,e.illumination)&&this.required.push("tracing"),Br.isEnabled(e.marking)&&this.scene.markerAverage>0&&this.required.push("marking"),Dt.isEnabled(e.postprocessing)&&this.scene.emissiveAverage>0&&this.required.push("emissive"),(_e.isTransparentDepthRequired(this.scene,e.postprocessing)||!this.webgl.extensions.drawBuffers||!this.webgl.extensions.depthTexture||yr.isEnabled(this.webgl,e.illumination))&&this.required.push("depth"),this.webgl.resources.linkPrograms(this.required)}finalizeRequired(e){return this.finalize(this.required,e)}finalize(e,t){return this.webgl.resources.finalizePrograms(e,t)}};var Zl=Ue,Yl=J.Trigger,Dn=J.TriggerKey;function _l(u){let e=B.getDecomposition(u);return new XRRigidTransform(b.toObj(e.position),qe.toObj(e.quaternion))}function kn(u,e){let t=b.fromObj(u.transform.position),r=B.fromArray(B(),u.transform.matrix,0),a=B.getDecomposition(r),o=B.fromQuat(B(),a.quaternion),n=b.transformMat4(b(),b.negUnitZ,o),s=sr.create(t,n);return e&&sr.transform(s,s,B.invert(B(),e)),s}var Ql={exit:J([Dn("GamepadB")]),togglePassthrough:J([Dn("GamepadA")]),gestureScale:J([Yl(Zl.Flag.Trigger)])},Di={bindings:Ql},ki={minTargetDistance:m.Numeric(.4,{min:.001,max:1,step:.001}),disablePostprocessing:m.Boolean(!0),resolutionScale:m.Numeric(1,{min:.1,max:2,step:.1}),sceneRadiusInMeters:m.Numeric(.25,{min:.01,max:2,step:.01},{description:"The radius of the scene bounding sphere in meters, used to set the initial camera scale."})},Ua=class{constructor(e,t,r,a,o,n,s,f={},p={}){this.webgl=e;this.input=t;this.scene=r;this.camera=a;this.stereoCamera=o;this.pointerHelper=n;this.interactionHelper=s;this.togglePassthrough=new Me;this.sessionChanged=new Me;this.isSupported=new tr(!1);this.xrSession=void 0;this.xrRefSpace=void 0;this.scaleFactor=1;this.prevScale=0;this.prevInput={};this.hit=void 0;this.checkSupported=async()=>{if(!this.xr){this.isSupported.next(!1);return}try{let[e,t]=await Promise.all([this.xr.isSessionSupported("immersive-ar"),this.xr.isSessionSupported("immersive-vr")]);this.isSupported.next(e||t)}catch(e){Pe&&console.warn(e),this.isSupported.next(!1)}};this.props={...m.getDefaultValues(ki),...f},this.attribs={...Di,...p},this.hoverSub=this.interactionHelper.events.hover.subscribe(({position:l})=>{this.hit=l}),this.sessionChangedSub=e.xr.changed.subscribe(async()=>{await this.setSession(e.xr.session),this.sessionChanged.next()}),this.checkSupported(),this.xr?.addEventListener("devicechange",this.checkSupported),this.keyUpSub=t.keyUp.subscribe(({code:l,modifiers:c,key:d})=>{let g=this.attribs.bindings;J.matchKey(g.exit,l,c,d)&&this.end(),J.matchKey(g.togglePassthrough,l,c,d)&&this.togglePassthrough.next()}),this.gestureSub=t.gesture.subscribe(({scale:l,button:c,modifiers:d})=>{let g=this.attribs.bindings;J.match(g.gestureScale,c,d)&&this.setScaleFactor(l)})}get session(){return this.xrSession}get xr(){if(!(typeof navigator>"u"))return navigator.xr}setProps(e){Object.assign(this.props,e)}setAttribs(e){Object.assign(this.attribs,e)}intersect(e,t,r,a){let o=b(),n=kn(a,t);if(wt.intersectRay3D(o,r,n)){let{height:s}=e.viewport,f=Zi(Oe(),o,e.viewport,e.projectionView),p=T.create(Math.floor(f[0]),s-Math.floor(f[1]));return{point:o,screen:p}}}setScaleFactor(e){this.scaleFactor=e}resetScale(){this.scaleFactor=1,this.prevScale=0}update(e){let{xrSession:t,xrRefSpace:r,input:a,camera:o,stereoCamera:n,pointerHelper:s}=this;if(!e||!t||!r)return!1;o.scale=o.scale*this.scaleFactor,this.prevScale=o.scale;let f=b.sub(b(),o.position,o.target);b.scaleAndAdd(o.position,o.position,f,1-this.scaleFactor),this.scaleFactor=1;let p=_l(o.view),l=r.getOffsetReferenceSpace(p),c=e.getViewerPose(l);if(!c)return!1;let d=e.getViewerPose(r);if(d){let A=qe.fromObj(d.transform.orientation);B.fromQuat(o.headRotation,A)}let{depthFar:g,depthNear:x,baseLayer:v}=t.renderState;if(!v)return!1;(g!==o.far||x!==o.near)&&t.updateRenderState({depthNear:o.near,depthFar:o.far}),n.update({pose:c,layer:v});let S=n.left,P=b.scale(b(),S.state.target,S.scale),D=B.getTranslation(b(),B.invert(B(),S.view)),O=b.sub(b(),D,P),z=wt.fromNormalAndCoplanarPoint(wt(),O,P),G=[],I=[],M=[],K=[];if(t.inputSources)for(let A of t.inputSources){if(A.targetRayMode==="screen"){if(A.gamepad){let{axes:Fe}=A.gamepad,{width:ke,height:kt}=S.viewport,Be=(Fe[0]+1)/2*ke,Qe=(Fe[1]+1)/2*kt,It=S.getRay(sr(),Be,kt-Qe);K.push({x:Be,y:Qe,ray:It})}continue}if(A.targetRayMode!=="tracked-pointer")continue;let{handedness:re,targetRaySpace:W,gamepad:ae}=A;if(!re)continue;let E=e.getPose(W,r);if(!E)continue;let te=kn(E,o.view);G.push(te);let Q=et.scaleNX(et(),this.scene.boundingSphereVisible,S.scale),ze=b();sr.intersectSphere3D(ze,te,Q)&&I.push(ze);let ce=Ue.create(Ue.Flag.None);ae?.buttons[0]?.pressed&&(ce|=Ue.Flag.Primary),ae?.buttons[1]?.pressed&&(ce|=Ue.Flag.Secondary),ae?.buttons[3]?.pressed&&(ce|=Ue.Flag.Auxilary),ae?.buttons[4]?.pressed&&(ce|=Ue.Flag.Forth),ae?.buttons[5]?.pressed&&(ce|=Ue.Flag.Five);let ne=re==="left"?this.prevInput.left:this.prevInput.right,xe=this.intersect(S,o.view,z,E),ue=ne?this.intersect(S,o.view,z,ne.targetRayPose):void 0,[we,Xe]=xe?.screen??[0,0],[Re,U]=ue?.screen??[we,Xe],Ke=T.set(T(),we-Re,Xe-U);T.setMagnitude(Ke,Ke,Math.min(100,T.magnitude(Ke)));let[Ne,bt]=T.round(Ke,Ke);M.push({handedness:re,buttons:ce,x:we,y:Xe,dx:Ne,dy:bt,ray:te,axes:ae?.axes}),re==="left"?this.prevInput.left={targetRayPose:E}:this.prevInput.right={targetRayPose:E}}else this.prevInput.left=void 0,this.prevInput.right=void 0;return a.updateTrackedPointers(M),a.updateScreenTouches(K),s.ensureEnabled(),s.update(G,I,this.hit),!0}async setSession(e){if(this.xrSession!==e)if(await this.webgl.xr.set(e,{resolutionScale:this.props.resolutionScale}),this.xrSession=this.webgl.xr.session,this.prevInput={},this.hit=void 0,this.xrSession){this.xrRefSpace=await this.xrSession.requestReferenceSpace("local"),this.pointerHelper.setProps({enabled:"on"});let t=this.prevScale;if(t===0){let{radius:r}=this.scene.boundingSphereVisible;t=r?1/r*this.props.sceneRadiusInMeters:.01}this.camera.forceFull=!0,this.camera.scale=t,this.camera.minTargetDistance=this.props.minTargetDistance,this.prevScale=t}else this.xrRefSpace=void 0,B.setZero(this.camera.headRotation),this.pointerHelper.setProps({enabled:"off"}),this.camera.forceFull=!1,this.camera.scale=1,this.camera.minTargetDistance=0}async end(){await this.webgl.xr.end()}async request(){if(!this.xr)return;let e=await this.xr.isSessionSupported("immersive-ar")?await this.xr.requestSession("immersive-ar"):await this.xr.requestSession("immersive-vr");await this.setSession(e)}dispose(){this.hoverSub.unsubscribe(),this.keyUpSub.unsubscribe(),this.gestureSub.unsubscribe(),this.sessionChangedSub.unsubscribe(),this.togglePassthrough.complete(),this.sessionChanged.complete(),this.isSupported.complete(),this.xr?.removeEventListener("devicechange",this.checkSupported)}};var Rn=`
precision highp float;
precision highp sampler2D;

uniform sampler2D tPreviousLevel;
uniform vec2 uInvSize;
uniform vec2 uOffset;

void main(void) {
    vec2 position = gl_FragCoord.xy * uInvSize + uOffset;

    float x = texture(tPreviousLevel, position).r;
    float y = textureOffset(tPreviousLevel, position, ivec2(-1, 0)).r;
    float z = textureOffset(tPreviousLevel, position, ivec2(-1, -1)).r;
    float w = textureOffset(tPreviousLevel, position, ivec2(0, -1)).r;

    gl_FragColor = vec4(max(max(x, y), max(z, w)));
}
`;var Jl={...be,tPreviousLevel:j("texture","alpha","float","nearest"),uInvSize:C("v2"),uOffset:C("v2")},$l=he("hi-z",Te,Rn);function Fn(u,e){let t={...ve,tPreviousLevel:i.create(e),uInvSize:i.create(T()),uOffset:i.create(T())},r={...Jl},a=me(u,"triangles",$l,r,t);return fe(a,t)}var En=new ArrayBuffer(4),nv=new Int32Array(En),sv=new Float32Array(En);var Ln=new ArrayBuffer(4),eu=new Int32Array(Ln),tu=new Float32Array(Ln);function ru(u){let e=u<-126?-126:u;return eu[0]=(1<<23)*(e+126.94269504),tu[0]}function lv(u){return ru(1.44269504*u)}var On=new ArrayBuffer(8),uv=new Int32Array(On),cv=new Float32Array(On);var Bn=new ArrayBuffer(4),au=new Int32Array(Bn),iu=new Float32Array(Bn);function Mn(u){return iu[0]=u,au[0]*11920928955078125e-23-126.94269504}var In=Math.PI/2,ou=2*Math.PI,nu=1/(2*Math.PI),dv=2/Math.PI,su=4/Math.PI,lu=4/(Math.PI*Math.PI),pv=Math.PI/2-2*Math.PI,uu=.7844448837454894,An=new ArrayBuffer(16),Zr=new Int32Array(An),kr=new Float32Array(An);function cu(u){kr[0]=.2036393768073031,kr[1]=.015124940802184232,kr[2]=-.003222590162557957,kr[3]=u;let e=Zr[3]&2147483648;Zr[3]=Zr[3]&2147483647;let t=su*u-lu*u*kr[3],r=t*t;return Zr[0]|=e,Zr[1]|=e,Zr[2]^=e,uu*t+r*(kr[0]+r*(kr[1]+r*kr[2]))}var zn=new ArrayBuffer(8),fv=new Int32Array(zn),hv=new Float32Array(zn);function du(u){let e=u*nu|0,t=u<0?-.5:.5;return cu((t+e)*ou-u)}function mv(u){return du(u+In)}var Vn=new ArrayBuffer(4),gv=new Int32Array(Vn),bv=new Float32Array(Vn);var pu=Math.PI/4;function fu(u){return pu*u-u*(Math.abs(u)-1)*(.2447+.0663*Math.abs(u))}function vv(u,e){let t=Math.abs(e),r=Math.abs(u),a=Math.max(t,r);return r=Math.min(t,r),t=fu(r/a),t=Math.abs(u)>Math.abs(e)?In-t:t,t=e<0?Math.PI-t:t,t=u<0?-t:t,t}function yv(u){return u<0?Math.PI-((u*.124605335+.1570634)*(.99418175+u)+Math.sqrt(2+2*u)):(u*-.124605335+.1570634)*(.99418175-u)+Math.sqrt(2-2*u)}var hu=b.transformMat4,Nn=Oe.set,mu=Mn;function gu(u,e,t){return e*t/((t-e)*u-t)}function bu(u,e,t){return u*(e-t)-e}function Xa(u,e,t,r){return r[11]===-1?gu(u,e,t):bu(u,e,t)}function vu(u,e,t,r){let a=e[0]*t,o=e[1]*t,n=e[2]*t,s=e[2]*e[2]-t*t,f=Math.sqrt(e[0]*e[0]+s),p=(f*e[0]-n)/(f*e[2]+a)*r[0],l=(f*e[0]+n)/(f*e[2]-a)*r[0],c=Math.sqrt(e[1]*e[1]+s),d=(c*e[1]-n)/(c*e[2]+o)*r[5],g=(c*e[1]+n)/(c*e[2]-o)*r[5];return Nn(u,l*-.5+.5,d*.5+.5,p*-.5+.5,g*.5+.5)}function yu(u,e,t,r){let a=r[0],o=r[5],n=(e[0]+t)*a,s=(e[0]-t)*a,f=(e[1]+t)*o,p=(e[1]-t)*o;return Nn(u,s*.5+.5,f*-.5+.5,n*.5+.5,p*-.5+.5)}function xu(u,e,t,r){return r[11]===-1?vu(u,e,t,r):yu(u,e,t,r)}var Ri={enabled:m.Boolean(!1,{description:"Hierarchical Z-buffer occlusion culling. Only available for WebGL2."}),maxFrameLag:m.Numeric(10,{min:1,max:30,step:1},{description:"Maximum number of frames to wait for Z-buffer data."}),minLevel:m.Numeric(3,{min:1,max:10,step:1})},Ka=class{constructor(e,t,r,a){this.webgl=e;this.drawPass=t;this.viewport=Ce();this.near=0;this.far=0;this.view=B();this.projection=B();this.nextNear=0;this.nextFar=0;this.nextView=B();this.nextProjection=B();this.aabb=Oe();this.vp=b();this.levelData=[];this.sync=null;this.buffer=new Float32Array(0);this.frameLag=0;this.ready=!1;this.isOccluded=e=>{if(!this.supported||!this.props.enabled||!this.ready)return!1;let{vp:t,r}=this.transform(e),{near:a,far:o,projection:n}=this,s=t[2]+r;if(-s<a)return!1;let{aabb:f,w:p,h:l,lod:c}=this.project(t,r);if(c>=this.levelData.length||c<this.props.minLevel)return!1;let{offset:d,size:g}=this.levelData[c],x=f[0]+p/2,v=f[1]+l/2,S=g[0],P=x*S,D=v*S,O=Math.floor(P),z=Math.ceil(D),G=this.tex.getWidth();if(O+1>=S||z+1>=S)return!1;let I=(S-z-1)*G+O+d;if(s>Xa(this.buffer[I],a,o,n)||s>Xa(this.buffer[I+1],a,o,n))return!1;let M=(S-z+1-1)*G+O+d;return!(s>Xa(this.buffer[M],a,o,n)||s>Xa(this.buffer[M+1],a,o,n))};this.props={...m.getDefaultValues(Ri),...a};let{gl:o,extensions:n}=e;if(!Ut(o)||!n.colorBufferFloat){Pe&&console.log('Missing webgl2 and/or colorBufferFloat support required for "Hi-Z"'),this.supported=!1;return}this.fb=e.resources.framebuffer(),this.tex=e.resources.texture("image-float32","alpha","float","nearest"),this.tex.attachFramebuffer(this.fb,0);let s=o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT),f=o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE);if(s!==o.RED||f!==o.FLOAT){Pe&&console.log('Missing red/float reading support required for "Hi-Z"'),this.supported=!1;return}this.supported=!0,this.buf=e.resources.pixelPack("alpha","float"),this.renderable=Fn(e,this.drawPass.depthTextureOpaque),Pe&&r&&this.initDebug(r)}getByteCount(){return this.supported?this.tex.getByteCount()+this.buf.getByteCount()+this.levelData.reduce((e,t)=>e+t.texture.getByteCount(),0):0}clear(){if(!this.supported)return;let{gl:e}=this.webgl;Ut(e)&&(this.sync!==null&&(e.deleteSync(this.sync),this.sync=null),this.frameLag=0,this.ready=!1,this.debug&&(this.debug.rect.style.display="none",this.debug.container.style.display="none"))}render(e){if(!this.supported||!this.props.enabled)return;let{gl:t,state:r}=this.webgl;if(!Ut(t)||this.sync!==null)return;this.nextNear=e.near,this.nextFar=e.far,B.copy(this.nextView,e.view),B.copy(this.nextProjection,e.projection),k&&this.webgl.timer.mark("hi-Z"),r.disable(t.CULL_FACE),r.disable(t.BLEND),r.disable(t.DEPTH_TEST),r.disable(t.SCISSOR_TEST),r.depthMask(!1),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0);let a=this.renderable.values,o=Math.pow(2,Math.ceil(Math.log(Math.max(t.drawingBufferWidth,t.drawingBufferHeight))/Math.log(2))-1);for(let f=0,p=this.levelData.length;f<p;++f){let l=this.levelData[f];l.framebuffer.bind(),f>0?(i.update(a.uInvSize,l.invSize),i.update(a.uOffset,T.set(a.uOffset.ref.value,0,0)),i.update(a.tPreviousLevel,this.levelData[f-1].texture)):(i.update(a.uInvSize,T.set(a.uInvSize.ref.value,1/o,1/o)),i.update(a.uOffset,T.set(a.uOffset.ref.value,this.viewport.x/t.drawingBufferWidth,this.viewport.y/t.drawingBufferHeight)),i.update(a.tPreviousLevel,this.drawPass.depthTextureOpaque)),r.currentRenderItemId=-1,r.viewport(0,0,l.size[0],l.size[1]),t.clear(t.COLOR_BUFFER_BIT),this.renderable.update(),this.renderable.render(),f>=this.props.minLevel&&(this.tex.bind(0),t.copyTexSubImage2D(t.TEXTURE_2D,0,l.offset,0,0,0,l.size[0],l.size[1]),this.tex.unbind(0))}this.tex.attachFramebuffer(this.fb,0);let n=this.tex.getWidth(),s=this.tex.getHeight();this.buf.read(0,0,n,s),this.sync=t.fenceSync(t.SYNC_GPU_COMMANDS_COMPLETE,0),t.flush(),k&&this.webgl.timer.markEnd("hi-Z")}tick(){if(!this.supported||!this.props.enabled||this.sync===null)return;let{gl:e}=this.webgl;if(!Ut(e))return;let t=e.clientWaitSync(this.sync,0,0);t===e.WAIT_FAILED||this.frameLag>=this.props.maxFrameLag?(e.deleteSync(this.sync),this.sync=null,this.frameLag=0,this.ready=!1):t===e.TIMEOUT_EXPIRED?this.frameLag+=1:(this.buf.getSubData(this.buffer),e.deleteSync(this.sync),this.sync=null,this.frameLag=0,this.ready=!0,this.near=this.nextNear,this.far=this.nextFar,B.copy(this.view,this.nextView),B.copy(this.projection,this.nextProjection))}transform(e){let{view:t,vp:r}=this;hu(r,e.center,t);let a=e.radius*1.2+1.52;return{vp:r,r:a}}project(e,t){let{projection:r,aabb:a,viewport:o}=this;xu(a,e,t,r);let n=a[2]-a[0],s=a[3]-a[1],f=Math.max(n*o.width,s*o.height),p=Math.ceil(mu(f/2));return{aabb:a,w:n,h:s,pr:f,lod:p}}setViewport(e,t,r,a){if(!this.supported)return;r=Math.max(r,2),a=Math.max(a,2),Ce.set(this.viewport,e,t,r,a);let o=Math.ceil(Math.log(Math.max(r,a))/Math.log(2));if(o===this.levelData.length)return;let{minLevel:n}=this.props;this.buffer=new Float32Array(Math.pow(2,o-n)*Math.pow(2,o-1-n)),this.tex.define(Math.pow(2,o-n),Math.pow(2,o-1-n));for(let f of this.levelData)f.framebuffer.destroy(),f.texture.destroy();this.levelData.length=0;for(let f=0;f<o;++f){let p=this.webgl.resources.framebuffer(),l=Math.pow(2,o-f-1),c=T.create(l,l),d=T.create(1/l,1/l),g=this.webgl.resources.texture("image-float32","alpha","float","nearest");g.define(l,l),g.attachFramebuffer(p,0),this.levelData.push({texture:g,framebuffer:p,size:c,invSize:d,offset:0})}let s=0;for(let f=0,p=o;f<p;++f){let l=this.levelData[f];f>=n&&(this.levelData[f].offset=s,s+=l.size[0])}this.clear()}setProps(e){if(this.supported)if(this.props.minLevel!==e.minLevel){Object.assign(this.props,e);let{x:t,y:r,width:a,height:o}=this.viewport;this.setViewport(t,r,a,o)}else Object.assign(this.props,e),this.props.enabled||this.clear()}initDebug(e){if(!e.parentElement)return;let t=document.createElement("div");Object.assign(t.style,{display:"block",position:"absolute",pointerEvents:"none"}),e.parentElement.appendChild(t);let r=document.createElement("canvas"),a=r.getContext("2d");if(!a)throw new Error("Could not create canvas 2d context");Object.assign(r.style,{width:"100%",height:"100%",imageRendering:"pixelated",position:"relative",pointerEvents:"none"}),t.appendChild(r);let o=document.createElement("div");Object.assign(o.style,{display:"none",position:"absolute",pointerEvents:"none"}),e.parentElement.appendChild(o),this.debug={container:t,canvas:r,ctx:a,rect:o}}canDebug(e){return this.supported&&this.props.enabled&&this.ready&&!!this.debug}showRect(e,t){if(!this.canDebug(this.debug))return;let{gl:{drawingBufferHeight:r},pixelRatio:a}=this.webgl,{viewport:{x:o,y:n,width:s,height:f}}=this,p=(e[0]*s+o)/a,l=(e[1]*f-n)/a,c=(e[2]*s+o)/a,d=(e[3]*f-n)/a,g=(r-f)/a;Object.assign(this.debug.rect.style,{border:t?"solid red":"solid green",display:"block",left:`${p}px`,top:`${l+g}px`,width:`${c-p}px`,height:`${d-l}px`})}showBuffer(e){if(!this.canDebug(this.debug))return;if(e>=this.levelData.length||e<this.props.minLevel){this.debug.container.style.display="none";return}let{offset:t,size:[r,a]}=this.levelData[e],o=this.tex.getWidth(),n=new Uint8ClampedArray(r*a*4);n.fill(255);for(let g=0;g<a;++g)for(let x=0;x<r;++x){let v=(a-g-1)*r+x,S=this.buffer[g*o+x+t]*255;n[v*4+0]=S,n[v*4+3]=255-S}let s=new ImageData(n,r,a);this.debug.canvas.width=s.width,this.debug.canvas.height=s.height,this.debug.ctx.putImageData(s,0,0);let{viewport:{x:f,y:p,width:l,height:c},webgl:{pixelRatio:d}}=this;Object.assign(this.debug.container.style,{display:"block",bottom:`${p/d}px`,left:`${f/d}px`,width:`${l/d}px`,height:`${c/d}px`})}debugOcclusion(e){if(!this.canDebug(this.debug))return;if(!e){this.debug.rect.style.display="none",this.debug.container.style.display="none";return}let t=this.isOccluded(e),{vp:r,r:a}=this.transform(e),{aabb:o,lod:n}=this.project(r,a);this.showRect(o,t),this.showBuffer(n)}reset(){this.sync=null,this.ready=!1,this.frameLag=0,this.levelData.length=0;let{x:e,y:t,width:r,height:a}=this.viewport;this.setViewport(e,t,r,a)}dispose(){if(this.supported){this.clear(),this.fb.destroy(),this.tex.destroy(),this.buf.destroy(),this.renderable.dispose();for(let e of this.levelData)e.framebuffer.destroy(),e.texture.destroy()}}};var Hn=`
precision highp float;

uniform sampler2D tWboitA;
uniform sampler2D tWboitB;
uniform vec2 uTexSize;

void main() {
    vec2 coords = gl_FragCoord.xy / uTexSize;

    vec4 accum = texture2D(tWboitA, coords);
    float r = 1.0 - accum.a;

    accum.a = texture2D(tWboitB, coords).r;
    // divisor needs to allow very small values for nice fading
    gl_FragColor = vec4(accum.rgb / clamp(accum.a, 0.00000001, 50000.0), r);
}
`;var Tu={...be,tWboitA:j("texture","rgba","float","nearest"),tWboitB:j("texture","rgba","float","nearest"),uTexSize:C("v2")},Su=he("evaluate-wboit",Te,Hn);function Cu(u,e,t){let r={...ve,tWboitA:i.create(e),tWboitB:i.create(t),uTexSize:i.create(T.create(e.getWidth(),e.getHeight()))},a={...Tu},o=me(u,"triangles",Su,a,r);return fe(o,r)}var Za=class u{constructor(e,t,r){this.webgl=e;this._supported=!1;if(!u.isSupported(e))return;let{resources:a,isWebGL2:o}=e;this.textureA=a.texture("image-float32","rgba","float","nearest"),this.textureA.define(t,r),this.textureB=a.texture("image-float32","rgba","float","nearest"),this.textureB.define(t,r),this.depthRenderbuffer=a.renderbuffer(o?"depth32f-stencil8":"depth-stencil","depth-stencil",t,r),this.renderable=Cu(e,this.textureA,this.textureB),this.framebuffer=a.framebuffer(),this._supported=!0,this._init()}get supported(){return this._supported}getByteCount(){return this._supported?this.textureA.getByteCount()+this.textureB.getByteCount()+this.depthRenderbuffer.getByteCount():0}bind(){let{state:e,gl:t}=this.webgl;this.framebuffer.bind(),e.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT),e.disable(t.DEPTH_TEST),e.blendFuncSeparate(t.ONE,t.ONE,t.ZERO,t.ONE_MINUS_SRC_ALPHA),e.enable(t.BLEND)}render(){k&&this.webgl.timer.mark("WboitPass.render");let{state:e,gl:t}=this.webgl;e.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA),e.enable(t.BLEND),this.renderable.update(),this.renderable.render(),k&&this.webgl.timer.markEnd("WboitPass.render")}setSize(e,t){let[r,a]=this.renderable.values.uTexSize.ref.value;(e!==r||t!==a)&&(this.textureA.define(e,t),this.textureB.define(e,t),this.depthRenderbuffer.setSize(e,t),i.update(this.renderable.values.uTexSize,T.set(this.renderable.values.uTexSize.ref.value,e,t)))}reset(){this._supported&&this._init()}_init(){let{extensions:{drawBuffers:e}}=this.webgl;this.framebuffer.bind(),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1]),this.textureA.attachFramebuffer(this.framebuffer,"color0"),this.textureB.attachFramebuffer(this.framebuffer,"color1"),this.depthRenderbuffer.attachFramebuffer(this.framebuffer)}static isSupported(e){let{extensions:{drawBuffers:t,textureFloat:r,colorBufferFloat:a,depthTexture:o}}=e;if(!r||!a||!o||!t){if(Pe){let n=[];r||n.push("textureFloat"),a||n.push("colorBufferFloat"),o||n.push("depthTexture"),t||n.push("drawBuffers"),console.log(`Missing "${n.join('", "')}" extensions required for "wboit"`)}return!1}else return!0}};var jn=`
precision highp float;

uniform sampler2D tDpoitFrontColor;
uniform vec2 uTexSize;

void main() {
    vec2 coords = gl_FragCoord.xy / uTexSize;
    gl_FragColor = texture2D(tDpoitFrontColor, coords);
}
`;var Gn=`
    precision highp float;

    uniform sampler2D tDpoitBackColor;
    uniform vec2 uTexSize;

    void main() {
        vec2 coords = gl_FragCoord.xy / uTexSize;
        gl_FragColor = texture2D(tDpoitBackColor, coords);
        if (gl_FragColor.a == 0.0) {
            discard;
        }
    }
`;var Pu={...be,tDpoitBackColor:j("texture","rgba","float","nearest"),uTexSize:C("v2")},wu=he("blend-back-dpoit",Te,Gn);function Du(u,e){let t={...ve,tDpoitBackColor:i.create(e),uTexSize:i.create(T.create(e.getWidth(),e.getHeight()))},r={...Pu},a=me(u,"triangles",wu,r,t);return fe(a,t)}var ku={...be,tDpoitFrontColor:j("texture","rgba","float","nearest"),uTexSize:C("v2")},Ru=he("evaluate-dpoit",Te,jn);function Fu(u,e){let t={...ve,tDpoitFrontColor:i.create(e),uTexSize:i.create(T.create(e.getWidth(),e.getHeight()))},r={...ku},a=me(u,"triangles",Ru,r,t);return fe(a,t)}var Ya=class u{constructor(e,t,r,a=null){this.webgl=e;this.stencil=a;this.DEPTH_CLEAR_VALUE=-99999;this.MAX_DEPTH=1;this.MIN_DEPTH=0;this.passCount=0;this._supported=!1;if(!u.isSupported(e))return;let{resources:o,extensions:{colorBufferHalfFloat:n,textureHalfFloat:s}}=e;Ut(e.gl)?(this.depthTextures=[o.texture("image-float32","rg","float","nearest"),o.texture("image-float32","rg","float","nearest")],this.colorFrontTextures=n&&s?[o.texture("image-float16","rgba","fp16","nearest"),o.texture("image-float16","rgba","fp16","nearest")]:[o.texture("image-float32","rgba","float","nearest"),o.texture("image-float32","rgba","float","nearest")],this.colorBackTextures=n&&s?[o.texture("image-float16","rgba","fp16","nearest"),o.texture("image-float16","rgba","fp16","nearest")]:[o.texture("image-float32","rgba","float","nearest"),o.texture("image-float32","rgba","float","nearest")]):(this.depthTextures=[o.texture("image-float32","rgba","float","nearest"),o.texture("image-float32","rgba","float","nearest")],this.colorFrontTextures=[o.texture("image-float32","rgba","float","nearest"),o.texture("image-float32","rgba","float","nearest")],this.colorBackTextures=[o.texture("image-float32","rgba","float","nearest"),o.texture("image-float32","rgba","float","nearest")]),this.depthTextures[0].define(t,r),this.depthTextures[1].define(t,r),this.colorFrontTextures[0].define(t,r),this.colorFrontTextures[1].define(t,r),this.colorBackTextures[0].define(t,r),this.colorBackTextures[1].define(t,r),this.depthFramebuffers=[o.framebuffer(),o.framebuffer()],this.colorFramebuffers=[o.framebuffer(),o.framebuffer()],this.blendBackRenderable=Du(e,this.colorBackTextures[0]),this.renderable=Fu(e,this.colorFrontTextures[0]),this._supported=!0,this._init()}get supported(){return this._supported}getByteCount(){return this._supported?this.depthTextures[0].getByteCount()+this.depthTextures[1].getByteCount()+this.colorFrontTextures[0].getByteCount()+this.colorFrontTextures[1].getByteCount()+this.colorBackTextures[0].getByteCount()+this.colorBackTextures[1].getByteCount():0}bind(){let{state:e,gl:t,extensions:{blendMinMax:r}}=this.webgl;return this.passCount=0,this.depthFramebuffers[0].bind(),e.clearColor(this.DEPTH_CLEAR_VALUE,this.DEPTH_CLEAR_VALUE,0,0),t.clear(t.COLOR_BUFFER_BIT),this.depthFramebuffers[1].bind(),e.clearColor(-this.MIN_DEPTH,this.MAX_DEPTH,0,0),t.clear(t.COLOR_BUFFER_BIT),this.colorFramebuffers[0].bind(),e.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),this.colorFramebuffers[1].bind(),e.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),this.depthFramebuffers[0].bind(),e.blendEquation(r.MAX),e.disable(t.DEPTH_TEST),e.depthMask(!1),{depth:this.depthTextures[1],frontColor:this.colorFrontTextures[1],backColor:this.colorBackTextures[1]}}bindDualDepthPeeling(){let{state:e,gl:t,extensions:{blendMinMax:r}}=this.webgl;return this.readId=this.passCount%2,this.writeId=1-this.readId,this.passCount+=1,this.depthFramebuffers[this.writeId].bind(),e.clearColor(this.DEPTH_CLEAR_VALUE,this.DEPTH_CLEAR_VALUE,0,0),t.clear(t.COLOR_BUFFER_BIT),this.colorFramebuffers[this.writeId].bind(),e.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),this.depthFramebuffers[this.writeId].bind(),e.blendEquation(r.MAX),e.disable(t.DEPTH_TEST),e.depthMask(!1),{depth:this.depthTextures[this.readId],frontColor:this.colorFrontTextures[this.readId],backColor:this.colorBackTextures[this.readId]}}renderBlendBack(){k&&this.webgl.timer.mark("DpoitPass.renderBlendBack");let{state:e,gl:t}=this.webgl;e.blendEquation(t.FUNC_ADD),e.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA),i.update(this.blendBackRenderable.values.tDpoitBackColor,this.colorBackTextures[this.writeId]),this.blendBackRenderable.update(),this.blendBackRenderable.render(),k&&this.webgl.timer.markEnd("DpoitPass.renderBlendBack")}render(){k&&this.webgl.timer.mark("DpoitPass.render");let{state:e,gl:t}=this.webgl;e.blendEquation(t.FUNC_ADD),e.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),i.update(this.renderable.values.tDpoitFrontColor,this.colorFrontTextures[this.writeId]),this.renderable.update(),this.renderable.render(),k&&this.webgl.timer.markEnd("DpoitPass.render")}setSize(e,t){let[r,a]=this.renderable.values.uTexSize.ref.value;if(e!==r||t!==a){for(let o=0;o<2;o++)this.depthTextures[o].define(e,t),this.colorFrontTextures[o].define(e,t),this.colorBackTextures[o].define(e,t);i.update(this.renderable.values.uTexSize,T.set(this.renderable.values.uTexSize.ref.value,e,t)),i.update(this.blendBackRenderable.values.uTexSize,T.set(this.blendBackRenderable.values.uTexSize.ref.value,e,t))}}reset(){this._supported&&this._init()}_init(){let{extensions:{drawBuffers:e}}=this.webgl;for(let t=0;t<2;t++)this.depthFramebuffers[t].bind(),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1,e.COLOR_ATTACHMENT2]),this.colorFrontTextures[t].attachFramebuffer(this.depthFramebuffers[t],"color0"),this.colorBackTextures[t].attachFramebuffer(this.depthFramebuffers[t],"color1"),this.depthTextures[t].attachFramebuffer(this.depthFramebuffers[t],"color2"),this.stencil?.attachFramebuffer(this.depthFramebuffers[t]),this.colorFramebuffers[t].bind(),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1]),this.colorFrontTextures[t].attachFramebuffer(this.colorFramebuffers[t],"color0"),this.colorBackTextures[t].attachFramebuffer(this.colorFramebuffers[t],"color1")}static isSupported(e){let{extensions:{drawBuffers:t,textureFloat:r,colorBufferFloat:a,depthTexture:o,blendMinMax:n}}=e;if(!r||!a||!o||!t||!n){if(Pe){let s=[];r||s.push("textureFloat"),a||s.push("colorBufferFloat"),o||s.push("depthTexture"),t||s.push("drawBuffers"),n||s.push("blendMinMax"),console.log(`Missing "${s.join('", "')}" extensions required for "dpoit"`)}return!1}else return!0}};var Yr=class{constructor(e,t,r,a,o){this.webgl=e;this.transparencyMode="blended";let{extensions:n,resources:s,isWebGL2:f}=e;this.drawTarget=e.createDrawTarget(),this.colorTarget=e.createRenderTarget(r,a,"depth-stencil","uint8","linear"),this.transparentColorTarget=e.createRenderTarget(r,a,"none","uint8","linear"),this.packedDepth=!n.depthTexture,this.depthTargetTransparent=e.createRenderTarget(r,a,"depth-stencil","uint8","nearest"),this.depthTextureTransparent=this.depthTargetTransparent.texture,this.depthTargetOpaque=this.packedDepth?e.createRenderTarget(r,a,"depth-stencil"):null,this.depthTextureOpaque=this.depthTargetOpaque?this.depthTargetOpaque.texture:s.texture("image-depth","depth-stencil",f?"float-stencil":"uint24-8","nearest"),this.packedDepth||this.depthTextureOpaque.define(r,a),this.wboit=new Za(e,r,a),this.dpoit=new Ya(e,r,a,this.colorTarget.depthRenderbuffer),this.marking=new Br(e,r,a),this.postprocessing=new _e(e,t,this),this.ssaoShading={name:"ssao",ssao:this.postprocessing.ssao.ssaoDepthTexture},this.antialiasing=new pr(e,r,a),this.dof=new ar(e,r,a),this.copyFbo=Lt(e,this.colorTarget.texture),this.setTransparency(o)}setTransparency(e){e==="wboit"?(this.transparencyMode=this.wboit.supported?"wboit":"blended",Pe&&!this.wboit.supported&&console.log('Missing "wboit" support, falling back to "blended".')):e==="dpoit"?(this.transparencyMode=this.dpoit.supported?"dpoit":"blended",Pe&&!this.dpoit.supported&&console.log('Missing "dpoit" support, falling back to "blended".')):this.transparencyMode="blended",this.depthTextureOpaque.detachFramebuffer(this.postprocessing.target.framebuffer,"depth"),this.marking.invalidate()}get transparency(){return this.transparencyMode}getByteCount(){return this.drawTarget.getByteCount()+this.colorTarget.getByteCount()+this.transparentColorTarget.getByteCount()+this.depthTargetTransparent.getByteCount()+(this.depthTargetOpaque?this.depthTargetOpaque.getByteCount():this.depthTextureOpaque.getByteCount())+this.wboit.getByteCount()+this.dpoit.getByteCount()+this.marking.getByteCount()+this.postprocessing.getByteCount()+this.antialiasing.getByteCount()+this.dof.getByteCount()}reset(){this.wboit.reset(),this.dpoit.reset(),this.postprocessing.reset(),this.marking.invalidate()}setSize(e,t){let r=this.colorTarget.getWidth(),a=this.colorTarget.getHeight();(e!==r||t!==a)&&(this.colorTarget.setSize(e,t),this.depthTargetTransparent.setSize(e,t),this.transparentColorTarget.setSize(e,t),this.depthTargetOpaque?this.depthTargetOpaque.setSize(e,t):this.depthTextureOpaque.define(e,t),i.update(this.copyFbo.values.uTexSize,T.set(this.copyFbo.values.uTexSize.ref.value,e,t))),this.wboit.supported&&this.wboit.setSize(e,t),this.dpoit.supported&&this.dpoit.setSize(e,t),this.marking.setSize(e,t),this.postprocessing.setSize(e,t),this.antialiasing.setSize(e,t),this.dof.setSize(e,t)}renderEmissiveBloom(e,t,r,a){let o=this.postprocessing.bloom;o.emissiveTarget.bind(),e.clear(!1,!0,!0);let n=!this.packedDepth;n&&this.depthTextureOpaque.attachFramebuffer(o.emissiveTarget.framebuffer,"depth"),e.renderEmissiveOpaque(r.primitives,t,this.depthTextureTransparent,n),a&&r.opacityAverage<1&&e.renderEmissiveTransparent(r.primitives,t,this.depthTextureTransparent),n&&(this.depthTextureOpaque.detachFramebuffer(o.emissiveTarget.framebuffer,"depth"),o.emissiveTarget.depthRenderbuffer?.attachFramebuffer(o.emissiveTarget.framebuffer))}_renderBloom(e,t,r,a){if(!Dt.isEnabled(a)||a.bloom.name!=="on")return!1;let o=this.postprocessing.bloom,n=a.bloom.params,s=n.mode==="emissive";return s&&r.emissiveAverage===0?!1:(s&&this.renderEmissiveBloom(e,t,r,n.transparency),r.opacityAverage>=1&&(this.transparentColorTarget.bind(),e.clear(!1,!1,!0),this.depthTargetTransparent.bind(),e.clearDepth(!0)),o.update(this.colorTarget.texture,this.transparentColorTarget.texture,o.emissiveTarget.texture,this.depthTextureOpaque,this.depthTextureTransparent,n,t,!0),o.render(t.viewport),!0)}_renderDpoit(e,t,r,a,o,n){if(!this.dpoit.supported)throw new Error("expected dpoit to be supported");this.depthTextureOpaque.attachFramebuffer(this.colorTarget.framebuffer,"depth"),e.clear(!0),r.hasOpaque&&e.renderOpaque(r.primitives,t),this.depthTextureOpaque.detachFramebuffer(this.colorTarget.framebuffer,"depth"),_e.isTransparentDepthRequired(r,n)&&(this.depthTargetTransparent.bind(),e.clearDepth(!0),r.opacityAverage<1&&e.renderDepthTransparent(r.primitives,t,this.depthTextureOpaque));let s=_e.isEnabled(n);if(r.opacityAverage<1){let f=s?this.transparentColorTarget:this.colorTarget;s&&(f.bind(),e.clear(!1,!1,!0));let p=this.dpoit.bind();e.renderDpoitTransparent(r.primitives,t,this.depthTextureOpaque,p);for(let l=0;l<a;l++){k&&this.webgl.timer.mark("DpoitPass.layer");let c=this.dpoit.bindDualDepthPeeling();e.renderDpoitTransparent(r.primitives,t,this.depthTextureOpaque,c),a>1&&(f.bind(),this.dpoit.renderBlendBack()),k&&this.webgl.timer.markEnd("DpoitPass.layer")}f.bind(),this.dpoit.render()}_e.isEnabled(n)&&this.postprocessing.render(t,r,!1,o,e.props.backgroundColor,n,e.light,e.ambientColor,this._renderBloom(e,t,r,n)),r.volumes.renderables.length>0&&e.renderVolume(r.volumes,t,this.depthTextureOpaque)}_renderWboit(e,t,r,a,o){if(!this.wboit.supported)throw new Error("expected wboit to be supported");this.depthTextureOpaque.attachFramebuffer(this.colorTarget.framebuffer,"depth"),e.clear(!0),r.hasOpaque&&e.renderOpaque(r.primitives,t),_e.isTransparentDepthRequired(r,o)&&(this.depthTargetTransparent.bind(),e.clearDepth(!0),r.opacityAverage<1&&e.renderDepthTransparent(r.primitives,t,this.depthTextureOpaque));let n=_e.isEnabled(o);if(r.opacityAverage<1){let s=n?this.transparentColorTarget:this.colorTarget;n&&(s.bind(),e.clear(!1,!1,!0)),this.wboit.bind(),e.renderWboitTransparent(r.primitives,t,this.depthTextureOpaque),s.bind(),this.wboit.render()}_e.isEnabled(o)&&this.postprocessing.render(t,r,!1,a,e.props.backgroundColor,o,e.light,e.ambientColor,this._renderBloom(e,t,r,o)),r.volumes.renderables.length>0&&(this.wboit.bind(),e.renderWboitTransparent(r.volumes,t,this.depthTextureOpaque),(n?this.postprocessing.target:this.colorTarget).bind(),this.wboit.render())}_renderBlended(e,t,r,a,o,n){if(a?this.drawTarget.bind():this.packedDepth?this.colorTarget.bind():this.depthTextureOpaque.attachFramebuffer(this.colorTarget.framebuffer,"depth"),e.clear(!0),r.hasOpaque&&e.renderOpaque(r.primitives,t),a)r.opacityAverage<1&&e.renderBlendedTransparent(r.primitives,t);else{this.depthTargetOpaque&&(this.depthTargetOpaque.bind(),e.clearDepth(!0),e.renderDepthOpaque(r.primitives,t),this.colorTarget.bind()),_e.isTransparentDepthRequired(r,n)&&(this.depthTargetTransparent.bind(),e.clearDepth(!0),r.opacityAverage<1&&e.renderDepthTransparent(r.primitives,t,this.depthTextureOpaque));let s=_e.isEnabled(n);if(r.opacityAverage<1&&(s&&(this.transparentColorTarget.bind(),e.clear(!1,!1,!0),this.packedDepth?this.colorTarget.depthRenderbuffer?.attachFramebuffer(this.transparentColorTarget.framebuffer):this.depthTextureOpaque.attachFramebuffer(this.transparentColorTarget.framebuffer,"depth")),e.renderBlendedTransparent(r.primitives,t),s&&(this.packedDepth?this.colorTarget.depthRenderbuffer?.detachFramebuffer(this.transparentColorTarget.framebuffer):this.depthTextureOpaque.detachFramebuffer(this.transparentColorTarget.framebuffer,"depth"))),s&&(this.packedDepth?this.colorTarget.depthRenderbuffer?.detachFramebuffer(this.postprocessing.target.framebuffer):this.depthTextureOpaque.detachFramebuffer(this.postprocessing.target.framebuffer,"depth"),this.postprocessing.render(t,r,!1,o,e.props.backgroundColor,n,e.light,e.ambientColor,this._renderBloom(e,t,r,n)),this.packedDepth?this.colorTarget.depthRenderbuffer?.attachFramebuffer(this.postprocessing.target.framebuffer):this.depthTextureOpaque.attachFramebuffer(this.postprocessing.target.framebuffer,"depth")),r.volumes.renderables.length>0){let f=_e.isEnabled(n)?this.postprocessing.target:this.colorTarget;this.packedDepth?this.colorTarget.depthRenderbuffer?.detachFramebuffer(f.framebuffer):this.depthTextureOpaque.detachFramebuffer(f.framebuffer,"depth"),f.bind(),e.renderVolume(r.volumes,t,this.depthTextureOpaque),this.packedDepth?this.colorTarget.depthRenderbuffer?.attachFramebuffer(f.framebuffer):this.depthTextureOpaque.attachFramebuffer(f.framebuffer,"depth"),f.bind()}}}_render(e,t,r,a,o){let{renderer:n,camera:s,scene:f,frame:p}=e;if(s.disabled)return;let l=f.volumes.renderables.length>0,c=_e.isEnabled(a.postprocessing),d=pr.isEnabled(a.postprocessing),g=ar.isEnabled(a.postprocessing),x=!o&&Br.hasMarking(f,a),v=!t||x,{x:S,y:P,width:D,height:O}=s.viewport;n.setViewport(S,P,D,O),n.update(s,f,p),r&&!d&&!g&&!v&&!c&&(this.drawTarget.bind(),n.clear(!1));let z=!1;this.transparencyMode==="wboit"&&this.wboit.supported?(this._renderWboit(n,s,f,r,a.postprocessing),z=!0):this.transparencyMode==="dpoit"&&this.dpoit.supported?(this._renderDpoit(n,s,f,a.dpoitIterations,r,a.postprocessing),z=!0):this._renderBlended(n,s,f,!l&&!c&&!d&&!g&&!v,r,a.postprocessing);let G=c?this.postprocessing.target:v||l||z||g?this.colorTarget:this.drawTarget;G.bind(),this._renderHelpers(e,G);let I=this._renderOutput(s,f,a,{offscreen:v,postprocessingEnabled:c,antialiasingEnabled:d,dofEnabled:g,volumeRendering:l,oitEnabled:z});I?o||this.marking.present(e,a,{base:I,toDrawingBuffer:t,offsets:Mr,restart:!0,samples:1,shading:this.getMarkingShading(a.postprocessing)}):this.marking.invalidate(),this.webgl.gl.flush()}_renderHelpers(e,t){let{renderer:r,camera:a,helper:o,frame:n}=e;if(o.debug.isEnabled||o.pointer.isEnabled){if(this.packedDepth||this.depthTextureOpaque.attachFramebuffer(t.framebuffer,"depth"),o.debug.isEnabled){o.debug.syncVisibility();for(let s of o.debug.scenes)r.renderBlended(s,a)}o.pointer.isEnabled&&(o.pointer.setCamera(a),r.update(o.pointer.camera,o.pointer.scene,n),r.renderBlended(o.pointer.scene,o.pointer.camera)),this.packedDepth||this.depthTextureOpaque.detachFramebuffer(t.framebuffer,"depth")}o.handle.isEnabled&&r.renderBlended(o.handle.scene,a),o.camera.isEnabled&&(o.camera.update(a),r.update(o.camera.camera,o.camera.scene,n),r.renderBlended(o.camera.scene,o.camera.camera))}_renderOutput(e,t,r,a){let{offscreen:o,postprocessingEnabled:n,antialiasingEnabled:s,dofEnabled:f,volumeRendering:p,oitEnabled:l}=a,c=!o,d=!1;if(s){let g=n?this.postprocessing.target.texture:this.colorTarget.texture;this.antialiasing.render(e,g,c&&!f,r.postprocessing)}else c&&!f&&(d=!0);if(f&&r.postprocessing.dof.name==="on"){let g=s?this.antialiasing.target.texture:n?this.postprocessing.target.texture:this.colorTarget.texture;this.dof.update(e,g,this.depthTargetOpaque?.texture||this.depthTextureOpaque,this.depthTextureTransparent,r.postprocessing.dof.params,t.boundingSphereVisible),this.dof.render(e.viewport,c?void 0:this.getColorTarget(r.postprocessing))}else c&&!s&&(d=!0);return d&&(n?this.copyToDrawingBuffer(this.postprocessing.target,e.viewport):(p||l)&&this.copyToDrawingBuffer(this.colorTarget,e.viewport)),o?this.getColorTarget(r.postprocessing):void 0}copyToDrawingBuffer(e,t){let{gl:r,state:a}=this.webgl;this.copyFbo.values.tColor.ref.value!==e.texture&&(i.update(this.copyFbo.values.tColor,e.texture),this.copyFbo.update()),this.drawTarget.bind(),a.enable(r.SCISSOR_TEST),a.disable(r.BLEND),a.disable(r.DEPTH_TEST),a.depthMask(!1);let{x:o,y:n,width:s,height:f}=t;a.viewport(o,n,s,f),a.scissor(o,n,s,f),this.copyFbo.render()}render(e,t,r,a=!1){k&&this.webgl.timer.mark("DrawPass.render");let{renderer:o,camera:n,scene:s}=e;this.postprocessing.setTransparentBackground(t.transparentBackground);let f=this.isTransparentBackground(s,t);o.setTransparentBackground(f),o.setDrawingBufferSize(this.colorTarget.getWidth(),this.colorTarget.getHeight()),o.setPixelRatio(this.webgl.pixelRatio),mt.is(n)?(k&&this.webgl.timer.mark("StereoCamera.left"),this._render({...e,camera:n.left},r,f,t,a),k&&this.webgl.timer.markEnd("StereoCamera.left"),k&&this.webgl.timer.mark("StereoCamera.right"),this._render({...e,camera:n.right},r,f,t,a),k&&this.webgl.timer.markEnd("StereoCamera.right"),this.marking.invalidate()):this._render({...e,camera:n},r,f,t,a),k&&this.webgl.timer.markEnd("DrawPass.render")}isTransparentBackground(e,t){let r=t.postprocessing,a=this.postprocessing.background.isEnabled(r),o=!t.transparentBackground&&!a&&Dt.isEnabled(r)&&r.bloom.name==="on"&&!(r.bloom.params.mode==="emissive"&&e.emissiveAverage===0);return t.transparentBackground||a||o}getMarkingShading(e){return Mt.isEnabled(e)?this.ssaoShading:null}getColorTarget(e){return ar.isEnabled(e)?this.dof.target:pr.isEnabled(e)?this.antialiasing.target:_e.isEnabled(e)?this.postprocessing.target:this.colorTarget}};var Eu={...be,tColor:j("texture","rgba","ubyte","nearest"),uTexSize:C("v2"),uWeight:C("f")},Lu=he("compose",Te,qa);function Ou(u,e){let t={...ve,tColor:i.create(e),uTexSize:i.create(T.create(e.getWidth(),e.getHeight())),uWeight:i.create(1)},r={...Eu},a=me(u,"triangles",Lu,r,t);return fe(a,t)}var _a={mode:m.Select("temporal",[["off","Off"],["on","On"],["temporal","Temporal"]]),sampleLevel:m.Numeric(2,{min:0,max:5,step:1},{description:"Take level^2 samples."}),reduceFlicker:m.Boolean(!0,{description:'Reduce flicker in "temporal" mode when marking is disabled (i.e. drawn as part of the scene).'}),reuseOcclusion:m.Boolean(!0,{description:"Reuse occlusion data. It is faster but has some artefacts."})};function Fi(u){return!mt.is(u)}var xr=class{constructor(e,t){this.webgl=e;this.drawPass=t;let{colorBufferFloat:r,textureFloat:a,colorBufferHalfFloat:o,textureHalfFloat:n}=e.extensions,s=t.colorTarget.getWidth(),f=t.colorTarget.getHeight();this.colorTarget=e.createRenderTarget(s,f,"none");let p=o&&n?"fp16":r&&a?"float32":"uint8";this.composeTarget=e.createRenderTarget(s,f,"none",p),this.holdTarget=e.createRenderTarget(s,f,"none"),this.compose=Ou(e,t.colorTarget.texture)}static isEnabled(e){return e.mode!=="off"}getByteCount(){return this.colorTarget.getByteCount()+this.composeTarget.getByteCount()+this.holdTarget.getByteCount()}syncSize(){let e=this.drawPass.colorTarget.getWidth(),t=this.drawPass.colorTarget.getHeight(),[r,a]=this.compose.values.uTexSize.ref.value;(e!==r||t!==a)&&(this.colorTarget.setSize(e,t),this.composeTarget.setSize(e,t),this.holdTarget.setSize(e,t),i.update(this.compose.values.uTexSize,T.set(this.compose.values.uTexSize.ref.value,e,t)))}render(e,t,r,a,o){return r.multiSample.mode==="temporal"&&!o?this.renderTemporalMultiSample(e,t,r,a):(this.renderMultiSample(t,r,a),-2)}renderMultiSample(e,t,r){let{camera:a}=e,{compose:o,composeTarget:n,drawPass:s,webgl:f}=this,{gl:p,state:l}=f;k&&f.timer.mark("MultiSamplePass.renderMultiSample");let c=Er(t.multiSample.sampleLevel),{x:d,y:g,width:x,height:v}=a.viewport,S=1/c.length,P=1/32;i.update(o.values.tColor,s.getColorTarget(t.postprocessing).texture),o.update();for(let D=0;D<c.length;++D){let O=c[D];Lr(a,O);let z=-.5+(D+.5)/c.length,G=S+P*z;i.update(o.values.uWeight,G),D===0||!t.multiSample.reuseOcclusion?s.postprocessing.setOcclusionOffset(0,0):s.postprocessing.setOcclusionOffset(O[0]/x,O[1]/v),s.render(e,t,!1,Fi(a)),n.bind(),l.enable(p.BLEND),l.blendEquationSeparate(p.FUNC_ADD,p.FUNC_ADD),l.blendFuncSeparate(p.ONE,p.ONE,p.ONE,p.ONE),l.disable(p.DEPTH_TEST),l.depthMask(!1),l.viewport(d,g,x,v),l.scissor(d,g,x,v),D===0&&(l.clearColor(0,0,0,0),p.clear(p.COLOR_BUFFER_BIT)),o.render()}s.postprocessing.setOcclusionOffset(0,0),i.update(o.values.uWeight,1),i.update(o.values.tColor,n.texture),o.update(),this.colorTarget.bind(),l.viewport(d,g,x,v),l.scissor(d,g,x,v),l.disable(p.BLEND),o.render(),Or(a),this.drawPass.marking.present(e,t,{base:this.colorTarget,toDrawingBuffer:r,offsets:c,restart:!0,samples:c.length,shading:s.getMarkingShading(t.postprocessing)}),k&&f.timer.markEnd("MultiSamplePass.renderMultiSample")}renderTemporalMultiSample(e,t,r,a){let{camera:o}=t,{compose:n,composeTarget:s,holdTarget:f,drawPass:p,webgl:l}=this,{gl:c,state:d}=l;k&&l.timer.mark("MultiSamplePass.renderTemporalMultiSample");let g=Er(r.multiSample.sampleLevel);if(e===-2||e>=g.length)return-2;let{x,y:v,width:S,height:P}=o.viewport,D=1/g.length,O=Ha(r.multiSample.sampleLevel),z=e===-1;if(z)p.render(t,r,!1,Fi(o)),i.update(n.values.uWeight,1),i.update(n.values.tColor,p.getColorTarget(r.postprocessing).texture),n.update(),f.bind(),d.disable(c.BLEND),d.disable(c.DEPTH_TEST),d.depthMask(!1),d.viewport(x,v,S,P),d.scissor(x,v,S,P),n.render(),e+=1;else{i.update(n.values.tColor,p.getColorTarget(r.postprocessing).texture),i.update(n.values.uWeight,D),n.update();for(let I=0;I<O;++I){let M=g[e];if(Lr(o,M),e===0||!r.multiSample.reuseOcclusion?p.postprocessing.setOcclusionOffset(0,0):p.postprocessing.setOcclusionOffset(M[0]/S,M[1]/P),p.render(t,r,!1,Fi(o)),s.bind(),d.enable(c.BLEND),d.blendEquationSeparate(c.FUNC_ADD,c.FUNC_ADD),d.blendFuncSeparate(c.ONE,c.ONE,c.ONE,c.ONE),d.disable(c.DEPTH_TEST),d.depthMask(!1),d.viewport(x,v,S,P),d.scissor(x,v,S,P),e===0&&(d.clearColor(0,0,0,0),c.clear(c.COLOR_BUFFER_BIT)),n.render(),e+=1,e>=g.length)break}}p.postprocessing.setOcclusionOffset(0,0),this.colorTarget.bind(),d.viewport(x,v,S,P),d.scissor(x,v,S,P);let G=e*D;return G>0&&(i.update(n.values.uWeight,1),i.update(n.values.tColor,s.texture),n.update(),d.disable(c.BLEND),n.render()),G<1&&(i.update(n.values.uWeight,1-G),i.update(n.values.tColor,f.texture),n.update(),G===0?d.disable(c.BLEND):d.enable(c.BLEND),n.render()),Or(o),this.drawPass.marking.present(t,r,{base:this.colorTarget,toDrawingBuffer:a,offsets:g,restart:z,samples:z?1:O,shading:p.getMarkingShading(r.postprocessing)}),k&&l.timer.markEnd("MultiSamplePass.renderTemporalMultiSample"),e>=g.length?-2:e}},_r=class{constructor(e){this.multiSamplePass=e;this.sampleIndex=-2}update(e,t){return e&&(this.sampleIndex=-1),t.mode==="temporal"?this.sampleIndex!==-2:!1}render(e,t,r,a){return this.sampleIndex=this.multiSamplePass.render(this.sampleIndex,e,t,r,!!a),this.sampleIndex<0}};var ra;(r=>{function u(a,o,n){return{array:a,width:o,height:n}}r.create=u;function e(a){let{array:o,width:n,height:s}=a,f=o.length/(n*s),p=n*f;for(let l=0,c=s/2;l<c;++l)for(let d=0,g=p;d<g;++d){let x=l*p+d,v=(s-l-1)*p+d,S=o[x];o[x]=o[v],o[v]=S}return a}r.flipY=e;function t(a){let{array:o}=a,n=o instanceof Uint8Array?255:1;for(let s=0,f=o.length;s<f;s+=4){let p=o[s+3]/n;p!==0&&(o[s]=Math.min(n,o[s]/p),o[s+1]=Math.min(n,o[s+1]/p),o[s+2]=Math.min(n,o[s+2]/p))}return a}r.divideByAlpha=t})(ra||={});var Bu={transparentBackground:m.Boolean(!1),dpoitIterations:m.Numeric(2,{min:1,max:10,step:1}),multiSample:m.Group(_a),postprocessing:m.Group(Na),marking:m.Group(ja),illumination:m.Group(Wa),cameraHelper:m.Group(Hr),renderer:m.Group(Gr)},Qa=class{constructor(e,t,r,a,o,n,s){this.webgl=e;this.renderer=r;this.scene=a;this.camera=o;this._width=0;this._height=0;this._camera=new We;this._frame=Wt();this.props={...m.getDefaultValues(Bu),...s},this.drawPass=new Yr(e,t,128,128,a.transparency),this.illuminationPass=new yr(e,this.drawPass),this.multiSamplePass=new xr(e,this.drawPass),this.multiSampleHelper=new _r(this.multiSamplePass),this.helper={camera:new ma(e,this.props.cameraHelper),debug:n.debug,handle:n.handle,pointer:n.pointer},this.setSize(1024,768)}get colorTarget(){return this._colorTarget}get width(){return this._width}get height(){return this._height}getByteCount(){return this.drawPass.getByteCount()+this.illuminationPass.getByteCount()+this.multiSamplePass.getByteCount()}updateBackground(){return new Promise(e=>{this.drawPass.postprocessing.background.update(this.camera,this.props.postprocessing.background,()=>{e()})})}setSize(e,t){e===this._width&&t===this._height||(this._width=e,this._height=t,this.drawPass.setSize(e,t),this.illuminationPass.setSize(e,t),this.multiSamplePass.syncSize())}setProps(e={}){Object.assign(this.props,e),e.cameraHelper&&this.helper.camera.setProps(e.cameraHelper)}async render(e){this.drawPass.setTransparency(this.scene.transparency),Kr.ensureRequired(this.webgl,this.scene,this.props),We.copySnapshot(this._camera.state,this.camera.state),Ce.set(this._camera.viewport,0,0,this._width,this._height),this._camera.update(),this.renderer.setOcclusionTest(null),this._frame=Wt();let t={renderer:this.renderer,camera:this._camera,scene:this.scene,helper:this.helper,frame:this._frame};if(this.illuminationPass.supported&&this.props.illumination.enabled){for(await e.update({message:"Tracing...",current:1,max:this.illuminationPass.getMaxIterations(this.props.illumination)}),this.illuminationPass.restart(!0);this.illuminationPass.shouldRender(this.props.illumination);)k&&this.webgl.timer.mark("ImagePass.render",{captureStats:!0}),this.illuminationPass.render(t,this.props,!1),k&&this.webgl.timer.markEnd("ImagePass.render"),e.shouldUpdate&&await e.update({current:this.illuminationPass.iteration}),await this.webgl.waitForGpuCommandsComplete();this._colorTarget=this.illuminationPass.colorTarget}else k&&this.webgl.timer.mark("ImagePass.render",{captureStats:!0}),xr.isEnabled(this.props.multiSample)?(this.multiSampleHelper.render(t,this.props,!1),this._colorTarget=this.multiSamplePass.colorTarget):(this.drawPass.render(t,this.props,!1),this._colorTarget=this.drawPass.getColorTarget(this.props.postprocessing)),k&&this.webgl.timer.markEnd("ImagePass.render");if(k){let r=this.webgl.timer.resolve();if(r)for(let a of r)Yi([a])}Pe&&console.log(`image pass byte count ${(this.getByteCount()/1024/1024).toFixed(3)} MiB`)}async getImageData(e,t,r,a){this.setSize(t,r),await this.render(e),this.colorTarget.bind();let o=a?.width??t,n=a?.height??r,s=new Uint8Array(o*n*4);a?this.webgl.readPixels(a.x,r-a.y-a.height,o,n,s):this.webgl.readPixels(0,0,o,n,s);let f=ra.create(s,o,n);return ra.flipY(f),ra.divideByAlpha(f),new ImageData(new Uint8ClampedArray(s),o,n)}};var Ja=class{constructor(e,t,r={}){this.webgl=e;let a=this.webgl.getDrawingBufferSize();this.draw=new Yr(e,t,a.width,a.height,r.transparency||"blended"),this.pick=new qr(e,a.width,a.height,r.pickScale||.25),this.multiSample=new xr(e,this.draw),this.illumination=new yr(e,this.draw)}getByteCount(){return this.draw.getByteCount()+this.pick.getByteCount()+this.multiSample.getByteCount()+this.illumination.getByteCount()}setPickScale(e){this.pick.setPickScale(e)}setTransparency(e){this.draw.setTransparency(e)}updateSize(){let e=this.webgl.getDrawingBufferSize(),t=Math.max(e.width,2),r=Math.max(e.height,2);this.draw.setSize(t,r),this.pick.setSize(t,r),this.multiSample.syncSize(),this.illumination.setSize(t,r)}};var Mu={intensity:m.Numeric(15,{min:1,max:100,step:1})},Iu={camera:m.Group({mode:m.Select("perspective",m.arrayToOptions(["perspective","orthographic"]),{label:"Camera"}),helper:m.Group(Hr,{isFlat:!0}),stereo:m.MappedStatic("off",{on:m.Group(gi),off:m.Group({})},{cycle:!0,hideIf:u=>u?.mode!=="perspective"}),fov:m.Numeric(45,{min:10,max:130,step:1},{label:"Field of View"}),manualReset:m.Boolean(!1,{isHidden:!0})},{pivot:"mode"}),cameraFog:m.MappedStatic("on",{on:m.Group(Mu),off:m.Group({})},{cycle:!0,description:"Show fog in the distance"}),cameraClipping:m.Group({radius:m.Numeric(100,{min:0,max:99,step:1},{label:"Clipping",description:"How much of the scene to show."}),far:m.Boolean(!0,{description:"Hide scene in the distance"}),minNear:m.Numeric(1,{min:.1,max:100,step:.1},{description:"Minimal allowed distance of near clipping plane from the camera. Note, may cause performance issues rendering impostors when set too small and cause issues with outline rendering when too close to 0."})},{pivot:"radius"}),viewport:m.MappedStatic("canvas",{canvas:m.Group({}),"static-frame":m.Group({x:m.Numeric(0),y:m.Numeric(0),width:m.Numeric(128),height:m.Numeric(128)}),"relative-frame":m.Group({x:m.Numeric(.33,{min:0,max:1,step:.01}),y:m.Numeric(.33,{min:0,max:1,step:.01}),width:m.Numeric(.5,{min:.01,max:1,step:.01}),height:m.Numeric(.5,{min:.01,max:1,step:.01})})}),cameraResetDurationMs:m.Numeric(250,{min:0,max:1e3,step:1},{description:"The time it takes to reset the camera."}),cameraResetEasing:$i("linear"),cameraResetTrajectory:po("linear"),sceneRadiusFactor:m.Numeric(1,{min:1,max:10,step:.1}),transparentBackground:m.Boolean(!1),checkeredTransparentBackground:m.Boolean(!1),dpoitIterations:m.Numeric(2,{min:1,max:10,step:1}),pickPadding:m.Numeric(3,{min:0,max:10,step:1},{description:"Extra pixels to around target to check in case target is empty."}),userInteractionReleaseMs:m.Numeric(250,{min:0,max:1e3,step:1},{description:"The time before the user is not considered interacting anymore."}),multiSample:m.Group(_a),postprocessing:m.Group(Na),marking:m.Group(ja),illumination:m.Group(Wa),hiZ:m.Group(Ri),renderer:m.Group(Gr),trackball:m.Group(bi),interaction:m.Group(Ci),handle:m.Group(Pa),pointer:m.Group(ta),xr:m.Group(ki,{label:"XR"})},Au=m.getDefaultValues(Iu),zu={trackball:vi,xr:Di};var Vu;(a=>{a.DefaultAttribs={powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1,antialias:!0,preserveDrawingBuffer:!0,preferWebGl1:!1,handleResize:()=>{}},a.Params={resolutionMode:m.Select("auto",m.arrayToOptions(["auto","scaled","native"])),pixelScale:m.Numeric(1,{min:.1,max:2,step:.05}),pickScale:m.Numeric(.25,{min:.1,max:1,step:.05}),transparency:m.Select("wboit",[["blended","Blended"],["wboit","Weighted, Blended"],["dpoit","Depth Peeling"]])},a.DefaultProps=m.getDefaultValues(a.Params);function r(o,n,s={},f={}){let p={...a.DefaultAttribs,...s},l={...a.DefaultProps,...f},{powerPreference:c,failIfMajorPerformanceCaveat:d,antialias:g,preserveDrawingBuffer:x,preferWebGl1:v}=p,S=_i(o,{powerPreference:c,failIfMajorPerformanceCaveat:d,antialias:g,preserveDrawingBuffer:x,alpha:!0,depth:!0,stencil:!0,premultipliedAlpha:!0,preferWebGl1:v});if(S===null)throw new Error("Could not create a WebGL rendering context");let P=()=>{let E=l.pixelScale/(typeof window<"u"&&window?.devicePixelRatio||1);return l.resolutionMode==="auto"?io()?E:l.pixelScale:l.resolutionMode==="native"?l.pixelScale:E},D=()=>{let E=P();I.setPixelScale(E),M.setPixelScale(E)},{pickScale:O,transparency:z}=l,G=P(),I=di.fromElement(o,{pixelScale:G,preventGestures:!0}),M=Qi(S,{pixelScale:G}),K=new Ja(M,n,{pickScale:O,transparency:z});if(Pe){let E=S.getExtension("WEBGL_lose_context");E&&o.addEventListener("mousedown",te=>{M.isContextLost||!te.shiftKey||!te.ctrlKey||!te.altKey||(Pe&&console.log("lose context"),E.loseContext(),setTimeout(()=>{M.isContextLost&&(Pe&&console.log("restore context"),E.restoreContext())},1e3))},!1)}let A=new Me,re=E=>{M.setContextLost(),E.preventDefault(),Pe&&console.log("context lost"),A.next(qt())},W=()=>{M.isContextLost&&(M.handleContextRestored(()=>{K.draw.reset(),K.pick.reset(),K.illumination.reset()}),Pe&&console.log("context restored"))};o.addEventListener("webglcontextlost",re,!1),o.addEventListener("webglcontextrestored",W,!1);let ae=new tr(void 0);return{canvas:o,webgl:M,input:I,passes:K,attribs:p,get props(){return{...l}},contextLost:A,contextRestored:M.contextRestored,assetManager:n,changed:ae,get pixelScale(){return P()},syncPixelScale:D,setProps:E=>{if(!E)return;let te=!1,Q=!1;E.resolutionMode!==void 0&&E.resolutionMode!==l.resolutionMode&&(l.resolutionMode=E.resolutionMode,Q=!0),E.pixelScale!==void 0&&E.pixelScale!==l.pixelScale&&(l.pixelScale=E.pixelScale,Q=!0),Q&&(D(),p.handleResize(),te=!0),E.pickScale!==void 0&&E.pickScale!==l.pickScale&&(l.pickScale=E.pickScale,K.setPickScale(E.pickScale),te=!0),E.transparency!==void 0&&E.transparency!==l.transparency&&(l.transparency=E.transparency,K.setTransparency(E.transparency),te=!0),te&&ae.next(void 0)},dispose:E=>{I.dispose(),o.removeEventListener("webglcontextlost",re,!1),o.removeEventListener("webglcontextrestored",W,!1),M.destroy(E),A.complete(),ae.complete()}}}a.fromCanvas=r})(Vu||={});var Nu=typeof window<"u"?window.requestAnimationFrame:u=>setImmediate(()=>u(Date.now())),qn=typeof window<"u"?window.cancelAnimationFrame:u=>clearImmediate(u);function Wn(u,e){u&&(e.transparentBackground&&e.checkeredTransparentBackground?Object.assign(u.style,{"background-image":"linear-gradient(45deg, lightgrey 25%, transparent 25%, transparent 75%, lightgrey 75%, lightgrey), linear-gradient(45deg, lightgrey 25%, transparent 25%, transparent 75%, lightgrey 75%, lightgrey)","background-size":"60px 60px","background-position":"0 0, 30px 30px"}):Object.assign(u.style,{"background-image":"","background-size":"","background-position":""}))}var Hu;(e=>{function u(t,r={},a={}){let{webgl:o,input:n,passes:s,assetManager:f,canvas:p,contextLost:l}=t,c={...zr(Au),...zr(r)},d={...zr(zu),...zr(a)},g=new Map,x=new Map,v=new tr(0),S=new Me,P=qt(),D=new tr(0),O=new tr(0),z=new tr(0),{contextRestored:G}=o,I=0,M=0,K=128,A=128,re=!1,W=0,ae=Wt();Wn(p,c),ot();let E=Vr.create(o,s.draw.transparency,{dColorMarker:Xr(c.renderer,c.marking),dLightCount:c.renderer.light?.length});function te(){return E.boundingSphere.radius*c.sceneRadiusFactor}let Q=new We({position:b.create(0,0,100),mode:c.camera.mode,fog:c.cameraFog.name==="on"?c.cameraFog.params.intensity:0,clipFar:c.cameraClipping.far,minNear:c.cameraClipping.minNear,fov:Pt(c.camera.fov)},{x:I,y:M,width:K,height:A}),ze=new mt(Q,c.camera.stereo.params),ce=yi.create(n,Q,E,c.trackball,d.trackball),ne=new ka(o,E,c),xe=new Ka(o,s.draw,p,c.hiZ),ue=hi.create(o,c.renderer);ue.setOcclusionTest(xe.isOccluded);let we=new Kr(o,E);we.updateRequired(c);let Xe={pickPadding:c.pickPadding,maxAsyncReadLag:Lo.maxAsyncReadLag},Re=new La(o,ue,E,ne,s.pick,{x:I,y:M,width:K,height:A},Xe),U=new Oa(o,ue,E,ne,Xe),Ke=new Ra(Le,Vt,ut,n,Q,ce,c.interaction),Ne=new _r(s.multiSample);s.draw.postprocessing.background.update(Q,c.postprocessing.background,F=>{F&&je()});let bt=!1,Fe={durationMs:void 0,snapshot:void 0,keyframes:void 0,easing:void 0,trajectory:void 0},ke=!1;function kt(){return{transparency:t.props.transparency,transparentBackground:c.transparentBackground,hiZ:xe.props.enabled,postprocessing:c.postprocessing.enabled,axes:zr(ne.camera.props.axes)}}let Be=kt();function Qe(){Object.assign(Be,kt())}function It(){c.postprocessing.enabled=Be.postprocessing,c.transparentBackground=Be.transparentBackground,t.setProps({transparency:Be.transparency}),xe.setProps({enabled:Be.hiZ}),ne.camera.setProps({axes:Be.axes})}function Tt(){c.postprocessing.enabled=!Ee.props.disablePostprocessing,t.setProps({transparency:"blended"}),xe.setProps({enabled:!1}),ne.camera.setProps({axes:{name:"off",params:{}}}),Ee.session?.environmentBlendMode==="alpha-blend"&&(c.transparentBackground=At)}let Ee=new Ua(o,n,E,Q,ze,ne.pointer,Ke,c.xr,d.xr),rt={request:async()=>{try{await Ee.request()}catch(F){console.error(F),rt.requestFailed.next(F)}},end:()=>Ee.end(),isSupported:new tr(!1),isPresenting:new tr(!1),requestFailed:new Me},At=!1,Kt=[Ee.isSupported.subscribe(F=>rt.isSupported.next(F)),Ee.togglePassthrough.subscribe(()=>{Ee.session?.environmentBlendMode==="alpha-blend"&&(At=!c.transparentBackground)}),Ee.sessionChanged.subscribe(()=>{ke=!0,Ee.session?(Qe(),At=Ee.session?.environmentBlendMode==="alpha-blend",Tt()):It(),ye(),rt.isPresenting.next(!!Ee.session)})],St=!0;function ut(F){let Y=ur,L=cr.Empty;if(F){let oe=ne.camera.getLoci(F);if(oe!==ur)return{loci:oe,repr:L};Y=ne.handle.getLoci(F),g.forEach((Se,h)=>{let w=h.getLoci(F);$r(w)||($r(Y)||console.warn("found another loci, this should not happen"),Y=w,L=h)})}return{loci:Y,repr:L}}let Ie=[];function Zt(F,Y){Ie.push([F,Y])}let Ae=!1;function at(){let F=!1;Ae=!1;for(let[Y,L]of Ie)F=Ze(Y,L)||F;return Ie=[],F&&(E.update(void 0,!0),ne.handle.scene.update(void 0,!0),ne.camera.scene.update(void 0,!0),we.updateRequired(c),we.finalizeRequired(!0),S.next()),F}function Ze(F,Y){let{repr:L,loci:oe}=F,Se=!1;L?Se=L.mark(oe,Y)||Se:g.forEach((H,ie)=>{Se=ie.mark(oe,Y)||Se});let h=ne.handle.mark(oe,Y),w=ne.camera.mark(oe,Y),R=h||w;return Ae=Ae||R,Se||R}function zt(F,Y){if(o.isContextLost||o.xr.session&&!Y)return!1;let L=!1;ke&&(Rr(!1),ke=!1,L=!0);let oe=o.getDrawingBufferSize();if(I>oe.width||I+K<0||M>oe.height||M+A<0)return!1;Y&&(Tt(),c.transparentBackground=At);let Se=at()&&(ue.props.colorMarker||c.marking.enabled),h=!1;ce.update(W);let w=Q.update(),R=Ee.update(Y);if(!R&&Y)return!1;let H=ue.props.enableAnimation&&E.hasAnimation,ie=F||w||L||re||R||H;re=!1,ie&&(ae=Wt(),Pe&&console.log("New frame"));let ge=s.illumination.supported&&c.illumination.enabled&&!Y,se=xr.isEnabled(c.multiSample)&&!Y,pe=(ge?c.multiSample.mode==="on":se)?Er(c.multiSample.sampleLevel):Mr,Ve=(nt,xt)=>{ue.setOcclusionTest(ge?null:xe.isOccluded),k&&o.timer.mark("Canvas3D.render",{captureStats:!0});let $t=s.draw.marking.redraw({renderer:ue,camera:Q,scene:E,helper:ne,frame:ae},c,pe,nt,xt);return k&&o.timer.markEnd("Canvas3D.render"),$t},ht=!Ae&&!ie&&!Xr(ue.props,c.marking)&&!Y&&c.camera.stereo.name!=="on"&&(!ge||s.illumination.iteration>0);if(ht&&Se){let nt=ge||c.multiSample.mode==="temporal";if(Ve(!0,nt?1:pe.length))return!0}if(ge){if((ie||Se)&&(ue.setOcclusionTest(null),s.illumination.restart()),s.illumination.shouldRender(c.illumination)&&(!pt&&E.count>0||s.illumination.iteration===0||c.userInteractionReleaseMs===0)){k&&o.timer.mark("Canvas3D.render",{captureStats:!0});let nt={renderer:ue,camera:Q,scene:E,helper:ne,frame:ae};s.illumination.render(nt,c,!0),k&&o.timer.markEnd("Canvas3D.render"),Re.dirty=Re.dirty||ie,h=!0}}else{let nt=Ne.update(Se||ie,c.multiSample)&&!Y;if(ie||nt||Se){ue.setOcclusionTest(xe.isOccluded);let xt=Q;(c.camera.stereo.name==="on"||R)&&(R||ze.update(),xt=ze),k&&o.timer.mark("Canvas3D.render",{captureStats:!0});let $t={renderer:ue,camera:xt,scene:E,helper:ne,frame:ae};if(se){let tt=c.multiSample.reduceFlicker&&Xr(ue.props,c.marking)&&!w&&Se&&!ce.isAnimating;Ne.render($t,c,!0,tt)}else s.draw.render($t,c,!0);xe.render(Q),k&&o.timer.markEnd("Canvas3D.render"),Re.dirty=Re.dirty||ie,h=!0}}return!h&&!Se&&ht&&s.draw.marking.needsMoreSamples&&(h=Ve(!1,Ha(c.multiSample.sampleLevel))),h}let Rt=!1,lt=!1,Je=!1;function He(F){if(!(lt||Je)){if(!we.finalizeRequired(F?.isSynchronous)){re=!0;return}zt(!!F?.force,F?.xrFrame)&&St&&D.next(qt()-P)}}function je(){re=!0}let it=0;function Tr(F,Y){Je||o.xr.session&&!Y?.xrFrame||(W=F,ue.setTime((W-P)/1e3),_t(Y?.isSynchronous),Y?.updateControls&&ce.update(W),Q.transition.tick(W),xe.tick(),!Y?.manualDraw&&(He({isSynchronous:Y?.isSynchronous,xrFrame:Y?.xrFrame}),!Q.transition.inTransition&&!o.isContextLost&&Ke.tick(W)))}let vt;function ir(F){return vt=F,o.xr.session?o.xr.session.requestAnimationFrame(F):Nu(F)}function Ge(F){vt=void 0,o.xr.session?o.xr.session.cancelAnimationFrame(F):qn(F)}function yt(F,Y){Tr(qt(),{xrFrame:Y}),it=ir(yt)}function ct(F){P=F,ce.start(F),Ke.resetTime(F)}function Yt(){lt=!1;let F=qt();ce.start(F),Ke.resetTime(F),it===0&&yt(0)}function Z(F=!1){lt=F,it!==0&&(Ge(it),it=0)}function ye(){lt=!1,vt&&ir(vt)}function Le(F){if(!o.isContextLost){if(we.finalize(["pick"],!0),"origin"in F)return U.identify(F,Q);{let Y=c.camera.stereo.name==="on"?ze:Q;return Re.identify(F[0],F[1],Y,ae)}}}function Vt(F){if(!o.isContextLost){if(we.finalize(["pick"],!0),"origin"in F)return U.asyncIdentify(F,Q);{let Y=c.camera.stereo.name==="on"?ze:Q;return Re.asyncIdentify(F[0],F[1],Y,ae)}}}function _t(F=!1){let Y=q(F);we.updateRequired(c),Y&&(Qt(),Rt&&(ne.debug.isEnabled&&ne.debug.update(),He({force:!0}),Rt=!1),O.next(qt()))}function Qt(){if(!bt)return;rt.isPresenting.value||Ee.resetScale();let F=E.boundingSphereVisible,{center:Y,radius:L}=F;if(L>0){let oe=Fe.durationMs??c.cameraResetDurationMs,Se=Fe.easing??c.cameraResetEasing,h=Fe.trajectory??c.cameraResetTrajectory,w=ce.props.autoAdjustMinMaxDistance;if(w.name==="on"){let ge=w.params.minDistanceFactor*L+w.params.minDistancePadding,se=Math.max(w.params.maxDistanceFactor*L,w.params.maxDistanceMin);ce.setProps({minDistance:ge,maxDistance:se})}let R=Q.getFocus(Y,L),H=typeof Fe.snapshot=="function"?Fe.snapshot(E,Q):Fe.snapshot,ie=H?{...R,...H}:R;Q.setState({...ie,radiusMax:te()},oe,{keyframes:Fe.keyframes,easing:Se,trajectory:h})}Fe.durationMs=void 0,Fe.snapshot=void 0,Fe.keyframes=void 0,Fe.easing=void 0,Fe.trajectory=void 0,bt=!1}let Ct=et(),y=et();function V(){if(Q.state.radiusMax===0)return!0;if(Q.transition.inTransition||Fe.snapshot)return!1;let F=!0,Y=!0;et.set(y,Q.state.target,Q.state.radius);for(let L of E.renderables){if(!L.state.visible)continue;let oe=L.values.boundingSphere.ref.value;if(!oe.radius)continue;Y=!1;let Se=b.distance(y.center,oe.center);if((Se>y.radius||Se>oe.radius||oe.radius>Q.state.radiusMax)&&!et.includes(Ct,oe))return!0;et.overlaps(y,oe)&&(F=!1)}return F||!Y&&y.radius<=.1}let N=250;function q(F){return E.needsCommit?(et.copy(Ct,E.boundingSphereVisible),xe.clear(),E.commit(F?void 0:N)?(z.next(0),ne.debug.isEnabled&&ne.debug.update(),!c.camera.manualReset&&(v.value===0||V())&&(bt=!0),Ct.radius===0&&(Fe.durationMs=0),!c.camera.manualReset&&E.boundingSphere.radius>0&&Q.setState({radiusMax:te()},0),v.next(g.size),Pe&&_(),!0):(z.next(E.commitQueueSize),!1)):!0}function _(){let F=E.renderables.map(R=>({drawCount:R.values.drawCount.ref.value,instanceCount:R.values.instanceCount.ref.value,materialId:R.materialId,renderItemId:R.id,geometryType:R.values.dGeometryType.ref.value,"byteCount [MiB]":lr(R.getByteCount()/1024/1024,3),radius:lr(R.values.boundingSphere.ref.value.radius,3)}));console.groupCollapsed(`${F.length} RenderItems`),F.length<=64?console.table(F):console.log(F),console.log(JSON.stringify(o.stats,void 0,4));let{texture:Y,cubeTexture:L,attribute:oe,elements:Se,pixelPack:h,renderbuffer:w}=o.resources.getByteCounts();console.log(JSON.stringify({texture:`${(Y/1024/1024).toFixed(3)} MiB`,cubeTexture:`${(L/1024/1024).toFixed(3)} MiB`,attribute:`${(oe/1024/1024).toFixed(3)} MiB`,elements:`${(Se/1024/1024).toFixed(3)} MiB`,pixelPack:`${(h/1024/1024).toFixed(3)} MiB`,renderbuffer:`${(w/1024/1024).toFixed(3)} MiB`},void 0,4)),console.log(JSON.stringify({renderables:`${(E.renderables.reduce((R,H)=>R+H.getByteCount(),0)/1024/1024).toFixed(3)} MiB`,passes:{draw:`${(s.draw.getByteCount()/1024/1024).toFixed(3)} MiB`,illumination:`${(s.illumination.getByteCount()/1024/1024).toFixed(3)} MiB`,pick:`${(s.pick.getByteCount()/1024/1024).toFixed(3)} MiB`,hiZ:`${(xe.getByteCount()/1024/1024).toFixed(3)} MiB`}},void 0,4)),console.log(JSON.stringify({scene:{radius:lr(E.boundingSphere.radius,3),radiusVisible:lr(E.boundingSphereVisible.radius,3),transparency:E.transparency,markerAverage:lr(E.markerAverage,2),emissiveAverage:lr(E.emissiveAverage,2),wiggleAverage:lr(E.wiggleAverage,2),opacityAverage:lr(E.opacityAverage,2),transparencyMin:lr(E.transparencyMin,2),hasOpaque:E.hasOpaque,hasAnimation:E.hasAnimation,counts:{all:E.renderables.length,primitives:E.primitives.renderables.length,volumes:E.volumes.renderables.length}}},void 0,4)),k&&console.log(JSON.stringify(o.timer.formatedStats(),void 0,4)),console.groupEnd()}function $(F){De(F);let Y=g.get(F),L=new Set;F.renderObjects.forEach(oe=>L.add(oe)),Y?ca.areEqual(L,Y)||(L.forEach(oe=>{Y.has(oe)||E.add(oe)}),Y.forEach(oe=>{L.has(oe)||E.remove(oe)})):F.renderObjects.forEach(oe=>E.add(oe)),g.set(F,L),E.update(F.renderObjects,!1),Rt=!0,Pe&&_()}function de(F){Nt(F);let Y=g.get(F);Y&&(Y.forEach(L=>E.remove(L)),g.delete(F),Rt=!0,Pe&&_())}function De(F){x.has(F)||x.set(F,F.updated.subscribe(Y=>{F.state.syncManually||$(F)}))}function Nt(F){let Y=x.get(F);Y&&(Y.unsubscribe(),x.delete(F))}function dt(){let F=E.boundingSphere.radius>0?100-Math.round(Q.transition.target.radius/te()*100):0;return{camera:{mode:Q.state.mode,helper:{...ne.camera.props},stereo:{...c.camera.stereo},fov:Math.round(ei(Q.state.fov)),manualReset:!!c.camera.manualReset},cameraFog:Q.state.fog>0?{name:"on",params:{intensity:Q.state.fog}}:{name:"off",params:{}},cameraClipping:{far:Q.state.clipFar,radius:F,minNear:Q.state.minNear},cameraResetDurationMs:c.cameraResetDurationMs,cameraResetEasing:c.cameraResetEasing,cameraResetTrajectory:c.cameraResetTrajectory,sceneRadiusFactor:c.sceneRadiusFactor,transparentBackground:c.transparentBackground,checkeredTransparentBackground:c.checkeredTransparentBackground,dpoitIterations:c.dpoitIterations,pickPadding:c.pickPadding,userInteractionReleaseMs:c.userInteractionReleaseMs,viewport:c.viewport,postprocessing:{...c.postprocessing},marking:{...c.marking},multiSample:{...c.multiSample},illumination:{...c.illumination},hiZ:{...xe.props},renderer:{...ue.props},trackball:{...ce.props},interaction:{...Ke.props},handle:{...ne.handle.props},pointer:{...ne.pointer.props},xr:{...Ee.props}}}let or=l?.subscribe(()=>{Je=!0,Re.dirty=!0}),Ht=G.subscribe(()=>{Re.reset(),U.reset(),xe.reset(),E.forEach(F=>{F.values.meta?.ref.value.reset&&(F.values.meta.ref.value.reset(),F.update())}),Je=!1,He({force:!0}),He({force:!0})}),Jt=new tr(0);function Rr(F=!0){s.updateSize(),ot(),$e(),F&&je(),Jt.next(+new Date)}Ei(_);let Ir=t.changed?.subscribe(()=>{E.setTransparency(s.draw.transparency),je()}),Ft=!1,pt=!1,ft=[n.drag.subscribe(()=>{Ft=!0}),n.interactionEnd.subscribe(()=>{Ft=!1}),ji(n.drag,n.pinch,n.wheel,n.interactionEnd).subscribe(()=>{S.next()}),S.subscribe(()=>{pt=!0}),S.pipe(Gi(c.userInteractionReleaseMs)).subscribe(()=>{pt=Ft})];if(Pe&&p){let F,Y=L=>{let oe=L&&st.getBoundingSphere(st.normalize(L,"residue"));xe.debugOcclusion(oe)};n.click.subscribe(L=>{if(!L.modifiers.control||L.button!==2)return;let oe=Le(T.create(L.x,L.y));if(!oe){F=void 0,Y(F);return}F=ut(oe.id).loci,Y(F)}),D.subscribe(()=>{setTimeout(()=>{Y(F)},100)})}return{webgl:o,add:$,remove:de,commit:_t,update:(F,Y)=>{if(F){if(!g.has(F))return;E.update(F.renderObjects,!!Y)}else E.update(void 0,!!Y);Rt=!0},clear:()=>{x.forEach(F=>F.unsubscribe()),x.clear(),g.clear(),E.clear(),ne.debug.clear(),je(),v.next(g.size)},syncVisibility:()=>{Q.state.radiusMax===0&&(bt=!0,Fe.durationMs=0),E.syncVisibility()&&ne.debug.isEnabled&&ne.debug.update(),je()},requestDraw:je,tick:Tr,animate:Yt,resetTime:ct,pause:Z,resume:ye,requestAnimationFrame:ir,cancelAnimationFrame:Ge,identify:Le,asyncIdentify:Vt,mark:Zt,getLoci:ut,handleResize:Rr,requestResize:()=>{ke=!0},requestCameraReset:F=>{Object.assign(Fe,F),bt=!0},camera:Q,boundingSphere:E.boundingSphere,boundingSphereVisible:E.boundingSphereVisible,get notifyDidDraw(){return St},set notifyDidDraw(F){St=F},didDraw:D,commited:O,commitQueueSize:z,reprCount:v,resized:Jt,setProps:(F,Y=!1)=>{let L=typeof F=="function"?ua(dt(),F):F;L.sceneRadiusFactor!==void 0&&(c.sceneRadiusFactor=L.sceneRadiusFactor,Q.setState({radiusMax:te()},0));let oe=Object.create(null);L.camera&&L.camera.mode!==void 0&&L.camera.mode!==Q.state.mode&&(oe.mode=L.camera.mode);let Se=Math.round(ei(Q.state.fov));if(L.camera&&L.camera.fov!==void 0&&L.camera.fov!==Se&&(oe.fov=Pt(L.camera.fov)),L.cameraFog!==void 0&&L.cameraFog.params){let h=L.cameraFog.name==="on"?L.cameraFog.params.intensity:0;h!==Q.state.fog&&(oe.fog=h)}if(L.cameraClipping!==void 0&&(L.cameraClipping.far!==void 0&&L.cameraClipping.far!==Q.state.clipFar&&(oe.clipFar=L.cameraClipping.far),L.cameraClipping.minNear!==void 0&&L.cameraClipping.minNear!==Q.state.minNear&&(oe.minNear=L.cameraClipping.minNear),L.cameraClipping.radius!==void 0)){let h=te()/100*(100-L.cameraClipping.radius);h>0&&h!==oe.radius&&(oe.radius=Math.max(h,.01))}Object.keys(oe).length>0&&Q.setState(oe),L.camera?.helper&&ne.camera.setProps(L.camera.helper),L.camera?.manualReset!==void 0&&(c.camera.manualReset=L.camera.manualReset),L.camera?.stereo!==void 0&&(Object.assign(c.camera.stereo,L.camera.stereo),ze.setProps(c.camera.stereo.params)),L.cameraResetDurationMs!==void 0&&(c.cameraResetDurationMs=L.cameraResetDurationMs),L.cameraResetEasing!==void 0&&(c.cameraResetEasing=L.cameraResetEasing),L.cameraResetTrajectory!==void 0&&(c.cameraResetTrajectory=L.cameraResetTrajectory),L.transparentBackground!==void 0&&(c.transparentBackground=L.transparentBackground),L.checkeredTransparentBackground!==void 0&&(c.checkeredTransparentBackground=L.checkeredTransparentBackground),L.dpoitIterations!==void 0&&(c.dpoitIterations=L.dpoitIterations),L.pickPadding!==void 0&&(c.pickPadding=L.pickPadding,Re.setPickPadding(c.pickPadding)),L.userInteractionReleaseMs!==void 0&&(c.userInteractionReleaseMs=L.userInteractionReleaseMs),L.viewport!==void 0&&(c.viewport===L.viewport||c.viewport.name===L.viewport.name&&Oi(c.viewport.params,L.viewport.params)||(c.viewport=L.viewport,ot(),$e())),L.postprocessing?.background&&(Object.assign(c.postprocessing.background,L.postprocessing.background),s.draw.postprocessing.background.update(Q,c.postprocessing.background,h=>{h&&!Y&&je()})),L.postprocessing&&Object.assign(c.postprocessing,L.postprocessing),L.marking&&Object.assign(c.marking,L.marking),L.illumination&&Object.assign(c.illumination,L.illumination),L.multiSample&&Object.assign(c.multiSample,L.multiSample),L.hiZ&&xe.setProps(L.hiZ),(L.renderer||L.marking)&&E.setGlobals({dColorMarker:Xr({colorMarker:L.renderer?.colorMarker??ue.props.colorMarker},c.marking),dLightCount:L.renderer?.light?.length??ue.props.light.length}),L.renderer&&ue.setProps(L.renderer),L.trackball&&ce.setProps(L.trackball),L.interaction&&Ke.setProps(L.interaction),L.handle&&ne.handle.setProps(L.handle),L.pointer&&ne.pointer.setProps(L.pointer),L.xr&&Ee.setProps(L.xr),oe.mode==="orthographic"&&(c.camera.stereo.name="off"),("transparentBackground"in L||"checkeredTransparentBackground"in L||L.renderer&&"backgroundColor"in L.renderer)&&Wn(p,c),we.updateRequired(c),Y||je()},setAttribs:F=>{F.trackball&&ce.setAttribs(F.trackball),F.xr&&Ee.setAttribs(F.xr)},getImagePass:(F={})=>new Qa(o,f,ue,E,Q,ne,F),getRenderObjects(){let F=[];return E.forEach((Y,L)=>F.push(L)),F},get props(){return dt()},get attribs(){return{trackball:ce.attribs,xr:Ee.attribs}},get input(){return n},get stats(){return ue.stats},get interaction(){return Ke.events},debugRegistry:ne.debug,xr:rt,dispose:()=>{or?.unsubscribe(),Ht.unsubscribe(),Ir?.unsubscribe();for(let F of Kt)F.unsubscribe();Kt.length=0;for(let F of ft)F.unsubscribe();ft.length=0,qn(it),vt=void 0,Ie=[],E.clear(),ne.debug.clear(),ce.dispose(),ue.dispose(),Ke.dispose(),xe.dispose(),Re.dispose(),U.dispose(),Ee.dispose(),v.complete(),S.complete(),D.complete(),Jt.complete(),O.complete(),z.complete(),rt.isPresenting.complete(),rt.isSupported.complete(),rt.requestFailed.complete(),Li(_)}};function ot(){let F=I,Y=M,L=K,oe=A,Se=o.getDrawingBufferSize();c.viewport.name==="canvas"?(I=0,M=0,K=Se.width,A=Se.height):c.viewport.name==="static-frame"?(I=c.viewport.params.x*o.pixelRatio,A=c.viewport.params.height*o.pixelRatio,M=Se.height-A-c.viewport.params.y*o.pixelRatio,K=c.viewport.params.width*o.pixelRatio):c.viewport.name==="relative-frame"&&(I=Math.round(c.viewport.params.x*Se.width),A=Math.round(c.viewport.params.height*Se.height),M=Math.round(Se.height-A-c.viewport.params.y*Se.height),K=Math.round(c.viewport.params.width*Se.width)),(F!==I||Y!==M||L!==K||oe!==A)&&(re=!0)}function $e(){Re.setViewport(I,M,K,A),ue.setViewport(I,M,K,A),Ce.set(Q.viewport,I,M,K,A),Ce.set(ce.viewport,I,M,K,A),xe.setViewport(I,M,K,A)}}e.create=u})(Hu||={});export{ga as a,ba as b,Xn as c,Zn as d,ui as e,va as f,ya as g,xa as h,Ta as i,vo as j,cr as k,Ot as l,Ue as m,Yc as n,rs as o,J as p,bi as q,Fa as r,Io as s,en as t,on as u,sn as v,un as w,hn as x,Na as y,lv as z,du as A,mv as B,vv as C,yv as D,Mu as E,Iu as F,Au as G,Vu as H,Hu as I};
