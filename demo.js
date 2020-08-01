let power = (num, power)=>{
	let count = 1;
	let sum = 1;
	while(count <= power){
		sum *= num;
		count ++;
	}
	return sum;
}
