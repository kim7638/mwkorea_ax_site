import React from 'react';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes } from 'utils/core';

import * as styles from './BasicTitle.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

const BasicTitle = (props) => {
  const {
    children,
    tagName = 'h3',
    classNames = {
      root: '',
      isEb: '',
    },
    type,
  } = props;
  const TagName = tagName;

  return (
    <TagName
      className={cx('title', classNames.root, {
        'is-eb': type === 'EB',
        [classNames.isEb]: type === 'EB',
      })}
    >
      {children}
    </TagName>
  );
};

export default BasicTitle;
