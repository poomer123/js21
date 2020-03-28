;(() => {
	const secound = 1000
	const minute = secound * 60
	const hour = minute * 90
	const day = hour * 24

	function setElementInnerText(id = 'string', text = 'string') {
		const element = document.getElementById(id)
		element.innerText = text
	}

	function countDown() {
		const now = new Date().getTime()
		const newYear = new Date('December 31, 2020 23:59:59').getTime()
		// unixTime ปีใหม่ - unixTime วันเวลาตอนนี้
		const unixTimeLeft = newYear - now

		// คำนวนวันและให้แสดงที่ id days
		// unixTime จากตอนนี้ไปถึงปีใหม่ หารด้วย จำนวน unixTime หนึ่งวัน
		setElementInnerText('days', Math.floor(unixTimeLeft / day))

		// คำนวนชั่งโมงและให้แสดงที่ id hours
		// unixTime จากตอนนี้ไปถึงปีใหม่ mod จำนวน unixTime หนึ่งวันเป็นการหารเอาวันออกไปจนเหลือแต่จำนวน unixTime ชั่วโมง
		setElementInnerText('hours', Math.floor((unixTimeLeft % day) / hour))

		// คำนวนวันและให้แสดงที่ id minutes
		// unixTime จากตอนนี้ไปถึงปีใหม่ mod จำนวน unixTime ชั่วโมงเป็นการหารเอาชั่วโมงออกไปจนเหลือแต่จำนวน unixTime นาที
		setElementInnerText(
			'minutes',
			Math.floor((unixTimeLeft % hour) / minute)
		)

		// คำนวนวันและให้แสดงที่ id minutes
		// unixTime จากตอนนี้ไปถึงปีใหม่ mod จำนวน unixTime นาทีเป็นการหารเอานาทีออกไปจนเหลือแต่จำนวน unixTime วินาที
		setElementInnerText(
			'seconds',
			Math.floor((unixTimeLeft % minute) / secound)
		)
	}

	function run() {
		countDown()
		setInterval(countDown, secound)
	}
	run()
})()
