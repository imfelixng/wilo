import { EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import React from 'react';
import NotFound from './not-found';
import PredictInfo from './predict-info';
import SearchImage from './search-image';
import style from './index.module.scss';

const Result = () => {
    return (
        <EuiFlexGroup wrap gutterSize = "xl">
        <EuiFlexItem grow = {2}>
            <PredictInfo />
        </EuiFlexItem>
        <EuiFlexItem grow = {1} className = {style['search-image']}>
            <SearchImage/>
        </EuiFlexItem>
      </EuiFlexGroup>
    );
};

export default Result;