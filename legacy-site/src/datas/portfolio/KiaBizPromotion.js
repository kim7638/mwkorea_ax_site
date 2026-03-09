import React, { Fragment } from 'react';

const data = {
  priority: 3,
  hideDetail: false,
  service: 'Responsive Web',
  name: 'KIA Biz 홍보사이트',
  title: '기아 공유 모빌리티 서비스\n KIA Biz 홍보사이트',
  topText: '기아 공유 모빌리티 서비스\n KIA Biz 홍보사이트',
  overview: {
    date: {
      start: '25.08',
      end: '25.09',
    },
    client: '기아자동차',
    description: (() => (
      <Fragment>
        기존 위블 비즈에서 기아 비즈로 서비스 브랜드가 전면 개편됨에 따라 웹 홍보사이트 전반을 새로운 브랜드 아이덴티티에 맞추어 리뉴얼하였습니다.
        <br />
        기아 브랜드에 맞는 비주얼과 톤앤매너를 반영하고 서비스의 신뢰도와 전문성이 더욱 명확하게 전달되도록 하였습니다.
        <br />
        또한 디바이스 및 해상도에 따른 레이아웃 변화를 유연하게 대응할 수 있도록 반응형 웹 기반으로 구축하였습니다.
      </Fragment>
    ))(),
  },
};

export default data;
