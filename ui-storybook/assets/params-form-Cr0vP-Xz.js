import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{E as t,K as n,W as r,X as i,Y as a,Z as o,f as s,m as c,n as l,o as u,p as d,q as f,r as p,t as m,w as h}from"./jsx-runtime-pJJ4pzd1.js";import{a as g,n as _,o as v,t as y}from"./map-BLVP9Oyc.js";import{n as b,o as x,r as S,s as C}from"./observable-state-U0Aegh1x.js";import{c as w,d as T,f as E,i as D,l as O,n as k,p as A,r as j,u as M,v as ee,y as N}from"./control-flow-D80wAH1n.js";import{n as te,t as P}from"./combineLatest-BuVl0X9y.js";import{n as F,t as I}from"./icon-Cd9kBD44.js";import{n as L,t as R}from"./scroll-area-W5mfuQm0.js";import{i as z,r as B,t as V}from"./select-Bk_tLTmE.js";var H;function U(){return(U=e((()=>{H={now:function(){return(H.delegate||Date).now()},delegate:void 0}})))()}var ne;function W(){return(W=e((()=>{a(),C(),U(),ne=function(e){r(t,e);function t(t,n,r){t===void 0&&(t=1/0),n===void 0&&(n=1/0),r===void 0&&(r=H);var i=e.call(this)||this;return i._bufferSize=t,i._windowTime=n,i._timestampProvider=r,i._buffer=[],i._infiniteTimeWindow=!0,i._infiniteTimeWindow=n===1/0,i._bufferSize=Math.max(1,t),i._windowTime=Math.max(1,n),i}return t.prototype.next=function(t){var n=this,r=n.isStopped,i=n._buffer,a=n._infiniteTimeWindow,o=n._timestampProvider,s=n._windowTime;r||(i.push(t),!a&&i.push(o.now()+s)),this._trimBuffer(),e.prototype.next.call(this,t)},t.prototype._subscribe=function(e){this._throwIfClosed(),this._trimBuffer();for(var t=this._innerSubscribe(e),n=this,r=n._infiniteTimeWindow,i=n._buffer.slice(),a=0;a<i.length&&!e.closed;a+=r?1:2)e.next(i[a]);return this._checkFinalizedStatuses(e),t},t.prototype._trimBuffer=function(){var e=this,t=e._bufferSize,n=e._timestampProvider,r=e._buffer,i=e._infiniteTimeWindow,a=(i?1:2)*t;if(t<1/0&&a<r.length&&r.splice(0,r.length-a),!i){for(var o=n.now(),s=0,c=1;c<r.length&&r[c]<=o;c+=2)s=c;s&&r.splice(0,s+1)}},t}(x)})))()}function re(e){e===void 0&&(e={});var t=e.connector,n=t===void 0?function(){return new x}:t,r=e.resetOnError,i=r===void 0||r,a=e.resetOnComplete,o=a===void 0||a,s=e.resetOnRefCountZero,c=s===void 0||s;return function(e){var t,r,a,s=0,l=!1,u=!1,d=function(){r?.unsubscribe(),r=void 0},f=function(){d(),t=a=void 0,l=u=!1},p=function(){var e=t;f(),e?.unsubscribe()};return v(function(e,m){s++,!u&&!l&&d();var g=a??=n();m.add(function(){s--,s===0&&!u&&!l&&(r=ie(p,c))}),g.subscribe(m),!t&&s>0&&(t=new h({next:function(e){return g.next(e)},error:function(e){u=!0,d(),r=ie(f,i,e),g.error(e)},complete:function(){l=!0,d(),r=ie(f,o),g.complete()}}),N(e).subscribe(t))})(e)}}function ie(e,t){var r=[...arguments].slice(2);if(t===!0)e();else if(t!==!1){var i=new h({next:function(){i.unsubscribe(),e()}});return N(t.apply(void 0,f([],n(r)))).subscribe(i)}}function ae(){return(ae=e((()=>{a(),ee(),C(),t(),g()})))()}function oe(e,t,n){var r,i,a,o,s=!1;return e&&typeof e==`object`?(r=e.bufferSize,o=r===void 0?1/0:r,i=e.windowTime,t=i===void 0?1/0:i,a=e.refCount,s=a!==void 0&&a,n=e.scheduler):o=e??1/0,re({connector:function(){return new ne(o,t,n)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:s})}function se(){return(se=e((()=>{W(),ae()})))()}var ce;function le(){return(le=e((()=>{(function(e){function t(e){return e}e.create=t;function n(e,t){return(e&t)!==0}e.has=n;function r(e,t){return!!t&&(e&t)===t}e.hasAll=r})(ce||={})})))()}var ue;function de(){return(de=e((()=>{(function(e){function t(e=512){return{current:[],offset:0,capacity:e,chunks:[]}}e.create=t;function n(e){return e.chunks.length?(e.offset>0&&(e.chunks[e.chunks.length]=e.current.length===e.offset?e.current.join(``):e.current.slice(0,e.offset).join(``)),e.chunks.join(``)):e.current.length===e.offset?e.current.join(``):e.current.splice(0,e.offset).join(``)}e.getString=n;function r(e){let t=0;for(let n of e.chunks)t+=n.length;for(let n=0;n<e.offset;n++)t+=e.current[n].length;return t}e.getSize=r;function i(e){return e.offset>0&&(e.current.length===e.offset?e.chunks[e.chunks.length]=e.current.join(``):e.chunks[e.chunks.length]=e.current.slice(0,e.offset).join(``),e.offset=0),e.chunks}e.getChunks=i;let a=[];(function(){let e=``;for(let t=0;t<512;t++)a[t]=e,e+=` `})();function o(e){u(e,`
`)}e.newline=o;function s(e,t){t>0&&u(e,a[t])}e.whitespace=s;function c(e){u(e,` `)}e.whitespace1=c;function l(e,t){t&&(e.offset===e.capacity&&(e.chunks[e.chunks.length]=e.current.join(``),e.offset=0),e.current[e.offset++]=t)}e.write=l;function u(e,t){e.offset===e.capacity&&(e.chunks[e.chunks.length]=e.current.join(``),e.offset=0),e.current[e.offset++]=t}e.writeSafe=u;function d(e,t,n){t?(s(e,n-t.length),u(e,t)):s(e,n)}e.writePadLeft=d;function f(e,t,n){if(!t){s(e,n);return}let r=n-t.length;u(e,t),s(e,r)}e.writePadRight=f;function p(e,t){u(e,``+t)}e.writeInteger=p;function m(e,t){u(e,``+t+` `)}e.writeIntegerAndSpace=m;function h(e,t,n){let r=``+t;s(e,n-r.length),u(e,r)}e.writeIntegerPadLeft=h;function g(e,t,n){let r=``+t,i=n-r.length;u(e,r),s(e,i)}e.writeIntegerPadRight=g;function _(e,t,n){u(e,``+Math.round(n*t)/n)}e.writeFloat=_;function v(e,t,n,r){let i=``+Math.round(n*t)/n;s(e,r-i.length),u(e,i)}e.writeFloatPadLeft=v;function y(e,t,n,r){let i=``+Math.round(n*t)/n,a=r-i.length;u(e,i),s(e,a)}e.writeFloatPadRight=y})(ue||={})})))()}var fe;function pe(){return(pe=e((()=>{fe=(function(){if(typeof window<`u`&&window.performance){let e=window.performance;return()=>e.now()}return typeof process<`u`&&process.hrtime!==`undefined`&&typeof process.hrtime==`function`?()=>{let e=process.hrtime();return e[0]*1e3+e[1]/1e6}:Date.now?()=>Date.now():()=>+new Date})()})))()}var me;function he(){return(he=e((()=>{pe(),(function(e){let t=typeof btoa<`u`?btoa:e=>Buffer.from(e).toString(`base64`),n=[];function r(){let e=+new Date+fe();for(let t=0;t<16;t++)n[t]=String.fromCharCode((e+Math.random()*255)%255|0),e=Math.floor(e/255);return t(n.join(``)).replace(/\+/g,`-`).replace(/\//g,`_`).substr(0,22)}e.create22=r;function i(){let e=+new Date+fe();return`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,function(t){let n=(e+Math.random()*16)%16|0;return e=Math.floor(e/16),(t===`x`?n:n&3|8).toString(16)})}e.createv4=i;function a(e){return typeof e==`string`}e.is=a})(me||={})})))()}function ge(e,t){return e-t}function _e(e){return Array.prototype.sort.call(e,ge),e}var ve;function ye(){return(ye=e((()=>{(function(e){class t{has(e){return!1}forEach(e,t){return t}constructor(){this.size=0}}class n{has(e){return e===this.idx}forEach(e,t){return e(this.idx,t),t}constructor(e){this.idx=e,this.size=1}}class r{has(e){return e<this.length&&!!this.mask[e]}_forEach(e,t){for(let n=0;n<this.length;n++)this.mask[n]&&e(n,t)}forEach(e,t){return this._forEach(e,t),t}constructor(e,t){this.mask=e,this.size=t,this.length=e.length}}class i{has(e){return!0}_forEach(e,t){for(let n=0;n<this.size;n++)e(n,t)}forEach(e,t){return this._forEach(e,t),t}constructor(e){this.size=e}}class a{has(e){return this.set.has(e)}_forEach(e,t){for(let n of this.flatten())e(n,t)}flatten(){if(this._flat)return this._flat;let e=new Int32Array(this.size),t=0;return this.set.forEach(n=>e[t++]=n),_e(e),this._flat=e,this._flat}forEach(e,t){return this._forEach(e,t),t}constructor(e){this.set=e,this._flat=void 0,this.size=e.size}}function o(e){return new i(e)}e.always=o,e.never=new t;function s(e){return new a(e)}e.ofSet=s;function c(e){return new n(e)}e.singleton=c;function l(e){let o=e.length;if(o===0)return new t;if(o===1)return new n(e[0]);let s=0;for(let t of e)t>s&&(s=t);if(o===s)return new i(o);if(o/s<1/12){let t=new Set;for(let n of e)t.add(n);return new a(t)}let c=new Int8Array(s+1);for(let t of e)c[t]=1;return new r(c,e.length)}e.ofUniqueIndices=l;function u(e,t){return new r(e,t)}e.ofMask=u;function d(e,t){for(let n of t)if(e.has(n))return!0;return!1}e.hasAny=d;function f(e,t){let n=0,r=0;if(t.forEach(t=>{e.has(t)||(n++,t>r&&(r=t))}),n/r<1/12){let n=new Set;return t.forEach(t=>{e.has(t)||n.add(t)}),s(n)}{let i=new Uint8Array(r+1);return t.forEach(t=>{e.has(t)||(i[t]=1)}),u(i,n)}}e.complement=f})(ve||={})})))()}function be(e=0,t=2**53-1){let n=e;return()=>{let e=n;return n=(n+1)%t,e}}var xe,Se,Ce,we;function Te(){return(Te=e((()=>{(function(e){function t(e){return{ref:e}}e.create=t;function n(e,t){return e.ref=t,e}e.set=n})(xe||={}),Se=be(0,2147483647),(function(e){function t(e,t){return{id:Se(),version:0,value:e,metadata:t}}e.create=t;function n(e,t){return{id:e.id,version:e.version+1,value:t,metadata:e.metadata}}e.withValue=n})(Ce||={}),(function(e){function t(e,t){return xe.create(Ce.create(e,t))}e.create=t;function n(e,t){return xe.set(e,Ce.withValue(e.ref,t))}e.update=n;function r(e,t){return xe.set(e,t)}e.set=r;function i(e,t){return e.ref.value===t?e:n(e,t)}e.updateIfChanged=i})(we||={})})))()}function Ee(e,t){if(e===t)return!0;if(!e||!t)return!1;let n=Object.keys(e);if(Object.keys(t).length!==n.length)return!1;for(let r of n)if(!De.call(e,r)||e[r]!==t[r])return!1;return!0}var De;function Oe(){return(Oe=e((()=>{le(),de(),he(),ye(),Te(),De=Object.prototype.hasOwnProperty})))()}function ke(){return ke.zero()}function Ae(){return(Ae=e((()=>{(function(e){function t(){let e=[.1,0];return e[0]=0,e}e.zero=t;function n(e){let n=t();return n[0]=e[0],n[1]=e[1],n}e.clone=n;function r(e){return a(e.x,e.y)}e.fromObj=r;function i(e){return{x:e[0],y:e[1]}}e.toObj=i;function a(e,n){let r=t();return r[0]=e,r[1]=n,r}e.create=a;function o(e){return Number.isNaN(e[0])||Number.isNaN(e[1])}e.hasNaN=o;function s(e){return Array.isArray(e)&&e.length===2}e.is=s;function c(e,t,n){return t[n+0]=e[0],t[n+1]=e[1],t}e.toArray=c;function l(e,t,n){return e[0]=t[n+0],e[1]=t[n+1],e}e.fromArray=l;function u(e,t){return e[0]=t[0],e[1]=t[1],e}e.copy=u;function d(e,t,n){return e[0]=t,e[1]=n,e}e.set=d;function f(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e}e.add=f;function p(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e}e.sub=p;function m(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e}e.mul=m;function h(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e}e.div=h;function g(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e}e.scale=g;function _(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e}e.round=_;function v(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e}e.ceil=v;function y(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e}e.floor=y;function b(e,t){let n=t[0]-e[0],r=t[1]-e[1];return Math.sqrt(n*n+r*r)}e.distance=b;function x(e,t){let n=t[0]-e[0],r=t[1]-e[1];return n*n+r*r}e.squaredDistance=x;function S(e){let t=e[0],n=e[1];return Math.sqrt(t*t+n*n)}e.magnitude=S;function C(e){let t=e[0],n=e[1];return t*t+n*n}e.squaredMagnitude=C;function w(e,t,n){return g(e,E(e,t),n)}e.setMagnitude=w;function T(e,t){return e[0]=1/t[0],e[1]=1/t[1],e}e.inverse=T;function E(e,t){let n=t[0],r=t[1],i=n*n+r*r;return i>0&&(i=1/Math.sqrt(i),e[0]=t[0]*i,e[1]=t[1]*i),e}e.normalize=E;function D(e,t){return e[0]===t[0]&&e[1]===t[1]}e.areEqual=D;function O(e,t){return`[${e[0].toPrecision(t)} ${e[1].toPrecision(t)}}]`}e.toString=O})(ke||={})})))()}function G(e,t,n){return Math.abs(e-t)<=n}var je;function Me(){return(Me=e((()=>{je=1e-6})))()}function Ne(){return Ne.zero()}function Pe(){return(Pe=e((()=>{Me(),Ke(),Je(),(function(e){function t(){let e=[.1,0,0,0,0,0,0,0,0];return e[0]=0,e}e.zero=t;function n(){let e=t();return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}e.identity=n;function r(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}e.setIdentity=r;function i(e,t,n){return t[n+0]=e[0],t[n+1]=e[1],t[n+2]=e[2],t[n+3]=e[3],t[n+4]=e[4],t[n+5]=e[5],t[n+6]=e[6],t[n+7]=e[7],t[n+8]=e[8],t}e.toArray=i;function a(e,t,n){return e[0]=t[n+0],e[1]=t[n+1],e[2]=t[n+2],e[3]=t[n+3],e[4]=t[n+4],e[5]=t[n+5],e[6]=t[n+6],e[7]=t[n+7],e[8]=t[n+8],e}e.fromArray=a;function o(e,t,n,r){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=n[0],e[4]=n[1],e[5]=n[2],e[6]=r[0],e[7]=r[1],e[8]=r[2],e}e.fromColumns=o;function s(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e}e.fromMat4=s;let c=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];function l(e,t,n){return Ge.fromEuler(c,t,n),s(e,c)}e.fromEuler=l;function u(e,t,n){return Ge.fromRotation(c,t,n),s(e,c)}e.fromRotation=u;function d(e,n,r,i,a,o,s,c,l){let u=t();return u[0]=e,u[1]=n,u[2]=r,u[3]=i,u[4]=a,u[5]=o,u[6]=s,u[7]=c,u[8]=l,u}e.create=d;let f=n();function p(e,t){return _(e,f,t===void 0?je:t)}e.isIdentity=p;function m(e){return Array.isArray(e)&&e.length===9}e.is=m;function h(e){for(let t=0;t<9;t++)if(Number.isNaN(e[t]))return!0;return!1}e.hasNaN=h;function g(e){return b(t(),e)}e.clone=g;function _(e,t,n){for(let r=0;r<9;r++)if(Math.abs(e[r]-t[r])>n)return!1;return!0}e.areEqual=_;function v(e,t,n,r){e[3*n+t]=r}e.setValue=v;function y(e,t,n){return e[3*n+t]}e.getValue=y;function b(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}e.copy=b;function x(e,t){if(e===t){let n=t[1],r=t[2],i=t[5];e[1]=t[3],e[2]=t[6],e[3]=n,e[5]=t[7],e[6]=r,e[7]=i}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e}e.transpose=x;function S(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=u*o-s*l,f=-u*a+s*c,p=l*a-o*c,m=n*d+r*f+i*p;return m?(m=1/m,e[0]=d*m,e[1]=(-u*r+i*l)*m,e[2]=(s*r-i*o)*m,e[3]=f*m,e[4]=(u*n-i*c)*m,e[5]=(-s*n+i*a)*m,e[6]=p*m,e[7]=(-l*n+r*c)*m,e[8]=(o*n-r*a)*m,e):(console.warn(`non-invertible matrix.`,t),e)}e.invert=S;function C(e,t){return e===t?(e[3]=t[1],e[6]=t[2],e[7]=t[5]):(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[1],e[4]=t[4],e[5]=t[5],e[6]=t[2],e[7]=t[5],e[8]=t[8]),e}e.symmtricFromUpper=C;function w(e,t){return e===t?(e[1]=t[3],e[2]=t[6],e[5]=t[7]):(e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[3],e[4]=t[4],e[5]=t[7],e[6]=t[6],e[7]=t[7],e[8]=t[8]),e}e.symmtricFromLower=w;function T(e){let t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=-l*i+o*s,f=c*i-a*s;return t*u+n*d+r*f}e.determinant=T;function E(e){return e[0]+e[4]+e[8]}e.trace=E;function D(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e[4]=t[4]-n[4],e[5]=t[5]-n[5],e[6]=t[6]-n[6],e[7]=t[7]-n[7],e[8]=t[8]-n[8],e}e.sub=D;function O(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e[6]=t[6]+n[6],e[7]=t[7]+n[7],e[8]=t[8]+n[8],e}e.add=O;function k(e,t,n){let r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=n[0],p=n[1],m=n[2],h=n[3],g=n[4],_=n[5],v=n[6],y=n[7],b=n[8];return e[0]=f*r+p*o+m*l,e[1]=f*i+p*s+m*u,e[2]=f*a+p*c+m*d,e[3]=h*r+g*o+_*l,e[4]=h*i+g*s+_*u,e[5]=h*a+g*c+_*d,e[6]=v*r+y*o+b*l,e[7]=v*i+y*s+b*u,e[8]=v*a+y*c+b*d,e}e.mul=k;function A(e,t,n){return e[0]=t[0]-n,e[1]=t[1]-n,e[2]=t[2]-n,e[3]=t[3]-n,e[4]=t[4]-n,e[5]=t[5]-n,e[6]=t[6]-n,e[7]=t[7]-n,e[8]=t[8]-n,e}e.subScalar=A;function j(e,t,n){return e[0]=t[0]+n,e[1]=t[1]+n,e[2]=t[2]+n,e[3]=t[3]+n,e[4]=t[4]+n,e[5]=t[5]+n,e[6]=t[6]+n,e[7]=t[7]+n,e[8]=t[8]+n,e}e.addScalar=j;function M(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*n,e}e.mulScalar=M;let ee=Math.PI/3,N=t();function te(e,t){let n=t[1]*t[1]+t[2]*t[2]+t[5]*t[5];if(n===0)e[0]=t[0],e[1]=t[4],e[2]=t[8];else{let r=E(t)/3,i=t[0]-r,a=t[4]-r,o=t[8]-r,s=i*i+a*a+o*o+2*n,c=Math.sqrt(s/6);M(N,H,r),D(N,t,N),M(N,N,1/c);let l=T(N)/2,u=l<=-1?ee:l>=1?0:Math.acos(l)/3;e[0]=r+2*c*Math.cos(u),e[2]=r+2*c*Math.cos(u+2*ee),e[1]=3*r-e[0]-e[2]}return e}e.symmetricEigenvalues=te;let P=[.1,0,0],F=[.1,0,0],I=[.1,0,0],L=[.1,0,0],R=[.1,0,0],z=[.1,0,0];function B(e,t,n){K.set(P,t[0]-n,t[1],t[2]),K.set(F,t[1],t[4]-n,t[5]),K.set(I,t[2],t[5],t[8]-n),K.cross(L,P,F),K.cross(R,P,I),K.cross(z,F,I);let r=K.dot(L,L),i=K.dot(R,R),a=K.dot(z,z),o=r,s=0;return i>o&&(o=i,s=1),a>o&&(s=2),s===0?K.scale(e,L,1/Math.sqrt(r)):s===1?K.scale(e,R,1/Math.sqrt(i)):K.scale(e,z,1/Math.sqrt(a)),e}e.eigenvector=B;function V(e,t){return s(e,t),S(e,e),x(e,e),e}e.directionTransform=V;let H=e.Identity=n();function U(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]+e[4]*t[4]+e[5]*t[5]+e[6]*t[6]+e[7]*t[7]+e[8]*t[8]}e.innerProduct=U;function ne(e,t){let n=t[0],r=t[1],i=t[2],a=t[4],o=t[5],s=t[6],c=t[8],l=t[9],u=t[10];return e[0]=o*u-s*l,e[1]=s*c-a*u,e[2]=a*l-o*c,e[3]=l*i-u*r,e[4]=u*n-c*i,e[5]=c*r-l*n,e[6]=r*s-i*o,e[7]=i*a-n*s,e[8]=n*o-r*a,e}e.adjointFromMat4=ne})(Ne||={})})))()}function Fe(e){throw Error(`unreachable`)}function Ie(e,t,n){return Math.max(t,Math.min(n,e))}function Le(e,t,n,r,i,a){let o=(n-e)*a,s=(r-t)*a,c=i*i,l=i*c;return(2*t-2*n+o+s)*l+(-3*t+3*n-2*o-s)*c+o*i+t}function Re(e,t,n,r){let i=1-r;return i*i*e+2*i*r*t+r*r*n}function ze(){return ze.zero()}function Be(){return(Be=e((()=>{Pe(),Je(),Me(),Ke(),(function(e){function t(){let e=[.1,0,0,0];return e[0]=0,e}e.zero=t;function n(){let e=t();return e[3]=1,e}e.identity=n;function r(e){e[0]=0,e[1]=0,e[2]=0,e[3]=1}e.setIdentity=r;function i(e){return Number.isNaN(e[0])||Number.isNaN(e[1])||Number.isNaN(e[2])||Number.isNaN(e[3])}e.hasNaN=i;function a(e,t,r,i){let a=n();return a[0]=e,a[1]=t,a[2]=r,a[3]=i,a}e.create=a;function o(e){return Array.isArray(e)&&e.length===4}e.is=o;function s(e,t,n){n*=.5;let r=Math.sin(n);return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=Math.cos(n),e}e.setAxisAngle=s;function c(e,t){let n=Math.acos(t[3])*2,r=Math.sin(n/2);return r===0?(e[0]=1,e[1]=0,e[2]=0):(e[0]=t[0]/r,e[1]=t[1]/r,e[2]=t[2]/r),n}e.getAxisAngle=c;function l(e,t,n){let r=t[0],i=t[1],a=t[2],o=t[3],s=n[0],c=n[1],l=n[2],u=n[3];return e[0]=r*u+o*s+i*l-a*c,e[1]=i*u+o*c+a*s-r*l,e[2]=a*u+o*l+r*c-i*s,e[3]=o*u-r*s-i*c-a*l,e}e.multiply=l;function u(e,t,n){n*=.5;let r=t[0],i=t[1],a=t[2],o=t[3],s=Math.sin(n),c=Math.cos(n);return e[0]=r*c+o*s,e[1]=i*c+a*s,e[2]=a*c-i*s,e[3]=o*c-r*s,e}e.rotateX=u;function d(e,t,n){n*=.5;let r=t[0],i=t[1],a=t[2],o=t[3],s=Math.sin(n),c=Math.cos(n);return e[0]=r*c-a*s,e[1]=i*c+o*s,e[2]=a*c+r*s,e[3]=o*c-i*s,e}e.rotateY=d;function f(e,t,n){n*=.5;let r=t[0],i=t[1],a=t[2],o=t[3],s=Math.sin(n),c=Math.cos(n);return e[0]=r*c+i*s,e[1]=i*c-r*s,e[2]=a*c+o*s,e[3]=o*c-a*s,e}e.rotateZ=f;function p(e,t){let n=t[0],r=t[1],i=t[2];return e[0]=n,e[1]=r,e[2]=i,e[3]=Math.sqrt(Math.abs(1-n*n-r*r-i*i)),e}e.calculateW=p;function m(e,t,n,r){let i=t[0],a=t[1],o=t[2],s=t[3],c=n[0],l=n[1],u=n[2],d=n[3],f,p,m,h,g;return p=i*c+a*l+o*u+s*d,p<0&&(p=-p,c=-c,l=-l,u=-u,d=-d),1-p>1e-6?(f=Math.acos(p),m=Math.sin(f),h=Math.sin((1-r)*f)/m,g=Math.sin(r*f)/m):(h=1-r,g=r),e[0]=h*i+g*c,e[1]=h*a+g*l,e[2]=h*o+g*u,e[3]=h*s+g*d,e}e.slerp=m;function h(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=n*n+r*r+i*i+a*a,s=o?1/o:0;return e[0]=-n*s,e[1]=-r*s,e[2]=-i*s,e[3]=a*s,e}e.invert=h;function g(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}e.conjugate=g;function _(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}e.dot=_;function v(e,t){let n=t[0]+t[4]+t[8],r;if(n>0)r=Math.sqrt(n+1),e[3]=.5*r,r=.5/r,e[0]=(t[5]-t[7])*r,e[1]=(t[6]-t[2])*r,e[2]=(t[1]-t[3])*r;else{let n=0;t[4]>t[0]&&(n=1),t[8]>t[n*3+n]&&(n=2);let i=(n+1)%3,a=(n+2)%3;r=Math.sqrt(t[n*3+n]-t[i*3+i]-t[a*3+a]+1),e[n]=.5*r,r=.5/r,e[3]=(t[i*3+a]-t[a*3+i])*r,e[i]=(t[i*3+n]+t[n*3+i])*r,e[a]=(t[a*3+n]+t[n*3+a])*r}return e}e.fromMat3=v;let y=[0,0,0,0,0,0,0,0,0,0,0,0];function b(e,t){return Ne.fromMat4(y,t),v(e,y)}e.fromMat4=b;function x(e,t,n){let[r,i,a]=t,o=Math.cos(r/2),s=Math.cos(i/2),c=Math.cos(a/2),l=Math.sin(r/2),u=Math.sin(i/2),d=Math.sin(a/2);switch(n){case`XYZ`:e[0]=l*s*c+o*u*d,e[1]=o*u*c-l*s*d,e[2]=o*s*d+l*u*c,e[3]=o*s*c-l*u*d;break;case`YXZ`:e[0]=l*s*c+o*u*d,e[1]=o*u*c-l*s*d,e[2]=o*s*d-l*u*c,e[3]=o*s*c+l*u*d;break;case`ZXY`:e[0]=l*s*c-o*u*d,e[1]=o*u*c+l*s*d,e[2]=o*s*d+l*u*c,e[3]=o*s*c-l*u*d;break;case`ZYX`:e[0]=l*s*c-o*u*d,e[1]=o*u*c+l*s*d,e[2]=o*s*d-l*u*c,e[3]=o*s*c+l*u*d;break;case`YZX`:e[0]=l*s*c+o*u*d,e[1]=o*u*c+l*s*d,e[2]=o*s*d-l*u*c,e[3]=o*s*c-l*u*d;break;case`XZY`:e[0]=l*s*c-o*u*d,e[1]=o*u*c-l*s*d,e[2]=o*s*d+l*u*c,e[3]=o*s*c+l*u*d;break;default:Fe(n)}return e}e.fromEuler=x;let S=[0,0,0];function C(e,t,n){let r=K.dot(t,n)+1;return r<1e-6?(r=0,Math.abs(t[0])>Math.abs(t[2])?K.set(S,-t[1],t[0],0):K.set(S,0,-t[2],t[1])):K.cross(S,t,n),e[0]=S[0],e[1]=S[1],e[2]=S[2],e[3]=r,L(e,e),e}e.fromUnitVec3=C;let w=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];function T(e,t,n,r){return Ge.fromBasis(w,t,n,r),b(e,w)}e.fromBasis=T;function E(e){let n=t();return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n}e.clone=E;function D(e){return a(e.x,e.y,e.z,e.w)}e.fromObj=D;function O(e){return{x:e[0],y:e[1],z:e[2],w:e[3]}}e.toObj=O;function k(e,t,n){return t[n+0]=e[0],t[n+1]=e[1],t[n+2]=e[2],t[n+3]=e[3],t}e.toArray=k;function A(e,t,n){return e[0]=t[n+0],e[1]=t[n+1],e[2]=t[n+2],e[3]=t[n+3],e}e.fromArray=A;function j(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}e.copy=j;function M(e,t,n,r,i){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e}e.set=M;function ee(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}e.exactEquals=ee;function N(e,t){let n=e[0],r=e[1],i=e[2],a=e[3],o=t[0],s=t[1],c=t[2],l=t[3];return Math.abs(n-o)<=1e-6*Math.max(1,Math.abs(n),Math.abs(o))&&Math.abs(r-s)<=1e-6*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(i-c)<=1e-6*Math.max(1,Math.abs(i),Math.abs(c))&&Math.abs(a-l)<=1e-6*Math.max(1,Math.abs(a),Math.abs(l))}e.equals=N;function te(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e}e.add=te;function P(e){let t=e[0],n=e[1],r=e[2],i=e[3];return Math.sqrt(t*t+n*n+r*r+i*i)}e.magnitude=P;function F(e){let t=e[0],n=e[1],r=e[2],i=e[3];return t*t+n*n+r*r+i*i}e.squaredMagnitude=F;function I(e,t){return 2*Math.acos(Math.abs(Ie(_(e,t),-1,1)))}e.angle=I;function L(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=n*n+r*r+i*i+a*a;return o>0&&(o=1/Math.sqrt(o),e[0]=n*o,e[1]=r*o,e[2]=i*o,e[3]=a*o),e}e.normalize=L;let R=[0,0,0],z=[1,0,0],B=[0,1,0];function V(e,t,n){let r=K.dot(t,n);return r<-.999999?(K.cross(R,z,t),K.magnitude(R)<1e-6&&K.cross(R,B,t),K.normalize(R,R),s(e,R,Math.PI),e):r>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):(K.cross(R,t,n),e[0]=R[0],e[1]=R[1],e[2]=R[2],e[3]=1+r,L(e,e))}e.rotationTo=V;let H=t(),U=t();function ne(e,t,n,r,i,a){return m(H,t,i,a),m(U,n,r,a),m(e,H,U,2*a*(1-a)),e}e.sqlerp=ne;let W=[0,0,0,0,0,0,0,0,0];function re(e,t,n,r){return W[0]=n[0],W[3]=n[1],W[6]=n[2],W[1]=r[0],W[4]=r[1],W[7]=r[2],W[2]=-t[0],W[5]=-t[1],W[8]=-t[2],L(e,v(e,W))}e.setAxes=re;function ie(e,t){return`[${e[0].toPrecision(t)} ${e[1].toPrecision(t)} ${e[2].toPrecision(t)}  ${e[3].toPrecision(t)}]`}e.toString=ie,e.Identity=n()})(ze||={})})))()}function Ve(e){return e*Ue}function He(e){return e/Ue}var Ue;function We(){return(We=e((()=>{Ue=Math.PI/180})))()}function Ge(){return Ge.zero()}function Ke(){return(Ke=e((()=>{Me(),Je(),Be(),We(),(function(e){function t(){let e=[.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];return e[0]=0,e}e.zero=t;function n(){let e=t();return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}e.identity=n;function r(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}e.setIdentity=r;function i(e){for(let t=0;t<16;t++)if(e[t]!==0)return!1;return!0}e.isZero=i;function a(e){for(let t=0;t<16;t++)e[t]=0;return e}e.setZero=a;function o(e){let n=t();for(let t=0;t<4;t++){let r=e[t];for(let e=0;e<4;e++)n[4*e+t]=r[e]}return n}e.ofRows=o;let s=n();function c(e,t){return d(e,s,t===void 0?je:t)}e.isIdentity=c;function l(e){return Array.isArray(e)&&e.length===16}e.is=l;function u(e){for(let t=0;t<16;t++)if(Number.isNaN(e[t]))return!0;return!1}e.hasNaN=u;function d(e,t,n){for(let r=0;r<16;r++)if(Math.abs(e[r]-t[r])>n)return!1;return!0}e.areEqual=d;function f(e,t,n,r){e[4*n+t]=r}e.setValue=f;function p(e,t,n){return e[4*n+t]}e.getValue=p;function m(e,t,n){return t[n+0]=e[0],t[n+1]=e[1],t[n+2]=e[2],t[n+3]=e[3],t[n+4]=e[4],t[n+5]=e[5],t[n+6]=e[6],t[n+7]=e[7],t[n+8]=e[8],t[n+9]=e[9],t[n+10]=e[10],t[n+11]=e[11],t[n+12]=e[12],t[n+13]=e[13],t[n+14]=e[14],t[n+15]=e[15],t}e.toArray=m;function h(e,t,n){return e[0]=t[n+0],e[1]=t[n+1],e[2]=t[n+2],e[3]=t[n+3],e[4]=t[n+4],e[5]=t[n+5],e[6]=t[n+6],e[7]=t[n+7],e[8]=t[n+8],e[9]=t[n+9],e[10]=t[n+10],e[11]=t[n+11],e[12]=t[n+12],e[13]=t[n+13],e[14]=t[n+14],e[15]=t[n+15],e}e.fromArray=h;function g(e,t,n,r){return a(e),f(e,0,0,t[0]),f(e,1,0,t[1]),f(e,2,0,t[2]),f(e,0,1,n[0]),f(e,1,1,n[1]),f(e,2,1,n[2]),f(e,0,2,r[0]),f(e,1,2,r[1]),f(e,2,2,r[2]),f(e,3,3,1),e}e.fromBasis=g;function _(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}e.copy=_;function v(e){return _(t(),e)}e.clone=v;function y(e,t){return e[0]=t[12],e[1]=t[13],e[2]=t[14],e}e.getTranslation=y;function b(e,t){let n=t[0],r=t[1],i=t[2],a=t[4],o=t[5],s=t[6],c=t[8],l=t[9],u=t[10];return e[0]=Math.sqrt(n*n+r*r+i*i),e[1]=Math.sqrt(a*a+o*o+s*s),e[2]=Math.sqrt(c*c+l*l+u*u),e}e.getScaling=b;function x(e,t){let n=t[0]+t[5]+t[10],r=0;return n>0?(r=Math.sqrt(n+1)*2,e[3]=.25*r,e[0]=(t[6]-t[9])/r,e[1]=(t[8]-t[2])/r,e[2]=(t[1]-t[4])/r):t[0]>t[5]&&t[0]>t[10]?(r=Math.sqrt(1+t[0]-t[5]-t[10])*2,e[3]=(t[6]-t[9])/r,e[0]=.25*r,e[1]=(t[1]+t[4])/r,e[2]=(t[8]+t[2])/r):t[5]>t[10]?(r=Math.sqrt(1+t[5]-t[0]-t[10])*2,e[3]=(t[8]-t[2])/r,e[0]=(t[1]+t[4])/r,e[1]=.25*r,e[2]=(t[6]+t[9])/r):(r=Math.sqrt(1+t[10]-t[0]-t[5])*2,e[3]=(t[1]-t[4])/r,e[0]=(t[8]+t[2])/r,e[1]=(t[6]+t[9])/r,e[2]=.25*r),e}e.getRotation=x;function S(e,t){let n=1/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),r=1/Math.sqrt(t[4]*t[4]+t[5]*t[5]+t[6]*t[6]),i=1/Math.sqrt(t[8]*t[8]+t[9]*t[9]+t[10]*t[10]);return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=0,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=0,e[8]=t[8]*i,e[9]=t[9]*i,e[10]=t[10]*i,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}e.extractRotation=S;function C(e,t){if(e===t){let n=t[1],r=t[2],i=t[3],a=t[6],o=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=n,e[6]=t[9],e[7]=t[13],e[8]=r,e[9]=a,e[11]=t[14],e[12]=i,e[13]=o,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}e.transpose=C;function w(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],p=t[11],m=t[12],h=t[13],g=t[14],_=t[15],v=n*s-r*o,y=n*c-i*o,b=n*l-a*o,x=r*c-i*s,S=r*l-a*s,C=i*l-a*c,w=u*h-d*m,T=u*g-f*m,E=u*_-p*m,D=d*g-f*h,O=d*_-p*h,k=f*_-p*g,A=v*k-y*O+b*D+x*E-S*T+C*w;return A?(A=1/A,e[0]=(s*k-c*O+l*D)*A,e[1]=(i*O-r*k-a*D)*A,e[2]=(h*C-g*S+_*x)*A,e[3]=(f*S-d*C-p*x)*A,e[4]=(c*E-o*k-l*T)*A,e[5]=(n*k-i*E+a*T)*A,e[6]=(g*b-m*C-_*y)*A,e[7]=(u*C-f*b+p*y)*A,e[8]=(o*O-s*E+l*w)*A,e[9]=(r*E-n*O-a*w)*A,e[10]=(m*S-h*b+_*v)*A,e[11]=(d*b-u*S-p*v)*A,e[12]=(s*T-o*D-c*w)*A,e[13]=(n*D-r*T+i*w)*A,e[14]=(h*y-m*x-g*v)*A,e[15]=(u*x-d*y+f*v)*A,!0):!1}e.tryInvert=w;function T(e,t){return w(e,t)||console.warn(`non-invertible matrix.`,t),e}e.invert=T;function E(e,t,n){let r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=t[9],p=t[10],m=t[11],h=t[12],g=t[13],_=t[14],v=t[15],y=n[0],b=n[1],x=n[2],S=n[3];return e[0]=y*r+b*s+x*d+S*h,e[1]=y*i+b*c+x*f+S*g,e[2]=y*a+b*l+x*p+S*_,e[3]=y*o+b*u+x*m+S*v,y=n[4],b=n[5],x=n[6],S=n[7],e[4]=y*r+b*s+x*d+S*h,e[5]=y*i+b*c+x*f+S*g,e[6]=y*a+b*l+x*p+S*_,e[7]=y*o+b*u+x*m+S*v,y=n[8],b=n[9],x=n[10],S=n[11],e[8]=y*r+b*s+x*d+S*h,e[9]=y*i+b*c+x*f+S*g,e[10]=y*a+b*l+x*p+S*_,e[11]=y*o+b*u+x*m+S*v,y=n[12],b=n[13],x=n[14],S=n[15],e[12]=y*r+b*s+x*d+S*h,e[13]=y*i+b*c+x*f+S*g,e[14]=y*a+b*l+x*p+S*_,e[15]=y*o+b*u+x*m+S*v,e}e.mul=E;function D(e,t,n,r,i,a){let o=t[0+i],s=t[1+i],c=t[2+i],l=t[3+i],u=t[4+i],d=t[5+i],f=t[6+i],p=t[7+i],m=t[8+i],h=t[9+i],g=t[10+i],_=t[11+i],v=t[12+i],y=t[13+i],b=t[14+i],x=t[15+i],S=n[0+a],C=n[1+a],w=n[2+a],T=n[3+a];return e[0+r]=S*o+C*u+w*m+T*v,e[1+r]=S*s+C*d+w*h+T*y,e[2+r]=S*c+C*f+w*g+T*b,e[3+r]=S*l+C*p+w*_+T*x,S=n[4+a],C=n[5+a],w=n[6+a],T=n[7+a],e[4+r]=S*o+C*u+w*m+T*v,e[5+r]=S*s+C*d+w*h+T*y,e[6+r]=S*c+C*f+w*g+T*b,e[7+r]=S*l+C*p+w*_+T*x,S=n[8+a],C=n[9+a],w=n[10+a],T=n[11+a],e[8+r]=S*o+C*u+w*m+T*v,e[9+r]=S*s+C*d+w*h+T*y,e[10+r]=S*c+C*f+w*g+T*b,e[11+r]=S*l+C*p+w*_+T*x,S=n[12+a],C=n[13+a],w=n[14+a],T=n[15+a],e[12+r]=S*o+C*u+w*m+T*v,e[13+r]=S*s+C*d+w*h+T*y,e[14+r]=S*c+C*f+w*g+T*b,e[15+r]=S*l+C*p+w*_+T*x,e}e.mulOffset=D;function O(e,t,n,r){return E(e,E(e,t,n),r)}e.mul3=O;function k(e,t,n){let r=n[0],i=n[1],a=n[2],o,s,c,l,u,d,f,p,m,h,g,_;return t===e?(e[12]=t[0]*r+t[4]*i+t[8]*a+t[12],e[13]=t[1]*r+t[5]*i+t[9]*a+t[13],e[14]=t[2]*r+t[6]*i+t[10]*a+t[14],e[15]=t[3]*r+t[7]*i+t[11]*a+t[15]):(o=t[0],s=t[1],c=t[2],l=t[3],u=t[4],d=t[5],f=t[6],p=t[7],m=t[8],h=t[9],g=t[10],_=t[11],e[0]=o,e[1]=s,e[2]=c,e[3]=l,e[4]=u,e[5]=d,e[6]=f,e[7]=p,e[8]=m,e[9]=h,e[10]=g,e[11]=_,e[12]=o*r+u*i+m*a+t[12],e[13]=s*r+d*i+h*a+t[13],e[14]=c*r+f*i+g*a+t[14],e[15]=l*r+p*i+_*a+t[15]),e}e.translate=k;function A(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}e.fromTranslation=A;function j(e,t){return e[12]=t[0],e[13]=t[1],e[14]=t[2],e}e.setTranslation=j;function M(e,t,n,r){return e[0]=n[0],e[4]=n[1],e[8]=n[2],e[1]=r[0],e[5]=r[1],e[9]=r[2],e[2]=t[0],e[6]=t[1],e[10]=t[2],e}e.setAxes=M;function ee(e,t,r,i){let a=i[0],o=i[1],s=i[2],c=Math.sqrt(a*a+o*o+s*s);if(Math.abs(c)<1e-6)return n();c=1/c,a*=c,o*=c,s*=c;let l=Math.sin(r),u=Math.cos(r),d=1-u,f=t[0],p=t[1],m=t[2],h=t[3],g=t[4],_=t[5],v=t[6],y=t[7],b=t[8],x=t[9],S=t[10],C=t[11],w=a*a*d+u,T=o*a*d+s*l,E=s*a*d-o*l,D=a*o*d-s*l,O=o*o*d+u,k=s*o*d+a*l,A=a*s*d+o*l,j=o*s*d-a*l,M=s*s*d+u;return e[0]=f*w+g*T+b*E,e[1]=p*w+_*T+x*E,e[2]=m*w+v*T+S*E,e[3]=h*w+y*T+C*E,e[4]=f*D+g*O+b*k,e[5]=p*D+_*O+x*k,e[6]=m*D+v*O+S*k,e[7]=h*D+y*O+C*k,e[8]=f*A+g*j+b*M,e[9]=p*A+_*j+x*M,e[10]=m*A+v*j+S*M,e[11]=h*A+y*j+C*M,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e}e.rotate=ee;function N(e,t,n){let i=n[0],a=n[1],o=n[2],s=Math.sqrt(i*i+a*a+o*o);if(Math.abs(s)<1e-6)return r(e);s=1/s,i*=s,a*=s,o*=s;let c=Math.sin(t),l=Math.cos(t),u=1-l;return e[0]=i*i*u+l,e[1]=a*i*u+o*c,e[2]=o*i*u-a*c,e[3]=0,e[4]=i*a*u-o*c,e[5]=a*a*u+l,e[6]=o*a*u+i*c,e[7]=0,e[8]=i*o*u+a*c,e[9]=a*o*u-i*c,e[10]=o*o*u+l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}e.fromRotation=N;function te(e,t,n){let r=n[0],i=n[1],a=n[2];return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}e.scale=te;function P(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*n,e[9]=t[9]*n,e[10]=t[10]*n,e[11]=t[11]*n,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}e.scaleUniformly=P;function F(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}e.fromScaling=F;function I(e,t){return e[0]=t,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}e.fromUniformScaling=I;let L=[0,0,0],R=[0,0,0];function z(e,t,n){let r=K.cross(L,t,K.unitX);K.dot(r,r)<1e-6&&K.cross(r,t,K.unitY),K.normalize(r,r);let i=K.cross(R,t,r);return K.normalize(i,i),g(e,r,i,t),e[12]=n[0],e[13]=n[1],e[14]=n[2],e}e.fromPlane=z;function B(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[4]=t[3],e[5]=t[4],e[6]=t[5],e[8]=t[6],e[9]=t[7],e[10]=t[8],e}e.fromMat3=B;function V(e,t,n,r){let[i,a,o,s]=n,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,[b,x,S]=r;return e[0]=(1-(m+g))*b,e[1]=(f+y)*b,e[2]=(p-v)*b,e[3]=0,e[4]=(f-y)*x,e[5]=(1-(d+g))*x,e[6]=(h+_)*x,e[7]=0,e[8]=(p+v)*S,e[9]=(h-_)*S,e[10]=(1-(d+m))*S,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}e.compose=V;let H=[0,0,0],U=t();function ne(e,t,n,r){let i=K.magnitude(K.set(H,e[0],e[1],e[2])),a=K.magnitude(K.set(H,e[4],e[5],e[6])),o=K.magnitude(K.set(H,e[8],e[9],e[10]));ie(e)<0&&(i=-i),t[0]=e[12],t[1]=e[13],t[2]=e[14],_(U,e);let s=1/i,c=1/a,l=1/o;return U[0]*=s,U[1]*=s,U[2]*=s,U[4]*=c,U[5]*=c,U[6]*=c,U[8]*=l,U[9]*=l,U[10]*=l,x(n,U),r[0]=i,r[1]=a,r[2]=o,e}e.decompose=ne;function W(e){let t=K(),n=ze(),r=K();return ne(e,t,n,r),{position:t,quaternion:n,scale:r}}e.getDecomposition=W;function re(e){let t=``;for(let n=0;n<4;n++){for(let r=0;r<4;r++)t+=e[4*r+n].toString(),r<3&&(t+=` `);n<3&&(t+=`
`)}return t}e.makeTable=re;function ie(e){let t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m;return _*(d*g-f*h)-v*D+y*E+b*T-x*w+S*C}e.determinant=ie;function ae(e,t){return oe(e,t===void 0?je:t)}e.isRotationAndTranslation=ae;function oe(e,t){let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],p=e[11],m=e[15];return!(!G(m,1,t)||!G(a,0,t)||!G(l,0,t)||!G(p,0,t)||!G(Math.abs(n*(s*f-c*d)-r*(o*f-c*u)+i*(o*d-s*u)),1,t))}function se(e,t){return ce(e,t===void 0?je:t)}e.isTranslationAndUniformScaling=se;function ce(e,t){let n=e[0];return G(e[1],0,t)&&G(e[2],0,t)&&G(e[3],0,t)&&G(e[4],0,t)&&G(e[5],n,t)&&G(e[6],0,t)&&G(e[7],0,t)&&G(e[8],0,t)&&G(e[9],0,t)&&G(e[10],n,t)&&G(e[11],0,t)&&G(e[15],1,t)}function le(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=n+n,s=r+r,c=i+i,l=n*o,u=r*o,d=r*s,f=i*o,p=i*s,m=i*c,h=a*o,g=a*s,_=a*c;return e[0]=1-d-m,e[1]=u+_,e[2]=f-g,e[3]=0,e[4]=u-_,e[5]=1-l-m,e[6]=p+h,e[7]=0,e[8]=f+g,e[9]=p-h,e[10]=1-l-d,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}e.fromQuat=le;function ue(e,t,n){let r=t[0],i=t[1],a=t[2],o=Math.cos(r),s=Math.sin(r),c=Math.cos(i),l=Math.sin(i),u=Math.cos(a),d=Math.sin(a);if(n===`XYZ`){let t=o*u,n=o*d,r=s*u,i=s*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=n+r*l,e[5]=t-i*l,e[9]=-s*c,e[2]=i-t*l,e[6]=r+n*l,e[10]=o*c}else if(n===`YXZ`){let t=c*u,n=c*d,r=l*u,i=l*d;e[0]=t+i*s,e[4]=r*s-n,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-s,e[2]=n*s-r,e[6]=i+t*s,e[10]=o*c}else if(n===`ZXY`){let t=c*u,n=c*d,r=l*u,i=l*d;e[0]=t-i*s,e[4]=-o*d,e[8]=r+n*s,e[1]=n+r*s,e[5]=o*u,e[9]=i-t*s,e[2]=-o*l,e[6]=s,e[10]=o*c}else if(n===`ZYX`){let t=o*u,n=o*d,r=s*u,i=s*d;e[0]=c*u,e[4]=r*l-n,e[8]=t*l+i,e[1]=c*d,e[5]=i*l+t,e[9]=n*l-r,e[2]=-l,e[6]=s*c,e[10]=o*c}else if(n===`YZX`){let t=o*c,n=o*l,r=s*c,i=s*l;e[0]=c*u,e[4]=i-t*d,e[8]=r*d+n,e[1]=d,e[5]=o*u,e[9]=-s*u,e[2]=-l*u,e[6]=n*d+r,e[10]=t-i*d}else if(n===`XZY`){let t=o*c,n=o*l,r=s*c,i=s*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=t*d+i,e[5]=o*u,e[9]=n*d-r,e[2]=r*d-n,e[6]=s*u,e[10]=i*d+t}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}e.fromEuler=ue;function de(e,t,n,r,i,a,o){let s=2*a/(n-t),c=2*a/(r-i),l=(n+t)/(n-t),u=(r+i)/(r-i),d=-(o+a)/(o-a),f=-2*o*a/(o-a);return e[0]=s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=c,e[6]=0,e[7]=0,e[8]=l,e[9]=u,e[10]=d,e[11]=-1,e[12]=0,e[13]=0,e[14]=f,e[15]=0,e}e.perspective=de;function fe(e,t,n,r,i,a,o){let s=1/(n-t),c=1/(r-i),l=1/(o-a),u=(n+t)*s,d=(r+i)*c,f=(o+a)*l;return e[0]=2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=-2*l,e[11]=0,e[12]=-u,e[13]=-d,e[14]=-f,e[15]=1,e}e.ortho=fe;function pe(e,t,n,i){let a,o,s,c,l,u,d,f,p,m,h=t[0],g=t[1],_=t[2],v=i[0],y=i[1],b=i[2],x=n[0],S=n[1],C=n[2];return Math.abs(h-x)<1e-6&&Math.abs(g-S)<1e-6&&Math.abs(_-C)<1e-6?r(e):(d=h-x,f=g-S,p=_-C,m=1/Math.sqrt(d*d+f*f+p*p),d*=m,f*=m,p*=m,a=y*p-b*f,o=b*d-v*p,s=v*f-y*d,m=Math.sqrt(a*a+o*o+s*s),m?(m=1/m,a*=m,o*=m,s*=m):(a=0,o=0,s=0),c=f*s-p*o,l=p*a-d*s,u=d*o-f*a,m=Math.sqrt(c*c+l*l+u*u),m?(m=1/m,c*=m,l*=m,u*=m):(c=0,l=0,u=0),e[0]=a,e[1]=c,e[2]=d,e[3]=0,e[4]=o,e[5]=l,e[6]=f,e[7]=0,e[8]=s,e[9]=u,e[10]=p,e[11]=0,e[12]=-(a*h+o*g+s*_),e[13]=-(c*h+l*g+u*_),e[14]=-(d*h+f*g+p*_),e[15]=1,e)}e.lookAt=pe;function me(e,t,n,r){let i=t[0],a=t[1],o=t[2],s=r[0],c=r[1],l=r[2],u=i-n[0],d=a-n[1],f=o-n[2],p=u*u+d*d+f*f;p>0&&(p=1/Math.sqrt(p),u*=p,d*=p,f*=p);let m=c*f-l*d,h=l*u-s*f,g=s*d-c*u;return p=m*m+h*h+g*g,p>0&&(p=1/Math.sqrt(p),m*=p,h*=p,g*=p),e[0]=m,e[1]=h,e[2]=g,e[3]=0,e[4]=d*g-f*h,e[5]=f*m-u*g,e[6]=u*h-d*m,e[7]=0,e[8]=u,e[9]=d,e[10]=f,e[11]=0,e[12]=i,e[13]=a,e[14]=o,e[15]=1,e}e.targetTo=me;function he(e,t){a(e);for(let n=0;n<4;n++){let r=t[n];f(e,n,r,1)}return e}e.fromPermutation=he;function ge(e){let t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}e.getMaxScaleOnAxis=ge;function _e(e){return{x:K.create(e[0],e[1],e[2]),y:K.create(e[4],e[5],e[6]),z:K.create(e[8],e[9],e[10])}}e.extractBasis=_e;let ve=[1,0,0],ye=[0,1,0],be=[0,0,1],xe=e.rotX90=N(t(),Ve(90),ve),Se=e.rotX180=N(t(),Ve(180),ve),Ce=e.rotY90=N(t(),Ve(90),ye);e.rotY180=N(t(),Ve(180),ye),e.rotY270=N(t(),Ve(270),ye);let we=e.rotZ90=N(t(),Ve(90),be),Te=e.rotZ180=N(t(),Ve(180),be);e.rotXY90=E(t(),xe,Ce);let Ee=e.rotZY90=E(t(),we,Ce);e.rotZYZ90=E(t(),Ee,we),e.rotZ90X180=E(t(),we,Se),e.rotY90Z180=E(t(),Ce,Te),e.id=n()})(Ge||={})})))()}function K(){return K.zero()}var qe;function Je(){return(Je=e((()=>{Ke(),Me(),qe=isFinite,(function(e){function t(){let e=[.1,0,0];return e[0]=0,e}e.zero=t;function n(e){let n=t();return n[0]=e[0],n[1]=e[1],n[2]=e[2],n}e.clone=n;function r(e){return Array.isArray(e)&&e.length===3}e.is=r;function i(e){return qe(e[0])&&qe(e[1])&&qe(e[2])}e.isFinite=i;function a(e){return Number.isInteger(e[0])&&Number.isInteger(e[1])&&Number.isInteger(e[2])}e.isInteger=a;function o(e){return Number.isNaN(e[0])||Number.isNaN(e[1])||Number.isNaN(e[2])}e.hasNaN=o;function s(e){return e[0]=NaN,e[1]=NaN,e[2]=NaN,e}e.setNaN=s;function c(e){return f(e.x,e.y,e.z)}e.fromObj=c;function l(e){return{x:e[0],y:e[1],z:e[2]}}e.toObj=l;function u(e,t,n){return e[0]=t[n+0],e[1]=t[n+1],e[2]=t[n+2],e}e.fromArray=u;function d(e,t,n){return t[n+0]=e[0],t[n+1]=e[1],t[n+2]=e[2],t}e.toArray=d;function f(e,n,r){let i=t();return i[0]=e,i[1]=n,i[2]=r,i}e.create=f;function p(e){let n=t();return n[0]=e[0],n[1]=e[1],n[2]=e[2],n}e.ofArray=p;function m(e,t,n,r){return e[0]=t,e[1]=n,e[2]=r,e}e.set=m;function h(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}e.copy=h;function g(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e}e.add=g;function _(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}e.sub=_;function v(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e}e.mul=v;function y(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e}e.div=y;function b(e,t,n){return e[0]=t[0]%n[0],e[1]=t[1]%n[1],e[2]=t[2]%n[2],e}e.mod=b;function x(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}e.scale=x;function S(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e}e.scaleAndAdd=S;function C(e,t,n,r){return e[0]=t[0]-n[0]*r,e[1]=t[1]-n[1]*r,e[2]=t[2]-n[2]*r,e}e.scaleAndSub=C;function w(e,t,n){return e[0]=t[0]+n,e[1]=t[1]+n,e[2]=t[2]+n,e}e.addScalar=w;function T(e,t,n){return e[0]=t[0]-n,e[1]=t[1]-n,e[2]=t[2]-n,e}e.subScalar=T;function E(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e}e.round=E;function D(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}e.ceil=D;function O(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}e.floor=O;function k(e,t){return e[0]=Math.trunc(t[0]),e[1]=Math.trunc(t[1]),e[2]=Math.trunc(t[2]),e}e.trunc=k;function A(e,t){return e[0]=Math.abs(t[0]),e[1]=Math.abs(t[1]),e[2]=Math.abs(t[2]),e}e.abs=A;function j(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e}e.min=j;function M(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e}e.max=M;function ee(e,t,n,r){return e[0]=Math.max(n[0],Math.min(r[0],t[0])),e[1]=Math.max(n[1],Math.min(r[1],t[1])),e[2]=Math.max(n[2],Math.min(r[2],t[2])),e}e.clamp=ee;function N(e,t){let n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2];return Math.sqrt(n*n+r*r+i*i)}e.distance=N;function te(e,t){let n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2];return n*n+r*r+i*i}e.squaredDistance=te;function P(e){let t=e[0],n=e[1],r=e[2];return Math.sqrt(t*t+n*n+r*r)}e.magnitude=P;function F(e){let t=e[0],n=e[1],r=e[2];return t*t+n*n+r*r}e.squaredMagnitude=F;function I(e,t,n){return x(e,z(e,t),n)}e.setMagnitude=I;function L(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}e.negate=L;function R(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}e.inverse=R;function z(e,t){let n=t[0],r=t[1],i=t[2],a=n*n+r*r+i*i;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e}e.normalize=z;function B(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}e.dot=B;function V(e,t,n){let r=t[0],i=t[1],a=t[2],o=n[0],s=n[1],c=n[2];return e[0]=i*c-a*s,e[1]=a*o-r*c,e[2]=r*s-i*o,e}e.cross=V;function H(e,t,n,r){let i=t[0],a=t[1],o=t[2];return e[0]=i+r*(n[0]-i),e[1]=a+r*(n[1]-a),e[2]=o+r*(n[2]-o),e}e.lerp=H;let U=t();function ne(e,t,n,r){let i=Ie(B(t,n),-1,1),a=Math.acos(i)*r;return S(U,n,t,-i),z(U,U),g(e,x(e,t,Math.cos(a)),x(U,U,Math.sin(a)))}e.slerp=ne;function W(e,t,n,r,i,a){let o=a*a,s=o*(2*a-3)+1,c=o*(a-2)+a,l=o*(a-1),u=o*(3-2*a);return e[0]=t[0]*s+n[0]*c+r[0]*l+i[0]*u,e[1]=t[1]*s+n[1]*c+r[1]*l+i[1]*u,e[2]=t[2]*s+n[2]*c+r[2]*l+i[2]*u,e}e.hermite=W;function re(e,t,n,r,i,a){let o=1-a,s=o*o,c=a*a,l=s*o,u=3*a*s,d=3*c*o,f=c*a;return e[0]=t[0]*l+n[0]*u+r[0]*d+i[0]*f,e[1]=t[1]*l+n[1]*u+r[1]*d+i[1]*f,e[2]=t[2]*l+n[2]*u+r[2]*d+i[2]*f,e}e.bezier=re;function ie(e,t,n,r,i){return e[0]=Re(t[0],n[0],r[0],i),e[1]=Re(t[1],n[1],r[1],i),e[2]=Re(t[2],n[2],r[2],i),e}e.quadraticBezier=ie;function ae(e,t,n,r,i,a,o){return e[0]=Le(t[0],n[0],r[0],i[0],a,o),e[1]=Le(t[1],n[1],r[1],i[1],a,o),e[2]=Le(t[2],n[2],r[2],i[2],a,o),e}e.spline=ae;function oe(e,t){let n=Math.random()*2*Math.PI,r=Math.random()*2-1,i=Math.sqrt(1-r*r)*t;return e[0]=Math.cos(n)*i,e[1]=Math.sin(n)*i,e[2]=r*t,e}e.random=oe;function se(e,t,n){let r=t[0],i=t[1],a=t[2],o=1/(n[3]*r+n[7]*i+n[11]*a+n[15]||1);return e[0]=(n[0]*r+n[4]*i+n[8]*a+n[12])*o,e[1]=(n[1]*r+n[5]*i+n[9]*a+n[13])*o,e[2]=(n[2]*r+n[6]*i+n[10]*a+n[14])*o,e}e.transformMat4=se;function ce(e,t,n){let r=t[0],i=t[1],a=t[2];return e[0]=n[0]*r+n[4]*i+n[8]*a,e[1]=n[1]*r+n[5]*i+n[9]*a,e[2]=n[2]*r+n[6]*i+n[10]*a,z(e,e)}e.transformDirection=ce;function le(e,t,n,r,i,a){let o=t[0+i],s=t[1+i],c=t[2+i],l=1/(n[3+a]*o+n[7+a]*s+n[11+a]*c+n[15+a]||1);return e[0+r]=(n[0+a]*o+n[4+a]*s+n[8+a]*c+n[12+a])*l,e[1+r]=(n[1+a]*o+n[5+a]*s+n[9+a]*c+n[13+a])*l,e[2+r]=(n[2+a]*o+n[6+a]*s+n[10+a]*c+n[14+a])*l,e}e.transformMat4Offset=le;function ue(e,t,n,r,i,a){let o=t[0+i],s=t[1+i],c=t[2+i];e[0+r]=n[0+a]*o+n[4+a]*s+n[8+a]*c,e[1+r]=n[1+a]*o+n[5+a]*s+n[9+a]*c,e[2+r]=n[2+a]*o+n[6+a]*s+n[10+a]*c;let l=Math.hypot(e[0+r],e[1+r],e[2+r]);return l>0&&(e[0+r]/=l,e[1+r]/=l,e[2+r]/=l),e}e.transformDirectionOffset=ue;function de(e,t,n){let r=t[0],i=t[1],a=t[2];return e[0]=r*n[0]+i*n[3]+a*n[6],e[1]=r*n[1]+i*n[4]+a*n[7],e[2]=r*n[2]+i*n[5]+a*n[8],e}e.transformMat3=de;function fe(e,t,n){let r=t[0],i=t[1],a=t[2],o=n[0],s=n[1],c=n[2],l=n[3],u=l*r+s*a-c*i,d=l*i+c*r-o*a,f=l*a+o*i-s*r,p=-o*r-s*i-c*a;return e[0]=u*l+p*-o+d*-c-f*-s,e[1]=d*l+p*-s+f*-o-u*-c,e[2]=f*l+p*-c+u*-s-d*-o,e}e.transformQuat=fe;function pe(e,t){let n=Math.sqrt(F(e)*F(t));if(n===0)return Math.PI/2;let r=B(e,t)/n;return Math.acos(Ie(r,-1,1))}e.angle=pe;let me=t(),he=t(),ge=t(),_e=t(),ve=t(),ye=t(),be=t();function xe(e,t,n,r){_(me,e,t),_(he,n,t),_(ge,t,n),_(_e,r,n),V(ve,me,he),V(ye,ge,_e);let i=pe(ve,ye);return V(be,ve,ye),B(he,be)>0?i:-i}e.dihedralAngle=xe;function Se(e,t,n,r){return K.set(e,r*Math.cos(n)*Math.sin(t),r*Math.sin(n)*Math.sin(t),r*Math.cos(t))}e.directionFromSpherical=Se;function Ce(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}e.exactEquals=Ce;function we(e,t){let n=e[0],r=e[1],i=e[2],a=t[0],o=t[1],s=t[2];return Math.abs(n-a)<=1e-6*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(r-o)<=1e-6*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(i-s)<=1e-6*Math.max(1,Math.abs(i),Math.abs(s))}e.equals=we;let Te=t();function Ee(e,t,n){let r=pe(t,n);if(Math.abs(r)<1e-4)return Ge.setIdentity(e);if(Math.abs(r-Math.PI)<1e-6)return Ge.fromRotation(e,Math.PI,Math.abs(t[0])<.9?K.unitX:K.unitZ);let i=V(Te,t,n);return Ge.fromRotation(e,r,i)}e.makeRotation=Ee;let De=K();function Oe(e,t,n,r){let i=Math.cos(r),a=Math.sin(r),o=K.dot(t,n);return K.cross(De,n,t),e[0]=t[0]*i+De[0]*a+n[0]*o*(1-i),e[1]=t[1]*i+De[1]*a+n[1]*o*(1-i),e[2]=t[2]*i+De[2]*a+n[2]*o*(1-i),e}e.rotateAroundAxis=Oe;function ke(e){return e[0]===0&&e[1]===0&&e[2]===0}e.isZero=ke;function Ae(e,t,n,r){return _(e,t,r),g(e,x(e,n,B(n,e)/F(n)),r)}e.projectPointOnVector=Ae;let G=t();function je(e,t,n,r){return z(G,n),_(e,t,r),_(e,t,x(G,G,B(e,G)))}e.projectPointOnPlane=je;function Me(e,t,n){return x(e,n,B(n,t)/F(n))}e.projectOnVector=Me;let Ne=t();function Pe(e,t,n){return Me(Ne,t,n),_(e,t,Ne)}e.projectOnPlane=Pe;function Fe(e,t,n){return z(e,V(e,V(e,t,n),t)),!K.isZero(e)||(e[0]=1,e[1]=0,e[2]=0,z(e,V(e,V(e,t,e),t)),!K.isZero(e))||(e[0]=0,e[1]=1,e[2]=0,z(e,V(e,V(e,t,e),t)),!K.isZero(e))||(z(e,n),!K.isZero(e))||(e[0]=1,e[1]=0,e[2]=0),e}e.orthogonalize=Fe;function ze(e,t,n){return B(t,n)>0?h(e,t):L(e,h(e,t)),e}e.matchDirection=ze;function Be(e,n){if(ke(n))return h(e,K.unitX);{let r=t();return Math.abs(n[0])<Math.abs(n[1])&&Math.abs(n[0])<Math.abs(n[2])?(r[0]=0,r[1]=n[2],r[2]=-n[1]):Math.abs(n[1])<Math.abs(n[2])?(r[0]=-n[2],r[1]=0,r[2]=n[0]):(r[0]=n[1],r[1]=-n[0],r[2]=0),z(e,r)}}e.orthogonalDirection=Be;let Ve=t(),He=t();function Ue(e,t,n,r){return _(Ve,n,t),_(He,r,t),z(e,V(e,Ve,He))}e.triangleNormal=Ue;let We=t();function Ke(e,t,n){return K.scaleAndAdd(e,t,K.sub(We,n,t),.5)}e.center=Ke;function Je(e,t){return`[${e[0].toPrecision(t)} ${e[1].toPrecision(t)} ${e[2].toPrecision(t)}]`}e.toString=Je,e.origin=f(0,0,0),e.unit=f(1,1,1),e.negUnit=f(-1,-1,-1),e.unitX=f(1,0,0),e.unitY=f(0,1,0),e.unitZ=f(0,0,1),e.negUnitX=f(-1,0,0),e.negUnitY=f(0,-1,0),e.negUnitZ=f(0,0,-1)})(K||={})})))()}function Ye(e){if(typeof e!=`object`||!e)return e;if(e instanceof Array){let t=[];for(let n=0,r=e.length;n<r;n++)t[n]=Ye(e[n]);return t}if(typeof e==`object`&&!(`prototype`in e)){let t={};for(let n in e)Xe.call(e,n)&&(t[n]=Ye(e[n]));return t}throw Error(`Can't clone, type "${typeof e}" unsupported`)}var Xe;function Ze(){return(Ze=e((()=>{Xe=Object.prototype.hasOwnProperty})))()}function Qe(e,t=` `){return e.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g,`$1${t}$2`)}function $e(e){return et(Qe(e))}function et(e){return e.toLowerCase().replace(/^\w|\s\w/g,it)}function tt(e){return e.replace(/_/g,` `)}function nt(e){return e.replace(/-/g,` `)}function rt(e){return et(Qe(tt(nt(e))))}var it;function at(){return(at=e((()=>{it=e=>e.toUpperCase()})))()}function ot(){return ot.zero()}function st(){return(st=e((()=>{gt(),lt(),We(),(function(e){function t(){let e=[.1,0,0];return e[0]=0,e}e.zero=t;function n(e,n,r){let i=t();return i[0]=e,i[1]=n,i[2]=r,i}e.create=n;function r(e,t,n,r){return e[0]=t,e[1]=n,e[2]=r,e}e.set=r;function i(e,t){let n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2];return Math.sqrt(n*n+r*r+i*i)}e.distance=i;function a(e,t){let[n,r,i]=mt.toRgb(t),[a,o,s]=T(n,r,i),c=116*o-16;return e[0]=c<0?0:c,e[1]=500*(a-o),e[2]=200*(o-s),e}e.fromColor=a;function o(e,t){return ct.toLab(e,t)}e.fromHcl=o;function s(e){let t=(e[0]+16)/116,n=isNaN(e[1])?t:t+e[1]/500,r=isNaN(e[2])?t:t-e[2]/200;t=_*S(t),n=g*S(n),r=v*S(r);let i=x(3.2404542*n-1.5371385*t-.4985314*r),a=x(-.969266*n+1.8760108*t+.041556*r),o=x(.0556434*n-.2040259*t+1.0572252*r);return mt.fromRgb(Math.round(Ie(i,0,255)),Math.round(Ie(a,0,255)),Math.round(Ie(o,0,255)))}e.toColor=s;function c(e,t){let[n,r,i]=t,a=Math.sqrt(r*r+i*i),o=(He(Math.atan2(i,r))+360)%360;return Math.round(a*1e4)===0&&(o=NaN),e[0]=o,e[1]=a,e[2]=n,e}e.toHcl=c;function l(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}e.copy=l;function u(e,t,n){return e[0]=t[0]-h*n,e[1]=t[1],e[2]=t[2],e}e.darken=u;function d(e,t,n){return u(e,t,-n)}e.lighten=d;let f=[0,0,0];function p(e,t,n){return c(f,t),ct.toLab(e,ct.saturate(f,f,n))}e.saturate=p;function m(e,t,n){return p(e,t,-n)}e.desaturate=m;let h=18,g=.95047,_=1,v=1.08883,y=.137931034,b=.12841855;function x(e){return 255*(e<=.00304?12.92*e:1.055*e**(1/2.4)-.055)}function S(e){return e>.206896552?e*e*e:b*(e-y)}function C(e){return(e/=255)<=.04045?e/12.92:((e+.055)/1.055)**2.4}function w(e){return e>.008856452?e**(1/3):e/b+y}function T(e,t,n){return e=C(e),t=C(t),n=C(n),[w((.4124564*e+.3575761*t+.1804375*n)/g),w((.2126729*e+.7151522*t+.072175*n)/1),w((.0193339*e+.119192*t+.9503041*n)/v)]}})(ot||={})})))()}function ct(){return ct.zero()}function lt(){return(lt=e((()=>{We(),st(),(function(e){function t(){let e=[.1,0,0];return e[0]=0,e}e.zero=t;function n(e,n,r){let i=t();return i[0]=e,i[1]=n,i[2]=r,i}e.create=n;function r(e,t,n,r){return e[0]=t,e[1]=n,e[2]=r,e}e.set=r;function i(e){return!isNaN(e[0])}e.hasHue=i;let a=[0,0,0];function o(e,t){return ot.toHcl(e,ot.fromColor(a,t))}e.fromColor=o;function s(e,t){return ot.toHcl(e,t)}e.fromLab=s;let c=[0,0,0];function l(e){return ot.toColor(u(c,e))}e.toColor=l;function u(e,t){let[n,r,i]=t;return isNaN(n)&&(n=0),n=Ve(n),e[0]=i,e[1]=Math.cos(n)*r,e[2]=Math.sin(n)*r,e}e.toLab=u;function d(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}e.copy=d;function f(e,t,n){return e[0]=t[0],e[1]=Math.max(0,t[1]+_*n),e[2]=t[2],e}e.saturate=f;function p(e,t,n){return f(e,t,-n)}e.desaturate=p;let m=[0,0,0];function h(e,t,n){return u(m,t),ot.toHcl(e,ot.darken(m,m,n))}e.darken=h;function g(e,t,n){return h(e,t,-n)}e.lighten=g;let _=18})(ct||={})})))()}function ut(){return ut.zero()}function dt(){return(dt=e((()=>{(function(e){function t(){let e=[.1,0,0];return e[0]=0,e}e.zero=t;function n(e,t){return e[0]=(t>>16&255)/255,e[1]=(t>>8&255)/255,e[2]=(t&255)/255,e}e.fromColor=n;function r(e){return e[0]*255<<16|e[1]*255<<8|e[2]*255}e.toColor=r})(ut||={})})))()}function ft(){return ft.zero()}function pt(){return(pt=e((()=>{dt(),(function(e){function t(){let e=[.1,0,0];return e[0]=0,e}e.zero=t;let n=ut();function r(e,t){return ut.fromColor(n,t),ft.fromRgb(e,n)}e.fromColor=r;function i(e){return c(n,e),ut.toColor(n)}e.toColor=i;function a(e,t){let[n,r,i]=t,a=Math.min(n,r,i),o=Math.max(n,r,i),s=(o+a)/2,c=0,l=0;return o===a?(c=0,l=NaN):c=s<.5?(o-a)/(o+a):(o-a)/(2-o-a),n===o?l=(r-i)/(o-a):r===o?l=2+(i-n)/(o-a):i===o&&(l=4+(n-r)/(o-a)),l*=60,l<0&&(l+=360),e[0]=l,e[1]=c,e[2]=s,e}e.fromRgb=a;let o=[0,0,0],s=[0,0,0];function c(e,t){let[n,r,i]=t,a,c,l;if(r===0)a=c=l=i;else{let e=o,t=s,u=i<.5?i*(1+r):i+r-i*r,d=2*i-u,f=n/360;e[0]=f+1/3,e[1]=f,e[2]=f-1/3;for(let n=0;n<3;n++)e[n]<0&&(e[n]+=1),e[n]>1&&--e[n],6*e[n]<1?t[n]=d+(u-d)*6*e[n]:2*e[n]<1?t[n]=u:3*e[n]<2?t[n]=d+(u-d)*(2/3-e[n])*6:t[n]=d;a=t[0],c=t[1],l=t[2]}return e[0]=a,e[1]=c,e[2]=l,e}e.toRgb=c;function l(e,t,n,r){let i=t,a=n,[o,s,c]=i,[l,u,d]=a,f,p,m;!isNaN(o)&&!isNaN(l)?(m=l>o&&l-o>180?l-(o+360):l<o&&o-l>180?l+360-o:l-o,p=o+r*m):isNaN(o)?isNaN(l)?p=NaN:(p=l,(c===1||c===0)&&(f=u)):(p=o,(d===1||d===0)&&(f=s)),f===void 0&&(f=s+r*(u-s));let h=c+r*(d-c);return e[0]=p,e[1]=f,e[2]=h,e}e.interpolate=l})(ft||={})})))()}function mt(e){return e}function q(e,t,n,r){return{label:e,description:n,list:r,type:t}}function ht(e){return e}function gt(){return(gt=e((()=>{lt(),st(),pt(),(function(e){function t(e){return`rgb(${e>>16&255}, ${e>>8&255}, ${e&255})`}e.toStyle=t;function n(e){return`#`+(`000000`+e.toString(16)).slice(-6)}e.toHexStyle=n;function r(e){return`0x`+(`000000`+e.toString(16)).slice(-6)}e.toHexString=r;function i(e){return`RGB: ${mt.toRgb(e).join(`, `)}`}e.toRgbString=i;function a(e){return[e>>16&255,e>>8&255,e&255]}e.toRgb=a;function o(e){return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}e.toRgbNormalized=o;function s(e){return parseInt(e.replace(`#`,`0x`))}e.fromHexStyle=s;function c(e){return parseInt(e)}e.fromHexString=c;function l(e,t,n){return e<<16|t<<8|n}e.fromRgb=l;function u(e,t,n){return e*255<<16|t*255<<8|n*255}e.fromNormalizedRgb=u;function d(e,t){return l(e[t],e[t+1],e[t+2])}e.fromArray=d;function f(e,t){return u(e[t],e[t+1],e[t+2])}e.fromNormalizedArray=f;function p(e){return typeof e==`number`?e:e[0]}e.fromColorListEntry=p;function m(e,t,n){return t[n]=e>>16&255,t[n+1]=e>>8&255,t[n+2]=e&255,t}e.toArray=m;function h(e,t,n){return t[n]=(e>>16&255)/255,t[n+1]=(e>>8&255)/255,t[n+2]=(e&255)/255,t}e.toArrayNormalized=h;function g(e,t){return e[0]=t>>16&255,e[1]=t>>8&255,e[2]=t&255,e}e.toVec3=g;function _(e,t){return e[0]=(t>>16&255)/255,e[1]=(t>>8&255)/255,e[2]=(t&255)/255,e}e.toVec3Normalized=_;function v(e,t,n){let r=e>>16&255,i=e>>8&255,a=e&255,o=t>>16&255,s=t>>8&255,c=t&255,l=r+(o-r)*n,u=i+(s-i)*n,d=a+(c-a)*n;return l<<16|u<<8|d}e.interpolate=v;let y=ft.zero(),b=ft.zero();function x(e,t,n){let r=ft.fromColor(y,e),i=ft.fromColor(b,t);return ft.interpolate(r,r,i,n),ft.toColor(r)}e.interpolateHsl=x;function S(e){let t=e>>16&255,n=e>>8&255,r=e&255;return t!==n||t!==r}e.hasHue=S;let C=[0,0,0];function w(e,t){return S(e)?(ct.fromColor(C,e),ct.toColor(ct.saturate(C,C,t))):e}e.saturate=w;function T(e,t){return w(e,-t)}e.desaturate=T;let E=[0,0,0];function D(e,t){return ot.fromColor(E,e),ot.toColor(ot.darken(E,E,t))}e.darken=D;function O(e,t){return D(e,-t)}e.lighten=O;function k(e){return e<=.03928?e/12.92:((e+.055)/1.055)**2.4}function A(e){let t=k((e>>16&255)/255),n=k((e>>8&255)/255),r=k((e&255)/255);return .2126*t+.7152*n+.0722*r}e.luminance=A;function j(e,t){let n=A(e),r=A(t);return n>r?(n+.05)/(r+.05):(r+.05)/(n+.05)}e.contrast=j;function M(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function ee(e){return u(M((e>>16&255)/255),M((e>>8&255)/255),M((e&255)/255))}e.sRGBToLinear=ee;function N(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}function te(e){return u(N((e>>16&255)/255),N((e>>8&255)/255),N((e&255)/255))}e.linearToSRGB=te})(mt||={})})))()}function _t(e){return e in J?J[e]:(console.warn(`unknown color list named '${e}'`),J[`red-yellow-blue`])}var J,vt,yt;function bt(){return(bt=e((()=>{at(),gt(),J={reds:q(`Reds`,`sequential`,`Reds, sequential color scheme from ColorBrewer 2.0`,[16774640,16703698,16563105,16552562,16476746,15678252,13309981,10817301,6750221]),oranges:q(`Oranges`,`sequential`,`Oranges, sequential color scheme from ColorBrewer 2.0`,[16774635,16705230,16634018,16625259,16616764,15821075,14239745,10892803,8333060]),greens:q(`Greens`,`sequential`,`Greens, sequential color scheme from ColorBrewer 2.0`,[16252149,15070688,13101504,10607003,7652470,4303709,2329413,27948,17435]),blues:q(`Blues`,`sequential`,`Blues, sequential color scheme from ColorBrewer 2.0`,[16251903,14609399,13032431,10406625,7057110,4362950,2191797,545180,536683]),purples:q(`Purples`,`sequential`,`Purples, sequential color scheme from ColorBrewer 2.0`,[16579581,15724021,14342891,12369372,10394312,8420794,6967715,5515151,4128893]),greys:q(`Greys`,`sequential`,`Greys, sequential color scheme from ColorBrewer 2.0`,[16777215,15790320,14277081,12434877,9868950,7566195,5395026,2434341,0]),"orange-red":q(`Orange-Red`,`sequential`,`OrRd, sequential color scheme from ColorBrewer 2.0`,[16775148,16705736,16635038,16628612,16551257,15689032,14102559,11730944,8323072]),"blue-green":q(`Blue-Green`,`sequential`,`BuGn, sequential color scheme from ColorBrewer 2.0`,[16252157,15070713,13429990,10082505,6734500,4304502,2329413,27948,17435]),"purple-blue-green":q(`Purple-Blue-Green`,`sequential`,`PuBuGn, sequential color scheme from ColorBrewer 2.0`,[16775163,15524592,13685222,10927579,6793679,3576e3,164234,93273,83510]),"green-blue":q(`Green-Blue`,`sequential`,`GnBu, sequential color scheme from ColorBrewer 2.0`,[16252144,14742491,13429701,11066805,8113348,5157843,2854078,551084,540801]),"purple-blue":q(`Purple-Blue`,`sequential`,`PuBu, sequential color scheme from ColorBrewer 2.0`,[16775163,15525874,13685222,10927579,7645647,3576e3,356528,285325,145496]),"blue-purple":q(`Blue-Purple`,`sequential`,`BuPu, sequential color scheme from ColorBrewer 2.0`,[16252157,14740724,12571622,10403034,9213638,9202609,8929693,8458108,5046347]),"red-purple":q(`Red-Purple`,`sequential`,`RdPu, sequential color scheme from ColorBrewer 2.0`,[16775155,16638173,16565696,16424885,16214177,14496919,11403646,7995767,4784234]),"purple-red":q(`Purple-Red`,`sequential`,`PuRd, sequential color scheme from ColorBrewer 2.0`,[16250105,15196655,13941210,13210823,14640560,15149450,13505110,9961539,6750239]),"yellow-orange-red":q(`Yellow-Orange-Red`,`sequential`,`YlOrRd, sequential color scheme from ColorBrewer 2.0`,[16777164,16772512,16701814,16691788,16616764,16535082,14883356,12386342,8388646]),"yellow-orange-brown":q(`Yellow-Orange-Brown`,`sequential`,`YlOrBr, sequential color scheme from ColorBrewer 2.0`,[16777189,16775100,16704401,16696399,16685353,15495188,13388802,10040324,6694150]),"yellow-green":q(`Yellow-Green`,`sequential`,`YlGn, sequential color scheme from ColorBrewer 2.0`,[16777189,16252089,14282915,11394446,7915129,4303709,2327619,26679,17705]),"yellow-green-blue":q(`Yellow-Green-Blue`,`sequential`,`YlGnBu, sequential color scheme from ColorBrewer 2.0`,[16777177,15595697,13101492,8375739,4306628,1937856,2252456,2438292,531800]),"red-blue":q(`Red-Blue`,`diverging`,`RdBu, diverging color scheme from ColorBrewer 2.0`,[6750239,11671595,14049357,16033154,16636871,16250871,13755888,9618910,4428739,2188972,340065]),"red-grey":q(`Red-Grey`,`diverging`,`RdGy, diverging color scheme from ColorBrewer 2.0`,[6750239,11671595,14049357,16033154,16636871,16777215,14737632,12237498,8882055,5066061,1710618]),"pink-yellow-green":q(`Pink-Yellow-Green`,`diverging`,`PiYG, diverging color scheme from ColorBrewer 2.0`,[9306450,12917629,14579630,15840986,16638191,16250871,15136208,12116358,8371265,5083681,2581529]),"brown-white-green":q(`Brown-White-Green`,`diverging`,`BrBG, diverging color scheme from ColorBrewer 2.0`,[5517317,9195786,12550445,14664317,16181443,16119285,13101797,8441281,3512207,91742,15408]),"purple-green":q(`Purple-Green`,`diverging`,`PRGn, diverging color scheme from ColorBrewer 2.0`,[4194379,7744131,10055851,12756431,15193320,16250871,14282963,10935200,5942881,1800247,17435]),"purple-orange":q(`Purple-Orange`,`diverging`,`PuOr, diverging color scheme from ColorBrewer 2.0`,[2949195,5515144,8418220,11709394,14211819,16250871,16703670,16627811,14713364,11753478,8338184]),"orange-purple":q(`Orange-Purple`,`diverging`,`Reversed PuOr, diverging color scheme from ColorBrewer 2.0`,[8338184,11753478,14713364,16627811,16703670,16250871,14211819,11709394,8418220,5515144,2949195]),"red-yellow-green":q(`Red-Yellow-Green`,`diverging`,`RdYlGn, diverging color scheme from ColorBrewer 2.0`,[10813478,14102567,16018755,16625249,16703627,16777151,14282635,10934634,6733155,1742928,26679]),"red-yellow-blue":q(`Red-Yellow-Blue`,`diverging`,`RdYlBu, diverging color scheme from ColorBrewer 2.0`,[10813478,14102567,16018755,16625249,16703632,16777151,14742520,11262441,7646673,4552116,3225237]),spectral:q(`Spectral`,`diverging`,`Spectral, diverging color scheme from ColorBrewer 2.0`,[10355010,13975119,16018755,16625249,16703627,16777151,15136152,11263396,6734501,3311805,6180770]),magma:q(`Magma`,`sequential`,`Magma, sequential color scheme from Matplotlib, perceptually uniform shades of black-red-white`,[4,131595,328726,591648,920363,1314358,1708098,2167117,2691418,3346535,3870576,4460406,4985210,5510013,5969279,6560384,7019905,7676289,8135554,8660609,9185665,9710720,10235519,10826110,11351164,12007289,12532343,13057395,13516656,14042475,14567784,14962532,15357537,15687006,16017244,16216156,16349533,16483167,16551011,16619112,16686957,16689523,16692347,16694658,16696970,16699282,16701594,16638627,16640940,16577718,16580031]),"magma-no-black":q(`Magma (no black)`,`sequential`,`Magma, sequential color scheme from Matplotlib, perceptually uniform shades of black-red-white (with the black region removed)`,[4329332,4853881,5378684,5903742,6363263,6888576,7413633,7938689,8463745,8988801,9513600,10038655,10563454,11088508,11613562,12138360,12728949,13254258,13714030,14239338,14699366,15094114,15489119,15753309,16017499,16216411,16350045,16483424,16551523,16619368,16621934,16689780,16692091,16694402,16696969,16633746,16636058,16638371,16575148,16577461,16514239]),inferno:q(`Inferno`,`sequential`,`Inferno, sequential color scheme from Matplotlib, perceptually uniform shades of black-red-yellow`,[4,131596,328727,657186,1050925,1444665,1969221,2427985,3082843,3737955,4328040,4852843,5377645,5902702,6427502,6952814,7477870,8133997,8659051,9184105,9643623,10168676,10693729,11218782,11743834,12334932,12794703,13254730,13583429,14109502,14504250,14833460,15162926,15427112,15757088,15955993,16154643,16288012,16421383,16489222,16557322,16559634,16497183,16434218,16305463,16176966,16048470,15919721,15921789,16120210,16580516]),"inferno-no-black":q(`Inferno (no black)`,`sequential`,`Inferno, sequential color scheme from Matplotlib, perceptually uniform shades of black-red-yellow (with the black region removed)`,[4721514,5246316,5771373,6296430,6821486,7346542,7871597,8396651,8921450,9446504,9971557,10496610,10956127,11481435,12006486,12466258,12926285,13386056,13780802,14241085,14570295,14965297,15229227,15558693,15757342,15956248,16154897,16288267,16421638,16489734,16492043,16494612,16496926,16368426,16305463,16111429,15982678,15853928,15856253,16119953,16580260]),plasma:q(`Plasma`,`sequential`,`Plasma, sequential color scheme from Matplotlib, perceptually uniform shades of blue-red-yellow`,[1771148,2426257,3081365,3671193,4195228,4784799,5308834,5833124,6357158,6815911,7340200,7864744,8324007,8783782,9309348,9769377,10164126,10624154,11018902,11413393,11808141,12137352,12466307,12795519,13124730,13453685,13717361,14046573,14309992,14573668,14837344,15035483,15299159,15497299,15695438,15893834,16091974,16224833,16357693,16425017,16557877,16625457,16627245,16629289,16631334,16567845,16438820,16310052,16115494,15921190,15726625]),viridis:q(`Viridis`,`sequential`,`Viridis, sequential color scheme from Matplotlib, perceptually uniform shades of blue-green-yellow`,[4524123,4656994,4658793,4726127,4727668,4663929,4599933,4535937,4406404,4276870,4081800,3952010,3822475,3627148,3497356,3302029,3172237,3042446,2912654,2782862,2652814,2523022,2393229,2328973,2198924,2069132,2004874,2005897,2007175,2139525,2337154,2666111,3060348,3520376,4045684,4570991,5227369,5883748,6605661,7392854,8180303,8967495,9819967,10672695,11525166,12443174,13295646,14148121,15000344,15852828,16639780]),cividis:q(`Cividis`,`sequential`,`Cividis, sequential color scheme from Matplotlib, perceptually uniform shades of blue-grey-yellow, should look effectively identical to colorblind and non-colorblind users`,[8273,9305,10079,76644,339560,668266,1062508,1390957,1916270,2375790,2835566,3295342,3754862,4214638,4543085,5068397,5462638,5856878,6185326,6579567,6908272,7236721,7499890,7828595,8091764,8354933,8617846,8946551,9209463,9472888,9736056,10064760,10327928,10656632,10985591,11379830,11708532,12102770,12497264,12891501,13285994,13745766,14140259,14600287,14994522,15389014,15717970,16046926,16310347,16508232,16640581]),twilight:q(`Twilight`,`cyclical`,`Twilight, cyclical color scheme from Matplotlib, perceptually uniform shades of white-blue-black-red-white`,[14670305,14211037,13554648,12766675,11847630,10993866,10139847,9351365,8628419,8036290,7509952,7048895,6718653,6519739,6386105,6252470,6184114,6181293,6112935,6044831,5976470,5777291,5447293,5052270,4592479,4067665,3674181,3281211,3150646,3543352,4067644,4657728,5379141,6166345,6953549,7741007,8463184,9120336,9777743,10304079,10830671,11291984,11687762,12083541,12348505,12613471,12878439,13077872,13211771,13411209,13545111,13809830,14074293,14338756,14537169,14735067,14801121]),"set-2":q(`Set-2`,`qualitative`,`Set2, categorical color scheme from ColorBrewer 2.0`,[6734501,16551266,9281739,15174339,10934356,16767279,15058068,11776947]),accent:q(`Accent`,`qualitative`,`Accent, categorical color scheme from ColorBrewer 2.0`,[8374655,12496596,16629894,16777113,3697840,15729279,12540695,6710886]),"set-1":q(`Set-1`,`qualitative`,`Set1, categorical color scheme from ColorBrewer 2.0`,[14948892,3636920,5091146,9981603,16744192,16777011,10901032,16220607,10066329]),"set-3":q(`Set-3`,`qualitative`,`Set3, categorical color scheme from ColorBrewer 2.0`,[9294791,16777139,12499674,16482418,8434131,16626786,11787881,16567781,14277081,12353725,13429701,16772463]),"dark-2":q(`Dark-2`,`qualitative`,`Dark2, categorical color scheme from ColorBrewer 2.0`,[1810039,14245634,7696563,15149450,6727198,15117058,10909213,6710886]),paired:q(`Paired`,`qualitative`,`Paired, categorical color scheme from ColorBrewer 2.0`,[10931939,2062516,11722634,3383340,16489113,14883356,16629615,16744192,13284054,6962586,16777113,11622696]),"pastel-2":q(`Pastel-2`,`qualitative`,`Pastel2, categorical color scheme from ColorBrewer 2.0`,[11789005,16633260,13358568,16042724,15136201,16773806,15852236,13421772]),"pastel-1":q(`Pastel-1`,`qualitative`,`Pastel1, categorical color scheme from ColorBrewer 2.0`,[16495790,11783651,13429701,14601188,16701862,16777164,15063229,16636652,15921906]),turbo:q(`Turbo`,`sequential`,`Turbo color scheme from D3.js, improved (smooth) rainbow colormap for visualization`,[2299675,3547990,4337541,4799658,4934343,4872413,4613867,4289780,3900152,3510520,3120629,2796271,2602726,2474716,2477264,2611140,2875575,3270826,3731101,4387984,5109892,5897080,6815085,7798371,8781145,9829201,10811209,11858498,12774460,13755446,14605618,15389486,16042283,16563496,16757029,16753699,16750369,16746782,16743196,16608538,16146200,15487253,14763026,13973263,13052940,12198408,11344133,10621442,9965056,9571328,9440256]),"turbo-no-black":q(`Turbo (no black)`,`sequential`,`Turbo color scheme from D3.js, improved (smooth) rainbow colormap for visualization, with black region removed`,[4866485,4872413,4354034,3770361,3120629,2667241,2475736,2611140,3073454,3928216,5109892,6487408,8126047,9829201,11531332,13167162,14605618,15780908,16693543,16753699,16748063,16741916,16146200,15026195,13644558,12198408,10818563,9833728]),warm:q(`Warm`,`sequential`,`Warm, sequential color scheme from D3.js`,[7225514,7684013,8208303,8797873,9322162,9846195,10370483,10960051,11484338,12008625,12532911,13057452,13581737,14040742,14434210,14959005,15352473,15746196,16074382,16402824,16665475,16731772,16732790,16733808,16734826,16735843,16737117,16738135,16739409,16740939,16742471,16743746,16745277,16747065,16748598,16487987,16162097,15901743,15575598,15184174,14858031,14466608,14140466,13748788,13422648,13030972,12704833,12378438,12052044,11791187,11530331]),cool:q(`Cool`,`sequential`,`Cool, sequential color scheme from D3.js`,[7225514,7095217,6899639,6769597,6574275,6313160,6117837,5856977,5596117,5335513,5009115,4748510,4422368,4161761,3835361,3575009,3314401,3053791,2793438,2598363,2337752,2208213,2013137,1883340,1819335,1755074,1691068,1692086,1758640,1825706,1957795,2155164,2352790,2615695,2878601,3207042,3600764,3994230,4453489,4912492,5437031,5961315,6551391,7140956,7730778,8386136,8975703,9630807,10285911,10940761,11530331]),"cubehelix-default":q(`CubehelixDefault`,`sequential`,`CubehelixDefault, sequential color scheme from D3.js`,[0,525064,984594,1313308,1576742,1709360,1776697,1712705,1649479,1520715,1457486,1394254,1396557,1529674,1662534,2057794,2518076,3109175,3765555,4618288,5536047,6519343,7568178,8550967,9599551,10516809,11368789,12155235,12745329,13270146,13663891,13861539,13928371,13929921,13800654,13606106,13411811,13217514,12957935,12829170,12700403,12768243,12835826,13099761,13428976,13823727,14349039,14939888,15530483,16186616,16777215]),rainbow:q(`Rainbow`,`cyclical`,`Rainbow, cyclical color scheme from D3.js`,[7225514,8208303,9322162,10370483,11484338,12532911,13581737,14434210,15352473,16074382,16665475,16732790,16734826,16737117,16739409,16742471,16745277,16748598,16162097,15575598,14858031,14140466,13422648,12704833,12052044,11530331,10285911,8975703,7730777,6485855,5437031,4453489,3600764,2878601,2352790,1957795,1758896,1691068,1819335,2013137,2337752,2793438,3314401,3835617,4422368,5009115,5596117,6117837,6574275,6899639,7225514]),sinebow:q(`Sinebow`,`cyclical`,`Sinebow, cyclical color scheme from D3.js`,[16728128,16666162,16473382,16149788,15695122,15174923,14458117,13740802,12892928,11978752,10999043,9953287,8972813,7860757,6879262,5831722,4849463,3931972,3079507,2357858,1635442,1109378,648082,317858,118193,49087,111053,303833,561890,1081837,1602292,2319098,3036157,3884287,4798463,5778172,6823928,7804402,8916458,9897952,10945493,11927752,12845243,13697708,14419357,15141773,15667837,16129133,16459357,16659022,16728128]),"category-10":q(`Category10`,`qualitative`,`Category10, categorical color scheme from D3.js / tab10 from Matplotlib (default in Matplotlib)`,[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175]),"observable-10":q(`Observable10`,`qualitative`,`Observable10, categorical color scheme from D3.js`,[4352464,15708440,16740956,7128496,3975505,16747191,10773490,9944053,10251086,9738400]),"tableau-10":q(`Tableau10`,`qualitative`,`Tableau10, categorical color scheme from D3.js`,[5142951,15896108,14767961,7780274,5873999,15583561,11500193,16752039,10253663,12234923]),"simple-rainbow":q(`Simple rainbow`,`sequential`,`Simple 5-color rainbow (blue-green-yellow-orange-red)`,[3367393,3516485,16383744,15501073,12526114]),"red-white-blue":q(`Red-White-Blue`,`diverging`,`Diverging color scheme with red-white-blue`,[12526114,16777215,3367393]),"many-distinct":q(`Many-Distinct`,`qualitative`,`Customized color scheme combining colors from multiple standard schemes (Dark2, Set1, Set2)`,[1810039,14245634,7696563,15149450,6727198,15117058,10909213,6710886,14948892,3636920,5091146,9981603,16744192,16777011,10901032,16220607,10066329,6734501,16551266,9281739,15174339,10934356,16767279,15058068,11776947])},vt=Object.keys(J),yt=vt.map(e=>[e,J[e].label,et(J[e].type),J[e].description]),yt.filter(e=>J[e[0]].type===`sequential`||J[e[0]].type===`diverging`||J[e[0]].type===`cyclical`),yt.filter(e=>J[e[0]].type===`qualitative`)})))()}function xt(){return(xt=e((()=>{St()})))()}function St(){return(St=e((()=>{xt(),(function(){let e=[];for(let t=0;t<1024;t++)e[t]=String.fromCharCode(t);return e})(),typeof TextDecoder<`u`&&new TextDecoder})))()}var Ct;function wt(){return(wt=e((()=>{(function(){try{let e={}.DEBUG;return e===`*`||e===`molstar`}catch{return!1}})(),Ct=!1})))()}var Tt,Et;function Dt(){return(Dt=e((()=>{wt(),Tt=typeof performance<`u`&&!!performance.mark&&performance.measure&&Ct,(function(e){function t(e){return`startTask${e.id}`}function n(e){return`endTask${e.id}`}function r(e){Tt&&performance.mark(t(e))}e.markStart=r;function i(e){Tt&&performance.mark(n(e))}e.markEnd=i;function a(e){Tt&&performance.measure(`✳️ ${e.name}`,t(e),n(e))}e.measure=a})(Et||={})})))()}function Ot(e,t,n=250){let r=Mt(e,t,n);return Lt(e,new Vt(r,r.root))}function kt(e,t){return Lt(t,e)}function At(e,t,n){return e.runChild(t,n)}function jt(e){return{taskId:e.id,taskName:e.name,message:``,startedTime:0,canAbort:!0,isIndeterminate:!0,current:0,max:0}}function Mt(e,t,n){let r={abortRequested:!1,treeAborted:!1,reason:``};return{updateRateMs:n,lastNotified:fe(),observer:t,abortToken:r,taskId:e.id,root:{progress:jt(e),children:[]},tryAbort:Nt(r)}}function Nt(e){return t=>{e.abortRequested=!0,e.reason=t||e.reason}}function Pt(e){return{progress:{...e.progress},children:e.children.map(Pt)}}function Ft(e){return e.progress.canAbort&&e.children.every(Ft)}function It(e){return{root:Pt(e.root),canAbort:Ft(e.root),requestAbort:e.tryAbort}}async function Lt(e,t){Et.markStart(e),t.node.progress.startedTime=fe();try{let n=await e.f(t);return Et.markEnd(e),Et.measure(e),t.info.abortToken.abortRequested&&Rt(t.info),n}catch(n){throw Kt.isAbort(n)&&(t.isAborted=!0,t.node.children.length>0&&await new Promise(e=>{t.onChildrenFinished=e}),e.onAbort&&e.onAbort()),n}}function Rt(e){throw e.abortToken.treeAborted||(e.abortToken.treeAborted=!0,zt(e.root),Bt(e,fe())),Kt.Aborted(e.abortToken.reason)}function zt(e){let t=e.progress;t.isIndeterminate=!0,t.canAbort=!1,t.message=`Aborting...`;for(let t of e.children)zt(t)}function Bt(e,t){e.lastNotified=t;let n=It(e);e.observer(n)}var Vt;function Ht(){return(Ht=e((()=>{qt(),pe(),O(),Dt(),Vt=class e{checkAborted(){this.info.abortToken.abortRequested&&(this.isAborted=!0,Rt(this.info))}get shouldUpdate(){return this.checkAborted(),fe()-this.lastUpdatedTime>this.info.updateRateMs}updateProgress(e){if(this.checkAborted(),!e)return;let t=this.node.progress;typeof e==`string`?(t.message=e,t.isIndeterminate=!0):(e.canAbort!==void 0&&(t.canAbort=e.canAbort),e.message!==void 0&&(t.message=e.message),e.current!==void 0&&(t.current=e.current),e.max!==void 0&&(t.max=e.max),t.isIndeterminate=t.current===void 0||t.max===void 0,e.isIndeterminate!==void 0&&(t.isIndeterminate=e.isIndeterminate))}update(e,t){if(this.lastUpdatedTime=fe(),this.updateProgress(e),!t)return Bt(this.info,this.lastUpdatedTime),this.checkAborted(),w.immediatePromise()}async runChild(t,n){this.updateProgress(n);let r={progress:jt(t),children:[]},i=this.node.children;i.push(r);let a=new e(this.info,r);try{return await Lt(t,a)}catch(e){if(Kt.isAbort(e)&&this.isAborted)return;throw e}finally{let e=i.indexOf(r);if(e>=0){for(let t=e,n=i.length-1;t<n;t++)i[t]=i[t+1];i.pop()}i.length===0&&this.onChildrenFinished&&this.onChildrenFinished()}}constructor(e,t){this.isSynchronous=!1,this.isExecuting=!0,this.lastUpdatedTime=0,this.onChildrenFinished=void 0,this.node=t,this.info=e}}})))()}var Ut,Wt;function Gt(){return(Gt=e((()=>{Ut=class{constructor(){this.shouldUpdate=!1,this.isSynchronous=!0}update(e,t){}},Wt=new Ut})))()}var Kt;function qt(){return(qt=e((()=>{Ht(),Gt(),(function(e){class t{run(e,t=250){return e?Ot(this,e,t):this.f(Wt)}runAsChild(e,t){return e.isSynchronous?this.f(Wt):At(e,this,t)}runInContext(e){return e.isSynchronous?this.f(Wt):kt(e,this)}constructor(e,t,n){this.name=e,this.f=t,this.onAbort=n,this.id=u()}}function n(e){let t=e;return!!e&&typeof t.id==`number`&&typeof t.name==`string`&&!!t.run}e.is=n;function r(e){return!!e&&!!e.isAborted}e.isAbort=r;function i(e){return{isAborted:!0,reason:e,toString(){return`Aborted${e?`: `+e:``}`}}}e.Aborted=i;function a(e,n,r){return new t(e,n,r)}e.create=a;function o(e,t){return a(e,async e=>t)}e.constant=o;function s(){return a(``,async e=>{})}e.empty=s;function c(e,t){return a(e,async e=>{throw Error(t)})}e.fail=c;function l(e,t){return n(e)?t?e.runInContext(t):e.run():e}e.resolveInContext=l;let u=be(0,1073741823)})(Kt||={})})))()}var Jt;function Yt(){return(Yt=e((()=>{Gt(),(function(e){e.Synchronous=Wt})(Jt||={})})))()}var Xt;function Zt(){return(Zt=e((()=>{(function(e){function t(e,n=``){let r=e.progress;if(!e.children.length)return r.isIndeterminate?`${n}${r.taskName}: ${r.message}`:`${n}${r.taskName}: [${r.current}/${r.max}] ${r.message}`;let i=n+`  |_ `,a=e.children.map(e=>t(e,i));return r.isIndeterminate?`${n}${r.taskName}: ${r.message}\n${a.join(`
`)}`:`${n}${r.taskName}: [${r.current}/${r.max}] ${r.message}\n${a.join(`
`)}`}function n(e){return t(e.root)}e.format=n})(Xt||={})})))()}function Qt(){return(Qt=e((()=>{qt()})))()}function $t(){return($t=e((()=>{pe()})))()}function en(){return(en=e((()=>{qt(),Yt(),Zt(),O(),Qt(),$t()})))()}var tn;function nn(){return(nn=e((()=>{tn=typeof process<`u`&&process.versions!=null&&process.versions.node!=null})))()}function rn(){return(rn=e((()=>{(function(){let e=new Uint32Array(256);for(let t=0;t<256;t++){let n=t;for(let e=0;e<8;e++)n&1?n=3988292384^n>>>1:n>>>=1;e[t]=n}return e})()})))()}function an(e,t,n){let r=e.length,i=Y.rev15;for(let a=0;a<r;a+=2)if(e[a+1]!==0){let r=a>>1,o=e[a+1],s=r<<4|o,c=t-o,l=e[a]<<c,u=l+(1<<c);for(;l!==u;){let e=i[l]>>>15-t;n[e]=s,l++}}}function on(e,t){let n=e.length,r=Y.bl_count;for(let e=0;e<=t;e++)r[e]=0;for(let t=1;t<n;t+=2)r[e[t]]++;let i=Y.next_code,a=0;r[0]=0;for(let e=1;e<=t;e++)a=a+r[e-1]<<1,i[e]=a;for(let t=0;t<n;t+=2){let n=e[t+1];n!==0&&(e[t]=i[n],i[n]++)}}function sn(e,t){let n=Y.rev15,r=15-t;for(let i=0;i<e.length;i+=2){let a=e[i]<<t-e[i+1];e[i]=n[a]>>>r}}var Y;function cn(){return(cn=e((()=>{Y=(function(){let e=Uint16Array,t=Uint32Array;return{next_code:new e(16),bl_count:new e(16),ordr:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],of0:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],exb:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],ldef:new e(32),df0:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],dxb:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],ddef:new t(32),flmap:new e(512),fltree:[],fdmap:new e(32),fdtree:[],lmap:new e(32768),ltree:[],ttree:[],dmap:new e(32768),dtree:[],imap:new e(512),itree:[],rev15:new e(32768),lhst:new t(286),dhst:new t(30),ihst:new t(19),lits:new t(15e3),strt:new e(65536),prev:new e(32768)}})(),(function(){for(let e=0;e<32768;e++){let t=e;t=(t&2863311530)>>>1|(t&1431655765)<<1,t=(t&3435973836)>>>2|(t&858993459)<<2,t=(t&4042322160)>>>4|(t&252645135)<<4,t=(t&4278255360)>>>8|(t&16711935)<<8,Y.rev15[e]=(t>>>16|t<<16)>>>17}function e(e,t,n){for(;t--!==0;)e.push(0,n)}for(let e=0;e<32;e++)Y.ldef[e]=Y.of0[e]<<3|Y.exb[e],Y.ddef[e]=Y.df0[e]<<4|Y.dxb[e];e(Y.fltree,144,8),e(Y.fltree,112,9),e(Y.fltree,24,7),e(Y.fltree,8,8),on(Y.fltree,9),an(Y.fltree,9,Y.flmap),sn(Y.fltree,9),e(Y.fdtree,32,5),on(Y.fdtree,5),an(Y.fdtree,5,Y.fdmap),sn(Y.fdtree,5),e(Y.itree,19,0),e(Y.ltree,286,0),e(Y.dtree,30,0),e(Y.ttree,320,0)})()})))()}function ln(){return(ln=e((()=>{cn()})))()}function un(){return(un=e((()=>{cn()})))()}function dn(){return(dn=e((()=>{rn(),ln(),un(),en()})))()}function fn(){return(fn=e((()=>{St(),en(),mn(),nn(),dn(),class e{static{this.pool=[]}static{this.poolSize=15}static get(){if(tn)throw Error("`RequestPool.get` should not be used when running in Node.js");return this.pool.length?this.pool.pop():new XMLHttpRequest}static emptyFunc(){}static deposit(t){this.pool.length<this.poolSize&&(t.onabort=e.emptyFunc,t.onerror=e.emptyFunc,t.onload=e.emptyFunc,t.onprogress=e.emptyFunc,this.pool.push(t))}}})))()}var pn;function mn(){return(mn=e((()=>{he(),fn(),en(),nn(),(function(e){function t(e,t){return{kind:`url`,id:me.create22(),url:e,...t}}e.Url=t;function n(e){return{kind:`file`,id:me.create22(),name:e.name,file:e}}e.File=n;function r(e){return e?.kind===`url`}e.isUrl=r;function i(e){return e?.kind===`file`}e.isFile=i;function a(e,t,n){return{data:e,dispose:()=>{n.release(t)}}}e.Wrapper=a;function o(e){return typeof e==`string`?e:e.url}e.getUrl=o;function s(e,n,r,i){return typeof n==`string`?e.tryFindUrl(n,r,i)||t(n,{body:r,headers:i}):n}e.getUrlAsset=s})(pn||={})})))()}function hn(e,t){return e.indexOf(t)>=0?!1:(e.push(t),!0)}var gn;function _n(){return(_n=e((()=>{Oe(),Ae(),Je(),Ke(),Ze(),at(),bt(),mn(),Me(),(function(e){e.Essential={isEssential:!0};function t(e,t){return t&&(t.label&&(e.label=t.label),t.description&&(e.description=t.description),t.legend&&(e.legend=t.legend),t.fieldLabels&&(e.fieldLabels=t.fieldLabels),t.isHidden&&(e.isHidden=t.isHidden),t.shortLabel&&(e.shortLabel=t.shortLabel),t.twoColumns&&(e.twoColumns=t.twoColumns),t.isEssential&&(e.isEssential=t.isEssential),t.category&&(e.category=t.category),t.hideIf&&(e.hideIf=t.hideIf),t.help&&(e.help=t.help)),e}function n(e){let t={...e};return t.isOptional=!0,t}e.Optional=n;function r(e,n){return t({type:`value`,defaultValue:e},n)}e.Value=r;function i(e,n,r){return t({type:`select`,defaultValue:ue(e,n),options:n,cycle:r?.cycle},r)}e.Select=i;function a(e,n,r){let i=t({type:`multi-select`,defaultValue:e,options:n},r);return r?.emptyValue&&(i.emptyValue=r.emptyValue),i}e.MultiSelect=a;function o(e,n){return t({type:`boolean`,defaultValue:e},n)}e.Boolean=o;function s(e=``,n){return t({type:`text`,defaultValue:e,multiline:n?.multiline,placeholder:n?.placeholder,disableInteractiveUpdates:n?.disableInteractiveUpdates},n)}e.Text=s;function c(e,n){let r=t({type:`color`,defaultValue:e},n);return n?.isExpanded&&(r.isExpanded=n.isExpanded),r}e.Color=c;function l(e,n){let r;if(typeof e==`string`){let t=_t(e);r={kind:t.type===`qualitative`?`set`:`interpolate`,colors:t.list}}else r=e;return t({type:`color-list`,presetKind:n?.presetKind||`all`,defaultValue:r,offsets:!!n?.offsets},n)}e.ColorList=l;function u(e,n,r){return t(h({type:`vec3`,defaultValue:e},n),r)}e.Vec3=u;function d(e,n){return t({type:`mat4`,defaultValue:e},n)}e.Mat4=d;function f(e,n){return t({type:`url`,defaultValue:typeof e==`string`?pn.Url(e):pn.Url(e.url,{body:e.body})},n)}e.Url=f;function p(e){let n=t({type:`file`,defaultValue:null},e);return e?.accept&&(n.accept=e.accept),n}e.File=p;function m(e){let n=t({type:`file-list`,defaultValue:null},e);return e?.accept&&(n.accept=e.accept),n}e.FileList=m;function h(e,t){return t&&(t.min!==void 0&&(e.min=t.min),t.max!==void 0&&(e.max=t.max),t.step!==void 0&&(e.step=t.step)),e}function g(e,n,r){let i=t(h({type:`number`,defaultValue:e},n),r);return r?.immediateUpdate&&(i.immediateUpdate=!0),i}e.Numeric=g;function _(e,n,r){return t(h({type:`interval`,defaultValue:e},n),r)}e.Interval=_;function v(e,n){let r=t({type:`line-graph`,defaultValue:e},n);return n?.getVolume&&(r.getVolume=n.getVolume),n?.yAxis&&(r.yAxis=n.yAxis),n?.getPresets&&(r.getPresets=n.getPresets),r}e.LineGraph=v;function y(e,n){let r=t({type:`group`,defaultValue:n?.customDefault||ee(e),params:e},n);return n?.presets&&(r.presets=n.presets),n?.isExpanded&&(r.isExpanded=n.isExpanded),n?.isFlat&&(r.isFlat=n.isFlat),n?.pivot&&(r.pivot=n.pivot),r}e.Group=y;function b(e){return y({},e)}e.EmptyGroup=b;function x(e,n,r,a){let o=ue(e,n);return t({type:`mapped`,defaultValue:{name:o,params:r(o).defaultValue},select:i(o,n,a),map:r},a)}e.Mapped=x;function S(e,n,r){let a=r?.options?r.options:Object.keys(n).map(e=>[e,n[e].label||rt(e)]),o=ue(e,a);return t({type:`mapped`,defaultValue:{name:o,params:n[o].defaultValue},select:i(o,a,r),map:e=>n[e]},r)}e.MappedStatic=S;function C(e,n,r){let i=t({type:`object-list`,element:e,getLabel:n,ctor:w,defaultValue:r?.defaultValue||[]},r);return r?.presets&&(i.presets=r.presets),i}e.ObjectList=C;function w(){return ee(this.element)}function T(){throw Error(`getValue not set. Fix runtime.`)}function E(e=``){return{ref:e,getValue:T}}e.Ref=E;function D(e,n,r){return t({type:`value-ref`,defaultValue:E(r?.defaultRef),getOptions:e,resolveRef:n},r)}e.ValueRef=D;function O(e){return t({type:`data-ref`,defaultValue:E(e?.defaultRef)},e)}e.DataRef=O;function k(e,n,r){return t({type:`converted`,defaultValue:n(r.defaultValue),converted:r,fromValue:e,toValue:n},r)}e.Converted=k;function A(e,n,r,a,o){let s=Object.keys(n).map(e=>[e,e]);return t({type:`conditioned`,select:i(r(e),s,o),defaultValue:e,conditionParams:n,conditionForValue:r,conditionedValue:a},o)}e.Conditioned=A;function j(e,n){return t({type:`script`,defaultValue:e},n)}e.Script=j;function M(e){return 0}e.For=M;function ee(e){let t={};for(let n of Object.keys(e))e[n].isOptional||(t[n]=e[n].defaultValue);return t}e.getDefaultValues=ee;function N(e,t,n){return()=>e(t,n)}function te(e,t,n){if(t){if(e.type===`value-ref`){let r=t;r.getValue=r.ref?N(e.resolveRef,r.ref,n):()=>{throw Error(`Unset ref in ValueRef value.`)}}else if(e.type===`data-ref`){let e=t;e.getValue=e.ref?N(n,e.ref,n):()=>{throw Error(`Unset ref in ValueRef value.`)}}else if(e.type===`group`)I(e.params,t,n);else if(e.type===`mapped`){let r=t;te(e.map(r.name),r.params,n)}else if(e.type===`object-list`){if(!F(e.element))return;for(let r of t)I(e.element,r,n)}}}function P(e){if(e.type===`value-ref`||e.type===`data-ref`)return!0;if(e.type===`group`){if(F(e.params))return!0}else if(e.type===`mapped`){for(let[t]of e.select.options)if(P(e.map(t)))return!0}else if(e.type===`object-list`)return F(e.element);return!1}function F(e){for(let t of Object.keys(e))if(P(e[t]))return!0;return!1}function I(e,t,n){for(let r of Object.keys(e))te(e[r],t?.[r],n)}e.resolveRefs=I;function L(e,t,n){if(t==null)return n;if(e.type===`value-ref`||e.type===`data-ref`){let e=t;e&&typeof e.ref==`string`&&e.ref&&hn(n,e.ref)}else if(e.type===`group`)R(e.params,t,n);else if(e.type===`mapped`){let r=t;if(!r)return n;L(e.map(r.name),r.params,n)}else if(e.type===`object-list`){if(!F(e.element))return n;for(let r of t)R(e.element,r,n)}return n}function R(e,t,n){for(let r of Object.keys(e))L(e[r],t?.[r],n);return n}function z(e,t,n){return!e||!t?n:R(e,t,n)}e.collectRefs=z;function B(e,t){for(let n of Object.keys(e))e[n].isOptional||(e[n].defaultValue=t[n])}e.setDefaultValues=B;function V(e){return Ye(e)}e.clone=V;function H(e,t){}e.validate=H;function U(e,t,n){if(t===n)return!0;if(typeof t!=`object`||typeof n!=`object`)return!1;for(let r of Object.keys(e))if(!ne(e[r],t[r],n[r]))return!1;return!0}e.areEqual=U;function ne(e,t,n){if(t===n)return!0;if(e.type===`group`)return U(e.params,t,n);if(e.type===`mapped`){let r=t,i=n;return r.name===i.name&&ne(e.map(r.name),r.params,i.params)}if(e.type===`multi-select`){let e=t,r=n;if(e.length!==r.length)return!1;if(e.length<10){for(let t=0,n=e.length;t<n;t++)if(e[t]!==r[t]&&r.indexOf(e[t])<0)return!1}else{let t=new Set(r);for(let n=0,i=e.length;n<i;n++)if(e[n]!==r[n]&&!t.has(e[n]))return!1}return!0}if(e.type===`interval`)return t[0]===n[0]&&t[1]===n[1];if(e.type===`line-graph`){let e=t,r=n;if(e.length!==r.length)return!1;for(let t=0,n=e.length;t<n;t++)if(!ke.areEqual(e[t],r[t]))return!1;return!0}if(e.type===`vec3`)return K.equals(t,n);if(e.type===`mat4`)return Ge.areEqual(t,n,je);if(e.type===`script`){let e=t,r=n;return e.language===r.language&&e.expression===r.expression}if(e.type===`object-list`){let r=t,i=n,a=r.length;if(a!==i.length)return!1;for(let t=0;t<a;t++)if(!U(e.element,r[t],i[t]))return!1;return!0}return typeof t==`object`&&typeof n==`object`&&Ee(t,n)}e.isParamEqual=ne;function W(e,t,n){if(t===void 0)return{...n};if(n===void 0)return{...t};let r={};for(let i of Object.keys(e))r[i]=re(e[i],t[i],n[i]);return r}e.merge=W;function re(e,t,n){if(t===void 0)return typeof n==`object`&&!Array.isArray(n)?{...n}:n;if(n===void 0)return typeof t==`object`&&!Array.isArray(t)?{...t}:t;if(e.type===`group`)return W(e.params,t,n);if(e.type===`mapped`){let r=t,i=n;if(r.name!==i.name)return{...i};let a=e.map(i.name);return{name:i.name,params:re(a,r.params,i.params)}}return e.type===`value`?n:typeof t==`object`&&typeof n==`object`?Array.isArray(n)?n:{...t,...n}:n}e.mergeParam=re;function ie(e,t){for(let n of e.options)if(n[0]===t)return!0;return!1}function ae(e,t,n){if(t==null)return n?e.defaultValue:void 0;if(e.type===`value`)return t;if(e.type===`group`){let r={};for(let i of Object.keys(e.params)){let a=e.params[i];t[i]===void 0?n&&(r[i]=a.defaultValue):r[i]=ae(a,t[i],n)}return r}if(e.type===`mapped`){let r=t;if(typeof r.name!=`string`)return e.defaultValue;if(r.params===void 0)return n?e.defaultValue:void 0;if(!ie(e.select,r.name))return e.defaultValue;let i=e.map(r.name);return{name:r.name,params:ae(i,r.params,n)}}if(e.type===`select`)return ie(e,t)?t:e.defaultValue;if(e.type===`multi-select`){if(!Array.isArray(t))return e.defaultValue;let n=t.filter(function(e){return ie(this,e)},e);return t.length>0&&n.length===0?e.defaultValue:n}return e.type===`object-list`?Array.isArray(t)?t.map(t=>oe(e.element,t,n?`all`:`skip`)):e.defaultValue:t}function oe(e,t,n){if(typeof t!=`object`||!t)return n?ee(e):t;let r={};for(let i of Object.keys(e)){let a=e[i];t[i]===void 0?n===`all`&&(r[i]=a.defaultValue):r[i]=ae(a,t[i],n!==`skip`)}return r}e.normalizeParams=oe;function se(e,t){let n=[];for(let r of Object.keys(e))if(!t)typeof e[r]==`string`?n.push([r,e[r]]):n.push([r,t===null?r:rt(r)]);else{let i=t(r,e[r]);n.push(typeof i==`string`?[r,i]:[r,i[0],i[1]])}return n}e.objectToOptions=se;function ce(e,t){let n=[];for(let r of e)t?n.push([r,t(r)]):n.push([r,t===null?r:rt(r)]);return n}e.arrayToOptions=ce;function le(e,t){for(let n of e.options)if(n[0]===t)return n[1];return``}e.optionLabel=le;function ue(e,t){for(let n of t)if(n[0]===e)return e;return t.length>0?t[0][0]:void 0}function de(e,t){let n={};for(let r of Object.keys(t)){let i=t[r];e[r]&&i!=null&&e[r].defaultValue!==i&&(n[r]={...e[r],defaultValue:i})}return{...e,...n}}e.withDefaults=de})(gn||={})})))()}var vn;function yn(){return(yn=e((()=>{_n(),T(),y(),b(),vn=class{#e;#t;#n=new Map;constructor(e,t=gn.getDefaultValues(e),n={}){this.params=e,this.options=n,this.#t=gn.getDefaultValues(e),this.#e=S({...this.#t,...t},{compare:Object.is})}get values(){return this.#e.asReadonly}field(e){let t=this.#n.get(e);return t||(t=this.#e.asReadonly.pipe(_(t=>t[e]),M()),this.#n.set(e,t)),t}visible(e){let t=this.params[e];return t.hideIf?this.#e.asReadonly.pipe(_(e=>!t.hideIf(e)),M()):this.#e.asReadonly.pipe(_(()=>!0),M())}set(e,t){let n=this.#e.value;if(Object.is(n[e],t))return;let r={...n,[e]:t};this.#e.set(r),this.options.onChange?.(r,e)}load(e){this.#e.set({...this.#t,...e})}reset(){let e=this.#e.value,t={...this.#t};this.#e.set(t);for(let n of Object.keys(this.params))gn.isParamEqual(this.params[n],e[n],t[n])||this.options.onChange?.(t,n)}layout(){let e=[],t=[];for(let n of Object.keys(this.params)){let r=this.params[n];r.isHidden||(r.isEssential?e.push(n):t.push(n))}return e.length?{essentials:e,advanced:t}:{essentials:t,advanced:[]}}}})))()}var bn;function xn(){return(xn=e((()=>{gt(),bn=ht({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflower:6591981,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,laserlemon:16777044,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrod:16448210,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,maroon2:8323072,maroon3:11546720,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,purple2:8323199,purple3:10494192,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074}),(function(){let e=new Map;return Object.keys(bn).forEach(t=>{e.set(bn[t],t)}),e})()})))()}var X;function Sn(){return(Sn=e((()=>{o(),X={custom:`msp-color-color-picker-custom`,field:`msp-color-color-picker-field`,greys:`msp-color-color-picker-greys`,marker:`msp-color-color-picker-marker`,palette:`msp-color-color-picker-palette`,picker:`msp-color-color-picker-picker`,preview:`msp-color-color-picker-preview`,swatch:`msp-color-color-picker-swatch`,text:`msp-color-color-picker-text`},i(`components/color/color-picker.module.css`,`@layer msp.components {
.msp-color-color-picker-picker {
  gap: var(--msp-space-3);
  margin-block: var(--msp-space-1) var(--msp-space-2);
  padding: var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  display: grid;
}

.msp-color-color-picker-field, .msp-color-color-picker-greys {
  border-radius: var(--msp-radius-sm);
  box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-text), transparent 88%);
  cursor: crosshair;
  touch-action: none;
  position: relative;
}

.msp-color-color-picker-field {
  background: linear-gradient(#ffffffe6, #fff0 50%, #0000 50%, #000000e6), linear-gradient(to right, red, #ff0, #0f0, #0ff, #00f, #f0f, red);
  height: 96px;
}

.msp-color-color-picker-greys {
  background: linear-gradient(to right, #000, #fff);
  height: 12px;
}

.msp-color-color-picker-marker {
  pointer-events: none;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  position: absolute;
  translate: -50% -50%;
  box-shadow: 0 0 0 1.5px #fff, 0 0 0 2.5px #00000080;
}

.msp-color-color-picker-palette {
  gap: var(--msp-space-2);
  grid-template-columns: repeat(8, minmax(0, 1fr));
  display: grid;
}

.msp-color-color-picker-swatch {
  border-radius: var(--msp-radius-sm);
  min-width: 0;
  height: 16px;
  box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-text), transparent 88%);
  transition: transform var(--msp-motion-fast) var(--msp-ease);

  &:hover {
    transform: scale(1.08);
  }

  &[aria-selected="true"] {
    box-shadow: 0 0 0 1.5px var(--msp-color-bg),
      0 0 0 3px var(--msp-color-text-muted);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: 2px;
  }
}

.msp-color-color-picker-custom {
  align-items: center;
  gap: var(--msp-space-2);
  display: flex;
}

.msp-color-color-picker-preview {
  border-radius: var(--msp-radius-sm);
  width: 22px;
  height: 22px;
  box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-text), transparent 88%);
  flex: none;
}

.msp-color-color-picker-text {
  min-width: 0;
  height: 24px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  font-variant-numeric: tabular-nums;
  border: 0;
  flex: 1;

  &::placeholder {
    color: var(--msp-color-text-subtle);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }
}
}
`)})))()}function Cn(e){let t=e>>16&255,n=e>>8&255,r=e&255,i=(Math.max(t,n,r)+Math.min(t,n,r))/510,a=Math.round(7*(1-i)),o=7-a,s=[];for(let t=a;t>0;t--)s.push(On(e,.9*t/a));s.push(e);for(let t=1;t<=o;t++)s.push(On(e,-.85*t/o));return s}function wn(e){return`#${(e>>>0&16777215).toString(16).padStart(6,`0`)}`}function Tn(e){return`${e>>16&255}, ${e>>8&255}, ${e&255}`}function En(e){let t=e.trim().toLowerCase();if(!t)return;let n=/^(?:#|0x)?([0-9a-f]{3}|[0-9a-f]{6})$/.exec(t);if(n){let e=n[1].length===3?n[1].replace(/./g,e=>e+e):n[1];return Number.parseInt(e,16)}let r=/^(rgba?|hsla?)?\s*\(?\s*([^()]*?)\s*\)?$/.exec(t);if(r){let e=r[2].split(/\s*[,;/\s]\s*/).filter(Boolean);if(e.length===3||e.length===4){let t=e.slice(0,3);if(t.every(e=>/^[+]?(\d+\.?\d*|\.\d+)%?$/.test(e))){if(r[1]?.startsWith(`hsl`))return Dn(t);let e=t.some(e=>e.endsWith(`%`)),n=t.map(e=>Number.parseFloat(e)),i=!e&&n.every(e=>e<=1)&&t.some(e=>e.includes(`.`)),a=t=>e?t*255/100:i?t*255:t;return!e&&!i&&n.some(e=>e>255)?void 0:Pn(Fn(a(n[0])),Fn(a(n[1])),Fn(a(n[2])))}}}let i=t.replace(/[\s_-]/g,``);return Object.hasOwn(bn,i)?bn[i]:void 0}function Dn(e){let t=(Number.parseFloat(e[0])%360+360)%360/60,n=Math.min(1,Number.parseFloat(e[1])/100),r=Math.min(1,Number.parseFloat(e[2])/100),i=(1-Math.abs(2*r-1))*n,a=i*(1-Math.abs(t%2-1)),o=r-i/2,[s,c,l]=t<1?[i,a,0]:t<2?[a,i,0]:t<3?[0,i,a]:t<4?[0,a,i]:t<5?[a,0,i]:[i,0,a];return Pn(Fn((s+o)*255),Fn((c+o)*255),Fn((l+o)*255))}function On(e,t){let n=t>0?255:0,r=Math.abs(t),i=t=>{let i=e>>t&255;return Math.round(i+(n-i)*r)<<t};return i(16)|i(8)|i(0)}function kn(e){let t=e*6%6,n=t-Math.floor(t),r=Fn(n*255),i=255-r;switch(Math.floor(t)){case 0:return Pn(255,r,0);case 1:return Pn(i,255,0);case 2:return Pn(0,255,r);case 3:return Pn(0,i,255);case 4:return Pn(r,0,255);default:return Pn(255,0,i)}}function An(e,t){let n=kn(Math.max(0,Math.min(1,e))),r=Math.max(0,Math.min(1,t));return r<.5?On(n,In*(1-r/.5)):On(n,-.9*((r-.5)/.5))}function jn(e){let t=e>>16&255,n=e>>8&255,r=e&255,i=Math.max(t,n,r),a=Math.min(t,n,r);if(i-a<16)return{greys:!0,x:(t+n+r)/765,y:.5};let o=i-a,s=i===t?((n-r)/o+6)%6:i===n?(r-t)/o+2:(t-n)/o+4,c=(i+a)/510,l=c>=.5?.5*(1-(2*c-1)/In):.5+.5*(1-2*c)/In;return{greys:!1,x:s/6,y:Math.max(0,Math.min(1,l))}}function Mn(e){let t=e.value.pipe(M()),n=t.pipe(_(jn)),r=0,i,a=S(0),o=!1,c=a.asReadonly.pipe(_(Cn),oe({bufferSize:1,refCount:!0}));s(t,e=>{r=e,o||a.set(e),i&&document.activeElement!==i&&(i.value=Tn(e))});let u=t=>n=>{if(n.button!==0)return;let r=n.currentTarget;r.setPointerCapture(n.pointerId);let i=n=>{let i=r.getBoundingClientRect();e.onChange(t((n.clientX-i.left)/i.width,(n.clientY-i.top)/i.height))},a=()=>{r.removeEventListener(`pointermove`,i),r.removeEventListener(`pointerup`,a),r.removeEventListener(`pointercancel`,a)};r.addEventListener(`pointermove`,i),r.addEventListener(`pointerup`,a),r.addEventListener(`pointercancel`,a),i(n)},d=e=>{let t=e<.03?0:e>.97?255:Fn(e*255);return Pn(t,t,t)};return p(`div`,{class:X.picker,children:[l(`div`,{class:X.field,"aria-hidden":`true`,onPointerDown:u(An),children:l(`span`,{class:X.marker,hidden:n.pipe(_(e=>e.greys)),style:{left:n.pipe(_(e=>`${e.x*100}%`)),top:n.pipe(_(e=>`${e.y*100}%`))}})}),l(`div`,{class:X.greys,"aria-hidden":`true`,onPointerDown:u(e=>d(e)),children:l(`span`,{class:X.marker,hidden:n.pipe(_(e=>!e.greys)),style:{left:n.pipe(_(e=>`${e.x*100}%`)),top:`50%`}})}),l(`div`,{class:X.palette,role:`listbox`,"aria-label":`Palette`,children:Nn.map(n=>l(`button`,{type:`button`,role:`option`,class:X.swatch,style:{background:wn(n)},"aria-label":Tn(n),"aria-selected":t.pipe(_(e=>e===n)),onClick:()=>e.onChange(n)}))}),l(`div`,{class:X.palette,role:`listbox`,"aria-label":`Weights`,children:[0,1,2,3,4,5,6,7].map(n=>{let r=c.pipe(_(e=>e[n]));return l(`button`,{type:`button`,role:`option`,class:X.swatch,style:{background:r.pipe(_(wn))},"aria-label":r.pipe(_(Tn)),"aria-selected":P([r,t]).pipe(_(([e,t])=>e===t)),onClick:()=>{o=!0,e.onChange(Cn(a.value)[n]),o=!1}})})}),p(`div`,{class:X.custom,children:[l(`span`,{class:X.preview,style:{background:t.pipe(_(wn))}}),l(`input`,{ref:e=>{i=e,e.value=Tn(r)},type:`text`,class:X.text,"aria-label":`Color`,placeholder:`r, g, b · #hex · rgb() · name`,"data-tip":`r, g, b; hex, rgb(), hsl() or a name`,spellcheck:!1,onInput:t=>{let n=En(t.currentTarget.value);n!==void 0&&e.onChange(n)},onKeyDown:e=>{e.key===`Enter`&&(e.currentTarget.value=Tn(r))},onBlur:e=>{e.currentTarget.value=Tn(r)}})]})]})}var Nn,Pn,Fn,In;function Ln(){return(Ln=e((()=>{xn(),te(),T(),y(),se(),d(),b(),Sn(),m(),Nn=[15026253,16214805,16762173,4630360,1222036,37119,7231183,14041247],Pn=(e,t,n)=>e<<16|t<<8|n,Fn=e=>Math.max(0,Math.min(255,Math.round(e))),In=.9})))()}var Z;function Rn(){return(Rn=e((()=>{o(),Z={channels:`msp-params-params-form-channels`,chevron:`msp-params-params-form-chevron`,collapsible:`msp-params-params-form-collapsible`,collapsibleBar:`msp-params-params-form-collapsibleBar`,collapsibleHeader:`msp-params-params-form-collapsibleHeader`,collapsibleMeta:`msp-params-params-form-collapsibleMeta`,color:`msp-params-params-form-color`,control:`msp-params-params-form-control`,count:`msp-params-params-form-count`,fields:`msp-params-params-form-fields`,file:`msp-params-params-form-file`,fileClear:`msp-params-params-form-fileClear`,fileNames:`msp-params-params-form-fileNames`,filePick:`msp-params-params-form-filePick`,form:`msp-params-params-form-form`,input:`msp-params-params-form-input`,item:`msp-params-params-form-item`,itemActions:`msp-params-params-form-itemActions`,itemAdd:`msp-params-params-form-itemAdd`,itemForm:`msp-params-params-form-itemForm`,itemLabel:`msp-params-params-form-itemLabel`,itemRow:`msp-params-params-form-itemRow`,items:`msp-params-params-form-items`,knob:`msp-params-params-form-knob`,label:`msp-params-params-form-label`,mapped:`msp-params-params-form-mapped`,nested:`msp-params-params-form-nested`,number:`msp-params-params-form-number`,presets:`msp-params-params-form-presets`,presetsList:`msp-params-params-form-presetsList`,range:`msp-params-params-form-range`,row:`msp-params-params-form-row`,select:`msp-params-params-form-select`,settings:`msp-params-params-form-settings`,slider:`msp-params-params-form-slider`,subSettings:`msp-params-params-form-subSettings`,swatch:`msp-params-params-form-swatch`,switch:`msp-params-params-form-switch`,textarea:`msp-params-params-form-textarea`,unsupported:`msp-params-params-form-unsupported`},i(`components/params/params-form.module.css`,`@layer msp.components {
.msp-params-params-form-form {
  gap: var(--msp-space-1);
  display: grid;
}

.msp-params-params-form-row {
  grid-template-columns: var(--msp-label-width) minmax(0, 1fr);
  align-items: center;
  gap: var(--msp-space-3);
  min-height: 24px;
  display: grid;

  &[hidden] {
    display: none;
  }
}

.msp-params-params-form-label {
  align-items: center;
  gap: var(--msp-space-1);
  min-width: 0;
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  white-space: nowrap;
  display: flex;
  overflow: hidden;
}

.msp-params-params-form-control {
  align-items: center;
  min-width: 0;
  display: flex;
}

.msp-params-params-form-input, .msp-params-params-form-number, .msp-params-params-form-textarea {
  width: 100%;
  height: 24px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  border: 0;

  &:hover {
    background: var(--msp-color-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }

  &::placeholder {
    color: var(--msp-color-text-subtle);
  }
}

.msp-params-params-form-textarea {
  height: auto;
  min-height: 56px;
  padding: var(--msp-space-2) var(--msp-space-3);
  resize: vertical;
  font-family: inherit;
  line-height: 1.45;
}

.msp-params-params-form-row:has(.msp-params-params-form-textarea) {
  align-items: start;

  & .msp-params-params-form-label {
    padding-top: var(--msp-space-2);
  }
}

.msp-params-params-form-select {
  width: 100%;
}

.msp-params-params-form-slider {
  align-items: center;
  gap: var(--msp-space-2);
  grid-template-columns: minmax(0, 1fr) 52px;
  width: 100%;
  display: grid;
}

.msp-params-params-form-range {
  --msp-range-fill: color-mix(in oklab, var(--msp-color-text-muted), transparent 45%);
  width: calc(100% - var(--msp-space-3));
  height: 16px;
  margin: 0 0 0 var(--msp-space-3);
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  background: none;

  &::-webkit-slider-runnable-track {
    background: linear-gradient(to right,
      var(--msp-range-fill) var(--msp-progress, 0%),
      var(--msp-color-pressed) var(--msp-progress, 0%));
    border-radius: 1.5px;
    height: 3px;
  }

  &::-webkit-slider-thumb {
    background: var(--msp-color-text-muted);
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 10px;
    transition: transform var(--msp-motion-fast) var(--msp-ease);
    border-radius: 50%;
    margin-top: -3.5px;
  }

  &:hover::-webkit-slider-thumb, &:active::-webkit-slider-thumb {
    transform: scale(1.25);
  }

  &::-moz-range-track {
    background: var(--msp-color-pressed);
    border-radius: 1.5px;
    height: 3px;
  }

  &::-moz-range-progress {
    background: var(--msp-range-fill);
    border-radius: 1.5px;
    height: 3px;
  }

  &::-moz-range-thumb {
    background: var(--msp-color-text-muted);
    border: 0;
    border-radius: 50%;
    width: 10px;
    height: 10px;
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: 2px;
    border-radius: var(--msp-radius-sm);
  }
}

.msp-params-params-form-number {
  padding: 0 var(--msp-space-2);
  font-variant-numeric: tabular-nums;
  text-align: right;
}

.msp-params-params-form-switch {
  width: 24px;
  height: 14px;
  margin-left: var(--msp-space-3);
  background: var(--msp-color-pressed);
  transition: background-color var(--msp-motion-fast) var(--msp-ease);
  border-radius: 7px;
  flex: none;
  position: relative;

  &[aria-checked="true"] {
    background: var(--msp-color-text-muted);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: 2px;
  }
}

.msp-params-params-form-knob {
  background: var(--msp-color-bg);
  width: 10px;
  height: 10px;
  transition: transform var(--msp-motion-fast) var(--msp-ease);
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  box-shadow: 0 1px 1px #0000001f;

  [aria-checked="true"] > & {
    transform: translateX(10px);
  }
}

.msp-params-params-form-color {
  align-items: center;
  gap: var(--msp-space-3);
  width: 100%;
  min-width: 0;
  height: 24px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  display: flex;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
  }
}

.msp-params-params-form-swatch {
  border-radius: var(--msp-radius-sm);
  width: 12px;
  height: 12px;
  box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-text), transparent 88%);
  flex: none;
}

