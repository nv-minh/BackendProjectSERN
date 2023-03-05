import { IAuth } from '../../interface/Auth';
import actionType from '../actions/actionType';

const initState: IAuth = {
  isLoggedIn: false,
  accessToken: null,
};

const authReducer = (state: IAuth = initState, action: any) => {
  switch (action.type) {
    case actionType.REGISTER_SUCCESS:
      return {
        ...(state as object),
        isLoggedIn: true,
        accessToken: action.data,
      };
    case actionType.REGISTER_FAIL:
      return {
        ...(state as object),
        isLoggedIn: false,
        accessToken: null,
      };
    case actionType.LOGIN_SUCCESS:
      return {
        ...(state as object),
        isLoggedIn: true,
        accessToken: action.data,
      };
    case actionType.LOGIN_FAIL:
      return {
        ...(state as object),
        isLoggedIn: false,
        accessToken: null,
      };
    case actionType.LOGOUT:
      return {
        ...(state as object),
        isLoggedIn: false,
        accessToken: null,
      };
    default:
      return state;
  }
};

export default authReducer;
