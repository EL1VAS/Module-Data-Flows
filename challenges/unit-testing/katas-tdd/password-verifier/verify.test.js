const verify = require("./verify.js");

describe("Verify password", () => {
  test("returns password accepted if password has 8 or more characters", () => {
    expect(verify("bhrj5487")).toBe("password accepted");
  });

  test("returns password rejected if password has less than 8 characters", () => {
    expect(verify("nhdi845")).toBe("password rejected");
  });
});
