import actionType from './actions/actionType';

export interface RootStateAuth {
  isLoggedIn: boolean;
  accessToken?: string | null;
  message?: string;
}

export interface IUserAction {
  userName: string;
  password: string;
  zalo?: string;
}

export interface RootStatePosts {
  posts: [];
  message: string;
  count: number;
}

export interface RootStateCategories {
  message: string;
  categories: {}[];
}

export interface AuthAction extends RootStateAuth {
  type:
    | typeof actionType.REGISTER_SUCCESS
    | typeof actionType.LOGIN_FAIL
    | typeof actionType.LOGIN_SUCCESS
    | typeof actionType.REGISTER_FAIL
    | typeof actionType.LOGOUT
    | string;
}

export interface PostsAction extends RootStatePosts {
  type: typeof actionType.GET_POSTS | typeof actionType.GET_POSTS_LIMIT | string;
}

export interface CategoriesAction extends RootStateCategories {
  type: typeof actionType.GET_CATEGORIES | string;
}
