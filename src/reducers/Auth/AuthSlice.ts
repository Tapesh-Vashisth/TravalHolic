import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  AuthSliceState,
  OutgoingLoginData,
  OutgoingNewUserData,
} from "../../types/AuthTypes";
import { ApiLoadingState } from "../../types/apiTypes";
import axios, { AxiosError } from "axios";
import { backendUrl } from "../../middleware/api";

const initialAuthState: AuthSliceState = {
  isLoading: ApiLoadingState.idle,
  error: null,
};

const postSignupThunk = createAsyncThunk(
  "auth/postSignupThunk",
  async (finalData: OutgoingNewUserData, thunkApi) => {
    try {
      await axios.post(`${backendUrl}/auth/signup`, finalData, {
        withCredentials: true,
      });
    } catch (error) {
      const err = error as AxiosError;
      return thunkApi.rejectWithValue(err.response?.data);
    }
  }
);

const postSignInThunk = createAsyncThunk(
  "auth/postSignInThunk",
  async (finalData: OutgoingLoginData, thunkApi) => {
    try {
      const response = await axios.post(
        `${backendUrl}/auth/signin`,
        finalData,
        { withCredentials: true }
      );
      const data = await response.data;
      return data;
    } catch (error) {
      const err = error as AxiosError;
      return thunkApi.rejectWithValue(err.response?.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(postSignupThunk.pending, postSignInThunk.pending),
      (state) => {
        state.isLoading = ApiLoadingState.loading;
      }
    );
    builder.addMatcher(
      isAnyOf(postSignupThunk.fulfilled, postSignInThunk.fulfilled),
      (state) => {
        state.isLoading = ApiLoadingState.succeeded;
      }
    );
    builder.addMatcher(
      isAnyOf(postSignupThunk.rejected, postSignInThunk.rejected),
      (state) => {
        state.isLoading = ApiLoadingState.failed;
      }
    );
  },
});

const authThunks = {
  postSignupThunk,
  postSignInThunk,
};

export const authServices = {
  ...authThunks,
  actions: authSlice.actions,
};

const authReducer = authSlice.reducer;
export default authReducer;
