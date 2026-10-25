import{a as P}from"./chunk-MXLVYAVU.js";import{a as K}from"./chunk-BUXG3V4J.js";import"./chunk-7LO6EWGM.js";import{a as G}from"./chunk-RXLR3BK6.js";import"./chunk-I7C4T3GW.js";import"./chunk-IBDX6GMX.js";import"./chunk-43U4M42R.js";import"./chunk-JY64XCWB.js";import"./chunk-W654BLJ2.js";import"./chunk-UASFW2HM.js";import"./chunk-KHBNYRDQ.js";import{S as h,T as y,Ta as E,i as r,qa as S,z as D}from"./chunk-LBPJNYCX.js";import"./chunk-DCANE7XH.js";var q=y.fromArray,te=y.transformMat4,re=y.transformMat3,ae=D.directionTransform,L=class u extends P{constructor(n,a){super();this.fileExtension="usdz";this.meshes=[];this.materials=[];this.materialMap=new Map;let t=h();h.fromUniformScaling(t,Math.min(1/(a*2),1)),h.translate(t,t,y.create(-(n.min[0]+n.max[0])/2,-n.min[1],-(n.min[2]+n.max[2])/2)),this.centerTransform=t}addMaterial(n,a,t,i){let f=`${n}|${a}|${t}|${i}`;if(this.materialMap.has(f))return this.materialMap.get(f);let s=this.materialMap.size;this.materialMap.set(f,s);let[g,p,x]=S.toRgbNormalized(n).map(o=>Math.round(o*1e3)/1e3);return this.materials.push(`
def Material "material${s}"
{
    token outputs:surface.connect = </material${s}/shader.outputs:surface>
    def Shader "shader"
    {
        uniform token info:id = "UsdPreviewSurface"
        color3f inputs:diffuseColor = (${g},${p},${x})
        float inputs:opacity = ${a}
        float inputs:metallic = ${t}
        float inputs:roughness = ${i}
        token outputs:surface
    }
}
`),s}async addMeshWithColors(n){let{mesh:a,values:t,isGeoTexture:i,mode:f,graphics:s,ctx:g}=n;if(f!=="triangles")return;let p=h(),x=D(),o=y(),T=i?4:3,I=t.colorType.ref.value,U=t.overpaintType.ref.value,B=t.transparencyType.ref.value,W=t.uAlpha.ref.value,H=t.aTransform.ref.value,k=t.uInstanceCount.ref.value,J=t.uMetalness.ref.value,Q=t.uRoughness.ref.value,j;s&&a&&(I==="volume"||I==="volumeInstance")&&(j=await u.getInterpolatedColors(s,{vertices:a.vertices,vertexCount:a.vertexCount,values:t,stride:T,colorType:I}));let F;if(s&&a&&U==="volumeInstance"){let c=i?4:3;F=await u.getInterpolatedOverpaint(s,{vertices:a.vertices,vertexCount:a.vertexCount,values:t,stride:c,colorType:U})}let R;if(s&&a&&B==="volumeInstance"){let c=i?4:3;R=await u.getInterpolatedTransparency(s,{vertices:a.vertices,vertexCount:a.vertexCount,values:t,stride:c,colorType:B})}await g.update({isIndeterminate:!1,current:0,max:k});for(let c=0;c<k;++c){g.shouldUpdate&&await g.update({current:c+1});let{vertices:X,normals:Y,indices:O,groups:Z,vertexCount:C,drawCount:w,vertexMapping:_}=u.getInstance(n,c);h.fromArray(p,H,c*16),h.mul(p,this.centerTransform,p),ae(x,p);let l=r.create(),m=r.create(),b=r.create();for(let e=0;e<C;++e)te(o,q(o,X,e*T),p),r.writeSafe(l,e===0?"(":",("),r.writeFloat(l,o[0],1e4),r.writeSafe(l,","),r.writeFloat(l,o[1],1e4),r.writeSafe(l,","),r.writeFloat(l,o[2],1e4),r.writeSafe(l,")");for(let e=0;e<C;++e)re(o,q(o,Y,e*T),x),r.writeSafe(m,e===0?"(":",("),r.writeFloat(m,o[0],100),r.writeSafe(m,","),r.writeFloat(m,o[1],100),r.writeSafe(m,","),r.writeFloat(m,o[2],100),r.writeSafe(m,")");let V={values:t,groups:Z,vertexCount:C,instanceIndex:c,isGeoTexture:i,mode:f,vertexMapping:_};for(let e=0;e<w;++e){let d=i?e:O[e];e>0&&r.writeSafe(b,","),r.writeInteger(b,d)}let A=new Uint8Array(w*3);for(let e=0;e<w;e+=3){let d=i?e:O[e],v=u.getColor(d,V,j,F);S.toArray(v,A,e)}u.quantizeColors(A,C);let M=new Map;for(let e=0;e<w;e+=3){let d=S.fromArray(A,e),v=u.getTransparency(e,V,R),ee=Math.round(W*(1-v)*10)/10,N=this.addMaterial(d,ee,J,Q),$=M.get(N);$===void 0&&($=[],M.set(N,$)),$.push(e/3)}let z;if(M.size===1)z=`rel material:binding = </material${M.keys().next().value}>`;else{let e=[];M.forEach((d,v)=>{e.push(`
    def GeomSubset "g${v}"
    {
        uniform token elementType = "face"
        uniform token familyName = "materialBind"
        int[] indices = [${d.join(",")}]
        rel material:binding = </material${v}>
    }
`)}),z=e.join("")}this.meshes.push(`
def Mesh "mesh${this.meshes.length}"
{
    int[] faceVertexCounts = [${new Array(w/3).fill(3).join(",")}]
    int[] faceVertexIndices = [${r.getString(b)}]
    point3f[] points = [${r.getString(l)}]
    normal3f[] primvars:normals = [${r.getString(m)}] (
        interpolation = "vertex"
    )
    uniform token subdivisionScheme = "none"
    ${z}
}
`)}}async getData(n){let t=[`#usda 1.0
(
    customLayerData = {
        string creator = "Mol* ${G}"
    }
    metersPerUnit = 1
)
`,...this.materials,...this.meshes].join(""),i=new Uint8Array(t.length);return K(i,t),{usdz:await E(n,{"model.usda":i},!0)}}async getBlob(n){let{usdz:a}=await this.getData(n);return new Blob([a],{type:"model/vnd.usdz+zip"})}};export{L as UsdzExporter};
