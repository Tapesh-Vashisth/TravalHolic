import { Action, ThunkDispatch, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authReducer from "./reducers/Auth/AuthSlice";

const reducerList = {
  auth: authReducer,
};

const store = configureStore({
  reducer: reducerList,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, void, Action>;
export const useAppDispatch = useDispatch<AppDispatch>;
export default store;
