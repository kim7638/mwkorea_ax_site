import React, { Fragment } from 'react';

const data = {
  hideDetail: false,
  service: 'Tablet, Kiosk, PC/Mobile Web',
  name: 'SK 텔레콤 스마트 오피스',
  title: '업무 방식의 혁신\nSK 텔레콤 스마트 오피스',
  topText: '업무 방식의 혁신\nSK 텔레콤 스마트 오피스',
  overview: {
    date: {
      start: '19.12',
      end: '20.04',
    },
    client: 'SK Telecom',
    description: (() => (
      <Fragment>
        <span className="display-block-pc-only">5G와 ICT 기술을 ‘애자일 방식’과 결합해 조직의 유연성을 극대화하고 </span>
        업무 생산성과 워라밸을 동시에 높일 수 있는 스마트 오피스 서비스를 구축하였습니다.
        <br />
        MOBILE, PC, KIOSK, PAD 네 가지 디바이스 별 목적과 특성을 바탕으로{' '}
        <span className="display-block-pc-only">접점에 따른 정보제공과 개인 맞춤형 서비스 증대를 통해 업무의 효율성과 편의성을 강화하고자 하였습니다.</span>
      </Fragment>
    ))(),
  },
};

export default data;
