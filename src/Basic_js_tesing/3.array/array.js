//1. merge two array
export function mergeArray(a, b) {
  return [...a, b];
}

//2. return postive value form array
export let isPostiveArray = (a) => {
  let result = a.filter((item) => {
    return item > 0;
  });
  return result;
};
//3. sum of array
export let sumOfArray = (a) => {
  let result = a.reduce((acc, item) => {
    return acc + item;
  }, 0);
  return result;
};
