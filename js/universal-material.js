var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var umd;
(function (umd) {
    var EscapeKeyCode = 27;
    var QuickDialogConfig = (function () {
        function QuickDialogConfig() {
        }
        QuickDialogConfig.default = {
            closeOnBackdropClick: true,
            closeOnEsc: true
        };
        return QuickDialogConfig;
    }());
    umd.QuickDialogConfig = QuickDialogConfig;
    var QuickDialog = (function () {
        function QuickDialog(template, config, beforeCreateDialog) {
            var _this = this;
            this._keyDownEvent = function (event) {
                if (event.which === EscapeKeyCode) {
                    _this._innerDialog.close();
                    event.preventDefault();
                }
            };
            this._template = template;
            this._config = __assign({}, QuickDialogConfig.default, config);
            if (beforeCreateDialog)
                beforeCreateDialog();
            this._createDialog();
        }
        QuickDialog.prototype._createDialog = function () {
            var _this = this;
            var dialogContainer = document.createElement('div');
            dialogContainer.innerHTML = this._template;
            var dialogElement = dialogContainer.querySelector('.u-dialog');
            this._configureDialog(dialogElement);
            document.body.appendChild(dialogContainer);
            dialogElement.addEventListener('closed', function () {
                document.body.removeChild(dialogContainer);
                document.body.removeEventListener('keydown', _this._keyDownEvent, true);
                _this._onClosed();
            });
            this._innerDialog = Dialog.attach(dialogElement, {
                destroyWhenClose: true
            });
            if (this._config.closeOnEsc) {
                this._setEscapeEvent();
            }
            if (this._config.closeOnBackdropClick) {
                dialogElement
                    .querySelector('.u-dialog-backdrop')
                    .addEventListener('click', function () { return _this._innerDialog.close(); }, true);
            }
        };
        QuickDialog.prototype.close = function () {
            this._innerDialog.close();
        };
        QuickDialog.prototype._onClosed = function () {
        };
        QuickDialog.prototype._setEscapeEvent = function () {
            document.body.addEventListener('keydown', this._keyDownEvent, true);
        };
        return QuickDialog;
    }());
    umd.QuickDialog = QuickDialog;
    var ConfirmDialogConfig = (function (_super) {
        __extends(ConfirmDialogConfig, _super);
        function ConfirmDialogConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ConfirmDialogConfig.default = __assign({ confirmLabel: "Ok", cancelLabel: "Cancel" }, QuickDialogConfig.default);
        return ConfirmDialogConfig;
    }(QuickDialogConfig));
    umd.ConfirmDialogConfig = ConfirmDialogConfig;
    var confirmDialogTemplate = "\n<div class=\"u-dialog show\">\n  <div class=\"u-dialog-backdrop\"></div>\n  <div class=\"u-dialog-content\">\n    <div class=\"u-dialog-header\">\n      <div class=\"u-dialog-title\"></div>\n    </div>    \n    <div class=\"u-dialog-body\"></div>\n    <div class=\"u-dialog-actions\">\n      <button type=\"button\" class=\"u-btn-flat u-btn-primary\" cancelButton></button>\n      <button type=\"button\" class=\"u-btn-flat u-btn-primary\" confirmButton></button>\n    </div>\n  </div>\n</div>";
    var ConfirmDialog = (function (_super) {
        __extends(ConfirmDialog, _super);
        function ConfirmDialog(message, config) {
            var _this = _super.call(this, confirmDialogTemplate, __assign({}, ConfirmDialogConfig.default, { _message: message }, config)) || this;
            _this._message = message;
            return _this;
        }
        ConfirmDialog.open = function (message, config) {
            return new ConfirmDialog(message, config);
        };
        ConfirmDialog.prototype._configureDialog = function (dialogElement) {
            var _this = this;
            var titleElement = dialogElement.querySelector('.u-dialog-title');
            if (this._config.title) {
                titleElement.innerText = this._config.title;
            }
            else {
                titleElement.parentNode.removeChild(titleElement);
            }
            dialogElement.querySelector('.u-dialog-body').innerText = this._config['_message'];
            var confirmButton = dialogElement.querySelector('[confirmButton]');
            var cancelButton = dialogElement.querySelector('[cancelButton]');
            confirmButton.innerText = this._config.confirmLabel;
            cancelButton.innerText = this._config.cancelLabel;
            Ripple.attach(confirmButton);
            Ripple.attach(cancelButton);
            confirmButton.addEventListener('click', function () {
                _this._innerDialog.close();
                if (_this._config.onConfirm)
                    _this._config.onConfirm();
            });
            cancelButton.addEventListener('click', function () {
                _this._innerDialog.close();
                if (_this._config.onCancel)
                    _this._config.onCancel();
            });
        };
        return ConfirmDialog;
    }(QuickDialog));
    umd.ConfirmDialog = ConfirmDialog;
    (function () {
        if (typeof window['CustomEvent'] === "function")
            return;
        function CustomEvent(event, params) {
            params = params || { bubbles: false, cancelable: false, detail: undefined };
            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        }
        CustomEvent.prototype = window['Event'].prototype;
        window['CustomEvent'] = CustomEvent;
    })();
    var DialogConfig = (function () {
        function DialogConfig() {
        }
        DialogConfig.default = {
            destroyWhenClose: false
        };
        return DialogConfig;
    }());
    umd.DialogConfig = DialogConfig;
    var closedEvent = new CustomEvent('closed');
    var dialogBodyTopDividerClassName = 'u-dialog-scroll-top-divider';
    var dialogBodyBottomDividerClassName = 'u-dialog-scroll-bottom-divider';
    var Dialog = (function () {
        function Dialog(_dialogElement, dialogConfig) {
            var _this = this;
            this._dialogElement = _dialogElement;
            this.onAnimationEnd = function (event) {
                _this._dialogElement.removeEventListener(event.type, _this.onAnimationEnd);
                _this._dialogElement.dispatchEvent(closedEvent);
                if (_this._dialogConfig.destroyWhenClose) {
                    _this._dialogElement.parentNode.removeChild(_this._dialogElement);
                }
                else {
                    _this._dialogElement.classList.remove('hide');
                }
            };
            this.toggle = function () {
                var action = _this._showing ? _this.close : _this.open;
                action();
            };
            this.open = function () {
                _this._dialogElement.classList.add('show');
                _this._showing = true;
            };
            this.close = function () {
                _this._dialogElement.classList.add('hide');
                _this._dialogElement.classList.remove('show');
                _this._showing = false;
                _this.addAnimationEndEvents();
            };
            this._dialogConfig = __assign({}, DialogConfig.default, dialogConfig);
            this._dialogBodyElement = this._dialogElement.querySelector('.u-dialog-body');
            if (this._dialogBodyElement) {
                this._setBodyDividers();
                this._setDialogBodyScrollHandler();
            }
        }
        Dialog.prototype.addAnimationEndEvents = function () {
            var _this = this;
            Dialog._animationEvents.forEach(function (eventName) {
                _this._dialogElement.addEventListener(eventName, _this.onAnimationEnd.bind(_this));
            });
        };
        Dialog.attach = function (element, dialogConfig) {
            return new Dialog(element, dialogConfig);
        };
        Dialog.prototype._setBodyDividers = function () {
            if (this._dialogBodyElement.scrollTop) {
                this._dialogElement.classList.add(dialogBodyTopDividerClassName);
            }
            else {
                this._dialogElement.classList.remove(dialogBodyTopDividerClassName);
            }
            var scrollBottom = this._dialogBodyElement.scrollTop + this._dialogBodyElement.offsetHeight;
            if (scrollBottom !== this._dialogBodyElement.scrollHeight) {
                this._dialogElement.classList.add(dialogBodyBottomDividerClassName);
            }
            else {
                this._dialogElement.classList.remove(dialogBodyBottomDividerClassName);
            }
        };
        Dialog.prototype._setDialogBodyScrollHandler = function () {
            this._dialogBodyElement.addEventListener('scroll', this._setBodyDividers.bind(this), true);
        };
        Dialog._animationEvents = ["webkitAnimationEnd", "oanimationend", "msAnimationEnd", "animationend"];
        return Dialog;
    }());
    umd.Dialog = Dialog;
    var DropdownConfig = (function () {
        function DropdownConfig() {
        }
        DropdownConfig.default = {};
        return DropdownConfig;
    }());
    umd.DropdownConfig = DropdownConfig;
    var closeEvent = new CustomEvent('close');
    var openEvent = new CustomEvent('open');
    var EnterKey = 13;
    var EscapeKey = 27;
    var SpaceKey = 32;
    var Dropdown = (function () {
        function Dropdown(_dropdownElement, dropdownConfig) {
            var _this = this;
            this._dropdownElement = _dropdownElement;
            this.toggle = function () {
                var action = _this._showing ? _this.close : _this.open;
                action();
            };
            this.open = function () {
                _this._dropdownMenu.classList.add('show');
                _this._showing = true;
                _this._dropdownElement.dispatchEvent(openEvent);
            };
            this.close = function () {
                _this._dropdownMenu.classList.remove('show');
                _this._showing = false;
                _this._dropdownElement.dispatchEvent(closeEvent);
            };
            this._dropdownToggle = _dropdownElement.querySelector('.u-dropdown-toggle');
            this._dropdownMenu = _dropdownElement.querySelector('.u-dropdown-menu');
            if (!this._dropdownToggle || !this._dropdownToggle)
                return;
            this._dropdownConfig = __assign({}, DropdownConfig.default, dropdownConfig);
            this._attachEvents();
        }
        Dropdown.attach = function (element, dropdownConfig) {
            return new Dropdown(element, dropdownConfig);
        };
        Dropdown.prototype._attachEvents = function () {
            var _this = this;
            this._dropdownToggle.addEventListener('click', function (e) {
                e.stopPropagation();
            });
            document.addEventListener('click', function () {
                _this.close();
            });
            this._dropdownToggle.addEventListener('mouseup', function (e) {
                _this.toggle();
            });
            this._dropdownToggle.addEventListener('keyup', function (e) {
                switch (e.which) {
                    case EscapeKey:
                        _this.close();
                        break;
                    case SpaceKey:
                        _this.open();
                        break;
                    case EnterKey:
                        _this.toggle();
                        break;
                }
            });
        };
        Dropdown.initializeDropdowns = function () {
            var dropdowns = document.querySelectorAll('.u-dropdown');
            for (var i = 0; i < dropdowns.length; i++) {
                var dropdown = dropdowns[i];
                Dropdown.attach(dropdown);
            }
        };
        return Dropdown;
    }());
    umd.Dropdown = Dropdown;
    var ProgressDialogConfig = (function (_super) {
        __extends(ProgressDialogConfig, _super);
        function ProgressDialogConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ProgressDialogConfig.default = __assign({}, QuickDialogConfig.default, { closeOnBackdropClick: false, closeOnEsc: false });
        return ProgressDialogConfig;
    }(QuickDialogConfig));
    umd.ProgressDialogConfig = ProgressDialogConfig;
    var progressDialogTemplate = "\n<div class=\"u-dialog u-dialog-progress show\">\n  <div class=\"u-dialog-backdrop\"></div>\n  <div class=\"u-dialog-content\">\n    <div class=\"u-dialog-body\">\n      <div class=\"preloader-wrapper\">\n        <div class=\"spinner-layer\">\n          <div class=\"circle-clipper left\">\n            <div class=\"circle\"></div>\n          </div>\n          <div class=\"gap-patch\">\n            <div class=\"circle\"></div>\n          </div>\n          <div class=\"circle-clipper right\">\n            <div class=\"circle\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"u-dialog-progress-message u-headline6 text-low-contrast text-nowrap\"></div>\n    </div>\n  </div>\n</div>";
    var ProgressDialog = (function (_super) {
        __extends(ProgressDialog, _super);
        function ProgressDialog(message, config) {
            var _this = _super.call(this, progressDialogTemplate, __assign({}, ProgressDialogConfig.default, { _message: message }, config)) || this;
            _this._message = message;
            return _this;
        }
        ProgressDialog.open = function (message, config) {
            return new ProgressDialog(message, config);
        };
        ProgressDialog.prototype._configureDialog = function (dialogElement) {
            var message = this._config['_message'];
            if (message) {
                dialogElement.querySelector('.u-dialog-progress-message').innerText = message;
            }
            else {
                dialogElement.querySelector('.u-dialog-progress-message').style.display = 'none';
            }
        };
        return ProgressDialog;
    }(QuickDialog));
    umd.ProgressDialog = ProgressDialog;
    umd.RippleContainersSelector = [
        '.u-btn',
        '.u-btn-flat',
        '.u-btn-solid',
        '.u-btn-raised',
        '.u-btn-outline',
        '.u-btn-floating',
        '.u-btn-borderless',
        '.u-tab',
        '.u-dropdown-item',
        '.u-chip-remove',
        '.u-chip-hover',
        '.u-text-input.u-dropdown-toggle'
    ].join(',');
    var RippleConfig = (function () {
        function RippleConfig() {
        }
        return RippleConfig;
    }());
    umd.RippleConfig = RippleConfig;
    umd.RippleConfigMap = [
        {
            selector: '.u-list-selectable',
            subSelector: '.u-list-item',
            config: null
        },
        {
            selector: '.u-list-item',
            subSelector: '.u-list-item-hover',
            config: null
        },
        {
            selector: '.u-radio',
            subSelector: '.u-selection-control',
            config: null
        },
        {
            selector: '.u-switch',
            subSelector: '.u-check-indicator',
            config: null
        },
        {
            selector: '.u-checkbox',
            subSelector: '.u-selection-control',
            config: null
        }
    ];
    var Ripple = (function () {
        function Ripple(element, config) {
            var _this = this;
            this.disabled = false;
            this._config = __assign({}, config);
            if (window.getComputedStyle(element).position !== "absolute" && window.getComputedStyle(element).position !== "fixed") {
                element.style.position = "relative";
            }
            var isTouching = false;
            element.addEventListener('mousedown', function (e) {
                if (!isTouching) {
                    _this.createRipple(element, 'mouseup', null, e.clientX, e.clientY);
                }
            });
            element.addEventListener('touchstart', function (e) {
                isTouching = true;
                _this.createRipple(element, 'touchend', function () {
                    setTimeout(function () {
                        isTouching = false;
                    }, 100);
                }, e.touches[0].clientX, e.touches[0].clientY);
            });
        }
        Ripple.attach = function (element, config) {
            return new Ripple(element, config);
        };
        Ripple.prototype.createRipple = function (rippleContainer, releaseEventName, releaseCallback, pageX, pageY) {
            var _this = this;
            if (this.disabled)
                return;
            var rippleWrapper = document.createElement('DIV');
            rippleWrapper.classList.add('u-ripple-wrapper');
            var ripple = document.createElement('DIV');
            ripple.classList.add('u-ripple');
            rippleWrapper.appendChild(ripple);
            rippleContainer.insertAdjacentElement('afterbegin', rippleWrapper);
            if (this._config.size) {
                Ripple._setElementSquareSizeAndCenter(rippleWrapper, this._config.size);
            }
            if (this._config.borderRadius) {
                rippleWrapper.style.borderRadius = this._config.borderRadius;
            }
            var release = function () {
                ripple.classList.add('dismiss');
                if (releaseCallback) {
                    releaseCallback();
                }
            };
            window.addEventListener(releaseEventName, release);
            rippleContainer.addEventListener("dragover", release);
            ripple.addEventListener('transitionend', function () {
                if (ripple.classList.contains('dismiss')) {
                    rippleContainer.removeChild(rippleWrapper);
                    rippleContainer.removeEventListener("dragover", release);
                    window.removeEventListener(releaseEventName, release);
                }
            });
            requestAnimationFrame(function () {
                var clientRect = rippleContainer.getBoundingClientRect();
                var largestDimensionSize = Math.max(rippleWrapper.clientWidth, rippleWrapper.clientHeight);
                var rippleSize = _this._config.size || largestDimensionSize * 2;
                Ripple._setElementSquareSizeAndCenter(ripple, rippleSize);
                ripple.style.transitionDuration = (1080 * Math.pow(rippleSize, 0.3)) + 'ms, 750ms';
                var x = (pageX - clientRect.left) + ((rippleSize - rippleContainer.clientWidth) / 2);
                var y = (pageY - clientRect.top) + ((rippleSize - rippleContainer.clientHeight) / 2);
                ripple.style.transformOrigin = x + "px " + y + "px";
                ripple.classList.add('show');
            });
        };
        Ripple._setElementSquareSizeAndCenter = function (element, size) {
            element.style.top = "50%";
            element.style.left = "50%";
            element.style.width = size + 'px';
            element.style.height = size + 'px';
            element.style.marginLeft = -size / 2 + 'px';
            element.style.marginTop = -size / 2 + 'px';
        };
        Ripple._initilizeRipples = function (selector, config) {
            var rippleContainers = document.querySelectorAll(selector);
            for (var i = 0; i < rippleContainers.length; i++) {
                new Ripple(rippleContainers[i], config);
            }
        };
        Ripple.initializeRipples = function () {
            Ripple._initilizeRipples(umd.RippleContainersSelector);
            for (var i = 0; i < umd.RippleConfigMap.length; i++) {
                var rippleConfig = umd.RippleConfigMap[i];
                var selector = rippleConfig.selector;
                if (rippleConfig.subSelector) {
                    selector = [selector, rippleConfig.subSelector].join(' ');
                }
                Ripple._initilizeRipples(selector, rippleConfig.config);
            }
        };
        return Ripple;
    }());
    umd.Ripple = Ripple;
    var Slider = (function () {
        function Slider(_sliderElement) {
            var _this = this;
            this._sliderElement = _sliderElement;
            this._sliderTrack = _sliderElement.querySelector('.u-slider-track');
            this._sliderTrackContainer = _sliderElement.querySelector('.u-slider-track-container');
            this._sliderTrackMarkerContainer = _sliderElement.querySelector('.u-slider-track-marker-container');
            this._sliderTrackMarker = _sliderElement.querySelector('.u-slider-track-marker');
            this._sliderThumb = _sliderElement.querySelector('.u-slider-thumb');
            this._sliderInputElement = _sliderElement.querySelector('input[type=range]');
            this._sliderInputElement.addEventListener(window.navigator.userAgent.indexOf('Trident/') > -1 ? 'change' : 'input', function () { return _this._setThumbAndTrack(); });
            this._sliderInputElement.setAttribute('aria-valuemin', this._sliderInputElement.min);
            this._sliderInputElement.setAttribute('aria-valuemax', this._sliderInputElement.max);
            this._sliderElement['slider'] = this;
            this._setTrackMarkers();
            this._setThumbAndTrack();
        }
        Slider.prototype._setTrackMarkers = function () {
            if (!this._sliderTrackMarker || !this._sliderTrackMarkerContainer) {
                return;
            }
            var min = parseInt(this._sliderInputElement.min, 10);
            var max = parseInt(this._sliderInputElement.max, 10);
            var step = parseInt(this._sliderInputElement.step || "1", 10);
            for (var i = 0; i < max - min; i += step) {
                var node = this._sliderTrackMarker.cloneNode(true);
                this._sliderTrackMarkerContainer.appendChild(node);
            }
        };
        Slider.prototype._setThumbAndTrack = function () {
            var value = this._sliderInputElement.valueAsNumber;
            var min = parseInt(this._sliderInputElement.min, 10);
            var max = parseInt(this._sliderInputElement.max, 10);
            this._sliderInputElement.setAttribute('aria-valuenow', value.toString());
            var offset = max - min;
            value -= min;
            var position = value * 100 / offset;
            this._sliderThumb.style.width = position + "%";
            this._sliderTrack.style.width = position + "%";
        };
        Slider.prototype.setDisabled = function (disabled) {
            if (disabled) {
                this._sliderInputElement.setAttribute('aria-disabled', disabled.toString());
                this._sliderInputElement.setAttribute('disabled', '');
            }
            else {
                this._sliderInputElement.removeAttribute('aria-disabled');
                this._sliderInputElement.removeAttribute('disabled');
            }
        };
        Slider.initializeSliders = function () {
            var sliders = document.querySelectorAll('.u-slider');
            for (var i = 0; i < sliders.length; i++) {
                var slider = sliders[i];
                new Slider(slider);
            }
        };
        return Slider;
    }());
    umd.Slider = Slider;
    var Snackbar = (function () {
        function Snackbar() {
        }
        Snackbar.show = function (text, duration, buttonDefinition) {
            if (duration === void 0) { duration = SnackbarDuration.long; }
            Snackbar._snackbarQueue.push({
                text: text,
                duration: duration,
                buttonDefinition: buttonDefinition
            });
            if (!Snackbar._consuming) {
                Snackbar.consumeQueue();
            }
        };
        Snackbar.consumeQueue = function () {
            if (Snackbar._snackbarQueue.length) {
                Snackbar._consuming = true;
                Snackbar.showNext();
            }
        };
        Snackbar.showNext = function () {
            if (Snackbar._snackbarQueue.length) {
                var snackbarDefinition = Snackbar._snackbarQueue[0];
                Snackbar._snackbarQueue = Snackbar._snackbarQueue.slice(1);
                var snackbar_1 = Snackbar.createSnackbar();
                snackbar_1.appendChild(Snackbar.createSnackbarText(snackbarDefinition.text));
                if (snackbarDefinition.buttonDefinition) {
                    var snackbarButton = Snackbar.createButton(snackbarDefinition.buttonDefinition);
                    snackbar_1.appendChild(snackbarButton);
                }
                document.body.appendChild(snackbar_1);
                setTimeout(function () {
                    snackbar_1.classList.add("dismiss");
                    Snackbar.addAnimationEndEvents(snackbar_1);
                }, snackbarDefinition.duration);
            }
            else {
                Snackbar._consuming = false;
            }
        };
        Snackbar.createSnackbar = function () {
            var snackbar = document.createElement("div");
            snackbar.className = "u-snackbar";
            return snackbar;
        };
        Snackbar.createSnackbarText = function (text) {
            var snackbarText = document.createElement("div");
            snackbarText.innerText = text;
            snackbarText.className = "u-snackbar-text";
            return snackbarText;
        };
        Snackbar.createButton = function (buttonDefinition) {
            var snackbarButton = document.createElement("button");
            snackbarButton.type = "button";
            snackbarButton.className = "u-btn-flat u-btn-secondary";
            snackbarButton.innerText = buttonDefinition.text;
            new Ripple(snackbarButton);
            if (buttonDefinition.action) {
                snackbarButton.addEventListener("click", buttonDefinition.action);
            }
            return snackbarButton;
        };
        Snackbar.addAnimationEndEvents = function (snackbar) {
            var _this = this;
            Snackbar._animationEvents.forEach(function (eventName) {
                snackbar.addEventListener(eventName, Snackbar.onAnimationEnd.bind(_this));
            });
        };
        Snackbar.onAnimationEnd = function (event) {
            event.currentTarget.removeEventListener(event.type, Snackbar.onAnimationEnd);
            var element = event.currentTarget;
            element.parentNode.removeChild(element);
            Snackbar.showNext();
        };
        Snackbar._animationEvents = ["webkitAnimationEnd", "oanimationend", "msAnimationEnd", "animationend"];
        Snackbar._snackbarQueue = [];
        return Snackbar;
    }());
    umd.Snackbar = Snackbar;
    var SnackbarDuration;
    (function (SnackbarDuration) {
        SnackbarDuration[SnackbarDuration["short"] = 2500] = "short";
        SnackbarDuration[SnackbarDuration["long"] = 5000] = "long";
    })(SnackbarDuration = umd.SnackbarDuration || (umd.SnackbarDuration = {}));
    var SnackbarDefinition = (function () {
        function SnackbarDefinition() {
        }
        return SnackbarDefinition;
    }());
    umd.SnackbarDefinition = SnackbarDefinition;
    var SnackbarButtonDefinition = (function () {
        function SnackbarButtonDefinition() {
        }
        return SnackbarButtonDefinition;
    }());
    umd.SnackbarButtonDefinition = SnackbarButtonDefinition;
    var TabBar = (function () {
        function TabBar(_tabBarElement) {
            var _this = this;
            this._tabBarElement = _tabBarElement;
            this._tabMap = [];
            this._tabClick = function (event) {
                var tab = event.currentTarget;
                _this.setActiveTab(tab.index);
            };
            if (!TabBar._attachedKeyEvents) {
                document.addEventListener('keydown', function (e) {
                    var tabBar = document.activeElement.parentElement && document.activeElement.parentElement['tabBar'];
                    if (!tabBar) {
                        return;
                    }
                    var tabFocusIndex = document.activeElement.index;
                    if (e.keyCode === 37) {
                        tabFocusIndex--;
                        if (tabFocusIndex < 0) {
                            tabFocusIndex = tabBar._tabMap.length - 1;
                        }
                    }
                    else if (e.keyCode === 39) {
                        tabFocusIndex++;
                        if (tabFocusIndex >= tabBar._tabMap.length) {
                            tabFocusIndex = 0;
                        }
                    }
                    console.log(tabFocusIndex);
                    tabBar._tabMap[tabFocusIndex].focus();
                });
            }
            this._tabIndicatorElement = _tabBarElement.querySelector('.u-tab-indicator');
            this._setTabs();
            this.setActiveTab(0);
            _tabBarElement['tabBar'] = this;
            if (window) {
                window.addEventListener('resize', function () {
                    _this._updateTabIndicator();
                });
            }
        }
        TabBar.prototype.setActiveTab = function (tabIndex) {
            var _this = this;
            if (!isNaN(this.currentTabIndex)) {
                this._tabMap[this.currentTabIndex].classList.remove('active');
                this._tabMap[this.currentTabIndex].setAttribute('tabindex', '-1');
                this._tabMap[this.currentTabIndex].setAttribute('aria-selected', 'false');
            }
            this.currentTabIndex = tabIndex;
            this._tabBarElement.dispatchEvent(new CustomEvent('tabchange', {
                detail: {
                    tabIndex: tabIndex
                }
            }));
            this._tabMap[this.currentTabIndex].classList.add('active');
            this._tabMap[this.currentTabIndex].setAttribute('tabindex', '0');
            this._tabMap[this.currentTabIndex].setAttribute('aria-selected', 'true');
            setTimeout(function () { return _this._updateTabIndicator(); }, 100);
        };
        TabBar.prototype.recalculateBounds = function () {
            this._tabMap.length = 0;
            this._setTabs();
            this._updateTabIndicator();
        };
        TabBar.prototype._updateTabIndicator = function () {
            var tab = this._tabMap[this.currentTabIndex];
            var tabBounds = tab.getBoundingClientRect();
            var offset = tabBounds.left - this._tabBarElement.getBoundingClientRect().left;
            this._tabIndicatorElement.style.left = offset + 'px';
            this._tabIndicatorElement.style.width = tabBounds.width + 'px';
        };
        TabBar.prototype._setTabs = function () {
            var tabs = this._tabBarElement.querySelectorAll('.u-tab');
            for (var i = 0; i < tabs.length; i++) {
                var tab = tabs[i];
                tab.removeEventListener('click', this._tabClick);
                tab.addEventListener('click', this._tabClick);
                tab.setAttribute('tabindex', i === this.currentTabIndex ? '0' : '-1');
                tab.setAttribute('aria-selected', i === this.currentTabIndex ? 'true' : 'false');
                tab.index = i;
                this._tabMap.push(tab);
            }
        };
        TabBar.attach = function (tabBarElement) {
            return new TabBar(tabBarElement);
        };
        TabBar.initializeTabBars = function () {
            var tabBars = document.querySelectorAll('.u-tab-bar');
            for (var i = 0; i < tabBars.length; i++) {
                var tabBar = tabBars[i];
                TabBar.attach(tabBar);
            }
        };
        TabBar._attachedKeyEvents = false;
        return TabBar;
    }());
    umd.TabBar = TabBar;
    var TextField = (function () {
        function TextField(element) {
            var _this = this;
            var input = element.querySelector('input, textarea, .u-text-input');
            if (input) {
                input.addEventListener('focus', function () {
                    element.classList.add('focus');
                });
                input.addEventListener('blur', function () {
                    element.classList.remove('focus');
                });
                this.element = element;
                var prototype = void 0;
                if (input.nodeName.toLowerCase() === 'input') {
                    prototype = HTMLInputElement.prototype;
                }
                else if (input.nodeName.toLowerCase() === 'textarea') {
                    prototype = HTMLTextAreaElement.prototype;
                }
                if (!prototype)
                    return;
                input.addEventListener('input', function () {
                    _this.setEmpty();
                });
                var descriptor_1 = Object.getOwnPropertyDescriptor(prototype, 'value');
                var inputSetter_1 = descriptor_1.set;
                descriptor_1.set = function (val) {
                    Object.defineProperty(input, "value", { set: inputSetter_1 });
                    input.value = val;
                    _this.setEmpty();
                    Object.defineProperty(input, "value", descriptor_1);
                };
                Object.defineProperty(input, "value", descriptor_1);
                this.input = input;
                this.setEmpty();
            }
        }
        TextField.prototype.setEmpty = function () {
            if (this.input.value) {
                this.element.classList.remove('empty');
            }
            else {
                this.element.classList.add('empty');
            }
        };
        TextField.initializeTextFields = function () {
            var textFields = document.querySelectorAll('.u-text-field');
            for (var i = 0; i < textFields.length; i++) {
                var textField = textFields[i];
                new TextField(textField);
            }
        };
        return TextField;
    }());
    umd.TextField = TextField;
})(umd || (umd = {}));
