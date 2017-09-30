'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderBemChild = renderBemChild;
exports.renderBemChildren = renderBemChildren;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _generateChildProps = require('../helpers/generateChildProps');

var _generateChildProps2 = _interopRequireDefault(_generateChildProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderBemChild(props, style) {
    var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    var childCount = _react2.default.Children.count(props.children);

    if (childCount === 0) {
        return null;
    }

    var child = childCount === 1 ? props.children : props.children[index];
    var bemProps = (0, _generateChildProps2.default)(props, style);

    return Object.keys(bemProps).length ? _react2.default.cloneElement(child, bemProps) : child;
}

function renderBemChildren(props, style) {
    return _react2.default.Children.map(props.children, function (child) {
        var bemProps = (0, _generateChildProps2.default)(props, style);

        return Object.keys(bemProps).length ? _react2.default.cloneElement(child, bemProps) : child;
    });
}