var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _ButtonBase_elementInternals;
import { html, LitElement, nothing } from 'lit';
import { property, query } from 'lit/decorators.js';
import '../elevation/elevation';
import '../ripple/ripple';
export class ButtonBase extends LitElement {
    /**
     * The `<form>` element to associate the button with (its form owner). The value of this attribute must be the id of a `<form>` in the same document. (If this attribute is not set, the button is associated with its ancestor `<form>` element, if any.)
     * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#form
     */
    get form() {
        return __classPrivateFieldGet(this, _ButtonBase_elementInternals, "f").form;
    }
    constructor() {
        super();
        /**
         * Whether the button is disabled.
         */
        this.disabled = false;
        /**
         * The URL that the link button points to.
         */
        this.href = '';
        /**
         * Where to display the linked `href` URL for a link button. Common options
         * include `_blank` to open in a new tab.
         */
        this.target = '';
        this.type = 'submit';
        this.value = '';
        _ButtonBase_elementInternals.set(this, void 0);
        __classPrivateFieldSet(this, _ButtonBase_elementInternals, this.attachInternals(), "f");
    }
    render() {
        return this.href
            ? this.renderLink()
            : this.renderButton();
    }
    renderButton() {
        return html `
      <button
        id="button"
        class="button"
        ?disabled=${this.disabled}
        aria-label="${this.getAriaLabel()}"
        type="button">
        <u-ripple ?disabled=${this.disabled}></u-ripple>
        <u-elevation></u-elevation>
      </button>
      ${this.renderContent()}`;
    }
    renderLink() {
        return html `<a
      id="link"
      class="button"
      href=${this.disabled ? nothing : this.href}
      aria-disabled=${this.disabled || nothing}
      aria-label="${this.getAriaLabel()}"
      target=${this.target || nothing}>
      <u-elevation></u-elevation>
      <u-ripple ?disabled=${this.disabled}></u-ripple>
    </a>
    ${this.renderContent()}`;
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('click', this.innerHandleClick);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('click', this.innerHandleClick);
    }
    focus() {
        this.buttonElement?.focus();
    }
    blur() {
        this.buttonElement?.blur();
    }
    getAriaLabel() {
        return this.ariaLabel || nothing;
    }
    innerHandleClick(event) {
        if (this.disabled) {
            return;
        }
        if (event.detail === 0) {
            this.ripple.createRipple();
        }
        this.handleClick(event);
        if (this.type === 'button' || !!this.href) {
            return;
        }
        if (!this.form) {
            return;
        }
        __classPrivateFieldGet(this, _ButtonBase_elementInternals, "f").setFormValue(this.value);
        if (this.type === 'submit') {
            this.form.requestSubmit();
            return;
        }
        this.form.reset();
    }
    handleClick(_) {
    }
}
_ButtonBase_elementInternals = new WeakMap();
ButtonBase.formAssociated = true;
__decorate([
    property({ type: Boolean, reflect: true })
], ButtonBase.prototype, "disabled", void 0);
__decorate([
    property()
], ButtonBase.prototype, "href", void 0);
__decorate([
    property()
], ButtonBase.prototype, "target", void 0);
__decorate([
    property()
], ButtonBase.prototype, "type", void 0);
__decorate([
    property({ reflect: true })
], ButtonBase.prototype, "value", void 0);
__decorate([
    property()
], ButtonBase.prototype, "name", void 0);
__decorate([
    query('.button')
], ButtonBase.prototype, "buttonElement", void 0);
__decorate([
    query('u-ripple')
], ButtonBase.prototype, "ripple", void 0);
__decorate([
    property()
], ButtonBase.prototype, "form", null);
//# sourceMappingURL=button-base.js.map