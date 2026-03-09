import React, { Component, Fragment } from 'react';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes } from 'utils/core';

import { ContentsWrap, Footer } from 'components';

import * as styles from './NotFound.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

class NotFound extends Component {
  render() {
    return (
      <Fragment>
        <ContentsWrap>
          <h2 className={cx('title')}>Error!</h2>
          <div className={cx('code')}>404</div>
          <p className={cx('text')}>Page Not Found!</p>
        </ContentsWrap>

        <Footer />
      </Fragment>
    );
  }
}

export default NotFound;
