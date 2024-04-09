var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
let ButtonSet = class ButtonSet extends LitElement {
    render() {
        return html `<slot></slot>`;
    }
};
ButtonSet.styles = css `
    :host {
      display: flex;
      gap: 8px;
      align-items: center;
      flex-wrap: wrap;
    }
  `;
ButtonSet = __decorate([
    customElement('u-button-set')
], ButtonSet);
export { ButtonSet };
//# sourceMappingURL=button-set.js.map