.msp-params-params-form-channels {
  min-width: 0;
  color: var(--msp-color-text);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  font-size: var(--msp-font-size-sm);
  font-variant-numeric: tabular-nums;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-params-params-form-unsupported {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-params-params-form-mapped, .msp-params-params-form-fields, .msp-params-params-form-nested {
  gap: var(--msp-space-1);
  display: grid;
}

.msp-params-params-form-nested :is(.msp-params-params-form-label, .msp-params-params-form-collapsibleHeader) {
  padding-left: var(--msp-space-3);
}

.msp-params-params-form-nested .msp-params-params-form-nested :is(.msp-params-params-form-label, .msp-params-params-form-collapsibleHeader) {
  padding-left: calc(2 * var(--msp-space-3));
}

.msp-params-params-form-nested .msp-params-params-form-nested .msp-params-params-form-nested :is(.msp-params-params-form-label, .msp-params-params-form-collapsibleHeader) {
  padding-left: calc(3 * var(--msp-space-3));
}

.msp-params-params-form-collapsible {
  display: grid;
}

.msp-params-params-form-collapsibleBar {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  display: flex;
}

.msp-params-params-form-collapsibleHeader {
  align-items: center;
  gap: var(--msp-space-1);
  min-width: 0;
  height: 24px;
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  flex: auto;
  display: flex;

  &:hover {
    color: var(--msp-color-text);
  }
}

.msp-params-params-form-chevron {
  color: var(--msp-color-text-subtle);
  transition: transform var(--msp-motion-fast) var(--msp-ease);
  flex: none;

  [aria-expanded="true"] > & {
    transform: rotate(90deg);
  }
}

.msp-params-params-form-collapsibleMeta {
  min-width: 0;
  margin-left: var(--msp-space-1);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  white-space: nowrap;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-params-params-form-presets {
  align-items: center;
  gap: var(--msp-space-1);
  height: 20px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  flex: none;
  display: flex;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }
}

.msp-params-params-form-presetsList {
  margin: var(--msp-space-1) 0;
  display: block;

  & > * {
    animation: none;
  }
}

.msp-params-params-form-settings {
  border-radius: var(--msp-radius-md);
  width: 24px;
  height: 24px;
  color: var(--msp-color-text-muted);
  place-items: center;
  margin-left: auto;
  display: grid;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-params-params-form-subSettings {
  margin: var(--msp-space-1) calc(-1 * var(--msp-space-2)) var(--msp-space-1);
  padding: var(--msp-space-1) var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);

  & .msp-params-params-form-label {
    padding-left: var(--msp-space-3);
  }
}

.msp-params-params-form-file {
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  align-items: center;
  width: 100%;
  min-width: 0;
  height: 24px;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  &[data-dragging] {
    background: var(--msp-color-hover);
    outline: 1.5px dashed var(--msp-color-border-strong);
    outline-offset: -1.5px;
  }
}

.msp-params-params-form-filePick {
  align-items: center;
  gap: var(--msp-space-3);
  min-width: 0;
  height: 100%;
  padding: 0 var(--msp-inset);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  flex: 1;
  display: flex;

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
    border-radius: var(--msp-radius-md);
  }
}

.msp-params-params-form-fileNames {
  min-width: 0;
  color: var(--msp-color-text);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;

  &[data-empty] {
    color: var(--msp-color-text-muted);
  }
}

.msp-params-params-form-fileClear {
  width: 20px;
  height: 20px;
  margin-right: var(--msp-space-1);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-muted);
  flex: none;
  place-items: center;
  display: grid;

  &:hover {
    background: var(--msp-color-pressed);
    color: var(--msp-color-text);
  }
}

