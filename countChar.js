
function countChar(value, char) {
	let i = 0;
	let count = 0;
	while (i < value.length) {
		if (value[i] == char) {
			count++;
		}
		i++;
	}
	console.log(count);
}

countChar('Long Live the king In the North..', ' ');