import React, { Component } from 'react';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes, importImages } from 'utils/core';

import { PortfolioLayout, PortfolioTop, PortfolioOverview, BasicSection, BasicSectionHead, BasicTitle, BasicText, ScrollViewClass } from 'components';

import data from 'datas/portfolio/LotteSmartHome';

import * as styles from './LotteSmartHome.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

const imagesSrc = importImages(require.context('./images/', true, /\.(png|jpe?g|gif)$/));

class LotteSmartHome extends Component {
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

        <div className={cx('goal-and-keywords')}>
          <BasicSection className={cx('goal')}>
            <BasicSectionHead className={cx('goal__head')}>
              <BasicTitle>PROJECT GOAL</BasicTitle>
            </BasicSectionHead>

            <ScrollViewClass>
              <BasicText className={cx('goal__text')}>
                롯데 스마트홈은 입주민이 언제 어디서나 우리집을 쉽게 관리하고, 단지 곳곳을 편안하게 이용할 수 있도록 다양한 스마트 기능을 제공합니다.
                <br />
                따라서 정보 및 기능의 설계를 단순화하고, 정보 그루핑이 효율적인 박스형식의 UI를 제공함으로써  입주민과 가족구성원 모두가 간단하게 사용할 수 있도록 합니다.
              </BasicText>

              <div className={cx('goal__contents')}>
                <div className={cx('goal-item')}>
                  <p className={cx('goal-item__text')}>
                    단지 곳곳을<br />
                    쉽고 편안하게
                  </p>
                </div>
                <div className={cx('goal-item')}>
                  <p className={cx('goal-item__text')}>
                    언제 어디서나<br />
                    원격 제어
                  </p>
                </div>
                <div className={cx('goal-item')}>
                  <p className={cx('goal-item__text')}>
                    편안한<br />
                    스마트 라이프
                  </p>
                </div>
              </div>
            </ScrollViewClass>
          </BasicSection>

          <BasicSection className={cx('keywords')}>
            <BasicSectionHead className={cx('keywords__head')}>
              <BasicTitle>UX·UI KEYWORDS</BasicTitle>
            </BasicSectionHead>

            <ScrollViewClass>
              <div className={cx('keywords__contents')}>
                <div className={cx('keywords-inbox')}>
                  <div className={cx('keywords-item')}>
                    <h4 className={cx('keywords-item__title')}>Comfort</h4>
                    <p className={cx('keywords-item__text')}>
                      가족 단위가 사용하는 서비스로 세대 모두가 <br className="is-mobile-only" />
                      공감할 수 있는 편안함을 표현
                    </p>
                  </div>
                  <div className={cx('keywords-item')}>
                    <h4 className={cx('keywords-item__title')}>Smart</h4>
                    <p className={cx('keywords-item__text')}>
                      직관적인 UX/UI를 통해 쉽고 빠르게 <br className="is-mobile-only" />
                      원격 제어 및 사용자 맞춤형 스마트 서비스 제공
                    </p>
                  </div>
                  <div className={cx('keywords-item')}>
                    <h4 className={cx('keywords-item__title')}>Vibrancy</h4>
                    <p className={cx('keywords-item__text')}>
                      라이프 스타일을 나타내는 다양한 아이콘들과 <br className="is-mobile-only" />
                      생동감 있는 그래픽을 통해 사용자의 흥미 증대
                    </p>
                  </div>
                </div>
              </div>
            </ScrollViewClass>
          </BasicSection>
        </div>

        <div className={cx('design-system')}>
          <BasicSection>
            <BasicSectionHead className={cx('design-system__head')}>
              <BasicTitle>Design system</BasicTitle>
            </BasicSectionHead>

            <ScrollViewClass>
              <BasicText className={cx('design-system__text')}>
                롯데의 레드와 스마트한 블루가 섞인 퍼플 컬러를 통해 ‘생동감’과 ‘스마트함’이라는 롯데 스마트홈만의 아이덴티티를 부여합니다.
                <br />
                퍼플과 함께 사용되는 네이비 컬러를 통해 비교적 편안하고 차분한 분위기를 나타내고자 하였습니다.
              </BasicText>

