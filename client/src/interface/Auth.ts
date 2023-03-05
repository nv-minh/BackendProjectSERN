import actionType from '../store/actions/actionType';

export interface IAuth {
  isLoggedIn: boolean;
  accessToken: string | null;
}

// const { LOGIN, REGISTER, LOGOUT } = actionType;
// export type IDispatch =
//   | {
//       type: typeof LOGIN;
//       data: any;
//     }
//   | {
//       type: typeof REGISTER;
//       data: any;
//     }
//   | {
//       type: typeof LOGOUT;
//       data: any;
//     };
