import { css } from 'lit';
export const styles = css `
  :host {
    display: block;
    position: relative;
    border-radius: var(--u-card-shape, var(--u-shape-corner-medium, 12px));
  }

  :host(:not(:first-child)) {
    margin-top: 8px;
  }

  :host([variant=elevated]) {
    background-color: var(--u-surface-container-low-color, #f7f2fa);
    --u-elevation-level: var(--u-elevated-card-elevation-level, 1);
  }

  :host([variant=filled]) {
    background-color: var(--u-surface-container-highest-color, #e6e0e9);
  }

  :host([variant=outlined]) {
    border: var(--u-outlined-card-outline-width, 1px) solid var(--u-outlined-card-outline-color, var(--u-outline-variant-color, #cac4d0));
  }
`;
//# sourceMappingURL=card.styles.js.map