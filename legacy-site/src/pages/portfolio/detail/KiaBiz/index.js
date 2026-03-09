import React, { Component } from 'react';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes, importImages } from 'utils/core';

import { PortfolioLayout, PortfolioTop, PortfolioOverview, BasicSection, BasicSectionHead, BasicTitle, BasicText, ScrollViewClass } from 'components';

import data from 'datas/portfolio/KiaBiz';

import * as styles from './KiaBiz.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

const imagesSrc = importImages(require.context('./images/', true, /\.(png|jpe?g|gif|svg)$/));

const paletteColors = [
  { color: "#99C051", text: "#fff" },
  { color: "#5D7D2B", text: "#fff" },
  { color: "#1A1A1A", text: "#fff" },
  { color: "#05141F", text: "#fff" },
  { color: "#6A7A87", text: "#fff" },
  { color: "#FFFFFF", text: "#000" },
];

class KiaBiz extends Component {
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

        <div className={cx('pretendard-wrap')}>
          <PortfolioOverview
            data={data.overview}
            classNames={{
              section: cx('overview'),
              head: cx('overview__head'),
              info: cx('overview__info'),
              description: cx('overview__description'),
            }}
          />

          <ScrollViewClass>
            <div className={cx('slogan')}>
              <div className={cx('slogan__item')}>
                <figure className={cx('slogan__figure')}>
                  <img src={imagesSrc['slogan-1.jpg']} alt="" className={cx('slogan__image')} />
                  <figcaption className={cx('slogan__caption')}>업무 시간엔 회사 차</figcaption>
                </figure>
              </div>
              <div className={cx('slogan__item')}>
                <figure className={cx('slogan__figure')}>
                  <img src={imagesSrc['slogan-2.jpg']} alt="" className={cx('slogan__image')} />
                  <figcaption className={cx('slogan__caption')}>퇴근하면 내차</figcaption>
                </figure>
              </div>
            </div>
          </ScrollViewClass>

          <div className={cx('design')}>
            <div className={cx('rebranding')}>
              <BasicSection className={cx('pc-width-max')}>
                <BasicSectionHead className={cx('font-family-montserrat')}>
                  <BasicTitle classNames={{ root: cx('text-transform-none') }}>REBRANDING</BasicTitle>
                </BasicSectionHead>

                <ScrollViewClass>
                  <h4 className={cx('basic-subtitle')}>위블 비즈의 새로운 이름 ’기아 비즈’</h4>
                  <BasicText className={cx('basic-text')}>
                    '기아 렌터카’, ‘기아 플렉스’ 등 기아의 모빌리티 서비스 체계 구축을 위해 위블 비즈는 독립 브랜드에서 <br className={cx('mb-none')} />
                    기아의 브랜드 체계로 편입되며 ‘기아 비즈’로 새롭게 개편되었습니다.
                  </BasicText>

                  <div className={cx('rebranding-conts')}>
                    <div className={cx('rebranding-conts__service')}>
                      <div className={cx('rebranding-conts__service-item')}>
                        <div className={cx('rebranding-conts__service-txt')}>
                          <div className={cx('rebranding-conts__service-inner')}>
                            <b>기아 비즈</b>
                            <span>전기차 공유 서비스</span>
                          </div>
                        </div>
                      </div>
                      <div className={cx('rebranding-conts__service-item')}>
                        <div className={cx('rebranding-conts__service-txt')}>
                          <div className={cx('rebranding-conts__service-inner')}>
                            <b>기아 렌터카</b>
                            <span>장기 렌트 서비스</span>
                          </div>
                        </div>
                      </div>
                      <div className={cx('rebranding-conts__service-item')}>
                        <div className={cx('rebranding-conts__service-txt')}>
                          <div className={cx('rebranding-conts__service-inner')}>
                            <b>기아 플렉스</b>
                            <span>월 구독 서비스</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={cx('rebranding-conts__arrow')}>
                      <img src={imagesSrc['rebranding-arrow-right.svg']} alt="오른쪽 화살표" className={cx('rebranding-conts__arrow-image')} />
                    </div>
                    <div className={cx('rebranding-conts__logo')}>
                      <span></span>
                      <span></span>
                      <span></span>
                      <h6>
                        <img src={imagesSrc['logo-kia-mobility.svg']} alt="KIA Mobility" />
                      </h6>
                    </div>
                  </div>
                </ScrollViewClass>
              </BasicSection>
            </div>