              <div className={cx('palette')}>
                <div className={cx('palette__item', 'is-purple40')}>
                  <span className={cx('palette__text')}>#6700B6</span>
                </div>
                <div className={cx('palette__item', 'is-purple30')}>
                  <span className={cx('palette__text')}>#6A36D8</span>
                </div>
                <div className={cx('palette__item', 'is-navy50')}>
                  <span className={cx('palette__text')}>#304466</span>
                </div>
                <div className={cx('palette__item', 'is-black')}>
                  <span className={cx('palette__text')}>#111111</span>
                </div>
              </div>
            </ScrollViewClass>

            <ScrollViewClass>
              <div className={cx('font')}>
                <div className={cx('font__sample-box')}>
                  <span className={cx('font__sample')}>Aa</span>
                </div>
                <div className={cx('font__preview')}>
                  <h4 className={cx('font__title')}>Spoqa Han Sans Neo</h4>
                  <p className={cx('font__text')}>
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  </p>
                  <p className={cx('font__text')}>
                    abcdefghifklmnopqrstuvwxyz
                  </p>
                  <p className={cx('font__text')}>
                    가나다라마바사아자차카타파하
                  </p>
                  <p className={cx('font__text')}>
                    0123456789!@#$%^&*()_+=-[]{}/;:?
                  </p>
                </div>
              </div>
            </ScrollViewClass>

            <ScrollViewClass>
              <div className={cx('icons')}>
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

                <BasicText className={cx('icons__text')}>
                  다양한 원격 제어 시스템을 아이콘을 통해 <br className="is-mobile-only" />
                  직관적으로 표현함으로써 흥미롭고 편안한 주거 생활을 경험할 수 있도록 합니다.
                </BasicText>
              </div>
            </ScrollViewClass>
          </BasicSection>
        </div>

        <div className={cx('home')}>
          <BasicSection>
            <BasicSectionHead className={cx('home__head')}>
              <BasicTitle>HOME</BasicTitle>
            </BasicSectionHead>

            <ScrollViewClass>
              <BasicText className={cx('home__text')}>
                메인홈의 백그라운드 컬러가 시간에 따라 퍼플(밤) , 블루(낮) , 레드(동틀녘, 해질녘) 세가지로 변경됩니다.
                <br />
                날씨와 시간에 따라 메뉴를 추천받을 수 있으며, 사용자가 직접 커스텀이 가능한 사용자 모드 및 즐겨찾기를 통해 메인홈에서 간편하게 원격 제어가 가능합니다.
              </BasicText>

              <div className={cx('home-img')}>
                <div className={cx('home-img__item')}>
                  <figure className={cx('home-img__figure')}>
                    <figcaption className={cx('home-img__caption')}>Night 20:00 - 05:00</figcaption>
                    <img src={imagesSrc['home-1.png']} alt="" className={cx('home-img__image')} />
                  </figure>
                </div>
                <div className={cx('home-img__item')}>
                  <figure className={cx('home-img__figure')}>
                    <figcaption className={cx('home-img__caption')}>Afternoon 08:00 - 17:00</figcaption>
                    <img src={imagesSrc['home-2.png']} alt="" className={cx('home-img__image')} />
                  </figure>
                </div>
                <div className={cx('home-img__item')}>
                  <figure className={cx('home-img__figure')}>
                    <figcaption className={cx('home-img__caption')}><span className={cx('home-img__pc-only')}>Sunrise </span>05:00 - 08:00 / <span className={cx('home-img__pc-only')}>Nightfall </span>17:00 - 20:00</figcaption>
                    <img src={imagesSrc['home-3.png']} alt="" className={cx('home-img__image')} />
                  </figure>
                </div>
              </div>
            </ScrollViewClass>
          </BasicSection>
        </div>

        <div className={cx('house')}>
          <BasicSection>
            <BasicSectionHead className={cx('house__head')}>
              <BasicTitle>MY HOUSE &amp; OUTING </BasicTitle>
            </BasicSectionHead>

