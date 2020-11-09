import { EuiImage, EuiSpacer, EuiText, EuiTitle } from '@elastic/eui';
import React from 'react';

const PredictInfo = () => {
    return (
        <div>
            <EuiTitle size="m">
                <h3>
                    <span style = {{ fontWeight: 'bolder' }}>Predict</span>: Linh Phong Bao Thap
                </h3>
            </EuiTitle>

            <EuiText>
                <h4 style={{ fontWeight: 'normal' }}>
                    Location: Da Nang city, Vietnam
                </h4>
            </EuiText>
            <EuiSpacer size = "xl"/>
            <EuiText>
                <h4 style={{ fontWeight: 'normal' }}>
                    Original Image
                </h4>
            </EuiText>
            <EuiSpacer size = "m"/>
            <EuiImage
                hasShadow
                allowFullScreen
                alt="Original image"
                url="https://source.unsplash.com/1000x1000/?Nature"
            />
        </div>
    );
};

export default PredictInfo;
