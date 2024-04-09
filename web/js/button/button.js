var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, nothing } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { ButtonBase } from './button-base';
import { styles as buttonBaseStyles } from './button-base.styles';
import { styles } from './button.styles';
import '../ripple/ripple';
let Button = class Button extends ButtonBase {
    constructor() {
        super(...arguments);
        /**
         * The Button variant to render.
         */
        this.variant = 'filled';
        this.trailingIcon = false;
        /**
         * Whether the button has icon or not
         *
         * _Note:_ Readonly
         */
        this.hasIcon = false;
    }
    renderContent() {
        const icon = html `
      <slot
        name="icon"
        aria-hidden="true"
        @slotchange="${this.handleSlotChange}"></slot>`;
        return html `
      ${this.trailingIcon ? nothing : icon}
      <span><slot></slot></span>
      ${this.trailingIcon ? icon : nothing}
    `;
    }
    handleSlotChange() {
        this.hasIcon = this.assignedIcons.length > 0;
    }
};
Button.styles = [buttonBaseStyles, styles];
__decorate([
    property({ reflect: true })
], Button.prototype, "variant", void 0);
__decorate([
    property({ type: Boolean, attribute: 'trailing-icon', reflect: true })
], Button.prototype, "trailingIcon", void 0);
__decorate([
    property({ type: Boolean, attribute: 'has-icon', reflect: true })
], Button.prototype, "hasIcon", void 0);
__decorate([
    queryAssignedElements({ slot: 'icon', flatten: true })
], Button.prototype, "assignedIcons", void 0);
Button = __decorate([
    customElement('u-button')
], Button);
export { Button };
//# sourceMappingURL=button.js.map