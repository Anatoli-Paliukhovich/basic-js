const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
 let result = '';
 let num = 1;
 for (let i = 0; i < str.length; i += 1) {
	if (str[i] === str[i + 1]) {
		num += 1;
	} else if (num > 1) {
		result += num + str[i];
		num = 1;
	} else {
		result += str[i];
	}
 }
 return result;
}

module.exports = {
  encodeLine
};
