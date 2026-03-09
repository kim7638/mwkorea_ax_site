import React, { Fragment } from 'react';

const data = {
  hideDetail: false,
  service: 'Mobile App',
  name: '마이 제네시스 앱',
  title: '제네시스의 모든 것\n마이 제네시스 앱',
  topText: '제네시스의 모든 것\n마이 제네시스 앱',
  overview: {
    date: {
      start: '20.06',
      end: '21.03',
    },
    client: '제네시스 현대자동차그룹',
    description: (() => (
      <Fragment>
        하나의 어플리케이션에서 나의 차량 맞춤 데이터부터 스토어, 멤버십, 라이프스타일 그리고 다양한 제네시스의 모든 서비스들을{' '}
        <span className="display-block-pc-only">편리하게 확인할 수 있는 마이 제네시스 앱을 구축하였습니다.</span>{' '}
        <span className="display-block">
          제네시스만의 아이덴티티를 담아내면서 현재 날씨, 나의 차량 정보 등 개인 맞춤형 정보를 메인에서 제공해{' '}
          <span className="display-block-pc-only">사용자들의 재미 요소를 제공하고자 하였습니다.</span>
        </span>
      </Fragment>
    ))(),
  },
};

export default data;
