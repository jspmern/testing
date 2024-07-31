export let promiseHandler = (data) => {
  return new Promise((res, rej) => {
    if (data == "utsav") {
      res("utsav");
    } else {
      rej("Somthing wrong");
    }
  });
};

export let promiseHandlerByResolvesMatcher = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("peanut butter");
    }, 100);
  });
};

export const fetchDataWithError = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("error"));
    }, 100);
  });
};