.msp-params-params-form-count {
  padding-left: var(--msp-space-3);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-sm);
  flex: 1;
}

.msp-params-params-form-items {
  margin: var(--msp-space-1) calc(-1 * var(--msp-space-2)) var(--msp-space-1);
  padding: var(--msp-space-1) var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  display: grid;
}

.msp-params-params-form-item {
  display: grid;
}

.msp-params-params-form-itemRow {
  cursor: pointer;
  align-items: center;
  gap: var(--msp-space-1);
  height: 26px;
  margin: 0 calc(-1 * var(--msp-space-1));
  padding: 0 var(--msp-space-1) 0 calc(var(--msp-space-1) + var(--msp-space-3));
  border-radius: var(--msp-radius-sm);
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  & .msp-params-params-form-settings {
    opacity: 0;
    width: 22px;
    height: 22px;
  }

  &:hover .msp-params-params-form-settings, & .msp-params-params-form-settings:focus-visible, [data-open] > & .msp-params-params-form-settings {
    opacity: 1;
  }
}

.msp-params-params-form-itemLabel {
  min-width: 0;
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-params-params-form-itemForm {
  padding: var(--msp-space-1) 0 var(--msp-space-2);

  & .msp-params-params-form-label {
    padding-left: calc(2 * var(--msp-space-3));
  }
}

.msp-params-params-form-itemActions {
  justify-content: space-between;
  align-items: center;
  gap: var(--msp-space-2);
  display: flex;
}

.msp-params-params-form-itemAdd {
  align-items: center;
  gap: var(--msp-space-2);
  height: 26px;
  margin: 0 calc(-1 * var(--msp-space-1));
  padding: 0 var(--msp-space-1) 0 calc(var(--msp-space-1) + var(--msp-space-3));
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}
}
`)})))()}var Q;function zn(){return(zn=e((()=>{o(),Q={check:`msp-params-extra-controls-check`,chevron:`msp-params-extra-controls-chevron`,curve:`msp-params-extra-controls-curve`,field:`msp-params-extra-controls-field`,fieldContent:`msp-params-extra-controls-fieldContent`,graph:`msp-params-extra-controls-graph`,graphArea:`msp-params-extra-controls-graphArea`,graphAt:`msp-params-extra-controls-graphAt`,graphEditor:`msp-params-extra-controls-graphEditor`,graphFoot:`msp-params-extra-controls-graphFoot`,graphHint:`msp-params-extra-controls-graphHint`,grid:`msp-params-extra-controls-grid`,interval:`msp-params-extra-controls-interval`,intervalRange:`msp-params-extra-controls-intervalRange`,intervalTrack:`msp-params-extra-controls-intervalTrack`,intervalValue:`msp-params-extra-controls-intervalValue`,matrix:`msp-params-extra-controls-matrix`,option:`msp-params-extra-controls-option`,options:`msp-params-extra-controls-options`,optionsContent:`msp-params-extra-controls-optionsContent`,point:`msp-params-extra-controls-point`,spark:`msp-params-extra-controls-spark`,strip:`msp-params-extra-controls-strip`,stripName:`msp-params-extra-controls-stripName`,under:`msp-params-extra-controls-under`,vec:`msp-params-extra-controls-vec`},i(`components/params/extra-controls.module.css`,`@layer msp.components {
.msp-params-extra-controls-field {
  align-items: center;
  gap: var(--msp-space-2);
  width: 100%;
  min-width: 0;
  height: 24px;
  padding: 0 var(--msp-space-2) 0 var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  display: flex;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }
}

