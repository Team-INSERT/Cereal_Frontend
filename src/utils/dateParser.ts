const dateParser = (date: string) => {
	if (parseInt(date.substring(11, 13)) >= 12) {
		const date12 = parseInt(date.substring(11, 13)) - 12
		if (date12 === 0) {
			return `오후 12:${date.substring(14, 16)}`
		} else {
			return `오후 ${date12}:${date.substring(14, 16)}`
		}
	} else {
		return `오전 ${date.substring(11, 16)}`
	}
}

export default dateParser
