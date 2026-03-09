import React, { Fragment } from 'react';

const data = {
  hideDetail: false,
  service: 'PC/Mobile Web, App',
  name: '하나캐피탈',
  title: '모두의 기쁨, 그 하나를 위해\n 하나캐피탈',
  topText: '모두의 기쁨, 그 하나를 위해\n 하나캐피탈',
  overview: {
    date: {
      start: '22.05',
      end: '23.12',
    },
    client: '하나캐피탈',
    description: (() => (
      <Fragment>
        기존의 복잡하고 사용하기 어렵던 환경을 비대면 채널의 시스템을 간소화하고 사용자가 보다 편하게 이용할 수 있는 금융 서비스 제공하기 위해 차세대 전산 시스템 구축과 더불어 전체 홈페이지와 App
        화면을 개선하였습니다.
        <br /> 화면 내 정보의 구조를 재정의하고, 홈페이지와 App 화면의 디자인 시스템을 재구축하여 보다 일관되고, 편리한 사용성을 제공할 수 있게 리뉴얼을 진행하였습니다.
      </Fragment>
    ))(),
  },
};

export default data;
