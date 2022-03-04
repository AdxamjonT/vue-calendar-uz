(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global = global || self, (global.DatePicker = global.DatePicker || {}, global.DatePicker.lang = global.DatePicker.lang || {}, global.DatePicker.lang.uz = factory()));
}(this, (function () { 'use strict';

    function unwrapExports (x) {
        return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
        return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var uz = createCommonjsModule(function (module, exports) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports["default"] = void 0;
        var locale = {
            months: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabrr'],
            monthsShort: ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            weekdays: ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba'],
            weekdaysShort: ['Dsh', 'Se', 'Chor', 'Pay', 'Jum', 'Shn', 'Yak'],
            weekdaysMin: ['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya'],
            firstDayOfWeek: 0,
            firstWeekContainsDate: 1
        };
        var _default = locale;
        exports["default"] = _default;
        module.exports = exports.default;
    });

    var uz$1 = unwrapExports(uz);

    var lang = {
        formatLocale: uz$1,
        yearFormat: 'YYYY',
        monthFormat: 'MMM',
        monthBeforeYear: true
    };

    return lang;

})));
