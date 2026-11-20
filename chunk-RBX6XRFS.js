import{a as u}from"./chunk-VLPIBHPO.js";import{c}from"./chunk-JUHLOZQQ.js";import"./chunk-GRAK4QNI.js";import"./chunk-CSQ3XL6T.js";import"./chunk-A2AONSIM.js";import"./chunk-7ANKUTMV.js";import{Lb as e,Na as i,Tb as s,bb as d,qb as n,rb as t,sb as a}from"./chunk-QUVZ4KUC.js";import"./chunk-IPU5OYZE.js";var p=`<u-range-datepicker
  label="Stay"
  [formGroup]="stayForm"
>
  <input
    uStartDate
    formControlName="startDate"
  />
  <input
    uEndDate
    formControlName="endDate"
  />
</u-range-datepicker>
`;var x=`# Install the elements and the Angular wrapper together:
npm install @universal-material/web @universal-material/angular
`;var h=`import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UniversalMaterialModule } from '@universal-material/angular';
import '@universal-material/web'; // registers all <u-*> custom elements

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [FormsModule, UniversalMaterialModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './example.component.html',
})
export class ExampleComponent {
  agree = false;
  name = '';
  country = '';
}
`;var g=`<!-- Text fields, text areas and search bind a string value -->
<u-text-field label="Name" placeholder="Your full name" [(ngModel)]="name"></u-text-field>
<u-text-area variant="outlined" label="Bio" [(ngModel)]="bio"></u-text-area>
<u-search position="static" placeholder="Search" [(ngModel)]="query"></u-search>

<!-- Checkbox and switch bind a boolean -->
<label><u-checkbox [(ngModel)]="agree"></u-checkbox> Agree to terms</label>
<label><u-switch [(ngModel)]="notifications"></u-switch> Notifications</label>

<!-- Radios share a name and contribute their value to the group -->
<label><u-radio name="contact" [value]="'email'" [(ngModel)]="choice"></u-radio> Email</label>
<label><u-radio name="contact" [value]="'sms'" [(ngModel)]="choice"></u-radio> SMS</label>

<!-- Select binds the option value -->
<u-select label="Country" [(ngModel)]="country">
  <u-option value="br">Brazil</u-option>
  <u-option value="ca">Canada</u-option>
  <u-option value="us">United States</u-option>
</u-select>

<!-- Slider binds a number; datepicker binds an ISO string -->
<u-slider min="10" max="200" step="0.5" [(ngModel)]="amount"></u-slider>
<u-datepicker label="Date" placeholder="Choose a date" [(ngModel)]="date"></u-datepicker>

<!-- Chip field binds a string[]; typeahead binds its value -->
<u-chip-field label="Tags" [(ngModel)]="tags"></u-chip-field>

<u-text-field id="states-field" label="States"></u-text-field>
<u-typeahead target-id="states-field" [source]="states" [(ngModel)]="state"></u-typeahead>
`;var E=`// component.ts \u2014 the same CVAs power reactive forms via formControlName
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { UniversalMaterialModule } from '@universal-material/angular';
import '@universal-material/web';

@Component({
  selector: 'app-reactive-example',
  standalone: true,
  imports: [ReactiveFormsModule, UniversalMaterialModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './reactive-example.component.html',
})
export class ReactiveExampleComponent {
  form = new FormGroup({
    name: new FormControl(''),
    agree: new FormControl(false),
    country: new FormControl(''),
  });
}
`;var f=`<!-- reactive-example.component.html -->
<form [formGroup]="form">
  <u-text-field label="Name" formControlName="name"></u-text-field>

  <label><u-checkbox formControlName="agree"></u-checkbox> Agree to terms</label>

  <u-select label="Country" formControlName="country">
    <u-option value="br">Brazil</u-option>
    <u-option value="ca">Canada</u-option>
    <u-option value="us">United States</u-option>
  </u-select>
</form>
`;var T=()=>({framework:"angular"}),z=(()=>{let r=class r{constructor(){this.dateRangeHtml=p,this.installHtml=x,this.moduleHtml=h,this.ngModelHtml=g,this.reactiveHtml=E,this.reactiveTemplateHtml=f}};r.\u0275fac=function(o){return new(o||r)},r.\u0275cmp=d({type:r,selectors:[["docs-angular"]],decls:160,vars:23,consts:[["kind","foundation","title","Using with Angular"],["sectionTitle","Install",3,"renderExample","html","language"],["sectionTitle","Register the module",3,"renderExample","html","language"],["sectionTitle","Template-driven forms (ngModel)",3,"renderExample","html","stackblitz","language"],["sectionTitle","Reactive forms",3,"renderExample","html","language"],["sectionTitle","Reactive forms template",3,"renderExample","html","language"],["sectionTitle","Date range with two controls",3,"renderExample","html","language"],["sectionTitle","Notes",3,"renderExample","html","language"],["href","https://github.com/universal-material/universal-material-angular","target","_blank","rel","noopener"]],template:function(o,l){o&1&&(t(0,"docs-title",0),e(1," Angular consumes the "),t(2,"code"),e(3,"<u-*>"),a(),e(4," elements through the "),t(5,"code"),e(6,"@universal-material/angular"),a(),e(7," wrapper, which provides the "),t(8,"code"),e(9,"ControlValueAccessor"),a(),e(10,"s that make every form element work with "),t(11,"code"),e(12,"[(ngModel)]"),a(),e(13," and reactive forms. The raw elements also render in any Angular template once you allow custom tags with "),t(14,"code"),e(15,"CUSTOM_ELEMENTS_SCHEMA"),a(),e(16,`.
`),a(),t(17,"docs-example",1),e(18," Install the element library and the Angular wrapper side by side. "),t(19,"code"),e(20,"@universal-material/web"),a(),e(21," ships the custom elements; "),t(22,"code"),e(23,"@universal-material/angular"),a(),e(24,` adds the Angular form bindings.
`),a(),t(25,"docs-example",2),e(26," Import "),t(27,"code"),e(28,"UniversalMaterialModule"),a(),e(29," wherever you use the elements (a standalone component's "),t(30,"code"),e(31,"imports"),a(),e(32,", or a shared "),t(33,"code"),e(34,"NgModule"),a(),e(35,"), import "),t(36,"code"),e(37,"@universal-material/web"),a(),e(38," once for its side effect so the "),t(39,"code"),e(40,"<u-*>"),a(),e(41," tags are registered, and add "),t(42,"code"),e(43,"CUSTOM_ELEMENTS_SCHEMA"),a(),e(44," so Angular accepts the custom tags. Add "),t(45,"code"),e(46,"FormsModule"),a(),e(47," for "),t(48,"code"),e(49,"ngModel"),a(),e(50," or "),t(51,"code"),e(52,"ReactiveFormsModule"),a(),e(53,` for reactive forms.
`),a(),t(54,"docs-example",3),e(55," The wrapper registers a "),t(56,"code"),e(57,"ControlValueAccessor"),a(),e(58," for each form element, so "),t(59,"code"),e(60,"[(ngModel)]"),a(),e(61," binds them just like native controls: text fields, areas and search bind a "),t(62,"code"),e(63,"string"),a(),e(64,"; checkbox and switch bind a "),t(65,"code"),e(66,"boolean"),a(),e(67,"; radios contribute their "),t(68,"code"),e(69,"value"),a(),e(70," to the named group; "),t(71,"code"),e(72,"u-select"),a(),e(73," binds the option value; the slider binds a "),t(74,"code"),e(75,"number"),a(),e(76,"; the datepicker binds an ISO date string; the chip field binds a "),t(77,"code"),e(78,"string[]"),a(),e(79,`; and typeahead binds its current value.
`),a(),t(80,"docs-example",4),e(81," The same accessors power "),t(82,"code"),e(83,"ReactiveFormsModule"),a(),e(84,". Build a "),t(85,"code"),e(86,"FormGroup"),a(),e(87," and bind each element with "),t(88,"code"),e(89,"formControlName"),a(),e(90," \u2014 value, validation state and "),t(91,"code"),e(92,"disabled"),a(),e(93,` all flow through the control.
`),a(),t(94,"docs-example",5),e(95," The template binds each "),t(96,"code"),e(97,"<u-*>"),a(),e(98," element with "),t(99,"code"),e(100,"formControlName"),a(),e(101," inside the "),t(102,"code"),e(103,"[formGroup]"),a(),e(104,`.
`),a(),t(105,"docs-example",6),e(106," Besides binding the whole "),t(107,"code"),e(108,"u-range-datepicker"),a(),e(109," value ("),t(110,"code"),e(111,"YYYY-MM-DD - YYYY-MM-DD"),a(),e(112,") to a single control, each end of the range can bind to its own control \u2014 mirroring "),t(113,"code"),e(114,"mat-date-range-input"),a(),e(115," with "),t(116,"code"),e(117,"matStartDate"),a(),e(118,"/"),t(119,"code"),e(120,"matEndDate"),a(),e(121,". Place two hidden carrier inputs with "),t(122,"code"),e(123,"uStartDate"),a(),e(124," and "),t(125,"code"),e(126,"uEndDate"),a(),e(127,` inside the element; each binds an ISO date string. The element is only disabled when both controls are disabled.
`),a(),t(128,"docs-example",7),e(129," These snippets are distilled from the standalone Angular demo ("),t(130,"code"),e(131,"checkbox"),a(),e(132,", "),t(133,"code"),e(134,"radio"),a(),e(135,", "),t(136,"code"),e(137,"select"),a(),e(138,", "),t(139,"code"),e(140,"text-field"),a(),e(141,", "),t(142,"code"),e(143,"search"),a(),e(144,", "),t(145,"code"),e(146,"slider"),a(),e(147,", "),t(148,"code"),e(149,"datepicker"),a(),e(150,", "),t(151,"code"),e(152,"chip-field"),a(),e(153," and "),t(154,"code"),e(155,"typeahead"),a(),e(156," example pages) that the wrapper package was developed against. For the full set of components and live examples, see the "),t(157,"a",8),e(158,"universal-material-angular"),a(),e(159,` repository on GitHub.
`),a()),o&2&&(i(17),n("renderExample",!1)("html",l.installHtml)("language","shell"),i(8),n("renderExample",!1)("html",l.moduleHtml)("language","typescript"),i(29),n("renderExample",!1)("html",l.ngModelHtml)("stackblitz",s(22,T))("language","html"),i(26),n("renderExample",!1)("html",l.reactiveHtml)("language","typescript"),i(14),n("renderExample",!1)("html",l.reactiveTemplateHtml)("language","html"),i(11),n("renderExample",!1)("html",l.dateRangeHtml)("language","html"),i(23),n("renderExample",!1)("html",l.installHtml)("language","shell"))},dependencies:[u,c],styles:["[_nghost-%COMP%]{display:block}"]});let m=r;return m})();export{z as AngularComponent};
