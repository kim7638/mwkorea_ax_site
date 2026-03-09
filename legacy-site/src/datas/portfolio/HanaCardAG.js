import React, { Fragment } from 'react';

const data = {
  hideDetail: false,
  service: 'Mobile App',
  name: '하나카드 자동차금융 앱',
  title: '오토금융의 시작\n하나카드 자동차 금융',
  topText: '오토금융의 시작\n하나카드 자동차 금융',
  overview: {
    date: {
      start: '21.01',
      end: '21.04',
    },
    client: '하나카드',
    description: (() => (
      <Fragment>
        하나카드 오토금융의 다양한 서비스를 이용하고 있는 고객들을 관리하기 위한 Car Manager 맞춤형 서비스입니다.
        <br />
        직관적인 화면 구성과 뎁스의 최소화를 통해 앱을 이용하는 주체가 될 Car Manager가&nbsp;
        <span className="display-block-pc-only">이용에 적응하기 위해 사용하는 시간을 최소화하고 업무에서의 활용성을 높이고자 하였습니다.</span>
      </Fragment>
    ))(),
  },
};

export default data;
