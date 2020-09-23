import * as validations from "../validations";

test("test the expected output for name", () => {
  expect(validations.name("")).toBe(false);
  expect(validations.name("   ")).toBe(false);
  expect(validations.name("Harry Potter")).toBe(true);
});
