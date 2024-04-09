import { HTMLTemplateResult, LitElement } from 'lit';
export declare class Checkbox extends LitElement {
    static styles: import("lit").CSSResult[];
    private readonly ripple;
    private readonly assignedInputs;
    private input;
    render(): HTMLTemplateResult;
    private handleSlotChange;
    private handleInputChange;
}
declare global {
    interface HTMLElementTagNameMap {
        'u-checkbox': Checkbox;
    }
}
//# sourceMappingURL=checkbox.d.ts.map