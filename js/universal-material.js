var Ripple = /** @class */ (function () {
    function Ripple(element) {
        var _this = this;
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
    Ripple.prototype.createRipple = function (rippleContainer, releaseEventName, releaseCallback, pageX, pageY) {
        var rippleWrapper = document.createElement('DIV');
        rippleWrapper.classList.add('ripple-wrapper');
        var ripple = document.createElement('DIV');
        ripple.classList.add('ripple');
        rippleWrapper.appendChild(ripple);
        rippleContainer.insertAdjacentElement('afterbegin', rippleWrapper);
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
            var rippleSize = largestDimensionSize * 2;
            ripple.style.width = rippleSize + 'px';
            ripple.style.height = rippleSize + 'px';
            ripple.style.marginLeft = -rippleSize / 2 + 'px';
            ripple.style.marginTop = -rippleSize / 2 + 'px';
            ripple.style.transitionDuration = (1080 * Math.pow(rippleSize, 0.3)) + 'ms, 750ms';
            var x = (pageX - clientRect.left) + ((rippleSize - rippleContainer.clientWidth) / 2);
            var y = (pageY - clientRect.top) + ((rippleSize - rippleContainer.clientHeight) / 2);
            ripple.style.transformOrigin = x + "px " + y + "px";
            ripple.classList.add('show');
        });
    };
    Ripple.initializeRipples = function () {
        var rippleContainers = document.querySelectorAll(Ripple.rippleContainersSelectors);
        rippleContainers.forEach(function (rippleContainer) {
            new Ripple(rippleContainer);
        });
    };
    Ripple.rippleContainersSelectors = [
        '.btn',
        '.btn-flat',
        '.btn-borderless',
        '.btn-solid',
        '.btn-raised',
        '.btn-outline',
        '.list-hover .list-item',
        '.list-item .list-item-hover',
        '.tab',
        '.dropdown-item',
        '.radio .selection-control',
        '.checkbox .selection-control',
        '.switch .check-indicator',
        '.chip-remove',
        '.chip-hover'
    ].join(',');
    return Ripple;
}());
var TextField = /** @class */ (function () {
    function TextField(element) {
        var _this = this;
        var input = element.querySelector('input.text-input')
            || element.querySelector('textarea.text-input')
            || element.querySelector('.text-input input')
            || element.querySelector('.text-input textarea');
        if (input) {
            input.addEventListener('focus', function () {
                element.classList.add('focus');
            });
            input.addEventListener('blur', function () {
                element.classList.remove('focus');
            });
            input.addEventListener('input', function () {
                _this.setEmpty();
            });
        }
        this.input = input;
        this.element = element;
        this.setEmpty();
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
        var textFields = document.querySelectorAll('.text-field');
        for (var i = 0; i < textFields.length; i++) {
            var textField = textFields[i];
            new TextField(textField);
        }
    };
    return TextField;
}());

//# sourceMappingURL=universal-material.js.map
