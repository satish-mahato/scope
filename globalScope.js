let x = 10;
function fun() {
  console.log(x);
}
function gun() {
  for (let i = 0; i < x; i++) {}
  fun();
  gun();
  console.log("the value of X is:", x);
}
