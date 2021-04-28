const brasket = (str) => {
	let arr = str.split('');
	let found = false;
	if (arr.length % 2 === 1) return false;
	do {
		found = false;
		for (let i = 0; i < arr.length; i++) {
			if (srav(arr[i], arr[i + 1])) {
				arr.splice(i, 2);
				found = true;
			}
		}
	} while (found && !!arr.length);

	return found;
};

const srav = (str, str2) => {
	switch (str) {
		case '(':
			if (str2 === ')') return true;
			break;
		case '{':
			if (str2 === '}') return true;
			break;
		case '[':
			if (str2 === ']') return true;
			break;
		default:
			return false;
	}
	return false;
};

module.exports = brasket;
