var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from 'lit';
import { customElement, query, queryAssignedElements } from 'lit/decorators.js';
import { styles as baseStyles } from '../shared/base.styles';
let Checkbox = class Checkbox extends LitElement {
    constructor() {
        super(...arguments);
        this.handleInputChange = (e) => {
            if (this.input !== document.elementFromPoint(e.clientX, e.clientY)) {
                this.ripple.createRipple();
            }
        };
    }
    render() {
        return html `
      <div class="touch">
        <u-ripple><slot @slotchange="${this.handleSlotChange}"></slot></u-ripple>
      </div>`;
    }
    handleSlotChange() {
        console.log('slotchange');
        if (this.input) {
            this.input.removeEventListener('click', this.handleInputChange);
        }
        this.input = this.assignedInputs[0];
        if (this.input) {
            this.input.addEventListener('click', this.handleInputChange);
        }
    }
};
Checkbox.styles = [
    baseStyles,
    css `
      :host {
        position: relative;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 48px;
        height: 48px;
      }
      
      ::slotted(input) {
        position: relative;
        padding: 0;
        margin: 0;
        aspect-ratio: 1;
        height: 100%;
        z-index: 1;
        appearance: none;
      }
      
      .touch {
        position: absolute;
        inset: 0;
        border-radius: 9999px;
      }
    `
];
__decorate([
    query('u-ripple')
], Checkbox.prototype, "ripple", void 0);
__decorate([
    queryAssignedElements({ selector: 'input', flatten: true })
], Checkbox.prototype, "assignedInputs", void 0);
Checkbox = __decorate([
    customElement('u-checkbox')
], Checkbox);
export { Checkbox };
//# sourceMappingURL=checkbox.js.map