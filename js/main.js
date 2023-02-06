/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/button/button.scss":
/*!*******************************************!*\
  !*** ./src/components/button/button.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\":host {\\n  font-size: var(--u-typo-label-l-font-size);\\n  line-height: var(--u-typo-label-l-line-height);\\n  letter-spacing: var(--u-typo-label-l-letter-spacing);\\n  font-weight: var(--u-typo-label-l-font-weight);\\n  position: relative;\\n  display: inline-flex;\\n  align-items: center;\\n  justify-content: center;\\n  overflow: hidden;\\n  font-family: var(--u-font-family);\\n  white-space: nowrap;\\n  cursor: pointer;\\n  user-select: none;\\n  border: none;\\n  display: inline-flex;\\n  height: 2.5rem;\\n  line-height: 1.5rem;\\n  transition: color 150ms ease-in-out, background-color 150ms ease-in-out, box-shadow 150ms ease-in-out;\\n}\\n:host:focus, :host.focus {\\n  outline: 0;\\n}\\n:host:active, :host.active {\\n  background-image: none;\\n}\\n:host.disabled, :host:disabled {\\n  cursor: default;\\n}\\n:host.disabled, :host:disabled {\\n  color: var(--u-on-surface-color) !important;\\n  box-shadow: none !important;\\n  opacity: var(--u-disabled-state-label-opacity);\\n  background-color: transparent !important;\\n}\\n:host.disabled::before, :host:disabled::before {\\n  background-color: var(--u-on-surface-color);\\n  opacity: var(--u-disabled-state-background-opacity);\\n}\\n:host, :host * {\\n  box-sizing: border-box;\\n}\\n\\n:host(.u-text-btn),\\n:host(.u-filled-btn),\\n:host(.u-filled-tonal-btn),\\n:host(.u-elevated-btn),\\n:host(.u-outlined-btn) {\\n  padding: 0 1.5rem;\\n  border-radius: 1.25rem;\\n}\\n\\n:host(.u-elevated-btn) {\\n  background-image: linear-gradient(var(--u-current-elevation-tint-color), var(--u-current-elevation-tint-color));\\n  --u-current-elevation-tint-color: var(--u-elevation-tint1-color);\\n  color: var(--u-primary-color);\\n  background-color: var(--u-surface-color);\\n}\\n\\n:host(.u-filled-btn),\\n:host(.u-floating-btn) {\\n  color: var(--u-on-primary-color);\\n  background-color: var(--u-primary-color);\\n}\\n\\n:host(.u-filled-tonal-btn) {\\n  background: var(--u-secondary-container-color);\\n  color: var(--u-on-secondary-container-color);\\n}\\n\\n:host(.u-outlined-btn) {\\n  border: 0.0625rem solid var(--u-outline-color);\\n}\\n:host(.u-outlined-btn)::before,\\n:host(.u-outlined-btn) .u-ripple-wrapper {\\n  top: -0.0625rem;\\n  right: -0.0625rem;\\n  bottom: -0.0625rem;\\n  left: -0.0625rem;\\n}\\n\\n.u-btn-icon {\\n  display: inline-block;\\n  width: 1.125rem;\\n  height: 1.125rem;\\n  margin-inline-end: 0.5rem;\\n  margin-inline-start: -0.5rem;\\n  font-size: 1.125rem;\\n  line-height: 1.125rem;\\n}\\n\\n:host(.u-text-btn),\\n:host(.u-outlined-btn) {\\n  color: var(--u-primary-color);\\n}\");\n\n//# sourceURL=webpack://my-webpack-project/./src/components/button/button.scss?");

/***/ }),

