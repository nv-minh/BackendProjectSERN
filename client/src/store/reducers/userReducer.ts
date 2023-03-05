import { IUser } from '../../interface/User';

const initState: IUser = {
  userName: '',
  phone: '',
  password: '',
};

const userReducer = (state: IUser = initState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
