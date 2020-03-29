;(() => {
	const canvas = document.getElementById('painting')
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight

	const context = canvas.getContext('2d')
	let previousPoint = { x: 0, y: 0 }

	function onMounseMove({ pageX, pageY }) {
		// set ตำแหน่งที่ mouse อยู่ ณ ปัจจุบัน
		const currentPoint = { x: pageX, y: pageY }

		// บอก canvas ว่าเริ่มวาด
		context.beginPath()
		// ให้เส้นจบเป็นวงกลม
		context.lineCap = 'round'
		// ให้เส้นตัดเป็นวงกลม
		context.lineJoin = 'round'
		// กำหนดความกว้างของเส้น
		context.lineWidth = 40
		// กำหนดสีของเส้น
		context.strokeStyle = `rgb(222, 10, 109, 0.8)`

		// กำหนดจุดเริ่มวาดจากจุดพิกัดก่อนไปถึงพิจัดปัจจุบัน
		context.moveTo(previousPoint.x, previousPoint.y)
		context.lineTo(currentPoint.x, currentPoint.y)

		// สั่งให้เริ่มวาดเส้นและจบการวาด
		context.stroke()
		context.closePath()
	}

	function run() {
		canvas.addEventListener('mousemove', onMounseMove)
	}
	run()
})()
