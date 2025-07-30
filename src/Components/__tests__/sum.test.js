import { sum } from "../sum";

test("sum function needs to add two numbers", () => {
  const result = sum(2, 4);

  //Assertion
  expect(result).toBe(6);
});
