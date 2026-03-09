import React, { Component } from 'react';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes, importImages } from 'utils/core';
import { PortfolioLayout, PortfolioTop, PortfolioOverview, ContentsWrap, ScrollViewClass } from 'components';

import { Autoplay, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import data from 'datas/portfolio/KiaBizPromotion';
import * as styles from './KiaBizPromotion.module.scss';

styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);
const imagesSrc = importImages(require.context('./images/', true, /\.(png|jpe?g|gif)$/));

class KiaBizPromotion extends Component {
  render() {
    return (
      <PortfolioLayout data={data} darkMode={true}>
        <PortfolioTop
          data={data}
          classNames={{
            wrap: cx('top-wrap'),
          }}
          darkMode={true}
        />

        <PortfolioOverview
          data={data.overview}
          classNames={{
            section: cx('overview'),
            description: cx('overview__description'),
          }}
        />

        <div className={cx('display-pc')}>
          <Swiper
            modules={[Autoplay, FreeMode]}
            loop
            slidesPerView="auto"
            speed={20000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            freeMode={{
              enabled: true,
              momentum: false,
            }}
            allowTouchMove={false}
            breakpoints={{
              0: {
                spaceBetween: 0,
              },
              768: {
                spaceBetween: 16,
              },
              1421: {
                spaceBetween: 40,
              },
            }}
            className={cx('display-pc__content')}
          >
            <SwiperSlide className={cx('display-pc__item')}>
              <img src={imagesSrc['img-display-pc1.png']} alt="기아비즈 pc step1 이미지" />
            </SwiperSlide>
            <SwiperSlide className={cx('display-pc__item')}>
              <img src={imagesSrc['img-display-pc2.png']} alt="기아비즈 pc step3 이미지" />
            </SwiperSlide>
            <SwiperSlide className={cx('display-pc__item')}>
              <img src={imagesSrc['img-display-pc3.png']} alt="기아비즈 pc step2 이미지" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={cx('design-system')}>
          <ContentsWrap className={cx('design-system__content')}>
            <ScrollViewClass>
              <div className={cx('font')}>
                <div className={cx('font__title')}>KIA Signiture</div>
                <div className={cx('font__sample')}>
                  <span className={cx('font__sample-text')}>가</span>
                  <span className={cx('font__sample-text')}>Aa</span>
                </div>
              </div>

              <div className={cx('palette')}>
                <div className={cx('palette__item', 'is-midnight-black')}>
                  <span className={cx('palette__text')}>KIA Midnight Black</span>
                  <span className={cx('palette__code')}>#05141F</span>
                </div>
                <div className={cx('palette__item', 'is-polar-white')}>
                  <span className={cx('palette__text')}>KIA Polar White</span>
                  <span className={cx('palette__code')}>#FFFFFF</span>
                </div>
                <div className={cx('palette__item', 'is-business')}>
                  <span className={cx('palette__text')}>Business</span>
                  <span className={cx('palette__code')}>#1A7DFF</span>
                </div>
                <div className={cx('palette__item', 'is-sharing')}>
                  <span className={cx('palette__text')}>Sharing</span>
                  <span className={cx('palette__code')}>#32A26A</span>
                </div>
              </div>
            </ScrollViewClass>
          </ContentsWrap>
        </div>

        <div className={cx('display-mo')}>
          <ScrollViewClass className={cx('display-mo__content')}>
            <ul className={cx('display-mo__items')}>
              <li className={cx('display-mo__item')}>
                <img src={imagesSrc['img-display-mo1.png']} alt="기아비즈 모바일 step1 이미지" />
              </li>
              <li className={cx('display-mo__item')}>
                <img src={imagesSrc['img-display-mo2.png']} alt="기아비즈 모바일 step2 이미지" />
              </li>
              <li className={cx('display-mo__item')}>
                <img src={imagesSrc['img-display-mo3.png']} alt="기아비즈 모바일 step3 이미지" />
              </li>
            </ul>
          </ScrollViewClass>
        </div>

        <div className={cx('design', 'design-main')}>
          <ScrollViewClass className={cx('design__content')}>
            <div className={cx('design__content-img', 'design-main__pc')}>
              <img src={imagesSrc['img-design-main-pc1.jpg']} alt="기아비즈 메인화면 pc 이미지" />
              <img src={imagesSrc['img-design-main-pc2.jpg']} alt="기아비즈 메인화면 pc 이미지" />
              <img src={imagesSrc['img-design-main-pc3.jpg']} alt="기아비즈 메인화면 pc 이미지" />
            </div>
            <div className={cx('design__content-img', 'design-main__mo')}>
              <img src={imagesSrc['img-design-main-mo1.jpg']} alt="기아비즈 메인화면 mobile 이미지" />
              <img src={imagesSrc['img-design-main-mo2.jpg']} alt="기아비즈 메인화면 mobile 이미지" />
              <img src={imagesSrc['img-design-main-mo3.jpg']} alt="기아비즈 메인화면 mobile 이미지" />
            </div>
          </ScrollViewClass>
        </div>

        <div className={cx('design', 'design-sub')}>
          <ScrollViewClass className={cx('design__content')}>
            <div className={cx('design__content-img', 'design-sub__mo')}>
              <img src={imagesSrc['img-design-sub-mo1.jpg']} alt="기아비즈 서브화면 mobile 이미지" />
              <img src={imagesSrc['img-design-sub-mo2.jpg']} alt="기아비즈 서브화면 mobile 이미지" />
            </div>
            <div className={cx('design__content-img', 'design-sub__pc')}>
              <img src={imagesSrc['img-design-sub-pc1.jpg']} alt="기아비즈 서브화면 pc 이미지" />
              <img src={imagesSrc['img-design-sub-pc2.jpg']} alt="기아비즈 서브화면 pc 이미지" />
            </div>
          </ScrollViewClass>
        </div>
      </PortfolioLayout>
    );
  }
}

export default KiaBizPromotion;
