import { createUser } from "./object";

//this time i am using it insted of test , it is nothing but it is a alias for test
//toStrictEqual or toEqual is a matcher function for match object
//for more details about the matcher function follow this link -   https://jestjs.io/docs/using-matchers
it("create user with name ,address,role and isActive", () => {
  expect(createUser("utsav", "delhi", "sde", true)).toStrictEqual({
    name: "utsav",
    add: "delhi",
    role: "sde",
    isActive: true,
  });
});
