function chess(length){
	let size = length;
	let string = '';
	for(let i = 1; i<= size; i++){
		for(let j = 1; j <= size; j++){
			if((i+j) % 2 == 0){
				string += ' ';
			}else {
				string += '#';
			}

			if(j == size){
				string += '\n';
			}
		}
	}
	console.log(string);
}
chess(16);
