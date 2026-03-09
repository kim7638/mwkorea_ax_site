import { importDefaultScript } from 'utils/core';

const datasObject = importDefaultScript(require.context('./', false, /[A-Z].+\.js$/));
const datasObjectKeys = Object.keys(datasObject);
const datas = datasObjectKeys.map((item) => {
  datasObject[item].id = item;
  return datasObject[item];
});

// end 날짜 기준 소팅
datas.sort((a, b) => {
  // priority가 높은 순서대로 먼저 (숫자가 클수록 상단)
  const priorityA = a.priority || 0;
  const priorityB = b.priority || 0;
  
  if (priorityA !== priorityB) {
    return priorityB - priorityA; // 내림차순
  }
  
  // priority가 같으면 날짜로 정렬
  const endDateA = (() => {
    let date = a.overview.date.end;

    if (Array.isArray(date)) {
      date = date[date.length - 1];
    }

    return date.toUpperCase();
  })();
  const endDateB = (() => {
    let date = b.overview.date.end;

    if (Array.isArray(date)) {
      date = date[date.length - 1];
    }

    return date.toUpperCase();
  })();

  if (endDateA < endDateB) {
    return 1;
  }

  if (endDateA > endDateB) {
    return -1;
  }

  return 0;
});

export { datasObject };
export default datas;
