import React, { Component } from 'react';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes, importImages } from 'utils/core';

import { PortfolioLayout, PortfolioTop, PortfolioOverview, BasicSection, BasicSectionHead, BasicTitle, BasicText, ScrollViewClass } from 'components';

import data from 'datas/portfolio/PetCareEvr';

import OverviewIcon from './images/evr_icon_01.inline.svg';

import * as styles from './PetCareEvr.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

const imagesSrc = importImages(require.context('./images/', false, /\.(png|jpe?g|gif)$/));

class PetCareEvr extends Component {
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
          <div className={cx('overview-icon')}>
            <OverviewIcon />
          </div>
          <PortfolioOverview data={data.overview} />
        </div>

        <div className={cx('goal-ux-ui')}>
          <ScrollViewClass>
            <div className={cx('goal')}>
              <BasicSection>
                <BasicSectionHead className={cx('goal__title')}>
                  <BasicTitle>Project goal</BasicTitle>
                </BasicSectionHead>

                <p className={cx('goal__text')}>
                  최적의 케어를 위한
                  <br />
                  병원 정보 관리
                </p>
                <div className={cx('exbox')}>
                  <div className={cx('exbox__object')}>
                    <div className={cx('exbox__item')}>
                      <img src={imagesSrc['evr_img_01.png']} alt="" className={cx('exbox__img')} />
                    </div>
                    <div className={cx('exbox__item')}>
                      <img src={imagesSrc['evr_img_02.png']} alt="" className={cx('exbox__img')} />
                    </div>
                  </div>
                </div>
              </BasicSection>
            </div>
          </ScrollViewClass>
          <ScrollViewClass>
            <div className={cx('goal-direction')}>
              <BasicSection>
                <div className={cx('goal-direction__wrap')}>
                  <div className={cx('goal-direction__left')}>
                    <BasicSectionHead className={cx('goal-direction__title')}>
                      <BasicTitle>Design Direction</BasicTitle>
                    </BasicSectionHead>
                    <div className={cx('goal-direction__contents')}>
                      <section className={cx('goal-section')}>
                        <div className={cx('goal-section__head')}>
                          <div className={cx('goal-section__num')}>01</div>
                          <div className={cx('goal-section__title-box')}>
                            <h4 className={cx('goal-section__title')}>Level Hierarchy</h4>
                          </div>
                        </div>
                      </section>
                      <section className={cx('goal-section')}>
                        <div className={cx('goal-section__head')}>
                          <div className={cx('goal-section__num')}>02</div>
                          <div className={cx('goal-section__title-box')}>
                            <h4 className={cx('goal-section__title')}>Clear Action</h4>
                          </div>
                        </div>
                      </section>
                      <section className={cx('goal-section')}>
                        <div className={cx('goal-section__head')}>
                          <div className={cx('goal-section__num')}>03</div>
                          <div className={cx('goal-section__title-box')}>
                            <h4 className={cx('goal-section__title')}>Easy Communication</h4>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className={cx('goal-direction__right')}>
                    <div className={cx('goal-direction__right-wrap')}>
                      <div className={cx('goal-direction__top-box')}>
                        <span>
                          많은 정보, 명확한 액션이 필요한
                          <span className={cx('inline-block')}></span>동물 병원 관리/조회 플랫폼
                        </span>
                      </div>
                      <div className={cx('goal-direction__bottom-box')}>
                        <span>
                          쉬운 커뮤니케이션을 기반으로 <span className={cx('inline-block')}></span>
                          복잡한 정보를 정확하게 이해할 수 <span className={cx('inline-block')}></span>
                          있어요!
                        </span>
                      </div>
                    </div>
                  </div>
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
                <div className={cx('palette__box')}>
                  <div className={cx('palette__left')}>
                    <div className={cx('palette__item', 'is-primary500')}>
                      <span className={cx('palette__text')}>Primary 500</span>
                      <span className={cx('palette__bottom-text')}>#4749FB</span>
                    </div>
                    <div className={cx('palette__item', 'is-primary600')}>
                      <span className={cx('palette__text-small', 'palette_none-text')}>Primary 600</span>
                    </div>
                    <div className={cx('palette__item', 'is-primary200')}>
                      <span className={cx('palette__text-small-black', 'palette_none-text')}>Primary 200</span>
                    </div>
                    <div className={cx('palette__item', 'is-primary100')}>
                      <span className={cx('palette__text-small-black', 'palette_none-text')}>Primary 100</span>
                    </div>
                  </div>
                  <div className={cx('palette__right')}>
                    <div className={cx('palette__item', 'is-secondary500')}>
                      <span className={cx('palette__text')}>Secondary 500</span>
                      <span className={cx('palette__bottom-text')}>#26A6CC</span>
                    </div>
                    <div className={cx('palette__item', 'is-secondary600')}>
                      <span className={cx('palette__text-small-black', 'palette_none-text')}>Secondary 600</span>
                    </div>
                    <div className={cx('palette__item', 'is-secondary200')}>
                      <span className={cx('palette__text-small-black', 'palette_none-text')}>Secondary 200</span>
                    </div>
                    <div className={cx('palette__item', 'is-secondary100')}>
                      <span className={cx('palette__text-small-black', 'palette_none-text')}>Secondary 100</span>
                    </div>
                  </div>
                </div>