.msp-params-extra-controls-fieldContent {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  display: flex;
  overflow: hidden;
}

.msp-params-extra-controls-chevron {
  color: var(--msp-color-text-muted);
  transition: transform var(--msp-motion-fast) var(--msp-ease);
  flex: none;

  [aria-expanded="true"] > & {
    transform: rotate(180deg);
  }
}

.msp-params-extra-controls-under {
  margin: var(--msp-space-1) 0 var(--msp-space-1);
  padding: var(--msp-space-1);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
}

.msp-params-extra-controls-options {
  max-height: 240px;
}

.msp-params-extra-controls-optionsContent {
  display: grid;
}

.msp-params-extra-controls-option {
  align-items: center;
  gap: var(--msp-space-2);
  min-height: 26px;
  padding: 0 var(--msp-space-2) 0 var(--msp-space-3);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  display: flex;

  & > span:first-child:not(.msp-params-extra-controls-strip) {
    flex: 1;
  }

  &:hover, &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
    outline: none;
  }

  &[aria-selected="true"] {
    color: var(--msp-color-accent);
    font-weight: 600;
  }
}

.msp-params-extra-controls-check {
  visibility: hidden;
  flex: none;
  margin-left: auto;

  [aria-selected="true"] > & {
    visibility: visible;
  }
}

