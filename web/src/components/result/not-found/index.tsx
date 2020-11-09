import { EuiEmptyPrompt } from '@elastic/eui';
import React from 'react';

const NotFound = () => {
    return (
        <EuiEmptyPrompt
            iconType="faceSad"
            iconColor="red"
            title={<h2>0 matches</h2>}
            body={
                <p>
                    Sorry, we did not find a match for your search image. This is likely because we has no data where this image appears.
                </p>
            }
        />
    );
};

export default NotFound;