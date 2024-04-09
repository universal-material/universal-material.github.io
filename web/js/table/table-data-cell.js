var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseStyles } from '../shared/base-styles';
let TableDataCell = class TableDataCell extends LitElement {
    render() {
        return html `<slot></slot>`;
    }
};
TableDataCell.styles = [
    BaseStyles.styles,
    css `
      :host {
        display: table-cell;
        padding: var(--u-td-padding, 16px);
        font-size: var(--u-td-font-size, .875rem);
        font-weight: var(--u-td-font-weight, var(--u-font-weight-medium, 500));
        text-align: start;
      }
  `
];
TableDataCell = __decorate([
    customElement('u-td')
], TableDataCell);
export { TableDataCell };
//# sourceMappingURL=table-data-cell.js.map