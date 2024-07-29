//for doing any sort of testing, you have to create file with .test.js or .test.ts extensiton
//i.e sum.test.js or sum.test.ts

import { sum, add } from "./sum";

//this test method is by default provided by jest libraray and there is no need to import by jest and for the test you can use it also
//syntax
//test ("descripiton about test",callback,timier(in-millisecound))
//or
//it("descripiton about test",callback,timier(in-millisecound)) and third argument is optional
//expect is also one method that provided by jest ,in here what you expect that you have to take
//toBe() is also one method that expact value menas what is the ouptuput for test case
test("sum of postiive no", () => {
  expect(sum(10, 20)).toBe(30);
});
//next step is you have to execute for that one  = npm run test
test("sum of  negative no", () => {
  expect(sum(-10, -20)).toBe(-30);
});

// test("thorow an error if input is not number", () => {
//   expect(add("2", 3)).toThrow("Inputs must be numbers");
//   expect(add(2, "3")).toThrow("Inputs must be numbers");
// });
