import { apiGetAllPosts, apiGetPostsLimit } from '../../services/post';
import actionType from './actionType';
// TODO change interface dispatch later

export const getPosts = () => async (dispatch: any) => {
  try {
    const response = await apiGetAllPosts();

    if (response?.data.success) {
      dispatch({
        type: actionType.GET_POSTS,
        data: response?.data.posts,
        message: response?.data.message,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const getPostsLimit = (page: number) => async (dispatch: any) => {
  try {
    const response = await apiGetPostsLimit(page);
    if (response?.data.success) {
      dispatch({
        type: actionType.GET_POSTS_LIMIT,
        rows: response?.data.response.rows,
        count: response?.data.response.count,
        message: response?.data.message,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
