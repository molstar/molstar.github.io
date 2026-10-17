import{a as P}from"./chunk-ZBGQRWK5.js";import{c as K}from"./chunk-7JJIEGO2.js";import{a as G}from"./chunk-RXLR3BK6.js";import"./chunk-LJBF6CPP.js";import"./chunk-AOCCRDWK.js";import"./chunk-73TVMDCL.js";import"./chunk-55INLPL2.js";import"./chunk-ZHHE2XG3.js";import"./chunk-VIA7CHLF.js";import"./chunk-KHBNYRDQ.js";import"./chunk-FY6Y25VJ.js";import{La as E,R as h,S as y,i as r,oa as T,z as D}from"./chunk-CZB3H7J7.js";import"./chunk-DCANE7XH.js";var q=y.fromArray,te=y.transformMat4,re=y.transformMat3,ae=D.directionTransform,L=class u extends P{constructor(n,a){super();this.fileExtension="usdz";this.meshes=[];this.materials=[];this.materialMap=new Map;let t=h();h.fromUniformScaling(t,Math.min(1/(a*2),1)),h.translate(t,t,y.create(-(n.min[0]+n.max[0])/2,-n.min[1],-(n.min[2]+n.max[2])/2)),this.centerTransform=t}addMaterial(n,a,t,o){let f=`${n}|${a}|${t}|${o}`;if(this.materialMap.has(f))return this.materialMap.get(f);let s=this.materialMap.size;this.materialMap.set(f,s);let[g,p,x]=T.toRgbNormalized(n).map(i=>Math.round(i*1e3)/1e3);return this.materials.push(`
def Material "material${s}"
{
    token outputs:surface.connect = </material${s}/shader.outputs:surface>
    def Shader "shader"
    {
        uniform token info:id = "UsdPreviewSurface"
        color3f inputs:diffuseColor = (${g},${p},${x})
        float inputs:opacity = ${a}
        float inputs:metallic = ${t}
        float inputs:roughness = ${o}
        token outputs:surface
    }
}
`),s}async addMeshWithColors(n){let{mesh:a,values:t,isGeoTexture:o,mode:f,webgl:s,ctx:g}=n;if(f!=="triangles")return;let p=h(),x=D(),i=y(),S=o?4:3,b=t.dColorType.ref.value,U=t.dOverpaintType.ref.value,B=t.dTransparencyType.ref.value,W=t.uAlpha.ref.value,H=t.aTransform.ref.value,k=t.uInstanceCount.ref.value,J=t.uMetalness.ref.value,Q=t.uRoughness.ref.value,j;s&&a&&(b==="volume"||b==="volumeInstance")&&(j=u.getInterpolatedColors(s,{vertices:a.vertices,vertexCount:a.vertexCount,values:t,stride:S,colorType:b}));let F;if(s&&a&&U==="volumeInstance"){let l=o?4:3;F=u.getInterpolatedOverpaint(s,{vertices:a.vertices,vertexCount:a.vertexCount,values:t,stride:l,colorType:U})}let O;if(s&&a&&B==="volumeInstance"){let l=o?4:3;O=u.getInterpolatedTransparency(s,{vertices:a.vertices,vertexCount:a.vertexCount,values:t,stride:l,colorType:B})}await g.update({isIndeterminate:!1,current:0,max:k});for(let l=0;l<k;++l){g.shouldUpdate&&await g.update({current:l+1});let{vertices:X,normals:Y,indices:R,groups:Z,vertexCount:C,drawCount:w,vertexMapping:_}=u.getInstance(n,l);h.fromArray(p,H,l*16),h.mul(p,this.centerTransform,p),ae(x,p);let c=r.create(),m=r.create(),I=r.create();for(let e=0;e<C;++e)te(i,q(i,X,e*S),p),r.writeSafe(c,e===0?"(":",("),r.writeFloat(c,i[0],1e4),r.writeSafe(c,","),r.writeFloat(c,i[1],1e4),r.writeSafe(c,","),r.writeFloat(c,i[2],1e4),r.writeSafe(c,")");for(let e=0;e<C;++e)re(i,q(i,Y,e*S),x),r.writeSafe(m,e===0?"(":",("),r.writeFloat(m,i[0],100),r.writeSafe(m,","),r.writeFloat(m,i[1],100),r.writeSafe(m,","),r.writeFloat(m,i[2],100),r.writeSafe(m,")");let V={values:t,groups:Z,vertexCount:C,instanceIndex:l,isGeoTexture:o,mode:f,vertexMapping:_};for(let e=0;e<w;++e){let d=o?e:R[e];e>0&&r.writeSafe(I,","),r.writeInteger(I,d)}let A=new Uint8Array(w*3);for(let e=0;e<w;e+=3){let d=o?e:R[e],v=u.getColor(d,V,j,F);T.toArray(v,A,e)}u.quantizeColors(A,C);let M=new Map;for(let e=0;e<w;e+=3){let d=T.fromArray(A,e),v=u.getTransparency(e,V,O),ee=Math.round(W*(1-v)*10)/10,N=this.addMaterial(d,ee,J,Q),$=M.get(N);$===void 0&&($=[],M.set(N,$)),$.push(e/3)}let z;if(M.size===1)z=`rel material:binding = </material${M.keys().next().value}>`;else{let e=[];M.forEach((d,v)=>{e.push(`
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
    int[] faceVertexIndices = [${r.getString(I)}]
    point3f[] points = [${r.getString(c)}]
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
`,...this.materials,...this.meshes].join(""),o=new Uint8Array(t.length);return K(o,t),{usdz:await E(n,{"model.usda":o},!0)}}async getBlob(n){let{usdz:a}=await this.getData(n);return new Blob([a],{type:"model/vnd.usdz+zip"})}};export{L as UsdzExporter};
