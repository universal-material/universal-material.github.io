import { CSSResult, HTMLTemplateResult } from 'lit';
import { ButtonBase } from './button-base';
export declare class FabButton extends ButtonBase {
    static styles: CSSResult | CSSResult[];
    /**
     * The FAB color variant to render.
     */
    color: 'primary' | 'secondary' | 'tertiary' | 'surface' | 'branded';
    /**
     * The size of the FAB.
     */
    size: 'small' | 'medium' | 'large';
    /**
     * The text to display the FAB.
     */
    label: string | null;
    /**
     * Lowers the FAB's elevation.
     */
    lowered: boolean;
    get extended(): boolean;
    protected renderContent(): HTMLTemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'u-fab': FabButton;
    }
}
//# sourceMappingURL=fab.d.ts.map