            <ScrollViewClass>
              <BasicText className={cx('house__text')}>
                우리집 또는 아파트 내에 있는 기기 및 주거 환경을 한눈에 볼 수 있으며, ON OFF 버튼을 통해서 전체 제어를 할 수 있습니다.
                <br />
                토글 또는 슬라이드, 버튼 등의 UI를 통해 각 공간마다 세부적으로 제어가 가능합니다.
              </BasicText>
            </ScrollViewClass>
          </BasicSection>

          <div className={cx('house__container')}>
            <BasicSection>
              <ScrollViewClass>
                <div className={cx('house-img')}>
                  <div className={cx('house-img__item')}>
                    <figure className={cx('house-img__figure')}>
                      <img src={imagesSrc['house-1.png']} alt="" className={cx('house-img__image')} />
                    </figure>
                  </div>
                  <div className={cx('house-img__item')}>
                    <figure className={cx('house-img__figure')}>
                      <img src={imagesSrc['house-2.png']} alt="" className={cx('house-img__image')} />
                    </figure>
                  </div>
                  <div className={cx('house-img__item')}>
                    <figure className={cx('house-img__figure')}>
                      <img src={imagesSrc['house-3.png']} alt="" className={cx('house-img__image')} />
                    </figure>
                  </div>
                  <div className={cx('house-img__item')}>
                    <figure className={cx('house-img__figure')}>
                      <img src={imagesSrc['house-4.png']} alt="" className={cx('house-img__image')} />
                    </figure>
                  </div>
                </div>
              </ScrollViewClass>
            </BasicSection>
          </div>
        </div>

        <div className={cx('custom')}>
          <BasicSection>
            <BasicSectionHead className={cx('custom__head')}>
              <BasicTitle>CUSTOM & MANAGEMENT</BasicTitle>
            </BasicSectionHead>

            <ScrollViewClass>
              <BasicText className={cx('custom__text')}>
                사용자모드와 즐겨찾기의 설정 및 편집 기능을 제공하여 사용자의 라이프스타일에 따라 취향껏 홈화면을 커스텀하고, <br className={cx('custom__pc-only')} />
                편리하게 생활 편의 서비스를 이용할 수 있도록 합니다.
              </BasicText>

              <div className={cx('custom__container')}>
                <div className={cx('custom-img')}>
                  <div className={cx('custom-img__item')}>
                    <figure className={cx('custom-img__figure')}>
                      <img src={imagesSrc['custom-usermode-1.png']} alt="" className={cx('custom-img__image')} />
                    </figure>
                  </div>
                  <div className={cx('custom-img__item')}>
                    <figure className={cx('custom-img__figure')}>
                      <img src={imagesSrc['custom-usermode-2.png']} alt="" className={cx('custom-img__image')} />
                    </figure>
                  </div>
                  <div className={cx('custom-img__item')}>
                    <figure className={cx('custom-img__figure')}>
                      <img src={imagesSrc['custom-usermode-3.png']} alt="" className={cx('custom-img__image')} />
                    </figure>
                  </div>
                </div>
                <div className={cx('custom-explain')}>
                  <h4 className={cx('custom-explain__title')}>USERMODE</h4>
                  <p className={cx('custom-explain__text')}>
                    사용자의 외출, 취침 등의 라이프 스타일에 따라 제어가 필요한 기기들을 편리하게 커스텀할 수 있습니다.
                  </p>
                </div>
              </div>
            </ScrollViewClass>

