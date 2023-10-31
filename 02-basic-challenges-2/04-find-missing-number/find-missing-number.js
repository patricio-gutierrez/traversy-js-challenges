function findMissingNumber(arr) {
  if (arr === undefined) return undefined;
  if (arr.length === 0) return 1;

  let lengthSum = ((arr.length + 1) * (arr.length + 2)) / 2;
  let totalSum = 0;

  for (num of arr) {
    totalSum += num;
  }

  return lengthSum - totalSum;
}

module.exports = findMissingNumber;
