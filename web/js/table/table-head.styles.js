import { css } from 'lit';
export const styles = css `
  :host {
    display: table-header-group;
  }

  ::slotted(u-tr:not(:first-child)) {
    border-top: 1px solid var(--u-outline-variant-color, #cac5ca);
  }
`;
//# sourceMappingURL=table-head.styles.js.map