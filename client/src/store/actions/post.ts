import { apiGetAllPosts, apiGetPostsLimit } from '../../services/post';
import actionType from './actionType';
import { PostsAction } from '../interface';
import { Dispatch } from 'redux';

export const getPosts = () => async (dispatch: Dispatch<PostsAction>) => {
  try {
    const response = await apiGetAllPosts();

    if (response?.data.success) {
      dispatch({
        type: actionType.GET_POSTS,
        posts: response?.data.posts,
        message: response?.data.message,
        count: response?.data.count,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const getPostsLimit =
  (page: number) => async (dispatch: Dispatch<PostsAction>) => {
    try {
      const response = await apiGetPostsLimit(page);
      if (response?.data.success) {
        dispatch({
          type: actionType.GET_POSTS_LIMIT,
          posts: response?.data.response.rows,
          count: response?.data.response.count,
          message: response?.data.message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
