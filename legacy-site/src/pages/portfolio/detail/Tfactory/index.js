import React, { Component } from 'react';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes, importImages } from 'utils/core';

import { PortfolioLayout, PortfolioTop, PortfolioOverview, BasicSection, BasicSectionHead, BasicTitle, BasicText, ScrollViewClass } from 'components';

import data from 'datas/portfolio/Tfactory';

import * as styles from './Tfactory.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

const imagesSrc = importImages(require.context('./images/', true, /\.(png|jpe?g|gif|svg)$/));

class Tfactory extends Component {
  render() {
    return (
      <PortfolioLayout data={data} darkMode={true}>
        <PortfolioTop
          data={data}
          classNames={{
            wrap: cx('top-wrap'),
          }}
          darkMode={true}
        >
          <div className={cx('top-logo-wrap')}>
            <img src={imagesSrc['top-logo.svg']} alt="T Factory Seongsu" className={cx('top-logo')} />
          </div>
        </PortfolioTop>

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

          <div className={cx('goal')}>
            <BasicSection className={cx('pc-width-max')}>
              <BasicSectionHead className={cx('goal__head', 'font-family-montserrat')}>
                <BasicTitle classNames={{root: cx('text-transform-none')}}>PROJECT GOAL</BasicTitle>
              </BasicSectionHead>

              <ScrollViewClass>
                <h4 className={cx('basic-subtitle', 'goal__subtitle')}>
                  고객, 크루 모두를 위한<br />
                  T Factory Seongsu의 리브랜딩
                </h4>
                <BasicText className={cx('goal__text')}>
                  고객에게는 즐거운 경험을, 크루에게는 편리한 운영을 제공함으로써 <br className={cx('mb-none')} />
                  T Factory Seongsu는 고객 경험과 운영 효율이 선순환하는 지속 가능한 공간 운영 구조를 목표로 합니다.
                </BasicText>

                <figure className={cx('goal-img')}>
                  <img src={imagesSrc['goal.png']} alt="고객(Visitor) - 즐거운 경험과 혜택, 스태프(Crew) - 쉽고 편리한 운영" className={cx('goal-img__image')} />
                </figure>
              </ScrollViewClass>
            </BasicSection>
          </div>

          <div className={cx('user-flow')}>
            <BasicSection className={cx('pc-width-max')}>
              <BasicSectionHead className={cx('user-flow__head', 'font-family-montserrat')}>
                <BasicTitle classNames={{root: cx('text-transform-none')}}>User Flow &amp; Pain Point</BasicTitle>
              </BasicSectionHead>

              <ScrollViewClass>
                <h4 className={cx('basic-subtitle', 'user-flow__subtitle')}>
                  기존 T Factory의 참여 경험을 분석하여 <br className={cx('mb-none')} />
                  전반적인 방문 과정에서 발생 가능한 문제점을 도출하였습니다.
                </h4>
                <BasicText className={cx('user-flow__text')}>
                  분석 결과, 공간 내 혼잡도가 높아질수록 고객은 프로그램 탐색과 체험 과정에서 어려움을 겪을 가능성이 크며, <br className='is-pc-only' />
                  체험 방식과 보상 구조에 대한 정보가 명확히 전달되지 않을 경우, 체험 중 이탈 확률이 증가할 수 있다는 문제점을 발견하였습니다.<br />
                  이로 인해 고객은 크루의 안내에 의존하게 되고, 이는 곧 크루의 운영 부담 증가와 현장 응대의 비효율성으로 이어지는 구조적 문제가 발생할 수 있습니다.
                </BasicText>
              </ScrollViewClass>
            </BasicSection>

            <BasicSection className={cx('table-contents')}>
              <ScrollViewClass>
                <div className={cx('start-end')}>
                  <span className={cx('start-label')}>Start</span>
                  <span className={cx('arrow')}>
                    <span className={cx('arrow__inner')}>
                      <img src={imagesSrc['arrow.svg']} alt="" className={cx('arrow__image')} />
                    </span>
                  </span>
                  <span className={cx('end-label')}>End</span>
                </div>

                <div role="table" className={cx('journey')} aria-label="Visitor, Crew, Pain Point 기준 서비스 이용 흐름">
                  <div className={cx('column-wrap')}>
                    <div className={cx('column')}>
                      <div aria-hidden="true" className={cx('column-header-cell')}></div>
                      <div role="rowheader" id="row-visitor" className={cx('row-header-cell')}>Visitor</div>
                      <div role="rowheader" id="row-crew" className={cx('row-header-cell')}>Crew</div>
                      <div role="rowheader" id="row-pain" className={cx('row-header-cell', 'row-header-cell-pain')}>Pain Point</div>
                    </div>
                    <div className={cx('column')}>
                      <div role="columnheader" id="col-entry" className={cx('column-header-cell')}>입장</div>
                      <div className={cx('cell-wrap')}>
                        <div role="cell" aria-labelledby="row-visitor col-entry" className={cx('cell')}>
                          크루의 안내에 따라 <br />
                          팝업스토어 입장
                        </div>
                      </div>
                      <div className={cx('cell-wrap')}>
                        <div role="cell" aria-labelledby="row-crew col-entry" className={cx('cell')}>
                          고객 정보 및 <br />
                          입장 가능 인원 파악 후 <br />
                          입장 도움
                        </div>
                      </div>
                      <div className={cx('cell-wrap')}>
                        <div role="cell" aria-labelledby="row-pain col-entry" className={cx('cell', 'cell-pain')}>
                          피크타임의 경우 <br />
                          팝업 내 혼잡함으로 인해 <br />
                          대기 인원 발생
                        </div>
                      </div>
                    </div>
                    <div className={cx('column')}>
                      <div role="columnheader" id="col-search" className={cx('column-header-cell')}>탐색</div>
                      <div className={cx('cell-wrap')}>
                        <div role="cell" aria-labelledby="row-visitor col-search" className={cx('cell')}>
                          사전 예약한 프로그램 탐색 <br />
                          혹은 크루 추천에 따른 <br />
                          프로그램 탐색
                        </div>
                      </div>
                      <div className={cx('cell-wrap')}>
                        <div role="cell" aria-labelledby="row-crew col-search" className={cx('cell')}>
                          안내가 필요해 보이는 <br />
                          고객에게 프로그램 및 <br />
                          체험 동선 추천
                        </div>
                      </div>
                      <div className={cx('cell-wrap')}>
                        <div role="cell" aria-labelledby="row-pain col-search" className={cx('cell', 'cell-pain')}>
                          공간이 넓어 원하는 <br />
                          프로그램 위치 파악 어려움
                        </div>
                        <div role="cell" aria-labelledby="row-pain col-search" className={cx('cell', 'cell-pain')}>
                          특정 프로그램에 인원이 몰릴 <br />
                          경우 체험이 어려움
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx('column-wrap')}>
                    <div className={cx('column')}>
                      <div aria-hidden="true" className={cx('column-header-cell')}></div>
                      <div role="rowheader" className={cx('row-header-cell')}>Visitor</div>
                      <div role="rowheader" className={cx('row-header-cell')}>Crew</div>
                      <div role="rowheader" className={cx('row-header-cell', 'row-header-cell-pain')}>Pain Point</div>
                    </div>
                    <div className={cx('column')}>
                      <div role="columnheader" id="col-experience" className={cx('column-header-cell')}>체험</div>
                      <div className={cx('cell-wrap')}>
                        <div role="cell" aria-labelledby="row-visitor col-experience" className={cx('cell')}>
                          팜플렛에 적힌 <br />
                          체험 방법에 따라 콘텐츠 경험
                        </div>
                        <div role="cell" aria-labelledby="row-visitor col-experience" className={cx('cell')}>
                          체험 중 포토존 이용
                        </div>
                      </div>
                      <div className={cx('cell-wrap')}>
                        <div role="cell" aria-labelledby="row-crew col-experience" className={cx('cell')}>
                          체험 방법 팜플렛 제공
                        </div>
                        <div role="cell" aria-labelledby="row-crew col-experience" className={cx('cell')}>
                          콘텐츠 체험 시 NPC 역할
                        </div>
                        <div role="cell" aria-labelledby="row-crew col-experience" className={cx('cell')}>
                          체험 완료 도장 제공
                        </div>
                      </div>
                      <div className={cx('cell-wrap')}>
                        <div role="cell" aria-labelledby="row-pain col-experience" className={cx('cell', 'cell-pain')}>
                          팜플렛 분실 시 체험에 문제 발생
                        </div>
                        <div role="cell" aria-labelledby="row-pain col-experience" className={cx('cell', 'cell-pain')}>
                          크루 안내 없이 체험 어려움
                        </div>
                        <div role="cell" aria-labelledby="row-pain col-experience" className={cx('cell', 'cell-pain')}>
                          인원이 많을 경우 동선 문제 발생
                        </div>
                      </div>
                    </div>
                    <div className={cx('column')}>
                      <div role="columnheader" id="col-reward" className={cx('column-header-cell')}>보상</div>
                      <div className={cx('cell-wrap')}>
                        <div role="cell" aria-labelledby="row-visitor col-reward" className={cx('cell')}>
                          모든 체험 완료 후 <br />
                          오프라인 만족도 설문지 작성
                        </div>
                        <div role="cell" aria-labelledby="row-visitor col-reward" className={cx('cell')}>
                          팜플렛에 체험 완료 <br />
                          도장 획득 후 보상 수령
                        </div>
                      </div>
                      <div className={cx('cell-wrap')}>
                        <div role="cell" aria-labelledby="row-crew col-reward" className={cx('cell')}>
                          설문지를 나누어주고 <br />
                          작성까지 안내
                        </div>
                        <div role="cell" aria-labelledby="row-crew col-reward" className={cx('cell')}>
                          고객에게 보상 수령 위치 안내 <br />
                          및 보상 제공
                        </div>
                      </div>
                      <div className={cx('cell-wrap')}>
                        <div role="cell" aria-labelledby="row-pain col-reward" className={cx('cell', 'cell-pain')}>
                          설문 조사 전 고객 이탈 확률 높음
                        </div>
                        <div role="cell" aria-labelledby="row-pain col-reward" className={cx('cell', 'cell-pain')}>
                          보상 수령 위치 파악 어려움
                        </div>
                        <div role="cell" aria-labelledby="row-pain col-reward" className={cx('cell', 'cell-pain')}>
                          팜플렛 분실 시 보상 수령 문제 발생
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollViewClass>
            </BasicSection>
          </div>

          <div className={cx('solution')}>
            <div className={cx('solution-wrap')}>
              <BasicSection className={cx('solution-section', 'pc-width-max')}>
                <div className={cx('solution-section__left')}>
                  <BasicSectionHead className={cx('solution__head', 'font-family-montserrat')}>
                    <BasicTitle classNames={{root: cx('text-transform-none')}}>Solution</BasicTitle>
                  </BasicSectionHead>

                  <ScrollViewClass>
                    <h4 className={cx('basic-subtitle', 'solution__subtitle')}>
                      도출된 문제점을 바탕으로 <br className='is-tablet-only' />
                      방문 여정을 디지털 기반으로 재구성하였습니다.
                    </h4>
                    <BasicText className={cx('solution__text')}>
                      고객 개개인에게 가장 밀접한 모바일을 활용하여 <br className={cx('mb-none')} />
                      공간 경험을 보완함으로써 혼잡, 정보 단절, 크루 의존도 등의 문제를 <br className={cx('mb-none')} />
                      구조적으로 해결하고자 합니다.
                    </BasicText>
                  </ScrollViewClass>
                </div>
                <div className={cx('solution-section__right')}>
                  <ScrollViewClass>
                    <ul className={cx('solution-list')}>
                      <li className={cx('solution-list__item')}>
                        <span className={cx('solution-list__number')}>A</span>
                        <div className={cx('solution-list__head')}>
                          <div className={cx('solution-list__summary')}>
                            <span>Search</span>
                            <img src={imagesSrc['ico_arrow_right.svg']} alt="오른쪽 화살표" className={cx('solution-list__arrow')} />
                            <em className={cx('solution-list__result')}>Smart</em>
                          </div>
                          <h5 className={cx('solution-list__title')}>: AI 기반 실시간 공간 혼잡도 제공</h5>
                        </div>
                        <p className={cx('solution-list__description')}>
                          AI 기술을 활용한 팝업스토어 내부의 실시간 혼잡도와 웨이팅 기능을 통해 <br className={cx('mb-none')} />
                          불필요한 이동과 대기를 줄이고 효율적인 공간 탐색을 가능하게 합니다.
                        </p>
                      </li>
                      <li className={cx('solution-list__item')}>
                        <span className={cx('solution-list__number')}>B</span>
                        <div className={cx('solution-list__head')}>
                          <div className={cx('solution-list__summary')}>
                            <span>Play</span>
                            <img src={imagesSrc['ico_arrow_right.svg']} alt="오른쪽 화살표" className={cx('solution-list__arrow')} />
                            <em className={cx('solution-list__result')}>Initiative</em>
                          </div>
                          <h5 className={cx('solution-list__title')}>: 고객 주도의 능동적 체험 유도</h5>
                        </div>
                        <p className={cx('solution-list__description')}>
                          모바일에 공간 맵과 프로그램 별 체험 가이드를 제공하여 <br className={cx('mb-none')} />
                          오프라인 팜플렛과 크루 안내에 의존하던 기존 방식을 디지털로 전환합니다.
                        </p>
                      </li>
                      <li className={cx('solution-list__item')}>
                        <span className={cx('solution-list__number')}>C</span>
                        <div className={cx('solution-list__head')}>
                          <div className={cx('solution-list__summary')}>
                            <span>Reward</span>
                            <img src={imagesSrc['ico_arrow_right.svg']} alt="오른쪽 화살표" className={cx('solution-list__arrow')} />
                            <em className={cx('solution-list__result')}>Definite</em>
                          </div>
                          <h5 className={cx('solution-list__title')}>: 명확한 보상 구조를 통한 참여 동기 강화</h5>
                        </div>
                        <p className={cx('solution-list__description')}>
                          고객 개인 모바일을 활용한 QR 입장 방식을 통해 <br className={cx('mb-none')} />
                          프로그램 참여와 동시에 프리퀀시 적립이 자동으로 인지되도록 합니다.<br />
                          명확한 성취와 보상이 함께 이어지도록 하여 고객의 적극적인 참여를 유도합니다.
                        </p>
                      </li>
                    </ul>
                  </ScrollViewClass>
                </div>
              </BasicSection>
            </div>
          </div>

          <div className={cx('comment')}>
            <ScrollViewClass>
              <div className={cx('comment-wrap')}>
                <BasicSection className={cx('comment-section')}>
                  <div className={cx('comment-section__left')}>
                    <figure className={cx('comment-section__frame')}>
                      <img src={imagesSrc['comment-mobile.png']} alt="모바일 속 T Factory Seongsu 연출 화면" className={cx('comment-section__image')} />
                    </figure>
                  </div>
                  <div className={cx('comment-section__right')}>
                    <p className={cx('comment-section__description')}>
                      Through mobile <br />
                      Understand the space, Engage yourself, <br className={cx('mb-none')} />
                      Complete the experience with clear rewards.
                    </p>
                    <figure className={cx('comment-section__frame')}>
                      <img src={imagesSrc['comment-logo.png']} alt="T Factory Seongsu 로고" className={cx('comment-section__image')} />
                    </figure>
                  </div>
                </BasicSection>
              </div>
            </ScrollViewClass>
          </div>

          <div className={cx('direction')}>
            <ScrollViewClass>
              <BasicSection className={cx('pc-width-max')}>
                <BasicSectionHead className={cx('direction__head', 'font-family-montserrat')}>
                  <BasicTitle classNames={{root: cx('text-transform-none')}}>Direction</BasicTitle>
                </BasicSectionHead>

                <h4 className={cx('basic-subtitle', 'direction__subtitle')}>
                  T Factory Seongsu는 <br />
                  팝업스토어의 새로운 방향성을 제시합니다.
                </h4>
                <BasicText className={cx('direction__text')}>
                  기존의 팝업스토어가 운영자의 안내와 개입에 크게 의존하는 구조였다면, <br className={cx('mb-none')} />
                  T Factory Seongsu는 고객이 그저 안내받는 방문자가 아닌, <br className='is-tablet-only' />
                  자신만의 속도와 방식으로 공간을 즐기는 주체가 되는 것을 지향합니다.
                </BasicText>
              </BasicSection>

              <figure className={cx('direction-figure')}>
                <img src={imagesSrc['direction.png']} alt="Conventional(From Others) → T Factory(Own Way)" className={cx('direction-figure__image')} />
              </figure>
            </ScrollViewClass>
          </div>

          <div className={cx('draw')}>
            <ScrollViewClass>
              <figure className={cx('draw-figure')}>
                <img src={imagesSrc['draw.png']} alt="Draw Your Way" className={cx('draw-figure__image')} />
              </figure>
            </ScrollViewClass>
          </div>

          {/* Search 01 - 03 */}
          <div className={cx('search-wrap')}>
            <div className={cx('main')}>
              <ScrollViewClass>
                <BasicSection className={cx('main-typo', 'pc-width-max')}>
                  <BasicSectionHead className={cx('main__head', 'font-family-montserrat')}>
                    <BasicTitle classNames={{root: cx('text-transform-none')}}>
                      <span className={cx('color-orange')}>Search 01</span> Main
                    </BasicTitle>
                  </BasicSectionHead>

                  <h4 className={cx('basic-subtitle', 'main__subtitle')}>
                    T Factory에 현재 진행되는 <br />
                    실시간 프로그램을 한눈에
                  </h4>
                  <BasicText className={cx('main__text')}>
                    현재 진행되는 실시간 프로그램과 날짜, <br />
                    위치 등의 정보를 한눈에 탐색할 수 있는 메인페이지입니다.<br />
                    T Factory만의 비정형적인 그래픽 요소를 <br className='is-mobile-only' />
                    느낄 수 있도록 합니다.
                  </BasicText>
                </BasicSection>

                <div className={cx('main-contents')}>
                  <img src={imagesSrc['main-smart.svg']} alt="SMART" className={cx('main-contents__slogan')} />
                  <figure className={cx('main-contents__figure')}>
                    <img src={imagesSrc['main.png']} alt="모바일 속 T Factory 메인페이지 화면" className={cx('main-contents__image')} />
                  </figure>
                </div>
              </ScrollViewClass>
            </div>

            <div className={cx('congestion')}>
              <ScrollViewClass>
                <BasicSection className={cx('congestion-typo', 'congestion-width-max')}>
                  <div className={cx('congestion-typo__inner')}>
                    <BasicSectionHead className={cx('congestion__head', 'font-family-montserrat')}>
                      <BasicTitle classNames={{root: cx('text-transform-none')}}>
                        <span className={cx('color-orange')}>Search 02</span> Congestion
                      </BasicTitle>
                    </BasicSectionHead>

                    <h4 className={cx('basic-subtitle', 'congestion__subtitle')}>
                      실시간 AI 혼잡도 분석을 통해 <br />
                      더욱 스마트하게 프로그램을 탐색해요.
                    </h4>
                    <BasicText className={cx('congestion__text')}>
                      T Factory 입장 후 QR을 통해 체크인을 하면 메인홈이 혼잡도 분석 화면으로 변경되며, <br className={cx('mb-none')} />
                      T Factory의 Space 소개, 프로그램 상세 등의 위치 정보에 혼잡도가 실시간으로 표기됩니다.<br />
                      이를 통해 고객은 현재 공간 상황에 맞는 콘텐츠를 스스로 선택하고 이동 동선을 계획할 수 있습니다.
                    </BasicText>
                  </div>
                </BasicSection>

                <BasicSection className={cx('congestion-width-max')}>
                  <div className={cx('congestion-contents')}>
                    <figure className={cx('congestion-contents__figure', 'type-left')}>
                      <img src={imagesSrc['congestion-1.png']} alt="모바일 속 실시간 AI 혼잡도 분석 화면" className={cx('congestion-contents__image')} />
                    </figure>
                    <figure className={cx('congestion-contents__figure', 'type-right')}>
                      <img src={imagesSrc['congestion-2.png']} alt="모바일 속 혼잡도 분석 예시 화면 - 원활(Main Hall), 많음(Flex Hall), 여유(The Stage)" className={cx('congestion-contents__image')} />
                    </figure>
                  </div>
                </BasicSection>
              </ScrollViewClass>
            </div>

            <div className={cx('qr-and-waiting')}>
              <ScrollViewClass>
                <BasicSection className={cx('qr-and-waiting-typo', 'pc-width-max')}>
                  <BasicSectionHead className={cx('qr-and-waiting__head', 'font-family-montserrat')}>
                    <BasicTitle classNames={{root: cx('text-transform-none')}}>
                      <span className={cx('color-orange')}>Search 03</span> QR & Waiting
                    </BasicTitle>
                  </BasicSectionHead>

                  <h4 className={cx('basic-subtitle', 'qr-and-waiting__subtitle')}>
                    QR을 이용해 빠르게 입장하고 <br />
                    웨이팅을 등록할 수 있어요.
                  </h4>
                  <BasicText className={cx('qr-and-waiting__text')}>
                    고객 개인 모바일을 기반으로 한 QR 입장 방식을 통해 크루의 신원 확인 단계를 축소하고, 피크타임의 경우 인원이 과다하게 밀집될 시 웨이팅 기능을 통해 불필요한 대기와 이동을 줄여 탐색 단계에서의 이탈을 최소화시킵니다.
                  </BasicText>
                </BasicSection>

                <figure className={cx('qr-figure')}>
                  <img src={imagesSrc['qr-pc.png']} alt="모바일 QR 코드를 예시 화면" className={cx('qr-figure__image', 'mb-none')} />
                  <img src={imagesSrc['qr-tablet.png']} alt="모바일 QR 코드를 예시 화면" className={`${cx('qr-figure__image')} is-mobile-only`} />
                </figure>
              </ScrollViewClass>

              <ScrollViewClass>
               <div className={cx('waiting-contents')}>
                  <figure className={cx('waiting-contents__figure')}>
                    <img src={imagesSrc['waiting-1.png']} alt="태블릿 속 웨이팅 예시 화면" className={cx('waiting-contents__image')} />
                  </figure>
                  <figure className={cx('waiting-contents__figure')}>
                    <img src={imagesSrc['waiting-2.png']} alt="모바일 속 웨이팅 예시 화면" className={cx('waiting-contents__image')} />
                  </figure>
                </div>
              </ScrollViewClass>
            </div>
          </div>

          {/* Play 01 - 02 */}
          <div className={cx('play-wrap')}>
            <div className={cx('detail-and-tutorial')}>
              <ScrollViewClass>
                <div className={cx('detail-and-tutorial__txt-wrap')}>
                  <img src={imagesSrc['detail-and-tutorial-initiative.png']} alt="INITIATIVE" className={cx('detail-and-tutorial__slogan')} />
                  <BasicSection className={cx('detail-and-tutorial-typo', 'pc-width-max')}>
                    <BasicSectionHead className={cx('detail-and-tutorial__head', 'font-family-montserrat')}>
                      <BasicTitle classNames={{root: cx('text-transform-none')}}>
                        <span className={cx('color-orange')}>Play 01</span> Detail &amp; Tutorial
                      </BasicTitle>
                    </BasicSectionHead>

                    <h4 className={cx('basic-subtitle', 'detail-and-tutorial__subtitle')}>
                      프로그램 체험 방법을 통해 <br />
                      고객 스스로 콘텐츠를 분석할 수 있어요.
                    </h4>
                    <BasicText className={cx('detail-and-tutorial__text')}>
                      크루들이 구두로 콘텐츠 체험 방법을 설명하던 방식에서 벗어나 <br className={cx('mb-none')} />
                      고객이 프로그램 상세에서 체험 방법을 알아보며 스스로 체험 방법을 습득할 수 있습니다.
                    </BasicText>
                  </BasicSection>
                </div>
              </ScrollViewClass>

              <ScrollViewClass>
               <div className={cx('detail-and-tutorial__img-wrap')}>
                  <figure className={cx('detail-and-tutorial__detail')}>
                    <img src={imagesSrc['detail.jpg']} alt="모바일 속 프로그램 상세 화면" className={cx('detail-and-tutorial__image')} />
                  </figure>
                  <figure className={cx('detail-and-tutorial__tutorial')}>
                    <img src={imagesSrc['tutorial.jpg']} alt="모바일 속 튜토리얼 화면" className={cx('detail-and-tutorial__image')} />
                  </figure>
                </div>
              </ScrollViewClass>
            </div>

            <div className={cx('reservation')}>
              <ScrollViewClass>
                <BasicSection className={cx('reservation-typo', 'pc-width-max')}>
                  <BasicSectionHead className={cx('reservation__head', 'font-family-montserrat')}>
                    <BasicTitle classNames={{root: cx('text-transform-none')}}>
                      <span className={cx('color-orange')}>Play 02</span> Reservation
                    </BasicTitle>
                  </BasicSectionHead>

                  <h4 className={cx('basic-subtitle', 'reservation__subtitle')}>
                    원하는 프로그램을 <br />
                    사전 예약 및 응모할 수 있어요.
                  </h4>
                  <BasicText className={cx('reservation__text')}>
                    T Factory의 웹페이지 내에서 원하는 콘텐츠를 응모 및 예약하고 <br className={cx('mb-none')} />
                    다양한 콘텐츠에 참여할 수 있습니다.
                  </BasicText>
                </BasicSection>
              
                <div className={cx('reservation__img-wrap')}>
                  <figure className={cx('reservation__figure')}>
                    <img src={imagesSrc['reservation-1.png']} alt="모바일 속 예약/응모 상세 화면" className={cx('reservation__image')} />
                  </figure>
                  <figure className={cx('reservation__figure')}>
                    <img src={imagesSrc['reservation-2.png']} alt="모바일 속 응모 일정 선택 화면" className={cx('reservation__image')} />
                  </figure>
                  <figure className={cx('reservation__figure')}>
                    <img src={imagesSrc['reservation-3.png']} alt="모바일 속 참여 요건 확인 화면" className={cx('reservation__image')} />
                  </figure>
                </div>
              </ScrollViewClass>
            </div>
          </div>

          {/* Reward 01 - 02 */}
          <div className={cx('reward-wrap')}>
            <div className={cx('survey')}>
              <ScrollViewClass>
                <div className={cx('survey__txt-wrap')}>
                  <img src={imagesSrc['survey-definite.svg']} alt="DEFINITIVE" className={cx('survey__slogan')} />
                  <BasicSection className={cx('survey-typo', 'pc-width-max')}>
                    <BasicSectionHead className={cx('survey__head', 'font-family-montserrat')}>
                      <BasicTitle classNames={{root: cx('text-transform-none')}}>
                        <span className={cx('color-orange')}>Reward 01</span> CS Survey
                      </BasicTitle>
                    </BasicSectionHead>

                    <h4 className={cx('basic-subtitle', 'survey__subtitle')}>
                      단순한 설문 참여가 아닌,<br />
                      리워드로 이어지는 경험의 완성 단계로
                    </h4>
                    <BasicText className={cx('survey__text')}>
                      기존 팝업스토어에서는 오프라인 설문지 작성이 고객에게는 번거로운 절차로 인식되거나 <br className='is-tablet-only' />
                      체험의 흐름이 끊기는 문제가 있었습니다.<br />
                      이러한 문제를 해결하기 위해 만족도 조사를 모바일 웹페이지 내에서 간편하게 제출할 수 있도록 개선하고 <br className={cx('mb-none')} />
                      완료 시 프리퀀시 적립 및 리워드가 즉각적으로 안내되도록 설계합니다.
                    </BasicText>
                  </BasicSection>
                </div>
              
                <div className={cx('survey__img-wrap')}>
                  <figure className={cx('survey__figure')}>
                    <img src={imagesSrc['survey-pc.png']} alt="모바일 속 만족도 조사 화면" className={cx('survey__image', 'mb-none')} />
                    <img src={imagesSrc['survey-mobile.png']} alt="모바일 속 만족도 조사 화면" className={`${cx('survey__image')} is-mobile-only`} />
                  </figure>
                </div>
              </ScrollViewClass>
            </div>

            <div className={cx('frequency')}>
              <ScrollViewClass>
                <BasicSection className={cx('frequency-typo', 'frequency-width-max')}>
                  <div className={cx('frequency-typo__inner')}>
                    <BasicSectionHead className={cx('frequency__head', 'font-family-montserrat')}>
                      <BasicTitle classNames={{root: cx('text-transform-none')}}>
                        <span className={cx('color-orange')}>Reward 02</span> Frequency
                      </BasicTitle>
                    </BasicSectionHead>

                    <h4 className={cx('basic-subtitle', 'frequency__subtitle')}>
                      앞선 QR 입력을 통해 <br className={cx('tb-none')} />
                      적립된 프리퀀시 ‘Draw Tour’로 <br className={cx('tb-none')} />
                      <span className='inline-block'>T Factory</span>의 특별 보상을 받아가요.
                    </h4>
                    <BasicText className={cx('frequency__text')}>
                      고객은 프로그램 참여 후 보상 획득이라는 명확한 연결 구조를 인지하며, 
                      체험의 끝을 긍정적인 성취로 마무리할 수 있습니다.
                    </BasicText>
                  </div>
                </BasicSection>

                <BasicSection className={cx('frequency-width-max')}>
                  <div className={cx('frequency-contents')}>
                    <figure className={cx('frequency-contents__figure', 'type-left')}>
                      <img src={imagesSrc['frequency-1.png']} alt="적립된 프리퀀시 Draw Tour를 통한 특별 보상 화면" className={cx('frequency-contents__image')} />
                    </figure>
                    <figure className={cx('frequency-contents__figure', 'type-right')}>
                      <img src={imagesSrc['frequency-2.png']} alt="적립된 프리퀀시 Draw Tour를 통한 특별 보상 화면" className={cx('frequency-contents__image')} />
                    </figure>
                  </div>
                </BasicSection>
              </ScrollViewClass>
            </div>
          </div>
        </div>
      </PortfolioLayout>
    );
  }
}

export default Tfactory;
