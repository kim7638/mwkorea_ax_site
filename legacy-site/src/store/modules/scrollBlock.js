import { getScrollPosition } from 'utils/core';

const BROCK = 'scrollBlock/BROCK';
const CLEAR = 'scrollBlock/CLEAR';

export const block = () => ({ type: BROCK });
export const clear = () => ({ type: CLEAR });

const className = 'is-scroll-blocking';

const initialState = {
  isBlock: false,
  scrollTop: 0,
  scrollLeft: 0,
};

const scrollBlock = () => {
  const html = document.querySelector('html');
  const wrap = document.querySelector('#___gatsby');
  const scrollPosition = getScrollPosition();
  const hasClass = html.classList.contains(className);

  if (!hasClass) {
    html.classList.add(className);
    window.scrollTo(0, 0);
    wrap.scrollTop = scrollPosition.top;
    wrap.scrollLeft = scrollPosition.left;
  }

  return {
    isBlock: true,
    scrollTop: scrollPosition.top,
    scrollLeft: scrollPosition.left,
  };
};

const scrollBlockClear = (state) => {
  const html = document.querySelector('html');
  const wrap = document.querySelector('#___gatsby');
  const scrollPosition = {
    top: state.scrollTop,
    left: state.scrollLeft,
  };
  const hasClass = html.classList.contains(className);

  if (hasClass) {
    html.classList.remove(className);
    wrap.scrollTop = 0;
    wrap.scrollLeft = 0;
    window.scrollTo(scrollPosition.left, scrollPosition.top);
  }

  return { isBlock: false };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BROCK:
      return { ...state, ...scrollBlock() };
    case CLEAR:
      return { ...state, ...scrollBlockClear(state) };
    default:
      return state;
  }
};
export default reducer;
