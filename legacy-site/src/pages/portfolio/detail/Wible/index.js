import React, { Component } from 'react';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes, importImages } from 'utils/core';

import { PortfolioLayout, ScrollVideo } from 'components';

import data from 'datas/portfolio/Wible';

import Video from './images/wible.mp4';

import * as styles from './Wible.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

const imagesSrc = importImages(require.context('./images/', false, /\.(png|jpe?g|gif)$/));

class Wible extends Component {
  render() {
    return (
      <PortfolioLayout data={data} darkMode={true}>
        <div className={cx('contents')}>
          <img src={imagesSrc['pc_01.png']} alt="" className="is-pc-only" />
          <img src={imagesSrc['tablet_01.png']} alt="" className="is-tablet-only" />
          <img src={imagesSrc['mobile_01.png']} alt="" className="is-mobile-only" />
          <ScrollVideo>
            <video muted playsInline className={cx('video', 'v-size')}>
              <source src={Video} type="video/mp4" />
            </video>
          </ScrollVideo>
          <img src={imagesSrc['pc_02.png']} alt="" className="is-pc-only" />
          <img src={imagesSrc['pc_03.png']} alt="" className="is-pc-only" />
          <img src={imagesSrc['tablet_02.png']} alt="" className="is-tablet-only" />
          <img src={imagesSrc['tablet_03.png']} alt="" className="is-tablet-only" />
          <img src={imagesSrc['mobile_02.png']} alt="" className="is-mobile-only" />
          <img src={imagesSrc['mobile_03.png']} alt="" className="is-mobile-only" />
        </div>
      </PortfolioLayout>
    );
  }
}

export default Wible;
