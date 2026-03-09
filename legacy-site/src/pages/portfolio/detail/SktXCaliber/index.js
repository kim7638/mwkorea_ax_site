import React, { Component } from 'react';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes, importImages } from 'utils/core';

import { PortfolioLayout, PortfolioTop, PortfolioOverview, BasicSection, BasicSectionHead, BasicTitle, BasicText, ScrollViewClass } from 'components';

import data from 'datas/portfolio/SktXCaliber';

import * as styles from './SktXCaliber.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

const imagesSrc = importImages(require.context('./images/', false, /\.(png|jpe?g|gif)$/));

class SktXCaliber extends Component {
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

        <div className={cx('goal-ux-ui')}>
          <ScrollViewClass>
            <div className={cx('goal')}>
              <BasicSection>
                <BasicSectionHead>
                  <BasicTitle>project goal</BasicTitle>
                </BasicSectionHead>

                <p className={cx('goal__text')}>
                  수의사의 정확한 검진을 돕는
                  <br />
                  AI 진단 보조서비스
                </p>
                <div className={cx('phone')}>
                  <div className={cx('phone__object')}>
                    <div className={cx('phone__inner')}>
                      <img src={imagesSrc['goal-phone-inner.jpg']} alt="" className={cx('phone__img')} />
                    </div>
                  </div>
                </div>
              </BasicSection>
            </div>
          </ScrollViewClass>
          <ScrollViewClass>
            <div className={cx('goal-direction')}>
              <BasicSection>
                <BasicSectionHead>
                  <BasicTitle>UX/UI Direction</BasicTitle>
                </BasicSectionHead>
                <div className={cx('goal-direction__contents')}>
                  <section className={cx('goal-section')}>
                    <div className={cx('goal-section__head')}>
                      <h4 className={cx('goal-section__title')}>Dark Mode</h4>
                    </div>
                    <p className={cx('goal-section__text')}>
                      다크모드 컨셉으로 눈의 피로도를 줄이고
                      <br />
                      뚜렷한 대비를 통해 시인성과 가독성을 높였습니다.
                    </p>
                  </section>
                  <section className={cx('goal-section')}>
                    <div className={cx('goal-section__head')}>
                      <h4 className={cx('goal-section__title')}>Visualization</h4>
                    </div>
                    <p className={cx('goal-section__text')}>
                      고해상도 X-ray 이미지 분석 결과의 데이터를
                      <br />
                      시각화하여 정보 전달력을 강화했습니다.
                    </p>
                  </section>
                  <section className={cx('goal-section')}>
                    <div className={cx('goal-section__head')}>
                      <h4 className={cx('goal-section__title')}>Flexibility</h4>
                    </div>
                    <p className={cx('goal-section__text')}>
                      다양한 디바이스에 최적화된 대응을 할 수 있는
                      <br />
                      반응형 웹으로 제작해 사용성을 높였습니다.
                    </p>
                  </section>
                </div>
              </BasicSection>
            </div>
          </ScrollViewClass>
        </div>

        <div className={cx('design-system')}>
          <BasicSection>
            <BasicSectionHead>
              <BasicTitle>Design system</BasicTitle>
            </BasicSectionHead>

            <ScrollViewClass>
              <div className={cx('palette')}>
                <div className={cx('palette__item', 'is-purple')}>
                  <span className={cx('palette__text')}>#6C2AEA</span>
                </div>
                <div className={cx('palette__item', 'is-blue')}>
                  <span className={cx('palette__text')}>#2849EA</span>
                </div>
                <div className={cx('palette__item', 'is-green')}>
                  <span className={cx('palette__text')}>#0C8BAA</span>
                </div>
                <div className={cx('palette__item', 'is-skyblue')}>
                  <span className={cx('palette__text')}>#008BE3</span>
                </div>
                <div className={cx('palette__item', 'is-black')}>
                  <span className={cx('palette__text')}>#060A1E</span>
                </div>
                <div className={cx('palette__item', 'is-semi-navy')}>
                  <span className={cx('palette__text')}>#101737</span>
                </div>
                <div className={cx('palette__item', 'is-semi-gray')}>
                  <span className={cx('palette__text')}>#2A304D</span>
                </div>
                <div className={cx('palette__item', 'is-gray')}>
                  <span className={cx('palette__text')}>#A0A5B9</span>
                </div>
              </div>