            <ScrollViewClass>
              <div className={cx('custom__container')}>
                <div className={cx('custom-img')}>
                  <div className={cx('custom-img__item')}>
                    <figure className={cx('custom-img__figure')}>
                      <img src={imagesSrc['custom-bookmark-1.png']} alt="" className={cx('custom-img__image')} />
                    </figure>
                  </div>
                  <div className={cx('custom-img__item')}>
                    <figure className={cx('custom-img__figure')}>
                      <img src={imagesSrc['custom-bookmark-2.png']} alt="" className={cx('custom-img__image')} />
                    </figure>
                  </div>
                  <div className={cx('custom-img__item')}>
                    <figure className={cx('custom-img__figure')}>
                      <img src={imagesSrc['custom-bookmark-3.png']} alt="" className={cx('custom-img__image')} />
                    </figure>
                  </div>
                </div>
                <div className={cx('custom-explain')}>
                  <h4 className={cx('custom-explain__title')}>BOOKMARK</h4>
                  <p className={cx('custom-explain__text')}>
                    공간 별 각 기기 또는 아파트 소식 등의 메뉴를 메인홈에 표출하여 <br className='is-tablet-only' />
                    언제 어디서든 쉽게 정보를 확인할 수 있도록 합니다.
                  </p>
                </div>
              </div>
            </ScrollViewClass>
          </BasicSection>
        </div>

        <div className={cx('convenience')}>
          <div className={cx('convenience-head')}>
            <BasicSection>
              <BasicSectionHead className={cx('convenience__head')}>
                <BasicTitle>APART CONVENIENCE</BasicTitle>
              </BasicSectionHead>

              <ScrollViewClass>
                <BasicText className={cx('convenience__text')}>
                  에너지 소비량 조회, 주차 관리, 아파트 소식 등의 비대면 서비스를 통해 보다 편리한 주거 생활을 돕습니다.
                </BasicText>

                <div className={cx('convenience-head-img')}>
                  <div className={cx('convenience-head-img__item')}>
                    <figure className={cx('convenience-head-img__figure')}>
                      <img src={imagesSrc['convenience-head-1.png']} alt="" className={cx('convenience-head-img__image')} />
                    </figure>
                  </div>
                  <div className={cx('convenience-head-img__item')}>
                    <figure className={cx('convenience-head-img__figure')}>
                      <img src={imagesSrc['convenience-head-2.png']} alt="" className={cx('convenience-head-img__image')} />
                    </figure>
                  </div>
                  <div className={cx('convenience-head-img__item')}>
                    <figure className={cx('convenience-head-img__figure')}>
                      <img src={imagesSrc['convenience-head-3.png']} alt="" className={cx('convenience-head-img__image')} />
                    </figure>
                  </div>
                </div>
              </ScrollViewClass>
            </BasicSection>
          </div>

          <div className={cx('convenience-body')}>
            <BasicSection>
              <ScrollViewClass>
                <div className={cx('convenience-body-img')}>
                  <div className={cx('convenience-body-img__item')}>
                    <figure className={cx('convenience-body-img__figure')}>
                      <img src={imagesSrc['convenience-body-1.png']} alt="" className={cx('convenience-body-img__image')} />
                    </figure>
                  </div>
                  <div className={cx('convenience-body-img__item')}>
                    <figure className={cx('convenience-body-img__figure')}>
                      <img src={imagesSrc['convenience-body-2.png']} alt="" className={cx('convenience-body-img__image')} />
                    </figure>
                  </div>
                  <div className={cx('convenience-body-img__item')}>
                    <figure className={cx('convenience-body-img__figure')}>
                      <img src={imagesSrc['convenience-body-3.png']} alt="" className={cx('convenience-body-img__image')} />
                    </figure>
                  </div>
                  <div className={cx('convenience-body-img__item')}>
                    <figure className={cx('convenience-body-img__figure')}>
                      <img src={imagesSrc['convenience-body-4.png']} alt="" className={cx('convenience-body-img__image')} />
                    </figure>
                  </div>
                  <div className={cx('convenience-body-img__item')}>
                    <figure className={cx('convenience-body-img__figure')}>
                      <img src={imagesSrc['convenience-body-5.png']} alt="" className={cx('convenience-body-img__image')} />
                    </figure>
                  </div>
                  <div className={cx('convenience-body-img__item')}>
                    <figure className={cx('convenience-body-img__figure')}>
                      <img src={imagesSrc['convenience-body-6.png']} alt="" className={cx('convenience-body-img__image')} />
                    </figure>
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

export default LotteSmartHome;
