import React from 'react';
import style from './index.module.scss';

import {
    EuiFilePicker,
} from '@elastic/eui';

const UploadArea = () => {
    return (
        <EuiFilePicker
            className = {style['upload-area']}
            id="upload_area"
            initialPromptText="Upload your image to find landmarks by its image"
            onChange={(files) => {
                console.log(files);
            }}
            display='large'
            fullWidth = {true}
        />
    );
};

export default UploadArea;

