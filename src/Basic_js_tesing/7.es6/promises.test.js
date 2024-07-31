import {
  fetchDataWithError,
  promiseHandler,
  promiseHandlerByResolvesMatcher,
} from "./promises";

//By using then and catch
test("promiseHandler testing", (done) => {
  promiseHandler("utsav")
    .then((item) => {
      expect(item).toBe("utsav");
      done();
    })
    .catch((err) => {
      expect(err).toBe("Somthing wrong");
      done();
    });
});
//by using resolves Matcher (this is provided by jest libaray)
//note point is - you have to return expect and for more details follow document
test("PromiseHandling testing by resolve Matchers", () => {
  return expect(promiseHandlerByResolvesMatcher()).resolves.toBe(
    "peanut butter"
  );
});

// using .rejects matcher
//for more details follow document
test("the fetch fails with an error", () => {
  return expect(fetchDataWithError()).rejects.toThrow("error");
});
