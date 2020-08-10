"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _react = _interopRequireDefault(require("react"));

var _reactXarrows = _interopRequireDefault(require("react-xarrows"));

var _Box = _interopRequireDefault(require("./components/Box"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

require("./styles.css");

let _ = t => t,
    _t,
    _t2,
    _t3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Container = _styledComponents.default.div(_t || (_t = _`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`));

const Items = _styledComponents.default.div(_t2 || (_t2 = _`
  display: flex;
  flex-direction: column;
`));

const Title = _styledComponents.default.p(_t3 || (_t3 = _`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`));

function App(_ref) {
  let {
    arrows,
    setArrows,
    defaultCsvTitle,
    userCsvTitle,
    defaultCsv,
    userCsv
  } = _ref,
      props = _objectWithoutProperties(_ref, ["arrows", "setArrows", "defaultCsvTitle", "userCsvTitle", "defaultCsv", "userCsv"]);

  const addArrow = ({
    start,
    end
  }) => {
    arrows.forEach((item, index) => {
      if (item.start === start || item.end === end) {
        arrows.splice(index, 1);
        return;
      }
    });
    setArrows([...arrows, {
      start,
      end
    }]);
  };

  const removeArrow = ({
    start,
    end
  }) => {
    arrows.forEach((item, index) => {
      if (item.start === start && item.end === end) {
        arrows.splice(index, 1);
        return;
      }
    });
    setArrows([...arrows]);
  };

  return /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(Items, null, /*#__PURE__*/_react.default.createElement(Title, null, defaultCsvTitle || 'Default CSV'), defaultCsv.map((item, index) => /*#__PURE__*/_react.default.createElement(_Box.default, _extends({
    key: index,
    text: item.column_name,
    addArrow: addArrow,
    handler: 'right',
    boxId: `default-${item.column_id}`,
    isRequired: item.required
  }, props)))), /*#__PURE__*/_react.default.createElement(Items, null, /*#__PURE__*/_react.default.createElement(Title, null, userCsvTitle || 'User CSV'), userCsv.map((item, index) => /*#__PURE__*/_react.default.createElement(_Box.default, _extends({
    key: index,
    text: item.column_name,
    addArrow: addArrow,
    handler: 'left',
    boxId: `user-${item.column_id}`
  }, props)))), arrows.map((ar, index) => /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => removeArrow(ar),
    key: index,
    style: {
      position: 'absolute'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactXarrows.default, _extends({
    color: '#8652e3',
    headSize: 5,
    strokeWidth: 4,
    start: ar.start,
    end: ar.end
  }, props)))));
}