var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './divider.styles';
let Divider = class Divider extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * When true, remove the margin of the divider
         */
        this.noMargin = false;
    }
};
Divider.styles = styles;
__decorate([
    property({ type: Boolean, attribute: 'no-margin', reflect: true })
], Divider.prototype, "noMargin", void 0);
Divider = __decorate([
    customElement('u-divider')
], Divider);
export { Divider };
//# sourceMappingURL=divider.js.map