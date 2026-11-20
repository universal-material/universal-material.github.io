import{a as p}from"./chunk-VLPIBHPO.js";import{c}from"./chunk-JUHLOZQQ.js";import"./chunk-GRAK4QNI.js";import"./chunk-CSQ3XL6T.js";import"./chunk-A2AONSIM.js";import"./chunk-7ANKUTMV.js";import{Lb as e,Na as i,Tb as s,bb as m,qb as l,rb as n,sb as t}from"./chunk-QUVZ4KUC.js";import"./chunk-IPU5OYZE.js";var u=`// src/routes/+layout.ts (SvelteKit) \u2014 register once, client-only
import { browser } from '$app/environment'

if (browser) {
  // registers every <u-*> custom element
  await import('@universal-material/web')
}

// src/main.ts (plain Vite SPA \u2014 no SSR, a top-level import is safe)
import '@universal-material/web'
`;var x=`<script lang="ts">
  // Svelte 5 runes (Svelte 4: \`let name = ''\` / \`let agreed = false\`)
  let name = $state('')
  let agreed = $state(false)
<\/script>

<!-- WRITE: value flows in as a property; READ: e.target.value (NOT e.detail) -->
<u-text-field
  value={name}
  on:input={(e) => (name = (e.target as HTMLInputElement).value)}
/>

<!-- checkbox/switch/radio read e.target.CHECKED, not .value -->
<u-checkbox
  checked={agreed}
  on:change={(e) => (agreed = (e.target as HTMLInputElement).checked)}
/>

<!-- u-select: value lives on e.target.value; change is not composed, so bind on the element -->
<u-select value={name} on:input={(e) => (name = (e.target as HTMLSelectElement).value)}>
  <u-option value="a">A</u-option>
  <u-option value="b">B</u-option>
</u-select>

<!-- genuine CustomEvent payloads DO live on e.detail -->
<u-typeahead value={name} on:selected={(e) => (name = e.detail)} />
`;var E=`<!-- bind:value does NOT work on u-* custom elements; wrap once to recover it -->

<!-- UField.svelte (in the consumer app) -->
<script lang="ts">
  export let value = ''
<\/script>
<u-field {value} on:input={(e) => (value = (e.target as HTMLInputElement).value)} {...$$restProps}>
  <slot />
</u-field>

<!-- App.svelte \u2014 bind: works because UField is a Svelte component -->
<UField bind:value={name} />
`;var S=`<script>
  // The \`prop in node\` heuristic reads the LIVE element instance, so the element
  // must already be defined when Svelte sets data. If it isn't upgraded yet,
  // \`prop in node\` is false and Svelte silently sets an ATTRIBUTE \u2014 mangling an
  // object into \`[object Object]\`. Register the library eagerly to avoid this.

  // Always assign as a JS property, bypassing the heuristic:
  function setProperties(node, props) {
    const apply = () => Object.entries(props).forEach(([k, v]) => (node[k] = v))
    apply()
    return { update(next) { props = next; apply() } }
  }
<\/script>

<u-typeahead use:setProperties={{ source: ['Amy', 'Bill'], value: selected }} />
`;var g=`// src/universal-material-web.d.ts (in the consumer app)
import type { HTMLAttributes } from 'svelte/elements'

declare module 'svelte/elements' {
  export interface SvelteHTMLElements {
    'u-button': HTMLAttributes<HTMLElement> & {
      variant?: 'filled' | 'tonal' | 'outlined' | 'text' | 'elevated'
      disabled?: boolean
    }
    'u-text-field': HTMLAttributes<HTMLElement> & {
      value?: string
      label?: string
      'on:input'?: (e: InputEvent) => void
      'on:change'?: (e: Event) => void
    }
    'u-checkbox': HTMLAttributes<HTMLElement> & {
      checked?: boolean
      'on:change'?: (e: Event) => void
    }
    // \u2026 one entry per u-* element
  }
}

export {}
`;var w=()=>({framework:"svelte"}),U=(()=>{let a=class a{constructor(){this.registerHtml=u,this.bindingHtml=x,this.bindValueHtml=E,this.objectsHtml=S,this.typescriptHtml=g}};a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=m({type:a,selectors:[["docs-svelte"]],decls:300,vars:20,consts:[["kind","foundation","title","Using with Svelte"],["sectionTitle","Register the components (eager, client-only in SvelteKit)",3,"renderExample","html","language"],["sectionTitle","Binding props and listening to events",3,"renderExample","html","stackblitz","language"],[1,"u-table"],["sectionTitle","The bind:value story",3,"renderExample","html","language"],["sectionTitle","Objects, arrays & upgrade timing",3,"renderExample","html","language"],["sectionTitle","TypeScript typing",3,"renderExample","html","language"],["sectionTitle","SSR / SvelteKit",3,"renderExample","html","language"]],template:function(o,r){o&1&&(n(0,"docs-title",0),e(1," Svelte 4 and Svelte 5 consume the "),n(2,"code"),e(3,"<u-*>"),t(),e(4," elements natively \u2014 it has the best out-of-the-box custom-element support of any target framework. There is "),n(5,"strong"),e(6,"no runtime wrapper, no Vite plugin and no build config"),t(),e(7," to add. (The "),n(8,"code"),e(9,"customElement: true"),t(),e(10," compiler option is for "),n(11,"em"),e(12,"authoring"),t(),e(13,` custom elements and must not be enabled.)
`),t(),n(14,"docs-example",1),e(15," Register the library "),n(16,"strong"),e(17,"eagerly"),t(),e(18," so the elements are defined before first render \u2014 Svelte's "),n(19,"code"),e(20,"prop in node"),t(),e(21," heuristic reads the live instance, so an unupgraded element falls back to attribute-setting. In SvelteKit, guard the import to the client ("),n(22,"code"),e(23,"browser"),t(),e(24," / "),n(25,"code"),e(26,"onMount"),t(),e(27,`); a plain Vite SPA can import at the top level.
`),t(),n(28,"docs-example",2),e(29," Write the value in as a normal prop and read changes back with "),n(30,"code"),e(31,"on:input"),t(),e(32," / "),n(33,"code"),e(34,"on:change"),t(),e(35,". "),n(36,"strong"),e(37,"Read "),n(38,"code"),e(39,"e.target.value"),t(),e(40," / "),n(41,"code"),e(42,"e.target.checked"),t(),e(43,", NOT "),n(44,"code"),e(45,"e.detail"),t()(),e(46," \u2014 "),n(47,"code"),e(48,"e.detail"),t(),e(49," is reserved for genuine "),n(50,"code"),e(51,"CustomEvent"),t(),e(52,"s like "),n(53,"code"),e(54,"u-typeahead"),t(),e(55,"'s "),n(56,"code"),e(57,"selected"),t(),e(58," and "),n(59,"code"),e(60,"u-chip"),t(),e(61,"'s "),n(62,"code"),e(63,"remove"),t(),e(64,". "),n(65,"table",3)(66,"thead")(67,"tr")(68,"th"),e(69,"Component(s)"),t(),n(70,"th"),e(71,"Two-way prop"),t(),n(72,"th"),e(73,"Live event"),t(),n(74,"th"),e(75,"Read-back"),t()()(),n(76,"tbody")(77,"tr")(78,"td")(79,"code"),e(80,"u-text-field"),t(),e(81,", "),n(82,"code"),e(83,"u-text-area"),t(),e(84,", "),n(85,"code"),e(86,"u-search"),t()(),n(87,"td")(88,"code"),e(89,"value: string"),t()(),n(90,"td")(91,"code"),e(92,"input"),t(),e(93," (+ "),n(94,"code"),e(95,"change"),t(),e(96,")"),t(),n(97,"td")(98,"code"),e(99,"on:input"),t(),e(100," \u2192 "),n(101,"code"),e(102,"e.target.value"),t()()(),n(103,"tr")(104,"td")(105,"code"),e(106,"u-datepicker"),t(),e(107,", "),n(108,"code"),e(109,"u-range-datepicker"),t()(),n(110,"td")(111,"code"),e(112,"value: string"),t()(),n(113,"td")(114,"code"),e(115,"input"),t(),e(116," + "),n(117,"code"),e(118,"change"),t()(),n(119,"td")(120,"code"),e(121,"on:change"),t(),e(122," \u2192 "),n(123,"code"),e(124,"e.target.value"),t()()(),n(125,"tr")(126,"td")(127,"code"),e(128,"u-select"),t()(),n(129,"td")(130,"code"),e(131,"value: string"),t()(),n(132,"td")(133,"code"),e(134,"input"),t(),e(135," + "),n(136,"code"),e(137,"change"),t(),e(138," (not composed)"),t(),n(139,"td")(140,"code"),e(141,"on:input"),t(),e(142," \u2192 "),n(143,"code"),e(144,"e.target.value"),t()()(),n(145,"tr")(146,"td")(147,"code"),e(148,"u-checkbox"),t(),e(149,", "),n(150,"code"),e(151,"u-switch"),t(),e(152,", "),n(153,"code"),e(154,"u-radio"),t()(),n(155,"td")(156,"code"),e(157,"checked: boolean"),t()(),n(158,"td")(159,"code"),e(160,"change"),t()(),n(161,"td")(162,"code"),e(163,"on:change"),t(),e(164," \u2192 "),n(165,"code"),e(166,"e.target.checked"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"u-slider"),t()(),n(171,"td")(172,"code"),e(173,"value: number"),t()(),n(174,"td")(175,"code"),e(176,"input"),t(),e(177," + "),n(178,"code"),e(179,"change"),t()(),n(180,"td")(181,"code"),e(182,"on:input"),t(),e(183," \u2192 "),n(184,"code"),e(185,"e.target.value"),t()()(),n(186,"tr")(187,"td")(188,"code"),e(189,"u-chip-field"),t()(),n(190,"td")(191,"code"),e(192,"value: any[]"),t()(),n(193,"td")(194,"code"),e(195,"change"),t()(),n(196,"td")(197,"code"),e(198,"on:change"),t(),e(199," \u2192 "),n(200,"code"),e(201,"e.target.value"),t()()(),n(202,"tr")(203,"td")(204,"code"),e(205,"u-typeahead"),t()(),n(206,"td")(207,"code"),e(208,"value: any"),t()(),n(209,"td")(210,"code"),e(211,"input"),t(),e(212,"/"),n(213,"code"),e(214,"change"),t(),e(215," + "),n(216,"code"),e(217,"selected"),t(),e(218," ("),n(219,"code"),e(220,"CustomEvent"),t(),e(221,")"),t(),n(222,"td"),e(223,"value via "),n(224,"code"),e(225,"e.target.value"),t(),e(226,"; pick via "),n(227,"code"),e(228,"on:selected"),t(),e(229," \u2192 "),n(230,"code"),e(231,"e.detail"),t()()()()()(),n(232,"docs-example",4)(233,"strong")(234,"code"),e(235,"bind:value"),t(),e(236," does NOT work on third-party custom elements"),t(),e(237," \u2014 it is reserved for native form elements and Svelte components. Use prop-in + "),n(238,"code"),e(239,"on:input"),t(),e(240,"/"),n(241,"code"),e(242,"on:change"),t(),e(243,", or wrap the element once in a thin "),n(244,"code"),e(245,".svelte"),t(),e(246," component to recover a real "),n(247,"code"),e(248,"bind:value"),t(),e(249," ("),n(250,"code"),e(251,"bind:"),t(),e(252,` works on Svelte components).
`),t(),n(253,"docs-example",5),e(254," Svelte's "),n(255,"code"),e(256,"prop in node"),t(),e(257," heuristic sets a property when one exists on the live instance, else an attribute. If the element isn't upgraded yet, an object becomes "),n(258,"code"),e(259,"[object Object]"),t(),e(260,". Register the library eagerly, or assign properties imperatively with a "),n(261,"code"),e(262,"use:setProperties"),t(),e(263," action / "),n(264,"code"),e(265,"bind:this"),t(),e(266," + "),n(267,"code"),e(268,"$effect"),t(),e(269,`.
`),t(),n(270,"docs-example",6),e(271," Augment "),n(272,"code"),e(273,"svelte/elements"),t(),e(274,"' "),n(275,"code"),e(276,"SvelteHTMLElements"),t(),e(277," interface with one entry per "),n(278,"code"),e(279,"u-*"),t(),e(280,` tag for attribute/event autocompletion. This is DX sugar \u2014 the tags render and work without it.
`),t(),n(281,"docs-example",7)(282,"code"),e(283,"customElements"),t(),e(284," / "),n(285,"code"),e(286,"HTMLElement"),t(),e(287," are browser-only \u2014 a top-level server import throws "),n(288,"code"),e(289,"HTMLElement is not defined"),t(),e(290,". Import client-side only (inside "),n(291,"code"),e(292,"onMount"),t(),e(293,", behind the "),n(294,"code"),e(295,"browser"),t(),e(296," flag, or "),n(297,"code"),e(298,"export const ssr = false"),t(),e(299,` as a last resort).
`),t()),o&2&&(i(14),l("renderExample",!1)("html",r.registerHtml)("language","typescript"),i(14),l("renderExample",!1)("html",r.bindingHtml)("stackblitz",s(19,w))("language","html"),i(204),l("renderExample",!1)("html",r.bindValueHtml)("language","html"),i(21),l("renderExample",!1)("html",r.objectsHtml)("language","html"),i(17),l("renderExample",!1)("html",r.typescriptHtml)("language","typescript"),i(11),l("renderExample",!1)("html",r.registerHtml)("language","typescript"))},dependencies:[p,c],styles:["[_nghost-%COMP%]{display:block}"]});let d=a;return d})();export{U as SvelteComponent};
