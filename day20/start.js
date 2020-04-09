;(() => {
	function displayError(elem, message) {
		const smallElem = elem.parentElement.querySelector('small')
		smallElem.innerText = message
		elem.classList.add('invalid')
		form.classList.add('invalid')
	}

	function displaySuccess() {
		document.body.innerHTML = ''

		const pElem = document.createElement('p')
		pElem.innerText = 'You have been logged in successfully'
		pElem.classList.add('success')

		document.body.appendChild(pElem)
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

	function validateEmail(elem) {
		// ใช้ RegX โดยเปิดและปิดบรรทัดด้วย / เพื่อบอกว่าเป็นการใช้ RegX
		// \S+ ใช้ String มีความยาวมากกว่า 1 ตัว
		// \. ต้องการ .
		const regex = /\S+@\S+\.\S+/
		if (!regex.test(elem.value)) {
			displayError(elem, 'Email must be valid')
		}
	}

	function validateFrom(event) {
		event.preventDefault()
		const emailElem = document.getElementById('email')
		const passwordElem = document.getElementById('password')

		resetState(emailElem)
		resetState(passwordElem)

		validateLength(emailElem, 10, 50)
		validateLength(passwordElem, 8, 20)

		validateEmail(emailElem)

		const isValidForm = !form.classList.contains('invalid')
		if (isValidForm) {
			displaySuccess()
		}
	}

	function run() {
		const formElem = document.querySelector('form')
		formElem.addEventListener('submit', validateFrom)
	}

	run()
})()
