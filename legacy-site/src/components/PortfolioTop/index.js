import React, { Component, Fragment } from 'react';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes } from 'utils/core';

import * as styles from './PortfolioTop.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

class PortfolioTop extends Component {
  render() {
    const { props } = this;
    const {
      data,
      children,
      classNames = {
        wrap: '',
        contents: '',
        title: '',
        phone: '',
        phone__object: '',
        phone__inner: '',
        phone__img: '',
        darkMode: '',
      },
      phoneImgSrc,
      darkMode,
    } = props;

    return (
      <div
        className={cx('wrap', classNames.wrap, {
          'is-dark': darkMode,
          [classNames.darkMode]: typeof classNames.darkMode === 'string' && classNames.darkMode.length && darkMode,
        })}
      >
        <div className={cx('contents', classNames.contents)}>
          <p className={cx('title', classNames.title)}>
            {data.topText.split('\n').map((line, i) => {
              return (
                <Fragment key={i}>
                  {i > 0 && <br />}
                  {line}
                </Fragment>
              );
            })}
          </p>
          {typeof phoneImgSrc === 'string' && (
            <div className={cx('phone', classNames.phone)}>
              <div className={cx('phone__object', classNames.phone__object)}>
                <div className={cx('phone__inner', classNames.phone__inner)}>
                  <img src={phoneImgSrc} alt="" className={cx('phone__img', classNames.phone__img)} />
                </div>
              </div>
            </div>
          )}
          {children}
        </div>
      </div>
    );
  }
}

export default PortfolioTop;
