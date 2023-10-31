/* function arrayIntersection(arr1, arr2) {
  let newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr1.includes(arr2[i]) && !newArr.includes(arr1[1])) {
      newArr.push(arr2[i]);
    }
  }

  return newArr;
} */

function arrayIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const intersectionArr = [];

  for (let num of arr2) {
    if (set1.has(num)) {
      intersectionArr.push(num);
    }
  }

  return intersectionArr;
}

module.exports = arrayIntersection;
