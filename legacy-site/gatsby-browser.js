import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React from 'react';
import Wrap from './src/components/Wrap';
import { Provider } from 'react-redux';
import store from './src/store';

import 'swiper/scss';
import './src/assets/styles/common.scss';
import './src/assets/styles/basic.scss';

export const wrapPageElement = ({ element, props }) => {
  return (
    <Provider store={store}>
      <Wrap {...props}>{element}</Wrap>
    </Provider>
  );
};
