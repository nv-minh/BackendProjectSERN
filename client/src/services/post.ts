import axiosConfig from '../axiosConfig';

export const apiGetAllPosts = async () => {
  try {
    const response = await axiosConfig({
      method: 'get',
      url: '/api/v1/post/all',
    });

    return response;
  } catch (error) {
    return error;
  }
};

export interface props {
  queryPage: number;
  queryPrice?: string;
}

export const apiGetPostsLimit = async (props: props) => {
  try {
    const response = await axiosConfig({
      method: 'get',
      url: `/api/v1/post/limit`,
      params: props,
    });
    return response;
  } catch (error) {
    return error;
  }
};
