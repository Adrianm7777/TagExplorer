import { errors } from "../redux/queryErrors/queryErrors";

export const findErrorByStatusCode = (statusCode?: number) =>
  errors?.find((error) => error?.error_id === statusCode);
