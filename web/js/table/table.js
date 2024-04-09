import { html, LitElement } from 'lit';
import './table-head';
import './table-body';
import './table-row';
import './table-cell';
import './table-header-cell';
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