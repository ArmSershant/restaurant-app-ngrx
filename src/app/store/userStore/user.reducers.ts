import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/auth/models/user.model';
import { UserState } from '../userState';
import { getUser } from './user.actions';
export const initialState: UserState = {
  user: {} as User,
};

export const UserReducer = createReducer(
  initialState,
  on(getUser, (state, { user }) => {
    return { ...state, user: user };
  })
);
