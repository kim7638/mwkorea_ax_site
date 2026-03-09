import React from 'react';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes } from 'utils/core';

import * as styles from './BasicSection.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

const BasicSection = (props) => {
  const { children, tagName = 'section', className } = props;
  const TagName = tagName;

  return <TagName className={cx('section', className)}>{children}</TagName>;
};

export default BasicSection;
