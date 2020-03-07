function degrees (tempurature) {
  let a = "Wear T-shirts"
  let b = "Wear sweater"
  if (tempurature > 18) {
    return a
  } else {
    return b
  }
};
let a = degrees(19); // a will be what comes after retun.
console.log(a);
