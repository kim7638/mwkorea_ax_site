import React, { Component } from 'react';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes, importImages } from 'utils/core';

import { PortfolioLayout, PortfolioTop, PortfolioOverview, BasicSection, BasicSectionHead, BasicTitle, BasicText, ScrollViewClass } from 'components';

import data from 'datas/portfolio/HanaCardMobileDirectCenter';

import * as styles from './HanaCardMobileDirectCenter.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

const imagesSrc = importImages(require.context('./images/', false, /\.(png|jpe?g|gif)$/));

class HanaCardMobileDirectCenter extends Component {
  render() {
    return (
      <PortfolioLayout data={data}>
        <PortfolioTop
          data={data}
          phoneImgSrc={imagesSrc['top-phone.png']}
          classNames={{
            wrap: cx('top-wrap'),
          }}
        >
          <div className={cx('top-object')}></div>
        </PortfolioTop>

        <div className={cx('overview')}>
          <PortfolioOverview
            data={data.overview}
            classNames={{
              section: cx('overview__section'),
            }}
          />
        </div>

        <ScrollViewClass>
          <div className={cx('hr')} />
        </ScrollViewClass>

        <div className={cx('direction')}>
          <BasicSection>
            <BasicSectionHead>
              <BasicTitle>UX/UI Direction</BasicTitle>
            </BasicSectionHead>

            <ScrollViewClass>
              <BasicText className={cx('direction__text')}>
                간결한 사용자의 동선을 고려하여, 직관적인 서비스 인식과 정보 접근성을 향상하는데에 중점을 두었습니다.
                <br />
                또한, 사용자가 보다 쉽고 빠른 경험을 할 수 있도록 필수적인 요소만 담아 간결한 흐름으로 구성했습니다.
              </BasicText>

              <div className={cx('direction__contents')}>
                <section className={cx('direction-section')}>
                  <h4 className={cx('direction-section__title')}>Easy</h4>
                  <p className={cx('direction-section__text')}>
                    심플한 플로우로
                    <br />
                    어렵지 않게
                  </p>
                </section>
                <section className={cx('direction-section')}>
                  <h4 className={cx('direction-section__title')}>Considerate</h4>
                  <p className={cx('direction-section__text')}>
                    다양한 사용자를
                    <br />
                    고려하여 친절하게
                  </p>
                </section>
                <section className={cx('direction-section')}>
                  <h4 className={cx('direction-section__title')}>Essential</h4>
                  <p className={cx('direction-section__text')}>
                    필수적인 요소만 담아
                    <br />
                    본질에 가깝게
                  </p>
                </section>
              </div>
            </ScrollViewClass>
          </BasicSection>
        </div>

        <div className={cx('design-direction')}>
          <BasicSection>
            <BasicSectionHead>
              <BasicTitle>Design Direction</BasicTitle>
            </BasicSectionHead>

            <ScrollViewClass>
              <div className={cx('design-direction__contents')}>
                <section className={cx('design-direction-section')}>
                  <h4 className={cx('design-direction-section__title')}>Intuitive</h4>
                  <p className={cx('design-direction-section__text')}>직관적이고 명료한 디자인 시스템</p>
                </section>
                <section className={cx('design-direction-section')}>
                  <h4 className={cx('design-direction-section__title')}>Friendly</h4>
                  <p className={cx('design-direction-section__text')}>신뢰감을 주는 색감과 친근한 일러스트</p>
                </section>
                <section className={cx('design-direction-section')}>
                  <h4 className={cx('design-direction-section__title')}>Optimization</h4>
                  <p className={cx('design-direction-section__text')}>모바일 최적화를 지향한 인터페이스</p>
                </section>
              </div>
            </ScrollViewClass>
          </BasicSection>
        </div>

        <div className={cx('design-system')}>
          <BasicSection>
            <BasicSectionHead>
              <BasicTitle>Design system</BasicTitle>
            </BasicSectionHead>

            <ScrollViewClass>
              <div className={cx('palette')}>
                <div className={cx('palette__group')}>
                  <div className={cx('palette__item', 'is-purple')}>
                    <span className={cx('palette__title')}>Purple</span>
                    <span className={cx('palette__text')}>#706AF7</span>
                  </div>
                </div>
                <div className={cx('palette__group')}>
                  <div className={cx('palette__item', 'is-mint')}>
                    <span className={cx('palette__title')}>Mint</span>
                    <span className={cx('palette__text')}>#76CDCE</span>
                  </div>
                  <div className={cx('palette__item', 'is-dark-navy')}>
                    <span className={cx('palette__title')}>Dark navy</span>
                    <span className={cx('palette__text')}>#3E4A60</span>
                  </div>
                  <div className={cx('palette__item', 'is-gray')}>
                    <span className={cx('palette__title')}>Grey</span>
                    <span className={cx('palette__text')}>#E1E1E1</span>
                  </div>
                </div>
              </div>
            </ScrollViewClass>

            <ScrollViewClass>
              <div className={cx('font')}>
                <p className={cx('font__title')}>Noto Sans CJK KR</p>
                <ul className={cx('font__list')}>
                  <li className={cx('font__item', 'is-regular')}>
                    <div className={cx('font__block')}>
                      <span className={cx('font__number')}>01</span>
                      <span className={cx('font__weight')}>Regular</span>
                      <span className={cx('font__example')}>
                        가나다라마바사
                        <br />
                        아자차카타파하
                      </span>
                    </div>
                  </li>
                  <li className={cx('font__item', 'is-medium')}>
                    <div className={cx('font__block')}>
                      <span className={cx('font__number')}>02</span>
                      <span className={cx('font__weight')}>Medium</span>
                      <span className={cx('font__example')}>
                        가나다라마바사
                        <br />
                        아자차카타파하
                      </span>
                    </div>
                  </li>
                  <li className={cx('font__item', 'is-bold')}>
                    <div className={cx('font__block')}>
                      <span className={cx('font__number')}>03</span>
                      <span className={cx('font__weight')}>Bold</span>
                      <span className={cx('font__example')}>
                        가나다라마바사
                        <br />
                        아자차카타파하
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollViewClass>
          </BasicSection>
        </div>

        <div className={cx('icongraphy')}>
          <BasicSection>
            <BasicSectionHead>
              <BasicTitle>Icongraphy</BasicTitle>
            </BasicSectionHead>

            <div className={cx('icongraphy__contents')}>
              <section className={cx('icons-section')}>
                <h4 className={cx('icons-section__title')}>TYPE A</h4>

                <ScrollViewClass>
                  <div className={cx('icons', 'icons01')}>
                    <div className={cx('icons__inner')}>
                      <div className={cx('icons__item')}>
                        <div className={cx('icons__block')}></div>
                      </div>
                      <div className={cx('icons__item')}>
                        <div className={cx('icons__block')}></div>
                      </div>
                      <div className={cx('icons__item')}>
                        <div className={cx('icons__block')}></div>
                      </div>
                      <div className={cx('icons__item')}>
                        <div className={cx('icons__block')}></div>
                      </div>
                      <div className={cx('icons__item')}>
                        <div className={cx('icons__block')}></div>
                      </div>
                      <div className={cx('icons__item')}>
                        <div className={cx('icons__block')}></div>
                      </div>
                      <div className={cx('icons__item')}>
                        <div className={cx('icons__block')}></div>
                      </div>
                      <div className={cx('icons__item')}>
                        <div className={cx('icons__block')}></div>
                      </div>
                      <div className={cx('icons__item')}>
                        <div className={cx('icons__block')}></div>
                      </div>
                      <div className={cx('icons__item')}>
                        <div className={cx('icons__block')}></div>
                      </div>
                      <div className={cx('icons__item')}>
                        <div className={cx('icons__block')}></div>
                      </div>
                      <div className={cx('icons__item')}>
                        <div className={cx('icons__block')}></div>
                      </div>
                      <div className={cx('icons__item')}>
                        <div className={cx('icons__block')}></div>
                      </div>
                      <div className={cx('icons__item')}>
                        <div className={cx('icons__block')}></div>
                      </div>
                      <div className={cx('icons__item')}>
                        <div className={cx('icons__block')}></div>
                      </div>
                      <div className={cx('icons__item')}>
                        <div className={cx('icons__block')}></div>
                      </div>
                      <div className={cx('icons__item')}>
                        <div className={cx('icons__block')}></div>
                      </div>
                      <div className={cx('icons__item')}>
                        <div className={cx('icons__block')}></div>
                      </div>
                    </div>
                  </div>
                </ScrollViewClass>
              </section>

              <section className={cx('icons-section')}>
                <h4 className={cx('icons-section__title')}>TYPE B</h4>

                <ScrollViewClass>
                  <div className={cx('icons', 'icons02')}>
                    <div className={cx('icons__inner')}>
                      <div className={cx('icons__item')}>
                        <div className={cx('icons__block')}></div>
                      </div>
                      <div className={cx('icons__item')}>
                        <div className={cx('icons__block')}></div>
                      </div>
                      <div className={cx('icons__item')}>
                        <div className={cx('icons__block')}></div>
                      </div>
                      <div className={cx('icons__item')}>
                        <div className={cx('icons__block')}></div>
                      </div>
                      <div className={cx('icons__item')}>
                        <div className={cx('icons__block')}></div>
                      </div>
                      <div className={cx('icons__item')}>
                        <div className={cx('icons__block')}></div>
                      </div>
                    </div>
                  </div>
                </ScrollViewClass>
              </section>
            </div>
          </BasicSection>
        </div>

        <div className={cx('home')}>
          <BasicSection>
            <BasicSectionHead>
              <BasicTitle>Home UX/UI</BasicTitle>
            </BasicSectionHead>

            <ScrollViewClass>
              <BasicText className={cx('home__text')}>
                언제든지 바로 필요한 서비스를 검색하여 이동이 가능합니다.
                <br />
                메인화면에서 간편히 SWIPE 하여 다양한 주요기능 서비스를 한 눈에 볼 수 있으며, 쉽고 빠르게 원하는 정보 페이지로 이동할 수 있습니다.
              </BasicText>

              <div className={cx('home__image')}></div>
            </ScrollViewClass>
          </BasicSection>
        </div>

        <section className={cx('simple-auth')}>
          <BasicSection tagName="div">
            <BasicSectionHead>
              <BasicTitle type="EB">간편 인증 서비스</BasicTitle>
            </BasicSectionHead>
          </BasicSection>

          <ScrollViewClass>
            <div className={cx('view-images-wrap', 'simple-auth__phone')}>
              <div className={cx('view-images', 'is-subsize')}>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['simple-auth-1.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={cx(`${cx('view-images__block')} is-mobile-only`)}>
                    <img src={imagesSrc['simple-auth-3.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['simple-auth-2.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['simple-auth-3.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
              </div>
              <div className={cx('simple-auth__phone__bg')}></div>
            </div>
          </ScrollViewClass>
        </section>

        <div className={cx('counsel')}>
          <BasicSection>
            <BasicSectionHead>
              <BasicTitle type="EB">상담 서비스</BasicTitle>
            </BasicSectionHead>

            <ScrollViewClass>
              <div className={cx('view-images', 'counsel__phone')}>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['counsel-1.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['counsel-3.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['counsel-2.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
              </div>
            </ScrollViewClass>
          </BasicSection>
        </div>

        <section className={cx('main-service')}>
          <BasicSection tagName="div">
            <BasicSectionHead>
              <BasicTitle type="EB">주요 서비스</BasicTitle>
            </BasicSectionHead>

            <ScrollViewClass>
              <BasicText className={cx('main-service__text')}>
                통합된 디자인 시스템으로 이루어진 다양한 주요 서비스를 이용할 수 있습니다.
                <br />
                사용자가 길을 헤매지 않고 목적지까지 신속히 도착할 수 있도록 필수적인 요소만 담아 디자인했습니다.
              </BasicText>
            </ScrollViewClass>
          </BasicSection>

          <ScrollViewClass>
            <div className={cx('view-images-wrap', 'main-service__phone')}>
              <div className={cx('view-images')}>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['main-service-1.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['main-service-2.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['main-service-3.png']} alt="" className={cx('device-img')} />
                  </div>
                </div>
              </div>
              <div className={cx('main-service__phone__bg')}></div>
            </div>
          </ScrollViewClass>
        </section>

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
                    <img src={imagesSrc['gallery-5.png']} alt="" className={cx('device-img')} />
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['gallery-2.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['gallery-5.png']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={`${cx('view-images__block')} is-mobile-only`}>
                    <img src={imagesSrc['gallery-4.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={`${cx('view-images__block')} is-mobile-only`}>
                    <img src={imagesSrc['gallery-6.png']} alt="" className={cx('device-img')} />
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['gallery-3.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['gallery-6.png']} alt="" className={cx('device-img')} />
                  </div>
                </div>
              </div>
              <div className={cx('gallery__phone__bg')}></div>
            </div>
          </ScrollViewClass>
        </div>
      </PortfolioLayout>
    );
  }
}

export default HanaCardMobileDirectCenter;
