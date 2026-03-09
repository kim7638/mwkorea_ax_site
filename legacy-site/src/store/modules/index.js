import { combineReducers } from 'redux';
import scrollbarsWidth from './scrollbarsWidth';
import scrollBlock from './scrollBlock';

export default combineReducers({
  scrollbarsWidth,
  scrollBlock,
});
