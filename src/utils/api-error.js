class ApiError extends Error {
  constructor(
    statusocde,
    message = "Something went wrong",
    errors = [],
    stack = "",
  ) {
    super(message);
    this.statusocde = statusocde;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
