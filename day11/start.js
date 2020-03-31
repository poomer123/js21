;(() => {
	function onScroll() {
		const sectionElems = Array.from(document.querySelectorAll('section'))
		sectionElems.forEach(section => {
			const img = section.querySelector('img')
			const text = section.querySelector('.text')

			const scrollPosition = window.pageYOffset
			const revealPosition = img.offsetTop + img.offsetHeight / 10
			if (scrollPosition >= revealPosition) {
				text.classList.add('reveal')
			}
		})
	}

	function run() {
		document.addEventListener('scroll', onScroll)
	}
	run()
})()
