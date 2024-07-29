import { asyncSayMyName, sayMayName } from "./callback";
//this is basic callback with function mocking
test("syncFunction calls the callback with correct data", () => {
  let receviedData = null;
  function callbackFunction(data) {
    receviedData = data;
  }
  sayMayName(callbackFunction, "how are you");
  expect(receviedData).toBe("how are you");
});

//same example we are using function mocking concept
//for mocking the data follow document Note.txt
test("syncFunction calls the callback with mocking data", () => {
  let mockFunction = jest.fn();
  sayMayName(mockFunction, "hello");
  expect(mockFunction).toHaveBeenCalled();
  expect(mockFunction).toHaveBeenCalledTimes(1);
  expect(mockFunction).toHaveBeenCalledWith("hello");
});

//this is for asynchronous callback testing

test("Asynchronous function testing", (done) => {
  let mockFunction = jest.fn();
  asyncSayMyName(mockFunction, "utsav");
  setTimeout(() => {
    expect(mockFunction).toHaveBeenCalled();
    expect(mockFunction).toHaveBeenCalledWith("utsav");
    expect(mockFunction).toHaveBeenCalledTimes(1);
    done();
  }, 2000);
});

//here two very important point :-The done callback allows you to tell Jest to wait until the asynchronous code completes before considering the test finished and secound important point is you have to bigger timer in testing as comparison to callback function
