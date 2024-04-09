import { CSSResult, HTMLTemplateResult, nothing } from 'lit';
import '../ripple/ripple';
import { ButtonBase } from './button-base';
export declare class IconButton extends ButtonBase {
    static styles: CSSResult | CSSResult[];
    variant: 'standard' | 'filled' | 'tonal' | 'outlined';
    /**
     * When true, the button will toggle between selected and unselected
     * states
     */
    toggle: boolean;
    hasSelectionIcon: boolean;
    /**
     * Sets the selected state. When false, displays the default icon. When true,
     * displays the selected icon, or the default icon If no `slot="selected"`
     * icon is provided.
     */
    selected: boolean;
    /**
     * The `aria-label` of the button when the button is toggleable and selected.
     */
    ariaLabelSelected: string;
    private readonly selectedIcons;
    protected renderContent(): HTMLTemplateResult;
    protected handleClick(_: UIEvent): void;
    getAriaLabel(): string | null | typeof nothing;
    private handleSlotChange;
}
declare global {
    interface HTMLElementTagNameMap {
        'u-icon-button': IconButton;
    }
}
//# sourceMappingURL=icon-button.d.ts.map