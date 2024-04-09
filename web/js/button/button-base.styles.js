import { css } from 'lit';
export const styles = css `
  :host {
    --_primary-color: var(--u-primary-color, #6750a4);
    --_shadow-color-rgb: var(--u-shadow-color-rgb, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: baseline;
    position: relative;
    white-space: nowrap;
    font-family: var(--u-font-family-base, system-ui);
    transition: color 150ms ease-in-out, background-color 150ms ease-in-out;
  }

  :host([disabled]) {
    --u-elevation-level: 0 !important;
    background-color: var(--u-button-disabled-background-color, rgba(var(--u-on-surface-color-rgb, 29, 27, 32), 0.12)) !important;
    color: var(--u-button-disabled-text-color, rgba(var(--u-on-surface-color-rgb, 29, 27, 32), 0.38)) !important;
  }

  :host([disabled]) .button {
    cursor: default;
  }

  * {
    color: inherit;
  }

  u-elevation {
    z-index: -1;
  }

  .button {
    cursor: pointer;
    position: absolute;
    inset: 0;
    font-family: inherit;
    border-radius: inherit;
    color: inherit;
    border: none;
    margin: 0;
    padding: 0;
    text-align: center;
    white-space: nowrap;
    background: transparent;
    user-select: none;
    text-decoration: none;
    outline: 0;
    z-index: 0;
  }

  .button:focus-visible {
    animation: offset-pulse 400ms ease;
    animation-fill-mode: forwards;
    outline-offset: 2px;
  }

  ::slotted([slot=icon]) {
    display: inline-block;
  }

  @keyframes offset-pulse {
    0% {
      outline: 4px solid var(--u-primary-color, #6750a4);
    }
    50% {
      outline: 8px solid var(--u-primary-color, #6750a4);
    }
    100% {
      outline: 4px solid var(--u-primary-color, #6750a4);
    }
  }
`;
//# sourceMappingURL=button-base.styles.js.map