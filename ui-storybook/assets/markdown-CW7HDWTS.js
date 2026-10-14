import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./base-Cal5NIfy.js";var r;function i(){return(i=e((()=>{t(),r={markdown:`msp-markdown-markdown`},n(`components/markdown/markdown.module.css`,`@layer msp.components {
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

  & a {
    color: var(--msp-color-accent);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
}
`)})))()}function a(e){let t=document.createElement(`div`);t.className=r.markdown;let n,i;for(let r of e.source.split(`
`)){let a=r.trimEnd(),s=/^(#{1,4})\s+(.*)$/.exec(a),c=/^\s*[-*]\s+(.*)$/.exec(a),l=/^\s*\d+\.\s+(.*)$/.exec(a);if(!a.trim())n=void 0,i=void 0;else if(s){n=i=void 0;let r=document.createElement(`h${Math.min(6,s[1].length+2)}`);o(r,s[2],e.onLink),t.appendChild(r)}else if(c||l){i=void 0;let r=c?`UL`:`OL`;(!n||n.tagName!==r)&&(n=document.createElement(c?`ul`:`ol`),t.appendChild(n));let a=document.createElement(`li`);o(a,(c??l)[1],e.onLink),n.appendChild(a)}else n=void 0,i?i.appendChild(document.createTextNode(` `)):(i=document.createElement(`p`),t.appendChild(i)),o(i,a.trim(),e.onLink)}return t}function o(e,t,n){let r=0;c.lastIndex=0;for(let i=c.exec(t);i;i=c.exec(t)){if(i.index>r&&e.appendChild(document.createTextNode(t.slice(r,i.index))),i[1]!==void 0)e.appendChild(s(`strong`,i[1]));else if(i[2]!==void 0)e.appendChild(s(`em`,i[2]));else if(i[3]!==void 0)e.appendChild(s(`code`,i[3]));else{let t=s(`a`,i[4]),r=i[5];t.href=r.startsWith(`#`)||/^https?:/.test(r)?r:`#`,/^https?:/.test(r)?(t.target=`_blank`,t.rel=`noopener noreferrer`):t.addEventListener(`click`,e=>{e.preventDefault(),n?.(r)}),e.appendChild(t)}r=i.index+i[0].length}r<t.length&&e.appendChild(document.createTextNode(t.slice(r)))}function s(e,t){let n=document.createElement(e);return n.textContent=t,n}var c;function l(){return(l=e((()=>{i(),c=/\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`|\[([^\]]+)\]\(([^)\s]+)\)/g})))()}export{l as n,a as t};