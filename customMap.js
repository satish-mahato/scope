function customMap(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
}

const arr = [1, 2, 3, 4, 5];
const arrMap = customMap(arr, function (element) {
  return element * 2;
});
console.log(arrMap);