/***/ "./src/components/button/button.ts":
/*!*****************************************!*\
  !*** ./src/components/button/button.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.scss */ \"./src/components/button/button.scss\");\n/* harmony import */ var _ripple_ripple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ripple/ripple */ \"./src/components/ripple/ripple.ts\");\nvar __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\r\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\r\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\r\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\r\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\r\n};\r\nvar __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {\r\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\r\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\r\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\r\n};\r\nvar _uButton_color, _uButton_variant, _uButton_iconSlot;\r\n\r\n\r\nclass uButton extends HTMLElement {\r\n    constructor() {\r\n        super(...arguments);\r\n        _uButton_color.set(this, null);\r\n        _uButton_variant.set(this, null);\r\n        _uButton_iconSlot.set(this, null);\r\n    }\r\n    connectedCallback() {\r\n        _ripple_ripple__WEBPACK_IMPORTED_MODULE_1__.Ripple.attach(this);\r\n        const styles = new CSSStyleSheet();\r\n        console.log(_button_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n        styles.replaceSync(_button_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n        this.attachShadow({ mode: 'open' });\r\n        this.shadowRoot.innerHTML = '<slot class=\"u-btn-icon\" part=\"icon\" name=\"icon\"></slot><slot></slot>';\r\n        this.shadowRoot.adoptedStyleSheets = [styles];\r\n        __classPrivateFieldSet(this, _uButton_iconSlot, this.shadowRoot.querySelector('slot[name=\"icon\"]'), \"f\");\r\n        // this.#iconSlot.style.setProperty('display', 'none', 'important');\r\n        // this.#iconSlot.addEventListener('slotchange', () => {\r\n        //   if (!this.#iconSlot.children.length) {\r\n        //     this.#iconSlot.style.setProperty('display', 'none', 'important');\r\n        //     return;\r\n        //   }\r\n        //\r\n        //   this.#iconSlot.style.display = '';\r\n        // });\r\n        console.log();\r\n    }\r\n    static get observedAttributes() {\r\n        return ['color', 'variant'];\r\n    }\r\n    set color(value) {\r\n        const previousValue = __classPrivateFieldGet(this, _uButton_color, \"f\");\r\n        __classPrivateFieldSet(this, _uButton_color, value, \"f\");\r\n        if (previousValue) {\r\n            this.classList.remove(`u-btn-${previousValue}`);\r\n        }\r\n        this.classList.add(`u-btn-${value}`);\r\n    }\r\n    get color() {\r\n        return __classPrivateFieldGet(this, _uButton_color, \"f\");\r\n    }\r\n    set variant(value) {\r\n        const previousValue = __classPrivateFieldGet(this, _uButton_variant, \"f\");\r\n        __classPrivateFieldSet(this, _uButton_variant, value, \"f\");\r\n        if (previousValue) {\r\n            this.classList.remove(`u-${previousValue}-btn`);\r\n        }\r\n        this.classList.add(`u-${value}-btn`);\r\n    }\r\n    get variant() {\r\n        return __classPrivateFieldGet(this, _uButton_variant, \"f\");\r\n    }\r\n    attributeChangedCallback(name, oldValue, newValue) {\r\n        switch (name) {\r\n            case 'color':\r\n                this.color = newValue;\r\n                break;\r\n            case 'variant':\r\n                this.variant = newValue;\r\n                break;\r\n        }\r\n    }\r\n}\r\n_uButton_color = new WeakMap(), _uButton_variant = new WeakMap(), _uButton_iconSlot = new WeakMap();\r\ncustomElements.define('u-button', uButton);\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/components/button/button.ts?");

/***/ }),

