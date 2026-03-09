import React, { Fragment } from 'react';

const data = {
  hideDetail: false,
  service: 'PC Web',
  name: 'AI Pet Care EVR',
  title: '동물병원 최적화 플랫폼\nAI Pet Care EVR',
  topText: '동물병원 최적화 플랫폼\nAI Pet Care EVR',
  overview: {
    date: {
      start: '22.08',
      end: '22.11',
    },
    client: 'SK Telecom',
    description: (() => (
      <Fragment>
        EVR은 동물 병원 관계자들이 환자를 케어할 수 있는 최적의 환경을 만들기 위해 제작된 병원 정보 관리 플랫폼입니다. 반려인이 점점 많아지고 있는 요즘, 동물 병원의 수요도 높아지고 있습니다. EVR에서는
        각각의 업무 위치에서 최적의 환경을 유지한 채 환자를 케어할 수 있습니다. 다양한 정보를 간편하고 쉽게 관리할 수 있도록 정보의 위계와 간편한 플로우에 집중한 서비스입니다. 현역 수의사와 함께
        제작된 서비스로 충분한 경험과 지식을 바탕으로 기획되었습니다.
      </Fragment>
    ))(),
  },
};

export default data;
