'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = kebabCase;
function kebabCase(prop) {
    var slice = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    return prop.slice(slice).replace(/([A-Z]|(\d{1})+)/g, '-$1').toLowerCase();
}