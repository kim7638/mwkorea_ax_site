import React, { Component, Fragment } from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';

import { stylesCopyConvertDashes, getScrollPosition } from 'utils/core';

import { Footer } from 'components';

import companyData from 'datas/company';

import SVGLogo1 from './images/logo-1.inline.svg';
import SVGLogo2 from './images/logo-2.inline.svg';
import SVGLogo3 from './images/logo-3.inline.svg';
import SVGLogo4 from './images/logo-4.inline.svg';
import SVGLogo5 from './images/logo-5.inline.svg';
import SVGLogo6 from './images/logo-6.inline.svg';
import SVGLogo7 from './images/logo-7.inline.svg';
import SVGLogo8 from './images/logo-8.inline.svg';
import SVGLogo9 from './images/logo-9.inline.svg';
import SVGLogo10 from './images/logo-10.inline.svg';
import SVGLogo11 from './images/logo-11.inline.svg';
import SVGLogo12 from './images/logo-12.inline.svg';
import SVGLogo13 from './images/logo-13.inline.svg';
import SVGLogo14 from './images/logo-14.inline.svg';
import SVGLogo15 from './images/logo-15.inline.svg';
import SVGLogo16 from './images/logo-16.inline.svg';

import * as styles from './About.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisualScroll: false,
    };
    this.visualRef = React.createRef();
  }

  componentDidMount() {
    window.removeEventListener('scroll', this.scroll);
    window.addEventListener('scroll', this.scroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll);
  }

  scroll = () => {
    const { state, visualRef } = this;
    const { isVisualScroll } = state;
    const windowScrollPosition = getScrollPosition();
    const visualHeight = visualRef.current.offsetHeight;

    if (windowScrollPosition.top > visualHeight && !isVisualScroll) {
      this.setState({
        isVisualScroll: true,
      });
    } else if (windowScrollPosition.top <= visualHeight && isVisualScroll) {
      this.setState({
        isVisualScroll: false,
      });
    }
  };

  render() {
    const { props, state } = this;
    const { isVisualScroll } = state;
    const { scrollbarsWidth } = props;

    return (
      <Fragment>
        <style type="text/css">
          {`
          .is-scroll-blocking .${cx('top-visual')}::before {
            margin-right: ${scrollbarsWidth}px;
          }
          `}
        </style>

        <h2 className="for-a11y">About</h2>

        <section className={cx('top-visual', { 'is-scroll': isVisualScroll })} ref={this.visualRef}>
          <div className={cx('top-visual__inner')}>
            <h3 className={cx('top-visual__title')}>
              Passion <span className="inline-block">for tomorrow</span>
            </h3>
            <p className={cx('top-visual__text')}>
              우리들의 꿈과 희망, 그리고 열정이
              <br />그 무엇보다도 소중합니다.
            </p>
          </div>
        </section>

        <div className={cx('wrap')}>
          <div className={cx('contents')}>
            <section className={cx('service')}>
              <h2 className="for-a11y">Service</h2>
              <div className={cx('service__inner')}>
                <section className={cx('service__section')}>
                  <h4 className={cx('service__title')}>Mobile Biz</h4>
                  <p className={cx('service__text')}>
                    IOS/AOS SmartPhone Service Development
                    <br />
                    Service Consulting /Planning
                    <br />
                    UX/UI Consulting / Design / Publishing
                  </p>
                </section>
                <section className={cx('service__section')}>
                  <h4 className={cx('service__title')}>mCommerce</h4>
                  <p className={cx('service__text')}>
                    Total Wallet Service Platform
                    <br />
                    Location Personal Platform
                    <br />
                    Point / Coupon / Membership
                  </p>
                </section>
                <section className={cx('service__section')}>
                  <h4 className={cx('service__title')}>Digital Media</h4>
                  <p className={cx('service__text')}>
                    IOS/AOS SmartPhone Service Development
                    <br />
                    Service Consulting /Planning
                    <br />
                    UX/UI Consulting / Design / Publishing
                  </p>
                </section>
              </div>
            </section>

            <div className={cx('wording')}>
              <p className={cx('wording__big')}>
                우리에게 클라이언트는 소중합니다.
                <br />
                하지만 더 소중한 사람들이 있습니다.
                <br />
                바로, {companyData.companyName}
              </p>
              <p className={cx('wording__medium')}>
                우리는 고객과의 비즈니스 성공을 위해 <span className="inline-block">다양한 형태의 사용자 경험에 주목하고 있습니다.</span>
                <br />
                다양한 경험을 기반으로 기술 산업과 서비스의 <span className="inline-block">융합적 접근을 통해 변화하는</span>{' '}
                <span className={cx('wording__block')}>디지털 패러다임의 새로운 가치를 만들어 냅니다.</span>
              </p>
            </div>

            <section className={cx('history')}>
              <h3 className="for-a11y">History</h3>
              <div className={cx('history__inner')}>
                <section className={cx('history__section')}>
                  <h4 className={cx('history__title')}>2025</h4>
                  <ul className={cx('history__list')}>
                    <li className={cx('history__item')}>하나캐피탈 웹/앱 접근성 마크 획득</li>
                    <li className={cx('history__item')}>하나카드 나라사랑카드 UI/UX 개발</li>
                    <li className={cx('history__item')}>SKT 에이닷 펫 App/Admin UI/UX 개발</li>
                    <li className={cx('history__item')}>SKT T Factory 성수 AT/DT 구축</li>
                    <li className={cx('history__item')}>기아자동차 기아 비즈 서비스 UI/UX 운영 유지 보수</li>
                    <li className={cx('history__item')}>기아자동차 기아 비즈 케어온 App UI/UX 운영 유지 보수</li>
                    <li className={cx('history__item')}>SKT 엑스칼리버 서비스 UI/UX 운영 유지 보수</li>
                    <li className={cx('history__item')}>하나카드 기업카드 카드신청 UI/UX 고도화</li>
                  </ul>
                </section>
                <section className={cx('history__section')}>
                  <h4 className={cx('history__title')}>2024</h4>
                  <ul className={cx('history__list')}>
                    <li className={cx('history__item')}>기아자동차 위블 비즈 고도화 및 운영</li>
                    <li className={cx('history__item')}>기아자동차 위블 비즈 케어온 App UI/UX 개발</li>
                    <li className={cx('history__item')}>현대차 HAMS(Hyundai API Management System) UI/UX 개발</li>
                    <li className={cx('history__item')}>현대차 글로벌 EV 충전 인프라 플랫폼 UI/UX 개발</li>
                    <li className={cx('history__item')}>현대차 인도네시아 EV 충전 서비스 App/Admin 퍼블리싱 개발</li>
                    <li className={cx('history__item')}>현대모빌리티재팬(HMJ) MOCEAN 서비스 App/FMS 고도화 및 운영</li>
                    <li className={cx('history__item')}>SKT 엑스칼리버 (Pet X-Ray AI 판독 서비스) 글로벌 고도화 UI/UX 개발</li>
                    <li className={cx('history__item')}>SKT 엑스칼리버 (Pet Cell AI) 25년 CES 출품 Admin UI/UX 개발</li>
                    <li className={cx('history__item')}>SKON ATIS / AXIS (배터리 불량 X-Ray AI 판독서비스) UI/UX 개발</li>
                    <li className={cx('history__item')}>SKON VISS (배터리 공정 이미지 관리 시스템) UI/UX 개발</li>
                  </ul>
                </section>
                <section className={cx('history__section')}>
                  <h4 className={cx('history__title')}>2023</h4>
                  <ul className={cx('history__list')}>
                    <li className={cx('history__item')}>기아자동차 위블 비즈 서비스 UI/UX 운영 유지 보수</li>
                    <li className={cx('history__item')}>롯데건설 스마트홈 App UI/UX 고도화</li>
                    <li className={cx('history__item')}>현대자동차 Bluelink Fleet 2.0 고도화 UI/UX 개발</li>
                    <li className={cx('history__item')}>하나카드 선불형 모바일 교통서비스(티머니) UI/UX 개발</li>
                    <li className={cx('history__item')}>하나카드 모바일 통합인증 UI/UX 개발</li>
                    <li className={cx('history__item')}>하나캐피탈 차세대시스템 구축 UI/UX 개발</li>
                  </ul>
                </section>
                <section className={cx('history__section')}>
                  <h4 className={cx('history__title')}>2022</h4>
                  <ul className={cx('history__list')}>
                    <li className={cx('history__item')}>현대자동차 Bluelink Fleet 2.0 UI/UX 개발</li>
                    <li className={cx('history__item')}>하나카드 디지털 카드신청 2.0 고도화</li>
                    <li className={cx('history__item')}>대성셀틱에너지스 App UI/UX 개발</li>
                    <li className={cx('history__item')}>SKT Petcare App UI/UX 개발</li>
                    <li className={cx('history__item')}>SKT AI Petcare EVR 플랫품 UI/UX 개발</li>
                    <li className={cx('history__item')}>현대차그룹 "위블비즈" UX/UI 개발</li>
                    <li className={cx('history__item')}>하나캐피탈 연간 퍼블리싱 개발 운영</li>
                    <li className={cx('history__item')}>하나캐피탈 글로벌 사이트 UX/UI 개발</li>
                    <li className={cx('history__item')}>하나카드 앱카드 상호 연동 고도화 UX/UI 개발</li>
                  </ul>
                </section>
                <section className={cx('history__section')}>
                  <h4 className={cx('history__title')}>2021</h4>
                  <ul className={cx('history__list')}>
                    <li className={cx('history__item')}>하나카드 기업카드 비대면 신규 신청 UI/UX 개발</li>
                    <li className={cx('history__item')}>대우건설 푸르지오 스마트홈 UI/UX 고도화 (3단계)</li>
                    <li className={cx('history__item')}>하나카드 오픈뱅킹 송금플랫폼 UI/UX 개발</li>
                    <li className={cx('history__item')}>SKT E2MS 태양광플랫폼 UI/UX 개발</li>
                    <li className={cx('history__item')}>SKB NCSS UI/UX 개발</li>
                    <li className={cx('history__item')}>법무부 위치추적시스템 고도화 UI/UX 개발</li>
                    <li className={cx('history__item')}>하나카드 원큐페이 앱통합 UI/UX 개발 (웹/앱 접근성 마크 획득)</li>
                    <li className={cx('history__item')}>SKT X Caliber AI 진단 서비스 UI/UX 개발</li>
                    <li className={cx('history__item')}>T MAP 주차관제 O&M 플랫폼 UX/UI Planning</li>
                  </ul>
                </section>
                <section className={cx('history__section')}>
                  <h4 className={cx('history__title')}>2020</h4>
                  <ul className={cx('history__list')}>
                    <li className={cx('history__item')}>SKT 스마트오피스 플랫폼 UI/UX 개발</li>
                    <li className={cx('history__item')}>제네시스 MY GENESIS App UI/UX 개발</li>
                    <li className={cx('history__item')}>하나카드 멀티서비스 플랫폼 UI/UX 개발</li>
                    <li className={cx('history__item')}>경기도청 경기도 청소년 교통비 지원 포털 UI/UX 개발</li>
                    <li className={cx('history__item')}>SKT Metatron Energy Opitmizer UI/UX 개발</li>
                    <li className={cx('history__item')}>SK네트웍스 민팃 & 바른폰 통합 UI/UX 고도화</li>
                    <li className={cx('history__item')}>하나금융TI Hana TI 1Q ON UI/UX 개발</li>
                    <li className={cx('history__item')}>하나카드 모바일 다이렉트 상담센터 UI/UX 개발</li>
                    <li className={cx('history__item')}>하나카드 자동차금융 App UI/UX 개발</li>
                  </ul>
                </section>
                <section className={cx('history__section')}>
                  <h4 className={cx('history__title')}>2019</h4>
                  <ul className={cx('history__list')}>
                    <li className={cx('history__item')}>제네시스 디지털 키 App UI/UX 개발</li>
                    <li className={cx('history__item')}>기아자동차 디지털 키 App UI/UX 개발</li>
                    <li className={cx('history__item')}>SK telink 바른폰 중고폰 판매 플랫폼 UI/UX 개발</li>
                    <li className={cx('history__item')}>대우건설 푸르지오 스마트홈 UI/UX 개발</li>
                    <li className={cx('history__item')}>서울대학교병원 스마트 건강검진 플랫폼 UI/UX 개발</li>
                    <li className={cx('history__item')}>SKT Ready Store UI/UX 개발</li>
                    <li className={cx('history__item')}>CNA CASTPICK 캐스팅 플랫폼 UI/UX 개발</li>
                    <li className={cx('history__item')}>SKT ACaas UI/UX 개발</li>
                  </ul>
                </section>
                <section className={cx('history__section')}>
                  <h4 className={cx('history__title')}>2018</h4>
                  <ul className={cx('history__list')}>
                    <li className={cx('history__item')}>현대자동차 스마트키 App UI/UX 개발</li>
                    <li className={cx('history__item')}>롯데 캐시비 부산은행 썸뱅크 App 고도화 개발</li>
                    <li className={cx('history__item')}>신한카드 FAN App내 Pickup 서비스 UX 개발</li>
                    <li className={cx('history__item')}>롯데건설 롯데캐슬매니저 App UI/UX 개발</li>
                    <li className={cx('history__item')}>SKT 전국민모바일신분증 App UI/UX 개발</li>
                    <li className={cx('history__item')}>이비카드 모바일캐시비 UI/UX 운영 유지 보수</li>
                    <li className={cx('history__item')}>SK브로드밴드 욜로톡 App 기획, UI/UX 개발</li>
                    <li className={cx('history__item')}>SKT T-View Sence 고도화 개발</li>
                  </ul>
                </section>
                <section className={cx('history__section')}>
                  <h4 className={cx('history__title')}>2017 ~ 2009</h4>
                  <ul className={cx('history__list')}>
                    <li className={cx('history__item')}>SK브로드밴드 욜로톡 App 기획, UI/UX 개발</li>
                    <li className={cx('history__item')}>SKT IoT 포털 Thing Plug UI 개발</li>
                    <li className={cx('history__item')}>BCCard 완쭈어한궈 Commerce App 구축</li>
                    <li className={cx('history__item')}>삼성전자 런던올림픽 공식 App UI개발</li>
                    <li className={cx('history__item')}>SKT,외환은행 Smart Branch Banking UI</li>
                    <li className={cx('history__item')}>SKP Smart Wallet 로열티 모바일웹 개발</li>
                    <li className={cx('history__item')}>LGCNS LG트윈스 모바일앱 개발</li>
                    <li className={cx('history__item')}>삼성전자 플래쉬기반 스마트위젯빌더 UI개발</li>
                  </ul>
                </section>
              </div>
            </section>

            <section className={cx('client')}>
              <h3 className="for-a11y">Client</h3>
              <ul className={cx('client__list')}>
                <li className={cx('client__item')}>
                  <SVGLogo1 className={cx('client__logo')} />
                  <span className="for-a11y">SK telecom</span>
                </li>
                <li className={cx('client__item')}>
                  <SVGLogo2 className={cx('client__logo')} />
                  <span className="for-a11y">SK telink</span>
                </li>
                <li className={cx('client__item')}>
                  <SVGLogo3 className={cx('client__logo')} />
                  <span className="for-a11y">SK broadband</span>
                </li>
                <li className={cx('client__item')}>
                  <SVGLogo4 className={cx('client__logo')} />
                  <span className="for-a11y">SK planet</span>
                </li>
                <li className={cx('client__item')}>
                  <SVGLogo5 className={cx('client__logo')} />
                  <span className="for-a11y">KT</span>
                </li>
                <li className={cx('client__item')}>
                  <SVGLogo6 className={cx('client__logo')} />
                  <span className="for-a11y">서울대학교병원</span>
                </li>
                <li className={cx('client__item')}>
                  <SVGLogo7 className={cx('client__logo')} />
                  <span className="for-a11y">롯데건설</span>
                </li>
                <li className={cx('client__item')}>
                  <SVGLogo8 className={cx('client__logo')} />
                  <span className="for-a11y">대우건설</span>
                </li>
                <li className={cx('client__item')}>
                  <SVGLogo9 className={cx('client__logo')} />
                  <span className="for-a11y">현대</span>
                </li>
                <li className={cx('client__item')}>
                  <SVGLogo10 className={cx('client__logo')} />
                  <span className="for-a11y">기아</span>
                </li>
                <li className={cx('client__item')}>
                  <SVGLogo11 className={cx('client__logo')} />
                  <span className="for-a11y">제네시스</span>
                </li>
                <li className={cx('client__item')}>
                  <SVGLogo12 className={cx('client__logo')} />
                  <span className="for-a11y">현대 모비스</span>
                </li>
                <li className={cx('client__item')}>
                  <SVGLogo13 className={cx('client__logo')} />
                  <span className="for-a11y">하나카드</span>
                </li>
                <li className={cx('client__item')}>
                  <SVGLogo14 className={cx('client__logo')} />
                  <span className="for-a11y">하나캐피탈</span>
                </li>
                <li className={cx('client__item')}>
                  <SVGLogo15 className={cx('client__logo')} />
                  <span className="for-a11y">비씨카드</span>
                </li>
                <li className={cx('client__item')}>
                  <SVGLogo16 className={cx('client__logo')} />
                  <span className="for-a11y">에뛰드</span>
                </li>
              </ul>
            </section>

            <section className={cx('end-wording')}>
              <div className={cx('end-wording__inner')}>
                <h3 className={cx('end-wording__title')}>Passion for tomorrow</h3>
                <p className={cx('end-wording__text')}>
                  과거가 아닌 현재도 아닌 <span className="inline-block">미래를 위해 생각하자.</span>
                  <br />
                  그리고 먼 미래의 아련한 목표가 아닌
                  <br />
                  당장 내일을 맞을 사람과 기업을 <span className="inline-block">위해 열정을 다하자.</span>
                </p>
              </div>
            </section>
          </div>

          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default connect((state) => ({
  scrollbarsWidth: state.scrollbarsWidth.width,
}))(About);
