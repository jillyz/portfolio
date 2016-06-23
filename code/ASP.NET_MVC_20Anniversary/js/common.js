
/*  **************************************************************************** */

/*  Responsive Nav , http://responsive-nav.com/
/* class name: "fa fa-fw" , is for Font-Awesome icon as a "menu" icon

/*  **************************************************************************** */
!function (a, b, c) { "use strict"; var d = function (d, e) { var f = !!b.getComputedStyle; f || (b.getComputedStyle = function (a) { return this.el = a, this.getPropertyValue = function (b) { var c = /(\-([a-z]){1})/g; return "float" === b && (b = "styleFloat"), c.test(b) && (b = b.replace(c, function () { return arguments[2].toUpperCase() })), a.currentStyle[b] ? a.currentStyle[b] : null }, this }); var g, h, i, j, k, l, m = function (a, b, c, d) { if ("addEventListener" in a) try { a.addEventListener(b, c, d) } catch (e) { if ("object" != typeof c || !c.handleEvent) throw e; a.addEventListener(b, function (a) { c.handleEvent.call(c, a) }, d) } else "attachEvent" in a && ("object" == typeof c && c.handleEvent ? a.attachEvent("on" + b, function () { c.handleEvent.call(c) }) : a.attachEvent("on" + b, c)) }, n = function (a, b, c, d) { if ("removeEventListener" in a) try { a.removeEventListener(b, c, d) } catch (e) { if ("object" != typeof c || !c.handleEvent) throw e; a.removeEventListener(b, function (a) { c.handleEvent.call(c, a) }, d) } else "detachEvent" in a && ("object" == typeof c && c.handleEvent ? a.detachEvent("on" + b, function () { c.handleEvent.call(c) }) : a.detachEvent("on" + b, c)) }, o = function (a) { if (a.children.length < 1) throw new Error("The Nav container has no containing elements"); for (var b = [], c = 0; c < a.children.length; c++) 1 === a.children[c].nodeType && b.push(a.children[c]); return b }, p = function (a, b) { for (var c in b) a.setAttribute(c, b[c]) }, q = function (a, b) { 0 !== a.className.indexOf(b) && (a.className += " " + b, a.className = a.className.replace(/(^\s*)|(\s*$)/g, "")) }, r = function (a, b) { var c = new RegExp("(\\s|^)" + b + "(\\s|$)"); a.className = a.className.replace(c, " ").replace(/(^\s*)|(\s*$)/g, "") }, s = function (a, b, c) { for (var d = 0; d < a.length; d++) b.call(c, d, a[d]) }, t = a.createElement("style"), u = a.documentElement, v = function (b, c) { var d; this.options = { animate: !0, transition: 284, label: "<!-- --><span>選單</span>", insert: "before", customToggle: "", closeOnNavClick: !1, openPos: "relative", navClass: "nav-collapse", navActiveClass: "js-nav-active", jsClass: "js", init: function () { }, open: function () { }, close: function () { } }; for (d in c) this.options[d] = c[d]; if (q(u, this.options.jsClass), this.wrapperEl = b.replace("#", ""), a.getElementById(this.wrapperEl)) this.wrapper = a.getElementById(this.wrapperEl); else { if (!a.querySelector(this.wrapperEl)) throw new Error("The nav element you are trying to select doesn't exist"); this.wrapper = a.querySelector(this.wrapperEl) } this.wrapper.inner = o(this.wrapper), h = this.options, g = this.wrapper, this._init(this) }; return v.prototype = { destroy: function () { this._removeStyles(), r(g, "closed"), r(g, "opened"), r(g, h.navClass), r(g, h.navClass + "-" + this.index), r(u, h.navActiveClass), g.removeAttribute("style"), g.removeAttribute("aria-hidden"), n(b, "resize", this, !1), n(a.body, "touchmove", this, !1), n(i, "touchstart", this, !1), n(i, "touchend", this, !1), n(i, "mouseup", this, !1), n(i, "keyup", this, !1), n(i, "click", this, !1), h.customToggle ? i.removeAttribute("aria-hidden") : i.parentNode.removeChild(i) }, toggle: function () { j === !0 && (l ? this.close() : this.open()) }, open: function () { l || (r(g, "closed"), q(g, "opened"), q(u, h.navActiveClass), q(i, "active"), g.style.position = h.openPos, p(g, { "aria-hidden": "false" }), l = !0, h.open()) }, close: function () { l && (q(g, "closed"), r(g, "opened"), r(u, h.navActiveClass), r(i, "active"), p(g, { "aria-hidden": "true" }), h.animate ? (j = !1, setTimeout(function () { g.style.position = "absolute", j = !0 }, h.transition + 10)) : g.style.position = "absolute", l = !1, h.close()) }, resize: function () { "none" !== b.getComputedStyle(i, null).getPropertyValue("display") ? (k = !0, p(i, { "aria-hidden": "false" }), g.className.match(/(^|\s)closed(\s|$)/) && (p(g, { "aria-hidden": "true" }), g.style.position = "absolute"), this._createStyles(), this._calcHeight()) : (k = !1, p(i, { "aria-hidden": "true" }), p(g, { "aria-hidden": "false" }), g.style.position = h.openPos, this._removeStyles()) }, handleEvent: function (a) { var c = a || b.event; switch (c.type) { case "touchstart": this._onTouchStart(c); break; case "touchmove": this._onTouchMove(c); break; case "touchend": case "mouseup": this._onTouchEnd(c); break; case "click": this._preventDefault(c); break; case "keyup": this._onKeyUp(c); break; case "resize": this.resize(c) } }, _init: function () { this.index = c++, q(g, h.navClass), q(g, h.navClass + "-" + this.index), q(g, "closed"), j = !0, l = !1, this._closeOnNavClick(), this._createToggle(), this._transitions(), this.resize(); var d = this; setTimeout(function () { d.resize() }, 20), m(b, "resize", this, !1), m(a.body, "touchmove", this, !1), m(i, "touchstart", this, !1), m(i, "touchend", this, !1), m(i, "mouseup", this, !1), m(i, "keyup", this, !1), m(i, "click", this, !1), h.init() }, _createStyles: function () { t.parentNode || (t.type = "text/css", a.getElementsByTagName("head")[0].appendChild(t)) }, _removeStyles: function () { t.parentNode && t.parentNode.removeChild(t) }, _createToggle: function () { if (h.customToggle) { var b = h.customToggle.replace("#", ""); if (a.getElementById(b)) i = a.getElementById(b); else { if (!a.querySelector(b)) throw new Error("The custom nav toggle you are trying to select doesn't exist"); i = a.querySelector(b) } } else { var c = a.createElement("a"); c.innerHTML = h.label, p(c, { href: "#", "class": "nav-toggle /*fa fa-fw*/" }), "after" === h.insert ? g.parentNode.insertBefore(c, g.nextSibling) : g.parentNode.insertBefore(c, g), i = c } }, _closeOnNavClick: function () { if (h.closeOnNavClick && "querySelectorAll" in a) { var b = g.querySelectorAll("a"), c = this; s(b, function (a) { m(b[a], "click", function () { k && c.toggle() }, !1) }) } }, _preventDefault: function (a) { a.preventDefault ? (a.preventDefault(), a.stopPropagation()) : a.returnValue = !1 }, _onTouchStart: function (b) { b.stopPropagation(), "after" === h.insert && q(a.body, "disable-pointer-events"), this.startX = b.touches[0].clientX, this.startY = b.touches[0].clientY, this.touchHasMoved = !1, n(i, "mouseup", this, !1) }, _onTouchMove: function (a) { (Math.abs(a.touches[0].clientX - this.startX) > 10 || Math.abs(a.touches[0].clientY - this.startY) > 10) && (this.touchHasMoved = !0) }, _onTouchEnd: function (c) { if (this._preventDefault(c), !this.touchHasMoved) { if ("touchend" === c.type) return this.toggle(), "after" === h.insert && setTimeout(function () { r(a.body, "disable-pointer-events") }, h.transition + 300), void 0; var d = c || b.event; 3 !== d.which && 2 !== d.button && this.toggle() } }, _onKeyUp: function (a) { var c = a || b.event; 13 === c.keyCode && this.toggle() }, _transitions: function () { if (h.animate) { var a = g.style, b = "max-height " + h.transition + "ms"; a.WebkitTransition = b, a.MozTransition = b, a.OTransition = b, a.transition = b } }, _calcHeight: function () { for (var a = 0, b = 0; b < g.inner.length; b++) a += g.inner[b].offsetHeight; var c = "." + h.jsClass + " ." + h.navClass + "-" + this.index + ".opened{max-height:" + a + "px !important}"; t.styleSheet ? t.styleSheet.cssText = c : t.innerHTML = c, c = "" } }, new v(d, e) }; b.responsiveNav = d }(document, window, 0);


