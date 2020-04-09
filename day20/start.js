;(() => {
	function displayError(elem, message) {
		const smallElem = elem.parentElement.querySelector('small')
		smallElem.innerText = message
		elem.classList.add('invalid')
		form.classList.add('invalid')
	}

	function validateLength(elem, min, max) {
		const val = elem.value
		if (val.length < min || val.length > max) {
			const elemName = elem.getAttribute('name')
			displayError(
				elem,
				`${elemName} length must be between ${min} and ${max}`
			)
		}
	}

	function resetState(elem) {
		const smallElem = elem.parentElement.querySelector('small')
		smallElem.innerText = ''
		elem.classList.remove('invalid')
		form.classList.remove('invalid')
	}

	function validateFrom(event) {
		event.preventDefault()
		const emailElem = document.getElementById('email')
		const passwordElem = document.getElementById('password')

		resetState(emailElem)
		resetState(passwordElem)

		validateLength(emailElem, 10, 50)
		validateLength(passwordElem, 8, 20)
	}

	function run() {
		const formElem = document.querySelector('form')
		formElem.addEventListener('submit', validateFrom)
	}

	run()
})()
