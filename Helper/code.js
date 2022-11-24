class Helper {
  static isEven(n) {
    if (n % 2 === 0) return true;
    else return false;
  }
  static isPositive(n) {
    if (n > 0) return true;
    else if (n < 1) return false;
  }
  static isNegative(n) {
    if (n < 0) return true;
    else if (n > 1) return false;
  }
}

Helper.isEven(2);
Helper.isPositive(2);
Helper.isNegative(2);
console.log(Helper.isEven(2));
console.log(Helper.isPositive(2));
console.log(Helper.isNegative(2));

module.exports = Helper;
