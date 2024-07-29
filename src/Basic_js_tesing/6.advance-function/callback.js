//normal callback function
export function sayMayName(callback, value) {
  let myName = value;
  callback(myName);
}

//asynchronous callback function
export function asyncSayMyName(callback, value) {
  let name = value;
  setTimeout(() => {
    callback(name);
  }, 1000);
}