            <div className={cx('system')}>
              <BasicSection className={cx('pc-width-max')}>
                <BasicSectionHead className={cx('font-family-montserrat')}>
                  <BasicTitle classNames={{ root: cx('text-transform-none') }}>DESIGN SYSTEM</BasicTitle>
                </BasicSectionHead>

                <ScrollViewClass>
                  <div className={cx('palette')}>
                    {paletteColors.map((color) => (
                      <div
                        key={color.color}
                        className={cx("palette__item")}
                        style={{ backgroundColor: color.color }}
                      >
                        <span
                          className={cx("palette__text")}
                          style={{ color: color.text }}
                        >
                          {color.color}
                        </span>
                      </div>
                    ))}
                  </div>
                </ScrollViewClass>

                <ScrollViewClass>
                  <div className={cx('font')}>
                    <div className={cx('font__sample-box')}>
                      <span className={cx('font__sample', 'font-family-kia-signature')}>Aa</span>
                    </div>
                    <div className={cx('font__preview')}>
                      <h4 className={cx('font__title', 'font-family-kia-signature')}>Kia Signature</h4>
                      <p className={cx('font__text', 'font-family-kia-signature')}>ABCDEFGHIFKLMNOPQRSTUVWXYZ</p>
                      <p className={cx('font__text', 'font-family-kia-signature')}>abcdefghifklmnopqrstuvwxyz</p>
                      <p className={cx('font__text', 'font-family-kia-signature')}>0123456789!@#$%^&*()_+=-[]{`}{`}/;:?</p>
                    </div>
                  </div>
                </ScrollViewClass>
              </BasicSection>
            </div>

            <div className={cx('icons')}>
              <ScrollViewClass>
                <div className={cx('icons__inner')}>
                  <img src={imagesSrc['icons-pc-1.svg']} alt="icons 1" className={cx('icons__image', 'mb-none')} />
                  <img src={imagesSrc['icons-pc-2.svg']} alt="icons 2" className={cx('icons__image', 'mb-none')} />
                  <img src={imagesSrc['icons-pc-3.svg']} alt="icons 3" className={cx('icons__image', 'mb-none')} />
                  <img src={imagesSrc['icons-pc-4.svg']} alt="icons 4" className={cx('icons__image', 'mb-none')} />
                  <img src={imagesSrc['icons-tablet-1.svg']} alt="icons 1" className={`${cx('icons__image', 'mini-none')} is-mobile-only`} />
                  <img src={imagesSrc['icons-tablet-2.svg']} alt="icons 2" className={`${cx('icons__image', 'mini-none')} is-mobile-only`} />
                  <img src={imagesSrc['icons-tablet-3.svg']} alt="icons 3" className={`${cx('icons__image', 'mini-none')} is-mobile-only`} />
                  <img src={imagesSrc['icons-tablet-4.svg']} alt="icons 4" className={`${cx('icons__image', 'mini-none')} is-mobile-only`} />
                  <img src={imagesSrc['icons-mobile-1.svg']} alt="icons 1" className={`${cx('icons__image')} is-mobile-mini-only`} />
                  <img src={imagesSrc['icons-mobile-2.svg']} alt="icons 2" className={`${cx('icons__image')} is-mobile-mini-only`} />
                  <img src={imagesSrc['icons-mobile-3.svg']} alt="icons 3" className={`${cx('icons__image')} is-mobile-mini-only`} />
                  <img src={imagesSrc['icons-mobile-4.svg']} alt="icons 4" className={`${cx('icons__image')} is-mobile-mini-only`} />
                </div>
              </ScrollViewClass>
            </div>
          </div>
        
          <div className={cx('main')}>
            <BasicSection className={cx('pc-width-max')}>
              <BasicSectionHead className={cx('font-family-montserrat')}>
                <BasicTitle classNames={{ root: cx('text-transform-none') }}>MAIN</BasicTitle>
              </BasicSectionHead>

              <ScrollViewClass>
                <h4 className={cx('basic-subtitle')}>필요한 정보를 쉽고 빠르게</h4>
                <BasicText className={cx('basic-text', 'main-text')}>
                  상단의 검색 필터로 사용자가 원하는 상품을 쉽고 빠르게 찾을 수 있게 하고, 하단 미니 게시판을 통해 할인 및 공지 정보를 맥락에 맞게 제공함으로써, 정보 탐색 과정의 효율과 몰입도를 함께 높였습니다.
                </BasicText>
              </ScrollViewClass>
            </BasicSection>

