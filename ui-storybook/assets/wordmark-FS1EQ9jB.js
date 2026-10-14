import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,o as n,r,t as i}from"./jsx-runtime-DiBZWcxb.js";import{i as a,r as o}from"./base-Cal5NIfy.js";var s;function c(){return(c=e((()=>{a(),s={core:`msp-icon-wordmark-core`,flash:`msp-icon-wordmark-flash`,"flash-hover":`msp-icon-wordmark-flash-hover`,"flash-often":`msp-icon-wordmark-flash-often`,"flash-rare":`msp-icon-wordmark-flash-rare`,"flash-reveal":`msp-icon-wordmark-flash-reveal`,live:`msp-icon-wordmark-live`,outline:`msp-icon-wordmark-outline`,wordmark:`msp-icon-wordmark-wordmark`},o(`components/icon/wordmark.module.css`,`@layer msp.components {
.msp-icon-wordmark-wordmark {
  width: calc(72px * var(--msp-wordmark-scale, 1));
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
    animation: 2.8s ease-in-out .9s both msp-icon-wordmark-flash-reveal;
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
`)})))()}function l(){return r(n,{children:[t(`path`,{d:f}),t(`rect`,{x:`19.5`,y:`6.5`,width:`11`,height:`13`,rx:`5`}),t(`rect`,{x:`22.5`,y:`9.5`,width:`5`,height:`7`,rx:`2.5`}),t(`path`,{d:p}),t(`path`,{d:m}),t(`path`,{d:h,class:s.core})]})}function u(e){let n=`msp-wordmark-${++_}`,i=Math.max(1,Math.round(e.scale??1)),a=e=>r(`svg`,{class:e.class,viewBox:`-1 -1 ${g} 22`,width:g*i,height:22*i,fill:`none`,stroke:e.stroke,"stroke-linejoin":`miter`,"aria-hidden":e.hidden?`true`:void 0,children:[e.hidden?t(`defs`,{children:r(`linearGradient`,{id:n,gradientUnits:`userSpaceOnUse`,x1:`0`,y1:`0`,x2:`70`,y2:`0`,children:[t(`stop`,{offset:`0`,style:{"stop-color":`var(--msp-color-brand-1)`}}),t(`stop`,{offset:`0.35`,style:{"stop-color":`var(--msp-color-brand-2)`}}),t(`stop`,{offset:`0.6`,style:{"stop-color":`var(--msp-color-brand-3)`}}),t(`stop`,{offset:`1`,style:{"stop-color":`var(--msp-color-brand-4)`}})]})}):null,t(l,{})]}),o=e.live?d(n,i):void 0,c=r(`span`,{class:`${s.wordmark} ${e.class??``}`,style:{"--msp-wordmark-scale":i},"data-flash":e.flash??`rare`,"data-live":e.live?``:void 0,role:`img`,"aria-label":`Mol* Prism`,children:[a({class:s.outline,stroke:`currentColor`}),a({class:s.flash,stroke:`url(#${n})`,hidden:!0}),o?.svg]});return o&&c.addEventListener(`pointermove`,e=>{let t=c.getBoundingClientRect(),n=e.clientX-t.left,r=n/i-1;o.gradient.setAttribute(`x1`,String(r-14)),o.gradient.setAttribute(`x2`,String(r+14)),c.style.setProperty(`--msp-wordmark-x`,`${n}px`)}),c}function d(e,n){let i=r(`linearGradient`,{id:`${e}-live`,gradientUnits:`userSpaceOnUse`,x1:`13`,y1:`0`,x2:`41`,y2:`0`,children:[t(`stop`,{offset:`0`,style:{"stop-color":`var(--msp-color-brand-1)`}}),t(`stop`,{offset:`0.3`,style:{"stop-color":`var(--msp-color-brand-3)`}}),t(`stop`,{offset:`0.5`,style:{"stop-color":`var(--msp-color-brand-2)`}}),t(`stop`,{offset:`0.7`,style:{"stop-color":`var(--msp-color-brand-3)`}}),t(`stop`,{offset:`1`,style:{"stop-color":`var(--msp-color-brand-4)`}})]});return{svg:r(`svg`,{class:s.live,viewBox:`-1 -1 ${g} 22`,width:g*n,height:22*n,fill:`none`,stroke:`url(#${e}-live)`,"stroke-linejoin":`miter`,"aria-hidden":`true`,children:[t(`defs`,{children:i}),t(l,{})]}),gradient:i}}var f,p,m,h,g,_;function v(){return(v=e((()=>{c(),i(),f=`M0.5 1.5 3.5 1.5 8.5 10.5 13.5 1.5 16.5 1.5 16.5 19.5 13.5 19.5 13.5 7.68 8.5 16.68 3.5 7.68 3.5 19.5 0.5 19.5Z`,p=`M46.5 3.5 49.5 3.5 49.5 6.38 51.54 4.34 53.66 6.46 51.62 8.5 54.5 8.5 54.5 11.5 51.62 11.5 53.66 13.54 51.54 15.66 49.5 13.62 49.5 16.5 46.5 16.5 46.5 13.62 44.46 15.66 42.34 13.54 44.38 11.5 36.5 11.5 36.5 19.5 33.5 19.5 33.5 0.5 36.5 0.5 36.5 8.5 44.38 8.5 42.34 6.46 44.46 4.34 46.5 6.38Z`,m=`M57.5 3.5 68.76 10 57.5 16.5Z`,h=`M60 7.83 63.76 10 60 12.17Z`,g=72,_=0})))()}export{v as n,u as t};