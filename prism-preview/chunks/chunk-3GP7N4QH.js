import{c as Ra}from"./chunk-LJBF6CPP.js";import{a as Me,b as xi,c as Lr,d as Kr,f as wi,g as fa,j as Sr,k as Vi,l as Ni,m as _e,s as Ea,t as Fa,v as Yr,w as Ma}from"./chunk-W4W5JYP3.js";import{Ba as Fe,Ca as Ai,Da as De,Db as Cr,Ea as ke,Fa as zt,Fb as Zr,Ga as zi,Kb as Hi,Lb as Ba,P as Li,W as Bo,_a as ur,a as Ft,b as ca,c as vi,d as Zt,e as Te,f as Se,g as wo,i as Tr,j as Ti,ja as Oi,k as Si,ka as Ii,l as Ci,m as Yt,n as Pi,o as C,p as K,q as ie,r as Do,s as Ce,zb as Mo}from"./chunk-AOCCRDWK.js";import{h as Fo,j as Ei,k as gr,l as ma,n as Fi,o as dt}from"./chunk-OV2OLKVV.js";import{f as yi}from"./chunk-73TVMDCL.js";import{a as Bi,c as Mi}from"./chunk-JY64XCWB.js";import{k as hi,l as wa}from"./chunk-6IODVF5J.js";import{Fa as Di,Na as ki,da as Or,ea as Jt,fa as ka,ga as da,gb as Ro,ha as pa,ja as _r,ka as R,ma as mt,pb as Ri,tb as Eo,ua as ko,ub as Y}from"./chunk-3EGK4OQW.js";import{a as Qr}from"./chunk-CXZDK4AO.js";import{l as hr,w as Da}from"./chunk-55INLPL2.js";import{G as bi,H as fr,e as gi,h as Ne,o as ot,p as Po}from"./chunk-ZHHE2XG3.js";import{f as di,l as pi}from"./chunk-VIA7CHLF.js";import{a as Mr}from"./chunk-KHBNYRDQ.js";import{d as He,e as lr,l as mi,o as fi}from"./chunk-FY6Y25VJ.js";import{B as To,E as mr,Ea as Pa,G as ii,J as Ke,L as Et,M as So,N as Co,O as ni,Q as Ca,R as V,S as b,Ta as Br,U as si,W as Xr,b as Oe,c as k,ea as li,f as ri,g as ai,h as Ur,ha as ui,ia as ci,ib as ua,j as _t,o,oa as ge,p as Fr,pb as h,s as Ta,t as oi,v as xr,w as T,x as Sa,z as xo}from"./chunk-CZB3H7J7.js";var Bt=class s{constructor(e){this._=e}parse(e){let t=this.skip(s.eof)._(e,0);return t.status?{success:!0,value:t.value}:{success:!1,index:qi(e,t.furthest),expected:t.expected}}tryParse(e){let t=this.parse(e);if(t.success)return t.value;{let r=Es(e,t);throw new Error(r)}}or(e){return s.alt(this,e)}trim(e){return this.wrap(e,e)}wrap(e,t){return Lo(1,typeof e=="string"?s.string(e):e,this,typeof t=="string"?s.string(t):t)}thru(e){return e(this)}then(e){return Lo(1,this,e)}many(){return new s((e,t)=>{let r=[],a;for(;;)if(a=$t(this._(e,t),a),a.status){if(t===a.index)throw new Error("infinite loop detected in .many() parser --- calling .many() on a parser which can accept zero characters is usually the cause");t=a.index,r.push(a.value)}else return $t(xt(t,r),a)})}times(e,t){let r=typeof t>"u"?e:t;return new s((a,n)=>{let i=[],l,m,d;for(d=0;d<e;d++)if(l=this._(a,n),m=$t(l,m),l.status)n=l.index,i.push(l.value);else return m;for(;d<r&&(l=this._(a,n),m=$t(l,m),l.status);d+=1)n=l.index,i.push(l.value);return $t(xt(n,i),m)})}result(e){return this.map(()=>e)}atMost(e){return this.times(0,e)}atLeast(e){return s.seq(this.times(e),this.many()).map(t=>[...t[0],...t[1]])}map(e){return new s((t,r)=>{let a=this._(t,r);return a.status?$t(xt(a.index,e(a.value)),a):a})}skip(e){return Lo(0,this,e)}mark(){return s.seq(s.index,this,s.index).map(e=>({start:e[0],value:e[1],end:e[2]}))}node(e){return s.seq(s.index,this,s.index).map(t=>({name:e,start:t[0],value:t[1],end:t[2]}))}sepBy(e){return s.sepBy(this,e)}sepBy1(e){return s.sepBy1(this,e)}lookahead(e){return this.skip(s.lookahead(e))}notFollowedBy(e){return this.skip(s.notFollowedBy(e))}desc(e){return new s((t,r)=>{let a=this._(t,r);return a.status||(a.expected=[e]),a})}fallback(e){return this.or(s.succeed(e))}ap(e){return s.seq(e,this).map(([t,r])=>t(r))}chain(e){return new s((t,r)=>{let a=this._(t,r);if(!a.status)return a;let n=e(a.value);return $t(n._(t,a.index),a)})}};(ue=>{function s(W,E,se){let oe=[].slice.call(arguments);if(oe.length===0)throw new Error("seqMap needs at least one argument");let ye=oe.pop();if(typeof ye!="function")throw new Error("not a function: "+ye);return t.apply(null,oe).map(function(ve){return ye.apply(null,ve)})}ue.seqMap=s;function e(W){let E={};for(let se of Object.keys(W))(function(oe){E[oe]=A(()=>W[oe](E))})(se);return E}ue.createLanguage=e;function t(...W){let E=W.length;return new ue((se,oe)=>{let ye,ve=new Array(E),we=oe;for(let tt=0;tt<E;tt++){if(ye=$t(W[tt]._(se,we),ye),!ye.status)return ye;ve[tt]=ye.value,we=ye.index}return $t(xt(we,ve),ye)})}ue.seq=t;function r(...W){return W.length===0?c("zero alternates"):new ue((se,oe)=>{let ye;for(let ve=0;ve<W.length;ve++)if(ye=$t(W[ve]._(se,oe),ye),ye.status)return ye;return ye})}ue.alt=r;function a(W,E){return n(W,E).or(u([]))}ue.sepBy=a;function n(W,E){let se=E.then(W).many();return t(W,se).map(oe=>[oe[0],...oe[1]])}ue.sepBy1=n;function i(W){let E=`'${W}'`;if(W.length===1){let se=W.charCodeAt(0);return new ue((oe,ye)=>oe.charCodeAt(ye)===se?xt(ye+1,W):Pr(ye,E))}return new ue((se,oe)=>{let ye=oe+W.length;return se.slice(oe,ye)===W?xt(ye,W):Pr(oe,E)})}ue.string=i;function l(W){let E=""+W;return E.slice(E.lastIndexOf("/")+1)}function m(W){return RegExp("^(?:"+W.source+")",l(W))}function d(W,E=0){let se=m(W),oe=""+W;return new ue((ye,ve)=>{let we=se.exec(ye.slice(ve));if(we){if(0<=E&&E<=we.length){let Ae=we[0],Ye=we[E];return xt(ve+Ae.length,Ye)}let tt=`invalid match group (0 to ${we.length}) in ${oe}`;return Pr(ve,tt)}return Pr(ve,oe)})}ue.regexp=d;function u(W){return new ue((E,se)=>xt(se,W))}ue.succeed=u;function c(W){return new ue((E,se)=>Pr(se,W))}ue.fail=c;function p(W){if(Bs(W))return new ue((E,se)=>{let oe=W._(E,se);return oe.status&&(oe.index=se,oe.value=null),oe});if(typeof W=="string")return p(i(W));if(W instanceof RegExp)return p(d(W));throw new Error("not a string, regexp, or parser: "+W)}ue.lookahead=p;function g(W){return new ue((E,se)=>{let oe=W._(E,se);return oe.status?Pr(se,'not "'+E.slice(se,oe.index)+'"'):xt(se,null)})}ue.notFollowedBy=g;function x(W){return new ue((E,se)=>{let oe=E.charAt(se);return se<E.length&&W(oe)?xt(se+1,oe):Pr(se,"a character "+W)})}ue.test=x;function y(W){return x(E=>W.indexOf(E)>=0)}ue.oneOf=y;function S(W){return x(E=>W.indexOf(E)<0)}ue.noneOf=S;function P(W,E){return x(se=>W<=se&&se<=E).desc(W+"-"+E)}ue.range=P;function D(W){return new ue((E,se)=>{let oe=se;for(;oe<E.length&&W(E.charAt(oe));)oe++;return xt(oe,E.slice(se,oe))})}ue.takeWhile=D;function A(W){let E=new ue((se,oe)=>{let ye=W()._;return E._=ye,ye(se,oe)});return E}ue.lazy=A;function M(){return c("empty")}ue.empty=M,ue.index=new ue(function(W,E){return xt(E,qi(W,E))}),ue.anyChar=new ue((W,E)=>E>=W.length?Pr(E,"any character"):xt(E+1,W.charAt(E))),ue.all=new ue(function(W,E){return xt(W.length,W.slice(E))}),ue.eof=new ue(function(W,E){return E<W.length?Pr(E,"EOF"):xt(E,null)}),ue.digit=d(/[0-9]/).desc("a digit"),ue.digits=d(/[0-9]*/).desc("optional digits"),ue.letter=d(/[a-z]/i).desc("a letter"),ue.letters=d(/[a-z]*/i).desc("optional letters"),ue.optWhitespace=d(/\s*/).desc("optional whitespace"),ue.whitespace=d(/\s+/).desc("whitespace"),ue.cr=i("\r"),ue.lf=i(`
`),ue.crlf=i(`\r
`),ue.newline=r(ue.crlf,ue.lf,ue.cr).desc("newline"),ue.end=r(ue.newline,ue.eof);function he(W){return u(W)}ue.of=he;function Le(W){return d(W)}ue.regex=Le})(Bt||={});function Lo(s,...e){let t=e.length;return new Bt((r,a)=>{let n,i,l=a;for(let m=0;m<t;m++){if(n=$t(e[m]._(r,l),n),!n.status)return n;s===m&&(i=n.value),l=n.index}return $t(xt(l,i),n)})}function xt(s,e){return{status:!0,index:s,value:e}}function Pr(s,e){return{status:!1,furthest:s,expected:[e]}}function $t(s,e){if(!e||s.status||e.status||s.furthest>e.furthest)return s;let t=s.furthest===e.furthest?Fs(s.expected,e.expected):e.expected;return{status:s.status,furthest:e.furthest,expected:t}}function qi(s,e){let t=s.slice(0,e).split(`
`),r=t.length,a=t[t.length-1].length+1;return{offset:e,line:r,column:a}}function ks(s){return s.length===1?s[0]:"one of "+s.join(", ")}function Rs(s,e){let t=e.index,r=t.offset;if(r===s.length)return", got the end of the input";let a=r>0?"'...":"'",n=s.length-r>12?"...'":"'";return` at line ${t.line} column ${t.column}, got ${a}${s.slice(r,r+12)}${n}`}function Es(s,e){return`expected ${ks(e.expected)}${Rs(s,e)}`}function Fs(s,e){let t=s.length,r=e.length;if(t===0)return e;if(r===0)return s;let a=new Set,n=[];for(let i=0;i<t;i++)a.has(s[i])||(n[n.length]=s[i],a.add(s[i]));for(let i=0;i<r;i++)a.has(e[i])||(n[n.length]=e[i],a.add(e[i]));return n.sort(),n}function Bs(s){return s instanceof Bt}function ji(s){return Gi.parse(s)}var Gi;(A=>{let s;(G=>{function M(H){return{kind:"string",value:H}}G.str=M;function q(H){return{kind:"symbol",value:H}}G.symb=q;function N(H,Z){return{kind:"list",bracket:H,nodes:Z}}G.list=N;function L(H){return{kind:"comment",value:H}}G.comment=L})(s||={});let e=Bt.regexp(/[\n\r\s]*/),t=Bt.lazy(()=>Bt.alt(r,u,a,n).trim(e)),r=Bt.takeWhile(M=>M!=="`").trim("`").map(s.str),a=Bt.regexp(/[^()\[\]{};`,\n\r\s]+/).map(s.symb),n=Bt.regexp(/\s*;+([^\n\r]*)\n/,1).map(s.comment),i=t.many(),l=i.wrap("(",")").map(M=>s.list("(",M)),m=i.wrap("[","]").map(M=>s.list("[",M)),d=i.wrap("{","}").map(M=>s.list("{",M)),u=Bt.alt(l,m,d),c=t.many();function p(M){return c.tryParse(M)}function g(M){switch(M.kind){case"string":return M.value;case"symbol":{let q=M.value;if(q.length>1)switch(q.charAt(0)){case".":return mt.atomName(q.substr(1));case"_":return mt.struct.type.elementSymbol([q.substr(1)])}return q==="true"?!0:q==="false"?!1:P(q)?+q:Jt.Symbol(q)}case"list":switch(M.bracket){case"[":return mt.core.type.list(S(M.nodes).map(g));case"{":return mt.core.type.set(S(M.nodes).map(g));case"(":{if(M.nodes[0].kind==="comment")throw new Error("Invalid expression");let q=g(M.nodes[0]);return Jt.Apply(q,x(M.nodes))}default:To(M.bracket)}default:To(M)}}function x(M){if(M.length<=1)return;if(!y(M)){let G=[];for(let H=1,Z=M.length;H<Z;H++){let j=M[H];j.kind!=="comment"&&(G[G.length]=g(j))}return G}let q={},N=!0,L=0;for(let G=1,H=M.length;G<H;G++){let Z=M[G];if(Z.kind!=="comment")if(Z.kind==="symbol"&&Z.value.length>1&&Z.value.charAt(0)===":"){let j=Z.value.substr(1);for(++G;G<H&&M[G].kind==="comment";)G++;if(G>=H)throw new Error(`There must be a value foolowed a named arg ':${j}'.`);if(M[G].kind==="comment")throw new Error("Invalid expression");if(Object.hasOwn(q,j))throw new Error(`Duplicate argument '${j}'.`);q[j]=g(M[G]),isNaN(+j)&&(N=!1)}else{if(Object.hasOwn(q,L))throw new Error(`Duplicate argument '${L}'.`);q[L++]=g(Z)}}if(N){let G=Object.keys(q).map(Z=>+Z).sort((Z,j)=>Z-j),H=!0;for(let Z=0,j=G.length;Z<j;Z++)if(G[Z]!==Z){H=!1;break}if(H){let Z=[];for(let j=0,le=G.length;j<le;j++)Z[j]=q[j];return Z}}return q}function y(M){for(let q=1,N=M.length;q<N;q++){let L=M[q];if(L.kind==="symbol"&&L.value.length>1&&L.value.charAt(0)===":")return!0}return!1}function S(M){let q=!1;for(let N=0,L=M.length;N<L;N++)if(M[N].kind==="comment"){q=!0;break}return q?M.filter(N=>N.kind!=="comment"):M}function P(M){return/-?(0|[1-9][0-9]*)([.][0-9]+)?([eE][+-]?[0-9]+)?/.test(M)&&!isNaN(+M)}function D(M){let q=p(M),N=[];for(let L of q)L.kind!=="comment"&&(N[N.length]=g(L));return N}A.parse=D})(Gi||={});function Wi(s){return Object.keys(s).filter(e=>!isNaN(e)).map(e=>+e).sort((e,t)=>e-t).map(e=>s[e])}function La(s,e,t){return s&&s[e]!==void 0?s[e]:t}function B(s,...e){return{kind:"alias",aliases:e,symbol:s}}function Oa(s,e,...t){return s.info.namespace="molscript-macro",s.id=`molscript-macro.${s.info.name}`,{kind:"macro",symbol:s,translate:e,aliases:[s.info.name,...t]}}function Ms(s){return s.kind==="alias"||s.kind==="macro"}var Ls=[["Core symbols",B(R.core.type.bool,"bool"),B(R.core.type.num,"num"),B(R.core.type.str,"str"),B(R.core.type.regex,"regex"),B(R.core.type.list,"list"),B(R.core.type.set,"set"),B(R.core.type.empty,"empty-value"),B(R.core.type.compositeKey,"composite-key"),B(R.core.logic.not,"not"),B(R.core.logic.and,"and"),B(R.core.logic.or,"or"),B(R.core.ctrl.if,"if"),B(R.core.ctrl.fn,"fn"),B(R.core.ctrl.eval,"eval"),B(R.core.math.add,"add","+"),B(R.core.math.sub,"sub","-"),B(R.core.math.mult,"mult","*"),B(R.core.math.div,"div","/"),B(R.core.math.pow,"pow","**"),B(R.core.math.mod,"mod"),B(R.core.math.min,"min"),B(R.core.math.max,"max"),B(R.core.math.cantorPairing,"cantor-pairing"),B(R.core.math.sortedCantorPairing,"sorted-cantor-pairing"),B(R.core.math.invertCantorPairing,"invert-cantor-pairing"),B(R.core.math.floor,"floor"),B(R.core.math.ceil,"ceil"),B(R.core.math.roundInt,"round"),B(R.core.math.trunc,"trunc"),B(R.core.math.abs,"abs"),B(R.core.math.sign,"sign"),B(R.core.math.sqrt,"sqrt"),B(R.core.math.cbrt,"cbrt"),B(R.core.math.sin,"sin"),B(R.core.math.cos,"cos"),B(R.core.math.tan,"tan"),B(R.core.math.asin,"asin"),B(R.core.math.acos,"acos"),B(R.core.math.atan,"atan"),B(R.core.math.sinh,"sinh"),B(R.core.math.cosh,"cosh"),B(R.core.math.tanh,"tanh"),B(R.core.math.exp,"exp"),B(R.core.math.log,"log"),B(R.core.math.log10,"log10"),B(R.core.math.atan2,"atan2"),B(R.core.rel.eq,"eq","="),B(R.core.rel.neq,"neq","!="),B(R.core.rel.lt,"lt","<"),B(R.core.rel.lte,"lte","<="),B(R.core.rel.gr,"gr",">"),B(R.core.rel.gre,"gre",">="),B(R.core.rel.inRange,"in-range"),B(R.core.str.concat,"concat"),B(R.core.str.match,"regex.match"),B(R.core.list.getAt,"list.get"),B(R.core.set.has,"set.has"),B(R.core.set.isSubset,"set.subset")],["Structure",["Types",B(R.structureQuery.type.entityType,"ent-type"),B(R.structureQuery.type.authResidueId,"auth-resid"),B(R.structureQuery.type.labelResidueId,"label-resid"),B(R.structureQuery.type.ringFingerprint,"ringfp"),B(R.structureQuery.type.schemaItem,"schema-item"),B(R.structureQuery.type.bondFlags,"bond-flags")],["Slots",B(R.structureQuery.slot.elementSetReduce,"atom.set.reduce.value")],["Generators",B(R.structureQuery.generator.atomGroups,"sel.atom.atom-groups"),B(R.structureQuery.generator.queryInSelection,"sel.atom.query-in-selection"),B(R.structureQuery.generator.rings,"sel.atom.rings"),B(R.structureQuery.generator.elementSchema,"sel.atom.element-schema"),B(R.structureQuery.generator.empty,"sel.atom.empty"),B(R.structureQuery.generator.all,"sel.atom.all"),B(R.structureQuery.generator.bondedAtomicPairs,"sel.atom.bonded-pairs"),Oa(pa("sel.atom.atoms",da.Dictionary({0:ka(Or.Bool,{isOptional:!0,defaultValue:!0,description:"Test applied to each atom."})}),_r.ElementSelection,"A selection of singleton atom sets."),s=>mt.struct.generator.atomGroups({"atom-test":La(s,0,!0)})),Oa(pa("sel.atom.res",da.Dictionary({0:ka(Or.Bool,{isOptional:!0,defaultValue:!0,description:"Test applied to the 1st atom of each residue."})}),_r.ElementSelection,"A selection of atom sets grouped by residue."),s=>mt.struct.generator.atomGroups({"residue-test":La(s,0,!0),"group-by":mt.ammp("residueKey")})),Oa(pa("sel.atom.chains",da.Dictionary({0:ka(Or.Bool,{isOptional:!0,defaultValue:!0,description:"Test applied to the 1st atom of each chain."})}),_r.ElementSelection,"A selection of atom sets grouped by chain."),s=>mt.struct.generator.atomGroups({"chain-test":La(s,0,!0),"group-by":mt.ammp("chainKey")}))],["Modifiers",B(R.structureQuery.modifier.queryEach,"sel.atom.query-each"),B(R.structureQuery.modifier.intersectBy,"sel.atom.intersect-by"),B(R.structureQuery.modifier.exceptBy,"sel.atom.except-by"),B(R.structureQuery.modifier.unionBy,"sel.atom.union-by"),B(R.structureQuery.modifier.union,"sel.atom.union"),B(R.structureQuery.modifier.cluster,"sel.atom.cluster"),B(R.structureQuery.modifier.includeSurroundings,"sel.atom.include-surroundings"),B(R.structureQuery.modifier.surroundingLigands,"sel.atom.surrounding-ligands"),B(R.structureQuery.modifier.includeConnected,"sel.atom.include-connected"),B(R.structureQuery.modifier.expandProperty,"sel.atom.expand-property")],["Filters",B(R.structureQuery.filter.pick,"sel.atom.pick"),B(R.structureQuery.filter.first,"sel.atom.first"),B(R.structureQuery.filter.withSameAtomProperties,"sel.atom.with-same-atom-properties"),B(R.structureQuery.filter.intersectedBy,"sel.atom.intersected-by"),B(R.structureQuery.filter.within,"sel.atom.within"),B(R.structureQuery.filter.isConnectedTo,"sel.atom.is-connected-to")],["Combinators",B(R.structureQuery.combinator.intersect,"sel.atom.intersect"),B(R.structureQuery.combinator.merge,"sel.atom.merge"),B(R.structureQuery.combinator.distanceCluster,"sel.atom.dist-cluster")],["Atom Set Properties",B(R.structureQuery.atomSet.atomCount,"atom.set.atom-count"),B(R.structureQuery.atomSet.countQuery,"atom.set.count-query"),B(R.structureQuery.atomSet.reduce,"atom.set.reduce"),B(R.structureQuery.atomSet.propertySet,"atom.set.property")],["Atom Properties",B(R.structureQuery.atomProperty.core.elementSymbol,"atom.el"),B(R.structureQuery.atomProperty.core.vdw,"atom.vdw"),B(R.structureQuery.atomProperty.core.mass,"atom.mass"),B(R.structureQuery.atomProperty.core.atomicNumber,"atom.atomic-number"),B(R.structureQuery.atomProperty.core.x,"atom.x"),B(R.structureQuery.atomProperty.core.y,"atom.y"),B(R.structureQuery.atomProperty.core.z,"atom.z"),B(R.structureQuery.atomProperty.core.sourceIndex,"atom.src-index"),B(R.structureQuery.atomProperty.core.operatorName,"atom.op-name"),B(R.structureQuery.atomProperty.core.instanceId,"atom.instance-id"),B(R.structureQuery.atomProperty.core.operatorKey,"atom.op-key"),B(R.structureQuery.atomProperty.core.modelIndex,"atom.model-index"),B(R.structureQuery.atomProperty.core.modelLabel,"atom.model-label"),B(R.structureQuery.atomProperty.core.modelEntryId,"atom.model-entry-id"),B(R.structureQuery.atomProperty.core.atomKey,"atom.key"),B(R.structureQuery.atomProperty.core.bondCount,"atom.bond-count"),B(R.structureQuery.atomProperty.topology.connectedComponentKey,"atom.key.molecule"),B(R.structureQuery.atomProperty.macromolecular.authResidueId,"atom.auth-resid"),B(R.structureQuery.atomProperty.macromolecular.labelResidueId,"atom.label-resid"),B(R.structureQuery.atomProperty.macromolecular.residueKey,"atom.key.res"),B(R.structureQuery.atomProperty.macromolecular.chainKey,"atom.key.chain"),B(R.structureQuery.atomProperty.macromolecular.entityKey,"atom.key.entity"),B(R.structureQuery.atomProperty.macromolecular.isHet,"atom.is-het"),B(R.structureQuery.atomProperty.macromolecular.id,"atom.id"),B(R.structureQuery.atomProperty.macromolecular.label_atom_id,"atom.label_atom_id"),B(R.structureQuery.atomProperty.macromolecular.label_alt_id,"atom.label_alt_id","atom.altloc"),B(R.structureQuery.atomProperty.macromolecular.label_comp_id,"atom.label_comp_id"),B(R.structureQuery.atomProperty.macromolecular.label_asym_id,"atom.label_asym_id"),B(R.structureQuery.atomProperty.macromolecular.label_entity_id,"atom.label_entity_id"),B(R.structureQuery.atomProperty.macromolecular.label_seq_id,"atom.label_seq_id"),B(R.structureQuery.atomProperty.macromolecular.auth_atom_id,"atom.auth_atom_id","atom.name"),B(R.structureQuery.atomProperty.macromolecular.auth_comp_id,"atom.auth_comp_id","atom.resname"),B(R.structureQuery.atomProperty.macromolecular.auth_asym_id,"atom.auth_asym_id","atom.chain"),B(R.structureQuery.atomProperty.macromolecular.auth_seq_id,"atom.auth_seq_id","atom.resno"),B(R.structureQuery.atomProperty.macromolecular.pdbx_PDB_ins_code,"atom.pdbx_PDB_ins_code","atom.inscode"),B(R.structureQuery.atomProperty.macromolecular.pdbx_formal_charge,"atom.pdbx_formal_charge"),B(R.structureQuery.atomProperty.macromolecular.occupancy,"atom.occupancy"),B(R.structureQuery.atomProperty.macromolecular.B_iso_or_equiv,"atom.B_iso_or_equiv","atom.bfactor"),B(R.structureQuery.atomProperty.macromolecular.entityType,"atom.entity-type"),B(R.structureQuery.atomProperty.macromolecular.entitySubtype,"atom.entity-subtype"),B(R.structureQuery.atomProperty.macromolecular.entityPrdId,"atom.entity-prd-id"),B(R.structureQuery.atomProperty.macromolecular.entityDescription,"atom.entity-description"),B(R.structureQuery.atomProperty.macromolecular.objectPrimitive,"atom.object-primitive"),B(R.structureQuery.atomProperty.macromolecular.chemCompType,"atom.chem-comp-type"),B(R.structureQuery.atomProperty.macromolecular.secondaryStructureKey,"atom.key.sec-struct"),B(R.structureQuery.atomProperty.macromolecular.isModified,"atom.is-modified"),B(R.structureQuery.atomProperty.macromolecular.modifiedParentName,"atom.modified-parent"),B(R.structureQuery.atomProperty.ihm.hasSeqId,"atom.ihm.has-seq-id"),B(R.structureQuery.atomProperty.ihm.overlapsSeqIdRange,"atom.ihm.overlaps-seq-id-range")],["Bond Properties",B(R.structureQuery.bondProperty.order,"bond.order"),B(R.structureQuery.bondProperty.length,"bond.length"),B(R.structureQuery.bondProperty.key,"bond.key"),B(R.structureQuery.bondProperty.atomA,"bond.atom-a"),B(R.structureQuery.bondProperty.atomB,"bond.atom-b"),Oa(pa("bond.is",da.List(_r.BondFlag),Or.Bool,`Test if the current bond has at least one (or all if partial = false) of the specified flags: ${Or.oneOfValues(_r.BondFlag).join(", ")}`),s=>mt.core.flags.hasAny([mt.struct.bondProperty.flags(),mt.struct.type.bondFlags(Wi(s))]))]]],Ui=[];function Xi(s){for(let e of s)Ms(e)?Ui.push(e):e instanceof Array&&Xi(e)}Xi(Ls);var Ia=(function(){let s=[],e=Object.create(null),t=Qr.create(),r=Qr.create();for(let a of Ui){for(let i of a.aliases){if(s.push([i,a]),e[i])throw new Error(`Alias '${i}' already in use.`);e[i]=a}let n=a.symbol.args;if(n.kind!=="dictionary"){n.type.kind==="oneof"&&Or.oneOfValues(n.type).forEach(i=>Qr.add(r,i,i));continue}for(let i of Object.keys(n.map)){isNaN(i)&&Qr.add(t,i,i);let l=n.map[i];l.type.kind==="oneof"&&Or.oneOfValues(l.type).forEach(m=>Qr.add(r,m,m))}}return{symbolList:s,symbolMap:e,namedArgs:t.array,constants:r.array}})();var Uc=Ia.constants,Xc=Ia.namedArgs,Jr=Ia.symbolMap,Qc=Ia.symbolList;function ha(s){if(Jt.isLiteral(s))return s;if(Jt.isSymbol(s)){if(!Jr[s.name])return s;let i=Jr[s.name];if(i.kind==="alias")return Jt.Symbol(Jr[s.name].symbol.id);throw i.translate([])}let e=Jt.isSymbol(s.head)&&!!Jr[s.head.name]&&Jr[s.head.name].kind==="macro",t=e?s.head:ha(s.head),r=t!==s.head;if(!s.args)return e?ha(s.head):r?Jt.Apply(t):s;let a=!1,n;if(Jt.isArgumentsArray(s.args)){n=[];for(let i=0,l=s.args.length;i<l;i++){let m=s.args[i],d=ha(m);m!==d&&(a=!0),n[n.length]=d}if(a||(n=s.args),!e&&!r&&!a)return s}else{n={};for(let i of Object.keys(s.args)){let l=s.args[i],m=ha(l);l!==m&&(a=!0),n[i]=m}if(!e&&!r&&!a)return s;a||(n=s.args)}if(e){let i=Jr[s.head.name];return i.kind!=="macro"?Jt.Apply(t,n):i.translate(n)}return Jt.Apply(t,n)}function Qi(s){return ha(s)}var Oo=new Map;function _c(s,e){Oo.set(s,e)}function Ki(){return Array.from(Oo.keys())}function _i(s,e){let t=Oo.get(s);if(!t)throw new Error(`Script language '${s}' is not available in this build`);try{return t(e)}catch(r){throw console.error(r.message),r}}function ga(s,e){return{expression:s,language:e}}(n=>{n.Info={"mol-script":"Mol-Script",pymol:"PyMOL",vmd:"VMD",jmol:"Jmol"};function e(i){return!!i&&typeof i.expression=="string"&&!!i.language}n.is=e;function t(i,l){return i.language===l.language&&i.expression===l.expression}n.areEqual=t;function r(){return["mol-script",...Ki()]}n.getAvailableLanguages=r;function a(i){if(i.language==="mol-script"){let l=ji(i.expression);if(l.length===0)throw new Error("No query");return Qi(l[0])}return _i(i.language,i.expression)}n.toExpression=a})(ga||={});function Mt(s,e){return{expression:s,language:e}}(m=>{m.Info={"mol-script":"Mol-Script",pymol:"PyMOL",vmd:"VMD",jmol:"Jmol"};function e(d){return!!d&&typeof d.expression=="string"&&!!d.language}m.is=e;function t(d,u){return d.language===u.language&&d.expression===u.expression}m.areEqual=t;function r(){return ga.getAvailableLanguages()}m.getAvailableLanguages=r;function a(d){return ga.toExpression(d)}m.toExpression=a;function n(d){let u=a(d);return Eo(u)}m.toQuery=n;function i(d,u){let p=n(d)(new Ro(u));return ki.toLociWithSourceUnits(p)}m.toLoci=i;function l(d,u,c){let p=typeof d=="function"?d(mt):d;return Eo(p)(new Ro(u,c))}m.getStructureSelection=l})(Mt||={});function Aa(s,e){return{kind:s,layers:e}}(d=>{d.Empty={kind:"empty-loci",layers:[]};function e(u,c){if(u.layers.length===0&&c.layers.length===0)return!0;if(u.layers.length!==c.layers.length)return!1;for(let p=0,g=u.layers.length;p<g;++p)if(u.layers[p].clear!==c.layers[p].clear||u.layers[p].color!==c.layers[p].color||!dt.areEqual(u.layers[p].loci,c.layers[p].loci))return!1;return!0}d.areEqual=e;function t(u){return u.layers.length===0}d.isEmpty=t;function r(u,c){if(u.kind==="element-loci"){let p=[];for(let g of u.layers){let{loci:x,color:y,clear:S}=g;x=Y.Loci.remap(x,c),Y.Loci.isEmpty(x)||p.push({loci:x,color:y,clear:S})}return{kind:"element-loci",layers:p}}else return u}d.remap=r;function a(u){if(t(u))return u;if(u.kind==="element-loci"){let{structure:c}=u.layers[0].loci,p=new Map,g=Y.Loci.none(c);for(let y=0,S=u.layers.length;y<S;++y){let{loci:P,color:D,clear:A}=u.layers[S-y-1];if(P=Y.Loci.subtract(P,g),g=Y.Loci.union(P,g),!Y.Loci.isEmpty(P)){let M=A?-1:D;p.has(M)&&(P=Y.Loci.union(P,p.get(M))),p.set(M,P)}}let x=[];return p.forEach((y,S)=>{let P=S===-1,D=P?0:S;x.push({loci:y,color:D,clear:P})}),{kind:"element-loci",layers:x}}else return u}d.merge=a;function n(u,c){if(t(u))return u;if(u.kind==="element-loci"){let{structure:p}=u.layers[0].loci,g=[];for(let x of u.layers){let{loci:y,color:S,clear:P}=x,D=Y.Loci.remap(y,c);y=Y.Loci.remap(D,p),Y.Loci.isEmpty(y)||g.push({loci:y,color:S,clear:P})}return{kind:"element-loci",layers:g}}else return u}d.filter=n;function i(u,c){let p=[];for(let g=0,x=u.length;g<x;++g){let{script:y,color:S,clear:P}=u[g],D=Mt.toLoci(y,c);Y.Loci.isEmpty(D)||p.push({loci:D,color:S,clear:P})}return{kind:"element-loci",layers:p}}d.ofScript=i;function l(u,c){let p=[];for(let g=0,x=u.length;g<x;++g){let{bundle:y,color:S,clear:P}=u[g],D=Y.Bundle.toLoci(y,c.root);p.push({loci:D,color:S,clear:P})}return{kind:"element-loci",layers:p}}d.ofBundle=l;function m(u){let c=[];for(let p=0,g=u.layers.length;p<g;++p){let{loci:x,color:y,clear:S}=u.layers[p],P=Y.Bundle.fromLoci(x);c.push({bundle:P,color:y,clear:S})}return{kind:"element-loci",layers:c}}d.toBundle=m})(Aa||={});function za(s,e){return{kind:s,layers:e}}(d=>{d.Empty={kind:"empty-loci",layers:[]};function e(u,c){if(u.layers.length===0&&c.layers.length===0)return!0;if(u.layers.length!==c.layers.length)return!1;for(let p=0,g=u.layers.length;p<g;++p)if(u.layers[p].value!==c.layers[p].value||!dt.areEqual(u.layers[p].loci,c.layers[p].loci))return!1;return!0}d.areEqual=e;function t(u){return u.layers.length===0}d.isEmpty=t;function r(u,c){if(u.kind==="element-loci"){let p=[];for(let g of u.layers){let x=Y.Loci.remap(g.loci,c);Y.Loci.isEmpty(x)||p.push({loci:x,value:g.value})}return{kind:"element-loci",layers:p}}else return u}d.remap=r;function a(u){if(t(u))return u;if(u.kind==="element-loci"){let{structure:c}=u.layers[0].loci,p=new Map,g=Y.Loci.none(c);for(let y=0,S=u.layers.length;y<S;++y){let{loci:P,value:D}=u.layers[S-y-1];P=Y.Loci.subtract(P,g),g=Y.Loci.union(P,g),Y.Loci.isEmpty(P)||(p.has(D)&&(P=Y.Loci.union(P,p.get(D))),p.set(D,P))}let x=[];return p.forEach((y,S)=>{x.push({loci:y,value:S})}),{kind:"element-loci",layers:x}}else return u}d.merge=a;function n(u,c){if(t(u))return u;if(u.kind==="element-loci"){let{structure:p}=u.layers[0].loci,g=[];for(let x of u.layers){let{loci:y,value:S}=x,P=Y.Loci.remap(y,c);y=Y.Loci.remap(P,p),Y.Loci.isEmpty(y)||g.push({loci:y,value:S})}return{kind:"element-loci",layers:g}}else return u}d.filter=n;function i(u,c){let p=[];for(let g=0,x=u.length;g<x;++g){let{script:y,value:S}=u[g],P=Mt.toLoci(y,c);Y.Loci.isEmpty(P)||p.push({loci:P,value:S})}return{kind:"element-loci",layers:p}}d.ofScript=i;function l(u,c){let p=[];for(let g=0,x=u.length;g<x;++g){let{bundle:y,value:S}=u[g],P=Y.Bundle.toLoci(y,c.root);p.push({loci:P,value:S})}return{kind:"element-loci",layers:p}}d.ofBundle=l;function m(u){let c=[];for(let p=0,g=u.layers.length;p<g;++p){let{loci:x,value:y}=u.layers[p],S=Y.Bundle.fromLoci(x);c.push({bundle:S,value:y})}return{kind:"element-loci",layers:c}}d.toBundle=m})(za||={});var Os;(t=>{function s(){return{updateTransform:!1,updateMatrix:!1,updateColor:!1,updateSize:!1,updateLocation:!1,createGeometry:!1,createNew:!1,info:{}}}t.create=s;function e(r){r.updateTransform=!1,r.updateMatrix=!1,r.updateColor=!1,r.updateSize=!1,r.updateLocation=!1,r.createGeometry=!1,r.createNew=!1}t.reset=e})(Os||={});var Zi={lowestElementCount:1e6,lowerElementCount:5e5,lowElementCount:1e5,mediumElementCount:2e4,highElementCount:2e3,coarseGrainedFactor:10,elementCountFactor:1};function Is(s){switch(s){case"lowest":return 0;case"lower":return 1;case"low":return 2;case"medium":return 3;case"high":return 4;case"higher":return 5;case"highest":return 6}}function Yi(s,e){return s>e.lowestElementCount?"lowest":s>e.lowerElementCount?"lower":s>e.lowElementCount?"low":s>e.mediumElementCount?"medium":s>e.highElementCount?"high":"higher"}function As(s,e={}){let t={...Zi,...e},r=s.elementCount*t.elementCountFactor;return(s.isCoarseGrained||s.isCoarse)&&(r*=t.coarseGrainedFactor),Yi(r,t)}function zs(s,e={}){let t={...Zi,...e},r=s.count*t.elementCountFactor;return Yi(r,t)}function Vs(s){if(s.root.models.length===1){let e=Di.Provider.get(s.root.model)?.spacegroup.cell;if(e&&e.volume>0)return e.volume/e.order}return Po.volume(s.root.boundary.box)}function Ns(s){return s.cell?.volume??Po.volume(Fo.getBoundary(s).box)}function Io(s,e){let t=xr(s.quality,"auto"),r=xr(s.detail,1),a=xr(s.radialSegments,12),n=xr(s.linearSegments,8),i=xr(s.resolution,2),l=xr(s.imageResolution,1),m=xr(s.probePositions,12),d=xr(s.doubleSided,!0),u=0;if(t==="auto")if(e instanceof Ri)t=As(e.root),u=Vs(e);else if(yi.is(e)){let[c,p,g]=e.grid.cells.space.dimensions;u=c*p*g,t=u<1e7?"medium":"low"}else Fo.is(e)&&(t=zs(e),u=Ns(e));if(t!=="custom"&&t!=="auto"){let c=Is(t);switch(Mi()&&(c=Math.max(c-1,0)),c){case 6:r=3,a=36,n=18,i=.1,l=.01,m=72,d=!0;break;case 5:r=3,a=28,n=14,i=.3,l=.05,m=48,d=!0;break;case 4:r=2,a=20,n=10,i=.5,l=.1,m=36,d=!0;break;case 3:r=1,a=12,n=8,i=.8,l=.2,m=24,d=!0;break;case 2:r=0,a=8,n=3,i=1.3,l=.4,m=24,d=!1;break;case 1:r=0,a=4,n=2,i=3,l=.7,m=12,d=!1;break;case 0:r=0,a=2,n=1,i=8,l=1,m=12,d=!1;break}}return u>0&&(i=Math.max(i,u/3e8),i=Math.min(i,20)),s.transparentBackfaces==="off"&&(s.alpha!==void 0&&s.alpha<1||s.xrayShaded)&&(d=!1),{detail:r,radialSegments:a,linearSegments:n,resolution:i,imageResolution:l,probePositions:m,doubleSided:d}}function Va(s,e){return{kind:s,layers:e}}(u=>{u.Empty={kind:"empty-loci",layers:[]};let e;(A=>{A.is=Ur.has;let p;(j=>(j[j.None=0]="None",j[j.One=1]="One",j[j.Two=2]="Two",j[j.Three=4]="Three",j[j.Four=8]="Four",j[j.Five=16]="Five",j[j.Six=32]="Six"))(p=A.Flag||={});function g(M){return Ur.create(M)}A.create=g,A.Names={one:1,two:2,three:4,four:8,five:16,six:32};function y(M){return M in A.Names}A.isName=y;function S(M){switch(M){case"one":return 1;case"two":return 2;case"three":return 4;case"four":return 8;case"five":return 16;case"six":return 32}}A.fromName=S;function P(M){let q=0;for(let N=0,L=M.length;N<L;++N)q|=S(M[N]);return q}A.fromNames=P;function D(M){let q=[];return(0,A.is)(M,1)&&q.push("one"),(0,A.is)(M,2)&&q.push("two"),(0,A.is)(M,4)&&q.push("three"),(0,A.is)(M,8)&&q.push("four"),(0,A.is)(M,16)&&q.push("five"),(0,A.is)(M,32)&&q.push("six"),q}A.toNames=D})(e=u.Groups||={});function t(c,p){if(c.layers.length!==p.layers.length)return!1;for(let g=0,x=c.layers.length;g<x;++g)if(c.layers[g].groups!==p.layers[g].groups||!dt.areEqual(c.layers[g].loci,p.layers[g].loci))return!1;return!0}u.areEqual=t;function r(c){return c.layers.length===0}u.isEmpty=r;function a(c,p){if(c.kind==="element-loci"){let g=[];for(let x of c.layers){let{loci:y,groups:S}=x;y=Y.Loci.remap(y,p),Y.Loci.isEmpty(y)||g.push({loci:y,groups:S})}return{kind:"element-loci",layers:g}}else return c}u.remap=a;function n(c){if(r(c))return c;if(c.kind==="element-loci"){let{structure:p}=c.layers[0].loci,g=new Map,x=Y.Loci.none(p);for(let S=0,P=c.layers.length;S<P;++S){let{loci:D,groups:A}=c.layers[P-S-1];D=Y.Loci.subtract(D,x),x=Y.Loci.union(D,x),Y.Loci.isEmpty(D)||(g.has(A)&&(D=Y.Loci.union(D,g.get(A))),g.set(A,D))}let y=[];return g.forEach((S,P)=>{y.push({loci:S,groups:P})}),{kind:"element-loci",layers:y}}else return c}u.merge=n;function i(c,p){if(r(c))return c;if(c.kind==="element-loci"){let{structure:g}=c.layers[0].loci,x=[];for(let y of c.layers){let{loci:S,groups:P}=y,D=Y.Loci.remap(S,p);S=Y.Loci.remap(D,g),Y.Loci.isEmpty(S)||x.push({loci:S,groups:P})}return{kind:"element-loci",layers:x}}else return c}u.filter=i;function l(c,p){let g=[];for(let x=0,y=c.length;x<y;++x){let{script:S,groups:P}=c[x],D=Mt.toLoci(S,p);Y.Loci.isEmpty(D)||g.push({loci:D,groups:P})}return{kind:"element-loci",layers:g}}u.ofScript=l;function m(c,p){let g=[];for(let x=0,y=c.length;x<y;++x){let{bundle:S,groups:P}=c[x],D=Y.Bundle.toLoci(S,p.root);g.push({loci:D,groups:P})}return{kind:"element-loci",layers:g}}u.ofBundle=m;function d(c){let p=[];for(let g=0,x=c.layers.length;g<x;++g){let{loci:y,groups:S}=c.layers[g],P=Y.Bundle.fromLoci(y);p.push({bundle:P,groups:S})}return{kind:"element-loci",layers:p}}u.toBundle=d})(Va||={});function Na(s,e){return{kind:s,layers:e}}(d=>{d.Empty={kind:"empty-loci",layers:[]};function e(u,c){if(u.layers.length===0&&c.layers.length===0)return!0;if(u.layers.length!==c.layers.length)return!1;for(let p=0,g=u.layers.length;p<g;++p)if(u.layers[p].clear!==c.layers[p].clear||!si(u.layers[p].material,c.layers[p].material)||!dt.areEqual(u.layers[p].loci,c.layers[p].loci))return!1;return!0}d.areEqual=e;function t(u){return u.layers.length===0}d.isEmpty=t;function r(u,c){if(u.kind==="element-loci"){let p=[];for(let g of u.layers){let{loci:x,material:y,clear:S}=g;x=Y.Loci.remap(x,c),Y.Loci.isEmpty(x)||p.push({loci:x,material:y,clear:S})}return{kind:"element-loci",layers:p}}else return u}d.remap=r;function a(u){if(t(u))return u;if(u.kind==="element-loci"){let{structure:c}=u.layers[0].loci,p,g=new Map,x=Y.Loci.none(c);for(let S=0,P=u.layers.length;S<P;++S){let{loci:D,material:A,clear:M}=u.layers[P-S-1];D=Y.Loci.subtract(D,x),x=Y.Loci.union(D,x),Y.Loci.isEmpty(D)||(M?p=p?Y.Loci.union(D,p):D:(g.has(A)&&(D=Y.Loci.union(D,g.get(A))),g.set(A,D)))}let y=[];return p&&y.push({loci:p,material:Li(),clear:!0}),g.forEach((S,P)=>{y.push({loci:S,material:P,clear:!1})}),{kind:"element-loci",layers:y}}else return u}d.merge=a;function n(u,c){if(t(u))return u;if(u.kind==="element-loci"){let{structure:p}=u.layers[0].loci,g=[];for(let x of u.layers){let{loci:y,material:S,clear:P}=x,D=Y.Loci.remap(y,c);y=Y.Loci.remap(D,p),Y.Loci.isEmpty(y)||g.push({loci:y,material:S,clear:P})}return{kind:"element-loci",layers:g}}else return u}d.filter=n;function i(u,c){let p=[];for(let g=0,x=u.length;g<x;++g){let{script:y,material:S,clear:P}=u[g],D=Mt.toLoci(y,c);Y.Loci.isEmpty(D)||p.push({loci:D,material:S,clear:P})}return{kind:"element-loci",layers:p}}d.ofScript=i;function l(u,c){let p=[];for(let g=0,x=u.length;g<x;++g){let{bundle:y,material:S,clear:P}=u[g],D=Y.Bundle.toLoci(y,c.root);p.push({loci:D,material:S,clear:P})}return{kind:"element-loci",layers:p}}d.ofBundle=l;function m(u){let c=[];for(let p=0,g=u.layers.length;p<g;++p){let{loci:x,material:y,clear:S}=u.layers[p],P=Y.Bundle.fromLoci(x);c.push({bundle:P,material:y,clear:S})}return{kind:"element-loci",layers:c}}d.toBundle=m})(Na||={});function Ha(s,e){return{kind:s,layers:e}}(d=>{d.Empty={kind:"empty-loci",layers:[]};function e(u,c){if(u.layers.length===0&&c.layers.length===0)return!0;if(u.layers.length!==c.layers.length)return!1;for(let p=0,g=u.layers.length;p<g;++p)if(u.layers[p].value!==c.layers[p].value||!dt.areEqual(u.layers[p].loci,c.layers[p].loci))return!1;return!0}d.areEqual=e;function t(u){return u.layers.length===0}d.isEmpty=t;function r(u,c){if(u.kind==="element-loci"){let p=[];for(let g of u.layers){let{loci:x,value:y}=g;x=Y.Loci.remap(x,c),Y.Loci.isEmpty(x)||p.push({loci:x,value:y})}return{kind:"element-loci",layers:p}}else return u}d.remap=r;function a(u){if(t(u))return u;if(u.kind==="element-loci"){let{structure:c}=u.layers[0].loci,p=new Map,g=Y.Loci.none(c);for(let y=0,S=u.layers.length;y<S;++y){let{loci:P,value:D}=u.layers[S-y-1];P=Y.Loci.subtract(P,g),g=Y.Loci.union(P,g),Y.Loci.isEmpty(P)||(p.has(D)&&(P=Y.Loci.union(P,p.get(D))),p.set(D,P))}let x=[];return p.forEach((y,S)=>{x.push({loci:y,value:S})}),{kind:"element-loci",layers:x}}else return u}d.merge=a;function n(u,c){if(t(u))return u;if(u.kind==="element-loci"){let{structure:p}=u.layers[0].loci,g=[];for(let x of u.layers){let{loci:y,value:S}=x,P=Y.Loci.remap(y,c);y=Y.Loci.remap(P,p),Y.Loci.isEmpty(y)||g.push({loci:y,value:S})}return{kind:"element-loci",layers:g}}else return u}d.filter=n;function i(u,c){let p=[];for(let g=0,x=u.length;g<x;++g){let{script:y,value:S}=u[g],P=Mt.toLoci(y,c);Y.Loci.isEmpty(P)||p.push({loci:P,value:S})}return{kind:"element-loci",layers:p}}d.ofScript=i;function l(u,c){let p=[];for(let g=0,x=u.length;g<x;++g){let{bundle:y,value:S}=u[g],P=Y.Bundle.toLoci(y,c.root);p.push({loci:P,value:S})}return{kind:"element-loci",layers:p}}d.ofBundle=l;function m(u){let c=[];for(let p=0,g=u.layers.length;p<g;++p){let{loci:x,value:y}=u.layers[p],S=Y.Bundle.fromLoci(x);c.push({bundle:S,value:y})}return{kind:"element-loci",layers:c}}d.toBundle=m})(Ha||={});function qa(s,e){return{kind:s,layers:e}}(d=>{d.Empty={kind:"empty-loci",layers:[]};function e(u,c){if(u.layers.length===0&&c.layers.length===0)return!0;if(u.layers.length!==c.layers.length)return!1;for(let p=0,g=u.layers.length;p<g;++p)if(u.layers[p].value!==c.layers[p].value||!dt.areEqual(u.layers[p].loci,c.layers[p].loci))return!1;return!0}d.areEqual=e;function t(u){return u.layers.length===0}d.isEmpty=t;function r(u,c){if(u.kind==="element-loci"){let p=[];for(let g of u.layers){let{loci:x,value:y}=g;x=Y.Loci.remap(x,c),Y.Loci.isEmpty(x)||p.push({loci:x,value:y})}return{kind:"element-loci",layers:p}}else return u}d.remap=r;function a(u){if(t(u))return u;if(u.kind==="element-loci"){let{structure:c}=u.layers[0].loci,p=new Map,g=Y.Loci.none(c);for(let y=0,S=u.layers.length;y<S;++y){let{loci:P,value:D}=u.layers[S-y-1];P=Y.Loci.subtract(P,g),g=Y.Loci.union(P,g),Y.Loci.isEmpty(P)||(p.has(D)&&(P=Y.Loci.union(P,p.get(D))),p.set(D,P))}let x=[];return p.forEach((y,S)=>{x.push({loci:y,value:S})}),{kind:"element-loci",layers:x}}else return u}d.merge=a;function n(u,c){if(t(u))return u;if(u.kind==="element-loci"){let{structure:p}=u.layers[0].loci,g=[];for(let x of u.layers){let{loci:y,value:S}=x,P=Y.Loci.remap(y,c);y=Y.Loci.remap(P,p),Y.Loci.isEmpty(y)||g.push({loci:y,value:S})}return{kind:"element-loci",layers:g}}else return u}d.filter=n;function i(u,c){let p=[];for(let g=0,x=u.length;g<x;++g){let{script:y,value:S}=u[g],P=Mt.toLoci(y,c);Y.Loci.isEmpty(P)||p.push({loci:P,value:S})}return{kind:"element-loci",layers:p}}d.ofScript=i;function l(u,c){let p=[];for(let g=0,x=u.length;g<x;++g){let{bundle:y,value:S}=u[g],P=Y.Bundle.toLoci(y,c.root);p.push({loci:P,value:S})}return{kind:"element-loci",layers:p}}d.ofBundle=l;function m(u){let c=[];for(let p=0,g=u.layers.length;p<g;++p){let{loci:x,value:y}=u.layers[p],S=Y.Bundle.fromLoci(x);c.push({bundle:S,value:y})}return{kind:"element-loci",layers:c}}d.toBundle=m})(qa||={});var Hs;(e=>{function s(t,r,a){return h.getDefaultValues(t.getParams(r,a))}e.getDefaultParams=s})(Hs||={});var qs={name:"",label:"",description:"",factory:()=>br.Empty,getParams:()=>({}),defaultValues:{},defaultColorTheme:{name:""},defaultSizeTheme:{name:""},isApplicable:()=>!0};function Ji(s){return s.map(e=>[e.name,e.provider.label])}var $i=class{constructor(){this._list=[];this._map=new Map;this._name=new Map;this._count=new Map}get default(){return this._list[0]}get types(){return Ji(this._list)}findConflict(e){let t=this._map.get(e.name);if(t&&t!==e)return`Representation '${e.name}' is already registered with a different provider.`}add(e){let t=this.findConflict(e);if(t)throw new Error(t);let r=this._count.get(e);if(r!==void 0){this._count.set(e,r+1);return}this._list.push({name:e.name,provider:e}),this._map.set(e.name,e),this._name.set(e,e.name),this._count.set(e,1)}getName(e){if(!this._name.has(e))throw new Error(`'${e.label}' is not a registered represenatation provider.`);return this._name.get(e)}remove(e){let t=this._count.get(e);if(t===void 0)return;if(t>1){this._count.set(e,t-1);return}this._count.delete(e),this._map.delete(e.name),this._name.delete(e);let r=this._list.findIndex(a=>a.provider===e);r>=0&&this._list.splice(r,1)}has(e){return typeof e=="string"?this._map.has(e):this._count.has(e)}get(e){return this._map.get(e)||qs}get list(){return this._list}getApplicableList(e){return this._list.filter(t=>t.provider.isApplicable(e))}getApplicableTypes(e){return Ji(this.getApplicableList(e))}clear(){this._list.length=0,this._map.clear(),this._name.clear(),this._count.clear()}};var br;(d=>{let s;(g=>{function u(x,y){return x.repr===y.repr&&dt.areEqual(x.loci,y.loci)}g.areEqual=u;function c(x){return dt.isEmpty(x.loci)}g.isEmpty=c,g.Empty={loci:gr}})(s=d.Loci||={});function e(){return{visible:!0,alphaFactor:1,pickable:!0,colorOnly:!1,syncManually:!1,transform:V.identity(),overpaint:Aa.Empty,transparency:za.Empty,emissive:Ha.Empty,substance:Na.Empty,wiggle:qa.Empty,clipping:Va.Empty,themeStrength:{overpaint:1,transparency:1,emissive:1,substance:1,wiggle:1},markerActions:fa.All}}d.createState=e;function t(u,c){c.visible!==void 0&&(u.visible=c.visible),c.alphaFactor!==void 0&&(u.alphaFactor=c.alphaFactor),c.pickable!==void 0&&(u.pickable=c.pickable),c.colorOnly!==void 0&&(u.colorOnly=c.colorOnly),c.overpaint!==void 0&&(u.overpaint=c.overpaint),c.transparency!==void 0&&(u.transparency=c.transparency),c.emissive!==void 0&&(u.emissive=c.emissive),c.substance!==void 0&&(u.substance=c.substance),c.wiggle!==void 0&&(u.wiggle=c.wiggle),c.clipping!==void 0&&(u.clipping=c.clipping),c.themeStrength!==void 0&&(u.themeStrength=c.themeStrength),c.syncManually!==void 0&&(u.syncManually=c.syncManually),c.transform!==void 0&&V.copy(u.transform,c.transform),c.markerActions!==void 0&&(u.markerActions=c.markerActions)}d.updateState=t,d.StateBuilder={create:e,update:t};function n(){return{label:"",groupCount:0,renderObjects:[],geometryVersion:-1,props:{},params:{},updated:new He,state:e(),theme:Ra.createEmpty(),createOrUpdate:()=>Pa.constant("",void 0),setState:()=>{},setTheme:()=>{},getLoci:()=>gr,getAllLoci:()=>[],eachLocation:()=>{},mark:()=>!1,destroy:()=>{}}}d.createEmpty=n;class i{constructor(){this.curr=new Set;this.next=new Set;this._version=-1}get version(){return this._version}add(c,p){this.next.add(di(c,p))}snapshot(){Da.areEqual(this.curr,this.next)||(this._version+=1),[this.curr,this.next]=[this.next,this.curr],this.next.clear()}}d.GeometryState=i;function l(u,c,p,g,x){let y=0,S=new He,P=new i,D=g.create(),A=Ra.createEmpty(),M,q,N,L={},G=Object.keys(x).map((H,Z)=>{L[Z]=H;let j=x[H](c,p);return j.setState(D),j});return{label:u,updated:S,get groupCount(){let H=0;if(q){let{visuals:Z}=q;for(let j=0,le=G.length;j<le;++j)(!Z||Z.includes(L[j]))&&(H+=G[j].groupCount)}return H},get renderObjects(){let H=[];if(q){let{visuals:Z}=q;for(let j=0,le=G.length;j<le;++j)(!Z||Z.includes(L[j]))&&H.push(...G[j].renderObjects)}return H},get geometryVersion(){return P.version},get props(){return q},get params(){return M},createOrUpdate:(H={},Z)=>{Z&&Z!==N&&(M=p(c,Z),N=Z,q||(q=h.getDefaultValues(M)));let j=Io(Object.assign({},q,H),N);Object.assign(q,H,j);let{visuals:le}=q;return Pa.create(`Creating or updating '${u}' representation`,async I=>{for(let ne=0,te=G.length;ne<te;++ne)(!le||le.includes(L[ne]))&&await G[ne].createOrUpdate(q,N).runInContext(I),P.add(ne,G[ne].geometryVersion);P.snapshot(),S.next(y++)})},get state(){return D},get theme(){return A},getLoci:H=>{let{visuals:Z}=q;for(let j=0,le=G.length;j<le;++j)if(!Z||Z.includes(L[j])){let I=G[j].getLoci(H);if(!ma(I))return I}return gr},getAllLoci:()=>{let H=[],{visuals:Z}=q;for(let j=0,le=G.length;j<le;++j)(!Z||Z.includes(L[j]))&&H.push(...G[j].getAllLoci());return H},eachLocation:H=>{let{visuals:Z}=q;for(let j=0,le=G.length;j<le;++j)(!Z||Z.includes(L[j]))&&G[j].eachLocation(H)},mark:(H,Z)=>{let j=!1;for(let le=0,I=G.length;le<I;++le)j=G[le].mark(H,Z)||j;return j},setState:H=>{g.update(D,H);for(let Z=0,j=G.length;Z<j;++Z)G[Z].setState(H)},setTheme:H=>{A=H;for(let Z=0,j=G.length;Z<j;++Z)G[Z].setTheme(H)},destroy(){for(let H=0,Z=G.length;H<Z;++H)G[H].destroy()}}}d.createMulti=l;function m(u,c){let p=0,g=new He,x=new i,y=d.createState(),S=Ra.createEmpty(),P=h.clone(Bo.Params),D=h.getDefaultValues(Bo.Params);return{label:u,updated:g,get groupCount(){return c.values.uGroupCount.ref.value},get renderObjects(){return[c]},get geometryVersion(){return x.version},get props(){return D},get params(){return P},createOrUpdate:(A={})=>{let M=Io(Object.assign({},D,A));return Object.assign(D,A,M),Pa.create(`Updating '${u}' representation`,async q=>{x.add(0,c.id),x.snapshot(),g.next(p++)})},get state(){return y},get theme(){return S},getLoci:()=>gr,getAllLoci:()=>[],eachLocation:()=>{},mark:(A,M)=>!1,setState:A=>{A.visible!==void 0&&Sr.setVisibility(c,A.visible),A.alphaFactor!==void 0&&Sr.setAlphaFactor(c,A.alphaFactor),A.pickable!==void 0&&Sr.setPickable(c,A.pickable),A.colorOnly!==void 0&&Sr.setColorOnly(c,A.colorOnly),A.overpaint,A.transparency,A.emissive,A.substance,A.wiggle,A.clipping,A.themeStrength!==void 0&&Sr.setThemeStrength(c,A.themeStrength),A.transform!==void 0&&Sr.setTransform(c,A.transform),d.updateState(y,A)},setTheme:()=>{},destroy(){}}}d.fromRenderObject=m})(br||={});var js;Object.defineProperty(br,"Empty",{get:()=>js??=br.createEmpty()});function Ao(s){if(typeof s=="object"){if("buttons"in s)return s.buttons;if("which"in s){let e=s.which;if(e===2)return 4;if(e===3)return 2;if(e>0)return 1<<e-1}}return 0}function en(s){if(typeof s=="object"&&"button"in s){let e=s.button;if(e===1)return 4;if(e===2)return 2;if(e>=0)return 1<<e}return 0}var tn={noScroll:!0,noMiddleClickScroll:!0,noContextMenu:!0,noPinchZoom:!0,noTextSelect:!0,preventGestures:!1,mask:(s,e)=>!0,pixelScale:1},Vt;(n=>{n.None=a();function e(i,l){return i.shift===l.shift&&i.alt===l.alt&&i.control===l.control&&i.meta===l.meta}n.areEqual=e;function t(i){return e(i,n.None)}n.areNone=t;function r(i){if(!i)return 0;let l=0;return i.shift&&l++,i.alt&&l++,i.control&&l++,i.meta&&l++,l}n.size=r;function a(i={}){return{shift:!!i.shift,alt:!!i.alt,control:!!i.control,meta:!!i.meta}}n.create=a})(Vt||={});var Ze;(r=>{r.has=Ur.has,r.create=Ur.create;let t;(p=>(p[p.None=0]="None",p[p.Primary=1]="Primary",p[p.Secondary=2]="Secondary",p[p.Auxilary=4]="Auxilary",p[p.Forth=8]="Forth",p[p.Five=16]="Five",p[p.Trigger=32]="Trigger",p[p.Squeeze=48]="Squeeze"))(t=r.Flag||={})})(Ze||={});var fp={key:"",code:"",modifiers:Vt.None,x:-1,y:-1,pageX:-1,pageY:-1,preventDefault:Fr};function rn(s){return s.composedPath?.()[0]??s.target}function an(){return{drag:new He,interactionEnd:new He,click:new He,move:new He,wheel:new He,pinch:new He,gesture:new He,resize:new He,leave:new He,enter:new He,modifiers:new He,key:new He,keyUp:new He,keyDown:new He,lock:new He,trackedPointers:new He}}var Gs=["Backspace","Delete"],zo;(t=>{function s(r={}){let{noScroll:a,noContextMenu:n}={...tn,...r};return{noScroll:a,noContextMenu:n,pointerLock:!1,width:0,height:0,pixelRatio:1,...an(),setPixelScale:Fr,updateTrackedPointers:Fr,updateScreenTouches:Fr,requestPointerLock:Fr,exitPointerLock:Fr,dispose:Fr}}t.create=s;function e(r,a={}){let{noScroll:n,noMiddleClickScroll:i,noContextMenu:l,noPinchZoom:m,noTextSelect:d,mask:u,pixelScale:c,preventGestures:p}={...tn,...a},g=r.clientWidth*G(),x=r.clientHeight*G(),y=!1,S=Me(),P=T(),D=T(),A=T(),M=T(),q=T(),N={shift:!1,alt:!1,control:!1,meta:!1},L={x:-1,y:-1,pageX:-1,pageY:-1};function G(){return window.devicePixelRatio*c}function H(){return{...N}}function Z(f){let w=rn(f);return w===document.body||w===r}let j=0,le=!1,I=Ze.create(0),ne=0,te=!1,qe=!1,fe;typeof window.ResizeObserver<"u"&&(fe=new window.ResizeObserver(bt));let ce=an(),{drag:Ee,interactionEnd:he,wheel:Le,pinch:ue,gesture:W,click:E,move:se,leave:oe,enter:ye,resize:ve,modifiers:we,key:tt,keyUp:Ae,keyDown:Ye,lock:qt,trackedPointers:Dt}=ce;ze();function ze(){r.addEventListener("contextmenu",kt,!1),r.addEventListener("wheel",Ut,!1),r.addEventListener("mousedown",U,!1),window.addEventListener("mousemove",X,!1),window.addEventListener("mouseup",_,!1),r.addEventListener("touchstart",or,!1),r.addEventListener("touchmove",v,!1),r.addEventListener("touchend",Rt,!1),r.addEventListener("gesturechange",Wr,!1),r.addEventListener("gesturestart",ir,!1),r.addEventListener("gestureend",It,!1),window.addEventListener("blur",je),window.addEventListener("keyup",Ge,!1),window.addEventListener("keydown",tr,!1),window.addEventListener("keypress",st,!1),document.addEventListener("pointerlockchange",jt,!1),document.addEventListener("pointerlockerror",er,!1),fe!=null?fe.observe(r.parentElement):window.addEventListener("resize",bt,!1)}function nt(){le||(le=!0,r.removeEventListener("contextmenu",kt,!1),r.removeEventListener("wheel",Ut,!1),r.removeEventListener("mousedown",U,!1),window.removeEventListener("mousemove",X,!1),window.removeEventListener("mouseup",_,!1),r.removeEventListener("touchstart",or,!1),r.removeEventListener("touchmove",v,!1),r.removeEventListener("touchend",Rt,!1),r.removeEventListener("gesturechange",Wr,!1),r.removeEventListener("gesturestart",ir,!1),r.removeEventListener("gestureend",It,!1),window.removeEventListener("blur",je),window.removeEventListener("keyup",Ge,!1),window.removeEventListener("keydown",tr,!1),window.removeEventListener("keypress",st,!1),document.removeEventListener("pointerlockchange",jt,!1),document.removeEventListener("pointerlockerror",er,!1),z.remove(),fe!=null?(fe.unobserve(r.parentElement),fe.disconnect()):window.removeEventListener("resize",bt,!1))}function jt(){r.ownerDocument.pointerLockElement===r?y=!0:y=!1,Be(y),qt.next(y)}function er(){console.error("Unable to use Pointer Lock API"),y=!1,Be(y),qt.next(y)}function kt(f){u(f.clientX,f.clientY)&&l&&f.preventDefault()}function ft(f){N.alt=f.altKey,N.shift=f.shiftKey,N.control=f.ctrlKey,N.meta=f.metaKey}function je(){(I||N.shift||N.alt||N.meta||N.control)&&(I=0,N.shift=N.alt=N.control=N.meta=!1)}function tr(f){let w=!1;!N.alt&&f.altKey&&(w=!0,N.alt=!0),!N.shift&&f.shiftKey&&(w=!0,N.shift=!0),!N.control&&f.ctrlKey&&(w=!0,N.control=!0),!N.meta&&f.metaKey&&(w=!0,N.meta=!0),w&&te&&we.next(H()),Z(f)&&te&&Ye.next({key:f.key,code:f.code,modifiers:H(),...L,preventDefault:()=>f.preventDefault()})}function Ge(f){let w=!1;N.alt&&!f.altKey&&(w=!0,N.alt=!1),N.shift&&!f.shiftKey&&(w=!0,N.shift=!1),N.control&&!f.ctrlKey&&(w=!0,N.control=!1),N.meta&&!f.metaKey&&(w=!0,N.meta=!1),w&&te&&we.next(H()),Gs.includes(f.key)&&st(f),Z(f)&&te&&Ae.next({key:f.key,code:f.code,modifiers:H(),...L,preventDefault:()=>f.preventDefault()})}function st(f){!Z(f)||!te||tt.next({key:f.key,code:f.code,modifiers:H(),...L,preventDefault:()=>f.preventDefault()})}let Je={primary:{prev:void 0,down:T(),end:T(),axes:[]},secondary:{prev:void 0,down:T(),end:T(),axes:[]},distance:-1};function Gt(f,w,F){let Q=Ze.has(w,f);return(F?Ze.has(F,f):!1)&&!Q}function Ot(f,w){let{x:F,y:Q,dx:de,dy:Pe,ray:me,buttons:xe,axes:We}=f,[vt,ct]=[F,Q],wt=Vt.create(),nr=!0,it=w?Je.secondary:Je.primary,{prev:Qt}=it;xe===2?se.next({x:F,y:Q,pageX:vt,pageY:ct,buttons:0,button:0,modifiers:wt,inside:!0,onElement:!0,ray:me}):Qt?.buttons===2&&oe.next(void 0);let sr=Ze.has(xe,1),Kt=Qt?Ze.has(Qt.buttons,1):!1;if(Kt&&!sr&&(T.set(it.end,F,Q),T.distance(it.end,it.down)<20&&E.next({x:F,y:Q,pageX:vt,pageY:ct,buttons:32,button:32,modifiers:wt,ray:me}),he.next(void 0)),sr){let At=!Kt;Ee.next({x:F,y:Q,dx:de,dy:Pe,pageX:vt,pageY:ct,buttons:32,button:32,modifiers:wt,isStart:At,useDelta:nr}),At&&T.set(it.down,F,Q)}let $e={x:0,y:0,pageX:0,pageY:0,modifiers:wt,preventDefault:()=>{}};if(Gt(8,xe,Qt?.buttons)){let At=w?"GamepadX":"GamepadA";Ae.next({...$e,code:At,key:At})}if(Gt(16,xe,Qt?.buttons)){let At=w?"GamepadY":"GamepadB";Ae.next({...$e,code:At,key:At})}We&&(We[2]<0?(Ye.next({...$e,code:"GamepadLeft",key:"GamepadLeft"}),Ae.next({...$e,code:"GamepadRight",key:"GamepadRight"})):We[2]>0?(Ye.next({...$e,code:"GamepadRight",key:"GamepadRight"}),Ae.next({...$e,code:"GamepadLeft",key:"GamepadLeft"})):We[2]!==it.axes[2]&&(Ae.next({...$e,code:"GamepadLeft",key:"GamepadLeft"}),Ae.next({...$e,code:"GamepadRight",key:"GamepadRight"})),We[3]<0?(Ye.next({...$e,code:"GamepadUp",key:"GamepadUp"}),Ae.next({...$e,code:"GamepadDown",key:"GamepadDown"})):We[3]>0?(Ye.next({...$e,code:"GamepadDown",key:"GamepadDown"}),Ae.next({...$e,code:"GamepadUp",key:"GamepadUp"})):We[3]!==it.axes[3]&&(Ae.next({...$e,code:"GamepadUp",key:"GamepadUp"}),Ae.next({...$e,code:"GamepadDown",key:"GamepadDown"}))),it.axes=We||[],it.prev=f}function pt(f,w,F){let Q=b.distance(f.ray.origin,w.ray.origin);if(Je.distance>0){let de=Q/Je.distance;W.next({scale:de,rotation:0,deltaScale:0,deltaRotation:0,buttons:F,button:F,modifiers:H()})}Je.distance=Q}function rt(f){let w,F;for(let Q of f)Q.handedness==="right"?w=Q:Q.handedness==="left"&&(F=Q);!w&&F&&(w=F,F=void 0),w?.buttons===1&&F?.buttons===1?pt(w,F,32):w?.buttons===2&&F?.buttons===2?pt(w,F,48):(Je.distance===-1&&(w&&Ot(w,!1),F&&Ot(F,!0)),!w?.buttons&&!F?.buttons&&(Je.distance=-1))}let Ue,Xe,lt=-1;function Er(f){if(f.length===2){let it=T.fromObj(f[0]),Qt=T.fromObj(f[1]),sr=T.distance(it,Qt),Kt=32;if(lt>0){let $e=sr/lt;W.next({scale:$e,rotation:0,deltaScale:0,deltaRotation:0,buttons:Kt,button:Kt,modifiers:H()})}lt=sr,Ue=void 0;return}lt=-1;let w=f[0];if(!w){if(Xe&&Ue){let it=T.fromObj(Xe),Qt=T.fromObj(Ue);if(T.distance(it,Qt)<10){let[sr,Kt]=it,[$e,At]=[sr,Kt],va=Vt.create(),xa=32,{ray:Ds}=Xe;E.next({x:sr,y:Kt,pageX:$e,pageY:At,buttons:xa,button:xa,modifiers:va,ray:Ds})}he.next(void 0)}Ue=void 0,Xe=void 0;return}let F=T.fromObj(w),[Q,de]=F,[Pe,me]=[Q,de],xe=Vt.create(),We=32,vt=!0,ct=Ue===void 0,wt=Ue?Q-Ue.x:0,nr=Ue?de-Ue.y:0;Ue=w,ct&&(Xe=w),Ee.next({x:Q,y:de,dx:wt,dy:nr,pageX:Pe,pageY:me,buttons:We,button:We,modifiers:xe,isStart:ct,useDelta:vt})}function Ct(f){let w=f.touches[0],F=f.touches[1];return{clientX:(w.clientX+F.clientX)/2,clientY:(w.clientY+F.clientY)/2,pageX:(w.pageX+F.pageX)/2,pageY:(w.pageY+F.pageY)/2,target:f.target}}function dr(f){let w=f.touches[0].pageX-f.touches[1].pageX,F=f.touches[0].pageY-f.touches[1].pageY;return Math.sqrt(w*w+F*F)}let Qe=-1,Pt,ht=T(),rr=T();function J(f){Qe<0||(T.set(rr,f.touches[0].pageX,f.touches[0].pageY),Qe+=T.distance(ht,rr),T.copy(ht,rr))}let Re=T(),Ve=!1,Wt=0,ar=1;function or(f){if(f.preventDefault(),Pt=void 0,Qe=-1,f.touches.length===1)I=ne=1,Qe=0,T.set(ht,f.touches[0].pageX,f.touches[0].pageY),Pt=f.touches[0],ae(f.touches[0]),T.copy(Re,D),Ve=!0;else if(f.touches.length===2){I=6,ne=2,ft(f),ar=1,Wt=dr(f);let{pageX:w,pageY:F}=O(Ct(f));Ve||(at(Re,Ct(f)),Ve=!0),ue.next({isStart:!0,distance:Wt,delta:0,fraction:ar,fractionDelta:0,startX:Re[0],startY:Re[1],centerPageX:w,centerPageY:F,buttons:I,button:ne,modifiers:H()})}else f.touches.length===3&&(I=ne=8,ae(Ct(f)))}function Rt(f){if(ee(),Pt&&Qe<=4){let w=Pt;if(!u(w.clientX,w.clientY))return;at(rr,w);let{pageX:F,pageY:Q}=O(w),[de,Pe]=rr;E.next({x:de,y:Pe,pageX:F,pageY:Q,buttons:I,button:ne,modifiers:H()})}Pt=void 0,Ve=!1}function v(f){if(ne=0,m&&(f.preventDefault(),f.stopPropagation(),f.originalEvent&&(f.originalEvent.preventDefault(),f.originalEvent.stopPropagation())),Pt=void 0,f.touches.length===1)I=1,Pt=f.touches[0],J(f),Ie(f.touches[0]);else if(f.touches.length===2){I=6,ne=2,ft(f);let{pageX:w,pageY:F}=O(Ct(f)),Q=dr(f),de=Wt-Q,Pe=Wt/Q,me=Pe-ar;ar=Pe,ue.next({isStart:!1,distance:Q,delta:de,fraction:Pe,fractionDelta:me,startX:Re[0],startY:Re[1],centerPageX:w,centerPageY:F,buttons:I,button:ne,modifiers:H()})}else f.touches.length===3&&(I=8,Ie(Ct(f)))}function U(f){ft(f),I=Ao(f),ne=en(f),i&&I===4&&f.preventDefault,ae(f)}function X(f){ft(f),I=Ao(f),ne=0,Ie(f)}function _(f){ft(f),I=Ao(f),ne=en(f),be(f),ee()}function ee(){he.next(void 0)}function ae(f){u(f.clientX,f.clientY)&&(at(D,f),T.copy(P,D),yt(D)&&(j=1))}function be(f){if(j=0,!!u(f.clientX,f.clientY)){if(at(A,f),!qe&&T.distance(A,P)<4){let{pageX:w,pageY:F}=O(f),[Q,de]=A;E.next({x:Q,y:de,pageX:w,pageY:F,buttons:I,button:ne,modifiers:H()})}qe=!1}}function Ie(f){at(A,f);let{pageX:w,pageY:F}=O(f),[Q,de]=A,{movementX:Pe,movementY:me}=f,xe=yt(A)&&u(f.clientX,f.clientY);if(te&&!xe?oe.next(void 0):!te&&xe&&ye.next(void 0),te=xe,L.x=Q,L.y=de,L.pageX=w,L.pageY=F,se.next({x:Q,y:de,pageX:w,pageY:F,movementX:Pe,movementY:me,buttons:I,button:ne,modifiers:H(),inside:xe,onElement:rn(f)===r}),j===0||(d&&f.preventDefault?.(),T.div(M,T.sub(M,A,D),ut(q)),T.magnitude(M)<1e-6))return;let We=j===1;if(We&&!u(f.clientX,f.clientY))return;T.distance(A,P)>=4&&(qe=!0);let[vt,ct]=M;Ee.next({x:Q,y:de,dx:vt,dy:ct,pageX:w,pageY:F,buttons:I,button:ne,modifiers:H(),isStart:We}),T.copy(D,A),j=2}function Ut(f){if(!u(f.clientX,f.clientY))return;at(A,f);let{pageX:w,pageY:F}=O(f),[Q,de]=A;n&&f.preventDefault();let Pe=Ws(f);I=ne=4,(Pe.dx||Pe.dy||Pe.dz)&&Le.next({x:Q,y:de,pageX:w,pageY:F,...Pe,buttons:I,button:ne,modifiers:H()})}function gt(f){p&&(f.preventDefault(),f.stopImmediatePropagation?.(),f.stopPropagation?.())}let pr=0,Xt=0;function ir(f){gt(f),pr=f.scale,Xt=f.rotation,W.next({scale:f.scale,rotation:f.rotation,deltaRotation:0,deltaScale:0,isStart:!0,buttons:I,button:ne,modifiers:H()})}function zr(f,w){W.next({scale:f.scale,rotation:f.rotation,deltaRotation:Xt-f.rotation,deltaScale:pr-f.scale,isEnd:w,buttons:I,button:ne,modifiers:H()}),Xt=f.rotation,pr=f.scale}function Wr(f){gt(f),zr(f)}function It(f){gt(f),zr(f,!0)}function bt(){g=r.clientWidth*G(),x=r.clientHeight*G(),ve.next({})}function yt(f){if(r instanceof Window||r instanceof Document||r===document.body)return!0;{let w=r.getBoundingClientRect();return f[0]>=0&&f[1]>=0&&f[0]<w.width&&f[1]<w.height}}function ut(f){return f[0]=r.clientWidth,f[1]=r.clientHeight,f}function at(f,w){if(g=r.clientWidth*G(),x=r.clientHeight*G(),y){let F=G();f[0]=(S.x+S.width/2)/F,f[1]=(x-(S.y+S.height/2))/F}else{let F=r.getBoundingClientRect();f[0]=(w.clientX||0)-F.left,f[1]=(w.clientY||0)-F.top}return f}function O(f){return y?{pageX:Math.round(window.innerWidth/2)+S.x,pageY:Math.round(window.innerHeight/2)+S.y}:{pageX:f.pageX,pageY:f.pageY}}let $=30,z=pe();function pe(){let f=document.createElement("div"),w="30%",F="10%",Q=`#000 ${w}, #0000 0 calc(100% - ${w}), #000 0`,de=`linear-gradient(0deg, ${Q}) 50%/${F} 100% no-repeat`,Pe=`linear-gradient(90deg, ${Q}) 50%/100% ${F} no-repeat`;return Object.assign(f.style,{width:`${$}px`,aspectRatio:1,background:`${de}, ${Pe}, radial-gradient(circle at 50%, #000 5%, #0000 5%)`,display:"none",zIndex:1e3,position:"absolute",mixBlendMode:"difference",filter:"invert(1)"}),r.parentElement?.appendChild(f),f}function Be(f){if(z.style.display=f?"block":"none",f){let w=G(),F=(S.x+S.width/2)/w,Q=(S.y+S.height/2)/w;z.style.width=`${$}px`,z.style.left=`calc(${F}px - ${$/2}px)`,z.style.bottom=`calc(${Q}px - ${$/2}px)`}}return{get noScroll(){return n},set noScroll(f){n=f},get noContextMenu(){return l},set noContextMenu(f){l=f},get width(){return g},get height(){return x},get pixelRatio(){return G()},get pointerLock(){return y},...ce,setPixelScale:f=>{c=f,g=r.clientWidth*G(),x=r.clientHeight*G()},updateTrackedPointers:f=>{rt(f),Dt.next(f)},updateScreenTouches:f=>{Er(f)},requestPointerLock:f=>{S=f,y||r.requestPointerLock()},exitPointerLock:()=>{y&&r.ownerDocument.exitPointerLock()},dispose:nt}}t.fromElement=e})(zo||={});function Ws(s){let a=0,n=0,i=0,l=0,m=0;return"detail"in s&&(n=s.detail),"wheelDelta"in s&&(n=-s.wheelDelta/120),"wheelDeltaY"in s&&(n=-s.wheelDeltaY/120),"wheelDeltaX"in s&&(a=-s.wheelDeltaX/120),"axis"in s&&s.axis===s.HORIZONTAL_AXIS&&(a=n,n=0),i=a*10,l=n*10,"deltaY"in s&&(l=s.deltaY),"deltaX"in s&&(i=s.deltaX),"deltaZ"in s&&(m=s.deltaZ),(i||l||m)&&s.deltaMode&&(s.deltaMode===1?(i*=40,l*=40,m*=40):(i*=800,l*=800,m*=800)),i&&!a&&(a=i<0?-1:1),l&&!n&&(n=l<0?-1:1),{spinX:a,spinY:n,dx:i,dy:l,dz:m}}var ea={backgroundColor:h.Color(0,{description:"Background color of the 3D canvas"}),pickingAlphaThreshold:h.Numeric(.5,{min:0,max:1,step:.01},{description:"The minimum opacity value needed for an object to be pickable."}),colorMarker:h.Boolean(!0,{description:"Tint marked and dim unmarked objects, by the marking pass when enabled, otherwise in the material color."}),highlightColor:h.Color(ge.fromNormalizedRgb(1,.4,.6)),selectColor:h.Color(ge.fromNormalizedRgb(.2,1,.1)),dimColor:h.Color(ge.fromNormalizedRgb(1,1,1)),highlightStrength:h.Numeric(.3,{min:0,max:1,step:.1}),selectStrength:h.Numeric(.3,{min:0,max:1,step:.1}),dimStrength:h.Numeric(0,{min:0,max:1,step:.1}),markerPriority:h.Select(1,[[1,"Highlight"],[2,"Select"]]),xrayEdgeFalloff:h.Numeric(1,{min:0,max:3,step:.1}),celSteps:h.Numeric(5,{min:2,max:16,step:1}),exposure:h.Numeric(1,{min:0,max:3,step:.01}),light:h.ObjectList({inclination:h.Numeric(150,{min:0,max:180,step:1}),azimuth:h.Numeric(320,{min:0,max:360,step:1}),color:h.Color(ge.fromNormalizedRgb(1,1,1)),intensity:h.Numeric(.6,{min:0,max:5,step:.01})},s=>ge.toHexString(s.color),{defaultValue:[{inclination:150,azimuth:320,color:ge.fromNormalizedRgb(1,1,1),intensity:.6}]}),ambientColor:h.Color(ge.fromNormalizedRgb(1,1,1)),ambientIntensity:h.Numeric(.4,{min:0,max:2,step:.01}),enableAnimation:h.Boolean(!0,{description:"Enable time-based animations."})},$r=b(),Vo=b();function on(s,e){let t=s.length,{direction:r,color:a}=e||{direction:new Array(t*3).fill(0),color:new Array(t*3).fill(0)};for(let n=0;n<t;++n){let i=s[n];b.directionFromSpherical($r,Et(i.inclination),Et(i.azimuth),1),b.toArray($r,r,n*3),b.scale(Vo,ge.toVec3Normalized(Vo,i.color),i.intensity),b.toArray(Vo,a,n*3)}return{count:t,direction:r,color:a}}function No(s,e){let t=new Array(s.count*3);for(let r=0,a=s.count;r<a;++r)b.fromArray($r,s.direction,r*3),b.transformDirection($r,$r,e),b.toArray($r,t,r*3);return t}var Ho;(r=>{let s;(u=>(u[u.None=0]="None",u[u.BlendedFront=1]="BlendedFront",u[u.BlendedBack=2]="BlendedBack",u[u.DepthBack=3]="DepthBack",u[u.SolidInteriorMark=4]="SolidInteriorMark",u[u.SolidInteriorFill=5]="SolidInteriorFill"))(s||={});let e;(l=>(l[l.All=0]="All",l[l.Opaque=1]="Opaque",l[l.Transparent=2]="Transparent"))(e||={});function t(a,n={}){let{gl:i,state:l,stats:m,extensions:d}=a,u=h.merge(ea,h.getDefaultValues(ea),n),c=on(u.light),p=Me(),g=T.create(i.drawingBufferWidth,i.drawingBufferHeight),x=ge.toVec3Normalized(b(),u.backgroundColor),y=!1,S=null,P=a.resources.texture("image-uint8","rgba","ubyte","nearest");P.define(1,1),P.load({array:new Uint8Array([255,255,255,255]),width:1,height:1});let D=[["tDepth",P]],A=V(),M=V(),q=V(),N=V(),L=V(),G=V(),H=V(),Z=V(),j=V(),le=V(),I=V(),ne=b(),te=b(),qe=b(),fe=Ft(),ce=T(),Ee=ca(),he=1,Le=ot(),ue=Zt(),W=b();b.scale(W,ge.toArrayNormalized(u.ambientColor,W,0),u.ambientIntensity);let E={uDrawId:o.create(0),uModel:o.create(V.identity()),uView:o.create(M),uInvView:o.create(q),uModelView:o.create(N),uInvModelView:o.create(L),uInvProjection:o.create(G),uProjection:o.create(V()),uModelViewProjection:o.create(H),uInvModelViewProjection:o.create(Z),uHasHeadRotation:o.create(!1),uInvHeadRotation:o.create(j),uHasEyeCamera:o.create(!1),uModelViewEye:o.create(le),uInvModelViewEye:o.create(I),uIsAsymmetricProjection:o.create(!1),uIsOrtho:o.create(1),uViewOffset:o.create(ce),uModelScale:o.create(1),uPixelRatio:o.create(a.pixelRatio),uViewport:o.create(Me.toVec4(Ne(),p)),uDrawingBufferSize:o.create(g),uCameraPosition:o.create(te),uCameraDir:o.create(ne),uCameraPlane:o.create(Ft.toArray(fe,Ne(),0)),uNear:o.create(1),uFar:o.create(1e4),uFog:o.create(!0),uFogNear:o.create(1),uFogFar:o.create(1e4),uFogColor:o.create(x),uRenderMask:o.create(0),uMarkingDepthTest:o.create(!1),uDepthBack:o.create(!1),uPickType:o.create(0),uMarkingType:o.create(0),uSolidInteriorPass:o.create(0),uSolidInteriorClip:o.create(-1),uTransparentBackground:o.create(!1),uLightDirection:o.create(c.direction),uLightColor:o.create(c.color),uAmbientColor:o.create(W),uPickingAlphaThreshold:o.create(u.pickingAlphaThreshold),uHighlightColor:o.create(ge.toVec3Normalized(b(),u.highlightColor)),uSelectColor:o.create(ge.toVec3Normalized(b(),u.selectColor)),uDimColor:o.create(ge.toVec3Normalized(b(),u.dimColor)),uHighlightStrength:o.create(u.highlightStrength),uSelectStrength:o.create(u.selectStrength),uDimStrength:o.create(u.dimStrength),uMarkerPriority:o.create(u.markerPriority),uMarkerAverage:o.create(0),uXrayEdgeFalloff:o.create(u.xrayEdgeFalloff),uCelSteps:o.create(u.celSteps),uExposure:o.create(u.exposure),uTime:o.create(0),uEnableAnimation:o.create(u.enableAnimation)},se=Object.entries(E),oe=!0,ye=(v,U)=>{if(v.state.disposed||!v.state.visible||!v.state.pickable&&U==="pick"||!v.values.drawCount.ref.value||(ot.scaleNX(Le,v.values.boundingSphere.ref.value,he),!ca.intersectsSphere3D(Ee,Le)))return!1;let[X,_]=v.values.uLod.ref.value;if(X!==0||_!==0){let{center:ee,radius:ae}=Le,be=Ft.distanceToPoint(fe,ee);if(be+ae<X*he||be-ae>_*he)return!1}return!(he===1&&S!==null&&S(Le))},ve=(v,U,X)=>{if(he===1){let ae=v.values.instanceGrid.ref.value.cellSize>0,be=v.values.uInstanceCount.ref.value>1;ae&&(be||v.values.lodLevels)?v.cull(fe,Ee,S,a.stats,ue):v.uncull()}else if(v.values.lodLevels){let{center:ae,radius:be}=Le,Ie=Ft.distanceToPoint(fe,ae);v.cullSimple(Ie,be,he)}else v.uncull();let ee=v.getProgram(U);if(l.currentProgramId!==ee.id&&(oe=!0,ee.use()),oe&&(ee.setUniforms(se),ee.bindTextures(D,0),oe=!1),v.values.dGeometryType.ref.value==="directVolume"){if(U!=="color")return;l.disable(i.CULL_FACE),l.frontFace(i.CCW)}else X===1?(l.enable(i.CULL_FACE),v.values.dFlipSided?.ref.value?(l.frontFace(i.CW),l.cullFace(i.FRONT)):(l.frontFace(i.CCW),l.cullFace(i.BACK))):X===3?l.disable(i.CULL_FACE):X===4||X===5&&v.values.hasReflection.ref.value?(l.disable(i.CULL_FACE),l.frontFace(v.values.dFlipSided?.ref.value?i.CW:i.CCW)):X===2||X===5?(l.enable(i.CULL_FACE),v.values.dFlipSided?.ref.value?(l.frontFace(i.CW),l.cullFace(i.BACK)):(l.frontFace(i.CCW),l.cullFace(i.FRONT))):(v.values.uDoubleSided?v.values.uDoubleSided.ref.value||v.values.hasReflection.ref.value?l.disable(i.CULL_FACE):l.enable(i.CULL_FACE):l.disable(i.CULL_FACE),v.values.dFlipSided?.ref.value?(l.frontFace(i.CW),l.cullFace(i.FRONT)):(l.frontFace(i.CCW),l.cullFace(i.BACK)));v.render(U,D.length)},we=(v,U,X)=>{ye(v,U)&&ve(v,U,X)},tt=!!d.fragDepth,Ae=!!i.getContextAttributes()?.stencil,Ye=()=>tt&&(Ae||i.getParameter(i.FRAMEBUFFER_BINDING)!==null),qt=v=>{let U=v.values.dGeometryType.ref.value;return tt&&(U==="mesh"||U==="textureMesh")&&!!v.values.dSolidInterior?.ref.value},Dt=(v,U,X,_)=>{o.updateIfChanged(E.uSolidInteriorPass,X),o.updateIfChanged(E.uSolidInteriorClip,_);let ee=v.getProgram(U);l.currentProgramId===ee.id&&!oe&&(ee.uniform("uSolidInteriorPass",X),ee.uniform("uSolidInteriorClip",_))},ze=(v,U,X)=>{i.clear(i.STENCIL_BUFFER_BIT),Dt(v,U,2,X),l.colorMask(!1,!1,!1,!1),l.depthMask(!1),l.disable(i.DEPTH_TEST),l.stencilFunc(i.ALWAYS,0,255),l.stencilOpSeparate(i.FRONT,i.KEEP,i.KEEP,i.INCR_WRAP),l.stencilOpSeparate(i.BACK,i.KEEP,i.KEEP,i.DECR_WRAP),ve(v,U,4)},nt=(v,U,X,_)=>{let ee=X==="opaque"||X==="back";Dt(v,U,1,_),l.stencilFunc(i.NOTEQUAL,0,255),X==="oit"?(l.enable(i.DEPTH_TEST),l.depthMask(!0),l.clearDepth(1),i.clear(i.DEPTH_BUFFER_BIT),l.depthFunc(i.LEQUAL),l.stencilOp(i.KEEP,i.KEEP,i.KEEP),ve(v,U,5),l.depthFunc(i.EQUAL),l.depthMask(!1)):(l.enable(i.DEPTH_TEST),l.depthMask(ee)),l.colorMask(!0,!0,!0,!0),l.stencilOp(i.KEEP,i.KEEP,ee?i.KEEP:i.ZERO),ve(v,U,5),X==="oit"&&l.disable(i.DEPTH_TEST)},jt=b(),er=(v,U,X)=>{if(!ye(v,U))return;let _=X==="back",ee=E.uNear.ref.value*1.0001;!_&&Math.abs(Ft.distanceToPoint(fe,Le.center)-ee)<=Le.radius&&(ze(v,U,-1),nt(v,U,X,-1));let ae=v.getClipInfo();if(ae&&ae.capIndices.length>0){let{objects:be,planes:Ie,capIndices:Ut}=ae;b.scale(jt,te,1/he);for(let gt=0,pr=Ut.length;gt<pr;++gt){let Xt=Ut[gt];if(be.type[Xt]===vi.Type.plane){let ir=Ft.distanceToPoint(Ie[Xt],jt)*he;if(_?ir>=-1e-4:ir<=1e-4)continue}ze(v,U,Xt),nt(v,U,X,Xt)}}Dt(v,U,0,-1)},kt=v=>{l.enable(i.STENCIL_TEST),l.stencilMask(255),l.clearStencil(0),v!=="oit"&&l.depthFunc(v==="back"?i.GEQUAL:i.LEQUAL)},ft=v=>{l.disable(i.STENCIL_TEST),l.stencilOp(i.KEEP,i.KEEP,i.KEEP),l.depthFunc(v==="back"?i.GREATER:i.LESS),l.frontFace(i.CCW),l.cullFace(i.BACK)},je=(v,U,X,_)=>{if(!tt)return;let ee=!1;for(let ae=0,be=v.length;ae<be;++ae){let Ie=v[ae];if(!(!qt(Ie)||!U(Ie))){if(!ee){if(!Ye())return;k&&a.timer.mark("Renderer.renderSolidInteriorCaps"),kt(_),ee=!0}er(Ie,X,_)}}ee&&(ft(_),k&&a.timer.markEnd("Renderer.renderSolidInteriorCaps"))},tr=(v,U,X)=>{ue=X,o.update(E.uView,v.view),o.update(E.uInvView,V.invert(q,v.view)),o.update(E.uProjection,v.projection),o.update(E.uInvProjection,V.invert(G,v.projection)),o.updateIfChanged(E.uIsOrtho,v.state.mode==="orthographic"?1:0),o.update(E.uViewOffset,v.viewOffset.enabled?T.set(ce,v.viewOffset.offsetX*16,v.viewOffset.offsetY*16):T.set(ce,0,0)),o.updateIfChanged(E.uModelScale,v.scale),o.update(E.uCameraPosition,V.getTranslation(te,q)),b.scale(qe,v.state.target,v.scale),b.normalize(ne,b.sub(ne,qe,te)),o.update(E.uCameraDir,ne),o.updateIfChanged(E.uFar,v.far),o.updateIfChanged(E.uNear,v.near),o.updateIfChanged(E.uFog,v.state.fog>0),o.updateIfChanged(E.uFogFar,v.fogFar),o.updateIfChanged(E.uFogNear,v.fogNear),o.updateIfChanged(E.uTransparentBackground,y),ca.fromProjectionMatrix(Ee,v.projectionView),Ft.copy(fe,Ee[ca.PlaneIndex.Near]),fe.constant-=Ft.distanceToPoint(fe,te),o.update(E.uCameraPlane,Ft.toArray(fe,E.uCameraPlane.ref.value,0)),o.updateIfChanged(E.uMarkerAverage,U.markerAverage),!V.isZero(v.headRotation)?(o.updateIfChanged(E.uHasHeadRotation,!0),o.update(E.uInvHeadRotation,V.invert(j,v.headRotation)),o.update(E.uLightDirection,No(c,j))):(o.updateIfChanged(E.uHasHeadRotation,!1),o.updateIfChanged(E.uInvHeadRotation,V.id),o.update(E.uLightDirection,c.direction)),o.update(E.uIsAsymmetricProjection,v.isAsymmetricProjection)},Ge=(v,U,X,_,ee)=>{ua(D,"tDepth",X||P),he=U.scale,o.update(E.uModel,V.scaleUniformly(A,v.view,he)),o.update(E.uModelView,V.mul(N,U.view,A)),o.update(E.uInvModelView,V.invert(L,N)),o.update(E.uModelViewProjection,V.mul(H,N,U.projection)),o.update(E.uInvModelViewProjection,V.invert(Z,H)),o.updateIfChanged(E.uRenderMask,_),o.updateIfChanged(E.uMarkingDepthTest,ee),!V.isZero(U.viewEye)?(o.updateIfChanged(E.uHasEyeCamera,!0),o.update(E.uModelViewEye,V.mul(le,U.viewEye,A)),o.update(E.uInvModelViewEye,V.invert(I,le))):(o.updateIfChanged(E.uHasEyeCamera,!1),o.updateIfChanged(E.uModelViewEye,V.id),o.updateIfChanged(E.uInvModelViewEye,V.id)),l.enable(i.SCISSOR_TEST),l.colorMask(!0,!0,!0,!0);let{x:be,y:Ie,width:Ut,height:gt}=p;l.viewport(be,Ie,Ut,gt),l.scissor(be,Ie,Ut,gt),oe=!0,l.currentRenderItemId=-1},st=function(v){let U=mr(v.values.alpha.ref.value*v.state.alphaFactor,0,1),X=v.values.dXrayShaded?.ref.value==="on"||v.values.dXrayShaded?.ref.value==="inverted";return U===1&&v.values.transparencyAverage.ref.value!==1&&v.values.dGeometryType.ref.value!=="directVolume"&&v.values.dPointStyle?.ref.value!=="fuzzy"&&!X||v.values.dTransparentBackfaces?.ref.value==="opaque"},Je=function(v){let U=mr(v.values.alpha.ref.value*v.state.alphaFactor,0,1),X=v.values.dXrayShaded?.ref.value==="on"||v.values.dXrayShaded?.ref.value==="inverted";return U!==0&&(U<1||v.values.transparencyAverage.ref.value>0||v.values.dGeometryType.ref.value==="directVolume"||v.values.dPointStyle?.ref.value==="fuzzy"||v.values.dGeometryType.ref.value==="text"||v.values.dGeometryType.ref.value==="image"||X)},Gt=function(v){return!v.state.colorOnly},Ot=function(v){return mr(v.values.alpha.ref.value*v.state.alphaFactor,0,1)!==0&&v.values.transparencyAverage.ref.value!==1&&v.values.markerAverage.ref.value!==1},pt=function(v){return v.values.markerAverage.ref.value>0},rt=function(v){return v.values.emissiveAverage.ref.value+v.values.uEmissive.ref.value>0},Ue=function(v){return Je(v)&&v.values.dTransparentBackfaces?.ref.value!=="off"},Xe=(v,U,X,_)=>{k&&a.timer.mark("Renderer.renderPick"),l.disable(i.BLEND),l.enable(i.DEPTH_TEST),l.depthMask(!0),Ge(v,U,null,0,!1),o.updateIfChanged(E.uPickType,_);let{renderables:ee}=v;for(let ae=0,be=ee.length;ae<be;++ae){let Ie=ee[ae];Gt(Ie)&&we(Ie,X,0)}je(ee,Gt,X,"opaque"),k&&a.timer.markEnd("Renderer.renderPick")},lt=(v,U)=>{k&&a.timer.mark("Renderer.renderDepth"),l.disable(i.BLEND),l.enable(i.DEPTH_TEST),l.depthMask(!0),Ge(v,U,null,0,!1);let{renderables:X}=v;for(let _=0,ee=X.length;_<ee;++_)we(X[_],"depth",0);je(X,()=>!0,"depth","opaque"),k&&a.timer.markEnd("Renderer.renderDepth")},Er=(v,U)=>{k&&a.timer.mark("Renderer.renderDepthOpaque"),l.disable(i.BLEND),l.enable(i.DEPTH_TEST),l.depthMask(!0),Ge(v,U,null,1,!1);let{renderables:X}=v;for(let _=0,ee=X.length;_<ee;++_){let ae=X[_];st(ae)&&we(ae,"depth",0)}je(X,st,"depth","opaque"),k&&a.timer.markEnd("Renderer.renderDepthOpaque")},Ct=(v,U)=>{k&&a.timer.mark("Renderer.renderDepthOpaqueBack"),l.disable(i.BLEND),l.enable(i.DEPTH_TEST),l.depthMask(!0),l.depthFunc(i.GREATER),Ge(v,U,null,1,!1),o.updateIfChanged(E.uDepthBack,!0);let{renderables:X}=v;for(let _=0,ee=X.length;_<ee;++_){let ae=X[_];st(ae)&&we(ae,"depth",3)}je(X,st,"depth","back"),o.updateIfChanged(E.uDepthBack,!1),l.depthFunc(i.LESS),k&&a.timer.markEnd("Renderer.renderDepthOpaqueBack")},dr=(v,U,X)=>{k&&a.timer.mark("Renderer.renderDepthTransparent"),l.disable(i.BLEND),l.enable(i.DEPTH_TEST),l.depthMask(!0),Ge(v,U,X,2,!1);let{renderables:_}=v;for(let ee=0,ae=_.length;ee<ae;++ee){let be=_[ee];Je(be)&&we(be,"depth",0)}je(_,Ue,"depth","opaque"),k&&a.timer.markEnd("Renderer.renderDepthTransparent")},Qe=(v,U)=>{k&&a.timer.mark("Renderer.renderMarkingDepth"),l.disable(i.BLEND),l.enable(i.DEPTH_TEST),l.depthMask(!0),Ge(v,U,null,0,!1),o.updateIfChanged(E.uMarkingType,1);let{renderables:X}=v;for(let _=0,ee=X.length;_<ee;++_){let ae=X[_];Ot(ae)&&we(ae,"marking",0)}je(X,Ot,"marking","opaque"),k&&a.timer.markEnd("Renderer.renderMarkingDepth")},Pt=(v,U,X)=>{k&&a.timer.mark("Renderer.renderMarkingMask"),l.disable(i.BLEND),l.enable(i.DEPTH_TEST),l.depthMask(!0),Ge(v,U,X,0,!!X),o.updateIfChanged(E.uMarkingType,2);let{renderables:_}=v;for(let ee=0,ae=_.length;ee<ae;++ee){let be=_[ee];pt(be)&&we(be,"marking",0)}je(_,pt,"marking","opaque"),k&&a.timer.markEnd("Renderer.renderMarkingMask")},ht=(v,U,X,_)=>{k&&a.timer.mark("Renderer.renderEmissiveOpaque"),l.disable(i.BLEND),l.enable(i.DEPTH_TEST),_?(l.depthMask(!1),l.depthFunc(i.LEQUAL)):l.depthMask(!0),Ge(v,U,X,1,!1);let{renderables:ee}=v;for(let ae=0,be=ee.length;ae<be;++ae){let Ie=ee[ae];st(Ie)&&(!_||rt(Ie))&&we(Ie,"emissive",0)}je(ee,ae=>st(ae)&&(!_||rt(ae)),"emissive",_?"blended":"opaque"),_&&(l.depthFunc(i.LESS),l.depthMask(!0)),k&&a.timer.markEnd("Renderer.renderEmissiveOpaque")},rr=(v,U,X)=>{k&&a.timer.mark("Renderer.renderEmissiveTransparent");let _=d.blendMinMax;l.enable(i.BLEND),l.blendFunc(i.ONE,i.ONE),_&&l.blendEquation(_.MAX),l.enable(i.DEPTH_TEST),l.depthMask(!1),Ge(v,U,X,2,!1);let{renderables:ee}=v;for(let ae=0,be=ee.length;ae<be;++ae){let Ie=ee[ae];Je(Ie)&&Ie.values.dGeometryType.ref.value!=="directVolume"&&rt(Ie)&&we(Ie,"emissive",0)}je(ee,ae=>Ue(ae)&&rt(ae),"emissive","blended"),_&&l.blendEquation(i.FUNC_ADD),k&&a.timer.markEnd("Renderer.renderEmissiveTransparent")},J=(v,U)=>{k&&a.timer.mark("Renderer.renderTracing"),l.disable(i.BLEND),l.enable(i.DEPTH_TEST),l.depthMask(!0),Ge(v,U,null,1,!1);let{renderables:X}=v;for(let _=0,ee=X.length;_<ee;++_){let ae=X[_];st(ae)&&we(ae,"tracing",0)}je(X,st,"tracing","opaque"),k&&a.timer.markEnd("Renderer.renderTracing")},Re=(v,U)=>{v.hasOpaque&&Ve(v,U),v.opacityAverage<1&&Wt(v,U)},Ve=(v,U)=>{k&&a.timer.mark("Renderer.renderOpaque"),l.disable(i.BLEND),l.enable(i.DEPTH_TEST),l.depthMask(!0),Ge(v,U,null,1,!1);let{renderables:X}=v;for(let _=0,ee=X.length;_<ee;++_){let ae=X[_];st(ae)&&we(ae,"color",0)}je(X,st,"color","opaque"),k&&a.timer.markEnd("Renderer.renderOpaque")},Wt=(v,U)=>{k&&a.timer.mark("Renderer.renderBlendedTransparent"),y?l.blendFunc(i.ONE,i.ONE_MINUS_SRC_ALPHA):l.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA),l.enable(i.BLEND),l.enable(i.DEPTH_TEST),l.depthMask(!1),Ge(v,U,null,2,!1);let X=Ye(),{renderables:_}=v;for(let ee=0,ae=_.length;ee<ae;++ee){let be=_[ee];Je(be)&&(be.values.uDoubleSided?.ref.value?(be.values.dTransparentBackfaces?.ref.value!=="opaque"&&we(be,"color",2),we(be,"color",1)):we(be,"color",0),X&&qt(be)&&Ue(be)&&(kt("blended"),er(be,"color","blended"),ft("blended")))}k&&a.timer.markEnd("Renderer.renderBlendedTransparent")};return{clear:(v,U,X)=>{l.enable(i.SCISSOR_TEST),l.enable(i.DEPTH_TEST),l.colorMask(!0,!0,!0,!0),l.depthMask(!0),X||y&&!U?l.clearColor(0,0,0,0):v?l.clearColor(x[0],x[1],x[2],1):l.clearColor(1,1,1,1),i.clear(i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT)},clearDepth:(v=!1)=>{l.enable(i.SCISSOR_TEST),l.enable(i.DEPTH_TEST),l.depthMask(!0),v?(l.colorMask(!0,!0,!0,!0),l.clearColor(1,1,1,1),i.clear(i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT)):i.clear(i.DEPTH_BUFFER_BIT)},update:tr,renderPick:Xe,renderDepth:lt,renderDepthOpaque:Er,renderDepthOpaqueBack:Ct,renderDepthTransparent:dr,renderMarkingDepth:Qe,renderMarkingMask:Pt,renderEmissiveOpaque:ht,renderEmissiveTransparent:rr,renderTracing:J,renderBlended:Re,renderOpaque:Ve,renderBlendedTransparent:Wt,renderVolume:(v,U,X)=>{k&&a.timer.mark("Renderer.renderVolume"),l.blendFunc(i.ONE,i.ONE_MINUS_SRC_ALPHA),l.enable(i.BLEND),l.disable(i.DEPTH_TEST),l.depthMask(!1),Ge(v,U,X,2,!1);let{renderables:_}=v;for(let ee=0,ae=_.length;ee<ae;++ee){let be=_[ee];be.values.dGeometryType.ref.value==="directVolume"&&we(be,"color",0)}k&&a.timer.markEnd("Renderer.renderVolume")},renderWboitTransparent:(v,U,X)=>{k&&a.timer.mark("Renderer.renderWboitTransparent"),Ge(v,U,X,2,!1);let{renderables:_}=v;for(let ee=0,ae=_.length;ee<ae;++ee){let be=_[ee];Je(be)&&we(be,"color",0)}je(_,Ue,"color","oit"),k&&a.timer.markEnd("Renderer.renderWboitTransparent")},renderDpoitTransparent:(v,U,X,_)=>{k&&a.timer.mark("Renderer.renderDpoitTransparent"),l.enable(i.BLEND),ua(D,"tDpoitDepth",_.depth),ua(D,"tDpoitFrontColor",_.frontColor),ua(D,"tDpoitBackColor",_.backColor),Ge(v,U,X,2,!1);let{renderables:ee}=v;for(let ae=0,be=ee.length;ae<be;++ae){let Ie=ee[ae];Je(Ie)&&we(Ie,"color",0)}je(ee,Ue,"color","oit"),k&&a.timer.markEnd("Renderer.renderDpoitTransparent")},setTime:v=>{o.updateIfChanged(E.uTime,v)},setProps:v=>{v.backgroundColor!==void 0&&v.backgroundColor!==u.backgroundColor&&(u.backgroundColor=v.backgroundColor,ge.toVec3Normalized(x,u.backgroundColor),o.update(E.uFogColor,b.copy(E.uFogColor.ref.value,x))),v.pickingAlphaThreshold!==void 0&&v.pickingAlphaThreshold!==u.pickingAlphaThreshold&&(u.pickingAlphaThreshold=v.pickingAlphaThreshold,o.update(E.uPickingAlphaThreshold,u.pickingAlphaThreshold)),v.colorMarker!==void 0&&v.colorMarker!==u.colorMarker&&(u.colorMarker=v.colorMarker),v.highlightColor!==void 0&&v.highlightColor!==u.highlightColor&&(u.highlightColor=v.highlightColor,o.update(E.uHighlightColor,ge.toVec3Normalized(E.uHighlightColor.ref.value,u.highlightColor))),v.selectColor!==void 0&&v.selectColor!==u.selectColor&&(u.selectColor=v.selectColor,o.update(E.uSelectColor,ge.toVec3Normalized(E.uSelectColor.ref.value,u.selectColor))),v.dimColor!==void 0&&v.dimColor!==u.dimColor&&(u.dimColor=v.dimColor,o.update(E.uDimColor,ge.toVec3Normalized(E.uDimColor.ref.value,u.dimColor))),v.highlightStrength!==void 0&&v.highlightStrength!==u.highlightStrength&&(u.highlightStrength=v.highlightStrength,o.update(E.uHighlightStrength,u.highlightStrength)),v.selectStrength!==void 0&&v.selectStrength!==u.selectStrength&&(u.selectStrength=v.selectStrength,o.update(E.uSelectStrength,u.selectStrength)),v.dimStrength!==void 0&&v.dimStrength!==u.dimStrength&&(u.dimStrength=v.dimStrength,o.update(E.uDimStrength,u.dimStrength)),v.markerPriority!==void 0&&v.markerPriority!==u.markerPriority&&(u.markerPriority=v.markerPriority,o.update(E.uMarkerPriority,u.markerPriority)),v.xrayEdgeFalloff!==void 0&&v.xrayEdgeFalloff!==u.xrayEdgeFalloff&&(u.xrayEdgeFalloff=v.xrayEdgeFalloff,o.update(E.uXrayEdgeFalloff,u.xrayEdgeFalloff)),v.celSteps!==void 0&&v.celSteps!==u.celSteps&&(u.celSteps=v.celSteps,o.update(E.uCelSteps,u.celSteps)),v.exposure!==void 0&&v.exposure!==u.exposure&&(u.exposure=v.exposure,o.update(E.uExposure,u.exposure)),v.light!==void 0&&!Ta(v.light,u.light)&&(u.light=v.light,Object.assign(c,on(v.light,c)),o.update(E.uLightDirection,c.direction),o.update(E.uLightColor,c.color)),v.ambientColor!==void 0&&v.ambientColor!==u.ambientColor&&(u.ambientColor=v.ambientColor,b.scale(W,ge.toArrayNormalized(u.ambientColor,W,0),u.ambientIntensity),o.update(E.uAmbientColor,W)),v.ambientIntensity!==void 0&&v.ambientIntensity!==u.ambientIntensity&&(u.ambientIntensity=v.ambientIntensity,b.scale(W,ge.toArrayNormalized(u.ambientColor,W,0),u.ambientIntensity),o.update(E.uAmbientColor,W)),v.enableAnimation!==void 0&&v.enableAnimation!==u.enableAnimation&&(u.enableAnimation=v.enableAnimation,o.update(E.uEnableAnimation,u.enableAnimation))},setViewport:(v,U,X,_)=>{l.viewport(v,U,X,_),l.scissor(v,U,X,_),(v!==p.x||U!==p.y||X!==p.width||_!==p.height)&&(Me.set(p,v,U,X,_),o.update(E.uViewport,Ne.set(E.uViewport.ref.value,v,U,X,_)))},setTransparentBackground:v=>{y=v},setDrawingBufferSize:(v,U)=>{(v!==g[0]||U!==g[1])&&o.update(E.uDrawingBufferSize,T.set(g,v,U))},setPixelRatio:v=>{o.update(E.uPixelRatio,v)},setOcclusionTest:v=>{S=v},props:u,get stats(){return{programCount:a.stats.resourceCounts.program,shaderCount:a.stats.resourceCounts.shader,attributeCount:a.stats.resourceCounts.attribute,elementsCount:a.stats.resourceCounts.elements,framebufferCount:a.stats.resourceCounts.framebuffer,renderbufferCount:a.stats.resourceCounts.renderbuffer,textureCount:a.stats.resourceCounts.texture,vertexArrayCount:a.stats.resourceCounts.vertexArray,drawCount:m.drawCount,instanceCount:m.instanceCount,instancedDrawCount:m.instancedDrawCount}},get light(){return c},get ambientColor(){return E.uAmbientColor.ref.value},dispose:()=>{}}}r.create=t})(Ho||={});var jo={eyeSeparation:h.Numeric(.062,{min:.02,max:.1,step:.001},{description:"Distance between left and right camera."}),focus:h.Numeric(10,{min:1,max:20,step:.1},{description:"Apparent object distance."})},Us=h.getDefaultValues(jo);var Tt=class{constructor(e,t={}){this.parent=e;this.left=new ja;this.right=new ja;this.props={...Us,...t}}get viewport(){return this.parent.viewport}get viewOffset(){return this.parent.viewOffset}setProps(e){Object.assign(this.props,e)}update(e){this.parent.update(),e?Qs(this.parent,this.left,this.right,e):Xs(this.parent,this.props,this.left,this.right)}};(e=>{function s(t){return"left"in t&&"right"in t}e.is=s})(Tt||={});var ja=class{constructor(){this.viewport=Me.create(0,0,0,0);this.view=V();this.projection=V();this.projectionView=V();this.inverseProjectionView=V();this.headRotation=V();this.viewEye=V();this.isAsymmetricProjection=!0;this.state=_e.createDefaultSnapshot();this.viewOffset=_e.ViewOffset();this.far=0;this.near=0;this.fogFar=0;this.fogNear=0;this.forceFull=!1;this.scale=0;this.minTargetDistance=0;this.disabled=!1}getRay(e,t,r){return V.getTranslation(e.origin,V.invert(V(),this.view)),b.set(e.direction,t,r,.5),Lr(e.direction,e.direction,this.viewport,this.inverseProjectionView),b.normalize(e.direction,b.sub(e.direction,e.direction,e.origin)),e}},nn=V.identity(),sn=V.identity();function qo(s,e){Me.copy(e.viewport,s.viewport),V.copy(e.view,s.view),V.copy(e.projection,s.projection),V.copy(e.headRotation,s.headRotation),_e.copySnapshot(e.state,s.state),_e.copyViewOffset(e.viewOffset,s.viewOffset),e.far=s.far,e.near=s.near,e.fogFar=s.fogFar,e.fogNear=s.fogNear,e.forceFull=s.forceFull,e.scale=s.scale,e.minTargetDistance=s.minTargetDistance}function Xs(s,e,t,r){qo(s,t),qo(s,r);let a=Math.floor(s.viewport.width/2),n=a/s.viewport.height;t.viewport.width=a,r.viewport.x+=a,r.viewport.width-=a;let i=e.eyeSeparation/2,l=i*s.near/e.focus,m=s.near*Math.tan(s.state.fov*.5),d,u;nn[12]=-i,sn[12]=i,d=-m*n+l,u=m*n+l,t.projection[0]=2*s.near/(u-d),t.projection[8]=(u+d)/(u-d),V.mul(t.view,t.view,nn),V.mul(t.projectionView,t.projection,t.view),V.invert(t.inverseProjectionView,t.projectionView),d=-m*n-l,u=m*n-l,r.projection[0]=2*s.near/(u-d),r.projection[8]=(u+d)/(u-d),V.mul(r.view,r.view,sn),V.mul(r.projectionView,r.projection,r.view),V.invert(r.inverseProjectionView,r.projectionView),t.disabled=!1,r.disabled=!1}function Qs(s,e,t,r){ln(s,e,r.pose.views[0],r.layer),r.pose.views.length===1?t.disabled=!0:ln(s,t,r.pose.views[1],r.layer)}function ln(s,e,t,r){qo(s,e);let a=r.getViewport(t);Me.set(e.viewport,a.x,a.y,a.width,a.height),V.fromArray(e.projection,t.projectionMatrix,0),V.fromArray(e.view,t.transform.inverse.matrix,0),V.mul(e.projectionView,e.projection,e.view),V.invert(e.inverseProjectionView,e.projectionView),e.disabled=!1}function re(s,e="",t=""){return re.create(s,e,t)}(u=>{function s(c,p="",g=""){return{triggers:c,action:p,description:g}}u.create=s;function e(c){return!!c&&Array.isArray(c.triggers)&&typeof c.action=="string"}u.isBinding=e,u.Empty={triggers:[],action:"",description:""};function r(c){return c.triggers.length===0||c.triggers.every(p=>p.buttons===void 0&&p.modifiers===void 0&&!p.code)}u.isEmpty=r;function a(c,p,g){return c.triggers.some(x=>m.match(x,p,g))}u.match=a;function n(c,p,g,x){return c.triggers.some(y=>m.matchKey(y,p,g,x))}u.matchKey=n;function i(c){return c.triggers.map(m.format).join(" or ")}u.formatTriggers=i;function l(c,p=""){let g=c.description||ui(p);return ci(g,{triggers:"<i>"+i(c)+"</i>"})}u.format=l;function m(c,p){return m.create(c,p)}u.Trigger=m;function d(c,p){return m.create(void 0,p,c)}u.TriggerKey=d,(S=>{function c(P,D,A){return{buttons:P,modifiers:D,code:A}}S.create=c,S.Empty={};function g(P,D,A){let{buttons:M,modifiers:q}=P;return M!==void 0&&(M===D||Ze.has(M,D))&&(!q||Vt.areEqual(q,A))}S.match=g;function x(P,D,A,M){let{modifiers:q,code:N}=P;return N!==void 0&&(N===D||N.length===1&&D.length===4&&D.startsWith("Key")&&!!M&&M.length===1&&M.toUpperCase()===N.toUpperCase())&&(!q||Vt.areEqual(q,A))}S.matchKey=x;function y(P){let D=[],A=Ks(P.buttons,P.code);A&&D.push(A);let M=Zs(P.code);M&&D.push(M);let q=_s(P.modifiers);return q&&D.push(q),D.join(" + ")}S.format=y})(m=u.Trigger||={})})(re||={});var Ir=Ze;function Ks(s,e){let t=[];return s===void 0&&!e?t.push("any mouse button"):s===0?t.push("mouse hover"):s!==void 0&&(Ir.has(s,Ir.Flag.Primary)&&t.push("left mouse button"),Ir.has(s,Ir.Flag.Secondary)&&t.push("right mouse button"),Ir.has(s,Ir.Flag.Auxilary)&&t.push("wheel/middle mouse button"),Ir.has(s,Ir.Flag.Forth)&&t.push("three fingers")),t.join(" + ")}function _s(s,e){let t=[];return s?(s.alt&&t.push("alt key"),s.control&&t.push("control key"),s.meta&&t.push("meta/command key"),s.shift&&t.push("shift key"),e&&t.length===0&&t.push("no key")):e&&t.push("any key"),t.join(" + ")}function Zs(s){return s?.startsWith("Key")&&(s=s.substring(3)),s&&li(s).toLowerCase()}var wr=Ze,Nt=Vt,Dr=re.Trigger,St=re.TriggerKey,Ys={dragRotate:re([Dr(wr.Flag.Primary,Nt.create()),Dr(wr.Flag.Trigger)],"Rotate","Drag using ${triggers}"),dragRotateZ:re([Dr(wr.Flag.Primary,Nt.create({shift:!0,control:!0}))],"Rotate around z-axis (roll)","Drag using ${triggers}"),dragPan:re([Dr(wr.Flag.Secondary,Nt.create()),Dr(wr.Flag.Primary,Nt.create({control:!0}))],"Pan","Drag using ${triggers}"),dragZoom:re.Empty,dragFocus:re([Dr(wr.Flag.Forth,Nt.create())],"Focus","Drag using ${triggers}"),dragFocusZoom:re([Dr(wr.Flag.Auxilary,Nt.create())],"Focus and zoom","Drag using ${triggers}"),scrollZoom:re([Dr(wr.Flag.Auxilary,Nt.create())],"Zoom","Scroll using ${triggers}"),scrollFocus:re([Dr(wr.Flag.Auxilary,Nt.create({shift:!0}))],"Clip","Scroll using ${triggers}"),scrollFocusZoom:re.Empty,keyMoveForward:re([St("KeyW"),St("GamepadUp")],"Move forward","Press ${triggers}"),keyMoveBack:re([St("KeyS"),St("GamepadDown")],"Move back","Press ${triggers}"),keyMoveLeft:re([St("KeyA")],"Move left","Press ${triggers}"),keyMoveRight:re([St("KeyD")],"Move right","Press ${triggers}"),keyMoveUp:re([St("KeyR")],"Move up","Press ${triggers}"),keyMoveDown:re([St("KeyF")],"Move down","Press ${triggers}"),keyRollLeft:re([St("KeyQ")],"Roll left","Press ${triggers}"),keyRollRight:re([St("KeyE")],"Roll right","Press ${triggers}"),keyPitchUp:re([St("ArrowUp",Nt.create({shift:!0}))],"Pitch up","Press ${triggers}"),keyPitchDown:re([St("ArrowDown",Nt.create({shift:!0}))],"Pitch down","Press ${triggers}"),keyYawLeft:re([St("ArrowLeft",Nt.create({shift:!0}))],"Yaw left","Press ${triggers}"),keyYawRight:re([St("ArrowRight",Nt.create({shift:!0}))],"Yaw right","Press ${triggers}"),boostMove:re([St("ShiftLeft")],"Boost move","Press ${triggers}"),enablePointerLock:re([St("Space",Nt.create({control:!0}))],"Enable pointer lock","Press ${triggers}")},Go={rotateSpeed:h.Numeric(5,{min:1,max:10,step:1}),zoomSpeed:h.Numeric(7,{min:1,max:15,step:1}),panSpeed:h.Numeric(1,{min:.1,max:5,step:.1}),moveSpeed:h.Numeric(.75,{min:.1,max:3,step:.1}),boostMoveFactor:h.Numeric(5,{min:.1,max:10,step:.1}),flyMode:h.Boolean(!1),animate:h.MappedStatic("off",{off:h.EmptyGroup(),spin:h.Group({speed:h.Numeric(.1,{min:-2,max:2,step:.01},{description:"Number of rotations per second"}),axis:h.Vec3(b.create(0,-1,0),{},{description:"Axis of rotation in camera space"})},{description:"Spin the 3D scene around an axis in camera space"}),rock:h.Group({speed:h.Numeric(.3,{min:-5,max:5,step:.1},{description:"Number of oscilations per second"}),angle:h.Numeric(10,{min:0,max:90,step:1},{description:"How many degrees to rotate in each direction."}),axis:h.Vec3(b.create(0,-1,0),{},{description:"Axis of rotation in camera space"})},{description:"Rock the 3D scene around an axis in camera space"})}),staticMoving:h.Boolean(!0),dynamicDampingFactor:h.Numeric(.2,{min:0,max:1,step:.01}),minDistance:h.Numeric(.01,{},{isHidden:!0}),maxDistance:h.Numeric(1e150,{},{isHidden:!0}),gestureScaleFactor:h.Numeric(1,{},{isHidden:!0}),maxWheelDelta:h.Numeric(.02,{},{isHidden:!0}),autoAdjustMinMaxDistance:h.MappedStatic("on",{off:h.EmptyGroup(),on:h.Group({minDistanceFactor:h.Numeric(0),minDistancePadding:h.Numeric(5),maxDistanceFactor:h.Numeric(10),maxDistanceMin:h.Numeric(20)})},{isHidden:!0})},Wo={bindings:Ys};var Uo;(e=>{function s(t,r,a,n={},i={}){let l={...h.getDefaultValues(Go),...n},m={...Wo,...i},d=m.bindings,u=Me.clone(r.viewport),c=!1,p=t.drag.subscribe(X),g=t.interactionEnd.subscribe(_),x=t.wheel.subscribe(ee),y=t.pinch.subscribe(ae),S=t.keyDown.subscribe(Ie),P=t.keyUp.subscribe(Ut),D=t.move.subscribe(be),A=t.lock.subscribe(Xt),M=t.leave.subscribe(zr),q=!1,N=b(),L=b(),G=T(),H=T(),Z=b(),j=0,le=T(),I=T(),ne=0,te=0,qe=0,fe=T(),ce=T(),Ee=T(),he=T(),Le=T(),ue=T(),W=b.clone(r.target),E=b.clone(r.position),se=b.clone(r.up),oe=T();function ye(f,w){return T.set(oe,(f-u.x)/u.width,(w-u.y)/u.height)}let ve=T();function we(f,w){return T.set(ve,(f-u.width*.5-u.x)/(u.width*.5),(u.height+2*(u.y-w))/u.width)}function tt(){let f=t.width/t.height||1;return l.rotateSpeed*t.pixelRatio*f}let Ae=b(),Ye=Ke(),qt=b(),Dt=b(),ze=b(),nt=b(),jt=1e3/60;function er(f,w){return Math.pow(f,w/jt)}function kt(f){return er(Math.sqrt(1-l.dynamicDampingFactor),f)}function ft(f){return 1-er(1-l.dynamicDampingFactor,f)}let je=1e-5,tr=1e-5,Ge=tr*tr;function st(f){let w=H[0]-G[0],F=H[1]-G[1];b.set(nt,w,F,0);let Q=b.magnitude(nt)*tt();Q?(b.sub(L,r.position,r.target),b.normalize(qt,L),b.normalize(Dt,r.up),b.normalize(ze,b.cross(ze,Dt,qt)),b.setMagnitude(Dt,Dt,F),b.setMagnitude(ze,ze,w),b.add(nt,Dt,ze),b.normalize(Ae,b.cross(Ae,nt,L)),Ke.setAxisAngle(Ye,Ae,Q),b.transformQuat(L,L,Ye),b.transformQuat(r.up,r.up,Ye),b.copy(Z,Ae),j=Q):!l.staticMoving&&j&&(j*=kt(f),Math.abs(j)<je?j=0:(b.sub(L,r.position,r.target),Ke.setAxisAngle(Ye,Z,j),b.transformQuat(L,L,Ye),b.transformQuat(r.up,r.up,Ye))),T.copy(G,H)}let Je=Ke(),Gt=b();function Ot(f){let w=(J.rollRight-J.rollLeft)/45,F=(I[0]-le[0])*-Math.sign(I[1]),Q=(I[1]-le[1])*-Math.sign(I[0]),de=-l.rotateSpeed*(-F+Q)+w;de?(b.normalize(Gt,L),Ke.setAxisAngle(Je,Gt,de),b.transformQuat(r.up,r.up,Je),ne=de):!l.staticMoving&&ne&&(ne*=kt(f),Math.abs(ne)<je?ne=0:(b.normalize(Gt,L),Ke.setAxisAngle(Je,Gt,ne),b.transformQuat(r.up,r.up,Je))),T.copy(le,I)}let pt=Ke(),rt=b();function Ue(f){let w=(J.pitchUp-J.pitchDown)/(l.flyMode?360:90),F=-l.rotateSpeed*w;F?(b.cross(rt,L,r.up),b.normalize(rt,rt),Ke.setAxisAngle(pt,rt,F),b.transformQuat(L,L,pt),b.transformQuat(r.up,r.up,pt),te=F):!l.staticMoving&&te&&(te*=kt(f),Math.abs(te)<je?te=0:(b.cross(rt,L,r.up),b.normalize(rt,rt),Ke.setAxisAngle(pt,rt,te),b.transformQuat(L,L,pt),b.transformQuat(r.up,r.up,pt)))}let Xe=Ke(),lt=b();function Er(f){let w=(J.yawRight-J.yawLeft)/(l.flyMode?360:90),F=-l.rotateSpeed*w;F?(b.normalize(lt,r.up),Ke.setAxisAngle(Xe,lt,F),b.transformQuat(L,L,Xe),b.transformQuat(r.up,r.up,Xe),qe=F):!l.staticMoving&&qe&&(qe*=kt(f),Math.abs(qe)<je?qe=0:(b.normalize(lt,r.up),Ke.setAxisAngle(Xe,lt,qe),b.transformQuat(L,L,Xe),b.transformQuat(r.up,r.up,Xe)))}function Ct(f){if(!l.staticMoving&&Math.abs(ce[1]-fe[1])<tr){T.copy(fe,ce);return}let w=1+(ce[1]-fe[1])*l.zoomSpeed;w!==1&&w>0&&b.scale(L,L,w),l.staticMoving?T.copy(fe,ce):fe[1]+=(ce[1]-fe[1])*ft(f)}function dr(f){if(!l.staticMoving&&Math.abs(he[1]-Ee[1])<tr){T.copy(Ee,he);return}let w=(he[1]-Ee[1])*l.zoomSpeed;if(w!==0){let F=Math.max(1,r.state.radius+r.state.radius*w);r.setState({radius:F})}l.staticMoving?T.copy(Ee,he):Ee[1]+=(he[1]-Ee[1])*ft(f)}let Qe=T(),Pt=b(),ht=b();function rr(f){if(T.sub(Qe,T.copy(Qe,ue),Le),!l.staticMoving&&T.squaredMagnitude(Qe)<Ge){T.copy(Le,ue);return}if(T.squaredMagnitude(Qe)){let w=t.pixelRatio*l.panSpeed;Qe[0]*=1/r.zoom*r.viewport.width*w,Qe[1]*=1/r.zoom*r.viewport.height*w,b.cross(ht,b.copy(ht,L),r.up),b.setMagnitude(ht,ht,Qe[0]),b.setMagnitude(Pt,r.up,Qe[1]),b.add(ht,ht,Pt),b.add(r.position,r.position,ht),b.add(r.target,r.target,ht),l.staticMoving?T.copy(Le,ue):(T.sub(Qe,ue,Le),T.scale(Qe,Qe,ft(f)),T.add(Le,Le,Qe))}}let J={moveUp:0,moveDown:0,moveLeft:0,moveRight:0,moveForward:0,moveBack:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0,boostMove:0},Re=b(),Ve=b();function Wt(f){b.sub(Ve,r.position,r.target);let w=Math.max(r.state.minNear,l.minDistance);b.setMagnitude(Ve,Ve,w);let F=l.flyMode||t.pointerLock,Q=f*(60/1e3)*l.moveSpeed*(J.boostMove===1?l.boostMoveFactor:1);if(J.moveForward===1&&(b.distance(r.position,a.boundingSphereVisible.center)<a.boundingSphereVisible.radius&&F?(b.normalize(Re,Ve),b.scaleAndSub(r.position,r.position,Re,Q)):(b.sub(Re,r.position,r.target),b.scale(Re,Re,1-Q/100),b.add(r.position,r.target,Re)),F&&b.sub(r.target,r.position,Ve)),J.moveBack===1&&(b.distance(r.position,a.boundingSphereVisible.center)<a.boundingSphereVisible.radius&&F?(b.normalize(Re,Ve),b.scaleAndAdd(r.position,r.position,Re,Q)):(b.sub(Re,r.position,r.target),b.scale(Re,Re,1+Q/100),b.add(r.position,r.target,Re)),F&&b.sub(r.target,r.position,Ve)),J.moveLeft===1&&(b.cross(Re,Ve,r.up),b.normalize(Re,Re),F?(b.scaleAndAdd(r.position,r.position,Re,Q),b.sub(r.target,r.position,Ve)):(b.scaleAndSub(r.position,r.position,Re,Q),b.sub(r.target,r.position,L))),J.moveRight===1&&(b.cross(Re,Ve,r.up),b.normalize(Re,Re),F?(b.scaleAndSub(r.position,r.position,Re,Q),b.sub(r.target,r.position,Ve)):(b.scaleAndAdd(r.position,r.position,Re,Q),b.sub(r.target,r.position,L))),J.moveUp===1&&(b.normalize(Re,r.up),F?(b.scaleAndAdd(r.position,r.position,Re,Q),b.sub(r.target,r.position,Ve)):(b.scaleAndSub(r.position,r.position,Re,Q),b.sub(r.target,r.position,L))),J.moveDown===1&&(b.normalize(Re,r.up),F?(b.scaleAndSub(r.position,r.position,Re,Q),b.sub(r.target,r.position,Ve)):(b.scaleAndAdd(r.position,r.position,Re,Q),b.sub(r.target,r.position,L))),F){let de=b.distance(r.position,a.boundingSphereVisible.center);r.setState({minFar:de+a.boundingSphereVisible.radius})}}function ar(){let f=Math.min(Math.max(r.state.radiusMax*1e3,.01),l.maxDistance);b.squaredMagnitude(L)>f*f&&(b.setMagnitude(L,L,f),b.add(r.position,r.target,L),T.copy(fe,ce),T.copy(Ee,he)),b.squaredMagnitude(L)<l.minDistance*l.minDistance&&(b.setMagnitude(L,L,l.minDistance),b.add(r.position,r.target,L),T.copy(fe,ce),T.copy(Ee,he))}function or(f,w){return f*=t.pixelRatio,w*=t.pixelRatio,f>u.x+u.width||t.height-w>u.y+u.height||f<u.x||t.height-w<u.y}let Rt=-1;function v(f){if(Rt===f)return;let w=f-Rt;Rt>0&&(l.animate.name==="spin"?O(w):l.animate.name==="rock"&&z(w)),b.sub(L,r.position,r.target),st(w),Ot(w),Ue(w),Er(w),Ct(w),dr(w),rr(w),b.add(r.position,r.target,L),ar(),Rt>0&&Wt(Math.min(w,15*1e3/60)),b.sub(L,r.position,r.target),ar(),b.squaredDistance(N,r.position)>1e-6&&b.copy(N,r.position),Rt=f}function U(){b.copy(r.target,W),b.copy(r.position,E),b.copy(r.up,se),b.sub(L,r.position,r.target),b.copy(N,r.position)}function X({x:f,y:w,dx:F,dy:Q,pageX:de,pageY:Pe,buttons:me,modifiers:xe,isStart:We,useDelta:vt}){let ct=!vt&&or(f,w);if(We&&ct||!We&&!q)return;q=!0,pe();let wt=re.match(d.dragRotate,me,xe),nr=re.match(d.dragRotateZ,me,xe),it=re.match(d.dragPan,me,xe),Qt=re.match(d.dragZoom,me,xe),sr=re.match(d.dragFocus,me,xe),Kt=re.match(d.dragFocusZoom,me,xe);vt&&wt&&T.copy(G,we(de-F,Pe-Q)),we(de,Pe),ye(de,Pe);let $e=t.pixelRatio,At=(f*$e-u.width/2-u.x)/u.width,va=-(t.height-w*$e-u.height/2-u.y)/u.height;if(We&&(wt&&(T.copy(H,ve),T.copy(G,H)),nr&&(T.set(I,At,va),T.copy(le,I)),(Qt||Kt)&&(T.copy(fe,oe),T.copy(ce,fe)),sr&&(T.copy(Ee,oe),T.copy(he,Ee)),it&&(T.copy(Le,oe),T.copy(ue,Le))),wt&&T.copy(H,ve),nr&&T.set(I,At,va),(Qt||Kt)&&T.copy(ce,oe),sr&&T.copy(he,oe),Kt){let xa=b.distance(r.state.position,r.state.target);r.setState({radius:xa/5})}it&&T.copy(ue,oe)}function _(){q=!1}function ee({x:f,y:w,spinX:F,spinY:Q,dz:de,buttons:Pe,modifiers:me}){if(or(f,w))return;let xe=ni(F*.075,Q*.075,de*1e-4);xe<-l.maxWheelDelta?xe=-l.maxWheelDelta:xe>l.maxWheelDelta&&(xe=l.maxWheelDelta),re.match(d.scrollZoom,Pe,me)&&(ce[1]+=xe),re.match(d.scrollFocus,Pe,me)&&(he[1]+=xe)}function ae({isStart:f,startX:w,startY:F,centerPageX:Q,centerPageY:de,fractionDelta:Pe,buttons:me,modifiers:xe}){if(or(w,F))return;let We=re.match(d.dragPan,me,xe),vt=re.match(d.scrollZoom,me,xe);q=We||vt,We&&(ye(Q,de),f?(T.copy(Le,oe),T.copy(ue,Le)):T.copy(ue,oe)),vt&&(ce[1]+=l.gestureScaleFactor*Pe)}function be({movementX:f,movementY:w}){if(!t.pointerLock||f===void 0||w===void 0)return;let F=u.width*.5-u.x,Q=u.height*.5-u.y;T.copy(G,we(F,Q)),T.copy(H,we(f+F,w+Q))}function Ie({modifiers:f,code:w,key:F,x:Q,y:de}){or(Q,de)||(re.matchKey(d.keyMoveForward,w,f,F)?J.moveForward=1:re.matchKey(d.keyMoveBack,w,f,F)?J.moveBack=1:re.matchKey(d.keyMoveLeft,w,f,F)?J.moveLeft=1:re.matchKey(d.keyMoveRight,w,f,F)?J.moveRight=1:re.matchKey(d.keyMoveUp,w,f,F)?J.moveUp=1:re.matchKey(d.keyMoveDown,w,f,F)?J.moveDown=1:re.matchKey(d.keyRollLeft,w,f,F)?J.rollLeft=1:re.matchKey(d.keyRollRight,w,f,F)?J.rollRight=1:re.matchKey(d.keyPitchUp,w,f,F)?J.pitchUp=1:re.matchKey(d.keyPitchDown,w,f,F)?J.pitchDown=1:re.matchKey(d.keyYawLeft,w,f,F)?J.yawLeft=1:re.matchKey(d.keyYawRight,w,f,F)&&(J.yawRight=1),re.matchKey(d.boostMove,w,f,F)&&(J.boostMove=1),re.matchKey(d.enablePointerLock,w,f,F)&&t.requestPointerLock(u))}function Ut({modifiers:f,code:w,key:F,x:Q,y:de}){if(or(Q,de))return;let Pe=!1;w.startsWith("Alt")?(Pe=!0,f.alt=!0):w.startsWith("Shift")?(Pe=!0,f.shift=!0):w.startsWith("Control")?(Pe=!0,f.control=!0):w.startsWith("Meta")&&(Pe=!0,f.meta=!0);let me=[];Pe?(J.moveForward&&me.push(d.keyMoveForward.triggers[0]?.code||""),J.moveBack&&me.push(d.keyMoveBack.triggers[0]?.code||""),J.moveLeft&&me.push(d.keyMoveLeft.triggers[0]?.code||""),J.moveRight&&me.push(d.keyMoveRight.triggers[0]?.code||""),J.moveUp&&me.push(d.keyMoveUp.triggers[0]?.code||""),J.moveDown&&me.push(d.keyMoveDown.triggers[0]?.code||""),J.rollLeft&&me.push(d.keyRollLeft.triggers[0]?.code||""),J.rollRight&&me.push(d.keyRollRight.triggers[0]?.code||""),J.pitchUp&&me.push(d.keyPitchUp.triggers[0]?.code||""),J.pitchDown&&me.push(d.keyPitchDown.triggers[0]?.code||""),J.yawLeft&&me.push(d.keyYawLeft.triggers[0]?.code||""),J.yawRight&&me.push(d.keyYawRight.triggers[0]?.code||"")):me.push(w);for(let xe of me)re.matchKey(d.keyMoveForward,xe,f,F)?J.moveForward=0:re.matchKey(d.keyMoveBack,xe,f,F)?J.moveBack=0:re.matchKey(d.keyMoveLeft,xe,f,F)?J.moveLeft=0:re.matchKey(d.keyMoveRight,xe,f,F)?J.moveRight=0:re.matchKey(d.keyMoveUp,xe,f,F)?J.moveUp=0:re.matchKey(d.keyMoveDown,xe,f,F)?J.moveDown=0:re.matchKey(d.keyRollLeft,xe,f,F)?J.rollLeft=0:re.matchKey(d.keyRollRight,xe,f,F)?J.rollRight=0:re.matchKey(d.keyPitchUp,xe,f,F)?J.pitchUp=0:re.matchKey(d.keyPitchDown,xe,f,F)?J.pitchDown=0:re.matchKey(d.keyYawLeft,xe,f,F)?J.yawLeft=0:re.matchKey(d.keyYawRight,xe,f,F)&&(J.yawRight=0);re.matchKey(d.boostMove,w,f,F)&&(J.boostMove=0)}function gt(){b.sub(Ve,r.position,r.target);let f=Math.max(r.state.minNear,l.minDistance);b.setMagnitude(Ve,Ve,f),b.sub(r.target,r.position,Ve);let w=b.distance(r.position,a.boundingSphereVisible.center);r.setState({minFar:w+a.boundingSphereVisible.radius})}function pr(){let{center:f,radius:w}=a.boundingSphereVisible;if(b.distance(r.position,f)>w){let Q=r.getFocus(f,w);r.setState({...Q,minFar:0})}else r.setState({minFar:0,radius:a.boundingSphereVisible.radius})}function Xt(f){f?gt():pr()}function ir(){J.moveForward=0,J.moveBack=0,J.moveLeft=0,J.moveRight=0,J.moveUp=0,J.moveDown=0,J.rollLeft=0,J.rollRight=0,J.pitchUp=0,J.pitchDown=0,J.yawLeft=0,J.yawRight=0,J.boostMove=0}function zr(){ir()}function Wr(){c||(c=!0,p.unsubscribe(),x.unsubscribe(),y.unsubscribe(),g.unsubscribe(),S.unsubscribe(),P.unsubscribe(),D.unsubscribe(),A.unsubscribe(),M.unsubscribe())}let It=Ke(),bt=b(),yt=b(),ut=b(),at=b();function O(f){if(l.animate.name!=="spin"||l.animate.params.speed===0||q)return;let w=2*Math.PI*l.animate.params.speed/1e3,F=f*w;b.sub(L,r.position,r.target),b.normalize(at,L),b.normalize(yt,r.up),b.cross(ut,yt,at),b.normalize(ut,ut);let Q=l.animate.params.axis;b.set(bt,Q[0]*ut[0]+Q[1]*yt[0]+Q[2]*at[0],Q[0]*ut[1]+Q[1]*yt[1]+Q[2]*at[1],Q[0]*ut[2]+Q[1]*yt[2]+Q[2]*at[2]),b.normalize(bt,bt),Ke.setAxisAngle(It,bt,F),b.transformQuat(L,L,It),b.transformQuat(r.up,r.up,It),b.add(r.position,r.target,L)}let $=0;function z(f){if(l.animate.name!=="rock"||l.animate.params.speed===0||q)return;let w=f/1e3*l.animate.params.speed,F=Et(l.animate.params.angle),Q=Math.sin($*Math.PI*2)*F,Pe=Math.sin(($+w)*Math.PI*2)*F-Q;b.sub(L,r.position,r.target),b.normalize(at,L),b.normalize(yt,r.up),b.cross(ut,yt,at),b.normalize(ut,ut);let me=l.animate.params.axis;b.set(bt,me[0]*ut[0]+me[1]*yt[0]+me[2]*at[0],me[0]*ut[1]+me[1]*yt[1]+me[2]*at[1],me[0]*ut[2]+me[1]*yt[2]+me[2]*at[2]),b.normalize(bt,bt),Ke.setAxisAngle(It,bt,Pe),b.transformQuat(L,L,It),b.transformQuat(r.up,r.up,It),b.add(r.position,r.target,L),$+=w,$>=1&&($=0)}function pe(){$=0}function Be(f){Rt=-1,v(f)}return{viewport:u,get isAnimating(){return l.animate.name!=="off"},get isMoving(){return J.moveForward===1||J.moveBack===1||J.moveLeft===1||J.moveRight===1||J.moveUp===1||J.moveDown===1||J.rollLeft===1||J.rollRight===1||J.pitchUp===1||J.pitchDown===1||J.yawLeft===1||J.yawRight===1},get props(){return l},setProps:f=>{f.animate?.name==="rock"&&l.animate.name!=="rock"&&pe(),f.flyMode!==void 0&&f.flyMode!==l.flyMode&&(f.flyMode?gt():pr()),Object.assign(l,f)},get attribs(){return m},setAttribs:f=>{Object.assign(m,f),Object.assign(d,m.bindings)},start:Be,update:v,reset:U,dispose:Wr}}e.create=s})(Uo||={});var $s={...ur.Params,alpha:{...ur.Params.alpha,defaultValue:1},ignoreLight:{...ur.Params.ignoreLight,defaultValue:!0},colorX:h.Color(Mr.red,{isEssential:!0}),colorY:h.Color(Mr.green,{isEssential:!0}),colorZ:h.Color(Mr.blue,{isEssential:!0}),scale:h.Numeric(.33,{min:.1,max:2,step:.1},{isEssential:!0})},Wa={handle:h.MappedStatic("off",{on:h.Group($s),off:h.Group({})},{cycle:!0,description:"Show handle tool"})},Ga=class{constructor(e,t={}){this.webgl=e;this.props={handle:{name:"off",params:{}}};this.pixelRatio=1;this._transform=V();this.eachGroup=(e,t)=>{if(!this.renderObject||!un(e))return!1;let r=!1,a=this.renderObject.values.uGroupCount.ref.value,{elements:n}=e;for(let{groupId:i,instanceId:l}of n){let m=l*a+i;t(gi.ofSingleton(m))&&(r=!0)}return r};this.scene=Kr.create(e,"blended"),this.setProps(t)}getBoundingSphere(e,t){return this.renderObject&&(ot.copy(e,this.renderObject.values.invariantBoundingSphere.ref.value),V.fromArray(this._transform,this.renderObject.values.aTransform.ref.value,t*16),ot.transform(e,e,this._transform)),e}setProps(e){this.props=wa(this.props,t=>{if(e.handle!==void 0&&(t.handle.name=e.handle.name,e.handle.name==="on")){this.scene.clear(),this.pixelRatio=this.webgl.pixelRatio;let r={...e.handle.params,scale:e.handle.params.scale*this.webgl.pixelRatio,cellSize:0};this.renderObject=al(r),this.scene.add(this.renderObject),this.scene.commit(),t.handle.params={...e.handle.params}}})}get isEnabled(){return this.props.handle.name==="on"}update(e,t,r){this.renderObject&&(this.pixelRatio!==this.webgl.pixelRatio&&this.setProps(this.props),V.setTranslation(this.renderObject.values.aTransform.ref.value,t),V.fromMat3(this.renderObject.values.aTransform.ref.value,r),o.update(this.renderObject.values.aTransform,this.renderObject.values.aTransform.ref.value),this.scene.update([this.renderObject],!0))}getLoci(e){let{objectId:t,groupId:r,instanceId:a}=e;return!this.renderObject||t!==this.renderObject.id?gr:tl(this,r,a)}mark(e,t){return!fa.is(fa.Highlighting,t)||!Ei(e)&&(!un(e)||e.data!==this)?!1:Sr.mark(this.renderObject,e,t,this.eachGroup)}};function el(s,e){let t=Zr.createState(512,256,e),r=.05*s,a=b.scale(b(),b.unitX,s),n=b.scale(b(),b.unitY,s),i=b.scale(b(),b.unitZ,s),l={radiusTop:r,radiusBottom:r,radialSegments:32};return t.currentGroup=Vr.TranslateScreenXY,Cr(t,b.origin,r*3,2),t.currentGroup=Vr.TranslateObjectX,Cr(t,a,r,2),Ba(t,b.origin,a,1,l),t.currentGroup=Vr.TranslateObjectY,Cr(t,n,r,2),Ba(t,b.origin,n,1,l),t.currentGroup=Vr.TranslateObjectZ,Cr(t,i,r,2),Ba(t,b.origin,i,1,l),Zr.getMesh(t)}var Vr={None:0,TranslateScreenXY:1,TranslateObjectX:3,TranslateObjectY:4,TranslateObjectZ:5};function tl(s,e,t){return Fi("handle",s,[{groupId:e,instanceId:t}],r=>s.getBoundingSphere(r,t),()=>`Handle Helper | Group Id ${e} | Instance Id ${t}`)}function un(s){return s.kind==="data-loci"&&s.tag==="handle"}function rl(s,e){let t=10*s.scale,r=el(t,e?.geometry);return r.setBoundingSphere(ot.create(b.create(t/2,t/2,t/2),t+t/4)),Fa("handle",{},r,n=>{switch(n){case Vr.TranslateObjectX:return s.colorX;case Vr.TranslateObjectY:return s.colorY;case Vr.TranslateObjectZ:return s.colorZ;default:return Mr.grey}},()=>1,()=>"")}function al(s){let e=rl(s);return Ea(e,s)}var Ua=class{constructor(e,t){this.entries=new Map;this.ctx=e,this.parent=t}register(e,t){this.entries.has(e)&&(Oe&&console.warn(`Debug helper with name '${e}' already exists, replacing.`),this.entries.get(e).clear()),this.entries.set(e,t)}unregister(e){let t=this.entries.get(e);t&&(t.clear(),this.entries.delete(e))}get scenes(){return Array.from(this.entries.values()).map(e=>e.scene)}update(){this.entries.forEach(e=>{e.isEnabled&&e.update()})}syncVisibility(){this.entries.forEach(e=>{e.syncVisibility()})}clear(){this.entries.forEach(e=>{e.clear()})}get isEnabled(){let e=!1;return this.entries.forEach(t=>{t.isEnabled&&(e=!0)}),e}setProps(e){this.entries.forEach(t=>{t.setProps(e)})}};var ba={...ur.Params,enabled:h.Select("off",h.arrayToOptions(["on","off"]),{isEssential:!0}),ignoreLight:{...ur.Params.ignoreLight,defaultValue:!0},color:h.Color(Mr.grey,{isEssential:!0}),hitColor:h.Color(Mr.pink,{isEssential:!0})},Xa=class{constructor(e,t={}){this.pixelScale=1;this.modelScale=1;this.pointers=[];this.points=[];this.hit=void 0;this.scene=Kr.create(e,"blended"),this.props={...h.getDefaultValues(ba),...t},this.camera=new _e,this.shape=cn(this.getData(),this.props),this.renderObject=nl(this.shape,this.props),this.scene.add(this.renderObject)}setProps(e){Object.assign(this.props,e),this.isEnabled&&this.update(this.pointers,this.points,this.hit)}ensureEnabled(){this.props.enabled!=="on"&&(this.props.enabled="on")}get isEnabled(){return this.props.enabled==="on"}setCamera(e){_e.copySnapshot(this.camera.state,e.state),Me.copy(this.camera.viewport,e.viewport),V.copy(this.camera.view,e.view),V.copy(this.camera.projection,e.projection),V.copy(this.camera.projectionView,e.projectionView),V.copy(this.camera.headRotation,e.headRotation),_e.copyViewOffset(this.camera.viewOffset,e.viewOffset),this.camera.far=e.far,this.camera.near=e.near,this.camera.fogFar=e.fogFar,this.camera.fogNear=e.fogNear,this.camera.forceFull=e.forceFull,this.camera.scale=1,this.modelScale=e.scale}update(e,t,r){if(this.pointers=e,this.points=t,this.hit=r,this.props.enabled!=="on"){this.renderObject&&(this.renderObject.state.visible=!1);return}this.shape=cn(this.getData(),this.props,this.shape),o.updateIfChanged(this.renderObject.values.drawCount,Mo.getDrawCount(this.shape.geometry)),o.updateIfChanged(this.renderObject.values.uVertexCount,Mo.getVertexCount(this.shape.geometry)),o.updateIfChanged(this.renderObject.values.uGroupCount,2),ur.Utils.updateBoundingSphere(this.renderObject.values,this.shape.geometry),ur.Utils.updateValues(this.renderObject.values,this.props),ur.Utils.updateRenderableState(this.renderObject.state,this.props),this.renderObject.state.visible=!0,this.scene.update(void 0,!1),this.scene.commit()}getData(){return{pointers:this.pointers,points:this.points,hit:this.hit,modelScale:this.modelScale,camera:this.camera,pixels:12}}};var ol=b();function Xo(s,e,t,r){let a=b.scale(ol,t.state.position,r),n=b.distance(s,a);return 2*Math.tan(t.state.fov/2)*n/t.viewport.height*e}function il(s,e){let t=Zr.createState(512,256,e),r=5e-4,a={radiusTop:r,radiusBottom:r,radialSegments:32},{modelScale:n,camera:i,pixels:l}=s;t.currentGroup=0;for(let m of s.pointers){Hi(t,m,.2,a);let d=Xo(m.origin,l,i,n);Cr(t,m.origin,d,1)}for(let m of s.points){let d=Xo(m,l,i,n);Cr(t,m,d,1)}if(s.hit){t.currentGroup=1;let m=Xo(s.hit,l,i,n);Cr(t,s.hit,m,1)}return Zr.getMesh(t)}function cn(s,e,t){let r=il(s,t?.geometry);return Fa("pointer-mesh",s,r,n=>n===1?e.hitColor:e.color,()=>1,()=>"",void 0,2)}function nl(s,e){return Ea(s,{...h.getDefaultValues(ur.Params),...e,ignoreLight:e.ignoreLight,cellSize:0})}var sl={camera:h.Group({helper:h.Group(Yr)}),handle:h.Group(Wa),pointer:h.Group(ba)},ll=h.getDefaultValues(sl),Qa=class{constructor(e,t,r={}){let a={...ll,...r};this.debug=new Ua(e,t),this.camera=new Ma(e,a.camera.helper),this.handle=new Ga(e,a.handle),this.pointer=new Xa(e,a.pointer)}};var Qo=b(),Ko=b(),dn=b(),_o={maxFps:h.Numeric(30,{min:10,max:60,step:10}),preferAtomPixelPadding:h.Numeric(3,{min:0,max:20,step:1},{description:"Number of extra pixels at which to prefer atoms over bonds."}),convertCoordsToRay:h.Boolean(!1,{description:"Convert screen coordinates to ray for picking."})},Ka=class{constructor(e,t,r,a,n,i,l={}){this.canvasIdentify=e;this.canvasAsyncIdentify=t;this.lociGetter=r;this.input=a;this.camera=n;this.controls=i;this.ev=hi.create();this.events={hover:this.ev(),drag:this.ev(),click:this.ev()};this.startX=-1;this.startY=-1;this.endX=-1;this.endY=-1;this.ray=void 0;this.pickData=void 0;this.position=void 0;this.isInteracting=!1;this.prevLoci=br.Loci.Empty;this.prevT=0;this.inside=!1;this.buttons=Ze.create(0);this.button=Ze.create(0);this.modifiers=Vt.None;this.props={...h.getDefaultValues(_o),...l},a.drag.subscribe(({x:m,y:d,buttons:u,button:c,modifiers:p})=>{this.isInteracting=!0,this.drag(m,d,u,c,p)}),a.move.subscribe(({x:m,y:d,inside:u,buttons:c,button:p,modifiers:g,onElement:x,ray:y})=>{if(!(!u||this.isInteracting)){if(!x){this.leave();return}this.move(m,d,c,p,g,y)}}),a.leave.subscribe(()=>{this.leave()}),a.click.subscribe(({x:m,y:d,buttons:u,button:c,modifiers:p,ray:g})=>{this.outsideViewport(m,d,g)||this.click(m,d,u,c,p,g)}),a.interactionEnd.subscribe(()=>{this.isInteracting=!1}),a.modifiers.subscribe(m=>{this.modify(m)})}setProps(e){Object.assign(this.props,e)}getTarget(){return this.ray?this.ray:this.props.convertCoordsToRay?this.camera.getRay(fr(),this.endX,this.input.height-this.endY):T.create(this.endX,this.endY)}handleMove(){(this.startX!==this.endX||this.startY!==this.endY||this.input.pointerLock&&!this.controls.isMoving)&&(this.pickData=this.canvasAsyncIdentify(this.getTarget()),this.startX=this.endX,this.startY=this.endY)}handleClick(){let e=this.canvasIdentify(this.getTarget()),t=this.getLoci(e?.id,e?.position);this.events.click.next({current:t,buttons:this.buttons,button:this.button,modifiers:this.modifiers,page:T.create(this.endX,this.endY),position:e?.position}),this.prevLoci=t}handleDrag(){(this.startX!==this.endX||this.startY!==this.endY||this.input.pointerLock&&!this.controls.isMoving)&&!this.outsideViewport(this.startX,this.startY,this.ray)&&(this.events.drag.next({current:this.prevLoci,buttons:this.buttons,button:this.button,modifiers:this.modifiers,pageStart:T.create(this.startX,this.startY),pageEnd:T.create(this.endX,this.endY)}),this.startX=this.endX,this.startY=this.endY)}tick(e){if(this.inside){if(this.pickData){let t=this.pickData.tryGet();if(t!=="pending"){if(this.position=t?.position,this.inside){let r=this.getLoci(t?.id,t?.position);this.events.hover.next({current:r,buttons:this.buttons,button:this.button,modifiers:this.modifiers,page:T.create(this.endX,this.endY),position:t?.position}),this.prevLoci=r}this.pickData=void 0}}e-this.prevT>1e3/this.props.maxFps&&(this.prevT=e,this.isInteracting?this.handleDrag():this.handleMove())}}leave(){this.inside=!1,br.Loci.isEmpty(this.prevLoci)||(this.prevLoci=br.Loci.Empty,this.events.hover.next({current:this.prevLoci,buttons:this.buttons,button:this.button,modifiers:this.modifiers}))}move(e,t,r,a,n,i){this.inside=!0,this.buttons=r,this.button=a,this.modifiers=n,this.ray=i,this.endX=e,this.endY=t}click(e,t,r,a,n,i){this.endX=e,this.endY=t,this.buttons=r,this.button=a,this.modifiers=n,this.ray=i,this.handleClick()}drag(e,t,r,a,n){this.endX=e,this.endY=t,this.buttons=r,this.button=a,this.modifiers=n,this.handleDrag()}modify(e){Vt.areEqual(e,this.modifiers)||(this.modifiers=e,this.events.hover.next({current:this.prevLoci,buttons:this.buttons,button:this.button,modifiers:this.modifiers,page:T.create(this.endX,this.endY),position:this.position}))}outsideViewport(e,t,r){if(r)return!1;let{input:a,camera:{viewport:n}}=this;return e*=a.pixelRatio,t*=a.pixelRatio,e>n.x+n.width||a.height-t>n.y+n.height||e<n.x||a.height-t<n.y}getLoci(e,t){let{repr:r,loci:a}=this.lociGetter(e);if(t&&r&&ko.isLoci(a)&&a.bonds.length===2){let{aUnit:n,aIndex:i}=a.bonds[0];n.conformation.position(n.elements[i],Qo),b.sub(dn,this.camera.state.position,this.camera.state.target),b.projectPointOnPlane(Ko,t,dn,Qo);let l=this.camera.getPixelSize(Ko),m=r.theme.size.size(a.bonds[0])*(r.props.sizeFactor??1);if(r.props.lineSizeAttenuation===!1&&(m*=l/2),m+=this.props.preferAtomPixelPadding*l,b.distance(Ko,Qo)<m)return{repr:r,loci:ko.toFirstStructureElementLoci(a)}}return{repr:r,loci:a}}resetTime(e){this.prevT=e}dispose(){this.ev.dispose()}};var _a;(t=>{t.Null=16777214;function e(r,a){return r.objectId===a.objectId&&r.instanceId===a.instanceId&&r.groupId===a.groupId}t.areSame=e})(_a||={});var mn={pickPadding:1,maxAsyncReadLag:5},ta=class{constructor(e,t,r,a){this.webgl=e;this.width=t;this.height=r;this.pickScale=a;let n=a/e.pixelRatio;this.pickWidth=Math.ceil(t*n),this.pickHeight=Math.ceil(r*n);let{resources:i,extensions:{drawBuffers:l},gl:m}=e;l?(this.objectPickTexture=i.texture("image-uint8","rgba","ubyte","nearest"),this.objectPickTexture.define(this.pickWidth,this.pickHeight),this.instancePickTexture=i.texture("image-uint8","rgba","ubyte","nearest"),this.instancePickTexture.define(this.pickWidth,this.pickHeight),this.groupPickTexture=i.texture("image-uint8","rgba","ubyte","nearest"),this.groupPickTexture.define(this.pickWidth,this.pickHeight),this.depthPickTexture=i.texture("image-uint8","rgba","ubyte","nearest"),this.depthPickTexture.define(this.pickWidth,this.pickHeight),this.framebuffer=i.framebuffer(),this.objectPickFramebuffer=i.framebuffer(),this.instancePickFramebuffer=i.framebuffer(),this.groupPickFramebuffer=i.framebuffer(),this.depthPickFramebuffer=i.framebuffer(),this.framebuffer.bind(),l.drawBuffers([l.COLOR_ATTACHMENT0,l.COLOR_ATTACHMENT1,l.COLOR_ATTACHMENT2,l.COLOR_ATTACHMENT3]),this.objectPickTexture.attachFramebuffer(this.framebuffer,"color0"),this.instancePickTexture.attachFramebuffer(this.framebuffer,"color1"),this.groupPickTexture.attachFramebuffer(this.framebuffer,"color2"),this.depthPickTexture.attachFramebuffer(this.framebuffer,"color3"),this.depthRenderbuffer=i.renderbuffer(Yt(m)?"depth32f-stencil8":"depth-stencil","depth-stencil",this.pickWidth,this.pickHeight),this.depthRenderbuffer.attachFramebuffer(this.framebuffer),this.objectPickTexture.attachFramebuffer(this.objectPickFramebuffer,"color0"),this.instancePickTexture.attachFramebuffer(this.instancePickFramebuffer,"color0"),this.groupPickTexture.attachFramebuffer(this.groupPickFramebuffer,"color0"),this.depthPickTexture.attachFramebuffer(this.depthPickFramebuffer,"color0")):(this.objectPickTarget=e.createRenderTarget(this.pickWidth,this.pickHeight,"depth-stencil"),this.instancePickTarget=e.createRenderTarget(this.pickWidth,this.pickHeight,"depth-stencil"),this.groupPickTarget=e.createRenderTarget(this.pickWidth,this.pickHeight,"depth-stencil"),this.depthPickTarget=e.createRenderTarget(this.pickWidth,this.pickHeight,"depth-stencil"))}getByteCount(){return this.webgl.extensions.drawBuffers?this.objectPickTexture.getByteCount()+this.instancePickTexture.getByteCount()+this.groupPickTexture.getByteCount()+this.depthPickTexture.getByteCount()+this.depthRenderbuffer.getByteCount():this.objectPickTarget.getByteCount()+this.instancePickTarget.getByteCount()+this.groupPickTarget.getByteCount()+this.depthPickTarget.getByteCount()}dispose(){this.webgl.extensions.drawBuffers?(this.framebuffer.destroy(),this.objectPickTexture.destroy(),this.instancePickTexture.destroy(),this.groupPickTexture.destroy(),this.depthPickTexture.destroy(),this.objectPickFramebuffer.destroy(),this.instancePickFramebuffer.destroy(),this.groupPickFramebuffer.destroy(),this.depthPickFramebuffer.destroy(),this.depthRenderbuffer.destroy()):(this.objectPickTarget.destroy(),this.instancePickTarget.destroy(),this.groupPickTarget.destroy(),this.depthPickTarget.destroy())}get pickRatio(){return this.pickScale/this.webgl.pixelRatio}setPickScale(e){this.pickScale=e,this.setSize(this.width,this.height)}bindObject(){this.webgl.extensions.drawBuffers?this.objectPickFramebuffer.bind():this.objectPickTarget.bind()}bindInstance(){this.webgl.extensions.drawBuffers?this.instancePickFramebuffer.bind():this.instancePickTarget.bind()}bindGroup(){this.webgl.extensions.drawBuffers?this.groupPickFramebuffer.bind():this.groupPickTarget.bind()}bindDepth(){this.webgl.extensions.drawBuffers?this.depthPickFramebuffer.bind():this.depthPickTarget.bind()}get drawingBufferHeight(){return this.height}setSize(e,t){this.width=e,this.height=t;let r=this.pickScale/this.webgl.pixelRatio,a=Math.ceil(this.width*r),n=Math.ceil(this.height*r);(a!==this.pickWidth||n!==this.pickHeight)&&(this.pickWidth=a,this.pickHeight=n,this.webgl.extensions.drawBuffers?(this.objectPickTexture.define(this.pickWidth,this.pickHeight),this.instancePickTexture.define(this.pickWidth,this.pickHeight),this.groupPickTexture.define(this.pickWidth,this.pickHeight),this.depthPickTexture.define(this.pickWidth,this.pickHeight),this.depthRenderbuffer.setSize(this.pickWidth,this.pickHeight)):(this.objectPickTarget.setSize(this.pickWidth,this.pickHeight),this.instancePickTarget.setSize(this.pickWidth,this.pickHeight),this.groupPickTarget.setSize(this.pickWidth,this.pickHeight),this.depthPickTarget.setSize(this.pickWidth,this.pickHeight)))}reset(){let{drawBuffers:e}=this.webgl.extensions;e&&(this.framebuffer.bind(),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1,e.COLOR_ATTACHMENT2,e.COLOR_ATTACHMENT3]),this.objectPickTexture.attachFramebuffer(this.framebuffer,"color0"),this.instancePickTexture.attachFramebuffer(this.framebuffer,"color1"),this.groupPickTexture.attachFramebuffer(this.framebuffer,"color2"),this.depthPickTexture.attachFramebuffer(this.framebuffer,"color3"),this.depthRenderbuffer.attachFramebuffer(this.framebuffer),this.objectPickTexture.attachFramebuffer(this.objectPickFramebuffer,"color0"),this.instancePickTexture.attachFramebuffer(this.instancePickFramebuffer,"color0"),this.groupPickTexture.attachFramebuffer(this.groupPickFramebuffer,"color0"),this.depthPickTexture.attachFramebuffer(this.depthPickFramebuffer,"color0"))}renderVariant(e,t,r,a,n,i,l){e.clear(!1),e.update(t,r,l),e.renderPick(r.primitives,t,n,i),a.handle.isEnabled&&e.renderPick(a.handle.scene,t,n,i),a.camera.isEnabled&&(a.camera.update(t),e.update(a.camera.camera,a.camera.scene,l),e.renderPick(a.camera.scene,a.camera.camera,n,i))}render(e,t,r,a,n){this.webgl.extensions.drawBuffers?(this.framebuffer.bind(),this.renderVariant(e,t,r,a,"pick",0,n)):(this.objectPickTarget.bind(),this.renderVariant(e,t,r,a,"pick",1,n),this.instancePickTarget.bind(),this.renderVariant(e,t,r,a,"pick",2,n),this.groupPickTarget.bind(),this.renderVariant(e,t,r,a,"pick",3,n),this.depthPickTarget.bind(),this.renderVariant(e,t,r,a,"depth",0,n))}},pn=!1;function Za(s){return s.isWebGL2?!0:(Oe&&!pn&&(console.log("WebGL2 required for async picking. Falling back to synchronous picking."),pn=!0),!1)}var ra=class{constructor(e,t,r=5){this.webgl=e;this.pickPass=t;this.maxAsyncReadLag=r;this.viewport=Me.create(0,0,0,0);this.fenceSync=null;this.fenceTimestamp=0;this.ready=!1;this.lag=0;e.isWebGL2&&(this.objectBuffer=e.resources.pixelPack("rgba","ubyte"),this.instanceBuffer=e.resources.pixelPack("rgba","ubyte"),this.groupBuffer=e.resources.pixelPack("rgba","ubyte"),this.depthBuffer=e.resources.pixelPack("rgba","ubyte")),this.setup()}setup(){let e=this.viewport.width*this.viewport.height*4;(!this.object||this.object.length!==e)&&(this.object=new Uint8Array(e),this.instance=new Uint8Array(e),this.group=new Uint8Array(e),this.depth=new Uint8Array(e))}setViewport(e,t,r,a){Me.set(this.viewport,e,t,r,a),this.setup()}read(){k&&this.webgl.timer.mark("PickBuffers.read");let{x:e,y:t,width:r,height:a}=this.viewport;this.pickPass.bindObject(),this.webgl.readPixels(e,t,r,a,this.object),this.pickPass.bindInstance(),this.webgl.readPixels(e,t,r,a,this.instance),this.pickPass.bindGroup(),this.webgl.readPixels(e,t,r,a,this.group),this.pickPass.bindDepth(),this.webgl.readPixels(e,t,r,a,this.depth),this.ready=!0,k&&this.webgl.timer.markEnd("PickBuffers.read")}asyncRead(){let{gl:e}=this.webgl;if(!Yt(e))return;k&&this.webgl.timer.mark("PickBuffers.asyncRead"),this.fenceSync!==null&&e.deleteSync(this.fenceSync);let{x:t,y:r,width:a,height:n}=this.viewport;this.pickPass.bindObject(),this.objectBuffer.read(t,r,a,n),this.pickPass.bindInstance(),this.instanceBuffer.read(t,r,a,n),this.pickPass.bindGroup(),this.groupBuffer.read(t,r,a,n),this.pickPass.bindDepth(),this.depthBuffer.read(t,r,a,n),this.fenceTimestamp=_t(),this.fenceSync=e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0),e.flush(),this.ready=!1,k&&this.webgl.timer.markEnd("PickBuffers.asyncRead")}check(){if(this.ready)return 1;if(this.fenceSync===null)return 2;let{gl:e}=this.webgl;if(!Yt(e))return 2;let t=e.clientWaitSync(this.fenceSync,0,0);return t===e.WAIT_FAILED||this.lag>=this.maxAsyncReadLag?t!==e.WAIT_FAILED&&_t()-this.fenceTimestamp<1e3/60?(this.lag+=1,0):(e.deleteSync(this.fenceSync),this.fenceSync=null,this.lag=0,this.ready=!1,2):t===e.TIMEOUT_EXPIRED?(this.lag+=1,0):(this.objectBuffer.getSubData(this.object),this.instanceBuffer.getSubData(this.instance),this.groupBuffer.getSubData(this.group),this.depthBuffer.getSubData(this.depth),e.deleteSync(this.fenceSync),this.fenceSync=null,this.lag=0,this.ready=!0,1)}getIdx(e,t){return(t*this.viewport.width+e)*4}getDepth(e,t){if(!this.ready)return-1;let r=this.getIdx(e,t),a=this.depth;return Ii(a[r],a[r+1],a[r+2],a[r+3])}getId(e,t,r){if(!this.ready)return-1;let a=this.getIdx(e,t);return Oi(r[a],r[a+1],r[a+2])}getObjectId(e,t){return this.getId(e,t,this.object)}getInstanceId(e,t){return this.getId(e,t,this.instance)}getGroupId(e,t){return this.getId(e,t,this.group)}getPickingId(e,t){let r=this.getObjectId(e,t);if(r===-1||r===_a.Null)return;let a=this.getInstanceId(e,t);if(a===-1||a===_a.Null)return;let n=this.getGroupId(e,t);if(n!==-1)return{objectId:r,instanceId:a,groupId:n}}reset(){this.fenceSync=null,this.ready=!1,this.lag=0,this.fenceTimestamp=0}dispose(){let{gl:e}=this.webgl;Yt(e)&&(this.objectBuffer.destroy(),this.instanceBuffer.destroy(),this.groupBuffer.destroy(),this.depthBuffer.destroy(),this.fenceSync!==null&&(e.deleteSync(this.fenceSync),this.fenceSync=null))}};var Ya=class{constructor(e,t,r,a,n,i,l){this.webgl=e;this.renderer=t;this.scene=r;this.helper=a;this.pickPass=n;this.dirty=!0;this.buffers=new ra(this.webgl,this.pickPass);this.viewport=Me();this.setViewport(i.x,i.y,i.width,i.height),this.pickPadding=l.pickPadding,Za(e)||(this.asyncIdentify=(m,d,u,c)=>({tryGet:()=>this.identify(m,d,u,c)}))}setViewport(e,t,r,a){Me.set(this.viewport,e,t,r,a),this.update()}setPickPadding(e){this.pickPadding!==e&&(this.pickPadding=e,this.update())}update(){let{x:e,y:t,width:r,height:a}=this.viewport;this.pickRatio=this.pickPass.pickRatio,this.pickX=Math.ceil(e*this.pickRatio),this.pickY=Math.ceil(t*this.pickRatio);let n=Math.floor(r*this.pickRatio),i=Math.floor(a*this.pickRatio);(n!==this.pickWidth||i!==this.pickHeight)&&(this.pickWidth=n,this.pickHeight=i,this.halfPickWidth=Math.floor(this.pickWidth/2),this.buffers.setViewport(this.pickX,this.pickY,this.pickWidth,this.pickHeight)),this.spiral=Ca(Math.ceil(this.pickRatio*this.pickPadding)),this.dirty=!0}render(e,t){k&&this.webgl.timer.mark("PickHelper.render",{captureStats:!0});let{pickX:r,pickY:a,pickWidth:n,pickHeight:i,halfPickWidth:l}=this,{renderer:m,scene:d,helper:u}=this,c=t??Zt();m.setTransparentBackground(!1),m.setDrawingBufferSize(n,i),m.setPixelRatio(this.pickRatio),Tt.is(e)?(m.setViewport(r,a,l,i),this.pickPass.render(m,e.left,d,u,c),m.setViewport(r+l,a,n-l,i),this.pickPass.render(m,e.right,d,u,c)):(m.setViewport(r,a,n,i),this.pickPass.render(m,e,d,u,c)),this.dirty=!1,k&&this.webgl.timer.markEnd("PickHelper.render")}identifyInternal(e,t,r){if(this.webgl.isContextLost)return;let{webgl:a,pickRatio:n}=this;if(a.isContextLost)return;e*=a.pixelRatio,t*=a.pixelRatio,t=this.pickPass.drawingBufferHeight-t;let{viewport:i}=this;if(e<i.x||t<i.y||e>i.x+i.width||t>i.y+i.height)return;let l=e-i.x,m=t-i.y,d=Math.floor(l*n),u=Math.floor(m*n),c=this.buffers.getPickingId(d,u);if(c===void 0)return;let p=this.buffers.getDepth(d,u),g=b.create(e,t,p);if(Tt.is(r)){let x=Math.floor(i.width/2);e>i.x+x?(g[0]=i.x+(l-x)*2,Lr(g,g,i,r.right.inverseProjectionView)):(g[0]=i.x+l*2,Lr(g,g,i,r.left.inverseProjectionView))}else Lr(g,g,i,r.inverseProjectionView);return{id:c,position:g}}prepare(){this.pickRatio!==this.pickPass.pickRatio&&this.update()}getPickData(e,t,r){for(let a of this.spiral){let n=this.identifyInternal(e+a[0],t+a[1],r);if(n)return n}}identify(e,t,r,a){return this.prepare(),this.dirty&&(k&&this.webgl.timer.mark("PickHelper.identify"),this.webgl.resources.finalizePrograms(["pick"],!0),this.render(r,a),this.buffers.read(),k&&this.webgl.timer.markEnd("PickHelper.identify")),this.getPickData(e,t,r)}asyncIdentify(e,t,r,a){return this.prepare(),this.dirty&&(k&&this.webgl.timer.mark("PickHelper.asyncIdentify"),this.render(r,a),this.buffers.asyncRead(),k&&this.webgl.timer.markEnd("PickHelper.asyncIdentify")),{tryGet:()=>{let n=this.buffers.check();if(n===1)return this.getPickData(e,t,r);if(n===0)return"pending";n===2&&(this.dirty=!0)}}}reset(){this.buffers.reset(),this.dirty=!0}dispose(){this.buffers.dispose()}};var Ja=class{constructor(e,t,r,a,n){this.webgl=e;this.renderer=t;this.scene=r;this.helper=a;this.viewport=Me();this.sphere=ot();let i=n.pickPadding*2+1;this.camera=new _e,this.pickPass=new ta(e,i,i,1),this.buffers=new ra(this.webgl,this.pickPass,n.maxAsyncReadLag),this.pickPadding=n.pickPadding,this.update(),Za(e)||(this.asyncIdentify=(l,m)=>({tryGet:()=>this.identify(l,m)}))}setPickPadding(e){this.pickPadding!==e&&(this.pickPadding=e,this.update())}update(){let e=this.pickPadding*2+1;Me.set(this.viewport,0,0,e,e),this.buffers.setViewport(0,0,e,e),this.spiral=Ca(this.pickPadding),this.size=e,this.pickPass.setSize(e,e)}render(e){k&&this.webgl.timer.mark("RayHelper.render",{captureStats:!0});let{renderer:t,scene:r,helper:a}=this;t.setTransparentBackground(!1),t.setDrawingBufferSize(this.size,this.size),t.setPixelRatio(1),t.setViewport(0,0,this.size,this.size),this.pickPass.render(t,e,r,a,Zt()),k&&this.webgl.timer.markEnd("RayHelper.render")}identifyInternal(e,t){if(this.webgl.isContextLost)return;let{viewport:r}=this,a=this.buffers.getPickingId(e,t);if(a===void 0)return;let n=this.buffers.getDepth(e,t),i=b.create(e,t,n);return Lr(i,i,r,this.camera.inverseProjectionView),{id:a,position:i}}prepare(e,t){this.camera.far=t.far,this.camera.near=t.near,this.camera.fogFar=t.fogFar,this.camera.fogNear=t.fogNear,this.camera.forceFull=t.forceFull,this.camera.scale=t.scale,Me.copy(this.camera.viewport,this.viewport),_e.copySnapshot(this.camera.state,{...t.state,mode:"orthographic"}),cl(this.camera,e,t.up),V.mul(this.camera.projectionView,this.camera.projection,this.camera.view),V.tryInvert(this.camera.inverseProjectionView,this.camera.projectionView),V.copy(this.camera.viewEye,t.view)}getPickData(){let e=this.pickPadding;for(let t of this.spiral){let r=this.identifyInternal(e+t[0],e+t[1]);if(r)return r}}intersectsScene(e,t){return ot.scaleNX(this.sphere,this.scene.boundingSphereVisible,t),fr.isInsideSphere3D(e,this.sphere)||fr.isIntersectingSphere3D(e,this.sphere)}identify(e,t){if(this.intersectsScene(e,t.scale))return this.prepare(e,t),k&&this.webgl.timer.mark("RayHelper.identify"),this.render(this.camera),this.buffers.read(),k&&this.webgl.timer.markEnd("RayHelper.identify"),this.getPickData()}asyncIdentify(e,t){if(this.intersectsScene(e,t.scale))return this.prepare(e,t),k&&this.webgl.timer.mark("RayHelper.asyncIdentify"),this.render(this.camera),this.buffers.asyncRead(),k&&this.webgl.timer.markEnd("RayHelper.asyncIdentify"),{tryGet:()=>{let r=this.buffers.check();if(r===1)return this.getPickData();if(r===0)return"pending"}}}reset(){this.buffers.reset(),this.pickPass.reset()}dispose(){this.buffers.dispose(),this.pickPass.dispose()}};function cl(s,e,t){let{near:r,far:a,viewport:n}=s,i=2*Math.tan(Et(.1)/2)*b.distance(s.position,s.target)*s.scale,l=n.height/i,m=-n.width/2,d=n.width/2,u=n.height/2,c=-n.height/2,p=(d-m)/(2*l),g=(u-c)/(2*l),x=(d+m)/2,y=(u+c)/2,S=x-p,P=x+p,D=y+g,A=y-g;V.ortho(s.projection,S,P,D,A,r,a);let M=b.normalize(b(),e.direction),q=Ke.fromUnitVec3(Ke(),M,b.negUnitZ);Ke.invert(q,q);let N=b.clone(e.origin),L=b.add(b(),N,M);V.lookAt(s.view,N,L,t)}var fn=`
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
`;var hn=`
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
`;var gn=`
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
`;var Zo=5,bn={strength:h.Numeric(1,{min:0,max:3,step:.1}),radius:h.Numeric(0,{min:0,max:1,step:.01}),threshold:h.Numeric(0,{min:0,max:1,step:.01},{description:"Luminosity threshold",hideIf:s=>s.mode==="emissive"}),mode:h.Select("emissive",[["luminosity","Luminosity"],["emissive","Emissive"]]),transparency:h.Boolean(!0,{description:"Include transparent objects in emissive bloom",hideIf:s=>s.mode!=="emissive"})},Lt=class{constructor(e,t,r){this.webgl=e;this.horizontalBlurTargets=[];this.verticalBlurTargets=[];this.emissiveTarget=e.createRenderTarget(t,r,"depth-stencil","uint8","linear"),this.luminosityTarget=e.createRenderTarget(t,r,"none","uint8","linear"),this.compositeTarget=e.createRenderTarget(t,r,"none","uint8","linear");let a=Math.round(t/2),n=Math.round(r/2);for(let l=0;l<Zo;++l)this.horizontalBlurTargets[l]=e.createRenderTarget(a,n,"none","uint8","linear"),this.verticalBlurTargets[l]=e.createRenderTarget(a,n,"none","uint8","linear"),a=Math.round(a/2),n=Math.round(n/2);let i=Tr();this.luminosityRenderable=ml(e,i,i,i,i,i),this.blurRenderable=xl(e,i),this.compositeRenderable=Cl(e,t,r,this.verticalBlurTargets[0].texture,this.verticalBlurTargets[1].texture,this.verticalBlurTargets[2].texture,this.verticalBlurTargets[3].texture,this.verticalBlurTargets[4].texture)}static isEnabled(e){return e.enabled&&e.bloom.name==="on"}getByteCount(){return this.emissiveTarget.getByteCount()+this.luminosityTarget.getByteCount()+this.compositeTarget.getByteCount()+this.horizontalBlurTargets.reduce((e,t)=>e+t.getByteCount(),0)+this.verticalBlurTargets.reduce((e,t)=>e+t.getByteCount(),0)}setSize(e,t){let r=this.luminosityTarget.getWidth(),a=this.luminosityTarget.getHeight();if(e!==r||t!==a){this.emissiveTarget.setSize(e,t),this.luminosityTarget.setSize(e,t),this.compositeTarget.setSize(e,t);let n=Math.round(e/2),i=Math.round(t/2);for(let l=0;l<Zo;++l)this.horizontalBlurTargets[l].setSize(n,i),this.verticalBlurTargets[l].setSize(n,i),n=Math.round(n/2),i=Math.round(i/2);o.update(this.luminosityRenderable.values.uTexSizeInv,T.set(this.luminosityRenderable.values.uTexSizeInv.ref.value,1/e,1/t)),o.update(this.compositeRenderable.values.uTexSizeInv,T.set(this.compositeRenderable.values.uTexSizeInv.ref.value,1/e,1/t))}}update(e,t,r,a,n,i,l,m){let d=!1;this.luminosityRenderable.values.tColorOpaque.ref.value!==e&&(o.update(this.luminosityRenderable.values.tColorOpaque,e),d=!0),this.luminosityRenderable.values.tColorTransparent.ref.value!==t&&(o.update(this.luminosityRenderable.values.tColorTransparent,t),d=!0),this.luminosityRenderable.values.tEmissive.ref.value!==r&&(o.update(this.luminosityRenderable.values.tEmissive,r),d=!0),this.luminosityRenderable.values.tDepthOpaque.ref.value!==a&&(o.update(this.luminosityRenderable.values.tDepthOpaque,a),d=!0),this.luminosityRenderable.values.tDepthTransparent.ref.value!==n&&(o.update(this.luminosityRenderable.values.tDepthTransparent,n),d=!0),this.luminosityRenderable.values.dMode.ref.value!==i.mode&&(o.update(this.luminosityRenderable.values.dMode,i.mode),d=!0),o.updateIfChanged(this.luminosityRenderable.values.uLuminosityThreshold,i.threshold),o.updateIfChanged(this.luminosityRenderable.values.uNear,l.near),o.updateIfChanged(this.luminosityRenderable.values.uFar,l.far),o.updateIfChanged(this.luminosityRenderable.values.uIsOrtho,l.state.mode==="orthographic"?1:0),o.updateIfChanged(this.luminosityRenderable.values.uFogNear,l.fogNear),o.updateIfChanged(this.luminosityRenderable.values.uFogFar,l.fogFar),o.updateIfChanged(this.luminosityRenderable.values.uOpaqueFogged,m),d&&this.luminosityRenderable.update(),o.updateIfChanged(this.compositeRenderable.values.uBloomRadius,i.radius),o.updateIfChanged(this.compositeRenderable.values.uBloomStrength,i.strength)}render(e){k&&this.webgl.timer.mark("BloomPass.render");let{gl:t,state:r}=this.webgl,{x:a,y:n,width:i,height:l}=e;r.viewport(a,n,i,l),r.scissor(a,n,i,l),r.enable(t.SCISSOR_TEST),r.disable(t.BLEND),r.disable(t.DEPTH_TEST),r.depthMask(!1),this.luminosityTarget.bind(),this.luminosityRenderable.render();for(let m=0;m<Zo;++m){let d=this.horizontalBlurTargets[m].getWidth(),u=this.horizontalBlurTargets[m].getHeight();r.viewport(0,0,d,u),r.scissor(0,0,d,u),o.update(this.blurRenderable.values.dKernelRadius,Yo[m]),o.update(this.blurRenderable.values.uGaussianCoefficients,hl(Yo[m])),o.update(this.blurRenderable.values.uTexSizeInv,T.set(this.blurRenderable.values.uTexSizeInv.ref.value,1/d,1/u)),this.horizontalBlurTargets[m].bind(),o.update(this.blurRenderable.values.tInput,m===0?this.luminosityTarget.texture:this.verticalBlurTargets[m-1].texture),o.update(this.blurRenderable.values.uDirection,gl),this.blurRenderable.update(),this.blurRenderable.render(),this.verticalBlurTargets[m].bind(),o.update(this.blurRenderable.values.tInput,this.horizontalBlurTargets[m].texture),o.update(this.blurRenderable.values.uDirection,bl),this.blurRenderable.update(),this.blurRenderable.render()}r.viewport(a,n,i,l),r.scissor(a,n,i,l),this.compositeTarget.bind(),this.compositeRenderable.update(),this.compositeRenderable.render(),k&&this.webgl.timer.markEnd("BloomPass.render")}},dl={...De,tColorOpaque:K("texture","rgba","ubyte","linear"),tColorTransparent:K("texture","rgba","ubyte","linear"),tEmissive:K("texture","rgba","ubyte","linear"),tDepthOpaque:K("texture","rgba","ubyte","nearest"),tDepthTransparent:K("texture","rgba","ubyte","nearest"),uTexSizeInv:C("v2"),uDefaultColor:C("v3"),uDefaultOpacity:C("f"),uLuminosityThreshold:C("f"),uSmoothWidth:C("f"),uNear:C("f"),uFar:C("f"),uIsOrtho:C("f"),uFogNear:C("f"),uFogFar:C("f"),uOpaqueFogged:C("b"),dMode:ie("string",["luminosity","emissive"])},pl=Se("Bloom Luminosity",Fe,hn);function ml(s,e,t,r,a,n){let i=e.getWidth(),l=e.getHeight(),m={...ke,tColorOpaque:o.create(e),tColorTransparent:o.create(t),tEmissive:o.create(r),tDepthOpaque:o.create(a),tDepthTransparent:o.create(n),uTexSizeInv:o.create(T.create(1/i,1/l)),uDefaultColor:o.create(b()),uDefaultOpacity:o.create(0),uLuminosityThreshold:o.create(0),uSmoothWidth:o.create(1),uNear:o.create(1),uFar:o.create(1e4),uIsOrtho:o.create(0),uFogNear:o.create(1e4),uFogFar:o.create(1e4),uOpaqueFogged:o.create(!0),dMode:o.create("emissive")},d={...dl},u=Ce(s,"triangles",pl,d,m);return Te(u,m)}function fl(s){let e=[];for(let t=0;t<s;++t)e.push(.39894*Math.exp(-.5*t*t/(s*s))/s);return e}var hl=bi(fl),Yo=[3,5,7,9,11],gl=T.create(1,0),bl=T.create(0,1),yl={...De,tInput:K("texture","rgba","ubyte","linear"),uTexSizeInv:C("v2"),uDirection:C("v2"),uGaussianCoefficients:C("f[]"),dKernelRadius:ie("number")},vl=Se("Bloom Blur",Fe,gn);function xl(s,e){let t=e.getWidth(),r=e.getHeight(),a={...ke,tInput:o.create(e),uTexSizeInv:o.create(T.create(1/t,1/r)),uDirection:o.create(T()),uGaussianCoefficients:o.create([]),dKernelRadius:o.create(Yo[0])},n={...yl},i=Ce(s,"triangles",vl,n,a);return Te(i,a)}var Tl={...De,tBlur1:K("texture","rgba","ubyte","linear"),tBlur2:K("texture","rgba","ubyte","linear"),tBlur3:K("texture","rgba","ubyte","linear"),tBlur4:K("texture","rgba","ubyte","linear"),tBlur5:K("texture","rgba","ubyte","linear"),uTexSizeInv:C("v2"),uBloomStrength:C("f"),uBloomRadius:C("f"),uBloomFactors:C("f[]"),uBloomTints:C("v3[]")},Sl=Se("Bloom Composite",Fe,fn);function Cl(s,e,t,r,a,n,i,l){let m={...ke,uTexSizeInv:o.create(T.create(1/e,1/t)),tBlur1:o.create(r),tBlur2:o.create(a),tBlur3:o.create(n),tBlur4:o.create(i),tBlur5:o.create(l),uBloomStrength:o.create(1),uBloomRadius:o.create(0),uBloomFactors:o.create([1,.8,.6,.4,.2]),uBloomTints:o.create(new Array(15).fill(1))},d={...Tl},u=Ce(s,"triangles",Sl,d,m);return Te(u,m)}var yn=`
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
`;var vn=`
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
`;var xn=`
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
`;var Tn={edgeThresholdMin:h.Numeric(.0312,{min:.0312,max:.0833,step:1e-4},{description:"Trims the algorithm from processing darks."}),edgeThresholdMax:h.Numeric(.063,{min:.063,max:.333,step:.001},{description:"The minimum amount of local contrast required to apply algorithm."}),iterations:h.Numeric(12,{min:0,max:16,step:1},{description:"Number of edge exploration steps."}),subpixelQuality:h.Numeric(.3,{min:0,max:1,step:.01},{description:"Choose the amount of sub-pixel aliasing removal."})},$a=class{constructor(e,t){this.webgl=e;this.renderable=Dl(e,t)}updateState(e){let{gl:t,state:r}=this.webgl;r.enable(t.SCISSOR_TEST),r.disable(t.BLEND),r.disable(t.DEPTH_TEST),r.depthMask(!1);let{x:a,y:n,width:i,height:l}=e;r.viewport(a,n,i,l),r.scissor(a,n,i,l),r.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT)}setSize(e,t){o.update(this.renderable.values.uTexSizeInv,T.set(this.renderable.values.uTexSizeInv.ref.value,1/e,1/t))}update(e,t){let{values:r}=this.renderable,{edgeThresholdMin:a,edgeThresholdMax:n,iterations:i,subpixelQuality:l}=t,m=!1;r.tColor.ref.value!==e&&(o.update(this.renderable.values.tColor,e),m=!0),r.dEdgeThresholdMin.ref.value!==a&&(m=!0),o.updateIfChanged(r.dEdgeThresholdMin,a),r.dEdgeThresholdMax.ref.value!==n&&(m=!0),o.updateIfChanged(r.dEdgeThresholdMax,n),r.dIterations.ref.value!==i&&(m=!0),o.updateIfChanged(r.dIterations,i),r.dSubpixelQuality.ref.value!==l&&(m=!0),o.updateIfChanged(r.dSubpixelQuality,l),m&&this.renderable.update()}render(e,t){k&&this.webgl.timer.mark("FxaaPass.render"),t?t.bind():this.webgl.bindDrawingBuffer(),this.updateState(e),this.renderable.render(),k&&this.webgl.timer.markEnd("FxaaPass.render")}},Pl={...De,tColor:K("texture","rgba","ubyte","linear"),uTexSizeInv:C("v2"),dEdgeThresholdMin:ie("number"),dEdgeThresholdMax:ie("number"),dIterations:ie("number"),dSubpixelQuality:ie("number")},wl=Se("fxaa",Fe,xn);function Dl(s,e){let t=e.getWidth(),r=e.getHeight(),a={...ke,tColor:o.create(e),uTexSizeInv:o.create(T.create(1/t,1/r)),dEdgeThresholdMin:o.create(.0312),dEdgeThresholdMax:o.create(.125),dIterations:o.create(12),dSubpixelQuality:o.create(.3)},n={...Pl},i=Ce(s,"triangles",wl,n,a);return Te(i,a)}var Sn=`
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
`;var Cn=`
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
`;var Pn=`
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
`;var wn=`
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
`;var Dn=`
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
`;var kn=`
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
`;var Rn={edgeThreshold:h.Numeric(.1,{min:.05,max:.15,step:.01}),maxSearchSteps:h.Numeric(16,{min:0,max:32,step:1})},eo=class{constructor(e,t){this.webgl=e;this._supported=!1;if(typeof HTMLImageElement>"u"){Oe&&console.log('Missing "HTMLImageElement" required for "SMAA"');return}let r=t.getWidth(),a=t.getHeight();this.edgesTarget=e.createRenderTarget(r,a,"none","uint8","linear"),this.weightsTarget=e.createRenderTarget(r,a,"none","uint8","linear"),this.edgesRenderable=El(e,t),this.weightsRenderable=Ml(e,this.edgesTarget.texture),this.blendRenderable=Il(e,t,this.weightsTarget.texture),this._supported=!0}get supported(){return this._supported}getByteCount(){return this.supported?this.edgesTarget.getByteCount()+this.weightsTarget.getByteCount():0}updateState(e){let{gl:t,state:r}=this.webgl;r.enable(t.SCISSOR_TEST),r.disable(t.BLEND),r.disable(t.DEPTH_TEST),r.depthMask(!1);let{x:a,y:n,width:i,height:l}=e;r.viewport(a,n,i,l),r.scissor(a,n,i,l),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT),o.update(this.edgesRenderable.values.uViewport,Me.toVec4(this.edgesRenderable.values.uViewport.ref.value,e)),o.update(this.weightsRenderable.values.uViewport,Me.toVec4(this.weightsRenderable.values.uViewport.ref.value,e)),o.update(this.blendRenderable.values.uViewport,Me.toVec4(this.blendRenderable.values.uViewport.ref.value,e))}setSize(e,t){let r=this.edgesTarget.getWidth(),a=this.edgesTarget.getHeight();(e!==r||t!==a)&&(this.edgesTarget.setSize(e,t),this.weightsTarget.setSize(e,t),o.update(this.edgesRenderable.values.uTexSizeInv,T.set(this.edgesRenderable.values.uTexSizeInv.ref.value,1/e,1/t)),o.update(this.weightsRenderable.values.uTexSizeInv,T.set(this.weightsRenderable.values.uTexSizeInv.ref.value,1/e,1/t)),o.update(this.blendRenderable.values.uTexSizeInv,T.set(this.blendRenderable.values.uTexSizeInv.ref.value,1/e,1/t)))}update(e,t){let r=!1;this.edgesRenderable.values.tColor.ref.value!==e&&(o.update(this.edgesRenderable.values.tColor,e),r=!0),this.edgesRenderable.values.dEdgeThreshold.ref.value!==t.edgeThreshold&&(o.update(this.edgesRenderable.values.dEdgeThreshold,t.edgeThreshold),r=!0),r&&this.edgesRenderable.update(),this.weightsRenderable.values.dMaxSearchSteps.ref.value!==t.maxSearchSteps&&(o.update(this.weightsRenderable.values.dMaxSearchSteps,t.maxSearchSteps),this.weightsRenderable.update()),this.blendRenderable.values.tColor.ref.value!==e&&(o.update(this.blendRenderable.values.tColor,e),this.blendRenderable.update())}render(e,t){k&&this.webgl.timer.mark("SmaaPass.render"),this.edgesTarget.bind(),this.updateState(e),this.edgesRenderable.render(),this.weightsTarget.bind(),this.updateState(e),this.weightsRenderable.render(),t?t.bind():this.webgl.bindDrawingBuffer(),this.updateState(e),this.blendRenderable.render(),k&&this.webgl.timer.markEnd("SmaaPass.render")}},kl={...De,tColor:K("texture","rgba","ubyte","linear"),uTexSizeInv:C("v2"),uViewport:C("v4"),dEdgeThreshold:ie("number")},Rl=Se("smaa-edges",Dn,kn);function El(s,e){let t=e.getWidth(),r=e.getHeight(),a={...ke,tColor:o.create(e),uTexSizeInv:o.create(T.create(1/t,1/r)),uViewport:o.create(Ne()),dEdgeThreshold:o.create(.1)},n={...kl},i=Ce(s,"triangles",Rl,n,a);return Te(i,a)}var Fl={...De,tEdges:K("texture","rgba","ubyte","linear"),tArea:K("texture","rgb","ubyte","linear"),tSearch:K("texture","rgba","ubyte","nearest"),uTexSizeInv:C("v2"),uViewport:C("v4"),dMaxSearchSteps:ie("number")},Bl=Se("smaa-weights",Pn,wn);function Ml(s,e){let t=e.getWidth(),r=e.getHeight(),a=s.resources.texture("image-uint8","rgb","ubyte","linear"),n=s.resources.texture("image-uint8","rgba","ubyte","nearest"),i={...ke,tEdges:o.create(e),tArea:o.create(a),tSearch:o.create(n),uTexSizeInv:o.create(T.create(1/t,1/r)),uViewport:o.create(Ne()),dMaxSearchSteps:o.create(16)};wo(Al(),i.tArea,a),wo(zl(),i.tSearch,n);let l={...Fl},m=Ce(s,"triangles",Bl,l,i);return Te(m,i)}var Ll={...De,tColor:K("texture","rgba","ubyte","linear"),tWeights:K("texture","rgba","ubyte","linear"),uTexSizeInv:C("v2"),uViewport:C("v4")},Ol=Se("smaa-blend",Sn,Cn);function Il(s,e,t){let r=e.getWidth(),a=e.getHeight(),n={...ke,tColor:o.create(e),tWeights:o.create(t),uTexSizeInv:o.create(T.create(1/r,1/a)),uViewport:o.create(Ne())},i={...Ll},l=Ce(s,"triangles",Ol,i,n);return Te(l,n)}function Al(){return"data:image/png;base64,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"}function zl(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}var En=`
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
`;var Fn=`
precision mediump float;

attribute vec2 aPosition;

varying vec4 vPosition;

void main() {
    vPosition = vec4(aPosition, 1.0, 1.0);
    gl_Position = vec4(aPosition, 1.0, 1.0);
}
`;var In={opacity:h.Numeric(1,{min:0,max:1,step:.01}),saturation:h.Numeric(0,{min:-1,max:1,step:.01}),lightness:h.Numeric(0,{min:-1,max:1,step:.01})},Vl={faces:h.MappedStatic("urls",{urls:h.Group({nx:h.Text("",{label:"Negative X / Left"}),ny:h.Text("",{label:"Negative Y / Bottom"}),nz:h.Text("",{label:"Negative Z / Back"}),px:h.Text("",{label:"Positive X / Right"}),py:h.Text("",{label:"Positive Y / Top"}),pz:h.Text("",{label:"Positive Z / Front"})},{isExpanded:!0,label:"URLs"}),files:h.Group({nx:h.File({label:"Negative X / Left",accept:"image/*"}),ny:h.File({label:"Negative Y / Bottom",accept:"image/*"}),nz:h.File({label:"Negative Z / Back",accept:"image/*"}),px:h.File({label:"Positive X / Right",accept:"image/*"}),py:h.File({label:"Positive Y / Top",accept:"image/*"}),pz:h.File({label:"Positive Z / Front",accept:"image/*"})},{isExpanded:!0,label:"Files"})}),blur:h.Numeric(0,{min:0,max:1,step:.01},{description:'Note, this only works in WebGL2 or when "EXT_shader_texture_lod" is available.'}),rotation:h.Group({x:h.Numeric(0,{min:0,max:360,step:1},{immediateUpdate:!0}),y:h.Numeric(0,{min:0,max:360,step:1},{immediateUpdate:!0}),z:h.Numeric(0,{min:0,max:360,step:1},{immediateUpdate:!0})}),...In},Nl={source:h.MappedStatic("url",{url:h.Text(""),file:h.File({accept:"image/*"})}),blur:h.Numeric(0,{min:0,max:1,step:.01},{description:'Note, this only works in WebGL2 or with power-of-two images and when "EXT_shader_texture_lod" is available.'}),...In,coverage:h.Select("viewport",h.arrayToOptions(["viewport","canvas"]))},Hl={topColor:h.Color(14540253),bottomColor:h.Color(15658734),ratio:h.Numeric(.5,{min:0,max:1,step:.01}),coverage:h.Select("viewport",h.arrayToOptions(["viewport","canvas"]))},ql={centerColor:h.Color(14540253),edgeColor:h.Color(15658734),ratio:h.Numeric(.5,{min:0,max:1,step:.01}),coverage:h.Select("viewport",h.arrayToOptions(["viewport","canvas"]))},An={variant:h.MappedStatic("off",{off:h.EmptyGroup(),skybox:h.Group(Vl,{isExpanded:!0}),image:h.Group(Nl,{isExpanded:!0}),horizontalGradient:h.Group(Hl,{isExpanded:!0}),radialGradient:h.Group(ql,{isExpanded:!0})},{label:"Environment"})},to=class{constructor(e,t,r,a){this.webgl=e;this.assetManager=t;this.camera=new _e;this.target=b();this.position=b();this.dir=b();this.bgColor=b();this.renderable=Zl(e,r,a)}setSize(e,t){let[r,a]=this.renderable.values.uTexSize.ref.value;(e!==r||t!==a)&&o.update(this.renderable.values.uTexSize,T.set(this.renderable.values.uTexSize.ref.value,e,t))}clearSkybox(){this.skybox!==void 0&&(this.skybox.texture.destroy(),this.skybox.assets.forEach(e=>this.assetManager.release(e)),this.skybox=void 0)}updateSkybox(e,t,r){let a=this.skybox?.props.faces,n=t.faces.params;if(!n.nx||!n.ny||!n.nz||!n.px||!n.py||!n.pz){this.clearSkybox(),r?.(!1);return}if(!this.skybox||!a||!Wl(t.faces,this.skybox.props.faces)){this.clearSkybox();let{texture:d,assets:u}=Ul(this.webgl,this.assetManager,t.faces,c=>{this.skybox&&(this.skybox.loaded=!c),r?.(!0)});this.skybox={texture:d,props:{...t},assets:u,loaded:!1},o.update(this.renderable.values.tSkybox,d),this.renderable.update()}else r?.(!1);if(!this.skybox)return;let i=e;e.state.mode==="orthographic"&&(this.camera.setState({...e.state,mode:"perspective"}),this.camera.update(),i=this.camera);let l=this.renderable.values.uViewDirectionProjectionInverse.ref.value;V.isZero(e.headRotation)?(b.sub(this.dir,i.state.position,i.state.target),b.setMagnitude(this.dir,this.dir,.1),b.copy(this.position,this.dir),V.lookAt(l,this.position,this.target,i.state.up)):V.invert(l,e.headRotation),V.mul(l,i.projection,l),V.invert(l,l),o.update(this.renderable.values.uViewDirectionProjectionInverse,l);let m=this.renderable.values.uRotation.ref.value;xo.fromEuler(m,Ni.create(Et(t.rotation.x),Et(t.rotation.y),Et(t.rotation.z)),"XYZ"),o.update(this.renderable.values.uRotation,m),o.updateIfChanged(this.renderable.values.uBlur,t.blur),o.updateIfChanged(this.renderable.values.uOpacity,t.opacity),o.updateIfChanged(this.renderable.values.uSaturation,t.saturation),o.updateIfChanged(this.renderable.values.uLightness,t.lightness),o.updateIfChanged(this.renderable.values.dVariant,"skybox"),this.renderable.update()}clearImage(){this.image!==void 0&&(this.image.texture.destroy(),this.assetManager.release(this.image.asset),this.image=void 0)}updateImage(e,t){if(!e.source.params){this.clearImage(),t?.(!1);return}if(!this.image||!this.image.props.source.params||!Xl(e.source,this.image.props.source)){this.clearImage();let{texture:r,asset:a}=Ql(this.webgl,this.assetManager,e.source,n=>{this.image&&(this.image.loaded=!n),t?.(!0)});this.image={texture:r,props:{...e},asset:a,loaded:!1},o.update(this.renderable.values.tImage,r),this.renderable.update()}else t?.(!1);this.image&&(o.updateIfChanged(this.renderable.values.uBlur,e.blur),o.updateIfChanged(this.renderable.values.uOpacity,e.opacity),o.updateIfChanged(this.renderable.values.uSaturation,e.saturation),o.updateIfChanged(this.renderable.values.uLightness,e.lightness),o.updateIfChanged(this.renderable.values.uViewportAdjusted,e.coverage==="viewport"),o.updateIfChanged(this.renderable.values.dVariant,"image"),this.renderable.update())}updateImageScaling(){let e=this.renderable.values,[t,r]=e.uTexSize.ref.value,a=this.image?.texture.getWidth()||0,n=this.image?.texture.getHeight()||0,i=t/r,l=a/n;i<l?o.update(e.uImageScale,T.set(e.uImageScale.ref.value,a*r/n,r)):o.update(e.uImageScale,T.set(e.uImageScale.ref.value,t,n*t/a));let[m,d]=e.uImageScale.ref.value,u=m/d;u>i?o.update(e.uImageOffset,T.set(e.uImageOffset.ref.value,(1-i/u)/2,0)):o.update(e.uImageOffset,T.set(e.uImageOffset.ref.value,0,(1-u/i)/2))}updateGradient(e,t,r,a,n){o.update(this.renderable.values.uGradientColorA,ge.toVec3Normalized(this.renderable.values.uGradientColorA.ref.value,e)),o.update(this.renderable.values.uGradientColorB,ge.toVec3Normalized(this.renderable.values.uGradientColorB.ref.value,t)),o.updateIfChanged(this.renderable.values.uGradientRatio,r),o.updateIfChanged(this.renderable.values.uViewportAdjusted,n),o.updateIfChanged(this.renderable.values.dVariant,a),this.renderable.update()}update(e,t,r){if(t.variant.name==="off"){this.clearSkybox(),this.clearImage(),r?.(!1);return}else t.variant.name==="skybox"?(this.clearImage(),this.updateSkybox(e,t.variant.params,r)):t.variant.name==="image"?(this.clearSkybox(),this.updateImage(t.variant.params,r)):t.variant.name==="horizontalGradient"?(this.clearSkybox(),this.clearImage(),this.updateGradient(t.variant.params.topColor,t.variant.params.bottomColor,t.variant.params.ratio,t.variant.name,t.variant.params.coverage==="viewport"),r?.(!1)):t.variant.name==="radialGradient"&&(this.clearSkybox(),this.clearImage(),this.updateGradient(t.variant.params.centerColor,t.variant.params.edgeColor,t.variant.params.ratio,t.variant.name,t.variant.params.coverage==="viewport"),r?.(!1));let{x:a,y:n,width:i,height:l}=e.viewport;o.update(this.renderable.values.uViewport,Ne.set(this.renderable.values.uViewport.ref.value,a,n,i,l))}_isEnabled(e){return!!(this.skybox&&this.skybox.loaded||this.image&&this.image.loaded||e.variant.name==="horizontalGradient"||e.variant.name==="radialGradient")}isEnabled(e){return e.enabled&&this._isEnabled(e.background)}isReady(){return!!(this.skybox&&this.skybox.loaded||this.image&&this.image.loaded||this.renderable.values.dVariant.ref.value==="horizontalGradient"||this.renderable.values.dVariant.ref.value==="radialGradient")}clear(e,t,r){let{gl:a,state:n}=this.webgl;this._isEnabled(e)?(t?n.clearColor(0,0,0,0):(ge.toVec3Normalized(this.bgColor,r),n.clearColor(this.bgColor[0],this.bgColor[1],this.bgColor[2],1)),a.clear(a.COLOR_BUFFER_BIT),n.enable(a.BLEND),n.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA)):(ge.toVec3Normalized(this.bgColor,r),n.clearColor(this.bgColor[0],this.bgColor[1],this.bgColor[2],1),a.clear(a.COLOR_BUFFER_BIT))}render(e){!this._isEnabled(e)||!this.isReady()||(this.renderable.values.dVariant.ref.value==="image"&&this.updateImageScaling(),k&&this.webgl.timer.mark("BackgroundPass.render"),this.renderable.render(),k&&this.webgl.timer.markEnd("BackgroundPass.render"))}dispose(){this.clearSkybox(),this.clearImage()}},Bn="background-skybox";function jl(s,e){return e.name==="urls"?{nx:Br.getUrlAsset(s,e.params.nx),ny:Br.getUrlAsset(s,e.params.ny),nz:Br.getUrlAsset(s,e.params.nz),px:Br.getUrlAsset(s,e.params.px),py:Br.getUrlAsset(s,e.params.py),pz:Br.getUrlAsset(s,e.params.pz)}:{nx:e.params.nx,ny:e.params.ny,nz:e.params.nz,px:e.params.px,py:e.params.py,pz:e.params.pz}}function Gl(s,e){let t=r=>s.resolve(r,"binary").run().then(a=>new Blob([a.data]));return{nx:t(e.nx),ny:t(e.ny),nz:t(e.nz),px:t(e.px),py:t(e.py),pz:t(e.pz)}}function Mn(s){return s.name==="urls"?`${Bn}_${s.params.nx}|${s.params.ny}|${s.params.nz}|${s.params.px}|${s.params.py}|${s.params.pz}`:`${Bn}_${s.params.nx?.id}|${s.params.ny?.id}|${s.params.nz?.id}|${s.params.px?.id}|${s.params.py?.id}|${s.params.pz?.id}`}function Wl(s,e){return Mn(s)===Mn(e)}function Ul(s,e,t,r){let a=jl(e,t),n=Gl(e,a),i=[a.nx,a.ny,a.nz,a.px,a.py,a.pz];return typeof HTMLImageElement>"u"?(console.error('Missing "HTMLImageElement" required for background skybox'),r?.(!0),{texture:Tr(),assets:i}):{texture:s.resources.cubeTexture(n,!0,r),assets:i}}var Ln="background-image";function On(s){return s.name==="url"?`${Ln}_${s.params}`:`${Ln}_${s.params?.id}`}function Xl(s,e){return On(s)===On(e)}function Ql(s,e,t,r){let a=t.name==="url"?e.tryFindFilename(t.params)??Br.getUrlAsset(e,t.params):t.params;if(typeof HTMLImageElement>"u")return console.error('Missing "HTMLImageElement" required for background image'),r?.(!0),{texture:Tr(),asset:a};let n=s.resources.texture("image-uint8","rgba","ubyte","linear"),i=new Image;return i.onload=()=>{n.load(i),(s.isWebGL2||Co(i.width)&&Co(i.height))&&n.mipmap(),r?.()},i.onerror=()=>{r?.(!0)},e.resolve(a,"binary").run().then(l=>{let m=new Blob([l.data]);i.src=URL.createObjectURL(m)}),{texture:n,asset:a}}var Kl={drawCount:Do("number"),instanceCount:Do("number"),aPosition:Pi("float32",2,0),tSkybox:K("texture","rgba","ubyte","linear"),tImage:K("texture","rgba","ubyte","linear"),uImageScale:C("v2"),uImageOffset:C("v2"),uTexSize:C("v2"),uViewport:C("v4"),uViewportAdjusted:C("b"),uViewDirectionProjectionInverse:C("m4"),uGradientColorA:C("v3"),uGradientColorB:C("v3"),uGradientRatio:C("f"),uBlur:C("f"),uOpacity:C("f"),uSaturation:C("f"),uLightness:C("f"),uRotation:C("m3"),dVariant:ie("string",["skybox","image","verticalGradient","horizontalGradient","radialGradient"])},_l=Se("background",Fn,En,{shaderTextureLod:"optional"});function Zl(s,e,t){let r={drawCount:o.create(6),instanceCount:o.create(1),aPosition:o.create(Ai),tSkybox:o.create(Tr()),tImage:o.create(Tr()),uImageScale:o.create(T()),uImageOffset:o.create(T()),uTexSize:o.create(T.create(e,t)),uViewport:o.create(Ne()),uViewportAdjusted:o.create(!0),uViewDirectionProjectionInverse:o.create(V()),uGradientColorA:o.create(b()),uGradientColorB:o.create(b()),uGradientRatio:o.create(.5),uBlur:o.create(0),uOpacity:o.create(1),uSaturation:o.create(0),uLightness:o.create(0),uRotation:o.create(xo.identity()),dVariant:o.create("skybox")},a={...Kl},n=Ce(s,"triangles",_l,a,r);return Te(n,r)}var zn=`
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
`;var Vn={sharpness:h.Numeric(.5,{min:0,max:1,step:.05}),denoise:h.Boolean(!0)},ro=class{constructor(e,t){this.webgl=e;this.renderable=$l(e,t)}updateState(e){let{gl:t,state:r}=this.webgl;r.enable(t.SCISSOR_TEST),r.disable(t.BLEND),r.disable(t.DEPTH_TEST),r.depthMask(!1);let{x:a,y:n,width:i,height:l}=e;r.viewport(a,n,i,l),r.scissor(a,n,i,l),r.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT)}setSize(e,t){o.update(this.renderable.values.uTexSizeInv,T.set(this.renderable.values.uTexSizeInv.ref.value,1/e,1/t))}update(e,t){let{values:r}=this.renderable,{sharpness:a,denoise:n}=t,i=!1;r.tColor.ref.value!==e&&(o.update(this.renderable.values.tColor,e),i=!0),o.updateIfChanged(r.uSharpness,2-2*Math.pow(a,.25)),r.dDenoise.ref.value!==n&&(i=!0),o.updateIfChanged(r.dDenoise,n),i&&this.renderable.update()}render(e,t){k&&this.webgl.timer.mark("CasPass.render"),t?t.bind():this.webgl.bindDrawingBuffer(),this.updateState(e),this.renderable.render(),k&&this.webgl.timer.markEnd("CasPass.render")}},Yl={...De,tColor:K("texture","rgba","ubyte","linear"),uTexSizeInv:C("v2"),uSharpness:C("f"),dDenoise:ie("boolean")},Jl=Se("cas",Fe,zn);function $l(s,e){let t=e.getWidth(),r=e.getHeight(),a={...ke,tColor:o.create(e),uTexSizeInv:o.create(T.create(1/t,1/r)),uSharpness:o.create(.5),dDenoise:o.create(!0)},n={...Yl},i=Ce(s,"triangles",Jl,n,a);return Te(i,a)}var Nn=`
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
`;var Hn={blurSize:h.Numeric(9,{min:1,max:32,step:1}),blurSpread:h.Numeric(1,{min:0,max:10,step:.1}),inFocus:h.Numeric(0,{min:-5e3,max:5e3,step:1},{description:"Distance from the scene center that will be in focus"}),PPM:h.Numeric(20,{min:0,max:5e3,step:.1},{description:"Size of the area that will be in focus"}),center:h.Select("camera-target",h.arrayToOptions(["scene-center","camera-target"])),mode:h.Select("plane",h.arrayToOptions(["plane","sphere"]))},cr=class{constructor(e,t,r){this.webgl=e;this.target=e.createRenderTarget(t,r,"none");let a=Tr();this.renderable=ru(e,a,a,a)}static isEnabled(e){return e.enabled&&e.dof.name!=="off"}getByteCount(){return this.target.getByteCount()}updateState(e){let{gl:t,state:r}=this.webgl;r.enable(t.SCISSOR_TEST),r.disable(t.BLEND),r.disable(t.DEPTH_TEST),r.depthMask(!1);let{x:a,y:n,width:i,height:l}=e;r.viewport(a,n,i,l),r.scissor(a,n,i,l),r.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT)}setSize(e,t){let r=this.target.texture.getWidth(),a=this.target.texture.getHeight();(e!==r||t!==a)&&(this.target.setSize(e,t),o.update(this.renderable.values.uTexSize,T.set(this.renderable.values.uTexSize.ref.value,e,t)))}update(e,t,r,a,n,i){let l=!1;this.renderable.values.tColor.ref.value!==t&&(o.update(this.renderable.values.tColor,t),l=!0),this.renderable.values.tDepthOpaque.ref.value!==r&&(o.update(this.renderable.values.tDepthOpaque,r),l=!0),this.renderable.values.tDepthTransparent.ref.value!==a&&(o.update(this.renderable.values.tDepthTransparent,a),l=!0);let m=e.state.mode==="orthographic"?1:0,d=this.renderable.values.uInvProjection.ref.value;V.invert(d,e.projection);let[u,c]=this.renderable.values.uTexSize.ref.value,p=e.viewport;o.update(this.renderable.values.uProjection,e.projection),o.update(this.renderable.values.uInvProjection,d),o.update(this.renderable.values.uMode,n.mode==="sphere"?1:0),Ne.set(this.renderable.values.uBounds.ref.value,p.x/u,p.y/c,(p.x+p.width)/u,(p.y+p.height)/c),o.update(this.renderable.values.uBounds,this.renderable.values.uBounds.ref.value),o.updateIfChanged(this.renderable.values.uNear,e.near),o.updateIfChanged(this.renderable.values.uFar,e.far),o.updateIfChanged(this.renderable.values.dOrthographic,m);let g=Math.round(n.blurSize*this.webgl.pixelRatio);this.renderable.values.dBlurSize.ref.value!==g&&(o.update(this.renderable.values.dBlurSize,g),l=!0);let x=n.center==="scene-center"?i.center:e.state.target,S=b.distance(e.state.position,x)+n.inFocus;o.updateIfChanged(this.renderable.values.uInFocus,S*e.scale);let P=this.renderable.values.uCenter.ref.value;b.transformMat4(P,x,e.view),o.update(this.renderable.values.uCenter,P),o.updateIfChanged(this.renderable.values.uBlurSpread,n.blurSpread),o.updateIfChanged(this.renderable.values.uPPM,n.PPM*e.scale),l&&this.renderable.update()}render(e,t){k&&this.webgl.timer.mark("DofPass.render"),t?t.bind():this.webgl.bindDrawingBuffer(),this.updateState(e),this.renderable.render(),k&&this.webgl.timer.markEnd("DofPass.render")}},eu={...De,tDepthOpaque:K("texture","rgba","ubyte","nearest"),tDepthTransparent:K("texture","rgba","ubyte","nearest"),tColor:K("texture","rgba","ubyte","nearest"),uTexSize:C("v2"),uProjection:C("m4"),uInvProjection:C("m4"),uBounds:C("v4"),uCenter:C("v3"),uMode:C("i"),dOrthographic:ie("number"),uNear:C("f"),uFar:C("f"),dBlurSize:ie("number"),uBlurSpread:C("f"),uInFocus:C("f"),uPPM:C("f")},tu=Se("dof",Fe,Nn);function ru(s,e,t,r){let a=e.getWidth(),n=e.getHeight(),i={...ke,tDepthOpaque:o.create(t),tDepthTransparent:o.create(r),tColor:o.create(e),uTexSize:o.create(T.create(a,n)),uProjection:o.create(V.identity()),uInvProjection:o.create(V.identity()),uBounds:o.create(Ne()),uCenter:o.create(b()),uMode:o.create(0),dOrthographic:o.create(0),uNear:o.create(1),uFar:o.create(1e4),dBlurSize:o.create(5),uBlurSpread:o.create(300),uInFocus:o.create(20),uPPM:o.create(20)},l={...eu},m=Ce(s,"triangles",tu,l,i);return Te(m,i)}var qn=`
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
`;var jn={scale:h.Numeric(1,{min:1,max:5,step:1}),threshold:h.Numeric(.33,{min:.01,max:1,step:.01}),color:h.Color(0),includeTransparent:h.Boolean(!0,{description:"Whether to show outline for transparent objects"})},yr=class{constructor(e,t,r,a,n){this.webgl=e;this.target=e.createRenderTarget(t,r,"none"),this.renderable=ou(e,n,a,!0)}static isEnabled(e){return e.enabled&&e.outline.name!=="off"}getByteCount(){return this.target.getByteCount()}setSize(e,t){let[r,a]=this.renderable.values.uTexSize.ref.value;(e!==r||t!==a)&&(this.target.setSize(e,t),o.update(this.renderable.values.uTexSize,T.set(this.renderable.values.uTexSize.ref.value,e,t)))}update(e,t,r,a){let n=!1,i=e.state.mode==="orthographic"?1:0,l=this.renderable.values.uInvProjection.ref.value;V.invert(l,e.projection);let m=t.includeTransparent??!0,d=Math.max(1,Math.round(t.scale*this.webgl.pixelRatio))-1,u=50*t.threshold*this.webgl.pixelRatio;return o.updateIfChanged(this.renderable.values.uNear,e.near),o.updateIfChanged(this.renderable.values.uFar,e.far),o.update(this.renderable.values.uInvProjection,l),this.renderable.values.dTransparentOutline.ref.value!==m&&(n=!0,o.update(this.renderable.values.dTransparentOutline,m)),this.renderable.values.dOrthographic.ref.value!==i&&(n=!0,o.update(this.renderable.values.dOrthographic,i)),o.updateIfChanged(this.renderable.values.uOutlineThreshold,u),this.renderable.values.tDepthTransparent.ref.value!==r&&(n=!0,o.update(this.renderable.values.tDepthTransparent,r)),this.renderable.values.tDepthOpaque.ref.value!==a&&(n=!0,o.update(this.renderable.values.tDepthOpaque,a)),n&&this.renderable.update(),{transparentOutline:m,outlineScale:d}}render(){k&&this.webgl.timer.mark("OutlinePass.render"),this.target.bind(),this.renderable.render(),k&&this.webgl.timer.markEnd("OutlinePass.render")}},au={...De,tDepthOpaque:K("texture","rgba","ubyte","nearest"),tDepthTransparent:K("texture","rgba","ubyte","nearest"),uTexSize:C("v2"),dOrthographic:ie("number"),uNear:C("f"),uFar:C("f"),uInvProjection:C("m4"),uOutlineThreshold:C("f"),dTransparentOutline:ie("boolean")};function ou(s,e,t,r){let a=e.getWidth(),n=e.getHeight(),i={...ke,tDepthOpaque:o.create(e),tDepthTransparent:o.create(t),uTexSize:o.create(T.create(a,n)),dOrthographic:o.create(0),uNear:o.create(1),uFar:o.create(1e4),uInvProjection:o.create(V.identity()),uOutlineThreshold:o.create(.33),dTransparentOutline:o.create(r)},l={...au},m=Se("outlines",Fe,qn),d=Ce(s,"triangles",m,l,i);return Te(d,i)}var Gn=`
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
`;var Wn={steps:h.Numeric(1,{min:1,max:64,step:1}),maxDistance:h.Numeric(3,{min:0,max:256,step:1}),tolerance:h.Numeric(1,{min:0,max:10,step:.1})},aa=class{constructor(e,t,r,a){this.webgl=e;this.invProjection=V.identity();this.invHeadRotation=V.identity();this.target=e.createRenderTarget(t,r,"none"),this.renderable=nu(e,a)}static isEnabled(e){return e.enabled&&e.shadow.name!=="off"}getByteCount(){return this.target.getByteCount()}setSize(e,t){let[r,a]=this.renderable.values.uTexSize.ref.value;(e!==r||t!==a)&&(this.target.setSize(e,t),o.update(this.renderable.values.uTexSize,T.set(this.renderable.values.uTexSize.ref.value,e,t)))}update(e,t,r,a){let n=!1,i=e.state.mode==="orthographic"?1:0,[l,m]=this.renderable.values.uTexSize.ref.value,d=e.viewport;o.update(this.renderable.values.uProjection,e.projection),o.update(this.renderable.values.uInvProjection,V.invert(this.invProjection,e.projection)),Ne.set(this.renderable.values.uBounds.ref.value,d.x/l,d.y/m,(d.x+d.width)/l,(d.y+d.height)/m),o.update(this.renderable.values.uBounds,this.renderable.values.uBounds.ref.value),o.updateIfChanged(this.renderable.values.uNear,e.near),o.updateIfChanged(this.renderable.values.uFar,e.far),this.renderable.values.dOrthographic.ref.value!==i&&(o.update(this.renderable.values.dOrthographic,i),n=!0),o.updateIfChanged(this.renderable.values.uMaxDistance,a.maxDistance*e.scale),o.updateIfChanged(this.renderable.values.uTolerance,a.tolerance*e.scale),this.renderable.values.dSteps.ref.value!==a.steps&&(o.update(this.renderable.values.dSteps,a.steps),n=!0),!V.isZero(e.headRotation)?o.update(this.renderable.values.uLightDirection,No(t,V.invert(this.invHeadRotation,e.headRotation))):o.update(this.renderable.values.uLightDirection,t.direction),o.update(this.renderable.values.uLightColor,t.color),this.renderable.values.dLightCount.ref.value!==t.count&&(o.update(this.renderable.values.dLightCount,t.count),n=!0),o.update(this.renderable.values.uAmbientColor,r),n&&this.renderable.update()}render(){k&&this.webgl.timer.mark("ShadowPass.render"),this.target.bind(),this.renderable.render(),k&&this.webgl.timer.markEnd("ShadowPass.render")}},iu={...De,tDepth:K("texture","rgba","ubyte","nearest"),uTexSize:C("v2"),uProjection:C("m4"),uInvProjection:C("m4"),uBounds:C("v4"),dOrthographic:ie("number"),uNear:C("f"),uFar:C("f"),dSteps:ie("number"),uMaxDistance:C("f"),uTolerance:C("f"),uLightDirection:C("v3[]"),uLightColor:C("v3[]"),dLightCount:ie("number"),uAmbientColor:C("v3")};function nu(s,e){let t=e.getWidth(),r=e.getHeight(),a={...ke,tDepth:o.create(e),uTexSize:o.create(T.create(t,r)),uProjection:o.create(V.identity()),uInvProjection:o.create(V.identity()),uBounds:o.create(Ne()),dOrthographic:o.create(0),uNear:o.create(1),uFar:o.create(1e4),dSteps:o.create(1),uMaxDistance:o.create(3),uTolerance:o.create(1),uLightDirection:o.create([]),uLightColor:o.create([]),dLightCount:o.create(0),uAmbientColor:o.create(b())},n={...iu},i=Se("shadows",Fe,Gn),l=Ce(s,"triangles",i,n,a);return Te(l,a)}var Un=`
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
`;var Xn=`
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
`;var _n={samples:h.Numeric(32,{min:1,max:256,step:1}),multiScale:h.MappedStatic("off",{on:h.Group({levels:h.ObjectList({radius:h.Numeric(5,{min:0,max:20,step:.1},{description:"Final occlusion radius is 2^x"}),bias:h.Numeric(1,{min:0,max:3,step:.1})},s=>`${s.radius}, ${s.bias}`,{defaultValue:[{radius:2,bias:1},{radius:5,bias:1},{radius:8,bias:1},{radius:11,bias:1}]}),nearThreshold:h.Numeric(10,{min:0,max:50,step:1}),farThreshold:h.Numeric(1500,{min:0,max:1e4,step:100})}),off:h.Group({})},{cycle:!0}),radius:h.Numeric(5,{min:0,max:20,step:.1},{description:"Final occlusion radius is 2^x",hideIf:s=>s?.multiScale.name==="on"}),bias:h.Numeric(.8,{min:0,max:3,step:.1}),blurKernelSize:h.Numeric(15,{min:1,max:25,step:2}),blurDepthBias:h.Numeric(.5,{min:0,max:1,step:.01}),resolutionScale:h.Numeric(1,{min:.1,max:1,step:.05},{description:"Adjust resolution of occlusion calculation"}),color:h.Color(0),transparentThreshold:h.Numeric(.4,{min:0,max:1,step:.05})};function su(s,e,t){let r=s.length,{radius:a,bias:n}=t||{radius:new Array(r*3).fill(0),bias:new Array(r*3).fill(0)};s=s.slice().sort((i,l)=>i.radius-l.radius);for(let i=0;i<r;++i){let l=s[i];a[i]=Math.pow(2,l.radius)*e,n[i]=l.bias}return{count:r,radius:a,bias:n}}var Ht=class s{constructor(e,t,r,a,n,i){this.webgl=e;this.invProjection=V.identity();this.levelsCameraScale=-1;let{textureFloatLinear:l}=e.extensions;this.depthTextureOpaque=n,this.depthTextureTransparent=i,this.nSamples=1,this.blurKernelSize=1,this.ssaoScale=this.calcSsaoScale(1),this.texSize=[t,r],this.levels=[],this.framebuffer=e.resources.framebuffer(),this.blurFirstPassFramebuffer=e.resources.framebuffer(),this.blurSecondPassFramebuffer=e.resources.framebuffer();let m=Math.floor(t*this.ssaoScale),d=Math.floor(r*this.ssaoScale),u=Math.max(1,Math.floor(m*.5)),c=Math.max(1,Math.floor(d*.5)),p=Math.max(1,Math.floor(m*.25)),g=Math.max(1,Math.floor(d*.25)),x=l?"linear":"nearest";this.downsampledDepthTargetOpaque=a?e.createRenderTarget(m,d,"none","uint8","linear","rgba"):e.createRenderTarget(m,d,"none","float32",x,e.isWebGL2?"alpha":"rgba"),this.downsampleDepthRenderableOpaque=zt(e,n);let y=this.getDepthTexture();this.depthHalfTargetOpaque=a?e.createRenderTarget(u,c,"none","uint8","linear","rgba"):e.createRenderTarget(u,c,"none","float32",x,e.isWebGL2?"alpha":"rgba"),this.depthHalfRenderableOpaque=zt(e,y),this.depthQuarterTargetOpaque=a?e.createRenderTarget(p,g,"none","uint8","linear","rgba"):e.createRenderTarget(p,g,"none","float32",x,e.isWebGL2?"alpha":"rgba"),this.depthQuarterRenderableOpaque=zt(e,this.depthHalfTargetOpaque.texture),this.downsampledDepthTargetTransparent=e.createRenderTarget(m,d,"none","uint8","linear","rgba"),this.downsampleDepthRenderableTransparent=zt(e,i);let S=this.getTransparentDepthTexture();this.depthHalfTargetTransparent=e.createRenderTarget(u,c,"none","uint8","linear","rgba"),this.depthHalfRenderableTransparent=zt(e,S),this.depthQuarterTargetTransparent=e.createRenderTarget(p,g,"none","uint8","linear","rgba"),this.depthQuarterRenderableTransparent=zt(e,this.depthHalfTargetTransparent.texture),this.ssaoDepthTexture=e.resources.texture("image-uint8","rgba","ubyte","linear"),this.ssaoDepthTexture.define(m,d),this.ssaoDepthTexture.attachFramebuffer(this.framebuffer,"color0"),this.ssaoDepthTransparentTexture=e.resources.texture("image-uint8","rgba","ubyte","linear"),this.ssaoDepthTransparentTexture.define(m,d),this.depthBlurProxyTexture=e.resources.texture("image-uint8","rgba","ubyte","linear"),this.depthBlurProxyTexture.define(m,d),this.depthBlurProxyTexture.attachFramebuffer(this.blurFirstPassFramebuffer,"color0"),this.renderable=uu(e,y,this.depthHalfTargetOpaque.texture,this.depthQuarterTargetOpaque.texture,S,this.depthHalfTargetTransparent.texture,this.depthQuarterTargetTransparent.texture),this.blurFirstPassRenderable=Qn(e,this.ssaoDepthTransparentTexture,"horizontal"),this.blurSecondPassRenderable=Qn(e,this.depthBlurProxyTexture,"vertical")}static isEnabled(e){return e.enabled&&e.occlusion.name!=="off"}static isTransparentEnabled(e,t){return e.opacityAverage<1&&e.transparencyMin<t.transparentThreshold}calcSsaoScale(e){return Math.min(1,1/this.webgl.pixelRatio)*e}getDepthTexture(){return this.ssaoScale===1?this.depthTextureOpaque:this.downsampledDepthTargetOpaque.texture}getTransparentDepthTexture(){return this.ssaoScale===1?this.depthTextureTransparent:this.downsampledDepthTargetTransparent.texture}getByteCount(){return this.downsampledDepthTargetOpaque.getByteCount()+this.depthHalfTargetOpaque.getByteCount()+this.depthQuarterTargetOpaque.getByteCount()+this.downsampledDepthTargetTransparent.getByteCount()+this.depthHalfTargetTransparent.getByteCount()+this.depthQuarterTargetTransparent.getByteCount()+this.ssaoDepthTexture.getByteCount()+this.ssaoDepthTransparentTexture.getByteCount()+this.depthBlurProxyTexture.getByteCount()}setSize(e,t){let[r,a]=this.texSize,n=this.calcSsaoScale(1);if(e!==r||t!==a||this.ssaoScale!==n){this.texSize.splice(0,2,e,t);let i=Math.floor(e*this.ssaoScale),l=Math.floor(t*this.ssaoScale);this.ssaoDepthTexture.define(i,l),this.ssaoDepthTransparentTexture.define(i,l),this.depthBlurProxyTexture.define(i,l);let m=Math.max(1,Math.floor(i*.5)),d=Math.max(1,Math.floor(l*.5)),u=Math.max(1,Math.floor(i*.25)),c=Math.max(1,Math.floor(l*.25));this.downsampledDepthTargetOpaque.setSize(i,l),this.depthHalfTargetOpaque.setSize(m,d),this.depthQuarterTargetOpaque.setSize(u,c),o.update(this.downsampleDepthRenderableOpaque.values.uTexSize,T.set(this.downsampleDepthRenderableOpaque.values.uTexSize.ref.value,i,l)),o.update(this.depthHalfRenderableOpaque.values.uTexSize,T.set(this.depthHalfRenderableOpaque.values.uTexSize.ref.value,m,d)),o.update(this.depthQuarterRenderableOpaque.values.uTexSize,T.set(this.depthQuarterRenderableOpaque.values.uTexSize.ref.value,u,c)),this.downsampledDepthTargetTransparent.setSize(i,l),this.depthHalfTargetTransparent.setSize(m,d),this.depthQuarterTargetTransparent.setSize(u,c),o.update(this.downsampleDepthRenderableTransparent.values.uTexSize,T.set(this.downsampleDepthRenderableTransparent.values.uTexSize.ref.value,i,l)),o.update(this.depthHalfRenderableTransparent.values.uTexSize,T.set(this.depthHalfRenderableTransparent.values.uTexSize.ref.value,m,d)),o.update(this.depthQuarterRenderableTransparent.values.uTexSize,T.set(this.depthQuarterRenderableTransparent.values.uTexSize.ref.value,u,c)),o.update(this.renderable.values.uTexSize,T.set(this.renderable.values.uTexSize.ref.value,i,l)),o.update(this.blurFirstPassRenderable.values.uTexSize,T.set(this.blurFirstPassRenderable.values.uTexSize.ref.value,i,l)),o.update(this.blurSecondPassRenderable.values.uTexSize,T.set(this.blurSecondPassRenderable.values.uTexSize.ref.value,i,l));let p=this.getDepthTexture(),g=this.getTransparentDepthTexture();o.update(this.depthHalfRenderableOpaque.values.tColor,p),o.update(this.depthHalfRenderableTransparent.values.tColor,g),o.update(this.renderable.values.tDepth,p),o.update(this.renderable.values.tDepthTransparent,g),this.depthHalfRenderableOpaque.update(),this.depthHalfRenderableTransparent.update(),this.renderable.update()}}reset(){this.ssaoDepthTexture.attachFramebuffer(this.framebuffer,"color0"),this.depthBlurProxyTexture.attachFramebuffer(this.blurFirstPassFramebuffer,"color0")}update(e,t,r,a=!1){let n=!1,i=!1,l=!1,m=e.state.mode==="orthographic"?1:0,d=V.invert(this.invProjection,e.projection),[u,c]=this.texSize,p=e.viewport;o.update(this.renderable.values.uProjection,e.projection),o.update(this.renderable.values.uInvProjection,d);let g=this.renderable.values.uBounds,x=this.ssaoScale;Ne.set(g.ref.value,Math.floor(p.x*x)/(u*x),Math.floor(p.y*x)/(c*x),Math.ceil((p.x+p.width)*x)/(u*x),Math.ceil((p.y+p.height)*x)/(c*x)),o.update(g,g.ref.value),o.update(this.blurFirstPassRenderable.values.uBounds,g.ref.value),o.update(this.blurSecondPassRenderable.values.uBounds,g.ref.value),o.updateIfChanged(this.blurFirstPassRenderable.values.uNear,e.near),o.updateIfChanged(this.blurSecondPassRenderable.values.uNear,e.near),o.updateIfChanged(this.blurFirstPassRenderable.values.uFar,e.far),o.updateIfChanged(this.blurSecondPassRenderable.values.uFar,e.far),o.update(this.blurFirstPassRenderable.values.uInvProjection,d),o.update(this.blurSecondPassRenderable.values.uInvProjection,d),o.update(this.blurFirstPassRenderable.values.uBlurDepthBias,r.blurDepthBias*e.scale),o.update(this.blurSecondPassRenderable.values.uBlurDepthBias,r.blurDepthBias*e.scale),this.blurFirstPassRenderable.values.dOrthographic.ref.value!==m&&(i=!0,o.update(this.blurFirstPassRenderable.values.dOrthographic,m),o.update(this.blurSecondPassRenderable.values.dOrthographic,m));let y=s.isTransparentEnabled(t,r);this.renderable.values.dIncludeTransparent.ref.value!==y&&(n=!0,o.update(this.renderable.values.dIncludeTransparent,y)),this.renderable.values.dIllumination.ref.value!==a&&(n=!0,o.update(this.renderable.values.dIllumination,a)),this.nSamples!==r.samples&&(n=!0,this.nSamples=r.samples,o.update(this.renderable.values.uSamples,Yn(this.nSamples)),o.updateIfChanged(this.renderable.values.dNSamples,this.nSamples));let S=r.multiScale.name==="on";if(this.renderable.values.dMultiScale.ref.value!==S&&(n=!0,o.update(this.renderable.values.dMultiScale,S)),r.multiScale.name==="on"){let D=r.multiScale.params;if(this.levelsCameraScale!==e.scale||!Ta(this.levels,D.levels)){n=!0,this.levelsCameraScale=e.scale,this.levels=D.levels;let A=su(D.levels,e.scale);o.updateIfChanged(this.renderable.values.dLevels,A.count),o.update(this.renderable.values.uLevelRadius,A.radius),o.update(this.renderable.values.uLevelBias,A.bias)}o.updateIfChanged(this.renderable.values.uNearThreshold,D.nearThreshold),o.updateIfChanged(this.renderable.values.uFarThreshold,D.farThreshold)}else o.updateIfChanged(this.renderable.values.uRadius,Math.pow(2,r.radius)*e.scale);if(o.updateIfChanged(this.renderable.values.uBias,r.bias),this.blurKernelSize!==r.blurKernelSize){i=!0,this.blurKernelSize=r.blurKernelSize;let D=Zn(this.blurKernelSize);o.update(this.blurFirstPassRenderable.values.uKernel,D),o.update(this.blurSecondPassRenderable.values.uKernel,D),o.update(this.blurFirstPassRenderable.values.dOcclusionKernelSize,this.blurKernelSize),o.update(this.blurSecondPassRenderable.values.dOcclusionKernelSize,this.blurKernelSize)}let P=this.calcSsaoScale(r.resolutionScale);if(this.ssaoScale!==P){n=!0,l=!0,this.ssaoScale=P;let D=Math.floor(u*this.ssaoScale),A=Math.floor(c*this.ssaoScale);this.ssaoDepthTexture.define(D,A),this.ssaoDepthTransparentTexture.define(D,A),this.depthBlurProxyTexture.define(D,A);let M=Math.floor(D*.5),q=Math.floor(A*.5),N=Math.floor(D*.25),L=Math.floor(A*.25);this.downsampledDepthTargetOpaque.setSize(D,A),this.depthHalfTargetOpaque.setSize(M,q),this.depthQuarterTargetOpaque.setSize(N,L);let G=this.getDepthTexture();o.update(this.depthHalfRenderableOpaque.values.tColor,G),o.update(this.renderable.values.tDepth,G),o.update(this.renderable.values.tDepthHalf,this.depthHalfTargetOpaque.texture),o.update(this.renderable.values.tDepthQuarter,this.depthQuarterTargetOpaque.texture),o.update(this.downsampleDepthRenderableOpaque.values.uTexSize,T.set(this.downsampleDepthRenderableOpaque.values.uTexSize.ref.value,D,A)),o.update(this.depthHalfRenderableOpaque.values.uTexSize,T.set(this.depthHalfRenderableOpaque.values.uTexSize.ref.value,M,q)),o.update(this.depthQuarterRenderableOpaque.values.uTexSize,T.set(this.depthQuarterRenderableOpaque.values.uTexSize.ref.value,N,L)),this.downsampledDepthTargetTransparent.setSize(D,A),this.depthHalfTargetTransparent.setSize(M,q),this.depthQuarterTargetTransparent.setSize(N,L);let H=this.getTransparentDepthTexture();o.update(this.depthHalfRenderableTransparent.values.tColor,H),o.update(this.renderable.values.tDepthTransparent,H),o.update(this.renderable.values.tDepthHalfTransparent,this.depthHalfTargetTransparent.texture),o.update(this.renderable.values.tDepthQuarterTransparent,this.depthQuarterTargetTransparent.texture),o.update(this.downsampleDepthRenderableTransparent.values.uTexSize,T.set(this.downsampleDepthRenderableTransparent.values.uTexSize.ref.value,D,A)),o.update(this.depthHalfRenderableTransparent.values.uTexSize,T.set(this.depthHalfRenderableTransparent.values.uTexSize.ref.value,M,q)),o.update(this.depthQuarterRenderableTransparent.values.uTexSize,T.set(this.depthQuarterRenderableTransparent.values.uTexSize.ref.value,N,L)),o.update(this.renderable.values.uTexSize,T.set(this.renderable.values.uTexSize.ref.value,D,A)),o.update(this.blurFirstPassRenderable.values.uTexSize,T.set(this.blurFirstPassRenderable.values.uTexSize.ref.value,D,A)),o.update(this.blurSecondPassRenderable.values.uTexSize,T.set(this.blurSecondPassRenderable.values.uTexSize.ref.value,D,A))}n&&this.renderable.update(),i&&(this.blurFirstPassRenderable.update(),this.blurSecondPassRenderable.update()),l&&(this.depthHalfRenderableOpaque.update(),this.depthHalfRenderableTransparent.update())}render(e){k&&this.webgl.timer.mark("SSAO.render");let{state:t}=this.webgl,{x:r,y:a,width:n,height:i}=e.viewport,l=this.renderable.values.dIncludeTransparent.ref.value,m=this.renderable.values.dMultiScale.ref.value,d=Math.floor(r*this.ssaoScale),u=Math.floor(a*this.ssaoScale),c=Math.ceil(n*this.ssaoScale),p=Math.ceil(i*this.ssaoScale);if(t.viewport(d,u,c,p),t.scissor(d,u,c,p),this.ssaoScale<1&&(k&&this.webgl.timer.mark("SSAO.downsample"),this.downsampledDepthTargetOpaque.bind(),this.downsampleDepthRenderableOpaque.render(),l&&(this.downsampledDepthTargetTransparent.bind(),this.downsampleDepthRenderableTransparent.render()),k&&this.webgl.timer.markEnd("SSAO.downsample")),m){let g=Math.floor(d*.5),x=Math.floor(u*.5),y=Math.ceil(c*.5),S=Math.ceil(p*.5);t.viewport(g,x,y,S),t.scissor(g,x,y,S),k&&this.webgl.timer.mark("SSAO.half"),this.depthHalfTargetOpaque.bind(),this.depthHalfRenderableOpaque.render(),l&&(this.depthHalfTargetTransparent.bind(),this.depthHalfRenderableTransparent.render()),k&&this.webgl.timer.markEnd("SSAO.half");let P=Math.floor(d*.25),D=Math.floor(u*.25),A=Math.ceil(c*.25),M=Math.ceil(p*.25);t.viewport(P,D,A,M),t.scissor(P,D,A,M),k&&this.webgl.timer.mark("SSAO.quarter"),this.depthQuarterTargetOpaque.bind(),this.depthQuarterRenderableOpaque.render(),l&&(this.depthQuarterTargetTransparent.bind(),this.depthQuarterRenderableTransparent.render()),k&&this.webgl.timer.markEnd("SSAO.quarter"),t.viewport(d,u,c,p),t.scissor(d,u,c,p)}k&&this.webgl.timer.mark("SSAO.opaque"),this.ssaoDepthTexture.attachFramebuffer(this.framebuffer,"color0"),o.update(this.renderable.values.uTransparencyFlag,0),this.framebuffer.bind(),this.renderable.render(),k&&this.webgl.timer.markEnd("SSAO.opaque"),k&&this.webgl.timer.mark("SSAO.blurOpaque"),o.update(this.blurFirstPassRenderable.values.tSsaoDepth,this.ssaoDepthTexture),this.blurFirstPassRenderable.update(),this.blurFirstPassFramebuffer.bind(),this.blurFirstPassRenderable.render(),this.ssaoDepthTexture.attachFramebuffer(this.blurSecondPassFramebuffer,"color0"),this.blurSecondPassFramebuffer.bind(),this.blurSecondPassRenderable.render(),k&&this.webgl.timer.markEnd("SSAO.blurOpaque"),l&&(k&&this.webgl.timer.mark("SSAO.transparent "),this.ssaoDepthTransparentTexture.attachFramebuffer(this.framebuffer,"color0"),o.update(this.renderable.values.uTransparencyFlag,1),this.framebuffer.bind(),this.renderable.render(),k&&this.webgl.timer.markEnd("SSAO.transparent "),k&&this.webgl.timer.mark("SSAO.blurTransparent "),o.update(this.blurFirstPassRenderable.values.tSsaoDepth,this.ssaoDepthTransparentTexture),this.blurFirstPassRenderable.update(),this.blurFirstPassFramebuffer.bind(),this.blurFirstPassRenderable.render(),this.ssaoDepthTransparentTexture.attachFramebuffer(this.blurSecondPassFramebuffer,"color0"),this.blurSecondPassFramebuffer.bind(),this.blurSecondPassRenderable.render(),k&&this.webgl.timer.markEnd("SSAO.blurTransparent ")),k&&this.webgl.timer.markEnd("SSAO.render")}},lu={...De,tDepth:K("texture","rgba","ubyte","linear"),tDepthHalf:K("texture","rgba","ubyte","linear"),tDepthQuarter:K("texture","rgba","ubyte","linear"),dIllumination:ie("boolean"),uTransparencyFlag:C("i"),dIncludeTransparent:ie("boolean"),tDepthTransparent:K("texture","rgba","ubyte","linear"),tDepthHalfTransparent:K("texture","rgba","ubyte","linear"),tDepthQuarterTransparent:K("texture","rgba","ubyte","linear"),uSamples:C("v3[]"),dNSamples:ie("number"),uProjection:C("m4"),uInvProjection:C("m4"),uBounds:C("v4"),uTexSize:C("v2"),uRadius:C("f"),uBias:C("f"),dMultiScale:ie("boolean"),dLevels:ie("number"),uLevelRadius:C("f[]"),uLevelBias:C("f[]"),uNearThreshold:C("f"),uFarThreshold:C("f")};function uu(s,e,t,r,a,n,i){let l={...ke,tDepth:o.create(e),tDepthHalf:o.create(t),tDepthQuarter:o.create(r),dIllumination:o.create(!1),dIncludeTransparent:o.create(!0),uTransparencyFlag:o.create(0),tDepthTransparent:o.create(a),tDepthHalfTransparent:o.create(n),tDepthQuarterTransparent:o.create(i),uSamples:o.create(Yn(32)),dNSamples:o.create(32),uProjection:o.create(V.identity()),uInvProjection:o.create(V.identity()),uBounds:o.create(Ne()),uTexSize:o.create(T.create(s.gl.drawingBufferWidth,s.gl.drawingBufferHeight)),uRadius:o.create(Math.pow(2,5)),uBias:o.create(.8),dMultiScale:o.create(!1),dLevels:o.create(3),uLevelRadius:o.create([Math.pow(2,2),Math.pow(2,5),Math.pow(2,8)]),uLevelBias:o.create([.8,.8,.8]),uNearThreshold:o.create(10),uFarThreshold:o.create(1500)},m={...lu},d=Se("ssao",Fe,Un),u=Ce(s,"triangles",d,m,l);return Te(u,l)}var cu={...De,tSsaoDepth:K("texture","rgba","ubyte","nearest"),uTexSize:C("v2"),uKernel:C("f[]"),dOcclusionKernelSize:ie("number"),uBlurDepthBias:C("f"),uBlurDirectionX:C("f"),uBlurDirectionY:C("f"),uInvProjection:C("m4"),uNear:C("f"),uFar:C("f"),uBounds:C("v4"),dOrthographic:ie("number")};function Qn(s,e,t){let r={...ke,tSsaoDepth:o.create(e),uTexSize:o.create(T.create(e.getWidth(),e.getHeight())),uKernel:o.create(Zn(15)),dOcclusionKernelSize:o.create(15),uBlurDepthBias:o.create(.5),uBlurDirectionX:o.create(t==="horizontal"?1:0),uBlurDirectionY:o.create(t==="vertical"?1:0),uInvProjection:o.create(V.identity()),uNear:o.create(0),uFar:o.create(1e4),uBounds:o.create(Ne()),dOrthographic:o.create(0)},a={...cu},n=Se("ssao_blur",Fe,Xn),i=Ce(s,"triangles",n,a,r);return Te(i,r)}function Zn(s){let e=s/3,t=Math.floor((s+1)/2),r=[];for(let a=0;a<t;a++)r.push(1/(Math.sqrt(2*Math.PI)*e)*Math.exp(-a*a/(2*e*e)));return r}var ao=new pi;function Kn(){let s=b();for(;;){let e=ao.float()*2-1,t=ao.float()*2-1;if(e*e+t*t<1){let r=2*Math.sqrt(1-e*e-t*t)*(ao.float()<.5?-1:1);b.set(s,e,t,r),b.normalize(s,s),b.scale(s,s,ao.float());break}}return s[2]<0&&(s[2]=-s[2]),s}function du(s,e){if(e.length>=s)return e;e.length===0&&e.push(Kn());let t=Math.max(10,Math.min(30,Math.floor(s/10)));for(let r=e.length;r<s;r++){let a,n=-1;for(let i=0;i<t;i++){let l=Kn(),m=1/0;for(let d of e){let u=b.distance(l,d);m=Math.min(m,u)}m>n&&(n=m,a=l)}e.push(a)}return e}var oo=[];function pu(s){return oo.length<s&&(oo=du(s,oo)),oo}function Yn(s){let e=pu(s),t=[];for(let r=0;r<s;r++){let a=(r*r+2*r+1)/(s*s);a=.1+a*(1-.1),t.push(e[r][0]*a),t.push(e[r][1]*a),t.push(e[r][2]*a)}return t}var mu={...De,tSsaoDepth:K("texture","rgba","ubyte","nearest"),tSsaoDepthTransparent:K("texture","rgba","ubyte","nearest"),tColor:K("texture","rgba","ubyte","nearest"),tTransparentColor:K("texture","rgba","ubyte","nearest"),dBlendTransparency:ie("boolean"),tDepthOpaque:K("texture","rgba","ubyte","nearest"),tDepthTransparent:K("texture","rgba","ubyte","nearest"),tShadows:K("texture","rgba","ubyte","nearest"),tOutlines:K("texture","rgba","ubyte","nearest"),tBloom:K("texture","rgba","ubyte","linear"),dBloomEnable:ie("boolean"),uTexSize:C("v2"),dOrthographic:ie("number"),uNear:C("f"),uFar:C("f"),uFogNear:C("f"),uFogFar:C("f"),uFogColor:C("v3"),uOutlineColor:C("v3"),uOcclusionColor:C("v3"),uTransparentBackground:C("b"),dOcclusionEnable:ie("boolean"),dOcclusionSingleDepth:ie("boolean"),dOcclusionIncludeOpacity:ie("boolean"),dOcclusionIncludeTransparency:ie("boolean"),uOcclusionOffset:C("v2"),dShadowEnable:ie("boolean"),dOutlineEnable:ie("boolean"),dOutlineScale:ie("number"),dTransparentOutline:ie("boolean")};function fu(s,e,t,r,a,n,i,l,m,d,u){let c={...ke,tSsaoDepth:o.create(l),tSsaoDepthTransparent:o.create(m),tColor:o.create(e),tTransparentColor:o.create(t),dBlendTransparency:o.create(!0),tDepthOpaque:o.create(r),tDepthTransparent:o.create(a),tShadows:o.create(n),tOutlines:o.create(i),tBloom:o.create(d),dBloomEnable:o.create(!1),uTexSize:o.create(T.create(e.getWidth(),e.getHeight())),dOrthographic:o.create(0),uNear:o.create(1),uFar:o.create(1e4),uFogNear:o.create(1e4),uFogFar:o.create(1e4),uFogColor:o.create(b.create(1,1,1)),uOutlineColor:o.create(b.create(0,0,0)),uOcclusionColor:o.create(b.create(0,0,0)),uTransparentBackground:o.create(!1),dOcclusionEnable:o.create(!0),dOcclusionSingleDepth:o.create(!1),dOcclusionIncludeOpacity:o.create(!0),dOcclusionIncludeTransparency:o.create(!1),uOcclusionOffset:o.create(T.create(0,0)),dShadowEnable:o.create(!1),dOutlineEnable:o.create(!1),dOutlineScale:o.create(1),dTransparentOutline:o.create(u)},p={...mu},g=Se("postprocessing",Fe,vn),x=Ce(s,"triangles",g,p,c);return Te(x,c)}var io={enabled:h.Boolean(!0),occlusion:h.MappedStatic("on",{on:h.Group(_n),off:h.Group({})},{cycle:!0,description:"Darken occluded crevices with the ambient occlusion effect",hideIf:s=>s.enabled===!1}),shadow:h.MappedStatic("off",{on:h.Group(Wn),off:h.Group({})},{cycle:!0,description:"Simplistic shadows",hideIf:s=>s.enabled===!1}),outline:h.MappedStatic("off",{on:h.Group(jn),off:h.Group({})},{cycle:!0,description:"Draw outline around 3D objects",hideIf:s=>s.enabled===!1}),dof:h.MappedStatic("off",{on:h.Group(Hn),off:h.Group({})},{cycle:!0,description:"DOF",hideIf:s=>s.enabled===!1}),antialiasing:h.MappedStatic("smaa",{fxaa:h.Group(Tn),smaa:h.Group(Rn),off:h.Group({})},{options:[["fxaa","FXAA"],["smaa","SMAA"],["off","Off"]],description:"Smooth pixel edges",hideIf:s=>s.enabled===!1}),sharpening:h.MappedStatic("off",{on:h.Group(Vn),off:h.Group({})},{cycle:!0,description:"Contrast Adaptive Sharpening",hideIf:s=>s.enabled===!1}),background:h.Group(An,{isFlat:!0,hideIf:s=>s.enabled===!1}),bloom:h.MappedStatic("on",{on:h.Group(bn),off:h.Group({})},{cycle:!0,description:"Bloom",hideIf:s=>s.enabled===!1})},et=class s{constructor(e,t,r){this.webgl=e;this.drawPass=r;this.occlusionOffset=[0,0];this.transparentBackground=!1;let{colorTarget:a,transparentColorTarget:n,depthTextureOpaque:i,depthTextureTransparent:l,packedDepth:m}=r,d=a.getWidth(),u=a.getHeight();this.target=e.createRenderTarget(d,u,"none","uint8","linear"),this.ssao=new Ht(e,d,u,m,i,l),this.shadow=new aa(e,d,u,i),this.outline=new yr(e,d,u,l,i),this.bloom=new Lt(e,d,u),this.renderable=fu(e,a.texture,n.texture,i,l,this.shadow.target.texture,this.outline.target.texture,this.ssao.ssaoDepthTexture,this.ssao.ssaoDepthTransparentTexture,this.bloom.compositeTarget.texture,!0),this.background=new to(e,t,d,u)}static isEnabled(e){return e.enabled&&(Ht.isEnabled(e)||aa.isEnabled(e)||yr.isEnabled(e)||e.background.variant.name!=="off"||Lt.isEnabled(e))}static isTransparentDepthRequired(e,t){return t.enabled&&(cr.isEnabled(t)||yr.isEnabled(t)&&s.isTransparentOutlineEnabled(t)||Ht.isEnabled(t)&&s.isTransparentSsaoEnabled(e,t)||Lt.isEnabled(t))&&e.opacityAverage<1}static isTransparentOutlineEnabled(e){return e.enabled&&yr.isEnabled(e)&&(e.outline.params.includeTransparent??!0)}static isTransparentSsaoEnabled(e,t){return t.enabled&&Ht.isEnabled(t)&&Ht.isTransparentEnabled(e,t.occlusion.params)}static isSsaoEnabled(e){return e.enabled&&Ht.isEnabled(e)}getByteCount(){return this.target.getByteCount()+this.ssao.getByteCount()+this.shadow.getByteCount()+this.outline.getByteCount()+this.bloom.getByteCount()}setSize(e,t){let[r,a]=this.renderable.values.uTexSize.ref.value;(e!==r||t!==a)&&(this.target.setSize(e,t),o.update(this.renderable.values.uTexSize,T.set(this.renderable.values.uTexSize.ref.value,e,t))),this.ssao.setSize(e,t),this.shadow.setSize(e,t),this.outline.setSize(e,t),this.bloom.setSize(e,t),this.background.setSize(e,t)}reset(){this.ssao.reset()}updateState(e,t,r,a,n,i,l){let m=!1,d=e.state.mode==="orthographic"?1:0,u=yr.isEnabled(n),c=aa.isEnabled(n),p=Ht.isEnabled(n);if(p){let S=n.occlusion.params;this.ssao.update(e,t,S);let P=Ht.isTransparentEnabled(t,S);this.renderable.values.dOcclusionIncludeTransparency.ref.value!==P&&(m=!0,o.update(this.renderable.values.dOcclusionIncludeTransparency,P)),o.update(this.renderable.values.uOcclusionColor,ge.toVec3Normalized(this.renderable.values.uOcclusionColor.ref.value,S.color))}if(c&&this.shadow.update(e,i,l,n.shadow.params),u){let S=n.outline.params,{transparentOutline:P,outlineScale:D}=this.outline.update(e,S,this.drawPass.depthTextureTransparent,this.drawPass.depthTextureOpaque);o.update(this.renderable.values.uOutlineColor,ge.toVec3Normalized(this.renderable.values.uOutlineColor.ref.value,S.color)),this.renderable.values.dOutlineScale.ref.value!==D&&(m=!0,o.update(this.renderable.values.dOutlineScale,D)),this.renderable.values.dTransparentOutline.ref.value!==P&&(m=!0,o.update(this.renderable.values.dTransparentOutline,P))}o.updateIfChanged(this.renderable.values.uFar,e.far),o.updateIfChanged(this.renderable.values.uNear,e.near),o.updateIfChanged(this.renderable.values.uFogFar,e.fogFar),o.updateIfChanged(this.renderable.values.uFogNear,e.fogNear),o.update(this.renderable.values.uFogColor,ge.toVec3Normalized(this.renderable.values.uFogColor.ref.value,a)),o.updateIfChanged(this.renderable.values.uTransparentBackground,r),this.renderable.values.dOrthographic.ref.value!==d&&(m=!0,o.update(this.renderable.values.dOrthographic,d)),this.renderable.values.dOutlineEnable.ref.value!==u&&(m=!0,o.update(this.renderable.values.dOutlineEnable,u)),this.renderable.values.dShadowEnable.ref.value!==c&&(m=!0,o.update(this.renderable.values.dShadowEnable,c)),this.renderable.values.dOcclusionEnable.ref.value!==p&&(m=!0,o.update(this.renderable.values.dOcclusionEnable,p));let g=t.opacityAverage<1;this.renderable.values.dBlendTransparency.ref.value!==g&&(m=!0,o.update(this.renderable.values.dBlendTransparency,g)),m&&this.renderable.update();let{gl:x,state:y}=this.webgl;y.enable(x.SCISSOR_TEST),y.disable(x.BLEND),y.disable(x.DEPTH_TEST),y.depthMask(!1)}setOcclusionOffset(e,t){this.occlusionOffset[0]=e,this.occlusionOffset[1]=t,o.update(this.renderable.values.uOcclusionOffset,T.set(this.renderable.values.uOcclusionOffset.ref.value,e,t))}setTransparentBackground(e){this.transparentBackground=e}render(e,t,r,a,n,i,l,m,d=!1){k&&this.webgl.timer.mark("PostprocessingPass.render"),this.updateState(e,t,a,n,i,l,m),this.renderable.values.dBloomEnable.ref.value!==d&&(o.update(this.renderable.values.dBloomEnable,d),this.renderable.update());let u=this.background.isEnabled(i)||d&&!this.transparentBackground,{gl:c,state:p}=this.webgl,{x:g,y:x,width:y,height:S}=e.viewport;i.occlusion.name==="on"&&this.occlusionOffset[0]===0&&this.occlusionOffset[1]===0&&this.ssao.render(e),p.viewport(g,x,y,S),p.scissor(g,x,y,S),i.outline.name==="on"&&this.outline.render(),i.shadow.name==="on"&&this.shadow.render(),r?this.webgl.bindDrawingBuffer():this.target.bind(),this.background.update(e,i.background),this.background.clear(i.background,this.transparentBackground,n),this.background.render(i.background),u&&(p.enable(c.BLEND),p.blendFuncSeparate(c.ONE,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA)),this.renderable.render(),k&&this.webgl.timer.markEnd("PostprocessingPass.render")}},vr=class{static isEnabled(e){return e.enabled&&(e.antialiasing.name!=="off"||e.sharpening.name!=="off")}constructor(e,t,r,a="nearest"){this.target=e.createRenderTarget(t,r,"none","uint8",a),this.internalTarget=e.createRenderTarget(t,r,"none"),this.fxaa=new $a(e,this.target.texture),this.smaa=new eo(e,this.target.texture),this.cas=new ro(e,this.target.texture)}getByteCount(){return this.target.getByteCount()+this.internalTarget.getByteCount()+this.smaa.getByteCount()}setSize(e,t){let r=this.target.texture.getWidth(),a=this.target.texture.getHeight();(e!==r||t!==a)&&(this.target.setSize(e,t),this.internalTarget.setSize(e,t),this.fxaa.setSize(e,t),this.smaa.supported&&this.smaa.setSize(e,t),this.cas.setSize(e,t))}_renderFxaa(e,t,r,a){a.antialiasing.name==="fxaa"&&(this.fxaa.update(t,a.antialiasing.params),this.fxaa.render(e.viewport,r))}_renderSmaa(e,t,r,a){a.antialiasing.name==="smaa"&&(this.smaa.update(t,a.antialiasing.params),this.smaa.render(e.viewport,r))}_renderAntialiasing(e,t,r,a){a.antialiasing.name==="fxaa"?this._renderFxaa(e,t,r,a):a.antialiasing.name==="smaa"&&this._renderSmaa(e,t,r,a)}_renderCas(e,t,r,a){a.sharpening.name==="on"&&(a.antialiasing.name!=="off"&&(t=this.internalTarget.texture),this.cas.update(t,a.sharpening.params),this.cas.render(e.viewport,r))}renderAntialiasingOnly(e,t,r,a){return a.antialiasing.name==="off"||a.antialiasing.name==="smaa"&&!this.smaa.supported?!1:(this._renderAntialiasing(e,t,r,a),!0)}render(e,t,r,a){if(a.antialiasing.name==="off"&&a.sharpening.name==="off")return;if(a.antialiasing.name==="smaa"&&!this.smaa.supported){console.error('SMAA not supported, missing "HTMLImageElement"');return}let n=r===!0?void 0:r===!1?this.target:r;a.sharpening.name==="off"?this._renderAntialiasing(e,t,n,a):a.antialiasing.name==="off"?this._renderCas(e,t,n,a):(this._renderAntialiasing(e,t,this.internalTarget,a),this._renderCas(e,t,n,a))}};var Jn=`
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
`;var $n=`
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
`;var es=`
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
`;var ts=[[[0,0]],[[0,0],[-4,-4]],[[0,0],[6,-2],[-6,2],[2,6]],[[0,0],[-1,3],[5,1],[-3,-5],[-5,5],[-7,-1],[3,7],[7,-7]],[[0,0],[-1,-3],[-3,2],[4,-1],[-5,-2],[2,5],[5,3],[3,-5],[-2,6],[0,-7],[-4,-6],[-6,4],[-8,0],[7,-4],[6,7],[-7,-8]],[[0,0],[-7,-5],[-3,-5],[-5,-4],[-1,-4],[-2,-2],[-6,-1],[-4,0],[-7,1],[-1,2],[-6,3],[-3,3],[-7,6],[-3,6],[-5,7],[-1,7],[5,-7],[1,-6],[6,-5],[4,-4],[2,-3],[7,-2],[1,-1],[4,-1],[2,1],[6,2],[0,4],[4,4],[2,5],[7,5],[5,6],[3,7]]];ts.forEach(s=>{s.forEach(e=>{e[0]*=.0625,e[1]*=.0625})});function Nr(s){return ts[Math.max(0,Math.min(s,5))]}function no(s){return Math.pow(2,Math.max(0,s-2))}function Hr(s,e){let{width:t,height:r}=s.viewport;s.viewOffset.enabled=!0,_e.setViewOffset(s.viewOffset,t,r,e[0],e[1],t,r),s.update()}function qr(s){s.viewOffset.enabled=!1,s.update()}var so={enabled:h.Boolean(!0),highlightEdgeColor:h.Color(ge.darken(ge.fromNormalizedRgb(1,.4,.6),1)),selectEdgeColor:h.Color(ge.darken(ge.fromNormalizedRgb(.2,1,.1),1)),edgeScale:h.Numeric(1,{min:1,max:3,step:.1},{description:"Thickness of the edge."}),highlightEdgeStrength:h.Numeric(1,{min:0,max:1,step:.1}),selectEdgeStrength:h.Numeric(1,{min:0,max:1,step:.1}),ghostEdgeStrength:h.Numeric(.3,{min:0,max:1,step:.1},{description:"Opacity of the hidden edges that are covered by other geometry. When set to 1 and not dimming, one less geometry render pass is done, but hidden parts are then also tinted."}),innerEdgeFactor:h.Numeric(1.5,{min:0,max:3,step:.1},{description:"Factor to multiply the inner edge color with - for added contrast."})},Gr=[[0,0]];function oa(s,e){return s.colorMarker&&!e.enabled}var jr=class s{constructor(e,t,r){this.webgl=e;this.antialiasing=null;this.dim=null;this.offsets=Gr;this.sampleCount=0;this.base=void 0;this.baseShading=null;let{colorBufferFloat:a,textureFloat:n,colorBufferHalfFloat:i,textureHalfFloat:l}=e.extensions;this.depthTarget=e.createRenderTarget(t,r,"depth-stencil","uint8","nearest"),this.maskTarget=e.createRenderTarget(t,r,"depth-stencil","uint8","linear"),this.edgesTarget=e.createRenderTarget(t,r);let m=i&&l?"fp16":a&&n?"float32":"uint8";this.layerTarget=e.createRenderTarget(t,r,"none",m),this.edge=bu(e,this.maskTarget.texture),this.overlay=Cu(e,this.edgesTarget.texture,this.maskTarget.texture),this.composite=zt(e,this.layerTarget.texture)}static isEnabled(e){return e.enabled}static hasMarking(e,t){return s.isEnabled(t.marking)&&e.markerAverage>0}getByteCount(){let e=this.dim?this.dim.target.getByteCount()+this.dim.aaTarget.getByteCount():0;return this.depthTarget.getByteCount()+this.maskTarget.getByteCount()+this.edgesTarget.getByteCount()+this.layerTarget.getByteCount()+(this.antialiasing?.getByteCount()??0)+e}setEdgeState(e){let{gl:t,state:r}=this.webgl;r.enable(t.SCISSOR_TEST),r.enable(t.BLEND),r.blendFunc(t.ONE,t.ONE),r.blendEquation(t.FUNC_ADD),r.disable(t.DEPTH_TEST),r.depthMask(!1);let{x:a,y:n,width:i,height:l}=e;r.viewport(a,n,i,l),r.scissor(a,n,i,l),r.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT)}setViewport(e){let{x:t,y:r,width:a,height:n}=e;this.webgl.state.viewport(t,r,a,n),this.webgl.state.scissor(t,r,a,n)}setSize(e,t){let r=this.depthTarget.getWidth(),a=this.depthTarget.getHeight();(e!==r||t!==a)&&(this.depthTarget.setSize(e,t),this.maskTarget.setSize(e,t),this.edgesTarget.setSize(e,t),this.layerTarget.setSize(e,t),this.antialiasing?.setSize(e,t),this.dim&&(this.dim.target.setSize(e,t),this.dim.aaTarget.setSize(e,t),o.update(this.dim.renderable.values.uTexSizeInv,T.set(this.dim.renderable.values.uTexSizeInv.ref.value,1/e,1/t))),this.sampleCount=0,this.invalidate(),o.update(this.edge.values.uTexSizeInv,T.set(this.edge.values.uTexSizeInv.ref.value,1/e,1/t)),o.update(this.overlay.values.uTexSizeInv,T.set(this.overlay.values.uTexSizeInv.ref.value,1/e,1/t)),o.update(this.composite.values.uTexSize,T.set(this.composite.values.uTexSize.ref.value,e,t)))}update(e,t,r,a,n,i){let{highlightEdgeColor:l,selectEdgeColor:m,edgeScale:d,innerEdgeFactor:u,ghostEdgeStrength:c,highlightEdgeStrength:p,selectEdgeStrength:g}=e.marking,{values:x}=this.edge;o.updateIfChanged(x.uEdgeScale,Math.max(1,d*this.webgl.pixelRatio));let{values:y}=this.overlay;o.update(y.uHighlightEdgeColor,ge.toVec3Normalized(y.uHighlightEdgeColor.ref.value,l)),o.update(y.uSelectEdgeColor,ge.toVec3Normalized(y.uSelectEdgeColor.ref.value,m)),o.updateIfChanged(y.uInnerEdgeFactor,u),o.updateIfChanged(y.uGhostEdgeStrength,c),o.updateIfChanged(y.uDepthTest,a),o.updateIfChanged(y.uHighlightEdgeStrength,p),o.updateIfChanged(y.uSelectEdgeStrength,g);let{colorMarker:S,highlightColor:P,selectColor:D,highlightStrength:A,selectStrength:M,dimColor:q,dimStrength:N,backgroundColor:L}=t,G=S&&!oa(t,e.marking);o.update(y.uHighlightFillColor,ge.toVec3Normalized(y.uHighlightFillColor.ref.value,P)),o.update(y.uSelectFillColor,ge.toVec3Normalized(y.uSelectFillColor.ref.value,D)),o.updateIfChanged(y.uHighlightFillStrength,G?A:0),o.updateIfChanged(y.uSelectFillStrength,G?M:0),o.update(y.uDimColor,ge.toVec3Normalized(y.uDimColor.ref.value,q)),o.updateIfChanged(y.uDimStrength,r?N:0);let H=e.postprocessing.occlusion,j=!(r||G&&(A>0||M>0))||!n?"off":n.name==="traced"?"traced":H.name==="on"?"ssao":"off",le=!1;y.dMarkingShading.ref.value!==j&&(o.update(y.dMarkingShading,j),le=!0),n?.name==="ssao"&&y.tSsaoDepth.ref.value!==n.ssao&&(o.update(y.tSsaoDepth,n.ssao),le=!0),n?.name==="traced"&&(y.tBase.ref.value!==i||y.tShaded.ref.value!==n.shaded)&&(o.update(y.tBase,i),o.update(y.tShaded,n.shaded),le=!0),le&&this.overlay.update(),j==="ssao"&&H.name==="on"&&o.update(y.uOcclusionColor,ge.toVec3Normalized(y.uOcclusionColor.ref.value,H.params.color)),j!=="off"&&(o.update(y.uFogColor,ge.toVec3Normalized(y.uFogColor.ref.value,L)),o.updateIfChanged(y.uTransparentBackground,e.transparentBackground))}invalidate(){this.base=void 0,this.baseShading=null}get needsMoreSamples(){return!!this.base&&this.sampleCount>0&&this.sampleCount<this.offsets.length}present(e,t,r){let{base:a,toDrawingBuffer:n,shading:i}=r,{viewport:l}=e.camera,m=this.updateLayer(e,t,r);n?this.copyToDrawingBuffer(a,l):m&&a.bind(),m&&this.compositeLayer(l),n&&!(e.camera instanceof Tt)?(this.base=a,this.baseShading=i):this.invalidate()}redraw(e,t,r,a,n){return this.base?(k&&this.webgl.timer.mark("MarkingPass.redraw"),this.present(e,t,{base:this.base,toDrawingBuffer:!0,offsets:r,restart:a,samples:n,shading:this.baseShading}),this.webgl.gl.flush(),k&&this.webgl.timer.markEnd("MarkingPass.redraw"),!0):!1}updateLayer(e,t,r){let{base:a,offsets:n,restart:i,samples:l,shading:m}=r,{renderer:d,camera:u,scene:c,frame:p}=e;if(u instanceof Tt||u.disabled||!s.hasMarking(c,t))return this.sampleCount=0,!1;(i||n!==this.offsets)&&(this.offsets=n,this.sampleCount=0);let{colorMarker:g,dimStrength:x}=d.props,y=g&&x>0&&c.markerAverage<1,S=t.marking.ghostEdgeStrength<1||y,P=Math.min(this.sampleCount+l,n.length);if(this.sampleCount>=P)return m?.name==="traced"&&n.length===1&&(this.update(t,d.props,y,S,m,a.texture),this.renderOverlay(e.camera.viewport,1)),!0;k&&this.webgl.timer.mark("MarkingPass.updateLayer");let D=n.length>1&&u instanceof _e,{x:A,y:M,width:q,height:N}=u.viewport;for(d.setDrawingBufferSize(this.maskTarget.getWidth(),this.maskTarget.getHeight()),d.setPixelRatio(this.webgl.pixelRatio),d.setViewport(A,M,q,N),this.update(t,d.props,y,S,m,a.texture);this.sampleCount<P;++this.sampleCount){let L=n[this.sampleCount];D&&Hr(u,L),d.update(u,c,p),S&&(this.depthTarget.bind(),d.clear(!1,!0),c.markerAverage!==1&&d.renderMarkingDepth(c.primitives,u)),this.maskTarget.bind(),d.clear(!1,!0),d.renderMarkingMask(c.primitives,u,S?this.depthTarget.texture:null),o.update(this.overlay.values.uOcclusionOffset,T.set(this.overlay.values.uOcclusionOffset.ref.value,D?L[0]/q:0,D?L[1]/N:0)),this.renderSample(u,t.postprocessing,1/(this.sampleCount+1),y)}return D&&qr(u),k&&this.webgl.timer.markEnd("MarkingPass.updateLayer"),!0}getAntialiasing(e){return!e.enabled||e.antialiasing.name==="off"?null:(this.antialiasing||(this.antialiasing=new vr(this.webgl,this.maskTarget.getWidth(),this.maskTarget.getHeight(),"linear")),this.antialiasing)}antialias(e,t,r,a){return this.getAntialiasing(t)?.renderAntialiasingOnly(e,r.texture,a,t)?a.texture:r.texture}getDim(){if(!this.dim){let e=this.maskTarget.getWidth(),t=this.maskTarget.getHeight();this.dim={target:this.webgl.createRenderTarget(e,t,"none","uint8","linear"),aaTarget:this.webgl.createRenderTarget(e,t,"none"),renderable:xu(this.webgl,this.depthTarget.texture,this.maskTarget.texture)}}return this.dim}renderDim(e,t){let{gl:r,state:a}=this.webgl,{target:n,aaTarget:i,renderable:l}=this.getDim(),{values:m}=l;return o.updateIfChanged(m.uIsOrtho,e.state.mode==="orthographic"?1:0),o.updateIfChanged(m.uNear,e.near),o.updateIfChanged(m.uFar,e.far),o.updateIfChanged(m.uFogNear,e.fogNear),o.updateIfChanged(m.uFogFar,e.fogFar),n.bind(),this.setViewport(e.viewport),a.enable(r.SCISSOR_TEST),a.disable(r.BLEND),a.disable(r.DEPTH_TEST),a.depthMask(!1),a.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),l.render(),this.antialias(e,t,n,i)}renderSample(e,t,r,a){k&&this.webgl.timer.mark("MarkingPass.renderSample");let n=a?this.renderDim(e,t):this.maskTarget.texture,i=this.getAntialiasing(t),l=i?this.antialias(e,t,this.maskTarget,i.target):this.maskTarget.texture;this.edge.values.tMaskTexture.ref.value!==l&&(o.update(this.edge.values.tMaskTexture,l),this.edge.update(),o.update(this.overlay.values.tMaskTexture,l),this.overlay.update()),this.overlay.values.tDimTexture.ref.value!==n&&(o.update(this.overlay.values.tDimTexture,n),this.overlay.update());let m=e.viewport;this.edgesTarget.bind(),this.setEdgeState(m),this.edge.render(),this.renderOverlay(m,r),k&&this.webgl.timer.markEnd("MarkingPass.renderSample")}renderOverlay(e,t){let{gl:r,state:a}=this.webgl;this.layerTarget.bind(),this.setViewport(e),a.enable(r.SCISSOR_TEST),a.enable(r.BLEND),a.blendColor(0,0,0,t),a.blendFunc(r.CONSTANT_ALPHA,r.ONE_MINUS_CONSTANT_ALPHA),a.blendEquation(r.FUNC_ADD),this.overlay.render()}compositeLayer(e){let{gl:t,state:r}=this.webgl;r.enable(t.SCISSOR_TEST),r.enable(t.BLEND),r.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),r.blendEquation(t.FUNC_ADD),r.disable(t.DEPTH_TEST),r.depthMask(!1),this.setViewport(e),this.composite.render()}copyToDrawingBuffer(e,t){let{gl:r,state:a}=this.webgl,n=zi(this.webgl,e.texture);this.webgl.bindDrawingBuffer(),a.enable(r.SCISSOR_TEST),a.disable(r.BLEND),a.disable(r.DEPTH_TEST),a.depthMask(!1),this.setViewport(t),n.render()}},hu={...De,tMaskTexture:K("texture","rgba","ubyte","linear"),uTexSizeInv:C("v2"),uEdgeScale:C("f")},gu=Se("edge",Fe,$n);function bu(s,e){let t=e.getWidth(),r=e.getHeight(),a={...ke,tMaskTexture:o.create(e),uTexSizeInv:o.create(T.create(1/t,1/r)),uEdgeScale:o.create(1)},n={...hu},i=Ce(s,"triangles",gu,n,a);return Te(i,a)}var yu={...De,tDepthTexture:K("texture","rgba","ubyte","nearest"),tMaskTexture:K("texture","rgba","ubyte","linear"),uTexSizeInv:C("v2"),uIsOrtho:C("f"),uNear:C("f"),uFar:C("f"),uFogNear:C("f"),uFogFar:C("f")},vu=Se("dim",Fe,es);function xu(s,e,t){let r=t.getWidth(),a=t.getHeight(),n={...ke,tDepthTexture:o.create(e),tMaskTexture:o.create(t),uTexSizeInv:o.create(T.create(1/r,1/a)),uIsOrtho:o.create(0),uNear:o.create(1),uFar:o.create(1e4),uFogNear:o.create(1),uFogFar:o.create(1e4)},i={...yu},l=Ce(s,"triangles",vu,i,n);return Te(l,n)}var Tu={...De,tEdgeTexture:K("texture","rgba","ubyte","linear"),tMaskTexture:K("texture","rgba","ubyte","linear"),tDimTexture:K("texture","rgba","ubyte","linear"),uTexSizeInv:C("v2"),uHighlightEdgeColor:C("v3"),uSelectEdgeColor:C("v3"),uHighlightEdgeStrength:C("f"),uSelectEdgeStrength:C("f"),uGhostEdgeStrength:C("f"),uDepthTest:C("b"),uInnerEdgeFactor:C("f"),uHighlightFillColor:C("v3"),uSelectFillColor:C("v3"),uHighlightFillStrength:C("f"),uSelectFillStrength:C("f"),uDimColor:C("v3"),uDimStrength:C("f"),tSsaoDepth:K("texture","rgba","ubyte","linear"),uOcclusionColor:C("v3"),uFogColor:C("v3"),uTransparentBackground:C("b"),uOcclusionOffset:C("v2"),tBase:K("texture","rgba","ubyte","nearest"),tShaded:K("texture","rgba","ubyte","nearest"),dMarkingShading:ie("string",["off","ssao","traced"])},Su=Se("overlay",Fe,Jn);function Cu(s,e,t){let r=e.getWidth(),a=e.getHeight(),n={...ke,tEdgeTexture:o.create(e),tMaskTexture:o.create(t),tDimTexture:o.create(t),uTexSizeInv:o.create(T.create(1/r,1/a)),uHighlightEdgeColor:o.create(b()),uSelectEdgeColor:o.create(b()),uHighlightEdgeStrength:o.create(1),uSelectEdgeStrength:o.create(1),uGhostEdgeStrength:o.create(0),uDepthTest:o.create(!1),uInnerEdgeFactor:o.create(0),uHighlightFillColor:o.create(b()),uSelectFillColor:o.create(b()),uHighlightFillStrength:o.create(0),uSelectFillStrength:o.create(0),uDimColor:o.create(b()),uDimStrength:o.create(0),tSsaoDepth:o.create(t),uOcclusionColor:o.create(b()),uFogColor:o.create(b()),uTransparentBackground:o.create(!1),uOcclusionOffset:o.create(T()),tBase:o.create(t),tShaded:o.create(t),dMarkingShading:o.create("off")},i={...Tu},l=Ce(s,"triangles",Su,i,n);return Te(l,n)}var rs=`
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
`;var as=`
precision highp float;
precision highp sampler2D;

uniform sampler2D tColor;
uniform vec2 uTexSize;
uniform float uWeight;

void main() {
    vec2 coords = gl_FragCoord.xy / uTexSize;
    gl_FragColor = texture2D(tColor, coords) * uWeight;
}
`;var os={rendersPerFrame:h.Interval([1,16],{min:1,max:64,step:1},{description:"Number of rays per pixel each frame. May be adjusted to reach targetFps but will stay within given interval."}),targetFps:h.Numeric(30,{min:0,max:120,step:.1},{description:"Target FPS per frame. If observed FPS is lower or higher, some parameters may get adjusted."}),steps:h.Numeric(32,{min:1,max:1024,step:1}),refineSteps:h.Numeric(4,{min:0,max:8,step:1},{description:"Number of refine steps per ray hit. May be lower to reach targetFps."}),rayDistance:h.Numeric(256,{min:1,max:8192,step:1},{description:"Maximum distance a ray can travel (in world units)."}),thicknessMode:h.Select("auto",h.arrayToOptions(["auto","fixed"])),minThickness:h.Numeric(.5,{min:.1,max:16,step:.1},{hideIf:s=>s.thicknessMode==="fixed"}),thicknessFactor:h.Numeric(1,{min:.1,max:2,step:.05},{hideIf:s=>s.thicknessMode==="fixed"}),thickness:h.Numeric(4,{min:.1,max:512,step:.1},{hideIf:s=>s.thicknessMode==="auto"}),bounces:h.Numeric(4,{min:1,max:32,step:1},{description:"Number of bounces for each ray."}),shadowEnable:h.Boolean(!1),shadowSoftness:h.Numeric(.1,{min:.01,max:1,step:.01}),shadowThickness:h.Numeric(.5,{min:0,max:32,step:.1},{description:"Thickness of the shadow casting geometry. Set to 0.0 for automatic estimation."})},lo=class{constructor(e,t){this.webgl=e;this.drawPass=t;this.clearAdjustedProps=!0;this.prevTime=0;this.currTime=0;this.rendersPerFrame=1;this.refineSteps=1;this.steps=16;let{extensions:{drawBuffers:r,colorBufferHalfFloat:a,textureHalfFloat:n},resources:i,isWebGL2:l}=e,{depthTextureOpaque:m}=t,d=m.getWidth(),u=m.getHeight();l?(this.shadedTextureOpaque=i.texture("image-uint8","rgba","ubyte","nearest"),this.shadedTextureOpaque.define(d,u),this.normalTextureOpaque=a&&n?i.texture("image-float16","rgba","fp16","nearest"):i.texture("image-float32","rgba","float","nearest"),this.normalTextureOpaque.define(d,u),this.colorTextureOpaque=i.texture("image-uint8","rgba","ubyte","nearest"),this.colorTextureOpaque.define(d,u)):(this.shadedTextureOpaque=i.texture("image-float32","rgba","float","nearest"),this.shadedTextureOpaque.define(d,u),this.normalTextureOpaque=i.texture("image-float32","rgba","float","nearest"),this.normalTextureOpaque.define(d,u),this.colorTextureOpaque=i.texture("image-float32","rgba","float","nearest"),this.colorTextureOpaque.define(d,u)),this.framebuffer=i.framebuffer(),this.framebuffer.bind(),r.drawBuffers([r.COLOR_ATTACHMENT0,r.COLOR_ATTACHMENT1,r.COLOR_ATTACHMENT2]),this.shadedTextureOpaque.attachFramebuffer(this.framebuffer,"color0"),this.normalTextureOpaque.attachFramebuffer(this.framebuffer,"color1"),this.colorTextureOpaque.attachFramebuffer(this.framebuffer,"color2"),this.thicknessTarget=e.createRenderTarget(d,u,"depth-stencil","uint8","nearest"),this.holdTarget=e.createRenderTarget(d,u,"none","float32"),this.accumulateTarget=e.createRenderTarget(d,u,"none","float32"),this.composeTarget=e.createRenderTarget(d,u,"none","uint8","linear"),this.traceRenderable=Du(e,this.colorTextureOpaque,this.normalTextureOpaque,this.shadedTextureOpaque,this.thicknessTarget.texture,this.accumulateTarget.texture,this.drawPass.depthTextureOpaque),this.accumulateRenderable=Eu(e,this.holdTarget.texture)}getByteCount(){return this.thicknessTarget.getByteCount()+this.holdTarget.getByteCount()+this.accumulateTarget.getByteCount()+this.composeTarget.getByteCount()+this.colorTextureOpaque.getByteCount()+this.normalTextureOpaque.getByteCount()+this.shadedTextureOpaque.getByteCount()}renderInput(e,t,r,a){k&&this.webgl.timer.mark("TracePass.renderInput");let{gl:n,state:i}=this.webgl;this.framebuffer.bind(),this.drawPass.depthTextureOpaque.attachFramebuffer(this.framebuffer,"depth"),e.clear(!0),e.renderTracing(r.primitives,t),a.thicknessMode==="auto"&&(this.thicknessTarget.bind(),i.clearColor(0,0,0,0),i.clearDepth(0),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),e.renderDepthOpaqueBack(r.primitives,t),i.clearDepth(1)),k&&this.webgl.timer.markEnd("TracePass.renderInput")}setSize(e,t){let r=this.composeTarget.getWidth(),a=this.composeTarget.getHeight();(e!==r||t!==a)&&(this.thicknessTarget.setSize(e,t),this.holdTarget.setSize(e,t),this.accumulateTarget.setSize(e,t),this.composeTarget.setSize(e,t),this.colorTextureOpaque.define(e,t),this.normalTextureOpaque.define(e,t),this.shadedTextureOpaque.define(e,t),o.update(this.traceRenderable.values.uTexSize,T.set(this.traceRenderable.values.uTexSize.ref.value,e,t)),o.update(this.accumulateRenderable.values.uTexSize,T.set(this.accumulateRenderable.values.uTexSize.ref.value,e,t)))}reset(){let{drawBuffers:e}=this.webgl.extensions;this.framebuffer.bind(),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1,e.COLOR_ATTACHMENT2]),this.shadedTextureOpaque.attachFramebuffer(this.framebuffer,"color0"),this.normalTextureOpaque.attachFramebuffer(this.framebuffer,"color1"),this.colorTextureOpaque.attachFramebuffer(this.framebuffer,"color2"),this.restart(!0)}restart(e=!1){let{gl:t,state:r}=this.webgl;this.accumulateTarget.bind(),r.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),this.composeTarget.bind(),r.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),e&&(this.prevTime=0,this.currTime=0,this.clearAdjustedProps=!0)}increaseAdjustedProps(e){this.steps+=1,this.steps>e.steps&&(this.refineSteps+=1),this.refineSteps>e.refineSteps&&(this.rendersPerFrame+=1)}decreaseAdjustedProps(e){let t=Math.min(1,e.refineSteps);this.rendersPerFrame-=1,this.rendersPerFrame<1&&(this.refineSteps-=1),this.refineSteps<t&&(this.steps-=1)}getAdjustedProps(e,t){this.currTime=_t();let r=Math.min(1,e.refineSteps),a=Math.round(e.steps/2);if(this.clearAdjustedProps&&(this.rendersPerFrame=e.rendersPerFrame[0],this.refineSteps=r,this.steps=a,this.clearAdjustedProps=!1),t>0){let n=1e3/e.targetFps,i=this.currTime-this.prevTime,l=Math.round(i/n);if(l>=2)for(;l>0;)this.decreaseAdjustedProps(e),l-=1;else i<n?this.increaseAdjustedProps(e):i>n+.5&&this.decreaseAdjustedProps(e)}return this.prevTime=this.currTime,this.rendersPerFrame=mr(this.rendersPerFrame,e.rendersPerFrame[0],e.rendersPerFrame[1]),this.refineSteps=mr(this.refineSteps,r,e.refineSteps),this.steps=mr(this.steps,a,e.steps),{rendersPerFrame:t===0?Math.ceil(this.rendersPerFrame/2):this.rendersPerFrame,refineSteps:t===0?r:this.refineSteps,steps:t===0?a:this.steps}}render(e,t,r,a,n){let{rendersPerFrame:i,refineSteps:l,steps:m}=this.getAdjustedProps(r,a);k&&this.webgl.timer.mark("TracePass.render",{note:`${i} rendersPerFrame, ${l} refineSteps, ${m} steps`});let{renderer:d,camera:u,scene:c,frame:p}=e,{gl:g,state:x}=this.webgl,{x:y,y:S,width:P,height:D}=u.viewport;(a===0||n)&&(d.setTransparentBackground(t),d.setDrawingBufferSize(this.composeTarget.getWidth(),this.composeTarget.getHeight()),d.setPixelRatio(this.webgl.pixelRatio),d.setViewport(y,S,P,D),d.update(u,c,p),this.renderInput(d,u,c,r)),x.disable(g.BLEND),x.disable(g.DEPTH_TEST),x.disable(g.CULL_FACE),x.depthMask(!1),x.viewport(y,S,P,D),x.scissor(y,S,P,D);let A=V.identity();V.invert(A,u.projection);let M=u.state.mode==="orthographic"?1:0,[q,N]=this.traceRenderable.values.uTexSize.ref.value,L=u.viewport,G=b();b.scale(G,ge.toArrayNormalized(d.props.ambientColor,G,0),d.props.ambientIntensity),this.holdTarget.bind();let H=!1;o.update(this.traceRenderable.values.uFrameNo,a),this.traceRenderable.values.dRendersPerFrame.ref.value!==i&&(o.update(this.traceRenderable.values.dRendersPerFrame,i),H=!0),o.update(this.traceRenderable.values.uProjection,u.projection),o.update(this.traceRenderable.values.uInvProjection,A),Ne.set(this.traceRenderable.values.uBounds.ref.value,L.x/q,L.y/N,(L.x+L.width)/q,(L.y+L.height)/N),o.update(this.traceRenderable.values.uBounds,this.traceRenderable.values.uBounds.ref.value),o.updateIfChanged(this.traceRenderable.values.uNear,u.near),o.updateIfChanged(this.traceRenderable.values.uFar,u.far),o.updateIfChanged(this.traceRenderable.values.uFogFar,u.fogFar),o.updateIfChanged(this.traceRenderable.values.uFogNear,u.fogNear),o.update(this.traceRenderable.values.uFogColor,ge.toVec3Normalized(this.traceRenderable.values.uFogColor.ref.value,d.props.backgroundColor)),this.traceRenderable.values.dOrthographic.ref.value!==M&&(o.update(this.traceRenderable.values.dOrthographic,M),H=!0),o.update(this.traceRenderable.values.uLightDirection,d.light.direction),o.update(this.traceRenderable.values.uLightColor,d.light.color),this.traceRenderable.values.dLightCount.ref.value!==d.light.count&&(o.update(this.traceRenderable.values.dLightCount,d.light.count),H=!0),o.update(this.traceRenderable.values.uAmbientColor,G),o.updateIfChanged(this.traceRenderable.values.uExposure,d.props.exposure),this.traceRenderable.values.dBounces.ref.value!==r.bounces&&(o.update(this.traceRenderable.values.dBounces,r.bounces),H=!0),this.traceRenderable.values.dSteps.ref.value!==m&&(o.update(this.traceRenderable.values.dSteps,m),H=!0),this.traceRenderable.values.dRefineSteps.ref.value!==l&&(o.update(this.traceRenderable.values.dRefineSteps,l),H=!0),o.updateIfChanged(this.traceRenderable.values.uRayDistance,r.rayDistance),this.traceRenderable.values.dThicknessMode.ref.value!==r.thicknessMode&&(o.update(this.traceRenderable.values.dThicknessMode,r.thicknessMode),H=!0),o.updateIfChanged(this.traceRenderable.values.uMinThickness,r.minThickness),o.updateIfChanged(this.traceRenderable.values.uThicknessFactor,r.thicknessFactor),o.updateIfChanged(this.traceRenderable.values.uThickness,r.thickness),this.traceRenderable.values.dShadowEnable.ref.value!==r.shadowEnable&&(o.update(this.traceRenderable.values.dShadowEnable,r.shadowEnable),H=!0),o.updateIfChanged(this.traceRenderable.values.uShadowSoftness,r.shadowSoftness),o.updateIfChanged(this.traceRenderable.values.uShadowThickness,r.shadowThickness),H&&this.traceRenderable.update(),k&&this.webgl.timer.mark("TracePass.renderTrace"),this.traceRenderable.render(),k&&this.webgl.timer.markEnd("TracePass.renderTrace"),this.accumulateTarget.bind(),this.accumulateRenderable.render(),k&&this.webgl.timer.markEnd("TracePass.render")}},Pu={...De,tColor:K("texture","rgba","ubyte","nearest"),tNormal:K("texture","rgba","ubyte","nearest"),tShaded:K("texture","rgba","ubyte","nearest"),tThickness:K("texture","rgba","ubyte","nearest"),tAccumulate:K("texture","rgba","ubyte","nearest"),tDepth:K("texture","rgba","ubyte","nearest"),uTexSize:C("v2"),dOrthographic:ie("number"),uNear:C("f"),uFar:C("f"),uFogNear:C("f"),uFogFar:C("f"),uFogColor:C("v3"),uProjection:C("m4"),uInvProjection:C("m4"),uBounds:C("v4"),uLightDirection:C("v3[]"),uLightColor:C("v3[]"),dLightCount:ie("number"),uAmbientColor:C("v3"),uExposure:C("f"),uFrameNo:C("i"),dRendersPerFrame:ie("number"),dBounces:ie("number"),dSteps:ie("number"),dRefineSteps:ie("number"),uRayDistance:C("f"),dThicknessMode:ie("string"),uMinThickness:C("f"),uThicknessFactor:C("f"),uThickness:C("f"),dShadowEnable:ie("boolean"),uShadowSoftness:C("f"),uShadowThickness:C("f")},wu=Se("trace",Fe,rs);function Du(s,e,t,r,a,n,i){let l={...ke,tColor:o.create(e),tNormal:o.create(t),tShaded:o.create(r),tThickness:o.create(a),tAccumulate:o.create(n),tDepth:o.create(i),uTexSize:o.create(T.create(e.getWidth(),e.getHeight())),dOrthographic:o.create(0),uNear:o.create(1),uFar:o.create(1e4),uFogNear:o.create(1e4),uFogFar:o.create(1e4),uFogColor:o.create(b.create(1,1,1)),uProjection:o.create(V.identity()),uInvProjection:o.create(V.identity()),uBounds:o.create(Ne()),uLightDirection:o.create([]),uLightColor:o.create([]),dLightCount:o.create(0),uAmbientColor:o.create(b()),uExposure:o.create(1),uFrameNo:o.create(0),dRendersPerFrame:o.create(1),dBounces:o.create(4),dSteps:o.create(32),dRefineSteps:o.create(4),uRayDistance:o.create(256),dThicknessMode:o.create("auto"),uMinThickness:o.create(.5),uThicknessFactor:o.create(1),uThickness:o.create(4),dShadowEnable:o.create(!1),uShadowSoftness:o.create(.1),uShadowThickness:o.create(.1)},m={...Pu},d=Ce(s,"triangles",wu,m,l);return Te(d,l)}var ku={...De,tColor:K("texture","rgba","ubyte","nearest"),uTexSize:C("v2"),uWeight:C("f")},Ru=Se("accumulate",Fe,as);function Eu(s,e){let t={...ke,tColor:o.create(e),uTexSize:o.create(T.create(e.getWidth(),e.getHeight())),uWeight:o.create(1)},r={...ku},a=Ce(s,"triangles",Ru,r,t);return Te(a,t)}var uo=`
precision highp float;
precision highp sampler2D;

uniform sampler2D tColor;
uniform vec2 uTexSize;
uniform float uWeight;

void main() {
    vec2 coords = gl_FragCoord.xy / uTexSize;
    gl_FragColor = texture2D(tColor, coords) * uWeight;
}
`;var is=!1;function ns(s){let{drawBuffers:e,textureFloat:t,colorBufferFloat:r,depthTexture:a}=s.extensions;if(!t||!r||!a||!e){if(Oe&&!is){let n=[];t||n.push("textureFloat"),r||n.push("colorBufferFloat"),a||n.push("depthTexture"),e||n.push("drawBuffers"),console.log(`Missing "${n.join('", "')}" extensions required for "illumination"`),is=!0}return!1}else return!0}var co={enabled:h.Boolean(!1),maxIterations:h.Numeric(5,{min:0,max:16,step:1},{description:"Maximum number of tracing iterations. Final iteration count is 2^x."}),denoise:h.Boolean(!0),denoiseThreshold:h.Interval([.15,1],{min:0,max:4,step:.01},{description:"Threshold for denoising. Automatically adjusted within given interval based on current iteration."}),ignoreOutline:h.Boolean(!0,{description:"Ignore outline in illumination pass where it is generally not needed for visual clarity. Useful when illumination is often toggled on/off."}),...os},kr=class s{constructor(e,t){this.webgl=e;this.drawPass=t;this._iteration=0;this._supported=!1;this.prevSampleIndex=-1;if(!s.isSupported(e))return;let{colorTarget:r}=t,a=r.getWidth(),n=r.getHeight();this.tracing=new lo(e,this.drawPass),this.markingShading={name:"traced",shaded:this.tracing.shadedTextureOpaque},this.transparentTarget=e.createRenderTarget(a,n,"none","uint8","nearest"),this.outputTarget=e.createRenderTarget(a,n,"none","uint8","linear"),this.copyRenderable=zt(e,this.transparentTarget.texture),this.composeRenderable=Mu(e,this.tracing.accumulateTarget.texture,this.tracing.normalTextureOpaque,this.tracing.colorTextureOpaque,this.drawPass.depthTextureOpaque,this.drawPass.depthTargetTransparent.texture,this.drawPass.postprocessing.outline.target.texture,this.transparentTarget.texture,this.drawPass.postprocessing.ssao.ssaoDepthTexture,this.drawPass.postprocessing.ssao.ssaoDepthTransparentTexture,this.drawPass.postprocessing.bloom.compositeTarget.texture,!1),this.multiSampleComposeTarget=e.createRenderTarget(a,n,"none","float32"),this.multiSampleHoldTarget=e.createRenderTarget(a,n,"none"),this.multiSampleAccumulateTarget=e.createRenderTarget(a,n,"none","float32"),this.multiSampleCompose=Iu(e,this.outputTarget.texture),this._supported=!0}get iteration(){return this._iteration}get colorTarget(){return this._colorTarget}get supported(){return this._supported}getByteCount(){return this._supported?this.tracing.getByteCount()+this.transparentTarget.getByteCount()+this.outputTarget.getByteCount()+this.multiSampleComposeTarget.getByteCount()+this.multiSampleHoldTarget.getByteCount()+this.multiSampleAccumulateTarget.getByteCount():0}getMaxIterations(e){return Math.pow(2,e.maxIterations)}static isSupported(e){return ns(e)}static isEnabled(e,t){return t.enabled&&ns(e)}renderInput(e,t,r,a){k&&this.webgl.timer.mark("IlluminationPass.renderInput");let{gl:n,state:i}=this.webgl,l=r.opacityAverage<1||r.volumes.renderables.length>0;this.transparentTarget.bind(),i.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT);let m=et.isTransparentOutlineEnabled(a.postprocessing)&&!a.illumination.ignoreOutline,d=cr.isEnabled(a.postprocessing),u=et.isTransparentSsaoEnabled(r,a.postprocessing),c=Lt.isEnabled(a.postprocessing);if((m||d||u||c)&&(this.drawPass.depthTargetTransparent.bind(),e.clearDepth(!0)),l){if(this.drawPass.transparency==="wboit")this.drawPass.wboit.bind(),e.renderWboitTransparent(r.primitives,t,this.drawPass.depthTextureOpaque),r.volumes.renderables.length>0&&e.renderWboitTransparent(r.volumes,t,this.drawPass.depthTextureOpaque),this.transparentTarget.bind(),this.drawPass.wboit.render();else if(this.drawPass.transparency==="dpoit"){let p=this.drawPass.dpoit.bind();e.renderDpoitTransparent(r.primitives,t,this.drawPass.depthTextureOpaque,p);for(let g=0,x=a.dpoitIterations;g<x;g++){k&&this.webgl.timer.mark("DpoitPass.layer");let y=this.drawPass.dpoit.bindDualDepthPeeling();e.renderDpoitTransparent(r.primitives,t,this.drawPass.depthTextureOpaque,y),x>1&&(this.transparentTarget.bind(),this.drawPass.dpoit.renderBlendBack()),k&&this.webgl.timer.markEnd("DpoitPass.layer")}this.transparentTarget.bind(),this.drawPass.dpoit.render(),r.volumes.renderables.length>0&&e.renderVolume(r.volumes,t,this.drawPass.depthTextureOpaque)}else this.transparentTarget.bind(),this.drawPass.depthTextureOpaque.attachFramebuffer(this.transparentTarget.framebuffer,"depth"),e.renderBlendedTransparent(r.primitives,t),this.drawPass.depthTextureOpaque.detachFramebuffer(this.transparentTarget.framebuffer,"depth"),r.volumes.renderables.length>0&&e.renderVolume(r.volumes,t,this.drawPass.depthTextureOpaque);(m||d||u||c)&&(this.drawPass.depthTargetTransparent.bind(),r.opacityAverage<1&&e.renderDepthTransparent(r.primitives,t,this.drawPass.depthTextureOpaque)),u&&(this.drawPass.postprocessing.ssao.update(t,r,a.postprocessing.occlusion.params,!0),this.drawPass.postprocessing.ssao.render(t))}this.tracing.composeTarget.bind(),i.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),k&&this.webgl.timer.markEnd("IlluminationPass.renderInput")}hasHelpers(e){return e.debug.isEnabled||e.pointer.isEnabled||e.handle.isEnabled||e.camera.isEnabled}renderHelpers(e){let{renderer:t,camera:r,helper:a,frame:n}=e;if(this.transparentTarget.bind(),a.debug.isEnabled||a.pointer.isEnabled){if(this.drawPass.depthTextureOpaque.attachFramebuffer(this.transparentTarget.framebuffer,"depth"),a.debug.isEnabled){a.debug.syncVisibility();for(let i of a.debug.scenes)t.renderBlended(i,r)}a.pointer.isEnabled&&(a.pointer.setCamera(r),t.update(a.pointer.camera,a.pointer.scene,n),t.renderBlended(a.pointer.scene,a.pointer.camera)),this.drawPass.depthTextureOpaque.detachFramebuffer(this.transparentTarget.framebuffer,"depth")}a.handle.isEnabled&&t.renderBlended(a.handle.scene,r),a.camera.isEnabled&&(a.camera.update(r),t.update(a.camera.camera,a.camera.scene,n),t.renderBlended(a.camera.scene,a.camera.camera))}shouldRender(e){return this._supported&&e.enabled&&this._iteration<this.getMaxIterations(e)}setSize(e,t){if(!this._supported)return;let r=this.outputTarget.getWidth(),a=this.outputTarget.getHeight();(e!==r||t!==a)&&(this.tracing.setSize(e,t),this.transparentTarget.setSize(e,t),this.outputTarget.setSize(e,t),o.update(this.copyRenderable.values.uTexSize,T.set(this.copyRenderable.values.uTexSize.ref.value,e,t)),o.update(this.composeRenderable.values.uTexSize,T.set(this.composeRenderable.values.uTexSize.ref.value,e,t)),this.multiSampleComposeTarget.setSize(e,t),this.multiSampleHoldTarget.setSize(e,t),this.multiSampleAccumulateTarget.setSize(e,t),o.update(this.multiSampleCompose.values.uTexSize,T.set(this.multiSampleCompose.values.uTexSize.ref.value,e,t))),this.drawPass.setSize(e,t)}reset(){this._supported&&(this.tracing.reset(),this._iteration=0,this.prevSampleIndex=-1)}restart(e=!1){this._supported&&(this.tracing.restart(e),this._iteration=0,this.prevSampleIndex=-1)}renderInternal(e,t,r,a){this.shouldRender(t.illumination)&&(k&&this.webgl.timer.mark("IlluminationPass.render",{note:`iteration ${this._iteration+1} of ${this.getMaxIterations(t.illumination)}`}),this.tracing.render(e,t.transparentBackground,t.illumination,this._iteration,a),this.compose(e,t,r,this._iteration===0||a),this._iteration+=1,k&&this.webgl.timer.markEnd("IlluminationPass.render"),this.webgl.gl.flush())}setupRenderer(e,t){let{renderer:r,camera:a,scene:n,frame:i}=e;r.setTransparentBackground(t.transparentBackground),r.setDrawingBufferSize(this.tracing.composeTarget.getWidth(),this.tracing.composeTarget.getHeight()),r.setPixelRatio(this.webgl.pixelRatio);let{x:l,y:m,width:d,height:u}=a.viewport;r.setViewport(l,m,d,u),r.update(a,n,i)}compose(e,t,r,a){let{renderer:n,camera:i,scene:l,frame:m}=e,{gl:d,state:u}=this.webgl,{x:c,y:p,width:g,height:x}=i.viewport;a&&(this.setupRenderer(e,t),this.renderInput(n,i,l,t),this.renderHelpers(e)),u.disable(d.BLEND),u.disable(d.DEPTH_TEST),u.disable(d.CULL_FACE),u.depthMask(!1),u.viewport(c,p,g,x),u.scissor(c,p,g,x);let y=i.state.mode==="orthographic"?1:0,S=vr.isEnabled(t.postprocessing),P=yr.isEnabled(t.postprocessing)&&!t.illumination.ignoreOutline,D=et.isTransparentSsaoEnabled(l,t.postprocessing),A=Lt.isEnabled(t.postprocessing),M=cr.isEnabled(t.postprocessing),q=l.opacityAverage<1||l.volumes.renderables.length>0,N=!1;if(this.composeRenderable.values.dOutlineEnable.ref.value!==P&&(N=!0,o.update(this.composeRenderable.values.dOutlineEnable,P)),P&&t.postprocessing.outline.name==="on"){let{transparentOutline:I,outlineScale:ne}=this.drawPass.postprocessing.outline.update(i,t.postprocessing.outline.params,this.drawPass.depthTargetTransparent.texture,this.drawPass.depthTextureOpaque);this.drawPass.postprocessing.outline.render(),o.update(this.composeRenderable.values.uOutlineColor,ge.toVec3Normalized(this.composeRenderable.values.uOutlineColor.ref.value,t.postprocessing.outline.params.color)),this.composeRenderable.values.dOutlineScale.ref.value!==ne&&(N=!0,o.update(this.composeRenderable.values.dOutlineScale,ne)),this.composeRenderable.values.dTransparentOutline.ref.value!==I&&(N=!0,o.update(this.composeRenderable.values.dTransparentOutline,I))}this.composeRenderable.values.dOcclusionEnable.ref.value!==D&&(N=!0,o.update(this.composeRenderable.values.dOcclusionEnable,D)),D&&t.postprocessing.occlusion.name==="on"&&o.update(this.composeRenderable.values.uOcclusionColor,ge.toVec3Normalized(this.composeRenderable.values.uOcclusionColor.ref.value,t.postprocessing.occlusion.params.color));let L=q||this.hasHelpers(e.helper);this.composeRenderable.values.dBlendTransparency.ref.value!==L&&(N=!0,o.update(this.composeRenderable.values.dBlendTransparency,L)),o.updateIfChanged(this.composeRenderable.values.uNear,i.near),o.updateIfChanged(this.composeRenderable.values.uFar,i.far),o.updateIfChanged(this.composeRenderable.values.uFogFar,i.fogFar),o.updateIfChanged(this.composeRenderable.values.uFogNear,i.fogNear),o.update(this.composeRenderable.values.uFogColor,ge.toVec3Normalized(this.composeRenderable.values.uFogColor.ref.value,n.props.backgroundColor)),this.composeRenderable.values.dOrthographic.ref.value!==y&&(o.update(this.composeRenderable.values.dOrthographic,y),N=!0),n.setDrawingBufferSize(this.tracing.composeTarget.getWidth(),this.tracing.composeTarget.getHeight()),n.setPixelRatio(this.webgl.pixelRatio),n.setViewport(c,p,g,x),n.update(i,l,m);let G=!1;if(A&&t.postprocessing.bloom.name==="on"){let I=t.postprocessing.bloom.params,ne=this.drawPass.postprocessing.bloom,te=I.mode==="emissive";te&&l.emissiveAverage===0||(te&&this.drawPass.renderEmissiveBloom(n,i,l,I.transparency),l.opacityAverage>=1&&(this.drawPass.depthTargetTransparent.bind(),n.clearDepth(!0)),ne.update(this.tracing.shadedTextureOpaque,this.transparentTarget.texture,ne.emissiveTarget.texture,this.drawPass.depthTextureOpaque,this.drawPass.depthTextureTransparent,I,i,!1),ne.render(i.viewport),G=!0)}this.composeRenderable.values.dBloomEnable.ref.value!==G&&(N=!0,o.update(this.composeRenderable.values.dBloomEnable,G)),this.tracing.composeTarget.bind(),this._colorTarget=this.tracing.composeTarget,this.drawPass.postprocessing.background.update(i,t.postprocessing.background),this.drawPass.postprocessing.background.clear(t.postprocessing.background,t.transparentBackground,n.props.backgroundColor),this.drawPass.postprocessing.background.render(t.postprocessing.background);let Z=this.drawPass.postprocessing.background.isEnabled(t.postprocessing)||G&&!t.transparentBackground;o.updateIfChanged(this.composeRenderable.values.uTransparentBackground,t.transparentBackground||Z),this.composeRenderable.values.dDenoise.ref.value!==t.illumination.denoise&&(o.update(this.composeRenderable.values.dDenoise,t.illumination.denoise),N=!0);let j=t.multiSample.mode==="on"?t.illumination.denoiseThreshold[0]:ii(t.illumination.denoiseThreshold[1],t.illumination.denoiseThreshold[0],mr(this.iteration/(this.getMaxIterations(t.illumination)/2),0,1));o.updateIfChanged(this.composeRenderable.values.uDenoiseThreshold,j),N&&this.composeRenderable.update(),Z&&(u.enable(d.BLEND),u.blendFuncSeparate(d.ONE,d.ONE_MINUS_SRC_ALPHA,d.ONE,d.ONE_MINUS_SRC_ALPHA)),this.composeRenderable.render();let le=this.outputTarget;S&&(this.drawPass.antialiasing.render(i,this.tracing.composeTarget.texture,this.outputTarget,t.postprocessing),this._colorTarget=this.outputTarget,le=this.tracing.composeTarget),M&&t.postprocessing.dof.name==="on"&&(this.drawPass.dof.update(i,this._colorTarget.texture,this.drawPass.depthTextureOpaque,this.drawPass.depthTargetTransparent.texture,t.postprocessing.dof.params,l.boundingSphereVisible),this.drawPass.dof.render(i.viewport,le),this._colorTarget=le),!(t.multiSample.mode==="on"&&!r)&&this.drawPass.marking.present(e,t,{base:this._colorTarget,toDrawingBuffer:r,offsets:Gr,restart:a,samples:1,shading:this.markingShading})}renderMultiSample(e,t,r){let{camera:a}=e,{multiSampleCompose:n,multiSampleComposeTarget:i,multiSampleHoldTarget:l,webgl:m}=this,{gl:d,state:u}=m,c=Nr(t.multiSample.sampleLevel),p=this.getMaxIterations(t.illumination),g=Math.min(this._iteration,p),x=Math.floor(g/p*c.length);k&&m.timer.mark("IlluminationPass.renderMultiSample",{note:`sampleIndex ${x+1} of ${c.length}`});let{x:y,y:S,width:P,height:D}=a.viewport,A=1/p;g===0?(this.renderInternal(e,t,!1,!0),o.update(n.values.uWeight,1),o.update(n.values.tColor,this._colorTarget.texture),n.update(),l.bind(),u.disable(d.BLEND),u.disable(d.DEPTH_TEST),u.depthMask(!1),u.viewport(y,S,P,D),u.scissor(y,S,P,D),n.render()):(o.update(n.values.tColor,this._colorTarget.texture),o.update(n.values.uWeight,A),n.update(),Hr(a,c[x]),this.renderInternal(e,t,!1,this.prevSampleIndex!==x),i.bind(),u.enable(d.BLEND),u.blendEquationSeparate(d.FUNC_ADD,d.FUNC_ADD),u.blendFuncSeparate(d.ONE,d.ONE,d.ONE,d.ONE),u.disable(d.DEPTH_TEST),u.depthMask(!1),u.viewport(y,S,P,D),u.scissor(y,S,P,D),g===1&&(u.clearColor(0,0,0,0),d.clear(d.COLOR_BUFFER_BIT)),n.render()),this.prevSampleIndex=x,this.multiSampleAccumulateTarget.bind(),u.viewport(y,S,P,D),u.scissor(y,S,P,D);let M=g*A;M>0&&(o.update(n.values.uWeight,1),o.update(n.values.tColor,i.texture),n.update(),u.disable(d.BLEND),n.render()),M<1&&(o.update(n.values.uWeight,1-M),o.update(n.values.tColor,l.texture),n.update(),M===0?u.disable(d.BLEND):u.enable(d.BLEND),n.render()),r||(u.disable(d.BLEND),this.colorTarget.bind(),this.copyRenderable.values.tColor.ref.value!==this.multiSampleAccumulateTarget.texture&&(o.update(this.copyRenderable.values.tColor,this.multiSampleAccumulateTarget.texture),this.copyRenderable.update()),this.copyRenderable.render()),qr(a);let q=r?this.multiSampleAccumulateTarget:this._colorTarget,N=g===0?1:Math.ceil(c.length/p);this.drawPass.marking.present(e,t,{base:q,toDrawingBuffer:r,offsets:c,restart:g===0,samples:N,shading:this.markingShading}),k&&m.timer.markEnd("IlluminationPass.renderMultiSample")}render(e,t,r){this._supported&&(t.multiSample.mode==="on"?this.renderMultiSample(e,t,r):this.renderInternal(e,t,r,!1))}},Fu={...De,tColor:K("texture","rgba","ubyte","nearest"),tNormal:K("texture","rgba","ubyte","nearest"),tShaded:K("texture","rgba","ubyte","nearest"),tTransparentColor:K("texture","rgba","ubyte","nearest"),dBlendTransparency:ie("boolean"),tSsaoDepth:K("texture","rgba","ubyte","nearest"),tSsaoDepthTransparent:K("texture","rgba","ubyte","nearest"),tDepthOpaque:K("texture","rgba","ubyte","nearest"),tDepthTransparent:K("texture","rgba","ubyte","nearest"),tOutlines:K("texture","rgba","ubyte","nearest"),tBloom:K("texture","rgba","ubyte","linear"),dBloomEnable:ie("boolean"),uTexSize:C("v2"),dDenoise:ie("boolean"),uDenoiseThreshold:C("f"),dOrthographic:ie("number"),uNear:C("f"),uFar:C("f"),uFogNear:C("f"),uFogFar:C("f"),uFogColor:C("v3"),uOutlineColor:C("v3"),uOcclusionColor:C("v3"),uTransparentBackground:C("b"),dOcclusionEnable:ie("boolean"),dOutlineEnable:ie("boolean"),dOutlineScale:ie("number"),dTransparentOutline:ie("boolean")},Bu=Se("compose",Fe,yn);function Mu(s,e,t,r,a,n,i,l,m,d,u,c){let p={...ke,tColor:o.create(e),tNormal:o.create(t),tShaded:o.create(r),tTransparentColor:o.create(l),dBlendTransparency:o.create(!0),tSsaoDepth:o.create(m),tSsaoDepthTransparent:o.create(d),tDepthOpaque:o.create(a),tDepthTransparent:o.create(n),tOutlines:o.create(i),tBloom:o.create(u),dBloomEnable:o.create(!1),uTexSize:o.create(T.create(e.getWidth(),e.getHeight())),dDenoise:o.create(!0),uDenoiseThreshold:o.create(.1),dOrthographic:o.create(0),uNear:o.create(1),uFar:o.create(1e4),uFogNear:o.create(1e4),uFogFar:o.create(1e4),uFogColor:o.create(b.create(1,1,1)),uOutlineColor:o.create(b.create(0,0,0)),uOcclusionColor:o.create(b.create(0,0,0)),uTransparentBackground:o.create(!1),dOcclusionEnable:o.create(!1),dOutlineEnable:o.create(!1),dOutlineScale:o.create(1),dTransparentOutline:o.create(c)},g={...Fu},x=Ce(s,"triangles",Bu,g,p);return Te(x,p)}var Lu={...De,tColor:K("texture","rgba","ubyte","nearest"),uTexSize:C("v2"),uWeight:C("f")},Ou=Se("compose",Fe,uo);function Iu(s,e){let t={...ke,tColor:o.create(e),uTexSize:o.create(T.create(e.getWidth(),e.getHeight())),uWeight:o.create(1)},r={...Lu},a=Ce(s,"triangles",Ou,r,t);return Te(a,t)}var ia=class s{constructor(e,t){this.webgl=e;this.scene=t;this.required=[]}static ensureRequired(e,t,r){let a=new s(e,t);a.updateRequired(r),a.finalizeRequired(!0)}updateRequired(e){this.required.length=0,this.required.push("color"),kr.isEnabled(this.webgl,e.illumination)&&this.required.push("tracing"),jr.isEnabled(e.marking)&&this.scene.markerAverage>0&&this.required.push("marking"),Lt.isEnabled(e.postprocessing)&&this.scene.emissiveAverage>0&&this.required.push("emissive"),(et.isTransparentDepthRequired(this.scene,e.postprocessing)||!this.webgl.extensions.drawBuffers||!this.webgl.extensions.depthTexture||kr.isEnabled(this.webgl,e.illumination))&&this.required.push("depth"),this.webgl.resources.linkPrograms(this.required)}finalizeRequired(e){return this.finalize(this.required,e)}finalize(e,t){return this.webgl.resources.finalizePrograms(e,t)}};var Au=Ze,zu=re.Trigger,ss=re.TriggerKey;function Vu(s){let e=V.getDecomposition(s);return new XRRigidTransform(b.toObj(e.position),Ke.toObj(e.quaternion))}function ls(s,e){let t=b.fromObj(s.transform.position),r=V.fromArray(V(),s.transform.matrix,0),a=V.getDecomposition(r),n=V.fromQuat(V(),a.quaternion),i=b.transformMat4(b(),b.negUnitZ,n),l=fr.create(t,i);return e&&fr.transform(l,l,V.invert(V(),e)),l}var Nu={exit:re([ss("GamepadB")]),togglePassthrough:re([ss("GamepadA")]),gestureScale:re([zu(Au.Flag.Trigger)])},Jo={bindings:Nu},$o={minTargetDistance:h.Numeric(.4,{min:.001,max:1,step:.001}),disablePostprocessing:h.Boolean(!0),resolutionScale:h.Numeric(1,{min:.1,max:2,step:.1}),sceneRadiusInMeters:h.Numeric(.25,{min:.01,max:2,step:.01},{description:"The radius of the scene bounding sphere in meters, used to set the initial camera scale."})},po=class{constructor(e,t,r,a,n,i,l,m={},d={}){this.webgl=e;this.input=t;this.scene=r;this.camera=a;this.stereoCamera=n;this.pointerHelper=i;this.interactionHelper=l;this.togglePassthrough=new He;this.sessionChanged=new He;this.isSupported=new lr(!1);this.xrSession=void 0;this.xrRefSpace=void 0;this.scaleFactor=1;this.prevScale=0;this.prevInput={};this.hit=void 0;this.checkSupported=async()=>{if(!this.xr){this.isSupported.next(!1);return}try{let[e,t]=await Promise.all([this.xr.isSessionSupported("immersive-ar"),this.xr.isSessionSupported("immersive-vr")]);this.isSupported.next(e||t)}catch(e){Oe&&console.warn(e),this.isSupported.next(!1)}};this.props={...h.getDefaultValues($o),...m},this.attribs={...Jo,...d},this.hoverSub=this.interactionHelper.events.hover.subscribe(({position:u})=>{this.hit=u}),this.sessionChangedSub=e.xr.changed.subscribe(async()=>{await this.setSession(e.xr.session),this.sessionChanged.next()}),this.checkSupported(),this.xr?.addEventListener("devicechange",this.checkSupported),this.keyUpSub=t.keyUp.subscribe(({code:u,modifiers:c,key:p})=>{let g=this.attribs.bindings;re.matchKey(g.exit,u,c,p)&&this.end(),re.matchKey(g.togglePassthrough,u,c,p)&&this.togglePassthrough.next()}),this.gestureSub=t.gesture.subscribe(({scale:u,button:c,modifiers:p})=>{let g=this.attribs.bindings;re.match(g.gestureScale,c,p)&&this.setScaleFactor(u)})}get session(){return this.xrSession}get xr(){if(!(typeof navigator>"u"))return navigator.xr}setProps(e){Object.assign(this.props,e)}setAttribs(e){Object.assign(this.attribs,e)}intersect(e,t,r,a){let n=b(),i=ls(a,t);if(Ft.intersectRay3D(n,r,i)){let{height:l}=e.viewport,m=xi(Ne(),n,e.viewport,e.projectionView),d=T.create(Math.floor(m[0]),l-Math.floor(m[1]));return{point:n,screen:d}}}setScaleFactor(e){this.scaleFactor=e}resetScale(){this.scaleFactor=1,this.prevScale=0}update(e){let{xrSession:t,xrRefSpace:r,input:a,camera:n,stereoCamera:i,pointerHelper:l}=this;if(!e||!t||!r)return!1;n.scale=n.scale*this.scaleFactor,this.prevScale=n.scale;let m=b.sub(b(),n.position,n.target);b.scaleAndAdd(n.position,n.position,m,1-this.scaleFactor),this.scaleFactor=1;let d=Vu(n.view),u=r.getOffsetReferenceSpace(d),c=e.getViewerPose(u);if(!c)return!1;let p=e.getViewerPose(r);if(p){let H=Ke.fromObj(p.transform.orientation);V.fromQuat(n.headRotation,H)}let{depthFar:g,depthNear:x,baseLayer:y}=t.renderState;if(!y)return!1;(g!==n.far||x!==n.near)&&t.updateRenderState({depthNear:n.near,depthFar:n.far}),i.update({pose:c,layer:y});let S=i.left,P=b.scale(b(),S.state.target,S.scale),D=V.getTranslation(b(),V.invert(V(),S.view)),A=b.sub(b(),D,P),M=Ft.fromNormalAndCoplanarPoint(Ft(),A,P),q=[],N=[],L=[],G=[];if(t.inputSources)for(let H of t.inputSources){if(H.targetRayMode==="screen"){if(H.gamepad){let{axes:ve}=H.gamepad,{width:we,height:tt}=S.viewport,Ae=(ve[0]+1)/2*we,Ye=(ve[1]+1)/2*tt,qt=S.getRay(fr(),Ae,tt-Ye);G.push({x:Ae,y:Ye,ray:qt})}continue}if(H.targetRayMode!=="tracked-pointer")continue;let{handedness:Z,targetRaySpace:j,gamepad:le}=H;if(!Z)continue;let I=e.getPose(j,r);if(!I)continue;let ne=ls(I,n.view);q.push(ne);let te=ot.scaleNX(ot(),this.scene.boundingSphereVisible,S.scale),qe=b();fr.intersectSphere3D(qe,ne,te)&&N.push(qe);let fe=Ze.create(Ze.Flag.None);le?.buttons[0]?.pressed&&(fe|=Ze.Flag.Primary),le?.buttons[1]?.pressed&&(fe|=Ze.Flag.Secondary),le?.buttons[3]?.pressed&&(fe|=Ze.Flag.Auxilary),le?.buttons[4]?.pressed&&(fe|=Ze.Flag.Forth),le?.buttons[5]?.pressed&&(fe|=Ze.Flag.Five);let ce=Z==="left"?this.prevInput.left:this.prevInput.right,Ee=this.intersect(S,n.view,M,I),he=ce?this.intersect(S,n.view,M,ce.targetRayPose):void 0,[Le,ue]=Ee?.screen??[0,0],[W,E]=he?.screen??[Le,ue],se=T.set(T(),Le-W,ue-E);T.setMagnitude(se,se,Math.min(100,T.magnitude(se)));let[oe,ye]=T.round(se,se);L.push({handedness:Z,buttons:fe,x:Le,y:ue,dx:oe,dy:ye,ray:ne,axes:le?.axes}),Z==="left"?this.prevInput.left={targetRayPose:I}:this.prevInput.right={targetRayPose:I}}else this.prevInput.left=void 0,this.prevInput.right=void 0;return a.updateTrackedPointers(L),a.updateScreenTouches(G),l.ensureEnabled(),l.update(q,N,this.hit),!0}async setSession(e){if(this.xrSession!==e)if(await this.webgl.xr.set(e,{resolutionScale:this.props.resolutionScale}),this.xrSession=this.webgl.xr.session,this.prevInput={},this.hit=void 0,this.xrSession){this.xrRefSpace=await this.xrSession.requestReferenceSpace("local"),this.pointerHelper.setProps({enabled:"on"});let t=this.prevScale;if(t===0){let{radius:r}=this.scene.boundingSphereVisible;t=r?1/r*this.props.sceneRadiusInMeters:.01}this.camera.forceFull=!0,this.camera.scale=t,this.camera.minTargetDistance=this.props.minTargetDistance,this.prevScale=t}else this.xrRefSpace=void 0,V.setZero(this.camera.headRotation),this.pointerHelper.setProps({enabled:"off"}),this.camera.forceFull=!1,this.camera.scale=1,this.camera.minTargetDistance=0}async end(){await this.webgl.xr.end()}async request(){if(!this.xr)return;let e=await this.xr.isSessionSupported("immersive-ar")?await this.xr.requestSession("immersive-ar"):await this.xr.requestSession("immersive-vr");await this.setSession(e)}dispose(){this.hoverSub.unsubscribe(),this.keyUpSub.unsubscribe(),this.gestureSub.unsubscribe(),this.sessionChangedSub.unsubscribe(),this.togglePassthrough.complete(),this.sessionChanged.complete(),this.isSupported.complete(),this.xr?.removeEventListener("devicechange",this.checkSupported)}};var us=`
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
`;var Hu={...De,tPreviousLevel:K("texture","alpha","float","nearest"),uInvSize:C("v2"),uOffset:C("v2")},qu=Se("hi-z",Fe,us);function cs(s,e){let t={...ke,tPreviousLevel:o.create(e),uInvSize:o.create(T()),uOffset:o.create(T())},r={...Hu},a=Ce(s,"triangles",qu,r,t);return Te(a,t)}var ds=new ArrayBuffer(4),wv=new Int32Array(ds),Dv=new Float32Array(ds);var ps=new ArrayBuffer(4),ju=new Int32Array(ps),Gu=new Float32Array(ps);function Wu(s){let e=s<-126?-126:s;return ju[0]=(1<<23)*(e+126.94269504),Gu[0]}function kv(s){return Wu(1.44269504*s)}var ms=new ArrayBuffer(8),Rv=new Int32Array(ms),Ev=new Float32Array(ms);var fs=new ArrayBuffer(4),Uu=new Int32Array(fs),Xu=new Float32Array(fs);function hs(s){return Xu[0]=s,Uu[0]*11920928955078125e-23-126.94269504}var gs=Math.PI/2,Qu=2*Math.PI,Ku=1/(2*Math.PI),Fv=2/Math.PI,_u=4/Math.PI,Zu=4/(Math.PI*Math.PI),Bv=Math.PI/2-2*Math.PI,Yu=.7844448837454894,bs=new ArrayBuffer(16),na=new Int32Array(bs),Ar=new Float32Array(bs);function Ju(s){Ar[0]=.2036393768073031,Ar[1]=.015124940802184232,Ar[2]=-.003222590162557957,Ar[3]=s;let e=na[3]&2147483648;na[3]=na[3]&2147483647;let t=_u*s-Zu*s*Ar[3],r=t*t;return na[0]|=e,na[1]|=e,na[2]^=e,Yu*t+r*(Ar[0]+r*(Ar[1]+r*Ar[2]))}var ys=new ArrayBuffer(8),Mv=new Int32Array(ys),Lv=new Float32Array(ys);function $u(s){let e=s*Ku|0,t=s<0?-.5:.5;return Ju((t+e)*Qu-s)}function Ov(s){return $u(s+gs)}var vs=new ArrayBuffer(4),Iv=new Int32Array(vs),Av=new Float32Array(vs);var ec=Math.PI/4;function tc(s){return ec*s-s*(Math.abs(s)-1)*(.2447+.0663*Math.abs(s))}function zv(s,e){let t=Math.abs(e),r=Math.abs(s),a=Math.max(t,r);return r=Math.min(t,r),t=tc(r/a),t=Math.abs(s)>Math.abs(e)?gs-t:t,t=e<0?Math.PI-t:t,t=s<0?-t:t,t}function Vv(s){return s<0?Math.PI-((s*.124605335+.1570634)*(.99418175+s)+Math.sqrt(2+2*s)):(s*-.124605335+.1570634)*(.99418175-s)+Math.sqrt(2-2*s)}var rc=b.transformMat4,xs=Ne.set,ac=hs;function oc(s,e,t){return e*t/((t-e)*s-t)}function ic(s,e,t){return s*(e-t)-e}function mo(s,e,t,r){return r[11]===-1?oc(s,e,t):ic(s,e,t)}function nc(s,e,t,r){let a=e[0]*t,n=e[1]*t,i=e[2]*t,l=e[2]*e[2]-t*t,m=Math.sqrt(e[0]*e[0]+l),d=(m*e[0]-i)/(m*e[2]+a)*r[0],u=(m*e[0]+i)/(m*e[2]-a)*r[0],c=Math.sqrt(e[1]*e[1]+l),p=(c*e[1]-i)/(c*e[2]+n)*r[5],g=(c*e[1]+i)/(c*e[2]-n)*r[5];return xs(s,u*-.5+.5,p*.5+.5,d*-.5+.5,g*.5+.5)}function sc(s,e,t,r){let a=r[0],n=r[5],i=(e[0]+t)*a,l=(e[0]-t)*a,m=(e[1]+t)*n,d=(e[1]-t)*n;return xs(s,l*.5+.5,m*-.5+.5,i*.5+.5,d*-.5+.5)}function lc(s,e,t,r){return r[11]===-1?nc(s,e,t,r):sc(s,e,t,r)}var ei={enabled:h.Boolean(!1,{description:"Hierarchical Z-buffer occlusion culling. Only available for WebGL2."}),maxFrameLag:h.Numeric(10,{min:1,max:30,step:1},{description:"Maximum number of frames to wait for Z-buffer data."}),minLevel:h.Numeric(3,{min:1,max:10,step:1})},fo=class{constructor(e,t,r,a){this.webgl=e;this.drawPass=t;this.viewport=Me();this.near=0;this.far=0;this.view=V();this.projection=V();this.nextNear=0;this.nextFar=0;this.nextView=V();this.nextProjection=V();this.aabb=Ne();this.vp=b();this.levelData=[];this.sync=null;this.buffer=new Float32Array(0);this.frameLag=0;this.ready=!1;this.isOccluded=e=>{if(!this.supported||!this.props.enabled||!this.ready)return!1;let{vp:t,r}=this.transform(e),{near:a,far:n,projection:i}=this,l=t[2]+r;if(-l<a)return!1;let{aabb:m,w:d,h:u,lod:c}=this.project(t,r);if(c>=this.levelData.length||c<this.props.minLevel)return!1;let{offset:p,size:g}=this.levelData[c],x=m[0]+d/2,y=m[1]+u/2,S=g[0],P=x*S,D=y*S,A=Math.floor(P),M=Math.ceil(D),q=this.tex.getWidth();if(A+1>=S||M+1>=S)return!1;let N=(S-M-1)*q+A+p;if(l>mo(this.buffer[N],a,n,i)||l>mo(this.buffer[N+1],a,n,i))return!1;let L=(S-M+1-1)*q+A+p;return!(l>mo(this.buffer[L],a,n,i)||l>mo(this.buffer[L+1],a,n,i))};this.props={...h.getDefaultValues(ei),...a};let{gl:n,extensions:i}=e;if(!Yt(n)||!i.colorBufferFloat){Oe&&console.log('Missing webgl2 and/or colorBufferFloat support required for "Hi-Z"'),this.supported=!1;return}this.fb=e.resources.framebuffer(),this.tex=e.resources.texture("image-float32","alpha","float","nearest"),this.tex.attachFramebuffer(this.fb,0);let l=n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT),m=n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE);if(l!==n.RED||m!==n.FLOAT){Oe&&console.log('Missing red/float reading support required for "Hi-Z"'),this.supported=!1;return}this.supported=!0,this.buf=e.resources.pixelPack("alpha","float"),this.renderable=cs(e,this.drawPass.depthTextureOpaque),Oe&&r&&this.initDebug(r)}getByteCount(){return this.supported?this.tex.getByteCount()+this.buf.getByteCount()+this.levelData.reduce((e,t)=>e+t.texture.getByteCount(),0):0}clear(){if(!this.supported)return;let{gl:e}=this.webgl;Yt(e)&&(this.sync!==null&&(e.deleteSync(this.sync),this.sync=null),this.frameLag=0,this.ready=!1,this.debug&&(this.debug.rect.style.display="none",this.debug.container.style.display="none"))}render(e){if(!this.supported||!this.props.enabled)return;let{gl:t,state:r}=this.webgl;if(!Yt(t)||this.sync!==null)return;this.nextNear=e.near,this.nextFar=e.far,V.copy(this.nextView,e.view),V.copy(this.nextProjection,e.projection),k&&this.webgl.timer.mark("hi-Z"),r.disable(t.CULL_FACE),r.disable(t.BLEND),r.disable(t.DEPTH_TEST),r.disable(t.SCISSOR_TEST),r.depthMask(!1),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0);let a=this.renderable.values,n=Math.pow(2,Math.ceil(Math.log(Math.max(t.drawingBufferWidth,t.drawingBufferHeight))/Math.log(2))-1);for(let m=0,d=this.levelData.length;m<d;++m){let u=this.levelData[m];u.framebuffer.bind(),m>0?(o.update(a.uInvSize,u.invSize),o.update(a.uOffset,T.set(a.uOffset.ref.value,0,0)),o.update(a.tPreviousLevel,this.levelData[m-1].texture)):(o.update(a.uInvSize,T.set(a.uInvSize.ref.value,1/n,1/n)),o.update(a.uOffset,T.set(a.uOffset.ref.value,this.viewport.x/t.drawingBufferWidth,this.viewport.y/t.drawingBufferHeight)),o.update(a.tPreviousLevel,this.drawPass.depthTextureOpaque)),r.currentRenderItemId=-1,r.viewport(0,0,u.size[0],u.size[1]),t.clear(t.COLOR_BUFFER_BIT),this.renderable.update(),this.renderable.render(),m>=this.props.minLevel&&(this.tex.bind(0),t.copyTexSubImage2D(t.TEXTURE_2D,0,u.offset,0,0,0,u.size[0],u.size[1]),this.tex.unbind(0))}this.tex.attachFramebuffer(this.fb,0);let i=this.tex.getWidth(),l=this.tex.getHeight();this.buf.read(0,0,i,l),this.sync=t.fenceSync(t.SYNC_GPU_COMMANDS_COMPLETE,0),t.flush(),k&&this.webgl.timer.markEnd("hi-Z")}tick(){if(!this.supported||!this.props.enabled||this.sync===null)return;let{gl:e}=this.webgl;if(!Yt(e))return;let t=e.clientWaitSync(this.sync,0,0);t===e.WAIT_FAILED||this.frameLag>=this.props.maxFrameLag?(e.deleteSync(this.sync),this.sync=null,this.frameLag=0,this.ready=!1):t===e.TIMEOUT_EXPIRED?this.frameLag+=1:(this.buf.getSubData(this.buffer),e.deleteSync(this.sync),this.sync=null,this.frameLag=0,this.ready=!0,this.near=this.nextNear,this.far=this.nextFar,V.copy(this.view,this.nextView),V.copy(this.projection,this.nextProjection))}transform(e){let{view:t,vp:r}=this;rc(r,e.center,t);let a=e.radius*1.2+1.52;return{vp:r,r:a}}project(e,t){let{projection:r,aabb:a,viewport:n}=this;lc(a,e,t,r);let i=a[2]-a[0],l=a[3]-a[1],m=Math.max(i*n.width,l*n.height),d=Math.ceil(ac(m/2));return{aabb:a,w:i,h:l,pr:m,lod:d}}setViewport(e,t,r,a){if(!this.supported)return;r=Math.max(r,2),a=Math.max(a,2),Me.set(this.viewport,e,t,r,a);let n=Math.ceil(Math.log(Math.max(r,a))/Math.log(2));if(n===this.levelData.length)return;let{minLevel:i}=this.props;this.buffer=new Float32Array(Math.pow(2,n-i)*Math.pow(2,n-1-i)),this.tex.define(Math.pow(2,n-i),Math.pow(2,n-1-i));for(let m of this.levelData)m.framebuffer.destroy(),m.texture.destroy();this.levelData.length=0;for(let m=0;m<n;++m){let d=this.webgl.resources.framebuffer(),u=Math.pow(2,n-m-1),c=T.create(u,u),p=T.create(1/u,1/u),g=this.webgl.resources.texture("image-float32","alpha","float","nearest");g.define(u,u),g.attachFramebuffer(d,0),this.levelData.push({texture:g,framebuffer:d,size:c,invSize:p,offset:0})}let l=0;for(let m=0,d=n;m<d;++m){let u=this.levelData[m];m>=i&&(this.levelData[m].offset=l,l+=u.size[0])}this.clear()}setProps(e){if(this.supported)if(this.props.minLevel!==e.minLevel){Object.assign(this.props,e);let{x:t,y:r,width:a,height:n}=this.viewport;this.setViewport(t,r,a,n)}else Object.assign(this.props,e),this.props.enabled||this.clear()}initDebug(e){if(!e.parentElement)return;let t=document.createElement("div");Object.assign(t.style,{display:"block",position:"absolute",pointerEvents:"none"}),e.parentElement.appendChild(t);let r=document.createElement("canvas"),a=r.getContext("2d");if(!a)throw new Error("Could not create canvas 2d context");Object.assign(r.style,{width:"100%",height:"100%",imageRendering:"pixelated",position:"relative",pointerEvents:"none"}),t.appendChild(r);let n=document.createElement("div");Object.assign(n.style,{display:"none",position:"absolute",pointerEvents:"none"}),e.parentElement.appendChild(n),this.debug={container:t,canvas:r,ctx:a,rect:n}}canDebug(e){return this.supported&&this.props.enabled&&this.ready&&!!this.debug}showRect(e,t){if(!this.canDebug(this.debug))return;let{gl:{drawingBufferHeight:r},pixelRatio:a}=this.webgl,{viewport:{x:n,y:i,width:l,height:m}}=this,d=(e[0]*l+n)/a,u=(e[1]*m-i)/a,c=(e[2]*l+n)/a,p=(e[3]*m-i)/a,g=(r-m)/a;Object.assign(this.debug.rect.style,{border:t?"solid red":"solid green",display:"block",left:`${d}px`,top:`${u+g}px`,width:`${c-d}px`,height:`${p-u}px`})}showBuffer(e){if(!this.canDebug(this.debug))return;if(e>=this.levelData.length||e<this.props.minLevel){this.debug.container.style.display="none";return}let{offset:t,size:[r,a]}=this.levelData[e],n=this.tex.getWidth(),i=new Uint8ClampedArray(r*a*4);i.fill(255);for(let g=0;g<a;++g)for(let x=0;x<r;++x){let y=(a-g-1)*r+x,S=this.buffer[g*n+x+t]*255;i[y*4+0]=S,i[y*4+3]=255-S}let l=new ImageData(i,r,a);this.debug.canvas.width=l.width,this.debug.canvas.height=l.height,this.debug.ctx.putImageData(l,0,0);let{viewport:{x:m,y:d,width:u,height:c},webgl:{pixelRatio:p}}=this;Object.assign(this.debug.container.style,{display:"block",bottom:`${d/p}px`,left:`${m/p}px`,width:`${u/p}px`,height:`${c/p}px`})}debugOcclusion(e){if(!this.canDebug(this.debug))return;if(!e){this.debug.rect.style.display="none",this.debug.container.style.display="none";return}let t=this.isOccluded(e),{vp:r,r:a}=this.transform(e),{aabb:n,lod:i}=this.project(r,a);this.showRect(n,t),this.showBuffer(i)}reset(){this.sync=null,this.ready=!1,this.frameLag=0,this.levelData.length=0;let{x:e,y:t,width:r,height:a}=this.viewport;this.setViewport(e,t,r,a)}dispose(){if(this.supported){this.clear(),this.fb.destroy(),this.tex.destroy(),this.buf.destroy(),this.renderable.dispose();for(let e of this.levelData)e.framebuffer.destroy(),e.texture.destroy()}}};var Ts=`
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
`;var uc={...De,tWboitA:K("texture","rgba","float","nearest"),tWboitB:K("texture","rgba","float","nearest"),uTexSize:C("v2")},cc=Se("evaluate-wboit",Fe,Ts);function dc(s,e,t){let r={...ke,tWboitA:o.create(e),tWboitB:o.create(t),uTexSize:o.create(T.create(e.getWidth(),e.getHeight()))},a={...uc},n=Ce(s,"triangles",cc,a,r);return Te(n,r)}var ho=class s{constructor(e,t,r){this.webgl=e;this._supported=!1;if(!s.isSupported(e))return;let{resources:a,isWebGL2:n}=e;this.textureA=a.texture("image-float32","rgba","float","nearest"),this.textureA.define(t,r),this.textureB=a.texture("image-float32","rgba","float","nearest"),this.textureB.define(t,r),this.depthRenderbuffer=a.renderbuffer(n?"depth32f-stencil8":"depth-stencil","depth-stencil",t,r),this.renderable=dc(e,this.textureA,this.textureB),this.framebuffer=a.framebuffer(),this._supported=!0,this._init()}get supported(){return this._supported}getByteCount(){return this._supported?this.textureA.getByteCount()+this.textureB.getByteCount()+this.depthRenderbuffer.getByteCount():0}bind(){let{state:e,gl:t}=this.webgl;this.framebuffer.bind(),e.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT),e.disable(t.DEPTH_TEST),e.blendFuncSeparate(t.ONE,t.ONE,t.ZERO,t.ONE_MINUS_SRC_ALPHA),e.enable(t.BLEND)}render(){k&&this.webgl.timer.mark("WboitPass.render");let{state:e,gl:t}=this.webgl;e.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA),e.enable(t.BLEND),this.renderable.update(),this.renderable.render(),k&&this.webgl.timer.markEnd("WboitPass.render")}setSize(e,t){let[r,a]=this.renderable.values.uTexSize.ref.value;(e!==r||t!==a)&&(this.textureA.define(e,t),this.textureB.define(e,t),this.depthRenderbuffer.setSize(e,t),o.update(this.renderable.values.uTexSize,T.set(this.renderable.values.uTexSize.ref.value,e,t)))}reset(){this._supported&&this._init()}_init(){let{extensions:{drawBuffers:e}}=this.webgl;this.framebuffer.bind(),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1]),this.textureA.attachFramebuffer(this.framebuffer,"color0"),this.textureB.attachFramebuffer(this.framebuffer,"color1"),this.depthRenderbuffer.attachFramebuffer(this.framebuffer)}static isSupported(e){let{extensions:{drawBuffers:t,textureFloat:r,colorBufferFloat:a,depthTexture:n}}=e;if(!r||!a||!n||!t){if(Oe){let i=[];r||i.push("textureFloat"),a||i.push("colorBufferFloat"),n||i.push("depthTexture"),t||i.push("drawBuffers"),console.log(`Missing "${i.join('", "')}" extensions required for "wboit"`)}return!1}else return!0}};var Ss=`
precision highp float;

uniform sampler2D tDpoitFrontColor;
uniform vec2 uTexSize;

void main() {
    vec2 coords = gl_FragCoord.xy / uTexSize;
    gl_FragColor = texture2D(tDpoitFrontColor, coords);
}
`;var Cs=`
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
`;var pc={...De,tDpoitBackColor:K("texture","rgba","float","nearest"),uTexSize:C("v2")},mc=Se("blend-back-dpoit",Fe,Cs);function fc(s,e){let t={...ke,tDpoitBackColor:o.create(e),uTexSize:o.create(T.create(e.getWidth(),e.getHeight()))},r={...pc},a=Ce(s,"triangles",mc,r,t);return Te(a,t)}var hc={...De,tDpoitFrontColor:K("texture","rgba","float","nearest"),uTexSize:C("v2")},gc=Se("evaluate-dpoit",Fe,Ss);function bc(s,e){let t={...ke,tDpoitFrontColor:o.create(e),uTexSize:o.create(T.create(e.getWidth(),e.getHeight()))},r={...hc},a=Ce(s,"triangles",gc,r,t);return Te(a,t)}var go=class s{constructor(e,t,r,a=null){this.webgl=e;this.stencil=a;this.DEPTH_CLEAR_VALUE=-99999;this.MAX_DEPTH=1;this.MIN_DEPTH=0;this.passCount=0;this._supported=!1;if(!s.isSupported(e))return;let{resources:n,extensions:{colorBufferHalfFloat:i,textureHalfFloat:l}}=e;Yt(e.gl)?(this.depthTextures=[n.texture("image-float32","rg","float","nearest"),n.texture("image-float32","rg","float","nearest")],this.colorFrontTextures=i&&l?[n.texture("image-float16","rgba","fp16","nearest"),n.texture("image-float16","rgba","fp16","nearest")]:[n.texture("image-float32","rgba","float","nearest"),n.texture("image-float32","rgba","float","nearest")],this.colorBackTextures=i&&l?[n.texture("image-float16","rgba","fp16","nearest"),n.texture("image-float16","rgba","fp16","nearest")]:[n.texture("image-float32","rgba","float","nearest"),n.texture("image-float32","rgba","float","nearest")]):(this.depthTextures=[n.texture("image-float32","rgba","float","nearest"),n.texture("image-float32","rgba","float","nearest")],this.colorFrontTextures=[n.texture("image-float32","rgba","float","nearest"),n.texture("image-float32","rgba","float","nearest")],this.colorBackTextures=[n.texture("image-float32","rgba","float","nearest"),n.texture("image-float32","rgba","float","nearest")]),this.depthTextures[0].define(t,r),this.depthTextures[1].define(t,r),this.colorFrontTextures[0].define(t,r),this.colorFrontTextures[1].define(t,r),this.colorBackTextures[0].define(t,r),this.colorBackTextures[1].define(t,r),this.depthFramebuffers=[n.framebuffer(),n.framebuffer()],this.colorFramebuffers=[n.framebuffer(),n.framebuffer()],this.blendBackRenderable=fc(e,this.colorBackTextures[0]),this.renderable=bc(e,this.colorFrontTextures[0]),this._supported=!0,this._init()}get supported(){return this._supported}getByteCount(){return this._supported?this.depthTextures[0].getByteCount()+this.depthTextures[1].getByteCount()+this.colorFrontTextures[0].getByteCount()+this.colorFrontTextures[1].getByteCount()+this.colorBackTextures[0].getByteCount()+this.colorBackTextures[1].getByteCount():0}bind(){let{state:e,gl:t,extensions:{blendMinMax:r}}=this.webgl;return this.passCount=0,this.depthFramebuffers[0].bind(),e.clearColor(this.DEPTH_CLEAR_VALUE,this.DEPTH_CLEAR_VALUE,0,0),t.clear(t.COLOR_BUFFER_BIT),this.depthFramebuffers[1].bind(),e.clearColor(-this.MIN_DEPTH,this.MAX_DEPTH,0,0),t.clear(t.COLOR_BUFFER_BIT),this.colorFramebuffers[0].bind(),e.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),this.colorFramebuffers[1].bind(),e.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),this.depthFramebuffers[0].bind(),e.blendEquation(r.MAX),e.disable(t.DEPTH_TEST),e.depthMask(!1),{depth:this.depthTextures[1],frontColor:this.colorFrontTextures[1],backColor:this.colorBackTextures[1]}}bindDualDepthPeeling(){let{state:e,gl:t,extensions:{blendMinMax:r}}=this.webgl;return this.readId=this.passCount%2,this.writeId=1-this.readId,this.passCount+=1,this.depthFramebuffers[this.writeId].bind(),e.clearColor(this.DEPTH_CLEAR_VALUE,this.DEPTH_CLEAR_VALUE,0,0),t.clear(t.COLOR_BUFFER_BIT),this.colorFramebuffers[this.writeId].bind(),e.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),this.depthFramebuffers[this.writeId].bind(),e.blendEquation(r.MAX),e.disable(t.DEPTH_TEST),e.depthMask(!1),{depth:this.depthTextures[this.readId],frontColor:this.colorFrontTextures[this.readId],backColor:this.colorBackTextures[this.readId]}}renderBlendBack(){k&&this.webgl.timer.mark("DpoitPass.renderBlendBack");let{state:e,gl:t}=this.webgl;e.blendEquation(t.FUNC_ADD),e.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA),o.update(this.blendBackRenderable.values.tDpoitBackColor,this.colorBackTextures[this.writeId]),this.blendBackRenderable.update(),this.blendBackRenderable.render(),k&&this.webgl.timer.markEnd("DpoitPass.renderBlendBack")}render(){k&&this.webgl.timer.mark("DpoitPass.render");let{state:e,gl:t}=this.webgl;e.blendEquation(t.FUNC_ADD),e.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),o.update(this.renderable.values.tDpoitFrontColor,this.colorFrontTextures[this.writeId]),this.renderable.update(),this.renderable.render(),k&&this.webgl.timer.markEnd("DpoitPass.render")}setSize(e,t){let[r,a]=this.renderable.values.uTexSize.ref.value;if(e!==r||t!==a){for(let n=0;n<2;n++)this.depthTextures[n].define(e,t),this.colorFrontTextures[n].define(e,t),this.colorBackTextures[n].define(e,t);o.update(this.renderable.values.uTexSize,T.set(this.renderable.values.uTexSize.ref.value,e,t)),o.update(this.blendBackRenderable.values.uTexSize,T.set(this.blendBackRenderable.values.uTexSize.ref.value,e,t))}}reset(){this._supported&&this._init()}_init(){let{extensions:{drawBuffers:e}}=this.webgl;for(let t=0;t<2;t++)this.depthFramebuffers[t].bind(),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1,e.COLOR_ATTACHMENT2]),this.colorFrontTextures[t].attachFramebuffer(this.depthFramebuffers[t],"color0"),this.colorBackTextures[t].attachFramebuffer(this.depthFramebuffers[t],"color1"),this.depthTextures[t].attachFramebuffer(this.depthFramebuffers[t],"color2"),this.stencil?.attachFramebuffer(this.depthFramebuffers[t]),this.colorFramebuffers[t].bind(),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1]),this.colorFrontTextures[t].attachFramebuffer(this.colorFramebuffers[t],"color0"),this.colorBackTextures[t].attachFramebuffer(this.colorFramebuffers[t],"color1")}static isSupported(e){let{extensions:{drawBuffers:t,textureFloat:r,colorBufferFloat:a,depthTexture:n,blendMinMax:i}}=e;if(!r||!a||!n||!t||!i){if(Oe){let l=[];r||l.push("textureFloat"),a||l.push("colorBufferFloat"),n||l.push("depthTexture"),t||l.push("drawBuffers"),i||l.push("blendMinMax"),console.log(`Missing "${l.join('", "')}" extensions required for "dpoit"`)}return!1}else return!0}};var sa=class{constructor(e,t,r,a,n){this.webgl=e;this.transparencyMode="blended";let{extensions:i,resources:l,isWebGL2:m}=e;this.drawTarget=e.createDrawTarget(),this.colorTarget=e.createRenderTarget(r,a,"depth-stencil","uint8","linear"),this.transparentColorTarget=e.createRenderTarget(r,a,"none","uint8","linear"),this.packedDepth=!i.depthTexture,this.depthTargetTransparent=e.createRenderTarget(r,a,"depth-stencil","uint8","nearest"),this.depthTextureTransparent=this.depthTargetTransparent.texture,this.depthTargetOpaque=this.packedDepth?e.createRenderTarget(r,a,"depth-stencil"):null,this.depthTextureOpaque=this.depthTargetOpaque?this.depthTargetOpaque.texture:l.texture("image-depth","depth-stencil",m?"float-stencil":"uint24-8","nearest"),this.packedDepth||this.depthTextureOpaque.define(r,a),this.wboit=new ho(e,r,a),this.dpoit=new go(e,r,a,this.colorTarget.depthRenderbuffer),this.marking=new jr(e,r,a),this.postprocessing=new et(e,t,this),this.ssaoShading={name:"ssao",ssao:this.postprocessing.ssao.ssaoDepthTexture},this.antialiasing=new vr(e,r,a),this.dof=new cr(e,r,a),this.copyFbo=zt(e,this.colorTarget.texture),this.setTransparency(n)}setTransparency(e){e==="wboit"?(this.transparencyMode=this.wboit.supported?"wboit":"blended",Oe&&!this.wboit.supported&&console.log('Missing "wboit" support, falling back to "blended".')):e==="dpoit"?(this.transparencyMode=this.dpoit.supported?"dpoit":"blended",Oe&&!this.dpoit.supported&&console.log('Missing "dpoit" support, falling back to "blended".')):this.transparencyMode="blended",this.depthTextureOpaque.detachFramebuffer(this.postprocessing.target.framebuffer,"depth"),this.marking.invalidate()}get transparency(){return this.transparencyMode}getByteCount(){return this.drawTarget.getByteCount()+this.colorTarget.getByteCount()+this.transparentColorTarget.getByteCount()+this.depthTargetTransparent.getByteCount()+(this.depthTargetOpaque?this.depthTargetOpaque.getByteCount():this.depthTextureOpaque.getByteCount())+this.wboit.getByteCount()+this.dpoit.getByteCount()+this.marking.getByteCount()+this.postprocessing.getByteCount()+this.antialiasing.getByteCount()+this.dof.getByteCount()}reset(){this.wboit.reset(),this.dpoit.reset(),this.postprocessing.reset(),this.marking.invalidate()}setSize(e,t){let r=this.colorTarget.getWidth(),a=this.colorTarget.getHeight();(e!==r||t!==a)&&(this.colorTarget.setSize(e,t),this.depthTargetTransparent.setSize(e,t),this.transparentColorTarget.setSize(e,t),this.depthTargetOpaque?this.depthTargetOpaque.setSize(e,t):this.depthTextureOpaque.define(e,t),o.update(this.copyFbo.values.uTexSize,T.set(this.copyFbo.values.uTexSize.ref.value,e,t))),this.wboit.supported&&this.wboit.setSize(e,t),this.dpoit.supported&&this.dpoit.setSize(e,t),this.marking.setSize(e,t),this.postprocessing.setSize(e,t),this.antialiasing.setSize(e,t),this.dof.setSize(e,t)}renderEmissiveBloom(e,t,r,a){let n=this.postprocessing.bloom;n.emissiveTarget.bind(),e.clear(!1,!0,!0);let i=!this.packedDepth;i&&this.depthTextureOpaque.attachFramebuffer(n.emissiveTarget.framebuffer,"depth"),e.renderEmissiveOpaque(r.primitives,t,this.depthTextureTransparent,i),a&&r.opacityAverage<1&&e.renderEmissiveTransparent(r.primitives,t,this.depthTextureTransparent),i&&(this.depthTextureOpaque.detachFramebuffer(n.emissiveTarget.framebuffer,"depth"),n.emissiveTarget.depthRenderbuffer?.attachFramebuffer(n.emissiveTarget.framebuffer))}_renderBloom(e,t,r,a){if(!Lt.isEnabled(a)||a.bloom.name!=="on")return!1;let n=this.postprocessing.bloom,i=a.bloom.params,l=i.mode==="emissive";return l&&r.emissiveAverage===0?!1:(l&&this.renderEmissiveBloom(e,t,r,i.transparency),r.opacityAverage>=1&&(this.transparentColorTarget.bind(),e.clear(!1,!1,!0),this.depthTargetTransparent.bind(),e.clearDepth(!0)),n.update(this.colorTarget.texture,this.transparentColorTarget.texture,n.emissiveTarget.texture,this.depthTextureOpaque,this.depthTextureTransparent,i,t,!0),n.render(t.viewport),!0)}_renderDpoit(e,t,r,a,n,i){if(!this.dpoit.supported)throw new Error("expected dpoit to be supported");this.depthTextureOpaque.attachFramebuffer(this.colorTarget.framebuffer,"depth"),e.clear(!0),r.hasOpaque&&e.renderOpaque(r.primitives,t),this.depthTextureOpaque.detachFramebuffer(this.colorTarget.framebuffer,"depth"),et.isTransparentDepthRequired(r,i)&&(this.depthTargetTransparent.bind(),e.clearDepth(!0),r.opacityAverage<1&&e.renderDepthTransparent(r.primitives,t,this.depthTextureOpaque));let l=et.isEnabled(i);if(r.opacityAverage<1){let m=l?this.transparentColorTarget:this.colorTarget;l&&(m.bind(),e.clear(!1,!1,!0));let d=this.dpoit.bind();e.renderDpoitTransparent(r.primitives,t,this.depthTextureOpaque,d);for(let u=0;u<a;u++){k&&this.webgl.timer.mark("DpoitPass.layer");let c=this.dpoit.bindDualDepthPeeling();e.renderDpoitTransparent(r.primitives,t,this.depthTextureOpaque,c),a>1&&(m.bind(),this.dpoit.renderBlendBack()),k&&this.webgl.timer.markEnd("DpoitPass.layer")}m.bind(),this.dpoit.render()}et.isEnabled(i)&&this.postprocessing.render(t,r,!1,n,e.props.backgroundColor,i,e.light,e.ambientColor,this._renderBloom(e,t,r,i)),r.volumes.renderables.length>0&&e.renderVolume(r.volumes,t,this.depthTextureOpaque)}_renderWboit(e,t,r,a,n){if(!this.wboit.supported)throw new Error("expected wboit to be supported");this.depthTextureOpaque.attachFramebuffer(this.colorTarget.framebuffer,"depth"),e.clear(!0),r.hasOpaque&&e.renderOpaque(r.primitives,t),et.isTransparentDepthRequired(r,n)&&(this.depthTargetTransparent.bind(),e.clearDepth(!0),r.opacityAverage<1&&e.renderDepthTransparent(r.primitives,t,this.depthTextureOpaque));let i=et.isEnabled(n);if(r.opacityAverage<1){let l=i?this.transparentColorTarget:this.colorTarget;i&&(l.bind(),e.clear(!1,!1,!0)),this.wboit.bind(),e.renderWboitTransparent(r.primitives,t,this.depthTextureOpaque),l.bind(),this.wboit.render()}et.isEnabled(n)&&this.postprocessing.render(t,r,!1,a,e.props.backgroundColor,n,e.light,e.ambientColor,this._renderBloom(e,t,r,n)),r.volumes.renderables.length>0&&(this.wboit.bind(),e.renderWboitTransparent(r.volumes,t,this.depthTextureOpaque),(i?this.postprocessing.target:this.colorTarget).bind(),this.wboit.render())}_renderBlended(e,t,r,a,n,i){if(a?this.drawTarget.bind():this.packedDepth?this.colorTarget.bind():this.depthTextureOpaque.attachFramebuffer(this.colorTarget.framebuffer,"depth"),e.clear(!0),r.hasOpaque&&e.renderOpaque(r.primitives,t),a)r.opacityAverage<1&&e.renderBlendedTransparent(r.primitives,t);else{this.depthTargetOpaque&&(this.depthTargetOpaque.bind(),e.clearDepth(!0),e.renderDepthOpaque(r.primitives,t),this.colorTarget.bind()),et.isTransparentDepthRequired(r,i)&&(this.depthTargetTransparent.bind(),e.clearDepth(!0),r.opacityAverage<1&&e.renderDepthTransparent(r.primitives,t,this.depthTextureOpaque));let l=et.isEnabled(i);if(r.opacityAverage<1&&(l&&(this.transparentColorTarget.bind(),e.clear(!1,!1,!0),this.packedDepth?this.colorTarget.depthRenderbuffer?.attachFramebuffer(this.transparentColorTarget.framebuffer):this.depthTextureOpaque.attachFramebuffer(this.transparentColorTarget.framebuffer,"depth")),e.renderBlendedTransparent(r.primitives,t),l&&(this.packedDepth?this.colorTarget.depthRenderbuffer?.detachFramebuffer(this.transparentColorTarget.framebuffer):this.depthTextureOpaque.detachFramebuffer(this.transparentColorTarget.framebuffer,"depth"))),l&&(this.packedDepth?this.colorTarget.depthRenderbuffer?.detachFramebuffer(this.postprocessing.target.framebuffer):this.depthTextureOpaque.detachFramebuffer(this.postprocessing.target.framebuffer,"depth"),this.postprocessing.render(t,r,!1,n,e.props.backgroundColor,i,e.light,e.ambientColor,this._renderBloom(e,t,r,i)),this.packedDepth?this.colorTarget.depthRenderbuffer?.attachFramebuffer(this.postprocessing.target.framebuffer):this.depthTextureOpaque.attachFramebuffer(this.postprocessing.target.framebuffer,"depth")),r.volumes.renderables.length>0){let m=et.isEnabled(i)?this.postprocessing.target:this.colorTarget;this.packedDepth?this.colorTarget.depthRenderbuffer?.detachFramebuffer(m.framebuffer):this.depthTextureOpaque.detachFramebuffer(m.framebuffer,"depth"),m.bind(),e.renderVolume(r.volumes,t,this.depthTextureOpaque),this.packedDepth?this.colorTarget.depthRenderbuffer?.attachFramebuffer(m.framebuffer):this.depthTextureOpaque.attachFramebuffer(m.framebuffer,"depth"),m.bind()}}}_render(e,t,r,a,n){let{renderer:i,camera:l,scene:m,frame:d}=e;if(l.disabled)return;let u=m.volumes.renderables.length>0,c=et.isEnabled(a.postprocessing),p=vr.isEnabled(a.postprocessing),g=cr.isEnabled(a.postprocessing),x=!n&&jr.hasMarking(m,a),y=!t||x,{x:S,y:P,width:D,height:A}=l.viewport;i.setViewport(S,P,D,A),i.update(l,m,d),r&&!p&&!g&&!y&&!c&&(this.drawTarget.bind(),i.clear(!1));let M=!1;this.transparencyMode==="wboit"&&this.wboit.supported?(this._renderWboit(i,l,m,r,a.postprocessing),M=!0):this.transparencyMode==="dpoit"&&this.dpoit.supported?(this._renderDpoit(i,l,m,a.dpoitIterations,r,a.postprocessing),M=!0):this._renderBlended(i,l,m,!u&&!c&&!p&&!g&&!y,r,a.postprocessing);let q=c?this.postprocessing.target:y||u||M||g?this.colorTarget:this.drawTarget;q.bind(),this._renderHelpers(e,q);let N=this._renderOutput(l,m,a,{offscreen:y,postprocessingEnabled:c,antialiasingEnabled:p,dofEnabled:g,volumeRendering:u,oitEnabled:M});N?n||this.marking.present(e,a,{base:N,toDrawingBuffer:t,offsets:Gr,restart:!0,samples:1,shading:this.getMarkingShading(a.postprocessing)}):this.marking.invalidate(),this.webgl.gl.flush()}_renderHelpers(e,t){let{renderer:r,camera:a,helper:n,frame:i}=e;if(n.debug.isEnabled||n.pointer.isEnabled){if(this.packedDepth||this.depthTextureOpaque.attachFramebuffer(t.framebuffer,"depth"),n.debug.isEnabled){n.debug.syncVisibility();for(let l of n.debug.scenes)r.renderBlended(l,a)}n.pointer.isEnabled&&(n.pointer.setCamera(a),r.update(n.pointer.camera,n.pointer.scene,i),r.renderBlended(n.pointer.scene,n.pointer.camera)),this.packedDepth||this.depthTextureOpaque.detachFramebuffer(t.framebuffer,"depth")}n.handle.isEnabled&&r.renderBlended(n.handle.scene,a),n.camera.isEnabled&&(n.camera.update(a),r.update(n.camera.camera,n.camera.scene,i),r.renderBlended(n.camera.scene,n.camera.camera))}_renderOutput(e,t,r,a){let{offscreen:n,postprocessingEnabled:i,antialiasingEnabled:l,dofEnabled:m,volumeRendering:d,oitEnabled:u}=a,c=!n,p=!1;if(l){let g=i?this.postprocessing.target.texture:this.colorTarget.texture;this.antialiasing.render(e,g,c&&!m,r.postprocessing)}else c&&!m&&(p=!0);if(m&&r.postprocessing.dof.name==="on"){let g=l?this.antialiasing.target.texture:i?this.postprocessing.target.texture:this.colorTarget.texture;this.dof.update(e,g,this.depthTargetOpaque?.texture||this.depthTextureOpaque,this.depthTextureTransparent,r.postprocessing.dof.params,t.boundingSphereVisible),this.dof.render(e.viewport,c?void 0:this.getColorTarget(r.postprocessing))}else c&&!l&&(p=!0);return p&&(i?this.copyToDrawingBuffer(this.postprocessing.target,e.viewport):(d||u)&&this.copyToDrawingBuffer(this.colorTarget,e.viewport)),n?this.getColorTarget(r.postprocessing):void 0}copyToDrawingBuffer(e,t){let{gl:r,state:a}=this.webgl;this.copyFbo.values.tColor.ref.value!==e.texture&&(o.update(this.copyFbo.values.tColor,e.texture),this.copyFbo.update()),this.drawTarget.bind(),a.enable(r.SCISSOR_TEST),a.disable(r.BLEND),a.disable(r.DEPTH_TEST),a.depthMask(!1);let{x:n,y:i,width:l,height:m}=t;a.viewport(n,i,l,m),a.scissor(n,i,l,m),this.copyFbo.render()}render(e,t,r,a=!1){k&&this.webgl.timer.mark("DrawPass.render");let{renderer:n,camera:i,scene:l}=e;this.postprocessing.setTransparentBackground(t.transparentBackground);let m=this.isTransparentBackground(l,t);n.setTransparentBackground(m),n.setDrawingBufferSize(this.colorTarget.getWidth(),this.colorTarget.getHeight()),n.setPixelRatio(this.webgl.pixelRatio),Tt.is(i)?(k&&this.webgl.timer.mark("StereoCamera.left"),this._render({...e,camera:i.left},r,m,t,a),k&&this.webgl.timer.markEnd("StereoCamera.left"),k&&this.webgl.timer.mark("StereoCamera.right"),this._render({...e,camera:i.right},r,m,t,a),k&&this.webgl.timer.markEnd("StereoCamera.right"),this.marking.invalidate()):this._render({...e,camera:i},r,m,t,a),k&&this.webgl.timer.markEnd("DrawPass.render")}isTransparentBackground(e,t){let r=t.postprocessing,a=this.postprocessing.background.isEnabled(r),n=!t.transparentBackground&&!a&&Lt.isEnabled(r)&&r.bloom.name==="on"&&!(r.bloom.params.mode==="emissive"&&e.emissiveAverage===0);return t.transparentBackground||a||n}getMarkingShading(e){return Ht.isEnabled(e)?this.ssaoShading:null}getColorTarget(e){return cr.isEnabled(e)?this.dof.target:vr.isEnabled(e)?this.antialiasing.target:et.isEnabled(e)?this.postprocessing.target:this.colorTarget}};var yc={...De,tColor:K("texture","rgba","ubyte","nearest"),uTexSize:C("v2"),uWeight:C("f")},vc=Se("compose",Fe,uo);function xc(s,e){let t={...ke,tColor:o.create(e),uTexSize:o.create(T.create(e.getWidth(),e.getHeight())),uWeight:o.create(1)},r={...yc},a=Ce(s,"triangles",vc,r,t);return Te(a,t)}var bo={mode:h.Select("temporal",[["off","Off"],["on","On"],["temporal","Temporal"]]),sampleLevel:h.Numeric(2,{min:0,max:5,step:1},{description:"Take level^2 samples."}),reduceFlicker:h.Boolean(!0,{description:'Reduce flicker in "temporal" mode when marking is disabled (i.e. drawn as part of the scene).'}),reuseOcclusion:h.Boolean(!0,{description:"Reuse occlusion data. It is faster but has some artefacts."})};function ti(s){return!Tt.is(s)}var Rr=class{constructor(e,t){this.webgl=e;this.drawPass=t;let{colorBufferFloat:r,textureFloat:a,colorBufferHalfFloat:n,textureHalfFloat:i}=e.extensions,l=t.colorTarget.getWidth(),m=t.colorTarget.getHeight();this.colorTarget=e.createRenderTarget(l,m,"none");let d=n&&i?"fp16":r&&a?"float32":"uint8";this.composeTarget=e.createRenderTarget(l,m,"none",d),this.holdTarget=e.createRenderTarget(l,m,"none"),this.compose=xc(e,t.colorTarget.texture)}static isEnabled(e){return e.mode!=="off"}getByteCount(){return this.colorTarget.getByteCount()+this.composeTarget.getByteCount()+this.holdTarget.getByteCount()}syncSize(){let e=this.drawPass.colorTarget.getWidth(),t=this.drawPass.colorTarget.getHeight(),[r,a]=this.compose.values.uTexSize.ref.value;(e!==r||t!==a)&&(this.colorTarget.setSize(e,t),this.composeTarget.setSize(e,t),this.holdTarget.setSize(e,t),o.update(this.compose.values.uTexSize,T.set(this.compose.values.uTexSize.ref.value,e,t)))}render(e,t,r,a,n){return r.multiSample.mode==="temporal"&&!n?this.renderTemporalMultiSample(e,t,r,a):(this.renderMultiSample(t,r,a),-2)}renderMultiSample(e,t,r){let{camera:a}=e,{compose:n,composeTarget:i,drawPass:l,webgl:m}=this,{gl:d,state:u}=m;k&&m.timer.mark("MultiSamplePass.renderMultiSample");let c=Nr(t.multiSample.sampleLevel),{x:p,y:g,width:x,height:y}=a.viewport,S=1/c.length,P=1/32;o.update(n.values.tColor,l.getColorTarget(t.postprocessing).texture),n.update();for(let D=0;D<c.length;++D){let A=c[D];Hr(a,A);let M=-.5+(D+.5)/c.length,q=S+P*M;o.update(n.values.uWeight,q),D===0||!t.multiSample.reuseOcclusion?l.postprocessing.setOcclusionOffset(0,0):l.postprocessing.setOcclusionOffset(A[0]/x,A[1]/y),l.render(e,t,!1,ti(a)),i.bind(),u.enable(d.BLEND),u.blendEquationSeparate(d.FUNC_ADD,d.FUNC_ADD),u.blendFuncSeparate(d.ONE,d.ONE,d.ONE,d.ONE),u.disable(d.DEPTH_TEST),u.depthMask(!1),u.viewport(p,g,x,y),u.scissor(p,g,x,y),D===0&&(u.clearColor(0,0,0,0),d.clear(d.COLOR_BUFFER_BIT)),n.render()}l.postprocessing.setOcclusionOffset(0,0),o.update(n.values.uWeight,1),o.update(n.values.tColor,i.texture),n.update(),this.colorTarget.bind(),u.viewport(p,g,x,y),u.scissor(p,g,x,y),u.disable(d.BLEND),n.render(),qr(a),this.drawPass.marking.present(e,t,{base:this.colorTarget,toDrawingBuffer:r,offsets:c,restart:!0,samples:c.length,shading:l.getMarkingShading(t.postprocessing)}),k&&m.timer.markEnd("MultiSamplePass.renderMultiSample")}renderTemporalMultiSample(e,t,r,a){let{camera:n}=t,{compose:i,composeTarget:l,holdTarget:m,drawPass:d,webgl:u}=this,{gl:c,state:p}=u;k&&u.timer.mark("MultiSamplePass.renderTemporalMultiSample");let g=Nr(r.multiSample.sampleLevel);if(e===-2||e>=g.length)return-2;let{x,y,width:S,height:P}=n.viewport,D=1/g.length,A=no(r.multiSample.sampleLevel),M=e===-1;if(M)d.render(t,r,!1,ti(n)),o.update(i.values.uWeight,1),o.update(i.values.tColor,d.getColorTarget(r.postprocessing).texture),i.update(),m.bind(),p.disable(c.BLEND),p.disable(c.DEPTH_TEST),p.depthMask(!1),p.viewport(x,y,S,P),p.scissor(x,y,S,P),i.render(),e+=1;else{o.update(i.values.tColor,d.getColorTarget(r.postprocessing).texture),o.update(i.values.uWeight,D),i.update();for(let N=0;N<A;++N){let L=g[e];if(Hr(n,L),e===0||!r.multiSample.reuseOcclusion?d.postprocessing.setOcclusionOffset(0,0):d.postprocessing.setOcclusionOffset(L[0]/S,L[1]/P),d.render(t,r,!1,ti(n)),l.bind(),p.enable(c.BLEND),p.blendEquationSeparate(c.FUNC_ADD,c.FUNC_ADD),p.blendFuncSeparate(c.ONE,c.ONE,c.ONE,c.ONE),p.disable(c.DEPTH_TEST),p.depthMask(!1),p.viewport(x,y,S,P),p.scissor(x,y,S,P),e===0&&(p.clearColor(0,0,0,0),c.clear(c.COLOR_BUFFER_BIT)),i.render(),e+=1,e>=g.length)break}}d.postprocessing.setOcclusionOffset(0,0),this.colorTarget.bind(),p.viewport(x,y,S,P),p.scissor(x,y,S,P);let q=e*D;return q>0&&(o.update(i.values.uWeight,1),o.update(i.values.tColor,l.texture),i.update(),p.disable(c.BLEND),i.render()),q<1&&(o.update(i.values.uWeight,1-q),o.update(i.values.tColor,m.texture),i.update(),q===0?p.disable(c.BLEND):p.enable(c.BLEND),i.render()),qr(n),this.drawPass.marking.present(t,r,{base:this.colorTarget,toDrawingBuffer:a,offsets:g,restart:M,samples:M?1:A,shading:d.getMarkingShading(r.postprocessing)}),k&&u.timer.markEnd("MultiSamplePass.renderTemporalMultiSample"),e>=g.length?-2:e}},la=class{constructor(e){this.multiSamplePass=e;this.sampleIndex=-2}update(e,t){return e&&(this.sampleIndex=-1),t.mode==="temporal"?this.sampleIndex!==-2:!1}render(e,t,r,a){return this.sampleIndex=this.multiSamplePass.render(this.sampleIndex,e,t,r,!!a),this.sampleIndex<0}};var ya;(r=>{function s(a,n,i){return{array:a,width:n,height:i}}r.create=s;function e(a){let{array:n,width:i,height:l}=a,m=n.length/(i*l),d=i*m;for(let u=0,c=l/2;u<c;++u)for(let p=0,g=d;p<g;++p){let x=u*d+p,y=(l-u-1)*d+p,S=n[x];n[x]=n[y],n[y]=S}return a}r.flipY=e;function t(a){let{array:n}=a,i=n instanceof Uint8Array?255:1;for(let l=0,m=n.length;l<m;l+=4){let d=n[l+3]/i;d!==0&&(n[l]=Math.min(i,n[l]/d),n[l+1]=Math.min(i,n[l+1]/d),n[l+2]=Math.min(i,n[l+2]/d))}return a}r.divideByAlpha=t})(ya||={});var Tc={transparentBackground:h.Boolean(!1),dpoitIterations:h.Numeric(2,{min:1,max:10,step:1}),multiSample:h.Group(bo),postprocessing:h.Group(io),marking:h.Group(so),illumination:h.Group(co),cameraHelper:h.Group(Yr),renderer:h.Group(ea)},yo=class{constructor(e,t,r,a,n,i,l){this.webgl=e;this.renderer=r;this.scene=a;this.camera=n;this._width=0;this._height=0;this._camera=new _e;this._frame=Zt();this.props={...h.getDefaultValues(Tc),...l},this.drawPass=new sa(e,t,128,128,a.transparency),this.illuminationPass=new kr(e,this.drawPass),this.multiSamplePass=new Rr(e,this.drawPass),this.multiSampleHelper=new la(this.multiSamplePass),this.helper={camera:new Ma(e,this.props.cameraHelper),debug:i.debug,handle:i.handle,pointer:i.pointer},this.setSize(1024,768)}get colorTarget(){return this._colorTarget}get width(){return this._width}get height(){return this._height}getByteCount(){return this.drawPass.getByteCount()+this.illuminationPass.getByteCount()+this.multiSamplePass.getByteCount()}updateBackground(){return new Promise(e=>{this.drawPass.postprocessing.background.update(this.camera,this.props.postprocessing.background,()=>{e()})})}setSize(e,t){e===this._width&&t===this._height||(this._width=e,this._height=t,this.drawPass.setSize(e,t),this.illuminationPass.setSize(e,t),this.multiSamplePass.syncSize())}setProps(e={}){Object.assign(this.props,e),e.cameraHelper&&this.helper.camera.setProps(e.cameraHelper)}async render(e){this.drawPass.setTransparency(this.scene.transparency),ia.ensureRequired(this.webgl,this.scene,this.props),_e.copySnapshot(this._camera.state,this.camera.state),Me.set(this._camera.viewport,0,0,this._width,this._height),this._camera.update(),this.renderer.setOcclusionTest(null),this._frame=Zt();let t={renderer:this.renderer,camera:this._camera,scene:this.scene,helper:this.helper,frame:this._frame};if(this.illuminationPass.supported&&this.props.illumination.enabled){for(await e.update({message:"Tracing...",current:1,max:this.illuminationPass.getMaxIterations(this.props.illumination)}),this.illuminationPass.restart(!0);this.illuminationPass.shouldRender(this.props.illumination);)k&&this.webgl.timer.mark("ImagePass.render",{captureStats:!0}),this.illuminationPass.render(t,this.props,!1),k&&this.webgl.timer.markEnd("ImagePass.render"),e.shouldUpdate&&await e.update({current:this.illuminationPass.iteration}),await this.webgl.waitForGpuCommandsComplete();this._colorTarget=this.illuminationPass.colorTarget}else k&&this.webgl.timer.mark("ImagePass.render",{captureStats:!0}),Rr.isEnabled(this.props.multiSample)?(this.multiSampleHelper.render(t,this.props,!1),this._colorTarget=this.multiSamplePass.colorTarget):(this.drawPass.render(t,this.props,!1),this._colorTarget=this.drawPass.getColorTarget(this.props.postprocessing)),k&&this.webgl.timer.markEnd("ImagePass.render");if(k){let r=this.webgl.timer.resolve();if(r)for(let a of r)Ti([a])}Oe&&console.log(`image pass byte count ${(this.getByteCount()/1024/1024).toFixed(3)} MiB`)}async getImageData(e,t,r,a){this.setSize(t,r),await this.render(e),this.colorTarget.bind();let n=a?.width??t,i=a?.height??r,l=new Uint8Array(n*i*4);a?this.webgl.readPixels(a.x,r-a.y-a.height,n,i,l):this.webgl.readPixels(0,0,n,i,l);let m=ya.create(l,n,i);return ya.flipY(m),ya.divideByAlpha(m),new ImageData(new Uint8ClampedArray(l),n,i)}};var vo=class{constructor(e,t,r={}){this.webgl=e;let a=this.webgl.getDrawingBufferSize();this.draw=new sa(e,t,a.width,a.height,r.transparency||"blended"),this.pick=new ta(e,a.width,a.height,r.pickScale||.25),this.multiSample=new Rr(e,this.draw),this.illumination=new kr(e,this.draw)}getByteCount(){return this.draw.getByteCount()+this.pick.getByteCount()+this.multiSample.getByteCount()+this.illumination.getByteCount()}setPickScale(e){this.pick.setPickScale(e)}setTransparency(e){this.draw.setTransparency(e)}updateSize(){let e=this.webgl.getDrawingBufferSize(),t=Math.max(e.width,2),r=Math.max(e.height,2);this.draw.setSize(t,r),this.pick.setSize(t,r),this.multiSample.syncSize(),this.illumination.setSize(t,r)}};var Sc={intensity:h.Numeric(15,{min:1,max:100,step:1})},Cc={camera:h.Group({mode:h.Select("perspective",h.arrayToOptions(["perspective","orthographic"]),{label:"Camera"}),helper:h.Group(Yr,{isFlat:!0}),stereo:h.MappedStatic("off",{on:h.Group(jo),off:h.Group({})},{cycle:!0,hideIf:s=>s?.mode!=="perspective"}),fov:h.Numeric(45,{min:10,max:130,step:1},{label:"Field of View"}),manualReset:h.Boolean(!1,{isHidden:!0})},{pivot:"mode"}),cameraFog:h.MappedStatic("on",{on:h.Group(Sc),off:h.Group({})},{cycle:!0,description:"Show fog in the distance"}),cameraClipping:h.Group({radius:h.Numeric(100,{min:0,max:99,step:1},{label:"Clipping",description:"How much of the scene to show."}),far:h.Boolean(!0,{description:"Hide scene in the distance"}),minNear:h.Numeric(1,{min:.1,max:100,step:.1},{description:"Minimal allowed distance of near clipping plane from the camera. Note, may cause performance issues rendering impostors when set too small and cause issues with outline rendering when too close to 0."})},{pivot:"radius"}),viewport:h.MappedStatic("canvas",{canvas:h.Group({}),"static-frame":h.Group({x:h.Numeric(0),y:h.Numeric(0),width:h.Numeric(128),height:h.Numeric(128)}),"relative-frame":h.Group({x:h.Numeric(.33,{min:0,max:1,step:.01}),y:h.Numeric(.33,{min:0,max:1,step:.01}),width:h.Numeric(.5,{min:.01,max:1,step:.01}),height:h.Numeric(.5,{min:.01,max:1,step:.01})})}),cameraResetDurationMs:h.Numeric(250,{min:0,max:1e3,step:1},{description:"The time it takes to reset the camera."}),cameraResetEasing:wi("linear"),cameraResetTrajectory:Vi("linear"),sceneRadiusFactor:h.Numeric(1,{min:1,max:10,step:.1}),transparentBackground:h.Boolean(!1),checkeredTransparentBackground:h.Boolean(!1),dpoitIterations:h.Numeric(2,{min:1,max:10,step:1}),pickPadding:h.Numeric(3,{min:0,max:10,step:1},{description:"Extra pixels to around target to check in case target is empty."}),userInteractionReleaseMs:h.Numeric(250,{min:0,max:1e3,step:1},{description:"The time before the user is not considered interacting anymore."}),multiSample:h.Group(bo),postprocessing:h.Group(io),marking:h.Group(so),illumination:h.Group(co),hiZ:h.Group(ei),renderer:h.Group(ea),trackball:h.Group(Go),interaction:h.Group(_o),handle:h.Group(Wa),pointer:h.Group(ba),xr:h.Group($o,{label:"XR"})},Pc=h.getDefaultValues(Cc),wc={trackball:Wo,xr:Jo};var Dc;(a=>{a.DefaultAttribs={powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1,antialias:!0,preserveDrawingBuffer:!0,preferWebGl1:!1,handleResize:()=>{}},a.Params={resolutionMode:h.Select("auto",h.arrayToOptions(["auto","scaled","native"])),pixelScale:h.Numeric(1,{min:.1,max:2,step:.05}),pickScale:h.Numeric(.25,{min:.1,max:1,step:.05}),transparency:h.Select("wboit",[["blended","Blended"],["wboit","Weighted, Blended"],["dpoit","Depth Peeling"]])},a.DefaultProps=h.getDefaultValues(a.Params);function r(n,i,l={},m={}){let d={...a.DefaultAttribs,...l},u={...a.DefaultProps,...m},{powerPreference:c,failIfMajorPerformanceCaveat:p,antialias:g,preserveDrawingBuffer:x,preferWebGl1:y}=d,S=Si(n,{powerPreference:c,failIfMajorPerformanceCaveat:p,antialias:g,preserveDrawingBuffer:x,alpha:!0,depth:!0,stencil:!0,premultipliedAlpha:!0,preferWebGl1:y});if(S===null)throw new Error("Could not create a WebGL rendering context");let P=()=>{let I=u.pixelScale/(typeof window<"u"&&window?.devicePixelRatio||1);return u.resolutionMode==="auto"?Bi()?I:u.pixelScale:u.resolutionMode==="native"?u.pixelScale:I},D=()=>{let I=P();N.setPixelScale(I),L.setPixelScale(I)},{pickScale:A,transparency:M}=u,q=P(),N=zo.fromElement(n,{pixelScale:q,preventGestures:!0}),L=Ci(S,{pixelScale:q}),G=new vo(L,i,{pickScale:A,transparency:M});if(Oe){let I=S.getExtension("WEBGL_lose_context");I&&n.addEventListener("mousedown",ne=>{L.isContextLost||!ne.shiftKey||!ne.ctrlKey||!ne.altKey||(Oe&&console.log("lose context"),I.loseContext(),setTimeout(()=>{L.isContextLost&&(Oe&&console.log("restore context"),I.restoreContext())},1e3))},!1)}let H=new He,Z=I=>{L.setContextLost(),I.preventDefault(),Oe&&console.log("context lost"),H.next(_t())},j=()=>{L.isContextLost&&(L.handleContextRestored(()=>{G.draw.reset(),G.pick.reset(),G.illumination.reset()}),Oe&&console.log("context restored"))};n.addEventListener("webglcontextlost",Z,!1),n.addEventListener("webglcontextrestored",j,!1);let le=new lr(void 0);return{canvas:n,webgl:L,input:N,passes:G,attribs:d,get props(){return{...u}},contextLost:H,contextRestored:L.contextRestored,assetManager:i,changed:le,get pixelScale(){return P()},syncPixelScale:D,setProps:I=>{if(!I)return;let ne=!1,te=!1;I.resolutionMode!==void 0&&I.resolutionMode!==u.resolutionMode&&(u.resolutionMode=I.resolutionMode,te=!0),I.pixelScale!==void 0&&I.pixelScale!==u.pixelScale&&(u.pixelScale=I.pixelScale,te=!0),te&&(D(),d.handleResize(),ne=!0),I.pickScale!==void 0&&I.pickScale!==u.pickScale&&(u.pickScale=I.pickScale,G.setPickScale(I.pickScale),ne=!0),I.transparency!==void 0&&I.transparency!==u.transparency&&(u.transparency=I.transparency,G.setTransparency(I.transparency),ne=!0),ne&&le.next(void 0)},dispose:I=>{N.dispose(),n.removeEventListener("webglcontextlost",Z,!1),n.removeEventListener("webglcontextrestored",j,!1),L.destroy(I),H.complete(),le.complete()}}}a.fromCanvas=r})(Dc||={});var kc=typeof window<"u"?window.requestAnimationFrame:s=>setImmediate(()=>s(Date.now())),Ps=typeof window<"u"?window.cancelAnimationFrame:s=>clearImmediate(s);function ws(s,e){s&&(e.transparentBackground&&e.checkeredTransparentBackground?Object.assign(s.style,{"background-image":"linear-gradient(45deg, lightgrey 25%, transparent 25%, transparent 75%, lightgrey 75%, lightgrey), linear-gradient(45deg, lightgrey 25%, transparent 25%, transparent 75%, lightgrey 75%, lightgrey)","background-size":"60px 60px","background-position":"0 0, 30px 30px"}):Object.assign(s.style,{"background-image":"","background-size":"","background-position":""}))}var Rc;(e=>{function s(t,r={},a={}){let{webgl:n,input:i,passes:l,assetManager:m,canvas:d,contextLost:u}=t,c={...Xr(Pc),...Xr(r)},p={...Xr(wc),...Xr(a)},g=new Map,x=new Map,y=new lr(0),S=new He,P=_t(),D=new lr(0),A=new lr(0),M=new lr(0),{contextRestored:q}=n,N=0,L=0,G=128,H=128,Z=!1,j=0,le=Zt();ws(d,c),ut();let I=Kr.create(n,l.draw.transparency,{dColorMarker:oa(c.renderer,c.marking),dLightCount:c.renderer.light?.length});function ne(){return I.boundingSphere.radius*c.sceneRadiusFactor}let te=new _e({position:b.create(0,0,100),mode:c.camera.mode,fog:c.cameraFog.name==="on"?c.cameraFog.params.intensity:0,clipFar:c.cameraClipping.far,minNear:c.cameraClipping.minNear,fov:Et(c.camera.fov)},{x:N,y:L,width:G,height:H}),qe=new Tt(te,c.camera.stereo.params),fe=Uo.create(i,te,I,c.trackball,p.trackball),ce=new Qa(n,I,c),Ee=new fo(n,l.draw,d,c.hiZ),he=Ho.create(n,c.renderer);he.setOcclusionTest(Ee.isOccluded);let Le=new ia(n,I);Le.updateRequired(c);let ue={pickPadding:c.pickPadding,maxAsyncReadLag:mn.maxAsyncReadLag},W=new Ya(n,he,I,ce,l.pick,{x:N,y:L,width:G,height:H},ue),E=new Ja(n,he,I,ce,ue),se=new Ka(Ve,Wt,ft,i,te,fe,c.interaction),oe=new la(l.multiSample);l.draw.postprocessing.background.update(te,c.postprocessing.background,O=>{O&&Xe()});let ye=!1,ve={durationMs:void 0,snapshot:void 0,keyframes:void 0,easing:void 0,trajectory:void 0},we=!1;function tt(){return{transparency:t.props.transparency,transparentBackground:c.transparentBackground,hiZ:Ee.props.enabled,postprocessing:c.postprocessing.enabled,axes:Xr(ce.camera.props.axes)}}let Ae=tt();function Ye(){Object.assign(Ae,tt())}function qt(){c.postprocessing.enabled=Ae.postprocessing,c.transparentBackground=Ae.transparentBackground,t.setProps({transparency:Ae.transparency}),Ee.setProps({enabled:Ae.hiZ}),ce.camera.setProps({axes:Ae.axes})}function Dt(){c.postprocessing.enabled=!ze.props.disablePostprocessing,t.setProps({transparency:"blended"}),Ee.setProps({enabled:!1}),ce.camera.setProps({axes:{name:"off",params:{}}}),ze.session?.environmentBlendMode==="alpha-blend"&&(c.transparentBackground=jt)}let ze=new po(n,i,I,te,qe,ce.pointer,se,c.xr,p.xr),nt={request:async()=>{try{await ze.request()}catch(O){console.error(O),nt.requestFailed.next(O)}},end:()=>ze.end(),isSupported:new lr(!1),isPresenting:new lr(!1),requestFailed:new He},jt=!1,er=[ze.isSupported.subscribe(O=>nt.isSupported.next(O)),ze.togglePassthrough.subscribe(()=>{ze.session?.environmentBlendMode==="alpha-blend"&&(jt=!c.transparentBackground)}),ze.sessionChanged.subscribe(()=>{we=!0,ze.session?(Ye(),jt=ze.session?.environmentBlendMode==="alpha-blend",Dt()):qt(),Re(),nt.isPresenting.next(!!ze.session)})],kt=!0;function ft(O){let $=gr,z=br.Empty;if(O){let pe=ce.camera.getLoci(O);if(pe!==gr)return{loci:pe,repr:z};$=ce.handle.getLoci(O),g.forEach((Be,f)=>{let w=f.getLoci(O);ma(w)||(ma($)||console.warn("found another loci, this should not happen"),$=w,z=f)})}return{loci:$,repr:z}}let je=[];function tr(O,$){je.push([O,$])}let Ge=!1;function st(){let O=!1;Ge=!1;for(let[$,z]of je)O=Je($,z)||O;return je=[],O&&(I.update(void 0,!0),ce.handle.scene.update(void 0,!0),ce.camera.scene.update(void 0,!0),Le.updateRequired(c),Le.finalizeRequired(!0),S.next()),O}function Je(O,$){let{repr:z,loci:pe}=O,Be=!1;z?Be=z.mark(pe,$)||Be:g.forEach((Q,de)=>{Be=de.mark(pe,$)||Be});let f=ce.handle.mark(pe,$),w=ce.camera.mark(pe,$),F=f||w;return Ge=Ge||F,Be||F}function Gt(O,$){if(n.isContextLost||n.xr.session&&!$)return!1;let z=!1;we&&(zr(!1),we=!1,z=!0);let pe=n.getDrawingBufferSize();if(N>pe.width||N+G<0||L>pe.height||L+H<0)return!1;$&&(Dt(),c.transparentBackground=jt);let Be=st()&&(he.props.colorMarker||c.marking.enabled),f=!1;fe.update(j);let w=te.update(),F=ze.update($);if(!F&&$)return!1;let Q=he.props.enableAnimation&&I.hasAnimation,de=O||w||z||Z||F||Q;Z=!1,de&&(le=Zt(),Oe&&console.log("New frame"));let Pe=l.illumination.supported&&c.illumination.enabled&&!$,me=Rr.isEnabled(c.multiSample)&&!$,xe=(Pe?c.multiSample.mode==="on":me)?Nr(c.multiSample.sampleLevel):Gr,We=(ct,wt)=>{he.setOcclusionTest(Pe?null:Ee.isOccluded),k&&n.timer.mark("Canvas3D.render",{captureStats:!0});let nr=l.draw.marking.redraw({renderer:he,camera:te,scene:I,helper:ce,frame:le},c,xe,ct,wt);return k&&n.timer.markEnd("Canvas3D.render"),nr},vt=!Ge&&!de&&!oa(he.props,c.marking)&&!$&&c.camera.stereo.name!=="on"&&(!Pe||l.illumination.iteration>0);if(vt&&Be){let ct=Pe||c.multiSample.mode==="temporal";if(We(!0,ct?1:xe.length))return!0}if(Pe){if((de||Be)&&(he.setOcclusionTest(null),l.illumination.restart()),l.illumination.shouldRender(c.illumination)&&(!bt&&I.count>0||l.illumination.iteration===0||c.userInteractionReleaseMs===0)){k&&n.timer.mark("Canvas3D.render",{captureStats:!0});let ct={renderer:he,camera:te,scene:I,helper:ce,frame:le};l.illumination.render(ct,c,!0),k&&n.timer.markEnd("Canvas3D.render"),W.dirty=W.dirty||de,f=!0}}else{let ct=oe.update(Be||de,c.multiSample)&&!$;if(de||ct||Be){he.setOcclusionTest(Ee.isOccluded);let wt=te;(c.camera.stereo.name==="on"||F)&&(F||qe.update(),wt=qe),k&&n.timer.mark("Canvas3D.render",{captureStats:!0});let nr={renderer:he,camera:wt,scene:I,helper:ce,frame:le};if(me){let it=c.multiSample.reduceFlicker&&oa(he.props,c.marking)&&!w&&Be&&!fe.isAnimating;oe.render(nr,c,!0,it)}else l.draw.render(nr,c,!0);Ee.render(te),k&&n.timer.markEnd("Canvas3D.render"),W.dirty=W.dirty||de,f=!0}}return!f&&!Be&&vt&&l.draw.marking.needsMoreSamples&&(f=We(!1,no(c.multiSample.sampleLevel))),f}let Ot=!1,pt=!1,rt=!1;function Ue(O){if(!(pt||rt)){if(!Le.finalizeRequired(O?.isSynchronous)){Z=!0;return}Gt(!!O?.force,O?.xrFrame)&&kt&&D.next(_t()-P)}}function Xe(){Z=!0}let lt=0;function Er(O,$){rt||n.xr.session&&!$?.xrFrame||(j=O,he.setTime((j-P)/1e3),ar($?.isSynchronous),$?.updateControls&&fe.update(j),te.transition.tick(j),Ee.tick(),!$?.manualDraw&&(Ue({isSynchronous:$?.isSynchronous,xrFrame:$?.xrFrame}),!te.transition.inTransition&&!n.isContextLost&&se.tick(j)))}let Ct;function dr(O){return Ct=O,n.xr.session?n.xr.session.requestAnimationFrame(O):kc(O)}function Qe(O){Ct=void 0,n.xr.session?n.xr.session.cancelAnimationFrame(O):Ps(O)}function Pt(O,$){Er(_t(),{xrFrame:$}),lt=dr(Pt)}function ht(O){P=O,fe.start(O),se.resetTime(O)}function rr(){pt=!1;let O=_t();fe.start(O),se.resetTime(O),lt===0&&Pt(0)}function J(O=!1){pt=O,lt!==0&&(Qe(lt),lt=0)}function Re(){pt=!1,Ct&&dr(Ct)}function Ve(O){if(!n.isContextLost){if(Le.finalize(["pick"],!0),"origin"in O)return E.identify(O,te);{let $=c.camera.stereo.name==="on"?qe:te;return W.identify(O[0],O[1],$,le)}}}function Wt(O){if(!n.isContextLost){if(Le.finalize(["pick"],!0),"origin"in O)return E.asyncIdentify(O,te);{let $=c.camera.stereo.name==="on"?qe:te;return W.asyncIdentify(O[0],O[1],$,le)}}}function ar(O=!1){let $=_(O);Le.updateRequired(c),$&&(or(),Ot&&(ce.debug.isEnabled&&ce.debug.update(),Ue({force:!0}),Ot=!1),A.next(_t()))}function or(){if(!ye)return;nt.isPresenting.value||ze.resetScale();let O=I.boundingSphereVisible,{center:$,radius:z}=O;if(z>0){let pe=ve.durationMs??c.cameraResetDurationMs,Be=ve.easing??c.cameraResetEasing,f=ve.trajectory??c.cameraResetTrajectory,w=fe.props.autoAdjustMinMaxDistance;if(w.name==="on"){let Pe=w.params.minDistanceFactor*z+w.params.minDistancePadding,me=Math.max(w.params.maxDistanceFactor*z,w.params.maxDistanceMin);fe.setProps({minDistance:Pe,maxDistance:me})}let F=te.getFocus($,z),Q=typeof ve.snapshot=="function"?ve.snapshot(I,te):ve.snapshot,de=Q?{...F,...Q}:F;te.setState({...de,radiusMax:ne()},pe,{keyframes:ve.keyframes,easing:Be,trajectory:f})}ve.durationMs=void 0,ve.snapshot=void 0,ve.keyframes=void 0,ve.easing=void 0,ve.trajectory=void 0,ye=!1}let Rt=ot(),v=ot();function U(){if(te.state.radiusMax===0)return!0;if(te.transition.inTransition||ve.snapshot)return!1;let O=!0,$=!0;ot.set(v,te.state.target,te.state.radius);for(let z of I.renderables){if(!z.state.visible)continue;let pe=z.values.boundingSphere.ref.value;if(!pe.radius)continue;$=!1;let Be=b.distance(v.center,pe.center);if((Be>v.radius||Be>pe.radius||pe.radius>te.state.radiusMax)&&!ot.includes(Rt,pe))return!0;ot.overlaps(v,pe)&&(O=!1)}return O||!$&&v.radius<=.1}let X=250;function _(O){return I.needsCommit?(ot.copy(Rt,I.boundingSphereVisible),Ee.clear(),I.commit(O?void 0:X)?(M.next(0),ce.debug.isEnabled&&ce.debug.update(),!c.camera.manualReset&&(y.value===0||U())&&(ye=!0),Rt.radius===0&&(ve.durationMs=0),!c.camera.manualReset&&I.boundingSphere.radius>0&&te.setState({radiusMax:ne()},0),y.next(g.size),Oe&&ee(),!0):(M.next(I.commitQueueSize),!1)):!0}function ee(){let O=I.renderables.map(F=>({drawCount:F.values.drawCount.ref.value,instanceCount:F.values.instanceCount.ref.value,materialId:F.materialId,renderItemId:F.id,geometryType:F.values.dGeometryType.ref.value,"byteCount [MiB]":hr(F.getByteCount()/1024/1024,3),radius:hr(F.values.boundingSphere.ref.value.radius,3)}));console.groupCollapsed(`${O.length} RenderItems`),O.length<=64?console.table(O):console.log(O),console.log(JSON.stringify(n.stats,void 0,4));let{texture:$,cubeTexture:z,attribute:pe,elements:Be,pixelPack:f,renderbuffer:w}=n.resources.getByteCounts();console.log(JSON.stringify({texture:`${($/1024/1024).toFixed(3)} MiB`,cubeTexture:`${(z/1024/1024).toFixed(3)} MiB`,attribute:`${(pe/1024/1024).toFixed(3)} MiB`,elements:`${(Be/1024/1024).toFixed(3)} MiB`,pixelPack:`${(f/1024/1024).toFixed(3)} MiB`,renderbuffer:`${(w/1024/1024).toFixed(3)} MiB`},void 0,4)),console.log(JSON.stringify({renderables:`${(I.renderables.reduce((F,Q)=>F+Q.getByteCount(),0)/1024/1024).toFixed(3)} MiB`,passes:{draw:`${(l.draw.getByteCount()/1024/1024).toFixed(3)} MiB`,illumination:`${(l.illumination.getByteCount()/1024/1024).toFixed(3)} MiB`,pick:`${(l.pick.getByteCount()/1024/1024).toFixed(3)} MiB`,hiZ:`${(Ee.getByteCount()/1024/1024).toFixed(3)} MiB`}},void 0,4)),console.log(JSON.stringify({scene:{radius:hr(I.boundingSphere.radius,3),radiusVisible:hr(I.boundingSphereVisible.radius,3),transparency:I.transparency,markerAverage:hr(I.markerAverage,2),emissiveAverage:hr(I.emissiveAverage,2),wiggleAverage:hr(I.wiggleAverage,2),opacityAverage:hr(I.opacityAverage,2),transparencyMin:hr(I.transparencyMin,2),hasOpaque:I.hasOpaque,hasAnimation:I.hasAnimation,counts:{all:I.renderables.length,primitives:I.primitives.renderables.length,volumes:I.volumes.renderables.length}}},void 0,4)),k&&console.log(JSON.stringify(n.timer.formatedStats(),void 0,4)),console.groupEnd()}function ae(O){Ie(O);let $=g.get(O),z=new Set;O.renderObjects.forEach(pe=>z.add(pe)),$?Da.areEqual(z,$)||(z.forEach(pe=>{$.has(pe)||I.add(pe)}),$.forEach(pe=>{z.has(pe)||I.remove(pe)})):O.renderObjects.forEach(pe=>I.add(pe)),g.set(O,z),I.update(O.renderObjects,!1),Ot=!0,Oe&&ee()}function be(O){Ut(O);let $=g.get(O);$&&($.forEach(z=>I.remove(z)),g.delete(O),Ot=!0,Oe&&ee())}function Ie(O){x.has(O)||x.set(O,O.updated.subscribe($=>{O.state.syncManually||ae(O)}))}function Ut(O){let $=x.get(O);$&&($.unsubscribe(),x.delete(O))}function gt(){let O=I.boundingSphere.radius>0?100-Math.round(te.transition.target.radius/ne()*100):0;return{camera:{mode:te.state.mode,helper:{...ce.camera.props},stereo:{...c.camera.stereo},fov:Math.round(So(te.state.fov)),manualReset:!!c.camera.manualReset},cameraFog:te.state.fog>0?{name:"on",params:{intensity:te.state.fog}}:{name:"off",params:{}},cameraClipping:{far:te.state.clipFar,radius:O,minNear:te.state.minNear},cameraResetDurationMs:c.cameraResetDurationMs,cameraResetEasing:c.cameraResetEasing,cameraResetTrajectory:c.cameraResetTrajectory,sceneRadiusFactor:c.sceneRadiusFactor,transparentBackground:c.transparentBackground,checkeredTransparentBackground:c.checkeredTransparentBackground,dpoitIterations:c.dpoitIterations,pickPadding:c.pickPadding,userInteractionReleaseMs:c.userInteractionReleaseMs,viewport:c.viewport,postprocessing:{...c.postprocessing},marking:{...c.marking},multiSample:{...c.multiSample},illumination:{...c.illumination},hiZ:{...Ee.props},renderer:{...he.props},trackball:{...fe.props},interaction:{...se.props},handle:{...ce.handle.props},pointer:{...ce.pointer.props},xr:{...ze.props}}}let pr=u?.subscribe(()=>{rt=!0,W.dirty=!0}),Xt=q.subscribe(()=>{W.reset(),E.reset(),Ee.reset(),I.forEach(O=>{O.values.meta?.ref.value.reset&&(O.values.meta.ref.value.reset(),O.update())}),rt=!1,Ue({force:!0}),Ue({force:!0})}),ir=new lr(0);function zr(O=!0){l.updateSize(),ut(),at(),O&&Xe(),ir.next(+new Date)}ri(ee);let Wr=t.changed?.subscribe(()=>{I.setTransparency(l.draw.transparency),Xe()}),It=!1,bt=!1,yt=[i.drag.subscribe(()=>{It=!0}),i.interactionEnd.subscribe(()=>{It=!1}),mi(i.drag,i.pinch,i.wheel,i.interactionEnd).subscribe(()=>{S.next()}),S.subscribe(()=>{bt=!0}),S.pipe(fi(c.userInteractionReleaseMs)).subscribe(()=>{bt=It})];if(Oe&&d){let O,$=z=>{let pe=z&&dt.getBoundingSphere(dt.normalize(z,"residue"));Ee.debugOcclusion(pe)};i.click.subscribe(z=>{if(!z.modifiers.control||z.button!==2)return;let pe=Ve(T.create(z.x,z.y));if(!pe){O=void 0,$(O);return}O=ft(pe.id).loci,$(O)}),D.subscribe(()=>{setTimeout(()=>{$(O)},100)})}return{webgl:n,add:ae,remove:be,commit:ar,update:(O,$)=>{if(O){if(!g.has(O))return;I.update(O.renderObjects,!!$)}else I.update(void 0,!!$);Ot=!0},clear:()=>{x.forEach(O=>O.unsubscribe()),x.clear(),g.clear(),I.clear(),ce.debug.clear(),Xe(),y.next(g.size)},syncVisibility:()=>{te.state.radiusMax===0&&(ye=!0,ve.durationMs=0),I.syncVisibility()&&ce.debug.isEnabled&&ce.debug.update(),Xe()},requestDraw:Xe,tick:Er,animate:rr,resetTime:ht,pause:J,resume:Re,requestAnimationFrame:dr,cancelAnimationFrame:Qe,identify:Ve,asyncIdentify:Wt,mark:tr,getLoci:ft,handleResize:zr,requestResize:()=>{we=!0},requestCameraReset:O=>{Object.assign(ve,O),ye=!0},camera:te,boundingSphere:I.boundingSphere,boundingSphereVisible:I.boundingSphereVisible,get notifyDidDraw(){return kt},set notifyDidDraw(O){kt=O},didDraw:D,commited:A,commitQueueSize:M,reprCount:y,resized:ir,setProps:(O,$=!1)=>{let z=typeof O=="function"?wa(gt(),O):O;z.sceneRadiusFactor!==void 0&&(c.sceneRadiusFactor=z.sceneRadiusFactor,te.setState({radiusMax:ne()},0));let pe=Object.create(null);z.camera&&z.camera.mode!==void 0&&z.camera.mode!==te.state.mode&&(pe.mode=z.camera.mode);let Be=Math.round(So(te.state.fov));if(z.camera&&z.camera.fov!==void 0&&z.camera.fov!==Be&&(pe.fov=Et(z.camera.fov)),z.cameraFog!==void 0&&z.cameraFog.params){let f=z.cameraFog.name==="on"?z.cameraFog.params.intensity:0;f!==te.state.fog&&(pe.fog=f)}if(z.cameraClipping!==void 0&&(z.cameraClipping.far!==void 0&&z.cameraClipping.far!==te.state.clipFar&&(pe.clipFar=z.cameraClipping.far),z.cameraClipping.minNear!==void 0&&z.cameraClipping.minNear!==te.state.minNear&&(pe.minNear=z.cameraClipping.minNear),z.cameraClipping.radius!==void 0)){let f=ne()/100*(100-z.cameraClipping.radius);f>0&&f!==pe.radius&&(pe.radius=Math.max(f,.01))}Object.keys(pe).length>0&&te.setState(pe),z.camera?.helper&&ce.camera.setProps(z.camera.helper),z.camera?.manualReset!==void 0&&(c.camera.manualReset=z.camera.manualReset),z.camera?.stereo!==void 0&&(Object.assign(c.camera.stereo,z.camera.stereo),qe.setProps(c.camera.stereo.params)),z.cameraResetDurationMs!==void 0&&(c.cameraResetDurationMs=z.cameraResetDurationMs),z.cameraResetEasing!==void 0&&(c.cameraResetEasing=z.cameraResetEasing),z.cameraResetTrajectory!==void 0&&(c.cameraResetTrajectory=z.cameraResetTrajectory),z.transparentBackground!==void 0&&(c.transparentBackground=z.transparentBackground),z.checkeredTransparentBackground!==void 0&&(c.checkeredTransparentBackground=z.checkeredTransparentBackground),z.dpoitIterations!==void 0&&(c.dpoitIterations=z.dpoitIterations),z.pickPadding!==void 0&&(c.pickPadding=z.pickPadding,W.setPickPadding(c.pickPadding)),z.userInteractionReleaseMs!==void 0&&(c.userInteractionReleaseMs=z.userInteractionReleaseMs),z.viewport!==void 0&&(c.viewport===z.viewport||c.viewport.name===z.viewport.name&&oi(c.viewport.params,z.viewport.params)||(c.viewport=z.viewport,ut(),at())),z.postprocessing?.background&&(Object.assign(c.postprocessing.background,z.postprocessing.background),l.draw.postprocessing.background.update(te,c.postprocessing.background,f=>{f&&!$&&Xe()})),z.postprocessing&&Object.assign(c.postprocessing,z.postprocessing),z.marking&&Object.assign(c.marking,z.marking),z.illumination&&Object.assign(c.illumination,z.illumination),z.multiSample&&Object.assign(c.multiSample,z.multiSample),z.hiZ&&Ee.setProps(z.hiZ),(z.renderer||z.marking)&&I.setGlobals({dColorMarker:oa({colorMarker:z.renderer?.colorMarker??he.props.colorMarker},c.marking),dLightCount:z.renderer?.light?.length??he.props.light.length}),z.renderer&&he.setProps(z.renderer),z.trackball&&fe.setProps(z.trackball),z.interaction&&se.setProps(z.interaction),z.handle&&ce.handle.setProps(z.handle),z.pointer&&ce.pointer.setProps(z.pointer),z.xr&&ze.setProps(z.xr),pe.mode==="orthographic"&&(c.camera.stereo.name="off"),("transparentBackground"in z||"checkeredTransparentBackground"in z||z.renderer&&"backgroundColor"in z.renderer)&&ws(d,c),Le.updateRequired(c),$||Xe()},setAttribs:O=>{O.trackball&&fe.setAttribs(O.trackball),O.xr&&ze.setAttribs(O.xr)},getImagePass:(O={})=>new yo(n,m,he,I,te,ce,O),getRenderObjects(){let O=[];return I.forEach(($,z)=>O.push(z)),O},get props(){return gt()},get attribs(){return{trackball:fe.attribs,xr:ze.attribs}},get input(){return i},get stats(){return he.stats},get interaction(){return se.events},debugRegistry:ce.debug,xr:nt,dispose:()=>{pr?.unsubscribe(),Xt.unsubscribe(),Wr?.unsubscribe();for(let O of er)O.unsubscribe();er.length=0;for(let O of yt)O.unsubscribe();yt.length=0,Ps(lt),Ct=void 0,je=[],I.clear(),ce.debug.clear(),fe.dispose(),he.dispose(),se.dispose(),Ee.dispose(),W.dispose(),E.dispose(),ze.dispose(),y.complete(),S.complete(),D.complete(),ir.complete(),A.complete(),M.complete(),nt.isPresenting.complete(),nt.isSupported.complete(),nt.requestFailed.complete(),ai(ee)}};function ut(){let O=N,$=L,z=G,pe=H,Be=n.getDrawingBufferSize();c.viewport.name==="canvas"?(N=0,L=0,G=Be.width,H=Be.height):c.viewport.name==="static-frame"?(N=c.viewport.params.x*n.pixelRatio,H=c.viewport.params.height*n.pixelRatio,L=Be.height-H-c.viewport.params.y*n.pixelRatio,G=c.viewport.params.width*n.pixelRatio):c.viewport.name==="relative-frame"&&(N=Math.round(c.viewport.params.x*Be.width),H=Math.round(c.viewport.params.height*Be.height),L=Math.round(Be.height-H-c.viewport.params.y*Be.height),G=Math.round(c.viewport.params.width*Be.width)),(O!==N||$!==L||z!==G||pe!==H)&&(Z=!0)}function at(){W.setViewport(N,L,G,H),he.setViewport(N,L,G,H),Me.set(te.viewport,N,L,G,H),Me.set(fe.viewport,N,L,G,H),Ee.setViewport(N,L,G,H)}}e.create=s})(Rc||={});export{Bt as a,ji as b,Jr as c,Qi as d,_c as e,Mt as f,Aa as g,za as h,Os as i,As as j,Io as k,Va as l,Na as m,Ha as n,qa as o,$i as p,br as q,Vt as r,Ze as s,fp as t,Ws as u,re as v,Go as w,_a as x,bn as y,An as z,Hn as A,jn as B,Wn as C,_n as D,io as E,kv as F,$u as G,Ov as H,zv as I,Vv as J,Sc as K,Cc as L,Pc as M,Dc as N,Rc as O};
