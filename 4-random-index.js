const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
const fun = (arg) => {
  for (let i = 1; i <= 4; i++) {
    let x = Math.floor(Math.random() * arg.length);
    console.log(arg[x]);
    arg.splice(x, 1);
  }
};
fun(arr);
