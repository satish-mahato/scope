const arr = [1, 2, 3, 4, 5];
arr.map(function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
});
