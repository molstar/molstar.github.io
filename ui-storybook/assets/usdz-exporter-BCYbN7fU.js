import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{o as t,r as n,s as r}from"./zip-D3bxjTWi.js";import{Ct as i,Tt as a,W as o,Wt as s,en as c,q as l,un as u}from"./param-definition-xUqfTrAa.js";import{ba as d,hr as f}from"./structure-xg41b0Vn.js";import{n as p,t as m}from"./version-D-XYFwMT.js";import{n as h}from"./ascii-yozJAgvo.js";import{n as g,t as _}from"./mesh-exporter-BM6kNely.js";var v,y,b,x,S;function C(){return(C=e((()=>{f(),d(),p(),r(),c(),l(),n(),g(),v=i.fromArray,y=i.transformMat4,b=i.transformMat3,x=s.directionTransform,S=class e extends _{addMaterial(e,t,n,r){let i=`${e}|${t}|${n}|${r}`;if(this.materialMap.has(i))return this.materialMap.get(i);let a=this.materialMap.size;this.materialMap.set(i,a);let[s,c,l]=o.toRgbNormalized(e).map(e=>Math.round(e*1e3)/1e3);return this.materials.push(`
def Material "material${a}"
{
    token outputs:surface.connect = </material${a}/shader.outputs:surface>
    def Shader "shader"
    {
        uniform token info:id = "UsdPreviewSurface"
        color3f inputs:diffuseColor = (${s},${c},${l})
        float inputs:opacity = ${t}
        float inputs:metallic = ${n}
        float inputs:roughness = ${r}
        token outputs:surface
    }
}
`),a}async addMeshWithColors(t){let{mesh:n,values:r,isGeoTexture:c,mode:l,graphics:d,ctx:f}=t;if(l!==`triangles`)return;let p=a(),m=s(),h=i(),g=c?4:3,_=r.colorType.ref.value,S=r.overpaintType.ref.value,C=r.transparencyType.ref.value,w=r.uAlpha.ref.value,T=r.aTransform.ref.value,E=r.uInstanceCount.ref.value,D=r.uMetalness.ref.value,O=r.uRoughness.ref.value,k;d&&n&&(_===`volume`||_===`volumeInstance`)&&(k=await e.getInterpolatedColors(d,{vertices:n.vertices,vertexCount:n.vertexCount,values:r,stride:g,colorType:_}));let A;if(d&&n&&S===`volumeInstance`){let t=c?4:3;A=await e.getInterpolatedOverpaint(d,{vertices:n.vertices,vertexCount:n.vertexCount,values:r,stride:t,colorType:S})}let j;if(d&&n&&C===`volumeInstance`){let t=c?4:3;j=await e.getInterpolatedTransparency(d,{vertices:n.vertices,vertexCount:n.vertexCount,values:r,stride:t,colorType:C})}await f.update({isIndeterminate:!1,current:0,max:E});for(let n=0;n<E;++n){f.shouldUpdate&&await f.update({current:n+1});let{vertices:i,normals:s,indices:d,groups:_,vertexCount:S,drawCount:C,vertexMapping:E}=e.getInstance(t,n);a.fromArray(p,T,n*16),a.mul(p,this.centerTransform,p),x(m,p);let M=u.create(),N=u.create(),P=u.create();for(let e=0;e<S;++e)y(h,v(h,i,e*g),p),u.writeSafe(M,e===0?`(`:`,(`),u.writeFloat(M,h[0],1e4),u.writeSafe(M,`,`),u.writeFloat(M,h[1],1e4),u.writeSafe(M,`,`),u.writeFloat(M,h[2],1e4),u.writeSafe(M,`)`);for(let e=0;e<S;++e)b(h,v(h,s,e*g),m),u.writeSafe(N,e===0?`(`:`,(`),u.writeFloat(N,h[0],100),u.writeSafe(N,`,`),u.writeFloat(N,h[1],100),u.writeSafe(N,`,`),u.writeFloat(N,h[2],100),u.writeSafe(N,`)`);let F={values:r,groups:_,vertexCount:S,instanceIndex:n,isGeoTexture:c,mode:l,vertexMapping:E};for(let e=0;e<C;++e){let t=c?e:d[e];e>0&&u.writeSafe(P,`,`),u.writeInteger(P,t)}let I=new Uint8Array(C*3);for(let t=0;t<C;t+=3){let n=c?t:d[t],r=e.getColor(n,F,k,A);o.toArray(r,I,t)}e.quantizeColors(I,S);let L=new Map;for(let t=0;t<C;t+=3){let n=o.fromArray(I,t),r=e.getTransparency(t,F,j),i=Math.round(w*(1-r)*10)/10,a=this.addMaterial(n,i,D,O),s=L.get(a);s===void 0&&(s=[],L.set(a,s)),s.push(t/3)}let R;if(L.size===1)R=`rel material:binding = </material${L.keys().next().value}>`;else{let e=[];L.forEach((t,n)=>{e.push(`
    def GeomSubset "g${n}"
    {
        uniform token elementType = "face"
        uniform token familyName = "materialBind"
        int[] indices = [${t.join(`,`)}]
        rel material:binding = </material${n}>
    }
`)}),R=e.join(``)}this.meshes.push(`
def Mesh "mesh${this.meshes.length}"
{
    int[] faceVertexCounts = [${Array(C/3).fill(3).join(`,`)}]
    int[] faceVertexIndices = [${u.getString(P)}]
    point3f[] points = [${u.getString(M)}]
    normal3f[] primvars:normals = [${u.getString(N)}] (
        interpolation = "vertex"
    )
    uniform token subdivisionScheme = "none"
    ${R}
}
`)}}async getData(e){let n=[`#usda 1.0
(
    customLayerData = {
        string creator = "Mol* ${m}"
    }
    metersPerUnit = 1
)
`,...this.materials,...this.meshes].join(``),r=new Uint8Array(n.length);return h(r,n),{usdz:await t(e,{"model.usda":r},!0)}}async getBlob(e){let{usdz:t}=await this.getData(e);return new Blob([t],{type:`model/vnd.usdz+zip`})}constructor(e,t){super(),this.fileExtension=`usdz`,this.meshes=[],this.materials=[],this.materialMap=new Map;let n=a();a.fromUniformScaling(n,Math.min(1/(t*2),1)),a.translate(n,n,i.create(-(e.min[0]+e.max[0])/2,-e.min[1],-(e.min[2]+e.max[2])/2)),this.centerTransform=n}}})))()}C();export{S as UsdzExporter};