/*  **************************************************************************** */

/*  NProgress // Start 

/*  **************************************************************************** */


/*! NProgress (c) 2013, Rico Sta. Cruz
 *  http://ricostacruz.com/nprogress */

; (function (factory) {

    if (typeof module === 'function') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        this.NProgress = factory();
    }

})(function () {
    var NProgress = {};

    NProgress.version = '0.1.3';

    var Settings = NProgress.settings = {
        minimum: 0.08,
        easing: 'ease',
        positionUsing: '',
        speed: 200,
        trickle: true,
        trickleRate: 0.02,
        trickleSpeed: 800,
        showSpinner: true,
        barSelector: '[role="bar"]',
        spinnerSelector: '[role="spinner"]',
        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };

    /**
     * Updates configuration.
     *
     *     NProgress.configure({
     *       minimum: 0.1
     *     });
     */
    NProgress.configure = function (options) {
        var key, value;
        for (key in options) {
            value = options[key];
            if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
        }

        return this;
    };

    /**
     * Last number.
     */

    NProgress.status = null;

    /**
     * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
     *
     *     NProgress.set(0.4);
     *     NProgress.set(1.0);
     */

    NProgress.set = function (n) {
        var started = NProgress.isStarted();

        n = clamp(n, Settings.minimum, 1);
        NProgress.status = (n === 1 ? null : n);

        var progress = NProgress.render(!started),
            bar = progress.querySelector(Settings.barSelector),
            speed = Settings.speed,
            ease = Settings.easing;

        progress.offsetWidth; /* Repaint */

        queue(function (next) {
            // Set positionUsing if it hasn't already been set
            if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

            // Add transition
            css(bar, barPositionCSS(n, speed, ease));

            if (n === 1) {
                // Fade out
                css(progress, {
                    transition: 'none',
                    opacity: 1
                });
                progress.offsetWidth; /* Repaint */

                setTimeout(function () {
                    css(progress, {
                        transition: 'all ' + speed + 'ms linear',
                        opacity: 0
                    });
                    setTimeout(function () {
                        NProgress.remove();
                        next();
                    }, speed);
                }, speed);
            } else {
                setTimeout(next, speed);
            }
        });

        return this;
    };

    NProgress.isStarted = function () {
        return typeof NProgress.status === 'number';
    };

    /**
     * Shows the progress bar.
     * This is the same as setting the status to 0%, except that it doesn't go backwards.
     *
     *     NProgress.start();
     *
     */
    NProgress.start = function () {
        if (!NProgress.status) NProgress.set(0);

        var work = function () {
            setTimeout(function () {
                if (!NProgress.status) return;
                NProgress.trickle();
                work();
            }, Settings.trickleSpeed);
        };

        if (Settings.trickle) work();

        return this;
    };

    /**
     * Hides the progress bar.
     * This is the *sort of* the same as setting the status to 100%, with the
     * difference being `done()` makes some placebo effect of some realistic motion.
     *
     *     NProgress.done();
     *
     * If `true` is passed, it will show the progress bar even if its hidden.
     *
     *     NProgress.done(true);
     */

    NProgress.done = function (force) {
        if (!force && !NProgress.status) return this;

        return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
    };

    /**
     * Increments by a random amount.
     */

    NProgress.inc = function (amount) {
        var n = NProgress.status;

        if (!n) {
            return NProgress.start();
        } else {
            if (typeof amount !== 'number') {
                amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
            }

            n = clamp(n + amount, 0, 0.994);
            return NProgress.set(n);
        }
    };

    NProgress.trickle = function () {
        return NProgress.inc(Math.random() * Settings.trickleRate);
    };

    /**
     * Waits for all supplied jQuery promises and
     * increases the progress as the promises resolve.
     * 
     * @param $promise jQUery Promise
     */
    (function () {
        var initial = 0, current = 0;

        NProgress.promise = function ($promise) {
            if (!$promise || $promise.state() == "resolved") {
                return this;
            }

            if (current == 0) {
                NProgress.start();
            }

            initial++;
            current++;

            $promise.always(function () {
                current--;
                if (current == 0) {
                    initial = 0;
                    NProgress.done();
                } else {
                    NProgress.set((initial - current) / initial);
                }
            });

            return this;
        };

    })();

    /**
     * (Internal) renders the progress bar markup based on the `template`
     * setting.
     */

    NProgress.render = function (fromStart) {
        if (NProgress.isRendered()) return document.getElementById('nprogress');

        addClass(document.documentElement, 'nprogress-busy');

        var progress = document.createElement('div');
        progress.id = 'nprogress';
        progress.innerHTML = Settings.template;

        var bar = progress.querySelector(Settings.barSelector),
            perc = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
            spinner;

        css(bar, {
            transition: 'all 0 linear',
            transform: 'translate3d(' + perc + '%,0,0)'
        });

        if (!Settings.showSpinner) {
            spinner = progress.querySelector(Settings.spinnerSelector);
            spinner && removeElement(spinner);
        }

        document.body.appendChild(progress);
        return progress;
    };

    /**
     * Removes the element. Opposite of render().
     */

    NProgress.remove = function () {
        removeClass(document.documentElement, 'nprogress-busy');
        var progress = document.getElementById('nprogress');
        progress && removeElement(progress);
    };

    /**
     * Checks if the progress bar is rendered.
     */

    NProgress.isRendered = function () {
        return !!document.getElementById('nprogress');
    };

    /**
     * Determine which positioning CSS rule to use.
     */

    NProgress.getPositioningCSS = function () {
        // Sniff on document.body.style
        var bodyStyle = document.body.style;

        // Sniff prefixes
        var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                           ('MozTransform' in bodyStyle) ? 'Moz' :
                           ('msTransform' in bodyStyle) ? 'ms' :
                           ('OTransform' in bodyStyle) ? 'O' : '';

        if (vendorPrefix + 'Perspective' in bodyStyle) {
            // Modern browsers with 3D support, e.g. Webkit, IE10
            return 'translate3d';
        } else if (vendorPrefix + 'Transform' in bodyStyle) {
            // Browsers without 3D support, e.g. IE9
            return 'translate';
        } else {
            // Browsers without translate() support, e.g. IE7-8
            return 'margin';
        }
    };

    /**
     * Helpers
     */

    function clamp(n, min, max) {
        if (n < min) return min;
        if (n > max) return max;
        return n;
    }

    /**
     * (Internal) converts a percentage (`0..1`) to a bar translateX
     * percentage (`-100%..0%`).
     */

    function toBarPerc(n) {
        return (-1 + n) * 100;
    }


    /**
     * (Internal) returns the correct CSS for changing the bar's
     * position given an n percentage, and speed and ease from Settings
     */

    function barPositionCSS(n, speed, ease) {
        var barCSS;

        if (Settings.positionUsing === 'translate3d') {
            barCSS = { transform: 'translate3d(' + toBarPerc(n) + '%,0,0)' };
        } else if (Settings.positionUsing === 'translate') {
            barCSS = { transform: 'translate(' + toBarPerc(n) + '%,0)' };
        } else {
            barCSS = { 'margin-left': toBarPerc(n) + '%' };
        }

        barCSS.transition = 'all ' + speed + 'ms ' + ease;

        return barCSS;
    }

    /**
     * (Internal) Queues a function to be executed.
     */

    var queue = (function () {
        var pending = [];

        function next() {
            var fn = pending.shift();
            if (fn) {
                fn(next);
            }
        }

        return function (fn) {
            pending.push(fn);
            if (pending.length == 1) next();
        };
    })();

    /**
     * (Internal) Applies css properties to an element, similar to the jQuery 
     * css method.
     *
     * While this helper does assist with vendor prefixed property names, it 
     * does not perform any manipulation of values prior to setting styles.
     */

    var css = (function () {
        var cssPrefixes = ['Webkit', 'O', 'Moz', 'ms'],
            cssProps = {};

        function camelCase(string) {
            return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function (match, letter) {
                return letter.toUpperCase();
            });
        }

        function getVendorProp(name) {
            var style = document.body.style;
            if (name in style) return name;

            var i = cssPrefixes.length,
                capName = name.charAt(0).toUpperCase() + name.slice(1),
                vendorName;
            while (i--) {
                vendorName = cssPrefixes[i] + capName;
                if (vendorName in style) return vendorName;
            }

            return name;
        }

        function getStyleProp(name) {
            name = camelCase(name);
            return cssProps[name] || (cssProps[name] = getVendorProp(name));
        }

        function applyCss(element, prop, value) {
            prop = getStyleProp(prop);
            element.style[prop] = value;
        }

        return function (element, properties) {
            var args = arguments,
                prop,
                value;

            if (args.length == 2) {
                for (prop in properties) {
                    value = properties[prop];
                    if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
                }
            } else {
                applyCss(element, args[1], args[2]);
            }
        }
    })();

    /**
     * (Internal) Determines if an element or space separated list of class names contains a class name.
     */

    function hasClass(element, name) {
        var list = typeof element == 'string' ? element : classList(element);
        return list.indexOf(' ' + name + ' ') >= 0;
    }

    /**
     * (Internal) Adds a class to an element.
     */

    function addClass(element, name) {
        var oldList = classList(element),
            newList = oldList + name;

        if (hasClass(oldList, name)) return;

        // Trim the opening space.
        element.className = newList.substring(1);
    }

    /**
     * (Internal) Removes a class from an element.
     */

    function removeClass(element, name) {
        var oldList = classList(element),
            newList;

        if (!hasClass(element, name)) return;

        // Replace the class name.
        newList = oldList.replace(' ' + name + ' ', ' ');

        // Trim the opening and closing spaces.
        element.className = newList.substring(1, newList.length - 1);
    }

    /**
     * (Internal) Gets a space separated list of the class names on the element. 
     * The list is wrapped with a single space on each end to facilitate finding 
     * matches within the list.
     */

    function classList(element) {
        return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
    }

    /**
     * (Internal) Removes an element from the DOM.
     */

    function removeElement(element) {
        element && element.parentNode && element.parentNode.removeChild(element);
    }

    return NProgress;
});


/*  NProgress // END *********************************************************** */
/*  **************************************************************************** */

