;(() => {
	window.SpeechRecognition =
		window.SpeechRecognition || window.webkitSpeechRecognition

	const recognition = new window.SpeechRecognition()
	const btnElem = document.querySelector('.control')

	function onClick() {
		const isPausing = btnElem.classList.contains('record')

		if (isPausing) {
			recognition.start()
			btnElem.classList.remove('record')
			btnElem.classList.add('pause')
		} else {
			recognition.stop()
			btnElem.classList.remove('pause')
			btnElem.classList.add('record')
		}
	}

	function run() {
		recognition.lang = 'th-TH'
		btnElem.addEventListener('click', onClick)
	}

	run()
})()
