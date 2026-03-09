import React, { Fragment } from 'react';

const data = {
  hideDetail: false,
  service: 'Mobile Web',
  name: '하나카드 모바일 다이렉트 상담센터',
  title: '쉽고 간편한 상담 서비스\n하나카드 모바일 다이렉트 상담센터',
  topText: '쉽고 간편한 상담\n하나카드 다이렉트 상담',
  overview: {
    date: {
      start: '20.12',
      end: '21.05',
    },
    client: '하나카드',
    description: (() => (
      <Fragment>
        모바일 화면을 보며 동시에 다양한 유형의 상담이 가능한 서비스, 하나카드 모바일 다이렉트 상담센터 앱을 구축했습니다.
        <br />
        언제 어디서나 앱을 통해 카드신청, 즉시결제, 재발급, 이용내역, 카드한도, 대출 등의 주요 서비스를 이용할 수 있으며&nbsp;
        <span className="display-block-pc-only">간단한 본인인증 이후 상담 안내와 앱 서비스를 동시에 진행할 수 있어 누구든지 편리한 사용이 가능합니다.</span>
      </Fragment>
    ))(),
  },
};

export default data;
