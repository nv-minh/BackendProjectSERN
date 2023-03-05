import actionType from './actionType';
import { apiRegister, apiLogin } from '../../services/auth';
import { IUser } from '../../interface/User';

// TODO change interface dispatch later

export const register = (payload: IUser) => async (dispatch: any) => {
  try {
    const response = await apiRegister(payload);
    if (response?.data.success === true) {
      dispatch({
        type: actionType.REGISTER_SUCCESS,
        data: response?.data.accessToken,
      }) as unknown as any;
    } else {
      dispatch({
        type: actionType.REGISTER_FAIL,
        data: response?.data.message,
      }) as unknown as any;
    }
  } catch (error) {
    dispatch({
      type: actionType.REGISTER_FAIL,
      data: null,
    }) as unknown as any;
  }
};

export const login = (payload: IUser) => async (dispatch: any) => {
  try {
    const response = await apiLogin(payload);
    if (response?.data.success === true) {
      dispatch({
        type: actionType.LOGIN_SUCCESS,
        data: response?.data.accessToken,
      }) as unknown as any;
    } else {
      dispatch({
        type: actionType.LOGIN_FAIL,
        data: response?.data.message,
      }) as unknown as any;
    }
  } catch (error) {
    dispatch({
      type: actionType.LOGIN_FAIL,
      data: null,
    }) as unknown as any;
  }
};

export const logout = () => ({
  type: actionType.LOGOUT,
});
