const { findMean, findMode, findMedian } = require('./arithmetic');

describe('test findMedian', () => {
	test('finds the median of an even set', () => {
		expect(findMedian([ 1, -1, 4, 2 ])).toEqual(1.5);
	});
	test('finds the median of an odd set', () => {
		expect(findMedian([ 1, -1, 4 ])).toEqual(1);
	});
});

describe('test findMean', () => {
	test('finds the mean of an empty', () => {
		expect(findMean([])).toEqual(0);
	});
	test('finds the mean of an array of numbers', () => {
		expect(findMean([ 1, -1, 4, 2 ])).toEqual(1.5);
	});
});

describe('test findMode', () => {
	test('finds the mode', () => {
		expect(findMode([ 1, 1, 1, 2, 2, 3 ])).toEqual(1);
	});
});
