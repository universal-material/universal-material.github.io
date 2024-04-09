import { html, LitElement } from 'lit';
import './table-head.js';
import './table-body.js';
import './table-row.js';
import './table-cell.js';
import './table-header-cell.js';
import { styles as baseStyles } from '../shared/base.styles';
import { styles } from './table.styles';
export class Table extends LitElement {
    render() {
        return html `
      <slot name="header"></slot>
      <slot></slot>
`;
    }
}
Table.styles = [baseStyles, styles];
customElements.define('u-table', Table);
//# sourceMappingURL=table.js.map