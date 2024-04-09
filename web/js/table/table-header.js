var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseStyles } from '../shared/base-styles';
let TableHeader = class TableHeader extends LitElement {
    render() {
        return html `<slot></slot>`;
    }
};
TableHeader.styles = [
    BaseStyles.styles,
    css `
      :host {
        display: table-header-group;
      }
  `
];
TableHeader = __decorate([
    customElement('u-thead')
], TableHeader);
export { TableHeader };
//# sourceMappingURL=table-header.js.map