            <ScrollViewClass>
              <div className={cx('main-conts')}>
                <div className={cx('map')}>
                  <span className={cx('map__keyword', 'map-ic-discount')}>지금특가</span>
                  <span className={cx('map__keyword', 'map-ic-ball')}>주말 시승</span>
                  <span className={cx('map__keyword', 'map-ic-bag')}>퇴출근</span>
                  <span className={cx('map__keyword', 'map-ic-carrier')}>주말</span>
                  <span className={cx('map__keyword', 'map-ic-ball')}>주중 시승</span>
                  <span className={cx('map__keyword', 'map-ic-time')}>타임패스</span>
                  <div className={cx('map__image')}>
                    <figure className={cx('map__figure')}>
                      <img src={imagesSrc['map-phone-1.png']} alt="Kia Biz 메인 모바일 화면 1" />
                    </figure>
                    <figure className={cx('map__figure')}>
                      <img src={imagesSrc['map-phone-2.png']} alt="Kia Biz 메인 모바일 화면 2" />
                    </figure>
                  </div>
                </div>
              </div>
            </ScrollViewClass>
          </div>

          <div className={cx('reservation')}>
            <BasicSection className={cx('pc-width-max')}>
              <BasicSectionHead className={cx('font-family-montserrat')}>
                <BasicTitle classNames={{ root: cx('text-transform-none') }}>RESERVATION</BasicTitle>
              </BasicSectionHead>

              <ScrollViewClass>
                <h4 className={cx('basic-subtitle')}>흐름에 따라 쉽게 예약하는 차량 대여</h4>
                <BasicText className={cx('basic-text')}>
                  이용권 선택부터 대여 기간, 차량 선택까지 <br className='is-mobile-only' />예약 과정을 단계별로 구성해 <br className={cx('mb-none')} />
                  사용자가 흐름에 따라 <br className='is-mobile-only' />자연스럽게 예약을 진행할 수 있도록 했습니다.<br />
                  필요한 선택만 제시해 예약 과정의 복잡도를 낮췄습니다.
                </BasicText>
              </ScrollViewClass>
            </BasicSection>

            <ScrollViewClass>
              <div className={cx('reservation-conts')}>
                <BasicSection className={cx('pc-width-max')}>
                  <ol className={cx('reservation-flow')}>
                    <li className={cx('reservation-flow__item')}>
                      <div className={cx('reservation-flow__head')}>
                        <span className={cx('reservation-flow__num')}>1</span>
                        <h6 className={cx('reservation-flow__title')}>상품 선택</h6>
                      </div>
                      <div className={cx('reservation-flow__body')}>
                        <figure className={cx('reservation-flow__image')}>
                          <img src={imagesSrc['reservation-1.png']} alt="상품 선택 화면" />
                        </figure>
                      </div>
                    </li>
                    <li className={cx('reservation-flow__item')}>
                      <div className={cx('reservation-flow__head')}>
                        <span className={cx('reservation-flow__num')}>2</span>
                        <h6 className={cx('reservation-flow__title')}>기간 선택</h6>
                      </div>
                      <div className={cx('reservation-flow__body')}>
                        <figure className={cx('reservation-flow__image')}>
                          <img src={imagesSrc['reservation-2.png']} alt="기간 선택 화면" />
                        </figure>
                      </div>
                    </li>
                    <li className={cx('reservation-flow__item')}>
                      <div className={cx('reservation-flow__head')}>
                        <span className={cx('reservation-flow__num')}>3</span>
                        <h6 className={cx('reservation-flow__title')}>차량 선택</h6>
                      </div>
                      <div className={cx('reservation-flow__body')}>
                        <figure className={cx('reservation-flow__image')}>
                          <img src={imagesSrc['reservation-3.png']} alt="차량 선택 화면" />
                        </figure>
                      </div>
                    </li>
                  </ol>
                </BasicSection>
              </div>
            </ScrollViewClass>
          </div>

          <div className={cx('smartkey')}>
            <BasicSection className={cx('pc-width-max')}>
              <BasicSectionHead className={cx('font-family-montserrat')}>
                <BasicTitle classNames={{ root: cx('text-transform-none') }}>SMART KEY</BasicTitle>
              </BasicSectionHead>

