import{C as b,b as g,f as d,q as v}from"./chunk-BGEN4R46.js";var T={actionLabel:"msp-viewer-structure-tab-actionLabel",actions:"msp-viewer-structure-tab-actions",chevron:"msp-viewer-structure-tab-chevron",child:"msp-viewer-structure-tab-child",childChevron:"msp-viewer-structure-tab-childChevron",childDescription:"msp-viewer-structure-tab-childDescription",childEye:"msp-viewer-structure-tab-childEye",childHidden:"msp-viewer-structure-tab-childHidden",childIcon:"msp-viewer-structure-tab-childIcon",childLabel:"msp-viewer-structure-tab-childLabel",childOpen:"msp-viewer-structure-tab-childOpen",children:"msp-viewer-structure-tab-children",childrenTitle:"msp-viewer-structure-tab-childrenTitle",fact:"msp-viewer-structure-tab-fact",facts:"msp-viewer-structure-tab-facts",inspection:"msp-viewer-structure-tab-inspection",inspector:"msp-viewer-structure-tab-inspector",inspectorAction:"msp-viewer-structure-tab-inspectorAction",inspectorActions:"msp-viewer-structure-tab-inspectorActions",inspectorContent:"msp-viewer-structure-tab-inspectorContent",inspectorEmpty:"msp-viewer-structure-tab-inspectorEmpty",inspectorEye:"msp-viewer-structure-tab-inspectorEye",inspectorHeader:"msp-viewer-structure-tab-inspectorHeader",inspectorKind:"msp-viewer-structure-tab-inspectorKind",inspectorTitle:"msp-viewer-structure-tab-inspectorTitle",nothing:"msp-viewer-structure-tab-nothing",options:"msp-viewer-structure-tab-options",optionsButton:"msp-viewer-structure-tab-optionsButton",optionsContent:"msp-viewer-structure-tab-optionsContent",renameField:"msp-viewer-structure-tab-renameField",renameTitle:"msp-viewer-structure-tab-renameTitle",search:"msp-viewer-structure-tab-search",searchButton:"msp-viewer-structure-tab-searchButton",searchChip:"msp-viewer-structure-tab-searchChip",searchChipRemove:"msp-viewer-structure-tab-searchChipRemove",tab:"msp-viewer-structure-tab-tab",tree:"msp-viewer-structure-tab-tree"};b("viewer/views/structure/structure-tab.module.css",`@layer msp.components {
.msp-viewer-structure-tab-tab {
  gap: var(--msp-space-2);
  height: 100%;
  min-height: 0;
  padding: 0 var(--msp-panel-inset) var(--msp-panel-inset);
  font-size: var(--msp-font-size-sm);
  flex-direction: column;
  flex: 1 1 0;
  display: flex;
  container-type: inline-size;
}

.msp-viewer-structure-tab-tree {
  flex-direction: column;
  flex: 1 1 0;
  min-height: 80px;
  display: flex;
}

.msp-viewer-structure-tab-actions {
  gap: var(--msp-space-1);
  flex: none;
  min-width: 0;
  display: flex;
}

@container (width < 296px) {
  .msp-viewer-structure-tab-actions > button:has(.msp-viewer-structure-tab-actionLabel) {
    width: max(24px, var(--msp-touch-target, 0px));
    padding: 0;
  }

  .msp-viewer-structure-tab-actionLabel {
    clip-path: inset(50%);
    white-space: nowrap;
    width: 1px;
    height: 1px;
    position: absolute;
    overflow: hidden;
  }
}

.msp-viewer-structure-tab-inspector {
  height: clamp(180px, 42%, 420px);
  margin: calc(-1 * var(--msp-space-2)) calc(-1 * var(--msp-space-2)) 0;
  border-top: 1px solid var(--msp-glass-edge);
  flex: none;
}

.msp-viewer-structure-tab-inspectorContent {
  grid-template-columns: minmax(0, 1fr);
  min-height: 100%;
  display: grid;
}

.msp-viewer-structure-tab-inspection {
  align-content: start;
  gap: var(--msp-space-2);
  padding: var(--msp-space-3) var(--msp-space-4) var(--msp-space-3);
  grid-template-columns: minmax(0, 1fr);
  display: grid;
}

.msp-viewer-structure-tab-inspectorEmpty {
  padding: var(--msp-space-4);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-sm);
  text-align: center;
  place-items: center;
  margin: 0;
  display: grid;
}

.msp-viewer-structure-tab-inspectorHeader {
  align-items: center;
  gap: var(--msp-space-2);
  min-height: 26px;
  display: flex;
}

.msp-viewer-structure-tab-inspectorTitle {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  font-weight: 600;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-structure-tab-inspectorKind {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  text-transform: capitalize;
}

.msp-viewer-structure-tab-renameTitle {
  align-items: center;
  gap: var(--msp-space-1);
  flex: 1;
  min-width: 0;
  display: flex;

  & .msp-viewer-structure-tab-inspectorTitle {
    flex: 0 auto;
  }
}

.msp-viewer-structure-tab-renameField {
  flex: 1;
  min-width: 0;
}

.msp-viewer-structure-tab-inspectorEye {
  margin: calc(-1 * var(--msp-space-1)) calc(-1 * var(--msp-space-1)) calc(-1 * var(--msp-space-1)) auto;
  color: var(--msp-color-text-muted);
  flex: none;

  &[aria-pressed="true"] {
    color: var(--msp-color-text);
  }
}

.msp-viewer-structure-tab-nothing {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
  line-height: 1.45;
}

.msp-viewer-structure-tab-inspectorActions {
  margin: 0 calc(-1 * var(--msp-space-2));
  display: grid;
}

.msp-viewer-structure-tab-inspectorAction {
  align-items: center;
  gap: var(--msp-space-3);
  height: max(28px, var(--msp-touch-target, 0px));
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  text-align: left;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-viewer-structure-tab-facts {
  gap: var(--msp-space-1) var(--msp-space-4);
  font-size: var(--msp-font-size-xs);
  flex-wrap: wrap;
  margin: 0;
  display: flex;
}

.msp-viewer-structure-tab-fact {
  gap: var(--msp-space-2);
  display: flex;

  & dt {
    color: var(--msp-color-text-subtle);
  }

  & dd {
    font-variant-numeric: tabular-nums;
    margin: 0;
  }
}

.msp-viewer-structure-tab-chevron {
  transition: transform var(--msp-motion-fast) var(--msp-ease);
  margin-left: auto;

  [aria-expanded="false"] > & {
    transform: rotate(-90deg);
  }
}

.msp-viewer-structure-tab-searchButton {
  margin-left: auto;
}

.msp-viewer-structure-tab-search {
  align-items: center;
  gap: var(--msp-space-2);
  padding: 0 var(--msp-space-2);
  display: flex;

  & > :last-child {
    flex: 1;
    min-width: 0;
  }
}

.msp-viewer-structure-tab-searchChip {
  align-items: center;
  gap: var(--msp-space-1);
  padding: 0 0 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-accent-muted);
  color: var(--msp-color-accent);
  font-size: var(--msp-font-size-xs);
  white-space: nowrap;
  flex: none;
  display: inline-flex;
}

.msp-viewer-structure-tab-searchChipRemove {
  border-radius: var(--msp-radius-md);
  width: 20px;
  height: 20px;
  color: inherit;
  place-items: center;
  display: grid;

  &:hover {
    background: var(--msp-color-hover);
  }
}

.msp-viewer-structure-tab-optionsButton {
  margin-right: var(--msp-space-2);
}

.msp-viewer-structure-tab-options {
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-well);
  flex: none;
  max-height: 50%;
}

.msp-viewer-structure-tab-optionsContent {
  padding: var(--msp-space-2) var(--msp-space-3);
}

.msp-viewer-structure-tab-children {
  margin: 0 calc(-1 * var(--msp-space-2));
  display: grid;
}

.msp-viewer-structure-tab-childrenTitle {
  padding: 0 var(--msp-space-2) var(--msp-space-1);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-viewer-structure-tab-child {
  border-radius: var(--msp-radius-md);
  align-items: center;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }
}

.msp-viewer-structure-tab-childHidden {
  color: var(--msp-color-text-subtle);
}

.msp-viewer-structure-tab-childOpen {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  height: max(30px, var(--msp-touch-target, 0px));
  padding: 0 var(--msp-space-2);
  text-align: left;
  flex: 1;
  display: flex;
}

.msp-viewer-structure-tab-childIcon {
  color: var(--msp-color-text-muted);
  flex: none;
}

.msp-viewer-structure-tab-childLabel {
  flex: none;
  font-weight: 500;
}

.msp-viewer-structure-tab-childDescription {
  min-width: 0;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  white-space: nowrap;
  flex: 1;
  overflow: hidden;
}

.msp-viewer-structure-tab-childChevron {
  width: 24px;
  height: 28px;
  margin-right: var(--msp-space-1);
  color: var(--msp-color-text-subtle);
  flex: none;
  place-items: center;
  display: grid;
}

.msp-viewer-structure-tab-childEye {
  border-radius: var(--msp-radius-sm);
  width: 28px;
  height: 28px;
  color: var(--msp-color-text-muted);
  opacity: 0;
  flex: none;
  place-items: center;
  display: grid;

  @media (hover: none) {
    opacity: 1;
  }

  .msp-viewer-structure-tab-child:hover &, .msp-viewer-structure-tab-child:focus-within &, &[aria-expanded="true"], .msp-viewer-structure-tab-childHidden & {
    opacity: 1;
  }

  &:hover {
    color: var(--msp-color-text);
  }
}
}
`);var f='[role="treeitem"]',x=class{constructor(e){this.#r=new Map;this.#n=0;this.#o=!1;this.tree=e=>{this.#a=e,v(e,"keydown",this.#m),v(e,"focusin",this.#l),this.#i(),d(()=>{this.#a=void 0})};this.#l=e=>{let r=e.currentTarget;if(e.target===r){if(this.#o||e.relatedTarget instanceof Node&&r.contains(e.relatedTarget))return;let i=this.#s(this.#t);i<0&&(i=this.#s(this.#e.selected?.())),this.focusIndex(Math.max(i,0));return}let t=e.target.closest("[data-tree-key]"),s=t?.dataset.treeKey;if(s===void 0||!r.contains(t))return;let n=this.#s(s);n>=0&&(this.#n=n),this.#c(s)};this.#m=e=>{g();let r=e.currentTarget,t=this.#e.rows();if(e.target===r){let a=this.#s(this.#t),m=a>=0?a:this.#n,w={ArrowDown:a>=0?m+1:m,ArrowUp:a>=0?m-1:m,Home:0,End:t.length-1};e.key in w&&(e.preventDefault(),this.focusIndex(w[e.key]));return}let s=e.target.closest(f);if(!s||e.target!==s)return;let n=s.closest("[data-tree-key]")?.dataset.treeKey,i=this.#s(n);if(i<0)return;let h=this.#e.level(t[i]),o=s.getAttribute("aria-expanded"),u=s.querySelector("[data-tree-toggle]"),l=!0;switch(e.key){case"ArrowDown":i+1<t.length&&this.focusIndex(i+1);break;case"ArrowUp":i>0&&this.focusIndex(i-1);break;case"Home":this.focusIndex(0);break;case"End":this.focusIndex(t.length-1);break;case"ArrowRight":o==="false"?u?.click():o==="true"&&i+1<t.length&&this.#e.level(t[i+1])>h&&this.focusIndex(i+1);break;case"ArrowLeft":if(o==="true")u?.click();else for(let a=i-1;a>=0;a--)if(this.#e.level(t[a])<h){this.focusIndex(a);break}break;case"Enter":case" ":s.querySelector("[data-tree-row], [data-tree-action]")?.click();break;default:l=!1}l&&e.preventDefault()};this.#e=e}#e;#r;#a;#t;#n;#o;get active(){return this.#t}row(e){return r=>{r.dataset.treeKey=e,this.#r.set(e,r);let t=c(r);t&&(t.tabIndex=e===this.#t?0:-1),this.#i(),d(()=>this.#p(e,r))}}slot(e){let r;return d(()=>{r!==void 0&&this.#p(r,e)}),t=>{if(t===r)return;r!==void 0&&this.#p(r,e),r=t;let s=c(e);if(t===void 0){delete e.dataset.treeKey,s&&(s.tabIndex=-1),this.#i();return}e.dataset.treeKey=t,this.#r.set(t,e),s&&(s.tabIndex=t===this.#t?0:-1),this.#i()}}focusIndex(e){let r=this.#e.rows();if(!r.length)return;let t=Math.max(0,Math.min(r.length-1,e));this.#n=t,this.#c(this.#e.key(r[t])),this.#e.scrollTo(t),this.#u()}#s(e){if(e===void 0)return-1;let r=this.#e.rows();for(let t=0;t<r.length;t++)if(this.#e.key(r[t])===e)return t;return-1}#c(e){if(e===this.#t)return;let r=this.#t!==void 0?this.#r.get(this.#t):void 0,t=r&&c(r);t&&(t.tabIndex=-1),this.#t=e;let s=e!==void 0?this.#r.get(e):void 0,n=s&&c(s);n&&(n.tabIndex=0),this.#i()}#u(){let e=this.#t!==void 0?this.#r.get(this.#t):void 0;c(e)?.focus({preventScroll:!0})}#i(){if(!this.#a)return;let e=this.#t!==void 0&&this.#r.has(this.#t);this.#a.tabIndex=e?-1:0}#p(e,r){this.#r.get(e)===r&&(this.#r.delete(e),this.#i());let s=this.#a;if(!s)return;let i=r.getRootNode().activeElement;!i||!r.contains(i)||(this.#o=!0,s.focus({preventScroll:!0}),this.#o=!1,queueMicrotask(()=>{if(s.getRootNode().activeElement!==s)return;if(this.#s(e)>=0){c(this.#r.get(e))?.focus({preventScroll:!0});return}let o=this.#e.rows();if(!o.length)return;let u=Math.min(this.#n,o.length-1),l=this.#e.key(o[u]);this.#n=u,this.#c(l),this.#u()}))}#l;#m};function c(p){if(p)return p.matches(f)?p:p.querySelector(f)??void 0}export{T as a,x as b};
