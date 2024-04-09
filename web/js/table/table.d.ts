import { HTMLTemplateResult, LitElement } from 'lit';
import './table-head';
import './table-body';
import './table-row';
import './table-cell';
import './table-header-cell';
export declare class Table extends LitElement {
    static styles: import("lit").CSSResult[];
    protected render(): HTMLTemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'u-table': Table;
    }
}
//# sourceMappingURL=table.d.ts.map