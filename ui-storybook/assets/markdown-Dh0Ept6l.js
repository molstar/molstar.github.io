import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{S as t,b as n,m as r,y as i}from"./jsx-runtime-Dut-27nP.js";import{n as a,r as o}from"./registry-D35yV2Tb.js";var s;function c(){return(c=e((()=>{o(),s={markdown:`msp-markdown-markdown`,media:`msp-markdown-media`,table:`msp-markdown-table`},a(`components/markdown/markdown.module.css`,`@layer msp.components {
.msp-markdown-markdown {
  gap: var(--msp-space-3);
  line-height: 1.5;
  display: grid;

  & h3, & h4, & h5, & h6 {
    font-size: var(--msp-font-size-md);
    font-weight: 600;
  }

  & ul, & ol {
    gap: var(--msp-space-1);
    padding-left: var(--msp-space-5);
    display: grid;
  }

  & ul {
    list-style: outside;
  }

  & ol {
    list-style: decimal;
  }

  & code {
    padding: 0 var(--msp-space-1);
    border-radius: var(--msp-radius-sm);
    background: var(--msp-color-control);
    font-family: var(--msp-font-mono);
    font-size: .92em;
  }

  & pre {
    padding: var(--msp-space-2);
    border-radius: var(--msp-radius-sm);
    background: var(--msp-color-control);
    overflow-x: auto;

    & code {
      background: none;
      padding: 0;
    }
  }

  & hr {
    border: 0;
    border-top: 1px solid var(--msp-color-border);
  }

  & img {
    border-radius: var(--msp-radius-sm);
    max-width: 100%;
  }

  & a {
    color: var(--msp-color-accent);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.msp-markdown-media {
  display: grid;

  & audio {
    width: 100%;
    height: 32px;
  }
}

.msp-markdown-table {
  overflow-x: auto;

  & table {
    border-collapse: collapse;
    font-variant-numeric: tabular-nums;
  }

  & th, & td {
    padding: var(--msp-space-1) var(--msp-space-2);
    border-bottom: 1px solid var(--msp-color-border);
    text-align: left;
  }

  & th {
    font-weight: 600;
  }
}
}
`)})))()}function l(e){let t=document.createElement(`div`);t.className=s.markdown;let n={onLink:e.onLink,host:e.host},a=e.host?.media;if(a){let e=document.createElement(`div`);e.className=s.media,t.appendChild(e);let n=t=>{e.replaceChildren(...t?[t]:[]),e.hidden=!t};i()?r(a,n):n(a.value)}let o=e.source.split(`
`),c,l;for(let e=0;e<o.length;e++){let r=o[e].trimEnd(),i=/^(#{1,4})\s+(.*)$/.exec(r),a=/^\s*[-*]\s+(.*)$/.exec(r),s=/^\s*\d+\.\s+(.*)$/.exec(r);if(!r.trim())c=l=void 0;else if(/^\s*```/.test(r)){c=l=void 0;let n=[];for(e++;e<o.length&&!/^\s*```/.test(o[e]);e++)n.push(o[e]);let r=document.createElement(`pre`);r.appendChild(g(`code`,n.join(`
`))),t.appendChild(r)}else if(u(o,e))c=l=void 0,e=f(t,o,e,n)-1;else if(/^\s*([-*_])(\s*\1){2,}\s*$/.test(r))c=l=void 0,t.appendChild(document.createElement(`hr`));else if(i){c=l=void 0;let e=document.createElement(`h${Math.min(6,i[1].length+2)}`);p(e,i[2],n),t.appendChild(e)}else if(a||s){l=void 0;let e=a?`UL`:`OL`;(!c||c.tagName!==e)&&(c=document.createElement(a?`ul`:`ol`),t.appendChild(c));let r=document.createElement(`li`);p(r,(a??s)[1],n),c.appendChild(r)}else c=void 0,l?l.appendChild(document.createTextNode(` `)):(l=document.createElement(`p`),t.appendChild(l)),p(l,r.trim(),n)}return t}function u(e,t){return e[t].includes(`|`)&&t+1<e.length&&_.test(e[t+1])&&e[t+1].includes(`-`)}function d(e){let t=e.trim();return t.startsWith(`|`)&&(t=t.slice(1)),t.endsWith(`|`)&&!t.endsWith(`\\|`)&&(t=t.slice(0,-1)),t.split(/(?<!\\)\|/).map(e=>e.trim().replace(/\\\|/g,`|`))}function f(e,t,n,r){let i=d(t[n+1]).map(e=>e.startsWith(`:`)&&e.endsWith(`:`)?`center`:e.endsWith(`:`)?`right`:``),a=document.createElement(`table`),o=(e,t,n)=>{let a=document.createElement(`tr`),o=d(t);for(let e=0;e<i.length;e++){let t=document.createElement(n);i[e]&&(t.style.textAlign=i[e]),p(t,o[e]??``,r),a.appendChild(t)}e.appendChild(a)},c=document.createElement(`thead`);o(c,t[n],`th`),a.appendChild(c);let l=document.createElement(`tbody`),u=n+2;for(;u<t.length&&t[u].trim()&&t[u].includes(`|`);u++)o(l,t[u],`td`);l.childNodes.length&&a.appendChild(l);let f=document.createElement(`div`);return f.className=s.table,f.appendChild(a),e.appendChild(f),u}function p(e,t,n){let r=0,i=new RegExp(v.source,`g`);for(let a=i.exec(t);a;a=i.exec(t))a.index>r&&e.appendChild(document.createTextNode(t.slice(r,a.index))),a[1]===void 0?a[2]===void 0?a[3]===void 0?a[5]===void 0?e.appendChild(m(a[7],a[6],n)):e.appendChild(h(a[5],a[4],n)):e.appendChild(g(`code`,a[3])):e.appendChild(g(`em`,a[2])):e.appendChild(g(`strong`,a[1])),r=a.index+a[0].length;r<t.length&&e.appendChild(document.createTextNode(t.slice(r)))}function m(e,n,r){let a=document.createElement(`a`);p(a,n,r);let o=r.host?.link?.(e);if(o){a.href=`#`,a.addEventListener(`click`,e=>{e.preventDefault(),o(`click`)});let e=!1;return a.addEventListener(`pointerenter`,()=>{e=!0,o(`enter`)}),a.addEventListener(`pointerleave`,()=>{e=!1,o(`leave`)}),i()&&t(()=>e&&o(`leave`)),a}let s=/^https?:/i.test(e);return a.href=e.startsWith(`#`)||s?e:`#`,s?(a.target=`_blank`,a.rel=`noopener noreferrer`):a.addEventListener(`click`,t=>{t.preventDefault(),r.onLink?.(e)}),a}function h(e,t,n){let r=n.host?.image?.(e,t);if(r instanceof Node)return r;let i=document.createElement(`img`);return i.alt=t,typeof r==`string`?i.src=r:r?(i.hidden=!0,r.then(e=>{e&&(i.src=e,i.hidden=!1)},()=>{})):i.src=e,i}function g(e,t){let n=document.createElement(e);return n.textContent=t,n}var _,v;function y(){return(y=e((()=>{n(),c(),_=/^\s*\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)*\|?\s*$/,v=/\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`|!\[([^\]]*)\]\(([^)\s]+)\)|\[([^\]]+)\]\(([^)\s]+)\)/g})))()}export{y as n,l as t};