.msp-params-extra-controls-vec {
  gap: var(--msp-space-1);
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: 100%;
  display: grid;
}

.msp-params-extra-controls-matrix {
  gap: var(--msp-space-1);
  padding: var(--msp-space-1);
  grid-template-columns: repeat(4, minmax(0, 1fr));
  display: grid;
}

.msp-params-extra-controls-interval {
  align-items: center;
  gap: var(--msp-space-2);
  grid-template-columns: minmax(0, 1fr) 72px;
  width: 100%;
  display: grid;
}

.msp-params-extra-controls-intervalTrack {
  height: 16px;
  margin-left: var(--msp-space-3);
  position: relative;

  &:before {
    content: "";
    background: linear-gradient(90deg,
      var(--msp-color-pressed) var(--msp-from),
      color-mix(in oklab, var(--msp-color-text-muted), transparent 45%) var(--msp-from) var(--msp-to),
      var(--msp-color-pressed) var(--msp-to));
    border-radius: 1.5px;
    height: 3px;
    margin-top: -1.5px;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
  }
}

.msp-params-extra-controls-intervalRange {
  -webkit-appearance: none;
  appearance: none;
  pointer-events: none;
  background: none;
  width: 100%;
  margin: 0;
  position: absolute;
  inset: 0;

  &::-webkit-slider-runnable-track {
    background: none;
    height: 3px;
  }

  &::-webkit-slider-thumb {
    background: var(--msp-color-text-muted);
    -webkit-appearance: none;
    appearance: none;
    pointer-events: auto;
    cursor: pointer;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin-top: -3.5px;
  }

  &::-moz-range-track {
    background: none;
  }

  &::-moz-range-thumb {
    background: var(--msp-color-text-muted);
    pointer-events: auto;
    cursor: pointer;
    border: 0;
    border-radius: 50%;
    width: 10px;
    height: 10px;
  }

  &:focus-visible {
    outline: none;
  }
}

