function degrees (tempurature) {
  let a = "Wear T-shirts"
  let b = "Wear sweater"
  if (tempurature > 18) {
    return a
  } else {
    return b //after calling return, there will be nothing to continue
  }
};
let a = degrees(19); // a will be what comes after retun.
console.log(a);
