import { css } from 'lit';
export const styles = css `
  :host {
    display: table;
    min-width: 100%;
    border-collapse: collapse;
  }

  ::slotted(u-thead:not(:first-child)),
  ::slotted(u-tbody:not(:first-child)),
  ::slotted(u-tfooter:not(:first-child)),
  ::slotted(u-tr:not(:first-child)) {
    border-top: 1px solid var(--u-outline-variant-color, #cac5ca);
  }
`;
//# sourceMappingURL=table.styles.js.map