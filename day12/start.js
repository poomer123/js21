;(() => {
	const key = 'iqair_key'

	async function getAirQuality({ city, state, country }) {
		const response = await fetch(
			`https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${key}`
		)
		const result = await response.json()
		console.log(result)
	}

	function run() {
		const city = 'Sathon'
		const state = 'Bangkok'
		const country = 'Thailand'

		getAirQuality({ city, state, country })
	}
	run()
})()
