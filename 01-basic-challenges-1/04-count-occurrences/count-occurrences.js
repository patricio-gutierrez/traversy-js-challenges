/* function countOccurrences(str, char) {
  let total = 0;
  let lowerStr = str.toLowerCase();
  for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] === char) {
      total++;
    }
  }
  return total;
} */

function countOccurrences(str, char) {
  let total = 0;
  for (let charact of str.toLowerCase()) {
    if (charact === char) {
      total++;
    }
  }
  return total;
}

module.exports = countOccurrences;
