;(() => {
	// เริ่มเขียนโค้ด
	// 1. Class vs Prototype
	class Person {}
	const poom = new Person()
	console.log(poom)

	// 2. What's prototype?
	const name = 'poom'
	console.log(name.__proto__)

	const arr = []
	console.log(arr.__proto__)

	// 3. Prototype chain
	const myName = 'Poom'
	console.log(myName.__proto__)
	console.log(name.toLocaleString())

	// 4. Extend a prototype
	const nickName = 'Poom'
	function sayHello(val) {
		console.log(`Hello ${val}`)
	}
	String.prototype.sayHello = sayHello
	console.log(nickName.__proto__)
	nickName.sayHello('World')
})()
