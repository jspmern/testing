import { fetchErrorHandler, fetchHandler } from "./asyncawait";

//By using normal async and await
describe("By using normal Async and Await", () => {
  it("For Resolve", async () => {
    let data = await fetchHandler();
    expect(data).toEqual({ name: "utsav", age: "24" });
  });

  it("For reject", async () => {
    try {
      let data = await fetchErrorHandler();
    } catch (e) {
      expect(e.message).toBe("error");
    }
  });
});

//By using resolves and rejects
describe("By using resolves and rejects", () => {
  //for resolve
  it("for Resolve case", async () => {
    await expect(fetchHandler()).resolves.toStrictEqual({
      name: "utsav",
      age: "24",
    });
  });

  //for reject
  it("for Reject Case", async () => {
    try {
      await expect(fetchErrorHandler()).resolves.toBe({
        name: "utsav",
        age: 25,
      });
    } catch (err) {
      await expect(fetchErrorHandler()).rejects.toThrow("error");
    }
  });
});
