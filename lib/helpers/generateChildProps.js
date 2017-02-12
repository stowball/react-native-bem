'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = generateChildProps;
// flow
function generateChildProps(props, style) {
    var childProps = Object.keys(props).reduce(function (obj, prop) {
        if (prop.indexOf('M') === 0 || prop.indexOf('S') === 0) {
            obj[prop] = props[prop];
        }

        return obj;
    }, {});

    if (style) {
        childProps.style = style;
    }

    return childProps;
}