import { HTMLTemplateResult, LitElement } from 'lit';
export declare class Ripple extends LitElement {
    static styles: import("lit").CSSResult;
    private isTouching;
    ariaHidden: string;
    disabled: boolean;
    private readonly rippleContainer;
    constructor();
    render(): HTMLTemplateResult;
    private attachEvents;
    private handleMouseDown;
    private handleTouchStart;
    private canCreateRipple;
    createRipple(releaseEventName?: string | null, targetX?: number | null, targetY?: number | null): () => void;
    private static _setElementSquareSizeAndCenter;
}
declare global {
    interface HTMLElementTagNameMap {
        'u-ripple': Ripple;
    }
}
//# sourceMappingURL=ripple.d.ts.map