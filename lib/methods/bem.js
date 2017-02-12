'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = bem;

var _kebabCase = require('../helpers/kebabCase');

var _kebabCase2 = _interopRequireDefault(_kebabCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function bem(blockName, props, rules) {
    var blockNames = [blockName];

    if (props.blockName) {
        blockNames.push(props.blockName);
    }

    var styles = blockNames.map(function (block) {
        var parent = block.indexOf('__') > -1 ? block.split('__')[0] : null;
        var style = Object.assign({}, rules[block]);

        return Object.keys(props).reduce(function (obj, prop) {
            if (props[prop] && (prop.indexOf('M') === 0 || prop.indexOf('S') === 0)) {
                var modifier = prop.indexOf('M') === 0 ? '--' + (0, _kebabCase2.default)(prop, 1) + (props[prop] === true ? '' : '-' + props[prop]) : '';
                var state = prop.indexOf('S') === 0 ? '.' + (0, _kebabCase2.default)(prop, 1) : '';

                obj = Object.assign(style, rules['' + block + state + modifier]);

                if (parent && rules['' + parent + modifier + state + ' ' + block]) {
                    obj = Object.assign(obj, rules['' + parent + modifier + state + ' ' + block]);
                }
            }

            return obj;
        }, style);
    });

    return [].concat(_toConsumableArray(styles), [props.style || {}]);
}