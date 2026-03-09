import React, { Component } from 'react';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes, importImages } from 'utils/core';

import { PortfolioLayout } from 'components';

import data from 'datas/portfolio/HanaCardMulti';

import * as styles from './HanaCardMulti.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

const imagesSrc = importImages(require.context('./images/', false, /\.(png|jpe?g|gif)$/));

class HanaCardMulti extends Component {
  render() {
    return (
      <PortfolioLayout data={data}>
        <div className={cx('contents')}>
          <img src={imagesSrc['pc-1.jpg']} alt="" className="is-pc-only" />
          <img src={imagesSrc['pc-2.jpg']} alt="" className="is-pc-only" />
          <img src={imagesSrc['pc-3.jpg']} alt="" className="is-pc-only" />
          <img src={imagesSrc['tablet-1.jpg']} alt="" className="is-tablet-only" />
          <img src={imagesSrc['tablet-2.jpg']} alt="" className="is-tablet-only" />
          <img src={imagesSrc['tablet-3.jpg']} alt="" className="is-tablet-only" />
          <img src={imagesSrc['tablet-4.jpg']} alt="" className="is-tablet-only" />
          <img src={imagesSrc['mobile-1.jpg']} alt="" className="is-mobile-only" />
          <img src={imagesSrc['mobile-2.jpg']} alt="" className="is-mobile-only" />
          <img src={imagesSrc['mobile-3.jpg']} alt="" className="is-mobile-only" />
          <img src={imagesSrc['mobile-4.jpg']} alt="" className="is-mobile-only" />
          <img src={imagesSrc['mobile-5.jpg']} alt="" className="is-mobile-only" />
        </div>
      </PortfolioLayout>
    );
  }
}

export default HanaCardMulti;
