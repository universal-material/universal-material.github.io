var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles as baseStyles } from '../shared/base.styles';
import { styles } from './card-content.styles';
let CardContent = class CardContent extends LitElement {
    constructor() {
        super(...arguments);
        this.hasContent = false;
    }
    render() {
        return html `
      <slot @slotchange="${this.handleSlotChange}"></slot>`;
    }
    handleSlotChange(e) {
        const slot = e.target;
        this.hasContent = slot.assignedElements({ flatten: true }).length > 0;
        if (this.hasContent) {
            return;
        }
        const nodes = slot.assignedNodes({ flatten: true });
        for (const node of nodes) {
            if (node.nodeValue?.trim()) {
                this.hasContent = true;
                return;
            }
        }
        this.hasContent = false;
    }
};
CardContent.styles = [baseStyles, styles];
__decorate([
    property({ type: Boolean, attribute: 'has-content', reflect: true })
], CardContent.prototype, "hasContent", void 0);
CardContent = __decorate([
    customElement('u-card-content')
], CardContent);
export { CardContent };
//# sourceMappingURL=card-content.js.map