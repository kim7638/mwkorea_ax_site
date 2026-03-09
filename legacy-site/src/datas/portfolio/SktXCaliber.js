import React, { Fragment } from 'react';

const data = {
  hideDetail: false,
  service: 'Responsive Web',
  name: 'SKT X Caliber',
  title: '동물병원 수의사를 위한\nSKT X Caliber',
  topText: '동물병원 수의사를 위한\nSKT X Caliber',
  overview: {
    date: {
      start: '21.07',
      end: '21.11',
    },
    client: 'SK Telecom',
    description: (() => (
      <Fragment>
        별도의 복잡한 프로그램 설치없이 웹 브라우저로 편리하게 반려동물의 진단을 내릴 수 있는 AI 진단 보조서비스를 구축하였습니다.
        <br />
        고도화된 AI가 반려동물의 X-ray 사진을 분석해 수의사의 정확한 진단을 돕고, 반려동물의 진단 차트를 Cloud 기반으로 장소와 시간의 제약없이 &nbsp;
        <span className="display-block-pc-only">관리할 수 있는 서비스로 사용자 업무의 효율성과 편의성을 강화하고자 하였습니다.</span>
      </Fragment>
    ))(),
  },
};

export default data;
