import{b as A,c as N,d as q,e as P,f as W,g as L,m as F}from"./chunk-WSYNMTQE.js";import{a as G}from"./chunk-ZQF2KFMQ.js";import{a as U}from"./chunk-VLPIBHPO.js";import{c as O}from"./chunk-JUHLOZQQ.js";import"./chunk-GRAK4QNI.js";import{a as w}from"./chunk-UJRNOXMF.js";import"./chunk-CEMGHJ4D.js";import"./chunk-GFTA4PL4.js";import"./chunk-CSQ3XL6T.js";import"./chunk-A2AONSIM.js";import"./chunk-7ANKUTMV.js";import{$b as B,Bb as H,Ib as d,Lb as e,Mb as R,Na as m,Pb as x,Qb as _,Rb as v,_ as k,bb as y,ea as l,fa as a,lb as T,mb as V,qb as f,rb as t,sb as i,tb as b,yb as M,zb as u}from"./chunk-QUVZ4KUC.js";import{e as S,f as E,g as D,k as C}from"./chunk-IPU5OYZE.js";var I=`<u-button (click)="dialog.show()">Open dialog</u-button>

<u-dialog #dialog>
  <span
    class="material-symbols-outlined"
    slot="icon"
    >mobile_friendly</span
  >
  <span slot="headline">Update available</span>
  <span
    >A new version of the app is ready. Restart now to apply the update \u2014 your work will be saved automatically.</span
  >
  <u-button
    slot="actions"
    variant="text"
    (click)="dialog.close('ok')"
    >Restart</u-button
  >
  <u-button
    slot="actions"
    variant="text"
    (click)="dialog.close('cancel')"
    >Later</u-button
  >
</u-dialog>
`;var z=`<u-button (click)="askConfirm()">Delete item</u-button>

<script type="module">
  import { Dialog } from "@universal-material/web";

  async function askConfirm() {
    const ok = await Dialog.confirm("This action cannot be undone. Continue?")
      .headline("Delete item")
      .confirmButton({ label: "Delete", variant: "filled", color: "error" })
      .cancelButton({ label: "Keep it" })
      .show();

    if (ok) {
      // ...perform deletion
    }
  }
<\/script>
`;var K=`<u-button (click)="formDialog.show()">Rename file</u-button>

<u-dialog #formDialog>
  <span slot="headline">Rename file</span>
  <form
    id="rename-form"
    method="dialog"
  >
    <u-text-field
      name="filename"
      label="File name"
      autofocus
    ></u-text-field>
  </form>
  <u-button
    slot="actions"
    variant="text"
    form="rename-form"
    value="save"
    >Save</u-button
  >
  <u-button
    slot="actions"
    variant="text"
    form="rename-form"
    value="cancel"
    >Cancel</u-button
  >
</u-dialog>
`;var Y=`<u-button (click)="showMessage()">Show message</u-button>

<script type="module">
  import { Dialog } from "@universal-material/web";

  function showMessage() {
    Dialog.message("Your changes have been saved.")
      .headline("Saved")
      .acknowledgeButton({ label: "Got it", variant: "filled" })
      .show();
  }
<\/script>
`;var j=`<u-button (click)="scrollDialog.show()">Open long dialog</u-button>

<u-dialog #scrollDialog>
  <span slot="headline">Terms of service</span>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna.</p>
  <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
  <p>Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui.</p>
  <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  <p>Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare.</p>
  <p>Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor.</p>
  <p>Curabitur blandit tempus porttitor. Sed posuere consectetur est at lobortis.</p>
  <p>Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna.</p>
  <u-button
    slot="actions"
    variant="text"
    (click)="scrollDialog.close('ok')"
    >Accept</u-button
  >
  <u-button
    slot="actions"
    variant="text"
    (click)="scrollDialog.close()"
    >Decline</u-button
  >
</u-dialog>
`;function te(p,g){if(p&1&&(t(0,"p"),e(1," Result: "),t(2,"strong"),e(3),i()()),p&2){let c=H();m(3),R(c.confirmResult?"deleted":"kept")}}var we=(()=>{var g;let c=class c{constructor(){E(this,g);this.basicHtml=I,this.confirmHtml=z,this.formHtml=K,this.messageHtml=Y,this.scrollableHtml=j,this.messageText="Your changes have been saved.",this.confirmText="This action cannot be undone. Continue?",this.confirmResult=null,D(this,g,k(B))}showMessage(){w.message(this.messageText).headline("Saved").acknowledgeButton({label:"Got it",variant:"filled"}).show()}askConfirm(){return C(this,null,function*(){this.confirmResult=yield w.confirm(this.confirmText).headline("Delete item").confirmButton({label:"Delete",variant:"filled",color:"error"}).cancelButton({label:"Keep it"}).show(),S(this,g).detectChanges()})}};g=new WeakMap,c.\u0275fac=function(h){return new(h||c)},c.\u0275cmp=y({type:c,selectors:[["docs-dialogs"]],decls:132,vars:13,consts:[["basicDialog",""],["formDialog",""],["scrollDialog",""],["title","Dialogs","tag","u-dialog"],["sectionTitle","Usage",3,"renderExample","html"],["example",""],[3,"click"],["slot","icon",1,"material-symbols-outlined"],["slot","headline"],["slot","actions","variant","text",3,"click"],["sectionTitle","With a form",3,"renderExample","html"],["id","rename-form","method","dialog"],["name","filename","label","File name","autofocus",""],["slot","actions","variant","text","form","rename-form","value","save"],["slot","actions","variant","text","form","rename-form","value","cancel"],["sectionTitle","Scrollable content",3,"renderExample","html"],["sectionTitle","Imperative \u2014 message",3,"renderExample","html"],["example","",1,"u-column"],["label","Message","ngDefaultControl","",3,"ngModelChange","ngModel"],["sectionTitle","Imperative \u2014 confirm",3,"renderExample","html"],["label","Prompt","ngDefaultControl","",3,"ngModelChange","ngModel"],["key","dialog"]],template:function(h,o){if(h&1){let r=M();t(0,"docs-title",3),e(1,"Modal surfaces that prompt the user with information or actions that interrupt the current task. Built on top of the native "),t(2,"code"),e(3,"<dialog>"),i(),e(4," element \u2014 open with "),t(5,"code"),e(6,".show()"),i(),e(7,", close with "),t(8,"code"),e(9,".close(returnValue?)"),i(),e(10,", and the closed-by-scrim/Escape case fires a "),t(11,"code"),e(12,"cancel"),i(),e(13," event you can prevent."),i(),t(14,"docs-example",4),e(15,"Use the "),t(16,"code"),e(17,"icon"),i(),e(18,", "),t(19,"code"),e(20,"headline"),i(),e(21,", default and "),t(22,"code"),e(23,"actions"),i(),e(24," slots. Each slot is optional; the layout adapts to whatever you pass. "),t(25,"div",5)(26,"u-button",6),u("click",function(){l(r);let n=d(29);return a(n.show())}),e(27,"Open dialog"),i()(),t(28,"u-dialog",null,0)(30,"span",7),e(31,"mobile_friendly"),i(),t(32,"span",8),e(33,"Update available"),i(),t(34,"span"),e(35,"A new version of the app is ready. Restart now to apply the update \u2014 your work will be saved automatically."),i(),t(36,"u-button",9),u("click",function(){l(r);let n=d(29);return a(n.close("ok"))}),e(37,"Restart"),i(),t(38,"u-button",9),u("click",function(){l(r);let n=d(29);return a(n.close("cancel"))}),e(39,"Later"),i()()(),t(40,"docs-example",10),e(41,"Buttons with "),t(42,"code"),e(43,'form="id"'),i(),e(44," + "),t(45,"code"),e(46,'value="..."'),i(),e(47," submit the form inside the dialog. A "),t(48,"code"),e(49,'method="dialog"'),i(),e(50," form closes the dialog with the submitter's value as the return value. "),t(51,"div",5)(52,"u-button",6),u("click",function(){l(r);let n=d(55);return a(n.show())}),e(53,"Rename file"),i()(),t(54,"u-dialog",null,1)(56,"span",8),e(57,"Rename file"),i(),t(58,"form",11),b(59,"u-text-field",12),i(),t(60,"u-button",13),e(61,"Save"),i(),t(62,"u-button",14),e(63,"Cancel"),i()()(),t(64,"docs-example",15),e(65,"When the body overflows, the dialog draws subtle dividers above the headline and below the actions so they stay visually anchored while the content scrolls. "),t(66,"div",5)(67,"u-button",6),u("click",function(){l(r);let n=d(70);return a(n.show())}),e(68,"Open long dialog"),i()(),t(69,"u-dialog",null,2)(71,"span",8),e(72,"Terms of service"),i(),t(73,"p"),e(74," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. "),i(),t(75,"p"),e(76," Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. "),i(),t(77,"p"),e(78," Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Cum sociis natoque penatibus et magnis dis parturient montes. "),i(),t(79,"p"),e(80," Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. "),i(),t(81,"p"),e(82,"Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo."),i(),t(83,"p"),e(84,"Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus."),i(),t(85,"p"),e(86,"Curabitur blandit tempus porttitor. Sed posuere consectetur est at lobortis."),i(),t(87,"p"),e(88,"Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna."),i(),t(89,"u-button",9),u("click",function(){l(r);let n=d(70);return a(n.close("ok"))}),e(90,"Accept"),i(),t(91,"u-button",9),u("click",function(){l(r);let n=d(70);return a(n.close())}),e(92,"Decline"),i()()(),t(93,"docs-example",16)(94,"code"),e(95,"Dialog.message(text)"),i(),e(96," returns a builder that mounts a single-button alert dialog and removes it from the DOM on close. Chain "),t(97,"code"),e(98,".headline(...)"),i(),e(99," and "),t(100,"code"),e(101,".acknowledgeButton(...)"),i(),e(102," to customize. "),t(103,"div",17)(104,"u-text-field",18),v("ngModelChange",function(n){return l(r),_(o.messageText,n)||(o.messageText=n),a(n)}),i(),t(105,"u-button",6),u("click",function(){return l(r),a(o.showMessage())}),e(106,"Show message"),i()()(),t(107,"docs-example",19)(108,"code"),e(109,"Dialog.confirm(text).show()"),i(),e(110," returns a "),t(111,"code"),e(112,"Promise<boolean>"),i(),e(113," that resolves "),t(114,"code"),e(115,"true"),i(),e(116," on confirm or "),t(117,"code"),e(118,"false"),i(),e(119," on cancel/dismiss. Customize via "),t(120,"code"),e(121,".confirmButton(...)"),i(),e(122," and "),t(123,"code"),e(124,".cancelButton(...)"),i(),e(125,". "),t(126,"div",17)(127,"u-text-field",20),v("ngModelChange",function(n){return l(r),_(o.confirmText,n)||(o.confirmText=n),a(n)}),i(),t(128,"u-button",6),u("click",function(){return l(r),a(o.askConfirm())}),e(129,"Delete item"),i(),T(130,te,4,1,"p"),i()(),b(131,"docs-apis-table",21)}h&2&&(m(14),f("renderExample",!1)("html",o.basicHtml),m(26),f("renderExample",!1)("html",o.formHtml),m(24),f("renderExample",!1)("html",o.scrollableHtml),m(29),f("renderExample",!1)("html",o.messageHtml),m(11),x("ngModel",o.messageText),m(3),f("renderExample",!1)("html",o.confirmHtml),m(20),x("ngModel",o.confirmText),m(3),V(o.confirmResult!==null?130:-1))},dependencies:[F,L,A,N,q,W,P,G,U,O],encapsulation:2});let p=c;return p})();export{we as DialogsComponent};
