;(() => {
	// เริ่มเขียนโค้ด
	// 1. Lexical scope & Dynamic scope
	// function printName() {
	// 	console.log(this)
	// }
	// printName()

	// 2. How to know what is "this"?
	// function printName() {
	// 	console.log(this)
	// 	console.log(this.name)
	// }

	//// 2.1 Invoker object
	// const poom = { name: 'Poom', printName }
	// const foo = { name: 'Foo', printName }
	// poom.printName()
	// foo.printName()

	//// 2.2 Global object (window, global)
	// name = 'Global'
	// printName()

	//// 2.3 Constructor function
	// function Person(name) {
	// 	this.name = name
	// 	this.printName = printName
	// }
	// const poom = new Person('poom')
	// poom.printName()

	// 3. call(), apply(), and bind()
	function printName(nationality, city) {
		console.log(this)
		console.log(
			`My name is ${this.name}, I'm ${nationality} and am living in ${city}`
		)
	}

	function Person(name, nationality, city) {
		this.name = name
		this.nationality = nationality
		this.city = city

		printName(this.nationality, (this.city = city))
		printName.call(this, this.nationality, this.city)
		printName.apply(this, [this.nationality, this.city])

		const printPoom = printName.bind(this)
		printPoom(this.nationality, this.city)
	}

	const poom = new Person('poom', 'thai', 'bangkok')
})()
