;(() => {
	function run() {
		const bodyElement = document.querySelector('body')
		const eyeElements = document.querySelectorAll('.eye')

		function onMouseMove({ pageX, pageY }) {
			eyeElements.forEach(eyeElem => {
				// หาตำแหน่งของดวงตา
				const { left, top } = eyeElem.getBoundingClientRect()

				// คำนวณศูนย์กลางของดวงตา
				// ตำแหน่งซ้ายบนของดวงตา + ครึ่งหนึ่งของความ กว้างและความสูง ดวงตา ของทั้งแกน X, Y
				const eyeCenterX = left + eyeElem.offsetWidth / 2
				const eyeCenterY = top + eyeElem.offsetHeight / 2

				// คำนวณ radian
				// ตำแหน่งของ mouse - ตำแหน่งของกึ่งกลางของดวงตา จะได้ความต่างของ mouse กับ ดวงตา ว่าต่างกันกี่ radian
				const radian = Math.atan2(
					pageX - eyeCenterX,
					pageY - eyeCenterY
				)

				// คำนวณองศาตามหลักคณิตศาสตร์ โดยที่ระบุว่าดวงตาอยู่ตำแหน่งล่างสุด
				const angle = ((radian * 180) / Math.PI) * -1

				// update style
				eyeElem.style.transform = `rotate(${angle}deg)`
			})
		}

		bodyElement.addEventListener('mousemove', onMouseMove)
	}
	run()
})()
