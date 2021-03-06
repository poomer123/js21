;(() => {
	let draggingElem = null
	function onDragStart() {
		draggingElem = this
	}

	function onDrop() {
		this.append(draggingElem)
		draggingElem = null
	}

	function onDragOver(event) {
		event.preventDefault()
	}

	function onDragEnter(event) {
		event.preventDefault()
	}

	function run() {
		const taskElems = Array.from(document.querySelectorAll('.task'))
		const dropZoneElems = Array.from(
			document.querySelectorAll('.drop-zone')
		)

		taskElems.forEach(task => {
			task.addEventListener('dragstart', onDragStart)
		})

		dropZoneElems.forEach(dropZomeElem => {
			dropZomeElem.addEventListener('drop', onDrop)
			dropZomeElem.addEventListener('dragover', onDragOver)
			dropZomeElem.addEventListener('dragenter', onDragEnter)
		})
	}

	run()
})()
