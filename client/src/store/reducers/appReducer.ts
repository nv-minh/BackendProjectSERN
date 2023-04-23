import actionType from '../actions/actionType';
import { CategoriesAction, RootStateCategories } from '../interface';

const initState: RootStateCategories = {
  message: '',
  categories: [],
};

const appReducer = (state = initState, action: CategoriesAction) => {
  switch (action.type) {
    case actionType.GET_CATEGORIES:
      return {
        ...state,
        message: action.message || '',
        categories: action.categories || [],
      };
    default:
      return state;
  }
};

export default appReducer;
