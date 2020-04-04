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
		progressBarElem.value = currentTime
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

	function onLoadedData() {
		endTimeElem.innerHTML = getDuration(audioElem.duration)
		progressBarElem.max = audioElem.duration
	}

	function onInput() {
		audioElem.currentTime = progressBarElem.value
	}

	function onEnded() {
		playBtnElem.className = 'play'
		audioElem.currentTime = 0
	}

	function run() {
		playBtnElem.addEventListener('click', onClick)
		audioElem.addEventListener('timeupdate', onTimeUpdate)
		audioElem.addEventListener('loadeddata', onLoadedData)
		audioElem.addEventListener('ended', onEnded)
		progressBarElem.addEventListener('input', onInput)
	}

	run()
})()