                <div className={cx('palette__item', 'is-normally')}>
                  <span className={cx('palette__text-small')}>Normally</span>
                </div>
                <div className={cx('palette__item', 'is-success')}>
                  <span className={cx('palette__text-small')}>Success</span>
                </div>
                <div className={cx('palette__item', 'is-waiting')}>
                  <span className={cx('palette__text-small')}>Waiting</span>
                </div>
                <div className={cx('palette__item', 'is-danger')}>
                  <span className={cx('palette__text-small')}>Danger</span>
                </div>
                <div className={cx('palette__item', 'is-normally01')}></div>
                <div className={cx('palette__item', 'is-normally02')}></div>
                <div className={cx('palette__item', 'is-success01')}></div>
                <div className={cx('palette__item', 'is-success02')}></div>
                <div className={cx('palette__item', 'is-waiting01')}></div>
                <div className={cx('palette__item', 'is-waiting02')}></div>
                <div className={cx('palette__item', 'is-danger01')}></div>
                <div className={cx('palette__item', 'is-danger02')}></div>
              </div>
            </ScrollViewClass>

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
                </div>
              </div>

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

            <ScrollViewClass>
              <div className={cx('font')}>
                <div className={cx('font__title')}>
                  <span className={cx('font__title-main')}>Spoqa Han Sans Neo</span>
                </div>
                <div className={cx('font__box')}>
                  <div className={cx('font__left')}>
                    가나다라
                    <br />
                    0123.-
                  </div>
                  <div className={cx('font__text-wrap')}>
                    <div className={cx('font__text')}>
                      <div className={cx('font__title')}>
                        <div className={cx('font__title-main')}>Bold</div>
                      </div>
                      <p className={cx('font__title-sub-bold')}>
                        Spoqa Han Sans Neo는
                        <br />
                        다양한 웨이트를 지원합니다.
                      </p>
                    </div>
                    <div className={cx('font__text')}>
                      <div className={cx('font__title')}>
                        <div className={cx('font__title-main')}>Medium</div>
                      </div>
                      <p className={cx('font__title-sub-medium')}>
                        Spoqa Han Sans Neo는
                        <br />
                        다양한 웨이트를 지원합니다.
                      </p>
                    </div>
                    <div className={cx('font__text')}>
                      <div className={cx('font__title')}>
                        <div className={cx('font__title-main')}>Regular</div>
                      </div>
                      <p className={cx('font__title-sub-regular')}>
                        Spoqa Han Sans Neo는
                        <br />
                        다양한 웨이트를 지원합니다.
                      </p>
                    </div>
                    <div className={cx('font__text')}>
                      <div className={cx('font__title')}>
                        <div className={cx('font__title-main')}>Light</div>
                      </div>
                      <p className={cx('font__title-sub-light')}>
                        Spoqa Han Sans Neo는
                        <br />
                        다양한 웨이트를 지원합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollViewClass>
          </BasicSection>
        </div>

