const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	const s1Set = Array.from(new Set(s1));
	const s2Set = Array.from(new Set(s2));
	let count = 0;
	s1Set.map(item => {
		if (s2Set.includes(item)) {
			count += Math.min(s1.split(item).length - 1, s2.split(item).length - 1);
		}
	})
	return count;
}

module.exports = {
	getCommonCharacterCount
};
