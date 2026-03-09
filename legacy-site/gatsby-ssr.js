import React from 'react';
import Wrap from './src/components/Wrap';
import { Provider } from 'react-redux';
import store from './src/store';

export const wrapPageElement = ({ element, props }) => {
  return (
    <Provider store={store}>
      <Wrap {...props}>{element}</Wrap>
    </Provider>
  );
};
