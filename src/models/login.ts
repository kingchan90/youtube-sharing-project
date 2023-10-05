// src/models/login.ts
import { createModel } from "@rematch/core";
import { RootModel } from "./index";

interface User {
  id: number;
  username: string;
}

interface LoginState {
  isLoggedIn: boolean;
  user: User | null;
  error: string | null;
}

const login = createModel<RootModel>()({
  state: {
    isLoggedIn: false,
    user: null,
    error: null,
  } as LoginState,
  reducers: {
    loginSuccess(state: LoginState, payload: User): LoginState {
      return {
        ...state,
        isLoggedIn: true,
        user: payload,
        error: null,
      };
    },
    loginFailure(state: LoginState, error: string): LoginState {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error,
      };
    },
    logout(state: LoginState): LoginState {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error: null,
      };
    },
  },
  effects: (dispatch) => ({
    async loginUser({ username, password }: { username: string; password: string }) {
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        if (response.status === 200) {
          const user = await response.json();
          dispatch.login.loginSuccess(user);
        } else {
          dispatch.login.loginFailure('Invalid credentials');
        }
      } catch (error) {
        dispatch.login.loginFailure('An error occurred');
      }
    },
    async logoutUser() {
      dispatch.login.logout();
    },
  }),
});

export default login;
