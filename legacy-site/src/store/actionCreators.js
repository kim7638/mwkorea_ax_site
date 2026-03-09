import { bindActionCreators } from 'redux';
import * as scrollbarsWidthActions from './modules/scrollbarsWidth';
import * as scrollBlockActions from './modules/scrollBlock';

import store from './index';

const { dispatch } = store;

export const ScrollbarsWidthActions = bindActionCreators(scrollbarsWidthActions, dispatch);
export const ScrollBlockActions = bindActionCreators(scrollBlockActions, dispatch);
