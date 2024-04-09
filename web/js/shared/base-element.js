import { css, LitElement } from "lit";
export class BaseElement extends LitElement {
}
BaseElement.styles = css `
    :host {
      font-family: var(--u-font-family-base, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol");
    }

    :host * {
      font-family: inherit;
    }
  `;
//# sourceMappingURL=base-element.js.map