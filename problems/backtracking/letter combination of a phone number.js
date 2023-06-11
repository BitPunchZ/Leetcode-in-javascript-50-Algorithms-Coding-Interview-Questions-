var letterCombinations = function(digits) {
    let result = [];
    if (digits.length === 0) return result;
  
    let m = {
      "2": "abc",
      "3": "def",
      "4": "ghi",
      "5": "jkl",
      "6": "mno",
      "7": "pqrs",
      "8": "tuv",
      "9": "wxyz"
    };
    backtrack(result, digits, m, 0, "");
    return result;
  };
  
  function backtrack(result, digits, m, index, combination) {
    if (index > digits.length) {
      return;
    }
    if (combination.length === digits.length) {
      result.push(combination);
      return;
    }
    let currentDigit = digits[index];
    let curString = m[currentDigit];
  
    for (let i = 0; i < curString.length; ++i) {
      backtrack(result, digits, m, index + 1, combination + curString[i]);
    }
  }