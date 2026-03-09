import React, { Fragment } from 'react';

const data = {
  hideDetail: false,
  service: 'Mobile App',
  name: '데일리 체크 Petcare',
  title: '소중한 반려동물\n데일리 체크 Petcare',
  topText: '소중한 반려동물\n데일리 체크 Petcare',
  overview: {
    date: {
      start: '22.08',
      end: '22.11',
    },
    client: 'SK Telecom',
    description: (() => (
      <Fragment>
        데일리로 반려동물을 점검하고 상태를 기록할 수 있는 펫케어 앱을 구축했습니다.
        <br />
        상태점검과 더불어 예방접종과 같은 일정 등을 캘린더로 한 눈에 확인할 수 있으며 여러가지 Tip을 받아볼 수 있습니다.
        <br /> 메인 기능인 셀프점검을 완료하면 멍냥포인트가 쌓여 높은 점수를 기록할 수 있습니다.
      </Fragment>
    ))(),
  },
};

export default data;
