/* function isPalindrome(str) {
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let palindrome = "";

  for (let i = formattedStr.length - 1; i >= 0; i--) {
    palindrome += formattedStr[i];
  }

  if (palindrome === formattedStr) {
    return true;
  }

  return false;
} */

function isPalindrome(str) {
  const formattedStr = removeNonAlphaNumeric(str.toLowerCase());
  const reverseStr = reverseString(formattedStr);

  return formattedStr === reverseStr;
}

function removeNonAlphaNumeric(str) {
  let formattedStr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphaNumeric(char)) {
      formattedStr += char;
    }
  }

  return formattedStr;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
}

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

module.exports = isPalindrome;
