import React, { Component } from 'react';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes, importImages } from 'utils/core';

import { PortfolioLayout, PortfolioTop, PortfolioOverview, BasicSection, BasicSectionHead, BasicTitle, BasicText, ScrollViewClass } from 'components';

import data from 'datas/portfolio/GenesisDigitalKeyApp';

import * as styles from './GenesisDigitalKeyApp.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

const imagesSrc = importImages(require.context('./images/', false, /\.(png|jpe?g|gif)$/));

class GenesisDigitalKeyApp extends Component {
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
          }}
        />

        <ScrollViewClass>
          <div className={cx('project')}>
            <BasicSection>
              <BasicSectionHead className={cx('project__head')}>
                <BasicTitle>Project goal</BasicTitle>
              </BasicSectionHead>

              <p className={cx('project__text')}>
                스마트폰으로
                <br />
                쉽게 제어하고 공유하는
                <br />
                디지털 키 서비스
              </p>
              <div className={cx('phone')}>
                <div className={cx('phone__object')}>
                  <div className={cx('phone__inner')}>
                    <img src={imagesSrc['home-1.jpg']} alt="" className={cx('phone__img')} />
                  </div>
                </div>
              </div>
            </BasicSection>
          </div>
        </ScrollViewClass>

        <ScrollViewClass>
          <div className={cx('concept')}>
            <BasicSection>
              <BasicSectionHead>
                <BasicTitle>Design concept</BasicTitle>
              </BasicSectionHead>

              <ol className={cx('concept__list')}>
                <li className={cx('concept__item')}>
                  <div className={cx('concept__num')}>01</div>
                  아이콘을 최소화하고 <span className="inline-block">텍스트를 사용하여 브랜드의</span>
                  <br />
                  절제된 아이덴티티를 <span className="inline-block">더욱 확고히 하였습니다.</span>
                </li>
                <li className={cx('concept__item')}>
                  <div className={cx('concept__num')}>02</div>
                  Cooper 색상을 최소한으로 <span className="inline-block">사용하고자 하는 브랜드 방향에 맞게</span>
                  <br />
                  화이트와 블랙이 돋보이도록 <span className="inline-block">컬러를 구성했습니다.</span>
                </li>
                <li className={cx('concept__item')}>
                  <div className={cx('concept__num')}>03</div>
                  마이크로 인터렉션으로 <span className="inline-block">다소 역동적인 화면 전환과 아이콘을</span>
                  <br />
                  사용해 인지시간을 감소시켰습니다.
                </li>
              </ol>
            </BasicSection>
          </div>
        </ScrollViewClass>

        <ScrollViewClass>
          <div className={cx('design-direction')}>
            <BasicSection>
              <BasicSectionHead>
                <BasicTitle>Design derection</BasicTitle>
              </BasicSectionHead>

              <div className={cx('design-direction__group')}>
                <p className={cx('design-direction__row')}>
                  <strong>쉽고 빠르게 원격제어</strong>가 가능하며
                  <sup>Quick</sup>
                </p>
                <p className={cx('design-direction__row')}>
                  <strong>단순하고 직관적인 디자인</strong>을 추구하고
                  <sup>Simple</sup>
                </p>
                <p className={cx('design-direction__row')}>
                  <strong>가독성이 높으면서</strong> 특성이 뚜렷한
                </p>
                <p className={cx('design-direction__row')}>
                  브랜드의 <strong>절제된 품격</strong>을 보여줍니다.
                  <sup>Dignity</sup>
                </p>
              </div>
            </BasicSection>
          </div>
        </ScrollViewClass>

        <div className={cx('design-system')}>
          <BasicSection>
            <BasicSectionHead>
              <BasicTitle>Design system</BasicTitle>
            </BasicSectionHead>

            <ScrollViewClass>
              <div className={cx('palette')}>
                <div className={cx('palette__item', 'is-primary')}>
                  <span className={cx('palette__text')}>#131313</span>
                </div>
                <div className={cx('palette__item', 'is-white')}>
                  <span className={cx('palette__text')}>#FFFFFF</span>
                </div>
                <div className={cx('palette__item', 'is-brown')}>
                  <span className={cx('palette__text')}>#A36B4F</span>
                </div>
              </div>
            </ScrollViewClass>

            <ScrollViewClass>
              <div className={cx('font')}>
                <ul className={cx('font__list')}>
                  <li className={cx('font__item', 'is-head')}>
                    <div className={cx('font__title')}>
                      Genesis Sans
                      <br />
                      Head Global
                    </div>

                    <div className={cx('font__example')}>
                      <div className={cx('font__example-cell')}>
                        ABC
                        <br />
                        가나다
                      </div>
                      <div className={cx('font__example-cell')}>
                        ABC
                        <br />
                        가나다
                      </div>
                    </div>
                  </li>
                  <li className={cx('font__item', 'is-text')}>
                    <div className={cx('font__title')}>
                      Genesis Sans
                      <br />
                      Text Global
                    </div>

                    <div className={cx('font__example')}>
                      <div className={cx('font__example-cell')}>
                        ABC
                        <br />
                        가나다
                      </div>
                      <div className={cx('font__example-cell')}>
                        ABC
                        <br />
                        가나다
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollViewClass>
          </BasicSection>
        </div>

        <div className={cx('home')}>
          <BasicSection>
            <BasicSectionHead>
              <BasicTitle>Home UX/UI</BasicTitle>
            </BasicSectionHead>

            <ScrollViewClass>
              <BasicText className={cx('home__text')}>
                대비되는 블랙과 화이트 색상을 사용한 카드 디자인으로 정보의 구분을 확실히 하여 단순하면서도 직관적으로 인식이 가능하게 디자인하였으며, <br className="is-pc-only" />
                아이콘을 최소화하고 텍스트를 주로 사용하여 기존의 절제된 제네시스만의 브랜드 아이덴티티를 담아내고자 하였습니다.
              </BasicText>
            </ScrollViewClass>

            <ScrollViewClass>
              <div className={cx('view-images', 'is-subsize', 'home__phone')}>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['home-1.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['home-2.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={`${cx('view-images__block')} is-mobile-only`}>
                    <img src={imagesSrc['home-3.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['home-3.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
              </div>
            </ScrollViewClass>
          </BasicSection>
        </div>

        <ScrollViewClass>
          <section className={cx('share')}>
            <div className={cx('share__top')}>
              <BasicSection tagName="div">
                <BasicSectionHead className={cx('share__head')}>
                  <BasicTitle>Digital key share</BasicTitle>
                </BasicSectionHead>
              </BasicSection>
            </div>

            <ScrollViewClass>
              <div className={cx('view-images-wrap', 'share__phone')}>
                <div className={cx('view-images')}>
                  <div className={cx('view-images__item')}>
                    <div className={cx('view-images__block')}>
                      <img src={imagesSrc['share-1.jpg']} alt="" className={cx('device-img')} />
                    </div>
                  </div>
                  <div className={cx('view-images__item')}>
                    <div className={cx('view-images__block')}>
                      <img src={imagesSrc['share-2.jpg']} alt="" className={cx('device-img')} />
                    </div>
                    <div className={cx('view-images__block')}>
                      <img src={imagesSrc['share-3.jpg']} alt="" className={cx('device-img')} />
                    </div>
                  </div>
                </div>
                <div className={cx('share__phone__bg')}></div>
              </div>
            </ScrollViewClass>
          </section>
        </ScrollViewClass>

        <div className={cx('gallery')}>
          <ScrollViewClass>
            <div className={cx('view-images-wrap', 'gallery__phone')}>
              <div className={cx('view-images', 'is-subsize')}>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['gallery-1.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['gallery-4.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={`${cx('view-images__block')} is-mobile-only`}>
                    <img src={imagesSrc['gallery-3.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={`${cx('view-images__block')} is-mobile-only`}>
                    <img src={imagesSrc['gallery-5.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['gallery-2.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['gallery-5.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={`${cx('view-images__block')} is-mobile-only`}>
                    <img src={imagesSrc['gallery-4.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={`${cx('view-images__block')} is-mobile-only`}>
                    <img src={imagesSrc['gallery-6.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['gallery-3.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['gallery-6.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
              </div>
            </div>
          </ScrollViewClass>
        </div>
      </PortfolioLayout>
    );
  }
}

export default GenesisDigitalKeyApp;
