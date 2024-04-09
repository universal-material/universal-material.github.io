import { css } from 'lit';
export const styles = css `
  :host {
    --u-common-button-line-height: var(--u-label-large-line-height, 1.25rem);
    --u-common-button-font-size: var(--u-label-large-font-size, 0.875rem);
    --u-common-button-font-weight: var(--u-font-weight-medium, 500);
    --_common-button-height: var(--u-common-button-height, 2.5rem);
    --_common-button-padding: var(--u-common-button-padding, 24px);
    --_common-button-icon-padding: var(--u-common-button-icon-padding, 16px);
    border-radius: var(--u-common-button-shape, 9999px);
    font-family: var(--u-font-family-base, system-ui);
    height: var(--u-common-button-height, 40px);
    font-size: var(--u-common-button-font-size);
    font-weight: var(--u-common-button-font-weight);
    padding-inline: var(--_common-button-padding);
    box-sizing: border-box;
  }

  :host([variant=filled]) {
    background-color: var(--u-filled-button-background-color, var(--_primary-color));
    color: var(--u-filled-button-text-color, var(--u-on-primary-color, #fff));
  }

  :host([variant=tonal]) {
    background-color: var(--u-tonal-button-background-color, var(--u-secondary-container-color, #e8def8));
    color: var(--u-tonal-button-text-color, var(--u-on-secondary-container-color, #1d192b));
  }

  :host([variant=elevated]) {
    background-color: var(--u-elevated-button-background-color, var(--u-surface-container-low-color, #f7f2fa));
    color: var(--u-tonal-button-text-color, var(--u-on-secondary-container-color, #1d192b));
  }

  @media (hover: hover) {
    :host([variant=filled]:hover:not(:focus-within):not(:active)),
    :host([variant=tonal]:hover:not(:focus-within):not(:active)) {
      --u-elevation-level: var(--u-filled-button-hover-elevation-level, 1);
    }
  }
  :host([variant=outlined]),
  :host([variant=text]),
  :host([variant=elevated]) {
    color: var(--_primary-color);
  }

  :host([variant=outlined]) {
    border: 1px solid var(--u-outline-color, #79747e);
  }

  :host([variant=elevated]) {
    --u-elevation-level: var(--u-elevated-button-elevation-level, 1);
  }

  @media (hover: hover) {
    :host([variant=elevated]:hover) {
      --u-elevation-level: var(--u-elevated-button-hover-elevation-level, 2);
    }
  }
  :host([has-icon]) {
    padding-inline: var(--_common-button-icon-padding) var(--_common-button-padding);
  }

  :host([has-icon][trailing-icon]) {
    padding-inline: var(--_common-button-padding) var(--_common-button-icon-padding);
  }

  ::slotted([slot=icon]) {
    display: inline-block;
    width: var(--u-common-button-icon-size, 1.125rem);
    height: var(--u-common-button-icon-size, 1.125rem);
    margin-inline-end: 8px;
    font-size: var(--u-common-button-icon-size, 1.125rem);
    line-height: var(--u-common-button-icon-size, 1.125rem);
  }

  :host([trailing-icon]) ::slotted([slot=icon]) {
    margin-inline: 8px 0;
  }
`;
//# sourceMappingURL=button.styles.js.map