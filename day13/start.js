;(() => {
	// 1. NaN
	if (NaN === NaN || NaN * 1 === NaN || NaN / NaN === 1) {
		console.log('Equal')
	}

	// make Nan
	const result = 1 / 'hello'
	if (result === NaN) {
		console.log('Equal to Nan')
	}
	if (Number.isNaN(result)) {
		console.log('Equal to Nan')
	}

	// 2. Type Coercion
	// 3. Interpreter & Compiler
	// 4. Checking Object Type
})()
