import React, { Fragment } from 'react';

const data = {
  hideDetail: false,
  service: 'Mobile App',
  name: '제네시스 디지털키 앱',
  title: '커넥티드카의 첫걸음\n제네시스 디지털 키',
  topText: '커넥티드카의 첫걸음\n제네시스 디지털 키',
  overview: {
    date: {
      start: '19.05',
      end: '19.11',
    },
    client: '제네시스 현대자동차그룹',
    description: (() => (
      <Fragment>
        제네시스 디지털 키는 첨단 신기술로 사람과 자동차가 함께 하여 일상의 편리함을 한층 더해주는 모바일 서비스를 구축하였습니다.
        <br />
        스마트폰에 디지털 키 앱을 설치하면 터치 제어와 근접 제어가 가능하고, 가족과 친구들에게 디지털 키를 쉽게 공유할 수 있습니다.
      </Fragment>
    ))(),
  },
};

export default data;
