import { css } from 'lit';
export const styles = css `
  :host,
  .ripple-container::before {
    display: block;
    inset: 0;
    isolation: isolate;
  }

  .ripple-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: inherit;
  }

  .ripple-container::before {
    content: "";
    background: var(--u-state-layer-color, currentColor);
    opacity: 0;
    transition: opacity 200ms;
  }

  @media (hover: hover) {
    :host(:not([disabled]):hover) .ripple-container::before {
      content: "";
      background: var(--u-state-layer-color, currentColor);
      opacity: 0.08;
    }
  }
  :host,
  .ripple-container::before,
  .ripple {
    position: absolute;
    border-radius: inherit;
  }

  .ripple {
    top: 50%;
    left: 50%;
    background: var(--u-state-layer-color, currentColor);
    border-radius: 50%;
    box-shadow: 0 0 64px 64px var(--u-state-layer-color, currentColor);
    opacity: 0.2;
    transform: scale3d(0, 0, 1);
    pointer-events: none;
    will-change: transform;
  }
  .ripple.show {
    transition: transform var(--u-ripple-wave-duration, 3s) cubic-bezier(0.19, 1, 0.22, 1), opacity 750ms;
    transform: scale3d(1, 1, 1);
  }
  .ripple.show-forced {
    transition: transform var(--u-ripple-wave-duration, 3s) cubic-bezier(0.19, 1, 0.22, 1), opacity 200ms 300ms;
    transform: scale3d(2, 2, 1);
    opacity: 0;
  }
  .ripple.dismiss {
    opacity: 0;
    transform: scale3d(2, 2, 1);
  }

  ::slotted(*) {
    position: absolute !important;
    inset: 0;
    border-radius: inherit;
  }
`;
//# sourceMappingURL=ripple.styles.js.map