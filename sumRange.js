function range(start, end, step = 1) {
	let range = [];

	if (step > 0) {
		while(start <= end) {
			range.push(start);
			start += step;
		}
	} else {
		while(end >= start) {
			range.push(end);
			end += step;
		}
	}
	console.log(range);
	return range;
}

function sum(range){
	let sum = 0;
	range.forEach((r)=>{
		sum += r;
	})
	return sum;
}

console.log(sum(range(1,1000, 5)));