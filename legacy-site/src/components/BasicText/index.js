import React from 'react';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes } from 'utils/core';

import * as styles from './BasicText.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

const BasicText = (props) => {
  const { children, tagName = 'p', className } = props;
  const TagName = tagName;

  return <TagName className={cx('text', className)}>{children}</TagName>;
};

export default BasicText;