              <ScrollViewClass>
                <h4 className={cx('basic-subtitle')}>더 선명하게, 집중도를 높인 스마트키</h4>
                <BasicText className={cx('basic-text')}>
                  차량 아이콘으로 잠금 상태를 직관적으로 인지할 수 있도록 개선했습니다.<br className={cx('mini-none')} /> 
                  또한 배경은 어두운 톤으로 적용해 백그라운드 화면과 구분함으로써 <br className={cx('mini-none')} />
                  조작 영역의 인지성과 사용 집중도를 함께 높였습니다.
                </BasicText>
              </ScrollViewClass>
            </BasicSection>

            <div className={cx('smartkey-production')}>
              <figure className={cx('smartkey-production__image')}>
                <img src={imagesSrc['smartkey-production-pc.png']} alt="스마트키 사용 예시 1" className={cx('mb-none')} />
                <img src={imagesSrc['smartkey-production-tablet.png']} alt="스마트키 사용 예시 2" className='is-mobile-only' />
              </figure>
            </div>

            <ScrollViewClass>
              <div className={cx('smartkey-conts')}>
                <BasicSection className={cx('pc-width-max')}>
                  <ul className={cx('smartkey-flow')}>
                    <li className={cx('smartkey-flow__item')}>
                      <figure className={cx('smartkey-flow__image')}>
                        <img src={imagesSrc['smartkey-1.png']} alt="스마트키 예시 화면 1" />
                      </figure>
                    </li>
                    <li className={cx('smartkey-flow__item')}>
                      <figure className={cx('smartkey-flow__image')}>
                        <img src={imagesSrc['smartkey-2.png']} alt="스마트키 예시 화면 2" />
                      </figure>
                    </li>
                    <li className={cx('smartkey-flow__item')}>
                      <figure className={cx('smartkey-flow__image')}>
                        <img src={imagesSrc['smartkey-3.png']} alt="스마트키 위젯 예시 화면" />
                      </figure>
                    </li>
                  </ul>
                </BasicSection>
              </div>
            </ScrollViewClass>
          </div>

          <div className={cx('eco')}>
            <BasicSection className={cx('pc-width-max')}>
              <BasicSectionHead className={cx('font-family-montserrat')}>
                <BasicTitle classNames={{ root: cx('text-transform-none') }}>ECO REPORT</BasicTitle>
              </BasicSectionHead>

              <ScrollViewClass>
                <h4 className={cx('basic-subtitle')}>친환경 주행 기록을 시각적으로 제공</h4>
                <BasicText className={cx('basic-text', 'eco-text')}>
                  차량 반납 시 주행 기록과 탄소 배출 절감량을 확인할 수 있습니다. <br className={cx('mb-none')} />
                  누적 주행 거리에 따라 레벨과 일러스트가 부여되어 환경 보호에 대한 <br className={cx('mb-none')} />
                  기여도를 보여줍니다.
                </BasicText>
              </ScrollViewClass>
            </BasicSection>

            <ScrollViewClass>
              <div className={cx('eco-conts')}>
                <div className={cx('eco-conts__inner')}>
                  <BasicSection className={cx('pc-width-max', 'eco-report-section')}>
                    <ul className={cx('eco-report')}>
                      <li className={cx('eco-report__item')}>
                        <figure className={cx('eco-report__image')}>
                          <img src={imagesSrc['eco-1.png']} alt="탄소 배출 절감량 확인 화면 1" />
                        </figure>
                      </li>
                      <li className={cx('eco-report__item')}>
                        <figure className={cx('eco-report__image')}>
                          <img src={imagesSrc['eco-2.png']} alt="탄소 배출 절감량 확인 화면 2" />
                        </figure>
                      </li>
                      <li className={cx('eco-report__item')}>
                        <figure className={cx('eco-report__image')}>
                          <img src={imagesSrc['eco-3.png']} alt="탄소 배출 절감량 확인 화면 3" />
                        </figure>
                      </li>
                    </ul>
                  </BasicSection>
                </div>
              </div>
            </ScrollViewClass>
          </div>

          <div className={cx('driving-info')}>
            <BasicSection className={cx('pc-width-max')}>
              <BasicSectionHead className={cx('font-family-montserrat')}>
                <BasicTitle classNames={{ root: cx('text-transform-none') }}>Driving Information</BasicTitle>
              </BasicSectionHead>

              <ScrollViewClass>
                <h4 className={cx('basic-subtitle')}>한눈에 확인하는 차량 대여 상태</h4>
                <BasicText className={cx('basic-text', 'driving-info-text')}>
                  대여 상태에 따라 안내 문구와 프로그레스 바를 제공해, <br className={cx('mini-none')} />
                  시간과 이용 상황을 자연스럽게 인지할 수 있는 경험을 제공합니다.
                </BasicText>
              </ScrollViewClass>
            </BasicSection>

