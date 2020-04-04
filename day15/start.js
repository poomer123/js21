;(() => {
	const audioElem = document.querySelector('audio')
	const playBtnElem = document.querySelector('.play')
	const progressBarElem = document.querySelector('.progress-bar')
	const startTimeElem = document.querySelector('.start-time')
	const endTimeElem = document.querySelector('.end-time')

	function onClick() {
		if (audioElem.paused) {
			audioElem.play()
			playBtnElem.className = 'pause'
		} else {
			audioElem.pause()
			playBtnElem.className = 'play'
		}
	}

	function run() {
		playBtnElem.addEventListener('click', onClick)
	}

	run()
})()
