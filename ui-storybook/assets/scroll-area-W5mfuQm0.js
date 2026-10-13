import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{X as t,Z as n,m as r,n as i,p as a,r as o,t as s}from"./jsx-runtime-pJJ4pzd1.js";var c;function l(){return(l=e((()=>{n(),c={content:`msp-scroll-area-content`,root:`msp-scroll-area-root`,scrollbar:`msp-scroll-area-scrollbar`,thumb:`msp-scroll-area-thumb`,viewport:`msp-scroll-area-viewport`},t(`components/scroll-area/scroll-area.module.css`,`@layer msp.components {
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

  .msp-scroll-area-root:hover > &, .msp-scroll-area-root[data-scrolling] > &, &[data-dragging] {
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
  transition: width var(--msp-motion-fast) var(--msp-ease),
    height var(--msp-motion-fast) var(--msp-ease),
    background-color var(--msp-motion-fast) var(--msp-ease);
  border-radius: 3px;
  flex: none;

  [data-orientation="vertical"] > & {
    width: 4px;
  }

  [data-orientation="horizontal"] > & {
    height: 4px;
  }

  .msp-scroll-area-scrollbar:hover > &, [data-dragging] > & {
    background: color-mix(in oklab, var(--msp-color-text), transparent 52%);
  }

  [data-orientation="vertical"]:hover > &, [data-orientation="vertical"][data-dragging] > & {
    width: 6px;
  }

  [data-orientation="horizontal"]:hover > &, [data-orientation="horizontal"][data-dragging] > & {
    height: 6px;
  }
}
}
`)})))()}function u(e){let{class:t,contentClass:n,axis:a=`y`,viewportRef:s,edge:l,children:u,...p}=e,m,h,g,_={},v=()=>{h&&(_.y&&y(_.y,h.clientHeight,h.scrollHeight,h.scrollTop),_.x&&y(_.x,h.clientWidth,h.scrollWidth,h.scrollLeft))},y=(e,t,n,r)=>{let i=n-t>1;if(i!==e.overflows&&(e.overflows=i,m.toggleAttribute(e.axis===`y`?`data-overflow-y`:`data-overflow-x`,i)),!i)return;let a=e.axis===`y`?e.track.clientHeight:e.track.clientWidth,o=Math.max(d,Math.round(a*t/n));o!==e.size&&(e.size=o,e.axis===`y`?e.thumb.style.height=`${o}px`:e.thumb.style.width=`${o}px`),e.travel=a-o,e.range=n-t;let s=Math.round(e.travel*Math.min(Math.max(r,0),e.range)/e.range);s!==e.offset&&(e.offset=s,e.thumb.style.transform=e.axis===`y`?`translateY(${s}px)`:`translateX(${s}px)`)},b,x=()=>{b=void 0,m.removeAttribute(`data-scrolling`)},S=()=>{v(),b===void 0?m.setAttribute(`data-scrolling`,``):clearTimeout(b),b=setTimeout(x,f)},C=(e,t)=>{e.axis===`y`?h.scrollTop=t:h.scrollLeft=t},w=e=>e.axis===`y`?h.scrollTop:h.scrollLeft,T=(e,t)=>e.axis===`y`?t.clientY:t.clientX,E=e=>t=>{if(t.button!==0||!e.overflows)return;if(t.preventDefault(),t.target!==e.thumb&&e.travel>0){let n=e.track.getBoundingClientRect(),r=T(e,t)-(e.axis===`y`?n.top:n.left)-e.size/2;C(e,Math.min(Math.max(r,0),e.travel)/e.travel*e.range)}let n=T(e,t),r=w(e);e.track.setPointerCapture(t.pointerId),e.track.setAttribute(`data-dragging`,``);let i=t=>{if(!(t.buttons&1))return a();e.travel>0&&C(e,r+(T(e,t)-n)/e.travel*e.range)},a=()=>{e.track.removeEventListener(`pointermove`,i),e.track.removeEventListener(`pointerup`,a),e.track.removeEventListener(`pointercancel`,a),e.track.removeAttribute(`data-dragging`)};e.track.addEventListener(`pointermove`,i),e.track.addEventListener(`pointerup`,a),e.track.addEventListener(`pointercancel`,a)},D=e=>{let t=i(`div`,{class:c.thumb}),n=i(`div`,{class:c.scrollbar,"data-orientation":e===`y`?`vertical`:`horizontal`,"aria-hidden":`true`,onMouseDown:e=>e.preventDefault(),children:t}),r={axis:e,track:n,thumb:t,overflows:!1,size:-1,offset:-1,travel:0,range:0};return n.addEventListener(`pointerdown`,E(r)),_[e]=r,n};if(m=o(`div`,{class:`${c.root} ${t??``}`,"data-axis":a,"data-edge":l?``:void 0,children:[i(`div`,{class:c.viewport,ref:e=>{h=e,s?.(e)},onScroll:S,children:i(`div`,{...p,class:`${c.content} ${n??``}`,ref:e=>{g=e,p.ref?.(e)},children:u})}),a===`x`?null:D(`y`),a===`y`?null:D(`x`)]}),typeof ResizeObserver<`u`){let e=new ResizeObserver(v);e.observe(h),e.observe(g),r(()=>e.disconnect())}return r(()=>{b!==void 0&&clearTimeout(b)}),queueMicrotask(v),m}var d,f;function p(){return(p=e((()=>{a(),l(),s(),d=16,f=500})))()}export{p as n,u as t};