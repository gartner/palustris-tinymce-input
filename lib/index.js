"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TinyMCEInput = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tinymceReact = require("@tinymce/tinymce-react");

var _raCore = require("ra-core");

var _reactAdmin = require("react-admin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var sanitizeRestProps = function sanitizeRestProps(_ref) {
  var alwaysOn = _ref.alwaysOn,
      basePath = _ref.basePath,
      component = _ref.component,
      defaultValue = _ref.defaultValue,
      formClassName = _ref.formClassName,
      initializeForm = _ref.initializeForm,
      input = _ref.input,
      isRequired = _ref.isRequired,
      label = _ref.label,
      locale = _ref.locale,
      meta = _ref.meta,
      options = _ref.options,
      optionText = _ref.optionText,
      optionValue = _ref.optionValue,
      record = _ref.record,
      resource = _ref.resource,
      allowEmpty = _ref.allowEmpty,
      source = _ref.source,
      textAlign = _ref.textAlign,
      translate = _ref.translate,
      translateChoice = _ref.translateChoice,
      toolbar = _ref.toolbar,
      menubar = _ref.menubar,
      plugins = _ref.plugins,
      rest = _objectWithoutProperties(_ref, ["alwaysOn", "basePath", "component", "defaultValue", "formClassName", "initializeForm", "input", "isRequired", "label", "locale", "meta", "options", "optionText", "optionValue", "record", "resource", "allowEmpty", "source", "textAlign", "translate", "translateChoice", "toolbar", "menubar", "plugins"]);

  return rest;
};

var TinyMCEInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TinyMCEInput, _React$Component);

  function TinyMCEInput() {
    _classCallCheck(this, TinyMCEInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(TinyMCEInput).apply(this, arguments));
  }

  _createClass(TinyMCEInput, [{
    key: "handleBlur",
    value: function handleBlur(eventOrValue) {
      this.props.onBlur(eventOrValue);
      this.props.input.onBlur(eventOrValue);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(event) {
      this.props.onFocus(event);
      this.props.input.onFocus(event);
    }
  }, {
    key: "handleChange",
    value: function handleChange(eventOrValue) {
      this.props.onChange(eventOrValue.target.getContent());
      this.props.input.onChange(eventOrValue.target.getContent());
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          input = _this$props.input,
          init = _this$props.init,
          isRequired = _this$props.isRequired,
          label = _this$props.label,
          meta = _this$props.meta,
          plugins = _this$props.plugins,
          toolbar = _this$props.toolbar,
          options = _this$props.options,
          className = _this$props.className,
          resource = _this$props.resource,
          source = _this$props.source,
          type = _this$props.type,
          config = _this$props.config,
          menubar = _this$props.menubar,
          onChange = _this$props.onChange,
          rest = _objectWithoutProperties(_this$props, ["input", "init", "isRequired", "label", "meta", "plugins", "toolbar", "options", "className", "resource", "source", "type", "config", "menubar", "onChange"]);

      if (typeof meta === 'undefined') {
        throw new Error("The TinyMCEInput component wasn't called within a redux-form <Field>. Did you decorate it and forget to add the addField prop to your component? See https://marmelab.com/react-admin/Inputs.html#writing-your-own-input-component for details.");
      }

      var touched = meta.touched,
          error = meta.error;
      var value = input.value || "";
      return _react["default"].createElement(_reactAdmin.Labeled, {
        label: label,
        isRequired: isRequired
      }, _react["default"].createElement(_tinymceReact.Editor, _extends({
        init: init,
        initialValue: value,
        error: !!(touched && error),
        plugins: plugins,
        toolbar: toolbar,
        onChange: function onChange(event) {
          return _this.handleChange(event);
        }
      }, rest)));
    }
  }]);

  return TinyMCEInput;
}(_react["default"].Component);

exports.TinyMCEInput = TinyMCEInput;
TinyMCEInput.propTypes = {
  className: _propTypes["default"].string,
  input: _propTypes["default"].object,
  init: _propTypes["default"].object,
  isRequired: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  meta: _propTypes["default"].object,
  name: _propTypes["default"].string,
  onBlur: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  options: _propTypes["default"].object,
  resource: _propTypes["default"].string,
  source: _propTypes["default"].string,
  toolbar: _propTypes["default"].string,
  menubar: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].bool]),
  plugins: _propTypes["default"].string
};
TinyMCEInput.defaultProps = {
  onBlur: function onBlur() {},
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  options: {},
  init: {
    // The auto_focus property doesn't actually work at this time.
    // See hackToDisableAutoFocusOnTinyMCE comments.
    auto_focus: false,
    height: 512,
    content_style: "a { color: #53B7E8; text-decoration: none }",
    plugins: "autolink code colorpicker fullscreen " + "image media link lists paste " + "preview table textcolor help",
    menubar: "view edit insert format tools table help",
    // See https://www.tiny.cloud/docs/advanced/editor-control-identifiers/
    toolbar: "undo redo | " + "styleselect | " + "bold italic | " + "fontselect | fontsizeselect | " + "alignleft aligncenter alignright alignjustify | " + "bullist numlist outdent indent | " + "link image | " + "forecolor backcolor",
    // images_upload_handler: this.onEditorImageUpload,
    plugin_preview_height: 650,
    // default: 500,
    plugin_preview_width: 845,
    // default: 650,
    style_formats: [{
      title: "Subtitle",
      block: "h3"
    }, {
      title: "Button",
      inline: "span",
      styles: {
        "background-color": "#53B7E8",
        "border-radius": "5px",
        color: "white",
        display: "inline-block",
        padding: "12px 8px"
      }
    }]
  },
  toolbar: "",
  menubar: true,
  plugins: "",
  label: ""
};

var _default = (0, _raCore.addField)(TinyMCEInput);

exports["default"] = _default;