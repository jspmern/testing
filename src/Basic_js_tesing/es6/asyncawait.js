//this is for resolve
export let fetchHandler = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res({ name: "utsav", age: "24" });
    }, 1000);
  });
};
//this is for reject
export let fetchErrorHandler = () => {
  return new Promise((_, rej) => {
    setTimeout(() => {
      rej(new Error("error"));
    }, 1000);
  });
};
