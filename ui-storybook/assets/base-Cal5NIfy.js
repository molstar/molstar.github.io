import{n as e}from"./rolldown-runtime-DkW27tQK.js";function t(e,t){if(a.get(e)!==t){a.set(e,t);for(let e of o.values())e()}}function n(){return[i,...a.values()].join(`
`)}function r(e=document){if(o.has(e))return;let t=e.defaultView,r;if(t&&`adoptedStyleSheets`in e&&typeof t.CSSStyleSheet?.prototype.replaceSync==`function`){let i=new t.CSSStyleSheet;e.adoptedStyleSheets=[...e.adoptedStyleSheets,i],r=()=>i.replaceSync(n())}else{let t=e.createElement(`style`);t.setAttribute(`data-msp-styles`,``),e.head.appendChild(t),r=()=>{t.textContent=n()}}let i=!1;o.set(e,()=>{i||(i=!0,queueMicrotask(()=>{i=!1,r()}))}),r()}var i,a,o;function s(){return(s=e((()=>{i=`@layer msp.reset, msp.theme, msp.components, msp.overrides;`,a=new Map,o=new Map})))()}function c(){return(c=e((()=>{s(),t(`styles/reset.css`,`@property --msp-fade {
  syntax: "<length>";
  inherits: false;
  initial-value: 0;
}

@supports (animation-timeline: scroll()) {
  @keyframes msp-fade-overflow {
    from, to {
      --msp-fade: 20px;
    }
  }
}

@property --msp-fade-top {
  syntax: "<length>";
  inherits: false;
  initial-value: 0;
}

@property --msp-fade-bottom {
  syntax: "<length>";
  inherits: false;
  initial-value: 0;
}

@supports (animation-timeline: scroll()) {
  @keyframes msp-fade-scroll-top {
    from {
      --msp-fade-top: 0px;
    }

    to {
      --msp-fade-top: 16px;
    }
  }

  @keyframes msp-fade-scroll-bottom {
    from {
      --msp-fade-bottom: 16px;
    }

    to {
      --msp-fade-bottom: 0px;
    }
  }
}

@keyframes msp-reveal {
  from {
    opacity: 0;
    height: 0;
    margin-block: 0;
    padding-block: 0;
    overflow: clip;
  }

  to {
    overflow: clip;
  }
}

@keyframes msp-reveal-side {
  from {
    opacity: 0;
    translate: 12px;
  }
}

@layer msp.reset {
  :where(.msp-root) {
    interpolate-size: allow-keywords;
    font-family: var(--msp-font-sans);
    font-size: var(--msp-font-size-md);
    line-height: var(--msp-line-height);
    color: var(--msp-color-text);
    -webkit-font-smoothing: antialiased;
    text-size-adjust: none;
    cursor: default;
  }

  :where(.msp-root) :where(input:not([type="range"], [type="checkbox"], [type="radio"]), textarea, [contenteditable]) {
    cursor: text;
  }

  :where(.msp-root), :where(.msp-root) *, :where(.msp-root) :before, :where(.msp-root) :after {
    box-sizing: border-box;
  }

  :where(.msp-root) :where(h1, h2, h3, h4, h5, h6, p, ul, ol, dl, dd, figure, blockquote, pre) {
    margin: 0;
  }

  :where(.msp-root) :where(ul, ol) {
    padding: 0;
    list-style: none;
  }

  :where(.msp-root) :where(button, input, select, textarea) {
    font: inherit;
    color: inherit;
    letter-spacing: inherit;
  }

  :where(.msp-root) :where(button) {
    cursor: pointer;
    background: none;
    border: 0;
    margin: 0;
    padding: 0;
  }

  :where(.msp-root) :where(button:disabled) {
    cursor: default;
  }

  :where(.msp-root) :where(svg) {
    flex-shrink: 0;
    display: block;
  }

  :where(.msp-root) :where(:focus-visible) {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: 1px;
  }

  :where(.msp-root) :where([data-reveal]) {
    animation: msp-reveal var(--msp-motion-base) var(--msp-ease-reveal);
  }

  :where(.msp-root) :where([data-reveal="side"]) {
    animation-name: msp-reveal-side;
  }

  :where(.msp-root) :where([hidden]) {
    display: none !important;
  }

  @media (prefers-reduced-motion: reduce) {
    :where(.msp-root), :where(.msp-root) *, :where(.msp-root) :before, :where(.msp-root) :after {
      transition-duration: .01ms !important;
      animation-duration: .01ms !important;
      animation-iteration-count: 1 !important;
    }
  }
}
`)})))()}function l(){return(l=e((()=>{s(),t(`styles/theme.css`,`@layer msp.theme {
  :root, [data-msp-theme="light"] {
    color-scheme: light;
    --msp-color-bg: #eeece7;
    --msp-color-text: #332b1f;
    --msp-color-accent: #ae5d04;
    --msp-color-accent-strong: #974102;
    --msp-color-danger: #c4091f;
    --msp-color-success: #078a40;
    --msp-color-warning: #b7860b;
    --msp-color-info: #5e3673;
    --msp-shade: #000;
    --msp-color-brand-1: #7a4f2f;
    --msp-color-brand-2: #e0ae2c;
    --msp-color-brand-3: #6f9a80;
    --msp-color-brand-4: #3f86ad;
  }

  [data-msp-theme="dark"] {
    color-scheme: dark;
    --msp-color-bg: #111318;
    --msp-color-text: #ccd4e0;
    --msp-color-accent: #51a2fb;
    --msp-color-accent-strong: #68befd;
    --msp-color-danger: #fd354b;
    --msp-color-success: #0cca5d;
    --msp-color-warning: #fcc937;
    --msp-color-info: #b18ac6;
    --msp-shade: #fff;
    --msp-step-control: 10%;
    --msp-step-hover: 15%;
    --msp-step-pressed: 20%;
    --msp-color-brand-1: #d29a68;
    --msp-color-brand-2: #f5d36b;
    --msp-color-brand-3: #a8d8bc;
    --msp-color-brand-4: #79bfe6;
  }

  [data-msp-theme="blue"] {
    color-scheme: dark;
    --msp-color-bg: #2d3e50;
    --msp-color-text: #edf1f2;
    --msp-color-accent: #3b9ad9;
    --msp-color-accent-strong: #fff;
    --msp-color-danger: #ff5a4f;
    --msp-color-success: #0cca5d;
    --msp-color-warning: #fcc937;
    --msp-color-info: #b18ac6;
    --msp-shade: #fff;
    --msp-step-control: 10%;
    --msp-step-hover: 15%;
    --msp-step-pressed: 20%;
    --msp-color-brand-1: #d29a68;
    --msp-color-brand-2: #f5d36b;
    --msp-color-brand-3: #a8d8bc;
    --msp-color-brand-4: #79bfe6;
  }

  @media (prefers-color-scheme: dark) {
    [data-msp-theme="auto"] {
      color-scheme: dark;
      --msp-color-bg: #111318;
      --msp-color-text: #ccd4e0;
      --msp-color-accent: #51a2fb;
      --msp-color-accent-strong: #68befd;
      --msp-color-danger: #fd354b;
      --msp-color-success: #0cca5d;
      --msp-color-warning: #fcc937;
      --msp-color-info: #b18ac6;
      --msp-shade: #fff;
      --msp-step-control: 10%;
      --msp-step-hover: 15%;
      --msp-step-pressed: 20%;
      --msp-color-brand-1: #d29a68;
      --msp-color-brand-2: #f5d36b;
      --msp-color-brand-3: #a8d8bc;
      --msp-color-brand-4: #79bfe6;
    }
  }

  :root, [data-msp-theme] {
    --msp-color-panel: color-mix(in oklab, var(--msp-color-bg), var(--msp-shade) 3%);
    --msp-color-raised: color-mix(in oklab, var(--msp-color-bg), var(--msp-shade) 5%);
    --msp-color-well: var(--msp-color-bg);
    --msp-color-control: color-mix(in oklab, var(--msp-color-bg), var(--msp-shade) var(--msp-step-control, 6.5%));
    --msp-color-hover: color-mix(in oklab, var(--msp-color-bg), var(--msp-shade) var(--msp-step-hover, 9%));
    --msp-color-pressed: color-mix(in oklab, var(--msp-color-bg), var(--msp-shade) var(--msp-step-pressed, 13%));
    --msp-color-border: color-mix(in oklab, var(--msp-color-bg), var(--msp-shade) 15%);
    --msp-color-border-strong: color-mix(in oklab, var(--msp-color-bg), var(--msp-shade) 28%);
    --msp-color-text-muted: color-mix(in oklab, var(--msp-color-text), var(--msp-color-bg) 33%);
    --msp-color-text-subtle: color-mix(in oklab, var(--msp-color-text), var(--msp-color-bg) 55%);
    --msp-color-accent-muted: color-mix(in oklab, var(--msp-color-accent), var(--msp-color-bg) 80%);
    --msp-color-focus-ring: var(--msp-color-accent);
    --msp-color-scrim: #00000059;
    --msp-glass-bg: color-mix(in oklab, var(--msp-color-panel), transparent 30%);
    --msp-glass-panel-bg: color-mix(in oklab, var(--msp-color-panel), transparent 5%);
    --msp-glass-filter: blur(20px) saturate(1.4);
    --msp-glass-edge: color-mix(in oklab, var(--msp-color-text), transparent 88%);
    --msp-glass-shadow: 0 0 0 1px var(--msp-glass-edge);
    --msp-accent-cyan: #7f8c8d;
    --msp-accent-red: #e74c3c;
    --msp-accent-gray: #34495e;
    --msp-accent-green: #27ae60;
    --msp-accent-purple: #8e44ad;
    --msp-accent-blue: #2e86c1;
    --msp-accent-orange: #d35400;
    --msp-font-sans: "Helvetica Neue", "Segoe UI", Helvetica, "Source Sans Pro", Arial, sans-serif;
    --msp-font-mono: ui-monospace, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
    --msp-font-size-xs: 11px;
    --msp-font-size-sm: 12px;
    --msp-font-size-md: 14px;
    --msp-font-size-lg: 16px;
    --msp-line-height: 1.4;
    --msp-row-height: 32px;
    --msp-control-height: 28px;
    --msp-label-width: 110px;
    --msp-space-1: 2px;
    --msp-space-2: 4px;
    --msp-space-3: 8px;
    --msp-space-4: 12px;
    --msp-space-5: 16px;
    --msp-space-6: 24px;
    --msp-inset: var(--msp-space-3);
    --msp-panel-inset: var(--msp-space-2);
    --msp-canvas-edge: var(--msp-space-3);
    --msp-icon-sm: 14px;
    --msp-icon-md: 15px;
    --msp-radius-sm: 2px;
    --msp-radius-md: 4px;
    --msp-radius-lg: 8px;
    --msp-shadow-float: 0 2px 8px #0000002e;
    --msp-shadow-overlay: 0 8px 28px #00000047;
    --msp-z-overlay: 10;
    --msp-z-dialog: 20;
    --msp-z-toast: 30;
    --msp-z-tooltip: 40;
    --msp-motion-fast: .1s;
    --msp-motion-base: .22s;
    --msp-ease: cubic-bezier(.2, 0, 0, 1);
    --msp-ease-reveal: cubic-bezier(.4, 0, .2, 1);
  }

  [data-msp-ink="light"] {
    --msp-ink: #f5f5f5;
    --msp-ink-muted: #f5f5f5b3;
    --msp-ink-shadow: 0 0 3px #000c;
  }

  [data-msp-ink="dark"] {
    --msp-ink: #1a1a1a;
    --msp-ink-muted: #1a1a1ab3;
    --msp-ink-shadow: 0 0 3px #fffc;
  }
}
`)})))()}function u(){return(u=e((()=>{c(),l()})))()}export{s as i,r as n,t as r,u as t};