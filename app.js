const express = require('express');
const ExpressError = require('./expressError');
const { convertAndValidateNumsArray, findMode, findMedian, findMean } = require('./arithmetic');
const app = express();

app.get('/mean', (req, res, next) => {
	if (!req.query.nums) {
		throw new ExpressError('You must include a query key of nums with a comma-seperated list', 400);
	}
	let numsAsStrings = req.query.nums.split(',');
	let nums = convertAndValidateNumsArray(numsAsStrings);
	if (nums instanceof Error) {
		throw new ExpressError(nums.message);
	}

	let result = {
		operation : 'mean',
		result    : findMean(nums),
	};

	return res.send(result);
});

app.get('/median', (req, res, next) => {
	if (!req.query.nums) {
		throw new ExpressError('You must include a query key of nums with a comma-seperated list', 400);
	}
	let numsAsStrings = req.query.nums.split(',');
	let nums = convertAndValidateNumsArray(numsAsStrings);
	if (nums instanceof Error) {
		throw new ExpressError(nums.message);
	}

	let result = {
		operation : 'median',
		result    : findMedian(nums),
	};
	return res.send(result);
});

app.get('/mode', (req, res, next) => {
	if (!req.query.nums) {
		throw new ExpressError('You must include a query key of nums with a comma-seperated list', 400);
	}
	let numsAsStrings = req.query.nums.split(',');
	let nums = convertAndValidateNumsArray(numsAsStrings);
	if (nums instanceof Error) {
		throw new ExpressError(nums.message);
	}

	let result = {
		operation : 'mode',
		result    : findMode(nums),
	};
	return res.send(result);
});

app.use(function(req, res, next) {
	const err = new ExpressError('Not Found', 404);

	// pass the error to the next piece of middleware
	return next(err);
});

app.use(function(err, req, res, next) {
	res.status(err.status || 500);

	return res.json({
		error   : err,
		message : err.message,
	});
});

app.listen(3000, () => {
	console.log('App on port 3000');
});
