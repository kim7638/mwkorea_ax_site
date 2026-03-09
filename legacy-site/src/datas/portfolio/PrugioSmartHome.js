import React, { Fragment } from 'react';

const data = {
  hideDetail: false,
  service: 'Mobile App',
  name: '푸르지오 스마트홈 앱',
  title: '스마트 라이프의 시작\n푸르지오 스마트홈',
  topText: '스마트 라이프의 시작\n푸르지오 스마트홈',
  overview: {
    date: {
      start: ['19.01', '20.07'],
      end: ['19.10', '20.12'],
    },
    client: '대우건설',
    description: (() => (
      <Fragment>
        스마트 라이프를 지향하는 동시에 푸르지오만의 아이덴티티를 녹여낼 수 있는 모바일 서비스를 구축하였습니다.
        <br />
        앱을 활용한 엘리베이터 호출, 방문객 관리 등의 생활 편의 서비스, 비대면 커뮤니케이션 기능 등을 제공하여&nbsp;
        <span className="display-block-pc-only">스마트한 생활을 영위할 수 있도록 사용자 친화적 기능에 초점을 맞췄습니다.</span>
      </Fragment>
    ))(),
  },
};

export default data;
