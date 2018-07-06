'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = bem;

var _kebabCase = require('../helpers/kebabCase');

var _kebabCase2 = _interopRequireDefault(_kebabCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function bem(selector, props, rules) {
    var parentName = selector.indexOf('__') > -1 ? selector.split('__')[0] : null;

    var styles = Object.keys(props).reduce(function (arr, prop) {
        if (props[prop] && (prop.indexOf('M') === 0 || prop.indexOf('S') === 0)) {
            var modifier = prop.indexOf('M') === 0 ? '--' + (0, _kebabCase2.default)(prop, 1) + (props[prop] === true ? '' : '-' + props[prop]) : '';
            var state = prop.indexOf('S') === 0 ? '.' + (0, _kebabCase2.default)(prop, 1) : '';

            arr.push(rules['' + selector + state + modifier]);

            if (parentName) {
                arr.push(rules['' + parentName + modifier + state + ' ' + selector]);
            }
        }

        return arr;
    }, [rules[selector]]);

    return [].concat(_toConsumableArray(styles), [!parentName && props.style]).filter(Boolean);
}