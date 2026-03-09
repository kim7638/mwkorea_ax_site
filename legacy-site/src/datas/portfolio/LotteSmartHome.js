import React, { Fragment } from 'react';

const data = {
  priority: 1,
  hideDetail: false,
  service: 'Mobile App',
  name: '롯데 스마트홈',
  title: '편안한 스마트 라이프\n 롯데 스마트홈',
  topText: '편안한 스마트 라이프\n 롯데 스마트홈',
  overview: {
    date: {
      start: '23.04',
      end: '23.11',
    },
    client: '롯데건설',
    description: (() => (
      <Fragment>
        변화하는 주거 환경 속, 편안한 스마트 라이프 경험을 목표로 롯데 스마트홈 서비스를 리뉴얼하였습니다.{' '}
        <span className="display-block">
        기존의 복잡하고 가독성이 떨어지던 서비스에서 정보 및 UI 단순화를 통해 사용성을 개선하고, 서비스에 흥미를 줄 수 있도록 전체 App 디자인을 개선하였습니다.{' '}
          <span className="display-block-pc-only">원격 기기제어, 주차 및 전기차 충전 관리, 에너지 사용량 조회 등의 서비스를 통해 입주민들이 보다 편하게 스마트 라이프를 즐길 수 있도록 합니다. </span>
        </span>
      </Fragment>
    ))(),
  },
};

export default data;
