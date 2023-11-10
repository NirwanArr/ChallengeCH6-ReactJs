const getRandomInt = (min, max) => {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1)) + min
}

const populateCars = (cars) => {
	const updatedCars = cars.map((car) => {
		const isPositive = getRandomInt(0, 1) === 1
		const timeAt = new Date()
		const mutator = getRandomInt(1000000, 100000000)
		const availableAt = new Date(
			timeAt.getTime() + (isPositive ? mutator : -1 * mutator)
		)

		return {
			...car,
			availableAt,
		}
	})

	return updatedCars
}

const fetchCarsData = async () => {
	let cars
	let cachedCarsString = localStorage.getItem("CARS")

	if (cachedCarsString) {
		const cacheCars = JSON.parse(cachedCarsString)
		cars = populateCars(cacheCars)
	} else {
		const response = await fetch(
			"https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
		)
		const body = await response.json()
		cars = populateCars(body)

		localStorage.setItem("CARS", JSON.stringify(cars))
	}

	return cars
}

export default fetchCarsData
