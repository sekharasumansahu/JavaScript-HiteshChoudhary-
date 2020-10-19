function reverse(arr) {
	let newArr = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		newArr.push(arr[i]);
	}
	return newArr;
}

function reversePlace(arr){
	let head = 0;
	let tail = arr.length - 1;

	while (tail > head) {

		arr[head] = arr[head] + arr[tail];
		arr[tail] = arr[head] - arr[tail];
		arr[head] = arr[head] - arr[tail];

		head ++;
		tail --;
	}
	return arr;
}


let arr = [
	1,2,3,4,5,6,7,8,9,10,11,12
];
console.log(reverse(arr));
console.log(reversePlace(arr));