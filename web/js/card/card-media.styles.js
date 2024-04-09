import { css } from 'lit';
export const styles = css `
  :host {
    display: block;
    aspect-ratio: 1;
    border-radius: var(--u-card-shape, var(--u-shape-corner-medium, 12px));
  }

  :host([wide]) {
    aspect-ratio: 16/9;
  }
`;
//# sourceMappingURL=card-media.styles.js.map