import React, { Fragment } from 'react';

const data = {
  hideDetail: false,
  service: 'Mobile App/Web',
  name: '하나카드 멀티서비스',
  title: '한 장의 편리함\n하나카드 멀티서비스',
  topText: '한 장의 편리함\n하나카드 멀티서비스',
  overview: {
    date: {
      start: '20.07',
      end: '21.01',
    },
    client: '하나카드',
    description: (() => (
      <Fragment>
        <div>
          하나카드에서는 스마트 시대에 발맞춰 사용자 스스로 본인의 소비환경에 맞게&nbsp;
          <span className="display-block-pc-only">바꿔서 사용할 수 있는 새로운 카드를 출시하였습니다.</span>
        </div>
        언제 어디서나 원하는 혜택의 카드 골라서 사용할 수 있는 사용자 환경을 제공해 주기 위한 모바일 서비스를 구축하였습니다.
      </Fragment>
    ))(),
  },
};

export default data;
