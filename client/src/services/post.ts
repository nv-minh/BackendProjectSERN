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

export const apiGetPostsLimit = async (page: number) => {
  try {
    const response = await axiosConfig({
      method: 'get',
      url: `/api/v1/post/limit?page=${page}`,
    });
    return response;
  } catch (error) {
    return error;
  }
};
