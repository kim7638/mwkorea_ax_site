import React, { Fragment } from 'react';

const data = {
  priority: 2,
  hideDetail: false,
  service: 'Mobile App, Media',
  name: 'Kia Biz',
  title: '친환경 모빌리티 솔루션\nKia Biz',
  topText: '친환경 모빌리티 솔루션\nKia Biz',
  overview: {
    date: {
      start: '24.01',
      end: '현재',
    },
    client: '기아자동차',
    description: (() => (
      <Fragment>
        기아 비즈는 기관이나 기업이 전기차를 평일 업무시간에 구독하면 직원들이 출장이나 외근 시 사용하고, 업무 외 시간에는 직원 개인이 출퇴근 또는 레저용으로 차량을 빌려 탈 수 있게 하는 서비스입니다. 각 공공기관과 협력해 시민들에게 대여해 주는 서비스 확장으로 교통복지 개선, 지역 관광 활성화 등 지역사회 전반에도 <br className="is-pc-only" />
        긍정적인 영향을 확대해 가고 있습니다. 서비스 및 기능 개선이 필요함에 따라 필요한 앱, 관리자 화면을 지속적으로 업데이트하며 운영 유지하고 있습니다.
      </Fragment>
    ))(),
  },
};

export default data;
