import { combineReducers } from 'redux';
import { SET_ACCOUNT, SET_META, SET_THEME } from './../actions';

const appID = (state = null, action) => {
  switch (action.type) {
    case SET_ACCOUNT:
      return action.appID;
    default:
      return state;
  }
};

const apiKey = (state = null, action) => {
  switch (action.type) {
    case SET_ACCOUNT:
      return action.apiKey;
    default:
      return state;
  }
};

const meta = (state = {}, action) => {
  switch (action.type) {
    case SET_META:
      return action.meta;
    default:
      return state;
  }
};

const theme = (state = {}, action) => {
  switch (action.type) {
    case SET_THEME:
      return action.theme;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  appID,
  apiKey,
  meta,
  theme,
});

export default rootReducer;
