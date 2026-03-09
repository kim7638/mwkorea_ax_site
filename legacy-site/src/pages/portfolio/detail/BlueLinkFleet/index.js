import React, { Component } from 'react';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes, importImages } from 'utils/core';

import { PortfolioLayout } from 'components';

import data from 'datas/portfolio/BlueLinkFleet';

import * as styles from './BlueLinkFleet.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

const imagesSrc = importImages(require.context('./images/', false, /\.(png|jpe?g|gif)$/));

class BlueLinkFleet extends Component {
  render() {
    return (
      <PortfolioLayout data={data} darkMode={true}>
        <div className={cx('contents')}>
          <img src={imagesSrc['pc_01.png']} alt="" className="is-pc-only" />
          <img src={imagesSrc['pc_02.png']} alt="" className="is-pc-only" />
          <img src={imagesSrc['pc_03.png']} alt="" className="is-pc-only" />
          <img src={imagesSrc['pc_04.png']} alt="" className="is-pc-only" />
          <img src={imagesSrc['pc_05.png']} alt="" className="is-pc-only" />
          <img src={imagesSrc['pc_06.png']} alt="" className="is-pc-only" />
          <img src={imagesSrc['pc_07.png']} alt="" className="is-pc-only" />
          <img src={imagesSrc['tablet_01.png']} alt="" className="is-tablet-only" />
          <img src={imagesSrc['tablet_02.png']} alt="" className="is-tablet-only" />
          <img src={imagesSrc['tablet_03.png']} alt="" className="is-tablet-only" />
          <img src={imagesSrc['tablet_04.png']} alt="" className="is-tablet-only" />
          <img src={imagesSrc['tablet_05.png']} alt="" className="is-tablet-only" />
          <img src={imagesSrc['tablet_06.png']} alt="" className="is-tablet-only" />
          <img src={imagesSrc['tablet_07.png']} alt="" className="is-tablet-only" />
          <img src={imagesSrc['mobile_01.png']} alt="" className="is-mobile-only" />
          <img src={imagesSrc['mobile_02.png']} alt="" className="is-mobile-only" />
          <img src={imagesSrc['mobile_03.png']} alt="" className="is-mobile-only" />
          <img src={imagesSrc['mobile_04.png']} alt="" className="is-mobile-only" />
          <img src={imagesSrc['mobile_05.png']} alt="" className="is-mobile-only" />
          <img src={imagesSrc['mobile_06.png']} alt="" className="is-mobile-only" />
          <img src={imagesSrc['mobile_07.png']} alt="" className="is-mobile-only" />
        </div>
      </PortfolioLayout>
    );
  }
}

export default BlueLinkFleet;
