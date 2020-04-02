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
	if (1 < 2 < 3) {
		console.log('Inside <')
	}

	// ( 3 > 2 ) = true
	// then true != 1
	if (3 > 2 > 1) {
		console.log('Inside >')
	}

	// string type to number type
	console.log(2 - '1')
	console.log(2 + '1')
	console.log(true + true)

	// 3. Interpreter & Compiler
	function getPerson() {
		// auto ; for return
		return
		{
			name: 'POOM'
		}
	}
	console.log(getPerson())

	// 4. Checking Object Type
	const person = {}
	// null is object
	if (typeof person === 'object' && person !== null) {
		console.log('Yes, object')
	}
})()
