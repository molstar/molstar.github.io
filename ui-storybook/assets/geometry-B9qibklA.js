import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{D as t,T as n,f as r,k as i,s as a,v as o,w as s,x as c,y as l}from"./zip-BqSuRSbJ.js";import{t as u}from"./scheduler-s298L_RT.js";import{n as d,t as f}from"./Subject-C7VdOFad.js";import{$t as p,B as m,Ct as h,Et as g,Ft as _,G as v,Ht as y,It as b,J as x,Jt as S,Lt as C,Mt as w,S as T,Tt as E,Ut as D,Wt as O,Xt as k,Yt as A,_ as j,b as ee,dt as M,en as N,h as te,ht as ne,it as re,jt as P,kt as ie,n as F,on as I,ot as ae,qt as oe,sn as se,t as L,u as ce,ut as le,wt as ue,z as de,zt as fe}from"./param-definition-OHPHmB1q.js";import{n as pe,t as me}from"./names-DbgGgpWr.js";import{d as he,l as ge,m as _e,s as ve}from"./hash-functions-C8By6cSU.js";import{C as R,S as ye,_ as be,b as xe,g as Se,h as Ce,n as we,t as Te}from"./boundary-helper-D7OoGRQ3.js";import{A as Ee,D as z,K as De,O as Oe,X as ke,Z as Ae,et as B,k as V,n as je,nt as Me,q as Ne,r as Pe,t as Fe,tt as H}from"./geometry-BlnjcNLD.js";import{n as Ie,t as Le}from"./material-DWznhfol.js";import{c as Re,n as ze,t as Be}from"./volume-CP7_0eXn.js";function Ve(e,t,n){return{kind:`data-location`,tag:e,data:t,element:n}}var He;function Ue(){return(Ue=e((()=>{He={kind:`null-location`}})))()}function We(e,t){return{kind:`position-location`,position:e?h.clone(e):h(),normal:t?h.clone(t):h()}}function Ge(e){return!!e&&e.kind===`position-location`}function Ke(){return(Ke=e((()=>{B()})))()}function qe(e,t,n,r,i=!1,a=()=>!1,o){if(e%n!==0)throw Error(`incompatible groupCount and stride`);let s={location:He,location2:He,index:0,groupIndex:0,instanceIndex:0,isSecondary:!1},c=s.groupIndex<e,l=!1,u=0,d=0,f=!1,p=!!o;return{get hasNext(){return c},get isNextNewInstance(){return l},groupCount:e,instanceCount:t,count:e*t,stride:n,nonInstanceable:i,hasLocation2:p,move(){return c&&=(s.groupIndex=u,s.instanceIndex=d,s.index=d*e+u,s.location=r(u,f?-1:d),p&&(s.location2=o(u,f?-1:d)),s.isSecondary=a(u,f?-1:d),u+=n,u===e?(++d,l=!0,d<t&&(u=0)):l=!1,u<e),s},reset(){s.location=He,s.location2=He,s.index=0,s.groupIndex=0,s.instanceIndex=0,s.isSecondary=!1,c=s.groupIndex<e,l=!1,u=0,d=0,f=!1},skipInstance(){c&&s.instanceIndex===d&&(++d,u=0,c=d<t)},voidInstances(){f=!0}}}var Je;function Ye(){return(Ye=e((()=>{Ue(),Ke(),Je={get hasNext(){return!1},get isNextNewInstance(){return!1},groupCount:0,instanceCount:0,count:0,stride:0,nonInstanceable:!1,hasLocation2:!1,move(){return{location:He,location2:He,index:0,groupIndex:0,instanceIndex:0,isSecondary:!1}},reset(){},skipInstance(){},voidInstances(){}}})))()}function Xe(){return{cellSize:0,cellCount:0,cellOffsets:new Uint32Array,cellSpheres:new Float32Array,cellTransform:new Float32Array,cellInstance:new Float32Array,batchSize:0,batchCount:0,batchOffsets:new Uint32Array,batchSpheres:new Float32Array,batchCell:new Uint32Array}}function Ze(e,t,n){let r=Qe(e,t),i=$e(r,n),a=new Uint32Array(r.cellOffsets.length),o=new Float32Array(r.cellSpheres.length),s=new Float32Array(r.cellInstance.length),{transform:c}=e,{cellTransform:l}=r,u=c.byteOffset%8==0&&l.byteOffset%8==0,d=u?new Float64Array(c.buffer,c.byteOffset,c.length>>1):void 0,f=u?new Float64Array(l.buffer,l.byteOffset,l.length>>1):void 0,p=0;for(let e=0,t=i.batchCell.length;e<t;++e){let t=i.batchCell[e],n=r.cellOffsets[t],u=r.cellOffsets[t+1]-n;a[e+1]=a[e]+u;for(let n=0;n<4;++n)o[e*4+n]=r.cellSpheres[t*4+n];for(let e=0;e<u;++e){let t=n+e,i=r.cellInstance[t]|0;if(d&&f){let e=i*8,t=p*8;for(let n=0;n<8;++n)f[t+n]=d[e+n]}else{let e=i*16,t=p*16;for(let n=0;n<16;++n)l[t+n]=c[e+n]}s[p]=i,p+=1}}return{cellSize:r.cellSize,cellCount:r.cellCount,cellOffsets:a,cellSpheres:o,cellTransform:r.cellTransform,cellInstance:s,batchSize:i.batchSize,batchCount:i.batchCount,batchOffsets:i.batchOffsets,batchSpheres:i.batchSpheres,batchCell:ee(i.batchCell)}}function Qe(e,t){let{instanceCount:n,instance:r,transform:i,invariantBoundingSphere:a}=e,o=new Float32Array(n),s=new Float32Array(n),c=new Float32Array(n),l=De.ofBounds(0,n),u=z.setEmpty(z()),{center:d,radius:f}=a,p=h.create(f,f,f),m=h();for(let e=0;e<n;++e)et(m,d,i,0,0,e*16),o[e]=m[0],s[e]=m[1],c[e]=m[2],nt(u,m);z.expand(u,u,p);let g={x:o,y:s,z:c,indices:l},_={box:u,sphere:V.fromBox3D(V(),u)},{array:v,offset:y,count:b}=je(g,_,h.create(t,t,t)).buckets,x=y.length,S=new Uint32Array(x+1),C=new Float32Array(x*4),w=new Float32Array(n*16),T=new Float32Array(n),E=z(),D=V(),O=0;for(let e=0;e<x;++e){let t=y[e],n=b[e];S[e]=t;for(let e=t,i=t+n;e<i;++e)T[O]=r[v[e]],O+=1;if(n===1){let n=v[t];C[e*4]=o[n],C[e*4+1]=s[n],C[e*4+2]=c[n],C[e*4+3]=f}else{z.setEmpty(E);for(let e=t,r=t+n;e<r;++e){let t=v[e];h.set(m,o[t],s[t],c[t]),nt(E,m)}z.expand(E,E,p),V.fromBox3D(D,E),V.toArray(D,C,e*4)}}return S[x]=y[x-1]+b[x-1],{cellSize:t,cellCount:x,cellOffsets:S,cellSpheres:C,cellTransform:w,cellInstance:T}}function $e(e,t){let{cellCount:n,cellSpheres:r}=e,i=new Float32Array(n),a=new Float32Array(n),o=new Float32Array(n),s=De.ofBounds(0,n),c=z.setEmpty(z()),l=h(),u=0;for(let e=0;e<n;++e){let t=e*4;tt(l,r,t),i[e]=l[0],a[e]=l[1],o[e]=l[2],nt(c,l),u=Math.max(u,r[t+3])}let d=h.create(u,u,u);z.expand(c,c,d);let f={x:i,y:a,z:o,indices:s},p={box:c,sphere:V.fromBox3D(V(),c)},{array:m,offset:g,count:_}=je(f,p,h.create(t,t,t)).buckets,v=g.length,y=new Uint32Array(v+1),b=new Float32Array(v*4),x=new Uint32Array(n),S=z(),C=V(),w=0;for(let e=0;e<v;++e){let t=g[e],n=_[e];y[e]=t;for(let e=t,r=t+n;e<r;++e)x[w]=m[e],w+=1;if(n===1){let n=m[t];b[e*4]=r[n*4],b[e*4+1]=r[n*4+1],b[e*4+2]=r[n*4+2],b[e*4+3]=r[n*4+3]}else{z.setEmpty(S),u=0;for(let e=t,i=t+n;e<i;++e){let t=m[e];l[0]=r[t*4],l[1]=r[t*4+1],l[2]=r[t*4+2],nt(S,l),u=Math.max(u,r[t*4+3])}h.set(d,u,u,u),z.expand(S,S,d),V.fromBox3D(C,S),V.toArray(C,b,e*4)}}return y[v]=g[v-1]+_[v-1],{batchSize:t,batchCount:v,batchOffsets:y,batchSpheres:b,batchCell:x}}var et,tt,nt;function rt(){return(rt=e((()=>{Ne(),T(),Oe(),ue(),Pe(),Ee(),et=h.transformMat4Offset,tt=h.fromArray,nt=z.add})))()}function it(e,t){for(let n=0;n<t;n++)if(O.fromMat4(ct,E.fromArray(lt,e,n*16)),O.determinant(ct)<0)return!0;return!1}function at(e,t,n,r,i,a){let o=it(e,t);if(a){I.update(a.matrix,a.matrix.ref.value);let n=a.transform.ref.value.length>=t*16?a.transform.ref.value:new Float32Array(t*16);n.set(e),I.update(a.transform,n),I.updateIfChanged(a.uInstanceCount,t),I.updateIfChanged(a.instanceCount,t);let r=a.aTransform.ref.value.length>=t*16?a.aTransform.ref.value:new Float32Array(t*16);I.update(a.aTransform,r);let i=a.extraTransform.ref.value.length>=t*16?a.extraTransform.ref.value:new Float32Array(t*16);I.update(a.extraTransform,i),I.updateIfChanged(a.hasExtraTransform,!1);let s=a.aInstance.ref.value.length>=t?a.aInstance.ref.value:new Float32Array(t);I.update(a.aInstance,ee(s,t)),I.update(a.hasReflection,o)}else a={aTransform:I.create(new Float32Array(t*16)),matrix:I.create(E.identity()),transform:I.create(new Float32Array(e)),extraTransform:I.create(new Float32Array(t*16)),hasExtraTransform:I.create(!1),uInstanceCount:I.create(t),instanceCount:I.create(t),aInstance:I.create(ee(new Float32Array(t))),hasReflection:I.create(o),instanceGrid:I.create(Xe())};return st(a,n,r,i),a}function ot(e){return at(new Float32Array(ut),1,void 0,0,0,e)}function st(e,t,n,r){let i=e.aTransform.ref.value,a=e.aInstance.ref.value,o=e.instanceCount.ref.value,s=e.matrix.ref.value,c=e.transform.ref.value,l=e.extraTransform.ref.value,u=e.hasExtraTransform.ref.value,d=E.isIdentity(s);if(!u&&d)for(let e=0,t=o*16;e<t;e++)i[e]=c[e];else if(!u&&!d)for(let e=0;e<o;e++){let t=e*16;E.mulOffset(i,s,c,t,0,t)}else if(u&&d)for(let e=0;e<o;e++){let t=e*16;E.mulOffset(i,l,c,t,t,t)}else for(let e=0;e<o;e++){let t=e*16;E.mulOffset(i,l,c,t,t,t),E.mulOffset(i,s,i,t,0,t)}for(let e=0;e<o;e++)a[e]=e;if(t&&o>0){let s=Ze({instanceCount:o,instance:a,transform:i,invariantBoundingSphere:t},n,r);I.update(e.instanceGrid,s),I.update(e.aInstance,s.cellInstance),I.update(e.aTransform,s.cellTransform)}else I.update(e.aInstance,a),I.update(e.aTransform,i)}var ct,lt,ut;function dt(){return(dt=e((()=>{N(),B(),T(),rt(),ct=O(),lt=E(),ut=new Float32Array(16),E.toArray(E.identity(),ut,0)})))()}var ft;function pt(){return(pt=e((()=>{ft={Atom:`Atom Property`,Chain:`Chain Property`,Residue:`Residue Property`,Symmetry:`Symmetry`,Validation:`Validation`,Particle:`Particle`,Misc:`Miscellaneous`}})))()}function mt(e){return vt}function ht(e,t){let n=p(t.value,gt);return n=v.saturate(n,t.saturation),n=v.lighten(n,t.lightness),{factory:ht,granularity:`uniform`,color:()=>n,props:t,description:_t,legend:xe([[`uniform`,n]])}}var gt,_t,vt,yt;function bt(){return(bt=e((()=>{be(),F(),N(),pt(),gt=v(13421772),_t=`Gives everything the same, uniform color.`,vt={value:L.Color(gt),saturation:L.Numeric(0,{min:-6,max:6,step:.1}),lightness:L.Numeric(0,{min:-6,max:6,step:.1})},yt={name:`uniform`,label:`Uniform`,category:ft.Misc,factory:ht,getParams:mt,defaultValues:L.getDefaultValues(vt),isApplicable:e=>!0}})))()}function xt(e){return wt}function St(e,t){let n=t.value;return{factory:St,granularity:`uniform`,size:()=>n,props:t,description:Ct}}var Ct,wt,Tt;function Et(){return(Et=e((()=>{F(),Ct=`Gives everything the same, uniform size.`,wt={value:L.Numeric(1,{min:0,max:20,step:.1})},Tt={name:`uniform`,label:`Uniform`,category:``,factory:St,getParams:xt,defaultValues:L.getDefaultValues(wt),isApplicable:e=>!0}})))()}function U(){return U.create(h.create(1,0,0),0)}function Dt(){return(Dt=e((()=>{ue(),(function(e){function t(e,t){return{normal:e,constant:t}}e.create=t;function n(e,t){return h.copy(e.normal,t.normal),e.constant=t.constant,e}e.copy=n;function r(e){return n(U(),e)}e.clone=r;function i(e,t){let n=1/h.magnitude(t.normal);return h.scale(e.normal,t.normal,n),e.constant=t.constant*n,e}e.normalize=i;function a(e,t){return h.negate(e.normal,t.normal),e.constant=-t.constant,e}e.negate=a;function o(e,t,n){return h.toArray(e.normal,t,n),t[n+3]=e.constant,t}e.toArray=o;function s(e,t,n){return h.fromArray(e.normal,t,n),e.constant=t[n+3],e}e.fromArray=s;function c(e,t,n){return h.copy(e.normal,t),e.constant=-h.dot(e.normal,n),e}e.fromNormalAndCoplanarPoint=c;function l(e,t,n,r){return c(e,h.triangleNormal(h(),t,n,r),t),e}e.fromCoplanarPoints=l;let u=h();function d(e,t,n,r,i){h.set(u,t,n,r);let a=1/h.magnitude(u);return h.scale(e.normal,u,a),e.constant=i*a,e}e.setUnnormalized=d;function f(e,t){return h.dot(e.normal,t)+e.constant}e.distanceToPoint=f;function p(e,t){return f(e,t.center)-t.radius}e.distanceToSphere3D=p;function m(e,t,n){return h.scaleAndAdd(e,n,t.normal,-f(t,n))}e.projectPoint=m;function g(e,t,n){let r=h.dot(t.normal,n.direction);if(r===0)return!1;let i=-(h.dot(t.normal,n.origin)+t.constant)/r;return i<0?!1:(h.scaleAndAdd(e,n.origin,n.direction,i),!0)}e.intersectRay3D=g})(U||={})})))()}function Ot(){}function kt(){return(kt=e((()=>{S(),g(),b(),ue(),Me(),Dt(),Ee(),P(),F(),re(),(function(e){let t=e.Type={none:0,plane:1,sphere:2,cube:3,cylinder:4,infiniteCone:5};e.Params={variant:L.Select(`pixel`,L.arrayToOptions([`instance`,`pixel`])),objects:L.ObjectList({type:L.Select(`plane`,L.objectToOptions(t,e=>ae(e))),invert:L.Boolean(!1),position:L.Vec3(h()),rotation:L.Group({axis:L.Vec3(h.create(1,0,0)),angle:L.Numeric(0,{min:-180,max:180,step:1},{description:`Angle in Degrees`})},{isExpanded:!0}),scale:L.Vec3(h.create(1,1,1)),transform:L.Mat4(E.identity())},e=>ae(e.type))};function n(e){return{count:0,type:Array(e).fill(1),invert:Array(e).fill(!1),position:Array(e*3).fill(0),rotation:Array(e*4).fill(0),scale:Array(e*3).fill(1),transform:Array(e*16).fill(0)}}let r=_(),i=_(),a=h(),o=h(),s=E(),c=E();function l(e,i){let o=e.objects.length,{type:s,invert:c,position:l,rotation:u,scale:d,transform:f}=i?.objects||n(o);for(let n=0;n<o;++n){let i=e.objects[n];s[n]=t[i.type],c[n]=i.invert,h.toArray(i.position,l,n*3),h.normalize(a,i.rotation.axis),_.toArray(_.setAxisAngle(r,a,ie(i.rotation.angle)),u,n*4),h.toArray(i.scale,d,n*3),E.toArray(i.transform,f,n*16)}return{variant:e.variant,objects:{count:o,type:s,invert:c,position:l,rotation:u,scale:d,transform:f}}}e.getClip=l;let u=H(),d=U();function f(e,t,n){let{invert:i,position:c,rotation:l,transform:d}=t;return h.transformQuat(a,h.unitY,_.fromArray(r,l,n*4)),H.set(u,a[0],a[1],a[2],-h.dot(a,h.fromArray(o,c,n*3))),i[n]&&H.scale(u,u,-1),E.fromArray(s,d,n*16),H.transformMat4(u,u,E.transpose(s,s)),U.setUnnormalized(e,u[0],u[1],u[2],u[3])}e.getPlane=f;function p(e,n,r){let{type:i,position:c,scale:l,transform:u}=e,p=i[n];if(p===t.plane)return Math.abs(U.distanceToPoint(f(d,e,n),r.center))<=r.radius;if(p!==t.sphere&&p!==t.cube&&p!==t.cylinder)return!0;E.fromArray(s,u,n*16),h.transformMat4(a,r.center,s);let m=r.radius*E.getMaxScaleOnAxis(s),g=h.distance(a,h.fromArray(o,c,n*3)),_=l[n*3],v=l[n*3+1],y=l[n*3+2],b=(p===t.cylinder?Math.min(_,v):Math.min(_,v,y))/2;return g<=m+(p===t.sphere?Math.max(_,v,y):p===t.cube?Math.hypot(_,v,y):Math.hypot(_,v))/2&&g+m>=b}e.canIntersectSphere=p;function m(e,t){if(e.variant!==t.variant||e.objects.count!==t.objects.count)return!1;let n=e.objects,l=t.objects;for(let e=0,t=n.count;e<t;++e)if(n.invert[e]!==l.invert[e]||n.type[e]!==l.type[e]||(h.fromArray(a,n.position,e*3),h.fromArray(o,l.position,e*3),!h.equals(a,o))||(h.fromArray(a,n.scale,e*3),h.fromArray(o,l.scale,e*3),!h.equals(a,o))||(_.fromArray(r,n.rotation,e*4),_.fromArray(i,l.rotation,e*4),!_.equals(r,i))||(E.fromArray(s,n.transform,e*16),E.fromArray(c,l.transform,e*16),!E.areEqual(s,c,1e-6)))return!1;return!0}e.areEqual=m})(Ot||={})})))()}function At(e){return!!e.smoothColors}function jt(e,t,n){if((e.name===`on`||e.name===`auto`&&t)&&n&&n<3){let t=3;return e.name===`on`?(n*=e.params.resolutionFactor,t=e.params.sampleStride):(n*=2-y(0,1.1,n),n=Math.max(.5,n),n>1.2&&(t=2)),{resolution:n,stride:t}}}function Mt(e,t,n){return e===`auto`?t*n>zt:e}function Nt(e,t){return e===`auto`?t>100:e}var Pt,Ft,It,Lt,Rt,zt,Bt,W;function Vt(){return(Vt=e((()=>{N(),Ye(),F(),dt(),pe(),Ue(),bt(),Et(),Ie(),kt(),ue(),Me(),Pt={custom:{},auto:{},highest:{},higher:{},high:{},medium:{},low:{},lower:{},lowest:{}},Ft=Object.keys(Pt),It=L.arrayToOptions(Ft),Lt={smoothColors:L.MappedStatic(`auto`,{auto:L.Group({}),on:L.Group({resolutionFactor:L.Numeric(2,{min:.5,max:6,step:.1}),sampleStride:L.Numeric(3,{min:1,max:12,step:1})}),off:L.Group({})})},Rt=[[!0,`On`],[!1,`Off`],[`auto`,`Auto`]],zt=5e7,Bt=[[!0,`On`],[!1,`Off`],[`auto`,`Auto`]],(function(e){e.MaterialCategory={category:`Material`},e.ShadingCategory={category:`Shading`};let t=e.CullingLodCategory={category:`Culling & LOD`};e.CustomQualityParamInfo={category:`Custom Quality`,hideIf:e=>e.quality!==void 0&&e.quality!==`custom`},e.Params={alpha:L.Numeric(1,{min:0,max:1,step:.01},{label:`Opacity`,isEssential:!0,description:`How opaque/transparent the representation is rendered.`}),quality:L.Select(`auto`,It,{isEssential:!0,description:`Visual/rendering quality of the representation.`}),material:Le.getParam(),clip:L.Group(Ot.Params),emissive:L.Numeric(0,{min:0,max:1,step:.01}),density:L.Numeric(.2,{min:0,max:1,step:.01},{description:`Density value to estimate object thickness.`}),instanceGranularity:L.Select(`auto`,Rt,{description:"Use instance granularity for marker, transparency, clipping, overpaint, substance data to save memory. When set to `auto`, granularity is enabled if `groupCount * instanceCount` exceeds `AutoInstanceGranularityThreshold`."}),renderMerged:L.Select(`auto`,Bt,{description:"Render all units of the representation through a single shared render item per geometry kind to reduce draw calls. When set to `auto`, enabled if the number of mergeable units exceeds `AutoRenderMergedThreshold`. Supported for spheres, mesh, cylinders, lines, and points geometry."}),lod:L.Vec3(h(),void 0,{...t,description:`Level of detail.`,fieldLabels:{x:`Min Distance`,y:`Max Distance`,z:`Overlap (Shader)`}}),cellSize:L.Numeric(200,{min:0,max:5e3,step:100},{...t,description:`Instance grid cell size.`}),batchSize:L.Numeric(2e3,{min:0,max:5e4,step:500},{...t,description:`Instance grid batch size.`})};function n(e=me.grey,t=1,n){n||=ot();let r=qe(1,n.instanceCount.ref.value,1,()=>He,!1,()=>!1),i={color:ht({},{value:e,lightness:0,saturation:0}),size:St({},{value:t})};return{transform:n,locationIterator:r,theme:i}}e.createSimple=n;function r(e,t){let n=Ot.getClip(e.clip);return{alpha:I.create(e.alpha),uAlpha:I.create(e.alpha),uVertexCount:I.create(t.vertexCount),uGroupCount:I.create(t.groupCount),drawCount:I.create(t.drawCount),uMetalness:I.create(e.material.metalness),uRoughness:I.create(e.material.roughness),uBumpiness:I.create(e.material.bumpiness),uEmissive:I.create(e.emissive),uDensity:I.create(e.density),dClipObjectCount:I.create(n.objects.count),dClipVariant:I.create(n.variant),uClipObjectType:I.create(n.objects.type),uClipObjectInvert:I.create(n.objects.invert),uClipObjectPosition:I.create(n.objects.position),uClipObjectRotation:I.create(n.objects.rotation),uClipObjectScale:I.create(n.objects.scale),uClipObjectTransform:I.create(n.objects.transform),instanceGranularity:I.create(Mt(e.instanceGranularity,t.groupCount,t.instanceCount)),uLod:I.create(H.create(e.lod[0],e.lod[1],e.lod[2],0))}}e.createValues=r;function i(e,t){I.updateIfChanged(e.alpha,t.alpha),I.updateIfChanged(e.uMetalness,t.material.metalness),I.updateIfChanged(e.uRoughness,t.material.roughness),I.updateIfChanged(e.uBumpiness,t.material.bumpiness),I.updateIfChanged(e.uEmissive,t.emissive),I.updateIfChanged(e.uDensity,t.density);let n=Ot.getClip(t.clip);I.updateIfChanged(e.dClipObjectCount,n.objects.count),I.updateIfChanged(e.dClipVariant,n.variant),I.update(e.uClipObjectType,n.objects.type),I.update(e.uClipObjectInvert,n.objects.invert),I.update(e.uClipObjectPosition,n.objects.position),I.update(e.uClipObjectRotation,n.objects.rotation),I.update(e.uClipObjectScale,n.objects.scale),I.update(e.uClipObjectTransform,n.objects.transform),I.updateIfChanged(e.instanceGranularity,Mt(t.instanceGranularity,e.uGroupCount.ref.value,e.instanceCount.ref.value)),I.update(e.uLod,H.set(e.uLod.ref.value,t.lod[0],t.lod[1],t.lod[2],0))}e.updateValues=i;function a(e={}){let t=e.alpha===void 0||e.alpha===1;return{disposed:!1,visible:!0,alphaFactor:1,pickable:!0,colorOnly:!1,opaque:t,writeDepth:t}}e.createRenderableState=a;function o(e,t){e.opaque=t.alpha*e.alphaFactor>=1,e.writeDepth=e.opaque}e.updateRenderableState=o})(W||={})})))()}function Ht(e,t){e=Math.max(e,2);let n=Math.ceil(Math.sqrt(e));n+=(t-n%t)%t;let r=n>0?Math.ceil(e/n):0;return{width:n,height:r,length:n*r*t}}function G(e,t,n,r){let{length:i,width:a,height:o}=Ht(e,t);return r=r&&r.length>=i?r:new n(i),{array:r,width:a,height:o}}function Ut(e){return e>1e5?Yt:Xt}function Wt(e,t,n){let r=n*3,i=Ut(t);i.reset();for(let n=0,a=t*3;n<a;n+=r)Kt(Jt,e,n),i.includePosition(Jt);i.finishedIncludeStep();for(let n=0,a=t*3;n<a;n+=r)Kt(Jt,e,n),i.radiusPosition(Jt);let a=i.getSphere();if(t<=14){let n=[];for(let i=0,a=t*3;i<a;i+=r)n.push(Kt(h(),e,i));V.setExtrema(a,n)}return a}function Gt(e,t,n,r){if(n===1){E.fromArray(Zt,t,r);let n=V.clone(e);return E.isIdentity(Zt)?n:V.transform(n,n,Zt)}let i=Ut(n);i.reset();let{center:a,radius:o,extrema:s}=e;if(s&&n<=14){for(let e=0,a=n;e<a;++e)for(let n of s)qt(Jt,n,t,0,0,e*16+r),i.includePosition(Jt);i.finishedIncludeStep();for(let e=0,a=n;e<a;++e)for(let n of s)qt(Jt,n,t,0,0,e*16+r),i.radiusPosition(Jt)}else{for(let e=0,s=n;e<s;++e)qt(Jt,a,t,0,0,e*16+r),i.includePositionRadius(Jt,o);i.finishedIncludeStep();for(let e=0,s=n;e<s;++e)qt(Jt,a,t,0,0,e*16+r),i.radiusPositionRadius(Jt,o)}return i.getSphere()}var Kt,qt,Jt,Yt,Xt,Zt;function K(){return(K=e((()=>{Fe(),B(),we(),Kt=h.fromArray,qt=h.transformMat4Offset,Jt=h(),Yt=new Te(`14`),Xt=new Te(`98`),Zt=E()})))()}function Qt(e,t){switch(t){case e.FRAMEBUFFER_COMPLETE:return`complete`;case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return`incomplete attachment`;case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return`incomplete missing attachment`;case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return`incomplete dimensions`;case e.FRAMEBUFFER_UNSUPPORTED:return`unsupported`}if(q(e))switch(t){case e.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE:return`incomplete multisample`;case e.RENDERBUFFER_SAMPLES:return`renderbuffer samples`}return`unknown error`}function $t(e,t){let n=e.checkFramebufferStatus(e.FRAMEBUFFER);if(n!==e.FRAMEBUFFER_COMPLETE){let r=Qt(e,n);throw Error(`Framebuffer status: ${r}${t?` (${t})`:``}`)}}function en(e){let t=e.createFramebuffer();if(t===null)throw Error(`Could not create WebGL framebuffer`);return t}function tn(e){let t=en(e),n=!1;return{id:rn(),bind:()=>e.bindFramebuffer(e.FRAMEBUFFER,t),reset:()=>{t=en(e)},destroy:()=>{n||=(e.deleteFramebuffer(t),!0)}}}function nn(){return{id:rn(),bind:()=>{},reset:()=>{},destroy:()=>{}}}var rn;function an(){return(an=e((()=>{cs(),rn=r()})))()}function on(e){let t=wo(e);if(t===null)throw Error(`Could not find support for "instanced_arrays"`);let n=Eo(e);if(n===null)throw Error(`Could not find support for "element_index_uint"`);let r=To(e);if(r===null)throw Error(`Could not find support for "standard_derivatives"`);let i=Oo(e);l&&i===null&&console.log(`Could not find support for "texture_float"`);let a=ko(e);l&&a===null&&console.log(`Could not find support for "texture_float_linear"`);let o=Ao(e);l&&o===null&&console.log(`Could not find support for "texture_half_float"`);let s=jo(e);l&&s===null&&console.log(`Could not find support for "texture_half_float_linear"`);let c=zo(e);l&&c===null&&console.log(`Could not find support for "depth_texture"`);let u=Mo(e);l&&u===null&&console.log(`Could not find support for "blend_minmax"`);let d=Do(e);l&&d===null&&console.log(`Could not find support for "vertex_array_object"`);let f=No(e);l&&f===null&&console.log(`Could not find support for "frag_depth"`);let p=Po(e);l&&p===null&&console.log(`Could not find support for "color_buffer_float"`);let m=Fo(e);l&&m===null&&console.log(`Could not find support for "color_buffer_half_float"`);let h=Io(e);l&&h===null&&console.log(`Could not find support for "draw_buffers"`);let g=Lo(e);l&&g===null&&console.log(`Could not find support for "draw_buffers_indexed"`);let _=Ro(e);l&&_===null&&console.log(`Could not find support for "shader_texture_lod"`);let v=Bo(e);l&&v===null&&console.log(`Could not find support for "sRGB"`);let y=Vo(e);l&&y===null&&console.log(`Could not find support for "disjoint_timer_query"`);let b=Ho(e);l&&b===null&&console.log(`Could not find support for "multi_draw"`);let x=Uo(e);l&&x===null&&console.log(`Could not find support for "draw_instanced_base_vertex_base_instance"`);let S=Wo(e);l&&S===null&&console.log(`Could not find support for "multi_draw_instanced_base_vertex_base_instance"`);let C=Go(e);l&&C===null&&console.log(`Could not find support for "parallel_shader_compile"`);let w=Ko(e);l&&w===null&&console.log(`Could not find support for "fbo_render_mipmap"`);let T=qo(e);l&&T===null&&console.log(`Could not find support for "provoking_vertex"`);let E=Jo(e);l&&E===null&&console.log(`Could not find support for "clip_cull_distance"`);let D=Yo(e);l&&D===null&&console.log(`Could not find support for "conservative_depth"`);let O=Xo(e);l&&O===null&&console.log(`Could not find support for "stencil_texturing"`);let k=Zo(e);l&&k===null&&console.log(`Could not find support for "clip_control"`);let A=Qo(e);l&&A===null&&console.log(`Could not find support for "render_snorm"`);let j=$o(e);l&&j===null&&console.log(`Could not find support for "render_shared_exponent"`);let ee=es(e);l&&ee===null&&console.log(`Could not find support for "texture_norm16"`);let M=ts(e);l&&M===null&&console.log(`Could not find support for "depth_clamp"`);let N=ns(e);return l&&N===null&&console.log(`Could not find support for "multiview2"`),{instancedArrays:t,standardDerivatives:r,elementIndexUint:n,textureFloat:i,textureFloatLinear:a,textureHalfFloat:o,textureHalfFloatLinear:s,depthTexture:c,blendMinMax:u,vertexArrayObject:d,fragDepth:f,colorBufferFloat:p,colorBufferHalfFloat:m,drawBuffers:h,drawBuffersIndexed:g,shaderTextureLod:_,sRGB:v,disjointTimerQuery:y,multiDraw:b,drawInstancedBaseVertexBaseInstance:x,multiDrawInstancedBaseVertexBaseInstance:S,parallelShaderCompile:C,fboRenderMipmap:w,provokingVertex:T,clipCullDistance:E,conservativeDepth:D,stencilTexturing:O,clipControl:k,renderSnorm:A,renderSharedExponent:j,textureNorm16:ee,depthClamp:M,multiview2:N,noNonInstancedActiveAttribs:rs(e)}}function sn(e,t){let n=on(e);ne(t,(e,r)=>{r===`noNonInstancedActiveAttribs`?t.noNonInstancedActiveAttribs=n.noNonInstancedActiveAttribs:e!==null&&(n[r]===null?t[r]=null:Object.assign(e,n[r]))})}function cn(){return(cn=e((()=>{cs(),o(),M()})))()}function ln(e,t){let n={},r=e.getParameter(e.FRONT_FACE),i=e.getParameter(e.CULL_FACE_MODE),a=e.getParameter(e.DEPTH_WRITEMASK),o=e.getParameter(e.DEPTH_CLEAR_VALUE),s=e.getParameter(e.DEPTH_FUNC),c=e.getParameter(e.COLOR_WRITEMASK),l=e.getParameter(e.COLOR_CLEAR_VALUE),u=e.getParameter(e.BLEND_SRC_RGB),d=e.getParameter(e.BLEND_DST_RGB),f=e.getParameter(e.BLEND_SRC_ALPHA),p=e.getParameter(e.BLEND_DST_ALPHA),m=e.getParameter(e.BLEND_COLOR),h=e.getParameter(e.BLEND_EQUATION_RGB),g=e.getParameter(e.BLEND_EQUATION_ALPHA),_=e.getParameter(e.STENCIL_FUNC),v=e.getParameter(e.STENCIL_VALUE_MASK),y=e.getParameter(e.STENCIL_REF),b=e.getParameter(e.STENCIL_BACK_FUNC),x=e.getParameter(e.STENCIL_BACK_VALUE_MASK),S=e.getParameter(e.STENCIL_BACK_REF),C=e.getParameter(e.STENCIL_WRITEMASK),w=e.getParameter(e.STENCIL_BACK_WRITEMASK),T=e.getParameter(e.STENCIL_FAIL),E=e.getParameter(e.STENCIL_PASS_DEPTH_PASS),D=e.getParameter(e.STENCIL_PASS_DEPTH_FAIL),O=e.getParameter(e.STENCIL_BACK_FAIL),k=e.getParameter(e.STENCIL_BACK_PASS_DEPTH_PASS),A=e.getParameter(e.STENCIL_BACK_PASS_DEPTH_FAIL),j=e.getParameter(e.STENCIL_CLEAR_VALUE),ee=e.getParameter(e.MAX_VERTEX_ATTRIBS),M=[],N=e.getParameter(e.VIEWPORT),te=e.getParameter(e.SCISSOR_BOX),ne=t.clipControl?e.getParameter(t.clipControl.CLIP_ORIGIN):-1,re=t.clipControl?e.getParameter(t.clipControl.CLIP_DEPTH_MODE):-1,P=()=>{for(let e=0;e<ee;++e)M[e]=0};return P(),{currentProgramId:-1,currentMaterialId:-1,currentRenderItemId:-1,enable:t=>{n[t]!==!0&&(e.enable(t),n[t]=!0)},disable:t=>{n[t]!==!1&&(e.disable(t),n[t]=!1)},frontFace:t=>{t!==r&&(e.frontFace(t),r=t)},cullFace:t=>{t!==i&&(e.cullFace(t),i=t)},depthMask:t=>{t!==a&&(e.depthMask(t),a=t)},clearDepth:t=>{t!==o&&(e.clearDepth(t),o=t)},depthFunc:t=>{t!==s&&(e.depthFunc(t),s=t)},colorMask:(t,n,r,i)=>{(t!==c[0]||n!==c[1]||r!==c[2]||i!==c[3])&&(e.colorMask(t,n,r,i),c[0]=t,c[1]=n,c[2]=r,c[3]=i)},clearColor:(t,n,r,i)=>{(t!==l[0]||n!==l[1]||r!==l[2]||i!==l[3])&&(e.clearColor(t,n,r,i),l[0]=t,l[1]=n,l[2]=r,l[3]=i)},blendFunc:(t,n)=>{(t!==u||n!==d||t!==f||n!==p)&&(e.blendFunc(t,n),u=t,d=n,f=t,p=n)},blendFuncSeparate:(t,n,r,i)=>{(t!==u||n!==d||r!==f||i!==p)&&(e.blendFuncSeparate(t,n,r,i),u=t,d=n,f=r,p=i)},blendEquation:t=>{(t!==h||t!==g)&&(e.blendEquation(t),h=t,g=t)},blendEquationSeparate:(t,n)=>{(t!==h||n!==g)&&(e.blendEquationSeparate(t,n),h=t,g=n)},blendColor:(t,n,r,i)=>{(t!==m[0]||n!==m[1]||r!==m[2]||i!==m[3])&&(e.blendColor(t,n,r,i),m[0]=t,m[1]=n,m[2]=r,m[3]=i)},stencilFunc:(t,n,r)=>{(t!==_||n!==y||r!==v||t!==b||n!==S||r!==x)&&(e.stencilFunc(t,n,r),_=t,y=n,v=r,b=t,S=n,x=r)},stencilFuncSeparate:(t,n,r,i)=>{t===e.FRONT?(n!==_||r!==y||i!==v)&&(e.stencilFuncSeparate(t,n,r,i),_=n,y=r,v=i):t===e.BACK?(n!==b||r!==S||i!==x)&&(e.stencilFuncSeparate(t,n,r,i),b=n,S=r,x=i):t===e.FRONT_AND_BACK&&(n!==_||r!==y||i!==v||n!==b||r!==S||i!==x)&&(e.stencilFuncSeparate(t,n,r,i),_=n,y=r,v=i,b=n,S=r,x=i)},stencilMask:t=>{(t!==C||t!==w)&&(e.stencilMask(t),C=t,w=t)},stencilMaskSeparate:(t,n)=>{t===e.FRONT?n!==C&&(e.stencilMaskSeparate(t,n),C=n):t===e.BACK?n!==w&&(e.stencilMaskSeparate(t,n),w=n):t===e.FRONT_AND_BACK&&(n!==C||n!==w)&&(e.stencilMaskSeparate(t,n),C=n,w=n)},stencilOp:(t,n,r)=>{(t!==T||n!==D||r!==E||t!==O||n!==A||r!==k)&&(e.stencilOp(t,n,r),T=t,D=n,E=r,O=t,A=n,k=r)},stencilOpSeparate:(t,n,r,i)=>{t===e.FRONT?(n!==T||r!==D||i!==E)&&(e.stencilOpSeparate(t,n,r,i),T=n,D=r,E=i):t===e.BACK?(n!==O||r!==A||i!==k)&&(e.stencilOpSeparate(t,n,r,i),O=n,A=r,k=i):t===e.FRONT_AND_BACK&&(n!==T||r!==D||i!==E||n!==O||r!==A||i!==k)&&(e.stencilOpSeparate(t,n,r,i),T=n,D=r,E=i,O=n,A=r,k=i)},clearStencil:t=>{t!==j&&(e.clearStencil(t),j=t)},enableVertexAttrib:t=>{e.enableVertexAttribArray(t),M[t]=1},clearVertexAttribsState:P,disableUnusedVertexAttribs:()=>{for(let t=0;t<ee;++t)M[t]===0&&e.disableVertexAttribArray(t)},viewport:(t,n,r,i)=>{(t!==N[0]||n!==N[1]||r!==N[2]||i!==N[3])&&(e.viewport(t,n,r,i),N[0]=t,N[1]=n,N[2]=r,N[3]=i)},scissor:(t,n,r,i)=>{(t!==te[0]||n!==te[1]||r!==te[2]||i!==te[3])&&(e.scissor(t,n,r,i),te[0]=t,te[1]=n,te[2]=r,te[3]=i)},clipControl:t.clipControl?(e,n)=>{(e!==ne||n!==re)&&(t.clipControl.clipControl(e,n),ne=e,re=n)}:void 0,reset:()=>{n={},r=e.getParameter(e.FRONT_FACE),i=e.getParameter(e.CULL_FACE_MODE),a=e.getParameter(e.DEPTH_WRITEMASK),o=e.getParameter(e.DEPTH_CLEAR_VALUE),s=e.getParameter(e.DEPTH_FUNC),c=e.getParameter(e.COLOR_WRITEMASK),l=e.getParameter(e.COLOR_CLEAR_VALUE),u=e.getParameter(e.BLEND_SRC_RGB),d=e.getParameter(e.BLEND_DST_RGB),f=e.getParameter(e.BLEND_SRC_ALPHA),p=e.getParameter(e.BLEND_DST_ALPHA),m=e.getParameter(e.BLEND_COLOR),h=e.getParameter(e.BLEND_EQUATION_RGB),g=e.getParameter(e.BLEND_EQUATION_ALPHA),_=e.getParameter(e.STENCIL_FUNC),v=e.getParameter(e.STENCIL_VALUE_MASK),y=e.getParameter(e.STENCIL_REF),b=e.getParameter(e.STENCIL_BACK_FUNC),x=e.getParameter(e.STENCIL_BACK_VALUE_MASK),S=e.getParameter(e.STENCIL_BACK_REF),C=e.getParameter(e.STENCIL_WRITEMASK),w=e.getParameter(e.STENCIL_BACK_WRITEMASK),T=e.getParameter(e.STENCIL_FAIL),E=e.getParameter(e.STENCIL_PASS_DEPTH_PASS),D=e.getParameter(e.STENCIL_PASS_DEPTH_FAIL),O=e.getParameter(e.STENCIL_BACK_FAIL),k=e.getParameter(e.STENCIL_BACK_PASS_DEPTH_PASS),A=e.getParameter(e.STENCIL_BACK_PASS_DEPTH_FAIL),j=e.getParameter(e.STENCIL_CLEAR_VALUE),ee=e.getParameter(e.MAX_VERTEX_ATTRIBS),M.length=0;for(let e=0;e<ee;++e)M[e]=0;N=e.getParameter(e.VIEWPORT),te=e.getParameter(e.SCISSOR_BOX),ne=t.clipControl?e.getParameter(t.clipControl.CLIP_ORIGIN):-1,re=t.clipControl?e.getParameter(t.clipControl.CLIP_DEPTH_MODE):-1}}}var un;function dn(){return(dn=e((()=>{un=`
float preFogAlpha = gl_FragColor.a;
if (uFog) {
    float viewZ = depthToViewZ(uIsOrtho, fragmentDepth, uNear, uFar);
    float fogFactor = smoothstep(uFogNear, uFogFar, abs(viewZ));
    float fogAlpha = (1.0 - fogFactor) * gl_FragColor.a;
    if (!uTransparentBackground) {
        if (gl_FragColor.a < 1.0) {
            // transparent objects are blended with background color
            gl_FragColor.a = fogAlpha;
        } else {
            // mix opaque objects with background color
            gl_FragColor.rgb = mix(gl_FragColor.rgb, uFogColor, fogFactor);
        }
    } else {
        #if defined(dRenderVariant_colorDpoit) && !defined(dGeometryType_directVolume)
            if (gl_FragColor.a < 1.0) {
                // transparent objects are blended with background color
                gl_FragColor.a = fogAlpha;
            } else {
                // opaque objects need to be pre-multiplied alpha
                gl_FragColor.rgb *= fogAlpha;
                gl_FragColor.a = fogAlpha;
            }
        #else
            // pre-multiplied alpha expected for transparent background
            gl_FragColor.rgb *= fogAlpha;
            gl_FragColor.a = fogAlpha;
        #endif
    }
} else if (uTransparentBackground) {
    #if !defined(dRenderVariant_colorDpoit) && !defined(dGeometryType_directVolume)
        // pre-multiplied alpha expected for transparent background
        gl_FragColor.rgb *= gl_FragColor.a;
    #endif
}
`})))()}var fn;function pn(){return(pn=e((()=>{fn=`
if (interior) {
    material.rgb = mix(material.rgb, uInteriorColor.rgb, uInteriorColor.a);

    float isf = clamp(uInteriorSubstance.a, 0.0, 0.99); // clamp to avoid artifacts
    metalness = mix(metalness, uInteriorSubstance.r, isf);
    roughness = mix(roughness, uInteriorSubstance.g, isf);
    bumpiness = mix(bumpiness, uInteriorSubstance.b, isf);

    #ifdef dTransparentBackfaces_opaque
        material.a = 1.0;
    #endif
}
`})))()}var mn;function hn(){return(hn=e((()=>{mn=`
#if defined(dIgnoreLight)
    #ifdef bumpEnabled
        if (uBumpFrequency > 0.0 && uBumpAmplitude > 0.0 && bumpiness > 0.0) {
            material.rgb += fbm(vModelPosition * uBumpFrequency) * uBumpAmplitude * bumpiness;
            material.rgb -= 0.5 * uBumpAmplitude * bumpiness;
        }
    #endif

    #if defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
        material.rgb += material.rgb * emissive;
    #endif

    gl_FragColor = material;
#else
    #ifdef bumpEnabled
        if (uBumpFrequency > 0.0 && uBumpAmplitude > 0.0 && bumpiness > 0.0) {
            normal = perturbNormal(vModelPosition, vViewPosition, normal, uBumpFrequency, (uBumpAmplitude * bumpiness) / uBumpFrequency);
        }
    #endif

    vec4 color = material;

    #if defined(dCelShaded)
        // clamp to avoid artifacts
        metalness = clamp(metalness, 0.0, 0.99);
        roughness = clamp(roughness, 0.05, 1.0);
    #endif

    GeometricContext geometry;
    geometry.position = -vViewPosition;
    geometry.normal = normal;
    geometry.viewDir = normalize(vViewPosition);

    PhysicalMaterial physicalMaterial;
    physicalMaterial.diffuseColor = color.rgb * (1.0 - metalness);
    #ifdef enabledFragDepth
        physicalMaterial.roughness = min(max(roughness, 0.0525), 1.0);
    #else
        vec3 dxy = max(abs(dFdx(normal)), abs(dFdy(normal)));
        float geometryRoughness = max(max(dxy.x, dxy.y), dxy.z);
        physicalMaterial.roughness = min(max(roughness, 0.0525) + geometryRoughness, 1.0);
    #endif
    physicalMaterial.specularColor = mix(vec3(0.04), color.rgb, metalness);
    physicalMaterial.specularF90 = 1.0;

    IncidentLight directLight;

    vec3 outgoingLight = vec3(0.0);

    #if defined(dCelShaded)
        float celDiffuse;
        float celSpecular;
        float celIntensity;

        #pragma unroll_loop_start
        for (int i = 0; i < dLightCount; ++i) {
            directLight.direction = uLightDirection[i];
            directLight.color = uLightColor[i] * PI; // * PI for punctual light

            celDiffuse = RECIPROCAL_PI * max(dot(geometry.normal, directLight.direction), 0.0) * (1.0 - metalness);
            celSpecular = luminance(saturate(dot(geometry.normal, directLight.direction)) * BRDF_GGX(directLight.direction, geometry.viewDir, geometry.normal, physicalMaterial.specularColor, physicalMaterial.specularF90, roughness));

            celIntensity = celDiffuse + celSpecular;
            celIntensity = ceil(celIntensity * uCelSteps) / uCelSteps;

            outgoingLight += color.rgb * directLight.color * celIntensity;
        }
        #pragma unroll_loop_end

        outgoingLight += physicalMaterial.diffuseColor * uAmbientColor;
    #else
        ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));

        #pragma unroll_loop_start
        for (int i = 0; i < dLightCount; ++i) {
            directLight.direction = uLightDirection[i];
            directLight.color = uLightColor[i] * PI; // * PI for punctual light
            RE_Direct_Physical(directLight, geometry, physicalMaterial, reflectedLight);
        }
        #pragma unroll_loop_end

        vec3 irradiance = uAmbientColor * PI; // * PI for punctual light
        RE_IndirectDiffuse_Physical(irradiance, geometry, physicalMaterial, reflectedLight);

        // indirect specular only metals
        vec3 radiance = uAmbientColor * metalness;
        vec3 iblIrradiance = uAmbientColor * metalness;
        vec3 clearcoatRadiance = vec3(0.0);
        RE_IndirectSpecular_Physical(radiance, iblIrradiance, clearcoatRadiance, geometry, physicalMaterial, reflectedLight);

        outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular;
    #endif
    outgoingLight = clamp(outgoingLight, 0.01, 0.99); // prevents black artifacts on specular highlight with transparent background

    #if defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
        outgoingLight += color.rgb * emissive;
    #endif

    gl_FragColor = vec4(outgoingLight, color.a);
#endif

gl_FragColor.rgb *= uExposure;
`})))()}var gn;function _n(){return(_n=e((()=>{gn=`

#if defined(dColorMarker)
    if (marker > 0.0) {
        if ((uMarkerPriority == 1 && marker != 2.0) || (uMarkerPriority != 1 && marker == 1.0)) {
            gl_FragColor.rgb = mix(gl_FragColor.rgb, uHighlightColor, uHighlightStrength);
            gl_FragColor.a = max(gl_FragColor.a, uHighlightStrength * 0.002); // for direct-volume rendering
        } else {
            gl_FragColor.rgb = mix(gl_FragColor.rgb, uSelectColor, uSelectStrength);
            gl_FragColor.a = max(gl_FragColor.a, uSelectStrength * 0.002); // for direct-volume rendering
        }
    } else if (uMarkerAverage > 0.0) {
        gl_FragColor.rgb = mix(gl_FragColor.rgb, uDimColor, uDimStrength);
        gl_FragColor.a = max(gl_FragColor.a, uDimStrength * 0.002); // for direct-volume rendering
    }
#endif
`})))()}var vn;function yn(){return(yn=e((()=>{vn=`
float markingOpacity = clamp(material.a, 0.0, 1.0);
if (uMarkingType == 1) {
    if (marker > 0.0 || markingOpacity == 0.0)
        discard;
    material = packDepthWithAlphaToRGBA(fragmentDepth, markingOpacity);
} else {
    if (marker == 0.0)
        discard;
    float depthTest = 1.0;
    if (uMarkingDepthTest) {
        float markingDepth = unpackRGBAToDepthWithAlpha(texture2D(tDepth, gl_FragCoord.xy / uDrawingBufferSize)).x;
        depthTest = fragmentDepth >= markingDepth ? 1.0 : 0.0;
    }
    bool isHighlight = (uMarkerPriority == 1 && marker != 2.0) || (uMarkerPriority != 1 && marker == 1.0);
    float viewZ = depthToViewZ(uIsOrtho, fragmentDepth, uNear, uFar);
    float fogFactor = smoothstep(uFogNear, uFogFar, abs(viewZ));
    if (fogFactor == 1.0)
        discard;
    material = packMarkingMask(depthTest, isHighlight, 1.0 - fogFactor, markingOpacity);
}
`})))()}var bn;function xn(){return(xn=e((()=>{bn=`
#if dClipObjectCount != 0 && defined(dClipping)
    #if defined(dClippingType_instance)
        vClipping = readFromTexture(tClipping, aInstance, uClippingTexDim).a;
    #elif defined(dMarkerType_groupInstance)
        vClipping = readFromTexture(tClipping, groupInstanceIndex(aInstance, group), uClippingTexDim).a;
    #endif
#endif
`})))()}var Sn;function Cn(){return(Cn=e((()=>{Sn=`
#if defined(dRenderVariant_color) || defined(dRenderVariant_tracing) || defined(dRenderVariant_emissive)
    #if defined(dColorType_attribute)
        vColor.rgb = aColor;
    #elif defined(dColorType_instance)
        vColor.rgb = readFromTexture(tColor, aInstance, uColorTexDim).rgb;
    #elif defined(dColorType_group)
        #if defined(dDualColor)
            vec4 color2;
            if (aColorMode == 2.0) {
                vColor.rgb = readFromTexture(tColor, groupIndex(group), uColorTexDim).rgb;
            } else {
                vColor.rgb = readFromTexture(tColor, groupIndex(group) * 2.0, uColorTexDim).rgb;
                color2.rgb = readFromTexture(tColor, groupIndex(group) * 2.0 + 1.0, uColorTexDim).rgb;
            }
        #else
            vColor.rgb = readFromTexture(tColor, groupIndex(group), uColorTexDim).rgb;
        #endif
    #elif defined(dColorType_groupInstance)
        #if defined(dDualColor)
            vec4 color2;
            if (aColorMode == 2.0) {
                vColor.rgb = readFromTexture(tColor, groupInstanceIndex(aInstance, group), uColorTexDim).rgb;
            } else {
                vColor.rgb = readFromTexture(tColor, groupInstanceIndex(aInstance, group) * 2.0, uColorTexDim).rgb;
                color2.rgb = readFromTexture(tColor, groupInstanceIndex(aInstance, group) * 2.0 + 1.0, uColorTexDim).rgb;
            }
        #else
            vColor.rgb = readFromTexture(tColor, groupInstanceIndex(aInstance, group), uColorTexDim).rgb;
        #endif
    #elif defined(dColorType_vertex)
        vColor.rgb = readFromTexture(tColor, vertexId, uColorTexDim).rgb;
    #elif defined(dColorType_vertexInstance)
        vColor.rgb = readFromTexture(tColor, int(aInstance) * uVertexCount + vertexId, uColorTexDim).rgb;
    #elif defined(dColorType_volume)
        vec3 cgridPos = (uColorGridTransform.w * (position - uColorGridTransform.xyz)) / uColorGridDim;
        vColor.rgb = texture3dFrom2dLinear(tColorGrid, cgridPos, uColorGridDim, uColorTexDim).rgb;
    #elif defined(dColorType_volumeInstance)
        vec3 cgridPos = (uColorGridTransform.w * (vModelPosition / uModelScale - uColorGridTransform.xyz)) / uColorGridDim;
        vColor.rgb = texture3dFrom2dLinear(tColorGrid, cgridPos, uColorGridDim, uColorTexDim).rgb;
    #endif

    #ifdef dUsePalette
        vPaletteV = ((vColor.r * 256.0 * 256.0 * 255.0 + vColor.g * 256.0 * 255.0 + vColor.b * 255.0) - 1.0) / PALETTE_SCALE;
    #endif

    #ifdef dOverpaint
        #if defined(dOverpaintType_instance)
            vOverpaint = readFromTexture(tOverpaint, aInstance, uOverpaintTexDim);
        #elif defined(dOverpaintType_groupInstance)
            vOverpaint = readFromTexture(tOverpaint, groupInstanceIndex(aInstance, group), uOverpaintTexDim);
        #elif defined(dOverpaintType_vertexInstance)
            vOverpaint = readFromTexture(tOverpaint, int(aInstance) * uVertexCount + vertexId, uOverpaintTexDim);
        #elif defined(dOverpaintType_volumeInstance)
            vec3 ogridPos = (uOverpaintGridTransform.w * (vModelPosition / uModelScale - uOverpaintGridTransform.xyz)) / uOverpaintGridDim;
            vOverpaint = texture3dFrom2dLinear(tOverpaintGrid, ogridPos, uOverpaintGridDim, uOverpaintTexDim);
        #endif

        // pre-mix to avoid darkening due to empty overpaint
        #ifdef dColorType_uniform
            vOverpaint.rgb = mix(uColor.rgb, vOverpaint.rgb, vOverpaint.a);
        #else
            vOverpaint.rgb = mix(vColor.rgb, vOverpaint.rgb, vOverpaint.a);
        #endif
        vOverpaint *= uOverpaintStrength;
    #endif

    #ifdef dEmissive
        #if defined(dEmissiveType_instance)
            vEmissive = readFromTexture(tEmissive, aInstance, uEmissiveTexDim).a;
        #elif defined(dEmissiveType_groupInstance)
            vEmissive = readFromTexture(tEmissive, groupInstanceIndex(aInstance, group), uEmissiveTexDim).a;
        #elif defined(dEmissiveType_vertexInstance)
            vEmissive = readFromTexture(tEmissive, int(aInstance) * uVertexCount + vertexId, uEmissiveTexDim).a;
        #elif defined(dEmissiveType_volumeInstance)
            vec3 egridPos = (uEmissiveGridTransform.w * (vModelPosition / uModelScale - uEmissiveGridTransform.xyz)) / uEmissiveGridDim;
            vEmissive = texture3dFrom2dLinear(tEmissiveGrid, egridPos, uEmissiveGridDim, uEmissiveTexDim).a;
        #endif
        vEmissive *= uEmissiveStrength;
    #endif

    #ifdef dSubstance
        #if defined(dSubstanceType_instance)
            vSubstance = readFromTexture(tSubstance, aInstance, uSubstanceTexDim);
        #elif defined(dSubstanceType_groupInstance)
            vSubstance = readFromTexture(tSubstance, groupInstanceIndex(aInstance, group), uSubstanceTexDim);
        #elif defined(dSubstanceType_vertexInstance)
            vSubstance = readFromTexture(tSubstance, int(aInstance) * uVertexCount + vertexId, uSubstanceTexDim);
        #elif defined(dSubstanceType_volumeInstance)
            vec3 sgridPos = (uSubstanceGridTransform.w * (vModelPosition / uModelScale - uSubstanceGridTransform.xyz)) / uSubstanceGridDim;
            vSubstance = texture3dFrom2dLinear(tSubstanceGrid, sgridPos, uSubstanceGridDim, uSubstanceTexDim);
        #endif

        // pre-mix to avoid artifacts due to empty substance
        vSubstance.rgb = mix(vec3(uMetalness, uRoughness, uBumpiness), vSubstance.rgb, vSubstance.a);
        vSubstance *= uSubstanceStrength;
    #endif
#elif defined(dRenderVariant_emissive)
    #ifdef dEmissive
        #if defined(dEmissiveType_instance)
            vEmissive = readFromTexture(tEmissive, aInstance, uEmissiveTexDim).a;
        #elif defined(dEmissiveType_groupInstance)
            vEmissive = readFromTexture(tEmissive, groupInstanceIndex(aInstance, group), uEmissiveTexDim).a;
        #elif defined(dEmissiveType_vertexInstance)
            vEmissive = readFromTexture(tEmissive, int(aInstance) * uVertexCount + vertexId, uEmissiveTexDim).a;
        #elif defined(dEmissiveType_volumeInstance)
            vec3 egridPos = (uEmissiveGridTransform.w * (vModelPosition / uModelScale - uEmissiveGridTransform.xyz)) / uEmissiveGridDim;
            vEmissive = texture3dFrom2dLinear(tEmissiveGrid, egridPos, uEmissiveGridDim, uEmissiveTexDim).a;
        #endif
        vEmissive *= uEmissiveStrength;
    #endif
#elif defined(dRenderVariant_pick)
    #ifdef requiredDrawBuffers
        vObject = vec4(packIntToRGB(float(uObjectId)), 1.0);
        vInstance = vec4(packIntToRGB(aInstance), 1.0);
        vGroup = vec4(packIntToRGB(group), 1.0);
    #else
        if (uPickType == 1) {
            vColor = vec4(packIntToRGB(float(uObjectId)), 1.0);
        } else if (uPickType == 2) {
            vColor = vec4(packIntToRGB(aInstance), 1.0);
        } else {
            vColor = vec4(packIntToRGB(group), 1.0);
        }
    #endif
#endif

#ifdef dTransparency
    #if defined(dTransparencyType_instance)
        vTransparency = readFromTexture(tTransparency, aInstance, uTransparencyTexDim).a;
    #elif defined(dTransparencyType_groupInstance)
        vTransparency = readFromTexture(tTransparency, groupInstanceIndex(aInstance, group), uTransparencyTexDim).a;
    #elif defined(dTransparencyType_vertexInstance)
        vTransparency = readFromTexture(tTransparency, int(aInstance) * uVertexCount + vertexId, uTransparencyTexDim).a;
    #elif defined(dTransparencyType_volumeInstance)
        vec3 tgridPos = (uTransparencyGridTransform.w * (vModelPosition / uModelScale - uTransparencyGridTransform.xyz)) / uTransparencyGridDim;
        vTransparency = texture3dFrom2dLinear(tTransparencyGrid, tgridPos, uTransparencyGridDim, uTransparencyTexDim).a;
    #endif
    vTransparency *= uTransparencyStrength;
#endif
`})))()}var wn;function Tn(){return(Tn=e((()=>{wn=`
#ifdef dGeometryType_textureMesh
    float group = unpackRGBToInt(readFromTexture(tGroup, vertexId, uGeoTexDim).rgb);
#else
    float group = aGroup;
#endif
`})))()}var En;function Dn(){return(Dn=e((()=>{En=`
#if defined(dNeedsMarker)
    #if defined(dMarkerType_instance)
        vMarker = readFromTexture(tMarker, aInstance, uMarkerTexDim).a;
    #elif defined(dMarkerType_groupInstance)
        vMarker = readFromTexture(tMarker, groupInstanceIndex(aInstance, group), uMarkerTexDim).a;
    #endif
#endif
`})))()}var On;function kn(){return(kn=e((()=>{On=`
#if defined(dNeedsMarker)
    float marker = uMarker;
    if (uMarker == -1.0) {
        marker = floor(vMarker * 255.0 + 0.5); // rounding required to work on some cards on win
    }
#endif

// optional per-fragment opacity multiplier; defaults to 1.0
#ifndef dHasMaterialOpacity
    float materialOpacity = 1.0;
#endif

#if defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
    #if defined(dUsePalette)
        vec4 material = vec4(texture2D(tPalette, vec2(vPaletteV, 0.5)).rgb, uAlpha);
    #elif defined(dColorType_uniform)
        vec4 material = vec4(uColor, uAlpha);
    #elif defined(dColorType_varying)
        vec4 material = vec4(vColor.rgb, uAlpha);
    #endif

    // mix material with overpaint
    #if defined(dOverpaint)
        material.rgb = mix(material.rgb, vOverpaint.rgb, vOverpaint.a);
    #endif

    float emissive = uEmissive;
    #ifdef dEmissive
        emissive += vEmissive;
    #endif

    float metalness = uMetalness;
    float roughness = uRoughness;
    float bumpiness = uBumpiness;
    #ifdef dSubstance
        float sf = clamp(vSubstance.a, 0.0, 0.99); // clamp to avoid artifacts
        metalness = mix(metalness, vSubstance.r, sf);
        roughness = mix(roughness, vSubstance.g, sf);
        bumpiness = mix(bumpiness, vSubstance.b, sf);
    #endif

    #if defined(dXrayShaded)
        material.a = calcXrayShadedAlpha(material.a, normal);
    #endif
#elif defined(dRenderVariant_depth)
    if (fragmentDepth > getDepth(gl_FragCoord.xy / uDrawingBufferSize)) {
        discard;
    }
    vec4 material;
    if (uRenderMask == MaskOpaque) {
        #if defined(dXrayShaded)
            discard;
        #endif
        #if defined(dTransparency)
            float dta = 1.0 - vTransparency;
            #if __VERSION__ == 100 || defined(dVaryingGroup)
                if (vTransparency < 0.1) dta = 1.0; // hard cutoff to avoid artifacts
            #endif

            if (uAlpha * materialOpacity * dta < 1.0) {
                discard;
            }
        #else
            if (uAlpha * materialOpacity < 1.0) {
                discard;
            }
        #endif
        material = packDepthToRGBA(fragmentDepth);
    } else if (uRenderMask == MaskTransparent) {
        float alpha = uAlpha * materialOpacity;
        #if defined(dTransparency)
            float dta = 1.0 - vTransparency;
            alpha *= dta;
        #endif

        #ifdef dXrayShaded
            alpha = calcXrayShadedAlpha(alpha, normal);
        #else
            if (alpha == 1.0) {
                discard;
            }
        #endif
        material = packDepthWithAlphaToRGBA(fragmentDepth, alpha);
    } else {
        material = packDepthToRGBA(fragmentDepth);
    }
#elif defined(dRenderVariant_marking)
    vec4 material = vec4(0.0, 0.0, 0.0, uAlpha * materialOpacity);
    #if defined(dXrayShaded)
        material.a = calcXrayShadedAlpha(material.a, normal);
    #endif
#elif defined(dRenderVariant_emissive)
    float emissive = uEmissive;
    #ifdef dEmissive
        emissive += vEmissive;
    #endif
    float emissiveAlpha = uAlpha;
    #if defined(dXrayShaded)
        emissiveAlpha = calcXrayShadedAlpha(emissiveAlpha, normal);
    #endif
    // fade emissive bloom with fog so the glow dims into the background like the geometry
    if (uFog) {
        float viewZ = depthToViewZ(uIsOrtho, fragmentDepth, uNear, uFar);
        emissiveAlpha *= 1.0 - smoothstep(uFogNear, uFogFar, abs(viewZ));
    }
    // dim emitters behind a transparent blocker by its coverage (tDepth packs front depth+alpha)
    vec2 emissiveBlocker = unpackRGBAToDepthWithAlpha(texture2D(tDepth, gl_FragCoord.xy / uDrawingBufferSize));
    if (fragmentDepth > emissiveBlocker.x + 0.0001) {
        emissiveAlpha *= 1.0 - emissiveBlocker.y;
    }
    // glow with the object's own color so emissive isn't double-counted via the lit buffer
    #if defined(dUsePalette)
        vec3 emissiveColor = texture2D(tPalette, vec2(vPaletteV, 0.5)).rgb;
    #elif defined(dColorType_uniform)
        vec3 emissiveColor = uColor;
    #elif defined(dColorType_varying)
        vec3 emissiveColor = vColor.rgb;
    #else
        vec3 emissiveColor = vec3(1.0);
    #endif
    #ifdef dOverpaint
        emissiveColor = mix(emissiveColor, vOverpaint.rgb, vOverpaint.a);
    #endif
    float e = emissive * emissiveAlpha;
    vec4 material = vec4(emissiveColor * e, e);
#endif

// apply per-group transparency
#if defined(dTransparency) && (defined(dRenderVariant_pick) || defined(dRenderVariant_color) || defined(dRenderVariant_emissive) || defined(dRenderVariant_tracing) || defined(dRenderVariant_marking))
    float ta = 1.0 - vTransparency;
    if (vTransparency < 0.09) ta = 1.0; // hard cutoff looks better

    #if defined(dRenderVariant_pick)
        if (ta * uAlpha < uPickingAlphaThreshold)
            discard; // ignore so the element below can be picked
    #elif defined(dRenderVariant_emissive)
        material *= ta;
    #elif defined(dRenderVariant_color) || defined(dRenderVariant_tracing) || defined(dRenderVariant_marking)
        material.a *= ta;
    #endif
#endif
`})))()}var An;function jn(){return(jn=e((()=>{An=`
#ifdef dGeometryType_image
    mat4 transform = aTransform;
#else
    mat4 transform = applyTumble(aTransform, aInstance, float(uObjectId));
#endif
mat4 model = uModel * transform;
mat4 modelView = uView * model;
#ifdef dGeometryType_textureMesh
    vec3 position = readFromTexture(tPosition, vertexId, uGeoTexDim).xyz;
#else
    vec3 position = aPosition;
#endif
#ifndef dGeometryType_image
    position = applyWiggle(position, group, aInstance);
#endif
vec4 position4 = vec4(position, 1.0);
// for accessing tColorGrid in vert shader and for clipping in frag shader
vModelPosition = (model * position4).xyz;
vec4 mvPosition = modelView * position4;
vViewPosition = mvPosition.xyz;
gl_Position = uProjection * mvPosition;
`})))()}var Mn;function Nn(){return(Nn=e((()=>{Mn=`
#if defined(dSizeType_uniform)
    float size = uSize;
#elif defined(dSizeType_attribute)
    float size = aSize;
#elif defined(dSizeType_instance)
    float size = unpackRGBToInt(readFromTexture(tSize, aInstance, uSizeTexDim).rgb);
#elif defined(dSizeType_group)
    float size = unpackRGBToInt(readFromTexture(tSize, groupIndex(group), uSizeTexDim).rgb);
#elif defined(dSizeType_groupInstance)
    float size = unpackRGBToInt(readFromTexture(tSize, groupInstanceIndex(aInstance, group), uSizeTexDim).rgb);
#elif defined(dSizeType_vertex)
    float size = unpackRGBToInt(readFromTexture(tSize, vertexId, uSizeTexDim).rgb);
#elif defined(dSizeType_vertexInstance)
    float size = unpackRGBToInt(readFromTexture(tSize, int(aInstance) * uVertexCount + vertexId, uSizeTexDim).rgb);
#endif

#if defined(dSizeType_instance) || defined(dSizeType_group) || defined(dSizeType_groupInstance) || defined(dSizeType_vertex) || defined(dSizeType_vertexInstance)
    size /= 100.0; // NOTE factor also set in TypeScript
#endif

size *= uSizeFactor;
`})))()}var Pn;function Fn(){return(Fn=e((()=>{Pn=`
float viewZ = depthToViewZ(uIsOrtho, fragmentDepth, uNear, uFar);
float fogFactor = smoothstep(uFogNear, uFogFar, abs(viewZ));
float fogAlpha = (1.0 - fogFactor) * uAlpha;
float alpha = uAlpha;
#ifdef dXrayShaded
    // add bias to make picking xray shaded elements easier
    alpha = calcXrayShadedAlpha(alpha, normal) + (0.3 * uPickingAlphaThreshold);
#endif
// if not opaque enough ignore so the element below can be picked
if (alpha < uPickingAlphaThreshold || fogAlpha < 0.1) {
    #ifdef dTransparentBackfaces_opaque
        if (!interior) discard;
    #else
        discard;
    #endif
}
`})))()}var In;function Ln(){return(Ln=e((()=>{In=`
#if defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
    #if defined(dTransparentBackfaces_off)
        if (interior && material.a < 1.0) discard;
    #elif defined(dTransparentBackfaces_opaque)
        if (interior) material.a = 1.0;
    #endif

    #if !defined(dXrayShaded)
        if ((uRenderMask == MaskOpaque && material.a < 1.0) ||
            (uRenderMask == MaskTransparent && material.a == 1.0)
        ) {
            discard;
        }
    #endif
#endif

#if defined(dRenderVariant_marking)
    #if defined(dTransparentBackfaces_off)
        if (interior && material.a < 1.0) material.a = 0.0;
    #elif defined(dTransparentBackfaces_opaque)
        if (interior) material.a = 1.0;
    #endif
#endif

#if defined(dRenderVariant_depth)
    #if defined(dTransparentBackfaces_off)
        // interior fragments are the surface of interest in the back-depth pass
        if (interior && !uDepthBack && uRenderMask != MaskOpaque) discard;
    #endif
#endif
`})))()}var Rn;function zn(){return(zn=e((()=>{Rn=`
#if defined(dClipVariant_instance) && dClipObjectCount != 0
    vec3 mCenter = (uModel * aTransform * vec4(InvariantBoundingSphere.xyz, 1.0)).xyz;
    if (clipTest(mCenter / uModelScale)) {
        // move out of [ -w, +w ] to 'discard' in vert shader
        gl_Position.z = 2.0 * gl_Position.w;
    }
#endif
`})))()}var Bn;function Vn(){return(Vn=e((()=>{Bn=`
#if defined(dClipVariant_pixel) && dClipObjectCount != 0
    if (clipTest(vModelPosition / uModelScale))
        discard;
#endif
`})))()}var Hn;function Un(){return(Un=e((()=>{Hn=`
uniform float uMetalness;
uniform float uRoughness;
uniform float uBumpiness;
#ifdef bumpEnabled
    uniform float uBumpFrequency;
    uniform float uBumpAmplitude;
#endif
uniform float uEmissive;

// Density value to estimate object thickness
uniform float uDensity;

#if defined(dRenderVariant_color) || defined(dRenderVariant_tracing) || defined(dRenderVariant_emissive)
    #if defined(dColorType_uniform)
        uniform vec3 uColor;
    #elif defined(dColorType_varying)
        varying vec4 vColor;
    #endif

    #ifdef dUsePalette
        uniform sampler2D tPalette;
        varying float vPaletteV;
    #endif

    #ifdef dOverpaint
        varying vec4 vOverpaint;
    #endif

    #ifdef dEmissive
        varying float vEmissive;
    #endif

    #ifdef dSubstance
        varying vec4 vSubstance;
    #endif
#elif defined(dRenderVariant_emissive)
    #ifdef dEmissive
        varying float vEmissive;
    #endif
#elif defined(dRenderVariant_pick)
    #if __VERSION__ == 100 || !defined(dVaryingGroup)
        #ifdef requiredDrawBuffers
            varying vec4 vObject;
            varying vec4 vInstance;
            varying vec4 vGroup;
        #else
            varying vec4 vColor;
        #endif
    #else
        #ifdef requiredDrawBuffers
            flat in vec4 vObject;
            flat in vec4 vInstance;
            flat in vec4 vGroup;
        #else
            flat in vec4 vColor;
        #endif
    #endif
#endif

#ifdef dTransparency
    varying float vTransparency;
#endif
`})))()}var Wn;function Gn(){return(Gn=e((()=>{Wn=`
uniform float uMetalness;
uniform float uRoughness;
uniform float uBumpiness;

#if defined(dRenderVariant_color) || defined(dRenderVariant_tracing) || defined(dRenderVariant_emissive)
    #if defined(dColorType_uniform)
        uniform vec3 uColor;
    #elif defined(dColorType_attribute)
        varying vec4 vColor;
        attribute vec3 aColor;
    #elif defined(dColorType_texture)
        varying vec4 vColor;
        uniform vec2 uColorTexDim;
        uniform sampler2D tColor;
    #elif defined(dColorType_grid)
        varying vec4 vColor;
        uniform vec2 uColorTexDim;
        uniform vec3 uColorGridDim;
        uniform vec4 uColorGridTransform;
        uniform sampler2D tColorGrid;
    #elif defined(dColorType_direct)
        varying vec4 vColor;
    #endif

    #ifdef dUsePalette
        varying float vPaletteV;
    #endif

    #ifdef dOverpaint
        #if defined(dOverpaintType_instance) || defined(dOverpaintType_groupInstance) || defined(dOverpaintType_vertexInstance)
            varying vec4 vOverpaint;
            uniform vec2 uOverpaintTexDim;
            uniform sampler2D tOverpaint;
        #elif defined(dOverpaintType_volumeInstance)
            varying vec4 vOverpaint;
            uniform vec2 uOverpaintTexDim;
            uniform vec3 uOverpaintGridDim;
            uniform vec4 uOverpaintGridTransform;
            uniform sampler2D tOverpaintGrid;
        #endif
        uniform float uOverpaintStrength;
    #endif

    #ifdef dEmissive
        #if defined(dEmissiveType_instance) || defined(dEmissiveType_groupInstance) || defined(dEmissiveType_vertexInstance)
            varying float vEmissive;
            uniform vec2 uEmissiveTexDim;
            uniform sampler2D tEmissive;
        #elif defined(dEmissiveType_volumeInstance)
            varying float vEmissive;
            uniform vec2 uEmissiveTexDim;
            uniform vec3 uEmissiveGridDim;
            uniform vec4 uEmissiveGridTransform;
            uniform sampler2D tEmissiveGrid;
        #endif
        uniform float uEmissiveStrength;
    #endif

    #ifdef dSubstance
        #if defined(dSubstanceType_instance) || defined(dSubstanceType_groupInstance) || defined(dSubstanceType_vertexInstance)
            varying vec4 vSubstance;
            uniform vec2 uSubstanceTexDim;
            uniform sampler2D tSubstance;
        #elif defined(dSubstanceType_volumeInstance)
            varying vec4 vSubstance;
            uniform vec2 uSubstanceTexDim;
            uniform vec3 uSubstanceGridDim;
            uniform vec4 uSubstanceGridTransform;
            uniform sampler2D tSubstanceGrid;
        #endif
        uniform float uSubstanceStrength;
    #endif
#elif defined(dRenderVariant_emissive)
    #ifdef dEmissive
        #if defined(dEmissiveType_instance) || defined(dEmissiveType_groupInstance) || defined(dEmissiveType_vertexInstance)
            varying float vEmissive;
            uniform vec2 uEmissiveTexDim;
            uniform sampler2D tEmissive;
        #elif defined(dEmissiveType_volumeInstance)
            varying float vEmissive;
            uniform vec2 uEmissiveTexDim;
            uniform vec3 uEmissiveGridDim;
            uniform vec4 uEmissiveGridTransform;
            uniform sampler2D tEmissiveGrid;
        #endif
        uniform float uEmissiveStrength;
    #endif
#elif defined(dRenderVariant_pick)
    #if __VERSION__ == 100 || !defined(dVaryingGroup)
        #ifdef requiredDrawBuffers
            varying vec4 vObject;
            varying vec4 vInstance;
            varying vec4 vGroup;
        #else
            varying vec4 vColor;
        #endif
    #else
        #ifdef requiredDrawBuffers
            flat out vec4 vObject;
            flat out vec4 vInstance;
            flat out vec4 vGroup;
        #else
            flat out vec4 vColor;
        #endif
    #endif
#endif

#ifdef dTransparency
    #if defined(dTransparencyType_instance) || defined(dTransparencyType_groupInstance) || defined(dTransparencyType_vertexInstance)
        varying float vTransparency;
        uniform vec2 uTransparencyTexDim;
        uniform sampler2D tTransparency;
    #elif defined(dTransparencyType_volumeInstance)
        varying float vTransparency;
        uniform vec2 uTransparencyTexDim;
        uniform vec3 uTransparencyGridDim;
        uniform vec4 uTransparencyGridTransform;
        uniform sampler2D tTransparencyGrid;
    #endif
    uniform float uTransparencyStrength;
#endif
`})))()}var Kn;function qn(){return(qn=e((()=>{Kn=`
uniform float uWiggleSpeed;
uniform float uWiggleAmplitude;
uniform float uWiggleFrequency;
uniform int uWiggleMode;
uniform float uTumbleSpeed;
uniform float uTumbleAmplitude;
uniform float uTumbleFrequency;

#ifdef dWiggle
    uniform vec2 uWiggleTexDim;
    uniform sampler2D tWiggle;
    uniform float uWiggleStrength;
#endif

vec3 applyWiggle(vec3 pos, float groupId, float instanceId) {
    if (!uEnableAnimation) return pos;
    float amplitude = uWiggleAmplitude;
    #ifdef dWiggle
        #if defined(dWiggleType_instance)
            amplitude += readFromTexture(tWiggle, instanceId, uWiggleTexDim).a * uWiggleStrength;
        #elif defined(dWiggleType_groupInstance)
            amplitude += readFromTexture(tWiggle, groupInstanceIndex(instanceId, groupId), uWiggleTexDim).a * uWiggleStrength;
        #endif
    #endif
    if (amplitude > 0.0 && uWiggleSpeed > 0.0 && uWiggleFrequency > 0.0) {
        float t = uTime * uWiggleSpeed;
        vec3 s;
        if (uWiggleMode == 0) {
            // Position mode: spatial position correlates nearby atoms
            s = pos;
        } else {
            // Group mode: per-group independent noise
            // Hash groupId into a well-distributed 3D seed to avoid repetition
            s = vec3(
                fract(sin(groupId * 127.1) * 43758.5453) * 1000.0,
                fract(sin(groupId * 269.5) * 21639.7182) * 1000.0,
                fract(sin(groupId * 419.2) * 32517.3926) * 1000.0
            );
        }
        s *= uWiggleFrequency;
        pos.x += (fbm(vec3(s.x, s.y + t, s.z)) / 0.4375 - 1.0) * amplitude;
        pos.y += (fbm(vec3(s.x + 37.0, s.y, s.z + t)) / 0.4375 - 1.0) * amplitude;
        pos.z += (fbm(vec3(s.x + t, s.y + 73.0, s.z)) / 0.4375 - 1.0) * amplitude;
    }
    return pos;
}

mat4 applyTumble(mat4 transform, float instanceIndex, float objectId) {
    if (!uEnableAnimation) return transform;
    if (uTumbleAmplitude > 0.0 && uTumbleSpeed > 0.0 && uTumbleFrequency > 0.0) {
        // Scale amplitude inversely with bounding-sphere radius (Stokes-Einstein: D ~ 1/r)
        float amplitude = uTumbleAmplitude / max(InvariantBoundingSphere.w, 1.0);
        float t = uTime * uTumbleSpeed;
        float seed = (instanceIndex * 127.1 + objectId * 311.7) * uTumbleFrequency;

        // Per-instance rotation angles from layered noise (Brownian-like)
        float angleX = (fbm(vec3(seed, t, 0.0)) / 0.4375 - 1.0) * amplitude;
        float angleY = (fbm(vec3(seed, 0.0, t)) / 0.4375 - 1.0) * amplitude;
        float angleZ = (fbm(vec3(0.0, seed, t)) / 0.4375 - 1.0) * amplitude;

        float cx = cos(angleX); float sx = sin(angleX);
        float cy = cos(angleY); float sy = sin(angleY);
        float cz = cos(angleZ); float sz = sin(angleZ);

        // Combined rotation matrix (Rz * Ry * Rx)
        mat3 rot = mat3(
            cy * cz, cx * sz + sx * sy * cz, sx * sz - cx * sy * cz,
            -cy * sz, cx * cz - sx * sy * sz, sx * cz + cx * sy * sz,
            sy, -sx * cy, cx * cy
        );

        // Per-instance translation offset from layered noise (Brownian-like)
        vec3 offset = vec3(
            (fbm(vec3(seed + 31.7, t, 0.0)) / 0.4375 - 1.0),
            (fbm(vec3(seed + 31.7, 0.0, t)) / 0.4375 - 1.0),
            (fbm(vec3(0.0, seed + 31.7, t)) / 0.4375 - 1.0)
        ) * amplitude;

        // Bounding-sphere center transformed by the linear part only (no translation)
        vec3 localCenter = mat3(transform) * InvariantBoundingSphere.xyz;

        // Rotate basis vectors
        mat4 result = transform;
        result[0].xyz = rot * transform[0].xyz;
        result[1].xyz = rot * transform[1].xyz;
        result[2].xyz = rot * transform[2].xyz;

        // Adjust translation so rotation pivots around the transformed center
        result[3].xyz = transform[3].xyz + localCenter - rot * localCenter + offset;

        return result;
    }
    return transform;
}
`})))()}var Jn;function Yn(){return(Yn=e((()=>{Jn=`
vec3 quaternionTransform(const in vec4 q, const in vec3 v) {
    vec3 t = 2.0 * cross(q.xyz, v);
    return v + q.w * t + cross(q.xyz, t);
}

vec4 computePlane(const in vec3 normal, const in vec3 inPoint) {
    return vec4(normalize(normal), -dot(normal, inPoint));
}

float planeSD(const in vec4 plane, const in vec3 center) {
    return -dot(plane.xyz, center - plane.xyz * -plane.w);
}

float sphereSD(const in vec3 position, const in vec4 rotation, const in vec3 size, const in vec3 center) {
    return (
        length(quaternionTransform(vec4(-rotation.x, -rotation.y, -rotation.z, rotation.w), center - position) / size) - 1.0
    ) * min(min(size.x, size.y), size.z);
}

float cubeSD(const in vec3 position, const in vec4 rotation, const in vec3 size, const in vec3 center) {
    vec3 d = abs(quaternionTransform(vec4(-rotation.x, -rotation.y, -rotation.z, rotation.w), center - position)) - size;
    return min(max(d.x, max(d.y, d.z)), 0.0) + length(max(d, 0.0));
}

float cylinderSD(const in vec3 position, const in vec4 rotation, const in vec3 size, const in vec3 center) {
    vec3 t = quaternionTransform(vec4(-rotation.x, -rotation.y, -rotation.z, rotation.w), center - position);

    vec2 d = abs(vec2(length(t.xz), t.y)) - size.xy;
    return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
}

float infiniteConeSD(const in vec3 position, const in vec4 rotation, const in vec3 size, const in vec3 center) {
    vec3 t = quaternionTransform(vec4(-rotation.x, -rotation.y, -rotation.z, rotation.w), center - position);

    float q = length(t.xy);
    return dot(size.xy, vec2(q, t.z));
}

float getSignedDistance(const in vec3 center, const in int type, const in vec3 position, const in vec4 rotation, const in vec3 scale, const in mat4 transform) {
    vec3 c = (transform * vec4(center, 1.0)).xyz;
    if (type == 1) {
        vec3 normal = quaternionTransform(rotation, vec3(0.0, 1.0, 0.0));
        vec4 plane = computePlane(normal, position);
        return planeSD(plane, c);
    } else if (type == 2) {
        return sphereSD(position, rotation, scale * 0.5, c);
    } else if (type == 3) {
        return cubeSD(position, rotation, scale * 0.5, c);
    } else if (type == 4) {
        return cylinderSD(position, rotation, scale * 0.5, c);
    } else if (type == 5) {
        return infiniteConeSD(position, rotation, scale * 0.5, c);
    } else {
        return 0.1;
    }
}

#if __VERSION__ == 100
    // 8-bit
    int bitwiseAnd(in int a, in int b) {
        int d = 128;
        int result = 0;
        for (int i = 0; i < 8; ++i) {
            if (d <= 0) break;
            if (a >= d && b >= d) result += d;
            if (a >= d) a -= d;
            if (b >= d) b -= d;
            d /= 2;
        }
        return result;
    }

    bool hasBit(const in int mask, const in int bit) {
        return bitwiseAnd(mask, bit) == 0;
    }
#else
    bool hasBit(const in int mask, const in int bit) {
        return (mask & bit) == 0;
    }
#endif

#if dClipObjectCount != 0
    uniform int uSolidInteriorClip;

    bool clipIgnored(const in int index) {
        #if defined(dClipping)
            int flag = int(floor(vClipping * 255.0 + 0.5));
            return flag != 0 && !hasBit(flag, index + 1);
        #else
            return false;
        #endif
    }

    bool clipTest(const in vec3 center) {
        // flag is a bit-flag for clip-objects to ignore (note, object ids start at 1 not 0)
        #if defined(dClipping)
            int flag = int(floor(vClipping * 255.0 + 0.5));
        #else
            int flag = 0;
        #endif

        #pragma unroll_loop_start
        for (int i = 0; i < dClipObjectCount; ++i) {
            if (UNROLLED_LOOP_INDEX != uSolidInteriorClip && (flag == 0 || hasBit(flag, UNROLLED_LOOP_INDEX + 1))) {
                bool test = getSignedDistance(center, uClipObjectType[i], uClipObjectPosition[i], uClipObjectRotation[i], uClipObjectScale[i], uClipObjectTransform[i]) <= 0.0;
                if ((!uClipObjectInvert[i] && test) || (uClipObjectInvert[i] && !test)) {
                    return true;
                }
            }
        }
        #pragma unroll_loop_end
        return false;
    }

    float clipDistance(const in vec3 center) {
        #if defined(dClipping)
            int flag = int(floor(vClipping * 255.0 + 0.5));
        #else
            int flag = 0;
        #endif

        float d = 1.0e10;
        #pragma unroll_loop_start
        for (int i = 0; i < dClipObjectCount; ++i) {
            if (UNROLLED_LOOP_INDEX != uSolidInteriorClip && (flag == 0 || hasBit(flag, UNROLLED_LOOP_INDEX + 1))) {
                float sd = getSignedDistance(center, uClipObjectType[i], uClipObjectPosition[i], uClipObjectRotation[i], uClipObjectScale[i], uClipObjectTransform[i]);
                d = min(d, uClipObjectInvert[i] ? -sd : sd);
            }
        }
        #pragma unroll_loop_end
        return d;
    }

    vec3 clipNormal(const in vec3 center) {
        vec2 e = vec2(0.01, 0.0);
        return normalize(vec3(
            clipDistance(center + e.xyy) - clipDistance(center - e.xyy),
            clipDistance(center + e.yxy) - clipDistance(center - e.yxy),
            clipDistance(center + e.yyx) - clipDistance(center - e.yyx)
        ));
    }

    vec2 clipHalfLine(const in float f0, const in float f1) {
        float df = f1 - f0;
        if (abs(df) < 1.0e-12) return f0 <= 0.0 ? vec2(-1.0e6, 1.0e6) : vec2(1.0e6, -1.0e6);
        float sr = -f0 / df;
        return df < 0.0 ? vec2(sr, 1.0e6) : vec2(-1.0e6, sr);
    }

    vec2 clipSlab(const in float q0, const in float q1, const in float size) {
        vec2 a = clipHalfLine(q0 - size, q1 - size);
        vec2 b = clipHalfLine(-q0 - size, -q1 - size);
        return vec2(max(a.x, b.x), min(a.y, b.y));
    }

    vec2 clipQuadratic(const in float a, const in float b, const in float c) {
        if (a < 1.0e-12) return c <= 0.0 ? vec2(-1.0e6, 1.0e6) : vec2(1.0e6, -1.0e6);
        float disc = b * b - a * c;
        if (disc < 0.0) return vec2(1.0e6, -1.0e6);
        float sq = sqrt(disc);
        return vec2((-b - sq) / a, (-b + sq) / a);
    }

    vec2 clipObjectInterval(const in int type, const in vec3 position, const in vec4 rotation, const in vec3 scale, const in mat4 transform, const in vec3 pFront, const in vec3 pBack) {
        vec3 cF = (transform * vec4(pFront, 1.0)).xyz;
        vec3 cB = (transform * vec4(pBack, 1.0)).xyz;
        if (type == 1) {
            vec4 plane = computePlane(quaternionTransform(rotation, vec3(0.0, 1.0, 0.0)), position);
            return clipHalfLine(planeSD(plane, cF), planeSD(plane, cB));
        }
        vec4 invRotation = vec4(-rotation.xyz, rotation.w);
        vec3 qF = quaternionTransform(invRotation, cF - position);
        vec3 qB = quaternionTransform(invRotation, cB - position);
        vec3 size = scale * 0.5;
        if (type == 2) {
            vec3 o = qF / size, d = (qB - qF) / size;
            return clipQuadratic(dot(d, d), dot(o, d), dot(o, o) - 1.0);
        } else if (type == 3) {
            vec2 x = clipSlab(qF.x, qB.x, size.x), y = clipSlab(qF.y, qB.y, size.y), z = clipSlab(qF.z, qB.z, size.z);
            return vec2(max(x.x, max(y.x, z.x)), min(x.y, min(y.y, z.y)));
        } else if (type == 4) {
            vec2 o = qF.xz, d = (qB - qF).xz;
            vec2 body = clipQuadratic(dot(d, d), dot(o, d), dot(o, o) - size.x * size.x);
            vec2 slab = clipSlab(qF.y, qB.y, size.y);
            return vec2(max(body.x, slab.x), min(body.y, slab.y));
        } else if (type == 5) {
            vec2 xyF = qF.xy, xyd = (qB - qF).xy;
            float hF = -size.y * qF.z, hd = -size.y * (qB.z - qF.z);
            vec2 nappe = clipHalfLine(-hF, -hF - hd);
            float a = size.x * size.x * dot(xyd, xyd) - hd * hd;
            float b = size.x * size.x * dot(xyF, xyd) - hF * hd;
            float c = size.x * size.x * dot(xyF, xyF) - hF * hF;
            if (a > 1.0e-12) {
                vec2 g = clipQuadratic(a, b, c);
                return vec2(max(g.x, nappe.x), min(g.y, nappe.y));
            }
            float disc = b * b - a * c;
            if (a < -1.0e-12 && disc >= 0.0) {
                float sq = sqrt(disc);
                float s1 = (-b + sq) / a, s2 = (-b - sq) / a;
                vec2 lo = vec2(max(-1.0e6, nappe.x), min(s1, nappe.y));
                vec2 hi = vec2(max(s2, nappe.x), min(1.0e6, nappe.y));
                return lo.x <= lo.y ? lo : hi;
            }
            vec2 lin = clipHalfLine(c, 2.0 * b + a + c);
            return vec2(max(lin.x, nappe.x), min(lin.y, nappe.y));
        }
        return vec2(1.0e6, -1.0e6);
    }

    float clipExit(const in vec3 pFront, const in vec3 pBack, const in float sStart) {
        #if defined(dClipping)
            int flag = int(floor(vClipping * 255.0 + 0.5));
        #else
            int flag = 0;
        #endif

        float s = sStart;
        for (int k = 0; k <= dClipObjectCount; ++k) {
            float sNext = s;
            #pragma unroll_loop_start
            for (int i = 0; i < dClipObjectCount; ++i) {
                if (UNROLLED_LOOP_INDEX != uSolidInteriorClip && (flag == 0 || hasBit(flag, UNROLLED_LOOP_INDEX + 1))) {
                    vec2 iv = clipObjectInterval(uClipObjectType[i], uClipObjectPosition[i], uClipObjectRotation[i], uClipObjectScale[i], uClipObjectTransform[i], pFront, pBack);
                    if (uClipObjectInvert[i]) {
                        if (iv.x > iv.y || s > iv.y) sNext = 1.0e6;
                        else if (s < iv.x) sNext = max(sNext, iv.x);
                    } else if (s > iv.x && s < iv.y) {
                        sNext = max(sNext, iv.y);
                    }
                }
            }
            #pragma unroll_loop_end
            if (sNext == s) return s;
            s = sNext;
            if (s >= 1.0) return -1.0;
        }
        return -1.0;
    }

    float clipCapExit(const in vec3 pFront, const in vec3 pBack, const in bool back) {
        float s = -1.0;
        #pragma unroll_loop_start
        for (int i = 0; i < dClipObjectCount; ++i) {
            if (UNROLLED_LOOP_INDEX == uSolidInteriorClip) {
                vec2 iv = clipObjectInterval(uClipObjectType[i], uClipObjectPosition[i], uClipObjectRotation[i], uClipObjectScale[i], uClipObjectTransform[i], pFront, pBack);
                if (iv.x < iv.y) s = uClipObjectInvert[i] != back ? iv.x : iv.y;
            }
        }
        #pragma unroll_loop_end
        return s;
    }

    float clipCapDistance(const in vec3 center) {
        float d = 0.0;
        #pragma unroll_loop_start
        for (int i = 0; i < dClipObjectCount; ++i) {
            if (UNROLLED_LOOP_INDEX == uSolidInteriorClip) {
                float sd = getSignedDistance(center, uClipObjectType[i], uClipObjectPosition[i], uClipObjectRotation[i], uClipObjectScale[i], uClipObjectTransform[i]);
                d = uClipObjectInvert[i] ? -sd : sd;
            }
        }
        #pragma unroll_loop_end
        return d;
    }

    vec3 clipCapNormal(const in vec3 center) {
        vec2 e = vec2(0.01, 0.0);
        return normalize(vec3(
            clipCapDistance(center + e.xyy) - clipCapDistance(center - e.xyy),
            clipCapDistance(center + e.yxy) - clipCapDistance(center - e.yxy),
            clipCapDistance(center + e.yyx) - clipCapDistance(center - e.yyx)
        ));
    }
#endif
`})))()}var Xn;function Zn(){return(Zn=e((()=>{Xn=`
uniform int uObjectId;
uniform int uInstanceCount;
uniform int uGroupCount;

uniform int uPickType;
uniform int uMarkingType;

uniform vec4 uCameraPlane;
uniform vec4 uLod;

#if dClipObjectCount != 0
    uniform int uClipObjectType[dClipObjectCount];
    uniform bool uClipObjectInvert[dClipObjectCount];
    uniform vec3 uClipObjectPosition[dClipObjectCount];
    uniform vec4 uClipObjectRotation[dClipObjectCount];
    uniform vec3 uClipObjectScale[dClipObjectCount];
    uniform mat4 uClipObjectTransform[dClipObjectCount];

    #if defined(dClipping)
        #if __VERSION__ == 100 || defined(dClippingType_instance) || !defined(dVaryingGroup)
            varying float vClipping;
        #else
            flat in float vClipping;
        #endif
    #endif
#endif

#if defined(dColorMarker)
    uniform vec3 uHighlightColor;
    uniform vec3 uSelectColor;
    uniform vec3 uDimColor;
    uniform float uHighlightStrength;
    uniform float uSelectStrength;
    uniform float uDimStrength;
    uniform float uMarkerAverage;
#endif

// needed by the marking pass even when per-object color marking is disabled
#if defined(dColorMarker) || defined(dRenderVariant_marking)
    uniform int uMarkerPriority;
#endif

#if defined(dNeedsMarker)
    uniform float uMarker;
    #if __VERSION__ == 100 || defined(dMarkerType_instance) || !defined(dVaryingGroup)
        varying float vMarker;
    #else
        flat in float vMarker;
    #endif
#endif

#if defined(dRenderVariant_colorDpoit)
    #define MAX_DPOIT_DEPTH 99999.0 // NOTE constant also set in TypeScript
    uniform sampler2D tDpoitDepth;
    uniform sampler2D tDpoitFrontColor;
#endif

varying vec3 vModelPosition;
varying vec3 vViewPosition;

uniform vec2 uViewOffset;
uniform float uModelScale;

uniform float uNear;
uniform float uFar;
uniform float uIsOrtho;

uniform bool uFog;
uniform float uFogNear;
uniform float uFogFar;
uniform vec3 uFogColor;

uniform float uAlpha;
uniform float uPickingAlphaThreshold;
uniform bool uTransparentBackground;

uniform bool uDoubleSided;
bool interior;

uniform float uXrayEdgeFalloff;
uniform float uCelSteps;
uniform float uExposure;

uniform mat4 uProjection;
uniform mat4 uInvView;

uniform int uRenderMask;
uniform bool uMarkingDepthTest;
uniform bool uDepthBack;

uniform sampler2D tDepth;
uniform vec2 uDrawingBufferSize;

float getDepthPacked(const in vec2 coords) {
    return unpackRGBAToDepth(texture2D(tDepth, coords));
}

float getDepth(const in vec2 coords) {
    #ifdef depthTextureSupport
        return texture2D(tDepth, coords).r;
    #else
        return unpackRGBAToDepth(texture2D(tDepth, coords));
    #endif
}

float calcDepth(const in vec3 pos) {
    vec2 clipZW = pos.z * uProjection[2].zw + uProjection[3].zw;
    return 0.5 + 0.5 * clipZW.x / clipZW.y;
}

vec3 perturbNormal(in vec3 modelPosition, in vec3 viewPosition, in vec3 normal, in float frequency, in float scale) {
    vec3 t1 = normalize(cross(normal, abs(normal.x) < 0.9 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0)));
    vec3 t2 = cross(normal, t1);
    float e = max((uIsOrtho == 1.0 ? 2.0 : 2.0 * abs(viewPosition.z)) / (uProjection[1][1] * uDrawingBufferSize.y), 0.01 / frequency);
    vec3 p = modelPosition * frequency;
    float h0 = fbm(p);
    float h1 = fbm(p + (mat3(uInvView) * t1) * (e * frequency));
    float h2 = fbm(p + (mat3(uInvView) * t2) * (e * frequency));
    return normalize(normal - scale * ((h1 - h0) * t1 + (h2 - h0) * t2) / e);
}

#ifdef dXrayShaded
    float calcXrayShadedAlpha(in float alpha, const in vec3 normal) {
        #if defined(dXrayShaded_on)
            alpha *= 1.0 - pow(abs(dot(normal, vec3(0.0, 0.0, 1.0))), uXrayEdgeFalloff);
        #elif defined(dXrayShaded_inverted)
            alpha *= pow(abs(dot(normal, vec3(0.0, 0.0, 1.0))), uXrayEdgeFalloff);
        #endif
        return clamp(alpha, 0.001, 0.999);
    }
#endif
`})))()}var Qn;function $n(){return($n=e((()=>{Qn=`
uniform mat4 uProjection, uModel, uView;
uniform vec3 uCameraPosition;
uniform vec4 uCameraPlane;

uniform int uObjectId;
uniform int uVertexCount;
uniform int uInstanceCount;
uniform int uGroupCount;
uniform vec4 uInvariantBoundingSphere;
uniform vec4 uLod;

uniform bool uDoubleSided;
uniform int uPickType;
uniform float uTime;
uniform bool uEnableAnimation;

#if dClipObjectCount != 0
    uniform int uClipObjectType[dClipObjectCount];
    uniform bool uClipObjectInvert[dClipObjectCount];
    uniform vec3 uClipObjectPosition[dClipObjectCount];
    uniform vec4 uClipObjectRotation[dClipObjectCount];
    uniform vec3 uClipObjectScale[dClipObjectCount];
    uniform mat4 uClipObjectTransform[dClipObjectCount];

    #if defined(dClipping)
        uniform vec2 uClippingTexDim;
        uniform sampler2D tClipping;
        #if __VERSION__ == 100 || defined(dClippingType_instance) || !defined(dVaryingGroup)
            varying float vClipping;
        #else
            flat out float vClipping;
        #endif
    #endif
#endif

#if defined(dNeedsMarker)
    uniform float uMarker;
    uniform vec2 uMarkerTexDim;
    uniform sampler2D tMarker;
    #if __VERSION__ == 100 || defined(dMarkerType_instance) || !defined(dVaryingGroup)
        varying float vMarker;
    #else
        flat out float vMarker;
    #endif
#endif

varying vec3 vModelPosition;
varying vec3 vViewPosition;

uniform float uModelScale;

#if defined(noNonInstancedActiveAttribs)
    // int() is needed for some Safari versions
    // see https://bugs.webkit.org/show_bug.cgi?id=244152
    #define VertexID int(gl_VertexID)
#else
    attribute float aVertex;
    #define VertexID int(aVertex)
#endif

#if defined(enabledMultiDraw)
    #define DrawID gl_DrawID
#else
    #define DrawID uDrawId
#endif

#if defined(dSegmented)
    // per-instance segment data for merged render items, see SegmentSchema
    attribute vec3 aSegment;
    attribute vec4 aSegmentSphere;
    attribute vec4 aSegmentLod;
    uniform int uLodLevel;
    #define groupInstanceIndex(inst, grp) (aSegment.y + (inst) * aSegment.x + (grp))
    #define groupIndex(grp) (aSegment.z + (grp))
    #define InvariantBoundingSphere aSegmentSphere
#else
    #define groupInstanceIndex(inst, grp) ((inst) * float(uGroupCount) + (grp))
    #define groupIndex(grp) (grp)
    #define InvariantBoundingSphere uInvariantBoundingSphere
#endif
`})))()}var er;function tr(){return(tr=e((()=>{er=`
// TODO find a better place for these convenience defines

#if defined(dRenderVariant_colorBlended) || defined(dRenderVariant_colorWboit) || defined(dRenderVariant_colorDpoit)
    #define dRenderVariant_color
#endif

#if defined(dColorType_instance) || defined(dColorType_group) || defined(dColorType_groupInstance) || defined(dColorType_vertex) || defined(dColorType_vertexInstance)
    #define dColorType_texture
#endif

#if defined(dColorType_volume) || defined(dColorType_volumeInstance)
    #define dColorType_grid
#endif

#if defined(dColorType_attribute) || defined(dColorType_texture) || defined(dColorType_grid)
    #define dColorType_varying
#endif

#if ((defined(dRenderVariant_color) || defined(dRenderVariant_tracing)) && defined(dColorMarker)) || defined(dRenderVariant_marking)
    #define dNeedsMarker
#endif

#if defined(dXrayShaded_on) || defined(dXrayShaded_inverted)
    #define dXrayShaded
#endif

#if defined(dRenderVariant_color) || defined(dRenderVariant_tracing) || ((defined(dRenderVariant_depth) || defined(dRenderVariant_pick) || defined(dRenderVariant_marking)) && defined(dXrayShaded))
    #define dNeedsNormal
#endif

#define MaskAll 0
#define MaskOpaque 1
#define MaskTransparent 2

//

#define PI 3.14159265
#define RECIPROCAL_PI 0.31830988618
#define EPSILON 1e-6
#define ONE_MINUS_EPSILON 1.0 - EPSILON
#define TWO_PI 6.2831853
#define HALF_PI 1.570796325

#define PALETTE_SCALE 16777214.0 // (1 << 24) - 2

#define saturate(a) clamp(a, 0.0, 1.0)

#if __VERSION__ == 100
    #define round(x) floor((x) + 0.5)
#endif

float intDiv(const in float a, const in float b) { return float(int(a) / int(b)); }
vec2 ivec2Div(const in vec2 a, const in vec2 b) { return vec2(ivec2(a) / ivec2(b)); }
float intMod(const in float a, const in float b) { return a - b * float(int(a) / int(b)); }
int imod(const in int a, const in int b) { return a - b * (a / b); }

float pow2(const in float x) { return x * x; }

vec3 packIntToRGB(in float value) {
    value = clamp(round(value), 0.0, 16777216.0 - 1.0) + 1.0;
    vec3 c = vec3(0.0);
    c.b = mod(value, 256.0);
    value = floor(value / 256.0);
    c.g = mod(value, 256.0);
    value = floor(value / 256.0);
    c.r = mod(value, 256.0);
    return c / 255.0;
}
float unpackRGBToInt(const in vec3 rgb) {
    return (floor(rgb.r * 255.0 + 0.5) * 256.0 * 256.0 + floor(rgb.g * 255.0 + 0.5) * 256.0 + floor(rgb.b * 255.0 + 0.5)) - 1.0;
}

vec2 packUnitIntervalToRG(const in float v) {
    vec2 enc;
    enc.xy = vec2(fract(v * 256.0), v);
    enc.y -= enc.x * (1.0 / 256.0);
    enc.xy *=  256.0 / 255.0;

    return enc;
}

float unpackRGToUnitInterval(const in vec2 enc) {
    return dot(enc, vec2(255.0 / (256.0 * 256.0), 255.0 / 256.0));
}

// occlusion factor from a packed SSAO texel, values close to 0.0 are treated as errors (no occlusion)
float unpackSsao(const in vec4 v) {
    float ssao = unpackRGToUnitInterval(v.xy);
    return ssao > 0.001 && ssao <= 0.999 ? ssao : 1.0;
}

float pack2x4(vec2 v) {
    vec2 clamped_v = clamp(v, 0.0, 1.0);
    vec2 scaled_v = floor(clamped_v * 15.0 + 0.5); // round to 0–15
    float c = scaled_v.x + scaled_v.y * 16.0;
    return c / 255.0;
}

vec2 unpack2x4(float f) {
    float c = floor(f * 255.0 + 0.5);
    float lo = mod(c, 16.0);
    float hi = floor(c / 16.0);
    return vec2(lo, hi) / 15.0;
}

vec3 screenSpaceToViewSpace(const in vec3 ssPos, const in mat4 invProjection) {
    vec4 p = vec4(ssPos * 2.0 - 1.0, 1.0);
    p = invProjection * p;
    return p.xyz / p.w;
}

const float PackUpscale = 256.0 / 255.0; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255.0 / 256.0; // 0..1 -> fraction (excluding 1)
const vec3 PackFactors = vec3(256.0 * 256.0 * 256.0, 256.0 * 256.0,  256.0);
const vec4 UnpackFactors = UnpackDownscale / vec4(PackFactors, 1.0);
const float ShiftRight8 = 1.0 / 256.0;

vec4 packDepthToRGBA(const in float v) {
    vec4 r = vec4(fract(v * PackFactors), v);
    r.yzw -= r.xyz * ShiftRight8; // tidy overflow
    return r * PackUpscale;
}
float unpackRGBAToDepth(const in vec4 v) {
    return dot(v, UnpackFactors);
}

vec4 packDepthWithAlphaToRGBA(const in float depth, const in float alpha){
    vec3 r = vec3(fract(depth * PackFactors.yz), depth);
    r.yz -= r.xy * ShiftRight8; // tidy overflow
    return vec4(r * PackUpscale, alpha);
}
vec2 unpackRGBAToDepthWithAlpha(const in vec4 v) {
    return vec2(dot(v.xyz, UnpackFactors.yzw), v.w);
}

// Green stays below 0.5 for visible fragments and above it for hidden ones.
// Opaque fragments retain the original 0/1 values; opacity uses the outer quarters.
vec4 packMarkingMask(const in float hidden, const in bool highlight, const in float fogAlpha, const in float opacity) {
    float g = hidden + (1.0 - 2.0 * hidden) * (1.0 - opacity) * 0.25;
    return vec4(0.0, g, highlight ? 1.0 : 0.0, fogAlpha);
}
float unpackMarkingOpacity(const in float g) {
    return clamp(1.0 - 4.0 * min(g, 1.0 - g), 0.0, 1.0);
}

vec4 sRGBToLinear(const in vec4 c) {
    return vec4(mix(pow(c.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), c.rgb * 0.0773993808, vec3(lessThanEqual(c.rgb, vec3(0.04045)))), c.a);
}
vec4 linearTosRGB(const in vec4 c) {
    return vec4(mix(pow(c.rgb, vec3(0.41666)) * 1.055 - vec3(0.055), c.rgb * 12.92, vec3(lessThanEqual(c.rgb, vec3(0.0031308)))), c.a);
}

float luminance(vec3 c) {
    // https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    return dot(c, W);
}

float linearizeDepth(const in float depth, const in float near, const in float far) {
    return (2.0 * near) / (far + near - depth * (far - near));
}

float perspectiveDepthToViewZ(const in float invClipZ, const in float near, const in float far) {
    return (near * far) / ((far - near) * invClipZ - far);
}

float orthographicDepthToViewZ(const in float linearClipZ, const in float near, const in float far) {
    return linearClipZ * (near - far) - near;
}

float depthToViewZ(const in float isOrtho, const in float linearClipZ, const in float near, const in float far) {
    return isOrtho == 1.0 ? orthographicDepthToViewZ(linearClipZ, near, far) : perspectiveDepthToViewZ(linearClipZ, near, far);
}

// see https://github.com/graphitemaster/normals_revisited and https://www.shadertoy.com/view/3s33zj
mat3 adjoint(const in mat4 m) {
    return mat3(
        cross(m[1].xyz, m[2].xyz),
        cross(m[2].xyz, m[0].xyz),
        cross(m[0].xyz, m[1].xyz)
    );
}

#if __VERSION__ == 100
    // transpose

    float transpose(const in float m) {
        return m;
    }

    mat2 transpose2(const in mat2 m) {
        return mat2(
            m[0][0], m[1][0],
            m[0][1], m[1][1]
        );
    }

    mat3 transpose3(const in mat3 m) {
        return mat3(
            m[0][0], m[1][0], m[2][0],
            m[0][1], m[1][1], m[2][1],
            m[0][2], m[1][2], m[2][2]
        );
    }

    mat4 transpose4(const in mat4 m) {
        return mat4(
            m[0][0], m[1][0], m[2][0], m[3][0],
            m[0][1], m[1][1], m[2][1], m[3][1],
            m[0][2], m[1][2], m[2][2], m[3][2],
            m[0][3], m[1][3], m[2][3], m[3][3]
        );
    }

    // inverse

    float inverse(const in float m) {
        return 1.0 / m;
    }

    mat2 inverse2(const in mat2 m) {
        return mat2(m[1][1],-m[0][1],
                -m[1][0], m[0][0]) / (m[0][0]*m[1][1] - m[0][1]*m[1][0]);
    }

    mat3 inverse3(const in mat3 m) {
        float a00 = m[0][0], a01 = m[0][1], a02 = m[0][2];
        float a10 = m[1][0], a11 = m[1][1], a12 = m[1][2];
        float a20 = m[2][0], a21 = m[2][1], a22 = m[2][2];

        float b01 = a22 * a11 - a12 * a21;
        float b11 = -a22 * a10 + a12 * a20;
        float b21 = a21 * a10 - a11 * a20;

        float det = a00 * b01 + a01 * b11 + a02 * b21;

        return mat3(b01, (-a22 * a01 + a02 * a21), (a12 * a01 - a02 * a11),
                    b11, (a22 * a00 - a02 * a20), (-a12 * a00 + a02 * a10),
                    b21, (-a21 * a00 + a01 * a20), (a11 * a00 - a01 * a10)) / det;
    }

    mat4 inverse4(const in mat4 m) {
        float
            a00 = m[0][0], a01 = m[0][1], a02 = m[0][2], a03 = m[0][3],
            a10 = m[1][0], a11 = m[1][1], a12 = m[1][2], a13 = m[1][3],
            a20 = m[2][0], a21 = m[2][1], a22 = m[2][2], a23 = m[2][3],
            a30 = m[3][0], a31 = m[3][1], a32 = m[3][2], a33 = m[3][3],

            b00 = a00 * a11 - a01 * a10,
            b01 = a00 * a12 - a02 * a10,
            b02 = a00 * a13 - a03 * a10,
            b03 = a01 * a12 - a02 * a11,
            b04 = a01 * a13 - a03 * a11,
            b05 = a02 * a13 - a03 * a12,
            b06 = a20 * a31 - a21 * a30,
            b07 = a20 * a32 - a22 * a30,
            b08 = a20 * a33 - a23 * a30,
            b09 = a21 * a32 - a22 * a31,
            b10 = a21 * a33 - a23 * a31,
            b11 = a22 * a33 - a23 * a32,

            det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

        return mat4(
            a11 * b11 - a12 * b10 + a13 * b09,
            a02 * b10 - a01 * b11 - a03 * b09,
            a31 * b05 - a32 * b04 + a33 * b03,
            a22 * b04 - a21 * b05 - a23 * b03,
            a12 * b08 - a10 * b11 - a13 * b07,
            a00 * b11 - a02 * b08 + a03 * b07,
            a32 * b02 - a30 * b05 - a33 * b01,
            a20 * b05 - a22 * b02 + a23 * b01,
            a10 * b10 - a11 * b08 + a13 * b06,
            a01 * b08 - a00 * b10 - a03 * b06,
            a30 * b04 - a31 * b02 + a33 * b00,
            a21 * b02 - a20 * b04 - a23 * b00,
            a11 * b07 - a10 * b09 - a12 * b06,
            a00 * b09 - a01 * b07 + a02 * b06,
            a31 * b01 - a30 * b03 - a32 * b00,
            a20 * b03 - a21 * b01 + a22 * b00) / det;
    }

    #define isNaN(x) ((x) != (x))
    #define isInf(x) ((x) == (x) + 1.0)
#else
    #define transpose2(m) transpose(m)
    #define transpose3(m) transpose(m)
    #define transpose4(m) transpose(m)

    #define inverse2(m) inverse(m)
    #define inverse3(m) inverse(m)
    #define inverse4(m) inverse(m)

    #define isNaN isnan
    #define isInf isinf
#endif

float hash(in float h) {
    return fract(sin(h) * 43758.5453123);
}

float noise(in vec3 x) {
    vec3 p = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);

    float n = p.x + p.y * 157.0 + 113.0 * p.z;
    return mix(
        mix(mix(hash(n + 0.0), hash(n + 1.0), f.x),
            mix(hash(n + 157.0), hash(n + 158.0), f.x), f.y),
        mix(mix(hash(n + 113.0), hash(n + 114.0), f.x),
            mix(hash(n + 270.0), hash(n + 271.0), f.x), f.y), f.z);
}

float fbm(in vec3 p) {
    float f = 0.0;
    f += 0.5 * noise(p);
    p *= 2.01;
    f += 0.25 * noise(p);
    p *= 2.02;
    f += 0.125 * noise(p);

    return f;
}
`})))()}var nr;function rr(){return(rr=e((()=>{nr=`
if (uLod.w == 0.0 && (uLod.x != 0.0 || uLod.y != 0.0)) {
    float d = (dot(uCameraPlane.xyz, vModelPosition) + uCameraPlane.w) / uModelScale;
    float ta = min(
        smoothstep(uLod.x, uLod.x + uLod.z, d),
        1.0 - smoothstep(uLod.y - uLod.z, uLod.y, d)
    );

    #if defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
        float at = 0.0;

        // shift by view-offset during multi-sample rendering to allow for blending
        vec2 coord = gl_FragCoord.xy + uViewOffset * 0.25;

        const mat4 thresholdMatrix = mat4(
            1.0 / 17.0,  9.0 / 17.0,  3.0 / 17.0, 11.0 / 17.0,
            13.0 / 17.0,  5.0 / 17.0, 15.0 / 17.0,  7.0 / 17.0,
            4.0 / 17.0, 12.0 / 17.0,  2.0 / 17.0, 10.0 / 17.0,
            16.0 / 17.0,  8.0 / 17.0, 14.0 / 17.0,  6.0 / 17.0
        );
        int ci = int(intMod(coord.x, 4.0));
        int ri = int(intMod(coord.y, 4.0));
        #if __VERSION__ == 100
            vec4 i = vec4(float(ci * 4 + ri));
            vec4 v = thresholdMatrix[0] * vec4(equal(i, vec4(0.0, 1.0, 2.0, 3.0))) +
                thresholdMatrix[1] * vec4(equal(i, vec4(4.0, 5.0, 6.0, 7.0))) +
                thresholdMatrix[2] * vec4(equal(i, vec4(8.0, 9.0, 10.0, 11.0))) +
                thresholdMatrix[3] * vec4(equal(i, vec4(12.0, 13.0, 14.0, 15.0)));
            at = v.x + v.y + v.z + v.w;
        #else
            at = thresholdMatrix[ci][ri];
        #endif

        if (ta < 0.99 && (ta < 0.01 || ta < at)) {
            discard;
        }
    #else
        if (ta < uPickingAlphaThreshold) {
            discard;
        }
    #endif
}
`})))()}var ir;function ar(){return(ar=e((()=>{ir=`
    // floatToRgba adapted from https://github.com/equinor/glsl-float-to-rgba
    // MIT License, Copyright (c) 2020 Equinor

    float shiftRight (float v, float amt) {
    v = floor(v) + 0.5;
    return floor(v / exp2(amt));
    }
    float shiftLeft (float v, float amt) {
        return floor(v * exp2(amt) + 0.5);
    }
    float maskLast (float v, float bits) {
        return mod(v, shiftLeft(1.0, bits));
    }
    float extractBits (float num, float from, float to) {
        from = floor(from + 0.5); to = floor(to + 0.5);
        return maskLast(shiftRight(num, from), to - from);
    }

    vec4 floatToRgba(float texelFloat, bool littleEndian) {
        if (texelFloat == 0.0) return vec4(0.0, 0.0, 0.0, 0.0);
        float sign = texelFloat > 0.0 ? 0.0 : 1.0;
        texelFloat = abs(texelFloat);
        float exponent = floor(log2(texelFloat));
        float biased_exponent = exponent + 127.0;
        float fraction = ((texelFloat / exp2(exponent)) - 1.0) * 8388608.0;
        float t = biased_exponent / 2.0;
        float last_bit_of_biased_exponent = fract(t) * 2.0;
        float remaining_bits_of_biased_exponent = floor(t);
        float byte4 = extractBits(fraction, 0.0, 8.0) / 255.0;
        float byte3 = extractBits(fraction, 8.0, 16.0) / 255.0;
        float byte2 = (last_bit_of_biased_exponent * 128.0 + extractBits(fraction, 16.0, 23.0)) / 255.0;
        float byte1 = (sign * 128.0 + remaining_bits_of_biased_exponent) / 255.0;
        return (
            littleEndian
                ? vec4(byte4, byte3, byte2, byte1)
                : vec4(byte1, byte2, byte3, byte4)
        );
    }
`})))()}var or;function sr(){return(sr=e((()=>{or=`
#if dLightCount != 0
    uniform vec3 uLightDirection[dLightCount];
    uniform vec3 uLightColor[dLightCount];
#endif
uniform vec3 uAmbientColor;

struct PhysicalMaterial {
    vec3 diffuseColor;
    float roughness;
    vec3 specularColor;
    float specularF90;
};

struct IncidentLight {
    vec3 color;
    vec3 direction;
};

struct ReflectedLight {
    vec3 directDiffuse;
    vec3 directSpecular;
    vec3 indirectDiffuse;
    vec3 indirectSpecular;
};

struct GeometricContext {
    vec3 position;
    vec3 normal;
    vec3 viewDir;
};

vec3 BRDF_Lambert(const in vec3 diffuseColor) {
    return RECIPROCAL_PI * diffuseColor;
}

vec3 F_Schlick(const in vec3 f0, const in float f90, const in float dotVH) {
    // Original approximation by Christophe Schlick '94
    // float fresnel = pow( 1.0 - dotVH, 5.0 );
    // Optimized variant (presented by Epic at SIGGRAPH '13)
    // https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
    float fresnel = exp2((-5.55473 * dotVH - 6.98316) * dotVH);
    return f0 * (1.0 - fresnel) + (f90 * fresnel);
}

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated(const in float alpha, const in float dotNL, const in float dotNV) {
    float a2 = pow2(alpha);
    float gv = dotNL * sqrt(a2 + (1.0 - a2) * pow2(dotNV));
    float gl = dotNV * sqrt(a2 + (1.0 - a2) * pow2(dotNL));
    return 0.5 / max(gv + gl, EPSILON);
}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney’s reparameterization
float D_GGX(const in float alpha, const in float dotNH) {
    float a2 = pow2(alpha);
    float denom = pow2(dotNH) * (a2 - 1.0) + 1.0; // avoid alpha = 0 with dotNH = 1
    return RECIPROCAL_PI * a2 / pow2(denom);
}

// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
vec3 BRDF_GGX(const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness) {
    float alpha = pow2(roughness); // UE4's roughness
    vec3 halfDir = normalize( lightDir + viewDir);
    float dotNL = saturate(dot(normal, lightDir));
    float dotNV = saturate(dot(normal, viewDir));
    float dotNH = saturate(dot(normal, halfDir));
    float dotVH = saturate(dot(viewDir, halfDir));
    vec3 F = F_Schlick(f0, f90, dotVH);
    float V = V_GGX_SmithCorrelated(alpha, dotNL, dotNV);
    float D = D_GGX(alpha, dotNH);
    return F * (V * D);
}

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
vec2 DFGApprox(const in vec3 normal, const in vec3 viewDir, const in float roughness) {
    float dotNV = saturate(dot(normal, viewDir));
    const vec4 c0 = vec4(-1, -0.0275, -0.572, 0.022);
    const vec4 c1 = vec4(1, 0.0425, 1.04, -0.04);
    vec4 r = roughness * c0 + c1;
    float a004 = min(r.x * r.x, exp2(-9.28 * dotNV)) * r.x + r.y;
    vec2 fab = vec2(-1.04, 1.04) * a004 + r.zw;
    return fab;
}

// Fdez-Agüera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
void computeMultiscattering(const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter) {
    vec2 fab = DFGApprox(normal, viewDir, roughness);
    vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
    float Ess = fab.x + fab.y;
    float Ems = 1.0 - Ess;
    vec3 Favg = specularColor + (1.0 - specularColor) * 0.047619; // 1/21
    vec3 Fms = FssEss * Favg / (1.0 - Ems * Favg);
    singleScatter += FssEss;
    multiScatter += Fms * Ems;
}

void RE_Direct_Physical(const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
    float dotNL = saturate(dot(geometry.normal, directLight.direction));
    vec3 irradiance = dotNL * directLight.color;
    reflectedLight.directSpecular += irradiance * BRDF_GGX(directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness);
    reflectedLight.directDiffuse += irradiance * BRDF_Lambert(material.diffuseColor);
}

void RE_IndirectDiffuse_Physical(const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert(material.diffuseColor);
}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
    // Both indirect specular and indirect diffuse light accumulate here
    vec3 singleScattering = vec3(0.0);
    vec3 multiScattering = vec3(0.0);
    vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
    computeMultiscattering(geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering);
    vec3 diffuse = material.diffuseColor * (1.0 - ( singleScattering + multiScattering));
    reflectedLight.indirectSpecular += radiance * singleScattering;
    reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
    reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
`})))()}var cr;function lr(){return(lr=e((()=>{cr=`
varying vec3 vNormal;
`})))()}var ur;function dr(){return(dr=e((()=>{ur=`
vec4 readFromTexture(const in sampler2D tex, const in float i, const in vec2 dim) {
    float x = intMod(i, dim.x);
    float y = floor(intDiv(i, dim.x));
    vec2 uv = (vec2(x, y) + 0.5) / dim;
    return texture2D(tex, uv);
}

vec4 readFromTexture(const in sampler2D tex, const in int i, const in vec2 dim) {
    int x = imod(i, int(dim.x));
    int y = i / int(dim.x);
    vec2 uv = (vec2(x, y) + 0.5) / dim;
    return texture2D(tex, uv);
}
`})))()}var fr;function pr(){return(pr=e((()=>{fr=`
    // rgbaToFloat adapted from https://github.com/ihmeuw/glsl-rgba-to-float
    // BSD 3-Clause License
    //
    // Copyright (c) 2019, Institute for Health Metrics and Evaluation All rights reserved.
    // Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
    //  - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    //  - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    //  - Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
    //
    // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
    // INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
    // IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY,
    // OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
    // OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
    // OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
    // OF THE POSSIBILITY OF SUCH DAMAGE.

    ivec4 floatsToBytes(vec4 inputFloats, bool littleEndian) {
        ivec4 bytes = ivec4(inputFloats * 255.0);
        return (
            littleEndian
                ? bytes.abgr
                : bytes
        );
    }

    // Break the four bytes down into an array of 32 bits.
    void bytesToBits(const in ivec4 bytes, out bool bits[32]) {
        for (int channelIndex = 0; channelIndex < 4; ++channelIndex) {
            float acc = float(bytes[channelIndex]);
            for (int indexInByte = 7; indexInByte >= 0; --indexInByte) {
                float powerOfTwo = exp2(float(indexInByte));
                bool bit = acc >= powerOfTwo;
                bits[channelIndex * 8 + (7 - indexInByte)] = bit;
                acc = mod(acc, powerOfTwo);
            }
        }
    }

    // Compute the exponent of the 32-bit float.
    float getExponent(bool bits[32]) {
        const int startIndex = 1;
        const int bitStringLength = 8;
        const int endBeforeIndex = startIndex + bitStringLength;
        float acc = 0.0;
        int pow2 = bitStringLength - 1;
        for (int bitIndex = startIndex; bitIndex < endBeforeIndex; ++bitIndex) {
            acc += float(bits[bitIndex]) * exp2(float(pow2--));
        }
        return acc;
    }

    // Compute the mantissa of the 32-bit float.
    float getMantissa(bool bits[32], bool subnormal) {
        const int startIndex = 9;
        const int bitStringLength = 23;
        const int endBeforeIndex = startIndex + bitStringLength;
        // Leading/implicit/hidden bit convention:
        // If the number is not subnormal (with exponent 0), we add a leading 1 digit.
        float acc = float(!subnormal) * exp2(float(bitStringLength));
        int pow2 = bitStringLength - 1;
        for (int bitIndex = startIndex; bitIndex < endBeforeIndex; ++bitIndex) {
            acc += float(bits[bitIndex]) * exp2(float(pow2--));
        }
        return acc;
    }

    // Parse the float from its 32 bits.
    float bitsToFloat(bool bits[32]) {
        float signBit = float(bits[0]) * -2.0 + 1.0;
        float exponent = getExponent(bits);
        bool subnormal = abs(exponent - 0.0) < 0.01;
        float mantissa = getMantissa(bits, subnormal);
        float exponentBias = 127.0;
        return signBit * mantissa * exp2(exponent - exponentBias - 23.0);
    }

    float rgbaToFloat(vec4 texelRGBA, bool littleEndian) {
        ivec4 rgbaBytes = floatsToBytes(texelRGBA, littleEndian);
        bool bits[32];
        bytesToBits(rgbaBytes, bits);
        return bitsToFloat(bits);
    }
`})))()}var mr;function hr(){return(hr=e((()=>{mr=`
#if defined(dSizeType_uniform)
    uniform float uSize;
#elif defined(dSizeType_attribute)
    attribute float aSize;
#elif defined(dSizeType_instance) || defined(dSizeType_group) || defined(dSizeType_groupInstance) || defined(dSizeType_vertex) || defined(dSizeType_vertexInstance)
    uniform vec2 uSizeTexDim;
    uniform sampler2D tSize;
#endif

uniform float uSizeFactor;
`})))()}var gr;function _r(){return(_r=e((()=>{gr=`
vec4 texture3dFrom1dTrilinear(const in sampler2D tex, const in vec3 pos, const in vec3 gridDim, const in vec2 texDim, const in float offset) {
    float gdYZ = gridDim.z * gridDim.y;
    float gdZ = gridDim.z;
    vec3 p0 = floor(pos * gridDim);
    vec3 p1 = ceil(pos * gridDim);
    vec3 pd = (pos * gridDim - p0) / (p1 - p0);
    vec4 s000 = readFromTexture(tex, offset + p0.z + p0.y * gdZ + p0.x * gdYZ, texDim);
    vec4 s100 = readFromTexture(tex, offset + p0.z + p0.y * gdZ + p1.x * gdYZ, texDim);
    vec4 s001 = readFromTexture(tex, offset + p1.z + p0.y * gdZ + p0.x * gdYZ, texDim);
    vec4 s101 = readFromTexture(tex, offset + p1.z + p0.y * gdZ + p1.x * gdYZ, texDim);
    vec4 s010 = readFromTexture(tex, offset + p0.z + p1.y * gdZ + p0.x * gdYZ, texDim);
    vec4 s110 = readFromTexture(tex, offset + p0.z + p1.y * gdZ + p1.x * gdYZ, texDim);
    vec4 s011 = readFromTexture(tex, offset + p1.z + p1.y * gdZ + p0.x * gdYZ, texDim);
    vec4 s111 = readFromTexture(tex, offset + p1.z + p1.y * gdZ + p1.x * gdYZ, texDim);
    vec4 s00 = mix(s000, s100, pd.x);
    vec4 s01 = mix(s001, s101, pd.x);
    vec4 s10 = mix(s010, s110, pd.x);
    vec4 s11 = mix(s011, s111, pd.x);
    vec4 s0 = mix(s00, s10, pd.y);
    vec4 s1 = mix(s01, s11, pd.y);
    return mix(s0, s1, pd.z);
}
`})))()}var vr;function yr(){return(yr=e((()=>{vr=`
vec4 texture3dFrom2dLinear(sampler2D tex, vec3 pos, vec3 gridDim, vec2 texDim) {
    float zSlice0 = floor(pos.z * gridDim.z);
    float column0 = intMod(zSlice0 * gridDim.x, texDim.x) / gridDim.x;
    float row0 = floor(intDiv(zSlice0 * gridDim.x, texDim.x));
    vec2 coord0 = (vec2(column0 * gridDim.x, row0 * gridDim.y) + (pos.xy * gridDim.xy)) / texDim;
    vec4 color0 = texture2D(tex, coord0);

    float zSlice1 = zSlice0 + 1.0;
    float column1 = intMod(zSlice1 * gridDim.x, texDim.x) / gridDim.x;
    float row1 = floor(intDiv(zSlice1 * gridDim.x, texDim.x));
    vec2 coord1 = (vec2(column1 * gridDim.x, row1 * gridDim.y) + (pos.xy * gridDim.xy)) / texDim;
    vec4 color1 = texture2D(tex, coord1);

    float delta0 = abs((pos.z * gridDim.z) - zSlice0);
    return mix(color0, color1, delta0);
}
`})))()}var br;function xr(){return(xr=e((()=>{br=`
vec4 texture3dFrom2dNearest(sampler2D tex, vec3 pos, vec3 gridDim, vec2 texDim) {
    float zSlice = floor(pos.z * gridDim.z + 0.5); // round to nearest z-slice
    float column = intMod(zSlice * gridDim.x, texDim.x) / gridDim.x;
    float row = floor(intDiv(zSlice * gridDim.x, texDim.x));
    vec2 coord = (vec2(column * gridDim.x, row * gridDim.y) + (pos.xy * gridDim.xy)) / texDim;
    return texture2D(tex, coord);
}
`})))()}var Sr;function Cr(){return(Cr=e((()=>{Sr=`
#if defined(dRenderVariant_colorWboit)
    if (uRenderMask == MaskOpaque) {
        if (preFogAlpha < 1.0) {
            discard;
        }
    } else if (uRenderMask == MaskTransparent) {
        if (preFogAlpha != 1.0 && fragmentDepth < getDepth(gl_FragCoord.xy / uDrawingBufferSize)) {
            #ifdef dTransparentBackfaces_off
                if (interior) discard;
            #endif
            float alpha = gl_FragColor.a;
            float wboitWeight = alpha * clamp(pow(1.0 - fragmentDepth, 2.0), 0.01, 1.0);
            gl_FragColor = vec4(gl_FragColor.rgb * alpha * wboitWeight, alpha);
            // extra alpha is to handle pre-multiplied alpha
            #ifndef dGeometryType_directVolume
                gl_FragData[1] = vec4((uTransparentBackground ? alpha : 1.0) * alpha * wboitWeight);
            #else
                gl_FragData[1] = vec4(alpha * alpha * wboitWeight);
            #endif
        } else {
            discard;
        }
    }
#endif
`})))()}var wr;function Tr(){return(Tr=e((()=>{wr=`
#if defined(dRenderVariant_colorDpoit)
    if (uRenderMask == MaskOpaque) {
        if (preFogAlpha < 1.0) {
            discard;
        }
    } else if (uRenderMask == MaskTransparent) {
        vec2 coords = gl_FragCoord.xy / uDrawingBufferSize;
        if (preFogAlpha != 1.0 && fragmentDepth < getDepth(coords)) {
            #ifdef dTransparentBackfaces_off
                if (interior) discard;
            #endif

            // adapted from https://github.com/tsherif/webgl2examples
            // The MIT License, Copyright 2017 Tarek Sherif, Shuai Shao

            vec2 lastDepth = texture2D(tDpoitDepth, coords).rg;
            vec4 lastFrontColor = texture2D(tDpoitFrontColor, coords);

            vec4 fragColor = gl_FragColor;

            // depth value always increases
            // so we can use MAX blend equation
            gl_FragData[2].rg = vec2(-MAX_DPOIT_DEPTH);

            // front color always increases
            // so we can use MAX blend equation
            gl_FragColor = lastFrontColor;

            // back color is separately blend afterwards each pass
            gl_FragData[1] = vec4(0.0);

            float nearestDepth = -lastDepth.x;
            float furthestDepth = lastDepth.y;
            float alphaMultiplier = 1.0 - lastFrontColor.a;

            if (fragmentDepth < nearestDepth || fragmentDepth > furthestDepth) {
                // Skip this depth since it's been peeled.
                return;
            }

            if (fragmentDepth > nearestDepth && fragmentDepth < furthestDepth) {
                // This needs to be peeled.
                // The ones remaining after MAX blended for
                // all need-to-peel will be peeled next pass.
                gl_FragData[2].rg = vec2(-fragmentDepth, fragmentDepth);
                return;
            }

            // write to back and front color buffer
            if (fragmentDepth == nearestDepth) {
                gl_FragColor.rgb += fragColor.rgb * fragColor.a * alphaMultiplier;
                gl_FragColor.a = 1.0 - alphaMultiplier * (1.0 - fragColor.a);
            } else {
                gl_FragData[1] += fragColor;
            }

        } else {
            discard;
        }
    }
#endif
`})))()}var Er;function Dr(){return(Dr=e((()=>{Er=`
precision highp float;
precision highp int;

#include common
#include read_from_texture
#include common_vert_params
#include color_vert_params
#include size_vert_params
#include common_clip
#include common_animation

uniform float uPixelRatio;
uniform vec4 uViewport;

attribute vec3 aPosition;
attribute mat4 aTransform;
attribute float aInstance;
attribute float aGroup;

void main(){
    int vertexId = VertexID;

    #include assign_group
    #include assign_color_varying
    #include assign_marker_varying
    #include assign_clipping_varying
    #include assign_position
    #include assign_size

    #ifdef dPointSizeAttenuation
        gl_PointSize = size * uPixelRatio * ((uViewport.w / 2.0) / -mvPosition.z) * 5.0;
    #else
        gl_PointSize = size * uPixelRatio;
    #endif
    gl_PointSize = max(1.0, gl_PointSize);

    gl_Position = uProjection * mvPosition;

    #include clip_instance
}
`})))()}var Or;function kr(){return(kr=e((()=>{Or=`
precision highp float;
precision highp int;

#include common
#include common_frag_params
#include color_frag_params
#include common_clip

const vec2 center = vec2(0.5);
const float radius = 0.5;

void main(){
    #include fade_lod
    #include clip_pixel

    float fragmentDepth = gl_FragCoord.z;
    #include assign_material_color

    #if defined(dPointStyle_circle)
        float dist = distance(gl_PointCoord, center);
        if (dist > radius) discard;
    #elif defined(dPointStyle_fuzzy)
        float dist = distance(gl_PointCoord, center);
        float fuzzyAlpha = 1.0 - smoothstep(0.0, radius, dist);
        if (fuzzyAlpha < 0.0001) discard;
    #endif

    #if defined(dPointStyle_fuzzy) && (defined(dRenderVariant_color) || defined(dRenderVariant_tracing) || defined(dRenderVariant_marking))
        material.a *= fuzzyAlpha;
    #endif

    #include check_transparency

    #if defined(dRenderVariant_pick)
        #include check_picking_alpha
        #ifdef requiredDrawBuffers
            gl_FragColor = vObject;
            gl_FragData[1] = vInstance;
            gl_FragData[2] = vGroup;
            gl_FragData[3] = packDepthToRGBA(fragmentDepth);
        #else
            gl_FragColor = vColor;
        #endif
    #elif defined(dRenderVariant_depth)
        gl_FragColor = material;
    #elif defined(dRenderVariant_marking)
        #include apply_marking
        gl_FragColor = material;
    #elif defined(dRenderVariant_emissive)
        gl_FragColor = material;
    #elif defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
        gl_FragColor = material;
        #include apply_marker_color

        #if defined(dRenderVariant_color)
            #include apply_fog
            #include wboit_write
            #include dpoit_write
        #elif defined(dRenderVariant_tracing)
            gl_FragData[1] = vec4(normalize(vViewPosition), emissive);
            gl_FragData[2] = vec4(material.rgb, uDensity);
        #endif
    #endif
}
`})))()}var Ar;function jr(){return(jr=e((()=>{Ar=`
precision highp float;
precision highp int;

#include common
#include read_from_texture
#include common_vert_params
#include color_vert_params
#include size_vert_params
#include common_clip
#include common_animation

uniform mat4 uModelView;
uniform mat4 uInvProjection;
uniform float uIsOrtho;
uniform bool uIsAsymmetricProjection;

uniform vec2 uTexDim;
uniform sampler2D tPositionGroup;

attribute mat4 aTransform;
attribute float aInstance;

varying float vRadius;
varying vec3 vPoint;
varying vec3 vPointViewPosition;

/**
 * Bounding rectangle of a clipped, perspective-projected 3D Sphere.
 * Michael Mara, Morgan McGuire. 2013
 *
 * Specialization by Arseny Kapoulkine, MIT License Copyright (c) 2018
 * https://github.com/zeux/niagara
 *
 * Only works for for symmetric projections.
 */
void sphereProjection(const in vec3 p, const in float r, const in vec2 mapping) {
    vec3 pr = p * r;
    float pzr2 = p.z * p.z - r * r;

    float vx = sqrt(p.x * p.x + pzr2);
    float minx = ((vx * p.x - pr.z) / (vx * p.z + pr.x)) * uProjection[0][0];
    float maxx = ((vx * p.x + pr.z) / (vx * p.z - pr.x)) * uProjection[0][0];

    float vy = sqrt(p.y * p.y + pzr2);
    float miny = ((vy * p.y - pr.z) / (vy * p.z + pr.y)) * uProjection[1][1];
    float maxy = ((vy * p.y + pr.z) / (vy * p.z - pr.y)) * uProjection[1][1];

    gl_Position.xy = vec2(maxx + minx, maxy + miny) * -0.5;
    gl_Position.xy -= mapping * vec2(maxx - minx, maxy - miny) * 0.5;
    gl_Position.xy *= gl_Position.w;
}

const mat4 D = mat4(
    1.0, 0.0, 0.0, 0.0,
    0.0, 1.0, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, -1.0
);

/**
 * Compute point size and center using the technique described in:
 * "GPU-Based Ray-Casting of Quadratic Surfaces" http://dl.acm.org/citation.cfm?id=2386396
 * by Christian Sigg, Tim Weyrich, Mario Botsch, Markus Gross.
 */
void quadraticProjection(const in vec3 position, const in float radius, const in vec2 mapping, const in mat4 transform) {
    vec2 xbc, ybc;

    mat4 T = mat4(
        radius, 0.0, 0.0, 0.0,
        0.0, radius, 0.0, 0.0,
        0.0, 0.0, radius, 0.0,
        position.x, position.y, position.z, 1.0
    );

    mat4 R = transpose4(uProjection * uModelView * transform * T);
    float A = dot(R[3], D * R[3]);
    float B = -2.0 * dot(R[0], D * R[3]);
    float C = dot(R[0], D * R[0]);
    xbc[0] = (-B - sqrt(B * B - 4.0 * A * C)) / (2.0 * A);
    xbc[1] = (-B + sqrt(B * B - 4.0 * A * C)) / (2.0 * A);
    float sx = abs(xbc[0] - xbc[1]) * 0.5;

    A = dot(R[3], D * R[3]);
    B = -2.0 * dot(R[1], D * R[3]);
    C = dot(R[1], D * R[1]);
    ybc[0] = (-B - sqrt(B * B - 4.0 * A * C)) / (2.0 * A);
    ybc[1] = (-B + sqrt(B * B - 4.0 * A * C)) / (2.0 * A);
    float sy = abs(ybc[0] - ybc[1]) * 0.5;

    gl_Position.xy = vec2(0.5 * (xbc.x + xbc.y), 0.5 * (ybc.x + ybc.y));
    gl_Position.xy -= mapping * vec2(sx, sy);
    gl_Position.xy *= gl_Position.w;
}

void main(void){
    vec2 mapping = vec2(1.0, 1.0); // vertices 2 and 5
    #if __VERSION__ == 100
        int m = imod(VertexID, 6);
    #else
        int m = VertexID % 6;
    #endif
    if (m == 0) {
        mapping = vec2(-1.0, 1.0);
    } else if (m == 1 || m == 3) {
        mapping = vec2(-1.0, -1.0);
    } else if (m == 4) {
        mapping = vec2(1.0, -1.0);
    }

    int vertexId = VertexID / 6;

    vec4 positionGroup = readFromTexture(tPositionGroup, vertexId, uTexDim);
    vec3 position = positionGroup.rgb;
    float group = positionGroup.a;

    position = applyWiggle(position, group, aInstance);
    mat4 transform = applyTumble(aTransform, aInstance, float(uObjectId));

    #include assign_color_varying
    #include assign_marker_varying
    #include assign_clipping_varying
    #include assign_size

    vRadius = size * uModelScale;

    vec4 position4 = vec4(position, 1.0);
    vModelPosition = (uModel * transform * position4).xyz; // for clipping in frag shader

    float d;
    if (uLod.w != 0.0 && (uLod.x != 0.0 || uLod.y != 0.0)) {
        // members of a merged item can have different scales for the same lod level (sphere-count dependent)
        #if defined(dSegmented)
            float lodScale = uLodLevel == 0 ? aSegmentLod.x : (uLodLevel == 1 ? aSegmentLod.y : (uLodLevel == 2 ? aSegmentLod.z : aSegmentLod.w));
        #else
            float lodScale = uLod.w;
        #endif
        if (uModelScale != 1.0) {
            vRadius *= lodScale;
        } else {
            d = (dot(uCameraPlane.xyz, vModelPosition) + uCameraPlane.w) / uModelScale;
            float f = min(
                smoothstep(uLod.x, uLod.x + uLod.z, d),
                1.0 - smoothstep(uLod.y - uLod.z, uLod.y, d)
            ) * lodScale;
            vRadius *= f;
        }
    }

    vec4 mvPosition = uModelView * transform * position4;

    #ifdef dApproximate
        vec4 mvCorner = vec4(mvPosition.xyz, 1.0);
        mvCorner.xy += mapping * vRadius;
        gl_Position = uProjection * mvCorner;
    #else
        if (uIsOrtho == 1.0) {
            vec4 mvCorner = vec4(mvPosition.xyz, 1.0);
            mvCorner.xy += mapping * vRadius;
            gl_Position = uProjection * mvCorner;
        } else if (uIsAsymmetricProjection) {
            gl_Position = uProjection * vec4(mvPosition.xyz, 1.0);
            quadraticProjection(position, vRadius / uModelScale, mapping, transform);
        } else {
            gl_Position = uProjection * vec4(mvPosition.xyz, 1.0);
            sphereProjection(mvPosition.xyz, vRadius, mapping);
        }
    #endif

    vec4 vPoint4 = uInvProjection * gl_Position;
    vPoint = vPoint4.xyz / vPoint4.w;
    vPointViewPosition = -mvPosition.xyz / mvPosition.w;

    if (gl_Position.z < -gl_Position.w) {
        mvPosition.z -= 2.0 * vRadius; // avoid clipping
        gl_Position.z = (uProjection * vec4(mvPosition.xyz, 1.0)).z;
    }

    if (uModelScale == 1.0) {
        if (uLod.w != 0.0 && (uLod.x != 0.0 || uLod.y != 0.0)) {
            if (d < uLod.x || d > uLod.y) {
                // move out of [ -w, +w ] to 'discard' in vert shader
                gl_Position.z = 2.0 * gl_Position.w;
            }
        }
    }

    #if defined(dClipPrimitive) && !defined(dClipVariant_instance) && dClipObjectCount != 0
        if (clipTest(vModelPosition / uModelScale)) {
            // move out of [ -w, +w ] to 'discard' in vert shader
            gl_Position.z = 2.0 * gl_Position.w;
        }
    #else
        #include clip_instance
    #endif
}
`})))()}var Mr;function Nr(){return(Nr=e((()=>{Mr=`
precision highp float;
precision highp int;

#define bumpEnabled

#include common
#include common_frag_params
#include color_frag_params
#include light_frag_params
#include common_clip

uniform float uAlphaThickness;

uniform vec4 uInteriorColor;
uniform vec4 uInteriorSubstance;

varying float vRadius;
varying vec3 vPoint;
varying vec3 vPointViewPosition;

#ifdef dSolidInterior
    const bool solidInterior = true;
#else
    const bool solidInterior = false;
#endif

bool isCap = false;

bool SphereImpostor(out vec3 modelPos, out vec3 cameraPos, out vec3 cameraNormal, out bool interior, out float fragmentDepth){
    vec3 cameraSpherePos = -vPointViewPosition;

    vec3 rayOrigin = mix(vec3(0.0, 0.0, 0.0), vPoint, uIsOrtho);
    vec3 rayDirection = mix(normalize(vPoint), vec3(0.0, 0.0, 1.0), uIsOrtho);
    vec3 cameraSphereDir = mix(cameraSpherePos, rayOrigin - cameraSpherePos, uIsOrtho);

    float B = dot(rayDirection, cameraSphereDir);
    float det = B * B + vRadius * vRadius - dot(cameraSphereDir, cameraSphereDir);

    if (det < 0.0) return false;

    float sqrtDet = sqrt(det);
    float posT = mix(B + sqrtDet, B - sqrtDet, uIsOrtho);
    float negT = mix(B - sqrtDet, B + sqrtDet, uIsOrtho);

    #if defined(dRenderVariant_depth)
        if (uDepthBack) {
            // back-depth pass wants the farthest point that is not clipped
            cameraPos = rayDirection * posT + rayOrigin;
            modelPos = (uInvView * vec4(cameraPos, 1.0)).xyz;
            cameraNormal = -normalize(cameraPos - cameraSpherePos);
            interior = true;
            #if defined(dSolidInterior) && !defined(dClipPrimitive) && defined(dClipVariant_pixel) && dClipObjectCount != 0
                vec3 frontModelPos = (uInvView * vec4(rayDirection * negT + rayOrigin, 1.0)).xyz;
                float s = clipExit(modelPos / uModelScale, frontModelPos / uModelScale, 0.0);
                if (s < 0.0) return false;
                if (s > 0.0) {
                    cameraPos = rayDirection * mix(posT, negT, s) + rayOrigin;
                    modelPos = (uInvView * vec4(cameraPos, 1.0)).xyz;
                    cameraNormal = -normalize(clipNormal(modelPos / uModelScale) * mat3(uInvView));
                    isCap = true;
                }
            #endif
            fragmentDepth = calcDepth(cameraPos);
            return fragmentDepth > 0.0;
        }
    #endif

    cameraPos = rayDirection * negT + rayOrigin;
    modelPos = (uInvView * vec4(cameraPos, 1.0)).xyz;
    fragmentDepth = calcDepth(cameraPos);
    float frontDepth = fragmentDepth;
    vec3 frontModelPos = modelPos;

    bool objectClipped = false;

    #if !defined(dClipPrimitive) && defined(dClipVariant_pixel) && dClipObjectCount != 0
        if (clipTest(modelPos / uModelScale)) {
            objectClipped = true;
            fragmentDepth = -1.0;
        }
    #endif

    if (fragmentDepth > 0.0) {
        cameraNormal = normalize(cameraPos - cameraSpherePos);
        interior = false;
        return true;
    } else if (uDoubleSided || solidInterior) {
        cameraPos = rayDirection * posT + rayOrigin;
        modelPos = (uInvView * vec4(cameraPos, 1.0)).xyz;
        fragmentDepth = calcDepth(cameraPos);
        cameraNormal = -normalize(cameraPos - cameraSpherePos);
        interior = true;
        if (fragmentDepth > 0.0) {
            #ifdef dSolidInterior
                float nearT = - (uNear + rayOrigin.z) / rayDirection.z;
                float sNear = frontDepth > 0.0 ? 0.0 : clamp((nearT - negT) / (posT - negT), 0.0, 1.0);
                #if !defined(dClipPrimitive) && defined(dClipVariant_pixel) && dClipObjectCount != 0
                    float sCap = clipExit(frontModelPos / uModelScale, modelPos / uModelScale, sNear);
                    if (sCap < 0.0) return false;
                #else
                    float sCap = sNear;
                #endif
                if (sCap == sNear && frontDepth <= 0.0) {
                    fragmentDepth = 0.0 + (0.0000001 / vRadius);
                    cameraNormal = -mix(normalize(vPoint), vec3(0.0, 0.0, -1.0), uIsOrtho);
                    cameraPos = rayDirection * nearT + rayOrigin;
                    modelPos = (uInvView * vec4(cameraPos, 1.0)).xyz;
                }
                #if !defined(dClipPrimitive) && defined(dClipVariant_pixel) && dClipObjectCount != 0
                    else {
                        cameraPos = rayDirection * mix(negT, posT, sCap) + rayOrigin;
                        modelPos = (uInvView * vec4(cameraPos, 1.0)).xyz;
                        fragmentDepth = calcDepth(cameraPos) + (0.0000001 / vRadius);
                        cameraNormal = -normalize(clipNormal(modelPos / uModelScale) * mat3(uInvView));
                        isCap = true;
                    }
                #endif
            #endif
            return true;
        }
    }

    return false;
}

void main(void){
    vec3 cameraNormal;
    float fragmentDepth;

    #ifdef dApproximate
        vec3 pointDir = -vPointViewPosition - vPoint;
        if (dot(pointDir, pointDir) > vRadius * vRadius) discard;
        vec3 vViewPosition = -vPointViewPosition;
        fragmentDepth = gl_FragCoord.z;
        #if !defined(dIgnoreLight) || defined(dXrayShaded) || defined(dRenderVariant_tracing)
            pointDir.z -= cos(length(pointDir)) * vRadius * 0.5;
            cameraNormal = -normalize(pointDir);
        #endif
        interior = false;
    #else
        vec3 modelPos;
        vec3 cameraPos;
        bool hit = SphereImpostor(modelPos, cameraPos, cameraNormal, interior, fragmentDepth);
        if (!hit) discard;

        if (fragmentDepth < 0.0) discard;
        if (fragmentDepth > 1.0) discard;

        gl_FragDepthEXT = fragmentDepth;

        vec3 vModelPosition = modelPos;
        vec3 vViewPosition = cameraPos;
    #endif

    #include fade_lod
    #if !defined(dClipPrimitive) && defined(dClipVariant_pixel) && dClipObjectCount != 0
        if (!isCap) {
            #include clip_pixel
        }
    #endif

    #ifdef dNeedsNormal
        vec3 normal = -cameraNormal;
    #endif

    #include assign_material_color

    #if defined(dRenderVariant_color) || defined(dRenderVariant_tracing) || defined(dRenderVariant_marking)
        #if defined(dRenderVariant_marking)
        if (material.a < 1.0 && uAlphaThickness > 0.0) {
        #else
        if (uRenderMask == MaskTransparent && uAlphaThickness > 0.0) {
        #endif
            material.a *= min(1.0, vRadius / (uAlphaThickness * uModelScale));
        }
    #endif

    #include check_transparency

    #if defined(dRenderVariant_pick)
        #include check_picking_alpha
        #ifdef requiredDrawBuffers
            gl_FragColor = vObject;
            gl_FragData[1] = vInstance;
            gl_FragData[2] = vGroup;
            gl_FragData[3] = packDepthToRGBA(fragmentDepth);
        #else
            gl_FragColor = vColor;
        #endif
    #elif defined(dRenderVariant_depth)
        gl_FragColor = material;
    #elif defined(dRenderVariant_marking)
        #include apply_marking
        gl_FragColor = material;
    #elif defined(dRenderVariant_emissive)
        gl_FragColor = material;
    #elif defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
        #include apply_interior_color
        #include apply_light_color
        #include apply_marker_color

        #if defined(dRenderVariant_color)
            #include apply_fog
            #include wboit_write
            #include dpoit_write
        #elif defined(dRenderVariant_tracing)
            gl_FragData[1] = vec4(normal, emissive);
            gl_FragData[2] = vec4(material.rgb, uDensity);
        #endif
    #endif
}
`})))()}var Pr;function Fr(){return(Fr=e((()=>{Pr=`
precision highp float;
precision highp int;

#include common
#include read_from_texture
#include common_vert_params
#include color_vert_params
#include size_vert_params
#include common_clip
#include common_animation

uniform mat4 uModelView;

attribute mat4 aTransform;
attribute float aInstance;
attribute float aGroup;

attribute vec3 aMapping;
attribute vec3 aStart;
attribute vec3 aEnd;
attribute float aScale;
attribute float aCap;
attribute float aColorMode;

varying mat4 vTransform;
varying vec3 vStart;
varying vec3 vEnd;
varying float vSize;
varying float vCap;

uniform float uIsOrtho;
uniform vec3 uCameraDir;

void main() {
    int vertexId = VertexID;

    #include assign_group
    #include assign_color_varying
    #include assign_marker_varying
    #include assign_clipping_varying
    #include assign_size

    mat4 transform = applyTumble(aTransform, aInstance, float(uObjectId));
    vec3 wigStart = applyWiggle(aStart, aGroup, aInstance);
    vec3 wigEnd = applyWiggle(aEnd, aGroup, aInstance);
    mat4 modelTransform = uModel * transform;

    vTransform = modelTransform;
    vStart = (modelTransform * vec4(wigStart, 1.0)).xyz;
    vEnd = (modelTransform * vec4(wigEnd, 1.0)).xyz;
    vSize = size * aScale * uModelScale;
    vCap = aCap;

    vModelPosition = (vStart + vEnd) * 0.5;
    vec3 camDir = -mix(normalize(vModelPosition - uCameraPosition), uCameraDir, uIsOrtho);
    vec3 dir = vEnd - vStart;
    float f = aMapping.x > 0.0 ? 1.0 : 0.0;
    // ensure cylinder 'dir' is pointing towards the camera
    if(dot(camDir, dir) < 0.0) {
        dir = -dir;
        f = 1.0 - f;
    }

    vec3 left = cross(camDir, dir);
    vec3 up = cross(left, dir);
    left = vSize * normalize(left);
    up = vSize * normalize(up);

    // move vertex in object-space from center to corner
    vModelPosition += aMapping.x * dir + aMapping.y * left + aMapping.z * up;

    vec4 mvPosition = uView * vec4(vModelPosition, 1.0);
    vViewPosition = mvPosition.xyz;
    gl_Position = uProjection * mvPosition;

    if (gl_Position.z < -gl_Position.w) {
        mvPosition.z -= 2.0 * (length(vEnd - vStart) + vSize); // avoid clipping
        gl_Position.z = (uProjection * mvPosition).z;
    }

    #if defined(dDualColor) && defined(dRenderVariant_color) && (defined(dColorType_group) || defined(dColorType_groupInstance))
        // dual-color mixing
        // - for aColorMode between 0 and 1 use aColorMode to interpolate
        // - for aColorMode == 2 do nothing, i.e., use vColor
        // - for aColorMode == 3 use position on cylinder axis to interpolate
        if (aColorMode <= 1.0){
            vColor.rgb = mix(vColor.rgb, color2.rgb, aColorMode);
        } else if (aColorMode == 3.0) {
            vColor.rgb = mix(vColor.rgb, color2.rgb, mix(-0.25, 1.25, f / 1.5));
        }
    #endif

    #include clip_instance
}
`})))()}var Ir;function Lr(){return(Lr=e((()=>{Ir=`
precision highp float;
precision highp int;

#define bumpEnabled

uniform mat4 uView;

varying mat4 vTransform;
varying vec3 vStart;
varying vec3 vEnd;
varying float vSize;
varying float vCap;

uniform vec3 uCameraDir;
uniform vec3 uCameraPosition;

uniform vec4 uInteriorColor;
uniform vec4 uInteriorSubstance;

#include common
#include common_frag_params
#include color_frag_params
#include light_frag_params
#include common_clip

#ifdef dSolidInterior
    const bool solidInterior = true;
#else
    const bool solidInterior = false;
#endif

bool isCap = false;

#ifdef dSolidInterior
    bool solidInteriorCap(
        in vec3 rayOrigin, in vec3 rayDir, in float frontT, in float t,
        in float frontDepth, in bool objectClipped, in vec3 frontModelPosition,
        inout vec3 cameraNormal, inout vec3 modelPosition, inout vec3 viewPosition, inout float fragmentDepth
    ){
        vec3 cameraRayOrigin = (uView * vec4(rayOrigin, 1.0)).xyz;
        vec3 cameraRayDir = (uView * vec4(rayDir, 0.0)).xyz;
        float nearT = - (uNear + cameraRayOrigin.z) / cameraRayDir.z;
        float sNear = frontDepth > 0.0 ? 0.0 : clamp((nearT - frontT) / (t - frontT), 0.0, 1.0);
        #if defined(dClipVariant_pixel) && dClipObjectCount != 0
            float sCap = objectClipped || frontDepth <= 0.0 ? clipExit(frontModelPosition / uModelScale, modelPosition / uModelScale, sNear) : sNear;
            if (sCap < 0.0) return false;
        #else
            float sCap = sNear;
        #endif
        if (sCap == sNear && frontDepth <= 0.0) {
            fragmentDepth = 0.0 + (0.0000002 / vSize);
            cameraNormal = -rayDir;
            viewPosition = cameraRayOrigin + nearT * cameraRayDir;
            modelPosition = (uInvView * vec4(viewPosition, 1.0)).xyz;
        }
        #if defined(dClipVariant_pixel) && dClipObjectCount != 0
            else if (objectClipped || frontDepth <= 0.0) {
                modelPosition = mix(frontModelPosition, modelPosition, sCap);
                viewPosition = (uView * vec4(modelPosition, 1.0)).xyz;
                fragmentDepth = calcDepth(viewPosition) + (0.0000002 / vSize);
                cameraNormal = -clipNormal(modelPosition / uModelScale);
                isCap = true;
            }
        #endif
        return true;
    }

    // back-depth pass: move the exit point towards the entry until it is not clipped
    bool solidInteriorBackCap(in vec3 entryPosition, inout vec3 cameraNormal, inout vec3 modelPosition, inout vec3 viewPosition, inout float fragmentDepth) {
        #if defined(dClipVariant_pixel) && dClipObjectCount != 0
            float s = clipExit(modelPosition / uModelScale, entryPosition / uModelScale, 0.0);
            if (s < 0.0) return false;
            if (s > 0.0) {
                modelPosition = mix(modelPosition, entryPosition, s);
                viewPosition = (uView * vec4(modelPosition, 1.0)).xyz;
                fragmentDepth = calcDepth(viewPosition);
                cameraNormal = -clipNormal(modelPosition / uModelScale);
                isCap = true;
            }
        #endif
        return fragmentDepth > 0.0;
    }
#endif

// adapted from https://www.shadertoy.com/view/4lcSRn
// The MIT License, Copyright 2016 Inigo Quilez
bool CylinderImpostor(
    in vec3 rayOrigin, in vec3 rayDir,
    in vec3 start, in vec3 end, in float radius,
    out vec3 cameraNormal, out bool interior,
    out vec3 modelPosition, out vec3 viewPosition, out float fragmentDepth
){
    vec3 ba = end - start;
    vec3 oc = rayOrigin - start;

    float baba = dot(ba, ba);
    float bard = dot(ba, rayDir);
    float baoc = dot(ba, oc);

    float k2 = baba - bard * bard;
    float k1 = baba * dot(oc, rayDir) - baoc * bard;
    float k0 = baba * dot(oc, oc) - baoc * baoc - radius * radius * baba;

    float h = k1 * k1 - k2 * k0;
    if (h < 0.0) return false;

    bool topCap = (vCap > 0.9 && vCap < 1.1) || vCap >= 2.9;
    bool bottomCap = (vCap > 1.9 && vCap < 2.1) || vCap >= 2.9;

    #ifdef dSolidInterior
        bool topInterior = !topCap;
        bool bottomInterior = !bottomCap;
        topCap = true;
        bottomCap = true;
    #else
        bool topInterior = false;
        bool bottomInterior = false;
    #endif

    bool clipped = false;
    bool objectClipped = false;
    float frontT = 0.0;
    float frontDepth = 1.0;
    vec3 frontModelPosition = rayOrigin;

    #if defined(dRenderVariant_depth)
        // back-depth pass wants the farthest intersection
        bool depthBack = uDepthBack;
    #else
        bool depthBack = false;
    #endif

    // body outside
    h = sqrt(h);
    float t = (-k1 - h) / k2;
    float y = baoc + t * bard;
    #ifdef dSolidInterior
        // entry into the closed cylinder: body entry clamped to the end-cap slab
        vec3 entryPosition = rayOrigin + (abs(bard) > 0.0 ? max(t, min(-baoc / bard, (baba - baoc) / bard)) : t) * rayDir;
    #endif
    if (!depthBack && y > 0.0 && y < baba) {
        interior = false;
        cameraNormal = (oc + t * rayDir - ba * y / baba) / radius;
        modelPosition = rayOrigin + t * rayDir;
        viewPosition = (uView * vec4(modelPosition, 1.0)).xyz;
        fragmentDepth = calcDepth(viewPosition);
        frontT = t;
        frontDepth = fragmentDepth;
        frontModelPosition = modelPosition;
        #if defined(dClipVariant_pixel) && dClipObjectCount != 0
            if (clipTest(modelPosition / uModelScale)) {
                objectClipped = true;
                fragmentDepth = -1.0;
            }
        #endif
        if (fragmentDepth > 0.0) return true;
        clipped = true;
    }

    if (!clipped && !depthBack) {
        if (topCap && y < 0.0) {
            // top cap
            t = -baoc / bard;
            if (abs(k1 + k2 * t) < h) {
                interior = topInterior;
                cameraNormal = -ba / baba;
                modelPosition = rayOrigin + t * rayDir;
                viewPosition = (uView * vec4(modelPosition, 1.0)).xyz;
                fragmentDepth = calcDepth(viewPosition);
                frontT = t;
                frontDepth = fragmentDepth;
                frontModelPosition = modelPosition;
                #if defined(dClipVariant_pixel) && dClipObjectCount != 0
                    if (clipTest(modelPosition / uModelScale)) {
                        objectClipped = true;
                        fragmentDepth = -1.0;
                    }
                #endif
                if (fragmentDepth > 0.0) {
                    #ifdef dSolidInterior
                        if (interior) cameraNormal = -rayDir;
                    #endif
                    #if defined(dClipVariant_pixel) && dClipObjectCount != 0
                        return true;
                    #else
                        return !interior;
                    #endif
                }
            }
        } else if (bottomCap && y >= 0.0) {
            // bottom cap
            t = (baba - baoc) / bard;
            if (abs(k1 + k2 * t) < h) {
                interior = bottomInterior;
                cameraNormal = ba / baba;
                modelPosition = rayOrigin + t * rayDir;
                viewPosition = (uView * vec4(modelPosition, 1.0)).xyz;
                fragmentDepth = calcDepth(viewPosition);
                frontT = t;
                frontDepth = fragmentDepth;
                frontModelPosition = modelPosition;
                #if defined(dClipVariant_pixel) && dClipObjectCount != 0
                    if (clipTest(modelPosition / uModelScale)) {
                        objectClipped = true;
                        fragmentDepth = -1.0;
                    }
                #endif
                if (fragmentDepth > 0.0) {
                    #ifdef dSolidInterior
                        if (interior) cameraNormal = -rayDir;
                    #endif
                    #if defined(dClipVariant_pixel) && dClipObjectCount != 0
                        return true;
                    #else
                        return !interior;
                    #endif
                }
            }
        }
    }

    if (uDoubleSided || solidInterior || depthBack) {
        // body inside
        h = -h;
        t = (-k1 - h) / k2;
        y = baoc + t * bard;
        if (y > 0.0 && y < baba) {
            interior = true;
            cameraNormal = -(oc + t * rayDir - ba * y / baba) / radius;
            modelPosition = rayOrigin + t * rayDir;
            viewPosition = (uView * vec4(modelPosition, 1.0)).xyz;
            fragmentDepth = calcDepth(viewPosition);
            if (fragmentDepth > 0.0) {
                #ifdef dSolidInterior
                    if (depthBack) {
                        if (!solidInteriorBackCap(entryPosition, cameraNormal, modelPosition, viewPosition, fragmentDepth)) return false;
                    } else if (!solidInteriorCap(rayOrigin, rayDir, frontT, t, frontDepth, objectClipped, frontModelPosition, cameraNormal, modelPosition, viewPosition, fragmentDepth)) return false;
                #endif
                return true;
            }
        }

        if (topCap && y < 0.0) {
            // top cap
            t = -baoc / bard;
            if (abs(k1 + k2 * t) < -h) {
                interior = true;
                cameraNormal = ba / baba;
                modelPosition = rayOrigin + t * rayDir;
                viewPosition = (uView * vec4(modelPosition, 1.0)).xyz;
                fragmentDepth = calcDepth(viewPosition);
                if (fragmentDepth > 0.0) {
                    #ifdef dSolidInterior
                        if (depthBack) {
                            if (!solidInteriorBackCap(entryPosition, cameraNormal, modelPosition, viewPosition, fragmentDepth)) return false;
                        } else if (!solidInteriorCap(rayOrigin, rayDir, frontT, t, frontDepth, objectClipped, frontModelPosition, cameraNormal, modelPosition, viewPosition, fragmentDepth)) return false;
                    #endif
                    return true;
                }
            }
        } else if (bottomCap && y >= 0.0) {
            // bottom cap
            t = (baba - baoc) / bard;
            if (abs(k1 + k2 * t) < -h) {
                interior = true;
                cameraNormal = -ba / baba;
                modelPosition = rayOrigin + t * rayDir;
                viewPosition = (uView * vec4(modelPosition, 1.0)).xyz;
                fragmentDepth = calcDepth(viewPosition);
                if (fragmentDepth > 0.0) {
                    #ifdef dSolidInterior
                        if (depthBack) {
                            if (!solidInteriorBackCap(entryPosition, cameraNormal, modelPosition, viewPosition, fragmentDepth)) return false;
                        } else if (!solidInteriorCap(rayOrigin, rayDir, frontT, t, frontDepth, objectClipped, frontModelPosition, cameraNormal, modelPosition, viewPosition, fragmentDepth)) return false;
                    #endif
                    return true;
                }
            }
        }
    }

    return false;
}

void main() {
    vec3 rayOrigin = vModelPosition;
    vec3 rayDir = mix(normalize(vModelPosition - uCameraPosition), uCameraDir, uIsOrtho);

    vec3 cameraNormal;
    vec3 modelPosition;
    vec3 viewPosition;
    float fragmentDepth;
    bool hit = CylinderImpostor(rayOrigin, rayDir, vStart, vEnd, vSize, cameraNormal, interior, modelPosition, viewPosition, fragmentDepth);
    if (!hit) discard;

    if (fragmentDepth < 0.0) discard;
    if (fragmentDepth > 1.0) discard;

    gl_FragDepthEXT = fragmentDepth;

    vec3 vViewPosition = viewPosition;
    vec3 vModelPosition = modelPosition;

    #include fade_lod
    if (!isCap) {
        #include clip_pixel
    }

    #ifdef dNeedsNormal
        mat3 normalMatrix = adjoint(uView);
        vec3 normal = normalize(normalMatrix * -normalize(cameraNormal));
    #endif

    #include assign_material_color
    #include check_transparency

    #if defined(dRenderVariant_pick)
        #include check_picking_alpha
        #ifdef requiredDrawBuffers
            gl_FragColor = vObject;
            gl_FragData[1] = vInstance;
            gl_FragData[2] = vGroup;
            gl_FragData[3] = packDepthToRGBA(fragmentDepth);
        #else
            gl_FragColor = vColor;
        #endif
    #elif defined(dRenderVariant_depth)
        gl_FragColor = material;
    #elif defined(dRenderVariant_marking)
        #include apply_marking
        gl_FragColor = material;
    #elif defined(dRenderVariant_emissive)
        gl_FragColor = material;
    #elif defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
        #include apply_interior_color
        #include apply_light_color
        #include apply_marker_color

        #if defined(dRenderVariant_color)
            #include apply_fog
            #include wboit_write
            #include dpoit_write
        #elif defined(dRenderVariant_tracing)
            gl_FragData[1] = vec4(normal, emissive);
            gl_FragData[2] = vec4(material.rgb, uDensity);
        #endif
    #endif
}
`})))()}var Rr;function zr(){return(zr=e((()=>{Rr=`
precision highp float;
precision highp int;

#include common
#include read_from_texture
#include common_vert_params
#include color_vert_params
#include size_vert_params
#include common_clip

uniform mat4 uModelView;

attribute vec3 aPosition;
attribute vec2 aMapping;
attribute float aDepth;
attribute vec2 aTexCoord;
attribute mat4 aTransform;
attribute float aInstance;
attribute float aGroup;

uniform float uOffsetX;
uniform float uOffsetY;
uniform float uOffsetZ;

uniform float uIsOrtho;
uniform float uPixelRatio;
uniform vec4 uViewport;
uniform mat4 uInvHeadRotation;
uniform bool uHasHeadRotation;
uniform mat4 uModelViewEye;
uniform mat4 uInvModelViewEye;
uniform bool uHasEyeCamera;

varying vec2 vTexCoord;

void main(void){
    int vertexId = VertexID;

    #include assign_group
    #include assign_color_varying
    #include assign_marker_varying
    #include assign_clipping_varying
    #include assign_size

    vTexCoord = aTexCoord;

    float scale = uModelScale;

    float offsetX = uOffsetX * scale;
    float offsetY = uOffsetY * scale;
    float offsetZ = (uOffsetZ + aDepth * 0.95) * scale;

    vec4 position4 = vec4(aPosition, 1.0);
    vec4 mvPosition = uHasEyeCamera
         ? uModelViewEye * aTransform * position4
         : uModelView * aTransform * position4;

    vModelPosition = (uModel * aTransform * position4).xyz; // for clipping in frag shader

    // TODO
    // #ifdef FIXED_SIZE
    //     if (ortho) {
    //         scale /= pixelRatio * ((uViewport.w / 2.0) / -uCameraPosition.z) * 0.1;
    //     } else {
    //         scale /= pixelRatio * ((uViewport.w / 2.0) / -mvPosition.z) * 0.1;
    //     }
    // #endif

    vec4 mvCenter = vec4(mvPosition.xyz, 1.0);

    if (vTexCoord.x == 10.0) { // indicates background plane
        // move a bit to the back, taking distance to camera into account to avoid z-fighting
        offsetZ -= 0.001 * distance(uCameraPosition, (uProjection * mvCenter).xyz);
    }

    // apply Z offset in view space
    if (!uHasEyeCamera) {
        if (uIsOrtho == 1.0) {
            mvCenter.z += offsetZ;
        } else {
            mvCenter.xyz += normalize(-mvCenter.xyz) * offsetZ;
        }
    }

    if (uHasEyeCamera) {
        mvCenter = uModelView * uInvModelViewEye * mvCenter;
    }

    // project center to clip space
    vec4 clip = uProjection * mvCenter;

    // compute corner offset in screen-space units
    vec2 cornerOffset = aMapping * size * scale;
    cornerOffset.x += offsetX;
    cornerOffset.y += offsetY;

    if (uHasHeadRotation) {
        vec3 rotatedOffset = (uInvHeadRotation * vec4(cornerOffset, 0.0, 0.0)).xyz;
        clip += uProjection * vec4(rotatedOffset, 0.0);
    } else {
        // apply offset in clip space to avoid perspective distortion on the quad
        clip.xy += vec2(uProjection[0][0], uProjection[1][1]) * cornerOffset;
    }

    gl_Position = clip;

    vViewPosition = -mvCenter.xyz;

    #include clip_instance
}
`})))()}var Br;function Vr(){return(Vr=e((()=>{Br=`
precision highp float;
precision highp int;

#include common
#include common_frag_params
#include color_frag_params
#include common_clip

uniform sampler2D tFont;

uniform vec3 uBorderColor;
uniform float uBorderWidth;
uniform vec3 uBackgroundColor;
uniform float uBackgroundOpacity;

varying vec2 vTexCoord;

void main(){
    #include fade_lod
    #include clip_pixel

    float fragmentDepth = gl_FragCoord.z;

    // determine if this is a background or glyph fragment
    bool isBackground = vTexCoord.x > 1.0;

    // discard background for pick/marking/emissive, but keep it in depth
    #if !defined(dRenderVariant_color) && !defined(dRenderVariant_tracing) && !defined(dRenderVariant_depth)
        if (isBackground) discard;
    #endif

    // SDF test for glyph fragments — discard pixels outside glyph+border
    float rawSdf = 0.0;
    if (!isBackground) {
        rawSdf = texture2D(tFont, vTexCoord).a;
        float sdf = rawSdf + min(uBorderWidth, 0.49); // clamp to avoid exceeding max SDF range
        if (sdf < 0.5) discard;
    }

    #ifdef enabledFragDepth
        gl_FragDepthEXT = fragmentDepth;
    #endif

    // background writes its own opacity into depth alpha; glyphs stay opaque
    #define dHasMaterialOpacity
    float materialOpacity = isBackground ? uBackgroundOpacity : 1.0;
    #include assign_material_color

    if (isBackground) {
        #if defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
            material = vec4(uBackgroundColor, uBackgroundOpacity * material.a);
        #endif
    } else {
        #if defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
            if (uBorderWidth > 0.0 && rawSdf < 0.5) {
                material.xyz = uBorderColor;
            } else {
                // push text fragments forward in depth so they render in front of border
                #ifdef enabledFragDepth
                    gl_FragDepthEXT = fragmentDepth - 0.0001;
                #endif
            }
        #endif
    }

    #include check_transparency

    #if defined(dRenderVariant_pick)
        #include check_picking_alpha
        #ifdef requiredDrawBuffers
            gl_FragColor = vObject;
            gl_FragData[1] = vInstance;
            gl_FragData[2] = vGroup;
            gl_FragData[3] = packDepthToRGBA(fragmentDepth);
        #else
            gl_FragColor = vColor;
        #endif
    #elif defined(dRenderVariant_depth)
        gl_FragColor = material;
    #elif defined(dRenderVariant_marking)
        #include apply_marking
        gl_FragColor = material;
    #elif defined(dRenderVariant_emissive)
        gl_FragColor = material;
    #elif defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
        gl_FragColor = material;
        #include apply_marker_color

        #if defined(dRenderVariant_color)
            #include apply_fog
            #include wboit_write
            #include dpoit_write
        #elif defined(dRenderVariant_tracing)
            gl_FragData[1] = vec4(-normalize(vViewPosition), emissive);
            gl_FragData[2] = vec4(material.rgb, uDensity);
        #endif
    #endif
}
`})))()}var Hr;function Ur(){return(Ur=e((()=>{Hr=`
precision highp float;
precision highp int;

#include common
#include read_from_texture
#include common_vert_params
#include color_vert_params
#include size_vert_params
#include common_clip
#include common_animation

uniform float uPixelRatio;
uniform vec4 uViewport;

attribute mat4 aTransform;
attribute float aInstance;
attribute float aGroup;

attribute vec2 aMapping;
attribute vec3 aStart;
attribute vec3 aEnd;

void trimSegment(const in vec4 start, inout vec4 end) {
    // trim end segment so it terminates between the camera plane and the near plane
    // conservative estimate of the near plane
    float a = uProjection[2][2];  // 3rd entry in 3rd column
    float b = uProjection[3][2];  // 3rd entry in 4th column
    float nearEstimate = -0.5 * b / a;
    float alpha = (nearEstimate - start.z) / (end.z - start.z);
    end.xyz = mix(start.xyz, end.xyz, alpha);
}

void main(){
    float aspect = uViewport.z / uViewport.w;
    int vertexId = VertexID;

    #include assign_group
    #include assign_color_varying
    #include assign_marker_varying
    #include assign_clipping_varying
    #include assign_size

    mat4 transform = applyTumble(aTransform, aInstance, float(uObjectId));
    vec3 wigStart = applyWiggle(aStart, group, aInstance);
    vec3 wigEnd = applyWiggle(aEnd, group, aInstance);
    mat4 modelView = uView * uModel * transform;

    // camera space
    vec4 start = modelView * vec4(wigStart, 1.0);
    vec4 end = modelView * vec4(wigEnd, 1.0);

    // assign position
    vec4 position4 = vec4((aMapping.y < 0.5) ? wigStart : wigEnd, 1.0);
    vViewPosition = (aMapping.y < 0.5) ? start.xyz : end.xyz;

    vModelPosition = (uModel * transform * position4).xyz; // for clipping in frag shader

    // special case for perspective projection, and segments that terminate either in, or behind, the camera plane
    // clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
    // but we need to perform ndc-space calculations in the shader, so we must address this issue directly
    // perhaps there is a more elegant solution -- WestLangley
    bool perspective = (uProjection[2][3] == -1.0); // 4th entry in the 3rd column
    if (perspective) {
        if (start.z < 0.0 && end.z >= 0.0) {
            trimSegment(start, end);
        } else if (end.z < 0.0 && start.z >= 0.0) {
            trimSegment(end, start);
        }
    }

    // clip space
    vec4 clipStart = uProjection * start;
    vec4 clipEnd = uProjection * end;

    // ndc space
    vec2 ndcStart = clipStart.xy / clipStart.w;
    vec2 ndcEnd = clipEnd.xy / clipEnd.w;

    // direction
    vec2 dir = ndcEnd - ndcStart;

    // account for clip-space aspect ratio
    dir.x *= aspect;
    dir = normalize(dir);

    // perpendicular to dir
    vec2 offset = vec2(dir.y, - dir.x);

    // undo aspect ratio adjustment
    dir.x /= aspect;
    offset.x /= aspect;

    // sign flip
    if (aMapping.x < 0.0) offset *= -1.0;

    // calculate linewidth
    float linewidth;
    #ifdef dLineSizeAttenuation
        linewidth = size * uPixelRatio * ((uViewport.w / 2.0) / -start.z) * 5.0;
    #else
        linewidth = size * uPixelRatio;
    #endif
    linewidth = max(1.0, linewidth);

    // adjust for linewidth
    offset *= linewidth;

    // adjust for clip-space to screen-space conversion
    offset /= uViewport.w;

    // select end
    vec4 clip = (aMapping.y < 0.5) ? clipStart : clipEnd;

    // back to clip space
    offset *= clip.w;
    clip.xy += offset;
    gl_Position = clip;

    #include clip_instance
}
`})))()}var Wr;function Gr(){return(Gr=e((()=>{Wr=`
precision highp float;
precision highp int;

#include common
#include common_frag_params
#include color_frag_params
#include common_clip

void main(){
    #include fade_lod
    #include clip_pixel

    float fragmentDepth = gl_FragCoord.z;
    #include assign_material_color
    #include check_transparency

    #if defined(dRenderVariant_pick)
        #include check_picking_alpha
        #ifdef requiredDrawBuffers
            gl_FragColor = vObject;
            gl_FragData[1] = vInstance;
            gl_FragData[2] = vGroup;
            gl_FragData[3] = packDepthToRGBA(fragmentDepth);
        #else
            gl_FragColor = vColor;
        #endif
    #elif defined(dRenderVariant_depth)
        gl_FragColor = material;
    #elif defined(dRenderVariant_marking)
        #include apply_marking
        gl_FragColor = material;
    #elif defined(dRenderVariant_emissive)
        gl_FragColor = material;
    #elif defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
        gl_FragColor = material;
        #include apply_marker_color

        #if defined(dRenderVariant_color)
            #include apply_fog
            #include wboit_write
            #include dpoit_write
        #elif defined(dRenderVariant_tracing)
            gl_FragData[1] = vec4(normalize(vViewPosition), emissive);
            gl_FragData[2] = vec4(material.rgb, uDensity);
        #endif
    #endif
}
`})))()}var Kr;function qr(){return(qr=e((()=>{Kr=`
precision highp float;
precision highp int;
precision highp sampler2D;

#include common
#include read_from_texture
#include common_vert_params
#include color_vert_params
#include common_clip
#include common_animation
#include texture3d_from_2d_linear

#ifdef dGeometryType_textureMesh
    uniform vec2 uGeoTexDim;
    uniform sampler2D tPosition;
    uniform sampler2D tGroup;
    uniform sampler2D tNormal;
#else
    attribute vec3 aPosition;
    attribute float aGroup;
    attribute vec3 aNormal;
#endif
attribute mat4 aTransform;
attribute float aInstance;

varying vec3 vNormal;

#ifdef dSolidInterior
    uniform int uSolidInteriorPass;
#endif

void main(){
    int vertexId = VertexID;

    #include assign_group
    #include assign_marker_varying
    #include assign_clipping_varying
    #include assign_position

    #ifdef dSolidInterior
        if (uSolidInteriorPass != 0) {
            gl_Position.z = min(gl_Position.z, gl_Position.w * 0.9999);
        }
    #endif

    #include assign_color_varying
    #include clip_instance

    #ifdef dGeometryType_textureMesh
        vec3 normal = readFromTexture(tNormal, vertexId, uGeoTexDim).xyz;
    #else
        vec3 normal = aNormal;
    #endif
    mat3 normalMatrix = adjoint(modelView);
    vec3 transformedNormal = normalize(normalMatrix * normalize(normal));
    #if defined(dFlipSided)
        if (!uDoubleSided) { // TODO checking uDoubleSided should not be required, ASR
            transformedNormal = -transformedNormal;
        }
    #endif
    vNormal = transformedNormal;
}
`})))()}var Jr;function Yr(){return(Yr=e((()=>{Jr=`
precision highp float;
precision highp int;

#define bumpEnabled

#include common
#include common_frag_params
#include color_frag_params
#include light_frag_params
#include normal_frag_params
#include common_clip

uniform vec4 uInteriorColor;
uniform vec4 uInteriorSubstance;

#ifdef dSolidInterior
    uniform int uSolidInteriorPass;
#endif

void main() {
    #ifdef dSolidInterior
        float fragmentDepth = gl_FragCoord.z;
        bool capPass = uSolidInteriorPass != 0;
        vec3 viewPosition = vViewPosition;
        vec3 modelPosition = vModelPosition;
        #ifdef enabledFragDepth
            if (capPass) {
                float nearZ = -uNear * 1.0001;
                vec3 nearPosition = vec3(mix(vViewPosition.xy * (nearZ / vViewPosition.z), vViewPosition.xy, uIsOrtho), nearZ);
                float s = 0.0;
                #if dClipObjectCount != 0
                    if (uSolidInteriorClip >= 0) {
                        // exempt parts are not cut by this clip object, so they neither count nor fill
                        if (clipIgnored(uSolidInteriorClip)) discard;
                        s = clipCapExit((uInvView * vec4(nearPosition, 1.0)).xyz / uModelScale, vModelPosition / uModelScale, uDepthBack);
                        if (s < 0.0 || s > 1.0) discard;
                    }
                #endif
                if (uSolidInteriorPass == 2) {
                    gl_FragColor = vec4(0.0);
                    gl_FragDepthEXT = fragmentDepth;
                    return;
                }
                viewPosition = mix(nearPosition, vViewPosition, s);
                modelPosition = (uInvView * vec4(viewPosition, 1.0)).xyz;
                fragmentDepth = mix(calcDepth(viewPosition), gl_FragCoord.z, 0.0001);
                if (fragmentDepth > 1.0) discard;
            }
            gl_FragDepthEXT = fragmentDepth;
        #endif
        #if defined(dClipVariant_pixel) && dClipObjectCount != 0
            if (clipTest(modelPosition / uModelScale)) discard;
        #endif
        vec3 vViewPosition = viewPosition;
        vec3 vModelPosition = modelPosition;
        // after the mark pass returned (it needs every face) and at the cap position
        #include fade_lod
    #else
        #include fade_lod
        #include clip_pixel
        float fragmentDepth = gl_FragCoord.z;
    #endif

    interior = !gl_FrontFacing;
    #ifdef dSolidInterior
        // the fill may draw front faces (reflected instances), a cap is always interior
        #if defined(dRenderVariant_depth)
            // a cap is the visible surface, so the depth passes must not discard it as interior
            if (capPass) interior = false;
        #else
            if (capPass) interior = true;
        #endif
    #endif

    #ifdef dNeedsNormal
        #if defined(dFlatShaded)
            vec3 fdx = dFdx(vViewPosition);
            vec3 fdy = dFdy(vViewPosition);
            vec3 normal = -normalize(cross(fdx,fdy));
        #else
            vec3 normal = -normalize(vNormal);
            if (uDoubleSided) normal *= float(gl_FrontFacing) * 2.0 - 1.0;
        #endif

        #if defined(dFlipSided)
            normal *= -1.0;
        #endif

        #ifdef dSolidInterior
            if (capPass) {
                normal = vec3(0.0, 0.0, -1.0);
                #if dClipObjectCount != 0
                    if (uSolidInteriorClip >= 0) normal = normalize(clipCapNormal(vModelPosition / uModelScale) * mat3(uInvView));
                #endif
            }
        #endif
    #endif

    #include assign_material_color
    #include check_transparency

    #if defined(dRenderVariant_pick)
        #include check_picking_alpha
        #ifdef requiredDrawBuffers
            gl_FragColor = vObject;
            gl_FragData[1] = vInstance;
            #ifdef dSolidInterior
                // 16777214 is PickingId.Null, the cap picks the whole instance
                gl_FragData[2] = capPass ? vec4(packIntToRGB(16777214.0), 1.0) : vGroup;
            #else
                gl_FragData[2] = vGroup;
            #endif
            gl_FragData[3] = packDepthToRGBA(fragmentDepth);
        #else
            gl_FragColor = vColor;
            #ifdef dSolidInterior
                if (capPass && uPickType == 3) gl_FragColor = vec4(packIntToRGB(16777214.0), 1.0);
            #endif
        #endif
    #elif defined(dRenderVariant_depth)
        gl_FragColor = material;
    #elif defined(dRenderVariant_marking)
        #include apply_marking
        gl_FragColor = material;
    #elif defined(dRenderVariant_emissive)
        gl_FragColor = material;
    #elif defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
        #include apply_interior_color
        #include apply_light_color
        #include apply_marker_color

        #if defined(dRenderVariant_color)
            #include apply_fog
            #include wboit_write
            #include dpoit_write
        #elif defined(dRenderVariant_tracing)
            gl_FragData[1] = vec4(normal, emissive);
            gl_FragData[2] = vec4(material.rgb, uDensity);
        #endif
    #endif
}
`})))()}var Xr;function Zr(){return(Zr=e((()=>{Xr=`
precision highp float;

attribute vec3 aPosition;
attribute mat4 aTransform;
attribute float aInstance;

uniform mat4 uModel;
uniform mat4 uModelView;
uniform mat4 uProjection;
uniform vec4 uInvariantBoundingSphere;
uniform float uModelScale;

varying vec3 vModelPosition;
varying float vInstance;
varying vec4 vBoundingSphere;
varying mat4 vTransform;

uniform vec3 uBboxSize;
uniform vec3 uBboxMin;
uniform vec3 uBboxMax;
uniform vec3 uGridDim;
uniform mat4 uTransform;

uniform mat4 uUnitToCartn;

void main() {
    vec4 unitCoord = vec4(aPosition + vec3(0.5), 1.0);
    vec4 mvPosition = uModelView * aTransform * uUnitToCartn * unitCoord;

    vModelPosition = (uModel * aTransform * uUnitToCartn * unitCoord).xyz;
    vInstance = aInstance;
    vBoundingSphere = vec4(
        (uModel * aTransform * vec4(uInvariantBoundingSphere.xyz, 1.0)).xyz,
        uModelScale * uInvariantBoundingSphere.w
    );
    vTransform = aTransform;

    gl_Position = uProjection * mvPosition;

    // move z position to near clip plane (but not too close to get precision issues)
    gl_Position.z = gl_Position.w - 0.01;
}
`})))()}var Qr;function $r(){return($r=e((()=>{Qr=`
precision highp float;
precision highp int;

#include common
#include light_frag_params

#if dClipObjectCount != 0
    uniform int uClipObjectType[dClipObjectCount];
    uniform bool uClipObjectInvert[dClipObjectCount];
    uniform vec3 uClipObjectPosition[dClipObjectCount];
    uniform vec4 uClipObjectRotation[dClipObjectCount];
    uniform vec3 uClipObjectScale[dClipObjectCount];
    uniform mat4 uClipObjectTransform[dClipObjectCount];
#endif
#include common_clip

#include read_from_texture
#include texture3d_from_1d_trilinear
#include texture3d_from_2d_nearest
#include texture3d_from_2d_linear

uniform mat4 uProjection, uTransform, uModelView, uModel, uView;
uniform vec3 uCameraDir;
uniform float uModelScale;

uniform sampler2D tDepth;
uniform vec2 uDrawingBufferSize;

varying vec3 vModelPosition;
varying float vInstance;
varying vec4 vBoundingSphere;
varying mat4 vTransform;

uniform mat4 uInvView;
uniform vec3 uGridDim;
uniform vec3 uBboxSize;
uniform sampler2D tTransferTex;
uniform float uTransferScale;
uniform float uStepScale;
uniform float uJumpLength;

uniform int uObjectId;
uniform int uVertexCount;
uniform int uInstanceCount;
uniform int uGroupCount;

#if defined(dColorMarker)
    uniform vec3 uHighlightColor;
    uniform vec3 uSelectColor;
    uniform vec3 uDimColor;
    uniform float uHighlightStrength;
    uniform float uSelectStrength;
    uniform float uDimStrength;
    uniform int uMarkerPriority;
    uniform float uMarkerAverage;

    uniform float uMarker;
    uniform vec2 uMarkerTexDim;
    uniform sampler2D tMarker;
#endif

uniform float uMetalness;
uniform float uRoughness;
uniform float uEmissive;

// Density value to estimate object thickness
uniform float uDensity;

uniform bool uFog;
uniform float uFogNear;
uniform float uFogFar;
uniform vec3 uFogColor;

uniform float uAlpha;
uniform bool uTransparentBackground;
uniform float uXrayEdgeFalloff;
uniform float uCelSteps;
uniform float uExposure;

uniform int uRenderMask;

uniform float uNear;
uniform float uFar;
uniform float uIsOrtho;

uniform vec3 uCellDim;
uniform vec3 uCameraPosition;
uniform mat4 uCartnToUnit;

#if __VERSION__ != 100
    // for webgl1 this is given as a 'define'
    uniform int uMaxSteps;
#endif

#if defined(dGridTexType_2d)
    precision highp sampler2D;
    uniform sampler2D tGridTex;
    uniform vec3 uGridTexDim;
#elif defined(dGridTexType_3d)
    precision highp sampler3D;
    uniform sampler3D tGridTex;
#endif

#if defined(dColorType_uniform)
    uniform vec3 uColor;
#elif defined(dColorType_texture)
    uniform vec2 uColorTexDim;
    uniform sampler2D tColor;
#endif

#ifdef dOverpaint
    #if defined(dOverpaintType_groupInstance) || defined(dOverpaintType_vertexInstance)
        uniform vec2 uOverpaintTexDim;
        uniform sampler2D tOverpaint;
    #endif
#endif

#ifdef dUsePalette
    uniform vec2 uPaletteDomain;
    uniform sampler2D tPalette;
#endif

#if defined(dGridTexType_2d)
    vec4 textureVal(vec3 pos) {
        return texture3dFrom2dLinear(tGridTex, pos + (vec3(0.5, 0.5, 0.0) / uGridDim), uGridDim, uGridTexDim.xy);
    }
    vec4 textureGroup(vec3 pos) {
        return texture3dFrom2dNearest(tGridTex, pos + (vec3(0.5, 0.5, 0.0) / uGridDim), uGridDim, uGridTexDim.xy);
    }
#elif defined(dGridTexType_3d)
    vec4 textureVal(vec3 pos) {
        return texture(tGridTex, pos + (vec3(0.5) / uGridDim));
    }
    vec4 textureGroup(vec3 pos) {
        return texelFetch(tGridTex, ivec3(pos * uGridDim), 0);
    }
#endif

float calcDepth(const in vec3 pos) {
    vec2 clipZW = pos.z * uProjection[2].zw + uProjection[3].zw;
    return 0.5 + 0.5 * clipZW.x / clipZW.y;
}

float transferFunction(float value) {
    return texture2D(tTransferTex, vec2(value, 0.0)).a;
}

float getDepth(const in vec2 coords) {
    #ifdef depthTextureSupport
        return texture2D(tDepth, coords).r;
    #else
        return unpackRGBAToDepth(texture2D(tDepth, coords));
    #endif
}

const float gradOffset = 0.5;

vec3 v3m4(vec3 p, mat4 m) {
    return (m * vec4(p, 1.0)).xyz;
}

float preFogAlphaBlended = 0.0;

vec4 raymarch(vec3 startLoc, vec3 step, vec3 rayDir) {
    mat3 normalMatrix = adjoint(uModelView * vTransform);
    mat4 cartnToUnit = uCartnToUnit * inverse4(vTransform);
    #if defined(dClipVariant_pixel) && dClipObjectCount != 0
        mat4 modelTransform = uModel * vTransform * uTransform;
    #endif
    mat4 modelViewTransform = uModelView * vTransform * uTransform;

    vec3 scaleVol = vec3(1.0) / uGridDim;
    vec3 pos = startLoc;
    vec4 cell;
    float prevValue = -1.0;
    float value = 0.0;
    vec4 src = vec4(0.0);
    vec4 dst = vec4(0.0);
    float fragmentDepth;

    vec3 posMin = vec3(0.0);
    vec3 posMax = vec3(1.0) - vec3(1.0) / uGridDim;

    vec3 unitPos;

    vec3 nextPos;
    float nextValue;

    vec4 material;
    vec4 overpaint;
    float metalness = uMetalness;
    float roughness = uRoughness;
    float emissive = uEmissive;

    vec3 gradient = vec3(1.0);
    vec3 dx = vec3(gradOffset * scaleVol.x, 0.0, 0.0);
    vec3 dy = vec3(0.0, gradOffset * scaleVol.y, 0.0);
    vec3 dz = vec3(0.0, 0.0, gradOffset * scaleVol.z);

    float maxDist = min(vBoundingSphere.w * 2.0, uFar - uNear);
    float maxDistSq = maxDist * maxDist;

    for (int i = 0; i < uMaxSteps; ++i) {
        // break when beyond bounding-sphere or far-plane
        vec3 distVec = startLoc - pos;
        if (dot(distVec, distVec) > maxDistSq) break;

        unitPos = v3m4(pos / uModelScale, cartnToUnit);

        // continue when outside of grid
        if (unitPos.x > posMax.x || unitPos.y > posMax.y || unitPos.z > posMax.z ||
            unitPos.x < posMin.x || unitPos.y < posMin.y || unitPos.z < posMin.z
        ) {
            prevValue = value;
            pos += step;
            continue;
        }

        cell = textureVal(unitPos);
        value = cell.a; // current voxel value

        if (uJumpLength > 0.0 && value < 0.01) {
            nextPos = pos + rayDir * uJumpLength;
            nextValue = textureVal(v3m4(nextPos / uModelScale, cartnToUnit)).a;
            if (nextValue < 0.01) {
                prevValue = nextValue;
                pos = nextPos;
                continue;
            }
        }

        vec4 mvPosition = modelViewTransform * vec4(unitPos * uGridDim, 1.0);
        if (calcDepth(mvPosition.xyz) > getDepth(gl_FragCoord.xy / uDrawingBufferSize))
            break;

        #if defined(dClipVariant_pixel) && dClipObjectCount != 0
            vec3 modelPosition = v3m4(unitPos * uGridDim, modelTransform);
            if (clipTest(modelPosition)) {
                prevValue = value;
                pos += step;
                continue;
            }
        #endif

        vec3 vViewPosition = mvPosition.xyz;
        material.a = transferFunction(value);

        #ifdef dPackedGroup
            float group = unpackRGBToInt(textureGroup(floor(unitPos * uGridDim + 0.5) / uGridDim).rgb);
        #else
            vec3 g = floor(unitPos * uGridDim + 0.5);
            // note that we swap x and z because the texture is flipped around y
            #if defined(dAxisOrder_012)
                float group = g.z + g.y * uGridDim.z + g.x * uGridDim.z * uGridDim.y; // 210
            #elif defined(dAxisOrder_021)
                float group = g.y + g.z * uGridDim.y + g.x * uGridDim.y * uGridDim.z; // 120
            #elif defined(dAxisOrder_102)
                float group = g.z + g.x * uGridDim.z + g.y * uGridDim.z * uGridDim.x; // 201
            #elif defined(dAxisOrder_120)
                float group = g.x + g.z * uGridDim.x + g.y * uGridDim.x * uGridDim.z; // 021
            #elif defined(dAxisOrder_201)
                float group = g.y + g.x * uGridDim.y + g.z * uGridDim.y * uGridDim.x; // 102
            #elif defined(dAxisOrder_210)
                float group = g.x + g.y * uGridDim.x + g.z * uGridDim.x * uGridDim.y; // 012
            #endif
        #endif

        #if defined(dColorType_direct) && defined(dUsePalette)
            float paletteValue = (value - uPaletteDomain[0]) / (uPaletteDomain[1] - uPaletteDomain[0]);
            material.rgb = texture2D(tPalette, vec2(clamp(paletteValue, 0.0, 1.0), 0.0)).rgb;
        #elif defined(dColorType_uniform)
            material.rgb = uColor;
        #elif defined(dColorType_instance)
            material.rgb = readFromTexture(tColor, vInstance, uColorTexDim).rgb;
        #elif defined(dColorType_group)
            material.rgb = readFromTexture(tColor, group, uColorTexDim).rgb;
        #elif defined(dColorType_groupInstance)
            material.rgb = readFromTexture(tColor, vInstance * float(uGroupCount) + group, uColorTexDim).rgb;
        #elif defined(dColorType_vertex)
            material.rgb = texture3dFrom1dTrilinear(tColor, unitPos, uGridDim, uColorTexDim, 0.0).rgb;
        #elif defined(dColorType_vertexInstance)
            material.rgb = texture3dFrom1dTrilinear(tColor, unitPos, uGridDim, uColorTexDim, vInstance * float(uVertexCount)).rgb;
        #endif

        #ifdef dOverpaint
            #if defined(dOverpaintType_groupInstance)
                overpaint = readFromTexture(tOverpaint, vInstance * float(uGroupCount) + group, uOverpaintTexDim);
            #elif defined(dOverpaintType_vertexInstance)
                overpaint = texture3dFrom1dTrilinear(tOverpaint, unitPos, uGridDim, uOverpaintTexDim, vInstance * float(uVertexCount));
            #endif

            material.rgb = mix(material.rgb, overpaint.rgb, overpaint.a);
        #endif

        #if defined(dIgnoreLight)
            gl_FragColor.rgb = material.rgb;
        #else
            if (material.a >= 0.01) {
                #ifdef dPackedGroup
                    // compute gradient by central differences
                    gradient.x = textureVal(unitPos - dx).a - textureVal(unitPos + dx).a;
                    gradient.y = textureVal(unitPos - dy).a - textureVal(unitPos + dy).a;
                    gradient.z = textureVal(unitPos - dz).a - textureVal(unitPos + dz).a;
                #else
                    gradient = cell.xyz * 2.0 - 1.0;
                #endif
                vec3 normal = -normalize(normalMatrix * normalize(gradient));
                #include apply_light_color
            } else {
                gl_FragColor.rgb = material.rgb;
            }
        #endif

        gl_FragColor.a = material.a * uAlpha * uTransferScale;

        #if defined(dColorMarker)
            float marker = uMarker;
            if (uMarker == -1.0) {
                marker = readFromTexture(tMarker, vInstance * float(uGroupCount) + group, uMarkerTexDim).a;
                marker = floor(marker * 255.0 + 0.5); // rounding required to work on some cards on win
            }
        #endif
        #include apply_marker_color

        preFogAlphaBlended = (1.0 - preFogAlphaBlended) * gl_FragColor.a + preFogAlphaBlended;
        fragmentDepth = calcDepth(mvPosition.xyz);
        #include apply_fog

        src = gl_FragColor;

        if (!uTransparentBackground || !uFog) {
            // done in 'apply_fog' otherwise
            src.rgb *= src.a;
        }
        dst = (1.0 - dst.a) * src + dst; // standard blending

        // break if the color is opaque enough
        if (dst.a > 0.95)
            break;

        pos += step;
    }

    return dst;
}

// TODO: support float texture for higher precision values???
// TODO: support clipping exclusion texture support

void main() {
    #if defined(dRenderVariant_tracing) || defined(dRenderVariant_emissive)
        discard;
    #else
        if (gl_FrontFacing)
            discard;

        vec3 rayDir = mix(normalize(vModelPosition - uCameraPosition), uCameraDir, uIsOrtho);
        vec3 step = rayDir * uStepScale * uModelScale;

        float boundingSphereNear = distance(vBoundingSphere.xyz, uCameraPosition) - vBoundingSphere.w;
        float d = max(uNear, boundingSphereNear) - mix(0.0, distance(vModelPosition, uCameraPosition), uIsOrtho);
        vec3 start = mix(uCameraPosition, vModelPosition, uIsOrtho) + (d * rayDir);
        gl_FragColor = raymarch(start, step, rayDir);

        float fragmentDepth = calcDepth((uView * vec4(start, 1.0)).xyz);
        float preFogAlpha = clamp(preFogAlphaBlended, 0.0, 1.0);
        #include wboit_write
    #endif
}
`})))()}var ei;function ti(){return(ti=e((()=>{ei=`
precision highp float;
precision highp int;

#include common
#include common_vert_params

attribute vec3 aPosition;
attribute vec2 aUv;
attribute mat4 aTransform;
attribute float aInstance;

varying vec2 vUv;
varying float vInstance;
varying vec3 vPosition;

void main() {
    int vertexId = VertexID;

    #include assign_position

    vUv = aUv;
    vInstance = aInstance;
    vPosition = aPosition;
}
`})))()}var ni;function ri(){return(ri=e((()=>{ni=`
precision highp float;
precision highp int;

#include common
#include read_from_texture
#include common_frag_params
#include common_clip

uniform float uEmissive;

// Density value to estimate object thickness
uniform float uDensity;

#if defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
    #ifdef dOverpaint
        #if defined(dOverpaintType_instance) || defined(dOverpaintType_groupInstance)
            varying vec4 vOverpaint;
            uniform vec2 uOverpaintTexDim;
            uniform sampler2D tOverpaint;
        #endif
        uniform float uOverpaintStrength;
    #endif
#endif

#if defined(dRenderVariant_color) || defined(dRenderVariant_tracing) || defined(dRenderVariant_emissive)
    #ifdef dEmissive
        #if defined(dEmissiveType_instance) || defined(dEmissiveType_groupInstance)
            varying float vEmissive;
            uniform vec2 uEmissiveTexDim;
            uniform sampler2D tEmissive;
        #endif
        uniform float uEmissiveStrength;
    #endif
#endif

#ifdef dTransparency
    #if defined(dTransparencyType_instance) || defined(dTransparencyType_groupInstance)
        varying float vTransparency;
        uniform vec2 uTransparencyTexDim;
        uniform sampler2D tTransparency;
    #endif
    uniform float uTransparencyStrength;
#endif

uniform vec2 uImageTexDim;
uniform sampler2D tImageTex;
uniform sampler2D tGroupTex;
uniform sampler2D tValueTex;

uniform vec2 uMarkerTexDim;
uniform sampler2D tMarker;

varying vec2 vUv;
varying float vInstance;
varying vec3 vPosition;

#ifdef dUsePalette
    uniform sampler2D tPalette;
    uniform vec3 uPaletteDefault;
#endif

uniform int uTrimType;
uniform vec3 uTrimCenter;
uniform vec4 uTrimRotation;
uniform vec3 uTrimScale;
uniform mat4 uTrimTransform;

uniform float uIsoLevel;

#if defined(dInterpolation_catmulrom) || defined(dInterpolation_mitchell) || defined(dInterpolation_bspline)
    #define dInterpolation_cubic
#endif

#if defined(dInterpolation_cubic)
    #if defined(dInterpolation_catmulrom) || defined(dInterpolation_mitchell)
        #if defined(dInterpolation_catmulrom)
            const float B = 0.0;
            const float C = 0.5;
        #elif defined(dInterpolation_mitchell)
            const float B = 0.333;
            const float C = 0.333;
        #endif

        float cubicFilter(float x){
            float f = x;
            if (f < 0.0) {
                f = -f;
            }
            if (f < 1.0) {
                return ((12.0 - 9.0 * B - 6.0 * C) * (f * f * f) +
                    (-18.0 + 12.0 * B + 6.0 * C) * (f * f) +
                    (6.0 - 2.0 * B)) / 6.0;
            }else if (f >= 1.0 && f < 2.0){
                return ((-B - 6.0 * C) * ( f * f * f)
                    + (6.0 * B + 30.0 * C) * (f * f) +
                    (-(12.0 * B) - 48.0 * C) * f +
                    8.0 * B + 24.0 * C) / 6.0;
            }else{
                return 0.0;
            }
        }
    #elif defined(dInterpolation_bspline)
        float cubicFilter(float x) {
            float f = x;
            if (f < 0.0) {
                f = -f;
            }
            if (f >= 0.0 && f <= 1.0){
                return (2.0 / 3.0) + (0.5) * (f * f * f) - (f * f);
            } else if (f > 1.0 && f <= 2.0) {
                return 1.0 / 6.0 * pow((2.0 - f), 3.0);
            }
            return 1.0;
        }
    #endif

    vec4 biCubic(sampler2D tex, vec2 texCoord) {
        vec2 texelSize = 1.0 / uImageTexDim;
        texCoord -= texelSize / 2.0;
        vec4 nSum = vec4(0.0);
        float nDenom = 0.0;
        vec2 cell = fract(texCoord * uImageTexDim);
        for (float m = -1.0; m <= 2.0; ++m) {
            for (float n = -1.0; n <= 2.0; ++n) {
                vec4 vecData = texture2D(tex, texCoord + texelSize * vec2(m, n));
                float c = abs(cubicFilter(m - cell.x) * cubicFilter(-n + cell.y));
                nSum += vecData * c;
                nDenom += c;
            }
        }
        return nSum / nDenom;
    }
#endif

void main() {
    if (uTrimType != 0 && getSignedDistance(vPosition, uTrimType, uTrimCenter, uTrimRotation, uTrimScale, uTrimTransform) > 0.0) discard;

    #include fade_lod
    #include clip_pixel

    #if defined(dInterpolation_cubic)
        #ifdef dUsePalette
            vec4 material = texture2D(tImageTex, vUv);
            if (material.rgb != vec3(1.0)) {
                material = biCubic(tImageTex, vUv);
            }
        #else
            vec4 material = biCubic(tImageTex, vUv);
        #endif
    #else
        vec4 material = texture2D(tImageTex, vUv);
    #endif

    if (uIsoLevel >= 0.0) {
        if (texture2D(tValueTex, vUv).r < uIsoLevel) discard;

        material.a = uAlpha;
    } else {
        if (material.a == 0.0) discard;

        material.a *= uAlpha;
    }

    float fragmentDepth = gl_FragCoord.z;

    vec3 packedGroup = texture2D(tGroupTex, vUv).rgb;
    float group = packedGroup == vec3(0.0) ? -1.0 : unpackRGBToInt(packedGroup);

    // apply per-group transparency
    #if defined(dTransparency) && (defined(dRenderVariant_pick) || defined(dRenderVariant_color) || defined(dRenderVariant_emissive) || defined(dRenderVariant_tracing) || defined(dRenderVariant_marking))
        float transparency = 0.0;
        #if defined(dTransparencyType_instance)
            transparency = readFromTexture(tTransparency, vInstance, uTransparencyTexDim).a;
        #elif defined(dTransparencyType_groupInstance)
            transparency = readFromTexture(tTransparency, vInstance * float(uGroupCount) + group, uTransparencyTexDim).a;
        #endif
        transparency *= uTransparencyStrength;

        float ta = 1.0 - transparency;
        if (transparency < 0.09) ta = 1.0; // hard cutoff looks better

        #if defined(dRenderVariant_pick)
            if (ta * uAlpha < uPickingAlphaThreshold)
                discard; // ignore so the element below can be picked
        #elif defined(dRenderVariant_emissive)
            if (ta < 1.0)
                discard; // emissive not supported with transparency
        #elif defined(dRenderVariant_color) || defined(dRenderVariant_tracing) || defined(dRenderVariant_marking)
            material.a *= ta;
        #endif
    #endif

    if ((uRenderMask == MaskOpaque && material.a < 1.0) ||
        (uRenderMask == MaskTransparent && material.a == 1.0)
    ) {
        discard;
    }

    #if defined(dNeedsMarker)
        float marker = uMarker;
        if (group == -1.0) {
            marker = 0.0;
        } else if (uMarker == -1.0) {
            marker = readFromTexture(tMarker, vInstance * float(uGroupCount) + group, uMarkerTexDim).a;
            marker = floor(marker * 255.0 + 0.5); // rounding required to work on some cards on win
        }
    #endif

    #if defined(dRenderVariant_color) || defined(dRenderVariant_tracing) || defined(dRenderVariant_emissive)
        float emissive = uEmissive;
        if (group == -1.0) {
            emissive = 0.0;
        } else {
            #ifdef dEmissive
                #if defined(dEmissiveType_instance)
                    emissive += readFromTexture(tEmissive, vInstance, uEmissiveTexDim).a * uEmissiveStrength;
                #elif defined(dEmissiveType_groupInstance)
                    emissive += readFromTexture(tEmissive, vInstance * float(uGroupCount) + group, uEmissiveTexDim).a * uEmissiveStrength;
                #endif
            #endif
        }
    #endif

    #if defined(dRenderVariant_pick)
        if (group == -1.0) discard;

        #include check_picking_alpha
        #ifdef requiredDrawBuffers
            gl_FragColor = vec4(packIntToRGB(float(uObjectId)), 1.0);
            gl_FragData[1] = vec4(packIntToRGB(vInstance), 1.0);
            gl_FragData[2] = vec4(packIntToRGB(group), 1.0);
            gl_FragData[3] = packDepthToRGBA(fragmentDepth);
        #else
            gl_FragColor = vColor;
            if (uPickType == 1) {
                gl_FragColor = vec4(packIntToRGB(float(uObjectId)), 1.0);
            } else if (uPickType == 2) {
                gl_FragColor = vec4(packIntToRGB(vInstance), 1.0);
            } else {
                gl_FragColor = vec4(packIntToRGB(group), 1.0);
            }
        #endif
    #elif defined(dRenderVariant_depth)
        if (uRenderMask == MaskOpaque) {
            gl_FragColor = packDepthToRGBA(fragmentDepth);
        } else if (uRenderMask == MaskTransparent) {
            gl_FragColor = packDepthWithAlphaToRGBA(fragmentDepth, material.a);
        }
    #elif defined(dRenderVariant_marking)
        #include apply_marking
        gl_FragColor = material;
    #elif defined(dRenderVariant_emissive)
        gl_FragColor = vec4(emissive);
    #elif defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
        #ifdef dUsePalette
            if (material.rgb == vec3(1.0)) {
                material.rgb = uPaletteDefault;
            } else {
                float v = ((material.r * 256.0 * 256.0 * 255.0 + material.g * 256.0 * 255.0 + material.b * 255.0) - 1.0) / PALETTE_SCALE;
                material.rgb = texture2D(tPalette, vec2(v, 0.0)).rgb;
            }
        #endif

        // mix material with overpaint
        #if defined(dOverpaint)
            vec4 overpaint = vec4(0.0);
            if (group != -1.0) {
                #if defined(dOverpaintType_instance)
                    overpaint = readFromTexture(tOverpaint, vInstance, uOverpaintTexDim);
                #elif defined(dOverpaintType_groupInstance)
                    overpaint = readFromTexture(tOverpaint, vInstance * float(uGroupCount) + group, uOverpaintTexDim);
                #endif
                overpaint *= uOverpaintStrength;
            }
            material.rgb = mix(material.rgb, overpaint.rgb, overpaint.a);
        #endif

        gl_FragColor = material;
        #include apply_marker_color

        #if defined(dRenderVariant_color)
            #include apply_fog
            #include wboit_write
            #include dpoit_write
        #elif defined(dRenderVariant_tracing)
            gl_FragData[1] = vec4(normalize(vViewPosition), emissive);
            gl_FragData[2] = vec4(material.rgb, uDensity);
        #endif
    #endif
}
`})))()}function ii(e){return e.replace(xi,(e,t)=>{let n=bi[t];if(!n)throw Error(`empty chunk, '${t}'`);return n}).trim().replace(Ci,`
`).replace(wi,`
`).replace(Ti,`
`)}function ai(e){return e.replace(Si,oi)}function oi(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);++e)i+=r.replace(/\[\s*i\s*\]/g,`[${e}]`).replace(/UNROLLED_LOOP_INDEX/g,`${e}`);return i}function si(e,t){return t.dLightCount&&(e=e.replace(/dLightCount/g,`${t.dLightCount.ref.value}`)),t.dClipObjectCount&&(e=e.replace(/dClipObjectCount/g,`${t.dClipObjectCount.ref.value}`)),e}function ci(e,t){return ai(si(e,t))}function li(e,t,n,r={},i={},a){return{id:yi(),name:e,vert:ii(t),frag:ii(n),extensions:r,outTypes:i,ignoreDefine:a}}function ui(e,t,n){if(t.startsWith(`color`)||t===`tracing`){if(e===`dLightCount`)return!!n.dIgnoreLight?.ref.value}else{let n=[`dSubstanceType`,`dSubstance`,`dColorMarker`,`dCelShaded`,`dLightCount`];return t!==`depth`&&t!==`marking`&&!t.startsWith(`pick`)&&n.push(`dXrayShaded`),t!==`emissive`&&n.push(`dColorType`,`dUsePalette`,`dOverpaintType`,`dOverpaint`,`dEmissiveType`,`dEmissive`),n.includes(e)}return!1}function di(e,t,n){return e===`dLightCount`||ui(e,t,n)}function fi(e,n){if(e===void 0)return``;let r=e.dRenderVariant?.ref.value||``,i=[];for(let a in e){if(n?.(a,r,e))continue;let o=e[a].ref.value;o!==void 0&&(typeof o==`string`?i.push(`#define ${a}_${o}`):typeof o==`number`?i.push(`#define ${a} ${o}`):typeof o==`boolean`?o&&i.push(`#define ${a}`):t(o))}return i.join(`
`)+`
`}function pi(e,t){let n=[];if(t.drawBuffers){if(e.drawBuffers)n.push(`#define requiredDrawBuffers`);else if(t.drawBuffers===`required`)throw Error(`required 'GL_EXT_draw_buffers' extension not available`)}if(t.multiDraw){if(e.multiDraw)n.push(`#extension GL_ANGLE_multi_draw : require`),n.push(`#define enabledMultiDraw`);else if(t.multiDraw===`required`)throw Error(`required 'GL_ANGLE_multi_draw' extension not available`)}return n.join(`
`)+`
`}function mi(e,t){let n=[`#extension GL_OES_standard_derivatives : enable`];if(t.fragDepth){if(e.fragDepth)n.push(`#extension GL_EXT_frag_depth : enable`),n.push(`#define enabledFragDepth`);else if(t.fragDepth===`required`)throw Error(`required 'GL_EXT_frag_depth' extension not available`)}if(t.drawBuffers){if(e.drawBuffers)n.push(`#extension GL_EXT_draw_buffers : require`),n.push(`#define requiredDrawBuffers`),n.push(`#define gl_FragColor gl_FragData[0]`);else if(t.drawBuffers===`required`)throw Error(`required 'GL_EXT_draw_buffers' extension not available`)}if(t.shaderTextureLod){if(e.shaderTextureLod)n.push(`#extension GL_EXT_shader_texture_lod : enable`),n.push(`#define enabledShaderTextureLod`);else if(t.shaderTextureLod===`required`)throw Error(`required 'GL_EXT_shader_texture_lod' extension not available`)}return e.depthTexture&&n.push(`#define depthTextureSupport`),n.join(`
`)+`
`}function hi(e,t){let n=[`#version 300 es`];if(t.drawBuffers&&e.drawBuffers&&n.push(`#define requiredDrawBuffers`),t.multiDraw){if(e.multiDraw)n.push(`#extension GL_ANGLE_multi_draw : require`),n.push(`#define enabledMultiDraw`);else if(t.multiDraw===`required`)throw Error(`required 'GL_ANGLE_multi_draw' extension not available`)}if(t.clipCullDistance){if(e.clipCullDistance)n.push(`#extension GL_ANGLE_clip_cull_distance : enable`),n.push(`#define enabledClipCullDistance`);else if(t.clipCullDistance===`required`)throw Error(`required 'GL_ANGLE_clip_cull_distance' extension not available`)}if(t.conservativeDepth){if(e.conservativeDepth)n.push(`#extension GL_EXT_conservative_depth : enable`),n.push(`#define enabledConservativeDepth`);else if(t.conservativeDepth===`required`)throw Error(`required 'GL_EXT_conservative_depth' extension not available`)}if(t.multiview2){if(e.multiview2)n.push(`#extension GL_OVR_multiview2 : require`),n.push(`#define enabledMultiview2`);else if(t.multiview2===`required`)throw Error(`required 'GL_OVR_multiview2' extension not available`)}return e.noNonInstancedActiveAttribs&&n.push(`#define noNonInstancedActiveAttribs`),n.push(Pi),n.join(`
`)+`
`}function gi(e,t,n,r){let i=[`#version 300 es`,`layout(location = 0) out highp ${r[0]||`vec4`} out_FragData0;`];if(n.fragDepth&&e.fragDepth&&i.push(`#define enabledFragDepth`),n.drawBuffers&&e.drawBuffers){i.push(`#define requiredDrawBuffers`);for(let e=1,n=t.maxDrawBuffers;e<n;++e)i.push(`layout(location = ${e}) out highp ${r[e]||`vec4`} out_FragData${e};`)}return n.shaderTextureLod&&e.shaderTextureLod&&i.push(`#define enabledShaderTextureLod`),e.depthTexture&&i.push(`#define depthTextureSupport`),i.push(Fi),i.join(`
`)+`
`}function _i(e){return e.replace(/gl_FragData\[([0-9]+)\]/g,`out_FragData$1`)}function vi(e,t,n,r,i){let a=fi(r,i.ignoreDefine),o=fi(r,i.ignoreDefine),s=q(e)?hi(t,i.extensions):pi(t,i.extensions),c=q(e)?gi(t,n,i.extensions,i.outTypes):mi(t,i.extensions),l=q(e)?_i(i.frag):i.frag;return{id:yi(),name:i.name,vert:`${s}${a}${ci(i.vert,r)}`,frag:`${c}${o}${ci(l,r)}`,extensions:i.extensions,outTypes:i.outTypes}}var yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi;function Ii(){return(Ii=e((()=>{cs(),dn(),pn(),hn(),_n(),yn(),xn(),Cn(),Tn(),Dn(),kn(),jn(),Nn(),Fn(),Ln(),zn(),Vn(),Un(),Gn(),qn(),Yn(),Zn(),$n(),tr(),rr(),ar(),sr(),lr(),dr(),pr(),hr(),_r(),yr(),xr(),Cr(),Tr(),Dr(),kr(),jr(),Nr(),Fr(),Lr(),zr(),Vr(),Ur(),Gr(),qr(),Yr(),Zr(),$r(),ti(),ri(),yi=r(),bi={apply_fog:un,apply_interior_color:fn,apply_light_color:mn,apply_marker_color:gn,apply_marking:vn,assign_clipping_varying:bn,assign_color_varying:Sn,assign_group:wn,assign_marker_varying:En,assign_material_color:On,assign_position:An,assign_size:Mn,check_picking_alpha:Pn,check_transparency:In,clip_instance:Rn,clip_pixel:Bn,color_frag_params:Hn,color_vert_params:Wn,common_animation:Kn,common_clip:Jn,common_frag_params:Xn,common_vert_params:Qn,common:er,fade_lod:nr,float_to_rgba:ir,light_frag_params:or,normal_frag_params:cr,read_from_texture:ur,rgba_to_float:fr,size_vert_params:mr,texture3d_from_1d_trilinear:gr,texture3d_from_2d_linear:vr,texture3d_from_2d_nearest:br,wboit_write:Sr,dpoit_write:wr},xi=/^(?!\/\/)\s*#include\s+(\S+)/gm,Si=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*\+\+i\s*\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g,Ci=/[ \t]*\/\/.*\n/g,wi=/[ \t]*\/\*[\s\S]*?\*\//g,Ti=/\n{2,}/g,Ei=li(`points`,Er,Or,{drawBuffers:`optional`},{},di),Di=li(`spheres`,Ar,Mr,{fragDepth:`required`,drawBuffers:`optional`},{},ui),Oi=li(`cylinders`,Pr,Ir,{fragDepth:`required`,drawBuffers:`optional`},{},ui),ki=li(`text`,Rr,Br,{fragDepth:`optional`,drawBuffers:`optional`},{},di),Ai=li(`lines`,Hr,Wr,{drawBuffers:`optional`},{},di),ji=li(`mesh`,Kr,Jr,{fragDepth:`optional`,drawBuffers:`optional`},{},ui),Mi=li(`direct-volume`,Xr,Qr,{fragDepth:`optional`,drawBuffers:`optional`},{},ui),Ni=li(`image`,ei,ni,{drawBuffers:`optional`},{},di),Pi=`
#define attribute in
#define varying out
#define texture2D texture
`,Fi=`
#define varying in
#define texture2D texture
#define textureCube texture
#define texture2DLodEXT textureLod
#define textureCubeLodEXT textureLod

#define gl_FragColor out_FragData0
#define gl_FragDepthEXT gl_FragDepth
`})))()}function Li(e,t){switch(t){case`b`:case`b[]`:return e.BOOL;case`f`:case`f[]`:return e.FLOAT;case`i`:case`i[]`:return e.INT;case`v2`:case`v2[]`:return e.FLOAT_VEC2;case`v3`:case`v3[]`:return e.FLOAT_VEC3;case`v4`:case`v4[]`:return e.FLOAT_VEC4;case`q`:case`q[]`:return e.FLOAT_VEC4;case`iv2`:case`iv2[]`:return e.INT_VEC2;case`iv3`:case`iv3[]`:return e.INT_VEC3;case`iv4`:case`iv4[]`:return e.INT_VEC4;case`m3`:case`m3[]`:return e.FLOAT_MAT3;case`m4`:case`m4[]`:return e.FLOAT_MAT4;default:console.error(`unknown uniform kind '${t}'`)}}function Ri(e){return e.endsWith(`[]`)}function zi(e,t,n){e.uniform1f(t,n)}function Bi(e,t,n){e.uniform1fv(t,n)}function Vi(e,t,n){e.uniform1i(t,n)}function Hi(e,t,n){e.uniform1iv(t,n)}function Ui(e,t,n){e.uniform2fv(t,n)}function Wi(e,t,n){e.uniform3fv(t,n)}function Gi(e,t,n){e.uniform4fv(t,n)}function Ki(e,t,n){e.uniform2iv(t,n)}function qi(e,t,n){e.uniform3iv(t,n)}function Ji(e,t,n){e.uniform4iv(t,n)}function Yi(e,t,n){e.uniformMatrix3fv(t,!1,n)}function Xi(e,t,n){e.uniformMatrix4fv(t,!1,n)}function Zi(e){switch(e){case`f`:return zi;case`f[]`:return Bi;case`i`:case`t`:case`b`:return Vi;case`i[]`:case`t[]`:case`b[]`:return Hi;case`v2`:case`v2[]`:return Ui;case`v3`:case`v3[]`:return Wi;case`v4`:case`v4[]`:return Gi;case`q`:case`q[]`:return Gi;case`iv2`:case`iv2[]`:return Ki;case`iv3`:case`iv3[]`:return qi;case`iv4`:case`iv4[]`:return Ji;case`m3`:case`m3[]`:return Yi;case`m4`:case`m4[]`:return Xi}}function Qi(e){let t={};return Object.keys(e).forEach(n=>{let r=e[n];r.type===`uniform`?t[n]=Zi(r.kind):r.type===`texture`&&(t[n]=Zi(`t`))}),t}function $i(e){let t={};return Object.keys(e).forEach(n=>{t[n]=I.create(le(e[n].ref.value))}),t}function ea(){return(ea=e((()=>{N(),M()})))()}function ta(e,n){switch(n){case`static`:return e.STATIC_DRAW;case`dynamic`:return e.DYNAMIC_DRAW;case`stream`:return e.STREAM_DRAW;default:t(n)}}function na(e,n){if(n instanceof Uint8Array)return e.UNSIGNED_BYTE;if(n instanceof Int8Array)return e.BYTE;if(n instanceof Uint16Array)return e.UNSIGNED_SHORT;if(n instanceof Int16Array)return e.SHORT;if(n instanceof Uint32Array)return e.UNSIGNED_INT;if(n instanceof Int32Array)return e.INT;if(n instanceof Float32Array)return e.FLOAT;t(n)}function ra(e,t){switch(t){case`attribute`:return e.ARRAY_BUFFER;case`elements`:return e.ELEMENT_ARRAY_BUFFER;case`uniform`:if(q(e))return e.UNIFORM_BUFFER;throw Error(`WebGL2 is required for uniform buffers`);case`pixel-pack`:if(q(e))return e.PIXEL_PACK_BUFFER;throw Error(`WebGL2 is required for pixel-pack buffers`)}}function ia(e){let t=e.createBuffer();if(t===null)throw Error(`Could not create WebGL buffer`);return t}function aa(e,t,n,r){let i=ia(e),a=ta(e,n),o=ra(e,r),s=na(e,t),c=t.BYTES_PER_ELEMENT,l=t.length;function u(t){e.bindBuffer(o,i),e.bufferData(o,t,a)}u(t);let d=!1;return{id:da(),_usageHint:a,_bufferType:o,_dataType:s,_bpe:c,length:l,getByteCount:()=>c*l,getBuffer:()=>i,updateData:u,updateSubData:(t,n,r)=>{e.bindBuffer(o,i),r-n===t.length?e.bufferSubData(o,0,t):e.bufferSubData(o,n*c,t.subarray(n,n+r))},reset:()=>{i=ia(e),u(t)},destroy:()=>{d||=(e.deleteBuffer(i),!0)}}}function oa(e,n,r){switch(n){case`float32`:switch(r){case 1:return e.FLOAT;case 2:return e.FLOAT_VEC2;case 3:return e.FLOAT_VEC3;case 4:return e.FLOAT_VEC4;case 16:return e.FLOAT_MAT4}default:t(n)}}function sa(e,t,n,r,i,a,o=`static`){let{instancedArrays:s}=n,c=aa(e,r,o,`attribute`),{_bufferType:l,_dataType:u,_bpe:d}=c;return{...c,divisor:a,bind:n=>{if(e.bindBuffer(l,c.getBuffer()),i===16)for(let r=0;r<4;++r)t.enableVertexAttrib(n+r),e.vertexAttribPointer(n+r,4,u,!1,16*d,r*4*d),s.vertexAttribDivisor(n+r,a);else t.enableVertexAttrib(n),e.vertexAttribPointer(n,i,u,!1,0,0),s.vertexAttribDivisor(n,a)},changeOffset:(t,n)=>{let r=n*d*i;if(e.bindBuffer(l,c.getBuffer()),i===16)for(let n=0;n<4;++n)e.vertexAttribPointer(t+n,4,u,!1,16*d,n*4*d+r);else e.vertexAttribPointer(t,i,u,!1,0,r)}}}function ca(e,t,n){let r=[];return Object.keys(t).forEach(i=>{let a=t[i];a.type===`attribute`&&(r[r.length]=[i,e.resources.attribute(n[i].ref.value,a.itemSize,a.divisor)])}),r}function la(e,t,n=`static`){let r=aa(e,t,n,`elements`);return{...r,bind:()=>{e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,r.getBuffer())}}}function ua(e,t,n,r){let i=ia(e),a=gs(e,t,r),o=us(e,n,r),s=ps(n,r),c=0,l=0;function u(t,n,r,u){c=r,l=u,e.bindBuffer(e.PIXEL_PACK_BUFFER,i),e.bufferData(e.PIXEL_PACK_BUFFER,r*u*s,e.STREAM_READ),e.readPixels(t,n,r,u,o,a,0),e.bindBuffer(e.PIXEL_PACK_BUFFER,null)}function d(t){e.bindBuffer(e.PIXEL_PACK_BUFFER,i),e.getBufferSubData(e.PIXEL_PACK_BUFFER,0,t),e.bindBuffer(e.PIXEL_PACK_BUFFER,null)}let f=!1;return{id:da(),_type:a,_format:o,_bpe:s,getByteCount:()=>s*c*l,read:u,getSubData:d,reset:()=>{i=ia(e)},destroy:()=>{f||=(e.deleteBuffer(i),!0)}}}var da;function fa(){return(fa=e((()=>{cs(),Ms(),da=r()})))()}function pa(e,t,n){let r={};return Object.keys(n).forEach(i=>{let a=n[i];if(a.type===`attribute`){let n=e.getAttribLocation(t,i);r[i]=n}else if(a.type===`uniform`){let n=e.getUniformLocation(t,i);n===null&&Ri(a.kind)&&(n=e.getUniformLocation(t,i+`[0]`)),r[i]=n}else if(a.type===`texture`){let n=e.getUniformLocation(t,i);r[i]=n}}),r}function ma(e,t,n){let r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;++i){let r=e.getActiveAttrib(t,i);if(r){let{name:t,type:i}=r;if(t.startsWith(`__activeAttribute`)||t===`gl_InstanceID`||t===`gl_VertexID`||t===`gl_DrawID`||t===`gl_ViewID_OVR`)continue;let a=n[t];if(a===void 0)throw Error(`missing 'uniform' or 'texture' with name '${t}' in schema`);if(a.type!==`attribute`)throw Error(`'${t}' must be of type 'attribute' but is '${a.type}'`);let o=oa(e,a.kind,a.itemSize);if(o!==i)throw Error(`unexpected attribute type '${o}' for ${t}, expected '${i}'`)}}}function ha(e,t,n){let r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){let r=e.getActiveUniform(t,i);if(r){let{name:t,type:i}=r;if(t.startsWith(`__activeUniform`)||t===`gl_InstanceID`||t===`gl_VertexID`||t===`gl_DrawID`||t===`gl_ViewID_OVR`)continue;let a=n[t.replace(/[[0-9]+\]$/,``)];if(a===void 0)throw Error(`missing 'uniform' or 'texture' with name '${t}' in schema`);if(a.type===`uniform`){if(Li(e,a.kind)!==i)throw Error(`unexpected uniform type for ${t}`)}else if(a.type===`texture`){if(a.kind===`image-float32`||a.kind===`image-uint8`){if(i!==e.SAMPLER_2D)throw Error(`unexpected sampler type for '${t}'`)}else if(a.kind===`volume-float32`||a.kind===`volume-uint8`){if(q(e)){if(i!==e.SAMPLER_3D)throw Error(`unexpected sampler type for '${t}'`)}else throw Error(`WebGL2 is required to use SAMPLER_3D`)}}else throw Error(`'${t}' must be of type 'uniform' or 'texture' but is '${a.type}'`)}}}function ga(e,t){if(!e.getProgramParameter(t,e.LINK_STATUS))throw Error(`Could not compile WebGL program. \n\n${e.getProgramInfoLog(t)}`)}function _a(e){let t=e.createProgram();if(t===null)throw Error(`Could not create WebGL program`);return t}function va(e){if(typeof e!=`string`)throw Error(`unknown program variant: ${e}`);return e.startsWith(`color`)?`color`:e.startsWith(`pick`)?`pick`:e}function ya(e,t,n,r,i,a){let{defineValues:o,shaderCode:s,schema:c}=a,u=_a(e),d=ba(),f=va(o.dRenderVariant.ref.value),p=vi(e,n,r,o,s),m=i(`vert`,p.vert),h=i(`frag`,p.frag),g,_,v=!1,y=!1,b=!1;function x(){m.attach(u),h.attach(u),e.linkProgram(u),l&&ga(e,u),v=!0}f===`compute`&&x();function S(){g=pa(e,u,c),_=Qi(c),l&&(ma(e,u,c),ha(e,u,c)),y=!0}return{id:d,variant:f,isReady:()=>y,link:()=>{v||x()},finalize(t){return v||x(),!y&&(t||!n.parallelShaderCompile||e.getProgramParameter(u,n.parallelShaderCompile.COMPLETION_STATUS))&&S(),y},use:()=>{if(l&&!y)throw Error(`program not finalized: ${f}`);t.currentProgramId=d,e.useProgram(u)},setUniforms:t=>{for(let n=0,r=t.length;n<r;++n){let[r,i]=t[n];if(i){let t=g[r];t!==null&&_[r](e,t,i.ref.value)}}},uniform:(t,n)=>{let r=g[t];r!==null&&_[t](e,r,n)},bindAttributes:e=>{t.clearVertexAttribsState();for(let t=0,n=e.length;t<n;++t){let[n,r]=e[t],i=g[n];i!==-1&&r.bind(i)}t.disableUnusedVertexAttribs()},offsetAttributes:(e,t)=>{for(let n=0,r=e.length;n<r;++n){let[r,i]=e[n],a=g[r];a!==-1&&i.changeOffset(a,t)}},bindTextures:(t,n)=>{for(let r=0,i=t.length;r<i;++r){let[i,a]=t[r],o=g[i];o!=null&&(a.bind(r+n),_[i](e,o,r+n))}},reset:()=>{u=_a(e),v&&x(),y&&S()},destroy:()=>{b||=(m.destroy(),h.destroy(),e.deleteProgram(u),!0)}}}var ba;function xa(){return(xa=e((()=>{Ii(),ea(),fa(),o(),cs(),ba=r()})))()}function Sa(e){let t=e.split(`
`);for(let e=0;e<t.length;++e)t[e]=e+1+`: `+t[e];return t.join(`
`)}function Ca(e,t){let{type:n,source:r}=t,i=e.createShader(n===`vert`?e.VERTEX_SHADER:e.FRAGMENT_SHADER);if(i===null)throw Error(`Error creating ${n} shader`);if(e.shaderSource(i,r),e.compileShader(i),l&&e.getShaderParameter(i,e.COMPILE_STATUS)===!1)throw console.warn(`'${n}' shader info log '${e.getShaderInfoLog(i)}'\n${Sa(r)}`),Error(`Error compiling ${n} shader`);return i}function wa(e,t){let n=Ca(e,t);return{id:Ta(),attach:t=>{e.attachShader(t,n)},reset:()=>{n=Ca(e,t)},destroy:()=>{e.deleteShader(n)}}}var Ta;function Ea(){return(Ea=e((()=>{o(),Ta=r()})))()}function Da(e,t=0){return{value:e,usageCount:t}}function Oa(e){return{free:()=>{--e.usageCount},value:e.value}}function ka(e,t,n){let r=new Map,i=[];return{get:n=>{let a=e(n),o=r.get(a);return o||(o=Da(t(n)),r.set(a,o),i.push(o.value)),o.usageCount+=1,Oa(o)},clear:()=>{r.forEach((e,t)=>{e.usageCount<=0&&(e.usageCount<0&&console.warn(`Reference usageCount below zero.`),n(e.value),r.delete(t),te(i,e.value))})},get count(){return r.size},values:i,dispose:()=>{r.forEach(e=>n(e.value)),r.clear(),i.length=0}}}function Aa(){return(Aa=e((()=>{T()})))()}function ja(e,t){switch(t){case`depth16`:return e.DEPTH_COMPONENT16;case`stencil8`:return e.STENCIL_INDEX8;case`rgba4`:return e.RGBA4;case`depth-stencil`:return e.DEPTH_STENCIL;case`depth24`:if(q(e))return e.DEPTH_COMPONENT24;throw Error("WebGL2 needed for `depth24` renderbuffer format");case`depth32f`:if(q(e))return e.DEPTH_COMPONENT32F;throw Error("WebGL2 needed for `depth32f` renderbuffer format");case`depth24-stencil8`:if(q(e))return e.DEPTH24_STENCIL8;throw Error("WebGL2 needed for `depth24-stencil8` renderbuffer format");case`depth32f-stencil8`:if(q(e))return e.DEPTH32F_STENCIL8;throw Error("WebGL2 needed for `depth32f-stencil8` renderbuffer format")}}function Ma(e){switch(e){case`depth16`:return 4;case`stencil8`:return 2;case`rgba4`:return 4;case`depth-stencil`:return 4;case`depth24`:return 3;case`depth32f`:return 4;case`depth24-stencil8`:return 4;case`depth32f-stencil8`:return 5}}function Na(e,t){switch(t){case`depth`:return e.DEPTH_ATTACHMENT;case`stencil`:return e.STENCIL_ATTACHMENT;case`depth-stencil`:return e.DEPTH_STENCIL_ATTACHMENT;case`color0`:return e.COLOR_ATTACHMENT0}}function Pa(e){let t=e.createRenderbuffer();if(t===null)throw Error(`Could not create WebGL renderbuffer`);return t}function Fa(e,t,n,r,i){let a=Pa(e),o=()=>e.bindRenderbuffer(e.RENDERBUFFER,a),s=ja(e,t),c=Na(e,n);function u(){o(),e.renderbufferStorage(e.RENDERBUFFER,s,r,i)}u();let d=!1;return{id:Ia(),getByteCount:()=>Ma(t)*r*i,bind:o,attachFramebuffer:t=>{t.bind(),o(),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,a),l&&$t(e)},detachFramebuffer:t=>{t.bind(),o(),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,null),l&&$t(e)},setSize:(e,t)=>{r=e,i=t,u()},reset:()=>{a=Pa(e),u()},destroy:()=>{d||=(e.deleteRenderbuffer(a),!0)}}}var Ia;function La(){return(La=e((()=>{cs(),an(),o(),Ia=r()})))()}function Ra(e){let{vertexArrayObject:t}=e;if(!t)throw Error(`VertexArrayObject not supported`);let n=t.createVertexArray();if(!n)throw Error(`Could not create WebGL vertex array`);return n}function za(e){let{vertexArrayObject:t}=e;if(t===null)throw Error(`VertexArrayObject not supported`);return t}function Ba(e,t,n,r,i){let a=Va(),o=Ra(t),s=za(t);function c(){s.bindVertexArray(o),i&&i.bind(),n.bindAttributes(r),s.bindVertexArray(null),l=!0}let l=!1,u=!1;return{id:a,bind:()=>{l||c(),s.bindVertexArray(o)},update:c,reset:()=>{o=Ra(t),s=za(t),l=!1},destroy:()=>{u||=(i&&(s.bindVertexArray(o),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),s.deleteVertexArray(o),!0)}}}var Va;function Ha(){return(Ha=e((()=>{Va=r()})))()}function Ua(e){return typeof e==`boolean`?+!!e:typeof e==`number`?e*1e4:ge(e)}function Wa(e){return{...e.value,destroy:()=>{e.free()}}}function Ga(e,t,r,i,a){let o={attribute:new Set,elements:new Set,pixelPack:new Set,framebuffer:new Set,program:new Set,renderbuffer:new Set,shader:new Set,texture:new Set,cubeTexture:new Set,vertexArray:new Set};function s(e,t){return o[e].add(t),r.resourceCounts[e]+=1,{...t,destroy:()=>{t.destroy(),o[e].delete(t),--r.resourceCounts[e]}}}let l=ka(e=>JSON.stringify(e),t=>s(`shader`,wa(e,t)),e=>{e.destroy()});function u(e,t){return Wa(l.get({type:e,source:t}))}let d=new Set,f=ka(e=>{let t=[e.shaderCode.id],n=e.defineValues.dRenderVariant?.ref.value||``;return Object.keys(e.defineValues).forEach(r=>{e.shaderCode.ignoreDefine?.(r,n,e.defineValues)||t.push(ge(r),Ua(e.defineValues[r].ref.value))}),ve(t).toString()},n=>{let r=ya(e,t,i,a,u,n);return r.variant!==`compute`&&d.add(r),s(`program`,r)},e=>{d.delete(e),e.destroy()});return{attribute:(n,r,a,o)=>s(`attribute`,sa(e,t,i,n,r,a,o)),elements:(t,n)=>s(`elements`,la(e,t,n)),pixelPack:(t,n)=>{if(!q(e))throw Error(`WebGL2 is required for pixel-pack buffers`);return s(`pixelPack`,ua(e,i,t,n))},framebuffer:()=>s(`framebuffer`,tn(e)),program:(e,t,n)=>Wa(f.get({defineValues:e,shaderCode:t,schema:n})),renderbuffer:(t,n,r,i)=>s(`renderbuffer`,Fa(e,t,n,r,i)),shader:u,texture:(t,n,r,a)=>s(`texture`,Cs(e,i,t,n,r,a)),cubeTexture:(t,n,r)=>s(`cubeTexture`,Ds(e,t,n,r)),vertexArray:(t,n,r)=>s(`vertexArray`,Ba(e,i,t,n,r)),getByteCounts:()=>{let e=0;o.texture.forEach(t=>{e+=t.getByteCount()});let t=0;o.cubeTexture.forEach(e=>{t+=e.getByteCount()});let n=0;o.attribute.forEach(e=>{n+=e.getByteCount()});let r=0;o.elements.forEach(e=>{r+=e.getByteCount()});let i=0;o.pixelPack.forEach(e=>{i+=e.getByteCount()});let a=0;return o.renderbuffer.forEach(e=>{a+=e.getByteCount()}),{texture:e,cubeTexture:t,attribute:n,elements:r,pixelPack:i,renderbuffer:a}},linkPrograms:e=>{for(let t of d)(!e||e.includes(t.variant))&&t.link()},finalizePrograms:(e,t)=>{let r=!0,i=0;for(let t of d)t.isReady()&&d.delete(t),(!e||e.includes(t.variant))&&(r=!1,i+=1);if(r)return!0;let a=!0,o=0,s=n();for(let r of d)if((!e||e.includes(r.variant))&&(r.finalize(t)?(d.delete(r),o+=1):a=!1,!t&&n()-s>16)){a=!1;break}return c&&console.log(`Finalized ${o} of ${i} programs (${e?e.join(`, `):`all`}) in ${(n()-s).toFixed(2)} ms`),a},reset:()=>{o.attribute.forEach(e=>e.reset()),o.elements.forEach(e=>e.reset()),o.pixelPack.forEach(e=>e.reset()),o.framebuffer.forEach(e=>e.reset()),o.renderbuffer.forEach(e=>e.reset()),o.shader.forEach(e=>e.reset()),o.program.forEach(e=>e.reset()),o.vertexArray.forEach(e=>e.reset()),o.texture.forEach(e=>e.reset()),o.cubeTexture.forEach(e=>e.reset())},destroy:()=>{o.attribute.forEach(e=>e.destroy()),o.elements.forEach(e=>e.destroy()),o.pixelPack.forEach(e=>e.destroy()),o.framebuffer.forEach(e=>e.destroy()),o.renderbuffer.forEach(e=>e.destroy()),o.shader.forEach(e=>e.destroy()),o.program.forEach(e=>e.destroy()),o.vertexArray.forEach(e=>e.destroy()),o.texture.forEach(e=>e.destroy()),o.cubeTexture.forEach(e=>e.destroy()),l.clear(),f.clear(),d.clear()}}}function Ka(){return(Ka=e((()=>{xa(),Ea(),cs(),an(),fa(),Aa(),ye(),La(),Ms(),Ha(),s(),o()})))()}function qa(e,t,n,r,i=`depth`,a=`uint8`,o=`nearest`,s=`rgba`){if(s===`alpha`&&!q(e))throw Error(`cannot render to alpha format in webgl1`);let c=t.framebuffer(),l=a===`fp16`?t.texture(`image-float16`,s,`fp16`,o):a===`float32`?t.texture(`image-float32`,s,`float`,o):t.texture(`image-uint8`,s,`ubyte`,o),u=i===`none`?null:i===`depth-stencil`?t.renderbuffer(q(e)?`depth32f-stencil8`:`depth-stencil`,`depth-stencil`,n,r):t.renderbuffer(q(e)?`depth32f`:`depth16`,`depth`,n,r);function d(){l.define(n,r),l.attachFramebuffer(c,`color0`),u&&u.attachFramebuffer(c)}d();let f=!1;return{id:Ja(),texture:l,framebuffer:c,depthRenderbuffer:u,getByteCount:()=>l.getByteCount()+(u?u.getByteCount():0),getWidth:()=>n,getHeight:()=>r,bind:()=>{c.bind()},setSize:(e,t)=>{(n!==e||r!==t)&&(n=e,r=t,l.define(n,r),u&&u.setSize(n,r))},reset:()=>{d()},destroy:()=>{f||=(l.destroy(),c.destroy(),u&&u.destroy(),!0)}}}var Ja;function Ya(){return(Ya=e((()=>{cs(),Ja=r()})))()}function Xa(e,t,n){return e-=e/n,e+=t/n,e}function Za(e){e.calls.drawInstanced=0,e.calls.drawInstancedBase=0,e.calls.multiDrawInstancedBase=0,e.calls.counts=0,e.culled.lod=0,e.culled.frustum=0,e.culled.occlusion=0,e.cacheHits.cull=0}function Qa(e){return e.disjointTimerQuery?e.disjointTimerQuery.createQuery():null}function $a(e,t,r,i){let a=t.disjointTimerQuery,o=i?.avgCount??30,s=new Map,c=new Map,l=[],u=new no(o),d=new no(o),f=[],p=null,m=!1,h=()=>{c.clear(),l.length=0,u.clear(),d.clear(),f=[],p=null,m=!1,a&&s.forEach((e,t)=>{a.deleteQuery(t)}),s.clear()},g=()=>{if(!a)return;let e=Qa(t);e&&(a.beginQuery(a.TIME_ELAPSED,e),c.forEach((t,n)=>{t.queries.push(e)}),s.set(e,{refCount:c.size}),p=e)};return{resolve:()=>{let t=[];if(!a||!f.length||m)return t;s.forEach((t,n)=>{if(t.timeElapsed!==void 0)return;let r=a.getQueryParameter(n,a.QUERY_RESULT_AVAILABLE),i=e.getParameter(a.GPU_DISJOINT);r&&!i&&(t.timeElapsed=a.getQueryParameter(n,a.QUERY_RESULT)),(r||i)&&a.deleteQuery(n)});let n=[];for(let e of f)if(e.queries.every(e=>s.get(e)?.timeElapsed!==void 0)){let n=0;for(let t of e.queries){let e=s.get(t);n+=e.timeElapsed,--e.refCount}if(e.timeElapsed=n,e.root){let r=[],i=(e,t)=>{for(let n of e){let e=n.timeElapsed,r=n.cpu.end-n.cpu.start,a={label:n.label,gpuElapsed:e,gpuAvg:u.add(n.label,e),cpuElapsed:r,cpuAvg:d.add(n.label,r),children:[],calls:n.calls,note:n.note};t.push(a),i(n.children,a.children)}};i(e.children,r);let a=e.cpu.end-e.cpu.start;t.push({label:e.label,gpuElapsed:n,gpuAvg:u.add(e.label,n),cpuElapsed:a,cpuAvg:d.add(e.label,a),children:r,calls:e.calls,note:e.note})}}else n.push(e);return f=n,s.forEach((e,t)=>{e.refCount===0&&s.delete(t)}),t},mark:(e,t)=>{if(!a)return;if(c.has(e))throw Error(`Timer mark for '${e}' already exists`);let i=t?.captureStats??!1;p!==null&&a.endQuery(a.TIME_ELAPSED);let o={label:e,queries:[],children:[],root:p===null,cpu:{start:n(),end:-1},captureStats:i};if(t?.note&&(o.note=t.note),c.set(e,o),l.length&&l[l.length-1].children.push(o),l.push(o),i){if(m)throw Error(`Already capturing stats`);Za(r),m=!0}g()},markEnd:e=>{if(!a)return;let t=c.get(e);if(!t)throw Error(`Timer mark for '${e}' does not exist`);if(l.pop()?.label!==e)throw Error(`Timer mark for '${e}' has pending nested mark`);a.endQuery(a.TIME_ELAPSED),c.delete(e),t.cpu.end=n(),t.captureStats&&(t.calls={...r.calls},m=!1),f.push(t),c.size>0?g():p=null},stats:()=>({gpu:u.stats(),cpu:d.stats()}),formatedStats:()=>{let e={},t=u.stats(),n=d.stats();for(let r of Object.keys(t))e[r]=`${`${(t[r]/1e3/1e3).toFixed(2)}`} ms | CPU: ${`${n[r].toFixed(2)}`} ms`;return e},clear:h,destroy:()=>{h()}}}function eo(e){let t=`${(e.gpuElapsed/1e3/1e3).toFixed(2)}`,n=`${(e.gpuAvg/1e3/1e3).toFixed(2)}`,r=`${e.cpuElapsed.toFixed(2)}`,i=`${e.cpuAvg.toFixed(2)}`;return`${e.label} ${t} ms (avg. ${n} ms) | CPU: ${r} ms (avg. ${i} ms)`}function to(e){e.map(e=>{let t=eo(e);e.children.length||e.calls||e.note?(console.groupCollapsed(t),e.calls&&console.log(e.calls),e.note&&console.log(e.note),to(e.children),console.groupEnd()):console.log(t)})}var no;function ro(){return(ro=e((()=>{s(),no=class{add(e,t){let n=this.avgs.get(e)||t;return n=Xa(n,t,this.count),this.avgs.set(e,n),n}get(e){return this.avgs.get(e)}stats(){return Object.fromEntries(this.avgs.entries())}clear(){this.avgs.clear()}constructor(e){this.count=e,this.avgs=new Map}}})))()}function io(e,t){function n(n){try{return e.getContext(n,t)}catch{return null}}let r=(t?.preferWebGl1?null:n(`webgl2`))||n(`webgl`)||n(`experimental-webgl`);return l&&console.log(`isWebgl2: ${q(r)}`),r}function ao(e,t){switch(t){case e.NO_ERROR:return`no error`;case e.INVALID_ENUM:return`invalid enum`;case e.INVALID_VALUE:return`invalid value`;case e.INVALID_OPERATION:return`invalid operation`;case e.INVALID_FRAMEBUFFER_OPERATION:return`invalid framebuffer operation`;case e.OUT_OF_MEMORY:return`out of memory`;case e.CONTEXT_LOST_WEBGL:return`context lost`}return`unknown error`}function oo(e,t){let n=e.getError();n!==e.NO_ERROR&&console.log(`WebGL error: '${ao(e,n)}'${t?` (${t})`:``}`)}function so(e){let t=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);for(let n=0;n<t;++n)e.activeTexture(e.TEXTURE0+n),e.bindTexture(e.TEXTURE_2D,null),e.bindTexture(e.TEXTURE_CUBE_MAP,null),q(e)&&(e.bindTexture(e.TEXTURE_2D_ARRAY,null),e.bindTexture(e.TEXTURE_3D,null));let n=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,n);let r=e.getParameter(e.MAX_VERTEX_ATTRIBS);for(let t=0;t<r;++t)e.vertexAttribPointer(t,1,e.FLOAT,!1,0,0);e.bindBuffer(e.ARRAY_BUFFER,null),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null),q(e)&&(e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBuffer(e.PIXEL_PACK_BUFFER,null))}function co(e,t,n){e.getSyncParameter(t,e.SYNC_STATUS)===e.SIGNALED?(e.deleteSync(t),n()):u.setImmediate(co,e,t,n)}function lo(e,t){let n=e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0);n?u.setImmediate(co,e,n,t):(console.warn(`Could not create a WebGLSync object`),e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,xo),t())}function uo(e){return new Promise(t=>{q(e)?lo(e,t):(So||=(console.info(`Sync object not supported in WebGL`),!0),fo(e),t())})}function fo(e){e.bindFramebuffer(e.FRAMEBUFFER,null),e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,xo)}function po(e,t,n,r,i,a){if(l&&$t(e),a instanceof Uint8Array)e.readPixels(t,n,r,i,e.RGBA,e.UNSIGNED_BYTE,a);else if(a instanceof Float32Array)e.readPixels(t,n,r,i,e.RGBA,e.FLOAT,a);else if(a instanceof Int32Array&&q(e))e.readPixels(t,n,r,i,e.RGBA_INTEGER,e.INT,a);else throw Error(`unsupported readPixels buffer type`);l&&oo(e)}function mo(e,t){t?e.bindFramebuffer(e.FRAMEBUFFER,t.framebuffer):e.bindFramebuffer(e.FRAMEBUFFER,null)}function ho(e,t,n){let r=t?.framebufferWidth??e.drawingBufferWidth;n===`screen-space`&&(r*=2);let i=t?.framebufferHeight??e.drawingBufferHeight;return{width:r,height:i}}function go(e,t,n,r){let i=t===`vertex`?e.VERTEX_SHADER:e.FRAGMENT_SHADER,a=e[`${n.toUpperCase()}_${r.toUpperCase()}`];return e.getShaderPrecisionFormat(i,a)}function _o(e,t){return{lowFloat:go(e,t,`low`,`float`),mediumFloat:go(e,t,`medium`,`float`),highFloat:go(e,t,`high`,`float`),lowInt:go(e,t,`low`,`int`),mediumInt:go(e,t,`medium`,`int`),highInt:go(e,t,`high`,`int`)}}function vo(){return{resourceCounts:{attribute:0,elements:0,pixelPack:0,framebuffer:0,program:0,renderbuffer:0,shader:0,texture:0,cubeTexture:0,vertexArray:0},drawCount:0,instanceCount:0,instancedDrawCount:0,calls:{drawInstanced:0,drawInstancedBase:0,multiDrawInstancedBase:0,counts:0},culled:{lod:0,frustum:0,occlusion:0},cacheHits:{cull:0}}}function yo(e,t){return{maxTextureSize:e.getParameter(e.MAX_TEXTURE_SIZE),max3dTextureSize:q(e)?e.getParameter(e.MAX_3D_TEXTURE_SIZE):0,maxRenderbufferSize:e.getParameter(e.MAX_RENDERBUFFER_SIZE),maxDrawBuffers:t.drawBuffers?e.getParameter(t.drawBuffers.MAX_DRAW_BUFFERS):0,maxTextureImageUnits:e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextureImageUnits:e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)}}function bo(e,t={}){let r=on(e),i=ln(e,r),a=vo(),o=yo(e,r),s=Ga(e,i,a,r,o),c=$a(e,r,a);if(o.maxVertexTextureImageUnits<8)throw Error(`Need "MAX_VERTEX_TEXTURE_IMAGE_UNITS" >= 8`);let u={vertex:_o(e,`vertex`),fragment:_o(e,`fragment`)};l&&console.log({parameters:o,shaderPrecisionFormats:u});let d=r.provokingVertex;d?.provokingVertex(d.FIRST_VERTEX_CONVENTION);let p=!1,m=new f,h=t.pixelScale||1,g={session:void 0,layer:void 0,changed:new f,clear:()=>{g.layer=void 0,g.session=void 0,g.changed.next()}},_=new Set;return{gl:e,isWebGL2:q(e),get pixelRatio(){return(typeof window<`u`&&window.devicePixelRatio||1)*(h||1)},extensions:r,state:i,stats:a,resources:s,timer:c,get maxTextureSize(){return o.maxTextureSize},get max3dTextureSize(){return o.max3dTextureSize},get maxRenderbufferSize(){return o.maxRenderbufferSize},get maxDrawBuffers(){return o.maxDrawBuffers},get maxTextureImageUnits(){return o.maxTextureImageUnits},get shaderPrecisionFormats(){return u},namedComputeRenderables:Object.create(null),namedFramebuffers:Object.create(null),namedTextures:Object.create(null),get isContextLost(){return p||e.isContextLost()},contextRestored:m,setContextLost:()=>{p=!0,c.clear()},handleContextRestored:t=>{sn(e,r),i.reset(),i.currentMaterialId=-1,i.currentProgramId=-1,i.currentRenderItemId=-1,s.reset(),_.forEach(e=>e.reset()),t?.(),p=!1,m.next(n())},xr:{get session(){return g.session},changed:g.changed,set:async(t,n)=>{if(g.session!==t&&(await g.session?.end(),t!==void 0))try{await e.makeXRCompatible(),g.session=t,g.layer=new XRWebGLLayer(g.session,e,{antialias:!0,alpha:!0,depth:!0,stencil:!0,framebufferScaleFactor:h*(n?.resolutionScale??1)}),await g.session.updateRenderState({baseLayer:g.layer}),g.session.addEventListener(`end`,g.clear),g.changed.next()}catch(e){throw t?await t.end():(g.layer=void 0,g.session=void 0),e}},end:async()=>g.session?.end()},setPixelScale:e=>{h=e},createRenderTarget:(t,n,r,i,a,o)=>{let c=qa(e,s,t,n,r,i,a,o);return _.add(c),{...c,destroy:()=>{c.destroy(),_.delete(c)}}},createDrawTarget:()=>({id:-1,texture:ks(e),framebuffer:nn(),depthRenderbuffer:null,getByteCount:()=>0,getWidth:()=>ho(e,g.layer,g.session?.interactionMode).width,getHeight:()=>ho(e,g.layer,g.session?.interactionMode).height,bind:()=>{mo(e,g.layer)},setSize:()=>{},reset:()=>{},destroy:()=>{}}),bindDrawingBuffer:()=>mo(e,g.layer),getDrawingBufferSize:()=>ho(e,g.layer,g.session?.interactionMode),readPixels:(t,n,r,i,a)=>{po(e,t,n,r,i,a)},waitForGpuCommandsComplete:()=>uo(e),waitForGpuCommandsCompleteSync:()=>fo(e),getFenceSync:()=>q(e)?e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0):null,checkSyncStatus:t=>!q(e)||e.getSyncParameter(t,e.SYNC_STATUS)===e.SIGNALED&&(e.deleteSync(t),!0),deleteSync:t=>{q(e)&&e.deleteSync(t)},clear:(t,n,r,a)=>{let o=ho(e,g.layer);mo(e,g.layer),i.enable(e.SCISSOR_TEST),i.depthMask(!0),i.colorMask(!0,!0,!0,!0),i.clearColor(t,n,r,a),i.viewport(0,0,o.width,o.height),i.scissor(0,0,o.width,o.height),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT)},checkError:t=>{oo(e,t)},checkFramebufferStatus:t=>{$t(e,t)},destroy:t=>{s.destroy(),so(e),g.session?.removeEventListener(`end`,g.clear),g.session?.end(),m.complete(),g.changed.complete(),t?.doNotForceWebGLContextLoss||(e.getExtension(`WEBGL_lose_context`)?.loseContext(),e.getExtension(`STACKGL_destroy_context`)?.destroy())}}}var xo,So;function Co(){return(Co=e((()=>{cs(),an(),a(),o(),cn(),Ka(),Ya(),d(),s(),Ms(),ro(),xo=new Uint8Array(4),So=!1})))()}function q(e){return typeof WebGL2RenderingContext<`u`&&e instanceof WebGL2RenderingContext}function wo(e){if(q(e))return{drawArraysInstanced:e.drawArraysInstanced.bind(e),drawElementsInstanced:e.drawElementsInstanced.bind(e),vertexAttribDivisor:e.vertexAttribDivisor.bind(e),VERTEX_ATTRIB_ARRAY_DIVISOR:e.VERTEX_ATTRIB_ARRAY_DIVISOR};{let t=e.getExtension(`ANGLE_instanced_arrays`);return t===null?null:{drawArraysInstanced:t.drawArraysInstancedANGLE.bind(t),drawElementsInstanced:t.drawElementsInstancedANGLE.bind(t),vertexAttribDivisor:t.vertexAttribDivisorANGLE.bind(t),VERTEX_ATTRIB_ARRAY_DIVISOR:t.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE}}}function To(e){if(q(e))return{FRAGMENT_SHADER_DERIVATIVE_HINT:e.FRAGMENT_SHADER_DERIVATIVE_HINT};{let t=e.getExtension(`OES_standard_derivatives`);return t===null?null:{FRAGMENT_SHADER_DERIVATIVE_HINT:t.FRAGMENT_SHADER_DERIVATIVE_HINT_OES}}}function Eo(e){return q(e)?{}:e.getExtension(`OES_element_index_uint`)}function Do(e){if(q(e))return{VERTEX_ARRAY_BINDING:e.VERTEX_ARRAY_BINDING,bindVertexArray:e.bindVertexArray.bind(e),createVertexArray:e.createVertexArray.bind(e),deleteVertexArray:e.deleteVertexArray.bind(e),isVertexArray:e.isVertexArray.bind(e)};{let t=e.getExtension(`OES_vertex_array_object`);return t===null?null:{VERTEX_ARRAY_BINDING:t.VERTEX_ARRAY_BINDING_OES,bindVertexArray:t.bindVertexArrayOES.bind(t),createVertexArray:t.createVertexArrayOES.bind(t),deleteVertexArray:t.deleteVertexArrayOES.bind(t),isVertexArray:t.isVertexArrayOES.bind(t)}}}function Oo(e){return q(e)?{}:e.getExtension(`OES_texture_float`)}function ko(e){return e.getExtension(`OES_texture_float_linear`)}function Ao(e){if(q(e))return{HALF_FLOAT:e.HALF_FLOAT};{let t=e.getExtension(`OES_texture_half_float`);return t===null?null:{HALF_FLOAT:t.HALF_FLOAT_OES}}}function jo(e){return e.getExtension(`OES_texture_half_float_linear`)}function Mo(e){if(q(e))return{MIN:e.MIN,MAX:e.MAX};{let t=e.getExtension(`EXT_blend_minmax`);return t===null?null:{MIN:t.MIN_EXT,MAX:t.MAX_EXT}}}function No(e){return q(e)?{}:e.getExtension(`EXT_frag_depth`)}function Po(e){if(q(e))return e.getExtension(`EXT_color_buffer_float`)===null?null:(e.getExtension(`EXT_float_blend`),{RGBA32F:e.RGBA32F});{let t=e.getExtension(`WEBGL_color_buffer_float`);return t===null?(e.getExtension(`OES_texture_float`),is(e,e.FLOAT)?{RGBA32F:34836}:null):(e.getExtension(`EXT_float_blend`),{RGBA32F:t.RGBA32F_EXT})}}function Fo(e){if(q(e))return e.getExtension(`EXT_color_buffer_half_float`)===null?null:(e.getExtension(`EXT_float_blend`),{RGBA16F:e.RGBA16F});{let t=e.getExtension(`EXT_color_buffer_half_float`);return t===null?(e.getExtension(`OES_texture_half_float`),is(e,36193)?{RGBA16F:34842}:null):(e.getExtension(`EXT_float_blend`),{RGBA16F:t.RGBA16F_EXT})}}function Io(e){if(q(e))return{drawBuffers:e.drawBuffers.bind(e),COLOR_ATTACHMENT0:e.COLOR_ATTACHMENT0,COLOR_ATTACHMENT1:e.COLOR_ATTACHMENT1,COLOR_ATTACHMENT2:e.COLOR_ATTACHMENT2,COLOR_ATTACHMENT3:e.COLOR_ATTACHMENT3,COLOR_ATTACHMENT4:e.COLOR_ATTACHMENT4,COLOR_ATTACHMENT5:e.COLOR_ATTACHMENT5,COLOR_ATTACHMENT6:e.COLOR_ATTACHMENT6,COLOR_ATTACHMENT7:e.COLOR_ATTACHMENT7,DRAW_BUFFER0:e.DRAW_BUFFER0,DRAW_BUFFER1:e.DRAW_BUFFER1,DRAW_BUFFER2:e.DRAW_BUFFER2,DRAW_BUFFER3:e.DRAW_BUFFER3,DRAW_BUFFER4:e.DRAW_BUFFER4,DRAW_BUFFER5:e.DRAW_BUFFER5,DRAW_BUFFER6:e.DRAW_BUFFER6,DRAW_BUFFER7:e.DRAW_BUFFER7,MAX_COLOR_ATTACHMENTS:e.MAX_COLOR_ATTACHMENTS,MAX_DRAW_BUFFERS:e.MAX_DRAW_BUFFERS};{let t=e.getExtension(`WEBGL_draw_buffers`);return t===null?null:{drawBuffers:t.drawBuffersWEBGL.bind(t),COLOR_ATTACHMENT0:t.COLOR_ATTACHMENT0_WEBGL,COLOR_ATTACHMENT1:t.COLOR_ATTACHMENT1_WEBGL,COLOR_ATTACHMENT2:t.COLOR_ATTACHMENT2_WEBGL,COLOR_ATTACHMENT3:t.COLOR_ATTACHMENT3_WEBGL,COLOR_ATTACHMENT4:t.COLOR_ATTACHMENT4_WEBGL,COLOR_ATTACHMENT5:t.COLOR_ATTACHMENT5_WEBGL,COLOR_ATTACHMENT6:t.COLOR_ATTACHMENT6_WEBGL,COLOR_ATTACHMENT7:t.COLOR_ATTACHMENT7_WEBGL,DRAW_BUFFER0:t.DRAW_BUFFER0_WEBGL,DRAW_BUFFER1:t.DRAW_BUFFER1_WEBGL,DRAW_BUFFER2:t.DRAW_BUFFER2_WEBGL,DRAW_BUFFER3:t.DRAW_BUFFER3_WEBGL,DRAW_BUFFER4:t.DRAW_BUFFER4_WEBGL,DRAW_BUFFER5:t.DRAW_BUFFER5_WEBGL,DRAW_BUFFER6:t.DRAW_BUFFER6_WEBGL,DRAW_BUFFER7:t.DRAW_BUFFER7_WEBGL,MAX_COLOR_ATTACHMENTS:t.MAX_COLOR_ATTACHMENTS_WEBGL,MAX_DRAW_BUFFERS:t.MAX_DRAW_BUFFERS_WEBGL}}}function Lo(e){let t=e.getExtension(`OES_draw_buffers_indexed`);return t===null?null:{enablei:t.enableiOES.bind(t),disablei:t.disableiOES.bind(t),blendEquationi:t.blendEquationiOES.bind(t),blendEquationSeparatei:t.blendEquationSeparateiOES.bind(t),blendFunci:t.blendFunciOES.bind(t),blendFuncSeparatei:t.blendFuncSeparateiOES.bind(t),colorMaski:t.colorMaskiOES.bind(t)}}function Ro(e){return q(e)?{}:e.getExtension(`EXT_shader_texture_lod`)}function zo(e){if(q(e))return{UNSIGNED_INT_24_8:e.UNSIGNED_INT_24_8};{let t=e.getExtension(`WEBGL_depth_texture`);return t===null?null:{UNSIGNED_INT_24_8:t.UNSIGNED_INT_24_8_WEBGL}}}function Bo(e){if(q(e))return{FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING:e.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING,SRGB8_ALPHA8:e.SRGB8_ALPHA8,SRGB8:e.SRGB8,SRGB:e.SRGB};{let t=e.getExtension(`EXT_sRGB`);return t===null?null:{FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING:t.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT,SRGB8_ALPHA8:t.SRGB8_ALPHA8_EXT,SRGB8:t.SRGB_ALPHA_EXT,SRGB:t.SRGB_EXT}}}function Vo(e){if(q(e)){let t=e.getExtension(`EXT_disjoint_timer_query_webgl2`)||e.getExtension(`EXT_disjoint_timer_query`);return t===null?null:{QUERY_COUNTER_BITS:t.QUERY_COUNTER_BITS_EXT,CURRENT_QUERY:e.CURRENT_QUERY,QUERY_RESULT:e.QUERY_RESULT,QUERY_RESULT_AVAILABLE:e.QUERY_RESULT_AVAILABLE,TIME_ELAPSED:t.TIME_ELAPSED_EXT,TIMESTAMP:t.TIMESTAMP_EXT,GPU_DISJOINT:t.GPU_DISJOINT_EXT,createQuery:e.createQuery.bind(e),deleteQuery:e.deleteQuery.bind(e),isQuery:e.isQuery.bind(e),beginQuery:e.beginQuery.bind(e),endQuery:e.endQuery.bind(e),queryCounter:t.queryCounterEXT.bind(t),getQuery:e.getQuery.bind(e),getQueryParameter:e.getQueryParameter.bind(e)}}{let t=e.getExtension(`EXT_disjoint_timer_query`);return t===null?null:{QUERY_COUNTER_BITS:t.QUERY_COUNTER_BITS_EXT,CURRENT_QUERY:t.CURRENT_QUERY_EXT,QUERY_RESULT:t.QUERY_RESULT_EXT,QUERY_RESULT_AVAILABLE:t.QUERY_RESULT_AVAILABLE_EXT,TIME_ELAPSED:t.TIME_ELAPSED_EXT,TIMESTAMP:t.TIMESTAMP_EXT,GPU_DISJOINT:t.GPU_DISJOINT_EXT,createQuery:t.createQueryEXT.bind(t),deleteQuery:t.deleteQueryEXT.bind(t),isQuery:t.isQueryEXT.bind(t),beginQuery:t.beginQueryEXT.bind(t),endQuery:t.endQueryEXT.bind(t),queryCounter:t.queryCounterEXT.bind(t),getQuery:t.getQueryEXT.bind(t),getQueryParameter:t.getQueryObjectEXT.bind(t)}}}function Ho(e){let t=e.getExtension(`WEBGL_multi_draw`);return t?{multiDrawArrays:t.multiDrawArraysWEBGL.bind(t),multiDrawElements:t.multiDrawElementsWEBGL.bind(t),multiDrawArraysInstanced:t.multiDrawArraysInstancedWEBGL.bind(t),multiDrawElementsInstanced:t.multiDrawElementsInstancedWEBGL.bind(t)}:null}function Uo(e){let t=e.getExtension(`WEBGL_draw_instanced_base_vertex_base_instance`);return t?{drawArraysInstancedBaseInstance:t.drawArraysInstancedBaseInstanceWEBGL.bind(t),drawElementsInstancedBaseVertexBaseInstance:t.drawElementsInstancedBaseVertexBaseInstanceWEBGL.bind(t)}:null}function Wo(e){let t=e.getExtension(`WEBGL_multi_draw_instanced_base_vertex_base_instance`);return t?{multiDrawArraysInstancedBaseInstance:t.multiDrawArraysInstancedBaseInstanceWEBGL.bind(t),multiDrawElementsInstancedBaseVertexBaseInstance:t.multiDrawElementsInstancedBaseVertexBaseInstanceWEBGL.bind(t)}:null}function Go(e){let t=e.getExtension(`KHR_parallel_shader_compile`);return t===null?null:{COMPLETION_STATUS:t.COMPLETION_STATUS_KHR}}function Ko(e){return q(e)?{}:e.getExtension(`OES_fbo_render_mipmap`)}function qo(e){if(q(e)){let t=e.getExtension(`WEBGL_provoking_vertex`);if(t)return{FIRST_VERTEX_CONVENTION:t.FIRST_VERTEX_CONVENTION_WEBGL,LAST_VERTEX_CONVENTION:t.LAST_VERTEX_CONVENTION_WEBGL,PROVOKING_VERTEX:t.PROVOKING_VERTEX_WEBGL,provokingVertex:t.provokingVertexWEBGL.bind(t)}}return null}function Jo(e){if(q(e)){let t=e.getExtension(`WEBGL_clip_cull_distance`);if(t)return{MAX_CLIP_DISTANCES:t.MAX_CLIP_DISTANCES_WEBGL,MAX_CULL_DISTANCES:t.MAX_CULL_DISTANCES_WEBGL,MAX_COMBINED_CLIP_AND_CULL_DISTANCES:t.MAX_COMBINED_CLIP_AND_CULL_DISTANCES_WEBGL,CLIP_DISTANCE0:t.CLIP_DISTANCE0_WEBGL,CLIP_DISTANCE1:t.CLIP_DISTANCE1_WEBGL,CLIP_DISTANCE2:t.CLIP_DISTANCE2_WEBGL,CLIP_DISTANCE3:t.CLIP_DISTANCE3_WEBGL,CLIP_DISTANCE4:t.CLIP_DISTANCE4_WEBGL,CLIP_DISTANCE5:t.CLIP_DISTANCE5_WEBGL,CLIP_DISTANCE6:t.CLIP_DISTANCE6_WEBGL,CLIP_DISTANCE7:t.CLIP_DISTANCE7_WEBGL}}return null}function Yo(e){return q(e)&&e.getExtension(`EXT_conservative_depth`)?{}:null}function Xo(e){if(q(e)){let t=e.getExtension(`WEBGL_stencil_texturing`);if(t)return{DEPTH_STENCIL_TEXTURE_MODE:t.DEPTH_STENCIL_TEXTURE_MODE_WEBGL,STENCIL_INDEX:t.STENCIL_INDEX_WEBGL}}return null}function Zo(e){let t=e.getExtension(`EXT_clip_control`);return t?{LOWER_LEFT:t.LOWER_LEFT_EXT,UPPER_LEFT:t.UPPER_LEFT_EXT,NEGATIVE_ONE_TO_ONE:t.NEGATIVE_ONE_TO_ONE_EXT,ZERO_TO_ONE:t.ZERO_TO_ONE_EXT,CLIP_ORIGIN:t.CLIP_ORIGIN_EXT,CLIP_DEPTH_MODE:t.CLIP_DEPTH_MODE_EXT,clipControl:t.clipControlEXT.bind(t)}:null}function Qo(e){return q(e)&&e.getExtension(`EXT_render_snorm`)?{}:null}function $o(e){return q(e)&&e.getExtension(`WEBGL_render_shared_exponent`)?{}:null}function es(e){let t=e.getExtension(`EXT_texture_norm16`);return t?{R16:t.R16_EXT,RG16:t.RG16_EXT,RGB16:t.RGB16_EXT,RGBA16:t.RGBA16_EXT,R16_SNORM:t.R16_SNORM_EXT,RG16_SNORM:t.RG16_SNORM_EXT,RGB16_SNORM:t.RGB16_SNORM_EXT,RGBA16_SNORM:t.RGBA16_SNORM_EXT}:null}function ts(e){let t=e.getExtension(`EXT_depth_clamp`);return t?{DEPTH_CLAMP:t.DEPTH_CLAMP_EXT}:null}function ns(e){if(q(e)){let t=e.getExtension(`OVR_multiview2`);if(t)return{FRAMEBUFFER_ATTACHMENT_TEXTURE_NUM_VIEWS:t.FRAMEBUFFER_ATTACHMENT_TEXTURE_NUM_VIEWS_OVR,FRAMEBUFFER_ATTACHMENT_TEXTURE_BASE_VIEW_INDEX:t.FRAMEBUFFER_ATTACHMENT_TEXTURE_BASE_VIEW_INDEX_OVR,MAX_VIEWS:t.MAX_VIEWS_OVR,FRAMEBUFFER_INCOMPLETE_VIEW_TARGETS:t.FRAMEBUFFER_INCOMPLETE_VIEW_TARGETS_OVR,framebufferTextureMultiview:t.framebufferTextureMultiviewOVR.bind(t)}}return null}function rs(e){if(!q(e))return!1;if(typeof navigator<`u`){let e=window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);return!e||parseInt(e[1])>=85}return!1}function is(e,t){let n=Ca(e,{type:`vert`,source:as}),r=Ca(e,{type:`frag`,source:os});if(!n||!r)return!1;let i=_a(e);e.attachShader(i,n),e.attachShader(i,r),e.linkProgram(i),e.useProgram(i);let a=e.getAttribLocation(i,`aPosition`),o=e.getUniformLocation(i,`uColor`);if(!o)return l&&console.log(`error getting 'uColor' uniform location`),!1;let s=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,ss,e.STATIC_DRAW),e.enableVertexAttribArray(a),e.vertexAttribPointer(a,2,e.FLOAT,!1,0,0);let c=e.createTexture(),u=new Uint8Array([255,255,255,255]);e.bindTexture(e.TEXTURE_2D,c),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,u);let d=e.createTexture();e.bindTexture(e.TEXTURE_2D,d),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,t,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST);let f=e.createFramebuffer();if(e.bindFramebuffer(e.FRAMEBUFFER,f),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,d,0),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE)return l&&console.log(`error creating framebuffer for '${t}'`),!1;e.bindTexture(e.TEXTURE_2D,c),e.uniform4fv(o,[0,10,20,1]),e.drawArrays(e.TRIANGLES,0,6),e.bindTexture(e.TEXTURE_2D,d),e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(1,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.uniform4fv(o,[0,1/10,1/20,1]),e.drawArrays(e.TRIANGLES,0,6);let p=new Uint8Array(4);if(e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,p),p[0]!==0||p[1]<248||p[2]<248||p[3]<254)return l&&console.log(`not able to actually render to '${t}' texture`),!1;if(t===e.FLOAT){e.bindFramebuffer(e.FRAMEBUFFER,f);let t=new Float32Array(4);e.readPixels(0,0,1,1,e.RGBA,e.FLOAT,t);let n=e.getError();if(n)return l&&console.log(`error reading float pixels: '${ao(e,n)}'`),!1}return!0}var as,os,ss;function cs(){return(cs=e((()=>{o(),Co(),xa(),Ea(),as=`
attribute vec4 aPosition;

void main() {
    gl_Position = aPosition;
}`,os=`
precision mediump float;
uniform vec4 uColor;
uniform sampler2D uTexture;

void main() {
    gl_FragColor = texture2D(uTexture, vec2(0.5, 0.5)) * uColor;
}`,ss=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1])})))()}function ls(e,t){switch(t){case`image-uint8`:return e.TEXTURE_2D;case`image-float32`:return e.TEXTURE_2D;case`image-float16`:return e.TEXTURE_2D;case`image-depth`:return e.TEXTURE_2D}if(q(e))switch(t){case`image-int32`:return e.TEXTURE_2D;case`volume-uint8`:return e.TEXTURE_3D;case`volume-float32`:return e.TEXTURE_3D;case`volume-float16`:return e.TEXTURE_3D}throw Error(`unknown texture kind '${t}'`)}function us(e,t,n){switch(t){case`alpha`:return q(e)&&(n===`float`||n===`fp16`)?e.RED:q(e)&&n===`int`?e.RED_INTEGER:e.ALPHA;case`rgb`:return q(e)&&n===`int`?e.RGB_INTEGER:e.RGB;case`rg`:if(q(e)&&(n===`float`||n===`fp16`))return e.RG;if(q(e)&&n===`int`)return e.RG_INTEGER;throw Error(`texture format "rg" requires webgl2 and type "float" or int"`);case`rgba`:return q(e)&&n===`int`?e.RGBA_INTEGER:e.RGBA;case`depth`:return e.DEPTH_COMPONENT;case`depth-stencil`:return e.DEPTH_STENCIL}}function ds(e,t,n){if(q(e))switch(t){case`alpha`:switch(n){case`ubyte`:return e.ALPHA;case`float`:return e.R32F;case`fp16`:return e.R16F;case`int`:return e.R32I}case`rg`:switch(n){case`ubyte`:return e.RG;case`float`:return e.RG32F;case`fp16`:return e.RG16F;case`int`:return e.RG32I}case`rgb`:switch(n){case`ubyte`:return e.RGB;case`float`:return e.RGB32F;case`fp16`:return e.RGB16F;case`int`:return e.RGB32I}case`rgba`:switch(n){case`ubyte`:return e.RGBA;case`float`:return e.RGBA32F;case`fp16`:return e.RGBA16F;case`int`:return e.RGBA32I}case`depth`:switch(n){case`ushort`:return e.DEPTH_COMPONENT16;case`float`:return e.DEPTH_COMPONENT32F}break;case`depth-stencil`:switch(n){case`float-stencil`:return e.DEPTH32F_STENCIL8;case`uint24-8`:return e.DEPTH24_STENCIL8}}return us(e,t,n)}function fs(e,t,n,r,i){return ps(e,t)*n*r*(i||1)}function ps(e,t){return ms(e)*hs(t)}function ms(e){switch(e){case`alpha`:return 1;case`rg`:return 2;case`rgb`:return 3;case`rgba`:return 4;case`depth`:return 1;case`depth-stencil`:return 2}}function hs(e){switch(e){case`ubyte`:return 1;case`ushort`:return 2;case`float`:return 4;case`fp16`:return 2;case`int`:return 4;case`float-stencil`:return 4;case`uint24-8`:return 2}}function gs(e,t,n){switch(n){case`ubyte`:return e.UNSIGNED_BYTE;case`ushort`:return e.UNSIGNED_SHORT;case`float`:return e.FLOAT;case`fp16`:if(t.textureHalfFloat)return t.textureHalfFloat.HALF_FLOAT;throw Error(`extension "texture_half_float" unavailable`);case`int`:if(q(e))return e.INT;throw Error(`texture type "int" requires webgl2`);case`float-stencil`:if(q(e))return e.FLOAT_32_UNSIGNED_INT_24_8_REV;throw Error(`texture type "float-stencil" requires webgl2`);case`uint24-8`:if(t.depthTexture)return t.depthTexture.UNSIGNED_INT_24_8;throw Error(`extension "depth_texture" unavailable`)}}function _s(e,t){switch(t){case`nearest`:return e.NEAREST;case`linear`:return e.LINEAR}}function vs(e,t,n){switch(n){case`depth`:return e.DEPTH_ATTACHMENT;case`stencil`:return e.STENCIL_ATTACHMENT;case`depth-stencil`:return e.DEPTH_STENCIL_ATTACHMENT;case`color0`:case 0:return e.COLOR_ATTACHMENT0}if(t.drawBuffers)switch(n){case`color1`:case 1:return t.drawBuffers.COLOR_ATTACHMENT1;case`color2`:case 2:return t.drawBuffers.COLOR_ATTACHMENT2;case`color3`:case 3:return t.drawBuffers.COLOR_ATTACHMENT3;case`color4`:case 4:return t.drawBuffers.COLOR_ATTACHMENT4;case`color5`:case 5:return t.drawBuffers.COLOR_ATTACHMENT5;case`color6`:case 6:return t.drawBuffers.COLOR_ATTACHMENT6;case`color7`:case 7:return t.drawBuffers.COLOR_ATTACHMENT7}throw Error(`unknown texture attachment`)}function ys(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement}function bs(e,t,n){return t===n.TEXTURE_2D}function xs(e,t,n){return t===n.TEXTURE_3D}function Ss(e){let t=e.createTexture();if(t===null)throw Error(`Could not create WebGL texture`);return t}function Cs(e,t,n,r,i,a){let o=As(),s=Ss(e);if(n.endsWith(`float32`)&&i!==`float`||n.endsWith(`float16`)&&i!==`fp16`||n.endsWith(`uint8`)&&i!==`ubyte`||n.endsWith(`int32`)&&i!==`int`||n.endsWith(`depth`)&&i!==`ushort`&&i!==`float`&&i!==`float-stencil`&&i!==`uint24-8`)throw Error(`texture kind '${n}' and type '${i}' are incompatible`);if(!t.depthTexture&&(r===`depth`||r===`depth-stencil`))throw Error(`extension 'WEBGL_depth_texture' needed for 'depth' texture format`);let c=ls(e,n),l=_s(e,a),u=us(e,r,i),d=ds(e,r,i),f=gs(e,t,i);function p(){e.bindTexture(c,s),e.texParameteri(c,e.TEXTURE_MAG_FILTER,l),e.texParameteri(c,e.TEXTURE_MIN_FILTER,l),e.texParameteri(c,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(c,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(c,null)}p();let m=0,h=0,g=0,_,v=!1,y=!1;function b(t,n,r){if(t===0||n===0||q(e)&&c===e.TEXTURE_3D&&r===0)throw Error(`empty textures are not allowed`);if(m!==t||h!==n||g!==(r||0)){if(m=t,h=n,g=r||0,e.bindTexture(c,s),c===e.TEXTURE_2D)e.texImage2D(c,0,d,m,h,0,u,f,null);else if(q(e)&&c===e.TEXTURE_3D&&g!==void 0)e.texImage3D(c,0,d,m,h,g,0,u,f,null);else throw Error(`unknown texture target`)}}b(1,1,q(e)&&c===e.TEXTURE_3D?1:0);function x(t,n=!1){if(t.width===0||t.height===0||!ys(t)&&q(e)&&xs(t,c,e)&&t.depth===0)throw Error(`empty textures are not allowed`);if(e.bindTexture(c,s),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,0),ys(t))m=t.width,h=t.height,e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.bindTexture(e.TEXTURE_2D,s),e.texImage2D(e.TEXTURE_2D,0,d,u,f,t);else if(bs(t,c,e)){let r=t.filter?_s(e,t.filter):l;e.texParameteri(c,e.TEXTURE_MAG_FILTER,r),e.texParameteri(c,e.TEXTURE_MIN_FILTER,r),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!!t.flipY),n?e.texSubImage2D(c,0,0,0,t.width,t.height,u,f,t.array):(m=t.width,h=t.height,e.texImage2D(c,0,d,m,h,0,u,f,t.array))}else if(q(e)&&xs(t,c,e))e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),n?e.texSubImage3D(c,0,0,0,0,t.width,t.height,t.depth,u,f,t.array):(m=t.width,h=t.height,g=t.depth,e.texImage3D(c,0,d,m,h,g,0,u,f,t.array));else throw Error(`unknown texture target`);e.bindTexture(c,null),_=t}function S(){if(c!==e.TEXTURE_2D)throw Error(`mipmap only supported for 2d textures`);if(q(e)||w(m)&&w(h))e.bindTexture(c,s),e.texParameteri(c,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.generateMipmap(c),e.bindTexture(c,null),v=!0;else throw Error(`mipmap unsupported for non-power-of-two textures and webgl1`)}function C(e){return r===`depth-stencil`&&e===`depth`?`depth-stencil`:e}function T(n,r,i){let a=C(r);if(n.bind(),a===`depth-stencil`&&e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,null),c===e.TEXTURE_2D)e.framebufferTexture2D(e.FRAMEBUFFER,vs(e,t,a),e.TEXTURE_2D,s,0);else if(q(e)&&c===e.TEXTURE_3D){if(i===void 0)throw Error("need `layer` to attach 3D texture");e.framebufferTextureLayer(e.FRAMEBUFFER,vs(e,t,a),s,0,i)}else throw Error(`unknown/unsupported texture target`)}return{id:o,target:c,format:u,internalFormat:d,type:f,filter:l,getWidth:()=>m,getHeight:()=>h,getDepth:()=>g,getByteCount:()=>fs(r,i,m,h,g),define:b,load:x,mipmap:S,bind:t=>{e.activeTexture(e.TEXTURE0+t),e.bindTexture(c,s)},unbind:t=>{e.activeTexture(e.TEXTURE0+t),e.bindTexture(c,null)},attachFramebuffer:T,detachFramebuffer:(n,r)=>{let i=C(r);if(n.bind(),c===e.TEXTURE_2D)e.framebufferTexture2D(e.FRAMEBUFFER,vs(e,t,i),e.TEXTURE_2D,null,0);else if(q(e)&&c===e.TEXTURE_3D)e.framebufferTextureLayer(e.FRAMEBUFFER,vs(e,t,i),null,0,0);else throw Error(`unknown texture target`)},reset:()=>{s=Ss(e),p();let[t,n,r]=[m,h,g];m=0,h=0,g=0,b(t,n,r),_&&x(_),v&&S()},destroy:()=>{y||=(e.deleteTexture(s),!0)}}}function ws(e,t,n){let{resources:r}=e,i=[];return Object.keys(t).forEach(e=>{let a=t[e];if(a.type===`texture`){let t=n[e];if(t){if(a.kind===`texture`)i[i.length]=[e,t.ref.value];else{let n=r.texture(a.kind,a.format,a.dataType,a.filter);n.load(t.ref.value),i[i.length]=[e,n]}}}}),i}function Ts(e,t,n){let r=new Image;r.onload=function(){n.load(r),I.update(t,n)},r.src=e}function Es(e,t){switch(t){case`nx`:return e.TEXTURE_CUBE_MAP_NEGATIVE_X;case`ny`:return e.TEXTURE_CUBE_MAP_NEGATIVE_Y;case`nz`:return e.TEXTURE_CUBE_MAP_NEGATIVE_Z;case`px`:return e.TEXTURE_CUBE_MAP_POSITIVE_X;case`py`:return e.TEXTURE_CUBE_MAP_POSITIVE_Y;case`pz`:return e.TEXTURE_CUBE_MAP_POSITIVE_Z}}function Ds(e,t,n,r){let a=e.TEXTURE_CUBE_MAP,o=e.LINEAR,s=e.RGBA,c=e.RGBA,l=e.UNSIGNED_BYTE,u=0,d=e.createTexture();e.bindTexture(a,d);function f(t,i,f,p){u===0&&(u=f.width),e.bindTexture(a,d),e.texImage2D(t,i,s,u,u,0,c,l,null),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,0),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.bindTexture(a,d),e.texImage2D(t,i,s,c,l,f),m+=1,m===6&&(h||(n?(e.texParameteri(a,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.generateMipmap(a)):e.texParameteri(a,e.TEXTURE_MIN_FILTER,o),e.texParameteri(a,e.TEXTURE_MAG_FILTER,o)),p||r?.(h))}let p=[],m=0;ne(t,(t,n)=>{if(!t)return;let a=Es(e,n),o=new Image;t instanceof File?o.src=URL.createObjectURL(t):i(t)?t.then(e=>{o.src=URL.createObjectURL(e)}):o.src=t,p.push({cubeTarget:a,level:0,image:o}),o.addEventListener(`load`,()=>{f(a,0,o,!1)}),o.addEventListener(`error`,()=>{r?.(!0)})});let h=!1;return{id:As(),target:a,format:c,internalFormat:s,type:l,filter:o,getWidth:()=>u,getHeight:()=>u,getDepth:()=>0,getByteCount:()=>fs(`rgba`,`ubyte`,u,u,0)*6*(n?2:1),define:()=>{},load:()=>{},mipmap:()=>{},bind:t=>{e.activeTexture(e.TEXTURE0+t),e.bindTexture(a,d)},unbind:t=>{e.activeTexture(e.TEXTURE0+t),e.bindTexture(a,null)},attachFramebuffer:()=>{},detachFramebuffer:()=>{},reset:()=>{d=Ss(e),e.bindTexture(a,d),m=0;for(let{cubeTarget:e,level:t,image:n}of p)f(e,t,n,!0)},destroy:()=>{h||=(e.deleteTexture(d),!0)}}}function Os(e){return e.format===js}function ks(e){let t=e?.TEXTURE_2D??3553;return{id:As(),target:t,format:js,internalFormat:0,type:0,filter:0,getWidth:()=>0,getHeight:()=>0,getDepth:()=>0,getByteCount:()=>0,define:()=>{},load:()=>{},mipmap:()=>{},bind:n=>{e&&(e.activeTexture(e.TEXTURE0+n),e.bindTexture(t,null))},unbind:n=>{e&&(e.activeTexture(e.TEXTURE0+n),e.bindTexture(t,null))},attachFramebuffer:()=>{throw Error(`cannot attach null-texture to a framebuffer`)},detachFramebuffer:()=>{throw Error(`cannot detach null-texture from a framebuffer`)},reset:()=>{},destroy:()=>{}}}var As,js;function Ms(){return(Ms=e((()=>{N(),cs(),M(),P(),As=r(),js=-1})))()}function Ns(e,t,n,r){for(let i=t;i<n;++i)v.toArray(r,e,i*4),e[i*4+3]=255;return!0}function Ps(e,t,n){return e.fill(0,t*4,n*4),!0}function Fs(e,t,n){let r=G(Math.max(1,e),4,Uint8Array,n&&n.tOverpaint.ref.value.array);return n?(I.update(n.tOverpaint,r),I.update(n.uOverpaintTexDim,A.create(r.width,r.height)),I.updateIfChanged(n.dOverpaint,e>0),I.updateIfChanged(n.dOverpaintType,t),n):{tOverpaint:I.create(r),uOverpaintTexDim:I.create(A.create(r.width,r.height)),dOverpaint:I.create(e>0),tOverpaintGrid:I.create(ks()),uOverpaintGridDim:I.create(h.create(1,1,1)),uOverpaintGridTransform:I.create(H.create(0,0,0,1)),dOverpaintType:I.create(t),uOverpaintStrength:I.create(1)}}function Is(e){return e?(I.update(e.tOverpaint,Ls),I.update(e.uOverpaintTexDim,A.create(1,1)),e):{tOverpaint:I.create(Ls),uOverpaintTexDim:I.create(A.create(1,1)),dOverpaint:I.create(!1),tOverpaintGrid:I.create(ks()),uOverpaintGridDim:I.create(h.create(1,1,1)),uOverpaintGridTransform:I.create(H.create(0,0,0,1)),dOverpaintType:I.create(`groupInstance`),uOverpaintStrength:I.create(1)}}var Ls;function Rs(){return(Rs=e((()=>{se(),B(),K(),be(),Ms(),Ls={array:new Uint8Array(4),width:1,height:1}})))()}function zs(e,t,n,r){for(let i=t;i<n;++i)e[i]=r*255;return!0}function Bs(e,t){if(t===0||e.length<t)return 0;let n=0;for(let r=0;r<t;++r)n+=e[r];return n/(255*t)}function Vs(e,t){if(t===0||e.length<t)return 1;let n=255;for(let r=0;r<t;++r)e[r]>0&&e[r]<n&&(n=e[r]);return n/255}function Hs(e,t,n){e.fill(0,t,n)}function Us(e,t,n){let r=G(Math.max(1,e),1,Uint8Array,n&&n.tTransparency.ref.value.array);return n?(I.update(n.tTransparency,r),I.update(n.uTransparencyTexDim,A.create(r.width,r.height)),I.updateIfChanged(n.dTransparency,e>0),I.updateIfChanged(n.transparencyAverage,Bs(r.array,e)),I.updateIfChanged(n.transparencyMin,Vs(r.array,e)),I.updateIfChanged(n.dTransparencyType,t),n):{tTransparency:I.create(r),uTransparencyTexDim:I.create(A.create(r.width,r.height)),dTransparency:I.create(e>0),transparencyAverage:I.create(0),transparencyMin:I.create(1),tTransparencyGrid:I.create(ks()),uTransparencyGridDim:I.create(h.create(1,1,1)),uTransparencyGridTransform:I.create(H.create(0,0,0,1)),dTransparencyType:I.create(t),uTransparencyStrength:I.create(1)}}function Ws(e){return e?(I.update(e.tTransparency,Gs),I.update(e.uTransparencyTexDim,A.create(1,1)),e):{tTransparency:I.create(Gs),uTransparencyTexDim:I.create(A.create(1,1)),dTransparency:I.create(!1),transparencyAverage:I.create(0),transparencyMin:I.create(1),tTransparencyGrid:I.create(ks()),uTransparencyGridDim:I.create(h.create(1,1,1)),uTransparencyGridTransform:I.create(H.create(0,0,0,1)),dTransparencyType:I.create(`groupInstance`),uTransparencyStrength:I.create(1)}}var Gs;function Ks(){return(Ks=e((()=>{se(),B(),K(),Ms(),Gs={array:new Uint8Array(1),width:1,height:1}})))()}function qs(e,t,n,r){return e.fill(r,t,n),!0}function Js(e,t,n){e.fill(0,t,n)}function Ys(e,t,n){let r=G(Math.max(1,e),1,Uint8Array,n&&n.tClipping.ref.value.array);return n?(I.update(n.tClipping,r),I.update(n.uClippingTexDim,A.create(r.width,r.height)),I.updateIfChanged(n.dClipping,e>0),I.updateIfChanged(n.dClippingType,t),n):{tClipping:I.create(r),uClippingTexDim:I.create(A.create(r.width,r.height)),dClipping:I.create(e>0),dClippingType:I.create(t)}}function Xs(e){return e?(I.update(e.tClipping,Zs),I.update(e.uClippingTexDim,A.create(1,1)),I.updateIfChanged(e.dClipping,!1),e):{tClipping:I.create(Zs),uClippingTexDim:I.create(A.create(1,1)),dClipping:I.create(!1),dClippingType:I.create(`groupInstance`)}}var Zs;function Qs(){return(Qs=e((()=>{se(),B(),K(),Zs={array:new Uint8Array(1),width:1,height:1}})))()}function $s(e,t){if(t===0)return 0;let n=new Uint32Array(e.buffer,0,e.buffer.byteLength>>2),r=t-4>>2,i=4*r,a=0;if(r<0)for(let n=0;n<t;++n)a+=e[n]&&1;else{for(let e=0;e<r;++e){let t=n[e];a+=tc[t&65535]+tc[t>>16]}for(let n=i;n<t;++n)a+=e[n]&&1}return a/t}function ec(e,t,n){if(n){let r=G(Math.max(1,e),1,Uint8Array,n.tMarker.ref.value.array);return r.array.fill(0,0,e),I.updateIfChanged(n.uMarker,0),I.update(n.tMarker,r),I.update(n.uMarkerTexDim,A.create(r.width,r.height)),I.updateIfChanged(n.markerAverage,0),I.updateIfChanged(n.markerStatus,0),I.updateIfChanged(n.dMarkerType,t),n}{let n=G(Math.max(1,e),1,Uint8Array);return{uMarker:I.create(0),tMarker:I.create(n),uMarkerTexDim:I.create(A.create(n.width,n.height)),markerAverage:I.create(0),markerStatus:I.create(0),dMarkerType:I.create(t)}}}var tc;function nc(){return(nc=e((()=>{se(),B(),K(),tc=new Uint8Array(772),tc[1]=1,tc[2]=1,tc[3]=1,tc[256]=1,tc[512]=1,tc[768]=1,tc[257]=2,tc[513]=2,tc[769]=2,tc[258]=2,tc[514]=2,tc[770]=2,tc[259]=2,tc[515]=2,tc[771]=2})))()}function rc(e,t,n){return e=C(Math.round(e),0,16777215)+1,t[n+2]=e%256,e=Math.floor(e/256),t[n+1]=e%256,e=Math.floor(e/256),t[n]=e%256,t}function ic(e,t,n){return Math.floor(e)*256*256+Math.floor(t)*256+Math.floor(n)-1}function ac(e,t,n,r){return H.set(uc,e/255,t/255,n/255,r/255),H.dot(uc,lc)}function oc(e,t){let n=-1/0;for(let r=0,i=e.length;r<i;r+=t){let t=ic(e[r],e[r+1],e[r+2]);t>n&&(n=t)}return n}var sc,cc,lc,uc;function dc(){return(dc=e((()=>{ue(),Me(),sc=255/256,cc=h.create(16777216,65536,256),lc=H.create(sc/cc[0],sc/cc[1],sc/cc[2],sc/1),uc=H()})))()}function fc(){let e=new ArrayBuffer(4),t=new Float32Array(e),n=new Uint32Array(e),r=new Uint32Array(512),i=new Uint32Array(512);for(let e=0;e<256;++e){let t=e-127;t<-27?(r[e]=0,r[e|256]=32768,i[e]=24,i[e|256]=24):t<-14?(r[e]=1024>>-t-14,r[e|256]=1024>>-t-14|32768,i[e]=-t-1,i[e|256]=-t-1):t<=15?(r[e]=t+15<<10,r[e|256]=t+15<<10|32768,i[e]=13,i[e|256]=13):t<128?(r[e]=31744,r[e|256]=64512,i[e]=24,i[e|256]=24):(r[e]=31744,r[e|256]=64512,i[e]=13,i[e|256]=13)}let a=new Uint32Array(2048),o=new Uint32Array(64),s=new Uint32Array(64);for(let e=1;e<1024;++e){let t=e<<13,n=0;for(;!(t&8388608);)t<<=1,n-=8388608;t&=-8388609,n+=947912704,a[e]=t|n}for(let e=1024;e<2048;++e)a[e]=939524096+(e-1024<<13);for(let e=1;e<31;++e)o[e]=e<<23;o[31]=1199570944,o[32]=2147483648;for(let e=33;e<63;++e)o[e]=2147483648+(e-32<<23);o[63]=3347054592;for(let e=1;e<64;++e)e!==32&&(s[e]=1024);return{floatView:t,uint32View:n,baseTable:r,shiftTable:i,mantissaTable:a,exponentTable:o,offsetTable:s}}function pc(e){e=C(e,-65504,65504),mc.floatView[0]=e;let t=mc.uint32View[0],n=t>>23&511;return mc.baseTable[n]+((t&8388607)>>mc.shiftTable[n])}var mc;function hc(){return(hc=e((()=>{mc=fc()})))()}function gc(e,t,n,r){let i=!1,a=t.grid.cells.data.length;if(ze.isLoci(e)){if(!ze.areEquivalent(e.volume,t))return!1;if(ke.is(e.instances)){let t=ke.start(e.instances)*a,n=ke.end(e.instances)*a;r(ke.ofBounds(t,n))&&(i=!0)}else for(let t=0,n=e.instances.length;t<n;++t){let n=e.instances[t]*a;r(ke.ofBounds(n,n+a))&&(i=!0)}}else if(ze.Isosurface.isLoci(e)){if(!ze.areEquivalent(e.volume,t))return!1;if(n?.isoValue){if(!ze.IsoValue.areSame(e.isoValue,n.isoValue,t.grid.stats))return!1;if(ke.is(e.instances)){let t=ke.start(e.instances)*a,n=ke.end(e.instances)*a;r(ke.ofBounds(t,n))&&(i=!0)}else for(let t=0,n=e.instances.length;t<n;++t){let n=e.instances[t]*a;r(ke.ofBounds(n,n+a))&&(i=!0)}}else{let{stats:n,cells:{data:o}}=t.grid,s=n.sigma,c=ze.IsoValue.toAbsolute(e.isoValue,n).absoluteValue;for(let t=0,n=o.length;t<n;++t)oe(c,o[t],s)&&De.forEach(e.instances,e=>{let n=e*a;r(ke.ofSingleton(n+t))&&(i=!0)})}}else if(ze.Cell.isLoci(e)){if(!ze.areEquivalent(e.volume,t))return!1;for(let{indices:t,instances:n}of e.elements)ke.is(t)?De.forEach(n,e=>{let n=e*a;r(ke.offset(t,n))&&(i=!0)}):De.forEach(t,e=>{De.forEach(n,t=>{let n=t*a;r(ke.ofSingleton(n+e))&&(i=!0)})})}else if(ze.Segment.isLoci(e)){if(!ze.areEquivalent(e.volume,t))return!1;if(n?.segments)for(let{segments:t,instances:o}of e.elements)De.areIntersecting(t,n.segments)&&De.forEach(o,e=>{let t=e*a;r(ke.ofBounds(t,t+a))&&(i=!0)});else{let n=ze.Segmentation.get(t);if(n){let o=new Set;for(let{segments:s,instances:c}of e.elements){for(let e=0,t=De.size(s);e<t;e++){let t=De.getAt(s,e);Ce.add(o,n.segments.get(t))}let e=Array.from(o.values()),l=t.grid.cells.data;for(let t=0,n=l.length;t<n;++t)if(e.includes(l[t]))for(let e=0,n=De.size(c);e<n;e++){let n=e*a;r(ke.ofSingleton(t+n))&&(i=!0)}}}}}return i}function _c(e,t){let[n,r,i]=e.grid.cells.space.dimensions,a=n*r*i,o=e.instances.length,s=ze.Cell.Location(e);return qe(a,o,1,(e,t)=>(s.cell=e,s.instance=t,s))}function vc(e,t,n){let r=n.meta.mapping;if(!r)return _c(e,t);let i=r.cell.length,a=ze.isPeriodic(e)?1:e.instances.length,o=ze.Cell.Location(e);return qe(i,a,1,(e,t)=>(o.cell=e,o.instance=t,o),ze.isPeriodic(e))}function yc(e,t=0){let n=e[0]*e[1]*e[2],r=2**Math.ceil(Math.log(Math.sqrt(n))/Math.log(2)),i=e[0]+t,a=e[1]+t,o=1,s=i;return r<i*e[2]?(s=Math.floor(r/i),o=Math.ceil(e[2]/s),i*=s,a*=o):i*=e[2],{width:i,height:a,columns:s,rows:o,powerOfTwoSize:a<r?r:r*2}}function bc(e,t,n=0,r=`byte`){let{cells:{space:i,data:a},stats:{max:o,min:s}}=e.grid,c=i.dimensions,{dataOffset:l}=i,{width:u,height:d}=yc(c,n),f=t===`data`?1:4,p=r===`byte`?new Uint8Array(u*d*f):r===`halfFloat`?new Uint16Array(u*d*f):new Float32Array(u*d*f),m={array:p,width:u,height:d},g=o-s,[_,v,y]=c,b=_+n,x=v+n,S=h(),w=h(),T=_-1,E=v-1,D=y-1;for(let e=0;e<y;++e)for(let n=0;n<v;++n)for(let i=0;i<_;++i){let o=Math.floor(e*b%u/b),c=Math.floor(e*b/u),d=o*b+i,m=f*(c*x*u+n*u+d),h=l(i,n,e),_;if(_=r===`byte`?Math.round((a[h]-s)/g*255):r===`halfFloat`?pc((a[h]-s)/g):(a[h]-s)/g,t===`data`)p[m]=_;else{if(t===`groups`){if(r===`halfFloat`){let e=C(Math.round(h),0,16777215)+1;p[m+2]=pc(e%256),e=Math.floor(e/256),p[m+1]=pc(e%256),e=Math.floor(e/256),p[m]=pc(e%256)}else rc(h,p,m)}else Ec(S,a[l(Math.max(0,i-1),n,e)],a[l(i,Math.max(0,n-1),e)],a[l(i,n,Math.max(0,e-1))]),Ec(w,a[l(Math.min(T,i+1),n,e)],a[l(i,Math.min(E,n+1),e)],a[l(i,n,Math.min(D,e+1))]),Dc(S,Oc(S,S,w)),kc(S,Ac(S,S,.5),.5),r===`byte`?jc(Ac(S,S,255),p,m):r===`halfFloat`?(p[m]=pc(S[0]),p[m+1]=pc(S[1]),p[m+2]=pc(S[2])):jc(S,p,m);p[m+3]=_}}return m}function xc(e,t=`byte`){let{cells:{space:n,data:r},stats:{max:i,min:a}}=e.grid,[o,s,c]=n.dimensions,{dataOffset:l}=n,u=t===`byte`?new Uint8Array(o*s*c*4):t===`halfFloat`?new Uint16Array(o*s*c*4):new Float32Array(o*s*c*4),d={array:u,width:o,height:s,depth:c},f=i-a,p=h(),m=h(),g=o-1,_=s-1,v=c-1,y=0;for(let e=0;e<c;++e)for(let n=0;n<s;++n)for(let i=0;i<o;++i){let o=l(i,n,e);Ec(p,r[l(Math.max(0,i-1),n,e)],r[l(i,Math.max(0,n-1),e)],r[l(i,n,Math.max(0,e-1))]),Ec(m,r[l(Math.min(g,i+1),n,e)],r[l(i,Math.min(_,n+1),e)],r[l(i,n,Math.min(v,e+1))]),Dc(p,Oc(p,p,m)),kc(p,Ac(p,p,.5),.5),t===`byte`?(jc(Ac(p,p,255),u,y),u[y+3]=Math.round((r[o]-a)/f*255)):t===`halfFloat`?(u[y]=pc(p[0]),u[y+1]=pc(p[1]),u[y+2]=pc(p[2]),u[y+3]=pc((r[o]-a)/f)):(jc(p,u,y),u[y+3]=(r[o]-a)/f),y+=4}return d}function Sc(e,t,n,r=0){let i=e.grid.cells.data,a=z.size(h(),n),o=e.grid.cells.space.dataOffset,{width:s,height:c}=yc(a,r),l=new Uint8Array(s*c*1),u={array:l,width:s,height:c},[d,f,p]=a,m=d-1,g=f-1,_=p-1,v=d+r,y=f+r,[b,x,S]=n.min,[C,w,T]=n.max;for(let e=0;e<p;++e)for(let n=0;n<f;++n)for(let r=0;r<d;++r){let a=Math.floor(e*v%s/v),c=Math.floor(e*v/s),u=a*v+r,d=1*(c*y*s+n*s+u),f=t.includes(i[o(r+b,n+x,e+S)])?255:0,p=t.includes(i[o(Math.min(m+C,r+1+b),n+x,e+S)])?255:0,h=t.includes(i[o(Math.max(0,r-1+b),n+x,e+S)])?255:0,E=t.includes(i[o(r+b,Math.min(g+w,n+1+x),e+S)])?255:0,D=t.includes(i[o(r+b,Math.max(0,n-1+x),e+S)])?255:0,O=t.includes(i[o(r+b,n+x,Math.min(_+T,e+1+S))])?255:0,k=t.includes(i[o(r+b,n+x,Math.max(0,e-1+S))])?255:0;l[d]=Math.round((f+f+p+h+E+D+O+k)/8)}return u}function Cc(e){let{space:t,data:n}=e,{get:r,set:i,add:a,dataOffset:o}=t,[s,c,l]=t.dimensions,u=h.create(s+1,c+1,l+1),d=(e,t,n,i)=>r(e,t%s,n%c,i%l),f=(e,t,n,r,a)=>i(e,t%s,n%c,r%l,a),p=(e,t,n,r,i)=>a(e,t%s,n%c,r%l,i),m=(e,t,n)=>o(e%s,t%c,n%l);return{data:n,space:{...t,dimensions:u,get:d,set:f,add:p,dataOffset:m}}}function wc(e){let{grid:t}=e,n=Re.getGridToCartesianTransform(t),r={...t,transform:{kind:`matrix`,matrix:n},cells:Cc(t.cells)};return{...e,grid:r,parent:e}}function Tc(e,t,n){let{grid:r}=e,{space:i}=r.cells,{get:a,set:o,add:s,dataOffset:c}=i,[l,u,d]=i.dimensions,f=h.sub(h(),n,t),p=h.create(l*f[0],u*f[1],d*f[2]),m=(e,t,n,r)=>a(e,t%l,n%u,r%d),g=(e,t,n,r,i)=>o(e,t%l,n%u,r%d,i),_=(e,t,n,r,i)=>s(e,t%l,n%u,r%d,i),v=(e,t,n)=>c(e%l,t%u,n%d),y={...i,dimensions:p,get:m,set:g,add:_,dataOffset:v},b=Re.getGridToCartesianTransform(e.grid),x=E.getScaling(h(),b);h.mul(x,x,i.dimensions);let S=h.mul(h(),t,x);E.setTranslation(b,S);let C={kind:`matrix`,matrix:b},w={...r,transform:C,cells:{...r.cells,space:y}};return{...e,grid:w,parent:e,instances:[{transform:E.identity()}]}}var Ec,Dc,Oc,kc,Ac,jc;function Mc(){return(Mc=e((()=>{Be(),S(),ue(),dc(),Se(),Fe(),hc(),Ye(),Ae(),Ne(),g(),Ec=h.set,Dc=h.normalize,Oc=h.sub,kc=h.addScalar,Ac=h.scale,jc=h.toArray})))()}function Nc(e,t,n,r){let{colorType:i,vertexCount:a,groupCount:o,positionBuffer:s,instanceBuffer:c,transformBuffer:l,groupBuffer:u,itemSize:d}=e,{resolution:f,stride:p}=t,m=i.endsWith(`Instance`),g=z.fromSphere3D(z(),m?e.boundingSphere:e.invariantBoundingSphere),_=1+f,v=z.expand(z(),g,h.create(_,_,_)),y=1/f,b=z.scale(z(),v,y),x=z.size(h(),b);h.ceil(x,x),h.add(x,x,h.create(2,2,2));let{min:S}=v,[C,w]=x,{width:T,height:E}=yc(x),D=new Float32Array(T*E*d),O=new Float32Array(T*E),k=new Uint8Array(T*E*d),j={array:k,width:T,height:E,filter:`linear`},ee=m?e.instanceCount:1,M=e.colorData.array;function N(e,t,n){let r=Math.floor(n*C%T/C),i=Math.floor(n*C/T),a=r*C+e;return d*(i*w*T+t*T+a)}let[te,ne,re]=x,P=h();for(let e=0;e<ee;++e){let t=n&&m?c[e]:e;for(let n=0;n<a;n+=p){h.fromArray(P,s,n*3),m&&h.transformMat4Offset(P,P,l,0,0,e*16),h.sub(P,P,S),h.scale(P,P,y);let[r,i,a]=P,c=Math.floor(r),f=Math.floor(i),p=Math.floor(a),g=(t*o+u[n])*d,_=Math.max(0,c-2),v=Math.max(0,f-2),b=Math.max(0,p-2),x=Math.min(te,c+2+2),C=Math.min(ne,f+2+2),w=Math.min(re,p+2+2);for(let e=_;e<x;++e){let t=e-r;for(let n=v;n<C;++n){let r=n-i;for(let i=b;i<w;++i){let o=i-a,s=Math.sqrt(t*t+r*r+o*o);if(s>2)continue;let c=2-s,l=N(e,n,i);for(let e=0;e<d;++e)D[l+e]+=M[g+e]*c;O[l/d]+=c}}}}}for(let e=0,t=O.length;e<t;++e){let t=e*d,n=O[e];for(let e=0;e<d;++e)k[t+e]=Math.round(D[t+e]/n)}let ie=A.create(T,E),F=H.create(S[0],S[1],S[2],y),I=m?`volumeInstance`:`volume`;if(n){if(!r){let e=d===4?`rgba`:d===3?`rgb`:`alpha`;r=n.resources.texture(`image-uint8`,e,`ubyte`,`linear`)}return r.load(j),{kind:`volume`,texture:r,gridTexDim:ie,gridDim:x,gridTransform:F,type:I}}{let e=Pc({vertexCount:a,instanceCount:ee,transformBuffer:l,positionBuffer:s,colorType:I,grid:k,gridDim:x,gridTexDim:ie,gridTransform:F,vertexStride:3,colorStride:d,outputStride:d});return{kind:`vertex`,texture:e,texDim:A.create(e.width,e.height),type:m?`vertexInstance`:`vertex`}}}function Pc(e){let{vertexCount:t,positionBuffer:n,transformBuffer:r,grid:i,gridDim:a,gridTexDim:o,gridTransform:s,vertexStride:c,colorStride:l}=e,u=e.itemOffset||0,d=e.outputStride;if(d+u>l)throw Error(`outputStride + itemOffset must NOT be larger than colorStride`);let f=e.colorType.endsWith(`Instance`),p=f?e.instanceCount:1,m=G(Math.max(1,p*t),d,Uint8Array),{array:g}=m,[_,v]=a,y=o[0],b=h.fromArray(h(),s,0),x=s[3];function S(e,t,n){let r=Math.floor(n*_%y/_),i=Math.floor(n*_/y),a=r*_+e;return l*(i*v*y+t*y+a)}let C=h(),w=h(),T=h(),E=h();for(let e=0;e<p;++e)for(let a=0;a<t;++a){h.fromArray(C,n,a*c),f&&h.transformMat4Offset(C,C,r,0,0,e*16),h.sub(C,C,b),h.scale(C,C,x),h.floor(w,C),h.ceil(T,C),h.sub(E,C,w),h.sub(C,T,w),h.div(E,E,C);let[o,s,l]=w,[p,m,_]=T,[v,y,D]=E,O=S(o,s,l)+u,k=S(p,s,l)+u,A=S(o,s,_)+u,j=S(p,s,_)+u,ee=S(o,m,l)+u,M=S(p,m,l)+u,N=S(o,m,_)+u,te=S(p,m,_)+u,ne=(e*t+a)*d;for(let e=0;e<d;++e){let t=i[O+e],n=i[k+e],r=i[A+e],a=i[j+e],o=i[ee+e],s=i[M+e],c=i[N+e],l=i[te+e],u=fe(t,n,v),d=fe(r,a,v),f=fe(o,s,v),p=fe(c,l,v),m=fe(u,f,y),h=fe(d,p,y);g[ne+e]=fe(m,h,D)}}return m}function Fc(e){return e===`group`||e===`groupInstance`}function Ic(e,t,n,r){if(!Fc(e.dColorType.ref.value))return;let i=Nc({vertexCount:e.uVertexCount.ref.value,instanceCount:e.uInstanceCount.ref.value,groupCount:e.uGroupCount.ref.value,transformBuffer:e.aTransform.ref.value,instanceBuffer:e.aInstance.ref.value,positionBuffer:e.aPosition.ref.value,groupBuffer:e.aGroup.ref.value,colorData:e.tColor.ref.value,colorType:e.dColorType.ref.value,boundingSphere:e.boundingSphere.ref.value,invariantBoundingSphere:e.invariantBoundingSphere.ref.value,itemSize:3},t,n,r);i.kind===`volume`?(I.updateIfChanged(e.dColorType,i.type),I.update(e.tColorGrid,i.texture),I.update(e.uColorTexDim,i.gridTexDim),I.update(e.uColorGridDim,i.gridDim),I.update(e.uColorGridTransform,i.gridTransform)):i.kind===`vertex`&&(I.updateIfChanged(e.dColorType,i.type),I.update(e.tColor,i.texture),I.update(e.uColorTexDim,i.texDim))}function Lc(e){return e===`groupInstance`}function Rc(e,t,n,r){if(!Lc(e.dOverpaintType.ref.value))return;let i=Nc({vertexCount:e.uVertexCount.ref.value,instanceCount:e.uInstanceCount.ref.value,groupCount:e.uGroupCount.ref.value,transformBuffer:e.aTransform.ref.value,instanceBuffer:e.aInstance.ref.value,positionBuffer:e.aPosition.ref.value,groupBuffer:e.aGroup.ref.value,colorData:e.tOverpaint.ref.value,colorType:e.dOverpaintType.ref.value,boundingSphere:e.boundingSphere.ref.value,invariantBoundingSphere:e.invariantBoundingSphere.ref.value,itemSize:4},t,n,r);i.kind===`volume`?(I.updateIfChanged(e.dOverpaintType,i.type),I.update(e.tOverpaintGrid,i.texture),I.update(e.uOverpaintTexDim,i.gridTexDim),I.update(e.uOverpaintGridDim,i.gridDim),I.update(e.uOverpaintGridTransform,i.gridTransform)):i.kind===`vertex`&&(I.updateIfChanged(e.dOverpaintType,i.type),I.update(e.tOverpaint,i.texture),I.update(e.uOverpaintTexDim,i.texDim))}function zc(e){return e===`groupInstance`}function Bc(e,t,n,r){if(!zc(e.dTransparencyType.ref.value))return;let i=Nc({vertexCount:e.uVertexCount.ref.value,instanceCount:e.uInstanceCount.ref.value,groupCount:e.uGroupCount.ref.value,transformBuffer:e.aTransform.ref.value,instanceBuffer:e.aInstance.ref.value,positionBuffer:e.aPosition.ref.value,groupBuffer:e.aGroup.ref.value,colorData:e.tTransparency.ref.value,colorType:e.dTransparencyType.ref.value,boundingSphere:e.boundingSphere.ref.value,invariantBoundingSphere:e.invariantBoundingSphere.ref.value,itemSize:1},t,n,r);i.kind===`volume`?(I.updateIfChanged(e.dTransparencyType,i.type),I.update(e.tTransparencyGrid,i.texture),I.update(e.uTransparencyTexDim,i.gridTexDim),I.update(e.uTransparencyGridDim,i.gridDim),I.update(e.uTransparencyGridTransform,i.gridTransform)):i.kind===`vertex`&&(I.updateIfChanged(e.dTransparencyType,i.type),I.update(e.tTransparency,i.texture),I.update(e.uTransparencyTexDim,i.texDim))}function Vc(e){return e===`groupInstance`}function Hc(e,t,n,r){if(!Vc(e.dEmissiveType.ref.value))return;let i=Nc({vertexCount:e.uVertexCount.ref.value,instanceCount:e.uInstanceCount.ref.value,groupCount:e.uGroupCount.ref.value,transformBuffer:e.aTransform.ref.value,instanceBuffer:e.aInstance.ref.value,positionBuffer:e.aPosition.ref.value,groupBuffer:e.aGroup.ref.value,colorData:e.tEmissive.ref.value,colorType:e.dEmissiveType.ref.value,boundingSphere:e.boundingSphere.ref.value,invariantBoundingSphere:e.invariantBoundingSphere.ref.value,itemSize:1},t,n,r);i.kind===`volume`?(I.updateIfChanged(e.dEmissiveType,i.type),I.update(e.tEmissiveGrid,i.texture),I.update(e.uEmissiveTexDim,i.gridTexDim),I.update(e.uEmissiveGridDim,i.gridDim),I.update(e.uEmissiveGridTransform,i.gridTransform)):i.kind===`vertex`&&(I.updateIfChanged(e.dEmissiveType,i.type),I.update(e.tEmissive,i.texture),I.update(e.uEmissiveTexDim,i.texDim))}function Uc(e){return e===`groupInstance`}function Wc(e,t,n,r){if(!Uc(e.dSubstanceType.ref.value))return;let i=Nc({vertexCount:e.uVertexCount.ref.value,instanceCount:e.uInstanceCount.ref.value,groupCount:e.uGroupCount.ref.value,transformBuffer:e.aTransform.ref.value,instanceBuffer:e.aInstance.ref.value,positionBuffer:e.aPosition.ref.value,groupBuffer:e.aGroup.ref.value,colorData:e.tSubstance.ref.value,colorType:e.dSubstanceType.ref.value,boundingSphere:e.boundingSphere.ref.value,invariantBoundingSphere:e.invariantBoundingSphere.ref.value,itemSize:4},t,n,r);i.kind===`volume`?(I.updateIfChanged(e.dSubstanceType,i.type),I.update(e.tSubstanceGrid,i.texture),I.update(e.uSubstanceTexDim,i.gridTexDim),I.update(e.uSubstanceGridDim,i.gridDim),I.update(e.uSubstanceGridTransform,i.gridTransform)):i.kind===`vertex`&&(I.updateIfChanged(e.dSubstanceType,i.type),I.update(e.tSubstance,i.texture),I.update(e.uSubstanceTexDim,i.texDim))}function Gc(){return(Gc=e((()=>{K(),Fe(),B(),Mc(),N()})))()}function Kc(){return Kc.create(U(),U(),U(),U(),U(),U())}function qc(){return(qc=e((()=>{ue(),Dt(),(function(e){e.PlaneIndex=function(e){return e[e.Right=0]=`Right`,e[e.Left=1]=`Left`,e[e.Bottom=2]=`Bottom`,e[e.Top=3]=`Top`,e[e.Far=4]=`Far`,e[e.Near=5]=`Near`,e}({});function t(e,t,n,r,i,a){return[e,t,n,r,i,a]}e.create=t;function n(e,t){for(let n=0;n<6;++n)U.copy(e[n],t[n]);return e}e.copy=n;function r(e){return n(Kc(),e)}e.clone=r;function i(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],p=t[11],m=t[12],h=t[13],g=t[14],_=t[15];return U.setUnnormalized(e[0],a-n,l-o,p-u,_-m),U.setUnnormalized(e[1],a+n,l+o,p+u,_+m),U.setUnnormalized(e[2],a+r,l+s,p+d,_+h),U.setUnnormalized(e[3],a-r,l-s,p-d,_-h),U.setUnnormalized(e[4],a-i,l-c,p-f,_-g),U.setUnnormalized(e[5],a+i,l+c,p+f,_+g),e}e.fromProjectionMatrix=i;function a(e,t){let n=t.center,r=-t.radius;for(let t=0;t<6;++t)if(U.distanceToPoint(e[t],n)<r)return!1;return!0}e.intersectsSphere3D=a;function o(e,t){let n=t.center,r=t.radius;for(let t=0;t<6;++t)if(U.distanceToPoint(e[t],n)<r)return!1;return!0}e.containsSphere3D=o;let s=h();function c(e,t){for(let n=0;n<6;++n){let r=e[n];if(s[0]=r.normal[0]>0?t.max[0]:t.min[0],s[1]=r.normal[1]>0?t.max[1]:t.min[1],s[2]=r.normal[2]>0?t.max[2]:t.min[2],U.distanceToPoint(r,s)<0)return!1}return!0}e.intersectsBox3D=c;function l(e,t){for(let n=0;n<6;++n)if(U.distanceToPoint(e[n],t)<0)return!1;return!0}e.containsPoint=l})(Kc||={})})))()}function Jc(){return{}}function Yc(e,t){return t&&t.instanceCounts.length>=e?t:{firsts:new Int32Array(e),counts:new Int32Array(e),offsets:new Int32Array(e),instanceCounts:new Int32Array(e),baseVertices:new Int32Array(e),baseInstances:new Uint32Array(e),count:0,uniforms:[]}}function Xc(){let e=[],t=-1,n=V(),r=[],i=[],a=[];function o(n,r,i){let a=n?.ref.value,o=!!a&&a.length>0,s=o?a.length:1,c=i?2:1;e.length=s;let l=o&&n.ref.version!==t;for(let t=0;t<s;++t)if(e[t]=Yc(r,e[t]),e[t].count=0,o){let n=e[t],r=!1;n.uniforms.length!==c&&(n.uniforms.length=c,n.uniforms[0]=[`uLod`,I.create(H())],i&&(n.uniforms[1]=[`uLodLevel`,I.create(Math.min(t,3))]),r=!0),(l||r)&&I.update(n.uniforms[0][1],H.set(n.uniforms[0][1].ref.value,a[t][0],a[t][1],a[t][2],a[t][4]))}else e[t].uniforms.length=0;return l&&(t=n.ref.version),o?a:void 0}function s(e,t,n,r,i,a){let o=e.count;o>0&&e.firsts[o-1]===t&&e.offsets[o-1]===n&&e.counts[o-1]===r&&e.baseInstances[o-1]+e.instanceCounts[o-1]===a?e.instanceCounts[o-1]+=i:(e.firsts[o]=t,e.offsets[o]=n,e.counts[o]=r,e.instanceCounts[o]=i,e.baseInstances[o]=a,e.count+=1)}function l(t,o,l,u,d,f,p,m){let h=t.drawCount.ref.value,g=t.instanceCount.ref.value;if(h===0||g===0)return!1;let{first:_,offset:v,instanceBase:y}=o,[b,x]=t.uLod.ref.value,S=b!==0||x!==0,C=t.instanceGrid.ref.value,w=l?l.length:0;for(let e=0;e<w;++e)r[e]=l[e][0],i[e]=l[e][1],a[e]=l[e][3];if(C.cellSize<=1){if(!m)return!1;let n=t.boundingSphere.ref.value,r=tl(u,n.center);if(S&&(r+n.radius<b||r-n.radius>x))return c&&(p.culled.lod+=g),!0;if(!nl(d,n))return c&&(p.culled.frustum+=g),!0;if(f!==null&&f(n))return c&&(p.culled.occlusion+=g),!0;if(l)for(let t=0,i=l.length;t<i;++t)r+n.radius<l[t][0]||r-n.radius>l[t][1]||s(e[t],_,v,h,g,y);else s(e[0],_,v,h,g,y);return!0}let{cellOffsets:T,cellSpheres:E,batchOffsets:D,batchSpheres:O,batchCount:k,batchSize:A}=C,j=2*A;for(let t=0;t<k;++t){let o=D[t],m=D[t+1],g=m-o;if(g===0)continue;il(n,O,t*4);let C=tl(u,n.center);if(S&&(C+n.radius<b||C-n.radius>x)){c&&(p.culled.lod+=T[m]-T[o]);continue}if(!nl(d,n)){c&&(p.culled.frustum+=T[m]-T[o]);continue}if(f!==null&&f(n)){c&&(p.culled.occlusion+=T[m]-T[o]);continue}if(g===1){let t=T[o],c=T[o+1]-t;if(c===0)continue;if(l){let o=C+n.radius,l=C-n.radius;for(let n=0;n<w;++n)o<r[n]||l>i[n]||s(e[n],_,v,a[n],c,y+t)}else s(e[0],_,v,h,c,y+t);continue}let k=rl(d,n);for(let t=o;t<m;++t){let o=T[t],m=T[t+1]-o;if(m===0)continue;il(n,E,t*4);let g=tl(u,n.center);if(S&&(g+n.radius<b||g-n.radius>x))c&&(p.culled.lod+=m);else if(!k&&!nl(d,n))c&&(p.culled.frustum+=m);else if(f!==null&&g-n.radius<j&&f(n))c&&(p.culled.occlusion+=m);else if(l){let t=g+n.radius,c=g-n.radius;for(let n=0;n<w;++n)t<r[n]||c>i[n]||s(e[n],_,v,a[n],m,y+o)}else s(e[0],_,v,h,m,y+o)}}return!0}function u(t,n,r){let i=t.drawCount.ref.value,a=t.instanceCount.ref.value;if(i!==0&&a!==0){if(r)for(let t=0,i=r.length;t<i;++t)s(e[t],n.first,n.offset,r[t][3],a,n.instanceBase);else s(e[0],n.first,n.offset,i,a,n.instanceBase)}}function d(t,n,r,i,a,o){if(t.drawCount.ref.value!==0&&t.instanceCount.ref.value!==0){for(let c=0,l=r.length;c<l;++c)if(i+a<r[c][1]*o){s(e[c],n.first,n.offset,r[c][3],t.instanceCount.ref.value,n.instanceBase);break}}}return{list:e,prepare:o,append:s,cullSegment:l,fullSegment:u,cullSimpleSegment:d}}function Zc(e,t,n){let r=al(),i=Xc(),a=$c(t),o=!1,s;return{id:r,materialId:e.materialId,values:t,state:n,cull:(e,n,r,a,c)=>{if(c===s){a.cacheHits.cull++;return}if(o=!1,t.drawCount.ref.value===0||t.instanceCount.ref.value===0||t.instanceGrid.ref.value.cellSize<=1)return;let l=i.prepare(t.lodLevels,t.instanceGrid.ref.value.cellCount,!1);i.cullSegment(t,ol,l,e,n,r,a,!1),o=!0,s=c},uncull:()=>{o=!1,s=void 0},cullSimple:(e,n,r)=>{o=!1;let a=i.prepare(t.lodLevels,Math.max(1,t.instanceGrid.ref.value.cellCount),!1);a&&(i.cullSimpleSegment(t,ol,a,e,n,r),o=!0)},render:(r,a)=>{t.uAlpha&&t.alpha&&I.updateIfChanged(t.uAlpha,C(t.alpha.ref.value*n.alphaFactor,0,1)),e.render(r,a,o?i.list:void 0)},getClipInfo:a.get,getByteCount:()=>e.getByteCount(),getProgram:t=>e.getProgram(t),setTransparency:t=>e.setTransparency(t),update:()=>{e.update(),s=void 0},dispose:()=>e.destroy()}}function Qc(e,t){let{objects:n,planes:r,capIndices:i}=e;if(n.count=t.dClipObjectCount.ref.value,n.type=t.uClipObjectType.ref.value,n.invert=t.uClipObjectInvert.ref.value,n.position=t.uClipObjectPosition.ref.value,n.rotation=t.uClipObjectRotation.ref.value,n.scale=t.uClipObjectScale.ref.value,n.transform=t.uClipObjectTransform.ref.value,i.length=0,t.dClipVariant.ref.value!==`pixel`)return;let a=t.boundingSphere.ref.value;for(let e=0;e<n.count;++e)n.type[e]===Ot.Type.plane&&Ot.getPlane(r[e]??=U(),n,e),Ot.canIntersectSphere(n,e,a)&&i.push(e)}function $c(e){let t=[e.dClipObjectCount,e.dClipVariant,e.boundingSphere,e.uClipObjectType,e.uClipObjectInvert,e.uClipObjectPosition,e.uClipObjectRotation,e.uClipObjectScale,e.uClipObjectTransform],n=t.map(()=>-1),r={objects:{count:0,type:[],invert:[],position:[],rotation:[],scale:[],transform:[]},planes:[],capIndices:[]};function i(){if(e.dClipObjectCount.ref.value===0)return;let i=!1;for(let e=0,r=t.length;e<r;++e){let r=t[e].ref.version;r!==n[e]&&(n[e]=r,i=!0)}return i&&Qc(r,e),r}return{get:i}}function el(e,t){return{id:al(),values:t,render:()=>{e.getProgram(`compute`).finalize(!0),e.render(`compute`,0)},update:()=>e.update(),dispose:()=>e.destroy()}}var tl,nl,rl,il,al,ol;function sl(){return(sl=e((()=>{se(),qc(),Dt(),Ee(),Me(),o(),kt(),tl=U.distanceToPoint,nl=Kc.intersectsSphere3D,rl=Kc.containsSphere3D,il=V.fromArray,al=r(),ol={first:0,offset:0,instanceBase:0}})))()}function cl(e,t){let n={},r={},i={},a={},o={},s={},c={};return Object.keys(e).forEach(l=>{let u=e[l];u.type===`attribute`&&(n[l]=t[l]),u.type===`define`&&(r[l]=t[l]),u.type===`texture`&&t[l]!==void 0&&(u.variant===`material`?a[l]=t[l]:i[l]=t[l]),u.type===`uniform`&&t[l]!==void 0&&(u.variant===`material`?s[l]=t[l]:u.variant===`buffered`?c[l]=t[l]:o[l]=t[l])}),{attributeValues:n,defineValues:r,textureValues:i,materialTextureValues:a,uniformValues:o,materialUniformValues:s,bufferedUniformValues:c}}function ll(e){let t={};return Object.keys(e).forEach(n=>{t[n]=e[n].ref.version}),t}function J(e,t,n){return{type:`attribute`,kind:e,itemSize:t,divisor:n}}function Y(e,t){return{type:`uniform`,kind:e,variant:t}}function X(e,t,n,r,i){return{type:`texture`,kind:e,format:t,dataType:n,filter:r,variant:i}}function ul(e){return{type:`elements`,kind:e}}function Z(e,t){return{type:`define`,kind:e,options:t}}function Q(e){return{type:`value`,kind:e}}var dl,fl,pl,ml,hl,gl,_l,vl,yl,bl,xl,Sl,Cl,wl,Tl,El,Dl;function Ol(){return(Ol=e((()=>{dl={uDrawId:Y(`i`),uModel:Y(`m4`),uView:Y(`m4`),uInvView:Y(`m4`),uModelView:Y(`m4`),uInvModelView:Y(`m4`),uProjection:Y(`m4`),uInvProjection:Y(`m4`),uModelViewProjection:Y(`m4`),uInvModelViewProjection:Y(`m4`),uHasHeadRotation:Y(`b`),uInvHeadRotation:Y(`m4`),uIsAsymmetricProjection:Y(`b`),uHasEyeCamera:Y(`b`),uModelViewEye:Y(`m4`),uInvModelViewEye:Y(`m4`),uIsOrtho:Y(`f`),uPixelRatio:Y(`f`),uViewport:Y(`v4`),uViewOffset:Y(`v2`),uModelScale:Y(`f`),uDrawingBufferSize:Y(`v2`),uCameraPosition:Y(`v3`),uCameraDir:Y(`v3`),uCameraPlane:Y(`v4`),uNear:Y(`f`),uFar:Y(`f`),uFog:Y(`b`),uFogNear:Y(`f`),uFogFar:Y(`f`),uFogColor:Y(`v3`),uTransparentBackground:Y(`b`),uLightDirection:Y(`v3[]`),uLightColor:Y(`v3[]`),uAmbientColor:Y(`v3`),uPickingAlphaThreshold:Y(`f`),uHighlightColor:Y(`v3`),uSelectColor:Y(`v3`),uDimColor:Y(`v3`),uHighlightStrength:Y(`f`),uSelectStrength:Y(`f`),uDimStrength:Y(`f`),uMarkerPriority:Y(`i`),uMarkerAverage:Y(`f`),uXrayEdgeFalloff:Y(`f`),uCelSteps:Y(`f`),uExposure:Y(`f`),uRenderMask:Y(`i`),uMarkingDepthTest:Y(`b`),uDepthBack:Y(`b`),uMarkingType:Y(`i`),uPickType:Y(`i`),uSolidInteriorPass:Y(`i`),uSolidInteriorClip:Y(`i`),uTime:Y(`f`),uEnableAnimation:Y(`b`)},fl={tDepth:X(`texture`,`depth`,`ushort`,`nearest`),tDpoitDepth:X(`texture`,`rg`,`float`,`nearest`),tDpoitFrontColor:X(`texture`,`rgba`,`float`,`nearest`),tDpoitBackColor:X(`texture`,`rgba`,`float`,`nearest`)},pl={dLightCount:Z(`number`),dColorMarker:Z(`boolean`)},ml={uObjectId:Y(`i`)},hl={aSegment:J(`float32`,3,1),aSegmentSphere:J(`float32`,4,1),aSegmentLod:J(`float32`,4,1),uLodLevel:Y(`i`),dSegmented:Z(`boolean`)},gl={uColor:Y(`v3`,`material`),uColorTexDim:Y(`v2`),uColorGridDim:Y(`v3`),uColorGridTransform:Y(`v4`),uPaletteDomain:Y(`v2`),uPaletteDefault:Y(`v3`),tColor:X(`image-uint8`,`rgb`,`ubyte`,`nearest`),tPalette:X(`image-uint8`,`rgb`,`ubyte`,`nearest`),tColorGrid:X(`texture`,`rgb`,`ubyte`,`linear`),dColorType:Z(`string`,[`uniform`,`attribute`,`instance`,`group`,`groupInstance`,`vertex`,`vertexInstance`,`volume`,`volumeInstance`,`direct`]),dUsePalette:Z(`boolean`)},_l={uSize:Y(`f`,`material`),uSizeTexDim:Y(`v2`),tSize:X(`image-uint8`,`rgb`,`ubyte`,`nearest`),dSizeType:Z(`string`,[`uniform`,`attribute`,`instance`,`group`,`groupInstance`]),uSizeFactor:Y(`f`,`material`)},vl={uMarker:Y(`f`),uMarkerTexDim:Y(`v2`),tMarker:X(`image-uint8`,`alpha`,`ubyte`,`nearest`),markerAverage:Q(`number`),markerStatus:Q(`number`),dMarkerType:Z(`string`,[`instance`,`groupInstance`])},yl={uOverpaintTexDim:Y(`v2`),tOverpaint:X(`image-uint8`,`rgba`,`ubyte`,`nearest`),dOverpaint:Z(`boolean`),uOverpaintGridDim:Y(`v3`),uOverpaintGridTransform:Y(`v4`),tOverpaintGrid:X(`texture`,`rgba`,`ubyte`,`linear`),dOverpaintType:Z(`string`,[`instance`,`groupInstance`,`volumeInstance`]),uOverpaintStrength:Y(`f`,`material`)},bl={uTransparencyTexDim:Y(`v2`),tTransparency:X(`image-uint8`,`alpha`,`ubyte`,`nearest`),dTransparency:Z(`boolean`),transparencyAverage:Q(`number`),transparencyMin:Q(`number`),uTransparencyGridDim:Y(`v3`),uTransparencyGridTransform:Y(`v4`),tTransparencyGrid:X(`texture`,`alpha`,`ubyte`,`linear`),dTransparencyType:Z(`string`,[`instance`,`groupInstance`,`volumeInstance`]),uTransparencyStrength:Y(`f`,`material`)},xl={uEmissiveTexDim:Y(`v2`),tEmissive:X(`image-uint8`,`alpha`,`ubyte`,`nearest`),dEmissive:Z(`boolean`),emissiveAverage:Q(`number`),uEmissiveGridDim:Y(`v3`),uEmissiveGridTransform:Y(`v4`),tEmissiveGrid:X(`texture`,`alpha`,`ubyte`,`linear`),dEmissiveType:Z(`string`,[`instance`,`groupInstance`,`volumeInstance`]),uEmissiveStrength:Y(`f`,`material`)},Sl={uSubstanceTexDim:Y(`v2`),tSubstance:X(`image-uint8`,`rgba`,`ubyte`,`nearest`),dSubstance:Z(`boolean`),uSubstanceGridDim:Y(`v3`),uSubstanceGridTransform:Y(`v4`),tSubstanceGrid:X(`texture`,`rgba`,`ubyte`,`linear`),dSubstanceType:Z(`string`,[`instance`,`groupInstance`,`volumeInstance`]),uSubstanceStrength:Y(`f`,`material`)},Cl={uClippingTexDim:Y(`v2`),tClipping:X(`image-uint8`,`alpha`,`ubyte`,`nearest`),dClipping:Z(`boolean`),dClippingType:Z(`string`,[`instance`,`groupInstance`])},wl={uWiggleTexDim:Y(`v2`),tWiggle:X(`image-uint8`,`alpha`,`ubyte`,`nearest`),dWiggle:Z(`boolean`),wiggleAverage:Q(`number`),dWiggleType:Z(`string`,[`instance`,`groupInstance`]),uWiggleStrength:Y(`f`,`material`)},Tl={dGeometryType:Z(`string`,[`cylinders`,`directVolume`,`image`,`lines`,`mesh`,`points`,`spheres`,`text`,`textureMesh`]),...gl,...vl,...yl,...bl,...xl,...Sl,...Cl,...wl,dClipObjectCount:Z(`number`),dClipVariant:Z(`string`,[`instance`,`pixel`]),uClipObjectType:Y(`i[]`,`material`),uClipObjectInvert:Y(`b[]`,`material`),uClipObjectPosition:Y(`v3[]`,`material`),uClipObjectRotation:Y(`v4[]`,`material`),uClipObjectScale:Y(`v3[]`,`material`),uClipObjectTransform:Y(`m4[]`,`material`),aInstance:J(`float32`,1,1),aTransform:J(`float32`,16,1),uAlpha:Y(`f`,`material`),uMetalness:Y(`f`,`material`),uRoughness:Y(`f`,`material`),uBumpiness:Y(`f`,`material`),uEmissive:Y(`f`,`material`),uDensity:Y(`f`,`material`),uVertexCount:Y(`i`),uInstanceCount:Y(`i`),uGroupCount:Y(`i`),uInvariantBoundingSphere:Y(`v4`),uLod:Y(`v4`),drawCount:Q(`number`),instanceCount:Q(`number`),alpha:Q(`number`),matrix:Q(`m4`),transform:Q(`float32`),extraTransform:Q(`float32`),hasExtraTransform:Q(`boolean`),hasReflection:Q(`boolean`),instanceGranularity:Q(`boolean`),boundingSphere:Q(`sphere`),invariantBoundingSphere:Q(`sphere`),instanceGrid:Q(`instanceGrid`)},El={uInteriorColor:Y(`v4`),uInteriorSubstance:Y(`v4`)},Dl={uWiggleSpeed:Y(`f`,`material`),uWiggleAmplitude:Y(`f`,`material`),uWiggleFrequency:Y(`f`,`material`),uWiggleMode:Y(`i`,`material`),uTumbleSpeed:Y(`f`,`material`),uTumbleAmplitude:Y(`f`,`material`),uTumbleFrequency:Y(`f`,`material`)}})))()}function kl(e,t){let{gl:n}=e;switch(t){case`points`:return n.POINTS;case`lines`:return n.LINES;case`line-strip`:return n.LINE_STRIP;case`line-loop`:return n.LINE_LOOP;case`triangles`:return n.TRIANGLES;case`triangle-strip`:return n.TRIANGLE_STRIP;case`triangle-fan`:return n.TRIANGLE_FAN}}function Al(e,t,n,r,i){return n={...n,dRenderVariant:I.create(t)},i.dRenderVariant===void 0&&Object.defineProperty(i,"dRenderVariant",{value:Z(`string`)}),e.resources.program(n,r,i)}function jl(){return{attributes:!1,defines:!1,elements:!1,textures:!1}}function Ml(e){e.attributes=!1,e.defines=!1,e.elements=!1,e.textures=!1}function Nl(e,t){if(e===`color`)switch(t){case`blended`:return`colorBlended`;case`wboit`:return`colorWboit`;case`dpoit`:return`colorDpoit`}return e}function Pl(e,t,n,r,i,a,o){return Il(e,t,n,r,i,a,Bl,o)}function Fl(e,t,n,r,i,a=-1){return Il(e,t,n,r,i,a,Hl,void 0)}function Il(e,t,n,r,i,a,o,s){let u=Rl(),{stats:d,state:f,resources:p}=e,{instancedArrays:m,vertexArrayObject:h,multiDrawInstancedBaseVertexBaseInstance:g,drawInstancedBaseVertexBaseInstance:_}=e.extensions;if(o=o.filter(t=>t!==`tracing`||!!e.extensions.drawBuffers),i.uVertexCount&&!e.extensions.noNonInstancedActiveAttribs){let e=i.uVertexCount.ref.value;i.aVertex=I.create(ee(new Float32Array(e))),r.aVertex=J(`float32`,1,0)}let{attributeValues:v,defineValues:y,textureValues:b,materialTextureValues:x,uniformValues:S,materialUniformValues:C,bufferedUniformValues:w}=cl(r,i),T=Object.entries(S),E=Object.entries(C),D=Object.entries(w),O=Object.entries($i(w)),k=Object.entries(y),A=ll(i),j=kl(e,t),M={};for(let t of o)M[t]=Al(e,Nl(t,s),y,n,r);let N=ws(e,r,b),te=ws(e,r,x),ne=ca(e,r,v),re=[];for(let e=0,t=ne.length;e<t;++e){let t=ne[e];t[1].divisor===1&&re.push(t)}let P,ie=i.elements;ie&&ie.ref.value&&(P=p.elements(ie.ref.value));let F={};for(let e of o)F[e]=h?p.vertexArray(M[e],ne,P):null;let ae=i.drawCount.ref.value,oe=i.instanceCount.ref.value;d.drawCount+=ae,d.instanceCount+=oe,d.instancedDrawCount+=oe*ae;let se=jl(),L=!1,ce=-1;return{id:u,materialId:a,getByteCount(){let e=0;for(let t=0,n=ne.length;t<n;++t)e+=ne[t][1].getByteCount();P&&(e+=P.getByteCount());for(let t=0,n=N.length;t<n;++t)e+=N[t][1].getByteCount();for(let t=0,n=te.length;t<n;++t)e+=te[t][1].getByteCount();return e},getProgram:e=>M[e],setTransparency:t=>{if(t!==s){s=t;for(let t of o)M[t].destroy(),M[t]=Al(e,Nl(t,s),y,n,r)}},render:(t,n,r)=>{if(ae===0||oe===0)return;let i=M[t];if(i.id===ce&&f.currentRenderItemId===u)i.setUniforms(T),i.bindTextures(N,n);else{let e=F[t];(i.id!==f.currentProgramId||i.id!==ce||a===-1||a!==f.currentMaterialId)&&(i.id!==f.currentProgramId&&i.use(),i.setUniforms(E),i.bindTextures(te,n+N.length),f.currentMaterialId=a,ce=i.id),i.setUniforms(T),i.setUniforms(O),i.bindTextures(N,n),e?(e.bind(),P&&P.bind()):(P&&P.bind(),i.bindAttributes(ne)),f.currentRenderItemId=u}if(l&&e.checkFramebufferStatus(`Framebuffer error rendering item id ${u}`),r){for(let e of r)if(e.count!==0){if(i.setUniforms(e.uniforms),g)P?g.multiDrawElementsInstancedBaseVertexBaseInstance(j,e.counts,0,P._dataType,e.offsets,0,e.instanceCounts,0,e.baseVertices,0,e.baseInstances,0,e.count):g.multiDrawArraysInstancedBaseInstance(j,e.firsts,0,e.counts,0,e.instanceCounts,0,e.baseInstances,0,e.count);else if(_){if(P)for(let t=0;t<e.count;++t)e.counts[t]>0&&(i.uniform(`uDrawId`,t),_.drawElementsInstancedBaseVertexBaseInstance(j,e.counts[t],P._dataType,e.offsets[t],e.instanceCounts[t],e.baseVertices[t],e.baseInstances[t]));else for(let t=0;t<e.count;++t)e.counts[t]>0&&(i.uniform(`uDrawId`,t),_.drawArraysInstancedBaseInstance(j,e.firsts[t],e.counts[t],e.instanceCounts[t],e.baseInstances[t]))}else if(P)for(let t=0;t<e.count;++t)e.counts[t]>0&&(i.uniform(`uDrawId`,t),i.offsetAttributes(re,e.baseInstances[t]),m.drawElementsInstanced(j,e.counts[t],P._dataType,e.offsets[t],e.instanceCounts[t]));else for(let t=0;t<e.count;++t)e.counts[t]>0&&(i.uniform(`uDrawId`,t),i.offsetAttributes(re,e.baseInstances[t]),m.drawArraysInstanced(j,e.firsts[t],e.counts[t],e.instanceCounts[t]));if(c){g?d.calls.multiDrawInstancedBase+=1:_?d.calls.drawInstancedBase+=e.count:d.calls.drawInstanced+=e.count;for(let t=0;t<e.count;++t)d.calls.counts+=e.instanceCounts[t]}}}else{let e=0;for(;;){let t=Math.min(ae-e,Ll);if(P?m.drawElementsInstanced(j,t,P._dataType,e*P._bpe,oe):m.drawArraysInstanced(j,e,t,oe),e+=t,e>=ae)break}c&&(d.calls.drawInstanced+=1,d.calls.counts+=oe)}l&&e.checkError(`Draw error rendering item id ${u}`)},update:()=>{if(Ml(se),i.aVertex){let e=i.uVertexCount.ref.value;i.aVertex.ref.value.length<e&&I.update(i.aVertex,ee(new Float32Array(e)))}for(let e=0,t=k.length;e<t;++e){let[t,n]=k[e];n.ref.version!==A[t]&&(se.defines=!0,A[t]=n.ref.version)}if(se.defines)for(let t of o)M[t].destroy(),M[t]=Al(e,Nl(t,s),y,n,r);i.drawCount.ref.version!==A.drawCount&&(d.drawCount+=i.drawCount.ref.value-ae,d.instancedDrawCount+=oe*i.drawCount.ref.value-oe*ae,ae=i.drawCount.ref.value,A.drawCount=i.drawCount.ref.version),i.instanceCount.ref.version!==A.instanceCount&&(d.instanceCount+=i.instanceCount.ref.value-oe,d.instancedDrawCount+=i.instanceCount.ref.value*ae-oe*ae,oe=i.instanceCount.ref.value,A.instanceCount=i.instanceCount.ref.version);for(let e=0,t=ne.length;e<t;++e){let[t,n]=ne[e],i=v[t];if(i.ref.version!==A[t]){if(n.length>=i.ref.value.length)n.updateSubData(i.ref.value,0,n.length);else{n.destroy();let{itemSize:a,divisor:o}=r[t];ne[e][1]=p.attribute(i.ref.value,a,o),se.attributes=!0}A[t]=i.ref.version}}if(P&&i.elements.ref.version!==A.elements&&(P.length>=i.elements.ref.value.length?P.updateSubData(i.elements.ref.value,0,P.length):(P.destroy(),P=p.elements(i.elements.ref.value),se.elements=!0),A.elements=i.elements.ref.version),se.attributes||se.defines||se.elements)for(let e of o){let t=F[e];t&&t.destroy(),F[e]=h?p.vertexArray(M[e],ne,P):null}for(let e=0,t=N.length;e<t;++e){let[t,n]=N[e],i=b[t];i.ref.version!==A[t]&&(r[t].kind===`texture`?N[e][1]=i.ref.value:(n.load(i.ref.value),se.textures=!0),A[t]=i.ref.version)}for(let e=0,t=te.length;e<t;++e){let[t,n]=te[e],i=x[t];i.ref.version!==A[t]&&(r[t].kind===`texture`?te[e][1]=i.ref.value:(n.load(i.ref.value),se.textures=!0),A[t]=i.ref.version)}for(let e=0,t=D.length;e<t;++e){let[t,n]=D[e];n.ref.version!==A[t]&&(I.update(O[e][1],le(n.ref.value)),A[t]=n.ref.version)}},destroy:()=>{if(!L){for(let e of o){M[e].destroy();let t=F[e];t&&t.destroy()}N.forEach(([e,t])=>{r[e].kind!==`texture`&&t.destroy()}),te.forEach(([e,t])=>{r[e].kind!==`texture`&&t.destroy()}),ne.forEach(([e,t])=>t.destroy()),P&&P.destroy(),d.drawCount-=ae,d.instanceCount-=oe,d.instancedDrawCount-=oe*ae,L=!0}}}}var Ll,Rl,zl,Bl,Vl,Hl;function Ul(){return(Ul=e((()=>{fa(),Ms(),Ol(),N(),o(),T(),M(),ea(),Ll=3e7,Rl=r(),zl={color:``,pick:``,depth:``,marking:``,emissive:``,tracing:``},Bl=Object.keys(zl),Vl={compute:``},Hl=Object.keys(Vl)})))()}var Wl;function Gl(){return(Gl=e((()=>{Wl=`
precision highp float;

attribute vec2 aPosition;
uniform vec2 uQuadScale;

void main(void) {
    vec2 position = aPosition * uQuadScale - vec2(1.0, 1.0) + uQuadScale;
    gl_Position = vec4(position, 0.0, 1.0);
}
`})))()}var Kl;function ql(){return(ql=e((()=>{Kl=`
precision highp float;
precision highp sampler2D;

uniform sampler2D tColor;
uniform vec2 uTexSize;

void main() {
    vec2 coords = gl_FragCoord.xy / uTexSize;
    gl_FragColor = texture2D(tColor, coords);
}
`})))()}function Jl(e,t){let n={...eu,tColor:I.create(t),uTexSize:I.create(A.create(t.getWidth(),t.getHeight()))},r={...tu};return el(Fl(e,`triangles`,nu,r,n),n)}function Yl(e,t){e.namedComputeRenderables[ru]||(e.namedComputeRenderables[ru]=Jl(e,ks()));let n=e.namedComputeRenderables[ru];return I.update(n.values.tColor,t),I.update(n.values.uTexSize,A.set(n.values.uTexSize.ref.value,t.getWidth(),t.getHeight())),n.update(),n}function Xl(e,t,n){let{gl:r,resources:i}=e;if(!n&&t.type!==r.UNSIGNED_BYTE)throw Error(`unsupported texture type`);e.namedFramebuffers[iu]||(e.namedFramebuffers[iu]=i.framebuffer());let a=e.namedFramebuffers[iu],o=t.getWidth(),s=t.getHeight();return n||=new Uint8Array(o*s*4),a.bind(),t.attachFramebuffer(a,0),e.readPixels(0,0,o,s,n),{array:n,width:o,height:s}}function Zl(e,t){let{gl:n,state:r,resources:i}=e;if(t.type!==n.UNSIGNED_BYTE)throw Error(`unsupported texture type`);let a=t.getWidth(),o=t.getHeight(),s=Yl(e,t);r.currentRenderItemId=-1,e.namedFramebuffers[au]||(e.namedFramebuffers[au]=i.framebuffer());let c=e.namedFramebuffers[au];c.bind(),e.namedTextures[au]||(e.namedTextures[au]=i.texture(`image-uint8`,`rgba`,`ubyte`,`linear`));let l=e.namedTextures[au];l.define(a,o),l.attachFramebuffer(c,0),r.disable(n.CULL_FACE),r.enable(n.BLEND),r.disable(n.DEPTH_TEST),r.enable(n.SCISSOR_TEST),r.depthMask(!1),r.clearColor(0,0,0,0),r.blendFunc(n.ONE,n.ONE),r.blendEquation(n.FUNC_ADD),r.viewport(0,0,a,o),r.scissor(0,0,a,o),n.clear(n.COLOR_BUFFER_BIT),s.render();let u=new Uint8Array(a*o*4);return e.readPixels(0,0,a,o,u),{array:u,width:a,height:o}}var Ql,$l,eu,tu,nu,ru,iu,au;function ou(){return(ou=e((()=>{Ms(),N(),Ol(),B(),Ii(),ql(),Gl(),Ul(),sl(),Ql=new Float32Array([1,1,-1,1,-1,-1,-1,-1,1,-1,1,1]),$l={drawCount:Q(`number`),instanceCount:Q(`number`),aPosition:J(`float32`,2,0),uQuadScale:Y(`v2`)},eu={drawCount:I.create(6),instanceCount:I.create(1),aPosition:I.create(Ql),uQuadScale:I.create(A.create(1,1))},tu={...$l,tColor:X(`texture`,`rgba`,`ubyte`,`nearest`),uTexSize:Y(`v2`)},nu=li(`copy`,Wl,Kl),ru=`shared-copy`,iu=`read-texture`,au=`read-alpha-texture`})))()}function su(e,t,n,r){for(let i=t;i<n;++i)Le.toArray(r,e,i*4),e[i*4+3]=255;return!0}function cu(e,t,n){return e.fill(0,t*4,n*4),!0}function lu(e,t,n){let r=G(Math.max(1,e),4,Uint8Array,n&&n.tSubstance.ref.value.array);return n?(I.update(n.tSubstance,r),I.update(n.uSubstanceTexDim,A.create(r.width,r.height)),I.updateIfChanged(n.dSubstance,e>0),I.updateIfChanged(n.dSubstanceType,t),n):{tSubstance:I.create(r),uSubstanceTexDim:I.create(A.create(r.width,r.height)),dSubstance:I.create(e>0),tSubstanceGrid:I.create(ks()),uSubstanceGridDim:I.create(h.create(1,1,1)),uSubstanceGridTransform:I.create(H.create(0,0,0,1)),dSubstanceType:I.create(t),uSubstanceStrength:I.create(1)}}function uu(e){return e?(I.update(e.tSubstance,du),I.update(e.uSubstanceTexDim,A.create(1,1)),e):{tSubstance:I.create(du),uSubstanceTexDim:I.create(A.create(1,1)),dSubstance:I.create(!1),tSubstanceGrid:I.create(ks()),uSubstanceGridDim:I.create(h.create(1,1,1)),uSubstanceGridTransform:I.create(H.create(0,0,0,1)),dSubstanceType:I.create(`groupInstance`),uSubstanceStrength:I.create(1)}}var du;function fu(){return(fu=e((()=>{se(),B(),K(),Ms(),Ie(),du={array:new Uint8Array(4),width:1,height:1}})))()}function pu(e,t,n,r){for(let i=t;i<n;++i)e[i]=r*255;return!0}function mu(e,t){if(t===0||e.length<t)return 0;let n=0;for(let r=0;r<t;++r)n+=e[r];return n/(255*t)}function hu(e,t,n){e.fill(0,t,n)}function gu(e,t,n){let r=G(Math.max(1,e),1,Uint8Array,n&&n.tEmissive.ref.value.array);return n?(I.update(n.tEmissive,r),I.update(n.uEmissiveTexDim,A.create(r.width,r.height)),I.updateIfChanged(n.dEmissive,e>0),I.updateIfChanged(n.emissiveAverage,mu(r.array,e)),I.updateIfChanged(n.dEmissiveType,t),n):{tEmissive:I.create(r),uEmissiveTexDim:I.create(A.create(r.width,r.height)),dEmissive:I.create(e>0),emissiveAverage:I.create(0),tEmissiveGrid:I.create(ks()),uEmissiveGridDim:I.create(h.create(1,1,1)),uEmissiveGridTransform:I.create(H.create(0,0,0,1)),dEmissiveType:I.create(t),uEmissiveStrength:I.create(1)}}function _u(e){return e?(I.update(e.tEmissive,vu),I.update(e.uEmissiveTexDim,A.create(1,1)),e):{tEmissive:I.create(vu),uEmissiveTexDim:I.create(A.create(1,1)),dEmissive:I.create(!1),emissiveAverage:I.create(0),tEmissiveGrid:I.create(ks()),uEmissiveGridDim:I.create(h.create(1,1,1)),uEmissiveGridTransform:I.create(H.create(0,0,0,1)),dEmissiveType:I.create(`groupInstance`),uEmissiveStrength:I.create(1)}}var vu;function yu(){return(yu=e((()=>{se(),B(),K(),Ms(),vu={array:new Uint8Array(1),width:1,height:1}})))()}function bu(e,t,n,r){for(let i=t;i<n;++i)e[i]=r*255;return!0}function xu(e,t){if(t===0||e.length<t)return 0;let n=0;for(let r=0;r<t;++r)n+=e[r];return n/(255*t)}function Su(e,t,n){e.fill(0,t,n)}function Cu(e,t,n){let r=G(Math.max(1,e),1,Uint8Array,n&&n.tWiggle.ref.value.array);return n?(I.update(n.tWiggle,r),I.update(n.uWiggleTexDim,A.create(r.width,r.height)),I.updateIfChanged(n.dWiggle,e>0),I.updateIfChanged(n.wiggleAverage,xu(r.array,e)),I.updateIfChanged(n.dWiggleType,t),n):{tWiggle:I.create(r),uWiggleTexDim:I.create(A.create(r.width,r.height)),dWiggle:I.create(e>0),wiggleAverage:I.create(0),dWiggleType:I.create(t),uWiggleStrength:I.create(1)}}function wu(e){return e?(I.update(e.tWiggle,Tu),I.update(e.uWiggleTexDim,A.create(1,1)),e):{tWiggle:I.create(Tu),uWiggleTexDim:I.create(A.create(1,1)),dWiggle:I.create(!1),wiggleAverage:I.create(0),dWiggleType:I.create(`groupInstance`),uWiggleStrength:I.create(1)}}var Tu;function Eu(){return(Eu=e((()=>{se(),B(),K(),Tu={array:new Uint8Array(1),width:1,height:1}})))()}function Du(e,t,n,r,i,a,o){let s={...dl,...fl,...pl,...ml,...Ou};e.isWebGL2||(s.uMaxSteps=Z(`number`));let c={...n,uObjectId:I.create(t),dLightCount:I.create(o.dLightCount),dColorMarker:I.create(o.dColorMarker)};return Zc(Pl(e,`triangles`,Mi,s,c,i,a),c,r)}var Ou;function ku(){return(ku=e((()=>{sl(),Ul(),Ol(),Ii(),N(),Ou={...Tl,aPosition:J(`float32`,3,0),elements:ul(`uint32`),uBboxMin:Y(`v3`),uBboxMax:Y(`v3`),uBboxSize:Y(`v3`),uMaxSteps:Y(`i`),uStepScale:Y(`f`),uJumpLength:Y(`f`),uTransform:Y(`m4`),uGridDim:Y(`v3`),tTransferTex:X(`image-uint8`,`alpha`,`ubyte`,`linear`),uTransferScale:Y(`f`,`material`),dGridTexType:Z(`string`,[`2d`,`3d`]),uGridTexDim:Y(`v3`),tGridTex:X(`texture`,`rgba`,`ubyte`,`linear`),uGridStats:Y(`v4`),uCellDim:Y(`v3`),uCartnToUnit:Y(`m4`),uUnitToCartn:Y(`m4`),dPackedGroup:Z(`boolean`),dAxisOrder:Z(`string`,[`012`,`021`,`102`,`120`,`201`,`210`]),dIgnoreLight:Z(`boolean`),dCelShaded:Z(`boolean`),dXrayShaded:Z(`string`,[`off`,`on`,`inverted`]),meta:Q(`unknown`)}})))()}function Au(e,t,n,r,i,a,o){let s={...dl,...fl,...pl,...ml,...ju},c={...n,uObjectId:I.create(t),dLightCount:I.create(o.dLightCount),dColorMarker:I.create(o.dColorMarker)};return Zc(Pl(e,`triangles`,ji,s,c,i,a),c,r)}var ju;function Mu(){return(Mu=e((()=>{sl(),Ul(),Ol(),Ii(),N(),ju={...Tl,aGroup:J(`float32`,1,0),aPosition:J(`float32`,3,0),aNormal:J(`float32`,3,0),elements:ul(`uint32`),dVaryingGroup:Z(`boolean`),dFlatShaded:Z(`boolean`),uDoubleSided:Y(`b`,`material`),dFlipSided:Z(`boolean`),dIgnoreLight:Z(`boolean`),dCelShaded:Z(`boolean`),dXrayShaded:Z(`string`,[`off`,`on`,`inverted`]),dTransparentBackfaces:Z(`string`,[`off`,`on`,`opaque`]),dSolidInterior:Z(`boolean`),uBumpFrequency:Y(`f`,`material`),uBumpAmplitude:Y(`f`,`material`),meta:Q(`unknown`),...El,...Dl}})))()}function Nu(e,t,n,r,i,a,o){let s={...dl,...fl,...pl,...ml,...Pu},c={...n,uObjectId:I.create(t),dLightCount:I.create(o.dLightCount),dColorMarker:I.create(o.dColorMarker)};return Zc(Pl(e,`points`,Ei,s,c,i,a),c,r)}var Pu;function Fu(){return(Fu=e((()=>{sl(),Ul(),Ol(),Ii(),N(),Pu={...Tl,..._l,aGroup:J(`float32`,1,0),aPosition:J(`float32`,3,0),dPointSizeAttenuation:Z(`boolean`),dPointStyle:Z(`string`,[`square`,`circle`,`fuzzy`]),...Dl}})))()}function Iu(e,t,n,r,i,a,o){let s={...dl,...fl,...pl,...ml,...Lu},c={...n,uObjectId:I.create(t),dLightCount:I.create(o.dLightCount),dColorMarker:I.create(o.dColorMarker)};return Zc(Pl(e,`triangles`,Ai,s,c,i,a),c,r)}var Lu;function Ru(){return(Ru=e((()=>{sl(),Ul(),Ol(),N(),Ii(),Lu={...Tl,..._l,aGroup:J(`float32`,1,0),aMapping:J(`float32`,2,0),aStart:J(`float32`,3,0),aEnd:J(`float32`,3,0),elements:ul(`uint32`),dLineSizeAttenuation:Z(`boolean`),uDoubleSided:Y(`b`,`material`),dFlipSided:Z(`boolean`),stripCount:Q(`number`),stripOffsets:Q(`uint32`),...Dl}})))()}function zu(e,t,n,r,i,a,o){let s={...dl,...fl,...pl,...ml,...Bu},c={...n,uObjectId:I.create(t),dLightCount:I.create(o.dLightCount),dColorMarker:I.create(o.dColorMarker)};return Zc(Pl(e,`triangles`,Di,s,c,i,a),c,r)}var Bu;function Vu(){return(Vu=e((()=>{sl(),Ul(),Ol(),Ii(),N(),Bu={...Tl,..._l,uTexDim:Y(`v2`),tPositionGroup:X(`image-float32`,`rgba`,`float`,`nearest`),padding:Q(`number`),uDoubleSided:Y(`b`,`material`),dIgnoreLight:Z(`boolean`),dCelShaded:Z(`boolean`),dXrayShaded:Z(`string`,[`off`,`on`,`inverted`]),dTransparentBackfaces:Z(`string`,[`off`,`on`,`opaque`]),dSolidInterior:Z(`boolean`),dClipPrimitive:Z(`boolean`),dApproximate:Z(`boolean`),uAlphaThickness:Y(`f`),uBumpFrequency:Y(`f`,`material`),uBumpAmplitude:Y(`f`,`material`),lodLevels:Q(`unknown`),centerBuffer:Q(`float32`),groupBuffer:Q(`float32`),...El,...Dl}})))()}function Hu(e,t,n,r,i,a,o){let s={...dl,...fl,...pl,...ml,...Uu},c={...n,uObjectId:I.create(t),dLightCount:I.create(o.dLightCount),dColorMarker:I.create(o.dColorMarker)};return Zc(Pl(e,`triangles`,ki,s,c,i,a),c,r)}var Uu;function Wu(){return(Wu=e((()=>{sl(),Ul(),Ol(),Ii(),N(),Uu={...Tl,..._l,aGroup:J(`float32`,1,0),aPosition:J(`float32`,3,0),aMapping:J(`float32`,2,0),aDepth:J(`float32`,1,0),elements:ul(`uint32`),aTexCoord:J(`float32`,2,0),tFont:X(`image-uint8`,`alpha`,`ubyte`,`linear`),padding:Q(`number`),uBorderWidth:Y(`f`,`material`),uBorderColor:Y(`v3`,`material`),uOffsetX:Y(`f`,`material`),uOffsetY:Y(`f`,`material`),uOffsetZ:Y(`f`,`material`),uBackgroundColor:Y(`v3`,`material`),uBackgroundOpacity:Y(`f`,`material`)}})))()}function Gu(e,t,n,r,i,a,o){let s={...dl,...fl,...pl,...ml,...Ku},c={...n,uObjectId:I.create(t),dLightCount:I.create(o.dLightCount),dColorMarker:I.create(o.dColorMarker)};return Zc(Pl(e,`triangles`,ji,s,c,i,a),c,r)}var Ku;function qu(){return(qu=e((()=>{sl(),Ul(),Ol(),Ii(),N(),Ku={...Tl,uGeoTexDim:Y(`v2`,`buffered`),tPosition:X(`texture`,`rgb`,`float`,`nearest`),tGroup:X(`texture`,`alpha`,`float`,`nearest`),tNormal:X(`texture`,`rgb`,`float`,`nearest`),dVaryingGroup:Z(`boolean`),dFlatShaded:Z(`boolean`),uDoubleSided:Y(`b`,`material`),dFlipSided:Z(`boolean`),dIgnoreLight:Z(`boolean`),dCelShaded:Z(`boolean`),dXrayShaded:Z(`string`,[`off`,`on`,`inverted`]),dTransparentBackfaces:Z(`string`,[`off`,`on`,`opaque`]),dSolidInterior:Z(`boolean`),uBumpFrequency:Y(`f`,`material`),uBumpAmplitude:Y(`f`,`material`),meta:Q(`unknown`),...El,...Dl}})))()}function Ju(e,t,n,r,i,a,o){let s={...dl,...fl,...pl,...ml,...Yu},c={...n,uObjectId:I.create(t),dLightCount:I.create(o.dLightCount),dColorMarker:I.create(o.dColorMarker)};return Zc(Pl(e,`triangles`,Ni,s,c,i,a),c,r)}var Yu;function Xu(){return(Xu=e((()=>{sl(),Ul(),Ol(),Ii(),se(),Yu={...Tl,aGroup:J(`float32`,1,0),aPosition:J(`float32`,3,0),aUv:J(`float32`,2,0),elements:ul(`uint32`),uImageTexDim:Y(`v2`),tImageTex:X(`image-uint8`,`rgba`,`ubyte`,`nearest`),tGroupTex:X(`image-uint8`,`rgba`,`ubyte`,`nearest`),tValueTex:X(`image-float32`,`alpha`,`float`,`linear`),uTrimType:Y(`i`),uTrimCenter:Y(`v3`),uTrimRotation:Y(`q`),uTrimScale:Y(`v3`),uTrimTransform:Y(`m4`),uIsoLevel:Y(`f`),dInterpolation:Z(`string`,[`nearest`,`catmulrom`,`mitchell`,`bspline`])}})))()}function Zu(e,t,n,r,i,a,o){let s={...dl,...fl,...pl,...ml,...Qu},c={...n,uObjectId:I.create(t),dLightCount:I.create(o.dLightCount),dColorMarker:I.create(o.dColorMarker)};return Zc(Pl(e,`triangles`,Oi,s,c,i,a),c,r)}var Qu;function $u(){return($u=e((()=>{sl(),Ul(),Ol(),Ii(),N(),Qu={...Tl,..._l,aGroup:J(`float32`,1,0),aStart:J(`float32`,3,0),aEnd:J(`float32`,3,0),aMapping:J(`float32`,3,0),aScale:J(`float32`,1,0),aCap:J(`float32`,1,0),aColorMode:J(`float32`,1,0),elements:ul(`uint32`),padding:Q(`number`),uDoubleSided:Y(`b`,`material`),dIgnoreLight:Z(`boolean`),dCelShaded:Z(`boolean`),dXrayShaded:Z(`string`,[`off`,`on`,`inverted`]),dTransparentBackfaces:Z(`string`,[`off`,`on`,`opaque`]),dSolidInterior:Z(`boolean`),uBumpFrequency:Y(`f`,`material`),uBumpAmplitude:Y(`f`,`material`),dDualColor:Z(`boolean`),...El,...Dl}})))()}function ed(e){return ld.includes(e)}function td(e){switch(e){case`instance`:return`instance`;case`group`:return`group`;case`groupInstance`:return`groupInstance`;case`vertex`:return`vertex`;default:return`none`}}function nd(e){let t=[];for(let n of Object.keys(e)){let r=e[n];r.type===`attribute`&&r.divisor===0&&t.push({key:n,itemSize:r.itemSize})}return t}function rd(e){return e.length>1&&e[0]===`d`&&e[1]>=`A`&&e[1]<=`Z`}function id(e){let t=[],n=Object.keys(e).filter(rd).sort();for(let r of n)t.push(`${r}:${e[r].ref.value}`);t.push(`ig:${e.instanceGranularity.ref.value}`),t.push(`uLod:${e.uLod.ref.value.join(`,`)}`);let r=e.lodLevels?.ref.value;return t.push(`lod:`+(r?r.map(e=>`${e[0]},${e[1]},${e[2]}`).join(`;`):``)),t.join(`|`)}function ad(e,t){if(!ed(e)||t.length<2)return!1;let n=t[0];if(n.dUsePalette?.ref.value||!fd.includes(n.dColorType.ref.value)||n.dSizeType&&!fd.includes(n.dSizeType.ref.value)||n.dOverpaint.ref.value&&!pd.includes(n.dOverpaintType.ref.value)||n.dTransparency.ref.value&&!pd.includes(n.dTransparencyType.ref.value)||n.dEmissive.ref.value&&!pd.includes(n.dEmissiveType.ref.value)||n.dSubstance.ref.value&&!pd.includes(n.dSubstanceType.ref.value)||n.dClipping.ref.value&&!pd.includes(n.dClippingType.ref.value)||n.dWiggle.ref.value&&!pd.includes(n.dWiggleType.ref.value))return!1;let r=id(n);for(let e=1,n=t.length;e<n;++e)if(id(t[e])!==r)return!1;return!0}function od(e,t,n){return e.length>=t?e:new n(t)}function sd(e,t){let n=dd[e],{hasElements:r,vertexAttributes:i}=n,a=t[0],o=t.length,s=[...n.extraTextures,...ud].filter(e=>a[e.tex]!==void 0),c={count:o,instanceBases:Array(o).fill(0),instanceCounts:Array(o).fill(0),vertexBases:Array(o).fill(0),elementOffsets:Array(o).fill(0)},l={aTransform:I.create(new Float32Array),aInstance:I.create(new Float32Array),aSegment:I.create(new Float32Array),aSegmentSphere:I.create(new Float32Array),aSegmentLod:I.create(new Float32Array),drawCount:I.create(0),instanceCount:I.create(0),uVertexCount:I.create(0),uInstanceCount:I.create(0),uGroupCount:I.create(0),boundingSphere:I.create(V()),invariantBoundingSphere:I.create(V()),uInvariantBoundingSphere:I.create(H()),uMarker:I.create(0),markerAverage:I.create(0),markerStatus:I.create(-1),transparencyAverage:I.create(0),transparencyMin:I.create(0),emissiveAverage:I.create(0),wiggleAverage:I.create(0),hasReflection:I.create(!1),instanceGrid:I.create({...Xe(),cellSize:2}),dSegmented:I.create(!0)};for(let{key:e}of i)l[e]=I.create(new Float32Array);r&&(l.elements=I.create(new Uint32Array));for(let e of s){let t=e.float?Float32Array:Uint8Array;l[e.tex]=I.create(G(1,e.itemSize,t)),l[e.dim]=I.create(A.create(1,1))}let u={...a,...l};function d(e){let n=t[e],r=n.uGroupCount.ref.value;for(let e of s){if(e.granularity(a)!==`group`)continue;let t=n[e.tex].ref.value,i=t.width*t.height;i>r&&(r=i)}return r}function f(e,r){let i=t[e],o=r.factor?r.factor(i):1;switch(r.granularity(a)){case`instance`:return i.instanceCount.ref.value*o;case`group`:return d(e)*o;case`groupInstance`:return i.instanceCount.ref.value*i.uGroupCount.ref.value*o;case`vertex`:return n.vertexTexels(i)*o;case`none`:return 0}}let p=new Map;for(let e of s)p.set(e.tex,Array(o).fill(0));let m=t.map(()=>({})),h=``;function g(){let e=``;for(let n=0;n<o;++n){let r=t[n];e+=`${r.instanceCount.ref.value},${r.uGroupCount.ref.value},${d(n)},${r.uVertexCount.ref.value},${r.drawCount.ref.value};`}return e+`#`+id(a)}function _(e,n,r,i){let a=f(r,n),o=t[r][n.tex].ref.value;e.array.set(o.array.subarray(0,a*n.itemSize),i*n.itemSize)}function v(e){let t=l[e.tex],n=l[e.dim],r=p.get(e.tex),i=e.float?Float32Array:Uint8Array;if(e.granularity(a)===`none`){let o=a[e.tex].ref.value,s=od(t.ref.value.array,o.array.length,i);s.set(o.array),r.fill(0),I.update(t,{array:s,width:o.width,height:o.height}),I.update(n,A.set(n.ref.value,o.width,o.height));return}let s=0;for(let t=0;t<o;++t)r[t]=s,s+=f(t,e);let c=G(Math.max(1,s),e.itemSize,i,t.ref.value.array);for(let t=0;t<o;++t)_(c,e,t,r[t]);I.update(t,c),I.update(n,A.set(n.ref.value,c.width,c.height))}function y(e,n){md.reset();for(let e=0;e<o;++e)md.includeSphere(t[e][n].ref.value);md.finishedIncludeStep();for(let e=0;e<o;++e)md.radiusSphere(t[e][n].ref.value);return md.getSphere(e)}function b(){I.update(l.boundingSphere,y(l.boundingSphere.ref.value,`boundingSphere`));let e=y(l.invariantBoundingSphere.ref.value,`invariantBoundingSphere`);I.update(l.invariantBoundingSphere,e),I.update(l.uInvariantBoundingSphere,H.fromSphere(l.uInvariantBoundingSphere.ref.value,e))}function x(){let e=0,n=0,r=t[0].markerStatus.ref.value;for(let i=0;i<o;++i){let a=t[i],o=Math.max(1,a.dMarkerType.ref.value===`instance`?a.instanceCount.ref.value:a.instanceCount.ref.value*a.uGroupCount.ref.value);e+=a.markerAverage.ref.value*o,n+=o,a.markerStatus.ref.value!==r&&(r=-1)}I.updateIfChanged(l.markerAverage,n>0?e/n:0),I.updateIfChanged(l.markerStatus,r),I.updateIfChanged(l.uMarker,r)}function S(){let e=0,n=1,r=0,i=0,a=!1,s=0;for(let c=0;c<o;++c){let o=t[c],l=Math.max(1,o.instanceCount.ref.value*o.uGroupCount.ref.value);e+=o.transparencyAverage.ref.value*l,r+=o.emissiveAverage.ref.value*l,i+=o.wiggleAverage.ref.value*l,n=Math.min(n,o.transparencyMin.ref.value),a||=o.hasReflection.ref.value,s+=l}I.updateIfChanged(l.transparencyAverage,s>0?e/s:0),I.updateIfChanged(l.transparencyMin,n),I.updateIfChanged(l.emissiveAverage,s>0?r/s:0),I.updateIfChanged(l.wiggleAverage,s>0?i/s:0),I.updateIfChanged(l.hasReflection,a)}function C(e,n){let r=t[n].uVertexCount.ref.value;l[e.key].ref.value.set(t[n][e.key].ref.value.subarray(0,r*e.itemSize),c.vertexBases[n]*e.itemSize)}function w(e){let n=t[e].drawCount.ref.value,r=c.vertexBases[e],i=c.elementOffsets[e]/4,a=t[e].elements.ref.value,o=l.elements.ref.value;for(let e=0;e<n;++e)o[i+e]=a[e]+r}let T=Array(o).fill(0),E=Array(o).fill(0),D=Array(o).fill(0);function O(e,n){let r=c.instanceCounts[e],i=c.instanceBases[e],a=t[e],o=a.instanceGrid.ref.value.cellSize<=1?void 0:a.lodLevels?.ref.value,s=o?.[0]?.[4]??1,l=o?.[1]?.[4]??1,u=o?.[2]?.[4]??1,d=o?.[3]?.[4]??1;for(let e=0;e<r;++e){let t=(i+e)*4;n[t+0]=s,n[t+1]=l,n[t+2]=u,n[t+3]=d}}function k(){let e=0,n=0,r=0,i=0,a=0,s=0;for(let l=0;l<o;++l){let o=t[l],u=o.instanceCount.ref.value,f=o.uGroupCount.ref.value;c.instanceBases[l]=e,c.instanceCounts[l]=u,c.vertexBases[l]=n,c.elementOffsets[l]=r*4,T[l]=f,E[l]=a-e*f,D[l]=s,e+=u,n+=o.uVertexCount.ref.value,r+=o.drawCount.ref.value,a+=u*f,s+=d(l),f>i&&(i=f)}return c.count=o,{instanceTotal:e,vertexTotal:n,drawTotal:r,maxGroupCount:i}}function j(e){let n=od(l.aSegment.ref.value,e*3,Float32Array),r=od(l.aSegmentSphere.ref.value,e*4,Float32Array),i=od(l.aSegmentLod.ref.value,e*4,Float32Array),a=od(l.aTransform.ref.value,e*16,Float32Array),s=od(l.aInstance.ref.value,e,Float32Array);for(let e=0;e<o;++e){let o=t[e],l=c.instanceCounts[e],u=c.instanceBases[e];a.set(o.aTransform.ref.value.subarray(0,l*16),u*16);let d=o.aInstance.ref.value,f=o.invariantBoundingSphere.ref.value;O(e,i);for(let t=0;t<l;++t)s[u+t]=d[t]+u,n[(u+t)*3+0]=T[e],n[(u+t)*3+1]=E[e],n[(u+t)*3+2]=D[e],r[(u+t)*4+0]=f.center[0],r[(u+t)*4+1]=f.center[1],r[(u+t)*4+2]=f.center[2],r[(u+t)*4+3]=f.radius}I.update(l.aTransform,a),I.update(l.aInstance,s),I.update(l.instanceGrid,{...Xe(),cellSize:2}),I.update(l.aSegment,n),I.update(l.aSegmentSphere,r),I.update(l.aSegmentLod,i)}function ee(){let{instanceTotal:e,vertexTotal:t,drawTotal:n,maxGroupCount:a}=k();j(e);for(let e of i){I.update(l[e.key],od(l[e.key].ref.value,t*e.itemSize,Float32Array));for(let t=0;t<o;++t)C(e,t);I.update(l[e.key],l[e.key].ref.value)}if(r){I.update(l.elements,od(l.elements.ref.value,n,Uint32Array));for(let e=0;e<o;++e)w(e);I.update(l.elements,l.elements.ref.value)}for(let e of s)v(e);I.updateIfChanged(l.drawCount,n),I.updateIfChanged(l.instanceCount,e),I.updateIfChanged(l.uVertexCount,t),I.updateIfChanged(l.uInstanceCount,e),I.updateIfChanged(l.uGroupCount,a),b(),x(),S()}function M(){for(let e=0;e<o;++e){let n=t[e],a=m[e];a.aTransform=n.aTransform.ref.version,a.aInstance=n.aInstance.ref.version,a.boundingSphere=n.boundingSphere.ref.version,a.invariantBoundingSphere=n.invariantBoundingSphere.ref.version,a.markerStatus=n.markerStatus.ref.version,a.markerAverage=n.markerAverage.ref.version,a.transparencyAverage=n.transparencyAverage.ref.version,a.transparencyMin=n.transparencyMin.ref.version,a.emissiveAverage=n.emissiveAverage.ref.version,a.wiggleAverage=n.wiggleAverage.ref.version,a.hasReflection=n.hasReflection.ref.version,a.lodLevels=n.lodLevels?n.lodLevels.ref.version:-1;for(let e of i)a[e.key]=n[e.key].ref.version;r&&(a.elements=n.elements.ref.version);for(let e of s)a[e.tex]=n[e.tex].ref.version}}function N(){let e=g();if(e!==h)return h=e,ee(),M(),!0;let n=!1,c=!1,u=!1,d=!1,f=!1,y=!1,T=new Set;for(let e=0;e<o;++e){let a=t[e],o=m[e];(o.aTransform!==a.aTransform.ref.version||o.aInstance!==a.aInstance.ref.version||o.invariantBoundingSphere!==a.invariantBoundingSphere.ref.version)&&(n=!0),(o.boundingSphere!==a.boundingSphere.ref.version||o.invariantBoundingSphere!==a.invariantBoundingSphere.ref.version)&&(c=!0),(o.markerStatus!==a.markerStatus.ref.version||o.markerAverage!==a.markerAverage.ref.version)&&(u=!0),(o.transparencyAverage!==a.transparencyAverage.ref.version||o.transparencyMin!==a.transparencyMin.ref.version||o.emissiveAverage!==a.emissiveAverage.ref.version||o.wiggleAverage!==a.wiggleAverage.ref.version||o.hasReflection!==a.hasReflection.ref.version)&&(d=!0);for(let t of i)o[t.key]!==a[t.key].ref.version&&(C(t,e),T.add(t.key));r&&o.elements!==a.elements.ref.version&&(w(e),f=!0);let s=a.lodLevels?a.lodLevels.ref.version:-1;o.lodLevels!==s&&(O(e,l.aSegmentLod.ref.value),y=!0)}for(let e of s){let n=p.get(e.tex),r=!1;if(e.granularity(a)===`none`){m[0][e.tex]!==a[e.tex].ref.version&&v(e);continue}let i=l[e.tex].ref.value;for(let a=0;a<o;++a){let o=t[a];(m[a][e.tex]!==o[e.tex].ref.version||e.tex===`tMarker`&&m[a].markerStatus!==o.markerStatus.ref.version)&&(_(i,e,a,n[a]),r=!0)}r&&I.update(l[e.tex],i)}n&&j(l.instanceCount.ref.value);for(let e of T)I.update(l[e],l[e].ref.value);return f&&I.update(l.elements,l.elements.ref.value),!n&&y&&I.update(l.aSegmentLod,l.aSegmentLod.ref.value),c&&b(),u&&x(),d&&S(),M(),!1}return h=g(),ee(),M(),{type:e,values:u,segments:c,sync:N}}function cd(e,t,n,r,i,a,o,s){let c=dd[n.type],l={...dl,...fl,...pl,...ml,...c.schema,...hl},u={...n.values,uObjectId:I.create(t),dLightCount:I.create(s.dLightCount),dColorMarker:I.create(s.dColorMarker)},d=Pl(e,c.drawMode,c.shaderCode,l,u,a,o),f=Xc(),p=$c(u),m=`none`,h,g={first:0,offset:0,instanceBase:0};function _(e){let{segments:t}=n;return g.first=c.hasElements?0:t.vertexBases[e],g.offset=t.elementOffsets[e],g.instanceBase=t.instanceBases[e],g}function v(){let e=0;for(let t=0,n=r.length;t<n;++t)e+=Math.max(1,r[t].instanceGrid.ref.value.cellCount)+1;return e}function y(e,t){return t?r[e].lodLevels.ref.value:void 0}function b(){let e=!!f.prepare(r[0].lodLevels,v(),!0);for(let t=0,n=r.length;t<n;++t)f.fullSegment(r[t],_(t),y(t,e));m=`full`}function x(e,t,n,i,a){if(a===h){i.cacheHits.cull++;return}let o=f.prepare(r[0].lodLevels,v(),!0);m=`cull`;for(let a=0,s=r.length;a<s;++a)f.cullSegment(r[a],_(a),y(a,!!o),e,t,n,i,!0);h=a}function S(e,t,n){if(!f.prepare(r[0].lodLevels,v(),!0))b();else{m=`cull`;for(let i=0,a=r.length;i<a;++i)f.cullSimpleSegment(r[i],_(i),y(i,!0),e,t,n)}}return b(),{id:t,materialId:a,values:u,state:i,cull:x,uncull:()=>{m!==`full`&&b(),h=void 0},cullSimple:S,render:(e,t)=>{u.uAlpha&&u.alpha&&I.updateIfChanged(u.uAlpha,C(u.alpha.ref.value*i.alphaFactor,0,1)),d.render(e,t,f.list)},getClipInfo:p.get,getByteCount:()=>d.getByteCount(),getProgram:e=>d.getProgram(e),setTransparency:e=>d.setTransparency(e),update:()=>{n.sync(),m=`none`,d.update(),h=void 0},dispose:()=>d.destroy()}}var ld,ud,dd,fd,pd,md;function hd(){return(hd=e((()=>{N(),k(),Me(),Ee(),rt(),we(),K(),Ol(),Vu(),Mu(),$u(),Ru(),Fu(),Ii(),Ul(),sl(),ld=[`spheres`,`mesh`,`cylinders`,`lines`,`points`],ud=[{tex:`tColor`,dim:`uColorTexDim`,itemSize:3,granularity:e=>td(e.dColorType.ref.value),factor:e=>e.dDualColor?.ref.value?2:1},{tex:`tSize`,dim:`uSizeTexDim`,itemSize:3,granularity:e=>td(e.dSizeType.ref.value)},{tex:`tMarker`,dim:`uMarkerTexDim`,itemSize:1,granularity:e=>td(e.dMarkerType.ref.value)},{tex:`tOverpaint`,dim:`uOverpaintTexDim`,itemSize:4,granularity:e=>e.dOverpaint.ref.value?td(e.dOverpaintType.ref.value):`none`},{tex:`tTransparency`,dim:`uTransparencyTexDim`,itemSize:1,granularity:e=>e.dTransparency.ref.value?td(e.dTransparencyType.ref.value):`none`},{tex:`tEmissive`,dim:`uEmissiveTexDim`,itemSize:1,granularity:e=>e.dEmissive.ref.value?td(e.dEmissiveType.ref.value):`none`},{tex:`tSubstance`,dim:`uSubstanceTexDim`,itemSize:4,granularity:e=>e.dSubstance.ref.value?td(e.dSubstanceType.ref.value):`none`},{tex:`tClipping`,dim:`uClippingTexDim`,itemSize:1,granularity:e=>e.dClipping.ref.value?td(e.dClippingType.ref.value):`none`},{tex:`tWiggle`,dim:`uWiggleTexDim`,itemSize:1,granularity:e=>e.dWiggle.ref.value?td(e.dWiggleType.ref.value):`none`}],dd={spheres:{drawMode:`triangles`,shaderCode:Di,schema:Bu,hasElements:!1,vertexTexels:e=>e.uVertexCount.ref.value/6,extraTextures:[{tex:`tPositionGroup`,dim:`uTexDim`,itemSize:4,float:!0,granularity:()=>`vertex`}],vertexAttributes:nd(Bu)},mesh:{drawMode:`triangles`,shaderCode:ji,schema:ju,hasElements:!0,vertexTexels:e=>e.uVertexCount.ref.value,extraTextures:[],vertexAttributes:nd(ju)},cylinders:{drawMode:`triangles`,shaderCode:Oi,schema:Qu,hasElements:!0,vertexTexels:e=>e.uVertexCount.ref.value,extraTextures:[],vertexAttributes:nd(Qu)},lines:{drawMode:`triangles`,shaderCode:Ai,schema:Lu,hasElements:!0,vertexTexels:e=>e.uVertexCount.ref.value,extraTextures:[],vertexAttributes:nd(Lu)},points:{drawMode:`points`,shaderCode:Ei,schema:Pu,hasElements:!1,vertexTexels:e=>e.uVertexCount.ref.value,extraTextures:[],vertexAttributes:nd(Pu)}},fd=[`uniform`,`instance`,`group`,`groupInstance`,`vertex`],pd=[`instance`,`groupInstance`],md=new Te(`98`)})))()}function gd(e,t,n,r){return{id:xd(),type:e,values:t,state:n,materialId:r}}function _d(e){return`members`in e}function vd(e){if(e.length<2)return!1;let{type:t,materialId:n}=e[0];if(!ed(t))return!1;for(let r of e)if(r.type!==t||r.materialId!==n)return!1;return!!ad(t,e.map(e=>e.values))}function yd(e){if(!ed(e[0].type))throw Error(`unsupported merged render object type '${e[0].type}'`);let t=sd(e[0].type,e.map(e=>e.values));return{id:xd(),type:e[0].type,values:t.values,state:e[0].state,materialId:e[0].materialId,members:e,merged:t}}function bd(e,n,r,i){if(_d(n))return cd(e,n.id,n.merged,n.members.map(e=>e.values),n.state,n.materialId,r,i);switch(n.type){case`mesh`:return Au(e,n.id,n.values,n.state,n.materialId,r,i);case`points`:return Nu(e,n.id,n.values,n.state,n.materialId,r,i);case`spheres`:return zu(e,n.id,n.values,n.state,n.materialId,r,i);case`cylinders`:return Zu(e,n.id,n.values,n.state,n.materialId,r,i);case`text`:return Hu(e,n.id,n.values,n.state,n.materialId,r,i);case`lines`:return Iu(e,n.id,n.values,n.state,n.materialId,r,i);case`direct-volume`:return Du(e,n.id,n.values,n.state,n.materialId,r,i);case`image`:return Ju(e,n.id,n.values,n.state,n.materialId,r,i);case`texture-mesh`:return Gu(e,n.id,n.values,n.state,n.materialId,r,i)}t(n.type)}var xd,Sd;function Cd(){return(Cd=e((()=>{ku(),Mu(),Fu(),Ru(),Vu(),Wu(),qu(),Xu(),$u(),hd(),xd=r(0,2147483647),Sd=r(0,2147483647)})))()}function wd(e,t){for(let n=0,r=t*3;n<r;n+=3){let t=e[n],r=e[n+1],i=e[n+2],a=1/Math.sqrt(t*t+r*r+i*i);e[n]=t*a,e[n+1]=r*a,e[n+2]=i*a}return e}function Td(e,t,n,r){for(let i=0,a=r*3;i<a;i+=3)h.fromArray(Ad,t,n+i),h.transformMat4(Ad,Ad,e),h.toArray(Ad,t,n+i)}function Ed(e,t,n,r){for(let i=0,a=r*3;i<a;i+=3)h.fromArray(Ad,t,n+i),h.transformMat3(Ad,Ad,e),h.toArray(Ad,t,n+i)}function Dd(e,t){for(let n=0,r=e.length;n<r;n+=3)h.fromArray(Ad,e,n),h.normalize(Ad,Ad),h.scale(Ad,Ad,t),h.toArray(Ad,e,n)}function Od(e,t,n,r,i){for(let r=0,a=i*3;r<a;r+=3){let i=t[r]*3,a=t[r+1]*3,o=t[r+2]*3;h.fromArray(jd,e,i),h.fromArray(Md,e,a),h.fromArray(Nd,e,o),h.sub(Pd,Nd,Md),h.sub(Fd,jd,Md),h.cross(Pd,Pd,Fd),n[i]+=Pd[0],n[i+1]+=Pd[1],n[i+2]+=Pd[2],n[a]+=Pd[0],n[a+1]+=Pd[1],n[a+2]+=Pd[2],n[o]+=Pd[0],n[o+1]+=Pd[1],n[o+2]+=Pd[2]}return wd(n,r)}function kd(e,t,n=1){let r=ce(e),i=new Int32Array(r+2),a=new Int32Array(t),o=new Int32Array(t);for(let r=0,i=t*n;r<i;r+=n)++o[e[r]];let s=0;for(let e=0;e<t;e++)i[e]=s,s+=o[e];i[t]=s;let c=new Int32Array(s);for(let r=0,o=t*n;r<o;r+=n){let t=e[r],n=i[t]+a[t];c[n]=r,++a[t]}return{indices:c,offsets:i}}var Ad,jd,Md,Nd,Pd,Fd;function Id(){return(Id=e((()=>{B(),T(),Ad=h(),jd=h(),Md=h(),Nd=h(),Pd=h(),Fd=h()})))()}function Ld(e,t,n,r){let i=Rd(e,t,n,r);if(n.palette){I.updateIfChanged(i.dUsePalette,!0);let[e,t]=n.palette.domain||[0,1];I.update(i.uPaletteDomain,A.set(i.uPaletteDomain.ref.value,e,t)),I.update(i.uPaletteDefault,v.toVec3Normalized(i.uPaletteDefault.ref.value,n.palette.defaultColor??v(13421772))),zd(n.palette,i.tPalette)}else I.updateIfChanged(i.dUsePalette,!1);return i}function Rd(e,t,n,r){switch(n.granularity){case`uniform`:return Vd(e,n.color,r);case`instance`:return e.nonInstanceable?Wd(e,n.color,r):Ud(e,n.color,r);case`group`:return Wd(e,n.color,r);case`groupInstance`:return Gd(e,n.color,r);case`vertex`:return Kd(t,n.color,r);case`vertexInstance`:return qd(t,n.color,r);case`volume`:return Jd(n.grid,`volume`,r);case`volumeInstance`:return Jd(n.grid,`volumeInstance`,r);case`direct`:return Yd(r)}}function zd(e,t){let n=!0,r=t.ref.value;if(e.colors.length!==r.width||r.filter!==e.filter)n=!1;else{let t=r.array,i=0;for(let r of e.colors){let[e,a,o]=v.toRgb(r);if(t[i++]!==e||t[i++]!==a||t[i++]!==o){n=!1;break}}}if(n)return;let i=new Uint8Array(e.colors.length*3),a=0;for(let t of e.colors){let[e,n,r]=v.toRgb(t);i[a++]=e,i[a++]=n,i[a++]=r}I.update(t,{array:i,height:1,width:e.colors.length,filter:e.filter})}function Bd(e,t){return t?(I.update(t.uColor,v.toVec3Normalized(t.uColor.ref.value,e)),I.updateIfChanged(t.dColorType,`uniform`),t):{uColor:I.create(v.toVec3Normalized(h(),e)),tColor:I.create({array:new Uint8Array(3),width:1,height:1}),tColorGrid:I.create(ks()),uPaletteDomain:I.create(A.create(0,1)),uPaletteDefault:I.create(h()),tPalette:I.create({array:new Uint8Array(3),width:1,height:1}),uColorTexDim:I.create(A.create(1,1)),uColorGridDim:I.create(h.create(1,1,1)),uColorGridTransform:I.create(H.create(0,0,0,1)),dColorType:I.create(`uniform`),dUsePalette:I.create(!1)}}function Vd(e,t,n){e.reset();let r=e.hasNext?e.move():{location:He,isSecondary:!1};return Bd(t(r.location,r.isSecondary),n)}function Hd(e,t,n){return n?(I.update(n.tColor,e),I.update(n.uColorTexDim,A.create(e.width,e.height)),I.updateIfChanged(n.dColorType,t),n):{uColor:I.create(h()),tColor:I.create(e),tColorGrid:I.create(ks()),uPaletteDomain:I.create(A.create(0,1)),uPaletteDefault:I.create(h()),tPalette:I.create({array:new Uint8Array(3),width:1,height:1}),uColorTexDim:I.create(A.create(e.width,e.height)),uColorGridDim:I.create(h.create(1,1,1)),uColorGridTransform:I.create(H.create(0,0,0,1)),dColorType:I.create(t),dUsePalette:I.create(!1)}}function Ud(e,t,n){let{instanceCount:r}=e,i=G(Math.max(1,r),3,Uint8Array,n&&n.tColor.ref.value.array);for(e.reset();e.hasNext;){let{location:n,isSecondary:r,instanceIndex:a}=e.move();v.toArray(t(n,r),i.array,a*3),e.skipInstance()}return Hd(i,`instance`,n)}function Wd(e,t,n){let{groupCount:r,hasLocation2:i}=e,a=G(Math.max(1,r*(i?2:1)),3,Uint8Array,n&&n.tColor.ref.value.array);e.reset();let o=i?6:3;for(;e.hasNext&&!e.isNextNewInstance;){let{location:n,location2:r,isSecondary:s,groupIndex:c}=e.move();v.toArray(t(n,s),a.array,c*o),i&&v.toArray(t(r,s),a.array,c*o+3)}return Hd(a,`group`,n)}function Gd(e,t,n){let{groupCount:r,instanceCount:i,hasLocation2:a}=e,o=i*r*(a?2:1),s=G(Math.max(1,o),3,Uint8Array,n&&n.tColor.ref.value.array);e.reset();let c=a?6:3;for(;e.hasNext;){let{location:n,location2:r,isSecondary:i,index:o}=e.move();v.toArray(t(n,i),s.array,o*c),a&&v.toArray(t(r,i),s.array,o*c+3)}return Hd(s,`groupInstance`,n)}function Kd(e,t,n){let{groupCount:r,stride:i}=e,a=G(Math.max(1,r),3,Uint8Array,n&&n.tColor.ref.value.array);for(e.reset(),e.voidInstances();e.hasNext&&!e.isNextNewInstance;){let{location:n,isSecondary:r,groupIndex:o}=e.move(),s=t(n,r);for(let e=0;e<i;++e)v.toArray(s,a.array,(o+e)*3)}return Hd(a,`vertex`,n)}function qd(e,t,n){let{groupCount:r,instanceCount:i,stride:a}=e,o=i*r,s=G(Math.max(1,o),3,Uint8Array,n&&n.tColor.ref.value.array);for(e.reset();e.hasNext;){let{location:n,isSecondary:r,index:i}=e.move(),o=t(n,r);for(let e=0;e<a;++e)v.toArray(o,s.array,(i+e)*3)}return Hd(s,`vertexInstance`,n)}function Jd(e,t,n){let{colors:r,dimension:i,transform:a}=e,o=r.getWidth(),s=r.getHeight();return n?(I.update(n.tColorGrid,r),I.update(n.uColorTexDim,A.create(o,s)),I.update(n.uColorGridDim,h.clone(i)),I.update(n.uColorGridTransform,H.clone(a)),I.updateIfChanged(n.dColorType,t),n):{uColor:I.create(h()),tColor:I.create({array:new Uint8Array(3),width:1,height:1}),tColorGrid:I.create(r),uPaletteDomain:I.create(A.create(0,1)),uPaletteDefault:I.create(h()),tPalette:I.create({array:new Uint8Array(3),width:1,height:1}),uColorTexDim:I.create(A.create(o,s)),uColorGridDim:I.create(h.clone(i)),uColorGridTransform:I.create(H.clone(a)),dColorType:I.create(t),dUsePalette:I.create(!1)}}function Yd(e){return e?(I.updateIfChanged(e.dColorType,`direct`),e):{uColor:I.create(h()),tColor:I.create({array:new Uint8Array(3),width:1,height:1}),tColorGrid:I.create(ks()),uPaletteDomain:I.create(A.create(0,1)),uPaletteDefault:I.create(h()),tPalette:I.create({array:new Uint8Array(3),width:1,height:1}),uColorTexDim:I.create(A.create(1,1)),uColorGridDim:I.create(h.create(1,1,1)),uColorGridTransform:I.create(H.create(0,0,0,1)),dColorType:I.create(`direct`),dUsePalette:I.create(!1)}}function Xd(){return(Xd=e((()=>{N(),K(),be(),B(),Ue(),Ms()})))()}function Zd(){return L.Group({color:L.Color(v.fromRgb(76,76,76)),colorStrength:L.Numeric(1,{min:0,max:1,step:.01}),substance:Le.getParam(),substanceStrength:L.Numeric(1,{min:0,max:1,step:.01})})}function Qd(e,t){return e.color===t.color&&e.colorStrength===t.colorStrength&&Le.areEqual(e.substance,t.substance)&&e.substanceStrength===t.substanceStrength}function $d(e,t){return v.toArrayNormalized(e.color,t,0),t[3]=e.colorStrength,t}function ef(e,t){return Le.toArrayNormalized(e.substance,t,0),t[3]=e.substanceStrength,t}function tf(e){return{uInteriorColor:I.create($d(e,H())),uInteriorSubstance:I.create(ef(e,H()))}}function nf(e,t){I.update(e.uInteriorColor,$d(t,e.uInteriorColor.ref.value)),I.update(e.uInteriorSubstance,ef(t,e.uInteriorSubstance.ref.value))}function rf(){return(rf=e((()=>{Me(),x(),Ie(),F(),se()})))()}function af(){return L.Group({wiggleMode:L.Select(`position`,[[`position`,`Position`],[`group`,`Group`]],{description:`Noise seeding mode. Position: spatially correlated (nearby atoms move together). Group: per-group independent noise.`}),wiggleSpeed:L.Numeric(7,{min:0,max:10,step:.1},{description:`Speed of vertex wiggle animation.`}),wiggleAmplitude:L.Numeric(0,{min:0,max:5,step:.01},{description:`Amplitude of vertex wiggle animation.`}),wiggleFrequency:L.Numeric(.2,{min:.01,max:2,step:.01},{description:`Spatial frequency of vertex wiggle noise (position mode). Lower values correlate nearby atoms more.`}),tumbleSpeed:L.Numeric(1,{min:0,max:10,step:.1},{description:`Speed of instance tumble animation.`}),tumbleAmplitude:L.Numeric(0,{min:0,max:10,step:.1},{description:`Amplitude of instance tumble animation. In Ångströms of implied surface displacement.`}),tumbleFrequency:L.Numeric(.2,{min:0,max:2,step:.01},{description:`Spatial frequency multiplier for tumble noise.`})})}function of(e,t){return e.wiggleMode===t.wiggleMode&&e.wiggleSpeed===t.wiggleSpeed&&e.wiggleAmplitude===t.wiggleAmplitude&&e.wiggleFrequency===t.wiggleFrequency&&e.tumbleSpeed===t.tumbleSpeed&&e.tumbleAmplitude===t.tumbleAmplitude&&e.tumbleFrequency===t.tumbleFrequency}function sf(e){return{uWiggleSpeed:I.create(e.wiggleSpeed),uWiggleAmplitude:I.create(e.wiggleAmplitude),uWiggleFrequency:I.create(e.wiggleFrequency),uWiggleMode:I.create(e.wiggleMode===`position`?0:1),uTumbleSpeed:I.create(e.tumbleSpeed),uTumbleAmplitude:I.create(e.tumbleAmplitude),uTumbleFrequency:I.create(e.tumbleFrequency)}}function cf(e,t){I.updateIfChanged(e.uWiggleSpeed,t.wiggleSpeed),I.updateIfChanged(e.uWiggleAmplitude,t.wiggleAmplitude),I.updateIfChanged(e.uWiggleFrequency,t.wiggleFrequency),I.updateIfChanged(e.uWiggleMode,t.wiggleMode===`position`?0:1),I.updateIfChanged(e.uTumbleSpeed,t.tumbleSpeed),I.updateIfChanged(e.uTumbleAmplitude,t.tumbleAmplitude),I.updateIfChanged(e.uTumbleFrequency,t.tumbleFrequency)}function lf(){return(lf=e((()=>{N(),F()})))()}var uf;function df(){return(df=e((()=>{N(),B(),Fe(),Id(),nc(),Ye(),Xd(),ye(),F(),K(),Vt(),Rs(),Ks(),Qs(),T(),P(),fu(),yu(),Eu(),rf(),lf(),(function(e){function t(e,t,n,r,o,s,c){return c?a(e,t,n,r,o,s,c):i(e,t,n,r,o,s)}e.create=t;function n(e){return t(e?e.vertexBuffer.ref.value:new Float32Array,e?e.indexBuffer.ref.value:new Uint32Array,e?e.normalBuffer.ref.value:new Float32Array,e?e.groupBuffer.ref.value:new Float32Array,0,0,e)}e.createEmpty=n;function r(e){return ve([e.vertexCount,e.triangleCount,e.vertexBuffer.ref.version,e.indexBuffer.ref.version,e.normalBuffer.ref.version,e.groupBuffer.ref.version])}function i(e,t,n,i,a,o){let s=V(),c,l=-1,u=-1,d={kind:`mesh`,vertexCount:a,triangleCount:o,vertexBuffer:I.create(e),indexBuffer:I.create(t),normalBuffer:I.create(n),groupBuffer:I.create(i),varyingGroup:I.create(!1),get boundingSphere(){let e=r(d);if(e!==l){let t=Wt(d.vertexBuffer.ref.value,d.vertexCount,1);V.copy(s,t),l=e}return s},get groupMapping(){return d.groupBuffer.ref.version!==u&&(c=kd(d.groupBuffer.ref.value,d.vertexCount),u=d.groupBuffer.ref.version),c},setBoundingSphere(e){V.copy(s,e),l=r(d)},hasBoundingSphere(){return l===r(d)},meta:{}};return d}function a(e,t,n,r,i,a,o){return o.vertexCount=i,o.triangleCount=a,I.update(o.vertexBuffer,e),I.update(o.indexBuffer,t),I.update(o.normalBuffer,n),I.update(o.groupBuffer,r),o}function o(e){let{vertexCount:t,triangleCount:n}=e,r=e.vertexBuffer.ref.value,i=e.indexBuffer.ref.value,a=e.normalBuffer.ref.value.length>=t*3?e.normalBuffer.ref.value:new Float32Array(t*3);a===e.normalBuffer.ref.value&&a.fill(0,0,t*3),Od(r,i,a,t,n),I.update(e.normalBuffer,a)}e.computeNormals=o;function s(e,t=3){let n=e.vertexBuffer.ref.value,r=new Map,i=(e,t)=>`${e[0].toFixed(t)}|${e[1].toFixed(t)}|${e[2].toFixed(t)}`,a=0,o=h();for(let s=0,c=e.vertexCount;s<c;++s){h.fromArray(o,n,s*3);let e=i(o,t),c=r.get(e);c===void 0?r.set(e,1):(a+=1,r.set(e,c+1))}return a}e.checkForDuplicateVertices=s;let c=O();function l(e,t){let n=e.vertexBuffer.ref.value;Td(t,n,0,e.vertexCount),E.isTranslationAndUniformScaling(t)||Ed(O.directionTransform(c,t),e.normalBuffer.ref.value,0,e.vertexCount),I.update(e.vertexBuffer,n)}e.transform=l;function u(e){let{originalData:t}=`kind`in e?e.meta:e.meta.ref.value;return t}e.getOriginalData=u;function d(e,t=!0){let{indexBuffer:n,vertexBuffer:r,groupBuffer:i,normalBuffer:a,triangleCount:o,vertexCount:s}=e,c=n.ref.value,l=r.ref.value,u=i.ref.value,d=a.ref.value,f=R.create(Uint32Array,3,1024,o),p=R.create(Float32Array,3,1024,l);p.currentIndex=s*3,p.elementCount=s;let m=R.create(Float32Array,3,1024,d);m.currentIndex=s*3,m.elementCount=s;let g=R.create(Float32Array,1,1024,u);g.currentIndex=s,g.elementCount=s;let _=h(),v=h(),y=h(),b=h(),x=h(),S=h();function C(e){h.fromArray(_,l,e*3),h.fromArray(b,d,e*3),R.add3(p,_[0],_[1],_[2]),R.add3(m,b[0],b[1],b[2])}function w(e,t){h.fromArray(_,l,e*3),h.fromArray(v,l,t*3),h.scale(_,h.add(_,_,v),.5),h.fromArray(b,d,e*3),h.fromArray(x,d,t*3),h.scale(b,h.add(b,b,x),.5),R.add3(p,_[0],_[1],_[2]),R.add3(m,b[0],b[1],b[2])}function T(e,t,n){h.fromArray(_,l,e*3),h.fromArray(v,l,t*3),h.fromArray(y,l,n*3),h.scale(_,h.add(_,h.add(_,_,v),y),1/3),h.fromArray(b,d,e*3),h.fromArray(x,d,t*3),h.fromArray(S,d,n*3),h.scale(b,h.add(b,h.add(b,b,x),S),1/3),R.add3(p,_[0],_[1],_[2]),R.add3(m,b[0],b[1],b[2])}function E(e,t,n,r,i){++O,C(e),w(e,t),w(e,n),R.add3(f,D,D+1,D+2);for(let e=0;e<3;++e)R.add(g,r);D+=3,O+=2,C(t),C(n),w(e,t),w(e,n),R.add3(f,D,D+1,D+3),R.add3(f,D,D+3,D+2);for(let e=0;e<4;++e)R.add(g,i);D+=4}let D=s,O=0;if(t)for(let e=0,t=o;e<t;++e){let t=c[e*3],n=c[e*3+1],r=c[e*3+2],i=u[t],a=u[n],o=u[r];if(i===a&&i===o)++O,R.add3(f,t,n,r);else if(i===a)E(r,t,n,o,i);else if(i===o)E(n,r,t,a,o);else if(a===o)E(t,n,r,i,a);else{O+=2,C(t),w(t,n),w(t,r),T(t,n,r),R.add3(f,D,D+1,D+3),R.add3(f,D,D+3,D+2);for(let e=0;e<4;++e)R.add(g,i);D+=4,O+=2,C(n),w(n,r),w(n,t),T(t,n,r),R.add3(f,D,D+1,D+3),R.add3(f,D,D+3,D+2);for(let e=0;e<4;++e)R.add(g,a);D+=4,O+=2,C(r),w(r,n),w(r,t),T(t,n,r),R.add3(f,D+3,D+1,D),R.add3(f,D+2,D+3,D);for(let e=0;e<4;++e)R.add(g,o);D+=4}}else for(let e=0,t=o;e<t;++e){let t=c[e*3],n=c[e*3+1],r=c[e*3+2],i=u[t],a=u[n],o=u[r];if(i!==a||i!==o){++O,C(t),C(n),C(r),R.add3(f,D,D+1,D+2);let e=a===o?a:i;for(let t=0;t<3;++t)R.add(g,e);D+=3}else++O,R.add3(f,t,n,r)}let k=R.compact(f),A=R.compact(p),j=R.compact(m),ee=R.compact(g);return e.vertexCount=D,e.triangleCount=O,I.update(r,A),I.update(i,ee),I.update(n,k),I.update(a,j),e.meta.originalData={indexBuffer:c,vertexCount:s,triangleCount:o},e}e.uniformTriangleGroup=d;function f(e){let{vertexCount:t,triangleCount:n}=e,r=e.indexBuffer.ref.value,i=[];for(let e=0;e<t;++e)i[e]=[];for(let e=0;e<n;++e){let t=r[e*3],n=r[e*3+1],a=r[e*3+2];j(i[t],n),j(i[t],a),j(i[n],t),j(i[n],a),j(i[a],t),j(i[a],n)}return i}function p(e){let{triangleCount:t}=e,n=e.indexBuffer.ref.value,r=new Map,i=(e,t)=>{let n=_e(e,t),i=r.get(n)||0;r.set(n,i+1)};for(let e=0;e<t;++e){let t=n[e*3],r=n[e*3+1],a=n[e*3+2];i(t,r),i(t,a),i(r,a)}return r}function m(e){let t=new Set,n=[0,0];return e.forEach((e,r)=>{e===1&&(he(n,r),t.add(n[0]),t.add(n[1]))}),t}function g(e,t,n){let r=new Map,i=(e,t)=>{r.has(e)?j(r.get(e),t):r.set(e,[t])};return t.forEach(r=>{let a=e[r];for(let e of a)t.has(e)&&n.get(_e(r,e))===1&&i(r,e)}),r}function _(e,t){let{indexBuffer:n,triangleCount:r}=e,i=n.ref.value,a=R.create(Uint32Array,3,1024,r),o=0;for(let e=0;e<r;++e){let n=i[e*3],r=i[e*3+1],s=i[e*3+2];t[n].length!==2&&t[r].length!==2&&t[s].length!==2&&(R.add3(a,n,r,s),o+=1)}let s=R.compact(a);return e.triangleCount=o,I.update(n,s),e}function v(e,t,n,r){let{vertexBuffer:i,indexBuffer:a,normalBuffer:o,triangleCount:s}=e,c=i.ref.value,l=a.ref.value,u=o.ref.value,d=R.create(Uint32Array,3,1024,s),f=0;for(let e=0;e<s;++e)R.add3(d,l[e*3],l[e*3+1],l[e*3+2]),f+=1;let p=h(),m=h(),g=h(),_=h(),v=h(),y=h(),b=h(),x=h(),S=h(),C=h(),w=ie(120),T=new Set,E=Array.from(n.keys()).filter(e=>n.get(e).length<2).map(e=>{let t=n.get(e);return h.fromArray(p,c,e*3),h.fromArray(m,c,t[0]*3),h.fromArray(g,c,t[1]*3),h.sub(v,m,p),h.sub(y,g,p),[e,h.angle(v,y)]});E.sort(([,e],[,t])=>e-t);for(let[e,i]of E){if(T.has(e)||i>w)continue;let a=n.get(e);if(t[a[0]].includes(a[1])&&!n.get(a[0])?.includes(a[1])||(h.fromArray(p,c,e*3),h.fromArray(m,c,a[0]*3),h.fromArray(g,c,a[1]*3),h.sub(v,m,p),h.sub(y,g,p),h.add(x,v,y),h.squaredDistance(p,m)>=r))continue;let o=!1;for(let n of t[e])if(!a.includes(n)&&(h.fromArray(_,c,n*3),h.sub(b,_,p),h.dot(x,b)<0)){o=!0;break}o&&(h.fromArray(S,u,e*3),h.triangleNormal(C,p,m,g),h.dot(C,S)>0?R.add3(d,e,a[0],a[1]):R.add3(d,a[1],a[0],e),T.add(e),T.add(a[0]),T.add(a[1]),f+=1)}let D=R.compact(d);return e.triangleCount=f,I.update(a,D),e}function y(e,t,n){let{iterations:r,lambda:i}=n,a=h(),o=h(),s=h(),c=h(),l=-i,u=new Float32Array(e.vertexBuffer.ref.value.length),d=n=>{let r=e.vertexBuffer.ref.value;u.set(r),t.forEach((e,t)=>{if(e.length!==2)return;h.fromArray(a,r,t*3),h.fromArray(o,r,e[0]*3),h.fromArray(s,r,e[1]*3);let i=1/h.distance(a,o),l=1/h.distance(a,s);h.scale(o,o,i),h.scale(s,s,l),h.add(c,o,s),h.scale(c,c,1/(i+l)),h.sub(c,c,a),h.scale(c,c,n),h.add(c,a,c),h.toArray(c,u,t*3)});let i=e.vertexBuffer.ref.value;I.update(e.vertexBuffer,u),u=i};for(let e=0;e<r;++e)d(i),d(l)}function b(e,t){_(e,f(e));for(let n=0;n<10;++n){let n=e.triangleCount,r=p(e),i=f(e);if(v(e,i,g(i,m(r),r),t.maxNewEdgeLength*t.maxNewEdgeLength),e.triangleCount===n)break}let n=p(e);return y(e,g(f(e),m(n),n),{iterations:t.iterations,lambda:.5}),e}e.smoothEdges=b;let x=e.Params={...W.Params,doubleSided:L.Boolean(!1,W.CustomQualityParamInfo),flipSided:L.Boolean(!1,W.ShadingCategory),flatShaded:L.Boolean(!1,W.ShadingCategory),ignoreLight:L.Boolean(!1,W.ShadingCategory),celShaded:L.Boolean(!1,W.ShadingCategory),xrayShaded:L.Select(!1,[[!1,`Off`],[!0,`On`],[`inverted`,`Inverted`]],W.ShadingCategory),transparentBackfaces:L.Select(`off`,L.arrayToOptions([`off`,`on`,`opaque`]),W.ShadingCategory),solidInterior:L.Boolean(!1,{...W.ShadingCategory,description:`Render a solid cap where the camera near plane or a clip object cuts a closed surface`}),bumpFrequency:L.Numeric(0,{min:0,max:10,step:.1},W.ShadingCategory),bumpAmplitude:L.Numeric(1,{min:0,max:5,step:.1},W.ShadingCategory),interior:Zd(),animation:af()};e.Utils={Params:x,createEmpty:n,createValues:C,createValuesSimple:w,updateValues:T,updateBoundingSphere:D,createRenderableState:k,updateRenderableState:A,createPositionIterator:S};function S(e,t){let n=e.vertexCount,r=t.instanceCount.ref.value,i=We(),a=i.position,o=i.normal,s=e.vertexBuffer.ref.value,c=e.normalBuffer.ref.value,l=t.aTransform.ref.value;return qe(n,r,1,(e,t)=>(t<0?(h.fromArray(a,s,e*3),h.fromArray(o,c,e*3)):(h.transformMat4Offset(a,s,l,0,e*3,t*16),h.transformDirectionOffset(o,c,l,0,e*3,t*16)),i))}function C(e,t,n,r,i){let{instanceCount:a,groupCount:o}=n,s=Ld(n,S(e,t),r.color),c=Mt(i.instanceGranularity,o,a)?ec(a,`instance`):ec(a*o,`groupInstance`),l=Is(),u=Ws(),d=_u(),f=uu(),p=Xs(),m=wu(),h={drawCount:e.triangleCount*3,vertexCount:e.vertexCount,groupCount:o,instanceCount:a},g=V.clone(e.boundingSphere),_=Gt(g,t.aTransform.ref.value,a,0);return{dGeometryType:I.create(`mesh`),aPosition:e.vertexBuffer,aNormal:e.normalBuffer,aGroup:e.groupBuffer,elements:e.indexBuffer,dVaryingGroup:e.varyingGroup,boundingSphere:I.create(_),invariantBoundingSphere:I.create(g),uInvariantBoundingSphere:I.create(H.ofSphere(g)),...s,...c,...l,...u,...d,...f,...p,...m,...t,...W.createValues(i,h),uDoubleSided:I.create(i.doubleSided),dFlatShaded:I.create(i.flatShaded),dFlipSided:I.create(i.flipSided),dIgnoreLight:I.create(i.ignoreLight),dCelShaded:I.create(i.celShaded),dXrayShaded:I.create(i.xrayShaded===`inverted`?`inverted`:i.xrayShaded===!0?`on`:`off`),dTransparentBackfaces:I.create(i.transparentBackfaces),dSolidInterior:I.create(i.solidInterior),uBumpFrequency:I.create(i.bumpFrequency),uBumpAmplitude:I.create(i.bumpAmplitude),meta:I.create(e.meta),...tf(i.interior),...sf(i.animation)}}function w(e,t,n,r,i){let a=W.createSimple(n,r,i),o={...L.getDefaultValues(x),...t};return C(e,a.transform,a.locationIterator,a.theme,o)}function T(e,t){W.updateValues(e,t),I.updateIfChanged(e.uDoubleSided,t.doubleSided),I.updateIfChanged(e.dFlatShaded,t.flatShaded),I.updateIfChanged(e.dFlipSided,t.flipSided),I.updateIfChanged(e.dIgnoreLight,t.ignoreLight),I.updateIfChanged(e.dCelShaded,t.celShaded),I.updateIfChanged(e.dXrayShaded,t.xrayShaded===`inverted`?`inverted`:t.xrayShaded===!0?`on`:`off`),I.updateIfChanged(e.dTransparentBackfaces,t.transparentBackfaces),I.updateIfChanged(e.dSolidInterior,t.solidInterior),I.updateIfChanged(e.uBumpFrequency,t.bumpFrequency),I.updateIfChanged(e.uBumpAmplitude,t.bumpAmplitude),nf(e,t.interior),cf(e,t.animation)}function D(e,t){let n=V.clone(t.boundingSphere),r=Gt(n,e.aTransform.ref.value,e.instanceCount.ref.value,0);V.equals(r,e.boundingSphere.ref.value)||I.update(e.boundingSphere,r),V.equals(n,e.invariantBoundingSphere.ref.value)||(I.update(e.invariantBoundingSphere,n),I.update(e.uInvariantBoundingSphere,H.fromSphere(e.uInvariantBoundingSphere.ref.value,n)))}function k(e){let t=W.createRenderableState(e);return A(t,e),t}function A(e,t){W.updateRenderableState(e,t),e.opaque=e.opaque&&!t.xrayShaded,e.writeDepth=e.opaque}})(uf||={})})))()}function ff(e,t,n,r){switch(Yp.getGranularity(e,n.granularity)){case`uniform`:return gf(e,n.size,r);case`instance`:return vf(e,n.size,r);case`group`:return yf(e,n.size,r);case`groupInstance`:return bf(e,n.size,r);case`vertex`:return xf(t,n.size,r);case`vertexInstance`:return Sf(t,n.size,r)}}function pf(e){switch(e.dSizeType.ref.value){case`uniform`:return e.uSize.ref.value;case`instance`:case`group`:case`groupInstance`:case`vertex`:case`vertexInstance`:let t=0,n=e.tSize.ref.value.array;for(let e=0,r=n.length;e<r;e+=3){let r=ic(n[e],n[e+1],n[e+2]);t<r&&(t=r)}return t/100}}function mf(){return{tSize:I.create(Cf),uSizeTexDim:I.create(A.create(1,1))}}function hf(e,t){return t?(I.update(t.uSize,e),I.updateIfChanged(t.dSizeType,`uniform`),t):{uSize:I.create(e),...mf(),dSizeType:I.create(`uniform`)}}function gf(e,t,n){return e.reset(),hf(t(e.hasNext?e.move().location:He),n)}function _f(e,t,n){return n?(I.update(n.tSize,e),I.update(n.uSizeTexDim,A.create(e.width,e.height)),I.updateIfChanged(n.dSizeType,t),n):{uSize:I.create(0),tSize:I.create(e),uSizeTexDim:I.create(A.create(e.width,e.height)),dSizeType:I.create(t)}}function vf(e,t,n){let{instanceCount:r}=e,i=G(Math.max(1,r),3,Uint8Array,n&&n.tSize.ref.value.array);for(e.reset();e.hasNext&&!e.isNextNewInstance;){let n=e.move();rc(t(n.location)*100,i.array,n.instanceIndex*3),e.skipInstance()}return _f(i,`instance`,n)}function yf(e,t,n){let{groupCount:r}=e,i=G(Math.max(1,r),3,Uint8Array,n&&n.tSize.ref.value.array);for(e.reset();e.hasNext&&!e.isNextNewInstance;){let n=e.move();rc(t(n.location)*100,i.array,n.groupIndex*3)}return _f(i,`group`,n)}function bf(e,t,n){let{groupCount:r,instanceCount:i}=e,a=i*r,o=G(Math.max(1,a),3,Uint8Array,n&&n.tSize.ref.value.array);for(e.reset();e.hasNext;){let n=e.move();rc(t(n.location)*100,o.array,n.index*3)}return _f(o,`groupInstance`,n)}function xf(e,t,n){let{groupCount:r}=e,i=G(Math.max(1,r),3,Uint8Array,n&&n.tSize.ref.value.array);for(e.reset();e.hasNext;){let n=e.move();rc(t(n.location)*100,i.array,n.index*3)}return _f(i,`vertex`,n)}function Sf(e,t,n){let{groupCount:r,instanceCount:i}=e,a=i*r,o=G(Math.max(1,a),3,Uint8Array,n&&n.tSize.ref.value.array);for(e.reset();e.hasNext;){let n=e.move();rc(t(n.location)*100,o.array,n.index*3)}return _f(o,`vertexInstance`,n)}var Cf;function wf(){return(wf=e((()=>{N(),B(),K(),Ue(),Xp(),dc(),Cf={array:new Uint8Array(3),width:1,height:1}})))()}var Tf;function Ef(){return(Ef=e((()=>{N(),B(),Id(),Xd(),nc(),wf(),Ye(),F(),K(),Fe(),Vt(),Rs(),Ks(),ye(),Qs(),fu(),yu(),Eu(),lf(),(function(e){function t(e,t,n,r){return r?a(e,t,n,r):i(e,t,n)}e.create=t;function n(e){return t(e?e.centerBuffer.ref.value:new Float32Array,e?e.groupBuffer.ref.value:new Float32Array,0,e)}e.createEmpty=n;function r(e){return ve([e.pointCount,e.centerBuffer.ref.version,e.groupBuffer.ref.version])}function i(e,t,n){let i=V(),a,o=-1,s=-1,c={kind:`points`,pointCount:n,centerBuffer:I.create(e),groupBuffer:I.create(t),get boundingSphere(){let e=r(c);if(e!==o){let t=Wt(c.centerBuffer.ref.value,c.pointCount,1);V.copy(i,t),o=e}return i},get groupMapping(){return c.groupBuffer.ref.version!==s&&(a=kd(c.groupBuffer.ref.value,c.pointCount),s=c.groupBuffer.ref.version),a},setBoundingSphere(e){V.copy(i,e),o=r(c)},hasBoundingSphere(){return o===r(c)}};return c}function a(e,t,n,r){return r.pointCount=n,I.update(r.centerBuffer,e),I.update(r.groupBuffer,t),r}function o(e,t){let n=e.centerBuffer.ref.value;Td(t,n,0,e.pointCount),I.update(e.centerBuffer,n)}e.transform=o;let s=e.StyleTypes={square:`Square`,circle:`Circle`,fuzzy:`Fuzzy`};e.StyleTypeNames=Object.keys(s);let c=e.Params={...W.Params,sizeFactor:L.Numeric(3,{min:0,max:10,step:.1}),pointSizeAttenuation:L.Boolean(!1),pointStyle:L.Select(`square`,L.objectToOptions(s)),animation:af()};e.Utils={Params:c,createEmpty:n,createValues:u,createValuesSimple:d,updateValues:f,updateBoundingSphere:p,createRenderableState:m,updateRenderableState:g,createPositionIterator:l};function l(e,t){let n=e.pointCount,r=t.instanceCount.ref.value,i=We(),a=i.position,o=e.centerBuffer.ref.value,s=t.aTransform.ref.value;return qe(n,r,1,(e,t)=>(t<0?h.fromArray(a,o,e*3):h.transformMat4Offset(a,o,s,0,e*3,t*16),i))}function u(e,t,n,r,i){let{instanceCount:a,groupCount:o}=n,s=l(e,t),c=Ld(n,s,r.color),u=ff(n,s,r.size),d=Mt(i.instanceGranularity,o,a)?ec(a,`instance`):ec(a*o,`groupInstance`),f=Is(),p=Ws(),m=_u(),h=uu(),g=Xs(),_=wu(),v={drawCount:e.pointCount,vertexCount:e.pointCount,groupCount:o,instanceCount:a},y=V.clone(e.boundingSphere),b=Gt(y,t.aTransform.ref.value,a,0);return{dGeometryType:I.create(`points`),aPosition:e.centerBuffer,aGroup:e.groupBuffer,boundingSphere:I.create(b),invariantBoundingSphere:I.create(y),uInvariantBoundingSphere:I.create(H.ofSphere(y)),...c,...u,...d,...f,...p,...m,...h,...g,..._,...t,...W.createValues(i,v),uSizeFactor:I.create(i.sizeFactor),dPointSizeAttenuation:I.create(i.pointSizeAttenuation),dPointStyle:I.create(i.pointStyle),...sf(i.animation)}}function d(e,t,n,r,i){let a=W.createSimple(n,r,i),o={...L.getDefaultValues(c),...t};return u(e,a.transform,a.locationIterator,a.theme,o)}function f(e,t){W.updateValues(e,t),I.updateIfChanged(e.uSizeFactor,t.sizeFactor),I.updateIfChanged(e.dPointSizeAttenuation,t.pointSizeAttenuation),I.updateIfChanged(e.dPointStyle,t.pointStyle),cf(e,t.animation)}function p(e,t){let n=V.clone(t.boundingSphere),r=Gt(n,e.aTransform.ref.value,e.instanceCount.ref.value,0);V.equals(r,e.boundingSphere.ref.value)||I.update(e.boundingSphere,r),V.equals(n,e.invariantBoundingSphere.ref.value)||(I.update(e.invariantBoundingSphere,n),I.update(e.uInvariantBoundingSphere,H.fromSphere(e.uInvariantBoundingSphere.ref.value,n)))}function m(e){let t=W.createRenderableState(e);return g(t,e),t}function g(e,t){W.updateRenderableState(e,t),e.opaque=e.opaque&&t.pointStyle!==`fuzzy`,e.writeDepth=e.opaque}})(Tf||={})})))()}function Df(e,t,n,r,i,a,o){for(let s=0;s<t;s++){for(let i=0;i<n;i++)r[i]=e[i*t+s];Of(r,i,a,o,n);for(let r=0;r<n;r++)e[r*t+s]=i[r]}for(let s=0;s<n;s++){for(let n=0;n<t;n++)r[n]=e[s*t+n];Of(r,i,a,o,t);for(let n=0;n<t;n++)e[s*t+n]=Math.sqrt(i[n])}}function Of(e,t,n,r,i){n[0]=0,r[0]=-(2**53-1),r[1]=2**53-1;for(let t=1,a=0;t<i;t++){let i=(e[t]+t*t-(e[n[a]]+n[a]*n[a]))/(2*t-2*n[a]);for(;i<=r[a];)a--,i=(e[t]+t*t-(e[n[a]]+n[a]*n[a]))/(2*t-2*n[a]);a++,n[a]=t,r[a]=i,r[a+1]=2**53-1}for(let a=0,o=0;a<i;a++){for(;r[o+1]<a;)o++;t[a]=(a-n[o])*(a-n[o])+e[n[o]]}}function kf(){return(kf=e((()=>{})))()}function Af(e){let t=JSON.stringify(e);return Nf[t]===void 0&&(Nf[t]=new Ff(e)),Nf[t]}function jf(){if(!If)throw Error("When running in Node.js and wanting to use Canvas API, call mol-util/data-source's setCanvasModule function first and pass imported `canvas` module to it.");return If}function Mf(e,t,n){if(de)return jf().createCanvas(e,t).getContext(`2d`,n);{let r=document.createElement(`canvas`);return r.width=e,r.height=t,r.getContext(`2d`,n)}}var Nf,Pf,Ff,If;function Lf(){return(Lf=e((()=>{F(),kf(),K(),m(),Nf={},Pf={fontFamily:L.Select(`sans-serif`,[[`sans-serif`,`Sans Serif`],[`monospace`,`Monospace`],[`serif`,`Serif`],[`cursive`,`Cursive`]]),fontQuality:L.Select(3,[[0,`lower`],[1,`low`],[2,`medium`],[3,`high`],[4,`higher`]]),fontStyle:L.Select(`normal`,[[`normal`,`Normal`],[`italic`,`Italic`],[`oblique`,`Oblique`]]),fontVariant:L.Select(`normal`,[[`normal`,`Normal`],[`small-caps`,`Small Caps`]]),fontWeight:L.Select(`normal`,[[`normal`,`Normal`],[`bold`,`Bold`]])},Ff=class{constructor(e={}){this.mapped={},this.scratchW=0,this.scratchH=0,this.currentX=0,this.currentY=0,this.cutoff=.5;let t={...L.getDefaultValues(Pf),...e};this.props=t;let n=64*(t.fontQuality+1);this.buffer=n/8,this.radius=n/3,this.lineHeight=Math.round(n+2*this.buffer+this.radius),this.maxWidth=Math.round(this.lineHeight*.75),this.texture=G(350*this.lineHeight*this.maxWidth,1,Uint8Array),this.scratchContext=Mf(this.maxWidth,this.lineHeight,{willReadFrequently:!0}),this.scratchContext.font=`${t.fontStyle} ${t.fontVariant} ${t.fontWeight} ${n}px ${t.fontFamily}`,this.scratchContext.fillStyle=`black`,this.scratchContext.textBaseline=`middle`,this.scratchData=new Uint8Array(this.lineHeight*this.maxWidth),this.gridOuter=new Float64Array(this.lineHeight*this.maxWidth),this.gridInner=new Float64Array(this.lineHeight*this.maxWidth),this.f=new Float64Array(Math.max(this.lineHeight,this.maxWidth)),this.d=new Float64Array(Math.max(this.lineHeight,this.maxWidth)),this.z=new Float64Array(Math.max(this.lineHeight,this.maxWidth)+1),this.v=new Int16Array(Math.max(this.lineHeight,this.maxWidth)),this.middle=Math.ceil(this.lineHeight/2),this.placeholder=this.get(`�`)}get(e){if(this.mapped[e]===void 0){this.draw(e);let{array:t,width:n,height:r}=this.texture,i=this.scratchData;if(this.currentX+this.scratchW>n&&(this.currentX=0,this.currentY+=this.scratchH),this.currentY+this.scratchH>r)return console.warn(`canvas to small`),this.placeholder;this.mapped[e]={x:this.currentX,y:this.currentY,w:this.scratchW,h:this.scratchH,nw:this.scratchW/this.lineHeight,nh:this.scratchH/this.lineHeight};for(let e=0;e<this.scratchH;++e)for(let r=0;r<this.scratchW;++r)t[n*(this.currentY+e)+this.currentX+r]=i[e*this.scratchW+r];this.currentX+=this.scratchW}return this.mapped[e]}draw(e){let t=this.lineHeight,n=this.scratchContext,r=this.scratchData,i=n.measureText(e),a=Math.min(this.maxWidth,Math.ceil(i.width+2*this.buffer)),o=a*t;n.clearRect(0,0,a,t),n.fillText(e,this.buffer,this.middle);let s=n.getImageData(0,0,a,t);for(let e=0;e<o;e++){let t=s.data[e*4+3]/255;this.gridOuter[e]=t===1?0:t===0?2**53-1:Math.max(0,.5-t)**2,this.gridInner[e]=t===1?2**53-1:t===0?0:Math.max(0,t-.5)**2}Df(this.gridOuter,a,t,this.f,this.d,this.v,this.z),Df(this.gridInner,a,t,this.f,this.d,this.v,this.z);for(let e=0;e<o;e++){let t=this.gridOuter[e]-this.gridInner[e];r[e]=Math.max(0,Math.min(255,Math.round(255-255*(t/this.radius+this.cutoff))))}this.scratchW=a,this.scratchH=t}}})))()}function Rf(e,t,n,r){let i=0,a=0,o=0;for(let r=0,s=n*4;r<s;++r){let n=2*r,s=Math.abs(e[n]);s>i&&(i=s);let c=Math.abs(e[n+1]);c>a&&(a=c);let l=Math.abs(t[r]);l>o&&(o=l)}return Math.max(o,r*Math.sqrt(i*i+a*a))}var zf;function Bf(){return(Bf=e((()=>{F(),N(),Ye(),Xd(),wf(),nc(),pe(),Fe(),K(),be(),B(),Lf(),Cd(),Vt(),Rs(),Ks(),ye(),Id(),Qs(),fu(),yu(),Eu(),(function(e){function t(e,t,n,r,o,s,c,l,u){return u?a(e,t,n,r,o,s,c,l,u):i(e,t,n,r,o,s,c,l)}e.create=t;function n(e){return t(e?e.fontTexture.ref.value:G(0,1,Uint8Array),e?e.centerBuffer.ref.value:new Float32Array,e?e.mappingBuffer.ref.value:new Float32Array,e?e.depthBuffer.ref.value:new Float32Array,e?e.indexBuffer.ref.value:new Uint32Array,e?e.groupBuffer.ref.value:new Float32Array,e?e.tcoordBuffer.ref.value:new Float32Array,0,e)}e.createEmpty=n;function r(e){return ve([e.charCount,e.fontTexture.ref.version,e.centerBuffer.ref.version,e.mappingBuffer.ref.version,e.depthBuffer.ref.version,e.indexBuffer.ref.version,e.groupBuffer.ref.version,e.tcoordBuffer.ref.version])}function i(e,t,n,i,a,o,s,c){let l=V(),u,d=-1,f=-1,p={kind:`text`,charCount:c,fontTexture:I.create(e),centerBuffer:I.create(t),mappingBuffer:I.create(n),depthBuffer:I.create(i),indexBuffer:I.create(a),groupBuffer:I.create(o),tcoordBuffer:I.create(s),get boundingSphere(){let e=r(p);if(e!==d){let t=Wt(p.centerBuffer.ref.value,p.charCount*4,4);V.copy(l,t),d=e}return l},get groupMapping(){return p.groupBuffer.ref.version!==f&&(u=kd(p.groupBuffer.ref.value,p.charCount,4),f=p.groupBuffer.ref.version),u},setBoundingSphere(e){V.copy(l,e),d=r(p)},hasBoundingSphere(){return d===r(p)}};return p}function a(e,t,n,r,i,a,o,s,c){return c.charCount=s,I.update(c.fontTexture,e),I.update(c.centerBuffer,t),I.update(c.mappingBuffer,n),I.update(c.depthBuffer,r),I.update(c.indexBuffer,i),I.update(c.groupBuffer,a),I.update(c.tcoordBuffer,o),c}let o=e.Params={...W.Params,...Pf,sizeFactor:L.Numeric(1,{min:0,max:10,step:.1}),borderWidth:L.Numeric(0,{min:0,max:.5,step:.01}),borderColor:L.Color(me.grey),offsetX:L.Numeric(0,{min:0,max:10,step:.1}),offsetY:L.Numeric(0,{min:0,max:10,step:.1}),offsetZ:L.Numeric(0,{min:0,max:10,step:.1}),background:L.Boolean(!1),backgroundMargin:L.Numeric(.2,{min:0,max:1,step:.01}),backgroundColor:L.Color(me.grey),backgroundOpacity:L.Numeric(1,{min:0,max:1,step:.01}),tether:L.Boolean(!1),tetherLength:L.Numeric(1,{min:0,max:5,step:.1}),tetherBaseWidth:L.Numeric(.3,{min:0,max:1,step:.01}),attachment:L.Select(`middle-center`,[[`bottom-left`,`bottom-left`],[`bottom-center`,`bottom-center`],[`bottom-right`,`bottom-right`],[`middle-left`,`middle-left`],[`middle-center`,`middle-center`],[`middle-right`,`middle-right`],[`top-left`,`top-left`],[`top-center`,`top-center`],[`top-right`,`top-right`]])};e.Utils={Params:o,createEmpty:n,createValues:c,createValuesSimple:l,updateValues:u,updateBoundingSphere:d,createRenderableState:f,updateRenderableState:p,createPositionIterator:s};function s(e,t){let n=e.charCount*4,r=t.instanceCount.ref.value,i=We(),a=i.position,o=e.centerBuffer.ref.value,s=t.aTransform.ref.value;return qe(n,r,4,(e,t)=>(t<0?h.fromArray(a,o,e*3):h.transformMat4Offset(a,o,s,0,e*3,t*16),i))}function c(e,t,n,r,i){let{instanceCount:a,groupCount:o}=n,c=s(e,t),l=Ld(n,c,r.color),u=ff(n,c,r.size),d=Mt(i.instanceGranularity,o,a)?ec(a,`instance`):ec(a*o,`groupInstance`),f=Is(),p=Ws(),m=_u(),g=uu(),_=Xs(),y=wu(),b={drawCount:e.charCount*2*3,vertexCount:e.charCount*4,groupCount:o,instanceCount:a},x=pf(u)*i.sizeFactor,S=Rf(e.mappingBuffer.ref.value,e.depthBuffer.ref.value,e.charCount,x),w=V.expand(V(),e.boundingSphere,S),T=Gt(w,t.aTransform.ref.value,a,0);return{dGeometryType:I.create(`text`),aPosition:e.centerBuffer,aMapping:e.mappingBuffer,aDepth:e.depthBuffer,aGroup:e.groupBuffer,elements:e.indexBuffer,boundingSphere:I.create(T),invariantBoundingSphere:I.create(w),uInvariantBoundingSphere:I.create(H.ofSphere(w)),...l,...u,...d,...f,...p,...m,...g,..._,...y,...t,aTexCoord:e.tcoordBuffer,tFont:e.fontTexture,padding:I.create(S),...W.createValues(i,b),uSizeFactor:I.create(i.sizeFactor),uBorderWidth:I.create(C(i.borderWidth,0,.5)),uBorderColor:I.create(v.toArrayNormalized(i.borderColor,h.zero(),0)),uOffsetX:I.create(i.offsetX),uOffsetY:I.create(i.offsetY),uOffsetZ:I.create(i.offsetZ),uBackgroundColor:I.create(v.toArrayNormalized(i.backgroundColor,h.zero(),0)),uBackgroundOpacity:I.create(i.backgroundOpacity)}}function l(e,t,n,r,i){let a=W.createSimple(n,r,i),s={...L.getDefaultValues(o),...t};return c(e,a.transform,a.locationIterator,a.theme,s)}function u(e,t){W.updateValues(e,t),I.updateIfChanged(e.uSizeFactor,t.sizeFactor),I.updateIfChanged(e.uBorderWidth,t.borderWidth),v.fromNormalizedArray(e.uBorderColor.ref.value,0)!==t.borderColor&&(v.toArrayNormalized(t.borderColor,e.uBorderColor.ref.value,0),I.update(e.uBorderColor,e.uBorderColor.ref.value)),I.updateIfChanged(e.uOffsetX,t.offsetX),I.updateIfChanged(e.uOffsetY,t.offsetY),I.updateIfChanged(e.uOffsetZ,t.offsetZ),v.fromNormalizedArray(e.uBackgroundColor.ref.value,0)!==t.backgroundColor&&(v.toArrayNormalized(t.backgroundColor,e.uBackgroundColor.ref.value,0),I.update(e.uBackgroundColor,e.uBackgroundColor.ref.value)),I.updateIfChanged(e.uBackgroundOpacity,t.backgroundOpacity)}function d(e,t){let n=pf(e)*e.uSizeFactor.ref.value,r=Rf(e.aMapping.ref.value,e.aDepth.ref.value,t.charCount,n),i=V.expand(V(),t.boundingSphere,r),a=Gt(i,e.aTransform.ref.value,e.instanceCount.ref.value,0);V.equals(a,e.boundingSphere.ref.value)||I.update(e.boundingSphere,a),V.equals(i,e.invariantBoundingSphere.ref.value)||(I.update(e.invariantBoundingSphere,i),I.update(e.uInvariantBoundingSphere,H.fromSphere(e.uInvariantBoundingSphere.ref.value,i))),I.update(e.padding,r)}function f(e){let t=W.createRenderableState(e);return p(t,e),t}function p(e,t){W.updateRenderableState(e,t),e.pickable=!1,e.opaque=!1,e.writeDepth=!0}})(zf||={})})))()}function Vf(e,t,n){for(let n=0;n<e;++n){let e=n*8;t[e]=-1,t[e+1]=-1,t[e+2]=1,t[e+3]=-1,t[e+4]=-1,t[e+5]=1,t[e+6]=1,t[e+7]=1}for(let t=0;t<e;++t){let e=t*4,r=t*6;n[r]=e,n[r+1]=e+1,n[r+2]=e+2,n[r+3]=e+1,n[r+4]=e+3,n[r+5]=e+2}}var Hf,Uf,Wf,Gf,Kf,qf,Jf,Yf;function Xf(){return(Xf=e((()=>{ye(),Qf(),B(),Hf=R.add,Uf=R.add2,Wf=R.add3,Gf=h(),Kf=h(),qf=h(),(function(e){function t(e=2048,t=1024,n){let r=R.create(Float32Array,1,t,n?n.groupBuffer.ref.value:e),i=R.create(Float32Array,3,t,n?n.startBuffer.ref.value:e),a=R.create(Float32Array,3,t,n?n.endBuffer.ref.value:e),o=(e,t,n,o,s,c,l)=>{for(let u=0;u<4;++u)Wf(i,e,t,n),Wf(a,o,s,c),Hf(r,l)},s=(e,t,n)=>{for(let o=0;o<4;++o)Wf(i,e[0],e[1],e[2]),Wf(a,t[0],t[1],t[2]),Hf(r,n)},c=(e,t,n,r)=>{let i=h.distance(e,t),a=n%2!=0,s=Math.floor((n+1)/2),c=i/(n+.5);h.setMagnitude(qf,h.sub(qf,t,e),c),h.copy(Gf,e);for(let e=0;e<s;++e)h.add(Gf,Gf,qf),a&&e===s-1?h.copy(Kf,t):h.add(Kf,Gf,qf),o(Gf[0],Gf[1],Gf[2],Kf[0],Kf[1],Kf[2],r),h.add(Gf,Gf,qf)};return{add:o,addVec:s,addFixedCountDashes:c,addFixedLengthDashes:(e,t,n,r)=>{let i=h.distance(e,t);c(e,t,i/n,r)},addCage:(e,t,n)=>{let{vertices:r,edges:i}=t;for(let t=0,a=i.length;t<a;t+=2)h.fromArray(Gf,r,i[t]*3),h.fromArray(Kf,r,i[t+1]*3),h.transformMat4(Gf,Gf,e),h.transformMat4(Kf,Kf,e),o(Gf[0],Gf[1],Gf[2],Kf[0],Kf[1],Kf[2],n)},getLines:()=>{let e=r.elementCount/4,t=r.elementCount,o=R.compact(r,!0),s=R.compact(i,!0),c=R.compact(a,!0),l=n&&e<=n.lineCount&&n.stripCount.ref.value===0?n.mappingBuffer.ref.value:new Float32Array(e*8),u=n&&e<=n.lineCount&&n.stripCount.ref.value===0?n.indexBuffer.ref.value:new Uint32Array(e*6),d=n?n.stripBuffer.ref.value:new Uint32Array;return(!n||e>n.lineCount||n.stripCount.ref.value>0)&&Vf(e,l,u),Zf.create(l,u,o,s,c,d,e,t,0,n)}}}e.create=t})(Jf||={}),(function(e){function t(e=2048,t=1024,n){let r=R.create(Float32Array,1,t,n?n.groupBuffer.ref.value:e),i=R.create(Float32Array,3,t,n?n.startBuffer.ref.value:e),a=R.create(Float32Array,3,t,n?n.endBuffer.ref.value:e),o=R.create(Float32Array,2,t,n?n.mappingBuffer.ref.value:e),s=R.create(Uint32Array,3,t,n?n.indexBuffer.ref.value:e),c=R.create(Uint32Array,1,t,n?n.stripBuffer.ref.value:e),l=0,u=0,d=0,f=0,p=0,m=0,h=(e,t,n)=>{if(u===0){d=r.elementCount,f=e,p=t,m=n,u=1;return}let c=r.elementCount;u===1&&(Wf(i,f,p,m),Wf(a,e,t,n),Hf(r,l),Uf(o,-1,-1),Wf(i,f,p,m),Wf(a,e,t,n),Hf(r,l),Uf(o,1,-1)),Wf(i,f,p,m),Wf(a,e,t,n),Hf(r,l),Uf(o,-1,1),Wf(i,f,p,m),Wf(a,e,t,n),Hf(r,l),Uf(o,1,1);let h=u===1?d:c-2,g=u===1?c+2:c;Wf(s,h,h+1,g),Wf(s,h+1,g+1,g),f=e,p=t,m=n,u++};return{start:e=>{l=e,u=0,c.elementCount===0&&Hf(c,0)},add:(e,t,n)=>{h(e,t,n)},addVec:e=>{h(e[0],e[1],e[2])},end:()=>{u=0,Hf(c,r.elementCount)},getLines:()=>{let e=s.elementCount/2,t=r.elementCount,l=c.elementCount-1,u=R.compact(r,!0),d=R.compact(i,!0),f=R.compact(a,!0),p=R.compact(o,!0),m=R.compact(s,!0),h=R.compact(c,!0);return Zf.create(p,m,u,d,f,h,e,t,l,n)}}}e.create=t})(Yf||={})})))()}var Zf;function Qf(){return(Qf=e((()=>{N(),B(),Id(),Xd(),nc(),wf(),Ye(),Xf(),F(),K(),Fe(),Vt(),Rs(),Ks(),ye(),Qs(),fu(),yu(),Eu(),lf(),(function(e){function t(e,t,n,r,i,s,c,l,u,d){return d?o(e,t,n,r,i,s,c,l,u,d):a(e,t,n,r,i,s,c,l,u)}e.create=t;function n(e){return t(e?e.mappingBuffer.ref.value:new Float32Array,e?e.indexBuffer.ref.value:new Uint32Array,e?e.groupBuffer.ref.value:new Float32Array,e?e.startBuffer.ref.value:new Float32Array,e?e.endBuffer.ref.value:new Float32Array,e?e.stripBuffer.ref.value:new Uint32Array,0,0,0,e)}e.createEmpty=n;function r(e,t){let n=e.vertexBuffer.ref.value,r=e.indexBuffer.ref.value,i=e.groupBuffer.ref.value,a=Jf.create(e.triangleCount*3,e.triangleCount/10,t);for(let t=0,o=e.triangleCount*3;t<o;t+=3){let e=r[t],o=r[t+1],s=r[t+2],c=n[e*3],l=n[e*3+1],u=n[e*3+2],d=n[o*3],f=n[o*3+1],p=n[o*3+2],m=n[s*3],h=n[s*3+1],g=n[s*3+2];a.add(c,l,u,d,f,p,i[e]),a.add(c,l,u,m,h,g,i[e]),a.add(d,f,p,m,h,g,i[o])}return a.getLines()}e.fromMesh=r;function i(e){return ve([e.lineCount,e.vertexCount,e.mappingBuffer.ref.version,e.indexBuffer.ref.version,e.groupBuffer.ref.version,e.startBuffer.ref.version,e.endBuffer.ref.version,e.stripCount.ref.version,e.stripBuffer.ref.version])}function a(e,t,n,r,a,o,s,c,l){let u=V(),d,f=-1,p=-1,m={kind:`lines`,lineCount:s,vertexCount:c,mappingBuffer:I.create(e),indexBuffer:I.create(t),groupBuffer:I.create(n),startBuffer:I.create(r),endBuffer:I.create(a),stripCount:I.create(l),stripBuffer:I.create(o),get boundingSphere(){let e=i(m);if(e!==f){let t=Wt(m.startBuffer.ref.value,m.lineCount*4,4),n=Wt(m.endBuffer.ref.value,m.lineCount*4,4);V.expandBySphere(u,t,n),f=e}return u},get groupMapping(){return m.groupBuffer.ref.version!==p&&(d=kd(m.groupBuffer.ref.value,m.lineCount,4),p=m.groupBuffer.ref.version),d},setBoundingSphere(e){V.copy(u,e),f=i(m)},hasBoundingSphere(){return f===i(m)}};return m}function o(e,t,n,r,i,a,o,s,c,l){return(o>l.lineCount||c!==l.stripCount.ref.value||c>0)&&(I.update(l.mappingBuffer,e),I.update(l.indexBuffer,t)),l.lineCount=o,l.vertexCount=s,I.update(l.groupBuffer,n),I.update(l.startBuffer,r),I.update(l.endBuffer,i),I.updateIfChanged(l.stripCount,c),I.update(l.stripBuffer,a),l}function s(e,t){let n=e.startBuffer.ref.value;Td(t,n,0,e.vertexCount),I.update(e.startBuffer,n);let r=e.endBuffer.ref.value;Td(t,r,0,e.vertexCount),I.update(e.endBuffer,r)}e.transform=s;let c=e.Params={...W.Params,sizeFactor:L.Numeric(2,{min:0,max:10,step:.1}),lineSizeAttenuation:L.Boolean(!1),animation:af()};e.Utils={Params:c,createEmpty:n,createValues:u,createValuesSimple:d,updateValues:f,updateBoundingSphere:p,createRenderableState:W.createRenderableState,updateRenderableState:W.updateRenderableState,createPositionIterator:l};function l(e,t){let n=e.lineCount*4,r=t.instanceCount.ref.value,i=We(),a=i.position,o=e.startBuffer.ref.value,s=e.endBuffer.ref.value,c=t.aTransform.ref.value;return qe(n,r,2,(e,t)=>{let n=e%4==0?o:s;return t<0?h.fromArray(a,n,e*3):h.transformMat4Offset(a,n,c,0,e*3,t*16),i})}function u(e,t,n,r,i){let{instanceCount:a,groupCount:o}=n,s=l(e,t),c=Ld(n,s,r.color),u=ff(n,s,r.size),d=Mt(i.instanceGranularity,o,a)?ec(a,`instance`):ec(a*o,`groupInstance`),f=Is(),p=Ws(),m=_u(),h=uu(),g=Xs(),_=wu(),v={drawCount:e.lineCount*2*3,vertexCount:e.vertexCount,groupCount:o,instanceCount:a},y=V.clone(e.boundingSphere),b=Gt(y,t.aTransform.ref.value,a,0);return{dGeometryType:I.create(`lines`),aMapping:e.mappingBuffer,aGroup:e.groupBuffer,aStart:e.startBuffer,aEnd:e.endBuffer,elements:e.indexBuffer,boundingSphere:I.create(b),invariantBoundingSphere:I.create(y),uInvariantBoundingSphere:I.create(H.ofSphere(y)),...c,...u,...d,...f,...p,...m,...h,...g,..._,...t,...W.createValues(i,v),uSizeFactor:I.create(i.sizeFactor),dLineSizeAttenuation:I.create(i.lineSizeAttenuation),uDoubleSided:I.create(!0),dFlipSided:I.create(!1),...sf(i.animation),stripCount:e.stripCount,stripOffsets:e.stripBuffer}}function d(e,t,n,r,i){let a=W.createSimple(n,r,i),o={...L.getDefaultValues(c),...t};return u(e,a.transform,a.locationIterator,a.theme,o)}function f(e,t){W.updateValues(e,t),I.updateIfChanged(e.uSizeFactor,t.sizeFactor),I.updateIfChanged(e.dLineSizeAttenuation,t.lineSizeAttenuation),cf(e,t.animation)}function p(e,t){let n=V.clone(t.boundingSphere),r=Gt(n,e.aTransform.ref.value,e.instanceCount.ref.value,0);V.equals(r,e.boundingSphere.ref.value)||I.update(e.boundingSphere,r),V.equals(n,e.invariantBoundingSphere.ref.value)||(I.update(e.invariantBoundingSphere,n),I.update(e.uInvariantBoundingSphere,H.fromSphere(e.uInvariantBoundingSphere.ref.value,n)))}})(Zf||={})})))()}function $f(e,t){let n=t.length,r=ep(n/3);for(let i=0;i<n;i+=3)h.fromArray(np,e,t[i]*3),h.fromArray(rp,e,t[i+1]*3),h.fromArray(ip,e,t[i+2]*3),r.add(np,rp,ip);return r.getPrimitive()}function ep(e,t){t===void 0&&(t=e*3);let n=new Float32Array(t*3),r=new Float32Array(t*3),i=new Uint32Array(e*3),a=0,o=0;return{add:(e,t,s)=>{h.toArray(e,n,a),h.toArray(t,n,a+3),h.toArray(s,n,a+6),h.triangleNormal(ap,e,t,s);for(let e=0;e<3;++e)h.toArray(ap,r,a+3*e),i[o+e]=a/3+e;a+=9,o+=3},addQuad:(e,t,s,c)=>{h.toArray(e,n,a),h.toArray(t,n,a+3),h.toArray(s,n,a+6),h.toArray(c,n,a+9),h.triangleNormal(ap,e,t,s);for(let e=0;e<4;++e)h.toArray(ap,r,a+3*e);let l=a/3;i[o]=l,i[o+1]=l+1,i[o+2]=l+2,i[o+3]=l+2,i[o+4]=l+3,i[o+5]=l,a+=12,o+=6},getPrimitive:()=>({vertices:n,normals:r,indices:i})}}function tp(e,t){let{vertices:n,normals:r}=e,i=O.directionTransform(sp,t);for(let e=0,a=n.length;e<a;e+=3)h.transformMat4(op,h.fromArray(op,n,e),t),h.toArray(op,n,e),h.transformMat3(op,h.fromArray(op,r,e),i),h.toArray(op,r,e);return e}var np,rp,ip,ap,op,sp;function cp(){return(cp=e((()=>{B(),np=h(),rp=h(),ip=h(),ap=h(),op=h(),sp=O()})))()}function lp(e,t,n=-1){let r=new Float32Array(e*3),i=n===-1?e<=4?Math.sqrt(2)/2:.6:n,a=+!!t;for(let t=0,n=e;t<n;++t){let n=(t*2+a)/e*Math.PI;r[t*3]=Math.cos(n)*i,r[t*3+1]=Math.sin(n)*i,r[t*3+2]=0}return r}function up(){return(up=e((()=>{})))()}function dp(e,t){return{vertices:e,edges:t}}function fp(e){return{vertices:new Float32Array(e.vertices),edges:new Uint32Array(e.edges)}}function pp(e,t){let{vertices:n}=e;for(let e=0,r=n.length;e<r;e+=3)h.transformMat4(mp,h.fromArray(mp,n,e),t),h.toArray(mp,n,e);return e}var mp;function hp(){return(hp=e((()=>{B(),mp=h.zero()})))()}function gp(e){let t=ep(12,e?36:24);for(let n=0;n<4;++n){let r=(n+1)%4;h.set(bp,$[n*3],$[n*3+1],-.5),h.set(xp,$[r*3],$[r*3+1],-.5),h.set(Sp,$[r*3],$[r*3+1],.5),h.set(Cp,$[n*3],$[n*3+1],.5),e?n<2?t.add(bp,Sp,Cp):t.add(bp,xp,Cp):t.addQuad(bp,xp,Sp,Cp)}return h.set(bp,$[0],$[1],-.5),h.set(xp,$[3],$[4],-.5),h.set(Sp,$[6],$[7],-.5),h.set(Cp,$[9],$[10],-.5),e?t.add(Sp,xp,bp):t.addQuad(Cp,Sp,xp,bp),h.set(bp,$[0],$[1],.5),h.set(xp,$[3],$[4],.5),h.set(Sp,$[6],$[7],.5),h.set(Cp,$[9],$[10],.5),e?t.add(bp,Sp,Cp):t.addQuad(bp,xp,Sp,Cp),t.getPrimitive()}function _p(){return wp||=gp(!1),wp}function vp(){return Tp||=gp(!0),Tp}function yp(){return Ep||=dp([.5,.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,.5,.5,.5,-.5,.5,.5,-.5,-.5,.5,.5,-.5,.5],[0,4,1,5,2,6,3,7,0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4]),Ep}var bp,xp,Sp,Cp,$,wp,Tp,Ep;function Dp(){return(Dp=e((()=>{B(),cp(),hp(),bp=h(),xp=h(),Sp=h(),Cp=h(),$=lp(4,!0)})))()}function Op(e){return e.map(e=>({x:e[0],alpha:e[1]}))}function kp(e,t){let n=[{x:0,alpha:0},{x:0,alpha:0},...e,{x:1,alpha:0},{x:1,alpha:0}],r=t??new Uint8Array(jp);t&&r.fill(0);let i=0,a,o,s,c,l,u,d=e.length+1;for(let e=0;e<d;++e){a=n[e+1].x,o=n[e+2].x,s=n[e].alpha,c=n[e+1].alpha,l=n[e+2].alpha,u=n[e+3].alpha;let t=Math.round((o-a)*jp);for(let e=0;e<t;++e){let n=e/t;i<jp&&(r[i]=Math.max(0,D(s,c,l,u,n,.5)*255),++i)}}return r}function Ap(e,t){let n=t&&t.ref.value.height===1&&t.ref.value.array.length===jp?t.ref.value.array:new Uint8Array(jp);kp(e,n);let r={array:n,width:jp,height:1};return t?(I.update(t,r),t):I.create(r)}var jp;function Mp(){return(Mp=e((()=>{N(),jp=256})))()}function Np(e,t){return V.fromDimensionsAndTransform(V(),e,t)}var Pp,Fp;function Ip(){return(Ip=e((()=>{ye(),Ye(),K(),Ms(),Fe(),B(),N(),F(),Dp(),Vt(),Xd(),nc(),Rs(),Ks(),Mp(),Qs(),Be(),fu(),yu(),Eu(),Pp=_p(),(function(e){function t(e,t,n,a,o,s,c,l,u,d,f){return f?i(e,t,n,a,o,s,c,l,u,d,f):r(e,t,n,a,o,s,c,l,u,d)}e.create=t;function n(e){return ve([e.bboxSize.ref.version,e.gridDimension.ref.version,e.gridTexture.ref.version,e.transform.ref.version,e.gridStats.ref.version])}function r(e,t,r,i,a,o,s,c,l,u){let d=V(),f=-1,p=o.getWidth(),m=o.getHeight(),g=o.getDepth(),_={kind:`direct-volume`,gridDimension:I.create(t),gridTexture:I.create(o),gridTextureDim:I.create(h.create(p,m,g)),gridStats:I.create(H.create(s.min,s.max,s.mean,s.sigma)),bboxMin:I.create(e.min),bboxMax:I.create(e.max),bboxSize:I.create(h.sub(h(),e.max,e.min)),transform:I.create(r),cellDim:I.create(a),unitToCartn:I.create(i),cartnToUnit:I.create(E.invert(E(),i)),get boundingSphere(){let e=n(_);if(e!==f){let t=Np(_.gridDimension.ref.value,_.transform.ref.value);V.copy(d,t),f=e}return d},packedGroup:I.create(c),axisOrder:I.create(l),dataType:I.create(u),setBoundingSphere(e){V.copy(d,e),f=n(_)},hasBoundingSphere(){return f===n(_)},meta:{}};return _}function i(e,t,n,r,i,a,o,s,c,l,u){let d=a.getWidth(),f=a.getHeight(),p=a.getDepth();return I.update(u.gridDimension,t),I.update(u.gridTexture,a),I.update(u.gridTextureDim,h.set(u.gridTextureDim.ref.value,d,f,p)),I.update(u.gridStats,H.set(u.gridStats.ref.value,o.min,o.max,o.mean,o.sigma)),I.update(u.bboxMin,e.min),I.update(u.bboxMax,e.max),I.update(u.bboxSize,h.sub(u.bboxSize.ref.value,e.max,e.min)),I.update(u.transform,n),I.update(u.cellDim,i),I.update(u.unitToCartn,r),I.update(u.cartnToUnit,E.invert(E(),r)),I.updateIfChanged(u.packedGroup,s),I.updateIfChanged(u.axisOrder,h.fromArray(u.axisOrder.ref.value,c,0)),I.updateIfChanged(u.dataType,l),u}function a(e){let n=z(),r=h(),i=E.identity(),a=E.identity(),o=h(),s=ks(),c=Re.One.stats;return t(n,r,i,a,o,s,c,!1,h.create(0,1,2),`byte`,e)}e.createEmpty=a;let o=e.Params={...W.Params,ignoreLight:L.Boolean(!1,W.ShadingCategory),celShaded:L.Boolean(!1,W.ShadingCategory),xrayShaded:L.Select(!1,[[!1,`Off`],[!0,`On`],[`inverted`,`Inverted`]],W.ShadingCategory),controlPoints:L.LineGraph([A.create(.19,0),A.create(.2,.05),A.create(.25,.05),A.create(.26,0),A.create(.79,0),A.create(.8,.05),A.create(.85,.05),A.create(.86,0)],{isEssential:!0,yAxis:{scale:`log`}}),stepsPerCell:L.Numeric(3,{min:1,max:10,step:1}),jumpLength:L.Numeric(0,{min:0,max:20,step:.1})};e.Utils={Params:o,createEmpty:a,createValues:d,createValuesSimple:f,updateValues:p,updateBoundingSphere:m,createRenderableState:g,updateRenderableState:_,createPositionIterator:s};function s(e,t){let n=e.transform.ref.value,[r,i,a]=e.gridDimension.ref.value,o=r*i*a,s=t.instanceCount.ref.value,c=We(),l=c.position,u=t.aTransform.ref.value;return qe(o,s,1,(e,t)=>{let r=Math.floor(e/a);return l[0]=Math.floor(r/i),l[1]=r%i,l[2]=e%a,h.transformMat4(l,l,n),t>=0&&h.transformMat4Offset(l,l,u,0,0,t*16),c})}function c(e,t){return Math.ceil(h.magnitude(e)*t)}function l(e,t){return Math.min(...e)*(1/t)}function u(e){return 1/e}function d(e,t,n,r,i){let{gridTexture:a,gridTextureDim:o,gridStats:d}=e,{bboxSize:f,bboxMin:p,bboxMax:m,gridDimension:h,transform:g}=e,{instanceCount:_,groupCount:v}=n,y=Ld(n,s(e,t),r.color),b=Mt(i.instanceGranularity,v,_)?ec(_,`instance`):ec(_*v,`groupInstance`),x=Is(),S=Ws(),C=_u(),w=uu(),T=Xs(),E=wu(),[D,O,k]=h.ref.value,A={drawCount:Pp.indices.length,vertexCount:D*O*k,groupCount:v,instanceCount:_},j=V.clone(e.boundingSphere),ee=Gt(j,t.aTransform.ref.value,_,0),M=Ap(Op(i.controlPoints));return{dGeometryType:I.create(`directVolume`),...y,...b,...x,...S,...C,...w,...T,...E,...t,...W.createValues(i,A),aPosition:I.create(Pp.vertices),elements:I.create(Pp.indices),boundingSphere:I.create(ee),invariantBoundingSphere:I.create(j),uInvariantBoundingSphere:I.create(H.ofSphere(j)),uBboxMin:p,uBboxMax:m,uBboxSize:f,uMaxSteps:I.create(c(h.ref.value,i.stepsPerCell)),uStepScale:I.create(l(e.cellDim.ref.value,i.stepsPerCell)),uJumpLength:I.create(i.jumpLength),uTransform:g,uGridDim:h,tTransferTex:M,uTransferScale:I.create(u(i.stepsPerCell)),dGridTexType:I.create(a.ref.value.getDepth()>0?`3d`:`2d`),uGridTexDim:o,tGridTex:a,uGridStats:d,uCellDim:e.cellDim,uCartnToUnit:e.cartnToUnit,uUnitToCartn:e.unitToCartn,dPackedGroup:e.packedGroup,dAxisOrder:I.create(e.axisOrder.ref.value.join(``)),dIgnoreLight:I.create(i.ignoreLight),dCelShaded:I.create(i.celShaded),dXrayShaded:I.create(i.xrayShaded===`inverted`?`inverted`:i.xrayShaded===!0?`on`:`off`),meta:I.create(e.meta)}}function f(e,t,n,r,i){let a=W.createSimple(n,r,i),s={...L.getDefaultValues(o),...t};return d(e,a.transform,a.locationIterator,a.theme,s)}function p(e,t){W.updateValues(e,t),I.updateIfChanged(e.dIgnoreLight,t.ignoreLight),I.updateIfChanged(e.dCelShaded,t.celShaded),I.updateIfChanged(e.dXrayShaded,t.xrayShaded===`inverted`?`inverted`:t.xrayShaded===!0?`on`:`off`),Ap(Op(t.controlPoints),e.tTransferTex),I.updateIfChanged(e.uMaxSteps,c(e.uGridDim.ref.value,t.stepsPerCell)),I.updateIfChanged(e.uStepScale,l(e.uCellDim.ref.value,t.stepsPerCell)),I.updateIfChanged(e.uTransferScale,u(t.stepsPerCell)),I.updateIfChanged(e.uJumpLength,t.jumpLength)}function m(e,t){let n=V.clone(t.boundingSphere),r=Gt(n,e.aTransform.ref.value,e.instanceCount.ref.value,0);V.equals(r,e.boundingSphere.ref.value)||I.update(e.boundingSphere,r),V.equals(n,e.invariantBoundingSphere.ref.value)||(I.update(e.invariantBoundingSphere,n),I.update(e.uInvariantBoundingSphere,H.fromSphere(e.uInvariantBoundingSphere.ref.value,n)))}function g(e){let t=W.createRenderableState(e);return t.opaque=!1,t.writeDepth=!1,t}function _(e,t){W.updateRenderableState(e,t),e.opaque=!1,e.writeDepth=!1}})(Fp||={})})))()}var Lp;function Rp(){return(Rp=e((()=>{N(),F(),Ye(),Xd(),nc(),K(),Fe(),wf(),Vt(),Rs(),Ks(),ye(),Id(),Qs(),B(),fu(),yu(),Eu(),rf(),lf(),(function(e){function t(e,t,n,r){return r?a(e,t,n,r):i(e,t,n)}e.create=t;function n(e){return t(e?e.centerBuffer.ref.value:new Float32Array,e?e.groupBuffer.ref.value:new Float32Array,0,e)}e.createEmpty=n;function r(e){return ve([e.sphereCount,e.centerBuffer.ref.version,e.groupBuffer.ref.version])}function i(e,t,n){let i=V(),a,s=-1,u=-1,f=I.create(G(1,4,Float32Array)),p=I.create(A.create(0,0)),m=I.create([]),h=I.create(0),g={kind:`spheres`,sphereCount:n,centerBuffer:I.create(e),groupBuffer:I.create(t),get boundingSphere(){let e=r(g);if(e!==s){let t=Wt(g.centerBuffer.ref.value,g.sphereCount,1);V.copy(i,t),s=e}return i},get groupMapping(){return g.groupBuffer.ref.version!==u&&(a=kd(g.groupBuffer.ref.value,g.sphereCount),u=g.groupBuffer.ref.version),a},setBoundingSphere(e){V.copy(i,e),s=r(g)},hasBoundingSphere(){return s===r(g)},shaderData:{positionGroup:f,texDim:p,lodLevels:m,sizeFactor:h,update(e){let t=e?.lodLevels??l(m.ref.value),n=e?.sizeFactor??h.ref.value,r=d(t,n),i=G(g.sphereCount,4,Float32Array,f.ref.value.array),a=o(i,g.centerBuffer.ref.value,g.groupBuffer.ref.value,g.sphereCount,r),s=a?c(t,n,a,g.sphereCount):[];I.update(f,i),I.update(p,A.set(p.ref.value,i.width,i.height)),I.update(m,s),I.update(h,n)}}};return g.shaderData.update(),g}function a(e,t,n,r){return r.sphereCount=n,I.update(r.centerBuffer,e),I.update(r.groupBuffer,t),r.shaderData.update(),r}function o(e,t,n,r,i){let{array:a}=e;if(i.length===0){for(let e=0;e<r;++e)a[e*4+0]=t[e*3+0],a[e*4+1]=t[e*3+1],a[e*4+2]=t[e*3+2],a[e*4+3]=n[e];return}let o=[0],s=0;for(let e=0,c=i.length;e<c;++e){let c=i[e];for(let o=0;o<r;++o){let r=!1;for(let t=0;t<e;++t)if(o%i[t]===0){r=!0;break}!r&&o%c===0&&(a[s*4+0]=t[o*3+0],a[s*4+1]=t[o*3+1],a[s*4+2]=t[o*3+2],a[s*4+3]=n[o],s+=1)}o.push(s*6)}return o}function s(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;++n)if(e[n].maxDistance!==t[n].maxDistance||e[n].minDistance!==t[n].minDistance||e[n].overlap!==t[n].overlap||e[n].stride!==t[n].stride||e[n].scaleBias!==t[n].scaleBias)return!1;return!0}function c(e,t,n,r){return e.map((e,i)=>{let a=u(e,t);return[e.minDistance,e.maxDistance,e.overlap,n[n.length-1-i],Math.min(r,a)**(1/e.scaleBias),e.stride,e.scaleBias]})}function l(e){return e.map(e=>({minDistance:e[0],maxDistance:e[1],overlap:e[2],stride:e[5],scaleBias:e[6]}))}function u(e,t){return Math.max(1,Math.round(e.stride/t**+e.scaleBias))}function d(e,t){return e.map(e=>u(e,t)).reverse()}let f=e.LodLevelsPresets={performance:[{minDistance:1,maxDistance:300,overlap:0,stride:1,scaleBias:1},{minDistance:300,maxDistance:2e3,overlap:0,stride:40,scaleBias:3},{minDistance:2e3,maxDistance:6e3,overlap:0,stride:150,scaleBias:3},{minDistance:6e3,maxDistance:1e7,overlap:0,stride:300,scaleBias:2.5}],balanced:[{minDistance:1,maxDistance:500,overlap:0,stride:1,scaleBias:1},{minDistance:500,maxDistance:2e3,overlap:0,stride:15,scaleBias:3},{minDistance:2e3,maxDistance:6e3,overlap:0,stride:70,scaleBias:2.7},{minDistance:6e3,maxDistance:1e7,overlap:0,stride:200,scaleBias:2.5}],quality:[{minDistance:1,maxDistance:1e3,overlap:0,stride:1,scaleBias:1},{minDistance:1e3,maxDistance:4e3,overlap:0,stride:10,scaleBias:3},{minDistance:4e3,maxDistance:1e4,overlap:0,stride:50,scaleBias:2.7},{minDistance:1e4,maxDistance:1e7,overlap:0,stride:200,scaleBias:2.3}],ultra:[{minDistance:1,maxDistance:5e3,overlap:0,stride:1,scaleBias:1},{minDistance:5e3,maxDistance:1e4,overlap:0,stride:10,scaleBias:3},{minDistance:1e4,maxDistance:3e4,overlap:0,stride:50,scaleBias:2.5},{minDistance:3e4,maxDistance:1e7,overlap:0,stride:200,scaleBias:2}]},p=e.Params={...W.Params,sizeFactor:L.Numeric(1,{min:0,max:10,step:.1}),doubleSided:L.Boolean(!1,W.CustomQualityParamInfo),ignoreLight:L.Boolean(!1,W.ShadingCategory),celShaded:L.Boolean(!1,W.ShadingCategory),xrayShaded:L.Select(!1,[[!1,`Off`],[!0,`On`],[`inverted`,`Inverted`]],W.ShadingCategory),transparentBackfaces:L.Select(`off`,L.arrayToOptions([`off`,`on`,`opaque`]),W.ShadingCategory),solidInterior:L.Boolean(!0,W.ShadingCategory),clipPrimitive:L.Boolean(!1,{...W.ShadingCategory,description:`Clip whole sphere instead of cutting it.`}),approximate:L.Boolean(!1,{...W.ShadingCategory,description:`Faster rendering, but has artifacts.`}),alphaThickness:L.Numeric(0,{min:0,max:20,step:1},{...W.ShadingCategory,description:`If not zero, adjusts alpha for radius.`}),bumpFrequency:L.Numeric(0,{min:0,max:10,step:.1},W.ShadingCategory),bumpAmplitude:L.Numeric(1,{min:0,max:5,step:.1},W.ShadingCategory),interior:Zd(),animation:af(),lodLevels:L.ObjectList({minDistance:L.Numeric(0),maxDistance:L.Numeric(0),overlap:L.Numeric(0),stride:L.Numeric(0),scaleBias:L.Numeric(3,{min:.1,max:10,step:.1})},e=>`${e.stride}`,{...W.CullingLodCategory,defaultValue:[],presets:Object.entries(f).map(([e,t])=>[t,e])})};e.Utils={Params:p,createEmpty:n,createValues:g,createValuesSimple:_,updateValues:v,updateBoundingSphere:y,createRenderableState:b,updateRenderableState:x,createPositionIterator:m};function m(e,t){let n=e.sphereCount,r=t.instanceCount.ref.value,i=We(),a=i.position,o=e.centerBuffer.ref.value,s=t.aTransform.ref.value;return qe(n,r,1,(e,t)=>(t<0?h.fromArray(a,o,e*3):h.transformMat4Offset(a,o,s,0,e*3,t*16),i))}function g(e,t,n,r,i){let{instanceCount:a,groupCount:o}=n,s=m(e,t),c=Ld(n,s,r.color),l=ff(n,s,r.size),u=Mt(i.instanceGranularity,o,a)?ec(a,`instance`):ec(a*o,`groupInstance`),d=Is(),f=Ws(),p=_u(),h=uu(),g=Xs(),_=wu(),v={drawCount:e.sphereCount*2*3,vertexCount:e.sphereCount*6,groupCount:o,instanceCount:a},y=e.boundingSphere.radius?pf(l)*i.sizeFactor:0,b=V.expand(V(),e.boundingSphere,y),x=Gt(b,t.aTransform.ref.value,a,0);return e.shaderData.update({lodLevels:i.lodLevels,sizeFactor:i.sizeFactor}),{dGeometryType:I.create(`spheres`),uTexDim:e.shaderData.texDim,tPositionGroup:e.shaderData.positionGroup,boundingSphere:I.create(x),invariantBoundingSphere:I.create(b),uInvariantBoundingSphere:I.create(H.ofSphere(b)),...c,...l,...u,...d,...f,...p,...h,...g,..._,...t,padding:I.create(y),...W.createValues(i,v),uSizeFactor:e.shaderData.sizeFactor,uDoubleSided:I.create(i.doubleSided),dIgnoreLight:I.create(i.ignoreLight),dCelShaded:I.create(i.celShaded),dXrayShaded:I.create(i.xrayShaded===`inverted`?`inverted`:i.xrayShaded===!0?`on`:`off`),dTransparentBackfaces:I.create(i.transparentBackfaces),dSolidInterior:I.create(i.solidInterior),dClipPrimitive:I.create(i.clipPrimitive),dApproximate:I.create(i.approximate),uAlphaThickness:I.create(i.alphaThickness),uBumpFrequency:I.create(i.bumpFrequency),uBumpAmplitude:I.create(i.bumpAmplitude),lodLevels:e.shaderData.lodLevels,centerBuffer:e.centerBuffer,groupBuffer:e.groupBuffer,...tf(i.interior),...sf(i.animation)}}function _(e,t,n,r,i){let a=W.createSimple(n,r,i),o={...L.getDefaultValues(p),...t};return g(e,a.transform,a.locationIterator,a.theme,o)}function v(e,t){let n=e.uSizeFactor.ref.value;W.updateValues(e,t),I.updateIfChanged(e.uSizeFactor,t.sizeFactor),I.updateIfChanged(e.uDoubleSided,t.doubleSided),I.updateIfChanged(e.dIgnoreLight,t.ignoreLight),I.updateIfChanged(e.dCelShaded,t.celShaded),I.updateIfChanged(e.dXrayShaded,t.xrayShaded===`inverted`?`inverted`:t.xrayShaded===!0?`on`:`off`),I.updateIfChanged(e.dTransparentBackfaces,t.transparentBackfaces),I.updateIfChanged(e.dSolidInterior,t.solidInterior),I.updateIfChanged(e.dClipPrimitive,t.clipPrimitive),I.updateIfChanged(e.dApproximate,t.approximate),I.updateIfChanged(e.uAlphaThickness,t.alphaThickness),I.updateIfChanged(e.uBumpFrequency,t.bumpFrequency),I.updateIfChanged(e.uBumpAmplitude,t.bumpAmplitude),nf(e,t.interior),cf(e,t.animation);let r=l(e.lodLevels.ref.value);if(!s(t.lodLevels,r)||t.sizeFactor!==n){let n=e.uVertexCount.ref.value/6,r=d(t.lodLevels,t.sizeFactor),i=o(e.tPositionGroup.ref.value,e.centerBuffer.ref.value,e.groupBuffer.ref.value,n,r),a=i?c(t.lodLevels,t.sizeFactor,i,n):[];I.update(e.tPositionGroup,e.tPositionGroup.ref.value),I.update(e.lodLevels,a)}}function y(e,t){let n=t.boundingSphere.radius?pf(e)*e.uSizeFactor.ref.value:0,r=V.expand(V(),t.boundingSphere,n),i=Gt(r,e.aTransform.ref.value,e.instanceCount.ref.value,0);V.equals(i,e.boundingSphere.ref.value)||I.update(e.boundingSphere,i),V.equals(r,e.invariantBoundingSphere.ref.value)||(I.update(e.invariantBoundingSphere,r),I.update(e.uInvariantBoundingSphere,H.fromSphere(e.uInvariantBoundingSphere.ref.value,r))),I.update(e.padding,n)}function b(e){let t=W.createRenderableState(e);return x(t,e),t}function x(e,t){W.updateRenderableState(e,t),e.opaque=e.opaque&&!t.xrayShaded,e.writeDepth=e.opaque}})(Lp||={})})))()}var zp;function Bp(){return(Bp=e((()=>{N(),Fe(),F(),Ye(),Xd(),nc(),Vt(),Rs(),Ks(),K(),Ms(),B(),Qs(),Ue(),fu(),yu(),Eu(),rf(),lf(),(function(e){class t{constructor(){this.index=0,this.textures=[]}get(){return this.textures[this.index]}set(e,t,n){this.textures[this.index]=Object.assign(this.textures[this.index]||{},{vertex:e,group:t,normal:n}),this.index=(this.index+1)%2}destroy(){for(let e of this.textures)e.vertex.destroy(),e.group.destroy(),e.normal.destroy()}}e.DoubleBuffer=t;function n(e,n,r,i,a,o,s){let c=r.getWidth(),l=r.getHeight();return s?(s.vertexCount=e,s.groupCount=n,I.update(s.geoTextureDim,A.set(s.geoTextureDim.ref.value,c,l)),I.update(s.vertexTexture,r),I.update(s.groupTexture,i),I.update(s.normalTexture,a),s.doubleBuffer.set(r,i,a),V.copy(s.boundingSphere,o),s):{kind:`texture-mesh`,vertexCount:e,groupCount:n,geoTextureDim:I.create(A.create(c,l)),vertexTexture:I.create(r),groupTexture:I.create(i),normalTexture:I.create(a),varyingGroup:I.create(!1),doubleBuffer:new t,boundingSphere:V.clone(o),meta:{}}}e.create=n;function r(e){return n(0,0,e?e.vertexTexture.ref.value:ks(),e?e.groupTexture.ref.value:ks(),e?e.normalTexture.ref.value:ks(),e?e.boundingSphere:V(),e)}e.createEmpty=r;let i=e.Params={...W.Params,doubleSided:L.Boolean(!1,W.CustomQualityParamInfo),flipSided:L.Boolean(!1,W.ShadingCategory),flatShaded:L.Boolean(!1,W.ShadingCategory),ignoreLight:L.Boolean(!1,W.ShadingCategory),celShaded:L.Boolean(!1,W.ShadingCategory),xrayShaded:L.Select(!1,[[!1,`Off`],[!0,`On`],[`inverted`,`Inverted`]],W.ShadingCategory),transparentBackfaces:L.Select(`off`,L.arrayToOptions([`off`,`on`,`opaque`]),W.ShadingCategory),solidInterior:L.Boolean(!1,{...W.ShadingCategory,description:`Render a solid cap where the camera near plane or a clip object cuts a closed surface`}),bumpFrequency:L.Numeric(0,{min:0,max:10,step:.1},W.ShadingCategory),bumpAmplitude:L.Numeric(1,{min:0,max:5,step:.1},W.ShadingCategory),interior:Zd(),animation:af()},a=e.Utils={Params:i,createEmpty:r,createValues:c,createValuesSimple:l,updateValues:u,updateBoundingSphere:d,createRenderableState:f,updateRenderableState:p,createPositionIterator:s},o=`texture-mesh`;function s(e,t){let n=e.meta.webgl;if(!n)return qe(1,1,1,()=>He);n.namedFramebuffers[o]||(n.namedFramebuffers[o]=n.resources.framebuffer());let r=n.namedFramebuffers[o],[i,a]=e.geoTextureDim.ref.value,s,c=()=>{if(!s){let t=new Float32Array(i*a*4);r.bind(),e.vertexTexture.ref.value.attachFramebuffer(r,0),n.readPixels(0,0,i,a,t);let o=new Float32Array(i*a*4);r.bind(),e.normalTexture.ref.value.attachFramebuffer(r,0),n.readPixels(0,0,i,a,o),s={vertices:t,normals:o}}return s},l=e.vertexCount,u=t.instanceCount.ref.value,d=We(),f=d.position,p=d.normal,m=t.aTransform.ref.value;return qe(l,u,1,(e,t)=>{let{vertices:n,normals:r}=c();return t<0?(h.fromArray(f,n,e*4),h.fromArray(p,r,e*4)):(h.transformMat4Offset(f,n,m,0,e*4,t*16),h.transformDirectionOffset(p,r,m,0,e*4,t*16)),d})}function c(e,t,n,r,i){let{instanceCount:o,groupCount:s}=n,c=Ld(n,a.createPositionIterator(e,t),r.color),l=Mt(i.instanceGranularity,s,o)?ec(o,`instance`):ec(o*s,`groupInstance`),u=Is(),d=Ws(),f=_u(),p=uu(),m=Xs(),h=wu(),g={drawCount:e.vertexCount,vertexCount:e.vertexCount,groupCount:s,instanceCount:o},_=V.clone(e.boundingSphere),v=Gt(_,t.aTransform.ref.value,o,0);return{dGeometryType:I.create(`textureMesh`),uGeoTexDim:e.geoTextureDim,tPosition:e.vertexTexture,tGroup:e.groupTexture,tNormal:e.normalTexture,dVaryingGroup:e.varyingGroup,boundingSphere:I.create(v),invariantBoundingSphere:I.create(_),uInvariantBoundingSphere:I.create(H.ofSphere(_)),...c,...l,...u,...d,...f,...p,...m,...h,...t,...W.createValues(i,g),uDoubleSided:I.create(i.doubleSided),dFlatShaded:I.create(i.flatShaded),dFlipSided:I.create(i.flipSided),dIgnoreLight:I.create(i.ignoreLight),dCelShaded:I.create(i.celShaded),dXrayShaded:I.create(i.xrayShaded===`inverted`?`inverted`:i.xrayShaded===!0?`on`:`off`),dTransparentBackfaces:I.create(i.transparentBackfaces),dSolidInterior:I.create(i.solidInterior),uBumpFrequency:I.create(i.bumpFrequency),uBumpAmplitude:I.create(i.bumpAmplitude),meta:I.create(e.meta),...tf(i.interior),...sf(i.animation)}}function l(e,t,n,r,a){let o=W.createSimple(n,r,a),s={...L.getDefaultValues(i),...t};return c(e,o.transform,o.locationIterator,o.theme,s)}function u(e,t){W.updateValues(e,t),I.updateIfChanged(e.uDoubleSided,t.doubleSided),I.updateIfChanged(e.dFlatShaded,t.flatShaded),I.updateIfChanged(e.dFlipSided,t.flipSided),I.updateIfChanged(e.dIgnoreLight,t.ignoreLight),I.updateIfChanged(e.dCelShaded,t.celShaded),I.updateIfChanged(e.dXrayShaded,t.xrayShaded===`inverted`?`inverted`:t.xrayShaded===!0?`on`:`off`),I.updateIfChanged(e.dTransparentBackfaces,t.transparentBackfaces),I.updateIfChanged(e.dSolidInterior,t.solidInterior),I.updateIfChanged(e.uBumpFrequency,t.bumpFrequency),I.updateIfChanged(e.uBumpAmplitude,t.bumpAmplitude),nf(e,t.interior),cf(e,t.animation)}function d(e,t){let n=V.clone(t.boundingSphere),r=Gt(n,e.aTransform.ref.value,e.instanceCount.ref.value,0);V.equals(r,e.boundingSphere.ref.value)||I.update(e.boundingSphere,r),V.equals(n,e.invariantBoundingSphere.ref.value)||(I.update(e.invariantBoundingSphere,n),I.update(e.uInvariantBoundingSphere,H.fromSphere(e.uInvariantBoundingSphere.ref.value,n)))}function f(e){let t=W.createRenderableState(e);return p(t,e),t}function p(e,t){W.updateRenderableState(e,t),e.opaque=e.opaque&&!t.xrayShaded,e.writeDepth=e.opaque}})(zp||={})})))()}function Vp(e){let t=h(),n=[];for(let r=0,i=e.length;r<i;r+=3){let i=h.fromArray(h(),e,r);n.push(i),h.add(t,t,i)}h.scale(t,t,1/(e.length/3));let r=0;for(let e of n){let n=h.distance(t,e);n>r&&(r=n)}let i=V.create(t,r);return V.setExtrema(i,n),i}var Hp,Up,Wp,Gp;function Kp(){return(Kp=e((()=>{ye(),Ye(),K(),Fe(),B(),N(),F(),Vt(),Xd(),nc(),Rs(),Ks(),T(),Qs(),Ue(),ou(),fu(),yu(),Eu(),Hp=new Uint32Array([0,1,2,1,3,2]),Up=new Float32Array([0,1,0,0,1,1,1,0]),Wp={nearest:`Nearest`,catmulrom:`Catmulrom (Cubic)`,mitchell:`Mitchell (Cubic)`,bspline:`B-Spline (Cubic)`},Object.keys(Wp),(function(e){function t(){return{type:0,center:h(),rotation:_(),scale:h(),transform:E()}}e.createEmptyTrim=t;function n(e,t,n,r,o,s,c){return c?a(e,t,n,r,o,s,c):i(e,t,n,r,o,s)}e.create=n;function r(e){return ve([e.cornerBuffer.ref.version])}function i(e,t,n,i,a,o){let s=V(),c=-1,l=e.width,u=e.height,d={kind:`image`,imageTexture:I.create(e),imageTextureDim:I.create(A.create(l,u)),cornerBuffer:I.create(t),groupTexture:I.create(n),valueTexture:I.create(i),trimType:I.create(a.type),trimCenter:I.create(a.center),trimRotation:I.create(a.rotation),trimScale:I.create(a.scale),trimTransform:I.create(a.transform),isoLevel:I.create(o),get boundingSphere(){let e=r(d);if(e!==c){let t=Vp(d.cornerBuffer.ref.value);V.copy(s,t),c=e}return s},setBoundingSphere(e){V.copy(s,e),c=r(d)},hasBoundingSphere(){return c===r(d)},meta:{}};return d}function a(e,t,n,r,i,a,o){let s=e.width,c=e.height;return I.update(o.imageTexture,e),I.update(o.imageTextureDim,A.set(o.imageTextureDim.ref.value,s,c)),I.update(o.cornerBuffer,t),I.update(o.groupTexture,n),I.update(o.valueTexture,r),I.updateIfChanged(o.trimType,i.type),I.update(o.trimCenter,h.copy(o.trimCenter.ref.value,i.center)),I.update(o.trimRotation,_.copy(o.trimRotation.ref.value,i.rotation)),I.update(o.trimScale,h.copy(o.trimScale.ref.value,i.scale)),I.update(o.trimTransform,E.copy(o.trimTransform.ref.value,i.transform)),I.updateIfChanged(o.isoLevel,a),o}function o(e){return n(G(0,4,Uint8Array),e?e.cornerBuffer.ref.value:new Float32Array(24),G(0,4,Uint8Array),G(0,1,Float32Array),t(),-1,e)}e.createEmpty=o;let s=e.Params={...W.Params,interpolation:L.Select(`bspline`,L.objectToOptions(Wp))};e.Utils={Params:s,createEmpty:o,createValues:l,createValuesSimple:u,updateValues:d,updateBoundingSphere:f,createRenderableState:p,updateRenderableState:m,createPositionIterator:c};function c(e,t){return qe(1,1,1,()=>He)}function l(e,t,n,r,i){let{instanceCount:a,groupCount:o}=n,s=Ld(n,c(e,t),r.color),l=Mt(i.instanceGranularity,o,a)?ec(a,`instance`):ec(a*o,`groupInstance`),u=Is(),d=Ws(),f=_u(),p=uu(),m=Xs(),h=wu(),g={drawCount:Hp.length,vertexCount:Ql.length/3,groupCount:o,instanceCount:a},_=V.clone(e.boundingSphere),v=Gt(_,t.aTransform.ref.value,a,0);return{dGeometryType:I.create(`image`),...s,...l,...u,...d,...f,...p,...m,...h,...t,...W.createValues(i,g),aPosition:e.cornerBuffer,aUv:I.create(Up),elements:I.create(Hp),aGroup:I.create(ee(new Float32Array(4))),boundingSphere:I.create(v),invariantBoundingSphere:I.create(_),uInvariantBoundingSphere:I.create(H.ofSphere(_)),dInterpolation:I.create(i.interpolation),uImageTexDim:e.imageTextureDim,tImageTex:e.imageTexture,tGroupTex:e.groupTexture,tValueTex:e.valueTexture,uTrimType:e.trimType,uTrimCenter:e.trimCenter,uTrimRotation:e.trimRotation,uTrimScale:e.trimScale,uTrimTransform:e.trimTransform,uIsoLevel:e.isoLevel}}function u(e,t,n,r,i){let a=W.createSimple(n,r,i),o={...L.getDefaultValues(s),...t};return l(e,a.transform,a.locationIterator,a.theme,o)}function d(e,t){W.updateValues(e,t),I.updateIfChanged(e.dInterpolation,t.interpolation)}function f(e,t){let n=V.clone(t.boundingSphere),r=Gt(n,e.aTransform.ref.value,e.instanceCount.ref.value,0);V.equals(r,e.boundingSphere.ref.value)||I.update(e.boundingSphere,r),V.equals(n,e.invariantBoundingSphere.ref.value)||(I.update(e.invariantBoundingSphere,n),I.update(e.uInvariantBoundingSphere,H.fromSphere(e.uInvariantBoundingSphere.ref.value,n)))}function p(e){let t=W.createRenderableState(e);return t.opaque=!1,t}function m(e,t){W.updateRenderableState(e,t),e.opaque=!1}})(Gp||={})})))()}var qp;function Jp(){return(Jp=e((()=>{N(),B(),Id(),Xd(),nc(),wf(),Ye(),F(),K(),Fe(),Vt(),Rs(),Ks(),ye(),Qs(),fu(),yu(),Eu(),rf(),lf(),(function(e){function t(e,t,n,r,o,s,c,l,u,d){return d?a(e,t,n,r,o,s,c,l,u,d):i(e,t,n,r,o,s,c,l,u)}e.create=t;function n(e){return t(e?e.mappingBuffer.ref.value:new Float32Array,e?e.indexBuffer.ref.value:new Uint32Array,e?e.groupBuffer.ref.value:new Float32Array,e?e.startBuffer.ref.value:new Float32Array,e?e.endBuffer.ref.value:new Float32Array,e?e.scaleBuffer.ref.value:new Float32Array,e?e.capBuffer.ref.value:new Float32Array,e?e.colorModeBuffer.ref.value:new Float32Array,0,e)}e.createEmpty=n;function r(e){return ve([e.cylinderCount,e.mappingBuffer.ref.version,e.indexBuffer.ref.version,e.groupBuffer.ref.version,e.startBuffer.ref.version,e.endBuffer.ref.version,e.scaleBuffer.ref.version,e.capBuffer.ref.version,e.colorModeBuffer.ref.version])}function i(e,t,n,i,a,o,s,c,l){let u=V(),d,f=-1,p=-1,m={kind:`cylinders`,cylinderCount:l,mappingBuffer:I.create(e),indexBuffer:I.create(t),groupBuffer:I.create(n),startBuffer:I.create(i),endBuffer:I.create(a),scaleBuffer:I.create(o),capBuffer:I.create(s),colorModeBuffer:I.create(c),get boundingSphere(){let e=r(m);if(e!==f){let t=Wt(m.startBuffer.ref.value,m.cylinderCount*6,6),n=Wt(m.endBuffer.ref.value,m.cylinderCount*6,6);V.expandBySphere(u,t,n),f=e}return u},get groupMapping(){return m.groupBuffer.ref.version!==p&&(d=kd(m.groupBuffer.ref.value,m.cylinderCount,6),p=m.groupBuffer.ref.version),d},setBoundingSphere(e){V.copy(u,e),f=r(m)},hasBoundingSphere(){return f===r(m)}};return m}function a(e,t,n,r,i,a,o,s,c,l){return c>l.cylinderCount&&(I.update(l.mappingBuffer,e),I.update(l.indexBuffer,t)),l.cylinderCount=c,I.update(l.groupBuffer,n),I.update(l.startBuffer,r),I.update(l.endBuffer,i),I.update(l.scaleBuffer,a),I.update(l.capBuffer,o),I.update(l.colorModeBuffer,s),l}function o(e,t){let n=e.startBuffer.ref.value;Td(t,n,0,e.cylinderCount*6),I.update(e.startBuffer,n);let r=e.endBuffer.ref.value;Td(t,r,0,e.cylinderCount*6),I.update(e.endBuffer,r)}e.transform=o;let s=e.Params={...W.Params,sizeFactor:L.Numeric(1,{min:0,max:10,step:.1}),sizeAspectRatio:L.Numeric(1,{min:0,max:3,step:.01}),doubleSided:L.Boolean(!1,W.CustomQualityParamInfo),ignoreLight:L.Boolean(!1,W.ShadingCategory),celShaded:L.Boolean(!1,W.ShadingCategory),xrayShaded:L.Select(!1,[[!1,`Off`],[!0,`On`],[`inverted`,`Inverted`]],W.ShadingCategory),transparentBackfaces:L.Select(`off`,L.arrayToOptions([`off`,`on`,`opaque`]),W.ShadingCategory),solidInterior:L.Boolean(!0,W.ShadingCategory),bumpFrequency:L.Numeric(0,{min:0,max:10,step:.1},W.ShadingCategory),bumpAmplitude:L.Numeric(1,{min:0,max:5,step:.1},W.ShadingCategory),interior:Zd(),animation:af(),colorMode:L.Select(`default`,L.arrayToOptions([`default`,`interpolate`]),W.ShadingCategory)};e.Utils={Params:s,createEmpty:n,createValues:l,createValuesSimple:u,updateValues:d,updateBoundingSphere:f,createRenderableState:p,updateRenderableState:m,createPositionIterator:c};function c(e,t){let n=e.cylinderCount*6,r=t.instanceCount.ref.value,i=We(),a=i.position,o=e.startBuffer.ref.value,s=e.endBuffer.ref.value,c=t.aTransform.ref.value;return qe(n,r,2,(e,t)=>{let n=e%6==0?o:s;return t<0?h.fromArray(a,n,e*3):h.transformMat4Offset(a,n,c,0,e*3,t*16),i})}function l(e,t,n,r,i){let{instanceCount:a,groupCount:o}=n,s=c(e,t),l=Ld(n,s,r.color),u=ff(n,s,r.size),d=Mt(i.instanceGranularity,o,a)?ec(a,`instance`):ec(a*o,`groupInstance`),f=Is(),p=Ws(),m=_u(),h=uu(),g=Xs(),_=wu(),v={drawCount:e.cylinderCount*4*3,vertexCount:e.cylinderCount*6,groupCount:o,instanceCount:a},y=pf(u)*i.sizeFactor,b=V.clone(e.boundingSphere),x=Gt(b,t.aTransform.ref.value,a,0);return{dGeometryType:I.create(`cylinders`),aMapping:e.mappingBuffer,aGroup:e.groupBuffer,aStart:e.startBuffer,aEnd:e.endBuffer,aScale:e.scaleBuffer,aCap:e.capBuffer,aColorMode:e.colorModeBuffer,elements:e.indexBuffer,boundingSphere:I.create(x),invariantBoundingSphere:I.create(b),uInvariantBoundingSphere:I.create(H.ofSphere(b)),...l,...u,...d,...f,...p,...m,...h,...g,..._,...t,padding:I.create(y),...W.createValues(i,v),uSizeFactor:I.create(i.sizeFactor*i.sizeAspectRatio),uDoubleSided:I.create(i.doubleSided),dIgnoreLight:I.create(i.ignoreLight),dCelShaded:I.create(i.celShaded),dXrayShaded:I.create(i.xrayShaded===`inverted`?`inverted`:i.xrayShaded===!0?`on`:`off`),dTransparentBackfaces:I.create(i.transparentBackfaces),dSolidInterior:I.create(i.solidInterior),uBumpFrequency:I.create(i.bumpFrequency),uBumpAmplitude:I.create(i.bumpAmplitude),dDualColor:I.create(i.colorMode===`interpolate`),...tf(i.interior),...sf(i.animation)}}function u(e,t,n,r,i){let a=W.createSimple(n,r,i),o={...L.getDefaultValues(s),...t};return l(e,a.transform,a.locationIterator,a.theme,o)}function d(e,t){W.updateValues(e,t),I.updateIfChanged(e.uSizeFactor,t.sizeFactor*t.sizeAspectRatio),I.updateIfChanged(e.uDoubleSided,t.doubleSided),I.updateIfChanged(e.dIgnoreLight,t.ignoreLight),I.updateIfChanged(e.dCelShaded,t.celShaded),I.updateIfChanged(e.dXrayShaded,t.xrayShaded===`inverted`?`inverted`:t.xrayShaded===!0?`on`:`off`),I.updateIfChanged(e.dTransparentBackfaces,t.transparentBackfaces),I.updateIfChanged(e.dSolidInterior,t.solidInterior),I.updateIfChanged(e.uBumpFrequency,t.bumpFrequency),I.updateIfChanged(e.uBumpAmplitude,t.bumpAmplitude),I.updateIfChanged(e.dDualColor,t.colorMode===`interpolate`),nf(e,t.interior),cf(e,t.animation)}function f(e,t){let n=V.clone(t.boundingSphere),r=Gt(n,e.aTransform.ref.value,e.instanceCount.ref.value,0);V.equals(r,e.boundingSphere.ref.value)||I.update(e.boundingSphere,r),V.equals(n,e.invariantBoundingSphere.ref.value)||(I.update(e.invariantBoundingSphere,n),I.update(e.uInvariantBoundingSphere,H.fromSphere(e.uInvariantBoundingSphere.ref.value,n)))}function p(e){let t=W.createRenderableState(e);return m(t,e),t}function m(e,t){W.updateRenderableState(e,t),e.opaque=e.opaque&&!t.xrayShaded,e.writeDepth=e.opaque}})(qp||={})})))()}var Yp;function Xp(){return(Xp=e((()=>{df(),Ef(),Bf(),Qf(),Ip(),Rp(),T(),Bp(),Kp(),Jp(),dc(),(function(e){function t(e){switch(e.kind){case`mesh`:return e.triangleCount*3;case`points`:return e.pointCount;case`spheres`:return e.sphereCount*2*3;case`cylinders`:return e.cylinderCount*4*3;case`text`:return e.charCount*2*3;case`lines`:return e.lineCount*2*3;case`direct-volume`:return 36;case`image`:return 6;case`texture-mesh`:return e.vertexCount}}e.getDrawCount=t;function n(e){switch(e.kind){case`mesh`:return e.vertexCount;case`points`:return e.pointCount;case`spheres`:return e.sphereCount*6;case`cylinders`:return e.cylinderCount*6;case`text`:return e.charCount*4;case`lines`:return e.vertexCount;case`direct-volume`:let[t,n,r]=e.gridDimension.ref.value;return t*n*r;case`image`:return 4;case`texture-mesh`:return e.vertexCount}}e.getVertexCount=n;function r(e){switch(e.kind){case`mesh`:case`points`:case`spheres`:case`cylinders`:case`text`:case`lines`:return t(e)===0?0:ce(e.groupBuffer.ref.value)+1;case`direct-volume`:return 1;case`image`:return oc(e.groupTexture.ref.value.array,4)+1;case`texture-mesh`:return e.groupCount}}e.getGroupCount=r;function i(e){switch(e.kind){case`mesh`:return uf.Utils;case`points`:return Tf.Utils;case`spheres`:return Lp.Utils;case`cylinders`:return qp.Utils;case`text`:return zf.Utils;case`lines`:return Zf.Utils;case`direct-volume`:return Fp.Utils;case`image`:return Gp.Utils;case`texture-mesh`:return zp.Utils}}e.getUtils=i;function a(e,t){return t===`instance`&&e.nonInstanceable?`group`:t}e.getGranularity=a})(Yp||={})})))()}export{Dd as $,Mt as $n,Tc as $t,Jf as A,Rs as An,Xl as At,ff as B,ro as Bn,Ol as Bt,lp as C,Us as Cn,Ge as Cr,Ql as Ct,tp as D,Ns as Dn,Yl as Dt,cp as E,Ks as En,Ue as Er,Jl as Et,Af as F,cs as Fn,J as Ft,of as G,G as Gn,qc as Gt,wf as H,li as Hn,Jc as Ht,Lf as I,q as In,Z as It,Qd as J,Lt as Jn,Rc as Jt,af as K,K as Kn,Ic as Kt,Tf as L,bo as Ln,X as Lt,Xf as M,Ms as Mn,Wl as Mt,zf as N,Os as Nn,Fl as Nt,Zf as O,Ps as On,ou as Ot,Bf as P,Ts as Pn,Ul as Pt,Xd as Q,Vt as Qn,Gc as Qt,Ef as R,io as Rn,Y as Rt,up as S,Hs as Sn,Ke as Sr,fu as St,$f as T,Vs as Tn,He as Tr,eu as Tt,uf as U,Ii as Un,sl as Ut,hf as V,to as Vn,el as Vt,df as W,Gt as Wn,Kc as Wt,rf as X,jt as Xn,Bc as Xt,Zd as Y,It as Yn,Wc as Yt,Ld as Z,At as Zn,Pc as Zt,Dp as _,qs as _n,st as _r,mu as _t,Gp as a,Cc as an,St as ar,gd as at,hp as b,Qs as bn,Ye as br,cu as bt,zp as c,yc as cn,ht as cr,Cd as ct,Rp as d,rc as dn,bt as dr,Cu as dt,Sc as en,Nt as er,Od as et,Fp as f,ac as fn,ft as fr,xu as ft,vp as g,nc as gn,dt as gr,gu as gt,yp as h,$s as hn,at as hr,hu as ht,Jp as i,xc as in,Dt as ir,yd as it,Yf as j,ks as jn,Gl as jt,Qf as k,Fs as kn,Zl as kt,Bp as l,Mc as ln,vt as lr,bu as lt,_p as m,ec as mn,ot as mr,pu as mt,Xp as n,vc as nn,kt as nr,Td as nt,Wp as o,wc as on,Tt as or,bd as ot,Ip as p,ic as pn,pt as pr,Eu as pt,lf as q,W as qn,Hc as qt,qp as r,bc as rn,U as rr,vd as rt,Kp as s,gc as sn,Et as sr,Sd as st,Yp as t,_c as tn,Ot as tr,Id as tt,Lp as u,dc as un,yt as ur,Su as ut,fp as v,Js as vn,Je as vr,yu as vt,ep as w,Bs as wn,Ve as wr,$l as wt,pp as x,zs as xn,We as xr,lu as xt,dp as y,Ys as yn,qe as yr,su as yt,yf as z,Co as zn,Q as zt};