"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ConnectPointsWrapper;

var _react = _interopRequireWildcard(require("react"));

var _reactXarrows = _interopRequireDefault(require("react-xarrows"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const connectPointStyle = {
  position: "absolute",
  width: 15,
  height: 15,
  borderRadius: "50%",
  background: "black"
};
const connectPointOffset = {
  left: {
    left: 0,
    top: "50%",
    transform: "translate(-50%, -50%)"
  },
  right: {
    left: "100%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  },
  top: {
    left: "50%",
    top: 0,
    transform: "translate(-50%, -50%)"
  },
  bottom: {
    left: "50%",
    top: "100%",
    transform: "translate(-50%, -50%)"
  }
};

function ConnectPointsWrapper(_ref) {
  let {
    boxId,
    handler,
    ref0
  } = _ref,
      props = _objectWithoutProperties(_ref, ["boxId", "handler", "ref0"]);

  const ref1 = (0, _react.useRef)();
  const [position, setPosition] = (0, _react.useState)({});
  const [beingDragged, setBeingDragged] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "connectPoint",
    style: _objectSpread(_objectSpread(_objectSpread({}, connectPointStyle), connectPointOffset[handler]), position),
    draggable: handler === 'right' || handler === 'bottom',
    onDragStart: e => {
      setBeingDragged(true);
      e.dataTransfer.setData("arrow", boxId);
    },
    onDrag: e => {
      setPosition({
        position: "fixed",
        left: e.clientX,
        top: e.clientY,
        transform: "none",
        opacity: 0
      });
    },
    ref: ref1,
    onDragEnd: e => {
      setPosition({});
      setBeingDragged(false);
    }
  }), beingDragged ? /*#__PURE__*/_react.default.createElement(_reactXarrows.default, _extends({
    color: '#8652e3',
    headSize: 5,
    strokeWidth: 4,
    start: ref0,
    end: ref1
  }, props)) : null);
}

;