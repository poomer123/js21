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

	function onResult(event) {
		const textElem = document.querySelector('.text')
		const { transcript } = event.results[0][0]
		textElem.innerText = transcript
	}

	function run() {
		recognition.lang = 'th-TH'

		recognition.addEventListener('result', onResult)
		btnElem.addEventListener('click', onClick)
	}

	run()
})()
