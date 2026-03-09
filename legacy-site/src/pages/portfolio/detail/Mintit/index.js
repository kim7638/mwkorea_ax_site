import React, { Component } from 'react';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes, importImages } from 'utils/core';

import { PortfolioLayout, PortfolioTop, PortfolioOverview, BasicSection, BasicSectionHead, BasicTitle, BasicText, ScrollViewClass } from 'components';

import data from 'datas/portfolio/Mintit';

import SVGOverviewBG from './images/overview-bg.inline.svg';

import * as styles from './Mintit.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

const imagesSrc = importImages(require.context('./images/', false, /\.(png|jpe?g|gif)$/));

class Mintit extends Component {
  render() {
    return (
      <PortfolioLayout data={data} darkMode={true}>
        <PortfolioTop
          data={data}
          phoneImgSrc={imagesSrc['top-phone.jpg']}
          darkMode={true}
          classNames={{
            wrap: cx('top-wrap'),
          }}
        >
          <div className={cx('top-minti')}></div>
        </PortfolioTop>

        <div className={cx('overview')}>
          <SVGOverviewBG className={cx('overview__bg')} />
          <PortfolioOverview data={data.overview} />
        </div>

        <BasicSection className={cx('main-service')}>
          <BasicSectionHead>
            <BasicTitle>main service</BasicTitle>
          </BasicSectionHead>
          <ScrollViewClass>
            <div className={cx('main-service__contents')}>
              <p className={cx('main-service__left-text')}>
                서랍 속 오래된
                <br />
                중고폰을
                <br />
                판매해보세요.
              </p>
              <BasicText className={cx('main-service__right-text')}>
                민팃은 합리적인 ICT 리사이클 생태계를 조성하여 유익하고 건강한 가치를 창출합니다.
                <br />
                비대면으로 중고폰 거래 또는 기부를 할 수 있으며, <span className="inline-block">실시간으로 민팃 앱을 통해 중고폰의 시세를 확인할 수도 있습니다.</span>
                <br />
                최근 이슈가 되는 개인정보 유출에 대한 사용자의 불안감을 줄이기 위해{' '}
                <span className="inline-block">개인정보 완전 삭제 서비스와 구매 후 1년간 액정 파손 보험 서비스를 제공하고 있습니다.</span>
                <br />
                이로써 민팃은 간편하고 믿을 수 있는 중고 ICT 기기 플랫폼으로 성장하고 있습니다.
              </BasicText>
            </div>
          </ScrollViewClass>
        </BasicSection>
        <div className={cx('main-service-visual')}></div>

        <div className={cx('ux-solution')}>
          <BasicSection>
            <BasicSectionHead>
              <BasicTitle>UX Solution</BasicTitle>
            </BasicSectionHead>
            <ScrollViewClass>
              <div className={cx('ux-solution__contents')}>
                <div className={cx('ux-solution__q')}>
                  <p className={cx('ux-solution__talk')}>
                    <mark>시간 낭비 없이</mark> 중고폰을 살 수 없을까요?
                  </p>
                  <p className={cx('ux-solution__talk')}>
                    중고거래로 돈을 번다고 해도 제 개인정보 <mark>유출때문에 불안</mark>해요.
                  </p>
                  <p className={cx('ux-solution__talk')}>
                    서랍 속 안쓰는 <mark>중고폰을 기부</mark>하고 싶은데 쉬운 방법 없을까요?
                  </p>
                </div>
                <div className={cx('ux-solution__a')}>
                  <p className={cx('ux-solution__talk')}>가까운 대형 마트에서 언제든지 거래할 수 있습니다.</p>
                  <p className={cx('ux-solution__talk')}>개인 정보 완전 삭제로 안심하고 거래할 수 있어요!</p>
                  <p className={cx('ux-solution__talk')}>ICT 리사이클 생태계를 조성하는 민팃에서 유익한 가치를 창출하세요.</p>
                </div>
              </div>
            </ScrollViewClass>
          </BasicSection>
        </div>

        <BasicSection className={cx('ux-direction')}>
          <BasicSectionHead className={cx('ux-direction__head')}>
            <BasicTitle>UX Direction</BasicTitle>
          </BasicSectionHead>
          <ScrollViewClass>
            <div className={cx('ux-direction__contents')}>
              <BasicText className={cx('text')}>
                메인 서비스와 솔루션을 토대로 민팃의 방향성에 대해 3가지 핵심 가치를 확인할 수 있습니다.
                <br />
                합리적이고 가치있는 거래를 할 수 있도록 사용자의 관점에서 최고의 환경을 제공합니다.
              </BasicText>
              <div className={cx('ux-direction__hash')}>
                <p className={cx('ux-direction__hash-text')}>
                  #Economical
                  <sup className={cx('ux-direction__hash-sup')}>실속있는</sup>
                </p>
                <p className={cx('ux-direction__hash-text')}>
                  #Simple
                  <sup className={cx('ux-direction__hash-sup')}>편리한</sup>
                </p>
                <p className={cx('ux-direction__hash-text')}>
                  #Valuable
                  <sup className={cx('ux-direction__hash-sup')}>유익한</sup>
                </p>
              </div>
            </div>
          </ScrollViewClass>
        </BasicSection>

        <BasicSection>
          <BasicSectionHead>
            <BasicTitle>Home UX/ui</BasicTitle>
          </BasicSectionHead>
          <ScrollViewClass>
            <BasicText className={cx('home-text')}>
              사용자가 메인에서 최대한 많은 정보를 볼 수 있도록 각 메뉴의 핵심 섹션을 제공하여 편리함을 더했습니다.
              <br />
              반응형 홈페이지를 통해 사용자가 기기에 구애받지않고 항상 최적화된 화면을 경험할 수 있습니다.
            </BasicText>
            <div className={cx('home-contents')}>
              <div className={cx('home-contents__pc')}>
                <img src={imagesSrc['home.jpg']} alt="" className={cx('device-img')} />
              </div>
              <div className={cx('home-contents__mobile')}>
                <img src={imagesSrc['home-mobile.png']} alt="" className={cx('device-img')} />
              </div>
            </div>
          </ScrollViewClass>
        </BasicSection>

        <div className={cx('market-price')}>
          <BasicSection>
            <BasicSectionHead>
              <BasicTitle>시세 조회</BasicTitle>
            </BasicSectionHead>
            <ScrollViewClass>
              <BasicText className={cx('market-price-text')}>
                사용자가 직접 원하는 기기를 선택하여 등급 기준에 따른 시세를 확인할 수 있습니다.
                <br />
                뿐만 아니라 갖고 있는 중고폰의 상태를 검사할 수 있어 더욱 간편하게 민팃 서비스를 이용할 수 있습니다.
              </BasicText>
            </ScrollViewClass>
            <div className={cx('market-price__contents')}>
              <ScrollViewClass>
                <div className={cx('market-price__pc1')}>
                  <img src={imagesSrc['market-price-pc-1.jpg']} alt="" className={cx('device-img')} />
                </div>
              </ScrollViewClass>
              <ScrollViewClass>
                <div className={cx('market-price__pc2')}>
                  <img src={imagesSrc['market-price-pc-2.jpg']} alt="" className={cx('device-img')} />
                </div>
              </ScrollViewClass>
              <div className={cx('market-price__mobile-group')}>
                <ScrollViewClass>
                  <div className={cx('market-price__mobile-item')}>
                    <div className={cx('market-price__mobile1')}>
                      <img src={imagesSrc['market-price-mobile-1.png']} alt="" className={cx('device-img')} />
                    </div>
                  </div>
                  <div className={cx('market-price__mobile-item')}>
                    <div className={cx('market-price__mobile2')}>
                      <img src={imagesSrc['market-price-mobile-2.png']} alt="" className={cx('device-img')} />
                    </div>
                  </div>
                </ScrollViewClass>
              </div>
            </div>
          </BasicSection>
        </div>

        <div className={cx('shop')}>
          <BasicSection>
            <BasicSectionHead>
              <BasicTitle>구매하기</BasicTitle>
            </BasicSectionHead>
            <ScrollViewClass>
              <BasicText className={cx('shop-text')}>
                온라인으로도 안전하고 믿을 수 있는 거래가 가능할 수 있도록 만든 서비스입니다.
                <br />
                필터를 통해 사용자가 원하는 중고 기기의 가격 및 상태를 확인할 수 있으며 구매 즉시 1년간 액정 파손 보험 서비스도 함께 진행하고 있습니다.
              </BasicText>
            </ScrollViewClass>
          </BasicSection>
          <div className={cx('shop__contents')}>
            <BasicSection tagName="div">
              <ScrollViewClass>
                <div className={cx('shop__pc1')}>
                  <img src={imagesSrc['shop-1.jpg']} alt="" className={cx('device-img')} />
                </div>
              </ScrollViewClass>
              <ScrollViewClass>
                <div className={cx('shop__pc2')}>
                  <img src={imagesSrc['shop-2.jpg']} alt="" className={cx('device-img')} />
                </div>
              </ScrollViewClass>
            </BasicSection>
          </div>
        </div>

        <BasicSection>
          <BasicSectionHead>
            <BasicTitle>판매 내역 &amp; 내 폰 관리</BasicTitle>
          </BasicSectionHead>
          <ScrollViewClass>
            <BasicText className={cx('order-text')}>
              민팃에서는 사용자의 맞춤 관리를 위해 과거, 현재 판매 내역을 한 눈에 조회할 수 있습니다.
              <br />
              또한 시세를 자주 봐야하는 폰은 '내 폰 관리'를 통해 간편하게 조회할 수 있습니다.
            </BasicText>
          </ScrollViewClass>
          <ScrollViewClass>
            <div className={cx('view-images', 'is-subsize', 'order-contents')}>
              <div className={cx('view-images__item')}>
                <div className={cx('view-images__block')}>
                  <img src={imagesSrc['order-1.png']} alt="" className={cx('device-img')} />
                </div>
                <div className={`${cx('view-images__block')} is-mobile-only`}>
                  <img src={imagesSrc['order-3.png']} alt="" className={cx('device-img')} />
                </div>
              </div>
              <div className={cx('view-images__item')}>
                <div className={cx('view-images__block')}>
                  <img src={imagesSrc['order-2.png']} alt="" className={cx('device-img')} />
                </div>
              </div>
              <div className={cx('view-images__item')}>
                <div className={cx('view-images__block')}>
                  <img src={imagesSrc['order-3.png']} alt="" className={cx('device-img')} />
                </div>
              </div>
            </div>
          </ScrollViewClass>
        </BasicSection>

        <div className={cx('gallery')}>
          <ScrollViewClass>
            <div className={cx('view-images-wrap', 'gallery__phone')}>
              <div className={cx('view-images', 'is-subsize')}>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['gallery-mobile-1.png']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['gallery-mobile-4.png']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={`${cx('view-images__block')} is-mobile-only`}>
                    <img src={imagesSrc['gallery-mobile-3.png']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={`${cx('view-images__block')} is-mobile-only`}>
                    <img src={imagesSrc['gallery-mobile-5.png']} alt="" className={cx('device-img')} />
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['gallery-mobile-2.png']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['gallery-mobile-5.png']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={`${cx('view-images__block')} is-mobile-only`}>
                    <img src={imagesSrc['gallery-mobile-4.png']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={`${cx('view-images__block')} is-mobile-only`}>
                    <img src={imagesSrc['gallery-mobile-6.png']} alt="" className={cx('device-img')} />
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['gallery-mobile-3.png']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['gallery-mobile-6.png']} alt="" className={cx('device-img')} />
                  </div>
                </div>
              </div>
            </div>
          </ScrollViewClass>
          <BasicSection tagName="div">
            <ScrollViewClass>
              <div className={cx('gallery__pc', 'gallery__pc1')}>
                <img src={imagesSrc['gallery-pc-1.jpg']} alt="" className={cx('device-img')} />
              </div>
            </ScrollViewClass>
            <ScrollViewClass>
              <div className={cx('gallery__pc', 'gallery__pc2')}>
                <img src={imagesSrc['gallery-pc-2.jpg']} alt="" className={cx('device-img')} />
              </div>
            </ScrollViewClass>
          </BasicSection>
        </div>
      </PortfolioLayout>
    );
  }
}

export default Mintit;
