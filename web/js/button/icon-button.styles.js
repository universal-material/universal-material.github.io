import { css } from 'lit';
export const styles = css `
  :host {
    --_surface-container-highest-color: var(--u-surface-container-highest-color, #e6e0e9);
    width: var(--u-icon-button-size, 2.5rem);
    height: var(--u-icon-button-size, 2.5rem);
    border-radius: var(--u-icon-button-shape, 9999px);
    font-family: var(--u-font-family-base, system-ui);
  }

  .icon {
    display: inline-block;
    width: var(--u-icon-button-icon-size, 1.5rem);
    height: var(--u-icon-button-icon-size, 1.5rem);
    font-size: var(--u-icon-button-icon-size, 1.5rem);
    line-height: var(--u-icon-button-icon-size, 1.5rem);
  }
  .icon.icon-selected {
    display: none;
  }

  :host([selected]) .icon:not(.icon-selected) {
    display: none;
  }
  :host([selected]) .icon.icon-selected {
    display: inline-block;
  }

  :host([variant=filled]) {
    background-color: var(--u-filled-icon-button-unselected-background-color, var(--_surface-container-highest-color));
    color: var(--u-filled-icon-button-unselected-text-color, var(--_primary-color));
  }

  :host([variant=tonal]) {
    background-color: var(--u-total-icon-button-unselected-background-color, var(--_surface-container-highest-color));
    color: var(--u-tonal-icon-button-unselected-text-color, var(--u-on-surface-variant-color, #49454f));
  }

  :host([selected][variant=filled]),
  :host([variant=filled]:not([has-selection-icon])) {
    background-color: var(--u-filled-icon-button-background-color, var(--_primary-color));
    color: var(--u-filled-icon-button-text-color, var(--u-on-primary-color, #fff));
  }

  :host([selected][variant=tonal]),
  :host([variant=tonal]:not([has-selection-icon])) {
    background-color: var(--u-tonal-icon-button-background-color, var(--u-secondary-container-color, #e8def8));
    color: var(--u-tonal-icon-button-text-color, var(--u-on-secondary-container-color, #1d192b));
  }

  :host([variant=standard]),
  :host([variant=outlined]) {
    color: var(--u-on-surface-variant-color, #49454f);
  }

  :host([variant=outlined]) {
    border: 1px solid var(--u-outline-color, #79747e);
  }

  :host([selected][variant=outlined]) {
    border: none;
    background-color: var(--u-outlined-icon-button-selected-background-color, var(--u-inverse-surface-color, #322f35));
    color: var(--u-outlined-icon-button-selected-text-color, var(--u-inverse-on-surface-color, #f5eff7));
  }

  :host([selected][variant=standard]) {
    color: var(--u-standard-icon-button-selected-text-color, var(--_primary-color));
  }
`;
//# sourceMappingURL=icon-button.styles.js.map