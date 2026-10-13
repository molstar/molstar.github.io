import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{X as t,Z as n,n as r,o as i,r as a,t as o}from"./jsx-runtime-pJJ4pzd1.js";var s;function c(){return(c=e((()=>{n(),s={core:`msp-icon-wordmark-core`,flash:`msp-icon-wordmark-flash`,"flash-hover":`msp-icon-wordmark-flash-hover`,"flash-often":`msp-icon-wordmark-flash-often`,"flash-rare":`msp-icon-wordmark-flash-rare`,"flash-reveal":`msp-icon-wordmark-flash-reveal`,live:`msp-icon-wordmark-live`,outline:`msp-icon-wordmark-outline`,wordmark:`msp-icon-wordmark-wordmark`},t(`components/icon/wordmark.module.css`,`@layer msp.components {
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
`)})))()}function l(){return a(i,{children:[r(`path`,{d:f}),r(`rect`,{x:`19.5`,y:`6.5`,width:`11`,height:`13`,rx:`5`}),r(`rect`,{x:`22.5`,y:`9.5`,width:`5`,height:`7`,rx:`2.5`}),r(`path`,{d:p}),r(`path`,{d:m}),r(`path`,{d:h,class:s.core})]})}function u(e){let t=`msp-wordmark-${++_}`,n=Math.max(1,Math.round(e.scale??1)),i=e=>a(`svg`,{class:e.class,viewBox:`-1 -1 ${g} 22`,width:g*n,height:22*n,fill:`none`,stroke:e.stroke,"stroke-linejoin":`miter`,"aria-hidden":e.hidden?`true`:void 0,children:[e.hidden?r(`defs`,{children:a(`linearGradient`,{id:t,gradientUnits:`userSpaceOnUse`,x1:`0`,y1:`0`,x2:`70`,y2:`0`,children:[r(`stop`,{offset:`0`,style:{"stop-color":`var(--msp-color-brand-1)`}}),r(`stop`,{offset:`0.35`,style:{"stop-color":`var(--msp-color-brand-2)`}}),r(`stop`,{offset:`0.6`,style:{"stop-color":`var(--msp-color-brand-3)`}}),r(`stop`,{offset:`1`,style:{"stop-color":`var(--msp-color-brand-4)`}})]})}):null,r(l,{})]}),o=e.live?d(t,n):void 0,c=a(`span`,{class:`${s.wordmark} ${e.class??``}`,style:{"--msp-wordmark-scale":n},"data-flash":e.flash??`rare`,"data-live":e.live?``:void 0,role:`img`,"aria-label":`Mol* Prism`,children:[i({class:s.outline,stroke:`currentColor`}),i({class:s.flash,stroke:`url(#${t})`,hidden:!0}),o?.svg]});return o&&c.addEventListener(`pointermove`,e=>{let t=c.getBoundingClientRect(),r=e.clientX-t.left,i=r/n-1;o.gradient.setAttribute(`x1`,String(i-14)),o.gradient.setAttribute(`x2`,String(i+14)),c.style.setProperty(`--msp-wordmark-x`,`${r}px`)}),c}function d(e,t){let n=a(`linearGradient`,{id:`${e}-live`,gradientUnits:`userSpaceOnUse`,x1:`13`,y1:`0`,x2:`41`,y2:`0`,children:[r(`stop`,{offset:`0`,style:{"stop-color":`var(--msp-color-brand-1)`}}),r(`stop`,{offset:`0.3`,style:{"stop-color":`var(--msp-color-brand-3)`}}),r(`stop`,{offset:`0.5`,style:{"stop-color":`var(--msp-color-brand-2)`}}),r(`stop`,{offset:`0.7`,style:{"stop-color":`var(--msp-color-brand-3)`}}),r(`stop`,{offset:`1`,style:{"stop-color":`var(--msp-color-brand-4)`}})]});return{svg:a(`svg`,{class:s.live,viewBox:`-1 -1 ${g} 22`,width:g*t,height:22*t,fill:`none`,stroke:`url(#${e}-live)`,"stroke-linejoin":`miter`,"aria-hidden":`true`,children:[r(`defs`,{children:n}),r(l,{})]}),gradient:n}}var f,p,m,h,g,_;function v(){return(v=e((()=>{c(),o(),f=`M0.5 1.5 3.5 1.5 8.5 10.5 13.5 1.5 16.5 1.5 16.5 19.5 13.5 19.5 13.5 7.68 8.5 16.68 3.5 7.68 3.5 19.5 0.5 19.5Z`,p=`M46.5 3.5 49.5 3.5 49.5 6.38 51.54 4.34 53.66 6.46 51.62 8.5 54.5 8.5 54.5 11.5 51.62 11.5 53.66 13.54 51.54 15.66 49.5 13.62 49.5 16.5 46.5 16.5 46.5 13.62 44.46 15.66 42.34 13.54 44.38 11.5 36.5 11.5 36.5 19.5 33.5 19.5 33.5 0.5 36.5 0.5 36.5 8.5 44.38 8.5 42.34 6.46 44.46 4.34 46.5 6.38Z`,m=`M57.5 3.5 68.76 10 57.5 16.5Z`,h=`M60 7.83 63.76 10 60 12.17Z`,g=72,_=0})))()}export{v as n,u as t};