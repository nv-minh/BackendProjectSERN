import { apiGetCategories } from '../../services/category';
import actionType from './actionType';
import { Dispatch } from 'redux';
import { CategoriesAction, RootStateCategories } from '../interface';

export const getCategories = () => async (dispatch: Dispatch<CategoriesAction>) => {
  try {
    const response = await apiGetCategories();
    if (response?.data.success) {
      dispatch({
        type: actionType.GET_CATEGORIES,
        categories: response?.data.categories,
        message: response?.data.message,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
