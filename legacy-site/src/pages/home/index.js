import React, { Component, Fragment } from 'react';
import { Link } from 'gatsby';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes, importImages } from 'utils/core';

import { visualDatas } from 'datas/home';

import * as styles from './Home.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

const visualImagesSrc = importImages(require.context('./images/visual/', false, /\.(png|jpe?g|gif)$/));

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]);

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visualIndex: 0,
      visualPrevIndex: -1,
    };
  }

  updateVisualIndex = (visualIndex, visualPrevIndex) => {
    this.setState({
      visualIndex,
      visualPrevIndex,
    });
  };

  render() {
    const { updateVisualIndex, state } = this;
    const { visualIndex, visualPrevIndex } = state;

    return (
      <div className={cx('visual')}>
        <Swiper
          className={cx('visual__slider')}
          direction="vertical"
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            type: 'fraction',
            formatFractionCurrent: (num) => `${num < 10 ? '0' : ''}${num}`,
            formatFractionTotal: (num) => `${num < 10 ? '0' : ''}${num}`,
            renderFraction: (currentClass, totalClass) => `<div class="${currentClass}"></div><div class="${totalClass}"></div>`,
          }}
          scrollbar={{
            draggable: true,
          }}
          mousewheel
          speed={1000}
          onSlideChange={(swiper) => {
            updateVisualIndex(swiper.realIndex, swiper.previousIndex);
          }}
        >
          <button type="button" slot="container-start" className="swiper-button-prev">
            Prev
          </button>
          <button type="button" slot="container-start" className="swiper-button-next">
            Next
          </button>

          {visualDatas &&
            visualDatas.map((data) => (
              <SwiperSlide key={data.id}>
                {' '}
                {!data.hideDetail && (
                  <Link to={`/portfolio/detail/${data.id}`} className={cx('visual__link')}>
                    <span className="for-a11y">상세 보기</span>
                  </Link>
                )}
              </SwiperSlide>
            ))}

          <div slot="container-end" className={cx('visual__bg')}>
            {visualDatas &&
              visualDatas.map((data, i) => (
                <div
                  key={data.id}
                  className={cx('visual__bg__item', {
                    'is-active': i === visualIndex,
                    'is-prev-active': i === visualPrevIndex,
                  })}
                >
                  <div
                    className={cx('visual__bg__item__inner')}
                    style={
                      visualImagesSrc[data.id + '.jpg'] && {
                        backgroundImage: `url('${visualImagesSrc[data.id + '.jpg']}')`,
                      }
                    }
                  ></div>
                  <div
                    className={cx('visual__bg__item__inner', 'is-mobile')}
                    style={
                      visualImagesSrc[data.id + '-mobile.jpg'] && {
                        backgroundImage: `url('${visualImagesSrc[data.id + '-mobile.jpg']}')`,
                      }
                    }
                  ></div>
                </div>
              ))}
          </div>

          <ul slot="container-end" className={cx('visual__list')}>
            {visualDatas &&
              visualDatas.map((data, i) => (
                <li
                  key={data.id}
                  className={cx('visual__item', {
                    'is-active': i === visualIndex,
                    'is-prev-active': i === visualPrevIndex,
                  })}
                >
                  <div className={cx('visual__block')}>
                    <p className={cx('visual__title')}>
                      {data.topText.split('\n').map((line, i) => {
                        return (
                          <Fragment key={i}>
                            {i > 0 && ' '}
                            <span className={cx('visual__title__item')}>
                              <span className={cx('visual__title__item__inner')}>{line}</span>
                            </span>
                          </Fragment>
                        );
                      })}
                    </p>
                    <p className={cx('visual__year')}>
                      <span className="for-a11y">제작 년도 : </span>
                      {(() => {
                        const date = (() => {
                          const endDate = data.overview.date.end;
                          if (Array.isArray(endDate)) {
                            return endDate[endDate.length - 1];
                          } else if (typeof endDate === 'string') {
                            return endDate;
                          }
                        })();
                        return `20${date.replace(/^(\d+)\.\d+$/g, '$1')}`;
                      })()}
                    </p>
                    {/* {!data.hideDetail && (
                      <Link to={`/portfolio/detail/${data.id}`} className={cx('visual__link')}>
                        <span className="for-a11y">상세 보기</span>
                      </Link>
                    )} */}
                  </div>
                </li>
              ))}
          </ul>
        </Swiper>
      </div>
    );
  }
}

export default Home;
