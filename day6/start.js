;(() => {
	function random(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	function createDucks() {
		return [...Array(5)].map(() => {
			return {
				x: random(0, window.innerWidth),
				y: window.innerWidth,
				speedX: random(-50, 50),
				speedY: random(5, 10)
			}
		})
	}

	function setupDuckElement(duck) {
		// สร้าง div
		const duckElement = document.createElement('div')
		// ระบุ class และ style
		duckElement.className = 'duck'
		duckElement.style.left = `${duck.x}px`
		duckElement.style.top = `${duck.y}px`
		duckElement.style.backgroundImage = 'url(./left-1.png)'
		// เพิ่ม duckElement ไปยัง body
		document.body.appendChild(duckElement)

		return { duck, duckElement }
	}

	function moveDuck(duckElement, duck) {
		const { left, top } = duckElement.getBoundingClientRect()
		duck.x = left + duck.speedX
		duck.y = top + duck.speedY
		duckElement.style.left = `${duck.x}px`
		duckElement.style.top = `${duck.y}px`
	}

	function run() {
		const ducks = createDucks()
		const duckElems = ducks.map(setupDuckElement)
		duckElems.forEach(({ duck, duckElement }) => {
			setInterval(() => {
				moveDuck(duckElement, duck)
			}, 100)
		})
	}
	run()
})()
