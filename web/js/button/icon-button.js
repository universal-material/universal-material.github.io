var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import '../ripple/ripple.js';
import { ButtonBase } from './button-base';
import { styles as buttonBaseStyles } from './button-base.styles';
import { styles } from './icon-button.styles';
let IconButton = class IconButton extends ButtonBase {
    constructor() {
        super(...arguments);
        this.variant = 'standard';
        /**
         * When true, the button will toggle between selected and unselected
         * states
         */
        this.toggle = false;
        this.hasSelectionIcon = false;
        /**
         * Sets the selected state. When false, displays the default icon. When true,
         * displays the selected icon, or the default icon If no `slot="selected"`
         * icon is provided.
         */
        this.selected = false;
        /**
         * The `aria-label` of the button when the button is toggleable and selected.
         */
        this.ariaLabelSelected = '';
    }
    renderContent() {
        return html `
      <span class="icon" aria-hidden="true"><slot></slot></span>
      <span class="icon icon-selected" aria-hidden="true">
        <slot name="selected" @slotchange="${this.handleSlotChange}"></slot>
      </span>
    `;
    }
    handleClick(_) {
        if (this.toggle) {
            this.selected = !this.selected;
        }
    }
    getAriaLabel() {
        return this.selected
            ? this.ariaLabelSelected || super.getAriaLabel()
            : super.getAriaLabel();
    }
    handleSlotChange() {
        this.hasSelectionIcon = this.selectedIcons.length > 0;
    }
};
IconButton.styles = [buttonBaseStyles, styles];
__decorate([
    property({ reflect: true })
], IconButton.prototype, "variant", void 0);
__decorate([
    property({ type: Boolean })
], IconButton.prototype, "toggle", void 0);
__decorate([
    property({ type: Boolean, attribute: 'has-selection-icon', reflect: true })
], IconButton.prototype, "hasSelectionIcon", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], IconButton.prototype, "selected", void 0);
__decorate([
    property({ attribute: 'aria-label-selected' })
], IconButton.prototype, "ariaLabelSelected", void 0);
__decorate([
    queryAssignedElements({ slot: 'selected', flatten: true })
], IconButton.prototype, "selectedIcons", void 0);
IconButton = __decorate([
    customElement('u-icon-button')
], IconButton);
export { IconButton };
//# sourceMappingURL=icon-button.js.map