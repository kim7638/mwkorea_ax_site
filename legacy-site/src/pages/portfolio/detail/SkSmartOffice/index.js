import React, { Component } from 'react';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes, importImages } from 'utils/core';

import { PortfolioLayout, PortfolioTop, PortfolioOverview, BasicSection, BasicSectionHead, BasicTitle, BasicText, ScrollViewClass } from 'components';

import data from 'datas/portfolio/SkSmartOffice';

import * as styles from './SkSmartOffice.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

const imagesSrc = importImages(require.context('./images/', false, /\.(png|jpe?g|gif)$/));

class SkSmartOffice extends Component {
  render() {
    return (
      <PortfolioLayout data={data}>
        <PortfolioTop
          data={data}
          classNames={{
            wrap: cx('top-wrap'),
          }}
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
                최적의
                <br />
                업무 경험을 위한
                <br />
                스마트 오피스
              </p>
              <div className={cx('phone')}>
                <div className={cx('phone__object')}>
                  <div className={cx('phone__inner')}>
                    <img src={imagesSrc['project-1.jpg']} alt="" className={cx('phone__img')} />
                  </div>
                </div>
              </div>
            </BasicSection>
          </div>
        </ScrollViewClass>

        <div className={cx('direction')}>
          <BasicSection>
            <BasicSectionHead>
              <BasicTitle>UX/UI Direction</BasicTitle>
            </BasicSectionHead>

            <ScrollViewClass>
              <BasicText className={cx('direction__text')}>
                다양한 정보를 효율적으로 분류하여 표현함으로써 사용자들이 사용하기 쉽고 빠른 정보를 전달 받을 수 있는 서비스가 되고자{' '}
                <span className="display-block-pc-only">복잡한 구조 보다는 사용하기 쉬운 디자인을 제공해 보았습니다.</span>
              </BasicText>

              <ul className={cx('direction__list')}>
                <li className={cx('direction__item')}>
                  <div className={cx('direction__block')}>
                    <div className={cx('direction__item-title')}>Optimization</div>
                    <div className={cx('direction__item-text')}>
                      상황에 따른 디바이스 별<br />
                      최적화 정보
                    </div>
                  </div>
                </li>
                <li className={cx('direction__item')}>
                  <div className={cx('direction__block')}>
                    <div className={cx('direction__item-title')}>Ease</div>
                    <div className={cx('direction__item-text')}>
                      예약 및 현황을
                      <br />
                      쉽고 빠르게 확인
                    </div>
                  </div>
                </li>
                <li className={cx('direction__item')}>
                  <div className={cx('direction__block')}>
                    <div className={cx('direction__item-title')}>Efficiency</div>
                    <div className={cx('direction__item-text')}>
                      개인 맞춤형 서비스로
                      <br />
                      효율성 증대
                    </div>
                  </div>
                </li>
              </ul>
            </ScrollViewClass>
          </BasicSection>
        </div>

        <div className={cx('design-direction')}>
          <BasicSection>
            <BasicSectionHead>
              <BasicTitle>Design Direction</BasicTitle>
            </BasicSectionHead>

            <ScrollViewClass>
              <div className={cx('design-direction__copy')}>
                <p className={cx('design-direction__copy-text')}>
                  <mark>통합된</mark> 디자인 시스템안에서
                  <sup className={cx('design-direction__copy-sup')}>United visual system</sup>
                </p>
                <p className={cx('design-direction__copy-text')}>
                  각 채널 별 <mark>유기적인</mark> 차별화를 통해
                  <sup className={cx('design-direction__copy-sup')}>Organic</sup>
                </p>
                <p className={cx('design-direction__copy-text')}>
                  디바이스 환경에 <mark>유연한</mark> 대응
                  <sup className={cx('design-direction__copy-sup')}>Flexible</sup>
                </p>
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
                <div className={cx('palette__item', 'is-primary')}>
                  <span className={cx('palette__text')}>#313131</span>
                </div>
                <div className={cx('palette__item', 'is-gray')}>
                  <span className={cx('palette__text')}>#DADDE</span>
                </div>
                <div className={cx('palette__item', 'is-green')}>
                  <span className={cx('palette__text')}>#37CCA9</span>
                </div>
                <div className={cx('palette__item', 'is-sky-blue')}>
                  <span className={cx('palette__text')}>#75D0FF</span>
                </div>
              </div>
            </ScrollViewClass>

            <ScrollViewClass>
              <div className={cx('font')}>
                <p className={cx('font__title')}>나눔스퀘어</p>
                <ul className={cx('font__list')}>
                  <li className={cx('font__item')}>
                    <div className={cx('font__weight')}>
                      Regular
                      <sup className={cx('font__number')}>01</sup>
                    </div>
                    <div className={cx('font__example')}>
                      가나다라마바사아자차카타파하
                      <br />
                      ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    </div>
                  </li>
                  <li className={cx('font__item', 'is-bold')}>
                    <div className={cx('font__weight')}>
                      Bold
                      <sup className={cx('font__number')}>02</sup>
                    </div>
                    <div className={cx('font__example')}>
                      가나다라마바사아자차카타파하
                      <br />
                      ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollViewClass>
          </BasicSection>
        </div>

        <section className={cx('home')}>
          <BasicSection tagName="div">
            <BasicSectionHead>
              <BasicTitle>Home UX/UI</BasicTitle>
            </BasicSectionHead>
          </BasicSection>

          <ScrollViewClass>
            <div className={cx('view-images-wrap', 'home__phone')}>
              <div className={cx('view-images')}>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['home-1.jpg']} alt="" className={cx('device-img')} />
                    <div className={cx('home__phone__info')}>
                      <div className={cx('home__phone__info-title')}>
                        <span className="inline-block">개인 맞춤형</span> <span className="inline-block">정보 제공</span>
                      </div>
                      <div className={cx('home__phone__info-text')}>
                        <span className="inline-block">홈 화면에서</span> <span className="inline-block">내가 예약한 일정과</span> <span className="inline-block">현재 상태를</span>{' '}
                        <span className="inline-block">바로 확인할 수 있습니다</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['home-2.jpg']} alt="" className={cx('device-img')} />
                    <div className={cx('home__phone__info')}>
                      <div className={cx('home__phone__info-title')}>내 팀 일정 확인</div>
                      <div className={cx('home__phone__info-text')}>
                        <span className="inline-block">내가 속한 팀의 일정을</span> <span className="inline-block">확인할 수 있습니다</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('home__phone__bg')}></div>
            </div>
          </ScrollViewClass>
        </section>

        <div className={cx('seat')}>
          <BasicSection>
            <BasicSectionHead>
              <BasicTitle>좌석 예약</BasicTitle>
            </BasicSectionHead>

            <ScrollViewClass>
              <BasicText className={cx('seat__text')}>
                각 좌석의 사용현황을 한눈에 볼 수 있으며, <span className="display-block-pc-only">좌석유형의 컬러 분류에 따라 좌석명, 성명, 좌석옵션을 선택적으로도 확인 가능합니다.</span>
              </BasicText>

              <div className={cx('view-images', 'seat__phone')}>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['seat-1.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['seat-2.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['seat-3.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
              </div>
            </ScrollViewClass>
          </BasicSection>
        </div>

        <div className={cx('meeting')}>
          <BasicSection>
            <BasicSectionHead>
              <BasicTitle>회의 예약</BasicTitle>
            </BasicSectionHead>

            <ScrollViewClass>
              <BasicText className={cx('meeting__text')}>
                회의실 예약과 전반적인 회의 현황 확인할 수 있습니다.
                <br />
                회의실 앞에 위치한 PAD를 사용하여 각 회의실의 현황을 구체적으로 확인 가능합니다.
              </BasicText>

              <div className={cx('view-images', 'meeting__phone')}>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['meeting-1.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['meeting-3.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['meeting-2.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['meeting-4.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
              </div>
            </ScrollViewClass>
          </BasicSection>
        </div>

        <div className={cx('hr')}></div>

        <div className={cx('gallery-pc')}>
          <BasicSection tagName="div">
            <ScrollViewClass>
              <div className={cx('phone', 'gallery-pc__device')}>
                <div className={cx('phone__object')}>
                  <div className={cx('phone__inner')}>
                    <img src={imagesSrc['pc-1.jpg']} alt="" className={cx('phone__img')} />
                  </div>
                </div>
              </div>
              <div className={cx('gallery-pc__group')}>
                <div className={cx('gallery-pc__block')}>
                  <img src={imagesSrc['pc-2.jpg']} alt="" className={cx('device-img')} />
                </div>
                <div className={cx('gallery-pc__block')}>
                  <img src={imagesSrc['pc-3.jpg']} alt="" className={cx('device-img')} />
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

export default SkSmartOffice;
