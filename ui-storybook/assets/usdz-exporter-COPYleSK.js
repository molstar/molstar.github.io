import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{o as t,r as n,s as r}from"./zip-BqSuRSbJ.js";import{Ct as i,G as a,J as o,Tt as s,Wt as c,en as l,un as u}from"./param-definition-OHPHmB1q.js";import{et as d,t as f}from"./geometry-BlnjcNLD.js";import{n as p,t as m}from"./version-D-XYFwMT.js";import{n as h}from"./ascii-BZ_8n_9S.js";import{n as g,t as _}from"./mesh-exporter-DsZXFJMm.js";var v,y,b,x,S;function C(){return(C=e((()=>{f(),d(),p(),r(),l(),o(),n(),g(),v=i.fromArray,y=i.transformMat4,b=i.transformMat3,x=c.directionTransform,S=class e extends _{addMaterial(e,t,n,r){let i=`${e}|${t}|${n}|${r}`;if(this.materialMap.has(i))return this.materialMap.get(i);let o=this.materialMap.size;this.materialMap.set(i,o);let[s,c,l]=a.toRgbNormalized(e).map(e=>Math.round(e*1e3)/1e3);return this.materials.push(`
def Material "material${o}"
{
    token outputs:surface.connect = </material${o}/shader.outputs:surface>
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
`),o}async addMeshWithColors(t){let{mesh:n,values:r,isGeoTexture:o,mode:l,webgl:d,ctx:f}=t;if(l!==`triangles`)return;let p=s(),m=c(),h=i(),g=o?4:3,_=r.dColorType.ref.value,S=r.dOverpaintType.ref.value,C=r.dTransparencyType.ref.value,w=r.uAlpha.ref.value,T=r.aTransform.ref.value,E=r.uInstanceCount.ref.value,D=r.uMetalness.ref.value,O=r.uRoughness.ref.value,k;d&&n&&(_===`volume`||_===`volumeInstance`)&&(k=e.getInterpolatedColors(d,{vertices:n.vertices,vertexCount:n.vertexCount,values:r,stride:g,colorType:_}));let A;if(d&&n&&S===`volumeInstance`){let t=o?4:3;A=e.getInterpolatedOverpaint(d,{vertices:n.vertices,vertexCount:n.vertexCount,values:r,stride:t,colorType:S})}let j;if(d&&n&&C===`volumeInstance`){let t=o?4:3;j=e.getInterpolatedTransparency(d,{vertices:n.vertices,vertexCount:n.vertexCount,values:r,stride:t,colorType:C})}await f.update({isIndeterminate:!1,current:0,max:E});for(let n=0;n<E;++n){f.shouldUpdate&&await f.update({current:n+1});let{vertices:i,normals:c,indices:d,groups:_,vertexCount:S,drawCount:C,vertexMapping:E}=e.getInstance(t,n);s.fromArray(p,T,n*16),s.mul(p,this.centerTransform,p),x(m,p);let M=u.create(),N=u.create(),P=u.create();for(let e=0;e<S;++e)y(h,v(h,i,e*g),p),u.writeSafe(M,e===0?`(`:`,(`),u.writeFloat(M,h[0],1e4),u.writeSafe(M,`,`),u.writeFloat(M,h[1],1e4),u.writeSafe(M,`,`),u.writeFloat(M,h[2],1e4),u.writeSafe(M,`)`);for(let e=0;e<S;++e)b(h,v(h,c,e*g),m),u.writeSafe(N,e===0?`(`:`,(`),u.writeFloat(N,h[0],100),u.writeSafe(N,`,`),u.writeFloat(N,h[1],100),u.writeSafe(N,`,`),u.writeFloat(N,h[2],100),u.writeSafe(N,`)`);let F={values:r,groups:_,vertexCount:S,instanceIndex:n,isGeoTexture:o,mode:l,vertexMapping:E};for(let e=0;e<C;++e){let t=o?e:d[e];e>0&&u.writeSafe(P,`,`),u.writeInteger(P,t)}let I=new Uint8Array(C*3);for(let t=0;t<C;t+=3){let n=o?t:d[t],r=e.getColor(n,F,k,A);a.toArray(r,I,t)}e.quantizeColors(I,S);let L=new Map;for(let t=0;t<C;t+=3){let n=a.fromArray(I,t),r=e.getTransparency(t,F,j),i=Math.round(w*(1-r)*10)/10,o=this.addMaterial(n,i,D,O),s=L.get(o);s===void 0&&(s=[],L.set(o,s)),s.push(t/3)}let R;if(L.size===1)R=`rel material:binding = </material${L.keys().next().value}>`;else{let e=[];L.forEach((t,n)=>{e.push(`
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
`,...this.materials,...this.meshes].join(``),r=new Uint8Array(n.length);return h(r,n),{usdz:await t(e,{"model.usda":r},!0)}}async getBlob(e){let{usdz:t}=await this.getData(e);return new Blob([t],{type:`model/vnd.usdz+zip`})}constructor(e,t){super(),this.fileExtension=`usdz`,this.meshes=[],this.materials=[],this.materialMap=new Map;let n=s();s.fromUniformScaling(n,Math.min(1/(t*2),1)),s.translate(n,n,i.create(-(e.min[0]+e.max[0])/2,-e.min[1],-(e.min[2]+e.max[2])/2)),this.centerTransform=n}}})))()}C();export{S as UsdzExporter};