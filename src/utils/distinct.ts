import recommendChat from './recommendChat'

const distinct = (): string[] => {
	const A = 1
	const B = 1
	let array = [
		recommendChat[Math.trunc(Math.random() * 31)],
		recommendChat[Math.trunc(Math.random() * 31)],
		recommendChat[Math.trunc(Math.random() * 31)],
		recommendChat[Math.trunc(Math.random() * 31)],
	]

	while (A === B) {
		if (
			array[0] === array[1] ||
			array[0] === array[2] ||
			array[0] === array[3] ||
			array[1] === array[2] ||
			array[1] === array[3] ||
			array[2] === array[3]
		) {
			array = [
				recommendChat[Math.trunc(Math.random() * 31)],
				recommendChat[Math.trunc(Math.random() * 31)],
				recommendChat[Math.trunc(Math.random() * 31)],
				recommendChat[Math.trunc(Math.random() * 31)],
			]
		} else {
			return array
		}
	}
	return ['']
}

export default distinct
