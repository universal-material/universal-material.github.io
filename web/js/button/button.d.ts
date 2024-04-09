import { CSSResult, HTMLTemplateResult } from 'lit';
import { ButtonBase } from './button-base';
import '../ripple/ripple.js';
export declare class Button extends ButtonBase {
    static styles: CSSResult | CSSResult[];
    /**
     * The Button variant to render.
     */
    variant: string;
    trailingIcon: boolean;
    /**
     * Whether the button has icon or not
     *
     * _Note:_ Readonly
     */
    hasIcon: boolean;
    private readonly assignedIcons;
    protected renderContent(): HTMLTemplateResult;
    private handleSlotChange;
}
declare global {
    interface HTMLElementTagNameMap {
        'u-button': Button;
    }
}
//# sourceMappingURL=button.d.ts.map