import { css } from 'lit';
export const styles = css `
  :host {
    aspect-ratio: 1;
    --u-elevation-level: var(--u-fab-button-elevation-level, 3);
  }

  :host([lowered]) {
    --u-elevation-level: var(--u-fab-button-elevation-level, 1);
  }

  @media (hover: hover) {
    :host(:hover:not(:focus-within):not(:active)) {
      --u-elevation-level: var(--u-fab-button-hover-elevation-level, 4);
    }
    :host(:hover:not(:focus-within):not(:active)[lowered]) {
      --u-elevation-level: var(--u-fab-button-elevation-level, 2);
    }
  }
  @media (hover: hover) {
    :host(:hover:not(:focus-within):not(:active)) {
      --u-elevation-level: var(--u-fab-button-hover-elevation-level, 4);
    }
  }
  :host([size=small]) {
    width: var(--u-fab-button-small-size, 40px);
    border-radius: var(--u-fab-button-medium-shape, var(--u-shape-corner-medium, 12px));
  }

  :host([size=large]) {
    width: var(--u-fab-button-medium-size, 96px);
    border-radius: var(--u-fab-button-medium-shape, var(--u-shape-corner-extra-large, 28px));
  }

  :host([extended]),
  :host([size=medium]) {
    width: var(--u-fab-button-medium-size, 56px);
    border-radius: var(--u-fab-button-medium-shape, var(--u-shape-corner-large, 16px));
  }

  :host([size=large]) .icon {
    font-size: var(--u-fab-button-icon-size, 2rem);
  }

  :host([extended]) .icon,
  :host([size=small]) .icon,
  :host([size=medium]) .icon {
    font-size: var(--u-fab-button-icon-size, 1.5rem);
  }

  :host([extended]) {
    width: auto;
    height: var(--u-extended-fab-button-height, 56px);
    aspect-ratio: auto;
    min-width: var(--u-extended-fab-button-min-width, 80px);
    padding-inline: var(--u-extended-fab-button-padding, 16px 24px);
  }

  :host([extended]) .icon {
    margin-inline-end: var(--u-extended-fab-button-icon-margin, 12px);
  }

  :host([color=primary]) {
    background-color: var(--u-fab-button-primary-background-color, var(--u-primary-container-color, #eaddff));
    color: var(--u-fab-button-primary-text-color, var(--u-on-primary-container-color, #21005d));
  }

  :host([color=secondary]) {
    background-color: var(--u-fab-button-secondary-background-color, var(--u-secondary-container-color, #e8def8));
    color: var(--u-fab-button-secondary-text-color, var(--u-on-secondary-container-color, #1d192b));
  }

  :host([color=tertiary]) {
    background-color: var(--u-fab-button-tertiary-background-color, var(--u-tertiary-container-color, #ffd8e4));
    color: var(--u-fab-button-tertiary-text-color, var(--u-on-tertiary-container-color, #31111d));
  }

  :host([color=branded]),
  :host([color=surface]) {
    background-color: var(--u-fab-button-surface-background-color, var(--u-surface-container-high-color, #ece6f0));
    color: var(--u-fab-button-surface-text-color, var(--_primary-color));
  }

  :host([color=branded][lowered]),
  :host([color=surface][lowered]) {
    background-color: var(--u-fab-button-surface-background-color, var(--u-surface-container-low-color, #ece6f0));
  }
`;
//# sourceMappingURL=fab.styles.js.map