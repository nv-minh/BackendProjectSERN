import actionType from '../actions/actionType';
import { PostsAction, RootStatePosts } from '../interface';

const initState: RootStatePosts = {
  posts: [],
  message: '',
  count: 0,
};

const postReducer = (state = initState, action: PostsAction) => {
  switch (action.type) {
    case actionType.GET_POSTS:
    case actionType.GET_POSTS_LIMIT:
      return {
        ...state,
        type: actionType.GET_POSTS_LIMIT,
        posts: action.posts || [],
        message: action.message || '',
        count: action.count || 0,
        queryFilter: action.queryFilter || {},
      };
    default:
      return state;
  }
};

export default postReducer;