/***/ "./src/components/ripple/ripple.ts":
/*!*****************************************!*\
  !*** ./src/components/ripple/ripple.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ripple\": () => (/* binding */ Ripple),\n/* harmony export */   \"RippleConfig\": () => (/* binding */ RippleConfig),\n/* harmony export */   \"RippleConfigMap\": () => (/* binding */ RippleConfigMap),\n/* harmony export */   \"RippleContainersSelector\": () => (/* binding */ RippleContainersSelector)\n/* harmony export */ });\nconst RippleContainersSelector = [\r\n    '.u-text-btn',\r\n    '.u-filled-btn',\r\n    '.u-filled-tonal-btn',\r\n    '.u-outlined-btn',\r\n    '.u-elevated-btn',\r\n    '.u-floating-btn',\r\n    '.u-icon-filled-btn',\r\n    '.u-icon-filled-tonal-btn',\r\n    '.u-icon-outlined-btn',\r\n    '.u-icon-btn',\r\n    '.u-tab',\r\n    '.u-dropdown-item',\r\n    '.u-chip-icon.u-chip-icon-action',\r\n    '.u-chip-hover',\r\n    '.u-text-input.u-dropdown-toggle'\r\n].join(',');\r\nclass RippleConfig {\r\n}\r\nconst RippleConfigMap = [\r\n    {\r\n        selector: '.u-list-selectable',\r\n        subSelector: '.u-list-item'\r\n    },\r\n    {\r\n        selector: '.u-list-item',\r\n        subSelector: '.u-list-item-hover'\r\n    },\r\n    {\r\n        selector: '.u-radio',\r\n        subSelector: '.u-selection-control'\r\n    },\r\n    {\r\n        selector: '.u-checkbox',\r\n        subSelector: '.u-selection-control'\r\n    }\r\n];\r\nclass Ripple extends HTMLElement {\r\n    static attach(element, config) {\r\n        return new Ripple(element, config);\r\n    }\r\n    constructor(element, config) {\r\n        super();\r\n        this.disabled = false;\r\n        this._config = Object.assign({}, config);\r\n        if (window.getComputedStyle(element).position !== \"absolute\" && window.getComputedStyle(element).position !== \"fixed\") {\r\n            element.style.position = \"relative\";\r\n        }\r\n        let isTouching = false;\r\n        element.addEventListener('mousedown', (e) => {\r\n            if (!isTouching) {\r\n                this.createRipple(element, 'mouseup', null, e.clientX, e.clientY);\r\n            }\r\n        });\r\n        element.addEventListener('touchstart', (e) => {\r\n            isTouching = true;\r\n            this.createRipple(element, 'touchend', () => {\r\n                setTimeout(() => {\r\n                    isTouching = false;\r\n                }, 100);\r\n            }, e.touches[0].clientX, e.touches[0].clientY);\r\n        });\r\n    }\r\n    createRipple(rippleContainer, releaseEventName, releaseCallback, pageX, pageY) {\r\n        if (this.disabled ||\r\n            rippleContainer.hasAttribute('disabled') ||\r\n            rippleContainer.classList.contains('disabled'))\r\n            return;\r\n        let release;\r\n        let cancel = false;\r\n        const touchMove = () => {\r\n            cancel = true;\r\n            rippleContainer.removeEventListener(\"touchmove\", touchMove);\r\n            if (release) {\r\n                release();\r\n            }\r\n        };\r\n        rippleContainer.addEventListener(\"touchmove\", touchMove);\r\n        setTimeout(() => {\r\n            if (cancel) {\r\n                return;\r\n            }\r\n            const rippleWrapper = document.createElement('U-RIPPLE');\r\n            const ripple = document.createElement('DIV');\r\n            ripple.classList.add('u-ripple');\r\n            rippleWrapper.appendChild(ripple);\r\n            rippleContainer.insertAdjacentElement('afterbegin', rippleWrapper);\r\n            if (this._config.size) {\r\n                Ripple._setElementSquareSizeAndCenter(rippleWrapper, this._config.size);\r\n            }\r\n            if (this._config.borderRadius) {\r\n                rippleWrapper.style.borderRadius = this._config.borderRadius;\r\n            }\r\n            release = () => {\r\n                ripple.classList.add('dismiss');\r\n                if (releaseCallback) {\r\n                    releaseCallback();\r\n                }\r\n            };\r\n            window.addEventListener(releaseEventName, release);\r\n            rippleContainer.addEventListener(\"dragover\", release);\r\n            rippleContainer.addEventListener(\"mouseleave\", release);\r\n            ripple.addEventListener('transitionend', () => {\r\n                if (!ripple.classList.contains('dismiss')) {\r\n                    return;\r\n                }\r\n                rippleContainer.removeChild(rippleWrapper);\r\n                rippleContainer.removeEventListener(\"dragover\", release);\r\n                rippleContainer.removeEventListener(\"mouseleave\", release);\r\n                window.removeEventListener(releaseEventName, release);\r\n            });\r\n            requestAnimationFrame(() => {\r\n                const clientRect = rippleContainer.getBoundingClientRect();\r\n                const largestDimensionSize = Math.max(rippleWrapper.clientWidth, rippleWrapper.clientHeight);\r\n                let rippleSize = this._config.size || largestDimensionSize * 2;\r\n                Ripple._setElementSquareSizeAndCenter(ripple, rippleSize);\r\n                ripple.style.transitionDuration = (1080 * Math.pow(rippleSize, 0.3)) + 'ms, 750ms';\r\n                const x = (pageX - clientRect.left) + ((rippleSize - rippleContainer.clientWidth) / 2);\r\n                const y = (pageY - clientRect.top) + ((rippleSize - rippleContainer.clientHeight) / 2);\r\n                ripple.style.transformOrigin = x + \"px \" + y + \"px\";\r\n                ripple.classList.add('show');\r\n            });\r\n        }, 100);\r\n    }\r\n    static _setElementSquareSizeAndCenter(element, size) {\r\n        element.style.top = \"50%\";\r\n        element.style.left = \"50%\";\r\n        element.style.width = size + 'px';\r\n        element.style.height = size + 'px';\r\n        element.style.marginLeft = -size / 2 + 'px';\r\n        element.style.marginTop = -size / 2 + 'px';\r\n    }\r\n    static _initilizeRipples(selector, config) {\r\n        const rippleContainers = document.querySelectorAll(selector);\r\n        for (let i = 0; i < rippleContainers.length; i++) {\r\n            new Ripple(rippleContainers[i], config);\r\n        }\r\n    }\r\n    static initializeRipples() {\r\n        Ripple._initilizeRipples(RippleContainersSelector);\r\n        for (let i = 0; i < RippleConfigMap.length; i++) {\r\n            let rippleConfig = RippleConfigMap[i];\r\n            let selector = rippleConfig.selector;\r\n            if (rippleConfig.subSelector) {\r\n                selector = [selector, rippleConfig.subSelector].join(' ');\r\n            }\r\n            Ripple._initilizeRipples(selector);\r\n        }\r\n    }\r\n}\r\ncustomElements.define('u-ripple', Ripple);\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/components/ripple/ripple.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/button/button */ \"./src/components/button/button.ts\");\n/* harmony import */ var _components_ripple_ripple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ripple/ripple */ \"./src/components/ripple/ripple.ts\");\n\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;