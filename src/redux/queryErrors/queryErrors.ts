interface ErrorsProps {
  error_id: number;
  description: string;
  error_name: string;
}

export const errors: ErrorsProps[] = [
  {
    error_id: 400,
    description:
      "Something went wrong with your request. Please check it and try again.",
    error_name: "bad_parameter",
  },
  {
    error_id: 401,
    description: "You need to log in to do this. Please log in and try again.",
    error_name: "access_token_required",
  },
  {
    error_id: 402,
    description:
      "Your login seems to be invalid or has expired. Please log in again.",
    error_name: "invalid_access_token",
  },
  {
    error_id: 403,
    description:
      "You don't have permission to do this. If you think this is a mistake, please contact support.",
    error_name: "access_denied",
  },
  {
    error_id: 404,
    description:
      "We couldn't find what you were looking for. Please check the address and try again.",
    error_name: "no_method",
  },
  {
    error_id: 405,
    description:
      "There's some information missing from your request. Please check and try again.",
    error_name: "key_required",
  },
  {
    error_id: 406,
    description:
      "For security reasons, we need you to log in again. We're sorry for the inconvenience.",
    error_name: "access_token_compromised",
  },
  {
    error_id: 407,
    description: "We couldn't complete your request. Please try again.",
    error_name: "write_failed",
  },
  {
    error_id: 409,
    description:
      "It looks like you've already done this. Please check if it's already completed before trying again.",
    error_name: "duplicate_request",
  },
  {
    error_id: 500,
    description:
      "Oops! Something went wrong on our end. We're working to fix it, so please try again later.",
    error_name: "internal_error",
  },
  {
    error_id: 502,
    description:
      "We're a bit overloaded at the moment. Please wait a moment and try your request again.",
    error_name: "throttle_violation",
  },
  {
    error_id: 503,
    description:
      "We're temporarily offline for maintenance. Please check back soon.",
    error_name: "temporarily_unavailable",
  },
];
