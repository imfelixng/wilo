import { EuiImage, EuiSpacer } from '@elastic/eui';
import React from 'react';

const SearchImage = () => {
    return (
        <div>
            <h3>Your Search Image</h3>
            <EuiSpacer />
            <EuiImage
                size="fullWidth"
                hasShadow
                alt="Search image"
                url="https://picsum.photos/300/300"
                style ={{
                    maxWidth: 500,
                    margin: 'auto',
                    display: 'flex'
                }}
            />
        </div>
    );
};

export default SearchImage;