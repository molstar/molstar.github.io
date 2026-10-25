import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,b as n,m as r,x as i}from"./jsx-runtime-DbCUSNU3.js";import{n as a,r as o}from"./registry-D35yV2Tb.js";function s(e,t,n,r){if(r!==void 0)return l.get(r)??e;let i=t===void 0?Number.parseInt(n,16):Number.parseInt(t,10);return i>0&&i<=1114111&&(i<55296||i>57343)?String.fromCodePoint(i):`�`}function c(e){return e.includes(`&`)?e.replace(u,s):e}var l,u;function d(){return(d=e((()=>{l=new Map([[`amp`,`&`],[`lt`,`<`],[`gt`,`>`],[`quot`,`"`],[`apos`,`'`],[`nbsp`,`\xA0`],[`ensp`,` `],[`emsp`,` `],[`thinsp`,` `],[`shy`,`­`],[`zwj`,`‍`],[`zwnj`,`‌`],[`ndash`,`–`],[`mdash`,`—`],[`hellip`,`…`],[`lsquo`,`‘`],[`rsquo`,`’`],[`ldquo`,`“`],[`rdquo`,`”`],[`laquo`,`«`],[`raquo`,`»`],[`bull`,`•`],[`middot`,`·`],[`para`,`¶`],[`sect`,`§`],[`dagger`,`†`],[`Dagger`,`‡`],[`prime`,`′`],[`Prime`,`″`],[`iexcl`,`¡`],[`iquest`,`¿`],[`copy`,`©`],[`reg`,`®`],[`trade`,`™`],[`deg`,`°`],[`plusmn`,`±`],[`times`,`×`],[`divide`,`÷`],[`minus`,`−`],[`le`,`≤`],[`ge`,`≥`],[`ne`,`≠`],[`asymp`,`≈`],[`infin`,`∞`],[`micro`,`µ`],[`permil`,`‰`],[`sup1`,`¹`],[`sup2`,`²`],[`sup3`,`³`],[`frac12`,`½`],[`frac14`,`¼`],[`frac34`,`¾`],[`euro`,`€`],[`pound`,`£`],[`yen`,`¥`],[`cent`,`¢`],[`check`,`✓`],[`star`,`☆`],[`larr`,`←`],[`uarr`,`↑`],[`rarr`,`→`],[`darr`,`↓`],[`harr`,`↔`],[`lArr`,`⇐`],[`rArr`,`⇒`],[`hArr`,`⇔`],[`Aring`,`Å`],[`aring`,`å`],[`angst`,`Å`],[`auml`,`ä`],[`ouml`,`ö`],[`uuml`,`ü`],[`Auml`,`Ä`],[`Ouml`,`Ö`],[`Uuml`,`Ü`],[`szlig`,`ß`],[`eacute`,`é`],[`egrave`,`è`],[`aacute`,`á`],[`iacute`,`í`],[`oacute`,`ó`],[`uacute`,`ú`],[`ntilde`,`ñ`],[`ccedil`,`ç`],[`alpha`,`α`],[`beta`,`β`],[`gamma`,`γ`],[`delta`,`δ`],[`epsilon`,`ε`],[`zeta`,`ζ`],[`eta`,`η`],[`theta`,`θ`],[`kappa`,`κ`],[`lambda`,`λ`],[`mu`,`μ`],[`nu`,`ν`],[`xi`,`ξ`],[`pi`,`π`],[`rho`,`ρ`],[`sigma`,`σ`],[`tau`,`τ`],[`phi`,`φ`],[`chi`,`χ`],[`psi`,`ψ`],[`omega`,`ω`],[`Gamma`,`Γ`],[`Delta`,`Δ`],[`Theta`,`Θ`],[`Lambda`,`Λ`],[`Pi`,`Π`],[`Sigma`,`Σ`],[`Phi`,`Φ`],[`Psi`,`Ψ`],[`Omega`,`Ω`]]),u=/&(?:#(\d{1,7})|#[xX]([0-9a-fA-F]{1,6})|([a-zA-Z][a-zA-Z0-9]{1,31}));/g})))()}var f;function p(){return(p=e((()=>{o(),f={markdown:`msp-markdown-markdown`,media:`msp-markdown-media`,table:`msp-markdown-table`},a(`components/markdown/markdown.module.css`,`@layer msp.components {
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
`)})))()}function m(e){let t=document.createElement(`div`);t.className=f.markdown;let i={onLink:e.onLink,host:e.host},a=e.host?.media;if(a){let e=document.createElement(`div`);e.className=f.media,t.appendChild(e);let i=t=>{e.replaceChildren(...t?[t]:[]),e.hidden=!t};n()?r(a,i):i(a.value)}let o=e.source.split(`
`),s,c;for(let e=0;e<o.length;e++){let n=o[e].trimEnd(),r=/^(#{1,4})\s+(.*)$/.exec(n),a=/^\s*[-*]\s+(.*)$/.exec(n),l=/^\s*\d+\.\s+(.*)$/.exec(n);if(!n.trim())s=c=void 0;else if(/^\s*```/.test(n)){s=c=void 0;let n=[];for(e++;e<o.length&&!/^\s*```/.test(o[e]);e++)n.push(o[e]);let r=document.createElement(`pre`);r.appendChild(S(`code`,n.join(`
`))),t.appendChild(r)}else if(h(o,e))s=c=void 0,e=_(t,o,e,i)-1;else if(/^\s*([-*_])(\s*\1){2,}\s*$/.test(n))s=c=void 0,t.appendChild(document.createElement(`hr`));else if(r){s=c=void 0;let e=document.createElement(`h${Math.min(6,r[1].length+2)}`);v(e,r[2],i),t.appendChild(e)}else if(a||l){c=void 0;let e=a?`UL`:`OL`;(!s||s.tagName!==e)&&(s=document.createElement(a?`ul`:`ol`),t.appendChild(s));let n=document.createElement(`li`);v(n,(a??l)[1],i),s.appendChild(n)}else s=void 0,c?c.appendChild(document.createTextNode(` `)):(c=document.createElement(`p`),t.appendChild(c)),v(c,n.trim(),i)}return t}function h(e,t){return e[t].includes(`|`)&&t+1<e.length&&C.test(e[t+1])&&e[t+1].includes(`-`)}function g(e){let t=e.trim();return t.startsWith(`|`)&&(t=t.slice(1)),t.endsWith(`|`)&&!t.endsWith(`\\|`)&&(t=t.slice(0,-1)),t.split(/(?<!\\)\|/).map(e=>e.trim().replace(/\\\|/g,`|`))}function _(e,t,n,r){let i=g(t[n+1]).map(e=>e.startsWith(`:`)&&e.endsWith(`:`)?`center`:e.endsWith(`:`)?`right`:``),a=document.createElement(`table`),o=(e,t,n)=>{let a=document.createElement(`tr`),o=g(t);for(let e=0;e<i.length;e++){let t=document.createElement(n);i[e]&&(t.style.textAlign=i[e]),v(t,o[e]??``,r),a.appendChild(t)}e.appendChild(a)},s=document.createElement(`thead`);o(s,t[n],`th`),a.appendChild(s);let c=document.createElement(`tbody`),l=n+2;for(;l<t.length&&t[l].trim()&&t[l].includes(`|`);l++)o(c,t[l],`td`);c.childNodes.length&&a.appendChild(c);let u=document.createElement(`div`);return u.className=f.table,u.appendChild(a),e.appendChild(u),l}function v(e,t,n){let r=0,i=new RegExp(w.source,`g`);for(let a=i.exec(t);a;a=i.exec(t))a.index>r&&e.appendChild(document.createTextNode(c(t.slice(r,a.index)))),a[1]===void 0?a[2]===void 0?a[3]===void 0?a[5]===void 0?e.appendChild(y(a[7],a[6],n)):e.appendChild(b(a[5],c(a[4]),n)):e.appendChild(S(`code`,a[3])):e.appendChild(x(`em`,a[2],n)):e.appendChild(x(`strong`,a[1],n)),r=a.index+a[0].length;r<t.length&&e.appendChild(document.createTextNode(c(t.slice(r))))}function y(e,r,i){let a=document.createElement(`a`);v(a,r,i);let o=i.host?.link?.(e);if(o){a.href=`#`,a.addEventListener(`click`,e=>{e.preventDefault(),o(`click`)});let e=!1;return a.addEventListener(`pointerenter`,()=>{e=!0,o(`enter`)}),a.addEventListener(`pointerleave`,()=>{e=!1,o(`leave`)}),n()&&t(()=>e&&o(`leave`)),a}let s=/^https?:/i.test(e);return a.href=e.startsWith(`#`)||s?e:`#`,s?(a.target=`_blank`,a.rel=`noopener noreferrer`):a.addEventListener(`click`,t=>{t.preventDefault(),i.onLink?.(e)}),a}function b(e,t,n){let r=n.host?.image?.(e,t);if(r instanceof Node)return r;let i=document.createElement(`img`);return i.alt=t,typeof r==`string`?i.src=r:r?(i.hidden=!0,r.then(e=>{e&&(i.src=e,i.hidden=!1)},()=>{})):i.src=e,i}function x(e,t,n){let r=document.createElement(e);return v(r,t,n),r}function S(e,t){let n=document.createElement(e);return n.textContent=t,n}var C,w;function T(){return(T=e((()=>{d(),i(),p(),C=/^\s*\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)*\|?\s*$/,w=/\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`|!\[([^\]]*)\]\(([^)\s]+)\)|\[([^\]]+)\]\(([^)\s]+)\)/g})))()}export{d as i,T as n,c as r,m as t};