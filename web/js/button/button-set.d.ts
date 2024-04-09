import { HTMLTemplateResult, LitElement } from 'lit';
export declare class ButtonSet extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * Set the alignment of the buttons at the `start`, `center` or at the `end`.
     */
    align: 'start' | 'center' | 'end';
    /**
     * Whether ot not render the buttons stacked
     */
    stack: boolean;
    render(): HTMLTemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'u-button-set': ButtonSet;
    }
}
//# sourceMappingURL=button-set.d.ts.map