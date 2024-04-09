import { HTMLTemplateResult, LitElement } from 'lit';
export declare class CardContent extends LitElement {
    static styles: import("lit").CSSResult[];
    hasContent: boolean;
    render(): HTMLTemplateResult;
    private handleSlotChange;
}
declare global {
    interface HTMLElementTagNameMap {
        'u-card-content': CardContent;
    }
}
//# sourceMappingURL=card-content.d.ts.map