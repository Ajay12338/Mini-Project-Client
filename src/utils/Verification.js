const verify = (...rest) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    rest[0]
  );
  const isPasswordValid =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,}$/.test(
      rest[1]
    );
  return isEmailValid && isPasswordValid;
};
export default verify;
