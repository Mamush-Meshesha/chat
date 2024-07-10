import { createSlice } from "@reduxjs/toolkit";

interface User {
  name: string;
  email: string;
  password: string;
}

interface auUser {
  email: string;
  password: string;
}
export interface AuthStateProps {
  user: User[];
  auUser: auUser[];
  error: string;
  isLoading: boolean;
}

const initialState: AuthStateProps = {
  user: [],
  auUser: [],
  error: "",
  isLoading: false,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUserRequest: (state) => {
      state.isLoading = true;
    },
    registerUserSuccesss: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    registerUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    loginUserRequest: (state) => {
      state.isLoading = true;
    },
    loginUserSuccess: (state, action) => {
      state.isLoading = false;
      state.auUser = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    loginUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logoutUserRequest: (state) => {
      state.isLoading = true
    },
    logoutUseSuccess: (state) => {
      state.auUser = []
      state.isLoading = false
      localStorage.removeItem("userInfo");

    },
    logoutUserFailure: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    }
  },
});

export const {
  registerUserFailure,
  registerUserRequest,
  registerUserSuccesss,
  loginUserFailure,
  loginUserRequest,
  loginUserSuccess,
  logoutUseSuccess,
  logoutUserRequest,
logoutUserFailure
} = AuthSlice.actions;
export default AuthSlice.reducer;
