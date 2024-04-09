import { HTMLTemplateResult, LitElement } from 'lit';
import './table-head.js';
import './table-body.js';
import './table-row.js';
import './table-cell.js';
import './table-header-cell.js';
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