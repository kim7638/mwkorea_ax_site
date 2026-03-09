import React, { Fragment } from 'react';

const data = {
  hideDetail: false,
  service: 'Responsive Web',
  name: '민팃',
  title: '믿을 수 있는 중고 거래 플랫폼\n민팃',
  topText: '믿을 수 있는\n중고 ICT 플랫폼 민팃',
  overview: {
    date: {
      start: '20.10',
      end: '20.12',
    },
    client: 'SK 네트웍스 서비스',
    description: (() => (
      <Fragment>
        혁신적인 기술로 중고 ICT 기기 거래의 통합적 환경을 구축하여, 누구나 쉽고 편리하게 거래할 수 있는 플랫폼 서비스를 구축하였습니다.
        <br />
        인공지능 가격 평가 시스템으로 가까운 대형마트에서 간편하고 합리적인 ICT 라이프를 만들고,&nbsp;
        <span className="display-block-pc-only">사용자의 시간과 노력 낭비없이 최상의 조건으로 거래할 수 있도록 간편한 UX/UI를 제안하고자 합니다.</span>
      </Fragment>
    ))(),
  },
};

export default data;
