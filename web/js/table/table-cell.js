var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles as baseStyles } from '../shared/base.styles';
import { styles } from './table-cell.styles';
let TableCell = class TableCell extends LitElement {
    render() {
        return html `<slot></slot>`;
    }
};
TableCell.styles = [baseStyles, styles];
TableCell = __decorate([
    customElement('u-td')
], TableCell);
export { TableCell };
//# sourceMappingURL=table-cell.js.map