              <div className={cx('font')}>
                <div className={cx('font__left')}>Aa</div>
                <div className={cx('font__right')}>
                  <div className={cx('font__title')}>
                    <span className={cx('font__title-main')}>Open Sans</span>
                    <span className={cx('font__title-sub')}> / BOLD, SEMIBOLD, REGULAR</span>
                  </div>
                  <p className={cx('font__conts')}>
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    <br />
                    abcdefghifklmnopqrstuvwxyz
                    <br />
                    0123456789!@#$%^&*()_+=-[]{}/;:?
                  </p>
                </div>
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
                반응형 홈페이지를 통해 사용자가 기기에 구애받지 않고 항상 최적화된 화면을 경험할 수 있습니다.
                <br />
                일러스트레이션의 활용으로 서비스 기능의 인지를 돕고 시각적 요소의 다양성을 높였습니다.
              </BasicText>
              <div className={cx('home__phone')}>
                <div className={cx('phone', 'phone01')}>
                  <div className={cx('phone__object')}>
                    <div className={cx('phone__inner')}>
                      <img src={imagesSrc['home-1.jpg']} alt="" className={cx('phone__img')} />
                    </div>
                  </div>
                </div>
                <div className={cx('phone', 'phone02')}>
                  <div className={cx('phone__object')}>
                    <div className={cx('phone__inner')}>
                      <img src={imagesSrc['home-2.jpg']} alt="" className={cx('phone__img')} />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollViewClass>
          </BasicSection>
        </div>

        <div className={cx('console')}>
          <BasicSection>
            <ScrollViewClass>
              <div className={cx('console__head')}>
                <BasicSectionHead>
                  <BasicTitle>CONSOLE</BasicTitle>
                </BasicSectionHead>

                <BasicText className={cx('console__text')}>
                  AI가 분석한 X-ray 사진을 확인하며 컬러로 구분된 데이터로 환축의 현재 상태를 쉽게 파악할 수 있습니다.
                  <br />
                  또한 부위별 분석을 통해 보다 자세한 진단을 얻을 수 있으며 검사 히스토리를 통해 진료이력을 체크할 수 있습니다.
                </BasicText>
              </div>

              <div className={cx('console__img01')}>
                <img src={imagesSrc['console-1.jpg']} alt="" className={cx('phone__img')} />
              </div>
            </ScrollViewClass>
          </BasicSection>
        </div>

        <div className={cx('console-phone')}>
          <BasicSection>
            <ScrollViewClass>
              <div className={cx('console-phone__wrap')}>
                <div className={cx('phone', 'phone01')}>
                  <div className={cx('phone__object')}>
                    <div className={cx('phone__inner')}>
                      <img src={imagesSrc['console-2.jpg']} alt="" className={cx('phone__img')} />
                    </div>
                  </div>
                </div>
                <div className={cx('phone', 'phone02')}>
                  <div className={cx('phone__object')}>
                    <div className={cx('phone__inner')}>
                      <img src={imagesSrc['console-3.jpg']} alt="" className={cx('phone__img')} />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollViewClass>
          </BasicSection>
        </div>

        <div className={cx('subscription')}>
          <ScrollViewClass>
            <BasicSection>
              <BasicSectionHead>
                <BasicTitle>SUBSCRIPTION</BasicTitle>
              </BasicSectionHead>

              <BasicText className={cx('subscription__text')}>
                설비 영역별로 특화된 AI 서비스들을 월 단위로 정기 구독하여 저렴하게 이용할 수 있습니다.
                <br />
                사용자의 비즈니스 스타일에 맞추어 상품을 선택할 수 있도록 상품별 특징을 안내하여 한 눈에 비교하며 선택할 수 있습니다.
              </BasicText>
              <div className={cx('subscription-images')}>
                <div className={cx('subscription-images__left')}>
                  <img src={imagesSrc['subscription-1.jpg']} alt="" className={cx('device-img', 'subscription-images__img')} />
                </div>
                <div className={cx('subscription-images__right')}>
                  <img src={imagesSrc['subscription-2.jpg']} alt="" className={cx('device-img', 'subscription-images__img')} />
                </div>
              </div>
            </BasicSection>
          </ScrollViewClass>
        </div>

        <div className={cx('sign')}>
          <ScrollViewClass>
            <div className={cx('view-images-wrap', 'sign__phone')}>
              <div className={cx('view-images', 'is-subsize')}>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['sign-1.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['sign-4.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={`${cx('view-images__block')} is-mobile-only`}>
                    <img src={imagesSrc['sign-3.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={`${cx('view-images__block')} is-mobile-only`}>
                    <img src={imagesSrc['sign-5.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['sign-2.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['sign-5.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={`${cx('view-images__block')} is-mobile-only`}>
                    <img src={imagesSrc['sign-4.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={`${cx('view-images__block')} is-mobile-only`}>
                    <img src={imagesSrc['sign-6.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['sign-3.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['sign-6.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
              </div>
              <div className={cx('sign__phone__bg')}></div>
            </div>
          </ScrollViewClass>
        </div>

        <section className={cx('apply')}>
          <ScrollViewClass>
            <div className={cx('view-images-wrap', 'apply__phone')}>
              <div className={cx('view-images', 'is-subsize')}>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['apply-1.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['apply-2.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['apply-3.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
              </div>
            </div>
          </ScrollViewClass>
        </section>
      </PortfolioLayout>
    );
  }
}

export default SktXCaliber;
