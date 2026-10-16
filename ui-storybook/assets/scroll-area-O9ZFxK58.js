import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{_ as t,h as n,n as r,r as i,t as a}from"./jsx-runtime-DzTO5r4L.js";import{n as o,r as s}from"./registry-D35yV2Tb.js";var c;function l(){return(l=e((()=>{s(),c={content:`msp-scroll-area-content`,root:`msp-scroll-area-root`,scrollbar:`msp-scroll-area-scrollbar`,thumb:`msp-scroll-area-thumb`,viewport:`msp-scroll-area-viewport`},o(`components/scroll-area/scroll-area.module.css`,`@layer msp.components {
.msp-scroll-area-root {
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  display: flex;
  position: relative;
  overflow: hidden;
}

.msp-scroll-area-root[data-edge] {
  margin-inline-end: calc(-1 * var(--msp-scroll-edge, var(--msp-space-2)));
}

.msp-scroll-area-viewport {
  overscroll-behavior: contain;
  scrollbar-width: none;
  flex: auto;
  min-width: 0;
  min-height: 0;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .msp-scroll-area-root[data-chain] > & {
    overscroll-behavior: auto;
  }

  .msp-scroll-area-root[data-axis="y"] > & {
    overflow-x: hidden;
  }

  .msp-scroll-area-root[data-axis="x"] > & {
    overflow-y: hidden;
  }

  .msp-scroll-area-root:not([data-axis="x"]) > & {
    mask-image: linear-gradient(to bottom,
      transparent,
      #000 var(--msp-fade-top),
      #000 calc(100% - var(--msp-fade-bottom)),
      transparent);
    animation-name: msp-fade-scroll-top, msp-fade-scroll-bottom;
    animation-timing-function: linear;
    animation-fill-mode: both;
    animation-timeline: scroll(self);
    animation-range: 0 24px, calc(100% - 24px) 100%;
  }
}

.msp-scroll-area-content {
  min-width: 0;

  .msp-scroll-area-root[data-edge] > .msp-scroll-area-viewport > & {
    padding-inline-end: var(--msp-scroll-edge, var(--msp-space-2));
  }

  .msp-scroll-area-root[data-axis="x"] > .msp-scroll-area-viewport > &, .msp-scroll-area-root[data-axis="both"] > .msp-scroll-area-viewport > & {
    width: max-content;
    min-width: 100%;
  }
}

.msp-scroll-area-scrollbar {
  z-index: 1;
  opacity: 0;
  transition: opacity var(--msp-motion-base) var(--msp-ease);
  touch-action: none;
  user-select: none;
  display: flex;
  position: absolute;

  &[data-orientation="vertical"] {
    justify-content: center;
    width: 10px;
    top: 2px;
    bottom: 2px;
    right: 1px;
  }

  &[data-orientation="horizontal"] {
    flex-direction: column;
    justify-content: center;
    height: 10px;
    bottom: 1px;
    left: 2px;
    right: 2px;
  }

  .msp-scroll-area-root:hover > &, .msp-scroll-area-root:focus-within > &, .msp-scroll-area-root[data-scrolling] > &, &[data-dragging] {
    opacity: 1;
  }

  .msp-scroll-area-root[data-edge] > &[data-orientation="vertical"] {
    width: 8px;
    right: 0;
  }

  .msp-scroll-area-root:not([data-overflow-y]) > &[data-orientation="vertical"], .msp-scroll-area-root:not([data-overflow-x]) > &[data-orientation="horizontal"] {
    display: none;
  }
}

.msp-scroll-area-thumb {
  background: color-mix(in oklab, var(--msp-color-text), transparent 72%);
  transition: scale var(--msp-motion-fast) var(--msp-ease);
  border-radius: 3px;
  flex: none;

  [data-orientation="vertical"] > & {
    transform-origin: 100%;
    width: 4px;
  }

  [data-orientation="horizontal"] > & {
    transform-origin: bottom;
    height: 4px;
  }

  .msp-scroll-area-scrollbar:hover > &, [data-dragging] > & {
    background: color-mix(in oklab, var(--msp-color-text), transparent 52%);
  }

  [data-orientation="vertical"]:hover > &, [data-orientation="vertical"][data-dragging] > & {
    scale: 1.5 1;
  }

  [data-orientation="horizontal"]:hover > &, [data-orientation="horizontal"][data-dragging] > & {
    scale: 1 1.5;
  }
}
}
`)})))()}function u(e){let{class:n,contentClass:a,axis:o=`y`,viewportRef:s,edge:l,chain:u,children:p,...m}=e,h,g,_,v={},y=()=>{g&&(v.y&&b(v.y,g.clientHeight,g.scrollHeight,g.scrollTop),v.x&&b(v.x,g.clientWidth,g.scrollWidth,g.scrollLeft))},b=(e,t,n,r)=>{let i=n-t>1;if(i!==e.overflows&&(e.overflows=i,h.toggleAttribute(e.axis===`y`?`data-overflow-y`:`data-overflow-x`,i)),!i)return;let a=e.axis===`y`?e.track.clientHeight:e.track.clientWidth,o=Math.max(d,Math.round(a*t/n));o!==e.size&&(e.size=o,e.axis===`y`?e.thumb.style.height=`${o}px`:e.thumb.style.width=`${o}px`),e.travel=a-o,e.range=n-t;let s=Math.round(e.travel*Math.min(Math.max(r,0),e.range)/e.range);s!==e.offset&&(e.offset=s,e.thumb.style.transform=e.axis===`y`?`translateY(${s}px)`:`translateX(${s}px)`)},x,S=()=>{x=void 0,h.removeAttribute(`data-scrolling`)},C=()=>{y(),x===void 0?h.setAttribute(`data-scrolling`,``):clearTimeout(x),x=setTimeout(S,f)},w=(e,t)=>{e.axis===`y`?g.scrollTop=t:g.scrollLeft=t},T=e=>e.axis===`y`?g.scrollTop:g.scrollLeft,E=(e,t)=>e.axis===`y`?t.clientY:t.clientX,D=e=>t=>{if(t.button!==0||!e.overflows)return;if(t.preventDefault(),t.target!==e.thumb&&e.travel>0){let n=e.track.getBoundingClientRect(),r=E(e,t)-(e.axis===`y`?n.top:n.left)-e.size/2;w(e,Math.min(Math.max(r,0),e.travel)/e.travel*e.range)}let n=E(e,t),r=T(e);e.track.setPointerCapture(t.pointerId),e.track.setAttribute(`data-dragging`,``);let i=t=>{if(!(t.buttons&1))return a();e.travel>0&&w(e,r+(E(e,t)-n)/e.travel*e.range)},a=()=>{e.track.removeEventListener(`pointermove`,i),e.track.removeEventListener(`pointerup`,a),e.track.removeEventListener(`pointercancel`,a),e.track.removeAttribute(`data-dragging`)};e.track.addEventListener(`pointermove`,i),e.track.addEventListener(`pointerup`,a),e.track.addEventListener(`pointercancel`,a)},O=e=>{let t=r(`div`,{class:c.thumb}),n=r(`div`,{class:c.scrollbar,"data-orientation":e===`y`?`vertical`:`horizontal`,"aria-hidden":`true`,onMouseDown:e=>e.preventDefault(),children:t}),i={axis:e,track:n,thumb:t,overflows:!1,size:-1,offset:-1,travel:0,range:0};return n.addEventListener(`pointerdown`,D(i)),v[e]=i,n};if(h=i(`div`,{class:`${c.root} ${n??``}`,"data-axis":o,"data-edge":l?``:void 0,"data-chain":u?``:void 0,children:[r(`div`,{class:c.viewport,ref:e=>{g=e,s?.(e)},onScroll:C,children:r(`div`,{...m,class:`${c.content} ${a??``}`,ref:e=>{_=e,m.ref?.(e)},children:p})}),o===`x`?null:O(`y`),o===`y`?null:O(`x`)]}),typeof ResizeObserver<`u`){let e=new ResizeObserver(y);e.observe(g),e.observe(_),t(()=>e.disconnect())}return t(()=>{x!==void 0&&clearTimeout(x)}),queueMicrotask(y),h}var d,f;function p(){return(p=e((()=>{n(),l(),a(),d=16,f=500})))()}export{p as n,u as t};