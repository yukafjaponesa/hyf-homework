function degrees (tempurature) {
  const tshirt = "Wear T-shirts"
  const sweater = "Wear sweater"
  if (tempurature > 18) {
    return tshirt
  } else {
    return sweater //after calling return, there will be nothing to continue
  }
};
const whatsTheWeatherLike = degrees(19); // a will be what comes after retun.
console.log(whatsTheWeatherLike);

console.log(degrees(15));
