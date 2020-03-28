;(() => {
	// เริ่มเขียนโค้ด
	// 1. How Asynchronous code works in JavaScript
	// function simulateAsyncAPI(text, timeout) {
	// 	setTimeout(() => {
	// 		console.log(text)
	// 	}, timeout)
	// }
	// simulateAsyncAPI('a', 1000)
	// simulateAsyncAPI('b', 500)
	// simulateAsyncAPI('c', 100)

	// 2. Callback
	// function simulateAsyncAPI(text, timeout, callback) {
	// 	setTimeout(() => {
	// 		console.log(text)
	// 		callback()
	// 	}, timeout)
	// }
	// simulateAsyncAPI('a', 1000, () => {
	// 	simulateAsyncAPI('b', 500, () => {
	// 		simulateAsyncAPI('c', 100, () => {})
	// 	})
	// })

	// 3. Promise
	// function simulateAsyncAPI(text, timeout) {
	// 	return new Promise((resolve, reject) => {
	// 		setTimeout(() => {
	// 			if (text === 'b') {
	// 				return reject('b got rejected')
	// 			}
	// 			console.log(text)
	// 			resolve()
	// 		}, timeout)
	// 	})
	// }
	// simulateAsyncAPI('a', 1000)
	// 	.then(() => {
	// 		return simulateAsyncAPI('b', 500)
	// 	})
	// 	.then(() => {
	// 		return simulateAsyncAPI('c', 100)
	// 	})
	// 	.catch(error => {
	// 		console.log(error)
	//     })

	// 4. Async/Await
	function simulateAsyncAPI(text, timeout) {
		setTimeout(() => {
			console.log(text)
		}, timeout)
	}

	async function run() {
		try {
			await simulateAsyncAPI('a', 1000)
			await simulateAsyncAPI('b', 500)
			await simulateAsyncAPI('c', 100)
		} catch (error) {
			console.error(error)
		}
	}
	run()
})()
