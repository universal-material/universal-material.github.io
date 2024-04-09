var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles as baseStyles } from '../shared/base.styles';
import { styles } from './card.styles';
import './card-content';
import './card-media';
import '../elevation/elevation';
let Card = class Card extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * The Card variant to render.
         */
        this.variant = 'elevated';
    }
    render() {
        return html `
      <u-elevation></u-elevation>
      <slot name="before-content"></slot>
      <u-card-content>
        <slot></slot>
      </u-card-content>
      <slot name="after-content"></slot>`;
    }
};
Card.styles = [baseStyles, styles];
__decorate([
    property({ reflect: true })
], Card.prototype, "variant", void 0);
Card = __decorate([
    customElement('u-card')
], Card);
export { Card };
//# sourceMappingURL=card.js.map