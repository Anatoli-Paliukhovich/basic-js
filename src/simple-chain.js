const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
	result: [],
	getLength() {
		this.result.length;
		return this;
	},
	addLink(value = '') {
		this.result.push(`( ${value} )`);
		return this;
	},
	removeLink(position) {
		if (position > this.result.length || position <= 0 || typeof position != 'number') {
			this.result.length = 0;
			throw new Error("You can't remove incorrect link!");
		} else {
			this.result.splice(position - 1, 1);
			return this;
		}
	},
	reverseChain() {
		this.result.reverse();
		return this;
	},
	finishChain() {
		const joinResult = this.result.join('~~');
		this.result.length = 0;
		return joinResult;
	}
};

module.exports = {
	chainMaker
};
