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
	function simulateAsyncAPI(text, timeout, callback) {
		setTimeout(() => {
			console.log(text)
			callback()
		}, timeout)
	}
	simulateAsyncAPI('a', 1000, () => {
		simulateAsyncAPI('b', 500, () => {
			simulateAsyncAPI('c', 100, () => {})
		})
	})
	// 3. Promise
	// 4. Async/Await
})()
