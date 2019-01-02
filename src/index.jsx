/**
 * Based on aor-tinymce-input (https://github.com/LoicMahieu/aor-tinymce-input)
 *
 * and some nice info from here: https://github.com/marmelab/react-admin/issues/2631
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Editor} from '@tinymce/tinymce-react';
import {addField, FieldTitle} from 'ra-core';
import { Labeled } from 'react-admin';

const sanitizeRestProps = ({
                               alwaysOn,
                               basePath,
                               component,
                               defaultValue,
                               formClassName,
                               initializeForm,
                               input,
                               isRequired,
                               label,
                               locale,
                               meta,
                               options,
                               optionText,
                               optionValue,
                               record,
                               resource,
                               allowEmpty,
                               source,
                               textAlign,
                               translate,
                               translateChoice,
                               toolbar,
                               menubar,
                               plugins,
                               ...rest
                           }) => rest;


export class TinyMCEInput extends React.Component {
    handleBlur(eventOrValue) {
        this.props.onBlur(eventOrValue);
        this.props.input.onBlur(eventOrValue);
    }

    handleFocus(event) {
        this.props.onFocus(event);
        this.props.input.onFocus(event);
    }

    handleChange(eventOrValue) {
        this.props.onChange(eventOrValue.target.getContent());
        this.props.input.onChange(eventOrValue.target.getContent());
    };

    render() {
        const {
            input,
            init,
            isRequired,
            label,
            meta,
            plugins,
            toolbar,
            options,
            className,
            resource,
            source,
            type,
            config,
            menubar,
            ...rest
        } = this.props;
        if (typeof meta === 'undefined') {
            throw new Error(
                "The TinyMCEInput component wasn't called within a redux-form <Field>. Did you decorate it and forget to add the addField prop to your component? See https://marmelab.com/react-admin/Inputs.html#writing-your-own-input-component for details."
            );
        }
        const {touched, error} = meta;
        const value = input.value || "";

        return <Labeled label={label} isRequired={isRequired}>
            <Editor
                init={init}
                initialValue={value}
                error={!!(touched && error)}
                plugins={plugins}
                toolbar={toolbar}
                onChange={event => this.handleChange(event)}
            />
        </Labeled>

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
};

TinyMCEInput.propTypes = {
    className: PropTypes.string,
    input: PropTypes.object,
    init: PropTypes.object,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    meta: PropTypes.object,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    options: PropTypes.object,
    resource: PropTypes.string,
    source: PropTypes.string,
    toolbar: PropTypes.string,
    menubar: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    plugins: PropTypes.string
};

TinyMCEInput.defaultProps = {
    onBlur: () => {
    },
    onChange: () => {
    },
    onFocus: () => {
    },
    options: {},
    init: {
        // The auto_focus property doesn't actually work at this time.
        // See hackToDisableAutoFocusOnTinyMCE comments.
        auto_focus: false,
        height: 512,
        content_style: "a { color: #53B7E8; text-decoration: none }",
        plugins: "autolink code colorpicker fullscreen " + "image media link lists paste " + "preview table textcolor",
        menubar: "view edit insert format tools table", // See https://www.tiny.cloud/docs/advanced/editor-control-identifiers/
        toolbar: "undo redo | " +
            "styleselect | " +
            "bold italic | " +
            "fontselect | fontsizeselect | " +
            "alignleft aligncenter alignright alignjustify | " + "bullist numlist outdent indent | " + "link image | " + "forecolor backcolor",
       // images_upload_handler: this.onEditorImageUpload,
        plugin_preview_height: 650, // default: 500,
        plugin_preview_width: 845, // default: 650,
        style_formats: [
            {title: "Subtitle", block: "h3"},
            {
                title: "Button",
                inline: "span",
                styles: {
                    "background-color": "#53B7E8",
                    "border-radius": "5px",
                    color: "white",
                    display: "inline-block",
                    padding: "12px 8px",
                },
            },
        ],
    },
    toolbar: "",
    menubar: true,
    plugins: ""
};

export default addField(TinyMCEInput);

