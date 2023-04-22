import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { persistReducer } from 'redux-persist';
import userReducer from './userReducer';
import authReducer from './authReducer';
import { IAuth } from '../../interface/Auth';
import postReducer from './postReducer';

const commonConfig = {
  storage,
  stateReconciler: autoMergeLevel2,
};

const authConfig = {
  ...commonConfig,
  key: 'auth',
  whitelist: ['isLoggedIn', 'accessToken'],
};
// TODO: fix type action
const rootReducer = combineReducers({
  auth: persistReducer<IAuth, any>(authConfig, authReducer),
  user: userReducer,
  posts: postReducer,
});

export default rootReducer;
