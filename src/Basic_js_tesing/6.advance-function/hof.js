//map
export let mapFunction = function (arr) {
  let result = arr.map((item) => {
    return item * 2;
  });
  return result;
};
//filter
export let filterFunction = function (arr, callback) {
  let result = arr.filter(callback);
  return result;
};
//Testing Function Return Values
export let createMultipler = (multipler) => {
  return function (value) {
    return multipler * value;
  };
};

//Mocking function
export let repeter = (fn, times) => {
  for (let i = 1; i <= times; i++) {
    fn(i);
  }
};
