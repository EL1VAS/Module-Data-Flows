const verify = require("./verify.js");

describe("Verify password", () => {
  test("returns Password accepted if password has 8 or more characters", () => {
    expect(verify("bhrj5487")).toBe("Password accepted");
  });

  test("returns Password rejected if password has less than 8 characters", () => {
    expect(verify("nhdi845")).toBe("Password rejected");
  });

  test("returns Password rejected if password is null", () => {
    expect(verify(null)).toBe("Password rejected");
  });

  test("returns Password rejected if password doesn't include any capital letters", () => {
    expect(verify("bnfpmlde")).toBe("Password rejected");
  });

  test("returns Password accepted if password includes at least one capital letter", () => {
    expect(verify("Bnfpmlde")).toBe("Password accepted");
  });
});