.msp-params-extra-controls-intervalValue {
  height: 24px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  font-variant-numeric: tabular-nums;
  text-align: right;
  line-height: 24px;
}

.msp-params-extra-controls-strip {
  width: 56px;
  height: 10px;
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  border-radius: 2px;
  flex: none;
}

.msp-params-extra-controls-stripName {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-params-extra-controls-spark {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.2px;
  vector-effect: non-scaling-stroke;
  flex: none;
  width: 56px;
  height: 14px;
}

.msp-params-extra-controls-graphEditor {
  gap: var(--msp-space-1);
  padding: var(--msp-space-1);
  display: grid;
}

.msp-params-extra-controls-graph {
  border-radius: var(--msp-radius-sm);
  background: var(--msp-color-panel);
  cursor: crosshair;
  touch-action: none;
  width: 100%;
  height: 96px;
  display: block;
}

.msp-params-extra-controls-grid {
  stroke: var(--msp-glass-edge);
  stroke-width: 1px;
  vector-effect: non-scaling-stroke;
}

.msp-params-extra-controls-curve {
  fill: none;
  stroke: var(--msp-color-text-muted);
  stroke-width: 1.5px;
  vector-effect: non-scaling-stroke;
}

.msp-params-extra-controls-point {
  fill: var(--msp-color-panel);
  stroke: var(--msp-color-text);
  stroke-width: 1.5px;
  vector-effect: non-scaling-stroke;
  cursor: grab;

  &:hover {
    fill: var(--msp-color-accent);
  }
}

.msp-params-extra-controls-graphArea {
  position: relative;
}

.msp-params-extra-controls-graphAt {
  top: var(--msp-space-1);
  right: var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  pointer-events: none;
  position: absolute;
}

.msp-params-extra-controls-graphFoot {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  display: flex;

  & > .msp-params-extra-controls-graphHint {
    flex: auto;
    min-width: 0;
  }
}

.msp-params-extra-controls-graphHint {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  margin: 0;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}
}
`)})))()}function Bn(e){let{open:t}=e;return p(`button`,{type:`button`,class:Z.presets,"aria-label":`${e.label} presets`,"aria-haspopup":`listbox`,"aria-expanded":t,onClick:e=>{e.stopPropagation(),t.set(!t.value)},children:[l(I,{name:`swatch-book`,size:12}),`Presets`]})}function Vn(e){let{open:t}=e;return l(j,{when:t,reveal:!0,children:()=>{let n=e.presets();return l(`div`,{class:Z.presetsList,children:l(V,{options:n.map(([,e],t)=>[String(t),e]),value:e.current.pipe(_(e=>e===void 0?void 0:String(e))),onPick:r=>{t.set(!1);let i=n[Number(r)];i&&e.onPick(i[0])},onClose:()=>t.set(!1)})})}})}function Hn(e,t,n=!1){let r=e.findIndex(([e])=>n&&e&&typeof e==`object`&&t&&typeof t==`object`?Object.entries(e).every(([e,n])=>Un(t[e],n)):Un(e,t));return r<0?void 0:r}var Un;function Wn(){return(Wn=e((()=>{y(),D(),F(),z(),Rn(),m(),Un=(e,t)=>JSON.stringify(e)===JSON.stringify(t)})))()}function Gn(e){let t=S(!1);return p(u,{children:[p(`div`,{class:Z.row,children:[l(`span`,{class:Z.label,children:e.head}),l(`div`,{class:Z.control,children:e.field(t)})]}),l(j,{when:t,reveal:!0,children:()=>l(`div`,{class:Q.under,children:e.body(()=>t.set(!1))})})]})}function Kn(e){return p(`button`,{type:`button`,class:Q.field,"aria-expanded":e.open,"aria-label":e.label,onClick:()=>e.open.set(!e.open.value),children:[l(`span`,{class:Q.fieldContent,children:e.children}),l(I,{name:`chevron-down`,size:14,class:Q.chevron})]})}function qn(e){let{param:t,binding:n}=e,r=n.value.pipe(_(e=>{let n=t.options.filter(([t])=>e?.includes(t)).map(([,e])=>e);return n.length?n.join(`, `):t.emptyValue??`None`}));return l(Gn,{head:e.head,field:t=>l(Kn,{open:t,label:e.label,children:r}),body:()=>l(R,{class:Q.options,contentClass:Q.optionsContent,role:`listbox`,"aria-multiselectable":`true`,"aria-label":e.label,children:t.options.map(([e,t])=>p(`button`,{type:`button`,role:`option`,class:Q.option,"aria-selected":n.value.pipe(_(t=>!!t?.includes(e)),M()),onClick:()=>{let t=n.get()??[];n.set(t.includes(e)?t.filter(t=>t!==e):[...t,e])},children:[l(`span`,{children:t}),l(I,{name:`check`,size:14,class:Q.check})]}))})})}function Jn(e){let{binding:t}=e;return l(`div`,{class:Q.vec,children:[`x`,`y`,`z`].map((e,n)=>l(`input`,{class:Z.number,"aria-label":e,"data-tip":e,value:t.value.pipe(_(e=>Yn(e?.[n]))),onChange:e=>{let r=Number(e.currentTarget.value);if(!Number.isFinite(r))return;let i=[...t.get()??[0,0,0]];i[n]=r,t.set(i)}}))})}function Yn(e){return e===void 0||!Number.isFinite(e)?``:String(Math.round(e*1e4)/1e4)}function Xn(e){let{binding:t}=e,n=e=>{for(let t=0;t<16;t++)if(e[t]!==+(t%5==0))return!1;return!0};return l(Gn,{head:e.head,field:r=>l(Kn,{open:r,label:e.label,children:t.value.pipe(_(e=>e&&n(e)?`Identity`:`4 × 4 matrix`))}),body:()=>l(`div`,{class:Q.matrix,children:Array.from({length:16},(e,n)=>{let r=n%4*4+Math.floor(n/4);return l(`input`,{class:Z.number,value:t.value.pipe(_(e=>Yn(e?.[r]))),onChange:e=>{let n=Number(e.currentTarget.value);if(!Number.isFinite(n))return;let i=Array.from(t.get());i[r]=n,t.set(i)}})})})})}function Zn(e){let{param:t,binding:n}=e,r=t.min??0,i=t.max??1,a=t.step??(i-r)/100,o=e=>`${100*(e-r)/(i-r||1)}%`,s=a<1?Math.min(4,Math.ceil(-Math.log10(a))):0,c=e=>l(`input`,{class:Q.intervalRange,type:`range`,min:String(r),max:String(i),step:String(a),"aria-label":e===0?`From`:`To`,value:n.value.pipe(_(t=>String(t?.[e]??(e?i:r)))),onInput:t=>{let a=Number(t.currentTarget.value),o=[...n.get()??[r,i]];o[e]=e===0?Math.min(a,o[1]):Math.max(a,o[0]),n.set(o),t.currentTarget.value=String(o[e])}});return p(`div`,{class:Q.interval,children:[p(`div`,{class:Q.intervalTrack,style:{"--msp-from":n.value.pipe(_(e=>o(e?.[0]??r))),"--msp-to":n.value.pipe(_(e=>o(e?.[1]??i)))},children:[c(0),c(1)]}),l(`span`,{class:Q.intervalValue,children:n.value.pipe(_(e=>`${(e?.[0]??r).toFixed(s)}–${(e?.[1]??i).toFixed(s)}`))})]})}function Qn(e){let t=e?.colors??[];if(!t.length)return`none`;let n=t.map((e,n)=>Array.isArray(e)?{color:wn(e[0]),at:e[1]}:{color:wn(e),at:t.length===1?0:n/(t.length-1)});if(e?.kind===`set`){let e=n.length;return`linear-gradient(90deg, ${n.map((t,n)=>`${t.color} ${100*n/e}% ${100*(n+1)/e}%`).join(`, `)})`}return`linear-gradient(90deg, ${n.map(e=>`${e.color} ${100*e.at}%`).join(`, `)})`}function $n(e){let{param:t,binding:n}=e,r=t.presetKind??`all`,i=rr.filter(([,e])=>r===`all`?!0:r===`set`?e.type===`qualitative`:e.type!==`qualitative`),a=e=>i.find(([,t])=>JSON.stringify(t.list)===JSON.stringify(e?.colors))?.[1].label??`Custom`;return l(Gn,{head:e.head,field:t=>p(Kn,{open:t,label:e.label,children:[l(`span`,{class:Q.strip,style:{background:n.value.pipe(_(Qn))}}),l(`span`,{class:Q.stripName,children:n.value.pipe(_(a))})]}),body:t=>l(R,{class:Q.options,contentClass:Q.optionsContent,role:`listbox`,"aria-label":e.label,children:i.map(([,e])=>{let r={kind:e.type===`qualitative`?`set`:`interpolate`,colors:e.list};return p(`button`,{type:`button`,role:`option`,class:Q.option,"aria-selected":n.value.pipe(_(t=>a(t)===e.label)),onClick:()=>{n.set({kind:r.kind,colors:[...r.colors]}),t()},children:[l(`span`,{class:Q.strip,style:{background:Qn(r)}}),l(`span`,{class:Q.stripName,children:e.label}),l(I,{name:`check`,size:14,class:Q.check})]})})})})}function er(e){let{binding:t}=e;return l(`input`,{class:Z.input,placeholder:`https://…`,value:t.value.pipe(_(e=>e?.url??``)),onChange:e=>t.set(pn.Url(e.currentTarget.value))})}function tr(e){let{binding:t}=e,n=(e,t,n)=>(e??[]).map(([e,r],i)=>`${i?`L`:`M`}${(e*t).toFixed(1)} ${((1-r)*n).toFixed(1)}`).join(` `);return l(Gn,{head:e.head,field:r=>p(Kn,{open:r,label:e.label,children:[l(`svg`,{class:Q.spark,viewBox:`0 0 56 14`,preserveAspectRatio:`none`,"aria-hidden":`true`,children:l(`path`,{d:t.value.pipe(_(e=>n(e,56,14)))})}),l(`span`,{class:Q.stripName,children:t.value.pipe(_(e=>`${e?.length??0} points`))})]}),body:()=>l(nr,{param:e.param,binding:t,pathOf:n})})}function nr(e){let{binding:t}=e,n=S(``),r=t.value,i=e.param.getPresets,a=S(!1),o=p(`svg`,{class:Q.graph,viewBox:`0 0 240 96`,preserveAspectRatio:`none`,children:[[.25,.5,.75].map(e=>l(`line`,{class:Q.grid,x1:String(e*240),x2:String(e*240),y1:`0`,y2:`96`})),[.25,.5,.75].map(e=>l(`line`,{class:Q.grid,y1:String(e*96),y2:String(e*96),x1:`0`,x2:`240`})),l(`path`,{class:Q.curve,d:t.value.pipe(_(t=>e.pathOf(t,240,96)))}),l(k,{each:r.pipe(_(e=>(e??[]).map((e,t)=>t))),children:e=>l(`circle`,{class:Q.point,r:`4`,cx:r.pipe(_(t=>String((t?.[e]?.[0]??0)*240))),cy:r.pipe(_(t=>String((1-(t?.[e]?.[1]??0))*96))),"data-index":String(e)})})]}),s=e=>{let t=o.getBoundingClientRect(),n=Math.min(1,Math.max(0,(e.clientX-t.left)/t.width)),r=Math.min(1,Math.max(0,1-(e.clientY-t.top)/t.height));return[Math.round(n*1e3)/1e3,Math.round(r*1e3)/1e3]},u=-1,d=e=>{let n=e.target,r=[...t.get()??[]];if(n.tagName===`circle`){u=Number(n.dataset.index),o.setPointerCapture(e.pointerId);return}let i=s(e),a=r.findIndex(([e])=>e>i[0]);r.splice(a<0?r.length:a,0,i),t.set(r)},f=e=>{let r=s(e);if(n.set(`${r[0].toFixed(2)}, ${r[1].toFixed(2)}`),u<0)return;let i=[...t.get()??[]],a=u>0?i[u-1][0]:0,o=u<i.length-1?i[u+1][0]:1;i[u]=[Math.min(o,Math.max(a,r[0])),r[1]],t.set(i)},m=()=>{u=-1};return o.addEventListener(`pointerdown`,d),o.addEventListener(`pointermove`,f),o.addEventListener(`pointerup`,m),o.addEventListener(`pointercancel`,m),o.addEventListener(`dblclick`,e=>{let n=e.target;if(n.tagName!==`circle`)return;let r=Number(n.dataset.index),i=[...t.get()??[]];i.length<=2||(i.splice(r,1),t.set(i))}),o.addEventListener(`pointerleave`,()=>n.set(``)),c(()=>{u=-1}),p(`div`,{class:Q.graphEditor,children:[p(`div`,{class:Q.graphArea,children:[o,l(`span`,{class:Q.graphAt,children:n.asReadonly})]}),p(`div`,{class:Q.graphFoot,children:[l(`p`,{class:Q.graphHint,children:`Drag a point · click to add · double-click to remove`}),i?l(Bn,{open:a,label:`Curve`}):null]}),i?l(Vn,{open:a,presets:i,current:t.value.pipe(_(e=>Hn(i(),e))),onPick:e=>t.set(e)}):null]})}var rr;function ir(){return(ir=e((()=>{mn(),bt(),T(),y(),D(),d(),b(),Ln(),F(),L(),zn(),Rn(),Wn(),m(),rr=Object.entries(J)})))()}var $;function ar(){return(ar=e((()=>{o(),$={bar:`msp-params-help-bar`,description:`msp-params-help-description`,ends:`msp-params-help-ends`,entry:`msp-params-help-entry`,help:`msp-params-help-help`,name:`msp-params-help-name`,scale:`msp-params-help-scale`,swatch:`msp-params-help-swatch`,table:`msp-params-help-table`,text:`msp-params-help-text`,toggle:`msp-params-help-toggle`},i(`components/params/help.module.css`,`@layer msp.components {
.msp-params-help-text {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;

  &[data-help] {
    text-decoration: underline dotted color-mix(in oklab, currentColor, transparent 45%);
    text-underline-offset: 3px;
    cursor: help;
    text-decoration-thickness: 1px;
  }
}