        <div className={cx('home')}>
          <BasicSection>
            <BasicSectionHead>
              <BasicTitle>Grid system</BasicTitle>
            </BasicSectionHead>

            <ScrollViewClass>
              <BasicText className={cx('home__text')}>
                다양한 정보와 리스트들을 최대한 쉽게 정의하기 위해서 큰 그리드의 틀에서 정보의 위계를 구분하였습니다. <span className={cx('inline-block')}></span>그리드를 통해 시각적 피로도를
                낮춰주고, 바쁘고 정신없는 병원에서도 빠르고 정확한 액션을 취할 수 있도록 도울 수 있습니다.
              </BasicText>
            </ScrollViewClass>
            <ScrollViewClass>
              <div className={cx('home__grid')}>
                <div className={cx('grid', 'grid01')}>
                  <div className={cx('grid__object')}>
                    <div className={cx('grid__inner')}>
                      <img src={imagesSrc['evr_img_03_grid.png']} alt="" className={cx('grid__img')} />
                    </div>
                  </div>
                </div>
                <div className={cx('home__icon')}>
                  <img src={imagesSrc['evr_icon_03.png']} alt="" />
                </div>
                <div className={cx('grid', 'grid02')}>
                  <div className={cx('grid__object')}>
                    <div className={cx('grid__inner')}>
                      <img src={imagesSrc['evr_img_03.png']} alt="" className={cx('grid__img')} />
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
                  <BasicTitle>진료</BasicTitle>
                </BasicSectionHead>
                <BasicText className={cx('console__text')}>
                  복잡하고 많은 정보들에 위계를 정하여 사용자가 편리하게 사용할 수 있도록 하였습니다. 진료 화면에서는 접수, 예약 상황 조회는 물론 각 환자에 대한 진료 및 입원이력 그리고 그에 대한
                  상세한 차트 정보까지 한 화면안에서 확인할 수 있습니다.
                </BasicText>
              </div>
            </ScrollViewClass>
          </BasicSection>
        </div>

