/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  if (s === 0) {
    return 0;
  }

  const romainArray = s.split('');
  let num = 0;
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const special = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  for (let i = 0; i < romainArray.length; i++) {
    const currentNum = romainArray[i];
    const nextNum = romainArray[i + 1];

    if (special[currentNum + nextNum]) {
      num += special[currentNum + nextNum];
      romainArray[i] = undefined;
      romainArray[i + 1] = undefined;
    } else {
      if (symbols[romainArray[i]]) {
        num += symbols[romainArray[i]];
      }
    }
  }
  return num;
};
