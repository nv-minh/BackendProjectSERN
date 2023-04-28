import axiosConfig from '../axiosConfig';

export const apiGetCategories = async () => {
  try {
    const response = await axiosConfig({
      method: 'get',
      url: '/api/v1/category/all',
    });
    return response;
  } catch (error) {
    return error;
  }
};
export const apiGetPrices = async () => {
  try {
    const response = await axiosConfig({
      method: 'get',
      url: '/api/v1/price/all',
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const apiGetAreas = async () => {
  try {
    const response = await axiosConfig({
      method: 'get',
      url: '/api/v1/area/all',
    });
    return response;
  } catch (error) {
    return error;
  }
};
