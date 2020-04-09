;(() => {
	const key = 'key'
	const loaderElem = document.querySelector('.loader')
	let page = 1

	function showLoader() {
		loaderElem.classList.add('visible')
	}

	function hideLoader() {
		loaderElem.classList.remove('visible')
	}

	async function displayImages() {
		showLoader()

		const result = await fetch(
			`https://api.unsplash.com/photos/?client_id=${key}&page=${page}`
		)
		const images = await result.json()
		const galleryElem = document.querySelector('.gallery')
		images.forEach((img) => {
			const imgElem = document.createElement('img')
			imgElem.src = img.urls.small

			galleryElem.appendChild(imgElem)
		})

		hideLoader()
		page += 1
	}

	function onScroll() {
		// scrollTop ตำแหน่ง top ของหน้าจอที่ scroll อยู่ในปัจจุบัน
		// clientHeight ความสูงของหน้าจอที่แสดงอยู่ปัจจุบัน
		// scrollHeight ความสูงทั้งหมดของเว็บ
		// scrollTop + clientHeight = scrollHeight เสมอ
		const {
			scrollTop,
			clientHeight,
			scrollHeight,
		} = document.documentElement

		if (scrollTop + clientHeight >= scrollHeight - 10) {
			displayImages()
		}
	}

	function run() {
		document.addEventListener('scroll', onScroll)
		displayImages()
	}

	run()
})()
