import{a as u}from"./chunk-VLPIBHPO.js";import{c as s}from"./chunk-JUHLOZQQ.js";import"./chunk-GRAK4QNI.js";import"./chunk-CSQ3XL6T.js";import"./chunk-A2AONSIM.js";import"./chunk-7ANKUTMV.js";import{Lb as e,Na as i,Tb as c,bb as r,qb as l,rb as n,sb as t}from"./chunk-QUVZ4KUC.js";import"./chunk-IPU5OYZE.js";var x=`// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Treat every <u-*> tag as a custom element (skip Vue resolution).
          // isCustomElement is COMPILE-TIME \u2014 it must live in the build config,
          // not app.config.compilerOptions, when you use a build step.
          isCustomElement: (tag) => tag.startsWith('u-'),
        },
      },
    }),
  ],
})
`;var p=`// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import '@universal-material/web' // side-effect: registers all <u-*> custom elements

createApp(App).mount('#app')
`;var E=`<template>
  <!-- Vue checks \`key in element\` and sets a DOM PROPERTY when it exists,
       else an ATTRIBUTE. Lit reflects @property declarations as real
       properties, so :prop binding works for strings, numbers, booleans
       AND objects/arrays. -->
  <u-button :disabled="isDisabled">Save</u-button>
  <u-typeahead :source="rows"></u-typeahead> <!-- array passed as a property -->

  <!-- Override the heuristic when it guesses wrong: -->
  <u-element .user="{ name: 'jack' }"></u-element>      <!-- .prop forces a property -->
  <u-element :aria-label.attr="label"></u-element>      <!-- .attr forces an attribute -->

  <!-- Listen to events with @event; read the payload off the native event -->
  <u-select @change="onChange($event)"></u-select>
  <u-text-field @input="text = $event.target.value"></u-text-field>
</template>
`;var v=`<script setup lang="ts">
import { ref } from 'vue'
const name   = ref('Ada')   // text field \u2014 follows native value/input contract
const agreed = ref(false)   // checkbox  \u2014 native \`change\` + target.checked
const choice = ref('a')     // select    \u2014 native input/change; value on target.value
<\/script>

<template>
  <!-- 1. Native-contract input: v-model "just works" (-> :value + @input) -->
  <u-text-field v-model="name" label="Name" />

  <!-- 2. The equivalent explicit form of what (1) compiles to -->
  <u-text-field :value="name" @input="name = ($event.target as any).value" />

  <!-- 3. Checkbox has no native value/input contract -> explicit :prop + @event.
       Read e.target.CHECKED, not .value -->
  <u-checkbox
    :checked="agreed"
    @change="agreed = ($event.target as any).checked"
  >I agree</u-checkbox>

  <!-- 4. Select: native input/change (change is NOT composed); value on
       $event.target.value (NOT $event.detail) -->
  <u-select
    :value="choice"
    @change="choice = ($event.target as any).value"
  >
    <u-option value="a">A</u-option>
    <u-option value="b">B</u-option>
  </u-select>
</template>
`;var h=`// vue-shims.d.ts \u2014 augment Vue's GlobalComponents so <u-*> tags are typed
import type { HTMLAttributes, PublicProps, EmitFn } from 'vue'
import type { Button, Select, Checkbox } from '@universal-material/web'

type EventMap = { [event: string]: Event }
type VueEmit<T extends EventMap> = EmitFn<{ [K in keyof T]: (event: T[K]) => void }>

type DefineCustomElement<
  ElementType extends HTMLElement,
  Events extends EventMap = {},
  SelectedAttributes extends keyof ElementType = keyof ElementType,
> = new () => ElementType & {
  $props: HTMLAttributes & Partial<Pick<ElementType, SelectedAttributes>> & PublicProps
  $emit: VueEmit<Events>
}

declare module 'vue' {
  interface GlobalComponents {
    'u-button': DefineCustomElement<Button, { click: MouseEvent }>
    'u-select': DefineCustomElement<Select, { input: Event; change: Event }>
    'u-checkbox': DefineCustomElement<Checkbox, { change: Event }>
    // \u2026one entry per <u-*> element
  }
}

export {}
`;var C=()=>({framework:"vue"}),B=(()=>{let a=class a{constructor(){this.viteConfigHtml=x,this.mainImportHtml=p,this.bindingHtml=E,this.vModelHtml=v,this.typescriptHtml=h}};a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=r({type:a,selectors:[["docs-vue"]],decls:352,vars:20,consts:[["kind","foundation","title","Using with Vue 3"],["sectionTitle","Configure the compiler (isCustomElement)",3,"renderExample","html","language"],["sectionTitle","Register the components",3,"renderExample","html","language"],["sectionTitle","Binding props and listening to events",3,"renderExample","html","language"],["sectionTitle","The v-model story",3,"renderExample","html","stackblitz","language"],[1,"u-table"],["sectionTitle","TypeScript typing",3,"renderExample","html","language"],["sectionTitle","SSR / Nuxt",3,"renderExample","html","language"]],template:function(o,m){o&1&&(n(0,"docs-title",0),e(1," Vue 3 consumes the "),n(2,"code"),e(3,"<u-*>"),t(),e(4," elements natively \u2014 there is "),n(5,"strong"),e(6,"no runtime wrapper"),t(),e(7," to install. The one mandatory step is telling the template compiler that "),n(8,"code"),e(9,"u-*"),t(),e(10," tags are custom elements via "),n(11,"code"),e(12,"isCustomElement"),t(),e(13,"; prop binding, event listening and "),n(14,"code"),e(15,"v-model"),t(),e(16,` then work out of the box.
`),t(),n(17,"docs-example",1),e(18," Without this, Vue logs "),n(19,"code"),e(20,"Failed to resolve component: u-button"),t(),e(21,". "),n(22,"code"),e(23,"isCustomElement"),t(),e(24," is a "),n(25,"strong"),e(26,"compile-time"),t(),e(27," option, so it must go in the build config (Vite / Vue CLI), not "),n(28,"code"),e(29,"app.config.compilerOptions"),t(),e(30,". Prefer the precise "),n(31,"code"),e(32,"tag.startsWith('u-')"),t(),e(33," predicate over the broad "),n(34,"code"),e(35,"tag.includes('-')"),t(),e(36,`.
`),t(),n(37,"docs-example",2),e(38," Import "),n(39,"code"),e(40,"@universal-material/web"),t(),e(41," once for its side effect \u2014 that runs every "),n(42,"code"),e(43,"@customElement('u-\u2026')"),t(),e(44,` registration.
`),t(),n(45,"docs-example",3),e(46," Vue checks whether a binding key exists as a DOM property on the element (an "),n(47,"code"),e(48,"in"),t(),e(49," check) and sets it as a property when it does, else an attribute. Use "),n(50,"code"),e(51,".prop"),t(),e(52," to force a property and "),n(53,"code"),e(54,".attr"),t(),e(55," to force an attribute when the heuristic guesses wrong. Listen with "),n(56,"code"),e(57,"@event"),t(),e(58,` and read the payload off the native event.
`),t(),n(59,"docs-example",4),e(60," Because a tag matched by "),n(61,"code"),e(62,"isCustomElement"),t(),e(63," is a plain element, Vue uses the "),n(64,"strong"),e(65,"native"),t(),n(66,"code"),e(67,"v-model"),t(),e(68," expansion ("),n(69,"code"),e(70,":value"),t(),e(71," + "),n(72,"code"),e(73,"@input"),t(),e(74,"), not the component "),n(75,"code"),e(76,"modelValue"),t(),e(77,"/"),n(78,"code"),e(79,"update:modelValue"),t(),e(80," expansion. "),n(81,"p")(82,"strong"),e(83,"Mental model:"),t(),e(84," on a "),n(85,"code"),e(86,"u-*"),t(),e(87," element, "),n(88,"code"),e(89,'v-model="x"'),t(),e(90," \u2261 "),n(91,"code"),e(92,':value="x" @input="x = $event.target.value"'),t(),e(93,". When the component doesn't expose "),n(94,"code"),e(95,"value"),t(),e(96," + "),n(97,"code"),e(98,"input"),t(),e(99,", bind "),n(100,"code"),e(101,":prop"),t(),e(102," and "),n(103,"code"),e(104,"@event"),t(),e(105," explicitly. "),t(),n(106,"table",5)(107,"thead")(108,"tr")(109,"th"),e(110,"Component(s)"),t(),n(111,"th"),e(112,"Two-way prop"),t(),n(113,"th"),e(114,"Live event (where value lives)"),t(),n(115,"th"),e(116,"Recommended binding"),t()()(),n(117,"tbody")(118,"tr")(119,"td")(120,"code"),e(121,"u-text-field"),t(),e(122,", "),n(123,"code"),e(124,"u-text-area"),t(),e(125,", "),n(126,"code"),e(127,"u-search"),t()(),n(128,"td")(129,"code"),e(130,"value: string"),t()(),n(131,"td")(132,"code"),e(133,"input"),t(),e(134,"; value on "),n(135,"code"),e(136,"$event.target.value"),t()(),n(137,"td")(138,"code"),e(139,'v-model="text"'),t()()(),n(140,"tr")(141,"td")(142,"code"),e(143,"u-datepicker"),t(),e(144,", "),n(145,"code"),e(146,"u-range-datepicker"),t()(),n(147,"td")(148,"code"),e(149,"value: string"),t()(),n(150,"td")(151,"code"),e(152,"input"),t(),e(153," + "),n(154,"code"),e(155,"change"),t(),e(156,"; "),n(157,"code"),e(158,"$event.target.value"),t()(),n(159,"td")(160,"code"),e(161,'v-model="date"'),t()()(),n(162,"tr")(163,"td")(164,"code"),e(165,"u-select"),t()(),n(166,"td")(167,"code"),e(168,"value: string"),t()(),n(169,"td")(170,"code"),e(171,"input"),t(),e(172," + "),n(173,"code"),e(174,"change"),t(),e(175," (not composed); "),n(176,"code"),e(177,"$event.target.value"),t()(),n(178,"td")(179,"code"),e(180,'v-model="choice"'),t(),e(181," or "),n(182,"code"),e(183,":value"),t(),e(184," + "),n(185,"code"),e(186,"@change"),t()()(),n(187,"tr")(188,"td")(189,"code"),e(190,"u-checkbox"),t(),e(191,", "),n(192,"code"),e(193,"u-switch"),t(),e(194,", "),n(195,"code"),e(196,"u-radio"),t()(),n(197,"td")(198,"code"),e(199,"checked: boolean"),t()(),n(200,"td")(201,"code"),e(202,"change"),t(),e(203,"; value on "),n(204,"code"),e(205,"$event.target.checked"),t()(),n(206,"td")(207,"code"),e(208,":checked"),t(),e(209," + "),n(210,"code"),e(211,'@change="x = $event.target.checked"'),t()()(),n(212,"tr")(213,"td")(214,"code"),e(215,"u-slider"),t()(),n(216,"td")(217,"code"),e(218,"value: number"),t(),e(219," (or "),n(220,"code"),e(221,"valueStart"),t(),e(222,"/"),n(223,"code"),e(224,"valueEnd"),t(),e(225,")"),t(),n(226,"td")(227,"code"),e(228,"input"),t(),e(229," + "),n(230,"code"),e(231,"change"),t(),e(232,"; "),n(233,"code"),e(234,"$event.target.value"),t()(),n(235,"td")(236,"code"),e(237,'v-model.number="n"'),t(),e(238," (single)"),t()(),n(239,"tr")(240,"td")(241,"code"),e(242,"u-chip-field"),t()(),n(243,"td")(244,"code"),e(245,"value: any[]"),t()(),n(246,"td")(247,"code"),e(248,"change"),t(),e(249," (array, not at "),n(250,"code"),e(251,"target.value"),t(),e(252,"\u2026 read "),n(253,"code"),e(254,"$event.target.value"),t(),e(255,")"),t(),n(256,"td")(257,"code"),e(258,":value"),t(),e(259," + "),n(260,"code"),e(261,'@change="rows = $event.target.value"'),t()()(),n(262,"tr")(263,"td")(264,"code"),e(265,"u-typeahead"),t()(),n(266,"td")(267,"code"),e(268,"value: any"),t()(),n(269,"td")(270,"code"),e(271,"input"),t(),e(272," + "),n(273,"code"),e(274,"change"),t(),e(275," + "),n(276,"code"),e(277,"selected"),t(),e(278," ("),n(279,"code"),e(280,"CustomEvent"),t(),e(281,")"),t(),n(282,"td")(283,"code"),e(284,":value"),t(),e(285," + "),n(286,"code"),e(287,"@input"),t(),e(288,"; "),n(289,"code"),e(290,"@selected"),t(),e(291," reads "),n(292,"code"),e(293,"$event.detail"),t()()(),n(294,"tr")(295,"td")(296,"code"),e(297,"u-button-field"),t()(),n(298,"td")(299,"code"),e(300,"value: string"),t(),e(301," (display-only)"),t(),n(302,"td"),e(303,"none"),t(),n(304,"td"),e(305,"one-way "),n(306,"code"),e(307,":value"),t(),e(308," only"),t()()()()(),n(309,"docs-example",6),e(310," Augment Vue's "),n(311,"code"),e(312,"GlobalComponents"),t(),e(313," with the "),n(314,"code"),e(315,"DefineCustomElement<>"),t(),e(316," helper so "),n(317,"code"),e(318,"<u-*>"),t(),e(319," tags get autocomplete and type-checking in templates. Pass the element class (the Lit "),n(320,"code"),e(321,"Button"),t(),e(322,", "),n(323,"code"),e(324,"Select"),t(),e(325,", \u2026) so its "),n(326,"code"),e(327,"@property"),t(),e(328,` fields become typed template props. Without it the tags still render \u2014 you just lose IntelliSense.
`),t(),n(329,"docs-example",7),e(330," Custom elements aren't defined on the server ("),n(331,"code"),e(332,"customElements"),t(),e(333," is undefined in Node). Import the library and render "),n(334,"code"),e(335,"u-*"),t(),e(336," tags "),n(337,"strong"),e(338,"client-side only"),t(),e(339," \u2014 a Nuxt "),n(340,"code"),e(341,".client.ts"),t(),e(342," plugin with "),n(343,"code"),e(344,"<ClientOnly>"),t(),e(345," or an "),n(346,"code"),e(347,"import.meta.client"),t(),e(348," guard \u2014 or you'll hit "),n(349,"code"),e(350,"customElements is not defined"),t(),e(351,` / hydration mismatches.
`),t()),o&2&&(i(17),l("renderExample",!1)("html",m.viteConfigHtml)("language","typescript"),i(20),l("renderExample",!1)("html",m.mainImportHtml)("language","typescript"),i(8),l("renderExample",!1)("html",m.bindingHtml)("language","html"),i(14),l("renderExample",!1)("html",m.vModelHtml)("stackblitz",c(19,C))("language","html"),i(250),l("renderExample",!1)("html",m.typescriptHtml)("language","typescript"),i(20),l("renderExample",!1)("html",m.mainImportHtml)("language","typescript"))},dependencies:[u,s],styles:["[_nghost-%COMP%]{display:block}"]});let d=a;return d})();export{B as VueComponent};
