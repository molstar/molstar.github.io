import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,n,r,t as i,x as a}from"./jsx-runtime-DbCUSNU3.js";import{n as o,r as s}from"./registry-D35yV2Tb.js";import{i as c,o as l,t as u}from"./scoped-Dk1HMUKj.js";var d;function f(){return(f=e((()=>{s(),d={content:`msp-scroll-area-content`,root:`msp-scroll-area-root`,scrollbar:`msp-scroll-area-scrollbar`,thumb:`msp-scroll-area-thumb`,viewport:`msp-scroll-area-viewport`},o(`components/scroll-area/scroll-area.module.css`,`@layer msp.components {
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

  .msp-scroll-area-root:not([data-axis="x"], [data-no-fade]) > & {
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
`)})))()}function p(e){let{class:i,contentClass:a,axis:o=`y`,viewportRef:s,edge:c,chain:f,fade:p=!0,children:g,..._}=e,v,y,b,x={},S=()=>{y&&(x.y&&C(x.y,y.clientHeight,y.scrollHeight,y.scrollTop),x.x&&C(x.x,y.clientWidth,y.scrollWidth,y.scrollLeft))},C=(e,t,n,r)=>{let i=n-t>1;if(i!==e.overflows&&(e.overflows=i,v.toggleAttribute(e.axis===`y`?`data-overflow-y`:`data-overflow-x`,i)),!i)return;let a=e.axis===`y`?e.track.clientHeight:e.track.clientWidth,o=Math.max(m,Math.round(a*t/n));o!==e.size&&(e.size=o,e.axis===`y`?e.thumb.style.height=`${o}px`:e.thumb.style.width=`${o}px`),e.travel=a-o,e.range=n-t;let s=Math.round(e.travel*Math.min(Math.max(r,0),e.range)/e.range);s!==e.offset&&(e.offset=s,e.thumb.style.transform=e.axis===`y`?`translateY(${s}px)`:`translateX(${s}px)`)},w,T=()=>{w=void 0,v.removeAttribute(`data-scrolling`)},E=()=>{S(),w===void 0?v.setAttribute(`data-scrolling`,``):clearTimeout(w),w=setTimeout(T,h)},D=(e,t)=>{e.axis===`y`?y.scrollTop=t:y.scrollLeft=t},O=e=>e.axis===`y`?y.scrollTop:y.scrollLeft,k=(e,t)=>e.axis===`y`?t.clientY:t.clientX,A=e=>u(e.track,{start:t=>{if(t.button===0&&e.overflows){if(t.preventDefault(),t.target!==e.thumb&&e.travel>0){let n=e.track.getBoundingClientRect(),r=k(e,t)-(e.axis===`y`?n.top:n.left)-e.size/2;D(e,Math.min(Math.max(r,0),e.travel)/e.travel*e.range)}return e.track.setAttribute(`data-dragging`,``),{start:k(e,t),scroll:O(e)}}},move:(t,n)=>{e.travel>0&&D(e,n.scroll+(k(e,t)-n.start)/e.travel*e.range)},end:()=>e.track.removeAttribute(`data-dragging`)}),j=e=>{let t=n(`div`,{class:d.thumb}),r=n(`div`,{class:d.scrollbar,"data-orientation":e===`y`?`vertical`:`horizontal`,"aria-hidden":`true`,onMouseDown:e=>e.preventDefault(),children:t}),i={axis:e,track:r,thumb:t,overflows:!1,size:-1,offset:-1,travel:0,range:0};return A(i),x[e]=i,r};return v=r(`div`,{class:`${d.root} ${i??``}`,"data-axis":o,"data-edge":c?``:void 0,"data-chain":f?``:void 0,"data-no-fade":p?void 0:``,children:[n(`div`,{class:d.viewport,ref:e=>{y=e,s?.(e)},onScroll:E,children:n(`div`,{..._,class:`${d.content} ${a??``}`,ref:e=>{b=e,_.ref?.(e)},children:g})}),o===`x`?null:j(`y`),o===`y`?null:j(`x`)]}),l(y,S)?.observe(b),t(()=>{w!==void 0&&clearTimeout(w)}),queueMicrotask(S),v}var m,h;function g(){return(g=e((()=>{a(),c(),f(),i(),m=16,h=500})))()}export{g as n,p as t};