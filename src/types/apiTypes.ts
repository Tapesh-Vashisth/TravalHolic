export enum ApiLoadingState {
  idle = "idle",
  loading = "loading",
  succeeded = "succeeded",
  failed = "failed",
}

export type ValidationError = string | number | null;
