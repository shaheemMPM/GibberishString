let randomizer = (len) => {
	let string = ''
	for (let i = 0; i < len; i++) {
		let charCase = Math.floor(Math.random() * 10)%2
        	if (charCase === 0) {
			string += String.fromCharCode(Math.floor(Math.random() * 24) + 65)	
        	} else {
			string += String.fromCharCode(Math.floor(Math.random() * 24) + 97)
		}	
	}
	return string
}

module.exports.gibberishString = randomizer
