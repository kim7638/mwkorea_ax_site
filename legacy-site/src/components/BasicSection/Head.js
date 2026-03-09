import React from 'react';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes } from 'utils/core';

import * as styles from './BasicSection.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

const Head = (props) => {
  const { children, className } = props;

  return <div className={cx('head', className)}>{children}</div>;
};

export default Head;
