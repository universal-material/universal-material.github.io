var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
let Elevation = class Elevation extends LitElement {
    constructor() {
        super(...arguments);
        this.ariaHidden = "true";
    }
};
Elevation.styles = css `
    :host {
      --_level: var(--u-elevation-level, 0);
      --_shadow-color: var(--u-shadow-color, #000);

      -webkit-tap-highlight-color: transparent;
      position: absolute;
      inset: 0;
      border-radius: inherit;
      pointer-events: none;
    }

    :host::before,
    :host::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      transition: box-shadow 150ms ease-in-out;
    }
    
    :host::before {
      box-shadow: 0 calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0 var(--_shadow-color);
      opacity: .3;
    }
    
    :host::after {
      box-shadow: 0 calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);
      opacity: .15;
    }
  `;
Elevation = __decorate([
    customElement('u-elevation')
], Elevation);
export { Elevation };
//# sourceMappingURL=elevation.js.map