import React from 'react';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes } from 'utils/core';

import * as styles from './DataList.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

const DataList = (props) => {
  const {
    data,
    classNames = {
      wrap: '',
      list: '',
      item: '',
      key: '',
      val: '',
    },
  } = props;

  return (
    <div className={cx('wrap', classNames.wrap)}>
      <div className={cx('list', classNames.list)}>
        {data.map((item) => (
          <dl key={item.key} className={cx('item', classNames.item)}>
            <dt className={cx('key', classNames.key)}>{item.key}</dt>
            <dd className={cx('val', classNames.val)}>{item.val}</dd>
          </dl>
        ))}
      </div>
    </div>
  );
};

export default DataList;
