import { css } from 'lit';
export const styles = css `
  :host {
    display: block;
  }

  :host(:has(slot > *)) {
    display: none;
  }

  :host([has-content]) {
    padding: var(--u-card-padding, 16px);
  }
`;
//# sourceMappingURL=card-content.styles.js.map