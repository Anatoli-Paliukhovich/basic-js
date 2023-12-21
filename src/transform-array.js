const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
	if (!Array.isArray(arr)) {
		throw new Error("\'arr\' parameter must be an instance of the Array!");
	}
	let result = [];
	let arrClone = JSON.parse(JSON.stringify(arr));
	if (arrClone[0] === '--discard-prev' || arrClone[0] === '--double-prev') {
		arrClone.splice(0, 1);
	} else if (arrClone[arrClone.length - 1] === '--double-next' || arrClone[arrClone.length - 1] === '--discard-next') {
		arrClone.splice(-1, 1);
	} 
	for (let i = 0; i < arrClone.length; i += 1) {
		if (arrClone[i] === '--double-next') {
			result.push(arrClone[i + 1])
		} else if (arrClone[i] === '--discard-next') {
			i += 1;
		} else if (arrClone[i] === '--double-prev') {
			result.push(result[result.length - 1])
		} else if (arrClone[i] === '--discard-prev') {
			result.pop();
		} else {
			result.push(arrClone[i]);
		}
	}
	return result;
}

module.exports = {
	transform
};
