;(() => {
	const audioElem = document.querySelector('audio')
	const playBtnElem = document.querySelector('.play')
	const progressBarElem = document.querySelector('.progress-bar')
	const startTimeElem = document.querySelector('.start-time')
	const endTimeElem = document.querySelector('.end-time')

	function getDuration(time = '00.000000') {
		// คำนวณนาที และ วินาที
		const minutes = Math.floor((time / 60) % 60).toString()
		const seconds = Math.floor(time % 60)
			.toString()
			.padStart(2, '0')

		return `${minutes}:${seconds}`
	}

	function onTimeUpdate() {
		const { currentTime } = audioElem
		startTimeElem.innerHTML = getDuration(currentTime)
	}

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
		audioElem.addEventListener('timeupdate', onTimeUpdate)
	}

	run()
})()
