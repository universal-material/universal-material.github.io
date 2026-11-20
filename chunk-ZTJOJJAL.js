import{a as u}from"./chunk-VLPIBHPO.js";import{c as x}from"./chunk-JUHLOZQQ.js";import"./chunk-GRAK4QNI.js";import"./chunk-CSQ3XL6T.js";import"./chunk-A2AONSIM.js";import"./chunk-7ANKUTMV.js";import{Lb as e,Na as i,Ob as c,Tb as s,bb as d,qb as l,rb as n,sb as t}from"./chunk-QUVZ4KUC.js";import"./chunk-IPU5OYZE.js";var p=`# @universal-material/web and react/react-dom are peer dependencies:
npm install @universal-material/react @universal-material/web react react-dom
`;var E=`// One U* wrapper per <u-*> element. Importing anything from
// @universal-material/react also imports @universal-material/web once for its
// side effect, which registers every <u-*> custom element \u2014 you do NOT need a
// separate \`import '@universal-material/web'\`.
import { UButton, USelect, UTextField, UCheckbox } from '@universal-material/react';
`;var h=`import { useState } from 'react';
import { UTextField, UCheckbox, USelect } from '@universal-material/react';

function Form() {
  const [name, setName] = useState('');
  const [agree, setAgree] = useState(false);
  const [country, setCountry] = useState('');

  return (
    <>
      {/* value goes IN as a DOM property; read it OUT from e.target.value */}
      <UTextField
        label="Name"
        value={name}
        onInput={(e) => setName((e.target as HTMLInputElement).value)}
      />

      {/* checkbox/switch/radio: bind \`checked\`, read e.target.checked on change */}
      <UCheckbox
        checked={agree}
        onChange={(e) => setAgree((e.target as HTMLInputElement).checked)}
      />

      {/* select binds the option value (IDL property, no \`value\` attribute) */}
      <USelect
        value={country}
        onChange={(e) => setCountry((e.target as HTMLInputElement).value)}
      >
        <u-option value="br">Brazil</u-option>
        <u-option value="us">United States</u-option>
      </USelect>
    </>
  );
}
`;var S=`import { UTextField, UCheckbox, UButton } from '@universal-material/react';

// Every input u-* element is a Form-Associated Custom Element (FACE): it calls
// attachInternals() and pushes its value via ElementInternals.setFormValue. So
// native <form> / FormData submission is free \u2014 give each element a \`name\`,
// read it on submit, and keep ZERO React state.
function Signup() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(data.get('email'), data.get('agree'));
  }

  return (
    <form onSubmit={onSubmit}>
      <UTextField name="email" />
      <UCheckbox name="agree" value="yes" />
      <UButton type="submit">Sign up</UButton>
    </form>
  );
}
`;var g=`import { useForm, Controller } from 'react-hook-form';
import { UTextField } from '@universal-material/react';

// register (uncontrolled \u2014 preferred): the elements are FACE, so RHF reads the
// value straight off the form. Spread register and forward ref/name.
function RegisterForm() {
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(console.log)}>
      <UTextField {...register('email')} />
    </form>
  );
}

// Controller (controlled): when RHF must own the value, bridge field.value to
// \`value\` and onChange/onInput to field.onChange(e.target.value).
function ControlledForm() {
  const { control } = useForm({ defaultValues: { email: '' } });
  return (
    <Controller
      name="email"
      control={control}
      render={({ field }) => (
        <UTextField
          value={field.value}
          onChange={(e) => field.onChange((e.target as HTMLInputElement).value)}
        />
      )}
    />
  );
}
`;var v=`import { UTypeahead, UChipField } from '@universal-material/react';

// UTypeahead emits \`onSelected\` and UChipField emits \`onRemove\` as CustomEvents.
// The payload lives on e.detail (the VALUE itself still comes from e.target.value).
<UTypeahead onSelected={(e) => console.log(e.detail)} />
<UChipField onRemove={(e) => console.log(e.detail)} />

// The EventName helper is re-exported for typing your own bespoke listeners:
import type { EventName } from '@universal-material/react';
`;var f=`// Custom elements are client-only \u2014 they call attachInternals() in their
// constructor, which throws during server rendering. Render the wrappers from a
// client component:
'use client';
import { UTextField } from '@universal-material/react';

// If ElementInternals still throws during SSR (some runtimes evaluate the
// constructor eagerly), defer the wrapper to the client with next/dynamic:
import dynamic from 'next/dynamic';
const UTextFieldClient = dynamic(
  () => import('@universal-material/react').then((m) => m.UTextField),
  { ssr: false },
);
`;var H=()=>({framework:"react"}),J=(()=>{let r=class r{constructor(){this.installHtml=p,this.importHtml=E,this.controlledHtml=h,this.uncontrolledHtml=S,this.reactHookFormHtml=g,this.bespokeEventsHtml=v,this.ssrHtml=f}};r.\u0275fac=function(o){return new(o||r)},r.\u0275cmp=d({type:r,selectors:[["docs-react"]],decls:323,vars:25,consts:[["kind","foundation","title","Using with React"],["href","https://lit.dev/docs/frameworks/react/","target","_blank","rel","noopener"],["sectionTitle","Install",3,"renderExample","html","language"],["sectionTitle","Import the wrappers",3,"renderExample","html","language"],["sectionTitle","Controlled usage",3,"renderExample","html","stackblitz","language"],[1,"u-table"],["sectionTitle","Uncontrolled usage (FormData)",3,"renderExample","html","language"],["sectionTitle","react-hook-form",3,"renderExample","html","language"],["sectionTitle","Bespoke events",3,"renderExample","html","language"],["sectionTitle","Next.js / SSR",3,"renderExample","html","language"]],template:function(o,a){o&1&&(n(0,"docs-title",0)(1,"code"),e(2,"@universal-material/react"),t(),e(3," ships one typed wrapper per "),n(4,"code"),e(5,"<u-*>"),t(),e(6," element ("),n(7,"code"),e(8,"UButton"),t(),e(9,", "),n(10,"code"),e(11,"USelect"),t(),e(12,", "),n(13,"code"),e(14,"UTextField"),t(),e(15,", "),n(16,"code"),e(17,"UCheckbox"),t(),e(18,", \u2026), generated with "),n(19,"a",1),e(20,"@lit/react"),t(),e(21,"'s "),n(22,"code"),e(23,"createComponent"),t(),e(24,". The wrappers set known props as DOM properties (so the IDL setters and form participation work), wire the elements' events as typed "),n(25,"code"),e(26,"on*"),t(),e(27,` handlers, and work on React 17, 18 and 19.
`),t(),n(28,"docs-example",2)(29,"code"),e(30,"@universal-material/web"),t(),e(31," and "),n(32,"code"),e(33,"react"),t(),e(34,"/"),n(35,"code"),e(36,"react-dom"),t(),e(37," are "),n(38,"strong"),e(39,"peer dependencies"),t(),e(40,` \u2014 install them alongside the wrapper package.
`),t(),n(41,"docs-example",3),e(42," Importing anything from "),n(43,"code"),e(44,"@universal-material/react"),t(),e(45," also imports "),n(46,"code"),e(47,"@universal-material/web"),t(),e(48," once for its side effect, which registers every "),n(49,"code"),e(50,"<u-*>"),t(),e(51,` custom element \u2014 so you do not need a separate registration import.
`),t(),n(52,"docs-example",4),e(53," The value goes "),n(54,"strong"),e(55,"in"),t(),e(56," as a DOM property ("),n(57,"code"),e(58,"value"),t(),e(59," / "),n(60,"code"),e(61,"checked"),t(),e(62,") and comes "),n(63,"strong"),e(64,"out"),t(),e(65," by listening to "),n(66,"code"),e(67,"input"),t(),e(68," (live) / "),n(69,"code"),e(70,"change"),t(),e(71," (committed) and reading "),n(72,"code"),e(73,"e.target.value"),t(),e(74," (or "),n(75,"code"),e(76,"e.target.checked"),t(),e(77,"). The per-element contract: "),n(78,"table",5)(79,"thead")(80,"tr")(81,"th"),e(82,"Component(s)"),t(),n(83,"th"),e(84,"Two-way prop"),t(),n(85,"th"),e(86,"Events to map"),t(),n(87,"th"),e(88,"Read value from"),t()()(),n(89,"tbody")(90,"tr")(91,"td")(92,"code"),e(93,"UTextField"),t(),e(94,", "),n(95,"code"),e(96,"UTextArea"),t(),e(97,", "),n(98,"code"),e(99,"USearch"),t()(),n(100,"td")(101,"code"),e(102,"value: string"),t()(),n(103,"td")(104,"code"),e(105,"onInput"),t(),e(106," + "),n(107,"code"),e(108,"onChange"),t()(),n(109,"td")(110,"code"),e(111,"e.target.value"),t()()(),n(112,"tr")(113,"td")(114,"code"),e(115,"UDatepicker"),t(),e(116,", "),n(117,"code"),e(118,"URangeDatepicker"),t()(),n(119,"td")(120,"code"),e(121,"value: string"),t()(),n(122,"td")(123,"code"),e(124,"onInput"),t(),e(125," + "),n(126,"code"),e(127,"onChange"),t()(),n(128,"td")(129,"code"),e(130,"e.target.value"),t()()(),n(131,"tr")(132,"td")(133,"code"),e(134,"USelect"),t()(),n(135,"td")(136,"code"),e(137,"value: string"),t(),e(138," (+ "),n(139,"code"),e(140,"selectedIndex"),t(),e(141,")"),t(),n(142,"td")(143,"code"),e(144,"onInput"),t(),e(145," + "),n(146,"code"),e(147,"onChange"),t()(),n(148,"td")(149,"code"),e(150,"e.target.value"),t(),e(151," (IDL prop only \u2014 no "),n(152,"code"),e(153,"value"),t(),e(154," attribute)"),t()(),n(155,"tr")(156,"td")(157,"code"),e(158,"UCheckbox"),t(),e(159,", "),n(160,"code"),e(161,"URadio"),t(),e(162,", "),n(163,"code"),e(164,"USwitch"),t(),e(165," (+ "),n(166,"code"),e(167,"*ListItem"),t(),e(168,")"),t(),n(169,"td")(170,"code"),e(171,"checked: boolean"),t()(),n(172,"td")(173,"code"),e(174,"onChange"),t()(),n(175,"td")(176,"code"),e(177,"e.target.checked"),t()()(),n(178,"tr")(179,"td")(180,"code"),e(181,"USlider"),t()(),n(182,"td")(183,"code"),e(184,"value: number"),t(),e(185," or "),n(186,"code"),e(187,"valueStart"),t(),e(188,"/"),n(189,"code"),e(190,"valueEnd"),t()(),n(191,"td")(192,"code"),e(193,"onInput"),t(),e(194," + "),n(195,"code"),e(196,"onChange"),t()(),n(197,"td")(198,"code"),e(199,"e.target.value"),t()()(),n(200,"tr")(201,"td")(202,"code"),e(203,"UChipField"),t()(),n(204,"td")(205,"code"),e(206,"value: any[]"),t()(),n(207,"td")(208,"code"),e(209,"onChange"),t(),e(210," + "),n(211,"code"),e(212,"onRemove"),t(),e(213," ("),n(214,"code"),e(215,"CustomEvent"),t(),e(216,")"),t(),n(217,"td")(218,"code"),e(219,"e.target.value"),t()()(),n(220,"tr")(221,"td")(222,"code"),e(223,"UTypeahead"),t()(),n(224,"td")(225,"code"),e(226,"value: any"),t()(),n(227,"td")(228,"code"),e(229,"onInput"),t(),e(230," + "),n(231,"code"),e(232,"onChange"),t(),e(233," + "),n(234,"code"),e(235,"onSelected"),t(),e(236," ("),n(237,"code"),e(238,"CustomEvent"),t(),e(239,")"),t(),n(240,"td")(241,"code"),e(242,"e.target.value"),t()()()()(),e(243," Selection controls are not text inputs: bind "),n(244,"code"),e(245,"checked"),t(),e(246,", listen on "),n(247,"code"),e(248,"onChange"),t(),e(249,", and read "),n(250,"code"),e(251,"e.target.checked"),t(),e(252,`.
`),t(),n(253,"docs-example",6),e(254," Because every input is a Form-Associated Custom Element, native "),n(255,"code"),e(256,"<form>"),t(),e(257," / "),n(258,"code"),e(259,"FormData"),t(),e(260," submission and constraint validation are free. Give each element a "),n(261,"code"),e(262,"name"),t(),e(263,`, read it on submit, and keep zero React state \u2014 the simplest path.
`),t(),n(264,"docs-example",7),e(265," Prefer "),n(266,"code"),e(267,"register"),t(),e(268," (uncontrolled) \u2014 the FACE value is already on the form. Use "),n(269,"code"),e(270,"Controller"),t(),e(271," when RHF must own the value, bridging "),n(272,"code"),e(273,"field.value"),t(),e(274," \u2192 "),n(275,"code"),e(276,"value"),t(),e(277," and "),n(278,"code"),e(279,"onChange"),t(),e(280,"/"),n(281,"code"),e(282,"onInput"),t(),e(283," \u2192 "),n(284,"code"),e(285,"field.onChange(e.target.value)"),t(),e(286,`.
`),t(),n(287,"docs-example",8)(288,"code"),e(289,"UTypeahead"),t(),e(290,"'s "),n(291,"code"),e(292,"onSelected"),t(),e(293," and "),n(294,"code"),e(295,"UChipField"),t(),e(296,"'s "),n(297,"code"),e(298,"onRemove"),t(),e(299," are "),n(300,"code"),e(301,"CustomEvent"),t(),e(302,"s \u2014 read the payload from "),n(303,"code"),e(304,"e.detail"),t(),e(305," (the value itself still comes from "),n(306,"code"),e(307,"e.target.value"),t(),e(308,`).
`),t(),n(309,"docs-example",9),e(310," Custom elements are client-only \u2014 they call "),n(311,"code"),e(312,"attachInternals()"),t(),e(313," in their constructor, which throws during server rendering. Render the wrappers from a "),n(314,"code"),e(315,"'use client'"),t(),e(316," component, and fall back to "),n(317,"code"),e(318,"next/dynamic"),t(),e(319," with "),n(320,"code"),e(321),t(),e(322,` if the constructor is evaluated eagerly.
`),t()),o&2&&(i(28),l("renderExample",!1)("html",a.installHtml)("language","shell"),i(13),l("renderExample",!1)("html",a.importHtml)("language","typescript"),i(11),l("renderExample",!1)("html",a.controlledHtml)("stackblitz",s(24,H))("language","typescript"),i(201),l("renderExample",!1)("html",a.uncontrolledHtml)("language","typescript"),i(11),l("renderExample",!1)("html",a.reactHookFormHtml)("language","typescript"),i(23),l("renderExample",!1)("html",a.bespokeEventsHtml)("language","typescript"),i(22),l("renderExample",!1)("html",a.ssrHtml)("language","typescript"),i(12),c("","{"," ssr: false ","}"))},dependencies:[u,x],styles:["[_nghost-%COMP%]{display:block}"]});let m=r;return m})();export{J as ReactComponent};
