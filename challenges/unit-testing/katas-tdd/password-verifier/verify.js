function verify(password) {
  if (password.length < 8) {
    return "password rejected";
  }
  return "password accepted";
}

module.exports = verify;
