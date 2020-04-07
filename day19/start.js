;(() => {
	const carBrands = [
		'BMW',
		'Maserati',
		'Mercedes Benz',
		'Ferrari',
		'Toyota',
		'Honda',
		'Hyundai',
	]

	const searchElem = document.querySelector('.search')

	function clearResults() {
		const ulElem = document.querySelector('.results')
		if (ulElem) {
			document.body.removeChild(ulElem)
		}
	}

	function onSelectCarBrand(event) {
		searchElem.value = event.target.innerText
		clearResults()
	}

	function onInput(event) {
		const inputText = event.target.value.toLowerCase()
		const matchedCarBrand = carBrands.filter((carBrand) =>
			carBrand.toLowerCase().startsWith(inputText)
		)
		if (matchedCarBrand.length > 0) {
			const ulElem = document.createElement('ul')
			ulElem.classList.add('results')
			matchedCarBrand.forEach((carBrand) => {
				const liElem = document.createElement('li')
				liElem.innerText = carBrand
				liElem.onclick = onSelectCarBrand
				ulElem.appendChild(liElem)
			})
			document.body.appendChild(ulElem)
		}
	}

	function run() {
		searchElem.addEventListener('input', onInput)
		document.addEventListener('click', clearResults)
	}

	run()
})()
