var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './button-set.styles';
let ButtonSet = class ButtonSet extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Set the alignment of the buttons at the `start`, `center` or at the `end`.
         */
        this.align = 'end';
        /**
         * Whether ot not render the buttons stacked
         */
        this.stack = false;
    }
    render() {
        return html `
      <slot></slot>`;
    }
};
ButtonSet.styles = styles;
__decorate([
    property({ reflect: true })
], ButtonSet.prototype, "align", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], ButtonSet.prototype, "stack", void 0);
ButtonSet = __decorate([
    customElement('u-button-set')
], ButtonSet);
export { ButtonSet };
//# sourceMappingURL=button-set.js.map