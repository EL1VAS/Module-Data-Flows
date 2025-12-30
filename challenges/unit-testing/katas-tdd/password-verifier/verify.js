function verify(password) {
  if (password === null || password.length < 8) {
    return "Password rejected";
  }
  return "Password accepted";
}

module.exports = verify;
