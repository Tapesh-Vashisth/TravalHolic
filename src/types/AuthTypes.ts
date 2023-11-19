import { ApiLoadingState, ValidationError } from "./apiTypes";

export interface OutgoingLoginData {
  emailId: string;
  password: string;
}

export interface OutgoingNewUserData extends OutgoingLoginData {
  fullName: string;
  mobileNumber: string;
}

export interface AuthSliceState {
  isLoading: ApiLoadingState;
  error: ValidationError;
}
