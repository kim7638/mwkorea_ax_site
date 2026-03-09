import React, { Fragment } from 'react';

const data = {
  hideDetail: false,
  service: 'PC/Mobile Web',
  name: '블루링크 플릿',
  title: '상용차 관리 필수 서비스\n 블루링크 플릿',
  topText: '상용차 관리 필수 서비스\n 블루링크 플릿',
  overview: {
    date: {
      start: '23.07',
      end: '23.13',
    },
    client: 'SK Telecom',
    description: (() => (
      <Fragment>
        블루링크 플릿은 보다 편리하고 쉬운 상용차 관리 서비스를 관리자에게 제공합니다.
        <br />
        대시보드를 통해 다소 복잡할 수 있는 정보를 한눈에 파악할 수 있게 구성하였으며,
        <br />
        계층화된 정보와 그래프를 사용하여 시각화된 정보를 통해 보다 직관적인 정보를 제공하고자 하였습니다.
      </Fragment>
    ))(),
  },
};

export default data;
