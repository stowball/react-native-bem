'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderBemChildren = exports.renderBemChild = undefined;

var _bem = require('./methods/bem');

var _bem2 = _interopRequireDefault(_bem);

var _renderBemChildren = require('./methods/renderBemChildren');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _bem2.default;
exports.renderBemChild = _renderBemChildren.renderBemChild;
exports.renderBemChildren = _renderBemChildren.renderBemChildren;