.msp-params-help-toggle {
  width: 16px;
  height: 16px;
  color: var(--msp-color-text-subtle);
  opacity: 0;
  border-radius: 50%;
  flex: none;
  place-items: center;
  display: grid;

  :hover > * > &, :hover > &, &[aria-expanded="true"], &:focus-visible {
    opacity: 1;
  }

  &:hover, &[aria-expanded="true"] {
    color: var(--msp-color-text);
  }
}

.msp-params-help-help {
  gap: var(--msp-space-2);
  margin: var(--msp-space-1) 0 var(--msp-space-1);
  padding: var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  font-size: var(--msp-font-size-xs);
  display: grid;
}

.msp-params-help-description {
  color: var(--msp-color-text-muted);
  margin: 0;
  line-height: 1.45;

  & code {
    padding: 0 var(--msp-space-1);
    background: var(--msp-color-control);
    font-family: var(--msp-font-mono);
    border-radius: 2px;
    font-size: .95em;
  }
}

.msp-params-help-table {
  gap: var(--msp-space-1) var(--msp-space-3);
  grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
}

.msp-params-help-entry {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  display: flex;
}

.msp-params-help-swatch {
  width: 12px;
  height: 12px;
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  border-radius: 2px;
  flex: none;
}

.msp-params-help-name {
  min-width: 0;
  color: var(--msp-color-text);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-params-help-scale {
  gap: var(--msp-space-1);
  display: grid;
}

.msp-params-help-bar {
  height: 10px;
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  border-radius: 2px;
}

.msp-params-help-ends {
  color: var(--msp-color-text-muted);
  font-variant-numeric: tabular-nums;
  justify-content: space-between;
  display: flex;
}
}
`)})))()}function or(e,t){let n=e=>e&&(e.description||e.legend)?e:void 0;if(e.help){let r=e.help;return t.pipe(_(e=>{try{return n(r(e))}catch{return}}),M((e,t)=>e?.description===t?.description&&e?.legend===t?.legend))}let r=n({description:e.description,legend:e.legend});return r?A(r):void 0}function sr(e,t){if(!t)return{head:l(`span`,{class:$.text,"data-tip-overflow":``,children:e}),block:null};let n=S(!1),r=t.pipe(_(e=>!!e));return{head:p(u,{children:[l(`span`,{class:$.text,"data-tip-overflow":``,"data-help":r.pipe(_(e=>e?``:void 0)),onClick:e=>{e.currentTarget.hasAttribute(`data-help`)&&(e.stopPropagation(),n.set(!n.value))},children:e}),l(j,{when:r,children:()=>l(`button`,{type:`button`,class:$.toggle,"aria-label":`About ${e}`,title:`About ${e}`,"aria-expanded":n,onClick:e=>{e.stopPropagation(),n.set(!n.value)},children:l(I,{name:`circle-help`,size:12})})})]}),block:l(cr,{help:t,open:n})}}function cr(e){return l(j,{when:e.open,reveal:!0,children:()=>l(j,{when:e.help,children:e=>p(`div`,{class:$.help,children:[e.description?l(`p`,{class:$.description,children:lr(e.description)}):null,e.legend?l(ur,{legend:e.legend}):null]})})})}function lr(e){return e.split(/(`[^`]+`)/).map(e=>e.startsWith("`")&&e.endsWith("`")&&e.length>1?l(`code`,{children:e.slice(1,-1)}):e)}function ur(e){let{legend:t}=e;return t.kind===`table-legend`?l(`ul`,{class:$.table,children:t.table.map(([e,t])=>p(`li`,{class:$.entry,children:[l(`span`,{class:$.swatch,style:{background:wn(t)}}),l(`span`,{class:$.name,children:e})]}))}):p(`div`,{class:$.scale,children:[l(`span`,{class:$.bar,style:{background:Qn({kind:`interpolate`,colors:t.colors})}}),p(`span`,{class:$.ends,children:[l(`span`,{children:t.minLabel}),l(`span`,{children:t.maxLabel})]})]})}function dr(){return(dr=e((()=>{T(),y(),E(),D(),b(),Ln(),F(),ir(),ar(),m()})))()}function fr(e){let{form:t}=e,n=pr(e.filter),{essentials:r,advanced:i}=t.layout(),a=e=>l(vr,{name:e,param:t.params[e],visible:t.visible(e),filter:n,binding:{value:t.field(e),get:()=>t.values.value[e],set:n=>t.set(e,n)}}),o=n?.pipe(_(e=>i.some(n=>_r(n,t.params[n],e))),M());return p(`div`,{class:Z.form,children:[r.map(a),i.length?l(`div`,{hidden:o?.pipe(_(e=>!e)),children:l(Lr,{title:`Advanced`,force:mr(n),children:()=>i.map(a)})}):null]})}function pr(e){return e?.pipe(_(e=>e.trim().toLowerCase()),M())}function mr(e){return e?.pipe(_(e=>e.length>0),M())}function hr(e,t){return t.label||$e(e)}function gr(e,t){let n=t.trim().toLowerCase();return Object.keys(e).some(t=>!e[t].isHidden&&_r(t,e[t],n))}function _r(e,t,n){return!n||hr(e,t).toLowerCase().includes(n)||t.description?.toLowerCase().includes(n)?!0:t.type===`group`?Object.keys(t.params).some(e=>_r(e,t.params[e],n)):t.type===`mapped`&&t.select.options.some(([e])=>{let r=t.map(e);return r.type===`group`?Object.keys(r.params).some(e=>_r(e,r.params[e],n)):_r(e,r,n)})}function vr(e){let{name:t,param:n,binding:r,filter:i}=e,a=hr(t,n),o=(i?P([e.visible??A(!0),i]).pipe(_(([e,r])=>e&&_r(t,n,r))):e.visible)?.pipe(_(e=>!e),M());if(n.type===`group`){let e=i?.pipe(_(e=>a.toLowerCase().includes(e)?``:e));return l(`div`,{hidden:o,children:l(Er,{label:a,param:n,binding:r,filter:e,force:mr(i)})})}let{head:s,block:c}=sr(a,or(n,r.value)),u=e=>p(`div`,{hidden:o,children:[e,c]});if(n.type===`mapped`)return u(Or(n)?l(kr,{label:a,head:s,description:n.description,param:n,binding:r}):l(Ar,{label:a,head:s,param:n,binding:r}));if(n.type===`select`)return u(l(Tr,{label:a,head:s,description:n.description,options:n.options,binding:r}));if(n.type===`color`)return u(l(yr,{label:a,head:s,description:n.description,binding:r}));if(n.type===`multi-select`)return u(l(qn,{head:s,label:a,param:n,binding:r}));if(n.type===`mat4`)return u(l(Xn,{head:s,label:a,param:n,binding:r}));if(n.type===`line-graph`)return u(l(tr,{head:s,label:a,param:n,binding:r}));if(n.type===`color-list`)return u(l($n,{head:s,label:a,param:n,binding:r}));if(n.type===`object-list`)return u(l(Pr,{head:s,label:a,param:n,binding:r}));if(n.type===`conditioned`)return u(l(Mr,{head:s,label:a,param:n,binding:r}));if(n.type===`script`)return u(l(Nr,{head:s,label:a,binding:r}));if(n.type===`converted`){let o={value:r.value.pipe(_(e=>n.fromValue(e))),get:()=>n.fromValue(r.get()),set:e=>r.set(n.toValue(e))},s={...n.converted,label:n.converted.label??a};return l(vr,{name:t,param:s,binding:o,visible:e.visible,filter:i})}return n.type===`value`?null:u(p(`div`,{class:Z.row,children:[l(`span`,{class:Z.label,children:s}),l(`div`,{class:Z.control,children:xr(n,r)})]}))}function yr(e){let{binding:t}=e,n=S(!1),r=t.value.pipe(_(e=>wn(e))),i=t.value.pipe(_(e=>Tn(e)));return p(u,{children:[p(`div`,{class:Z.row,children:[l(`span`,{class:Z.label,children:e.head??e.label}),l(`div`,{class:Z.control,children:p(`button`,{type:`button`,class:Z.color,"aria-expanded":n,onClick:()=>n.set(!n.value),children:[l(`span`,{class:Z.swatch,style:{background:r}}),l(`span`,{class:Z.channels,"data-tip-overflow":``,children:i})]})})]}),l(j,{when:n,reveal:!0,children:()=>l(Mn,{value:t.value,onChange:e=>t.set(e)})})]})}function br(e){let{param:t,binding:n}=e,r=t.type===`file-list`,i=S(!1),a=e=>{e.length&&n.set(r?e.map(e=>pn.File(e)):pn.File(e[0]))},o=l(`input`,{type:`file`,hidden:!0,multiple:r,accept:t.accept,onChange:e=>{a([...e.currentTarget.files??[]]),e.currentTarget.value=``}}),s=n.value.pipe(_(e=>(e?Array.isArray(e)?e:[e]:[]).map(e=>e.name)));return p(`div`,{class:Z.file,"data-dragging":i.asReadonly.pipe(_(e=>e?``:void 0)),children:[l(`button`,{type:`button`,class:Z.filePick,onClick:()=>o.click(),onDragOver:e=>{e.preventDefault(),i.set(!0)},onDragLeave:()=>i.set(!1),onDrop:e=>{e.preventDefault(),e.stopPropagation(),i.set(!1),a([...e.dataTransfer?.files??[]])},children:l(`span`,{class:Z.fileNames,"data-empty":s.pipe(_(e=>e.length?void 0:``)),children:s.pipe(_(e=>e.length===0?r?`Select files…`:`Select a file…`:e.length===1?e[0]:`${e.length} files · ${e.join(`, `)}`))})}),l(j,{when:s.pipe(_(e=>e.length>0)),children:()=>l(`button`,{type:`button`,class:Z.fileClear,"aria-label":`Clear`,title:`Clear`,onClick:()=>n.set(null),children:l(I,{name:`x`,size:13})})}),o]})}function xr(e,t){switch(e.type){case`boolean`:return l(Sr,{binding:t});case`number`:return l(Cr,{param:e,binding:t});case`text`:return e.multiline?l(`textarea`,{class:Z.textarea,rows:3,value:t.value,placeholder:e.placeholder,onChange:e=>t.set(e.currentTarget.value)}):l(`input`,{class:Z.input,value:t.value,placeholder:e.placeholder,onChange:e=>t.set(e.currentTarget.value)});case`file`:case`file-list`:return l(br,{param:e,binding:t});case`vec3`:return l(Jn,{param:e,binding:t});case`interval`:return l(Zn,{param:e,binding:t});case`url`:return l(er,{binding:t});default:return l(`span`,{class:Z.unsupported,children:e.type})}}function Sr(e){let{binding:t}=e;return l(`button`,{type:`button`,role:`switch`,class:Z.switch,"aria-checked":t.value.pipe(_(e=>!!e)),onClick:()=>t.set(!t.get()),children:l(`span`,{class:Z.knob})})}function Cr(e){let{param:t,binding:n}=e,r=n.value.pipe(_(e=>wr(e,t.step)));return t.min===void 0||t.max===void 0?l(`input`,{class:Z.input,type:`number`,step:String(t.step??`any`),value:r,onChange:e=>{let t=Number(e.currentTarget.value);Number.isFinite(t)&&n.set(t)}}):p(`div`,{class:Z.slider,children:[l(`input`,{class:Z.range,type:`range`,min:String(t.min),max:String(t.max),step:String(t.step??(t.max-t.min)/100),value:n.value.pipe(_(String)),style:{"--msp-progress":n.value.pipe(_(e=>`${100*(e-t.min)/(t.max-t.min||1)}%`))},onInput:e=>n.set(Number(e.currentTarget.value))}),l(`input`,{class:Z.number,value:r,onChange:e=>{let r=Number(e.currentTarget.value);Number.isFinite(r)&&n.set(Math.min(t.max,Math.max(t.min,r)))}})]})}function wr(e,t){if(!Number.isFinite(e))return``;let n=t&&t<1?Math.min(4,Math.ceil(-Math.log10(t))):0;return e.toFixed(n)}function Tr(e){let{options:t,binding:n}=e,r=S(!1),i=n.value.pipe(_(e=>String(t.findIndex(t=>t[0]===e)))),a=t.map(([,e],t)=>[String(t),e]);return p(u,{children:[p(`div`,{class:Z.row,children:[l(`span`,{class:Z.label,children:e.head??e.label}),l(`div`,{class:Z.control,children:l(B,{size:`sm`,open:r,"aria-label":e.label,label:i.pipe(_(e=>a[Number(e)]?.[1]??``))})})]}),l(j,{when:r,children:()=>l(V,{options:a,value:i,onPick:e=>{r.set(!1),n.set(t[Number(e)][0])},onClose:()=>r.set(!1)})})]})}function Er(e){let{param:t,binding:n,filter:r}=e,i=t.presets,a=e=>n.set({...n.get()??{},...e}),o=i?n.value.pipe(_(e=>Hn(i,e,!0)),M()):void 0;if(t.isFlat)return p(u,{children:[i&&o?l(Dr,{label:e.label,presets:i,current:o,onPick:a}):null,l(jr,{params:t.params,binding:n,filter:r})]});if(!i||!o)return l(Lr,{title:e.label,open:!!t.isExpanded,force:e.force,children:()=>l(jr,{params:t.params,binding:n,filter:r})});let s=S(!1),c=S(!1);return l(Lr,{title:e.label,open:!!t.isExpanded,force:e.force,openWhen:c.asReadonly,meta:o.pipe(_(e=>e===void 0?``:i[e][1])),action:l(Bn,{open:s,label:e.label}),below:()=>l(Vn,{open:s,presets:()=>i,current:o,onPick:e=>{a(e),c.set(!0)}}),children:()=>l(jr,{params:t.params,binding:n,filter:r})})}function Dr(e){let t=S(!1);return p(u,{children:[p(`div`,{class:Z.row,children:[l(`span`,{class:Z.label,children:`Presets`}),l(`div`,{class:Z.control,children:l(B,{size:`sm`,open:t,"aria-label":`${e.label} presets`,label:e.current.pipe(_(t=>t===void 0?`Custom`:e.presets[t][1]))})})]}),l(Vn,{open:t,presets:()=>e.presets,current:e.current,onPick:e.onPick})]})}function Or(e){let t=e.select.options.map(e=>e[0]).sort();return t.length===2&&t[0]===`off`&&t[1]===`on`}function kr(e){let{param:t,binding:n}=e,r=n.value.pipe(_(e=>e?.name===`on`),M()),i=S(!1),a=e=>n.set({name:e,params:Ir(t.map(e))}),o={value:r,get:()=>n.get()?.name===`on`,set:e=>{a(e?`on`:`off`),e||i.set(!1)}},s=t.map(`on`),c=s.type===`group`&&Object.keys(s.params).length>0,d={value:n.value.pipe(_(e=>e?.params),M()),get:()=>n.get()?.params,set:e=>n.set({name:`on`,params:e})};return p(u,{children:[p(`div`,{class:Z.row,children:[l(`span`,{class:Z.label,children:e.head??e.label}),p(`div`,{class:Z.control,children:[l(Sr,{binding:o}),c?l(j,{when:r,children:()=>l(`button`,{type:`button`,class:Z.settings,title:`${e.label} settings`,"aria-label":`${e.label} settings`,"aria-expanded":i,onClick:()=>i.set(!i.value),children:l(I,{name:`sliders-horizontal`,size:14})})}):null]})]}),c?l(j,{when:P([r,i.asReadonly]).pipe(_(([e,t])=>e&&t)),children:()=>l(`div`,{class:Z.subSettings,children:l(jr,{params:s.params,binding:d})})}):null]})}function Ar(e){let{param:t,binding:n}=e,r=n.value.pipe(_(e=>e?.name),M()),i={value:r,get:()=>n.get()?.name,set:e=>{let r=t.map(e);n.set({name:e,params:Ir(r)})}};return p(`div`,{class:Z.mapped,children:[l(Tr,{label:e.label,head:e.head,options:t.select.options,binding:i}),l(j,{when:r,children:e=>{let r=t.map(e),i={value:n.value.pipe(_(e=>e?.params),M()),get:()=>n.get()?.params,set:t=>n.set({name:e,params:t})};return r.type===`group`?l(jr,{params:r.params,binding:i,nested:!r.isFlat}):l(vr,{name:`value`,param:r,binding:i})}})]})}function jr(e){let{params:t,binding:n}=e;return l(`div`,{class:e.nested?Z.nested:Z.fields,children:Object.keys(t).filter(e=>!t[e].isHidden).map(r=>{let i=t[r],a=i.hideIf?n.value.pipe(_(e=>!i.hideIf(e??{}))):void 0;return l(vr,{name:r,param:i,visible:a,filter:e.filter,binding:{value:n.value.pipe(_(e=>e?.[r]),M()),get:()=>n.get()?.[r],set:e=>n.set({...n.get(),[r]:e})}})})})}function Mr(e){let{param:t,binding:n}=e,r=n.value.pipe(_(e=>String(t.conditionForValue(e))),M()),i={value:r,get:()=>String(t.conditionForValue(n.get())),set:e=>n.set(t.conditionedValue(n.get(),e))};return p(`div`,{class:Z.mapped,children:[l(Tr,{label:e.label,head:e.head,options:t.select.options,binding:i}),l(j,{when:r,children:e=>l(`div`,{class:Z.nested,children:l(vr,{name:e,param:t.conditionParams[e],binding:n})})})]})}function Nr(e){let{binding:t}=e,n=e=>({value:t.value.pipe(_(t=>t?.[e]??``),M()),get:()=>t.get()?.[e],set:n=>t.set({...t.get(),[e]:n})}),r=n(`expression`);return p(`div`,{class:Z.mapped,children:[l(Tr,{label:e.label,head:e.head,options:Rr,binding:n(`language`)}),l(`div`,{class:Z.nested,children:p(`div`,{class:Z.row,children:[l(`span`,{class:Z.label,children:`Expression`}),l(`div`,{class:Z.control,children:l(`textarea`,{class:Z.textarea,rows:3,spellcheck:!1,value:r.value,onChange:e=>r.set(e.currentTarget.value)})})]})})]})}function Pr(e){let{param:t,binding:n}=e,r=t.presets,i=S(!1),a=n.value.pipe(_(e=>e??[])),o=(e,t)=>{let r=[...n.get()??[]];r[e]=t,n.set(r)};return p(u,{children:[p(`div`,{class:Z.row,children:[l(`span`,{class:Z.label,children:e.head}),l(`div`,{class:Z.control,children:l(`span`,{class:Z.count,children:a.pipe(_(e=>e.length===1?`1 item`:`${e.length} items`))})})]}),p(`div`,{class:Z.items,children:[l(k,{each:a.pipe(_(e=>e.map((e,t)=>t))),children:e=>l(Fr,{param:t,binding:n,index:e,replace:o})}),p(`div`,{class:Z.itemActions,children:[p(`button`,{type:`button`,class:Z.itemAdd,"aria-label":`Add to ${e.label}`,onClick:()=>n.set([...n.get()??[],t.ctor()]),children:[l(I,{name:`plus`,size:13}),`Add`]}),r?l(Bn,{open:i,label:e.label}):null]}),r?l(Vn,{open:i,presets:()=>r,current:n.value.pipe(_(e=>Hn(r,e)),M()),onPick:e=>n.set(e)}):null]})]})}function Fr(e){let{param:t,binding:n,index:r}=e,i=S(!1);return p(`div`,{class:Z.item,"data-open":i.asReadonly.pipe(_(e=>e?``:void 0)),children:[p(`div`,{class:Z.itemRow,onClick:()=>i.set(!i.value),children:[l(`span`,{class:Z.itemLabel,children:n.value.pipe(_(e=>e?.[r]===void 0?``:t.getLabel(e[r])))}),l(`button`,{type:`button`,class:Z.settings,title:`Edit`,"aria-label":`Edit`,"aria-expanded":i,onClick:e=>{e.stopPropagation(),i.set(!i.value)},children:l(I,{name:`sliders-horizontal`,size:14})}),l(`button`,{type:`button`,class:Z.settings,title:`Remove`,"aria-label":`Remove`,onClick:e=>{e.stopPropagation(),n.set((n.get()??[]).filter((e,t)=>t!==r))},children:l(I,{name:`x`,size:13})})]}),l(j,{when:i,reveal:!0,children:()=>{let i=new vn(t.element,n.get()?.[r],{onChange:t=>e.replace(r,t)});return l(`div`,{class:Z.itemForm,children:l(fr,{form:i})})}})]})}function Ir(e){if(e.type===`group`){let t={};for(let n of Object.keys(e.params))t[n]=e.params[n].defaultValue;return t}return e.defaultValue}function Lr(e){let t=S(!!e.open);if(e.openWhen){let n=e.openWhen.subscribe(e=>{e&&t.set(!0)});c(()=>n.unsubscribe())}let n=e.force?P([t.asReadonly,e.force]).pipe(_(([e,t])=>e||t)):t.asReadonly;return p(`div`,{class:Z.collapsible,children:[p(`div`,{class:Z.collapsibleBar,children:[p(`button`,{type:`button`,class:Z.collapsibleHeader,"aria-expanded":n,onClick:()=>t.set(!t.value),children:[e.title,l(I,{name:`chevron-right`,size:12,class:Z.chevron}),e.meta?l(`span`,{class:Z.collapsibleMeta,children:e.meta}):null]}),e.action]}),e.below?.(),l(j,{when:n,reveal:!0,children:()=>l(`div`,{class:Z.nested,children:e.children()})})]})}var Rr;function zr(){return(zr=e((()=>{mn(),at(),te(),T(),y(),E(),D(),d(),yn(),b(),z(),Ln(),F(),Rn(),ir(),dr(),Wn(),m(),Rr=[[`mol-script`,`MolScript`],[`pymol`,`PyMOL`],[`vmd`,`VMD`],[`jmol`,`Jmol`]]})))()}export{se as _,vn as a,U as b,_n as c,K as d,Je as f,Ae as g,ke as h,Ln as i,$e as l,Ke as m,zr as n,yn as o,Ge as p,gr as r,gn as s,fr as t,at as u,oe as v,H as y};