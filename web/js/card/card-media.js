var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles as baseStyles } from '../shared/base.styles';
import { styles } from './card-media.styles';
let CardMedia = class CardMedia extends LitElement {
    constructor() {
        super(...arguments);
        this.wide = false;
    }
    render() {
        return html `
      <slot></slot>`;
    }
};
CardMedia.styles = [baseStyles, styles];
__decorate([
    property({ type: Boolean, reflect: true })
], CardMedia.prototype, "wide", void 0);
CardMedia = __decorate([
    customElement('u-card-media')
], CardMedia);
export { CardMedia };
//# sourceMappingURL=card-media.js.map