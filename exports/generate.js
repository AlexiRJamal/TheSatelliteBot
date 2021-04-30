exports.getPrimes = limit => {
  let arr = [];
  for (let i = 3; i < limit; i += 2) {
    if (checkPrime(i)) arr.push(i);
  }

  return arr;
};

exports.fib = limit => {
  let a = 0,
    b = 1,
    result;
  result = b;
  let arr = [];

  for (let i = 1; i <= limit; i++) {
    arr.push(result);
    result = a + b;
    a = b;
    b = result;
  }

  return arr;
};

function checkPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
