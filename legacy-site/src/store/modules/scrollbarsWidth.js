const UPDATEWIDTH = 'scrollbarsWidth/UPDATEWIDTH';

export const updateWidth = () => ({ type: UPDATEWIDTH });

const initialState = {
  width: 0,
};

const getScrollbarsWidth = () => {
  const html = document.querySelector('html');
  const wrap = document.querySelector('#___gatsby');

  html.style.overflow = 'hidden';
  const beforeW = wrap.offsetWidth;
  html.style.overflow = 'scroll';
  const afterW = wrap.offsetWidth;
  html.style.overflow = '';

  return { width: beforeW - afterW };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATEWIDTH:
      return { ...state, ...getScrollbarsWidth() };
    default:
      return state;
  }
};
export default reducer;
