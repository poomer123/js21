;(() => {
	const key = 'key'
	let page = 1
	async function displayImages() {
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
	}

	function run() {
		displayImages()
	}

	run()
})()
