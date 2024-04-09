import { HTMLTemplateResult, LitElement } from 'lit';
import './card-content.js';
import './card-media.js';
import '../elevation/elevation.js';
export declare class Card extends LitElement {
    static styles: import("lit").CSSResult[];
    /**
     * The Card variant to render.
     */
    variant: 'filled' | 'elevated' | 'outlined';
    render(): HTMLTemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'u-card': Card;
    }
}
//# sourceMappingURL=card.d.ts.map