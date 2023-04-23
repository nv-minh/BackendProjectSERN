import axiosConfig from '../axiosConfig';
import { IUser } from '../interface';

export const apiRegister = async (payload: IUser) => {
  try {
    const response = await axiosConfig({
      method: 'post',
      url: '/api/v1/auth/register',
      data: payload,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const apiLogin = async (payload: IUser) => {
  try {
    const response = await axiosConfig({
      method: 'post',
      url: '/api/v1/auth/login',
      data: payload,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
