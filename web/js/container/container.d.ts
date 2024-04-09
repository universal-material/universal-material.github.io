import { HTMLTemplateResult, LitElement } from 'lit';
type SpacingSizes = 'none' | 'small' | 'medium ' | 'large' | 'extra-large';
export declare class container extends LitElement {
    static styles: import("lit").CSSResult;
    margin: SpacingSizes | undefined;
    render(): HTMLTemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'u-container': container;
    }
}
export {};
//# sourceMappingURL=container.d.ts.map