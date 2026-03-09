import React, { Component } from 'react';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes, importImages } from 'utils/core';

import { PortfolioLayout, PortfolioTop, PortfolioOverview, BasicSection, BasicSectionHead, BasicTitle, BasicText, ScrollViewClass } from 'components';

import data from 'datas/portfolio/MyGenesisApp';

import * as styles from './MyGenesisApp.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

const imagesSrc = importImages(require.context('./images/', false, /\.(png|jpe?g|gif)$/));

class MyGenesisApp extends Component {
  render() {
    return (
      <PortfolioLayout data={data}>
        <PortfolioTop
          data={data}
          classNames={{
            wrap: cx('top-wrap'),
          }}
        />

        <div className={cx('overview')}>
          <PortfolioOverview data={data.overview} />
        </div>

        <ScrollViewClass>
          <div className={cx('project')}>
            <BasicSection>
              <BasicSectionHead className={cx('project__head')}>
                <BasicTitle>Project goal</BasicTitle>
              </BasicSectionHead>

              <p className={cx('project__text')}>
                사용자 개인에게
                <br />
                맞춤형 정보를 제공해주는
                <br />
                제네시스 통합 앱
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
          <div className={cx('hr')}></div>
        </ScrollViewClass>

        <div className={cx('direction')}>
          <BasicSection>
            <BasicSectionHead>
              <BasicTitle>UX/UI Direction</BasicTitle>
            </BasicSectionHead>

            <div className={cx('direction__contents')}>
              <ScrollViewClass>
                <section className={cx('direction-section')}>
                  <div className={cx('direction-section__head')}>
                    <h4 className={cx('direction-section__title')}>ONE TO ONE</h4>
                  </div>
                  <p className={cx('direction-section__text')}>
                    제네시스 사용자를 위한 개인 맞춤형 <span className="inline-block">정보 및 인사이트를 제공해</span>
                    <br />
                    <span className={cx('color-brown')}>사용자의 재미와 관심을 증대</span>시키고자 <span className="inline-block">하였습니다.</span>
                  </p>
                </section>
                <section className={cx('direction-section')}>
                  <div className={cx('direction-section__head')}>
                    <h4 className={cx('direction-section__title')}>Convenient</h4>
                  </div>
                  <p className={cx('direction-section__text')}>
                    입력을 최소화 하고, 입력 항목의 <span className="inline-block">내용을 타이틀로 사용하여</span>
                    <br />
                    <span className={cx('color-brown')}>사용자의 편의성을 증대</span>시키고{' '}
                    <span className="inline-block">
                      <span className={cx('color-brown')}>오류를 최소화</span>하고자 하였습니다.
                    </span>
                  </p>
                </section>
                <section className={cx('direction-section')}>
                  <div className={cx('direction-section__head')}>
                    <h4 className={cx('direction-section__title')}>Uniqueness</h4>
                  </div>
                  <p className={cx('direction-section__text')}>
                    제네시스만의 <span className={cx('color-brown')}>고급스럽고, </span>
                    <span className="inline-block">
                      <span className={cx('color-brown')}>절제된 느낌</span>을 통일성있게
                    </span>
                    <br />앱 안에 녹여내고자 하였습니다.
                  </p>
                </section>
              </ScrollViewClass>
            </div>
          </BasicSection>
        </div>

        <div className={cx('design-system')}>
          <BasicSection>
            <BasicSectionHead>
              <BasicTitle>Design system</BasicTitle>
            </BasicSectionHead>

            <ScrollViewClass>
              <div className={cx('palette')}>
                <div className={cx('palette__item', 'is-brown')}>
                  <span className={cx('palette__text')}>#AD7B61</span>
                </div>
                <div className={cx('palette__item', 'is-white')}>
                  <span className={cx('palette__text')}>#FFFFFF</span>
                </div>
                <div className={cx('palette__item', 'is-gray-tertiary')}>
                  <span className={cx('palette__text')}>#CCCCCC</span>
                </div>
                <div className={cx('palette__item', 'is-gray-secondary')}>
                  <span className={cx('palette__text')}>#808080</span>
                </div>
                <div className={cx('palette__item', 'is-gray-primary')}>
                  <span className={cx('palette__text')}>#333333</span>
                </div>
              </div>
            </ScrollViewClass>

            <ScrollViewClass>
              <div className={cx('font')}>
                <ul className={cx('font__list')}>
                  <li className={cx('font__item', 'is-head')}>
                    <div className={cx('font__block')}>
                      <div className={cx('font__title')}>
                        Genesis
                        <br />
                        Sans <span className={cx('color-brown')}>Head</span>
                      </div>
                      <div className={cx('font__weight')}>
                        <span>Light</span> / <span>Regular</span>
                      </div>
                      <div className={cx('font__where')}>Where to use</div>
                      <div className={cx('font__use')}>Eyebrow, Title Copy, Table Title, GNB 1Depth Menu</div>
                    </div>
                  </li>
                  <li className={cx('font__item', 'is-text')}>
                    <div className={cx('font__block')}>
                      <div className={cx('font__title')}>
                        Genesis
                        <br />
                        Sans <span className={cx('color-brown')}>Text</span>
                      </div>
                      <div className={cx('font__weight')}>
                        <span>Regular</span> / <span>Medium</span>
                      </div>
                      <div className={cx('font__where')}>Where to use</div>
                      <div className={cx('font__use')}>Eyebrow, Title Copy, Table Title, GNB 1Depth Menu</div>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollViewClass>
          </BasicSection>
        </div>

        <section className={cx('home')}>
          <ScrollViewClass>
            <div className={cx('home__insight')}>
              <BasicSection tagName="div">
                <BasicSectionHead>
                  <BasicTitle>Home UX/UI</BasicTitle>
                </BasicSectionHead>

                <BasicText className={cx('home__insight__text')}>
                  위치, 날씨, 소유 차량에 따라 사용자 맞춤형 정보를 제공해줍니다.
                  <br />
                  화면 상단에 간단한 INSIGHT를 제공해 편의성을 높였습니다.
                </BasicText>
              </BasicSection>
            </div>
          </ScrollViewClass>

          <div className={cx('home-insight')}>
            <div className={cx('home-insight__item', 'is-day')}>
              <ScrollViewClass>
                <div className={cx('home-insight__icons')}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className={cx('home-insight__text')}>DAY</div>
                <div className={cx('phone', 'home-insight__phone')}>
                  <div className={cx('phone__object')}>
                    <div className={cx('phone__inner')}>
                      <img src={imagesSrc['home-2.jpg']} alt="" className={cx('phone__img')} />
                    </div>
                  </div>
                </div>
              </ScrollViewClass>
            </div>
            <div className={cx('home-insight__item', 'is-night')}>
              <ScrollViewClass>
                <div className={cx('home-insight__icons')}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className={cx('home-insight__text')}>NIGHT</div>
                <div className={cx('phone', 'home-insight__phone')}>
                  <div className={cx('phone__object')}>
                    <div className={cx('phone__inner')}>
                      <img src={imagesSrc['home-1.jpg']} alt="" className={cx('phone__img')} />
                    </div>
                  </div>
                </div>
              </ScrollViewClass>
            </div>
          </div>

          <BasicSection tagName="div" className={cx('home__my-data')}>
            <ScrollViewClass>
              <BasicText className={cx('home__my-data__text')}>
                메인 하단에 제네시스 MY DATA를 연동하여
                <br />한 눈에 나의 차량 이용현황 및 상태를 확인할 수 있습니다.
              </BasicText>
            </ScrollViewClass>

            <ScrollViewClass>
              <div className={cx('view-images', 'home-my-data')}>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['home-my-data-1.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['home-my-data-2.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
              </div>
            </ScrollViewClass>
          </BasicSection>
        </section>

        <section className={cx('insight')}>
          <BasicSection tagName="div">
            <BasicSectionHead>
              <BasicTitle>Insight</BasicTitle>
            </BasicSectionHead>
          </BasicSection>

          <ScrollViewClass>
            <div className={cx('view-images-wrap', 'insight__phone')}>
              <div className={cx('view-images')}>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['insight-phone-1.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['insight-phone-2.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
              </div>
              <div className={cx('insight__phone__bg')}></div>
            </div>
          </ScrollViewClass>

          <ScrollViewClass>
            <div className={cx('insight__card')}>
              <div className={cx('insight__card__inner')}>
                <div className={cx('insight__card__group')}>
                  <div className={cx('insight__card__group-inner')}>
                    <div className={cx('insight__card__item')}>
                      <img src={imagesSrc['insight-card-1.png']} alt="" />
                    </div>
                    <div className={cx('insight__card__item')}>
                      <img src={imagesSrc['insight-card-2.png']} alt="" />
                    </div>
                    <div className={cx('insight__card__item')}>
                      <img src={imagesSrc['insight-card-3.png']} alt="" />
                    </div>
                  </div>
                </div>
                <div className={cx('insight__card__group')}>
                  <div className={cx('insight__card__group-inner')}>
                    <div className={cx('insight__card__item')}>
                      <img src={imagesSrc['insight-card-4.png']} alt="" />
                    </div>
                    <div className={cx('insight__card__item')}>
                      <img src={imagesSrc['insight-card-5.png']} alt="" />
                    </div>
                    <div className={cx('insight__card__item')}>
                      <img src={imagesSrc['insight-card-6.png']} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollViewClass>
        </section>

        <BasicSection className={cx('service')}>
          <BasicSectionHead>
            <BasicTitle>Service</BasicTitle>
          </BasicSectionHead>

          <ScrollViewClass>
            <div className={cx('view-images', 'is-subsize', 'service__phone')}>
              <div className={cx('view-images__item')}>
                <div className={cx('view-images__block')}>
                  <img src={imagesSrc['service-1.jpg']} alt="" className={cx('device-img')} />
                </div>
                <div className={`${cx('view-images__block')} is-mobile-only`}>
                  <img src={imagesSrc['service-3.jpg']} alt="" className={cx('device-img')} />
                </div>
              </div>
              <div className={cx('view-images__item')}>
                <div className={cx('view-images__block')}>
                  <img src={imagesSrc['service-2.jpg']} alt="" className={cx('device-img')} />
                </div>
              </div>
              <div className={cx('view-images__item')}>
                <div className={cx('view-images__block')}>
                  <img src={imagesSrc['service-3.jpg']} alt="" className={cx('device-img')} />
                </div>
              </div>
            </div>
          </ScrollViewClass>
        </BasicSection>

        <div className={cx('my-g')}>
          <BasicSection tagName="div">
            <BasicSectionHead>
              <BasicTitle>MY G</BasicTitle>
            </BasicSectionHead>
          </BasicSection>

          <ScrollViewClass>
            <div className={cx('view-images-wrap', 'my-g__phone')}>
              <div className={cx('view-images')}>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['my-g-1.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['my-g-2.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['my-g-3.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
              </div>
              <div className={cx('my-g__phone__bg')}></div>
            </div>
          </ScrollViewClass>
        </div>

        <div className={cx('search')}>
          <BasicSection>
            <BasicSectionHead>
              <BasicTitle>Service Search</BasicTitle>
            </BasicSectionHead>

            <ScrollViewClass>
              <div className={cx('view-images', 'is-subsize', 'search__phone')}>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['search-1.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={`${cx('view-images__block')} is-mobile-only`}>
                    <img src={imagesSrc['search-3.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['search-2.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['search-3.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
              </div>
            </ScrollViewClass>
          </BasicSection>
        </div>

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

export default MyGenesisApp;
