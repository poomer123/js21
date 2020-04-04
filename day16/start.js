;(() => {
	const message = new SpeechSynthesisUtterance()

	function onVoicesChanged() {
		const voices = speechSynthesis.getVoices()
		const thVoice = voices.find(voice => {
			return voice.lang === 'ko-KR'
		})
		message.voice = thVoice
	}

	function onClick(event) {
		message.text = event.target.getAttribute('alt')
		speechSynthesis.speak(message)
	}

	function run() {
		speechSynthesis.addEventListener('voiceschanged', onVoicesChanged)

		const imgElems = Array.from(document.querySelectorAll('img'))
		imgElems.forEach(img => img.addEventListener('click', onClick))
	}

	run()
})()
