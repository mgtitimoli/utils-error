class CustomError extends Error {
  // See:
  // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#support-for-newtarget
  constructor(message?: string) {
    // Error breaks prototype chain here
    super(message);

    // Restore prototype chain
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export default CustomError;
