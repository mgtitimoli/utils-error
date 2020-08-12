/**
 * Try to call the function returning the result on succeed or the error otherwise
 *
 * @param fn
 */
const returnErrorIfAny = <TResult>(fn: () => TResult): Error | TResult => {
  let error;
  let result;

  try {
    result = fn();
  } catch (e) {
    error = e;
  }

  return error || result;
};

export default returnErrorIfAny;
