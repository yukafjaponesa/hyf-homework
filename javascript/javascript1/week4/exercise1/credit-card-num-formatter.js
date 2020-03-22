function formatCreditCardNumber () {
  const str = "(1234567891234567)";
  const newStr = "(" + str.match(/(\d{4})/g).join(" ") + ")"; //(1234 5678 9123 4567)
  console.log(newStr);
};

const formattedCreditCardObject = formatCreditCardNumber(123456789);
console.log(formattedCreditCardObject);
