import{a as x}from"./chunk-VLPIBHPO.js";import{c as p}from"./chunk-JUHLOZQQ.js";import"./chunk-GRAK4QNI.js";import"./chunk-CSQ3XL6T.js";import"./chunk-A2AONSIM.js";import"./chunk-7ANKUTMV.js";import{Lb as e,Na as n,Ob as d,Tb as c,bb as s,qb as l,rb as i,sb as t}from"./chunk-QUVZ4KUC.js";import"./chunk-IPU5OYZE.js";var u=`// main.tsx \u2014 side-effecting import registers all <u-*> via customElements.define
import '@universal-material/web'
import { render } from 'solid-js/web'
import App from './App'

render(() => <App />, document.getElementById('root')!)
`;var S=`// On a custom element (any tag with a \`-\`), Solid sets foo={x} as a JS PROPERTY
// by default \u2014 perfect for Lit reactive properties (objects/arrays survive).

// GOTCHA #1 \u2014 Solid lowercases the bare prop key, even on custom elements:
<u-some-thing someProp={obj} />        // WRONG \u2192 writes el.someprop, never reaches someProp
<u-some-thing prop:someProp={obj} />   // RIGHT \u2192 exact casing preserved

// plain string attribute \u2014 bare kebab-case is fine (Lit maps it to the property)
<u-button variant="filled" />

// Force the intent explicitly when the heuristic is ambiguous:
//   prop:foo={x} or .foo={x}  \u2192 JS property
//   attr:foo={x}              \u2192 HTML attribute (null/undefined removes it)
//   bool:foo={x} or ?foo={x}  \u2192 boolean attribute (present when truthy)
`;var E=`// Native input/change ARE in Solid's delegated set \u2014 onInput/onChange work, with
// the value on currentTarget.value:
<u-text-field onInput={e => setText((e.currentTarget as HTMLInputElement).value)} />

// u-select user-pick value is on target.value; change is not composed, so bind on
// the element. on:change is a native, non-delegated, case-sensitive listener:
<u-select on:change={e => setChoice((e.currentTarget as HTMLSelectElement).value)} />

// GOTCHA #2 \u2014 genuine CustomEvents are NOT delegated. Use on: with the EXACT,
// case-sensitive event name (on:selectionChange \u2260 on:selection-change):
<u-typeahead on:selected={e => pick(e.detail)} />
<u-chip-field on:remove={e => removeRow(e.detail)} />
`;var g=`import { createSignal } from 'solid-js'

export default function App() {
  const [value, setValue] = createSignal('a')

  // Two-way value \u2261 prop:value in + on:change/on:input reading currentTarget.value out.
  return (
    <u-select
      prop:value={value()}
      on:change={e => setValue((e.currentTarget as HTMLSelectElement).value)}
    >
      <u-option value="a">A</u-option>
      <u-option value="b">B</u-option>
    </u-select>
  )
}
`;var h=`// solid-shims.d.ts \u2014 augment Solid's JSX.IntrinsicElements
import type { JSX } from 'solid-js'

type SolidProps<T> = Partial<{ [K in keyof T as \`prop:\${string & K}\`]: T[K] }> &
  JSX.HTMLAttributes<T> & {
    // u-* value inputs fire native input/change (value on target.value);
    // add on:<exact-name> ONLY for genuine CustomEvents (e.g. u-typeahead \`selected\`).
    'on:input'?: (e: Event) => void
    'on:change'?: (e: Event) => void
  }

declare module 'solid-js' {
  namespace JSX {
    interface IntrinsicElements {
      'u-button': SolidProps<import('@universal-material/web').Button>
      'u-select': SolidProps<import('@universal-material/web').Select>
      'u-typeahead': SolidProps<import('@universal-material/web').Typeahead> & {
        'on:selected'?: (e: CustomEvent) => void
      }
      'u-chip-field': SolidProps<import('@universal-material/web').ChipField> & {
        'on:remove'?: (e: CustomEvent) => void
      }
      // \u2026one entry per <u-*> element, ideally code-generated from the manifest
    }
  }
}

export {}
`;var C=()=>({framework:"solid"}),G=(()=>{let a=class a{constructor(){this.mainImportHtml=u,this.propsVsAttrsHtml=S,this.eventsHtml=E,this.twoWayHtml=g,this.typescriptHtml=h}};a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=s({type:a,selectors:[["docs-solid"]],decls:333,vars:24,consts:[["kind","foundation","title","Using with SolidJS"],["sectionTitle","Register the components",3,"renderExample","html","language"],["sectionTitle","Props vs. attributes (and the camelCase gotcha)",3,"renderExample","html","language"],[1,"u-table"],["sectionTitle","Listening to events",3,"renderExample","html","language"],["sectionTitle","Two-way value binding",3,"renderExample","html","stackblitz","language"],["sectionTitle","TypeScript typing (optional)",3,"renderExample","html","language"],["sectionTitle","SSR / Solid Start",3,"renderExample","html","language"]],template:function(o,r){o&1&&(i(0,"docs-title",0),e(1," SolidJS consumes the "),i(2,"code"),e(3,"<u-*>"),t(),e(4," elements natively \u2014 it scores a perfect 16/16 on Custom Elements Everywhere. There is "),i(5,"strong"),e(6,"no runtime wrapper"),t(),e(7," ("),i(8,"code"),e(9,"solid-element"),t(),e(10," is for "),i(11,"em"),e(12,"authoring"),t(),e(13," web components, not consuming them). Two gotchas matter: camelCase prop keys get lowercased, and genuine custom events need "),i(14,"code"),e(15,"on:exact-name"),t(),e(16,`.
`),t(),i(17,"docs-example",1),e(18," The bare side-effecting "),i(19,"code"),e(20,"import"),t(),e(21," runs every "),i(22,"code"),e(23,"customElements.define"),t(),e(24,`. It has side effects, so it won't be tree-shaken away.
`),t(),i(25,"docs-example",2),e(26," On a custom element, "),i(27,"code"),e(28),t(),e(29," sets a JS "),i(30,"strong"),e(31,"property"),t(),e(32," by default \u2014 exactly right for Lit. But Solid lowercases the bare prop key, so "),i(33,"strong"),e(34,"use "),i(35,"code"),e(36,"prop:camelCaseName"),t()(),e(37," for any camelCase or non-string property; bare "),i(38,"code"),e(39,"kebab-case"),t(),e(40," is fine for plain string attributes. "),i(41,"table",3)(42,"thead")(43,"tr")(44,"th"),e(45,"Directive"),t(),i(46,"th"),e(47,"Effect"),t(),i(48,"th"),e(49,"Use for"),t()()(),i(50,"tbody")(51,"tr")(52,"td")(53,"code"),e(54,"prop:foo"),t(),e(55," or "),i(56,"code"),e(57,".foo"),t()(),i(58,"td"),e(59,"force a JS property"),t(),i(60,"td"),e(61,"camelCase props, complex values"),t()(),i(62,"tr")(63,"td")(64,"code"),e(65,"attr:foo"),t()(),i(66,"td"),e(67,"force an HTML attribute ("),i(68,"code"),e(69,"null"),t(),e(70,"/"),i(71,"code"),e(72,"undefined"),t(),e(73," removes it)"),t(),i(74,"td"),e(75,"reflected string attrs, SSR-visible attrs"),t()(),i(76,"tr")(77,"td")(78,"code"),e(79,"bool:foo"),t(),e(80," or "),i(81,"code"),e(82,"?foo"),t()(),i(83,"td"),e(84,"boolean attribute (present when truthy)"),t(),i(85,"td"),e(86,"presence-style boolean attrs"),t()()()()(),i(87,"docs-example",4),e(88," Native "),i(89,"code"),e(90,"input"),t(),e(91,"/"),i(92,"code"),e(93,"change"),t(),e(94," are in Solid's delegated set, so "),i(95,"code"),e(96,"onInput"),t(),e(97,"/"),i(98,"code"),e(99,"onChange"),t(),e(100," work (value on "),i(101,"code"),e(102,"e.currentTarget.value"),t(),e(103,"). Genuine "),i(104,"code"),e(105,"CustomEvent"),t(),e(106,"s are NOT delegated and the delegated handlers lowercase names \u2014 so use "),i(107,"code"),e(108,"on:"),t(),e(109," with the "),i(110,"strong"),e(111,"exact, case-sensitive"),t(),e(112," event name. Shadow-DOM events must be "),i(113,"code"),e(114,"composed: true"),t(),e(115,` to escape (ours are).
`),t(),i(116,"docs-example",5),e(117," Solid has no "),i(118,"code"),e(119,"v-model"),t(),e(120," sugar \u2014 binding is explicit. "),i(121,"strong"),e(122,"Mental model:"),t(),e(123," two-way "),i(124,"code"),e(125,"value"),t(),e(126," \u2261 "),i(127,"code"),e(128),t(),e(129," in + "),i(130,"code"),e(131,"on:input"),t(),e(132,"/"),i(133,"code"),e(134,"on:change"),t(),e(135," reading "),i(136,"code"),e(137,"e.currentTarget.value"),t(),e(138," out. "),i(139,"table",3)(140,"thead")(141,"tr")(142,"th"),e(143,"Component(s)"),t(),i(144,"th"),e(145,"Write in (with "),i(146,"code"),e(147,"prop:"),t(),e(148,")"),t(),i(149,"th"),e(150,"Read value out from"),t()()(),i(151,"tbody")(152,"tr")(153,"td")(154,"code"),e(155,"u-text-field"),t(),e(156,", "),i(157,"code"),e(158,"u-text-area"),t(),e(159,", "),i(160,"code"),e(161,"u-search"),t()(),i(162,"td")(163,"code"),e(164,"value: string"),t()(),i(165,"td")(166,"code"),e(167,"input"),t(),e(168," \u2192 "),i(169,"code"),e(170,"e.target.value"),t()()(),i(171,"tr")(172,"td")(173,"code"),e(174,"u-datepicker"),t(),e(175,", "),i(176,"code"),e(177,"u-range-datepicker"),t()(),i(178,"td")(179,"code"),e(180,"value: string"),t()(),i(181,"td")(182,"code"),e(183,"input"),t(),e(184," + "),i(185,"code"),e(186,"change"),t(),e(187," \u2192 "),i(188,"code"),e(189,"e.target.value"),t()()(),i(190,"tr")(191,"td")(192,"code"),e(193,"u-select"),t()(),i(194,"td")(195,"code"),e(196,"value: string"),t(),e(197," (+ "),i(198,"code"),e(199,"selectedIndex"),t(),e(200,")"),t(),i(201,"td")(202,"code"),e(203,"change"),t(),e(204," (not composed) \u2192 "),i(205,"code"),e(206,"e.target.value"),t()()(),i(207,"tr")(208,"td")(209,"code"),e(210,"u-checkbox"),t(),e(211,", "),i(212,"code"),e(213,"u-switch"),t(),e(214,", "),i(215,"code"),e(216,"u-radio"),t()(),i(217,"td")(218,"code"),e(219,"checked: boolean"),t()(),i(220,"td")(221,"code"),e(222,"input"),t(),e(223," + "),i(224,"code"),e(225,"change"),t(),e(226," \u2192 "),i(227,"code"),e(228,"e.target.checked"),t()()(),i(229,"tr")(230,"td")(231,"code"),e(232,"u-slider"),t()(),i(233,"td")(234,"code"),e(235,"value: number"),t(),e(236," (or "),i(237,"code"),e(238,"valueStart"),t(),e(239,"/"),i(240,"code"),e(241,"valueEnd"),t(),e(242,")"),t(),i(243,"td")(244,"code"),e(245,"input"),t(),e(246," + "),i(247,"code"),e(248,"change"),t(),e(249," \u2192 "),i(250,"code"),e(251,"e.target.value"),t()()(),i(252,"tr")(253,"td")(254,"code"),e(255,"u-chip-field"),t()(),i(256,"td")(257,"code"),e(258,"value: any[]"),t()(),i(259,"td")(260,"code"),e(261,"change"),t(),e(262," \u2192 "),i(263,"code"),e(264,"e.target.value"),t(),e(265,"; "),i(266,"code"),e(267,"remove"),t(),e(268," is a "),i(269,"code"),e(270,"CustomEvent"),t()()(),i(271,"tr")(272,"td")(273,"code"),e(274,"u-typeahead"),t()(),i(275,"td")(276,"code"),e(277,"value: any"),t()(),i(278,"td")(279,"code"),e(280,"input"),t(),e(281,"/"),i(282,"code"),e(283,"change"),t(),e(284," \u2192 "),i(285,"code"),e(286,"e.target.value"),t(),e(287,"; "),i(288,"code"),e(289,"selected"),t(),e(290," is a "),i(291,"code"),e(292,"CustomEvent"),t()()(),i(293,"tr")(294,"td")(295,"code"),e(296,"u-button-field"),t()(),i(297,"td")(298,"code"),e(299,"value: string"),t(),e(300," (display-only)"),t(),i(301,"td"),e(302,"none \u2014 set programmatically"),t()()()()(),i(303,"docs-example",6),e(304," Augment "),i(305,"code"),e(306,"solid-js"),t(),e(307,"' "),i(308,"code"),e(309,"JSX.IntrinsicElements"),t(),e(310," with one entry per "),i(311,"code"),e(312,"u-*"),t(),e(313," element. The augmentation can be hand-written or code-generated from "),i(314,"code"),e(315,"dist/custom-elements.json"),t(),e(316,". Type the genuine "),i(317,"code"),e(318,"CustomEvent"),t(),e(319," handlers ("),i(320,"code"),e(321,"on:selected"),t(),e(322," on typeahead, "),i(323,"code"),e(324,"on:remove"),t(),e(325,` on chip field).
`),t(),i(326,"docs-example",7)(327,"code"),e(328,"customElements"),t(),e(329," is undefined on the server, so register client-side only \u2014 import in a client-only entry or guard the registration import behind an "),i(330,"code"),e(331,"isServer"),t(),e(332,` check in Solid Start.
`),t()),o&2&&(n(17),l("renderExample",!1)("html",r.mainImportHtml)("language","typescript"),n(8),l("renderExample",!1)("html",r.propsVsAttrsHtml)("language","typescript"),n(3),d("foo=","{","x","}"),n(59),l("renderExample",!1)("html",r.eventsHtml)("language","typescript"),n(29),l("renderExample",!1)("html",r.twoWayHtml)("stackblitz",c(23,C))("language","typescript"),n(12),d("prop:value=","{","x()","}"),n(175),l("renderExample",!1)("html",r.typescriptHtml)("language","typescript"),n(23),l("renderExample",!1)("html",r.mainImportHtml)("language","typescript"))},dependencies:[x,p],styles:["[_nghost-%COMP%]{display:block}"]});let m=a;return m})();export{G as SolidComponent};
