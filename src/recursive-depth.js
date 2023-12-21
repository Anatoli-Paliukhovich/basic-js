const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
	constructor(arr) {
		this.arr = arr;
	}
	calculateDepth(arr) {
		let result = 1;
		for (let subArr of arr) {
			if (!Array.isArray(arr)) {
				return 0;
			} else if (Array.isArray(subArr)) {
				let subArrResult = this.calculateDepth(subArr) + 1;
				result = Math.max(result, subArrResult);
			}
		}
		return result;
	}
}

module.exports = {
	DepthCalculator
};
