import { css } from 'lit';
export const styles = css `
  :host {
    --_divider-thickness: var(--u-divider-thickness, 1px);
    display: block;
    margin-block: 8px;
    height: var(--_divider-thickness);
    background-color: var(--u-divider-color, var(--u-outline-variant-color, #cac4d0));
  }

  :host([no-margin]) {
    margin: 0;
  }
`;
//# sourceMappingURL=divider.styles.js.map