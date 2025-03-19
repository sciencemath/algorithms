/**
 * A Stack made perfect sense here, I over thought it at first
 * First in Last out so that all the '(' '[' '{' match up.
 *
 * I needed to think about my approach entirley differently to understand the need of a stack data structure:
 */
const mapper = {
  '(': ')',
  '[': ']',
  '{': '}',
};
/**
 *
 *
 *
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length < 2 || s.length % 2 !== 0) return false;
  const lastCharacter = s[s.length - 1];
  if (lastCharacter === '[' || lastCharacter === '{' || lastCharacter === '(')
    return false;

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '{') {
      stack.push('}');
    } else if (s[i] === '[') {
      stack.push(']');
    } else if (s[i] === '(') {
      stack.push(')');
    } else if (stack.pop() !== s[i]) {
      return false;
    }
  }

  return !stack.length;
};

// isValid("[({])}")
// isValid("(){}}{")
// isValid("(}{)")
// isValid("())")

// isValid("[({(())}[()])]")
// isValid("(([]){})")
// isValid("[({])}")
// isValid("(}{)")
// isValid("()[]{}")
//
// isValid("][")
// isValid("[(){[]}]")
// isValid("[({])}")
