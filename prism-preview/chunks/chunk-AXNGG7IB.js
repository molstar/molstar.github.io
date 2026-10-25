import{a as to,b as dc,c as Ki,d as Yi,f as ea}from"./chunk-6OQMRTKE.js";import{a as zi,e as vc}from"./chunk-6EVCCERL.js";import{b as Ji,c as xc,d as Gr}from"./chunk-RCHPLXOC.js";import{a as Jn,l as Xi,p as or,s as Zi}from"./chunk-SB6G6TER.js";import{a as Te}from"./chunk-WPAQBGLN.js";import{a as Qi}from"./chunk-CDZOOEU5.js";import{a as ro,b as ta,c as kr,f as no,g as oo,h as io}from"./chunk-RSWD7PUN.js";import{j as ac,l as sc,m as cc,o as Kn,p as Yn}from"./chunk-UNZHM6YE.js";import{a as Cs,b as Rs,c as Ps,d as Ds}from"./chunk-H3JVJ47G.js";import{a as nc,b as Zn,c as ar,d as Me,h as sr,i as mc,j as gc,l as yc,m as er,n as bc}from"./chunk-EPINQ4SJ.js";import{a as oc}from"./chunk-FS5BLXNE.js";import{a as rt,b as eo,d as fn,e as mn,f as uc,j as ir,l as lc}from"./chunk-QWGKM5XL.js";import{a as hc}from"./chunk-RXLR3BK6.js";import{a as Bt,b as $e,d as Qn,g as vr}from"./chunk-JK6V5PWQ.js";import{a as ic}from"./chunk-3TYFZ464.js";import{b as Pe,c as pc}from"./chunk-OUZEO4UA.js";import{g as pn,h as Js,i as ec,l as Xn,m as tc,n as rc}from"./chunk-EZKQKOEQ.js";import{a as qn,c as qi}from"./chunk-EXRVXDYY.js";import{d as Ne,e as je,f as Jt,g as We,h as He,i as Ie,t as Vr,u as ve}from"./chunk-CD3NLFHE.js";import{a as jn,b as Wn,c as et}from"./chunk-I7C4T3GW.js";import{c as nr,d as Qs}from"./chunk-BT4JACV3.js";import{g as Ks}from"./chunk-ENIXGKTI.js";import{a as Gs,h as Se}from"./chunk-6LTZ4CIX.js";import{b as bt,d as dt}from"./chunk-JHYVNEAF.js";import{A as Bs,Aa as pt,Ba as Ns,Bb as Hn,C as Hi,Cc as Ys,D as Nn,Da as xt,Db as $n,E as Ms,F as Vs,Fc as me,G as ks,H as $i,Nb as Nt,Ob as jt,Qb as qs,Vb as Xs,Y as Mr,c as Ni,e as Gt,ec as Zs,f as _s,g as Es,h as As,i as ws,j as Ls,k as Un,l as Is,m as Os,n as Qt,nb as js,ob as Ws,p as fe,pb as Hs,qb as $s,r as ji,rb as Be,s as Oe,t as zn,u as Fe,ub as rr,vb as zt,w as Wi,wb as Ft,x as Fs,y as Ut,yb as tt}from"./chunk-IBDX6GMX.js";import{f as ze}from"./chunk-3S2WR44W.js";import{c as Us,e as zs,f as Je,i as Z}from"./chunk-CKMV573R.js";import{f as Yt}from"./chunk-43U4M42R.js";import{a as fc,b as he}from"./chunk-OYI73O2L.js";import{b as R,c as ge}from"./chunk-GTJGSYB3.js";import{a as Fr,c as yt,d as xs,e as kn,g as z,h as xr,i as vs,j as be,k as Br,l as Ts,m as dn}from"./chunk-TJ2EFOCC.js";import{Ac as P,Ba as Mn,Ca as _e,D as Kt,Ea as Fi,Ib as Ir,Ma as ps,O as ds,Ob as Bi,Q as un,Qb as Mi,Sb as fs,Tb as ms,Ub as hs,Vb as gs,Wb as ys,Xb as Or,qc as bs,wc as Vn,ya as kt,za as Ye,zc as Qe}from"./chunk-W654BLJ2.js";import{e as cn,i as ls}from"./chunk-UASFW2HM.js";import{a as Ee}from"./chunk-KHBNYRDQ.js";import{d as ln,e as Ss,l as Gn,m as Vi,o as ki,p as Gi,x as Ui}from"./chunk-FY6Y25VJ.js";import{C as wr,D as rs,Ga as Lr,Ha as os,Ia as is,Ka as ie,L as Oi,N as In,O as sn,Q as On,S as ce,T as x,V as ns,Va as as,X as Fn,Za as ss,_ as Ke,a as Xt,b as j,c as ue,cb as cs,ib as us,j as gt,jb as Bn,kb as br,l as on,lb as Zt,m as De,o as F,qa as Ot,r as es,s as Ze,u as ts,w as Ii,wb as f,y as an,z as K}from"./chunk-LBPJNYCX.js";import{b as Li}from"./chunk-DCANE7XH.js";var Ce=class extends Error{constructor(t,r){super(r===void 0?t:`${t} (line ${r})`),this.name="ShaderPreprocessorError"}},jf=/^\s*#\s*(\w+)\s*(.*)$/,Wf=/^([A-Za-z_]\w*)(\(([^)]*)\))?(?:\s+(.*))?$/,hn=/^[A-Za-z_]\w*$/,Sc=/^\d+$/;function Rc(e,t,r={}){let n=!!r.expandMacros,o=new Map;for(let[u,l]of t)o.set(u,{body:l});let i=[],a=()=>i.length===0||i[i.length-1].active,s=[],c=$f(e).split(`
`);for(let u=0;u<c.length;++u){let l=c[u],d=u+1,p=l.match(jf);if(!p){a()&&s.push(n?co(l,o,new Set,d):l);continue}let m=p[1],h=p[2].replace(/\/\/.*$/,"").trim(),g=i[i.length-1];switch(m){case"if":case"ifdef":case"ifndef":{let S=a(),y=!1;if(S)if(m==="if")y=Cc(h,o,d);else{if(!hn.test(h))throw new Ce(`#${m} expects a name`,d);y=m==="ifdef"?o.has(h):!o.has(h)}i.push({active:y,taken:y,parentActive:S,seenElse:!1,line:d});break}case"elif":{if(!g)throw new Ce("#elif without #if",d);if(g.seenElse)throw new Ce("#elif after #else",d);let S=g.parentActive&&!g.taken&&Cc(h,o,d);g.active=S,g.taken||=S;break}case"else":{if(!g)throw new Ce("#else without #if",d);if(g.seenElse)throw new Ce("#else after #else",d);if(h)throw new Ce("unexpected text after #else",d);g.active=g.parentActive&&!g.taken,g.taken=!0,g.seenElse=!0;break}case"endif":{if(!g)throw new Ce("#endif without #if",d);if(h)throw new Ce("unexpected text after #endif",d);i.pop();break}case"define":{if(!a())break;let S=h.match(Wf);if(!S)throw new Ce(`invalid #define '${h}'`,d);let[,y,,C,T=""]=S;if(T.includes("#"))throw new Ce("'#' and '##' are not supported in macros",d);let I=C===void 0?{body:T.trim()}:{params:C.split(",").map(B=>B.trim()).filter(B=>B.length>0),body:T.trim()};if(I.params?.some(B=>!hn.test(B)))throw new Ce(`invalid parameters of macro '${y}'`,d);o.set(y,I),n||s.push(l);break}case"undef":{if(!a())break;if(!hn.test(h))throw new Ce("#undef expects a name",d);o.delete(h),n||s.push(l);break}case"pragma":throw new Ce(`unsupported pragma '${h}'`,d);default:throw new Ce(`unsupported directive '#${m}'`,d)}}if(i.length>0)throw new Ce("missing #endif",i[i.length-1].line);return s.join(`
`)}var Hf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*\+\+i\s*\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $f(e){return e.replace(Hf,qf)}function qf(e,t,r,n){let o="";for(let i=parseInt(t);i<parseInt(r);++i)o+=n.replace(/\[\s*i\s*\]/g,`[${i}]`).replace(/UNROLLED_LOOP_INDEX/g,`${i}`);return o}var ao=/\s*(defined\b|[A-Za-z_]\w*|\d+(?:\.\d*)?|&&|\|\||==|!=|<=|>=|[<>!()])/y,Tc={"||":1,"&&":2,"==":3,"!=":3,"<":4,">":4,"<=":4,">=":4};function Xf(e,t){let r=[];ao.lastIndex=0;let n=0;for(;n<e.length&&!/^\s*$/.test(e.slice(n));){ao.lastIndex=n;let o=ao.exec(e);if(!o)throw new Ce(`unsupported token in '${e}' at '${e.slice(n).trim()}'`,t);r.push(o[1]),n=ao.lastIndex}return r}function Cc(e,t,r){if(!e)throw new Ce("empty expression",r);let n=Xf(e,r),o=0,i=d=>{throw new Ce(`${d} in '${e}'`,r)},a=()=>o<n.length?n[o++]:i("unexpected end"),s=d=>{let p=t.get(d);return p?p.params?i(`function-like macro '${d}'`):Sc.test(p.body)?parseInt(p.body):i(`'${d}' is not an integer ('${p.body}')`):i(`undefined name '${d}'`)},c=()=>{let d=a();if(d==="!")return c()?0:1;if(d==="("){let p=u(0);return a()!==")"&&i("expected ')'"),p}if(d==="defined"){let p=n[o]==="(";p&&o++;let m=a();return hn.test(m)||i("defined expects a name"),p&&a()!==")"&&i("expected ')'"),t.has(m)?1:0}return Sc.test(d)?parseInt(d):hn.test(d)?s(d):i(`unexpected '${d}'`)},u=d=>{let p=c();for(;o<n.length&&(Tc[n[o]]??0)>d;){let m=n[o++],h=u(Tc[m]);p=Zf(m,p,h)}return p},l=u(0);return o<n.length&&i(`unexpected '${n[o]}'`),l!==0}function Zf(e,t,r){switch(e){case"||":return t||r?1:0;case"&&":return t&&r?1:0;case"==":return t===r?1:0;case"!=":return t!==r?1:0;case"<":return t<r?1:0;case">":return t>r?1:0;case"<=":return t<=r?1:0;case">=":return t>=r?1:0}throw new Ce(`unsupported operator '${e}'`)}var so=/[A-Za-z_]\w*/g;function co(e,t,r,n){let o="",i=0;for(so.lastIndex=0;;){so.lastIndex=i;let a=so.exec(e);if(!a)break;let s=a[0],c=a.index,u=c+s.length;if(c>0&&/[\w.]/.test(e[c-1])){o+=e.slice(i,u),i=u;continue}let l=t.get(s);if(!l||r.has(s)){o+=e.slice(i,u),i=u;continue}let d=new Set(r).add(s);if(!l.params){o+=e.slice(i,c)+co(l.body,t,d,n),i=u;continue}let p=e.slice(u).match(/^\s*\(/);if(!p){o+=e.slice(i,u),i=u;continue}let{args:m,close:h}=Kf(e,u+p[0].length,s,n);if(m.length!==l.params.length&&!(l.params.length===0&&m.length===1&&!m[0]))throw new Ce(`macro '${s}' expects ${l.params.length} arguments, got ${m.length}`,n);let g=m.map(C=>co(C,t,r,n).trim()),S=l.params,y=l.body.replace(so,C=>{let T=S.indexOf(C);return T>=0?g[T]:C});o+=e.slice(i,c)+co(y,t,d,n),i=h+1,u=i}return o+e.slice(i)}function Kf(e,t,r,n){let o=[],i=0,a="";for(let s=t;s<e.length;++s){let c=e[s];if(c==="(")i++;else if(c===")"){if(i===0)return o.push(a),{args:o,close:s};i--}else if(c===","&&i===0){o.push(a),a="";continue}a+=c}throw new Ce(`unterminated invocation of macro '${r}'`,n)}var Pc=`
precision mediump float;

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
`;var Dc=`
precision mediump float;

varying vec4 vPosition;

void main() {
    vPosition = vec4(aPosition, 1.0, 1.0);
    gl_Position = vec4(aPosition, 1.0, 1.0);
}
`;var _c=`
    precision highp float;

    void main() {
        vec2 coords = gl_FragCoord.xy / uTexSize;
        gl_FragColor = texture2D(tDpoitBackColor, coords);
        if (gl_FragColor.a == 0.0) {
            discard;
        }
    }
`;var Ec=`
precision highp float;
precision highp int;

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
`;var Ac=`
precision highp float;
precision highp int;

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
`;var N=`
// TODO find a better place for these convenience defines

#if defined(dRenderVariant_colorBlended) || defined(dRenderVariant_colorWboit) || defined(dRenderVariant_colorDpoit)
    #define dRenderVariant_color
#endif

#if defined(dColorType_texture) || defined(dColorType_grid)
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

// one texel of a packed SSAO target for \`getSsaoUpsampled\`: its occlusion times its weight, the weight added to
// \`weightSum\` (bilinear, and by how close its linear depth in \`zw\` is to \`viewZ\`)
float ssaoUpsampleTexel(const in sampler2D tex, const in vec2 size, vec2 texel, const in float bilinear, const in float viewZ, const in float near, const in float far, inout float weightSum) {
    texel = clamp(texel, vec2(0.0), size - 1.0);
    vec4 v = texture2D(tex, (texel + 0.5) / size);
    float texelViewZ = unpackRGToUnitInterval(v.zw) * (far - near) - far;
    float weight = bilinear / (0.001 + abs(texelViewZ - viewZ));
    weightSum += weight;
    return unpackSsao(v) * weight;
}

// occlusion of a packed SSAO target of a lower resolution (\`size\` texels) at \`coords\`, for a pixel at view z
// \`viewZ\`: the four nearest texels weighted bilinearly and by their depth, so that occlusion does not bleed across
// depth edges
float getSsaoUpsampled(const in sampler2D tex, const in vec2 size, const in vec2 coords, const in float viewZ, const in float near, const in float far) {
    vec2 p = coords * size - 0.5;
    vec2 i = floor(p);
    vec2 f = p - i;
    float weightSum = 0.0;
    float sum = ssaoUpsampleTexel(tex, size, i, (1.0 - f.x) * (1.0 - f.y), viewZ, near, far, weightSum);
    sum += ssaoUpsampleTexel(tex, size, i + vec2(1.0, 0.0), f.x * (1.0 - f.y), viewZ, near, far, weightSum);
    sum += ssaoUpsampleTexel(tex, size, i + vec2(0.0, 1.0), (1.0 - f.x) * f.y, viewZ, near, far, weightSum);
    sum += ssaoUpsampleTexel(tex, size, i + vec2(1.0, 1.0), f.x * f.y, viewZ, near, far, weightSum);
    return weightSum > 0.0 ? sum / weightSum : 1.0;
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

// window depth of a clip z / w, and back: the clip depth range is [0, 1] with \`clipZeroToOne\`, [-1, 1] otherwise
float clipZToDepth(const in float z) {
    #ifdef clipZeroToOne
        return z;
    #else
        return 0.5 + 0.5 * z;
    #endif
}

float depthToClipZ(const in float depth) {
    #ifdef clipZeroToOne
        return depth;
    #else
        return depth * 2.0 - 1.0;
    #endif
}

vec3 screenSpaceToViewSpace(const in vec3 ssPos, const in mat4 invProjection) {
    vec4 p = vec4(ssPos.xy * 2.0 - 1.0, depthToClipZ(ssPos.z), 1.0);
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
    return (2.0 * near) / (2.0 * near + depth * (far - near));
}

// window depth is reversed (near 1, far 0, see \`DepthRangeTag\`), which keeps the precision of small (far) depths
float perspectiveDepthToViewZ(const in float depth, const in float near, const in float far) {
    return -(near * far) / (near + (far - near) * depth);
}

float orthographicDepthToViewZ(const in float depth, const in float near, const in float far) {
    return depth * (far - near) - far;
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
`;var wc=`
precision highp float;
precision highp int;

${N}

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
    return max(getDepthOpaque(coords), getDepthTransparent(coords));
}

bool isBackground(const in float depth) {
    // the far plane (depth is reversed), packed or raw
    return depth == 0.0;
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
`;var Lc=`
precision mediump float;

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
`;var ra=`
precision highp float;

void main() {
    vec2 coords = gl_FragCoord.xy / uTexSize;
    gl_FragColor = texture2D(tColor, coords) * uWeight;
}
`;var Ic=`
precision highp float;

varying vec3 vPosition;
varying vec4 vColor;

const float p = 2.0;

void main() {
    vec2 v = gl_FragCoord.xy - vec2(uCurrentX, uCurrentY) - 0.5;
    vec3 fragPos = vec3(v.x, v.y, uCurrentSlice);
    float dist = distance(fragPos, vPosition);
    if (dist > p) discard;

    float f = p - dist;
    gl_FragColor = vColor * f;
    gl_FragData[1] = vec4(f);
}
`;var we=`
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
`;var Oc=`
precision highp float;

${N}
${we}

#define SampleID int(aSample)

varying vec3 vPosition;
varying vec4 vColor;

void main() {
    vec3 position = readFromTexture(tPosition, SampleID, uGeoTexDim).xyz;
    float group = unpackRGBToInt(readFromTexture(tGroup, SampleID, uGeoTexDim).rgb);

    position = (aTransform * vec4(position, 1.0)).xyz;
    gl_PointSize = 7.0;
    vPosition = (position - uBboxMin) / uResolution;
    gl_Position = vec4(((position - uBboxMin) / uBboxSize) * 2.0 - 1.0, 1.0);
    #ifdef clipZeroToOne
        // z inside the clip depth range, as with [-1, 1]
        gl_Position.z = gl_Position.z * 0.5 + 0.5;
    #endif

    #if defined(dColorType_group)
        vColor = readFromTexture(tColor, group, uColorTexDim);
    #elif defined(dColorType_groupInstance)
        vColor = readFromTexture(tColor, aInstance * float(uGroupCount) + group, uColorTexDim);
    #endif
}
`;var Fc=`
precision highp float;

void main(void) {
    vec2 coords = gl_FragCoord.xy / uTexSize;
    vec4 color = texture2D(tColor, coords);
    float count = texture2D(tCount, coords).r;

    gl_FragColor = color / count;
}
`;var Bc=`
precision highp float;

${N}

void main() {
    vec2 coords = gl_FragCoord.xy / uTexSize;
    #ifdef dPackDepth
        gl_FragColor = packDepthToRGBA(texture2D(tColor, coords).r);
    #else
        gl_FragColor = texture2D(tColor, coords);
    #endif
}
`;var nt=`
#if dClipObjectCount != 0
    #if defined(dClipping)
        #if __VERSION__ == 100 || !defined(dVaryingGroup)
            varying float vClipping;
        #else
            flat in float vClipping;
        #endif
    #endif
#endif

#if defined(dNeedsMarker)
    #if __VERSION__ == 100 || !defined(dVaryingGroup)
        varying float vMarker;
    #else
        flat in float vMarker;
    #endif
#endif

#if defined(dRenderVariant_colorDpoit)
    #define MAX_DPOIT_DEPTH 99999.0 // NOTE constant also set in TypeScript
#endif

varying vec3 vModelPosition;
varying vec3 vViewPosition;

bool interior;

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
    return clipZToDepth(clipZW.x / clipZW.y);
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
`;var vt=`
#if defined(dRenderVariant_color) || defined(dRenderVariant_tracing) || defined(dRenderVariant_emissive)
    #if defined(dColorType_varying)
        varying vec4 vColor;
    #endif

    #ifdef dUsePalette
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
`;var cr=`
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
`;var ye=`
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

    // bit of the clip object \`index\` in the clipping groups flag
    int clipBit(const in int index) {
        int bit = 1;
        for (int i = 0; i < 16; ++i) {
            if (i == index) break;
            bit *= 2;
        }
        return bit;
    }
#else
    bool hasBit(const in int mask, const in int bit) {
        return (mask & bit) == 0;
    }

    // bit of the clip object \`index\` in the clipping groups flag
    int clipBit(const in int index) {
        return 1 << index;
    }
#endif

#if dClipObjectCount != 0
    bool clipIgnored(const in int index) {
        #if defined(dClipping)
            int flag = int(floor(vClipping * 255.0 + 0.5));
            return flag != 0 && !hasBit(flag, clipBit(index));
        #else
            return false;
        #endif
    }

    bool clipTest(const in vec3 center) {
        // flag is a bit-flag for clip-objects to ignore
        #if defined(dClipping)
            int flag = int(floor(vClipping * 255.0 + 0.5));
        #else
            int flag = 0;
        #endif

        #pragma unroll_loop_start
        for (int i = 0; i < dClipObjectCount; ++i) {
            if (UNROLLED_LOOP_INDEX != uSolidInteriorClip && (flag == 0 || hasBit(flag, clipBit(UNROLLED_LOOP_INDEX)))) {
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
            if (UNROLLED_LOOP_INDEX != uSolidInteriorClip && (flag == 0 || hasBit(flag, clipBit(UNROLLED_LOOP_INDEX)))) {
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
                if (UNROLLED_LOOP_INDEX != uSolidInteriorClip && (flag == 0 || hasBit(flag, clipBit(UNROLLED_LOOP_INDEX)))) {
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
`;var qe=`
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
`;var ot=`
#if defined(dClipVariant_pixel) && dClipObjectCount != 0
    if (clipTest(vModelPosition / uModelScale))
        discard;
#endif
`;var St=`
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
    // behind the opaque depth (depth is reversed)
    if (fragmentDepth < getDepth(gl_FragCoord.xy / uDrawingBufferSize)) {
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
    // dim emitters behind a transparent blocker by its coverage (tDepthAlpha packs front depth+alpha)
    vec2 emissiveBlocker = unpackRGBAToDepthWithAlpha(texture2D(tDepthAlpha, gl_FragCoord.xy / uDrawingBufferSize));
    if (fragmentDepth < emissiveBlocker.x - 0.0001) {
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
`;var Tt=`
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
`;var it=`
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
`;var at=`
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
        float markingDepth = unpackRGBAToDepthWithAlpha(texture2D(tDepthAlpha, gl_FragCoord.xy / uDrawingBufferSize)).x;
        depthTest = fragmentDepth <= markingDepth ? 1.0 : 0.0;
    }
    bool isHighlight = (uMarkerPriority == 1 && marker != 2.0) || (uMarkerPriority != 1 && marker == 1.0);
    float viewZ = depthToViewZ(uIsOrtho, fragmentDepth, uNear, uFar);
    float fogFactor = smoothstep(uFogNear, uFogFar, abs(viewZ));
    if (fogFactor == 1.0)
        discard;
    material = packMarkingMask(depthTest, isHighlight, 1.0 - fogFactor, markingOpacity);
}
`;var Ur=`
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
`;var ur=`
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
`;var Ve=`

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
`;var ke=`
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
`;var Ge=`
#if defined(dRenderVariant_colorWboit)
    if (uRenderMask == MaskOpaque) {
        if (preFogAlpha < 1.0) {
            discard;
        }
    } else if (uRenderMask == MaskTransparent) {
        if (preFogAlpha != 1.0 && fragmentDepth > getDepth(gl_FragCoord.xy / uDrawingBufferSize)) {
            #ifdef dTransparentBackfaces_off
                if (interior) discard;
            #endif
            float alpha = gl_FragColor.a;
            // depth is reversed: larger in front
            float wboitWeight = alpha * clamp(pow(fragmentDepth, 2.0), 0.01, 1.0);
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
`;var st=`
#if defined(dRenderVariant_colorDpoit)
    if (uRenderMask == MaskOpaque) {
        if (preFogAlpha < 1.0) {
            discard;
        }
    } else if (uRenderMask == MaskTransparent) {
        vec2 coords = gl_FragCoord.xy / uDrawingBufferSize;
        if (preFogAlpha != 1.0 && fragmentDepth > getDepth(coords)) {
            #ifdef dTransparentBackfaces_off
                if (interior) discard;
            #endif

            // adapted from https://github.com/tsherif/webgl2examples
            // The MIT License, Copyright 2017 Tarek Sherif, Shuai Shao

            // peeling works with depth increasing away from the camera (depth is reversed)
            float peelDepth = 1.0 - fragmentDepth;
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

            if (peelDepth < nearestDepth || peelDepth > furthestDepth) {
                // Skip this depth since it's been peeled.
                return;
            }

            if (peelDepth > nearestDepth && peelDepth < furthestDepth) {
                // This needs to be peeled.
                // The ones remaining after MAX blended for
                // all need-to-peel will be peeled next pass.
                gl_FragData[2].rg = vec2(-peelDepth, peelDepth);
                return;
            }

            // write to back and front color buffer
            if (peelDepth == nearestDepth) {
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
`;var Mc=`
precision highp float;
precision highp int;

#define bumpEnabled

varying mat4 vTransform;
varying vec3 vStart;
varying vec3 vEnd;
varying float vSize;
varying float vCap;

${N}
${nt}
${vt}
${cr}
${ye}

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
        float sNear = frontDepth < 1.0 ? 0.0 : clamp((nearT - frontT) / (t - frontT), 0.0, 1.0);
        #if defined(dClipVariant_pixel) && dClipObjectCount != 0
            float sCap = objectClipped || frontDepth >= 1.0 ? clipExit(frontModelPosition / uModelScale, modelPosition / uModelScale, sNear) : sNear;
            if (sCap < 0.0) return false;
        #else
            float sCap = sNear;
        #endif
        if (sCap == sNear && frontDepth >= 1.0) {
            fragmentDepth = 1.0 - (0.0000002 / vSize);
            cameraNormal = -rayDir;
            viewPosition = cameraRayOrigin + nearT * cameraRayDir;
            modelPosition = (uInvView * vec4(viewPosition, 1.0)).xyz;
        }
        #if defined(dClipVariant_pixel) && dClipObjectCount != 0
            else if (objectClipped || frontDepth >= 1.0) {
                modelPosition = mix(frontModelPosition, modelPosition, sCap);
                viewPosition = (uView * vec4(modelPosition, 1.0)).xyz;
                fragmentDepth = calcDepth(viewPosition) - (0.0000002 / vSize);
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
        return fragmentDepth < 1.0;
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
    // no front yet: at the far plane (depth is reversed)
    float frontDepth = 0.0;
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
                fragmentDepth = 2.0;
            }
        #endif
        if (fragmentDepth < 1.0) return true;
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
                        fragmentDepth = 2.0;
                    }
                #endif
                if (fragmentDepth < 1.0) {
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
                        fragmentDepth = 2.0;
                    }
                #endif
                if (fragmentDepth < 1.0) {
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
            if (fragmentDepth < 1.0) {
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
                if (fragmentDepth < 1.0) {
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
                if (fragmentDepth < 1.0) {
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

    ${qe}
    if (!isCap) {
        ${ot}
    }

    #ifdef dNeedsNormal
        mat3 normalMatrix = adjoint(uView);
        vec3 normal = normalize(normalMatrix * -normalize(cameraNormal));
    #endif

    ${St}
    ${Tt}

    #if defined(dRenderVariant_pick)
        ${it}
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
        ${at}
        gl_FragColor = material;
    #elif defined(dRenderVariant_emissive)
        gl_FragColor = material;
    #elif defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
        ${Ur}
        ${ur}
        ${Ve}

        #if defined(dRenderVariant_color)
            ${ke}
            ${Ge}
            ${st}
        #elif defined(dRenderVariant_tracing)
            gl_FragData[1] = vec4(normal, emissive);
            gl_FragData[2] = vec4(material.rgb, uDensity);
        #endif
    #endif
}
`;var ct=`
#if dClipObjectCount != 0
    #if defined(dClipping)
        #if __VERSION__ == 100 || !defined(dVaryingGroup)
            varying float vClipping;
        #else
            flat out float vClipping;
        #endif
    #endif
#endif

#if defined(dNeedsMarker)
    #if __VERSION__ == 100 || !defined(dVaryingGroup)
        varying float vMarker;
    #else
        flat out float vMarker;
    #endif
#endif

varying vec3 vModelPosition;
varying vec3 vViewPosition;

#if defined(emulateVertexId)
    #define VertexID int(aVertex)
#else
    // int() is needed for some Safari versions
    // see https://bugs.webkit.org/show_bug.cgi?id=244152
    #define VertexID int(gl_VertexID)
#endif

#if defined(enabledMultiDraw)
    #define DrawID gl_DrawID
#else
    #define DrawID uDrawId
#endif

#if defined(dSegmented)
    // per-instance segment data for merged render items, see SegmentSchema
    #define groupInstanceIndex(inst, grp) (aSegment.y + (inst) * aSegment.x + (grp))
    #define groupIndex(grp) (aSegment.z + (grp))
    #define InvariantBoundingSphere aSegmentSphere
#else
    #define groupInstanceIndex(inst, grp) ((inst) * float(uGroupCount) + (grp))
    #define groupIndex(grp) (grp)
    #define InvariantBoundingSphere uInvariantBoundingSphere
#endif
// the index of the marker and layer data, per instance or group instance (uInstanceGranularity)
#define granularityIndex(inst, grp) (uInstanceGranularity ? (inst) : groupInstanceIndex(inst, grp))
`;var Ct=`
#if defined(dRenderVariant_color) || defined(dRenderVariant_tracing) || defined(dRenderVariant_emissive)
    #if defined(dColorType_texture) || defined(dColorType_grid) || defined(dColorType_direct)
        varying vec4 vColor;
    #endif

    #ifdef dUsePalette
        varying float vPaletteV;
    #endif

    #ifdef dOverpaint
        #if defined(dOverpaintType_texture) || defined(dOverpaintType_vertexInstance) || defined(dOverpaintType_volumeInstance)
            varying vec4 vOverpaint;
        #endif
    #endif

    #ifdef dEmissive
        #if defined(dEmissiveType_texture) || defined(dEmissiveType_vertexInstance) || defined(dEmissiveType_volumeInstance)
            varying float vEmissive;
        #endif
    #endif

    #ifdef dSubstance
        #if defined(dSubstanceType_texture) || defined(dSubstanceType_vertexInstance) || defined(dSubstanceType_volumeInstance)
            varying vec4 vSubstance;
        #endif
    #endif
#elif defined(dRenderVariant_emissive)
    #ifdef dEmissive
        #if defined(dEmissiveType_texture) || defined(dEmissiveType_vertexInstance) || defined(dEmissiveType_volumeInstance)
            varying float vEmissive;
        #endif
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
    #if defined(dTransparencyType_texture) || defined(dTransparencyType_vertexInstance) || defined(dTransparencyType_volumeInstance)
        varying float vTransparency;
    #endif
#endif
`;var Wt=`
vec3 applyWiggle(vec3 pos, float groupId, float instanceId) {
    if (!uEnableAnimation) return pos;
    float amplitude = uWiggleAmplitude;
    #ifdef dWiggle
        amplitude += readFromTexture(tWiggle, granularityIndex(instanceId, groupId), uWiggleTexDim).r * uWiggleStrength;
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
`;var lr=`
#ifdef dGeometryType_textureMesh
    float group = unpackRGBToInt(readFromTexture(tGroup, vertexId, uGeoTexDim).rgb);
#else
    float group = aGroup;
#endif
`;var Rt=`
#if defined(dRenderVariant_color) || defined(dRenderVariant_tracing) || defined(dRenderVariant_emissive)
    #if defined(dColorType_texture)
        // the texture's index by the color type (\`ColorTypeIndex\`): instance, group, groupInstance, vertex,
        // vertexInstance
        float colorIndex = aInstance;
        if (uColorIndexType == 1) {
            colorIndex = groupIndex(group);
        } else if (uColorIndexType == 2) {
            colorIndex = groupInstanceIndex(aInstance, group);
        } else if (uColorIndexType == 3) {
            colorIndex = float(vertexId);
        } else if (uColorIndexType == 4) {
            colorIndex = float(int(aInstance) * uVertexCount + vertexId);
        }
        #if defined(dDualColor)
            // two colors per group, except for color mode 2 (cylinders)
            bool dualColor = uColorIndexType == 1 || uColorIndexType == 2;
            vec4 color2;
            if (dualColor && aColorMode != 2.0) {
                vColor.rgb = readFromTexture(tColor, colorIndex * 2.0, uColorTexDim).rgb;
                color2.rgb = readFromTexture(tColor, colorIndex * 2.0 + 1.0, uColorTexDim).rgb;
            } else {
                vColor.rgb = readFromTexture(tColor, colorIndex, uColorTexDim).rgb;
            }
        #else
            vColor.rgb = readFromTexture(tColor, colorIndex, uColorTexDim).rgb;
        #endif
    #elif defined(dColorType_grid)
        // the local position (volume) or the model position (volumeInstance), see \`ColorTypeIndex\`
        vec3 cgridSource = uColorIndexType == 1 ? vModelPosition / uModelScale : position;
        vec3 cgridPos = (uColorGridTransform.w * (cgridSource - uColorGridTransform.xyz)) / uColorGridDim;
        vColor.rgb = texture3dFrom2dLinear(tColorGrid, cgridPos, uColorGridDim, uColorTexDim).rgb;
    #endif

    #ifdef dUsePalette
        vPaletteV = ((vColor.r * 256.0 * 256.0 * 255.0 + vColor.g * 256.0 * 255.0 + vColor.b * 255.0) - 1.0) / PALETTE_SCALE;
    #endif

    #ifdef dOverpaint
        #if defined(dOverpaintType_texture)
            vOverpaint = readFromTexture(tOverpaint, granularityIndex(aInstance, group), uOverpaintTexDim);
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
        #if defined(dEmissiveType_texture)
            vEmissive = readFromTexture(tEmissive, granularityIndex(aInstance, group), uEmissiveTexDim).r;
        #elif defined(dEmissiveType_vertexInstance)
            vEmissive = readFromTexture(tEmissive, int(aInstance) * uVertexCount + vertexId, uEmissiveTexDim).r;
        #elif defined(dEmissiveType_volumeInstance)
            vec3 egridPos = (uEmissiveGridTransform.w * (vModelPosition / uModelScale - uEmissiveGridTransform.xyz)) / uEmissiveGridDim;
            vEmissive = texture3dFrom2dLinear(tEmissiveGrid, egridPos, uEmissiveGridDim, uEmissiveTexDim).r;
        #endif
        vEmissive *= uEmissiveStrength;
    #endif

    #ifdef dSubstance
        #if defined(dSubstanceType_texture)
            vSubstance = readFromTexture(tSubstance, granularityIndex(aInstance, group), uSubstanceTexDim);
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
        #if defined(dEmissiveType_texture)
            vEmissive = readFromTexture(tEmissive, granularityIndex(aInstance, group), uEmissiveTexDim).r;
        #elif defined(dEmissiveType_vertexInstance)
            vEmissive = readFromTexture(tEmissive, int(aInstance) * uVertexCount + vertexId, uEmissiveTexDim).r;
        #elif defined(dEmissiveType_volumeInstance)
            vec3 egridPos = (uEmissiveGridTransform.w * (vModelPosition / uModelScale - uEmissiveGridTransform.xyz)) / uEmissiveGridDim;
            vEmissive = texture3dFrom2dLinear(tEmissiveGrid, egridPos, uEmissiveGridDim, uEmissiveTexDim).r;
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
    #if defined(dTransparencyType_texture)
        vTransparency = readFromTexture(tTransparency, granularityIndex(aInstance, group), uTransparencyTexDim).r;
    #elif defined(dTransparencyType_vertexInstance)
        vTransparency = readFromTexture(tTransparency, int(aInstance) * uVertexCount + vertexId, uTransparencyTexDim).r;
    #elif defined(dTransparencyType_volumeInstance)
        vec3 tgridPos = (uTransparencyGridTransform.w * (vModelPosition / uModelScale - uTransparencyGridTransform.xyz)) / uTransparencyGridDim;
        vTransparency = texture3dFrom2dLinear(tTransparencyGrid, tgridPos, uTransparencyGridDim, uTransparencyTexDim).r;
    #endif
    vTransparency *= uTransparencyStrength;
#endif
`;var Pt=`
#if defined(dNeedsMarker)
    vMarker = readFromTexture(tMarker, granularityIndex(aInstance, group), uMarkerTexDim).r;
#endif
`;var Dt=`
#if dClipObjectCount != 0 && defined(dClipping)
    vClipping = readFromTexture(tClipping, granularityIndex(aInstance, group), uClippingTexDim).r;
#endif
`;var Ht=`
#if defined(dSizeType_uniform)
    float size = uSize;
#elif defined(dSizeType_texture)
    // the texture's index by the size type (SizeTypeIndex): instance, group, groupInstance, vertex, vertexInstance
    float sizeIndex = aInstance;
    if (uSizeIndexType == 1) {
        sizeIndex = groupIndex(group);
    } else if (uSizeIndexType == 2) {
        sizeIndex = groupInstanceIndex(aInstance, group);
    } else if (uSizeIndexType == 3) {
        sizeIndex = float(vertexId);
    } else if (uSizeIndexType == 4) {
        sizeIndex = float(int(aInstance) * uVertexCount + vertexId);
    }
    float size = unpackRGBToInt(readFromTexture(tSize, sizeIndex, uSizeTexDim).rgb);
    size /= 100.0; // NOTE factor also set in TypeScript
#endif

size *= uSizeFactor;
`;var _t=`
#if defined(dClipVariant_instance) && dClipObjectCount != 0
    vec3 mCenter = (uModel * aTransform * vec4(InvariantBoundingSphere.xyz, 1.0)).xyz;
    if (clipTest(mCenter / uModelScale)) {
        // move out of [ -w, +w ] to 'discard' in vert shader
        gl_Position.z = 2.0 * gl_Position.w;
    }
#endif
`;var Vc=`
precision highp float;
precision highp int;

${N}
${we}
${ct}
${Ct}
${ye}
${Wt}

varying mat4 vTransform;
varying vec3 vStart;
varying vec3 vEnd;
varying float vSize;
varying float vCap;

void main() {
    int vertexId = VertexID;

    ${lr}
    ${Rt}
    ${Pt}
    ${Dt}
    ${Ht}

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

    // in front of the near plane (clip z is reversed): onto it, to avoid clipping the box; the fragment depth is the
    // impostor's
    if (gl_Position.z > gl_Position.w) {
        gl_Position.z = gl_Position.w;
    }

    #if defined(dDualColor) && defined(dRenderVariant_color) && defined(dColorType_texture)
        // dual-color mixing (group color types)
        // - for aColorMode between 0 and 1 use aColorMode to interpolate
        // - for aColorMode == 2 do nothing, i.e., use vColor
        // - for aColorMode == 3 use position on cylinder axis to interpolate
        if (dualColor) {
            if (aColorMode <= 1.0) {
                vColor.rgb = mix(vColor.rgb, color2.rgb, aColorMode);
            } else if (aColorMode == 3.0) {
                vColor.rgb = mix(vColor.rgb, color2.rgb, mix(-0.25, 1.25, f / 1.5));
            }
        }
    #endif

    ${_t}
}
`;var kc=`
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
`;var Gc=`
vec4 texture3dFrom2dNearest(sampler2D tex, vec3 pos, vec3 gridDim, vec2 texDim) {
    float zSlice = floor(pos.z * gridDim.z + 0.5); // round to nearest z-slice
    float column = intMod(zSlice * gridDim.x, texDim.x) / gridDim.x;
    float row = floor(intDiv(zSlice * gridDim.x, texDim.x));
    vec2 coord = (vec2(column * gridDim.x, row * gridDim.y) + (pos.xy * gridDim.xy)) / texDim;
    return texture2D(tex, coord);
}
`;var uo=`
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
`;var Uc=`
precision highp float;
precision highp int;

${N}
${cr}

// per-group clip flags come from a varying, which direct volumes don't have
#undef dClipping
${ye}

${we}
${kc}
${Gc}
${uo}

varying vec3 vModelPosition;
varying float vInstance;
varying vec4 vBoundingSphere;
varying mat4 vTransform;

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
    return clipZToDepth(clipZW.x / clipZW.y);
}

float transferFunction(float value) {
    return texture2D(tTransferTex, vec2(value, 0.0)).r;
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
        // behind the opaque depth (depth is reversed)
        if (calcDepth(mvPosition.xyz) < getDepth(gl_FragCoord.xy / uDrawingBufferSize))
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
        #elif defined(dColorType_texture)
            // by the color type (\`ColorTypeIndex\`): instance, group, groupInstance, vertex, vertexInstance
            if (uColorIndexType == 0) {
                material.rgb = readFromTexture(tColor, vInstance, uColorTexDim).rgb;
            } else if (uColorIndexType == 1) {
                material.rgb = readFromTexture(tColor, group, uColorTexDim).rgb;
            } else if (uColorIndexType == 2) {
                material.rgb = readFromTexture(tColor, vInstance * float(uGroupCount) + group, uColorTexDim).rgb;
            } else if (uColorIndexType == 3) {
                material.rgb = texture3dFrom1dTrilinear(tColor, unitPos, uGridDim, uColorTexDim, 0.0).rgb;
            } else {
                material.rgb = texture3dFrom1dTrilinear(tColor, unitPos, uGridDim, uColorTexDim, vInstance * float(uVertexCount)).rgb;
            }
        #endif

        #ifdef dOverpaint
            #if defined(dOverpaintType_texture)
                overpaint = readFromTexture(tOverpaint, (uInstanceGranularity ? vInstance : vInstance * float(uGroupCount) + group), uOverpaintTexDim);
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
                ${ur}
            } else {
                gl_FragColor.rgb = material.rgb;
            }
        #endif

        gl_FragColor.a = material.a * uAlpha * uTransferScale;

        #if defined(dColorMarker)
            float marker = uMarker;
            if (uMarker == -1.0) {
                marker = readFromTexture(tMarker, (uInstanceGranularity ? vInstance : vInstance * float(uGroupCount) + group), uMarkerTexDim).r;
                marker = floor(marker * 255.0 + 0.5); // rounding required to work on some cards on win
            }
        #endif
        ${Ve}

        preFogAlphaBlended = (1.0 - preFogAlphaBlended) * gl_FragColor.a + preFogAlphaBlended;
        fragmentDepth = calcDepth(mvPosition.xyz);
        ${ke}

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
        ${Ge}
    #endif
}
`;var zc=`
precision highp float;

varying vec3 vModelPosition;
varying float vInstance;
varying vec4 vBoundingSphere;
varying mat4 vTransform;

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

    // move z position to the far clip plane (but not too close to get precision issues; clip z is reversed)
    #ifdef clipZeroToOne
        gl_Position.z = 0.005;
    #else
        gl_Position.z = -gl_Position.w + 0.01;
    #endif
}
`;var Nc=`
precision highp float;
precision highp int;

${N}

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
    return depth == 0.0;
}

float getDepth(const in vec2 coords) {
    return max(getDepthOpaque(coords), getDepthTransparent(coords));
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
`;var jc=`
precision highp float;

void main() {
    vec2 coords = gl_FragCoord.xy / uTexSize;
    gl_FragColor = texture2D(tDpoitFrontColor, coords);
}
`;var Wc=`
precision highp float;

void main() {
    vec2 coords = gl_FragCoord.xy / uTexSize;

    vec4 accum = texture2D(tWboitA, coords);
    float r = 1.0 - accum.a;

    accum.a = texture2D(tWboitB, coords).r;
    // divisor needs to allow very small values for nice fading
    gl_FragColor = vec4(accum.rgb / clamp(accum.a, 0.00000001, 50000.0), r);
}
`;var Hc=`
precision highp float;
precision highp int;

// adapted from https://github.com/kosua20/Rendu
// MIT License Copyright (c) 2017 Simon Rodriguez

#define QUALITY(q) ((q) < 5 ? 1.0 : ((q) > 5 ? ((q) < 10 ? 2.0 : ((q) < 11 ? 4.0 : 8.0)) : 1.5))

float rgb2luma(vec3 rgb){
    return sqrt(dot(rgb, vec3(0.299, 0.587, 0.114)));
}

float sampleLuma(vec2 uv) {
    return rgb2luma(texture2D(tColor, uv).rgb);
}

float sampleLuma(vec2 uv, float offsetX, float offsetY) {
    uv += uTexSizeInv * vec2(offsetX, offsetY);
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
`;var $c=`
precision highp float;

varying vec3 vPosition;
varying float vRadiusSqInv;
#if defined(dCalcType_groupId)
    varying float vGroup;
#endif

${N}

void main() {
    vec2 v = gl_FragCoord.xy - vec2(uCurrentX, uCurrentY) - 0.5;
    vec3 fragPos = vec3(v.x, v.y, uCurrentSlice);
    float dist = distance(fragPos, vPosition) * uResolution;

    #if defined(dCalcType_density)
        float density = exp(-uAlpha * ((dist * dist) * vRadiusSqInv));
        gl_FragColor.a = density * uRadiusFactorInv;
    #elif defined(dCalcType_minDistance)
        gl_FragColor.a = 1.0 - dist * uRadiusFactorInv;
    #elif defined(dCalcType_groupId)
        #if defined(dGridTexType_2d)
            float minDistance = 1.0 - texture2D(tMinDistanceTex, (gl_FragCoord.xy) / (uGridTexDim.xy / uGridTexScale)).a;
        #elif defined(dGridTexType_3d)
            float minDistance = 1.0 - texelFetch(tMinDistanceTex, ivec3(gl_FragCoord.xy, uCurrentSlice), 0).a;
        #endif
        if (dist * uRadiusFactorInv > minDistance + uResolution * 0.05)
            discard;
        gl_FragColor.rgb = packIntToRGB(vGroup);
    #endif
}
`;var qc=`
precision highp float;

varying vec3 vPosition;
varying float vRadiusSqInv;

#if defined(dCalcType_groupId)
    varying float vGroup;
#endif

void main() {
    vRadiusSqInv = 1.0 / (aRadius * aRadius);
    #if defined(dCalcType_groupId)
        vGroup = aGroup;
    #endif
    // a quad around the atom covering its splat, in pixels of the slice (uGridDim.xy)
    float size = ceil(((aRadius * 3.0) / uResolution) + uResolution);
    vPosition = (aPosition - uBboxMin) / uResolution;
    gl_Position = vec4(((aPosition - uBboxMin) / uBboxSize) * 2.0 - 1.0, 1.0);
    #ifdef clipZeroToOne
        // z inside the clip depth range, as with [-1, 1]
        gl_Position.z = gl_Position.z * 0.5 + 0.5;
    #endif
    gl_Position.xy += aMapping * size / uGridDim.xy;
}
`;var Xc=`
precision highp float;

void main(void) {
    vec2 position = gl_FragCoord.xy * uInvSize + uRect.xy;

    float x = texture(tPreviousLevel, position).r;
    float y = textureOffset(tPreviousLevel, position, ivec2(-1, 0)).r;
    float z = textureOffset(tPreviousLevel, position, ivec2(-1, -1)).r;
    float w = textureOffset(tPreviousLevel, position, ivec2(0, -1)).r;

    // the farthest depth (depth is reversed)
    gl_FragColor = vec4(min(min(x, y), min(z, w)));
}
`;var Zc=`
precision highp float;
precision highp int;

${N}

void main(void) {
    float k = 0.5 * uSize;
    vec2 position = floor((gl_FragCoord.xy / uTexSize) / uSize) * uSize;

    #if __VERSION__ == 100
        float a, b, c, d;

        if (uFirst) {
            a = texture2D(tInputLevel, position).r * 255.0;
            b = texture2D(tInputLevel, position + vec2(k, 0.0)).r * 255.0;
            c = texture2D(tInputLevel, position + vec2(0.0, k)).r * 255.0;
            d = texture2D(tInputLevel, position + vec2(k, k)).r * 255.0;
        } else {
            a = unpackRGBToInt(texture2D(tPreviousLevel, position).rgb);
            b = unpackRGBToInt(texture2D(tPreviousLevel, position + vec2(k, 0.0)).rgb);
            c = unpackRGBToInt(texture2D(tPreviousLevel, position + vec2(0.0, k)).rgb);
            d = unpackRGBToInt(texture2D(tPreviousLevel, position + vec2(k, k)).rgb);
        }
        gl_FragColor = vec4(packIntToRGB(a + b + c + d), 1.0);
    #else
        int a, b, c, d;

        if (uFirst) {
            a = int(texture2D(tInputLevel, position).r * 255.0);
            b = int(texture2D(tInputLevel, position + vec2(k, 0.0)).r * 255.0);
            c = int(texture2D(tInputLevel, position + vec2(0.0, k)).r * 255.0);
            d = int(texture2D(tInputLevel, position + vec2(k, k)).r * 255.0);
        } else {
            a = texture2D(tPreviousLevel, position).r;
            b = texture2D(tPreviousLevel, position + vec2(k, 0.0)).r;
            c = texture2D(tPreviousLevel, position + vec2(0.0, k)).r;
            d = texture2D(tPreviousLevel, position + vec2(k, k)).r;
        }
        gl_FragColor = ivec4(a + b + c + d);
    #endif
}
`;var Kc=`
precision highp float;
precision highp int;

void main(void) {
    #if __VERSION__ == 100
        gl_FragColor = texture2D(tTexture, vec2(0.5));
    #else
        gl_FragColor = ivec4(texture2D(tTexture, vec2(0.5)).r);
    #endif
}
`;var Yc=`
precision highp float;

void main() {
    vec2 coords = gl_FragCoord.xy / uTexSize;
    gl_FragColor = texture2D(tColor, coords) * uWeight;
}
`;var Qc=`
precision highp float;
precision highp sampler2D;

${N}

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
        return 0.0;
    #endif
}

bool isBackground(const in float depth) {
    // the far plane (depth is reversed), packed or raw
    return depth == 0.0;
}

// occlusion at \`coords\` of a pixel at view z \`viewZ\`, depth-aware upsampled from a lower SSAO resolution
float getSsao(vec2 coords, float viewZ) {
    #ifdef dOcclusionUpsample
        return getSsaoUpsampled(tSsaoDepth, uOcclusionTexSize, coords, viewZ, uNear, uFar);
    #else
        return unpackSsao(texture2D(tSsaoDepth, coords));
    #endif
}

float getSsaoTransparent(vec2 coords, float viewZ) {
    #ifdef dOcclusionUpsample
        return getSsaoUpsampled(tSsaoDepthTransparent, uOcclusionTexSize, coords, viewZ, uNear, uFar);
    #else
        return unpackSsao(texture2D(tSsaoDepthTransparent, coords));
    #endif
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
    vec4 colorBuff = vec4(0.0);

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
            colorBuff += deltaFactor * walkPx;
        }
    }

    if (zBuff <= EPSILON) {
        return centrPx;
    }

    return colorBuff / zBuff;
}

int squaredOutlineScale = dOutlineScale * dOutlineScale;
void getOutline(const in vec2 coords, out bool hasOpaque, out bool hasTransparent, out float opaqueDepth, out float transparentDepth, out float alpha) {
    vec2 invTexSize = 1.0 / uTexSize;

    hasOpaque = false;
    hasTransparent = false;
    opaqueDepth = 0.0;
    transparentDepth = 0.0;
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
                if (sampleOpaqueDepth > opaqueDepth) {
                    hasOpaque = true;
                    opaqueDepth = sampleOpaqueDepth;
                }
            }

            if ((((sampleFlag > 0.45 && sampleFlag < 0.55) || (sampleFlag > 0.70 && sampleFlag < 0.80))) && sampleTransparentDepth > transparentDepth) { // transparent || both
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

    float transparentDepth = 0.0;
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
            float occlusionFactor = getSsao(coords, opaqueSelfViewZ);

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
                float occlusionFactor = getSsaoTransparent(coords, getViewZ(transparentDepth));
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
                if (hasOpaque && outlineOpaqueDepth > outlineTransparentDepth) {
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
`;var Jc=`
precision highp int;
precision highp float;

${N}

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
    return depth == 0.0;
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
    projectedCoord.xy = projectedCoord.xy * 0.5 + 0.5;
    projectedCoord.z = clipZToDepth(projectedCoord.z);
    float viewportWidth = uTexSize.x * (uBounds.z - uBounds.x);
    vec3 adjacentPosition = screenSpaceToViewSpace(vec3(projectedCoord.xy + vec2(1.0 / viewportWidth, 0.0), projectedCoord.z), uInvProjection);
    return max(distance(position, adjacentPosition) * 0.1, 0.001);
}

vec2 binarySearch(inout vec3 dir, inout vec3 hitPos) {
    float rayHitDepthDifference;
    vec2 coords;

    dir *= 0.5;
    hitPos -= dir;

    for (int i = 0; i < uRefineSteps; i++) {
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
    float gf = calculateGrowthFactor(begin, uRayDistance, float(uSteps));

    for (int i = 1; i < uSteps; i++) {
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
                if (uRefineSteps == 0) {
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
    for (int index = 0; index < int(uRendersPerFrame); ++index) {
        color += colorForRay(cameraPos, rayDir, rngState) / float(uRendersPerFrame);
    }

    // average the frames together
    vec4 lastFrameColor = texture2D(tAccumulate, coords);
    float blend = (uFrameNo < 1 || lastFrameColor.a == 0.0) ? 1.0 : 1.0 / (1.0 + (1.0 / lastFrameColor.a));
    color = mix(lastFrameColor.rgb, color, blend);

    // show the result
    gl_FragColor = vec4(color, blend);
}
`;var eu=`
precision highp float;
precision highp int;

${N}
${we}
${nt}
${ye}

#if defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
    #ifdef dOverpaint
        #if defined(dOverpaintType_texture)
            varying vec4 vOverpaint;
        #endif
    #endif
#endif

#if defined(dRenderVariant_color) || defined(dRenderVariant_tracing) || defined(dRenderVariant_emissive)
    #ifdef dEmissive
        #if defined(dEmissiveType_texture)
            varying float vEmissive;
        #endif
    #endif
#endif

#ifdef dTransparency
    #if defined(dTransparencyType_texture)
        varying float vTransparency;
    #endif
#endif

varying vec2 vUv;
varying float vInstance;
varying vec3 vPosition;

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

    ${qe}
    ${ot}

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
        #if defined(dTransparencyType_texture)
            transparency = readFromTexture(tTransparency, (uInstanceGranularity ? vInstance : vInstance * float(uGroupCount) + group), uTransparencyTexDim).r;
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
            marker = readFromTexture(tMarker, (uInstanceGranularity ? vInstance : vInstance * float(uGroupCount) + group), uMarkerTexDim).r;
            marker = floor(marker * 255.0 + 0.5); // rounding required to work on some cards on win
        }
    #endif

    #if defined(dRenderVariant_color) || defined(dRenderVariant_tracing) || defined(dRenderVariant_emissive)
        float emissive = uEmissive;
        if (group == -1.0) {
            emissive = 0.0;
        } else {
            #ifdef dEmissive
                #if defined(dEmissiveType_texture)
                    emissive += readFromTexture(tEmissive, (uInstanceGranularity ? vInstance : vInstance * float(uGroupCount) + group), uEmissiveTexDim).r * uEmissiveStrength;
                #endif
            #endif
        }
    #endif

    #if defined(dRenderVariant_pick)
        if (group == -1.0) discard;

        ${it}
        #ifdef requiredDrawBuffers
            gl_FragColor = vec4(packIntToRGB(float(uObjectId)), 1.0);
            gl_FragData[1] = vec4(packIntToRGB(vInstance), 1.0);
            gl_FragData[2] = vec4(packIntToRGB(group), 1.0);
            gl_FragData[3] = packDepthToRGBA(fragmentDepth);
        #else
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
        ${at}
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
                #if defined(dOverpaintType_texture)
                    overpaint = readFromTexture(tOverpaint, (uInstanceGranularity ? vInstance : vInstance * float(uGroupCount) + group), uOverpaintTexDim);
                #endif
                overpaint *= uOverpaintStrength;
            }
            material.rgb = mix(material.rgb, overpaint.rgb, overpaint.a);
        #endif

        gl_FragColor = material;
        ${Ve}

        #if defined(dRenderVariant_color)
            ${ke}
            ${Ge}
            ${st}
        #elif defined(dRenderVariant_tracing)
            gl_FragData[1] = vec4(normalize(vViewPosition), emissive);
            gl_FragData[2] = vec4(material.rgb, uDensity);
        #endif
    #endif
}
`;var lo=`
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
`;var tu=`
precision highp float;
precision highp int;

${N}
${ct}

varying vec2 vUv;
varying float vInstance;
varying vec3 vPosition;

void main() {
    int vertexId = VertexID;

    ${lo}

    vUv = aUv;
    vInstance = aInstance;
    vPosition = aPosition;
}
`;var ru=`
precision highp float;
precision highp int;

${N}
${nt}
${vt}
${ye}

void main(){
    ${qe}
    ${ot}

    float fragmentDepth = gl_FragCoord.z;
    ${St}
    ${Tt}

    #if defined(dRenderVariant_pick)
        ${it}
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
        ${at}
        gl_FragColor = material;
    #elif defined(dRenderVariant_emissive)
        gl_FragColor = material;
    #elif defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
        gl_FragColor = material;
        ${Ve}

        #if defined(dRenderVariant_color)
            ${ke}
            ${Ge}
            ${st}
        #elif defined(dRenderVariant_tracing)
            gl_FragData[1] = vec4(normalize(vViewPosition), emissive);
            gl_FragData[2] = vec4(material.rgb, uDensity);
        #endif
    #endif
}
`;var nu=`
precision highp float;
precision highp int;

${N}
${we}
${ct}
${Ct}
${ye}
${Wt}

void trimSegment(const in vec4 start, inout vec4 end) {
    // trim end segment so it terminates between the camera plane and the near plane
    // conservative estimate of the near plane, from the z row of the GL projection (the sign of the reversed rows
    // cancels in the ratio)
    #ifdef clipZeroToOne
        float a = 2.0 * uProjection[2][2] + 1.0;
        float b = 2.0 * uProjection[3][2];
    #else
        float a = uProjection[2][2];  // 3rd entry in 3rd column
        float b = uProjection[3][2];  // 3rd entry in 4th column
    #endif
    float nearEstimate = -0.5 * b / a;
    float alpha = (nearEstimate - start.z) / (end.z - start.z);
    end.xyz = mix(start.xyz, end.xyz, alpha);
}

void main(){
    float aspect = uViewport.z / uViewport.w;
    int vertexId = VertexID;

    ${lr}
    ${Rt}
    ${Pt}
    ${Dt}
    ${Ht}

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

    ${_t}
}
`;var ou=`
precision highp float;
precision highp int;
precision highp sampler2D;

${N}

// cube corners (excluding origin)
const vec3 c1 = vec3(1., 0., 0.);
const vec3 c2 = vec3(1., 1., 0.);
const vec3 c3 = vec3(0., 1., 0.);
const vec3 c4 = vec3(0., 0., 1.);
const vec3 c5 = vec3(1., 0., 1.);
const vec3 c6 = vec3(1., 1., 1.);
const vec3 c7 = vec3(0., 1., 1.);

vec3 index3dFrom2d(vec2 coord) {
    vec2 gridTexPos = coord * uGridTexDim.xy;
    vec2 columnRow = ivec2Div(gridTexPos, uGridDim.xy);
    vec2 posXY = gridTexPos - columnRow * uGridDim.xy;
    float posZ = columnRow.y * intDiv(uGridTexDim.x, uGridDim.x) + columnRow.x;
    return vec3(posXY, posZ);
}

vec4 texture3dFrom2dNearest(sampler2D tex, vec3 pos, vec3 gridDim, vec2 texDim) {
    float zSlice = floor(pos.z * gridDim.z + 0.5); // round to nearest z-slice
    float column = intDiv(intMod(zSlice * gridDim.x, texDim.x), gridDim.x);
    float row = intDiv(zSlice * gridDim.x, texDim.x);
    vec2 coord = (vec2(column * gridDim.x, row * gridDim.y) + (pos.xy * gridDim.xy)) / (texDim / uScale);
    return texture2D(tex, coord);
}

float voxelValue(vec3 pos) {
    pos = min(max(vec3(0.0), pos), uGridDim - vec3(1.0));
    vec4 v = texture3dFrom2dNearest(tVolumeData, pos / uGridDim, uGridDim, uGridTexDim.xy);
    #ifdef dValueChannel_red
        return v.r;
    #else
        return v.a;
    #endif
}

void main(void) {
    vec2 uv = gl_FragCoord.xy / uGridTexDim.xy;
    vec3 posXYZ = index3dFrom2d(uv);

    // get MC case as the sum of corners that are below the given iso level
    float c = step(voxelValue(posXYZ), uIsoValue)
        + 2. * step(voxelValue(posXYZ + c1), uIsoValue)
        + 4. * step(voxelValue(posXYZ + c2), uIsoValue)
        + 8. * step(voxelValue(posXYZ + c3), uIsoValue)
        + 16. * step(voxelValue(posXYZ + c4), uIsoValue)
        + 32. * step(voxelValue(posXYZ + c5), uIsoValue)
        + 64. * step(voxelValue(posXYZ + c6), uIsoValue)
        + 128. * step(voxelValue(posXYZ + c7), uIsoValue);
    c *= step(c, 254.);

    // handle out of bounds positions
    posXYZ += 1.0;
    posXYZ.xy += 1.0; // pixel padding (usually ok even if the texture has no padding)
    if (posXYZ.x >= uGridDim.x || posXYZ.y >= uGridDim.y || posXYZ.z >= uGridDim.z)
        c = 0.0;

    // get total triangles to generate for calculated MC case from triCount texture
    float totalTrianglesToGenerate = texture2D(tTriCount, vec2(intMod(c, 16.), floor(c / 16.)) / 16.).r;
    gl_FragColor = vec4(vec3(totalTrianglesToGenerate * 3.0), c / 255.0);
}
`;var iu=`
precision highp float;
precision highp int;
precision highp sampler2D;

${N}

// cube corners (excluding origin)
const vec3 c1 = vec3(1., 0., 0.);
const vec3 c2 = vec3(1., 1., 0.);
const vec3 c3 = vec3(0., 1., 0.);
const vec3 c4 = vec3(0., 0., 1.);
const vec3 c5 = vec3(1., 0., 1.);
const vec3 c6 = vec3(1., 1., 1.);
const vec3 c7 = vec3(0., 1., 1.);

vec3 index3dFrom2d(vec2 coord) {
    vec2 gridTexPos = coord * uGridTexDim.xy;
    vec2 columnRow = ivec2Div(gridTexPos, uGridDim.xy);
    vec2 posXY = gridTexPos - columnRow * uGridDim.xy;
    float posZ = columnRow.y * intDiv(uGridTexDim.x, uGridDim.x) + columnRow.x;
    return vec3(posXY, posZ);
}

vec4 texture3dFrom2dNearest(sampler2D tex, vec3 pos, vec3 gridDim, vec2 texDim) {
    float zSlice = floor(pos.z * gridDim.z + 0.5); // round to nearest z-slice
    float column = intDiv(intMod(zSlice * gridDim.x, texDim.x), gridDim.x);
    float row = intDiv(zSlice * gridDim.x, texDim.x);
    vec2 coord = (vec2(column * gridDim.x, row * gridDim.y) + (pos.xy * gridDim.xy)) / (texDim / uScale);
    return texture2D(tex, coord + 0.5 / (texDim / uScale));
}

vec4 voxel(vec3 pos) {
    pos = min(max(vec3(0.0), pos), uGridDim - vec3(1.0));
    return texture3dFrom2dNearest(tVolumeData, pos / uGridDim, uGridDim, uGridTexDim.xy);
}

float voxelValuePadded(vec3 pos) {
    pos = min(max(vec3(0.0), pos), uGridDim - vec3(vec2(2.0), 1.0)); // remove xy padding
    vec4 v = texture3dFrom2dNearest(tVolumeData, pos / uGridDim, uGridDim, uGridTexDim.xy);
    #ifdef dValueChannel_red
        return v.r;
    #else
        return v.a;
    #endif
}

int idot2(const in ivec2 a, const in ivec2 b) {
    return a.x * b.x + a.y * b.y;
}

int idot4(const in ivec4 a, const in ivec4 b) {
    return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
}

#if __VERSION__ == 100
    int pyramidVoxel(vec2 pos) {
        return int(unpackRGBToInt(texture2D(tActiveVoxelsPyramid, pos / (vec2(1.0, 0.5) * uSize)).rgb));
    }
#else
    int pyramidVoxel(vec2 pos) {
        return texture2D(tActiveVoxelsPyramid, pos / (vec2(1.0, 0.5) * uSize)).r;
    }
#endif

vec4 baseVoxel(vec2 pos) {
    return texture2D(tActiveVoxelsBase, pos / uSize);
}

vec4 getGroup(const in vec3 p) {
    // note that we swap x and z because the texture is flipped around y
    #if defined(dAxisOrder_012)
        float group = p.z + p.y * uGridDataDim.z + p.x * uGridDataDim.z * uGridDataDim.y; // 210
    #elif defined(dAxisOrder_021)
        float group = p.y + p.z * uGridDataDim.y + p.x * uGridDataDim.y * uGridDataDim.z; // 120
    #elif defined(dAxisOrder_102)
        float group = p.z + p.x * uGridDataDim.z + p.y * uGridDataDim.z * uGridDataDim.x; // 201
    #elif defined(dAxisOrder_120)
        float group = p.x + p.z * uGridDataDim.x + p.y * uGridDataDim.x * uGridDataDim.z; // 021
    #elif defined(dAxisOrder_201)
        float group = p.y + p.x * uGridDataDim.y + p.z * uGridDataDim.y * uGridDataDim.x; // 102
    #elif defined(dAxisOrder_210)
        float group = p.x + p.y * uGridDataDim.x + p.z * uGridDataDim.x * uGridDataDim.y; // 012
    #endif
    return vec4(group > 16777215.5 ? vec3(1.0) : packIntToRGB(group), 1.0);
}

void main(void) {
    // get 1D index
    int vI = int(gl_FragCoord.x) + int(gl_FragCoord.y) * int(uSize);

    // ignore 1D indices outside of the grid
    if(vI >= int(uCount)) discard;

    ivec2 offset = ivec2(int(uSize) - 2, 0);

    int start = 0;
    ivec4 starts = ivec4(0);
    ivec4 ends = ivec4(0);
    int diff = 2;
    ivec4 m = ivec4(0);
    ivec2 position = ivec2(0);
    ivec4 vI4 = ivec4(vI);

    ivec2 relativePosition = ivec2(0);
    int end = 0;
    ivec2 pos1 = ivec2(0);
    ivec2 pos2 = ivec2(0);
    ivec2 pos3 = ivec2(0);
    ivec2 pos4 = ivec2(0);
    ivec3 vI3 = ivec3(vI);
    ivec3 mask = ivec3(0);

    // traverse the different levels of the pyramid
    for(int i = 1; i < 14; i++) {
        if(float(i) >= uLevels) break;

        offset.x -= diff;
        diff *= 2;
        relativePosition = position + offset;

        end = start + pyramidVoxel(vec2(relativePosition));
        pos1 = ivec2(relativePosition);
        starts.x = start;
        ends.x = end;
        pos2 = ivec2(relativePosition + ivec2(1, 0));
        starts.y = ends.x;
        ends.y = ends.x + pyramidVoxel(vec2(pos2));
        pos3 = relativePosition + ivec2(0, 1);
        starts.z = ends.y;
        ends.z = ends.y + pyramidVoxel(vec2(pos3));
        pos4 = relativePosition + ivec2(1, 1);
        starts.w = ends.z;
        mask = ivec3(greaterThanEqual(vI3, starts.rgb)) * ivec3(lessThan(vI3, ends.rgb));
        m = ivec4(mask, 1 - int(any(bvec3(mask))));

        relativePosition = m.x * pos1 + m.y * pos2 + m.z * pos3 + m.w * pos4;
        start = idot4(m, starts);
        position = 2 * (relativePosition - offset);
    }

    end = start + int(baseVoxel(vec2(position)).r * 255.0);
    pos1 = position;
    starts.x = start;
    ends.x = end;
    pos2 = position + ivec2(1, 0);
    starts.y = ends.x;
    ends.y = ends.x + int(baseVoxel(vec2(pos2)).r * 255.0);
    pos3 = position + ivec2(0, 1);
    starts.z = ends.y;
    ends.z = ends.y + int(baseVoxel(vec2(pos3)).r * 255.0);
    pos4 = position + ivec2(1, 1);
    starts.w = ends.z;
    mask = ivec3(greaterThanEqual(vI3, starts.rgb)) * ivec3(lessThan(vI3, ends.rgb));
    m = ivec4(mask, 1 - int(any(bvec3(mask))));
    position = m.x * pos1 + m.y * pos2 + m.z * pos3 + m.w * pos4;

    vec2 coord2d = (vec2(position) / uSize) / uScale;
    vec3 coord3d = floor(index3dFrom2d(coord2d) + 0.5);

    float edgeIndex = floor(baseVoxel(vec2(position)).a * 255.0 + 0.5);

    // current vertex for the up to 15 MC cases
    int currentVertex = vI - idot4(m, starts);

    // ensure winding-order is the same for negative and positive iso-levels
    if (uInvert) {
        int v = imod(currentVertex + 1, 3);
        if (v == 1) currentVertex += 2;
        else if (v == 0) currentVertex -= 2;
    }

    // get index into triIndices table
    int mcIndex = 16 * int(edgeIndex) + currentVertex;
    vec4 mcData = texture2D(tTriIndices, vec2(imod(mcIndex, 64), mcIndex / 64) / 64.);

    // bit mask to avoid conditionals (see comment below) for getting MC case corner
    vec4 m0 = vec4(floor(mcData.r * 255.0 + 0.5));

    // get edge value masks
    vec4 m1 = vec4(equal(m0, vec4(0., 1., 2., 3.)));
    vec4 m2 = vec4(equal(m0, vec4(4., 5., 6., 7.)));
    vec4 m3 = vec4(equal(m0, vec4(8., 9., 10., 11.)));

    // apply bit masks
    vec3 b0 = coord3d +
                m1.y * c1 +
                m1.z * c2 +
                m1.w * c3 +
                m2.x * c4 +
                m2.y * c5 +
                m2.z * c6 +
                m2.w * c7 +
                m3.y * c1 +
                m3.z * c2 +
                m3.w * c3;
    vec3 b1 = coord3d +
                m1.x * c1 +
                m1.y * c2 +
                m1.z * c3 +
                m2.x * c5 +
                m2.y * c6 +
                m2.z * c7 +
                m2.w * c4 +
                m3.x * c4 +
                m3.y * c5 +
                m3.z * c6 +
                m3.w * c7;

    // the conditionals that are avoided by above bitmasks
    // vec3 b0 = coord3d;
    // vec3 b1 = coord3d;
    // if (mcIndex == 0.0) {
    //     b1 += c1;
    // } else if (mcIndex == 1.0) {
    //     b0 += c1; b1 += c2;
    // } else if (mcIndex == 2.0) {
    //     b0 += c2; b1 += c3;
    // } else if (mcIndex == 3.0) {
    //     b0 += c3;
    // } else if (mcIndex == 4.0) {
    //     b0 += c4; b1 += c5;
    // } else if (mcIndex == 5.0) {
    //     b0 += c5; b1 += c6;
    // } else if (mcIndex == 6.0) {
    //     b0 += c6; b1 += c7;
    // } else if (mcIndex == 7.0) {
    //     b0 += c7; b1 += c4;
    // } else if (mcIndex == 8.0) {
    //     b1 += c4;
    // } else if (mcIndex == 9.0) {
    //     b0 += c1; b1 += c5;
    // } else if (mcIndex == 10.0) {
    //     b0 += c2; b1 += c6;
    // } else if (mcIndex == 11.0) {
    //     b0 += c3; b1 += c7;
    // }
    // b0 = floor(b0 + 0.5);
    // b1 = floor(b1 + 0.5);

    vec4 d0 = voxel(b0);
    vec4 d1 = voxel(b1);

    #ifdef dValueChannel_red
        float v0 = d0.r;
        float v1 = d1.r;
    #else
        float v0 = d0.a;
        float v1 = d1.a;
    #endif

    float t = (uIsoValue - v0) / (v0 - v1);
    gl_FragData[0].xyz = (uGridTransform * vec4(b0 + t * (b0 - b1), 1.0)).xyz;

    // group id
    #if __VERSION__ == 100 || defined(dConstantGroup)
        // webgl1 does not support 'flat' interpolation (i.e. no interpolation)
        // ensure a constant group id per triangle as needed
        #ifdef dPackedGroup
            gl_FragData[1] = vec4(voxel(coord3d).rgb, 1.0);
        #else
            gl_FragData[1] = getGroup(coord3d);
        #endif
    #else
        #ifdef dPackedGroup
            gl_FragData[1] = vec4(t < 0.5 ? d0.rgb : d1.rgb, 1.0);
        #else
            gl_FragData[1] = getGroup(t < 0.5 ? b0 : b1);
        #endif
    #endif

    // normals from gradients
    vec3 n0 = -normalize(vec3(
        voxelValuePadded(b0 - c1) - voxelValuePadded(b0 + c1),
        voxelValuePadded(b0 - c3) - voxelValuePadded(b0 + c3),
        voxelValuePadded(b0 - c4) - voxelValuePadded(b0 + c4)
    ));
    vec3 n1 = -normalize(vec3(
        voxelValuePadded(b1 - c1) - voxelValuePadded(b1 + c1),
        voxelValuePadded(b1 - c3) - voxelValuePadded(b1 + c3),
        voxelValuePadded(b1 - c4) - voxelValuePadded(b1 + c4)
    ));
    gl_FragData[2].xyz = -vec3(
        n0.x + t * (n0.x - n1.x),
        n0.y + t * (n0.y - n1.y),
        n0.z + t * (n0.z - n1.z)
    );

    // ensure normal-direction is the same for negative and positive iso-levels
    if (uInvert) {
        gl_FragData[2].xyz *= -1.0;
    }

    // apply normal matrix
    gl_FragData[2].xyz = uGridTransformAdjoint * gl_FragData[2].xyz;
}
`;var au=`
precision highp float;

${N}

void main() {
    vec2 coords = gl_FragCoord.xy * uTexSizeInv;

    // depth of the front-most unmarked fragment, cleared to 0.0 (the far plane) in every channel where there is none
    vec4 packedDepth = texture2D(tDepthTexture, coords);
    if (packedDepth == vec4(0.0))
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
`;var su=`
precision highp float;

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
`;var cu=`
precision highp float;

${N}

// occlusion at \`coords\`, depth-aware upsampled from a lower SSAO resolution with the scene's opaque depth
float getOcclusion(const in vec2 coords) {
    #ifdef dOcclusionUpsample
        #ifdef dPackedDepth
            float depth = unpackRGBAToDepth(texture2D(tDepth, coords));
        #else
            float depth = texture2D(tDepth, coords).r;
        #endif
        float viewZ = depthToViewZ(uIsOrtho, depth, uNear, uFar);
        return getSsaoUpsampled(tSsaoDepth, uOcclusionTexSize, coords + uOcclusionOffset, viewZ, uNear, uFar);
    #else
        return unpackSsao(texture2D(tSsaoDepth, coords + uOcclusionOffset));
    #endif
}

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
            float occlusion = getOcclusion(coords);
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
`;var uu=`
varying vec3 vNormal;
`;var lu=`
precision highp float;
precision highp int;

#define bumpEnabled

${N}
${nt}
${vt}
${cr}
${uu}
${ye}

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
                // beyond the far plane (depth is reversed)
                if (fragmentDepth < 0.0) discard;
            }
            gl_FragDepthEXT = fragmentDepth;
        #endif
        #if defined(dClipVariant_pixel) && dClipObjectCount != 0
            if (clipTest(modelPosition / uModelScale)) discard;
        #endif
        vec3 vViewPosition = viewPosition;
        vec3 vModelPosition = modelPosition;
        // after the mark pass returned (it needs every face) and at the cap position
        ${qe}
    #else
        ${qe}
        ${ot}
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

    ${St}
    ${Tt}

    #if defined(dRenderVariant_pick)
        ${it}
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
        ${at}
        gl_FragColor = material;
    #elif defined(dRenderVariant_emissive)
        gl_FragColor = material;
    #elif defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
        ${Ur}
        ${ur}
        ${Ve}

        #if defined(dRenderVariant_color)
            ${ke}
            ${Ge}
            ${st}
        #elif defined(dRenderVariant_tracing)
            gl_FragData[1] = vec4(normal, emissive);
            gl_FragData[2] = vec4(material.rgb, uDensity);
        #endif
    #endif
}
`;var du=`
precision highp float;
precision highp int;
precision highp sampler2D;

${N}
${we}
${ct}
${Ct}
${ye}
${Wt}
${uo}

varying vec3 vNormal;

void main(){
    int vertexId = VertexID;

    ${lr}
    ${Pt}
    ${Dt}
    ${lo}

    #ifdef dSolidInterior
        if (uSolidInteriorPass != 0) {
            // in front of the far plane (clip z is reversed)
            #ifdef clipZeroToOne
                gl_Position.z = max(gl_Position.z, gl_Position.w * 0.00005);
            #else
                gl_Position.z = max(gl_Position.z, -gl_Position.w * 0.9999);
            #endif
        }
    #endif

    ${Rt}
    ${_t}

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
`;var pu=`
precision highp float;
precision highp int;

${N}

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
        return vec2(0.0, 0.0);
    #endif
}

// depth is reversed: the background (far plane) at 0, nearer is greater
bool isBackground(const in float depth) {
    return depth == 0.0;
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

    float bestOpaqueDepth = 0.0;
    float bestTransparentDepth = 0.0;
    float bestTransparentAlpha = 0.0;

    float opaqueOutlineFlag = 0.0;
    float transparentOutlineFlag = 0.0;

    for (int y = -1; y <= 1; y++) {
        for (int x = -1; x <= 1; x++) {
            vec2 sampleCoords = coords + vec2(float(x), float(y)) * invTexSize;

            // Opaque
            float sampleDepthOpaque = getDepthOpaque(sampleCoords);
            float sampleViewZOpaque = isBackground(sampleDepthOpaque) ? backgroundViewZ : getViewZ(sampleDepthOpaque);
            if (abs(selfViewZOpaque - sampleViewZOpaque) > pixelSizeOpaque && selfDepthOpaque < sampleDepthOpaque && sampleDepthOpaque >= bestOpaqueDepth) {
                bestOpaqueDepth = sampleDepthOpaque;
                opaqueOutlineFlag = 1.0;
            }

            // Transparent
            vec2 sampleDepthTransparentWithAlpha = getDepthTransparentWithAlpha(sampleCoords);
            float sampleDepthTransparent = sampleDepthTransparentWithAlpha.x;
            float sampleAlphaTransparent = sampleDepthTransparentWithAlpha.y;
            float sampleViewZTransparent = isBackground(sampleDepthTransparent) ? backgroundViewZ : getViewZ(sampleDepthTransparent);
            if (abs(selfViewZTransparent - sampleViewZTransparent) > pixelSizeTransparent && selfDepthTransparent < sampleDepthTransparent && sampleDepthTransparent >= bestTransparentDepth) {
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
            bestOpaqueDepth = 0.0;
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
            bestTransparentDepth = 0.0;
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
`;var fu=`
precision highp float;
precision highp int;

${N}
${nt}
${vt}
${ye}

/** position of the fragment within the point quad, from (0, 0) to (1, 1) */
varying vec2 vPointCoord;

const vec2 center = vec2(0.5);
const float radius = 0.5;

void main(){
    ${qe}
    ${ot}

    float fragmentDepth = gl_FragCoord.z;
    ${St}

    #if defined(dPointStyle_circle)
        float dist = distance(vPointCoord, center);
        if (dist > radius) discard;
    #elif defined(dPointStyle_fuzzy)
        float dist = distance(vPointCoord, center);
        float fuzzyAlpha = 1.0 - smoothstep(0.0, radius, dist);
        if (fuzzyAlpha < 0.0001) discard;
    #endif

    #if defined(dPointStyle_fuzzy) && (defined(dRenderVariant_color) || defined(dRenderVariant_tracing) || defined(dRenderVariant_marking))
        material.a *= fuzzyAlpha;
    #endif

    ${Tt}

    #if defined(dRenderVariant_pick)
        ${it}
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
        ${at}
        gl_FragColor = material;
    #elif defined(dRenderVariant_emissive)
        gl_FragColor = material;
    #elif defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
        gl_FragColor = material;
        ${Ve}

        #if defined(dRenderVariant_color)
            ${ke}
            ${Ge}
            ${st}
        #elif defined(dRenderVariant_tracing)
            gl_FragData[1] = vec4(normalize(vViewPosition), emissive);
            gl_FragData[2] = vec4(material.rgb, uDensity);
        #endif
    #endif
}
`;var po=`
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
`;var mu=`
precision highp float;
precision highp int;

${N}
${we}
${ct}
${Ct}
${ye}
${Wt}

/** position of the fragment within the point, from (0, 0) to (1, 1) */
varying vec2 vPointCoord;

void main(){
    ${po}

    ${Rt}
    ${Pt}
    ${Dt}

    mat4 transform = applyTumble(aTransform, aInstance, float(uObjectId));
    mat4 model = uModel * transform;
    mat4 modelView = uView * model;
    position = applyWiggle(position, group, aInstance);
    vec4 position4 = vec4(position, 1.0);
    // for clipping in frag shader
    vModelPosition = (model * position4).xyz;
    vec4 mvPosition = modelView * position4;
    vViewPosition = mvPosition.xyz;

    ${Ht}

    #ifdef dPointSizeAttenuation
        float pointSize = size * uPixelRatio * ((uViewport.w / 2.0) / -mvPosition.z) * 5.0;
    #else
        float pointSize = size * uPixelRatio;
    #endif
    pointSize = max(1.0, pointSize);

    gl_Position = uProjection * mvPosition;
    // offset the corner by half the point size in pixels, in clip space
    gl_Position.xy += mapping * (pointSize / uViewport.zw) * gl_Position.w;
    vPointCoord = mapping * 0.5 + 0.5;

    ${_t}
}
`;var hu=`
precision highp float;
precision highp int;

${N}

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

// depth is reversed: the background (far plane) at 0, exact also when packed; nearer is greater
bool isBackground(const in float depth) {
    return depth == 0.0;
}

int squaredOutlineScale = dOutlineScale * dOutlineScale;
void getOutline(const in vec2 coords, out bool hasOpaque, out bool hasTransparent, out float opaqueDepth, out float transparentDepth, out float alpha) {
    vec2 invTexSize = 1.0 / uTexSize;

    hasOpaque = false;
    hasTransparent = false;
    opaqueDepth = 0.0;
    transparentDepth = 0.0;
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
                if (sampleOpaqueDepth > opaqueDepth) {
                    hasOpaque = true;
                    opaqueDepth = sampleOpaqueDepth;
                }
            }

            if ((((sampleFlag > 0.45 && sampleFlag < 0.55) || (sampleFlag > 0.70 && sampleFlag < 0.80))) && sampleTransparentDepth > transparentDepth) { // transparent || both
                hasTransparent = true;
                transparentDepth = sampleTransparentDepth;
                alpha = sampleAlpha;
            }
        }
    }
}

// occlusion at \`coords\` of a pixel at view z \`viewZ\`, depth-aware upsampled from a lower SSAO resolution
float getSsao(vec2 coords, float viewZ) {
    #ifdef dOcclusionUpsample
        return getSsaoUpsampled(tSsaoDepth, uOcclusionTexSize, coords, viewZ, uNear, uFar);
    #else
        return unpackSsao(texture2D(tSsaoDepth, coords));
    #endif
}

float getSsaoTransparent(vec2 coords, float viewZ) {
    #ifdef dOcclusionUpsample
        return getSsaoUpsampled(tSsaoDepthTransparent, uOcclusionTexSize, coords, viewZ, uNear, uFar);
    #else
        return unpackSsao(texture2D(tSsaoDepthTransparent, coords));
    #endif
}

void main(void) {
    vec2 coords = gl_FragCoord.xy / uTexSize;
    vec4 color = texture2D(tColor, coords);

    float opaqueDepth = getDepthOpaque(coords);
    float transparentDepth = 0.0;
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
            float occlusionFactor = getSsao(coords + uOcclusionOffset, getViewZ(opaqueDepth));

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
                float occlusionFactor = getSsaoTransparent(coords + uOcclusionOffset, getViewZ(transparentDepth));
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
                if (hasOpaque && outlineOpaqueDepth > outlineTransparentDepth) {
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
`;var le=`
precision highp float;

void main(void) {
    vec2 position = aPosition * uQuadScale - vec2(1.0, 1.0) + uQuadScale;
    gl_Position = vec4(position, 0.0, 1.0);
}
`;var gu=`
precision highp float;
precision highp int;

${N}

// Map full [0,1] coords -> bounds [0,1] coords
vec2 fullCoordsToBoundsCoords(vec2 fullCoords) {
    return (fullCoords - uBounds.xy) / (uBounds.zw - uBounds.xy);
}

// Map bounds [0,1] coords -> full [0,1] coords
vec2 boundsCoordsToFullCoords(vec2 boundsCoords) {
    return uBounds.xy + (uBounds.zw - uBounds.xy) * boundsCoords;
}

bool isBackground(const in float depth) {
    return depth == 0.0;
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
`;var yu=`
precision highp float;
precision highp int;
precision highp sampler2D;

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
`;var bu=`
precision highp float;

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
`;var xu=`
precision highp float;
precision highp int;
precision highp sampler2D;

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
`;var vu=`
precision highp float;

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
`;var Su=`
precision highp float;
precision highp int;
precision highp sampler2D;

#define SMAASampleLevelZeroOffset(tex, coord, offset) texture2D(tex, coord + float(offset) * uTexSizeInv, 0.0)

#define SMAA_AREATEX_MAX_DISTANCE 16
#define SMAA_AREATEX_PIXEL_SIZE (1.0 / vec2(160.0, 560.0))
#define SMAA_AREATEX_SUBTEX_SIZE (1.0 / 7.0)

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
`;var Tu=`
precision highp float;

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
`;var Cu=`
precision highp float;
precision highp int;

#define bumpEnabled

${N}
${nt}
${vt}
${cr}
${ye}

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
            // depth is reversed: in front of the near plane above 1
            return fragmentDepth < 1.0;
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
            fragmentDepth = 2.0;
        }
    #endif

    if (fragmentDepth < 1.0) {
        cameraNormal = normalize(cameraPos - cameraSpherePos);
        interior = false;
        return true;
    } else if (uDoubleSided || solidInterior) {
        cameraPos = rayDirection * posT + rayOrigin;
        modelPos = (uInvView * vec4(cameraPos, 1.0)).xyz;
        fragmentDepth = calcDepth(cameraPos);
        cameraNormal = -normalize(cameraPos - cameraSpherePos);
        interior = true;
        if (fragmentDepth < 1.0) {
            #ifdef dSolidInterior
                float nearT = - (uNear + rayOrigin.z) / rayDirection.z;
                float sNear = frontDepth < 1.0 ? 0.0 : clamp((nearT - negT) / (posT - negT), 0.0, 1.0);
                #if !defined(dClipPrimitive) && defined(dClipVariant_pixel) && dClipObjectCount != 0
                    float sCap = clipExit(frontModelPos / uModelScale, modelPos / uModelScale, sNear);
                    if (sCap < 0.0) return false;
                #else
                    float sCap = sNear;
                #endif
                if (sCap == sNear && frontDepth >= 1.0) {
                    fragmentDepth = 1.0 - (0.0000001 / vRadius);
                    cameraNormal = -mix(normalize(vPoint), vec3(0.0, 0.0, -1.0), uIsOrtho);
                    cameraPos = rayDirection * nearT + rayOrigin;
                    modelPos = (uInvView * vec4(cameraPos, 1.0)).xyz;
                }
                #if !defined(dClipPrimitive) && defined(dClipVariant_pixel) && dClipObjectCount != 0
                    else {
                        cameraPos = rayDirection * mix(negT, posT, sCap) + rayOrigin;
                        modelPos = (uInvView * vec4(cameraPos, 1.0)).xyz;
                        fragmentDepth = calcDepth(cameraPos) - (0.0000001 / vRadius);
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

    ${qe}
    #if !defined(dClipPrimitive) && defined(dClipVariant_pixel) && dClipObjectCount != 0
        if (!isCap) {
            ${ot}
        }
    #endif

    #ifdef dNeedsNormal
        vec3 normal = -cameraNormal;
    #endif

    ${St}

    #if defined(dRenderVariant_color) || defined(dRenderVariant_tracing) || defined(dRenderVariant_marking)
        #if defined(dRenderVariant_marking)
        if (material.a < 1.0 && uAlphaThickness > 0.0) {
        #else
        if (uRenderMask == MaskTransparent && uAlphaThickness > 0.0) {
        #endif
            material.a *= min(1.0, vRadius / (uAlphaThickness * uModelScale));
        }
    #endif

    ${Tt}

    #if defined(dRenderVariant_pick)
        ${it}
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
        ${at}
        gl_FragColor = material;
    #elif defined(dRenderVariant_emissive)
        gl_FragColor = material;
    #elif defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
        ${Ur}
        ${ur}
        ${Ve}

        #if defined(dRenderVariant_color)
            ${ke}
            ${Ge}
            ${st}
        #elif defined(dRenderVariant_tracing)
            gl_FragData[1] = vec4(normal, emissive);
            gl_FragData[2] = vec4(material.rgb, uDensity);
        #endif
    #endif
}
`;var Ru=`
precision highp float;
precision highp int;

${N}
${we}
${ct}
${Ct}
${ye}
${Wt}

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
    ${po}

    position = applyWiggle(position, group, aInstance);
    mat4 transform = applyTumble(aTransform, aInstance, float(uObjectId));

    ${Rt}
    ${Pt}
    ${Dt}
    ${Ht}

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

    // in front of the near plane (clip z is reversed)
    if (gl_Position.z > gl_Position.w) {
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
        ${_t}
    #endif
}
`;var Pu=`
precision highp float;
precision highp int;

${N}

// the packed depth is linear and reversed (see the SSAO pass)
float getViewZ(const in float depth) {
    return depth * (uFar - uNear) - uFar;
}

// the background (far plane) at 0, packed as (0, 0); the near plane at 1, which
// packUnitIntervalToRG stores as (0, 1) in the uint8 target and unpacks to 255/256, never 1.0, so the packed bytes
// are tested
bool isBackgroundPacked(const in vec2 packedDepth) {
    return packedDepth.x == 0.0 && packedDepth.y == 0.0;
}

bool isNearClipPacked(const in vec2 packedDepth) {
    return packedDepth.x == 0.0 && packedDepth.y == 1.0;
}

bool outsideBounds(const in vec2 p) {
    return p.x < uBounds.x || p.y < uBounds.y || p.x > uBounds.z || p.y > uBounds.w;
}

// view space size of a pixel at view z
float getPixelSize(const in float viewZ) {
    #if dOrthographic == 1
        return 2.0 * uInvProjection[0][0] / uTexSize.x;
    #else
        return 2.0 * uInvProjection[0][0] * -viewZ / uTexSize.x;
    #endif
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
    if ((isBackgroundPacked(packedDepth) && uBlurDirectionY != 0.0) || isNearClipPacked(packedDepth)) {
        gl_FragColor = vec4(packUnitIntervalToRG(1.0), packedDepth);
        return;
    }

    float selfViewZ = getViewZ(selfDepth);
    float pixelSize = getPixelSize(selfViewZ);

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
        if (isBackgroundPacked(sampleSsaoDepth.zw) || isNearClipPacked(sampleSsaoDepth.zw)) {
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
`;var Du=`
precision highp float;
precision highp int;
precision highp sampler2D;

${N}

float smootherstep(float edge0, float edge1, float x) {
    x = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
    return x * x * x * (x * (x * 6.0 - 15.0) + 10.0);
}

// ordered dither of a 2x2 and a 4x4 block (values k / 4 and k / 16), \`pixel\` in whole pixels
float bayer2(vec2 pixel) {
    pixel = floor(pixel);
    return fract(dot(pixel, vec2(0.5, pixel.y * 0.75)));
}

float bayer4(const in vec2 pixel) {
    return bayer2(0.5 * pixel) * 0.25 + bayer2(pixel);
}

// rotation of the sample kernel at \`pixel\`: the 16 angles of a 4x4 block in ordered dither, so that the blur
// (wider than a block) averages all of them
vec2 getKernelRotation(const in vec2 pixel) {
    float angle = 2.0 * PI * (bayer4(pixel) + 0.5 / 16.0);
    return vec2(cos(angle), sin(angle));
}

// depth is reversed: the background (far plane) at 0
bool isBackground(const in float depth) {
    return depth == 0.0;
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
            return 0.0;
        #endif
    } else {
        #ifdef dPackedDepth
            return unpackRGBAToDepth(texture2D(tDepth, coords));
        #else
            return texture2D(tDepth, coords).r;
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

float getLevelDepth(const in sampler2D tex, const in vec2 coords) {
    #ifdef dPackedDepthLevels
        return unpackRGBAToDepth(texture2D(tex, coords));
    #else
        return texture2D(tex, coords).r;
    #endif
}

float getMappedDepth(const in vec2 coords, const in vec2 selfCoords) {
    float d = distance(coords, selfCoords);
    if (d > dQuarterThreshold) {
        return getLevelDepth(tDepthQuarter, coords);
    } else if (d > dHalfThreshold) {
        return getLevelDepth(tDepthHalf, coords);
    } else {
        return getDepth(coords, 0);
    }
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
    if (isBackground(selfDepth)) {
        gl_FragColor = vec4(packUnitIntervalToRG(1.0), packUnitIntervalToRG(0.0));
        return;
    }

    vec3 selfViewNormal = viewNormalAtPixelPositionAccurate(selfCoords, uTransparencyFlag);
    vec3 selfViewPos = screenSpaceToViewSpace(vec3(selfCoords, selfDepth), uInvProjection);
    // linear depth for the blur, reversed (the near plane at 1, the far plane and the background at 0): 16-bit fixed
    // point keeps a constant view z precision, unlike the window depth
    vec2 selfPackedDepth = packUnitIntervalToRG(clamp((uFar + selfViewPos.z) / (uFar - uNear), 0.0, 1.0));

    vec3 randomVec = vec3(getKernelRotation(gl_FragCoord.xy), 0.0);
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
`;var _u=`
precision highp float;
precision highp int;

${N}
${nt}
${vt}
${ye}

varying vec2 vTexCoord;

void main(){
    // anti-aliased SDF text (.v6/designs/labels.md \xA75)
    // sampled and differentiated before anything can discard: derivatives need every fragment of the 2x2 block
    float rawSdf = texture2D(tFont, vTexCoord).r;
    // how much the distance field changes across one pixel, at any label size
    float sdfPerPixel = max(length(vec2(dFdx(rawSdf), dFdy(rawSdf))), 1e-4);

    ${qe}
    ${ot}

    float fragmentDepth = gl_FragCoord.z;

    // determine if this is a background or glyph fragment
    bool isBackground = vTexCoord.x > 1.0;

    // discard background for pick/marking/emissive, but keep it in depth
    #if !defined(dRenderVariant_color) && !defined(dRenderVariant_tracing) && !defined(dRenderVariant_depth)
        if (isBackground) discard;
    #endif

    // glyph + border coverage: in color and tracing, anti-aliased over one pixel (the fractional edge is drawn in the
    // transparent pass, check_transparency); in the other variants, the edge at the field's middle as before
    float edgeAlpha = 1.0;
    float fillAlpha = 1.0;
    if (!isBackground) {
        float sdf = rawSdf + min(uBorderWidth, 0.49); // clamp to avoid exceeding max SDF range
        #if defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
            // edges a quarter pixel out: keeps one-pixel stems of small text solid, invisible on large text
            edgeAlpha = clamp((sdf - 0.5) / sdfPerPixel + 0.75, 0.0, 1.0);
            fillAlpha = clamp((rawSdf - 0.5) / sdfPerPixel + 0.75, 0.0, 1.0);
            if (edgeAlpha < 1.0 / 255.0) discard;
        #else
            if (sdf < 0.5) discard;
        #endif
    }

    #ifdef enabledFragDepth
        gl_FragDepthEXT = fragmentDepth;
    #endif

    // background writes its own opacity into depth alpha; glyphs stay opaque
    #define dHasMaterialOpacity
    float materialOpacity = isBackground ? uBackgroundOpacity : 1.0;
    ${St}

    if (isBackground) {
        #if defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
            material = vec4(uBackgroundColor, uBackgroundOpacity * material.a);
        #endif
    } else {
        #if defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
            material.a *= edgeAlpha;
            if (uBorderWidth > 0.0) material.xyz = mix(uBorderColor, material.xyz, fillAlpha);
            if (uBorderWidth == 0.0 || fillAlpha >= 0.5) {
                // push text fragments forward in depth so they render in front of border (depth is reversed)
                #ifdef enabledFragDepth
                    gl_FragDepthEXT = fragmentDepth + 0.0001;
                #endif
            }
        #endif
    }

    ${Tt}

    #if defined(dRenderVariant_pick)
        ${it}
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
        ${at}
        gl_FragColor = material;
    #elif defined(dRenderVariant_emissive)
        gl_FragColor = material;
    #elif defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
        gl_FragColor = material;
        ${Ve}

        #if defined(dRenderVariant_color)
            ${ke}
            ${Ge}
            ${st}
        #elif defined(dRenderVariant_tracing)
            gl_FragData[1] = vec4(-normalize(vViewPosition), emissive);
            gl_FragData[2] = vec4(material.rgb, uDensity);
        #endif
    #endif
}
`;var Eu=`
precision highp float;
precision highp int;

${N}
${we}
${ct}
${Ct}
${ye}

varying vec2 vTexCoord;

void main(void){
    int vertexId = VertexID;

    ${lr}
    ${Rt}
    ${Pt}
    ${Dt}
    ${Ht}

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

    ${_t}
}
`;var Yf=/[ \t]*\/\/.*\n/g,Qf=/[ \t]*\/\*[\s\S]*?\*\//g,Jf=/\n{2,}/g;function Au(e){if(/^\s*#include\b/m.test(e))throw new Error("'#include' is not supported, shader sources compose their chunks in TS");return e.trim().replace(Yf,`
`).replace(Qf,`
`).replace(Jf,`
`)}var wu=new Map;function te(e,t,r,n={}){wu.set(e,{vert:Au(t),frag:Au(r),outTypes:n})}function Lu(e){let t=wu.get(e);if(!t)throw new Error(`no GLSL sources for program '${e}'`);return t}te("points",mu,fu);te("spheres",Ru,Cu);te("cylinders",Vc,Mc);te("text",Eu,_u);te("lines",nu,ru);te("mesh",du,lu);te("direct-volume",zc,Uc);te("image",tu,eu);te("background",Dc,Pc);te("Bloom Luminosity",le,wc);te("Bloom Blur",le,Ec);te("Bloom Composite",le,Ac);te("cas",le,Lc);te("dof",le,Nc);te("blend-back-dpoit",le,_c);te("evaluate-dpoit",le,jc);te("fxaa",le,Hc);te("illumination-compose",le,Qc);te("illumination-multi-sample-compose",le,ra);te("edge",le,su);te("dim",le,au);te("overlay",le,cu);te("multi-sample-compose",le,ra);te("outlines",le,pu);te("postprocessing",le,hu);te("shadows",le,gu);te("smaa-edges",vu,xu);te("smaa-weights",Tu,Su);te("smaa-blend",bu,yu);te("ssao",le,Du);te("ssao_blur",le,Pu);te("trace",le,Jc);te("trace-accumulate",le,Yc);te("evaluate-wboit",le,Wc);te("copy",le,Bc);te("hi-z",le,Xc);te("gaussian-density",qc,$c);te("color-smoothing-accumulate",Oc,Ic);te("normalize",le,Fc);te("reduction",le,Zc,{0:"ivec4"});te("sum",le,Kc,{0:"ivec4"});te("active-voxels",le,ou);te("isosurface",le,iu);function em(e,t){return t.dLightCount&&(e=e.replace(/dLightCount/g,`${t.dLightCount.ref.value}`)),t.dClipObjectCount&&(e=e.replace(/dClipObjectCount/g,`${t.dClipObjectCount.ref.value}`)),e}function Iu(e,t){let r=new Map([["__VERSION__",t]]);for(let n of e.matchAll(/^[ \t]*#define[ \t]+(\w+)(\()?[ \t]*(.*)$/gm)){if(n[2])throw new Error(`function-like macro '${n[1]}' in shader prefix or header`);r.set(n[1],n[3].trim())}return r}function fo(e,t,r){return Rc(em(e,t),r)}function Ou(e,t){if(e===void 0)return"";let r=e.dRenderVariant?.ref.value||"",n=[];for(let o in e){if(t?.(o,r,e))continue;let a=e[o].ref.value;a!==void 0&&(typeof a=="string"?n.push(`#define ${o}_${a}`):typeof a=="number"?n.push(`#define ${o} ${a}`):typeof a=="boolean"?a&&n.push(`#define ${o}`):wr(a))}return n.join(`
`)+`
`}function tm(e,t){let r=["#define emulateVertexId"];if(t.drawBuffers){if(e.drawBuffers)r.push("#define requiredDrawBuffers");else if(t.drawBuffers==="required")throw new Error("required 'GL_EXT_draw_buffers' extension not available")}if(t.multiDraw){if(e.multiDraw)r.push("#extension GL_ANGLE_multi_draw : require"),r.push("#define enabledMultiDraw");else if(t.multiDraw==="required")throw new Error("required 'GL_ANGLE_multi_draw' extension not available")}return e.clipControl&&r.push("#define clipZeroToOne"),r.join(`
`)+`
`}function rm(e,t){let r=["#extension GL_OES_standard_derivatives : enable"];if(t.fragDepth){if(e.fragDepth)r.push("#extension GL_EXT_frag_depth : enable"),r.push("#define enabledFragDepth");else if(t.fragDepth==="required")throw new Error("required 'GL_EXT_frag_depth' extension not available")}if(t.drawBuffers){if(e.drawBuffers)r.push("#extension GL_EXT_draw_buffers : require"),r.push("#define requiredDrawBuffers"),r.push("#define gl_FragColor gl_FragData[0]");else if(t.drawBuffers==="required")throw new Error("required 'GL_EXT_draw_buffers' extension not available")}if(t.shaderTextureLod){if(e.shaderTextureLod)r.push("#extension GL_EXT_shader_texture_lod : enable"),r.push("#define enabledShaderTextureLod");else if(t.shaderTextureLod==="required")throw new Error("required 'GL_EXT_shader_texture_lod' extension not available")}return e.depthTexture&&r.push("#define depthTextureSupport"),e.clipControl&&r.push("#define clipZeroToOne"),r.join(`
`)+`
`}var nm=`
#define attribute in
#define varying out
#define texture2D texture
`,om=`
#define varying in
#define texture2D texture
#define textureCube texture
#define texture2DLodEXT textureLod
#define textureCubeLodEXT textureLod

#define gl_FragColor out_FragData0
#define gl_FragDepthEXT gl_FragDepth
`;function im(e,t){let r=["#version 300 es"];if(t.drawBuffers&&e.drawBuffers&&r.push("#define requiredDrawBuffers"),t.multiDraw){if(e.multiDraw)r.push("#extension GL_ANGLE_multi_draw : require"),r.push("#define enabledMultiDraw");else if(t.multiDraw==="required")throw new Error("required 'GL_ANGLE_multi_draw' extension not available")}if(t.clipCullDistance){if(e.clipCullDistance)r.push("#extension GL_ANGLE_clip_cull_distance : enable"),r.push("#define enabledClipCullDistance");else if(t.clipCullDistance==="required")throw new Error("required 'GL_ANGLE_clip_cull_distance' extension not available")}if(t.multiview2){if(e.multiview2)r.push("#extension GL_OVR_multiview2 : require"),r.push("#define enabledMultiview2");else if(t.multiview2==="required")throw new Error("required 'GL_OVR_multiview2' extension not available")}return e.noNonInstancedActiveAttribs||r.push("#define emulateVertexId"),e.clipControl&&r.push("#define clipZeroToOne"),r.push(nm),r.join(`
`)+`
`}function Mu(e){return t=>{if(t==="emulateVertexId")return!e.noNonInstancedActiveAttribs;if(t==="clipZeroToOne")return!!e.clipControl}}function am(e,t,r,n){let o=["#version 300 es"];if(r.conservativeDepth){if(e.conservativeDepth)o.push("#extension GL_EXT_conservative_depth : enable"),o.push("#define enabledConservativeDepth");else if(r.conservativeDepth==="required")throw new Error("required 'GL_EXT_conservative_depth' extension not available")}if(o.push(`layout(location = 0) out highp ${n[0]||"vec4"} out_FragData0;`),r.fragDepth&&e.fragDepth&&o.push("#define enabledFragDepth"),r.drawBuffers&&e.drawBuffers){o.push("#define requiredDrawBuffers");for(let i=1,a=t.maxDrawBuffers;i<a;++i)o.push(`layout(location = ${i}) out highp ${n[i]||"vec4"} out_FragData${i};`)}return r.shaderTextureLod&&e.shaderTextureLod&&o.push("#define enabledShaderTextureLod"),e.depthTexture&&o.push("#define depthTextureSupport"),e.clipControl&&o.push("#define clipZeroToOne"),o.push(om),o.join(`
`)+`
`}function sm(e){return e.replace(/gl_FragData\[([0-9]+)\]/g,"out_FragData$1")}var cm=/^[ \t]*uniform\s+((?:highp\s+|mediump\s+|lowp\s+)?\w+)\s+([^;{}]+);/gm;function Fu(e,t){return e.replace(cm,(r,n,o)=>{if(n.includes("sampler"))return r;let i=n.replace(/^(highp|mediump|lowp)\s+/,""),a=[];for(let s of o.split(",")){let c=s.trim(),u=t.get(c.replace(/\[[^\]]*\]$/,"").trim());if(u===void 0)a.push(c);else if(u!==i)throw new Error(`uniform '${c}' is declared as '${i}' in the shader but as '${u}' in the schema`)}return a.length===0?"":`uniform ${n} ${a.join(", ")};`})}var um=/^[ \t]*uniform\s+(?:(?:highp|mediump|lowp)\s+)?(\w*sampler\w+)\s+(\w+)\s*;/gm;function Bu(e,t){return e.replace(um,(r,n,o)=>{let i=t.get(o);if(i===void 0)return r;if(!i.includes(n))throw new Error(`sampler '${o}' is declared as '${n}' in the shader, expected one of '${i}'`);return""})}var lm=/^[ \t]*attribute\s+(?:(?:highp|mediump|lowp)\s+)?(\w+)\s+(\w+)\s*;/gm;function dm(e,t){return e.replace(lm,(r,n,o)=>{let i=t.get(o);if(i===void 0)return r;if(i!==n)throw new Error(`attribute '${o}' is declared as '${n}' in the shader but as '${i}' in the schema`);return""})}function Vu(e,t,r,n,o,i){let a=Lu(o.name),s=Ou(n,o.ignoreDefine),c=Ou(n,o.ignoreDefine),u=A(e)?im(t,o.extensions):tm(t,o.extensions),l=A(e)?am(t,r,o.extensions,a.outTypes):rm(t,o.extensions),d=A(e)?"300":"100",p=Iu(`${u}${s}`,d),m=Iu(`${l}${c}`,d),h=fo(a.vert,n,p),g=fo(A(e)?sm(a.frag):a.frag,n,m);if(i){let{uniformTypes:S,samplerTypes:y,attributeTypes:C}=i,T=fo(i.vert,n,p),I=fo(i.frag,n,m);h=Fu(Bu(h,y),S),h=`${T}
${dm(h,C)}`,g=`${I}
${Fu(Bu(g,y),S)}`}return{vert:`${u}${s}${h}`,frag:`${l}${c}${g}`}}function Uu(e,t){switch(t){case"b":case"b[]":return e.BOOL;case"f":case"f[]":return e.FLOAT;case"i":case"i[]":return e.INT;case"v2":case"v2[]":return e.FLOAT_VEC2;case"v3":case"v3[]":return e.FLOAT_VEC3;case"v4":case"v4[]":return e.FLOAT_VEC4;case"q":case"q[]":return e.FLOAT_VEC4;case"iv2":case"iv2[]":return e.INT_VEC2;case"iv3":case"iv3[]":return e.INT_VEC3;case"iv4":case"iv4[]":return e.INT_VEC4;case"m3":case"m3[]":return e.FLOAT_MAT3;case"m4":case"m4[]":return e.FLOAT_MAT4;default:console.error(`unknown uniform kind '${t}'`)}}function pm(e,t,r){e.uniform1f(t,r)}function fm(e,t,r){e.uniform1fv(t,r)}function mm(e,t,r){e.uniform1i(t,r)}function hm(e,t,r){e.uniform1iv(t,r)}function gm(e,t,r){e.uniform2fv(t,r)}function ym(e,t,r){e.uniform3fv(t,r)}function ku(e,t,r){e.uniform4fv(t,r)}function bm(e,t,r){e.uniform2iv(t,r)}function xm(e,t,r){e.uniform3iv(t,r)}function vm(e,t,r){e.uniform4iv(t,r)}function Sm(e,t,r){e.uniformMatrix3fv(t,!1,r)}function Tm(e,t,r){e.uniformMatrix4fv(t,!1,r)}function Gu(e){switch(e){case"f":return pm;case"f[]":return fm;case"i":case"t":case"b":return mm;case"i[]":case"t[]":case"b[]":return hm;case"v2":case"v2[]":return gm;case"v3":case"v3[]":return ym;case"v4":case"v4[]":return ku;case"q":case"q[]":return ku;case"iv2":case"iv2[]":return bm;case"iv3":case"iv3[]":return xm;case"iv4":case"iv4[]":return vm;case"m3":case"m3[]":return Sm;case"m4":case"m4[]":return Tm}}function zu(e){let t={};return Object.keys(e).forEach(r=>{let n=e[r];n.type==="uniform"?t[r]=Gu(n.kind):n.type==="texture"&&(t[r]=Gu("t"))}),t}function mo(e){switch(e){case"f":return"float";case"i":return"int";case"t":return"sampler2D";case"b":return"bool";case"v2":return"vec2";case"v3":return"vec3";case"v4":return"vec4";case"iv2":return"ivec2";case"iv3":return"ivec3";case"iv4":return"ivec4";case"q":return"vec4";case"m3":return"mat3";case"m4":return"mat4"}throw new Error(`${e} has no primitive GLSL type.`)}function Nu(e){return e.endsWith("[]")}function ju(e){switch(e){case"f":case"i":case"b":return!0;default:return!1}}function Wu(e){let t={};return Object.keys(e).forEach(r=>{t[r]=F.create(Fn(e[r].ref.value))}),t}var dr={global:{name:"Global",bindingIndex:0},material:{name:"Material",bindingIndex:1},object:{name:"Object",bindingIndex:2}},zr=["global","material","object"];function Sr(e,t){return Math.ceil(e/t)*t}function Nr(e){return e.endsWith("[]")?e.slice(0,-2):e}function Cm(e){switch(e){case"f":case"i":case"b":return[4,4];case"v2":case"iv2":return[8,8];case"v3":case"iv3":return[16,12];case"v4":case"iv4":case"q":return[16,16];case"m3":return[16,48];case"m4":return[16,64];default:throw new Error(`unsupported uniform block member kind '${e}'`)}}function Rm(e){switch(e){case"f":case"i":case"b":return 1;case"v2":case"iv2":return 2;case"v3":case"iv3":return 3;case"v4":case"iv4":case"q":return 4;case"m3":return 9;case"m4":return 16;default:throw new Error(`unsupported uniform block member kind '${e}'`)}}function Et(e,t){let r=Hu.get(t);if(r===void 0&&(r=new Map,Hu.set(t,r)),r.has(e))return r.get(e);let n=Pm(e,t);return r.set(e,n),n}var Hu=new WeakMap;function Pm(e,t){if(e==="global"&&t!==Wi){if(!Object.keys(t).some(a=>{let s=t[a];return s.type==="uniform"&&s.block==="global"}))return;t=Wi}let r=Dm(e,t);if(r===void 0)return;let{members:n,size:o}=r;return{block:e,members:n,size:o,hash:`${e}|${n.map(i=>`${i.name}:${i.kind}${i.length?i.length:""}`).join(",")}`}}function Dm(e,t){let r=[],n=0;for(let o of Object.keys(t)){let i=t[o];if(i.type!=="uniform"||i.block!==e)continue;let[a,s]=Cm(Nr(i.kind));if(i.length!==void 0){let c=Sr(s,16);n=Sr(n,16),r.push({name:o,kind:i.kind,offset:n,length:i.length,stride:c}),n+=c*i.length}else n=Sr(n,a),r.push({name:o,kind:i.kind,offset:n,length:0,stride:0}),n+=s}if(r.length!==0)return{members:r,size:Sr(n,16)}}function ho(e){if(!(e.type!=="uniform"||e.block===void 0||e.block==="draw"))return e.block}function qu(e,t){let r={global:[],material:[],object:[]};for(let n of Object.keys(e)){let o=e[n];if(o.type!=="texture"||t&&!Qt(o,t))continue;let a=Fs[n]===o?r.global:o.variant==="material"?r.material:r.object;a.push({name:n,binding:a.length+1,dimension:zn(o,t),sampleType:o.sampleType,filter:o.filter})}return{global:{uniforms:Et("global",e),textures:r.global},material:{uniforms:Et("material",e),textures:r.material},object:{uniforms:Et("object",e),textures:r.object}}}function na(e,t,r){return{f32:new Float32Array(e,t,r/4),i32:new Int32Array(e,t,r/4)}}function $u(e,t,r,n,o,i){switch(r){case"f":e[n]=o[i];break;case"i":t[n]=o[i];break;case"b":t[n]=o[i]?1:0;break;case"v2":e[n]=o[i],e[n+1]=o[i+1];break;case"v3":e[n]=o[i],e[n+1]=o[i+1],e[n+2]=o[i+2];break;case"v4":case"q":e[n]=o[i],e[n+1]=o[i+1],e[n+2]=o[i+2],e[n+3]=o[i+3];break;case"iv2":t[n]=o[i],t[n+1]=o[i+1];break;case"iv3":t[n]=o[i],t[n+1]=o[i+1],t[n+2]=o[i+2];break;case"iv4":t[n]=o[i],t[n+1]=o[i+1],t[n+2]=o[i+2],t[n+3]=o[i+3];break;case"m3":for(let a=0;a<3;++a)e[n+a*4]=o[i+a*3],e[n+a*4+1]=o[i+a*3+1],e[n+a*4+2]=o[i+a*3+2];break;case"m4":for(let a=0;a<16;++a)e[n+a]=o[i+a];break}}function _m(e,{f32:t,i32:r}){let n=e.offset>>2;if(e.length){let o=Nr(e.kind),i=Rm(o),a=e.stride>>2,{length:s}=e;return c=>{let u=Math.min(s,Math.floor(c.length/i));for(let l=0;l<u;++l)$u(t,r,o,n+l*a,c,l*i)}}switch(e.kind){case"f":return o=>{t[n]=o};case"i":return o=>{r[n]=o};case"b":return o=>{r[n]=o?1:0};default:return o=>$u(t,r,e.kind,n,o,0)}}function oa(e,t,r,n){let o=new Map;for(let p of e.members)o.set(p.name,p);let i=[],a=[];for(let p=0,m=r.length;p<m;++p){let[h,g]=r[p];if(!g)continue;let S=o.get(h);S!==void 0&&(i.push(g),a.push(_m(S,t)))}let s=i.length,c=new Int32Array(s).fill(-1),u={changed:!0};for(let p of i)F.observe(p,u);let l=i.some(p=>p.volatile);return Object.assign(()=>{if(!u.changed&&!l)return;u.changed=!1;let p=!1;for(let m=0;m<s;++m){let h=i[m].ref;h.version!==c[m]&&(a[m](h.value),c[m]=h.version,p=!0)}p&&n()},{dispose:()=>{for(let p of i)F.unobserve(p,u)}})}function jr(e){let t=Xu.get(e);return t===void 0&&(t=Em(e),Xu.set(e,t)),t}var Xu=new WeakMap;function Em(e){let t=[];for(let a of Object.keys(e)){let s=e[a];s.type==="attribute"&&t.push([a,s])}let r=t.findIndex(([,a])=>!a.usedIf&&a.divisor===0);r===-1&&(r=t.findIndex(([,a])=>!a.usedIf)),r>0&&t.unshift(...t.splice(r,1));let n=[],o={},i=0;for(let[a,s]of t){let c=s.itemSize===16?4:1,u={name:a,kind:s.kind,itemSize:s.itemSize,divisor:s.divisor,location:i,locationCount:c};n.push(u),o[a]=u,i+=c}return{entries:n,byName:o,size:i,hash:n.map(a=>`${a.name}:${a.location}`).join(",")}}function Am(e){let t=[`layout(std140) uniform ${dr[e.block].name} {`];for(let r of e.members){let n=mo(Nr(r.kind));t.push(r.length?`    ${n} ${r.name}[${r.length}];`:`    ${n} ${r.name};`)}return t.push("};"),t.join(`
`)}function wm(e,t){let r=t?Lm:Im;if(r.has(e))return r.get(e);let n=["precision highp float;","precision highp int;"],o=new Map;if(t)for(let a of zr){let s=Et(a,e);if(s){n.push(Am(s));for(let c of s.members)o.set(c.name,mo(Nr(c.kind)))}}for(let a of Object.keys(e)){let s=e[a];if(s.type!=="uniform"||s.kind==="t"||t&&ho(s)!==void 0)continue;let c=mo(Nr(s.kind));if(!s.kind.endsWith("[]"))n.push(`uniform ${c} ${a};`);else if(s.lengthDefine!==void 0)n.push(`#if ${s.lengthDefine} > 0`,`uniform ${c} ${a}[${s.lengthDefine}];`,"#endif");else if(s.length!==void 0)n.push(`uniform ${c} ${a}[${s.length}];`);else continue;o.set(a,c)}let i=o.size>0?{code:n.join(`
`),types:o}:void 0;return r.set(e,i),i}var Lm=new WeakMap,Im=new WeakMap;function Zu(e,t,r){if(t==="3d"&&!r)return;let n=t==="2d"?"sampler2D":t==="3d"?"sampler3D":"samplerCube";return r?e==="sint"?`i${n}`:e==="uint"?`u${n}`:n:n}function Om(e){switch(e){case 1:return"float";case 2:return"vec2";case 3:return"vec3";case 4:return"vec4";case 16:return"mat4"}}function go(e,t,r,n=t){let o=[],i=`${t}|${n}`;for(let h of Object.keys(e)){let g=e[h];if(g.type!=="texture")continue;let S=typeof g.dimension=="string"?[g.dimension]:ji,y=typeof g.dimension=="string"?g.dimension:ji.find(I=>r(`${g.dimension.define}_${I}`));typeof g.dimension!="string"&&(i+=`|${h}:${y}`);let C=y&&Zu(g.sampleType,y,t);if(!C)continue;let T=new Set;for(let I of S)for(let B of[!0,!1]){let V=Zu(g.sampleType,I,B);V&&T.add(V)}o.push([h,C,Array.from(T)])}let a=Ku.get(e);a||(a=new Map,Ku.set(e,a));let s=a.get(i);if(s)return s;let c=wm(e,t&&n),u=c?[c.code]:[],l=new Map;for(let[h,g,S]of o)u.push(`uniform highp ${g} ${h};`),l.set(h,S);let d=[],p=new Map;for(let{name:h,itemSize:g,location:S}of jr(e).entries){let y=Om(g);d.push(t?`layout(location = ${S}) in ${y} ${h};`:`attribute ${y} ${h};`),p.set(h,y)}let m={vert:[...u,...d].join(`
`),frag:u.join(`
`),uniformTypes:c?.types??new Map,samplerTypes:l,attributeTypes:p};return a.set(i,m),m}var Ku=new WeakMap;function Ae(e){e.inRenderPass&&e.onRenderPassEnd?.(),e.inRenderPass=!1}function yo(e,t){if(j&&!e.inRenderPass)throw new Error(`${t} outside of a render pass, call 'beginRenderPass' first`)}var Yu=De();function Fm(e,t){switch(t){case e.FRAMEBUFFER_COMPLETE:return"complete";case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"incomplete attachment";case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"incomplete missing attachment";case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"incomplete dimensions";case e.FRAMEBUFFER_UNSUPPORTED:return"unsupported"}if(A(e))switch(t){case e.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE:return"incomplete multisample";case e.RENDERBUFFER_SAMPLES:return"renderbuffer samples"}return"unknown error"}function Wr(e,t){let r=e.checkFramebufferStatus(e.FRAMEBUFFER);if(r!==e.FRAMEBUFFER_COMPLETE){let n=Fm(e,r);throw new Error(`Framebuffer status: ${n}${t?` (${t})`:""}`)}}function Bm(e){let t=e.createFramebuffer();if(t===null)throw new Error("Could not create WebGL framebuffer");return t}var Qu=new WeakMap;function bo(e,t){Qu.set(e,t)}function xo(e){return Qu.get(e)?.()??0}var ia=new WeakSet;function aa(e,t){let r=e.getParameter(e.FRAMEBUFFER_BINDING);r&&(t?ia.add(r):ia.delete(r))}function Ju(e){let t=e.getParameter(e.FRAMEBUFFER_BINDING);return!!t&&ia.has(t)}function Mm(e,t){let{drawBuffers:r}=e;if(!r){if(t>1)throw new Error("multiple draw buffers not supported");return}let n=[];for(let o=0;o<t;++o)n.push(r.COLOR_ATTACHMENT0+o);r.drawBuffers(n)}function el(e,t,r){let n=Bm(e),o=!1;return{id:Yu(),bind:()=>e.bindFramebuffer(e.FRAMEBUFFER,n),setDrawBuffers:i=>{Ae(r),e.bindFramebuffer(e.FRAMEBUFFER,n),Mm(t,i)},destroy:()=>{o||(e.deleteFramebuffer(n),o=!0)}}}function tl(){return{id:Yu(),bind:()=>{},setDrawBuffers:()=>{},destroy:()=>{}}}function Vm(e,t){switch(t){case"image-uint8":return e.TEXTURE_2D;case"image-float32":return e.TEXTURE_2D;case"image-float16":return e.TEXTURE_2D;case"image-depth":return e.TEXTURE_2D}if(A(e))switch(t){case"image-int32":return e.TEXTURE_2D;case"volume-uint8":return e.TEXTURE_3D;case"volume-float32":return e.TEXTURE_3D;case"volume-float16":return e.TEXTURE_3D}throw new Error(`unknown texture kind '${t}'`)}function So(e,t,r){switch(t){case"r":return A(e)?r==="int"?e.RED_INTEGER:e.RED:e.LUMINANCE;case"rg":if(A(e)&&(r==="float"||r==="fp16"))return e.RG;if(A(e)&&r==="int")return e.RG_INTEGER;throw new Error('texture format "rg" requires webgl2 and type "float" or int"');case"rgba":return A(e)&&r==="int"?e.RGBA_INTEGER:e.RGBA;case"depth":return e.DEPTH_COMPONENT;case"depth-stencil":return e.DEPTH_STENCIL}}function km(e,t,r){if(A(e))switch(t){case"r":switch(r){case"ubyte":return e.R8;case"float":return e.R32F;case"fp16":return e.R16F;case"int":return e.R32I}case"rg":switch(r){case"ubyte":return e.RG;case"float":return e.RG32F;case"fp16":return e.RG16F;case"int":return e.RG32I}case"rgba":switch(r){case"ubyte":return e.RGBA;case"float":return e.RGBA32F;case"fp16":return e.RGBA16F;case"int":return e.RGBA32I}case"depth":switch(r){case"ushort":return e.DEPTH_COMPONENT16;case"float":return e.DEPTH_COMPONENT32F}break;case"depth-stencil":switch(r){case"float-stencil":return e.DEPTH32F_STENCIL8;case"uint24-8":return e.DEPTH24_STENCIL8}break}return So(e,t,r)}function il(e,t,r,n,o){return Nn(e,t)*r*n*(o||1)}function sa(e,t,r){switch(r){case"ubyte":return e.UNSIGNED_BYTE;case"ushort":return e.UNSIGNED_SHORT;case"float":return e.FLOAT;case"fp16":if(t.textureHalfFloat)return t.textureHalfFloat.HALF_FLOAT;throw new Error('extension "texture_half_float" unavailable');case"int":if(A(e))return e.INT;throw new Error('texture type "int" requires webgl2');case"float-stencil":if(A(e))return e.FLOAT_32_UNSIGNED_INT_24_8_REV;throw new Error('texture type "float-stencil" requires webgl2');case"uint24-8":if(t.depthTexture)return t.depthTexture.UNSIGNED_INT_24_8;throw new Error('extension "depth_texture" unavailable')}}function rl(e,t){switch(t){case"nearest":return e.NEAREST;case"linear":return e.LINEAR}}function vo(e,t,r){switch(r){case"depth":return e.DEPTH_ATTACHMENT;case"stencil":return e.STENCIL_ATTACHMENT;case"depth-stencil":return e.DEPTH_STENCIL_ATTACHMENT;case"color0":case 0:return e.COLOR_ATTACHMENT0}if(t.drawBuffers)switch(r){case"color1":case 1:return t.drawBuffers.COLOR_ATTACHMENT1;case"color2":case 2:return t.drawBuffers.COLOR_ATTACHMENT2;case"color3":case 3:return t.drawBuffers.COLOR_ATTACHMENT3;case"color4":case 4:return t.drawBuffers.COLOR_ATTACHMENT4;case"color5":case 5:return t.drawBuffers.COLOR_ATTACHMENT5;case"color6":case 6:return t.drawBuffers.COLOR_ATTACHMENT6;case"color7":case 7:return t.drawBuffers.COLOR_ATTACHMENT7}throw new Error("unknown texture attachment")}function nl(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement}function Gm(e,t,r){return t===r.TEXTURE_2D}function ol(e,t,r){return t===r.TEXTURE_3D}var al=new WeakSet;function ca(e){return al.add(e),e}function Um(e){return al.has(e)}function To(e){if(!Um(e))throw new Error("expected a WebGL texture, got a texture of another backend");return e}function zm(e){let t=e.createTexture();if(t===null)throw new Error("Could not create WebGL texture");return t}function sl(e,t,r,n,o,i,a){let s=Hi(),c=zm(e);if(!A(e)&&(n==="depth"||n==="depth-stencil")&&(o==="float"?o="ushort":o==="float-stencil"&&(o="uint24-8")),r.endsWith("float32")&&o!=="float"||r.endsWith("float16")&&o!=="fp16"||r.endsWith("uint8")&&o!=="ubyte"||r.endsWith("int32")&&o!=="int"||r.endsWith("depth")&&o!=="ushort"&&o!=="float"&&o!=="float-stencil"&&o!=="uint24-8")throw new Error(`texture kind '${r}' and type '${o}' are incompatible`);if(!t.depthTexture&&(n==="depth"||n==="depth-stencil"))throw new Error("extension 'WEBGL_depth_texture' needed for 'depth' texture format");let u=Vm(e,r),l=rl(e,i),d=So(e,n,o),p=km(e,n,o),m=sa(e,t,o);function h(){a.currentRenderItemId=-1}function g(){h(),e.bindTexture(u,c),e.texParameteri(u,e.TEXTURE_MAG_FILTER,l),e.texParameteri(u,e.TEXTURE_MIN_FILTER,l),e.texParameteri(u,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(u,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(u,null)}g();let S=0,y=0,C=0,T=!1,I,B=!1,V=null;function H(w,b,D){if(w===0||b===0||A(e)&&u===e.TEXTURE_3D&&D===0)throw new Error("empty textures are not allowed");if(!(S===w&&y===b&&C===(D||0)))if(I=void 0,S=w,y=b,C=D||0,h(),e.bindTexture(u,c),u===e.TEXTURE_2D)e.texImage2D(u,0,p,S,y,0,d,m,null);else if(A(e)&&u===e.TEXTURE_3D&&C!==void 0)e.texImage3D(u,0,p,S,y,C,0,d,m,null);else throw new Error("unknown texture target")}H(1,1,A(e)&&u===e.TEXTURE_3D?1:0);function J(w,b=!1){if(w.width===0||w.height===0||!nl(w)&&A(e)&&ol(w,u,e)&&w.depth===0)throw new Error("empty textures are not allowed");if(h(),e.bindTexture(u,c),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,0),nl(w))S=w.width,y=w.height,e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.bindTexture(e.TEXTURE_2D,c),e.texImage2D(e.TEXTURE_2D,0,p,d,m,w);else if(Gm(w,u,e)){let D=w.filter?rl(e,w.filter):l;e.texParameteri(u,e.TEXTURE_MAG_FILTER,D),e.texParameteri(u,e.TEXTURE_MIN_FILTER,D),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!!w.flipY),b?e.texSubImage2D(u,0,0,0,w.width,w.height,d,m,w.array):(S=w.width,y=w.height,e.texImage2D(u,0,p,S,y,0,d,m,w.array))}else if(A(e)&&ol(w,u,e))e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),b?e.texSubImage3D(u,0,0,0,0,w.width,w.height,w.depth,d,m,w.array):(S=w.width,y=w.height,C=w.depth,e.texImage3D(u,0,p,S,y,C,0,d,m,w.array));else throw new Error("unknown texture target");e.bindTexture(u,null),I=b?void 0:w}function oe(){if(u!==e.TEXTURE_2D)throw new Error("mipmap only supported for 2d textures");(A(e)||sn(S)&&sn(y))&&(h(),e.bindTexture(u,c),e.texParameteri(u,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.generateMipmap(u),e.bindTexture(u,null),T=!0)}function pe(w){return n==="depth-stencil"&&w==="depth"?"depth-stencil":w}function O(w,b,D){let $=pe(b);if(Ae(a),w.bind(),$==="depth-stencil"&&e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,null),u===e.TEXTURE_2D)e.framebufferTexture2D(e.FRAMEBUFFER,vo(e,t,$),e.TEXTURE_2D,c,0);else if(A(e)&&u===e.TEXTURE_3D){if(D===void 0)throw new Error("need `layer` to attach 3D texture");e.framebufferTextureLayer(e.FRAMEBUFFER,vo(e,t,$),c,0,D)}else throw new Error("unknown/unsupported texture target");($===0||$==="color0")&&aa(e,o==="int"),bo(w,()=>y)}return{id:s,target:u,format:d,internalFormat:p,type:m,filter:l,getWidth:()=>S,getHeight:()=>y,getDepth:()=>C,getByteCount:()=>il(n,o,S,y,C),define:H,load:J,mipmap:oe,getSource:()=>({kind:r,format:n,type:o,filter:i,data:I,mipmap:T}),bind:w=>{e.activeTexture(e.TEXTURE0+w),e.bindTexture(u,c)},unbind:w=>{e.activeTexture(e.TEXTURE0+w),e.bindTexture(u,null)},attachFramebuffer:O,detachFramebuffer:(w,b)=>{let D=pe(b);if(Ae(a),w.bind(),u===e.TEXTURE_2D)e.framebufferTexture2D(e.FRAMEBUFFER,vo(e,t,D),e.TEXTURE_2D,null,0);else if(A(e)&&u===e.TEXTURE_3D)e.framebufferTextureLayer(e.FRAMEBUFFER,vo(e,t,D),null,0,0);else throw new Error("unknown texture target");(D===0||D==="color0")&&aa(e,!1)},copyFromFramebuffer:(w,b,D,$,X,ae,ee)=>{if(u!==e.TEXTURE_2D)throw new Error("copy only supported for 2d textures");let _=xo(w)-D-X,M=y-ee-X;if(Ae(a),w.bind(),A(e)){V?e.bindFramebuffer(e.DRAW_FRAMEBUFFER,V):(V=e.createFramebuffer(),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,V),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,c,0));let G=e.isEnabled(e.SCISSOR_TEST);G&&e.disable(e.SCISSOR_TEST),e.blitFramebuffer(b,_,b+$,_+X,ae,M,ae+$,M+X,e.COLOR_BUFFER_BIT,e.NEAREST),G&&e.enable(e.SCISSOR_TEST),w.bind()}else h(),e.activeTexture(e.TEXTURE0),e.bindTexture(u,c),e.copyTexSubImage2D(u,0,ae,M,b,_,$,X),e.bindTexture(u,null)},destroy:()=>{B||(e.deleteTexture(c),V&&e.deleteFramebuffer(V),B=!0)}}}function ua(e,t,r,n){let{resources:o}=e,i=[];return Object.keys(t).forEach(a=>{let s=t[a];if(s.type==="texture"){let c=r[a];if(c)if(s.kind==="texture")i[i.length]=[a,c.ref.value];else if(s.shared){let u=o.sharedTextures.acquire(s,c.ref.value);n.set(a,u),i[i.length]=[a,u.texture]}else{let u=o.texture(s.kind,s.format,s.dataType,s.filter);u.load(c.ref.value),i[i.length]=[a,u]}}}),i}function Nm(e,t){switch(t){case"nx":return e.TEXTURE_CUBE_MAP_NEGATIVE_X;case"ny":return e.TEXTURE_CUBE_MAP_NEGATIVE_Y;case"nz":return e.TEXTURE_CUBE_MAP_NEGATIVE_Z;case"px":return e.TEXTURE_CUBE_MAP_POSITIVE_X;case"py":return e.TEXTURE_CUBE_MAP_POSITIVE_Y;case"pz":return e.TEXTURE_CUBE_MAP_POSITIVE_Z}}function cl(e,t,r,n){let o=e.TEXTURE_CUBE_MAP,i=e.LINEAR,a=e.RGBA,s=e.RGBA,c=e.UNSIGNED_BYTE,u=0,l=e.createTexture();e.bindTexture(o,l);function d(g,S,y,C){u===0&&(u=y.width),e.bindTexture(o,l),e.texImage2D(g,S,a,u,u,0,s,c,null),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,0),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.bindTexture(o,l),e.texImage2D(g,S,a,s,c,y),m+=1,m===6&&(h||(r?(e.texParameteri(o,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.generateMipmap(o)):e.texParameteri(o,e.TEXTURE_MIN_FILTER,i),e.texParameteri(o,e.TEXTURE_MAG_FILTER,i)),C||n?.(h))}let p=[],m=0;Ke(t,(g,S)=>{if(!g)return;let y=0,C=Nm(e,S),T=new Image;g instanceof File?T.src=URL.createObjectURL(g):rs(g)?g.then(I=>{T.src=URL.createObjectURL(I)}):T.src=g,p.push({cubeTarget:C,level:y,image:T}),T.addEventListener("load",()=>{d(C,y,T,!1)}),T.addEventListener("error",()=>{n?.(!0)})});let h=!1;return{id:Hi(),target:o,format:s,internalFormat:a,type:c,filter:i,getWidth:()=>u,getHeight:()=>u,getDepth:()=>0,getByteCount:()=>il("rgba","ubyte",u,u,0)*6*(r?2:1),define:()=>{},load:()=>{},mipmap:()=>{},bind:g=>{e.activeTexture(e.TEXTURE0+g),e.bindTexture(o,l)},unbind:g=>{e.activeTexture(e.TEXTURE0+g),e.bindTexture(o,null)},attachFramebuffer:()=>{},detachFramebuffer:()=>{},copyFromFramebuffer:()=>{throw new Error("copy not supported for cube textures")},destroy:()=>{h||(e.deleteTexture(l),h=!0)}}}var ul=De();function jm(e,t){switch(t){case"static":return e.STATIC_DRAW;case"dynamic":return e.DYNAMIC_DRAW;case"stream":return e.STREAM_DRAW;default:wr(t)}}function Wm(e,t){if(t instanceof Uint8Array)return e.UNSIGNED_BYTE;if(t instanceof Int8Array)return e.BYTE;if(t instanceof Uint16Array)return e.UNSIGNED_SHORT;if(t instanceof Int16Array)return e.SHORT;if(t instanceof Uint32Array)return e.UNSIGNED_INT;if(t instanceof Int32Array)return e.INT;if(t instanceof Float32Array)return e.FLOAT;wr(t)}function Hm(e,t){switch(t){case"attribute":return e.ARRAY_BUFFER;case"elements":return e.ELEMENT_ARRAY_BUFFER;case"uniform":if(A(e))return e.UNIFORM_BUFFER;throw new Error("WebGL2 is required for uniform buffers");case"pixel-pack":if(A(e))return e.PIXEL_PACK_BUFFER;throw new Error("WebGL2 is required for pixel-pack buffers")}}function ll(e){let t=e.createBuffer();if(t===null)throw new Error("Could not create WebGL buffer");return t}function dl(e,t,r,n){let o=ll(e),i=jm(e,r),a=Hm(e,n),s=Wm(e,t),c=t.BYTES_PER_ELEMENT,u=t.length;function l(p){e.bindBuffer(a,o),e.bufferData(a,p,i)}l(t);let d=!1;return{id:ul(),_usageHint:i,_bufferType:a,_dataType:s,_bpe:c,length:u,getByteCount:()=>c*u,getBuffer:()=>o,updateData:l,updateSubData:(p,m,h)=>{e.bindBuffer(a,o),h-m===p.length?e.bufferSubData(a,0,p):e.bufferSubData(a,m*c,p.subarray(m,m+h))},destroy:()=>{d||(e.deleteBuffer(o),d=!0)}}}function pl(e,t,r){switch(t){case"float32":switch(r){case 1:return e.FLOAT;case 2:return e.FLOAT_VEC2;case 3:return e.FLOAT_VEC3;case 4:return e.FLOAT_VEC4;case 16:return e.FLOAT_MAT4}default:wr(t)}}function fl(e,t,r,n,o,i,a="static"){let{instancedArrays:s}=r,c=dl(e,n,a,"attribute"),{_bufferType:u,_dataType:l,_bpe:d}=c;return{...c,itemSize:o,divisor:i,bind:p=>{if(e.bindBuffer(u,c.getBuffer()),o===16)for(let m=0;m<4;++m)t.enableVertexAttrib(p+m),e.vertexAttribPointer(p+m,4,l,!1,16*d,m*4*d),s.vertexAttribDivisor(p+m,i);else t.enableVertexAttrib(p),e.vertexAttribPointer(p,o,l,!1,0,0),s.vertexAttribDivisor(p,i)},changeOffset:(p,m)=>{let h=m*d*o;if(e.bindBuffer(u,c.getBuffer()),o===16)for(let g=0;g<4;++g)e.vertexAttribPointer(p+g,4,l,!1,16*d,g*4*d+h);else e.vertexAttribPointer(p,o,l,!1,0,h)}}}function Co(e,t,r){e.clearVertexAttribsState();for(let n=0,o=r.length;n<o;++n){let[i,a]=r[n],s=t.byName[i];if(j&&(a.itemSize!==s?.itemSize||a.divisor!==s.divisor))throw new Error(`attribute '${i}' buffer (itemSize ${a.itemSize}, divisor ${a.divisor}) does not match the layout (itemSize ${s?.itemSize}, divisor ${s?.divisor})`);a.bind(s.location)}e.disableUnusedVertexAttribs()}function ml(e,t,r,n){let o=[];return Object.keys(t).forEach(i=>{let a=t[i];a.type==="attribute"&&Qt(a,n)&&(o[o.length]=[i,e.resources.attribute(r[i].ref.value,a.itemSize,a.divisor)])}),o}function hl(e,t,r="static"){let n=dl(e,t,r,"elements");return{...n,bind:()=>{e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.getBuffer())}}}function gl(e,t,r,n){let o=ll(e),i=sa(e,t,n),a=So(e,r,n),s=Nn(r,n),c=0,u=0;function l(m,h,g,S){c=g,u=S,e.bindBuffer(e.PIXEL_PACK_BUFFER,o),e.bufferData(e.PIXEL_PACK_BUFFER,g*S*s,e.STREAM_READ),e.readPixels(m,h,g,S,a,i,0),e.bindBuffer(e.PIXEL_PACK_BUFFER,null)}function d(m){e.bindBuffer(e.PIXEL_PACK_BUFFER,o),e.getBufferSubData(e.PIXEL_PACK_BUFFER,0,m),e.bindBuffer(e.PIXEL_PACK_BUFFER,null)}let p=!1;return{id:ul(),_type:i,_format:a,_bpe:s,getByteCount:()=>s*c*u,read:l,getSubData:d,destroy:()=>{p||(e.deleteBuffer(o),p=!0)}}}var $m=De();function qm(e,t,r,n){let o={};return Object.keys(r).forEach(i=>{let a=r[i];if(a.type==="uniform"){if(n&&ho(a)!==void 0)return;let s=e.getUniformLocation(t,i);s===null&&Nu(a.kind)&&(s=e.getUniformLocation(t,i+"[0]")),o[i]=s}else if(a.type==="texture"){let s=e.getUniformLocation(t,i);o[i]=s}}),o}function Xm(e,t,r,n){let o=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<o;++i){let a=e.getActiveAttrib(t,i);if(a){let{name:s,type:c}=a;if(s.startsWith("__activeAttribute")||s==="gl_InstanceID"||s==="gl_VertexID"||s==="gl_DrawID"||s==="gl_ViewID_OVR")continue;let u=r[s];if(u===void 0)throw new Error(`missing 'uniform' or 'texture' with name '${s}' in schema`);if(u.type!=="attribute")throw new Error(`'${s}' must be of type 'attribute' but is '${u.type}'`);let l=pl(e,u.kind,u.itemSize);if(l!==c)throw new Error(`unexpected attribute type '${l}' for ${s}, expected '${c}'`);if(!Qt(u,n))throw new Error(`attribute '${s}' is used, but its spec 'usedIf' condition does not hold`)}}}function Zm(e,t,r,n){let o=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<o;++i){let a=e.getActiveUniform(t,i);if(a){let{name:s,type:c}=a;if(s.startsWith("__activeUniform")||s==="gl_InstanceID"||s==="gl_VertexID"||s==="gl_DrawID"||s==="gl_ViewID_OVR")continue;let u=s.replace(/[[0-9]+\]$/,""),l=r[u];if(l===void 0)throw new Error(`missing 'uniform' or 'texture' with name '${s}' in schema`);if(l.type==="uniform"){if(Uu(e,l.kind)!==c)throw new Error(`unexpected uniform type for ${s}`)}else if(l.type==="texture"){let d=Ym(e,zn(l,n));if(vl(e,c)!==d)throw new Error(`sampler type of '${s}' does not match the spec dimension`);let p=l.sampleType==="sint"||l.sampleType==="uint";if(A(e)&&Sl(e,c)!==p)throw new Error(`sampler type of '${s}' does not match the spec sample type '${l.sampleType}'`);if(!Qt(l,n))throw new Error(`texture '${s}' is used, but its spec 'usedIf' condition does not hold`)}else throw new Error(`'${s}' must be of type 'uniform' or 'texture' but is '${l.type}'`)}}}function Km(e,t,r){let n={},o=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<o;++i){let a=e.getActiveUniform(t,i);a&&r[a.name]?.type==="texture"&&(n[a.name]=a.type)}return n}function vl(e,t){if(t===e.SAMPLER_2D)return e.TEXTURE_2D;if(t===e.SAMPLER_CUBE)return e.TEXTURE_CUBE_MAP;if(A(e))switch(t){case e.INT_SAMPLER_2D:case e.UNSIGNED_INT_SAMPLER_2D:case e.SAMPLER_2D_SHADOW:return e.TEXTURE_2D;case e.SAMPLER_3D:case e.INT_SAMPLER_3D:case e.UNSIGNED_INT_SAMPLER_3D:return e.TEXTURE_3D;case e.INT_SAMPLER_CUBE:case e.UNSIGNED_INT_SAMPLER_CUBE:case e.SAMPLER_CUBE_SHADOW:return e.TEXTURE_CUBE_MAP;case e.SAMPLER_2D_ARRAY:case e.INT_SAMPLER_2D_ARRAY:case e.UNSIGNED_INT_SAMPLER_2D_ARRAY:case e.SAMPLER_2D_ARRAY_SHADOW:return e.TEXTURE_2D_ARRAY}throw new Error(`unknown sampler type '${t}'`)}function Ym(e,t){switch(t){case"2d":return e.TEXTURE_2D;case"3d":return e.TEXTURE_3D;case"cube":return e.TEXTURE_CUBE_MAP}}function Qm(e,t,r){let n=qu(e,t),o={},i=0;for(let a of zr)for(let{name:s}of n[a].textures)r(s)&&(o[s]=i++);for(let a of Object.keys(e))e[a].type==="texture"&&r(a)&&o[a]===void 0&&(o[a]=i++);return o}function yl(e){let t=`${e.vert}
${e.frag}`.matchAll(/^[ \t]*#define[ \t]+(\w+)/gm);return Un(Array.from(t,r=>r[1]))}function Sl(e,t){if(!A(e))return!1;switch(t){case e.INT_SAMPLER_2D:case e.INT_SAMPLER_3D:case e.INT_SAMPLER_CUBE:case e.INT_SAMPLER_2D_ARRAY:case e.UNSIGNED_INT_SAMPLER_2D:case e.UNSIGNED_INT_SAMPLER_3D:case e.UNSIGNED_INT_SAMPLER_CUBE:case e.UNSIGNED_INT_SAMPLER_2D_ARRAY:return!0}return!1}function Jm(e,t){return A(e)?t===e.RED_INTEGER||t===e.RG_INTEGER||t===e.RGB_INTEGER||t===e.RGBA_INTEGER:!1}function eh(e,t,r,n){let o=vl(e,n);if(r.target!==o)throw new Error(`texture '${t}' has target ${r.target}, but the sampler requires ${o}`);if(Sl(e,n)!==Jm(e,r.format))throw new Error(`texture '${t}' format ${r.format} does not match the sampler (integer vs. float)`)}function th(e,t,r){for(let{name:n,location:o}of r.entries){let i=e.getAttribLocation(t,n);if(i!==-1&&i!==o)throw new Error(`attribute '${n}' is at location ${i}, expected ${o}`)}}function rh(e,t){if(!e.getProgramParameter(t,e.LINK_STATUS))throw new Error(`Could not compile WebGL program. 

${e.getProgramInfoLog(t)}`)}function bl(e){throw new Error(`uniform '${e}' has no location, it is either not in the schema or a uniform block member`)}var xl=new Set;function nh(e){for(let t of Object.keys(e)){let r=e[t];r.type!=="uniform"||r.kind==="t"||r.block!==void 0||xl.has(t)||(xl.add(t),console.warn(`uniform '${t}' is not in a uniform block, array uniforms need a 'length'`))}}function oh(e,t,r){for(let n of zr){let o=Et(n,r);if(!o)continue;let{name:i}=dr[n],a=e.getUniformBlockIndex(t,i);if(a===e.INVALID_INDEX)continue;let s=e.getActiveUniformBlockParameter(t,a,e.UNIFORM_BLOCK_DATA_SIZE);if(s>o.size)throw new Error(`uniform block '${i}' data size mismatch, expected ${o.size} got ${s}`);let c=e.getUniformIndices(t,o.members.map(m=>m.length?`${m.name}[0]`:m.name));if(c===null)continue;let u=[],l=[];for(let m=0;m<c.length;++m)c[m]!==e.INVALID_INDEX&&(u.push(c[m]),l.push(m));if(u.length===0)continue;let d=e.getActiveUniforms(t,u,e.UNIFORM_OFFSET),p=e.getActiveUniforms(t,u,e.UNIFORM_ARRAY_STRIDE);for(let m=0;m<u.length;++m){let h=o.members[l[m]];if(d[m]!==h.offset)throw new Error(`uniform block '${i}' offset mismatch for '${h.name}', expected ${h.offset} got ${d[m]}`);if(h.length&&p[m]!==h.stride)throw new Error(`uniform block '${i}' array stride mismatch for '${h.name}', expected ${h.stride} got ${p[m]}`)}}}function la(e){let t=e.createProgram();if(t===null)throw new Error("Could not create WebGL program");return t}function ih(e){if(typeof e!="string")throw new Error(`unknown program variant: ${e}`);return e.startsWith("color")?"color":e.startsWith("pick")?"pick":e}function Tl(e,t,r,n,o,i,a){let{defineValues:s,shaderCode:c,schema:u}=i,l=la(e),d=$m(),p=ih(s.dRenderVariant.ref.value),m=Vu(e,r,n,s,c,go(u,A(e),Os(s),a)),h=o("vert",m.vert),g=o("frag",m.frag),S=jr(u);if(S.size>n.maxVertexAttribs)throw new Error(`'${c.name}' needs ${S.size} attribute locations, only ${n.maxVertexAttribs} are available`);let y,C,T,I,B=!1,V=!1,H=!1;function J(){h.attach(l),g.attach(l);for(let{name:O,location:w}of S.entries)e.bindAttribLocation(l,w,O);e.linkProgram(l),j&&rh(e,l),B=!0}p==="compute"&&J();function oe(O){T=Qm(u,O,b=>y[b]!==null&&y[b]!==void 0);let w=e.getParameter(e.CURRENT_PROGRAM);e.useProgram(l);for(let b of Object.keys(T))e.uniform1i(y[b],T[b]);e.useProgram(w)}function pe(){if(y=qm(e,l,u,a),C=zu(u),oe(yl(m)),a&&A(e))for(let O of zr){let w=dr[O],b=e.getUniformBlockIndex(l,w.name);b!==e.INVALID_INDEX&&e.uniformBlockBinding(l,b,w.bindingIndex)}if(j){let O=yl(m);Xm(e,l,u,O),th(e,l,S),Zm(e,l,u,O),I=Km(e,l,u),a&&A(e)&&(oh(e,l,u),nh(u))}V=!0}return{id:d,variant:p,isReady:()=>V,isCompiled:()=>V||H||!r.parallelShaderCompile?!0:B&&!!e.getProgramParameter(l,r.parallelShaderCompile.COMPLETION_STATUS),link:()=>{B||J()},finalize(O){return B||J(),!V&&(O||!r.parallelShaderCompile||e.getProgramParameter(l,r.parallelShaderCompile.COMPLETION_STATUS))&&pe(),V},use:()=>{if(j&&!V)throw new Error(`program not finalized: ${p}`);t.currentProgramId=d,e.useProgram(l)},setUniforms:O=>{for(let w=0,b=O.length;w<b;++w){let[D,$]=O[w];if($){let X=y[D];X===void 0?j&&bl(D):X!==null&&C[D](e,X,$.ref.value)}}},uniform:(O,w)=>{let b=y[O];b===void 0?j&&bl(O):b!==null&&C[O](e,b,w)},bindAttributes:O=>{Co(t,S,O)},offsetAttributes:(O,w)=>{for(let b=0,D=O.length;b<D;++b){let[$,X]=O[b];X.changeOffset(S.byName[$].location,w)}},bindTextures:O=>{for(let w=0,b=O.length;w<b;++w){let[D,$]=O[w],X=T[D];if(X!==void 0)if(Ms($))e.activeTexture(e.TEXTURE0+X),e.bindTexture(e.TEXTURE_2D,null);else{let ae=To($);I?.[D]!==void 0&&eh(e,D,ae,I[D]),ae.bind(X)}}},destroy:()=>{H||(h.destroy(),g.destroy(),e.deleteProgram(l),H=!0)}}}var ah=De();function sh(e){let t=e.split(`
`);for(let r=0;r<t.length;++r)t[r]=r+1+": "+t[r];return t.join(`
`)}function Ro(e,t){let{type:r,source:n}=t,o=e.createShader(r==="vert"?e.VERTEX_SHADER:e.FRAGMENT_SHADER);if(o===null)throw new Error(`Error creating ${r} shader`);if(e.shaderSource(o,n),e.compileShader(o),j&&e.getShaderParameter(o,e.COMPILE_STATUS)===!1)throw console.warn(`'${r}' shader info log '${e.getShaderInfoLog(o)}'
${sh(n)}`),new Error(`Error compiling ${r} shader`);return o}function Cl(e,t){let r=Ro(e,t);return{id:ah(),attach:n=>{e.attachShader(n,r)},destroy:()=>{e.deleteShader(r)}}}function A(e){return typeof WebGL2RenderingContext<"u"&&e instanceof WebGL2RenderingContext}function Rl(e){if(A(e))return{drawArraysInstanced:e.drawArraysInstanced.bind(e),drawElementsInstanced:e.drawElementsInstanced.bind(e),vertexAttribDivisor:e.vertexAttribDivisor.bind(e),VERTEX_ATTRIB_ARRAY_DIVISOR:e.VERTEX_ATTRIB_ARRAY_DIVISOR};{let t=e.getExtension("ANGLE_instanced_arrays");return t===null?null:{drawArraysInstanced:t.drawArraysInstancedANGLE.bind(t),drawElementsInstanced:t.drawElementsInstancedANGLE.bind(t),vertexAttribDivisor:t.vertexAttribDivisorANGLE.bind(t),VERTEX_ATTRIB_ARRAY_DIVISOR:t.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE}}}function Pl(e){if(A(e))return{FRAGMENT_SHADER_DERIVATIVE_HINT:e.FRAGMENT_SHADER_DERIVATIVE_HINT};{let t=e.getExtension("OES_standard_derivatives");return t===null?null:{FRAGMENT_SHADER_DERIVATIVE_HINT:t.FRAGMENT_SHADER_DERIVATIVE_HINT_OES}}}function Dl(e){return A(e)?{}:e.getExtension("OES_element_index_uint")}function _l(e){if(A(e))return{VERTEX_ARRAY_BINDING:e.VERTEX_ARRAY_BINDING,bindVertexArray:e.bindVertexArray.bind(e),createVertexArray:e.createVertexArray.bind(e),deleteVertexArray:e.deleteVertexArray.bind(e),isVertexArray:e.isVertexArray.bind(e)};{let t=e.getExtension("OES_vertex_array_object");return t===null?null:{VERTEX_ARRAY_BINDING:t.VERTEX_ARRAY_BINDING_OES,bindVertexArray:t.bindVertexArrayOES.bind(t),createVertexArray:t.createVertexArrayOES.bind(t),deleteVertexArray:t.deleteVertexArrayOES.bind(t),isVertexArray:t.isVertexArrayOES.bind(t)}}}function El(e){return A(e)?{}:e.getExtension("OES_texture_float")}function Al(e){return e.getExtension("OES_texture_float_linear")}function wl(e){if(A(e))return{HALF_FLOAT:e.HALF_FLOAT};{let t=e.getExtension("OES_texture_half_float");return t===null?null:{HALF_FLOAT:t.HALF_FLOAT_OES}}}function Ll(e){return e.getExtension("OES_texture_half_float_linear")}function Il(e){if(A(e))return{MIN:e.MIN,MAX:e.MAX};{let t=e.getExtension("EXT_blend_minmax");return t===null?null:{MIN:t.MIN_EXT,MAX:t.MAX_EXT}}}function Ol(e){return A(e)?{}:e.getExtension("EXT_frag_depth")}function Fl(e){if(A(e))return e.getExtension("EXT_color_buffer_float")===null?null:(e.getExtension("EXT_float_blend"),{RGBA32F:e.RGBA32F});{let t=e.getExtension("WEBGL_color_buffer_float");return t===null?e.getExtension("OES_texture_float")===null?null:id(e,e.FLOAT)?{RGBA32F:34836}:null:(e.getExtension("EXT_float_blend"),{RGBA32F:t.RGBA32F_EXT})}}function Bl(e){return e.getExtension("EXT_float_blend")===null?null:{}}function Ml(e){if(A(e))return e.getExtension("EXT_color_buffer_half_float")===null?null:(e.getExtension("EXT_float_blend"),{RGBA16F:e.RGBA16F});{let t=e.getExtension("EXT_color_buffer_half_float");return t===null?e.getExtension("OES_texture_half_float")===null?null:id(e,36193)?{RGBA16F:34842}:null:(e.getExtension("EXT_float_blend"),{RGBA16F:t.RGBA16F_EXT})}}function Vl(e){if(A(e))return{drawBuffers:e.drawBuffers.bind(e),COLOR_ATTACHMENT0:e.COLOR_ATTACHMENT0,COLOR_ATTACHMENT1:e.COLOR_ATTACHMENT1,COLOR_ATTACHMENT2:e.COLOR_ATTACHMENT2,COLOR_ATTACHMENT3:e.COLOR_ATTACHMENT3,COLOR_ATTACHMENT4:e.COLOR_ATTACHMENT4,COLOR_ATTACHMENT5:e.COLOR_ATTACHMENT5,COLOR_ATTACHMENT6:e.COLOR_ATTACHMENT6,COLOR_ATTACHMENT7:e.COLOR_ATTACHMENT7,DRAW_BUFFER0:e.DRAW_BUFFER0,DRAW_BUFFER1:e.DRAW_BUFFER1,DRAW_BUFFER2:e.DRAW_BUFFER2,DRAW_BUFFER3:e.DRAW_BUFFER3,DRAW_BUFFER4:e.DRAW_BUFFER4,DRAW_BUFFER5:e.DRAW_BUFFER5,DRAW_BUFFER6:e.DRAW_BUFFER6,DRAW_BUFFER7:e.DRAW_BUFFER7,MAX_COLOR_ATTACHMENTS:e.MAX_COLOR_ATTACHMENTS,MAX_DRAW_BUFFERS:e.MAX_DRAW_BUFFERS};{let t=e.getExtension("WEBGL_draw_buffers");return t===null?null:{drawBuffers:t.drawBuffersWEBGL.bind(t),COLOR_ATTACHMENT0:t.COLOR_ATTACHMENT0_WEBGL,COLOR_ATTACHMENT1:t.COLOR_ATTACHMENT1_WEBGL,COLOR_ATTACHMENT2:t.COLOR_ATTACHMENT2_WEBGL,COLOR_ATTACHMENT3:t.COLOR_ATTACHMENT3_WEBGL,COLOR_ATTACHMENT4:t.COLOR_ATTACHMENT4_WEBGL,COLOR_ATTACHMENT5:t.COLOR_ATTACHMENT5_WEBGL,COLOR_ATTACHMENT6:t.COLOR_ATTACHMENT6_WEBGL,COLOR_ATTACHMENT7:t.COLOR_ATTACHMENT7_WEBGL,DRAW_BUFFER0:t.DRAW_BUFFER0_WEBGL,DRAW_BUFFER1:t.DRAW_BUFFER1_WEBGL,DRAW_BUFFER2:t.DRAW_BUFFER2_WEBGL,DRAW_BUFFER3:t.DRAW_BUFFER3_WEBGL,DRAW_BUFFER4:t.DRAW_BUFFER4_WEBGL,DRAW_BUFFER5:t.DRAW_BUFFER5_WEBGL,DRAW_BUFFER6:t.DRAW_BUFFER6_WEBGL,DRAW_BUFFER7:t.DRAW_BUFFER7_WEBGL,MAX_COLOR_ATTACHMENTS:t.MAX_COLOR_ATTACHMENTS_WEBGL,MAX_DRAW_BUFFERS:t.MAX_DRAW_BUFFERS_WEBGL}}}function kl(e){let t=e.getExtension("OES_draw_buffers_indexed");return t===null?null:{enablei:t.enableiOES.bind(t),disablei:t.disableiOES.bind(t),blendEquationi:t.blendEquationiOES.bind(t),blendEquationSeparatei:t.blendEquationSeparateiOES.bind(t),blendFunci:t.blendFunciOES.bind(t),blendFuncSeparatei:t.blendFuncSeparateiOES.bind(t),colorMaski:t.colorMaskiOES.bind(t)}}function Gl(e){return A(e)?{}:e.getExtension("EXT_shader_texture_lod")}function Ul(e){if(A(e))return{UNSIGNED_INT_24_8:e.UNSIGNED_INT_24_8};{let t=e.getExtension("WEBGL_depth_texture");return t===null?null:{UNSIGNED_INT_24_8:t.UNSIGNED_INT_24_8_WEBGL}}}function zl(e){if(A(e))return{FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING:e.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING,SRGB8_ALPHA8:e.SRGB8_ALPHA8,SRGB8:e.SRGB8,SRGB:e.SRGB};{let t=e.getExtension("EXT_sRGB");return t===null?null:{FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING:t.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT,SRGB8_ALPHA8:t.SRGB8_ALPHA8_EXT,SRGB8:t.SRGB_ALPHA_EXT,SRGB:t.SRGB_EXT}}}function Nl(e){if(A(e)){let t=e.getExtension("EXT_disjoint_timer_query_webgl2")||e.getExtension("EXT_disjoint_timer_query");return t===null?null:{QUERY_COUNTER_BITS:t.QUERY_COUNTER_BITS_EXT,CURRENT_QUERY:e.CURRENT_QUERY,QUERY_RESULT:e.QUERY_RESULT,QUERY_RESULT_AVAILABLE:e.QUERY_RESULT_AVAILABLE,TIME_ELAPSED:t.TIME_ELAPSED_EXT,TIMESTAMP:t.TIMESTAMP_EXT,GPU_DISJOINT:t.GPU_DISJOINT_EXT,createQuery:e.createQuery.bind(e),deleteQuery:e.deleteQuery.bind(e),isQuery:e.isQuery.bind(e),beginQuery:e.beginQuery.bind(e),endQuery:e.endQuery.bind(e),queryCounter:t.queryCounterEXT.bind(t),getQuery:e.getQuery.bind(e),getQueryParameter:e.getQueryParameter.bind(e)}}else{let t=e.getExtension("EXT_disjoint_timer_query");return t===null?null:{QUERY_COUNTER_BITS:t.QUERY_COUNTER_BITS_EXT,CURRENT_QUERY:t.CURRENT_QUERY_EXT,QUERY_RESULT:t.QUERY_RESULT_EXT,QUERY_RESULT_AVAILABLE:t.QUERY_RESULT_AVAILABLE_EXT,TIME_ELAPSED:t.TIME_ELAPSED_EXT,TIMESTAMP:t.TIMESTAMP_EXT,GPU_DISJOINT:t.GPU_DISJOINT_EXT,createQuery:t.createQueryEXT.bind(t),deleteQuery:t.deleteQueryEXT.bind(t),isQuery:t.isQueryEXT.bind(t),beginQuery:t.beginQueryEXT.bind(t),endQuery:t.endQueryEXT.bind(t),queryCounter:t.queryCounterEXT.bind(t),getQuery:t.getQueryEXT.bind(t),getQueryParameter:t.getQueryObjectEXT.bind(t)}}}function jl(e){let t=e.getExtension("WEBGL_multi_draw");return t?{multiDrawArrays:t.multiDrawArraysWEBGL.bind(t),multiDrawElements:t.multiDrawElementsWEBGL.bind(t),multiDrawArraysInstanced:t.multiDrawArraysInstancedWEBGL.bind(t),multiDrawElementsInstanced:t.multiDrawElementsInstancedWEBGL.bind(t)}:null}function Wl(e){let t=e.getExtension("WEBGL_draw_instanced_base_vertex_base_instance");return t?{drawArraysInstancedBaseInstance:t.drawArraysInstancedBaseInstanceWEBGL.bind(t),drawElementsInstancedBaseVertexBaseInstance:t.drawElementsInstancedBaseVertexBaseInstanceWEBGL.bind(t)}:null}function Hl(e){let t=e.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance");return t?{multiDrawArraysInstancedBaseInstance:t.multiDrawArraysInstancedBaseInstanceWEBGL.bind(t),multiDrawElementsInstancedBaseVertexBaseInstance:t.multiDrawElementsInstancedBaseVertexBaseInstanceWEBGL.bind(t)}:null}function $l(e){let t=e.getExtension("KHR_parallel_shader_compile");return t===null?null:{COMPLETION_STATUS:t.COMPLETION_STATUS_KHR}}function ql(e){return A(e)?{}:e.getExtension("OES_fbo_render_mipmap")}function Xl(e){if(A(e)){let t=e.getExtension("WEBGL_provoking_vertex");if(t)return{FIRST_VERTEX_CONVENTION:t.FIRST_VERTEX_CONVENTION_WEBGL,LAST_VERTEX_CONVENTION:t.LAST_VERTEX_CONVENTION_WEBGL,PROVOKING_VERTEX:t.PROVOKING_VERTEX_WEBGL,provokingVertex:t.provokingVertexWEBGL.bind(t)}}return null}function Zl(e){if(A(e)){let t=e.getExtension("WEBGL_clip_cull_distance");if(t)return{MAX_CLIP_DISTANCES:t.MAX_CLIP_DISTANCES_WEBGL,MAX_CULL_DISTANCES:t.MAX_CULL_DISTANCES_WEBGL,MAX_COMBINED_CLIP_AND_CULL_DISTANCES:t.MAX_COMBINED_CLIP_AND_CULL_DISTANCES_WEBGL,CLIP_DISTANCE0:t.CLIP_DISTANCE0_WEBGL,CLIP_DISTANCE1:t.CLIP_DISTANCE1_WEBGL,CLIP_DISTANCE2:t.CLIP_DISTANCE2_WEBGL,CLIP_DISTANCE3:t.CLIP_DISTANCE3_WEBGL,CLIP_DISTANCE4:t.CLIP_DISTANCE4_WEBGL,CLIP_DISTANCE5:t.CLIP_DISTANCE5_WEBGL,CLIP_DISTANCE6:t.CLIP_DISTANCE6_WEBGL,CLIP_DISTANCE7:t.CLIP_DISTANCE7_WEBGL}}return null}function Kl(e){return A(e)&&e.getExtension("EXT_conservative_depth")?{}:null}function Yl(e){if(A(e)){let t=e.getExtension("WEBGL_stencil_texturing");if(t)return{DEPTH_STENCIL_TEXTURE_MODE:t.DEPTH_STENCIL_TEXTURE_MODE_WEBGL,STENCIL_INDEX:t.STENCIL_INDEX_WEBGL}}return null}function Ql(e){let t=e.getExtension("EXT_clip_control");return t?{LOWER_LEFT:t.LOWER_LEFT_EXT,UPPER_LEFT:t.UPPER_LEFT_EXT,NEGATIVE_ONE_TO_ONE:t.NEGATIVE_ONE_TO_ONE_EXT,ZERO_TO_ONE:t.ZERO_TO_ONE_EXT,CLIP_ORIGIN:t.CLIP_ORIGIN_EXT,CLIP_DEPTH_MODE:t.CLIP_DEPTH_MODE_EXT,clipControl:t.clipControlEXT.bind(t)}:null}function Jl(e){return A(e)&&e.getExtension("EXT_render_snorm")?{}:null}function ed(e){return A(e)&&e.getExtension("WEBGL_render_shared_exponent")?{}:null}function td(e){let t=e.getExtension("EXT_texture_norm16");return t?{R16:t.R16_EXT,RG16:t.RG16_EXT,RGB16:t.RGB16_EXT,RGBA16:t.RGBA16_EXT,R16_SNORM:t.R16_SNORM_EXT,RG16_SNORM:t.RG16_SNORM_EXT,RGB16_SNORM:t.RGB16_SNORM_EXT,RGBA16_SNORM:t.RGBA16_SNORM_EXT}:null}function rd(e){let t=e.getExtension("EXT_depth_clamp");return t?{DEPTH_CLAMP:t.DEPTH_CLAMP_EXT}:null}function nd(e){if(A(e)){let t=e.getExtension("OVR_multiview2");if(t)return{FRAMEBUFFER_ATTACHMENT_TEXTURE_NUM_VIEWS:t.FRAMEBUFFER_ATTACHMENT_TEXTURE_NUM_VIEWS_OVR,FRAMEBUFFER_ATTACHMENT_TEXTURE_BASE_VIEW_INDEX:t.FRAMEBUFFER_ATTACHMENT_TEXTURE_BASE_VIEW_INDEX_OVR,MAX_VIEWS:t.MAX_VIEWS_OVR,FRAMEBUFFER_INCOMPLETE_VIEW_TARGETS:t.FRAMEBUFFER_INCOMPLETE_VIEW_TARGETS_OVR,framebufferTextureMultiview:t.framebufferTextureMultiviewOVR.bind(t)}}return null}function od(e){if(!A(e))return!1;if(typeof navigator<"u"){let t=window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);return t?parseInt(t[1])>=85:!0}return!1}var ch=`
attribute vec4 aPosition;

void main() {
    gl_Position = aPosition;
}`,uh=`
precision mediump float;
uniform vec4 uColor;
uniform sampler2D uTexture;

void main() {
    gl_FragColor = texture2D(uTexture, vec2(0.5, 0.5)) * uColor;
}`,lh=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]);function id(e,t){let r=Ro(e,{type:"vert",source:ch}),n=Ro(e,{type:"frag",source:uh});if(!r||!n)return!1;let o=la(e);e.attachShader(o,r),e.attachShader(o,n),e.linkProgram(o),e.useProgram(o);let i=e.getAttribLocation(o,"aPosition"),a=e.getUniformLocation(o,"uColor");if(!a)return j&&console.log("error getting 'uColor' uniform location"),!1;let s=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,lh,e.STATIC_DRAW),e.enableVertexAttribArray(i),e.vertexAttribPointer(i,2,e.FLOAT,!1,0,0);let c=e.createTexture(),u=new Uint8Array([255,255,255,255]);e.bindTexture(e.TEXTURE_2D,c),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,u);let l=e.createTexture();e.bindTexture(e.TEXTURE_2D,l),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,t,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST);let d=e.createFramebuffer();if(e.bindFramebuffer(e.FRAMEBUFFER,d),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,l,0),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE)return j&&console.log(`error creating framebuffer for '${t}'`),!1;e.bindTexture(e.TEXTURE_2D,c),e.uniform4fv(a,[0,10,20,1]),e.drawArrays(e.TRIANGLES,0,6),e.bindTexture(e.TEXTURE_2D,l),e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(1,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.uniform4fv(a,[0,1/10,1/20,1]),e.drawArrays(e.TRIANGLES,0,6);let m=new Uint8Array(4);if(e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,m),m[0]!==0||m[1]<248||m[2]<248||m[3]<254)return j&&console.log(`not able to actually render to '${t}' texture`),!1;if(t===e.FLOAT){e.bindFramebuffer(e.FRAMEBUFFER,d);let h=new Float32Array(4);e.readPixels(0,0,1,1,e.RGBA,e.FLOAT,h);let g=e.getError();if(g)return j&&console.log(`error reading float pixels: '${da(e,g)}'`),!1}return!0}function ad(e){let t=Rl(e);if(t===null)throw new Error('Could not find support for "instanced_arrays"');let r=Dl(e);if(r===null)throw new Error('Could not find support for "element_index_uint"');let n=Pl(e);if(n===null)throw new Error('Could not find support for "standard_derivatives"');let o=El(e);if(o===null)throw new Error('Could not find support for "texture_float"');let i=Il(e);if(i===null)throw new Error('Could not find support for "blend_minmax"');let a=Al(e);j&&a===null&&console.log('Could not find support for "texture_float_linear"');let s=wl(e);j&&s===null&&console.log('Could not find support for "texture_half_float"');let c=Ll(e);j&&c===null&&console.log('Could not find support for "texture_half_float_linear"');let u=Ul(e);j&&u===null&&console.log('Could not find support for "depth_texture"');let l=_l(e);j&&l===null&&console.log('Could not find support for "vertex_array_object"');let d=Ol(e);j&&d===null&&console.log('Could not find support for "frag_depth"');let p=Fl(e);j&&p===null&&console.log('Could not find support for "color_buffer_float"');let m=Bl(e);j&&m===null&&console.log('Could not find support for "float_blend"');let h=Ml(e);j&&h===null&&console.log('Could not find support for "color_buffer_half_float"');let g=Vl(e);j&&g===null&&console.log('Could not find support for "draw_buffers"');let S=kl(e);j&&S===null&&console.log('Could not find support for "draw_buffers_indexed"');let y=Gl(e);j&&y===null&&console.log('Could not find support for "shader_texture_lod"');let C=zl(e);j&&C===null&&console.log('Could not find support for "sRGB"');let T=Nl(e);j&&T===null&&console.log('Could not find support for "disjoint_timer_query"');let I=jl(e);j&&I===null&&console.log('Could not find support for "multi_draw"');let B=Wl(e);j&&B===null&&console.log('Could not find support for "draw_instanced_base_vertex_base_instance"');let V=Hl(e);j&&V===null&&console.log('Could not find support for "multi_draw_instanced_base_vertex_base_instance"');let H=$l(e);j&&H===null&&console.log('Could not find support for "parallel_shader_compile"');let J=ql(e);j&&J===null&&console.log('Could not find support for "fbo_render_mipmap"');let oe=Xl(e);j&&oe===null&&console.log('Could not find support for "provoking_vertex"');let pe=Zl(e);j&&pe===null&&console.log('Could not find support for "clip_cull_distance"');let O=Kl(e);j&&O===null&&console.log('Could not find support for "conservative_depth"');let w=Yl(e);j&&w===null&&console.log('Could not find support for "stencil_texturing"');let b=Ql(e);j&&b===null&&console.log('Could not find support for "clip_control"');let D=Jl(e);j&&D===null&&console.log('Could not find support for "render_snorm"');let $=ed(e);j&&$===null&&console.log('Could not find support for "render_shared_exponent"');let X=td(e);j&&X===null&&console.log('Could not find support for "texture_norm16"');let ae=rd(e);j&&ae===null&&console.log('Could not find support for "depth_clamp"');let ee=nd(e);j&&ee===null&&console.log('Could not find support for "multiview2"');let _=od(e);return{instancedArrays:t,standardDerivatives:n,elementIndexUint:r,textureFloat:o,blendMinMax:i,textureFloatLinear:a,textureHalfFloat:s,textureHalfFloatLinear:c,depthTexture:u,vertexArrayObject:l,fragDepth:d,colorBufferFloat:p,floatBlend:m,colorBufferHalfFloat:h,drawBuffers:g,drawBuffersIndexed:S,shaderTextureLod:y,sRGB:C,disjointTimerQuery:T,multiDraw:I,drawInstancedBaseVertexBaseInstance:B,multiDrawInstancedBaseVertexBaseInstance:V,parallelShaderCompile:H,fboRenderMipmap:J,provokingVertex:oe,clipCullDistance:pe,conservativeDepth:O,stencilTexturing:w,clipControl:b,renderSnorm:D,renderSharedExponent:$,textureNorm16:X,depthClamp:ae,multiview2:ee,noNonInstancedActiveAttribs:_}}function sd(e,t){let r={},n=e.getParameter(e.FRONT_FACE),o=e.getParameter(e.CULL_FACE_MODE),i=e.getParameter(e.DEPTH_WRITEMASK),a=e.getParameter(e.DEPTH_CLEAR_VALUE),s=e.getParameter(e.DEPTH_FUNC),c=e.getParameter(e.COLOR_WRITEMASK),u=e.getParameter(e.COLOR_CLEAR_VALUE),l=e.getParameter(e.BLEND_SRC_RGB),d=e.getParameter(e.BLEND_DST_RGB),p=e.getParameter(e.BLEND_SRC_ALPHA),m=e.getParameter(e.BLEND_DST_ALPHA),h=e.getParameter(e.BLEND_COLOR),g=e.getParameter(e.BLEND_EQUATION_RGB),S=e.getParameter(e.BLEND_EQUATION_ALPHA),y=e.getParameter(e.STENCIL_FUNC),C=e.getParameter(e.STENCIL_VALUE_MASK),T=e.getParameter(e.STENCIL_REF),I=e.getParameter(e.STENCIL_BACK_FUNC),B=e.getParameter(e.STENCIL_BACK_VALUE_MASK),V=e.getParameter(e.STENCIL_BACK_REF),H=e.getParameter(e.STENCIL_WRITEMASK),J=e.getParameter(e.STENCIL_BACK_WRITEMASK),oe=e.getParameter(e.STENCIL_FAIL),pe=e.getParameter(e.STENCIL_PASS_DEPTH_PASS),O=e.getParameter(e.STENCIL_PASS_DEPTH_FAIL),w=e.getParameter(e.STENCIL_BACK_FAIL),b=e.getParameter(e.STENCIL_BACK_PASS_DEPTH_PASS),D=e.getParameter(e.STENCIL_BACK_PASS_DEPTH_FAIL),$=e.getParameter(e.STENCIL_CLEAR_VALUE),X=e.getParameter(e.MAX_VERTEX_ATTRIBS),ae=[],ee=[],_=[],M=e.getParameter(e.VIEWPORT),G=e.getParameter(e.SCISSOR_BOX),Y=t.clipControl?e.getParameter(t.clipControl.CLIP_ORIGIN):-1,se=t.clipControl?e.getParameter(t.clipControl.CLIP_DEPTH_MODE):-1,Re=()=>{for(let v=0;v<X;++v)ae[v]=0};return Re(),{currentProgramId:-1,currentMaterialId:-1,currentRenderItemId:-1,inRenderPass:!1,onRenderPassEnd:void 0,enable:v=>{r[v]!==!0&&(e.enable(v),r[v]=!0)},disable:v=>{r[v]!==!1&&(e.disable(v),r[v]=!1)},frontFace:v=>{v!==n&&(e.frontFace(v),n=v)},cullFace:v=>{v!==o&&(e.cullFace(v),o=v)},depthMask:v=>{v!==i&&(e.depthMask(v),i=v)},clearDepth:v=>{v!==a&&(e.clearDepth(v),a=v)},depthFunc:v=>{v!==s&&(e.depthFunc(v),s=v)},colorMask:(v,E,k,W)=>{(v!==c[0]||E!==c[1]||k!==c[2]||W!==c[3])&&(e.colorMask(v,E,k,W),c[0]=v,c[1]=E,c[2]=k,c[3]=W)},clearColor:(v,E,k,W)=>{(v!==u[0]||E!==u[1]||k!==u[2]||W!==u[3])&&(e.clearColor(v,E,k,W),u[0]=v,u[1]=E,u[2]=k,u[3]=W)},blendFunc:(v,E)=>{(v!==l||E!==d||v!==p||E!==m)&&(e.blendFunc(v,E),l=v,d=E,p=v,m=E)},blendFuncSeparate:(v,E,k,W)=>{(v!==l||E!==d||k!==p||W!==m)&&(e.blendFuncSeparate(v,E,k,W),l=v,d=E,p=k,m=W)},blendEquation:v=>{(v!==g||v!==S)&&(e.blendEquation(v),g=v,S=v)},blendEquationSeparate:(v,E)=>{(v!==g||E!==S)&&(e.blendEquationSeparate(v,E),g=v,S=E)},blendColor:(v,E,k,W)=>{(v!==h[0]||E!==h[1]||k!==h[2]||W!==h[3])&&(e.blendColor(v,E,k,W),h[0]=v,h[1]=E,h[2]=k,h[3]=W)},stencilFunc:(v,E,k)=>{(v!==y||E!==T||k!==C||v!==I||E!==V||k!==B)&&(e.stencilFunc(v,E,k),y=v,T=E,C=k,I=v,V=E,B=k)},stencilFuncSeparate:(v,E,k,W)=>{v===e.FRONT?(E!==y||k!==T||W!==C)&&(e.stencilFuncSeparate(v,E,k,W),y=E,T=k,C=W):v===e.BACK?(E!==I||k!==V||W!==B)&&(e.stencilFuncSeparate(v,E,k,W),I=E,V=k,B=W):v===e.FRONT_AND_BACK&&(E!==y||k!==T||W!==C||E!==I||k!==V||W!==B)&&(e.stencilFuncSeparate(v,E,k,W),y=E,T=k,C=W,I=E,V=k,B=W)},stencilMask:v=>{(v!==H||v!==J)&&(e.stencilMask(v),H=v,J=v)},stencilMaskSeparate:(v,E)=>{v===e.FRONT?E!==H&&(e.stencilMaskSeparate(v,E),H=E):v===e.BACK?E!==J&&(e.stencilMaskSeparate(v,E),J=E):v===e.FRONT_AND_BACK&&(E!==H||E!==J)&&(e.stencilMaskSeparate(v,E),H=E,J=E)},stencilOp:(v,E,k)=>{(v!==oe||E!==O||k!==pe||v!==w||E!==D||k!==b)&&(e.stencilOp(v,E,k),oe=v,O=E,pe=k,w=v,D=E,b=k)},stencilOpSeparate:(v,E,k,W)=>{v===e.FRONT?(E!==oe||k!==O||W!==pe)&&(e.stencilOpSeparate(v,E,k,W),oe=E,O=k,pe=W):v===e.BACK?(E!==w||k!==D||W!==b)&&(e.stencilOpSeparate(v,E,k,W),w=E,D=k,b=W):v===e.FRONT_AND_BACK&&(E!==oe||k!==O||W!==pe||E!==w||k!==D||W!==b)&&(e.stencilOpSeparate(v,E,k,W),oe=E,O=k,pe=W,w=E,D=k,b=W)},clearStencil:v=>{v!==$&&(e.clearStencil(v),$=v)},enableVertexAttrib:v=>{e.enableVertexAttribArray(v),ae[v]=1},clearVertexAttribsState:Re,disableUnusedVertexAttribs:()=>{for(let v=0;v<X;++v)ae[v]===0&&e.disableVertexAttribArray(v)},bindUniformBufferRange:A(e)?(v,E,k,W,ut)=>{(ee[v]!==E||_[v]!==W)&&(e.bindBufferRange(e.UNIFORM_BUFFER,v,k,W,ut),ee[v]=E,_[v]=W)}:()=>{throw new Error("WebGL2 is required for uniform buffers")},viewport:(v,E,k,W)=>{(v!==M[0]||E!==M[1]||k!==M[2]||W!==M[3])&&(e.viewport(v,E,k,W),M[0]=v,M[1]=E,M[2]=k,M[3]=W)},scissor:(v,E,k,W)=>{(v!==G[0]||E!==G[1]||k!==G[2]||W!==G[3])&&(e.scissor(v,E,k,W),G[0]=v,G[1]=E,G[2]=k,G[3]=W)},clipControl:t.clipControl?(v,E)=>{(v!==Y||E!==se)&&(t.clipControl.clipControl(v,E),Y=v,se=E)}:void 0}}function dh(e,t=0){return{value:e,usageCount:t}}function ph(e){return{free:()=>{e.usageCount-=1},value:e.value}}function Po(e,t,r){let n=new Map,o=[];return{get:i=>{let a=e(i),s=n.get(a);return s||(s=dh(t(i)),n.set(a,s),o.push(s.value)),s.usageCount+=1,ph(s)},clear:()=>{n.forEach((i,a)=>{i.usageCount<=0&&(i.usageCount<0&&console.warn("Reference usageCount below zero."),r(i.value),n.delete(a),Bn(o,i.value))})},get count(){return n.size},values:o,dispose:()=>{n.forEach(i=>r(i.value)),n.clear(),o.length=0}}}var fh=De();function mh(e,t){switch(t){case"depth16":return e.DEPTH_COMPONENT16;case"stencil8":return e.STENCIL_INDEX8;case"rgba4":return e.RGBA4;case"depth-stencil":return e.DEPTH_STENCIL;case"depth24":if(A(e))return e.DEPTH_COMPONENT24;throw new Error("WebGL2 needed for `depth24` renderbuffer format");case"depth32f":if(A(e))return e.DEPTH_COMPONENT32F;throw new Error("WebGL2 needed for `depth32f` renderbuffer format");case"depth24-stencil8":if(A(e))return e.DEPTH24_STENCIL8;throw new Error("WebGL2 needed for `depth24-stencil8` renderbuffer format");case"depth32f-stencil8":if(A(e))return e.DEPTH32F_STENCIL8;throw new Error("WebGL2 needed for `depth32f-stencil8` renderbuffer format")}}function hh(e){switch(e){case"depth16":return 4;case"stencil8":return 2;case"rgba4":return 4;case"depth-stencil":return 4;case"depth24":return 3;case"depth32f":return 4;case"depth24-stencil8":return 4;case"depth32f-stencil8":return 5}}function gh(e,t){switch(t){case"depth":return e.DEPTH_ATTACHMENT;case"stencil":return e.STENCIL_ATTACHMENT;case"depth-stencil":return e.DEPTH_STENCIL_ATTACHMENT;case"color0":return e.COLOR_ATTACHMENT0}}function yh(e){let t=e.createRenderbuffer();if(t===null)throw new Error("Could not create WebGL renderbuffer");return t}function bh(e,t){if(A(e))return t;switch(t){case"depth24":case"depth32f":return"depth16";case"depth24-stencil8":case"depth32f-stencil8":return"depth-stencil"}return t}function cd(e,t,r,n,o,i){let a=yh(e);t=bh(e,t);let s=()=>e.bindRenderbuffer(e.RENDERBUFFER,a),c=mh(e,t),u=gh(e,r);function l(){s(),e.renderbufferStorage(e.RENDERBUFFER,c,n,o)}l();let d=!1;return{id:fh(),getByteCount:()=>hh(t)*n*o,bind:s,attachFramebuffer:p=>{Ae(i),p.bind(),s(),e.framebufferRenderbuffer(e.FRAMEBUFFER,u,e.RENDERBUFFER,a),bo(p,()=>o),j&&Wr(e)},detachFramebuffer:p=>{Ae(i),p.bind(),s(),e.framebufferRenderbuffer(e.FRAMEBUFFER,u,e.RENDERBUFFER,null),j&&Wr(e)},setSize:(p,m)=>{n=p,o=m,l()},destroy:()=>{d||(e.deleteRenderbuffer(a),d=!0)}}}var xh=64;function ud(){let e=new Map,t=new ln,r=[],n=0,o=[],i=()=>{let a=r;r=[];for(let s of a)s()};return{track:(a,s)=>{e.set(a,s),n+=1,o.push(s),o.length>xh&&o.shift();let c=()=>{e.delete(a)&&(t.next(),e.size===0&&i())};return a.then(c,u=>{e.has(a)&&console.error(`'${s}' failed`,u),c()}),a},isReady:()=>e.size===0,get trackedCount(){return n},trackedSince:a=>o.slice(Math.max(0,o.length-(n-a))),whenReady:()=>e.size===0?Promise.resolve():new Promise(a=>r.push(a)),settled:t,clear:()=>{e.clear(),i()}}}var vh=De();function Sh(e){let{vertexArrayObject:t}=e;if(!t)throw new Error("VertexArrayObject not supported");let r=t.createVertexArray();if(!r)throw new Error("Could not create WebGL vertex array");return r}function Th(e){let{vertexArrayObject:t}=e;if(t===null)throw new Error("VertexArrayObject not supported");return t}function ld(e,t,r,n,o,i){let a=vh(),s=Sh(r),c=Th(r);function u(){c.bindVertexArray(s),i&&i.bind(),Co(t,n,o),c.bindVertexArray(null),l=!0}let l=!1,d=!1;return{id:a,bind:()=>{l||u(),c.bindVertexArray(s)},update:u,destroy:()=>{d||(i&&(c.bindVertexArray(s),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),c.deleteVertexArray(s),d=!0)}}}var Ch=De(),dd=De(),Rh=64*1024;function Ph(e){return Math.pow(2,Math.ceil(Math.log2(e)))}function pd(e,t){let r=e.getParameter(e.UNIFORM_BUFFER_OFFSET_ALIGNMENT),n=new Set,o=new Map;function i(c){let u=e.createBuffer();if(u===null)throw new Error("Could not create WebGL buffer");return e.bindBuffer(e.UNIFORM_BUFFER,u),e.bufferData(e.UNIFORM_BUFFER,c,e.DYNAMIC_DRAW),u}function a(c){let u={id:Ch(),data:new ArrayBuffer(c),buffer:i(c),dirtyStart:c,dirtyEnd:0};return n.add(u),u}function s(c,u,l){u<c.dirtyStart&&(c.dirtyStart=u),l>c.dirtyEnd&&(c.dirtyEnd=l)}return{alignment:r,allocate:c=>{let u=Sr(Ph(Math.max(c,r)),r),l=o.get(u);if(l===void 0&&(l=[],o.set(u,l)),l.length===0){let p=a(Math.max(Rh,u));for(let m=p.data.byteLength-u;m>=0;m-=u)l.push({slab:p,offset:m,size:u})}let d=l.pop();return new Uint8Array(d.slab.data,d.offset,u).fill(0),s(d.slab,d.offset,d.offset+u),d},free:c=>{o.get(c.size).push(c)},createSlab:a,releaseSlab:c=>{e.deleteBuffer(c.buffer),n.delete(c)},markDirty:s,flush:c=>{c.dirtyEnd<=c.dirtyStart||(e.bindBuffer(e.UNIFORM_BUFFER,c.buffer),e.bufferSubData(e.UNIFORM_BUFFER,c.dirtyStart,new Uint8Array(c.data),c.dirtyStart,c.dirtyEnd-c.dirtyStart),c.dirtyStart=c.data.byteLength,c.dirtyEnd=0)},bind:(c,u,l,d)=>{t.bindUniformBufferRange(c,u.id,u.buffer,l,d)},getByteCount:()=>{let c=0;return n.forEach(u=>c+=u.data.byteLength),c},destroy:()=>{n.forEach(c=>e.deleteBuffer(c.buffer)),n.clear(),o.clear()}}}function fd(e,t){let r=dd(),{size:n}=t,{bindingIndex:o}=dr[t.block],i=e.allocate(n),{slab:a,offset:s}=i,c=na(a.data,s,n),u=()=>e.markDirty(a,s,s+n),l=!1;return{id:r,getByteCount:()=>n,createWriter:d=>oa(t,c,d,u),sync:()=>e.flush(a),bind:()=>e.bind(o,a,s,i.size),destroy:()=>{l||(e.free(i),l=!0)}}}function md(e,t,r=64){let n=dd(),{size:o}=t,{bindingIndex:i}=dr[t.block],a=Sr(o,e.alignment),s=e.createSlab(a*r),c=new Uint8Array(s.data),u=new ArrayBuffer(o),l=new Uint8Array(u),d=na(u,0,o),p=!0,m=-1,h=!1;function g(){if(!p)return;m=(m+1)%r;let S=m*a;c.set(l,S),e.markDirty(s,S,S+o),e.flush(s),p=!1}return{id:n,getByteCount:()=>o,createWriter:S=>oa(t,d,S,()=>{p=!0}),sync:g,bind:()=>{m===-1&&g(),e.bind(i,s,m*a,a)},destroy:()=>{h||(e.releaseSlab(s),h=!0)}}}function Dh(e){let{kind:t,format:r,dataType:n,filter:o,dimension:i,sampleType:a}=e,s=typeof i=="string"?i:i.define;return`${t}|${r}|${n}|${o}|${s}|${a}`}function hd(e){let t=new WeakMap,r=0;function n(i,a){i.texture.load(a),i.uploaded=a.version}function o(i,a){let s=a.version;(s===void 0||s!==i.uploaded)&&n(i,a)}return{acquire:(i,a)=>{let s=Dh(i),c=t.get(a);c||t.set(a,c=new Map);let u=c.get(s);if(u)o(u,a);else{u={texture:e(i),uploaded:void 0,holders:0};try{n(u,a)}catch(p){throw u.texture.destroy(),p}c.set(s,u),r+=1}u.holders+=1;let l=u,d=!1;return{texture:l.texture,image:a,sync:()=>{d||o(l,a)},getByteCount:()=>d?0:l.texture.getByteCount()/l.holders,release:()=>{d||(d=!0,l.holders-=1,!(l.holders>0)&&(l.texture.destroy(),c.delete(s),c.size===0&&t.delete(a),r-=1))}}},get count(){return r}}}function pa(e,t,r,n){if(n===t.image)return t.sync(),t;let o=e.acquire(r,n);return t.release(),o}function _h(e){return typeof e=="boolean"?e?1:0:typeof e=="number"?e*1e4:cn(e)}function fa(e){return{...e.value,destroy:()=>{e.free()}}}function gd(e,t,r,n,o,i,a=()=>!1){let s={attribute:new Set,elements:new Set,pixelPack:new Set,uniform:new Set,framebuffer:new Set,program:new Set,renderbuffer:new Set,shader:new Set,texture:new Set,cubeTexture:new Set,vertexArray:new Set,storageBuffer:new Set,kernel:new Set};function c(b,D){return s[b].add(D),r.resourceCounts[b]+=1,{...D,destroy:()=>{s[b].has(D)&&(a()||D.destroy(),s[b].delete(D),r.resourceCounts[b]-=1)}}}let u=Po(b=>JSON.stringify(b),b=>c("shader",Cl(e,b)),b=>{b.destroy()});function l(b,D){return fa(u.get({type:b,source:D}))}let d=new WeakSet,p=new Set,m=ud(),h=new Set,g;function S(){for(let b of h)b.isCompiled()&&h.delete(b);h.size>0?setTimeout(S,4):(g?.(),g=void 0)}function y(b){!n.parallelShaderCompile||b.isCompiled()||(h.add(b),!g&&(m.track(new Promise(D=>g=D),"programs"),setTimeout(S,0)))}function C(){h.clear(),g?.(),g=void 0}let T=new WeakMap;function I(b,D){let $=T.get(b);$||T.set(b,$=new Map);let X=Is(D),ae=X.join(" "),ee=$.get(ae);if(!ee){let _=go(b,A(e),Un(X),i);ee=[cn(_.vert),cn(_.frag)],$.set(ae,ee)}return ee}let B=Po(b=>{let D=[b.shaderCode.id],$=b.defineValues.dRenderVariant?.ref.value||"";Object.keys(b.defineValues).forEach(ee=>{b.shaderCode.ignoreDefine?.(ee,$,b.defineValues)||D.push(cn(ee),_h(b.defineValues[ee].ref.value))});let[X,ae]=I(b.schema,b.defineValues);return D.push(X,ae),ls(D).toString()},b=>{let D=Tl(e,t,n,o,l,b,i);return D.variant!=="compute"&&p.add(D),c("program",D)},b=>{p.delete(b),b.destroy()}),V;function H(){if(!A(e))throw new Error("WebGL2 is required for uniform buffers");return V||(V=pd(e,t)),V}function J(b){return c("uniform",fd(H(),b))}let oe=Po(b=>`${b.materialId}|${b.layout.hash}`,b=>J(b.layout),b=>{b.destroy()}),pe={maxTextureSize:o.maxTextureSize,max3dTextureSize:o.max3dTextureSize,maxRenderbufferSize:o.maxRenderbufferSize,maxDrawBuffers:o.maxDrawBuffers,maxTextureImageUnits:o.maxTextureImageUnits};function O(b,D,$,X){let ae=ca(c("texture",sl(e,n,b,D,$,X,t)));return d.add(ae),ae}let w=hd(b=>O(b.kind,b.format,b.dataType,b.filter));return{limits:pe,attribute:(b,D,$,X)=>c("attribute",fl(e,t,n,b,D,$,X)),elements:(b,D)=>c("elements",hl(e,b,D)),pixelPack:(b,D)=>{if(!A(e))throw new Error("WebGL2 is required for pixel-pack buffers");return c("pixelPack",gl(e,n,b,D))},uniformBuffer:J,uniformRingBuffer:b=>c("uniform",md(H(),b)),materialUniformBuffer:(b,D)=>b===-1?J(D):fa(oe.get({materialId:b,layout:D})),framebuffer:()=>c("framebuffer",el(e,n,t)),program:(b,D,$)=>fa(B.get({defineValues:b,shaderCode:D,schema:$})),renderbuffer:(b,D,$,X)=>c("renderbuffer",cd(e,b,D,$,X,t)),shader:l,texture:O,sharedTextures:w,ownsTexture:b=>d.has(b),cubeTexture:(b,D,$)=>{let X;m.track(new Promise(ee=>X=ee),"cube texture");let ae=cl(e,b,D,ee=>{$?.(ee),X?.(),X=void 0});return ca(c("cubeTexture",ae))},vertexArray:(b,D,$)=>c("vertexArray",ld(e,t,n,b,D,$)),getByteCounts:()=>{let b=0;s.texture.forEach(M=>{b+=M.getByteCount()});let D=0;s.cubeTexture.forEach(M=>{D+=M.getByteCount()});let $=0;s.attribute.forEach(M=>{$+=M.getByteCount()});let X=0;s.elements.forEach(M=>{X+=M.getByteCount()});let ae=0;s.pixelPack.forEach(M=>{ae+=M.getByteCount()});let ee=V?.getByteCount()??0,_=0;return s.renderbuffer.forEach(M=>{_+=M.getByteCount()}),{texture:b,cubeTexture:D,attribute:$,elements:X,pixelPack:ae,uniform:ee,renderbuffer:_,storageBuffer:0}},pending:m,loadImage:(b,D,$,X="image")=>{let ae=ks(D).then(ee=>{b.load(ee),$&&F.update($,b)});return m.track(ae,X)},linkPrograms:b=>{for(let D of p)b&&!b.includes(D.variant)||(D.link(),y(D))},preparePipelines:b=>{for(let{item:D,variant:$}of b){let X=D.getProgram($);X.link(),y(X)}return m.whenReady()},finalizePrograms:(b,D)=>{let $=!0,X=0;for(let M of p)M.isReady()&&p.delete(M),(!b||b.includes(M.variant))&&($=!1,X+=1);if($)return!0;let ae=!0,ee=0,_=gt();for(let M of p)if(!(b&&!b.includes(M.variant))&&(M.finalize(D)?(p.delete(M),ee+=1):ae=!1,!D&&gt()-_>16)){ae=!1;break}return ue&&console.log(`Finalized ${ee} of ${X} programs (${b?b.join(", "):"all"}) in ${(gt()-_).toFixed(2)} ms`),ae},destroy:()=>{C(),m.clear(),s.attribute.forEach(b=>b.destroy()),s.elements.forEach(b=>b.destroy()),s.pixelPack.forEach(b=>b.destroy()),s.uniform.forEach(b=>b.destroy()),s.framebuffer.forEach(b=>b.destroy()),s.renderbuffer.forEach(b=>b.destroy()),s.shader.forEach(b=>b.destroy()),s.program.forEach(b=>b.destroy()),s.vertexArray.forEach(b=>b.destroy()),s.texture.forEach(b=>b.destroy()),s.cubeTexture.forEach(b=>b.destroy()),u.clear(),B.clear(),oe.clear(),V?.destroy(),p.clear()}}}var Eh=De();function yd(e,t,r,n="depth",o="uint8",i="nearest",a="rgba"){let s=e.framebuffer(),c=o==="fp16"?e.texture("image-float16",a,"fp16",i):o==="float32"?e.texture("image-float32",a,"float",i):e.texture("image-uint8",a,"ubyte",i),u=n==="none"?null:n==="depth-stencil"?e.renderbuffer("depth32f-stencil8","depth-stencil",t,r):e.renderbuffer("depth32f","depth",t,r);function l(){c.define(t,r),c.attachFramebuffer(s,"color0"),u&&u.attachFramebuffer(s)}l();let d=!1;return{id:Eh(),texture:c,framebuffer:s,depthRenderbuffer:u,getByteCount:()=>c.getByteCount()+(u?u.getByteCount():0),getWidth:()=>t,getHeight:()=>r,bind:()=>{s.bind()},setSize:(p,m)=>{t===p&&r===m||(t=p,r=m,c.define(t,r),u&&u.setSize(t,r))},destroy:()=>{d||(c.destroy(),s.destroy(),u&&u.destroy(),d=!0)}}}function bd(e,t,r,n,o="depth",i="uint8",a="nearest",s="rgba"){return s==="r"&&!A(e)&&(s="rgba"),yd(t,r,n,o,i,a,s)}function Ah(e,t){let r=t.disjointTimerQuery;if(!r)return;let n=new Map,o=0,i=-1;return{begin:()=>{let a=r.createQuery();if(!a)return-1;r.beginQuery(r.TIME_ELAPSED,a);let s=o++;return n.set(s,a),i=s,s},end:()=>{i!==-1&&(r.endQuery(r.TIME_ELAPSED),i=-1)},poll:()=>{let a=[];return n.forEach((s,c)=>{if(c===i)return;let u=r.getQueryParameter(s,r.QUERY_RESULT_AVAILABLE),l=e.getParameter(r.GPU_DISJOINT);u&&!l?a.push([c,r.getQueryParameter(s,r.QUERY_RESULT)]):l&&a.push([c,void 0]),(u||l)&&(r.deleteQuery(s),n.delete(c))}),a},clear:()=>{i!==-1&&r.endQuery(r.TIME_ELAPSED),i=-1,n.forEach(a=>r.deleteQuery(a)),n.clear()}}}function xd(e,t,r,n){return Js(Ah(e,t),r,n)}function vd(e,t){if(!j)return;let{capabilities:r}=e;console.log({graphics:{backend:r.backend,capabilities:r,limits:e.resources.limits},[r.backend]:t})}var Sd=new WeakSet;function wh(e){return Sd.has(e)}function Td(e){if(!wh(e))throw new Error("expected WebGL global bindings, got global bindings of another backend");return e}function Cd(e,t,r,n){let{state:o,resources:i}=e;r=r.map(([d,p])=>[d,As(t,d,p,e.depthRangeConversion)]);let a=e.uniformBlocks?Et("global",t):void 0,s;if(a){let d=i.uniformRingBuffer(a);s={buffer:d,write:d.createWriter(r)}}let c=s?r.filter(([d])=>{let p=t[d];return!(p?.type==="uniform"&&p.block==="global")}):r,u=!0,l={textures:n,invalidate:()=>{u=!0,o.currentRenderItemId=-1},apply:d=>{o.currentProgramId!==d.id&&(u=!0,d.use()),u&&(s&&(s.write(),s.buffer.sync(),s.buffer.bind()),d.setUniforms(c),d.bindTextures(n),u=!1)},destroy:()=>{s?.write.dispose(),s?.buffer.destroy()}};return Sd.add(l),l}function Rd(e,t){let r=A(e),n=t;return{backend:r?"webgl2":"webgl",texture3d:r,flatInterpolation:r,integerTextures:r,mixedAttachmentFormats:r,floatTextureLinear:!!n.textureFloatLinear,halfFloatTexture:!!n.textureHalfFloat,halfFloatTextureLinear:!!n.textureHalfFloat&&!!n.textureHalfFloatLinear,floatRenderTarget:!!n.colorBufferFloat,floatBlend:!!n.colorBufferFloat&&!!n.floatBlend,halfFloatRenderTarget:!!n.textureHalfFloat&&!!n.colorBufferHalfFloat,depthTexture:!!n.depthTexture,fragDepth:!!n.fragDepth,multipleRenderTargets:!!n.drawBuffers,textureLod:!!n.shaderTextureLod,multiDraw:!!n.multiDraw,clipControl:!!n.clipControl,depthClamp:!!n.depthClamp,compute:!1}}function Pd(){return{resourceCounts:{attribute:0,elements:0,pixelPack:0,uniform:0,framebuffer:0,program:0,renderbuffer:0,shader:0,texture:0,cubeTexture:0,vertexArray:0,storageBuffer:0,kernel:0},skippedDraws:0,drawCount:0,instanceCount:0,instancedDrawCount:0,calls:{drawInstanced:0,drawInstancedBase:0,multiDrawInstancedBase:0,counts:0},culled:{lod:0,frustum:0,occlusion:0},cacheHits:{cull:0}}}var Lh={color:"",pick:"",depth:"",marking:"",emissive:"",tracing:""},Dd=Object.keys(Lh),Ih={compute:""},_d=Object.keys(Ih);var Ed=new WeakMap;function Ad(e,t){Ed.set(e,t)}function Do(e){let t=Ed.get(e);if(!t)throw new Error("not a WebGL context");return t()}function tr(e,t,r,n,o){e.setViewport(t,Do(e)-r-o,n,o)}function Tr(e,t,r,n,o){e.setScissor(t,Do(e)-r-o,n,o)}var Oh=3e7,Fh=De();function Bh(e,t){let{gl:r}=e;switch(t){case"points":return r.POINTS;case"lines":return r.LINES;case"line-strip":return r.LINE_STRIP;case"line-loop":return r.LINE_LOOP;case"triangles":return r.TRIANGLES;case"triangle-strip":return r.TRIANGLE_STRIP;case"triangle-fan":return r.TRIANGLE_FAN}}function _o(e,t,r,n,o){return r={...r,dRenderVariant:F.create(t)},o.dRenderVariant===void 0&&Object.defineProperty(o,"dRenderVariant",{value:Fe("string")}),e.resources.program(r,n,o)}function Mh(){return{attributes:!1,defines:!1,elements:!1,textures:!1}}function Vh(e){e.attributes=!1,e.defines=!1,e.elements=!1,e.textures=!1}function Eo(e,t){if(e==="color")switch(t){case"blended":return"colorBlended";case"wboit":return"colorWboit";case"dpoit":return"colorDpoit"}return e}var kh=De();function Id(e,t,r,n,o){let i=new Map,a=s=>{let c=i.get(s);return c||(c=_o(e,Eo(s,o),n,t,r),i.set(s,c)),c};return{id:kh(),getProgram:a,destroy:()=>{for(let s of i.values())s.destroy();i.clear()}}}function Od(e,t,r,n,o,i,a){return Bd(e,t,r,n,o,i,Dd,a)}function Fd(e,t,r,n,o,i=-1){return Bd(e,t,r,n,o,i,_d,void 0)}var wd=2**24,Ld=new WeakMap;function Gh(e){let t=Ld.get(e);if(t)return t;let r;for(let o of Object.keys(e)){let i=e[o];i.type!=="uniform"||!i.loopBound||(r??={...e},r[o]=Fe("number"))}let n=r??e;return Ld.set(e,n),n}function Bd(e,t,r,n,o,i,a,s){let c=Fh(),{stats:u,state:l,resources:d}=e;e.isWebGL2||(n=Gh(n));let{instancedArrays:p,vertexArrayObject:m,multiDrawInstancedBaseVertexBaseInstance:h,drawInstancedBaseVertexBaseInstance:g}=e.extensions;a=a.filter(L=>L==="tracing"?!!e.extensions.drawBuffers:!0);let S=Mu(e.extensions),y=n.aVertex?.type==="attribute"&&Qt(n.aVertex,S),C=()=>n.elements?o.uVertexCount.ref.value:Math.max(o.uVertexCount.ref.value,o.drawCount.ref.value),T=L=>{o.aVertex.ref.value.length>=L||(L>wd&&console.warn(`${L} vertices with an emulated vertex id (WebGL1): ids above ${wd} are not exact`),F.update(o.aVertex,us(new Float32Array(L))))};y&&T(C());let{attributeValues:I,defineValues:B,textureValues:V,materialTextureValues:H,uniformValues:J,materialUniformValues:oe,bufferedUniformValues:pe}=ws(n,o,{depthRange:e.depthRangeConversion,targetHeight:()=>Do(e)}),O=e.uniformBlocks,w=L=>{let{block:Q}=n[L];return!O||Q==="draw"?void 0:Q},b=[],D=[];for(let L of Object.entries(J)){let Q=w(L[0]);if(Q===void 0)b.push(L);else if(Q==="object")D.push(L);else throw new Error(`uniform '${L[0]}' of block '${Q}' cannot be set by a render item`)}let $=[],X=[];for(let L of Object.entries(oe))w(L[0])==="material"?X.push(L):$.push(L);let ae=Object.entries(pe),ee=Object.entries(Wu(pe)),_=[];for(let L of ee)w(L[0])==="object"?D.push(L):_.push(L);let M=Object.entries(B),G,Y=O?Et("object",n):void 0;if(Y){let L=d.uniformBuffer(Y);G={buffer:L,write:L.createWriter(D)},G.write()}let se,Re=O?Et("material",n):void 0;if(Re){let L=d.materialUniformBuffer(i,Re);se={buffer:L,write:L.createWriter(X)},se.write()}let v=Ls(o),E=Bh(e,t),k={};for(let L of a)k[L]=_o(e,Eo(L,s),B,r,n);let W=new Map,ut=ua(e,n,V,W),Vt=ua(e,n,H,W),Ya=(L,Q)=>W.get(L)?.getByteCount()??Q.getByteCount(),Lt=ml(e,n,I,S),wn=[];for(let L=0,Q=Lt.length;L<Q;++L){let ne=Lt[L];ne[1].divisor===1&&wn.push(ne)}let xe,wi=o.elements;wi&&wi.ref.value&&(xe=d.elements(wi.ref.value));let Qa=jr(n),yr=m?d.vertexArray(Qa,Lt,xe):null,ht=o.drawCount.ref.value,lt=o.instanceCount.ref.value;u.drawCount+=ht,u.instanceCount+=lt,u.instancedDrawCount+=lt*ht;let It=Mh(),Ja=!1,Ln=-1;return{id:c,materialId:i,getByteCount(){let L=0;for(let Q=0,ne=Lt.length;Q<ne;++Q)L+=Lt[Q][1].getByteCount();xe&&(L+=xe.getByteCount()),G&&(L+=G.buffer.getByteCount());for(let Q=0,ne=ut.length;Q<ne;++Q)L+=Ya(ut[Q][0],ut[Q][1]);for(let Q=0,ne=Vt.length;Q<ne;++Q)L+=Ya(Vt[Q][0],Vt[Q][1]);return L},getProgram:L=>k[L],getLinearTextures:()=>{let L=[];for(let Q of[ut,Vt])for(let[ne,re]of Q)re.filter===e.gl.LINEAR&&L.push(ne);return L},setTransparency:L=>{if(L!==s){s=L;for(let Q of a)k[Q].destroy(),k[Q]=_o(e,Eo(Q,s),B,r,n)}},render:(L,Q,ne)=>{if(ht===0||lt===0)return;yo(l,"draw");let re=k[L];if(Q&&Td(Q).apply(re),re.id===Ln&&l.currentRenderItemId===c?(re.setUniforms(b),G&&(G.write(),G.buffer.sync(),G.buffer.bind()),re.bindTextures(ut)):((re.id!==l.currentProgramId||re.id!==Ln||i===-1||i!==l.currentMaterialId)&&(re.id!==l.currentProgramId&&re.use(),re.setUniforms($),se&&(se.write(),se.buffer.sync(),se.buffer.bind()),re.bindTextures(Vt),l.currentMaterialId=i,Ln=re.id),re.setUniforms(b),re.setUniforms(_),G&&(G.write(),G.buffer.sync(),G.buffer.bind()),re.bindTextures(ut),yr?(yr.bind(),xe&&xe.bind()):(xe&&xe.bind(),re.bindAttributes(Lt)),l.currentRenderItemId=c),j&&e.checkFramebufferStatus(`Framebuffer error rendering item id ${c}`),ne){for(let U of ne)if(U.count!==0){if(re.setUniforms(U.uniforms),h)xe?h.multiDrawElementsInstancedBaseVertexBaseInstance(E,U.counts,0,xe._dataType,U.offsets,0,U.instanceCounts,0,U.baseVertices,0,U.baseInstances,0,U.count):h.multiDrawArraysInstancedBaseInstance(E,U.firsts,0,U.counts,0,U.instanceCounts,0,U.baseInstances,0,U.count);else if(g)if(xe)for(let q=0;q<U.count;++q)U.counts[q]>0&&(re.uniform("uDrawId",q),g.drawElementsInstancedBaseVertexBaseInstance(E,U.counts[q],xe._dataType,U.offsets[q],U.instanceCounts[q],U.baseVertices[q],U.baseInstances[q]));else for(let q=0;q<U.count;++q)U.counts[q]>0&&(re.uniform("uDrawId",q),g.drawArraysInstancedBaseInstance(E,U.firsts[q],U.counts[q],U.instanceCounts[q],U.baseInstances[q]));else if(xe)for(let q=0;q<U.count;++q)U.counts[q]>0&&(re.uniform("uDrawId",q),re.offsetAttributes(wn,U.baseInstances[q]),p.drawElementsInstanced(E,U.counts[q],xe._dataType,U.offsets[q],U.instanceCounts[q]));else for(let q=0;q<U.count;++q)U.counts[q]>0&&(re.uniform("uDrawId",q),re.offsetAttributes(wn,U.baseInstances[q]),p.drawArraysInstanced(E,U.firsts[q],U.counts[q],U.instanceCounts[q]));if(ue){h?u.calls.multiDrawInstancedBase+=1:g?u.calls.drawInstancedBase+=U.count:u.calls.drawInstanced+=U.count;for(let q=0;q<U.count;++q)u.calls.counts+=U.instanceCounts[q]}}!h&&!g&&re.offsetAttributes(wn,0)}else{let U=0;for(;;){let q=Math.min(ht-U,Oh);if(xe?p.drawElementsInstanced(E,q,xe._dataType,U*xe._bpe,lt):p.drawArraysInstanced(E,U,q,lt),U+=q,U>=ht)break}ue&&(u.calls.drawInstanced+=1,u.calls.counts+=lt)}j&&e.checkError(`Draw error rendering item id ${c}`)},update:()=>{Vh(It),Ln=-1,y&&T(C());for(let L=0,Q=M.length;L<Q;++L){let[ne,re]=M[L];re.ref.version!==v[ne]&&(It.defines=!0,v[ne]=re.ref.version)}if(It.defines)for(let L of a)k[L].destroy(),k[L]=_o(e,Eo(L,s),B,r,n);o.drawCount.ref.version!==v.drawCount&&(u.drawCount+=o.drawCount.ref.value-ht,u.instancedDrawCount+=lt*o.drawCount.ref.value-lt*ht,ht=o.drawCount.ref.value,v.drawCount=o.drawCount.ref.version),o.instanceCount.ref.version!==v.instanceCount&&(u.instanceCount+=o.instanceCount.ref.value-lt,u.instancedDrawCount+=o.instanceCount.ref.value*ht-lt*ht,lt=o.instanceCount.ref.value,v.instanceCount=o.instanceCount.ref.version);for(let L=0,Q=Lt.length;L<Q;++L){let[ne,re]=Lt[L],U=I[ne];if(U.ref.version!==v[ne]){if(re.length>=U.ref.value.length)re.updateSubData(U.ref.value,0,re.length);else{re.destroy();let{itemSize:q,divisor:qt}=n[ne];Lt[L][1]=d.attribute(U.ref.value,q,qt),It.attributes=!0}v[ne]=U.ref.version}}xe&&o.elements.ref.version!==v.elements&&(xe.length>=o.elements.ref.value.length?xe.updateSubData(o.elements.ref.value,0,xe.length):(xe.destroy(),xe=d.elements(o.elements.ref.value),It.elements=!0),v.elements=o.elements.ref.version),(It.attributes||It.elements)&&(yr&&yr.destroy(),yr=m?d.vertexArray(Qa,Lt,xe):null);for(let L=0,Q=ut.length;L<Q;++L){let[ne,re]=ut[L],U=V[ne];if(U.ref.version!==v[ne]){let q=W.get(ne);if(q){let qt=pa(d.sharedTextures,q,n[ne],U.ref.value);qt!==q&&(W.set(ne,qt),ut[L][1]=qt.texture),It.textures=!0}else n[ne].kind!=="texture"?(re.load(U.ref.value),It.textures=!0):ut[L][1]=U.ref.value;v[ne]=U.ref.version}}for(let L=0,Q=Vt.length;L<Q;++L){let[ne,re]=Vt[L],U=H[ne];if(U.ref.version!==v[ne]){let q=W.get(ne);if(q){let qt=pa(d.sharedTextures,q,n[ne],U.ref.value);qt!==q&&(W.set(ne,qt),Vt[L][1]=qt.texture),It.textures=!0}else n[ne].kind!=="texture"?(re.load(U.ref.value),It.textures=!0):Vt[L][1]=U.ref.value;v[ne]=U.ref.version}}for(let L=0,Q=ae.length;L<Q;++L){let[ne,re]=ae[L];re.ref.version!==v[ne]&&(F.update(ee[L][1],Fn(re.ref.value)),v[ne]=re.ref.version)}},destroy:()=>{if(!Ja){for(let L of a)k[L].destroy();yr&&yr.destroy();for(let L of[ut,Vt])for(let[Q,ne]of L){let re=W.get(Q);re?re.release():n[Q].kind!=="texture"&&ne.destroy()}W.clear(),Lt.forEach(([L,Q])=>Q.destroy()),xe&&xe.destroy(),G&&(G.write.dispose(),G.buffer.destroy()),se&&(se.write.dispose(),se.buffer.destroy()),u.drawCount-=ht,u.instanceCount-=lt,u.instancedDrawCount-=lt*ht,Ja=!0}}}}function Ao(e,t){switch(t){case"zero":return e.ZERO;case"one":return e.ONE;case"src":return e.SRC_COLOR;case"one-minus-src":return e.ONE_MINUS_SRC_COLOR;case"src-alpha":return e.SRC_ALPHA;case"one-minus-src-alpha":return e.ONE_MINUS_SRC_ALPHA;case"dst":return e.DST_COLOR;case"one-minus-dst":return e.ONE_MINUS_DST_COLOR;case"dst-alpha":return e.DST_ALPHA;case"one-minus-dst-alpha":return e.ONE_MINUS_DST_ALPHA;case"constant":return e.CONSTANT_COLOR;case"one-minus-constant":return e.ONE_MINUS_CONSTANT_COLOR}}function Md(e,t,r){switch(r){case"add":return e.FUNC_ADD;case"subtract":return e.FUNC_SUBTRACT;case"reverse-subtract":return e.FUNC_REVERSE_SUBTRACT;case"min":return t.blendMinMax.MIN;case"max":return t.blendMinMax.MAX}}function ma(e,t){switch(t){case"never":return e.NEVER;case"less":return e.LESS;case"equal":return e.EQUAL;case"less-equal":return e.LEQUAL;case"greater":return e.GREATER;case"not-equal":return e.NOTEQUAL;case"greater-equal":return e.GEQUAL;case"always":return e.ALWAYS}}function Hr(e,t){switch(t){case"keep":return e.KEEP;case"zero":return e.ZERO;case"replace":return e.REPLACE;case"invert":return e.INVERT;case"increment-clamp":return e.INCR;case"decrement-clamp":return e.DECR;case"increment-wrap":return e.INCR_WRAP;case"decrement-wrap":return e.DECR_WRAP}}function Vd(e,t,r){let n=new Int32Array(4),o={},i=!1;return{setDepthReadOnly:a=>{i=a},setRenderState:a=>{o=a;let{blend:s,colorWrite:c,depth:u,stencil:l,cull:d,frontFace:p}=a;if(s){t.enable(e.BLEND);let{color:m,alpha:h}=s;t.blendFuncSeparate(Ao(e,m.srcFactor),Ao(e,m.dstFactor),Ao(e,h.srcFactor),Ao(e,h.dstFactor)),t.blendEquationSeparate(Md(e,r,m.operation),Md(e,r,h.operation))}else t.disable(e.BLEND);if(c?t.colorMask(c[0],c[1],c[2],c[3]):t.colorMask(!0,!0,!0,!0),u?(t.enable(e.DEPTH_TEST),t.depthFunc(ma(e,u.compare)),t.depthMask(u.write&&!i)):(t.disable(e.DEPTH_TEST),t.depthMask(!1)),l){t.enable(e.STENCIL_TEST);let{front:m,back:h,readMask:g,writeMask:S,reference:y}=l;t.stencilFuncSeparate(e.FRONT,ma(e,m.compare),y,g),t.stencilFuncSeparate(e.BACK,ma(e,h.compare),y,g),t.stencilOpSeparate(e.FRONT,Hr(e,m.failOp),Hr(e,m.depthFailOp),Hr(e,m.passOp)),t.stencilOpSeparate(e.BACK,Hr(e,h.failOp),Hr(e,h.depthFailOp),Hr(e,h.passOp)),t.stencilMask(i?0:S)}else t.disable(e.STENCIL_TEST);d==="front"||d==="back"?(t.enable(e.CULL_FACE),t.cullFace(d==="front"?e.FRONT:e.BACK)):t.disable(e.CULL_FACE),t.frontFace(p==="cw"?e.CW:e.CCW)},setViewport:(a,s,c,u)=>{t.viewport(a,s,c,u)},setScissor:(a,s,c,u)=>{t.enable(e.SCISSOR_TEST),t.scissor(a,s,c,u)},disableScissor:()=>{t.disable(e.SCISSOR_TEST)},clear:a=>{yo(t,"clear");let{color:s,depth:c,stencil:u}=a;if(i&&(c!==void 0||u!==void 0))throw new Error("clearing the depth or stencil of a render pass with a read-only depth attachment");let l=0;if(s&&(t.colorMask(!0,!0,!0,!0),A(e)&&Ju(e)?(n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],e.clearBufferiv(e.COLOR,0,n)):(t.clearColor(s[0],s[1],s[2],s[3]),l|=e.COLOR_BUFFER_BIT)),c!==void 0&&(t.depthMask(!0),t.clearDepth(c),l|=e.DEPTH_BUFFER_BIT),u!==void 0&&(t.stencilMask(255),t.clearStencil(u),l|=e.STENCIL_BUFFER_BIT),l&&e.clear(l),s){let d=o.colorWrite;d&&t.colorMask(d[0],d[1],d[2],d[3])}c!==void 0&&t.depthMask((o.depth?.write??!1)&&!i),u!==void 0&&o.stencil&&t.stencilMask(i?0:o.stencil.writeMask)}}}var Uh={...Nt,tTexture:Oe("texture","rgba","float","nearest",void 0,{sampleType:"sint"})},zh=Ut("sum"),At="histopyramid-sum";function Nh(e,t){if(e.namedComputeRenderables[At]){let r=e.namedComputeRenderables[At].values;F.update(r.tTexture,t),e.namedComputeRenderables[At].update()}else e.namedComputeRenderables[At]=jh(e,t);return e.namedComputeRenderables[At]}function jh(e,t){let r={...jt,tTexture:F.create(t)},n={...Uh},o=e.createComputeRenderItem("triangles",zh,n,r);return Gt(o,r)}var wo=new Uint8Array(4),kd=new Int32Array(4);function Gd(e,t){ue&&e.timer.group("getHistopyramidSum");let{gl:r,resources:n,capabilities:o}=e,i=Nh(e,t);e.namedFramebuffers[At]||(e.namedFramebuffers[At]=n.framebuffer());let a=e.namedFramebuffers[At];return e.namedTextures[At]||(e.namedTextures[At]=o.integerTextures?n.texture("image-int32","rgba","int","nearest"):n.texture("image-uint8","rgba","ubyte","nearest"),e.namedTextures[At].define(1,1)),e.namedTextures[At].attachFramebuffer(a,0),e.beginRenderPass(a,{label:"histogram pyramid sum"}),e.setRenderState(bt.Default),e.disableScissor(),tr(e,0,0,1,1),i.render(),e.readPixels(0,0,1,1,o.integerTextures?kd:wo),r.bindFramebuffer(r.FRAMEBUFFER,null),ue&&e.timer.groupEnd("getHistopyramidSum"),o.integerTextures?kd[0]:Xs(wo[0],wo[1],wo[2])}var Wh={...Nt,tInputLevel:Oe("texture","rgba","float","nearest"),tPreviousLevel:Oe("texture","rgba","float","nearest",void 0,{sampleType:"sint"}),uSize:fe("f"),uTexSize:fe("f"),uFirst:fe("b")},Hh=Ut("reduction"),pr="histogram-pyramid";function $h(e,t,r){if(e.namedComputeRenderables[pr]){let n=e.namedComputeRenderables[pr].values;F.update(n.tInputLevel,t),F.update(n.tPreviousLevel,r),e.namedComputeRenderables[pr].update()}else e.namedComputeRenderables[pr]=qh(e,t,r);return e.namedComputeRenderables[pr]}function qh(e,t,r){let n={...jt,tInputLevel:F.create(t),tPreviousLevel:F.create(r),uSize:F.create(0),uTexSize:F.create(0),uFirst:F.create(!0)},o={...Wh},i=e.createComputeRenderItem("triangles",Hh,o,n);return Gt(i,n)}function Xh(e,t){let r=Math.pow(2,t),n=`level${t}`,o=e.capabilities.integerTextures?Lo(n,e,"image-int32","r","int","nearest"):Lo(n,e,"image-uint8","rgba","ubyte","nearest");o.define(r,r);let i=Zh(n,e);return i||(i=Ud(n,e)),o.attachFramebuffer(i,0),{texture:o,framebuffer:i}}function Ud(e,t){let r=`${pr}-${e}`;return t.namedFramebuffers[r]||(t.namedFramebuffers[r]=t.resources.framebuffer()),t.namedFramebuffers[r]}function Lo(e,t,r,n,o,i){let a=`${pr}-${e}`;return t.namedTextures[a]||(t.namedTextures[a]=t.resources.texture(r,n,o,i)),t.namedTextures[a]}function Zh(e,t){let r=`${pr}-${e}`;return t.namedFramebuffers[r]}function zd(e,t,r,n){ue&&e.timer.group("createHistogramPyramid");let o=t.getWidth(),i=t.getHeight();if(o!==i||!sn(o))throw new Error("inputTexture must be of square power-of-two size");let a=Math.ceil(Math.log(o)/Math.log(2)),s=Math.pow(2,a),c=Math.pow(2,a),u=Math.pow(2,a-1),l=e.capabilities.integerTextures?Lo("pyramid",e,"image-int32","r","int","nearest"):Lo("pyramid",e,"image-uint8","rgba","ubyte","nearest");l.define(c,u);let d=Ud("pyramid",e);l.attachFramebuffer(d,0),e.beginRenderPass(d,{label:"histogram pyramid"}),e.setRenderState(bt.Default),tr(e,0,0,c,u),Tr(e,0,0,c,u),e.clear({color:[0,0,0,0]});let p=[];for(let y=0;y<a;++y)p.push(Xh(e,y));let m=$h(e,t,p[0].texture),h=0;for(let y=0;y<a;y++){let C=a-1-y,T=p[C];e.beginRenderPass(T.framebuffer,{label:"histogram pyramid"});let I=Math.pow(2,C);F.update(m.values.uSize,Math.pow(2,y+1)/s),F.update(m.values.uTexSize,I),F.updateIfChanged(m.values.uFirst,y===0),y>0&&(F.update(m.values.tPreviousLevel,p[a-y].texture),m.update()),tr(e,0,0,I,I),Tr(e,0,0,I,I),e.clear({color:[0,0,0,0]}),Tr(e,0,0,n[0],n[1]),m.render(),l.copyFromFramebuffer(T.framebuffer,0,T.texture.getHeight()-I,I,I,h,l.getHeight()-I),h+=I}ue&&e.timer.groupEnd("createHistogramPyramid");let g=Math.max(1,Gd(e,p[0].texture)),S=Math.ceil(g/Math.pow(2,a));return{pyramidTex:l,count:g,height:S,levels:a,scale:r}}var gn;function Nd(){if(gn!==void 0)return gn;gn=$i(256,1,Uint8Array);let{array:e}=gn;for(let t=0,r=Mr.length;t<r;++t)e[t]=Mr[t].length/3;return gn}var yn;function jd(){if(yn!==void 0)return yn;yn=$i(4096,1,Uint8Array);let{array:e}=yn;for(let t=0,r=Mr.length;t<r;++t)for(let n=0;n<16;++n)n<Mr[t].length?e[t*16+n]=Mr[t][n]:e[t*16+n]=255;return yn}var Kh={...Nt,tTriCount:Oe("image-uint8","r","ubyte","nearest"),tVolumeData:Oe("texture","rgba","ubyte","nearest"),dValueChannel:Fe("string",["red","alpha"]),uIsoValue:fe("f"),uGridDim:fe("v3"),uGridTexDim:fe("v3"),uScale:fe("v2")},Yh=Ut("active-voxels"),Mt="active-voxels";function Qh(e,t,r,n,o,i,a){if(e.namedComputeRenderables[Mt]){let s=e.namedComputeRenderables[Mt].values;F.update(s.uQuadScale,a),F.update(s.tVolumeData,t),F.update(s.dValueChannel,r),F.updateIfChanged(s.uIsoValue,i),F.update(s.uGridDim,n),F.update(s.uGridTexDim,o),F.update(s.uScale,a),e.namedComputeRenderables[Mt].update()}else e.namedComputeRenderables[Mt]=Jh(e,t,r,n,o,i,a);return e.namedComputeRenderables[Mt]}function Jh(e,t,r,n,o,i,a){let s={...jt,tTriCount:F.create(Nd()),uQuadScale:F.create(a),tVolumeData:F.create(t),dValueChannel:F.create(r),uIsoValue:F.create(i),uGridDim:F.create(n),uGridTexDim:F.create(o),uScale:F.create(a)},c={...Kh},u=e.createComputeRenderItem("triangles",Yh,c,s);return Gt(u,s)}function Wd(e,t,r,n,o,i,a){ue&&e.timer.group("calcActiveVoxels");let{resources:s}=e,c=t.getWidth(),u=t.getHeight();e.namedFramebuffers[Mt]||(e.namedFramebuffers[Mt]=s.framebuffer());let l=e.namedFramebuffers[Mt];e.namedTextures[Mt]||(e.namedTextures[Mt]=s.texture("image-uint8","rgba","ubyte","nearest"));let d=e.namedTextures[Mt];d.define(c,u);let p=Qh(e,t,r,n,o,i,a);return d.attachFramebuffer(l,0),e.beginRenderPass(l,{label:"active voxels"}),e.setRenderState(bt.Default),tr(e,0,0,c,u),Tr(e,0,0,c,u),e.clear({color:[0,0,0,0]}),Tr(e,0,0,o[0],o[1]),p.render(),ue&&e.timer.groupEnd("calcActiveVoxels"),d}var eg={...Nt,tTriIndices:Oe("image-uint8","r","ubyte","nearest"),tActiveVoxelsPyramid:Oe("texture","rgba","float","nearest",void 0,{sampleType:"sint"}),tActiveVoxelsBase:Oe("texture","rgba","float","nearest"),tVolumeData:Oe("texture","rgba","ubyte","nearest"),dValueChannel:Fe("string",["red","alpha"]),uIsoValue:fe("f"),uSize:fe("f"),uLevels:fe("f"),uCount:fe("f"),uInvert:fe("b"),uGridDim:fe("v3"),uGridTexDim:fe("v3"),uGridDataDim:fe("v3"),uGridTransform:fe("m4"),uGridTransformAdjoint:fe("m3"),uScale:fe("v2"),dPackedGroup:Fe("boolean"),dAxisOrder:Fe("string",["012","021","102","120","201","210"]),dConstantGroup:Fe("boolean")},tg=Ut("isosurface",{drawBuffers:"required"}),fr="isosurface";function rg(e,t,r,n,o,i,a,s,c,u,l,d,p,m,h,g,S){if(e.namedComputeRenderables[fr]){let y=e.namedComputeRenderables[fr].values;F.update(y.tActiveVoxelsPyramid,t),F.update(y.tActiveVoxelsBase,r),F.update(y.tVolumeData,n),F.update(y.dValueChannel,o),F.updateIfChanged(y.uIsoValue,u),F.updateIfChanged(y.uSize,Math.pow(2,l)),F.updateIfChanged(y.uLevels,l),F.updateIfChanged(y.uCount,p),F.updateIfChanged(y.uInvert,m),F.update(y.uGridDim,i),F.update(y.uGridTexDim,a),F.update(y.uGridDataDim,s),F.update(y.uGridTransform,c),F.update(y.uGridTransformAdjoint,K.adjointFromMat4(K(),c)),F.update(y.uScale,d),F.updateIfChanged(y.dPackedGroup,h),F.updateIfChanged(y.dAxisOrder,g.join("")),F.updateIfChanged(y.dConstantGroup,S),e.namedComputeRenderables[fr].update()}else e.namedComputeRenderables[fr]=ng(e,t,r,n,o,i,a,s,c,u,l,d,p,m,h,g,S);return e.namedComputeRenderables[fr]}function ng(e,t,r,n,o,i,a,s,c,u,l,d,p,m,h,g,S){let y={...jt,tTriIndices:F.create(jd()),tActiveVoxelsPyramid:F.create(t),tActiveVoxelsBase:F.create(r),tVolumeData:F.create(n),dValueChannel:F.create(o),uIsoValue:F.create(u),uSize:F.create(Math.pow(2,l)),uLevels:F.create(l),uCount:F.create(p),uInvert:F.create(m),uGridDim:F.create(i),uGridTexDim:F.create(a),uGridDataDim:F.create(s),uGridTransform:F.create(c),uGridTransformAdjoint:F.create(K.adjointFromMat4(K(),c)),uScale:F.create(d),dPackedGroup:F.create(h),dAxisOrder:F.create(g.join("")),dConstantGroup:F.create(S)},C={...eg},T=e.createComputeRenderItem("triangles",tg,C,y);return Gt(T,y)}function og(e,t,r,n,o,i,a,s,c,u,l,d,p,m,h,g,S){if(!e.capabilities.multipleRenderTargets)throw new Error("need multiple render targets");ue&&e.timer.group("createIsosurfaceBuffers");let{resources:y,capabilities:C}=e,{pyramidTex:T,height:I,levels:B,scale:V,count:H}=o,J=T.getWidth();e.namedFramebuffers[fr]||(e.namedFramebuffers[fr]=y.framebuffer());let oe=e.namedFramebuffers[fr];C.mixedAttachmentFormats?(h||(h=y.texture("image-float32","rgba","float","nearest")),g||(g=y.texture("image-uint8","rgba","ubyte","nearest")),S||(S=C.halfFloatRenderTarget?y.texture("image-float16","rgba","fp16","nearest"):y.texture("image-float32","rgba","float","nearest"))):(h||(h=y.texture("image-float32","rgba","float","nearest")),g||(g=y.texture("image-float32","rgba","float","nearest")),S||(S=y.texture("image-float32","rgba","float","nearest"))),h.define(J,I),g.define(J,I),S.define(J,I),h.attachFramebuffer(oe,0),g.attachFramebuffer(oe,1),S.attachFramebuffer(oe,2);let pe=rg(e,T,t,r,n,i,a,s,c,u,B,V,H,l,d,p,m);return oe.setDrawBuffers(3),e.beginRenderPass(oe,{label:"isosurface"}),e.setRenderState(bt.Default),e.disableScissor(),tr(e,0,0,J,I),e.clear({color:[0,0,0,0]}),pe.render(),ue&&e.timer.groupEnd("createIsosurfaceBuffers"),{vertexTexture:h,groupTexture:g,normalTexture:S,vertexCount:H}}function ig(e,t,r,n,o,i,a,s,c,u,l,d,p,m,h,g){ue&&e.timer.group("extractIsosurface");let S=Wd(e,t,r,n,o,c,a),y=zd(e,S,a,o),C=og(e,S,t,r,y,n,o,i,s,c,u,l,d,p,m,h,g);return ue&&e.timer.groupEnd("extractIsosurface"),C}var Hd={isSupported:e=>$r(e),extract:(e,t,r)=>{if(!$r(e))throw new Error("not a WebGL context");return ig(e,t.texture,t.channel,t.gridDim,t.gridTexDim,t.gridDataDim,t.gridTexScale,t.transform,t.isoValue,t.invert,t.packedGroup,t.axisOrder,t.constantGroup,r?.vertex,r?.group,r?.normal)}};var $d=[];function qd(e){$d.includes(e)||$d.push(e)}var QE={uDimensions:fe("v3"),uMin:fe("v3"),uDelta:fe("v3"),outValues:Bs("f32","read-write"),dCumulative:Fe("boolean")};function Xd(){let e=new ArrayBuffer(2),t=new Uint8Array(e),r=new Uint16Array(e);return t[0]=170,t[1]=187,r[0]===48042}var Zd=`
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
`;var Kd=`
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
`;var Yd=`
precision highp float;
precision highp int;

{UTILS}

${Zd}
#ifdef CUMULATIVE
    ${Kd}
#endif

float intDiv(float a, float b) { return float(int(a) / int(b)); }
float intMod(float a, float b) { return a - b * float(int(a) / int(b)); }

void main(void) {
    float offset = floor(gl_FragCoord.x) + floor(gl_FragCoord.y) * uWidth;

    // axis order fast to slow Z, Y, X
    // TODO: support arbitrary axis orders?
    float k = intMod(offset, uDimensions.z), kk = intDiv(offset, uDimensions.z);
    float j = intMod(kk, uDimensions.y);
    float i = intDiv(kk, uDimensions.y);

    vec3 xyz = uMin + uDelta * vec3(i, j, k);

    {MAIN}

    #ifdef CUMULATIVE
        float current = rgbaToFloat(texture2D(tCumulativeSum, gl_FragCoord.xy / vec2(uWidth, uWidth)), uLittleEndian);
    #endif
    gl_FragColor = floatToRgba({RETURN}, uLittleEndian);
}
`;var ha="grid3d-computable",ga="grid3d-computable-0",ya="grid3d-computable-1",ag={...Nt,uDimensions:fe("v3"),uMin:fe("v3"),uDelta:fe("v3"),uWidth:fe("f"),uLittleEndian:fe("b")},sg={tCumulativeSum:Oe("texture","rgba","ubyte","nearest")};function cg(e){return Yd.replace("{UTILS}",e.utilCode??"").replace("{MAIN}",e.mainCode).replace("{RETURN}",e.returnCode)}function ug(e,t){let r={...ag,...e.cumulative?sg:{},...e.schema};if(!t){for(let n of e.loopBounds??[])r[n]=Fe("number");r.WEBGL1=Fe("boolean")}return e.cumulative&&(r.CUMULATIVE=Fe("boolean")),r}function lg(e,t){let r=Ut(e);return te(e,le,cg(t)),async(n,o,i,a)=>{if(!$r(o))throw new Error("not a WebGL context");let s=o,c=ug(t,s.isWebGL2);s.namedFramebuffers[ha]||(s.namedFramebuffers[ha]=s.resources.framebuffer());let u=s.namedFramebuffers[ha];s.namedTextures[ga]||(s.namedTextures[ga]=s.resources.texture("image-uint8","rgba","ubyte","nearest")),t.cumulative&&!s.namedTextures[ya]&&(s.namedTextures[ya]=s.resources.texture("image-uint8","rgba","ubyte","nearest"));let l=[s.namedTextures[ga],s.namedTextures[ya]],[d,p,m]=i.dimensions,h=Math.ceil(Math.sqrt(d*p*m)),g={uDimensions:i.dimensions,uMin:i.box.min,uDelta:Fi(i),uWidth:h,uLittleEndian:Xd(),...t.values(a,i)};s.isWebGL2||(g.WEBGL1=!0),t.cumulative&&(g.tCumulativeSum=l[0],g.CUMULATIVE=!0);let S=s.namedComputeRenderables[e],y;S?(y=S.values,Ke(g,(T,I)=>{let B=c[I];B?.type==="value"||B?.type==="attribute"||(!B||!ju(B.kind)?F.update(y[I],T):F.updateIfChanged(y[I],T))})):(y={},Ke(jt,(T,I)=>y[I]=T),Ke(g,(T,I)=>y[I]=F.create(T)),S=Gt(s.createComputeRenderItem("triangles",r,c,y),y));let C=new Uint8Array(h*h*4);if(t.cumulative){ue&&s.timer.group("Grid3dCompute.renderCumulative");let T=t.cumulative.states(a);l[0].define(h,h),l[1].define(h,h),ba(s,h),l[0].attachFramebuffer(u,"color0"),s.beginRenderPass(u,{label:"grid3d clear",clear:{color:[0,0,0,0]}}),l[1].attachFramebuffer(u,"color0"),s.beginRenderPass(u,{label:"grid3d clear",clear:{color:[0,0,0,0]}}),t.cumulative.yieldPeriod&&!ue&&await n.update({message:"Computing...",isIndeterminate:!1,current:0,max:T.length});let I=Math.max(1,t.cumulative.yieldPeriod??1);ue&&s.timer.group("Grid3dCompute.renderBatch");for(let B=0;B<T.length;B++)F.update(y.tCumulativeSum,l[(B+1)%2]),l[B%2].attachFramebuffer(u,"color0"),s.beginRenderPass(u,{label:"grid3d"}),ba(s,h),t.cumulative.update(a,T[B],y),S.update(),S.render(),t.cumulative.yieldPeriod&&B!==T.length-1&&(B%I===I-1&&(s.waitForGpuCommandsCompleteSync(),ue&&s.timer.groupEnd("Grid3dCompute.renderBatch"),ue&&s.timer.group("Grid3dCompute.renderBatch")),n.shouldUpdate&&!ue&&await n.update({current:B+1}));ue&&s.timer.groupEnd("Grid3dCompute.renderBatch"),ue&&s.timer.groupEnd("Grid3dCompute.renderCumulative")}else l[0].define(h,h),l[0].attachFramebuffer(u,"color0"),s.beginRenderPass(u,{label:"grid3d"}),ba(s,h),S.update(),S.render();return ue&&s.timer.group("Grid3dCompute.readPixels"),s.readPixels(0,0,h,h,C),ue&&s.timer.groupEnd("Grid3dCompute.readPixels"),new Float32Array(C.buffer,C.byteOffset,d*p*m)}}var Qd={isSupported:e=>$r(e),create:lg};function ba(e,t){e.setViewport(0,0,t,t),e.disableScissor(),e.setRenderState(bt.Default)}function Jd(e,t,r){let n=e.slice(0,t);for(let o=0,i=r-1;o<i;++o,--i){let a=o*t,s=i*t;n.set(e.subarray(a,a+t)),e.copyWithin(a,s,s+t),e.set(n,s)}}function ep(e,t={}){let{gl:r,resources:n,state:o}=e,i=t.format==="r32f",a=n.framebuffer(),s=[],c,u=new Float32Array(0),l=null,d=0,p=0,m=0,h=i?1:4;function g(T){T.attachFramebuffer(a,"color0"),a.bind(),i&&c===void 0&&(c=r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)===r.RED&&r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)===r.FLOAT)}function S(T){return u.length<T*4&&(u=new Float32Array(T*4)),u.subarray(0,T*4)}function y(T,I,B){for(let V=0;V<B;++V)I[V]=T[V*4]}function C(){l!==null&&A(r)&&r.deleteSync(l),l=null}return{synchronous:!0,asynchronous:A(r),read:(T,I,B,V,H,J)=>{Ae(o);for(let oe=0;oe<T.length;++oe){g(T[oe]);let pe=T[oe].getHeight()-B-H;if(!i)e.readPixels(I,pe,V,H,J[oe]);else if(c&&A(r))r.readPixels(I,pe,V,H,r.RED,r.FLOAT,J[oe]);else{let O=S(V*H);e.readPixels(I,pe,V,H,O),y(O,J[oe],V*H)}Jd(J[oe],V*h,H)}},start:(T,I,B,V,H)=>{if(A(r)){Ae(o),C(),d=0,p=V,m=H;for(let J=0;J<T.length;++J)g(T[J]),s[J]||(s[J]=i?n.pixelPack(c?"r":"rgba","float"):n.pixelPack("rgba","ubyte")),s[J].read(I,T[J].getHeight()-B-H,V,H),d+=s[J].getByteCount();l=r.fenceSync(r.SYNC_GPU_COMMANDS_COMPLETE,0),r.flush()}},check:T=>{if(l===null||!A(r))return"failed";let I=r.clientWaitSync(l,0,0);if(I===r.WAIT_FAILED)return C(),"failed";if(I===r.TIMEOUT_EXPIRED)return"pending";for(let B=0;B<T.length;++B){if(i&&!c){let V=T[B].length,H=S(V);s[B].getSubData(H),y(H,T[B],V)}else s[B].getSubData(T[B]);Jd(T[B],p*h,m)}return C(),"resolved"},reset:()=>{C()},getByteCount:()=>d,dispose:()=>{C();for(let T of s)T.destroy();s.length=0,d=0,a.destroy()}}}function da(e,t){switch(t){case e.NO_ERROR:return"no error";case e.INVALID_ENUM:return"invalid enum";case e.INVALID_VALUE:return"invalid value";case e.INVALID_OPERATION:return"invalid operation";case e.INVALID_FRAMEBUFFER_OPERATION:return"invalid framebuffer operation";case e.OUT_OF_MEMORY:return"out of memory";case e.CONTEXT_LOST_WEBGL:return"context lost"}return"unknown error"}function np(e,t){let r=e.getError();r!==e.NO_ERROR&&console.log(`WebGL error: '${da(e,r)}'${t?` (${t})`:""}`)}function dg(e){let t=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);for(let o=0;o<t;++o)e.activeTexture(e.TEXTURE0+o),e.bindTexture(e.TEXTURE_2D,null),e.bindTexture(e.TEXTURE_CUBE_MAP,null),A(e)&&(e.bindTexture(e.TEXTURE_2D_ARRAY,null),e.bindTexture(e.TEXTURE_3D,null));let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r);let n=e.getParameter(e.MAX_VERTEX_ATTRIBS);for(let o=0;o<n;++o)e.vertexAttribPointer(o,1,e.FLOAT,!1,0,0);e.bindBuffer(e.ARRAY_BUFFER,null),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null),A(e)&&(e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBuffer(e.PIXEL_PACK_BUFFER,null))}var pg={key:"webgl",hasStencil:!0},op=new Uint8Array(4);function ip(e,t,r){e.getSyncParameter(t,e.SYNC_STATUS)===e.SIGNALED?(e.deleteSync(t),r()):Lr.setImmediate(ip,e,t,r)}function fg(e,t){let r=e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0);r?Lr.setImmediate(ip,e,r,t):(console.warn("Could not create a WebGLSync object"),e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,op),t())}var tp=!1;function mg(e){return new Promise(t=>{A(e)?fg(e,t):(tp||(console.info("Sync object not supported in WebGL"),tp=!0),ap(e),t())})}function ap(e){e.bindFramebuffer(e.FRAMEBUFFER,null),e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,op)}function Io(e,t,r,n,o,i){if(j&&Wr(e),i instanceof Uint8Array)e.readPixels(t,r,n,o,e.RGBA,e.UNSIGNED_BYTE,i);else if(i instanceof Float32Array)e.readPixels(t,r,n,o,e.RGBA,e.FLOAT,i);else if(i instanceof Int32Array&&A(e))e.readPixels(t,r,n,o,e.RGBA_INTEGER,e.INT,i);else throw new Error("unsupported readPixels buffer type");j&&np(e)}function xa(e,t){t?e.bindFramebuffer(e.FRAMEBUFFER,t.framebuffer):e.bindFramebuffer(e.FRAMEBUFFER,null)}function Oo(e,t,r){let n=t?.framebufferWidth??e.drawingBufferWidth;r==="screen-space"&&(n*=2);let o=t?.framebufferHeight??e.drawingBufferHeight;return{width:n,height:o}}function qr(e,t,r,n){let o=t==="vertex"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,i=e[`${r.toUpperCase()}_${n.toUpperCase()}`];return e.getShaderPrecisionFormat(o,i)}function rp(e,t){return{lowFloat:qr(e,t,"low","float"),mediumFloat:qr(e,t,"medium","float"),highFloat:qr(e,t,"high","float"),lowInt:qr(e,t,"low","int"),mediumInt:qr(e,t,"medium","int"),highInt:qr(e,t,"high","int")}}function hg(e,t){return{maxTextureSize:e.getParameter(e.MAX_TEXTURE_SIZE),max3dTextureSize:A(e)?e.getParameter(e.MAX_3D_TEXTURE_SIZE):0,maxRenderbufferSize:e.getParameter(e.MAX_RENDERBUFFER_SIZE),maxDrawBuffers:t.drawBuffers?e.getParameter(t.drawBuffers.MAX_DRAW_BUFFERS):0,maxTextureImageUnits:e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextureImageUnits:e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxVertexAttribs:e.getParameter(e.MAX_VERTEX_ATTRIBS)}}function $r(e){return e.gl!==void 0}var Fo="read-texture-rgba";function gg(e,t,r,n){let o=qs(e,t);e.namedFramebuffers[Fo]??=e.resources.framebuffer();let i=e.namedFramebuffers[Fo];e.namedTextures[Fo]??=e.resources.texture("image-uint8","rgba","ubyte","nearest");let a=e.namedTextures[Fo];return a.define(r,n),a.attachFramebuffer(i,"color0"),e.beginRenderPass(i,{label:"read texture (rgba copy)"}),e.setRenderState(bt.Default),e.setViewport(0,0,r,n),e.setScissor(0,0,r,n),e.clear({color:[0,0,0,0]}),o.render(),a}function va(e,t={}){Zs(Hd),qd(Qd);let r=ad(e),n=Rd(e,r),o=sd(e,r),i=Pd(),a=hg(e,r),s=A(e)&&t.uniformBlocks!==!1,c=gd(e,o,i,r,a,s,()=>J),u,l=xd(e,r,i);o.onRenderPassEnd=l.passEnd;let d=Vd(e,o,r),p=!!e.getContextAttributes()?.stencil;if(a.maxVertexTextureImageUnits<8)throw new Error('Need "MAX_VERTEX_TEXTURE_IMAGE_UNITS" >= 8');let m={vertex:rp(e,"vertex"),fragment:rp(e,"fragment")},h=!!r.clipControl,g=h?_s:Es,S="drawing-buffer",y=()=>S==="drawing-buffer"?Oo(e,O.layer,O.session?.interactionMode).height:"getHeight"in S?S.getHeight():xo(S),C={x:0,y:0,width:0,height:0,set:!1},T={x:0,y:0,width:0,height:0,enabled:!1},I=()=>{if(!C.set)return;let{x:_,y:M,width:G,height:Y}=C;d.setViewport(_,y()-M-Y,G,Y)},B=()=>{if(!T.enabled)return;let{x:_,y:M,width:G,height:Y}=T;d.setScissor(_,y()-M-Y,G,Y)},V=r.provokingVertex;V?.provokingVertex(V.FIRST_VERTEX_CONVENTION);let H=r.clipControl;h&&H&&o.clipControl?.(H.LOWER_LEFT,H.ZERO_TO_ONE);let J=!1,oe=new ln,pe=t.pixelScale||1,O={session:void 0,layer:void 0,changed:new ln,clear:()=>{O.layer=void 0,O.session=void 0,O.changed.next()}},w=e.canvas,b=typeof w?.addEventListener=="function",D,$,X=_=>{_.preventDefault(),ee.setContextLost()},ae=()=>{if(!ee.isContextLost)return;let _=D;D=void 0,_?.resolve(!0)};b&&(w.addEventListener("webglcontextlost",X,!1),w.addEventListener("webglcontextrestored",ae,!1));let ee={gl:e,isWebGL2:A(e),uniformBlocks:s,depthRangeConversion:g,get pixelRatio(){return(typeof window<"u"&&window.devicePixelRatio||1)*(pe||1)},capabilities:n,extensions:r,state:o,stats:i,resources:c,timer:l,get shaderPrecisionFormats(){return m},namedComputeRenderables:Object.create(null),namedFramebuffers:Object.create(null),namedTextures:Object.create(null),isProgramSupported:()=>!0,createGraphicsRenderItem:(_,M,G,Y,se,Re)=>Od(ee,_,M,G,Y,se,Re),createProgramItem:(_,M,G,Y,se,Re)=>Id(ee,M,G,Y,Re),createComputeRenderItem:(_,M,G,Y,se)=>Fd(ee,_,M,G,Y,se),createGlobalBindings:(_,M,G)=>Cd(ee,_,M,G),get isContextLost(){return J||e.isContextLost()},contextLost:oe,setContextLost:()=>{J=!0,l.clear(),oe.next(gt())},recreate:async()=>!ee.isContextLost||!b?void 0:(D?.resolve(!1),await new Promise(M=>{D={resolve:M};let G=$;if($=void 0,!!G)try{G.restoreContext()}catch{D=void 0,M(!1)}})?va(e,t):void 0),simulateContextLoss:()=>{let _=e.getExtension("WEBGL_lose_context");return!_||ee.isContextLost?!1:(_.loseContext(),setTimeout(()=>{ee.isContextLost&&_.restoreContext()},1e3),!0)},release:()=>{let _=e.getExtension("WEBGL_lose_context");return!_||ee.isContextLost?!1:($=_,_.loseContext(),!0)},xr:{get session(){return O.session},changed:O.changed,set:async(_,M)=>{if(O.session!==_&&(await O.session?.end(),_!==void 0))try{await e.makeXRCompatible(),O.session=_,O.layer=new XRWebGLLayer(O.session,e,{antialias:!0,alpha:!0,depth:!0,stencil:!0,framebufferScaleFactor:pe*(M?.resolutionScale??1)}),await O.session.updateRenderState({baseLayer:O.layer}),O.session.addEventListener("end",O.clear),O.changed.next()}catch(G){throw _?await _.end():(O.layer=void 0,O.session=void 0),G}},end:async()=>O.session?.end(),isPresenting:()=>!!O.session&&!!O.layer&&O.session.renderState.baseLayer===O.layer,getView:(_,M)=>{let{layer:G}=O,Y=G?.getViewport(_);return!G||!Y?!1:(Gs.set(M.viewport,Y.x,G.framebufferHeight-Y.y-Y.height,Y.width,Y.height),ce.fromArray(M.projection,_.projectionMatrix,0),!0)}},setPixelScale:_=>{pe=_},createRenderTarget:(_,M,G,Y,se,Re)=>bd(e,c,_,M,G,Y,se,Re),createDrawTarget:()=>({id:-1,texture:Vs(),framebuffer:tl(),depthRenderbuffer:null,getByteCount:()=>0,getWidth:()=>Oo(e,O.layer,O.session?.interactionMode).width,getHeight:()=>Oo(e,O.layer,O.session?.interactionMode).height,bind:()=>{xa(e,O.layer)},setSize:()=>{},destroy:()=>{}}),bindDrawingBuffer:()=>xa(e,O.layer),getDrawingBufferSize:()=>Oo(e,O.layer,O.session?.interactionMode),readPixels:(_,M,G,Y,se)=>{Ae(o),Io(e,_,M,G,Y,se)},waitForGpuCommandsComplete:()=>mg(e),readRenderTarget:async(_,M,G,Y,se)=>{Ae(o),_.bind();let Re=new Uint8Array(Y*se*4);return Io(e,M,_.getHeight()-G-se,Y,se,Re),pn.flipY(pn.create(Re,Y,se)),Re},readTextureAsync:async(_,M,G,Y,se)=>{Ae(o),u??=c.framebuffer(),_.attachFramebuffer(u,"color0"),u.bind();let Re=new Uint8Array(Y*se*4);return Io(e,M,_.getHeight()-G-se,Y,se,Re),pn.flipY(pn.create(Re,Y,se)),Re},createTextureReader:_=>ep(ee,_),readTextureData:async _=>{Ae(o);let{format:M,type:G}=To(_),Y=_.getWidth(),se=_.getHeight();if(G===e.INT||A(e)&&G===e.UNSIGNED_INT)throw new Error("reading integer textures is not supported");let Re=G!==e.UNSIGNED_BYTE,v=_;if(M!==e.RGBA){if(Re)throw new Error("reading single-channel float textures is not supported");v=gg(ee,_,Y,se)}u??=c.framebuffer(),v.attachFramebuffer(u,"color0"),u.bind();let E=Re?new Float32Array(Y*se*4):new Uint8Array(Y*se*4);return Io(e,0,0,Y,se,E),{array:E,width:Y,height:se}},waitForGpuCommandsCompleteSync:()=>ap(e),getFenceSync:()=>A(e)?e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0):null,checkSyncStatus:_=>A(e)?e.getSyncParameter(_,e.SYNC_STATUS)===e.SIGNALED?(e.deleteSync(_),!0):!1:!0,deleteSync:_=>{A(e)&&e.deleteSync(_)},setRenderState:d.setRenderState,setBlendConstant:(_,M,G,Y)=>{o.blendColor(_,M,G,Y)},setViewport:(_,M,G,Y)=>{Object.assign(C,{x:_,y:M,width:G,height:Y,set:!0}),o.inRenderPass&&I()},setScissor:(_,M,G,Y)=>{Object.assign(T,{x:_,y:M,width:G,height:Y,enabled:!0}),o.inRenderPass&&B()},disableScissor:()=>{T.enabled=!1,d.disableScissor()},describeTarget:()=>pg,beginRenderPass:(_,M)=>{l.passBegin(_,M?.label),_==="drawing-buffer"?xa(e,O.layer):_.bind(),S=_,I(),B(),o.inRenderPass=!0,d.setDepthReadOnly(!!M?.depthReadOnly),M?.clear&&d.clear(M.clear)},endRenderPass:()=>Ae(o),hasRenderPassStencil:()=>p||e.getParameter(e.FRAMEBUFFER_BINDING)!==null,clear:d.clear,flush:()=>{Ae(o),e.flush()},checkError:_=>{np(e,_)},checkFramebufferStatus:_=>{Wr(e,_)},destroy:_=>{b&&(w.removeEventListener("webglcontextlost",X,!1),w.removeEventListener("webglcontextrestored",ae,!1)),D?.resolve(!1),D=void 0,_?.lost||(c.destroy(),dg(e)),O.session?.removeEventListener("end",O.clear),O.session?.end(),oe.complete(),O.changed.complete(),!_?.doNotForceWebGLContextLoss&&!_?.lost&&(e.getExtension("WEBGL_lose_context")?.loseContext(),e.getExtension("STACKGL_destroy_context")?.destroy())}};return vd(ee,{parameters:a,extensions:Object.keys(r).filter(_=>!!r[_]).sort(),shaderPrecisionFormats:m}),Ad(ee,y),ee}var yg={alpha:!0,depth:!0,stencil:!0,premultipliedAlpha:!0};function sp(e,t={}){return{id:e,isAvailable:()=>typeof(e==="webgl2"?globalThis.WebGL2RenderingContext:globalThis.WebGLRenderingContext)<"u",create:async(r,n)=>{let{powerPreference:o,failIfMajorPerformanceCaveat:i,antialias:a,preserveDrawingBuffer:s,pixelScale:c}=n,u={...yg,powerPreference:o,failIfMajorPerformanceCaveat:i,antialias:a,preserveDrawingBuffer:s},l=null;try{l=r.getContext(e,u),!l&&e==="webgl"&&(l=r.getContext("experimental-webgl",u))}catch{l=null}return l?va(l,{pixelScale:c,uniformBlocks:t.uniformBlocks}):void 0}}}var cp=sp("webgl2"),Sa=sp("webgl");function Ta(e={}){return e.preferWebGl1?[Sa]:[cp,Sa]}var bn;(t=>{class e{constructor(){this.providers=kn().asMutable();this.defaultAutoAttachValues=new Map}getParams(n){let o={},i=[],a=[];if(n){let s=this.providers.values();for(;;){let c=s.next();if(c.done)break;let u=c.value;u.isApplicable(n)&&(u.isHidden||(i.push([u.descriptor.name,u.label]),this.defaultAutoAttachValues.get(u.descriptor.name)&&a.push(u.descriptor.name)),o[u.descriptor.name]=f.Group({...u.getParams(n)},{label:u.isHidden?`[Hidden] ${u.label}`:u.label,isHidden:u.isHidden&&Xt}))}}return{autoAttach:f.MultiSelect(a,i),properties:f.Group(o,{isFlat:!0})}}setDefaultAutoAttach(n,o){this.defaultAutoAttachValues.set(n,o)}get(n){if(!this.providers.get(n))throw new Error(`Custom property '${n}' is not registered.`);return this.providers.get(n)}register(n,o){this.providers.set(n.descriptor.name,n),this.defaultAutoAttachValues.set(n.descriptor.name,o)}unregister(n){this.providers.delete(n),this.defaultAutoAttachValues.delete(n)}}t.Registry=e})(bn||={});var Bo=class{constructor(t){this.plugin=t}get dataState(){return this.plugin.state.data}rawData(t,r){return this.dataState.build().toRoot().apply(Ps,t,r).commit({revertOnError:!0})}download(t,r){return this.dataState.build().toRoot().apply(Cs,t,r).commit({revertOnError:!0})}downloadBlob(t,r){return this.dataState.build().toRoot().apply(Rs,t,r).commit({revertOnError:!0})}async readFile(t,r){let n=await this.dataState.build().toRoot().apply(Ds,t,r).commit({revertOnError:!0}),o=oc(t.file?.file?.name??"");return{data:n,fileInfo:o}}};function Ca(e){let t=[],r=n=>{for(let o of Object.keys(n))t.push(o,n[o],n[o]?.data?.version)};r(e.currentPropertyData),e.parent&&r(e.inheritedPropertyData);for(let n of e.models)r(n._staticPropertyData),r(n._dynamicPropertyData);return t}var Xr=ge.BuiltIn({name:"structure-representation-3d",display:"3D Representation",from:R.Molecule.Structure,to:R.Molecule.Structure.Representation3D,params:(e,t)=>{let r=t.representation.structure,{registry:n,themes:o}=r,i=n.default?.provider,a=!!i&&fn(r),s=!!i&&mn(r);if(!e){let l={help:d=>{let{name:p,params:m}=d,g=o.colorThemeRegistry.get(p).factory({},m);return{description:g.description,legend:g.legend}}};return{type:n.default?f.Mapped(n.default.name,n.types,d=>f.Group(n.get(d).getParams(o,Qe.Empty))):rt(),colorTheme:a?f.Mapped(i.defaultColorTheme.name,o.colorThemeRegistry.types,d=>f.Group(o.colorThemeRegistry.get(d).getParams({structure:Qe.Empty})),l):rt(),sizeTheme:s?f.Mapped(i.defaultSizeTheme.name,o.sizeThemeRegistry.types,d=>f.Group(o.sizeThemeRegistry.get(d).getParams({structure:Qe.Empty}))):rt()}}let c={structure:e.data},u={help:l=>{let{name:d,params:p}=l,h=o.colorThemeRegistry.get(d).factory(c,p);return{description:h.description,legend:h.legend}}};return{type:n.default?f.Mapped(n.default.name,n.getApplicableTypes(e.data),l=>f.Group(n.get(l).getParams(o,e.data))):rt(),colorTheme:a?f.Mapped(i.defaultColorTheme.name,o.colorThemeRegistry.getApplicableTypes(c),l=>f.Group(o.colorThemeRegistry.get(l).getParams(c)),u):rt(),sizeTheme:s?f.Mapped(i.defaultSizeTheme.name,o.sizeThemeRegistry.getApplicableTypes(c),l=>f.Group(o.sizeThemeRegistry.get(l).getParams(c))):rt()}}})({canAutoUpdate({a:e,oldParams:t,newParams:r}){return e.data.elementCount<1e4||t.type.name===r.type.name&&r.type.params.quality!=="custom"},apply({a:e,params:t,cache:r},n){return ir("structure",n.representation.structure),ie.create("Structure Representation",async o=>{let i={runtime:o,assetManager:n.managers.asset,errorContext:n.errorContext},a=n.representation.structure.registry.get(t.type.name),s=a.getData?.(e.data,t.type.params)||e.data;a.ensureCustomProperties&&await a.ensureCustomProperties.attach(i,s);let c=a.factory({graphics:n.canvas3d?.graphics,...n.representation.structure.themes},a.getParams);await et.ensureDependencies(i,n.representation.structure.themes,{structure:s},t),c.setTheme(et.create(n.representation.structure.themes,{structure:s},t));let u=t.type.params||{};return await c.createOrUpdate(u,s).runInContext(o),r.themeProperties=Ca(s),new R.Molecule.Structure.Representation3D({repr:c,sourceData:e.data},{label:a.label})})},update({a:e,b:t,oldParams:r,newParams:n,cache:o},i){return ir("structure",i.representation.structure),ie.create("Structure Representation",async a=>{if(n.type.name!==r.type.name)return z.UpdateResult.Recreate;let s=i.representation.structure.registry.get(n.type.name);if(s.mustRecreate?.(r.type.params,n.type.params))return z.UpdateResult.Recreate;let c=s.getData?.(e.data,n.type.params)||e.data,u={runtime:a,assetManager:i.managers.asset,errorContext:i.errorContext};s.ensureCustomProperties&&await s.ensureCustomProperties.attach(u,c);let l=o,d=e.data===t.data.sourceData&&!Ze(r.type,n.type)&&Ze(r.colorTheme,n.colorTheme)&&Ze(r.sizeTheme,n.sizeTheme)&&!!l.themeProperties&&es(l.themeProperties,Ca(c));d||(et.releaseDependencies(i.representation.structure.themes,{structure:t.data.sourceData},r),await et.ensureDependencies(u,i.representation.structure.themes,{structure:c},n),t.data.repr.setTheme(et.create(i.representation.structure.themes,{structure:c},n)));let p={...t.data.repr.props,...n.type.params};return await t.data.repr.createOrUpdate(p,c).runInContext(a),d||(l.themeProperties=Ca(c)),t.data.sourceData=e.data,z.UpdateResult.Updated})},dispose({b:e,params:t},r){if(!e||!t)return;let n=e.data.sourceData,o=r.representation.structure.registry.get(t.type.name);o.ensureCustomProperties&&o.ensureCustomProperties.detach(n),et.releaseDependencies(r.representation.structure.themes,{structure:n},t)},interpolate(e,t,r){if(e.colorTheme.name!=="uniform"||t.colorTheme.name!=="uniform")return r<=.5?e:t;let n=e.colorTheme.params.value,o=t.colorTheme.params.value,i=Ot.interpolate(n,o,r);return{type:r<=.5?e.type:t.type,colorTheme:{name:"uniform",params:{value:i}},sizeTheme:r<=.5?e.sizeTheme:t.sizeTheme}}});Bt(Xr,(e,t)=>{let{registry:r,themes:n}=t.plugin.representation.structure;return Qn(r.get(e.type.name),n,e,t)});var Zr=class{constructor(t){this.name=t;this._providers=[];this.keys=new Map;this.counts=new Map}get providers(){return this._providers}findConflict(t){let r=(o,i)=>{let a=this.keys.get(o);if(a&&a!==t)return`${this.name}: ${i} '${o}' of preset '${t.id}' is already registered by a different preset ('${a.id}')`},n=r(t.id,"id");if(n)return n;if(t.alias!==void 0)return r(t.alias,"alias")}register(t){let r=this.findConflict(t);if(r)throw new Error(r);let n=this.counts.get(t);if(n!==void 0){this.counts.set(t,n+1);return}this.counts.set(t,1),this._providers.push(t),this.keys.set(t.id,t),t.alias!==void 0&&this.keys.set(t.alias,t)}unregister(t){let r=typeof t=="string"?this.getById(t):t;if(!r)return;let n=this.counts.get(r);if(n===void 0)return;if(n>1){this.counts.set(r,n-1);return}this.counts.delete(r),this.keys.delete(r.id),r.alias!==void 0&&this.keys.delete(r.alias);let o=this._providers.indexOf(r);o>=0&&this._providers.splice(o,1)}has(t){return this.keys.has(t)}resolve(t){return this.keys.get(t)}getById(t){let r=this.keys.get(t);return r&&r.id===t?r:void 0}};var Mo=class{constructor(t){this.plugin=t;this.registry=new Zr("Structure representation preset registry")}get dataState(){return this.plugin.state.data}resolveProvider(t){return typeof t=="string"?this.registry.resolve(t):t}hasPreset(t){for(let r of this.registry.providers)if(!r.isApplicable||r.isApplicable(t,this.plugin))return!0;return!1}get providers(){return this.registry.providers}getPresets(t){if(!t)return this.providers;let r=[];for(let n of this.registry.providers)n.isApplicable&&!n.isApplicable(t,this.plugin)||r.push(n);return r}getPresetSelect(t){let r=[];for(let i of this.registry.providers)t&&i.isApplicable&&!i.isApplicable(t,this.plugin)||r.push([i.id,i.display.name,i.display.group]);let n=this.registry.resolve(this.plugin.config.get(Pe.Structure.DefaultRepresentationPreset)??"")?.id,o=r.some(i=>i[0]===n)?n:r[0]?.[0]??"";return f.Select(o,r)}getPresetsWithOptions(t){let r=[],n=Object.create(null);for(let o of this.registry.providers)o.isApplicable&&!o.isApplicable(t,this.plugin)||(r.push([o.id,o.display.name]),n[o.id]=o.params?f.Group(o.params(t,this.plugin)):f.EmptyGroup());return r.length===0?f.MappedStatic("",{"":f.EmptyGroup()}):f.MappedStatic(r[0][0],n,{options:r})}findConflict(t){return this.registry.findConflict(t)}has(t){return this.registry.has(t)}registerPreset(t){this.registry.register(t)}unregisterPreset(t){this.registry.unregister(t)}applyPreset(t,r,n){let o=this.resolveProvider(r);if(!o)throw new Error(`Preset '${r}' is not registered in this plugin`);let i=this.plugin.state.data,a=yt.resolveAndCheck(i,t);if(!a){Xt||console.warn("Applying structure repr. provider to bad cell.");return}let s=o.params?.(a.obj,this.plugin)||{},c=n||(o.params?f.getDefaultValues(s):{}),u=this.plugin.config.get(Pe.Structure.DefaultRepresentationPresetParams);c=f.merge(s,u,c);let l=ie.create(`${o.display.name}`,()=>o.apply(a,c,this.plugin));return this.plugin.runTask(l)}async addRepresentation(t,r,n){let o=this.dataState.build(),i=this.buildRepresentation(o,t,r,n);if(i)return await o.commit(),i}buildRepresentation(t,r,n,o){if(!r)return;let i=yt.resolveAndCheck(this.dataState,r)?.obj?.data;if(!i)return;let a=dc(this.plugin,i,n);return o?.tag?t.to(r).applyOrUpdateTagged(o.tag,Xr,a,{state:o?.initialState}).selector:t.to(r).apply(Xr,a,{state:o?.initialState}).selector}};var Vo=class{constructor(t){this.plugin=t;this.registry=new Zr("Trajectory hierarchy preset registry")}resolveProvider(t){return typeof t=="string"?this.registry.resolve(t):t}hasPreset(t){for(let r of this.registry.providers)if(!r.isApplicable||r.isApplicable(t,this.plugin))return!0;return!1}get providers(){return this.registry.providers}getPresets(t){if(!t)return this.providers;let r=[];for(let n of this.registry.providers)n.isApplicable&&!n.isApplicable(t,this.plugin)||r.push(n);return r}getPresetSelect(t){let r=[];for(let i of this.registry.providers)t&&i.isApplicable&&!i.isApplicable(t,this.plugin)||r.push([i.id,i.display.name]);let n=this.registry.resolve(this.plugin.config.get(Pe.Structure.DefaultHierarchyPreset)??"")?.id,o=r.some(i=>i[0]===n)?n:r[0]?.[0]??"";return f.Select(o,r)}getPresetsWithOptions(t){let r=[],n=Object.create(null);for(let o of this.registry.providers)o.isApplicable&&!o.isApplicable(t,this.plugin)||(r.push([o.id,o.display.name]),n[o.id]=o.params?f.Group(o.params(t,this.plugin)):f.EmptyGroup());return r.length===0?f.MappedStatic("",{"":f.EmptyGroup()}):f.MappedStatic(r[0][0],n,{options:r})}findConflict(t){return this.registry.findConflict(t)}has(t){return this.registry.has(t)}registerPreset(t){this.registry.register(t)}unregisterPreset(t){this.registry.unregister(t)}applyPreset(t,r,n){let o=this.resolveProvider(r);if(!o)throw new Error(`Preset '${r}' is not registered in this plugin`);let i=this.plugin.state.data,a=yt.resolveAndCheck(i,t);if(!a){Xt||console.warn("Applying hierarchy preset provider to bad cell.");return}let s=n||(o.params?f.getDefaultValues(o.params(a.obj,this.plugin)):{}),c=ie.create(`${o.display.name}`,()=>o.apply(a,s,this.plugin));return this.plugin.runTask(c)}};var up=new WeakMap;function bg(e,t){let r=up.get(e);r||(r=new Set,up.set(e,r)),!r.has(t)&&(r.add(t),console.warn(`DataFormatRegistry.add(name, provider) with a name that differs from provider.name ('${e.name??""}') is deprecated. Register DataFormatProvider.withName(provider, '${t}') instead.`))}var ko=class{constructor(){this._list=[];this._map=new Map;this._extensions=void 0;this._binaryExtensions=void 0;this._options=void 0;this._autoOrder=void 0}get types(){return this._list.map(t=>[t.name,t.provider.label])}get extensions(){if(this._extensions)return this._extensions;let t=new Set;return this._list.forEach(({provider:r})=>{r.stringExtensions?.forEach(n=>t.add(n)),r.binaryExtensions?.forEach(n=>t.add(n))}),this._extensions=t,t}get binaryExtensions(){if(this._binaryExtensions)return this._binaryExtensions;let t=new Set;return this._list.forEach(({provider:r})=>r.binaryExtensions?.forEach(n=>t.add(n))),this._binaryExtensions=t,t}get options(){if(this._options)return this._options;let t=[];return this._list.forEach(({name:r,provider:n})=>t.push([r,n.label,n.category||""])),this._options=t,t}get autoOrder(){return this._autoOrder?this._autoOrder:(this._autoOrder=this._list.map((t,r)=>({entry:t,index:r})).sort((t,r)=>(r.entry.provider.priority??0)-(t.entry.provider.priority??0)||t.index-r.index).map(({entry:t})=>t),this._autoOrder)}_invalidate(){this._extensions=void 0,this._binaryExtensions=void 0,this._options=void 0,this._autoOrder=void 0}findConflict(t){let r=this._map.get(t.name);if(r&&r.provider!==t)return`Data format registry: '${t.name}' is already registered by a different provider.`}add(t,r){let n;if(typeof t=="string"){let a=t,s=r;n=zi.withName(s,a),n!==s&&bg(s,a)}else n=t;let o=this.findConflict(n);if(o)throw new Error(o);let i=this._map.get(n.name);if(i){i.count++;return}this._invalidate(),this._map.set(n.name,{provider:n,count:1}),this._list.push({name:n.name,provider:n})}remove(t){let r=typeof t=="string"?t:t.name,n=this._map.get(r);if(!n||typeof t!="string"&&n.provider!==t||--n.count>0)return;this._invalidate(),this._map.delete(r);let o=this._list.findIndex(i=>i.name===r);o>=0&&this._list.splice(o,1)}clear(){this._invalidate(),this._map.clear(),this._list=[]}has(t){return this._map.has(t)}auto(t,r){let n=this.autoOrder,o=zi.applicable(t,r);for(let i=0,a=n.length;i<a;++i){let s=n[i].provider,c=!1;if((s.binaryExtensions?.includes(t.ext)||s.stringExtensions?.includes(t.ext))&&(c=!0),c&&o(s))return s}}get(t){let r=this._map.get(t);if(!r)throw new Error(Ra(t,this._list.length===0));return r.provider}get list(){return this._list}};function Ra(e,t){let r=`Data format '${e}' is not registered in this plugin.`;return t?`${r} No data formats are registered: plugin registries start empty, so add format entries to \`spec.registry\` (for the full built-in set, use \`DefaultRegistry\` from '@molstar/plugin/default-registry' or \`DefaultPluginSpec()\`).`:r}var Go=class{constructor(t){this.plugin=t;this.hierarchy=new Vo(this.plugin);this.representation=new Mo(this.plugin)}get dataState(){return this.plugin.state.data}async parseTrajectoryData(t,r){if(typeof r=="string"&&!this.plugin.dataFormats.has(r))throw new Error(Ra(r,this.plugin.dataFormats.list.length===0));let n=typeof r=="string"?this.plugin.dataFormats.get(r):r,{trajectory:o}=await n.parse(this.plugin,t);return o}async parseTrajectoryBlob(t,r){let n=this.plugin.dataFormats.has("mmcif")?this.plugin.dataFormats.get("mmcif"):void 0;if(!n?.parseBlob)throw new Error("parseTrajectory(blob) requires the 'mmcif' data format to be registered in this plugin.");return n.parseBlob(this.plugin,t,r)}parseTrajectory(t,r){let n=yt.resolveAndCheck(this.dataState,t);if(!n)throw new Error("Invalid data cell.");return R.Data.Blob.is(n.obj)||R.Data.ResponseBlob.is(n.obj)?this.parseTrajectoryBlob(t,r):this.parseTrajectoryData(t,r)}createModel(t,r,n){return this.dataState.build().to(t).apply(ac,r||{modelIndex:0},{state:n}).commit({revertOnError:!0})}insertModelProperties(t,r,n){return this.dataState.build().to(t).apply(Kn,r,{state:n}).commit({revertOnError:!0})}tryCreateUnitcell(t,r,n){let o=this.dataState,i=yt.resolveAndCheck(o,t)?.obj?.data;if(!i)return;let a=Bi.Provider.get(i)?.spacegroup.cell;return ps.isZero(a)?void 0:o.build().to(t).apply(Jn,r,{state:n}).commit({revertOnError:!0})}createStructure(t,r,n,o){let i=this.dataState;if(!r){let s=yt.resolveAndCheck(i,t);if(s){let c=Bi.Provider.get(s.obj?.data);(!c||c?.assemblies.length===0)&&(r={name:"model",params:{}})}}return i.build().to(t).apply(sc,{type:r||{name:"assembly",params:{}}},{state:n,tags:o}).commit({revertOnError:!0})}insertStructureProperties(t,r){return this.dataState.build().to(t).apply(Yn,r).commit({revertOnError:!0})}isComponentTransform(t){return t.transform.transformer===Zi}async tryCreateComponent(t,r,n,o){let i=this.dataState,a=i.build().to(t),s=`structure-component-${n}`,c=a.applyOrUpdateTagged(s,Zi,r,{tags:o?[...o,s]:[s]});await c.commit();let u=c.selector;if(!u.isOk||u.cell?.obj?.data.elementCount===0){await i.build().delete(u.ref).commit();return}return u}tryCreateComponentFromExpression(t,r,n,o){return this.tryCreateComponent(t,{type:{name:"expression",params:r},nullIfEmpty:!0,label:(o?.label||"").trim()},n,o?.tags)}tryCreateComponentStatic(t,r,n){return this.tryCreateComponent(t,{type:{name:"static",params:r},nullIfEmpty:!0,label:(n?.label||"").trim()},`static-${r}`,n?.tags)}tryCreateComponentFromSelection(t,r,n,o){return this.plugin.runTask(ie.create("Query Component",async i=>{let{label:a,tags:s}=o||{};a=(a||"").trim();let c=yt.resolveAndCheck(this.dataState,t)?.obj?.data;if(!c)return;let u=r.referencesCurrent?{type:{name:"bundle",params:P.Bundle.fromSelection(await r.getSelection(this.plugin,i,c))},nullIfEmpty:!0,label:a||r.label}:{type:{name:"expression",params:r.expression},nullIfEmpty:!0,label:a||r.label};return r.ensureCustomProperties&&await r.ensureCustomProperties({runtime:i,assetManager:this.plugin.managers.asset,errorContext:this.plugin.errorContext},c),this.tryCreateComponent(t,u,n,s)}))}};var Uo=class{constructor(){this.list=[];this.options=[];this.version=1;this.counts=new Map}findConflict(t){}add(t){let r=this.counts.get(t);if(r!==void 0){this.counts.set(t,r+1);return}this.counts.set(t,1),this.list.push(t),this.options.push([t,t.label,t.category]),this.version+=1}remove(t){let r=this.counts.get(t);if(r===void 0)return;if(r>1){this.counts.set(t,r-1);return}this.counts.delete(t);let n=this.list.indexOf(t);n!==-1&&(this.list.splice(n,1),this.options.splice(n,1),this.version+=1)}};var zo=class extends Me{constructor(r){super({params:{current:""},animationState:"stopped"});this.context=r;this.map=new Map;this._animations=[];this.counts=new Map;this.currentTime=0;this._current=void 0;this._params=void 0;this.events={updated:this.ev(),applied:this.ev()};this.isStopped=!0;this.isApplying=!1;this.applying=Promise.resolve()}get isEmpty(){return this._animations.length===0}get current(){return this._current}get animations(){return this._animations}get isAnimatingStateTransition(){return!!this._current&&this._current.anim.name==="built-in.animate-state-snapshot-transition"}triggerUpdate(){this.events.updated.next(void 0)}triggerApply(){this.events.applied.next(void 0)}getParams(){return this._params||(this._params={current:f.Select(this._animations[0]&&this._animations[0].name,this._animations.map(r=>[r.name,r.display.name]),{label:"Animation"})}),this._params}updateParams(r){if(this.isEmpty)return;this.updateState({params:{...this.state.params,...r}});let n=this.map.get(this.state.params.current);if(!n){j&&console.warn(`Animation '${this.state.params.current}' not found. State might be from a different plugin instance.`);return}let o=n.params(this.context);this._current={anim:n,params:o,paramValues:f.getDefaultValues(o),state:{},startedTime:-1,lastTime:0},this.triggerUpdate()}updateCurrentParams(r){this._current&&(this._current.paramValues={...this._current.paramValues,...r},this.triggerUpdate())}findConflict(r){let n=this.map.get(r.name);if(n&&n!==r)return`PluginAnimationManager: a different animation is already registered under the name '${r.name}'.`}register(r){let n=this.findConflict(r);if(n)throw new Error(n);if(this.map.has(r.name)){this.counts.set(r.name,(this.counts.get(r.name)??0)+1);return}this.counts.set(r.name,1),this.add(r)}unregister(r){if(this.map.get(r.name)!==r)return;let n=this.counts.get(r.name)??0;if(!(n<=0)){if(n>1){this.counts.set(r.name,n-1);return}this.counts.delete(r.name),this.remove(r)}}add(r){this._params=void 0,this.map.set(r.name,r),this._animations.push(r),this._animations.length===1?this.updateParams({current:r.name}):this.triggerUpdate()}remove(r){this.map.delete(r.name);let n=this._animations.indexOf(r);n>=0&&this._animations.splice(n,1),this._params=void 0;let o=this._current;if(!o||o.anim!==r){this.triggerUpdate();return}this.isStopped=!0,this.state.animationState!=="stopped"&&(this.updateState({animationState:"stopped"}),this.context.behaviors.state.isAnimating.value&&this.context.behaviors.state.isAnimating.next(!1),r.teardown&&Promise.resolve(r.teardown(o.paramValues,o.state,this.context)).catch(a=>console.error(`Failed to tear down animation '${r.name}'`,a)));let i=this._animations[0];i?this.updateParams({current:i.name}):(this._current=void 0,this.updateState({params:{...this.state.params,current:""}}),this.triggerUpdate())}async play(r,n){await this.stop(),this.map.has(r.name)||(this.counts.set(r.name,0),this.add(r)),this.updateParams({current:r.name}),this.updateCurrentParams(n),await this.start()}async tick(r,n,o){this.currentTime=r,!this.isStopped&&(n||o?await this.applyFrame(o):this.applyAsync())}async start(){if(!this._current)return;this.updateState({animationState:"playing"}),this.context.behaviors.state.isAnimating.value||this.context.behaviors.state.isAnimating.next(!0),this.triggerUpdate();let r=this._current;if(!r)return;let n=r.anim,o=n.initialState(r.paramValues,this.context);if(n.setup){let i=await n.setup(r.paramValues,o,this.context);i&&(o=i)}r.lastTime=0,r.startedTime=-1,r.state=o,this.isStopped=!1}async stop(){if(this.isStopped=!0,await this.applying,this.state.animationState!=="stopped"){let r=this._current;r?.anim.teardown&&await r.anim.teardown(r.paramValues,r.state,this.context),this.updateState({animationState:"stopped"}),this.triggerUpdate()}this.context.behaviors.state.isAnimating.value&&this.context.behaviors.state.isAnimating.next(!1)}stopStateTransitionAnimation(){if(this.isAnimatingStateTransition)return this.stop()}get isAnimating(){return this.state.animationState==="playing"}applyAsync(){this.isApplying||(this.isApplying=!0,this.applying=this.applyFrame().catch(r=>console.error("Failed to apply an animation frame",r)).finally(()=>{this.isApplying=!1}))}async applyFrame(r){let n=this._current;if(!n)return;let o=this.currentTime;n.startedTime<0&&(n.startedTime=o);let i=await n.anim.apply(n.state,{lastApplied:n.lastTime,current:o-n.startedTime,animation:r},{params:n.paramValues,plugin:this.context});i.kind==="finished"?this.stop():i.kind==="next"&&(n.state=i.state,n.lastTime=o-n.startedTime),this.triggerApply()}getSnapshot(){let r=this._current;return r?{state:this.state,current:{paramValues:r.paramValues,state:r.anim.stateSerialization?r.anim.stateSerialization.toJSON(r.state):r.state}}:{state:this.state}}setSnapshot(r){if(!this.isEmpty&&(this.updateState({animationState:r.state.animationState}),this.updateParams(r.state.params),r.current)){let n=r.state.params.current,o=this._current;if(!o||o.anim.name!==n){this.context.log.warn(`Animation '${n}' of the snapshot is not registered; skipping its state.`);return}o.paramValues=r.current.paramValues,o.state=o.anim.stateSerialization?o.anim.stateSerialization.fromJSON(r.current.state):r.current.state,this.triggerUpdate(),this.state.animationState==="playing"&&this.resume()}}async resume(){let r=this._current;if(!r)return;r.lastTime=0,r.startedTime=-1;let n=r.anim;this.context.behaviors.state.isAnimating.value||this.context.behaviors.state.isAnimating.next(!0),n.setup&&await n.setup(r.paramValues,r.state,this.context),this.isStopped=!1}};function xg(e,t){if(Array.isArray(e))for(let r of e)t(r[0],r[1],r[2]);else{let{x:r,y:n,z:o}=e,i=Math.min(r.length,n.length,o.length);for(let a=0;a<i;a++)t(r[a],n[a],o[a])}}function lp(e,t={}){let r=t.origin,n=t.minDistance??1e-6,o=n*n,i=t.sigma,a=i!==void 0&&i>0,s=a?2*i*i:1,c=Qi.createCache(3),u=c.matrix;Ye.makeZero(u);let l=x.zero(),d=0,p=0;if(xg(e,(h,g,S)=>{let y=h,C=g,T=S;r&&(y-=r[0],C-=r[1],T-=r[2]);let I=y*y+C*C+T*T;if(I<=o)return;let V=1/Math.sqrt(I);y*=V,C*=V,T*=V;let H=a?Math.exp(-I/s):1;Ye.add(u,0,0,H*y*y),Ye.add(u,0,1,H*y*C),Ye.add(u,0,2,H*y*T),Ye.add(u,1,0,H*C*y),Ye.add(u,1,1,H*C*C),Ye.add(u,1,2,H*C*T),Ye.add(u,2,0,H*T*y),Ye.add(u,2,1,H*T*C),Ye.add(u,2,2,H*T*T),l[0]+=H*y,l[1]+=H*C,l[2]+=H*T,d++,p+=H}),d===0||p<=0)return;Qi.compute(c);let m=x.create(Ye.get(u,0,0),Ye.get(u,1,0),Ye.get(u,2,0));if(!(x.magnitude(m)<1e-6))return x.normalize(m,m),x.dot(m,l)>0&&x.scale(m,m,-1),m}function dp(e,t,r){let n=r[0],o=r[1],i=r[2],a=-n*t[0]-o*t[1]-i*t[2],s=e[0],c=e[1],u=e[2];return(n*s+o*c+i*u+a)/Math.sqrt(n*n+o*o+i*i)}function vg(e,t,r,n){let o=dp(e,t,n);return{aroundX:dp(e,t,r)<0,aroundY:o<0}}function pp(e,t,r){if(!e.canvas3d)return;let{origin:n,dirA:o,dirB:i,dirC:a}=r.principalAxes.boxAxes,s=x.clone(o),c=x.clone(a);if(r.positionToFlip){let{aroundX:l,aroundY:d}=vg(r.positionToFlip,n,s,i);l&&(x.negate(c,c),x.negate(s,s)),d&&x.negate(c,c)}let u=x.scale(x(),n,-100);return x.dot(u,s)<=0&&x.negate(c,c),x.dot(x.unitY,c)<=0&&x.negate(s,s),e.canvas3d.camera.getFocus(n,t,s,c,Ks.createDefaultSnapshot())}function mp(e,t){if(!e.canvas3d)return;let r=t.targets?.map(o=>{if(o.center!==void 0&&o.radius!==void 0)return _e.create(o.center,o.radius);let i=o.targetRef!==void 0?Cg(e,o.targetRef):fp(e);if(!i)return;let a=o.center??i.center,s=o.radius??i.radius*(o.radiusFactor??1)+(o.extraRadius??0);return _e.create(a,s)}).filter(o=>o!==void 0),n=r&&r.length>0?Pa(r):fp(e);return Tg(e.canvas3d.camera,{center:n.center,radius:Math.max(n.radius,t.minRadius??0),up:t.up,direction:t.direction})}var Sg=x();function Tg(e,t){let r=t.center,n=Math.max(t.radius,.01),o=t.direction??x.sub(x(),e.target,e.position),i=x.orthogonalize(x(),o,t.up??e.up),a=e.getTargetDistance(n),s=x.setMagnitude(Sg,o,a),c=x.sub(x(),r,s);return{target:r,position:c,up:i,radius:n}}function Cg(e,t){let r=hp([],e,t);if(r.length!==0)return r.length===1?r[0]:Pa(r)}function hp(e,t,r){let n=t.state.data.cells.get(r),o=Rg(t,n);return o?e.push(...o):t.state.data.tree.children.get(r).forEach(a=>hp(e,t,a)),e}function Rg(e,t){let r=t?.obj;if(r){if(!r.data){console.warn("Focus: no data");return}if(r.data instanceof Qe){let o=be.getDecorated(e.state.data,t.transform.ref)?.obj?.data??r?.data;if(o.isEmpty)return[];let i=Z.getBoundingSphere(Qe.Loci(o));return i?[i]:[]}else if(R.isRepresentation3D(r)){let n=[];for(let o of r.data.repr.renderObjects){let i=o.values.boundingSphere.ref.value;i.radius>0&&n.push(i)}return n}}}function fp(e){let r=Pg(e,!1).map(n=>n.values.boundingSphere.ref.value).filter(n=>n.radius>0);return Pa(r)}function Pg(e,t){let r=Array.from(e.state.data.cells.values()).filter(o=>o.obj&&R.isRepresentation3D(o.obj));return t||(r=r.filter(o=>!o.state.isHidden)),r.flatMap(o=>o.obj.data.repr.renderObjects)}var Kr;function Pa(e){Kr??=new Ir("98"),Kr.reset();for(let t of e)Kr.includeSphere(t);Kr.finishedIncludeStep();for(let t of e)Kr.radiusSphere(t);return Kr.getSphere()}var Dg=3,$t={identity:K.create(1,0,0,0,1,0,0,0,1),rotX90:K.create(1,0,0,0,0,1,0,-1,0),rotY90:K.create(0,0,-1,0,1,0,1,0,0),rotZ90:K.create(0,1,0,-1,0,0,0,0,1),rotX270:K.create(1,0,0,0,0,-1,0,1,0),rotY270:K.create(0,0,1,0,1,0,-1,0,0),rotZ270:K.create(0,-1,0,1,0,0,0,0,1),rotX180:K.create(1,0,0,0,-1,0,0,0,-1),rotY180:K.create(-1,0,0,0,1,0,0,0,-1),rotZ180:K.create(-1,0,0,0,-1,0,0,0,1)};function gp(e,t){let r=Eg(e,Dg);return _g(r,t)}function _g(e,t){if(e.length===0)return console.warn("Skipping PCA, no atoms"),{rotation:$t.identity,origin:x.zero()};let r=Mn.calculateMomentsAxes(e),n=Mn.calculateNormalizedAxes(r),o=Ig(n.dirA,n.dirB,n.dirC);Og(o);let i=t?Ag(o,t):wg(e,o,r.origin);return K.mul(o,i,o),{rotation:o,origin:n.origin}}function Eg(e,t){let r;return r=Da(e,{onlyTrace:!0}),r.length>=3*t||(r=Da(e,{skipHydrogens:!0,skipWater:!0}),r.length>=3*t)||(r=Da(e,{})),r}function Da(e,t){let{onlyTrace:r,skipHydrogens:n,skipWater:o}=t,{x:i,y:a,z:s,type_symbol:c,label_comp_id:u}=Vn.atom,l=[];for(let d of e){let p=P.Location.create(d);for(let m of d.units){p.unit=m;let h=r?m.polymerElements:m.elements;for(let g=0;g<h.length;g++)p.element=h[g],!(n&&c(p)==="H")&&(o&&u(p)==="HOH"||l.push(i(p),a(p),s(p)))}}return l}function Ag(e,t){let r=$t.identity,n=0,o=K();for(let i of[$t.identity,$t.rotX180,$t.rotY180,$t.rotZ180]){let a=K.innerProduct(K.mul(o,i,e),t);a>n&&(r=i,n=a)}return r}function wg(e,t,r){let n=x.create(K.getValue(t,0,0),K.getValue(t,0,1),K.getValue(t,0,2)),o=x.create(K.getValue(t,1,0),K.getValue(t,1,1),K.getValue(t,1,2)),i=x.create(K.getValue(t,2,0),K.getValue(t,2,1),K.getValue(t,2,2)),a=Math.floor(e.length/3),s=x(),c=0,u=0,l=0;for(let m=0;m<a;m++)x.fromArray(s,e,3*m),x.sub(s,s,r),c+=m*x.dot(s,n),u+=m*x.dot(s,o),l+=Lg(m,a)*x.dot(s,i);let d=l<0,p=d?c+u<0:c-u<0;return p&&d?$t.rotY180:d?$t.rotX180:p?$t.rotZ180:$t.identity}function Lg(e,t){let r=Math.floor(t/2);return e<r?t%2?r-e:r-e-1:e-r}function Ig(e,t,r){let n=K();return K.setValue(n,0,0,e[0]),K.setValue(n,0,1,e[1]),K.setValue(n,0,2,e[2]),K.setValue(n,1,0,t[0]),K.setValue(n,1,1,t[1]),K.setValue(n,1,2,t[2]),K.setValue(n,2,0,r[0]),K.setValue(n,2,1,r[1]),K.setValue(n,2,2,r[2]),n}function Og(e){K.determinant(e)<0&&(K.setValue(e,2,0,-K.getValue(e,2,0)),K.setValue(e,2,1,-K.getValue(e,2,1)),K.setValue(e,2,2,-K.getValue(e,2,2)))}function _a(e,t){let r=K.invert(K(),t),n=x.distance(e.position,e.target),o=x.transformMat3(x(),x.create(0,0,n),r),i=x.transformMat3(x(),x.create(0,1,0),r),a=x.add(x(),e.target,o);return{...e,position:a,up:i}}var Cr={minRadius:1,extraRadius:4,durationMs:250,zoomOut:!1,zoomOutOptions:{durationFactor:3.5},easing:"linear",trajectory:"linear"},Fg={...Cr,optimizeDirection:!1,optimizeDirectionUp:"current"},No=class{constructor(t){this.plugin=t;this.boundaryHelper=new Ir("98")}transformedLoci(t){if(P.Loci.is(t)){let r=this.plugin.helpers.substructureParent.get(t.structure)?.obj?.data;r&&(t=P.Loci.remap(t,r))}return t}focusRenderObjects(t,r){if(!t)return;let n=[];for(let o of t){let i=o.values.boundingSphere.ref.value;i.radius!==0&&n.push(i)}this.focusSpheres(n,o=>o,r)}getFocusSphere(t){let r;if(Array.isArray(t)&&t.length>1){let n=[];for(let o of t){let i=Z.getBoundingSphere(this.transformedLoci(o));i&&n.push(i)}if(n.length===0)return;this.boundaryHelper.reset();for(let o of n)this.boundaryHelper.includeSphere(o);this.boundaryHelper.finishedIncludeStep();for(let o of n)this.boundaryHelper.radiusSphere(o);r=this.boundaryHelper.getSphere()}else if(Array.isArray(t)){if(t.length===0)return;r=Z.getBoundingSphere(this.transformedLoci(t[0]))}else r=Z.getBoundingSphere(this.transformedLoci(t));return r}getFocusLociOptimized(t,r){let{canvas3d:n}=this.plugin;if(!n)return;let o=this.getFocusSphere(t);if(!o)return;let i=Array.isArray(t)?t:[t],a={x:[],y:[],z:[]},s=x(),{extraRadius:c,minRadius:u}={...Cr,...r},l=Math.max(o.radius+c,u);if(l<=.001)return this.getFocusSphereSnapshot(o,r);let d=Vn.entity.type;for(let h of i){if(!P.Loci.is(h))continue;let g=P.Loci.extendToRadius(h,l);P.Loci.forEachLocation(g,S=>{d(S)!=="water"&&(S.unit.conformation.position(S.element,s),a.x.push(s[0]),a.y.push(s[1]),a.z.push(s[2]))})}if(a.x.length===0)return this.getFocusSphereSnapshot(o,r);let p=lp(a,{origin:o.center,minDistance:.001,sigma:o.radius});if(!p)return this.getFocusSphereSnapshot(o,r);x.negate(p,p);let m=r?.optimizeDirectionUp==="default"?x.unitY:x.is(r?.optimizeDirectionUp)?r.optimizeDirectionUp:void 0;return m?n.camera.getInvariantFocus(o.center,l,m,p):n.camera.getFocus(o.center,l,void 0,p)}getFocusLociBase(t,r){let n=this.getFocusSphere(t);if(n)return this.getFocusSphereSnapshot(n,r)}focusLoci(t,r){if(!this.plugin.canvas3d)return;let n={...Fg,...r},o;n.optimizeDirection?o=this.getFocusLociOptimized(t,n):o=this.getFocusLociBase(t,n),this.focusSnapshot(o,n)}focusSpheres(t,r,n){let o=[];for(let i of t){let a=r(i);a&&o.push(a)}if(o.length!==0){if(o.length===1)return this.focusSphere(o[0],n);this.boundaryHelper.reset();for(let i of o)this.boundaryHelper.includeSphere(i);this.boundaryHelper.finishedIncludeStep();for(let i of o)this.boundaryHelper.radiusSphere(i);this.focusSphere(this.boundaryHelper.getSphere(),n)}}getFocusSphereSnapshot(t,r){let{canvas3d:n}=this.plugin;if(!n)return;let{extraRadius:o,minRadius:i}={...Cr,...r},a=Math.max(t.radius+o,i);return r?.principalAxes?pp(this.plugin,a,r):n.camera.getFocus(t.center,a)}focusSnapshot(t,r){if(!this.plugin.canvas3d||!t)return;let n=r?.durationMs??Cr.durationMs;if(!r?.zoomOut){this.plugin.canvas3d.requestCameraReset({snapshot:t,durationMs:n,easing:r?.easing,trajectory:r?.trajectory});return}let o=this.plugin.canvas3d.boundingSphere,i=this.getFocusSphereSnapshot(o,r),a=this.plugin.canvas3d?.camera.getSnapshot(),s=x.distance(a.position,i.position),c=x.distance(i.position,t.position),u=s/(s+c),d=1+(r?.zoomOutOptions?.durationFactor??Cr.zoomOutOptions.durationFactor)*Math.min(u,.5);this.plugin.canvas3d.requestCameraReset({snapshot:t,durationMs:d*n,easing:r.easing,trajectory:r.trajectory,keyframes:u>.05?[{t:u,snapshot:i,easing:"cubic-out"},{t:1,snapshot:t,easing:"cubic-in"}]:void 0})}focusSphere(t,r){let{canvas3d:n}=this.plugin;if(!n)return;let o=this.getFocusSphereSnapshot(t,r);o&&this.focusSnapshot(o,r)}focusObject(t){if(!this.plugin.canvas3d)return;let r=mp(this.plugin,{...t,targets:t.targets?.map(n=>({...n,extraRadius:n.extraRadius??Cr.extraRadius})),minRadius:t.minRadius??Cr.minRadius});this.focusSnapshot(r,t)}orientAxes(t,r,n){if(!this.plugin.canvas3d)return;t||(t=this.plugin.state.data.selectQ(c=>c.ofType(R.Molecule.Structure)).filter(c=>c.obj&&!c.transform.transformer.definition.isDecorator&&!c.obj.data.parent).map(c=>c.obj?.data).filter(c=>!!c));let{rotation:o}=gp(t),i=_a(this.plugin.canvas3d.camera.getSnapshot(),o);this.setSnapshot(i,r,n)}resetAxes(t,r){if(!this.plugin.canvas3d)return;let n=_a(this.plugin.canvas3d.camera.getSnapshot(),K.Identity);this.setSnapshot(n,t,r)}setSnapshot(t,r,n){this.plugin.canvas3d?.requestCameraReset({snapshot:t,durationMs:r,...n})}reset(t,r,n){this.plugin.canvas3d?.requestCameraReset({snapshot:t,durationMs:r,...n})}};var Yr=class e extends Me{constructor(r,n={}){super({props:{...f.getDefaultValues(e.Params),...n}});this.plugin=r;this.clickOwners=new e.ClickOwners;this._props=f.getDefaultValues(e.Params);this.events={propsUpdated:this.ev()};this.lociSelects=new e.LociSelectManager(r,this._props),this.lociHighlights=new e.LociHighlightManager(r,this._props)}get props(){return{...this.state.props}}setProps(r){let n=this.props,o={...this.state.props,...r};ns(n,o)||(this.updateState({props:o}),this.lociSelects.setProps(o),this.lociHighlights.setProps(o),this.events.propsUpdated.next(void 0))}dispose(){super.dispose(),this.lociSelects.dispose(),this.lociHighlights.dispose()}};(i=>{class e{constructor(){this.owners=[]}claim(s){return this.owners.push(s),()=>{let c=this.owners.indexOf(s);c>=0&&this.owners.splice(c,1)}}owns(s){return!!s&&this.owners.some(c=>c(s))}}i.ClickOwners=e,i.Params={granularity:f.Select("residue",Z.GranularityOptions,{label:"Picking Level",description:"Controls if selections are expanded upon picking to whole residues, chains, structures, instances, or left as atoms and coarse elements"})};class r{constructor(s,c={}){this.ctx=s;this.providers=[];this.props=f.getDefaultValues(i.Params);this.sel=s.managers.structure.selection,this.setProps(c)}setProps(s){Object.assign(this.props,s)}addProvider(s){this.providers.push(s)}removeProvider(s){this.providers=this.providers.filter(c=>c!==s)}normalizedLoci(s,c,u=!1){let{loci:l,repr:d}=s,p=c?this.props.granularity:void 0;return{loci:Z.normalize(l,p,u),repr:d}}mark(s,c,u=!1){if(!Z.isEmpty(s.loci))for(let l of this.providers)l(s,c,u)}dispose(){this.providers.length=0,this.sel.dispose()}}i.LociMarkManager=r;class n extends r{constructor(){super(...arguments);this.prev=[];this.clearHighlights=(c=!1)=>{for(let u of this.prev)this.mark(u,2,c);this.prev.length=0}}isHighlighted(c){for(let u of this.prev)if(ve.Loci.areEqual(u,c))return!0;return!1}addHighlight(c){this.mark(c,1),this.prev.push(c)}highlight(c,u=!0){let l=this.normalizedLoci(c,u);this.isHighlighted(l)||this.addHighlight(l)}highlightOnly(c,u=!0){let l=this.normalizedLoci(c,u);this.isHighlighted(l)||(Z.isEmpty(l.loci)?this.clearHighlights():(this.clearHighlights(!0),this.addHighlight(l)))}highlightOnlyExtend(c,u=!0){let l=this.normalizedLoci(c,u);if(P.Loci.is(l.loci)){let p={loci:(this.ctx.selectionMode?this.sel.tryGetRange(l.loci):this.ctx.managers.structure.focus.tryGetRange(l.loci))??l.loci,repr:l.repr};this.isHighlighted(p)||(Z.isEmpty(p.loci)?this.clearHighlights():(this.clearHighlights(!0),this.addHighlight(p)))}}dispose(){super.dispose(),this.prev.length=0}}i.LociHighlightManager=n;class o extends r{toggle(s,c=!0){if(Z.isEmpty(s.loci))return;let u=this.normalizedLoci(s,c,!0);P.Loci.is(u.loci)?this.toggleSel(u):super.mark(u,16)}toggleExtend(s,c=!0){if(Z.isEmpty(s.loci))return;let u=this.normalizedLoci(s,c,!0);if(P.Loci.is(u.loci)){let l=this.sel.tryGetRange(u.loci)||u.loci;this.toggleSel({loci:l,repr:u.repr})}}select(s,c=!0){let u=this.normalizedLoci(s,c,!0);P.Loci.is(u.loci)&&this.sel.modify("add",u.loci),this.mark(u,4)}selectJoin(s,c=!0){let u=this.normalizedLoci(s,c,!0);P.Loci.is(u.loci)&&this.sel.modify("intersect",u.loci),this.mark(u,4)}selectOnly(s,c=!0){let u=this.normalizedLoci(s,c,!0);P.Loci.is(u.loci)&&(this.mark({loci:Qe.Loci(u.loci.structure),repr:u.repr},8),this.sel.modify("set",u.loci)),this.mark(u,4)}deselect(s,c=!0){let u=this.normalizedLoci(s,c,!0);P.Loci.is(u.loci)&&this.sel.modify("remove",u.loci),this.mark(u,8)}deselectAll(){this.sel.clear(),this.mark({loci:Us},8)}deselectAllOnEmpty(s){Je(s.loci)&&this.deselectAll()}mark(s,c){let{loci:u}=s;if(!Z.isEmpty(u))if(P.Loci.is(u)){let l=this.sel.getLoci(u.structure);super.mark({loci:Qe.Loci(u.structure)},8,!Z.isEmpty(l)),super.mark({loci:l},4)}else super.mark(s,c)}toggleSel(s){this.sel.has(s.loci)?(this.sel.modify("remove",s.loci),this.mark(s,8)):(this.sel.modify("add",s.loci),this.mark(s,4))}}i.LociSelectManager=o})(Yr||={});var jo=class{constructor(t){this.ctx=t;this.providers=[];this.counts=new Map;this.locis=[];this.isDirty=!1;this.labels=[];this.groupedLabels=new Map;t.managers.interactivity.lociHighlights.addProvider((r,n,o)=>{this.providers.length!==0&&(this.mark(r,n),o||this.showLabels())})}clearProviders(){this.providers=[],this.counts.clear(),this.isDirty=!0,this.showLabels()}findConflict(t){}addProvider(t){let r=this.counts.get(t);if(r!==void 0){this.counts.set(t,r+1);return}this.counts.set(t,1),this.providers.push(t),this.providers.sort((n,o)=>(o.priority||0)-(n.priority||0)),this.isDirty=!0,this.showLabels()}removeProvider(t){let r=this.counts.get(t);if(r!==void 0){if(r>1){this.counts.set(t,r-1);return}this.counts.delete(t),this.providers=this.providers.filter(n=>n!==t),this.isDirty=!0,this.showLabels()}}refresh(){this.locis.length!==0&&(this.isDirty=!0,this.showLabels())}mark(t,r){let n=this.locis.findIndex(o=>ve.Loci.areEqual(t,o));n===-1&&r===1?(this.locis.push(t),this.isDirty=!0):n!==-1&&r===2&&(br(this.locis,n),this.isDirty=!0)}showLabels(){this.ctx.behaviors.labels.highlight.next({labels:this.getLabels()})}getLabels(){if(this.isDirty){this.groupedLabels.clear(),this.labels.length=0;for(let t of this.providers)for(let r of this.locis){if(Z.isEmpty(r.loci))continue;let n=t.label(r.loci,r.repr);if(n){let o=t.group?t.group(n):n.toString(),i=this.groupedLabels.get(o);i?i.push(n):this.groupedLabels.set(o,[n])}}this.labels.length=0,this.groupedLabels.forEach((t,r)=>{let n=t.length,o=n>1&&t[0]!==t[1]?r:t[0];this.labels.push(n===1?o:`${o} <small>|| \xD7 ${n}</small>`)}),this.isDirty=!1}return this.labels}};var Bg={lineOfSightDistFactor:f.Numeric(1,{min:0,max:3,step:.1})},Mg={distanceMax:f.Numeric(5,{min:0,max:8,step:.1})},Vg={distanceMax:f.Numeric(5.5,{min:1,max:8,step:.1}),offsetMax:f.Numeric(2,{min:0,max:4,step:.1}),angleDevMax:f.Numeric(30,{min:0,max:180,step:1})},kg={distanceMax:f.Numeric(6,{min:1,max:8,step:.1}),offsetMax:f.Numeric(2,{min:0,max:4,step:.1})},Gg={distanceMax:f.Numeric(4,{min:1,max:5,step:.1}),angleMax:f.Numeric(30,{min:0,max:60,step:1})},xp={distanceMax:f.Numeric(3.5,{min:1,max:5,step:.1}),backbone:f.Boolean(!0,{description:"Include backbone-to-backbone hydrogen bonds"}),accAngleDevMax:f.Numeric(45,{min:0,max:180,step:1},{description:"Max deviation from ideal acceptor angle"}),ignoreHydrogens:f.Boolean(!1,{description:"Ignore explicit hydrogens in geometric constraints"}),donAngleDevMax:f.Numeric(45,{min:0,max:180,step:1},{description:"Max deviation from ideal donor angle"}),accOutOfPlaneAngleMax:f.Numeric(90,{min:0,max:180,step:1}),donOutOfPlaneAngleMax:f.Numeric(45,{min:0,max:180,step:1})},Ug={...xp,water:f.Boolean(!1,{description:"Include water-to-water hydrogen bonds"}),sulfurDistanceMax:f.Numeric(4.1,{min:1,max:5,step:.1})},zg={...xp},Ng={distanceMax:f.Numeric(4,{min:1,max:5,step:.1})},jg={distanceMax:f.Numeric(3,{min:1,max:5,step:.1})},Wg={backbone:f.Boolean(!0,{description:"Include backbone hydrogen bonds"}),ignoreHydrogens:f.Boolean(!0,{description:"Ignore explicit hydrogens in geometric constraints"}),legDistMin:f.Numeric(2.5,{min:1,max:4,step:.1},{description:"Minimum leg distance (\xC5)"}),legDistMax:f.Numeric(4.1,{min:1,max:6,step:.1},{description:"Maximum leg distance (\xC5)"}),donAngleDevMax:f.Numeric(80,{min:0,max:180,step:1},{description:"Max deviation from ideal donor angle"}),accAngleDevMax:f.Numeric(50,{min:0,max:180,step:1},{description:"Max deviation from ideal acceptor angle"}),donOutOfPlaneAngleMax:f.Numeric(45,{min:0,max:180,step:1}),accOutOfPlaneAngleMax:f.Numeric(90,{min:0,max:180,step:1}),omegaMin:f.Numeric(71,{min:0,max:180,step:1},{description:"Minimum A\u2013W\u2013B angle (\xB0)"}),omegaMax:f.Numeric(140,{min:0,max:180,step:1},{description:"Maximum A\u2013W\u2013B angle (\xB0)"})},yp={ionic:Mg,"pi-stacking":Vg,"cation-pi":kg,"halogen-bonds":Gg,"hydrogen-bonds":Ug,"weak-hydrogen-bonds":zg,hydrophobic:Ng,"metal-coordination":jg};function Hg(e=[]){let t=Object.create(null);return Object.keys(yp).forEach(r=>{t[r]=f.MappedStatic(e.includes(r)?"on":"off",{on:f.Group(yp[r]),off:f.Group({})},{cycle:!0})}),t}var $g=Hg(["cation-pi","pi-stacking","hydrogen-bonds","halogen-bonds","metal-coordination"]),bp={"water-bridges":Wg};function qg(e=[]){let t=Object.create(null);return Object.keys(bp).forEach(r=>{t[r]=f.MappedStatic(e.includes(r)?"on":"off",{on:f.Group(bp[r]),off:f.Group({})},{cycle:!0})}),t}var Xg=qg([]),vp={providers:f.Group($g,{isFlat:!0}),bridges:f.Group(Xg,{isFlat:!0}),contacts:f.Group(Bg,{label:"Advanced Options"})};var Zg=ge.BuiltIn({name:"overpaint-structure-representation-3d-from-script",display:"Overpaint 3D Representation",from:R.Molecule.Structure.Representation3D,to:R.Molecule.Structure.Representation3DState,params:()=>({layers:f.ObjectList({script:f.Script(ze("(sel.atom.all)","mol-script")),color:f.Color(Ee.blueviolet),clear:f.Boolean(!1)},e=>`${e.clear?"Clear":Ot.toRgbString(e.color)}`,{defaultValue:[{script:ze("(sel.atom.all)","mol-script"),color:Ee.blueviolet,clear:!1}]})})})({canAutoUpdate(){return!0},apply({a:e,params:t}){let r=e.data.sourceData,n=e.data.repr.geometryVersion,o=Ne.ofScript(t.layers,r);return new R.Molecule.Structure.Representation3DState({state:{overpaint:o},initialState:{overpaint:Ne.Empty},info:{structure:r,geometryVersion:n},repr:e.data.repr},{label:`Overpaint (${o.layers.length} Layers)`})},update({a:e,b:t,newParams:r,oldParams:n}){let o=t.data.info,i=e.data.sourceData,a=i!==o.structure;if(e.data.repr!==t.data.repr)return z.UpdateResult.Recreate;let s=e.data.repr.geometryVersion;if(s!==o.geometryVersion&&xt(e.data.repr.props))return z.UpdateResult.Recreate;let c=t.data.state.overpaint,u=Ne.ofScript(r.layers,i);return!a&&Ne.areEqual(c,u)?z.UpdateResult.Unchanged:(o.geometryVersion=s,o.structure=i,t.data.state.overpaint=u,t.data.repr=e.data.repr,t.label=`Overpaint (${u.layers.length} Layers)`,z.UpdateResult.Updated)}});var Wo=ge.BuiltIn({name:"overpaint-structure-representation-3d-from-bundle",display:"Overpaint 3D Representation",from:R.Molecule.Structure.Representation3D,to:R.Molecule.Structure.Representation3DState,params:()=>({layers:f.ObjectList({bundle:f.Value(P.Bundle.Empty),color:f.Color(Ee.blueviolet),clear:f.Boolean(!1)},e=>`${e.clear?"Clear":Ot.toRgbString(e.color)}`,{defaultValue:[{bundle:P.Bundle.Empty,color:Ee.blueviolet,clear:!1}],isHidden:!0})})})({canAutoUpdate(){return!0},apply({a:e,params:t}){let r=e.data.sourceData,n=e.data.repr.geometryVersion,o=Ne.ofBundle(t.layers,r);return new R.Molecule.Structure.Representation3DState({state:{overpaint:o},initialState:{overpaint:Ne.Empty},info:{structure:r,geometryVersion:n},repr:e.data.repr},{label:`Overpaint (${o.layers.length} Layers)`})},update({a:e,b:t,newParams:r,oldParams:n}){let o=t.data.info,i=e.data.sourceData,a=i!==o.structure;if(e.data.repr!==t.data.repr)return z.UpdateResult.Recreate;let s=e.data.repr.geometryVersion;if(s!==o.geometryVersion&&xt(e.data.repr.props))return z.UpdateResult.Recreate;let c=t.data.state.overpaint;if(!a&&Ze(n.layers,r.layers))return z.UpdateResult.Unchanged;let u=Ne.ofBundle(r.layers,i);return!a&&Ne.areEqual(c,u)?z.UpdateResult.Unchanged:(o.geometryVersion=s,o.structure=i,t.data.state.overpaint=u,t.data.repr=e.data.repr,t.label=`Overpaint (${u.layers.length} Layers)`,z.UpdateResult.Updated)}});$e(Zg,"overpaint");$e(Wo,"overpaint");var Tp="overpaint-controls";async function Ea(e,t,r,n,o){await Kg(e,t,async(i,a,s)=>{if(o&&o.length>0&&!o.includes(a.params.values.type.name))return;let c=a.obj.data.sourceData,u=await n(c.root);if(Z.isEmpty(u)||Je(u))return;let l={bundle:P.Bundle.fromLoci(u),color:r===-1?0:r,clear:r===-1};if(s){let d=[...s.params.values.layers,l],p=Sp(d,c);i.to(s).update(Ne.toBundle(p))}else{let d=Sp([l],c);i.to(a.transform.ref).apply(Wo,Ne.toBundle(d),{tags:Tp})}})}async function Kg(e,t,r){let n=e.state.data,o=n.build();for(let i of t)for(let a of i.representations){let s=n.select(be.Generators.ofTransformer(Wo,a.cell.transform.ref).withTag(Tp));await r(o,a.cell,s[0])}return o.commit({doNotUpdateCurrent:!0})}function Sp(e,t){let r=Ne.ofBundle(e,t.root),n=Ne.merge(r);return Ne.filter(n,t)}var Rp="clipping-controls";async function Pp(e,t,r,n,o){await Yg(e,t,async(i,a,s)=>{if(o&&o.length>0&&!o.includes(a.params.values.type.name))return;let c=a.obj.data.sourceData,u=await n(c.root);if(Z.isEmpty(u)||Je(u))return;let l={bundle:P.Bundle.fromLoci(u),groups:r};if(s){let d=[...s.params.values.layers,l],p=Cp(d,c);i.to(s).update(Jt.toBundle(p))}else{let d=Cp([l],c);i.to(a.transform.ref).apply(Ji,Jt.toBundle(d),{tags:Rp})}})}async function Yg(e,t,r){let n=e.state.data,o=n.build();for(let i of t)for(let a of i.representations){let s=n.select(be.Generators.ofTransformer(Ji,a.cell.transform.ref).withTag(Rp));await r(o,a.cell,s[0])}return o.commit({doNotUpdateCurrent:!0})}function Cp(e,t){let r=Jt.ofBundle(e,t.root),n=Jt.merge(r);return Jt.filter(n,t)}var Qg=ge.BuiltIn({name:"transparency-structure-representation-3d-from-script",display:"Transparency 3D Representation",from:R.Molecule.Structure.Representation3D,to:R.Molecule.Structure.Representation3DState,params:()=>({layers:f.ObjectList({script:f.Script(ze("(sel.atom.all)","mol-script")),value:f.Numeric(.5,{min:0,max:1,step:.01},{label:"Transparency"})},e=>`Transparency (${e.value})`,{defaultValue:[{script:ze("(sel.atom.all)","mol-script"),value:.5}]})})})({canAutoUpdate(){return!0},apply({a:e,params:t}){let r=e.data.sourceData,n=e.data.repr.geometryVersion,o=je.ofScript(t.layers,r);return new R.Molecule.Structure.Representation3DState({state:{transparency:o},initialState:{transparency:je.Empty},info:{structure:r,geometryVersion:n},repr:e.data.repr},{label:`Transparency (${o.layers.length} Layers)`})},update({a:e,b:t,newParams:r,oldParams:n}){let o=t.data.info,i=e.data.sourceData,a=i!==o.structure;if(e.data.repr!==t.data.repr)return z.UpdateResult.Recreate;let s=e.data.repr.geometryVersion;if(s!==o.geometryVersion&&xt(e.data.repr.props))return z.UpdateResult.Recreate;let c=t.data.state.transparency,u=je.ofScript(r.layers,i);return!a&&je.areEqual(c,u)?z.UpdateResult.Unchanged:(o.geometryVersion=s,o.structure=i,t.data.state.transparency=u,t.data.repr=e.data.repr,t.label=`Transparency (${u.layers.length} Layers)`,z.UpdateResult.Updated)}});var Ho=ge.BuiltIn({name:"transparency-structure-representation-3d-from-bundle",display:"Transparency 3D Representation",from:R.Molecule.Structure.Representation3D,to:R.Molecule.Structure.Representation3DState,params:()=>({layers:f.ObjectList({bundle:f.Value(P.Bundle.Empty),value:f.Numeric(.5,{min:0,max:1,step:.01},{label:"Transparency"})},e=>`Transparency (${e.value})`,{defaultValue:[{bundle:P.Bundle.Empty,value:.5}],isHidden:!0})})})({canAutoUpdate(){return!0},apply({a:e,params:t}){let r=e.data.sourceData,n=e.data.repr.geometryVersion,o=je.ofBundle(t.layers,r);return new R.Molecule.Structure.Representation3DState({state:{transparency:o},initialState:{transparency:je.Empty},info:{structure:r,geometryVersion:n},repr:e.data.repr},{label:`Transparency (${o.layers.length} Layers)`})},update({a:e,b:t,newParams:r,oldParams:n}){let o=t.data.info,i=e.data.sourceData,a=i!==o.structure;if(e.data.repr!==t.data.repr)return z.UpdateResult.Recreate;let s=e.data.repr.geometryVersion;if(s!==o.geometryVersion&&xt(e.data.repr.props))return z.UpdateResult.Recreate;let c=t.data.state.transparency;if(!a&&Ze(n.layers,r.layers))return z.UpdateResult.Unchanged;let u=je.ofBundle(r.layers,i);return!a&&je.areEqual(c,u)?z.UpdateResult.Unchanged:(o.geometryVersion=s,o.structure=i,t.data.state.transparency=u,t.data.repr=e.data.repr,t.label=`Transparency (${u.layers.length} Layers)`,z.UpdateResult.Updated)}});$e(Qg,"transparency");$e(Ho,"transparency");var _p="transparency-controls";async function Ep(e,t,r,n,o){await Jg(e,t,async(i,a,s)=>{if(o&&o.length>0&&!o.includes(a.params.values.type.name))return;let c=a.obj.data.sourceData,u=await n(c.root);if(Z.isEmpty(u)||Je(u))return;let l={bundle:P.Bundle.fromLoci(u),value:r};if(s){let d=[...s.params.values.layers,l],p=Dp(d,c);i.to(s).update(je.toBundle(p))}else{let d=Dp([l],c);i.to(a.transform.ref).apply(Ho,je.toBundle(d),{tags:_p})}})}async function Jg(e,t,r){let n=e.state.data,o=n.build();for(let i of t)for(let a of i.representations){let s=n.select(be.Generators.ofTransformer(Ho,a.cell.transform.ref).withTag(_p));await r(o,a.cell,s[0])}return o.commit({doNotUpdateCurrent:!0})}function Dp(e,t){let r=je.ofBundle(e,t.root),n=je.merge(r);return je.filter(n,t)}var ey=ge.BuiltIn({name:"substance-structure-representation-3d-from-script",display:"Substance 3D Representation",from:R.Molecule.Structure.Representation3D,to:R.Molecule.Structure.Representation3DState,params:()=>({layers:f.ObjectList({script:f.Script(ze("(sel.atom.all)","mol-script")),material:pt.getParam(),clear:f.Boolean(!1)},e=>`${e.clear?"Clear":pt.toString(e.material)}`,{defaultValue:[{script:ze("(sel.atom.all)","mol-script"),material:pt({roughness:1}),clear:!1}]})})})({canAutoUpdate(){return!0},apply({a:e,params:t}){let r=e.data.sourceData,n=e.data.repr.geometryVersion,o=We.ofScript(t.layers,r);return new R.Molecule.Structure.Representation3DState({state:{substance:o},initialState:{substance:We.Empty},info:{structure:r,geometryVersion:n},repr:e.data.repr},{label:`Substance (${o.layers.length} Layers)`})},update({a:e,b:t,newParams:r,oldParams:n}){let o=t.data.info,i=e.data.sourceData,a=i!==o.structure;if(e.data.repr!==t.data.repr)return z.UpdateResult.Recreate;let s=e.data.repr.geometryVersion;if(s!==o.geometryVersion&&xt(e.data.repr.props))return z.UpdateResult.Recreate;let c=t.data.state.substance,u=We.ofScript(r.layers,i);return!a&&We.areEqual(c,u)?z.UpdateResult.Unchanged:(o.geometryVersion=s,o.structure=i,t.data.state.substance=u,t.data.repr=e.data.repr,t.label=`Substance (${u.layers.length} Layers)`,z.UpdateResult.Updated)}});var $o=ge.BuiltIn({name:"substance-structure-representation-3d-from-bundle",display:"Substance 3D Representation",from:R.Molecule.Structure.Representation3D,to:R.Molecule.Structure.Representation3DState,params:()=>({layers:f.ObjectList({bundle:f.Value(P.Bundle.Empty),material:pt.getParam(),clear:f.Boolean(!1)},e=>`${e.clear?"Clear":pt.toString(e.material)}`,{defaultValue:[{bundle:P.Bundle.Empty,material:pt({roughness:1}),clear:!1}],isHidden:!0})})})({canAutoUpdate(){return!0},apply({a:e,params:t}){let r=e.data.sourceData,n=e.data.repr.geometryVersion,o=We.ofBundle(t.layers,r);return new R.Molecule.Structure.Representation3DState({state:{substance:o},initialState:{substance:We.Empty},info:{structure:r,geometryVersion:n},repr:e.data.repr},{label:`Substance (${o.layers.length} Layers)`})},update({a:e,b:t,newParams:r,oldParams:n}){let o=t.data.info,i=e.data.sourceData,a=i!==o.structure;if(e.data.repr!==t.data.repr)return z.UpdateResult.Recreate;let s=e.data.repr.geometryVersion;if(s!==o.geometryVersion&&xt(e.data.repr.props))return z.UpdateResult.Recreate;let c=t.data.state.substance;if(!a&&Ze(n.layers,r.layers))return z.UpdateResult.Unchanged;let u=We.ofBundle(r.layers,i);return!a&&We.areEqual(c,u)?z.UpdateResult.Unchanged:(o.geometryVersion=s,o.structure=i,t.data.state.substance=u,t.data.repr=e.data.repr,t.label=`Substance (${u.layers.length} Layers)`,z.UpdateResult.Updated)}});$e(ey,"substance");$e($o,"substance");var wp="substance-controls";async function Aa(e,t,r,n,o){await ty(e,t,async(i,a,s)=>{if(o&&o.length>0&&!o.includes(a.params.values.type.name))return;let c=a.obj.data.sourceData,u=await n(c.root);if(Z.isEmpty(u)||Je(u))return;let l={bundle:P.Bundle.fromLoci(u),material:r??pt(),clear:!r};if(s){let d=[...s.params.values.layers,l],p=Ap(d,c);i.to(s).update(We.toBundle(p))}else{let d=Ap([l],c);i.to(a.transform.ref).apply($o,We.toBundle(d),{tags:wp})}})}async function ty(e,t,r){let n=e.state.data,o=n.build();for(let i of t)for(let a of i.representations){let s=n.select(be.Generators.ofTransformer($o,a.cell.transform.ref).withTag(wp));await r(o,a.cell,s[0])}return o.commit({doNotUpdateCurrent:!0})}function Ap(e,t){let r=We.ofBundle(e,t.root),n=We.merge(r);return We.filter(n,t)}var ry=ge.BuiltIn({name:"emissive-structure-representation-3d-from-script",display:"Emissive 3D Representation",from:R.Molecule.Structure.Representation3D,to:R.Molecule.Structure.Representation3DState,params:()=>({layers:f.ObjectList({script:f.Script(ze("(sel.atom.all)","mol-script")),value:f.Numeric(.5,{min:0,max:1,step:.01},{label:"Emissive"})},e=>`Emissive (${e.value})`,{defaultValue:[{script:ze("(sel.atom.all)","mol-script"),value:.5}]})})})({canAutoUpdate(){return!0},apply({a:e,params:t}){let r=e.data.sourceData,n=e.data.repr.geometryVersion,o=He.ofScript(t.layers,r);return new R.Molecule.Structure.Representation3DState({state:{emissive:o},initialState:{emissive:He.Empty},info:{structure:r,geometryVersion:n},repr:e.data.repr},{label:`Emissive (${o.layers.length} Layers)`})},update({a:e,b:t,newParams:r,oldParams:n}){let o=t.data.info,i=e.data.sourceData,a=i!==o.structure;if(e.data.repr!==t.data.repr)return z.UpdateResult.Recreate;let s=e.data.repr.geometryVersion;if(s!==o.geometryVersion&&xt(e.data.repr.props))return z.UpdateResult.Recreate;let c=t.data.state.emissive,u=He.ofScript(r.layers,i);return!a&&He.areEqual(c,u)?z.UpdateResult.Unchanged:(o.geometryVersion=s,o.structure=i,t.data.state.emissive=u,t.data.repr=e.data.repr,t.label=`Emissive (${u.layers.length} Layers)`,z.UpdateResult.Updated)}});var qo=ge.BuiltIn({name:"emissive-structure-representation-3d-from-bundle",display:"Emissive 3D Representation",from:R.Molecule.Structure.Representation3D,to:R.Molecule.Structure.Representation3DState,params:()=>({layers:f.ObjectList({bundle:f.Value(P.Bundle.Empty),value:f.Numeric(.5,{min:0,max:1,step:.01},{label:"Emissive"})},e=>`Emissive (${e.value})`,{defaultValue:[{bundle:P.Bundle.Empty,value:.5}],isHidden:!0})})})({canAutoUpdate(){return!0},apply({a:e,params:t}){let r=e.data.sourceData,n=e.data.repr.geometryVersion,o=He.ofBundle(t.layers,r);return new R.Molecule.Structure.Representation3DState({state:{emissive:o},initialState:{emissive:He.Empty},info:{structure:r,geometryVersion:n},repr:e.data.repr},{label:`Emissive (${o.layers.length} Layers)`})},update({a:e,b:t,newParams:r,oldParams:n}){let o=t.data.info,i=e.data.sourceData,a=i!==o.structure;if(e.data.repr!==t.data.repr)return z.UpdateResult.Recreate;let s=e.data.repr.geometryVersion;if(s!==o.geometryVersion&&xt(e.data.repr.props))return z.UpdateResult.Recreate;let c=t.data.state.emissive;if(!a&&Ze(n.layers,r.layers))return z.UpdateResult.Unchanged;let u=He.ofBundle(r.layers,i);return!a&&He.areEqual(c,u)?z.UpdateResult.Unchanged:(o.geometryVersion=s,o.structure=i,t.data.state.emissive=u,t.data.repr=e.data.repr,t.label=`Emissive (${u.layers.length} Layers)`,z.UpdateResult.Updated)}});$e(ry,"emissive");$e(qo,"emissive");var Ip="emissive-controls";async function Op(e,t,r,n,o){await ny(e,t,async(i,a,s)=>{if(o&&o.length>0&&!o.includes(a.params.values.type.name))return;let c=a.obj.data.sourceData,u=await n(c.root);if(Z.isEmpty(u)||Je(u))return;let l={bundle:P.Bundle.fromLoci(u),value:r};if(s){let d=[...s.params.values.layers,l],p=Lp(d,c);i.to(s).update(He.toBundle(p))}else{let d=Lp([l],c);i.to(a.transform.ref).apply(qo,He.toBundle(d),{tags:Ip})}})}async function ny(e,t,r){let n=e.state.data,o=n.build();for(let i of t)for(let a of i.representations){let s=n.select(be.Generators.ofTransformer(qo,a.cell.transform.ref).withTag(Ip));await r(o,a.cell,s[0])}return o.commit({doNotUpdateCurrent:!0})}function Lp(e,t){let r=He.ofBundle(e,t.root),n=He.merge(r);return He.filter(n,t)}var oy=ge.BuiltIn({name:"wiggle-structure-representation-3d-from-script",display:"Wiggle 3D Representation",from:R.Molecule.Structure.Representation3D,to:R.Molecule.Structure.Representation3DState,params:()=>({layers:f.ObjectList({script:f.Script(ze("(sel.atom.all)","mol-script")),value:f.Numeric(5,{min:0,max:1,step:.01},{label:"Wiggle"})},e=>`Wiggle (${e.value})`,{defaultValue:[{script:ze("(sel.atom.all)","mol-script"),value:1}]})})})({canAutoUpdate(){return!0},apply({a:e,params:t}){let r=e.data.sourceData,n=e.data.repr.geometryVersion,o=Ie.ofScript(t.layers,r);return new R.Molecule.Structure.Representation3DState({state:{wiggle:o},initialState:{wiggle:Ie.Empty},info:{structure:r,geometryVersion:n},repr:e.data.repr},{label:`Wiggle (${o.layers.length} Layers)`})},update({a:e,b:t,newParams:r,oldParams:n}){let o=t.data.info,i=e.data.sourceData,a=i!==o.structure;if(e.data.repr!==t.data.repr)return z.UpdateResult.Recreate;let s=t.data.state.wiggle,c=Ie.ofScript(r.layers,i);return!a&&Ie.areEqual(s,c)?z.UpdateResult.Unchanged:(o.geometryVersion=e.data.repr.geometryVersion,o.structure=i,t.data.state.wiggle=c,t.data.repr=e.data.repr,t.label=`Wiggle (${c.layers.length} Layers)`,z.UpdateResult.Updated)}});var vn=ge.BuiltIn({name:"wiggle-structure-representation-3d-from-bundle",display:"Wiggle 3D Representation",from:R.Molecule.Structure.Representation3D,to:R.Molecule.Structure.Representation3DState,params:()=>({layers:f.ObjectList({bundle:f.Value(P.Bundle.Empty),value:f.Numeric(5,{min:0,max:1,step:.01},{label:"Wiggle"})},e=>`Wiggle (${e.value})`,{defaultValue:[{bundle:P.Bundle.Empty,value:1}],isHidden:!0})})})({canAutoUpdate(){return!0},apply({a:e,params:t}){let r=e.data.sourceData,n=e.data.repr.geometryVersion,o=Ie.ofBundle(t.layers,r);return new R.Molecule.Structure.Representation3DState({state:{wiggle:o},initialState:{wiggle:Ie.Empty},info:{structure:r,geometryVersion:n},repr:e.data.repr},{label:`Wiggle (${o.layers.length} Layers)`})},update({a:e,b:t,newParams:r,oldParams:n}){let o=t.data.info,i=e.data.sourceData,a=i!==o.structure;if(e.data.repr!==t.data.repr)return z.UpdateResult.Recreate;let s=t.data.state.wiggle;if(!a&&Ze(n.layers,r.layers))return z.UpdateResult.Unchanged;let c=Ie.ofBundle(r.layers,i);return!a&&Ie.areEqual(s,c)?z.UpdateResult.Unchanged:(o.geometryVersion=e.data.repr.geometryVersion,o.structure=i,t.data.state.wiggle=c,t.data.repr=e.data.repr,t.label=`Wiggle (${c.layers.length} Layers)`,z.UpdateResult.Updated)}});$e(oy,"wiggle");$e(vn,"wiggle");var La="wiggle-controls";async function Fp(e,t,r,n,o){await Ia(e,t,async(i,a,s)=>{if(o&&o.length>0&&!o.includes(a.params.values.type.name))return;let c=a.obj.data.sourceData,u=await n(c.root);if(Z.isEmpty(u)||Je(u))return;let l={bundle:P.Bundle.fromLoci(u),value:r};if(s){let d=[...s.params.values.layers,l],p=wa(d,c);i.to(s).update(Ie.toBundle(p))}else{let d=wa([l],c);i.to(a.transform.ref).apply(vn,Ie.toBundle(d),{tags:La})}})}async function DO(e,t,r){await Ia(e,t,async(n,o,i)=>{r&&r.length>0&&!r.includes(o.params.values.type.name)||i&&n.delete(i.transform.ref)})}async function Ia(e,t,r){let n=e.state.data,o=n.build();for(let i of t)for(let a of i.representations){let s=n.select(be.Generators.ofTransformer(vn,a.cell.transform.ref).withTag(La));await r(o,a.cell,s[0])}return o.commit({doNotUpdateCurrent:!0})}function wa(e,t){let r=Ie.ofBundle(e,t.root),n=Ie.merge(r);return Ie.filter(n,t)}function Bp(e,t){return Mi.isAtomic(e)?e.model.atomicConformation.B_iso_or_equiv.value(t):Mi.isSpheres(e)?e.model.coarseConformation.spheres.rmsf[t]:0}function iy(e){let t=1/0,r=-1/0;for(let n of e.units){let o=n.elements;for(let i=0,a=o.length;i<a;i++){let s=Bp(n,o[i]);s<t&&(t=s),s>r&&(r=s)}}return isFinite(t)||(t=0),isFinite(r)||(r=0),{min:t,max:r}}async function _O(e,t,r=1,n){await Ia(e,t,async(o,i,a)=>{if(n&&n.length>0&&!n.includes(i.params.values.type.name))return;let s=i.obj.data.sourceData,c=s.root,{min:u,max:l}=iy(c),d=l-u;if(d<=0)return;let p=new Map;for(let g of c.units){let S=g.elements,y=new Map;for(let C=0,T=S.length;C<T;C++){let B=(Bp(g,S[C])-u)/d,V=Math.min(255,Math.round(B*255));y.has(V)||y.set(V,[]),y.get(V).push(C)}for(let[C,T]of y)p.has(C)||p.set(C,[]),p.get(C).push({unit:g,indices:T})}let m=[];for(let[g,S]of p){let y=g/255*r,C=[];for(let{unit:I,indices:B}of S)C.push({unit:I,indices:Kt.ofSortedArray(new Int32Array(B))});let T=P.Loci(c,C);P.Loci.isEmpty(T)||m.push({bundle:P.Bundle.fromLoci(T),value:y})}if(m.length===0)return;let h=wa(m,s);a?o.to(a).update(Ie.toBundle(h)):o.to(i.transform.ref).apply(vn,Ie.toBundle(h),{tags:La})})}var Qr=class e extends Me{constructor(r){super({options:f.getDefaultValues(e.OptionsParams)});this.plugin=r;this.events={optionsUpdated:this.ev()};this.optionHandlers=new Map}get currentStructures(){return this.plugin.managers.structure.hierarchy.selection.structures}get pivotStructure(){return this.currentStructures[0]}_setSnapshotState(r){this.updateState({options:r}),this.events.optionsUpdated.next(void 0)}async setOptions(r){let n=Object.keys(r).filter(a=>r[a]!==this.state.options[a]),o=this.state.options.clipObjects.objects;this.updateState({options:r}),this.events.optionsUpdated.next(void 0);let i=this.dataState.build();for(let a of this.currentStructures)for(let s of a.components)this.updateReprParams(i,s,o);return this.plugin.dataTransaction(async()=>{await i.commit(),this.plugin.state.hasBehavior(ea)&&await this.plugin.state.updateBehavior(ea,a=>{a.ignoreHydrogens=r.hydrogens!=="all",a.ignoreHydrogensVariant=r.hydrogens==="only-polar"?"non-polar":"all",a.ignoreLight=r.ignoreLight,a.material=r.materialStyle,a.clip=r.clipObjects,a.interior=r.interior,a.animation=r.animation});for(let a of n)for(let s of[...this.optionHandlers.get(a)??[]])await s(r[a],this)})}registerOptionHandler(r,n){let o=this.optionHandlers.get(r)??[];return o.push(n),this.optionHandlers.set(r,o),()=>{let i=this.optionHandlers.get(r);if(!i)return;let a=i.indexOf(n);a>=0&&i.splice(a,1),i.length===0&&this.optionHandlers.delete(r)}}updateReprParams(r,n,o){let{hydrogens:i,visualQuality:a,ignoreLight:s,materialStyle:c,clipObjects:u,solidSurface:l,interior:d,animation:p}=this.state.options,m=i!=="all",h=i==="only-polar"?"non-polar":"all";for(let g of n.representations){if(g.cell.transform.transformer!==Xr)continue;let S=g.cell.transform.params,y=xc.replaceOwned(S.type.params.clip,o,u),C=to(S.type.name),T=S.type.params.interior,I=S.type.params.animation;(!!S.type.params.ignoreHydrogens!==m||S.type.params.ignoreHydrogensVariant!==h||S.type.params.quality!==a||S.type.params.ignoreLight!==s||!pt.areEqual(S.type.params.material,c)||!f.areEqual(Ni.Params,S.type.params.clip,y)||C&&S.type.params.solidInterior!==l||T&&!Ws(T,d)||I&&!$s(I,p))&&r.to(g.cell).update(B=>{B.type.params.ignoreHydrogens=m,B.type.params.ignoreHydrogensVariant=h,B.type.params.quality=a,B.type.params.ignoreLight=s,B.type.params.material=c,B.type.params.clip=y,C&&(B.type.params.solidInterior=l),T&&(B.type.params.interior=d),I&&(B.type.params.animation=p)})}}applyPreset(r,n,o){return this.plugin.dataTransaction(async()=>{for(let i of r){let a=await this.plugin.builders.structure.representation.applyPreset(i.cell,n,o);await this.syncPreset(i,a)}},{canUndo:"Preset"})}syncPreset(r,n){if(!n||!n.components)return this.clearComponents([r]);let o=new Set;if(Ke(n.components,c=>{c&&o.add(c.ref)}),n.representations&&Ke(n.representations,c=>{c&&o.add(c.ref)}),o.size===0)return this.clearComponents([r]);let i=!1,a=this.dataState.build(),s=c=>{o.has(c.cell.transform.ref)||(i=!0,a.delete(c.cell))};for(let c of r.components){s(c);for(let u of c.representations)s(u);if(c.genericRepresentations)for(let u of c.genericRepresentations)s(u)}if(r.genericRepresentations)for(let c of r.genericRepresentations)s(c);if(i)return a.commit()}clear(r){return this.clearComponents(r)}selectThis(r){let n=this.plugin.managers.structure.selection;n.clear();for(let o of r){let i=Qe.toSubStructureElementLoci(o.structure.cell.obj.data,o.cell.obj?.data);n.fromLoci("set",i)}}canBeModified(r){return this.plugin.builders.structure.isComponentTransform(r.cell)}modifyByCurrentSelection(r,n){return this.plugin.runTask(ie.create("Modify Component",async o=>{let i=this.dataState.build();for(let a of r){if(!this.canBeModified(a))continue;let s=this.plugin.managers.structure.selection.getStructure(a.structure.cell.obj.data);!s||s.elementCount===0||this.modifyComponent(i,a,s,n)}await this.dataState.updateTree(i,{canUndo:"Modify Selection"}).runInContext(o)}))}toggleVisibility(r,n){if(r.length!==0)if(n){let o=r[0].representations.indexOf(n),i=!n.cell.state.isHidden;for(let a of r){let s=a.representations[o];s&&er(this.dataState,s.cell.transform.ref,i)}}else{let o=!r[0].cell.state.isHidden;for(let i of r)er(this.dataState,i.cell.transform.ref,o)}}removeRepresentations(r,n){if(r.length===0)return;let o=[];if(n){let i=r[0].representations.indexOf(n);if(i<0)return;for(let a of r)a.representations[i]&&o.push(a.representations[i])}else for(let i of r)for(let a of i.representations)o.push(a);return this.plugin.managers.structure.hierarchy.remove(o,!0)}updateRepresentations(r,n,o){if(r.length===0)return Promise.resolve();let i=r[0].representations.indexOf(n);if(i<0)return Promise.resolve();let a=this.dataState.build();for(let s of r){let c=s.representations[i];c&&c.cell.transform.transformer===n.cell.transform.transformer&&a.to(c.cell).update(o)}return a.commit({canUndo:"Update Representation"})}updateRepresentationsTheme(r,n){if(r.length===0)return;let o=this.dataState.build();for(let i of r)for(let a of i.representations){let s=a.cell.transform.params,c=typeof n=="function"?n(i,a):n,u=c.color==="default"?Ki(this.plugin,i.structure.cell.obj?.data,s?.type.name):c.color?Ki(this.plugin,i.structure.cell.obj?.data,s?.type.name,c.color,c.colorParams):void 0,l=c.size==="default"?Yi(this.plugin,i.structure.cell.obj?.data,s?.type.name):c.size?Yi(this.plugin,i.structure.cell.obj?.data,s?.type.name,c.size,c.sizeParams):void 0;(u||l)&&o.to(a.cell).update(d=>{u&&(d.colorTheme=u),l&&(d.sizeTheme=l)})}return o.commit({canUndo:"Update Theme"})}addRepresentation(r,n){if(r.length===0)return;let{hydrogens:o,visualQuality:i,ignoreLight:a,materialStyle:s,clipObjects:c,solidSurface:u,interior:l,animation:d}=this.state.options,h={ignoreHydrogens:o!=="all",ignoreHydrogensVariant:o==="only-polar"?"non-polar":"all",quality:i,ignoreLight:a,material:s,clip:c,interior:l,animation:d,...to(n)&&{solidInterior:u}};return this.plugin.dataTransaction(async()=>{for(let g of r)await this.plugin.builders.structure.representation.addRepresentation(g.cell,{type:this.plugin.representation.structure.registry.get(n),typeParams:h})},{canUndo:"Add Representation"})}tryFindComponent(r,n){if(r.components.length!==0)return this.plugin.runTask(ie.create("Find Component",async o=>{let i=r.cell.obj?.data;if(!i)return;let a=Or.unionStructure(await n.getSelection(this.plugin,o,i));for(let s of r.components){let c=s.cell.obj?.data;if(!(!c||!s.cell.parent)&&ms(a,c))return s.cell}}))}async add(r,n){return this.plugin.dataTransaction(async()=>{let o=n||this.currentStructures;if(o.length===0)return;let{hydrogens:i,visualQuality:a,ignoreLight:s,materialStyle:c,clipObjects:u,solidSurface:l,interior:d,animation:p}=this.state.options,g={ignoreHydrogens:i!=="all",ignoreHydrogensVariant:i==="only-polar"?"non-polar":"all",quality:a,ignoreLight:s,material:c,clip:u,interior:d,animation:p,...to(r.representation)&&{solidInterior:l}},S=on.create22();for(let y of o){let C;r.options.checkExisting&&(C=await this.tryFindComponent(y,r.selection)),C||(C=await this.plugin.builders.structure.tryCreateComponentFromSelection(y.cell,r.selection,S,{label:r.options.label||(r.selection===Xi?"Custom Selection":"")})),!(r.representation==="none"||!C)&&await this.plugin.builders.structure.representation.addRepresentation(C,{type:this.plugin.representation.structure.registry.get(r.representation),typeParams:g})}},{canUndo:"Add Selection"})}async applyTheme(r,n){return this.plugin.dataTransaction(async o=>{let i=n||this.currentStructures;if(i.length===0)return;let a=async s=>Or.toLociWithSourceUnits(await r.selection.getSelection(this.plugin,o,s));for(let s of i)if(r.action.name==="color"){let c=r.action.params;await Ea(this.plugin,s.components,c.color,a,r.representations)}else if(r.action.name==="resetColor")await Ea(this.plugin,s.components,-1,a,r.representations);else if(r.action.name==="transparency"){let c=r.action.params;await Ep(this.plugin,s.components,c.value,a,r.representations)}else if(r.action.name==="emissive"){let c=r.action.params;await Op(this.plugin,s.components,c.value,a,r.representations)}else if(r.action.name==="material"){let c=r.action.params;await Aa(this.plugin,s.components,c.material,a,r.representations)}else if(r.action.name==="resetMaterial")await Aa(this.plugin,s.components,void 0,a,r.representations);else if(r.action.name==="clipping"){let c=r.action.params;await Pp(this.plugin,s.components,Jt.Groups.fromNames(c.excludeGroups),a,r.representations)}else if(r.action.name==="wiggle"){let c=r.action.params;await Fp(this.plugin,s.components,c.value,a,r.representations)}},{canUndo:"Apply Theme"})}modifyComponent(r,n,o,i){let a=n.cell.obj?.data;if(!a||(i==="subtract"||i==="intersect")&&!hs(a,o))return;let s=n.structure.cell.obj?.data,c=i==="union"?fs(s,[a,o]):i==="intersect"?gs(a,o):ys(a,o);if(c.elementCount===0)r.delete(n.cell.transform.ref);else{let l={type:{name:"bundle",params:P.Bundle.fromSubStructure(s,c)},nullIfEmpty:!0,label:n.cell.obj?.label};r.to(n.cell).update(l)}}updateLabel(r,n){let o={type:r.cell.params?.values.type,nullIfEmpty:r.cell.params?.values.nullIfEmpty,label:n};this.dataState.build().to(r.cell).update(o).commit()}get dataState(){return this.plugin.state.data}clearComponents(r){let n=this.dataState.build();for(let o of r)for(let i of o.components)n.delete(i.cell.transform.ref);return n.commit({canUndo:"Clear Selections"})}};(s=>{s.OptionsParams={hydrogens:f.Select("all",[["all","Show All"],["hide-all","Hide All"],["only-polar","Only Polar"]],{description:"Determine display of hydrogen atoms in representations"}),visualQuality:f.Select("auto",Ns,{description:"Control the visual/rendering quality of representations"}),ignoreLight:f.Boolean(!1,{description:"Ignore light for stylized rendering of representations"}),solidSurface:f.Boolean(!0,{description:"Render a solid cap where the camera near plane or a clip object cuts a surface representation"}),materialStyle:pt.getParam(),clipObjects:f.Group(Ni.Params),interactions:f.Group(vp,{label:"Non-covalent Interactions"}),interior:js(),animation:Hs()};function t(c){return c.find(u=>u[0]===Xi)?.[0]??c[0]?.[0]}s.getDefaultSelectionQuery=t;function r(c,u){let{options:l}=c.query.structure.registry;return f.Select(t(l),l,{isHidden:u})}function n(c,u){return u={pivot:c.managers.structure.component.pivotStructure,allowNone:!0,hideSelection:!1,checkExisting:!1,...u},{selection:r(c,u?.hideSelection),representation:a(c,u?.pivot,u?.allowNone?[["none","< Create Later >"]]:[]),options:f.Group({label:f.Text(""),checkExisting:f.Boolean(!!u?.checkExisting,{help:()=>({description:"Checks if a selection with the specifield elements already exists to avoid creating duplicate components."})})})}}s.getAddParams=n;function o(c,u){return{selection:r(c,!1),action:f.MappedStatic("color",{color:f.Group({color:f.Color(Ee.blue,{isExpanded:!0})},{isFlat:!0}),resetColor:f.EmptyGroup({label:"Reset Color"}),transparency:f.Group({value:f.Numeric(.5,{min:0,max:1,step:.01})},{isFlat:!0}),emissive:f.Group({value:f.Numeric(.5,{min:0,max:1,step:.01})},{isFlat:!0}),material:f.Group({material:pt.getParam({isFlat:!0})},{isFlat:!0}),resetMaterial:f.EmptyGroup({label:"Reset Material"}),clipping:f.Group({excludeGroups:f.MultiSelect([],f.objectToOptions(Jt.Groups.Names))},{isFlat:!0}),wiggle:f.Group({value:f.Numeric(1,{min:0,max:5,step:.01})},{isFlat:!0})}),representations:f.MultiSelect([],i(c,u),{emptyValue:"All"})}}s.getThemeParams=o;function i(c,u){return u?.cell.obj?.data?c.representation.structure.registry.getApplicableTypes(u.cell.obj?.data):c.representation.structure.registry.types}s.getRepresentationTypes=i;function a(c,u,l,d){let p=[...l,...i(c,u)];return f.Select(p[0][0],p,{label:d})}})(Qr||={});var Sn=new Ir("98"),ay=24,Xo=class extends Me{constructor(r){super({entries:new Map,additionsHistory:[],stats:sy()});this.plugin=r;this.events={changed:this.ev(),additionsHistoryUpdated:this.ev(),loci:{add:this.ev(),remove:this.ev(),clear:this.ev()}};r.helpers.substructureParent.events.removed.subscribe(n=>this.onRemove(n.ref,n.obj)),r.helpers.substructureParent.events.updated.subscribe(n=>this.onUpdate(n.ref,n.oldObj,n.obj))}get entries(){return this.state.entries}get additionsHistory(){return this.state.additionsHistory}get stats(){return this.state.stats?this.state.stats:(this.state.stats=this.calcStats(),this.state.stats)}getEntry(r){let n=this.plugin.helpers.substructureParent.get(r,!0);if(!n)return;let o=n.transform.ref;if(!this.entries.has(o)){let i=new Tn(P.Loci(r,[]));return this.entries.set(o,i),i}return this.entries.get(o)}calcStats(){let r=0,n=0,o=P.Stats.create();this.entries.forEach(a=>{let{elements:s}=a.selection;if(s.length){r+=1;for(let c=0,u=s.length;c<u;++c)n+=Kt.size(s[c].indices);P.Stats.add(o,o,P.Stats.ofLoci(a.selection))}});let i=ta(o,{countsOnly:!0});return{structureCount:r,elementCount:n,label:i}}add(r){if(!P.Loci.is(r))return!1;let n=this.getEntry(r.structure);if(!n)return!1;let o=n.selection;return n.selection=P.Loci.union(n.selection,r),this.tryAddHistory(r),this.referenceLoci=r,this.events.loci.add.next(r),!P.Loci.areEqual(o,n.selection)}remove(r){if(!P.Loci.is(r))return!1;let n=this.getEntry(r.structure);if(!n)return!1;let o=n.selection;return n.selection=P.Loci.subtract(n.selection,r),this.referenceLoci=r,this.events.loci.remove.next(r),!P.Loci.areEqual(o,n.selection)}intersect(r){if(!P.Loci.is(r))return!1;let n=this.getEntry(r.structure);if(!n)return!1;let o=n.selection;return n.selection=P.Loci.intersect(n.selection,r),this.referenceLoci=r,!P.Loci.areEqual(o,n.selection)}set(r){if(!P.Loci.is(r))return!1;let n=this.getEntry(r.structure);if(!n)return!1;let o=n.selection;return n.selection=r,this.tryAddHistory(r),this.referenceLoci=void 0,!P.Loci.areEqual(o,n.selection)}modifyHistory(r,n,o,i=!1){let a=this.additionsHistory,s=a.indexOf(r);if(s<0)return;let c;switch(n){case"remove":br(a,s);break;case"up":c=s-1;break;case"down":c=s+1;break}if(c!==void 0){let u=o?Math.min(a.length,o):a.length;for(;;)if(c=c%u,c<0&&(c+=u),!i||a[s].loci.structure===a[c].loci.structure){let l=a[s];a[s]=a[c],a[c]=l;break}else c+=n==="up"?-1:1}this.events.additionsHistoryUpdated.next(void 0)}tryAddHistory(r){if(Z.isEmpty(r))return;let n=0,o;for(let s of this.additionsHistory){if(Z.areEqual(s.loci,r)){o=s;break}n++}if(o){br(this.additionsHistory,n),this.additionsHistory.unshift(o),this.events.additionsHistoryUpdated.next(void 0);return}let i=P.Stats.ofLoci(r),a=ta(i,{reverse:!0});this.additionsHistory.unshift({id:on.create22(),loci:r,label:a}),this.additionsHistory.length>ay&&this.additionsHistory.pop(),this.events.additionsHistoryUpdated.next(void 0)}clearHistory(){this.state.additionsHistory.length!==0&&(this.state.additionsHistory=[],this.events.additionsHistoryUpdated.next(void 0))}clearHistoryForStructure(r){let n=[];for(let o of this.state.additionsHistory)o.loci.structure.root===r.root&&n.push(o);for(let o of n)this.modifyHistory(o,"remove");n.length!==0&&this.events.additionsHistoryUpdated.next(void 0)}onRemove(r,n){this.entries.has(r)&&(this.entries.delete(r),n?.data&&this.clearHistoryForStructure(n.data),this.referenceLoci?.structure===n?.data&&(this.referenceLoci=void 0),this.state.stats=void 0,this.events.changed.next(void 0))}onUpdate(r,n,o){if(n===o||n?.data===o.data)return;let i=this.plugin.helpers.substructureParent.get(o.data,!0);if(!i||r!==i.transform.ref||!this.entries.has(r))return;let a=this.plugin.helpers.substructureParent.get(o.data)?.obj?.data;if(a)if(!n?.data||Qe.areUnitIdsAndIndicesEqual(n.data,o.data)){this.entries.set(r,cy(this.entries.get(r),a)),this.referenceLoci?.structure.root===a.root&&(this.referenceLoci=P.Loci.remap(this.referenceLoci,a));let s=!1;for(let c of this.state.additionsHistory)c.loci.structure.root===a.root&&(c.loci=P.Loci.remap(c.loci,a),s=!0);s&&this.events.additionsHistoryUpdated.next(void 0)}else this.entries.set(r,new Tn(P.Loci(a,[]))),this.referenceLoci?.structure.root===a.root&&(this.referenceLoci=void 0),this.clearHistoryForStructure(a),this.state.stats=void 0,this.events.changed.next(void 0)}clear(){let r=this.entries.keys(),n=[];for(;;){let o=r.next();if(o.done)break;let i=this.entries.get(o.value);P.Loci.isEmpty(i.selection)||n.push(i.selection),i.selection=P.Loci(i.selection.structure,[])}return this.referenceLoci=void 0,this.state.stats=void 0,this.events.changed.next(void 0),this.events.loci.clear.next(void 0),this.clearHistory(),n}getLoci(r){let n=this.getEntry(r);return n?n.selection:zs}getStructure(r){let n=this.getEntry(r);if(n)return n.structure}structureHasSelection(r){let n=r.cell?.obj?.data;if(!n)return!1;let o=this.getEntry(n);return!!o&&!P.Loci.isEmpty(o.selection)}has(r){if(P.Loci.is(r)){let n=this.getEntry(r.structure);if(n)return P.Loci.isSubset(n.selection,r)}return!1}tryGetRange(r){if(P.Loci.is(r)&&this.getEntry(r.structure))return Oa(this.referenceLoci,r)}elementCount(){let r=0;return this.entries.forEach(n=>{r+=P.Loci.size(n.selection)}),r}getBoundary(){let r=x.create(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),n=x.create(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);Sn.reset();let o=[];this.entries.forEach(i=>{let a=i.selection;P.Loci.isEmpty(a)||o.push(P.Loci.getBoundary(a))});for(let i=0,a=o.length;i<a;++i){let{box:s,sphere:c}=o[i];x.min(r,r,s.min),x.max(n,n,s.max),Sn.includePositionRadius(c.center,c.radius)}Sn.finishedIncludeStep();for(let i=0,a=o.length;i<a;++i){let{sphere:s}=o[i];Sn.radiusPositionRadius(s.center,s.radius)}return{box:{min:r,max:n},sphere:Sn.getSphere()}}getPrincipalAxes(){let r=ss(this.entries.values());return P.Loci.getPrincipalAxesMany(r.map(n=>n.selection))}modify(r,n){let o=!1;switch(r){case"add":o=this.add(n);break;case"remove":o=this.remove(n);break;case"intersect":o=this.intersect(n);break;case"set":o=this.set(n);break}o&&(this.state.stats=void 0,this.events.changed.next(void 0))}get applicableStructures(){return this.plugin.managers.structure.hierarchy.selection.structures.filter(r=>!!r.cell.obj).map(r=>r.cell.obj.data)}triggerInteraction(r,n,o=!0){switch(r){case"add":this.plugin.managers.interactivity.lociSelects.select({loci:n},o);break;case"remove":this.plugin.managers.interactivity.lociSelects.deselect({loci:n},o);break;case"intersect":this.plugin.managers.interactivity.lociSelects.selectJoin({loci:n},o);break;case"set":this.plugin.managers.interactivity.lociSelects.selectOnly({loci:n},o);break}}fromLoci(r,n,o=!0){this.triggerInteraction(r,n,o)}fromCompiledQuery(r,n,o=!0){for(let i of this.applicableStructures){let a=n(new bs(i));this.triggerInteraction(r,Or.toLociWithSourceUnits(a),o)}}fromSelectionQuery(r,n,o=!0){this.plugin.runTask(ie.create("Structure Selection",async i=>{for(let a of this.applicableStructures){let s=await n.getSelection(this.plugin,i,a);this.triggerInteraction(r,Or.toLociWithSourceUnits(s),o)}}))}fromSelections(r){let n=yt.resolveAndCheck(this.plugin.state.data,r);if(!(!n||!n.obj)){if(!R.Molecule.Structure.Selections.is(n.obj)){console.warn("fromSelections applied to wrong object type.",n.obj);return}this.clear();for(let o of n.obj?.data)this.fromLoci("set",o.loci)}}getSnapshot(){let r=[];return this.entries.forEach((n,o)=>{r.push({ref:o,bundle:P.Bundle.fromLoci(n.selection)})}),{entries:r}}setSnapshot(r){this.entries.clear();for(let{ref:n,bundle:o}of r.entries){let i=this.plugin.state.data.select(be.Generators.byRef(n))[0]?.obj?.data;if(!i)continue;let a=P.Bundle.toLoci(o,i);this.fromLoci("set",a,!1)}}};function sy(){return{structureCount:0,elementCount:0,label:"Nothing Selected"}}var Tn=class{constructor(t){this._structure=void 0;this._selection=t}get selection(){return this._selection}set selection(t){this._selection=t,this._structure=void 0}get structure(){return this._structure?this._structure:(Z.isEmpty(this._selection)?this._structure=void 0:this._structure=P.Loci.toStructure(this._selection),this._structure)}};function cy(e,t){return new Tn(P.Loci.remap(e.selection,t))}function Oa(e,t){if(!P.Loci.is(e)||!P.Loci.is(t)||e.structure!==t.structure||t.elements.length!==1)return;let r=t.elements[0];if(!r)return;let n;for(let o of e.elements)if(r.unit===o.unit){n=o;break}if(n&&r.unit===n.unit)return uy(t.structure,n,r)}function uy(e,t,r){let n=Math.min(Kt.min(t.indices),Kt.min(r.indices)),o=Math.max(Kt.max(t.indices),Kt.max(r.indices));return P.Loci(e,[{unit:t.unit,indices:Kt.ofRange(n,o)}])}var ly=8,Zo=class extends Me{constructor(r){super({history:[]});this.plugin=r;this.events={historyUpdated:this.ev()};this.behaviors={current:this.ev.behavior(void 0)};r.state.data.events.object.removed.subscribe(({obj:o})=>{if(!R.Molecule.Structure.is(o))return;this.current?.loci.structure===o.data&&this.clear();let i=[];for(let a of this.history)a.loci.structure===o.data&&i.push(a);i.length!==this.history.length&&(this.history.length=0,this.history.push(...i),this.events.historyUpdated.next(void 0))});let n=_e();r.state.data.events.object.updated.subscribe(({oldData:o,obj:i,action:a})=>{if(R.Molecule.Structure.is(i)&&o!==i.data&&a==="in-place"){let s=this.state.current,c=i.data;if(s&&s.loci.structure===o){let u=P.Loci.remap(s.loci,c);this.state.current={...s,loci:u},this.behaviors.current.next(this.state.current),Z.getBoundingSphere(u,n);let l=this.plugin.canvas3d?.camera,d=l.getTargetDistance(n.radius+4);(x.distance(l.target,n.center)>n.radius||d>l.viewport.height/l.zoom)&&this.plugin.managers.camera.focusSphere(n,{durationMs:0})}}})}get current(){return this.state.current}get history(){return this.state.history}tryAddHistory(r){if(P.Loci.isEmpty(r.loci))return;let n=0,o;for(let i of this.state.history){if(P.Loci.areEqual(i.loci,r.loci)){o=i;break}n++}if(o){br(this.state.history,n),this.state.history.unshift(r),this.events.historyUpdated.next(void 0);return}this.state.history.unshift(r),this.state.history.length>ly&&this.state.history.pop(),this.events.historyUpdated.next(void 0)}set(r){this.tryAddHistory(r),(!this.state.current||!P.Loci.areEqual(this.state.current.loci,r.loci))&&(this.state.current=r,this.behaviors.current.next(r))}tryGetRange(r){return Oa(this.referenceLoci,r)}setFromLoci(r){let n=Z.normalize(r);if(!P.Loci.is(n)||P.Loci.isEmpty(n)){this.clear();return}this.set({loci:n,label:ro(n,{reverse:!0,hidePrefix:!0,htmlStyling:!1})}),this.referenceLoci=n}addFromLoci(r){let n=this.state.current&&P.Loci.is(r)&&r.structure===this.state.current.loci.structure?P.Loci.union(r,this.state.current.loci):r;this.setFromLoci(n);let o=Z.normalize(r);this.referenceLoci=P.Loci.is(o)?o:void 0}toggleFromLoci(r){let{kind:n,loci:o}=dy(this.state.current?.loci,r);this.setFromLoci(o);let i=Z.normalize(r);this.referenceLoci=P.Loci.is(i)&&n!=="subtract"?i:void 0}extendFromLoci(r){let n=this.tryGetRange(r)??r;this.toggleFromLoci(n)}clear(){this.state.current&&(this.state.current=void 0,this.behaviors.current.next(void 0)),this.referenceLoci=void 0}getSnapshot(){if(!this.current)return{};let n=this.plugin.helpers.substructureParent.get(this.current.loci.structure)?.transform.ref;return n?{current:{label:this.current.label,ref:n,bundle:P.Bundle.fromLoci(this.current.loci),category:this.current.category}}:{}}setSnapshot(r){if(!r.current){this.clear();return}let{label:n,ref:o,bundle:i,category:a}=r.current,s=this.plugin.state.data.select(be.Generators.byRef(o))[0]?.obj?.data;if(!s)return;let c=P.Bundle.toLoci(i,s);this.set({label:n,loci:c,category:a})}};function dy(e,t){return e&&P.Loci.is(t)&&t.structure===e.structure?P.Loci.isSubset(e,t)?{kind:"subtract",loci:P.Loci.subtract(e,t)}:{kind:"add",loci:P.Loci.union(t,e)}:{kind:"new",loci:t}}var py={name:"Volume Streaming",typeClass:"Behavior"};function Mp(e){return!!e&&e.type===py}function Up(e,t){let r=Cy(e,t||Yo());return Ey(e.tree,r),t&&t.refs.forEach(Dy,r),{hierarchy:r.hierarchy,added:r.added,changed:r.changed}}function Yo(){return{trajectories:[],models:[],structures:[],refs:new Map}}function fy(e){return{kind:"trajectory",cell:e,version:e.transform.version,models:[]}}function Vp(e,t){return{kind:"model",cell:e,version:e.transform.version,trajectory:t,structures:[]}}function my(e,t){return{kind:"model-properties",cell:e,version:e.transform.version,model:t}}function hy(e,t){return{kind:"model-unitcell",cell:e,version:e.transform.version,model:t}}function kp(e,t){return{kind:"structure",cell:e,version:e.transform.version,model:t,components:[]}}function gy(e,t){return{kind:"structure-properties",cell:e,version:e.transform.version,structure:t}}function yy(e,t){return{kind:"structure-transform",cell:e,version:e.transform.version,structure:t}}function by(e,t){return{kind:"structure-volume-streaming",cell:e,version:e.transform.version,structure:t}}function xy(e){return e.transform.tags?[...e.transform.tags].sort().join():e.transform.ref}function vy(e,t){return{kind:"structure-component",cell:e,version:e.transform.version,structure:t,key:xy(e),representations:[]}}function Sy(e,t){return{kind:"structure-representation",cell:e,version:e.transform.version,component:t}}function Ty(e,t){return{kind:"generic-representation",cell:e,version:e.transform.version,parent:t}}function Cy(e,t){return{state:e,oldHierarchy:t,hierarchy:Yo(),changed:!1,added:new Set}}function Jr(e,t,r,n,...o){let i=n(...o);r.push(i),e.hierarchy.refs.set(t.transform.ref,i);let a=e.oldHierarchy.refs.get(t.transform.ref);return a?a.version!==t.transform.version&&(e.changed=!0):(e.added.add(i.cell.transform.ref),e.changed=!0),i}function Rr(e,t,r,...n){let o=r(...n);e.hierarchy.refs.set(t.transform.ref,o);let i=e.oldHierarchy.refs.get(t.transform.ref);return i?i.version!==t.transform.version&&(e.changed=!0):(e.added.add(o.cell.transform.ref),e.changed=!0),o}function Ry(e){return t=>e.is(t.obj)}function Gp(e,t){return(r,n)=>!t(n)&&e.is(r.obj)}function Ko(e){return t=>t.transform.transformer===e}function Pr(){}var Py=[[Ry(R.Molecule.Trajectory),(e,t)=>{let r=e.currentModel?{trajectory:e.currentTrajectory,model:e.currentModel}:void 0;(e.outer??=[]).push(r),r&&(e.currentModel=void 0),e.currentTrajectory=Jr(e,t,e.hierarchy.trajectories,fy,t)},e=>{let t=e.outer?.pop();e.currentTrajectory=t?.trajectory,t&&(e.currentModel=t.model)}],[Gp(R.Molecule.Model,e=>e.currentModel),(e,t)=>{e.currentTrajectory?e.currentModel=Jr(e,t,e.currentTrajectory.models,Vp,t,e.currentTrajectory):e.currentModel=Rr(e,t,Vp,t),e.hierarchy.models.push(e.currentModel)},e=>e.currentModel=void 0],[Ko(Kn),(e,t)=>{if(!e.currentModel)return!1;e.currentModel.properties=Rr(e,t,my,t,e.currentModel)},Pr],[Ko(Jn),(e,t)=>{if(!e.currentModel)return!1;e.currentModel.unitcell=Rr(e,t,hy,t,e.currentModel)},Pr],[Gp(R.Molecule.Structure,e=>e.currentStructure),(e,t)=>{e.currentModel?e.currentStructure=Jr(e,t,e.currentModel.structures,kp,t,e.currentModel):e.currentStructure=Rr(e,t,kp,t),e.hierarchy.structures.push(e.currentStructure)},e=>e.currentStructure=void 0],[Ko(Yn),(e,t)=>{if(!e.currentStructure)return!1;e.currentStructure.properties=Rr(e,t,gy,t,e.currentStructure)},Pr],[Ko(cc),(e,t)=>{if(!e.currentStructure)return!1;e.currentStructure.transform=Rr(e,t,yy,t,e.currentStructure)},Pr],[e=>Mp(e.obj),(e,t)=>(e.currentStructure&&(e.currentStructure.volumeStreaming=Rr(e,t,by,t,e.currentStructure)),!1),Pr],[(e,t)=>!t.currentStructure||e.transform.transformer.definition.isDecorator?!1:R.Molecule.Structure.is(e.obj),(e,t)=>{e.currentStructure&&(e.currentComponent&&(e.parentComponents||(e.parentComponents=[]),e.parentComponents.push(e.currentComponent)),e.currentComponent=Jr(e,t,e.currentStructure.components,vy,t,e.currentStructure))},e=>{e.parentComponents&&e.parentComponents.length>0?e.currentComponent=e.parentComponents.pop():e.currentComponent=void 0}],[(e,t)=>!e.state.isGhost&&!!t.currentComponent&&R.Molecule.Structure.Representation3D.is(e.obj),(e,t)=>(e.currentComponent&&Jr(e,t,e.currentComponent.representations,Sy,t,e.currentComponent),!1),Pr],[e=>!e.state.isGhost&&R.isRepresentation3D(e.obj),(e,t)=>{let r=e.currentComponent||e.currentStructure||e.currentModel;r&&(r.genericRepresentations||(r.genericRepresentations=[]),Jr(e,t,r.genericRepresentations,Ty,t,r))},Pr]];function zp(e){if(!e||!e?.parent||!e.parent.cells.has(e.transform.ref))return!1;let{obj:t}=e;return!(!t||t===Fr.Null||e.status!=="ok"&&e.status!=="error")}function Dy(e){let{cell:t}=e;zp(t)||(this.changed=!0)}function _y(e){Np(this,this.tree.transforms.get(e))}function Np(e,t){let{state:r}=e,n=r.state.cells.get(t.ref);if(!zp(n))return;let o,i=!1;for(let[s,c,u]of Py)if(s(n,r)){if(c(r,n)===!1){i=!0;break}o=u;break}if(i)return;let a=e.tree.children.get(t.ref);a&&a.size&&a.forEach(_y,e),o&&o(r)}function Ey(e,t){let r={tree:e,state:t};return Np(r,e.root),r.state}var en=class e extends ar{constructor(r){super();this.plugin=r;this.state={syncedTree:this.dataState.tree,notified:!1,hierarchy:Yo(),selection:{trajectories:[],models:[],structures:[]}};this.behaviors={selection:this.ev.behavior({hierarchy:this.current,trajectories:this.selection.trajectories,models:this.selection.models,structures:this.selection.structures})};this._currentComponentGroups=void 0;this._currentSelectionSet=void 0;this.subscribe(r.state.data.events.changed,n=>{n.inTransaction||r.behaviors.state.isAnimating.value||this.sync(!0)}),this.subscribe(r.behaviors.state.isAnimating,n=>{!n&&!r.behaviors.state.isUpdating.value&&this.sync(!0)})}get dataState(){return this.plugin.state.data}get currentComponentGroups(){return this._currentComponentGroups?this._currentComponentGroups:(this._currentComponentGroups=e.getComponentGroups(this.selection.structures),this._currentComponentGroups)}get seletionSet(){if(this._currentSelectionSet)return this._currentSelectionSet;this._currentSelectionSet=new Set;for(let r of this.selection.trajectories)this._currentSelectionSet.add(r.cell.transform.ref);for(let r of this.selection.models)this._currentSelectionSet.add(r.cell.transform.ref);for(let r of this.selection.structures)this._currentSelectionSet.add(r.cell.transform.ref);return this._currentSelectionSet}get current(){return this.sync(!1),this.state.hierarchy}get selection(){return this.sync(!1),this.state.selection}getStructuresWithSelection(){let r=this.plugin.managers.structure.hierarchy.current.structures,n=[];for(let o of r)this.plugin.managers.structure.selection.structureHasSelection(o)&&n.push(o);return n}findStructure(r){if(!r)return;let n=this.plugin.helpers.substructureParent.get(r);if(!n)return;let o=this.plugin.state.data.selectQ(i=>i.byValue(n).rootOfType(R.Molecule.Structure))[0];if(o)return this.behaviors.selection.value.structures.find(i=>i.cell===o)}syncCurrent(r,n){let o=this.seletionSet,i=[];for(let a of r){let s=a.cell.transform.ref;(o.has(s)||n.has(s))&&i.push(a)}return i.length===0?r.length>0?[r[0]]:[]:i}sync(r){if(!r&&this.dataState.inUpdate)return;if(this.state.syncedTree===this.dataState.tree){r&&!this.state.notified&&(this.state.notified=!0,this.behaviors.selection.next({hierarchy:this.state.hierarchy,...this.state.selection}));return}this.state.syncedTree=this.dataState.tree;let n=Up(this.plugin.state.data,this.current);if(!n.changed)return;let{hierarchy:o}=n,i=this.syncCurrent(o.trajectories,n.added),a=this.syncCurrent(o.models,n.added),s=this.syncCurrent(o.structures,n.added);this._currentComponentGroups=void 0,this._currentSelectionSet=void 0,this.state.hierarchy=o,this.state.selection.trajectories=i,this.state.selection.models=a,this.state.selection.structures=s,r?(this.state.notified=!0,this.behaviors.selection.next({hierarchy:o,trajectories:i,models:a,structures:s})):this.state.notified=!1}updateCurrent(r,n){let o=this.current,i=n==="add"?un.union(this.seletionSet,new Set(r.map(u=>u.cell.transform.ref))):un.difference(this.seletionSet,new Set(r.map(u=>u.cell.transform.ref))),a=[],s=[],c=[];for(let u of o.trajectories)i.has(u.cell.transform.ref)&&a.push(u);for(let u of o.models)i.has(u.cell.transform.ref)&&s.push(u);for(let u of o.structures)i.has(u.cell.transform.ref)&&c.push(u);this._currentComponentGroups=void 0,this._currentSelectionSet=void 0,this.state.selection.trajectories=a,this.state.selection.models=s,this.state.selection.structures=c,this.behaviors.selection.next({hierarchy:o,trajectories:a,models:s,structures:c})}remove(r,n){if(r.length===0)return;let o=this.plugin.state.data.build();for(let i of r)o.delete(typeof i=="string"?i:i.cell.transform.ref);return o.commit({canUndo:n?"Remove":!1})}toggleVisibility(r,n){if(r.length===0)return;let o=n!==void 0?n!=="show":!r[0].cell.state.isHidden;for(let i of r)er(this.dataState,i.cell.transform.ref,o)}applyPreset(r,n,o){return this.plugin.dataTransaction(async()=>{for(let i of r)i.models.length>0&&await this.clearTrajectory(i),await this.plugin.builders.structure.hierarchy.applyPreset(i.cell,n,o)})}async updateStructure(r,n){await this.plugin.dataTransaction(async()=>{let o=vs.getDecoratorRoot(this.dataState.tree,r.cell.transform.ref),i=this.dataState.tree.children.get(o).toArray();await this.remove(i,!1),await this.plugin.state.updateTransform(this.plugin.state.data,r.cell.transform.ref,n,"Structure Type"),await this.plugin.builders.structure.representation.applyPreset(r.cell.transform.ref,this.plugin.config.get(Pe.Structure.DefaultRepresentationPreset)??"")},{canUndo:"Structure Type"}),he.Camera.Reset(this.plugin)}clearTrajectory(r){let n=this.dataState.build();for(let o of r.models)n.delete(o.cell);return n.commit()}};(r=>{function e(n){if(!n.length)return[];if(n.length===1)return n[0].components.map(a=>[a]);let o=[],i=new Map;for(let a of n)for(let s of a.components){let c=s.key;if(!c)continue;let u=i.get(c);u||(u=[],i.set(c,u),o.push(u)),u.push(s)}return o}r.getComponentGroups=e;function t(n){let{structures:o}=n.managers.structure.hierarchy.selection;if(o.length===0)return"";if(o.length===1){let c=o[0],u=c.cell.obj?.data;if(!u)return c.cell.obj?.label||"Structure";let l=u.models[0]||u.representativeModel||u.masterModel;if(!l)return c.cell.obj?.label||"Structure";let d=l.entryId;return c.model?.trajectory?.models&&c.model.trajectory.models.length===1?d:c.model?`${c.model.cell.obj?.label} | ${d}`:d}let a=o[0]?.model?.trajectory,s=!0;for(let c of o)if(c?.model?.trajectory!==a){s=!1;break}return s&&a?`${a.cell.obj?.label} | ${o.length} structures`:`${o.length} structures`}r.getSelectedStructuresDescription=t})(en||={});var jp=ge.BuiltIn({name:"create-group",display:{name:"Group"},from:[],to:R.Group,params:{label:f.Text("Group"),description:f.Optional(f.Text(""))}})({apply({params:e}){return new R.Group({},e)},update({oldParams:e,newParams:t,b:r}){return ts(e,t)?z.UpdateResult.Unchanged:(r.label=t.label,r.description=t.description,z.UpdateResult.Updated)}});var Fa={customText:f.Text("",{label:"Text",description:"Override the label with custom value.",isEssential:!0}),textColor:f.Color(Ee.black,{isEssential:!0}),textSize:f.Numeric(.5,{min:.1,max:10,step:.1},{isEssential:!0})},mr={...zt.Params,...Fa,borderWidth:f.Numeric(.2,{min:0,max:.5,step:.01})};var Wp={unitLabel:f.Text("\u212B",{isEssential:!0})},Ay={...tt.Params,...Wp,lineSizeAttenuation:f.Boolean(!0),linesColor:f.Color(Ee.lightgreen,{isEssential:!0}),linesSize:f.Numeric(.075,{min:.01,max:5,step:.01}),dashLength:f.Numeric(.2,{min:.01,max:.2,step:.01})},wy={...mr,...Wp},Hp={lines:(e,t)=>Te(Oy,tt.Utils,{modifyState:r=>({...r,markerActions:dt.Highlighting})}),text:(e,t)=>Te((r,n,o,i)=>rr(o,()=>By(r,n,o,i)),zt.Utils,{modifyState:r=>({...r,markerActions:0})})},Qo={...Ay,...wy,visuals:f.MultiSelect(["lines","text"],f.objectToOptions(Hp))};function Ly(){return{sphereA:_e(),sphereB:_e(),center:x(),distance:0}}function $p(e,t){let{sphereA:r,sphereB:n,center:o}=t,[i,a]=e.loci;return Z.getBoundingSphere(i,r),Z.getBoundingSphere(a,n),x.add(o,r.center,n.center),x.scale(o,o,.5),t.distance=x.distance(r.center,n.center),t}var Cn=Ly();function qp(e,t){return e.pairs.length===1?`Distance ${no(e.pairs[0],{unitLabel:t,measureOnly:!0})}`:`${e.pairs.length} Distances`}function Iy(e,t,r){let n=Ft.create(128,64,r);for(let o=0,i=e.pairs.length;o<i;++o)$p(e.pairs[o],Cn),n.addFixedLengthDashes(Cn.sphereA.center,Cn.sphereB.center,t.dashLength,o);return n.getLines()}function Oy(e,t,r,n){let o=Iy(t,r,n&&n.geometry),i=qp(t,r.unitLabel);return Se(i,t,o,()=>r.linesColor,()=>r.linesSize,s=>no(t.pairs[s],r))}function Fy(e,t,r){let n=nr.create(t,128,64,r);for(let o=0,i=e.pairs.length;o<i;++o){$p(e.pairs[o],Cn);let{center:a,distance:s,sphereA:c,sphereB:u}=Cn,l=t.customText||`${s.toFixed(2)} ${t.unitLabel}`,p=Math.max(2,c.radius,u.radius)/2;n.add(l,a[0],a[1],a[2],1,p,o)}return n.getText()}function By(e,t,r,n){let o=Fy(t,r,n&&n.geometry),i=qp(t,r.unitLabel);return Se(i,t,o,()=>r.textColor,()=>r.textSize,s=>no(t.pairs[s],r))}function Ba(e,t){return ve.createMulti("Distance",e,t,ve.StateBuilder,Hp)}var Xp={color:f.Color(Ee.lightgreen),arcScale:f.Numeric(.7,{min:.01,max:1,step:.01})},Zp={...tt.Params,...Xp,lineSizeAttenuation:f.Boolean(!0),linesSize:f.Numeric(.04,{min:.01,max:5,step:.01}),dashLength:f.Numeric(.04,{min:.01,max:.2,step:.01})},My={...Zp},Vy={...Zp},ky={...Be.Params,...Xp,ignoreLight:f.Boolean(!0),sectorOpacity:f.Numeric(.75,{min:0,max:1,step:.01})},Kp={vectors:(e,t)=>Te(zy,tt.Utils,{modifyState:r=>({...r,pickable:!1})}),arc:(e,t)=>Te(jy,tt.Utils,{modifyState:r=>({...r,pickable:!1})}),sector:(e,t)=>Te(Hy,Be.Utils,{modifyProps:r=>({...r,alpha:r.sectorOpacity}),modifyState:r=>({...r,markerActions:dt.Highlighting})}),text:(e,t)=>Te((r,n,o,i)=>rr(o,()=>qy(r,n,o,i)),zt.Utils,{modifyState:r=>({...r,markerActions:0})})},Jo={...My,...Vy,...ky,...mr,visuals:f.MultiSelect(["vectors","sector","text"],f.objectToOptions(Kp))};function Gy(){return{sphereA:_e(),sphereB:_e(),sphereC:_e(),arcDirA:x(),arcDirC:x(),arcNormal:x(),radius:0,angle:0}}var hr=x(),Pn=ce();function ei(e,t,r){let{sphereA:n,sphereB:o,sphereC:i}=t,{arcDirA:a,arcDirC:s,arcNormal:c}=t,[u,l,d]=e.loci;Z.getBoundingSphere(u,n),Z.getBoundingSphere(l,o),Z.getBoundingSphere(d,i),x.sub(a,n.center,o.center),x.sub(s,i.center,o.center),x.cross(c,a,s);let m=Math.min(x.magnitude(a),x.magnitude(s))*r;return t.radius=m,t.angle=x.angle(a,s),t}function Yp(e,t){let{radius:r,angle:n}=e,o=t?On(n,r)/t:32;ce.targetTo(Pn,e.sphereB.center,e.sphereA.center,e.arcNormal),ce.setTranslation(Pn,e.sphereB.center),ce.mul(Pn,Pn,ce.rotY180);let i=Gr({radius:r,thetaLength:n,segments:o});return Hn(i,Pn)}var Le=Gy();function ti(e){return e.triples.length===1?`Angle ${oo(e.triples[0],{measureOnly:!0})}`:`${e.triples.length} Angles`}function Uy(e,t,r){let n=Ft.create(128,64,r);for(let o=0,i=e.triples.length;o<i;++o)ei(e.triples[o],Le,t.arcScale),n.addFixedLengthDashes(Le.sphereB.center,Le.sphereA.center,t.dashLength,o),n.addFixedLengthDashes(Le.sphereB.center,Le.sphereC.center,t.dashLength,o);return n.getLines()}function zy(e,t,r,n){let o=Uy(t,r,n&&n.geometry),i=ti(t);return Se(i,t,o,()=>r.color,()=>r.linesSize,()=>"")}function Ny(e,t,r){let n=Ft.create(128,64,r);for(let o=0,i=e.triples.length;o<i;++o){ei(e.triples[o],Le,t.arcScale);let a=Yp(Le,t.dashLength),{indices:s,vertices:c}=a;for(let u=0,l=s.length;u<l;u+=3){if(u%2===1)continue;let d=s[u]*3,p=s[u+1]*3,m=c[d],h=c[d+1],g=c[d+2],S=c[p],y=c[p+1],C=c[p+2];n.add(m,h,g,S,y,C,o)}}return n.getLines()}function jy(e,t,r,n){let o=Ny(t,r,n&&n.geometry),i=ti(t);return Se(i,t,o,()=>r.color,()=>r.linesSize,()=>"")}function Wy(e,t,r){let n=me.createState(128,64,r);for(let o=0,i=e.triples.length;o<i;++o){ei(e.triples[o],Le,t.arcScale);let a=Yp(Le);n.currentGroup=o,me.addPrimitive(n,ce.id,a),me.addPrimitiveFlipped(n,ce.id,a)}return me.getMesh(n)}function Hy(e,t,r,n){let o=Wy(t,r,n&&n.geometry),i=ti(t);return Se(i,t,o,()=>r.color,()=>1,s=>oo(t.triples[s]))}function $y(e,t,r){let n=nr.create(t,128,64,r);for(let o=0,i=e.triples.length;o<i;++o){ei(e.triples[o],Le,t.arcScale),x.add(hr,Le.arcDirA,Le.arcDirC),x.setMagnitude(hr,hr,Le.radius),x.add(hr,Le.sphereB.center,hr);let a=In(Le.angle).toFixed(2),s=t.customText||`${a}\xB0`,u=Math.max(2,Le.sphereA.radius,Le.sphereB.radius,Le.sphereC.radius)/2;n.add(s,hr[0],hr[1],hr[2],.1,u,o)}return n.getText()}function qy(e,t,r,n){let o=$y(t,r,n&&n.geometry),i=ti(t);return Se(i,t,o,()=>r.textColor,()=>r.textSize,s=>oo(t.triples[s]))}function Ma(e,t){return ve.createMulti("Angle",e,t,ve.StateBuilder,Kp)}var Qp={color:f.Color(Ee.lightgreen),arcScale:f.Numeric(.7,{min:.01,max:1,step:.01})},ri={...tt.Params,...Qp,lineSizeAttenuation:f.Boolean(!0),linesSize:f.Numeric(.04,{min:.01,max:5,step:.01}),dashLength:f.Numeric(.04,{min:.01,max:.2,step:.01})},Xy={...ri},Zy={...ri},Ky={...ri},Yy={...ri},Qy={...Be.Params,...Qp,ignoreLight:f.Boolean(!0),sectorOpacity:f.Numeric(.75,{min:0,max:1,step:.01})},Jp={vectors:(e,t)=>Te(tb,tt.Utils,{modifyState:r=>({...r,pickable:!1})}),extenders:(e,t)=>Te(sb,tt.Utils,{modifyState:r=>({...r,pickable:!1})}),connector:(e,t)=>Te(nb,tt.Utils,{modifyState:r=>({...r,pickable:!1})}),arms:(e,t)=>Te(ib,tt.Utils,{modifyState:r=>({...r,pickable:!1})}),arc:(e,t)=>Te(ub,tt.Utils,{modifyState:r=>({...r,pickable:!1})}),sector:(e,t)=>Te(db,Be.Utils,{modifyProps:r=>({...r,alpha:r.sectorOpacity}),modifyState:r=>({...r,markerActions:dt.Highlighting})}),text:(e,t)=>Te((r,n,o,i)=>rr(o,()=>fb(r,n,o,i)),zt.Utils,{modifyState:r=>({...r,markerActions:0})})},ni={...Xy,...Zy,...Ky,...Yy,...Qy,...mr,visuals:f.MultiSelect(["extenders","arms","sector","text"],f.objectToOptions(Jp))};function Jy(){return{sphereA:_e(),sphereB:_e(),sphereC:_e(),sphereD:_e(),dirBA:x(),dirCD:x(),projA:x(),projD:x(),arcPointA:x(),arcPointD:x(),arcDirA:x(),arcDirD:x(),arcCenter:x(),arcNormal:x(),radius:0,angle:0}}var Ue=x(),Dn=ce();function Dr(e,t,r){let{sphereA:n,sphereB:o,sphereC:i,sphereD:a,dirBA:s,dirCD:c,projA:u,projD:l}=t,{arcPointA:d,arcPointD:p,arcDirA:m,arcDirD:h,arcCenter:g,arcNormal:S}=t,[y,C,T,I]=e.loci;Z.getBoundingSphere(y,n),Z.getBoundingSphere(C,o),Z.getBoundingSphere(T,i),Z.getBoundingSphere(I,a),x.add(g,o.center,i.center),x.scale(g,g,.5),x.sub(s,n.center,o.center),x.sub(c,a.center,i.center),x.add(d,g,s),x.add(p,g,c),x.sub(S,i.center,o.center),x.orthogonalize(m,S,s),x.orthogonalize(h,S,c),x.projectPointOnVector(u,d,m,g),x.projectPointOnVector(l,p,h,g);let V=Math.min(x.distance(u,g),x.distance(l,g))*r;x.setMagnitude(m,m,V),x.setMagnitude(h,h,V),x.add(d,g,m),x.add(p,g,h),t.radius=V,t.angle=x.dihedralAngle(n.center,o.center,i.center,a.center),x.matchDirection(Ue,S,x.sub(Ue,d,n.center));let H=x.angle(s,Ue),J=V/Math.cos(H-Oi);x.add(u,o.center,x.setMagnitude(Ue,s,J)),x.matchDirection(Ue,S,x.sub(Ue,p,a.center));let oe=x.angle(c,Ue),pe=V/Math.cos(oe-Oi);return x.add(l,i.center,x.setMagnitude(Ue,c,pe)),t}function ef(e,t){let{radius:r,angle:n}=e,o=t?On(n,r)/t:32;ce.targetTo(Dn,e.arcCenter,n<0?e.arcPointD:e.arcPointA,e.arcNormal),ce.setTranslation(Dn,e.arcCenter),ce.mul(Dn,Dn,ce.rotY180);let i=Gr({radius:r,thetaLength:Math.abs(n),segments:o});return Hn(i,Dn)}var de=Jy();function _r(e){return e.quads.length===1?`Dihedral ${io(e.quads[0],{measureOnly:!0})}`:`${e.quads.length} Dihedrals`}function eb(e,t,r){let n=Ft.create(128,64,r);for(let o=0,i=e.quads.length;o<i;++o)Dr(e.quads[o],de,t.arcScale),n.addFixedLengthDashes(de.arcCenter,de.arcPointA,t.dashLength,o),n.addFixedLengthDashes(de.arcCenter,de.arcPointD,t.dashLength,o);return n.getLines()}function tb(e,t,r,n){let o=eb(t,r,n&&n.geometry),i=_r(t);return Se(i,t,o,()=>r.color,()=>r.linesSize,()=>"")}function rb(e,t,r){let n=Ft.create(128,64,r);for(let o=0,i=e.quads.length;o<i;++o)Dr(e.quads[o],de,t.arcScale),n.addFixedLengthDashes(de.sphereB.center,de.sphereC.center,t.dashLength,o);return n.getLines()}function nb(e,t,r,n){let o=rb(t,r,n&&n.geometry),i=_r(t);return Se(i,t,o,()=>r.color,()=>r.linesSize,()=>"")}function ob(e,t,r){let n=Ft.create(128,64,r);for(let o=0,i=e.quads.length;o<i;++o)Dr(e.quads[o],de,t.arcScale),n.addFixedLengthDashes(de.sphereB.center,de.sphereA.center,t.dashLength,o),n.addFixedLengthDashes(de.sphereC.center,de.sphereD.center,t.dashLength,o);return n.getLines()}function ib(e,t,r,n){let o=ob(t,r,n&&n.geometry),i=_r(t);return Se(i,t,o,()=>r.color,()=>r.linesSize,()=>"")}function ab(e,t,r){let n=Ft.create(128,64,r);for(let o=0,i=e.quads.length;o<i;++o)Dr(e.quads[o],de,t.arcScale),n.addFixedLengthDashes(de.arcPointA,de.projA,t.dashLength,o),n.addFixedLengthDashes(de.arcPointD,de.projD,t.dashLength,o);return n.getLines()}function sb(e,t,r,n){let o=ab(t,r,n&&n.geometry),i=_r(t);return Se(i,t,o,()=>r.color,()=>r.linesSize,()=>"")}function cb(e,t,r){let n=Ft.create(128,64,r);for(let o=0,i=e.quads.length;o<i;++o){Dr(e.quads[o],de,t.arcScale);let a=ef(de,t.dashLength),{indices:s,vertices:c}=a;for(let u=0,l=s.length;u<l;u+=3){if(u%2===1)continue;let d=s[u]*3,p=s[u+1]*3,m=c[d],h=c[d+1],g=c[d+2],S=c[p],y=c[p+1],C=c[p+2];n.add(m,h,g,S,y,C,o)}}return n.getLines()}function ub(e,t,r,n){let o=cb(t,r,n&&n.geometry),i=_r(t);return Se(i,t,o,()=>r.color,()=>r.linesSize,()=>"")}function lb(e,t,r){let n=me.createState(128,64,r);for(let o=0,i=e.quads.length;o<i;++o){Dr(e.quads[o],de,t.arcScale);let a=ef(de);n.currentGroup=o,me.addPrimitive(n,ce.id,a),me.addPrimitiveFlipped(n,ce.id,a)}return me.getMesh(n)}function db(e,t,r,n){let o=lb(t,r,n&&n.geometry),i=_r(t);return Se(i,t,o,()=>r.color,()=>1,s=>io(t.quads[s]))}function pb(e,t,r){let n=nr.create(t,128,64,r);for(let o=0,i=e.quads.length;o<i;++o){Dr(e.quads[o],de,t.arcScale),x.add(Ue,de.arcDirA,de.arcDirD),x.setMagnitude(Ue,Ue,de.radius),x.add(Ue,de.arcCenter,Ue);let a=In(de.angle).toFixed(2);a==="-0.00"&&(a="0.00");let s=t.customText||`${a}\xB0`,u=Math.max(2,de.sphereA.radius,de.sphereB.radius,de.sphereC.radius,de.sphereD.radius)/2;n.add(s,Ue[0],Ue[1],Ue[2],.1,u,o)}return n.getText()}function fb(e,t,r,n){let o=pb(t,r,n&&n.geometry),i=_r(t);return Se(i,t,o,()=>r.textColor,()=>r.textSize,s=>io(t.quads[s]))}function Va(e,t){return ve.createMulti("Dihedral",e,t,ve.StateBuilder,Jp)}var mb={...mr},tf={text:(e,t)=>Te((r,n,o,i)=>rr(o,()=>bb(r,n,o,i)),zt.Utils)},oi={...mb,scaleByRadius:f.Boolean(!0),visuals:f.MultiSelect(["text"],f.objectToOptions(tf)),snapshotKey:f.Text("",{isEssential:!0,disableInteractiveUpdates:!0,description:"Activate the snapshot with the provided key when clicking on the label"}),tooltip:f.Text("",{isEssential:!0,multiline:!0,disableInteractiveUpdates:!0,placeholder:"Tooltip",description:"Tooltip text to be displayed when hovering over the label"})},hb=_e();function ka(e,t=!1){return e.label||ro(e.loci,{hidePrefix:!0,htmlStyling:!1,condensed:t})}function gb(e){return e.infos.length===1?ka(e.infos[0]):`${e.infos.length} Labels`}function yb(e,t,r){let n=nr.create(t,128,64,r),o=t.customText.trim();for(let i=0,a=e.infos.length;i<a;++i){let s=e.infos[i],c=Z.getBoundingSphere(s.loci,hb);if(!c)continue;let{center:u,radius:l}=c,d=o||ka(s,!0);n.add(d,u[0],u[1],u[2],t.scaleByRadius?l/.9:0,t.scaleByRadius?Math.max(1,l):1,i)}return n.getText()}function bb(e,t,r,n){let o=yb(t,r,n&&n.geometry),i=gb(t),a=r.tooltip?.trim()??"",s=r.customText.trim(),c;return a?c=u=>a:s?c=u=>s:c=u=>ka(t.infos[u]),Se(i,t,o,()=>r.textColor,()=>r.textSize,c)}function Ga(e,t){return ve.createMulti("Label",e,t,ve.StateBuilder,tf)}var Er=x(),xb=ce.identity(),Ar=new Float32Array(18),vb=new Uint8Array([0,1,2,3,4,5]);function rf(e,t,r,n,o){let{origin:i,dirA:a,dirB:s,dirC:c}=t;x.add(Er,i,a),x.toArray(x.add(Er,i,a),Ar,0),x.toArray(x.sub(Er,i,a),Ar,3),x.toArray(x.add(Er,i,s),Ar,6),x.toArray(x.sub(Er,i,s),Ar,9),x.toArray(x.add(Er,i,c),Ar,12),x.toArray(x.sub(Er,i,c),Ar,15);let u=$n(Ar,vb),l=kt.volume(t),d=Math.cbrt(l)/300*r;me.addCage(e,xb,u,d,n,o)}var VB=x.zero(),kB=x.zero();var gr=x(),Sb=x(),Tb=x(),Cb=x(),Rb=ce.identity(),nf=new Float32Array(24),Pb=new Uint8Array([0,1,0,3,0,6,1,2,1,7,2,3,2,4,3,5,4,5,4,7,5,6,6,7]);function of(e,t,r,n,o){let{origin:i,dirA:a,dirB:s,dirC:c}=t,u=x.negate(Sb,a),l=x.negate(Tb,s),d=x.negate(Cb,c),p=0,m=function(y,C,T){x.copy(gr,i),x.add(gr,gr,y),x.add(gr,gr,C),x.add(gr,gr,T),x.toArray(gr,nf,p),p+=3};m(a,s,c),m(a,s,d),m(a,l,d),m(a,l,c),m(u,l,d),m(u,l,c),m(u,s,c),m(u,s,d);let h=$n(nf,Pb),g=kt.volume(t),S=Math.cbrt(g)/300*r;me.addCage(e,Rb,h,S,n,o)}var Db=ce.identity(),af=x();function _b(e,t,r,n,o){return x.add(af,t,r),ce.targetTo(e,t,af,n),ce.setTranslation(e,t),ce.scale(e,e,o)}function sf(e,t,r,n,o,i){me.addPrimitive(e,_b(Db,t,r,n,o),Ys(i))}var Ua={color:f.Color(Ee.orange),scaleFactor:f.Numeric(1,{min:.1,max:10,step:.1}),radiusScale:f.Numeric(2,{min:.1,max:10,step:.1})},Eb={...Be.Params,...Ua},Ab={...Be.Params,...Ua},wb={...Be.Params,...Ua},cf={axes:(e,t)=>Te(Ob,Be.Utils),box:(e,t)=>Te(Mb,Be.Utils),ellipsoid:(e,t)=>Te(Gb,Be.Utils)},ii={...Eb,...Ab,...wb,visuals:f.MultiSelect(["box"],f.objectToOptions(cf))};function Lb(e){return`Principal Axes of ${kr(e,{countsOnly:!0})}`}function Ib(e,t,r){let n=me.createState(256,128,r),o=P.Loci.getPrincipalAxesMany(e.locis);return kt.scale(o.momentsAxes,o.momentsAxes,t.scaleFactor),n.currentGroup=0,rf(n,o.momentsAxes,t.radiusScale,2,20),me.getMesh(n)}function Ob(e,t,r,n){let o=Ib(t,r,n&&n.geometry),i=Lb(t.locis);return Se(i,t,o,()=>r.color,()=>1,()=>i)}function Fb(e){return`Oriented Box of ${kr(e,{countsOnly:!0})}`}function Bb(e,t,r){let n=me.createState(256,128,r),o=P.Loci.getPrincipalAxesMany(e.locis);return kt.scale(o.boxAxes,o.boxAxes,t.scaleFactor),n.currentGroup=0,of(n,o.boxAxes,t.radiusScale,2,20),me.getMesh(n)}function Mb(e,t,r,n){let o=Bb(t,r,n&&n.geometry),i=Fb(t.locis);return Se(i,t,o,()=>r.color,()=>1,()=>i)}function Vb(e){return`Oriented Ellipsoid of ${kr(e,{countsOnly:!0})}`}function kb(e,t,r){let n=me.createState(256,128,r),i=P.Loci.getPrincipalAxesMany(e.locis).boxAxes,{origin:a,dirA:s,dirB:c}=i,u=kt.size(x(),i);x.scale(u,u,.5*t.scaleFactor);let l=x.create(u[2],u[1],u[0]);return n.currentGroup=0,sf(n,a,s,c,l,2),me.getMesh(n)}function Gb(e,t,r,n){let o=kb(t,r,n&&n.geometry),i=Vb(t.locis);return Se(i,t,o,()=>r.color,()=>1,()=>i)}function za(e,t){let r=ve.createMulti("Orientation",e,t,ve.StateBuilder,cf);return r.setState({markerActions:dt.Highlighting}),r}var uf={vertices:new Float32Array([-.5,.5,0,.5,.5,0,-.5,-.5,0,.5,-.5,0]),normals:new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1]),indices:new Uint32Array([0,2,1,1,2,3])},iM={vertices:uf.vertices,edges:new Uint32Array([0,1,2,3,3,1,2,0])};function lf(){return uf}var Ub={...Be.Params,color:f.Color(Ee.orange),scaleFactor:f.Numeric(1,{min:.1,max:10,step:.1}),variant:f.Select("rectangle",f.arrayToOptions(["rectangle","circle"]),{label:"Shape"}),radialSegments:f.Numeric(64,{min:12,max:256,step:1},{hideIf:e=>e.variant!=="circle"})},df={plane:(e,t)=>Te(jb,Be.Utils)},ai={...Ub,visuals:f.MultiSelect(["plane"],f.objectToOptions(df))};function zb(e){return`Best Fit Plane of ${kr(e,{countsOnly:!0})}`}var Xe=ce(),Na=x();function Nb(e,t,r){let n=me.createState(256,128,r),i=P.Loci.getPrincipalAxesMany(e.locis).boxAxes;if(x.add(Na,i.origin,i.dirC),ce.targetTo(Xe,Na,i.origin,i.dirB),n.currentGroup=0,t.variant==="circle"){ce.mul(Xe,Xe,ce.rotX90),ce.scaleUniformly(Xe,Xe,t.scaleFactor),ce.setTranslation(Xe,i.origin);let a=Math.max(x.magnitude(i.dirA),x.magnitude(i.dirB)),s=Gr({radius:a,segments:t.radialSegments});me.addPrimitive(n,Xe,s),me.addPrimitiveFlipped(n,Xe,s)}else{let a=lf();ce.scale(Xe,Xe,kt.size(Na,i)),ce.scaleUniformly(Xe,Xe,t.scaleFactor),ce.setTranslation(Xe,i.origin),me.addPrimitive(n,Xe,a),me.addPrimitiveFlipped(n,Xe,a)}return me.getMesh(n)}function jb(e,t,r,n){let o=Nb(t,r,n&&n.geometry),i=zb(t.locis);return Se(i,t,o,()=>r.color,()=>1,()=>i)}function ja(e,t){let r=ve.createMulti("Plane",e,t,ve.StateBuilder,df);return r.setState({markerActions:dt.Highlighting}),r}var si=ge.BuiltIn({name:"structure-selections-distance-3d",display:"3D Distance",from:R.Molecule.Structure.Selections,to:R.Shape.Representation3D,params:()=>({...Qo})})({canAutoUpdate({oldParams:e,newParams:t}){return!0},apply({a:e,params:t},r){return ie.create("Structure Distance",async n=>{let o=pf(e.data),i=Ba({graphics:r.canvas3d?.graphics,...r.representation.structure.themes},()=>Qo);return await i.createOrUpdate(t,o).runInContext(n),new R.Shape.Representation3D({repr:i,sourceData:o},{label:"Distance"})})},update({a:e,b:t,oldParams:r,newParams:n},o){return ie.create("Structure Distance",async i=>{let a={...t.data.repr.props,...n},s=pf(e.data);return await t.data.repr.createOrUpdate(a,s).runInContext(i),t.data.sourceData=s,z.UpdateResult.Updated})}});var ci=ge.BuiltIn({name:"structure-selections-angle-3d",display:"3D Angle",from:R.Molecule.Structure.Selections,to:R.Shape.Representation3D,params:()=>({...Jo})})({canAutoUpdate({oldParams:e,newParams:t}){return!0},apply({a:e,params:t},r){return ie.create("Structure Angle",async n=>{let o=ff(e.data),i=Ma({graphics:r.canvas3d?.graphics,...r.representation.structure.themes},()=>Jo);return await i.createOrUpdate(t,o).runInContext(n),new R.Shape.Representation3D({repr:i,sourceData:o},{label:"Angle"})})},update({a:e,b:t,oldParams:r,newParams:n},o){return ie.create("Structure Angle",async i=>{let a={...t.data.repr.props,...n},s=ff(e.data);return await t.data.repr.createOrUpdate(a,s).runInContext(i),t.data.sourceData=s,z.UpdateResult.Updated})}});var ui=ge.BuiltIn({name:"structure-selections-dihedral-3d",display:"3D Dihedral",from:R.Molecule.Structure.Selections,to:R.Shape.Representation3D,params:()=>({...ni})})({canAutoUpdate({oldParams:e,newParams:t}){return!0},apply({a:e,params:t},r){return ie.create("Structure Dihedral",async n=>{let o=mf(e.data),i=Va({graphics:r.canvas3d?.graphics,...r.representation.structure.themes},()=>ni);return await i.createOrUpdate(t,o).runInContext(n),new R.Shape.Representation3D({repr:i,sourceData:o},{label:"Dihedral"})})},update({a:e,b:t,oldParams:r,newParams:n},o){return ie.create("Structure Dihedral",async i=>{let a={...t.data.repr.props,...n},s=mf(e.data);return await t.data.repr.createOrUpdate(a,s).runInContext(i),t.data.sourceData=s,z.UpdateResult.Updated})}});var _n=ge.BuiltIn({name:"structure-selections-label-3d",display:"3D Label",from:R.Molecule.Structure.Selections,to:R.Shape.Representation3D,params:()=>({...oi})})({canAutoUpdate({oldParams:e,newParams:t}){return!0},apply({a:e,params:t},r){return ie.create("Structure Label",async n=>{let o=hf(e.data),i=Ga({graphics:r.canvas3d?.graphics,...r.representation.structure.themes},()=>oi);await i.createOrUpdate(t,o).runInContext(n);let a=!!(t.snapshotKey?.trim()||t.tooltip?.trim());return i.setState({pickable:a,markerActions:a?dt.Highlighting:0}),new R.Shape.Representation3D({repr:i,sourceData:o},{label:"Label"})})},update({a:e,b:t,oldParams:r,newParams:n},o){return ie.create("Structure Label",async i=>{let a={...t.data.repr.props,...n},s=hf(e.data);await t.data.repr.createOrUpdate(a,s).runInContext(i),t.data.sourceData=s;let c=!!(n.snapshotKey?.trim()||n.tooltip?.trim());return t.data.repr.setState({pickable:c,markerActions:c?dt.Highlighting:0}),z.UpdateResult.Updated})}});var li=ge.BuiltIn({name:"structure-selections-orientation-3d",display:"3D Orientation",from:R.Molecule.Structure.Selections,to:R.Shape.Representation3D,params:()=>({...ii})})({canAutoUpdate({oldParams:e,newParams:t}){return!0},apply({a:e,params:t},r){return ie.create("Structure Orientation",async n=>{let o=gf(e.data),i=za({graphics:r.canvas3d?.graphics,...r.representation.structure.themes},()=>ii);return await i.createOrUpdate(t,o).runInContext(n),new R.Shape.Representation3D({repr:i,sourceData:o},{label:"Orientation"})})},update({a:e,b:t,oldParams:r,newParams:n},o){return ie.create("Structure Orientation",async i=>{let a={...t.data.repr.props,...n},s=gf(e.data);return await t.data.repr.createOrUpdate(a,s).runInContext(i),t.data.sourceData=s,z.UpdateResult.Updated})}});var di=ge.BuiltIn({name:"structure-selections-plane-3d",display:"3D Plane",from:R.Molecule.Structure.Selections,to:R.Shape.Representation3D,params:()=>({...ai})})({canAutoUpdate({oldParams:e,newParams:t}){return!0},apply({a:e,params:t},r){return ie.create("Structure Plane",async n=>{let o=yf(e.data),i=ja({graphics:r.canvas3d?.graphics,...r.representation.structure.themes},()=>ai);return await i.createOrUpdate(t,o).runInContext(n),new R.Shape.Representation3D({repr:i,sourceData:o},{label:"Plane"})})},update({a:e,b:t,oldParams:r,newParams:n},o){return ie.create("Structure Plane",async i=>{let a={...t.data.repr.props,...n},s=yf(e.data);return await t.data.repr.createOrUpdate(a,s).runInContext(i),t.data.sourceData=s,z.UpdateResult.Updated})}});function pf(e){let t=e[0].loci,r=e[1].loci;return{pairs:[{loci:[t,r]}]}}function ff(e){let t=e[0].loci,r=e[1].loci,n=e[2].loci;return{triples:[{loci:[t,r,n]}]}}function mf(e){let t=e[0].loci,r=e[1].loci,n=e[2].loci,o=e[3].loci;return{quads:[{loci:[t,r,n,o]}]}}function hf(e){return{infos:[{loci:e[0].loci}]}}function gf(e){return{locis:e.map(t=>t.loci)}}function yf(e){return{locis:e.map(t=>t.loci)}}Bt(si,(e,t)=>vr(r=>Ba(r,()=>Qo),e,t));Bt(ci,(e,t)=>vr(r=>Ma(r,()=>Jo),e,t));Bt(ui,(e,t)=>vr(r=>Va(r,()=>ni),e,t));Bt(_n,(e,t)=>vr(r=>Ga(r,()=>oi),e,t));Bt(li,(e,t)=>vr(r=>za(r,()=>ii),e,t));Bt(di,(e,t)=>vr(r=>ja(r,()=>ai),e,t));var En="measurement-group",pi="measurement-order-label",Wb={distanceUnitLabel:f.Text("\u212B",{isEssential:!0}),textColor:Fa.textColor},Hb=f.getDefaultValues(Wb);function ft(e){return{bundle:P.Bundle.fromLoci(e)}}var fi=class extends Me{constructor(r){super({labels:[],distances:[],angles:[],dihedrals:[],orientations:[],planes:[],options:Hb});this.plugin=r;this.behaviors={state:this.ev.behavior(this.state)};this._empty=[];this.group=void 0;this.groupStale=!0;let{events:n}=r.state.data;n.cell.created.subscribe(o=>this.trackGroup(o.ref,o.cell.transform)),n.cell.stateUpdated.subscribe(o=>this.trackGroup(o.ref,o.cell.transform)),n.cell.removed.subscribe(o=>{o.ref===this.group&&(this.group=void 0,this.groupStale=!0)}),r.state.data.events.changed.subscribe(o=>{o.inTransaction||r.behaviors.state.isAnimating.value||this.sync()}),r.behaviors.state.isAnimating.subscribe(o=>{!o&&!r.behaviors.state.isUpdating.value&&this.sync()})}stateUpdated(){this.behaviors.state.next(this.state)}getGroup(){let r=this.plugin.state.data,n=be.findTagInSubtree(r.tree,xr.RootRef,En),o=this.plugin.state.data.build();return n?o.to(n):o.toRoot().group(jp,{label:"Measurements"},{tags:En})}async setOptions(r){this.updateState({options:r})&&this.stateUpdated();let n=this.plugin.state.data.build();for(let o of this.state.distances)n.to(o).update(i=>{i.unitLabel=r.distanceUnitLabel,i.textColor=r.textColor});for(let o of this.state.labels)n.to(o).update(i=>{i.textColor=r.textColor});for(let o of this.state.angles)n.to(o).update(i=>{i.textColor=r.textColor});for(let o of this.state.dihedrals)n.to(o).update(i=>{i.textColor=r.textColor});n.editInfo.count!==0&&await he.State.Update(this.plugin,{state:this.plugin.state.data,tree:n,options:{doNotLogTiming:!0}})}async addDistance(r,n,o){let i=this.plugin.helpers.substructureParent.get(r.structure),a=this.plugin.helpers.substructureParent.get(n.structure);if(!i||!a)return;let s=[i.transform.ref];Zt(s,a.transform.ref);let u=this.getGroup().apply(or,{selections:[{key:"a",groupId:"a",ref:i.transform.ref,...ft(r)},{key:"b",groupId:"b",ref:a.transform.ref,...ft(n)}],isTransitive:!0,label:"Distance"},{dependsOn:s,tags:o?.selectionTags}),l=u.apply(si,{customText:o?.customText||"",unitLabel:this.state.options.distanceUnitLabel,textColor:this.state.options.textColor,...o?.lineParams,...o?.labelParams,...o?.visualParams},{tags:o?.reprTags}),d=this.plugin.state.data;return await he.State.Update(this.plugin,{state:d,tree:l,options:{doNotLogTiming:!0}}),{selection:u.selector,representation:l.selector}}async addAngle(r,n,o,i){let a=this.plugin.helpers.substructureParent.get(r.structure),s=this.plugin.helpers.substructureParent.get(n.structure),c=this.plugin.helpers.substructureParent.get(o.structure);if(!a||!s||!c)return;let u=[a.transform.ref];Zt(u,s.transform.ref),Zt(u,c.transform.ref);let d=this.getGroup().apply(or,{selections:[{key:"a",ref:a.transform.ref,...ft(r)},{key:"b",ref:s.transform.ref,...ft(n)},{key:"c",ref:c.transform.ref,...ft(o)}],isTransitive:!0,label:"Angle"},{dependsOn:u,tags:i?.selectionTags}),p=d.apply(ci,{customText:i?.customText||"",textColor:this.state.options.textColor,...i?.lineParams,...i?.labelParams,...i?.visualParams},{tags:i?.reprTags}),m=this.plugin.state.data;return await he.State.Update(this.plugin,{state:m,tree:p,options:{doNotLogTiming:!0}}),{selection:d.selector,representation:p.selector}}async addDihedral(r,n,o,i,a){let s=this.plugin.helpers.substructureParent.get(r.structure),c=this.plugin.helpers.substructureParent.get(n.structure),u=this.plugin.helpers.substructureParent.get(o.structure),l=this.plugin.helpers.substructureParent.get(i.structure);if(!s||!c||!u||!l)return;let d=[s.transform.ref];Zt(d,c.transform.ref),Zt(d,u.transform.ref),Zt(d,l.transform.ref);let m=this.getGroup().apply(or,{selections:[{key:"a",ref:s.transform.ref,...ft(r)},{key:"b",ref:c.transform.ref,...ft(n)},{key:"c",ref:u.transform.ref,...ft(o)},{key:"d",ref:l.transform.ref,...ft(i)}],isTransitive:!0,label:"Dihedral"},{dependsOn:d,tags:a?.selectionTags}),h=m.apply(ui,{customText:a?.customText||"",textColor:this.state.options.textColor,...a?.lineParams,...a?.labelParams,...a?.visualParams},{tags:a?.reprTags}),g=this.plugin.state.data;return await he.State.Update(this.plugin,{state:g,tree:h,options:{doNotLogTiming:!0}}),{selection:m.selector,representation:h.selector}}async addLabel(r,n){let o=this.plugin.helpers.substructureParent.get(r.structure);if(!o)return;let i=[o.transform.ref],s=this.getGroup().apply(or,{selections:[{key:"a",ref:o.transform.ref,...ft(r)}],isTransitive:!0,label:"Label"},{dependsOn:i,tags:n?.selectionTags}),c=s.apply(_n,{textColor:this.state.options.textColor,...n?.labelParams,...n?.visualParams},{tags:n?.reprTags}),u=this.plugin.state.data;return await he.State.Update(this.plugin,{state:u,tree:c,options:{doNotLogTiming:!0}}),{selection:s.selector,representation:c.selector}}async addOrientation(r){let n=[],o=[];for(let u=0,l=r.length;u<l;++u){let d=r[u],p=this.plugin.helpers.substructureParent.get(d.structure);p&&(Zt(o,p.transform.ref),n.push({key:`l${u}`,ref:p.transform.ref,...ft(d)}))}if(n.length===0)return;let a=this.getGroup().apply(or,{selections:n,isTransitive:!0,label:"Orientation"},{dependsOn:o}),s=a.apply(li),c=this.plugin.state.data;return await he.State.Update(this.plugin,{state:c,tree:s,options:{doNotLogTiming:!0}}),{selection:a.selector,representation:s.selector}}async addPlane(r){let n=[],o=[];for(let u=0,l=r.length;u<l;++u){let d=r[u],p=this.plugin.helpers.substructureParent.get(d.structure);p&&(Zt(o,p.transform.ref),n.push({key:`l${u}`,ref:p.transform.ref,...ft(d)}))}if(n.length===0)return;let i=this.getGroup(),a=i.apply(or,{selections:n,isTransitive:!0,label:"Plane"},{dependsOn:o}),s=a.apply(di),c=this.plugin.state.data;return await he.State.Update(this.plugin,{state:c,tree:i,options:{doNotLogTiming:!0}}),{selection:a.selector,representation:s.selector}}async addOrderLabels(r){let n=this.getGroup(),o=this.plugin.state.data.select(be.Generators.ofType(R.Molecule.Structure.Selections).withTag(pi));for(let s of o)n.delete(s);let i=1;for(let s of r){let c=this.plugin.helpers.substructureParent.get(s.structure);if(!c)continue;let u=[c.transform.ref];n.apply(or,{selections:[{key:"a",ref:c.transform.ref,...ft(s)}],isTransitive:!0,label:"Order"},{dependsOn:u,tags:pi}).apply(_n,{textColor:Ot.fromRgb(255,255,255),borderColor:Ot.fromRgb(0,0,0),textSize:.33,borderWidth:.3,offsetZ:.75,customText:`${i++}`},{tags:pi})}let a=this.plugin.state.data;return await he.State.Update(this.plugin,{state:a,tree:n,options:{doNotLogTiming:!0}}),{representation:n.selector}}groupRef(){let r=this.plugin.state.data.tree;if(this.group!==void 0){let n=r.transforms.get(this.group);if(n&&xr.hasTag(n,En))return this.group;this.group=void 0,this.groupStale=!0}return this.groupStale&&(this.groupStale=!1,this.group=be.findTagInSubtree(r,xr.RootRef,En)),this.group}trackGroup(r,n){this.group===void 0&&xr.hasTag(n,En)&&(this.group=r)}getTransforms(r,n){let o=this.plugin.state.data.select(be.Generators.ofTransformer(r,n));return o.length===0?this._empty:o}sync(){let r=this.groupRef();if(!r){let i=this._empty;this.updateState({labels:[],distances:i,angles:i,dihedrals:i,orientations:i,planes:i})&&this.stateUpdated();return}let n=[];for(let i of this.getTransforms(_n,r)){let a=i.obj.tags;(!a||!a.includes(pi))&&n.push(i)}this.updateState({labels:n,distances:this.getTransforms(si,r),angles:this.getTransforms(ci,r),dihedrals:this.getTransforms(ui,r),orientations:this.getTransforms(li,r),planes:this.getTransforms(di,r)})&&this.stateUpdated()}};function mi(e,t,r){let n=new Set;return t.cells.forEach((o,i)=>{r(o.obj)&&n.add(i)}),e.subscribe(t.events.object.created,o=>{r(o.obj)&&n.add(o.ref)}),e.subscribe(t.events.object.updated,o=>{r(o.obj)?n.add(o.ref):n.delete(o.ref)}),e.subscribe(t.events.object.removed,o=>n.delete(o.ref)),n}function xf(e,t){let r=Xb(e,t||hi());return ex(e.tree,r),t&&t.refs.forEach(Qb,r),{hierarchy:r.hierarchy,added:r.added,changed:r.changed}}function hi(){return{lists:[],refs:new Map}}function $b(e){return{kind:"particle-list",cell:e,version:e.transform.version,representations:[]}}function qb(e,t){return{kind:"particle-representation",cell:e,version:e.transform.version,list:t}}function Xb(e,t){return{state:e,oldHierarchy:t,hierarchy:hi(),changed:!1,added:new Set}}function bf(e,t,r,n,...o){let i=n(...o);r.push(i),e.hierarchy.refs.set(t.transform.ref,i);let a=e.oldHierarchy.refs.get(t.transform.ref);return a?a.version!==t.transform.version&&(e.changed=!0):(e.added.add(i.cell.transform.ref),e.changed=!0),i}function Zb(e,t){return(r,n)=>!t(n)&&e.is(r.obj)}function Kb(){}var Yb=[[Zb(R.Particle.List,e=>e.currentList),(e,t)=>{e.currentList=bf(e,t,e.hierarchy.lists,$b,t)},e=>e.currentList=void 0],[(e,t)=>!e.state.isGhost&&!!t.currentList&&R.Particle.Representation3D.is(e.obj),(e,t)=>(e.currentList&&bf(e,t,e.currentList.representations,qb,t,e.currentList),!1),Kb]];function vf(e){if(!e||!e?.parent||!e.parent.cells.has(e.transform.ref))return!1;let{obj:t}=e;return!(!t||t===Fr.Null||e.status!=="ok"&&e.status!=="error")}function Qb(e){let{cell:t}=e;vf(t)||(this.changed=!0)}function Jb(e){Sf(this,this.tree.transforms.get(e))}function Sf(e,t){let{state:r}=e,n=r.state.cells.get(t.ref);if(!vf(n))return;let o,i=!1;for(let[s,c,u]of Yb)if(s(n,r)){if(c(r,n)===!1){i=!0;break}o=u;break}if(i)return;let a=e.tree.children.get(t.ref);a&&a.size&&a.forEach(Jb,e),o&&o(r)}function ex(e,t){let r={tree:e,state:t};return Sf(r,e.root),r.state}var tn=class extends ar{constructor(r){super();this.plugin=r;this.state={syncedTree:this.dataState.tree,notified:!1,hierarchy:hi(),selection:void 0};this.roots=mi(this,this.plugin.state.data,r=>R.Particle.List.is(r));this.behaviors={selection:this.ev.behavior({hierarchy:this.current,list:this.selection})};this.subscribe(r.state.data.events.changed,n=>{n.inTransaction||r.behaviors.state.isAnimating.value||this.sync(!0)}),this.subscribe(r.behaviors.state.isAnimating,n=>{!n&&!r.behaviors.state.isUpdating.value&&this.sync(!0)})}get dataState(){return this.plugin.state.data}get current(){return this.sync(!1),this.state.hierarchy}get selection(){return this.sync(!1),this.state.selection}sync(r){if(!r&&this.dataState.inUpdate)return;if(this.state.syncedTree===this.dataState.tree){r&&!this.state.notified&&(this.state.notified=!0,this.behaviors.selection.next({hierarchy:this.state.hierarchy,list:this.state.selection}));return}if(this.state.syncedTree=this.dataState.tree,this.roots.size===0&&this.state.hierarchy.refs.size===0)return;let n=xf(this.plugin.state.data,this.current);if(!n.changed)return;let{hierarchy:o}=n;this.state.hierarchy=o,this.state.selection?this.state.selection=o.refs.has(this.state.selection.cell.transform.ref)?o.refs.get(this.state.selection.cell.transform.ref):o.lists[0]:this.state.selection=o.lists[0],r?(this.state.notified=!0,this.behaviors.selection.next({hierarchy:o,list:this.state.selection})):this.state.notified=!1}setCurrent(r){this.state.selection=r||this.state.hierarchy.lists[0],this.behaviors.selection.next({hierarchy:this.state.hierarchy,list:r||this.state.hierarchy.lists[0]})}remove(r,n){if(r.length===0)return;let o=this.plugin.state.data.build();for(let i of r)o.delete(typeof i=="string"?i:i.cell.transform.ref);return o.commit({canUndo:n?"Remove":!1})}toggleVisibility(r,n){if(r.length===0)return;let o=n!==void 0?n!=="show":!r[0].cell.state.isHidden;for(let i of r)er(this.dataState,i.cell.transform.ref,o)}addRepresentation(r,n){return this.dataState.build().to(r.cell).apply(vc,{type:{name:n,params:{}}}).commit({canUndo:"Add Representation"})}};(t=>{function e(r,n){return n?.cell.obj?.data?r.representation.particles.registry.getApplicableTypes(n.cell.obj?.data):r.representation.particles.registry.types}t.getRepresentationTypes=e})(tn||={});function Cf(e,t){let r=ox(e,t||gi());return ux(e.tree,r),t&&t.refs.forEach(sx,r),{hierarchy:r.hierarchy,added:r.added,changed:r.changed}}function gi(){return{volumes:[],lazyVolumes:[],refs:new Map}}function tx(e){return{kind:"volume",cell:e,version:e.transform.version,representations:[]}}function rx(e){return{kind:"lazy-volume",cell:e,version:e.transform.version}}function nx(e,t){return{kind:"volume-representation",cell:e,version:e.transform.version,volume:t}}function ox(e,t){return{state:e,oldHierarchy:t,hierarchy:gi(),changed:!1,added:new Set}}function Wa(e,t,r,n,...o){let i=n(...o);r.push(i),e.hierarchy.refs.set(t.transform.ref,i);let a=e.oldHierarchy.refs.get(t.transform.ref);return a?a.version!==t.transform.version&&(e.changed=!0):(e.added.add(i.cell.transform.ref),e.changed=!0),i}function ix(e,t){return(r,n)=>!t(n)&&e.is(r.obj)}function Tf(){}var ax=[[ix(R.Volume.Data,e=>e.currentVolume),(e,t)=>{e.currentVolume=Wa(e,t,e.hierarchy.volumes,tx,t)},e=>e.currentVolume=void 0],[e=>R.Volume.Lazy.is(e.obj),(e,t)=>{Wa(e,t,e.hierarchy.lazyVolumes,rx,t)},Tf],[(e,t)=>!e.state.isGhost&&!!t.currentVolume&&R.Volume.Representation3D.is(e.obj),(e,t)=>(e.currentVolume&&Wa(e,t,e.currentVolume.representations,nx,t,e.currentVolume),!1),Tf]];function Rf(e){if(!e||!e?.parent||!e.parent.cells.has(e.transform.ref))return!1;let{obj:t}=e;return!(!t||t===Fr.Null||e.status!=="ok"&&e.status!=="error")}function sx(e){let{cell:t}=e;Rf(t)||(this.changed=!0)}function cx(e){Pf(this,this.tree.transforms.get(e))}function Pf(e,t){let{state:r}=e,n=r.state.cells.get(t.ref);if(!Rf(n))return;let o,i=!1;for(let[s,c,u]of ax)if(s(n,r)){if(c(r,n)===!1){i=!0;break}o=u;break}if(i)return;let a=e.tree.children.get(t.ref);a&&a.size&&a.forEach(cx,e),o&&o(r)}function ux(e,t){let r={tree:e,state:t};return Pf(r,e.root),r.state}function Df(e,t,r={}){let n=e.representation.volume;if(t)ir("volume",n);else if(!uc(n))return{type:eo(),colorTheme:eo(),sizeTheme:eo()};return lc(e,"volume",n,{type:r.type||void 0,color:r.color||void 0,size:r.size||void 0,checkColor:!0,checkSize:!0}),lx(e,t||Yt.One,r)}function lx(e,t,r={}){let{registry:n,themes:o}=e.representation.volume,i={volume:t},a=(typeof r.type=="string"?r.type&&n.get(r.type):r.type)||n.get(n.default.name),s=f.getDefaultValues(a.getParams(o,t)),c=Object.assign(s,r.typeParams),u=(typeof r.color=="string"?r.color&&o.colorThemeRegistry.get(r.color):r.color)||o.colorThemeRegistry.get(a.defaultColorTheme.name),l=f.getDefaultValues(u.getParams(i));u.name===a.defaultColorTheme.name&&Object.assign(l,a.defaultColorTheme.props);let d=Object.assign(l,r.colorParams),p=(typeof r.size=="string"?r.size&&o.sizeThemeRegistry.get(r.size):r.size)||o.sizeThemeRegistry.get(a.defaultSizeTheme.name),m=f.getDefaultValues(p.getParams(i));p.name===a.defaultSizeTheme.name&&Object.assign(m,a.defaultSizeTheme.props);let h=Object.assign(m,r.sizeParams);return{type:{name:a.name,params:c},colorTheme:{name:u.name,params:d},sizeTheme:{name:p.name,params:h}}}function _f(e,t){return typeof t=="string"?e.representation.volume.registry.get(t):t}function Ef(e,t){return typeof t=="string"?e.representation.volume.themes.colorThemeRegistry.get(t):t}function Af(e,t){return typeof t=="string"?e.representation.volume.themes.sizeThemeRegistry.get(t):t}var yi;(n=>{function e(o,i,a,s,c,u,l,d){let p=_f(o,i),m=Ef(o,c||p.defaultColorTheme.name),h=Af(o,l||p.defaultSizeTheme.name),g=f.getDefaultValues(p.getParams(o.representation.volume.themes,a));return{type:{name:p.name,params:s?{...g,...s}:g},colorTheme:{name:m.name,params:u?{...m.defaultValues,...u}:m.defaultValues},sizeTheme:{name:h.name,params:d?{...h.defaultValues,...d}:h.defaultValues}}}n.getDefaultParams=e;function t(o,i,a,s,c,u,l){let d=_f(o,i),p=Ef(o,s||d.defaultColorTheme.name),m=Af(o,u||d.defaultSizeTheme.name);return{type:{name:d.name,params:a?{...d.defaultValues,...a}:d.defaultValues},colorTheme:{name:d.defaultColorTheme.name,params:c?{...p.defaultValues,...c}:p.defaultValues},sizeTheme:{name:d.defaultSizeTheme.name,params:l?{...m.defaultValues,...l}:m.defaultValues}}}n.getDefaultParamsStatic=t;function r(o){if(o.isoValue)return Yt.IsoValue.toString(o.isoValue);if(o.renderMode?.params?.isoValue)return Yt.IsoValue.toString(o.renderMode?.params?.isoValue)}n.getDescription=r})(yi||={});var Ha=ge.BuiltIn({name:"volume-representation-3d",display:"3D Representation",from:R.Volume.Data,to:R.Volume.Representation3D,params:(e,t)=>{let r=t.representation.volume,{registry:n,themes:o}=r,i=n.default?.provider,a=!!i&&fn(r),s=!!i&&mn(r);if(!e)return{type:n.default?f.Mapped(n.default.name,n.types,u=>f.Group(n.get(u).getParams(o,Yt.One))):rt(),colorTheme:a?f.Mapped(i.defaultColorTheme.name,o.colorThemeRegistry.types,u=>f.Group(o.colorThemeRegistry.get(u).getParams({volume:Yt.One}))):rt(),sizeTheme:s?f.Mapped(i.defaultSizeTheme.name,o.sizeThemeRegistry.types,u=>f.Group(o.sizeThemeRegistry.get(u).getParams({volume:Yt.One}))):rt()};let c={volume:e.data};return{type:n.default?f.Mapped(n.default.name,n.types,u=>f.Group(n.get(u).getParams(o,e.data))):rt(),colorTheme:a?f.Mapped(i.defaultColorTheme.name,o.colorThemeRegistry.getApplicableTypes(c),u=>f.Group(o.colorThemeRegistry.get(u).getParams(c))):rt(),sizeTheme:s?f.Mapped(i.defaultSizeTheme.name,o.sizeThemeRegistry.getApplicableTypes(c),u=>f.Group(o.sizeThemeRegistry.get(u).getParams(c))):rt()}}})({canAutoUpdate({oldParams:e,newParams:t}){return e.type.name===t.type.name},apply({a:e,params:t},r){return ir("volume",r.representation.volume),ie.create("Volume Representation",async n=>{let o={runtime:n,assetManager:r.managers.asset,errorContext:r.errorContext},i=r.representation.volume.registry.get(t.type.name);i.ensureCustomProperties&&await i.ensureCustomProperties.attach(o,e.data);let a=i.factory({graphics:r.canvas3d?.graphics,...r.representation.volume.themes},i.getParams);await et.ensureDependencies(o,r.representation.volume.themes,{volume:e.data},t),a.setTheme(et.create(r.representation.volume.themes,{volume:e.data,locationKinds:i.locationKinds},t));let s=t.type.params||{};return await a.createOrUpdate(s,e.data).runInContext(n),new R.Volume.Representation3D({repr:a,sourceData:e.data},{label:i.label,description:yi.getDescription(s)})})},update({a:e,b:t,oldParams:r,newParams:n},o){return ir("volume",o.representation.volume),ie.create("Volume Representation",async i=>{if(n.type.name!==r.type.name)return z.UpdateResult.Recreate;let a=o.representation.volume.registry.get(n.type.name);if(a.mustRecreate?.(r.type.params,n.type.params))return z.UpdateResult.Recreate;let s={runtime:i,assetManager:o.managers.asset,errorContext:o.errorContext};a.ensureCustomProperties&&await a.ensureCustomProperties.attach(s,e.data),et.releaseDependencies(o.representation.volume.themes,{volume:t.data.sourceData},r),await et.ensureDependencies(s,o.representation.volume.themes,{volume:e.data},n),t.data.repr.setTheme(et.create(o.representation.volume.themes,{volume:e.data,locationKinds:a.locationKinds},n));let c={...t.data.repr.props,...n.type.params};return await t.data.repr.createOrUpdate(c,e.data).runInContext(i),t.data.sourceData=e.data,t.description=yi.getDescription(c),z.UpdateResult.Updated})},dispose({b:e,params:t},r){if(!e||!t)return;let n=e.data.sourceData,o=r.representation.volume.registry.get(t.type.name);o.ensureCustomProperties&&o.ensureCustomProperties.detach(n),et.releaseDependencies(r.representation.volume.themes,{volume:n},t)}});Bt(Ha,(e,t)=>{let{registry:r,themes:n}=t.plugin.representation.volume;return Qn(r.get(e.type.name),n,e,t)});var rn=class extends ar{constructor(r){super();this.plugin=r;this.state={syncedTree:this.dataState.tree,notified:!1,hierarchy:gi(),selection:void 0};this.roots=mi(this,this.plugin.state.data,r=>R.Volume.Data.is(r)||R.Volume.Lazy.is(r));this.behaviors={selection:this.ev.behavior({hierarchy:this.current,volume:this.selection})};this.subscribe(r.state.data.events.changed,n=>{n.inTransaction||r.behaviors.state.isAnimating.value||this.sync(!0)}),this.subscribe(r.behaviors.state.isAnimating,n=>{!n&&!r.behaviors.state.isUpdating.value&&this.sync(!0)})}get dataState(){return this.plugin.state.data}get current(){return this.sync(!1),this.state.hierarchy}get selection(){return this.sync(!1),this.state.selection}sync(r){if(!r&&this.dataState.inUpdate)return;if(this.state.syncedTree===this.dataState.tree){r&&!this.state.notified&&(this.state.notified=!0,this.behaviors.selection.next({hierarchy:this.state.hierarchy,volume:this.state.selection}));return}if(this.state.syncedTree=this.dataState.tree,this.roots.size===0&&this.state.hierarchy.refs.size===0)return;let n=Cf(this.plugin.state.data,this.current);if(!n.changed)return;let{hierarchy:o}=n;this.state.hierarchy=o,this.state.selection?this.state.selection=o.refs.has(this.state.selection.cell.transform.ref)?o.refs.get(this.state.selection.cell.transform.ref):o.volumes[0]:this.state.selection=o.volumes[0],r?(this.state.notified=!0,this.behaviors.selection.next({hierarchy:o,volume:this.state.selection})):this.state.notified=!1}setCurrent(r){this.state.selection=r||this.state.hierarchy.volumes[0],this.behaviors.selection.next({hierarchy:this.state.hierarchy,volume:r||this.state.hierarchy.volumes[0]})}remove(r,n){if(r.length===0)return;let o=this.plugin.state.data.build();for(let i of r)o.delete(typeof i=="string"?i:i.cell.transform.ref);return o.commit({canUndo:n?"Remove":!1})}toggleVisibility(r,n){if(r.length===0)return;let o=n!==void 0?n!=="show":!r[0].cell.state.isHidden;for(let i of r)er(this.dataState,i.cell.transform.ref,o)}addRepresentation(r,n){return this.dataState.build().to(r.cell).apply(Ha,Df(this.plugin,r.cell.obj?.data,{type:n})).commit({canUndo:"Add Representation"})}};(t=>{function e(r,n){return n?.cell.obj?.data?r.representation.volume.registry.getApplicableTypes(n.cell.obj?.data):r.representation.volume.registry.types}t.getRepresentationTypes=e})(rn||={});var bi=class{constructor(t){this.plugin=t;this.state={audioPlayer:new Ss(null)};this.extension=[];this.extensionCounts=new Map;this.refResolvers={default:(t,r)=>r.map(n=>t.state.data.cells.get(n)).filter(n=>!!n)};this.uriResolvers={};this.argsParsers=[["default",100,dx]];this.audio={play:async(t,r)=>{try{let n=this.resolveAudioPlayer(),o=!1;if(t?.trim()){let i=this.tryResolveUri(t),a=t;typeof i?.then=="function"?a=await i:i&&(a=i),o=n.src!==a,o&&(n.src=a,n.load())}!o&&r?.toggle?n.paused?await n.play():n.pause():(n.currentTime=0,await n.play())}catch(n){console.error("Failed to play audio",n)}},pause:()=>{this.audioPlayer?.pause()},stop:()=>{this.audioPlayer&&(this.audioPlayer.pause(),this.audioPlayer.currentTime=0)},dispose:()=>{this.audioPlayer&&(this.audioPlayer.pause(),this.audioPlayer.currentTime=0,this.state.audioPlayer.next(null))}}}registerArgsParser(t,r,n){this.removeArgsParser(t),this.argsParsers.push([t,r,n]),this.argsParsers.sort((o,i)=>i[1]-o[1])}removeArgsParser(t){let r=this.argsParsers.findIndex(n=>n[0]===t);r>=0&&this.argsParsers.splice(r,1)}parseArgs(t){for(let[,,r]of this.argsParsers){let n=r(t);if(n)return n}}registerRefResolver(t,r){this.refResolvers[t]=r}removeRefResolver(t){delete this.refResolvers[t]}registerUriResolver(t,r){this.uriResolvers[t]=r}removeUriResolver(t){delete this.uriResolvers[t]}findConflict(t){let r=this.extension.find(n=>n.name===t.name);if(r&&r!==t)return`MarkdownExtensionManager: a different extension is already registered under the name '${t.name}'.`}registerExtension(t){let r=this.findConflict(t);if(r)throw new Error(r);let n=this.extensionCounts.get(t.name);n!==void 0?this.extensionCounts.set(t.name,n+1):(this.extensionCounts.set(t.name,1),this.extension.push(t))}removeExtension(t){let r=typeof t=="string"?t:t.name,n=this.extension.findIndex(i=>i.name===r);if(n<0||typeof t!="string"&&this.extension[n]!==t)return;let o=this.extensionCounts.get(r)??1;o>1?this.extensionCounts.set(r,o-1):(this.extensionCounts.delete(r),this.extension.splice(n,1))}_tryRender(t,r){try{return t.reactRenderFn?.(r)}catch(n){return console.error(`Failed to render markdown extension '${t.name}'`,n),null}}tryRender(t,r){let n={args:t,manager:this};for(let o of this.extension){let i=this._tryRender(o,n);if(i)return i}for(let o of r){let i=this._tryRender(o,n);if(i)return i}return null}tryExecute(t,r){let n={event:t,args:r,manager:this};for(let o of this.extension)try{o.execute?.(n)}catch(i){console.error(`Failed to execute markdown extension '${o.name}'`,i)}}tryResolveUri(t){for(let r of Object.values(this.uriResolvers)){let n=r(this.plugin,t);if(n)return n}}findCells(t){let r=new Set,n=[];for(let o of Object.values(this.refResolvers))for(let i of o(this.plugin,t))i&&!r.has(i.transform.ref)&&(r.add(i.transform.ref),n.push(i));return n}resolveAudioPlayer(){if(this.state.audioPlayer.value)return this.state.audioPlayer.value;let t=document.createElement("audio");return t.controls=!0,t.preload="auto",t.style.width="100%",t.style.height="32px",this.state.audioPlayer.next(t),t}get audioPlayer(){return this.state.audioPlayer.value}};function dx(e){if(!e?.startsWith("!"))return;let t=decodeURIComponent(e.substring(1)).split("&").map(r=>r.trim()).filter(r=>r.length>0).map(r=>r.split("=",2).map(n=>n.trim()));if(t.length!==0)return Object.fromEntries(t)}var px=[["full","Full"],["collapsed","Collapsed"],["hidden","Hidden"]],$a=[["full","Full"],["hidden","Hidden"]],fx={isExpanded:f.Boolean(!1),showControls:f.Boolean(!0),regionState:f.Group({left:f.Select("full",px),top:f.Select("full",$a),right:f.Select("full",$a),bottom:f.Select("full",$a)}),controlsDisplay:f.Value("outside",{isHidden:!0}),expandToFullscreen:f.Boolean(!1)},xi=class extends Me{constructor(r){super({...f.getDefaultValues(fx),...r.spec.layout&&r.spec.layout.initial});this.context=r;this.events={updated:this.ev()};this.rootState=void 0;this.fullscreenChangeHandler=()=>{document.fullscreenElement||this.updateProps({expandToFullscreen:!1})};typeof document<"u"&&(document.addEventListener("fullscreenchange",this.fullscreenChangeHandler),document.addEventListener("webkitfullscreenchange",this.fullscreenChangeHandler)),he.Layout.Update.subscribe(r,n=>this.updateProps(n.state)),typeof document<"u"&&(this.expandedViewport=document.createElement("meta"),this.expandedViewport.name="viewport",this.expandedViewport.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0")}updateProps(r){let n=!!this.state.isExpanded;if(this.updateState(r),this.root&&typeof r.isExpanded=="boolean"&&r.isExpanded!==n&&this.handleExpand(),typeof document<"u")if(this.state.expandToFullscreen){let o=document.getElementsByTagName("body")[0];o&&this.tryRequestFullscreen(o)}else document.fullscreenElement&&this.tryExitFullscreen();this.events.updated.next(void 0)}setProps(r){this.updateState(r)}setRoot(r){this.root=r,this.state.isExpanded&&this.handleExpand()}getScrollElement(){return document.scrollingElement?document.scrollingElement:document.documentElement?document.documentElement:document.body}async tryRequestFullscreen(r){if(!document.fullscreenElement)try{await r.requestFullscreen()}catch(n){console.error(n)}}async tryExitFullscreen(){if(document.fullscreenElement)try{await document.exitFullscreen()}catch(r){console.error(r)}}handleExpand(){try{let r=document.getElementsByTagName("body")[0],n=document.getElementsByTagName("head")[0];if(!r||!n||!this.root)return;if(this.state.isExpanded){let o=n.children,i=[],a=!1;for(let d=0;d<o.length;d++)o[d]===this.expandedViewport?a=!0:(o[d].name||"").toLowerCase()==="viewport"&&i.push(o[d]);for(let d of i)n.removeChild(d);a||n.appendChild(this.expandedViewport);let s=r.style,c=this.getScrollElement(),u=c.scrollLeft,l=c.scrollTop;this.rootState={top:s.top,bottom:s.bottom,right:s.right,left:s.left,scrollTop:l,scrollLeft:u,position:s.position,overflow:s.overflow,viewports:i,zIndex:this.root.style.zIndex,width:s.width,height:s.height,maxWidth:s.maxWidth,maxHeight:s.maxHeight,margin:s.margin,marginLeft:s.marginLeft,marginRight:s.marginRight,marginTop:s.marginTop,marginBottom:s.marginBottom},s.overflow="hidden",s.position="fixed",s.top="0",s.bottom="0",s.right="0",s.left="0",s.width="100%",s.height="100%",s.maxWidth="100%",s.maxHeight="100%",s.margin="0",s.marginLeft="0",s.marginRight="0",s.marginTop="0",s.marginBottom="0"}else{let o=n.children;for(let i=0;i<o.length;i++)if(o[i]===this.expandedViewport){n.removeChild(this.expandedViewport);break}if(this.state.expandToFullscreen&&document.fullscreenElement&&document.exitFullscreen(),this.rootState){let i=this.rootState;for(let c of i.viewports)n.appendChild(c);let a=r.style;a.top=i.top,a.bottom=i.bottom,a.left=i.left,a.right=i.right,a.width=i.width,a.height=i.height,a.maxWidth=i.maxWidth,a.maxHeight=i.maxHeight,a.margin=i.margin,a.marginLeft=i.marginLeft,a.marginRight=i.marginRight,a.marginTop=i.marginTop,a.marginBottom=i.marginBottom,a.position=i.position,a.overflow=i.overflow||"";let s=this.getScrollElement();s.scrollTop=i.scrollTop,s.scrollLeft=i.scrollLeft,this.rootState=void 0,this.root.style.zIndex=i.zIndex}}}catch(r){let n="Layout change error, you might have to reload the page.";this.context.log.error(n),console.error(n,r)}}dispose(){super.dispose(),typeof document<"u"&&(document.removeEventListener("fullscreenchange",this.fullscreenChangeHandler),document.removeEventListener("webkitfullscreenchange",this.fullscreenChangeHandler))}};var vi=class extends Vr{};var Si=class extends Vr{};var Ti=class extends Vr{};var mx=1e3/30,hx=250,Ci=class{constructor(t){this.plugin=t;this.lastTickT=0;this.properTimeT=0;this.currentFrame=void 0;this._isAnimating=!1;this.pausesWhenIdle=!1;this.sleeping=!1;this.idleSince=-1;this.wakeSubs=void 0;this.frame=(t,r)=>{let n=gt(),o=n-this.lastTickT;if(this.lastTickT=n,this.properTimeT+=Math.min(o,mx),this.currentFrame=void 0,this.sleeping=!1,this.tick(this.properTimeT,{xrFrame:r}),!!this._isAnimating){if(this.idleFor(n)>=hx){this.sleeping=!0,this.plugin.canvas3d?.cancelAnimationFrame(0);return}this.currentFrame=this.plugin.canvas3d?.requestAnimationFrame(this.frame)}};this.wake=()=>{this.idleSince=-1,!(!this.sleeping||!this._isAnimating)&&(this.sleeping=!1,this.lastTickT=gt(),this.currentFrame=this.plugin.canvas3d?.requestAnimationFrame(this.frame))}}get isAnimating(){return this._isAnimating}get isSleeping(){return this.sleeping}async tick(t,r){if(await this.plugin.managers.animation.tick(t,r?.isSynchronous,r?.animation),this.plugin.canvas3d?.tick(t,r),ue){let n=this.plugin.canvas3d?.graphics.timer.resolve();if(n)for(let o of n)ec([o])}}idleFor(t){let r=this.plugin.canvas3d;return!this.pausesWhenIdle||!r?.isIdle||r.xr.isPresenting.value||this.plugin.managers.animation.isAnimating?(this.idleSince=-1,0):(this.idleSince<0&&(this.idleSince=t),t-this.idleSince)}followWake(){let t=this.plugin.canvas3d;this.wakeSubs||!t||(this.wakeSubs=[t.wake.subscribe(this.wake),this.plugin.behaviors.state.isAnimating.subscribe(r=>{r&&this.wake()})])}resetTime(t){this.plugin.canvas3d?.resetTime(t)}start(t){this.plugin.canvas3d?.resume(),this.pausesWhenIdle=!!this.plugin.config.get(Pe.General.PauseLoopWhenIdle),this.pausesWhenIdle&&this.followWake(),this.sleeping=!1,this.idleSince=-1,this._isAnimating=!0,this.resetTime(0),this.properTimeT=0,this.lastTickT=gt(),t?.immediate?this.frame():this.currentFrame=this.plugin.canvas3d?.requestAnimationFrame(this.frame)}stop(t){this._isAnimating=!1,this.sleeping=!1,this.currentFrame!==void 0&&(this.plugin.canvas3d?.cancelAnimationFrame(this.currentFrame),this.currentFrame=void 0),t?.noDraw&&this.plugin.canvas3d?.pause(t?.noDraw)}dispose(){if(this.stop(),this.wakeSubs)for(let t of this.wakeSubs)t.unsubscribe();this.wakeSubs=void 0}};var Xa={};Li(Xa,{SyncRepresentationToCanvas:()=>wf,SyncStructureRepresentation3DState:()=>Lf,UpdateRepresentationVisibility:()=>If,registerDefault:()=>gx});function gx(e){wf(e),Lf(e),If(e)}function wf(e){let t=e.state.data.events;t.object.created.subscribe(r=>{R.isRepresentation3D(r.obj)&&(qa(r.state.cells.get(r.ref),r.obj.data.repr),r.obj.data.repr.setState({syncManually:!0}),e.canvas3d?.add(r.obj.data.repr))}),t.object.updated.subscribe(r=>{r.oldObj&&R.isRepresentation3D(r.oldObj)&&(e.canvas3d?.remove(r.oldObj.data.repr),r.oldObj.data.repr.destroy()),R.isRepresentation3D(r.obj)&&(qa(r.state.cells.get(r.ref),r.obj.data.repr),r.action==="recreate"&&r.obj.data.repr.setState({syncManually:!0}),e.canvas3d?.add(r.obj.data.repr))}),t.object.removed.subscribe(r=>{R.isRepresentation3D(r.obj)&&(e.canvas3d?.remove(r.obj.data.repr),r.obj.data.repr.destroy())})}function Lf(e){let t=e.state.data.events;t.object.created.subscribe(r=>{if(!R.Molecule.Structure.Representation3DState.is(r.obj))return;let n=r.obj.data;n.repr.setState(n.state),e.canvas3d?.update(n.repr)}),t.object.updated.subscribe(r=>{if(!R.Molecule.Structure.Representation3DState.is(r.obj))return;let n=r.obj.data;n.repr.setState(n.state),e.canvas3d?.update(n.repr)}),t.object.removed.subscribe(r=>{if(!R.Molecule.Structure.Representation3DState.is(r.obj))return;let n=r.obj.data;n.repr.setState(n.initialState),e.canvas3d?.update(n.repr)})}function If(e){e.state.data.events.cell.stateUpdated.subscribe(t=>{let r=t.state.cells.get(t.ref);R.isRepresentation3D(r.obj)&&qa(r,r.obj.data.repr)&&e.canvas3d?.syncVisibility()})}function qa(e,t){return t.state.visible===!!e.state.isHidden?(t.setState({visible:!e.state.isHidden}),!0):!1}var Za={};Li(Za,{Focus:()=>Bf,FocusObject:()=>Mf,OrientAxes:()=>Vf,Reset:()=>Of,ResetAxes:()=>kf,SetSnapshot:()=>Ff,registerDefault:()=>yx});function yx(e){Of(e),Bf(e),Mf(e),Ff(e),Vf(e),kf(e)}function Of(e){he.Camera.Reset.subscribe(e,({snapshot:t,durationMs:r,easing:n,trajectory:o})=>{e.managers.camera.reset(t,r,{easing:n,trajectory:o})})}function Ff(e){he.Camera.SetSnapshot.subscribe(e,({snapshot:t,durationMs:r,easing:n,trajectory:o})=>{e.managers.camera.setSnapshot(t,r,{easing:n,trajectory:o})})}function Bf(e){he.Camera.Focus.subscribe(e,({center:t,radius:r,durationMs:n,easing:o,trajectory:i})=>{e.managers.camera.focusSphere({center:t,radius:r},{durationMs:n,easing:o,trajectory:i}),e.events.canvas3d.settingsUpdated.next(void 0)})}function Mf(e){he.Camera.FocusObject.subscribe(e,t=>{e.managers.camera.focusObject(t)})}function Vf(e){he.Camera.OrientAxes.subscribe(e,({structures:t,durationMs:r,easing:n,trajectory:o})=>{e.managers.camera.orientAxes(t,r,{easing:n,trajectory:o})})}function kf(e){he.Camera.ResetAxes.subscribe(e,({durationMs:t,easing:r,trajectory:n})=>{e.managers.camera.resetAxes(t,{easing:r,trajectory:n})})}var Ka={};Li(Ka,{Canvas3DSetSettings:()=>Gf,registerDefault:()=>bx});function bx(e){Gf(e)}function Gf(e){he.Canvas3D.ResetSettings.subscribe(e,()=>{e.canvas3d?.setProps(Xn),e.events.canvas3d.settingsUpdated.next(void 0)}),he.Canvas3D.SetSettings.subscribe(e,t=>{e.canvas3d&&(e.canvas3d?.setProps(t.settings),e.events.canvas3d.settingsUpdated.next(void 0))})}var An={State:bc,Representation:Xa,Camera:Za,Misc:Ka};function mt(e,t,r,n=[]){return{label:e.label,scope:e.scope,identity:r,keys:n,findConflict:()=>e.findConflict(t),add:()=>e.add(t),remove:()=>e.remove(t)}}function wt(e,t){return{label:e,scope:t,findConflict:r=>t.findConflict(r),add:r=>t.add(r),remove:r=>t.remove(r)}}function xx(e){let{structure:t,volume:r,particles:n}=e.representation,{hierarchy:o,representation:i}=e.builders.structure,{dataFormats:a,bondProviders:s}=e,{lociLabels:c,markdownExtensions:u,dragAndDrop:l,animation:d}=e.managers,p=e.query.structure.registry,m=e.state.data.actions;return{scopes:{structure:{colorThemes:wt("Structure color theme",t.themes.colorThemeRegistry),sizeThemes:wt("Structure size theme",t.themes.sizeThemeRegistry),representations:wt("Structure representation",t.registry)},volume:{colorThemes:wt("Volume color theme",r.themes.colorThemeRegistry),sizeThemes:wt("Volume size theme",r.themes.sizeThemeRegistry),representations:wt("Volume representation",r.registry)},particles:{colorThemes:wt("Particles color theme",n.themes.colorThemeRegistry),sizeThemes:wt("Particles size theme",n.themes.sizeThemeRegistry),representations:wt("Particles representation",n.registry)}},formats:wt("Data format",a),bondProviders:wt("Bond provider",s),hierarchyPresets:{label:"Trajectory hierarchy preset",scope:o,findConflict:h=>o.findConflict(h),add:h=>o.registerPreset(h),remove:h=>o.unregisterPreset(h)},representationPresets:{label:"Structure representation preset",scope:i,findConflict:h=>i.findConflict(h),add:h=>i.registerPreset(h),remove:h=>i.unregisterPreset(h)},selectionQueries:wt("Structure selection query",p),lociLabels:{label:"Loci label provider",scope:c,findConflict:h=>c.findConflict(h),add:h=>c.addProvider(h),remove:h=>c.removeProvider(h)},markdownExtensions:{label:"Markdown extension",scope:u,findConflict:h=>u.findConflict(h),add:h=>u.registerExtension(h),remove:h=>u.removeExtension(h)},dragAndDrop:{label:"Drag and drop handler",scope:l,findConflict:h=>l.findConflict(h),add:h=>l.addEntry(h),remove:h=>l.removeEntry(h)},actions:{label:"Action",scope:m,findConflict:h=>m.findConflict(h),add:h=>m.add(h),remove:h=>m.remove(h)},animations:{label:"Animation",scope:d,findConflict:h=>d.findConflict(h),add:h=>d.register(h),remove:h=>d.unregister(h)}}}function vx(e){return"definition"in e?e:e.action}function Sx(e,t,r){let n=[[t.structure,e.scopes.structure],[t.volume,e.scopes.volume],[t.particles,e.scopes.particles]];for(let[o,i]of n){for(let a of o?.themes?.color??[])r.push(mt(i.colorThemes,a,a,[a.name]));for(let a of o?.themes?.size??[])r.push(mt(i.sizeThemes,a,a,[a.name]));for(let a of o?.representations??[])r.push(mt(i.representations,a,a,[a.name]))}for(let o of t.formats??[])r.push(mt(e.formats,o,o,[o.name]));for(let o of t.structure?.bondProviders??[])r.push(mt(e.bondProviders,o,o,[o.name]));for(let o of t.structure?.presets?.hierarchy??[])r.push(mt(e.hierarchyPresets,o,o,o.alias===void 0?[o.id]:[o.id,o.alias]));for(let o of t.structure?.presets?.representation??[])r.push(mt(e.representationPresets,o,o,o.alias===void 0?[o.id]:[o.id,o.alias]));for(let o of t.structure?.selectionQueries??[])r.push(mt(e.selectionQueries,o,o));for(let o of t.lociLabels??[])r.push(mt(e.lociLabels,o,o));for(let o of t.markdownExtensions??[])r.push(mt(e.markdownExtensions,o,o,[o.name]));for(let o of t.dragAndDrop??[])r.push(mt(e.dragAndDrop,o,o.handle,[o.name]));for(let o of t.actions??[]){let i=vx(o);r.push(mt(e.actions,i,i))}for(let o of t.animations??[])r.push(mt(e.animations,o,o,[o.name]))}function Tx(e){let t=[],r=new Map;for(let n of e){let o=n.findConflict();o&&t.push(o);let i=r.get(n.scope);i||r.set(n.scope,i=new Map);for(let a of n.keys){let s=i.get(a);s&&s.identity!==n.identity?t.push(`${n.label} '${a}' is listed more than once with different providers.`):s||i.set(a,n)}}return t}function Uf(e,t){let r=xx(e),n=Array.isArray(t)?t:[t],o=[];for(let c of n)Sx(r,c,o);let i=Tx(o);if(i.length>0)throw new Error(`PluginContext.register: ${i.length===1?"1 conflict":`${i.length} conflicts`}, nothing was registered:
${i.map(c=>`  - ${c}`).join(`
`)}`);let a=[];try{for(let c of o)c.add(),a.push(c)}catch(c){for(let u=a.length-1;u>=0;u--)a[u].remove();throw c}let s=!1;return()=>{if(!s){s=!0;for(let c=a.length-1;c>=0;c--)a[c].remove()}}}var Cx=[["Structure","structure"],["Volume","volume"],["Particles","particles"]];function zf(e,t){let r=[];for(let[n,o]of Cx){let{registry:i,themes:a}=e.representation[o];for(let{name:s,provider:c}of i.list){let u=[["color",c.defaultColorTheme?.name,a.colorThemeRegistry],["size",c.defaultSizeTheme?.name,a.sizeThemeRegistry]];for(let[l,d,p]of u){if(!d||p.has(d))continue;let m=`${o}/${s}/${l}/${d}`;if(t.has(m))continue;t.add(m);let h=`${n} representation '${s}' default ${l} theme '${d}' is not registered`;r.push(h),e.log.warn(h)}}}return r}var Ri=class{constructor(t){this.plugin=t;this.ev=Br.create();this.events={updated:this.ev(),removed:this.ev()};this.root=new Map;this.tracked=new Map;t.state.data.events.object.created.subscribe(r=>{this.addMapping(r.state,r.ref,r.obj)}),t.state.data.events.object.removed.subscribe(r=>{this.removeMapping(r.ref)&&this.events.removed.next({ref:r.ref,obj:r.obj})}),t.state.data.events.object.updated.subscribe(r=>{this.updateMapping(r.state,r.ref,r.oldObj,r.obj)&&this.events.updated.next({ref:r.ref,oldObj:r.oldObj,obj:r.obj})})}getDecorator(t){let r=this.plugin.state.data.tree,n=r.children.get(t);if(n.size!==1)return t;let o=n.first();return o&&r.transforms.get(o).transformer.definition.isDecorator?this.getDecorator(o):t}get(t,r=!1){let n=this.root.get(t);if(n)return r?this.plugin.state.data.cells.get(n.ref):this.plugin.state.data.cells.get(this.getDecorator(n.ref))}addMapping(t,r,n){if(!R.Molecule.Structure.is(n))return!1;if(this.tracked.set(r,n.data),this.root.has(n.data)){let o=this.root.get(n.data);o.count++}else{let o=t.select(be.Generators.byRef(r).rootOfType([R.Molecule.Structure]))[0];o?this.root.set(n.data,{ref:o.transform.ref,count:1}):this.root.set(n.data,{ref:r,count:1})}return!0}removeMapping(t){if(!this.tracked.has(t))return!1;let r=this.tracked.get(t);this.tracked.delete(t);let n=this.root.get(r);return n.count>1?n.count--:this.root.delete(r),!0}updateMapping(t,r,n,o){return R.Molecule.Structure.is(o)?(this.removeMapping(r),this.addMapping(t,r,o),!0):!1}dispose(){this.ev.dispose()}};var nn=class{constructor(){this.ev=Br.create();this.id=0;this.runningTasks=new Set;this.abortRequests=new Map;this.options=new Map;this.currentContext=[];this.events={progress:this.ev(),finished:this.ev()}}tryGetAbortTaskId(t){if(this.abortRequests.has(t.progress.taskId))return t.progress.taskId;for(let r of t.children){let n=this.tryGetAbortTaskId(r);if(n!==void 0)return n}}track(t,r){return n=>{if(n.canAbort&&n.requestAbort){let i=this.tryGetAbortTaskId(n.root);i!==void 0&&n.requestAbort(this.abortRequests.get(i))}let o=gt()-n.root.progress.startedTime;this.events.progress.next({id:t,useOverlay:this.options.get(r)?.useOverlay,level:o<250?"none":"background",progress:n})}}async run(t,r){let n=this.id++,o;r?.createNewContext||this.currentContext.length===0?o={ctx:os(t,this.track(n,t.id),100),refCount:1}:(o=this.currentContext[this.currentContext.length-1],o.refCount++);try{return this.options.set(t.id,{useOverlay:!!r?.useOverlay}),this.runningTasks.add(t.id),await is(o.ctx,t)}finally{this.options.delete(t.id),this.runningTasks.delete(t.id),this.events.finished.next({id:n}),this.abortRequests.delete(t.id),o.refCount--,o.refCount===0&&Bn(this.currentContext,o)}}requestAbortAll(t){this.runningTasks.forEach(r=>this.abortRequests.set(r,t))}requestAbort(t,r){let n=typeof t=="number"?t:t.root.progress.taskId;this.abortRequests.set(n,r)}dispose(){this.ev.dispose()}};(r=>{function e(n){return new Promise(o=>setTimeout(o,n))}function t(n){return ie.create("Test",async o=>{let i=0;for(;i<n;)await e(100+Math.random()*200),o.shouldUpdate&&await o.update({message:"Step "+i,current:i,max:n,isIndeterminate:!1}),i++})}r.testTask=t})(nn||={});var Pi=class extends Me{constructor(r){super({entries:kn()});this.events={changed:this.ev()};this.serialNumber=0;this.serialId=0;he.Toast.Show.subscribe(r,n=>this.show(n)),he.Toast.Hide.subscribe(r,n=>this.hide(this.findByKey(n.key)))}findByKey(r){return this.state.entries.find(n=>!!n&&n.key===r)}show(r){let n=this.state.entries,o,i=++this.serialId,a;r.key&&(o=this.findByKey(r.key))?(o.timeout!==void 0&&clearTimeout(o.timeout),a=o.serialNumber,n=n.remove(o.id)):a=++this.serialNumber,o={id:i,serialNumber:a,key:r.key,title:r.title,message:r.message,timeout:this.timeout(i,r.timeoutMs),hide:()=>this.hideId(i)},this.updateState({entries:n.set(i,o)})&&this.events.changed.next(void 0)}timeout(r,n){if(n!==void 0)return n<0&&(n=500),setTimeout(()=>{let o=this.state.entries.get(r);o.timeout=void 0,this.hide(o)},n)}hideId(r){this.hide(this.state.entries.get(r))}hide(r){r&&(r.timeout!==void 0&&clearTimeout(r.timeout),r.hide=void 0,this.updateState({entries:this.state.entries.delete(r.id)})&&this.events.changed.next(void 0))}};function Rx(){let e=document.createElement("canvas");return e.getContext&&e.getContext("2d")?e.toDataURL("image/webp").indexOf("data:image/webp")===0:!1}var Di=class extends ar{constructor(r){super();this.plugin=r;this._params=void 0;this.behaviors={values:this.ev.behavior({transparent:this.params.transparent.defaultValue,format:{name:"png",params:{}},axes:{name:"off",params:{}},resolution:this.params.resolution.defaultValue,illumination:this.params.illumination.defaultValue}),cropParams:this.ev.behavior({auto:!0,relativePadding:.1}),relativeCrop:this.ev.behavior({x:0,y:0,width:1,height:1})};this.events={previewed:this.ev()};this.canvas=(function(){return document.createElement("canvas")})();this.previewCanvas=(function(){return document.createElement("canvas")})();this.previewData={image:{data:new Uint8ClampedArray(1),width:1,height:0},background:0,transparent:!1}}createParams(){let r=8192;if(this.plugin.canvas3d){let{limits:n}=this.plugin.canvas3d.graphics.resources;r=Math.floor(Math.min(n.maxRenderbufferSize,n.maxTextureSize)/2)}return{resolution:f.MappedStatic("viewport",{viewport:f.Group({}),hd:f.Group({}),"full-hd":f.Group({}),"ultra-hd":f.Group({}),"8k-ultra-hd":f.Group({}),custom:f.Group({width:f.Numeric(1920,{min:128,max:r,step:1}),height:f.Numeric(1080,{min:128,max:r,step:1})},{isFlat:!0})},{options:[["viewport","Viewport"],["hd","HD (1280 x 720)"],["full-hd","Full HD (1920 x 1080)"],["ultra-hd","Ultra HD (3840 x 2160)"],["8k-ultra-hd","8K Ultra HD (7680 x 4320)"],["custom","Custom"]]}),format:f.MappedStatic("png",{png:f.Group({}),webp:f.Group({quality:f.Numeric(.9,{min:0,max:1,step:.01})}),jpeg:f.Group({quality:f.Numeric(.9,{min:0,max:1,step:.01})})},{options:[["png","PNG"],["jpeg","JPEG"],...Rx()?[["webp","WebP"]]:[]]}),transparent:f.Boolean(!1),axes:Qs.axes,illumination:f.Group({extraIterations:f.Numeric(1,{min:0,max:5,step:1}),targetIterationTimeMs:f.Numeric(300,{min:100,max:3e3,step:10})})}}get params(){return this._params?this._params:this._params=this.createParams()}get values(){return this.behaviors.values.value}get cropParams(){return this.behaviors.cropParams.value}get relativeCrop(){return this.behaviors.relativeCrop.value}getCanvasSize(){let r=this.plugin.canvas3d?.graphics.getDrawingBufferSize();return{width:r?.width||0,height:r?.height||0}}getSize(){let r=this.values;switch(r.resolution.name){case"viewport":return this.getCanvasSize();case"hd":return{width:1280,height:720};case"full-hd":return{width:1920,height:1080};case"ultra-hd":return{width:3840,height:2160};case"8k-ultra-hd":return{width:7680,height:4320};default:return{width:r.resolution.params.width,height:r.resolution.params.height}}}getPostprocessingProps(){let r=this.plugin.canvas3d,n=r.props.postprocessing.occlusion;return{...r.props.postprocessing,occlusion:n.name==="on"?{name:"on",params:{...n.params,samples:128,resolutionScale:r.graphics.pixelRatio,transparentThreshold:1}}:n}}getIlluminationProps(r){let o=this.plugin.canvas3d.props.illumination,{extraIterations:i,targetIterationTimeMs:a}=this.values.illumination;return{...o,enabled:r?!1:o.enabled,maxIterations:Math.ceil(Math.log2(Math.pow(2,o.maxIterations+i)*o.rendersPerFrame[1])),targetFps:1e3/a,denoiseThreshold:[o.denoiseThreshold[0],o.denoiseThreshold[0]],rendersPerFrame:[1,1]}}createPass(r){let n=this.plugin.canvas3d,{floatRenderTarget:o}=n.graphics.capabilities;return n.getImagePass({transparentBackground:this.values.transparent,cameraHelper:{axes:this.values.axes},multiSample:{...n.props.multiSample,mode:r?"off":"on",sampleLevel:o?4:2,reuseOcclusion:!1},postprocessing:this.getPostprocessingProps(),marking:{...n.props.marking},illumination:this.getIlluminationProps(r)})}get previewPass(){return this._previewPass||(this._previewPass=this.createPass(!0))}get imagePass(){if(this._imagePass){let r=this.plugin.canvas3d;return this._imagePass.setProps({cameraHelper:{axes:this.values.axes},transparentBackground:this.values.transparent,postprocessing:this.getPostprocessingProps(),marking:{...r.props.marking},illumination:this.getIlluminationProps(!1)}),this._imagePass}return this._imagePass=this.createPass(!1)}getFilename(r){typeof r!="string"&&(r=this.extension);let n=this.plugin.state.data.select(be.Generators.rootsOfType(R.Molecule.Model)).map(a=>a.obj.data),o=new Set;return n.forEach(a=>o.add(a.entryId.toUpperCase())),`${un.toArray(o).join("-")||"molstar-image"}${r}`}resetCrop(){this.behaviors.relativeCrop.next({x:0,y:0,width:1,height:1})}toggleAutocrop(){this.cropParams.auto?(this.behaviors.cropParams.next({...this.cropParams,auto:!1}),this.resetCrop()):this.behaviors.cropParams.next({...this.cropParams,auto:!0})}get isFullFrame(){let r=this.relativeCrop;return an(r.x,0,1e-5)&&an(r.y,0,1e-5)&&an(r.width,1,1e-5)&&an(r.height,1,1e-5)}autocrop(r=this.cropParams.relativePadding){let{data:n,width:o,height:i}=this.previewData.image,a=this.previewData.transparent,s=a?this.previewData.background:4278190080|this.previewData.background,c=o,u=0,l=i,d=0;for(let g=0;g<i;g++){let S=g*o;for(let y=0;y<o;y++){let C=4*(S+y);if(a){if(n[C+3]===0)continue}else if((n[C]<<16|n[C+1]<<8|n[C+2]|n[C+3]<<24)===s)continue;y<c&&(c=y),y>u&&(u=y),g<l&&(l=g),g>d&&(d=g)}}if(c>u){let g=c;c=u,u=g}if(l>d){let g=l;l=d,d=g}let p=u-c+1,m=d-l+1;c-=r*p,u+=r*p,l-=r*m,d+=r*m;let h={x:Math.max(0,c/o),y:Math.max(0,l/i),width:Math.min(1,(u-c+1)/o),height:Math.min(1,(d-l+1)/i)};this.behaviors.relativeCrop.next(h)}async getPreview(r,n=320){let{width:o,height:i}=this.getSize();if(o<=0||i<=0)return;let a=o/i,s=0,c=0;a>1?(s=n,c=Math.round(n/a)):(c=n,s=Math.round(n*a));let u=this.plugin.canvas3d.props;this.previewPass.setProps({cameraHelper:{axes:this.values.axes},transparentBackground:this.values.transparent,postprocessing:u.postprocessing,marking:u.marking});let l=await this.previewPass.getImageData(r,s,c),d=this.previewCanvas;d.width=l.width,d.height=l.height,this.previewData.image=l,this.previewData.background=u.renderer.backgroundColor,this.previewData.transparent=this.values.transparent;let p=d.getContext("2d");if(!p)throw new Error("Could not create canvas 2d context");return p.putImageData(l,0,0),this.cropParams.auto&&this.autocrop(),this.events.previewed.next(void 0),{canvas:d,width:s,height:c}}getSizeAndViewport(){let{width:r,height:n}=this.getSize(),o=this.relativeCrop,i={x:Math.floor(o.x*r),y:Math.floor(o.y*n),width:Math.ceil(o.width*r),height:Math.ceil(o.height*n)};return i.width+i.x>r&&(i.width=r-i.x),i.height+i.y>n&&(i.height=n-i.y),{width:r,height:n,viewport:i}}async draw(r){let{width:n,height:o,viewport:i}=this.getSizeAndViewport();if(!(n<=0||o<=0)){this.plugin.animationLoop.stop({noDraw:!0});try{await r.update("Rendering image...");let a=this.imagePass;await a.updateBackground();let s=await a.getImageData(r,n,o,i);await r.update("Encoding image...");let c=this.canvas;c.width=s.width,c.height=s.height;let u=c.getContext("2d");if(!u)throw new Error("Could not create canvas 2d context");u.putImageData(s,0,0)}finally{this.plugin.animationLoop.start({immediate:!0})}}}copyToClipboardTask(){let r=navigator.clipboard;if(!r?.write){this.plugin.log.error("clipboard.write not supported!");return}return ie.create("Copy Image",async n=>{await this.draw(n),await n.update("Converting image...");let o=this.mimeType,i=await Zn(this.canvas,o,this.quality),a=new ClipboardItem({[o]:i});await r.write([a]),this.plugin.log.message("Image copied to clipboard.")})}get mimeType(){return`image/${this.values.format?.name??"png"}`}get extension(){return this.values.format?.name==="jpeg"?".jpg":`.${this.values.format?.name??"png"}`}get quality(){switch(this.values.format?.name){case"webp":case"jpeg":return this.values.format?.params?.quality??.9;default:return}}getImageDataUri(){return this.plugin.runTask(ie.create("Generate Image",async r=>(await this.draw(r),await r.update("Converting image..."),this.canvas.toDataURL(this.mimeType))))}getImageBlob(){return this.plugin.runTask(ie.create("Generate Image",async r=>(await this.draw(r),await r.update("Converting image..."),Zn(this.canvas,this.mimeType,this.quality))))}copyToClipboard(){let r=this.copyToClipboardTask();if(r)return this.plugin.runTask(r)}downloadTask(r){return ie.create("Download Image",async n=>{await this.draw(n),await n.update("Downloading image...");let o=await Zn(this.canvas,this.mimeType,this.quality);yc(o,r??this.getFilename(this.extension))})}download(r){return this.plugin.runTask(this.downloadTask(r),{useOverlay:!0})}};var _i=class{constructor(t){this.plugin=t;this.entries=[]}findConflict(t){let r=this.entries.find(n=>n.entry.name===t.name);if(r&&r.entry.handle!==t.handle)return`DragAndDropManager: a different handler is already registered under the name '${t.name}'.`}addEntry(t){let r=this.findConflict(t);if(r)throw new Error(r);let n=this.entries.find(o=>o.entry.name===t.name);n?n.count++:this.entries.push({entry:t,count:1})}removeEntry(t){let r=this.entries.findIndex(n=>n.entry.name===t.name&&n.entry.handle===t.handle);r>=0&&this.decrement(r)}addHandler(t,r,n){this.addEntry({name:t,handle:r,...n})}removeHandler(t){let r=this.entries.findIndex(n=>n.entry.name===t);r>=0&&this.decrement(r)}list(){return this.entries.map(t=>t.entry)}decrement(t){--this.entries[t].count<=0&&this.entries.splice(t,1)}async handle(t){await this.tryHandlers(t,!1)||Px(this.plugin,t)||await this.tryHandlers(t,!0)}async tryHandlers(t,r){let n=this.entries.filter(o=>!!o.entry.fallback===r).map(o=>o.entry);for(let o=n.length-1;o>=0;o--)if(await n[o].handle(t,this.plugin))return!0;return!1}dispose(){this.entries.length=0}};function Px(e,t){let r=t.filter(n=>{let o=n.name.toLowerCase();return o.endsWith(".molx")||o.endsWith(".molj")});return r.length===0?!1:(he.State.Snapshots.OpenFile(e,{file:r[0]}),!0)}var Ei=class{constructor(){this.errors=Object.create(null)}get(t){return this.errors[t]??[]}add(t,r){t in this.errors&&Array.isArray(this.errors[t])?this.errors[t].push(r):this.errors[t]=[r]}clear(t){delete this.errors[t]}};var Ai=class{constructor(t){this.options=t;let r=document.createElement("div");Object.assign(r.style,{position:"absolute",left:0,top:0,right:0,bottom:0,"-webkit-user-select":"none","user-select":"none","-webkit-tap-highlight-color":"rgba(0,0,0,0)","-webkit-touch-callout":"none","touch-action":"manipulation"});let n=t?.canvas;n||(n=document.createElement("canvas"),r.appendChild(n)),this.canvas=n,this.parent=r}mount(t){this.parent.parentElement!==t&&this.parent.parentElement?.removeChild(this.parent),t.appendChild(this.parent)}unmount(){this.parent.parentElement?.removeChild(this.parent)}};var Dx=["actions","animations","customFormats"],_x=1e3,Nf=class{constructor(t){this.spec=t;this.runTask=(t,r)=>this.managers.task.run(t,r);this.resolveTask=t=>{if(t)return ie.is(t)?this.runTask(t):t};this.subs=[];this.initCanvas3dPromiseCallbacks=[()=>{},()=>{}];this._isInitialized=!1;this.initializedPromiseCallbacks=[()=>{},()=>{}];this.disposed=!1;this.container=void 0;this.ev=Br.create();this.config=new pc(this.spec.config);this.state=new mc(this);this.commands=new fc;this.canvas3dInit=this.ev.behavior(!1);this.behaviors={state:{isAnimating:this.ev.behavior(!1),isUpdating:this.ev.behavior(!1),isBusy:this.ev.behavior(!1)},interaction:{hover:this.ev.behavior({current:ve.Loci.Empty,modifiers:qn.None,buttons:0,button:0}),click:this.ev.behavior({current:ve.Loci.Empty,modifiers:qn.None,buttons:0,button:0}),drag:this.ev.behavior({current:ve.Loci.Empty,modifiers:qn.None,buttons:0,button:0,pageStart:Ii(),pageEnd:Ii()}),key:this.ev.behavior(qi),keyReleased:this.ev.behavior(qi),selectionMode:this.ev.behavior(!1)},labels:{highlight:this.ev.behavior({labels:[]})},layout:{leftPanelTabName:this.ev.behavior("root")},canvas3d:{initialized:this.canvas3dInit.pipe(Vi(t=>!!t),Gi(1))}};this.canvas3dInitialized=new Promise((t,r)=>{this.initCanvas3dPromiseCallbacks=[t,r]});this.initialized=new Promise((t,r)=>{this.initializedPromiseCallbacks=[t,r]});this.layout=new xi(this);this.animationLoop=new Ci(this);this.representation={structure:{registry:new Si,themes:{colorThemeRegistry:jn.createRegistry(),sizeThemeRegistry:Wn.createRegistry()}},volume:{registry:new Ti,themes:{colorThemeRegistry:jn.createRegistry(),sizeThemeRegistry:Wn.createRegistry()}},particles:{registry:new vi,themes:{colorThemeRegistry:jn.createRegistry(),sizeThemeRegistry:Wn.createRegistry()}}};this.query={structure:{registry:new Uo}};this.dataFormats=new ko;this.bondProviders=new ic;this.builders={data:new Bo(this),structure:void 0};this.helpers={substructureParent:new Ri(this),viewportScreenshot:void 0};this.assetManager=this.spec.assetManager?.()??{manager:new cs};this.managers={structure:{hierarchy:new en(this),component:new Qr(this),measurement:new fi(this),selection:new Xo(this),focus:new Zo(this)},volume:{hierarchy:new rn(this)},particles:{hierarchy:new tn(this)},interactivity:void 0,camera:new No(this),animation:new zo(this),snapshot:new gc(this),lociLabels:void 0,toast:new Pi(this),asset:this.assetManager.manager,task:new nn,markdownExtensions:new bi(this),dragAndDrop:new _i(this)};this.events={log:this.ev(),task:this.managers.task.events,canvas3d:{settingsUpdated:this.ev(),backendChanged:this.ev()}};this.customModelProperties=new bn.Registry;this.customStructureProperties=new bn.Registry;this.customVolumeProperties=new bn.Registry;this.customStructureControls=new Map;this.customImportControls=new Map;this.genericRepresentationControls=new Map;this.errorContext=new Ei;this.customState=Object.create(null);this._graphicsBackends=[];this.handleResize=()=>{let t=this.canvas3dContext?.canvas,r=this.layout.root;r&&t&&(nc(t,r,this.canvas3dContext.pixelScale),this.canvas3dContext.syncPixelScale(),this.canvas3d?.requestResize())};this.log={entries:xs(),entry:t=>this.events.log.next(t),error:t=>this.events.log.next(dn.error(t)),message:t=>this.events.log.next(dn.message(t)),info:t=>this.events.log.next(dn.info(t)),warn:t=>this.events.log.next(dn.warning(t))};this.fetch=as;this.warnedDefaultThemes=new Set;for(let r of Dx)if(t[r]!==void 0)throw new Error(`PluginSpec.${r} was removed in 6.0; use registry entries (see the migration guide)`);ds(this.config.get(Pe.Structure.SaccharideCompIdMapType)??"default")}get isInitialized(){return this._isInitialized}build(){return this.state.data.build()}setCanvas3DProps(t){this.canvas3d&&(this.canvas3d.setProps(t),this.events.canvas3d.settingsUpdated.next(void 0))}setCanvas3DContextProps(t){this.canvas3dContext&&(this.canvas3dContext.setProps(t),this.events.canvas3d.settingsUpdated.next(void 0))}async initViewerAsync(t,r,n){return await this._initViewer(t,r,n)}async initContainerAsync(t){return await this._initContainer(t)}async mountAsync(t,r){return await this._mount(t,r)}_initContainer(t){return this.container?Promise.resolve(!0):(this.containerInit??=this._createContainer(t).finally(()=>{this.containerInit=void 0}),this.containerInit)}async _createContainer(t){let r=new Ai({checkeredCanvasBackground:t?.checkeredCanvasBackground,canvas:t?.canvas3dContext?.canvas});return await this._initViewer(r.canvas,r.parent,t?.canvas3dContext)?(t?.checkeredCanvasBackground&&this.setCanvas3DProps({checkeredTransparentBackground:!0}),this.container=r,!0):!1}async _mount(t,r){if(this.disposed)throw new Error("Cannot mount a disposed context");return await this._initContainer(r)?(this.container?.mount(t),this.handleResize(),!0):!1}unmount(){this.container?.unmount()}async _initViewer(t,r,n){try{if(this.layout.setRoot(r),this.spec.layout&&this.spec.layout.initial&&this.layout.setProps(this.spec.layout.initial),!n){let a=this.config.get(Pe.General.PreferWebGl1)||!1,s=this.config.get(Pe.General.GraphicsBackends)??Ta({preferWebGl1:a});if(this._graphicsBackends=s,n=await tc.create(t,this.managers.asset,s,{antialias:!(this.config.get(Pe.General.DisableAntialiasing)??!1),preserveDrawingBuffer:!(this.config.get(Pe.General.DisablePreserveDrawingBuffer)??!1),preferWebGl1:a,failIfMajorPerformanceCaveat:!(this.config.get(Pe.General.AllowMajorPerformanceCaveat)??!1),powerPreference:this.config.get(Pe.General.PowerPreference)||"high-performance",handleResize:this.handleResize},{pixelScale:this.config.get(Pe.General.PixelScale)||1,pickScale:this.config.get(Pe.General.PickScale)||.25,transparency:this.config.get(Pe.General.Transparency)||"wboit",resolutionMode:this.config.get(Pe.General.ResolutionMode)||"auto"}),this.disposed)return n.dispose(),!1}this.canvas3dContext=n,this.canvas3d=rc.create(this.canvas3dContext),this.canvas3dInit.next(!0);let o=this.spec.canvas3d,i=16579577;return o?(o.renderer?.backgroundColor===void 0&&(o=Ts(o,a=>{a.renderer?a.renderer.backgroundColor=i:a.renderer={backgroundColor:i}})),this.setCanvas3DProps(o)):this.setCanvas3DProps({renderer:{backgroundColor:i}}),this.animationLoop.start(),this.helpers.viewportScreenshot=new Di(this),this.subs.push(this.canvas3d.interaction.click.subscribe(a=>{this.managers.interactivity?.clickOwners.owns(a.current.repr)||this.behaviors.interaction.click.next(a)})),this.subs.push(this.canvas3d.interaction.drag.subscribe(a=>this.behaviors.interaction.drag.next(a))),this.subs.push(this.canvas3d.interaction.hover.subscribe(a=>this.behaviors.interaction.hover.next(a))),this.subs.push(this.canvas3d.input.resize.pipe(ki(50),Ui(100,void 0,{leading:!1,trailing:!0})).subscribe(()=>this.handleResize())),this.subs.push(this.canvas3d.input.keyDown.subscribe(a=>this.behaviors.interaction.key.next(a))),this.subs.push(this.canvas3d.input.keyUp.subscribe(a=>this.behaviors.interaction.keyReleased.next(a))),this.subs.push(this.canvas3d.xr.isPresenting.subscribe(a=>this.log.info(`WebXR ${a?"enabled":"disabled"}`))),this.subs.push(this.canvas3d.xr.requestFailed.subscribe(a=>this.log.error(`WebXR request failed: ${a}`))),this.subs.push(this.layout.events.updated.subscribe(()=>requestAnimationFrame(()=>this.handleResize()))),this.subs.push(this.canvas3d.contextChanged.subscribe(({reason:a})=>{let s=this.canvas3d?.graphics.capabilities.backend;a==="fallback"?this.log.warn(`Graphics context lost, continuing with ${s}`):a==="restore"?this.log.info(`Graphics context restored (${s})`):this.log.info(`Graphics backend: ${s}`),this.events.canvas3d.backendChanged.next(void 0)})),this.handleResize(),Lr.setImmediate(()=>this.initCanvas3dPromiseCallbacks[0]()),!0}catch(o){return this.log.error(""+o),console.error(o),Lr.setImmediate(()=>this.initCanvas3dPromiseCallbacks[1](o)),!1}}get graphicsBackends(){return this._graphicsBackends}async setGraphicsBackends(t){return this.canvas3dContext?.setBackend?this.canvas3dContext.setBackend(t):!1}get isBusy(){return this.behaviors.state.isAnimating.value||this.behaviors.state.isUpdating.value}get selectionMode(){return this.behaviors.interaction.selectionMode.value}set selectionMode(t){this.behaviors.interaction.selectionMode.next(t)}dataTransaction(t,r){return this.runTask(this.state.data.transaction(t,r))}clear(t=!1){return t&&this.setCanvas3DProps(Xn),he.State.RemoveObject(this,{state:this.state.data,ref:xr.RootRef})}dispose(t){if(!this.disposed){for(let r of this.subs)r.unsubscribe();this.subs=[],this.layout.dispose(),this.managers.markdownExtensions.audio.dispose(),this.animationLoop.dispose(),this.commands.dispose(),this.canvas3d?.dispose(),t?.doNotDisposeCanvas3DContext||this.canvas3dContext?.dispose(t),this.ev.dispose(),this.state.dispose(),this.helpers.substructureParent.dispose(),Ke(this.managers,r=>{r===this.managers.asset&&this.assetManager.disposeWithPlugin===!1||r?.dispose?.()}),Ke(this.managers.structure,r=>r?.dispose?.()),Ke(this.managers.volume,r=>r?.dispose?.()),this.unmount(),this.container=void 0,this.customState={},this.disposed=!0}}initBehaviorEvents(){this.subs.push(Gn(this.state.data.behaviors.isUpdating,this.state.behaviors.behaviors.isUpdating).subscribe(a=>{this.behaviors.state.isUpdating.value!==a&&this.behaviors.state.isUpdating.next(a)}));let t=this.config.get(Pe.General.IsBusyTimeoutMs)||750,r=this.behaviors.state.isBusy,n,o=()=>{r.value||r.next(!0)},i=()=>{n!==void 0&&clearTimeout(n),n=void 0};this.subs.push(Gn(this.behaviors.state.isUpdating,this.behaviors.state.isAnimating).subscribe(a=>{let s=this.behaviors.state.isUpdating.value,c=this.behaviors.state.isAnimating.value;s||c?r.value||(i(),n=setTimeout(o,t)):(i(),r.next(!1))})),this.subs.push(this.behaviors.interaction.selectionMode.subscribe(a=>{a||this.managers.interactivity?.lociSelects.deselectAll()}))}initBuiltInBehavior(){An.State.registerDefault(this),An.Representation.registerDefault(this),An.Camera.registerDefault(this),An.Misc.registerDefault(this),this.subs.push(Gn(this.state.data.events.log,this.state.behaviors.events.log).subscribe(t=>this.events.log.next(t)))}async initBehaviors(){let t=this.state.behaviors.build();for(let r of Object.keys(sr.Categories))t.toRoot().apply(sr.CreateCategory,{label:sr.Categories[r]},{ref:r,state:{isLocked:!0}});for(let r of this.spec.behaviors)sr.getCategoryId(r.transformer)==="custom-props"&&t.to(sr.getCategoryId(r.transformer)).apply(r.transformer,r.defaultParams,{ref:r.transformer.id});await this.runTask(this.state.behaviors.updateTree(t,{doNotUpdateCurrent:!0,doNotLogTiming:!0})),t=this.state.behaviors.build();for(let r of this.spec.behaviors)sr.getCategoryId(r.transformer)!=="custom-props"&&t.to(sr.getCategoryId(r.transformer)).apply(r.transformer,r.defaultParams,{ref:r.transformer.id});await this.runTask(this.state.behaviors.updateTree(t,{doNotUpdateCurrent:!0,doNotLogTiming:!0}))}register(t){if(!this.managers.interactivity||!this.managers.lociLabels||!this.builders.structure)throw new Error("PluginContext.register called before init()");let r=Uf(this,t);return this._isInitialized&&this.checkDefaultThemes(),r}checkDefaultThemes(){if(!Xt)try{zf(this,this.warnedDefaultThemes)}catch(t){this.log.error(`Default theme check failed: ${t}`)}}async init(){try{this.subs.push(this.events.log.subscribe(t=>{let r=this.log.entries.push(t);this.log.entries=r.size>_x?r.shift():r})),this.initBehaviorEvents(),this.initBuiltInBehavior(),this.managers.interactivity=new Yr(this),this.managers.lociLabels=new jo(this),this.builders.structure=new Go(this),this.spec.registry?.length&&this.register(this.spec.registry),await this.initBehaviors(),this.log.message(`Mol* Plugin ${hc}`),Xt||this.log.message("Development mode enabled"),j&&this.log.message("Debug mode enabled"),this.checkDefaultThemes(),this._isInitialized=!0,this.initializedPromiseCallbacks[0]()}catch(t){throw this.initializedPromiseCallbacks[1](t),t}}};export{Rc as a,dr as b,zr as c,Sr as d,Nr as e,Et as f,Dm as g,ho as h,qu as i,na as j,oa as k,jr as l,ud as m,hd as n,pa as o,yd as p,vd as q,Pd as r,Dd as s,_d as t,cp as u,Sa as v,Ta as w,Xr as x,Cg as y,fp as z,Yr as A,Mg as B,Vg as C,kg as D,Gg as E,Ug as F,zg as G,Ng as H,jg as I,Wg as J,vp as K,Zg as L,Wo as M,Ea as N,Pp as O,Qg as P,Ho as Q,Ep as R,ey as S,$o as T,qo as U,Op as V,oy as W,vn as X,DO as Y,_O as Z,Qr as _,py as $,sf as aa,si as ba,ci as ca,ui as da,_n as ea,li as fa,Wb as ga,Df as ha,yi as ia,Ha as ja,Nf as ka};
