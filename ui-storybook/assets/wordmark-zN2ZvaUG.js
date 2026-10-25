import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,n,r,t as i}from"./jsx-runtime-DbCUSNU3.js";import{n as a,r as o}from"./registry-D35yV2Tb.js";import{i as s,s as c}from"./scoped-Dk1HMUKj.js";var l;function u(){return(u=e((()=>{o(),l={core:`msp-icon-wordmark-core`,flash:`msp-icon-wordmark-flash`,"flash-hover":`msp-icon-wordmark-flash-hover`,"flash-often":`msp-icon-wordmark-flash-often`,"flash-rare":`msp-icon-wordmark-flash-rare`,"flash-reveal":`msp-icon-wordmark-flash-reveal`,live:`msp-icon-wordmark-live`,outline:`msp-icon-wordmark-outline`,wordmark:`msp-icon-wordmark-wordmark`},a(`components/icon/wordmark.module.css`,`@layer msp.components {
.msp-icon-wordmark-wordmark {
  width: calc(var(--msp-wordmark-width, 72) * 1px * var(--msp-wordmark-scale, 1));
  height: calc(22px * var(--msp-wordmark-scale, 1));
  flex: none;
  display: block;
  position: relative;

  & svg {
    stroke-width: calc(1.5 / sqrt(var(--msp-wordmark-scale, 1)));
    position: absolute;
    inset: 0;
    overflow: visible;
  }
}

.msp-icon-wordmark-core {
  stroke-width: calc(2.4 / sqrt(var(--msp-wordmark-scale, 1)));
}

.msp-icon-wordmark-outline {
  color: inherit;
}

.msp-icon-wordmark-flash {
  animation: 14s ease-in-out .3s infinite both msp-icon-wordmark-flash-rare;
  mask-image: linear-gradient(100deg, #0000 0 38%, #000 47% 53%, #0000 62% 100%);
  mask-position: 100% 0;
  mask-size: 300% 100%;
  mask-repeat: no-repeat;

  [data-flash="often"] > & {
    animation: 7s ease-in-out .3s infinite both msp-icon-wordmark-flash-often;
  }

  [data-flash="reveal"] > & {
    animation: 1.4s ease-out both msp-icon-wordmark-flash-reveal;
    mask-image: linear-gradient(100deg, #000 0 42%, #0000 58% 100%);
  }

  .msp-icon-wordmark-wordmark:not([data-flash="reveal"], [data-live]):hover & {
    animation: 2.8s ease-in-out both msp-icon-wordmark-flash-hover;
  }
}

@keyframes msp-icon-wordmark-flash-rare {
  0% {
    mask-position: 100% 0;
  }

  20%, 100% {
    mask-position: 0 0;
  }
}

@keyframes msp-icon-wordmark-flash-often {
  0% {
    mask-position: 100% 0;
  }

  40%, 100% {
    mask-position: 0 0;
  }
}

@keyframes msp-icon-wordmark-flash-reveal {
  from {
    mask-position: 100% 0;
  }

  to {
    mask-position: 0 0;
  }
}

@keyframes msp-icon-wordmark-flash-hover {
  from {
    mask-position: 100% 0;
  }

  to {
    mask-position: 0 0;
  }
}

.msp-icon-wordmark-wordmark[data-live] {
  pointer-events: auto;
}

.msp-icon-wordmark-live {
  opacity: 0;
  --msp-wordmark-strip: calc(14px * var(--msp-wordmark-scale, 1));
  mask-image: linear-gradient(90deg,
    transparent calc(var(--msp-wordmark-x, 50%) - var(--msp-wordmark-strip)),
    #000 calc(var(--msp-wordmark-x, 50%) - var(--msp-wordmark-strip) / 3),
    #000 calc(var(--msp-wordmark-x, 50%) + var(--msp-wordmark-strip) / 3),
    transparent calc(var(--msp-wordmark-x, 50%) + var(--msp-wordmark-strip)));
  transition: opacity .6s var(--msp-ease);

  .msp-icon-wordmark-wordmark:hover > & {
    opacity: 1;
    transition-duration: .2s;
  }
}

@media (prefers-reduced-motion: reduce) {
  .msp-icon-wordmark-flash {
    animation: none;
  }
}
}
`)})))()}function d(e){return r(t,{children:[n(`path`,{d:m}),n(`rect`,{x:`19.5`,y:`6.5`,width:`11`,height:`13`,rx:`5`}),n(`rect`,{x:`22.5`,y:`9.5`,width:`5`,height:`7`,rx:`2.5`}),n(`path`,{d:h}),e.prism?n(`path`,{d:g,"data-part":`prism`}):null,e.prism?n(`path`,{d:_,class:l.core}):null]})}function f(e){let t=`msp-wordmark-${++T}`,i=Math.max(1,Math.round(e.scale??1)),a=e.prism??!0,o=a?v:y,s=e=>r(`svg`,{class:e.class,viewBox:`-1 -1 ${o} 22`,width:o*i,height:22*i,fill:`none`,stroke:e.stroke,"stroke-linejoin":`miter`,"aria-hidden":e.hidden?`true`:void 0,children:[e.hidden?n(`defs`,{children:r(`linearGradient`,{id:t,gradientUnits:`userSpaceOnUse`,x1:`0`,y1:`0`,x2:String(o-2),y2:`0`,children:[n(`stop`,{offset:`0`,style:{"stop-color":`var(--msp-color-brand-1)`}}),n(`stop`,{offset:`0.35`,style:{"stop-color":`var(--msp-color-brand-2)`}}),n(`stop`,{offset:`0.6`,style:{"stop-color":`var(--msp-color-brand-3)`}}),n(`stop`,{offset:`1`,style:{"stop-color":`var(--msp-color-brand-4)`}})]})}):null,n(d,{prism:a}),e.hidden?null:n(`rect`,{"data-part":`star`,x:47.5,y:9.5,width:`1`,height:`1`,stroke:`none`,visibility:`hidden`})]}),u=e.live?p(t,i,o,a):void 0,f=r(`span`,{class:`${l.wordmark} ${e.class??``}`,style:{"--msp-wordmark-scale":i,"--msp-wordmark-width":o},"data-flash":e.flash??`rare`,"data-live":e.live?``:void 0,role:`img`,"aria-label":`Mol* Prism`,children:[s({class:l.outline,stroke:`currentColor`}),s({class:l.flash,stroke:`url(#${t})`,hidden:!0}),u?.svg]});return u&&c(f,`pointermove`,e=>{let t=f.getBoundingClientRect(),n=e.clientX-t.left,r=n/i-1;u.gradient.setAttribute(`x1`,String(r-14)),u.gradient.setAttribute(`x2`,String(r+14)),f.style.setProperty(`--msp-wordmark-x`,`${n}px`)}),f}function p(e,t,i,a){let o=r(`linearGradient`,{id:`${e}-live`,gradientUnits:`userSpaceOnUse`,x1:`13`,y1:`0`,x2:`41`,y2:`0`,children:[n(`stop`,{offset:`0`,style:{"stop-color":`var(--msp-color-brand-1)`}}),n(`stop`,{offset:`0.3`,style:{"stop-color":`var(--msp-color-brand-3)`}}),n(`stop`,{offset:`0.5`,style:{"stop-color":`var(--msp-color-brand-2)`}}),n(`stop`,{offset:`0.7`,style:{"stop-color":`var(--msp-color-brand-3)`}}),n(`stop`,{offset:`1`,style:{"stop-color":`var(--msp-color-brand-4)`}})]});return{svg:r(`svg`,{class:l.live,viewBox:`-1 -1 ${i} 22`,width:i*t,height:22*t,fill:`none`,stroke:`url(#${e}-live)`,"stroke-linejoin":`miter`,"aria-hidden":`true`,children:[n(`defs`,{children:o}),n(d,{prism:a})]}),gradient:o}}var m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{s(),u(),i(),m=`M0.5 1.5 3.5 1.5 8.5 10.5 13.5 1.5 16.5 1.5 16.5 19.5 13.5 19.5 13.5 7.68 8.5 16.68 3.5 7.68 3.5 19.5 0.5 19.5Z`,h=`M46.5 3.5 49.5 3.5 49.5 6.38 51.54 4.34 53.66 6.46 51.62 8.5 54.5 8.5 54.5 11.5 51.62 11.5 53.66 13.54 51.54 15.66 49.5 13.62 49.5 16.5 46.5 16.5 46.5 13.62 44.46 15.66 42.34 13.54 44.38 11.5 36.5 11.5 36.5 19.5 33.5 19.5 33.5 0.5 36.5 0.5 36.5 8.5 44.38 8.5 42.34 6.46 44.46 4.34 46.5 6.38Z`,g=`M57.5 3.5 68.76 10 57.5 16.5Z`,_=`M60 7.83 63.76 10 60 12.17Z`,v=72,y=57,b=48,x=10,S=`M24.5 6.5H25.5A5 5 0 0 1 30.5 11.5V14.5A5 5 0 0 1 25.5 19.5H24.5A5 5 0 0 1 19.5 14.5V11.5A5 5 0 0 1 24.5 6.5Z`,C=`M25 9.5A2.5 2.5 0 0 1 27.5 12V14A2.5 2.5 0 0 1 25 16.5A2.5 2.5 0 0 1 22.5 14V12A2.5 2.5 0 0 1 25 9.5Z`,w={paths:[m,S,C,h],width:y,height:22,star:{x:b,y:x},stroke:e=>1.5/Math.sqrt(e)},T=0})))()}export{w as n,E as r,f as t};