import React from 'react';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes } from 'utils/core';

import * as styles from './ContentsWrap.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

const ContentsWrap = (props) => {
  const { children, tagName = 'section', className } = props;
  const TagName = tagName;

  return <TagName className={cx('wrap', className)}>{children}</TagName>;
};

export default ContentsWrap;