            <ScrollViewClass>
              <div className={cx('driving-info-conts')}>
                <BasicSection className={cx('pc-width-max')}>
                  <figure className={cx('driving-info__image')}>
                    <img src={imagesSrc['driving-info-pc.png']} alt="차량 대여 상태 안내 화면 1" className={cx('mb-none')} />
                    <img src={imagesSrc['driving-info-mobile.png']} alt="차량 대여 상태 안내 화면 2" className='is-mobile-only' />
                  </figure>
                </BasicSection>
              </div>
            </ScrollViewClass>
          </div>
          
          <div className={cx('preview')}>
            <BasicSection className={cx('pc-width-max')}>
              <ScrollViewClass>
                <div className={cx('preview-inner')}>
                  {/* pc + tablet */}
                  <div className={cx('preview-conts', 'mb-none')}>
                    <div className={cx('preview-conts__item')}>
                      <figure className={cx('preview-conts__image')}>
                        <img src={imagesSrc['preview-1.jpg']} alt="기아비즈 앱 미리보기 화면 1" />
                      </figure>
                    </div>
                    <div className={cx('preview-conts__item')}>
                      <figure className={cx('preview-conts__image')}>
                        <img src={imagesSrc['preview-4.jpg']} alt="기아비즈 앱 미리보기 화면 4" />
                      </figure>
                    </div>
                    <div className={cx('preview-conts__item')}>
                      <figure className={cx('preview-conts__image')}>
                        <img src={imagesSrc['preview-5.jpg']} alt="기아비즈 앱 미리보기 화면 5" />
                      </figure>
                    </div>
                    <div className={cx('preview-conts__item')}>
                      <figure className={cx('preview-conts__image')}>
                        <img src={imagesSrc['preview-2.jpg']} alt="기아비즈 앱 미리보기 화면 2" />
                      </figure>
                    </div>
                    <div className={cx('preview-conts__item')}>
                      <figure className={cx('preview-conts__image')}>
                        <img src={imagesSrc['preview-6.jpg']} alt="기아비즈 앱 미리보기 화면 6" />
                      </figure>
                    </div>
                    <div className={cx('preview-conts__item')}>
                      <figure className={cx('preview-conts__image')}>
                        <img src={imagesSrc['preview-3.jpg']} alt="기아비즈 앱 미리보기 화면 3" />
                      </figure>
                    </div>
                  </div>

                  {/* mobile */}
                  <div className={cx('preview-conts', 'mb-only')}>
                    <div className={cx('preview-conts__column')}>
                      <div className={cx('preview-conts__item')}>
                        <figure className={cx('preview-conts__image')}>
                          <img src={imagesSrc['preview-1.jpg']} alt="기아비즈 앱 미리보기 화면 1" />
                        </figure>
                      </div>
                      <div className={cx('preview-conts__item')}>
                        <figure className={cx('preview-conts__image')}>
                          <img src={imagesSrc['preview-5.jpg']} alt="기아비즈 앱 미리보기 화면 5" />
                        </figure>
                      </div>
                      <div className={cx('preview-conts__item')}>
                        <figure className={cx('preview-conts__image')}>
                          <img src={imagesSrc['preview-6.jpg']} alt="기아비즈 앱 미리보기 화면 6" />
                        </figure>
                      </div>
                    </div>
                    <div className={cx('preview-conts__column')}>
                      <div className={cx('preview-conts__item')}>
                        <figure className={cx('preview-conts__image')}>
                          <img src={imagesSrc['preview-4.jpg']} alt="기아비즈 앱 미리보기 화면 4" />
                        </figure>
                      </div>
                      <div className={cx('preview-conts__item')}>
                        <figure className={cx('preview-conts__image')}>
                          <img src={imagesSrc['preview-2.jpg']} alt="기아비즈 앱 미리보기 화면 2" />
                        </figure>
                      </div>
                      <div className={cx('preview-conts__item')}>
                        <figure className={cx('preview-conts__image')}>
                          <img src={imagesSrc['preview-3.jpg']} alt="기아비즈 앱 미리보기 화면 3" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollViewClass>
            </BasicSection>
          </div>
        </div>
      </PortfolioLayout>
    );
  }
}

export default KiaBiz;
