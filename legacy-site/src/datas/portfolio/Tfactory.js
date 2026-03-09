import React, { Fragment } from 'react';

const data = {
  priority: 4,
  hideDetail: false,
  service: 'Mobile Web',
  name: 'T Factory',
  title: 'SKT 플래그십 스토어\n Draw your way, T Factory 성수',
  topText: '',
  overview: {
    date: {
      start: '25.04',
      end: '25.12',
    },
    client: 'SK Telecom',
    description: (() => (
      <Fragment>
        T Factory의 성수 거점 이동에 따라 새로운 브랜딩 및 서비스 개선을 위해 웹페이지의 리뉴얼 작업을 진행하였습니다.{' '}
        <span className="display-block">
          고객 개개인의 모바일을 기반으로 AI 공간 혼잡도 분석, 프로그램 튜토리얼, 프리퀀시 등 독창적인 서비스를 제공하여 공간과 디지털이 유기적으로 연결되는 <br className="is-pc-only" />
          T Factory만의 새로운 브랜드 가치를 경험할 수 있도록 합니다.
        </span>
      </Fragment>
    ))(),
  },
};

export default data;
