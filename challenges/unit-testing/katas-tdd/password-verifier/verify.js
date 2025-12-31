function verify(password) {
  if (
    password === null ||
    password.length < 8 ||
    password === password.toLowerCase() ||
    !/[0-9]/.test(password)
  ) {
    return "Password rejected";
  }
  return "Password accepted";
}

module.exports = verify;
