import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{S as t,T as n,_ as r,v as i,w as a,x as o,y as s}from"./zip-BqSuRSbJ.js";import{n as c,t as l}from"./Subject-DEROcNsU.js";import{n as u,t as d}from"./BehaviorSubject-DXYuRpR6.js";import{n as f,t as p}from"./debounceTime-D_qV2Azt.js";import{n as m,t as h}from"./merge-DlOV42QU.js";import{Ct as g,D as _,Dt as v,Et as y,Ft as b,G as x,Gt as S,It as C,J as w,Jt as T,Lt as E,Mt as D,Nt as O,Pt as ee,Qt as te,S as k,Tt as A,Wt as j,Xt as M,Yt as N,at as ne,dt as re,en as P,fn as F,it as ie,jt as I,k as ae,kt as L,l as oe,n as R,on as z,ot as B,pn as se,rn as ce,sn as le,t as V,tn as ue,tt as de,ut as fe,wt as pe,zt as me}from"./param-definition-OHPHmB1q.js";import{n as he,t as ge}from"./names-DbgGgpWr.js";import{c as _e,d as ve,l as ye,u as be}from"./state-BalEto-e.js";import{t as xe,u as Se}from"./hash-functions-C8By6cSU.js";import{_ as H,c as U,g as Ce,h as we}from"./boundary-helper-D7OoGRQ3.js";import{A as Te,X as Ee,a as De,et as W,i as Oe,k as G,nt as ke,s as Ae,t as je,tt as K,z as q}from"./geometry-BlnjcNLD.js";import{gn as Me,t as Ne}from"./structure-BN3xBbYW.js";import{c as Pe,n as Fe,o as Ie,t as Le}from"./visual-DkNWCkFs.js";import{a as Re,c as ze,i as Be,n as Ve,s as He,t as Ue}from"./loci-QrYUvakO.js";import{a as We,n as Ge,r as Ke,t as qe}from"./picking-gIA_aspu.js";import{Bn as Je,Bt as Ye,Ct as Xe,Dt as Ze,Et as Qe,Fn as $e,Ft as et,Gt as tt,Hn as J,Ht as nt,In as rt,It as Y,Ln as it,Lt as X,Mn as at,Mt as ot,Nt as st,Ot as ct,Pn as lt,Pt as ut,Rn as dt,Rt as Z,Tt as ft,U as pt,Un as mt,Ut as ht,Vn as gt,Vt as _t,W as vt,Wt as yt,fn as bt,ir as xt,jn as St,jt as Ct,n as wt,nr as Tt,pn as Et,rr as Dt,t as Ot,tr as kt,un as At,wt as jt,zn as Mt,zt as Nt}from"./geometry-DrdBLOrO.js";import{n as Pt}from"./browser-DZlyaItU.js";import{c as Ft,g as It,i as Lt,n as Rt,p as zt,r as Bt,t as Vt}from"./mesh-builder-BkonCRdx.js";import{C as Ht,S as Ut,T as Wt,_ as Gt,b as Kt,c as qt,d as Jt,f as Yt,h as Xt,i as Zt,k as Qt,l as $t,m as en,p as tn,r as nn,t as rn,u as an,v as on,w as sn,x as cn,y as ln}from"./camera-helper-aa92VzKO.js";var un;function dn(){return(dn=e((()=>{un=`
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
`})))()}var fn;function pn(){return(pn=e((()=>{fn=`
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
`})))()}function mn(e,t){let n=t.getWidth(),r=t.getHeight(),i={...ft,tColor:z.create(t),uTexSizeInv:z.create(N.create(1/n,1/r)),dEdgeThresholdMin:z.create(.0312),dEdgeThresholdMax:z.create(.125),dIterations:z.create(12),dSubpixelQuality:z.create(.3)},a={..._n},o=st(e,`triangles`,vn,a,i);return _t(o,i)}var hn,gn,_n,vn;function yn(){return(yn=e((()=>{ct(),ht(),Ye(),mt(),ut(),W(),P(),R(),Ct(),pn(),i(),hn={edgeThresholdMin:V.Numeric(.0312,{min:.0312,max:.0833,step:1e-4},{description:`Trims the algorithm from processing darks.`}),edgeThresholdMax:V.Numeric(.063,{min:.063,max:.333,step:.001},{description:`The minimum amount of local contrast required to apply algorithm.`}),iterations:V.Numeric(12,{min:0,max:16,step:1},{description:`Number of edge exploration steps.`}),subpixelQuality:V.Numeric(.3,{min:0,max:1,step:.01},{description:`Choose the amount of sub-pixel aliasing removal.`})},gn=class{constructor(e,t){this.webgl=e,this.renderable=mn(e,t)}updateState(e){let{gl:t,state:n}=this.webgl;n.enable(t.SCISSOR_TEST),n.disable(t.BLEND),n.disable(t.DEPTH_TEST),n.depthMask(!1);let{x:r,y:i,width:a,height:o}=e;n.viewport(r,i,a,o),n.scissor(r,i,a,o),n.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT)}setSize(e,t){z.update(this.renderable.values.uTexSizeInv,N.set(this.renderable.values.uTexSizeInv.ref.value,1/e,1/t))}update(e,t){let{values:n}=this.renderable,{edgeThresholdMin:r,edgeThresholdMax:i,iterations:a,subpixelQuality:o}=t,s=!1;n.tColor.ref.value!==e&&(z.update(this.renderable.values.tColor,e),s=!0),n.dEdgeThresholdMin.ref.value!==r&&(s=!0),z.updateIfChanged(n.dEdgeThresholdMin,r),n.dEdgeThresholdMax.ref.value!==i&&(s=!0),z.updateIfChanged(n.dEdgeThresholdMax,i),n.dIterations.ref.value!==a&&(s=!0),z.updateIfChanged(n.dIterations,a),n.dSubpixelQuality.ref.value!==o&&(s=!0),z.updateIfChanged(n.dSubpixelQuality,o),s&&this.renderable.update()}render(e,t){o&&this.webgl.timer.mark(`FxaaPass.render`),t?t.bind():this.webgl.bindDrawingBuffer(),this.updateState(e),this.renderable.render(),o&&this.webgl.timer.markEnd(`FxaaPass.render`)}},_n={...jt,tColor:X(`texture`,`rgba`,`ubyte`,`linear`),uTexSizeInv:Z(`v2`),dEdgeThresholdMin:Y(`number`),dEdgeThresholdMax:Y(`number`),dIterations:Y(`number`),dSubpixelQuality:Y(`number`)},vn=J(`fxaa`,ot,fn)})))()}var bn;function xn(){return(xn=e((()=>{bn=`
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
`})))()}var Sn;function Cn(){return(Cn=e((()=>{Sn=`
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
`})))()}var wn;function Tn(){return(Tn=e((()=>{wn=`
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
`})))()}var En;function Dn(){return(Dn=e((()=>{En=`
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
`})))()}var On;function kn(){return(kn=e((()=>{On=`
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
`})))()}var An;function jn(){return(jn=e((()=>{An=`
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
`})))()}function Mn(e,t){let n=t.getWidth(),r=t.getHeight(),i={...ft,tColor:z.create(t),uTexSizeInv:z.create(N.create(1/n,1/r)),uViewport:z.create(K()),dEdgeThreshold:z.create(.1)},a={...zn},o=st(e,`triangles`,Bn,a,i);return _t(o,i)}function Nn(e,t){let n=t.getWidth(),r=t.getHeight(),i=e.resources.texture(`image-uint8`,`rgb`,`ubyte`,`linear`),a=e.resources.texture(`image-uint8`,`rgba`,`ubyte`,`nearest`),o={...ft,tEdges:z.create(t),tArea:z.create(i),tSearch:z.create(a),uTexSizeInv:z.create(N.create(1/n,1/r)),uViewport:z.create(K()),dMaxSearchSteps:z.create(16)};lt(Fn(),o.tArea,i),lt(In(),o.tSearch,a);let s={...Vn},c=st(e,`triangles`,Hn,s,o);return _t(c,o)}function Pn(e,t,n){let r=t.getWidth(),i=t.getHeight(),a={...ft,tColor:z.create(t),tWeights:z.create(n),uTexSizeInv:z.create(N.create(1/r,1/i)),uViewport:z.create(K())},o={...Un},s=st(e,`triangles`,Wn,o,a);return _t(s,a)}function Fn(){return`data:image/png;base64,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`}function In(){return`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII=`}var Ln,Rn,zn,Bn,Vn,Hn,Un,Wn;function Gn(){return(Gn=e((()=>{ct(),ht(),Ye(),mt(),ut(),at(),W(),P(),R(),xn(),Cn(),Tn(),Dn(),kn(),jn(),cn(),i(),Ln={edgeThreshold:V.Numeric(.1,{min:.05,max:.15,step:.01}),maxSearchSteps:V.Numeric(16,{min:0,max:32,step:1})},Rn=class{get supported(){return this._supported}constructor(e,t){if(this.webgl=e,this._supported=!1,typeof HTMLImageElement>`u`){s&&console.log(`Missing "HTMLImageElement" required for "SMAA"`);return}let n=t.getWidth(),r=t.getHeight();this.edgesTarget=e.createRenderTarget(n,r,`none`,`uint8`,`linear`),this.weightsTarget=e.createRenderTarget(n,r,`none`,`uint8`,`linear`),this.edgesRenderable=Mn(e,t),this.weightsRenderable=Nn(e,this.edgesTarget.texture),this.blendRenderable=Pn(e,t,this.weightsTarget.texture),this._supported=!0}getByteCount(){return this.supported?this.edgesTarget.getByteCount()+this.weightsTarget.getByteCount():0}updateState(e){let{gl:t,state:n}=this.webgl;n.enable(t.SCISSOR_TEST),n.disable(t.BLEND),n.disable(t.DEPTH_TEST),n.depthMask(!1);let{x:r,y:i,width:a,height:o}=e;n.viewport(r,i,a,o),n.scissor(r,i,a,o),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT),z.update(this.edgesRenderable.values.uViewport,Ut.toVec4(this.edgesRenderable.values.uViewport.ref.value,e)),z.update(this.weightsRenderable.values.uViewport,Ut.toVec4(this.weightsRenderable.values.uViewport.ref.value,e)),z.update(this.blendRenderable.values.uViewport,Ut.toVec4(this.blendRenderable.values.uViewport.ref.value,e))}setSize(e,t){let n=this.edgesTarget.getWidth(),r=this.edgesTarget.getHeight();(e!==n||t!==r)&&(this.edgesTarget.setSize(e,t),this.weightsTarget.setSize(e,t),z.update(this.edgesRenderable.values.uTexSizeInv,N.set(this.edgesRenderable.values.uTexSizeInv.ref.value,1/e,1/t)),z.update(this.weightsRenderable.values.uTexSizeInv,N.set(this.weightsRenderable.values.uTexSizeInv.ref.value,1/e,1/t)),z.update(this.blendRenderable.values.uTexSizeInv,N.set(this.blendRenderable.values.uTexSizeInv.ref.value,1/e,1/t)))}update(e,t){let n=!1;this.edgesRenderable.values.tColor.ref.value!==e&&(z.update(this.edgesRenderable.values.tColor,e),n=!0),this.edgesRenderable.values.dEdgeThreshold.ref.value!==t.edgeThreshold&&(z.update(this.edgesRenderable.values.dEdgeThreshold,t.edgeThreshold),n=!0),n&&this.edgesRenderable.update(),this.weightsRenderable.values.dMaxSearchSteps.ref.value!==t.maxSearchSteps&&(z.update(this.weightsRenderable.values.dMaxSearchSteps,t.maxSearchSteps),this.weightsRenderable.update()),this.blendRenderable.values.tColor.ref.value!==e&&(z.update(this.blendRenderable.values.tColor,e),this.blendRenderable.update())}render(e,t){o&&this.webgl.timer.mark(`SmaaPass.render`),this.edgesTarget.bind(),this.updateState(e),this.edgesRenderable.render(),this.weightsTarget.bind(),this.updateState(e),this.weightsRenderable.render(),t?t.bind():this.webgl.bindDrawingBuffer(),this.updateState(e),this.blendRenderable.render(),o&&this.webgl.timer.markEnd(`SmaaPass.render`)}},zn={...jt,tColor:X(`texture`,`rgba`,`ubyte`,`linear`),uTexSizeInv:Z(`v2`),uViewport:Z(`v4`),dEdgeThreshold:Y(`number`)},Bn=J(`smaa-edges`,On,An),Vn={...jt,tEdges:X(`texture`,`rgba`,`ubyte`,`linear`),tArea:X(`texture`,`rgb`,`ubyte`,`linear`),tSearch:X(`texture`,`rgba`,`ubyte`,`nearest`),uTexSizeInv:Z(`v2`),uViewport:Z(`v4`),dMaxSearchSteps:Y(`number`)},Hn=J(`smaa-weights`,wn,En),Un={...jt,tColor:X(`texture`,`rgba`,`ubyte`,`linear`),tWeights:X(`texture`,`rgba`,`ubyte`,`linear`),uTexSizeInv:Z(`v2`),uViewport:Z(`v4`)},Wn=J(`smaa-blend`,bn,Sn)})))()}var Kn;function qn(){return(qn=e((()=>{Kn=`
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
`})))()}var Jn;function Yn(){return(Yn=e((()=>{Jn=`
precision mediump float;

attribute vec2 aPosition;

varying vec4 vPosition;

void main() {
    vPosition = vec4(aPosition, 1.0, 1.0);
    gl_Position = vec4(aPosition, 1.0, 1.0);
}
`})))()}function Xn(e,t){return t.name===`urls`?{nx:_.getUrlAsset(e,t.params.nx),ny:_.getUrlAsset(e,t.params.ny),nz:_.getUrlAsset(e,t.params.nz),px:_.getUrlAsset(e,t.params.px),py:_.getUrlAsset(e,t.params.py),pz:_.getUrlAsset(e,t.params.pz)}:{nx:t.params.nx,ny:t.params.ny,nz:t.params.nz,px:t.params.px,py:t.params.py,pz:t.params.pz}}function Zn(e,t){let n=t=>e.resolve(t,`binary`).run().then(e=>new Blob([e.data]));return{nx:n(t.nx),ny:n(t.ny),nz:n(t.nz),px:n(t.px),py:n(t.py),pz:n(t.pz)}}function Qn(e){return e.name===`urls`?`${fr}_${e.params.nx}|${e.params.ny}|${e.params.nz}|${e.params.px}|${e.params.py}|${e.params.pz}`:`${fr}_${e.params.nx?.id}|${e.params.ny?.id}|${e.params.nz?.id}|${e.params.px?.id}|${e.params.py?.id}|${e.params.pz?.id}`}function $n(e,t){return Qn(e)===Qn(t)}function er(e,t,n,r){let i=Xn(t,n),a=Zn(t,i),o=[i.nx,i.ny,i.nz,i.px,i.py,i.pz];return typeof HTMLImageElement>`u`?(console.error(`Missing "HTMLImageElement" required for background skybox`),r?.(!0),{texture:St(),assets:o}):{texture:e.resources.cubeTexture(a,!0,r),assets:o}}function tr(e){return e.name===`url`?`${pr}_${e.params}`:`${pr}_${e.params?.id}`}function nr(e,t){return tr(e)===tr(t)}function rr(e,t,n,r){let i=n.name===`url`?t.tryFindFilename(n.params)??_.getUrlAsset(t,n.params):n.params;if(typeof HTMLImageElement>`u`)return console.error(`Missing "HTMLImageElement" required for background image`),r?.(!0),{texture:St(),asset:i};let a=e.resources.texture(`image-uint8`,`rgba`,`ubyte`,`linear`),o=new Image;return o.onload=()=>{a.load(o),(e.isWebGL2||D(o.width)&&D(o.height))&&a.mipmap(),r?.()},o.onerror=()=>{r?.(!0)},t.resolve(i,`binary`).run().then(e=>{let t=new Blob([e.data]);o.src=URL.createObjectURL(t)}),{texture:a,asset:i}}function ir(e,t,n){let r={drawCount:z.create(6),instanceCount:z.create(1),aPosition:z.create(Xe),tSkybox:z.create(St()),tImage:z.create(St()),uImageScale:z.create(N()),uImageOffset:z.create(N()),uTexSize:z.create(N.create(t,n)),uViewport:z.create(K()),uViewportAdjusted:z.create(!0),uViewDirectionProjectionInverse:z.create(A()),uGradientColorA:z.create(g()),uGradientColorB:z.create(g()),uGradientRatio:z.create(.5),uBlur:z.create(0),uOpacity:z.create(1),uSaturation:z.create(0),uLightness:z.create(0),uRotation:z.create(j.identity()),dVariant:z.create(`skybox`)},i={...mr},a=st(e,`triangles`,hr,i,r);return _t(a,r)}var ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr;function gr(){return(gr=e((()=>{ct(),ht(),Ye(),mt(),qn(),Yn(),ut(),at(),y(),le(),R(),i(),Jt(),pe(),M(),H(),ae(),ke(),I(),S(),tn(),ar={opacity:V.Numeric(1,{min:0,max:1,step:.01}),saturation:V.Numeric(0,{min:-1,max:1,step:.01}),lightness:V.Numeric(0,{min:-1,max:1,step:.01})},or={faces:V.MappedStatic(`urls`,{urls:V.Group({nx:V.Text(``,{label:`Negative X / Left`}),ny:V.Text(``,{label:`Negative Y / Bottom`}),nz:V.Text(``,{label:`Negative Z / Back`}),px:V.Text(``,{label:`Positive X / Right`}),py:V.Text(``,{label:`Positive Y / Top`}),pz:V.Text(``,{label:`Positive Z / Front`})},{isExpanded:!0,label:`URLs`}),files:V.Group({nx:V.File({label:`Negative X / Left`,accept:`image/*`}),ny:V.File({label:`Negative Y / Bottom`,accept:`image/*`}),nz:V.File({label:`Negative Z / Back`,accept:`image/*`}),px:V.File({label:`Positive X / Right`,accept:`image/*`}),py:V.File({label:`Positive Y / Top`,accept:`image/*`}),pz:V.File({label:`Positive Z / Front`,accept:`image/*`})},{isExpanded:!0,label:`Files`})}),blur:V.Numeric(0,{min:0,max:1,step:.01},{description:`Note, this only works in WebGL2 or when "EXT_shader_texture_lod" is available.`}),rotation:V.Group({x:V.Numeric(0,{min:0,max:360,step:1},{immediateUpdate:!0}),y:V.Numeric(0,{min:0,max:360,step:1},{immediateUpdate:!0}),z:V.Numeric(0,{min:0,max:360,step:1},{immediateUpdate:!0})}),...ar},sr={source:V.MappedStatic(`url`,{url:V.Text(``),file:V.File({accept:`image/*`})}),blur:V.Numeric(0,{min:0,max:1,step:.01},{description:`Note, this only works in WebGL2 or with power-of-two images and when "EXT_shader_texture_lod" is available.`}),...ar,coverage:V.Select(`viewport`,V.arrayToOptions([`viewport`,`canvas`]))},cr={topColor:V.Color(x(14540253)),bottomColor:V.Color(x(15658734)),ratio:V.Numeric(.5,{min:0,max:1,step:.01}),coverage:V.Select(`viewport`,V.arrayToOptions([`viewport`,`canvas`]))},lr={centerColor:V.Color(x(14540253)),edgeColor:V.Color(x(15658734)),ratio:V.Numeric(.5,{min:0,max:1,step:.01}),coverage:V.Select(`viewport`,V.arrayToOptions([`viewport`,`canvas`]))},ur={variant:V.MappedStatic(`off`,{off:V.EmptyGroup(),skybox:V.Group(or,{isExpanded:!0}),image:V.Group(sr,{isExpanded:!0}),horizontalGradient:V.Group(cr,{isExpanded:!0}),radialGradient:V.Group(lr,{isExpanded:!0})},{label:`Environment`})},dr=class{constructor(e,t,n,r){this.webgl=e,this.assetManager=t,this.camera=new an,this.target=g(),this.position=g(),this.dir=g(),this.bgColor=g(),this.renderable=ir(e,n,r)}setSize(e,t){let[n,r]=this.renderable.values.uTexSize.ref.value;(e!==n||t!==r)&&z.update(this.renderable.values.uTexSize,N.set(this.renderable.values.uTexSize.ref.value,e,t))}clearSkybox(){this.skybox!==void 0&&(this.skybox.texture.destroy(),this.skybox.assets.forEach(e=>this.assetManager.release(e)),this.skybox=void 0)}updateSkybox(e,t,n){let r=this.skybox?.props.faces,i=t.faces.params;if(!i.nx||!i.ny||!i.nz||!i.px||!i.py||!i.pz){this.clearSkybox(),n?.(!1);return}if(!this.skybox||!r||!$n(t.faces,this.skybox.props.faces)){this.clearSkybox();let{texture:e,assets:r}=er(this.webgl,this.assetManager,t.faces,e=>{this.skybox&&(this.skybox.loaded=!e),n?.(!0)});this.skybox={texture:e,props:{...t},assets:r,loaded:!1},z.update(this.renderable.values.tSkybox,e),this.renderable.update()}else n?.(!1);if(!this.skybox)return;let a=e;e.state.mode===`orthographic`&&(this.camera.setState({...e.state,mode:`perspective`}),this.camera.update(),a=this.camera);let o=this.renderable.values.uViewDirectionProjectionInverse.ref.value;A.isZero(e.headRotation)?(g.sub(this.dir,a.state.position,a.state.target),g.setMagnitude(this.dir,this.dir,.1),g.copy(this.position,this.dir),A.lookAt(o,this.position,this.target,a.state.up)):A.invert(o,e.headRotation),A.mul(o,a.projection,o),A.invert(o,o),z.update(this.renderable.values.uViewDirectionProjectionInverse,o);let s=this.renderable.values.uRotation.ref.value;j.fromEuler(s,Yt.create(L(t.rotation.x),L(t.rotation.y),L(t.rotation.z)),`XYZ`),z.update(this.renderable.values.uRotation,s),z.updateIfChanged(this.renderable.values.uBlur,t.blur),z.updateIfChanged(this.renderable.values.uOpacity,t.opacity),z.updateIfChanged(this.renderable.values.uSaturation,t.saturation),z.updateIfChanged(this.renderable.values.uLightness,t.lightness),z.updateIfChanged(this.renderable.values.dVariant,`skybox`),this.renderable.update()}clearImage(){this.image!==void 0&&(this.image.texture.destroy(),this.assetManager.release(this.image.asset),this.image=void 0)}updateImage(e,t){if(!e.source.params)this.clearImage(),t?.(!1);else{if(!this.image||!this.image.props.source.params||!nr(e.source,this.image.props.source)){this.clearImage();let{texture:n,asset:r}=rr(this.webgl,this.assetManager,e.source,e=>{this.image&&(this.image.loaded=!e),t?.(!0)});this.image={texture:n,props:{...e},asset:r,loaded:!1},z.update(this.renderable.values.tImage,n),this.renderable.update()}else t?.(!1);this.image&&(z.updateIfChanged(this.renderable.values.uBlur,e.blur),z.updateIfChanged(this.renderable.values.uOpacity,e.opacity),z.updateIfChanged(this.renderable.values.uSaturation,e.saturation),z.updateIfChanged(this.renderable.values.uLightness,e.lightness),z.updateIfChanged(this.renderable.values.uViewportAdjusted,e.coverage===`viewport`),z.updateIfChanged(this.renderable.values.dVariant,`image`),this.renderable.update())}}updateImageScaling(){let e=this.renderable.values,[t,n]=e.uTexSize.ref.value,r=this.image?.texture.getWidth()||0,i=this.image?.texture.getHeight()||0,a=t/n;a<r/i?z.update(e.uImageScale,N.set(e.uImageScale.ref.value,r*n/i,n)):z.update(e.uImageScale,N.set(e.uImageScale.ref.value,t,i*t/r));let[o,s]=e.uImageScale.ref.value,c=o/s;c>a?z.update(e.uImageOffset,N.set(e.uImageOffset.ref.value,(1-a/c)/2,0)):z.update(e.uImageOffset,N.set(e.uImageOffset.ref.value,0,(1-c/a)/2))}updateGradient(e,t,n,r,i){z.update(this.renderable.values.uGradientColorA,x.toVec3Normalized(this.renderable.values.uGradientColorA.ref.value,e)),z.update(this.renderable.values.uGradientColorB,x.toVec3Normalized(this.renderable.values.uGradientColorB.ref.value,t)),z.updateIfChanged(this.renderable.values.uGradientRatio,n),z.updateIfChanged(this.renderable.values.uViewportAdjusted,i),z.updateIfChanged(this.renderable.values.dVariant,r),this.renderable.update()}update(e,t,n){if(t.variant.name===`off`){this.clearSkybox(),this.clearImage(),n?.(!1);return}t.variant.name===`skybox`?(this.clearImage(),this.updateSkybox(e,t.variant.params,n)):t.variant.name===`image`?(this.clearSkybox(),this.updateImage(t.variant.params,n)):t.variant.name===`horizontalGradient`?(this.clearSkybox(),this.clearImage(),this.updateGradient(t.variant.params.topColor,t.variant.params.bottomColor,t.variant.params.ratio,t.variant.name,t.variant.params.coverage===`viewport`),n?.(!1)):t.variant.name===`radialGradient`&&(this.clearSkybox(),this.clearImage(),this.updateGradient(t.variant.params.centerColor,t.variant.params.edgeColor,t.variant.params.ratio,t.variant.name,t.variant.params.coverage===`viewport`),n?.(!1));let{x:r,y:i,width:a,height:o}=e.viewport;z.update(this.renderable.values.uViewport,K.set(this.renderable.values.uViewport.ref.value,r,i,a,o))}_isEnabled(e){return!!(this.skybox&&this.skybox.loaded||this.image&&this.image.loaded||e.variant.name===`horizontalGradient`||e.variant.name===`radialGradient`)}isEnabled(e){return e.enabled&&this._isEnabled(e.background)}isReady(){return!!(this.skybox&&this.skybox.loaded||this.image&&this.image.loaded||this.renderable.values.dVariant.ref.value===`horizontalGradient`||this.renderable.values.dVariant.ref.value===`radialGradient`)}clear(e,t,n){let{gl:r,state:i}=this.webgl;this._isEnabled(e)?(t?i.clearColor(0,0,0,0):(x.toVec3Normalized(this.bgColor,n),i.clearColor(this.bgColor[0],this.bgColor[1],this.bgColor[2],1)),r.clear(r.COLOR_BUFFER_BIT),i.enable(r.BLEND),i.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA)):(x.toVec3Normalized(this.bgColor,n),i.clearColor(this.bgColor[0],this.bgColor[1],this.bgColor[2],1),r.clear(r.COLOR_BUFFER_BIT))}render(e){this._isEnabled(e)&&this.isReady()&&(this.renderable.values.dVariant.ref.value===`image`&&this.updateImageScaling(),o&&this.webgl.timer.mark(`BackgroundPass.render`),this.renderable.render(),o&&this.webgl.timer.markEnd(`BackgroundPass.render`))}dispose(){this.clearSkybox(),this.clearImage()}},fr=`background-skybox`,pr=`background-image`,mr={drawCount:Nt(`number`),instanceCount:Nt(`number`),aPosition:et(`float32`,2,0),tSkybox:X(`texture`,`rgba`,`ubyte`,`linear`),tImage:X(`texture`,`rgba`,`ubyte`,`linear`),uImageScale:Z(`v2`),uImageOffset:Z(`v2`),uTexSize:Z(`v2`),uViewport:Z(`v4`),uViewportAdjusted:Z(`b`),uViewDirectionProjectionInverse:Z(`m4`),uGradientColorA:Z(`v3`),uGradientColorB:Z(`v3`),uGradientRatio:Z(`f`),uBlur:Z(`f`),uOpacity:Z(`f`),uSaturation:Z(`f`),uLightness:Z(`f`),uRotation:Z(`m3`),dVariant:Y(`string`,[`skybox`,`image`,`verticalGradient`,`horizontalGradient`,`radialGradient`])},hr=J(`background`,Jn,Kn,{shaderTextureLod:`optional`})})))()}var _r;function vr(){return(vr=e((()=>{_r=`
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
`})))()}function yr(e,t){let n=t.getWidth(),r=t.getHeight(),i={...ft,tColor:z.create(t),uTexSizeInv:z.create(N.create(1/n,1/r)),uSharpness:z.create(.5),dDenoise:z.create(!0)},a={...Sr},o=st(e,`triangles`,Cr,a,i);return _t(o,i)}var br,xr,Sr,Cr;function wr(){return(wr=e((()=>{ct(),ht(),Ye(),mt(),ut(),W(),P(),R(),Ct(),i(),vr(),br={sharpness:V.Numeric(.5,{min:0,max:1,step:.05}),denoise:V.Boolean(!0)},xr=class{constructor(e,t){this.webgl=e,this.renderable=yr(e,t)}updateState(e){let{gl:t,state:n}=this.webgl;n.enable(t.SCISSOR_TEST),n.disable(t.BLEND),n.disable(t.DEPTH_TEST),n.depthMask(!1);let{x:r,y:i,width:a,height:o}=e;n.viewport(r,i,a,o),n.scissor(r,i,a,o),n.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT)}setSize(e,t){z.update(this.renderable.values.uTexSizeInv,N.set(this.renderable.values.uTexSizeInv.ref.value,1/e,1/t))}update(e,t){let{values:n}=this.renderable,{sharpness:r,denoise:i}=t,a=!1;n.tColor.ref.value!==e&&(z.update(this.renderable.values.tColor,e),a=!0),z.updateIfChanged(n.uSharpness,2-2*r**.25),n.dDenoise.ref.value!==i&&(a=!0),z.updateIfChanged(n.dDenoise,i),a&&this.renderable.update()}render(e,t){o&&this.webgl.timer.mark(`CasPass.render`),t?t.bind():this.webgl.bindDrawingBuffer(),this.updateState(e),this.renderable.render(),o&&this.webgl.timer.markEnd(`CasPass.render`)}},Sr={...jt,tColor:X(`texture`,`rgba`,`ubyte`,`linear`),uTexSizeInv:Z(`v2`),uSharpness:Z(`f`),dDenoise:Y(`boolean`)},Cr=J(`cas`,ot,_r)})))()}var Tr;function Er(){return(Er=e((()=>{Tr=`
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
`})))()}function Dr(e,t,n,r){let i=t.getWidth(),a=t.getHeight(),o={...ft,tDepthOpaque:z.create(n),tDepthTransparent:z.create(r),tColor:z.create(t),uTexSize:z.create(N.create(i,a)),uProjection:z.create(A.identity()),uInvProjection:z.create(A.identity()),uBounds:z.create(K()),uCenter:z.create(g()),uMode:z.create(0),dOrthographic:z.create(0),uNear:z.create(1),uFar:z.create(1e4),dBlurSize:z.create(5),uBlurSpread:z.create(300),uInFocus:z.create(20),uPPM:z.create(20)},s={...Ar},c=st(e,`triangles`,jr,s,o);return _t(c,o)}var Or,kr,Ar,jr;function Mr(){return(Mr=e((()=>{ct(),ht(),Ye(),mt(),ut(),at(),W(),P(),R(),Ct(),Er(),i(),Or={blurSize:V.Numeric(9,{min:1,max:32,step:1}),blurSpread:V.Numeric(1,{min:0,max:10,step:.1}),inFocus:V.Numeric(0,{min:-5e3,max:5e3,step:1},{description:`Distance from the scene center that will be in focus`}),PPM:V.Numeric(20,{min:0,max:5e3,step:.1},{description:`Size of the area that will be in focus`}),center:V.Select(`camera-target`,V.arrayToOptions([`scene-center`,`camera-target`])),mode:V.Select(`plane`,V.arrayToOptions([`plane`,`sphere`]))},kr=class{static isEnabled(e){return e.enabled&&e.dof.name!==`off`}constructor(e,t,n){this.webgl=e,this.target=e.createRenderTarget(t,n,`none`);let r=St();this.renderable=Dr(e,r,r,r)}getByteCount(){return this.target.getByteCount()}updateState(e){let{gl:t,state:n}=this.webgl;n.enable(t.SCISSOR_TEST),n.disable(t.BLEND),n.disable(t.DEPTH_TEST),n.depthMask(!1);let{x:r,y:i,width:a,height:o}=e;n.viewport(r,i,a,o),n.scissor(r,i,a,o),n.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT)}setSize(e,t){let n=this.target.texture.getWidth(),r=this.target.texture.getHeight();(e!==n||t!==r)&&(this.target.setSize(e,t),z.update(this.renderable.values.uTexSize,N.set(this.renderable.values.uTexSize.ref.value,e,t)))}update(e,t,n,r,i,a){let o=!1;this.renderable.values.tColor.ref.value!==t&&(z.update(this.renderable.values.tColor,t),o=!0),this.renderable.values.tDepthOpaque.ref.value!==n&&(z.update(this.renderable.values.tDepthOpaque,n),o=!0),this.renderable.values.tDepthTransparent.ref.value!==r&&(z.update(this.renderable.values.tDepthTransparent,r),o=!0);let s=+(e.state.mode===`orthographic`),c=this.renderable.values.uInvProjection.ref.value;A.invert(c,e.projection);let[l,u]=this.renderable.values.uTexSize.ref.value,d=e.viewport;z.update(this.renderable.values.uProjection,e.projection),z.update(this.renderable.values.uInvProjection,c),z.update(this.renderable.values.uMode,+(i.mode===`sphere`)),K.set(this.renderable.values.uBounds.ref.value,d.x/l,d.y/u,(d.x+d.width)/l,(d.y+d.height)/u),z.update(this.renderable.values.uBounds,this.renderable.values.uBounds.ref.value),z.updateIfChanged(this.renderable.values.uNear,e.near),z.updateIfChanged(this.renderable.values.uFar,e.far),z.updateIfChanged(this.renderable.values.dOrthographic,s);let f=Math.round(i.blurSize*this.webgl.pixelRatio);this.renderable.values.dBlurSize.ref.value!==f&&(z.update(this.renderable.values.dBlurSize,f),o=!0);let p=i.center===`scene-center`?a.center:e.state.target,m=g.distance(e.state.position,p)+i.inFocus;z.updateIfChanged(this.renderable.values.uInFocus,m*e.scale);let h=this.renderable.values.uCenter.ref.value;g.transformMat4(h,p,e.view),z.update(this.renderable.values.uCenter,h),z.updateIfChanged(this.renderable.values.uBlurSpread,i.blurSpread),z.updateIfChanged(this.renderable.values.uPPM,i.PPM*e.scale),o&&this.renderable.update()}render(e,t){o&&this.webgl.timer.mark(`DofPass.render`),t?t.bind():this.webgl.bindDrawingBuffer(),this.updateState(e),this.renderable.render(),o&&this.webgl.timer.markEnd(`DofPass.render`)}},Ar={...jt,tDepthOpaque:X(`texture`,`rgba`,`ubyte`,`nearest`),tDepthTransparent:X(`texture`,`rgba`,`ubyte`,`nearest`),tColor:X(`texture`,`rgba`,`ubyte`,`nearest`),uTexSize:Z(`v2`),uProjection:Z(`m4`),uInvProjection:Z(`m4`),uBounds:Z(`v4`),uCenter:Z(`v3`),uMode:Z(`i`),dOrthographic:Y(`number`),uNear:Z(`f`),uFar:Z(`f`),dBlurSize:Y(`number`),uBlurSpread:Z(`f`),uInFocus:Z(`f`),uPPM:Z(`f`)},jr=J(`dof`,ot,Tr)})))()}var Nr;function Pr(){return(Pr=e((()=>{Nr=`
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
`})))()}var Fr;function Ir(){return(Ir=e((()=>{Fr=`
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
`})))()}var Lr;function Rr(){return(Rr=e((()=>{Lr=`
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
`})))()}function zr(e,t,n,r,i,a){let o=t.getWidth(),s=t.getHeight(),c={...ft,tColorOpaque:z.create(t),tColorTransparent:z.create(n),tEmissive:z.create(r),tDepthOpaque:z.create(i),tDepthTransparent:z.create(a),uTexSizeInv:z.create(N.create(1/o,1/s)),uDefaultColor:z.create(g()),uDefaultOpacity:z.create(0),uLuminosityThreshold:z.create(0),uSmoothWidth:z.create(1),uNear:z.create(1),uFar:z.create(1e4),uIsOrtho:z.create(0),uFogNear:z.create(1e4),uFogFar:z.create(1e4),uOpaqueFogged:z.create(!0),dMode:z.create(`emissive`)},l={...Kr},u=st(e,`triangles`,qr,l,c);return _t(u,c)}function Br(e){let t=[];for(let n=0;n<e;++n)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return t}function Vr(e,t){let n=t.getWidth(),r=t.getHeight(),i={...ft,tInput:z.create(t),uTexSizeInv:z.create(N.create(1/n,1/r)),uDirection:z.create(N()),uGaussianCoefficients:z.create([]),dKernelRadius:z.create(Yr[0])},a={...Qr},o=st(e,`triangles`,$r,a,i);return _t(o,i)}function Hr(e,t,n,r,i,a,o,s){let c={...ft,uTexSizeInv:z.create(N.create(1/t,1/n)),tBlur1:z.create(r),tBlur2:z.create(i),tBlur3:z.create(a),tBlur4:z.create(o),tBlur5:z.create(s),uBloomStrength:z.create(1),uBloomRadius:z.create(0),uBloomFactors:z.create([1,.8,.6,.4,.2]),uBloomTints:z.create(Array(15).fill(1))},l={...ei},u=st(e,`triangles`,ti,l,c);return _t(u,c)}var Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti;function ni(){return(ni=e((()=>{ct(),ht(),Ye(),mt(),ut(),at(),W(),P(),R(),Ct(),i(),Pr(),Ir(),Rr(),Ur=5,Wr={strength:V.Numeric(1,{min:0,max:3,step:.1}),radius:V.Numeric(0,{min:0,max:1,step:.01}),threshold:V.Numeric(0,{min:0,max:1,step:.01},{description:`Luminosity threshold`,hideIf:e=>e.mode===`emissive`}),mode:V.Select(`emissive`,[[`luminosity`,`Luminosity`],[`emissive`,`Emissive`]]),transparency:V.Boolean(!0,{description:`Include transparent objects in emissive bloom`,hideIf:e=>e.mode!==`emissive`})},Gr=class{static isEnabled(e){return e.enabled&&e.bloom.name===`on`}constructor(e,t,n){this.webgl=e,this.horizontalBlurTargets=[],this.verticalBlurTargets=[],this.emissiveTarget=e.createRenderTarget(t,n,`depth-stencil`,`uint8`,`linear`),this.luminosityTarget=e.createRenderTarget(t,n,`none`,`uint8`,`linear`),this.compositeTarget=e.createRenderTarget(t,n,`none`,`uint8`,`linear`);let r=Math.round(t/2),i=Math.round(n/2);for(let t=0;t<Ur;++t)this.horizontalBlurTargets[t]=e.createRenderTarget(r,i,`none`,`uint8`,`linear`),this.verticalBlurTargets[t]=e.createRenderTarget(r,i,`none`,`uint8`,`linear`),r=Math.round(r/2),i=Math.round(i/2);let a=St();this.luminosityRenderable=zr(e,a,a,a,a,a),this.blurRenderable=Vr(e,a),this.compositeRenderable=Hr(e,t,n,this.verticalBlurTargets[0].texture,this.verticalBlurTargets[1].texture,this.verticalBlurTargets[2].texture,this.verticalBlurTargets[3].texture,this.verticalBlurTargets[4].texture)}getByteCount(){return this.emissiveTarget.getByteCount()+this.luminosityTarget.getByteCount()+this.compositeTarget.getByteCount()+this.horizontalBlurTargets.reduce((e,t)=>e+t.getByteCount(),0)+this.verticalBlurTargets.reduce((e,t)=>e+t.getByteCount(),0)}setSize(e,t){let n=this.luminosityTarget.getWidth(),r=this.luminosityTarget.getHeight();if(e!==n||t!==r){this.emissiveTarget.setSize(e,t),this.luminosityTarget.setSize(e,t),this.compositeTarget.setSize(e,t);let n=Math.round(e/2),r=Math.round(t/2);for(let e=0;e<Ur;++e)this.horizontalBlurTargets[e].setSize(n,r),this.verticalBlurTargets[e].setSize(n,r),n=Math.round(n/2),r=Math.round(r/2);z.update(this.luminosityRenderable.values.uTexSizeInv,N.set(this.luminosityRenderable.values.uTexSizeInv.ref.value,1/e,1/t)),z.update(this.compositeRenderable.values.uTexSizeInv,N.set(this.compositeRenderable.values.uTexSizeInv.ref.value,1/e,1/t))}}update(e,t,n,r,i,a,o,s){let c=!1;this.luminosityRenderable.values.tColorOpaque.ref.value!==e&&(z.update(this.luminosityRenderable.values.tColorOpaque,e),c=!0),this.luminosityRenderable.values.tColorTransparent.ref.value!==t&&(z.update(this.luminosityRenderable.values.tColorTransparent,t),c=!0),this.luminosityRenderable.values.tEmissive.ref.value!==n&&(z.update(this.luminosityRenderable.values.tEmissive,n),c=!0),this.luminosityRenderable.values.tDepthOpaque.ref.value!==r&&(z.update(this.luminosityRenderable.values.tDepthOpaque,r),c=!0),this.luminosityRenderable.values.tDepthTransparent.ref.value!==i&&(z.update(this.luminosityRenderable.values.tDepthTransparent,i),c=!0),this.luminosityRenderable.values.dMode.ref.value!==a.mode&&(z.update(this.luminosityRenderable.values.dMode,a.mode),c=!0),z.updateIfChanged(this.luminosityRenderable.values.uLuminosityThreshold,a.threshold),z.updateIfChanged(this.luminosityRenderable.values.uNear,o.near),z.updateIfChanged(this.luminosityRenderable.values.uFar,o.far),z.updateIfChanged(this.luminosityRenderable.values.uIsOrtho,+(o.state.mode===`orthographic`)),z.updateIfChanged(this.luminosityRenderable.values.uFogNear,o.fogNear),z.updateIfChanged(this.luminosityRenderable.values.uFogFar,o.fogFar),z.updateIfChanged(this.luminosityRenderable.values.uOpaqueFogged,s),c&&this.luminosityRenderable.update(),z.updateIfChanged(this.compositeRenderable.values.uBloomRadius,a.radius),z.updateIfChanged(this.compositeRenderable.values.uBloomStrength,a.strength)}render(e){o&&this.webgl.timer.mark(`BloomPass.render`);let{gl:t,state:n}=this.webgl,{x:r,y:i,width:a,height:s}=e;n.viewport(r,i,a,s),n.scissor(r,i,a,s),n.enable(t.SCISSOR_TEST),n.disable(t.BLEND),n.disable(t.DEPTH_TEST),n.depthMask(!1),this.luminosityTarget.bind(),this.luminosityRenderable.render();for(let e=0;e<Ur;++e){let t=this.horizontalBlurTargets[e].getWidth(),r=this.horizontalBlurTargets[e].getHeight();n.viewport(0,0,t,r),n.scissor(0,0,t,r),z.update(this.blurRenderable.values.dKernelRadius,Yr[e]),z.update(this.blurRenderable.values.uGaussianCoefficients,Jr(Yr[e])),z.update(this.blurRenderable.values.uTexSizeInv,N.set(this.blurRenderable.values.uTexSizeInv.ref.value,1/t,1/r)),this.horizontalBlurTargets[e].bind(),z.update(this.blurRenderable.values.tInput,e===0?this.luminosityTarget.texture:this.verticalBlurTargets[e-1].texture),z.update(this.blurRenderable.values.uDirection,Xr),this.blurRenderable.update(),this.blurRenderable.render(),this.verticalBlurTargets[e].bind(),z.update(this.blurRenderable.values.tInput,this.horizontalBlurTargets[e].texture),z.update(this.blurRenderable.values.uDirection,Zr),this.blurRenderable.update(),this.blurRenderable.render()}n.viewport(r,i,a,s),n.scissor(r,i,a,s),this.compositeTarget.bind(),this.compositeRenderable.update(),this.compositeRenderable.render(),o&&this.webgl.timer.markEnd(`BloomPass.render`)}},Kr={...jt,tColorOpaque:X(`texture`,`rgba`,`ubyte`,`linear`),tColorTransparent:X(`texture`,`rgba`,`ubyte`,`linear`),tEmissive:X(`texture`,`rgba`,`ubyte`,`linear`),tDepthOpaque:X(`texture`,`rgba`,`ubyte`,`nearest`),tDepthTransparent:X(`texture`,`rgba`,`ubyte`,`nearest`),uTexSizeInv:Z(`v2`),uDefaultColor:Z(`v3`),uDefaultOpacity:Z(`f`),uLuminosityThreshold:Z(`f`),uSmoothWidth:Z(`f`),uNear:Z(`f`),uFar:Z(`f`),uIsOrtho:Z(`f`),uFogNear:Z(`f`),uFogFar:Z(`f`),uOpaqueFogged:Z(`b`),dMode:Y(`string`,[`luminosity`,`emissive`])},qr=J(`Bloom Luminosity`,ot,Fr),Jr=Ae(Br),Yr=[3,5,7,9,11],Xr=N.create(1,0),Zr=N.create(0,1),Qr={...jt,tInput:X(`texture`,`rgba`,`ubyte`,`linear`),uTexSizeInv:Z(`v2`),uDirection:Z(`v2`),uGaussianCoefficients:Z(`f[]`),dKernelRadius:Y(`number`)},$r=J(`Bloom Blur`,ot,Lr),ei={...jt,tBlur1:X(`texture`,`rgba`,`ubyte`,`linear`),tBlur2:X(`texture`,`rgba`,`ubyte`,`linear`),tBlur3:X(`texture`,`rgba`,`ubyte`,`linear`),tBlur4:X(`texture`,`rgba`,`ubyte`,`linear`),tBlur5:X(`texture`,`rgba`,`ubyte`,`linear`),uTexSizeInv:Z(`v2`),uBloomStrength:Z(`f`),uBloomRadius:Z(`f`),uBloomFactors:Z(`f[]`),uBloomTints:Z(`v3[]`)},ti=J(`Bloom Composite`,ot,Nr)})))()}var ri;function ii(){return(ii=e((()=>{ri=`
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
`})))()}function ai(e,t,n,r){let i=t.getWidth(),a=t.getHeight(),o={...ft,tDepthOpaque:z.create(t),tDepthTransparent:z.create(n),uTexSize:z.create(N.create(i,a)),dOrthographic:z.create(0),uNear:z.create(1),uFar:z.create(1e4),uInvProjection:z.create(A.identity()),uOutlineThreshold:z.create(.33),dTransparentOutline:z.create(r)},s={...ci},c=J(`outlines`,ot,ri),l=st(e,`triangles`,c,s,o);return _t(l,o)}var oi,si,ci;function li(){return(li=e((()=>{ct(),Ye(),mt(),P(),ut(),ht(),W(),R(),Ct(),ii(),i(),H(),oi={scale:V.Numeric(1,{min:1,max:5,step:1}),threshold:V.Numeric(.33,{min:.01,max:1,step:.01}),color:V.Color(x(0)),includeTransparent:V.Boolean(!0,{description:`Whether to show outline for transparent objects`})},si=class{static isEnabled(e){return e.enabled&&e.outline.name!==`off`}constructor(e,t,n,r,i){this.webgl=e,this.target=e.createRenderTarget(t,n,`none`),this.renderable=ai(e,i,r,!0)}getByteCount(){return this.target.getByteCount()}setSize(e,t){let[n,r]=this.renderable.values.uTexSize.ref.value;(e!==n||t!==r)&&(this.target.setSize(e,t),z.update(this.renderable.values.uTexSize,N.set(this.renderable.values.uTexSize.ref.value,e,t)))}update(e,t,n,r){let i=!1,a=+(e.state.mode===`orthographic`),o=this.renderable.values.uInvProjection.ref.value;A.invert(o,e.projection);let s=t.includeTransparent??!0,c=Math.max(1,Math.round(t.scale*this.webgl.pixelRatio))-1,l=50*t.threshold*this.webgl.pixelRatio;return z.updateIfChanged(this.renderable.values.uNear,e.near),z.updateIfChanged(this.renderable.values.uFar,e.far),z.update(this.renderable.values.uInvProjection,o),this.renderable.values.dTransparentOutline.ref.value!==s&&(i=!0,z.update(this.renderable.values.dTransparentOutline,s)),this.renderable.values.dOrthographic.ref.value!==a&&(i=!0,z.update(this.renderable.values.dOrthographic,a)),z.updateIfChanged(this.renderable.values.uOutlineThreshold,l),this.renderable.values.tDepthTransparent.ref.value!==n&&(i=!0,z.update(this.renderable.values.tDepthTransparent,n)),this.renderable.values.tDepthOpaque.ref.value!==r&&(i=!0,z.update(this.renderable.values.tDepthOpaque,r)),i&&this.renderable.update(),{transparentOutline:s,outlineScale:c}}render(){o&&this.webgl.timer.mark(`OutlinePass.render`),this.target.bind(),this.renderable.render(),o&&this.webgl.timer.markEnd(`OutlinePass.render`)}},ci={...jt,tDepthOpaque:X(`texture`,`rgba`,`ubyte`,`nearest`),tDepthTransparent:X(`texture`,`rgba`,`ubyte`,`nearest`),uTexSize:Z(`v2`),dOrthographic:Y(`number`),uNear:Z(`f`),uFar:Z(`f`),uInvProjection:Z(`m4`),uOutlineThreshold:Z(`f`),dTransparentOutline:Y(`boolean`)}})))()}function ui(e,t){let n=e.length,{direction:r,color:i}=t||{direction:Array(n*3).fill(0),color:Array(n*3).fill(0)};for(let t=0;t<n;++t){let n=e[t];g.directionFromSpherical(mi,L(n.inclination),L(n.azimuth),1),g.toArray(mi,r,t*3),g.scale(hi,x.toVec3Normalized(hi,n.color),n.intensity),g.toArray(hi,i,t*3)}return{count:n,direction:r,color:i}}function di(e,t){let n=Array(e.count*3);for(let r=0,i=e.count;r<i;++r)g.fromArray(mi,e.direction,r*3),g.transformDirection(mi,mi,t),g.toArray(mi,n,r*3);return n}var fi,pi,mi,hi,gi;function _i(){return(_i=e((()=>{cn(),W(),ht(),H(),P(),R(),I(),k(),i(),tt(),xt(),je(),Tt(),fi=function(e){return e[e.None=0]=`None`,e[e.Object=1]=`Object`,e[e.Instance=2]=`Instance`,e[e.Group=3]=`Group`,e}({}),pi={backgroundColor:V.Color(x(0),{description:`Background color of the 3D canvas`}),pickingAlphaThreshold:V.Numeric(.5,{min:0,max:1,step:.01},{description:`The minimum opacity value needed for an object to be pickable.`}),colorMarker:V.Boolean(!0,{description:`Tint marked and dim unmarked objects, by the marking pass when enabled, otherwise in the material color.`}),highlightColor:V.Color(x.fromNormalizedRgb(1,.4,.6)),selectColor:V.Color(x.fromNormalizedRgb(.2,1,.1)),dimColor:V.Color(x.fromNormalizedRgb(1,1,1)),highlightStrength:V.Numeric(.3,{min:0,max:1,step:.1}),selectStrength:V.Numeric(.3,{min:0,max:1,step:.1}),dimStrength:V.Numeric(0,{min:0,max:1,step:.1}),markerPriority:V.Select(1,[[1,`Highlight`],[2,`Select`]]),xrayEdgeFalloff:V.Numeric(1,{min:0,max:3,step:.1}),celSteps:V.Numeric(5,{min:2,max:16,step:1}),exposure:V.Numeric(1,{min:0,max:3,step:.01}),light:V.ObjectList({inclination:V.Numeric(150,{min:0,max:180,step:1}),azimuth:V.Numeric(320,{min:0,max:360,step:1}),color:V.Color(x.fromNormalizedRgb(1,1,1)),intensity:V.Numeric(.6,{min:0,max:5,step:.01})},e=>x.toHexString(e.color),{defaultValue:[{inclination:150,azimuth:320,color:x.fromNormalizedRgb(1,1,1),intensity:.6}]}),ambientColor:V.Color(x.fromNormalizedRgb(1,1,1)),ambientIntensity:V.Numeric(.4,{min:0,max:2,step:.01}),enableAnimation:V.Boolean(!0,{description:`Enable time-based animations.`})},mi=g(),hi=g(),(function(e){function t(e,t={}){let{gl:n,state:r,stats:i,extensions:a}=e,s=V.merge(pi,V.getDefaultValues(pi),t),c=ui(s.light),l=Ut(),u=N.create(n.drawingBufferWidth,n.drawingBufferHeight),d=x.toVec3Normalized(g(),s.backgroundColor),f=!1,p=null,m=e.resources.texture(`image-uint8`,`rgba`,`ubyte`,`nearest`);m.define(1,1),m.load({array:new Uint8Array([255,255,255,255]),width:1,height:1});let h=[[`tDepth`,m]],_=A(),v=A(),y=A(),b=A(),S=A(),C=A(),w=A(),T=A(),D=A(),O=A(),ee=A(),k=g(),j=g(),M=g(),ne=Dt(),re=N(),P=yt(),F=1,ie=G(),I=nt(),ae=g();g.scale(ae,x.toArrayNormalized(s.ambientColor,ae,0),s.ambientIntensity);let L={uDrawId:z.create(0),uModel:z.create(A.identity()),uView:z.create(v),uInvView:z.create(y),uModelView:z.create(b),uInvModelView:z.create(S),uInvProjection:z.create(C),uProjection:z.create(A()),uModelViewProjection:z.create(w),uInvModelViewProjection:z.create(T),uHasHeadRotation:z.create(!1),uInvHeadRotation:z.create(D),uHasEyeCamera:z.create(!1),uModelViewEye:z.create(O),uInvModelViewEye:z.create(ee),uIsAsymmetricProjection:z.create(!1),uIsOrtho:z.create(1),uViewOffset:z.create(re),uModelScale:z.create(1),uPixelRatio:z.create(e.pixelRatio),uViewport:z.create(Ut.toVec4(K(),l)),uDrawingBufferSize:z.create(u),uCameraPosition:z.create(j),uCameraDir:z.create(k),uCameraPlane:z.create(Dt.toArray(ne,K(),0)),uNear:z.create(1),uFar:z.create(1e4),uFog:z.create(!0),uFogNear:z.create(1),uFogFar:z.create(1e4),uFogColor:z.create(d),uRenderMask:z.create(0),uMarkingDepthTest:z.create(!1),uDepthBack:z.create(!1),uPickType:z.create(0),uMarkingType:z.create(0),uSolidInteriorPass:z.create(0),uSolidInteriorClip:z.create(-1),uTransparentBackground:z.create(!1),uLightDirection:z.create(c.direction),uLightColor:z.create(c.color),uAmbientColor:z.create(ae),uPickingAlphaThreshold:z.create(s.pickingAlphaThreshold),uHighlightColor:z.create(x.toVec3Normalized(g(),s.highlightColor)),uSelectColor:z.create(x.toVec3Normalized(g(),s.selectColor)),uDimColor:z.create(x.toVec3Normalized(g(),s.dimColor)),uHighlightStrength:z.create(s.highlightStrength),uSelectStrength:z.create(s.selectStrength),uDimStrength:z.create(s.dimStrength),uMarkerPriority:z.create(s.markerPriority),uMarkerAverage:z.create(0),uXrayEdgeFalloff:z.create(s.xrayEdgeFalloff),uCelSteps:z.create(s.celSteps),uExposure:z.create(s.exposure),uTime:z.create(0),uEnableAnimation:z.create(s.enableAnimation)},R=Object.entries(L),B=!0,se=(e,t)=>{if(e.state.disposed||!e.state.visible||!e.state.pickable&&t===`pick`||!e.values.drawCount.ref.value||(G.scaleNX(ie,e.values.boundingSphere.ref.value,F),!yt.intersectsSphere3D(P,ie)))return!1;let[n,r]=e.values.uLod.ref.value;if(n!==0||r!==0){let{center:e,radius:t}=ie,i=Dt.distanceToPoint(ne,e);if(i+t<n*F||i-t>r*F)return!1}return!(F===1&&p!==null&&p(ie))},ce=(t,i,a)=>{if(F===1){let n=t.values.instanceGrid.ref.value.cellSize>0,r=t.values.uInstanceCount.ref.value>1;n&&(r||t.values.lodLevels)?t.cull(ne,P,p,e.stats,I):t.uncull()}else if(t.values.lodLevels){let{center:e,radius:n}=ie,r=Dt.distanceToPoint(ne,e);t.cullSimple(r,n,F)}else t.uncull();let o=t.getProgram(i);if(r.currentProgramId!==o.id&&(B=!0,o.use()),B&&=(o.setUniforms(R),o.bindTextures(h,0),!1),t.values.dGeometryType.ref.value===`directVolume`){if(i!==`color`)return;r.disable(n.CULL_FACE),r.frontFace(n.CCW)}else a===1?(r.enable(n.CULL_FACE),t.values.dFlipSided?.ref.value?(r.frontFace(n.CW),r.cullFace(n.FRONT)):(r.frontFace(n.CCW),r.cullFace(n.BACK))):a===3?r.disable(n.CULL_FACE):a===4||a===5&&t.values.hasReflection.ref.value?(r.disable(n.CULL_FACE),r.frontFace(t.values.dFlipSided?.ref.value?n.CW:n.CCW)):a===2||a===5?(r.enable(n.CULL_FACE),t.values.dFlipSided?.ref.value?(r.frontFace(n.CW),r.cullFace(n.BACK)):(r.frontFace(n.CCW),r.cullFace(n.FRONT))):(t.values.uDoubleSided?t.values.uDoubleSided.ref.value||t.values.hasReflection.ref.value?r.disable(n.CULL_FACE):r.enable(n.CULL_FACE):r.disable(n.CULL_FACE),t.values.dFlipSided?.ref.value?(r.frontFace(n.CW),r.cullFace(n.FRONT)):(r.frontFace(n.CCW),r.cullFace(n.BACK)));t.render(i,h.length)},le=(e,t,n)=>{se(e,t)&&ce(e,t,n)},ue=!!a.fragDepth,de=!!n.getContextAttributes()?.stencil,fe=()=>ue&&(de||n.getParameter(n.FRAMEBUFFER_BINDING)!==null),pe=e=>{let t=e.values.dGeometryType.ref.value;return ue&&(t===`mesh`||t===`textureMesh`)&&!!e.values.dSolidInterior?.ref.value},me=(e,t,n,i)=>{z.updateIfChanged(L.uSolidInteriorPass,n),z.updateIfChanged(L.uSolidInteriorClip,i);let a=e.getProgram(t);r.currentProgramId===a.id&&!B&&(a.uniform(`uSolidInteriorPass`,n),a.uniform(`uSolidInteriorClip`,i))},he=(e,t,i)=>{n.clear(n.STENCIL_BUFFER_BIT),me(e,t,2,i),r.colorMask(!1,!1,!1,!1),r.depthMask(!1),r.disable(n.DEPTH_TEST),r.stencilFunc(n.ALWAYS,0,255),r.stencilOpSeparate(n.FRONT,n.KEEP,n.KEEP,n.INCR_WRAP),r.stencilOpSeparate(n.BACK,n.KEEP,n.KEEP,n.DECR_WRAP),ce(e,t,4)},ge=(e,t,i,a)=>{let o=i===`opaque`||i===`back`;me(e,t,1,a),r.stencilFunc(n.NOTEQUAL,0,255),i===`oit`?(r.enable(n.DEPTH_TEST),r.depthMask(!0),r.clearDepth(1),n.clear(n.DEPTH_BUFFER_BIT),r.depthFunc(n.LEQUAL),r.stencilOp(n.KEEP,n.KEEP,n.KEEP),ce(e,t,5),r.depthFunc(n.EQUAL),r.depthMask(!1)):(r.enable(n.DEPTH_TEST),r.depthMask(o)),r.colorMask(!0,!0,!0,!0),r.stencilOp(n.KEEP,n.KEEP,o?n.KEEP:n.ZERO),ce(e,t,5),i===`oit`&&r.disable(n.DEPTH_TEST)},_e=g(),ve=(e,t,n)=>{if(!se(e,t))return;let r=n===`back`,i=L.uNear.ref.value*1.0001;!r&&Math.abs(Dt.distanceToPoint(ne,ie.center)-i)<=ie.radius&&(he(e,t,-1),ge(e,t,n,-1));let a=e.getClipInfo();if(a&&a.capIndices.length>0){let{objects:i,planes:o,capIndices:s}=a;g.scale(_e,j,1/F);for(let a=0,c=s.length;a<c;++a){let c=s[a];if(i.type[c]===kt.Type.plane){let e=Dt.distanceToPoint(o[c],_e)*F;if(r?e>=-1e-4:e<=1e-4)continue}he(e,t,c),ge(e,t,n,c)}}me(e,t,0,-1)},ye=e=>{r.enable(n.STENCIL_TEST),r.stencilMask(255),r.clearStencil(0),e!==`oit`&&r.depthFunc(e===`back`?n.GEQUAL:n.LEQUAL)},be=e=>{r.disable(n.STENCIL_TEST),r.stencilOp(n.KEEP,n.KEEP,n.KEEP),r.depthFunc(e===`back`?n.GREATER:n.LESS),r.frontFace(n.CCW),r.cullFace(n.BACK)},xe=(t,n,r,i)=>{if(!ue)return;let a=!1;for(let s=0,c=t.length;s<c;++s){let c=t[s];if(pe(c)&&n(c)){if(!a){if(!fe())return;o&&e.timer.mark(`Renderer.renderSolidInteriorCaps`),ye(i),a=!0}ve(c,r,i)}}a&&(be(i),o&&e.timer.markEnd(`Renderer.renderSolidInteriorCaps`))},Se=(e,t,n)=>{I=n,z.update(L.uView,e.view),z.update(L.uInvView,A.invert(y,e.view)),z.update(L.uProjection,e.projection),z.update(L.uInvProjection,A.invert(C,e.projection)),z.updateIfChanged(L.uIsOrtho,+(e.state.mode===`orthographic`)),z.update(L.uViewOffset,e.viewOffset.enabled?N.set(re,e.viewOffset.offsetX*16,e.viewOffset.offsetY*16):N.set(re,0,0)),z.updateIfChanged(L.uModelScale,e.scale),z.update(L.uCameraPosition,A.getTranslation(j,y)),g.scale(M,e.state.target,e.scale),g.normalize(k,g.sub(k,M,j)),z.update(L.uCameraDir,k),z.updateIfChanged(L.uFar,e.far),z.updateIfChanged(L.uNear,e.near),z.updateIfChanged(L.uFog,e.state.fog>0),z.updateIfChanged(L.uFogFar,e.fogFar),z.updateIfChanged(L.uFogNear,e.fogNear),z.updateIfChanged(L.uTransparentBackground,f),yt.fromProjectionMatrix(P,e.projectionView),Dt.copy(ne,P[yt.PlaneIndex.Near]),ne.constant-=Dt.distanceToPoint(ne,j),z.update(L.uCameraPlane,Dt.toArray(ne,L.uCameraPlane.ref.value,0)),z.updateIfChanged(L.uMarkerAverage,t.markerAverage),A.isZero(e.headRotation)?(z.updateIfChanged(L.uHasHeadRotation,!1),z.updateIfChanged(L.uInvHeadRotation,A.id),z.update(L.uLightDirection,c.direction)):(z.updateIfChanged(L.uHasHeadRotation,!0),z.update(L.uInvHeadRotation,A.invert(D,e.headRotation)),z.update(L.uLightDirection,di(c,D))),z.update(L.uIsAsymmetricProjection,e.isAsymmetricProjection)},H=(e,t,i,a,o)=>{oe(h,`tDepth`,i||m),F=t.scale,z.update(L.uModel,A.scaleUniformly(_,e.view,F)),z.update(L.uModelView,A.mul(b,t.view,_)),z.update(L.uInvModelView,A.invert(S,b)),z.update(L.uModelViewProjection,A.mul(w,b,t.projection)),z.update(L.uInvModelViewProjection,A.invert(T,w)),z.updateIfChanged(L.uRenderMask,a),z.updateIfChanged(L.uMarkingDepthTest,o),A.isZero(t.viewEye)?(z.updateIfChanged(L.uHasEyeCamera,!1),z.updateIfChanged(L.uModelViewEye,A.id),z.updateIfChanged(L.uInvModelViewEye,A.id)):(z.updateIfChanged(L.uHasEyeCamera,!0),z.update(L.uModelViewEye,A.mul(O,t.viewEye,_)),z.update(L.uInvModelViewEye,A.invert(ee,O))),r.enable(n.SCISSOR_TEST),r.colorMask(!0,!0,!0,!0);let{x:s,y:c,width:u,height:d}=l;r.viewport(s,c,u,d),r.scissor(s,c,u,d),B=!0,r.currentRenderItemId=-1},U=function(e){let t=E(e.values.alpha.ref.value*e.state.alphaFactor,0,1),n=e.values.dXrayShaded?.ref.value===`on`||e.values.dXrayShaded?.ref.value===`inverted`;return t===1&&e.values.transparencyAverage.ref.value!==1&&e.values.dGeometryType.ref.value!==`directVolume`&&e.values.dPointStyle?.ref.value!==`fuzzy`&&!n||e.values.dTransparentBackfaces?.ref.value===`opaque`},Ce=function(e){let t=E(e.values.alpha.ref.value*e.state.alphaFactor,0,1),n=e.values.dXrayShaded?.ref.value===`on`||e.values.dXrayShaded?.ref.value===`inverted`;return t!==0&&(t<1||e.values.transparencyAverage.ref.value>0||e.values.dGeometryType.ref.value===`directVolume`||e.values.dPointStyle?.ref.value===`fuzzy`||e.values.dGeometryType.ref.value===`text`||e.values.dGeometryType.ref.value===`image`||n)},we=function(e){return!e.state.colorOnly},Te=function(e){return E(e.values.alpha.ref.value*e.state.alphaFactor,0,1)!==0&&e.values.transparencyAverage.ref.value!==1&&e.values.markerAverage.ref.value!==1},Ee=function(e){return e.values.markerAverage.ref.value>0},De=function(e){return e.values.emissiveAverage.ref.value+e.values.uEmissive.ref.value>0},W=function(e){return Ce(e)&&e.values.dTransparentBackfaces?.ref.value!==`off`},Oe=(t,i,a,s)=>{o&&e.timer.mark(`Renderer.renderPick`),r.disable(n.BLEND),r.enable(n.DEPTH_TEST),r.depthMask(!0),H(t,i,null,0,!1),z.updateIfChanged(L.uPickType,s);let{renderables:c}=t;for(let e=0,t=c.length;e<t;++e){let t=c[e];we(t)&&le(t,a,0)}xe(c,we,a,`opaque`),o&&e.timer.markEnd(`Renderer.renderPick`)},ke=(t,i)=>{o&&e.timer.mark(`Renderer.renderDepth`),r.disable(n.BLEND),r.enable(n.DEPTH_TEST),r.depthMask(!0),H(t,i,null,0,!1);let{renderables:a}=t;for(let e=0,t=a.length;e<t;++e)le(a[e],`depth`,0);xe(a,()=>!0,`depth`,`opaque`),o&&e.timer.markEnd(`Renderer.renderDepth`)},Ae=(t,i)=>{o&&e.timer.mark(`Renderer.renderDepthOpaque`),r.disable(n.BLEND),r.enable(n.DEPTH_TEST),r.depthMask(!0),H(t,i,null,1,!1);let{renderables:a}=t;for(let e=0,t=a.length;e<t;++e){let t=a[e];U(t)&&le(t,`depth`,0)}xe(a,U,`depth`,`opaque`),o&&e.timer.markEnd(`Renderer.renderDepthOpaque`)},je=(t,i)=>{o&&e.timer.mark(`Renderer.renderDepthOpaqueBack`),r.disable(n.BLEND),r.enable(n.DEPTH_TEST),r.depthMask(!0),r.depthFunc(n.GREATER),H(t,i,null,1,!1),z.updateIfChanged(L.uDepthBack,!0);let{renderables:a}=t;for(let e=0,t=a.length;e<t;++e){let t=a[e];U(t)&&le(t,`depth`,3)}xe(a,U,`depth`,`back`),z.updateIfChanged(L.uDepthBack,!1),r.depthFunc(n.LESS),o&&e.timer.markEnd(`Renderer.renderDepthOpaqueBack`)},q=(t,i,a)=>{o&&e.timer.mark(`Renderer.renderDepthTransparent`),r.disable(n.BLEND),r.enable(n.DEPTH_TEST),r.depthMask(!0),H(t,i,a,2,!1);let{renderables:s}=t;for(let e=0,t=s.length;e<t;++e){let t=s[e];Ce(t)&&le(t,`depth`,0)}xe(s,W,`depth`,`opaque`),o&&e.timer.markEnd(`Renderer.renderDepthTransparent`)},Me=(t,i)=>{o&&e.timer.mark(`Renderer.renderMarkingDepth`),r.disable(n.BLEND),r.enable(n.DEPTH_TEST),r.depthMask(!0),H(t,i,null,0,!1),z.updateIfChanged(L.uMarkingType,1);let{renderables:a}=t;for(let e=0,t=a.length;e<t;++e){let t=a[e];Te(t)&&le(t,`marking`,0)}xe(a,Te,`marking`,`opaque`),o&&e.timer.markEnd(`Renderer.renderMarkingDepth`)},Ne=(t,i,a)=>{o&&e.timer.mark(`Renderer.renderMarkingMask`),r.disable(n.BLEND),r.enable(n.DEPTH_TEST),r.depthMask(!0),H(t,i,a,0,!!a),z.updateIfChanged(L.uMarkingType,2);let{renderables:s}=t;for(let e=0,t=s.length;e<t;++e){let t=s[e];Ee(t)&&le(t,`marking`,0)}xe(s,Ee,`marking`,`opaque`),o&&e.timer.markEnd(`Renderer.renderMarkingMask`)},Pe=(t,i,a,s)=>{o&&e.timer.mark(`Renderer.renderEmissiveOpaque`),r.disable(n.BLEND),r.enable(n.DEPTH_TEST),s?(r.depthMask(!1),r.depthFunc(n.LEQUAL)):r.depthMask(!0),H(t,i,a,1,!1);let{renderables:c}=t;for(let e=0,t=c.length;e<t;++e){let t=c[e];U(t)&&(!s||De(t))&&le(t,`emissive`,0)}xe(c,e=>U(e)&&(!s||De(e)),`emissive`,s?`blended`:`opaque`),s&&(r.depthFunc(n.LESS),r.depthMask(!0)),o&&e.timer.markEnd(`Renderer.renderEmissiveOpaque`)},Fe=(t,i,s)=>{o&&e.timer.mark(`Renderer.renderEmissiveTransparent`);let c=a.blendMinMax;r.enable(n.BLEND),r.blendFunc(n.ONE,n.ONE),c&&r.blendEquation(c.MAX),r.enable(n.DEPTH_TEST),r.depthMask(!1),H(t,i,s,2,!1);let{renderables:l}=t;for(let e=0,t=l.length;e<t;++e){let t=l[e];Ce(t)&&t.values.dGeometryType.ref.value!==`directVolume`&&De(t)&&le(t,`emissive`,0)}xe(l,e=>W(e)&&De(e),`emissive`,`blended`),c&&r.blendEquation(n.FUNC_ADD),o&&e.timer.markEnd(`Renderer.renderEmissiveTransparent`)},Ie=(t,i)=>{o&&e.timer.mark(`Renderer.renderTracing`),r.disable(n.BLEND),r.enable(n.DEPTH_TEST),r.depthMask(!0),H(t,i,null,1,!1);let{renderables:a}=t;for(let e=0,t=a.length;e<t;++e){let t=a[e];U(t)&&le(t,`tracing`,0)}xe(a,U,`tracing`,`opaque`),o&&e.timer.markEnd(`Renderer.renderTracing`)},Le=(e,t)=>{e.hasOpaque&&Re(e,t),e.opacityAverage<1&&ze(e,t)},Re=(t,i)=>{o&&e.timer.mark(`Renderer.renderOpaque`),r.disable(n.BLEND),r.enable(n.DEPTH_TEST),r.depthMask(!0),H(t,i,null,1,!1);let{renderables:a}=t;for(let e=0,t=a.length;e<t;++e){let t=a[e];U(t)&&le(t,`color`,0)}xe(a,U,`color`,`opaque`),o&&e.timer.markEnd(`Renderer.renderOpaque`)},ze=(t,i)=>{o&&e.timer.mark(`Renderer.renderBlendedTransparent`),f?r.blendFunc(n.ONE,n.ONE_MINUS_SRC_ALPHA):r.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA),r.enable(n.BLEND),r.enable(n.DEPTH_TEST),r.depthMask(!1),H(t,i,null,2,!1);let a=fe(),{renderables:s}=t;for(let e=0,t=s.length;e<t;++e){let t=s[e];Ce(t)&&(t.values.uDoubleSided?.ref.value?(t.values.dTransparentBackfaces?.ref.value!==`opaque`&&le(t,`color`,2),le(t,`color`,1)):le(t,`color`,0),a&&pe(t)&&W(t)&&(ye(`blended`),ve(t,`color`,`blended`),be(`blended`)))}o&&e.timer.markEnd(`Renderer.renderBlendedTransparent`)};return{clear:(e,t,i)=>{r.enable(n.SCISSOR_TEST),r.enable(n.DEPTH_TEST),r.colorMask(!0,!0,!0,!0),r.depthMask(!0),i||f&&!t?r.clearColor(0,0,0,0):e?r.clearColor(d[0],d[1],d[2],1):r.clearColor(1,1,1,1),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT)},clearDepth:(e=!1)=>{r.enable(n.SCISSOR_TEST),r.enable(n.DEPTH_TEST),r.depthMask(!0),e?(r.colorMask(!0,!0,!0,!0),r.clearColor(1,1,1,1),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT)):n.clear(n.DEPTH_BUFFER_BIT)},update:Se,renderPick:Oe,renderDepth:ke,renderDepthOpaque:Ae,renderDepthOpaqueBack:je,renderDepthTransparent:q,renderMarkingDepth:Me,renderMarkingMask:Ne,renderEmissiveOpaque:Pe,renderEmissiveTransparent:Fe,renderTracing:Ie,renderBlended:Le,renderOpaque:Re,renderBlendedTransparent:ze,renderVolume:(t,i,a)=>{o&&e.timer.mark(`Renderer.renderVolume`),r.blendFunc(n.ONE,n.ONE_MINUS_SRC_ALPHA),r.enable(n.BLEND),r.disable(n.DEPTH_TEST),r.depthMask(!1),H(t,i,a,2,!1);let{renderables:s}=t;for(let e=0,t=s.length;e<t;++e){let t=s[e];t.values.dGeometryType.ref.value===`directVolume`&&le(t,`color`,0)}o&&e.timer.markEnd(`Renderer.renderVolume`)},renderWboitTransparent:(t,n,r)=>{o&&e.timer.mark(`Renderer.renderWboitTransparent`),H(t,n,r,2,!1);let{renderables:i}=t;for(let e=0,t=i.length;e<t;++e){let t=i[e];Ce(t)&&le(t,`color`,0)}xe(i,W,`color`,`oit`),o&&e.timer.markEnd(`Renderer.renderWboitTransparent`)},renderDpoitTransparent:(t,i,a,s)=>{o&&e.timer.mark(`Renderer.renderDpoitTransparent`),r.enable(n.BLEND),oe(h,`tDpoitDepth`,s.depth),oe(h,`tDpoitFrontColor`,s.frontColor),oe(h,`tDpoitBackColor`,s.backColor),H(t,i,a,2,!1);let{renderables:c}=t;for(let e=0,t=c.length;e<t;++e){let t=c[e];Ce(t)&&le(t,`color`,0)}xe(c,W,`color`,`oit`),o&&e.timer.markEnd(`Renderer.renderDpoitTransparent`)},setTime:e=>{z.updateIfChanged(L.uTime,e)},setProps:e=>{e.backgroundColor!==void 0&&e.backgroundColor!==s.backgroundColor&&(s.backgroundColor=e.backgroundColor,x.toVec3Normalized(d,s.backgroundColor),z.update(L.uFogColor,g.copy(L.uFogColor.ref.value,d))),e.pickingAlphaThreshold!==void 0&&e.pickingAlphaThreshold!==s.pickingAlphaThreshold&&(s.pickingAlphaThreshold=e.pickingAlphaThreshold,z.update(L.uPickingAlphaThreshold,s.pickingAlphaThreshold)),e.colorMarker!==void 0&&e.colorMarker!==s.colorMarker&&(s.colorMarker=e.colorMarker),e.highlightColor!==void 0&&e.highlightColor!==s.highlightColor&&(s.highlightColor=e.highlightColor,z.update(L.uHighlightColor,x.toVec3Normalized(L.uHighlightColor.ref.value,s.highlightColor))),e.selectColor!==void 0&&e.selectColor!==s.selectColor&&(s.selectColor=e.selectColor,z.update(L.uSelectColor,x.toVec3Normalized(L.uSelectColor.ref.value,s.selectColor))),e.dimColor!==void 0&&e.dimColor!==s.dimColor&&(s.dimColor=e.dimColor,z.update(L.uDimColor,x.toVec3Normalized(L.uDimColor.ref.value,s.dimColor))),e.highlightStrength!==void 0&&e.highlightStrength!==s.highlightStrength&&(s.highlightStrength=e.highlightStrength,z.update(L.uHighlightStrength,s.highlightStrength)),e.selectStrength!==void 0&&e.selectStrength!==s.selectStrength&&(s.selectStrength=e.selectStrength,z.update(L.uSelectStrength,s.selectStrength)),e.dimStrength!==void 0&&e.dimStrength!==s.dimStrength&&(s.dimStrength=e.dimStrength,z.update(L.uDimStrength,s.dimStrength)),e.markerPriority!==void 0&&e.markerPriority!==s.markerPriority&&(s.markerPriority=e.markerPriority,z.update(L.uMarkerPriority,s.markerPriority)),e.xrayEdgeFalloff!==void 0&&e.xrayEdgeFalloff!==s.xrayEdgeFalloff&&(s.xrayEdgeFalloff=e.xrayEdgeFalloff,z.update(L.uXrayEdgeFalloff,s.xrayEdgeFalloff)),e.celSteps!==void 0&&e.celSteps!==s.celSteps&&(s.celSteps=e.celSteps,z.update(L.uCelSteps,s.celSteps)),e.exposure!==void 0&&e.exposure!==s.exposure&&(s.exposure=e.exposure,z.update(L.uExposure,s.exposure)),e.light!==void 0&&!te(e.light,s.light)&&(s.light=e.light,Object.assign(c,ui(e.light,c)),z.update(L.uLightDirection,c.direction),z.update(L.uLightColor,c.color)),e.ambientColor!==void 0&&e.ambientColor!==s.ambientColor&&(s.ambientColor=e.ambientColor,g.scale(ae,x.toArrayNormalized(s.ambientColor,ae,0),s.ambientIntensity),z.update(L.uAmbientColor,ae)),e.ambientIntensity!==void 0&&e.ambientIntensity!==s.ambientIntensity&&(s.ambientIntensity=e.ambientIntensity,g.scale(ae,x.toArrayNormalized(s.ambientColor,ae,0),s.ambientIntensity),z.update(L.uAmbientColor,ae)),e.enableAnimation!==void 0&&e.enableAnimation!==s.enableAnimation&&(s.enableAnimation=e.enableAnimation,z.update(L.uEnableAnimation,s.enableAnimation))},setViewport:(e,t,n,i)=>{r.viewport(e,t,n,i),r.scissor(e,t,n,i),(e!==l.x||t!==l.y||n!==l.width||i!==l.height)&&(Ut.set(l,e,t,n,i),z.update(L.uViewport,K.set(L.uViewport.ref.value,e,t,n,i)))},setTransparentBackground:e=>{f=e},setDrawingBufferSize:(e,t)=>{(e!==u[0]||t!==u[1])&&z.update(L.uDrawingBufferSize,N.set(u,e,t))},setPixelRatio:e=>{z.update(L.uPixelRatio,e)},setOcclusionTest:e=>{p=e},props:s,get stats(){return{programCount:e.stats.resourceCounts.program,shaderCount:e.stats.resourceCounts.shader,attributeCount:e.stats.resourceCounts.attribute,elementsCount:e.stats.resourceCounts.elements,framebufferCount:e.stats.resourceCounts.framebuffer,renderbufferCount:e.stats.resourceCounts.renderbuffer,textureCount:e.stats.resourceCounts.texture,vertexArrayCount:e.stats.resourceCounts.vertexArray,drawCount:i.drawCount,instanceCount:i.instanceCount,instancedDrawCount:i.instancedDrawCount}},get light(){return c},get ambientColor(){return L.uAmbientColor.ref.value},dispose:()=>{}}}e.create=t})(gi||={})})))()}var vi;function yi(){return(yi=e((()=>{vi=`
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
`})))()}function bi(e,t){let n=t.getWidth(),r=t.getHeight(),i={...ft,tDepth:z.create(t),uTexSize:z.create(N.create(n,r)),uProjection:z.create(A.identity()),uInvProjection:z.create(A.identity()),uBounds:z.create(K()),dOrthographic:z.create(0),uNear:z.create(1),uFar:z.create(1e4),dSteps:z.create(1),uMaxDistance:z.create(3),uTolerance:z.create(1),uLightDirection:z.create([]),uLightColor:z.create([]),dLightCount:z.create(0),uAmbientColor:z.create(g())},a={...Ci},o=J(`shadows`,ot,vi),s=st(e,`triangles`,o,a,i);return _t(s,i)}var xi,Si,Ci;function wi(){return(wi=e((()=>{ct(),Ye(),mt(),P(),ut(),ht(),W(),R(),Ct(),i(),_i(),yi(),xi={steps:V.Numeric(1,{min:1,max:64,step:1}),maxDistance:V.Numeric(3,{min:0,max:256,step:1}),tolerance:V.Numeric(1,{min:0,max:10,step:.1})},Si=class{static isEnabled(e){return e.enabled&&e.shadow.name!==`off`}constructor(e,t,n,r){this.webgl=e,this.invProjection=A.identity(),this.invHeadRotation=A.identity(),this.target=e.createRenderTarget(t,n,`none`),this.renderable=bi(e,r)}getByteCount(){return this.target.getByteCount()}setSize(e,t){let[n,r]=this.renderable.values.uTexSize.ref.value;(e!==n||t!==r)&&(this.target.setSize(e,t),z.update(this.renderable.values.uTexSize,N.set(this.renderable.values.uTexSize.ref.value,e,t)))}update(e,t,n,r){let i=!1,a=+(e.state.mode===`orthographic`),[o,s]=this.renderable.values.uTexSize.ref.value,c=e.viewport;z.update(this.renderable.values.uProjection,e.projection),z.update(this.renderable.values.uInvProjection,A.invert(this.invProjection,e.projection)),K.set(this.renderable.values.uBounds.ref.value,c.x/o,c.y/s,(c.x+c.width)/o,(c.y+c.height)/s),z.update(this.renderable.values.uBounds,this.renderable.values.uBounds.ref.value),z.updateIfChanged(this.renderable.values.uNear,e.near),z.updateIfChanged(this.renderable.values.uFar,e.far),this.renderable.values.dOrthographic.ref.value!==a&&(z.update(this.renderable.values.dOrthographic,a),i=!0),z.updateIfChanged(this.renderable.values.uMaxDistance,r.maxDistance*e.scale),z.updateIfChanged(this.renderable.values.uTolerance,r.tolerance*e.scale),this.renderable.values.dSteps.ref.value!==r.steps&&(z.update(this.renderable.values.dSteps,r.steps),i=!0),A.isZero(e.headRotation)?z.update(this.renderable.values.uLightDirection,t.direction):z.update(this.renderable.values.uLightDirection,di(t,A.invert(this.invHeadRotation,e.headRotation))),z.update(this.renderable.values.uLightColor,t.color),this.renderable.values.dLightCount.ref.value!==t.count&&(z.update(this.renderable.values.dLightCount,t.count),i=!0),z.update(this.renderable.values.uAmbientColor,n),i&&this.renderable.update()}render(){o&&this.webgl.timer.mark(`ShadowPass.render`),this.target.bind(),this.renderable.render(),o&&this.webgl.timer.markEnd(`ShadowPass.render`)}},Ci={...jt,tDepth:X(`texture`,`rgba`,`ubyte`,`nearest`),uTexSize:Z(`v2`),uProjection:Z(`m4`),uInvProjection:Z(`m4`),uBounds:Z(`v4`),dOrthographic:Y(`number`),uNear:Z(`f`),uFar:Z(`f`),dSteps:Y(`number`),uMaxDistance:Z(`f`),uTolerance:Z(`f`),uLightDirection:Z(`v3[]`),uLightColor:Z(`v3[]`),dLightCount:Y(`number`),uAmbientColor:Z(`v3`)}})))()}var Ti;function Ei(){return(Ei=e((()=>{Ti=`
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
`})))()}var Di;function Oi(){return(Oi=e((()=>{Di=`
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
`})))()}function ki(e,t,n){let r=e.length,{radius:i,bias:a}=n||{radius:Array(r*3).fill(0),bias:Array(r*3).fill(0)};e=e.slice().sort((e,t)=>e.radius-t.radius);for(let n=0;n<r;++n){let r=e[n];i[n]=2**r.radius*t,a[n]=r.bias}return{count:r,radius:i,bias:a}}function Ai(e,t,n,r,i,a,o){let s={...ft,tDepth:z.create(t),tDepthHalf:z.create(n),tDepthQuarter:z.create(r),dIllumination:z.create(!1),dIncludeTransparent:z.create(!0),uTransparencyFlag:z.create(0),tDepthTransparent:z.create(i),tDepthHalfTransparent:z.create(a),tDepthQuarterTransparent:z.create(o),uSamples:z.create(Ii(32)),dNSamples:z.create(32),uProjection:z.create(A.identity()),uInvProjection:z.create(A.identity()),uBounds:z.create(K()),uTexSize:z.create(N.create(e.gl.drawingBufferWidth,e.gl.drawingBufferHeight)),uRadius:z.create(32),uBias:z.create(.8),dMultiScale:z.create(!1),dLevels:z.create(3),uLevelRadius:z.create([4,32,256]),uLevelBias:z.create([.8,.8,.8]),uNearThreshold:z.create(10),uFarThreshold:z.create(1500)},c={...zi},l=J(`ssao`,ot,Ti),u=st(e,`triangles`,l,c,s);return _t(u,s)}function ji(e,t,n){let r={...ft,tSsaoDepth:z.create(t),uTexSize:z.create(N.create(t.getWidth(),t.getHeight())),uKernel:z.create(Mi(15)),dOcclusionKernelSize:z.create(15),uBlurDepthBias:z.create(.5),uBlurDirectionX:z.create(+(n===`horizontal`)),uBlurDirectionY:z.create(+(n===`vertical`)),uInvProjection:z.create(A.identity()),uNear:z.create(0),uFar:z.create(1e4),uBounds:z.create(K()),dOrthographic:z.create(0)},i={...Bi},a=J(`ssao_blur`,ot,Di),o=st(e,`triangles`,a,i,r);return _t(o,r)}function Mi(e){let t=e/3,n=Math.floor((e+1)/2),r=[];for(let e=0;e<n;e++)r.push(1/(Math.sqrt(2*Math.PI)*t)*Math.exp(-e*e/(2*t*t)));return r}function Ni(){let e=g();for(;;){let t=Vi.float()*2-1,n=Vi.float()*2-1;if(t*t+n*n<1){let r=2*Math.sqrt(1-t*t-n*n)*(Vi.float()<.5?-1:1);g.set(e,t,n,r),g.normalize(e,e),g.scale(e,e,Vi.float());break}}return e[2]<0&&(e[2]=-e[2]),e}function Pi(e,t){if(t.length>=e)return t;t.length===0&&t.push(Ni());let n=Math.max(10,Math.min(30,Math.floor(e/10)));for(let r=t.length;r<e;r++){let e,r=-1;for(let i=0;i<n;i++){let n=Ni(),i=1/0;for(let e of t){let t=g.distance(n,e);i=Math.min(i,t)}i>r&&(r=i,e=n)}t.push(e)}return t}function Fi(e){return Hi.length<e&&(Hi=Pi(e,Hi)),Hi}function Ii(e){let t=Fi(e),n=[];for(let r=0;r<e;r++){let i=(r*r+2*r+1)/(e*e);i=.1+i*.9,n.push(t[r][0]*i),n.push(t[r][1]*i),n.push(t[r][2]*i)}return n}var Li,Ri,zi,Bi,Vi,Hi;function Ui(){return(Ui=e((()=>{ct(),Ye(),mt(),P(),ut(),ht(),W(),R(),Ct(),Ei(),Oi(),H(),i(),Se(),Li={samples:V.Numeric(32,{min:1,max:256,step:1}),multiScale:V.MappedStatic(`off`,{on:V.Group({levels:V.ObjectList({radius:V.Numeric(5,{min:0,max:20,step:.1},{description:`Final occlusion radius is 2^x`}),bias:V.Numeric(1,{min:0,max:3,step:.1})},e=>`${e.radius}, ${e.bias}`,{defaultValue:[{radius:2,bias:1},{radius:5,bias:1},{radius:8,bias:1},{radius:11,bias:1}]}),nearThreshold:V.Numeric(10,{min:0,max:50,step:1}),farThreshold:V.Numeric(1500,{min:0,max:1e4,step:100})}),off:V.Group({})},{cycle:!0}),radius:V.Numeric(5,{min:0,max:20,step:.1},{description:`Final occlusion radius is 2^x`,hideIf:e=>e?.multiScale.name===`on`}),bias:V.Numeric(.8,{min:0,max:3,step:.1}),blurKernelSize:V.Numeric(15,{min:1,max:25,step:2}),blurDepthBias:V.Numeric(.5,{min:0,max:1,step:.01}),resolutionScale:V.Numeric(1,{min:.1,max:1,step:.05},{description:`Adjust resolution of occlusion calculation`}),color:V.Color(x(0)),transparentThreshold:V.Numeric(.4,{min:0,max:1,step:.05})},Ri=class e{static isEnabled(e){return e.enabled&&e.occlusion.name!==`off`}static isTransparentEnabled(e,t){return e.opacityAverage<1&&e.transparencyMin<t.transparentThreshold}calcSsaoScale(e){return Math.min(1,1/this.webgl.pixelRatio)*e}getDepthTexture(){return this.ssaoScale===1?this.depthTextureOpaque:this.downsampledDepthTargetOpaque.texture}getTransparentDepthTexture(){return this.ssaoScale===1?this.depthTextureTransparent:this.downsampledDepthTargetTransparent.texture}constructor(e,t,n,r,i,a){this.webgl=e,this.invProjection=A.identity(),this.levelsCameraScale=-1;let{textureFloatLinear:o}=e.extensions;this.depthTextureOpaque=i,this.depthTextureTransparent=a,this.nSamples=1,this.blurKernelSize=1,this.ssaoScale=this.calcSsaoScale(1),this.texSize=[t,n],this.levels=[],this.framebuffer=e.resources.framebuffer(),this.blurFirstPassFramebuffer=e.resources.framebuffer(),this.blurSecondPassFramebuffer=e.resources.framebuffer();let s=Math.floor(t*this.ssaoScale),c=Math.floor(n*this.ssaoScale),l=Math.max(1,Math.floor(s*.5)),u=Math.max(1,Math.floor(c*.5)),d=Math.max(1,Math.floor(s*.25)),f=Math.max(1,Math.floor(c*.25)),p=o?`linear`:`nearest`;this.downsampledDepthTargetOpaque=r?e.createRenderTarget(s,c,`none`,`uint8`,`linear`,`rgba`):e.createRenderTarget(s,c,`none`,`float32`,p,e.isWebGL2?`alpha`:`rgba`),this.downsampleDepthRenderableOpaque=Qe(e,i);let m=this.getDepthTexture();this.depthHalfTargetOpaque=r?e.createRenderTarget(l,u,`none`,`uint8`,`linear`,`rgba`):e.createRenderTarget(l,u,`none`,`float32`,p,e.isWebGL2?`alpha`:`rgba`),this.depthHalfRenderableOpaque=Qe(e,m),this.depthQuarterTargetOpaque=r?e.createRenderTarget(d,f,`none`,`uint8`,`linear`,`rgba`):e.createRenderTarget(d,f,`none`,`float32`,p,e.isWebGL2?`alpha`:`rgba`),this.depthQuarterRenderableOpaque=Qe(e,this.depthHalfTargetOpaque.texture),this.downsampledDepthTargetTransparent=e.createRenderTarget(s,c,`none`,`uint8`,`linear`,`rgba`),this.downsampleDepthRenderableTransparent=Qe(e,a);let h=this.getTransparentDepthTexture();this.depthHalfTargetTransparent=e.createRenderTarget(l,u,`none`,`uint8`,`linear`,`rgba`),this.depthHalfRenderableTransparent=Qe(e,h),this.depthQuarterTargetTransparent=e.createRenderTarget(d,f,`none`,`uint8`,`linear`,`rgba`),this.depthQuarterRenderableTransparent=Qe(e,this.depthHalfTargetTransparent.texture),this.ssaoDepthTexture=e.resources.texture(`image-uint8`,`rgba`,`ubyte`,`linear`),this.ssaoDepthTexture.define(s,c),this.ssaoDepthTexture.attachFramebuffer(this.framebuffer,`color0`),this.ssaoDepthTransparentTexture=e.resources.texture(`image-uint8`,`rgba`,`ubyte`,`linear`),this.ssaoDepthTransparentTexture.define(s,c),this.depthBlurProxyTexture=e.resources.texture(`image-uint8`,`rgba`,`ubyte`,`linear`),this.depthBlurProxyTexture.define(s,c),this.depthBlurProxyTexture.attachFramebuffer(this.blurFirstPassFramebuffer,`color0`),this.renderable=Ai(e,m,this.depthHalfTargetOpaque.texture,this.depthQuarterTargetOpaque.texture,h,this.depthHalfTargetTransparent.texture,this.depthQuarterTargetTransparent.texture),this.blurFirstPassRenderable=ji(e,this.ssaoDepthTransparentTexture,`horizontal`),this.blurSecondPassRenderable=ji(e,this.depthBlurProxyTexture,`vertical`)}getByteCount(){return this.downsampledDepthTargetOpaque.getByteCount()+this.depthHalfTargetOpaque.getByteCount()+this.depthQuarterTargetOpaque.getByteCount()+this.downsampledDepthTargetTransparent.getByteCount()+this.depthHalfTargetTransparent.getByteCount()+this.depthQuarterTargetTransparent.getByteCount()+this.ssaoDepthTexture.getByteCount()+this.ssaoDepthTransparentTexture.getByteCount()+this.depthBlurProxyTexture.getByteCount()}setSize(e,t){let[n,r]=this.texSize,i=this.calcSsaoScale(1);if(e!==n||t!==r||this.ssaoScale!==i){this.texSize.splice(0,2,e,t);let n=Math.floor(e*this.ssaoScale),r=Math.floor(t*this.ssaoScale);this.ssaoDepthTexture.define(n,r),this.ssaoDepthTransparentTexture.define(n,r),this.depthBlurProxyTexture.define(n,r);let i=Math.max(1,Math.floor(n*.5)),a=Math.max(1,Math.floor(r*.5)),o=Math.max(1,Math.floor(n*.25)),s=Math.max(1,Math.floor(r*.25));this.downsampledDepthTargetOpaque.setSize(n,r),this.depthHalfTargetOpaque.setSize(i,a),this.depthQuarterTargetOpaque.setSize(o,s),z.update(this.downsampleDepthRenderableOpaque.values.uTexSize,N.set(this.downsampleDepthRenderableOpaque.values.uTexSize.ref.value,n,r)),z.update(this.depthHalfRenderableOpaque.values.uTexSize,N.set(this.depthHalfRenderableOpaque.values.uTexSize.ref.value,i,a)),z.update(this.depthQuarterRenderableOpaque.values.uTexSize,N.set(this.depthQuarterRenderableOpaque.values.uTexSize.ref.value,o,s)),this.downsampledDepthTargetTransparent.setSize(n,r),this.depthHalfTargetTransparent.setSize(i,a),this.depthQuarterTargetTransparent.setSize(o,s),z.update(this.downsampleDepthRenderableTransparent.values.uTexSize,N.set(this.downsampleDepthRenderableTransparent.values.uTexSize.ref.value,n,r)),z.update(this.depthHalfRenderableTransparent.values.uTexSize,N.set(this.depthHalfRenderableTransparent.values.uTexSize.ref.value,i,a)),z.update(this.depthQuarterRenderableTransparent.values.uTexSize,N.set(this.depthQuarterRenderableTransparent.values.uTexSize.ref.value,o,s)),z.update(this.renderable.values.uTexSize,N.set(this.renderable.values.uTexSize.ref.value,n,r)),z.update(this.blurFirstPassRenderable.values.uTexSize,N.set(this.blurFirstPassRenderable.values.uTexSize.ref.value,n,r)),z.update(this.blurSecondPassRenderable.values.uTexSize,N.set(this.blurSecondPassRenderable.values.uTexSize.ref.value,n,r));let c=this.getDepthTexture(),l=this.getTransparentDepthTexture();z.update(this.depthHalfRenderableOpaque.values.tColor,c),z.update(this.depthHalfRenderableTransparent.values.tColor,l),z.update(this.renderable.values.tDepth,c),z.update(this.renderable.values.tDepthTransparent,l),this.depthHalfRenderableOpaque.update(),this.depthHalfRenderableTransparent.update(),this.renderable.update()}}reset(){this.ssaoDepthTexture.attachFramebuffer(this.framebuffer,`color0`),this.depthBlurProxyTexture.attachFramebuffer(this.blurFirstPassFramebuffer,`color0`)}update(t,n,r,i=!1){let a=!1,o=!1,s=!1,c=+(t.state.mode===`orthographic`),l=A.invert(this.invProjection,t.projection),[u,d]=this.texSize,f=t.viewport;z.update(this.renderable.values.uProjection,t.projection),z.update(this.renderable.values.uInvProjection,l);let p=this.renderable.values.uBounds,m=this.ssaoScale;K.set(p.ref.value,Math.floor(f.x*m)/(u*m),Math.floor(f.y*m)/(d*m),Math.ceil((f.x+f.width)*m)/(u*m),Math.ceil((f.y+f.height)*m)/(d*m)),z.update(p,p.ref.value),z.update(this.blurFirstPassRenderable.values.uBounds,p.ref.value),z.update(this.blurSecondPassRenderable.values.uBounds,p.ref.value),z.updateIfChanged(this.blurFirstPassRenderable.values.uNear,t.near),z.updateIfChanged(this.blurSecondPassRenderable.values.uNear,t.near),z.updateIfChanged(this.blurFirstPassRenderable.values.uFar,t.far),z.updateIfChanged(this.blurSecondPassRenderable.values.uFar,t.far),z.update(this.blurFirstPassRenderable.values.uInvProjection,l),z.update(this.blurSecondPassRenderable.values.uInvProjection,l),z.update(this.blurFirstPassRenderable.values.uBlurDepthBias,r.blurDepthBias*t.scale),z.update(this.blurSecondPassRenderable.values.uBlurDepthBias,r.blurDepthBias*t.scale),this.blurFirstPassRenderable.values.dOrthographic.ref.value!==c&&(o=!0,z.update(this.blurFirstPassRenderable.values.dOrthographic,c),z.update(this.blurSecondPassRenderable.values.dOrthographic,c));let h=e.isTransparentEnabled(n,r);this.renderable.values.dIncludeTransparent.ref.value!==h&&(a=!0,z.update(this.renderable.values.dIncludeTransparent,h)),this.renderable.values.dIllumination.ref.value!==i&&(a=!0,z.update(this.renderable.values.dIllumination,i)),this.nSamples!==r.samples&&(a=!0,this.nSamples=r.samples,z.update(this.renderable.values.uSamples,Ii(this.nSamples)),z.updateIfChanged(this.renderable.values.dNSamples,this.nSamples));let g=r.multiScale.name===`on`;if(this.renderable.values.dMultiScale.ref.value!==g&&(a=!0,z.update(this.renderable.values.dMultiScale,g)),r.multiScale.name===`on`){let e=r.multiScale.params;if(this.levelsCameraScale!==t.scale||!te(this.levels,e.levels)){a=!0,this.levelsCameraScale=t.scale,this.levels=e.levels;let n=ki(e.levels,t.scale);z.updateIfChanged(this.renderable.values.dLevels,n.count),z.update(this.renderable.values.uLevelRadius,n.radius),z.update(this.renderable.values.uLevelBias,n.bias)}z.updateIfChanged(this.renderable.values.uNearThreshold,e.nearThreshold),z.updateIfChanged(this.renderable.values.uFarThreshold,e.farThreshold)}else z.updateIfChanged(this.renderable.values.uRadius,2**r.radius*t.scale);if(z.updateIfChanged(this.renderable.values.uBias,r.bias),this.blurKernelSize!==r.blurKernelSize){o=!0,this.blurKernelSize=r.blurKernelSize;let e=Mi(this.blurKernelSize);z.update(this.blurFirstPassRenderable.values.uKernel,e),z.update(this.blurSecondPassRenderable.values.uKernel,e),z.update(this.blurFirstPassRenderable.values.dOcclusionKernelSize,this.blurKernelSize),z.update(this.blurSecondPassRenderable.values.dOcclusionKernelSize,this.blurKernelSize)}let _=this.calcSsaoScale(r.resolutionScale);if(this.ssaoScale!==_){a=!0,s=!0,this.ssaoScale=_;let e=Math.floor(u*this.ssaoScale),t=Math.floor(d*this.ssaoScale);this.ssaoDepthTexture.define(e,t),this.ssaoDepthTransparentTexture.define(e,t),this.depthBlurProxyTexture.define(e,t);let n=Math.floor(e*.5),r=Math.floor(t*.5),i=Math.floor(e*.25),o=Math.floor(t*.25);this.downsampledDepthTargetOpaque.setSize(e,t),this.depthHalfTargetOpaque.setSize(n,r),this.depthQuarterTargetOpaque.setSize(i,o);let c=this.getDepthTexture();z.update(this.depthHalfRenderableOpaque.values.tColor,c),z.update(this.renderable.values.tDepth,c),z.update(this.renderable.values.tDepthHalf,this.depthHalfTargetOpaque.texture),z.update(this.renderable.values.tDepthQuarter,this.depthQuarterTargetOpaque.texture),z.update(this.downsampleDepthRenderableOpaque.values.uTexSize,N.set(this.downsampleDepthRenderableOpaque.values.uTexSize.ref.value,e,t)),z.update(this.depthHalfRenderableOpaque.values.uTexSize,N.set(this.depthHalfRenderableOpaque.values.uTexSize.ref.value,n,r)),z.update(this.depthQuarterRenderableOpaque.values.uTexSize,N.set(this.depthQuarterRenderableOpaque.values.uTexSize.ref.value,i,o)),this.downsampledDepthTargetTransparent.setSize(e,t),this.depthHalfTargetTransparent.setSize(n,r),this.depthQuarterTargetTransparent.setSize(i,o);let l=this.getTransparentDepthTexture();z.update(this.depthHalfRenderableTransparent.values.tColor,l),z.update(this.renderable.values.tDepthTransparent,l),z.update(this.renderable.values.tDepthHalfTransparent,this.depthHalfTargetTransparent.texture),z.update(this.renderable.values.tDepthQuarterTransparent,this.depthQuarterTargetTransparent.texture),z.update(this.downsampleDepthRenderableTransparent.values.uTexSize,N.set(this.downsampleDepthRenderableTransparent.values.uTexSize.ref.value,e,t)),z.update(this.depthHalfRenderableTransparent.values.uTexSize,N.set(this.depthHalfRenderableTransparent.values.uTexSize.ref.value,n,r)),z.update(this.depthQuarterRenderableTransparent.values.uTexSize,N.set(this.depthQuarterRenderableTransparent.values.uTexSize.ref.value,i,o)),z.update(this.renderable.values.uTexSize,N.set(this.renderable.values.uTexSize.ref.value,e,t)),z.update(this.blurFirstPassRenderable.values.uTexSize,N.set(this.blurFirstPassRenderable.values.uTexSize.ref.value,e,t)),z.update(this.blurSecondPassRenderable.values.uTexSize,N.set(this.blurSecondPassRenderable.values.uTexSize.ref.value,e,t))}a&&this.renderable.update(),o&&(this.blurFirstPassRenderable.update(),this.blurSecondPassRenderable.update()),s&&(this.depthHalfRenderableOpaque.update(),this.depthHalfRenderableTransparent.update())}render(e){o&&this.webgl.timer.mark(`SSAO.render`);let{state:t}=this.webgl,{x:n,y:r,width:i,height:a}=e.viewport,s=this.renderable.values.dIncludeTransparent.ref.value,c=this.renderable.values.dMultiScale.ref.value,l=Math.floor(n*this.ssaoScale),u=Math.floor(r*this.ssaoScale),d=Math.ceil(i*this.ssaoScale),f=Math.ceil(a*this.ssaoScale);if(t.viewport(l,u,d,f),t.scissor(l,u,d,f),this.ssaoScale<1&&(o&&this.webgl.timer.mark(`SSAO.downsample`),this.downsampledDepthTargetOpaque.bind(),this.downsampleDepthRenderableOpaque.render(),s&&(this.downsampledDepthTargetTransparent.bind(),this.downsampleDepthRenderableTransparent.render()),o&&this.webgl.timer.markEnd(`SSAO.downsample`)),c){let e=Math.floor(l*.5),n=Math.floor(u*.5),r=Math.ceil(d*.5),i=Math.ceil(f*.5);t.viewport(e,n,r,i),t.scissor(e,n,r,i),o&&this.webgl.timer.mark(`SSAO.half`),this.depthHalfTargetOpaque.bind(),this.depthHalfRenderableOpaque.render(),s&&(this.depthHalfTargetTransparent.bind(),this.depthHalfRenderableTransparent.render()),o&&this.webgl.timer.markEnd(`SSAO.half`);let a=Math.floor(l*.25),c=Math.floor(u*.25),p=Math.ceil(d*.25),m=Math.ceil(f*.25);t.viewport(a,c,p,m),t.scissor(a,c,p,m),o&&this.webgl.timer.mark(`SSAO.quarter`),this.depthQuarterTargetOpaque.bind(),this.depthQuarterRenderableOpaque.render(),s&&(this.depthQuarterTargetTransparent.bind(),this.depthQuarterRenderableTransparent.render()),o&&this.webgl.timer.markEnd(`SSAO.quarter`),t.viewport(l,u,d,f),t.scissor(l,u,d,f)}o&&this.webgl.timer.mark(`SSAO.opaque`),this.ssaoDepthTexture.attachFramebuffer(this.framebuffer,`color0`),z.update(this.renderable.values.uTransparencyFlag,0),this.framebuffer.bind(),this.renderable.render(),o&&this.webgl.timer.markEnd(`SSAO.opaque`),o&&this.webgl.timer.mark(`SSAO.blurOpaque`),z.update(this.blurFirstPassRenderable.values.tSsaoDepth,this.ssaoDepthTexture),this.blurFirstPassRenderable.update(),this.blurFirstPassFramebuffer.bind(),this.blurFirstPassRenderable.render(),this.ssaoDepthTexture.attachFramebuffer(this.blurSecondPassFramebuffer,`color0`),this.blurSecondPassFramebuffer.bind(),this.blurSecondPassRenderable.render(),o&&this.webgl.timer.markEnd(`SSAO.blurOpaque`),s&&(o&&this.webgl.timer.mark(`SSAO.transparent `),this.ssaoDepthTransparentTexture.attachFramebuffer(this.framebuffer,`color0`),z.update(this.renderable.values.uTransparencyFlag,1),this.framebuffer.bind(),this.renderable.render(),o&&this.webgl.timer.markEnd(`SSAO.transparent `),o&&this.webgl.timer.mark(`SSAO.blurTransparent `),z.update(this.blurFirstPassRenderable.values.tSsaoDepth,this.ssaoDepthTransparentTexture),this.blurFirstPassRenderable.update(),this.blurFirstPassFramebuffer.bind(),this.blurFirstPassRenderable.render(),this.ssaoDepthTransparentTexture.attachFramebuffer(this.blurSecondPassFramebuffer,`color0`),this.blurSecondPassFramebuffer.bind(),this.blurSecondPassRenderable.render(),o&&this.webgl.timer.markEnd(`SSAO.blurTransparent `)),o&&this.webgl.timer.markEnd(`SSAO.render`)}},zi={...jt,tDepth:X(`texture`,`rgba`,`ubyte`,`linear`),tDepthHalf:X(`texture`,`rgba`,`ubyte`,`linear`),tDepthQuarter:X(`texture`,`rgba`,`ubyte`,`linear`),dIllumination:Y(`boolean`),uTransparencyFlag:Z(`i`),dIncludeTransparent:Y(`boolean`),tDepthTransparent:X(`texture`,`rgba`,`ubyte`,`linear`),tDepthHalfTransparent:X(`texture`,`rgba`,`ubyte`,`linear`),tDepthQuarterTransparent:X(`texture`,`rgba`,`ubyte`,`linear`),uSamples:Z(`v3[]`),dNSamples:Y(`number`),uProjection:Z(`m4`),uInvProjection:Z(`m4`),uBounds:Z(`v4`),uTexSize:Z(`v2`),uRadius:Z(`f`),uBias:Z(`f`),dMultiScale:Y(`boolean`),dLevels:Y(`number`),uLevelRadius:Z(`f[]`),uLevelBias:Z(`f[]`),uNearThreshold:Z(`f`),uFarThreshold:Z(`f`)},Bi={...jt,tSsaoDepth:X(`texture`,`rgba`,`ubyte`,`nearest`),uTexSize:Z(`v2`),uKernel:Z(`f[]`),dOcclusionKernelSize:Y(`number`),uBlurDepthBias:Z(`f`),uBlurDirectionX:Z(`f`),uBlurDirectionY:Z(`f`),uInvProjection:Z(`m4`),uNear:Z(`f`),uFar:Z(`f`),uBounds:Z(`v4`),dOrthographic:Y(`number`)},Vi=new xe,Hi=[]})))()}function Wi(e,t,n,r,i,a,o,s,c,l,u){let d={...ft,tSsaoDepth:z.create(s),tSsaoDepthTransparent:z.create(c),tColor:z.create(t),tTransparentColor:z.create(n),dBlendTransparency:z.create(!0),tDepthOpaque:z.create(r),tDepthTransparent:z.create(i),tShadows:z.create(a),tOutlines:z.create(o),tBloom:z.create(l),dBloomEnable:z.create(!1),uTexSize:z.create(N.create(t.getWidth(),t.getHeight())),dOrthographic:z.create(0),uNear:z.create(1),uFar:z.create(1e4),uFogNear:z.create(1e4),uFogFar:z.create(1e4),uFogColor:z.create(g.create(1,1,1)),uOutlineColor:z.create(g.create(0,0,0)),uOcclusionColor:z.create(g.create(0,0,0)),uTransparentBackground:z.create(!1),dOcclusionEnable:z.create(!0),dOcclusionSingleDepth:z.create(!1),dOcclusionIncludeOpacity:z.create(!0),dOcclusionIncludeTransparency:z.create(!1),uOcclusionOffset:z.create(N.create(0,0)),dShadowEnable:z.create(!1),dOutlineEnable:z.create(!1),dOutlineScale:z.create(1),dTransparentOutline:z.create(u)},f={...Gi},p=J(`postprocessing`,ot,un),m=st(e,`triangles`,p,f,d);return _t(m,d)}var Gi,Ki,qi,Ji;function Yi(){return(Yi=e((()=>{ct(),Ye(),mt(),P(),ut(),ht(),W(),R(),Ct(),dn(),H(),yn(),Gn(),i(),gr(),wr(),Mr(),ni(),li(),wi(),Ui(),Gi={...jt,tSsaoDepth:X(`texture`,`rgba`,`ubyte`,`nearest`),tSsaoDepthTransparent:X(`texture`,`rgba`,`ubyte`,`nearest`),tColor:X(`texture`,`rgba`,`ubyte`,`nearest`),tTransparentColor:X(`texture`,`rgba`,`ubyte`,`nearest`),dBlendTransparency:Y(`boolean`),tDepthOpaque:X(`texture`,`rgba`,`ubyte`,`nearest`),tDepthTransparent:X(`texture`,`rgba`,`ubyte`,`nearest`),tShadows:X(`texture`,`rgba`,`ubyte`,`nearest`),tOutlines:X(`texture`,`rgba`,`ubyte`,`nearest`),tBloom:X(`texture`,`rgba`,`ubyte`,`linear`),dBloomEnable:Y(`boolean`),uTexSize:Z(`v2`),dOrthographic:Y(`number`),uNear:Z(`f`),uFar:Z(`f`),uFogNear:Z(`f`),uFogFar:Z(`f`),uFogColor:Z(`v3`),uOutlineColor:Z(`v3`),uOcclusionColor:Z(`v3`),uTransparentBackground:Z(`b`),dOcclusionEnable:Y(`boolean`),dOcclusionSingleDepth:Y(`boolean`),dOcclusionIncludeOpacity:Y(`boolean`),dOcclusionIncludeTransparency:Y(`boolean`),uOcclusionOffset:Z(`v2`),dShadowEnable:Y(`boolean`),dOutlineEnable:Y(`boolean`),dOutlineScale:Y(`number`),dTransparentOutline:Y(`boolean`)},Ki={enabled:V.Boolean(!0),occlusion:V.MappedStatic(`on`,{on:V.Group(Li),off:V.Group({})},{cycle:!0,description:`Darken occluded crevices with the ambient occlusion effect`,hideIf:e=>e.enabled===!1}),shadow:V.MappedStatic(`off`,{on:V.Group(xi),off:V.Group({})},{cycle:!0,description:`Simplistic shadows`,hideIf:e=>e.enabled===!1}),outline:V.MappedStatic(`off`,{on:V.Group(oi),off:V.Group({})},{cycle:!0,description:`Draw outline around 3D objects`,hideIf:e=>e.enabled===!1}),dof:V.MappedStatic(`off`,{on:V.Group(Or),off:V.Group({})},{cycle:!0,description:`DOF`,hideIf:e=>e.enabled===!1}),antialiasing:V.MappedStatic(`smaa`,{fxaa:V.Group(hn),smaa:V.Group(Ln),off:V.Group({})},{options:[[`fxaa`,`FXAA`],[`smaa`,`SMAA`],[`off`,`Off`]],description:`Smooth pixel edges`,hideIf:e=>e.enabled===!1}),sharpening:V.MappedStatic(`off`,{on:V.Group(br),off:V.Group({})},{cycle:!0,description:`Contrast Adaptive Sharpening`,hideIf:e=>e.enabled===!1}),background:V.Group(ur,{isFlat:!0,hideIf:e=>e.enabled===!1}),bloom:V.MappedStatic(`on`,{on:V.Group(Wr),off:V.Group({})},{cycle:!0,description:`Bloom`,hideIf:e=>e.enabled===!1})},qi=class e{static isEnabled(e){return e.enabled&&(Ri.isEnabled(e)||Si.isEnabled(e)||si.isEnabled(e)||e.background.variant.name!==`off`||Gr.isEnabled(e))}static isTransparentDepthRequired(t,n){return n.enabled&&(kr.isEnabled(n)||si.isEnabled(n)&&e.isTransparentOutlineEnabled(n)||Ri.isEnabled(n)&&e.isTransparentSsaoEnabled(t,n)||Gr.isEnabled(n))&&t.opacityAverage<1}static isTransparentOutlineEnabled(e){return e.enabled&&si.isEnabled(e)&&(e.outline.params.includeTransparent??!0)}static isTransparentSsaoEnabled(e,t){return t.enabled&&Ri.isEnabled(t)&&Ri.isTransparentEnabled(e,t.occlusion.params)}static isSsaoEnabled(e){return e.enabled&&Ri.isEnabled(e)}constructor(e,t,n){this.webgl=e,this.drawPass=n,this.occlusionOffset=[0,0],this.transparentBackground=!1;let{colorTarget:r,transparentColorTarget:i,depthTextureOpaque:a,depthTextureTransparent:o,packedDepth:s}=n,c=r.getWidth(),l=r.getHeight();this.target=e.createRenderTarget(c,l,`none`,`uint8`,`linear`),this.ssao=new Ri(e,c,l,s,a,o),this.shadow=new Si(e,c,l,a),this.outline=new si(e,c,l,o,a),this.bloom=new Gr(e,c,l),this.renderable=Wi(e,r.texture,i.texture,a,o,this.shadow.target.texture,this.outline.target.texture,this.ssao.ssaoDepthTexture,this.ssao.ssaoDepthTransparentTexture,this.bloom.compositeTarget.texture,!0),this.background=new dr(e,t,c,l)}getByteCount(){return this.target.getByteCount()+this.ssao.getByteCount()+this.shadow.getByteCount()+this.outline.getByteCount()+this.bloom.getByteCount()}setSize(e,t){let[n,r]=this.renderable.values.uTexSize.ref.value;(e!==n||t!==r)&&(this.target.setSize(e,t),z.update(this.renderable.values.uTexSize,N.set(this.renderable.values.uTexSize.ref.value,e,t))),this.ssao.setSize(e,t),this.shadow.setSize(e,t),this.outline.setSize(e,t),this.bloom.setSize(e,t),this.background.setSize(e,t)}reset(){this.ssao.reset()}updateState(e,t,n,r,i,a,o){let s=!1,c=+(e.state.mode===`orthographic`),l=si.isEnabled(i),u=Si.isEnabled(i),d=Ri.isEnabled(i);if(d){let n=i.occlusion.params;this.ssao.update(e,t,n);let r=Ri.isTransparentEnabled(t,n);this.renderable.values.dOcclusionIncludeTransparency.ref.value!==r&&(s=!0,z.update(this.renderable.values.dOcclusionIncludeTransparency,r)),z.update(this.renderable.values.uOcclusionColor,x.toVec3Normalized(this.renderable.values.uOcclusionColor.ref.value,n.color))}if(u&&this.shadow.update(e,a,o,i.shadow.params),l){let t=i.outline.params,{transparentOutline:n,outlineScale:r}=this.outline.update(e,t,this.drawPass.depthTextureTransparent,this.drawPass.depthTextureOpaque);z.update(this.renderable.values.uOutlineColor,x.toVec3Normalized(this.renderable.values.uOutlineColor.ref.value,t.color)),this.renderable.values.dOutlineScale.ref.value!==r&&(s=!0,z.update(this.renderable.values.dOutlineScale,r)),this.renderable.values.dTransparentOutline.ref.value!==n&&(s=!0,z.update(this.renderable.values.dTransparentOutline,n))}z.updateIfChanged(this.renderable.values.uFar,e.far),z.updateIfChanged(this.renderable.values.uNear,e.near),z.updateIfChanged(this.renderable.values.uFogFar,e.fogFar),z.updateIfChanged(this.renderable.values.uFogNear,e.fogNear),z.update(this.renderable.values.uFogColor,x.toVec3Normalized(this.renderable.values.uFogColor.ref.value,r)),z.updateIfChanged(this.renderable.values.uTransparentBackground,n),this.renderable.values.dOrthographic.ref.value!==c&&(s=!0,z.update(this.renderable.values.dOrthographic,c)),this.renderable.values.dOutlineEnable.ref.value!==l&&(s=!0,z.update(this.renderable.values.dOutlineEnable,l)),this.renderable.values.dShadowEnable.ref.value!==u&&(s=!0,z.update(this.renderable.values.dShadowEnable,u)),this.renderable.values.dOcclusionEnable.ref.value!==d&&(s=!0,z.update(this.renderable.values.dOcclusionEnable,d));let f=t.opacityAverage<1;this.renderable.values.dBlendTransparency.ref.value!==f&&(s=!0,z.update(this.renderable.values.dBlendTransparency,f)),s&&this.renderable.update();let{gl:p,state:m}=this.webgl;m.enable(p.SCISSOR_TEST),m.disable(p.BLEND),m.disable(p.DEPTH_TEST),m.depthMask(!1)}setOcclusionOffset(e,t){this.occlusionOffset[0]=e,this.occlusionOffset[1]=t,z.update(this.renderable.values.uOcclusionOffset,N.set(this.renderable.values.uOcclusionOffset.ref.value,e,t))}setTransparentBackground(e){this.transparentBackground=e}render(e,t,n,r,i,a,s,c,l=!1){o&&this.webgl.timer.mark(`PostprocessingPass.render`),this.updateState(e,t,r,i,a,s,c),this.renderable.values.dBloomEnable.ref.value!==l&&(z.update(this.renderable.values.dBloomEnable,l),this.renderable.update());let u=this.background.isEnabled(a)||l&&!this.transparentBackground,{gl:d,state:f}=this.webgl,{x:p,y:m,width:h,height:g}=e.viewport;a.occlusion.name===`on`&&this.occlusionOffset[0]===0&&this.occlusionOffset[1]===0&&this.ssao.render(e),f.viewport(p,m,h,g),f.scissor(p,m,h,g),a.outline.name===`on`&&this.outline.render(),a.shadow.name===`on`&&this.shadow.render(),n?this.webgl.bindDrawingBuffer():this.target.bind(),this.background.update(e,a.background),this.background.clear(a.background,this.transparentBackground,i),this.background.render(a.background),u&&(f.enable(d.BLEND),f.blendFuncSeparate(d.ONE,d.ONE_MINUS_SRC_ALPHA,d.ONE,d.ONE_MINUS_SRC_ALPHA)),this.renderable.render(),o&&this.webgl.timer.markEnd(`PostprocessingPass.render`)}},Ji=class{static isEnabled(e){return e.enabled&&(e.antialiasing.name!==`off`||e.sharpening.name!==`off`)}constructor(e,t,n,r=`nearest`){this.target=e.createRenderTarget(t,n,`none`,`uint8`,r),this.internalTarget=e.createRenderTarget(t,n,`none`),this.fxaa=new gn(e,this.target.texture),this.smaa=new Rn(e,this.target.texture),this.cas=new xr(e,this.target.texture)}getByteCount(){return this.target.getByteCount()+this.internalTarget.getByteCount()+this.smaa.getByteCount()}setSize(e,t){let n=this.target.texture.getWidth(),r=this.target.texture.getHeight();(e!==n||t!==r)&&(this.target.setSize(e,t),this.internalTarget.setSize(e,t),this.fxaa.setSize(e,t),this.smaa.supported&&this.smaa.setSize(e,t),this.cas.setSize(e,t))}_renderFxaa(e,t,n,r){r.antialiasing.name===`fxaa`&&(this.fxaa.update(t,r.antialiasing.params),this.fxaa.render(e.viewport,n))}_renderSmaa(e,t,n,r){r.antialiasing.name===`smaa`&&(this.smaa.update(t,r.antialiasing.params),this.smaa.render(e.viewport,n))}_renderAntialiasing(e,t,n,r){r.antialiasing.name===`fxaa`?this._renderFxaa(e,t,n,r):r.antialiasing.name===`smaa`&&this._renderSmaa(e,t,n,r)}_renderCas(e,t,n,r){r.sharpening.name===`on`&&(r.antialiasing.name!==`off`&&(t=this.internalTarget.texture),this.cas.update(t,r.sharpening.params),this.cas.render(e.viewport,n))}renderAntialiasingOnly(e,t,n,r){return r.antialiasing.name===`off`||r.antialiasing.name===`smaa`&&!this.smaa.supported?!1:(this._renderAntialiasing(e,t,n,r),!0)}render(e,t,n,r){if(r.antialiasing.name===`off`&&r.sharpening.name===`off`)return;if(r.antialiasing.name===`smaa`&&!this.smaa.supported){console.error(`SMAA not supported, missing "HTMLImageElement"`);return}let i=n===!0?void 0:n===!1?this.target:n;r.sharpening.name===`off`?this._renderAntialiasing(e,t,i,r):(r.antialiasing.name===`off`||this._renderAntialiasing(e,t,this.internalTarget,r),this._renderCas(e,t,i,r))}}})))()}function Xi(e){if(typeof e==`object`){if(`buttons`in e)return e.buttons;if(`which`in e){let t=e.which;if(t===2)return 4;if(t===3)return 2;if(t>0)return 1<<t-1}}return 0}function Zi(e){if(typeof e==`object`&&`button`in e){let t=e.button;if(t===1)return 4;if(t===2)return 2;if(t>=0)return 1<<t}return 0}function Qi(e){return e.composedPath?.()[0]??e.target}function $i(){return{drag:new l,interactionEnd:new l,click:new l,move:new l,wheel:new l,pinch:new l,gesture:new l,resize:new l,leave:new l,enter:new l,modifiers:new l,key:new l,keyUp:new l,keyDown:new l,lock:new l,trackedPointers:new l}}function ea(e){let t=0,n=0,r=0,i=0,a=0;return`detail`in e&&(n=e.detail),`wheelDelta`in e&&(n=-e.wheelDelta/120),`wheelDeltaY`in e&&(n=-e.wheelDeltaY/120),`wheelDeltaX`in e&&(t=-e.wheelDeltaX/120),`axis`in e&&e.axis===e.HORIZONTAL_AXIS&&(t=n,n=0),r=t*10,i=n*10,`deltaY`in e&&(i=e.deltaY),`deltaX`in e&&(r=e.deltaX),`deltaZ`in e&&(a=e.deltaZ),(r||i||a)&&e.deltaMode&&(e.deltaMode===1?(r*=40,i*=40,a*=40):(r*=800,i*=800,a*=800)),r&&!t&&(t=r<0?-1:1),i&&!n&&(n=i<0?-1:1),{spinX:t,spinY:n,dx:r,dy:i,dz:a}}var ta,na,Q,ra,ia,aa;function oa(){return(oa=e((()=>{c(),Ht(),M(),pe(),T(),se(),P(),ta={noScroll:!0,noMiddleClickScroll:!0,noContextMenu:!0,noPinchZoom:!0,noTextSelect:!0,preventGestures:!1,mask:(e,t)=>!0,pixelScale:1},(function(e){let t=e.None=a();function n(e,t){return e.shift===t.shift&&e.alt===t.alt&&e.control===t.control&&e.meta===t.meta}e.areEqual=n;function r(e){return n(e,t)}e.areNone=r;function i(e){if(!e)return 0;let t=0;return e.shift&&t++,e.alt&&t++,e.control&&t++,e.meta&&t++,t}e.size=i;function a(e={}){return{shift:!!e.shift,alt:!!e.alt,control:!!e.control,meta:!!e.meta}}e.create=a})(na||={}),(function(e){e.has=F.has,e.create=F.create,e.Flag=function(e){return e[e.None=0]=`None`,e[e.Primary=1]=`Primary`,e[e.Secondary=2]=`Secondary`,e[e.Auxilary=4]=`Auxilary`,e[e.Forth=8]=`Forth`,e[e.Five=16]=`Five`,e[e.Trigger=32]=`Trigger`,e[e.Squeeze=48]=`Squeeze`,e}({})})(Q||={}),ra={key:``,code:``,modifiers:na.None,x:-1,y:-1,pageX:-1,pageY:-1,preventDefault:ue},ia=[`Backspace`,`Delete`],(function(e){function t(e={}){let{noScroll:t,noContextMenu:n}={...ta,...e};return{noScroll:t,noContextMenu:n,pointerLock:!1,width:0,height:0,pixelRatio:1,...$i(),setPixelScale:ue,updateTrackedPointers:ue,updateScreenTouches:ue,requestPointerLock:ue,exitPointerLock:ue,dispose:ue}}e.create=t;function n(e,t={}){let{noScroll:n,noMiddleClickScroll:r,noContextMenu:i,noPinchZoom:a,noTextSelect:o,mask:s,pixelScale:c,preventGestures:l}={...ta,...t},u=e.clientWidth*S(),d=e.clientHeight*S(),f=!1,p=Ut(),m=N(),h=N(),_=N(),v=N(),y=N(),b={shift:!1,alt:!1,control:!1,meta:!1},x={x:-1,y:-1,pageX:-1,pageY:-1};function S(){return window.devicePixelRatio*c}function C(){return{...b}}function w(t){let n=Qi(t);return n===document.body||n===e}let T=0,E=!1,D=Q.create(Q.Flag.None),O=Q.Flag.None,ee=!1,te=!1,k;window.ResizeObserver!==void 0&&(k=new window.ResizeObserver(Xe));let A=$i(),{drag:j,interactionEnd:M,wheel:ne,pinch:re,gesture:P,click:F,move:ie,leave:I,enter:ae,resize:L,modifiers:oe,key:R,keyUp:z,keyDown:B,lock:se,trackedPointers:ce}=A;le();function le(){e.addEventListener(`contextmenu`,fe,!1),e.addEventListener(`wheel`,He,!1),e.addEventListener(`mousedown`,Fe,!1),window.addEventListener(`mousemove`,Ie,!1),window.addEventListener(`mouseup`,Le,!1),e.addEventListener(`touchstart`,Me,!1),e.addEventListener(`touchmove`,Pe,!1),e.addEventListener(`touchend`,Ne,!1),e.addEventListener(`gesturechange`,Je,!1),e.addEventListener(`gesturestart`,Ke,!1),e.addEventListener(`gestureend`,Ye,!1),window.addEventListener(`blur`,me),window.addEventListener(`keyup`,ge,!1),window.addEventListener(`keydown`,he,!1),window.addEventListener(`keypress`,_e,!1),document.addEventListener(`pointerlockchange`,ue,!1),document.addEventListener(`pointerlockerror`,de,!1),k==null?window.addEventListener(`resize`,Xe,!1):k.observe(e.parentElement)}function V(){E||(E=!0,e.removeEventListener(`contextmenu`,fe,!1),e.removeEventListener(`wheel`,He,!1),e.removeEventListener(`mousedown`,Fe,!1),window.removeEventListener(`mousemove`,Ie,!1),window.removeEventListener(`mouseup`,Le,!1),e.removeEventListener(`touchstart`,Me,!1),e.removeEventListener(`touchmove`,Pe,!1),e.removeEventListener(`touchend`,Ne,!1),e.removeEventListener(`gesturechange`,Je,!1),e.removeEventListener(`gesturestart`,Ke,!1),e.removeEventListener(`gestureend`,Ye,!1),window.removeEventListener(`blur`,me),window.removeEventListener(`keyup`,ge,!1),window.removeEventListener(`keydown`,he,!1),window.removeEventListener(`keypress`,_e,!1),document.removeEventListener(`pointerlockchange`,ue,!1),document.removeEventListener(`pointerlockerror`,de,!1),tt.remove(),k==null?window.removeEventListener(`resize`,Xe,!1):(k.unobserve(e.parentElement),k.disconnect()))}function ue(){f=e.ownerDocument.pointerLockElement===e,nt(f),se.next(f)}function de(){console.error(`Unable to use Pointer Lock API`),f=!1,nt(f),se.next(f)}function fe(e){s(e.clientX,e.clientY)&&i&&e.preventDefault()}function pe(e){b.alt=e.altKey,b.shift=e.shiftKey,b.control=e.ctrlKey,b.meta=e.metaKey}function me(){(D||b.shift||b.alt||b.meta||b.control)&&(D=0,b.shift=b.alt=b.control=b.meta=!1)}function he(e){let t=!1;!b.alt&&e.altKey&&(t=!0,b.alt=!0),!b.shift&&e.shiftKey&&(t=!0,b.shift=!0),!b.control&&e.ctrlKey&&(t=!0,b.control=!0),!b.meta&&e.metaKey&&(t=!0,b.meta=!0),t&&ee&&oe.next(C()),w(e)&&ee&&B.next({key:e.key,code:e.code,modifiers:C(),...x,preventDefault:()=>e.preventDefault()})}function ge(e){let t=!1;b.alt&&!e.altKey&&(t=!0,b.alt=!1),b.shift&&!e.shiftKey&&(t=!0,b.shift=!1),b.control&&!e.ctrlKey&&(t=!0,b.control=!1),b.meta&&!e.metaKey&&(t=!0,b.meta=!1),t&&ee&&oe.next(C()),ia.includes(e.key)&&_e(e),w(e)&&ee&&z.next({key:e.key,code:e.code,modifiers:C(),...x,preventDefault:()=>e.preventDefault()})}function _e(e){w(e)&&ee&&R.next({key:e.key,code:e.code,modifiers:C(),...x,preventDefault:()=>e.preventDefault()})}let ve={primary:{prev:void 0,down:N(),end:N(),axes:[]},secondary:{prev:void 0,down:N(),end:N(),axes:[]},distance:-1};function ye(e,t,n){let r=Q.has(t,e);return(n?Q.has(n,e):!1)&&!r}function be(e,t){let{x:n,y:r,dx:i,dy:a,ray:o,buttons:s,axes:c}=e,[l,u]=[n,r],d=na.create(),f=t?ve.secondary:ve.primary,{prev:p}=f;s===Q.Flag.Secondary?ie.next({x:n,y:r,pageX:l,pageY:u,buttons:Q.Flag.None,button:Q.Flag.None,modifiers:d,inside:!0,onElement:!0,ray:o}):p?.buttons===Q.Flag.Secondary&&I.next(void 0);let m=Q.has(s,Q.Flag.Primary),h=p?Q.has(p.buttons,Q.Flag.Primary):!1;if(h&&!m&&(N.set(f.end,n,r),N.distance(f.end,f.down)<20&&F.next({x:n,y:r,pageX:l,pageY:u,buttons:Q.Flag.Trigger,button:Q.Flag.Trigger,modifiers:d,ray:o}),M.next(void 0)),m){let e=!h;j.next({x:n,y:r,dx:i,dy:a,pageX:l,pageY:u,buttons:Q.Flag.Trigger,button:Q.Flag.Trigger,modifiers:d,isStart:e,useDelta:!0}),e&&N.set(f.down,n,r)}let g={x:0,y:0,pageX:0,pageY:0,modifiers:d,preventDefault:()=>{}};if(ye(Q.Flag.Forth,s,p?.buttons)){let e=t?`GamepadX`:`GamepadA`;z.next({...g,code:e,key:e})}if(ye(Q.Flag.Five,s,p?.buttons)){let e=t?`GamepadY`:`GamepadB`;z.next({...g,code:e,key:e})}c&&(c[2]<0?(B.next({...g,code:`GamepadLeft`,key:`GamepadLeft`}),z.next({...g,code:`GamepadRight`,key:`GamepadRight`})):c[2]>0?(B.next({...g,code:`GamepadRight`,key:`GamepadRight`}),z.next({...g,code:`GamepadLeft`,key:`GamepadLeft`})):c[2]!==f.axes[2]&&(z.next({...g,code:`GamepadLeft`,key:`GamepadLeft`}),z.next({...g,code:`GamepadRight`,key:`GamepadRight`})),c[3]<0?(B.next({...g,code:`GamepadUp`,key:`GamepadUp`}),z.next({...g,code:`GamepadDown`,key:`GamepadDown`})):c[3]>0?(B.next({...g,code:`GamepadDown`,key:`GamepadDown`}),z.next({...g,code:`GamepadUp`,key:`GamepadUp`})):c[3]!==f.axes[3]&&(z.next({...g,code:`GamepadUp`,key:`GamepadUp`}),z.next({...g,code:`GamepadDown`,key:`GamepadDown`}))),f.axes=c||[],f.prev=e}function xe(e,t,n){let r=g.distance(e.ray.origin,t.ray.origin);if(ve.distance>0){let e=r/ve.distance;P.next({scale:e,rotation:0,deltaScale:0,deltaRotation:0,buttons:n,button:n,modifiers:C()})}ve.distance=r}function Se(e){let t,n;for(let r of e)r.handedness===`right`?t=r:r.handedness===`left`&&(n=r);!t&&n&&(t=n,n=void 0),t?.buttons===Q.Flag.Primary&&n?.buttons===Q.Flag.Primary?xe(t,n,Q.Flag.Trigger):t?.buttons===Q.Flag.Secondary&&n?.buttons===Q.Flag.Secondary?xe(t,n,Q.Flag.Squeeze):(ve.distance===-1&&(t&&be(t,!1),n&&be(n,!0)),!t?.buttons&&!n?.buttons&&(ve.distance=-1))}let H,U,Ce=-1;function we(e){if(e.length===2){let t=N.fromObj(e[0]),n=N.fromObj(e[1]),r=N.distance(t,n),i=Q.Flag.Trigger;if(Ce>0){let e=r/Ce;P.next({scale:e,rotation:0,deltaScale:0,deltaRotation:0,buttons:i,button:i,modifiers:C()})}Ce=r,H=void 0;return}Ce=-1;let t=e[0];if(!t){if(U&&H){let e=N.fromObj(U),t=N.fromObj(H);if(N.distance(e,t)<10){let[t,n]=e,[r,i]=[t,n],a=na.create(),o=Q.Flag.Trigger,{ray:s}=U;F.next({x:t,y:n,pageX:r,pageY:i,buttons:o,button:o,modifiers:a,ray:s})}M.next(void 0)}H=void 0,U=void 0;return}let[n,r]=N.fromObj(t),[i,a]=[n,r],o=na.create(),s=Q.Flag.Trigger,c=H===void 0,l=H?n-H.x:0,u=H?r-H.y:0;H=t,c&&(U=t),j.next({x:n,y:r,dx:l,dy:u,pageX:i,pageY:a,buttons:s,button:s,modifiers:o,isStart:c,useDelta:!0})}function Te(e){let t=e.touches[0],n=e.touches[1];return{clientX:(t.clientX+n.clientX)/2,clientY:(t.clientY+n.clientY)/2,pageX:(t.pageX+n.pageX)/2,pageY:(t.pageY+n.pageY)/2,target:e.target}}function Ee(e){let t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY;return Math.sqrt(t*t+n*n)}let De=-1,W,Oe=N(),G=N();function ke(e){De<0||(N.set(G,e.touches[0].pageX,e.touches[0].pageY),De+=N.distance(Oe,G),N.copy(Oe,G))}let Ae=N(),je=!1,K=0,q=1;function Me(e){if(e.preventDefault(),W=void 0,De=-1,e.touches.length===1)D=O=Q.Flag.Primary,De=0,N.set(Oe,e.touches[0].pageX,e.touches[0].pageY),W=e.touches[0],ze(e.touches[0]),N.copy(Ae,h),je=!0;else if(e.touches.length===2){D=Q.Flag.Secondary|Q.Flag.Auxilary,O=Q.Flag.Secondary,pe(e),q=1,K=Ee(e);let{pageX:t,pageY:n}=et(Te(e));je||=($e(Ae,Te(e)),!0),re.next({isStart:!0,distance:K,delta:0,fraction:q,fractionDelta:0,startX:Ae[0],startY:Ae[1],centerPageX:t,centerPageY:n,buttons:D,button:O,modifiers:C()})}else e.touches.length===3&&(D=O=Q.Flag.Forth,ze(Te(e)))}function Ne(e){if(Re(),W&&De<=4){let e=W;if(!s(e.clientX,e.clientY))return;$e(G,e);let{pageX:t,pageY:n}=et(e),[r,i]=G;F.next({x:r,y:i,pageX:t,pageY:n,buttons:D,button:O,modifiers:C()})}W=void 0,je=!1}function Pe(e){if(O=Q.Flag.None,a&&(e.preventDefault(),e.stopPropagation(),e.originalEvent&&(e.originalEvent.preventDefault(),e.originalEvent.stopPropagation())),W=void 0,e.touches.length===1)D=Q.Flag.Primary,W=e.touches[0],ke(e),Ve(e.touches[0]);else if(e.touches.length===2){D=Q.Flag.Secondary|Q.Flag.Auxilary,O=Q.Flag.Secondary,pe(e);let{pageX:t,pageY:n}=et(Te(e)),r=Ee(e),i=K-r,a=K/r,o=a-q;q=a,re.next({isStart:!1,distance:r,delta:i,fraction:a,fractionDelta:o,startX:Ae[0],startY:Ae[1],centerPageX:t,centerPageY:n,buttons:D,button:O,modifiers:C()})}else e.touches.length===3&&(D=Q.Flag.Forth,Ve(Te(e)))}function Fe(e){pe(e),D=Xi(e),O=Zi(e),r&&D===Q.Flag.Auxilary&&e.preventDefault,ze(e)}function Ie(e){pe(e),D=Xi(e),O=Q.Flag.None,Ve(e)}function Le(e){pe(e),D=Xi(e),O=Zi(e),Be(e),Re()}function Re(){M.next(void 0)}function ze(e){s(e.clientX,e.clientY)&&($e(h,e),N.copy(m,h),Ze(h)&&(T=1))}function Be(e){if(T=0,s(e.clientX,e.clientY)){if($e(_,e),!te&&N.distance(_,m)<4){let{pageX:t,pageY:n}=et(e),[r,i]=_;F.next({x:r,y:i,pageX:t,pageY:n,buttons:D,button:O,modifiers:C()})}te=!1}}function Ve(t){$e(_,t);let{pageX:n,pageY:r}=et(t),[i,a]=_,{movementX:c,movementY:l}=t,u=Ze(_)&&s(t.clientX,t.clientY);if(ee&&!u?I.next(void 0):!ee&&u&&ae.next(void 0),ee=u,x.x=i,x.y=a,x.pageX=n,x.pageY=r,ie.next({x:i,y:a,pageX:n,pageY:r,movementX:c,movementY:l,buttons:D,button:O,modifiers:C(),inside:u,onElement:Qi(t)===e}),T===0||(o&&t.preventDefault?.(),N.div(v,N.sub(v,_,h),Qe(y)),N.magnitude(v)<1e-6))return;let d=T===1;if(d&&!s(t.clientX,t.clientY))return;N.distance(_,m)>=4&&(te=!0);let[f,p]=v;j.next({x:i,y:a,dx:f,dy:p,pageX:n,pageY:r,buttons:D,button:O,modifiers:C(),isStart:d}),N.copy(h,_),T=2}function He(e){if(!s(e.clientX,e.clientY))return;$e(_,e);let{pageX:t,pageY:r}=et(e),[i,a]=_;n&&e.preventDefault();let o=ea(e);D=O=Q.Flag.Auxilary,(o.dx||o.dy||o.dz)&&ne.next({x:i,y:a,pageX:t,pageY:r,...o,buttons:D,button:O,modifiers:C()})}function Ue(e){l&&(e.preventDefault(),e.stopImmediatePropagation?.(),e.stopPropagation?.())}let We=0,Ge=0;function Ke(e){Ue(e),We=e.scale,Ge=e.rotation,P.next({scale:e.scale,rotation:e.rotation,deltaRotation:0,deltaScale:0,isStart:!0,buttons:D,button:O,modifiers:C()})}function qe(e,t){P.next({scale:e.scale,rotation:e.rotation,deltaRotation:Ge-e.rotation,deltaScale:We-e.scale,isEnd:t,buttons:D,button:O,modifiers:C()}),Ge=e.rotation,We=e.scale}function Je(e){Ue(e),qe(e)}function Ye(e){Ue(e),qe(e,!0)}function Xe(){u=e.clientWidth*S(),d=e.clientHeight*S(),L.next({})}function Ze(t){if(e instanceof Window||e instanceof Document||e===document.body)return!0;{let n=e.getBoundingClientRect();return t[0]>=0&&t[1]>=0&&t[0]<n.width&&t[1]<n.height}}function Qe(t){return t[0]=e.clientWidth,t[1]=e.clientHeight,t}function $e(t,n){if(u=e.clientWidth*S(),d=e.clientHeight*S(),f){let e=S();t[0]=(p.x+p.width/2)/e,t[1]=(d-(p.y+p.height/2))/e}else{let r=e.getBoundingClientRect();t[0]=(n.clientX||0)-r.left,t[1]=(n.clientY||0)-r.top}return t}function et(e){return f?{pageX:Math.round(window.innerWidth/2)+p.x,pageY:Math.round(window.innerHeight/2)+p.y}:{pageX:e.pageX,pageY:e.pageY}}let tt=J();function J(){let t=document.createElement(`div`),n=`#000 30%, #0000 0 calc(100% - 30%), #000 0`,r=`linear-gradient(0deg, ${n}) 50%/10% 100% no-repeat`,i=`linear-gradient(90deg, ${n}) 50%/100% 10% no-repeat`;return Object.assign(t.style,{width:`30px`,aspectRatio:1,background:`${r}, ${i}, radial-gradient(circle at 50%, #000 5%, #0000 5%)`,display:`none`,zIndex:1e3,position:`absolute`,mixBlendMode:`difference`,filter:`invert(1)`}),e.parentElement?.appendChild(t),t}function nt(e){if(tt.style.display=e?`block`:`none`,e){let e=S(),t=(p.x+p.width/2)/e,n=(p.y+p.height/2)/e;tt.style.width=`30px`,tt.style.left=`calc(${t}px - 15px)`,tt.style.bottom=`calc(${n}px - 15px)`}}return{get noScroll(){return n},set noScroll(e){n=e},get noContextMenu(){return i},set noContextMenu(e){i=e},get width(){return u},get height(){return d},get pixelRatio(){return S()},get pointerLock(){return f},...A,setPixelScale:t=>{c=t,u=e.clientWidth*S(),d=e.clientHeight*S()},updateTrackedPointers:e=>{Se(e),ce.next(e)},updateScreenTouches:e=>{we(e)},requestPointerLock:t=>{p=t,f||e.requestPointerLock()},exitPointerLock:()=>{f&&e.ownerDocument.exitPointerLock()},dispose:V}}e.fromElement=n})(aa||={})})))()}function sa(e,t){Ut.copy(t.viewport,e.viewport),A.copy(t.view,e.view),A.copy(t.projection,e.projection),A.copy(t.headRotation,e.headRotation),an.copySnapshot(t.state,e.state),an.copyViewOffset(t.viewOffset,e.viewOffset),t.far=e.far,t.near=e.near,t.fogFar=e.fogFar,t.fogNear=e.fogNear,t.forceFull=e.forceFull,t.scale=e.scale,t.minTargetDistance=e.minTargetDistance}function ca(e,t,n,r){sa(e,n),sa(e,r);let i=Math.floor(e.viewport.width/2),a=i/e.viewport.height;n.viewport.width=i,r.viewport.x+=i,r.viewport.width-=i;let o=t.eyeSeparation/2,s=o*e.near/t.focus,c=e.near*Math.tan(e.state.fov*.5),l,u;ha[12]=-o,ga[12]=o,l=-c*a+s,u=c*a+s,n.projection[0]=2*e.near/(u-l),n.projection[8]=(u+l)/(u-l),A.mul(n.view,n.view,ha),A.mul(n.projectionView,n.projection,n.view),A.invert(n.inverseProjectionView,n.projectionView),l=-c*a-s,u=c*a-s,r.projection[0]=2*e.near/(u-l),r.projection[8]=(u+l)/(u-l),A.mul(r.view,r.view,ga),A.mul(r.projectionView,r.projection,r.view),A.invert(r.inverseProjectionView,r.projectionView),n.disabled=!1,r.disabled=!1}function la(e,t,n,r){ua(e,t,r.pose.views[0],r.layer),r.pose.views.length===1?n.disabled=!0:ua(e,n,r.pose.views[1],r.layer)}function ua(e,t,n,r){sa(e,t);let i=r.getViewport(n);Ut.set(t.viewport,i.x,i.y,i.width,i.height),A.fromArray(t.projection,n.projectionMatrix,0),A.fromArray(t.view,n.transform.inverse.matrix,0),A.mul(t.projectionView,t.projection,t.view),A.invert(t.inverseProjectionView,t.projectionView),t.disabled=!1}var da,fa,pa,ma,ha,ga;function _a(){return(_a=e((()=>{W(),R(),Jt(),cn(),da={eyeSeparation:V.Numeric(.062,{min:.02,max:.1,step:.001},{description:`Distance between left and right camera.`}),focus:V.Numeric(10,{min:1,max:20,step:.1},{description:`Apparent object distance.`})},fa=V.getDefaultValues(da),pa=class{get viewport(){return this.parent.viewport}get viewOffset(){return this.parent.viewOffset}constructor(e,t={}){this.parent=e,this.left=new ma,this.right=new ma,this.props={...fa,...t}}setProps(e){Object.assign(this.props,e)}update(e){this.parent.update(),e?la(this.parent,this.left,this.right,e):ca(this.parent,this.props,this.left,this.right)}},(function(e){function t(e){return`left`in e&&`right`in e}e.is=t})(pa||={}),ma=class{constructor(){this.viewport=Ut.create(0,0,0,0),this.view=A(),this.projection=A(),this.projectionView=A(),this.inverseProjectionView=A(),this.headRotation=A(),this.viewEye=A(),this.isAsymmetricProjection=!0,this.state=an.createDefaultSnapshot(),this.viewOffset=an.ViewOffset(),this.far=0,this.near=0,this.fogFar=0,this.fogNear=0,this.forceFull=!1,this.scale=0,this.minTargetDistance=0,this.disabled=!1}getRay(e,t,n){return A.getTranslation(e.origin,A.invert(A(),this.view)),g.set(e.direction,t,n,.5),Kt(e.direction,e.direction,this.viewport,this.inverseProjectionView),g.normalize(e.direction,g.sub(e.direction,e.direction,e.origin)),e}},ha=A.identity(),ga=A.identity()})))()}function $(e,t=``,n=``){return $.create(e,t,n)}function va(e,t){let n=[];return e===void 0&&!t?n.push(`any mouse button`):e===0?n.push(`mouse hover`):e!==void 0&&(xa.has(e,xa.Flag.Primary)&&n.push(`left mouse button`),xa.has(e,xa.Flag.Secondary)&&n.push(`right mouse button`),xa.has(e,xa.Flag.Auxilary)&&n.push(`wheel/middle mouse button`),xa.has(e,xa.Flag.Forth)&&n.push(`three fingers`)),n.join(` + `)}function ya(e,t){let n=[];return e?(e.alt&&n.push(`alt key`),e.control&&n.push(`control key`),e.meta&&n.push(`meta/command key`),e.shift&&n.push(`shift key`),t&&n.length===0&&n.push(`no key`)):t&&n.push(`any key`),n.join(` + `)}function ba(e){return e?.startsWith(`Key`)&&(e=e.substring(3)),e&&de(e).toLowerCase()}var xa;function Sa(){return(Sa=e((()=>{oa(),ie(),(function(e){function t(e,t=``,n=``){return{triggers:e,action:t,description:n}}e.create=t;function n(e){return!!e&&Array.isArray(e.triggers)&&typeof e.action==`string`}e.isBinding=n,e.Empty={triggers:[],action:``,description:``};function r(e){return e.triggers.length===0||e.triggers.every(e=>e.buttons===void 0&&e.modifiers===void 0&&!e.code)}e.isEmpty=r;function i(e,t,n){return e.triggers.some(e=>c.match(e,t,n))}e.match=i;function a(e,t,n,r){return e.triggers.some(e=>c.matchKey(e,t,n,r))}e.matchKey=a;function o(e){return e.triggers.map(c.format).join(` or `)}e.formatTriggers=o;function s(e,t=``){let n=e.description||B(t);return ne(n,{triggers:`<i>`+o(e)+`</i>`})}e.format=s;function c(e,t){return c.create(e,t)}e.Trigger=c;function l(e,t){return c.create(void 0,t,e)}e.TriggerKey=l,(function(e){function t(e,t,n){return{buttons:e,modifiers:t,code:n}}e.create=t,e.Empty={};function n(e,t,n){let{buttons:r,modifiers:i}=e;return r!==void 0&&(r===t||Q.has(r,t))&&(!i||na.areEqual(i,n))}e.match=n;function r(e,t,n,r){let{modifiers:i,code:a}=e;return a!==void 0&&(a===t||a.length===1&&t.length===4&&t.startsWith(`Key`)&&!!r&&r.length===1&&r.toUpperCase()===a.toUpperCase())&&(!i||na.areEqual(i,n))}e.matchKey=r;function i(e){let t=[],n=va(e.buttons,e.code);n&&t.push(n);let r=ba(e.code);r&&t.push(r);let i=ya(e.modifiers);return i&&t.push(i),t.join(` + `)}e.format=i})(c||=e.Trigger||={})})($||={}),xa=Q})))()}var Ca,wa,Ta,Ea,Da,Oa,ka,Aa;function ja(){return(ja=e((()=>{W(),cn(),oa(),R(),I(),Sa(),Ca=Q,wa=na,Ta=$.Trigger,Ea=$.TriggerKey,Da={dragRotate:$([Ta(Ca.Flag.Primary,wa.create()),Ta(Ca.Flag.Trigger)],`Rotate`,"Drag using ${triggers}"),dragRotateZ:$([Ta(Ca.Flag.Primary,wa.create({shift:!0,control:!0}))],`Rotate around z-axis (roll)`,"Drag using ${triggers}"),dragPan:$([Ta(Ca.Flag.Secondary,wa.create()),Ta(Ca.Flag.Primary,wa.create({control:!0}))],`Pan`,"Drag using ${triggers}"),dragZoom:$.Empty,dragFocus:$([Ta(Ca.Flag.Forth,wa.create())],`Focus`,"Drag using ${triggers}"),dragFocusZoom:$([Ta(Ca.Flag.Auxilary,wa.create())],`Focus and zoom`,"Drag using ${triggers}"),scrollZoom:$([Ta(Ca.Flag.Auxilary,wa.create())],`Zoom`,"Scroll using ${triggers}"),scrollFocus:$([Ta(Ca.Flag.Auxilary,wa.create({shift:!0}))],`Clip`,"Scroll using ${triggers}"),scrollFocusZoom:$.Empty,keyMoveForward:$([Ea(`KeyW`),Ea(`GamepadUp`)],`Move forward`,"Press ${triggers}"),keyMoveBack:$([Ea(`KeyS`),Ea(`GamepadDown`)],`Move back`,"Press ${triggers}"),keyMoveLeft:$([Ea(`KeyA`)],`Move left`,"Press ${triggers}"),keyMoveRight:$([Ea(`KeyD`)],`Move right`,"Press ${triggers}"),keyMoveUp:$([Ea(`KeyR`)],`Move up`,"Press ${triggers}"),keyMoveDown:$([Ea(`KeyF`)],`Move down`,"Press ${triggers}"),keyRollLeft:$([Ea(`KeyQ`)],`Roll left`,"Press ${triggers}"),keyRollRight:$([Ea(`KeyE`)],`Roll right`,"Press ${triggers}"),keyPitchUp:$([Ea(`ArrowUp`,wa.create({shift:!0}))],`Pitch up`,"Press ${triggers}"),keyPitchDown:$([Ea(`ArrowDown`,wa.create({shift:!0}))],`Pitch down`,"Press ${triggers}"),keyYawLeft:$([Ea(`ArrowLeft`,wa.create({shift:!0}))],`Yaw left`,"Press ${triggers}"),keyYawRight:$([Ea(`ArrowRight`,wa.create({shift:!0}))],`Yaw right`,"Press ${triggers}"),boostMove:$([Ea(`ShiftLeft`)],`Boost move`,"Press ${triggers}"),enablePointerLock:$([Ea(`Space`,wa.create({control:!0}))],`Enable pointer lock`,"Press ${triggers}")},Oa={rotateSpeed:V.Numeric(5,{min:1,max:10,step:1}),zoomSpeed:V.Numeric(7,{min:1,max:15,step:1}),panSpeed:V.Numeric(1,{min:.1,max:5,step:.1}),moveSpeed:V.Numeric(.75,{min:.1,max:3,step:.1}),boostMoveFactor:V.Numeric(5,{min:.1,max:10,step:.1}),flyMode:V.Boolean(!1),animate:V.MappedStatic(`off`,{off:V.EmptyGroup(),spin:V.Group({speed:V.Numeric(.1,{min:-2,max:2,step:.01},{description:`Number of rotations per second`}),axis:V.Vec3(g.create(0,-1,0),{},{description:`Axis of rotation in camera space`})},{description:`Spin the 3D scene around an axis in camera space`}),rock:V.Group({speed:V.Numeric(.3,{min:-5,max:5,step:.1},{description:`Number of oscilations per second`}),angle:V.Numeric(10,{min:0,max:90,step:1},{description:`How many degrees to rotate in each direction.`}),axis:V.Vec3(g.create(0,-1,0),{},{description:`Axis of rotation in camera space`})},{description:`Rock the 3D scene around an axis in camera space`})}),staticMoving:V.Boolean(!0),dynamicDampingFactor:V.Numeric(.2,{min:0,max:1,step:.01}),minDistance:V.Numeric(.01,{},{isHidden:!0}),maxDistance:V.Numeric(1e150,{},{isHidden:!0}),gestureScaleFactor:V.Numeric(1,{},{isHidden:!0}),maxWheelDelta:V.Numeric(.02,{},{isHidden:!0}),autoAdjustMinMaxDistance:V.MappedStatic(`on`,{off:V.EmptyGroup(),on:V.Group({minDistanceFactor:V.Numeric(0),minDistancePadding:V.Numeric(5),maxDistanceFactor:V.Numeric(10),maxDistanceMin:V.Numeric(20)})},{isHidden:!0})},ka={bindings:Da},(function(e){function t(e,t,n,r={},i={}){let a={...V.getDefaultValues(Oa),...r},o={...ka,...i},s=o.bindings,c=Ut.clone(t.viewport),l=!1,u=e.drag.subscribe(ze),d=e.interactionEnd.subscribe(Be),f=e.wheel.subscribe(Ve),p=e.pinch.subscribe(He),m=e.keyDown.subscribe(We),h=e.keyUp.subscribe(Ge),_=e.move.subscribe(Ue),y=e.lock.subscribe(Je),x=e.leave.subscribe(Xe),S=!1,C=g(),w=g(),T=N(),E=N(),D=g(),O=0,ee=N(),te=N(),k=0,A=0,j=0,M=N(),ne=N(),re=N(),P=N(),F=N(),ie=N(),I=g.clone(t.target),ae=g.clone(t.position),oe=g.clone(t.up),R=N();function z(e,t){return N.set(R,(e-c.x)/c.width,(t-c.y)/c.height)}let B=N();function se(e,t){return N.set(B,(e-c.width*.5-c.x)/(c.width*.5),(c.height+2*(c.y-t))/c.width)}function ce(){let t=e.width/e.height||1;return a.rotateSpeed*e.pixelRatio*t}let le=g(),ue=b(),de=g(),fe=g(),pe=g(),me=g();function he(e,t){return e**(t/16.666666666666668)}function ge(e){return he(Math.sqrt(1-a.dynamicDampingFactor),e)}function _e(e){return 1-he(1-a.dynamicDampingFactor,e)}let ve=1e-5,ye=1e-5;function be(e){let n=E[0]-T[0],r=E[1]-T[1];g.set(me,n,r,0);let i=g.magnitude(me)*ce();i?(g.sub(w,t.position,t.target),g.normalize(de,w),g.normalize(fe,t.up),g.normalize(pe,g.cross(pe,fe,de)),g.setMagnitude(fe,fe,r),g.setMagnitude(pe,pe,n),g.add(me,fe,pe),g.normalize(le,g.cross(le,me,w)),b.setAxisAngle(ue,le,i),g.transformQuat(w,w,ue),g.transformQuat(t.up,t.up,ue),g.copy(D,le),O=i):!a.staticMoving&&O&&(O*=ge(e),Math.abs(O)<ve?O=0:(g.sub(w,t.position,t.target),b.setAxisAngle(ue,D,O),g.transformQuat(w,w,ue),g.transformQuat(t.up,t.up,ue))),N.copy(T,E)}let xe=b(),Se=g();function H(e){let n=(K.rollRight-K.rollLeft)/45,r=(te[0]-ee[0])*-Math.sign(te[1]),i=(te[1]-ee[1])*-Math.sign(te[0]),o=-a.rotateSpeed*(-r+i)+n;o?(g.normalize(Se,w),b.setAxisAngle(xe,Se,o),g.transformQuat(t.up,t.up,xe),k=o):!a.staticMoving&&k&&(k*=ge(e),Math.abs(k)<ve?k=0:(g.normalize(Se,w),b.setAxisAngle(xe,Se,k),g.transformQuat(t.up,t.up,xe))),N.copy(ee,te)}let U=b(),Ce=g();function we(e){let n=(K.pitchUp-K.pitchDown)/(a.flyMode?360:90),r=-a.rotateSpeed*n;r?(g.cross(Ce,w,t.up),g.normalize(Ce,Ce),b.setAxisAngle(U,Ce,r),g.transformQuat(w,w,U),g.transformQuat(t.up,t.up,U),A=r):!a.staticMoving&&A&&(A*=ge(e),Math.abs(A)<ve?A=0:(g.cross(Ce,w,t.up),g.normalize(Ce,Ce),b.setAxisAngle(U,Ce,A),g.transformQuat(w,w,U),g.transformQuat(t.up,t.up,U)))}let Te=b(),Ee=g();function De(e){let n=(K.yawRight-K.yawLeft)/(a.flyMode?360:90),r=-a.rotateSpeed*n;r?(g.normalize(Ee,t.up),b.setAxisAngle(Te,Ee,r),g.transformQuat(w,w,Te),g.transformQuat(t.up,t.up,Te),j=r):!a.staticMoving&&j&&(j*=ge(e),Math.abs(j)<ve?j=0:(g.normalize(Ee,t.up),b.setAxisAngle(Te,Ee,j),g.transformQuat(w,w,Te),g.transformQuat(t.up,t.up,Te)))}function W(e){if(!a.staticMoving&&Math.abs(ne[1]-M[1])<ye){N.copy(M,ne);return}let t=1+(ne[1]-M[1])*a.zoomSpeed;t!==1&&t>0&&g.scale(w,w,t),a.staticMoving?N.copy(M,ne):M[1]+=(ne[1]-M[1])*_e(e)}function Oe(e){if(!a.staticMoving&&Math.abs(P[1]-re[1])<ye){N.copy(re,P);return}let n=(P[1]-re[1])*a.zoomSpeed;if(n!==0){let e=Math.max(1,t.state.radius+t.state.radius*n);t.setState({radius:e})}a.staticMoving?N.copy(re,P):re[1]+=(P[1]-re[1])*_e(e)}let G=N(),ke=g(),Ae=g();function je(n){if(N.sub(G,N.copy(G,ie),F),!a.staticMoving&&N.squaredMagnitude(G)<10000000000000002e-26)N.copy(F,ie);else if(N.squaredMagnitude(G)){let r=e.pixelRatio*a.panSpeed;G[0]*=1/t.zoom*t.viewport.width*r,G[1]*=1/t.zoom*t.viewport.height*r,g.cross(Ae,g.copy(Ae,w),t.up),g.setMagnitude(Ae,Ae,G[0]),g.setMagnitude(ke,t.up,G[1]),g.add(Ae,Ae,ke),g.add(t.position,t.position,Ae),g.add(t.target,t.target,Ae),a.staticMoving?N.copy(F,ie):(N.sub(G,ie,F),N.scale(G,G,_e(n)),N.add(F,F,G))}}let K={moveUp:0,moveDown:0,moveLeft:0,moveRight:0,moveForward:0,moveBack:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0,boostMove:0},q=g(),Me=g();function Ne(r){g.sub(Me,t.position,t.target);let i=Math.max(t.state.minNear,a.minDistance);g.setMagnitude(Me,Me,i);let o=a.flyMode||e.pointerLock,s=60/1e3*r*a.moveSpeed*(K.boostMove===1?a.boostMoveFactor:1);if(K.moveForward===1&&(g.distance(t.position,n.boundingSphereVisible.center)<n.boundingSphereVisible.radius&&o?(g.normalize(q,Me),g.scaleAndSub(t.position,t.position,q,s)):(g.sub(q,t.position,t.target),g.scale(q,q,1-s/100),g.add(t.position,t.target,q)),o&&g.sub(t.target,t.position,Me)),K.moveBack===1&&(g.distance(t.position,n.boundingSphereVisible.center)<n.boundingSphereVisible.radius&&o?(g.normalize(q,Me),g.scaleAndAdd(t.position,t.position,q,s)):(g.sub(q,t.position,t.target),g.scale(q,q,1+s/100),g.add(t.position,t.target,q)),o&&g.sub(t.target,t.position,Me)),K.moveLeft===1&&(g.cross(q,Me,t.up),g.normalize(q,q),o?(g.scaleAndAdd(t.position,t.position,q,s),g.sub(t.target,t.position,Me)):(g.scaleAndSub(t.position,t.position,q,s),g.sub(t.target,t.position,w))),K.moveRight===1&&(g.cross(q,Me,t.up),g.normalize(q,q),o?(g.scaleAndSub(t.position,t.position,q,s),g.sub(t.target,t.position,Me)):(g.scaleAndAdd(t.position,t.position,q,s),g.sub(t.target,t.position,w))),K.moveUp===1&&(g.normalize(q,t.up),o?(g.scaleAndAdd(t.position,t.position,q,s),g.sub(t.target,t.position,Me)):(g.scaleAndSub(t.position,t.position,q,s),g.sub(t.target,t.position,w))),K.moveDown===1&&(g.normalize(q,t.up),o?(g.scaleAndSub(t.position,t.position,q,s),g.sub(t.target,t.position,Me)):(g.scaleAndAdd(t.position,t.position,q,s),g.sub(t.target,t.position,w))),o){let e=g.distance(t.position,n.boundingSphereVisible.center);t.setState({minFar:e+n.boundingSphereVisible.radius})}}function Pe(){let e=Math.min(Math.max(t.state.radiusMax*1e3,.01),a.maxDistance);g.squaredMagnitude(w)>e*e&&(g.setMagnitude(w,w,e),g.add(t.position,t.target,w),N.copy(M,ne),N.copy(re,P)),g.squaredMagnitude(w)<a.minDistance*a.minDistance&&(g.setMagnitude(w,w,a.minDistance),g.add(t.position,t.target,w),N.copy(M,ne),N.copy(re,P))}function Fe(t,n){return t*=e.pixelRatio,n*=e.pixelRatio,t>c.x+c.width||e.height-n>c.y+c.height||t<c.x||e.height-n<c.y}let Ie=-1;function Le(e){if(Ie===e)return;let n=e-Ie;Ie>0&&(a.animate.name===`spin`?nt(n):a.animate.name===`rock`&&Y(n)),g.sub(w,t.position,t.target),be(n),H(n),we(n),De(n),W(n),Oe(n),je(n),g.add(t.position,t.target,w),Pe(),Ie>0&&Ne(Math.min(n,250)),g.sub(w,t.position,t.target),Pe(),g.squaredDistance(C,t.position)>1e-6&&g.copy(C,t.position),Ie=e}function Re(){g.copy(t.target,I),g.copy(t.position,ae),g.copy(t.up,oe),g.sub(w,t.position,t.target),g.copy(C,t.position)}function ze({x:n,y:r,dx:i,dy:a,pageX:o,pageY:l,buttons:u,modifiers:d,isStart:f,useDelta:p}){let m=!p&&Fe(n,r);if(f&&m||!f&&!S)return;S=!0,it();let h=$.match(s.dragRotate,u,d),_=$.match(s.dragRotateZ,u,d),v=$.match(s.dragPan,u,d),y=$.match(s.dragZoom,u,d),b=$.match(s.dragFocus,u,d),x=$.match(s.dragFocusZoom,u,d);p&&h&&N.copy(T,se(o-i,l-a)),se(o,l),z(o,l);let C=e.pixelRatio,w=(n*C-c.width/2-c.x)/c.width,D=-(e.height-r*C-c.height/2-c.y)/c.height;if(f&&(h&&(N.copy(E,B),N.copy(T,E)),_&&(N.set(te,w,D),N.copy(ee,te)),(y||x)&&(N.copy(M,R),N.copy(ne,M)),b&&(N.copy(re,R),N.copy(P,re)),v&&(N.copy(F,R),N.copy(ie,F))),h&&N.copy(E,B),_&&N.set(te,w,D),(y||x)&&N.copy(ne,R),b&&N.copy(P,R),x){let e=g.distance(t.state.position,t.state.target);t.setState({radius:e/5})}v&&N.copy(ie,R)}function Be(){S=!1}function Ve({x:e,y:t,spinX:n,spinY:r,dz:i,buttons:o,modifiers:c}){if(Fe(e,t))return;let l=v(n*.075,r*.075,i*1e-4);l<-a.maxWheelDelta?l=-a.maxWheelDelta:l>a.maxWheelDelta&&(l=a.maxWheelDelta),$.match(s.scrollZoom,o,c)&&(ne[1]+=l),$.match(s.scrollFocus,o,c)&&(P[1]+=l)}function He({isStart:e,startX:t,startY:n,centerPageX:r,centerPageY:i,fractionDelta:o,buttons:c,modifiers:l}){if(Fe(t,n))return;let u=$.match(s.dragPan,c,l),d=$.match(s.scrollZoom,c,l);S=u||d,u&&(z(r,i),e?(N.copy(F,R),N.copy(ie,F)):N.copy(ie,R)),d&&(ne[1]+=a.gestureScaleFactor*o)}function Ue({movementX:t,movementY:n}){if(!e.pointerLock||t===void 0||n===void 0)return;let r=c.width*.5-c.x,i=c.height*.5-c.y;N.copy(T,se(r,i)),N.copy(E,se(t+r,n+i))}function We({modifiers:t,code:n,key:r,x:i,y:a}){Fe(i,a)||($.matchKey(s.keyMoveForward,n,t,r)?K.moveForward=1:$.matchKey(s.keyMoveBack,n,t,r)?K.moveBack=1:$.matchKey(s.keyMoveLeft,n,t,r)?K.moveLeft=1:$.matchKey(s.keyMoveRight,n,t,r)?K.moveRight=1:$.matchKey(s.keyMoveUp,n,t,r)?K.moveUp=1:$.matchKey(s.keyMoveDown,n,t,r)?K.moveDown=1:$.matchKey(s.keyRollLeft,n,t,r)?K.rollLeft=1:$.matchKey(s.keyRollRight,n,t,r)?K.rollRight=1:$.matchKey(s.keyPitchUp,n,t,r)?K.pitchUp=1:$.matchKey(s.keyPitchDown,n,t,r)?K.pitchDown=1:$.matchKey(s.keyYawLeft,n,t,r)?K.yawLeft=1:$.matchKey(s.keyYawRight,n,t,r)&&(K.yawRight=1),$.matchKey(s.boostMove,n,t,r)&&(K.boostMove=1),$.matchKey(s.enablePointerLock,n,t,r)&&e.requestPointerLock(c))}function Ge({modifiers:e,code:t,key:n,x:r,y:i}){if(Fe(r,i))return;let a=!1;t.startsWith(`Alt`)?(a=!0,e.alt=!0):t.startsWith(`Shift`)?(a=!0,e.shift=!0):t.startsWith(`Control`)?(a=!0,e.control=!0):t.startsWith(`Meta`)&&(a=!0,e.meta=!0);let o=[];a?(K.moveForward&&o.push(s.keyMoveForward.triggers[0]?.code||``),K.moveBack&&o.push(s.keyMoveBack.triggers[0]?.code||``),K.moveLeft&&o.push(s.keyMoveLeft.triggers[0]?.code||``),K.moveRight&&o.push(s.keyMoveRight.triggers[0]?.code||``),K.moveUp&&o.push(s.keyMoveUp.triggers[0]?.code||``),K.moveDown&&o.push(s.keyMoveDown.triggers[0]?.code||``),K.rollLeft&&o.push(s.keyRollLeft.triggers[0]?.code||``),K.rollRight&&o.push(s.keyRollRight.triggers[0]?.code||``),K.pitchUp&&o.push(s.keyPitchUp.triggers[0]?.code||``),K.pitchDown&&o.push(s.keyPitchDown.triggers[0]?.code||``),K.yawLeft&&o.push(s.keyYawLeft.triggers[0]?.code||``),K.yawRight&&o.push(s.keyYawRight.triggers[0]?.code||``)):o.push(t);for(let t of o)$.matchKey(s.keyMoveForward,t,e,n)?K.moveForward=0:$.matchKey(s.keyMoveBack,t,e,n)?K.moveBack=0:$.matchKey(s.keyMoveLeft,t,e,n)?K.moveLeft=0:$.matchKey(s.keyMoveRight,t,e,n)?K.moveRight=0:$.matchKey(s.keyMoveUp,t,e,n)?K.moveUp=0:$.matchKey(s.keyMoveDown,t,e,n)?K.moveDown=0:$.matchKey(s.keyRollLeft,t,e,n)?K.rollLeft=0:$.matchKey(s.keyRollRight,t,e,n)?K.rollRight=0:$.matchKey(s.keyPitchUp,t,e,n)?K.pitchUp=0:$.matchKey(s.keyPitchDown,t,e,n)?K.pitchDown=0:$.matchKey(s.keyYawLeft,t,e,n)?K.yawLeft=0:$.matchKey(s.keyYawRight,t,e,n)&&(K.yawRight=0);$.matchKey(s.boostMove,t,e,n)&&(K.boostMove=0)}function Ke(){g.sub(Me,t.position,t.target);let e=Math.max(t.state.minNear,a.minDistance);g.setMagnitude(Me,Me,e),g.sub(t.target,t.position,Me);let r=g.distance(t.position,n.boundingSphereVisible.center);t.setState({minFar:r+n.boundingSphereVisible.radius})}function qe(){let{center:e,radius:r}=n.boundingSphereVisible;if(g.distance(t.position,e)>r){let n=t.getFocus(e,r);t.setState({...n,minFar:0})}else t.setState({minFar:0,radius:n.boundingSphereVisible.radius})}function Je(e){e?Ke():qe()}function Ye(){K.moveForward=0,K.moveBack=0,K.moveLeft=0,K.moveRight=0,K.moveUp=0,K.moveDown=0,K.rollLeft=0,K.rollRight=0,K.pitchUp=0,K.pitchDown=0,K.yawLeft=0,K.yawRight=0,K.boostMove=0}function Xe(){Ye()}function Ze(){l||(l=!0,u.unsubscribe(),f.unsubscribe(),p.unsubscribe(),d.unsubscribe(),m.unsubscribe(),h.unsubscribe(),_.unsubscribe(),y.unsubscribe(),x.unsubscribe())}let Qe=b(),$e=g(),et=g(),tt=g(),J=g();function nt(e){if(a.animate.name!==`spin`||a.animate.params.speed===0||S)return;let n=e*(2*Math.PI*a.animate.params.speed/1e3);g.sub(w,t.position,t.target),g.normalize(J,w),g.normalize(et,t.up),g.cross(tt,et,J),g.normalize(tt,tt);let r=a.animate.params.axis;g.set($e,r[0]*tt[0]+r[1]*et[0]+r[2]*J[0],r[0]*tt[1]+r[1]*et[1]+r[2]*J[1],r[0]*tt[2]+r[1]*et[2]+r[2]*J[2]),g.normalize($e,$e),b.setAxisAngle(Qe,$e,n),g.transformQuat(w,w,Qe),g.transformQuat(t.up,t.up,Qe),g.add(t.position,t.target,w)}let rt=0;function Y(e){if(a.animate.name!==`rock`||a.animate.params.speed===0||S)return;let n=e/1e3*a.animate.params.speed,r=L(a.animate.params.angle),i=Math.sin(rt*Math.PI*2)*r,o=Math.sin((rt+n)*Math.PI*2)*r-i;g.sub(w,t.position,t.target),g.normalize(J,w),g.normalize(et,t.up),g.cross(tt,et,J),g.normalize(tt,tt);let s=a.animate.params.axis;g.set($e,s[0]*tt[0]+s[1]*et[0]+s[2]*J[0],s[0]*tt[1]+s[1]*et[1]+s[2]*J[1],s[0]*tt[2]+s[1]*et[2]+s[2]*J[2]),g.normalize($e,$e),b.setAxisAngle(Qe,$e,o),g.transformQuat(w,w,Qe),g.transformQuat(t.up,t.up,Qe),g.add(t.position,t.target,w),rt+=n,rt>=1&&(rt=0)}function it(){rt=0}function X(e){Ie=-1,Le(e)}return{viewport:c,get isAnimating(){return a.animate.name!==`off`},get isMoving(){return K.moveForward===1||K.moveBack===1||K.moveLeft===1||K.moveRight===1||K.moveUp===1||K.moveDown===1||K.rollLeft===1||K.rollRight===1||K.pitchUp===1||K.pitchDown===1||K.yawLeft===1||K.yawRight===1},get props(){return a},setProps:e=>{e.animate?.name===`rock`&&a.animate.name!==`rock`&&it(),e.flyMode!==void 0&&e.flyMode!==a.flyMode&&(e.flyMode?Ke():qe()),Object.assign(a,e)},get attribs(){return o},setAttribs:e=>{Object.assign(o,e),Object.assign(s,o.bindings)},start:X,update:Le,reset:Re,dispose:Ze}}e.create=t})(Aa||={})})))()}function Ma(e,t){let n=Vt.createState(512,256,t),r=.05*e,i=g.scale(g(),g.unitX,e),a=g.scale(g(),g.unitY,e),o=g.scale(g(),g.unitZ,e),s={radiusTop:r,radiusBottom:r,radialSegments:32};return n.currentGroup=Ba.TranslateScreenXY,zt(n,g.origin,r*3,2),n.currentGroup=Ba.TranslateObjectX,zt(n,i,r,2),Bt(n,g.origin,i,1,s),n.currentGroup=Ba.TranslateObjectY,zt(n,a,r,2),Bt(n,g.origin,a,1,s),n.currentGroup=Ba.TranslateObjectZ,zt(n,o,r,2),Bt(n,g.origin,o,1,s),Vt.getMesh(n)}function Na(e,t,n){return Ue(`handle`,e,[{groupId:t,instanceId:n}],t=>e.getBoundingSphere(t,n),()=>`Handle Helper | Group Id ${t} | Instance Id ${n}`)}function Pa(e){return e.kind===`data-loci`&&e.tag===`handle`}function Fa(e,t){let n=10*e.scale,r=Ma(n,t?.geometry);return r.setBoundingSphere(G.create(g.create(n/2,n/2,n/2),n+n/4)),sn(`handle`,{},r,t=>{switch(t){case Ba.TranslateObjectX:return e.colorX;case Ba.TranslateObjectY:return e.colorY;case Ba.TranslateObjectZ:return e.colorZ;default:return ge.grey}},()=>1,()=>``)}function Ia(e){let t=Fa(e);return Wt(t,e)}var La,Ra,za,Ba;function Va(){return(Va=e((()=>{Qt(),$t(),Rt(),W(),It(),vt(),he(),Ft(),P(),je(),R(),_e(),Re(),Pe(),Fe(),q(),La={...pt.Params,alpha:{...pt.Params.alpha,defaultValue:1},ignoreLight:{...pt.Params.ignoreLight,defaultValue:!0},colorX:V.Color(ge.red,{isEssential:!0}),colorY:V.Color(ge.green,{isEssential:!0}),colorZ:V.Color(ge.blue,{isEssential:!0}),scale:V.Numeric(.33,{min:.1,max:2,step:.1},{isEssential:!0})},Ra={handle:V.MappedStatic(`off`,{on:V.Group(La),off:V.Group({})},{cycle:!0,description:`Show handle tool`})},za=class{getBoundingSphere(e,t){return this.renderObject&&(G.copy(e,this.renderObject.values.invariantBoundingSphere.ref.value),A.fromArray(this._transform,this.renderObject.values.aTransform.ref.value,t*16),G.transform(e,e,this._transform)),e}setProps(e){this.props=ye(this.props,t=>{if(e.handle!==void 0&&(t.handle.name=e.handle.name,e.handle.name===`on`)){this.scene.clear(),this.pixelRatio=this.webgl.pixelRatio;let n={...e.handle.params,scale:e.handle.params.scale*this.webgl.pixelRatio,cellSize:0};this.renderObject=Ia(n),this.scene.add(this.renderObject),this.scene.commit(),t.handle.params={...e.handle.params}}})}get isEnabled(){return this.props.handle.name===`on`}update(e,t,n){this.renderObject&&(this.pixelRatio!==this.webgl.pixelRatio&&this.setProps(this.props),A.setTranslation(this.renderObject.values.aTransform.ref.value,t),A.fromMat3(this.renderObject.values.aTransform.ref.value,n),z.update(this.renderObject.values.aTransform,this.renderObject.values.aTransform.ref.value),this.scene.update([this.renderObject],!0))}getLoci(e){let{objectId:t,groupId:n,instanceId:r}=e;return!this.renderObject||t!==this.renderObject.id?Ve:Na(this,n,r)}mark(e,t){return!Ie.is(Ie.Highlighting,t)||!ze(e)&&(!Pa(e)||e.data!==this)?!1:Le.mark(this.renderObject,e,t,this.eachGroup)}constructor(e,t={}){this.webgl=e,this.props={handle:{name:`off`,params:{}}},this.pixelRatio=1,this._transform=A(),this.eachGroup=(e,t)=>{if(!this.renderObject||!Pa(e))return!1;let n=!1,r=this.renderObject.values.uGroupCount.ref.value,{elements:i}=e;for(let{groupId:e,instanceId:a}of i){let i=a*r+e;t(Ee.ofSingleton(i))&&(n=!0)}return n},this.scene=qt.create(e,`blended`),this.setProps(t)}},Ba={None:0,TranslateScreenXY:1,TranslateObjectX:3,TranslateObjectY:4,TranslateObjectZ:5}})))()}var Ha;function Ua(){return(Ua=e((()=>{i(),Ha=class{constructor(e,t){this.entries=new Map,this.ctx=e,this.parent=t}register(e,t){this.entries.has(e)&&(s&&console.warn(`Debug helper with name '${e}' already exists, replacing.`),this.entries.get(e).clear()),this.entries.set(e,t)}unregister(e){let t=this.entries.get(e);t&&(t.clear(),this.entries.delete(e))}get scenes(){return Array.from(this.entries.values()).map(e=>e.scene)}update(){this.entries.forEach(e=>{e.isEnabled&&e.update()})}syncVisibility(){this.entries.forEach(e=>{e.syncVisibility()})}clear(){this.entries.forEach(e=>{e.clear()})}get isEnabled(){let e=!1;return this.entries.forEach(t=>{t.isEnabled&&(e=!0)}),e}setProps(e){this.entries.forEach(t=>{t.setProps(e)})}}})))()}function Wa(e,t,n,r){let i=g.scale(Xa,n.state.position,r),a=g.distance(e,i);return 2*Math.tan(n.state.fov/2)*a/n.viewport.height*t}function Ga(e,t){let n=Vt.createState(512,256,t),r=5e-4,i={radiusTop:r,radiusBottom:r,radialSegments:32},{modelScale:a,camera:o,pixels:s}=e;n.currentGroup=0;for(let t of e.pointers){Lt(n,t,.2,i);let e=Wa(t.origin,s,o,a);zt(n,t.origin,e,1)}for(let t of e.points){let e=Wa(t,s,o,a);zt(n,t,e,1)}if(e.hit){n.currentGroup=1;let t=Wa(e.hit,s,o,a);zt(n,e.hit,t,1)}return Vt.getMesh(n)}function Ka(e,t,n){let r=Ga(e,n?.geometry);return sn(`pointer-mesh`,e,r,e=>{switch(e){case 1:return t.hitColor;default:return t.color}},()=>1,()=>``,void 0,2)}function qa(e,t){return Wt(e,{...V.getDefaultValues(pt.Params),...t,ignoreLight:t.ignoreLight,cellSize:0})}var Ja,Ya,Xa;function Za(){return(Za=e((()=>{Qt(),$t(),Rt(),W(),vt(),he(),P(),R(),wt(),Ft(),It(),Jt(),cn(),Ja={...pt.Params,enabled:V.Select(`off`,V.arrayToOptions([`on`,`off`]),{isEssential:!0}),ignoreLight:{...pt.Params.ignoreLight,defaultValue:!0},color:V.Color(ge.grey,{isEssential:!0}),hitColor:V.Color(ge.pink,{isEssential:!0})},Ya=class{setProps(e){Object.assign(this.props,e),this.isEnabled&&this.update(this.pointers,this.points,this.hit)}ensureEnabled(){this.props.enabled!==`on`&&(this.props.enabled=`on`)}get isEnabled(){return this.props.enabled===`on`}setCamera(e){an.copySnapshot(this.camera.state,e.state),Ut.copy(this.camera.viewport,e.viewport),A.copy(this.camera.view,e.view),A.copy(this.camera.projection,e.projection),A.copy(this.camera.projectionView,e.projectionView),A.copy(this.camera.headRotation,e.headRotation),an.copyViewOffset(this.camera.viewOffset,e.viewOffset),this.camera.far=e.far,this.camera.near=e.near,this.camera.fogFar=e.fogFar,this.camera.fogNear=e.fogNear,this.camera.forceFull=e.forceFull,this.camera.scale=1,this.modelScale=e.scale}update(e,t,n){this.pointers=e,this.points=t,this.hit=n,this.props.enabled===`on`?(this.shape=Ka(this.getData(),this.props,this.shape),z.updateIfChanged(this.renderObject.values.drawCount,Ot.getDrawCount(this.shape.geometry)),z.updateIfChanged(this.renderObject.values.uVertexCount,Ot.getVertexCount(this.shape.geometry)),z.updateIfChanged(this.renderObject.values.uGroupCount,2),pt.Utils.updateBoundingSphere(this.renderObject.values,this.shape.geometry),pt.Utils.updateValues(this.renderObject.values,this.props),pt.Utils.updateRenderableState(this.renderObject.state,this.props),this.renderObject.state.visible=!0,this.scene.update(void 0,!1),this.scene.commit()):this.renderObject&&(this.renderObject.state.visible=!1)}getData(){return{pointers:this.pointers,points:this.points,hit:this.hit,modelScale:this.modelScale,camera:this.camera,pixels:12}}constructor(e,t={}){this.pixelScale=1,this.modelScale=1,this.pointers=[],this.points=[],this.hit=void 0,this.scene=qt.create(e,`blended`),this.props={...V.getDefaultValues(Ja),...t},this.camera=new an,this.shape=Ka(this.getData(),this.props),this.renderObject=qa(this.shape,this.props),this.scene.add(this.renderObject)}},Xa=g()})))()}var Qa,$a,eo;function to(){return(to=e((()=>{R(),Ua(),Zt(),Va(),Za(),Qa={camera:V.Group({helper:V.Group(nn)}),handle:V.Group(Ra),pointer:V.Group(Ja)},$a=V.getDefaultValues(Qa),eo=class{constructor(e,t,n={}){let r={...$a,...n};this.debug=new Ha(e,t),this.camera=new rn(e,r.camera.helper),this.handle=new za(e,r.handle),this.pointer=new Ya(e,r.pointer)}}})))()}var no,ro,io,ao,oo;function so(){return(so=e((()=>{We(),oa(),ve(),W(),R(),Ne(),De(),no=g(),ro=g(),io=g(),ao={maxFps:V.Numeric(30,{min:10,max:60,step:10}),preferAtomPixelPadding:V.Numeric(3,{min:0,max:20,step:1},{description:`Number of extra pixels at which to prefer atoms over bonds.`}),convertCoordsToRay:V.Boolean(!1,{description:`Convert screen coordinates to ray for picking.`})},oo=class{setProps(e){Object.assign(this.props,e)}getTarget(){return this.ray?this.ray:this.props.convertCoordsToRay?this.camera.getRay(Oe(),this.endX,this.input.height-this.endY):N.create(this.endX,this.endY)}handleMove(){(this.startX!==this.endX||this.startY!==this.endY||this.input.pointerLock&&!this.controls.isMoving)&&(this.pickData=this.canvasAsyncIdentify(this.getTarget()),this.startX=this.endX,this.startY=this.endY)}handleClick(){let e=this.canvasIdentify(this.getTarget()),t=this.getLoci(e?.id,e?.position);this.events.click.next({current:t,buttons:this.buttons,button:this.button,modifiers:this.modifiers,page:N.create(this.endX,this.endY),position:e?.position}),this.prevLoci=t}handleDrag(){(this.startX!==this.endX||this.startY!==this.endY||this.input.pointerLock&&!this.controls.isMoving)&&!this.outsideViewport(this.startX,this.startY,this.ray)&&(this.events.drag.next({current:this.prevLoci,buttons:this.buttons,button:this.button,modifiers:this.modifiers,pageStart:N.create(this.startX,this.startY),pageEnd:N.create(this.endX,this.endY)}),this.startX=this.endX,this.startY=this.endY)}tick(e){if(this.inside){if(this.pickData){let e=this.pickData.tryGet();if(e!==`pending`){if(this.position=e?.position,this.inside){let t=this.getLoci(e?.id,e?.position);this.events.hover.next({current:t,buttons:this.buttons,button:this.button,modifiers:this.modifiers,page:N.create(this.endX,this.endY),position:e?.position}),this.prevLoci=t}this.pickData=void 0}}e-this.prevT>1e3/this.props.maxFps&&(this.prevT=e,this.isInteracting?this.handleDrag():this.handleMove())}}leave(){this.inside=!1,Ke.Loci.isEmpty(this.prevLoci)||(this.prevLoci=Ke.Loci.Empty,this.events.hover.next({current:this.prevLoci,buttons:this.buttons,button:this.button,modifiers:this.modifiers}))}move(e,t,n,r,i,a){this.inside=!0,this.buttons=n,this.button=r,this.modifiers=i,this.ray=a,this.endX=e,this.endY=t}click(e,t,n,r,i,a){this.endX=e,this.endY=t,this.buttons=n,this.button=r,this.modifiers=i,this.ray=a,this.handleClick()}drag(e,t,n,r,i){this.endX=e,this.endY=t,this.buttons=n,this.button=r,this.modifiers=i,this.handleDrag()}modify(e){na.areEqual(e,this.modifiers)||(this.modifiers=e,this.events.hover.next({current:this.prevLoci,buttons:this.buttons,button:this.button,modifiers:this.modifiers,page:N.create(this.endX,this.endY),position:this.position}))}outsideViewport(e,t,n){if(n)return!1;let{input:r,camera:{viewport:i}}=this;return e*=r.pixelRatio,t*=r.pixelRatio,e>i.x+i.width||r.height-t>i.y+i.height||e<i.x||r.height-t<i.y}getLoci(e,t){let{repr:n,loci:r}=this.lociGetter(e);if(t&&n&&Me.isLoci(r)&&r.bonds.length===2){let{aUnit:e,aIndex:i}=r.bonds[0];e.conformation.position(e.elements[i],no),g.sub(io,this.camera.state.position,this.camera.state.target),g.projectPointOnPlane(ro,t,io,no);let a=this.camera.getPixelSize(ro),o=n.theme.size.size(r.bonds[0])*(n.props.sizeFactor??1);if(n.props.lineSizeAttenuation===!1&&(o*=a/2),o+=this.props.preferAtomPixelPadding*a,g.distance(ro,no)<o)return{repr:n,loci:Me.toFirstStructureElementLoci(r)}}return{repr:n,loci:r}}resetTime(e){this.prevT=e}dispose(){this.ev.dispose()}constructor(e,t,n,r,i,a,o={}){this.canvasIdentify=e,this.canvasAsyncIdentify=t,this.lociGetter=n,this.input=r,this.camera=i,this.controls=a,this.ev=be.create(),this.events={hover:this.ev(),drag:this.ev(),click:this.ev()},this.startX=-1,this.startY=-1,this.endX=-1,this.endY=-1,this.ray=void 0,this.pickData=void 0,this.position=void 0,this.isInteracting=!1,this.prevLoci=Ke.Loci.Empty,this.prevT=0,this.inside=!1,this.buttons=Q.create(0),this.button=Q.create(0),this.modifiers=na.None,this.props={...V.getDefaultValues(ao),...o},r.drag.subscribe(({x:e,y:t,buttons:n,button:r,modifiers:i})=>{this.isInteracting=!0,this.drag(e,t,n,r,i)}),r.move.subscribe(({x:e,y:t,inside:n,buttons:r,button:i,modifiers:a,onElement:o,ray:s})=>{n&&!this.isInteracting&&(o?this.move(e,t,r,i,a,s):this.leave())}),r.leave.subscribe(()=>{this.leave()}),r.click.subscribe(({x:e,y:t,buttons:n,button:r,modifiers:i,ray:a})=>{this.outsideViewport(e,t,a)||this.click(e,t,n,r,i,a)}),r.interactionEnd.subscribe(()=>{this.isInteracting=!1}),r.modifiers.subscribe(e=>{this.modify(e)})}}})))()}function co(e){return e.isWebGL2?!0:(s&&!fo&&(console.log(`WebGL2 required for async picking. Falling back to synchronous picking.`),fo=!0),!1)}var lo,uo,fo,po,mo;function ho(){return(ho=e((()=>{Ge(),_i(),$e(),i(),a(),At(),cn(),lo={pickPadding:1,maxAsyncReadLag:5},uo=class{constructor(e,t,n,r){this.webgl=e,this.width=t,this.height=n,this.pickScale=r;let i=r/e.pixelRatio;this.pickWidth=Math.ceil(t*i),this.pickHeight=Math.ceil(n*i);let{resources:a,extensions:{drawBuffers:o},gl:s}=e;o?(this.objectPickTexture=a.texture(`image-uint8`,`rgba`,`ubyte`,`nearest`),this.objectPickTexture.define(this.pickWidth,this.pickHeight),this.instancePickTexture=a.texture(`image-uint8`,`rgba`,`ubyte`,`nearest`),this.instancePickTexture.define(this.pickWidth,this.pickHeight),this.groupPickTexture=a.texture(`image-uint8`,`rgba`,`ubyte`,`nearest`),this.groupPickTexture.define(this.pickWidth,this.pickHeight),this.depthPickTexture=a.texture(`image-uint8`,`rgba`,`ubyte`,`nearest`),this.depthPickTexture.define(this.pickWidth,this.pickHeight),this.framebuffer=a.framebuffer(),this.objectPickFramebuffer=a.framebuffer(),this.instancePickFramebuffer=a.framebuffer(),this.groupPickFramebuffer=a.framebuffer(),this.depthPickFramebuffer=a.framebuffer(),this.framebuffer.bind(),o.drawBuffers([o.COLOR_ATTACHMENT0,o.COLOR_ATTACHMENT1,o.COLOR_ATTACHMENT2,o.COLOR_ATTACHMENT3]),this.objectPickTexture.attachFramebuffer(this.framebuffer,`color0`),this.instancePickTexture.attachFramebuffer(this.framebuffer,`color1`),this.groupPickTexture.attachFramebuffer(this.framebuffer,`color2`),this.depthPickTexture.attachFramebuffer(this.framebuffer,`color3`),this.depthRenderbuffer=a.renderbuffer(rt(s)?`depth32f-stencil8`:`depth-stencil`,`depth-stencil`,this.pickWidth,this.pickHeight),this.depthRenderbuffer.attachFramebuffer(this.framebuffer),this.objectPickTexture.attachFramebuffer(this.objectPickFramebuffer,`color0`),this.instancePickTexture.attachFramebuffer(this.instancePickFramebuffer,`color0`),this.groupPickTexture.attachFramebuffer(this.groupPickFramebuffer,`color0`),this.depthPickTexture.attachFramebuffer(this.depthPickFramebuffer,`color0`)):(this.objectPickTarget=e.createRenderTarget(this.pickWidth,this.pickHeight,`depth-stencil`),this.instancePickTarget=e.createRenderTarget(this.pickWidth,this.pickHeight,`depth-stencil`),this.groupPickTarget=e.createRenderTarget(this.pickWidth,this.pickHeight,`depth-stencil`),this.depthPickTarget=e.createRenderTarget(this.pickWidth,this.pickHeight,`depth-stencil`))}getByteCount(){return this.webgl.extensions.drawBuffers?this.objectPickTexture.getByteCount()+this.instancePickTexture.getByteCount()+this.groupPickTexture.getByteCount()+this.depthPickTexture.getByteCount()+this.depthRenderbuffer.getByteCount():this.objectPickTarget.getByteCount()+this.instancePickTarget.getByteCount()+this.groupPickTarget.getByteCount()+this.depthPickTarget.getByteCount()}dispose(){this.webgl.extensions.drawBuffers?(this.framebuffer.destroy(),this.objectPickTexture.destroy(),this.instancePickTexture.destroy(),this.groupPickTexture.destroy(),this.depthPickTexture.destroy(),this.objectPickFramebuffer.destroy(),this.instancePickFramebuffer.destroy(),this.groupPickFramebuffer.destroy(),this.depthPickFramebuffer.destroy(),this.depthRenderbuffer.destroy()):(this.objectPickTarget.destroy(),this.instancePickTarget.destroy(),this.groupPickTarget.destroy(),this.depthPickTarget.destroy())}get pickRatio(){return this.pickScale/this.webgl.pixelRatio}setPickScale(e){this.pickScale=e,this.setSize(this.width,this.height)}bindObject(){this.webgl.extensions.drawBuffers?this.objectPickFramebuffer.bind():this.objectPickTarget.bind()}bindInstance(){this.webgl.extensions.drawBuffers?this.instancePickFramebuffer.bind():this.instancePickTarget.bind()}bindGroup(){this.webgl.extensions.drawBuffers?this.groupPickFramebuffer.bind():this.groupPickTarget.bind()}bindDepth(){this.webgl.extensions.drawBuffers?this.depthPickFramebuffer.bind():this.depthPickTarget.bind()}get drawingBufferHeight(){return this.height}setSize(e,t){this.width=e,this.height=t;let n=this.pickScale/this.webgl.pixelRatio,r=Math.ceil(this.width*n),i=Math.ceil(this.height*n);(r!==this.pickWidth||i!==this.pickHeight)&&(this.pickWidth=r,this.pickHeight=i,this.webgl.extensions.drawBuffers?(this.objectPickTexture.define(this.pickWidth,this.pickHeight),this.instancePickTexture.define(this.pickWidth,this.pickHeight),this.groupPickTexture.define(this.pickWidth,this.pickHeight),this.depthPickTexture.define(this.pickWidth,this.pickHeight),this.depthRenderbuffer.setSize(this.pickWidth,this.pickHeight)):(this.objectPickTarget.setSize(this.pickWidth,this.pickHeight),this.instancePickTarget.setSize(this.pickWidth,this.pickHeight),this.groupPickTarget.setSize(this.pickWidth,this.pickHeight),this.depthPickTarget.setSize(this.pickWidth,this.pickHeight)))}reset(){let{drawBuffers:e}=this.webgl.extensions;e&&(this.framebuffer.bind(),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1,e.COLOR_ATTACHMENT2,e.COLOR_ATTACHMENT3]),this.objectPickTexture.attachFramebuffer(this.framebuffer,`color0`),this.instancePickTexture.attachFramebuffer(this.framebuffer,`color1`),this.groupPickTexture.attachFramebuffer(this.framebuffer,`color2`),this.depthPickTexture.attachFramebuffer(this.framebuffer,`color3`),this.depthRenderbuffer.attachFramebuffer(this.framebuffer),this.objectPickTexture.attachFramebuffer(this.objectPickFramebuffer,`color0`),this.instancePickTexture.attachFramebuffer(this.instancePickFramebuffer,`color0`),this.groupPickTexture.attachFramebuffer(this.groupPickFramebuffer,`color0`),this.depthPickTexture.attachFramebuffer(this.depthPickFramebuffer,`color0`))}renderVariant(e,t,n,r,i,a,o){e.clear(!1),e.update(t,n,o),e.renderPick(n.primitives,t,i,a),r.handle.isEnabled&&e.renderPick(r.handle.scene,t,i,a),r.camera.isEnabled&&(r.camera.update(t),e.update(r.camera.camera,r.camera.scene,o),e.renderPick(r.camera.scene,r.camera.camera,i,a))}render(e,t,n,r,i){this.webgl.extensions.drawBuffers?(this.framebuffer.bind(),this.renderVariant(e,t,n,r,`pick`,fi.None,i)):(this.objectPickTarget.bind(),this.renderVariant(e,t,n,r,`pick`,fi.Object,i),this.instancePickTarget.bind(),this.renderVariant(e,t,n,r,`pick`,fi.Instance,i),this.groupPickTarget.bind(),this.renderVariant(e,t,n,r,`pick`,fi.Group,i),this.depthPickTarget.bind(),this.renderVariant(e,t,n,r,`depth`,fi.None,i))}},fo=!1,po=function(e){return e[e.Pending=0]=`Pending`,e[e.Resolved=1]=`Resolved`,e[e.Failed=2]=`Failed`,e}({}),mo=class{setup(){let e=this.viewport.width*this.viewport.height*4;(!this.object||this.object.length!==e)&&(this.object=new Uint8Array(e),this.instance=new Uint8Array(e),this.group=new Uint8Array(e),this.depth=new Uint8Array(e))}setViewport(e,t,n,r){Ut.set(this.viewport,e,t,n,r),this.setup()}read(){o&&this.webgl.timer.mark(`PickBuffers.read`);let{x:e,y:t,width:n,height:r}=this.viewport;this.pickPass.bindObject(),this.webgl.readPixels(e,t,n,r,this.object),this.pickPass.bindInstance(),this.webgl.readPixels(e,t,n,r,this.instance),this.pickPass.bindGroup(),this.webgl.readPixels(e,t,n,r,this.group),this.pickPass.bindDepth(),this.webgl.readPixels(e,t,n,r,this.depth),this.ready=!0,o&&this.webgl.timer.markEnd(`PickBuffers.read`)}asyncRead(){let{gl:e}=this.webgl;if(!rt(e))return;o&&this.webgl.timer.mark(`PickBuffers.asyncRead`),this.fenceSync!==null&&e.deleteSync(this.fenceSync);let{x:t,y:r,width:i,height:a}=this.viewport;this.pickPass.bindObject(),this.objectBuffer.read(t,r,i,a),this.pickPass.bindInstance(),this.instanceBuffer.read(t,r,i,a),this.pickPass.bindGroup(),this.groupBuffer.read(t,r,i,a),this.pickPass.bindDepth(),this.depthBuffer.read(t,r,i,a),this.fenceTimestamp=n(),this.fenceSync=e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0),e.flush(),this.ready=!1,o&&this.webgl.timer.markEnd(`PickBuffers.asyncRead`)}check(){if(this.ready)return 1;if(this.fenceSync===null)return 2;let{gl:e}=this.webgl;if(!rt(e))return 2;let t=e.clientWaitSync(this.fenceSync,0,0);return t===e.WAIT_FAILED||this.lag>=this.maxAsyncReadLag?t!==e.WAIT_FAILED&&n()-this.fenceTimestamp<1e3/60?(this.lag+=1,0):(e.deleteSync(this.fenceSync),this.fenceSync=null,this.lag=0,this.ready=!1,2):t===e.TIMEOUT_EXPIRED?(this.lag+=1,0):(this.objectBuffer.getSubData(this.object),this.instanceBuffer.getSubData(this.instance),this.groupBuffer.getSubData(this.group),this.depthBuffer.getSubData(this.depth),e.deleteSync(this.fenceSync),this.fenceSync=null,this.lag=0,this.ready=!0,1)}getIdx(e,t){return(t*this.viewport.width+e)*4}getDepth(e,t){if(!this.ready)return-1;let n=this.getIdx(e,t),r=this.depth;return bt(r[n],r[n+1],r[n+2],r[n+3])}getId(e,t,n){if(!this.ready)return-1;let r=this.getIdx(e,t);return Et(n[r],n[r+1],n[r+2])}getObjectId(e,t){return this.getId(e,t,this.object)}getInstanceId(e,t){return this.getId(e,t,this.instance)}getGroupId(e,t){return this.getId(e,t,this.group)}getPickingId(e,t){let n=this.getObjectId(e,t);if(n===-1||n===qe.Null)return;let r=this.getInstanceId(e,t);if(r===-1||r===qe.Null)return;let i=this.getGroupId(e,t);if(i!==-1)return{objectId:n,instanceId:r,groupId:i}}reset(){this.fenceSync=null,this.ready=!1,this.lag=0,this.fenceTimestamp=0}dispose(){let{gl:e}=this.webgl;rt(e)&&(this.objectBuffer.destroy(),this.instanceBuffer.destroy(),this.groupBuffer.destroy(),this.depthBuffer.destroy(),this.fenceSync!==null&&(e.deleteSync(this.fenceSync),this.fenceSync=null))}constructor(e,t,n=5){this.webgl=e,this.pickPass=t,this.maxAsyncReadLag=n,this.viewport=Ut.create(0,0,0,0),this.fenceSync=null,this.fenceTimestamp=0,this.ready=!1,this.lag=0,e.isWebGL2&&(this.objectBuffer=e.resources.pixelPack(`rgba`,`ubyte`),this.instanceBuffer=e.resources.pixelPack(`rgba`,`ubyte`),this.groupBuffer=e.resources.pixelPack(`rgba`,`ubyte`),this.depthBuffer=e.resources.pixelPack(`rgba`,`ubyte`)),this.setup()}}})))()}var go;function _o(){return(_o=e((()=>{ht(),pe(),I(),i(),_a(),cn(),ho(),go=class{setViewport(e,t,n,r){Ut.set(this.viewport,e,t,n,r),this.update()}setPickPadding(e){this.pickPadding!==e&&(this.pickPadding=e,this.update())}update(){let{x:e,y:t,width:n,height:r}=this.viewport;this.pickRatio=this.pickPass.pickRatio,this.pickX=Math.ceil(e*this.pickRatio),this.pickY=Math.ceil(t*this.pickRatio);let i=Math.floor(n*this.pickRatio),a=Math.floor(r*this.pickRatio);(i!==this.pickWidth||a!==this.pickHeight)&&(this.pickWidth=i,this.pickHeight=a,this.halfPickWidth=Math.floor(this.pickWidth/2),this.buffers.setViewport(this.pickX,this.pickY,this.pickWidth,this.pickHeight)),this.spiral=ee(Math.ceil(this.pickRatio*this.pickPadding)),this.dirty=!0}render(e,t){o&&this.webgl.timer.mark(`PickHelper.render`,{captureStats:!0});let{pickX:n,pickY:r,pickWidth:i,pickHeight:a,halfPickWidth:s}=this,{renderer:c,scene:l,helper:u}=this,d=t??nt();c.setTransparentBackground(!1),c.setDrawingBufferSize(i,a),c.setPixelRatio(this.pickRatio),pa.is(e)?(c.setViewport(n,r,s,a),this.pickPass.render(c,e.left,l,u,d),c.setViewport(n+s,r,i-s,a),this.pickPass.render(c,e.right,l,u,d)):(c.setViewport(n,r,i,a),this.pickPass.render(c,e,l,u,d)),this.dirty=!1,o&&this.webgl.timer.markEnd(`PickHelper.render`)}identifyInternal(e,t,n){if(this.webgl.isContextLost)return;let{webgl:r,pickRatio:i}=this;if(r.isContextLost)return;e*=r.pixelRatio,t*=r.pixelRatio,t=this.pickPass.drawingBufferHeight-t;let{viewport:a}=this;if(e<a.x||t<a.y||e>a.x+a.width||t>a.y+a.height)return;let o=e-a.x,s=t-a.y,c=Math.floor(o*i),l=Math.floor(s*i),u=this.buffers.getPickingId(c,l);if(u===void 0)return;let d=this.buffers.getDepth(c,l),f=g.create(e,t,d);if(pa.is(n)){let t=Math.floor(a.width/2);e>a.x+t?(f[0]=a.x+(o-t)*2,Kt(f,f,a,n.right.inverseProjectionView)):(f[0]=a.x+o*2,Kt(f,f,a,n.left.inverseProjectionView))}else Kt(f,f,a,n.inverseProjectionView);return{id:u,position:f}}prepare(){this.pickRatio!==this.pickPass.pickRatio&&this.update()}getPickData(e,t,n){for(let r of this.spiral){let i=this.identifyInternal(e+r[0],t+r[1],n);if(i)return i}}identify(e,t,n,r){return this.prepare(),this.dirty&&(o&&this.webgl.timer.mark(`PickHelper.identify`),this.webgl.resources.finalizePrograms([`pick`],!0),this.render(n,r),this.buffers.read(),o&&this.webgl.timer.markEnd(`PickHelper.identify`)),this.getPickData(e,t,n)}asyncIdentify(e,t,n,r){return this.prepare(),this.dirty&&(o&&this.webgl.timer.mark(`PickHelper.asyncIdentify`),this.render(n,r),this.buffers.asyncRead(),o&&this.webgl.timer.markEnd(`PickHelper.asyncIdentify`)),{tryGet:()=>{let r=this.buffers.check();if(r===po.Resolved)return this.getPickData(e,t,n);if(r===po.Pending)return`pending`;r===po.Failed&&(this.dirty=!0)}}}reset(){this.buffers.reset(),this.dirty=!0}dispose(){this.buffers.dispose()}constructor(e,t,n,r,i,a,o){this.webgl=e,this.renderer=t,this.scene=n,this.helper=r,this.pickPass=i,this.dirty=!0,this.buffers=new mo(this.webgl,this.pickPass),this.viewport=Ut(),this.setViewport(a.x,a.y,a.width,a.height),this.pickPadding=o.pickPadding,co(e)||(this.asyncIdentify=(e,t,n,r)=>({tryGet:()=>this.identify(e,t,n,r)}))}}})))()}function vo(e,t,n){let{near:r,far:i,viewport:a}=e,o=2*Math.tan(L(.1)/2)*g.distance(e.position,e.target)*e.scale,s=a.height/o,c=-a.width/2,l=a.width/2,u=a.height/2,d=-a.height/2,f=(l-c)/(2*s),p=(u-d)/(2*s),m=(l+c)/2,h=(u+d)/2,_=m-f,v=m+f,y=h+p,x=h-p;A.ortho(e.projection,_,v,y,x,r,i);let S=g.normalize(g(),t.direction),C=b.fromUnitVec3(b(),S,g.negUnitZ);b.invert(C,C);let w=g.clone(t.origin),T=g.add(g(),w,S);A.lookAt(e.view,w,T,n)}var yo;function bo(){return(bo=e((()=>{ht(),De(),W(),I(),i(),Jt(),cn(),ho(),Te(),yo=class{setPickPadding(e){this.pickPadding!==e&&(this.pickPadding=e,this.update())}update(){let e=this.pickPadding*2+1;Ut.set(this.viewport,0,0,e,e),this.buffers.setViewport(0,0,e,e),this.spiral=ee(this.pickPadding),this.size=e,this.pickPass.setSize(e,e)}render(e){o&&this.webgl.timer.mark(`RayHelper.render`,{captureStats:!0});let{renderer:t,scene:n,helper:r}=this;t.setTransparentBackground(!1),t.setDrawingBufferSize(this.size,this.size),t.setPixelRatio(1),t.setViewport(0,0,this.size,this.size),this.pickPass.render(t,e,n,r,nt()),o&&this.webgl.timer.markEnd(`RayHelper.render`)}identifyInternal(e,t){if(this.webgl.isContextLost)return;let{viewport:n}=this,r=this.buffers.getPickingId(e,t);if(r===void 0)return;let i=this.buffers.getDepth(e,t),a=g.create(e,t,i);return Kt(a,a,n,this.camera.inverseProjectionView),{id:r,position:a}}prepare(e,t){this.camera.far=t.far,this.camera.near=t.near,this.camera.fogFar=t.fogFar,this.camera.fogNear=t.fogNear,this.camera.forceFull=t.forceFull,this.camera.scale=t.scale,Ut.copy(this.camera.viewport,this.viewport),an.copySnapshot(this.camera.state,{...t.state,mode:`orthographic`}),vo(this.camera,e,t.up),A.mul(this.camera.projectionView,this.camera.projection,this.camera.view),A.tryInvert(this.camera.inverseProjectionView,this.camera.projectionView),A.copy(this.camera.viewEye,t.view)}getPickData(){let e=this.pickPadding;for(let t of this.spiral){let n=this.identifyInternal(e+t[0],e+t[1]);if(n)return n}}intersectsScene(e,t){return G.scaleNX(this.sphere,this.scene.boundingSphereVisible,t),Oe.isInsideSphere3D(e,this.sphere)||Oe.isIntersectingSphere3D(e,this.sphere)}identify(e,t){if(this.intersectsScene(e,t.scale))return this.prepare(e,t),o&&this.webgl.timer.mark(`RayHelper.identify`),this.render(this.camera),this.buffers.read(),o&&this.webgl.timer.markEnd(`RayHelper.identify`),this.getPickData()}asyncIdentify(e,t){if(this.intersectsScene(e,t.scale))return this.prepare(e,t),o&&this.webgl.timer.mark(`RayHelper.asyncIdentify`),this.render(this.camera),this.buffers.asyncRead(),o&&this.webgl.timer.markEnd(`RayHelper.asyncIdentify`),{tryGet:()=>{let e=this.buffers.check();if(e===po.Resolved)return this.getPickData();if(e===po.Pending)return`pending`}}}reset(){this.buffers.reset(),this.pickPass.reset()}dispose(){this.buffers.dispose(),this.pickPass.dispose()}constructor(e,t,n,r,i){this.webgl=e,this.renderer=t,this.scene=n,this.helper=r,this.viewport=Ut(),this.sphere=G();let a=i.pickPadding*2+1;this.camera=new an,this.pickPass=new uo(e,a,a,1),this.buffers=new mo(this.webgl,this.pickPass,i.maxAsyncReadLag),this.pickPadding=i.pickPadding,this.update(),co(e)||(this.asyncIdentify=(e,t)=>({tryGet:()=>this.identify(e,t)}))}}})))()}var xo;function So(){return(So=e((()=>{xo=`
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
`})))()}var Co;function wo(){return(wo=e((()=>{Co=`
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
`})))()}var To;function Eo(){return(Eo=e((()=>{To=`
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
`})))()}var Do;function Oo(){return(Oo=e((()=>{Do=`
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
`})))()}function ko(e){return No[Math.max(0,Math.min(e,5))]}function Ao(e){return 2**Math.max(0,e-2)}function jo(e,t){let{width:n,height:r}=e.viewport;e.viewOffset.enabled=!0,an.setViewOffset(e.viewOffset,n,r,t[0],t[1],n,r),e.update()}function Mo(e){e.viewOffset.enabled=!1,e.update()}var No;function Po(){return(Po=e((()=>{Jt(),_a(),No=[[[0,0]],[[0,0],[-4,-4]],[[0,0],[6,-2],[-6,2],[2,6]],[[0,0],[-1,3],[5,1],[-3,-5],[-5,5],[-7,-1],[3,7],[7,-7]],[[0,0],[-1,-3],[-3,2],[4,-1],[-5,-2],[2,5],[5,3],[3,-5],[-2,6],[0,-7],[-4,-6],[-6,4],[-8,0],[7,-4],[6,7],[-7,-8]],[[0,0],[-7,-5],[-3,-5],[-5,-4],[-1,-4],[-2,-2],[-6,-1],[-4,0],[-7,1],[-1,2],[-6,3],[-3,3],[-7,6],[-3,6],[-5,7],[-1,7],[5,-7],[1,-6],[6,-5],[4,-4],[2,-3],[7,-2],[1,-1],[4,-1],[2,1],[6,2],[0,4],[4,4],[2,5],[7,5],[5,6],[3,7]]],No.forEach(e=>{e.forEach(e=>{e[0]*=.0625,e[1]*=.0625})})})))()}function Fo(e,t){return e.colorMarker&&!t.enabled}function Io(e,t){let n=t.getWidth(),r=t.getHeight(),i={...ft,tMaskTexture:z.create(t),uTexSizeInv:z.create(N.create(1/n,1/r)),uEdgeScale:z.create(1)},a={...Ho},o=st(e,`triangles`,Uo,a,i);return _t(o,i)}function Lo(e,t,n){let r=n.getWidth(),i=n.getHeight(),a={...ft,tDepthTexture:z.create(t),tMaskTexture:z.create(n),uTexSizeInv:z.create(N.create(1/r,1/i)),uIsOrtho:z.create(0),uNear:z.create(1),uFar:z.create(1e4),uFogNear:z.create(1),uFogFar:z.create(1e4)},o={...Wo},s=st(e,`triangles`,Go,o,a);return _t(s,a)}function Ro(e,t,n){let r=t.getWidth(),i=t.getHeight(),a={...ft,tEdgeTexture:z.create(t),tMaskTexture:z.create(n),tDimTexture:z.create(n),uTexSizeInv:z.create(N.create(1/r,1/i)),uHighlightEdgeColor:z.create(g()),uSelectEdgeColor:z.create(g()),uHighlightEdgeStrength:z.create(1),uSelectEdgeStrength:z.create(1),uGhostEdgeStrength:z.create(0),uDepthTest:z.create(!1),uInnerEdgeFactor:z.create(0),uHighlightFillColor:z.create(g()),uSelectFillColor:z.create(g()),uHighlightFillStrength:z.create(0),uSelectFillStrength:z.create(0),uDimColor:z.create(g()),uDimStrength:z.create(0),tSsaoDepth:z.create(n),uOcclusionColor:z.create(g()),uFogColor:z.create(g()),uTransparentBackground:z.create(!1),uOcclusionOffset:z.create(N()),tBase:z.create(n),tShaded:z.create(n),dMarkingShading:z.create(`off`)},o={...Ko},s=st(e,`triangles`,qo,o,a);return _t(s,a)}var zo,Bo,Vo,Ho,Uo,Wo,Go,Ko,qo;function Jo(){return(Jo=e((()=>{ct(),ht(),Ye(),mt(),ut(),W(),P(),R(),Ct(),wo(),H(),Eo(),Oo(),i(),Yi(),Jt(),_a(),$t(),Po(),zo={enabled:V.Boolean(!0),highlightEdgeColor:V.Color(x.darken(x.fromNormalizedRgb(1,.4,.6),1)),selectEdgeColor:V.Color(x.darken(x.fromNormalizedRgb(.2,1,.1),1)),edgeScale:V.Numeric(1,{min:1,max:3,step:.1},{description:`Thickness of the edge.`}),highlightEdgeStrength:V.Numeric(1,{min:0,max:1,step:.1}),selectEdgeStrength:V.Numeric(1,{min:0,max:1,step:.1}),ghostEdgeStrength:V.Numeric(.3,{min:0,max:1,step:.1},{description:`Opacity of the hidden edges that are covered by other geometry. When set to 1 and not dimming, one less geometry render pass is done, but hidden parts are then also tinted.`}),innerEdgeFactor:V.Numeric(1.5,{min:0,max:3,step:.1},{description:`Factor to multiply the inner edge color with - for added contrast.`})},Bo=[[0,0]],Vo=class e{static isEnabled(e){return e.enabled}static hasMarking(t,n){return e.isEnabled(n.marking)&&t.markerAverage>0}constructor(e,t,n){this.webgl=e,this.antialiasing=null,this.dim=null,this.offsets=Bo,this.sampleCount=0,this.base=void 0,this.baseShading=null;let{colorBufferFloat:r,textureFloat:i,colorBufferHalfFloat:a,textureHalfFloat:o}=e.extensions;this.depthTarget=e.createRenderTarget(t,n,`depth-stencil`,`uint8`,`nearest`),this.maskTarget=e.createRenderTarget(t,n,`depth-stencil`,`uint8`,`linear`),this.edgesTarget=e.createRenderTarget(t,n);let s=a&&o?`fp16`:r&&i?`float32`:`uint8`;this.layerTarget=e.createRenderTarget(t,n,`none`,s),this.edge=Io(e,this.maskTarget.texture),this.overlay=Ro(e,this.edgesTarget.texture,this.maskTarget.texture),this.composite=Qe(e,this.layerTarget.texture)}getByteCount(){let e=this.dim?this.dim.target.getByteCount()+this.dim.aaTarget.getByteCount():0;return this.depthTarget.getByteCount()+this.maskTarget.getByteCount()+this.edgesTarget.getByteCount()+this.layerTarget.getByteCount()+(this.antialiasing?.getByteCount()??0)+e}setEdgeState(e){let{gl:t,state:n}=this.webgl;n.enable(t.SCISSOR_TEST),n.enable(t.BLEND),n.blendFunc(t.ONE,t.ONE),n.blendEquation(t.FUNC_ADD),n.disable(t.DEPTH_TEST),n.depthMask(!1);let{x:r,y:i,width:a,height:o}=e;n.viewport(r,i,a,o),n.scissor(r,i,a,o),n.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT)}setViewport(e){let{x:t,y:n,width:r,height:i}=e;this.webgl.state.viewport(t,n,r,i),this.webgl.state.scissor(t,n,r,i)}setSize(e,t){let n=this.depthTarget.getWidth(),r=this.depthTarget.getHeight();(e!==n||t!==r)&&(this.depthTarget.setSize(e,t),this.maskTarget.setSize(e,t),this.edgesTarget.setSize(e,t),this.layerTarget.setSize(e,t),this.antialiasing?.setSize(e,t),this.dim&&(this.dim.target.setSize(e,t),this.dim.aaTarget.setSize(e,t),z.update(this.dim.renderable.values.uTexSizeInv,N.set(this.dim.renderable.values.uTexSizeInv.ref.value,1/e,1/t))),this.sampleCount=0,this.invalidate(),z.update(this.edge.values.uTexSizeInv,N.set(this.edge.values.uTexSizeInv.ref.value,1/e,1/t)),z.update(this.overlay.values.uTexSizeInv,N.set(this.overlay.values.uTexSizeInv.ref.value,1/e,1/t)),z.update(this.composite.values.uTexSize,N.set(this.composite.values.uTexSize.ref.value,e,t)))}update(e,t,n,r,i,a){let{highlightEdgeColor:o,selectEdgeColor:s,edgeScale:c,innerEdgeFactor:l,ghostEdgeStrength:u,highlightEdgeStrength:d,selectEdgeStrength:f}=e.marking,{values:p}=this.edge;z.updateIfChanged(p.uEdgeScale,Math.max(1,c*this.webgl.pixelRatio));let{values:m}=this.overlay;z.update(m.uHighlightEdgeColor,x.toVec3Normalized(m.uHighlightEdgeColor.ref.value,o)),z.update(m.uSelectEdgeColor,x.toVec3Normalized(m.uSelectEdgeColor.ref.value,s)),z.updateIfChanged(m.uInnerEdgeFactor,l),z.updateIfChanged(m.uGhostEdgeStrength,u),z.updateIfChanged(m.uDepthTest,r),z.updateIfChanged(m.uHighlightEdgeStrength,d),z.updateIfChanged(m.uSelectEdgeStrength,f);let{colorMarker:h,highlightColor:g,selectColor:_,highlightStrength:v,selectStrength:y,dimColor:b,dimStrength:S,backgroundColor:C}=t,w=h&&!Fo(t,e.marking);z.update(m.uHighlightFillColor,x.toVec3Normalized(m.uHighlightFillColor.ref.value,g)),z.update(m.uSelectFillColor,x.toVec3Normalized(m.uSelectFillColor.ref.value,_)),z.updateIfChanged(m.uHighlightFillStrength,w?v:0),z.updateIfChanged(m.uSelectFillStrength,w?y:0),z.update(m.uDimColor,x.toVec3Normalized(m.uDimColor.ref.value,b)),z.updateIfChanged(m.uDimStrength,n?S:0);let T=e.postprocessing.occlusion,E=!(n||w&&(v>0||y>0))||!i?`off`:i.name===`traced`?`traced`:T.name===`on`?`ssao`:`off`,D=!1;m.dMarkingShading.ref.value!==E&&(z.update(m.dMarkingShading,E),D=!0),i?.name===`ssao`&&m.tSsaoDepth.ref.value!==i.ssao&&(z.update(m.tSsaoDepth,i.ssao),D=!0),i?.name===`traced`&&(m.tBase.ref.value!==a||m.tShaded.ref.value!==i.shaded)&&(z.update(m.tBase,a),z.update(m.tShaded,i.shaded),D=!0),D&&this.overlay.update(),E===`ssao`&&T.name===`on`&&z.update(m.uOcclusionColor,x.toVec3Normalized(m.uOcclusionColor.ref.value,T.params.color)),E!==`off`&&(z.update(m.uFogColor,x.toVec3Normalized(m.uFogColor.ref.value,C)),z.updateIfChanged(m.uTransparentBackground,e.transparentBackground))}invalidate(){this.base=void 0,this.baseShading=null}get needsMoreSamples(){return!!this.base&&this.sampleCount>0&&this.sampleCount<this.offsets.length}present(e,t,n){let{base:r,toDrawingBuffer:i,shading:a}=n,{viewport:o}=e.camera,s=this.updateLayer(e,t,n);i?this.copyToDrawingBuffer(r,o):s&&r.bind(),s&&this.compositeLayer(o),i&&!(e.camera instanceof pa)?(this.base=r,this.baseShading=a):this.invalidate()}redraw(e,t,n,r,i){return this.base?(o&&this.webgl.timer.mark(`MarkingPass.redraw`),this.present(e,t,{base:this.base,toDrawingBuffer:!0,offsets:n,restart:r,samples:i,shading:this.baseShading}),this.webgl.gl.flush(),o&&this.webgl.timer.markEnd(`MarkingPass.redraw`),!0):!1}updateLayer(t,n,r){let{base:i,offsets:a,restart:s,samples:c,shading:l}=r,{renderer:u,camera:d,scene:f,frame:p}=t;if(d instanceof pa||d.disabled||!e.hasMarking(f,n))return this.sampleCount=0,!1;(s||a!==this.offsets)&&(this.offsets=a,this.sampleCount=0);let{colorMarker:m,dimStrength:h}=u.props,g=m&&h>0&&f.markerAverage<1,_=n.marking.ghostEdgeStrength<1||g,v=Math.min(this.sampleCount+c,a.length);if(this.sampleCount>=v)return l?.name===`traced`&&a.length===1&&(this.update(n,u.props,g,_,l,i.texture),this.renderOverlay(t.camera.viewport,1)),!0;o&&this.webgl.timer.mark(`MarkingPass.updateLayer`);let y=a.length>1&&d instanceof an,{x:b,y:x,width:S,height:C}=d.viewport;for(u.setDrawingBufferSize(this.maskTarget.getWidth(),this.maskTarget.getHeight()),u.setPixelRatio(this.webgl.pixelRatio),u.setViewport(b,x,S,C),this.update(n,u.props,g,_,l,i.texture);this.sampleCount<v;++this.sampleCount){let e=a[this.sampleCount];y&&jo(d,e),u.update(d,f,p),_&&(this.depthTarget.bind(),u.clear(!1,!0),f.markerAverage!==1&&u.renderMarkingDepth(f.primitives,d)),this.maskTarget.bind(),u.clear(!1,!0),u.renderMarkingMask(f.primitives,d,_?this.depthTarget.texture:null),z.update(this.overlay.values.uOcclusionOffset,N.set(this.overlay.values.uOcclusionOffset.ref.value,y?e[0]/S:0,y?e[1]/C:0)),this.renderSample(d,n.postprocessing,1/(this.sampleCount+1),g)}return y&&Mo(d),o&&this.webgl.timer.markEnd(`MarkingPass.updateLayer`),!0}getAntialiasing(e){return!e.enabled||e.antialiasing.name===`off`?null:(this.antialiasing||=new Ji(this.webgl,this.maskTarget.getWidth(),this.maskTarget.getHeight(),`linear`),this.antialiasing)}antialias(e,t,n,r){return this.getAntialiasing(t)?.renderAntialiasingOnly(e,n.texture,r,t)?r.texture:n.texture}getDim(){if(!this.dim){let e=this.maskTarget.getWidth(),t=this.maskTarget.getHeight();this.dim={target:this.webgl.createRenderTarget(e,t,`none`,`uint8`,`linear`),aaTarget:this.webgl.createRenderTarget(e,t,`none`),renderable:Lo(this.webgl,this.depthTarget.texture,this.maskTarget.texture)}}return this.dim}renderDim(e,t){let{gl:n,state:r}=this.webgl,{target:i,aaTarget:a,renderable:o}=this.getDim(),{values:s}=o;return z.updateIfChanged(s.uIsOrtho,+(e.state.mode===`orthographic`)),z.updateIfChanged(s.uNear,e.near),z.updateIfChanged(s.uFar,e.far),z.updateIfChanged(s.uFogNear,e.fogNear),z.updateIfChanged(s.uFogFar,e.fogFar),i.bind(),this.setViewport(e.viewport),r.enable(n.SCISSOR_TEST),r.disable(n.BLEND),r.disable(n.DEPTH_TEST),r.depthMask(!1),r.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),o.render(),this.antialias(e,t,i,a)}renderSample(e,t,n,r){o&&this.webgl.timer.mark(`MarkingPass.renderSample`);let i=r?this.renderDim(e,t):this.maskTarget.texture,a=this.getAntialiasing(t),s=a?this.antialias(e,t,this.maskTarget,a.target):this.maskTarget.texture;this.edge.values.tMaskTexture.ref.value!==s&&(z.update(this.edge.values.tMaskTexture,s),this.edge.update(),z.update(this.overlay.values.tMaskTexture,s),this.overlay.update()),this.overlay.values.tDimTexture.ref.value!==i&&(z.update(this.overlay.values.tDimTexture,i),this.overlay.update());let c=e.viewport;this.edgesTarget.bind(),this.setEdgeState(c),this.edge.render(),this.renderOverlay(c,n),o&&this.webgl.timer.markEnd(`MarkingPass.renderSample`)}renderOverlay(e,t){let{gl:n,state:r}=this.webgl;this.layerTarget.bind(),this.setViewport(e),r.enable(n.SCISSOR_TEST),r.enable(n.BLEND),r.blendColor(0,0,0,t),r.blendFunc(n.CONSTANT_ALPHA,n.ONE_MINUS_CONSTANT_ALPHA),r.blendEquation(n.FUNC_ADD),this.overlay.render()}compositeLayer(e){let{gl:t,state:n}=this.webgl;n.enable(t.SCISSOR_TEST),n.enable(t.BLEND),n.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),n.blendEquation(t.FUNC_ADD),n.disable(t.DEPTH_TEST),n.depthMask(!1),this.setViewport(e),this.composite.render()}copyToDrawingBuffer(e,t){let{gl:n,state:r}=this.webgl,i=Ze(this.webgl,e.texture);this.webgl.bindDrawingBuffer(),r.enable(n.SCISSOR_TEST),r.disable(n.BLEND),r.disable(n.DEPTH_TEST),r.depthMask(!1),this.setViewport(t),i.render()}},Ho={...jt,tMaskTexture:X(`texture`,`rgba`,`ubyte`,`linear`),uTexSizeInv:Z(`v2`),uEdgeScale:Z(`f`)},Uo=J(`edge`,ot,To),Wo={...jt,tDepthTexture:X(`texture`,`rgba`,`ubyte`,`nearest`),tMaskTexture:X(`texture`,`rgba`,`ubyte`,`linear`),uTexSizeInv:Z(`v2`),uIsOrtho:Z(`f`),uNear:Z(`f`),uFar:Z(`f`),uFogNear:Z(`f`),uFogFar:Z(`f`)},Go=J(`dim`,ot,Do),Ko={...jt,tEdgeTexture:X(`texture`,`rgba`,`ubyte`,`linear`),tMaskTexture:X(`texture`,`rgba`,`ubyte`,`linear`),tDimTexture:X(`texture`,`rgba`,`ubyte`,`linear`),uTexSizeInv:Z(`v2`),uHighlightEdgeColor:Z(`v3`),uSelectEdgeColor:Z(`v3`),uHighlightEdgeStrength:Z(`f`),uSelectEdgeStrength:Z(`f`),uGhostEdgeStrength:Z(`f`),uDepthTest:Z(`b`),uInnerEdgeFactor:Z(`f`),uHighlightFillColor:Z(`v3`),uSelectFillColor:Z(`v3`),uHighlightFillStrength:Z(`f`),uSelectFillStrength:Z(`f`),uDimColor:Z(`v3`),uDimStrength:Z(`f`),tSsaoDepth:X(`texture`,`rgba`,`ubyte`,`linear`),uOcclusionColor:Z(`v3`),uFogColor:Z(`v3`),uTransparentBackground:Z(`b`),uOcclusionOffset:Z(`v2`),tBase:X(`texture`,`rgba`,`ubyte`,`nearest`),tShaded:X(`texture`,`rgba`,`ubyte`,`nearest`),dMarkingShading:Y(`string`,[`off`,`ssao`,`traced`])},qo=J(`overlay`,ot,Co)})))()}var Yo;function Xo(){return(Xo=e((()=>{Yo=`
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
`})))()}var Zo;function Qo(){return(Qo=e((()=>{Zo=`
precision highp float;
precision highp sampler2D;

uniform sampler2D tColor;
uniform vec2 uTexSize;
uniform float uWeight;

void main() {
    vec2 coords = gl_FragCoord.xy / uTexSize;
    gl_FragColor = texture2D(tColor, coords) * uWeight;
}
`})))()}function $o(e,t,n,r,i,a,o){let s={...ft,tColor:z.create(t),tNormal:z.create(n),tShaded:z.create(r),tThickness:z.create(i),tAccumulate:z.create(a),tDepth:z.create(o),uTexSize:z.create(N.create(t.getWidth(),t.getHeight())),dOrthographic:z.create(0),uNear:z.create(1),uFar:z.create(1e4),uFogNear:z.create(1e4),uFogFar:z.create(1e4),uFogColor:z.create(g.create(1,1,1)),uProjection:z.create(A.identity()),uInvProjection:z.create(A.identity()),uBounds:z.create(K()),uLightDirection:z.create([]),uLightColor:z.create([]),dLightCount:z.create(0),uAmbientColor:z.create(g()),uExposure:z.create(1),uFrameNo:z.create(0),dRendersPerFrame:z.create(1),dBounces:z.create(4),dSteps:z.create(32),dRefineSteps:z.create(4),uRayDistance:z.create(256),dThicknessMode:z.create(`auto`),uMinThickness:z.create(.5),uThicknessFactor:z.create(1),uThickness:z.create(4),dShadowEnable:z.create(!1),uShadowSoftness:z.create(.1),uShadowThickness:z.create(.1)},c={...rs},l=st(e,`triangles`,is,c,s);return _t(l,s)}function es(e,t){let n={...ft,tColor:z.create(t),uTexSize:z.create(N.create(t.getWidth(),t.getHeight())),uWeight:z.create(1)},r={...as},i=st(e,`triangles`,os,r,n);return _t(i,n)}var ts,ns,rs,is,as,os;function ss(){return(ss=e((()=>{ct(),Ye(),P(),i(),mt(),Ct(),ht(),Xo(),M(),ut(),y(),ke(),pe(),R(),w(),Qo(),a(),ts={rendersPerFrame:V.Interval([1,16],{min:1,max:64,step:1},{description:`Number of rays per pixel each frame. May be adjusted to reach targetFps but will stay within given interval.`}),targetFps:V.Numeric(30,{min:0,max:120,step:.1},{description:`Target FPS per frame. If observed FPS is lower or higher, some parameters may get adjusted.`}),steps:V.Numeric(32,{min:1,max:1024,step:1}),refineSteps:V.Numeric(4,{min:0,max:8,step:1},{description:`Number of refine steps per ray hit. May be lower to reach targetFps.`}),rayDistance:V.Numeric(256,{min:1,max:8192,step:1},{description:`Maximum distance a ray can travel (in world units).`}),thicknessMode:V.Select(`auto`,V.arrayToOptions([`auto`,`fixed`])),minThickness:V.Numeric(.5,{min:.1,max:16,step:.1},{hideIf:e=>e.thicknessMode===`fixed`}),thicknessFactor:V.Numeric(1,{min:.1,max:2,step:.05},{hideIf:e=>e.thicknessMode===`fixed`}),thickness:V.Numeric(4,{min:.1,max:512,step:.1},{hideIf:e=>e.thicknessMode===`auto`}),bounces:V.Numeric(4,{min:1,max:32,step:1},{description:`Number of bounces for each ray.`}),shadowEnable:V.Boolean(!1),shadowSoftness:V.Numeric(.1,{min:.01,max:1,step:.01}),shadowThickness:V.Numeric(.5,{min:0,max:32,step:.1},{description:`Thickness of the shadow casting geometry. Set to 0.0 for automatic estimation.`})},ns=class{constructor(e,t){this.webgl=e,this.drawPass=t,this.clearAdjustedProps=!0,this.prevTime=0,this.currTime=0,this.rendersPerFrame=1,this.refineSteps=1,this.steps=16;let{extensions:{drawBuffers:n,colorBufferHalfFloat:r,textureHalfFloat:i},resources:a,isWebGL2:o}=e,{depthTextureOpaque:s}=t,c=s.getWidth(),l=s.getHeight();o?(this.shadedTextureOpaque=a.texture(`image-uint8`,`rgba`,`ubyte`,`nearest`),this.shadedTextureOpaque.define(c,l),this.normalTextureOpaque=r&&i?a.texture(`image-float16`,`rgba`,`fp16`,`nearest`):a.texture(`image-float32`,`rgba`,`float`,`nearest`),this.normalTextureOpaque.define(c,l),this.colorTextureOpaque=a.texture(`image-uint8`,`rgba`,`ubyte`,`nearest`),this.colorTextureOpaque.define(c,l)):(this.shadedTextureOpaque=a.texture(`image-float32`,`rgba`,`float`,`nearest`),this.shadedTextureOpaque.define(c,l),this.normalTextureOpaque=a.texture(`image-float32`,`rgba`,`float`,`nearest`),this.normalTextureOpaque.define(c,l),this.colorTextureOpaque=a.texture(`image-float32`,`rgba`,`float`,`nearest`),this.colorTextureOpaque.define(c,l)),this.framebuffer=a.framebuffer(),this.framebuffer.bind(),n.drawBuffers([n.COLOR_ATTACHMENT0,n.COLOR_ATTACHMENT1,n.COLOR_ATTACHMENT2]),this.shadedTextureOpaque.attachFramebuffer(this.framebuffer,`color0`),this.normalTextureOpaque.attachFramebuffer(this.framebuffer,`color1`),this.colorTextureOpaque.attachFramebuffer(this.framebuffer,`color2`),this.thicknessTarget=e.createRenderTarget(c,l,`depth-stencil`,`uint8`,`nearest`),this.holdTarget=e.createRenderTarget(c,l,`none`,`float32`),this.accumulateTarget=e.createRenderTarget(c,l,`none`,`float32`),this.composeTarget=e.createRenderTarget(c,l,`none`,`uint8`,`linear`),this.traceRenderable=$o(e,this.colorTextureOpaque,this.normalTextureOpaque,this.shadedTextureOpaque,this.thicknessTarget.texture,this.accumulateTarget.texture,this.drawPass.depthTextureOpaque),this.accumulateRenderable=es(e,this.holdTarget.texture)}getByteCount(){return this.thicknessTarget.getByteCount()+this.holdTarget.getByteCount()+this.accumulateTarget.getByteCount()+this.composeTarget.getByteCount()+this.colorTextureOpaque.getByteCount()+this.normalTextureOpaque.getByteCount()+this.shadedTextureOpaque.getByteCount()}renderInput(e,t,n,r){o&&this.webgl.timer.mark(`TracePass.renderInput`);let{gl:i,state:a}=this.webgl;this.framebuffer.bind(),this.drawPass.depthTextureOpaque.attachFramebuffer(this.framebuffer,`depth`),e.clear(!0),e.renderTracing(n.primitives,t),r.thicknessMode===`auto`&&(this.thicknessTarget.bind(),a.clearColor(0,0,0,0),a.clearDepth(0),i.clear(i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT),e.renderDepthOpaqueBack(n.primitives,t),a.clearDepth(1)),o&&this.webgl.timer.markEnd(`TracePass.renderInput`)}setSize(e,t){let n=this.composeTarget.getWidth(),r=this.composeTarget.getHeight();(e!==n||t!==r)&&(this.thicknessTarget.setSize(e,t),this.holdTarget.setSize(e,t),this.accumulateTarget.setSize(e,t),this.composeTarget.setSize(e,t),this.colorTextureOpaque.define(e,t),this.normalTextureOpaque.define(e,t),this.shadedTextureOpaque.define(e,t),z.update(this.traceRenderable.values.uTexSize,N.set(this.traceRenderable.values.uTexSize.ref.value,e,t)),z.update(this.accumulateRenderable.values.uTexSize,N.set(this.accumulateRenderable.values.uTexSize.ref.value,e,t)))}reset(){let{drawBuffers:e}=this.webgl.extensions;this.framebuffer.bind(),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1,e.COLOR_ATTACHMENT2]),this.shadedTextureOpaque.attachFramebuffer(this.framebuffer,`color0`),this.normalTextureOpaque.attachFramebuffer(this.framebuffer,`color1`),this.colorTextureOpaque.attachFramebuffer(this.framebuffer,`color2`),this.restart(!0)}restart(e=!1){let{gl:t,state:n}=this.webgl;this.accumulateTarget.bind(),n.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),this.composeTarget.bind(),n.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),e&&(this.prevTime=0,this.currTime=0,this.clearAdjustedProps=!0)}increaseAdjustedProps(e){this.steps+=1,this.steps>e.steps&&(this.refineSteps+=1),this.refineSteps>e.refineSteps&&(this.rendersPerFrame+=1)}decreaseAdjustedProps(e){let t=Math.min(1,e.refineSteps);--this.rendersPerFrame,this.rendersPerFrame<1&&--this.refineSteps,this.refineSteps<t&&--this.steps}getAdjustedProps(e,t){this.currTime=n();let r=Math.min(1,e.refineSteps),i=Math.round(e.steps/2);if(this.clearAdjustedProps&&=(this.rendersPerFrame=e.rendersPerFrame[0],this.refineSteps=r,this.steps=i,!1),t>0){let t=1e3/e.targetFps,n=this.currTime-this.prevTime,r=Math.round(n/t);if(r>=2)for(;r>0;)this.decreaseAdjustedProps(e),--r;else n<t?this.increaseAdjustedProps(e):n>t+.5&&this.decreaseAdjustedProps(e)}return this.prevTime=this.currTime,this.rendersPerFrame=E(this.rendersPerFrame,e.rendersPerFrame[0],e.rendersPerFrame[1]),this.refineSteps=E(this.refineSteps,r,e.refineSteps),this.steps=E(this.steps,i,e.steps),{rendersPerFrame:t===0?Math.ceil(this.rendersPerFrame/2):this.rendersPerFrame,refineSteps:t===0?r:this.refineSteps,steps:t===0?i:this.steps}}render(e,t,n,r,i){let{rendersPerFrame:a,refineSteps:s,steps:c}=this.getAdjustedProps(n,r);o&&this.webgl.timer.mark(`TracePass.render`,{note:`${a} rendersPerFrame, ${s} refineSteps, ${c} steps`});let{renderer:l,camera:u,scene:d,frame:f}=e,{gl:p,state:m}=this.webgl,{x:h,y:_,width:v,height:y}=u.viewport;(r===0||i)&&(l.setTransparentBackground(t),l.setDrawingBufferSize(this.composeTarget.getWidth(),this.composeTarget.getHeight()),l.setPixelRatio(this.webgl.pixelRatio),l.setViewport(h,_,v,y),l.update(u,d,f),this.renderInput(l,u,d,n)),m.disable(p.BLEND),m.disable(p.DEPTH_TEST),m.disable(p.CULL_FACE),m.depthMask(!1),m.viewport(h,_,v,y),m.scissor(h,_,v,y);let b=A.identity();A.invert(b,u.projection);let S=+(u.state.mode===`orthographic`),[C,w]=this.traceRenderable.values.uTexSize.ref.value,T=u.viewport,E=g();g.scale(E,x.toArrayNormalized(l.props.ambientColor,E,0),l.props.ambientIntensity),this.holdTarget.bind();let D=!1;z.update(this.traceRenderable.values.uFrameNo,r),this.traceRenderable.values.dRendersPerFrame.ref.value!==a&&(z.update(this.traceRenderable.values.dRendersPerFrame,a),D=!0),z.update(this.traceRenderable.values.uProjection,u.projection),z.update(this.traceRenderable.values.uInvProjection,b),K.set(this.traceRenderable.values.uBounds.ref.value,T.x/C,T.y/w,(T.x+T.width)/C,(T.y+T.height)/w),z.update(this.traceRenderable.values.uBounds,this.traceRenderable.values.uBounds.ref.value),z.updateIfChanged(this.traceRenderable.values.uNear,u.near),z.updateIfChanged(this.traceRenderable.values.uFar,u.far),z.updateIfChanged(this.traceRenderable.values.uFogFar,u.fogFar),z.updateIfChanged(this.traceRenderable.values.uFogNear,u.fogNear),z.update(this.traceRenderable.values.uFogColor,x.toVec3Normalized(this.traceRenderable.values.uFogColor.ref.value,l.props.backgroundColor)),this.traceRenderable.values.dOrthographic.ref.value!==S&&(z.update(this.traceRenderable.values.dOrthographic,S),D=!0),z.update(this.traceRenderable.values.uLightDirection,l.light.direction),z.update(this.traceRenderable.values.uLightColor,l.light.color),this.traceRenderable.values.dLightCount.ref.value!==l.light.count&&(z.update(this.traceRenderable.values.dLightCount,l.light.count),D=!0),z.update(this.traceRenderable.values.uAmbientColor,E),z.updateIfChanged(this.traceRenderable.values.uExposure,l.props.exposure),this.traceRenderable.values.dBounces.ref.value!==n.bounces&&(z.update(this.traceRenderable.values.dBounces,n.bounces),D=!0),this.traceRenderable.values.dSteps.ref.value!==c&&(z.update(this.traceRenderable.values.dSteps,c),D=!0),this.traceRenderable.values.dRefineSteps.ref.value!==s&&(z.update(this.traceRenderable.values.dRefineSteps,s),D=!0),z.updateIfChanged(this.traceRenderable.values.uRayDistance,n.rayDistance),this.traceRenderable.values.dThicknessMode.ref.value!==n.thicknessMode&&(z.update(this.traceRenderable.values.dThicknessMode,n.thicknessMode),D=!0),z.updateIfChanged(this.traceRenderable.values.uMinThickness,n.minThickness),z.updateIfChanged(this.traceRenderable.values.uThicknessFactor,n.thicknessFactor),z.updateIfChanged(this.traceRenderable.values.uThickness,n.thickness),this.traceRenderable.values.dShadowEnable.ref.value!==n.shadowEnable&&(z.update(this.traceRenderable.values.dShadowEnable,n.shadowEnable),D=!0),z.updateIfChanged(this.traceRenderable.values.uShadowSoftness,n.shadowSoftness),z.updateIfChanged(this.traceRenderable.values.uShadowThickness,n.shadowThickness),D&&this.traceRenderable.update(),o&&this.webgl.timer.mark(`TracePass.renderTrace`),this.traceRenderable.render(),o&&this.webgl.timer.markEnd(`TracePass.renderTrace`),this.accumulateTarget.bind(),this.accumulateRenderable.render(),o&&this.webgl.timer.markEnd(`TracePass.render`)}},rs={...jt,tColor:X(`texture`,`rgba`,`ubyte`,`nearest`),tNormal:X(`texture`,`rgba`,`ubyte`,`nearest`),tShaded:X(`texture`,`rgba`,`ubyte`,`nearest`),tThickness:X(`texture`,`rgba`,`ubyte`,`nearest`),tAccumulate:X(`texture`,`rgba`,`ubyte`,`nearest`),tDepth:X(`texture`,`rgba`,`ubyte`,`nearest`),uTexSize:Z(`v2`),dOrthographic:Y(`number`),uNear:Z(`f`),uFar:Z(`f`),uFogNear:Z(`f`),uFogFar:Z(`f`),uFogColor:Z(`v3`),uProjection:Z(`m4`),uInvProjection:Z(`m4`),uBounds:Z(`v4`),uLightDirection:Z(`v3[]`),uLightColor:Z(`v3[]`),dLightCount:Y(`number`),uAmbientColor:Z(`v3`),uExposure:Z(`f`),uFrameNo:Z(`i`),dRendersPerFrame:Y(`number`),dBounces:Y(`number`),dSteps:Y(`number`),dRefineSteps:Y(`number`),uRayDistance:Z(`f`),dThicknessMode:Y(`string`),uMinThickness:Z(`f`),uThicknessFactor:Z(`f`),uThickness:Z(`f`),dShadowEnable:Y(`boolean`),uShadowSoftness:Z(`f`),uShadowThickness:Z(`f`)},is=J(`trace`,ot,Yo),as={...jt,tColor:X(`texture`,`rgba`,`ubyte`,`nearest`),uTexSize:Z(`v2`),uWeight:Z(`f`)},os=J(`accumulate`,ot,Zo)})))()}var cs;function ls(){return(ls=e((()=>{cs=`
precision highp float;
precision highp sampler2D;

uniform sampler2D tColor;
uniform vec2 uTexSize;
uniform float uWeight;

void main() {
    vec2 coords = gl_FragCoord.xy / uTexSize;
    gl_FragColor = texture2D(tColor, coords) * uWeight;
}
`})))()}function us(e){let{drawBuffers:t,textureFloat:n,colorBufferFloat:r,depthTexture:i}=e.extensions;if(!n||!r||!i||!t){if(s&&!ps){let e=[];n||e.push(`textureFloat`),r||e.push(`colorBufferFloat`),i||e.push(`depthTexture`),t||e.push(`drawBuffers`),console.log(`Missing "${e.join(`", "`)}" extensions required for "illumination"`),ps=!0}return!1}return!0}function ds(e,t,n,r,i,a,o,s,c,l,u,d){let f={...ft,tColor:z.create(t),tNormal:z.create(n),tShaded:z.create(r),tTransparentColor:z.create(s),dBlendTransparency:z.create(!0),tSsaoDepth:z.create(c),tSsaoDepthTransparent:z.create(l),tDepthOpaque:z.create(i),tDepthTransparent:z.create(a),tOutlines:z.create(o),tBloom:z.create(u),dBloomEnable:z.create(!1),uTexSize:z.create(N.create(t.getWidth(),t.getHeight())),dDenoise:z.create(!0),uDenoiseThreshold:z.create(.1),dOrthographic:z.create(0),uNear:z.create(1),uFar:z.create(1e4),uFogNear:z.create(1e4),uFogFar:z.create(1e4),uFogColor:z.create(g.create(1,1,1)),uOutlineColor:z.create(g.create(0,0,0)),uOcclusionColor:z.create(g.create(0,0,0)),uTransparentBackground:z.create(!1),dOcclusionEnable:z.create(!1),dOutlineEnable:z.create(!1),dOutlineScale:z.create(1),dTransparentOutline:z.create(d)},p={...gs},m=st(e,`triangles`,_s,p,f);return _t(m,f)}function fs(e,t){let n={...ft,tColor:z.create(t),uTexSize:z.create(N.create(t.getWidth(),t.getHeight())),uWeight:z.create(1)},r={...vs},i=st(e,`triangles`,ys,r,n);return _t(i,n)}var ps,ms,hs,gs,_s,vs,ys;function bs(){return(bs=e((()=>{ct(),Ye(),P(),i(),Jt(),mt(),Ct(),ht(),So(),M(),ut(),pe(),R(),w(),Yi(),Jo(),Mr(),ss(),Po(),ls(),li(),ni(),ps=!1,ms={enabled:V.Boolean(!1),maxIterations:V.Numeric(5,{min:0,max:16,step:1},{description:`Maximum number of tracing iterations. Final iteration count is 2^x.`}),denoise:V.Boolean(!0),denoiseThreshold:V.Interval([.15,1],{min:0,max:4,step:.01},{description:`Threshold for denoising. Automatically adjusted within given interval based on current iteration.`}),ignoreOutline:V.Boolean(!0,{description:`Ignore outline in illumination pass where it is generally not needed for visual clarity. Useful when illumination is often toggled on/off.`}),...ts},hs=class e{get iteration(){return this._iteration}get colorTarget(){return this._colorTarget}get supported(){return this._supported}getByteCount(){return this._supported?this.tracing.getByteCount()+this.transparentTarget.getByteCount()+this.outputTarget.getByteCount()+this.multiSampleComposeTarget.getByteCount()+this.multiSampleHoldTarget.getByteCount()+this.multiSampleAccumulateTarget.getByteCount():0}getMaxIterations(e){return 2**e.maxIterations}static isSupported(e){return us(e)}static isEnabled(e,t){return t.enabled&&us(e)}constructor(t,n){if(this.webgl=t,this.drawPass=n,this._iteration=0,this._supported=!1,this.prevSampleIndex=-1,!e.isSupported(t))return;let{colorTarget:r}=n,i=r.getWidth(),a=r.getHeight();this.tracing=new ns(t,this.drawPass),this.markingShading={name:`traced`,shaded:this.tracing.shadedTextureOpaque},this.transparentTarget=t.createRenderTarget(i,a,`none`,`uint8`,`nearest`),this.outputTarget=t.createRenderTarget(i,a,`none`,`uint8`,`linear`),this.copyRenderable=Qe(t,this.transparentTarget.texture),this.composeRenderable=ds(t,this.tracing.accumulateTarget.texture,this.tracing.normalTextureOpaque,this.tracing.colorTextureOpaque,this.drawPass.depthTextureOpaque,this.drawPass.depthTargetTransparent.texture,this.drawPass.postprocessing.outline.target.texture,this.transparentTarget.texture,this.drawPass.postprocessing.ssao.ssaoDepthTexture,this.drawPass.postprocessing.ssao.ssaoDepthTransparentTexture,this.drawPass.postprocessing.bloom.compositeTarget.texture,!1),this.multiSampleComposeTarget=t.createRenderTarget(i,a,`none`,`float32`),this.multiSampleHoldTarget=t.createRenderTarget(i,a,`none`),this.multiSampleAccumulateTarget=t.createRenderTarget(i,a,`none`,`float32`),this.multiSampleCompose=fs(t,this.outputTarget.texture),this._supported=!0}renderInput(e,t,n,r){o&&this.webgl.timer.mark(`IlluminationPass.renderInput`);let{gl:i,state:a}=this.webgl,s=n.opacityAverage<1||n.volumes.renderables.length>0;this.transparentTarget.bind(),a.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT);let c=qi.isTransparentOutlineEnabled(r.postprocessing)&&!r.illumination.ignoreOutline,l=kr.isEnabled(r.postprocessing),u=qi.isTransparentSsaoEnabled(n,r.postprocessing),d=Gr.isEnabled(r.postprocessing);if((c||l||u||d)&&(this.drawPass.depthTargetTransparent.bind(),e.clearDepth(!0)),s){if(this.drawPass.transparency===`wboit`)this.drawPass.wboit.bind(),e.renderWboitTransparent(n.primitives,t,this.drawPass.depthTextureOpaque),n.volumes.renderables.length>0&&e.renderWboitTransparent(n.volumes,t,this.drawPass.depthTextureOpaque),this.transparentTarget.bind(),this.drawPass.wboit.render();else if(this.drawPass.transparency===`dpoit`){let i=this.drawPass.dpoit.bind();e.renderDpoitTransparent(n.primitives,t,this.drawPass.depthTextureOpaque,i);for(let i=0,a=r.dpoitIterations;i<a;i++){o&&this.webgl.timer.mark(`DpoitPass.layer`);let r=this.drawPass.dpoit.bindDualDepthPeeling();e.renderDpoitTransparent(n.primitives,t,this.drawPass.depthTextureOpaque,r),a>1&&(this.transparentTarget.bind(),this.drawPass.dpoit.renderBlendBack()),o&&this.webgl.timer.markEnd(`DpoitPass.layer`)}this.transparentTarget.bind(),this.drawPass.dpoit.render(),n.volumes.renderables.length>0&&e.renderVolume(n.volumes,t,this.drawPass.depthTextureOpaque)}else this.transparentTarget.bind(),this.drawPass.depthTextureOpaque.attachFramebuffer(this.transparentTarget.framebuffer,`depth`),e.renderBlendedTransparent(n.primitives,t),this.drawPass.depthTextureOpaque.detachFramebuffer(this.transparentTarget.framebuffer,`depth`),n.volumes.renderables.length>0&&e.renderVolume(n.volumes,t,this.drawPass.depthTextureOpaque);(c||l||u||d)&&(this.drawPass.depthTargetTransparent.bind(),n.opacityAverage<1&&e.renderDepthTransparent(n.primitives,t,this.drawPass.depthTextureOpaque)),u&&(this.drawPass.postprocessing.ssao.update(t,n,r.postprocessing.occlusion.params,!0),this.drawPass.postprocessing.ssao.render(t))}this.tracing.composeTarget.bind(),a.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),o&&this.webgl.timer.markEnd(`IlluminationPass.renderInput`)}hasHelpers(e){return e.debug.isEnabled||e.pointer.isEnabled||e.handle.isEnabled||e.camera.isEnabled}renderHelpers(e){let{renderer:t,camera:n,helper:r,frame:i}=e;if(this.transparentTarget.bind(),r.debug.isEnabled||r.pointer.isEnabled){if(this.drawPass.depthTextureOpaque.attachFramebuffer(this.transparentTarget.framebuffer,`depth`),r.debug.isEnabled){r.debug.syncVisibility();for(let e of r.debug.scenes)t.renderBlended(e,n)}r.pointer.isEnabled&&(r.pointer.setCamera(n),t.update(r.pointer.camera,r.pointer.scene,i),t.renderBlended(r.pointer.scene,r.pointer.camera)),this.drawPass.depthTextureOpaque.detachFramebuffer(this.transparentTarget.framebuffer,`depth`)}r.handle.isEnabled&&t.renderBlended(r.handle.scene,n),r.camera.isEnabled&&(r.camera.update(n),t.update(r.camera.camera,r.camera.scene,i),t.renderBlended(r.camera.scene,r.camera.camera))}shouldRender(e){return this._supported&&e.enabled&&this._iteration<this.getMaxIterations(e)}setSize(e,t){if(!this._supported)return;let n=this.outputTarget.getWidth(),r=this.outputTarget.getHeight();(e!==n||t!==r)&&(this.tracing.setSize(e,t),this.transparentTarget.setSize(e,t),this.outputTarget.setSize(e,t),z.update(this.copyRenderable.values.uTexSize,N.set(this.copyRenderable.values.uTexSize.ref.value,e,t)),z.update(this.composeRenderable.values.uTexSize,N.set(this.composeRenderable.values.uTexSize.ref.value,e,t)),this.multiSampleComposeTarget.setSize(e,t),this.multiSampleHoldTarget.setSize(e,t),this.multiSampleAccumulateTarget.setSize(e,t),z.update(this.multiSampleCompose.values.uTexSize,N.set(this.multiSampleCompose.values.uTexSize.ref.value,e,t))),this.drawPass.setSize(e,t)}reset(){this._supported&&(this.tracing.reset(),this._iteration=0,this.prevSampleIndex=-1)}restart(e=!1){this._supported&&(this.tracing.restart(e),this._iteration=0,this.prevSampleIndex=-1)}renderInternal(e,t,n,r){this.shouldRender(t.illumination)&&(o&&this.webgl.timer.mark(`IlluminationPass.render`,{note:`iteration ${this._iteration+1} of ${this.getMaxIterations(t.illumination)}`}),this.tracing.render(e,t.transparentBackground,t.illumination,this._iteration,r),this.compose(e,t,n,this._iteration===0||r),this._iteration+=1,o&&this.webgl.timer.markEnd(`IlluminationPass.render`),this.webgl.gl.flush())}setupRenderer(e,t){let{renderer:n,camera:r,scene:i,frame:a}=e;n.setTransparentBackground(t.transparentBackground),n.setDrawingBufferSize(this.tracing.composeTarget.getWidth(),this.tracing.composeTarget.getHeight()),n.setPixelRatio(this.webgl.pixelRatio);let{x:o,y:s,width:c,height:l}=r.viewport;n.setViewport(o,s,c,l),n.update(r,i,a)}compose(e,t,n,r){let{renderer:i,camera:a,scene:o,frame:s}=e,{gl:c,state:l}=this.webgl,{x:u,y:d,width:f,height:p}=a.viewport;r&&(this.setupRenderer(e,t),this.renderInput(i,a,o,t),this.renderHelpers(e)),l.disable(c.BLEND),l.disable(c.DEPTH_TEST),l.disable(c.CULL_FACE),l.depthMask(!1),l.viewport(u,d,f,p),l.scissor(u,d,f,p);let m=+(a.state.mode===`orthographic`),h=Ji.isEnabled(t.postprocessing),g=si.isEnabled(t.postprocessing)&&!t.illumination.ignoreOutline,_=qi.isTransparentSsaoEnabled(o,t.postprocessing),v=Gr.isEnabled(t.postprocessing),y=kr.isEnabled(t.postprocessing),b=o.opacityAverage<1||o.volumes.renderables.length>0,S=!1;if(this.composeRenderable.values.dOutlineEnable.ref.value!==g&&(S=!0,z.update(this.composeRenderable.values.dOutlineEnable,g)),g&&t.postprocessing.outline.name===`on`){let{transparentOutline:e,outlineScale:n}=this.drawPass.postprocessing.outline.update(a,t.postprocessing.outline.params,this.drawPass.depthTargetTransparent.texture,this.drawPass.depthTextureOpaque);this.drawPass.postprocessing.outline.render(),z.update(this.composeRenderable.values.uOutlineColor,x.toVec3Normalized(this.composeRenderable.values.uOutlineColor.ref.value,t.postprocessing.outline.params.color)),this.composeRenderable.values.dOutlineScale.ref.value!==n&&(S=!0,z.update(this.composeRenderable.values.dOutlineScale,n)),this.composeRenderable.values.dTransparentOutline.ref.value!==e&&(S=!0,z.update(this.composeRenderable.values.dTransparentOutline,e))}this.composeRenderable.values.dOcclusionEnable.ref.value!==_&&(S=!0,z.update(this.composeRenderable.values.dOcclusionEnable,_)),_&&t.postprocessing.occlusion.name===`on`&&z.update(this.composeRenderable.values.uOcclusionColor,x.toVec3Normalized(this.composeRenderable.values.uOcclusionColor.ref.value,t.postprocessing.occlusion.params.color));let C=b||this.hasHelpers(e.helper);this.composeRenderable.values.dBlendTransparency.ref.value!==C&&(S=!0,z.update(this.composeRenderable.values.dBlendTransparency,C)),z.updateIfChanged(this.composeRenderable.values.uNear,a.near),z.updateIfChanged(this.composeRenderable.values.uFar,a.far),z.updateIfChanged(this.composeRenderable.values.uFogFar,a.fogFar),z.updateIfChanged(this.composeRenderable.values.uFogNear,a.fogNear),z.update(this.composeRenderable.values.uFogColor,x.toVec3Normalized(this.composeRenderable.values.uFogColor.ref.value,i.props.backgroundColor)),this.composeRenderable.values.dOrthographic.ref.value!==m&&(z.update(this.composeRenderable.values.dOrthographic,m),S=!0),i.setDrawingBufferSize(this.tracing.composeTarget.getWidth(),this.tracing.composeTarget.getHeight()),i.setPixelRatio(this.webgl.pixelRatio),i.setViewport(u,d,f,p),i.update(a,o,s);let w=!1;if(v&&t.postprocessing.bloom.name===`on`){let e=t.postprocessing.bloom.params,n=this.drawPass.postprocessing.bloom,r=e.mode===`emissive`;r&&o.emissiveAverage===0||(r&&this.drawPass.renderEmissiveBloom(i,a,o,e.transparency),o.opacityAverage>=1&&(this.drawPass.depthTargetTransparent.bind(),i.clearDepth(!0)),n.update(this.tracing.shadedTextureOpaque,this.transparentTarget.texture,n.emissiveTarget.texture,this.drawPass.depthTextureOpaque,this.drawPass.depthTextureTransparent,e,a,!1),n.render(a.viewport),w=!0)}this.composeRenderable.values.dBloomEnable.ref.value!==w&&(S=!0,z.update(this.composeRenderable.values.dBloomEnable,w)),this.tracing.composeTarget.bind(),this._colorTarget=this.tracing.composeTarget,this.drawPass.postprocessing.background.update(a,t.postprocessing.background),this.drawPass.postprocessing.background.clear(t.postprocessing.background,t.transparentBackground,i.props.backgroundColor),this.drawPass.postprocessing.background.render(t.postprocessing.background);let T=this.drawPass.postprocessing.background.isEnabled(t.postprocessing)||w&&!t.transparentBackground;z.updateIfChanged(this.composeRenderable.values.uTransparentBackground,t.transparentBackground||T),this.composeRenderable.values.dDenoise.ref.value!==t.illumination.denoise&&(z.update(this.composeRenderable.values.dDenoise,t.illumination.denoise),S=!0);let D=t.multiSample.mode===`on`?t.illumination.denoiseThreshold[0]:me(t.illumination.denoiseThreshold[1],t.illumination.denoiseThreshold[0],E(this.iteration/(this.getMaxIterations(t.illumination)/2),0,1));z.updateIfChanged(this.composeRenderable.values.uDenoiseThreshold,D),S&&this.composeRenderable.update(),T&&(l.enable(c.BLEND),l.blendFuncSeparate(c.ONE,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA)),this.composeRenderable.render();let O=this.outputTarget;h&&(this.drawPass.antialiasing.render(a,this.tracing.composeTarget.texture,this.outputTarget,t.postprocessing),this._colorTarget=this.outputTarget,O=this.tracing.composeTarget),y&&t.postprocessing.dof.name===`on`&&(this.drawPass.dof.update(a,this._colorTarget.texture,this.drawPass.depthTextureOpaque,this.drawPass.depthTargetTransparent.texture,t.postprocessing.dof.params,o.boundingSphereVisible),this.drawPass.dof.render(a.viewport,O),this._colorTarget=O),(t.multiSample.mode!==`on`||n)&&this.drawPass.marking.present(e,t,{base:this._colorTarget,toDrawingBuffer:n,offsets:Bo,restart:r,samples:1,shading:this.markingShading})}renderMultiSample(e,t,n){let{camera:r}=e,{multiSampleCompose:i,multiSampleComposeTarget:a,multiSampleHoldTarget:s,webgl:c}=this,{gl:l,state:u}=c,d=ko(t.multiSample.sampleLevel),f=this.getMaxIterations(t.illumination),p=Math.min(this._iteration,f),m=Math.floor(p/f*d.length);o&&c.timer.mark(`IlluminationPass.renderMultiSample`,{note:`sampleIndex ${m+1} of ${d.length}`});let{x:h,y:g,width:_,height:v}=r.viewport,y=1/f;p===0?(this.renderInternal(e,t,!1,!0),z.update(i.values.uWeight,1),z.update(i.values.tColor,this._colorTarget.texture),i.update(),s.bind(),u.disable(l.BLEND),u.disable(l.DEPTH_TEST),u.depthMask(!1),u.viewport(h,g,_,v),u.scissor(h,g,_,v),i.render()):(z.update(i.values.tColor,this._colorTarget.texture),z.update(i.values.uWeight,y),i.update(),jo(r,d[m]),this.renderInternal(e,t,!1,this.prevSampleIndex!==m),a.bind(),u.enable(l.BLEND),u.blendEquationSeparate(l.FUNC_ADD,l.FUNC_ADD),u.blendFuncSeparate(l.ONE,l.ONE,l.ONE,l.ONE),u.disable(l.DEPTH_TEST),u.depthMask(!1),u.viewport(h,g,_,v),u.scissor(h,g,_,v),p===1&&(u.clearColor(0,0,0,0),l.clear(l.COLOR_BUFFER_BIT)),i.render()),this.prevSampleIndex=m,this.multiSampleAccumulateTarget.bind(),u.viewport(h,g,_,v),u.scissor(h,g,_,v);let b=p*y;b>0&&(z.update(i.values.uWeight,1),z.update(i.values.tColor,a.texture),i.update(),u.disable(l.BLEND),i.render()),b<1&&(z.update(i.values.uWeight,1-b),z.update(i.values.tColor,s.texture),i.update(),b===0?u.disable(l.BLEND):u.enable(l.BLEND),i.render()),n||(u.disable(l.BLEND),this.colorTarget.bind(),this.copyRenderable.values.tColor.ref.value!==this.multiSampleAccumulateTarget.texture&&(z.update(this.copyRenderable.values.tColor,this.multiSampleAccumulateTarget.texture),this.copyRenderable.update()),this.copyRenderable.render()),Mo(r);let x=n?this.multiSampleAccumulateTarget:this._colorTarget,S=p===0?1:Math.ceil(d.length/f);this.drawPass.marking.present(e,t,{base:x,toDrawingBuffer:n,offsets:d,restart:p===0,samples:S,shading:this.markingShading}),o&&c.timer.markEnd(`IlluminationPass.renderMultiSample`)}render(e,t,n){this._supported&&(t.multiSample.mode===`on`?this.renderMultiSample(e,t,n):this.renderInternal(e,t,n,!1))}},gs={...jt,tColor:X(`texture`,`rgba`,`ubyte`,`nearest`),tNormal:X(`texture`,`rgba`,`ubyte`,`nearest`),tShaded:X(`texture`,`rgba`,`ubyte`,`nearest`),tTransparentColor:X(`texture`,`rgba`,`ubyte`,`nearest`),dBlendTransparency:Y(`boolean`),tSsaoDepth:X(`texture`,`rgba`,`ubyte`,`nearest`),tSsaoDepthTransparent:X(`texture`,`rgba`,`ubyte`,`nearest`),tDepthOpaque:X(`texture`,`rgba`,`ubyte`,`nearest`),tDepthTransparent:X(`texture`,`rgba`,`ubyte`,`nearest`),tOutlines:X(`texture`,`rgba`,`ubyte`,`nearest`),tBloom:X(`texture`,`rgba`,`ubyte`,`linear`),dBloomEnable:Y(`boolean`),uTexSize:Z(`v2`),dDenoise:Y(`boolean`),uDenoiseThreshold:Z(`f`),dOrthographic:Y(`number`),uNear:Z(`f`),uFar:Z(`f`),uFogNear:Z(`f`),uFogFar:Z(`f`),uFogColor:Z(`v3`),uOutlineColor:Z(`v3`),uOcclusionColor:Z(`v3`),uTransparentBackground:Z(`b`),dOcclusionEnable:Y(`boolean`),dOutlineEnable:Y(`boolean`),dOutlineScale:Y(`number`),dTransparentOutline:Y(`boolean`)},_s=J(`compose`,ot,xo),vs={...jt,tColor:X(`texture`,`rgba`,`ubyte`,`nearest`),uTexSize:Z(`v2`),uWeight:Z(`f`)},ys=J(`compose`,ot,cs)})))()}var xs;function Ss(){return(Ss=e((()=>{ni(),bs(),Jo(),Yi(),xs=class e{static ensureRequired(t,n,r){let i=new e(t,n);i.updateRequired(r),i.finalizeRequired(!0)}constructor(e,t){this.webgl=e,this.scene=t,this.required=[]}updateRequired(e){this.required.length=0,this.required.push(`color`),hs.isEnabled(this.webgl,e.illumination)&&this.required.push(`tracing`),Vo.isEnabled(e.marking)&&this.scene.markerAverage>0&&this.required.push(`marking`),Gr.isEnabled(e.postprocessing)&&this.scene.emissiveAverage>0&&this.required.push(`emissive`),(qi.isTransparentDepthRequired(this.scene,e.postprocessing)||!this.webgl.extensions.drawBuffers||!this.webgl.extensions.depthTexture||hs.isEnabled(this.webgl,e.illumination))&&this.required.push(`depth`),this.webgl.resources.linkPrograms(this.required)}finalizeRequired(e){return this.finalize(this.required,e)}finalize(e,t){return this.webgl.resources.finalizePrograms(e,t)}}})))()}function Cs(e){let t=A.getDecomposition(e);return new XRRigidTransform(g.toObj(t.position),b.toObj(t.quaternion))}function ws(e,t){let n=g.fromObj(e.transform.position),r=A.fromArray(A(),e.transform.matrix,0),i=A.getDecomposition(r),a=A.fromQuat(A(),i.quaternion),o=g.transformMat4(g(),g.negUnitZ,a),s=Oe.create(n,o);return t&&Oe.transform(s,s,A.invert(A(),t)),s}var Ts,Es,Ds,Os,ks,As,js;function Ms(){return(Ms=e((()=>{u(),c(),je(),xt(),De(),y(),C(),M(),pe(),ke(),Sa(),i(),oa(),R(),cn(),Ts=Q,Es=$.Trigger,Ds=$.TriggerKey,Os={exit:$([Ds(`GamepadB`)]),togglePassthrough:$([Ds(`GamepadA`)]),gestureScale:$([Es(Ts.Flag.Trigger)])},ks={bindings:Os},As={minTargetDistance:V.Numeric(.4,{min:.001,max:1,step:.001}),disablePostprocessing:V.Boolean(!0),resolutionScale:V.Numeric(1,{min:.1,max:2,step:.1}),sceneRadiusInMeters:V.Numeric(.25,{min:.01,max:2,step:.01},{description:`The radius of the scene bounding sphere in meters, used to set the initial camera scale.`})},js=class{get session(){return this.xrSession}get xr(){if(typeof navigator<`u`)return navigator.xr}setProps(e){Object.assign(this.props,e)}setAttribs(e){Object.assign(this.attribs,e)}intersect(e,t,n,r){let i=g(),a=ws(r,t);if(Dt.intersectRay3D(i,n,a)){let{height:t}=e.viewport,n=ln(K(),i,e.viewport,e.projectionView);return{point:i,screen:N.create(Math.floor(n[0]),t-Math.floor(n[1]))}}}setScaleFactor(e){this.scaleFactor=e}resetScale(){this.scaleFactor=1,this.prevScale=0}update(e){let{xrSession:t,xrRefSpace:n,input:r,camera:i,stereoCamera:a,pointerHelper:o}=this;if(!e||!t||!n)return!1;i.scale*=this.scaleFactor,this.prevScale=i.scale;let s=g.sub(g(),i.position,i.target);g.scaleAndAdd(i.position,i.position,s,1-this.scaleFactor),this.scaleFactor=1;let c=Cs(i.view),l=n.getOffsetReferenceSpace(c),u=e.getViewerPose(l);if(!u)return!1;let d=e.getViewerPose(n);if(d){let e=b.fromObj(d.transform.orientation);A.fromQuat(i.headRotation,e)}let{depthFar:f,depthNear:p,baseLayer:m}=t.renderState;if(!m)return!1;(f!==i.far||p!==i.near)&&t.updateRenderState({depthNear:i.near,depthFar:i.far}),a.update({pose:u,layer:m});let h=a.left,_=g.scale(g(),h.state.target,h.scale),v=A.getTranslation(g(),A.invert(A(),h.view)),y=g.sub(g(),v,_),x=Dt.fromNormalAndCoplanarPoint(Dt(),y,_),S=[],C=[],w=[],T=[];if(t.inputSources)for(let r of t.inputSources){if(r.targetRayMode===`screen`){if(r.gamepad){let{axes:e}=r.gamepad,{width:t,height:n}=h.viewport,i=(e[0]+1)/2*t,a=(e[1]+1)/2*n,o=h.getRay(Oe(),i,n-a);T.push({x:i,y:a,ray:o})}continue}if(r.targetRayMode!==`tracked-pointer`)continue;let{handedness:t,targetRaySpace:a,gamepad:o}=r;if(!t)continue;let s=e.getPose(a,n);if(!s)continue;let c=ws(s,i.view);S.push(c);let l=G.scaleNX(G(),this.scene.boundingSphereVisible,h.scale),u=g();Oe.intersectSphere3D(u,c,l)&&C.push(u);let d=Q.create(Q.Flag.None);o?.buttons[0]?.pressed&&(d|=Q.Flag.Primary),o?.buttons[1]?.pressed&&(d|=Q.Flag.Secondary),o?.buttons[3]?.pressed&&(d|=Q.Flag.Auxilary),o?.buttons[4]?.pressed&&(d|=Q.Flag.Forth),o?.buttons[5]?.pressed&&(d|=Q.Flag.Five);let f=t===`left`?this.prevInput.left:this.prevInput.right,p=this.intersect(h,i.view,x,s),m=f?this.intersect(h,i.view,x,f.targetRayPose):void 0,[_,v]=p?.screen??[0,0],[y,b]=m?.screen??[_,v],E=N.set(N(),_-y,v-b);N.setMagnitude(E,E,Math.min(100,N.magnitude(E)));let[D,O]=N.round(E,E);w.push({handedness:t,buttons:d,x:_,y:v,dx:D,dy:O,ray:c,axes:o?.axes}),t===`left`?this.prevInput.left={targetRayPose:s}:this.prevInput.right={targetRayPose:s}}else this.prevInput.left=void 0,this.prevInput.right=void 0;return r.updateTrackedPointers(w),r.updateScreenTouches(T),o.ensureEnabled(),o.update(S,C,this.hit),!0}async setSession(e){if(this.xrSession!==e){if(await this.webgl.xr.set(e,{resolutionScale:this.props.resolutionScale}),this.xrSession=this.webgl.xr.session,this.prevInput={},this.hit=void 0,this.xrSession){this.xrRefSpace=await this.xrSession.requestReferenceSpace(`local`),this.pointerHelper.setProps({enabled:`on`});let e=this.prevScale;if(e===0){let{radius:t}=this.scene.boundingSphereVisible;e=t?1/t*this.props.sceneRadiusInMeters:.01}this.camera.forceFull=!0,this.camera.scale=e,this.camera.minTargetDistance=this.props.minTargetDistance,this.prevScale=e}else this.xrRefSpace=void 0,A.setZero(this.camera.headRotation),this.pointerHelper.setProps({enabled:`off`}),this.camera.forceFull=!1,this.camera.scale=1,this.camera.minTargetDistance=0}}async end(){await this.webgl.xr.end()}async request(){if(!this.xr)return;let e=await this.xr.isSessionSupported(`immersive-ar`)?await this.xr.requestSession(`immersive-ar`):await this.xr.requestSession(`immersive-vr`);await this.setSession(e)}dispose(){this.hoverSub.unsubscribe(),this.keyUpSub.unsubscribe(),this.gestureSub.unsubscribe(),this.sessionChangedSub.unsubscribe(),this.togglePassthrough.complete(),this.sessionChanged.complete(),this.isSupported.complete(),this.xr?.removeEventListener(`devicechange`,this.checkSupported)}constructor(e,t,n,r,i,a,o,c={},u={}){this.webgl=e,this.input=t,this.scene=n,this.camera=r,this.stereoCamera=i,this.pointerHelper=a,this.interactionHelper=o,this.togglePassthrough=new l,this.sessionChanged=new l,this.isSupported=new d(!1),this.xrSession=void 0,this.xrRefSpace=void 0,this.scaleFactor=1,this.prevScale=0,this.prevInput={},this.hit=void 0,this.checkSupported=async()=>{if(!this.xr)this.isSupported.next(!1);else try{let[e,t]=await Promise.all([this.xr.isSessionSupported(`immersive-ar`),this.xr.isSessionSupported(`immersive-vr`)]);this.isSupported.next(e||t)}catch(e){s&&console.warn(e),this.isSupported.next(!1)}},this.props={...V.getDefaultValues(As),...c},this.attribs={...ks,...u},this.hoverSub=this.interactionHelper.events.hover.subscribe(({position:e})=>{this.hit=e}),this.sessionChangedSub=e.xr.changed.subscribe(async()=>{await this.setSession(e.xr.session),this.sessionChanged.next()}),this.checkSupported(),this.xr?.addEventListener(`devicechange`,this.checkSupported),this.keyUpSub=t.keyUp.subscribe(({code:e,modifiers:t,key:n})=>{let r=this.attribs.bindings;$.matchKey(r.exit,e,t,n)&&this.end(),$.matchKey(r.togglePassthrough,e,t,n)&&this.togglePassthrough.next()}),this.gestureSub=t.gesture.subscribe(({scale:e,button:t,modifiers:n})=>{let r=this.attribs.bindings;$.match(r.gestureScale,t,n)&&this.setScaleFactor(e)})}}})))()}var Ns;function Ps(){return(Ps=e((()=>{Ns=`
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
`})))()}function Fs(e,t){let n={...ft,tPreviousLevel:z.create(t),uInvSize:z.create(N()),uOffset:z.create(N())},r={...Is},i=st(e,`triangles`,Ls,r,n);return _t(i,n)}var Is,Ls;function Rs(){return(Rs=e((()=>{M(),le(),ht(),Ye(),mt(),Ps(),Ct(),ut(),ct(),Is={...jt,tPreviousLevel:X(`texture`,`alpha`,`float`,`nearest`),uInvSize:Z(`v2`),uOffset:Z(`v2`)},Ls=J(`hi-z`,ot,Ns)})))()}function zs(e){return Xs[0]=(1<<23)*((e<-126?-126:e)+126.94269504),Zs[0]}function Bs(e){return zs(1.44269504*e)}function Vs(e){return tc[0]=e,ec[0]*1.1920928955078125e-7-126.94269504}function Hs(e){uc[0]=.2036393768073031,uc[1]=.015124940802184232,uc[2]=-.003222590162557957,uc[3]=e;let t=lc[3]&2147483648;lc[3]&=2147483647;let n=ac*e-oc*e*uc[3],r=n*n;return lc[0]|=t,lc[1]|=t,lc[2]^=t,sc*n+r*(uc[0]+r*(uc[1]+r*uc[2]))}function Us(e){let t=e*ic|0;return Hs(((e<0?-.5:.5)+t)*rc-e)}function Ws(e){return Us(e+nc)}function Gs(e){return pc*e-e*(Math.abs(e)-1)*(.2447+.0663*Math.abs(e))}function Ks(e,t){let n=Math.abs(t),r=Math.abs(e),i=Math.max(n,r);return r=Math.min(n,r),n=Gs(r/i),n=Math.abs(e)>Math.abs(t)?nc-n:n,n=t<0?Math.PI-n:n,n=e<0?-n:n,n}function qs(e){return e<0?Math.PI-((e*.124605335+.1570634)*(.99418175+e)+Math.sqrt(2+2*e)):(e*-.124605335+.1570634)*(.99418175-e)+Math.sqrt(2-2*e)}var Js,Ys,Xs,Zs,Qs,$s,ec,tc,nc,rc,ic,ac,oc,sc,cc,lc,uc,dc,fc,pc;function mc(){return(mc=e((()=>{Js=new ArrayBuffer(4),new Int32Array(Js),new Float32Array(Js),Ys=new ArrayBuffer(4),Xs=new Int32Array(Ys),Zs=new Float32Array(Ys),Qs=new ArrayBuffer(8),new Int32Array(Qs),new Float32Array(Qs),$s=new ArrayBuffer(4),ec=new Int32Array($s),tc=new Float32Array($s),nc=Math.PI/2,rc=2*Math.PI,ic=1/(2*Math.PI),ac=4/Math.PI,oc=4/(Math.PI*Math.PI),sc=.7844448837454894,cc=new ArrayBuffer(16),lc=new Int32Array(cc),uc=new Float32Array(cc),dc=new ArrayBuffer(8),new Int32Array(dc),new Float32Array(dc),fc=new ArrayBuffer(4),new Int32Array(fc),new Float32Array(fc),pc=Math.PI/4})))()}function hc(e,t,n){return t*n/((n-t)*e-n)}function gc(e,t,n){return e*(t-n)-t}function _c(e,t,n,r){return r[11]===-1?hc(e,t,n):gc(e,t,n)}function vc(e,t,n,r){let i=t[0]*n,a=t[1]*n,o=t[2]*n,s=t[2]*t[2]-n*n,c=Math.sqrt(t[0]*t[0]+s),l=(c*t[0]-o)/(c*t[2]+i)*r[0],u=(c*t[0]+o)/(c*t[2]-i)*r[0],d=Math.sqrt(t[1]*t[1]+s),f=(d*t[1]-o)/(d*t[2]+a)*r[5],p=(d*t[1]+o)/(d*t[2]-a)*r[5];return Sc(e,u*-.5+.5,f*.5+.5,l*-.5+.5,p*.5+.5)}function yc(e,t,n,r){let i=r[0],a=r[5],o=(t[0]+n)*i,s=(t[0]-n)*i,c=(t[1]+n)*a,l=(t[1]-n)*a;return Sc(e,s*.5+.5,c*-.5+.5,o*.5+.5,l*-.5+.5)}function bc(e,t,n,r){return r[11]===-1?vc(e,t,n,r):yc(e,t,n,r)}var xc,Sc,Cc,wc,Tc;function Ec(){return(Ec=e((()=>{Rs(),$e(),mc(),W(),M(),pe(),i(),le(),cn(),R(),xc=g.transformMat4,Sc=K.set,Cc=Vs,wc={enabled:V.Boolean(!1,{description:`Hierarchical Z-buffer occlusion culling. Only available for WebGL2.`}),maxFrameLag:V.Numeric(10,{min:1,max:30,step:1},{description:`Maximum number of frames to wait for Z-buffer data.`}),minLevel:V.Numeric(3,{min:1,max:10,step:1})},Tc=class{getByteCount(){return this.supported?this.tex.getByteCount()+this.buf.getByteCount()+this.levelData.reduce((e,t)=>e+t.texture.getByteCount(),0):0}clear(){if(!this.supported)return;let{gl:e}=this.webgl;rt(e)&&(this.sync!==null&&(e.deleteSync(this.sync),this.sync=null),this.frameLag=0,this.ready=!1,this.debug&&(this.debug.rect.style.display=`none`,this.debug.container.style.display=`none`))}render(e){if(!this.supported||!this.props.enabled)return;let{gl:t,state:n}=this.webgl;if(!rt(t)||this.sync!==null)return;this.nextNear=e.near,this.nextFar=e.far,A.copy(this.nextView,e.view),A.copy(this.nextProjection,e.projection),o&&this.webgl.timer.mark(`hi-Z`),n.disable(t.CULL_FACE),n.disable(t.BLEND),n.disable(t.DEPTH_TEST),n.disable(t.SCISSOR_TEST),n.depthMask(!1),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0);let r=this.renderable.values,i=2**(Math.ceil(Math.log(Math.max(t.drawingBufferWidth,t.drawingBufferHeight))/Math.log(2))-1);for(let e=0,a=this.levelData.length;e<a;++e){let a=this.levelData[e];a.framebuffer.bind(),e>0?(z.update(r.uInvSize,a.invSize),z.update(r.uOffset,N.set(r.uOffset.ref.value,0,0)),z.update(r.tPreviousLevel,this.levelData[e-1].texture)):(z.update(r.uInvSize,N.set(r.uInvSize.ref.value,1/i,1/i)),z.update(r.uOffset,N.set(r.uOffset.ref.value,this.viewport.x/t.drawingBufferWidth,this.viewport.y/t.drawingBufferHeight)),z.update(r.tPreviousLevel,this.drawPass.depthTextureOpaque)),n.currentRenderItemId=-1,n.viewport(0,0,a.size[0],a.size[1]),t.clear(t.COLOR_BUFFER_BIT),this.renderable.update(),this.renderable.render(),e>=this.props.minLevel&&(this.tex.bind(0),t.copyTexSubImage2D(t.TEXTURE_2D,0,a.offset,0,0,0,a.size[0],a.size[1]),this.tex.unbind(0))}this.tex.attachFramebuffer(this.fb,0);let a=this.tex.getWidth(),s=this.tex.getHeight();this.buf.read(0,0,a,s),this.sync=t.fenceSync(t.SYNC_GPU_COMMANDS_COMPLETE,0),t.flush(),o&&this.webgl.timer.markEnd(`hi-Z`)}tick(){if(!this.supported||!this.props.enabled||this.sync===null)return;let{gl:e}=this.webgl;if(!rt(e))return;let t=e.clientWaitSync(this.sync,0,0);t===e.WAIT_FAILED||this.frameLag>=this.props.maxFrameLag?(e.deleteSync(this.sync),this.sync=null,this.frameLag=0,this.ready=!1):t===e.TIMEOUT_EXPIRED?this.frameLag+=1:(this.buf.getSubData(this.buffer),e.deleteSync(this.sync),this.sync=null,this.frameLag=0,this.ready=!0,this.near=this.nextNear,this.far=this.nextFar,A.copy(this.view,this.nextView),A.copy(this.projection,this.nextProjection))}transform(e){let{view:t,vp:n}=this;return xc(n,e.center,t),{vp:n,r:e.radius*1.2+1.52}}project(e,t){let{projection:n,aabb:r,viewport:i}=this;bc(r,e,t,n);let a=r[2]-r[0],o=r[3]-r[1],s=Math.max(a*i.width,o*i.height);return{aabb:r,w:a,h:o,pr:s,lod:Math.ceil(Cc(s/2))}}setViewport(e,t,n,r){if(!this.supported)return;n=Math.max(n,2),r=Math.max(r,2),Ut.set(this.viewport,e,t,n,r);let i=Math.ceil(Math.log(Math.max(n,r))/Math.log(2));if(i===this.levelData.length)return;let{minLevel:a}=this.props;this.buffer=new Float32Array(2**(i-a)*2**(i-1-a)),this.tex.define(2**(i-a),2**(i-1-a));for(let e of this.levelData)e.framebuffer.destroy(),e.texture.destroy();this.levelData.length=0;for(let e=0;e<i;++e){let t=this.webgl.resources.framebuffer(),n=2**(i-e-1),r=N.create(n,n),a=N.create(1/n,1/n),o=this.webgl.resources.texture(`image-float32`,`alpha`,`float`,`nearest`);o.define(n,n),o.attachFramebuffer(t,0),this.levelData.push({texture:o,framebuffer:t,size:r,invSize:a,offset:0})}let o=0;for(let e=0,t=i;e<t;++e){let t=this.levelData[e];e>=a&&(this.levelData[e].offset=o,o+=t.size[0])}this.clear()}setProps(e){if(this.supported){if(this.props.minLevel!==e.minLevel){Object.assign(this.props,e);let{x:t,y:n,width:r,height:i}=this.viewport;this.setViewport(t,n,r,i)}else Object.assign(this.props,e),this.props.enabled||this.clear()}}initDebug(e){if(!e.parentElement)return;let t=document.createElement(`div`);Object.assign(t.style,{display:`block`,position:`absolute`,pointerEvents:`none`}),e.parentElement.appendChild(t);let n=document.createElement(`canvas`),r=n.getContext(`2d`);if(!r)throw Error(`Could not create canvas 2d context`);Object.assign(n.style,{width:`100%`,height:`100%`,imageRendering:`pixelated`,position:`relative`,pointerEvents:`none`}),t.appendChild(n);let i=document.createElement(`div`);Object.assign(i.style,{display:`none`,position:`absolute`,pointerEvents:`none`}),e.parentElement.appendChild(i),this.debug={container:t,canvas:n,ctx:r,rect:i}}canDebug(e){return this.supported&&this.props.enabled&&this.ready&&!!this.debug}showRect(e,t){if(!this.canDebug(this.debug))return;let{gl:{drawingBufferHeight:n},pixelRatio:r}=this.webgl,{viewport:{x:i,y:a,width:o,height:s}}=this,c=(e[0]*o+i)/r,l=(e[1]*s-a)/r,u=(e[2]*o+i)/r,d=(e[3]*s-a)/r,f=(n-s)/r;Object.assign(this.debug.rect.style,{border:t?`solid red`:`solid green`,display:`block`,left:`${c}px`,top:`${l+f}px`,width:`${u-c}px`,height:`${d-l}px`})}showBuffer(e){if(!this.canDebug(this.debug))return;if(e>=this.levelData.length||e<this.props.minLevel){this.debug.container.style.display=`none`;return}let{offset:t,size:[n,r]}=this.levelData[e],i=this.tex.getWidth(),a=new Uint8ClampedArray(n*r*4);a.fill(255);for(let e=0;e<r;++e)for(let o=0;o<n;++o){let s=(r-e-1)*n+o,c=this.buffer[e*i+o+t]*255;a[s*4+0]=c,a[s*4+3]=255-c}let o=new ImageData(a,n,r);this.debug.canvas.width=o.width,this.debug.canvas.height=o.height,this.debug.ctx.putImageData(o,0,0);let{viewport:{x:s,y:c,width:l,height:u},webgl:{pixelRatio:d}}=this;Object.assign(this.debug.container.style,{display:`block`,bottom:`${c/d}px`,left:`${s/d}px`,width:`${l/d}px`,height:`${u/d}px`})}debugOcclusion(e){if(!this.canDebug(this.debug))return;if(!e){this.debug.rect.style.display=`none`,this.debug.container.style.display=`none`;return}let t=this.isOccluded(e),{vp:n,r}=this.transform(e),{aabb:i,lod:a}=this.project(n,r);this.showRect(i,t),this.showBuffer(a)}reset(){this.sync=null,this.ready=!1,this.frameLag=0,this.levelData.length=0;let{x:e,y:t,width:n,height:r}=this.viewport;this.setViewport(e,t,n,r)}dispose(){if(this.supported){this.clear(),this.fb.destroy(),this.tex.destroy(),this.buf.destroy(),this.renderable.dispose();for(let e of this.levelData)e.framebuffer.destroy(),e.texture.destroy()}}constructor(e,t,n,r){this.webgl=e,this.drawPass=t,this.viewport=Ut(),this.near=0,this.far=0,this.view=A(),this.projection=A(),this.nextNear=0,this.nextFar=0,this.nextView=A(),this.nextProjection=A(),this.aabb=K(),this.vp=g(),this.levelData=[],this.sync=null,this.buffer=new Float32Array,this.frameLag=0,this.ready=!1,this.isOccluded=e=>{if(!this.supported||!this.props.enabled||!this.ready)return!1;let{vp:t,r:n}=this.transform(e),{near:r,far:i,projection:a}=this,o=t[2]+n;if(-o<r)return!1;let{aabb:s,w:c,h:l,lod:u}=this.project(t,n);if(u>=this.levelData.length||u<this.props.minLevel)return!1;let{offset:d,size:f}=this.levelData[u],p=s[0]+c/2,m=s[1]+l/2,h=f[0],g=p*h,_=m*h,v=Math.floor(g),y=Math.ceil(_),b=this.tex.getWidth();if(v+1>=h||y+1>=h)return!1;let x=(h-y-1)*b+v+d;if(o>_c(this.buffer[x],r,i,a)||o>_c(this.buffer[x+1],r,i,a))return!1;let S=(h-y+1-1)*b+v+d;return!(o>_c(this.buffer[S],r,i,a)||o>_c(this.buffer[S+1],r,i,a))},this.props={...V.getDefaultValues(wc),...r};let{gl:i,extensions:a}=e;if(!rt(i)||!a.colorBufferFloat){s&&console.log(`Missing webgl2 and/or colorBufferFloat support required for "Hi-Z"`),this.supported=!1;return}this.fb=e.resources.framebuffer(),this.tex=e.resources.texture(`image-float32`,`alpha`,`float`,`nearest`),this.tex.attachFramebuffer(this.fb,0);let o=i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT),c=i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE);o!==i.RED||c!==i.FLOAT?(s&&console.log(`Missing red/float reading support required for "Hi-Z"`),this.supported=!1):(this.supported=!0,this.buf=e.resources.pixelPack(`alpha`,`float`),this.renderable=Fs(e,this.drawPass.depthTextureOpaque),s&&n&&this.initDebug(n))}}})))()}var Dc;function Oc(){return(Oc=e((()=>{Dc=`
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
`})))()}function kc(e,t,n){let r={...ft,tWboitA:z.create(t),tWboitB:z.create(n),uTexSize:z.create(N.create(t.getWidth(),t.getHeight()))},i={...Ac},a=st(e,`triangles`,jc,i,r);return _t(a,r)}var Ac,jc,Mc;function Nc(){return(Nc=e((()=>{ct(),ht(),Ye(),mt(),ut(),P(),Ct(),Oc(),W(),i(),Ac={...jt,tWboitA:X(`texture`,`rgba`,`float`,`nearest`),tWboitB:X(`texture`,`rgba`,`float`,`nearest`),uTexSize:Z(`v2`)},jc=J(`evaluate-wboit`,ot,Dc),Mc=class e{get supported(){return this._supported}getByteCount(){return this._supported?this.textureA.getByteCount()+this.textureB.getByteCount()+this.depthRenderbuffer.getByteCount():0}bind(){let{state:e,gl:t}=this.webgl;this.framebuffer.bind(),e.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT),e.disable(t.DEPTH_TEST),e.blendFuncSeparate(t.ONE,t.ONE,t.ZERO,t.ONE_MINUS_SRC_ALPHA),e.enable(t.BLEND)}render(){o&&this.webgl.timer.mark(`WboitPass.render`);let{state:e,gl:t}=this.webgl;e.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA),e.enable(t.BLEND),this.renderable.update(),this.renderable.render(),o&&this.webgl.timer.markEnd(`WboitPass.render`)}setSize(e,t){let[n,r]=this.renderable.values.uTexSize.ref.value;(e!==n||t!==r)&&(this.textureA.define(e,t),this.textureB.define(e,t),this.depthRenderbuffer.setSize(e,t),z.update(this.renderable.values.uTexSize,N.set(this.renderable.values.uTexSize.ref.value,e,t)))}reset(){this._supported&&this._init()}_init(){let{extensions:{drawBuffers:e}}=this.webgl;this.framebuffer.bind(),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1]),this.textureA.attachFramebuffer(this.framebuffer,`color0`),this.textureB.attachFramebuffer(this.framebuffer,`color1`),this.depthRenderbuffer.attachFramebuffer(this.framebuffer)}static isSupported(e){let{extensions:{drawBuffers:t,textureFloat:n,colorBufferFloat:r,depthTexture:i}}=e;if(!n||!r||!i||!t){if(s){let e=[];n||e.push(`textureFloat`),r||e.push(`colorBufferFloat`),i||e.push(`depthTexture`),t||e.push(`drawBuffers`),console.log(`Missing "${e.join(`", "`)}" extensions required for "wboit"`)}return!1}return!0}constructor(t,n,r){if(this.webgl=t,this._supported=!1,!e.isSupported(t))return;let{resources:i,isWebGL2:a}=t;this.textureA=i.texture(`image-float32`,`rgba`,`float`,`nearest`),this.textureA.define(n,r),this.textureB=i.texture(`image-float32`,`rgba`,`float`,`nearest`),this.textureB.define(n,r),this.depthRenderbuffer=i.renderbuffer(a?`depth32f-stencil8`:`depth-stencil`,`depth-stencil`,n,r),this.renderable=kc(t,this.textureA,this.textureB),this.framebuffer=i.framebuffer(),this._supported=!0,this._init()}}})))()}var Pc;function Fc(){return(Fc=e((()=>{Pc=`
precision highp float;

uniform sampler2D tDpoitFrontColor;
uniform vec2 uTexSize;

void main() {
    vec2 coords = gl_FragCoord.xy / uTexSize;
    gl_FragColor = texture2D(tDpoitFrontColor, coords);
}
`})))()}var Ic;function Lc(){return(Lc=e((()=>{Ic=`
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
`})))()}function Rc(e,t){let n={...ft,tDpoitBackColor:z.create(t),uTexSize:z.create(N.create(t.getWidth(),t.getHeight()))},r={...Bc},i=st(e,`triangles`,Vc,r,n);return _t(i,n)}function zc(e,t){let n={...ft,tDpoitFrontColor:z.create(t),uTexSize:z.create(N.create(t.getWidth(),t.getHeight()))},r={...Hc},i=st(e,`triangles`,Uc,r,n);return _t(i,n)}var Bc,Vc,Hc,Uc,Wc;function Gc(){return(Gc=e((()=>{ct(),ht(),Ye(),mt(),ut(),P(),Ct(),Fc(),Lc(),W(),i(),$e(),Bc={...jt,tDpoitBackColor:X(`texture`,`rgba`,`float`,`nearest`),uTexSize:Z(`v2`)},Vc=J(`blend-back-dpoit`,ot,Ic),Hc={...jt,tDpoitFrontColor:X(`texture`,`rgba`,`float`,`nearest`),uTexSize:Z(`v2`)},Uc=J(`evaluate-dpoit`,ot,Pc),Wc=class e{get supported(){return this._supported}getByteCount(){return this._supported?this.depthTextures[0].getByteCount()+this.depthTextures[1].getByteCount()+this.colorFrontTextures[0].getByteCount()+this.colorFrontTextures[1].getByteCount()+this.colorBackTextures[0].getByteCount()+this.colorBackTextures[1].getByteCount():0}bind(){let{state:e,gl:t,extensions:{blendMinMax:n}}=this.webgl;return this.passCount=0,this.depthFramebuffers[0].bind(),e.clearColor(this.DEPTH_CLEAR_VALUE,this.DEPTH_CLEAR_VALUE,0,0),t.clear(t.COLOR_BUFFER_BIT),this.depthFramebuffers[1].bind(),e.clearColor(-this.MIN_DEPTH,this.MAX_DEPTH,0,0),t.clear(t.COLOR_BUFFER_BIT),this.colorFramebuffers[0].bind(),e.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),this.colorFramebuffers[1].bind(),e.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),this.depthFramebuffers[0].bind(),e.blendEquation(n.MAX),e.disable(t.DEPTH_TEST),e.depthMask(!1),{depth:this.depthTextures[1],frontColor:this.colorFrontTextures[1],backColor:this.colorBackTextures[1]}}bindDualDepthPeeling(){let{state:e,gl:t,extensions:{blendMinMax:n}}=this.webgl;return this.readId=this.passCount%2,this.writeId=1-this.readId,this.passCount+=1,this.depthFramebuffers[this.writeId].bind(),e.clearColor(this.DEPTH_CLEAR_VALUE,this.DEPTH_CLEAR_VALUE,0,0),t.clear(t.COLOR_BUFFER_BIT),this.colorFramebuffers[this.writeId].bind(),e.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),this.depthFramebuffers[this.writeId].bind(),e.blendEquation(n.MAX),e.disable(t.DEPTH_TEST),e.depthMask(!1),{depth:this.depthTextures[this.readId],frontColor:this.colorFrontTextures[this.readId],backColor:this.colorBackTextures[this.readId]}}renderBlendBack(){o&&this.webgl.timer.mark(`DpoitPass.renderBlendBack`);let{state:e,gl:t}=this.webgl;e.blendEquation(t.FUNC_ADD),e.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA),z.update(this.blendBackRenderable.values.tDpoitBackColor,this.colorBackTextures[this.writeId]),this.blendBackRenderable.update(),this.blendBackRenderable.render(),o&&this.webgl.timer.markEnd(`DpoitPass.renderBlendBack`)}render(){o&&this.webgl.timer.mark(`DpoitPass.render`);let{state:e,gl:t}=this.webgl;e.blendEquation(t.FUNC_ADD),e.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),z.update(this.renderable.values.tDpoitFrontColor,this.colorFrontTextures[this.writeId]),this.renderable.update(),this.renderable.render(),o&&this.webgl.timer.markEnd(`DpoitPass.render`)}setSize(e,t){let[n,r]=this.renderable.values.uTexSize.ref.value;if(e!==n||t!==r){for(let n=0;n<2;n++)this.depthTextures[n].define(e,t),this.colorFrontTextures[n].define(e,t),this.colorBackTextures[n].define(e,t);z.update(this.renderable.values.uTexSize,N.set(this.renderable.values.uTexSize.ref.value,e,t)),z.update(this.blendBackRenderable.values.uTexSize,N.set(this.blendBackRenderable.values.uTexSize.ref.value,e,t))}}reset(){this._supported&&this._init()}_init(){let{extensions:{drawBuffers:e}}=this.webgl;for(let t=0;t<2;t++)this.depthFramebuffers[t].bind(),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1,e.COLOR_ATTACHMENT2]),this.colorFrontTextures[t].attachFramebuffer(this.depthFramebuffers[t],`color0`),this.colorBackTextures[t].attachFramebuffer(this.depthFramebuffers[t],`color1`),this.depthTextures[t].attachFramebuffer(this.depthFramebuffers[t],`color2`),this.stencil?.attachFramebuffer(this.depthFramebuffers[t]),this.colorFramebuffers[t].bind(),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1]),this.colorFrontTextures[t].attachFramebuffer(this.colorFramebuffers[t],`color0`),this.colorBackTextures[t].attachFramebuffer(this.colorFramebuffers[t],`color1`)}static isSupported(e){let{extensions:{drawBuffers:t,textureFloat:n,colorBufferFloat:r,depthTexture:i,blendMinMax:a}}=e;if(!n||!r||!i||!t||!a){if(s){let e=[];n||e.push(`textureFloat`),r||e.push(`colorBufferFloat`),i||e.push(`depthTexture`),t||e.push(`drawBuffers`),a||e.push(`blendMinMax`),console.log(`Missing "${e.join(`", "`)}" extensions required for "dpoit"`)}return!1}return!0}constructor(t,n,r,i=null){if(this.webgl=t,this.stencil=i,this.DEPTH_CLEAR_VALUE=-99999,this.MAX_DEPTH=1,this.MIN_DEPTH=0,this.passCount=0,this._supported=!1,!e.isSupported(t))return;let{resources:a,extensions:{colorBufferHalfFloat:o,textureHalfFloat:s}}=t;rt(t.gl)?(this.depthTextures=[a.texture(`image-float32`,`rg`,`float`,`nearest`),a.texture(`image-float32`,`rg`,`float`,`nearest`)],this.colorFrontTextures=o&&s?[a.texture(`image-float16`,`rgba`,`fp16`,`nearest`),a.texture(`image-float16`,`rgba`,`fp16`,`nearest`)]:[a.texture(`image-float32`,`rgba`,`float`,`nearest`),a.texture(`image-float32`,`rgba`,`float`,`nearest`)],this.colorBackTextures=o&&s?[a.texture(`image-float16`,`rgba`,`fp16`,`nearest`),a.texture(`image-float16`,`rgba`,`fp16`,`nearest`)]:[a.texture(`image-float32`,`rgba`,`float`,`nearest`),a.texture(`image-float32`,`rgba`,`float`,`nearest`)]):(this.depthTextures=[a.texture(`image-float32`,`rgba`,`float`,`nearest`),a.texture(`image-float32`,`rgba`,`float`,`nearest`)],this.colorFrontTextures=[a.texture(`image-float32`,`rgba`,`float`,`nearest`),a.texture(`image-float32`,`rgba`,`float`,`nearest`)],this.colorBackTextures=[a.texture(`image-float32`,`rgba`,`float`,`nearest`),a.texture(`image-float32`,`rgba`,`float`,`nearest`)]),this.depthTextures[0].define(n,r),this.depthTextures[1].define(n,r),this.colorFrontTextures[0].define(n,r),this.colorFrontTextures[1].define(n,r),this.colorBackTextures[0].define(n,r),this.colorBackTextures[1].define(n,r),this.depthFramebuffers=[a.framebuffer(),a.framebuffer()],this.colorFramebuffers=[a.framebuffer(),a.framebuffer()],this.blendBackRenderable=Rc(t,this.colorBackTextures[0]),this.renderable=zc(t,this.colorFrontTextures[0]),this._supported=!0,this._init()}}})))()}var Kc;function qc(){return(qc=e((()=>{cn(),P(),W(),_a(),Nc(),Gc(),Yi(),Jo(),ct(),i(),Mr(),ni(),Ui(),Kc=class{setTransparency(e){e===`wboit`?(this.transparencyMode=this.wboit.supported?`wboit`:`blended`,s&&!this.wboit.supported&&console.log(`Missing "wboit" support, falling back to "blended".`)):e===`dpoit`?(this.transparencyMode=this.dpoit.supported?`dpoit`:`blended`,s&&!this.dpoit.supported&&console.log(`Missing "dpoit" support, falling back to "blended".`)):this.transparencyMode=`blended`,this.depthTextureOpaque.detachFramebuffer(this.postprocessing.target.framebuffer,`depth`),this.marking.invalidate()}get transparency(){return this.transparencyMode}constructor(e,t,n,r,i){this.webgl=e,this.transparencyMode=`blended`;let{extensions:a,resources:o,isWebGL2:s}=e;this.drawTarget=e.createDrawTarget(),this.colorTarget=e.createRenderTarget(n,r,`depth-stencil`,`uint8`,`linear`),this.transparentColorTarget=e.createRenderTarget(n,r,`none`,`uint8`,`linear`),this.packedDepth=!a.depthTexture,this.depthTargetTransparent=e.createRenderTarget(n,r,`depth-stencil`,`uint8`,`nearest`),this.depthTextureTransparent=this.depthTargetTransparent.texture,this.depthTargetOpaque=this.packedDepth?e.createRenderTarget(n,r,`depth-stencil`):null,this.depthTextureOpaque=this.depthTargetOpaque?this.depthTargetOpaque.texture:o.texture(`image-depth`,`depth-stencil`,s?`float-stencil`:`uint24-8`,`nearest`),this.packedDepth||this.depthTextureOpaque.define(n,r),this.wboit=new Mc(e,n,r),this.dpoit=new Wc(e,n,r,this.colorTarget.depthRenderbuffer),this.marking=new Vo(e,n,r),this.postprocessing=new qi(e,t,this),this.ssaoShading={name:`ssao`,ssao:this.postprocessing.ssao.ssaoDepthTexture},this.antialiasing=new Ji(e,n,r),this.dof=new kr(e,n,r),this.copyFbo=Qe(e,this.colorTarget.texture),this.setTransparency(i)}getByteCount(){return this.drawTarget.getByteCount()+this.colorTarget.getByteCount()+this.transparentColorTarget.getByteCount()+this.depthTargetTransparent.getByteCount()+(this.depthTargetOpaque?this.depthTargetOpaque.getByteCount():this.depthTextureOpaque.getByteCount())+this.wboit.getByteCount()+this.dpoit.getByteCount()+this.marking.getByteCount()+this.postprocessing.getByteCount()+this.antialiasing.getByteCount()+this.dof.getByteCount()}reset(){this.wboit.reset(),this.dpoit.reset(),this.postprocessing.reset(),this.marking.invalidate()}setSize(e,t){let n=this.colorTarget.getWidth(),r=this.colorTarget.getHeight();(e!==n||t!==r)&&(this.colorTarget.setSize(e,t),this.depthTargetTransparent.setSize(e,t),this.transparentColorTarget.setSize(e,t),this.depthTargetOpaque?this.depthTargetOpaque.setSize(e,t):this.depthTextureOpaque.define(e,t),z.update(this.copyFbo.values.uTexSize,N.set(this.copyFbo.values.uTexSize.ref.value,e,t))),this.wboit.supported&&this.wboit.setSize(e,t),this.dpoit.supported&&this.dpoit.setSize(e,t),this.marking.setSize(e,t),this.postprocessing.setSize(e,t),this.antialiasing.setSize(e,t),this.dof.setSize(e,t)}renderEmissiveBloom(e,t,n,r){let i=this.postprocessing.bloom;i.emissiveTarget.bind(),e.clear(!1,!0,!0);let a=!this.packedDepth;a&&this.depthTextureOpaque.attachFramebuffer(i.emissiveTarget.framebuffer,`depth`),e.renderEmissiveOpaque(n.primitives,t,this.depthTextureTransparent,a),r&&n.opacityAverage<1&&e.renderEmissiveTransparent(n.primitives,t,this.depthTextureTransparent),a&&(this.depthTextureOpaque.detachFramebuffer(i.emissiveTarget.framebuffer,`depth`),i.emissiveTarget.depthRenderbuffer?.attachFramebuffer(i.emissiveTarget.framebuffer))}_renderBloom(e,t,n,r){if(!Gr.isEnabled(r)||r.bloom.name!==`on`)return!1;let i=this.postprocessing.bloom,a=r.bloom.params,o=a.mode===`emissive`;return o&&n.emissiveAverage===0?!1:(o&&this.renderEmissiveBloom(e,t,n,a.transparency),n.opacityAverage>=1&&(this.transparentColorTarget.bind(),e.clear(!1,!1,!0),this.depthTargetTransparent.bind(),e.clearDepth(!0)),i.update(this.colorTarget.texture,this.transparentColorTarget.texture,i.emissiveTarget.texture,this.depthTextureOpaque,this.depthTextureTransparent,a,t,!0),i.render(t.viewport),!0)}_renderDpoit(e,t,n,r,i,a){if(!this.dpoit.supported)throw Error(`expected dpoit to be supported`);this.depthTextureOpaque.attachFramebuffer(this.colorTarget.framebuffer,`depth`),e.clear(!0),n.hasOpaque&&e.renderOpaque(n.primitives,t),this.depthTextureOpaque.detachFramebuffer(this.colorTarget.framebuffer,`depth`),qi.isTransparentDepthRequired(n,a)&&(this.depthTargetTransparent.bind(),e.clearDepth(!0),n.opacityAverage<1&&e.renderDepthTransparent(n.primitives,t,this.depthTextureOpaque));let s=qi.isEnabled(a);if(n.opacityAverage<1){let i=s?this.transparentColorTarget:this.colorTarget;s&&(i.bind(),e.clear(!1,!1,!0));let a=this.dpoit.bind();e.renderDpoitTransparent(n.primitives,t,this.depthTextureOpaque,a);for(let a=0;a<r;a++){o&&this.webgl.timer.mark(`DpoitPass.layer`);let a=this.dpoit.bindDualDepthPeeling();e.renderDpoitTransparent(n.primitives,t,this.depthTextureOpaque,a),r>1&&(i.bind(),this.dpoit.renderBlendBack()),o&&this.webgl.timer.markEnd(`DpoitPass.layer`)}i.bind(),this.dpoit.render()}qi.isEnabled(a)&&this.postprocessing.render(t,n,!1,i,e.props.backgroundColor,a,e.light,e.ambientColor,this._renderBloom(e,t,n,a)),n.volumes.renderables.length>0&&e.renderVolume(n.volumes,t,this.depthTextureOpaque)}_renderWboit(e,t,n,r,i){if(!this.wboit.supported)throw Error(`expected wboit to be supported`);this.depthTextureOpaque.attachFramebuffer(this.colorTarget.framebuffer,`depth`),e.clear(!0),n.hasOpaque&&e.renderOpaque(n.primitives,t),qi.isTransparentDepthRequired(n,i)&&(this.depthTargetTransparent.bind(),e.clearDepth(!0),n.opacityAverage<1&&e.renderDepthTransparent(n.primitives,t,this.depthTextureOpaque));let a=qi.isEnabled(i);if(n.opacityAverage<1){let r=a?this.transparentColorTarget:this.colorTarget;a&&(r.bind(),e.clear(!1,!1,!0)),this.wboit.bind(),e.renderWboitTransparent(n.primitives,t,this.depthTextureOpaque),r.bind(),this.wboit.render()}qi.isEnabled(i)&&this.postprocessing.render(t,n,!1,r,e.props.backgroundColor,i,e.light,e.ambientColor,this._renderBloom(e,t,n,i)),n.volumes.renderables.length>0&&(this.wboit.bind(),e.renderWboitTransparent(n.volumes,t,this.depthTextureOpaque),(a?this.postprocessing.target:this.colorTarget).bind(),this.wboit.render())}_renderBlended(e,t,n,r,i,a){if(r?this.drawTarget.bind():this.packedDepth?this.colorTarget.bind():this.depthTextureOpaque.attachFramebuffer(this.colorTarget.framebuffer,`depth`),e.clear(!0),n.hasOpaque&&e.renderOpaque(n.primitives,t),r)n.opacityAverage<1&&e.renderBlendedTransparent(n.primitives,t);else{this.depthTargetOpaque&&(this.depthTargetOpaque.bind(),e.clearDepth(!0),e.renderDepthOpaque(n.primitives,t),this.colorTarget.bind()),qi.isTransparentDepthRequired(n,a)&&(this.depthTargetTransparent.bind(),e.clearDepth(!0),n.opacityAverage<1&&e.renderDepthTransparent(n.primitives,t,this.depthTextureOpaque));let r=qi.isEnabled(a);if(n.opacityAverage<1&&(r&&(this.transparentColorTarget.bind(),e.clear(!1,!1,!0),this.packedDepth?this.colorTarget.depthRenderbuffer?.attachFramebuffer(this.transparentColorTarget.framebuffer):this.depthTextureOpaque.attachFramebuffer(this.transparentColorTarget.framebuffer,`depth`)),e.renderBlendedTransparent(n.primitives,t),r&&(this.packedDepth?this.colorTarget.depthRenderbuffer?.detachFramebuffer(this.transparentColorTarget.framebuffer):this.depthTextureOpaque.detachFramebuffer(this.transparentColorTarget.framebuffer,`depth`))),r&&(this.packedDepth?this.colorTarget.depthRenderbuffer?.detachFramebuffer(this.postprocessing.target.framebuffer):this.depthTextureOpaque.detachFramebuffer(this.postprocessing.target.framebuffer,`depth`),this.postprocessing.render(t,n,!1,i,e.props.backgroundColor,a,e.light,e.ambientColor,this._renderBloom(e,t,n,a)),this.packedDepth?this.colorTarget.depthRenderbuffer?.attachFramebuffer(this.postprocessing.target.framebuffer):this.depthTextureOpaque.attachFramebuffer(this.postprocessing.target.framebuffer,`depth`)),n.volumes.renderables.length>0){let r=qi.isEnabled(a)?this.postprocessing.target:this.colorTarget;this.packedDepth?this.colorTarget.depthRenderbuffer?.detachFramebuffer(r.framebuffer):this.depthTextureOpaque.detachFramebuffer(r.framebuffer,`depth`),r.bind(),e.renderVolume(n.volumes,t,this.depthTextureOpaque),this.packedDepth?this.colorTarget.depthRenderbuffer?.attachFramebuffer(r.framebuffer):this.depthTextureOpaque.attachFramebuffer(r.framebuffer,`depth`),r.bind()}}}_render(e,t,n,r,i){let{renderer:a,camera:o,scene:s,frame:c}=e;if(o.disabled)return;let l=s.volumes.renderables.length>0,u=qi.isEnabled(r.postprocessing),d=Ji.isEnabled(r.postprocessing),f=kr.isEnabled(r.postprocessing),p=!i&&Vo.hasMarking(s,r),m=!t||p,{x:h,y:g,width:_,height:v}=o.viewport;a.setViewport(h,g,_,v),a.update(o,s,c),n&&!d&&!f&&!m&&!u&&(this.drawTarget.bind(),a.clear(!1));let y=!1;this.transparencyMode===`wboit`&&this.wboit.supported?(this._renderWboit(a,o,s,n,r.postprocessing),y=!0):this.transparencyMode===`dpoit`&&this.dpoit.supported?(this._renderDpoit(a,o,s,r.dpoitIterations,n,r.postprocessing),y=!0):this._renderBlended(a,o,s,!l&&!u&&!d&&!f&&!m,n,r.postprocessing);let b=u?this.postprocessing.target:m||l||y||f?this.colorTarget:this.drawTarget;b.bind(),this._renderHelpers(e,b);let x=this._renderOutput(o,s,r,{offscreen:m,postprocessingEnabled:u,antialiasingEnabled:d,dofEnabled:f,volumeRendering:l,oitEnabled:y});x?i||this.marking.present(e,r,{base:x,toDrawingBuffer:t,offsets:Bo,restart:!0,samples:1,shading:this.getMarkingShading(r.postprocessing)}):this.marking.invalidate(),this.webgl.gl.flush()}_renderHelpers(e,t){let{renderer:n,camera:r,helper:i,frame:a}=e;if(i.debug.isEnabled||i.pointer.isEnabled){if(this.packedDepth||this.depthTextureOpaque.attachFramebuffer(t.framebuffer,`depth`),i.debug.isEnabled){i.debug.syncVisibility();for(let e of i.debug.scenes)n.renderBlended(e,r)}i.pointer.isEnabled&&(i.pointer.setCamera(r),n.update(i.pointer.camera,i.pointer.scene,a),n.renderBlended(i.pointer.scene,i.pointer.camera)),this.packedDepth||this.depthTextureOpaque.detachFramebuffer(t.framebuffer,`depth`)}i.handle.isEnabled&&n.renderBlended(i.handle.scene,r),i.camera.isEnabled&&(i.camera.update(r),n.update(i.camera.camera,i.camera.scene,a),n.renderBlended(i.camera.scene,i.camera.camera))}_renderOutput(e,t,n,r){let{offscreen:i,postprocessingEnabled:a,antialiasingEnabled:o,dofEnabled:s,volumeRendering:c,oitEnabled:l}=r,u=!i,d=!1;if(o){let t=a?this.postprocessing.target.texture:this.colorTarget.texture;this.antialiasing.render(e,t,u&&!s,n.postprocessing)}else u&&!s&&(d=!0);if(s&&n.postprocessing.dof.name===`on`){let r=o?this.antialiasing.target.texture:a?this.postprocessing.target.texture:this.colorTarget.texture;this.dof.update(e,r,this.depthTargetOpaque?.texture||this.depthTextureOpaque,this.depthTextureTransparent,n.postprocessing.dof.params,t.boundingSphereVisible),this.dof.render(e.viewport,u?void 0:this.getColorTarget(n.postprocessing))}else u&&!o&&(d=!0);return d&&(a?this.copyToDrawingBuffer(this.postprocessing.target,e.viewport):(c||l)&&this.copyToDrawingBuffer(this.colorTarget,e.viewport)),i?this.getColorTarget(n.postprocessing):void 0}copyToDrawingBuffer(e,t){let{gl:n,state:r}=this.webgl;this.copyFbo.values.tColor.ref.value!==e.texture&&(z.update(this.copyFbo.values.tColor,e.texture),this.copyFbo.update()),this.drawTarget.bind(),r.enable(n.SCISSOR_TEST),r.disable(n.BLEND),r.disable(n.DEPTH_TEST),r.depthMask(!1);let{x:i,y:a,width:o,height:s}=t;r.viewport(i,a,o,s),r.scissor(i,a,o,s),this.copyFbo.render()}render(e,t,n,r=!1){o&&this.webgl.timer.mark(`DrawPass.render`);let{renderer:i,camera:a,scene:s}=e;this.postprocessing.setTransparentBackground(t.transparentBackground);let c=this.isTransparentBackground(s,t);i.setTransparentBackground(c),i.setDrawingBufferSize(this.colorTarget.getWidth(),this.colorTarget.getHeight()),i.setPixelRatio(this.webgl.pixelRatio),pa.is(a)?(o&&this.webgl.timer.mark(`StereoCamera.left`),this._render({...e,camera:a.left},n,c,t,r),o&&this.webgl.timer.markEnd(`StereoCamera.left`),o&&this.webgl.timer.mark(`StereoCamera.right`),this._render({...e,camera:a.right},n,c,t,r),o&&this.webgl.timer.markEnd(`StereoCamera.right`),this.marking.invalidate()):this._render({...e,camera:a},n,c,t,r),o&&this.webgl.timer.markEnd(`DrawPass.render`)}isTransparentBackground(e,t){let n=t.postprocessing,r=this.postprocessing.background.isEnabled(n),i=!t.transparentBackground&&!r&&Gr.isEnabled(n)&&n.bloom.name===`on`&&(n.bloom.params.mode!==`emissive`||e.emissiveAverage!==0);return t.transparentBackground||r||i}getMarkingShading(e){return Ri.isEnabled(e)?this.ssaoShading:null}getColorTarget(e){return kr.isEnabled(e)?this.dof.target:Ji.isEnabled(e)?this.antialiasing.target:qi.isEnabled(e)?this.postprocessing.target:this.colorTarget}}})))()}function Jc(e,t){let n={...ft,tColor:z.create(t),uTexSize:z.create(N.create(t.getWidth(),t.getHeight())),uWeight:z.create(1)},r={...Xc},i=st(e,`triangles`,Zc,r,n);return _t(i,n)}function Yc(e){return!pa.is(e)}var Xc,Zc,Qc,$c,el;function tl(){return(tl=e((()=>{ct(),Ye(),P(),W(),mt(),ut(),ht(),R(),Jt(),Ct(),ls(),i(),Po(),_a(),Xc={...jt,tColor:X(`texture`,`rgba`,`ubyte`,`nearest`),uTexSize:Z(`v2`),uWeight:Z(`f`)},Zc=J(`compose`,ot,cs),Qc={mode:V.Select(`temporal`,[[`off`,`Off`],[`on`,`On`],[`temporal`,`Temporal`]]),sampleLevel:V.Numeric(2,{min:0,max:5,step:1},{description:`Take level^2 samples.`}),reduceFlicker:V.Boolean(!0,{description:`Reduce flicker in "temporal" mode when marking is disabled (i.e. drawn as part of the scene).`}),reuseOcclusion:V.Boolean(!0,{description:`Reuse occlusion data. It is faster but has some artefacts.`})},$c=class{static isEnabled(e){return e.mode!==`off`}constructor(e,t){this.webgl=e,this.drawPass=t;let{colorBufferFloat:n,textureFloat:r,colorBufferHalfFloat:i,textureHalfFloat:a}=e.extensions,o=t.colorTarget.getWidth(),s=t.colorTarget.getHeight();this.colorTarget=e.createRenderTarget(o,s,`none`);let c=i&&a?`fp16`:n&&r?`float32`:`uint8`;this.composeTarget=e.createRenderTarget(o,s,`none`,c),this.holdTarget=e.createRenderTarget(o,s,`none`),this.compose=Jc(e,t.colorTarget.texture)}getByteCount(){return this.colorTarget.getByteCount()+this.composeTarget.getByteCount()+this.holdTarget.getByteCount()}syncSize(){let e=this.drawPass.colorTarget.getWidth(),t=this.drawPass.colorTarget.getHeight(),[n,r]=this.compose.values.uTexSize.ref.value;(e!==n||t!==r)&&(this.colorTarget.setSize(e,t),this.composeTarget.setSize(e,t),this.holdTarget.setSize(e,t),z.update(this.compose.values.uTexSize,N.set(this.compose.values.uTexSize.ref.value,e,t)))}render(e,t,n,r,i){return n.multiSample.mode===`temporal`&&!i?this.renderTemporalMultiSample(e,t,n,r):(this.renderMultiSample(t,n,r),-2)}renderMultiSample(e,t,n){let{camera:r}=e,{compose:i,composeTarget:a,drawPass:s,webgl:c}=this,{gl:l,state:u}=c;o&&c.timer.mark(`MultiSamplePass.renderMultiSample`);let d=ko(t.multiSample.sampleLevel),{x:f,y:p,width:m,height:h}=r.viewport,g=1/d.length;z.update(i.values.tColor,s.getColorTarget(t.postprocessing).texture),i.update();for(let n=0;n<d.length;++n){let o=d[n];jo(r,o);let c=g+.03125*(-.5+(n+.5)/d.length);z.update(i.values.uWeight,c),n===0||!t.multiSample.reuseOcclusion?s.postprocessing.setOcclusionOffset(0,0):s.postprocessing.setOcclusionOffset(o[0]/m,o[1]/h),s.render(e,t,!1,Yc(r)),a.bind(),u.enable(l.BLEND),u.blendEquationSeparate(l.FUNC_ADD,l.FUNC_ADD),u.blendFuncSeparate(l.ONE,l.ONE,l.ONE,l.ONE),u.disable(l.DEPTH_TEST),u.depthMask(!1),u.viewport(f,p,m,h),u.scissor(f,p,m,h),n===0&&(u.clearColor(0,0,0,0),l.clear(l.COLOR_BUFFER_BIT)),i.render()}s.postprocessing.setOcclusionOffset(0,0),z.update(i.values.uWeight,1),z.update(i.values.tColor,a.texture),i.update(),this.colorTarget.bind(),u.viewport(f,p,m,h),u.scissor(f,p,m,h),u.disable(l.BLEND),i.render(),Mo(r),this.drawPass.marking.present(e,t,{base:this.colorTarget,toDrawingBuffer:n,offsets:d,restart:!0,samples:d.length,shading:s.getMarkingShading(t.postprocessing)}),o&&c.timer.markEnd(`MultiSamplePass.renderMultiSample`)}renderTemporalMultiSample(e,t,n,r){let{camera:i}=t,{compose:a,composeTarget:s,holdTarget:c,drawPass:l,webgl:u}=this,{gl:d,state:f}=u;o&&u.timer.mark(`MultiSamplePass.renderTemporalMultiSample`);let p=ko(n.multiSample.sampleLevel);if(e===-2||e>=p.length)return-2;let{x:m,y:h,width:g,height:_}=i.viewport,v=1/p.length,y=Ao(n.multiSample.sampleLevel),b=e===-1;if(b)l.render(t,n,!1,Yc(i)),z.update(a.values.uWeight,1),z.update(a.values.tColor,l.getColorTarget(n.postprocessing).texture),a.update(),c.bind(),f.disable(d.BLEND),f.disable(d.DEPTH_TEST),f.depthMask(!1),f.viewport(m,h,g,_),f.scissor(m,h,g,_),a.render(),e+=1;else{z.update(a.values.tColor,l.getColorTarget(n.postprocessing).texture),z.update(a.values.uWeight,v),a.update();for(let r=0;r<y;++r){let r=p[e];if(jo(i,r),e===0||!n.multiSample.reuseOcclusion?l.postprocessing.setOcclusionOffset(0,0):l.postprocessing.setOcclusionOffset(r[0]/g,r[1]/_),l.render(t,n,!1,Yc(i)),s.bind(),f.enable(d.BLEND),f.blendEquationSeparate(d.FUNC_ADD,d.FUNC_ADD),f.blendFuncSeparate(d.ONE,d.ONE,d.ONE,d.ONE),f.disable(d.DEPTH_TEST),f.depthMask(!1),f.viewport(m,h,g,_),f.scissor(m,h,g,_),e===0&&(f.clearColor(0,0,0,0),d.clear(d.COLOR_BUFFER_BIT)),a.render(),e+=1,e>=p.length)break}}l.postprocessing.setOcclusionOffset(0,0),this.colorTarget.bind(),f.viewport(m,h,g,_),f.scissor(m,h,g,_);let x=e*v;return x>0&&(z.update(a.values.uWeight,1),z.update(a.values.tColor,s.texture),a.update(),f.disable(d.BLEND),a.render()),x<1&&(z.update(a.values.uWeight,1-x),z.update(a.values.tColor,c.texture),a.update(),x===0?f.disable(d.BLEND):f.enable(d.BLEND),a.render()),Mo(i),this.drawPass.marking.present(t,n,{base:this.colorTarget,toDrawingBuffer:r,offsets:p,restart:b,samples:b?1:y,shading:l.getMarkingShading(n.postprocessing)}),o&&u.timer.markEnd(`MultiSamplePass.renderTemporalMultiSample`),e>=p.length?-2:e}},el=class{update(e,t){return e&&(this.sampleIndex=-1),t.mode===`temporal`&&this.sampleIndex!==-2}render(e,t,n,r){return this.sampleIndex=this.multiSamplePass.render(this.sampleIndex,e,t,n,!!r),this.sampleIndex<0}constructor(e){this.multiSamplePass=e,this.sampleIndex=-2}}})))()}var nl;function rl(){return(rl=e((()=>{(function(e){function t(e,t,n){return{array:e,width:t,height:n}}e.create=t;function n(e){let{array:t,width:n,height:r}=e,i=n*(t.length/(n*r));for(let e=0,n=r/2;e<n;++e)for(let n=0,a=i;n<a;++n){let a=e*i+n,o=(r-e-1)*i+n,s=t[a];t[a]=t[o],t[o]=s}return e}e.flipY=n;function r(e){let{array:t}=e,n=t instanceof Uint8Array?255:1;for(let e=0,r=t.length;e<r;e+=4){let r=t[e+3]/n;r!==0&&(t[e]=Math.min(n,t[e]/r),t[e+1]=Math.min(n,t[e+1]/r),t[e+2]=Math.min(n,t[e+2]/r))}return e}e.divideByAlpha=r})(nl||={})})))()}var il,al;function ol(){return(ol=e((()=>{_i(),ht(),R(),qc(),Yi(),tl(),Jt(),cn(),rl(),Zt(),Jo(),bs(),i(),Je(),Ss(),il={transparentBackground:V.Boolean(!1),dpoitIterations:V.Numeric(2,{min:1,max:10,step:1}),multiSample:V.Group(Qc),postprocessing:V.Group(Ki),marking:V.Group(zo),illumination:V.Group(ms),cameraHelper:V.Group(nn),renderer:V.Group(pi)},al=class{get colorTarget(){return this._colorTarget}get width(){return this._width}get height(){return this._height}constructor(e,t,n,r,i,a,o){this.webgl=e,this.renderer=n,this.scene=r,this.camera=i,this._width=0,this._height=0,this._camera=new an,this._frame=nt(),this.props={...V.getDefaultValues(il),...o},this.drawPass=new Kc(e,t,128,128,r.transparency),this.illuminationPass=new hs(e,this.drawPass),this.multiSamplePass=new $c(e,this.drawPass),this.multiSampleHelper=new el(this.multiSamplePass),this.helper={camera:new rn(e,this.props.cameraHelper),debug:a.debug,handle:a.handle,pointer:a.pointer},this.setSize(1024,768)}getByteCount(){return this.drawPass.getByteCount()+this.illuminationPass.getByteCount()+this.multiSamplePass.getByteCount()}updateBackground(){return new Promise(e=>{this.drawPass.postprocessing.background.update(this.camera,this.props.postprocessing.background,()=>{e()})})}setSize(e,t){(e!==this._width||t!==this._height)&&(this._width=e,this._height=t,this.drawPass.setSize(e,t),this.illuminationPass.setSize(e,t),this.multiSamplePass.syncSize())}setProps(e={}){Object.assign(this.props,e),e.cameraHelper&&this.helper.camera.setProps(e.cameraHelper)}async render(e){this.drawPass.setTransparency(this.scene.transparency),xs.ensureRequired(this.webgl,this.scene,this.props),an.copySnapshot(this._camera.state,this.camera.state),Ut.set(this._camera.viewport,0,0,this._width,this._height),this._camera.update(),this.renderer.setOcclusionTest(null),this._frame=nt();let t={renderer:this.renderer,camera:this._camera,scene:this.scene,helper:this.helper,frame:this._frame};if(this.illuminationPass.supported&&this.props.illumination.enabled){for(await e.update({message:`Tracing...`,current:1,max:this.illuminationPass.getMaxIterations(this.props.illumination)}),this.illuminationPass.restart(!0);this.illuminationPass.shouldRender(this.props.illumination);)o&&this.webgl.timer.mark(`ImagePass.render`,{captureStats:!0}),this.illuminationPass.render(t,this.props,!1),o&&this.webgl.timer.markEnd(`ImagePass.render`),e.shouldUpdate&&await e.update({current:this.illuminationPass.iteration}),await this.webgl.waitForGpuCommandsComplete();this._colorTarget=this.illuminationPass.colorTarget}else o&&this.webgl.timer.mark(`ImagePass.render`,{captureStats:!0}),$c.isEnabled(this.props.multiSample)?(this.multiSampleHelper.render(t,this.props,!1),this._colorTarget=this.multiSamplePass.colorTarget):(this.drawPass.render(t,this.props,!1),this._colorTarget=this.drawPass.getColorTarget(this.props.postprocessing)),o&&this.webgl.timer.markEnd(`ImagePass.render`);if(o){let e=this.webgl.timer.resolve();if(e)for(let t of e)gt([t])}s&&console.log(`image pass byte count ${(this.getByteCount()/1024/1024).toFixed(3)} MiB`)}async getImageData(e,t,n,r){this.setSize(t,n),await this.render(e),this.colorTarget.bind();let i=r?.width??t,a=r?.height??n,o=new Uint8Array(i*a*4);r?this.webgl.readPixels(r.x,n-r.y-r.height,i,a,o):this.webgl.readPixels(0,0,i,a,o);let s=nl.create(o,i,a);return nl.flipY(s),nl.divideByAlpha(s),new ImageData(new Uint8ClampedArray(o),i,a)}}})))()}var sl;function cl(){return(cl=e((()=>{qc(),ho(),tl(),bs(),sl=class{constructor(e,t,n={}){this.webgl=e;let r=this.webgl.getDrawingBufferSize();this.draw=new Kc(e,t,r.width,r.height,n.transparency||`blended`),this.pick=new uo(e,r.width,r.height,n.pickScale||.25),this.multiSample=new $c(e,this.draw),this.illumination=new hs(e,this.draw)}getByteCount(){return this.draw.getByteCount()+this.pick.getByteCount()+this.multiSample.getByteCount()+this.illumination.getByteCount()}setPickScale(e){this.pick.setPickScale(e)}setTransparency(e){this.draw.setTransparency(e)}updateSize(){let e=this.webgl.getDrawingBufferSize(),t=Math.max(e.width,2),n=Math.max(e.height,2);this.draw.setSize(t,n),this.pick.setSize(t,n),this.multiSample.syncSize(),this.illumination.setSize(t,n)}}})))()}function ll(e,t){e&&(t.transparentBackground&&t.checkeredTransparentBackground?Object.assign(e.style,{"background-image":`linear-gradient(45deg, lightgrey 25%, transparent 25%, transparent 75%, lightgrey 75%, lightgrey), linear-gradient(45deg, lightgrey 25%, transparent 25%, transparent 75%, lightgrey 75%, lightgrey)`,"background-size":`60px 60px`,"background-position":`0 0, 30px 30px`}):Object.assign(e.style,{"background-image":``,"background-size":``,"background-position":``}))}var ul,dl,fl,pl,ml,hl,gl,_l;function vl(){return(vl=e((()=>{u(),c(),f(),h(),ht(),_i(),$t(),Mt(),on(),je(),W(),I(),Re(),We(),P(),i(),oa(),a(),re(),R(),_e(),Ce(),Jt(),_a(),Xt(),cn(),ja(),Zt(),Va(),to(),so(),_o(),Za(),bo(),Ss(),Ms(),Ec(),bs(),ol(),Jo(),tl(),Po(),cl(),ho(),Yi(),ul={intensity:V.Numeric(15,{min:1,max:100,step:1})},dl={camera:V.Group({mode:V.Select(`perspective`,V.arrayToOptions([`perspective`,`orthographic`]),{label:`Camera`}),helper:V.Group(nn,{isFlat:!0}),stereo:V.MappedStatic(`off`,{on:V.Group(da),off:V.Group({})},{cycle:!0,hideIf:e=>e?.mode!==`perspective`}),fov:V.Numeric(45,{min:10,max:130,step:1},{label:`Field of View`}),manualReset:V.Boolean(!1,{isHidden:!0})},{pivot:`mode`}),cameraFog:V.MappedStatic(`on`,{on:V.Group(ul),off:V.Group({})},{cycle:!0,description:`Show fog in the distance`}),cameraClipping:V.Group({radius:V.Numeric(100,{min:0,max:99,step:1},{label:`Clipping`,description:`How much of the scene to show.`}),far:V.Boolean(!0,{description:`Hide scene in the distance`}),minNear:V.Numeric(1,{min:.1,max:100,step:.1},{description:`Minimal allowed distance of near clipping plane from the camera. Note, may cause performance issues rendering impostors when set too small and cause issues with outline rendering when too close to 0.`})},{pivot:`radius`}),viewport:V.MappedStatic(`canvas`,{canvas:V.Group({}),"static-frame":V.Group({x:V.Numeric(0),y:V.Numeric(0),width:V.Numeric(128),height:V.Numeric(128)}),"relative-frame":V.Group({x:V.Numeric(.33,{min:0,max:1,step:.01}),y:V.Numeric(.33,{min:0,max:1,step:.01}),width:V.Numeric(.5,{min:.01,max:1,step:.01}),height:V.Numeric(.5,{min:.01,max:1,step:.01})})}),cameraResetDurationMs:V.Numeric(250,{min:0,max:1e3,step:1},{description:`The time it takes to reset the camera.`}),cameraResetEasing:Gt(`linear`),cameraResetTrajectory:en(`linear`),sceneRadiusFactor:V.Numeric(1,{min:1,max:10,step:.1}),transparentBackground:V.Boolean(!1),checkeredTransparentBackground:V.Boolean(!1),dpoitIterations:V.Numeric(2,{min:1,max:10,step:1}),pickPadding:V.Numeric(3,{min:0,max:10,step:1},{description:`Extra pixels to around target to check in case target is empty.`}),userInteractionReleaseMs:V.Numeric(250,{min:0,max:1e3,step:1},{description:`The time before the user is not considered interacting anymore.`}),multiSample:V.Group(Qc),postprocessing:V.Group(Ki),marking:V.Group(zo),illumination:V.Group(ms),hiZ:V.Group(wc),renderer:V.Group(pi),trackball:V.Group(Oa),interaction:V.Group(ao),handle:V.Group(Ra),pointer:V.Group(Ja),xr:V.Group(As,{label:`XR`})},fl=V.getDefaultValues(dl),pl={trackball:ka,xr:ks},(function(e){let t=e.DefaultAttribs={powerPreference:`high-performance`,failIfMajorPerformanceCaveat:!1,antialias:!0,preserveDrawingBuffer:!0,preferWebGl1:!1,handleResize:()=>{}},r=e.Params={resolutionMode:V.Select(`auto`,V.arrayToOptions([`auto`,`scaled`,`native`])),pixelScale:V.Numeric(1,{min:.1,max:2,step:.05}),pickScale:V.Numeric(.25,{min:.1,max:1,step:.05}),transparency:V.Select(`wboit`,[[`blended`,`Blended`],[`wboit`,`Weighted, Blended`],[`dpoit`,`Depth Peeling`]])},i=e.DefaultProps=V.getDefaultValues(r);function a(e,r,a={},o={}){let c={...t,...a},u={...i,...o},{powerPreference:f,failIfMajorPerformanceCaveat:p,antialias:m,preserveDrawingBuffer:h,preferWebGl1:g}=c,_=dt(e,{powerPreference:f,failIfMajorPerformanceCaveat:p,antialias:m,preserveDrawingBuffer:h,alpha:!0,depth:!0,stencil:!0,premultipliedAlpha:!0,preferWebGl1:g});if(_===null)throw Error(`Could not create a WebGL rendering context`);let v=()=>{let e=u.pixelScale/(typeof window<`u`&&window?.devicePixelRatio||1);return u.resolutionMode===`auto`?Pt()?e:u.pixelScale:u.resolutionMode===`native`?u.pixelScale:e},y=()=>{let e=v();C.setPixelScale(e),w.setPixelScale(e)},{pickScale:b,transparency:x}=u,S=v(),C=aa.fromElement(e,{pixelScale:S,preventGestures:!0}),w=it(_,{pixelScale:S}),T=new sl(w,r,{pickScale:b,transparency:x});if(s){let t=_.getExtension(`WEBGL_lose_context`);t&&e.addEventListener(`mousedown`,e=>{w.isContextLost||e.shiftKey&&e.ctrlKey&&e.altKey&&(s&&console.log(`lose context`),t.loseContext(),setTimeout(()=>{w.isContextLost&&(s&&console.log(`restore context`),t.restoreContext())},1e3))},!1)}let E=new l,D=e=>{w.setContextLost(),e.preventDefault(),s&&console.log(`context lost`),E.next(n())},O=()=>{w.isContextLost&&(w.handleContextRestored(()=>{T.draw.reset(),T.pick.reset(),T.illumination.reset()}),s&&console.log(`context restored`))};e.addEventListener(`webglcontextlost`,D,!1),e.addEventListener(`webglcontextrestored`,O,!1);let ee=new d(void 0);return{canvas:e,webgl:w,input:C,passes:T,attribs:c,get props(){return{...u}},contextLost:E,contextRestored:w.contextRestored,assetManager:r,changed:ee,get pixelScale(){return v()},syncPixelScale:y,setProps:e=>{if(!e)return;let t=!1,n=!1;e.resolutionMode!==void 0&&e.resolutionMode!==u.resolutionMode&&(u.resolutionMode=e.resolutionMode,n=!0),e.pixelScale!==void 0&&e.pixelScale!==u.pixelScale&&(u.pixelScale=e.pixelScale,n=!0),n&&(y(),c.handleResize(),t=!0),e.pickScale!==void 0&&e.pickScale!==u.pickScale&&(u.pickScale=e.pickScale,T.setPickScale(e.pickScale),t=!0),e.transparency!==void 0&&e.transparency!==u.transparency&&(u.transparency=e.transparency,T.setTransparency(e.transparency),t=!0),t&&ee.next(void 0)},dispose:t=>{C.dispose(),e.removeEventListener(`webglcontextlost`,D,!1),e.removeEventListener(`webglcontextrestored`,O,!1),w.destroy(t),E.complete(),ee.complete()}}}e.fromCanvas=a})(ml||={}),hl=typeof window<`u`?window.requestAnimationFrame:e=>setImmediate(()=>e(Date.now())),gl=typeof window<`u`?window.cancelAnimationFrame:e=>clearImmediate(e),(function(e){function i(e,i={},a={}){let{webgl:c,input:u,passes:f,assetManager:h,canvas:_,contextLost:v}=e,y={...fe(fl),...fe(i)},b={...fe(pl),...fe(a)},x=new Map,S=new Map,C=new d(0),w=new l,T=n(),E=new d(0),D=new d(0),ee=new d(0),{contextRestored:te}=c,k=0,A=0,j=128,M=128,ne=!1,re=0,P=nt();ll(_,y),gt();let F=qt.create(c,f.draw.transparency,{dColorMarker:Fo(y.renderer,y.marking),dLightCount:y.renderer.light?.length});function ie(){return F.boundingSphere.radius*y.sceneRadiusFactor}let I=new an({position:g.create(0,0,100),mode:y.camera.mode,fog:y.cameraFog.name===`on`?y.cameraFog.params.intensity:0,clipFar:y.cameraClipping.far,minNear:y.cameraClipping.minNear,fov:L(y.camera.fov)},{x:k,y:A,width:j,height:M}),ae=new pa(I,y.camera.stereo.params),oe=Aa.create(u,I,F,y.trackball,b.trackball),R=new eo(c,F,y),z=new Tc(c,f.draw,_,y.hiZ),B=gi.create(c,y.renderer);B.setOcclusionTest(z.isOccluded);let se=new xs(c,F);se.updateRequired(y);let le={pickPadding:y.pickPadding,maxAsyncReadLag:lo.maxAsyncReadLag},V=new go(c,B,F,R,f.pick,{x:k,y:A,width:j,height:M},le),ue=new yo(c,B,F,R,le),de=new oo(Ze,Qe,W,u,I,oe,y.interaction),pe=new el(f.multiSample);f.draw.postprocessing.background.update(I,y.postprocessing.background,e=>{e&&Ie()});let me=!1,he={durationMs:void 0,snapshot:void 0,keyframes:void 0,easing:void 0,trajectory:void 0},ge=!1;function _e(){return{transparency:e.props.transparency,transparentBackground:y.transparentBackground,hiZ:z.props.enabled,postprocessing:y.postprocessing.enabled,axes:fe(R.camera.props.axes)}}let ve=_e();function be(){Object.assign(ve,_e())}function xe(){y.postprocessing.enabled=ve.postprocessing,y.transparentBackground=ve.transparentBackground,e.setProps({transparency:ve.transparency}),z.setProps({enabled:ve.hiZ}),R.camera.setProps({axes:ve.axes})}function Se(){y.postprocessing.enabled=!H.props.disablePostprocessing,e.setProps({transparency:`blended`}),z.setProps({enabled:!1}),R.camera.setProps({axes:{name:`off`,params:{}}}),H.session?.environmentBlendMode===`alpha-blend`&&(y.transparentBackground=Te)}let H=new js(c,u,F,I,ae,R.pointer,de,y.xr,b.xr),Ce={request:async()=>{try{await H.request()}catch(e){console.error(e),Ce.requestFailed.next(e)}},end:()=>H.end(),isSupported:new d(!1),isPresenting:new d(!1),requestFailed:new l},Te=!1,Ee=[H.isSupported.subscribe(e=>Ce.isSupported.next(e)),H.togglePassthrough.subscribe(()=>{H.session?.environmentBlendMode===`alpha-blend`&&(Te=!y.transparentBackground)}),H.sessionChanged.subscribe(()=>{ge=!0,H.session?(be(),Te=H.session?.environmentBlendMode===`alpha-blend`,Se()):xe(),Xe(),Ce.isPresenting.next(!!H.session)})],De=!0;function W(e){let t=Ve,n=Ke.Empty;if(e){let r=R.camera.getLoci(e);if(r!==Ve)return{loci:r,repr:n};t=R.handle.getLoci(e),x.forEach((r,i)=>{let a=i.getLoci(e);He(a)||(He(t)||console.warn(`found another loci, this should not happen`),t=a,n=i)})}return{loci:t,repr:n}}let Oe=[];function ke(e,t){Oe.push([e,t])}let Ae=!1;function je(){let e=!1;Ae=!1;for(let[t,n]of Oe)e=K(t,n)||e;return Oe=[],e&&(F.update(void 0,!0),R.handle.scene.update(void 0,!0),R.camera.scene.update(void 0,!0),se.updateRequired(y),se.finalizeRequired(!0),w.next()),e}function K(e,t){let{repr:n,loci:r}=e,i=!1;n?i=n.mark(r,t)||i:x.forEach((e,n)=>{i=n.mark(r,t)||i});let a=R.handle.mark(r,t),o=R.camera.mark(r,t),s=a||o;return Ae||=s,i||s}function q(e,t){if(c.isContextLost||c.xr.session&&!t)return!1;let n=!1;ge&&(Z(!1),ge=!1,n=!0);let r=c.getDrawingBufferSize();if(k>r.width||k+j<0||A>r.height||A+M<0)return!1;t&&(Se(),y.transparentBackground=Te);let i=je()&&(B.props.colorMarker||y.marking.enabled),a=!1;oe.update(re);let l=I.update(),u=H.update(t);if(!u&&t)return!1;let d=B.props.enableAnimation&&F.hasAnimation,p=e||l||n||ne||u||d;ne=!1,p&&(P=nt(),s&&console.log(`New frame`));let m=f.illumination.supported&&y.illumination.enabled&&!t,h=$c.isEnabled(y.multiSample)&&!t,g=(m?y.multiSample.mode===`on`:h)?ko(y.multiSample.sampleLevel):Bo,_=(e,t)=>{B.setOcclusionTest(m?null:z.isOccluded),o&&c.timer.mark(`Canvas3D.render`,{captureStats:!0});let n=f.draw.marking.redraw({renderer:B,camera:I,scene:F,helper:R,frame:P},y,g,e,t);return o&&c.timer.markEnd(`Canvas3D.render`),n},v=!Ae&&!p&&!Fo(B.props,y.marking)&&!t&&y.camera.stereo.name!==`on`&&(!m||f.illumination.iteration>0);if(v&&i&&_(!0,m||y.multiSample.mode===`temporal`?1:g.length))return!0;if(m){if((p||i)&&(B.setOcclusionTest(null),f.illumination.restart()),f.illumination.shouldRender(y.illumination)&&(!mt&&F.count>0||f.illumination.iteration===0||y.userInteractionReleaseMs===0)){o&&c.timer.mark(`Canvas3D.render`,{captureStats:!0});let e={renderer:B,camera:I,scene:F,helper:R,frame:P};f.illumination.render(e,y,!0),o&&c.timer.markEnd(`Canvas3D.render`),V.dirty=V.dirty||p,a=!0}}else{let e=pe.update(i||p,y.multiSample)&&!t;if(p||e||i){B.setOcclusionTest(z.isOccluded);let e=I;(y.camera.stereo.name===`on`||u)&&(u||ae.update(),e=ae),o&&c.timer.mark(`Canvas3D.render`,{captureStats:!0});let t={renderer:B,camera:e,scene:F,helper:R,frame:P};if(h){let e=y.multiSample.reduceFlicker&&Fo(B.props,y.marking)&&!l&&i&&!oe.isAnimating;pe.render(t,y,!0,e)}else f.draw.render(t,y,!0);z.render(I),o&&c.timer.markEnd(`Canvas3D.render`),V.dirty=V.dirty||p,a=!0}}return!a&&!i&&v&&f.draw.marking.needsMoreSamples&&(a=_(!1,Ao(y.multiSample.sampleLevel))),a}let Me=!1,Ne=!1,Pe=!1;function Fe(e){Ne||Pe||(se.finalizeRequired(e?.isSynchronous)?q(!!e?.force,e?.xrFrame)&&De&&E.next(n()-T):ne=!0)}function Ie(){ne=!0}let Le=0;function Re(e,t){Pe||(!c.xr.session||t?.xrFrame)&&(re=e,B.setTime((re-T)/1e3),$e(t?.isSynchronous),t?.updateControls&&oe.update(re),I.transition.tick(re),z.tick(),!t?.manualDraw&&(Fe({isSynchronous:t?.isSynchronous,xrFrame:t?.xrFrame}),!I.transition.inTransition&&!c.isContextLost&&de.tick(re)))}let ze;function Ue(e){return ze=e,c.xr.session?c.xr.session.requestAnimationFrame(e):hl(e)}function We(e){ze=void 0,c.xr.session?c.xr.session.cancelAnimationFrame(e):gl(e)}function Ge(e,t){Re(n(),{xrFrame:t}),Le=Ue(Ge)}function qe(e){T=e,oe.start(e),de.resetTime(e)}function Je(){Ne=!1;let e=n();oe.start(e),de.resetTime(e),Le===0&&Ge(0)}function Ye(e=!1){Ne=e,Le!==0&&(We(Le),Le=0)}function Xe(){Ne=!1,ze&&Ue(ze)}function Ze(e){if(!c.isContextLost){if(se.finalize([`pick`],!0),`origin`in e)return ue.identify(e,I);{let t=y.camera.stereo.name===`on`?ae:I;return V.identify(e[0],e[1],t,P)}}}function Qe(e){if(!c.isContextLost){if(se.finalize([`pick`],!0),`origin`in e)return ue.asyncIdentify(e,I);{let t=y.camera.stereo.name===`on`?ae:I;return V.asyncIdentify(e[0],e[1],t,P)}}}function $e(e=!1){let t=Y(e);se.updateRequired(y),t&&(et(),Me&&=(R.debug.isEnabled&&R.debug.update(),Fe({force:!0}),!1),D.next(n()))}function et(){if(!me)return;Ce.isPresenting.value||H.resetScale();let{center:e,radius:t}=F.boundingSphereVisible;if(t>0){let n=he.durationMs??y.cameraResetDurationMs,r=he.easing??y.cameraResetEasing,i=he.trajectory??y.cameraResetTrajectory,a=oe.props.autoAdjustMinMaxDistance;if(a.name===`on`){let e=a.params.minDistanceFactor*t+a.params.minDistancePadding,n=Math.max(a.params.maxDistanceFactor*t,a.params.maxDistanceMin);oe.setProps({minDistance:e,maxDistance:n})}let o=I.getFocus(e,t),s=typeof he.snapshot==`function`?he.snapshot(F,I):he.snapshot,c=s?{...o,...s}:o;I.setState({...c,radiusMax:ie()},n,{keyframes:he.keyframes,easing:r,trajectory:i})}he.durationMs=void 0,he.snapshot=void 0,he.keyframes=void 0,he.easing=void 0,he.trajectory=void 0,me=!1}let tt=G(),J=G();function rt(){if(I.state.radiusMax===0)return!0;if(I.transition.inTransition||he.snapshot)return!1;let e=!0,t=!0;G.set(J,I.state.target,I.state.radius);for(let n of F.renderables){if(!n.state.visible)continue;let r=n.values.boundingSphere.ref.value;if(!r.radius)continue;t=!1;let i=g.distance(J.center,r.center);if((i>J.radius||i>r.radius||r.radius>I.state.radiusMax)&&!G.includes(tt,r))return!0;G.overlaps(J,r)&&(e=!1)}return e||!t&&J.radius<=.1}function Y(e){return!F.needsCommit||(G.copy(tt,F.boundingSphereVisible),z.clear(),F.commit(e?void 0:250)?(ee.next(0),R.debug.isEnabled&&R.debug.update(),!y.camera.manualReset&&(C.value===0||rt())&&(me=!0),tt.radius===0&&(he.durationMs=0),!y.camera.manualReset&&F.boundingSphere.radius>0&&I.setState({radiusMax:ie()},0),C.next(x.size),s&&it(),!0):(ee.next(F.commitQueueSize),!1))}function it(){let e=F.renderables.map(e=>({drawCount:e.values.drawCount.ref.value,instanceCount:e.values.instanceCount.ref.value,materialId:e.materialId,renderItemId:e.id,geometryType:e.values.dGeometryType.ref.value,"byteCount [MiB]":U(e.getByteCount()/1024/1024,3),radius:U(e.values.boundingSphere.ref.value.radius,3)}));console.groupCollapsed(`${e.length} RenderItems`),e.length<=64?console.table(e):console.log(e),console.log(JSON.stringify(c.stats,void 0,4));let{texture:t,cubeTexture:n,attribute:r,elements:i,pixelPack:a,renderbuffer:s}=c.resources.getByteCounts();console.log(JSON.stringify({texture:`${(t/1024/1024).toFixed(3)} MiB`,cubeTexture:`${(n/1024/1024).toFixed(3)} MiB`,attribute:`${(r/1024/1024).toFixed(3)} MiB`,elements:`${(i/1024/1024).toFixed(3)} MiB`,pixelPack:`${(a/1024/1024).toFixed(3)} MiB`,renderbuffer:`${(s/1024/1024).toFixed(3)} MiB`},void 0,4)),console.log(JSON.stringify({renderables:`${(F.renderables.reduce((e,t)=>e+t.getByteCount(),0)/1024/1024).toFixed(3)} MiB`,passes:{draw:`${(f.draw.getByteCount()/1024/1024).toFixed(3)} MiB`,illumination:`${(f.illumination.getByteCount()/1024/1024).toFixed(3)} MiB`,pick:`${(f.pick.getByteCount()/1024/1024).toFixed(3)} MiB`,hiZ:`${(z.getByteCount()/1024/1024).toFixed(3)} MiB`}},void 0,4)),console.log(JSON.stringify({scene:{radius:U(F.boundingSphere.radius,3),radiusVisible:U(F.boundingSphereVisible.radius,3),transparency:F.transparency,markerAverage:U(F.markerAverage,2),emissiveAverage:U(F.emissiveAverage,2),wiggleAverage:U(F.wiggleAverage,2),opacityAverage:U(F.opacityAverage,2),transparencyMin:U(F.transparencyMin,2),hasOpaque:F.hasOpaque,hasAnimation:F.hasAnimation,counts:{all:F.renderables.length,primitives:F.primitives.renderables.length,volumes:F.volumes.renderables.length}}},void 0,4)),o&&console.log(JSON.stringify(c.timer.formatedStats(),void 0,4)),console.groupEnd()}function X(e){ot(e);let t=x.get(e),n=new Set;e.renderObjects.forEach(e=>n.add(e)),t?we.areEqual(n,t)||(n.forEach(e=>{t.has(e)||F.add(e)}),t.forEach(e=>{n.has(e)||F.remove(e)})):e.renderObjects.forEach(e=>F.add(e)),x.set(e,n),F.update(e.renderObjects,!1),Me=!0,s&&it()}function at(e){st(e);let t=x.get(e);t&&(t.forEach(e=>F.remove(e)),x.delete(e),Me=!0,s&&it())}function ot(e){S.has(e)||S.set(e,e.updated.subscribe(t=>{e.state.syncManually||X(e)}))}function st(e){let t=S.get(e);t&&(t.unsubscribe(),S.delete(e))}function ct(){let e=F.boundingSphere.radius>0?100-Math.round(I.transition.target.radius/ie()*100):0;return{camera:{mode:I.state.mode,helper:{...R.camera.props},stereo:{...y.camera.stereo},fov:Math.round(O(I.state.fov)),manualReset:!!y.camera.manualReset},cameraFog:I.state.fog>0?{name:`on`,params:{intensity:I.state.fog}}:{name:`off`,params:{}},cameraClipping:{far:I.state.clipFar,radius:e,minNear:I.state.minNear},cameraResetDurationMs:y.cameraResetDurationMs,cameraResetEasing:y.cameraResetEasing,cameraResetTrajectory:y.cameraResetTrajectory,sceneRadiusFactor:y.sceneRadiusFactor,transparentBackground:y.transparentBackground,checkeredTransparentBackground:y.checkeredTransparentBackground,dpoitIterations:y.dpoitIterations,pickPadding:y.pickPadding,userInteractionReleaseMs:y.userInteractionReleaseMs,viewport:y.viewport,postprocessing:{...y.postprocessing},marking:{...y.marking},multiSample:{...y.multiSample},illumination:{...y.illumination},hiZ:{...z.props},renderer:{...B.props},trackball:{...oe.props},interaction:{...de.props},handle:{...R.handle.props},pointer:{...R.pointer.props},xr:{...H.props}}}let lt=v?.subscribe(()=>{Pe=!0,V.dirty=!0}),ut=te.subscribe(()=>{V.reset(),ue.reset(),z.reset(),F.forEach(e=>{e.values.meta?.ref.value.reset&&(e.values.meta.ref.value.reset(),e.update())}),Pe=!1,Fe({force:!0}),Fe({force:!0})}),dt=new d(0);function Z(e=!0){f.updateSize(),gt(),_t(),e&&Ie(),dt.next(+new Date)}r(it);let ft=e.changed?.subscribe(()=>{F.setTransparency(f.draw.transparency),Ie()}),pt=!1,mt=!1,ht=[u.drag.subscribe(()=>{pt=!0}),u.interactionEnd.subscribe(()=>{pt=!1}),m(u.drag,u.pinch,u.wheel,u.interactionEnd).subscribe(()=>{w.next()}),w.subscribe(()=>{mt=!0}),w.pipe(p(y.userInteractionReleaseMs)).subscribe(()=>{mt=pt})];if(s&&_){let e,t=e=>{let t=e&&Be.getBoundingSphere(Be.normalize(e,`residue`));z.debugOcclusion(t)};u.click.subscribe(n=>{if(!n.modifiers.control||n.button!==2)return;let r=Ze(N.create(n.x,n.y));r?(e=W(r.id).loci,t(e)):(e=void 0,t(e))}),E.subscribe(()=>{setTimeout(()=>{t(e)},100)})}return{webgl:c,add:X,remove:at,commit:$e,update:(e,t)=>{if(e){if(!x.has(e))return;F.update(e.renderObjects,!!t)}else F.update(void 0,!!t);Me=!0},clear:()=>{S.forEach(e=>e.unsubscribe()),S.clear(),x.clear(),F.clear(),R.debug.clear(),Ie(),C.next(x.size)},syncVisibility:()=>{I.state.radiusMax===0&&(me=!0,he.durationMs=0),F.syncVisibility()&&R.debug.isEnabled&&R.debug.update(),Ie()},requestDraw:Ie,tick:Re,animate:Je,resetTime:qe,pause:Ye,resume:Xe,requestAnimationFrame:Ue,cancelAnimationFrame:We,identify:Ze,asyncIdentify:Qe,mark:ke,getLoci:W,handleResize:Z,requestResize:()=>{ge=!0},requestCameraReset:e=>{Object.assign(he,e),me=!0},camera:I,boundingSphere:F.boundingSphere,boundingSphereVisible:F.boundingSphereVisible,get notifyDidDraw(){return De},set notifyDidDraw(e){De=e},didDraw:E,commited:D,commitQueueSize:ee,reprCount:C,resized:dt,setProps:(e,t=!1)=>{let n=typeof e==`function`?ye(ct(),e):e;n.sceneRadiusFactor!==void 0&&(y.sceneRadiusFactor=n.sceneRadiusFactor,I.setState({radiusMax:ie()},0));let r=Object.create(null);n.camera&&n.camera.mode!==void 0&&n.camera.mode!==I.state.mode&&(r.mode=n.camera.mode);let i=Math.round(O(I.state.fov));if(n.camera&&n.camera.fov!==void 0&&n.camera.fov!==i&&(r.fov=L(n.camera.fov)),n.cameraFog!==void 0&&n.cameraFog.params){let e=n.cameraFog.name===`on`?n.cameraFog.params.intensity:0;e!==I.state.fog&&(r.fog=e)}if(n.cameraClipping!==void 0&&(n.cameraClipping.far!==void 0&&n.cameraClipping.far!==I.state.clipFar&&(r.clipFar=n.cameraClipping.far),n.cameraClipping.minNear!==void 0&&n.cameraClipping.minNear!==I.state.minNear&&(r.minNear=n.cameraClipping.minNear),n.cameraClipping.radius!==void 0)){let e=ie()/100*(100-n.cameraClipping.radius);e>0&&e!==r.radius&&(r.radius=Math.max(e,.01))}Object.keys(r).length>0&&I.setState(r),n.camera?.helper&&R.camera.setProps(n.camera.helper),n.camera?.manualReset!==void 0&&(y.camera.manualReset=n.camera.manualReset),n.camera?.stereo!==void 0&&(Object.assign(y.camera.stereo,n.camera.stereo),ae.setProps(y.camera.stereo.params)),n.cameraResetDurationMs!==void 0&&(y.cameraResetDurationMs=n.cameraResetDurationMs),n.cameraResetEasing!==void 0&&(y.cameraResetEasing=n.cameraResetEasing),n.cameraResetTrajectory!==void 0&&(y.cameraResetTrajectory=n.cameraResetTrajectory),n.transparentBackground!==void 0&&(y.transparentBackground=n.transparentBackground),n.checkeredTransparentBackground!==void 0&&(y.checkeredTransparentBackground=n.checkeredTransparentBackground),n.dpoitIterations!==void 0&&(y.dpoitIterations=n.dpoitIterations),n.pickPadding!==void 0&&(y.pickPadding=n.pickPadding,V.setPickPadding(y.pickPadding)),n.userInteractionReleaseMs!==void 0&&(y.userInteractionReleaseMs=n.userInteractionReleaseMs),n.viewport!==void 0&&(y.viewport===n.viewport||y.viewport.name===n.viewport.name&&ce(y.viewport.params,n.viewport.params)||(y.viewport=n.viewport,gt(),_t())),n.postprocessing?.background&&(Object.assign(y.postprocessing.background,n.postprocessing.background),f.draw.postprocessing.background.update(I,y.postprocessing.background,e=>{e&&!t&&Ie()})),n.postprocessing&&Object.assign(y.postprocessing,n.postprocessing),n.marking&&Object.assign(y.marking,n.marking),n.illumination&&Object.assign(y.illumination,n.illumination),n.multiSample&&Object.assign(y.multiSample,n.multiSample),n.hiZ&&z.setProps(n.hiZ),(n.renderer||n.marking)&&F.setGlobals({dColorMarker:Fo({colorMarker:n.renderer?.colorMarker??B.props.colorMarker},y.marking),dLightCount:n.renderer?.light?.length??B.props.light.length}),n.renderer&&B.setProps(n.renderer),n.trackball&&oe.setProps(n.trackball),n.interaction&&de.setProps(n.interaction),n.handle&&R.handle.setProps(n.handle),n.pointer&&R.pointer.setProps(n.pointer),n.xr&&H.setProps(n.xr),r.mode===`orthographic`&&(y.camera.stereo.name=`off`),(`transparentBackground`in n||`checkeredTransparentBackground`in n||n.renderer&&`backgroundColor`in n.renderer)&&ll(_,y),se.updateRequired(y),t||Ie()},setAttribs:e=>{e.trackball&&oe.setAttribs(e.trackball),e.xr&&H.setAttribs(e.xr)},getImagePass:(e={})=>new al(c,h,B,F,I,R,e),getRenderObjects(){let e=[];return F.forEach((t,n)=>e.push(n)),e},get props(){return ct()},get attribs(){return{trackball:oe.attribs,xr:H.attribs}},get input(){return u},get stats(){return B.stats},get interaction(){return de.events},debugRegistry:R.debug,xr:Ce,dispose:()=>{lt?.unsubscribe(),ut.unsubscribe(),ft?.unsubscribe();for(let e of Ee)e.unsubscribe();Ee.length=0;for(let e of ht)e.unsubscribe();ht.length=0,gl(Le),ze=void 0,Oe=[],F.clear(),R.debug.clear(),oe.dispose(),B.dispose(),de.dispose(),z.dispose(),V.dispose(),ue.dispose(),H.dispose(),C.complete(),w.complete(),E.complete(),dt.complete(),D.complete(),ee.complete(),Ce.isPresenting.complete(),Ce.isSupported.complete(),Ce.requestFailed.complete(),t(it)}};function gt(){let e=k,t=A,n=j,r=M,i=c.getDrawingBufferSize();y.viewport.name===`canvas`?(k=0,A=0,j=i.width,M=i.height):y.viewport.name===`static-frame`?(k=y.viewport.params.x*c.pixelRatio,M=y.viewport.params.height*c.pixelRatio,A=i.height-M-y.viewport.params.y*c.pixelRatio,j=y.viewport.params.width*c.pixelRatio):y.viewport.name===`relative-frame`&&(k=Math.round(y.viewport.params.x*i.width),M=Math.round(y.viewport.params.height*i.height),A=Math.round(i.height-M-y.viewport.params.y*i.height),j=Math.round(y.viewport.params.width*i.width)),(e!==k||t!==A||n!==j||r!==M)&&(ne=!0)}function _t(){V.setViewport(k,A,j,M),B.setViewport(k,A,j,M),Ut.set(I.viewport,k,A,j,M),Ut.set(oe.viewport,k,A,j,M),z.setViewport(k,A,j,M)}}e.create=i})(_l||={})})))()}export{ni as A,Li as C,oi as D,wi as E,Mr as M,ur as N,li as O,gr as P,Yi as S,xi as T,Q as _,fl as a,oa as b,Ks as c,Bs as d,mc as f,Sa as g,$ as h,dl as i,Or as j,Wr as k,Ws as l,ja as m,_l as n,vl as o,Oa as p,ml as r,qs as s,ul as t,Us as u,ra as v,Ui as w,Ki as x,na as y};