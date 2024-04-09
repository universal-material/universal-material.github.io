import { css } from 'lit';
export const styles = css `
  :host {
    --_grid-spacing-small: var(--u-spacing-sm, 8px);
    --_grid-spacing-medium: var(--u-spacing-md, 16px);
    --_grid-spacing-large: var(--u-spacing-lg, 24px);
    --_grid-spacing-extra-large: var(--u-spacing-xl, 40px);
  }

  :host([margin=none]) {
    --_container-margin: 0;
  }

  :host([margin=small]) {
    --_container-margin: var(--u-container-margin, var(--_grid-spacing-small));
  }

  :host([margin=medium]) {
    --_container-margin: var(--u-container-margin, var(--_grid-spacing-medium));
  }

  :host([margin=large]) {
    --_container-margin: var(--u-container-margin, var(--_grid-spacing-large));
  }

  :host([margin=extra-large]) {
    --_container-margin: var(--u-container-margin, var(--_grid-spacing-extra-large));
  }

  :host {
    display: block;
    width: 100%;
    max-width: var(--u-container-max-width, 992px);
    margin-inline: auto;
    padding: var(--_container-margin, var(--_grid-spacing-medium));
  }

  :host::after {
    content: "";
    display: block;
  }
`;
//# sourceMappingURL=container.styles.js.map