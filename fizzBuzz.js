function fizzBuzz(count){
	let times = count;
	let counter = 1;
	while(counter <= times){
		if(counter % 3 == 0){
			if(counter % 5 == 0) {
				console.log('FizzBuzz');
			}
			console.log('Fizz');
				
		} else if (counter % 5 == 0) {
			console.log('Buzz');
		} else {
			console.log(counter);
		}
		counter ++;
	}
}
fizzBuzz(100);
