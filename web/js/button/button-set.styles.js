import { css } from 'lit';
export const styles = css `
  :host {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }

  :host([align=start]) {
    justify-content: flex-start;
  }

  :host([align=center]) {
    justify-content: center;
  }

  :host([align=end]) {
    justify-content: flex-end;
  }

  :host([stack][align=start]) {
    align-items: flex-start;
  }

  :host([stack][align=center]) {
    align-items: center;
  }

  :host([stack][align=end]) {
    align-items: flex-end;
  }

  :host([stack]) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;
//# sourceMappingURL=button-set.styles.js.map