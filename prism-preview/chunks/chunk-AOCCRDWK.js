import{c as Et,f as er}from"./chunk-73TVMDCL.js";import{a as za,d as Pt,m as ne,w as ja}from"./chunk-55INLPL2.js";import{I as Gn,e as Xe,g as fr,h as oe,o as $,p as ve}from"./chunk-ZHHE2XG3.js";import{e as Fn,g as Mn,h as Ua,i as Ve}from"./chunk-VIA7CHLF.js";import{a as Rt}from"./chunk-KHBNYRDQ.js";import{d as wn}from"./chunk-FY6Y25VJ.js";import{Aa as Ln,B as tt,C as wa,E as pr,G as nt,Ga as Na,H as Ga,I as Oa,J as gr,L as zt,N as Vn,R as se,S as m,W as jt,Wa as qt,Z as Wt,ab as Or,b as ie,bb as ka,c as ar,db as at,ha as Bn,j as $r,m as Ce,o as n,oa as ge,pb as k,v as La,w as re,x as Fa,y as Ma,z as dr}from"./chunk-CZB3H7J7.js";function ye(){return ye.create(m.create(1,0,0),0)}(l=>{function e(s,g){return{normal:s,constant:g}}l.create=e;function r(s,g){return m.copy(s.normal,g.normal),s.constant=g.constant,s}l.copy=r;function t(s){return r(l(),s)}l.clone=t;function a(s,g){let c=1/m.magnitude(g.normal);return m.scale(s.normal,g.normal,c),s.constant=g.constant*c,s}l.normalize=a;function o(s,g){return m.negate(s.normal,g.normal),s.constant=-g.constant,s}l.negate=o;function u(s,g,c){return m.toArray(s.normal,g,c),g[c+3]=s.constant,g}l.toArray=u;function i(s,g,c){return m.fromArray(s.normal,g,c),s.constant=g[c+3],s}l.fromArray=i;function p(s,g,c){return m.copy(s.normal,g),s.constant=-m.dot(s.normal,c),s}l.fromNormalAndCoplanarPoint=p;function d(s,g,c,h){let x=m.triangleNormal(m(),g,c,h);return p(s,x,g),s}l.fromCoplanarPoints=d;let y=m();function C(s,g,c,h,x){m.set(y,g,c,h);let A=1/m.magnitude(y);return m.scale(s.normal,y,A),s.constant=x*A,s}l.setUnnormalized=C;function f(s,g){return m.dot(s.normal,g)+s.constant}l.distanceToPoint=f;function b(s,g){return f(s,g.center)-g.radius}l.distanceToSphere3D=b;function T(s,g,c){return m.scaleAndAdd(s,c,g.normal,-f(g,c))}l.projectPoint=T;function S(s,g,c){let h=m.dot(g.normal,c.direction);if(h===0)return!1;let x=-(m.dot(g.normal,c.origin)+g.constant)/h;return x<0?!1:(m.scaleAndAdd(s,c.origin,c.direction,x),!0)}l.intersectRay3D=S})(ye||={});function Nr(){}(l=>{l.Type={none:0,plane:1,sphere:2,cube:3,cylinder:4,infiniteCone:5},l.Params={variant:k.Select("pixel",k.arrayToOptions(["instance","pixel"])),objects:k.ObjectList({type:k.Select("plane",k.objectToOptions(l.Type,s=>Bn(s))),invert:k.Boolean(!1),position:k.Vec3(m()),rotation:k.Group({axis:k.Vec3(m.create(1,0,0)),angle:k.Numeric(0,{min:-180,max:180,step:1},{description:"Angle in Degrees"})},{isExpanded:!0}),scale:k.Vec3(m.create(1,1,1)),transform:k.Mat4(se.identity())},s=>Bn(s.type))};function t(s){return{count:0,type:new Array(s).fill(1),invert:new Array(s).fill(!1),position:new Array(s*3).fill(0),rotation:new Array(s*4).fill(0),scale:new Array(s*3).fill(1),transform:new Array(s*16).fill(0)}}let a=gr(),o=gr(),u=m(),i=m(),p=se(),d=se();function y(s,g){let c=s.objects.length,{type:h,invert:x,position:A,rotation:v,scale:_,transform:E}=g?.objects||t(c);for(let I=0;I<c;++I){let P=s.objects[I];h[I]=l.Type[P.type],x[I]=P.invert,m.toArray(P.position,A,I*3),m.normalize(u,P.rotation.axis),gr.toArray(gr.setAxisAngle(a,u,zt(P.rotation.angle)),v,I*4),m.toArray(P.scale,_,I*3),se.toArray(P.transform,E,I*16)}return{variant:s.variant,objects:{count:c,type:h,invert:x,position:A,rotation:v,scale:_,transform:E}}}l.getClip=y;let C=oe(),f=ye();function b(s,g,c){let{invert:h,position:x,rotation:A,transform:v}=g;return m.transformQuat(u,m.unitY,gr.fromArray(a,A,c*4)),oe.set(C,u[0],u[1],u[2],-m.dot(u,m.fromArray(i,x,c*3))),h[c]&&oe.scale(C,C,-1),se.fromArray(p,v,c*16),oe.transformMat4(C,C,se.transpose(p,p)),ye.setUnnormalized(s,C[0],C[1],C[2],C[3])}l.getPlane=b;function T(s,g,c){let{type:h,position:x,scale:A,transform:v}=s,_=h[g];if(_===l.Type.plane)return Math.abs(ye.distanceToPoint(b(f,s,g),c.center))<=c.radius;if(_!==l.Type.sphere&&_!==l.Type.cube&&_!==l.Type.cylinder)return!0;se.fromArray(p,v,g*16),m.transformMat4(u,c.center,p);let E=c.radius*se.getMaxScaleOnAxis(p),I=m.distance(u,m.fromArray(i,x,g*3)),P=A[g*3],V=A[g*3+1],B=A[g*3+2],D=(_===l.Type.cylinder?Math.min(P,V):Math.min(P,V,B))/2,M=(_===l.Type.sphere?Math.max(P,V,B):_===l.Type.cube?Math.hypot(P,V,B):Math.hypot(P,V))/2;return I<=E+M&&I+E>=D}l.canIntersectSphere=T;function S(s,g){if(s.variant!==g.variant||s.objects.count!==g.objects.count)return!1;let c=s.objects,h=g.objects;for(let x=0,A=c.count;x<A;++x)if(c.invert[x]!==h.invert[x]||c.type[x]!==h.type[x]||(m.fromArray(u,c.position,x*3),m.fromArray(i,h.position,x*3),!m.equals(u,i))||(m.fromArray(u,c.scale,x*3),m.fromArray(i,h.scale,x*3),!m.equals(u,i))||(gr.fromArray(a,c.rotation,x*4),gr.fromArray(o,h.rotation,x*4),!gr.equals(a,o))||(se.fromArray(p,c.transform,x*16),se.fromArray(d,h.transform,x*16),!se.areEqual(p,d,1e-6)))return!1;return!0}l.areEqual=S})(Nr||={});function ot(e,r,t){return e=pr(Math.round(e),0,16777215)+1,r[t+2]=e%256,e=Math.floor(e/256),r[t+1]=e%256,e=Math.floor(e/256),r[t]=e%256,r}function Nn(e,r,t){return Math.floor(e)*256*256+Math.floor(r)*256+Math.floor(t)-1}var Ht=255/256,On=m.create(256*256*256,256*256,256),Qu=oe.create(Ht/On[0],Ht/On[1],Ht/On[2],Ht/1),Wa=oe();function Ff(e,r,t,a){return oe.set(Wa,e/255,r/255,t/255,a/255),oe.dot(Wa,Qu)}function qa(e,r){let t=-1/0;for(let a=0,o=e.length;a<o;a+=r){let u=Nn(e[a],e[a+1],e[a+2]);u>t&&(t=u)}return t}var kn=m.fromArray,Xt=m.transformMat4Offset;function Yu(e,r){e=Math.max(e,2);let t=Math.sqrt(e),a=Math.ceil(t);a=a+(r-a%r)%r;let o=a>0?Math.ceil(e/a):0;return{width:a,height:o,length:a*o*r}}function le(e,r,t,a){let{length:o,width:u,height:i}=Yu(e,r);return a=a&&a.length>=o?a:new t(o),{array:a,width:u,height:i}}var yr=m(),$u=new Pt("14"),Zu=new Pt("98");function Ha(e){return e>1e5?$u:Zu}function ir(e,r,t){let a=t*3,o=Ha(r);o.reset();for(let i=0,p=r*3;i<p;i+=a)kn(yr,e,i),o.includePosition(yr);o.finishedIncludeStep();for(let i=0,p=r*3;i<p;i+=a)kn(yr,e,i),o.radiusPosition(yr);let u=o.getSphere();if(r<=14){let i=[];for(let p=0,d=r*3;p<d;p+=a)i.push(kn(m(),e,p));$.setExtrema(u,i)}return u}var Un=se();function he(e,r,t,a){if(t===1){se.fromArray(Un,r,a);let d=$.clone(e);return se.isIdentity(Un)?d:$.transform(d,d,Un)}let o=Ha(t);o.reset();let{center:u,radius:i,extrema:p}=e;if(p&&t<=14){for(let d=0,y=t;d<y;++d)for(let C of p)Xt(yr,C,r,0,0,d*16+a),o.includePosition(yr);o.finishedIncludeStep();for(let d=0,y=t;d<y;++d)for(let C of p)Xt(yr,C,r,0,0,d*16+a),o.radiusPosition(yr)}else{for(let d=0,y=t;d<y;++d)Xt(yr,u,r,0,0,d*16+a),o.includePositionRadius(yr,i);o.finishedIncludeStep();for(let d=0,y=t;d<y;++d)Xt(yr,u,r,0,0,d*16+a),o.radiusPositionRadius(yr,i)}return o.getSphere()}var Kt=Ju();function Ju(){let e=new ArrayBuffer(4),r=new Float32Array(e),t=new Uint32Array(e),a=new Uint32Array(512),o=new Uint32Array(512);for(let d=0;d<256;++d){let y=d-127;y<-27?(a[d]=0,a[d|256]=32768,o[d]=24,o[d|256]=24):y<-14?(a[d]=1024>>-y-14,a[d|256]=1024>>-y-14|32768,o[d]=-y-1,o[d|256]=-y-1):y<=15?(a[d]=y+15<<10,a[d|256]=y+15<<10|32768,o[d]=13,o[d|256]=13):y<128?(a[d]=31744,a[d|256]=64512,o[d]=24,o[d|256]=24):(a[d]=31744,a[d|256]=64512,o[d]=13,o[d|256]=13)}let u=new Uint32Array(2048),i=new Uint32Array(64),p=new Uint32Array(64);for(let d=1;d<1024;++d){let y=d<<13,C=0;for(;(y&8388608)===0;)y<<=1,C-=8388608;y&=-8388609,C+=947912704,u[d]=y|C}for(let d=1024;d<2048;++d)u[d]=939524096+(d-1024<<13);for(let d=1;d<31;++d)i[d]=d<<23;i[31]=1199570944,i[32]=2147483648;for(let d=33;d<63;++d)i[d]=2147483648+(d-32<<23);i[63]=3347054592;for(let d=1;d<64;++d)d!==32&&(p[d]=1024);return{floatView:r,uint32View:t,baseTable:a,shiftTable:o,mantissaTable:u,exponentTable:i,offsetTable:p}}function br(e){e=pr(e,-65504,65504),Kt.floatView[0]=e;let r=Kt.uint32View[0],t=r>>23&511;return Kt.baseTable[t]+((r&8388607)>>Kt.shiftTable[t])}var Ke={kind:"null-location"};function Wf(e,r,t){return{kind:"data-location",tag:e,data:r,element:t}}function Qe(e,r){return{kind:"position-location",position:e?m.clone(e):m(),normal:r?m.clone(r):m()}}function el(e){return!!e&&e.kind==="position-location"}function Se(e,r,t,a,o=!1,u=()=>!1,i){if(e%t!==0)throw new Error("incompatible groupCount and stride");let p={location:Ke,location2:Ke,index:0,groupIndex:0,instanceIndex:0,isSecondary:!1},d=p.groupIndex<e,y=!1,C=0,f=0,b=!1,T=!!i;return{get hasNext(){return d},get isNextNewInstance(){return y},groupCount:e,instanceCount:r,count:e*r,stride:t,nonInstanceable:o,hasLocation2:T,move(){return d&&(p.groupIndex=C,p.instanceIndex=f,p.index=f*e+C,p.location=a(C,b?-1:f),T&&(p.location2=i(C,b?-1:f)),p.isSecondary=u(C,b?-1:f),C+=t,C===e?(++f,y=!0,f<r&&(C=0)):y=!1,d=C<e),p},reset(){p.location=Ke,p.location2=Ke,p.index=0,p.groupIndex=0,p.instanceIndex=0,p.isSecondary=!1,d=p.groupIndex<e,y=!1,C=0,f=0,b=!1},skipInstance(){d&&p.instanceIndex===f&&(++f,C=0,d=f<r)},voidInstances(){b=!0}}}var Yf={get hasNext(){return!1},get isNextNewInstance(){return!1},groupCount:0,instanceCount:0,count:0,stride:0,nonInstanceable:!1,hasLocation2:!1,move(){return{location:Ke,location2:Ke,index:0,groupIndex:0,instanceIndex:0,isSecondary:!1}},reset(){},skipInstance(){},voidInstances(){}};var Qt=m.set,Xa=m.normalize,Ka=m.sub,Qa=m.addScalar,Yt=m.scale,$t=m.toArray;function cm(e,r,t,a){let o=!1,u=r.grid.cells.data.length;if(er.isLoci(e)){if(!er.areEquivalent(e.volume,r))return!1;if(Xe.is(e.instances)){let i=Xe.start(e.instances)*u,p=Xe.end(e.instances)*u;a(Xe.ofBounds(i,p))&&(o=!0)}else for(let i=0,p=e.instances.length;i<p;++i){let d=e.instances[i]*u;a(Xe.ofBounds(d,d+u))&&(o=!0)}}else if(er.Isosurface.isLoci(e)){if(!er.areEquivalent(e.volume,r))return!1;if(t?.isoValue){if(!er.IsoValue.areSame(e.isoValue,t.isoValue,r.grid.stats))return!1;if(Xe.is(e.instances)){let i=Xe.start(e.instances)*u,p=Xe.end(e.instances)*u;a(Xe.ofBounds(i,p))&&(o=!0)}else for(let i=0,p=e.instances.length;i<p;++i){let d=e.instances[i]*u;a(Xe.ofBounds(d,d+u))&&(o=!0)}}else{let{stats:i,cells:{data:p}}=r.grid,d=i.sigma,y=er.IsoValue.toAbsolute(e.isoValue,i).absoluteValue;for(let C=0,f=p.length;C<f;++C)Ma(y,p[C],d)&&fr.forEach(e.instances,b=>{let T=b*u;a(Xe.ofSingleton(T+C))&&(o=!0)})}}else if(er.Cell.isLoci(e)){if(!er.areEquivalent(e.volume,r))return!1;for(let{indices:i,instances:p}of e.elements)Xe.is(i)?fr.forEach(p,d=>{let y=d*u;a(Xe.offset(i,y))&&(o=!0)}):fr.forEach(i,d=>{fr.forEach(p,y=>{let C=y*u;a(Xe.ofSingleton(C+d))&&(o=!0)})})}else if(er.Segment.isLoci(e)){if(!er.areEquivalent(e.volume,r))return!1;if(t?.segments)for(let{segments:i,instances:p}of e.elements)fr.areIntersecting(i,t.segments)&&fr.forEach(p,d=>{let y=d*u;a(Xe.ofBounds(y,y+u))&&(o=!0)});else{let i=er.Segmentation.get(r);if(i){let p=new Set;for(let{segments:d,instances:y}of e.elements){for(let b=0,T=fr.size(d);b<T;b++){let S=fr.getAt(d,b);ja.add(p,i.segments.get(S))}let C=Array.from(p.values()),f=r.grid.cells.data;for(let b=0,T=f.length;b<T;++b)if(C.includes(f[b]))for(let S=0,l=fr.size(y);S<l;S++){let s=S*u;a(Xe.ofSingleton(b+s))&&(o=!0)}}}}}return o}function rl(e,r){let[t,a,o]=e.grid.cells.space.dimensions,u=t*a*o,i=e.instances.length,p=er.Cell.Location(e);return Se(u,i,1,(y,C)=>(p.cell=y,p.instance=C,p))}function dm(e,r,t){let a=t.meta.mapping;if(!a)return rl(e,r);let o=a.cell.length,u=er.isPeriodic(e)?1:e.instances.length,i=er.Cell.Location(e),p=(y,C)=>(i.cell=y,i.instance=C,i),d=er.isPeriodic(e);return Se(o,u,1,p,d)}function Zt(e,r=0){let t=e[0]*e[1]*e[2],a=Math.sqrt(t),o=Math.pow(2,Math.ceil(Math.log(a)/Math.log(2))),u=e[0]+r,i=e[1]+r,p=1,d=u;return o<u*e[2]?(d=Math.floor(o/u),p=Math.ceil(e[2]/d),u*=d,i*=p):u*=e[2],{width:u,height:i,columns:d,rows:p,powerOfTwoSize:i<o?o:o*2}}function fm(e,r,t=0,a="byte"){let{cells:{space:o,data:u},stats:{max:i,min:p}}=e.grid,d=o.dimensions,{dataOffset:y}=o,{width:C,height:f}=Zt(d,t),b=r==="data"?1:4,T=a==="byte"?new Uint8Array(C*f*b):a==="halfFloat"?new Uint16Array(C*f*b):new Float32Array(C*f*b),S={array:T,width:C,height:f},l=i-p,[s,g,c]=d,h=s+t,x=g+t,A=m(),v=m(),_=s-1,E=g-1,I=c-1;for(let P=0;P<c;++P)for(let V=0;V<g;++V)for(let B=0;B<s;++B){let D=Math.floor(P*h%C/h),M=Math.floor(P*h/C),q=D*h+B,W=b*(M*x*C+V*C+q),O=y(B,V,P),L;if(a==="byte"?L=Math.round((u[O]-p)/l*255):a==="halfFloat"?L=br((u[O]-p)/l):L=(u[O]-p)/l,r==="data")T[W]=L;else{if(r==="groups")if(a==="halfFloat"){let F=pr(Math.round(O),0,16777215)+1;T[W+2]=br(F%256),F=Math.floor(F/256),T[W+1]=br(F%256),F=Math.floor(F/256),T[W]=br(F%256)}else ot(O,T,W);else Qt(A,u[y(Math.max(0,B-1),V,P)],u[y(B,Math.max(0,V-1),P)],u[y(B,V,Math.max(0,P-1))]),Qt(v,u[y(Math.min(_,B+1),V,P)],u[y(B,Math.min(E,V+1),P)],u[y(B,V,Math.min(I,P+1))]),Xa(A,Ka(A,A,v)),Qa(A,Yt(A,A,.5),.5),a==="byte"?$t(Yt(A,A,255),T,W):a==="halfFloat"?(T[W]=br(A[0]),T[W+1]=br(A[1]),T[W+2]=br(A[2])):$t(A,T,W);T[W+3]=L}}return S}function mm(e,r="byte"){let{cells:{space:t,data:a},stats:{max:o,min:u}}=e.grid,[i,p,d]=t.dimensions,{dataOffset:y}=t,C=r==="byte"?new Uint8Array(i*p*d*4):r==="halfFloat"?new Uint16Array(i*p*d*4):new Float32Array(i*p*d*4),f={array:C,width:i,height:p,depth:d},b=o-u,T=m(),S=m(),l=i-1,s=p-1,g=d-1,c=0;for(let h=0;h<d;++h)for(let x=0;x<p;++x)for(let A=0;A<i;++A){let v=y(A,x,h);Qt(T,a[y(Math.max(0,A-1),x,h)],a[y(A,Math.max(0,x-1),h)],a[y(A,x,Math.max(0,h-1))]),Qt(S,a[y(Math.min(l,A+1),x,h)],a[y(A,Math.min(s,x+1),h)],a[y(A,x,Math.min(g,h+1))]),Xa(T,Ka(T,T,S)),Qa(T,Yt(T,T,.5),.5),r==="byte"?($t(Yt(T,T,255),C,c),C[c+3]=Math.round((a[v]-u)/b*255)):r==="halfFloat"?(C[c]=br(T[0]),C[c+1]=br(T[1]),C[c+2]=br(T[2]),C[c+3]=br((a[v]-u)/b)):($t(T,C,c),C[c+3]=(a[v]-u)/b),c+=4}return f}function pm(e,r,t,a=0){let o=e.grid.cells.data,u=ve.size(m(),t),i=e.grid.cells.space.dataOffset,{width:p,height:d}=Zt(u,a),y=1,C=new Uint8Array(p*d*y),f={array:C,width:p,height:d},[b,T,S]=u,l=b-1,s=T-1,g=S-1,c=b+a,h=T+a,[x,A,v]=t.min,[_,E,I]=t.max;for(let P=0;P<S;++P)for(let V=0;V<T;++V)for(let B=0;B<b;++B){let D=Math.floor(P*c%p/c),M=Math.floor(P*c/p),q=D*c+B,W=y*(M*h*p+V*p+q),O=r.includes(o[i(B+x,V+A,P+v)])?255:0,L=r.includes(o[i(Math.min(l+_,B+1+x),V+A,P+v)])?255:0,F=r.includes(o[i(Math.max(0,B-1+x),V+A,P+v)])?255:0,G=r.includes(o[i(B+x,Math.min(s+E,V+1+A),P+v)])?255:0,z=r.includes(o[i(B+x,Math.max(0,V-1+A),P+v)])?255:0,X=r.includes(o[i(B+x,V+A,Math.min(g+I,P+1+v))])?255:0,R=r.includes(o[i(B+x,V+A,Math.max(0,P-1+v))])?255:0;C[W]=Math.round((O+O+L+F+G+z+X+R)/8)}return f}function tl(e){let{space:r,data:t}=e,{get:a,set:o,add:u,dataOffset:i}=r,[p,d,y]=r.dimensions,C=m.create(p+1,d+1,y+1),l={...r,dimensions:C,get:(s,g,c,h)=>a(s,g%p,c%d,h%y),set:(s,g,c,h,x)=>o(s,g%p,c%d,h%y,x),add:(s,g,c,h,x)=>u(s,g%p,c%d,h%y,x),dataOffset:(s,g,c)=>i(s%p,g%d,c%y)};return{data:t,space:l}}function gm(e){let{grid:r}=e,t=Et.getGridToCartesianTransform(r),a={...r,transform:{kind:"matrix",matrix:t},cells:tl(r.cells)};return{...e,grid:a,parent:e}}function ym(e,r,t){let{grid:a}=e,{space:o}=a.cells,{get:u,set:i,add:p,dataOffset:d}=o,[y,C,f]=o.dimensions,b=m.sub(m(),t,r),T=m.create(y*b[0],C*b[1],f*b[2]),c={...o,dimensions:T,get:(E,I,P,V)=>u(E,I%y,P%C,V%f),set:(E,I,P,V,B)=>i(E,I%y,P%C,V%f,B),add:(E,I,P,V,B)=>p(E,I%y,P%C,V%f,B),dataOffset:(E,I,P)=>d(E%y,I%C,P%f)},h=Et.getGridToCartesianTransform(e.grid),x=se.getScaling(m(),h);m.mul(x,x,o.dimensions);let A=m.mul(m(),r,x);se.setTranslation(h,A);let _={...a,transform:{kind:"matrix",matrix:h},cells:{...a.cells,space:c}};return{...e,grid:_,parent:e,instances:[{transform:se.identity()}]}}function Vt(e,r,t,a){let{colorType:o,vertexCount:u,groupCount:i,positionBuffer:p,instanceBuffer:d,transformBuffer:y,groupBuffer:C,itemSize:f}=e,{resolution:b,stride:T}=r,S=o.endsWith("Instance"),l=ve.fromSphere3D(ve(),S?e.boundingSphere:e.invariantBoundingSphere),s=1+b,g=ve.expand(ve(),l,m.create(s,s,s)),c=1/b,h=ve.scale(ve(),g,c),x=ve.size(m(),h);m.ceil(x,x),m.add(x,x,m.create(2,2,2));let{min:A}=g,[v,_]=x,{width:E,height:I}=Zt(x),P=new Float32Array(E*I*f),V=new Float32Array(E*I),B=new Uint8Array(E*I*f),D={array:B,width:E,height:I,filter:"linear"},M=S?e.instanceCount:1,q=e.colorData.array;function W(U,H,j){let Y=Math.floor(j*v%E/v),Z=Math.floor(j*v/E),K=Y*v+U;return f*(Z*_*E+H*E+K)}let O=2,[L,F,G]=x,z=m();for(let U=0;U<M;++U){let H=t&&S?d[U]:U;for(let j=0;j<u;j+=T){m.fromArray(z,p,j*3),S&&m.transformMat4Offset(z,z,y,0,0,U*16),m.sub(z,z,A),m.scale(z,z,c);let[Y,Z,K]=z,J=Math.floor(Y),ee=Math.floor(Z),Ie=Math.floor(K),Kr=(H*i+C[j])*f,$e=Math.max(0,J-O),Ze=Math.max(0,ee-O),mr=Math.max(0,Ie-O),Mr=Math.min(L,J+O+2),ue=Math.min(F,ee+O+2),fe=Math.min(G,Ie+O+2);for(let nr=$e;nr<Mr;++nr){let Re=nr-Y;for(let Pr=Ze;Pr<ue;++Pr){let Qr=Pr-Z;for(let pe=mr;pe<fe;++pe){let Je=pe-K,be=Math.sqrt(Re*Re+Qr*Qr+Je*Je);if(be>O)continue;let De=O-be,Ee=W(nr,Pr,pe);for(let Pe=0;Pe<f;++Pe)P[Ee+Pe]+=q[Kr+Pe]*De;V[Ee/f]+=De}}}}}for(let U=0,H=V.length;U<H;++U){let j=U*f,Y=V[U];for(let Z=0;Z<f;++Z)B[j+Z]=Math.round(P[j+Z]/Y)}let X=re.create(E,I),R=oe.create(A[0],A[1],A[2],c),w=S?"volumeInstance":"volume";if(t){if(!a){let U=f===4?"rgba":f===3?"rgb":"alpha";a=t.resources.texture("image-uint8",U,"ubyte","linear")}return a.load(D),{kind:"volume",texture:a,gridTexDim:X,gridDim:x,gridTransform:R,type:w}}else{let U=nl({vertexCount:u,instanceCount:M,transformBuffer:y,positionBuffer:p,colorType:w,grid:B,gridDim:x,gridTexDim:X,gridTransform:R,vertexStride:3,colorStride:f,outputStride:f});return{kind:"vertex",texture:U,texDim:re.create(U.width,U.height),type:S?"vertexInstance":"vertex"}}}function nl(e){let{vertexCount:r,positionBuffer:t,transformBuffer:a,grid:o,gridDim:u,gridTexDim:i,gridTransform:p,vertexStride:d,colorStride:y}=e,C=e.itemOffset||0,f=e.outputStride;if(f+C>y)throw new Error("outputStride + itemOffset must NOT be larger than colorStride");let b=e.colorType.endsWith("Instance"),T=b?e.instanceCount:1,S=le(Math.max(1,T*r),f,Uint8Array),{array:l}=S,[s,g]=u,c=i[0],h=m.fromArray(m(),p,0),x=p[3];function A(P,V,B){let D=Math.floor(B*s%c/s),M=Math.floor(B*s/c),q=D*s+P;return y*(M*g*c+V*c+q)}let v=m(),_=m(),E=m(),I=m();for(let P=0;P<T;++P)for(let V=0;V<r;++V){m.fromArray(v,t,V*d),b&&m.transformMat4Offset(v,v,a,0,0,P*16),m.sub(v,v,h),m.scale(v,v,x),m.floor(_,v),m.ceil(E,v),m.sub(I,v,_),m.sub(v,E,_),m.div(I,I,v);let[B,D,M]=_,[q,W,O]=E,[L,F,G]=I,z=A(B,D,M)+C,X=A(q,D,M)+C,R=A(B,D,O)+C,w=A(q,D,O)+C,U=A(B,W,M)+C,H=A(q,W,M)+C,j=A(B,W,O)+C,Y=A(q,W,O)+C,Z=(P*r+V)*f;for(let K=0;K<f;++K){let J=o[z+K],ee=o[X+K],Ie=o[R+K],Kr=o[w+K],$e=o[U+K],Ze=o[H+K],mr=o[j+K],Mr=o[Y+K],ue=nt(J,ee,L),fe=nt(Ie,Kr,L),nr=nt($e,Ze,L),Re=nt(mr,Mr,L),Pr=nt(ue,nr,F),Qr=nt(fe,Re,F);l[Z+K]=nt(Pr,Qr,G)}}return S}function al(e){return e==="group"||e==="groupInstance"}function _m(e,r,t,a){if(!al(e.dColorType.ref.value))return;let o=Vt({vertexCount:e.uVertexCount.ref.value,instanceCount:e.uInstanceCount.ref.value,groupCount:e.uGroupCount.ref.value,transformBuffer:e.aTransform.ref.value,instanceBuffer:e.aInstance.ref.value,positionBuffer:e.aPosition.ref.value,groupBuffer:e.aGroup.ref.value,colorData:e.tColor.ref.value,colorType:e.dColorType.ref.value,boundingSphere:e.boundingSphere.ref.value,invariantBoundingSphere:e.invariantBoundingSphere.ref.value,itemSize:3},r,t,a);o.kind==="volume"?(n.updateIfChanged(e.dColorType,o.type),n.update(e.tColorGrid,o.texture),n.update(e.uColorTexDim,o.gridTexDim),n.update(e.uColorGridDim,o.gridDim),n.update(e.uColorGridTransform,o.gridTransform)):o.kind==="vertex"&&(n.updateIfChanged(e.dColorType,o.type),n.update(e.tColor,o.texture),n.update(e.uColorTexDim,o.texDim))}function ol(e){return e==="groupInstance"}function Am(e,r,t,a){if(!ol(e.dOverpaintType.ref.value))return;let o=Vt({vertexCount:e.uVertexCount.ref.value,instanceCount:e.uInstanceCount.ref.value,groupCount:e.uGroupCount.ref.value,transformBuffer:e.aTransform.ref.value,instanceBuffer:e.aInstance.ref.value,positionBuffer:e.aPosition.ref.value,groupBuffer:e.aGroup.ref.value,colorData:e.tOverpaint.ref.value,colorType:e.dOverpaintType.ref.value,boundingSphere:e.boundingSphere.ref.value,invariantBoundingSphere:e.invariantBoundingSphere.ref.value,itemSize:4},r,t,a);o.kind==="volume"?(n.updateIfChanged(e.dOverpaintType,o.type),n.update(e.tOverpaintGrid,o.texture),n.update(e.uOverpaintTexDim,o.gridTexDim),n.update(e.uOverpaintGridDim,o.gridDim),n.update(e.uOverpaintGridTransform,o.gridTransform)):o.kind==="vertex"&&(n.updateIfChanged(e.dOverpaintType,o.type),n.update(e.tOverpaint,o.texture),n.update(e.uOverpaintTexDim,o.texDim))}function il(e){return e==="groupInstance"}function Im(e,r,t,a){if(!il(e.dTransparencyType.ref.value))return;let o=Vt({vertexCount:e.uVertexCount.ref.value,instanceCount:e.uInstanceCount.ref.value,groupCount:e.uGroupCount.ref.value,transformBuffer:e.aTransform.ref.value,instanceBuffer:e.aInstance.ref.value,positionBuffer:e.aPosition.ref.value,groupBuffer:e.aGroup.ref.value,colorData:e.tTransparency.ref.value,colorType:e.dTransparencyType.ref.value,boundingSphere:e.boundingSphere.ref.value,invariantBoundingSphere:e.invariantBoundingSphere.ref.value,itemSize:1},r,t,a);o.kind==="volume"?(n.updateIfChanged(e.dTransparencyType,o.type),n.update(e.tTransparencyGrid,o.texture),n.update(e.uTransparencyTexDim,o.gridTexDim),n.update(e.uTransparencyGridDim,o.gridDim),n.update(e.uTransparencyGridTransform,o.gridTransform)):o.kind==="vertex"&&(n.updateIfChanged(e.dTransparencyType,o.type),n.update(e.tTransparency,o.texture),n.update(e.uTransparencyTexDim,o.texDim))}function sl(e){return e==="groupInstance"}function Dm(e,r,t,a){if(!sl(e.dEmissiveType.ref.value))return;let o=Vt({vertexCount:e.uVertexCount.ref.value,instanceCount:e.uInstanceCount.ref.value,groupCount:e.uGroupCount.ref.value,transformBuffer:e.aTransform.ref.value,instanceBuffer:e.aInstance.ref.value,positionBuffer:e.aPosition.ref.value,groupBuffer:e.aGroup.ref.value,colorData:e.tEmissive.ref.value,colorType:e.dEmissiveType.ref.value,boundingSphere:e.boundingSphere.ref.value,invariantBoundingSphere:e.invariantBoundingSphere.ref.value,itemSize:1},r,t,a);o.kind==="volume"?(n.updateIfChanged(e.dEmissiveType,o.type),n.update(e.tEmissiveGrid,o.texture),n.update(e.uEmissiveTexDim,o.gridTexDim),n.update(e.uEmissiveGridDim,o.gridDim),n.update(e.uEmissiveGridTransform,o.gridTransform)):o.kind==="vertex"&&(n.updateIfChanged(e.dEmissiveType,o.type),n.update(e.tEmissive,o.texture),n.update(e.uEmissiveTexDim,o.texDim))}function ul(e){return e==="groupInstance"}function Em(e,r,t,a){if(!ul(e.dSubstanceType.ref.value))return;let o=Vt({vertexCount:e.uVertexCount.ref.value,instanceCount:e.uInstanceCount.ref.value,groupCount:e.uGroupCount.ref.value,transformBuffer:e.aTransform.ref.value,instanceBuffer:e.aInstance.ref.value,positionBuffer:e.aPosition.ref.value,groupBuffer:e.aGroup.ref.value,colorData:e.tSubstance.ref.value,colorType:e.dSubstanceType.ref.value,boundingSphere:e.boundingSphere.ref.value,invariantBoundingSphere:e.invariantBoundingSphere.ref.value,itemSize:4},r,t,a);o.kind==="volume"?(n.updateIfChanged(e.dSubstanceType,o.type),n.update(e.tSubstanceGrid,o.texture),n.update(e.uSubstanceTexDim,o.gridTexDim),n.update(e.uSubstanceGridDim,o.gridDim),n.update(e.uSubstanceGridTransform,o.gridTransform)):o.kind==="vertex"&&(n.updateIfChanged(e.dSubstanceType,o.type),n.update(e.tSubstance,o.texture),n.update(e.uSubstanceTexDim,o.texDim))}var $a=Ce();function ll(e,r){switch(r){case e.FRAMEBUFFER_COMPLETE:return"complete";case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"incomplete attachment";case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"incomplete missing attachment";case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"incomplete dimensions";case e.FRAMEBUFFER_UNSUPPORTED:return"unsupported"}if(te(e))switch(r){case e.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE:return"incomplete multisample";case e.RENDERBUFFER_SAMPLES:return"renderbuffer samples"}return"unknown error"}function pt(e,r){let t=e.checkFramebufferStatus(e.FRAMEBUFFER);if(t!==e.FRAMEBUFFER_COMPLETE){let a=ll(e,t);throw new Error(`Framebuffer status: ${a}${r?` (${r})`:""}`)}}function Ya(e){let r=e.createFramebuffer();if(r===null)throw new Error("Could not create WebGL framebuffer");return r}function Za(e){let r=Ya(e),t=!1;return{id:$a(),bind:()=>e.bindFramebuffer(e.FRAMEBUFFER,r),reset:()=>{r=Ya(e)},destroy:()=>{t||(e.deleteFramebuffer(r),t=!0)}}}function Ja(){return{id:$a(),bind:()=>{},reset:()=>{},destroy:()=>{}}}function zn(e){let r=ro(e);if(r===null)throw new Error('Could not find support for "instanced_arrays"');let t=no(e);if(t===null)throw new Error('Could not find support for "element_index_uint"');let a=to(e);if(a===null)throw new Error('Could not find support for "standard_derivatives"');let o=oo(e);ie&&o===null&&console.log('Could not find support for "texture_float"');let u=io(e);ie&&u===null&&console.log('Could not find support for "texture_float_linear"');let i=so(e);ie&&i===null&&console.log('Could not find support for "texture_half_float"');let p=uo(e);ie&&p===null&&console.log('Could not find support for "texture_half_float_linear"');let d=bo(e);ie&&d===null&&console.log('Could not find support for "depth_texture"');let y=lo(e);ie&&y===null&&console.log('Could not find support for "blend_minmax"');let C=ao(e);ie&&C===null&&console.log('Could not find support for "vertex_array_object"');let f=co(e);ie&&f===null&&console.log('Could not find support for "frag_depth"');let b=fo(e);ie&&b===null&&console.log('Could not find support for "color_buffer_float"');let T=mo(e);ie&&T===null&&console.log('Could not find support for "color_buffer_half_float"');let S=po(e);ie&&S===null&&console.log('Could not find support for "draw_buffers"');let l=go(e);ie&&l===null&&console.log('Could not find support for "draw_buffers_indexed"');let s=yo(e);ie&&s===null&&console.log('Could not find support for "shader_texture_lod"');let g=ho(e);ie&&g===null&&console.log('Could not find support for "sRGB"');let c=xo(e);ie&&c===null&&console.log('Could not find support for "disjoint_timer_query"');let h=vo(e);ie&&h===null&&console.log('Could not find support for "multi_draw"');let x=To(e);ie&&x===null&&console.log('Could not find support for "draw_instanced_base_vertex_base_instance"');let A=Co(e);ie&&A===null&&console.log('Could not find support for "multi_draw_instanced_base_vertex_base_instance"');let v=So(e);ie&&v===null&&console.log('Could not find support for "parallel_shader_compile"');let _=_o(e);ie&&_===null&&console.log('Could not find support for "fbo_render_mipmap"');let E=Ao(e);ie&&E===null&&console.log('Could not find support for "provoking_vertex"');let I=Io(e);ie&&I===null&&console.log('Could not find support for "clip_cull_distance"');let P=Do(e);ie&&P===null&&console.log('Could not find support for "conservative_depth"');let V=Eo(e);ie&&V===null&&console.log('Could not find support for "stencil_texturing"');let B=Po(e);ie&&B===null&&console.log('Could not find support for "clip_control"');let D=Ro(e);ie&&D===null&&console.log('Could not find support for "render_snorm"');let M=Vo(e);ie&&M===null&&console.log('Could not find support for "render_shared_exponent"');let q=Bo(e);ie&&q===null&&console.log('Could not find support for "texture_norm16"');let W=Lo(e);ie&&W===null&&console.log('Could not find support for "depth_clamp"');let O=Fo(e);ie&&O===null&&console.log('Could not find support for "multiview2"');let L=Mo(e);return{instancedArrays:r,standardDerivatives:a,elementIndexUint:t,textureFloat:o,textureFloatLinear:u,textureHalfFloat:i,textureHalfFloatLinear:p,depthTexture:d,blendMinMax:y,vertexArrayObject:C,fragDepth:f,colorBufferFloat:b,colorBufferHalfFloat:T,drawBuffers:S,drawBuffersIndexed:l,shaderTextureLod:s,sRGB:g,disjointTimerQuery:c,multiDraw:h,drawInstancedBaseVertexBaseInstance:x,multiDrawInstancedBaseVertexBaseInstance:A,parallelShaderCompile:v,fboRenderMipmap:_,provokingVertex:E,clipCullDistance:I,conservativeDepth:P,stencilTexturing:V,clipControl:B,renderSnorm:D,renderSharedExponent:M,textureNorm16:q,depthClamp:W,multiview2:O,noNonInstancedActiveAttribs:L}}function eo(e,r){let t=zn(e);Wt(r,(a,o)=>{o==="noNonInstancedActiveAttribs"?r.noNonInstancedActiveAttribs=t.noNonInstancedActiveAttribs:a!==null&&(t[o]===null?r[o]=null:Object.assign(a,t[o]))})}function wo(e,r){let t={},a=e.getParameter(e.FRONT_FACE),o=e.getParameter(e.CULL_FACE_MODE),u=e.getParameter(e.DEPTH_WRITEMASK),i=e.getParameter(e.DEPTH_CLEAR_VALUE),p=e.getParameter(e.DEPTH_FUNC),d=e.getParameter(e.COLOR_WRITEMASK),y=e.getParameter(e.COLOR_CLEAR_VALUE),C=e.getParameter(e.BLEND_SRC_RGB),f=e.getParameter(e.BLEND_DST_RGB),b=e.getParameter(e.BLEND_SRC_ALPHA),T=e.getParameter(e.BLEND_DST_ALPHA),S=e.getParameter(e.BLEND_COLOR),l=e.getParameter(e.BLEND_EQUATION_RGB),s=e.getParameter(e.BLEND_EQUATION_ALPHA),g=e.getParameter(e.STENCIL_FUNC),c=e.getParameter(e.STENCIL_VALUE_MASK),h=e.getParameter(e.STENCIL_REF),x=e.getParameter(e.STENCIL_BACK_FUNC),A=e.getParameter(e.STENCIL_BACK_VALUE_MASK),v=e.getParameter(e.STENCIL_BACK_REF),_=e.getParameter(e.STENCIL_WRITEMASK),E=e.getParameter(e.STENCIL_BACK_WRITEMASK),I=e.getParameter(e.STENCIL_FAIL),P=e.getParameter(e.STENCIL_PASS_DEPTH_PASS),V=e.getParameter(e.STENCIL_PASS_DEPTH_FAIL),B=e.getParameter(e.STENCIL_BACK_FAIL),D=e.getParameter(e.STENCIL_BACK_PASS_DEPTH_PASS),M=e.getParameter(e.STENCIL_BACK_PASS_DEPTH_FAIL),q=e.getParameter(e.STENCIL_CLEAR_VALUE),W=e.getParameter(e.MAX_VERTEX_ATTRIBS),O=[],L=e.getParameter(e.VIEWPORT),F=e.getParameter(e.SCISSOR_BOX),G=r.clipControl?e.getParameter(r.clipControl.CLIP_ORIGIN):-1,z=r.clipControl?e.getParameter(r.clipControl.CLIP_DEPTH_MODE):-1,X=()=>{for(let R=0;R<W;++R)O[R]=0};return X(),{currentProgramId:-1,currentMaterialId:-1,currentRenderItemId:-1,enable:R=>{t[R]!==!0&&(e.enable(R),t[R]=!0)},disable:R=>{t[R]!==!1&&(e.disable(R),t[R]=!1)},frontFace:R=>{R!==a&&(e.frontFace(R),a=R)},cullFace:R=>{R!==o&&(e.cullFace(R),o=R)},depthMask:R=>{R!==u&&(e.depthMask(R),u=R)},clearDepth:R=>{R!==i&&(e.clearDepth(R),i=R)},depthFunc:R=>{R!==p&&(e.depthFunc(R),p=R)},colorMask:(R,w,U,H)=>{(R!==d[0]||w!==d[1]||U!==d[2]||H!==d[3])&&(e.colorMask(R,w,U,H),d[0]=R,d[1]=w,d[2]=U,d[3]=H)},clearColor:(R,w,U,H)=>{(R!==y[0]||w!==y[1]||U!==y[2]||H!==y[3])&&(e.clearColor(R,w,U,H),y[0]=R,y[1]=w,y[2]=U,y[3]=H)},blendFunc:(R,w)=>{(R!==C||w!==f||R!==b||w!==T)&&(e.blendFunc(R,w),C=R,f=w,b=R,T=w)},blendFuncSeparate:(R,w,U,H)=>{(R!==C||w!==f||U!==b||H!==T)&&(e.blendFuncSeparate(R,w,U,H),C=R,f=w,b=U,T=H)},blendEquation:R=>{(R!==l||R!==s)&&(e.blendEquation(R),l=R,s=R)},blendEquationSeparate:(R,w)=>{(R!==l||w!==s)&&(e.blendEquationSeparate(R,w),l=R,s=w)},blendColor:(R,w,U,H)=>{(R!==S[0]||w!==S[1]||U!==S[2]||H!==S[3])&&(e.blendColor(R,w,U,H),S[0]=R,S[1]=w,S[2]=U,S[3]=H)},stencilFunc:(R,w,U)=>{(R!==g||w!==h||U!==c||R!==x||w!==v||U!==A)&&(e.stencilFunc(R,w,U),g=R,h=w,c=U,x=R,v=w,A=U)},stencilFuncSeparate:(R,w,U,H)=>{R===e.FRONT?(w!==g||U!==h||H!==c)&&(e.stencilFuncSeparate(R,w,U,H),g=w,h=U,c=H):R===e.BACK?(w!==x||U!==v||H!==A)&&(e.stencilFuncSeparate(R,w,U,H),x=w,v=U,A=H):R===e.FRONT_AND_BACK&&(w!==g||U!==h||H!==c||w!==x||U!==v||H!==A)&&(e.stencilFuncSeparate(R,w,U,H),g=w,h=U,c=H,x=w,v=U,A=H)},stencilMask:R=>{(R!==_||R!==E)&&(e.stencilMask(R),_=R,E=R)},stencilMaskSeparate:(R,w)=>{R===e.FRONT?w!==_&&(e.stencilMaskSeparate(R,w),_=w):R===e.BACK?w!==E&&(e.stencilMaskSeparate(R,w),E=w):R===e.FRONT_AND_BACK&&(w!==_||w!==E)&&(e.stencilMaskSeparate(R,w),_=w,E=w)},stencilOp:(R,w,U)=>{(R!==I||w!==V||U!==P||R!==B||w!==M||U!==D)&&(e.stencilOp(R,w,U),I=R,V=w,P=U,B=R,M=w,D=U)},stencilOpSeparate:(R,w,U,H)=>{R===e.FRONT?(w!==I||U!==V||H!==P)&&(e.stencilOpSeparate(R,w,U,H),I=w,V=U,P=H):R===e.BACK?(w!==B||U!==M||H!==D)&&(e.stencilOpSeparate(R,w,U,H),B=w,M=U,D=H):R===e.FRONT_AND_BACK&&(w!==I||U!==V||H!==P||w!==B||U!==M||H!==D)&&(e.stencilOpSeparate(R,w,U,H),I=w,V=U,P=H,B=w,M=U,D=H)},clearStencil:R=>{R!==q&&(e.clearStencil(R),q=R)},enableVertexAttrib:R=>{e.enableVertexAttribArray(R),O[R]=1},clearVertexAttribsState:X,disableUnusedVertexAttribs:()=>{for(let R=0;R<W;++R)O[R]===0&&e.disableVertexAttribArray(R)},viewport:(R,w,U,H)=>{(R!==L[0]||w!==L[1]||U!==L[2]||H!==L[3])&&(e.viewport(R,w,U,H),L[0]=R,L[1]=w,L[2]=U,L[3]=H)},scissor:(R,w,U,H)=>{(R!==F[0]||w!==F[1]||U!==F[2]||H!==F[3])&&(e.scissor(R,w,U,H),F[0]=R,F[1]=w,F[2]=U,F[3]=H)},clipControl:r.clipControl?(R,w)=>{(R!==G||w!==z)&&(r.clipControl.clipControl(R,w),G=R,z=w)}:void 0,reset:()=>{t={},a=e.getParameter(e.FRONT_FACE),o=e.getParameter(e.CULL_FACE_MODE),u=e.getParameter(e.DEPTH_WRITEMASK),i=e.getParameter(e.DEPTH_CLEAR_VALUE),p=e.getParameter(e.DEPTH_FUNC),d=e.getParameter(e.COLOR_WRITEMASK),y=e.getParameter(e.COLOR_CLEAR_VALUE),C=e.getParameter(e.BLEND_SRC_RGB),f=e.getParameter(e.BLEND_DST_RGB),b=e.getParameter(e.BLEND_SRC_ALPHA),T=e.getParameter(e.BLEND_DST_ALPHA),S=e.getParameter(e.BLEND_COLOR),l=e.getParameter(e.BLEND_EQUATION_RGB),s=e.getParameter(e.BLEND_EQUATION_ALPHA),g=e.getParameter(e.STENCIL_FUNC),c=e.getParameter(e.STENCIL_VALUE_MASK),h=e.getParameter(e.STENCIL_REF),x=e.getParameter(e.STENCIL_BACK_FUNC),A=e.getParameter(e.STENCIL_BACK_VALUE_MASK),v=e.getParameter(e.STENCIL_BACK_REF),_=e.getParameter(e.STENCIL_WRITEMASK),E=e.getParameter(e.STENCIL_BACK_WRITEMASK),I=e.getParameter(e.STENCIL_FAIL),P=e.getParameter(e.STENCIL_PASS_DEPTH_PASS),V=e.getParameter(e.STENCIL_PASS_DEPTH_FAIL),B=e.getParameter(e.STENCIL_BACK_FAIL),D=e.getParameter(e.STENCIL_BACK_PASS_DEPTH_PASS),M=e.getParameter(e.STENCIL_BACK_PASS_DEPTH_FAIL),q=e.getParameter(e.STENCIL_CLEAR_VALUE),W=e.getParameter(e.MAX_VERTEX_ATTRIBS),O.length=0;for(let R=0;R<W;++R)O[R]=0;L=e.getParameter(e.VIEWPORT),F=e.getParameter(e.SCISSOR_BOX),G=r.clipControl?e.getParameter(r.clipControl.CLIP_ORIGIN):-1,z=r.clipControl?e.getParameter(r.clipControl.CLIP_DEPTH_MODE):-1}}}var Go=`
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
`;var Oo=`
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
`;var No=`
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
`;var ko=`

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
`;var Uo=`
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
`;var zo=`
#if dClipObjectCount != 0 && defined(dClipping)
    #if defined(dClippingType_instance)
        vClipping = readFromTexture(tClipping, aInstance, uClippingTexDim).a;
    #elif defined(dMarkerType_groupInstance)
        vClipping = readFromTexture(tClipping, groupInstanceIndex(aInstance, group), uClippingTexDim).a;
    #endif
#endif
`;var jo=`
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
`;var Wo=`
#ifdef dGeometryType_textureMesh
    float group = unpackRGBToInt(readFromTexture(tGroup, vertexId, uGeoTexDim).rgb);
#else
    float group = aGroup;
#endif
`;var qo=`
#if defined(dNeedsMarker)
    #if defined(dMarkerType_instance)
        vMarker = readFromTexture(tMarker, aInstance, uMarkerTexDim).a;
    #elif defined(dMarkerType_groupInstance)
        vMarker = readFromTexture(tMarker, groupInstanceIndex(aInstance, group), uMarkerTexDim).a;
    #endif
#endif
`;var Ho=`
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
`;var Xo=`
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
`;var Ko=`
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
`;var Qo=`
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
`;var Yo=`
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
`;var $o=`
#if defined(dClipVariant_instance) && dClipObjectCount != 0
    vec3 mCenter = (uModel * aTransform * vec4(InvariantBoundingSphere.xyz, 1.0)).xyz;
    if (clipTest(mCenter / uModelScale)) {
        // move out of [ -w, +w ] to 'discard' in vert shader
        gl_Position.z = 2.0 * gl_Position.w;
    }
#endif
`;var Zo=`
#if defined(dClipVariant_pixel) && dClipObjectCount != 0
    if (clipTest(vModelPosition / uModelScale))
        discard;
#endif
`;var Jo=`
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
`;var ei=`
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
`;var ri=`
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
`;var ti=`
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
`;var ni=`
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
`;var ai=`
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
`;var oi=`
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
    vec2 scaled_v = floor(clamped_v * 15.0 + 0.5); // round to 0\u201315
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
`;var ii=`
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
`;var si=`
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
`;var ui=`
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
// alpha is "roughness squared" in Disney\u2019s reparameterization
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

// Fdez-Ag\xFCera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
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
`;var li=`
varying vec3 vNormal;
`;var ci=`
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
`;var di=`
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
`;var fi=`
#if defined(dSizeType_uniform)
    uniform float uSize;
#elif defined(dSizeType_attribute)
    attribute float aSize;
#elif defined(dSizeType_instance) || defined(dSizeType_group) || defined(dSizeType_groupInstance) || defined(dSizeType_vertex) || defined(dSizeType_vertexInstance)
    uniform vec2 uSizeTexDim;
    uniform sampler2D tSize;
#endif

uniform float uSizeFactor;
`;var mi=`
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
`;var pi=`
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
`;var gi=`
vec4 texture3dFrom2dNearest(sampler2D tex, vec3 pos, vec3 gridDim, vec2 texDim) {
    float zSlice = floor(pos.z * gridDim.z + 0.5); // round to nearest z-slice
    float column = intMod(zSlice * gridDim.x, texDim.x) / gridDim.x;
    float row = floor(intDiv(zSlice * gridDim.x, texDim.x));
    vec2 coord = (vec2(column * gridDim.x, row * gridDim.y) + (pos.xy * gridDim.xy)) / texDim;
    return texture2D(tex, coord);
}
`;var yi=`
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
`;var bi=`
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
`;var hi=`
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
`;var xi=`
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
`;var vi=`
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
`;var Ti=`
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
`;var Ci=`
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
`;var Si=`
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
`;var _i=`
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
`;var Ai=`
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

    // SDF test for glyph fragments \u2014 discard pixels outside glyph+border
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
`;var Ii=`
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
`;var Di=`
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
`;var Ei=`
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
`;var Pi=`
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
`;var Ri=`
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
`;var Vi=`
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
`;var Bi=`
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
`;var Li=`
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
`;var Gi=Ce(),cl={apply_fog:Go,apply_interior_color:Oo,apply_light_color:No,apply_marker_color:ko,apply_marking:Uo,assign_clipping_varying:zo,assign_color_varying:jo,assign_group:Wo,assign_marker_varying:qo,assign_material_color:Ho,assign_position:Xo,assign_size:Ko,check_picking_alpha:Qo,check_transparency:Yo,clip_instance:$o,clip_pixel:Zo,color_frag_params:Jo,color_vert_params:ei,common_animation:ri,common_clip:ti,common_frag_params:ni,common_vert_params:ai,common:oi,fade_lod:ii,float_to_rgba:si,light_frag_params:ui,normal_frag_params:li,read_from_texture:ci,rgba_to_float:di,size_vert_params:fi,texture3d_from_1d_trilinear:mi,texture3d_from_2d_linear:pi,texture3d_from_2d_nearest:gi,wboit_write:yi,dpoit_write:bi},dl=/^(?!\/\/)\s*#include\s+(\S+)/gm,fl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*\+\+i\s*\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g,ml=/[ \t]*\/\/.*\n/g,pl=/[ \t]*\/\*[\s\S]*?\*\//g,gl=/\n{2,}/g;function Fi(e){return e.replace(dl,(r,t)=>{let a=cl[t];if(!a)throw new Error(`empty chunk, '${t}'`);return a}).trim().replace(ml,`
`).replace(pl,`
`).replace(gl,`
`)}function yl(e){return e.replace(fl,bl)}function bl(e,r,t,a){let o="";for(let u=parseInt(r);u<parseInt(t);++u)o+=a.replace(/\[\s*i\s*\]/g,`[${u}]`).replace(/UNROLLED_LOOP_INDEX/g,`${u}`);return o}function hl(e,r){return r.dLightCount&&(e=e.replace(/dLightCount/g,`${r.dLightCount.ref.value}`)),r.dClipObjectCount&&(e=e.replace(/dClipObjectCount/g,`${r.dClipObjectCount.ref.value}`)),e}function Mi(e,r){return yl(hl(e,r))}function kr(e,r,t,a={},o={},u){return{id:Gi(),name:e,vert:Fi(r),frag:Fi(t),extensions:a,outTypes:o,ignoreDefine:u}}function Bt(e,r,t){if(r.startsWith("color")||r==="tracing"){if(e==="dLightCount")return!!t.dIgnoreLight?.ref.value}else{let a=["dSubstanceType","dSubstance","dColorMarker","dCelShaded","dLightCount"];return r!=="depth"&&r!=="marking"&&!r.startsWith("pick")&&a.push("dXrayShaded"),r!=="emissive"&&a.push("dColorType","dUsePalette","dOverpaintType","dOverpaint","dEmissiveType","dEmissive"),a.includes(e)}return!1}function Jt(e,r,t){return e==="dLightCount"?!0:Bt(e,r,t)}var en=kr("points",hi,xi,{drawBuffers:"optional"},{},Jt),rn=kr("spheres",vi,Ti,{fragDepth:"required",drawBuffers:"optional"},{},Bt),tn=kr("cylinders",Ci,Si,{fragDepth:"required",drawBuffers:"optional"},{},Bt),Oi=kr("text",_i,Ai,{fragDepth:"optional",drawBuffers:"optional"},{},Jt),nn=kr("lines",Ii,Di,{drawBuffers:"optional"},{},Jt),gt=kr("mesh",Ei,Pi,{fragDepth:"optional",drawBuffers:"optional"},{},Bt),Ni=kr("direct-volume",Ri,Vi,{fragDepth:"optional",drawBuffers:"optional"},{},Bt),ki=kr("image",Bi,Li,{drawBuffers:"optional"},{},Jt);function wi(e,r){if(e===void 0)return"";let t=e.dRenderVariant?.ref.value||"",a=[];for(let o in e){if(r?.(o,t,e))continue;let i=e[o].ref.value;i!==void 0&&(typeof i=="string"?a.push(`#define ${o}_${i}`):typeof i=="number"?a.push(`#define ${o} ${i}`):typeof i=="boolean"?i&&a.push(`#define ${o}`):tt(i))}return a.join(`
`)+`
`}function xl(e,r){let t=[];if(r.drawBuffers){if(e.drawBuffers)t.push("#define requiredDrawBuffers");else if(r.drawBuffers==="required")throw new Error("required 'GL_EXT_draw_buffers' extension not available")}if(r.multiDraw){if(e.multiDraw)t.push("#extension GL_ANGLE_multi_draw : require"),t.push("#define enabledMultiDraw");else if(r.multiDraw==="required")throw new Error("required 'GL_ANGLE_multi_draw' extension not available")}return t.join(`
`)+`
`}function vl(e,r){let t=["#extension GL_OES_standard_derivatives : enable"];if(r.fragDepth){if(e.fragDepth)t.push("#extension GL_EXT_frag_depth : enable"),t.push("#define enabledFragDepth");else if(r.fragDepth==="required")throw new Error("required 'GL_EXT_frag_depth' extension not available")}if(r.drawBuffers){if(e.drawBuffers)t.push("#extension GL_EXT_draw_buffers : require"),t.push("#define requiredDrawBuffers"),t.push("#define gl_FragColor gl_FragData[0]");else if(r.drawBuffers==="required")throw new Error("required 'GL_EXT_draw_buffers' extension not available")}if(r.shaderTextureLod){if(e.shaderTextureLod)t.push("#extension GL_EXT_shader_texture_lod : enable"),t.push("#define enabledShaderTextureLod");else if(r.shaderTextureLod==="required")throw new Error("required 'GL_EXT_shader_texture_lod' extension not available")}return e.depthTexture&&t.push("#define depthTextureSupport"),t.join(`
`)+`
`}var Tl=`
#define attribute in
#define varying out
#define texture2D texture
`,Cl=`
#define varying in
#define texture2D texture
#define textureCube texture
#define texture2DLodEXT textureLod
#define textureCubeLodEXT textureLod

#define gl_FragColor out_FragData0
#define gl_FragDepthEXT gl_FragDepth
`;function Sl(e,r){let t=["#version 300 es"];if(r.drawBuffers&&e.drawBuffers&&t.push("#define requiredDrawBuffers"),r.multiDraw){if(e.multiDraw)t.push("#extension GL_ANGLE_multi_draw : require"),t.push("#define enabledMultiDraw");else if(r.multiDraw==="required")throw new Error("required 'GL_ANGLE_multi_draw' extension not available")}if(r.clipCullDistance){if(e.clipCullDistance)t.push("#extension GL_ANGLE_clip_cull_distance : enable"),t.push("#define enabledClipCullDistance");else if(r.clipCullDistance==="required")throw new Error("required 'GL_ANGLE_clip_cull_distance' extension not available")}if(r.conservativeDepth){if(e.conservativeDepth)t.push("#extension GL_EXT_conservative_depth : enable"),t.push("#define enabledConservativeDepth");else if(r.conservativeDepth==="required")throw new Error("required 'GL_EXT_conservative_depth' extension not available")}if(r.multiview2){if(e.multiview2)t.push("#extension GL_OVR_multiview2 : require"),t.push("#define enabledMultiview2");else if(r.multiview2==="required")throw new Error("required 'GL_OVR_multiview2' extension not available")}return e.noNonInstancedActiveAttribs&&t.push("#define noNonInstancedActiveAttribs"),t.push(Tl),t.join(`
`)+`
`}function _l(e,r,t,a){let o=["#version 300 es",`layout(location = 0) out highp ${a[0]||"vec4"} out_FragData0;`];if(t.fragDepth&&e.fragDepth&&o.push("#define enabledFragDepth"),t.drawBuffers&&e.drawBuffers){o.push("#define requiredDrawBuffers");for(let u=1,i=r.maxDrawBuffers;u<i;++u)o.push(`layout(location = ${u}) out highp ${a[u]||"vec4"} out_FragData${u};`)}return t.shaderTextureLod&&e.shaderTextureLod&&o.push("#define enabledShaderTextureLod"),e.depthTexture&&o.push("#define depthTextureSupport"),o.push(Cl),o.join(`
`)+`
`}function Al(e){return e.replace(/gl_FragData\[([0-9]+)\]/g,"out_FragData$1")}function Ui(e,r,t,a,o){let u=wi(a,o.ignoreDefine),i=wi(a,o.ignoreDefine),p=te(e)?Sl(r,o.extensions):xl(r,o.extensions),d=te(e)?_l(r,t,o.extensions,o.outTypes):vl(r,o.extensions),y=te(e)?Al(o.frag):o.frag;return{id:Gi(),name:o.name,vert:`${p}${u}${Mi(o.vert,a)}`,frag:`${d}${i}${Mi(y,a)}`,extensions:o.extensions,outTypes:o.outTypes}}function Wi(e,r){switch(r){case"b":case"b[]":return e.BOOL;case"f":case"f[]":return e.FLOAT;case"i":case"i[]":return e.INT;case"v2":case"v2[]":return e.FLOAT_VEC2;case"v3":case"v3[]":return e.FLOAT_VEC3;case"v4":case"v4[]":return e.FLOAT_VEC4;case"q":case"q[]":return e.FLOAT_VEC4;case"iv2":case"iv2[]":return e.INT_VEC2;case"iv3":case"iv3[]":return e.INT_VEC3;case"iv4":case"iv4[]":return e.INT_VEC4;case"m3":case"m3[]":return e.FLOAT_MAT3;case"m4":case"m4[]":return e.FLOAT_MAT4;default:console.error(`unknown uniform kind '${r}'`)}}function qi(e){return e.endsWith("[]")}function Il(e,r,t){e.uniform1f(r,t)}function Dl(e,r,t){e.uniform1fv(r,t)}function El(e,r,t){e.uniform1i(r,t)}function Pl(e,r,t){e.uniform1iv(r,t)}function Rl(e,r,t){e.uniform2fv(r,t)}function Vl(e,r,t){e.uniform3fv(r,t)}function zi(e,r,t){e.uniform4fv(r,t)}function Bl(e,r,t){e.uniform2iv(r,t)}function Ll(e,r,t){e.uniform3iv(r,t)}function Fl(e,r,t){e.uniform4iv(r,t)}function Ml(e,r,t){e.uniformMatrix3fv(r,!1,t)}function wl(e,r,t){e.uniformMatrix4fv(r,!1,t)}function ji(e){switch(e){case"f":return Il;case"f[]":return Dl;case"i":case"t":case"b":return El;case"i[]":case"t[]":case"b[]":return Pl;case"v2":case"v2[]":return Rl;case"v3":case"v3[]":return Vl;case"v4":case"v4[]":return zi;case"q":case"q[]":return zi;case"iv2":case"iv2[]":return Bl;case"iv3":case"iv3[]":return Ll;case"iv4":case"iv4[]":return Fl;case"m3":case"m3[]":return Ml;case"m4":case"m4[]":return wl}}function Hi(e){let r={};return Object.keys(e).forEach(t=>{let a=e[t];a.type==="uniform"?r[t]=ji(a.kind):a.type==="texture"&&(r[t]=ji("t"))}),r}function Xi(e){let r={};return Object.keys(e).forEach(t=>{r[t]=n.create(jt(e[t].ref.value))}),r}var Ki=Ce();function Gl(e,r){switch(r){case"static":return e.STATIC_DRAW;case"dynamic":return e.DYNAMIC_DRAW;case"stream":return e.STREAM_DRAW;default:tt(r)}}function Ol(e,r){if(r instanceof Uint8Array)return e.UNSIGNED_BYTE;if(r instanceof Int8Array)return e.BYTE;if(r instanceof Uint16Array)return e.UNSIGNED_SHORT;if(r instanceof Int16Array)return e.SHORT;if(r instanceof Uint32Array)return e.UNSIGNED_INT;if(r instanceof Int32Array)return e.INT;if(r instanceof Float32Array)return e.FLOAT;tt(r)}function Nl(e,r){switch(r){case"attribute":return e.ARRAY_BUFFER;case"elements":return e.ELEMENT_ARRAY_BUFFER;case"uniform":if(te(e))return e.UNIFORM_BUFFER;throw new Error("WebGL2 is required for uniform buffers");case"pixel-pack":if(te(e))return e.PIXEL_PACK_BUFFER;throw new Error("WebGL2 is required for pixel-pack buffers")}}function an(e){let r=e.createBuffer();if(r===null)throw new Error("Could not create WebGL buffer");return r}function Qi(e,r,t,a){let o=an(e),u=Gl(e,t),i=Nl(e,a),p=Ol(e,r),d=r.BYTES_PER_ELEMENT,y=r.length;function C(b){e.bindBuffer(i,o),e.bufferData(i,b,u)}C(r);let f=!1;return{id:Ki(),_usageHint:u,_bufferType:i,_dataType:p,_bpe:d,length:y,getByteCount:()=>d*y,getBuffer:()=>o,updateData:C,updateSubData:(b,T,S)=>{e.bindBuffer(i,o),S-T===b.length?e.bufferSubData(i,0,b):e.bufferSubData(i,T*d,b.subarray(T,T+S))},reset:()=>{o=an(e),C(r)},destroy:()=>{f||(e.deleteBuffer(o),f=!0)}}}function Yi(e,r,t){switch(r){case"float32":switch(t){case 1:return e.FLOAT;case 2:return e.FLOAT_VEC2;case 3:return e.FLOAT_VEC3;case 4:return e.FLOAT_VEC4;case 16:return e.FLOAT_MAT4}default:tt(r)}}function $i(e,r,t,a,o,u,i="static"){let{instancedArrays:p}=t,d=Qi(e,a,i,"attribute"),{_bufferType:y,_dataType:C,_bpe:f}=d;return{...d,divisor:u,bind:b=>{if(e.bindBuffer(y,d.getBuffer()),o===16)for(let T=0;T<4;++T)r.enableVertexAttrib(b+T),e.vertexAttribPointer(b+T,4,C,!1,16*f,T*4*f),p.vertexAttribDivisor(b+T,u);else r.enableVertexAttrib(b),e.vertexAttribPointer(b,o,C,!1,0,0),p.vertexAttribDivisor(b,u)},changeOffset:(b,T)=>{let S=T*f*o;if(e.bindBuffer(y,d.getBuffer()),o===16)for(let l=0;l<4;++l)e.vertexAttribPointer(b+l,4,C,!1,16*f,l*4*f+S);else e.vertexAttribPointer(b,o,C,!1,0,S)}}}function Zi(e,r,t){let a=[];return Object.keys(r).forEach(o=>{let u=r[o];u.type==="attribute"&&(a[a.length]=[o,e.resources.attribute(t[o].ref.value,u.itemSize,u.divisor)])}),a}function Ji(e,r,t="static"){let a=Qi(e,r,t,"elements");return{...a,bind:()=>{e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,a.getBuffer())}}}function es(e,r,t,a){let o=an(e),u=Wn(e,r,a),i=on(e,t,a),p=jn(t,a),d=0,y=0;function C(T,S,l,s){d=l,y=s,e.bindBuffer(e.PIXEL_PACK_BUFFER,o),e.bufferData(e.PIXEL_PACK_BUFFER,l*s*p,e.STREAM_READ),e.readPixels(T,S,l,s,i,u,0),e.bindBuffer(e.PIXEL_PACK_BUFFER,null)}function f(T){e.bindBuffer(e.PIXEL_PACK_BUFFER,o),e.getBufferSubData(e.PIXEL_PACK_BUFFER,0,T),e.bindBuffer(e.PIXEL_PACK_BUFFER,null)}let b=!1;return{id:Ki(),_type:u,_format:i,_bpe:p,getByteCount:()=>p*d*y,read:C,getSubData:f,reset:()=>{o=an(e)},destroy:()=>{b||(e.deleteBuffer(o),b=!0)}}}var kl=Ce();function Ul(e,r,t){let a={};return Object.keys(t).forEach(o=>{let u=t[o];if(u.type==="attribute"){let i=e.getAttribLocation(r,o);a[o]=i}else if(u.type==="uniform"){let i=e.getUniformLocation(r,o);i===null&&qi(u.kind)&&(i=e.getUniformLocation(r,o+"[0]")),a[o]=i}else if(u.type==="texture"){let i=e.getUniformLocation(r,o);a[o]=i}}),a}function zl(e,r,t){let a=e.getProgramParameter(r,e.ACTIVE_ATTRIBUTES);for(let o=0;o<a;++o){let u=e.getActiveAttrib(r,o);if(u){let{name:i,type:p}=u;if(i.startsWith("__activeAttribute")||i==="gl_InstanceID"||i==="gl_VertexID"||i==="gl_DrawID"||i==="gl_ViewID_OVR")continue;let d=t[i];if(d===void 0)throw new Error(`missing 'uniform' or 'texture' with name '${i}' in schema`);if(d.type!=="attribute")throw new Error(`'${i}' must be of type 'attribute' but is '${d.type}'`);let y=Yi(e,d.kind,d.itemSize);if(y!==p)throw new Error(`unexpected attribute type '${y}' for ${i}, expected '${p}'`)}}}function jl(e,r,t){let a=e.getProgramParameter(r,e.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){let u=e.getActiveUniform(r,o);if(u){let{name:i,type:p}=u;if(i.startsWith("__activeUniform")||i==="gl_InstanceID"||i==="gl_VertexID"||i==="gl_DrawID"||i==="gl_ViewID_OVR")continue;let d=i.replace(/[[0-9]+\]$/,""),y=t[d];if(y===void 0)throw new Error(`missing 'uniform' or 'texture' with name '${i}' in schema`);if(y.type==="uniform"){if(Wi(e,y.kind)!==p)throw new Error(`unexpected uniform type for ${i}`)}else if(y.type==="texture"){if(y.kind==="image-float32"||y.kind==="image-uint8"){if(p!==e.SAMPLER_2D)throw new Error(`unexpected sampler type for '${i}'`)}else if(y.kind==="volume-float32"||y.kind==="volume-uint8")if(te(e)){if(p!==e.SAMPLER_3D)throw new Error(`unexpected sampler type for '${i}'`)}else throw new Error("WebGL2 is required to use SAMPLER_3D")}else throw new Error(`'${i}' must be of type 'uniform' or 'texture' but is '${y.type}'`)}}}function Wl(e,r){if(!e.getProgramParameter(r,e.LINK_STATUS))throw new Error(`Could not compile WebGL program. 

${e.getProgramInfoLog(r)}`)}function sn(e){let r=e.createProgram();if(r===null)throw new Error("Could not create WebGL program");return r}function ql(e){if(typeof e!="string")throw new Error(`unknown program variant: ${e}`);return e.startsWith("color")?"color":e.startsWith("pick")?"pick":e}function rs(e,r,t,a,o,u){let{defineValues:i,shaderCode:p,schema:d}=u,y=sn(e),C=kl(),f=ql(i.dRenderVariant.ref.value),b=Ui(e,t,a,i,p),T=o("vert",b.vert),S=o("frag",b.frag),l,s,g=!1,c=!1,h=!1;function x(){T.attach(y),S.attach(y),e.linkProgram(y),ie&&Wl(e,y),g=!0}f==="compute"&&x();function A(){l=Ul(e,y,d),s=Hi(d),ie&&(zl(e,y,d),jl(e,y,d)),c=!0}return{id:C,variant:f,isReady:()=>c,link:()=>{g||x()},finalize(v){return g||x(),!c&&(v||!t.parallelShaderCompile||e.getProgramParameter(y,t.parallelShaderCompile.COMPLETION_STATUS))&&A(),c},use:()=>{if(ie&&!c)throw new Error(`program not finalized: ${f}`);r.currentProgramId=C,e.useProgram(y)},setUniforms:v=>{for(let _=0,E=v.length;_<E;++_){let[I,P]=v[_];if(P){let V=l[I];V!==null&&s[I](e,V,P.ref.value)}}},uniform:(v,_)=>{let E=l[v];E!==null&&s[v](e,E,_)},bindAttributes:v=>{r.clearVertexAttribsState();for(let _=0,E=v.length;_<E;++_){let[I,P]=v[_],V=l[I];V!==-1&&P.bind(V)}r.disableUnusedVertexAttribs()},offsetAttributes:(v,_)=>{for(let E=0,I=v.length;E<I;++E){let[P,V]=v[E],B=l[P];B!==-1&&V.changeOffset(B,_)}},bindTextures:(v,_)=>{for(let E=0,I=v.length;E<I;++E){let[P,V]=v[E],B=l[P];B!=null&&(V.bind(E+_),s[P](e,B,E+_))}},reset:()=>{y=sn(e),g&&x(),c&&A()},destroy:()=>{h||(T.destroy(),S.destroy(),e.deleteProgram(y),h=!0)}}}var Hl=Ce();function Xl(e){let r=e.split(`
`);for(let t=0;t<r.length;++t)r[t]=t+1+": "+r[t];return r.join(`
`)}function Lt(e,r){let{type:t,source:a}=r,o=e.createShader(t==="vert"?e.VERTEX_SHADER:e.FRAGMENT_SHADER);if(o===null)throw new Error(`Error creating ${t} shader`);if(e.shaderSource(o,a),e.compileShader(o),ie&&e.getShaderParameter(o,e.COMPILE_STATUS)===!1)throw console.warn(`'${t}' shader info log '${e.getShaderInfoLog(o)}'
${Xl(a)}`),new Error(`Error compiling ${t} shader`);return o}function ts(e,r){let t=Lt(e,r);return{id:Hl(),attach:a=>{e.attachShader(a,t)},reset:()=>{t=Lt(e,r)},destroy:()=>{e.deleteShader(t)}}}function Kl(e,r=0){return{value:e,usageCount:r}}function Ql(e){return{free:()=>{e.usageCount-=1},value:e.value}}function qn(e,r,t){let a=new Map,o=[];return{get:u=>{let i=e(u),p=a.get(i);return p||(p=Kl(r(u)),a.set(i,p),o.push(p.value)),p.usageCount+=1,Ql(p)},clear:()=>{a.forEach((u,i)=>{u.usageCount<=0&&(u.usageCount<0&&console.warn("Reference usageCount below zero."),t(u.value),a.delete(i),ka(o,u.value))})},get count(){return a.size},values:o,dispose:()=>{a.forEach(u=>t(u.value)),a.clear(),o.length=0}}}var Yl=Ce();function $l(e,r){switch(r){case"depth16":return e.DEPTH_COMPONENT16;case"stencil8":return e.STENCIL_INDEX8;case"rgba4":return e.RGBA4;case"depth-stencil":return e.DEPTH_STENCIL;case"depth24":if(te(e))return e.DEPTH_COMPONENT24;throw new Error("WebGL2 needed for `depth24` renderbuffer format");case"depth32f":if(te(e))return e.DEPTH_COMPONENT32F;throw new Error("WebGL2 needed for `depth32f` renderbuffer format");case"depth24-stencil8":if(te(e))return e.DEPTH24_STENCIL8;throw new Error("WebGL2 needed for `depth24-stencil8` renderbuffer format");case"depth32f-stencil8":if(te(e))return e.DEPTH32F_STENCIL8;throw new Error("WebGL2 needed for `depth32f-stencil8` renderbuffer format")}}function Zl(e){switch(e){case"depth16":return 4;case"stencil8":return 2;case"rgba4":return 4;case"depth-stencil":return 4;case"depth24":return 3;case"depth32f":return 4;case"depth24-stencil8":return 4;case"depth32f-stencil8":return 5}}function Jl(e,r){switch(r){case"depth":return e.DEPTH_ATTACHMENT;case"stencil":return e.STENCIL_ATTACHMENT;case"depth-stencil":return e.DEPTH_STENCIL_ATTACHMENT;case"color0":return e.COLOR_ATTACHMENT0}}function ns(e){let r=e.createRenderbuffer();if(r===null)throw new Error("Could not create WebGL renderbuffer");return r}function as(e,r,t,a,o){let u=ns(e),i=()=>e.bindRenderbuffer(e.RENDERBUFFER,u),p=$l(e,r),d=Jl(e,t);function y(){i(),e.renderbufferStorage(e.RENDERBUFFER,p,a,o)}y();let C=!1;return{id:Yl(),getByteCount:()=>Zl(r)*a*o,bind:i,attachFramebuffer:f=>{f.bind(),i(),e.framebufferRenderbuffer(e.FRAMEBUFFER,d,e.RENDERBUFFER,u),ie&&pt(e)},detachFramebuffer:f=>{f.bind(),i(),e.framebufferRenderbuffer(e.FRAMEBUFFER,d,e.RENDERBUFFER,null),ie&&pt(e)},setSize:(f,b)=>{a=f,o=b,y()},reset:()=>{u=ns(e),y()},destroy:()=>{C||(e.deleteRenderbuffer(u),C=!0)}}}var ec=Ce();function os(e){let{vertexArrayObject:r}=e;if(!r)throw new Error("VertexArrayObject not supported");let t=r.createVertexArray();if(!t)throw new Error("Could not create WebGL vertex array");return t}function is(e){let{vertexArrayObject:r}=e;if(r===null)throw new Error("VertexArrayObject not supported");return r}function ss(e,r,t,a,o){let u=ec(),i=os(r),p=is(r);function d(){p.bindVertexArray(i),o&&o.bind(),t.bindAttributes(a),p.bindVertexArray(null),y=!0}let y=!1,C=!1;return{id:u,bind:()=>{y||d(),p.bindVertexArray(i)},update:d,reset:()=>{i=os(r),p=is(r),y=!1},destroy:()=>{C||(o&&(p.bindVertexArray(i),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),p.deleteVertexArray(i),C=!0)}}}function rc(e){return typeof e=="boolean"?e?1:0:typeof e=="number"?e*1e4:Fn(e)}function us(e){return{...e.value,destroy:()=>{e.free()}}}function ds(e,r,t,a,o){let u={attribute:new Set,elements:new Set,pixelPack:new Set,framebuffer:new Set,program:new Set,renderbuffer:new Set,shader:new Set,texture:new Set,cubeTexture:new Set,vertexArray:new Set};function i(f,b){return u[f].add(b),t.resourceCounts[f]+=1,{...b,destroy:()=>{b.destroy(),u[f].delete(b),t.resourceCounts[f]-=1}}}let p=qn(f=>JSON.stringify(f),f=>i("shader",ts(e,f)),f=>{f.destroy()});function d(f,b){return us(p.get({type:f,source:b}))}let y=new Set,C=qn(f=>{let b=[f.shaderCode.id],T=f.defineValues.dRenderVariant?.ref.value||"";return Object.keys(f.defineValues).forEach(S=>{f.shaderCode.ignoreDefine?.(S,T,f.defineValues)||b.push(Fn(S),rc(f.defineValues[S].ref.value))}),Ve(b).toString()},f=>{let b=rs(e,r,a,o,d,f);return b.variant!=="compute"&&y.add(b),i("program",b)},f=>{y.delete(f),f.destroy()});return{attribute:(f,b,T,S)=>i("attribute",$i(e,r,a,f,b,T,S)),elements:(f,b)=>i("elements",Ji(e,f,b)),pixelPack:(f,b)=>{if(!te(e))throw new Error("WebGL2 is required for pixel-pack buffers");return i("pixelPack",es(e,a,f,b))},framebuffer:()=>i("framebuffer",Za(e)),program:(f,b,T)=>us(C.get({defineValues:f,shaderCode:b,schema:T})),renderbuffer:(f,b,T,S)=>i("renderbuffer",as(e,f,b,T,S)),shader:d,texture:(f,b,T,S)=>i("texture",ls(e,a,f,b,T,S)),cubeTexture:(f,b,T)=>i("cubeTexture",cs(e,f,b,T)),vertexArray:(f,b,T)=>i("vertexArray",ss(e,a,f,b,T)),getByteCounts:()=>{let f=0;u.texture.forEach(g=>{f+=g.getByteCount()});let b=0;u.cubeTexture.forEach(g=>{b+=g.getByteCount()});let T=0;u.attribute.forEach(g=>{T+=g.getByteCount()});let S=0;u.elements.forEach(g=>{S+=g.getByteCount()});let l=0;u.pixelPack.forEach(g=>{l+=g.getByteCount()});let s=0;return u.renderbuffer.forEach(g=>{s+=g.getByteCount()}),{texture:f,cubeTexture:b,attribute:T,elements:S,pixelPack:l,renderbuffer:s}},linkPrograms:f=>{for(let b of y)f&&!f.includes(b.variant)||b.link()},finalizePrograms:(f,b)=>{let T=!0,S=0;for(let c of y)c.isReady()&&y.delete(c),(!f||f.includes(c.variant))&&(T=!1,S+=1);if(T)return!0;let l=!0,s=0,g=$r();for(let c of y)if(!(f&&!f.includes(c.variant))&&(c.finalize(b)?(y.delete(c),s+=1):l=!1,!b&&$r()-g>16)){l=!1;break}return ar&&console.log(`Finalized ${s} of ${S} programs (${f?f.join(", "):"all"}) in ${($r()-g).toFixed(2)} ms`),l},reset:()=>{u.attribute.forEach(f=>f.reset()),u.elements.forEach(f=>f.reset()),u.pixelPack.forEach(f=>f.reset()),u.framebuffer.forEach(f=>f.reset()),u.renderbuffer.forEach(f=>f.reset()),u.shader.forEach(f=>f.reset()),u.program.forEach(f=>f.reset()),u.vertexArray.forEach(f=>f.reset()),u.texture.forEach(f=>f.reset()),u.cubeTexture.forEach(f=>f.reset())},destroy:()=>{u.attribute.forEach(f=>f.destroy()),u.elements.forEach(f=>f.destroy()),u.pixelPack.forEach(f=>f.destroy()),u.framebuffer.forEach(f=>f.destroy()),u.renderbuffer.forEach(f=>f.destroy()),u.shader.forEach(f=>f.destroy()),u.program.forEach(f=>f.destroy()),u.vertexArray.forEach(f=>f.destroy()),u.texture.forEach(f=>f.destroy()),u.cubeTexture.forEach(f=>f.destroy()),p.clear(),C.clear(),y.clear()}}}var tc=Ce();function fs(e,r,t,a,o="depth",u="uint8",i="nearest",p="rgba"){if(p==="alpha"&&!te(e))throw new Error("cannot render to alpha format in webgl1");let d=r.framebuffer(),y=u==="fp16"?r.texture("image-float16",p,"fp16",i):u==="float32"?r.texture("image-float32",p,"float",i):r.texture("image-uint8",p,"ubyte",i),C=o==="none"?null:o==="depth-stencil"?r.renderbuffer(te(e)?"depth32f-stencil8":"depth-stencil","depth-stencil",t,a):r.renderbuffer(te(e)?"depth32f":"depth16","depth",t,a);function f(){y.define(t,a),y.attachFramebuffer(d,"color0"),C&&C.attachFramebuffer(d)}f();let b=!1;return{id:tc(),texture:y,framebuffer:d,depthRenderbuffer:C,getByteCount:()=>y.getByteCount()+(C?C.getByteCount():0),getWidth:()=>t,getHeight:()=>a,bind:()=>{d.bind()},setSize:(T,S)=>{t===T&&a===S||(t=T,a=S,y.define(t,a),C&&C.setSize(t,a))},reset:()=>{f()},destroy:()=>{b||(y.destroy(),d.destroy(),C&&C.destroy(),b=!0)}}}function nc(e,r,t){return e-=e/t,e+=r/t,e}var un=class{constructor(r){this.count=r;this.avgs=new Map}add(r,t){let a=this.avgs.get(r)||t;return a=nc(a,t,this.count),this.avgs.set(r,a),a}get(r){return this.avgs.get(r)}stats(){return Object.fromEntries(this.avgs.entries())}clear(){this.avgs.clear()}};function ac(e){e.calls.drawInstanced=0,e.calls.drawInstancedBase=0,e.calls.multiDrawInstancedBase=0,e.calls.counts=0,e.culled.lod=0,e.culled.frustum=0,e.culled.occlusion=0,e.cacheHits.cull=0}function oc(e){return e.disjointTimerQuery?e.disjointTimerQuery.createQuery():null}function ms(e,r,t,a){let o=r.disjointTimerQuery,u=a?.avgCount??30,i=new Map,p=new Map,d=[],y=new un(u),C=new un(u),f=[],b=null,T=!1,S=()=>{p.clear(),d.length=0,y.clear(),C.clear(),f=[],b=null,T=!1,o&&i.forEach((s,g)=>{o.deleteQuery(g)}),i.clear()},l=()=>{if(!o)return;let s=oc(r);s&&(o.beginQuery(o.TIME_ELAPSED,s),p.forEach((g,c)=>{g.queries.push(s)}),i.set(s,{refCount:p.size}),b=s)};return{resolve:()=>{let s=[];if(!o||!f.length||T)return s;i.forEach((c,h)=>{if(c.timeElapsed!==void 0)return;let x=o.getQueryParameter(h,o.QUERY_RESULT_AVAILABLE),A=e.getParameter(o.GPU_DISJOINT);if(x&&!A){let v=o.getQueryParameter(h,o.QUERY_RESULT);c.timeElapsed=v}(x||A)&&o.deleteQuery(h)});let g=[];for(let c of f)if(c.queries.every(h=>i.get(h)?.timeElapsed!==void 0)){let h=0;for(let x of c.queries){let A=i.get(x);h+=A.timeElapsed,A.refCount-=1}if(c.timeElapsed=h,c.root){let x=[],A=(_,E)=>{for(let I of _){let P=I.timeElapsed,V=I.cpu.end-I.cpu.start,B={label:I.label,gpuElapsed:P,gpuAvg:y.add(I.label,P),cpuElapsed:V,cpuAvg:C.add(I.label,V),children:[],calls:I.calls,note:I.note};E.push(B),A(I.children,B.children)}};A(c.children,x);let v=c.cpu.end-c.cpu.start;s.push({label:c.label,gpuElapsed:h,gpuAvg:y.add(c.label,h),cpuElapsed:v,cpuAvg:C.add(c.label,v),children:x,calls:c.calls,note:c.note})}}else g.push(c);return f=g,i.forEach((c,h)=>{c.refCount===0&&i.delete(h)}),s},mark:(s,g)=>{if(!o)return;if(p.has(s))throw new Error(`Timer mark for '${s}' already exists`);let c=g?.captureStats??!1;b!==null&&o.endQuery(o.TIME_ELAPSED);let h={label:s,queries:[],children:[],root:b===null,cpu:{start:$r(),end:-1},captureStats:c};if(g?.note&&(h.note=g.note),p.set(s,h),d.length&&d[d.length-1].children.push(h),d.push(h),c){if(T)throw new Error("Already capturing stats");ac(t),T=!0}l()},markEnd:s=>{if(!o)return;let g=p.get(s);if(!g)throw new Error(`Timer mark for '${s}' does not exist`);if(d.pop()?.label!==s)throw new Error(`Timer mark for '${s}' has pending nested mark`);o.endQuery(o.TIME_ELAPSED),p.delete(s),g.cpu.end=$r(),g.captureStats&&(g.calls={...t.calls},T=!1),f.push(g),p.size>0?l():b=null},stats:()=>({gpu:y.stats(),cpu:C.stats()}),formatedStats:()=>{let s={},g=y.stats(),c=C.stats();for(let h of Object.keys(g)){let x=`${(g[h]/1e3/1e3).toFixed(2)}`,A=`${c[h].toFixed(2)}`;s[h]=`${x} ms | CPU: ${A} ms`}return s},clear:S,destroy:()=>{S()}}}function ic(e){let r=`${(e.gpuElapsed/1e3/1e3).toFixed(2)}`,t=`${(e.gpuAvg/1e3/1e3).toFixed(2)}`,a=`${e.cpuElapsed.toFixed(2)}`,o=`${e.cpuAvg.toFixed(2)}`;return`${e.label} ${r} ms (avg. ${t} ms) | CPU: ${a} ms (avg. ${o} ms)`}function sc(e){e.map(r=>{let t=ic(r);r.children.length||r.calls||r.note?(console.groupCollapsed(t),r.calls&&console.log(r.calls),r.note&&console.log(r.note),sc(r.children),console.groupEnd()):console.log(t)})}function Ny(e,r){function t(o){try{return e.getContext(o,r)}catch{return null}}let a=(r?.preferWebGl1?null:t("webgl2"))||t("webgl")||t("experimental-webgl");return ie&&console.log(`isWebgl2: ${te(a)}`),a}function Xn(e,r){switch(r){case e.NO_ERROR:return"no error";case e.INVALID_ENUM:return"invalid enum";case e.INVALID_VALUE:return"invalid value";case e.INVALID_OPERATION:return"invalid operation";case e.INVALID_FRAMEBUFFER_OPERATION:return"invalid framebuffer operation";case e.OUT_OF_MEMORY:return"out of memory";case e.CONTEXT_LOST_WEBGL:return"context lost"}return"unknown error"}function ys(e,r){let t=e.getError();t!==e.NO_ERROR&&console.log(`WebGL error: '${Xn(e,t)}'${r?` (${r})`:""}`)}function uc(e){let r=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);for(let o=0;o<r;++o)e.activeTexture(e.TEXTURE0+o),e.bindTexture(e.TEXTURE_2D,null),e.bindTexture(e.TEXTURE_CUBE_MAP,null),te(e)&&(e.bindTexture(e.TEXTURE_2D_ARRAY,null),e.bindTexture(e.TEXTURE_3D,null));let t=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,t);let a=e.getParameter(e.MAX_VERTEX_ATTRIBS);for(let o=0;o<a;++o)e.vertexAttribPointer(o,1,e.FLOAT,!1,0,0);e.bindBuffer(e.ARRAY_BUFFER,null),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null),te(e)&&(e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBuffer(e.PIXEL_PACK_BUFFER,null))}var bs=new Uint8Array(4);function hs(e,r,t){e.getSyncParameter(r,e.SYNC_STATUS)===e.SIGNALED?(e.deleteSync(r),t()):Ln.setImmediate(hs,e,r,t)}function lc(e,r){let t=e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0);t?Ln.setImmediate(hs,e,t,r):(console.warn("Could not create a WebGLSync object"),e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,bs),r())}var ps=!1;function cc(e){return new Promise(r=>{te(e)?lc(e,r):(ps||(console.info("Sync object not supported in WebGL"),ps=!0),xs(e),r())})}function xs(e){e.bindFramebuffer(e.FRAMEBUFFER,null),e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,bs)}function dc(e,r,t,a,o,u){if(ie&&pt(e),u instanceof Uint8Array)e.readPixels(r,t,a,o,e.RGBA,e.UNSIGNED_BYTE,u);else if(u instanceof Float32Array)e.readPixels(r,t,a,o,e.RGBA,e.FLOAT,u);else if(u instanceof Int32Array&&te(e))e.readPixels(r,t,a,o,e.RGBA_INTEGER,e.INT,u);else throw new Error("unsupported readPixels buffer type");ie&&ys(e)}function Hn(e,r){r?e.bindFramebuffer(e.FRAMEBUFFER,r.framebuffer):e.bindFramebuffer(e.FRAMEBUFFER,null)}function ln(e,r,t){let a=r?.framebufferWidth??e.drawingBufferWidth;t==="screen-space"&&(a*=2);let o=r?.framebufferHeight??e.drawingBufferHeight;return{width:a,height:o}}function yt(e,r,t,a){let o=r==="vertex"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,u=e[`${t.toUpperCase()}_${a.toUpperCase()}`];return e.getShaderPrecisionFormat(o,u)}function gs(e,r){return{lowFloat:yt(e,r,"low","float"),mediumFloat:yt(e,r,"medium","float"),highFloat:yt(e,r,"high","float"),lowInt:yt(e,r,"low","int"),mediumInt:yt(e,r,"medium","int"),highInt:yt(e,r,"high","int")}}function fc(){return{resourceCounts:{attribute:0,elements:0,pixelPack:0,framebuffer:0,program:0,renderbuffer:0,shader:0,texture:0,cubeTexture:0,vertexArray:0},drawCount:0,instanceCount:0,instancedDrawCount:0,calls:{drawInstanced:0,drawInstancedBase:0,multiDrawInstancedBase:0,counts:0},culled:{lod:0,frustum:0,occlusion:0},cacheHits:{cull:0}}}function mc(e,r){return{maxTextureSize:e.getParameter(e.MAX_TEXTURE_SIZE),max3dTextureSize:te(e)?e.getParameter(e.MAX_3D_TEXTURE_SIZE):0,maxRenderbufferSize:e.getParameter(e.MAX_RENDERBUFFER_SIZE),maxDrawBuffers:r.drawBuffers?e.getParameter(r.drawBuffers.MAX_DRAW_BUFFERS):0,maxTextureImageUnits:e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextureImageUnits:e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)}}function ky(e,r={}){let t=zn(e),a=wo(e,t),o=fc(),u=mc(e,t),i=ds(e,a,o,t,u),p=ms(e,t,o);if(u.maxVertexTextureImageUnits<8)throw new Error('Need "MAX_VERTEX_TEXTURE_IMAGE_UNITS" >= 8');let d={vertex:gs(e,"vertex"),fragment:gs(e,"fragment")};ie&&console.log({parameters:u,shaderPrecisionFormats:d});let y=t.provokingVertex;y?.provokingVertex(y.FIRST_VERTEX_CONVENTION);let C=!1,f=new wn,b=r.pixelScale||1,T={session:void 0,layer:void 0,changed:new wn,clear:()=>{T.layer=void 0,T.session=void 0,T.changed.next()}},S=new Set;return{gl:e,isWebGL2:te(e),get pixelRatio(){return(typeof window<"u"&&window.devicePixelRatio||1)*(b||1)},extensions:t,state:a,stats:o,resources:i,timer:p,get maxTextureSize(){return u.maxTextureSize},get max3dTextureSize(){return u.max3dTextureSize},get maxRenderbufferSize(){return u.maxRenderbufferSize},get maxDrawBuffers(){return u.maxDrawBuffers},get maxTextureImageUnits(){return u.maxTextureImageUnits},get shaderPrecisionFormats(){return d},namedComputeRenderables:Object.create(null),namedFramebuffers:Object.create(null),namedTextures:Object.create(null),get isContextLost(){return C||e.isContextLost()},contextRestored:f,setContextLost:()=>{C=!0,p.clear()},handleContextRestored:l=>{eo(e,t),a.reset(),a.currentMaterialId=-1,a.currentProgramId=-1,a.currentRenderItemId=-1,i.reset(),S.forEach(s=>s.reset()),l?.(),C=!1,f.next($r())},xr:{get session(){return T.session},changed:T.changed,set:async(l,s)=>{if(T.session!==l&&(await T.session?.end(),l!==void 0))try{await e.makeXRCompatible(),T.session=l,T.layer=new XRWebGLLayer(T.session,e,{antialias:!0,alpha:!0,depth:!0,stencil:!0,framebufferScaleFactor:b*(s?.resolutionScale??1)}),await T.session.updateRenderState({baseLayer:T.layer}),T.session.addEventListener("end",T.clear),T.changed.next()}catch(g){throw l?await l.end():(T.layer=void 0,T.session=void 0),g}},end:async()=>T.session?.end()},setPixelScale:l=>{b=l},createRenderTarget:(l,s,g,c,h,x)=>{let A=fs(e,i,l,s,g,c,h,x);return S.add(A),{...A,destroy:()=>{A.destroy(),S.delete(A)}}},createDrawTarget:()=>({id:-1,texture:Te(e),framebuffer:Ja(),depthRenderbuffer:null,getByteCount:()=>0,getWidth:()=>ln(e,T.layer,T.session?.interactionMode).width,getHeight:()=>ln(e,T.layer,T.session?.interactionMode).height,bind:()=>{Hn(e,T.layer)},setSize:()=>{},reset:()=>{},destroy:()=>{}}),bindDrawingBuffer:()=>Hn(e,T.layer),getDrawingBufferSize:()=>ln(e,T.layer,T.session?.interactionMode),readPixels:(l,s,g,c,h)=>{dc(e,l,s,g,c,h)},waitForGpuCommandsComplete:()=>cc(e),waitForGpuCommandsCompleteSync:()=>xs(e),getFenceSync:()=>te(e)?e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0):null,checkSyncStatus:l=>te(e)?e.getSyncParameter(l,e.SYNC_STATUS)===e.SIGNALED?(e.deleteSync(l),!0):!1:!0,deleteSync:l=>{te(e)&&e.deleteSync(l)},clear:(l,s,g,c)=>{let h=ln(e,T.layer);Hn(e,T.layer),a.enable(e.SCISSOR_TEST),a.depthMask(!0),a.colorMask(!0,!0,!0,!0),a.clearColor(l,s,g,c),a.viewport(0,0,h.width,h.height),a.scissor(0,0,h.width,h.height),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT)},checkError:l=>{ys(e,l)},checkFramebufferStatus:l=>{pt(e,l)},destroy:l=>{i.destroy(),uc(e),T.session?.removeEventListener("end",T.clear),T.session?.end(),f.complete(),T.changed.complete(),l?.doNotForceWebGLContextLoss||(e.getExtension("WEBGL_lose_context")?.loseContext(),e.getExtension("STACKGL_destroy_context")?.destroy())}}}function te(e){return typeof WebGL2RenderingContext<"u"&&e instanceof WebGL2RenderingContext}function ro(e){if(te(e))return{drawArraysInstanced:e.drawArraysInstanced.bind(e),drawElementsInstanced:e.drawElementsInstanced.bind(e),vertexAttribDivisor:e.vertexAttribDivisor.bind(e),VERTEX_ATTRIB_ARRAY_DIVISOR:e.VERTEX_ATTRIB_ARRAY_DIVISOR};{let r=e.getExtension("ANGLE_instanced_arrays");return r===null?null:{drawArraysInstanced:r.drawArraysInstancedANGLE.bind(r),drawElementsInstanced:r.drawElementsInstancedANGLE.bind(r),vertexAttribDivisor:r.vertexAttribDivisorANGLE.bind(r),VERTEX_ATTRIB_ARRAY_DIVISOR:r.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE}}}function to(e){if(te(e))return{FRAGMENT_SHADER_DERIVATIVE_HINT:e.FRAGMENT_SHADER_DERIVATIVE_HINT};{let r=e.getExtension("OES_standard_derivatives");return r===null?null:{FRAGMENT_SHADER_DERIVATIVE_HINT:r.FRAGMENT_SHADER_DERIVATIVE_HINT_OES}}}function no(e){return te(e)?{}:e.getExtension("OES_element_index_uint")}function ao(e){if(te(e))return{VERTEX_ARRAY_BINDING:e.VERTEX_ARRAY_BINDING,bindVertexArray:e.bindVertexArray.bind(e),createVertexArray:e.createVertexArray.bind(e),deleteVertexArray:e.deleteVertexArray.bind(e),isVertexArray:e.isVertexArray.bind(e)};{let r=e.getExtension("OES_vertex_array_object");return r===null?null:{VERTEX_ARRAY_BINDING:r.VERTEX_ARRAY_BINDING_OES,bindVertexArray:r.bindVertexArrayOES.bind(r),createVertexArray:r.createVertexArrayOES.bind(r),deleteVertexArray:r.deleteVertexArrayOES.bind(r),isVertexArray:r.isVertexArrayOES.bind(r)}}}function oo(e){return te(e)?{}:e.getExtension("OES_texture_float")}function io(e){return e.getExtension("OES_texture_float_linear")}function so(e){if(te(e))return{HALF_FLOAT:e.HALF_FLOAT};{let r=e.getExtension("OES_texture_half_float");return r===null?null:{HALF_FLOAT:r.HALF_FLOAT_OES}}}function uo(e){return e.getExtension("OES_texture_half_float_linear")}function lo(e){if(te(e))return{MIN:e.MIN,MAX:e.MAX};{let r=e.getExtension("EXT_blend_minmax");return r===null?null:{MIN:r.MIN_EXT,MAX:r.MAX_EXT}}}function co(e){return te(e)?{}:e.getExtension("EXT_frag_depth")}function fo(e){if(te(e))return e.getExtension("EXT_color_buffer_float")===null?null:(e.getExtension("EXT_float_blend"),{RGBA32F:e.RGBA32F});{let r=e.getExtension("WEBGL_color_buffer_float");return r===null?(e.getExtension("OES_texture_float"),vs(e,e.FLOAT)?{RGBA32F:34836}:null):(e.getExtension("EXT_float_blend"),{RGBA32F:r.RGBA32F_EXT})}}function mo(e){if(te(e))return e.getExtension("EXT_color_buffer_half_float")===null?null:(e.getExtension("EXT_float_blend"),{RGBA16F:e.RGBA16F});{let r=e.getExtension("EXT_color_buffer_half_float");return r===null?(e.getExtension("OES_texture_half_float"),vs(e,36193)?{RGBA16F:34842}:null):(e.getExtension("EXT_float_blend"),{RGBA16F:r.RGBA16F_EXT})}}function po(e){if(te(e))return{drawBuffers:e.drawBuffers.bind(e),COLOR_ATTACHMENT0:e.COLOR_ATTACHMENT0,COLOR_ATTACHMENT1:e.COLOR_ATTACHMENT1,COLOR_ATTACHMENT2:e.COLOR_ATTACHMENT2,COLOR_ATTACHMENT3:e.COLOR_ATTACHMENT3,COLOR_ATTACHMENT4:e.COLOR_ATTACHMENT4,COLOR_ATTACHMENT5:e.COLOR_ATTACHMENT5,COLOR_ATTACHMENT6:e.COLOR_ATTACHMENT6,COLOR_ATTACHMENT7:e.COLOR_ATTACHMENT7,DRAW_BUFFER0:e.DRAW_BUFFER0,DRAW_BUFFER1:e.DRAW_BUFFER1,DRAW_BUFFER2:e.DRAW_BUFFER2,DRAW_BUFFER3:e.DRAW_BUFFER3,DRAW_BUFFER4:e.DRAW_BUFFER4,DRAW_BUFFER5:e.DRAW_BUFFER5,DRAW_BUFFER6:e.DRAW_BUFFER6,DRAW_BUFFER7:e.DRAW_BUFFER7,MAX_COLOR_ATTACHMENTS:e.MAX_COLOR_ATTACHMENTS,MAX_DRAW_BUFFERS:e.MAX_DRAW_BUFFERS};{let r=e.getExtension("WEBGL_draw_buffers");return r===null?null:{drawBuffers:r.drawBuffersWEBGL.bind(r),COLOR_ATTACHMENT0:r.COLOR_ATTACHMENT0_WEBGL,COLOR_ATTACHMENT1:r.COLOR_ATTACHMENT1_WEBGL,COLOR_ATTACHMENT2:r.COLOR_ATTACHMENT2_WEBGL,COLOR_ATTACHMENT3:r.COLOR_ATTACHMENT3_WEBGL,COLOR_ATTACHMENT4:r.COLOR_ATTACHMENT4_WEBGL,COLOR_ATTACHMENT5:r.COLOR_ATTACHMENT5_WEBGL,COLOR_ATTACHMENT6:r.COLOR_ATTACHMENT6_WEBGL,COLOR_ATTACHMENT7:r.COLOR_ATTACHMENT7_WEBGL,DRAW_BUFFER0:r.DRAW_BUFFER0_WEBGL,DRAW_BUFFER1:r.DRAW_BUFFER1_WEBGL,DRAW_BUFFER2:r.DRAW_BUFFER2_WEBGL,DRAW_BUFFER3:r.DRAW_BUFFER3_WEBGL,DRAW_BUFFER4:r.DRAW_BUFFER4_WEBGL,DRAW_BUFFER5:r.DRAW_BUFFER5_WEBGL,DRAW_BUFFER6:r.DRAW_BUFFER6_WEBGL,DRAW_BUFFER7:r.DRAW_BUFFER7_WEBGL,MAX_COLOR_ATTACHMENTS:r.MAX_COLOR_ATTACHMENTS_WEBGL,MAX_DRAW_BUFFERS:r.MAX_DRAW_BUFFERS_WEBGL}}}function go(e){let r=e.getExtension("OES_draw_buffers_indexed");return r===null?null:{enablei:r.enableiOES.bind(r),disablei:r.disableiOES.bind(r),blendEquationi:r.blendEquationiOES.bind(r),blendEquationSeparatei:r.blendEquationSeparateiOES.bind(r),blendFunci:r.blendFunciOES.bind(r),blendFuncSeparatei:r.blendFuncSeparateiOES.bind(r),colorMaski:r.colorMaskiOES.bind(r)}}function yo(e){return te(e)?{}:e.getExtension("EXT_shader_texture_lod")}function bo(e){if(te(e))return{UNSIGNED_INT_24_8:e.UNSIGNED_INT_24_8};{let r=e.getExtension("WEBGL_depth_texture");return r===null?null:{UNSIGNED_INT_24_8:r.UNSIGNED_INT_24_8_WEBGL}}}function ho(e){if(te(e))return{FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING:e.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING,SRGB8_ALPHA8:e.SRGB8_ALPHA8,SRGB8:e.SRGB8,SRGB:e.SRGB};{let r=e.getExtension("EXT_sRGB");return r===null?null:{FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING:r.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT,SRGB8_ALPHA8:r.SRGB8_ALPHA8_EXT,SRGB8:r.SRGB_ALPHA_EXT,SRGB:r.SRGB_EXT}}}function xo(e){if(te(e)){let r=e.getExtension("EXT_disjoint_timer_query_webgl2")||e.getExtension("EXT_disjoint_timer_query");return r===null?null:{QUERY_COUNTER_BITS:r.QUERY_COUNTER_BITS_EXT,CURRENT_QUERY:e.CURRENT_QUERY,QUERY_RESULT:e.QUERY_RESULT,QUERY_RESULT_AVAILABLE:e.QUERY_RESULT_AVAILABLE,TIME_ELAPSED:r.TIME_ELAPSED_EXT,TIMESTAMP:r.TIMESTAMP_EXT,GPU_DISJOINT:r.GPU_DISJOINT_EXT,createQuery:e.createQuery.bind(e),deleteQuery:e.deleteQuery.bind(e),isQuery:e.isQuery.bind(e),beginQuery:e.beginQuery.bind(e),endQuery:e.endQuery.bind(e),queryCounter:r.queryCounterEXT.bind(r),getQuery:e.getQuery.bind(e),getQueryParameter:e.getQueryParameter.bind(e)}}else{let r=e.getExtension("EXT_disjoint_timer_query");return r===null?null:{QUERY_COUNTER_BITS:r.QUERY_COUNTER_BITS_EXT,CURRENT_QUERY:r.CURRENT_QUERY_EXT,QUERY_RESULT:r.QUERY_RESULT_EXT,QUERY_RESULT_AVAILABLE:r.QUERY_RESULT_AVAILABLE_EXT,TIME_ELAPSED:r.TIME_ELAPSED_EXT,TIMESTAMP:r.TIMESTAMP_EXT,GPU_DISJOINT:r.GPU_DISJOINT_EXT,createQuery:r.createQueryEXT.bind(r),deleteQuery:r.deleteQueryEXT.bind(r),isQuery:r.isQueryEXT.bind(r),beginQuery:r.beginQueryEXT.bind(r),endQuery:r.endQueryEXT.bind(r),queryCounter:r.queryCounterEXT.bind(r),getQuery:r.getQueryEXT.bind(r),getQueryParameter:r.getQueryObjectEXT.bind(r)}}}function vo(e){let r=e.getExtension("WEBGL_multi_draw");return r?{multiDrawArrays:r.multiDrawArraysWEBGL.bind(r),multiDrawElements:r.multiDrawElementsWEBGL.bind(r),multiDrawArraysInstanced:r.multiDrawArraysInstancedWEBGL.bind(r),multiDrawElementsInstanced:r.multiDrawElementsInstancedWEBGL.bind(r)}:null}function To(e){let r=e.getExtension("WEBGL_draw_instanced_base_vertex_base_instance");return r?{drawArraysInstancedBaseInstance:r.drawArraysInstancedBaseInstanceWEBGL.bind(r),drawElementsInstancedBaseVertexBaseInstance:r.drawElementsInstancedBaseVertexBaseInstanceWEBGL.bind(r)}:null}function Co(e){let r=e.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance");return r?{multiDrawArraysInstancedBaseInstance:r.multiDrawArraysInstancedBaseInstanceWEBGL.bind(r),multiDrawElementsInstancedBaseVertexBaseInstance:r.multiDrawElementsInstancedBaseVertexBaseInstanceWEBGL.bind(r)}:null}function So(e){let r=e.getExtension("KHR_parallel_shader_compile");return r===null?null:{COMPLETION_STATUS:r.COMPLETION_STATUS_KHR}}function _o(e){return te(e)?{}:e.getExtension("OES_fbo_render_mipmap")}function Ao(e){if(te(e)){let r=e.getExtension("WEBGL_provoking_vertex");if(r)return{FIRST_VERTEX_CONVENTION:r.FIRST_VERTEX_CONVENTION_WEBGL,LAST_VERTEX_CONVENTION:r.LAST_VERTEX_CONVENTION_WEBGL,PROVOKING_VERTEX:r.PROVOKING_VERTEX_WEBGL,provokingVertex:r.provokingVertexWEBGL.bind(r)}}return null}function Io(e){if(te(e)){let r=e.getExtension("WEBGL_clip_cull_distance");if(r)return{MAX_CLIP_DISTANCES:r.MAX_CLIP_DISTANCES_WEBGL,MAX_CULL_DISTANCES:r.MAX_CULL_DISTANCES_WEBGL,MAX_COMBINED_CLIP_AND_CULL_DISTANCES:r.MAX_COMBINED_CLIP_AND_CULL_DISTANCES_WEBGL,CLIP_DISTANCE0:r.CLIP_DISTANCE0_WEBGL,CLIP_DISTANCE1:r.CLIP_DISTANCE1_WEBGL,CLIP_DISTANCE2:r.CLIP_DISTANCE2_WEBGL,CLIP_DISTANCE3:r.CLIP_DISTANCE3_WEBGL,CLIP_DISTANCE4:r.CLIP_DISTANCE4_WEBGL,CLIP_DISTANCE5:r.CLIP_DISTANCE5_WEBGL,CLIP_DISTANCE6:r.CLIP_DISTANCE6_WEBGL,CLIP_DISTANCE7:r.CLIP_DISTANCE7_WEBGL}}return null}function Do(e){return te(e)&&e.getExtension("EXT_conservative_depth")?{}:null}function Eo(e){if(te(e)){let r=e.getExtension("WEBGL_stencil_texturing");if(r)return{DEPTH_STENCIL_TEXTURE_MODE:r.DEPTH_STENCIL_TEXTURE_MODE_WEBGL,STENCIL_INDEX:r.STENCIL_INDEX_WEBGL}}return null}function Po(e){let r=e.getExtension("EXT_clip_control");return r?{LOWER_LEFT:r.LOWER_LEFT_EXT,UPPER_LEFT:r.UPPER_LEFT_EXT,NEGATIVE_ONE_TO_ONE:r.NEGATIVE_ONE_TO_ONE_EXT,ZERO_TO_ONE:r.ZERO_TO_ONE_EXT,CLIP_ORIGIN:r.CLIP_ORIGIN_EXT,CLIP_DEPTH_MODE:r.CLIP_DEPTH_MODE_EXT,clipControl:r.clipControlEXT.bind(r)}:null}function Ro(e){return te(e)&&e.getExtension("EXT_render_snorm")?{}:null}function Vo(e){return te(e)&&e.getExtension("WEBGL_render_shared_exponent")?{}:null}function Bo(e){let r=e.getExtension("EXT_texture_norm16");return r?{R16:r.R16_EXT,RG16:r.RG16_EXT,RGB16:r.RGB16_EXT,RGBA16:r.RGBA16_EXT,R16_SNORM:r.R16_SNORM_EXT,RG16_SNORM:r.RG16_SNORM_EXT,RGB16_SNORM:r.RGB16_SNORM_EXT,RGBA16_SNORM:r.RGBA16_SNORM_EXT}:null}function Lo(e){let r=e.getExtension("EXT_depth_clamp");return r?{DEPTH_CLAMP:r.DEPTH_CLAMP_EXT}:null}function Fo(e){if(te(e)){let r=e.getExtension("OVR_multiview2");if(r)return{FRAMEBUFFER_ATTACHMENT_TEXTURE_NUM_VIEWS:r.FRAMEBUFFER_ATTACHMENT_TEXTURE_NUM_VIEWS_OVR,FRAMEBUFFER_ATTACHMENT_TEXTURE_BASE_VIEW_INDEX:r.FRAMEBUFFER_ATTACHMENT_TEXTURE_BASE_VIEW_INDEX_OVR,MAX_VIEWS:r.MAX_VIEWS_OVR,FRAMEBUFFER_INCOMPLETE_VIEW_TARGETS:r.FRAMEBUFFER_INCOMPLETE_VIEW_TARGETS_OVR,framebufferTextureMultiview:r.framebufferTextureMultiviewOVR.bind(r)}}return null}function Mo(e){if(!te(e))return!1;if(typeof navigator<"u"){let r=window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);return r?parseInt(r[1])>=85:!0}return!1}var pc=`
attribute vec4 aPosition;

void main() {
    gl_Position = aPosition;
}`,gc=`
precision mediump float;
uniform vec4 uColor;
uniform sampler2D uTexture;

void main() {
    gl_FragColor = texture2D(uTexture, vec2(0.5, 0.5)) * uColor;
}`,yc=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]);function vs(e,r){let t=Lt(e,{type:"vert",source:pc}),a=Lt(e,{type:"frag",source:gc});if(!t||!a)return!1;let o=sn(e);e.attachShader(o,t),e.attachShader(o,a),e.linkProgram(o),e.useProgram(o);let u=e.getAttribLocation(o,"aPosition"),i=e.getUniformLocation(o,"uColor");if(!i)return ie&&console.log("error getting 'uColor' uniform location"),!1;let p=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,p),e.bufferData(e.ARRAY_BUFFER,yc,e.STATIC_DRAW),e.enableVertexAttribArray(u),e.vertexAttribPointer(u,2,e.FLOAT,!1,0,0);let d=e.createTexture(),y=new Uint8Array([255,255,255,255]);e.bindTexture(e.TEXTURE_2D,d),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,y);let C=e.createTexture();e.bindTexture(e.TEXTURE_2D,C),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,r,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST);let f=e.createFramebuffer();if(e.bindFramebuffer(e.FRAMEBUFFER,f),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,C,0),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE)return ie&&console.log(`error creating framebuffer for '${r}'`),!1;e.bindTexture(e.TEXTURE_2D,d),e.uniform4fv(i,[0,10,20,1]),e.drawArrays(e.TRIANGLES,0,6),e.bindTexture(e.TEXTURE_2D,C),e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(1,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.uniform4fv(i,[0,1/10,1/20,1]),e.drawArrays(e.TRIANGLES,0,6);let T=new Uint8Array(4);if(e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,T),T[0]!==0||T[1]<248||T[2]<248||T[3]<254)return ie&&console.log(`not able to actually render to '${r}' texture`),!1;if(r===e.FLOAT){e.bindFramebuffer(e.FRAMEBUFFER,f);let S=new Float32Array(4);e.readPixels(0,0,1,1,e.RGBA,e.FLOAT,S);let l=e.getError();if(l)return ie&&console.log(`error reading float pixels: '${Xn(e,l)}'`),!1}return!0}var Qn=Ce();function bc(e,r){switch(r){case"image-uint8":return e.TEXTURE_2D;case"image-float32":return e.TEXTURE_2D;case"image-float16":return e.TEXTURE_2D;case"image-depth":return e.TEXTURE_2D}if(te(e))switch(r){case"image-int32":return e.TEXTURE_2D;case"volume-uint8":return e.TEXTURE_3D;case"volume-float32":return e.TEXTURE_3D;case"volume-float16":return e.TEXTURE_3D}throw new Error(`unknown texture kind '${r}'`)}function on(e,r,t){switch(r){case"alpha":return te(e)&&(t==="float"||t==="fp16")?e.RED:te(e)&&t==="int"?e.RED_INTEGER:e.ALPHA;case"rgb":return te(e)&&t==="int"?e.RGB_INTEGER:e.RGB;case"rg":if(te(e)&&(t==="float"||t==="fp16"))return e.RG;if(te(e)&&t==="int")return e.RG_INTEGER;throw new Error('texture format "rg" requires webgl2 and type "float" or int"');case"rgba":return te(e)&&t==="int"?e.RGBA_INTEGER:e.RGBA;case"depth":return e.DEPTH_COMPONENT;case"depth-stencil":return e.DEPTH_STENCIL}}function hc(e,r,t){if(te(e))switch(r){case"alpha":switch(t){case"ubyte":return e.ALPHA;case"float":return e.R32F;case"fp16":return e.R16F;case"int":return e.R32I}case"rg":switch(t){case"ubyte":return e.RG;case"float":return e.RG32F;case"fp16":return e.RG16F;case"int":return e.RG32I}case"rgb":switch(t){case"ubyte":return e.RGB;case"float":return e.RGB32F;case"fp16":return e.RGB16F;case"int":return e.RGB32I}case"rgba":switch(t){case"ubyte":return e.RGBA;case"float":return e.RGBA32F;case"fp16":return e.RGBA16F;case"int":return e.RGBA32I}case"depth":switch(t){case"ushort":return e.DEPTH_COMPONENT16;case"float":return e.DEPTH_COMPONENT32F}break;case"depth-stencil":switch(t){case"float-stencil":return e.DEPTH32F_STENCIL8;case"uint24-8":return e.DEPTH24_STENCIL8}break}return on(e,r,t)}function _s(e,r,t,a,o){return jn(e,r)*t*a*(o||1)}function jn(e,r){return xc(e)*vc(r)}function xc(e){switch(e){case"alpha":return 1;case"rg":return 2;case"rgb":return 3;case"rgba":return 4;case"depth":return 1;case"depth-stencil":return 2}}function vc(e){switch(e){case"ubyte":return 1;case"ushort":return 2;case"float":return 4;case"fp16":return 2;case"int":return 4;case"float-stencil":return 4;case"uint24-8":return 2}}function Wn(e,r,t){switch(t){case"ubyte":return e.UNSIGNED_BYTE;case"ushort":return e.UNSIGNED_SHORT;case"float":return e.FLOAT;case"fp16":if(r.textureHalfFloat)return r.textureHalfFloat.HALF_FLOAT;throw new Error('extension "texture_half_float" unavailable');case"int":if(te(e))return e.INT;throw new Error('texture type "int" requires webgl2');case"float-stencil":if(te(e))return e.FLOAT_32_UNSIGNED_INT_24_8_REV;throw new Error('texture type "float-stencil" requires webgl2');case"uint24-8":if(r.depthTexture)return r.depthTexture.UNSIGNED_INT_24_8;throw new Error('extension "depth_texture" unavailable')}}function Ts(e,r){switch(r){case"nearest":return e.NEAREST;case"linear":return e.LINEAR}}function cn(e,r,t){switch(t){case"depth":return e.DEPTH_ATTACHMENT;case"stencil":return e.STENCIL_ATTACHMENT;case"depth-stencil":return e.DEPTH_STENCIL_ATTACHMENT;case"color0":case 0:return e.COLOR_ATTACHMENT0}if(r.drawBuffers)switch(t){case"color1":case 1:return r.drawBuffers.COLOR_ATTACHMENT1;case"color2":case 2:return r.drawBuffers.COLOR_ATTACHMENT2;case"color3":case 3:return r.drawBuffers.COLOR_ATTACHMENT3;case"color4":case 4:return r.drawBuffers.COLOR_ATTACHMENT4;case"color5":case 5:return r.drawBuffers.COLOR_ATTACHMENT5;case"color6":case 6:return r.drawBuffers.COLOR_ATTACHMENT6;case"color7":case 7:return r.drawBuffers.COLOR_ATTACHMENT7}throw new Error("unknown texture attachment")}function Cs(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement}function Tc(e,r,t){return r===t.TEXTURE_2D}function Ss(e,r,t){return r===t.TEXTURE_3D}function Kn(e){let r=e.createTexture();if(r===null)throw new Error("Could not create WebGL texture");return r}function ls(e,r,t,a,o,u){let i=Qn(),p=Kn(e);if(t.endsWith("float32")&&o!=="float"||t.endsWith("float16")&&o!=="fp16"||t.endsWith("uint8")&&o!=="ubyte"||t.endsWith("int32")&&o!=="int"||t.endsWith("depth")&&o!=="ushort"&&o!=="float"&&o!=="float-stencil"&&o!=="uint24-8")throw new Error(`texture kind '${t}' and type '${o}' are incompatible`);if(!r.depthTexture&&(a==="depth"||a==="depth-stencil"))throw new Error("extension 'WEBGL_depth_texture' needed for 'depth' texture format");let d=bc(e,t),y=Ts(e,u),C=on(e,a,o),f=hc(e,a,o),b=Wn(e,r,o);function T(){e.bindTexture(d,p),e.texParameteri(d,e.TEXTURE_MAG_FILTER,y),e.texParameteri(d,e.TEXTURE_MIN_FILTER,y),e.texParameteri(d,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(d,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(d,null)}T();let S=0,l=0,s=0,g,c=!1,h=!1;function x(I,P,V){if(I===0||P===0||te(e)&&d===e.TEXTURE_3D&&V===0)throw new Error("empty textures are not allowed");if(!(S===I&&l===P&&s===(V||0)))if(S=I,l=P,s=V||0,e.bindTexture(d,p),d===e.TEXTURE_2D)e.texImage2D(d,0,f,S,l,0,C,b,null);else if(te(e)&&d===e.TEXTURE_3D&&s!==void 0)e.texImage3D(d,0,f,S,l,s,0,C,b,null);else throw new Error("unknown texture target")}x(1,1,te(e)&&d===e.TEXTURE_3D?1:0);function A(I,P=!1){if(I.width===0||I.height===0||!Cs(I)&&te(e)&&Ss(I,d,e)&&I.depth===0)throw new Error("empty textures are not allowed");if(e.bindTexture(d,p),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,0),Cs(I))S=I.width,l=I.height,e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.bindTexture(e.TEXTURE_2D,p),e.texImage2D(e.TEXTURE_2D,0,f,C,b,I);else if(Tc(I,d,e)){let V=I.filter?Ts(e,I.filter):y;e.texParameteri(d,e.TEXTURE_MAG_FILTER,V),e.texParameteri(d,e.TEXTURE_MIN_FILTER,V),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!!I.flipY),P?e.texSubImage2D(d,0,0,0,I.width,I.height,C,b,I.array):(S=I.width,l=I.height,e.texImage2D(d,0,f,S,l,0,C,b,I.array))}else if(te(e)&&Ss(I,d,e))e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),P?e.texSubImage3D(d,0,0,0,0,I.width,I.height,I.depth,C,b,I.array):(S=I.width,l=I.height,s=I.depth,e.texImage3D(d,0,f,S,l,s,0,C,b,I.array));else throw new Error("unknown texture target");e.bindTexture(d,null),g=I}function v(){if(d!==e.TEXTURE_2D)throw new Error("mipmap only supported for 2d textures");if(te(e)||Vn(S)&&Vn(l))e.bindTexture(d,p),e.texParameteri(d,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.generateMipmap(d),e.bindTexture(d,null),c=!0;else throw new Error("mipmap unsupported for non-power-of-two textures and webgl1")}function _(I){return a==="depth-stencil"&&I==="depth"?"depth-stencil":I}function E(I,P,V){let B=_(P);if(I.bind(),B==="depth-stencil"&&e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,null),d===e.TEXTURE_2D)e.framebufferTexture2D(e.FRAMEBUFFER,cn(e,r,B),e.TEXTURE_2D,p,0);else if(te(e)&&d===e.TEXTURE_3D){if(V===void 0)throw new Error("need `layer` to attach 3D texture");e.framebufferTextureLayer(e.FRAMEBUFFER,cn(e,r,B),p,0,V)}else throw new Error("unknown/unsupported texture target")}return{id:i,target:d,format:C,internalFormat:f,type:b,filter:y,getWidth:()=>S,getHeight:()=>l,getDepth:()=>s,getByteCount:()=>_s(a,o,S,l,s),define:x,load:A,mipmap:v,bind:I=>{e.activeTexture(e.TEXTURE0+I),e.bindTexture(d,p)},unbind:I=>{e.activeTexture(e.TEXTURE0+I),e.bindTexture(d,null)},attachFramebuffer:E,detachFramebuffer:(I,P)=>{let V=_(P);if(I.bind(),d===e.TEXTURE_2D)e.framebufferTexture2D(e.FRAMEBUFFER,cn(e,r,V),e.TEXTURE_2D,null,0);else if(te(e)&&d===e.TEXTURE_3D)e.framebufferTextureLayer(e.FRAMEBUFFER,cn(e,r,V),null,0,0);else throw new Error("unknown texture target")},reset:()=>{p=Kn(e),T();let[I,P,V]=[S,l,s];S=0,l=0,s=0,x(I,P,V),g&&A(g),c&&v()},destroy:()=>{h||(e.deleteTexture(p),h=!0)}}}function Yn(e,r,t){let{resources:a}=e,o=[];return Object.keys(r).forEach(u=>{let i=r[u];if(i.type==="texture"){let p=t[u];if(p)if(i.kind==="texture")o[o.length]=[u,p.ref.value];else{let d=a.texture(i.kind,i.format,i.dataType,i.filter);d.load(p.ref.value),o[o.length]=[u,d]}}}),o}function Jy(e,r,t){let a=new Image;a.onload=function(){t.load(a),n.update(r,t)},a.src=e}function Cc(e,r){switch(r){case"nx":return e.TEXTURE_CUBE_MAP_NEGATIVE_X;case"ny":return e.TEXTURE_CUBE_MAP_NEGATIVE_Y;case"nz":return e.TEXTURE_CUBE_MAP_NEGATIVE_Z;case"px":return e.TEXTURE_CUBE_MAP_POSITIVE_X;case"py":return e.TEXTURE_CUBE_MAP_POSITIVE_Y;case"pz":return e.TEXTURE_CUBE_MAP_POSITIVE_Z}}function cs(e,r,t,a){let o=e.TEXTURE_CUBE_MAP,u=e.LINEAR,i=e.RGBA,p=e.RGBA,d=e.UNSIGNED_BYTE,y=0,C=e.createTexture();e.bindTexture(o,C);function f(l,s,g,c){y===0&&(y=g.width),e.bindTexture(o,C),e.texImage2D(l,s,i,y,y,0,p,d,null),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,0),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.bindTexture(o,C),e.texImage2D(l,s,i,p,d,g),T+=1,T===6&&(S||(t?(e.texParameteri(o,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.generateMipmap(o)):e.texParameteri(o,e.TEXTURE_MIN_FILTER,u),e.texParameteri(o,e.TEXTURE_MAG_FILTER,u)),c||a?.(S))}let b=[],T=0;Wt(r,(l,s)=>{if(!l)return;let g=0,c=Cc(e,s),h=new Image;l instanceof File?h.src=URL.createObjectURL(l):wa(l)?l.then(x=>{h.src=URL.createObjectURL(x)}):h.src=l,b.push({cubeTarget:c,level:g,image:h}),h.addEventListener("load",()=>{f(c,g,h,!1)}),h.addEventListener("error",()=>{a?.(!0)})});let S=!1;return{id:Qn(),target:o,format:p,internalFormat:i,type:d,filter:u,getWidth:()=>y,getHeight:()=>y,getDepth:()=>0,getByteCount:()=>_s("rgba","ubyte",y,y,0)*6*(t?2:1),define:()=>{},load:()=>{},mipmap:()=>{},bind:l=>{e.activeTexture(e.TEXTURE0+l),e.bindTexture(o,C)},unbind:l=>{e.activeTexture(e.TEXTURE0+l),e.bindTexture(o,null)},attachFramebuffer:()=>{},detachFramebuffer:()=>{},reset:()=>{C=Kn(e),e.bindTexture(o,C),T=0;for(let{cubeTarget:l,level:s,image:g}of b)f(l,s,g,!0)},destroy:()=>{S||(e.deleteTexture(C),S=!0)}}}var As=-1;function eb(e){return e.format===As}function Te(e){let r=e?.TEXTURE_2D??3553;return{id:Qn(),target:r,format:As,internalFormat:0,type:0,filter:0,getWidth:()=>0,getHeight:()=>0,getDepth:()=>0,getByteCount:()=>0,define:()=>{},load:()=>{},mipmap:()=>{},bind:t=>{e&&(e.activeTexture(e.TEXTURE0+t),e.bindTexture(r,null))},unbind:t=>{e&&(e.activeTexture(e.TEXTURE0+t),e.bindTexture(r,null))},attachFramebuffer:()=>{throw new Error("cannot attach null-texture to a framebuffer")},detachFramebuffer:()=>{throw new Error("cannot detach null-texture from a framebuffer")},reset:()=>{},destroy:()=>{}}}function Is(e,r){let t={},a={},o={},u={},i={},p={},d={};return Object.keys(e).forEach(y=>{let C=e[y];C.type==="attribute"&&(t[y]=r[y]),C.type==="define"&&(a[y]=r[y]),C.type==="texture"&&r[y]!==void 0&&(C.variant==="material"?u[y]=r[y]:o[y]=r[y]),C.type==="uniform"&&r[y]!==void 0&&(C.variant==="material"?p[y]=r[y]:C.variant==="buffered"?d[y]=r[y]:i[y]=r[y])}),{attributeValues:t,defineValues:a,textureValues:o,materialTextureValues:u,uniformValues:i,materialUniformValues:p,bufferedUniformValues:d}}function Ds(e){let r={};return Object.keys(e).forEach(t=>{r[t]=e[t].ref.version}),r}function ce(e,r,t){return{type:"attribute",kind:e,itemSize:r,divisor:t}}function N(e,r){return{type:"uniform",kind:e,variant:r}}function me(e,r,t,a,o){return{type:"texture",kind:e,format:r,dataType:t,filter:a,variant:o}}function hr(e){return{type:"elements",kind:e}}function ae(e,r){return{type:"define",kind:e,options:r}}function de(e){return{type:"value",kind:e}}var Be={uDrawId:N("i"),uModel:N("m4"),uView:N("m4"),uInvView:N("m4"),uModelView:N("m4"),uInvModelView:N("m4"),uProjection:N("m4"),uInvProjection:N("m4"),uModelViewProjection:N("m4"),uInvModelViewProjection:N("m4"),uHasHeadRotation:N("b"),uInvHeadRotation:N("m4"),uIsAsymmetricProjection:N("b"),uHasEyeCamera:N("b"),uModelViewEye:N("m4"),uInvModelViewEye:N("m4"),uIsOrtho:N("f"),uPixelRatio:N("f"),uViewport:N("v4"),uViewOffset:N("v2"),uModelScale:N("f"),uDrawingBufferSize:N("v2"),uCameraPosition:N("v3"),uCameraDir:N("v3"),uCameraPlane:N("v4"),uNear:N("f"),uFar:N("f"),uFog:N("b"),uFogNear:N("f"),uFogFar:N("f"),uFogColor:N("v3"),uTransparentBackground:N("b"),uLightDirection:N("v3[]"),uLightColor:N("v3[]"),uAmbientColor:N("v3"),uPickingAlphaThreshold:N("f"),uHighlightColor:N("v3"),uSelectColor:N("v3"),uDimColor:N("v3"),uHighlightStrength:N("f"),uSelectStrength:N("f"),uDimStrength:N("f"),uMarkerPriority:N("i"),uMarkerAverage:N("f"),uXrayEdgeFalloff:N("f"),uCelSteps:N("f"),uExposure:N("f"),uRenderMask:N("i"),uMarkingDepthTest:N("b"),uDepthBack:N("b"),uMarkingType:N("i"),uPickType:N("i"),uSolidInteriorPass:N("i"),uSolidInteriorClip:N("i"),uTime:N("f"),uEnableAnimation:N("b")},Le={tDepth:me("texture","depth","ushort","nearest"),tDpoitDepth:me("texture","rg","float","nearest"),tDpoitFrontColor:me("texture","rgba","float","nearest"),tDpoitBackColor:me("texture","rgba","float","nearest")},Fe={dLightCount:ae("number"),dColorMarker:ae("boolean")},Me={uObjectId:N("i")},Es={aSegment:ce("float32",3,1),aSegmentSphere:ce("float32",4,1),aSegmentLod:ce("float32",4,1),uLodLevel:N("i"),dSegmented:ae("boolean")},Sc={uColor:N("v3","material"),uColorTexDim:N("v2"),uColorGridDim:N("v3"),uColorGridTransform:N("v4"),uPaletteDomain:N("v2"),uPaletteDefault:N("v3"),tColor:me("image-uint8","rgb","ubyte","nearest"),tPalette:me("image-uint8","rgb","ubyte","nearest"),tColorGrid:me("texture","rgb","ubyte","linear"),dColorType:ae("string",["uniform","attribute","instance","group","groupInstance","vertex","vertexInstance","volume","volumeInstance","direct"]),dUsePalette:ae("boolean")},Ur={uSize:N("f","material"),uSizeTexDim:N("v2"),tSize:me("image-uint8","rgb","ubyte","nearest"),dSizeType:ae("string",["uniform","attribute","instance","group","groupInstance"]),uSizeFactor:N("f","material")},_c={uMarker:N("f"),uMarkerTexDim:N("v2"),tMarker:me("image-uint8","alpha","ubyte","nearest"),markerAverage:de("number"),markerStatus:de("number"),dMarkerType:ae("string",["instance","groupInstance"])},Ac={uOverpaintTexDim:N("v2"),tOverpaint:me("image-uint8","rgba","ubyte","nearest"),dOverpaint:ae("boolean"),uOverpaintGridDim:N("v3"),uOverpaintGridTransform:N("v4"),tOverpaintGrid:me("texture","rgba","ubyte","linear"),dOverpaintType:ae("string",["instance","groupInstance","volumeInstance"]),uOverpaintStrength:N("f","material")},Ic={uTransparencyTexDim:N("v2"),tTransparency:me("image-uint8","alpha","ubyte","nearest"),dTransparency:ae("boolean"),transparencyAverage:de("number"),transparencyMin:de("number"),uTransparencyGridDim:N("v3"),uTransparencyGridTransform:N("v4"),tTransparencyGrid:me("texture","alpha","ubyte","linear"),dTransparencyType:ae("string",["instance","groupInstance","volumeInstance"]),uTransparencyStrength:N("f","material")},Dc={uEmissiveTexDim:N("v2"),tEmissive:me("image-uint8","alpha","ubyte","nearest"),dEmissive:ae("boolean"),emissiveAverage:de("number"),uEmissiveGridDim:N("v3"),uEmissiveGridTransform:N("v4"),tEmissiveGrid:me("texture","alpha","ubyte","linear"),dEmissiveType:ae("string",["instance","groupInstance","volumeInstance"]),uEmissiveStrength:N("f","material")},Ec={uSubstanceTexDim:N("v2"),tSubstance:me("image-uint8","rgba","ubyte","nearest"),dSubstance:ae("boolean"),uSubstanceGridDim:N("v3"),uSubstanceGridTransform:N("v4"),tSubstanceGrid:me("texture","rgba","ubyte","linear"),dSubstanceType:ae("string",["instance","groupInstance","volumeInstance"]),uSubstanceStrength:N("f","material")},Pc={uClippingTexDim:N("v2"),tClipping:me("image-uint8","alpha","ubyte","nearest"),dClipping:ae("boolean"),dClippingType:ae("string",["instance","groupInstance"])},Rc={uWiggleTexDim:N("v2"),tWiggle:me("image-uint8","alpha","ubyte","nearest"),dWiggle:ae("boolean"),wiggleAverage:de("number"),dWiggleType:ae("string",["instance","groupInstance"]),uWiggleStrength:N("f","material")},Oe={dGeometryType:ae("string",["cylinders","directVolume","image","lines","mesh","points","spheres","text","textureMesh"]),...Sc,..._c,...Ac,...Ic,...Dc,...Ec,...Pc,...Rc,dClipObjectCount:ae("number"),dClipVariant:ae("string",["instance","pixel"]),uClipObjectType:N("i[]","material"),uClipObjectInvert:N("b[]","material"),uClipObjectPosition:N("v3[]","material"),uClipObjectRotation:N("v4[]","material"),uClipObjectScale:N("v3[]","material"),uClipObjectTransform:N("m4[]","material"),aInstance:ce("float32",1,1),aTransform:ce("float32",16,1),uAlpha:N("f","material"),uMetalness:N("f","material"),uRoughness:N("f","material"),uBumpiness:N("f","material"),uEmissive:N("f","material"),uDensity:N("f","material"),uVertexCount:N("i"),uInstanceCount:N("i"),uGroupCount:N("i"),uInvariantBoundingSphere:N("v4"),uLod:N("v4"),drawCount:de("number"),instanceCount:de("number"),alpha:de("number"),matrix:de("m4"),transform:de("float32"),extraTransform:de("float32"),hasExtraTransform:de("boolean"),hasReflection:de("boolean"),instanceGranularity:de("boolean"),boundingSphere:de("sphere"),invariantBoundingSphere:de("sphere"),instanceGrid:de("instanceGrid")},it={uInteriorColor:N("v4"),uInteriorSubstance:N("v4")},xr={uWiggleSpeed:N("f","material"),uWiggleAmplitude:N("f","material"),uWiggleFrequency:N("f","material"),uWiggleMode:N("i","material"),uTumbleSpeed:N("f","material"),uTumbleAmplitude:N("f","material"),uTumbleFrequency:N("f","material")};var Ps=`
precision highp float;
precision highp sampler2D;

uniform sampler2D tColor;
uniform vec2 uTexSize;

void main() {
    vec2 coords = gl_FragCoord.xy / uTexSize;
    gl_FragColor = texture2D(tColor, coords);
}
`;var Rs=`
precision highp float;

attribute vec2 aPosition;
uniform vec2 uQuadScale;

void main(void) {
    vec2 position = aPosition * uQuadScale - vec2(1.0, 1.0) + uQuadScale;
    gl_Position = vec4(position, 0.0, 1.0);
}
`;var Vc=3e7,Bc=Ce();function Lc(e,r){let{gl:t}=e;switch(r){case"points":return t.POINTS;case"lines":return t.LINES;case"line-strip":return t.LINE_STRIP;case"line-loop":return t.LINE_LOOP;case"triangles":return t.TRIANGLES;case"triangle-strip":return t.TRIANGLE_STRIP;case"triangle-fan":return t.TRIANGLE_FAN}}var Fc={color:"",pick:"",depth:"",marking:"",emissive:"",tracing:""},Mc=Object.keys(Fc),wc={compute:""},Gc=Object.keys(wc);function $n(e,r,t,a,o){return t={...t,dRenderVariant:n.create(r)},o.dRenderVariant===void 0&&Object.defineProperty(o,"dRenderVariant",{value:ae("string")}),e.resources.program(t,a,o)}function Oc(){return{attributes:!1,defines:!1,elements:!1,textures:!1}}function Nc(e){e.attributes=!1,e.defines=!1,e.elements=!1,e.textures=!1}function Zn(e,r){if(e==="color")switch(r){case"blended":return"colorBlended";case"wboit":return"colorWboit";case"dpoit":return"colorDpoit"}return e}function we(e,r,t,a,o,u,i){return Bs(e,r,t,a,o,u,Mc,i)}function Vs(e,r,t,a,o,u=-1){return Bs(e,r,t,a,o,u,Gc,void 0)}function Bs(e,r,t,a,o,u,i,p){let d=Bc(),{stats:y,state:C,resources:f}=e,{instancedArrays:b,vertexArrayObject:T,multiDrawInstancedBaseVertexBaseInstance:S,drawInstancedBaseVertexBaseInstance:l}=e.extensions;if(i=i.filter(j=>j==="tracing"?!!e.extensions.drawBuffers:!0),o.uVertexCount&&!e.extensions.noNonInstancedActiveAttribs){let j=o.uVertexCount.ref.value;o.aVertex=n.create(Or(new Float32Array(j))),a.aVertex=ce("float32",1,0)}let{attributeValues:s,defineValues:g,textureValues:c,materialTextureValues:h,uniformValues:x,materialUniformValues:A,bufferedUniformValues:v}=Is(a,o),_=Object.entries(x),E=Object.entries(A),I=Object.entries(v),P=Object.entries(Xi(v)),V=Object.entries(g),B=Ds(o),D=Lc(e,r),M={};for(let j of i)M[j]=$n(e,Zn(j,p),g,t,a);let q=Yn(e,a,c),W=Yn(e,a,h),O=Zi(e,a,s),L=[];for(let j=0,Y=O.length;j<Y;++j){let Z=O[j];Z[1].divisor===1&&L.push(Z)}let F,G=o.elements;G&&G.ref.value&&(F=f.elements(G.ref.value));let z={};for(let j of i)z[j]=T?f.vertexArray(M[j],O,F):null;let X=o.drawCount.ref.value,R=o.instanceCount.ref.value;y.drawCount+=X,y.instanceCount+=R,y.instancedDrawCount+=R*X;let w=Oc(),U=!1,H=-1;return{id:d,materialId:u,getByteCount(){let j=0;for(let Y=0,Z=O.length;Y<Z;++Y)j+=O[Y][1].getByteCount();F&&(j+=F.getByteCount());for(let Y=0,Z=q.length;Y<Z;++Y)j+=q[Y][1].getByteCount();for(let Y=0,Z=W.length;Y<Z;++Y)j+=W[Y][1].getByteCount();return j},getProgram:j=>M[j],setTransparency:j=>{if(j!==p){p=j;for(let Y of i)M[Y].destroy(),M[Y]=$n(e,Zn(Y,p),g,t,a)}},render:(j,Y,Z)=>{if(X===0||R===0)return;let K=M[j];if(K.id===H&&C.currentRenderItemId===d)K.setUniforms(_),K.bindTextures(q,Y);else{let J=z[j];(K.id!==C.currentProgramId||K.id!==H||u===-1||u!==C.currentMaterialId)&&(K.id!==C.currentProgramId&&K.use(),K.setUniforms(E),K.bindTextures(W,Y+q.length),C.currentMaterialId=u,H=K.id),K.setUniforms(_),K.setUniforms(P),K.bindTextures(q,Y),J?(J.bind(),F&&F.bind()):(F&&F.bind(),K.bindAttributes(O)),C.currentRenderItemId=d}if(ie&&e.checkFramebufferStatus(`Framebuffer error rendering item id ${d}`),Z){for(let J of Z)if(J.count!==0){if(K.setUniforms(J.uniforms),S)F?S.multiDrawElementsInstancedBaseVertexBaseInstance(D,J.counts,0,F._dataType,J.offsets,0,J.instanceCounts,0,J.baseVertices,0,J.baseInstances,0,J.count):S.multiDrawArraysInstancedBaseInstance(D,J.firsts,0,J.counts,0,J.instanceCounts,0,J.baseInstances,0,J.count);else if(l)if(F)for(let ee=0;ee<J.count;++ee)J.counts[ee]>0&&(K.uniform("uDrawId",ee),l.drawElementsInstancedBaseVertexBaseInstance(D,J.counts[ee],F._dataType,J.offsets[ee],J.instanceCounts[ee],J.baseVertices[ee],J.baseInstances[ee]));else for(let ee=0;ee<J.count;++ee)J.counts[ee]>0&&(K.uniform("uDrawId",ee),l.drawArraysInstancedBaseInstance(D,J.firsts[ee],J.counts[ee],J.instanceCounts[ee],J.baseInstances[ee]));else if(F)for(let ee=0;ee<J.count;++ee)J.counts[ee]>0&&(K.uniform("uDrawId",ee),K.offsetAttributes(L,J.baseInstances[ee]),b.drawElementsInstanced(D,J.counts[ee],F._dataType,J.offsets[ee],J.instanceCounts[ee]));else for(let ee=0;ee<J.count;++ee)J.counts[ee]>0&&(K.uniform("uDrawId",ee),K.offsetAttributes(L,J.baseInstances[ee]),b.drawArraysInstanced(D,J.firsts[ee],J.counts[ee],J.instanceCounts[ee]));if(ar){S?y.calls.multiDrawInstancedBase+=1:l?y.calls.drawInstancedBase+=J.count:y.calls.drawInstanced+=J.count;for(let ee=0;ee<J.count;++ee)y.calls.counts+=J.instanceCounts[ee]}}}else{let J=0;for(;;){let ee=Math.min(X-J,Vc);if(F?b.drawElementsInstanced(D,ee,F._dataType,J*F._bpe,R):b.drawArraysInstanced(D,J,ee,R),J+=ee,J>=X)break}ar&&(y.calls.drawInstanced+=1,y.calls.counts+=R)}ie&&e.checkError(`Draw error rendering item id ${d}`)},update:()=>{if(Nc(w),o.aVertex){let j=o.uVertexCount.ref.value;o.aVertex.ref.value.length<j&&n.update(o.aVertex,Or(new Float32Array(j)))}for(let j=0,Y=V.length;j<Y;++j){let[Z,K]=V[j];K.ref.version!==B[Z]&&(w.defines=!0,B[Z]=K.ref.version)}if(w.defines)for(let j of i)M[j].destroy(),M[j]=$n(e,Zn(j,p),g,t,a);o.drawCount.ref.version!==B.drawCount&&(y.drawCount+=o.drawCount.ref.value-X,y.instancedDrawCount+=R*o.drawCount.ref.value-R*X,X=o.drawCount.ref.value,B.drawCount=o.drawCount.ref.version),o.instanceCount.ref.version!==B.instanceCount&&(y.instanceCount+=o.instanceCount.ref.value-R,y.instancedDrawCount+=o.instanceCount.ref.value*X-R*X,R=o.instanceCount.ref.value,B.instanceCount=o.instanceCount.ref.version);for(let j=0,Y=O.length;j<Y;++j){let[Z,K]=O[j],J=s[Z];if(J.ref.version!==B[Z]){if(K.length>=J.ref.value.length)K.updateSubData(J.ref.value,0,K.length);else{K.destroy();let{itemSize:ee,divisor:Ie}=a[Z];O[j][1]=f.attribute(J.ref.value,ee,Ie),w.attributes=!0}B[Z]=J.ref.version}}if(F&&o.elements.ref.version!==B.elements&&(F.length>=o.elements.ref.value.length?F.updateSubData(o.elements.ref.value,0,F.length):(F.destroy(),F=f.elements(o.elements.ref.value),w.elements=!0),B.elements=o.elements.ref.version),w.attributes||w.defines||w.elements)for(let j of i){let Y=z[j];Y&&Y.destroy(),z[j]=T?f.vertexArray(M[j],O,F):null}for(let j=0,Y=q.length;j<Y;++j){let[Z,K]=q[j],J=c[Z];J.ref.version!==B[Z]&&(a[Z].kind!=="texture"?(K.load(J.ref.value),w.textures=!0):q[j][1]=J.ref.value,B[Z]=J.ref.version)}for(let j=0,Y=W.length;j<Y;++j){let[Z,K]=W[j],J=h[Z];J.ref.version!==B[Z]&&(a[Z].kind!=="texture"?(K.load(J.ref.value),w.textures=!0):W[j][1]=J.ref.value,B[Z]=J.ref.version)}for(let j=0,Y=I.length;j<Y;++j){let[Z,K]=I[j];K.ref.version!==B[Z]&&(n.update(P[j][1],jt(K.ref.value)),B[Z]=K.ref.version)}},destroy:()=>{if(!U){for(let j of i){M[j].destroy();let Y=z[j];Y&&Y.destroy()}q.forEach(([j,Y])=>{a[j].kind!=="texture"&&Y.destroy()}),W.forEach(([j,Y])=>{a[j].kind!=="texture"&&Y.destroy()}),O.forEach(([j,Y])=>Y.destroy()),F&&F.destroy(),y.drawCount-=X,y.instanceCount-=R,y.instancedDrawCount-=R*X,U=!0}}}}function bt(){return bt.create(ye(),ye(),ye(),ye(),ye(),ye())}(C=>{let e;(g=>(g[g.Right=0]="Right",g[g.Left=1]="Left",g[g.Bottom=2]="Bottom",g[g.Top=3]="Top",g[g.Far=4]="Far",g[g.Near=5]="Near"))(e=C.PlaneIndex||={});function r(f,b,T,S,l,s){return[f,b,T,S,l,s]}C.create=r;function t(f,b){for(let T=0;T<6;++T)ye.copy(f[T],b[T]);return f}C.copy=t;function a(f){return t(C(),f)}C.clone=a;function o(f,b){let T=b[0],S=b[1],l=b[2],s=b[3],g=b[4],c=b[5],h=b[6],x=b[7],A=b[8],v=b[9],_=b[10],E=b[11],I=b[12],P=b[13],V=b[14],B=b[15];return ye.setUnnormalized(f[0],s-T,x-g,E-A,B-I),ye.setUnnormalized(f[1],s+T,x+g,E+A,B+I),ye.setUnnormalized(f[2],s+S,x+c,E+v,B+P),ye.setUnnormalized(f[3],s-S,x-c,E-v,B-P),ye.setUnnormalized(f[4],s-l,x-h,E-_,B-V),ye.setUnnormalized(f[5],s+l,x+h,E+_,B+V),f}C.fromProjectionMatrix=o;function u(f,b){let T=b.center,S=-b.radius;for(let l=0;l<6;++l)if(ye.distanceToPoint(f[l],T)<S)return!1;return!0}C.intersectsSphere3D=u;function i(f,b){let T=b.center,S=b.radius;for(let l=0;l<6;++l)if(ye.distanceToPoint(f[l],T)<S)return!1;return!0}C.containsSphere3D=i;let p=m();function d(f,b){for(let T=0;T<6;++T){let S=f[T];if(p[0]=S.normal[0]>0?b.max[0]:b.min[0],p[1]=S.normal[1]>0?b.max[1]:b.min[1],p[2]=S.normal[2]>0?b.max[2]:b.min[2],ye.distanceToPoint(S,p)<0)return!1}return!0}C.intersectsBox3D=d;function y(f,b){for(let T=0;T<6;++T)if(ye.distanceToPoint(f[T],b)<0)return!1;return!0}C.containsPoint=y})(bt||={});var Jn=ye.distanceToPoint,ea=bt.intersectsSphere3D,kc=bt.containsSphere3D,Ls=$.fromArray,Ms=Ce();function Db(){return{}}function Uc(e,r){return r&&r.instanceCounts.length>=e?r:{firsts:new Int32Array(e),counts:new Int32Array(e),offsets:new Int32Array(e),instanceCounts:new Int32Array(e),baseVertices:new Int32Array(e),baseInstances:new Uint32Array(e),count:0,uniforms:[]}}var Fs={first:0,offset:0,instanceBase:0};function ra(){let e=[],r=-1,t=$(),a=[],o=[],u=[];function i(f,b,T){let S=f?.ref.value,l=!!S&&S.length>0,s=l?S.length:1,g=T?2:1;e.length=s;let c=l&&f.ref.version!==r;for(let h=0;h<s;++h)if(e[h]=Uc(b,e[h]),e[h].count=0,l){let x=e[h],A=!1;x.uniforms.length!==g&&(x.uniforms.length=g,x.uniforms[0]=["uLod",n.create(oe())],T&&(x.uniforms[1]=["uLodLevel",n.create(Math.min(h,3))]),A=!0),(c||A)&&n.update(x.uniforms[0][1],oe.set(x.uniforms[0][1].ref.value,S[h][0],S[h][1],S[h][2],S[h][4]))}else e[h].uniforms.length=0;return c&&(r=f.ref.version),l?S:void 0}function p(f,b,T,S,l,s){let g=f.count;g>0&&f.firsts[g-1]===b&&f.offsets[g-1]===T&&f.counts[g-1]===S&&f.baseInstances[g-1]+f.instanceCounts[g-1]===s?f.instanceCounts[g-1]+=l:(f.firsts[g]=b,f.offsets[g]=T,f.counts[g]=S,f.instanceCounts[g]=l,f.baseInstances[g]=s,f.count+=1)}function d(f,b,T,S,l,s,g,c){let h=f.drawCount.ref.value,x=f.instanceCount.ref.value;if(h===0||x===0)return!1;let{first:A,offset:v,instanceBase:_}=b,[E,I]=f.uLod.ref.value,P=E!==0||I!==0,V=f.instanceGrid.ref.value,B=T?T.length:0;for(let G=0;G<B;++G)a[G]=T[G][0],o[G]=T[G][1],u[G]=T[G][3];if(V.cellSize<=1){if(!c)return!1;let G=f.boundingSphere.ref.value,z=Jn(S,G.center);if(P&&(z+G.radius<E||z-G.radius>I))return ar&&(g.culled.lod+=x),!0;if(!ea(l,G))return ar&&(g.culled.frustum+=x),!0;if(s!==null&&s(G))return ar&&(g.culled.occlusion+=x),!0;if(T)for(let X=0,R=T.length;X<R;++X)z+G.radius<T[X][0]||z-G.radius>T[X][1]||p(e[X],A,v,h,x,_);else p(e[0],A,v,h,x,_);return!0}let{cellOffsets:D,cellSpheres:M,batchOffsets:q,batchSpheres:W,batchCount:O,batchSize:L}=V,F=2*L;for(let G=0;G<O;++G){let z=q[G],X=q[G+1],R=X-z;if(R===0)continue;Ls(t,W,G*4);let w=Jn(S,t.center);if(P&&(w+t.radius<E||w-t.radius>I)){ar&&(g.culled.lod+=D[X]-D[z]);continue}if(!ea(l,t)){ar&&(g.culled.frustum+=D[X]-D[z]);continue}if(s!==null&&s(t)){ar&&(g.culled.occlusion+=D[X]-D[z]);continue}if(R===1){let H=D[z],j=D[z+1]-H;if(j===0)continue;if(T){let Y=w+t.radius,Z=w-t.radius;for(let K=0;K<B;++K)Y<a[K]||Z>o[K]||p(e[K],A,v,u[K],j,_+H)}else p(e[0],A,v,h,j,_+H);continue}let U=kc(l,t);for(let H=z;H<X;++H){let j=D[H],Z=D[H+1]-j;if(Z===0)continue;Ls(t,M,H*4);let K=Jn(S,t.center);if(P&&(K+t.radius<E||K-t.radius>I)){ar&&(g.culled.lod+=Z);continue}if(!U&&!ea(l,t)){ar&&(g.culled.frustum+=Z);continue}if(s!==null&&K-t.radius<F&&s(t)){ar&&(g.culled.occlusion+=Z);continue}if(T){let J=K+t.radius,ee=K-t.radius;for(let Ie=0;Ie<B;++Ie)J<a[Ie]||ee>o[Ie]||p(e[Ie],A,v,u[Ie],Z,_+j)}else p(e[0],A,v,h,Z,_+j)}}return!0}function y(f,b,T){let S=f.drawCount.ref.value,l=f.instanceCount.ref.value;if(!(S===0||l===0))if(T)for(let s=0,g=T.length;s<g;++s)p(e[s],b.first,b.offset,T[s][3],l,b.instanceBase);else p(e[0],b.first,b.offset,S,l,b.instanceBase)}function C(f,b,T,S,l,s){if(!(f.drawCount.ref.value===0||f.instanceCount.ref.value===0)){for(let g=0,c=T.length;g<c;++g)if(S+l<T[g][1]*s){p(e[g],b.first,b.offset,T[g][3],f.instanceCount.ref.value,b.instanceBase);break}}}return{list:e,prepare:i,append:p,cullSegment:d,fullSegment:y,cullSimpleSegment:C}}function Ne(e,r,t){let a=Ms(),o=ra(),u=ta(r),i=!1,p;return{id:a,materialId:e.materialId,values:r,state:t,cull:(d,y,C,f,b)=>{if(b===p){f.cacheHits.cull++;return}if(i=!1,r.drawCount.ref.value===0||r.instanceCount.ref.value===0||r.instanceGrid.ref.value.cellSize<=1)return;let T=o.prepare(r.lodLevels,r.instanceGrid.ref.value.cellCount,!1);o.cullSegment(r,Fs,T,d,y,C,f,!1),i=!0,p=b},uncull:()=>{i=!1,p=void 0},cullSimple:(d,y,C)=>{i=!1;let f=o.prepare(r.lodLevels,Math.max(1,r.instanceGrid.ref.value.cellCount),!1);f&&(o.cullSimpleSegment(r,Fs,f,d,y,C),i=!0)},render:(d,y)=>{r.uAlpha&&r.alpha&&n.updateIfChanged(r.uAlpha,pr(r.alpha.ref.value*t.alphaFactor,0,1)),e.render(d,y,i?o.list:void 0)},getClipInfo:u.get,getByteCount:()=>e.getByteCount(),getProgram:d=>e.getProgram(d),setTransparency:d=>e.setTransparency(d),update:()=>{e.update(),p=void 0},dispose:()=>e.destroy()}}function zc(e,r){let{objects:t,planes:a,capIndices:o}=e;if(t.count=r.dClipObjectCount.ref.value,t.type=r.uClipObjectType.ref.value,t.invert=r.uClipObjectInvert.ref.value,t.position=r.uClipObjectPosition.ref.value,t.rotation=r.uClipObjectRotation.ref.value,t.scale=r.uClipObjectScale.ref.value,t.transform=r.uClipObjectTransform.ref.value,o.length=0,r.dClipVariant.ref.value!=="pixel")return;let u=r.boundingSphere.ref.value;for(let i=0;i<t.count;++i)t.type[i]===Nr.Type.plane&&Nr.getPlane(a[i]??=ye(),t,i),Nr.canIntersectSphere(t,i,u)&&o.push(i)}function ta(e){let r=[e.dClipObjectCount,e.dClipVariant,e.boundingSphere,e.uClipObjectType,e.uClipObjectInvert,e.uClipObjectPosition,e.uClipObjectRotation,e.uClipObjectScale,e.uClipObjectTransform],t=r.map(()=>-1),a={objects:{count:0,type:[],invert:[],position:[],rotation:[],scale:[],transform:[]},planes:[],capIndices:[]};function o(){if(e.dClipObjectCount.ref.value===0)return;let u=!1;for(let i=0,p=r.length;i<p;++i){let d=r[i].ref.version;d!==t[i]&&(t[i]=d,u=!0)}return u&&zc(a,e),a}return{get:o}}function ws(e,r){return{id:Ms(),values:r,render:()=>{e.getProgram("compute").finalize(!0),e.render("compute",0)},update:()=>e.update(),dispose:()=>e.destroy()}}var oa=new Float32Array([1,1,-1,1,-1,-1,-1,-1,1,-1,1,1]),jc={drawCount:de("number"),instanceCount:de("number"),aPosition:ce("float32",2,0),uQuadScale:N("v2")},Wc={drawCount:n.create(6),instanceCount:n.create(1),aPosition:n.create(oa),uQuadScale:n.create(re.create(1,1))},qc={...jc,tColor:me("texture","rgba","ubyte","nearest"),uTexSize:N("v2")},Hc=kr("copy",Rs,Ps);function Xc(e,r){let t={...Wc,tColor:n.create(r),uTexSize:n.create(re.create(r.getWidth(),r.getHeight()))},a={...qc},o=Vs(e,"triangles",Hc,a,t);return ws(o,t)}var na="shared-copy";function Kc(e,r){e.namedComputeRenderables[na]||(e.namedComputeRenderables[na]=Xc(e,Te()));let t=e.namedComputeRenderables[na];return n.update(t.values.tColor,r),n.update(t.values.uTexSize,re.set(t.values.uTexSize.ref.value,r.getWidth(),r.getHeight())),t.update(),t}var aa="read-texture",ht="read-alpha-texture";function Ob(e,r,t){let{gl:a,resources:o}=e;if(!t&&r.type!==a.UNSIGNED_BYTE)throw new Error("unsupported texture type");e.namedFramebuffers[aa]||(e.namedFramebuffers[aa]=o.framebuffer());let u=e.namedFramebuffers[aa],i=r.getWidth(),p=r.getHeight();return t||(t=new Uint8Array(i*p*4)),u.bind(),r.attachFramebuffer(u,0),e.readPixels(0,0,i,p,t),{array:t,width:i,height:p}}function Nb(e,r){let{gl:t,state:a,resources:o}=e;if(r.type!==t.UNSIGNED_BYTE)throw new Error("unsupported texture type");let u=r.getWidth(),i=r.getHeight(),p=Kc(e,r);a.currentRenderItemId=-1,e.namedFramebuffers[ht]||(e.namedFramebuffers[ht]=o.framebuffer());let d=e.namedFramebuffers[ht];d.bind(),e.namedTextures[ht]||(e.namedTextures[ht]=o.texture("image-uint8","rgba","ubyte","linear"));let y=e.namedTextures[ht];y.define(u,i),y.attachFramebuffer(d,0),a.disable(t.CULL_FACE),a.enable(t.BLEND),a.disable(t.DEPTH_TEST),a.enable(t.SCISSOR_TEST),a.depthMask(!1),a.clearColor(0,0,0,0),a.blendFunc(t.ONE,t.ONE),a.blendEquation(t.FUNC_ADD),a.viewport(0,0,u,i),a.scissor(0,0,u,i),t.clear(t.COLOR_BUFFER_BIT),p.render();let C=new Uint8Array(u*i*4);return e.readPixels(0,0,u,i,C),{array:C,width:u,height:i}}function Qc(e,r){for(let t=0,a=r*3;t<a;t+=3){let o=e[t],u=e[t+1],i=e[t+2],p=1/Math.sqrt(o*o+u*u+i*i);e[t]=o*p,e[t+1]=u*p,e[t+2]=i*p}return e}var sr=m();function zr(e,r,t,a){for(let o=0,u=a*3;o<u;o+=3)m.fromArray(sr,r,t+o),m.transformMat4(sr,sr,e),m.toArray(sr,r,t+o)}function ks(e,r,t,a){for(let o=0,u=a*3;o<u;o+=3)m.fromArray(sr,r,t+o),m.transformMat3(sr,sr,e),m.toArray(sr,r,t+o)}function Us(e,r){for(let t=0,a=e.length;t<a;t+=3)m.fromArray(sr,e,t),m.normalize(sr,sr),m.scale(sr,sr,r),m.toArray(sr,e,t)}var Gs=m(),ia=m(),Os=m(),vr=m(),Ns=m();function dn(e,r,t,a,o){for(let u=0,i=o*3;u<i;u+=3){let p=r[u]*3,d=r[u+1]*3,y=r[u+2]*3;m.fromArray(Gs,e,p),m.fromArray(ia,e,d),m.fromArray(Os,e,y),m.sub(vr,Os,ia),m.sub(Ns,Gs,ia),m.cross(vr,vr,Ns),t[p]+=vr[0],t[p+1]+=vr[1],t[p+2]+=vr[2],t[d]+=vr[0],t[d+1]+=vr[1],t[d+2]+=vr[2],t[y]+=vr[0],t[y+1]+=vr[1],t[y+2]+=vr[2]}return Qc(t,a)}function Tr(e,r,t=1){let a=qt(e),o=new Int32Array(a+2),u=new Int32Array(r),i=new Int32Array(r);for(let y=0,C=r*t;y<C;y+=t)++i[e[y]];let p=0;for(let y=0;y<r;y++)o[y]=p,p+=i[y];o[r]=p;let d=new Int32Array(p);for(let y=0,C=r*t;y<C;y+=t){let f=e[y],b=o[f]+u[f];d[b]=y,++u[f]}return{indices:d,offsets:o}}var Ye=new Uint8Array(772);Ye[1]=1;Ye[2]=1;Ye[3]=1;Ye[256]=1;Ye[512]=1;Ye[768]=1;Ye[257]=2;Ye[513]=2;Ye[769]=2;Ye[258]=2;Ye[514]=2;Ye[770]=2;Ye[259]=2;Ye[515]=2;Ye[771]=2;function Xb(e,r){if(r===0)return 0;let t=new Uint32Array(e.buffer,0,e.buffer.byteLength>>2),a=r-4>>2,o=4*a,u=0;if(a<0)for(let i=0;i<r;++i)u+=e[i]&&1;else{for(let i=0;i<a;++i){let p=t[i];u+=Ye[p&65535]+Ye[p>>16]}for(let i=o;i<r;++i)u+=e[i]&&1}return u/r}function xe(e,r,t){if(t){let a=le(Math.max(1,e),1,Uint8Array,t.tMarker.ref.value.array);return a.array.fill(0,0,e),n.updateIfChanged(t.uMarker,0),n.update(t.tMarker,a),n.update(t.uMarkerTexDim,re.create(a.width,a.height)),n.updateIfChanged(t.markerAverage,0),n.updateIfChanged(t.markerStatus,0),n.updateIfChanged(t.dMarkerType,r),t}else{let a=le(Math.max(1,e),1,Uint8Array);return{uMarker:n.create(0),tMarker:n.create(a),uMarkerTexDim:n.create(re.create(a.width,a.height)),markerAverage:n.create(0),markerStatus:n.create(0),dMarkerType:n.create(r)}}}var Kb={array:new Uint8Array(1),width:1,height:1};function ke(e,r,t,a){let o=Yc(e,r,t,a);if(t.palette){n.updateIfChanged(o.dUsePalette,!0);let[u,i]=t.palette.domain||[0,1];n.update(o.uPaletteDomain,re.set(o.uPaletteDomain.ref.value,u,i)),n.update(o.uPaletteDefault,ge.toVec3Normalized(o.uPaletteDefault.ref.value,t.palette.defaultColor??13421772)),$c(t.palette,o.tPalette)}else n.updateIfChanged(o.dUsePalette,!1);return o}function Yc(e,r,t,a){switch(t.granularity){case"uniform":return Jc(e,t.color,a);case"instance":return e.nonInstanceable?zs(e,t.color,a):ed(e,t.color,a);case"group":return zs(e,t.color,a);case"groupInstance":return rd(e,t.color,a);case"vertex":return td(r,t.color,a);case"vertexInstance":return nd(r,t.color,a);case"volume":return js(t.grid,"volume",a);case"volumeInstance":return js(t.grid,"volumeInstance",a);case"direct":return ad(a)}}function $c(e,r){let t=!0,a=r.ref.value;if(e.colors.length!==a.width||a.filter!==e.filter)t=!1;else{let i=a.array,p=0;for(let d of e.colors){let[y,C,f]=ge.toRgb(d);if(i[p++]!==y||i[p++]!==C||i[p++]!==f){t=!1;break}}}if(t)return;let o=new Uint8Array(e.colors.length*3),u=0;for(let i of e.colors){let[p,d,y]=ge.toRgb(i);o[u++]=p,o[u++]=d,o[u++]=y}n.update(r,{array:o,height:1,width:e.colors.length,filter:e.filter})}function Zc(e,r){return r?(n.update(r.uColor,ge.toVec3Normalized(r.uColor.ref.value,e)),n.updateIfChanged(r.dColorType,"uniform"),r):{uColor:n.create(ge.toVec3Normalized(m(),e)),tColor:n.create({array:new Uint8Array(3),width:1,height:1}),tColorGrid:n.create(Te()),uPaletteDomain:n.create(re.create(0,1)),uPaletteDefault:n.create(m()),tPalette:n.create({array:new Uint8Array(3),width:1,height:1}),uColorTexDim:n.create(re.create(1,1)),uColorGridDim:n.create(m.create(1,1,1)),uColorGridTransform:n.create(oe.create(0,0,0,1)),dColorType:n.create("uniform"),dUsePalette:n.create(!1)}}function Jc(e,r,t){e.reset();let a=e.hasNext?e.move():{location:Ke,isSecondary:!1};return Zc(r(a.location,a.isSecondary),t)}function Ft(e,r,t){return t?(n.update(t.tColor,e),n.update(t.uColorTexDim,re.create(e.width,e.height)),n.updateIfChanged(t.dColorType,r),t):{uColor:n.create(m()),tColor:n.create(e),tColorGrid:n.create(Te()),uPaletteDomain:n.create(re.create(0,1)),uPaletteDefault:n.create(m()),tPalette:n.create({array:new Uint8Array(3),width:1,height:1}),uColorTexDim:n.create(re.create(e.width,e.height)),uColorGridDim:n.create(m.create(1,1,1)),uColorGridTransform:n.create(oe.create(0,0,0,1)),dColorType:n.create(r),dUsePalette:n.create(!1)}}function ed(e,r,t){let{instanceCount:a}=e,o=le(Math.max(1,a),3,Uint8Array,t&&t.tColor.ref.value.array);for(e.reset();e.hasNext;){let{location:u,isSecondary:i,instanceIndex:p}=e.move();ge.toArray(r(u,i),o.array,p*3),e.skipInstance()}return Ft(o,"instance",t)}function zs(e,r,t){let{groupCount:a,hasLocation2:o}=e,u=le(Math.max(1,a*(o?2:1)),3,Uint8Array,t&&t.tColor.ref.value.array);e.reset();let i=o?6:3;for(;e.hasNext&&!e.isNextNewInstance;){let{location:p,location2:d,isSecondary:y,groupIndex:C}=e.move();ge.toArray(r(p,y),u.array,C*i),o&&ge.toArray(r(d,y),u.array,C*i+3)}return Ft(u,"group",t)}function rd(e,r,t){let{groupCount:a,instanceCount:o,hasLocation2:u}=e,i=o*a*(u?2:1),p=le(Math.max(1,i),3,Uint8Array,t&&t.tColor.ref.value.array);e.reset();let d=u?6:3;for(;e.hasNext;){let{location:y,location2:C,isSecondary:f,index:b}=e.move();ge.toArray(r(y,f),p.array,b*d),u&&ge.toArray(r(C,f),p.array,b*d+3)}return Ft(p,"groupInstance",t)}function td(e,r,t){let{groupCount:a,stride:o}=e,u=le(Math.max(1,a),3,Uint8Array,t&&t.tColor.ref.value.array);for(e.reset(),e.voidInstances();e.hasNext&&!e.isNextNewInstance;){let{location:i,isSecondary:p,groupIndex:d}=e.move(),y=r(i,p);for(let C=0;C<o;++C)ge.toArray(y,u.array,(d+C)*3)}return Ft(u,"vertex",t)}function nd(e,r,t){let{groupCount:a,instanceCount:o,stride:u}=e,i=o*a,p=le(Math.max(1,i),3,Uint8Array,t&&t.tColor.ref.value.array);for(e.reset();e.hasNext;){let{location:d,isSecondary:y,index:C}=e.move(),f=r(d,y);for(let b=0;b<u;++b)ge.toArray(f,p.array,(C+b)*3)}return Ft(p,"vertexInstance",t)}function js(e,r,t){let{colors:a,dimension:o,transform:u}=e,i=a.getWidth(),p=a.getHeight();return t?(n.update(t.tColorGrid,a),n.update(t.uColorTexDim,re.create(i,p)),n.update(t.uColorGridDim,m.clone(o)),n.update(t.uColorGridTransform,oe.clone(u)),n.updateIfChanged(t.dColorType,r),t):{uColor:n.create(m()),tColor:n.create({array:new Uint8Array(3),width:1,height:1}),tColorGrid:n.create(a),uPaletteDomain:n.create(re.create(0,1)),uPaletteDefault:n.create(m()),tPalette:n.create({array:new Uint8Array(3),width:1,height:1}),uColorTexDim:n.create(re.create(i,p)),uColorGridDim:n.create(m.clone(o)),uColorGridTransform:n.create(oe.clone(u)),dColorType:n.create(r),dUsePalette:n.create(!1)}}function ad(e){return e?(n.updateIfChanged(e.dColorType,"direct"),e):{uColor:n.create(m()),tColor:n.create({array:new Uint8Array(3),width:1,height:1}),tColorGrid:n.create(Te()),uPaletteDomain:n.create(re.create(0,1)),uPaletteDefault:n.create(m()),tPalette:n.create({array:new Uint8Array(3),width:1,height:1}),uColorTexDim:n.create(re.create(1,1)),uColorGridDim:n.create(m.create(1,1,1)),uColorGridTransform:n.create(oe.create(0,0,0,1)),dColorType:n.create("direct"),dUsePalette:n.create(!1)}}var od=m.transformMat4Offset,id=m.fromArray,fn=ve.add;function Mt(){return{cellSize:0,cellCount:0,cellOffsets:new Uint32Array,cellSpheres:new Float32Array,cellTransform:new Float32Array,cellInstance:new Float32Array,batchSize:0,batchCount:0,batchOffsets:new Uint32Array,batchSpheres:new Float32Array,batchCell:new Uint32Array}}function Ws(e,r,t){let a=sd(e,r),o=ud(a,t),u=new Uint32Array(a.cellOffsets.length),i=new Float32Array(a.cellSpheres.length),p=new Float32Array(a.cellInstance.length),{transform:d}=e,{cellTransform:y}=a,C=d.byteOffset%8===0&&y.byteOffset%8===0,f=C?new Float64Array(d.buffer,d.byteOffset,d.length>>1):void 0,b=C?new Float64Array(y.buffer,y.byteOffset,y.length>>1):void 0,T=0;for(let l=0,s=o.batchCell.length;l<s;++l){let g=o.batchCell[l],c=a.cellOffsets[g],x=a.cellOffsets[g+1]-c;u[l+1]=u[l]+x;for(let A=0;A<4;++A)i[l*4+A]=a.cellSpheres[g*4+A];for(let A=0;A<x;++A){let v=c+A,_=a.cellInstance[v]|0;if(f&&b){let E=_*8,I=T*8;for(let P=0;P<8;++P)b[I+P]=f[E+P]}else{let E=_*16,I=T*16;for(let P=0;P<16;++P)y[I+P]=d[E+P]}p[T]=_,T+=1}}return{cellSize:a.cellSize,cellCount:a.cellCount,cellOffsets:u,cellSpheres:i,cellTransform:a.cellTransform,cellInstance:p,batchSize:o.batchSize,batchCount:o.batchCount,batchOffsets:o.batchOffsets,batchSpheres:o.batchSpheres,batchCell:Or(o.batchCell)}}function sd(e,r){let{instanceCount:t,instance:a,transform:o,invariantBoundingSphere:u}=e,i=new Float32Array(t),p=new Float32Array(t),d=new Float32Array(t),y=fr.ofBounds(0,t),C=ve.setEmpty(ve()),{center:f,radius:b}=u,T=m.create(b,b,b),S=m();for(let D=0;D<t;++D)od(S,f,o,0,0,D*16),i[D]=S[0],p[D]=S[1],d[D]=S[2],fn(C,S);ve.expand(C,C,T);let l={x:i,y:p,z:d,indices:y},s={box:C,sphere:$.fromBox3D($(),C)},g=Gn(l,s,m.create(r,r,r)),{array:c,offset:h,count:x}=g.buckets,A=h.length,v=new Uint32Array(A+1),_=new Float32Array(A*4),E=new Float32Array(t*16),I=new Float32Array(t),P=ve(),V=$(),B=0;for(let D=0;D<A;++D){let M=h[D],q=x[D];v[D]=M;for(let W=M,O=M+q;W<O;++W)I[B]=a[c[W]],B+=1;if(q===1){let W=c[M];_[D*4]=i[W],_[D*4+1]=p[W],_[D*4+2]=d[W],_[D*4+3]=b}else{ve.setEmpty(P);for(let W=M,O=M+q;W<O;++W){let L=c[W];m.set(S,i[L],p[L],d[L]),fn(P,S)}ve.expand(P,P,T),$.fromBox3D(V,P),$.toArray(V,_,D*4)}}return v[A]=h[A-1]+x[A-1],{cellSize:r,cellCount:A,cellOffsets:v,cellSpheres:_,cellTransform:E,cellInstance:I}}function ud(e,r){let{cellCount:t,cellSpheres:a}=e,o=new Float32Array(t),u=new Float32Array(t),i=new Float32Array(t),p=fr.ofBounds(0,t),d=ve.setEmpty(ve()),y=m(),C=0;for(let I=0;I<t;++I){let P=I*4;id(y,a,P),o[I]=y[0],u[I]=y[1],i[I]=y[2],fn(d,y),C=Math.max(C,a[P+3])}let f=m.create(C,C,C);ve.expand(d,d,f);let b={x:o,y:u,z:i,indices:p},T={box:d,sphere:$.fromBox3D($(),d)},S=Gn(b,T,m.create(r,r,r)),{array:l,offset:s,count:g}=S.buckets,c=s.length,h=new Uint32Array(c+1),x=new Float32Array(c*4),A=new Uint32Array(t),v=ve(),_=$(),E=0;for(let I=0;I<c;++I){let P=s[I],V=g[I];h[I]=P;for(let B=P,D=P+V;B<D;++B)A[E]=l[B],E+=1;if(V===1){let B=l[P];x[I*4]=a[B*4],x[I*4+1]=a[B*4+1],x[I*4+2]=a[B*4+2],x[I*4+3]=a[B*4+3]}else{ve.setEmpty(v),C=0;for(let B=P,D=P+V;B<D;++B){let M=l[B];y[0]=a[M*4],y[1]=a[M*4+1],y[2]=a[M*4+2],fn(v,y),C=Math.max(C,a[M*4+3])}m.set(f,C,C,C),ve.expand(v,v,f),$.fromBox3D(_,v),$.toArray(_,x,I*4)}}return h[c]=s[c-1]+g[c-1],{batchSize:r,batchCount:c,batchOffsets:h,batchSpheres:x,batchCell:A}}var qs=dr(),ld=se();function cd(e,r){for(let t=0;t<r;t++)if(dr.fromMat4(qs,se.fromArray(ld,e,t*16)),dr.determinant(qs)<0)return!0;return!1}function dd(e,r,t,a,o,u){let i=cd(e,r);if(u){n.update(u.matrix,u.matrix.ref.value);let p=u.transform.ref.value.length>=r*16?u.transform.ref.value:new Float32Array(r*16);p.set(e),n.update(u.transform,p),n.updateIfChanged(u.uInstanceCount,r),n.updateIfChanged(u.instanceCount,r);let d=u.aTransform.ref.value.length>=r*16?u.aTransform.ref.value:new Float32Array(r*16);n.update(u.aTransform,d);let y=u.extraTransform.ref.value.length>=r*16?u.extraTransform.ref.value:new Float32Array(r*16);n.update(u.extraTransform,y),n.updateIfChanged(u.hasExtraTransform,!1);let C=u.aInstance.ref.value.length>=r?u.aInstance.ref.value:new Float32Array(r);n.update(u.aInstance,Or(C,r)),n.update(u.hasReflection,i)}else u={aTransform:n.create(new Float32Array(r*16)),matrix:n.create(se.identity()),transform:n.create(new Float32Array(e)),extraTransform:n.create(new Float32Array(r*16)),hasExtraTransform:n.create(!1),uInstanceCount:n.create(r),instanceCount:n.create(r),aInstance:n.create(Or(new Float32Array(r))),hasReflection:n.create(i),instanceGrid:n.create(Mt())};return fd(u,t,a,o),u}var Hs=new Float32Array(16);se.toArray(se.identity(),Hs,0);function Xs(e){return dd(new Float32Array(Hs),1,void 0,0,0,e)}function fd(e,r,t,a){let o=e.aTransform.ref.value,u=e.aInstance.ref.value,i=e.instanceCount.ref.value,p=e.matrix.ref.value,d=e.transform.ref.value,y=e.extraTransform.ref.value,C=e.hasExtraTransform.ref.value,f=se.isIdentity(p);if(!C&&f)for(let b=0,T=i*16;b<T;b++)o[b]=d[b];else if(!C&&!f)for(let b=0;b<i;b++){let T=b*16;se.mulOffset(o,p,d,T,0,T)}else if(C&&f)for(let b=0;b<i;b++){let T=b*16;se.mulOffset(o,y,d,T,T,T)}else for(let b=0;b<i;b++){let T=b*16;se.mulOffset(o,y,d,T,T,T),se.mulOffset(o,p,o,T,0,T)}for(let b=0;b<i;b++)u[b]=b;if(r&&i>0){let b=Ws({instanceCount:i,instance:u,transform:o,invariantBoundingSphere:r},t,a);n.update(e.instanceGrid,b),n.update(e.aInstance,b.cellInstance),n.update(e.aTransform,b.cellTransform)}else n.update(e.aInstance,u),n.update(e.aTransform,o)}var Ks={Atom:"Atom Property",Chain:"Chain Property",Residue:"Residue Property",Symmetry:"Symmetry",Validation:"Validation",Particle:"Particle",Misc:"Miscellaneous"};var Qs=13421772,md="Gives everything the same, uniform color.",Ys={value:k.Color(Qs),saturation:k.Numeric(0,{min:-6,max:6,step:.1}),lightness:k.Numeric(0,{min:-6,max:6,step:.1})};function pd(e){return Ys}function mn(e,r){let t=La(r.value,Qs);return t=ge.saturate(t,r.saturation),t=ge.lighten(t,r.lightness),{factory:mn,granularity:"uniform",color:()=>t,props:r,description:md,legend:za([["uniform",t]])}}var Th={name:"uniform",label:"Uniform",category:Ks.Misc,factory:mn,getParams:pd,defaultValues:k.getDefaultValues(Ys),isApplicable:e=>!0};var gd="Gives everything the same, uniform size.",$s={value:k.Numeric(1,{min:0,max:20,step:.1})};function yd(e){return $s}function pn(e,r){let t=r.value;return{factory:pn,granularity:"uniform",size:()=>t,props:r,description:gd}}var _h={name:"uniform",label:"Uniform",category:"",factory:pn,getParams:yd,defaultValues:k.getDefaultValues($s),isApplicable:e=>!0};function Rr(e){return{...Rr.Zero,...e}}(i=>{i.Zero={metalness:0,roughness:0,bumpiness:0};function r(p,d,y){return d[y]=p.metalness*255,d[y+1]=p.roughness*255,d[y+2]=p.bumpiness*255,d}i.toArray=r;function t(p,d,y){return d[y]=p.metalness,d[y+1]=p.roughness,d[y+2]=p.bumpiness,d}i.toArrayNormalized=t;function a(p,d){return p.metalness===d.metalness&&p.roughness===d.roughness&&p.bumpiness===d.bumpiness}i.areEqual=a;function o({metalness:p,roughness:d,bumpiness:y}){return`M ${p.toFixed(2)} | R ${d.toFixed(2)} | B ${y.toFixed(2)}`}i.toString=o;function u(p){return k.Group({metalness:k.Numeric(0,{min:0,max:1,step:.01}),roughness:k.Numeric(1,{min:0,max:1,step:.01}),bumpiness:k.Numeric(0,{min:0,max:1,step:.01})},{...p,presets:[[{metalness:0,roughness:1,bumpiness:0},"Matte"],[{metalness:0,roughness:.2,bumpiness:0},"Plastic"],[{metalness:0,roughness:.6,bumpiness:0},"Glossy"],[{metalness:1,roughness:.6,bumpiness:0},"Metallic"]]})}i.getParam=u})(Rr||={});var bd={custom:{},auto:{},highest:{},higher:{},high:{},medium:{},low:{},lower:{},lowest:{}},hd=Object.keys(bd),xd=k.arrayToOptions(hd),Uh={smoothColors:k.MappedStatic("auto",{auto:k.Group({}),on:k.Group({resolutionFactor:k.Numeric(2,{min:.5,max:6,step:.1}),sampleStride:k.Numeric(3,{min:1,max:12,step:1})}),off:k.Group({})})};function zh(e){return!!e.smoothColors}function jh(e,r,t){if((e.name==="on"||e.name==="auto"&&r)&&t&&t<3){let a=3;return e.name==="on"?(t*=e.params.resolutionFactor,a=e.params.sampleStride):(t*=2-Oa(0,1.1,t),t=Math.max(.5,t),t>1.2&&(a=2)),{resolution:t,stride:a}}}var vd=[[!0,"On"],[!1,"Off"],["auto","Auto"]],Td=5e7;function Ge(e,r,t){return e==="auto"?r*t>Td:e}var Cd=[[!0,"On"],[!1,"Off"],["auto","Auto"]],Sd=100;function Wh(e,r){return e==="auto"?r>Sd:e}var Q;(C=>{C.MaterialCategory={category:"Material"},C.ShadingCategory={category:"Shading"},C.CullingLodCategory={category:"Culling & LOD"},C.CustomQualityParamInfo={category:"Custom Quality",hideIf:f=>typeof f.quality<"u"&&f.quality!=="custom"},C.Params={alpha:k.Numeric(1,{min:0,max:1,step:.01},{label:"Opacity",isEssential:!0,description:"How opaque/transparent the representation is rendered."}),quality:k.Select("auto",xd,{isEssential:!0,description:"Visual/rendering quality of the representation."}),material:Rr.getParam(),clip:k.Group(Nr.Params),emissive:k.Numeric(0,{min:0,max:1,step:.01}),density:k.Numeric(.2,{min:0,max:1,step:.01},{description:"Density value to estimate object thickness."}),instanceGranularity:k.Select("auto",vd,{description:"Use instance granularity for marker, transparency, clipping, overpaint, substance data to save memory. When set to `auto`, granularity is enabled if `groupCount * instanceCount` exceeds `AutoInstanceGranularityThreshold`."}),renderMerged:k.Select("auto",Cd,{description:"Render all units of the representation through a single shared render item per geometry kind to reduce draw calls. When set to `auto`, enabled if the number of mergeable units exceeds `AutoRenderMergedThreshold`. Supported for spheres, mesh, cylinders, lines, and points geometry."}),lod:k.Vec3(m(),void 0,{...C.CullingLodCategory,description:"Level of detail.",fieldLabels:{x:"Min Distance",y:"Max Distance",z:"Overlap (Shader)"}}),cellSize:k.Numeric(200,{min:0,max:5e3,step:100},{...C.CullingLodCategory,description:"Instance grid cell size."}),batchSize:k.Numeric(2e3,{min:0,max:5e4,step:500},{...C.CullingLodCategory,description:"Instance grid batch size."})};function u(f=Rt.grey,b=1,T){T||(T=Xs());let S=Se(1,T.instanceCount.ref.value,1,()=>Ke,!1,()=>!1),l={color:mn({},{value:f,lightness:0,saturation:0}),size:pn({},{value:b})};return{transform:T,locationIterator:S,theme:l}}C.createSimple=u;function i(f,b){let T=Nr.getClip(f.clip);return{alpha:n.create(f.alpha),uAlpha:n.create(f.alpha),uVertexCount:n.create(b.vertexCount),uGroupCount:n.create(b.groupCount),drawCount:n.create(b.drawCount),uMetalness:n.create(f.material.metalness),uRoughness:n.create(f.material.roughness),uBumpiness:n.create(f.material.bumpiness),uEmissive:n.create(f.emissive),uDensity:n.create(f.density),dClipObjectCount:n.create(T.objects.count),dClipVariant:n.create(T.variant),uClipObjectType:n.create(T.objects.type),uClipObjectInvert:n.create(T.objects.invert),uClipObjectPosition:n.create(T.objects.position),uClipObjectRotation:n.create(T.objects.rotation),uClipObjectScale:n.create(T.objects.scale),uClipObjectTransform:n.create(T.objects.transform),instanceGranularity:n.create(Ge(f.instanceGranularity,b.groupCount,b.instanceCount)),uLod:n.create(oe.create(f.lod[0],f.lod[1],f.lod[2],0))}}C.createValues=i;function p(f,b){n.updateIfChanged(f.alpha,b.alpha),n.updateIfChanged(f.uMetalness,b.material.metalness),n.updateIfChanged(f.uRoughness,b.material.roughness),n.updateIfChanged(f.uBumpiness,b.material.bumpiness),n.updateIfChanged(f.uEmissive,b.emissive),n.updateIfChanged(f.uDensity,b.density);let T=Nr.getClip(b.clip);n.updateIfChanged(f.dClipObjectCount,T.objects.count),n.updateIfChanged(f.dClipVariant,T.variant),n.update(f.uClipObjectType,T.objects.type),n.update(f.uClipObjectInvert,T.objects.invert),n.update(f.uClipObjectPosition,T.objects.position),n.update(f.uClipObjectRotation,T.objects.rotation),n.update(f.uClipObjectScale,T.objects.scale),n.update(f.uClipObjectTransform,T.objects.transform),n.updateIfChanged(f.instanceGranularity,Ge(b.instanceGranularity,f.uGroupCount.ref.value,f.instanceCount.ref.value)),n.update(f.uLod,oe.set(f.uLod.ref.value,b.lod[0],b.lod[1],b.lod[2],0))}C.updateValues=p;function d(f={}){let b=f.alpha===void 0?!0:f.alpha===1;return{disposed:!1,visible:!0,alphaFactor:1,pickable:!0,colorOnly:!1,opaque:b,writeDepth:b}}C.createRenderableState=d;function y(f,b){f.opaque=b.alpha*f.alphaFactor>=1,f.writeDepth=f.opaque}C.updateRenderableState=y})(Q||={});function $h(e,r,t,a){for(let o=r;o<t;++o)ge.toArray(a,e,o*4),e[o*4+3]=255;return!0}function Zh(e,r,t){return e.fill(0,r*4,t*4),!0}function Jh(e,r,t){let a=le(Math.max(1,e),4,Uint8Array,t&&t.tOverpaint.ref.value.array);return t?(n.update(t.tOverpaint,a),n.update(t.uOverpaintTexDim,re.create(a.width,a.height)),n.updateIfChanged(t.dOverpaint,e>0),n.updateIfChanged(t.dOverpaintType,r),t):{tOverpaint:n.create(a),uOverpaintTexDim:n.create(re.create(a.width,a.height)),dOverpaint:n.create(e>0),tOverpaintGrid:n.create(Te()),uOverpaintGridDim:n.create(m.create(1,1,1)),uOverpaintGridTransform:n.create(oe.create(0,0,0,1)),dOverpaintType:n.create(r),uOverpaintStrength:n.create(1)}}var Zs={array:new Uint8Array(4),width:1,height:1};function Ue(e){return e?(n.update(e.tOverpaint,Zs),n.update(e.uOverpaintTexDim,re.create(1,1)),e):{tOverpaint:n.create(Zs),uOverpaintTexDim:n.create(re.create(1,1)),dOverpaint:n.create(!1),tOverpaintGrid:n.create(Te()),uOverpaintGridDim:n.create(m.create(1,1,1)),uOverpaintGridTransform:n.create(oe.create(0,0,0,1)),dOverpaintType:n.create("groupInstance"),uOverpaintStrength:n.create(1)}}function ox(e,r,t,a){for(let o=r;o<t;++o)e[o]=a*255;return!0}function _d(e,r){if(r===0||e.length<r)return 0;let t=0;for(let a=0;a<r;++a)t+=e[a];return t/(255*r)}function Ad(e,r){if(r===0||e.length<r)return 1;let t=255;for(let a=0;a<r;++a)e[a]>0&&e[a]<t&&(t=e[a]);return t/255}function ix(e,r,t){e.fill(0,r,t)}function sx(e,r,t){let a=le(Math.max(1,e),1,Uint8Array,t&&t.tTransparency.ref.value.array);return t?(n.update(t.tTransparency,a),n.update(t.uTransparencyTexDim,re.create(a.width,a.height)),n.updateIfChanged(t.dTransparency,e>0),n.updateIfChanged(t.transparencyAverage,_d(a.array,e)),n.updateIfChanged(t.transparencyMin,Ad(a.array,e)),n.updateIfChanged(t.dTransparencyType,r),t):{tTransparency:n.create(a),uTransparencyTexDim:n.create(re.create(a.width,a.height)),dTransparency:n.create(e>0),transparencyAverage:n.create(0),transparencyMin:n.create(1),tTransparencyGrid:n.create(Te()),uTransparencyGridDim:n.create(m.create(1,1,1)),uTransparencyGridTransform:n.create(oe.create(0,0,0,1)),dTransparencyType:n.create(r),uTransparencyStrength:n.create(1)}}var Js={array:new Uint8Array(1),width:1,height:1};function ze(e){return e?(n.update(e.tTransparency,Js),n.update(e.uTransparencyTexDim,re.create(1,1)),e):{tTransparency:n.create(Js),uTransparencyTexDim:n.create(re.create(1,1)),dTransparency:n.create(!1),transparencyAverage:n.create(0),transparencyMin:n.create(1),tTransparencyGrid:n.create(Te()),uTransparencyGridDim:n.create(m.create(1,1,1)),uTransparencyGridTransform:n.create(oe.create(0,0,0,1)),dTransparencyType:n.create("groupInstance"),uTransparencyStrength:n.create(1)}}function fx(e,r,t,a){return e.fill(a,r,t),!0}function mx(e,r,t){e.fill(0,r,t)}function px(e,r,t){let a=le(Math.max(1,e),1,Uint8Array,t&&t.tClipping.ref.value.array);return t?(n.update(t.tClipping,a),n.update(t.uClippingTexDim,re.create(a.width,a.height)),n.updateIfChanged(t.dClipping,e>0),n.updateIfChanged(t.dClippingType,r),t):{tClipping:n.create(a),uClippingTexDim:n.create(re.create(a.width,a.height)),dClipping:n.create(e>0),dClippingType:n.create(r)}}var eu={array:new Uint8Array(1),width:1,height:1};function je(e){return e?(n.update(e.tClipping,eu),n.update(e.uClippingTexDim,re.create(1,1)),n.updateIfChanged(e.dClipping,!1),e):{tClipping:n.create(eu),uClippingTexDim:n.create(re.create(1,1)),dClipping:n.create(!1),dClippingType:n.create("groupInstance")}}function Tx(e,r,t,a){for(let o=r;o<t;++o)Rr.toArray(a,e,o*4),e[o*4+3]=255;return!0}function Cx(e,r,t){return e.fill(0,r*4,t*4),!0}function Sx(e,r,t){let a=le(Math.max(1,e),4,Uint8Array,t&&t.tSubstance.ref.value.array);return t?(n.update(t.tSubstance,a),n.update(t.uSubstanceTexDim,re.create(a.width,a.height)),n.updateIfChanged(t.dSubstance,e>0),n.updateIfChanged(t.dSubstanceType,r),t):{tSubstance:n.create(a),uSubstanceTexDim:n.create(re.create(a.width,a.height)),dSubstance:n.create(e>0),tSubstanceGrid:n.create(Te()),uSubstanceGridDim:n.create(m.create(1,1,1)),uSubstanceGridTransform:n.create(oe.create(0,0,0,1)),dSubstanceType:n.create(r),uSubstanceStrength:n.create(1)}}var ru={array:new Uint8Array(4),width:1,height:1};function We(e){return e?(n.update(e.tSubstance,ru),n.update(e.uSubstanceTexDim,re.create(1,1)),e):{tSubstance:n.create(ru),uSubstanceTexDim:n.create(re.create(1,1)),dSubstance:n.create(!1),tSubstanceGrid:n.create(Te()),uSubstanceGridDim:n.create(m.create(1,1,1)),uSubstanceGridTransform:n.create(oe.create(0,0,0,1)),dSubstanceType:n.create("groupInstance"),uSubstanceStrength:n.create(1)}}function Px(e,r,t,a){for(let o=r;o<t;++o)e[o]=a*255;return!0}function Id(e,r){if(r===0||e.length<r)return 0;let t=0;for(let a=0;a<r;++a)t+=e[a];return t/(255*r)}function Rx(e,r,t){e.fill(0,r,t)}function Vx(e,r,t){let a=le(Math.max(1,e),1,Uint8Array,t&&t.tEmissive.ref.value.array);return t?(n.update(t.tEmissive,a),n.update(t.uEmissiveTexDim,re.create(a.width,a.height)),n.updateIfChanged(t.dEmissive,e>0),n.updateIfChanged(t.emissiveAverage,Id(a.array,e)),n.updateIfChanged(t.dEmissiveType,r),t):{tEmissive:n.create(a),uEmissiveTexDim:n.create(re.create(a.width,a.height)),dEmissive:n.create(e>0),emissiveAverage:n.create(0),tEmissiveGrid:n.create(Te()),uEmissiveGridDim:n.create(m.create(1,1,1)),uEmissiveGridTransform:n.create(oe.create(0,0,0,1)),dEmissiveType:n.create(r),uEmissiveStrength:n.create(1)}}var tu={array:new Uint8Array(1),width:1,height:1};function qe(e){return e?(n.update(e.tEmissive,tu),n.update(e.uEmissiveTexDim,re.create(1,1)),e):{tEmissive:n.create(tu),uEmissiveTexDim:n.create(re.create(1,1)),dEmissive:n.create(!1),emissiveAverage:n.create(0),tEmissiveGrid:n.create(Te()),uEmissiveGridDim:n.create(m.create(1,1,1)),uEmissiveGridTransform:n.create(oe.create(0,0,0,1)),dEmissiveType:n.create("groupInstance"),uEmissiveStrength:n.create(1)}}function wx(e,r,t,a){for(let o=r;o<t;++o)e[o]=a*255;return!0}function Dd(e,r){if(r===0||e.length<r)return 0;let t=0;for(let a=0;a<r;++a)t+=e[a];return t/(255*r)}function Gx(e,r,t){e.fill(0,r,t)}function Ox(e,r,t){let a=le(Math.max(1,e),1,Uint8Array,t&&t.tWiggle.ref.value.array);return t?(n.update(t.tWiggle,a),n.update(t.uWiggleTexDim,re.create(a.width,a.height)),n.updateIfChanged(t.dWiggle,e>0),n.updateIfChanged(t.wiggleAverage,Dd(a.array,e)),n.updateIfChanged(t.dWiggleType,r),t):{tWiggle:n.create(a),uWiggleTexDim:n.create(re.create(a.width,a.height)),dWiggle:n.create(e>0),wiggleAverage:n.create(0),dWiggleType:n.create(r),uWiggleStrength:n.create(1)}}var nu={array:new Uint8Array(1),width:1,height:1};function He(e){return e?(n.update(e.tWiggle,nu),n.update(e.uWiggleTexDim,re.create(1,1)),e):{tWiggle:n.create(nu),uWiggleTexDim:n.create(re.create(1,1)),dWiggle:n.create(!1),wiggleAverage:n.create(0),dWiggleType:n.create("groupInstance"),uWiggleStrength:n.create(1)}}function st(){return k.Group({color:k.Color(ge.fromRgb(76,76,76)),colorStrength:k.Numeric(1,{min:0,max:1,step:.01}),substance:Rr.getParam(),substanceStrength:k.Numeric(1,{min:0,max:1,step:.01})})}function qx(e,r){return e.color===r.color&&e.colorStrength===r.colorStrength&&Rr.areEqual(e.substance,r.substance)&&e.substanceStrength===r.substanceStrength}function au(e,r){return ge.toArrayNormalized(e.color,r,0),r[3]=e.colorStrength,r}function ou(e,r){return Rr.toArrayNormalized(e.substance,r,0),r[3]=e.substanceStrength,r}function ut(e){return{uInteriorColor:n.create(au(e,oe())),uInteriorSubstance:n.create(ou(e,oe()))}}function lt(e,r){n.update(e.uInteriorColor,au(r,e.uInteriorColor.ref.value)),n.update(e.uInteriorSubstance,ou(r,e.uInteriorSubstance.ref.value))}function Cr(){return k.Group({wiggleMode:k.Select("position",[["position","Position"],["group","Group"]],{description:"Noise seeding mode. Position: spatially correlated (nearby atoms move together). Group: per-group independent noise."}),wiggleSpeed:k.Numeric(7,{min:0,max:10,step:.1},{description:"Speed of vertex wiggle animation."}),wiggleAmplitude:k.Numeric(0,{min:0,max:5,step:.01},{description:"Amplitude of vertex wiggle animation."}),wiggleFrequency:k.Numeric(.2,{min:.01,max:2,step:.01},{description:"Spatial frequency of vertex wiggle noise (position mode). Lower values correlate nearby atoms more."}),tumbleSpeed:k.Numeric(1,{min:0,max:10,step:.1},{description:"Speed of instance tumble animation."}),tumbleAmplitude:k.Numeric(0,{min:0,max:10,step:.1},{description:"Amplitude of instance tumble animation. In \xC5ngstr\xF6ms of implied surface displacement."}),tumbleFrequency:k.Numeric(.2,{min:0,max:2,step:.01},{description:"Spatial frequency multiplier for tumble noise."})})}function Qx(e,r){return e.wiggleMode===r.wiggleMode&&e.wiggleSpeed===r.wiggleSpeed&&e.wiggleAmplitude===r.wiggleAmplitude&&e.wiggleFrequency===r.wiggleFrequency&&e.tumbleSpeed===r.tumbleSpeed&&e.tumbleAmplitude===r.tumbleAmplitude&&e.tumbleFrequency===r.tumbleFrequency}function Sr(e){return{uWiggleSpeed:n.create(e.wiggleSpeed),uWiggleAmplitude:n.create(e.wiggleAmplitude),uWiggleFrequency:n.create(e.wiggleFrequency),uWiggleMode:n.create(e.wiggleMode==="position"?0:1),uTumbleSpeed:n.create(e.tumbleSpeed),uTumbleAmplitude:n.create(e.tumbleAmplitude),uTumbleFrequency:n.create(e.tumbleFrequency)}}function _r(e,r){n.updateIfChanged(e.uWiggleSpeed,r.wiggleSpeed),n.updateIfChanged(e.uWiggleAmplitude,r.wiggleAmplitude),n.updateIfChanged(e.uWiggleFrequency,r.wiggleFrequency),n.updateIfChanged(e.uWiggleMode,r.wiggleMode==="position"?0:1),n.updateIfChanged(e.uTumbleSpeed,r.tumbleSpeed),n.updateIfChanged(e.uTumbleAmplitude,r.tumbleAmplitude),n.updateIfChanged(e.uTumbleFrequency,r.tumbleFrequency)}var wt;(B=>{function e(D,M,q,W,O,L,F){return F?o(D,M,q,W,O,L,F):a(D,M,q,W,O,L)}B.create=e;function r(D){let M=D?D.vertexBuffer.ref.value:new Float32Array(0),q=D?D.indexBuffer.ref.value:new Uint32Array(0),W=D?D.normalBuffer.ref.value:new Float32Array(0),O=D?D.groupBuffer.ref.value:new Float32Array(0);return e(M,q,W,O,0,0,D)}B.createEmpty=r;function t(D){return Ve([D.vertexCount,D.triangleCount,D.vertexBuffer.ref.version,D.indexBuffer.ref.version,D.normalBuffer.ref.version,D.groupBuffer.ref.version])}function a(D,M,q,W,O,L){let F=$(),G,z=-1,X=-1,R={kind:"mesh",vertexCount:O,triangleCount:L,vertexBuffer:n.create(D),indexBuffer:n.create(M),normalBuffer:n.create(q),groupBuffer:n.create(W),varyingGroup:n.create(!1),get boundingSphere(){let w=t(R);if(w!==z){let U=ir(R.vertexBuffer.ref.value,R.vertexCount,1);$.copy(F,U),z=w}return F},get groupMapping(){return R.groupBuffer.ref.version!==X&&(G=Tr(R.groupBuffer.ref.value,R.vertexCount),X=R.groupBuffer.ref.version),G},setBoundingSphere(w){$.copy(F,w),z=t(R)},hasBoundingSphere(){return z===t(R)},meta:{}};return R}function o(D,M,q,W,O,L,F){return F.vertexCount=O,F.triangleCount=L,n.update(F.vertexBuffer,D),n.update(F.indexBuffer,M),n.update(F.normalBuffer,q),n.update(F.groupBuffer,W),F}function u(D){let{vertexCount:M,triangleCount:q}=D,W=D.vertexBuffer.ref.value,O=D.indexBuffer.ref.value,L=D.normalBuffer.ref.value.length>=M*3?D.normalBuffer.ref.value:new Float32Array(M*3);L===D.normalBuffer.ref.value&&L.fill(0,0,M*3),dn(W,O,L,M,q),n.update(D.normalBuffer,L)}B.computeNormals=u;function i(D,M=3){let q=D.vertexBuffer.ref.value,W=new Map,O=(G,z)=>`${G[0].toFixed(z)}|${G[1].toFixed(z)}|${G[2].toFixed(z)}`,L=0,F=m();for(let G=0,z=D.vertexCount;G<z;++G){m.fromArray(F,q,G*3);let X=O(F,M),R=W.get(X);R!==void 0?(L+=1,W.set(X,R+1)):W.set(X,1)}return L}B.checkForDuplicateVertices=i;let p=dr();function d(D,M){let q=D.vertexBuffer.ref.value;if(zr(M,q,0,D.vertexCount),!se.isTranslationAndUniformScaling(M)){let W=dr.directionTransform(p,M);ks(W,D.normalBuffer.ref.value,0,D.vertexCount)}n.update(D.vertexBuffer,q)}B.transform=d;function y(D){let{originalData:M}="kind"in D?D.meta:D.meta.ref.value;return M}B.getOriginalData=y;function C(D,M=!0){let{indexBuffer:q,vertexBuffer:W,groupBuffer:O,normalBuffer:L,triangleCount:F,vertexCount:G}=D,z=q.ref.value,X=W.ref.value,R=O.ref.value,w=L.ref.value,U=ne.create(Uint32Array,3,1024,F),H=ne.create(Float32Array,3,1024,X);H.currentIndex=G*3,H.elementCount=G;let j=ne.create(Float32Array,3,1024,w);j.currentIndex=G*3,j.elementCount=G;let Y=ne.create(Float32Array,1,1024,R);Y.currentIndex=G,Y.elementCount=G;let Z=m(),K=m(),J=m(),ee=m(),Ie=m(),Kr=m();function $e(pe){m.fromArray(Z,X,pe*3),m.fromArray(ee,w,pe*3),ne.add3(H,Z[0],Z[1],Z[2]),ne.add3(j,ee[0],ee[1],ee[2])}function Ze(pe,Je){m.fromArray(Z,X,pe*3),m.fromArray(K,X,Je*3),m.scale(Z,m.add(Z,Z,K),.5),m.fromArray(ee,w,pe*3),m.fromArray(Ie,w,Je*3),m.scale(ee,m.add(ee,ee,Ie),.5),ne.add3(H,Z[0],Z[1],Z[2]),ne.add3(j,ee[0],ee[1],ee[2])}function mr(pe,Je,be){m.fromArray(Z,X,pe*3),m.fromArray(K,X,Je*3),m.fromArray(J,X,be*3),m.scale(Z,m.add(Z,m.add(Z,Z,K),J),1/3),m.fromArray(ee,w,pe*3),m.fromArray(Ie,w,Je*3),m.fromArray(Kr,w,be*3),m.scale(ee,m.add(ee,m.add(ee,ee,Ie),Kr),1/3),ne.add3(H,Z[0],Z[1],Z[2]),ne.add3(j,ee[0],ee[1],ee[2])}function Mr(pe,Je,be,De,Ee){++fe,$e(pe),Ze(pe,Je),Ze(pe,be),ne.add3(U,ue,ue+1,ue+2);for(let Pe=0;Pe<3;++Pe)ne.add(Y,De);ue+=3,fe+=2,$e(Je),$e(be),Ze(pe,Je),Ze(pe,be),ne.add3(U,ue,ue+1,ue+3),ne.add3(U,ue,ue+3,ue+2);for(let Pe=0;Pe<4;++Pe)ne.add(Y,Ee);ue+=4}let ue=G,fe=0;if(M)for(let pe=0,Je=F;pe<Je;++pe){let be=z[pe*3],De=z[pe*3+1],Ee=z[pe*3+2],Pe=R[be],wr=R[De],Yr=R[Ee];if(Pe===wr&&Pe===Yr)++fe,ne.add3(U,be,De,Ee);else if(Pe===wr)Mr(Ee,be,De,Yr,Pe);else if(Pe===Yr)Mr(De,Ee,be,wr,Yr);else if(wr===Yr)Mr(be,De,Ee,Pe,wr);else{fe+=2,$e(be),Ze(be,De),Ze(be,Ee),mr(be,De,Ee),ne.add3(U,ue,ue+1,ue+3),ne.add3(U,ue,ue+3,ue+2);for(let Gr=0;Gr<4;++Gr)ne.add(Y,Pe);ue+=4,fe+=2,$e(De),Ze(De,Ee),Ze(De,be),mr(be,De,Ee),ne.add3(U,ue,ue+1,ue+3),ne.add3(U,ue,ue+3,ue+2);for(let Gr=0;Gr<4;++Gr)ne.add(Y,wr);ue+=4,fe+=2,$e(Ee),Ze(Ee,De),Ze(Ee,be),mr(be,De,Ee),ne.add3(U,ue+3,ue+1,ue),ne.add3(U,ue+2,ue+3,ue);for(let Gr=0;Gr<4;++Gr)ne.add(Y,Yr);ue+=4}}else for(let pe=0,Je=F;pe<Je;++pe){let be=z[pe*3],De=z[pe*3+1],Ee=z[pe*3+2],Pe=R[be],wr=R[De],Yr=R[Ee];if(Pe!==wr||Pe!==Yr){++fe,$e(be),$e(De),$e(Ee),ne.add3(U,ue,ue+1,ue+2);let Gr=wr===Yr?wr:Pe;for(let Ba=0;Ba<3;++Ba)ne.add(Y,Gr);ue+=3}else++fe,ne.add3(U,be,De,Ee)}let nr=ne.compact(U),Re=ne.compact(H),Pr=ne.compact(j),Qr=ne.compact(Y);return D.vertexCount=ue,D.triangleCount=fe,n.update(W,Re),n.update(O,Qr),n.update(q,nr),n.update(L,Pr),D.meta.originalData={indexBuffer:z,vertexCount:G,triangleCount:F},D}B.uniformTriangleGroup=C;function f(D){let{vertexCount:M,triangleCount:q}=D,W=D.indexBuffer.ref.value,O=[];for(let L=0;L<M;++L)O[L]=[];for(let L=0;L<q;++L){let F=W[L*3],G=W[L*3+1],z=W[L*3+2];at(O[F],G),at(O[F],z),at(O[G],F),at(O[G],z),at(O[z],F),at(O[z],G)}return O}function b(D){let{triangleCount:M}=D,q=D.indexBuffer.ref.value,W=new Map,O=(L,F)=>{let G=Mn(L,F),z=W.get(G)||0;W.set(G,z+1)};for(let L=0;L<M;++L){let F=q[L*3],G=q[L*3+1],z=q[L*3+2];O(F,G),O(F,z),O(G,z)}return W}function T(D){let M=new Set,q=[0,0];return D.forEach((W,O)=>{W===1&&(Ua(q,O),M.add(q[0]),M.add(q[1]))}),M}function S(D,M,q){let W=new Map,O=(L,F)=>{W.has(L)?at(W.get(L),F):W.set(L,[F])};return M.forEach(L=>{let F=D[L];for(let G of F)M.has(G)&&q.get(Mn(L,G))===1&&O(L,G)}),W}function l(D,M){let{indexBuffer:q,triangleCount:W}=D,O=q.ref.value,L=ne.create(Uint32Array,3,1024,W),F=0;for(let z=0;z<W;++z){let X=O[z*3],R=O[z*3+1],w=O[z*3+2];M[X].length===2||M[R].length===2||M[w].length===2||(ne.add3(L,X,R,w),F+=1)}let G=ne.compact(L);return D.triangleCount=F,n.update(q,G),D}function s(D,M,q,W){let{vertexBuffer:O,indexBuffer:L,normalBuffer:F,triangleCount:G}=D,z=O.ref.value,X=L.ref.value,R=F.ref.value,w=ne.create(Uint32Array,3,1024,G),U=0;for(let fe=0;fe<G;++fe)ne.add3(w,X[fe*3],X[fe*3+1],X[fe*3+2]),U+=1;let H=m(),j=m(),Y=m(),Z=m(),K=m(),J=m(),ee=m(),Ie=m(),Kr=m(),$e=m(),Ze=zt(120),mr=new Set,Mr=Array.from(q.keys()).filter(fe=>q.get(fe).length<2).map(fe=>{let nr=q.get(fe);return m.fromArray(H,z,fe*3),m.fromArray(j,z,nr[0]*3),m.fromArray(Y,z,nr[1]*3),m.sub(K,j,H),m.sub(J,Y,H),[fe,m.angle(K,J)]});Mr.sort(([,fe],[,nr])=>fe-nr);for(let[fe,nr]of Mr){if(mr.has(fe)||nr>Ze)continue;let Re=q.get(fe);if(M[Re[0]].includes(Re[1])&&!q.get(Re[0])?.includes(Re[1])||(m.fromArray(H,z,fe*3),m.fromArray(j,z,Re[0]*3),m.fromArray(Y,z,Re[1]*3),m.sub(K,j,H),m.sub(J,Y,H),m.add(Ie,K,J),m.squaredDistance(H,j)>=W))continue;let Pr=!1;for(let Qr of M[fe])if(!Re.includes(Qr)&&(m.fromArray(Z,z,Qr*3),m.sub(ee,Z,H),m.dot(Ie,ee)<0)){Pr=!0;break}Pr&&(m.fromArray(Kr,R,fe*3),m.triangleNormal($e,H,j,Y),m.dot($e,Kr)>0?ne.add3(w,fe,Re[0],Re[1]):ne.add3(w,Re[1],Re[0],fe),mr.add(fe),mr.add(Re[0]),mr.add(Re[1]),U+=1)}let ue=ne.compact(w);return D.triangleCount=U,n.update(L,ue),D}function g(D,M,q){let{iterations:W,lambda:O}=q,L=m(),F=m(),G=m(),z=m(),X=-O,R=new Float32Array(D.vertexBuffer.ref.value.length),w=U=>{let H=D.vertexBuffer.ref.value;R.set(H),M.forEach((Y,Z)=>{if(Y.length!==2)return;m.fromArray(L,H,Z*3),m.fromArray(F,H,Y[0]*3),m.fromArray(G,H,Y[1]*3);let K=1/m.distance(L,F),J=1/m.distance(L,G);m.scale(F,F,K),m.scale(G,G,J),m.add(z,F,G),m.scale(z,z,1/(K+J)),m.sub(z,z,L),m.scale(z,z,U),m.add(z,L,z),m.toArray(z,R,Z*3)});let j=D.vertexBuffer.ref.value;n.update(D.vertexBuffer,R),R=j};for(let U=0;U<W;++U)w(O),w(X)}function c(D,M){l(D,f(D));for(let F=0;F<10;++F){let G=D.triangleCount,z=b(D),X=f(D),R=T(z),w=S(X,R,z);if(s(D,X,w,M.maxNewEdgeLength*M.maxNewEdgeLength),D.triangleCount===G)break}let q=b(D),W=f(D),O=T(q),L=S(W,O,q);return g(D,L,{iterations:M.iterations,lambda:.5}),D}B.smoothEdges=c,B.Params={...Q.Params,doubleSided:k.Boolean(!1,Q.CustomQualityParamInfo),flipSided:k.Boolean(!1,Q.ShadingCategory),flatShaded:k.Boolean(!1,Q.ShadingCategory),ignoreLight:k.Boolean(!1,Q.ShadingCategory),celShaded:k.Boolean(!1,Q.ShadingCategory),xrayShaded:k.Select(!1,[[!1,"Off"],[!0,"On"],["inverted","Inverted"]],Q.ShadingCategory),transparentBackfaces:k.Select("off",k.arrayToOptions(["off","on","opaque"]),Q.ShadingCategory),solidInterior:k.Boolean(!1,{...Q.ShadingCategory,description:"Render a solid cap where the camera near plane or a clip object cuts a closed surface"}),bumpFrequency:k.Numeric(0,{min:0,max:10,step:.1},Q.ShadingCategory),bumpAmplitude:k.Numeric(1,{min:0,max:5,step:.1},Q.ShadingCategory),interior:st(),animation:Cr()},B.Utils={Params:B.Params,createEmpty:r,createValues:v,createValuesSimple:_,updateValues:E,updateBoundingSphere:I,createRenderableState:P,updateRenderableState:V,createPositionIterator:A};function A(D,M){let q=D.vertexCount,W=M.instanceCount.ref.value,O=Qe(),L=O.position,F=O.normal,G=D.vertexBuffer.ref.value,z=D.normalBuffer.ref.value,X=M.aTransform.ref.value;return Se(q,W,1,(w,U)=>(U<0?(m.fromArray(L,G,w*3),m.fromArray(F,z,w*3)):(m.transformMat4Offset(L,G,X,0,w*3,U*16),m.transformDirectionOffset(F,z,X,0,w*3,U*16)),O))}function v(D,M,q,W,O){let{instanceCount:L,groupCount:F}=q,G=A(D,M),z=ke(q,G,W.color),X=Ge(O.instanceGranularity,F,L)?xe(L,"instance"):xe(L*F,"groupInstance"),R=Ue(),w=ze(),U=qe(),H=We(),j=je(),Y=He(),Z={drawCount:D.triangleCount*3,vertexCount:D.vertexCount,groupCount:F,instanceCount:L},K=$.clone(D.boundingSphere),J=he(K,M.aTransform.ref.value,L,0);return{dGeometryType:n.create("mesh"),aPosition:D.vertexBuffer,aNormal:D.normalBuffer,aGroup:D.groupBuffer,elements:D.indexBuffer,dVaryingGroup:D.varyingGroup,boundingSphere:n.create(J),invariantBoundingSphere:n.create(K),uInvariantBoundingSphere:n.create(oe.ofSphere(K)),...z,...X,...R,...w,...U,...H,...j,...Y,...M,...Q.createValues(O,Z),uDoubleSided:n.create(O.doubleSided),dFlatShaded:n.create(O.flatShaded),dFlipSided:n.create(O.flipSided),dIgnoreLight:n.create(O.ignoreLight),dCelShaded:n.create(O.celShaded),dXrayShaded:n.create(O.xrayShaded==="inverted"?"inverted":O.xrayShaded===!0?"on":"off"),dTransparentBackfaces:n.create(O.transparentBackfaces),dSolidInterior:n.create(O.solidInterior),uBumpFrequency:n.create(O.bumpFrequency),uBumpAmplitude:n.create(O.bumpAmplitude),meta:n.create(D.meta),...ut(O.interior),...Sr(O.animation)}}function _(D,M,q,W,O){let L=Q.createSimple(q,W,O),F={...k.getDefaultValues(B.Params),...M};return v(D,L.transform,L.locationIterator,L.theme,F)}function E(D,M){Q.updateValues(D,M),n.updateIfChanged(D.uDoubleSided,M.doubleSided),n.updateIfChanged(D.dFlatShaded,M.flatShaded),n.updateIfChanged(D.dFlipSided,M.flipSided),n.updateIfChanged(D.dIgnoreLight,M.ignoreLight),n.updateIfChanged(D.dCelShaded,M.celShaded),n.updateIfChanged(D.dXrayShaded,M.xrayShaded==="inverted"?"inverted":M.xrayShaded===!0?"on":"off"),n.updateIfChanged(D.dTransparentBackfaces,M.transparentBackfaces),n.updateIfChanged(D.dSolidInterior,M.solidInterior),n.updateIfChanged(D.uBumpFrequency,M.bumpFrequency),n.updateIfChanged(D.uBumpAmplitude,M.bumpAmplitude),lt(D,M.interior),_r(D,M.animation)}function I(D,M){let q=$.clone(M.boundingSphere),W=he(q,D.aTransform.ref.value,D.instanceCount.ref.value,0);$.equals(W,D.boundingSphere.ref.value)||n.update(D.boundingSphere,W),$.equals(q,D.invariantBoundingSphere.ref.value)||(n.update(D.invariantBoundingSphere,q),n.update(D.uInvariantBoundingSphere,oe.fromSphere(D.uInvariantBoundingSphere.ref.value,q)))}function P(D){let M=Q.createRenderableState(D);return V(M,D),M}function V(D,M){Q.updateRenderableState(D,M),D.opaque=D.opaque&&!M.xrayShaded,D.writeDepth=D.opaque}})(wt||={});var sa;(g=>{function e(c,h,x,A){return A?o(c,h,x,A):a(c,h,x)}g.create=e;function r(c){let h=c?c.centerBuffer.ref.value:new Float32Array(0),x=c?c.groupBuffer.ref.value:new Float32Array(0);return e(h,x,0,c)}g.createEmpty=r;function t(c){return Ve([c.pointCount,c.centerBuffer.ref.version,c.groupBuffer.ref.version])}function a(c,h,x){let A=$(),v,_=-1,E=-1,I={kind:"points",pointCount:x,centerBuffer:n.create(c),groupBuffer:n.create(h),get boundingSphere(){let P=t(I);if(P!==_){let V=ir(I.centerBuffer.ref.value,I.pointCount,1);$.copy(A,V),_=P}return A},get groupMapping(){return I.groupBuffer.ref.version!==E&&(v=Tr(I.groupBuffer.ref.value,I.pointCount),E=I.groupBuffer.ref.version),v},setBoundingSphere(P){$.copy(A,P),_=t(I)},hasBoundingSphere(){return _===t(I)}};return I}function o(c,h,x,A){return A.pointCount=x,n.update(A.centerBuffer,c),n.update(A.groupBuffer,h),A}function u(c,h){let x=c.centerBuffer.ref.value;zr(h,x,0,c.pointCount),n.update(c.centerBuffer,x)}g.transform=u,g.StyleTypes={square:"Square",circle:"Circle",fuzzy:"Fuzzy"},g.StyleTypeNames=Object.keys(g.StyleTypes),g.Params={...Q.Params,sizeFactor:k.Numeric(3,{min:0,max:10,step:.1}),pointSizeAttenuation:k.Boolean(!1),pointStyle:k.Select("square",k.objectToOptions(g.StyleTypes)),animation:Cr()},g.Utils={Params:g.Params,createEmpty:r,createValues:f,createValuesSimple:b,updateValues:T,updateBoundingSphere:S,createRenderableState:l,updateRenderableState:s,createPositionIterator:C};function C(c,h){let x=c.pointCount,A=h.instanceCount.ref.value,v=Qe(),_=v.position,E=c.centerBuffer.ref.value,I=h.aTransform.ref.value;return Se(x,A,1,(V,B)=>(B<0?m.fromArray(_,E,V*3):m.transformMat4Offset(_,E,I,0,V*3,B*16),v))}function f(c,h,x,A,v){let{instanceCount:_,groupCount:E}=x,I=C(c,h),P=ke(x,I,A.color),V=jr(x,I,A.size),B=Ge(v.instanceGranularity,E,_)?xe(_,"instance"):xe(_*E,"groupInstance"),D=Ue(),M=ze(),q=qe(),W=We(),O=je(),L=He(),F={drawCount:c.pointCount,vertexCount:c.pointCount,groupCount:E,instanceCount:_},G=$.clone(c.boundingSphere),z=he(G,h.aTransform.ref.value,_,0);return{dGeometryType:n.create("points"),aPosition:c.centerBuffer,aGroup:c.groupBuffer,boundingSphere:n.create(z),invariantBoundingSphere:n.create(G),uInvariantBoundingSphere:n.create(oe.ofSphere(G)),...P,...V,...B,...D,...M,...q,...W,...O,...L,...h,...Q.createValues(v,F),uSizeFactor:n.create(v.sizeFactor),dPointSizeAttenuation:n.create(v.pointSizeAttenuation),dPointStyle:n.create(v.pointStyle),...Sr(v.animation)}}function b(c,h,x,A,v){let _=Q.createSimple(x,A,v),E={...k.getDefaultValues(g.Params),...h};return f(c,_.transform,_.locationIterator,_.theme,E)}function T(c,h){Q.updateValues(c,h),n.updateIfChanged(c.uSizeFactor,h.sizeFactor),n.updateIfChanged(c.dPointSizeAttenuation,h.pointSizeAttenuation),n.updateIfChanged(c.dPointStyle,h.pointStyle),_r(c,h.animation)}function S(c,h){let x=$.clone(h.boundingSphere),A=he(x,c.aTransform.ref.value,c.instanceCount.ref.value,0);$.equals(A,c.boundingSphere.ref.value)||n.update(c.boundingSphere,A),$.equals(x,c.invariantBoundingSphere.ref.value)||(n.update(c.invariantBoundingSphere,x),n.update(c.uInvariantBoundingSphere,oe.fromSphere(c.uInvariantBoundingSphere.ref.value,x)))}function l(c){let h=Q.createRenderableState(c);return s(h,c),h}function s(c,h){Q.updateRenderableState(c,h),c.opaque=c.opaque&&h.pointStyle!=="fuzzy",c.writeDepth=c.opaque}})(sa||={});function ua(e,r,t,a,o,u,i){for(let p=0;p<r;p++){for(let d=0;d<t;d++)a[d]=e[d*r+p];iu(a,o,u,i,t);for(let d=0;d<t;d++)e[d*r+p]=o[d]}for(let p=0;p<t;p++){for(let d=0;d<r;d++)a[d]=e[p*r+d];iu(a,o,u,i,r);for(let d=0;d<r;d++)e[p*r+d]=Math.sqrt(o[d])}}function iu(e,r,t,a,o){t[0]=0,a[0]=Number.MIN_SAFE_INTEGER,a[1]=Number.MAX_SAFE_INTEGER;for(let u=1,i=0;u<o;u++){let p=(e[u]+u*u-(e[t[i]]+t[i]*t[i]))/(2*u-2*t[i]);for(;p<=a[i];)i--,p=(e[u]+u*u-(e[t[i]]+t[i]*t[i]))/(2*u-2*t[i]);i++,t[i]=u,a[i]=p,a[i+1]=Number.MAX_SAFE_INTEGER}for(let u=0,i=0;u<o;u++){for(;a[i+1]<u;)i++;r[u]=(u-t[i])*(u-t[i])+e[t[i]]}}var la={};function Wv(e){let r=JSON.stringify(e);return la[r]===void 0&&(la[r]=new ca(e)),la[r]}var da={fontFamily:k.Select("sans-serif",[["sans-serif","Sans Serif"],["monospace","Monospace"],["serif","Serif"],["cursive","Cursive"]]),fontQuality:k.Select(3,[[0,"lower"],[1,"low"],[2,"medium"],[3,"high"],[4,"higher"]]),fontStyle:k.Select("normal",[["normal","Normal"],["italic","Italic"],["oblique","Oblique"]]),fontVariant:k.Select("normal",[["normal","Normal"],["small-caps","Small Caps"]]),fontWeight:k.Select("normal",[["normal","Normal"],["bold","Bold"]])},ca=class{constructor(r={}){this.mapped={};this.scratchW=0;this.scratchH=0;this.currentX=0;this.currentY=0;this.cutoff=.5;let t={...k.getDefaultValues(da),...r};this.props=t;let a=64*(t.fontQuality+1);this.buffer=a/8,this.radius=a/3,this.lineHeight=Math.round(a+2*this.buffer+this.radius),this.maxWidth=Math.round(this.lineHeight*.75),this.texture=le(350*this.lineHeight*this.maxWidth,1,Uint8Array),this.scratchContext=Pd(this.maxWidth,this.lineHeight,{willReadFrequently:!0}),this.scratchContext.font=`${t.fontStyle} ${t.fontVariant} ${t.fontWeight} ${a}px ${t.fontFamily}`,this.scratchContext.fillStyle="black",this.scratchContext.textBaseline="middle",this.scratchData=new Uint8Array(this.lineHeight*this.maxWidth),this.gridOuter=new Float64Array(this.lineHeight*this.maxWidth),this.gridInner=new Float64Array(this.lineHeight*this.maxWidth),this.f=new Float64Array(Math.max(this.lineHeight,this.maxWidth)),this.d=new Float64Array(Math.max(this.lineHeight,this.maxWidth)),this.z=new Float64Array(Math.max(this.lineHeight,this.maxWidth)+1),this.v=new Int16Array(Math.max(this.lineHeight,this.maxWidth)),this.middle=Math.ceil(this.lineHeight/2),this.placeholder=this.get("\uFFFD")}get(r){if(this.mapped[r]===void 0){this.draw(r);let{array:t,width:a,height:o}=this.texture,u=this.scratchData;if(this.currentX+this.scratchW>a&&(this.currentX=0,this.currentY+=this.scratchH),this.currentY+this.scratchH>o)return console.warn("canvas to small"),this.placeholder;this.mapped[r]={x:this.currentX,y:this.currentY,w:this.scratchW,h:this.scratchH,nw:this.scratchW/this.lineHeight,nh:this.scratchH/this.lineHeight};for(let i=0;i<this.scratchH;++i)for(let p=0;p<this.scratchW;++p)t[a*(this.currentY+i)+this.currentX+p]=u[i*this.scratchW+p];this.currentX+=this.scratchW}return this.mapped[r]}draw(r){let t=this.lineHeight,a=this.scratchContext,o=this.scratchData,u=a.measureText(r),i=Math.min(this.maxWidth,Math.ceil(u.width+2*this.buffer)),p=i*t;a.clearRect(0,0,i,t),a.fillText(r,this.buffer,this.middle);let d=a.getImageData(0,0,i,t);for(let y=0;y<p;y++){let C=d.data[y*4+3]/255;this.gridOuter[y]=C===1?0:C===0?Number.MAX_SAFE_INTEGER:Math.pow(Math.max(0,.5-C),2),this.gridInner[y]=C===1?Number.MAX_SAFE_INTEGER:C===0?0:Math.pow(Math.max(0,C-.5),2)}ua(this.gridOuter,i,t,this.f,this.d,this.v,this.z),ua(this.gridInner,i,t,this.f,this.d,this.v,this.z);for(let y=0;y<p;y++){let C=this.gridOuter[y]-this.gridInner[y];o[y]=Math.max(0,Math.min(255,Math.round(255-255*(C/this.radius+this.cutoff))))}this.scratchW=i,this.scratchH=t}},su;function Ed(){if(!su)throw new Error("When running in Node.js and wanting to use Canvas API, call mol-util/data-source's setCanvasModule function first and pass imported `canvas` module to it.");return su}function Pd(e,r,t){if(Na)return Ed().createCanvas(e,r).getContext("2d",t);{let a=document.createElement("canvas");return a.width=e,a.height=r,a.getContext("2d",t)}}var Rd={...Oe,aPosition:ce("float32",3,0),elements:hr("uint32"),uBboxMin:N("v3"),uBboxMax:N("v3"),uBboxSize:N("v3"),uMaxSteps:N("i"),uStepScale:N("f"),uJumpLength:N("f"),uTransform:N("m4"),uGridDim:N("v3"),tTransferTex:me("image-uint8","alpha","ubyte","linear"),uTransferScale:N("f","material"),dGridTexType:ae("string",["2d","3d"]),uGridTexDim:N("v3"),tGridTex:me("texture","rgba","ubyte","linear"),uGridStats:N("v4"),uCellDim:N("v3"),uCartnToUnit:N("m4"),uUnitToCartn:N("m4"),dPackedGroup:ae("boolean"),dAxisOrder:ae("string",["012","021","102","120","201","210"]),dIgnoreLight:ae("boolean"),dCelShaded:ae("boolean"),dXrayShaded:ae("string",["off","on","inverted"]),meta:de("unknown")};function uu(e,r,t,a,o,u,i){let p={...Be,...Le,...Fe,...Me,...Rd};e.isWebGL2||(p.uMaxSteps=ae("number"));let d={...t,uObjectId:n.create(r),dLightCount:n.create(i.dLightCount),dColorMarker:n.create(i.dColorMarker)},C=we(e,"triangles",Ni,p,d,o,u);return Ne(C,d,a)}var gn={...Oe,aGroup:ce("float32",1,0),aPosition:ce("float32",3,0),aNormal:ce("float32",3,0),elements:hr("uint32"),dVaryingGroup:ae("boolean"),dFlatShaded:ae("boolean"),uDoubleSided:N("b","material"),dFlipSided:ae("boolean"),dIgnoreLight:ae("boolean"),dCelShaded:ae("boolean"),dXrayShaded:ae("string",["off","on","inverted"]),dTransparentBackfaces:ae("string",["off","on","opaque"]),dSolidInterior:ae("boolean"),uBumpFrequency:N("f","material"),uBumpAmplitude:N("f","material"),meta:de("unknown"),...it,...xr};function lu(e,r,t,a,o,u,i){let p={...Be,...Le,...Fe,...Me,...gn},d={...t,uObjectId:n.create(r),dLightCount:n.create(i.dLightCount),dColorMarker:n.create(i.dColorMarker)},C=we(e,"triangles",gt,p,d,o,u);return Ne(C,d,a)}var yn={...Oe,...Ur,aGroup:ce("float32",1,0),aPosition:ce("float32",3,0),dPointSizeAttenuation:ae("boolean"),dPointStyle:ae("string",["square","circle","fuzzy"]),...xr};function cu(e,r,t,a,o,u,i){let p={...Be,...Le,...Fe,...Me,...yn},d={...t,uObjectId:n.create(r),dLightCount:n.create(i.dLightCount),dColorMarker:n.create(i.dColorMarker)},C=we(e,"points",en,p,d,o,u);return Ne(C,d,a)}var bn={...Oe,...Ur,aGroup:ce("float32",1,0),aMapping:ce("float32",2,0),aStart:ce("float32",3,0),aEnd:ce("float32",3,0),elements:hr("uint32"),dLineSizeAttenuation:ae("boolean"),uDoubleSided:N("b","material"),dFlipSided:ae("boolean"),stripCount:de("number"),stripOffsets:de("uint32"),...xr};function du(e,r,t,a,o,u,i){let p={...Be,...Le,...Fe,...Me,...bn},d={...t,uObjectId:n.create(r),dLightCount:n.create(i.dLightCount),dColorMarker:n.create(i.dColorMarker)},C=we(e,"triangles",nn,p,d,o,u);return Ne(C,d,a)}var hn={...Oe,...Ur,uTexDim:N("v2"),tPositionGroup:me("image-float32","rgba","float","nearest"),padding:de("number"),uDoubleSided:N("b","material"),dIgnoreLight:ae("boolean"),dCelShaded:ae("boolean"),dXrayShaded:ae("string",["off","on","inverted"]),dTransparentBackfaces:ae("string",["off","on","opaque"]),dSolidInterior:ae("boolean"),dClipPrimitive:ae("boolean"),dApproximate:ae("boolean"),uAlphaThickness:N("f"),uBumpFrequency:N("f","material"),uBumpAmplitude:N("f","material"),lodLevels:de("unknown"),centerBuffer:de("float32"),groupBuffer:de("float32"),...it,...xr};function fu(e,r,t,a,o,u,i){let p={...Be,...Le,...Fe,...Me,...hn},d={...t,uObjectId:n.create(r),dLightCount:n.create(i.dLightCount),dColorMarker:n.create(i.dColorMarker)},C=we(e,"triangles",rn,p,d,o,u);return Ne(C,d,a)}var Vd={...Oe,...Ur,aGroup:ce("float32",1,0),aPosition:ce("float32",3,0),aMapping:ce("float32",2,0),aDepth:ce("float32",1,0),elements:hr("uint32"),aTexCoord:ce("float32",2,0),tFont:me("image-uint8","alpha","ubyte","linear"),padding:de("number"),uBorderWidth:N("f","material"),uBorderColor:N("v3","material"),uOffsetX:N("f","material"),uOffsetY:N("f","material"),uOffsetZ:N("f","material"),uBackgroundColor:N("v3","material"),uBackgroundOpacity:N("f","material")};function mu(e,r,t,a,o,u,i){let p={...Be,...Le,...Fe,...Me,...Vd},d={...t,uObjectId:n.create(r),dLightCount:n.create(i.dLightCount),dColorMarker:n.create(i.dColorMarker)},C=we(e,"triangles",Oi,p,d,o,u);return Ne(C,d,a)}var Bd={...Oe,uGeoTexDim:N("v2","buffered"),tPosition:me("texture","rgb","float","nearest"),tGroup:me("texture","alpha","float","nearest"),tNormal:me("texture","rgb","float","nearest"),dVaryingGroup:ae("boolean"),dFlatShaded:ae("boolean"),uDoubleSided:N("b","material"),dFlipSided:ae("boolean"),dIgnoreLight:ae("boolean"),dCelShaded:ae("boolean"),dXrayShaded:ae("string",["off","on","inverted"]),dTransparentBackfaces:ae("string",["off","on","opaque"]),dSolidInterior:ae("boolean"),uBumpFrequency:N("f","material"),uBumpAmplitude:N("f","material"),meta:de("unknown"),...it,...xr};function pu(e,r,t,a,o,u,i){let p={...Be,...Le,...Fe,...Me,...Bd},d={...t,uObjectId:n.create(r),dLightCount:n.create(i.dLightCount),dColorMarker:n.create(i.dColorMarker)},C=we(e,"triangles",gt,p,d,o,u);return Ne(C,d,a)}var Ld={...Oe,aGroup:ce("float32",1,0),aPosition:ce("float32",3,0),aUv:ce("float32",2,0),elements:hr("uint32"),uImageTexDim:N("v2"),tImageTex:me("image-uint8","rgba","ubyte","nearest"),tGroupTex:me("image-uint8","rgba","ubyte","nearest"),tValueTex:me("image-float32","alpha","float","linear"),uTrimType:N("i"),uTrimCenter:N("v3"),uTrimRotation:N("q"),uTrimScale:N("v3"),uTrimTransform:N("m4"),uIsoLevel:N("f"),dInterpolation:ae("string",["nearest","catmulrom","mitchell","bspline"])};function gu(e,r,t,a,o,u,i){let p={...Be,...Le,...Fe,...Me,...Ld},d={...t,uObjectId:n.create(r),dLightCount:n.create(i.dLightCount),dColorMarker:n.create(i.dColorMarker)},C=we(e,"triangles",ki,p,d,o,u);return Ne(C,d,a)}var xn={...Oe,...Ur,aGroup:ce("float32",1,0),aStart:ce("float32",3,0),aEnd:ce("float32",3,0),aMapping:ce("float32",3,0),aScale:ce("float32",1,0),aCap:ce("float32",1,0),aColorMode:ce("float32",1,0),elements:hr("uint32"),padding:de("number"),uDoubleSided:N("b","material"),dIgnoreLight:ae("boolean"),dCelShaded:ae("boolean"),dXrayShaded:ae("string",["off","on","inverted"]),dTransparentBackfaces:ae("string",["off","on","opaque"]),dSolidInterior:ae("boolean"),uBumpFrequency:N("f","material"),uBumpAmplitude:N("f","material"),dDualColor:ae("boolean"),...it,...xr};function yu(e,r,t,a,o,u,i){let p={...Be,...Le,...Fe,...Me,...xn},d={...t,uObjectId:n.create(r),dLightCount:n.create(i.dLightCount),dColorMarker:n.create(i.dColorMarker)},C=we(e,"triangles",tn,p,d,o,u);return Ne(C,d,a)}var Fd=["spheres","mesh","cylinders","lines","points"];function vn(e){return Fd.includes(e)}function Zr(e){switch(e){case"instance":return"instance";case"group":return"group";case"groupInstance":return"groupInstance";case"vertex":return"vertex";default:return"none"}}var Md=[{tex:"tColor",dim:"uColorTexDim",itemSize:3,granularity:e=>Zr(e.dColorType.ref.value),factor:e=>e.dDualColor?.ref.value?2:1},{tex:"tSize",dim:"uSizeTexDim",itemSize:3,granularity:e=>Zr(e.dSizeType.ref.value)},{tex:"tMarker",dim:"uMarkerTexDim",itemSize:1,granularity:e=>Zr(e.dMarkerType.ref.value)},{tex:"tOverpaint",dim:"uOverpaintTexDim",itemSize:4,granularity:e=>e.dOverpaint.ref.value?Zr(e.dOverpaintType.ref.value):"none"},{tex:"tTransparency",dim:"uTransparencyTexDim",itemSize:1,granularity:e=>e.dTransparency.ref.value?Zr(e.dTransparencyType.ref.value):"none"},{tex:"tEmissive",dim:"uEmissiveTexDim",itemSize:1,granularity:e=>e.dEmissive.ref.value?Zr(e.dEmissiveType.ref.value):"none"},{tex:"tSubstance",dim:"uSubstanceTexDim",itemSize:4,granularity:e=>e.dSubstance.ref.value?Zr(e.dSubstanceType.ref.value):"none"},{tex:"tClipping",dim:"uClippingTexDim",itemSize:1,granularity:e=>e.dClipping.ref.value?Zr(e.dClippingType.ref.value):"none"},{tex:"tWiggle",dim:"uWiggleTexDim",itemSize:1,granularity:e=>e.dWiggle.ref.value?Zr(e.dWiggleType.ref.value):"none"}];function Gt(e){let r=[];for(let t of Object.keys(e)){let a=e[t];a.type==="attribute"&&a.divisor===0&&r.push({key:t,itemSize:a.itemSize})}return r}var hu={spheres:{drawMode:"triangles",shaderCode:rn,schema:hn,hasElements:!1,vertexTexels:e=>e.uVertexCount.ref.value/6,extraTextures:[{tex:"tPositionGroup",dim:"uTexDim",itemSize:4,float:!0,granularity:()=>"vertex"}],vertexAttributes:Gt(hn)},mesh:{drawMode:"triangles",shaderCode:gt,schema:gn,hasElements:!0,vertexTexels:e=>e.uVertexCount.ref.value,extraTextures:[],vertexAttributes:Gt(gn)},cylinders:{drawMode:"triangles",shaderCode:tn,schema:xn,hasElements:!0,vertexTexels:e=>e.uVertexCount.ref.value,extraTextures:[],vertexAttributes:Gt(xn)},lines:{drawMode:"triangles",shaderCode:nn,schema:bn,hasElements:!0,vertexTexels:e=>e.uVertexCount.ref.value,extraTextures:[],vertexAttributes:Gt(bn)},points:{drawMode:"points",shaderCode:en,schema:yn,hasElements:!1,vertexTexels:e=>e.uVertexCount.ref.value,extraTextures:[],vertexAttributes:Gt(yn)}};function wd(e){return e.length>1&&e[0]==="d"&&e[1]>="A"&&e[1]<="Z"}function fa(e){let r=[],t=Object.keys(e).filter(wd).sort();for(let o of t)r.push(`${o}:${e[o].ref.value}`);r.push(`ig:${e.instanceGranularity.ref.value}`),r.push(`uLod:${e.uLod.ref.value.join(",")}`);let a=e.lodLevels?.ref.value;return r.push("lod:"+(a?a.map(o=>`${o[0]},${o[1]},${o[2]}`).join(";"):"")),r.join("|")}var bu=["uniform","instance","group","groupInstance","vertex"],xt=["instance","groupInstance"];function xu(e,r){if(!vn(e)||r.length<2)return!1;let t=r[0];if(t.dUsePalette?.ref.value||!bu.includes(t.dColorType.ref.value)||t.dSizeType&&!bu.includes(t.dSizeType.ref.value)||t.dOverpaint.ref.value&&!xt.includes(t.dOverpaintType.ref.value)||t.dTransparency.ref.value&&!xt.includes(t.dTransparencyType.ref.value)||t.dEmissive.ref.value&&!xt.includes(t.dEmissiveType.ref.value)||t.dSubstance.ref.value&&!xt.includes(t.dSubstanceType.ref.value)||t.dClipping.ref.value&&!xt.includes(t.dClippingType.ref.value)||t.dWiggle.ref.value&&!xt.includes(t.dWiggleType.ref.value))return!1;let a=fa(t);for(let o=1,u=r.length;o<u;++o)if(fa(r[o])!==a)return!1;return!0}function ct(e,r,t){return e.length>=r?e:new t(r)}var Ot=new Pt("98");function vu(e,r){let t=hu[e],{hasElements:a,vertexAttributes:o}=t,u=r[0],i=r.length,p=[...t.extraTextures,...Md].filter(L=>u[L.tex]!==void 0),d={count:i,instanceBases:new Array(i).fill(0),instanceCounts:new Array(i).fill(0),vertexBases:new Array(i).fill(0),elementOffsets:new Array(i).fill(0)},y={aTransform:n.create(new Float32Array(0)),aInstance:n.create(new Float32Array(0)),aSegment:n.create(new Float32Array(0)),aSegmentSphere:n.create(new Float32Array(0)),aSegmentLod:n.create(new Float32Array(0)),drawCount:n.create(0),instanceCount:n.create(0),uVertexCount:n.create(0),uInstanceCount:n.create(0),uGroupCount:n.create(0),boundingSphere:n.create($()),invariantBoundingSphere:n.create($()),uInvariantBoundingSphere:n.create(oe()),uMarker:n.create(0),markerAverage:n.create(0),markerStatus:n.create(-1),transparencyAverage:n.create(0),transparencyMin:n.create(0),emissiveAverage:n.create(0),wiggleAverage:n.create(0),hasReflection:n.create(!1),instanceGrid:n.create({...Mt(),cellSize:2}),dSegmented:n.create(!0)};for(let{key:L}of o)y[L]=n.create(new Float32Array(0));a&&(y.elements=n.create(new Uint32Array(0)));for(let L of p){let F=L.float?Float32Array:Uint8Array;y[L.tex]=n.create(le(1,L.itemSize,F)),y[L.dim]=n.create(re.create(1,1))}let C={...u,...y};function f(L){let F=r[L],G=F.uGroupCount.ref.value;for(let z of p){if(z.granularity(u)!=="group")continue;let X=F[z.tex].ref.value,R=X.width*X.height;R>G&&(G=R)}return G}function b(L,F){let G=r[L],z=F.factor?F.factor(G):1;switch(F.granularity(u)){case"instance":return G.instanceCount.ref.value*z;case"group":return f(L)*z;case"groupInstance":return G.instanceCount.ref.value*G.uGroupCount.ref.value*z;case"vertex":return t.vertexTexels(G)*z;case"none":return 0}}let T=new Map;for(let L of p)T.set(L.tex,new Array(i).fill(0));let S=r.map(()=>({})),l="";function s(){let L="";for(let F=0;F<i;++F){let G=r[F];L+=`${G.instanceCount.ref.value},${G.uGroupCount.ref.value},${f(F)},${G.uVertexCount.ref.value},${G.drawCount.ref.value};`}return L+"#"+fa(u)}function g(L,F,G,z){let X=b(G,F),R=r[G][F.tex].ref.value;L.array.set(R.array.subarray(0,X*F.itemSize),z*F.itemSize)}function c(L){let F=y[L.tex],G=y[L.dim],z=T.get(L.tex),X=L.float?Float32Array:Uint8Array;if(L.granularity(u)==="none"){let U=u[L.tex].ref.value,H=ct(F.ref.value.array,U.array.length,X);H.set(U.array),z.fill(0),n.update(F,{array:H,width:U.width,height:U.height}),n.update(G,re.set(G.ref.value,U.width,U.height));return}let R=0;for(let U=0;U<i;++U)z[U]=R,R+=b(U,L);let w=le(Math.max(1,R),L.itemSize,X,F.ref.value.array);for(let U=0;U<i;++U)g(w,L,U,z[U]);n.update(F,w),n.update(G,re.set(G.ref.value,w.width,w.height))}function h(L,F){Ot.reset();for(let G=0;G<i;++G)Ot.includeSphere(r[G][F].ref.value);Ot.finishedIncludeStep();for(let G=0;G<i;++G)Ot.radiusSphere(r[G][F].ref.value);return Ot.getSphere(L)}function x(){n.update(y.boundingSphere,h(y.boundingSphere.ref.value,"boundingSphere"));let L=h(y.invariantBoundingSphere.ref.value,"invariantBoundingSphere");n.update(y.invariantBoundingSphere,L),n.update(y.uInvariantBoundingSphere,oe.fromSphere(y.uInvariantBoundingSphere.ref.value,L))}function A(){let L=0,F=0,G=r[0].markerStatus.ref.value;for(let z=0;z<i;++z){let X=r[z],R=Math.max(1,X.dMarkerType.ref.value==="instance"?X.instanceCount.ref.value:X.instanceCount.ref.value*X.uGroupCount.ref.value);L+=X.markerAverage.ref.value*R,F+=R,X.markerStatus.ref.value!==G&&(G=-1)}n.updateIfChanged(y.markerAverage,F>0?L/F:0),n.updateIfChanged(y.markerStatus,G),n.updateIfChanged(y.uMarker,G)}function v(){let L=0,F=1,G=0,z=0,X=!1,R=0;for(let w=0;w<i;++w){let U=r[w],H=Math.max(1,U.instanceCount.ref.value*U.uGroupCount.ref.value);L+=U.transparencyAverage.ref.value*H,G+=U.emissiveAverage.ref.value*H,z+=U.wiggleAverage.ref.value*H,F=Math.min(F,U.transparencyMin.ref.value),X=X||U.hasReflection.ref.value,R+=H}n.updateIfChanged(y.transparencyAverage,R>0?L/R:0),n.updateIfChanged(y.transparencyMin,F),n.updateIfChanged(y.emissiveAverage,R>0?G/R:0),n.updateIfChanged(y.wiggleAverage,R>0?z/R:0),n.updateIfChanged(y.hasReflection,X)}function _(L,F){let G=r[F].uVertexCount.ref.value;y[L.key].ref.value.set(r[F][L.key].ref.value.subarray(0,G*L.itemSize),d.vertexBases[F]*L.itemSize)}function E(L){let F=r[L].drawCount.ref.value,G=d.vertexBases[L],z=d.elementOffsets[L]/4,X=r[L].elements.ref.value,R=y.elements.ref.value;for(let w=0;w<F;++w)R[z+w]=X[w]+G}let I=new Array(i).fill(0),P=new Array(i).fill(0),V=new Array(i).fill(0);function B(L,F){let G=d.instanceCounts[L],z=d.instanceBases[L],X=r[L],w=X.instanceGrid.ref.value.cellSize<=1?void 0:X.lodLevels?.ref.value,U=w?.[0]?.[4]??1,H=w?.[1]?.[4]??1,j=w?.[2]?.[4]??1,Y=w?.[3]?.[4]??1;for(let Z=0;Z<G;++Z){let K=(z+Z)*4;F[K+0]=U,F[K+1]=H,F[K+2]=j,F[K+3]=Y}}function D(){let L=0,F=0,G=0,z=0,X=0,R=0;for(let w=0;w<i;++w){let U=r[w],H=U.instanceCount.ref.value,j=U.uGroupCount.ref.value;d.instanceBases[w]=L,d.instanceCounts[w]=H,d.vertexBases[w]=F,d.elementOffsets[w]=G*4,I[w]=j,P[w]=X-L*j,V[w]=R,L+=H,F+=U.uVertexCount.ref.value,G+=U.drawCount.ref.value,X+=H*j,R+=f(w),j>z&&(z=j)}return d.count=i,{instanceTotal:L,vertexTotal:F,drawTotal:G,maxGroupCount:z}}function M(L){let F=ct(y.aSegment.ref.value,L*3,Float32Array),G=ct(y.aSegmentSphere.ref.value,L*4,Float32Array),z=ct(y.aSegmentLod.ref.value,L*4,Float32Array),X=ct(y.aTransform.ref.value,L*16,Float32Array),R=ct(y.aInstance.ref.value,L,Float32Array);for(let w=0;w<i;++w){let U=r[w],H=d.instanceCounts[w],j=d.instanceBases[w];X.set(U.aTransform.ref.value.subarray(0,H*16),j*16);let Y=U.aInstance.ref.value,Z=U.invariantBoundingSphere.ref.value;B(w,z);for(let K=0;K<H;++K)R[j+K]=Y[K]+j,F[(j+K)*3+0]=I[w],F[(j+K)*3+1]=P[w],F[(j+K)*3+2]=V[w],G[(j+K)*4+0]=Z.center[0],G[(j+K)*4+1]=Z.center[1],G[(j+K)*4+2]=Z.center[2],G[(j+K)*4+3]=Z.radius}n.update(y.aTransform,X),n.update(y.aInstance,R),n.update(y.instanceGrid,{...Mt(),cellSize:2}),n.update(y.aSegment,F),n.update(y.aSegmentSphere,G),n.update(y.aSegmentLod,z)}function q(){let{instanceTotal:L,vertexTotal:F,drawTotal:G,maxGroupCount:z}=D();M(L);for(let X of o){n.update(y[X.key],ct(y[X.key].ref.value,F*X.itemSize,Float32Array));for(let R=0;R<i;++R)_(X,R);n.update(y[X.key],y[X.key].ref.value)}if(a){n.update(y.elements,ct(y.elements.ref.value,G,Uint32Array));for(let X=0;X<i;++X)E(X);n.update(y.elements,y.elements.ref.value)}for(let X of p)c(X);n.updateIfChanged(y.drawCount,G),n.updateIfChanged(y.instanceCount,L),n.updateIfChanged(y.uVertexCount,F),n.updateIfChanged(y.uInstanceCount,L),n.updateIfChanged(y.uGroupCount,z),x(),A(),v()}function W(){for(let L=0;L<i;++L){let F=r[L],G=S[L];G.aTransform=F.aTransform.ref.version,G.aInstance=F.aInstance.ref.version,G.boundingSphere=F.boundingSphere.ref.version,G.invariantBoundingSphere=F.invariantBoundingSphere.ref.version,G.markerStatus=F.markerStatus.ref.version,G.markerAverage=F.markerAverage.ref.version,G.transparencyAverage=F.transparencyAverage.ref.version,G.transparencyMin=F.transparencyMin.ref.version,G.emissiveAverage=F.emissiveAverage.ref.version,G.wiggleAverage=F.wiggleAverage.ref.version,G.hasReflection=F.hasReflection.ref.version,G.lodLevels=F.lodLevels?F.lodLevels.ref.version:-1;for(let z of o)G[z.key]=F[z.key].ref.version;a&&(G.elements=F.elements.ref.version);for(let z of p)G[z.tex]=F[z.tex].ref.version}}function O(){let L=s();if(L!==l)return l=L,q(),W(),!0;let F=!1,G=!1,z=!1,X=!1,R=!1,w=!1,U=new Set;for(let H=0;H<i;++H){let j=r[H],Y=S[H];(Y.aTransform!==j.aTransform.ref.version||Y.aInstance!==j.aInstance.ref.version||Y.invariantBoundingSphere!==j.invariantBoundingSphere.ref.version)&&(F=!0),(Y.boundingSphere!==j.boundingSphere.ref.version||Y.invariantBoundingSphere!==j.invariantBoundingSphere.ref.version)&&(G=!0),(Y.markerStatus!==j.markerStatus.ref.version||Y.markerAverage!==j.markerAverage.ref.version)&&(z=!0),(Y.transparencyAverage!==j.transparencyAverage.ref.version||Y.transparencyMin!==j.transparencyMin.ref.version||Y.emissiveAverage!==j.emissiveAverage.ref.version||Y.wiggleAverage!==j.wiggleAverage.ref.version||Y.hasReflection!==j.hasReflection.ref.version)&&(X=!0);for(let K of o)Y[K.key]!==j[K.key].ref.version&&(_(K,H),U.add(K.key));a&&Y.elements!==j.elements.ref.version&&(E(H),R=!0);let Z=j.lodLevels?j.lodLevels.ref.version:-1;Y.lodLevels!==Z&&(B(H,y.aSegmentLod.ref.value),w=!0)}for(let H of p){let j=T.get(H.tex),Y=!1;if(H.granularity(u)==="none"){S[0][H.tex]!==u[H.tex].ref.version&&c(H);continue}let Z=y[H.tex].ref.value;for(let K=0;K<i;++K){let J=r[K];(S[K][H.tex]!==J[H.tex].ref.version||H.tex==="tMarker"&&S[K].markerStatus!==J.markerStatus.ref.version)&&(g(Z,H,K,j[K]),Y=!0)}Y&&n.update(y[H.tex],Z)}F&&M(y.instanceCount.ref.value);for(let H of U)n.update(y[H],y[H].ref.value);return R&&n.update(y.elements,y.elements.ref.value),!F&&w&&n.update(y.aSegmentLod,y.aSegmentLod.ref.value),G&&x(),z&&A(),X&&v(),W(),!1}return l=s(),q(),W(),{type:e,values:C,segments:d,sync:O}}function Tu(e,r,t,a,o,u,i,p){let d=hu[t.type],y={...Be,...Le,...Fe,...Me,...d.schema,...Es},C={...t.values,uObjectId:n.create(r),dLightCount:n.create(p.dLightCount),dColorMarker:n.create(p.dColorMarker)},f=we(e,d.drawMode,d.shaderCode,y,C,u,i),b=ra(),T=ta(C),S="none",l,s={first:0,offset:0,instanceBase:0};function g(_){let{segments:E}=t;return s.first=d.hasElements?0:E.vertexBases[_],s.offset=E.elementOffsets[_],s.instanceBase=E.instanceBases[_],s}function c(){let _=0;for(let E=0,I=a.length;E<I;++E)_+=Math.max(1,a[E].instanceGrid.ref.value.cellCount)+1;return _}function h(_,E){return E?a[_].lodLevels.ref.value:void 0}function x(){let _=!!b.prepare(a[0].lodLevels,c(),!0);for(let E=0,I=a.length;E<I;++E)b.fullSegment(a[E],g(E),h(E,_));S="full"}function A(_,E,I,P,V){if(V===l){P.cacheHits.cull++;return}let B=b.prepare(a[0].lodLevels,c(),!0);S="cull";for(let D=0,M=a.length;D<M;++D)b.cullSegment(a[D],g(D),h(D,!!B),_,E,I,P,!0);l=V}function v(_,E,I){if(!b.prepare(a[0].lodLevels,c(),!0)){x();return}S="cull";for(let V=0,B=a.length;V<B;++V)b.cullSimpleSegment(a[V],g(V),h(V,!0),_,E,I)}return x(),{id:r,materialId:u,values:C,state:o,cull:A,uncull:()=>{S!=="full"&&x(),l=void 0},cullSimple:v,render:(_,E)=>{C.uAlpha&&C.alpha&&n.updateIfChanged(C.uAlpha,pr(C.alpha.ref.value*o.alphaFactor,0,1)),f.render(_,E,b.list)},getClipInfo:T.get,getByteCount:()=>f.getByteCount(),getProgram:_=>f.getProgram(_),setTransparency:_=>f.setTransparency(_),update:()=>{t.sync(),S="none",f.update(),l=void 0},dispose:()=>f.destroy()}}var Cu=Ce(0,2147483647),C0=Ce(0,2147483647);function S0(e,r,t,a){return{id:Cu(),type:e,values:r,state:t,materialId:a}}function Gd(e){return"members"in e}function _0(e){if(e.length<2)return!1;let{type:r,materialId:t}=e[0];if(!vn(r))return!1;for(let a of e)if(a.type!==r||a.materialId!==t)return!1;return!!xu(r,e.map(a=>a.values))}function A0(e){if(!vn(e[0].type))throw new Error(`unsupported merged render object type '${e[0].type}'`);let r=vu(e[0].type,e.map(t=>t.values));return{id:Cu(),type:e[0].type,values:r.values,state:e[0].state,materialId:e[0].materialId,members:e,merged:r}}function I0(e,r,t,a){if(Gd(r))return Tu(e,r.id,r.merged,r.members.map(o=>o.values),r.state,r.materialId,t,a);switch(r.type){case"mesh":return lu(e,r.id,r.values,r.state,r.materialId,t,a);case"points":return cu(e,r.id,r.values,r.state,r.materialId,t,a);case"spheres":return fu(e,r.id,r.values,r.state,r.materialId,t,a);case"cylinders":return yu(e,r.id,r.values,r.state,r.materialId,t,a);case"text":return mu(e,r.id,r.values,r.state,r.materialId,t,a);case"lines":return du(e,r.id,r.values,r.state,r.materialId,t,a);case"direct-volume":return uu(e,r.id,r.values,r.state,r.materialId,t,a);case"image":return gu(e,r.id,r.values,r.state,r.materialId,t,a);case"texture-mesh":return pu(e,r.id,r.values,r.state,r.materialId,t,a)}tt(r.type)}var ma;(S=>{function e(l,s,g,c,h,x,A,v,_){return _?o(l,s,g,c,h,x,A,v,_):a(l,s,g,c,h,x,A,v)}S.create=e;function r(l){let s=l?l.fontTexture.ref.value:le(0,1,Uint8Array),g=l?l.centerBuffer.ref.value:new Float32Array(0),c=l?l.mappingBuffer.ref.value:new Float32Array(0),h=l?l.depthBuffer.ref.value:new Float32Array(0),x=l?l.indexBuffer.ref.value:new Uint32Array(0),A=l?l.groupBuffer.ref.value:new Float32Array(0),v=l?l.tcoordBuffer.ref.value:new Float32Array(0);return e(s,g,c,h,x,A,v,0,l)}S.createEmpty=r;function t(l){return Ve([l.charCount,l.fontTexture.ref.version,l.centerBuffer.ref.version,l.mappingBuffer.ref.version,l.depthBuffer.ref.version,l.indexBuffer.ref.version,l.groupBuffer.ref.version,l.tcoordBuffer.ref.version])}function a(l,s,g,c,h,x,A,v){let _=$(),E,I=-1,P=-1,V={kind:"text",charCount:v,fontTexture:n.create(l),centerBuffer:n.create(s),mappingBuffer:n.create(g),depthBuffer:n.create(c),indexBuffer:n.create(h),groupBuffer:n.create(x),tcoordBuffer:n.create(A),get boundingSphere(){let B=t(V);if(B!==I){let D=ir(V.centerBuffer.ref.value,V.charCount*4,4);$.copy(_,D),I=B}return _},get groupMapping(){return V.groupBuffer.ref.version!==P&&(E=Tr(V.groupBuffer.ref.value,V.charCount,4),P=V.groupBuffer.ref.version),E},setBoundingSphere(B){$.copy(_,B),I=t(V)},hasBoundingSphere(){return I===t(V)}};return V}function o(l,s,g,c,h,x,A,v,_){return _.charCount=v,n.update(_.fontTexture,l),n.update(_.centerBuffer,s),n.update(_.mappingBuffer,g),n.update(_.depthBuffer,c),n.update(_.indexBuffer,h),n.update(_.groupBuffer,x),n.update(_.tcoordBuffer,A),_}S.Params={...Q.Params,...da,sizeFactor:k.Numeric(1,{min:0,max:10,step:.1}),borderWidth:k.Numeric(0,{min:0,max:.5,step:.01}),borderColor:k.Color(Rt.grey),offsetX:k.Numeric(0,{min:0,max:10,step:.1}),offsetY:k.Numeric(0,{min:0,max:10,step:.1}),offsetZ:k.Numeric(0,{min:0,max:10,step:.1}),background:k.Boolean(!1),backgroundMargin:k.Numeric(.2,{min:0,max:1,step:.01}),backgroundColor:k.Color(Rt.grey),backgroundOpacity:k.Numeric(1,{min:0,max:1,step:.01}),tether:k.Boolean(!1),tetherLength:k.Numeric(1,{min:0,max:5,step:.1}),tetherBaseWidth:k.Numeric(.3,{min:0,max:1,step:.01}),attachment:k.Select("middle-center",[["bottom-left","bottom-left"],["bottom-center","bottom-center"],["bottom-right","bottom-right"],["middle-left","middle-left"],["middle-center","middle-center"],["middle-right","middle-right"],["top-left","top-left"],["top-center","top-center"],["top-right","top-right"]])},S.Utils={Params:S.Params,createEmpty:r,createValues:d,createValuesSimple:y,updateValues:C,updateBoundingSphere:f,createRenderableState:b,updateRenderableState:T,createPositionIterator:p};function p(l,s){let g=l.charCount*4,c=s.instanceCount.ref.value,h=Qe(),x=h.position,A=l.centerBuffer.ref.value,v=s.aTransform.ref.value;return Se(g,c,4,(E,I)=>(I<0?m.fromArray(x,A,E*3):m.transformMat4Offset(x,A,v,0,E*3,I*16),h))}function d(l,s,g,c,h){let{instanceCount:x,groupCount:A}=g,v=p(l,s),_=ke(g,v,c.color),E=jr(g,v,c.size),I=Ge(h.instanceGranularity,A,x)?xe(x,"instance"):xe(x*A,"groupInstance"),P=Ue(),V=ze(),B=qe(),D=We(),M=je(),q=He(),W={drawCount:l.charCount*2*3,vertexCount:l.charCount*4,groupCount:A,instanceCount:x},O=dt(E)*h.sizeFactor,L=Su(l.mappingBuffer.ref.value,l.depthBuffer.ref.value,l.charCount,O),F=$.expand($(),l.boundingSphere,L),G=he(F,s.aTransform.ref.value,x,0);return{dGeometryType:n.create("text"),aPosition:l.centerBuffer,aMapping:l.mappingBuffer,aDepth:l.depthBuffer,aGroup:l.groupBuffer,elements:l.indexBuffer,boundingSphere:n.create(G),invariantBoundingSphere:n.create(F),uInvariantBoundingSphere:n.create(oe.ofSphere(F)),..._,...E,...I,...P,...V,...B,...D,...M,...q,...s,aTexCoord:l.tcoordBuffer,tFont:l.fontTexture,padding:n.create(L),...Q.createValues(h,W),uSizeFactor:n.create(h.sizeFactor),uBorderWidth:n.create(pr(h.borderWidth,0,.5)),uBorderColor:n.create(ge.toArrayNormalized(h.borderColor,m.zero(),0)),uOffsetX:n.create(h.offsetX),uOffsetY:n.create(h.offsetY),uOffsetZ:n.create(h.offsetZ),uBackgroundColor:n.create(ge.toArrayNormalized(h.backgroundColor,m.zero(),0)),uBackgroundOpacity:n.create(h.backgroundOpacity)}}function y(l,s,g,c,h){let x=Q.createSimple(g,c,h),A={...k.getDefaultValues(S.Params),...s};return d(l,x.transform,x.locationIterator,x.theme,A)}function C(l,s){Q.updateValues(l,s),n.updateIfChanged(l.uSizeFactor,s.sizeFactor),n.updateIfChanged(l.uBorderWidth,s.borderWidth),ge.fromNormalizedArray(l.uBorderColor.ref.value,0)!==s.borderColor&&(ge.toArrayNormalized(s.borderColor,l.uBorderColor.ref.value,0),n.update(l.uBorderColor,l.uBorderColor.ref.value)),n.updateIfChanged(l.uOffsetX,s.offsetX),n.updateIfChanged(l.uOffsetY,s.offsetY),n.updateIfChanged(l.uOffsetZ,s.offsetZ),ge.fromNormalizedArray(l.uBackgroundColor.ref.value,0)!==s.backgroundColor&&(ge.toArrayNormalized(s.backgroundColor,l.uBackgroundColor.ref.value,0),n.update(l.uBackgroundColor,l.uBackgroundColor.ref.value)),n.updateIfChanged(l.uBackgroundOpacity,s.backgroundOpacity)}function f(l,s){let g=dt(l)*l.uSizeFactor.ref.value,c=Su(l.aMapping.ref.value,l.aDepth.ref.value,s.charCount,g),h=$.expand($(),s.boundingSphere,c),x=he(h,l.aTransform.ref.value,l.instanceCount.ref.value,0);$.equals(x,l.boundingSphere.ref.value)||n.update(l.boundingSphere,x),$.equals(h,l.invariantBoundingSphere.ref.value)||(n.update(l.invariantBoundingSphere,h),n.update(l.uInvariantBoundingSphere,oe.fromSphere(l.uInvariantBoundingSphere.ref.value,h))),n.update(l.padding,c)}function b(l){let s=Q.createRenderableState(l);return T(s,l),s}function T(l,s){Q.updateRenderableState(l,s),l.pickable=!1,l.opaque=!1,l.writeDepth=!0}})(ma||={});function Su(e,r,t,a){let o=0,u=0,i=0;for(let p=0,d=t*4;p<d;++p){let y=2*p,C=Math.abs(e[y]);C>o&&(o=C);let f=Math.abs(e[y+1]);f>u&&(u=f);let b=Math.abs(r[p]);b>i&&(i=b)}return Math.max(i,a*Math.sqrt(o*o+u*u))}var ft=ne.add,Tn=ne.add2,ur=ne.add3,or=m(),Vr=m(),Nt=m(),pa;(r=>{function e(t=2048,a=1024,o){let u=ne.create(Float32Array,1,a,o?o.groupBuffer.ref.value:t),i=ne.create(Float32Array,3,a,o?o.startBuffer.ref.value:t),p=ne.create(Float32Array,3,a,o?o.endBuffer.ref.value:t),d=(f,b,T,S,l,s,g)=>{for(let c=0;c<4;++c)ur(i,f,b,T),ur(p,S,l,s),ft(u,g)},y=(f,b,T)=>{for(let S=0;S<4;++S)ur(i,f[0],f[1],f[2]),ur(p,b[0],b[1],b[2]),ft(u,T)},C=(f,b,T,S)=>{let l=m.distance(f,b),s=T%2!==0,g=Math.floor((T+1)/2),c=l/(T+.5);m.setMagnitude(Nt,m.sub(Nt,b,f),c),m.copy(or,f);for(let h=0;h<g;++h)m.add(or,or,Nt),s&&h===g-1?m.copy(Vr,b):m.add(Vr,or,Nt),d(or[0],or[1],or[2],Vr[0],Vr[1],Vr[2],S),m.add(or,or,Nt)};return{add:d,addVec:y,addFixedCountDashes:C,addFixedLengthDashes:(f,b,T,S)=>{let l=m.distance(f,b);C(f,b,l/T,S)},addCage:(f,b,T)=>{let{vertices:S,edges:l}=b;for(let s=0,g=l.length;s<g;s+=2)m.fromArray(or,S,l[s]*3),m.fromArray(Vr,S,l[s+1]*3),m.transformMat4(or,or,f),m.transformMat4(Vr,Vr,f),d(or[0],or[1],or[2],Vr[0],Vr[1],Vr[2],T)},getLines:()=>{let f=u.elementCount/4,b=u.elementCount,T=ne.compact(u,!0),S=ne.compact(i,!0),l=ne.compact(p,!0),s=o&&f<=o.lineCount&&o.stripCount.ref.value===0?o.mappingBuffer.ref.value:new Float32Array(f*8),g=o&&f<=o.lineCount&&o.stripCount.ref.value===0?o.indexBuffer.ref.value:new Uint32Array(f*6),c=o?o.stripBuffer.ref.value:new Uint32Array(0);return(!o||f>o.lineCount||o.stripCount.ref.value>0)&&Od(f,s,g),vt.create(s,g,T,S,l,c,f,b,0,o)}}}r.create=e})(pa||={});function Od(e,r,t){for(let a=0;a<e;++a){let o=a*8;r[o]=-1,r[o+1]=-1,r[o+2]=1,r[o+3]=-1,r[o+4]=-1,r[o+5]=1,r[o+6]=1,r[o+7]=1}for(let a=0;a<e;++a){let o=a*4,u=a*6;t[u]=o,t[u+1]=o+1,t[u+2]=o+2,t[u+3]=o+1,t[u+4]=o+3,t[u+5]=o+2}}var Nd;(r=>{function e(t=2048,a=1024,o){let u=ne.create(Float32Array,1,a,o?o.groupBuffer.ref.value:t),i=ne.create(Float32Array,3,a,o?o.startBuffer.ref.value:t),p=ne.create(Float32Array,3,a,o?o.endBuffer.ref.value:t),d=ne.create(Float32Array,2,a,o?o.mappingBuffer.ref.value:t),y=ne.create(Uint32Array,3,a,o?o.indexBuffer.ref.value:t),C=ne.create(Uint32Array,1,a,o?o.stripBuffer.ref.value:t),f=0,b=0,T=0,S=0,l=0,s=0,g=(c,h,x)=>{if(b===0){T=u.elementCount,S=c,l=h,s=x,b=1;return}let A=u.elementCount;b===1&&(ur(i,S,l,s),ur(p,c,h,x),ft(u,f),Tn(d,-1,-1),ur(i,S,l,s),ur(p,c,h,x),ft(u,f),Tn(d,1,-1)),ur(i,S,l,s),ur(p,c,h,x),ft(u,f),Tn(d,-1,1),ur(i,S,l,s),ur(p,c,h,x),ft(u,f),Tn(d,1,1);let v=b===1?T:A-2,_=b===1?A+2:A;ur(y,v,v+1,_),ur(y,v+1,_+1,_),S=c,l=h,s=x,b++};return{start:c=>{f=c,b=0,C.elementCount===0&&ft(C,0)},add:(c,h,x)=>{g(c,h,x)},addVec:c=>{g(c[0],c[1],c[2])},end:()=>{b=0,ft(C,u.elementCount)},getLines:()=>{let c=y.elementCount/2,h=u.elementCount,x=C.elementCount-1,A=ne.compact(u,!0),v=ne.compact(i,!0),_=ne.compact(p,!0),E=ne.compact(d,!0),I=ne.compact(y,!0),P=ne.compact(C,!0);return vt.create(E,I,A,v,_,P,c,h,x,o)}}}r.create=e})(Nd||={});var vt;(S=>{function e(l,s,g,c,h,x,A,v,_,E){return E?u(l,s,g,c,h,x,A,v,_,E):o(l,s,g,c,h,x,A,v,_)}S.create=e;function r(l){let s=l?l.mappingBuffer.ref.value:new Float32Array(0),g=l?l.indexBuffer.ref.value:new Uint32Array(0),c=l?l.groupBuffer.ref.value:new Float32Array(0),h=l?l.startBuffer.ref.value:new Float32Array(0),x=l?l.endBuffer.ref.value:new Float32Array(0),A=l?l.stripBuffer.ref.value:new Uint32Array(0);return e(s,g,c,h,x,A,0,0,0,l)}S.createEmpty=r;function t(l,s){let g=l.vertexBuffer.ref.value,c=l.indexBuffer.ref.value,h=l.groupBuffer.ref.value,x=pa.create(l.triangleCount*3,l.triangleCount/10,s);for(let A=0,v=l.triangleCount*3;A<v;A+=3){let _=c[A],E=c[A+1],I=c[A+2],P=g[_*3],V=g[_*3+1],B=g[_*3+2],D=g[E*3],M=g[E*3+1],q=g[E*3+2],W=g[I*3],O=g[I*3+1],L=g[I*3+2];x.add(P,V,B,D,M,q,h[_]),x.add(P,V,B,W,O,L,h[_]),x.add(D,M,q,W,O,L,h[E])}return x.getLines()}S.fromMesh=t;function a(l){return Ve([l.lineCount,l.vertexCount,l.mappingBuffer.ref.version,l.indexBuffer.ref.version,l.groupBuffer.ref.version,l.startBuffer.ref.version,l.endBuffer.ref.version,l.stripCount.ref.version,l.stripBuffer.ref.version])}function o(l,s,g,c,h,x,A,v,_){let E=$(),I,P=-1,V=-1,B={kind:"lines",lineCount:A,vertexCount:v,mappingBuffer:n.create(l),indexBuffer:n.create(s),groupBuffer:n.create(g),startBuffer:n.create(c),endBuffer:n.create(h),stripCount:n.create(_),stripBuffer:n.create(x),get boundingSphere(){let D=a(B);if(D!==P){let M=ir(B.startBuffer.ref.value,B.lineCount*4,4),q=ir(B.endBuffer.ref.value,B.lineCount*4,4);$.expandBySphere(E,M,q),P=D}return E},get groupMapping(){return B.groupBuffer.ref.version!==V&&(I=Tr(B.groupBuffer.ref.value,B.lineCount,4),V=B.groupBuffer.ref.version),I},setBoundingSphere(D){$.copy(E,D),P=a(B)},hasBoundingSphere(){return P===a(B)}};return B}function u(l,s,g,c,h,x,A,v,_,E){return(A>E.lineCount||_!==E.stripCount.ref.value||_>0)&&(n.update(E.mappingBuffer,l),n.update(E.indexBuffer,s)),E.lineCount=A,E.vertexCount=v,n.update(E.groupBuffer,g),n.update(E.startBuffer,c),n.update(E.endBuffer,h),n.updateIfChanged(E.stripCount,_),n.update(E.stripBuffer,x),E}function i(l,s){let g=l.startBuffer.ref.value;zr(s,g,0,l.vertexCount),n.update(l.startBuffer,g);let c=l.endBuffer.ref.value;zr(s,c,0,l.vertexCount),n.update(l.endBuffer,c)}S.transform=i,S.Params={...Q.Params,sizeFactor:k.Numeric(2,{min:0,max:10,step:.1}),lineSizeAttenuation:k.Boolean(!1),animation:Cr()},S.Utils={Params:S.Params,createEmpty:r,createValues:C,createValuesSimple:f,updateValues:b,updateBoundingSphere:T,createRenderableState:Q.createRenderableState,updateRenderableState:Q.updateRenderableState,createPositionIterator:y};function y(l,s){let g=l.lineCount*4,c=s.instanceCount.ref.value,h=Qe(),x=h.position,A=l.startBuffer.ref.value,v=l.endBuffer.ref.value,_=s.aTransform.ref.value;return Se(g,c,2,(I,P)=>{let V=I%4===0?A:v;return P<0?m.fromArray(x,V,I*3):m.transformMat4Offset(x,V,_,0,I*3,P*16),h})}function C(l,s,g,c,h){let{instanceCount:x,groupCount:A}=g,v=y(l,s),_=ke(g,v,c.color),E=jr(g,v,c.size),I=Ge(h.instanceGranularity,A,x)?xe(x,"instance"):xe(x*A,"groupInstance"),P=Ue(),V=ze(),B=qe(),D=We(),M=je(),q=He(),W={drawCount:l.lineCount*2*3,vertexCount:l.vertexCount,groupCount:A,instanceCount:x},O=$.clone(l.boundingSphere),L=he(O,s.aTransform.ref.value,x,0);return{dGeometryType:n.create("lines"),aMapping:l.mappingBuffer,aGroup:l.groupBuffer,aStart:l.startBuffer,aEnd:l.endBuffer,elements:l.indexBuffer,boundingSphere:n.create(L),invariantBoundingSphere:n.create(O),uInvariantBoundingSphere:n.create(oe.ofSphere(O)),..._,...E,...I,...P,...V,...B,...D,...M,...q,...s,...Q.createValues(h,W),uSizeFactor:n.create(h.sizeFactor),dLineSizeAttenuation:n.create(h.lineSizeAttenuation),uDoubleSided:n.create(!0),dFlipSided:n.create(!1),...Sr(h.animation),stripCount:l.stripCount,stripOffsets:l.stripBuffer}}function f(l,s,g,c,h){let x=Q.createSimple(g,c,h),A={...k.getDefaultValues(S.Params),...s};return C(l,x.transform,x.locationIterator,x.theme,A)}function b(l,s){Q.updateValues(l,s),n.updateIfChanged(l.uSizeFactor,s.sizeFactor),n.updateIfChanged(l.dLineSizeAttenuation,s.lineSizeAttenuation),_r(l,s.animation)}function T(l,s){let g=$.clone(s.boundingSphere),c=he(g,l.aTransform.ref.value,l.instanceCount.ref.value,0);$.equals(c,l.boundingSphere.ref.value)||n.update(l.boundingSphere,c),$.equals(g,l.invariantBoundingSphere.ref.value)||(n.update(l.invariantBoundingSphere,g),n.update(l.uInvariantBoundingSphere,oe.fromSphere(l.uInvariantBoundingSphere.ref.value,g)))}})(vt||={});var _u=m(),Au=m(),Iu=m();function Sn(e,r){let t=r.length,a=kt(t/3);for(let o=0;o<t;o+=3)m.fromArray(_u,e,r[o]*3),m.fromArray(Au,e,r[o+1]*3),m.fromArray(Iu,e,r[o+2]*3),a.add(_u,Au,Iu);return a.getPrimitive()}var Cn=m();function kt(e,r){r===void 0&&(r=e*3);let t=new Float32Array(r*3),a=new Float32Array(r*3),o=new Uint32Array(e*3),u=0,i=0;return{add:(p,d,y)=>{m.toArray(p,t,u),m.toArray(d,t,u+3),m.toArray(y,t,u+6),m.triangleNormal(Cn,p,d,y);for(let C=0;C<3;++C)m.toArray(Cn,a,u+3*C),o[i+C]=u/3+C;u+=9,i+=3},addQuad:(p,d,y,C)=>{m.toArray(p,t,u),m.toArray(d,t,u+3),m.toArray(y,t,u+6),m.toArray(C,t,u+9),m.triangleNormal(Cn,p,d,y);for(let b=0;b<4;++b)m.toArray(Cn,a,u+3*b);let f=u/3;o[i]=f,o[i+1]=f+1,o[i+2]=f+2,o[i+3]=f+2,o[i+4]=f+3,o[i+5]=f,u+=12,i+=6},getPrimitive:()=>({vertices:t,normals:a,indices:o})}}var Tt=m(),kd=dr();function Du(e,r){let{vertices:t,normals:a}=e,o=dr.directionTransform(kd,r);for(let u=0,i=t.length;u<i;u+=3)m.transformMat4(Tt,m.fromArray(Tt,t,u),r),m.toArray(Tt,t,u),m.transformMat3(Tt,m.fromArray(Tt,a,u),o),m.toArray(Tt,a,u);return e}function Ct(e,r,t=-1){let a=new Float32Array(e*3),o=t===-1?e<=4?Math.sqrt(2)/2:.6:t,u=r?1:0;for(let i=0,p=e;i<p;++i){let d=(i*2+u)/e*Math.PI;a[i*3]=Math.cos(d)*o,a[i*3+1]=Math.sin(d)*o,a[i*3+2]=0}return a}function _n(e,r){return{vertices:e,edges:r}}function EC(e){return{vertices:new Float32Array(e.vertices),edges:new Uint32Array(e.edges)}}var ga=m.zero();function PC(e,r){let{vertices:t}=e;for(let a=0,o=t.length;a<o;a+=3)m.transformMat4(ga,m.fromArray(ga,t,a),r),m.toArray(ga,t,a);return e}var Wr=m(),mt=m(),Jr=m(),et=m(),_e=Ct(4,!0);function Eu(e){let a=kt(12,e?36:24);for(let o=0;o<4;++o){let u=(o+1)%4;m.set(Wr,_e[o*3],_e[o*3+1],-.5),m.set(mt,_e[u*3],_e[u*3+1],-.5),m.set(Jr,_e[u*3],_e[u*3+1],.5),m.set(et,_e[o*3],_e[o*3+1],.5),e?o<2?a.add(Wr,Jr,et):a.add(Wr,mt,et):a.addQuad(Wr,mt,Jr,et)}return m.set(Wr,_e[0],_e[1],-.5),m.set(mt,_e[3],_e[4],-.5),m.set(Jr,_e[6],_e[7],-.5),m.set(et,_e[9],_e[10],-.5),e?a.add(Jr,mt,Wr):a.addQuad(et,Jr,mt,Wr),m.set(Wr,_e[0],_e[1],.5),m.set(mt,_e[3],_e[4],.5),m.set(Jr,_e[6],_e[7],.5),m.set(et,_e[9],_e[10],.5),e?a.add(Wr,Jr,et):a.addQuad(Wr,mt,Jr,et),a.getPrimitive()}var ya;function Pu(){return ya||(ya=Eu(!1)),ya}var ba;function MC(){return ba||(ba=Eu(!0)),ba}var ha;function wC(){return ha||(ha=_n([.5,.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,.5,.5,.5,-.5,.5,.5,-.5,-.5,.5,.5,-.5,.5],[0,4,1,5,2,6,3,7,0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4])),ha}function xa(e){return e.map(r=>({x:r[0],alpha:r[1]}))}var St=256;function Ud(e,r){let t=[{x:0,alpha:0},{x:0,alpha:0},...e,{x:1,alpha:0},{x:1,alpha:0}],a=r??new Uint8Array(St);r&&a.fill(0);let o=0,u,i,p,d,y,C,f=e.length+1;for(let b=0;b<f;++b){u=t[b+1].x,i=t[b+2].x,p=t[b].alpha,d=t[b+1].alpha,y=t[b+2].alpha,C=t[b+3].alpha;let T=Math.round((i-u)*St);for(let S=0;S<T;++S){let l=S/T;o<St&&(a[o]=Math.max(0,Ga(p,d,y,C,l,.5)*255),++o)}}return a}function va(e,r){let a=r&&r.ref.value.height===1&&r.ref.value.array.length===St?r.ref.value.array:new Uint8Array(St);Ud(e,a);let o={array:a,width:St,height:1};return r?(n.update(r,o),r):n.create(o)}var Ta=Pu(),Ca;(g=>{function e(c,h,x,A,v,_,E,I,P,V,B){return B?a(c,h,x,A,v,_,E,I,P,V,B):t(c,h,x,A,v,_,E,I,P,V)}g.create=e;function r(c){return Ve([c.bboxSize.ref.version,c.gridDimension.ref.version,c.gridTexture.ref.version,c.transform.ref.version,c.gridStats.ref.version])}function t(c,h,x,A,v,_,E,I,P,V){let B=$(),D=-1,M=_.getWidth(),q=_.getHeight(),W=_.getDepth(),O={kind:"direct-volume",gridDimension:n.create(h),gridTexture:n.create(_),gridTextureDim:n.create(m.create(M,q,W)),gridStats:n.create(oe.create(E.min,E.max,E.mean,E.sigma)),bboxMin:n.create(c.min),bboxMax:n.create(c.max),bboxSize:n.create(m.sub(m(),c.max,c.min)),transform:n.create(x),cellDim:n.create(v),unitToCartn:n.create(A),cartnToUnit:n.create(se.invert(se(),A)),get boundingSphere(){let L=r(O);if(L!==D){let F=zd(O.gridDimension.ref.value,O.transform.ref.value);$.copy(B,F),D=L}return B},packedGroup:n.create(I),axisOrder:n.create(P),dataType:n.create(V),setBoundingSphere(L){$.copy(B,L),D=r(O)},hasBoundingSphere(){return D===r(O)},meta:{}};return O}function a(c,h,x,A,v,_,E,I,P,V,B){let D=_.getWidth(),M=_.getHeight(),q=_.getDepth();return n.update(B.gridDimension,h),n.update(B.gridTexture,_),n.update(B.gridTextureDim,m.set(B.gridTextureDim.ref.value,D,M,q)),n.update(B.gridStats,oe.set(B.gridStats.ref.value,E.min,E.max,E.mean,E.sigma)),n.update(B.bboxMin,c.min),n.update(B.bboxMax,c.max),n.update(B.bboxSize,m.sub(B.bboxSize.ref.value,c.max,c.min)),n.update(B.transform,x),n.update(B.cellDim,v),n.update(B.unitToCartn,A),n.update(B.cartnToUnit,se.invert(se(),A)),n.updateIfChanged(B.packedGroup,I),n.updateIfChanged(B.axisOrder,m.fromArray(B.axisOrder.ref.value,P,0)),n.updateIfChanged(B.dataType,V),B}function o(c){let h=ve(),x=m(),A=se.identity(),v=se.identity(),_=m(),E=Te(),I=Et.One.stats,P=!1,V=m.create(0,1,2);return e(h,x,A,v,_,E,I,P,V,"byte",c)}g.createEmpty=o,g.Params={...Q.Params,ignoreLight:k.Boolean(!1,Q.ShadingCategory),celShaded:k.Boolean(!1,Q.ShadingCategory),xrayShaded:k.Select(!1,[[!1,"Off"],[!0,"On"],["inverted","Inverted"]],Q.ShadingCategory),controlPoints:k.LineGraph([re.create(.19,0),re.create(.2,.05),re.create(.25,.05),re.create(.26,0),re.create(.79,0),re.create(.8,.05),re.create(.85,.05),re.create(.86,0)],{isEssential:!0,yAxis:{scale:"log"}}),stepsPerCell:k.Numeric(3,{min:1,max:10,step:1}),jumpLength:k.Numeric(0,{min:0,max:20,step:.1})},g.Utils={Params:g.Params,createEmpty:o,createValues:f,createValuesSimple:b,updateValues:T,updateBoundingSphere:S,createRenderableState:l,updateRenderableState:s,createPositionIterator:p};function p(c,h){let x=c.transform.ref.value,[A,v,_]=c.gridDimension.ref.value,E=A*v*_,I=h.instanceCount.ref.value,P=Qe(),V=P.position,B=h.aTransform.ref.value;return Se(E,I,1,(M,q)=>{let W=Math.floor(M/_);return V[0]=Math.floor(W/v),V[1]=W%v,V[2]=M%_,m.transformMat4(V,V,x),q>=0&&m.transformMat4Offset(V,V,B,0,0,q*16),P})}function d(c,h){return Math.ceil(m.magnitude(c)*h)}function y(c,h){return Math.min(...c)*(1/h)}function C(c){return 1/c}function f(c,h,x,A,v){let{gridTexture:_,gridTextureDim:E,gridStats:I}=c,{bboxSize:P,bboxMin:V,bboxMax:B,gridDimension:D,transform:M}=c,{instanceCount:q,groupCount:W}=x,O=p(c,h),L=ke(x,O,A.color),F=Ge(v.instanceGranularity,W,q)?xe(q,"instance"):xe(q*W,"groupInstance"),G=Ue(),z=ze(),X=qe(),R=We(),w=je(),U=He(),[H,j,Y]=D.ref.value,Z={drawCount:Ta.indices.length,vertexCount:H*j*Y,groupCount:W,instanceCount:q},K=$.clone(c.boundingSphere),J=he(K,h.aTransform.ref.value,q,0),ee=xa(v.controlPoints),Ie=va(ee);return{dGeometryType:n.create("directVolume"),...L,...F,...G,...z,...X,...R,...w,...U,...h,...Q.createValues(v,Z),aPosition:n.create(Ta.vertices),elements:n.create(Ta.indices),boundingSphere:n.create(J),invariantBoundingSphere:n.create(K),uInvariantBoundingSphere:n.create(oe.ofSphere(K)),uBboxMin:V,uBboxMax:B,uBboxSize:P,uMaxSteps:n.create(d(D.ref.value,v.stepsPerCell)),uStepScale:n.create(y(c.cellDim.ref.value,v.stepsPerCell)),uJumpLength:n.create(v.jumpLength),uTransform:M,uGridDim:D,tTransferTex:Ie,uTransferScale:n.create(C(v.stepsPerCell)),dGridTexType:n.create(_.ref.value.getDepth()>0?"3d":"2d"),uGridTexDim:E,tGridTex:_,uGridStats:I,uCellDim:c.cellDim,uCartnToUnit:c.cartnToUnit,uUnitToCartn:c.unitToCartn,dPackedGroup:c.packedGroup,dAxisOrder:n.create(c.axisOrder.ref.value.join("")),dIgnoreLight:n.create(v.ignoreLight),dCelShaded:n.create(v.celShaded),dXrayShaded:n.create(v.xrayShaded==="inverted"?"inverted":v.xrayShaded===!0?"on":"off"),meta:n.create(c.meta)}}function b(c,h,x,A,v){let _=Q.createSimple(x,A,v),E={...k.getDefaultValues(g.Params),...h};return f(c,_.transform,_.locationIterator,_.theme,E)}function T(c,h){Q.updateValues(c,h),n.updateIfChanged(c.dIgnoreLight,h.ignoreLight),n.updateIfChanged(c.dCelShaded,h.celShaded),n.updateIfChanged(c.dXrayShaded,h.xrayShaded==="inverted"?"inverted":h.xrayShaded===!0?"on":"off");let x=xa(h.controlPoints);va(x,c.tTransferTex),n.updateIfChanged(c.uMaxSteps,d(c.uGridDim.ref.value,h.stepsPerCell)),n.updateIfChanged(c.uStepScale,y(c.uCellDim.ref.value,h.stepsPerCell)),n.updateIfChanged(c.uTransferScale,C(h.stepsPerCell)),n.updateIfChanged(c.uJumpLength,h.jumpLength)}function S(c,h){let x=$.clone(h.boundingSphere),A=he(x,c.aTransform.ref.value,c.instanceCount.ref.value,0);$.equals(A,c.boundingSphere.ref.value)||n.update(c.boundingSphere,A),$.equals(x,c.invariantBoundingSphere.ref.value)||(n.update(c.invariantBoundingSphere,x),n.update(c.uInvariantBoundingSphere,oe.fromSphere(c.uInvariantBoundingSphere.ref.value,x)))}function l(c){let h=Q.createRenderableState(c);return h.opaque=!1,h.writeDepth=!1,h}function s(c,h){Q.updateRenderableState(c,h),c.opaque=!1,c.writeDepth=!1}})(Ca||={});function zd(e,r){return $.fromDimensionsAndTransform($(),e,r)}var Sa;(A=>{function e(v,_,E,I){return I?o(v,_,E,I):a(v,_,E)}A.create=e;function r(v){let _=v?v.centerBuffer.ref.value:new Float32Array(0),E=v?v.groupBuffer.ref.value:new Float32Array(0);return e(_,E,0,v)}A.createEmpty=r;function t(v){return Ve([v.sphereCount,v.centerBuffer.ref.version,v.groupBuffer.ref.version])}function a(v,_,E){let I=$(),P,V=-1,B=-1,D=n.create(le(1,4,Float32Array)),M=n.create(re.create(0,0)),q=n.create([]),W=n.create(0),O={kind:"spheres",sphereCount:E,centerBuffer:n.create(v),groupBuffer:n.create(_),get boundingSphere(){let L=t(O);if(L!==V){let F=ir(O.centerBuffer.ref.value,O.sphereCount,1);$.copy(I,F),V=L}return I},get groupMapping(){return O.groupBuffer.ref.version!==B&&(P=Tr(O.groupBuffer.ref.value,O.sphereCount),B=O.groupBuffer.ref.version),P},setBoundingSphere(L){$.copy(I,L),V=t(O)},hasBoundingSphere(){return V===t(O)},shaderData:{positionGroup:D,texDim:M,lodLevels:q,sizeFactor:W,update(L){let F=L?.lodLevels??d(q.ref.value),G=L?.sizeFactor??W.ref.value,z=C(F,G),X=le(O.sphereCount,4,Float32Array,D.ref.value.array),R=u(X,O.centerBuffer.ref.value,O.groupBuffer.ref.value,O.sphereCount,z),w=R?p(F,G,R,O.sphereCount):[];n.update(D,X),n.update(M,re.set(M.ref.value,X.width,X.height)),n.update(q,w),n.update(W,G)}}};return O.shaderData.update(),O}function o(v,_,E,I){return I.sphereCount=E,n.update(I.centerBuffer,v),n.update(I.groupBuffer,_),I.shaderData.update(),I}function u(v,_,E,I,P){let{array:V}=v;if(P.length===0){for(let M=0;M<I;++M)V[M*4+0]=_[M*3+0],V[M*4+1]=_[M*3+1],V[M*4+2]=_[M*3+2],V[M*4+3]=E[M];return}let B=[0],D=0;for(let M=0,q=P.length;M<q;++M){let W=P[M];for(let O=0;O<I;++O){let L=!1;for(let F=0;F<M;++F)if(O%P[F]===0){L=!0;break}!L&&O%W===0&&(V[D*4+0]=_[O*3+0],V[D*4+1]=_[O*3+1],V[D*4+2]=_[O*3+2],V[D*4+3]=E[O],D+=1)}B.push(D*6)}return B}function i(v,_){if(v.length!==_.length)return!1;for(let E=0,I=v.length;E<I;++E)if(v[E].maxDistance!==_[E].maxDistance||v[E].minDistance!==_[E].minDistance||v[E].overlap!==_[E].overlap||v[E].stride!==_[E].stride||v[E].scaleBias!==_[E].scaleBias)return!1;return!0}function p(v,_,E,I){return v.map((P,V)=>{let B=y(P,_);return[P.minDistance,P.maxDistance,P.overlap,E[E.length-1-V],Math.pow(Math.min(I,B),1/P.scaleBias),P.stride,P.scaleBias]})}function d(v){return v.map(_=>({minDistance:_[0],maxDistance:_[1],overlap:_[2],stride:_[5],scaleBias:_[6]}))}function y(v,_){return Math.max(1,Math.round(v.stride/Math.pow(_,v.scaleBias)))}function C(v,_){return v.map(E=>y(E,_)).reverse()}A.LodLevelsPresets={performance:[{minDistance:1,maxDistance:300,overlap:0,stride:1,scaleBias:1},{minDistance:300,maxDistance:2e3,overlap:0,stride:40,scaleBias:3},{minDistance:2e3,maxDistance:6e3,overlap:0,stride:150,scaleBias:3},{minDistance:6e3,maxDistance:1e7,overlap:0,stride:300,scaleBias:2.5}],balanced:[{minDistance:1,maxDistance:500,overlap:0,stride:1,scaleBias:1},{minDistance:500,maxDistance:2e3,overlap:0,stride:15,scaleBias:3},{minDistance:2e3,maxDistance:6e3,overlap:0,stride:70,scaleBias:2.7},{minDistance:6e3,maxDistance:1e7,overlap:0,stride:200,scaleBias:2.5}],quality:[{minDistance:1,maxDistance:1e3,overlap:0,stride:1,scaleBias:1},{minDistance:1e3,maxDistance:4e3,overlap:0,stride:10,scaleBias:3},{minDistance:4e3,maxDistance:1e4,overlap:0,stride:50,scaleBias:2.7},{minDistance:1e4,maxDistance:1e7,overlap:0,stride:200,scaleBias:2.3}],ultra:[{minDistance:1,maxDistance:5e3,overlap:0,stride:1,scaleBias:1},{minDistance:5e3,maxDistance:1e4,overlap:0,stride:10,scaleBias:3},{minDistance:1e4,maxDistance:3e4,overlap:0,stride:50,scaleBias:2.5},{minDistance:3e4,maxDistance:1e7,overlap:0,stride:200,scaleBias:2}]},A.Params={...Q.Params,sizeFactor:k.Numeric(1,{min:0,max:10,step:.1}),doubleSided:k.Boolean(!1,Q.CustomQualityParamInfo),ignoreLight:k.Boolean(!1,Q.ShadingCategory),celShaded:k.Boolean(!1,Q.ShadingCategory),xrayShaded:k.Select(!1,[[!1,"Off"],[!0,"On"],["inverted","Inverted"]],Q.ShadingCategory),transparentBackfaces:k.Select("off",k.arrayToOptions(["off","on","opaque"]),Q.ShadingCategory),solidInterior:k.Boolean(!0,Q.ShadingCategory),clipPrimitive:k.Boolean(!1,{...Q.ShadingCategory,description:"Clip whole sphere instead of cutting it."}),approximate:k.Boolean(!1,{...Q.ShadingCategory,description:"Faster rendering, but has artifacts."}),alphaThickness:k.Numeric(0,{min:0,max:20,step:1},{...Q.ShadingCategory,description:"If not zero, adjusts alpha for radius."}),bumpFrequency:k.Numeric(0,{min:0,max:10,step:.1},Q.ShadingCategory),bumpAmplitude:k.Numeric(1,{min:0,max:5,step:.1},Q.ShadingCategory),interior:st(),animation:Cr(),lodLevels:k.ObjectList({minDistance:k.Numeric(0),maxDistance:k.Numeric(0),overlap:k.Numeric(0),stride:k.Numeric(0),scaleBias:k.Numeric(3,{min:.1,max:10,step:.1})},v=>`${v.stride}`,{...Q.CullingLodCategory,defaultValue:[],presets:Object.entries(A.LodLevelsPresets).map(([v,_])=>[_,v])})},A.Utils={Params:A.Params,createEmpty:r,createValues:l,createValuesSimple:s,updateValues:g,updateBoundingSphere:c,createRenderableState:h,updateRenderableState:x,createPositionIterator:S};function S(v,_){let E=v.sphereCount,I=_.instanceCount.ref.value,P=Qe(),V=P.position,B=v.centerBuffer.ref.value,D=_.aTransform.ref.value;return Se(E,I,1,(q,W)=>(W<0?m.fromArray(V,B,q*3):m.transformMat4Offset(V,B,D,0,q*3,W*16),P))}function l(v,_,E,I,P){let{instanceCount:V,groupCount:B}=E,D=S(v,_),M=ke(E,D,I.color),q=jr(E,D,I.size),W=Ge(P.instanceGranularity,B,V)?xe(V,"instance"):xe(V*B,"groupInstance"),O=Ue(),L=ze(),F=qe(),G=We(),z=je(),X=He(),R={drawCount:v.sphereCount*2*3,vertexCount:v.sphereCount*6,groupCount:B,instanceCount:V},w=v.boundingSphere.radius?dt(q)*P.sizeFactor:0,U=$.expand($(),v.boundingSphere,w),H=he(U,_.aTransform.ref.value,V,0);return v.shaderData.update({lodLevels:P.lodLevels,sizeFactor:P.sizeFactor}),{dGeometryType:n.create("spheres"),uTexDim:v.shaderData.texDim,tPositionGroup:v.shaderData.positionGroup,boundingSphere:n.create(H),invariantBoundingSphere:n.create(U),uInvariantBoundingSphere:n.create(oe.ofSphere(U)),...M,...q,...W,...O,...L,...F,...G,...z,...X,..._,padding:n.create(w),...Q.createValues(P,R),uSizeFactor:v.shaderData.sizeFactor,uDoubleSided:n.create(P.doubleSided),dIgnoreLight:n.create(P.ignoreLight),dCelShaded:n.create(P.celShaded),dXrayShaded:n.create(P.xrayShaded==="inverted"?"inverted":P.xrayShaded===!0?"on":"off"),dTransparentBackfaces:n.create(P.transparentBackfaces),dSolidInterior:n.create(P.solidInterior),dClipPrimitive:n.create(P.clipPrimitive),dApproximate:n.create(P.approximate),uAlphaThickness:n.create(P.alphaThickness),uBumpFrequency:n.create(P.bumpFrequency),uBumpAmplitude:n.create(P.bumpAmplitude),lodLevels:v.shaderData.lodLevels,centerBuffer:v.centerBuffer,groupBuffer:v.groupBuffer,...ut(P.interior),...Sr(P.animation)}}function s(v,_,E,I,P){let V=Q.createSimple(E,I,P),B={...k.getDefaultValues(A.Params),..._};return l(v,V.transform,V.locationIterator,V.theme,B)}function g(v,_){let E=v.uSizeFactor.ref.value;Q.updateValues(v,_),n.updateIfChanged(v.uSizeFactor,_.sizeFactor),n.updateIfChanged(v.uDoubleSided,_.doubleSided),n.updateIfChanged(v.dIgnoreLight,_.ignoreLight),n.updateIfChanged(v.dCelShaded,_.celShaded),n.updateIfChanged(v.dXrayShaded,_.xrayShaded==="inverted"?"inverted":_.xrayShaded===!0?"on":"off"),n.updateIfChanged(v.dTransparentBackfaces,_.transparentBackfaces),n.updateIfChanged(v.dSolidInterior,_.solidInterior),n.updateIfChanged(v.dClipPrimitive,_.clipPrimitive),n.updateIfChanged(v.dApproximate,_.approximate),n.updateIfChanged(v.uAlphaThickness,_.alphaThickness),n.updateIfChanged(v.uBumpFrequency,_.bumpFrequency),n.updateIfChanged(v.uBumpAmplitude,_.bumpAmplitude),lt(v,_.interior),_r(v,_.animation);let I=d(v.lodLevels.ref.value);if(!i(_.lodLevels,I)||_.sizeFactor!==E){let P=v.uVertexCount.ref.value/6,V=C(_.lodLevels,_.sizeFactor),B=u(v.tPositionGroup.ref.value,v.centerBuffer.ref.value,v.groupBuffer.ref.value,P,V),D=B?p(_.lodLevels,_.sizeFactor,B,P):[];n.update(v.tPositionGroup,v.tPositionGroup.ref.value),n.update(v.lodLevels,D)}}function c(v,_){let E=_.boundingSphere.radius?dt(v)*v.uSizeFactor.ref.value:0,I=$.expand($(),_.boundingSphere,E),P=he(I,v.aTransform.ref.value,v.instanceCount.ref.value,0);$.equals(P,v.boundingSphere.ref.value)||n.update(v.boundingSphere,P),$.equals(I,v.invariantBoundingSphere.ref.value)||(n.update(v.invariantBoundingSphere,I),n.update(v.uInvariantBoundingSphere,oe.fromSphere(v.uInvariantBoundingSphere.ref.value,I))),n.update(v.padding,E)}function h(v){let _=Q.createRenderableState(v);return x(_,v),_}function x(v,_){Q.updateRenderableState(v,_),v.opaque=v.opaque&&!_.xrayShaded,v.writeDepth=v.opaque}})(Sa||={});var _a;(T=>{class e{constructor(){this.index=0;this.textures=[]}get(){return this.textures[this.index]}set(l,s,g){this.textures[this.index]=Object.assign(this.textures[this.index]||{},{vertex:l,group:s,normal:g}),this.index=(this.index+1)%2}destroy(){for(let l of this.textures)l.vertex.destroy(),l.group.destroy(),l.normal.destroy()}}T.DoubleBuffer=e;function r(S,l,s,g,c,h,x){let A=s.getWidth(),v=s.getHeight();return x?(x.vertexCount=S,x.groupCount=l,n.update(x.geoTextureDim,re.set(x.geoTextureDim.ref.value,A,v)),n.update(x.vertexTexture,s),n.update(x.groupTexture,g),n.update(x.normalTexture,c),x.doubleBuffer.set(s,g,c),$.copy(x.boundingSphere,h),x):{kind:"texture-mesh",vertexCount:S,groupCount:l,geoTextureDim:n.create(re.create(A,v)),vertexTexture:n.create(s),groupTexture:n.create(g),normalTexture:n.create(c),varyingGroup:n.create(!1),doubleBuffer:new e,boundingSphere:$.clone(h),meta:{}}}T.create=r;function t(S){let l=S?S.vertexTexture.ref.value:Te(),s=S?S.groupTexture.ref.value:Te(),g=S?S.normalTexture.ref.value:Te(),c=S?S.boundingSphere:$();return r(0,0,l,s,g,c,S)}T.createEmpty=t,T.Params={...Q.Params,doubleSided:k.Boolean(!1,Q.CustomQualityParamInfo),flipSided:k.Boolean(!1,Q.ShadingCategory),flatShaded:k.Boolean(!1,Q.ShadingCategory),ignoreLight:k.Boolean(!1,Q.ShadingCategory),celShaded:k.Boolean(!1,Q.ShadingCategory),xrayShaded:k.Select(!1,[[!1,"Off"],[!0,"On"],["inverted","Inverted"]],Q.ShadingCategory),transparentBackfaces:k.Select("off",k.arrayToOptions(["off","on","opaque"]),Q.ShadingCategory),solidInterior:k.Boolean(!1,{...Q.ShadingCategory,description:"Render a solid cap where the camera near plane or a clip object cuts a closed surface"}),bumpFrequency:k.Numeric(0,{min:0,max:10,step:.1},Q.ShadingCategory),bumpAmplitude:k.Numeric(1,{min:0,max:5,step:.1},Q.ShadingCategory),interior:st(),animation:Cr()},T.Utils={Params:T.Params,createEmpty:t,createValues:p,createValuesSimple:d,updateValues:y,updateBoundingSphere:C,createRenderableState:f,updateRenderableState:b,createPositionIterator:i};let u="texture-mesh";function i(S,l){let s=S.meta.webgl;if(!s)return Se(1,1,1,()=>Ke);s.namedFramebuffers[u]||(s.namedFramebuffers[u]=s.resources.framebuffer());let g=s.namedFramebuffers[u],[c,h]=S.geoTextureDim.ref.value,x,A=()=>{if(!x){let D=new Float32Array(c*h*4);g.bind(),S.vertexTexture.ref.value.attachFramebuffer(g,0),s.readPixels(0,0,c,h,D);let M=new Float32Array(c*h*4);g.bind(),S.normalTexture.ref.value.attachFramebuffer(g,0),s.readPixels(0,0,c,h,M),x={vertices:D,normals:M}}return x},v=S.vertexCount,_=l.instanceCount.ref.value,E=Qe(),I=E.position,P=E.normal,V=l.aTransform.ref.value;return Se(v,_,1,(D,M)=>{let{vertices:q,normals:W}=A();return M<0?(m.fromArray(I,q,D*4),m.fromArray(P,W,D*4)):(m.transformMat4Offset(I,q,V,0,D*4,M*16),m.transformDirectionOffset(P,W,V,0,D*4,M*16)),E})}function p(S,l,s,g,c){let{instanceCount:h,groupCount:x}=s,A=T.Utils.createPositionIterator(S,l),v=ke(s,A,g.color),_=Ge(c.instanceGranularity,x,h)?xe(h,"instance"):xe(h*x,"groupInstance"),E=Ue(),I=ze(),P=qe(),V=We(),B=je(),D=He(),M={drawCount:S.vertexCount,vertexCount:S.vertexCount,groupCount:x,instanceCount:h},q=$.clone(S.boundingSphere),W=he(q,l.aTransform.ref.value,h,0);return{dGeometryType:n.create("textureMesh"),uGeoTexDim:S.geoTextureDim,tPosition:S.vertexTexture,tGroup:S.groupTexture,tNormal:S.normalTexture,dVaryingGroup:S.varyingGroup,boundingSphere:n.create(W),invariantBoundingSphere:n.create(q),uInvariantBoundingSphere:n.create(oe.ofSphere(q)),...v,..._,...E,...I,...P,...V,...B,...D,...l,...Q.createValues(c,M),uDoubleSided:n.create(c.doubleSided),dFlatShaded:n.create(c.flatShaded),dFlipSided:n.create(c.flipSided),dIgnoreLight:n.create(c.ignoreLight),dCelShaded:n.create(c.celShaded),dXrayShaded:n.create(c.xrayShaded==="inverted"?"inverted":c.xrayShaded===!0?"on":"off"),dTransparentBackfaces:n.create(c.transparentBackfaces),dSolidInterior:n.create(c.solidInterior),uBumpFrequency:n.create(c.bumpFrequency),uBumpAmplitude:n.create(c.bumpAmplitude),meta:n.create(S.meta),...ut(c.interior),...Sr(c.animation)}}function d(S,l,s,g,c){let h=Q.createSimple(s,g,c),x={...k.getDefaultValues(T.Params),...l};return p(S,h.transform,h.locationIterator,h.theme,x)}function y(S,l){Q.updateValues(S,l),n.updateIfChanged(S.uDoubleSided,l.doubleSided),n.updateIfChanged(S.dFlatShaded,l.flatShaded),n.updateIfChanged(S.dFlipSided,l.flipSided),n.updateIfChanged(S.dIgnoreLight,l.ignoreLight),n.updateIfChanged(S.dCelShaded,l.celShaded),n.updateIfChanged(S.dXrayShaded,l.xrayShaded==="inverted"?"inverted":l.xrayShaded===!0?"on":"off"),n.updateIfChanged(S.dTransparentBackfaces,l.transparentBackfaces),n.updateIfChanged(S.dSolidInterior,l.solidInterior),n.updateIfChanged(S.uBumpFrequency,l.bumpFrequency),n.updateIfChanged(S.uBumpAmplitude,l.bumpAmplitude),lt(S,l.interior),_r(S,l.animation)}function C(S,l){let s=$.clone(l.boundingSphere),g=he(s,S.aTransform.ref.value,S.instanceCount.ref.value,0);$.equals(g,S.boundingSphere.ref.value)||n.update(S.boundingSphere,g),$.equals(s,S.invariantBoundingSphere.ref.value)||(n.update(S.invariantBoundingSphere,s),n.update(S.uInvariantBoundingSphere,oe.fromSphere(S.uInvariantBoundingSphere.ref.value,s)))}function f(S){let l=Q.createRenderableState(S);return b(l,S),l}function b(S,l){Q.updateRenderableState(S,l),S.opaque=S.opaque&&!l.xrayShaded,S.writeDepth=S.opaque}})(_a||={});var Ru=new Uint32Array([0,1,2,1,3,2]),jd=new Float32Array([0,1,0,0,1,1,1,0]),Vu={nearest:"Nearest",catmulrom:"Catmulrom (Cubic)",mitchell:"Mitchell (Cubic)",bspline:"B-Spline (Cubic)"},p_=Object.keys(Vu);var Aa;(l=>{function e(){return{type:0,center:m(),rotation:gr(),scale:m(),transform:se()}}l.createEmptyTrim=e;function r(s,g,c,h,x,A,v){return v?o(s,g,c,h,x,A,v):a(s,g,c,h,x,A)}l.create=r;function t(s){return Ve([s.cornerBuffer.ref.version])}function a(s,g,c,h,x,A){let v=$(),_=-1,E=s.width,I=s.height,P={kind:"image",imageTexture:n.create(s),imageTextureDim:n.create(re.create(E,I)),cornerBuffer:n.create(g),groupTexture:n.create(c),valueTexture:n.create(h),trimType:n.create(x.type),trimCenter:n.create(x.center),trimRotation:n.create(x.rotation),trimScale:n.create(x.scale),trimTransform:n.create(x.transform),isoLevel:n.create(A),get boundingSphere(){let V=t(P);if(V!==_){let B=Wd(P.cornerBuffer.ref.value);$.copy(v,B),_=V}return v},setBoundingSphere(V){$.copy(v,V),_=t(P)},hasBoundingSphere(){return _===t(P)},meta:{}};return P}function o(s,g,c,h,x,A,v){let _=s.width,E=s.height;return n.update(v.imageTexture,s),n.update(v.imageTextureDim,re.set(v.imageTextureDim.ref.value,_,E)),n.update(v.cornerBuffer,g),n.update(v.groupTexture,c),n.update(v.valueTexture,h),n.updateIfChanged(v.trimType,x.type),n.update(v.trimCenter,m.copy(v.trimCenter.ref.value,x.center)),n.update(v.trimRotation,gr.copy(v.trimRotation.ref.value,x.rotation)),n.update(v.trimScale,m.copy(v.trimScale.ref.value,x.scale)),n.update(v.trimTransform,se.copy(v.trimTransform.ref.value,x.transform)),n.updateIfChanged(v.isoLevel,A),v}function u(s){let g=le(0,4,Uint8Array),c=s?s.cornerBuffer.ref.value:new Float32Array(24),h=le(0,4,Uint8Array),x=le(0,1,Float32Array),A=e();return r(g,c,h,x,A,-1,s)}l.createEmpty=u,l.Params={...Q.Params,interpolation:k.Select("bspline",k.objectToOptions(Vu))},l.Utils={Params:l.Params,createEmpty:u,createValues:y,createValuesSimple:C,updateValues:f,updateBoundingSphere:b,createRenderableState:T,updateRenderableState:S,createPositionIterator:d};function d(s,g){return Se(1,1,1,()=>Ke)}function y(s,g,c,h,x){let{instanceCount:A,groupCount:v}=c,_=d(s,g),E=ke(c,_,h.color),I=Ge(x.instanceGranularity,v,A)?xe(A,"instance"):xe(A*v,"groupInstance"),P=Ue(),V=ze(),B=qe(),D=We(),M=je(),q=He(),W={drawCount:Ru.length,vertexCount:oa.length/3,groupCount:v,instanceCount:A},O=$.clone(s.boundingSphere),L=he(O,g.aTransform.ref.value,A,0);return{dGeometryType:n.create("image"),...E,...I,...P,...V,...B,...D,...M,...q,...g,...Q.createValues(x,W),aPosition:s.cornerBuffer,aUv:n.create(jd),elements:n.create(Ru),aGroup:n.create(Or(new Float32Array(4))),boundingSphere:n.create(L),invariantBoundingSphere:n.create(O),uInvariantBoundingSphere:n.create(oe.ofSphere(O)),dInterpolation:n.create(x.interpolation),uImageTexDim:s.imageTextureDim,tImageTex:s.imageTexture,tGroupTex:s.groupTexture,tValueTex:s.valueTexture,uTrimType:s.trimType,uTrimCenter:s.trimCenter,uTrimRotation:s.trimRotation,uTrimScale:s.trimScale,uTrimTransform:s.trimTransform,uIsoLevel:s.isoLevel}}function C(s,g,c,h,x){let A=Q.createSimple(c,h,x),v={...k.getDefaultValues(l.Params),...g};return y(s,A.transform,A.locationIterator,A.theme,v)}function f(s,g){Q.updateValues(s,g),n.updateIfChanged(s.dInterpolation,g.interpolation)}function b(s,g){let c=$.clone(g.boundingSphere),h=he(c,s.aTransform.ref.value,s.instanceCount.ref.value,0);$.equals(h,s.boundingSphere.ref.value)||n.update(s.boundingSphere,h),$.equals(c,s.invariantBoundingSphere.ref.value)||(n.update(s.invariantBoundingSphere,c),n.update(s.uInvariantBoundingSphere,oe.fromSphere(s.uInvariantBoundingSphere.ref.value,c)))}function T(s){let g=Q.createRenderableState(s);return g.opaque=!1,g}function S(s,g){Q.updateRenderableState(s,g),s.opaque=!1}})(Aa||={});function Wd(e){let r=m(),t=[];for(let u=0,i=e.length;u<i;u+=3){let p=m.fromArray(m(),e,u);t.push(p),m.add(r,r,p)}m.scale(r,r,1/(e.length/3));let a=0;for(let u of t){let i=m.distance(r,u);i>a&&(a=i)}let o=$.create(r,a);return $.setExtrema(o,t),o}var Ia;(l=>{function e(s,g,c,h,x,A,v,_,E,I){return I?o(s,g,c,h,x,A,v,_,E,I):a(s,g,c,h,x,A,v,_,E)}l.create=e;function r(s){let g=s?s.mappingBuffer.ref.value:new Float32Array(0),c=s?s.indexBuffer.ref.value:new Uint32Array(0),h=s?s.groupBuffer.ref.value:new Float32Array(0),x=s?s.startBuffer.ref.value:new Float32Array(0),A=s?s.endBuffer.ref.value:new Float32Array(0),v=s?s.scaleBuffer.ref.value:new Float32Array(0),_=s?s.capBuffer.ref.value:new Float32Array(0),E=s?s.colorModeBuffer.ref.value:new Float32Array(0);return e(g,c,h,x,A,v,_,E,0,s)}l.createEmpty=r;function t(s){return Ve([s.cylinderCount,s.mappingBuffer.ref.version,s.indexBuffer.ref.version,s.groupBuffer.ref.version,s.startBuffer.ref.version,s.endBuffer.ref.version,s.scaleBuffer.ref.version,s.capBuffer.ref.version,s.colorModeBuffer.ref.version])}function a(s,g,c,h,x,A,v,_,E){let I=$(),P,V=-1,B=-1,D={kind:"cylinders",cylinderCount:E,mappingBuffer:n.create(s),indexBuffer:n.create(g),groupBuffer:n.create(c),startBuffer:n.create(h),endBuffer:n.create(x),scaleBuffer:n.create(A),capBuffer:n.create(v),colorModeBuffer:n.create(_),get boundingSphere(){let M=t(D);if(M!==V){let q=ir(D.startBuffer.ref.value,D.cylinderCount*6,6),W=ir(D.endBuffer.ref.value,D.cylinderCount*6,6);$.expandBySphere(I,q,W),V=M}return I},get groupMapping(){return D.groupBuffer.ref.version!==B&&(P=Tr(D.groupBuffer.ref.value,D.cylinderCount,6),B=D.groupBuffer.ref.version),P},setBoundingSphere(M){$.copy(I,M),V=t(D)},hasBoundingSphere(){return V===t(D)}};return D}function o(s,g,c,h,x,A,v,_,E,I){return E>I.cylinderCount&&(n.update(I.mappingBuffer,s),n.update(I.indexBuffer,g)),I.cylinderCount=E,n.update(I.groupBuffer,c),n.update(I.startBuffer,h),n.update(I.endBuffer,x),n.update(I.scaleBuffer,A),n.update(I.capBuffer,v),n.update(I.colorModeBuffer,_),I}function u(s,g){let c=s.startBuffer.ref.value;zr(g,c,0,s.cylinderCount*6),n.update(s.startBuffer,c);let h=s.endBuffer.ref.value;zr(g,h,0,s.cylinderCount*6),n.update(s.endBuffer,h)}l.transform=u,l.Params={...Q.Params,sizeFactor:k.Numeric(1,{min:0,max:10,step:.1}),sizeAspectRatio:k.Numeric(1,{min:0,max:3,step:.01}),doubleSided:k.Boolean(!1,Q.CustomQualityParamInfo),ignoreLight:k.Boolean(!1,Q.ShadingCategory),celShaded:k.Boolean(!1,Q.ShadingCategory),xrayShaded:k.Select(!1,[[!1,"Off"],[!0,"On"],["inverted","Inverted"]],Q.ShadingCategory),transparentBackfaces:k.Select("off",k.arrayToOptions(["off","on","opaque"]),Q.ShadingCategory),solidInterior:k.Boolean(!0,Q.ShadingCategory),bumpFrequency:k.Numeric(0,{min:0,max:10,step:.1},Q.ShadingCategory),bumpAmplitude:k.Numeric(1,{min:0,max:5,step:.1},Q.ShadingCategory),interior:st(),animation:Cr(),colorMode:k.Select("default",k.arrayToOptions(["default","interpolate"]),Q.ShadingCategory)},l.Utils={Params:l.Params,createEmpty:r,createValues:y,createValuesSimple:C,updateValues:f,updateBoundingSphere:b,createRenderableState:T,updateRenderableState:S,createPositionIterator:d};function d(s,g){let c=s.cylinderCount*6,h=g.instanceCount.ref.value,x=Qe(),A=x.position,v=s.startBuffer.ref.value,_=s.endBuffer.ref.value,E=g.aTransform.ref.value;return Se(c,h,2,(P,V)=>{let B=P%6===0?v:_;return V<0?m.fromArray(A,B,P*3):m.transformMat4Offset(A,B,E,0,P*3,V*16),x})}function y(s,g,c,h,x){let{instanceCount:A,groupCount:v}=c,_=d(s,g),E=ke(c,_,h.color),I=jr(c,_,h.size),P=Ge(x.instanceGranularity,v,A)?xe(A,"instance"):xe(A*v,"groupInstance"),V=Ue(),B=ze(),D=qe(),M=We(),q=je(),W=He(),O={drawCount:s.cylinderCount*4*3,vertexCount:s.cylinderCount*6,groupCount:v,instanceCount:A},L=dt(I)*x.sizeFactor,F=$.clone(s.boundingSphere),G=he(F,g.aTransform.ref.value,A,0);return{dGeometryType:n.create("cylinders"),aMapping:s.mappingBuffer,aGroup:s.groupBuffer,aStart:s.startBuffer,aEnd:s.endBuffer,aScale:s.scaleBuffer,aCap:s.capBuffer,aColorMode:s.colorModeBuffer,elements:s.indexBuffer,boundingSphere:n.create(G),invariantBoundingSphere:n.create(F),uInvariantBoundingSphere:n.create(oe.ofSphere(F)),...E,...I,...P,...V,...B,...D,...M,...q,...W,...g,padding:n.create(L),...Q.createValues(x,O),uSizeFactor:n.create(x.sizeFactor*x.sizeAspectRatio),uDoubleSided:n.create(x.doubleSided),dIgnoreLight:n.create(x.ignoreLight),dCelShaded:n.create(x.celShaded),dXrayShaded:n.create(x.xrayShaded==="inverted"?"inverted":x.xrayShaded===!0?"on":"off"),dTransparentBackfaces:n.create(x.transparentBackfaces),dSolidInterior:n.create(x.solidInterior),uBumpFrequency:n.create(x.bumpFrequency),uBumpAmplitude:n.create(x.bumpAmplitude),dDualColor:n.create(x.colorMode==="interpolate"),...ut(x.interior),...Sr(x.animation)}}function C(s,g,c,h,x){let A=Q.createSimple(c,h,x),v={...k.getDefaultValues(l.Params),...g};return y(s,A.transform,A.locationIterator,A.theme,v)}function f(s,g){Q.updateValues(s,g),n.updateIfChanged(s.uSizeFactor,g.sizeFactor*g.sizeAspectRatio),n.updateIfChanged(s.uDoubleSided,g.doubleSided),n.updateIfChanged(s.dIgnoreLight,g.ignoreLight),n.updateIfChanged(s.dCelShaded,g.celShaded),n.updateIfChanged(s.dXrayShaded,g.xrayShaded==="inverted"?"inverted":g.xrayShaded===!0?"on":"off"),n.updateIfChanged(s.dTransparentBackfaces,g.transparentBackfaces),n.updateIfChanged(s.dSolidInterior,g.solidInterior),n.updateIfChanged(s.uBumpFrequency,g.bumpFrequency),n.updateIfChanged(s.uBumpAmplitude,g.bumpAmplitude),n.updateIfChanged(s.dDualColor,g.colorMode==="interpolate"),lt(s,g.interior),_r(s,g.animation)}function b(s,g){let c=$.clone(g.boundingSphere),h=he(c,s.aTransform.ref.value,s.instanceCount.ref.value,0);$.equals(h,s.boundingSphere.ref.value)||n.update(s.boundingSphere,h),$.equals(c,s.invariantBoundingSphere.ref.value)||(n.update(s.invariantBoundingSphere,c),n.update(s.uInvariantBoundingSphere,oe.fromSphere(s.uInvariantBoundingSphere.ref.value,c)))}function T(s){let g=Q.createRenderableState(s);return S(g,s),g}function S(s,g){Q.updateRenderableState(s,g),s.opaque=s.opaque&&!g.xrayShaded,s.writeDepth=s.opaque}})(Ia||={});var Da;(u=>{function e(i){switch(i.kind){case"mesh":return i.triangleCount*3;case"points":return i.pointCount;case"spheres":return i.sphereCount*2*3;case"cylinders":return i.cylinderCount*4*3;case"text":return i.charCount*2*3;case"lines":return i.lineCount*2*3;case"direct-volume":return 36;case"image":return 6;case"texture-mesh":return i.vertexCount}}u.getDrawCount=e;function r(i){switch(i.kind){case"mesh":return i.vertexCount;case"points":return i.pointCount;case"spheres":return i.sphereCount*6;case"cylinders":return i.cylinderCount*6;case"text":return i.charCount*4;case"lines":return i.vertexCount;case"direct-volume":let[p,d,y]=i.gridDimension.ref.value;return p*d*y;case"image":return 4;case"texture-mesh":return i.vertexCount}}u.getVertexCount=r;function t(i){switch(i.kind){case"mesh":case"points":case"spheres":case"cylinders":case"text":case"lines":return e(i)===0?0:qt(i.groupBuffer.ref.value)+1;case"direct-volume":return 1;case"image":return qa(i.groupTexture.ref.value.array,4)+1;case"texture-mesh":return i.groupCount}}u.getGroupCount=t;function a(i){switch(i.kind){case"mesh":return wt.Utils;case"points":return sa.Utils;case"spheres":return Sa.Utils;case"cylinders":return Ia.Utils;case"text":return ma.Utils;case"lines":return vt.Utils;case"direct-volume":return Ca.Utils;case"image":return Aa.Utils;case"texture-mesh":return _a.Utils}}u.getUtils=a;function o(i,p){return p==="instance"&&i.nonInstanceable?"group":p}u.getGranularity=o})(Da||={});function jr(e,r,t,a){switch(Da.getGranularity(e,t.granularity)){case"uniform":return Kd(e,t.size,a);case"instance":return Qd(e,t.size,a);case"group":return Yd(e,t.size,a);case"groupInstance":return $d(e,t.size,a);case"vertex":return Zd(r,t.size,a);case"vertexInstance":return Jd(r,t.size,a)}}var _t=100;function dt(e){switch(e.dSizeType.ref.value){case"uniform":return e.uSize.ref.value;case"instance":case"group":case"groupInstance":case"vertex":case"vertexInstance":let t=0,a=e.tSize.ref.value.array;for(let o=0,u=a.length;o<u;o+=3){let i=Nn(a[o],a[o+1],a[o+2]);t<i&&(t=i)}return t/_t}}var qd={array:new Uint8Array(3),width:1,height:1};function Hd(){return{tSize:n.create(qd),uSizeTexDim:n.create(re.create(1,1))}}function Xd(e,r){return r?(n.update(r.uSize,e),n.updateIfChanged(r.dSizeType,"uniform"),r):{uSize:n.create(e),...Hd(),dSizeType:n.create("uniform")}}function Kd(e,r,t){e.reset();let a=e.hasNext?e.move().location:Ke;return Xd(r(a),t)}function Ut(e,r,t){return t?(n.update(t.tSize,e),n.update(t.uSizeTexDim,re.create(e.width,e.height)),n.updateIfChanged(t.dSizeType,r),t):{uSize:n.create(0),tSize:n.create(e),uSizeTexDim:n.create(re.create(e.width,e.height)),dSizeType:n.create(r)}}function Qd(e,r,t){let{instanceCount:a}=e,o=le(Math.max(1,a),3,Uint8Array,t&&t.tSize.ref.value.array);for(e.reset();e.hasNext&&!e.isNextNewInstance;){let u=e.move();ot(r(u.location)*_t,o.array,u.instanceIndex*3),e.skipInstance()}return Ut(o,"instance",t)}function Yd(e,r,t){let{groupCount:a}=e,o=le(Math.max(1,a),3,Uint8Array,t&&t.tSize.ref.value.array);for(e.reset();e.hasNext&&!e.isNextNewInstance;){let u=e.move();ot(r(u.location)*_t,o.array,u.groupIndex*3)}return Ut(o,"group",t)}function $d(e,r,t){let{groupCount:a,instanceCount:o}=e,u=o*a,i=le(Math.max(1,u),3,Uint8Array,t&&t.tSize.ref.value.array);for(e.reset();e.hasNext;){let p=e.move();ot(r(p.location)*_t,i.array,p.index*3)}return Ut(i,"groupInstance",t)}function Zd(e,r,t){let{groupCount:a}=e,o=le(Math.max(1,a),3,Uint8Array,t&&t.tSize.ref.value.array);for(e.reset();e.hasNext;){let u=e.move();ot(r(u.location)*_t,o.array,u.index*3)}return Ut(o,"vertex",t)}function Jd(e,r,t){let{groupCount:a,instanceCount:o}=e,u=o*a,i=le(Math.max(1,u),3,Uint8Array,t&&t.tSize.ref.value.array);for(e.reset();e.hasNext;){let p=e.move();ot(r(p.location)*_t,i.array,p.index*3)}return Ut(i,"vertexInstance",t)}var Ar=(1+Math.sqrt(5))/2,An=[-1,Ar,0,1,Ar,0,-1,-Ar,0,1,-Ar,0,0,-1,Ar,0,1,Ar,0,-1,-Ar,0,1,-Ar,Ar,0,-1,Ar,0,1,-Ar,0,-1,-Ar,0,1],ef=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],rf=[1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],tf=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9],nf=[0,11,5,11,0,5,1,5,0,1,1,7,0,7,7,10,0,10,10,11,5,9,4,11,2,10,6,7,1,8,3,9,4,9,3,4,2,4,2,3,2,6,3,6,6,8,3,8,8,9,4,5,2,11,6,10,7,8,1,9],af,of,sf;function Bu(e){return e?.subset===void 0?af??=Sn(An,ef):e?.subset==="ring"?of??=Sn(An,rf):sf??=Sn(An,tf)}var uf=_n(An,nf);function aA(){return uf}var lf={radius:1,detail:0};function Lu(e,r,t){let{radius:a,detail:o}={...lf,...t},u=cf(),{vertices:i,indices:p}=u;y(o),Us(i,a);let d=new Float32Array(i.length);return dn(i,p,d,i.length/3,p.length/3),{vertices:new Float32Array(i),normals:new Float32Array(d),indices:new Uint32Array(p)};function y(f){let b=m(),T=m(),S=m();for(let l=0;l<r.length;l+=3)m.fromArray(b,e,r[l+0]*3),m.fromArray(T,e,r[l+1]*3),m.fromArray(S,e,r[l+2]*3),C(b,T,S,f)}function C(f,b,T,S){let l=Math.pow(2,S),s=[];for(let g=0;g<=l;++g){s[g]=[];let c=m();m.lerp(c,f,T,g/l);let h=m();m.lerp(h,b,T,g/l);let x=l-g;for(let A=0;A<=x;++A)if(A===0&&g===l)s[g][A]=c;else{let v=m();m.lerp(v,c,h,A/x),s[g][A]=v}}for(let g=0;g<l;++g)for(let c=0;c<2*(l-g)-1;++c){let h=Math.floor(c/2);c%2===0?u.add(s[g][h+1],s[g+1][h],s[g][h]):u.add(s[g][h+1],s[g+1][h+1],s[g+1][h])}}}function cf(){let e=[],r=[],t=new Map;function a(o){let u=`${o[0].toFixed(5)}|${o[1].toFixed(5)}|${o[2].toFixed(5)}`,i=t.get(u);return i===void 0&&(i=e.length/3,t.set(u,i),e.push(...o)),i}return{vertices:e,indices:r,add:(o,u,i)=>{r.push(a(o),a(u),a(i))}}}function dA(e){return 10*Math.pow(Math.pow(2,e),2)+2}function Ea(e,r){let{vertices:t,indices:a}=Bu({subset:r?.subset}),o=Lu(t,a,{detail:e,radius:1});return r?.subset!==void 0&&(o.normals=o.vertices),o}var Br={radiusTop:1,radiusBottom:1,height:1,radialSegments:8,heightSegments:1,topCap:!1,bottomCap:!1,thetaStart:0,thetaLength:Math.PI*2};function Fu(e){let{radiusTop:r,radiusBottom:t,height:a,radialSegments:o,heightSegments:u,topCap:i,bottomCap:p,thetaStart:d,thetaLength:y}={...Br,...e},C=[],f=[],b=[],T=0,S=[],l=a/2;return s(),i&&r>0&&g(!0),p&&t>0&&g(!1),{vertices:new Float32Array(f),normals:new Float32Array(b),indices:new Uint32Array(C)};function s(){let c=m.zero(),h=(t-r)/a;for(let x=0;x<=u;++x){let A=[],v=x/u,_=v*(t-r)+r;for(let E=0;E<=o;++E){let P=E/o*y+d,V=Math.sin(P),B=Math.cos(P);f.push(_*V,-v*a+l,_*B),m.normalize(c,m.set(c,V,h,B)),b.push(...c),A.push(T++)}S.push(A)}for(let x=0;x<o;++x)for(let A=0;A<u;++A){let v=S[A][x],_=S[A+1][x],E=S[A+1][x+1],I=S[A][x+1];C.push(v,_,I),C.push(_,E,I)}}function g(c){let h=c===!0?r:t,x=c===!0?1:-1,A=T;for(let _=1;_<=o;++_)f.push(0,l*x,0),b.push(0,x,0),++T;let v=T;for(let _=0;_<=o;++_){let I=_/o*y+d,P=Math.cos(I),V=Math.sin(I);f.push(h*V,l*x,h*P),b.push(0,x,0),++T}for(let _=0;_<o;++_){let E=A+_,I=v+_;c===!0?C.push(I,I+1,E):C.push(I+1,I,E)}}}var Mu=m(),wu=m(),lr=m(),cr=m(),qr=m(),At=m(),df={height:1,topCap:!0,bottomCap:!0,sides:!0};function Pa(e,r){let t=e.length/3;if(t<3)throw new Error("need at least 3 points to build a prism");let{height:a,topCap:o,bottomCap:u,sides:i}={...df,...r},p=t*2,d=t*4,y=(o?1:0)+(u?1:0);t===3?(p+=y,d+=y*3):t===4?(p+=y*2,d+=y*4):(p+=y*t,d+=y*t*3);let C=kt(p,d),f=a*.5;if(m.set(Mu,0,0,-f),m.set(wu,0,0,f),i)for(let b=0;b<t;++b){let T=(b+1)%t;m.set(lr,e[b*3],e[b*3+1],-f),m.set(cr,e[T*3],e[T*3+1],-f),m.set(qr,e[T*3],e[T*3+1],f),m.set(At,e[b*3],e[b*3+1],f),C.addQuad(lr,cr,qr,At)}if(t===3)o&&(m.set(lr,e[0],e[1],-f),m.set(cr,e[3],e[4],-f),m.set(qr,e[6],e[7],-f),C.add(qr,cr,lr)),u&&(m.set(lr,e[0],e[1],f),m.set(cr,e[3],e[4],f),m.set(qr,e[6],e[7],f),C.add(lr,cr,qr));else if(t===4)o&&(m.set(lr,e[0],e[1],-f),m.set(cr,e[3],e[4],-f),m.set(qr,e[6],e[7],-f),m.set(At,e[9],e[10],-f),C.addQuad(At,qr,cr,lr)),u&&(m.set(lr,e[0],e[1],f),m.set(cr,e[3],e[4],f),m.set(qr,e[6],e[7],f),m.set(At,e[9],e[10],f),C.addQuad(lr,cr,qr,At));else for(let b=0;b<t;++b){let T=(b+1)%t;o&&(m.set(lr,e[b*3],e[b*3+1],-f),m.set(cr,e[T*3],e[T*3+1],-f),C.add(Mu,cr,lr)),u&&(m.set(lr,e[b*3],e[b*3+1],f),m.set(cr,e[T*3],e[T*3+1],f),C.add(lr,cr,wu))}return C.getPrimitive()}var ff={};function hA(e,r){let{shifted:t,subset:a}=r??{},o=`${e}/${t?"shifted":""}/${a??""}`;return ff[o]??=Pa(Ct(e,t??!1),{topCap:a!=="sides",bottomCap:a!=="sides",sides:a!=="caps"})}function xA(e,r=1){let t=e.length/3,a=[],o=[],u=r*.5,i=0;for(let p=0;p<t;++p)a.push(e[p*3],e[p*3+1],-u,e[p*3],e[p*3+1],u),o.push(i,i+1),i+=2;for(let p=0;p<t;++p){let d=(p+1)%t;o.push(p*2,d*2,p*2+1,d*2+1)}return{vertices:a,edges:o}}var Gu=new Map,Ou=m.create(0,1,0),Ir=m(),In=m(),Nu=m(),Dr=se(),ku=se(),Uu=m(),Xr=m(),Ra=m();function It(e,r,t,a,o){return m.setMagnitude(In,t,a/2),m.add(Nu,r,In),o?m.matchDirection(Ra,Ou,In):m.copy(Ra,Ou),m.set(Uu,1,a,1),m.makeRotation(ku,Ra,In),se.scale(e,ku,Uu),se.setTranslation(e,Nu)}var Hr=new Int32Array(9);function mf(e){return Hr[0]=Math.round(1e3*(e.radiusTop??Br.radiusTop)),Hr[1]=Math.round(1e3*(e.radiusBottom??Br.radiusBottom)),Hr[2]=Math.round(1e3*(e.height??Br.height)),Hr[3]=e.radialSegments??Br.radialSegments,Hr[4]=e.heightSegments??Br.heightSegments,Hr[5]=e.topCap??Br.topCap?1:0,Hr[6]=e.bottomCap??Br.bottomCap?1:0,Hr[7]=Math.round(1e3*(e.thetaStart??Br.thetaStart)),Hr[8]=Math.round(1e3*(e.thetaLength??Br.thetaLength)),Ve(Hr)}function Dt(e){let r=mf(e),t=Gu.get(r);if(t===void 0){if(e.radialSegments&&e.radialSegments<=4){let a=Math.max(3,e.radialSegments),o=Pa(Ct(a,!0,e.radiusTop),e);t=Du(o,se.rotX90)}else t=Fu(e);Gu.set(r,t)}return t}function EA(e,r,t,a){let o=m.distance(r,t);m.sub(Ir,t,r),It(Dr,r,Ir,o,!1),Lr.addPrimitive(e,Dr,Dt(a))}function PA(e,r,t,a){It(Dr,r.origin,r.direction,t,!1),Lr.addPrimitive(e,Dr,Dt(a))}function zu(e,r,t,a,o){let u=m.distance(r,t)*a;m.sub(Ir,t,r),It(Dr,r,Ir,u,!0),Lr.addPrimitive(e,Dr,Dt(o))}function RA(e,r,t,a,o,u){let i=m.distance(r,t)*a,p=Dt(u);m.sub(Ir,t,r),m.add(Xr,r,o),It(Dr,Xr,Ir,i,!0),Lr.addPrimitive(e,Dr,p),m.sub(Xr,r,o),It(Dr,Xr,Ir,i,!0),Lr.addPrimitive(e,Dr,p)}function VA(e,r,t,a,o,u,i){let p=m.distance(r,t)*a,d=o%2!==0,y=Math.floor((o+1)/2),C=p/(o+.5),f=Dt(i);m.setMagnitude(Ir,m.sub(Ir,t,r),C),m.copy(Xr,r);for(let b=0;b<y;++b)m.add(Xr,Xr,Ir),d&&b===y-1&&(!u&&i.topCap&&(i.topCap=!1,f=Dt(i)),C/=2),It(Dr,Xr,Ir,C,!1),Lr.addPrimitive(e,Dr,f),m.add(Xr,Xr,Ir)}var Ae=m(),ju=dr(),Fr=m(),Er=m(),rt=m(),Dn=m(),rr=m.fromArray,pf=m.triangleNormal,Wu=m.copy,En=m.transformMat4,qu=m.transformMat3,Hu=dr.directionTransform,tr=ne.add3,Pn=ne.add,Lr;(f=>{function e(b=2048,T=1024,S){return{currentGroup:-1,vertices:ne.create(Float32Array,3,T,S?S.vertexBuffer.ref.value:b),normals:ne.create(Float32Array,3,T,S?S.normalBuffer.ref.value:b),indices:ne.create(Uint32Array,3,T*3,S?S.indexBuffer.ref.value:b*3),groups:ne.create(Float32Array,1,T,S?S.groupBuffer.ref.value:b),mesh:S}}f.createState=e;function r(b,T,S,l){let{vertices:s,normals:g,indices:c,groups:h,currentGroup:x}=b,A=s.elementCount;tr(s,T[0],T[1],T[2]),tr(s,S[0],S[1],S[2]),tr(s,l[0],l[1],l[2]),pf(Ae,T,S,l);for(let v=0;v<3;++v)tr(g,Ae[0],Ae[1],Ae[2]),Pn(h,x);tr(c,A,A+1,A+2)}f.addTriangle=r;function t(b,T,S,l,s){let{vertices:g,normals:c,indices:h,groups:x,currentGroup:A}=b,v=g.elementCount;tr(g,T[0],T[1],T[2]),tr(g,S[0],S[1],S[2]),tr(g,l[0],l[1],l[2]);for(let _=0;_<3;++_)tr(c,s[0],s[1],s[2]),Pn(x,A);tr(h,v,v+1,v+2)}f.addTriangleWithNormal=t;function a(b,T,S){rr(rt,T,S[0]*3),rr(Dn,T,S[1]*3);for(let l=2,s=S.length;l<s;l+=2)Wu(Fr,rt),Wu(Er,Dn),rr(rt,T,S[l]*3),rr(Dn,T,S[l+1]*3),r(b,Fr,Er,rt),r(b,Er,Dn,rt)}f.addTriangleStrip=a;function o(b,T,S){rr(Fr,T,S[0]*3);for(let l=2,s=S.length;l<s;++l)rr(Er,T,S[l-1]*3),rr(rt,T,S[l]*3),r(b,Fr,rt,Er)}f.addTriangleFan=o;function u(b,T,S,l){rr(Fr,T,S[0]*3);for(let s=2,g=S.length;s<g;++s)rr(Er,T,S[s-1]*3),rr(rt,T,S[s]*3),t(b,Fr,rt,Er,l)}f.addTriangleFanWithNormal=u;function i(b,T,S){let{vertices:l,normals:s,indices:g}=S,{vertices:c,normals:h,indices:x,groups:A,currentGroup:v}=b,_=c.elementCount,E=Hu(ju,T);for(let I=0,P=l.length;I<P;I+=3)En(Ae,rr(Ae,l,I),T),tr(c,Ae[0],Ae[1],Ae[2]),qu(Ae,rr(Ae,s,I),E),tr(h,Ae[0],Ae[1],Ae[2]),Pn(A,v);for(let I=0,P=g.length;I<P;I+=3)tr(x,g[I]+_,g[I+1]+_,g[I+2]+_)}f.addPrimitive=i;function p(b,T,S){let{vertices:l,normals:s,indices:g}=S,{vertices:c,normals:h,indices:x,groups:A,currentGroup:v}=b,_=c.elementCount,E=Hu(ju,T);for(let I=0,P=l.length;I<P;I+=3)En(Ae,rr(Ae,l,I),T),tr(c,Ae[0],Ae[1],Ae[2]),qu(Ae,rr(Ae,s,I),E),tr(h,-Ae[0],-Ae[1],-Ae[2]),Pn(A,v);for(let I=0,P=g.length;I<P;I+=3)tr(x,g[I+2]+_,g[I+1]+_,g[I]+_)}f.addPrimitiveFlipped=p;function d(b,T,S,l,s,g){let{vertices:c,edges:h}=S,x={radiusTop:l,radiusBottom:l,radialSegments:g};for(let A=0,v=h.length;A<v;A+=2)rr(Fr,c,h[A]*3),rr(Er,c,h[A+1]*3),En(Fr,Fr,T),En(Er,Er,T),Va(b,Fr,l,s),Va(b,Er,l,s),zu(b,Fr,Er,1,x)}f.addCage=d;function y(b,T,S){i(b,T,{vertices:S.vertexBuffer.ref.value.subarray(0,S.vertexCount*3),normals:S.normalBuffer.ref.value.subarray(0,S.vertexCount*3),indices:S.indexBuffer.ref.value.subarray(0,S.triangleCount*3)})}f.addMesh=y;function C(b){let{vertices:T,normals:S,indices:l,groups:s,mesh:g}=b,c=ne.compact(T,!0),h=ne.compact(l,!0),x=ne.compact(S,!0),A=ne.compact(s,!0);return wt.create(c,h,x,A,b.vertices.elementCount,b.indices.elementCount,g)}f.getMesh=C})(Lr||={});var Rn=new Map,Xu=se.identity();function Ku(e,r,t){return se.scaleUniformly(e,se.fromTranslation(e,r),t)}function gf(e){let r=Rn.get(e);return r===void 0&&(r=Ea(e),Rn.set(e,r)),r}function yf(e,r){let t=-2*e+(r==="ring"?-1:-2),a=Rn.get(t);return a===void 0&&(a=Ea(e,{subset:r}),Rn.set(t,a)),a}function Va(e,r,t,a){Lr.addPrimitive(e,Ku(Xu,r,t),gf(a))}function zA(e,r,t,a,o){Lr.addPrimitive(e,Ku(Xu,r,t),yf(a,o))}export{ye as a,bt as b,Nr as c,Db as d,ws as e,kr as f,Jy as g,eb as h,Te as i,sc as j,Ny as k,ky as l,te as m,ce as n,N as o,me as p,ae as q,de as r,Vs as s,le as t,he as u,C0 as v,S0 as w,_0 as x,A0 as y,I0 as z,Ks as A,Ke as B,Wf as C,Qe as D,el as E,Se as F,Yf as G,dd as H,Xs as I,fd as J,Ys as K,mn as L,Th as M,pn as N,_h as O,Rr as P,xd as Q,Uh as R,zh as S,jh as T,Ge as U,Wh as V,Q as W,$h as X,Zh as Y,Jh as Z,ox as _,_d as $,Ad as aa,ix as ba,sx as ca,fx as da,mx as ea,px as fa,Xb as ga,xe as ha,ot as ia,Nn as ja,Ff as ka,cm as la,rl as ma,dm as na,Zt as oa,fm as pa,mm as qa,pm as ra,tl as sa,gm as ta,ym as ua,nl as va,_m as wa,Am as xa,Im as ya,Dm as za,Em as Aa,Rs as Ba,oa as Ca,jc as Da,Wc as Ea,Xc as Fa,Kc as Ga,Ob as Ha,Nb as Ia,Tx as Ja,Cx as Ka,Sx as La,Px as Ma,Id as Na,Rx as Oa,Vx as Pa,wx as Qa,Dd as Ra,Gx as Sa,Ox as Ta,zr as Ua,ke as Va,st as Wa,qx as Xa,Cr as Ya,Qx as Za,wt as _a,jr as $a,_t as ab,Xd as bb,Yd as cb,sa as db,Wv as eb,ma as fb,pa as gb,Nd as hb,vt as ib,Sn as jb,kt as kb,Du as lb,Ct as mb,_n as nb,EC as ob,PC as pb,Pu as qb,MC as rb,wC as sb,Ca as tb,Sa as ub,_a as vb,Vu as wb,Aa as xb,Ia as yb,Da as zb,aA as Ab,dA as Bb,gf as Cb,Va as Db,zA as Eb,Lr as Fb,Pa as Gb,hA as Hb,xA as Ib,EA as Jb,PA as Kb,zu as Lb,RA as Mb,VA as Nb};