        <div className={cx('console-screen')}>
          <BasicSection>
            <ScrollViewClass>
              <div className={cx('console-screen__wrap')}>
                <div className={cx('screen', 'screen02')}>
                  <div className={cx('screen__object')}>
                    <div className={cx('screen__inner')}>
                      <img src={imagesSrc['pc_evr_screen_01.png']} alt="" className={cx('screen__img')} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('console-screen__wrap-t')}>
                <div className={cx('screen', 'screen02')}>
                  <div className={cx('screen__object')}>
                    <div className={cx('screen__inner')}>
                      <img src={imagesSrc['tablet_evr_screen_01.png']} alt="" className={cx('screen__img')} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('console-screen__wrap-m')}>
                <div className={cx('screen', 'screen02')}>
                  <div className={cx('screen__object')}>
                    <div className={cx('screen__inner')}>
                      <img src={imagesSrc['mobile_evr_screen_01.png']} alt="" className={cx('screen__img')} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('console-screen__wrap')}>
                <div className={cx('console-chart')}>
                  <div className={cx('console-chart__title')}>CHART SYSTEM</div>
                  <div className={cx('console-chart__text')}>
                    진료 화면에서는 환자의 상세한 차트 정보를 한 눈에 볼 수 있습니다. <span className={cx('inline-block')}></span>
                    의사의 진료내역부터 vital, 검사 이력 및 정보까지 정리되어 있습니다.
                  </div>
                  <div className={cx('console-chart__wrap')}>
                    <div className={cx('console-chart__img')}>
                      <img src={imagesSrc['pc_evr_screen_02.png']} alt="" className={cx('console-chart__img')} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('console-screen__wrap-t02')}>
                <div className={cx('console-chart')}>
                  <div className={cx('console-chart__title')}>CHART SYSTEM</div>
                  <div className={cx('console-chart__text')}>
                    진료 화면에서는 환자의 상세한 차트 정보를 한 눈에 볼 수 있습니다. <span className={cx('inline-block')}></span>
                    의사의 진료내역부터 vital, 검사 이력 및 정보까지 정리되어 있습니다.
                  </div>
                  <div className={cx('console-chart__wrap')}>
                    <div className={cx('console-chart__img')}>
                      <img src={imagesSrc['tablet_evr_screen_02.png']} alt="" className={cx('console-chart__img')} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('console-screen__wrap-m02')}>
                <div className={cx('console-chart')}>
                  <div className={cx('console-chart__title')}>CHART SYSTEM</div>
                  <div className={cx('console-chart__text')}>
                    진료 화면에서는 환자의 상세한 차트 정보를 한 눈에 볼 수 있습니다. <span className={cx('inline-block')}></span>
                    의사의 진료내역부터 vital, 검사 이력 및 정보까지 정리되어 있습니다.
                  </div>
                  <div className={cx('console-chart__wrap')}>
                    <div className={cx('console-chart__img')}>
                      <img src={imagesSrc['mobile_evr_screen_02.png']} alt="" className={cx('console-chart__img')} />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollViewClass>
          </BasicSection>
        </div>

        <div className={cx('schedule')}>
          <BasicSection>
            <div className={cx('schedule__wrap')}>
              <ScrollViewClass>
                <div className={cx('schedule__head')}>
                  <BasicSectionHead>
                    <BasicTitle>일정</BasicTitle>
                  </BasicSectionHead>
                  <BasicText className={cx('schedule__text')}>
                    일정 화면에서는 환자 및 내부 일정에 대해 상세하게 확인할 수 있습니다. 예약과 접수 모두 각각 컨트롤이 가능하며 사용자가 한 눈에 병원의 현황과 이후 일정에 대해 쉽게 파악할 수 있도록
                    하였습니다. 가장 화면을 많이 볼 관리자는 이 화면에서 전체적인 일정을 관리할 수 있습니다.
                  </BasicText>
                </div>
              </ScrollViewClass>
              <ScrollViewClass>
                <div className={cx('schedule__img-wrap')}>
                  <div className={cx('schedule__img-left')}>
                    <div className={cx('schedule__inner')}>
                      <img src={imagesSrc['evr_img_08.png']} alt="" className={cx('schedule__img')} />
                    </div>
                  </div>
                  <div className={cx('schedule__img-right')}>
                    <div className={cx('schedule__inner01')}>
                      <img src={imagesSrc['evr_img_03.png']} alt="" className={cx('schedule__img01')} />
                    </div>
                  </div>
                  <div className={cx('schedule__img-right-m')}>
                    <div className={cx('schedule__inner-m')}>
                      <img src={imagesSrc['evr_img_03.png']} alt="" className={cx('schedule__img01')} />
                    </div>
                  </div>
                  <div className={cx('schedule__img-left-t')}>
                    <div className={cx('schedule__inner')}>
                      <img src={imagesSrc['evr_img_08.png']} alt="" className={cx('schedule__img')} />
                    </div>
                  </div>
                </div>
              </ScrollViewClass>
              <ScrollViewClass>
                <div className={cx('schedule__img-wrap02')}>
                  <div className={cx('schedule__img-left02')}>
                    <div className={cx('schedule__inner02')}>
                      <img src={imagesSrc['evr_img_09.png']} alt="" className={cx('schedule__img02')} />
                    </div>
                  </div>
                  <div className={cx('schedule__img-left-m')}>
                    <div className={cx('schedule__inner-left-m')}>
                      <img src={imagesSrc['evr_img_09.png']} alt="" className={cx('schedule__img02')} />
                    </div>
                  </div>
                  <div className={cx('schedule__img-right02')}>
                    <div>
                      빠르고 쉬운 액션을 위해
                      <br />
                      어디서든 떠있는 채팅
                    </div>
                  </div>
                </div>
              </ScrollViewClass>
            </div>
          </BasicSection>
        </div>

        <div className={cx('storage')}>
          <BasicSection>
            <ScrollViewClass>
              <div className={cx('storage__head')}>
                <BasicSectionHead>
                  <BasicTitle>수납</BasicTitle>
                </BasicSectionHead>
                <BasicText className={cx('storage__text')}>
                  수납 화면에서는 환자가 아닌 보호자를 대상으로 진행하기 때문에 환자 구분과 매칭이 잘 될 수 있도록 하는 것이 중요합니다. <span className={cx('inline-block')}></span>
                  관리자 및 고객이 금액에 대한 의문이 생기지 않도록하고, 사후 관리 또한 꾸준히 누적되어 미수금이나 완료된 금액을 확인할 수도 있습니다.
                </BasicText>
              </div>
              <div className={cx('storage__img-box')}>
                <div className={cx('storage__img_bottom')}>
                  <img src={imagesSrc['evr_img_10.png']} alt="" className={cx('storage__img')} />
                </div>
                <div className={cx('storage__img_top')}>
                  <img src={imagesSrc['evr_img_11.png']} alt="" className={cx('storage__img02')} />
                </div>
                <div className={cx('storage__img_bottom-m')}>
                  <img src={imagesSrc['evr_img_10-none.png']} alt="" className={cx('storage__img02')} />
                </div>
                <div className={cx('storage__img_top-m')}>
                  <img src={imagesSrc['evr_img_11.png']} alt="" className={cx('storage__img02')} />
                </div>
              </div>
            </ScrollViewClass>
          </BasicSection>
        </div>

        <div className={cx('manage')}>
          <BasicSection>
            <ScrollViewClass>
              <div className={cx('manage__head')}>
                <BasicSectionHead>
                  <BasicTitle>관리</BasicTitle>
                </BasicSectionHead>
                <BasicText className={cx('manage__text')}>
                  동물 병원 관계자들이 환자를 최적의 환경에서 케어할 수 있도록 관리할 수 있는 화면입니다. 입원 및 진료와 같이 현장에서 이루어져야하는 액션부터, 병원의 내부적인 정보나 직원 관리 등이
                  간편하게 이루어질 수 있도록 제작하였습니다.
                </BasicText>
              </div>
            </ScrollViewClass>
            <ScrollViewClass>
              <div className={cx('manage__img-wrap')}>
                <div className={cx('manage__img-left')}>
                  <div className={cx('manage__inner')}>
                    <img src={imagesSrc['evr_img_12.png']} alt="" className={cx('manage__img')} />
                  </div>
                </div>
                <div className={cx('manage__img-right')}>
                  <div className={cx('manage__inner01')}>
                    <img src={imagesSrc['evr_img_13.png']} alt="" className={cx('manage__img01')} />
                  </div>
                </div>
              </div>
            </ScrollViewClass>
            <ScrollViewClass>
              <div className={cx('manage__img-wrap02')}>
                <div className={cx('manage__img-left02')}>
                  <div className={cx('manage__inner02')}>
                    <img src={imagesSrc['evr_img_14.png']} alt="" className={cx('manage__img02')} />
                  </div>
                </div>
                <div className={cx('manage__img-right02')}>
                  <div className={cx('manage__inner03')}>
                    <img src={imagesSrc['evr_img_15.png']} alt="" className={cx('manage__img03')} />
                  </div>
                </div>
              </div>
            </ScrollViewClass>
            <div className={cx('manage__img-wrap-none')}>
              <ScrollViewClass>
                <div className={cx('manage__img_m01')}>
                  <img src={imagesSrc['evr_img_12.png']} alt="" className={cx('manage__img02')} />
                </div>
              </ScrollViewClass>
              <ScrollViewClass>
                <div className={cx('manage__img_m02')}>
                  <img src={imagesSrc['evr_img_13.png']} alt="" className={cx('manage__img02')} />
                </div>
              </ScrollViewClass>
              <ScrollViewClass>
                <div className={cx('manage__img_m03')}>
                  <img src={imagesSrc['evr_img_14.png']} alt="" className={cx('manage__img02')} />
                </div>
              </ScrollViewClass>
              <ScrollViewClass>
                <div className={cx('manage__img_m04')}>
                  <img src={imagesSrc['evr_img_15.png']} alt="" className={cx('manage__img02')} />
                </div>
              </ScrollViewClass>
            </div>
          </BasicSection>
        </div>
      </PortfolioLayout>
    );
  }
}

export default PetCareEvr;
