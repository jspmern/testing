import { createUser, deepEqulity } from "./object";

//this time i am using it insted of test , it is nothing but it is a alias for test
//toStrictEqual or toEqual is a matcher function for match object and array
//for more details about the matcher function follow this link -   https://jestjs.io/docs/using-matchers
it("create user with name ,address,role and isActive", () => {
  expect(createUser("utsav", "delhi", "sde", true)).toStrictEqual({
    name: "utsav",
    add: "delhi",
    role: "sde",
    isActive: true,
  });
});

it("compares two identical objects", () => {
  let obj1 = { name: "utsav", add: { ca: "blr", pa: "delhi" } };
  let obj2 = { name: "utsav", add: { ca: "blr", pa: "delhi" } };

  expect(deepEqulity(obj1, obj2)).toBe(true);
});

it("compares two diffrent objects", () => {
  let obj1 = { name: "utsav", add: { ca: "blr", pa: "delhi" } };
  let obj2 = { name: "aman", add: { ca: "blr", pa: "delhi" } };

  expect(deepEqulity(obj1, obj2)).toBe(false);
});
