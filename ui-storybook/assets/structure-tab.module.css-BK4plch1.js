import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{X as t,Z as n}from"./jsx-runtime-pJJ4pzd1.js";var r;function i(){return(i=e((()=>{n(),r={action:`msp-viewer-scene-tree-action`,actionSlot:`msp-viewer-scene-tree-actionSlot`,actions:`msp-viewer-scene-tree-actions`,description:`msp-viewer-scene-tree-description`,empty:`msp-viewer-scene-tree-empty`,expander:`msp-viewer-scene-tree-expander`,hidden:`msp-viewer-scene-tree-hidden`,keep:`msp-viewer-scene-tree-keep`,kind:`msp-viewer-scene-tree-kind`,label:`msp-viewer-scene-tree-label`,leaf:`msp-viewer-scene-tree-leaf`,loading:`msp-viewer-scene-tree-loading`,menu:`msp-viewer-scene-tree-menu`,menuItem:`msp-viewer-scene-tree-menuItem`,picked:`msp-viewer-scene-tree-picked`,row:`msp-viewer-scene-tree-row`,subChevron:`msp-viewer-scene-tree-subChevron`,subItems:`msp-viewer-scene-tree-subItems`,subMenu:`msp-viewer-scene-tree-subMenu`,tree:`msp-viewer-scene-tree-tree`},t(`viewer/views/structure/scene-tree.module.css`,`@layer msp.components {
.msp-viewer-scene-tree-tree {
  --msp-tree-indent: 14px;
  grid-template-columns: minmax(0, 1fr);
  display: grid;
}

.msp-viewer-scene-tree-empty {
  padding: var(--msp-space-4);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
}

.msp-viewer-scene-tree-row {
  align-items: center;
  gap: var(--msp-space-2);
  content-visibility: auto;
  contain-intrinsic-size: auto 26px;
  min-width: 0;
  height: 26px;
  padding: 0 var(--msp-space-1) 0
    calc(var(--msp-space-1) + var(--msp-tree-depth, 0) * var(--msp-tree-indent, var(--msp-icon-sm)));
  border-radius: var(--msp-radius-md);
  cursor: default;
  user-select: none;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }
}

.msp-viewer-scene-tree-picked {
  background: var(--msp-color-control);

  & .msp-viewer-scene-tree-label {
    color: var(--msp-color-accent);
  }
}

.msp-viewer-scene-tree-expander {
  border-radius: var(--msp-radius-sm);
  width: 18px;
  height: 18px;
  color: var(--msp-color-text-subtle);
  transition: transform var(--msp-motion-fast) var(--msp-ease);
  flex: none;
  place-items: center;
  display: grid;

  [aria-expanded="true"] > .msp-viewer-scene-tree-row > & {
    transform: rotate(90deg);
  }

  &:hover {
    color: var(--msp-color-text);
  }
}

.msp-viewer-scene-tree-leaf {
  visibility: hidden;
}

.msp-viewer-scene-tree-kind {
  color: var(--msp-color-text-muted);
  flex: none;
}

.msp-viewer-scene-tree-label {
  min-width: 3ch;
  max-width: 60%;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 0 auto;
  font-weight: 500;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-scene-tree-description {
  min-width: 0;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-scene-tree-actions {
  flex: none;
  gap: 1px;
  display: flex;
}

.msp-viewer-scene-tree-action {
  border-radius: var(--msp-radius-sm);
  width: 22px;
  height: 22px;
  color: var(--msp-color-text-muted);
  opacity: 0;
  place-items: center;
  display: grid;

  .msp-viewer-scene-tree-row:hover &, &:focus-visible {
    opacity: 1;
  }

  &:hover {
    background: var(--msp-color-pressed);
    color: var(--msp-color-text);
  }
}

.msp-viewer-scene-tree-actionSlot {
  width: 22px;
}

.msp-viewer-scene-tree-keep {
  opacity: 1;
}

.msp-viewer-scene-tree-hidden {
  & .msp-viewer-scene-tree-label, & .msp-viewer-scene-tree-kind {
    color: var(--msp-color-text-subtle);
  }
}

.msp-viewer-scene-tree-menu {
  margin: var(--msp-space-1) var(--msp-space-1) var(--msp-space-1)
    calc(var(--msp-space-1) + var(--msp-tree-depth, 0) * var(--msp-tree-indent, var(--msp-icon-sm)) + 22px);
  padding: var(--msp-space-1);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  display: grid;
}

.msp-viewer-scene-tree-menuItem {
  align-items: center;
  gap: var(--msp-space-3);
  height: 26px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-muted);
  text-align: left;
  grid-template-columns: 14px 1fr;
  display: grid;

  &:hover, &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-viewer-scene-tree-subChevron {
  transition: transform var(--msp-motion-fast) var(--msp-ease);
  justify-self: center;

  [aria-expanded="true"] > & {
    transform: rotate(90deg);
  }
}

.msp-viewer-scene-tree-subItems {
  padding-left: calc(var(--msp-icon-sm) + var(--msp-space-3));
  display: grid;
}

.msp-viewer-scene-tree-subMenu {
  display: grid;
}

.msp-viewer-scene-tree-loading {
  height: 26px;
  padding-left: calc(var(--msp-space-1) +
    var(--msp-tree-depth, 0) *
    var(--msp-tree-indent, var(--msp-icon-sm)) +
    40px);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  line-height: 26px;
}

.msp-viewer-scene-tree-menuItem[data-danger] {
  color: var(--msp-color-danger);

  &:not(:first-child) {
    margin-top: var(--msp-space-1);
    box-shadow: 0 -1px 0 var(--msp-glass-edge);
    border-radius: 0 0 var(--msp-radius-sm) var(--msp-radius-sm);
  }

  &:hover, &:focus-visible {
    background: color-mix(in oklab, var(--msp-color-danger), transparent 88%);
    color: var(--msp-color-danger);
  }
}
}
`)})))()}var a;function o(){return(o=e((()=>{n(),a={actionLabel:`msp-viewer-structure-tab-actionLabel`,actions:`msp-viewer-structure-tab-actions`,chevron:`msp-viewer-structure-tab-chevron`,fact:`msp-viewer-structure-tab-fact`,facts:`msp-viewer-structure-tab-facts`,inspection:`msp-viewer-structure-tab-inspection`,inspector:`msp-viewer-structure-tab-inspector`,inspectorAction:`msp-viewer-structure-tab-inspectorAction`,inspectorActions:`msp-viewer-structure-tab-inspectorActions`,inspectorContent:`msp-viewer-structure-tab-inspectorContent`,inspectorEmpty:`msp-viewer-structure-tab-inspectorEmpty`,inspectorHeader:`msp-viewer-structure-tab-inspectorHeader`,inspectorKind:`msp-viewer-structure-tab-inspectorKind`,inspectorTitle:`msp-viewer-structure-tab-inspectorTitle`,nothing:`msp-viewer-structure-tab-nothing`,options:`msp-viewer-structure-tab-options`,optionsButton:`msp-viewer-structure-tab-optionsButton`,optionsContent:`msp-viewer-structure-tab-optionsContent`,preset:`msp-viewer-structure-tab-preset`,presetCaption:`msp-viewer-structure-tab-presetCaption`,presetCheck:`msp-viewer-structure-tab-presetCheck`,presetGroup:`msp-viewer-structure-tab-presetGroup`,presets:`msp-viewer-structure-tab-presets`,presetsContent:`msp-viewer-structure-tab-presetsContent`,quickStyles:`msp-viewer-structure-tab-quickStyles`,tab:`msp-viewer-structure-tab-tab`,tree:`msp-viewer-structure-tab-tree`},t(`viewer/views/structure/structure-tab.module.css`,`@layer msp.components {
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
  flex: 1 1 0;
  min-height: 80px;
}

.msp-viewer-structure-tab-actions {
  gap: var(--msp-space-1);
  flex: none;
  min-width: 0;
  display: flex;
}

@container (width < 296px) {
  .msp-viewer-structure-tab-actions > button:has(.msp-viewer-structure-tab-actionLabel) {
    width: 24px;
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
  height: 28px;
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

.msp-viewer-structure-tab-quickStyles {
  gap: var(--msp-space-2);
  padding: var(--msp-space-2) var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-well);
  flex: none;
  display: grid;
}

.msp-viewer-structure-tab-presets {
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-well);
  flex: none;
  max-height: 50%;
}

.msp-viewer-structure-tab-presetsContent {
  gap: var(--msp-space-2);
  padding: var(--msp-space-2);
  display: grid;
}

.msp-viewer-structure-tab-presetGroup {
  display: grid;
}

.msp-viewer-structure-tab-presetCaption {
  padding: var(--msp-space-1) var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-viewer-structure-tab-preset {
  height: 28px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text);
  text-align: left;
  justify-content: space-between;
  align-items: center;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  &[aria-pressed="true"] {
    color: var(--msp-color-accent);
    font-weight: 600;
  }
}

.msp-viewer-structure-tab-presetCheck {
  visibility: hidden;

  [aria-pressed="true"] > & {
    visibility: visible;
  }
}

.msp-viewer-structure-tab-chevron {
  transition: transform var(--msp-motion-fast) var(--msp-ease);
  margin-left: auto;

  [aria-expanded="false"] > & {
    transform: rotate(-90deg);
  }
}

.msp-viewer-structure-tab-optionsButton {
  margin-left: auto;
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
}
`)})))()}export{i,o as n,r,a as t};