import React from 'react';
import style from './index.module.scss';

import {
  EuiHeader,
  EuiHeaderSectionItem,
  EuiHeaderLogo,
} from '@elastic/eui';

const Header = () => {
  return (
    <div>
      <EuiHeader >
        <EuiHeaderSectionItem border = "none" className = {style['header']}>
          <EuiHeaderLogo>Wilo</EuiHeaderLogo>
        </EuiHeaderSectionItem>
      </EuiHeader>
    </div>
  );
};

export default Header;