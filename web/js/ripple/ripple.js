var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Ripple_1;
import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { styles } from './ripple.styles';
let Ripple = Ripple_1 = class Ripple extends LitElement {
    constructor() {
        super();
        this.isTouching = false;
        this.ariaHidden = "true";
        this.disabled = false;
        this.attachEvents();
    }
    render() {
        return html `<div class="ripple-container"></div><slot></slot>`;
    }
    attachEvents() {
        this.addEventListener('mousedown', this.handleMouseDown);
        this.addEventListener('touchstart', this.handleTouchStart);
    }
    handleMouseDown(e) {
        if (this.isTouching || !this.canCreateRipple()) {
            return;
        }
        this.createRipple('mouseup', e.clientX, e.clientY);
    }
    handleTouchStart(e) {
        if (!this.canCreateRipple()) {
            return;
        }
        this.isTouching = true;
        let release;
        let cancel = false;
        const touchMove = () => {
            cancel = true;
            this.removeEventListener("touchmove", touchMove);
            if (release) {
                release();
            }
        };
        this.addEventListener("touchmove", touchMove);
        setTimeout(() => {
            if (cancel) {
                return;
            }
            release = this.createRipple('touchend', e.touches[0].clientX, e.touches[0].clientY);
        }, 100);
    }
    canCreateRipple() {
        if (this.disabled)
            return false;
        const parent = this.parentElement;
        if (!parent || window.getComputedStyle(parent).position !== "relative" && window.getComputedStyle(parent).position !== "absolute" && window.getComputedStyle(parent).position !== "fixed") {
            console.warn('Ripple: Parent element position must be "relative", "absolute" or "fixed"');
            return false;
        }
        return true;
    }
    createRipple(releaseEventName = null, targetX = null, targetY = null) {
        const preClientRect = this.rippleContainer.getBoundingClientRect();
        targetX ??= preClientRect.x + this.rippleContainer.clientWidth / 2;
        targetY ??= preClientRect.y + this.rippleContainer.clientHeight / 2;
        const ripple = document.createElement('DIV');
        ripple.classList.add('ripple');
        this.rippleContainer.appendChild(ripple);
        const release = () => {
            ripple.classList.add('dismiss');
            this.isTouching = false;
        };
        this.addEventListener("dragstart", release);
        this.addEventListener("mouseleave", release);
        ripple.addEventListener('transitionend', () => {
            if (!ripple.classList.contains('dismiss') && !ripple.classList.contains('show-forced')) {
                return;
            }
            ripple.remove();
            this.removeEventListener('dragstart', release);
            this.removeEventListener('mouseleave', release);
            if (releaseEventName) {
                window.removeEventListener(releaseEventName, release);
            }
        });
        requestAnimationFrame(() => {
            const clientRect = this.getBoundingClientRect();
            const largestDimensionSize = Math.max(this.clientWidth, this.clientHeight);
            const rippleSize = largestDimensionSize * 2;
            Ripple_1._setElementSquareSizeAndCenter(ripple, rippleSize);
            ripple.style.transitionDuration = (1080 * Math.pow(rippleSize, 0.3)) + 'ms, 750ms';
            const x = (targetX - clientRect.left) + ((rippleSize - this.rippleContainer.clientWidth) / 2);
            const y = (targetY - clientRect.top) + ((rippleSize - this.rippleContainer.clientHeight) / 2);
            ripple.style.transformOrigin = x + "px " + y + "px";
            ripple.classList.add(releaseEventName ? 'show' : 'show-forced');
        });
        if (releaseEventName) {
            window.addEventListener(releaseEventName, release);
        }
        return release;
    }
    static _setElementSquareSizeAndCenter(element, size) {
        element.style.top = "50%";
        element.style.left = "50%";
        element.style.width = size + 'px';
        element.style.height = size + 'px';
        element.style.marginLeft = -size / 2 + 'px';
        element.style.marginTop = -size / 2 + 'px';
    }
};
Ripple.styles = styles;
__decorate([
    property({ type: Boolean, reflect: true })
], Ripple.prototype, "disabled", void 0);
__decorate([
    query('.ripple-container')
], Ripple.prototype, "rippleContainer", void 0);
Ripple = Ripple_1 = __decorate([
    customElement('u-ripple')
], Ripple);
export { Ripple };
//# sourceMappingURL=ripple.js.map