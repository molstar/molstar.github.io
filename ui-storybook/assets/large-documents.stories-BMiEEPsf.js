import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{$ as r,Et as i,Tt as a,ct as o,gt as s,nt as c,st as l,wt as u,yt as d}from"./builder-DcT68JdP.js";import{M as f,b as p,d as ee,dn as te,fn as ne,h as re,j as ie,m as ae,u as oe,v as se,y as m}from"./surface-Cl60Scjx.js";import{a as h,i as g,r as _}from"./skin-BOwnI78S.js";import{S as v,_ as ce,g as le}from"./seqstar-docs-views-6L-p3-tz.js";import{a as y,d as b,i as x,n as ue,r as S,u as de}from"./seqstar-prism-C8YUN_JZ.js";import{a as C,d as fe,i as pe,l as me,s as w,t as he}from"./seqstar-viewer-De3tpdmL.js";import{f as T,i as ge,t as _e}from"./ui-5oW1_QIl.js";import{n as E,t as ve}from"./seqstar-viewer-args-CBGfO2-P.js";import{n as ye,r as be,t as xe}from"./genome-fixture-CpiJLh_d.js";var D;function O(){return(O=e((()=>{D=`/**
 * Copyright (c) 2026 mol* contributors, licensed under MIT, See LICENSE file for more info.
 *
 * Developed in collaboration with Anyfold <https://anyfold.ai/>
 *
 * @author David Sehnal <david.sehnal@gmail.com>
 */

// A synthetic genome for the Seq* viewer's scale test: 24 chromosomes sized as the human ones, scaled to about
// 3,000,000 nucleotides, with cytobands, genes as transcripts (exons as fragments of one item, UTR and CDS), proteins
// translated from a subset of the CDSs (codon mappings, as case 14), GC content per position, variants and repeats.
// Seeded and generated where it is used (the format's tests, Storybook's genome story); nothing fetched, nothing
// committed.

import { createSeqViewSpec, type NodeHandle, translate } from '@molstar/seq-core/builder';
import type { SeqViewSpecDoc } from '../../src/format/index.js';

/** GRCh38's chromosome lengths in Mb (chr1–22, X, Y). */
const HUMAN_MB = [
  248.96, 242.19, 198.3, 190.21, 181.54, 170.81, 159.35, 145.14, 138.39, 133.8, 135.09, 133.28, 114.36, 107.04, 101.99,
  90.34, 83.26, 80.37, 58.62, 64.44, 46.71, 50.82, 156.04, 57.23,
];
const NAMES = [...Array.from({ length: 22 }, (_, i) => \`chr\${i + 1}\`), 'chrX', 'chrY'];

/** mulberry32: a small seeded PRNG, uniform in [0, 1). */
function prng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export interface GenomeOptions {
  /** Total nucleotides (default 3,000,000), split over 24 chromosomes in the human proportions. */
  readonly total?: number;
  readonly genes?: number;
  /** Genes whose CDS is translated into a protein with a codon mapping (default 300). */
  readonly proteins?: number;
  readonly variants?: number;
  readonly repeats?: number;
  readonly seed?: number;
}

export interface Chromosome {
  readonly name: string;
  readonly length: number;
  readonly seq: string;
}
interface Exon {
  start: number;
  stop: number;
}
export interface Gene {
  readonly chr: number;
  readonly name: string;
  readonly exons: readonly Exon[];
  /** The coding ranges on the chromosome, in reading order (strand +), total a multiple of 3. */
  readonly cds: [number, number][];
}
export interface SynthGenome {
  readonly chromosomes: readonly Chromosome[];
  readonly genes: readonly Gene[];
  /** Indices into \`genes\` of those translated (their CDSs written as clean ORFs, never overlapping each other). */
  readonly coding: readonly number[];
  /** Cytobands per chromosome: [chr, start, stop, stain]. */
  readonly bands: { chr: number[]; start: number[]; stop: number[]; stain: string[] };
  /** GC fraction per position, of the position's 1 kb window, chromosome after chromosome. */
  readonly gc: Float64Array;
  readonly variants: { chr: number[]; start: number[]; alt: string[] };
  readonly repeats: { chr: number[]; start: number[]; stop: number[]; family: string[] };
}

const BASES = 'ACGT';
/** Sense codons (no stop) of the standard code, for clean ORFs. */
const SENSE: string[] = [];
for (const a of BASES)
  for (const b of BASES) for (const c of BASES) if (!['TAA', 'TAG', 'TGA'].includes(a + b + c)) SENSE.push(a + b + c);
const STAINS = ['gneg', 'gpos25', 'gpos50', 'gpos75', 'gpos100'];
const FAMILIES = ['LINE', 'SINE', 'LTR', 'DNA', 'Simple'];

/** The data, deterministic for a seed. */
export function synthGenome(o: GenomeOptions = {}): SynthGenome {
  const total = o.total ?? 3_000_000;
  const rand = prng(o.seed ?? 20261009);
  const int = (lo: number, hi: number) => lo + Math.floor(rand() * (hi - lo));
  const sum = HUMAN_MB.reduce((a, b) => a + b, 0);
  const lengths = HUMAN_MB.map((mb) => Math.round((mb / sum) * total));
  const bytes = lengths.map((n) => new Uint8Array(n));

  // Nucleotides with GC drifting over isochores of 20–200 kb (0.35–0.60), so the GC track has structure.
  for (const buf of bytes) {
    let gc = 0.41;
    let next = 0;
    for (let i = 0; i < buf.length; i++) {
      if (i === next) {
        gc = 0.35 + rand() * 0.25;
        next = i + int(20_000, 200_000);
      }
      const r = rand();
      buf[i] = r < gc ? (r < gc / 2 ? 67 : 71) : r < (1 + gc) / 2 ? 65 : 84;
    }
  }

  // Cytobands: alternating gneg and a G-positive stain, 1–5 % of the chromosome each, a centromere (acen) pair.
  const bands = { chr: [] as number[], start: [] as number[], stop: [] as number[], stain: [] as string[] };
  lengths.forEach((n, c) => {
    const cen = Math.floor(n * (c < 3 || c === 22 ? 0.45 : 0.3));
    let at = 0;
    let k = 0;
    while (at < n) {
      let stop = Math.min(n, at + int(Math.floor(n / 100), Math.floor(n / 20)));
      if (at < cen && stop > cen) stop = cen;
      const acen = stop === cen || at === cen;
      bands.chr.push(c);
      bands.start.push(at);
      bands.stop.push(stop);
      bands.stain.push(acen ? 'acen' : k % 2 === 0 ? 'gneg' : STAINS[int(1, STAINS.length)]);
      at = stop;
      k++;
    }
  });

  // Genes, proportional to length: a log-uniform span of 1–30 kb, 2–12 exons of 60–400 nt, UTRs at the ends.
  const geneCount = o.genes ?? 3000;
  const cum = lengths.map(
    (
      (s) => (n: number) =>
        (s += n)
    )(0),
  );
  const genes: Gene[] = [];
  for (let g = 0; g < geneCount; g++) {
    const x = rand() * total;
    const chr = cum.findIndex((c) => x < c);
    const n = lengths[chr];
    const span = Math.min(n - 1, Math.round(Math.exp(Math.log(1000) + rand() * Math.log(30))));
    const start = int(0, Math.max(1, n - span));
    const count = int(2, Math.min(13, Math.floor(span / 300) + 2));
    // Exon starts spread over the span: cut it into \`count\` slots, an exon at the start of each.
    const exons: Exon[] = [];
    const slot = span / count;
    for (let e = 0; e < count; e++) {
      const s = start + Math.floor(e * slot) + (e === 0 ? 0 : int(0, Math.floor(slot / 3)));
      const len = Math.min(int(60, 400), Math.floor(slot * 0.6));
      exons.push({ start: s, stop: s + Math.max(30, len) });
    }
    exons[count - 1].stop = Math.min(n, Math.max(exons[count - 1].stop, start + span));
    // The CDS: from inside the first exon to inside the last, cut to whole codons.
    const first = exons[0];
    const last = exons[count - 1];
    const cdsStart = first.start + int(5, Math.max(6, Math.floor((first.stop - first.start) / 2)));
    const cdsStop = last.stop - int(5, Math.max(6, Math.floor((last.stop - last.start) / 2)));
    const cds: [number, number][] = [];
    for (const ex of exons) {
      const a = Math.max(ex.start, cdsStart);
      const b = Math.min(ex.stop, cdsStop);
      if (a < b) cds.push([a, b]);
    }
    let len = cds.reduce((t, [a, b]) => t + b - a, 0);
    while (len % 3 !== 0 || cds[cds.length - 1][1] - cds[cds.length - 1][0] < 3) {
      const tail = cds[cds.length - 1];
      tail[1]--;
      len--;
      if (tail[1] <= tail[0]) {
        cds.pop();
        len = cds.reduce((t, [a, b]) => t + b - a, 0);
      }
    }
    genes.push({ chr, name: \`G\${String(g + 1).padStart(4, '0')}\`, exons, cds });
  }

  // Coding genes: spread over the list, never overlapping each other; their CDSs written as ATG, sense codons, a stop.
  const coding: number[] = [];
  const want = Math.min(o.proteins ?? 300, geneCount);
  const taken: [number, number, number][] = [];
  // Every \`stride\`-th gene first, then the others, until \`want\` are taken.
  const stride = Math.max(1, Math.floor(geneCount / want));
  const order = [...genes.keys()].sort((x, y) => (x % stride) - (y % stride) || x - y);
  for (const g of order) {
    if (coding.length >= want) break;
    const gene = genes[g];
    const a = gene.exons[0].start;
    const b = gene.exons[gene.exons.length - 1].stop;
    if (taken.some(([c, s, e]) => c === gene.chr && s < b && a < e)) continue;
    taken.push([gene.chr, a, b]);
    coding.push(g);
    const buf = bytes[gene.chr];
    const nts = gene.cds.reduce((t, [x, y]) => t + y - x, 0);
    let codon = '';
    let k = 0;
    for (const [x, y] of gene.cds)
      for (let i = x; i < y; i++, k++) {
        if (k % 3 === 0)
          codon = k === 0 ? 'ATG' : k + 3 >= nts ? ['TAA', 'TAG', 'TGA'][int(0, 3)] : SENSE[int(0, SENSE.length)];
        buf[i] = codon.charCodeAt(k % 3);
      }
  }

  // GC per position: its 1 kb window's fraction (the windows' values, dense, as \`values\` takes them).
  const gc = new Float64Array(total + 24);
  let off = 0;
  for (const buf of bytes) {
    for (let w = 0; w < buf.length; w += 1000) {
      const end = Math.min(buf.length, w + 1000);
      let n = 0;
      for (let i = w; i < end; i++) if (buf[i] === 67 || buf[i] === 71) n++;
      gc.fill(n / (end - w), off + w, off + end);
    }
    off += buf.length;
  }

  // Variants: single positions, an alternative base other than the reference.
  const variants = { chr: [] as number[], start: [] as number[], alt: [] as string[] };
  for (let k = 0; k < (o.variants ?? 20_000); k++) {
    const x = rand() * total;
    const chr = cum.findIndex((c) => x < c);
    const i = int(0, lengths[chr]);
    const ref = bytes[chr][i];
    let alt = BASES.charCodeAt(int(0, 4));
    if (alt === ref) alt = BASES.charCodeAt((BASES.indexOf(String.fromCharCode(ref)) + 1) % 4);
    variants.chr.push(chr);
    variants.start.push(i);
    variants.alt.push(String.fromCharCode(alt));
  }

  // Repeats: 50–600 nt, five families.
  const repeats = { chr: [] as number[], start: [] as number[], stop: [] as number[], family: [] as string[] };
  for (let k = 0; k < (o.repeats ?? 10_000); k++) {
    const x = rand() * total;
    const chr = cum.findIndex((c) => x < c);
    const len = int(50, 600);
    const s = int(0, lengths[chr] - len);
    repeats.chr.push(chr);
    repeats.start.push(s);
    repeats.stop.push(s + len);
    repeats.family.push(FAMILIES[int(0, FAMILIES.length)]);
  }

  const dec = new TextDecoder('latin1');
  const chromosomes = bytes.map((b, c) => ({ name: NAMES[c], length: b.length, seq: dec.decode(b) }));
  return { chromosomes, genes, coding, bands, gc: gc.subarray(0, off), variants, repeats };
}

// #region genome
/** The document: 24 chromosome blocks on one axis, each track's data one table with a \`target\` column. */
export function genomeDoc(g: SynthGenome, o: { gcTable?: 'one' | 'each' } = {}): SeqViewSpecDoc {
  const b = createSeqViewSpec({ title: 'A synthetic genome of 3,000,000 nucleotides' });
  const chrs = g.chromosomes.map((c) => b.data.sequence({ ref: c.name, label: c.name, alphabet: 'dna', value: c.seq }));
  // A string column dictionary-coded (seqspec:format#positions): 24 names, a code per row. Number columns are typed
  // arrays, kept as given (seqspec:format#values): JSON writes them as arrays, MessagePack packs them.
  const target = (chr: ArrayLike<number>) => ({ dict: g.chromosomes.map((c) => c.name), codes: Uint8Array.from(chr) });
  const i32 = (xs: number[]) => Int32Array.from(xs);

  const bands = b.data.annotation({
    ref: 'cytobands',
    geometry: 'ranges',
    value: { target: target(g.bands.chr), start: i32(g.bands.start), stop: i32(g.bands.stop), category: g.bands.stain },
  });

  // Transcripts: one item per gene (\`id\`), its exons as fragments, each cut into UTR and CDS parts (\`category\`).
  const tx = { target: [] as number[], start: [] as number[], stop: [] as number[], id: [] as string[] };
  const cat: string[] = [];
  const label: string[] = [];
  const part = (gene: Gene, s: number, e: number, c: string) => {
    if (e <= s) return;
    tx.target.push(gene.chr);
    tx.start.push(s);
    tx.stop.push(e);
    tx.id.push(gene.name);
    cat.push(c);
    label.push(gene.name);
  };
  for (const gene of g.genes) {
    const c0 = gene.cds[0][0];
    const c1 = gene.cds[gene.cds.length - 1][1];
    for (const ex of gene.exons) {
      part(gene, ex.start, Math.min(ex.stop, c0), 'UTR');
      part(gene, Math.max(ex.start, c0), Math.min(ex.stop, c1), 'CDS');
      part(gene, Math.max(ex.start, c1), ex.stop, 'UTR');
    }
  }
  const genes = b.data.annotation({
    ref: 'genes',
    geometry: 'ranges',
    value: { ...tx, target: target(tx.target), start: i32(tx.start), stop: i32(tx.stop), category: cat, label },
  });

  // Proteins: each coding gene's CDS translated, with its codon mapping (case 14's \`translate\`).
  for (const k of g.coding) {
    const gene = g.genes[k];
    translate(b.data, {
      ref: \`\${gene.name}.p\`,
      label: \`\${gene.name} protein\`,
      from: chrs[gene.chr],
      cds: gene.cds,
    });
  }

  // GC: dense values (no \`index\`), one per position in index order. One table per chromosome (\`target\` a param), or
  // one table for all with a \`target\` per row (3M refs, dictionary-coded; slower to check and load).
  const gc: NodeHandle<'annotation'>[] = [];
  if (o.gcTable === 'one') {
    const codes = new Uint8Array(g.gc.length);
    let at = 0;
    g.chromosomes.forEach((c, k) => {
      codes.fill(k, at, at + c.length);
      at += c.length;
    });
    gc.push(b.data.annotation({ ref: 'gc', geometry: 'values', value: { target: target(codes), value: g.gc } }));
  } else {
    let at = 0;
    g.chromosomes.forEach((c, k) => {
      const value = g.gc.subarray(at, at + c.length);
      at += c.length;
      gc.push(b.data.annotation({ ref: \`gc.\${c.name}\`, geometry: 'values', target: chrs[k], value: { value } }));
    });
  }
  const variants = b.data.annotation({
    ref: 'variants',
    geometry: 'ranges',
    value: { target: target(g.variants.chr), start: i32(g.variants.start), alt: g.variants.alt },
  });
  const rp = g.repeats;
  const repeats = b.data.annotation({
    ref: 'repeats',
    geometry: 'ranges',
    value: { target: target(rp.chr), start: i32(rp.start), stop: i32(rp.stop), category: rp.family },
  });

  const v = b.view({ ref: 'genome', label: 'Genome' });
  for (const c of chrs) v.block({ sequence: c });
  v.track({ label: '' }).ruler();
  v.track({ label: 'Cytobands' }).color({
    data: bands,
    color: {
      theme: 'field_palette',
      params: {
        palette: {
          kind: 'categorical',
          colors: {
            gneg: '#f4f4f4',
            gpos25: '#c8c8c8',
            gpos50: '#969696',
            gpos75: '#5f5f5f',
            gpos100: '#1e1e1e',
            acen: '#c0392b',
          },
        },
      },
    },
  });
  v.track({ label: 'Nucleotides' }).letters();
  // One layer for every protein: each over its codons on its chromosome (\`of: "mapped"\`).
  if (g.coding.length > 0) v.track({ label: 'Proteins' }).letters({ of: 'mapped' });
  v.track({ label: 'Genes', height: 4 }).ranges({ data: genes, labels: true });
  const gcTrack = v.track({ label: 'GC content', height: 2 });
  for (const data of gc) gcTrack.values({ data, domain: [0.3, 0.65] });
  v.track({ label: 'Variants' }).variants({ data: variants });
  v.track({ label: 'Repeats' }).color({ data: repeats });
  return b.getDocument();
}
// #endregion
`})))()}function k(e,t){return t&&((n,r,i)=>{let a=performance.now();t(n,r,i);let o=performance.now()-a;A.draw[3*e]+=o,A.draw[3*e+1]++,o>A.draw[3*e+2]&&(A.draw[3*e+2]=o)})}var A,j;function M(){return(M=e((()=>{p(),A={names:[],draw:new Float64Array(192),prepare:{},doc:null,report(){return A.names.map((e,t)=>[e,A.draw[3*t+1],+A.draw[3*t].toFixed(1),+A.draw[3*t+2].toFixed(2)]).filter(e=>e[1]>0)},reset(){A.draw.fill(0)}},j=m.map((e,t)=>(A.names[t]=e.name,{...e,prepare:(t,n)=>{let r=performance.now(),i=e.prepare(t,n);return A.prepare[e.name]=(A.prepare[e.name]??0)+performance.now()-r,i},draw:k(t,e.draw)}))})))()}function Se(e){let t=`${e.proteins}/${e.gcTable}`,n=L.get(t);if(!n){let r=performance.now(),i=be({proteins:e.proteins}),a=performance.now();n={doc:xe(i,{gcTable:e.gcTable}),synthMs:a-r,builderMs:performance.now()-a},L.set(t,n)}return A.doc=n.doc,n}function Ce(e,t){let[n,r]=(0,N.useState)(null),[i,a]=(0,N.useState)(null);return(0,N.useEffect)(()=>{let n=re(),i=[{...ae,presets:me({navigator:t}),renderers:j}],o=[[te.UI.Chrome,pe]],s=ie({...n,registry:i,config:o},{loaders:I,scheduler:ee()}),c={ctx:s,surfaces:new Map},l=globalThis.__seqViewers;l?.add(c);for(let e of Object.keys(A.prepare))delete A.prepare[e];a(null);let u=R(),d=performance.now(),f=0;return s.setDocument(e).then(e=>{let t=performance.now()-d,n=()=>{let r=c.surfaces.get(F);if(s.disposed)return;if(!r||r.stats.frames===0){f=requestAnimationFrame(n);return}let i=performance.now()-d,o=r.stats.lastMs,l=performance.now();r.composer.redraw(),r.invalidate(7),r.renderNow(),r.element.querySelector(`canvas`)?.getContext(`2d`)?.getImageData(0,0,1,1),a({graphMs:t,firstFrameMs:i,frameMs:o,redrawMs:performance.now()-l,heapBeforeMb:u,heapMb:R(),prepare:{...A.prepare},issues:e.issues.length})};n()}),r(c),()=>{cancelAnimationFrame(f),l?.delete(c),r(null),s.dispose()}},[e,t]),{m:n,load:i}}async function we(e){let t=u();i(t,l);let n=performance.now(),a=d(e,t),o=performance.now(),s=await r(e,t,I),c=performance.now();return{validateMs:o-n,compileMs:c-o,issues:a.length+s.issues.length}}function Te({navigator:e,ui:t}){let[n,r]=(0,N.useState)({proteins:300,gcTable:`each`}),i=(0,N.useMemo)(()=>Se(n),[n]),{m:a,load:o}=Ce(i.doc,e),s=fe(a),[c,l]=(0,N.useState)(``),u={"--seq-section-max-height":`720px`},d=typeof window>`u`?1:window.devicePixelRatio;return(0,P.jsxs)(S,{title:`A genome at scale: 3,000,000 nucleotides on one axis`,caption:(0,P.jsxs)(P.Fragment,{children:[`Synthetic and seeded, made in the page: 24 chromosomes in the human proportions as blocks, cytobands, 3,000 genes as transcripts (exons as fragments of one item, UTR and CDS), `,n.proteins,` proteins translated from their CDS with codon mappings, GC content per position (1 kb windows), 20,000 variants, 10,000 repeats.`]}),children:[(0,P.jsx)(he,{source:{code:D.slice(D.indexOf(`// #region genome
`)+18,D.indexOf(`// #endregion`)).trimEnd(),uses:`The data from synthGenome (core/_test/format/genome-fixture.ts): a seeded PRNG, no network`}}),(0,P.jsxs)(`div`,{className:y.controls,children:[(0,P.jsx)(`div`,{className:y.narrow,children:(0,P.jsx)(T,{label:`Proteins`,choices:B.map(e=>({id:String(e),label:String(e)})),active:String(n.proteins),onPick:e=>r({...n,proteins:B.find(t=>String(t)===e)??n.proteins})})}),(0,P.jsx)(`div`,{className:y.wide,children:(0,P.jsx)(T,{label:`GC`,choices:[{id:`each`,label:`a table per chromosome`},{id:`one`,label:`one table, a target per row`}],active:n.gcTable,onPick:e=>r({...n,gcTable:e})})})]}),(0,P.jsxs)(`section`,{className:b.card,style:u,children:[(0,P.jsx)(`h2`,{className:b.heading,children:`Genome`}),a?(0,P.jsx)(g,{context:a.ctx,ui:s,children:(0,P.jsx)(ue,{children:(0,P.jsx)(_,{})})}):(0,P.jsx)(`div`,{className:b.status,children:`Loading…`}),t===`DOM`&&(0,P.jsx)(`div`,{className:b.code,children:`This story draws the React UI only.`})]}),(0,P.jsxs)(`div`,{className:b.code,children:[`Window ${window.innerWidth} × ${window.innerHeight} CSS px, DPR ${d}. Synthesis ${z(i.synthMs)}, builder ${z(i.builderMs)}. `,o?`Graph (load, resolve, prepare) ${z(o.graphMs)}; first whole frame ${z(o.firstFrameMs)} after setDocument (that frame ${z(o.frameMs)}, a full redraw ${z(o.redrawMs)}); JS heap ${o.heapBeforeMb} MB before, ${o.heapMb} MB after; ${o.issues} issues. Prepare: ${Object.entries(o.prepare).map(([e,t])=>`${e} ${z(t)}`).join(`, `)}.`:`Loading…`]}),(0,P.jsxs)(`div`,{className:b.row,children:[(0,P.jsx)(ge,{tone:`quiet`,onClick:()=>void we(i.doc).then(e=>l(JSON.stringify(e))),children:`Time validate and compile alone`}),(0,P.jsx)(`span`,{className:b.code,children:c})]})]})}var N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{c(),a(),o(),s(),f(),se(),ne(),oe(),h(),N=t(),ye(),O(),M(),x(),_e(),de(),w(),P=n(),F=`genome.main`,globalThis.__genome=A,I={load:()=>Promise.reject(Error(`the genome story loads nothing`))},L=new Map,R=()=>{globalThis.gc?.();let e=performance.memory;return e?Math.round(e.usedJSHeapSize/1e6):NaN},z=e=>`${Math.round(e).toLocaleString(`en-US`)} ms`,B=[0,30,300]})))()}function H({rows:e,columns:t,a:n}){return(0,U.jsx)(S,{title:(0,U.jsxs)(U.Fragment,{children:[`A synthetic alignment of `,e.toLocaleString(`en-US`),` rows × `,t.toLocaleString(`en-US`),` columns`]}),caption:(0,U.jsx)(U.Fragment,{children:`Synthetic, by value. Zoom out (Ctrl-wheel) and Alt-wheel rows: below a device pixel the rows draw from pyramid reductions (each sample the majority class, opaque by its share), computed in place by the tile manager, coarse under fine.`}),children:(0,U.jsx)(C,{doc:K(e,t),label:`Alignment`,options:{navigator:n.navigator,rowsColor:n.rowsColor,ui:n.ui}})})}var U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{le(),V(),x(),w(),ve(),U=n(),W={title:`Seq*/Performance/Large documents`,...E,parameters:{...E.parameters,layout:`fullscreen`,docs:{description:{component:`Large documents: alignments and sequences too big to read at once, drawn from reductions, and a genome of 3,000,000
nucleotides.`}}}},G=new Map,K=(e,t)=>{let n=`${e}x${t}`,r=G.get(n)??ce(e,t);return G.set(n,r),r},q={name:`Large alignment (10,000 × 300)`,render:e=>(0,U.jsx)(H,{rows:1e4,columns:300,a:e})},J={name:`Large alignment (1,000 × 2,000)`,render:e=>(0,U.jsx)(H,{rows:1e3,columns:2e3,a:e})},Y=null,X={name:`35,000 residues`,render:e=>(Y??=v(35e3),(0,U.jsx)(S,{title:`A titin-sized sequence`,caption:`Synthetic, by value: 35,000 residues and 70 domains on one axis.`,children:(0,U.jsx)(C,{doc:Y,label:`Sequence and domains`,options:{navigator:e.navigator,ui:e.ui}})}))},Z={name:`Genome-scale, 3M nucleotides`,render:e=>(0,U.jsx)(Te,{navigator:e.navigator,ui:e.ui})},Q=[`LargeAlignment`,`WideAlignment`,`LongSequence`,`GenomeScale`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Large alignment (10,000 × 300)',
  render: a => <Large rows={10_000} columns={300} a={a} />
}`,...q.parameters?.docs?.source},description:{story:`10,000 rows × 300 columns in memory: reductions computed by the tile manager when zoomed out.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Large alignment (1,000 × 2,000)',
  render: a => <Large rows={1_000} columns={2_000} a={a} />
}`,...J.parameters?.docs?.source},description:{story:`1,000 rows × 2,000 columns.`,...J.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: '35,000 residues',
  render: a => {
    LONG ??= longSequence(35_000);
    return <PrismPage title="A titin-sized sequence" caption="Synthetic, by value: 35,000 residues and 70 domains on one axis.">
        <ViewerCard doc={LONG} label="Sequence and domains" options={{
        navigator: a.navigator,
        ui: a.ui
      }} />
      </PrismPage>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Genome-scale, 3M nucleotides',
  render: a => <GenomeView navigator={a.navigator} ui={a.ui} />
}`,...Z.parameters?.docs?.source},description:{story:`A genome at scale: 3,000,000 nucleotides in 24 chromosome blocks, genes as
transcripts, proteins over their codons, GC content, variants and repeats; synthetic, seeded, made in the page.`,...Z.parameters?.docs?.description}}}})))()}$();export{Z as GenomeScale,q as LargeAlignment,X as LongSequence,J as WideAlignment,Q as __namedExportsOrder,W as default};