# `<TinyMCEInput>` for react-admin

<TinyMCEInput> component for react-admin, useful for editing HTML in admin GUIs.

Binding of [`<Editor />`](https://github.com/tinymce/tinymce-react) for [react-admin](https://marmelab.com/react-admin/).

This is a fork of [aor-tinymce-input](https://github.com/LoicMahieu/aor-tinymce-input), changed to use the official tinyMCE react-integration.

## Installation

```sh
npm install @palustris/tinymce-input --save
```

or 

```sh
yarn add @palustris/tinymce-input
```

## Usage

```js
import React from 'react';
import {SimpleForm, Edit, TextInput } from 'ra-ui-materialui';
import 'tinymce/themes/modern/theme';
import 'tinymce/skins/lightgray/skin.min.css';

import TinyMCEInput from '@palustris/tinymce-input

export const PostEdit = props=> (
    <Edit>
        <SimpleForm>
            <TextInput source="title" />
            <TinyMCEInput source="content" plugins={["code"]} />
        </SimpleForm>
    </Edit>
);
```

## License

This library is licensed under the [MIT Licence](LICENSE)
