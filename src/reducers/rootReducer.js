import projectReducer from './projectReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  project: projectReducer,
  user: authReducer,
});

export default rootReducer;
