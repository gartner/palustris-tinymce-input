'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TinyMCEInput = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tinymceReact = require('@tinymce/tinymce-react');

var _raCore = require('ra-core');

var _reactAdmin = require('react-admin');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * Based on aor-tinymce-input (https://github.com/LoicMahieu/aor-tinymce-input)
                                                                                                                                                                                                                              *
                                                                                                                                                                                                                              * and some nice info from here: https://github.com/marmelab/react-admin/issues/2631
                                                                                                                                                                                                                              */


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
        rest = _objectWithoutProperties(_ref, ['alwaysOn', 'basePath', 'component', 'defaultValue', 'formClassName', 'initializeForm', 'input', 'isRequired', 'label', 'locale', 'meta', 'options', 'optionText', 'optionValue', 'record', 'resource', 'allowEmpty', 'source', 'textAlign', 'translate', 'translateChoice', 'toolbar', 'menubar', 'plugins']);

    return rest;
};

var TinyMCEInput = exports.TinyMCEInput = function (_React$Component) {
    _inherits(TinyMCEInput, _React$Component);

    function TinyMCEInput() {
        _classCallCheck(this, TinyMCEInput);

        return _possibleConstructorReturn(this, (TinyMCEInput.__proto__ || Object.getPrototypeOf(TinyMCEInput)).apply(this, arguments));
    }

    _createClass(TinyMCEInput, [{
        key: 'handleBlur',
        value: function handleBlur(eventOrValue) {
            this.props.onBlur(eventOrValue);
            this.props.input.onBlur(eventOrValue);
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus(event) {
            this.props.onFocus(event);
            this.props.input.onFocus(event);
        }
    }, {
        key: 'handleChange',
        value: function handleChange(eventOrValue) {
            this.props.onChange(eventOrValue.target.getContent());
            this.props.input.onChange(eventOrValue.target.getContent());
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                input = _props.input,
                init = _props.init,
                isRequired = _props.isRequired,
                label = _props.label,
                meta = _props.meta,
                plugins = _props.plugins,
                toolbar = _props.toolbar,
                options = _props.options,
                className = _props.className,
                resource = _props.resource,
                source = _props.source,
                type = _props.type,
                config = _props.config,
                menubar = _props.menubar,
                rest = _objectWithoutProperties(_props, ['input', 'init', 'isRequired', 'label', 'meta', 'plugins', 'toolbar', 'options', 'className', 'resource', 'source', 'type', 'config', 'menubar']);

            if (typeof meta === 'undefined') {
                throw new Error("The TinyMCEInput component wasn't called within a redux-form <Field>. Did you decorate it and forget to add the addField prop to your component? See https://marmelab.com/react-admin/Inputs.html#writing-your-own-input-component for details.");
            }
            var touched = meta.touched,
                error = meta.error;

            var value = input.value || "";

            return _react2.default.createElement(
                _reactAdmin.Labeled,
                { label: label, isRequired: isRequired },
                _react2.default.createElement(_tinymceReact.Editor, {
                    init: init,
                    initialValue: value,
                    error: !!(touched && error),
                    plugins: plugins,
                    toolbar: toolbar,
                    onChange: function onChange(event) {
                        return _this2.handleChange(event);
                    }
                })
            );

            /*
                    return <TinyMCE
                        margin="normal"
                        type={type}
                        label={<FieldTitle label={label} source={source} resource={resource} isRequired={isRequired} />}
                        error={!!(touched && error)}
                        helperText={touched && error}
                        className={className}
                        config={{plugins, menubar, toolbar, ...options}}
                        content={value}
                        {...options}
                        {...input}
                        {...sanitizeRestProps(rest)}
                        onBlur={event=>this.handleBlur(event)}
                        onFocus={event=>this.handleFocus(event)}
                        onChange={event=>this.handleChange(event)}
                    />;*/
        }
    }]);

    return TinyMCEInput;
}(_react2.default.Component);

;

TinyMCEInput.propTypes = {
    className: _propTypes2.default.string,
    input: _propTypes2.default.object,
    init: _propTypes2.default.object,
    isRequired: _propTypes2.default.bool,
    label: _propTypes2.default.string,
    meta: _propTypes2.default.object,
    name: _propTypes2.default.string,
    onBlur: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    options: _propTypes2.default.object,
    resource: _propTypes2.default.string,
    source: _propTypes2.default.string,
    toolbar: _propTypes2.default.string,
    menubar: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
    plugins: _propTypes2.default.string
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
        plugins: "autolink code colorpicker fullscreen " + "image media link lists paste " + "preview table textcolor",
        menubar: "view edit insert format tools table", // See https://www.tiny.cloud/docs/advanced/editor-control-identifiers/
        toolbar: "undo redo | " + "styleselect | " + "bold italic | " + "fontselect | fontsizeselect | " + "alignleft aligncenter alignright alignjustify | " + "bullist numlist outdent indent | " + "link image | " + "forecolor backcolor",
        // images_upload_handler: this.onEditorImageUpload,
        plugin_preview_height: 650, // default: 500,
        plugin_preview_width: 845, // default: 650,
        style_formats: [{ title: "Subtitle", block: "h3" }, {
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

exports.default = (0, _raCore.addField)(TinyMCEInput);