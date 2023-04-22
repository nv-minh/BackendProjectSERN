import actionType from '../actions/actionType';

const initState = {
  posts: [],
};

const postReducer = (state = initState, action: any) => {
  switch (action.type) {
    case actionType.GET_POSTS:
    case actionType.GET_POSTS_LIMIT:
      return {
        ...state,
        posts: action.rows || [],
        message: action.message || '',
        count: action.count || 0,
      };
    default:
      return state;
  }
};

export default postReducer;
