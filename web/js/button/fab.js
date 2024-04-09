var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ButtonBase } from './button-base';
import { styles as buttonBaseStyles } from './button-base.styles';
import { styles } from './fab.styles';
let FabButton = class FabButton extends ButtonBase {
    constructor() {
        super(...arguments);
        /**
         * The FAB color variant to render.
         */
        this.color = 'primary';
        /**
         * The size of the FAB.
         */
        this.size = 'medium';
        /**
         * The text to display the FAB.
         */
        this.label = null;
        /**
         * Lowers the FAB's elevation.
         */
        this.lowered = false;
    }
    get extended() {
        return !!this.label;
    }
    renderContent() {
        const labelTag = html `<span>${this.label}</span>`;
        return html `
      <span class="icon" aria-hidden="true"><slot name="icon"></slot></span>
      ${this.label ? labelTag : nothing}
    `;
    }
};
FabButton.styles = [buttonBaseStyles, styles];
__decorate([
    property({ reflect: true })
], FabButton.prototype, "color", void 0);
__decorate([
    property({ reflect: true })
], FabButton.prototype, "size", void 0);
__decorate([
    property({ reflect: true })
], FabButton.prototype, "label", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], FabButton.prototype, "lowered", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], FabButton.prototype, "extended", null);
FabButton = __decorate([
    customElement('u-fab')
], FabButton);
export { FabButton };
//# sourceMappingURL=fab.js.map