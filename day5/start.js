;(() => {
	const canvas = document.getElementById('painting')
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight

	const context = canvas.getContext('2d')
	let previousPoint = { x: 0, y: 0 }

	// คำนวณระยะทางตามหลักคณิตศาสตร์
	function getDistance(previousPoint, currentPoint) {
		return Math.sqrt(
			(previousPoint.x - currentPoint.x) ** 2 +
				(previousPoint.y - currentPoint.y) ** 2
		)
	}

	function onMounseMove({ pageX, pageY }) {
		// set ตำแหน่งที่ mouse อยู่ ณ ปัจจุบัน
		const currentPoint = { x: pageX, y: pageY }

		// บอก canvas ว่าเริ่มวาด
		context.beginPath()
		// ให้เส้นจบเป็นวงกลม
		context.lineCap = 'round'
		// ให้เส้นตัดเป็นวงกลม
		context.lineJoin = 'round'

		// คำนวณระยะทาง
		const distance = getDistance(previousPoint, currentPoint)
		// คำนวณเพื่อกำหนด opacity และต้องไม่เกิน 0.5
		const opacity = Math.min(0.5, 1 / distance)

		// กำหนดความกว้างของเส้น
		context.lineWidth = (Math.random() / distance) * 40

		// กำหนดสีของเส้น
		context.strokeStyle = `rgb(222, 10, 109, ${opacity})`

		// กำหนดจุดเริ่มวาดจากจุดพิกัดก่อนไปถึงพิจัดปัจจุบัน
		context.moveTo(previousPoint.x, previousPoint.y)
		context.lineTo(currentPoint.x, currentPoint.y)

		// สั่งให้เริ่มวาดเส้นและจบการวาด
		context.stroke()
		context.closePath()

		previousPoint = currentPoint
	}

	function onMounseEnter({ pageX, pageY }) {
		previousPoint.x = pageX
		previousPoint.y = pageY
	}

	function run() {
		canvas.addEventListener('mousemove', onMounseMove)
		canvas.addEventListener('mouseenter', onMounseEnter)
	}
	run()
})()
