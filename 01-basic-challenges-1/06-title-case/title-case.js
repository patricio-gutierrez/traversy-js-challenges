function titleCase(str) {
  const lowerStr = str.toLowerCase().split(" ");

  for (let i = 0; i < lowerStr.length; i++) {
    lowerStr[i] = lowerStr[i][0].toUpperCase() + lowerStr[i].slice(1);
  }

  return lowerStr.join(" ");
}

module.exports = titleCase;
