import mockdata from "./mockdata.json";
import { fetchData } from "./fetch";
// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => {
//       return Promise.resolve(mockdata);
//     },
//   });
// });

// test("testing for the fetch", async () => {
//   let data = await fetchData();
//   let result = await data.json();
//   expect(result).toEqual(mockdata);
// });
//with  mockresolvevalueonce and makeresolvereject once
describe("fetchData", () => {
  global.fetch = jest.fn();

  //**********else you can define like that also*********
  // beforeEach(() => {
  //   global.fetch = jest.fn();
  // });

  // afterEach(() => {
  //   jest.resetAllMocks();
  // });

  test("should fetch data successfully", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockdata,
    });

    const data = await fetchData();
    expect(data).toEqual(mockdata);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );
  });

  test("should throw an error when the response is not ok", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
    });

    await expect(fetchData()).rejects.toThrow("Network response was not ok");
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );
  });

  test("should throw an error when fetch fails", async () => {
    global.fetch.mockRejectedValueOnce(new Error("Fetch failed"));
    await expect(fetchData()).rejects.toThrow("Fetch failed");
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );
  });
});
